/* Galilée, folio 116v : une bille lâchée d'une hauteur h sur un plan incliné
   roule sur une table puis tombe. La portée d est proportionnelle à la vitesse
   en bas de la pente, et l'on trouve d ∝ √h.
   Conteneur attendu : <div class="anim" data-anim="galilee"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="galilee"]');
  if (!root) return;

  const COL = { bleu: '#004D80', prune: '#970E53', sarc: '#006C65', ard: '#475569',
                clair: '#94a3b8', grille: '#e2e8f0', bois: '#EFE6D2', boisT: '#B9A47C', texte: '#334155' };
  const H = 828;             // hauteur de la table de Galilée, en punti
  const G = 2000;            // pesanteur de l'animation (punti/s²) : ne change pas la portée
  const R = 26;              // rayon apparent de la bille
  const FLAT = 110;          // longueur du plateau entre le bas de la pente et le bord
  const GAL = [[300, 800], [600, 1172], [800, 1328], [828, 1340], [1000, 1500]];
  const W0 = { x0: -1990, x1: 1850, y0: -110, y1: 1900 };   // fenêtre du monde (punti)
  const fr = (x, d = 0) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });
  const portee = h => 2 * Math.sqrt(5 / 7 * h * H);           // bille qui roule sans glisser

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Une bille descend un plan incliné posé sur une table, roule jusqu'au bord puis tombe au sol"></canvas>
<div class="anim-ctrl">
  <label>Hauteur de lâcher <input type="range" min="100" max="1000" step="10" value="600" data-k="h"><output data-o="h">600</output>&nbsp;punti</label>
  <label>Inclinaison <input type="range" min="30" max="70" step="1" value="45" data-k="a"><output data-o="a">45°</output></label>
  <button type="button" data-k="go">Lâcher la bille</button>
  <button type="button" class="sec" data-k="clear">Effacer</button>
</div>
<p class="anim-info" aria-live="polite"></p>
<canvas class="anim-graph" role="img" aria-label="Portée d en fonction de la hauteur de lâcher h : vos lancers, les mesures de Galilée et la courbe théorique"></canvas>
<div class="anim-ctrl">
  <label><input type="checkbox" data-k="gal" checked> Mesures de Galilée</label>
  <label><input type="checkbox" data-k="sqrt"> Abscisse en √h</label>
</div>`;

  const $ = s => root.querySelector(s);
  const cvS = $('.anim-scene'), cvG = $('.anim-graph');
  const ctxS = cvS.getContext('2d'), ctxG = cvG.getContext('2d');
  const inH = $('[data-k="h"]'), inA = $('[data-k="a"]'), btnGo = $('[data-k="go"]'), btnClear = $('[data-k="clear"]');
  const chkGal = $('[data-k="gal"]'), chkSqrt = $('[data-k="sqrt"]'), info = $('.anim-info');

  let marks = [];            // lancers terminés : {h, d, a}
  let run = null;            // lancer en cours
  let lastTrail = [];        // trajectoire du dernier lancer
  let raf = 0, tPrev = 0;

  // ---------------------------------------------------------------- dimensionnement
  function fit(cv, ratio) {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(w * ratio);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    const c = cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  }
  let dimS, dimG;
  function resize() {
    dimS = fit(cvS, (W0.y1 - W0.y0) / (W0.x1 - W0.x0));
    dimG = fit(cvG, 0.5);
    drawScene(); drawGraph();
  }

  // ---------------------------------------------------------------- géométrie
  function rampe(h, aDeg) {
    const a = aDeg * Math.PI / 180, xb = -FLAT;
    return { a, h, xb, xt: xb - h / Math.tan(a), L: h / Math.sin(a), acc: 5 / 7 * G * Math.sin(a) };
  }
  function balle(rp, st) {          // position du centre et angle de roulement
    if (!st) return { x: rp.xt + R * Math.sin(rp.a), y: H + rp.h + R * Math.cos(rp.a), rot: 0 };
    if (st.ph === 'rampe') {
      const s = 0.5 * rp.acc * st.t * st.t;
      return { x: rp.xt + s * Math.cos(rp.a) + R * Math.sin(rp.a), y: H + rp.h - s * Math.sin(rp.a) + R * Math.cos(rp.a), rot: s / R };
    }
    const v = Math.sqrt(2 * rp.acc * rp.L);
    if (st.ph === 'plat') { const s = v * st.t; return { x: rp.xb + s, y: H + R, rot: (rp.L + s) / R }; }
    const t = st.t, y = H + R - 0.5 * G * t * t;
    return { x: v * t, y: Math.max(R, y), rot: (rp.L + FLAT + v * t) / R };
  }

  // ---------------------------------------------------------------- dessin de la scène
  function drawScene() {
    const c = ctxS, { w, h } = dimS, k = w / (W0.x1 - W0.x0);
    const X = x => (x - W0.x0) * k, Y = y => h - (y - W0.y0) * k;
    c.clearRect(0, 0, w, h);
    c.lineCap = 'round'; c.lineJoin = 'round';
    // sol et règle
    c.strokeStyle = COL.ard; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(0, Y(0)); c.lineTo(w, Y(0)); c.stroke();
    c.fillStyle = COL.ard; c.font = '11px sans-serif'; c.textAlign = 'center';
    for (let x = 0; x <= 1800; x += 100) {
      const big = x % 500 === 0;
      c.beginPath(); c.moveTo(X(x), Y(0)); c.lineTo(X(x), Y(0) + (big ? 7 : 4)); c.stroke();
      if (big) c.fillText(fr(x), X(x), Y(0) + 19);
    }
    // table
    c.fillStyle = COL.bois; c.strokeStyle = COL.boisT; c.lineWidth = 1.2;
    c.fillRect(X(-1960), Y(H), X(0) - X(-1960), 6);
    c.strokeRect(X(-1960), Y(H), X(0) - X(-1960), 6);
    c.fillRect(X(-1900), Y(H) + 6, 7, Y(0) - Y(H) - 6); c.fillRect(X(-60), Y(H) + 6, 7, Y(0) - Y(H) - 6);
    c.fillStyle = COL.ard; c.textAlign = 'left';
    c.fillText('table : ' + fr(H) + ' punti', X(-1880), Y(H / 2));
    // rampe
    const rp = run ? run.rp : rampe(+inH.value, +inA.value);
    c.fillStyle = '#E6EEF5'; c.strokeStyle = COL.bleu; c.lineWidth = 2;
    c.beginPath(); c.moveTo(X(rp.xt), Y(H)); c.lineTo(X(rp.xt), Y(H + rp.h)); c.lineTo(X(rp.xb), Y(H)); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(X(rp.xt), Y(H + rp.h)); c.lineTo(X(rp.xb), Y(H)); c.lineTo(X(0), Y(H)); c.stroke();
    // cote h
    c.strokeStyle = COL.prune; c.fillStyle = COL.prune; c.lineWidth = 1.2;
    const xc = rp.xt - 60;
    c.beginPath(); c.moveTo(X(xc), Y(H)); c.lineTo(X(xc), Y(H + rp.h)); c.stroke();
    [[H, 1], [H + rp.h, -1]].forEach(([yy, sgn]) => { c.beginPath(); c.moveTo(X(xc) - 4, Y(yy) - 6 * sgn); c.lineTo(X(xc), Y(yy)); c.lineTo(X(xc) + 4, Y(yy) - 6 * sgn); c.stroke(); });
    c.font = 'italic 13px Georgia, serif'; c.textAlign = 'right';
    c.fillText('h', X(xc) - 6, Y(H + rp.h / 2) + 4);
    // impacts précédents
    c.font = '10px sans-serif'; c.textAlign = 'center';
    marks.forEach(m => {
      c.fillStyle = COL.prune; c.beginPath();
      c.moveTo(X(m.d), Y(0) - 1); c.lineTo(X(m.d) - 4, Y(0) - 9); c.lineTo(X(m.d) + 4, Y(0) - 9); c.closePath(); c.fill();
    });
    // trajectoire en cours
    const trail = run ? run.trail : lastTrail;
    if (trail.length > 1) {
      c.strokeStyle = COL.prune; c.lineWidth = 1.2; c.setLineDash([4, 4]);
      c.beginPath(); trail.forEach((p, i) => i ? c.lineTo(X(p.x), Y(p.y)) : c.moveTo(X(p.x), Y(p.y))); c.stroke();
      c.setLineDash([]);
    }
    // bille
    const b = balle(rp, run && run.st);
    const rr = Math.max(4, R * k);
    c.fillStyle = COL.prune; c.beginPath(); c.arc(X(b.x), Y(b.y), rr, 0, 2 * Math.PI); c.fill();
    c.strokeStyle = '#fff'; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(X(b.x), Y(b.y)); c.lineTo(X(b.x) + rr * Math.cos(-b.rot), Y(b.y) + rr * Math.sin(b.rot)); c.stroke();
  }

  // ---------------------------------------------------------------- graphique d(h)
  function drawGraph() {
    const c = ctxG, { w, h } = dimG, sq = chkSqrt.checked;
    const m = { g: 52, d: 14, h: 26, b: 38 };
    const xmax = sq ? Math.sqrt(1000) : 1000, ymax = 1700;
    const px = v => m.g + (sq ? Math.sqrt(v) : v) / xmax * (w - m.g - m.d);
    const py = d => h - m.b - d / ymax * (h - m.h - m.b);
    c.clearRect(0, 0, w, h);
    c.font = '11px sans-serif'; c.strokeStyle = COL.grille; c.fillStyle = COL.ard; c.lineWidth = 1;
    for (let d = 0; d <= 1600; d += 400) {
      c.beginPath(); c.moveTo(m.g, py(d)); c.lineTo(w - m.d, py(d)); c.stroke();
      c.textAlign = 'right'; c.fillText(fr(d), m.g - 6, py(d) + 4);
    }
    const ticks = sq ? [0, 100, 200, 400, 600, 800, 1000] : [0, 200, 400, 600, 800, 1000];
    ticks.forEach(v => {
      c.beginPath(); c.moveTo(px(v), py(0)); c.lineTo(px(v), m.h); c.stroke();
      c.textAlign = 'center'; c.fillText(fr(v), px(v), h - m.b + 15);
    });
    c.fillText(sq ? 'hauteur h (punti), graduée en √h' : 'hauteur h (punti)', (m.g + w - m.d) / 2, h - 6);
    c.save(); c.translate(13, (m.h + h - m.b) / 2); c.rotate(-Math.PI / 2); c.fillText('portée d (punti)', 0, 0); c.restore();
    // courbe théorique
    c.strokeStyle = COL.sarc; c.lineWidth = 2; c.beginPath();
    for (let i = 0; i <= 200; i++) { const v = 1000 * (i / 200) ** (sq ? 2 : 1); i ? c.lineTo(px(v), py(portee(v))) : c.moveTo(px(v), py(portee(v))); }
    c.stroke();
    // points
    if (chkGal.checked) {
      c.fillStyle = COL.bleu;
      GAL.forEach(([hh, d]) => c.fillRect(px(hh) - 4, py(d) - 4, 8, 8));
    }
    c.fillStyle = COL.prune;
    marks.forEach(mk => { c.beginPath(); c.arc(px(mk.h), py(mk.d), 4.5, 0, 2 * Math.PI); c.fill(); });
    // légende
    const lg = [[COL.sarc, 'théorie (d ∝ √h)', 'l']];
    if (chkGal.checked) lg.push([COL.bleu, 'Galilée, vers 1608', 's']);
    lg.push([COL.prune, 'vos lancers', 'c']);
    let y = m.h + 6; c.textAlign = 'left';
    lg.forEach(([col, txt, t]) => {
      c.fillStyle = col; c.strokeStyle = col; c.lineWidth = 2;
      if (t === 'l') { c.beginPath(); c.moveTo(m.g + 10, y); c.lineTo(m.g + 26, y); c.stroke(); }
      else if (t === 's') c.fillRect(m.g + 14, y - 4, 8, 8);
      else { c.beginPath(); c.arc(m.g + 18, y, 4.5, 0, 2 * Math.PI); c.fill(); }
      c.fillStyle = COL.texte; c.fillText(txt, m.g + 32, y + 4); y += 17;
    });
  }

  // ---------------------------------------------------------------- animation
  function step(now) {
    const dt = Math.min(0.05, (now - tPrev) / 1000); tPrev = now;
    const rp = run.rp, st = run.st;
    st.t += dt; run.total += dt;
    if (st.ph === 'rampe' && 0.5 * rp.acc * st.t * st.t >= rp.L) { run.tDesc = Math.sqrt(2 * rp.L / rp.acc); st.ph = 'plat'; st.t = 0; }
    if (st.ph === 'plat' && Math.sqrt(2 * rp.acc * rp.L) * st.t >= FLAT) { st.ph = 'chute'; st.t = 0; }
    if (st.ph === 'chute') {
      const b = balle(rp, st); run.trail.push({ x: b.x, y: b.y - R });
      if (b.y <= R + 1e-6) { finish(); return; }
    }
    drawScene();
    raf = requestAnimationFrame(step);
  }
  function finish() {
    const rp = run.rp, d = portee(rp.h);
    marks.push({ h: rp.h, d, a: Math.round(rp.a * 180 / Math.PI) });
    info.textContent = `h = ${fr(rp.h)} punti : la bille touche le sol à d ≈ ${fr(d)} punti, soit d/√h ≈ ${fr(d / Math.sqrt(rp.h), 1)}. ` +
                       `Descente de la pente en ${fr(run.tDesc, 2)} s : changez l'inclinaison, la durée change mais pas la portée.`;
    lastTrail = run.trail; run = null; drawScene(); drawGraph(); setBusy(false);
  }
  function setBusy(b) { [inH, inA, btnGo, btnClear].forEach(e => e.disabled = b); }
  btnGo.addEventListener('click', () => {
    if (run) return;
    run = { rp: rampe(+inH.value, +inA.value), st: { ph: 'rampe', t: 0 }, trail: [], total: 0, tDesc: 0 };
    info.textContent = 'La bille descend…'; setBusy(true);
    tPrev = performance.now(); raf = requestAnimationFrame(step);
  });
  btnClear.addEventListener('click', () => { marks = []; lastTrail = []; info.textContent = ''; drawScene(); drawGraph(); });
  inH.addEventListener('input', () => { $('[data-o="h"]').textContent = inH.value; drawScene(); });
  inA.addEventListener('input', () => { $('[data-o="a"]').textContent = inA.value + '°'; drawScene(); });
  chkGal.addEventListener('change', drawGraph); chkSqrt.addEventListener('change', drawGraph);
  window.addEventListener('resize', resize);
  info.textContent = 'Choisissez une hauteur et une inclinaison, puis lâchez la bille.';
  resize();
})();
