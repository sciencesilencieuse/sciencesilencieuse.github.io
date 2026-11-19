/* L-systèmes : une chaîne de consignes réécrite récursivement, puis lue par une
   tortue. A : avancer ; + et - : tourner ; [ : mémoriser position et cap ;
   ] : revenir à la dernière position mémorisée (une pile).
   Conteneur attendu : <div class="anim" data-anim="lsysteme"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="lsysteme"]');
  if (!root) return;

  const PI = Math.PI;
  const MODELES = [
    { nom: 'Flocon de Koch', axiome: 'A--A--A', regles: { A: 'A+A--A+A' }, angle: PI / 3, max: 5, defaut: 3, cap: 0 },
    { nom: 'Courbe de Hilbert', axiome: 'L', regles: { L: '-RA+LAL+AR-', R: '+LA-RAR-AL+' }, angle: PI / 2, max: 7, defaut: 4, cap: 0 },
    { nom: 'Triangle de Sierpiński', axiome: 'YA', regles: { X: 'YA+XA+Y', Y: 'XA-YA-X' }, angle: PI / 3, max: 8, defaut: 5, cap: 0 },
    { nom: 'Courbe du dragon', axiome: 'AX', regles: { X: 'X+YA+', Y: '-AX-Y' }, angle: PI / 2, max: 15, defaut: 10, cap: 0 },
    { nom: 'Plante', axiome: 'P', regles: { A: 'AA', P: 'A[+PA-[P]--P][---P]' }, angle: PI * 0.11, max: 7, defaut: 5, cap: PI / 2 }
  ];

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Figure tracée par une tortue qui suit une chaîne de consignes obtenue par réécritures successives"></canvas>
<p class="ls-regle"></p>
<p class="ls-chaine"></p>
<div class="anim-ctrl">
  <label>Figure <select data-k="m">${MODELES.map((m, i) => `<option value="${i}">${m.nom}</option>`).join('')}</select></label>
  <label>Niveau <input type="range" min="0" max="5" step="1" value="3" data-k="niv"><output></output></label>
  <button type="button" data-k="trace">Tracer pas à pas</button>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), outR = $('.ls-regle'), outC = $('.ls-chaine');
  const selM = $('[data-k="m"]'), inN = $('[data-k="niv"]'), outN = $('output'), btnT = $('[data-k="trace"]');
  let segments = [], memMax = 0, dim, anim = 0;

  function reecrire(chaine, regles, niveau) {             // la version récursive de la page
    if (niveau === 0) return chaine;
    let s = '';
    for (const c of chaine) s += regles[c] !== undefined ? regles[c] : c;
    return reecrire(s, regles, niveau - 1);
  }
  function tortue(consigne, angle, cap) {
    let x = 0, y = 0, d = cap, mem = [], m = 0;
    const seg = [];
    for (const c of consigne) {
      if (c === 'A') { const nx = x + Math.cos(d), ny = y + Math.sin(d); seg.push([x, y, nx, ny, mem.length]); x = nx; y = ny; }
      else if (c === '+') d -= angle;
      else if (c === '-') d += angle;
      else if (c === '[') { mem.push([x, y, d]); m = Math.max(m, mem.length); }
      else if (c === ']') [x, y, d] = mem.pop();
    }
    return { seg, m };
  }

  function calculer() {
    const M = MODELES[+selM.value], niv = +inN.value;
    const consigne = reecrire(M.axiome, M.regles, niv);
    const t = tortue(consigne, M.angle, M.cap);
    segments = t.seg; memMax = t.m;
    outN.textContent = niv;
    const regles = Object.entries(M.regles).map(([a, b]) => `<code>${a}</code> → <code>${b}</code>`).join(', ');
    outR.innerHTML = `Axiome <code>${M.axiome}</code> · règle${Object.keys(M.regles).length > 1 ? 's' : ''} ${regles} · angle ${Math.round(M.angle * 180 / PI * 10) / 10}°`;
    const debut = consigne.length > 90 ? consigne.slice(0, 90) + '…' : consigne;
    outC.innerHTML = `Niveau ${niv} : <b>${consigne.length.toLocaleString('fr-FR')}</b> caractères, <b>${segments.length.toLocaleString('fr-FR')}</b> segments` +
      (memMax ? `, mémoire de la tortue jusqu'à <b>${memMax}</b> positions empilées` : '') + `<br><code class="ls-code">${debut}</code>`;
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(Math.min(w * 0.75, 520));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h };
  }
  function dessiner(n) {                                    // n segments tracés
    const g = cv.getContext('2d'), { w, h } = dim;
    g.clearRect(0, 0, w, h);
    if (!segments.length) return;
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const [a, b, c, d] of segments) { x0 = Math.min(x0, a, c); x1 = Math.max(x1, a, c); y0 = Math.min(y0, b, d); y1 = Math.max(y1, b, d); }
    const m = 16, s = Math.min((w - 2 * m) / Math.max(1e-9, x1 - x0), (h - 2 * m) / Math.max(1e-9, y1 - y0));
    const ox = (w - s * (x1 + x0)) / 2, oy = (h + s * (y1 + y0)) / 2;
    const N = segments.length, plante = memMax > 0;
    g.lineCap = 'round';
    g.lineWidth = Math.max(0.6, Math.min(2.2, s * 0.35));
    const paquets = 60;                                     // dégradé le long du tracé, par paquets
    for (let p = 0; p < paquets; p++) {
      const a = Math.floor(p * N / paquets), b = Math.min(n, Math.floor((p + 1) * N / paquets));
      if (a >= b) break;
      const t = p / (paquets - 1);
      g.strokeStyle = plante ? `hsl(${120 - 70 * t}, 45%, ${30 + 12 * t}%)` : `hsl(${205 - 175 * t}, 70%, ${32 + 10 * t}%)`;
      g.beginPath();
      for (let i = a; i < b; i++) { const [xa, ya, xb, yb] = segments[i]; g.moveTo(ox + s * xa, oy - s * ya); g.lineTo(ox + s * xb, oy - s * yb); }
      g.stroke();
    }
    if (n < N && n > 0) {                                   // la tortue
      const [, , xb, yb] = segments[n - 1];
      g.fillStyle = '#B45309'; g.beginPath(); g.arc(ox + s * xb, oy - s * yb, 4.5, 0, 2 * PI); g.fill();
    }
  }
  function tracer() {
    cancelAnimationFrame(anim);
    const N = segments.length, duree = Math.min(6000, 1200 + N * 2);
    let t0 = 0;
    const f = t => { if (!t0) t0 = t; const n = Math.min(N, Math.ceil(N * (t - t0) / duree)); dessiner(n); if (n < N) anim = requestAnimationFrame(f); };
    anim = requestAnimationFrame(f);
  }
  function majNiveau() {
    const M = MODELES[+selM.value];
    inN.max = M.max;
    if (+inN.value > M.max) inN.value = M.max;
  }
  selM.addEventListener('change', () => { const M = MODELES[+selM.value]; inN.max = M.max; inN.value = M.defaut; calculer(); cancelAnimationFrame(anim); dessiner(segments.length); });
  inN.addEventListener('input', () => { calculer(); cancelAnimationFrame(anim); dessiner(segments.length); });
  btnT.addEventListener('click', tracer);
  window.addEventListener('resize', () => { fit(); dessiner(segments.length); });
  majNiveau(); inN.max = MODELES[0].max; inN.value = MODELES[0].defaut;
  fit(); calculer(); dessiner(segments.length);
})();
