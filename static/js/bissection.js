/* Recherche d'une racine par dichotomie : l'intervalle [a, b] où f change de
   signe est coupé en deux à chaque étape. La vue zoome sur l'intervalle, qui
   rétrécit d'un facteur 2 à chaque pas : un chiffre décimal tous les 3,3 pas.
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

  function reset() {
    F = FONCTIONS[+selF.value]; a = F.a; b = F.b; etapes = [];
    vue = cadre(); vueCible = vue; stop(); lister(); dessiner();
  }
  function cadre() {
    if (!inZ.checked || !etapes.length) { const L = F.b - F.a; return { x0: F.a - 0.25 * L, x1: F.b + 0.25 * L }; }
    const m = (a + b) / 2, L = Math.max(b - a, 1e-15); return { x0: m - 1.5 * L, x1: m + 1.5 * L };
  }
  function couper() {
    if (b - a < 1e-14) return false;
    const m = (a + b) / 2;
    if (F.f(a) * F.f(m) <= 0) b = m; else a = m;
    etapes.push({ a, b });
    vueCible = cadre(); animer(); lister();
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
    const depart = { ...vue }, t0 = performance.now();
    const f = t => {
      const u = Math.min(1, (t - t0) / 450), e = u * u * (3 - 2 * u);
      // interpolation géométrique de la largeur, pour un zoom régulier
      const L0 = depart.x1 - depart.x0, L1 = vueCible.x1 - vueCible.x0, L = L0 * Math.pow(L1 / L0, e);
      const c = (depart.x0 + depart.x1) / 2 + ((vueCible.x0 + vueCible.x1) / 2 - (depart.x0 + depart.x1) / 2) * e;
      vue = { x0: c - L / 2, x1: c + L / 2 }; dessiner();
      if (u < 1) anim = requestAnimationFrame(f);
    };
    anim = requestAnimationFrame(f);
  }
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(Math.min(w * 0.5, 320));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
  }
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h } = dim, { x0, x1 } = vue, N = 300;
    let ymin = Infinity, ymax = -Infinity;
    for (let k = 0; k <= N; k++) { const y = F.f(x0 + (x1 - x0) * k / N); ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); }
    ymin = Math.min(ymin, 0); ymax = Math.max(ymax, 0);
    const pad = (ymax - ymin) * 0.12 || 1; ymin -= pad; ymax += pad;
    const X = x => 40 + (w - 52) * (x - x0) / (x1 - x0), Y = y => 8 + (h - 30) * (1 - (y - ymin) / (ymax - ymin));
    g.clearRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,77,128,0.10)'; g.fillRect(X(a), 8, X(b) - X(a), h - 30);       // intervalle courant
    g.strokeStyle = '#94a3b8'; g.lineWidth = 1; g.beginPath(); g.moveTo(40, Y(0)); g.lineTo(w - 12, Y(0)); g.stroke();
    g.strokeStyle = '#004D80'; g.lineWidth = 2; g.beginPath();
    for (let k = 0; k <= N; k++) { const x = x0 + (x1 - x0) * k / N; k ? g.lineTo(X(x), Y(F.f(x))) : g.moveTo(X(x), Y(F.f(x))); }
    g.stroke();
    [[a, 'a'], [b, 'b']].forEach(([v, nom]) => {
      g.strokeStyle = '#B45309'; g.lineWidth = 1.5; g.setLineDash([4, 3]); g.beginPath(); g.moveTo(X(v), 8); g.lineTo(X(v), h - 22); g.stroke(); g.setLineDash([]);
      g.fillStyle = F.f(v) < 0 ? '#DC2626' : '#16a34a'; g.beginPath(); g.arc(X(v), Y(F.f(v)), 4, 0, 2 * Math.PI); g.fill();
      g.fillStyle = '#B45309'; g.font = '600 12px system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(nom, X(v), h - 8);
    });
    g.fillStyle = '#64748b'; g.font = '11px system-ui, sans-serif'; g.textAlign = 'left';
    g.fillText(`fenêtre : ${(x1 - x0).toExponential(1).replace('e', '×10^')}`, 42, 20);
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
