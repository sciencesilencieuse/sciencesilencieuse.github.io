/* Trois billes partent ensemble de l'entrée commune de deux tunnels :
   l'une tombe dans le tunnel qui passe par le centre, l'autre glisse dans un
   tunnel en biais, la troisième est lancée en orbite rasante. Dans une Terre
   homogène, toutes trois ont la même période, 2π√(R/g) ≈ 84 min.
   Conteneur attendu : <div class="anim" data-anim="tunnels"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="tunnels"]');
  if (!root) return;

  const COL = { bleu: '#004D80', prune: '#970E53', sarc: '#006C65', ard: '#475569', clair: '#94a3b8',
                terre: '#EAF2F8', tunnel: '#cbd5e1', texte: '#334155' };
  const RT = 6371e3, G0 = 9.81;
  const W = Math.sqrt(G0 / RT);                  // pulsation, en rad/s
  const T = 2 * Math.PI / W;                     // période, en s (≈ 84 min)
  const RATE = (T / 2) / 6.5;                    // un aller simulé en 6,5 s
  const ms = s => { const m = Math.floor(s / 60), r = Math.round(s - 60 * m); return r === 60 ? `${m + 1} min 00 s` : `${m} min ${String(r).padStart(2, '0')} s`; };
  const fr = (x, d = 1) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Coupe de la Terre : une bille tombe dans un tunnel passant par le centre, une autre glisse dans un tunnel en biais, une troisième fait le tour en orbite rasante"></canvas>
<div class="anim-ctrl">
  <label>Arrivée du tunnel en biais <input type="range" min="30" max="160" step="1" value="90" data-k="a"><output data-o="a">90°</output></label>
  <label><input type="checkbox" data-k="ombre"> Ombre de la bille en orbite</label>
</div>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lâcher les billes</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <span data-o="t" style="font-variant-numeric:tabular-nums;"></span>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('.anim-scene'), inA = $('[data-k="a"]'), chkO = $('[data-k="ombre"]');
  const btnGo = $('[data-k="go"]'), btnReset = $('[data-k="reset"]'), info = $('.anim-info'), outT = $('[data-o="t"]');
  let t = 0, playing = false, raf = 0, tPrev = 0, dim;

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(w < 520 ? 0.74 * w + 125 : 0.62 * w);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    dim = { w, h }; draw();
  }

  // positions, en unités de rayon terrestre, origine au centre, y vers le haut
  function positions(tt) {
    const c = Math.cos(W * tt), s = Math.sin(W * tt), a = +inA.value * Math.PI / 180;
    const A = { x: 0, y: 1 }, B = { x: Math.sin(a), y: Math.cos(a) }, M = { x: B.x / 2, y: (1 + B.y) / 2 };
    return {
      A, B, M,
      centre: { x: 0, y: c },                                              // x(t) = R cos ωt
      biais: { x: M.x + (A.x - M.x) * c, y: M.y + (A.y - M.y) * c },       // même loi, autour du milieu du tunnel
      orbite: { x: s, y: c },                                              // mouvement circulaire uniforme
      vCentre: Math.abs(s), vBiais: Math.abs(s) * Math.hypot(A.x - M.x, A.y - M.y)
    };
  }

  function draw() {
    const c = cv.getContext('2d'), { w, h } = dim;
    const etroit = w < 520;                       // téléphone : légende sous le globe
    const R = etroit ? w * 0.37 : Math.min(h * 0.4, w * 0.27), O = etroit ? { x: w / 2, y: R + 12 } : { x: w * 0.4, y: h / 2 };
    const X = p => O.x + R * p.x, Y = p => O.y - R * p.y;
    const P = positions(t);
    c.clearRect(0, 0, w, h); c.lineCap = 'round';
    // Terre
    c.fillStyle = COL.terre; c.strokeStyle = COL.bleu; c.lineWidth = 1.5;
    c.beginPath(); c.arc(O.x, O.y, R, 0, 2 * Math.PI); c.fill(); c.stroke();
    c.fillStyle = COL.ard; c.beginPath(); c.arc(O.x, O.y, 2.5, 0, 2 * Math.PI); c.fill();
    // tunnels
    const tunnel = (p, q) => {
      c.strokeStyle = COL.tunnel; c.lineWidth = 9; c.beginPath(); c.moveTo(X(p), Y(p)); c.lineTo(X(q), Y(q)); c.stroke();
    };
    tunnel(P.A, { x: 0, y: -1 }); tunnel(P.A, P.B);
    // orbite rasante, parcourue en pointillés
    c.strokeStyle = COL.sarc; c.lineWidth = 2.5; c.setLineDash([5, 4]);
    c.beginPath(); c.arc(O.x, O.y, R, -Math.PI / 2, -Math.PI / 2 + Math.min(W * t, 2 * Math.PI - 1e-6)); c.stroke(); c.setLineDash([]);
    // ombre : la bille du tunnel central est la projection de la bille en orbite
    if (chkO.checked) {
      c.strokeStyle = COL.clair; c.lineWidth = 1; c.setLineDash([3, 3]);
      c.beginPath(); c.moveTo(X(P.orbite), Y(P.orbite)); c.lineTo(X(P.centre), Y(P.centre)); c.stroke(); c.setLineDash([]);
    }
    // billes
    const bille = (p, col, r) => {
      c.fillStyle = col; c.beginPath(); c.arc(X(p), Y(p), r, 0, 2 * Math.PI); c.fill();
      c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke();
    };
    bille(P.orbite, COL.sarc, 9); bille(P.biais, COL.bleu, 6.5); bille(P.centre, COL.prune, 5.5);   // la plus petite par-dessus
    // légende
    const lg = [[COL.prune, 'tunnel par le centre'], [COL.bleu, 'tunnel en biais'], [COL.sarc, 'orbite rasante']];
    c.font = '12px sans-serif'; c.textAlign = 'left';
    let y = etroit ? O.y + R + 30 : Math.max(22, O.y - R * 0.9), x = etroit ? 16 : Math.min(O.x + R + 26, w - 150);
    const y0 = y, x2 = etroit ? w / 2 + 6 : x;
    lg.forEach(([col, s]) => {
      c.fillStyle = col; c.beginPath(); c.arc(x + 6, y - 4, 6, 0, 2 * Math.PI); c.fill();
      c.fillStyle = COL.texte; c.fillText(s, x + 18, y); y += 20;
    });
    // vitesses
    if (etroit) { x = x2; y = y0; } else y += 8;
    c.fillStyle = COL.ard; c.fillText('vitesses (km/s)', x, y); y += 18;
    const v0 = W * RT / 1000;
    [[COL.prune, P.vCentre * v0], [COL.bleu, P.vBiais * v0], [COL.sarc, v0]].forEach(([col, v]) => {
      const lb = etroit ? 0.45 * (w / 2 - 40) : 70;
      c.fillStyle = col; c.fillRect(x, y - 9, Math.max(1, lb * v / v0), 8);
      c.fillStyle = COL.texte; c.fillText(fr(v), x + lb + 6, y); y += 16;
    });
    // temps et message
    outT.textContent = `t = ${ms(t)}`;
    const demi = T / 2, k = Math.floor((t + 1e-6) / demi);
    if (t === 0) info.textContent = `Une période dure 2π√(R/g) ≈ ${ms(T)} pour chacune des trois billes, quelle que soit l'inclinaison du tunnel en biais.`;
    else if (Math.abs(t - k * demi) < 1e-6 && k >= 1)
      info.textContent = k % 2 ? `Rendez-vous : au bout de ${ms(demi)}, les trois billes arrivent en même temps au bout de leur trajet.` : `Au bout de ${ms(T)}, les trois billes sont revenues ensemble au point de départ.`;
    else info.textContent = 'Les billes sont en route…';
  }

  function loop(now) {
    const dt = Math.min(0.05, (now - tPrev) / 1000); tPrev = now;
    const demi = T / 2, next = (Math.floor(t / demi + 1e-9) + 1) * demi;
    t = Math.min(next, t + RATE * dt);
    draw();
    if (t >= next - 1e-6) { t = next; playing = false; btnGo.textContent = 'Continuer'; draw(); return; }   // pause à chaque arrivée
    if (playing) raf = requestAnimationFrame(loop);
  }
  btnGo.addEventListener('click', () => {
    playing = !playing; btnGo.textContent = playing ? 'Pause' : 'Reprendre';
    if (playing) { tPrev = performance.now(); raf = requestAnimationFrame(loop); } else cancelAnimationFrame(raf);
  });
  btnReset.addEventListener('click', () => { cancelAnimationFrame(raf); playing = false; t = 0; btnGo.textContent = 'Lâcher les billes'; draw(); });
  inA.addEventListener('input', () => { $('[data-o="a"]').textContent = inA.value + '°'; draw(); });
  chkO.addEventListener('change', draw);
  window.addEventListener('resize', fit);
  fit();
})();
