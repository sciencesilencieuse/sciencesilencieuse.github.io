/* Séparer et évaluer : l'arbre binaire des choix du sac à dos 0/1 (à chaque
   niveau, on prend l'objet ou non), exploré en profondeur. Trois réglages :
   tout explorer, couper les branches trop lourdes, couper aussi les branches
   dont la meilleure valeur imaginable (une borne) ne bat pas le record actuel.
   Conteneur attendu : <div class="anim" data-anim="arbre-sac"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="arbre-sac"]');
  if (!root) return;

  // mêmes objets que dans la page précédente, rangés par valeur au kilo décroissante
  const OBJ = [['🎸', 6, 30], ['📷', 5, 24], ['🔭', 5, 24], ['🧸', 3, 13], ['📚', 2, 7], ['⏰', 1, 1]], CAP = 10, n = OBJ.length;
  const VIT = [1, 2, 4, 8, 16, 40];
  const W = 660, H = 330, Y0 = 26, DY = 46, X0 = 44;

  root.innerHTML = `
<p class="pd-objets">${OBJ.map(([e, p, v]) => `<span>${e} <small>${p} kg, valeur ${v}</small></span>`).join('')}<span class="pd-cap">capacité du sac : ${CAP} kg</span></p>
<div class="as-defile"><svg class="as-arbre" viewBox="0 0 ${W} ${H}" role="img" aria-label="Arbre binaire des choix du sac à dos, exploré en profondeur"></svg></div>
<p class="as-legende"><span class="as-l-avec">avec l'objet</span> <span class="as-l-sans">sans l'objet</span> <span class="as-l-coupe">branche coupée</span> <span class="as-l-best">meilleur choix</span></p>
<p class="as-message" aria-live="polite"></p>
<p class="as-stats"></p>
<div class="anim-ctrl">
  <label>Élagage <select data-k="m"><option value="0">aucun : tout explorer</option><option value="1">couper le trop lourd</option><option value="2" selected>couper aussi le sans-espoir</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Vitesse <input type="range" min="0" max="5" step="1" value="2" data-k="v"></label>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.as-message'), stats = $('.as-stats'), selM = $('[data-k="m"]'), btnGo = $('[data-k="go"]'), inV = $('[data-k="v"]');
  const fmt1 = x => (Math.round(x * 10) / 10).toLocaleString('fr-FR');

  let gen, ev, vus, coupes, best, timer = 0, dernierT = 0, acc = 0, feuillesOK;

  const prof = id => 31 - Math.clz32(id);
  function pos(id) {
    const d = prof(id), k = id - (1 << d);
    return [X0 + (W - X0 - 8) * (k + 0.5) / (1 << d), Y0 + d * DY];
  }
  const nom = pris => pris.length ? pris.map(i => OBJ[i][0]).join('') : 'rien';
  function borne(i, poids, val) {               // le sac rempli au mieux en découpant les objets restants
    let reste = CAP - poids, b = val;
    for (let j = i; j < n && reste > 0; j++) {
      const [, p, v] = OBJ[j];
      if (p <= reste) { b += v; reste -= p; } else { b += v * reste / p; reste = 0; }
    }
    return b;
  }

  function* explorer(mode) {
    function* noeud(id, i, poids, val, pris) {
      vus.add(id);
      if (i === n) {
        const ok = poids <= CAP;
        if (ok) feuillesOK.add(id);
        const record = ok && (!best || val > best.v);
        if (record) best = { v: val, id, pris: [...pris] };
        yield { t: 'feuille', id, poids, val, pris, ok, record };
        return;
      }
      yield { t: 'noeud', id, i, poids, val, pris };
      const [e, p, v] = OBJ[i];
      // branche « avec »
      const a = 2 * id;
      if (mode >= 1 && poids + p > CAP) { coupes.set(a, 'lourd'); yield { t: 'coupe', id: a, raison: 'lourd', e, poids: poids + p, pris }; }
      else if (mode >= 2 && best && borne(i + 1, poids + p, val + v) <= best.v) { coupes.set(a, 'borne'); yield { t: 'coupe', id: a, raison: 'borne', e, b: borne(i + 1, poids + p, val + v), pris }; }
      else { pris.push(i); yield* noeud(a, i + 1, poids + p, val + v, pris); pris.pop(); }
      // branche « sans »
      const s = 2 * id + 1;
      if (mode >= 2 && best && borne(i + 1, poids, val) <= best.v) { coupes.set(s, 'borne'); yield { t: 'coupe', id: s, raison: 'borne', e, b: borne(i + 1, poids, val), sans: true, pris }; }
      else yield* noeud(s, i + 1, poids, val, pris);
    }
    yield* noeud(1, 0, 0, 0, []);
    yield { t: 'fin' };
  }

  function preparer() {
    timer = 0; btnGo.textContent = 'Lancer';
    vus = new Set(); coupes = new Map(); feuillesOK = new Set(); best = null; ev = null; gen = explorer(+selM.value);
    msg.innerHTML = `Chaque niveau décide d'un objet&nbsp;: à gauche on le prend, à droite on le laisse. Les ${1 << n} feuilles sont les ${1 << n} sacs imaginables. L'exploration descend toujours d'abord à gauche.`;
    stats.innerHTML = '';
    dessiner();
  }
  function avancer() {
    if (!gen) return false;
    const r = gen.next();
    if (r.done) { gen = null; return false; }
    ev = r.value;
    if (ev.t === 'fin') { gen = null; return false; }
    return true;
  }
  function decrire() {
    if (!ev) return;
    if (ev.t === 'noeud') msg.innerHTML = `Sac actuel&nbsp;: ${nom(ev.pris)}, ${ev.poids} kg, valeur ${ev.val}. Prendre ${OBJ[ev.i][0]}&nbsp;?`;
    else if (ev.t === 'feuille') msg.innerHTML = !ev.ok ? `Sac ${nom(ev.pris)}&nbsp;: ${ev.poids} kg, trop lourd.`
      : `Sac ${nom(ev.pris)}&nbsp;: ${ev.poids} kg, valeur <b>${ev.val}</b>.` + (ev.record ? ' Nouveau record.' : ` Le record (${best.v}) tient.`);
    else if (ev.t === 'coupe') msg.innerHTML = ev.raison === 'lourd'
      ? `Ajouter ${ev.e} porterait le sac à ${ev.poids} kg&nbsp;: <b>trop lourd</b>, on ne descend pas dans cette branche.`
      : `${ev.sans ? `Sans ${ev.e}` : `Avec ${ev.e}`}, même en remplissant le reste du sac au mieux (en découpant au besoin un objet), on ne dépasserait pas <b>${fmt1(ev.b)}</b>&nbsp;: <b>pas mieux que le record ${best.v}</b>, on coupe.`;
    else if (ev.t === 'fin') msg.innerHTML = `Exploration terminée. Meilleur sac&nbsp;: <b>${nom(best.pris)}</b>, ${best.pris.reduce((s, i) => s + OBJ[i][1], 0)} kg, valeur <b>${best.v}</b>.`;
    stats.innerHTML = `Nœuds visités&nbsp;: <b>${vus.size}</b> sur ${(1 << (n + 1)) - 1}` + (coupes.size ? ` · branches coupées&nbsp;: ${coupes.size}` : '') + (best ? ` · record&nbsp;: ${best.v}` : '');
  }

  function dessiner() {
    const chemin = new Set(), cheminBest = new Set();
    if (ev && ev.id && ev.t !== 'coupe') for (let k = ev.id; k >= 1; k >>= 1) chemin.add(k);
    if (ev && ev.t === 'coupe') for (let k = ev.id >> 1; k >= 1; k >>= 1) chemin.add(k);
    if (best) for (let k = best.id; k >= 1; k >>= 1) cheminBest.add(k);
    const fini = ev && ev.t === 'fin';
    let h = '';
    for (let d = 0; d < n; d++) h += `<text x="6" y="${Y0 + (d + 0.5) * DY + 6}" class="as-niv">${OBJ[d][0]}</text>`;
    for (let id = 2; id < 1 << (n + 1); id++) {
      const [x1, y1] = pos(id >> 1), [x2, y2] = pos(id);
      let cls = id % 2 ? 'as-e as-sans' : 'as-e as-avec';
      if (vus.has(id)) cls += ' as-vu';
      if (coupes.has(id)) cls += ' as-ecoupe';
      if (chemin.has(id) && !fini) cls += ' as-cur';
      if (fini && cheminBest.has(id)) cls += ' as-ebest';
      h += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    }
    for (let id = 1; id < 1 << (n + 1); id++) {
      const [x, y] = pos(id), d = prof(id), r = d < 4 ? 5 : d < 6 ? 3.6 : 2.6;
      if (coupes.has(id)) { h += `<path d="M${x - 5} ${y - 5}L${x + 5} ${y + 5}M${x + 5} ${y - 5}L${x - 5} ${y + 5}" class="as-x${coupes.get(id) === 'borne' ? ' as-xb' : ''}"/>`; continue; }
      let cls = 'as-n';
      if (vus.has(id)) cls += d === n ? (feuillesOK.has(id) ? ' as-ok' : ' as-ko') : ' as-nvu';
      if (best && best.id === id) cls += ' as-record';
      if (ev && ev.id === id && !fini) cls += ' as-ncur';
      h += `<circle cx="${x}" cy="${y}" r="${ev && ev.id === id && !fini ? r + 3 : r}" class="${cls}"/>`;
    }
    svg.innerHTML = h;
  }

  function boucle(t) {
    if (!timer) return;
    const dt = dernierT ? Math.min(0.1, (t - dernierT) / 1000) : 1 / 60; dernierT = t;
    acc += dt * VIT[+inV.value];
    let k = 0, encore = true;
    while (acc >= 1 && encore) { acc -= 1; k++; encore = avancer(); }
    if (k) { decrire(); dessiner(); }
    if (!encore) { timer = 0; btnGo.textContent = 'Lancer'; return; }
    requestAnimationFrame(boucle);
  }
  btnGo.addEventListener('click', () => {
    if (timer) { timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (!gen) preparer();
    timer = 1; dernierT = 0; acc = 1; btnGo.textContent = 'Pause';
    requestAnimationFrame(boucle);
  });
  $('[data-k="pas"]').addEventListener('click', () => { timer = 0; btnGo.textContent = 'Lancer'; if (!gen) preparer(); avancer(); decrire(); dessiner(); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selM.addEventListener('change', preparer);
  preparer();
})();
