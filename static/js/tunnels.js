/* Trois billes partent ensemble de l'entrée commune de deux tunnels :
   l'une tombe dans le tunnel qui passe par le centre, l'autre glisse dans un
   tunnel en biais, la troisième est lancée en orbite rasante. Dans une Terre
   homogène, toutes trois ont la même période, 2π√(R/g) ≈ 84 min, et se
   retrouvent toutes les demi-périodes.
   Conteneur attendu : <div class="anim" data-anim="tunnels"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="tunnels"]');
  if (!root) return;

  const COL = { bleu: '#004D80', prune: '#970E53', sarc: '#006C65', ard: '#475569', clair: '#94a3b8',
                texte: '#334155', bord: '#e2e8f0' };
  const RT = 6371e3, G0 = 9.81;
  const W = Math.sqrt(G0 / RT);                  // pulsation, en rad/s
  const T = 2 * Math.PI / W;                     // période, en s (≈ 84 min)
  const DEMI = T / 2;
  const RATE = DEMI / 6;                         // un aller simulé en 6 s
  const RB = 7;                                  // rayon des billes, en pixels
  const V0 = W * RT / 1000;                      // vitesse orbitale, en km/s
  const ms = s => { const m = Math.floor(s / 60), r = Math.floor(s - 60 * m); return `${m} min ${String(r).padStart(2, '0')} s`; };
  const fr = (x, d = 1) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Coupe de la Terre : une bille tombe dans un tunnel passant par le centre, une autre glisse dans un tunnel en biais, une troisième fait le tour en orbite rasante ; elles se retrouvent toutes les 42 minutes"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lâcher les billes</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Arrivée du tunnel en biais <input type="range" min="60" max="160" step="1" value="90" data-k="a"><output data-o="a">90°</output></label>
  <label><input type="checkbox" data-k="ombre"> Ombre de la bille en orbite</label>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('.anim-scene'), inA = $('[data-k="a"]'), chkO = $('[data-k="ombre"]');
  const btnGo = $('[data-k="go"]'), btnReset = $('[data-k="reset"]'), info = $('.anim-info');
  let t = 0, playing = false, raf = 0, tPrev = 0, dim, vus = 0;

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600;
    const h = Math.round(w < 520 ? 0.72 * w + 162 : Math.min(0.6 * w, 470));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    dim = { w, h }; draw();
  }

  // positions, en rayons terrestres, origine au centre, y vers le haut
  function positions(tt) {
    const c = Math.cos(W * tt), s = Math.sin(W * tt), a = +inA.value * Math.PI / 180;
    const A = { x: 0, y: 1 }, B = { x: Math.sin(a), y: Math.cos(a) }, M = { x: B.x / 2, y: (1 + B.y) / 2 };
    const demiCorde = Math.hypot(A.x - M.x, A.y - M.y);
    return {
      A, B,
      centre: { x: 0, y: c },                                           // x(t) = R cos ωt
      biais: { x: M.x + (A.x - M.x) * c, y: M.y + (A.y - M.y) * c },    // même loi, autour du milieu du tunnel
      orbite: { x: s, y: c },                                           // mouvement circulaire uniforme
      v: [Math.abs(s) * V0, Math.abs(s) * demiCorde * V0, V0]
    };
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }

  function draw() {
    const c = cv.getContext('2d'), { w, h } = dim, etroit = w < 520;
    const R = etroit ? w * 0.36 : Math.min(h * 0.4, w * 0.27);
    const O = etroit ? { x: w / 2, y: R + 30 } : { x: w * 0.36, y: h / 2 + 4 };
    const X = p => O.x + R * p.x, Y = p => O.y - R * p.y;
    const P = positions(t);
    c.clearRect(0, 0, w, h); c.lineCap = 'round'; c.lineJoin = 'round';

    // Terre : dégradé radial doux et halo
    const halo = c.createRadialGradient(O.x, O.y, R * 0.98, O.x, O.y, R * 1.12);
    halo.addColorStop(0, 'rgba(0,77,128,0.10)'); halo.addColorStop(1, 'rgba(0,77,128,0)');
    c.fillStyle = halo; c.beginPath(); c.arc(O.x, O.y, R * 1.12, 0, 2 * Math.PI); c.fill();
    const sol = c.createRadialGradient(O.x - R * 0.3, O.y - R * 0.35, R * 0.1, O.x, O.y, R);
    sol.addColorStop(0, '#F4F8FB'); sol.addColorStop(1, '#D9E7F1');
    c.fillStyle = sol; c.beginPath(); c.arc(O.x, O.y, R, 0, 2 * Math.PI); c.fill();
    c.strokeStyle = COL.bleu; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = COL.clair; c.beginPath(); c.arc(O.x, O.y, 2.2, 0, 2 * Math.PI); c.fill();

    // orbite rasante : cercle discret et sillage de la bille
    c.strokeStyle = 'rgba(0,108,101,0.25)'; c.lineWidth = 1.2; c.setLineDash([2, 5]);
    c.beginPath(); c.arc(O.x, O.y, R, 0, 2 * Math.PI); c.stroke(); c.setLineDash([]);
    const ang = W * t, sillage = Math.min(ang, 1.6);
    for (let i = 0; i < 24; i++) {
      const a0 = ang - sillage * (i + 1) / 24, a1 = ang - sillage * i / 24;
      c.strokeStyle = `rgba(0,108,101,${0.55 * (1 - i / 24)})`; c.lineWidth = 3;
      c.beginPath(); c.arc(O.x, O.y, R, -Math.PI / 2 + a0, -Math.PI / 2 + a1); c.stroke();
    }

    // tunnels : galeries ouvertes. Les parois s'arrêtent net à la surface, et la galerie
    // interrompt le contour du globe : les extrémités sont de vraies ouvertures.
    const HW = 5;                                            // demi-largeur de la galerie, en pixels
    const surface = (p, d, rho) => {                         // intersections de p + s·d avec le cercle de rayon rho
      const pd = p.x * d.x + p.y * d.y, disc = Math.sqrt(Math.max(0, pd * pd - (p.x * p.x + p.y * p.y) + rho * rho));
      return [-pd - disc, -pd + disc].map(s => ({ x: p.x + s * d.x, y: p.y + s * d.y }));
    };
    const galerie = (p, q) => {                              // p, q : extrémités sur le globe (rayon 1)
      const L = Math.hypot(q.x - p.x, q.y - p.y), d = { x: (q.x - p.x) / L, y: (q.y - p.y) / L }, n = { x: -d.y, y: d.x };
      const bord = (off, rho) => surface({ x: p.x + n.x * off / R, y: p.y + n.y * off / R }, d, rho);
      return { bord, poly: (off, rho) => { const [a1, a2] = bord(off, rho), [b1, b2] = bord(-off, rho); return [a1, a2, b2, b1]; } };
    };
    const remplir = (pts, col) => {
      c.fillStyle = col; c.beginPath(); pts.forEach((pt, i) => i ? c.lineTo(X(pt), Y(pt)) : c.moveTo(X(pt), Y(pt))); c.closePath(); c.fill();
    };
    const parois = g => {
      c.strokeStyle = '#9aa8ba'; c.lineWidth = 1.5; c.lineCap = 'butt';
      [HW, -HW].forEach(off => { const [u, v] = g.bord(off, 1); c.beginPath(); c.moveTo(X(u), Y(u)); c.lineTo(X(v), Y(v)); c.stroke(); });
      c.lineCap = 'round';
    };
    const gal = [galerie(P.A, { x: 0, y: -1 }), galerie(P.A, P.B)];
    const ext = 1 + 1.5 / R;                                 // un peu au-delà du contour, pour l'effacer
    gal.forEach(g => remplir(g.poly(HW, ext), '#F8FAFC'));
    gal.forEach(parois);
    gal.forEach(g => remplir(g.poly(HW - 1, ext), '#F8FAFC')); // efface les parois de l'autre galerie au croisement
    c.font = '11px sans-serif'; c.fillStyle = COL.ard; c.textAlign = 'center';
    c.fillText('départ', X(P.A), Y(P.A) - RB - 7);

    // ombre de la bille en orbite sur le diamètre
    if (chkO.checked) {
      c.strokeStyle = 'rgba(0,108,101,0.55)'; c.lineWidth = 1.2; c.setLineDash([4, 4]);
      c.beginPath(); c.moveTo(X(P.orbite), Y(P.orbite)); c.lineTo(X(P.centre), Y(P.centre)); c.stroke(); c.setLineDash([]);
    }

    // rendez-vous : un halo s'élargit autour des billes à chaque demi-période
    const k = Math.round(t / DEMI), ecart = Math.abs(t - k * DEMI) / DEMI;
    if (k >= 1 && ecart < 0.06) {
      const f = ecart / 0.06;
      [P.centre, P.biais, P.orbite].forEach(p => {
        c.strokeStyle = `rgba(151,14,83,${0.45 * (1 - f)})`; c.lineWidth = 2;
        c.beginPath(); c.arc(X(p), Y(p), RB + 4 + 14 * f, 0, 2 * Math.PI); c.stroke();
      });
    }

    // billes, toutes de la même taille
    const bille = (p, col) => {
      c.save(); c.shadowColor = 'rgba(15,23,42,0.25)'; c.shadowBlur = 4; c.shadowOffsetY = 1;
      c.fillStyle = col; c.beginPath(); c.arc(X(p), Y(p), RB, 0, 2 * Math.PI); c.fill(); c.restore();
      c.strokeStyle = '#fff'; c.lineWidth = 1.8; c.beginPath(); c.arc(X(p), Y(p), RB, 0, 2 * Math.PI); c.stroke();
    };
    bille(P.orbite, COL.sarc); bille(P.biais, COL.bleu); bille(P.centre, COL.prune);

    // chronomètre
    c.textAlign = 'left'; c.fillStyle = COL.texte; c.font = '600 15px sans-serif';
    c.fillText(`t = ${ms(t)}`, 14, 24);
    c.font = '11px sans-serif'; c.fillStyle = COL.ard;
    c.fillText(`un aller : ${ms(Math.round(DEMI))}`, 14, 41);

    // légende et vitesses, dans un cartouche
    const items = [[COL.prune, 'tunnel par le centre'], [COL.bleu, 'tunnel en biais'], [COL.sarc, 'orbite rasante']];
    const bw = etroit ? w - 24 : Math.min(200, w - (O.x + R + 40)), bh = etroit ? 92 : 152;
    const bx = etroit ? 12 : Math.min(O.x + R + 36, w - bw - 12), by = etroit ? O.y + R + 18 : O.y - bh / 2;
    c.fillStyle = 'rgba(248,250,252,0.95)'; c.strokeStyle = COL.bord; c.lineWidth = 1;
    roundRect(c, bx, by, bw, bh, 10); c.fill(); c.stroke();
    const barMax = etroit ? bw * 0.2 : bw - 100;
    items.forEach(([col, s], i) => {
      const yy = by + 22 + i * (etroit ? 24 : 44), x0 = bx + 14;
      c.fillStyle = col; c.beginPath(); c.arc(x0 + 5, yy - 4, 5.5, 0, 2 * Math.PI); c.fill();
      c.fillStyle = COL.texte; c.font = '12px sans-serif'; c.textAlign = 'left'; c.fillText(s, x0 + 16, yy);
      const vx = etroit ? bx + bw - barMax - 54 : x0 + 16, vy = etroit ? yy - 9 : yy + 8;
      c.fillStyle = '#e2e8f0'; roundRect(c, vx, vy, barMax, 7, 3.5); c.fill();
      c.fillStyle = col; roundRect(c, vx, vy, Math.max(7, barMax * P.v[i] / V0), 7, 3.5); c.fill();
      c.fillStyle = COL.ard; c.font = '11px sans-serif'; c.fillText(`${fr(P.v[i])} km/s`, vx + barMax + 6, vy + 7);
    });
  }

  function message() {
    if (t === 0) info.textContent = `Une période dure 2π√(R/g) ≈ ${ms(Math.round(T))} pour chacune des trois billes, quelle que soit l'inclinaison du tunnel en biais.`;
    else info.textContent = `Toutes les ${ms(Math.round(DEMI))}, les trois billes se retrouvent : au bout de leur trajet, puis ensemble au départ. ` +
      `Rendez-vous observés : ${vus}.`;
  }
  function loop(now) {
    const dt = Math.min(0.05, (now - tPrev) / 1000); tPrev = now;
    t += RATE * dt;
    const k = Math.floor(t / DEMI); if (k !== vus) { vus = k; message(); }
    draw();
    if (playing) raf = requestAnimationFrame(loop);
  }
  btnGo.addEventListener('click', () => {
    playing = !playing; btnGo.textContent = playing ? 'Pause' : 'Reprendre';
    if (playing) { tPrev = performance.now(); raf = requestAnimationFrame(loop); if (t === 0) info.textContent = 'Les billes sont en route…'; }
    else cancelAnimationFrame(raf);
  });
  btnReset.addEventListener('click', () => { cancelAnimationFrame(raf); playing = false; t = 0; vus = 0; btnGo.textContent = 'Lâcher les billes'; message(); draw(); });
  inA.addEventListener('input', () => { $('[data-o="a"]').textContent = inA.value + '°'; draw(); });
  chkO.addEventListener('change', draw);
  window.addEventListener('resize', fit);
  message(); fit();
})();
