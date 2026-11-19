/* Tours de Hanoï en 3D : traduction du programme VPython hanoi.py avec three.js.
   Mêmes constantes (h, N, R, r, vit), mêmes tiges disposées en triangle en
   (-R, 0, R), (0, 0, -R), (R, 0, R), mêmes disques troués (extrusion d'un anneau
   de rayon extérieur R - (R - r) i / N), mêmes couleurs, même caméra
   (scene.axis = (0, -1, -2)), même déplacement en trois boucles rythmées par
   rate() et même fonction Hanoi récursive.
   Libertés : le socle est un peu plus grand et en bois, les disques sont biseautés.
   Conteneur attendu : <div class="anim" data-anim="hanoi"></div>               */
import { THREE, creerScene, boucle, couleur } from './scene3d.js';

const root = document.querySelector('.anim[data-anim="hanoi"]');
if (root) {
  const h = 0.2, R = 2, r = 0.5;
  let N = 6, vit = 30;
  const COULEURS = [[174, 40, 92], [4, 63, 97], [61, 116, 133], [66, 144, 80], [183, 172, 89], [255, 42, 16], [151, 14, 83], [0, 108, 101]];
  const TIGES = [new THREE.Vector3(-R, 0, R), new THREE.Vector3(0, 0, -R), new THREE.Vector3(R, 0, R)];
  const RAYON_TIGE = 0.17, TROU = 0.2, HAUT_TIGE = R, COTE = 10.4, EPAISSEUR = 0.42;

  root.innerHTML = `
<div class="scene3d"></div>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Disques <select data-k="n">${[3, 4, 5, 6, 7, 8].map(k => `<option${k === 6 ? ' selected' : ''}>${k}</option>`).join('')}</select></label>
  <label>Vitesse <input type="range" min="5" max="120" step="5" value="30" data-k="vit"></label>
  <span data-o="compte" style="font-variant-numeric:tabular-nums;"></span>
</div>`;

  const $ = s => root.querySelector(s);
  const btnGo = $('[data-k="go"]'), selN = $('[data-k="n"]'), inV = $('[data-k="vit"]'), outC = $('[data-o="compte"]');
  const S = creerScene($('.scene3d'), { ratio: 0.66, hMax: 480,
    label: 'Trois tiges sur un socle en bois ; les disques colorés passent de la tige de gauche à celle de droite, un par un, sans jamais poser un grand disque sur un petit' });
  if (S) {
    const { scene } = S;
    if (!S.tactile) {
      const a = document.createElement('span'); a.className = 'anim-astuce';
      a.textContent = 'Glisser pour tourner la scène, double-clic pour revenir à la vue de départ';
      root.querySelector('.anim-ctrl').appendChild(a);
    }

    // ---------------------------------------------------------------- le socle en bois
    function textureBois() {
      const c = document.createElement('canvas'); c.width = c.height = 512;
      const g = c.getContext('2d');
      g.fillStyle = '#a8784a'; g.fillRect(0, 0, 512, 512);
      let graine = 7; const alea = () => (graine = (graine * 16807) % 2147483647) / 2147483647;
      for (let k = 0; k < 140; k++) {                       // veines : lignes ondulées plus ou moins sombres
        const y0 = alea() * 512, a = 0.6 + alea() * 2.2, f = 0.002 + alea() * 0.005, ph = alea() * 6.3;
        g.strokeStyle = `rgba(${alea() < 0.5 ? '84,52,26' : '205,160,110'},${0.08 + alea() * 0.22})`;
        g.lineWidth = 0.6 + alea() * 2.2;
        g.beginPath();
        for (let x = 0; x <= 512; x += 8) { const y = y0 + a * Math.sin(f * x * 6.28 + ph) + 3 * Math.sin(x * 0.002 + k); x ? g.lineTo(x, y) : g.moveTo(x, y); }
        g.stroke();
      }
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
      t.repeat.set(1 / COTE, 1 / COTE);
      return t;
    }
    {
      const L = COTE / 2 - 0.08, k = 0.7, forme = new THREE.Shape();      // carré aux coins arrondis
      forme.moveTo(-L + k, -L); forme.lineTo(L - k, -L); forme.quadraticCurveTo(L, -L, L, -L + k);
      forme.lineTo(L, L - k); forme.quadraticCurveTo(L, L, L - k, L); forme.lineTo(-L + k, L);
      forme.quadraticCurveTo(-L, L, -L, L - k); forme.lineTo(-L, -L + k); forme.quadraticCurveTo(-L, -L, -L + k, -L);
      const geo = new THREE.ExtrudeGeometry(forme, { depth: EPAISSEUR - 0.16, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 4, curveSegments: 16 });
      geo.rotateX(-Math.PI / 2);                            // l'extrusion part vers le haut
      const socle = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: textureBois(), roughness: 0.6, metalness: 0, envMapIntensity: 0.6 }));
      socle.position.y = -EPAISSEUR + 0.08;                 // dessus du socle en y = 0, comme dans hanoi.py
      socle.castShadow = socle.receiveShadow = true;
      scene.add(socle);
    }

    // ---------------------------------------------------------------- les tiges
    const metal = new THREE.MeshStandardMaterial({ color: 0xc8ccd2, roughness: 0.28, metalness: 0.9 });
    for (const T of TIGES) {
      const tige = new THREE.Mesh(new THREE.CylinderGeometry(RAYON_TIGE, RAYON_TIGE, HAUT_TIGE, 32), metal);
      tige.position.set(T.x, HAUT_TIGE / 2, T.z);
      const bout = new THREE.Mesh(new THREE.SphereGeometry(RAYON_TIGE, 32, 12, 0, 2 * Math.PI, 0, Math.PI / 2), metal);
      bout.position.set(T.x, HAUT_TIGE, T.z);
      const rondelle = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.04, 40), metal);
      rondelle.position.set(T.x, 0.02, T.z);
      for (const m of [tige, bout, rondelle]) { m.castShadow = m.receiveShadow = true; scene.add(m); }
    }

    // ---------------------------------------------------------------- les disques troués
    const BIS = 0.035;
    function geoDisque(rayon) {
      const forme = new THREE.Shape(); forme.absarc(0, 0, rayon - BIS, 0, 2 * Math.PI, false);
      const trou = new THREE.Path(); trou.absarc(0, 0, TROU + BIS, 0, 2 * Math.PI, true);
      forme.holes.push(trou);
      const geo = new THREE.ExtrudeGeometry(forme, { depth: h - 2 * BIS - 0.006, bevelEnabled: true, bevelThickness: BIS, bevelSize: BIS, bevelSegments: 3, curveSegments: 72 });
      geo.translate(0, 0, -(h - 2 * BIS - 0.006) / 2);
      geo.rotateX(-Math.PI / 2);
      return geo;
    }
    class Disque {
      constructor(i) {
        this.m = new THREE.Mesh(geoDisque(R - (R - r) * i / N),
          new THREE.MeshStandardMaterial({ color: couleur(COULEURS[i % COULEURS.length]), roughness: 0.38, metalness: 0, envMapIntensity: 0.55 }));
        this.m.castShadow = this.m.receiveShadow = true;
        this.m.position.set(-R, h * i + h / 2, R);
        scene.add(this.m);
      }
      get pos() { return this.m.position; }
      jeter() { scene.remove(this.m); this.m.geometry.dispose(); this.m.material.dispose(); }
    }

    S.cadrer(new THREE.Box3(new THREE.Vector3(-COTE / 2, -EPAISSEUR, -COTE / 2), new THREE.Vector3(COTE / 2, 3.3, COTE / 2)),
             new THREE.Vector3(0, 0.6, 0), Math.atan(1 / 2) * 180 / Math.PI, 0);     // scene.axis = (0, -1, -2)

    // ---------------------------------------------------------------- le programme
    let disques = [[], [], []], coups = 0, etat = 'pret', pause = null, reprendre = null, generation = 0;
    const attente = () => pause;
    class Arret extends Error {}
    const majCompte = () => { outC.textContent = `${coups} / ${2 ** N - 1} déplacements`; };
    function creer() {
      disques.flat().forEach(d => d.jeter());
      disques = [[], [], []];
      for (let i = 0; i < N; i++) disques[0].push(new Disque(i));
      coups = 0; majCompte();
    }

    async function deplacement(tige_depart, tige_arrivee, gen) {
      const vivant = () => gen === generation, verif = () => { if (!vivant()) throw new Arret(); };
      verif();
      const M = disques[tige_depart].pop(), pos = M.pos, dt = 0.001;
      const cible = TIGES[tige_arrivee].clone().setY(3), dir = cible.clone().sub(pos.clone().setY(3)).normalize();
      await boucle(() => vivant() && pos.y <= 3, vit / dt, () => { pos.y += dt; }, attente);                     // on monte
      verif(); pos.y = 3;
      await boucle(() => vivant() && pos.distanceTo(cible) > 1e-2, vit / 2 / dt, () => { pos.addScaledVector(dir, 3 * dt); }, attente);   // on glisse
      verif(); pos.copy(cible);
      const fond = disques[tige_arrivee].length * h + h / 2;
      await boucle(() => vivant() && pos.y > fond, vit / dt, () => { pos.y -= dt; }, attente);                  // on descend
      verif(); pos.y = fond;
      disques[tige_arrivee].push(M); coups++; majCompte();
    }
    async function Hanoi(n, depart, cible, inter, gen) {
      if (n === 1) await deplacement(depart, cible, gen);
      else {
        await Hanoi(n - 1, depart, inter, cible, gen);
        await Hanoi(1, depart, cible, inter, gen);
        await Hanoi(n - 1, inter, cible, depart, gen);
      }
    }

    // ---------------------------------------------------------------- commandes
    async function lancer() {
      const gen = ++generation; etat = 'marche'; btnGo.textContent = 'Pause'; selN.disabled = true;
      try { await Hanoi(N, 0, 2, 1, gen); if (gen === generation) { etat = 'fini'; btnGo.textContent = 'Relancer'; selN.disabled = false; } }
      catch (e) { if (!(e instanceof Arret)) throw e; }
    }
    btnGo.addEventListener('click', () => {
      if (etat === 'marche') { etat = 'pause'; btnGo.textContent = 'Reprendre'; pause = new Promise(res => { reprendre = res; }); return; }
      if (etat === 'pause') { etat = 'marche'; btnGo.textContent = 'Pause'; const r0 = reprendre; pause = null; r0(); return; }
      if (etat === 'fini') creer();
      lancer();
    });
    $('[data-k="reset"]').addEventListener('click', () => {
      generation++; if (pause) { const r0 = reprendre; pause = null; r0(); }
      etat = 'pret'; btnGo.textContent = 'Lancer'; selN.disabled = false; creer();
    });
    selN.addEventListener('change', () => { N = +selN.value; creer(); });
    inV.addEventListener('input', () => { vit = +inV.value; });
    creer();
  }
}
