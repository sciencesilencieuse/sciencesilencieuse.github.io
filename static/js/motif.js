/* Chercher un mot dans un texte : méthode naïve contre méthode de Horspool.
   Les deux font une comparaison de caractères à chaque pas.
   Naïf : fenêtre testée de gauche à droite, puis décalage d'un cran.
   Horspool : fenêtre testée de droite à gauche, puis décalage donné par le
   dernier caractère de la fenêtre (table calculée d'avance sur le mot).
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

  root.innerHTML = `
<figure class="mo-piste"><figcaption><b style="color:#B45309">Méthode naïve</b> <span>: la fenêtre avance d'un cran</span></figcaption>
  <canvas data-c="naif" role="img" aria-label="Le mot glisse d'une position à la fois sous le texte"></canvas><p class="rd-compte" data-o="naif"></p></figure>
<figure class="mo-piste"><figcaption><b style="color:#004D80">Méthode de Horspool</b> <span>: comparaison de droite à gauche, et grands sauts</span></figcaption>
  <canvas data-c="hors" role="img" aria-label="Le mot saute de plusieurs positions à la fois sous le texte"></canvas><p class="rd-compte" data-o="hors"></p></figure>
<p class="mo-table"></p>
<div class="anim-ctrl">
  <label>Exemple <select data-k="ex">${EXEMPLES.map((e, i) => `<option value="${i}">${e.nom}</option>`).join('')}</select></label>
  <label>Mot <input type="text" data-k="mot" size="9" spellcheck="false" autocomplete="off"></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="pas">Une étape</button>
  <label>Vitesse <input type="range" min="1" max="40" step="1" value="8" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const cvN = $('[data-c="naif"]'), cvH = $('[data-c="hors"]'), outN = $('[data-o="naif"]'), outH = $('[data-o="hors"]'), outT = $('.mo-table');
  const selEx = $('[data-k="ex"]'), inMot = $('[data-k="mot"]'), btnGo = $('[data-k="go"]'), btnPas = $('[data-k="pas"]'), inV = $('[data-k="v"]');
  let texte, mot, n, m, saut, A, B, timer = 0, cols = 30;

  function preparer() {
    texte = EXEMPLES[+selEx.value].texte; mot = inMot.value || 'a'; n = texte.length; m = mot.length;
    saut = {};                                       // table de Horspool
    for (let j = 0; j < m - 1; j++) saut[mot[j]] = m - 1 - j;
    const lettres = Object.keys(saut).sort((a, b) => saut[a] - saut[b] || a.localeCompare(b));
    outT.innerHTML = `Table des sauts de Horspool pour «&nbsp;${mot}&nbsp;»&nbsp;: ` +
      lettres.map(c => `<code>${c === ' ' ? '␣' : c}</code>&nbsp;→&nbsp;${saut[c]}`).join(', ') + (lettres.length ? ', ' : '') + `toute autre lettre&nbsp;→&nbsp;${m}`;
    A = { p: 0, j: 0, comp: 0, essais: m <= n ? 1 : 0, trouves: [], dernier: null, fini: m > n };
    B = { p: 0, j: m - 1, comp: 0, essais: m <= n ? 1 : 0, trouves: [], dernier: null, fini: m > n };
    arreter(); fit();
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
  function pasHorspool() {
    if (B.fini) return;
    const ok = texte[B.p + B.j] === mot[B.j];
    B.comp++; B.dernier = { i: B.p + B.j, ok };
    if (ok && B.j === 0) { B.trouves.push(B.p); B.p += decal(texte[B.p + m - 1]); B.j = m - 1; B.nouveau = true; }
    else if (ok) { B.j--; B.nouveau = false; }
    else { B.p += decal(texte[B.p + m - 1]); B.j = m - 1; B.nouveau = true; }
    if (B.p > n - m) B.fini = true; else if (B.nouveau) B.essais++;
  }
  function pas() {
    pasNaif(); pasHorspool(); afficher();
    if (A.fini && B.fini) { arreter(); btnGo.textContent = 'Relancer'; }
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cvN.clientWidth || 600;
    cols = Math.max(12, Math.floor(w / 17));
    const lignes = Math.ceil(n / cols), h = lignes * 34 + 4;
    [cvN, cvH].forEach(cv => { cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); });
    afficher();
  }
  function dessiner(cv, E, coul) {
    const g = cv.getContext('2d'), w = cv.clientWidth, h = parseFloat(cv.style.height), cw = w / cols;
    g.clearRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `${Math.min(15, cw * 0.8)}px ui-monospace, Menlo, monospace`;
    const fenetre = new Set(); if (!E.fini) for (let j = 0; j < m; j++) fenetre.add(E.p + j);
    const trouve = new Set(); E.trouves.forEach(p => { for (let j = 0; j < m; j++) trouve.add(p + j); });
    for (let i = 0; i < n; i++) {
      const x0 = (i % cols) * cw, y0 = Math.floor(i / cols) * 34 + 2;
      if (trouve.has(i)) { g.fillStyle = '#BBF7D0'; g.fillRect(x0, y0, cw, 20); }
      if (fenetre.has(i)) { g.fillStyle = coul + '33'; g.fillRect(x0, y0, cw, 30); }
      if (E.dernier && E.dernier.i === i && !E.fini) { g.fillStyle = E.dernier.ok ? '#16a34a' : '#DC2626'; g.fillRect(x0 + 1, y0 + 1, cw - 2, 18); }
      g.fillStyle = E.dernier && E.dernier.i === i && !E.fini ? '#fff' : i < (E.fini ? n : E.p) && !trouve.has(i) && !fenetre.has(i) ? '#94a3b8' : '#1e293b';
      g.fillText(texte[i] === ' ' ? '·' : texte[i], x0 + cw / 2, y0 + 10.5);
      if (fenetre.has(i)) {                         // le mot, sous le texte
        const j = i - E.p;
        g.fillStyle = coul; g.font = `600 ${Math.min(12, cw * 0.7)}px ui-monospace, Menlo, monospace`;
        g.fillText(mot[j] === ' ' ? '·' : mot[j], x0 + cw / 2, y0 + 25);
        g.font = `${Math.min(15, cw * 0.8)}px ui-monospace, Menlo, monospace`;
      }
    }
  }
  function afficher() {
    if (!A) return;
    dessiner(cvN, A, '#B45309'); dessiner(cvH, B, '#004D80');
    const txt = E => `<b>${E.comp}</b> comparaisons de caractères · <b>${E.essais}</b> positions essayées` +
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
  window.addEventListener('resize', fit);
  inMot.value = EXEMPLES[0].motif; preparer();
})();
