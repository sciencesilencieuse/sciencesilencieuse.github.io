/* Un même parcours de labyrinthe, trois structures de données pour la frontière :
   pile (profondeur d'abord), file (largeur d'abord), file de priorité (A*,
   priorité = distance parcourue + distance à vol d'oiseau restante).
   Le labyrinthe est un arbre couvrant minimal de la grille des cellules
   (Kruskal sur des poids aléatoires), où l'on perce ensuite quelques murs pour
   créer des boucles : sans boucle, il n'y aurait qu'un seul chemin possible.
   Conteneur attendu : <div class="anim" data-anim="labyrinthe"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="labyrinthe"]');
  if (!root) return;

  let C, L;                                      // colonnes et lignes de la grille (murs compris)
  const COL = { mur: '#334155', vide: '#F8FAFC', vu: [0, 77, 128], front: '#B45309', chemin: '#970E53', depart: '#006C65', but: '#970E53', texte: '#334155' };
  const MODES = {
    pile: ['Pile', 'dernier arrivé, premier servi : on s\'enfonce tant qu\'on peut, et le chemin trouvé n\'a aucune raison d\'être le plus court'],
    file: ['File', 'premier arrivé, premier servi : on explore par cercles de distance croissante, et le chemin trouvé est le plus court'],
    prio: ['File de priorité (A*)', 'on sert d\'abord la case qui promet le trajet total le plus court : l\'exploration s\'oriente vers l\'arrivée, et le chemin reste le plus court']
  };

  root.innerHTML = `
<div class="anim-ctrl">
  ${Object.entries(MODES).map(([k, [nom]]) => `<button type="button" class="sec" data-m="${k}">${nom}</button>`).join('')}
</div>
<canvas class="anim-scene" role="img" aria-label="Un labyrinthe aux couloirs étroits : l'exploration part de la case verte et cherche la case rose ; les cases explorées se colorent dans l'ordre de leur visite"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="go">Explorer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <button type="button" class="sec" data-k="neuf">Nouveau labyrinthe</button>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), btnGo = $('[data-k="go"]');
  let D, B;
  let mur, mode = 'file', etat, timer = 0, dim;
  const id = (x, y) => y * C + x;
  const voisins = i => {
    const x = i % C, y = (i - x) / C, v = [];
    [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([dx, dy]) => { const X = x + dx, Y = y + dy; if (X >= 0 && Y >= 0 && X < C && Y < L && !mur[id(X, Y)]) v.push(id(X, Y)); });
    return v;
  };

  function terrain() {
    const nx = (root.clientWidth || 640) < 520 ? 21 : 37, ny = (root.clientWidth || 640) < 520 ? 13 : 17;   // cellules
    C = 2 * nx + 1; L = 2 * ny + 1;
    const ym = 2 * Math.floor(ny / 2) + 1;
    D = { x: 1, y: ym }; B = { x: C - 2, y: ym };
    mur = new Array(C * L).fill(true);
    const cell = (i, j) => id(2 * i + 1, 2 * j + 1);
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) mur[cell(i, j)] = false;
    // Kruskal : les arêtes entre cellules voisines, de poids aléatoire, dans l'ordre croissant
    const aretes = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      if (i + 1 < nx) aretes.push([Math.random(), i, j, i + 1, j]);
      if (j + 1 < ny) aretes.push([Math.random(), i, j, i, j + 1]);
    }
    aretes.sort((p, q) => p[0] - q[0]);
    const parent = Array.from({ length: nx * ny }, (_, k) => k);
    const racine = k => { while (parent[k] !== k) { parent[k] = parent[parent[k]]; k = parent[k]; } return k; };
    const restants = [];
    for (const [, i, j, i2, j2] of aretes) {
      const a = racine(j * nx + i), b = racine(j2 * nx + i2), m = id(i + i2 + 1, j + j2 + 1);   // le mur entre les deux cellules
      if (a !== b) { parent[a] = b; mur[m] = false; }          // pas de cycle : on ouvre le passage
      else restants.push(m);
    }
    for (const m of restants) if (Math.random() < 0.07) mur[m] = false;   // quelques boucles
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
    const k = Math.max(2, Math.round(mur.filter(m => !m).length / 220));   // vitesse proportionnée à la taille
    timer = setInterval(() => { for (let n = 0; n < k && !etat.fini; n++) pas(); draw(); if (etat.fini) arreter(); }, 30);
  });
  $('[data-k="reset"]').addEventListener('click', reinit);
  $('[data-k="neuf"]').addEventListener('click', () => { terrain(); reinit(); });
  root.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => { mode = b.dataset.m; reinit(); }));
  window.addEventListener('resize', fit);
  terrain(); reinit(); fit();
})();
