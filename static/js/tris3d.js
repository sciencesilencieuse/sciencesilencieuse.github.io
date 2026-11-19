/* Tris en barres, en 3D : traduction du programme VPython tris.py avec three.js.
   Mêmes barres (largeur 1, hauteur i/2 + 1, couleurs viridis), mêmes algorithmes,
   même décompte des étapes, mêmes cadences rate() et même geste pour chaque
   échange : une barre recule, l'autre avance, elles glissent l'une derrière
   l'autre, puis reprennent leur place dans le rang.
   Seule liberté : les barres ont un peu de profondeur et s'écartent assez du
   rang pour ne jamais traverser leurs voisines.
   Conteneur attendu : <div class="anim" data-anim="tris"></div>                 */
import { THREE, creerScene, boucle, couleur } from './scene3d.js';

/* Deux usages : data-anim="tris" (20 ou 100 barres, comme tris.py) et
   data-anim="tris-stable" (5 barres dont deux de même hauteur, une blanche et
   une noire, comme tristable.py : un tri est stable s'il ne les intervertit pas). */
document.querySelectorAll('.anim[data-anim="tris"], .anim[data-anim="tris-stable"]').forEach(init);

function init(root) {
  const STABLE = root.dataset.anim === 'tris-stable';
  // couleurs et hauteurs de tristable.py
  const COUL_STABLE = [[0, 118, 186], [29, 177, 0], [236, 239, 243], [20, 20, 20], [238, 34, 12]];
  const H_STABLE = [1, 1.5, 2, 2, 2.5], NOMS_STABLE = ['', '', 'blanche', 'noire', ''];
  // 100 couleurs de la palette viridis (celles de tris.py)
  const VIRIDIS = [[68,1,84],[69,4,87],[70,8,92],[70,11,94],[71,16,99],[71,19,101],[72,23,105],[72,26,108],[72,29,111],[72,33,115],[72,36,117],[72,40,120],[71,42,122],[71,46,124],[70,48,126],[70,52,128],[69,55,129],[68,58,131],[67,62,133],[66,64,134],[65,68,135],[64,70,136],[62,73,137],[62,76,138],[60,79,138],[59,82,139],[58,84,140],[56,88,140],[55,90,140],[54,93,141],[53,95,141],[51,98,141],[50,100,142],[49,103,142],[48,106,142],[47,108,142],[46,111,142],[45,113,142],[44,115,142],[43,117,142],[42,120,142],[41,122,142],[40,125,142],[39,128,142],[38,130,142],[37,132,142],[36,134,142],[35,137,142],[34,139,141],[33,142,141],[33,145,140],[32,146,140],[31,149,139],[31,151,139],[31,154,138],[30,156,137],[31,159,136],[31,161,136],[32,163,134],[33,166,133],[34,168,132],[37,171,130],[38,173,129],[41,175,127],[44,177,126],[47,180,124],[50,182,122],[55,184,120],[59,187,117],[63,188,115],[68,191,112],[72,193,110],[78,195,107],[82,197,105],[88,199,101],[94,201,98],[99,203,95],[105,205,91],[110,206,88],[117,208,84],[122,209,81],[129,211,77],[134,213,73],[142,214,69],[149,216,64],[155,217,60],[162,218,55],[168,219,52],[176,221,47],[181,222,43],[189,223,38],[194,223,35],[202,225,31],[210,226,27],[216,226,25],[223,227,24],[229,228,25],[236,229,27],[241,229,29],[248,230,33]];

  root.innerHTML = `
<div class="scene3d"><div class="scene3d-etiquette" aria-live="off"></div></div>
<div class="anim-ctrl">
  <label${STABLE ? ' hidden' : ''}>Nombre d'éléments <select data-k="n"><option>20</option><option>100</option></select></label>
  <label>Algorithme <select data-k="algo">
    <option value="bulle">tri à bulles</option><option value="insertion">tri insertion</option>
    <option value="selection">tri sélection</option><option value="fusion">tri fusion</option>
    <option value="rapide" selected>tri rapide</option></select></label>
  <button type="button" data-k="go">Trier</button>
  <button type="button" class="sec" data-k="melange">Mélanger à nouveau</button>
</div>${STABLE ? '<p class="ts-verdict" aria-live="polite"></p>' : ''}`;

  const $ = s => root.querySelector(s);
  const hote = $('.scene3d'), etiquette = $('.scene3d-etiquette');
  const selN = $('[data-k="n"]'), selA = $('[data-k="algo"]'), btnGo = $('[data-k="go"]'), btnM = $('[data-k="melange"]');
  const verdict = $('.ts-verdict');
  if (STABLE) etiquette.hidden = true;
  const S = creerScene(hote, { ratio: STABLE ? 0.5 : 0.6, hMax: STABLE ? 360 : 470,
    label: STABLE ? "Cinq barres colorées, dont deux de même hauteur, une blanche et une noire, que l'algorithme choisi range par ordre croissant"
                  : "Des barres colorées de hauteurs différentes, que l'algorithme de tri choisi range par ordre croissant en les échangeant" });
  if (S) {
    const { scene } = S;
    if (!S.tactile) {
      const a = document.createElement('span'); a.className = 'anim-astuce';
      a.textContent = 'Glisser pour tourner la scène, double-clic pour revenir à la vue de départ';
      root.querySelector('.anim-ctrl').appendChild(a);
    }

    let N = STABLE ? 5 : 20, taux = STABLE ? 150 : 300, barres = [], etapes = 0, occupe = false;
    const randint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

    // ---------------------------------------------------------------- les barres
    // rang : z = 0 ; une barre qui recule va en z = -ECART, une barre qui avance en z = +ECART
    const EP = 0.86, ECART = 1.05, PAS_Z = ECART / 1500;   // 1500 passages, comme 0,3 / 0,0002 dans tris.py
    class Barre {
      constructor(i, c, hauteur, nom) {
        this.height = hauteur !== undefined ? hauteur : i / 2 + 1;
        this.nom = nom || '';
        const geo = new THREE.BoxGeometry(EP, this.height, EP);
        const mat = new THREE.MeshStandardMaterial({ color: couleur(c), roughness: 0.5, metalness: 0.0, envMapIntensity: 0.55 });
        this.m = new THREE.Mesh(geo, mat);
        this.m.castShadow = this.m.receiveShadow = true;
        if (STABLE)                                     // contour : la barre blanche se détache du fond blanc
          this.m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0x64748b })));
        this.m.position.set(i - 0.5, this.height / 2 - 0.5, 0);   // pied des barres en y = -0,5, comme dans tris.py
        scene.add(this.m);
      }
      get x() { return this.m.position.x; } set x(v) { this.m.position.x = v; }
      get z() { return this.m.position.z; } set z(v) { this.m.position.z = v; }
      jeter() { scene.remove(this.m); this.m.geometry.dispose(); this.m.material.dispose(); this.m.children.forEach(c => { c.geometry.dispose(); c.material.dispose(); }); }
    }
    // un plateau gris clair sous le rang
    const plateau = new THREE.Mesh(new THREE.BoxGeometry(1, 0.16, 1),
      new THREE.MeshStandardMaterial({ color: 0xd3d9e1, roughness: 0.85, envMapIntensity: 0.6 }));
    plateau.receiveShadow = true;
    scene.add(plateau);

    function creer() {
      barres.forEach(b => b.jeter());
      const couleurs = N === 20 ? VIRIDIS.filter((_, i) => i % 5 === 0) : VIRIDIS;
      barres = [];
      for (let i = 0; i < N; i++) barres.push(STABLE ? new Barre(i, COUL_STABLE[i], H_STABLE[i], NOMS_STABLE[i]) : new Barre(i, couleurs[i]));
      const L = N + 1.6, P = 2 * ECART + EP + 1.2;
      plateau.scale.set(L, 1, P); plateau.position.set(N / 2 - 1, -0.5 - 0.08, 0);
      const haut = STABLE ? 2.1 : N / 2 + 0.5;
      const boite = new THREE.Box3(new THREE.Vector3(-1.8, -0.66, -P / 2), new THREE.Vector3(N + 0.2, haut, P / 2));
      S.cadrer(boite, new THREE.Vector3(N / 2 - 1, STABLE ? 0.6 : N / 4.2, 0), STABLE ? 18 : 13, -12);
    }
    function afficher() { etiquette.textContent = `${etapes} étapes`; }

    async function permuter(L, i, j, taux) {
      if (i === j) return L;                        // rien à échanger
      const pos2 = L[j].x, dx = (pos2 - L[i].x) / 100;
      await boucle(() => L[i].z > -ECART, taux * 100, () => { L[i].z -= PAS_Z; L[j].z += PAS_Z; });
      await boucle(() => Math.abs(L[i].x - pos2) > 1e-3, taux, () => { L[i].x += dx; L[j].x -= dx; afficher(); });
      await boucle(() => L[i].z < 0, taux * 100, () => { L[i].z += PAS_Z; L[j].z -= PAS_Z; });
      L[i].z = L[j].z = 0;
      [L[i], L[j]] = [L[j], L[i]];
      return L;
    }
    async function melange(L) {
      for (let rep = 0; rep < N * 2; rep++) {
        const i = randint(0, N - 1), j = randint(0, N - 1);
        if (i !== j) await permuter(L, i, j, taux * N);
      }
      etapes = 0; afficher();
    }
    function melangeInstantane(L) {                 // au chargement : même mélange, sans animation
      for (let rep = 0; rep < N * 2; rep++) {
        const i = randint(0, N - 1), j = randint(0, N - 1);
        [L[i].x, L[j].x] = [L[j].x, L[i].x]; [L[i], L[j]] = [L[j], L[i]];
      }
    }

    // ---------------------------------------------------------------- tri à bulles
    async function tri_bulle(L) {
      const n = L.length;
      for (let i = 0; i < n - 1; i++)
        for (let j = 0; j < n - i - 1; j++) {
          etapes += 1;
          if (L[j].height > L[j + 1].height) { L = await permuter(L, j, j + 1, taux); etapes += 1; }
        }
    }

    // ---------------------------------------------------------------- tri fusion
    // A recule et se décale d'un cran, B[0] avance et glisse devant elle jusqu'à sa place
    async function fusion(A, B, taux) {
      if (A.length === 0) { etapes += 1; return B; }
      if (B.length === 0) { etapes += 1; return A; }
      etapes += 1;
      if (A[0].height <= B[0].height) { etapes += 1; return [A[0], ...await fusion(A.slice(1), B, taux)]; }
      const pos1 = A[0].x, pos2 = B[0].x, dx = 1 / 100;
      await boucle(() => A[0].z > -ECART, taux * 100, () => { B[0].z += PAS_Z; for (const a of A) a.z -= PAS_Z; });
      await boucle(() => Math.abs(B[0].x - pos1) > 1e-3, taux, () => { B[0].x += dx * (pos1 - pos2); for (const a of A) a.x += dx; afficher(); });
      await boucle(() => A[0].z < 0, taux * 100, () => { B[0].z -= PAS_Z; for (const a of A) a.z += PAS_Z; });
      B[0].z = 0; for (const a of A) a.z = 0;
      etapes += 1;
      return [B[0], ...await fusion(A, B.slice(1), taux)];
    }
    async function tri_fusion(L) {
      const n = L.length;
      if (n <= 1) return L;
      etapes += 1;
      return fusion(await tri_fusion(L.slice(0, Math.floor(n / 2))), await tri_fusion(L.slice(Math.floor(n / 2))), taux);
    }

    // ---------------------------------------------------------------- tri insertion
    async function tri_insertion(L) {
      const K = L.slice();
      for (let i = 1; i < L.length; i++) {
        const x = K[i]; let j = i;
        etapes += 1;
        while (j > 0 && K[j - 1].height > x.height) { K[j] = K[j - 1]; j -= 1; }
        for (let k = i; k > j; k--) { await permuter(L, k - 1, k, taux); etapes += 1; }   // pour l'affichage
        K[j] = x;
      }
      return K;
    }

    // ---------------------------------------------------------------- tri rapide
    async function partitionner(L, p, d, pivot) {
      await permuter(L, pivot, d, taux);
      etapes += 1;
      let j = p;
      for (let i = p; i < d; i++) {
        etapes += 1;
        if (L[i].height <= L[d].height) { await permuter(L, i, j, taux); j += 1; etapes += 1; }
      }
      await permuter(L, d, j, taux);
      etapes += 1;
      return j;
    }
    async function tri_rapide(L, p, d) {
      etapes += 1;
      if (p < d) {
        let pivot = randint(p, d);
        pivot = await partitionner(L, p, d, pivot);
        await tri_rapide(L, p, pivot - 1);
        await tri_rapide(L, pivot + 1, d);
      }
    }

    // ---------------------------------------------------------------- tri sélection
    async function tri_selection(L) {
      const n = L.length;
      for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
          etapes += 1;
          if (L[j].height < L[min].height) { min = j; etapes += 1; }
        }
        if (min !== i) { await permuter(L, i, min, taux); etapes += 1; }
      }
    }

    // ---------------------------------------------------------------- menus
    function verrouiller(v) { occupe = v; [selN, selA, btnGo, btnM].forEach(e => e.disabled = v); }
    async function lancer(f) { if (occupe) return; verrouiller(true); try { await f(); } finally { verrouiller(false); afficher(); } }
    const ordre = () => barres.findIndex(b => b.nom === 'blanche') < barres.findIndex(b => b.nom === 'noire') ? 'la blanche avant la noire' : 'la noire avant la blanche';
    function annoncer() { if (verdict) verdict.innerHTML = `Avant le tri : ${ordre()}.`; }
    btnGo.addEventListener('click', () => lancer(async () => {
      etapes = 0; afficher();
      const avant = STABLE ? ordre() : '';
      const a = selA.value;
      if (a === 'bulle') await tri_bulle(barres);
      else if (a === 'insertion') await tri_insertion(barres);
      else if (a === 'selection') await tri_selection(barres);
      else if (a === 'fusion') barres = await tri_fusion(barres);
      else await tri_rapide(barres, 0, barres.length - 1);
      if (STABLE) {
        const apres = ordre();
        verdict.innerHTML = `Avant le tri : ${avant}. Après : ${apres}. ` + (avant === apres
          ? '<b>Ordre conservé</b> (cette fois-ci du moins : relancez pour voir si c\'est toujours le cas).'
          : '<b>Ordre inversé : ce tri n\'est pas stable.</b>');
      }
    }));
    btnM.addEventListener('click', () => lancer(async () => { await melange(barres); annoncer(); }));
    selN.addEventListener('change', () => {
      N = +selN.value; taux = N === 20 ? 300 : 5000;
      creer(); melangeInstantane(barres); etapes = 0; afficher();
    });
    creer(); melangeInstantane(barres); afficher(); annoncer();
  }
}
