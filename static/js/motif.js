/* Chercher un mot dans un texte : méthode de Horspool, comparée à la méthode naïve.
   Horspool compare la fenêtre de droite à gauche. Dès qu'elle échoue (ou réussit),
   une étape « décision » montre le saut : on regarde la DERNIÈRE lettre de la
   fenêtre ; la table, calculée d'avance sur le mot, dit de combien décaler pour
   amener sous elle la même lettre du mot (son occurrence la plus à droite, hors
   dernière case), ou de toute la longueur du mot si cette lettre n'y figure pas.
   Le mot fantôme montre la position d'arrivée, et la flèche la longueur du saut.
   La méthode naïve, en dessous, fait une comparaison à chaque étape et avance
   d'un cran à chaque échec.
   Conteneur attendu : <div class="anim" data-anim="motif"></div>               */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="motif"]');
  if (!root) return;

  const EXEMPLES = [
    { nom: 'Une phrase', texte: 'le chat de la voisine chasse les mouches pendant que le chien du voisin regarde le chat chasser les mouches', motif: 'chien' },
    { nom: 'De l\'ADN', texte: 'ACGTTGCATGCTAGCTAGGCTAACGTAGCTAGCATCGATCGTACGATCGTAGCTAGCTACGATCGGATTACAGCTAGCTAGCATCGAT', motif: 'GATTACA' },
    { nom: 'Le pire cas du naïf', texte: 'a'.repeat(60) + 'b', motif: 'aaaab' },
    { nom: 'Le pire cas de Horspool', texte: 'a'.repeat(60), motif: 'baaaa' }
  ];
  const BLEU = '#004D80', OCRE = '#B45309', OR = '#F59E0B', VERT = '#16a34a', ROUGE = '#DC2626';

  root.innerHTML = `
<figure class="mo-piste"><figcaption><b style="color:${BLEU}">Méthode de Horspool</b> <span>: comparaison de droite à gauche, puis un saut</span></figcaption>
  <canvas data-c="hors" role="img" aria-label="Le texte, la fenêtre et le mot ; le saut de Horspool est figuré par un mot fantôme et une flèche"></canvas>
  <p class="mo-expl" aria-live="polite"></p>
  <div class="mo-sauts"></div>
  <p class="rd-compte" data-o="hors"></p></figure>
<figure class="mo-piste"><figcaption><b style="color:${OCRE}">Méthode naïve</b> <span>: de gauche à droite, puis un cran</span></figcaption>
  <canvas data-c="naif" role="img" aria-label="Le mot glisse d'une position à la fois sous le texte"></canvas><p class="rd-compte" data-o="naif"></p></figure>
<div class="anim-ctrl">
  <label>Exemple <select data-k="ex">${EXEMPLES.map((e, i) => `<option value="${i}">${e.nom}</option>`).join('')}</select></label>
  <label>Mot <input type="text" data-k="mot" size="9" spellcheck="false" autocomplete="off"></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <label>Vitesse <input type="range" min="1" max="12" step="1" value="3" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const cvN = $('[data-c="naif"]'), cvH = $('[data-c="hors"]'), outN = $('[data-o="naif"]'), outH = $('[data-o="hors"]');
  const expl = $('.mo-expl'), tabS = $('.mo-sauts');
  const selEx = $('[data-k="ex"]'), inMot = $('[data-k="mot"]'), btnGo = $('[data-k="go"]'), btnPas = $('[data-k="pas"]'), inV = $('[data-k="v"]');
  let texte, mot, n, m, saut, A, B, timer = 0, anim = 0, cw = 22, cols = 30;
  const vis = c => c === ' ' ? '␣' : c;
  const q = c => `«&nbsp;<code>${vis(c)}</code>&nbsp;»`;

  function preparer() {
    texte = EXEMPLES[+selEx.value].texte; mot = inMot.value || 'a'; n = texte.length; m = mot.length;
    saut = {};                                       // table de Horspool
    for (let j = 0; j < m - 1; j++) saut[mot[j]] = m - 1 - j;
    A = { p: 0, j: 0, comp: 0, essais: m <= n ? 1 : 0, trouves: [], dernier: null, fini: m > n, vx: 0, off: 0 };
    B = { p: 0, j: m - 1, comp: 0, essais: m <= n ? 1 : 0, trouves: [], dernier: null, fini: m > n, phase: 'compare', vx: 0, off: 0 };
    expl.innerHTML = m > n ? 'Le mot est plus long que le texte.' :
      `Le mot est placé sous le début du texte. On compare de <b>droite à gauche</b>&nbsp;: d'abord sa dernière lettre, ${q(mot[m - 1])}.`;
    table(); arreter(); fit();
  }
  // table des sauts, en cases : chaque lettre du mot (hors la dernière) et son saut
  function table(active) {
    const lettres = Object.keys(saut).sort((a, b) => saut[b] - saut[a] || a.localeCompare(b));
    tabS.innerHTML = `<span class="mo-sauts-t">Table des sauts pour «&nbsp;${mot}&nbsp;»&nbsp;:</span>` +
      lettres.map(c => `<span class="mo-s${active === c ? ' mo-s-on' : ''}"><b>${vis(c)}</b><i>${saut[c]}</i></span>`).join('') +
      `<span class="mo-s mo-s-autre${active === '' ? ' mo-s-on' : ''}"><b>autre</b><i>${m}</i></span>`;
  }
  const decal = c => saut[c] !== undefined ? saut[c] : m;

  function pasNaif() {
    if (A.fini) return;
    const ok = texte[A.p + A.j] === mot[A.j];
    A.comp++; A.dernier = { i: A.p + A.j, ok };
    if (ok && A.j === m - 1) { A.trouves.push(A.p); A.p++; A.j = 0; A.nouveau = true; }
    else if (ok) { A.j++; A.nouveau = false; }
    else { A.p++; A.j = 0; A.nouveau = true; }
    if (A.p > n - m) A.fini = true; else if (A.nouveau) A.essais++;
  }
  function decider(trouve) {
    const c = texte[B.p + m - 1], k = decal(c);
    B.phase = 'decision'; B.k = k; B.c = c;
    let t = trouve ? `<b class="mo-ok">Trouvé</b> en position ${B.p}. Pour continuer, ` : `${q(texte[B.p + B.j])} ≠ ${q(mot[B.j])}&nbsp;: <b class="mo-ko">échec</b>. Pour décaler, `;
    t += `Horspool regarde la <b>dernière lettre de la fenêtre</b>, ${q(c)} (entourée). `;
    t += saut[c] !== undefined
      ? `Dans le mot, hors sa dernière case, le ${q(c)} le plus à droite est à <b>${k} case${k > 1 ? 's' : ''}</b> de la fin&nbsp;: on décale de ${k} pour l'amener sous le ${q(c)} du texte (fantôme).`
      : `Elle n'apparaît pas dans le mot (hors sa dernière case)&nbsp;: toute position qui la recouvre échouerait. On saute donc de <b>toute la longueur du mot, ${m}</b>.`;
    expl.innerHTML = t; table(saut[c] !== undefined ? c : '');
  }
  function pasHorspool() {
    if (B.fini) return;
    if (B.phase === 'decision') {                      // le saut lui-même
      B.p += B.k; B.j = m - 1; B.phase = 'compare'; B.dernier = null;
      if (B.p > n - m) { B.fini = true; expl.innerHTML = `Le mot dépasserait la fin du texte&nbsp;: <b>recherche terminée</b>.`; table(); return; }
      B.essais++;
      expl.innerHTML = `Le mot a avancé de <b>${B.k}</b> case${B.k > 1 ? 's' : ''}. Nouvelle fenêtre&nbsp;: on compare de nouveau en partant de la droite.`;
      table(); return;
    }
    const ok = texte[B.p + B.j] === mot[B.j];
    B.comp++; B.dernier = { i: B.p + B.j, ok };
    if (ok && B.j === 0) { B.trouves.push(B.p); decider(true); }
    else if (ok) { expl.innerHTML = `${q(texte[B.p + B.j])} = ${q(mot[B.j])}&nbsp;: on continue vers la gauche.`; B.j--; }
    else decider(false);
  }
  function pas() {
    const avantDecision = B.phase === 'decision';
    pasHorspool();
    if (!avantDecision) pasNaif();                   // une comparaison de chaque côté par étape
    animer(); compteurs();
    if (A.fini && B.fini) { arreter(); btnGo.textContent = 'Relancer'; }
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cvH.clientWidth || 600;
    cw = w < 480 ? 20 : 24; cols = Math.floor(w / cw);
    const hH = 150, hN = 62;
    [[cvH, hH], [cvN, hN]].forEach(([cv, h]) => { cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); });
    if (A) { A.vx = A.p; B.vx = B.p; A.off = cible(A); B.off = cible(B, true); }
    dessinerTout(); compteurs();
  }
  // décalage de la vue : la fenêtre (et, pendant une décision, sa position d'arrivée) reste visible
  function cible(E, hors) {
    const fin = E.p + m + (hors && E.phase === 'decision' ? E.k : 0);
    let o = Math.min(E.p - 2, n - cols); o = Math.max(o, fin + 1 - cols); return Math.max(0, Math.min(o, Math.max(0, n - cols)));
  }
  function animer() {
    cancelAnimationFrame(anim);
    const f = () => {
      let encore = false;
      [[A, false], [B, true]].forEach(([E, h]) => {
        const tx = E.fini ? E.vx : E.p, to = cible(E, h);
        E.vx += (tx - E.vx) * 0.22; E.off += (to - E.off) * 0.22;
        if (Math.abs(tx - E.vx) > 0.01 || Math.abs(to - E.off) > 0.01) encore = true; else { E.vx = tx; E.off = to; }
      });
      dessinerTout();
      if (encore) anim = requestAnimationFrame(f);
    };
    anim = requestAnimationFrame(f);
  }
  function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); }
  function dessiner(cv, E, coul, horsp) {
    const g = cv.getContext('2d'), w = cv.clientWidth, h = parseFloat(cv.style.height);
    g.clearRect(0, 0, w, h);
    const yT = horsp ? 36 : 8, yM = yT + 30, yG = yM + 34, X = i => (i - E.off) * cw;
    const trouve = new Set(); E.trouves.forEach(p => { for (let j = 0; j < m; j++) trouve.add(p + j); });
    g.textAlign = 'center'; g.textBaseline = 'middle';
    // texte
    for (let i = Math.max(0, Math.floor(E.off) - 1); i < Math.min(n, E.off + cols + 1); i++) {
      const x = X(i), dans = !E.fini && i >= E.p && i < E.p + m, lu = i < E.p && !trouve.has(i);
      g.fillStyle = trouve.has(i) ? '#BBF7D0' : dans ? coul + '1f' : '#f8fafc';
      rr(g, x + 1, yT, cw - 2, 24, 4); g.fill();
      if (E.dernier && E.dernier.i === i && !E.fini && !(horsp && E.phase === 'decision' && !E.dernier.ok && false)) {
        g.fillStyle = E.dernier.ok ? VERT : ROUGE; rr(g, x + 1, yT, cw - 2, 24, 4); g.fill();
      }
      g.fillStyle = E.dernier && E.dernier.i === i && !E.fini ? '#fff' : lu ? '#94a3b8' : '#1e293b';
      g.font = `${cw < 22 ? 13 : 15}px ui-monospace, Menlo, monospace`;
      g.fillText(vis(texte[i]), x + cw / 2, yT + 12.5);
    }
    if (horsp) {                                       // numéros de case, discrets, tout en bas
      g.fillStyle = '#94a3b8'; g.font = '9px system-ui, sans-serif';
      for (let i = Math.ceil(E.off); i < Math.min(n, E.off + cols); i++) if (i % 5 === 0) g.fillText(i, X(i) + cw / 2, h - 6);
    }
    // mot sous la fenêtre (glisse vers sa position)
    if (!E.fini || E.trouves.length) {
      for (let j = 0; j < m; j++) {
        const x = (E.vx + j - E.off) * cw;
        const comparee = !E.fini && E.dernier && E.dernier.i === E.p + j && Math.abs(E.vx - E.p) < 0.05;
        g.fillStyle = comparee ? (E.dernier.ok ? VERT : ROUGE) : coul;
        rr(g, x + 1, yM, cw - 2, 24, 4); g.fill();
        g.fillStyle = '#fff'; g.font = `600 ${cw < 22 ? 13 : 15}px ui-monospace, Menlo, monospace`;
        g.fillText(vis(mot[j]), x + cw / 2, yM + 12.5);
      }
    }
    if (!horsp || E.fini) return;
    // flèche de lecture : la case comparée ensuite (de droite à gauche)
    if (E.phase === 'compare') {
      const x = X(E.p + E.j) + cw / 2;
      g.fillStyle = coul; g.beginPath(); g.moveTo(x, yM + 32); g.lineTo(x - 5, yM + 39); g.lineTo(x + 5, yM + 39); g.fill();
    }
    if (E.phase === 'decision') {
      const c = E.p + m - 1, xc = X(c);
      // dernière lettre de la fenêtre, entourée
      g.strokeStyle = OR; g.lineWidth = 3; rr(g, xc - 1, yT - 3, cw + 2, 30, 6); g.stroke();
      // mot fantôme à la position d'arrivée, sur sa propre ligne, et la lettre qui s'aligne
      const p2 = E.p + E.k, aligneur = saut[E.c] !== undefined;
      g.strokeStyle = OR; g.lineWidth = 1.5; g.setLineDash([3, 3]);
      g.beginPath(); g.moveTo(xc + cw / 2, yT + 27); g.lineTo(xc + cw / 2, yG - 1); g.stroke(); g.setLineDash([]);
      for (let j = 0; j < m; j++) {
        const x = X(p2 + j);
        const aligne = p2 + j === c && aligneur;
        g.setLineDash(aligne ? [] : [3, 3]); g.strokeStyle = aligne ? OR : coul + '99'; g.lineWidth = aligne ? 2.5 : 1.2;
        rr(g, x + 2, yG + 1, cw - 4, 22, 4); g.stroke(); g.setLineDash([]);
        if (aligne) { g.fillStyle = OR + '33'; rr(g, x + 2, yG + 1, cw - 4, 22, 4); g.fill(); }
        g.fillStyle = aligne ? '#92400E' : coul + 'aa'; g.font = `600 ${cw < 22 ? 13 : 15}px ui-monospace, Menlo, monospace`;
        g.fillText(vis(mot[j]), x + cw / 2, yG + 12.5);
      }
      if (!aligneur) {                                 // lettre absente du mot : le fantôme commence juste après
        g.fillStyle = '#92400E'; g.font = '600 10px system-ui, sans-serif'; g.textAlign = 'left';
        g.fillText('absente du mot', xc + cw / 2 + 5, yG - 6); g.textAlign = 'center';
      }
      // flèche du saut, au-dessus du texte
      const xa = X(E.p) + cw / 2, xb = X(p2) + cw / 2, yA = yT - 6;
      g.strokeStyle = OR; g.lineWidth = 2;
      g.beginPath(); g.moveTo(xa, yA + 2); g.bezierCurveTo(xa, yA - 22, xb, yA - 22, xb, yA + 2); g.stroke();
      g.fillStyle = OR; g.beginPath(); g.moveTo(xb, yA + 4); g.lineTo(xb - 4.5, yA - 4); g.lineTo(xb + 4.5, yA - 4); g.fill();
      const lab = `+${E.k}`;
      g.font = '700 12px system-ui, sans-serif'; const lw = g.measureText(lab).width + 10;
      g.fillStyle = '#fff'; rr(g, (xa + xb) / 2 - lw / 2, yA - 27, lw, 16, 8); g.fill(); g.strokeStyle = OR; g.lineWidth = 1.2; g.stroke();
      g.fillStyle = '#92400E'; g.fillText(lab, (xa + xb) / 2, yA - 18.5);
    }
  }
  function dessinerTout() { if (A) { dessiner(cvH, B, BLEU, true); dessiner(cvN, A, OCRE, false); } }
  function compteurs() {
    if (!A) return;
    const txt = E => `<b>${E.comp}</b> comparaisons · <b>${E.essais}</b> positions essayées` +
      (E.trouves.length ? ` · trouvé en position ${E.trouves.join(', ')}` : '') + (E.fini ? (E.trouves.length ? '' : ' · absent') + ' · terminé' : '');
    outN.innerHTML = txt(A); outH.innerHTML = txt(B);
  }
  function arreter() { clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer'; }
  btnGo.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (A.fini && B.fini) preparer();
    btnGo.textContent = 'Pause'; timer = setInterval(pas, 1000 / +inV.value);
  });
  btnPas.addEventListener('click', () => { if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Reprendre'; } if (A.fini && B.fini) preparer(); else pas(); });
  inV.addEventListener('input', () => { if (timer) { clearInterval(timer); timer = setInterval(pas, 1000 / +inV.value); } });
  selEx.addEventListener('change', () => { inMot.value = EXEMPLES[+selEx.value].motif; preparer(); });
  inMot.addEventListener('change', preparer);
  let larg = 0; window.addEventListener('resize', () => { if (Math.abs(cvH.clientWidth - larg) > 8) { larg = cvH.clientWidth; fit(); } });
  inMot.value = EXEMPLES[0].motif; preparer();
})();
