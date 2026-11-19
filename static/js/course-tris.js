/* Course de tris : six algorithmes trient en même temps le même tableau.
   À chaque instant, tous ont fait le même nombre de comparaisons (un pas =
   une comparaison) ; les écritures dans le tableau sont comptées à part.
   Conteneur attendu : <div class="anim" data-anim="course-tris"></div>         */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="course-tris"]');
  if (!root) return;

  // ---------------------------------------------------------------- les algorithmes, comparaison par comparaison
  // chaque générateur reçoit le tableau et un objet de comptage ; il « rend la main » après chaque comparaison
  function* selection(a, c) {
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
      let m = i;
      for (let j = i + 1; j < n; j++) { c.vus = [j, m]; c.comp++; yield; if (a[j] < a[m]) m = j; }
      if (m !== i) { [a[i], a[m]] = [a[m], a[i]]; c.ecr += 2; }
      c.fige = i;
    }
  }
  function* insertion(a, c) {
    for (let i = 1; i < a.length; i++) {
      let j = i;
      while (j > 0) { c.vus = [j - 1, j]; c.comp++; yield; if (a[j - 1] > a[j]) { [a[j - 1], a[j]] = [a[j], a[j - 1]]; c.ecr += 2; j--; } else break; }
    }
  }
  function* bulles(a, c) {
    const n = a.length;
    for (let i = 0; i < n - 1; i++)
      for (let j = 0; j < n - i - 1; j++) { c.vus = [j, j + 1]; c.comp++; yield; if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; c.ecr += 2; } }
  }
  function* fusion(a, c, g = 0, d = a.length - 1) {
    if (g >= d) return;
    const m = (g + d) >> 1;
    yield* fusion(a, c, g, m); yield* fusion(a, c, m + 1, d);
    const G = a.slice(g, m + 1), D = a.slice(m + 1, d + 1);
    let i = 0, j = 0, k = g;
    while (i < G.length && j < D.length) { c.vus = [g + i, m + 1 + j]; c.comp++; yield; a[k++] = G[i] <= D[j] ? G[i++] : D[j++]; c.ecr++; }
    while (i < G.length) { a[k++] = G[i++]; c.ecr++; }
    while (j < D.length) { a[k++] = D[j++]; c.ecr++; }
  }
  function* rapide(a, c, hasard, g = 0, d = a.length - 1) {
    if (g >= d) return;
    if (hasard) { const p = g + Math.floor(Math.random() * (d - g + 1)); [a[p], a[g]] = [a[g], a[p]]; c.ecr += 2; }
    const p = a[g]; let i = g + 1;
    for (let j = g + 1; j <= d; j++) { c.vus = [j, g]; c.comp++; yield; if (a[j] < p) { [a[i], a[j]] = [a[j], a[i]]; c.ecr += 2; i++; } }
    [a[g], a[i - 1]] = [a[i - 1], a[g]]; c.ecr += 2;
    yield* rapide(a, c, hasard, g, i - 2); yield* rapide(a, c, hasard, i, d);
  }
  function* tas(a, c) {
    const n = a.length;
    function* descendre(i, fin) {
      for (;;) {
        let m = i; const g = 2 * i + 1, d = g + 1;
        if (g < fin) { c.vus = [g, m]; c.comp++; yield; if (a[g] > a[m]) m = g; }
        if (d < fin) { c.vus = [d, m]; c.comp++; yield; if (a[d] > a[m]) m = d; }
        if (m === i) return;
        [a[i], a[m]] = [a[m], a[i]]; c.ecr += 2; i = m;
      }
    }
    for (let i = (n >> 1) - 1; i >= 0; i--) yield* descendre(i, n);
    for (let fin = n - 1; fin > 0; fin--) { [a[0], a[fin]] = [a[fin], a[0]]; c.ecr += 2; yield* descendre(0, fin); }
  }
  const ALGOS = [
    { nom: 'Sélection', f: selection, col: '#5B6CB0' },
    { nom: 'Insertion', f: insertion, col: '#006C65' },
    { nom: 'Bulles', f: bulles, col: '#64748b' },
    { nom: 'Fusion', f: fusion, col: '#004D80' },
    { nom: 'Rapide (pivot au hasard)', f: (a, c) => rapide(a, c, true), col: '#B45309' },
    { nom: 'Rapide (premier élément)', f: (a, c) => rapide(a, c, false), col: '#970E53' },
    { nom: 'Par tas', f: tas, col: '#3F7F3A' }
  ];
  const AFFICHES = [0, 1, 2, 3, 4, 5];            // le tri par tas est présenté sur la page des graphes

  root.innerHTML = `
<div class="ct-grille">${AFFICHES.map(k => `<figure class="ct-panneau"><figcaption style="color:${ALGOS[k].col}">${ALGOS[k].nom}</figcaption>
  <canvas role="img" aria-label="Tableau trié par ${ALGOS[k].nom}"></canvas><p class="ct-stats"></p></figure>`).join('')}</div>
<div class="anim-ctrl">
  <label>Données <select data-k="d"><option value="hasard">au hasard</option><option value="presque">presque triées</option><option value="inverse">en ordre inverse</option><option value="doublons">beaucoup de doublons</option></select></label>
  <label>Taille <select data-k="n"><option>30</option><option selected>60</option><option>120</option></select></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="neuf">Nouvelles données</button>
  <label>Vitesse <input type="range" min="1" max="10" step="1" value="5" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const toiles = [...root.querySelectorAll('.ct-panneau canvas')], stats = [...root.querySelectorAll('.ct-stats')];
  const selD = $('[data-k="d"]'), selN = $('[data-k="n"]'), btnGo = $('[data-k="go"]'), inV = $('[data-k="v"]');
  let base, courses, enMarche = false, rang = 0, dernier = 0, credit = 0;

  function donnees() {
    const n = +selN.value, t = selD.value;
    if (t === 'doublons') return Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 5));
    let a = Array.from({ length: n }, (_, i) => i + 1);
    if (t === 'inverse') return a.reverse();
    if (t === 'presque') { for (let k = 0; k < Math.max(2, n / 15); k++) { const i = Math.floor(Math.random() * (n - 1)); [a[i], a[i + 1]] = [a[i + 1], a[i]]; } return a; }
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function preparer(nouvelles) {
    if (nouvelles || !base) base = donnees();
    rang = 0;
    courses = AFFICHES.map(k => {
      const a = base.slice(), c = { comp: 0, ecr: 0, vus: [], fini: false, rang: 0 };
      return { a, c, it: ALGOS[k].f(a, c), algo: ALGOS[k] };
    });
    afficher();
  }
  function pas() {
    let actifs = 0;
    for (const r of courses) {
      if (r.c.fini) continue;
      if (r.it.next().done) { r.c.fini = true; r.c.vus = []; r.c.rang = ++rang; } else actifs++;
    }
    return actifs;
  }
  function fit() {
    const dpr = window.devicePixelRatio || 1;
    toiles.forEach(cv => { const w = cv.clientWidth || 240, h = Math.round(w * 0.42); cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); });
    afficher();
  }
  function afficher() {
    if (!courses) return;
    const vmax = Math.max(...base);
    courses.forEach((r, k) => {
      const cv = toiles[k], g = cv.getContext('2d'), w = cv.clientWidth, h = parseFloat(cv.style.height), n = r.a.length, bw = w / n;
      g.clearRect(0, 0, w, h);
      for (let i = 0; i < n; i++) {
        const v = r.a[i], hb = 3 + (h - 6) * v / vmax;
        g.fillStyle = r.c.vus.includes(i) ? '#DC2626' : r.c.fini ? '#16a34a' : `hsl(${210 - 160 * v / vmax}, 55%, ${62 - 22 * v / vmax}%)`;
        g.fillRect(i * bw + (bw > 3 ? 0.5 : 0), h - hb, Math.max(1, bw - (bw > 3 ? 1 : 0)), hb);
      }
      stats[k].innerHTML = `<b>${r.c.comp}</b> comparaisons · ${r.c.ecr} écritures` + (r.c.fini ? ` · <span class="ct-rang">${r.c.rang}<sup>${r.c.rang === 1 ? 'er' : 'e'}</sup></span>` : '');
    });
  }
  function boucle(t) {
    if (!enMarche) return;
    const dt = dernier ? Math.min(0.1, (t - dernier) / 1000) : 1 / 60; dernier = t;
    credit += 2 ** (+inV.value - 1) * 6 * dt;
    let k = Math.floor(credit); credit -= k;
    let actifs = 1;
    while (k-- > 0 && (actifs = pas()) > 0);
    afficher();
    if (actifs === 0 || courses.every(r => r.c.fini)) { enMarche = false; btnGo.textContent = 'Relancer'; return; }
    requestAnimationFrame(boucle);
  }
  btnGo.addEventListener('click', () => {
    if (enMarche) { enMarche = false; btnGo.textContent = 'Reprendre'; return; }
    if (courses.every(r => r.c.fini)) preparer(false);
    enMarche = true; dernier = 0; credit = 1; btnGo.textContent = 'Pause'; requestAnimationFrame(boucle);
  });
  $('[data-k="neuf"]').addEventListener('click', () => { enMarche = false; btnGo.textContent = 'Lancer'; preparer(true); });
  [selD, selN].forEach(e => e.addEventListener('change', () => { enMarche = false; btnGo.textContent = 'Lancer'; preparer(true); fit(); }));
  window.addEventListener('resize', fit);
  preparer(true); fit();
})();
