/* Recherche d'une racine par dichotomie : l'intervalle [a, b] où f change de
   signe est coupé en deux à chaque étape. La vue zoome sur l'intervalle, qui
   rétrécit d'un facteur 2 à chaque pas. La vue reste fixe pendant les découpages,
   puis zoome d'un facteur 10 quand l'intervalle devient trop petit : un zoom
   (donc un chiffre décimal) tous les 3 ou 4 pas, lisible sur la règle graduée.
   Conteneur attendu : <div class="anim" data-anim="bissection"></div>           */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="bissection"]');
  if (!root) return;

  const FONCTIONS = [
    { nom: 'x² − 2 (racine de 2)', f: x => x * x - 2, a: 1, b: 2, exact: Math.SQRT2 },
    { nom: 'cos x − x', f: x => Math.cos(x) - x, a: 0, b: 1, exact: 0.7390851332151607 },
    { nom: 'x³ − 2x − 5 (Wallis, 1685)', f: x => x * x * x - 2 * x - 5, a: 2, b: 3, exact: 2.0945514815423265 }
  ];

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Courbe d'une fonction et intervalle de recherche de sa racine, divisé par deux à chaque étape"></canvas>
<div class="bi-tableau"><table><thead><tr><th>étape</th><th>a</th><th>b</th><th>largeur</th><th>chiffres sûrs</th></tr></thead><tbody></tbody></table></div>
<div class="anim-ctrl">
  <label>Fonction <select data-k="f">${FONCTIONS.map((F, i) => `<option value="${i}">${F.nom}</option>`).join('')}</select></label>
  <button type="button" data-k="pas">Couper en deux</button>
  <button type="button" class="sec" data-k="auto">Enchaîner</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label><input type="checkbox" data-k="zoom" checked> zoom</label>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), corps = $('tbody'), selF = $('[data-k="f"]'), inZ = $('[data-k="zoom"]'), btnAuto = $('[data-k="auto"]');
  let F, a, b, etapes, vue, vueCible, anim = 0, timer = 0, dim;

  // La vue reste fixe pendant les découpages ; dès que l'intervalle n'occupe plus
  // qu'une petite part de la fenêtre, on zoome d'un facteur 10, centré sur lui.
  const SEUIL = 0.08;
  const initiale = () => { const L = F.b - F.a; return { x0: F.a - 0.25 * L, x1: F.b + 0.25 * L }; };
  const largeur = v => v.x1 - v.x0;
  function reset() {
    F = FONCTIONS[+selF.value]; a = F.a; b = F.b; etapes = [];
    vue = cadre(); vueCible = vue; stop(); lister(); dessiner();
  }
  function cadre() {               // la fenêtre qui convient à l'intervalle courant
    let v = initiale();
    if (!inZ.checked) return v;
    while (b - a <= SEUIL * largeur(v)) { const L = largeur(v) / 10, c = (a + b) / 2; v = { x0: c - L / 2, x1: c + L / 2 }; }
    return v;
  }
  function couper() {
    if (b - a < 1e-14) return false;
    const m = (a + b) / 2;
    if (F.f(a) * F.f(m) <= 0) b = m; else a = m;
    etapes.push({ a, b });
    if (inZ.checked && b - a <= SEUIL * largeur(vueCible)) {
      const L = largeur(vueCible) / 10, c = (a + b) / 2;
      vueCible = { x0: c - L / 2, x1: c + L / 2 };
    }
    animer(); lister();
    return true;
  }
  const chiffres = (a, b) => Math.max(0, Math.floor(-Math.log10(b - a)));
  function lister() {
    const lignes = [{ a: F.a, b: F.b }].concat(etapes), dern = lignes.slice(-8), debut = lignes.length - dern.length;
    corps.innerHTML = dern.map((e, k) => {
      const d = chiffres(e.a, e.b), fmt = v => v.toFixed(Math.min(15, d + 2));
      return `<tr><td>${debut + k}</td><td>${fmt(e.a)}</td><td>${fmt(e.b)}</td><td>${(e.b - e.a).toExponential(2).replace('e', ' × 10^')}</td><td>${d}</td></tr>`;
    }).join('');
  }
  function animer() {
    cancelAnimationFrame(anim);
    const depart = { ...vue }, t0 = performance.now(), dur = Math.abs(largeur(depart) - largeur(vueCible)) > 1e-12 * largeur(depart) ? 600 : 250;
    const f = t => {
      const u = Math.min(1, (t - t0) / dur), e = u * u * (3 - 2 * u);
      // interpolation géométrique de la largeur, pour un zoom régulier
      const L0 = depart.x1 - depart.x0, L1 = vueCible.x1 - vueCible.x0, L = L0 * Math.pow(L1 / L0, e);
      const c = (depart.x0 + depart.x1) / 2 + ((vueCible.x0 + vueCible.x1) / 2 - (depart.x0 + depart.x1) / 2) * e;
      vue = { x0: c - L / 2, x1: c + L / 2 }; dessiner();
      if (u < 1) anim = requestAnimationFrame(f);
    };
    anim = requestAnimationFrame(f);
  }
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(Math.min(Math.max(w * 0.56, 230), 340));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
  }
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const exposant = n => String(n).split('').map(c => SUP[+c]).join('');
  function graduations(x0, x1, w) {
    const cible = Math.max(3, Math.floor((w - 60) / 75)), brut = (x1 - x0) / cible;
    const e = Math.floor(Math.log10(brut)), m = brut / 10 ** e, pas = (m < 1.5 ? 1 : m < 3.5 ? 2 : 5) * 10 ** e;
    const dec = Math.max(0, -Math.floor(Math.log10(pas) + 1e-9)), ticks = [];
    for (let k = Math.ceil(x0 / pas); k * pas <= x1; k++) ticks.push({ x: k * pas, s: (k * pas).toFixed(dec).replace('.', ',') });
    // préfixe commun à toutes les étiquettes : ce sont les chiffres déjà acquis
    let p = ticks.length ? ticks[0].s : '';
    ticks.forEach(t => { let i = 0; while (i < p.length && p[i] === t.s[i]) i++; p = p.slice(0, i); });
    if (!p.includes(',') || ticks.some(t => t.s.length - p.length < 1)) p = '';
    return { ticks, prefixe: p };
  }
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h } = dim, { x0, x1 } = vue, N = 300;
    const haut = 8, bas = h - 46;                         // zone du graphe
    let ymin = Infinity, ymax = -Infinity;
    for (let k = 0; k <= N; k++) { const y = F.f(x0 + (x1 - x0) * k / N); ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); }
    ymin = Math.min(ymin, 0); ymax = Math.max(ymax, 0);
    const pad = (ymax - ymin) * 0.12 || 1; ymin -= pad; ymax += pad;
    const X = x => 30 + (w - 42) * (x - x0) / (x1 - x0), Y = y => haut + (bas - haut) * (1 - (y - ymin) / (ymax - ymin));
    g.clearRect(0, 0, w, h);
    g.save(); g.beginPath(); g.rect(30, haut, w - 42, bas - haut); g.clip();
    g.fillStyle = 'rgba(0,77,128,0.10)'; g.fillRect(X(a), haut, X(b) - X(a), bas - haut);       // intervalle courant
    g.strokeStyle = '#94a3b8'; g.lineWidth = 1; g.beginPath(); g.moveTo(30, Y(0)); g.lineTo(w - 12, Y(0)); g.stroke();
    g.strokeStyle = '#004D80'; g.lineWidth = 2; g.beginPath();
    for (let k = 0; k <= N; k++) { const x = x0 + (x1 - x0) * k / N; k ? g.lineTo(X(x), Y(F.f(x))) : g.moveTo(X(x), Y(F.f(x))); }
    g.stroke();
    g.restore();
    // règle graduée sous le graphe
    const { ticks, prefixe } = graduations(x0, x1, w);
    g.strokeStyle = '#cbd5e1'; g.lineWidth = 1; g.beginPath(); g.moveTo(30, bas + 0.5); g.lineTo(w - 12, bas + 0.5); g.stroke();
    g.font = '11px system-ui, sans-serif'; g.textAlign = 'center';
    ticks.forEach(t => {
      const xt = X(t.x); if (xt < 30 || xt > w - 12) return;
      g.strokeStyle = '#94a3b8'; g.beginPath(); g.moveTo(xt, bas); g.lineTo(xt, bas + 5); g.stroke();
      g.strokeStyle = 'rgba(148,163,184,0.25)'; g.beginPath(); g.moveTo(xt, haut); g.lineTo(xt, bas); g.stroke();
      g.fillStyle = '#475569'; g.fillText(prefixe ? '…' + t.s.slice(prefixe.length) : t.s, xt, bas + 17);
    });
    [[a, 'a'], [b, 'b']].forEach(([v, nom]) => {
      const xv = X(v);
      g.strokeStyle = '#B45309'; g.lineWidth = 1.5; g.setLineDash([4, 3]); g.beginPath(); g.moveTo(xv, haut); g.lineTo(xv, bas); g.stroke(); g.setLineDash([]);
      g.fillStyle = F.f(v) < 0 ? '#DC2626' : '#16a34a'; g.beginPath(); g.arc(xv, Y(F.f(v)), 4, 0, 2 * Math.PI); g.fill();
    });
    // a et b sous la règle, écartés s'ils se touchent
    let xa = X(a), xb = X(b); if (xb - xa < 18) { const c = (xa + xb) / 2; xa = c - 9; xb = c + 9; }
    g.fillStyle = '#B45309'; g.font = '600 12px system-ui, sans-serif'; g.textAlign = 'center';
    g.fillText('a', xa, h - 7); g.fillText('b', xb, h - 7);
    // pastille : niveau de zoom et chiffres communs à toutes les graduations
    const z = Math.round(Math.log10(largeur(initiale()) / largeur(vue)));
    const l1 = z > 0 ? `zoom ×10${exposant(z)}` : 'zoom ×1', l2 = prefixe ? `graduations : ${prefixe}…` : '';
    g.font = '600 12px system-ui, sans-serif'; const w1 = g.measureText(l1).width;
    g.font = '11px system-ui, sans-serif'; const w2 = l2 ? g.measureText(l2).width : 0;
    const bw = Math.max(w1, w2) + 14, bh = l2 ? 36 : 21;
    g.fillStyle = 'rgba(255,255,255,0.88)'; g.strokeStyle = '#bfdbfe'; g.lineWidth = 1;
    g.beginPath(); g.roundRect ? g.roundRect(36.5, haut + 4.5, bw, bh, 7) : g.rect(36.5, haut + 4.5, bw, bh); g.fill(); g.stroke();
    g.textAlign = 'left'; g.fillStyle = '#004D80'; g.font = '600 12px system-ui, sans-serif'; g.fillText(l1, 43, haut + 19);
    if (l2) { g.fillStyle = '#475569'; g.font = '11px system-ui, sans-serif'; g.fillText(l2, 43, haut + 34); }
  }
  function stop() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Enchaîner'; }
  $('[data-k="pas"]').addEventListener('click', () => { stop(); couper(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { stop(); return; }
    btnAuto.textContent = 'Pause';
    timer = setInterval(() => { if (!couper()) stop(); }, 650);
  });
  $('[data-k="reset"]').addEventListener('click', reset);
  selF.addEventListener('change', reset);
  inZ.addEventListener('change', () => { vueCible = cadre(); animer(); });
  window.addEventListener('resize', fit);
  reset(); fit();
})();
