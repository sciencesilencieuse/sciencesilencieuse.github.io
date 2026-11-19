/* Sudoku résolu par l'algorithme X de Knuth, étape par étape.
   Le Sudoku est traduit en problème de couverture exacte :
     729 options (l, c, n) « mettre n dans la case (l, c) »,
     324 contraintes en quatre familles de 81 : chaque case reçoit un chiffre,
     chaque ligne, chaque colonne et chaque bloc reçoit chaque chiffre.
   L'algorithme choisit toujours la contrainte qui a le moins d'options
   restantes, essaie ses options une à une, retire les options devenues
   incompatibles (elles reviennent au retour en arrière).
   À gauche, la grille et ses candidats (les options encore vivantes) ;
   à droite, les 324 contraintes, colorées selon leur nombre d'options.
   Conteneur attendu : <div class="anim" data-anim="sudoku-x"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="sudoku-x"]');
  if (!root) return;

  const GRILLES = [
    ['Facile', '53..7....6..195....98....6.8...6...34..8.3..17...2...6.6....28....419..5....8..79'],
    ['Moyenne', '..9748...7.........2.1.9.....7...24..64.1.59..98...3.....8.3.2.........6...2759..'],
    ['Difficile (17 indices)', '4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......'],
    ['AI Escargot (2006)', '1....7.9..3..2...8..96..5....53..9...1..8...26....4...3......1..4......7..7...3..'],
    ['Inkala (2012)', '8..........36......7..9.2...5...7.......457.....1...3...1....68..85...1..9....4..']
  ];
  const VITESSES = [1, 2, 4, 8, 15, 30, 60, 120, 250, 600];
  const FAMILLES = ['case', 'ligne × chiffre', 'colonne × chiffre', 'bloc × chiffre'];
  const COUL = { donnee: '#1e293b', force: '#004D80', pari: '#B45309', retire: '#DC2626', rendu: '#16a34a', cand: '#94a3b8', choix: '#FEF3C7', impasse: '#FEE2E2' };

  root.innerHTML = `
<div class="sx-grille">
  <figure class="sx-panneau"><figcaption>La grille et ses candidats <span>(les options encore possibles)</span></figcaption>
    <canvas class="sx-sudoku" role="img" aria-label="Grille de Sudoku : chiffres posés et petits candidats restants"></canvas></figure>
  <figure class="sx-panneau"><figcaption>Les 324 contraintes <span>(couleur : nombre d'options restantes)</span></figcaption>
    <canvas class="sx-matrice" role="img" aria-label="Les 324 contraintes de la couverture exacte, en quatre familles de 81"></canvas>
    <div class="sx-legende"><span><i style="background:#DC2626"></i>0</span><span><i style="background:#F59E0B"></i>1</span><span><i style="background:#60A5FA"></i>2</span><span><i style="background:#BFDBFE"></i>3 et plus</span><span><i class="sx-sat"></i>satisfaite</span></div></figure>
</div>
<p class="sx-message" aria-live="polite"></p>
<p class="sx-paris"></p>
<p class="sx-stats"></p>
<div class="anim-ctrl">
  <label>Grille <select data-k="g">${GRILLES.map(([n], i) => `<option value="${i}">${n}</option>`).join('')}</select></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Vitesse <input type="range" min="0" max="${VITESSES.length - 1}" step="1" value="4" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const cvS = $('.sx-sudoku'), cvM = $('.sx-matrice'), msg = $('.sx-message'), outP = $('.sx-paris'), outS = $('.sx-stats');
  const selG = $('[data-k="g"]'), btnGo = $('[data-k="go"]'), btnPas = $('[data-k="pas"]'), inV = $('[data-k="v"]');

  // ------------------------------------------------------------------ la couverture exacte
  // option r = 81 l + 9 c + (n - 1) ; contraintes : case 0..80, ligne 81..161, colonne 162..242, bloc 243..323
  const Y = [];
  for (let l = 0; l < 9; l++) for (let c = 0; c < 9; c++) for (let n = 1; n <= 9; n++) {
    const b = 3 * Math.floor(l / 3) + Math.floor(c / 3);
    Y.push([9 * l + c, 81 + 9 * l + n - 1, 162 + 9 * c + n - 1, 243 + 9 * b + n - 1]);
  }
  const opt = r => ({ l: Math.floor(r / 81), c: Math.floor(r / 9) % 9, n: r % 9 + 1 });
  let X, couverte, vivante, pose, solution, gen, ev, stats, fini, donnees;

  function choisir(r) {                    // retire les contraintes de r et les options qui les touchent
    const retirees = [];
    for (const j of Y[r]) {
      for (const i of X[j]) {
        if (vivante[i]) { vivante[i] = 0; retirees.push(i); }
        for (const k of Y[i]) if (k !== j) X[k].delete(i);
      }
      couverte[j] = 1;
    }
    return retirees;
  }
  function rendre(r) {                     // le miroir exact de choisir : mêmes boucles, à l'envers
    const rendues = [];
    for (const j of Y[r].slice().reverse()) {
      couverte[j] = 0;
      for (const i of X[j]) {
        for (const k of Y[i]) if (k !== j) X[k].add(i);
        if (!vivante[i]) { vivante[i] = 1; rendues.push(i); }
      }
    }
    return rendues;
  }

  function* chercher() {
    let meilleure = -1, nb = 10;
    for (let j = 0; j < 324; j++) if (!couverte[j] && X[j].size < nb) { nb = X[j].size; meilleure = j; if (nb === 0) break; }
    if (meilleure < 0) { yield { t: 'solution' }; return true; }
    const options = [...X[meilleure]].sort((a, b) => a - b);
    yield { t: 'choix', j: meilleure, options };
    if (nb === 0) { stats.impasses++; yield { t: 'impasse', j: meilleure }; return false; }
    if (nb === 1) stats.forces++; else stats.paris++;
    for (let k = 0; k < options.length; k++) {
      const r = options[k];
      const retirees = choisir(r);
      pose[r] = nb === 1 ? 'force' : 'pari';
      solution.push({ r, j: meilleure, k, n: nb });
      stats.prof = Math.max(stats.prof, solution.length);
      yield { t: 'pose', r, j: meilleure, k, n: nb, retirees };
      if (yield* chercher()) return true;
      solution.pop(); pose[r] = null;
      const rendues = rendre(r);
      stats.retours++;
      yield { t: 'retour', r, rendues };
    }
    return false;
  }

  function charger() {
    const s = GRILLES[+selG.value][1];
    X = Array.from({ length: 324 }, () => new Set());
    Y.forEach((cs, r) => cs.forEach(j => X[j].add(r)));
    couverte = new Uint8Array(324); vivante = new Uint8Array(729).fill(1); pose = new Array(729).fill(null);
    solution = []; stats = { forces: 0, paris: 0, retours: 0, impasses: 0, prof: 0, evenements: 0 }; fini = false;
    donnees = 0;
    for (let k = 0; k < 81; k++) if (/[1-9]/.test(s[k])) {
      const r = 9 * k + (+s[k]) - 1;
      choisir(r); pose[r] = 'donnee'; donnees++;
    }
    gen = chercher();
    ev = { t: 'depart' };
    afficher();
  }

  // ------------------------------------------------------------------ textes
  const nomCase = (l, c) => `(ligne ${l + 1}, colonne ${c + 1})`;
  function decrire(j) {                    // la contrainte j, en français
    const f = Math.floor(j / 81), a = Math.floor((j % 81) / 9), n = j % 9 + 1;
    if (f === 0) return { court: `la case ${nomCase(a, j % 9)}`, vide: `La case ${nomCase(a, j % 9)} n'a plus aucun candidat` };
    const lieu = ['', `la ligne ${a + 1}`, `la colonne ${a + 1}`, `le bloc ${a + 1}`][f];
    return { court: `le chiffre ${n} dans ${lieu}`, vide: `Le chiffre ${n} n'a plus aucune place dans ${lieu}` };
  }
  function message() {
    if (!ev) return '';
    switch (ev.t) {
      case 'depart': return `${donnees} chiffres donnés : leurs options incompatibles sont déjà retirées. Il reste ${324 - 4 * donnees} contraintes à satisfaire.`;
      case 'choix': {
        const d = decrire(ev.j), f = Math.floor(ev.j / 81), k = ev.options.length;
        if (k === 0) return `Contrainte la plus difficile : ${d.court}… qui n'a plus aucune option.`;
        if (k === 1) return f === 0
          ? `Contrainte la plus difficile : ${d.court} n'a plus qu'un candidat. Choix forcé (un « singleton nu »).`
          : `Contrainte la plus difficile : ${d.court} n'a plus qu'une place possible. Choix forcé (un « singleton caché »).`;
        return `Aucune contrainte n'a moins de ${k} options : ${d.court} en a ${k}. Il faut parier.`;
      }
      case 'pose': {
        const o = opt(ev.r);
        return `On pose ${o.n} en ${nomCase(o.l, o.c)}${ev.n > 1 ? ` (essai ${ev.k + 1} sur ${ev.n})` : ''} : ${ev.retirees.length - 1} candidat${ev.retirees.length > 2 ? 's' : ''} incompatible${ev.retirees.length > 2 ? 's' : ''} disparai${ev.retirees.length > 2 ? 'ssent' : 't'}.`;
      }
      case 'impasse': return `Impasse. ${decrire(ev.j).vide} : on revient en arrière.`;
      case 'retour': {
        const o = opt(ev.r);
        return `Retour en arrière : on retire le ${o.n} de ${nomCase(o.l, o.c)}, et ${ev.rendues.length} options reviennent, exactement comme elles étaient.`;
      }
      case 'solution': return `Grille résolue : ${stats.forces} choix forcés, ${stats.paris} paris, ${stats.retours} retours en arrière.`;
    }
    return '';
  }

  // ------------------------------------------------------------------ dessin
  let dS = 0, dM = 0;
  function preparer(cv, ratio) {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 300, h = Math.round(w * ratio);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    return w;
  }
  function fit() { dS = preparer(cvS, 1); dM = preparer(cvM, 1); afficher(); }

  function dessinerSudoku() {
    const g = cvS.getContext('2d'), w = dS, m = 2, s = (w - 2 * m) / 9;
    g.clearRect(0, 0, w, w); g.fillStyle = '#fff'; g.fillRect(0, 0, w, w);
    const retirees = new Set(ev && ev.t === 'pose' ? ev.retirees : []), rendues = new Set(ev && ev.t === 'retour' ? ev.rendues : []);
    const cible = ev && (ev.t === 'choix' || ev.t === 'impasse') ? ev.j : -1, optionsCible = new Set(ev && ev.t === 'choix' ? ev.options : []);
    // zone de la contrainte visée : case, ligne, colonne ou bloc
    if (cible >= 0) {
      const f = Math.floor(cible / 81), a = Math.floor((cible % 81) / 9);
      g.fillStyle = ev.t === 'impasse' ? COUL.impasse : COUL.choix;
      for (let l = 0; l < 9; l++) for (let c = 0; c < 9; c++) {
        const b = 3 * Math.floor(l / 3) + Math.floor(c / 3);
        const dedans = f === 0 ? 9 * l + c === cible % 81 : f === 1 ? l === a : f === 2 ? c === a : b === a;
        if (dedans) g.fillRect(m + c * s, m + l * s, s, s);
      }
    }
    // chiffres posés et candidats
    g.textAlign = 'center'; g.textBaseline = 'middle';
    const gros = `600 ${Math.round(s * 0.62)}px system-ui, sans-serif`, petit = `${Math.max(7, Math.round(s * 0.27))}px system-ui, sans-serif`, petitGras = `700 ${Math.max(7, Math.round(s * 0.29))}px system-ui, sans-serif`;
    for (let l = 0; l < 9; l++) for (let c = 0; c < 9; c++) {
      const x0 = m + c * s, y0 = m + l * s;
      let place = -1;
      for (let n = 0; n < 9; n++) if (pose[81 * l + 9 * c + n]) place = 81 * l + 9 * c + n;
      if (place >= 0) {
        const genre = pose[place];
        if (ev && ev.t === 'pose' && ev.r === place) { g.fillStyle = genre === 'pari' ? '#FDE7C8' : '#DBEAFE'; g.fillRect(x0 + 1, y0 + 1, s - 2, s - 2); }
        g.font = gros; g.fillStyle = COUL[genre];
        g.fillText(place % 9 + 1, x0 + s / 2, y0 + s / 2 + 1);
        continue;
      }
      if (ev && ev.t === 'retour' && Math.floor(ev.r / 9) === 9 * l + c) { g.strokeStyle = COUL.rendu; g.lineWidth = 2; g.strokeRect(x0 + 2, y0 + 2, s - 4, s - 4); }
      for (let n = 0; n < 9; n++) {
        const r = 81 * l + 9 * c + n, xs = x0 + s * (0.2 + 0.3 * (n % 3)), ys = y0 + s * (0.21 + 0.3 * Math.floor(n / 3)) + 1;
        if (vivante[r]) {
          if (optionsCible.has(r)) { g.font = petitGras; g.fillStyle = optionsCible.size === 1 ? '#B45309' : '#004D80'; }
          else if (rendues.has(r)) { g.font = petitGras; g.fillStyle = COUL.rendu; }
          else { g.font = petit; g.fillStyle = COUL.cand; }
          g.fillText(n + 1, xs, ys);
        } else if (retirees.has(r)) {                       // l'option qui vient de disparaître
          g.font = petitGras; g.fillStyle = COUL.retire; g.fillText(n + 1, xs, ys);
          g.strokeStyle = COUL.retire; g.lineWidth = 1; g.beginPath(); g.moveTo(xs - s * 0.1, ys + s * 0.07); g.lineTo(xs + s * 0.1, ys - s * 0.07); g.stroke();
        }
      }
    }
    // quadrillage
    for (let k = 0; k <= 9; k++) {
      g.strokeStyle = k % 3 ? '#cbd5e1' : '#1e293b'; g.lineWidth = k % 3 ? 1 : 2;
      g.beginPath(); g.moveTo(m + k * s, m); g.lineTo(m + k * s, m + 9 * s); g.stroke();
      g.beginPath(); g.moveTo(m, m + k * s); g.lineTo(m + 9 * s, m + k * s); g.stroke();
    }
  }

  function couleurContrainte(j) {
    if (couverte[j]) return null;
    const k = X[j].size;
    return k === 0 ? '#DC2626' : k === 1 ? '#F59E0B' : k === 2 ? '#60A5FA' : '#BFDBFE';
  }
  function dessinerMatrice() {
    const g = cvM.getContext('2d'), w = dM, gap = Math.round(w * 0.06), titre = Math.max(12, Math.round(w * 0.05));
    const cote = (w - gap) / 2, t = (cote - titre - 4) / 9;
    g.clearRect(0, 0, w, w); g.fillStyle = '#fff'; g.fillRect(0, 0, w, w);
    const cible = ev && (ev.t === 'choix' || ev.t === 'impasse') ? ev.j : -1;
    const touchees = new Set(ev && ev.t === 'pose' ? Y[ev.r] : []);
    for (let f = 0; f < 4; f++) {
      const ox = (f % 2) * (cote + gap), oy = Math.floor(f / 2) * (cote + gap);
      g.fillStyle = '#334155'; g.font = `600 ${Math.round(titre * 0.82)}px system-ui, sans-serif`; g.textAlign = 'left'; g.textBaseline = 'top';
      g.fillText(FAMILLES[f], ox, oy);
      const y1 = oy + titre + 4, x1 = ox + (cote - 9 * t) / 2;
      for (let a = 0; a < 9; a++) for (let b = 0; b < 9; b++) {
        const j = 81 * f + 9 * a + b;
        const col = couleurContrainte(j);
        if (col) { g.fillStyle = col; g.fillRect(x1 + b * t + 0.5, y1 + a * t + 0.5, t - 1, t - 1); }
        else { g.fillStyle = '#cbd5e1'; g.beginPath(); g.arc(x1 + (b + 0.5) * t, y1 + (a + 0.5) * t, Math.max(1, t * 0.09), 0, 2 * Math.PI); g.fill(); }
        if (touchees.has(j)) { g.strokeStyle = ev.n > 1 ? '#B45309' : '#004D80'; g.lineWidth = 2; g.strokeRect(x1 + b * t + 1, y1 + a * t + 1, t - 2, t - 2); }
      }
      if (cible >= 81 * f && cible < 81 * f + 81) {
        const a = Math.floor((cible % 81) / 9), b = cible % 9;
        g.strokeStyle = '#0f172a'; g.lineWidth = 2.5; g.strokeRect(x1 + b * t - 1.5, y1 + a * t - 1.5, t + 3, t + 3);
      }
    }
  }

  function afficher() {
    if (!X || !dS) return;
    dessinerSudoku(); dessinerMatrice();
    msg.textContent = message();
    msg.className = 'sx-message' + (ev && ev.t === 'impasse' ? ' sx-rouge' : ev && ev.t === 'solution' ? ' sx-vert' : '');
    const paris = solution.filter(p => p.n > 1);
    outP.innerHTML = paris.length
      ? 'Paris en cours : ' + paris.map(p => { const o = opt(p.r); return `<span class="sx-pari">L${o.l + 1}C${o.c + 1} = ${o.n} <small>${p.k + 1}/${p.n}</small></span>`; }).join(' ')
      : 'Paris en cours : aucun';
    const sat = couverte.reduce((s, v) => s + v, 0);
    outS.innerHTML = `contraintes satisfaites <b>${sat}</b>/324 · profondeur <b>${solution.length}</b> · choix forcés <b>${stats.forces}</b> · paris <b>${stats.paris}</b> · retours en arrière <b>${stats.retours}</b>`;
  }

  // ------------------------------------------------------------------ pilotage
  let enMarche = false, credit = 0, dernier = 0;
  function avancer() {
    if (fini) return false;
    const r = gen.next();
    stats.evenements++;
    if (r.done) { fini = true; return false; }
    ev = r.value;
    if (ev.t === 'solution') fini = true;
    return true;
  }
  function boucle(t) {
    if (!enMarche) return;
    const dt = dernier ? Math.min(0.1, (t - dernier) / 1000) : 1 / 60; dernier = t;
    credit += VITESSES[+inV.value] * dt;
    let k = Math.floor(credit); credit -= k;
    while (k-- > 0 && avancer());
    afficher();
    if (fini) { arreter(); btnGo.textContent = 'Lancer'; btnGo.disabled = true; btnPas.disabled = true; return; }
    requestAnimationFrame(boucle);
  }
  function arreter() { enMarche = false; btnGo.textContent = 'Reprendre'; }
  btnGo.addEventListener('click', () => {
    if (enMarche) { arreter(); return; }
    enMarche = true; dernier = 0; credit = 1; btnGo.textContent = 'Pause'; requestAnimationFrame(boucle);
  });
  btnPas.addEventListener('click', () => { if (enMarche) arreter(); avancer(); afficher(); if (fini) { btnGo.disabled = btnPas.disabled = true; } });
  function remettre() { enMarche = false; btnGo.textContent = 'Lancer'; btnGo.disabled = btnPas.disabled = false; charger(); }
  $('[data-k="reset"]').addEventListener('click', remettre);
  selG.addEventListener('change', remettre);
  window.addEventListener('resize', fit);
  charger(); fit();
})();
