/* Tris en barres : traduction en JavaScript du programme VPython tris.py.
   Les algorithmes, le décompte des étapes, les vitesses (rate) et les
   mouvements (recul, glissement, retour) suivent le code d'origine ligne à
   ligne ; seule la 3D est rendue en perspective cavalière sur un canevas.
   Conteneur attendu : <div class="anim" data-anim="tris"></div>               */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="tris"]');
  if (!root) return;

  // 100 couleurs de la palette viridis (celles de tris.py)
  const VIRIDIS = [[68,1,84],[69,4,87],[70,8,92],[70,11,94],[71,16,99],[71,19,101],[72,23,105],[72,26,108],[72,29,111],[72,33,115],[72,36,117],[72,40,120],[71,42,122],[71,46,124],[70,48,126],[70,52,128],[69,55,129],[68,58,131],[67,62,133],[66,64,134],[65,68,135],[64,70,136],[62,73,137],[62,76,138],[60,79,138],[59,82,139],[58,84,140],[56,88,140],[55,90,140],[54,93,141],[53,95,141],[51,98,141],[50,100,142],[49,103,142],[48,106,142],[47,108,142],[46,111,142],[45,113,142],[44,115,142],[43,117,142],[42,120,142],[41,122,142],[40,125,142],[39,128,142],[38,130,142],[37,132,142],[36,134,142],[35,137,142],[34,139,141],[33,142,141],[33,145,140],[32,146,140],[31,149,139],[31,151,139],[31,154,138],[30,156,137],[31,159,136],[31,161,136],[32,163,134],[33,166,133],[34,168,132],[37,171,130],[38,173,129],[41,175,127],[44,177,126],[47,180,124],[50,182,122],[55,184,120],[59,187,117],[63,188,115],[68,191,112],[72,193,110],[78,195,107],[82,197,105],[88,199,101],[94,201,98],[99,203,95],[105,205,91],[110,206,88],[117,208,84],[122,209,81],[129,211,77],[134,213,73],[142,214,69],[149,216,64],[155,217,60],[162,218,55],[168,219,52],[176,221,47],[181,222,43],[189,223,38],[194,223,35],[202,225,31],[210,226,27],[216,226,25],[223,227,24],[229,228,25],[236,229,27],[241,229,29],[248,230,33]];
  const FOND = 'rgb(2,61,96)';

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Des barres colorées de hauteurs différentes, que l'algorithme de tri choisi range par ordre croissant en les échangeant"></canvas>
<div class="anim-ctrl">
  <label>Nombre d'éléments <select data-k="n"><option>20</option><option>100</option></select></label>
  <label>Algorithme <select data-k="algo">
    <option value="bulle">tri à bulles</option><option value="insertion">tri insertion</option>
    <option value="selection">tri sélection</option><option value="fusion">tri fusion</option>
    <option value="rapide" selected>tri rapide</option></select></label>
  <button type="button" data-k="go">Trier</button>
  <button type="button" class="sec" data-k="melange">Mélanger à nouveau</button>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), selN = $('[data-k="n"]'), selA = $('[data-k="algo"]'), btnGo = $('[data-k="go"]'), btnM = $('[data-k="melange"]');
  let N = 20, taux = 300, barres = [], etapes = 0, dim, occupe = false;
  const randint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

  // ------------------------------------------------------------------ rate()
  // « while cond : rate(r) ; corps » : au plus r passages par seconde, comme en VPython
  let dernier = 0;
  function image() { return new Promise(res => requestAnimationFrame(t => { const dt = dernier ? Math.min(0.05, (t - dernier) / 1000) : 1 / 60; dernier = t; dessiner(); res(dt); })); }
  async function boucle(cond, r, corps) {
    let credit = 0;
    while (cond()) {
      credit += r * await image();
      let k = Math.max(1, Math.floor(credit)); credit -= k;
      while (k-- > 0 && cond()) corps();
    }
  }

  // ------------------------------------------------------------------ barres
  function creer() {
    const couleurs = N === 20 ? VIRIDIS.filter((_, i) => i % 5 === 0) : VIRIDIS;
    barres = [];
    for (let i = 0; i < N; i++) barres.push({ x: i - 0.5, y: i / 4, z: 0.1, height: i / 2 + 1, color: couleurs[i] });
  }
  async function permuter(L, i, j, taux) {
    const pos1 = L[i].x, pos2 = L[j].x, dx = (pos2 - pos1) / 100, dz = 0.0001;
    await boucle(() => L[i].z > -0.2, taux * 100, () => { L[i].z -= dz * 2; L[j].z += dz; });
    await boucle(() => Math.abs(L[i].x - pos2) > 1e-3, taux, () => { L[i].x += dx; L[j].x -= dx; });
    await boucle(() => L[i].z < 0.1, taux * 100, () => { L[i].z += dz * 2; L[j].z -= dz; });
    [L[i], L[j]] = [L[j], L[i]];
    return L;
  }
  async function melange(L) {
    for (let rep = 0; rep < N * 2; rep++) {
      const i = randint(0, N - 1), j = randint(0, N - 1);
      await permuter(L, i, j, taux * N);
    }
    etapes = 0;
  }
  function melangeInstantane(L) {                 // au chargement : même mélange, sans animation
    for (let rep = 0; rep < N * 2; rep++) {
      const i = randint(0, N - 1), j = randint(0, N - 1);
      [L[i].x, L[j].x] = [L[j].x, L[i].x]; [L[i], L[j]] = [L[j], L[i]];
    }
  }

  // ------------------------------------------------------------------ tri à bulles
  async function tri_bulle(L) {
    const n = L.length;
    for (let i = 0; i < n - 1; i++)
      for (let j = 0; j < n - i - 1; j++) {
        etapes += 1;
        if (L[j].height > L[j + 1].height) { L = await permuter(L, j, j + 1, taux); etapes += 1; }
      }
  }

  // ------------------------------------------------------------------ tri fusion
  async function fusion(A, B, taux) {
    if (A.length === 0) { etapes += 1; return B; }
    if (B.length === 0) { etapes += 1; return A; }
    etapes += 1;
    if (A[0].height <= B[0].height) { etapes += 1; return [A[0], ...await fusion(A.slice(1), B, taux)]; }
    const pos1 = A[0].x, pos2 = B[0].x, dx = 1 / 100, dz = 0.0001;
    await boucle(() => A[0].z > -0.2, taux * 100, () => { B[0].z += dz; for (const a of A) a.z -= dz * 2; });
    await boucle(() => Math.abs(B[0].x - pos1) > 1e-3, taux, () => { B[0].x += dx * (pos1 - pos2); for (const a of A) a.x += dx; });
    await boucle(() => A[0].z < 0.1, taux * 100, () => { B[0].z -= dz; for (const a of A) a.z += dz * 2; });
    etapes += 1;
    return [B[0], ...await fusion(A, B.slice(1), taux)];
  }
  async function tri_fusion(L) {
    const n = L.length;
    if (n <= 1) return L;
    etapes += 1;
    return fusion(await tri_fusion(L.slice(0, Math.floor(n / 2))), await tri_fusion(L.slice(Math.floor(n / 2))), taux);
  }

  // ------------------------------------------------------------------ tri insertion
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

  // ------------------------------------------------------------------ tri rapide
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

  // ------------------------------------------------------------------ tri sélection
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

  // ------------------------------------------------------------------ dessin (perspective cavalière)
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 800, h = Math.round(w * 0.6);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
  }
  const teinte = (c, k) => `rgb(${c.map(v => Math.round(k >= 1 ? v + (255 - v) * (k - 1) : v * k)).join(',')})`;
  function dessiner() {
    if (!dim) return;
    const c = cv.getContext('2d'), { w, h } = dim;
    const s = Math.min(w / (N + 2), (h - 40) / (N / 2 + 2)), KX = 0.55, KY = 0.4;   // obliques de la profondeur
    const ox = (w - N * s) / 2 + 0.5 * s, oy = h - 46;
    const P = (X, Y, Z) => [ox + (X - KX * Z) * s, oy - (Y - KY * Z) * s];
    c.fillStyle = FOND; c.fillRect(0, 0, w, h);
    const ordre = barres.slice().sort((a, b) => a.z - b.z || a.x - b.x);           // le fond d'abord
    for (const b of ordre) {
      const x0 = b.x - 0.5, x1 = b.x + 0.5, y0 = b.y - b.height / 2, y1 = b.y + b.height / 2, zf = b.z + 0.1, zb = b.z - 0.1;
      const poly = (pts, col) => { c.fillStyle = col; c.beginPath(); pts.forEach((p, k) => { const [X, Y] = P(...p); k ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.closePath(); c.fill(); };
      poly([[x0, y1, zf], [x1, y1, zf], [x1, y1, zb], [x0, y1, zb]], teinte(b.color, 1.35));   // dessus
      poly([[x1, y0, zf], [x1, y1, zf], [x1, y1, zb], [x1, y0, zb]], teinte(b.color, 0.62));   // côté
      poly([[x0, y0, zf], [x1, y0, zf], [x1, y1, zf], [x0, y1, zf]], teinte(b.color, 1));      // face
    }
    c.fillStyle = '#fff'; c.font = `${Math.max(13, Math.round(w / 45))}px sans-serif`; c.textAlign = 'center';
    c.fillText(`${etapes} étapes`, w / 2, h - 14);
  }

  // ------------------------------------------------------------------ menus
  function verrouiller(v) { occupe = v; [selN, selA, btnGo, btnM].forEach(e => e.disabled = v); }
  async function lancer(f) { if (occupe) return; verrouiller(true); try { await f(); } finally { verrouiller(false); dessiner(); } }
  btnGo.addEventListener('click', () => lancer(async () => {
    etapes = 0;
    const a = selA.value;
    if (a === 'bulle') await tri_bulle(barres);
    else if (a === 'insertion') await tri_insertion(barres);
    else if (a === 'selection') await tri_selection(barres);
    else if (a === 'fusion') barres = await tri_fusion(barres);
    else await tri_rapide(barres, 0, barres.length - 1);
  }));
  btnM.addEventListener('click', () => lancer(() => melange(barres)));
  selN.addEventListener('change', () => {
    N = +selN.value; taux = N === 20 ? 300 : 5000;
    creer(); melangeInstantane(barres); etapes = 0; dessiner();
  });
  window.addEventListener('resize', fit);
  creer(); melangeInstantane(barres); fit();
})();
