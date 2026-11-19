/* Un même parcours de grille, trois structures de données pour la frontière :
   pile (profondeur d'abord), file (largeur d'abord), file de priorité (A*,
   priorité = distance parcourue + distance à vol d'oiseau restante).
   Conteneur attendu : <div class="anim" data-anim="labyrinthe"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="labyrinthe"]');
  if (!root) return;

  const C = 29, L = 15;                          // colonnes, lignes
  const COL = { mur: '#334155', vide: '#F8FAFC', vu: [0, 77, 128], front: '#B45309', chemin: '#970E53', depart: '#006C65', but: '#970E53', texte: '#334155' };
  const MODES = {
    pile: ['Pile', 'dernier arrivé, premier servi : on s\'enfonce tant qu\'on peut, et le chemin trouvé n\'a aucune raison d\'être le plus court'],
    file: ['File', 'premier arrivé, premier servi : on explore par cercles de distance croissante, et le chemin trouvé est le plus court'],
    prio: ['File de priorité (A*)', 'on sert d\'abord la case qui promet le trajet total le plus court : l\'exploration file droit vers l\'arrivée, et le chemin reste le plus court']
  };

  root.innerHTML = `
<div class="anim-ctrl">
  ${Object.entries(MODES).map(([k, [nom]]) => `<button type="button" class="sec" data-m="${k}">${nom}</button>`).join('')}
</div>
<canvas class="anim-scene" role="img" aria-label="Une grille avec des murs : l'exploration part de la case verte et cherche la case rose ; les cases explorées se colorent dans l'ordre de leur visite"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="go">Explorer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <button type="button" class="sec" data-k="neuf">Nouveau terrain</button>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), btnGo = $('[data-k="go"]');
  const D = { x: 1, y: Math.floor(L / 2) }, B = { x: C - 2, y: Math.floor(L / 2) };
  let mur, mode = 'file', etat, timer = 0, dim;
  const id = (x, y) => y * C + x, voisins = i => {
    const x = i % C, y = (i - x) / C, v = [];
    [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([dx, dy]) => { const X = x + dx, Y = y + dy; if (X >= 0 && Y >= 0 && X < C && Y < L && !mur[id(X, Y)]) v.push(id(X, Y)); });
    return v;
  };

  function terrain() {                            // obstacles aléatoires, jusqu'à ce qu'un chemin existe
    for (;;) {
      mur = Array.from({ length: C * L }, () => Math.random() < 0.3);
      for (let x = 0; x < C; x++) { mur[id(x, 0)] = mur[id(x, L - 1)] = true; }
      for (let y = 0; y < L; y++) { mur[id(0, y)] = mur[id(C - 1, y)] = true; }
      mur[id(D.x, D.y)] = mur[id(B.x, B.y)] = false;
      const vu = new Set([id(D.x, D.y)]), f = [id(D.x, D.y)];
      while (f.length) { const i = f.shift(); for (const j of voisins(i)) if (!vu.has(j)) { vu.add(j); f.push(j); } }
      if (vu.has(id(B.x, B.y))) return;
    }
  }
  const h = i => Math.abs(i % C - B.x) + Math.abs(Math.floor(i / C) - B.y);
  function reinit() {
    arreter();
    const d = id(D.x, D.y);
    etat = { frontiere: [d], ordre: new Map(), parent: new Map([[d, -1]]), g: new Map([[d, 0]]), fini: false, chemin: [] };
    btnGo.textContent = 'Explorer';
    info.innerHTML = `<b>${MODES[mode][0]}</b> : ${MODES[mode][1]}.`;
    draw();
  }

  function pas() {                                // un sommet retiré de la frontière par pas
    const e = etat;
    if (e.fini || !e.frontiere.length) return;
    let i;
    if (mode === 'pile') i = e.frontiere.pop();
    else if (mode === 'file') i = e.frontiere.shift();
    else {                                        // file de priorité (tableau trié à la main : la grille est petite)
      let best = 0;
      e.frontiere.forEach((j, k) => { const f = e.g.get(j) + h(j), fb = e.g.get(e.frontiere[best]) + h(e.frontiere[best]); if (f < fb || (f === fb && h(j) < h(e.frontiere[best]))) best = k; });
      i = e.frontiere.splice(best, 1)[0];
    }
    if (e.ordre.has(i)) return pas();
    e.ordre.set(i, e.ordre.size);
    if (i === id(B.x, B.y)) { e.fini = true; for (let j = i; j !== -1; j = e.parent.get(j)) e.chemin.push(j); arreter(); fin(); return; }
    for (const j of voisins(i)) {
      if (mode === 'prio') {
        const ng = e.g.get(i) + 1;
        if (!e.ordre.has(j) && (!e.g.has(j) || ng < e.g.get(j))) { e.g.set(j, ng); e.parent.set(j, i); e.frontiere.push(j); }
      } else if (!e.parent.has(j)) { e.parent.set(j, i); e.frontiere.push(j); }
    }
  }
  function fin() {
    const e = etat, libres = mur.filter(m => !m).length;
    info.innerHTML = `<b>${MODES[mode][0]}</b> : arrivée atteinte après avoir exploré <b>${e.ordre.size}</b> cases sur ${libres}, par un chemin de <b>${e.chemin.length - 1}</b> pas. Essayez les deux autres structures sur le même terrain.`;
    draw();
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 640, t = Math.floor(w / C), hh = t * L;
    cv.style.height = hh + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(hh * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, t }; draw();
  }
  function draw() {
    if (!dim || !etat) return;
    const c = cv.getContext('2d'), { w, t } = dim, ox = Math.floor((w - t * C) / 2), e = etat, n = Math.max(1, e.ordre.size);
    c.clearRect(0, 0, w, t * L);
    const front = new Set(e.frontiere), chemin = new Set(e.chemin);
    for (let i = 0; i < C * L; i++) {
      const x = ox + (i % C) * t, y = Math.floor(i / C) * t;
      if (mur[i]) c.fillStyle = COL.mur;
      else if (e.ordre.has(i)) { const k = e.ordre.get(i) / n, [r, g, b] = COL.vu; c.fillStyle = `rgba(${r},${g},${b},${0.18 + 0.5 * (1 - k)})`; }
      else c.fillStyle = COL.vide;
      c.fillRect(x, y, t, t);
      if (!mur[i] && front.has(i) && !e.ordre.has(i)) { c.strokeStyle = COL.front; c.lineWidth = Math.max(1, t / 8); c.strokeRect(x + 1.5, y + 1.5, t - 3, t - 3); }
    }
    if (e.chemin.length) {                        // le chemin trouvé
      c.strokeStyle = COL.chemin; c.lineWidth = Math.max(2, t / 4); c.lineJoin = 'round'; c.lineCap = 'round';
      c.beginPath(); e.chemin.forEach((i, k) => { const x = ox + (i % C) * t + t / 2, y = Math.floor(i / C) * t + t / 2; k ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
    }
    const pastille = (p, col) => { c.fillStyle = col; c.beginPath(); c.arc(ox + p.x * t + t / 2, p.y * t + t / 2, t * 0.38, 0, 2 * Math.PI); c.fill(); };
    pastille(D, COL.depart); pastille(B, COL.but);
    root.querySelectorAll('[data-m]').forEach(b => b.classList.toggle('sec', b.dataset.m !== mode));
  }

  function arreter() { clearInterval(timer); timer = 0; btnGo.textContent = etat && etat.fini ? 'Explorer' : (etat && etat.ordre.size ? 'Reprendre' : 'Explorer'); }
  btnGo.addEventListener('click', () => {
    if (timer) { arreter(); return; }
    if (etat.fini) reinit();
    btnGo.textContent = 'Pause';
    timer = setInterval(() => { pas(); pas(); draw(); if (etat.fini) arreter(); }, 30);
  });
  $('[data-k="reset"]').addEventListener('click', reinit);
  $('[data-k="neuf"]').addEventListener('click', () => { terrain(); reinit(); });
  root.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => { mode = b.dataset.m; reinit(); }));
  window.addEventListener('resize', fit);
  terrain(); reinit(); fit();
})();
