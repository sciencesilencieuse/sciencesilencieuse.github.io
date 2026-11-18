/* Recherche du doublon par l'algorithme du lièvre et de la tortue (Floyd).
   Le tableau t (n+1 cases, valeurs entre 1 et n) est lu comme une fonction
   i -> t[i] : en partant de la case 0, on suit un chemin qui finit par boucler.
   Le chemin a la forme d'un ρ, et l'entrée de la boucle est le doublon.
   Conteneur attendu : <div class="anim" data-anim="floyd"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="floyd"]');
  if (!root) return;

  const COL = { tortue: '#006C65', lievre: '#970E53', bleu: '#004D80', ard: '#475569', clair: '#cbd5e1',
                fond: '#F1F5F9', texte: '#334155', or: '#B45309' };
  const N = 11;                                   // valeurs de 1 à N, tableau de N+1 cases

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Le tableau, puis le chemin 0, t[0], t[t[0]]… dessiné comme un graphe en forme de lettre grecque rhô ; la tortue avance d'un pas, le lièvre de deux"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Pas suivant</button>
  <button type="button" class="sec" data-k="auto">Lecture</button>
  <button type="button" class="sec" data-k="neuf">Nouveau tableau</button>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), btnPas = $('[data-k="pas"]'), btnAuto = $('[data-k="auto"]'), btnNeuf = $('[data-k="neuf"]');
  let t, chemin, mu, lambda, st, dim, timer = 0;

  // ---------------------------------------------------------------- tableau aléatoire au ρ bien visible
  function tirage() {
    for (;;) {
      const p = Array.from({ length: N }, (_, i) => i + 1);
      for (let i = p.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
      const d = 1 + Math.floor(Math.random() * N);
      const tab = [...p]; tab.splice(Math.floor(Math.random() * (N + 1)), 0, d);
      const vus = new Map(), ch = []; let i = 0;
      while (!vus.has(i)) { vus.set(i, ch.length); ch.push(i); i = tab[i]; }
      const m = vus.get(i), l = ch.length - m;
      if (m >= 3 && m <= 6 && l >= 4 && l <= 8) return { tab, ch, m, l };
    }
  }
  function nouveau() {
    const r = tirage(); t = r.tab; chemin = r.ch; mu = r.m; lambda = r.l;
    st = { phase: 1, tortue: 0, lievre: 0, pas: 0, fini: false, trace: [] };
    message(); draw();
  }

  // ---------------------------------------------------------------- un pas de l'algorithme
  function pas() {
    if (st.fini) return;
    if (st.phase === 1) {
      st.tortue = t[st.tortue]; st.lievre = t[t[st.lievre]]; st.pas++;
      if (st.tortue === st.lievre) { st.phase = 1.5; st.rencontre = st.tortue; }
    } else if (st.phase === 1.5) {
      st.phase = 2; st.tortue = 0; st.pas2 = 0;
    } else {
      st.tortue = t[st.tortue]; st.lievre = t[st.lievre]; st.pas2++;
      if (st.tortue === st.lievre) { st.fini = true; arreter(); }
    }
    message(); draw();
  }
  function message() {
    if (st.phase === 1 && st.pas === 0)
      info.innerHTML = `Phase 1 : la <b style="color:${COL.tortue}">tortue</b> avance d'un pas (i → t[i]), le <b style="color:${COL.lievre}">lièvre</b> de deux. Tous deux partent de la case 0.`;
    else if (st.phase === 1)
      info.innerHTML = `Phase 1, pas ${st.pas} : tortue en ${st.tortue}, lièvre en ${st.lievre}. Une fois dans la boucle, le lièvre rattrape la tortue d'une case à chaque pas.`;
    else if (st.phase === 1.5)
      info.innerHTML = `Rencontre en ${st.rencontre}, dans la boucle, après ${st.pas} pas. Phase 2 : on renvoie la tortue au départ, et chacun avance désormais d'un seul pas.`;
    else if (!st.fini)
      info.innerHTML = `Phase 2, pas ${st.pas2} : tortue en ${st.tortue}, lièvre en ${st.lievre}. Ils se retrouveront exactement à l'entrée de la boucle.`;
    else
      info.innerHTML = `Ils se retrouvent en <b>${st.tortue}</b> : c'est l'entrée de la boucle, donc une valeur que deux cases du tableau désignent. Le doublon est <b>${st.tortue}</b>, trouvé sans modifier le tableau ni mémoriser autre chose que deux indices.`;
  }

  // ---------------------------------------------------------------- dessin
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 640, h = Math.round(Math.max(330, Math.min(440, w * 0.62)));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; draw();
  }
  function fleche(c, x0, y0, x1, y1, col, r0, r1, courbe = 0) {
    const a = Math.atan2(y1 - y0, x1 - x0), L = Math.hypot(x1 - x0, y1 - y0);
    const sx = x0 + r0 * Math.cos(a), sy = y0 + r0 * Math.sin(a), ex = x1 - r1 * Math.cos(a), ey = y1 - r1 * Math.sin(a);
    const mx = (sx + ex) / 2 - courbe * Math.sin(a) * L, my = (sy + ey) / 2 + courbe * Math.cos(a) * L;
    c.strokeStyle = col; c.fillStyle = col; c.lineWidth = 1.6;
    c.beginPath(); c.moveTo(sx, sy); c.quadraticCurveTo(mx, my, ex, ey); c.stroke();
    const b = Math.atan2(ey - my, ex - mx);
    c.beginPath(); c.moveTo(ex, ey); c.lineTo(ex - 8 * Math.cos(b - 0.4), ey - 8 * Math.sin(b - 0.4)); c.lineTo(ex - 8 * Math.cos(b + 0.4), ey - 8 * Math.sin(b + 0.4)); c.closePath(); c.fill();
  }
  function draw() {
    if (!dim) return;
    const c = cv.getContext('2d'), { w, h } = dim;
    c.clearRect(0, 0, w, h); c.lineCap = 'round';
    // --- le tableau
    const cw = Math.min(46, (w - 24) / (N + 1)), x0 = (w - cw * (N + 1)) / 2, y0 = 30;
    c.font = '11px sans-serif'; c.textAlign = 'center'; c.fillStyle = COL.ard;
    if (x0 > 44) c.fillText('indice', x0 - 22, y0 - 4);   // seulement s'il y a la place
    for (let i = 0; i <= N; i++) {
      const x = x0 + i * cw, surChemin = chemin.includes(i), entree = st.fini && i === st.tortue;
      c.fillStyle = entree ? '#FEF3C7' : surChemin ? '#EEF3F7' : '#fff';
      c.strokeStyle = '#cbd5e1'; c.lineWidth = 1;
      c.fillRect(x, y0, cw, cw * 0.8); c.strokeRect(x, y0, cw, cw * 0.8);
      c.fillStyle = COL.ard; c.font = '10px sans-serif'; c.fillText(i, x + cw / 2, y0 - 5);
      c.fillStyle = COL.texte; c.font = `${Math.round(cw * 0.36)}px sans-serif`; c.fillText(t[i], x + cw / 2, y0 + cw * 0.52);
      if (st.fini && t[i] === st.tortue) { c.strokeStyle = COL.or; c.lineWidth = 2.5; c.strokeRect(x + 1.5, y0 + 1.5, cw - 3, cw * 0.8 - 3); }
    }
    const marque = (i, col, dy) => { const x = x0 + i * cw + cw / 2; c.fillStyle = col; c.beginPath(); c.moveTo(x, y0 + cw * 0.8 + dy); c.lineTo(x - 6, y0 + cw * 0.8 + dy + 9); c.lineTo(x + 6, y0 + cw * 0.8 + dy + 9); c.closePath(); c.fill(); };
    marque(st.tortue, COL.tortue, 4); marque(st.lievre, COL.lievre, 15);
    // --- le ρ : la queue sur une ligne, la boucle sur un cercle
    const top = y0 + cw * 0.8 + 38, bas = h - 14, R = Math.min((bas - top) / 2 - 16, w * (w < 520 ? 0.15 : 0.17)), cy = (top + bas) / 2;
    const pasQ = Math.min(62, (w - 2 * R - 70) / Math.max(1, mu));
    const cx = w / 2 + mu * pasQ / 2;                    // le ρ entier (queue + boucle) centré
    const pos = new Map();
    const entreeIdx = chemin[mu];
    for (let k = 0; k < lambda; k++) {                  // cycle, entrée à gauche, sens horaire
      const a = Math.PI + 2 * Math.PI * k / lambda;
      pos.set(chemin[mu + k], { x: cx + R * Math.cos(a), y: cy - R * Math.sin(a) });
    }
    const E = pos.get(entreeIdx);
    for (let k = 0; k < mu; k++) pos.set(chemin[k], { x: E.x - (mu - k) * pasQ, y: cy });
    const rn = Math.max(8, Math.min(14, pasQ * 0.45, R * Math.sin(Math.PI / lambda) * 0.8));   // nœuds jamais jointifs
    for (let k = 0; k < chemin.length; k++) {           // arêtes i -> t[i]
      const i = chemin[k], j = t[i], p = pos.get(i), q = pos.get(j);
      fleche(c, p.x, p.y, q.x, q.y, COL.clair, rn, rn, k >= mu ? 0.12 : 0);
    }
    for (const [i, p] of pos) {
      const e = i === entreeIdx, fin = st.fini && e;
      c.fillStyle = fin ? '#FEF3C7' : '#fff'; c.strokeStyle = e ? COL.or : COL.bleu; c.lineWidth = e ? 2.4 : 1.6;
      c.beginPath(); c.arc(p.x, p.y, rn, 0, 2 * Math.PI); c.fill(); c.stroke();
      c.fillStyle = COL.texte; c.font = `${Math.round(rn * 0.9)}px sans-serif`; c.textAlign = 'center'; c.fillText(i, p.x, p.y + rn * 0.32);
    }
    // tortue et lièvre sur le graphe
    const pion = (i, col, dx) => { const p = pos.get(i); if (!p) return; c.fillStyle = col; c.beginPath(); c.arc(p.x + dx, p.y - rn - 8, 6.5, 0, 2 * Math.PI); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke(); };
    pion(st.tortue, COL.tortue, -7); pion(st.lievre, COL.lievre, 7);
    // légende
    c.textAlign = 'left'; c.font = '12px sans-serif';
    [[COL.tortue, 'tortue (1 pas)'], [COL.lievre, 'lièvre (2 pas)'], [COL.or, 'entrée de la boucle']].forEach(([col, s], i) => {
      const y = top + 4 + i * 18; c.fillStyle = col; c.beginPath(); c.arc(16, y - 4, 5.5, 0, 2 * Math.PI); c.fill();
      c.fillStyle = COL.texte; c.fillText(s, 27, y);
    });
    c.fillStyle = COL.ard; c.font = '11px sans-serif'; c.textAlign = 'left';
    c.fillText(`queue : ${mu} cases, boucle : ${lambda} cases`, 10, h - 8);
  }

  function arreter() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Lecture'; }
  btnPas.addEventListener('click', () => { arreter(); pas(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { arreter(); return; }
    if (st.fini) nouveau();
    btnAuto.textContent = 'Pause'; timer = setInterval(pas, 900);
  });
  btnNeuf.addEventListener('click', () => { arreter(); nouveau(); });
  window.addEventListener('resize', fit);
  nouveau(); fit();
})();
