/* Table de hachage avec chaînage : chaque mot est rangé dans la case
   h(mot) mod m ; les mots qui tombent dans la même case forment une liste.
   On peut choisir la fonction de hachage, et laisser la table doubler de
   taille quand elle contient plus de mots que de cases.
   Conteneur attendu : <div class="anim" data-anim="hachage"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="hachage"]');
  if (!root) return;

  const RESERVE = ('pomme poire prune cerise fraise kiwi mangue ananas banane citron orange melon raisin figue datte abricot peche cassis myrtille mure ' +
    'chat chien lapin cheval vache mouton cochon poule canard renard loup ours tigre lion zebre girafe singe koala panda castor ' +
    'hibou aigle merle moineau corbeau pigeon cygne heron ' +
    'rouge vert bleu jaune violet blanc noir gris rose brun ' +
    'table chaise lampe livre stylo cahier crayon gomme regle trousse ' +
    'piano violon flute guitare tambour harpe trompette ' +
    'paris lyon lille nantes rennes nice brest dijon metz caen').split(' ');
  const HACHAGES = {
    poly: { nom: 'polynomiale', calc: s => { let h = 0; for (const c of s) h = (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0; return h; },
            explique: 'h = h × 31 + code de la lettre, pour chaque lettre' },
    longueur: { nom: 'longueur du mot', calc: s => s.length, explique: 'h = nombre de lettres' },
    initiale: { nom: 'première lettre', calc: s => s.charCodeAt(0), explique: 'h = code de la première lettre' }
  };

  root.innerHTML = `
<div class="ha-cases"></div>
<p class="ha-calcul" aria-live="polite"></p>
<p class="ha-stats"></p>
<div class="anim-ctrl">
  <label>Mot <input type="text" data-k="mot" size="10" spellcheck="false" autocomplete="off" value="pomme"></label>
  <button type="button" data-k="ajout">Ajouter</button>
  <button type="button" class="sec" data-k="cherche">Chercher</button>
  <button type="button" class="sec" data-k="dix">Ajouter 10 mots</button>
  <button type="button" class="sec" data-k="vider">Vider</button>
</div>
<div class="anim-ctrl">
  <label>Fonction de hachage <select data-k="h"><option value="poly">polynomiale</option><option value="longueur">longueur du mot</option><option value="initiale">première lettre</option></select></label>
  <label><input type="checkbox" data-k="auto" checked> doubler la table quand elle déborde</label>
</div>`;

  const $ = s => root.querySelector(s);
  const casesEl = $('.ha-cases'), calc = $('.ha-calcul'), stats = $('.ha-stats');
  const inMot = $('[data-k="mot"]'), selH = $('[data-k="h"]'), inAuto = $('[data-k="auto"]');
  let m = 8, cases, n = 0, eclaire = null, agrandie = false;

  const H = () => HACHAGES[selH.value];
  function vider() { m = 8; cases = Array.from({ length: m }, () => []); n = 0; eclaire = null; afficher(); }
  function ranger(mot) { cases[H().calc(mot) % m].push(mot); }
  function rehacher(nouveau) {
    const tous = cases.flat(); m = nouveau; cases = Array.from({ length: m }, () => []); tous.forEach(ranger);
  }
  function ajouter(mot, silencieux) {
    mot = mot.trim().toLowerCase(); if (!mot) return;
    const h = H().calc(mot), i = h % m, chaine = cases[i];
    let comp = 0, deja = false;
    for (const w of chaine) { comp++; if (w === mot) { deja = true; break; } }
    agrandie = false;
    if (!deja) {
      chaine.push(mot); n++;
      if (inAuto.checked && n > m) { rehacher(2 * m); agrandie = true; }
    }
    const j = H().calc(mot) % m;
    eclaire = { i: j, mot, trouve: true };
    if (!silencieux) calc.innerHTML = `h(«&nbsp;${mot}&nbsp;») = ${h.toLocaleString('fr-FR')} ; ${h.toLocaleString('fr-FR')} mod ${agrandie ? m / 2 : m} = <b>${i}</b> → case ${i}` +
      (deja ? ` : le mot y est déjà (${comp} comparaison${comp > 1 ? 's' : ''}).` : ` : ajouté après ${comp} comparaison${comp > 1 ? 's' : ''} avec les mots de la case.`) +
      (agrandie ? ` <b>La table déborde : elle double (${m} cases) et chaque mot est rangé de nouveau.</b>` : '');
    afficher();
  }
  function chercher(mot) {
    mot = mot.trim().toLowerCase(); if (!mot) return;
    const h = H().calc(mot), i = h % m;
    let comp = 0, trouve = false;
    for (const w of cases[i]) { comp++; if (w === mot) { trouve = true; break; } }
    eclaire = { i, mot, trouve };
    calc.innerHTML = `h(«&nbsp;${mot}&nbsp;») = ${h.toLocaleString('fr-FR')} ; ${h.toLocaleString('fr-FR')} mod ${m} = <b>${i}</b> → case ${i} : ` +
      (trouve ? `trouvé en ${comp} comparaison${comp > 1 ? 's' : ''}` : `absent, certifié en ${comp} comparaison${comp > 1 ? 's' : ''}`) +
      `, au lieu de ${trouve ? cases.flat().indexOf(mot) + 1 : n} en parcourant tous les mots un à un.`;
    afficher();
  }
  function afficher() {
    casesEl.innerHTML = cases.map((ch, i) => `<div class="ha-case${eclaire && eclaire.i === i ? ' ha-vise' : ''}"><span class="ha-idx">${i}</span>` +
      ch.map(w => `<span class="ha-mot${eclaire && eclaire.mot === w && eclaire.trouve ? ' ha-trouve' : ''}">${w}</span>`).join('') + '</div>').join('');
    const longueurs = cases.map(c => c.length), max = Math.max(0, ...longueurs);
    const moy = n ? cases.reduce((s, c) => s + c.length * (c.length + 1) / 2, 0) / n : 0;
    stats.innerHTML = `<b>${n}</b> mots dans <b>${m}</b> cases · taux de remplissage <b>${(n / m).toFixed(2).replace('.', ',')}</b> · plus longue liste <b>${max}</b> · ` +
      `il faut en moyenne <b>${moy.toFixed(2).replace('.', ',')}</b> comparaisons pour retrouver un mot présent · fonction : ${H().explique}`;
  }
  $('[data-k="ajout"]').addEventListener('click', () => ajouter(inMot.value));
  $('[data-k="cherche"]').addEventListener('click', () => chercher(inMot.value));
  inMot.addEventListener('keydown', e => { if (e.key === 'Enter') ajouter(inMot.value); });
  $('[data-k="dix"]').addEventListener('click', () => {
    const libres = RESERVE.filter(w => !cases.flat().includes(w)), m0 = m;
    for (let k = 0; k < 10 && libres.length; k++) ajouter(libres.splice(Math.floor(Math.random() * libres.length), 1)[0], true);
    calc.innerHTML = 'Dix mots ajoutés.' + (m > m0 ? ` La table a doublé en route : ${m0} → ${m} cases.` : '');
    eclaire = null; afficher();
  });
  $('[data-k="vider"]').addEventListener('click', () => { vider(); calc.textContent = ''; });
  selH.addEventListener('change', () => { rehacher(m); eclaire = null; calc.textContent = `Même table, nouvelle fonction de hachage : chaque mot est rangé de nouveau.`; afficher(); });
  vider();
  ['pomme', 'chat', 'piano', 'lyon', 'tigre'].forEach(w => ajouter(w, true));
  eclaire = null; calc.textContent = ''; afficher();
})();
