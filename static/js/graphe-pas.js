/* Un seul parcours, trois structures de données : sur le graphe des quartiers
   du cours (des Minimes au Stade), le parcours en largeur (file), le parcours en
   profondeur (pile) et Dijkstra (file de priorité), pas à pas.
   Chaque élément de la structure est un couple (sommet, chemin qui y mène).
   Conteneur attendu : <div class="anim" data-anim="graphe-pas"></div>            */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="graphe-pas"]');
  if (!root) return;

  const POS = { Minimes: [52, 150], 'Hôpital': [190, 52], Tasdon: [190, 248], Cognehors: [335, 160], Lafond: [335, 268],
                Verdun: [478, 52], Mireuil: [478, 268], Stade: [596, 150] };
  const G = { Minimes: { Tasdon: 5, 'Hôpital': 4 }, 'Hôpital': { Verdun: 21 }, Verdun: { Stade: 4 }, Tasdon: { Cognehors: 7, Lafond: 7 },
              Cognehors: { Verdun: 8 }, Lafond: { Mireuil: 5 }, Mireuil: { Stade: 3 }, Stade: {} };
  const DEPART = 'Minimes', ARRIVEE = 'Stade';
  const MODES = {
    largeur: { nom: 'File', retirer: L => L.shift(), poids: false },
    profondeur: { nom: 'Pile', retirer: L => L.pop(), poids: false },
    dijkstra: { nom: 'File de priorité', retirer: L => { let k = 0; L.forEach((e, i) => { if (e.cout < L[k].cout) k = i; }); return L.splice(k, 1)[0]; }, poids: true }
  };

  root.innerHTML = `
<svg class="gp-svg" viewBox="0 0 650 300" role="img" aria-label="Graphe orienté et pondéré de huit quartiers, parcouru pas à pas des Minimes au Stade"></svg>
<div class="gp-etat">
  <p><span class="gp-lib" data-o="nom">File</span> <span data-o="struct"></span></p>
  <p><span class="gp-lib">Sommets vus</span> <span data-o="vus"></span></p>
</div>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Parcours <select data-k="m"><option value="largeur">en largeur (file)</option><option value="profondeur">en profondeur (pile)</option><option value="dijkstra">Dijkstra (file de priorité)</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="auto">Enchaîner</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), info = $('.anim-info'), selM = $('[data-k="m"]'), btnAuto = $('[data-k="auto"]');
  const NS = 'http://www.w3.org/2000/svg';
  let M, struct, vus, ordre, courant, trouve, timer = 0;

  function reset() {
    clearInterval(timer); timer = 0; btnAuto.textContent = 'Enchaîner';
    M = MODES[selM.value]; struct = [{ s: DEPART, chemin: [DEPART], cout: 0 }]; vus = new Set(); ordre = []; courant = null; trouve = null;
    info.innerHTML = `On part des ${DEPART}. La structure contient un seul élément : le départ.`;
    dessiner();
  }
  function pas() {
    if (trouve || !struct.length) return false;
    const e = M.retirer(struct); courant = e;
    if (vus.has(e.s)) { info.innerHTML = `On retire <b>${e.s}</b>, déjà vu : on l'ignore.`; dessiner(); return true; }
    vus.add(e.s); ordre.push(e.s);
    if (e.s === ARRIVEE) {
      trouve = e;
      info.innerHTML = `On retire <b>${ARRIVEE}</b> : arrivée atteinte par ${e.chemin.join(' → ')}, soit ${e.chemin.length - 1} tronçons et un coût de <b>${e.cout}</b>.` +
        (selM.value === 'dijkstra' ? ' C\'est le chemin le moins coûteux : Dijkstra retire les sommets par coût croissant.' : selM.value === 'largeur' ? ' C\'est le chemin qui compte le moins de tronçons, mais pas le moins coûteux.' : ' La profondeur trouve un chemin, sans aucune garantie.');
      dessiner(); return false;
    }
    const ajouts = Object.entries(G[e.s]).filter(([v]) => !vus.has(v));
    ajouts.forEach(([v, w]) => struct.push({ s: v, chemin: e.chemin.concat(v), cout: e.cout + w }));
    info.innerHTML = `On retire <b>${e.s}</b>${M.poids ? ` (coût ${e.cout})` : ''}, on le marque vu, et l'on ajoute ses successeurs : ` +
      (ajouts.length ? ajouts.map(([v, w]) => v + (M.poids ? ` (${e.cout} + ${w} = ${e.cout + w})` : '')).join(', ') : 'aucun') + '.';
    dessiner(); return true;
  }
  function dessiner() {
    svg.innerHTML = `<defs><marker id="gp-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#94a3b8"/></marker>
      <marker id="gp-flv" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0L10,5L0,10z" fill="#16a34a"/></marker></defs>`;
    const el = (t, a) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); svg.appendChild(e); return e; };
    const dansChemin = (a, b) => trouve && trouve.chemin.some((s, i) => i && trouve.chemin[i - 1] === a && s === b);
    for (const a in G) for (const b in G[a]) {
      const [x1, y1] = POS[a], [x2, y2] = POS[b], d = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / d, uy = (y2 - y1) / d;
      const v = dansChemin(a, b);
      el('line', { x1: x1 + ux * 25, y1: y1 + uy * 25, x2: x2 - ux * 27, y2: y2 - uy * 27, class: 'gp-arc' + (v ? ' gp-arc-v' : ''), 'marker-end': v ? 'url(#gp-flv)' : 'url(#gp-fl)' });
      {
        const mx = (x1 + x2) / 2 - uy * 11, my = (y1 + y2) / 2 + ux * 11;
        el('text', { x: mx, y: my + 4, class: 'gp-poids' }).textContent = G[a][b];
      }
    }
    const dansStruct = new Set(struct.map(e => e.s));
    for (const s in POS) {
      const [x, y] = POS[s];
      const cls = 'gp-noeud' + (vus.has(s) ? ' gp-vu' : dansStruct.has(s) ? ' gp-front' : '') + (courant && courant.s === s ? ' gp-courant' : '') + (trouve && trouve.chemin.includes(s) ? ' gp-chemin' : '');
      el('circle', { cx: x, cy: y, r: 23, class: cls });
      el('text', { x, y: y + 4, class: 'gp-nom' }).textContent = s.length > 7 ? s.slice(0, 6) + '.' : s;
      if (vus.has(s)) el('text', { x: x + 21, y: y - 19, class: 'gp-rang' }).textContent = ordre.indexOf(s) + 1;
    }
    $('[data-o="nom"]').textContent = M.nom;
    let suivant = -1;                                   // le prochain élément à sortir
    if (struct.length) suivant = selM.value === 'largeur' ? 0 : selM.value === 'profondeur' ? struct.length - 1 : struct.reduce((k, e, i) => e.cout < struct[k].cout ? i : k, 0);
    const items = struct.map((e, i) => `<span class="gp-item${i === suivant ? ' gp-suivant' : ''}">${e.s}${M.poids ? ` <small>${e.cout}</small>` : ''}</span>`);
    $('[data-o="struct"]').innerHTML = items.length ? items.join('') + ' <span class="gp-sens">(encadré : le prochain à sortir)</span>' : '<i>vide</i>';
    $('[data-o="vus"]').textContent = ordre.join(', ') || '—';
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; btnAuto.textContent = 'Enchaîner'; pas(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnAuto.textContent = 'Enchaîner'; return; }
    if (trouve || !struct.length) reset();
    btnAuto.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; btnAuto.textContent = 'Enchaîner'; } }, 1100);
  });
  $('[data-k="reset"]').addEventListener('click', reset);
  selM.addEventListener('change', reset);
  reset();
})();
