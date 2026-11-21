/* Arbre couvrant minimal sur des points du plan (le poids d'une arête est sa
   longueur).
   - Kruskal examine les arêtes de la plus courte à la plus longue et garde celles
     qui relient deux morceaux différents. Chaque morceau a sa couleur, qu'il garde :
     quand deux morceaux fusionnent, le plus petit prend la couleur du plus grand
     (transition visible) ; deux points isolés qui se relient forment un nouveau
     morceau, d'une couleur nouvelle.
   - Prim fait pousser un seul arbre : en pointillés, pour chaque point extérieur,
     sa liaison la plus courte avec l'arbre ; la plus courte de toutes est ajoutée.
   En bas, le ruban des arêtes examinées, dans l'ordre : leur hauteur est leur
   longueur, gardées en couleur, rejetées en rouge pâle.
   Conteneur attendu : <div class="anim" data-anim="arbre-couvrant"></div>        */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="arbre-couvrant"]');
  if (!root) return;

  root.innerHTML = `
<div class="ac-cadre"><canvas class="ac-scene" role="img" aria-label="Points du plan reliés peu à peu par les arêtes d'un arbre couvrant minimal"></canvas></div>
<div class="ac-compteurs"><span data-o="m"></span><span data-o="g"></span><span data-o="r"></span></div>
<p class="ac-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Algorithme <select data-k="a"><option value="kruskal">Kruskal (1956)</option><option value="prim">Prim (1957)</option></select></label>
  <label>Points <select data-k="n"><option>15</option><option selected>30</option><option>80</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="neuf">Nouveaux points</button>
</div>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.ac-info'), selA = $('[data-k="a"]'), selN = $('[data-k="n"]'), btnGo = $('[data-k="go"]');
  const PAL = [['#2563EB', 'bleu'], ['#EA580C', 'orange'], ['#16A34A', 'vert'], ['#DB2777', 'rose'], ['#7C3AED', 'violet'],
               ['#0891B2', 'turquoise'], ['#CA8A04', 'ocre'], ['#65A30D', 'olive'], ['#92400E', 'brun'], ['#475569', 'ardoise']];
  const GRIS = '#94a3b8', ROUGE = '#DC2626', OR = '#F59E0B';
  const rgb = h => [1, 3, 5].map(k => parseInt(h.slice(k, k + 2), 16));
  let P = [], aretes, arbre, parent, taille, couleur, examinees, journal, rejet, nouvelle, prim, cout, timer = 0, dim, totalK, anim = 0;
  let cAff, cCible;                                            // couleur affichée et couleur visée de chaque point (transitions)

  function points() {
    const n = +selN.value; P = [];
    while (P.length < n) {                                     // points pas trop serrés
      const p = [0.05 + 0.9 * Math.random(), 0.07 + 0.86 * Math.random()];
      if (P.every(q => Math.hypot(q[0] - p[0], (q[1] - p[1]) * 0.6) > 0.35 / Math.sqrt(n))) P.push(p);
    }
    preparer();
  }
  const ratio = () => dim ? dim.hp / dim.w : 0.55;
  const long = (i, j) => Math.hypot(P[i][0] - P[j][0], (P[i][1] - P[j][1]) * ratio());
  function racine(i) { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; }
  function couleurLibre() {                                    // la couleur la moins portée par les morceaux actuels
    const compte = PAL.map(() => 0);
    P.forEach((_, i) => { if (parent[i] === i && couleur[i] >= 0) compte[couleur[i]]++; });
    let best = 0; compte.forEach((c, k) => { if (c < compte[best]) best = k; });
    return best;
  }
  const nom = k => `<b style="color:${PAL[k][0]}">${PAL[k][1]}</b>`;
  const pts = n => `${n} point${n > 1 ? 's' : ''}`;

  function preparer() {
    clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer';
    const n = P.length;
    aretes = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) aretes.push([long(i, j), i, j]);
    aretes.sort((a, b) => a[0] - b[0]);
    // nombre d'arêtes que Kruskal examinera (pour l'échelle du ruban)
    const pp = P.map((_, i) => i), r = i => { while (pp[i] !== i) { pp[i] = pp[pp[i]]; i = pp[i]; } return i; };
    let k = 0, g = 0; while (g < n - 1) { const [, i, j] = aretes[k++]; const a = r(i), b = r(j); if (a !== b) { pp[a] = b; g++; } }
    totalK = k;
    arbre = []; parent = P.map((_, i) => i); taille = P.map(() => 1); couleur = P.map(() => -1);
    examinees = 0; journal = []; rejet = null; nouvelle = null; cout = 0;
    cAff = P.map(() => rgb(GRIS)); cCible = P.map(() => rgb(GRIS));
    prim = { dans: new Set([0]), choix: null };
    if (selA.value === 'prim') { cAff[0] = rgb(PAL[0][0]); cCible[0] = rgb(PAL[0][0]); }
    info.innerHTML = selA.value === 'kruskal'
      ? `${n} points, ${aretes.length} arêtes possibles. Kruskal les examine <b>de la plus courte à la plus longue</b>&nbsp;; chaque morceau de la forêt a sa couleur.`
      : `${n} points. Prim part du point entouré et fait pousser un seul arbre&nbsp;: en pointillés, la liaison la plus courte de chaque point extérieur avec l'arbre.`;
    compteurs(); dessiner();
  }
  function compteurs() {
    const n = P.length, morceaux = selA.value === 'kruskal' ? n - arbre.length : n - prim.dans.size + 1;
    $('[data-o="m"]').innerHTML = selA.value === 'kruskal' ? `<b>${morceaux}</b> morceau${morceaux > 1 ? 'x' : ''}` : `<b>${prim.dans.size}</b> / ${n} points dans l'arbre`;
    $('[data-o="g"]').innerHTML = `<i class="ac-g"></i><b>${arbre.length}</b> / ${n - 1} arêtes gardées`;
    const rej = journal.filter(e => !e.k).length;
    $('[data-o="r"]').innerHTML = selA.value === 'kruskal' ? `<i class="ac-r"></i><b>${rej}</b> rejetée${rej > 1 ? 's' : ''}` : '';
  }

  function pas() {
    const n = P.length;
    if (arbre.length === n - 1) return false;
    rejet = null; nouvelle = null;
    if (selA.value === 'kruskal') {
      const [w, i, j] = aretes[examinees++];
      const ri = racine(i), rj = racine(j);
      if (ri === rj) {
        rejet = [i, j]; journal.push({ w, k: false });
        info.innerHTML = `Arête n°&nbsp;${examinees}&nbsp;: ses deux extrémités sont déjà dans le morceau ${nom(couleur[ri])}. La garder fermerait un cycle&nbsp;: <b class="ac-rej">rejetée</b>.`;
      } else {
        const si = taille[ri], sj = taille[rj];
        let grand = si >= sj ? ri : rj, petit = grand === ri ? rj : ri, txt;
        if (si === 1 && sj === 1) {
          couleur[grand] = couleurLibre();
          txt = `elle relie deux points isolés, qui forment un nouveau morceau ${nom(couleur[grand])}.`;
        } else if (taille[petit] === 1) {
          txt = `elle accroche un point isolé au morceau ${nom(couleur[grand])} (${pts(taille[grand])}).`;
        } else {
          txt = `elle relie le morceau ${nom(couleur[grand])} (${pts(taille[grand])}) et le morceau ${nom(couleur[petit])} (${pts(taille[petit])})&nbsp;: le plus petit <b>prend la couleur</b> du plus grand.`;
        }
        parent[petit] = grand; taille[grand] += taille[petit]; couleur[petit] = -1;
        const c = rgb(PAL[couleur[grand]][0]);
        P.forEach((_, v) => { if (racine(v) === grand) cCible[v] = c; });
        arbre.push([i, j]); cout += w; journal.push({ w, k: true, c: couleur[grand] }); nouvelle = { i, j, t0: performance.now() };
        info.innerHTML = `Arête n°&nbsp;${examinees}&nbsp;: <b class="ac-gar">gardée</b>, ${txt}`;
      }
    } else {
      let best = null;
      for (const i of prim.dans) for (let j = 0; j < n; j++) if (!prim.dans.has(j)) { const w = long(i, j); if (!best || w < best[0]) best = [w, i, j]; }
      examinees += prim.dans.size * (n - prim.dans.size);
      prim.dans.add(best[2]); arbre.push([best[1], best[2]]); cout += best[0]; journal.push({ w: best[0], k: true, c: 0 });
      cCible[best[2]] = rgb(PAL[0][0]); nouvelle = { i: best[1], j: best[2], t0: performance.now() };
      info.innerHTML = `La liaison la plus courte entre l'arbre et l'extérieur est ajoutée&nbsp;: ${arbre.length} arête${arbre.length > 1 ? 's' : ''} sur ${n - 1}.`;
    }
    if (arbre.length === n - 1) info.innerHTML = `Arbre couvrant minimal terminé&nbsp;: ${n - 1} arêtes, longueur totale ${(cout * 100).toFixed(1).replace('.', ',')} (en centièmes de largeur), après ${examinees} arêtes examinées.`;
    compteurs(); animer();
    return arbre.length < n - 1;
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, hp = Math.round(Math.min(Math.max(w * 0.55, 230), 380)), hr = 58;
    cv.style.height = hp + hr + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round((hp + hr) * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, hp, hr };
  }
  // transitions : croissance de la nouvelle arête, glissement des couleurs
  function animer() {
    cancelAnimationFrame(anim);
    const f = () => {
      let encore = false;
      for (let v = 0; v < P.length; v++) for (let k = 0; k < 3; k++) {
        const d = cCible[v][k] - cAff[v][k];
        if (Math.abs(d) > 0.6) { cAff[v][k] += d * 0.14; encore = true; } else cAff[v][k] = cCible[v][k];
      }
      if (nouvelle && performance.now() - nouvelle.t0 < 280) encore = true;
      dessiner();
      if (encore) anim = requestAnimationFrame(f);
    };
    anim = requestAnimationFrame(f);
  }
  const css = c => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, hp, hr } = dim, mx = 8, X = p => mx + p[0] * (w - 2 * mx), Y = p => p[1] * hp;
    const r = P.length > 50 ? 3.6 : 5.5, n = P.length;
    g.clearRect(0, 0, w, hp + hr);
    // Prim : liaisons candidates de chaque point extérieur, et la meilleure
    if (selA.value === 'prim' && arbre.length < n - 1) {
      let best = null;
      g.setLineDash([3, 4]); g.lineWidth = 1; g.strokeStyle = 'rgba(100,116,139,0.45)';
      for (let j = 0; j < n; j++) {
        if (prim.dans.has(j)) continue;
        let b = null; for (const i of prim.dans) { const d = long(i, j); if (!b || d < b[0]) b = [d, i, j]; }
        g.beginPath(); g.moveTo(X(P[b[1]]), Y(P[b[1]])); g.lineTo(X(P[j]), Y(P[j])); g.stroke();
        if (!best || b[0] < best[0]) best = b;
      }
      g.setLineDash([]);
      if (best) { g.strokeStyle = OR; g.lineWidth = 2.5; g.setLineDash([6, 4]); g.beginPath(); g.moveTo(X(P[best[1]]), Y(P[best[1]])); g.lineTo(X(P[best[2]]), Y(P[best[2]])); g.stroke(); g.setLineDash([]); }
    }
    // arête rejetée : pointillés rouges et croix au milieu
    if (rejet) {
      const [a, b] = rejet, xa = X(P[a]), ya = Y(P[a]), xb = X(P[b]), yb = Y(P[b]), xm = (xa + xb) / 2, ym = (ya + yb) / 2;
      g.strokeStyle = ROUGE; g.setLineDash([5, 4]); g.lineWidth = 2; g.beginPath(); g.moveTo(xa, ya); g.lineTo(xb, yb); g.stroke(); g.setLineDash([]);
      g.fillStyle = '#fff'; g.beginPath(); g.arc(xm, ym, 8, 0, 2 * Math.PI); g.fill(); g.strokeStyle = ROUGE; g.lineWidth = 1.5; g.stroke();
      g.beginPath(); g.moveTo(xm - 3.5, ym - 3.5); g.lineTo(xm + 3.5, ym + 3.5); g.moveTo(xm + 3.5, ym - 3.5); g.lineTo(xm - 3.5, ym + 3.5); g.stroke();
    }
    // arêtes de la forêt (ou de l'arbre) ; la dernière pousse, sur un halo doré
    g.lineCap = 'round';
    arbre.forEach(([i, j], k) => {
      let xb = X(P[j]), yb = Y(P[j]);
      const der = nouvelle && k === arbre.length - 1;
      if (der) {
        const u = Math.min(1, (performance.now() - nouvelle.t0) / 280);
        xb = X(P[i]) + (xb - X(P[i])) * u; yb = Y(P[i]) + (yb - Y(P[i])) * u;
        g.strokeStyle = 'rgba(245,158,11,0.35)'; g.lineWidth = 9; g.beginPath(); g.moveTo(X(P[i]), Y(P[i])); g.lineTo(xb, yb); g.stroke();
      }
      g.strokeStyle = css(cAff[i]); g.lineWidth = 3.2; g.beginPath(); g.moveTo(X(P[i]), Y(P[i])); g.lineTo(xb, yb); g.stroke();
    });
    // points : creux et gris tant qu'ils sont isolés, pleins à la couleur de leur morceau ensuite
    P.forEach((p, i) => {
      const seul = selA.value === 'kruskal' ? taille[racine(i)] === 1 : !prim.dans.has(i);
      g.beginPath(); g.arc(X(p), Y(p), r, 0, 2 * Math.PI);
      if (seul) { g.fillStyle = '#fff'; g.fill(); g.strokeStyle = GRIS; g.lineWidth = 1.6; g.stroke(); }
      else { g.fillStyle = css(cAff[i]); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 1.5; g.stroke(); }
    });
    if (selA.value === 'prim') { g.strokeStyle = PAL[0][0]; g.lineWidth = 2; g.beginPath(); g.arc(X(P[0]), Y(P[0]), r + 5, 0, 2 * Math.PI); g.stroke(); }
    // ruban des arêtes examinées
    const y0 = hp + 8, hb = hr - 24, total = selA.value === 'kruskal' ? totalK : n - 1, bw = (w - 2 * mx) / total;
    const wmax = selA.value === 'kruskal' ? aretes[totalK - 1][0] : Math.max(...journal.map(e => e.w), aretes[n - 2][0]);
    g.fillStyle = '#f1f5f9'; g.fillRect(mx, y0, w - 2 * mx, hb);
    journal.forEach((e, k) => {
      const hh = Math.max(1.5, hb * e.w / wmax);
      g.fillStyle = e.k ? PAL[e.c][0] : 'rgba(220,38,38,0.35)';
      g.fillRect(mx + k * bw, y0 + hb - hh, Math.max(1, bw - (bw > 3 ? 1 : 0)), hh);
    });
    g.fillStyle = '#64748b'; g.font = '11px system-ui, sans-serif'; g.textAlign = 'left';
    const court = w < 560;
    g.fillText(selA.value === 'kruskal'
      ? (court ? 'arêtes examinées, triées (hauteur = longueur)' : 'arêtes examinées, de la plus courte à la plus longue (hauteur = longueur)')
      : (court ? 'arêtes ajoutées : pas dans l\'ordre des longueurs' : 'arêtes ajoutées, dans l\'ordre (hauteur = longueur) : elles ne sont pas triées'), mx, y0 + hb + 14);
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer'; if (arbre.length === P.length - 1) preparer(); else pas(); });
  btnGo.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (arbre.length === P.length - 1) preparer();
    btnGo.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer'; } }, P.length > 50 ? 110 : 420);
  });
  $('[data-k="neuf"]').addEventListener('click', points);
  selA.addEventListener('change', preparer);
  selN.addEventListener('change', points);
  let larg = 0;
  window.addEventListener('resize', () => { if (Math.abs(cv.clientWidth - larg) > 8) { larg = cv.clientWidth; fit(); preparer(); } });
  fit(); points();
})();
