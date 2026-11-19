/* Arbre des appels et pile d'exécution d'une fonction récursive, pas à pas.
   Trois fonctions : somme(n) (une chaîne de n + 1 appels), fib(n) (un arbre
   qui explose), puiss(n) = 2^n par exponentiation rapide (une chaîne de
   longueur log n). À gauche, l'arbre des appels se construit au fil de
   l'exécution ; à droite, la pile des appels en attente.
   Conteneur attendu : <div class="anim" data-anim="pile-appels"></div>          */
(function () {
  'use strict';
  const FONCTIONS = {
    somme: {
      nom: 'somme', valeurs: [1, 2, 3, 4, 5, 6, 7, 8], defaut: 5,
      code: 'def somme(n):\n    if n < 1:\n        return 0\n    return n + somme(n - 1)',
      enfants: n => n < 1 ? [] : [n - 1],
      combiner: (n, v) => n < 1 ? 0 : n + v[0],
      cadre: (n, v) => n < 1 ? `somme(0) = 0` : `somme(${n}) = ${n} + ${v.length ? v[0] : '?'}${v.length ? ' = ' + (n + v[0]) : ''}`,
      base: n => n < 1
    },
    fib: {
      nom: 'fib', valeurs: [2, 3, 4, 5, 6, 7], defaut: 5,
      code: 'def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)',
      enfants: n => n < 2 ? [] : [n - 1, n - 2],
      combiner: (n, v) => n < 2 ? n : v[0] + v[1],
      cadre: (n, v) => n < 2 ? `fib(${n}) = ${n}` : `fib(${n}) = ${v.length > 0 ? v[0] : '?'} + ${v.length > 1 ? v[1] : '?'}${v.length > 1 ? ' = ' + (v[0] + v[1]) : ''}`,
      base: n => n < 2
    },
    puiss: {
      nom: 'puiss', valeurs: [5, 13, 21, 64, 100, 1000], defaut: 13,
      code: 'def puiss(n):                 # 2 puissance n\n    if n == 0:\n        return 1\n    m = puiss(n // 2)\n    if n % 2 == 0:\n        return m * m\n    return 2 * m * m',
      enfants: n => n === 0 ? [] : [Math.floor(n / 2)],
      combiner: (n, v) => n === 0 ? 1n : (n % 2 ? 2n : 1n) * v[0] * v[0],
      cadre: (n, v) => {
        if (n === 0) return 'puiss(0) = 1';
        const m = v.length ? court(v[0]) : '?', fin = v.length ? ' = ' + court((n % 2 ? 2n : 1n) * v[0] * v[0]) : '';
        return `puiss(${n}) = ${n % 2 ? '2 × ' : ''}${m}²${fin}`;
      },
      base: n => n === 0
    }
  };
  function court(x) {                     // grands entiers : on abrège
    const s = x.toString();
    return s.length > 12 ? `${s.slice(0, 4)}…(${s.length} chiffres)` : s;
  }
  const NOMS = { somme: 'somme(n)', fib: 'fib(n)', puiss: 'puiss(n) = 2ⁿ' };
  document.querySelectorAll('.anim[data-anim="pile-appels"]').forEach(init);

  /* data-fonctions="somme" ou "fib,puiss" : les fonctions proposées (la première est affichée) */
  function init(root) {
  const choix = (root.dataset.fonctions || 'somme,fib,puiss').split(',');

  root.innerHTML = `
<div class="pa-grille">
  <figure class="pa-panneau"><figcaption>L'arbre des appels</figcaption>
    <canvas class="pa-arbre" role="img" aria-label="Arbre des appels récursifs, construit au fil de l'exécution"></canvas></figure>
  <figure class="pa-panneau"><figcaption>La pile d'exécution <span>(le sommet en haut)</span></figcaption>
    <ol class="pa-pile" aria-live="off"></ol>
    <pre class="pa-code"></pre></figure>
</div>
<p class="pa-message" aria-live="polite"></p>
<p class="pa-stats"></p>
<div class="anim-ctrl">
  <label${choix.length < 2 ? ' hidden' : ''}>Fonction <select data-k="f">${choix.map(f => `<option value="${f}">${NOMS[f]}</option>`).join('')}</select></label>
  <label>n <select data-k="n"></select></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Vitesse <input type="range" min="0" max="5" step="1" value="2" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const cv = $('.pa-arbre'), pileEl = $('.pa-pile'), codeEl = $('.pa-code'), msg = $('.pa-message'), outS = $('.pa-stats');
  const selF = $('[data-k="f"]'), selN = $('[data-k="n"]'), btnGo = $('[data-k="go"]'), btnPas = $('[data-k="pas"]'), inV = $('[data-k="v"]');
  const VITESSES = [0.7, 1.5, 3, 6, 12, 30];

  let F, noeuds, evenements, k, pile, appels, maxPile, dim, enMarche = false;

  // ------------------------------------------------------------------ simulation complète, puis relecture
  function preparer() {
    F = FONCTIONS[selF.value];
    const n0 = +selN.value;
    noeuds = []; evenements = [];
    (function appeler(n, parent, prof) {
      const id = noeuds.length, nd = { id, n, parent, prof, enfants: [], valeurs: [], valeur: null, etat: 'cache' };
      noeuds.push(nd);
      if (parent >= 0) noeuds[parent].enfants.push(id);
      evenements.push({ t: 'appel', id });
      const vals = F.enfants(n).map(m => appeler(m, id, prof + 1));
      const v = F.combiner(n, vals);
      evenements.push({ t: 'retour', id, v });
      return v;
    })(n0, -1, 0);
    // placement : les feuilles côte à côte, chaque parent au milieu de ses enfants
    let feuille = 0;
    (function placer(id) {
      const nd = noeuds[id];
      if (!nd.enfants.length) nd.x = feuille++;
      else { nd.enfants.forEach(placer); nd.x = (noeuds[nd.enfants[0]].x + noeuds[nd.enfants[nd.enfants.length - 1]].x) / 2; }
    })(0);
    dim = null;
    k = 0; pile = []; appels = 0; maxPile = 0;
    codeEl.textContent = F.code;
    fit();
  }
  function remplirN() {
    const f = FONCTIONS[selF.value];
    selN.innerHTML = f.valeurs.map(v => `<option${v === f.defaut ? ' selected' : ''}>${v}</option>`).join('');
  }

  function avancer() {
    if (k >= evenements.length) return false;
    const e = evenements[k++], nd = noeuds[e.id];
    if (e.t === 'appel') {
      nd.etat = 'attente'; pile.push(e.id); appels++; maxPile = Math.max(maxPile, pile.length);
    } else {
      nd.etat = 'fini'; nd.valeur = e.v; pile.pop();
      if (nd.parent >= 0) noeuds[nd.parent].valeurs.push(e.v);
    }
    return true;
  }

  // ------------------------------------------------------------------ dessin
  function fit() {
    if (!noeuds) return;
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 400;
    const niveaux = Math.max(...noeuds.map(n => n.prof)) + 1, feuilles = Math.max(...noeuds.map(n => n.x)) + 1;
    const pas = Math.min(54, Math.max(34, 380 / niveaux)), h = Math.round(niveaux * pas + 24);
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = Math.max(7, Math.min(16, (w - 20) / feuilles / 2.3));
    dim = { w, h, pas, r, ox: w / 2 - ((feuilles - 1) / 2) * Math.min((w - 2 * r - 8) / Math.max(1, feuilles - 1), 70), ex: Math.min((w - 2 * r - 8) / Math.max(1, feuilles - 1), 70) };
    dessiner();
  }
  const pos = nd => [dim.ox + nd.x * dim.ex, 12 + dim.r + nd.prof * dim.pas];
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h, r } = dim;
    g.clearRect(0, 0, w, h);
    const sommet = pile.length ? pile[pile.length - 1] : -1;
    // arêtes
    for (const nd of noeuds) if (nd.parent >= 0 && nd.etat !== 'cache') {
      const [x1, y1] = pos(noeuds[nd.parent]), [x2, y2] = pos(nd);
      g.strokeStyle = nd.etat === 'attente' ? '#B45309' : '#94a3b8'; g.lineWidth = nd.etat === 'attente' ? 2 : 1.2;
      g.beginPath(); g.moveTo(x1, y1 + r); g.lineTo(x2, y2 - r); g.stroke();
    }
    // nœuds
    g.textAlign = 'center'; g.textBaseline = 'middle';
    for (const nd of noeuds) {
      if (nd.etat === 'cache') continue;
      const [x, y] = pos(nd), att = nd.etat === 'attente';
      g.fillStyle = att ? '#FDE7C8' : '#E6EEF5'; g.strokeStyle = att ? '#B45309' : '#004D80';
      g.lineWidth = nd.id === sommet ? 3 : 1.5;
      g.beginPath(); g.arc(x, y, r, 0, 2 * Math.PI); g.fill(); g.stroke();
      g.fillStyle = att ? '#7c2d12' : '#004D80';
      const chaine = F.nom !== 'fib';                    // un seul enfant par appel : de la place à droite
      if (nd.etat === 'fini' && !chaine && r >= 11) {      // valeur renvoyée dans le nœud, sous l'argument
        g.font = `600 ${Math.round(r * 0.78)}px system-ui, sans-serif`;
        g.fillText(nd.n, x, y - r * 0.3);
        g.font = `600 ${Math.round(r * 0.62)}px system-ui, sans-serif`; g.fillStyle = '#16a34a';
        g.fillText('→' + nd.valeur, x, y + r * 0.45);
      } else {
        g.font = `600 ${Math.round(r * (String(nd.n).length > 2 ? 0.75 : 0.95))}px system-ui, sans-serif`;
        g.fillText(nd.n, x, y + 0.5);
      }
      if (nd.etat === 'fini' && chaine) {
        g.font = `${Math.max(10, Math.round(r * 0.8))}px system-ui, sans-serif`; g.fillStyle = '#16a34a';
        g.textAlign = 'left'; g.fillText('renvoie ' + court(nd.valeur), x + r + 6, y + 0.5); g.textAlign = 'center';
      }
    }
  }
  function afficher() {
    dessiner();
    pileEl.innerHTML = pile.slice().reverse().map((id, i) => {
      const nd = noeuds[id];
      return `<li class="${i === 0 ? 'pa-sommet' : ''}">${F.cadre(nd.n, nd.valeurs)}</li>`;
    }).join('') || '<li class="pa-vide">pile vide</li>';
    outS.innerHTML = `appels <b>${appels}</b> / ${noeuds.length} · taille de la pile <b>${pile.length}</b> · maximum atteint <b>${maxPile}</b>`;
    const e = evenements[k - 1];
    if (!e) { msg.textContent = `Appel initial : ${F.nom}(${noeuds[0].n}).`; return; }
    const nd = noeuds[e.id];
    if (e.t === 'appel') {
      if (nd.parent < 0) msg.textContent = `Appel initial : ${F.nom}(${nd.n}) est placé sur la pile.`;
      else msg.textContent = `${F.nom}(${noeuds[nd.parent].n}) appelle ${F.nom}(${nd.n}) et se met en attente.` + (F.base(nd.n) ? ` ${F.nom}(${nd.n}) est un cas de base.` : '');
    } else {
      const fin = k === evenements.length;
      msg.textContent = `${F.nom}(${nd.n}) renvoie ${court(e.v)} et quitte la pile.` + (fin ? ` Terminé : ${noeuds.length} appels, jamais plus de ${maxPile} à la fois sur la pile.` : nd.parent >= 0 ? ` On reprend ${F.nom}(${noeuds[nd.parent].n}) là où il s'était arrêté.` : '');
    }
  }

  // ------------------------------------------------------------------ pilotage
  let credit = 0, dernier = 0;
  function boucle(t) {
    if (!enMarche) return;
    const dt = dernier ? Math.min(0.1, (t - dernier) / 1000) : 0; dernier = t;
    credit += VITESSES[+inV.value] * dt;
    let n = Math.floor(credit); credit -= n;
    let change = false;
    while (n-- > 0) { if (!avancer()) break; change = true; }
    if (change) afficher();
    if (k >= evenements.length) { enMarche = false; btnGo.textContent = 'Lancer'; btnGo.disabled = btnPas.disabled = true; return; }
    requestAnimationFrame(boucle);
  }
  btnGo.addEventListener('click', () => {
    if (enMarche) { enMarche = false; btnGo.textContent = 'Reprendre'; return; }
    enMarche = true; dernier = 0; credit = 1; btnGo.textContent = 'Pause'; requestAnimationFrame(boucle);
  });
  btnPas.addEventListener('click', () => {
    if (enMarche) { enMarche = false; btnGo.textContent = 'Reprendre'; }
    avancer(); afficher();
    if (k >= evenements.length) btnGo.disabled = btnPas.disabled = true;
  });
  function remettre() { enMarche = false; btnGo.textContent = 'Lancer'; btnGo.disabled = btnPas.disabled = false; preparer(); afficher(); }
  $('[data-k="reset"]').addEventListener('click', remettre);
  selF.addEventListener('change', () => { remplirN(); remettre(); });
  selN.addEventListener('change', remettre);
  window.addEventListener('resize', fit);
  remplirN(); preparer(); afficher();
  }
})();
