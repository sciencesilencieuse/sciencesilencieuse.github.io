/* Suite de Syracuse : si n est pair, on le divise par 2, sinon on le remplace
   par 3n + 1. Personne ne sait démontrer que l'on finit toujours par tomber sur 1.
   Deux vues : le « vol » d'un entier (ses valeurs successives), et le temps de vol
   de tous les entiers jusqu'à N, où l'on peut cliquer pour voir un vol.
   Conteneur attendu : <div class="anim" data-anim="syracuse"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="syracuse"]');
  if (!root) return;

  root.innerHTML = `
<div class="ax-onglets" role="tablist">
  <button type="button" role="tab" data-v="vol" class="ax-on">Un vol</button>
  <button type="button" role="tab" data-v="tous">Tous les vols</button>
</div>
<canvas class="anim-scene sy-toile" role="img" aria-label="Valeurs successives de la suite de Syracuse"></canvas>
<p class="sy-info" aria-live="polite"></p>
<div class="anim-ctrl" data-c="vol">
  <label>n = <input type="number" data-k="n" min="1" step="1" value="27"></label>
  <button type="button" data-k="voler">Décoller</button>
  <label><input type="checkbox" data-k="log"> échelle logarithmique</label>
</div>
<div class="anim-ctrl" data-c="tous" hidden>
  <label>Jusqu'à N = <select data-k="N"><option>1000</option><option selected>10000</option><option>100000</option></select></label>
  <span class="sy-astuce">Cliquer sur un point pour voir son vol.</span>
</div>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.sy-info'), inN = $('[data-k="n"]'), cbLog = $('[data-k="log"]'), selN = $('[data-k="N"]');
  const fmt = x => x.toLocaleString('fr-FR');
  let vue = 'vol', dim, vol = [], prog = 1, anim = 0, temps = null, Ncur = 0, survol = -1;

  function calculerVol(n) {
    const v = [n];
    while (n !== 1n && v.length < 5000) { n = n % 2n ? 3n * n + 1n : n / 2n; v.push(n); }
    return v;
  }
  function voler() {
    let n;
    try { n = BigInt((inN.value || '27').replace(/\D/g, '') || '27'); } catch (e) { n = 27n; }
    if (n < 1n) n = 1n;
    if (n > 10n ** 15n) n = 10n ** 15n;
    inN.value = String(n);
    vol = calculerVol(n);
    let max = 0n, imax = 0; vol.forEach((x, i) => { if (x > max) { max = x; imax = i; } });
    info.innerHTML = `Partant de ${fmt(Number(n))}, la suite atteint 1 après <b>${vol.length - 1}</b> étape${vol.length > 2 ? 's' : ''} (son <i>temps de vol</i>), en montant jusqu'à <b>${max.toLocaleString('fr-FR')}</b> à l'étape ${imax}.` +
      (n === 27n ? ` Un si petit nombre, et un vol si long&nbsp;: essayez 26, puis 28.` : '');
    cancelAnimationFrame(anim); prog = 0;
    const t0 = performance.now(), duree = Math.min(2500, 300 + vol.length * 12);
    (function f(t) { prog = Math.max(0, Math.min(1, (t - t0) / duree)); dessiner(); if (prog < 1) anim = requestAnimationFrame(f); })(t0);
  }
  function calculerTemps(N) {
    const T = new Int32Array(N + 1); T[1] = 0;
    for (let k = 2; k <= N; k++) {
      let n = k, c = 0;
      while (n >= k) { n = n % 2 ? 3 * n + 1 : n / 2; c++; }
      T[k] = c + T[n];
    }
    return T;
  }
  function tous() {
    const N = +selN.value;
    if (Ncur !== N) { temps = calculerTemps(N); Ncur = N; }
    let rec = 1; for (let k = 2; k <= N; k++) if (temps[k] > temps[rec]) rec = k;
    info.innerHTML = `Temps de vol de chaque entier de 1 à ${fmt(N)}. Tous atteignent 1&nbsp;; le plus long vol est celui de <b>${fmt(rec)}</b>, avec ${temps[rec]} étapes.`;
    dessiner();
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.max(220, Math.min(380, w * 0.55));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
  }
  const G = 46, D = 12, H0 = 12, B = 28;
  function axes(g, xmax, ymin, ymax, log, xlab) {
    const { w, h } = dim;
    g.strokeStyle = '#94a3b8'; g.lineWidth = 1; g.beginPath(); g.moveTo(G, H0); g.lineTo(G, h - B); g.lineTo(w - D, h - B); g.stroke();
    g.fillStyle = '#64748b'; g.font = '11px system-ui, sans-serif'; g.textAlign = 'right';
    const Y = v => h - B - (h - B - H0) * (log ? (Math.log10(v) - Math.log10(ymin)) / (Math.log10(ymax) - Math.log10(ymin) || 1) : (v - ymin) / (ymax - ymin || 1));
    const graduations = log ? Array.from({ length: Math.floor(Math.log10(ymax)) + 1 }, (_, k) => 10 ** k).filter(v => v >= ymin)
      : (() => { const pas = 10 ** Math.floor(Math.log10(ymax / 4 || 1)), q = Math.ceil(ymax / pas / 5) * pas, r = []; for (let v = 0; v <= ymax; v += q) r.push(v); return r; })();
    for (const v of graduations) { const y = Y(v); g.fillText(v >= 1e6 ? v.toExponential(0).replace('e+', 'e') : fmt(v), G - 5, y + 4); g.strokeStyle = '#eef2f6'; g.beginPath(); g.moveTo(G + 1, y); g.lineTo(w - D, y); g.stroke(); }
    g.textAlign = 'center';
    const X = x => G + (w - G - D) * x / (xmax || 1);
    const pasx = 10 ** Math.floor(Math.log10(xmax / 3 || 1)), qx = Math.ceil(xmax / pasx / 6) * pasx;
    for (let x = 0; x <= xmax; x += qx) if (X(x) < w - D - 24) g.fillText(fmt(x), X(x), h - B + 15);
    g.textAlign = 'right'; g.fillText(xlab, w - D, h - 4);
    return { X, Y };
  }
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h } = dim;
    g.clearRect(0, 0, w, h);
    if (vue === 'vol') {
      if (!vol.length) return;
      const nb = Math.max(1, Math.ceil(prog * vol.length)), V = vol.map(Number), log = cbLog.checked;
      const ymax = Math.max(...V), { X, Y } = axes(g, V.length - 1, log ? 1 : 0, ymax, log, 'étapes');
      g.strokeStyle = '#2563EB'; g.lineWidth = 1.6; g.beginPath();
      for (let i = 0; i < nb; i++) { const x = X(i), y = Y(Math.max(1, V[i])); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke();
      if (V.length < 160) for (let i = 0; i < nb; i++) { g.fillStyle = V[i] % 2 ? '#DC2626' : '#2563EB'; g.beginPath(); g.arc(X(i), Y(Math.max(1, V[i])), 2.6, 0, 7); g.fill(); }
    } else {
      if (!temps) return;
      const N = Ncur; let tmax = 0; for (let k = 1; k <= N; k++) if (temps[k] > tmax) tmax = temps[k];
      const { X, Y } = axes(g, N, 0, tmax, false, 'n');
      const r = N > 20000 ? 0.8 : N > 5000 ? 1.1 : 1.8;
      g.fillStyle = N > 20000 ? 'rgba(37,99,235,0.35)' : 'rgba(37,99,235,0.6)';
      for (let k = 1; k <= N; k++) g.fillRect(X(k) - r, Y(temps[k]) - r, 2 * r, 2 * r);
      if (survol > 0) { g.fillStyle = '#DC2626'; g.beginPath(); g.arc(X(survol), Y(temps[survol]), 4, 0, 7); g.fill(); g.font = '600 12px system-ui, sans-serif'; g.textAlign = X(survol) > w - 120 ? 'right' : 'left'; g.fillText(`${fmt(survol)} : ${temps[survol]} étapes`, X(survol) + (g.textAlign === 'left' ? 8 : -8), Y(temps[survol]) - 6); }
    }
  }
  function pointProche(e) {
    const rct = cv.getBoundingClientRect(), x = e.clientX - rct.left, y = e.clientY - rct.top, { w, h } = dim, N = Ncur;
    let tmax = 0; for (let k = 1; k <= N; k++) if (temps[k] > tmax) tmax = temps[k];
    const k0 = Math.round((x - G) / (w - G - D) * N), fen = Math.max(2, Math.round(N * 6 / (w - G - D)));
    let best = -1, bd = 1e9;
    for (let k = Math.max(1, k0 - fen); k <= Math.min(N, k0 + fen); k++) {
      const px = G + (w - G - D) * k / N, py = h - B - (h - B - H0) * temps[k] / tmax, d = (px - x) ** 2 + (py - y) ** 2;
      if (d < bd) { bd = d; best = k; }
    }
    return bd < 400 ? best : -1;
  }
  cv.addEventListener('pointermove', e => { if (vue !== 'tous' || !temps) return; const k = pointProche(e); if (k !== survol) { survol = k; dessiner(); } });
  cv.addEventListener('click', e => {
    if (vue !== 'tous' || !temps) return;
    const k = pointProche(e); if (k < 1) return;
    inN.value = String(k); basculer('vol'); voler();
  });
  function basculer(v) {
    vue = v;
    root.querySelectorAll('[role="tab"]').forEach(x => x.classList.toggle('ax-on', x.dataset.v === v));
    root.querySelectorAll('[data-c]').forEach(x => { x.hidden = x.dataset.c !== v; });
    cv.style.cursor = v === 'tous' ? 'crosshair' : 'default';
    if (v === 'tous') tous(); else dessiner();
  }
  root.querySelectorAll('[role="tab"]').forEach(b => b.addEventListener('click', () => { basculer(b.dataset.v); if (b.dataset.v === 'vol') voler(); }));
  $('[data-k="voler"]').addEventListener('click', voler);
  inN.addEventListener('change', voler);
  cbLog.addEventListener('change', dessiner);
  selN.addEventListener('change', tous);
  window.addEventListener('resize', fit);
  fit(); voler();
})();
