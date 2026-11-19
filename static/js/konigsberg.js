/* Les ponts de Königsberg : traverser chaque pont une et une seule fois.
   On choisit une rive de départ, puis on clique les ponts un à un.
   Deux configurations : les sept ponts du temps d'Euler (1736), et les cinq
   ponts de l'actuelle Kaliningrad.
   Conteneur attendu : <div class="anim" data-anim="konigsberg"></div>            */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="konigsberg"]');
  if (!root) return;

  const NOEUDS = {
    N: { x: 300, y: 48, nom: 'rive nord' },
    S: { x: 300, y: 292, nom: 'rive sud' },
    K: { x: 185, y: 170, nom: 'Kneiphof' },
    L: { x: 475, y: 170, nom: 'Lomse' }
  };
  const CONFIGS = {
    1736: [['N', 'K', -1], ['N', 'K', 1], ['S', 'K', -1], ['S', 'K', 1], ['N', 'L', 0], ['S', 'L', 0], ['K', 'L', 0]],
    2000: [['N', 'K', 0], ['S', 'K', 0], ['N', 'L', 0], ['S', 'L', 0], ['K', 'L', 0]]
  };

  root.innerHTML = `
<svg class="kb-svg" viewBox="0 0 600 340" role="img" aria-label="Graphe des ponts de Königsberg : quatre zones de terre reliées par des ponts"></svg>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Ponts <select data-k="c"><option value="1736">1736 : les sept ponts d'Euler</option><option value="2000">aujourd'hui : cinq ponts</option></select></label>
  <button type="button" class="sec" data-k="annuler">Annuler</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), info = $('.anim-info'), selC = $('[data-k="c"]');
  const NS = 'http://www.w3.org/2000/svg';
  let ponts, chemin, position;

  function courbe(p) {
    const a = NOEUDS[p[0]], b = NOEUDS[p[1]], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L, k = p[2] * 58;
    return { d: `M${a.x},${a.y} Q${mx + nx * k},${my + ny * k} ${b.x},${b.y}`, cx: mx + nx * k / 2, cy: my + ny * k / 2 };
  }
  const degre = n => ponts.filter(p => p[0] === n || p[1] === n).length;

  function dessiner() {
    svg.innerHTML = '';
    const el = (t, a, parent = svg) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); parent.appendChild(e); return e; };
    ponts.forEach((p, i) => {
      const c = courbe(p), rang = chemin.indexOf(i);
      el('path', { d: c.d, class: 'kb-pont' + (rang >= 0 ? ' kb-utilise' : '') + (position && rang < 0 && (p[0] === position || p[1] === position) ? ' kb-possible' : '') });
      const hit = el('path', { d: c.d, class: 'kb-zone', 'data-i': i });
      hit.addEventListener('click', () => traverser(i));
      if (rang >= 0) {
        el('circle', { cx: c.cx, cy: c.cy, r: 10, class: 'kb-num' });
        el('text', { x: c.cx, y: c.cy + 4, class: 'kb-numt' }).textContent = rang + 1;
      }
    });
    for (const [k, n] of Object.entries(NOEUDS)) {
      const g = el('g', { class: 'kb-noeud' + (k === position ? ' kb-ici' : ''), 'data-n': k });
      el('circle', { cx: n.x, cy: n.y, r: 24 }, g);
      el('text', { x: n.x, y: n.y + 5, class: 'kb-deg' }, g).textContent = degre(k);
      el('text', { x: n.x, y: n.y + (n.y < 100 ? -32 : n.y > 250 ? 44 : 44), class: 'kb-nom' }, g).textContent = n.nom;
      g.addEventListener('click', () => { if (!chemin.length) { position = k; dessiner(); bilan(); } });
      g.classList.toggle('kb-impair', degre(k) % 2 === 1);
    }
  }
  function traverser(i) {
    const p = ponts[i];
    if (!position) { info.innerHTML = 'Choisissez d\'abord une zone de départ en cliquant sur un cercle.'; return; }
    if (chemin.includes(i)) { info.innerHTML = 'Ce pont a déjà été traversé.'; return; }
    if (p[0] !== position && p[1] !== position) { info.innerHTML = 'Ce pont ne part pas de la zone où vous êtes.'; return; }
    chemin.push(i); position = p[0] === position ? p[1] : p[0];
    dessiner(); bilan();
  }
  function bilan() {
    const impairs = Object.keys(NOEUDS).filter(n => degre(n) % 2).length;
    const restants = ponts.map((p, i) => i).filter(i => !chemin.includes(i));
    const possibles = restants.filter(i => ponts[i][0] === position || ponts[i][1] === position);
    if (!restants.length) { info.innerHTML = `<b>Réussi :</b> les ${ponts.length} ponts traversés chacun une fois.`; return; }
    if (!possibles.length) {
      info.innerHTML = `<b>Bloqué</b>, avec ${restants.length} pont${restants.length > 1 ? 's' : ''} jamais traversé${restants.length > 1 ? 's' : ''}. ` +
        (impairs > 2 ? `Inutile de chercher plus longtemps : ${impairs} zones ont un nombre impair de ponts (les nombres dans les cercles), et Euler a montré qu'une promenade ne peut exister que s'il y en a 0 ou 2.`
                     : `Ici, une promenade existe : deux zones seulement ont un nombre impair de ponts, et il faut partir de l'une pour finir à l'autre.`);
      return;
    }
    info.innerHTML = `Vous êtes sur <b>${NOEUDS[position].nom}</b>. Cliquez un pont en pointillés pour le traverser.`;
  }
  function reset() {
    ponts = CONFIGS[selC.value]; chemin = []; position = null; dessiner();
    info.innerHTML = 'Cliquez sur une zone de terre pour choisir le départ. Le nombre dans chaque cercle est le nombre de ponts qui en partent.';
  }
  $('[data-k="reset"]').addEventListener('click', reset);
  $('[data-k="annuler"]').addEventListener('click', () => {
    if (!chemin.length) { position = null; reset(); return; }
    const i = chemin.pop(), p = ponts[i]; position = p[0] === position ? p[1] : p[0];
    dessiner(); bilan();
  });
  selC.addEventListener('change', reset);
  reset();
})();
