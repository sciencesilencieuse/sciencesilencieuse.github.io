/* Quatre algorithmes de recherche de chemin, lancés ensemble sur la même carte
   pondérée (herbe 1, marécage 3, lac 10, murs infranchissables) :
   largeur d'abord (ignore les poids), Dijkstra, A* et meilleur d'abord glouton.
   Cases explorées (découvertes, dans la frontière) et cases validées (sorties
   de la structure) sont affichées séparément.
   Conteneur attendu : <div class="anim" data-anim="carte"></div>               */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="carte"]');
  if (!root) return;

  const TERRAINS = [                                // [nom, coût, couleur]
    ['herbe', 1, '#E3EFD6'], ['marécage', 3, '#A9B57E'], ['lac', 10, '#7DB0D4'], ['mur', Infinity, '#334155']
  ];
  const ALGOS = [
    { cle: 'largeur', nom: 'Largeur d\'abord', col: [91, 108, 176], note: 'file : ignore les pondérations' },
    { cle: 'dijkstra', nom: 'Dijkstra', col: [0, 77, 128], note: 'file de priorité : coût parcouru' },
    { cle: 'astar', nom: 'A*', col: [0, 108, 101], note: 'priorité : coût parcouru + estimation' },
    { cle: 'glouton', nom: 'Meilleur d\'abord glouton', col: [151, 14, 83], note: 'priorité : estimation seule' }
  ];

  root.innerHTML = `
<div class="cr-grille">${ALGOS.map(a => `<figure class="cr-panneau"><figcaption><b style="color:rgb(${a.col})">${a.nom}</b><span>${a.note}</span></figcaption><canvas role="img" aria-label="Carte explorée par l'algorithme ${a.nom}"></canvas><p class="cr-stats" data-s="${a.cle}"></p></figure>`).join('')}</div>
<div class="cr-legende">${TERRAINS.map(([n, c, col]) => `<span><i style="background:${col}"></i>${n}${isFinite(c) ? ' (' + c + ')' : ''}</span>`).join('')}
  <span><i class="cr-explo"></i>explorée</span><span><i class="cr-valid"></i>validée</span></div>
<div class="anim-ctrl">
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <button type="button" class="sec" data-k="neuf">Nouvelle carte</button>
  <label>Vitesse <input type="range" min="1" max="12" step="1" value="4" data-k="v"></label>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const toiles = [...root.querySelectorAll('.cr-panneau canvas')], info = $('.anim-info'), btnGo = $('[data-k="go"]'), inV = $('[data-k="v"]');
  let n, terrain, D, B, runs, timer = 0, taille;

  // ------------------------------------------------------------------ carte : bruit lissé + murs
  function bruit(n, maille) {                        // bruit de valeurs, interpolé
    const m = Math.ceil(n / maille) + 2, g = Array.from({ length: m * m }, Math.random), out = [];
    const lisse = t => t * t * (3 - 2 * t);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const fx = x / maille, fy = y / maille, i = Math.floor(fx), j = Math.floor(fy), u = lisse(fx - i), v = lisse(fy - j);
      const a = g[j * m + i], b = g[j * m + i + 1], c = g[(j + 1) * m + i], d = g[(j + 1) * m + i + 1];
      out.push(a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v);
    }
    return out;
  }
  function carte() {
    n = (root.clientWidth || 640) < 520 ? 28 : 36;
    for (;;) {
      const eau = bruit(n, n / 4), terre = bruit(n, n / 6), rive = bruit(n, n / 7);
      // un grand lac en travers du chemin à vol d'oiseau, bordé de marécages : la ligne droite
      // coûte très cher, et seuls les algorithmes qui lisent les pondérations le contournent
      const cx = (n - 1) / 2, cy = n >> 1, decal = (Math.random() - 0.5) * n * 0.12;
      terrain = eau.map((e, k) => {
        const x = k % n, y = (k - x) / n;
        const dx = (x - cx) / (n * 0.16), dy = (y - cy - decal) / (n * 0.3);
        const lac = dx * dx + dy * dy + (rive[k] - 0.5) * 0.8;
        if (lac < 1) return 2;
        if (lac < 1.5 && terre[k] > 0.35) return 1;
        return e > 0.76 ? 2 : (e > 0.6 || terre[k] > 0.74) ? 1 : 0;
      });
      const nm = Math.round(n / 5);                  // quelques murs droits, hors de l'eau
      for (let k = 0; k < nm; k++) {
        const hor = Math.random() < 0.5, L = 4 + Math.floor(Math.random() * n / 3);
        let x = Math.floor(Math.random() * n), y = Math.floor(Math.random() * n);
        for (let t = 0; t < L; t++) { if (x >= 0 && y >= 0 && x < n && y < n && terrain[y * n + x] !== 2) terrain[y * n + x] = 3; hor ? x++ : y++; }
      }
      D = (n >> 1) * n + 1; B = (n >> 1) * n + n - 2;
      terrain[D] = terrain[B] = 0;
      if (accessible() && terrain.filter(t => t === 2).length > n * n * 0.08) return;
    }
  }
  function voisins(i) {
    const x = i % n, y = (i - x) / n, v = [];
    if (x > 0) v.push(i - 1); if (x < n - 1) v.push(i + 1); if (y > 0) v.push(i - n); if (y < n - 1) v.push(i + n);
    return v.filter(j => terrain[j] !== 3);
  }
  function accessible() {
    const vu = new Set([D]), f = [D];
    while (f.length) { const i = f.pop(); for (const j of voisins(i)) if (!vu.has(j)) { vu.add(j); f.push(j); } }
    return vu.has(B);
  }
  const cout = i => TERRAINS[terrain[i]][1];
  const h = i => Math.abs(i % n - B % n) + Math.abs(Math.floor(i / n) - Math.floor(B / n));   // estimation admissible : coût minimal 1 par case

  // ------------------------------------------------------------------ tas binaire (file de priorité)
  class Tas {
    constructor() { this.t = []; }
    get taille() { return this.t.length; }
    ajouter(cle, val) {
      const t = this.t; t.push([cle, val]); let k = t.length - 1;
      while (k > 0) { const p = (k - 1) >> 1; if (t[p][0] <= cle) break; [t[p], t[k]] = [t[k], t[p]]; k = p; }
    }
    retirer() {
      const t = this.t, haut = t[0], bas = t.pop();
      if (t.length) {
        t[0] = bas; let k = 0;
        for (;;) { const a = 2 * k + 1, b = a + 1; let m = k; if (a < t.length && t[a][0] < t[m][0]) m = a; if (b < t.length && t[b][0] < t[m][0]) m = b; if (m === k) break; [t[m], t[k]] = [t[k], t[m]]; k = m; }
      }
      return haut[1];
    }
  }

  // ------------------------------------------------------------------ une recherche, pas à pas
  function nouvelle(algo) {
    const r = { algo, g: new Map([[D, 0]]), parent: new Map([[D, -1]]), explore: new Set([D]), valide: new Set(), fini: false, chemin: [], cout: 0 };
    const prio = i => algo.cle === 'dijkstra' ? r.g.get(i) : algo.cle === 'astar' ? r.g.get(i) + h(i) - 1e-6 * r.g.get(i) : h(i);
    if (algo.cle === 'largeur') { r.file = [D]; r.tete = 0; }
    else { r.tas = new Tas(); r.tas.ajouter(prio(D), D); }
    r.pas = () => {
      if (r.fini) return;
      let i;
      if (algo.cle === 'largeur') { if (r.tete >= r.file.length) { r.fini = true; return; } i = r.file[r.tete++]; }
      else { do { if (!r.tas.taille) { r.fini = true; return; } i = r.tas.retirer(); } while (r.valide.has(i)); }
      r.valide.add(i);
      if (i === B) { r.fini = true; for (let j = B; j !== -1; j = r.parent.get(j)) r.chemin.push(j); r.cout = r.chemin.slice(0, -1).reduce((s, j) => s + cout(j), 0); return; }
      for (const j of voisins(i)) {
        if (r.valide.has(j)) continue;
        if (algo.cle === 'largeur') { if (!r.explore.has(j)) { r.explore.add(j); r.parent.set(j, i); r.file.push(j); } continue; }
        if (algo.cle === 'glouton') { if (!r.explore.has(j)) { r.explore.add(j); r.parent.set(j, i); r.g.set(j, 0); r.tas.ajouter(prio(j), j); } continue; }
        const ng = r.g.get(i) + cout(j);
        if (!r.g.has(j) || ng < r.g.get(j)) { r.g.set(j, ng); r.parent.set(j, i); r.explore.add(j); r.tas.ajouter(prio(j), j); }
      }
    };
    return r;
  }

  // ------------------------------------------------------------------ dessin
  function fit() {
    const w = toiles[0].clientWidth || 300, dpr = window.devicePixelRatio || 1;
    taille = w; toiles.forEach(cv => { cv.style.height = w + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(w * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); });
    dessiner();
  }
  function dessiner() {
    if (!runs || !taille) return;
    const t = taille / n;
    runs.forEach((r, k) => {
      const c = toiles[k].getContext('2d'), [R, G, Bc] = r.algo.col;
      for (let i = 0; i < n * n; i++) {
        const x = (i % n) * t, y = Math.floor(i / n) * t;
        c.fillStyle = TERRAINS[terrain[i]][2]; c.fillRect(x, y, t + 0.5, t + 0.5);
        if (r.valide.has(i)) { c.fillStyle = `rgba(${R},${G},${Bc},0.42)`; c.fillRect(x, y, t + 0.5, t + 0.5); }
        else if (r.explore.has(i)) { c.fillStyle = 'rgba(255,255,255,0.55)'; c.fillRect(x, y, t + 0.5, t + 0.5); c.strokeStyle = '#B45309'; c.lineWidth = Math.max(0.8, t / 7); c.strokeRect(x + 0.6, y + 0.6, t - 1.2, t - 1.2); }
      }
      if (r.chemin.length) {
        c.strokeStyle = `rgb(${R},${G},${Bc})`; c.lineWidth = Math.max(2, t / 2.6); c.lineJoin = 'round'; c.lineCap = 'round'; c.beginPath();
        r.chemin.forEach((i, m) => { const x = (i % n + 0.5) * t, y = (Math.floor(i / n) + 0.5) * t; m ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
      }
      [[D, '#006C65'], [B, '#970E53']].forEach(([i, col]) => { c.fillStyle = col; c.beginPath(); c.arc((i % n + 0.5) * t, (Math.floor(i / n) + 0.5) * t, Math.max(3, t * 0.55), 0, 2 * Math.PI); c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke(); });
      const s = root.querySelector(`[data-s="${r.algo.cle}"]`);
      s.innerHTML = `validées <b>${r.valide.size}</b> · explorées <b>${r.explore.size}</b>` + (r.chemin.length ? `<br>coût du chemin <b>${r.cout}</b> (${r.chemin.length - 1} cases)` : '<br>&nbsp;');
    });
  }
  function bilan() {
    const opt = Math.min(...runs.map(r => r.cout));
    const txt = runs.map(r => `${r.algo.nom} : coût ${r.cout}${r.cout === opt ? ' (optimal)' : ''}, ${r.valide.size} cases validées`).join(' ; ');
    info.textContent = `Terminé. ${txt}.`;
    runs.forEach(r => { const s = root.querySelector(`[data-s="${r.algo.cle}"]`); s.classList.toggle('cr-optimal', r.cout === opt); });
  }

  // ------------------------------------------------------------------ commandes
  function arreter() { clearInterval(timer); timer = 0; }
  function reinit() {
    arreter(); runs = ALGOS.map(nouvelle); btnGo.textContent = 'Lancer';
    root.querySelectorAll('.cr-stats').forEach(s => s.classList.remove('cr-optimal'));
    info.textContent = 'Les quatre algorithmes partent ensemble de la case verte et cherchent la case rose ; ils valident chacun le même nombre de cases à chaque instant.';
    dessiner();
  }
  btnGo.addEventListener('click', () => {
    if (timer) { arreter(); btnGo.textContent = 'Reprendre'; return; }
    if (runs.every(r => r.fini)) reinit();
    btnGo.textContent = 'Pause';
    timer = setInterval(() => {
      const k = +inV.value;
      for (let m = 0; m < k; m++) runs.forEach(r => r.pas());
      dessiner();
      if (runs.every(r => r.fini)) { arreter(); btnGo.textContent = 'Relancer'; bilan(); }
    }, 40);
  });
  $('[data-k="reset"]').addEventListener('click', reinit);
  $('[data-k="neuf"]').addEventListener('click', () => { carte(); reinit(); });
  window.addEventListener('resize', fit);
  carte(); reinit(); fit();
})();
