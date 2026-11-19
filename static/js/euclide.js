/* Algorithme d'Euclide en géométrie : dans un rectangle a × b, on retire autant
   de carrés de côté b que possible ; il reste un rectangle b × r, sur lequel on
   recommence. Chaque étape est une division euclidienne, et le dernier carré
   a pour côté pgcd(a, b) : il pave tout le rectangle de départ.
   Conteneur attendu : <div class="anim" data-anim="euclide"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="euclide"]');
  if (!root) return;

  const COULEURS = ['#004D80', '#006C65', '#3F7F3A', '#B45309', '#B91C1C', '#970E53', '#5B6CB0'];
  const EXEMPLES = [[1080, 480], [89, 55], [377, 233], [1071, 462], [97, 34], [500, 499]];

  root.innerHTML = `
<div class="eu-grille">
  <canvas class="anim-scene" role="img" aria-label="Rectangle découpé en carrés de plus en plus petits ; le dernier carré a pour côté le pgcd des deux dimensions"></canvas>
  <ol class="eu-divisions" aria-live="polite"></ol>
</div>
<div class="anim-ctrl">
  <label>a <input type="number" min="1" max="9999" value="1080" data-k="a"></label>
  <label>b <input type="number" min="1" max="9999" value="480" data-k="b"></label>
  <label>Exemples <select data-k="ex">${EXEMPLES.map(([a, b]) => `<option value="${a},${b}">${a} et ${b}</option>`).join('')}</select></label>
  <button type="button" data-k="go">Rejouer</button>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), liste = $('.eu-divisions'), inA = $('[data-k="a"]'), inB = $('[data-k="b"]'), selEx = $('[data-k="ex"]');
  let etapes = [], dim, anim = 0, montre = 0;

  function calculer() {
    let a = Math.max(1, Math.round(+inA.value) || 1), b = Math.max(1, Math.round(+inB.value) || 1);
    const A = a, B = b;
    etapes = [];
    let x = 0, y = 0, w = Math.max(a, b), h = Math.min(a, b);      // le rectangle est posé à plat
    while (w > 0 && h > 0) {
      const grand = Math.max(w, h), petit = Math.min(w, h), q = Math.floor(grand / petit), r = grand - q * petit;
      const carres = [];
      for (let i = 0; i < q; i++) carres.push(w >= h ? [x + i * h, y, h] : [x, y + i * w, w]);
      etapes.push({ grand, petit, q, r, carres });
      if (w >= h) { x += q * h; w -= q * h; } else { y += q * w; h -= q * w; }
    }
    return { A, B, W: Math.max(A, B), H: Math.min(A, B) };
  }
  let R;
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 500;
    const h = Math.round(Math.min(w * R.H / R.W, 360)) + 2;
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h };
  }
  function dessiner(nEtapes, frac) {                   // frac : avancement de l'étape en cours
    const g = cv.getContext('2d'), { w, h } = dim;
    g.clearRect(0, 0, w, h);
    const s = Math.min((w - 2) / R.W, (h - 2) / R.H), ox = (w - s * R.W) / 2, oy = 1;
    g.fillStyle = '#f8fafc'; g.fillRect(ox, oy, s * R.W, s * R.H);
    for (let e = 0; e < Math.min(nEtapes + 1, etapes.length); e++) {
      const E = etapes[e], col = COULEURS[e % COULEURS.length];
      const nb = e < nEtapes ? E.carres.length : Math.ceil(E.carres.length * frac);
      for (let i = 0; i < nb; i++) {
        const [x, y, c] = E.carres[i];
        g.fillStyle = col; g.globalAlpha = 0.2 + 0.1 * (i % 2); g.fillRect(ox + s * x, oy + s * y, s * c, s * c);
        g.globalAlpha = 1; g.strokeStyle = col; g.lineWidth = 1.2; g.strokeRect(ox + s * x + 0.5, oy + s * y + 0.5, s * c - 1, s * c - 1);
      }
    }
    if (nEtapes >= etapes.length) {                     // le pgcd pave tout le rectangle
      const p = etapes[etapes.length - 1].petit;
      if (s * p >= 3) {
        g.strokeStyle = 'rgba(15,23,42,0.18)'; g.lineWidth = 1; g.beginPath();
        for (let x = p; x < R.W; x += p) { g.moveTo(ox + s * x, oy); g.lineTo(ox + s * x, oy + s * R.H); }
        for (let y = p; y < R.H; y += p) { g.moveTo(ox, oy + s * y); g.lineTo(ox + s * R.W, oy + s * y); }
        g.stroke();
      }
    }
    g.strokeStyle = '#1e293b'; g.lineWidth = 1.5; g.strokeRect(ox + 0.5, oy + 0.5, s * R.W - 1, s * R.H - 1);
  }
  function lister(n) {
    liste.innerHTML = etapes.slice(0, n).map((E, e) =>
      `<li style="--c:${COULEURS[e % COULEURS.length]}"><span>${E.grand} = ${E.q} × ${E.petit} + ${E.r}</span></li>`).join('') +
      (n >= etapes.length ? `<li class="eu-fin">pgcd(${R.A}, ${R.B}) = <b>${etapes[etapes.length - 1].petit}</b> en ${etapes.length} division${etapes.length > 1 ? 's' : ''}</li>` : '');
  }
  function jouer() {
    cancelAnimationFrame(anim);
    const duree = Math.max(250, Math.min(900, 5000 / etapes.length));
    let t0 = 0;
    const f = t => {
      if (!t0) t0 = t;
      const u = (t - t0) / duree, n = Math.floor(u), frac = u - n;
      if (n !== montre) { montre = n; lister(Math.min(n, etapes.length)); }
      dessiner(Math.min(n, etapes.length), frac);
      if (n < etapes.length) anim = requestAnimationFrame(f);
    };
    montre = -1; anim = requestAnimationFrame(f);
  }
  function tout() { R = calculer(); fit(); jouer(); }
  [inA, inB].forEach(e => e.addEventListener('change', tout));
  selEx.addEventListener('change', () => { const [a, b] = selEx.value.split(','); inA.value = a; inB.value = b; tout(); });
  $('[data-k="go"]').addEventListener('click', jouer);
  window.addEventListener('resize', () => { fit(); dessiner(etapes.length, 0); lister(etapes.length); });
  R = calculer(); fit(); dessiner(etapes.length, 0); lister(etapes.length);
})();
