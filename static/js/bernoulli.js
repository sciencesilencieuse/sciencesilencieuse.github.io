/* La preuve de Jean Bernoulli : une bille de vitesse n (en unités) rencontre une
   série de ressorts identiques. Chacun est orienté pour faire face à exactement
   une unité de vitesse de la bille ; il absorbe cette composante puis se bloque,
   et la bille repart avec la composante perpendiculaire, intacte.
   Il faut n² ressorts pour arrêter la bille : l'énergie est en v².
   Conteneur attendu : <div class="anim" data-anim="bernoulli"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="bernoulli"]');
  if (!root) return;

  const COL = { bleu: '#004D80', prune: '#970E53', sarc: '#006C65', ard: '#475569', ressort: '#94a3b8',
                plaque: '#334155', grille: '#e2e8f0', texte: '#334155', piste: '#cbd5e1' };
  const ELL = 1.15;             // longueur du ressort au repos
  const RB = 0.3;               // rayon de la bille
  const MARGE = 0.45;           // dépassement de la plaque de part et d'autre de la zone de contact
  const MUR = 0.32;             // demi-largeur du support fixe
  const TC = 0.75;              // durée de la compression : la bille longe la plaque pendant ce temps
  const AMP = 2 * TC / Math.PI; // compression finale : la vitesse axiale 1 s'annule en TC
  const RATE = 2;               // unités de temps simulé par seconde
  const fr = (x, d = 2) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });
  const dir = t => ({ x: Math.cos(t), y: Math.sin(t) });
  const add = (a, b, k = 1) => ({ x: a.x + k * b.x, y: a.y + k * b.y });

  root.innerHTML = `
<div class="anim-ctrl">
  <label>Vitesse initiale <select data-k="n"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select> unités</label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>
<div class="anim-duo">
  <figure><canvas class="anim-scene" role="img" aria-label="La bille rencontre successivement des ressorts qui absorbent chacun une unité de vitesse"></canvas><figcaption>La bille et les ressorts</figcaption></figure>
  <figure><canvas class="anim-hodo" role="img" aria-label="Les vitesses successives de la bille forment l'escargot de Pythagore"></canvas><figcaption>Vitesses successives&nbsp;: l'escargot de Pythagore</figcaption></figure>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cvS = $('.anim-scene'), cvH = $('.anim-hodo'), selN = $('[data-k="n"]');
  const btnGo = $('[data-k="go"]'), btnReset = $('[data-k="reset"]'), info = $('.anim-info');
  let geo, t = 0, playing = false, raf = 0, tPrev = 0, dimS, dimH;

  // ---------------------------------------------------------------- construction
  function build(n) {
    const N = n * n, springs = [], segs = [];
    let pos = { x: 0, y: 0 }, th = 0, t0 = 0;
    for (let k = 0; k < N; k++) {
      const s = Math.sqrt(N - k), s2 = Math.sqrt(N - k - 1);
      let thp, u;
      if (s2 > 1e-9) { thp = th - Math.asin(1 / s); u = dir(thp + Math.PI / 2); }   // v = v⊥ + u, avec |u| = 1
      else { thp = th; u = dir(th); }                                               // dernier ressort : de face
      const v = { x: s * Math.cos(th), y: s * Math.sin(th) };
      const vp = { x: s2 * Math.cos(thp), y: s2 * Math.sin(thp) };
      const approach = k === 0 ? 2.4 : 1.2 + 0.45 * s;
      const cc = add(pos, dir(th), approach);            // centre de la bille au premier contact
      const cp = add(cc, u, RB);                          // point de contact sur la face avant de la plaque
      const pd = s2 > 1e-9 ? dir(thp) : dir(th + Math.PI / 2);   // direction de la plaque
      const glisse = s2 * TC;                             // la bille longe la plaque pendant la compression
      const p1 = add(cp, pd, -MARGE), p2 = add(cp, pd, glisse + MARGE);
      const pc = add(cp, pd, glisse / 2);                 // milieu de la plaque, où s'attache le ressort
      const base = add(pc, u, ELL);                       // support fixe, derrière la plaque
      segs.push({ type: 'vol', t0, dur: approach / s, p0: pos, v, k });
      t0 += approach / s;
      segs.push({ type: 'choc', t0, dur: TC, cc, u, vp, k });
      t0 += TC;
      springs.push({ pc, base, u, pd, p1, p2, s, s2, th, thp, v, vp, cc, tLock: t0 });
      pos = add(add(cc, vp, TC), u, AMP); th = thp;
    }
    // cadre englobant
    const pts = [{ x: -0.6, y: 0 }];
    springs.forEach(sp => pts.push(sp.p1, sp.p2, add(sp.p1, sp.u, AMP), add(sp.p2, sp.u, AMP), add(sp.base, sp.pd, MUR), add(sp.base, sp.pd, -MUR), add(sp.base, sp.u, 0.2)));
    const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
    const box = { x0: Math.min(...xs) - 0.9, x1: Math.max(...xs) + 0.9, y0: Math.min(...ys) - 0.9, y1: Math.max(...ys) + 0.9 };
    return { n, N, springs, segs, T: t0, box };
  }
  function state(tt) {                      // position de la bille et ressorts bloqués à l'instant tt
    const g = geo; let seg = g.segs[g.segs.length - 1];
    for (const sg of g.segs) if (tt < sg.t0 + sg.dur) { seg = sg; break; }
    const tau = Math.min(Math.max(tt - seg.t0, 0), seg.dur);
    let p, comp = 0;
    if (seg.type === 'vol') p = add(seg.p0, seg.v, tau);
    else { comp = AMP * Math.sin(Math.PI * tau / (2 * TC)); p = add(add(seg.cc, seg.vp, tau), seg.u, comp); }
    const locked = g.springs.filter(sp => tt >= sp.tLock).length;
    return { p, seg, comp, locked };
  }

  // ---------------------------------------------------------------- dessin
  function fit(cv, ratio) {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 400, h = Math.round(w * ratio);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  }
  function resize() { dimS = fit(cvS, 0.85); dimH = fit(cvH, 1); draw(); }

  function arrow(c, x0, y0, x1, y1, col, lw = 2) {
    const a = Math.atan2(y1 - y0, x1 - x0), L = Math.hypot(x1 - x0, y1 - y0), hd = Math.min(8, L * 0.4);
    c.strokeStyle = col; c.fillStyle = col; c.lineWidth = lw;
    c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1 - hd * 0.8 * Math.cos(a), y1 - hd * 0.8 * Math.sin(a)); c.stroke();
    c.beginPath(); c.moveTo(x1, y1);
    c.lineTo(x1 - hd * Math.cos(a - 0.4), y1 - hd * Math.sin(a - 0.4));
    c.lineTo(x1 - hd * Math.cos(a + 0.4), y1 - hd * Math.sin(a + 0.4)); c.closePath(); c.fill();
  }
  function label(c, x, y, txt, col) {
    c.font = '12px sans-serif'; const w = c.measureText(txt).width + 8;
    const W = c.canvas.clientWidth, H = c.canvas.clientHeight;          // l'étiquette reste dans le cadre
    x = Math.min(Math.max(x, w / 2 + 3), W - w / 2 - 3); y = Math.min(Math.max(y, 12), H - 11);
    c.fillStyle = 'rgba(255,255,255,0.92)'; c.fillRect(x - w / 2, y - 9, w, 17);
    c.strokeStyle = col; c.lineWidth = 1; c.strokeRect(x - w / 2, y - 9, w, 17);
    c.fillStyle = col; c.textAlign = 'center'; c.fillText(txt, x, y + 4);
  }

  function drawScene(st) {
    const c = cvS.getContext('2d'), { w, h } = dimS, b = geo.box;
    const k = Math.min((w - 12) / (b.x1 - b.x0), (h - 12) / (b.y1 - b.y0));
    const ox = (w - k * (b.x1 + b.x0)) / 2, oy = (h + k * (b.y1 + b.y0)) / 2;
    const X = x => ox + k * x, Y = y => oy - k * y;
    c.clearRect(0, 0, w, h); c.lineCap = 'round'; c.lineJoin = 'round';
    // trajectoire parcourue
    c.strokeStyle = COL.piste; c.lineWidth = 1.2; c.setLineDash([3, 4]); c.beginPath();
    let first = true;
    for (let tt = 0; tt <= t; tt += 0.03) { const q = state(tt).p; first ? c.moveTo(X(q.x), Y(q.y)) : c.lineTo(X(q.x), Y(q.y)); first = false; }
    c.lineTo(X(st.p.x), Y(st.p.y)); c.stroke(); c.setLineDash([]);
    // supports, ressorts et plaques : la plaque recule en comprimant le ressort
    geo.springs.forEach((sp, i) => {
      const locked = i < st.locked, actif = st.seg.type === 'choc' && st.seg.k === i;
      const off = locked ? AMP : (actif ? st.comp : 0);
      const nv = { x: -sp.u.y, y: sp.u.x }, L = ELL - off, tours = 7;
      // support fixe hachuré
      const w1 = add(sp.base, sp.pd, -MUR), w2 = add(sp.base, sp.pd, MUR);
      c.strokeStyle = COL.ard; c.lineWidth = 2;
      c.beginPath(); c.moveTo(X(w1.x), Y(w1.y)); c.lineTo(X(w2.x), Y(w2.y)); c.stroke();
      c.lineWidth = 1;
      for (let j = 0; j <= 4; j++) {
        const a0 = add(sp.base, sp.pd, -MUR + j * MUR / 2), a1 = add(add(a0, sp.u, 0.17), sp.pd, -0.1);
        c.beginPath(); c.moveTo(X(a0.x), Y(a0.y)); c.lineTo(X(a1.x), Y(a1.y)); c.stroke();
      }
      // ressort, du support au milieu de la plaque
      const att = add(sp.pc, sp.u, off);
      c.strokeStyle = locked ? COL.sarc : COL.ressort; c.lineWidth = locked ? 1.6 : 1.3;
      c.beginPath(); c.moveTo(X(sp.base.x), Y(sp.base.y));
      for (let j = 1; j < 2 * tours; j++) {
        const a = add(sp.base, sp.u, -L * j / (2 * tours)), q = add(a, nv, (j % 2 ? 1 : -1) * 0.13);
        c.lineTo(X(q.x), Y(q.y));
      }
      c.lineTo(X(att.x), Y(att.y)); c.stroke();
      // plaque mobile
      const q1 = add(sp.p1, sp.u, off), q2 = add(sp.p2, sp.u, off);
      c.strokeStyle = locked ? COL.sarc : COL.plaque; c.lineWidth = Math.max(3, 0.1 * k);
      c.beginPath(); c.moveTo(X(q1.x), Y(q1.y)); c.lineTo(X(q2.x), Y(q2.y)); c.stroke();
    });
    // bille
    c.fillStyle = COL.prune; c.beginPath(); c.arc(X(st.p.x), Y(st.p.y), Math.max(5, RB * k), 0, 2 * Math.PI); c.fill();
    // décomposition de la vitesse à l'approche du prochain ressort
    if (st.seg.type === 'vol' && t < geo.T) {
      const sp = geo.springs[st.seg.k], q = 85 / (k * sp.s), P = { x: X(st.p.x), y: Y(st.p.y) };   // |v| dessiné sur 85 px
      const tipV = { x: P.x + k * q * sp.v.x, y: P.y - k * q * sp.v.y };
      const tipU = { x: P.x + k * q * sp.u.x, y: P.y - k * q * sp.u.y };
      const tipP = { x: P.x + k * q * sp.vp.x, y: P.y - k * q * sp.vp.y };
      c.setLineDash([3, 3]); c.strokeStyle = COL.ressort; c.lineWidth = 1;
      c.beginPath(); c.moveTo(tipU.x, tipU.y); c.lineTo(tipV.x, tipV.y); c.lineTo(tipP.x, tipP.y); c.stroke(); c.setLineDash([]);
      arrow(c, P.x, P.y, tipV.x, tipV.y, COL.ard, 2.2);
      arrow(c, P.x, P.y, tipU.x, tipU.y, COL.prune, 2);
      if (sp.s2 > 1e-9) arrow(c, P.x, P.y, tipP.x, tipP.y, COL.sarc, 2);
      const off = (dx, dy, d) => { const L = Math.hypot(dx, dy) || 1; return [d * dx / L, d * dy / L]; };
      let [ax, ay] = off(tipU.x - P.x, tipU.y - P.y, 30); label(c, tipU.x + ax, tipU.y + ay, 'v∥ = 1', COL.prune);
      if (sp.s2 > 1e-9) { [ax, ay] = off(tipP.x - P.x, tipP.y - P.y, 40); label(c, tipP.x + ax, tipP.y + ay, 'v⊥ ≈ ' + fr(sp.s2), COL.sarc); }
    }
  }

  function drawHodo(st) {
    const c = cvH.getContext('2d'), { w, h } = dimH, n = geo.n;
    const k = (Math.min(w, h) / 2 - 18) / n, O = { x: w / 2, y: h / 2 };
    const P = v => ({ x: O.x + k * v.x, y: O.y - k * v.y });
    c.clearRect(0, 0, w, h); c.lineCap = 'round';
    c.strokeStyle = COL.grille; c.lineWidth = 1;
    for (let r = 1; r <= n; r++) { c.beginPath(); c.arc(O.x, O.y, r * k, 0, 2 * Math.PI); c.stroke(); }
    c.fillStyle = COL.ard; c.font = '11px sans-serif'; c.textAlign = 'left';
    for (let r = 1; r <= n; r++) c.fillText(String(r), O.x + r * k + 3, O.y - 3);
    const done = st.locked;
    for (let i = 0; i < done; i++) {           // triangles déjà parcourus
      const sp = geo.springs[i], A = P(sp.v), B = P(sp.vp);
      c.strokeStyle = 'rgba(0,77,128,0.35)'; c.lineWidth = 1.2;
      c.beginPath(); c.moveTo(O.x, O.y); c.lineTo(A.x, A.y); c.stroke();
      c.strokeStyle = COL.prune; c.lineWidth = 2.2;
      c.beginPath(); c.moveTo(A.x, A.y); c.lineTo(B.x, B.y); c.stroke();
    }
    const cur = done < geo.N ? geo.springs[done].v : { x: 0, y: 0 };
    if (done < geo.N) { const A = P(cur); arrow(c, O.x, O.y, A.x, A.y, COL.bleu, 2.4); }
    c.fillStyle = COL.ard; c.beginPath(); c.arc(O.x, O.y, 2.5, 0, 2 * Math.PI); c.fill();
  }

  function draw() {
    const st = state(t);
    drawScene(st); drawHodo(st);
    const k = st.locked, v = Math.sqrt(geo.N - k);
    if (t >= geo.T) info.textContent = `La bille est arrêtée : pour une vitesse de ${geo.n} unité${geo.n > 1 ? 's' : ''}, il a fallu ${geo.N} ressort${geo.N > 1 ? 's' : ''}, soit ${geo.n}².`;
    else info.textContent = `Ressorts bloqués : ${k} sur ${geo.N}. Vitesse de la bille : √${geo.N - k} ≈ ${fr(v)} unité${v > 1 ? 's' : ''}, et v² = ${geo.N} − ${k} = ${geo.N - k}.`;
  }

  // ---------------------------------------------------------------- animation
  function loop(now) {
    const dt = Math.min(0.05, (now - tPrev) / 1000); tPrev = now;
    t = Math.min(geo.T, t + RATE * dt);
    draw();
    if (t >= geo.T) { playing = false; btnGo.textContent = 'Lancer'; return; }
    if (playing) raf = requestAnimationFrame(loop);
  }
  function reset() { cancelAnimationFrame(raf); playing = false; t = 0; geo = build(+selN.value); btnGo.textContent = 'Lancer'; draw(); }
  btnGo.addEventListener('click', () => {
    if (playing) { playing = false; cancelAnimationFrame(raf); btnGo.textContent = 'Reprendre'; return; }
    if (t >= geo.T) t = 0;
    playing = true; btnGo.textContent = 'Pause'; tPrev = performance.now(); raf = requestAnimationFrame(loop);
  });
  btnReset.addEventListener('click', reset);
  selN.addEventListener('change', reset);
  window.addEventListener('resize', resize);
  geo = build(+selN.value);
  resize();
})();
