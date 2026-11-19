/* Arbre couvrant minimal sur des points du plan (le poids d'une arête est sa
   longueur). Kruskal examine les arêtes de la plus courte à la plus longue et
   garde celles qui relient deux morceaux différents (une forêt qui fusionne,
   chaque morceau dans sa couleur) ; Prim fait pousser un seul arbre en ajoutant
   toujours l'arête la plus courte qui en sort.
   Conteneur attendu : <div class="anim" data-anim="arbre-couvrant"></div>        */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="arbre-couvrant"]');
  if (!root) return;

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Points du plan reliés peu à peu par les arêtes d'un arbre couvrant minimal"></canvas>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Algorithme <select data-k="a"><option value="kruskal">Kruskal (1956)</option><option value="prim">Prim (1957)</option></select></label>
  <label>Points <select data-k="n"><option>15</option><option selected>30</option><option>80</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="neuf">Nouveaux points</button>
</div>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), selA = $('[data-k="a"]'), selN = $('[data-k="n"]'), btnGo = $('[data-k="go"]');
  const TEINTES = [205, 25, 140, 330, 45, 265, 175, 0, 95, 300, 60, 220, 15, 120, 280, 190];
  let P = [], aretes, arbre, parent, examinees, rejet, prim, cout, timer = 0, dim;

  function points() {
    const n = +selN.value; P = [];
    while (P.length < n) {                                     // points pas trop serrés
      const p = [0.04 + 0.92 * Math.random(), 0.06 + 0.88 * Math.random()];
      if (P.every(q => Math.hypot(q[0] - p[0], (q[1] - p[1]) * 0.6) > 0.35 / Math.sqrt(n))) P.push(p);
    }
    preparer();
  }
  const long = (i, j) => Math.hypot(P[i][0] - P[j][0], (P[i][1] - P[j][1]) * dimRatio());
  function dimRatio() { return dim ? dim.h / dim.w : 0.55; }
  function racine(i) { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; }
  function preparer() {
    clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer';
    const n = P.length;
    aretes = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) aretes.push([long(i, j), i, j]);
    aretes.sort((a, b) => a[0] - b[0]);
    arbre = []; parent = P.map((_, i) => i); examinees = 0; rejet = null; cout = 0;
    prim = { dans: new Set([0]) };
    info.innerHTML = selA.value === 'kruskal'
      ? `${n} points, ${aretes.length} arêtes possibles. Kruskal les examine de la plus courte à la plus longue.`
      : `${n} points. Prim part du point entouré et fait pousser un seul arbre.`;
    dessiner();
  }
  function pas() {
    const n = P.length;
    if (arbre.length === n - 1) return false;
    rejet = null;
    if (selA.value === 'kruskal') {
      const [w, i, j] = aretes[examinees++];
      const ri = racine(i), rj = racine(j);
      if (ri === rj) { rejet = [i, j]; info.innerHTML = `Arête n° ${examinees} : ses deux extrémités sont déjà dans le même morceau. La garder fermerait un cycle : <b>rejetée</b>.`; }
      else { parent[ri] = rj; arbre.push([i, j]); cout += w; info.innerHTML = `Arête n° ${examinees} : elle relie deux morceaux différents, <b>gardée</b>. ${n - arbre.length} morceau${n - arbre.length > 1 ? 'x' : ''} restant${n - arbre.length > 1 ? 's' : ''}.`; }
    } else {
      let best = null;
      for (const i of prim.dans) for (let j = 0; j < n; j++) if (!prim.dans.has(j)) { const w = long(i, j); if (!best || w < best[0]) best = [w, i, j]; }
      examinees += prim.dans.size * (n - prim.dans.size);
      prim.dans.add(best[2]); arbre.push([best[1], best[2]]); cout += best[0];
      info.innerHTML = `L'arête la plus courte qui sort de l'arbre est ajoutée : ${arbre.length} arête${arbre.length > 1 ? 's' : ''} sur ${n - 1}.`;
    }
    if (arbre.length === n - 1) info.innerHTML = `Arbre couvrant minimal terminé : ${n - 1} arêtes, longueur totale ${(cout * 100).toFixed(1).replace('.', ',')} (en centièmes de largeur), après ${examinees} arêtes examinées.`;
    dessiner();
    return arbre.length < n - 1;
  }
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.round(Math.min(w * 0.55, 380));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h };
  }
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h } = dim, X = p => p[0] * w, Y = p => p[1] * h;
    g.clearRect(0, 0, w, h);
    const coul = i => selA.value === 'prim' ? '#004D80' : `hsl(${TEINTES[racine(i) % TEINTES.length]}, 65%, 42%)`;
    if (rejet) {
      g.strokeStyle = '#DC2626'; g.setLineDash([5, 4]); g.lineWidth = 2;
      g.beginPath(); g.moveTo(X(P[rejet[0]]), Y(P[rejet[0]])); g.lineTo(X(P[rejet[1]]), Y(P[rejet[1]])); g.stroke(); g.setLineDash([]);
    }
    g.lineWidth = 3; g.lineCap = 'round';
    for (const [i, j] of arbre) { g.strokeStyle = coul(i); g.beginPath(); g.moveTo(X(P[i]), Y(P[i])); g.lineTo(X(P[j]), Y(P[j])); g.stroke(); }
    P.forEach((p, i) => {
      const seul = selA.value === 'kruskal' ? !arbre.some(([a, b]) => a === i || b === i) : !prim.dans.has(i);
      g.fillStyle = seul ? '#fff' : coul(i); g.strokeStyle = seul ? '#64748b' : coul(i); g.lineWidth = 1.5;
      g.beginPath(); g.arc(X(p), Y(p), P.length > 50 ? 3.5 : 5, 0, 2 * Math.PI); g.fill(); g.stroke();
    });
    if (selA.value === 'prim') { g.strokeStyle = '#B45309'; g.lineWidth = 2; g.beginPath(); g.arc(X(P[0]), Y(P[0]), 10, 0, 2 * Math.PI); g.stroke(); }
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer'; pas(); });
  btnGo.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (arbre.length === P.length - 1) preparer();
    btnGo.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer'; } }, P.length > 50 ? 90 : 260);
  });
  $('[data-k="neuf"]').addEventListener('click', points);
  selA.addEventListener('change', preparer);
  selN.addEventListener('change', points);
  window.addEventListener('resize', () => { fit(); preparer(); });
  fit(); points();
})();
