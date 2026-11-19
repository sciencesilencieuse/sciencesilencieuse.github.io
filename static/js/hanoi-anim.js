/* Tours de Hanoï : traduction en JavaScript du programme VPython hanoi.py.
   Mêmes constantes (h, N, R, r, vit), même socle, mêmes tiges en triangle,
   mêmes couleurs, même déplacement en trois boucles rythmées par rate(),
   et même fonction Hanoi récursive. La scène 3D est projetée selon l'axe de
   la caméra d'origine, scene.axis = (0, -1, -2).
   Conteneur attendu : <div class="anim" data-anim="hanoi"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="hanoi"]');
  if (!root) return;

  const h = 0.2, R = 2, r = 0.5;
  let N = 6, vit = 30;
  const FOND = 'rgb(97,75,150)';
  const COULEURS = [[174, 40, 92], [4, 63, 97], [61, 116, 133], [66, 144, 80], [183, 172, 89], [255, 42, 16], [151, 14, 83], [0, 108, 101]];
  const TIGES = [{ x: -R, y: 0, z: R }, { x: 0, y: 0, z: -R }, { x: R, y: 0, z: R }];
  const COS = 2 / Math.sqrt(5), SIN = 1 / Math.sqrt(5);     // caméra selon (0, -1, -2)

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Trois tiges sur un socle ; les disques colorés passent de la tige de gauche à celle de droite, un par un, sans jamais poser un grand disque sur un petit"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Disques <select data-k="n">${[3, 4, 5, 6, 7, 8].map(k => `<option${k === 6 ? ' selected' : ''}>${k}</option>`).join('')}</select></label>
  <label>Vitesse <input type="range" min="5" max="120" step="5" value="30" data-k="vit"></label>
  <span data-o="compte" style="font-variant-numeric:tabular-nums;"></span>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), btnGo = $('[data-k="go"]'), selN = $('[data-k="n"]'), inV = $('[data-k="vit"]'), outC = $('[data-o="compte"]');
  let disques, enVol = null, coups = 0, dim, etat = 'pret', pause = null, generation = 0;

  // ------------------------------------------------------------------ rate()
  let dernier = 0;
  function image() { return new Promise(res => requestAnimationFrame(t => { const dt = dernier ? Math.min(0.05, (t - dernier) / 1000) : 1 / 60; dernier = t; dessiner(); res(dt); })); }
  async function boucle(cond, r, corps) {
    let credit = 0;
    while (cond()) {
      if (pause) await pause;                     // bouton Pause
      credit += r * await image();
      let k = Math.max(1, Math.floor(credit)); credit -= k;
      while (k-- > 0 && cond()) corps();
    }
  }
  class Arret extends Error {}

  // ------------------------------------------------------------------ disques troués
  function creer() {
    disques = [[], [], []];
    for (let i = 0; i < N; i++)
      disques[0].push({ x: -2, y: h * i + h / 2, z: 2, rayon: R - (R - r) * i / N, color: COULEURS[i % COULEURS.length] });
    enVol = null; coups = 0; majCompte();
  }
  const majCompte = () => { outC.textContent = `${coups} / ${2 ** N - 1} déplacements`; };

  async function deplacement(tige_depart, tige_arrivee, gen) {
    const vivant = () => gen === generation, verif = () => { if (!vivant()) throw new Arret(); };
    verif();
    const M = disques[tige_depart].pop(); enVol = { M, tige: tige_depart };
    const dt = 0.001, A = TIGES[tige_arrivee], D = TIGES[tige_depart];
    const L = Math.hypot(A.x - D.x, A.z - D.z), ux = (A.x - D.x) / L, uz = (A.z - D.z) / L;
    await boucle(() => vivant() && M.y <= 3, vit / dt, () => { M.y += dt; });                    // on monte
    verif(); enVol.tige = -1;
    await boucle(() => vivant() && Math.hypot(M.x - A.x, M.y - 3, M.z - A.z) > 1e-2, vit / 2 / dt,
                 () => { M.x += 3 * ux * dt; M.z += 3 * uz * dt; });                              // on glisse
    verif(); enVol.tige = tige_arrivee;
    await boucle(() => vivant() && M.y > disques[tige_arrivee].length * h + h / 2, vit / dt, () => { M.y -= dt; });   // on descend
    verif();
    M.x = A.x; M.z = A.z; M.y = disques[tige_arrivee].length * h + h / 2;
    disques[tige_arrivee].push(M); enVol = null; coups++; majCompte();
  }
  async function Hanoi(n, depart, cible, inter, gen) {
    if (n === 1) await deplacement(depart, cible, gen);
    else {
      await Hanoi(n - 1, depart, inter, cible, gen);
      await Hanoi(1, depart, cible, inter, gen);
      await Hanoi(n - 1, inter, cible, depart, gen);
    }
  }

  // ------------------------------------------------------------------ dessin
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, hh = Math.round(Math.min(w * 0.72, 470));
    cv.style.height = hh + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(hh * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, hh }; dessiner();
  }
  const teinte = (c, k) => `rgb(${c.map(v => Math.round(k >= 1 ? v + (255 - v) * (k - 1) : v * k)).join(',')})`;
  function dessiner() {
    if (!dim) return;
    const c = cv.getContext('2d'), { w, hh } = dim, s = Math.min(w / 9.4, hh / 7.2);
    const cx = w / 2, cy = hh * 0.58;
    const P = (x, y, z) => [cx + x * s, cy - (y * COS - z * SIN) * s];        // projection orthogonale
    const ell = (x, y, z, rho, col) => { const [X, Y] = P(x, y, z); c.fillStyle = col; c.beginPath(); c.ellipse(X, Y, rho * s, rho * s * SIN, 0, 0, 2 * Math.PI); c.fill(); };
    const cylindre = (x, y0, y1, z, rho, col) => {                          // flanc puis dessus
      const [X, Ya] = P(x, y0, z), [, Yb] = P(x, y1, z), rx = rho * s, ry = rho * s * SIN;
      c.fillStyle = teinte(col, 0.72); c.beginPath();
      c.ellipse(X, Ya, rx, ry, 0, 0, Math.PI); c.lineTo(X - rx, Yb); c.ellipse(X, Yb, rx, ry, 0, Math.PI, 0, true); c.closePath(); c.fill();
      ell(x, y1, z, rho, teinte(col, 1.12));
    };
    c.fillStyle = FOND; c.fillRect(0, 0, w, hh);
    // socle : box(length=8, height=h, width=8), dessus à y = 0
    const coin = (x, y, z) => P(x, y, z);
    c.fillStyle = '#e8e8ee'; c.beginPath(); [[-4, 0, -4], [4, 0, -4], [4, 0, 4], [-4, 0, 4]].forEach((p, k) => { const [X, Y] = coin(...p); k ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.closePath(); c.fill();
    c.fillStyle = '#b9b9c6'; c.beginPath(); [[-4, 0, 4], [4, 0, 4], [4, -h, 4], [-4, -h, 4]].forEach((p, k) => { const [X, Y] = coin(...p); k ? c.lineTo(X, Y) : c.moveTo(X, Y); }); c.closePath(); c.fill();
    // tiges, de la plus lointaine à la plus proche, chacune avec sa pile de disques
    const blanc = [235, 235, 242];
    [1, 0, 2].forEach(t => {
      const T = TIGES[t], pile = disques[t];
      const volLa = enVol && enVol.tige === t ? enVol.M : null;
      const haut = pile.length * h;
      cylindre(T.x, 0, Math.max(0.001, haut), T.z, h, blanc);           // partie cachée sous les disques
      for (const d of pile) cylindre(d.x, d.y - h / 2, d.y + h / 2, d.z, d.rayon, d.color);
      if (volLa && volLa.y - h / 2 < R) {                                  // disque qui monte ou descend le long de la tige
        cylindre(T.x, haut, Math.max(haut, volLa.y - h / 2), T.z, h, blanc);
        cylindre(volLa.x, volLa.y - h / 2, volLa.y + h / 2, volLa.z, volLa.rayon, volLa.color);
        if (volLa.y + h / 2 < R) cylindre(T.x, volLa.y + h / 2, R, T.z, h, blanc);
      } else cylindre(T.x, haut, R, T.z, h, blanc);
    });
    if (enVol && (enVol.tige === -1 || enVol.M.y - h / 2 >= R)) { const M = enVol.M; cylindre(M.x, M.y - h / 2, M.y + h / 2, M.z, M.rayon, M.color); }
  }

  // ------------------------------------------------------------------ commandes
  let reprendre = null;
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
    etat = 'pret'; btnGo.textContent = 'Lancer'; selN.disabled = false; creer(); dessiner();
  });
  selN.addEventListener('change', () => { N = +selN.value; creer(); dessiner(); });
  inV.addEventListener('input', () => { vit = +inV.value; });
  window.addEventListener('resize', fit);
  creer(); fit();
})();
