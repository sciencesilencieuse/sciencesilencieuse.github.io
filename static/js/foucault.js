/* Pendule de Foucault : seule la composante verticale Ω sin λ de la rotation
   terrestre fait tourner le sol sous le pendule. Le plan d'oscillation fait donc
   un tour en (jour sidéral) / sin λ.
   Conteneur attendu : <div class="anim" data-anim="foucault"></div>            */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="foucault"]');
  if (!root) return;

  const COL = { bleu: '#004D80', prune: '#970E53', sarc: '#006C65', ard: '#475569', clair: '#94a3b8',
                grille: '#e2e8f0', terre: '#EAF2F8', texte: '#334155' };
  const JOUR = 23 + 56 / 60 + 4 / 3600;        // jour sidéral, en heures
  const RATE = 2.5;                            // heures simulées par seconde
  const PRESETS = [['Pôle Nord', 90], ['Paris', 48.85], ['Équateur', 0], ['Sydney', -33.87]];
  const fr = (x, d = 0) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });
  const hm = h => { const H = Math.floor(h), M = Math.round((h - H) * 60); return M === 60 ? `${H + 1} h 00` : `${H} h ${String(M).padStart(2, '0')}`; };

  root.innerHTML = `
<div class="anim-ctrl">
  <label>Latitude <input type="range" min="-90" max="90" step="0.05" value="48.85" data-k="lat"><output data-o="lat">48,9°</output></label>
  ${PRESETS.map(([n, v]) => `<button type="button" class="sec" data-lat="${v}">${n}</button>`).join('')}
</div>
<div class="anim-duo">
  <figure><canvas class="anim-terre" role="img" aria-label="La Terre en coupe : au lieu du pendule, la rotation terrestre se décompose en une composante verticale Ω sin λ et une composante horizontale Ω cos λ"></canvas><figcaption>La rotation terrestre, décomposée au lieu du pendule</figcaption></figure>
  <figure><canvas class="anim-sol" role="img" aria-label="Le sol vu de dessus : le plan d'oscillation du pendule tourne lentement par rapport aux points cardinaux"></canvas><figcaption>Le sol vu de dessus</figcaption></figure>
</div>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <span data-o="temps" style="font-variant-numeric:tabular-nums;"></span>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cvT = $('.anim-terre'), cvS = $('.anim-sol'), inLat = $('[data-k="lat"]');
  const btnGo = $('[data-k="go"]'), btnReset = $('[data-k="reset"]'), info = $('.anim-info'), outT = $('[data-o="temps"]');
  let lat = +inLat.value, phi = 0, heures = 0, tReal = 0, playing = false, raf = 0, tPrev = 0, dimT, dimS;

  function fit(cv, ratio) {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 360, h = Math.round(w * ratio);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w, h };
  }
  function resize() { dimT = fit(cvT, 1); dimS = fit(cvS, 1); draw(); }
  function arrow(c, x0, y0, x1, y1, col, lw = 2) {
    const a = Math.atan2(y1 - y0, x1 - x0), L = Math.hypot(x1 - x0, y1 - y0); if (L < 2) return;
    const hd = Math.min(9, L * 0.45);
    c.strokeStyle = col; c.fillStyle = col; c.lineWidth = lw;
    c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1 - hd * 0.8 * Math.cos(a), y1 - hd * 0.8 * Math.sin(a)); c.stroke();
    c.beginPath(); c.moveTo(x1, y1);
    c.lineTo(x1 - hd * Math.cos(a - 0.4), y1 - hd * Math.sin(a - 0.4));
    c.lineTo(x1 - hd * Math.cos(a + 0.4), y1 - hd * Math.sin(a + 0.4)); c.closePath(); c.fill();
  }
  function txt(c, s, x, y, col, align = 'center', font = '12px sans-serif') {
    c.font = font; c.fillStyle = col; c.textAlign = align; c.fillText(s, x, y);
  }

  // ---------------------------------------------------------------- la Terre en coupe
  function drawTerre() {
    const c = cvT.getContext('2d'), { w } = dimT, S = w;
    const O = { x: 0.36 * S, y: 0.56 * S }, R = 0.27 * S, L = 0.26 * S, l = lat * Math.PI / 180;
    c.clearRect(0, 0, S, S); c.lineCap = 'round';
    c.fillStyle = COL.terre; c.strokeStyle = COL.bleu; c.lineWidth = 1.5;
    c.beginPath(); c.arc(O.x, O.y, R, 0, 2 * Math.PI); c.fill(); c.stroke();
    c.setLineDash([4, 4]); c.strokeStyle = COL.clair; c.lineWidth = 1;
    c.beginPath(); c.moveTo(O.x - R, O.y); c.lineTo(O.x + R, O.y); c.stroke(); c.setLineDash([]);
    txt(c, 'équateur', O.x - R + 4, O.y - 5, COL.clair, 'left', '11px sans-serif');
    // axe de rotation
    c.strokeStyle = COL.ard; c.lineWidth = 1.4;
    c.beginPath(); c.moveTo(O.x, O.y + R * 1.25); c.lineTo(O.x, O.y - R * 1.05); c.stroke();
    arrow(c, O.x, O.y - R * 1.05, O.x, O.y - R * 1.05 - L * 0.55, COL.ard, 2);
    txt(c, 'Ω', O.x - 9, O.y - R * 1.05 - L * 0.4, COL.ard, 'right', 'italic 15px Georgia, serif');
    // lieu P et latitude
    const r = { x: Math.cos(l), y: -Math.sin(l) }, t = { x: -Math.sin(l), y: -Math.cos(l) };   // écran : y vers le bas
    const P = { x: O.x + R * r.x, y: O.y + R * r.y };
    c.strokeStyle = COL.ard; c.lineWidth = 1;
    c.beginPath(); c.moveTo(O.x, O.y); c.lineTo(P.x, P.y); c.stroke();
    if (Math.abs(lat) > 2) {
      c.strokeStyle = COL.prune; c.beginPath(); c.arc(O.x, O.y, R * 0.28, 0, -l, lat > 0); c.stroke();
      txt(c, 'λ', O.x + R * 0.36 * Math.cos(l / 2), O.y - R * 0.36 * Math.sin(l / 2) + 5, COL.prune, 'center', 'italic 14px Georgia, serif');
    }
    // horizon local
    c.strokeStyle = COL.grille; c.lineWidth = 2;
    c.beginPath(); c.moveTo(P.x - 0.5 * L * t.x, P.y - 0.5 * L * t.y); c.lineTo(P.x + 0.5 * L * t.x, P.y + 0.5 * L * t.y); c.stroke();
    // Ω au lieu P et sa décomposition
    const sv = Math.sin(l), cv = Math.cos(l);
    const V = { x: P.x + L * sv * r.x, y: P.y + L * sv * r.y };   // composante verticale (radiale)
    const Hh = { x: P.x + L * cv * t.x, y: P.y + L * cv * t.y };  // composante horizontale (vers le nord)
    const Om = { x: P.x, y: P.y - L };
    c.setLineDash([3, 3]); c.strokeStyle = COL.clair; c.lineWidth = 1;
    c.beginPath(); c.moveTo(V.x, V.y); c.lineTo(Om.x, Om.y); c.lineTo(Hh.x, Hh.y); c.stroke(); c.setLineDash([]);
    arrow(c, P.x, P.y, Hh.x, Hh.y, COL.clair, 2);
    arrow(c, P.x, P.y, Om.x, Om.y, COL.ard, 2.2);
    arrow(c, P.x, P.y, V.x, V.y, COL.prune, 2.6);
    c.fillStyle = COL.prune; c.beginPath(); c.arc(P.x, P.y, 4, 0, 2 * Math.PI); c.fill();
    const lab = (p, s, col, dx, dy) => txt(c, s, Math.min(Math.max(p.x + dx, 40), S - 40), Math.min(Math.max(p.y + dy, 14), S - 6), col, 'center', 'italic 13px Georgia, serif');
    if (Math.abs(cv) < 0.15) lab(V, 'Ω sin λ ≈ Ω', COL.prune, 0, sv > 0 ? -10 : 20);        // près des pôles
    else if (Math.abs(sv) < 0.15) lab(Hh, 'Ω cos λ ≈ Ω', COL.ard, 0, -10);                     // près de l'équateur
    else {
      lab(Om, 'Ω', COL.ard, 10, -6);
      const sg = Math.sign(sv);
      if (sg > 0) lab(V, 'Ω sin λ', COL.prune, 28 * r.x, 28 * r.y + 4);
      else { const mv = { x: P.x + 0.5 * L * sv * r.x, y: P.y + 0.5 * L * sv * r.y }; lab(mv, 'Ω sin λ', COL.prune, -30 * t.x, -30 * t.y + 4); }
      const mid = { x: P.x + 0.5 * L * cv * t.x, y: P.y + 0.5 * L * cv * t.y };
      lab(mid, 'Ω cos λ', COL.ard, -24 * sg * r.x, -24 * sg * r.y + 4);               // du côté opposé à Ω sin λ
    }
  }

  // ---------------------------------------------------------------- le sol vu de dessus
  function drawSol() {
    const c = cvS.getContext('2d'), { w } = dimS, S = w;
    const C = { x: S / 2, y: S * 0.47 }, Rf = 0.34 * S;
    c.clearRect(0, 0, S, S); c.lineCap = 'round';
    c.fillStyle = '#F8FAFC'; c.strokeStyle = COL.ard; c.lineWidth = 1.5;
    c.beginPath(); c.arc(C.x, C.y, Rf, 0, 2 * Math.PI); c.fill(); c.stroke();
    for (let a = 0; a < 360; a += 15) {
      const q = a * Math.PI / 180, big = a % 90 === 0, i0 = big ? 0.88 : 0.94;
      c.strokeStyle = big ? COL.ard : COL.clair; c.lineWidth = big ? 1.6 : 1;
      c.beginPath(); c.moveTo(C.x + Rf * i0 * Math.sin(q), C.y - Rf * i0 * Math.cos(q)); c.lineTo(C.x + Rf * Math.sin(q), C.y - Rf * Math.cos(q)); c.stroke();
    }
    [['N', 0], ['E', 90], ['S', 180], ['O', 270]].forEach(([s, a]) => {
      const q = a * Math.PI / 180; txt(c, s, C.x + (Rf + 13) * Math.sin(q), C.y - (Rf + 13) * Math.cos(q) + 5, COL.ard, 'center', 'bold 13px sans-serif');
    });
    // direction initiale et angle parcouru
    c.setLineDash([4, 4]); c.strokeStyle = COL.clair; c.lineWidth = 1;
    c.beginPath(); c.moveTo(C.x, C.y - Rf * 0.86); c.lineTo(C.x, C.y + Rf * 0.86); c.stroke(); c.setLineDash([]);
    const tours = Math.floor(Math.abs(phi) / (2 * Math.PI)), reste = phi % (2 * Math.PI);
    if (Math.abs(phi) > 1e-3) {
      c.strokeStyle = COL.prune; c.lineWidth = 2;
      c.beginPath(); c.arc(C.x, C.y, Rf * 0.3, -Math.PI / 2, -Math.PI / 2 + (tours ? 2 * Math.PI * Math.sign(phi) : reste), phi < 0); c.stroke();
    }
    // plan d'oscillation et masse
    const d = { x: Math.sin(phi), y: -Math.cos(phi) };
    c.strokeStyle = COL.bleu; c.lineWidth = 2;
    c.beginPath(); c.moveTo(C.x - Rf * 0.86 * d.x, C.y - Rf * 0.86 * d.y); c.lineTo(C.x + Rf * 0.86 * d.x, C.y + Rf * 0.86 * d.y); c.stroke();
    const sw = Math.sin(2 * Math.PI * tReal / 1.4) * Rf * 0.78;
    c.strokeStyle = COL.clair; c.lineWidth = 1;
    c.beginPath(); c.moveTo(C.x, C.y); c.lineTo(C.x + sw * d.x, C.y + sw * d.y); c.stroke();
    c.fillStyle = COL.prune; c.beginPath(); c.arc(C.x + sw * d.x, C.y + sw * d.y, 7, 0, 2 * Math.PI); c.fill();
    c.fillStyle = COL.ard; c.beginPath(); c.arc(C.x, C.y, 2.5, 0, 2 * Math.PI); c.fill();
    const deg = phi * 180 / Math.PI;
    txt(c, `plan tourné de ${fr(Math.abs(deg))}°`, S / 2, S - 6, COL.prune, 'center', '12px sans-serif');
  }

  function draw() {
    drawTerre(); drawSol();
    const s = Math.sin(lat * Math.PI / 180);
    outT.textContent = `Temps écoulé : ${hm(heures)}`;
    if (Math.abs(s) < 1e-3) info.textContent = `À l'équateur, sin λ = 0 : la rotation terrestre n'a pas de composante verticale, et le plan d'oscillation ne tourne pas du tout.`;
    else {
      const T = JOUR / Math.abs(s);
      info.textContent = `Latitude ${fr(lat, 1)}° : sin λ ≈ ${fr(s, 3)}. Le sol tourne sous le pendule ${Math.abs(s) > 0.999 ? 'à pleine vitesse Ω' : 'à la vitesse Ω sin λ'}, et le plan d'oscillation fait un tour complet en 23 h 56 / ${fr(Math.abs(s), 3)} ≈ ${hm(T)}, ` +
        (s > 0 ? 'dans le sens des aiguilles d\'une montre vu de dessus.' : 'dans le sens inverse des aiguilles d\'une montre vu de dessus (hémisphère sud).');
    }
  }
  function loop(now) {
    const dt = Math.min(0.05, (now - tPrev) / 1000); tPrev = now;
    tReal += dt; const dh = RATE * dt; heures += dh;
    phi += 2 * Math.PI * Math.sin(lat * Math.PI / 180) * dh / JOUR;
    draw();
    if (playing) raf = requestAnimationFrame(loop);
  }
  function setLat(v) { lat = v; inLat.value = v; $('[data-o="lat"]').textContent = fr(v, 1) + '°'; draw(); }
  inLat.addEventListener('input', () => setLat(+inLat.value));
  root.querySelectorAll('[data-lat]').forEach(b => b.addEventListener('click', () => setLat(+b.dataset.lat)));
  btnGo.addEventListener('click', () => {
    playing = !playing; btnGo.textContent = playing ? 'Pause' : 'Reprendre';
    if (playing) { tPrev = performance.now(); raf = requestAnimationFrame(loop); } else cancelAnimationFrame(raf);
  });
  btnReset.addEventListener('click', () => { cancelAnimationFrame(raf); playing = false; phi = 0; heures = 0; tReal = 0; btnGo.textContent = 'Lancer'; draw(); });
  window.addEventListener('resize', resize);
  resize();
})();
