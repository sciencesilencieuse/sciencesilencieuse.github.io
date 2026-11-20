/* Minimax au morpion, deux widgets.
   data-anim="minimax-arbre" : une fin de partie (trois cases libres, aux croix
     de jouer) et l'arbre complet des parties possibles, évalué pas à pas des
     feuilles vers la racine : maximum aux niveaux des croix, minimum aux
     niveaux des ronds.
   data-anim="morpion" : une partie contre la machine, qui choisit son coup par
     minimax complet, avec ou sans élagage alpha-bêta, ou par une recherche
     limitée à un ou deux coups complétée par une heuristique. Elle affiche le
     nombre de positions examinées.                                              */
(function () {
  'use strict';
  const L = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const gagnant = b => { for (const [i, j, k] of L) if (b[i] && b[i] === b[j] && b[j] === b[k]) return b[i]; return null; };
  const libres = b => b.map((c, i) => c ? -1 : i).filter(i => i >= 0);
  const autre = p => p === 'X' ? 'O' : 'X';
  const fmt = x => x.toLocaleString('fr-FR');
  const NS = 'http://www.w3.org/2000/svg';

  function miniPlateau(b, x, y, S, dernier, cls) {
    const c = S / 3;
    let h = `<rect x="${x}" y="${y}" width="${S}" height="${S}" rx="4" class="mm-fond${cls ? ' ' + cls : ''}"/>`;
    for (let k = 1; k < 3; k++) h += `<line x1="${x + k * c}" y1="${y + 3}" x2="${x + k * c}" y2="${y + S - 3}" class="mm-g"/><line x1="${x + 3}" y1="${y + k * c}" x2="${x + S - 3}" y2="${y + k * c}" class="mm-g"/>`;
    b.forEach((v, i) => {
      if (!v) return;
      const cx = x + (i % 3 + 0.5) * c, cy = y + (Math.floor(i / 3) + 0.5) * c, r = c * 0.3;
      const d = i === dernier ? ' mm-dernier' : '';
      h += v === 'X' ? `<path d="M${cx - r} ${cy - r}L${cx + r} ${cy + r}M${cx + r} ${cy - r}L${cx - r} ${cy + r}" class="mm-x${d}"/>` : `<circle cx="${cx}" cy="${cy}" r="${r}" class="mm-o${d}"/>`;
    });
    return h;
  }

  // ------------------------------------------------------------ l'arbre minimax
  document.querySelectorAll('.anim[data-anim="minimax-arbre"]').forEach(root => {
    const POS = ['XO.O.XXO.', 'XOXO..OX.', 'XXO.OX.O.'];
    root.innerHTML = `
<div class="mm-defile"><svg class="mm-arbre" role="img" aria-label="Arbre des fins de partie possibles, évalué par minimax"></svg></div>
<p class="mm-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="tout">Tout évaluer</button>
  <button type="button" class="sec" data-k="autre">Autre position</button>
</div>`;
    const svg = root.querySelector('svg'), msg = root.querySelector('.mm-message');
    let ip = 0, arbre, ordre, k, timer = 0;
    const W = 680, X0 = 96, NIV = 92, S = 52, H = 3 * NIV + S + 34;

    function construire(b, joueur, coup, prof) {
      const g = gagnant(b), lib = libres(b), nd = { b, joueur, coup, prof, enfants: [] };
      if (g || !lib.length) { nd.term = g || 'nul'; return nd; }
      for (const i of lib) { const c = [...b]; c[i] = joueur; nd.enfants.push(construire(c, autre(joueur), i, prof + 1)); }
      return nd;
    }
    function preparer() {
      clearInterval(timer); timer = 0;
      arbre = construire(POS[ip].split('').map(c => c === '.' ? '' : c), 'X', -1, 0);
      let f = 0; ordre = [];
      (function placer(nd) {
        nd.enfants.forEach(placer);
        nd.x = nd.enfants.length ? (nd.enfants[0].x + nd.enfants[nd.enfants.length - 1].x) / 2 : f++;
        ordre.push(nd);
      })(arbre);
      const echelle = (W - X0 - 10) / f;
      ordre.forEach(nd => { nd.px = X0 + (nd.x + 0.5) * echelle; nd.py = 8 + nd.prof * NIV; delete nd.val; delete nd.choix; });
      k = 0;
      msg.innerHTML = `Aux croix de jouer, et il reste trois cases. Toutes les fins de partie possibles forment cet arbre&nbsp;: on va évaluer chaque position, des feuilles vers la racine, avec +1 si les croix gagnent, −1 si les ronds gagnent, 0 pour un match nul.`;
      dessiner(null);
    }
    const txt = v => v > 0 ? '+1' : v < 0 ? '−1' : '0';
    function pas() {
      if (k >= ordre.length) return false;
      const nd = ordre[k++];
      if (nd.term) {
        nd.val = nd.term === 'X' ? 1 : nd.term === 'O' ? -1 : 0;
        msg.innerHTML = nd.term === 'nul' ? `Grille pleine, personne n'a aligné trois symboles&nbsp;: match nul, <b>0</b>.` : `Partie terminée, les ${nd.term === 'X' ? 'croix' : 'ronds'} ont gagné&nbsp;: <b>${txt(nd.val)}</b>.`;
      } else {
        const vals = nd.enfants.map(e => e.val), max = nd.joueur === 'X';
        nd.val = max ? Math.max(...vals) : Math.min(...vals);
        nd.choix = nd.enfants.find(e => e.val === nd.val);
        msg.innerHTML = `Aux ${max ? 'croix' : 'ronds'} de jouer&nbsp;: ${max ? 'elles prennent le <b>maximum</b>' : 'ils prennent le <b>minimum</b>'} des valeurs de leurs coups, ${max ? 'max' : 'min'}(${vals.map(txt).join(' ; ')}) = <b>${txt(nd.val)}</b>.`;
        if (nd === arbre) msg.innerHTML += ` ` + (nd.val > 0 ? `Les croix gagnent à coup sûr, à condition de jouer le coup surligné.` : nd.val === 0 ? `Le mieux que les croix puissent espérer est un match nul, en jouant le coup surligné&nbsp;: les autres perdent.` : `Les croix perdent quoi qu'elles fassent.`);
      }
      dessiner(nd);
      return k < ordre.length;
    }
    function dessiner(cur) {
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      let h = '';
      for (let p = 0; p <= 3; p++) h += `<text x="4" y="${8 + p * NIV + S / 2 + 5}" class="mm-niv">${p % 2 ? 'ronds : min' : 'croix : max'}</text>`;
      (function arcs(nd) {
        for (const e of nd.enfants) {
          h += `<line x1="${nd.px}" y1="${nd.py + S}" x2="${e.px}" y2="${e.py}" class="mm-arc${nd.choix === e ? ' mm-choix' : ''}"/>`;
          arcs(e);
        }
      })(arbre);
      for (const nd of ordre) {
        h += miniPlateau(nd.b, nd.px - S / 2, nd.py, S, nd.coup, nd === cur ? 'mm-cur' : '');
        if ('val' in nd) h += `<g class="mm-val ${nd.val > 0 ? 'mm-pos' : nd.val < 0 ? 'mm-neg' : 'mm-nul'}"><circle cx="${nd.px + S / 2 + 2}" cy="${nd.py + S + 2}" r="11"/><text x="${nd.px + S / 2 + 2}" y="${nd.py + S + 6.5}">${txt(nd.val)}</text></g>`;
      }
      svg.innerHTML = h;
    }
    root.querySelector('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; if (k >= ordre.length) preparer(); else pas(); });
    root.querySelector('[data-k="tout"]').addEventListener('click', () => { clearInterval(timer); if (k >= ordre.length) preparer(); timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; } }, 450); });
    root.querySelector('[data-k="autre"]').addEventListener('click', () => { ip = (ip + 1) % POS.length; preparer(); });
    preparer();
  });

  // ------------------------------------------------------------ jouer contre la machine
  document.querySelectorAll('.anim[data-anim="morpion"]').forEach(root => {
    root.innerHTML = `
<div class="mp-grille">
  <svg class="mp-plateau" viewBox="0 0 300 300" role="img" aria-label="Grille de morpion"></svg>
  <div class="mp-panneau">
    <p class="mp-message" aria-live="polite"></p>
    <p class="mp-stats"></p>
  </div>
</div>
<div class="anim-ctrl">
  <label>La machine <select data-k="ia">
    <option value="mm">explore tout (minimax)</option>
    <option value="ab">explore tout, avec élagage alpha-bêta</option>
    <option value="h2">voit 2 coups d'avance + heuristique</option>
    <option value="h1">voit 1 coup d'avance + heuristique</option>
  </select></label>
  <button type="button" data-k="neuf">Nouvelle partie</button>
  <button type="button" class="sec" data-k="machine">La machine commence</button>
  <label><input type="checkbox" data-k="voir"> Voir ce que pense la machine</label>
</div>`;
    const $ = s => root.querySelector(s);
    const svg = $('svg'), msg = $('.mp-message'), stats = $('.mp-stats'), selIA = $('[data-k="ia"]'), btnM = $('[data-k="machine"]'), cbVoir = $('[data-k="voir"]');
    let b, humain, machine, trait, fini, dernier, attente = 0, ligneGagnante = null, cumul = 0;

    let noeuds = 0;
    // minimax complet : valeur du point de vue de « moi », les victoires rapides valent plus
    function mm(b, joueur, moi, prof) {
      noeuds++;
      const g = gagnant(b);
      if (g) return g === moi ? 10 - prof : prof - 10;
      const lib = libres(b);
      if (!lib.length) return 0;
      let best = joueur === moi ? -Infinity : Infinity;
      for (const i of lib) {
        b[i] = joueur; const v = mm(b, autre(joueur), moi, prof + 1); b[i] = '';
        best = joueur === moi ? Math.max(best, v) : Math.min(best, v);
      }
      return best;
    }
    function ab(b, joueur, moi, prof, alpha, beta) {
      noeuds++;
      const g = gagnant(b);
      if (g) return g === moi ? 10 - prof : prof - 10;
      const lib = libres(b);
      if (!lib.length) return 0;
      if (joueur === moi) {
        let best = -Infinity;
        for (const i of lib) { b[i] = joueur; best = Math.max(best, ab(b, autre(joueur), moi, prof + 1, alpha, beta)); b[i] = ''; alpha = Math.max(alpha, best); if (alpha >= beta) break; }
        return best;
      }
      let best = Infinity;
      for (const i of lib) { b[i] = joueur; best = Math.min(best, ab(b, autre(joueur), moi, prof + 1, alpha, beta)); b[i] = ''; beta = Math.min(beta, best); if (alpha >= beta) break; }
      return best;
    }
    // heuristique : alignements encore possibles pour moi, moins ceux de l'adversaire
    function heur(b, moi) {
      let s = 0;
      for (const l of L) { const v = l.map(i => b[i]); if (!v.includes(autre(moi))) s++; if (!v.includes(moi)) s--; }
      return s;
    }
    function hp(b, joueur, moi, prof) {
      noeuds++;
      const g = gagnant(b);
      if (g) return g === moi ? 100 : -100;
      const lib = libres(b);
      if (!lib.length) return 0;
      if (prof === 0) return heur(b, moi);
      let best = joueur === moi ? -Infinity : Infinity;
      for (const i of lib) {
        b[i] = joueur; const v = hp(b, autre(joueur), moi, prof - 1); b[i] = '';
        best = joueur === moi ? Math.max(best, v) : Math.min(best, v);
      }
      return best;
    }
    // valeur de chaque coup possible pour le joueur au trait, selon la méthode choisie
    function evaluer(joueur) {
      const m = selIA.value, res = new Map();
      noeuds = 0;
      for (const i of libres(b)) {
        b[i] = joueur;
        const v = m === 'mm' ? mm(b, autre(joueur), joueur, 1) : m === 'ab' ? ab(b, autre(joueur), joueur, 1, -Infinity, Infinity) : hp(b, autre(joueur), joueur, m === 'h2' ? 1 : 0);
        b[i] = '';
        res.set(i, v);
      }
      return res;
    }

    function nouvelle() {
      clearTimeout(attente);
      b = Array(9).fill(''); humain = 'X'; machine = 'O'; trait = 'X'; fini = false; dernier = -1; ligneGagnante = null; cumul = 0;
      window.finPartie && finPartie.effacer(root);
      btnM.disabled = false;
      msg.innerHTML = `Vous jouez les croix. Cliquez sur une case.`;
      stats.innerHTML = '';
      dessiner();
    }
    function finir() {
      const g = gagnant(b);
      if (g) { ligneGagnante = L.find(([i, j, k]) => b[i] === g && b[j] === g && b[k] === g); fini = true; msg.innerHTML = g === humain ? `<b>Vous gagnez&nbsp;!</b>` + (selIA.value === 'mm' || selIA.value === 'ab' ? '' : ` La machine ne voyait pas assez loin.`) : `<b>La machine gagne.</b>`; }
      else if (!libres(b).length) { fini = true; msg.innerHTML = `<b>Match nul.</b>` + (selIA.value === 'mm' || selIA.value === 'ab' ? ` Contre un joueur parfait, c'est le mieux possible&nbsp;: le morpion est un jeu nul.` : ''); }
      if (fini) {
        btnM.disabled = true;
        const g2 = gagnant(b), parfaite = selIA.value === 'mm' || selIA.value === 'ab';
        setTimeout(() => window.finPartie && finPartie(svg, g2 === humain ? { type: 'victoire', titre: 'Vous avez gagné&nbsp;!', texte: parfaite ? '' : 'La machine ne voyait pas assez loin.', rejouer: nouvelle }
          : g2 ? { type: 'defaite', titre: 'La machine gagne', texte: 'Trois symboles alignés.', rejouer: nouvelle }
          : { type: 'nul', titre: 'Match nul', texte: parfaite ? 'Contre un joueur parfait, c\'est le mieux possible.' : '', rejouer: nouvelle }), 380);
      }
      return fini;
    }
    function coupMachine() {
      const t0 = performance.now(), vals = evaluer(machine), dt = performance.now() - t0;
      const max = Math.max(...vals.values()), meilleurs = [...vals].filter(([, v]) => v === max).map(([i]) => i);
      const i = meilleurs[Math.floor(Math.random() * meilleurs.length)];
      b[i] = machine; dernier = i; trait = humain; cumul += noeuds;
      stats.innerHTML = `Pour ce coup, la machine a examiné <b>${fmt(noeuds)}</b> position${noeuds > 1 ? 's' : ''} (${dt < 1 ? 'moins d\'une milliseconde' : Math.round(dt) + ' ms'}). Depuis le début de la partie&nbsp;: ${fmt(cumul)}.`;
      if (!finir()) msg.innerHTML = `La machine a joué. À vous.`;
      dessiner();
    }
    function jouer(i) {
      if (fini || trait !== humain || b[i]) return;
      b[i] = humain; dernier = i; trait = machine; btnM.disabled = true;
      if (finir()) { dessiner(); return; }
      msg.innerHTML = 'La machine réfléchit…';
      dessiner();
      attente = setTimeout(coupMachine, 350);
    }
    function dessiner() {
      let h = '';
      for (let k = 1; k < 3; k++) h += `<line x1="${k * 100}" y1="8" x2="${k * 100}" y2="292" class="mp-g"/><line x1="8" y1="${k * 100}" x2="292" y2="${k * 100}" class="mp-g"/>`;
      let vals = null;
      if (cbVoir.checked && !fini && trait === humain) { const n0 = noeuds; vals = evaluer(humain); noeuds = n0; }
      b.forEach((v, i) => {
        const cx = (i % 3) * 100 + 50, cy = Math.floor(i / 3) * 100 + 50;
        h += `<rect x="${cx - 50}" y="${cy - 50}" width="100" height="100" class="mp-case${!v && !fini && trait === humain ? ' mp-libre' : ''}" data-i="${i}"/>`;
        const d = i === dernier ? ' mm-dernier' : '';
        if (v === 'X') h += `<path d="M${cx - 28} ${cy - 28}L${cx + 28} ${cy + 28}M${cx + 28} ${cy - 28}L${cx - 28} ${cy + 28}" class="mm-x mp-sym${d}"/>`;
        else if (v === 'O') h += `<circle cx="${cx}" cy="${cy}" r="29" class="mm-o mp-sym${d}"/>`;
        else if (vals) {
          const val = vals.get(i), exact = selIA.value === 'mm' || selIA.value === 'ab';
          const lab = exact ? (val > 0 ? 'gagne' : val < 0 ? 'perd' : 'nul') : Math.abs(val) === 100 ? (val > 0 ? 'gagne' : 'perd') : (val > 0 ? '+' : val < 0 ? '−' : '') + Math.abs(val);
          h += `<text x="${cx}" y="${cy + 7}" class="mp-val ${val > 0 ? 'mm-pos' : val < 0 ? 'mm-neg' : 'mm-nul'}">${lab}</text>`;
        }
      });
      if (ligneGagnante) { const P = i => [(i % 3) * 100 + 50, Math.floor(i / 3) * 100 + 50], [a, , c] = ligneGagnante.map(P); h += `<line x1="${a[0]}" y1="${a[1]}" x2="${c[0]}" y2="${c[1]}" class="mp-ligne"/>`; }
      svg.innerHTML = h;
    }
    svg.addEventListener('click', e => { const r = e.target.closest('[data-i]'); if (r) jouer(+r.dataset.i); });
    $('[data-k="neuf"]').addEventListener('click', nouvelle);
    selIA.addEventListener('change', () => { if (!b.some(Boolean)) nouvelle(); else dessiner(); });
    cbVoir.addEventListener('change', dessiner);
    btnM.addEventListener('click', () => {
      if (b.some(Boolean)) return;
      humain = 'O'; machine = 'X'; btnM.disabled = true;
      msg.innerHTML = 'La machine réfléchit…'; dessiner();
      attente = setTimeout(() => { coupMachine(); if (!fini) msg.innerHTML = `La machine a joué. Vous avez les ronds.`; }, 300);
    });
    nouvelle();
  });
})();
