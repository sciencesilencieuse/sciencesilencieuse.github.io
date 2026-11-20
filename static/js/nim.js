/* Jeu de Nim contre la machine. Chacun à son tour retire autant d'allumettes
   qu'il veut dans une seule rangée ; celui qui prend la dernière gagne.
   La machine applique la stratégie de Bouton : elle écrit les rangées en
   binaire et joue de façon à rendre nulle la « somme de Nim » (le ou exclusif
   des rangées). Le tableau de ses calculs peut être affiché.
   Conteneur attendu : <div class="anim" data-anim="nim"></div>                 */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="nim"]');
  if (!root) return;

  const DEPARTS = { classique: [1, 3, 5, 7], trois: [3, 4, 5], grand: [2, 5, 6, 9, 11] };
  root.innerHTML = `
<div class="nm-tete">
  <div class="nm-tours"><span class="nm-tour" data-t="vous">Vous</span><span class="nm-tour" data-t="machine">Machine</span></div>
  <div class="nm-score" aria-live="polite"></div>
</div>
<div class="nm-grille">
  <div class="nm-plateau">
    <svg class="nm-jeu" role="img" aria-label="Rangées d'allumettes : toucher une allumette sélectionne celle-ci et toutes celles à sa droite"></svg>
    <div class="nm-valider" hidden><button type="button" data-k="ok"></button><button type="button" class="sec" data-k="annuler">Annuler</button></div>
  </div>
  <div class="nm-calculs" hidden></div>
</div>
<p class="nm-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Départ <select data-k="d"><option value="classique">1, 3, 5, 7</option><option value="trois">3, 4, 5</option><option value="grand">2, 5, 6, 9, 11</option><option value="hasard">au hasard</option></select></label>
  <button type="button" data-k="neuf">Nouvelle partie</button>
  <button type="button" class="sec" data-k="machine">La machine commence</button>
  <label><input type="checkbox" data-k="voir"> Voir les calculs de la machine</label>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), calc = $('.nm-calculs'), msg = $('.nm-message'), selD = $('[data-k="d"]'), btnM = $('[data-k="machine"]'), cbVoir = $('[data-k="voir"]');
  const valider = $('.nm-valider'), btnOk = $('[data-k="ok"]');
  const SW = 34, SH = 78, GAP = 12, X0 = 52, MARGE = 10;
  let tas, tour, choix = null, survol = null, part = null, fini, aJoue, attente = 0, score = { vous: 0, machine: 0 };

  const somme = t => t.reduce((x, y) => x ^ y, 0);
  const pl = (k, mot) => `${k} ${mot}${k > 1 ? 's' : ''}`;
  const CONSIGNE = `Touchez la première allumette à retirer&nbsp;: elle est sélectionnée avec toutes celles à sa droite. Puis validez, ou touchez-la de nouveau.`;

  function nouvelle() {
    clearTimeout(attente);
    tas = selD.value === 'hasard' ? Array.from({ length: 3 + Math.floor(Math.random() * 2) }, () => 1 + Math.floor(Math.random() * 9)) : [...DEPARTS[selD.value]];
    tour = 'vous'; fini = false; aJoue = false; choix = null; survol = null; part = null;
    btnM.disabled = false;
    msg.innerHTML = `À vous de jouer. ${CONSIGNE} Celui qui prend la dernière allumette gagne.`;
    dessiner();
  }
  function retirer(r, j, qui, suite) {                // les allumettes choisies sont montrées, puis s'envolent
    part = { r, j, qui }; choix = null; survol = null; dessiner();
    const montre = qui === 'machine' ? 650 : 60;
    attente = setTimeout(() => {
      svg.querySelectorAll('.nm-part-pre').forEach(g => g.classList.add('nm-part'));
      attente = setTimeout(() => { tas[r] = j; part = null; suite(); }, 480);
    }, montre);
  }
  function coupMachine() {
    const X = somme(tas);
    let r, k;
    if (X === 0) {                                     // position perdante : on joue petit en espérant une erreur
      const non = tas.map((t, i) => i).filter(i => tas[i] > 0);
      r = non[Math.floor(Math.random() * non.length)];
      k = 1 + Math.floor(Math.random() * Math.min(2, tas[r]));
    } else {
      r = tas.findIndex(t => (t ^ X) < t);
      k = tas[r] - (tas[r] ^ X);
    }
    retirer(r, tas[r] - k, 'machine', () => {
      if (tas.every(t => t === 0)) { fini = true; score.machine++; msg.innerHTML = `La machine prend ${pl(k, 'allumette')} dans la rangée ${r + 1}, la dernière&nbsp;: <b>elle gagne</b>.`; }
      else { tour = 'vous'; msg.innerHTML = `La machine prend ${pl(k, 'allumette')} dans la rangée ${r + 1}. ` + (X ? `À vous.` : `<i>(Elle était en position perdante&nbsp;: elle a joué au hasard.)</i> À vous.`); }
      dessiner();
    });
  }
  function jouer() {
    if (!choix || fini || tour !== 'vous') return;
    const [r, j] = choix, k = tas[r] - j;
    aJoue = true; btnM.disabled = true;
    msg.innerHTML = `Vous prenez ${pl(k, 'allumette')} dans la rangée ${r + 1}.`;
    retirer(r, j, 'vous', () => {
      tour = 'machine';
      if (tas.every(t => t === 0)) { fini = true; score.vous++; msg.innerHTML = `Vous prenez la dernière allumette&nbsp;: <b>vous gagnez&nbsp;!</b> Rejouez avec le même départ&nbsp;: la machine ne vous laissera pas toujours une position gagnante.`; dessiner(); return; }
      msg.innerHTML += ` La machine réfléchit…`;
      dessiner();
      attente = setTimeout(coupMachine, 700);
    });
  }
  function selectionner(r, j) {
    if (fini || tour !== 'vous' || part) return;
    if (choix && choix[0] === r && choix[1] === j) { jouer(); return; }
    choix = [r, j];
    const k = tas[r] - j;
    msg.innerHTML = `${pl(k, 'allumette')} sélectionnée${k > 1 ? 's' : ''} dans la rangée ${r + 1}. Validez, ou touchez une autre allumette pour changer.`;
    dessiner();
  }

  function dessiner() {
    const L = Math.max(...DEPARTS.grand, ...tas, 7), Wv = X0 + L * SW + 46, Hv = MARGE * 2 + tas.length * (SH + GAP) - GAP;
    svg.setAttribute('viewBox', `0 0 ${Wv} ${Hv}`);
    let h = `<defs><linearGradient id="nm-g-bois" x1="0" x2="1"><stop offset="0" stop-color="#F6D58E"/><stop offset="0.55" stop-color="#E9B95C"/><stop offset="1" stop-color="#C98E2E"/></linearGradient>` +
            `<radialGradient id="nm-g-tete" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#F87171"/><stop offset="1" stop-color="#9F1239"/></radialGradient></defs>`;
    const actif = !fini && tour === 'vous' && !part;
    tas.forEach((t, r) => {
      const y = MARGE + r * (SH + GAP), sel = choix && choix[0] === r ? choix[1] : survol && survol[0] === r ? survol[1] : null, ferme = choix && choix[0] === r;
      h += `<rect x="2" y="${y}" width="${Wv - 4}" height="${SH}" rx="14" class="nm-plaque${t === 0 ? ' nm-vide' : ''}"/>`;
      h += `<circle cx="26" cy="${y + SH / 2}" r="13" class="nm-pastille"/><text x="26" y="${y + SH / 2 + 5}" class="nm-num">${r + 1}</text>`;
      h += `<text x="${Wv - 22}" y="${y + SH / 2 + 6}" class="nm-compte">${t}</text>`;
      for (let j = 0; j < t; j++) {
        const x = X0 + j * SW, cls = ['nm-a'];
        if (actif) cls.push('nm-actif');
        if (sel !== null && j >= sel) cls.push(ferme ? 'nm-choisie' : 'nm-survol');
        if (part && part.r === r && j >= part.j) cls.push('nm-part-pre', part.qui === 'machine' ? 'nm-part-m' : 'nm-part-v');
        h += `<g class="${cls.join(' ')}" data-r="${r}" data-j="${j}"><rect x="${x}" y="${y}" width="${SW}" height="${SH}" class="nm-zone"/>` +
             `<g class="nm-baton"><rect x="${x + SW / 2 - 4}" y="${y + 22}" width="8" height="${SH - 32}" rx="3" fill="url(#nm-g-bois)" class="nm-bois"/>` +
             `<ellipse cx="${x + SW / 2}" cy="${y + 20}" rx="7" ry="9.5" fill="url(#nm-g-tete)" class="nm-tete"/></g></g>`;
      }
    });
    svg.innerHTML = h;
    // validation
    valider.hidden = !(choix && actif);
    if (choix) { const k = tas[choix[0]] - choix[1]; btnOk.textContent = `Retirer ${pl(k, 'allumette')}`; }
    // tour et score
    root.querySelectorAll('.nm-tour').forEach(x => x.classList.toggle('nm-on', !fini && x.dataset.t === tour));
    $('.nm-score').innerHTML = `Score&nbsp;: vous <b>${score.vous}</b> – <b>${score.machine}</b> machine`;
    // calculs de la machine
    calc.hidden = !cbVoir.checked;
    if (cbVoir.checked) {
      const B = Math.max(1, ...tas.map(t => t.toString(2).length)), X = somme(tas);
      const bits = v => v.toString(2).padStart(B, '0').split('');
      const impair = Array.from({ length: B }, (_, b) => tas.filter(t => bits(t)[b] === '1').length % 2 === 1);
      let tb = `<table class="nm-table"><tr><th>rangée</th><th>allumettes</th>${Array.from({ length: B }, (_, b) => `<th>${2 ** (B - 1 - b)}</th>`).join('')}</tr>`;
      tas.forEach((t, r) => { tb += `<tr><td>${r + 1}</td><td>${t}</td>${bits(t).map((c, b) => `<td class="${c === '1' ? (impair[b] ? 'nm-un nm-imp' : 'nm-un') : ''}">${c}</td>`).join('')}</tr>`; });
      tb += `<tr class="nm-somme"><td colspan="2">somme de Nim</td>${bits(X).map((c, b) => `<td class="${impair[b] ? 'nm-imp' : ''}">${c}</td>`).join('')}</tr></table>`;
      const qui = tour === 'vous' ? 'vous êtes' : 'la machine est';
      tb += fini ? '' : X === 0 ? `<p class="nm-verdict nm-perd">Chaque colonne contient un nombre pair de 1&nbsp;: la somme est nulle, <b>${qui} en position perdante</b>. Tout coup changera un chiffre d'une seule rangée, et rendra une colonne impaire.</p>`
        : `<p class="nm-verdict nm-gagne">La somme vaut ${X}, elle n'est pas nulle&nbsp;: <b>${qui} en position gagnante</b>. Il existe un coup qui rend toutes les colonnes paires.</p>`;
      calc.innerHTML = tb;
    }
  }

  function cible(e) { const g = e.target.closest('.nm-a'); return g ? [+g.dataset.r, +g.dataset.j] : null; }
  svg.addEventListener('pointermove', e => { if (fini || tour !== 'vous' || part || e.pointerType !== 'mouse') return; const c = cible(e); if ((c && String(c)) !== (survol && String(survol))) { survol = c; dessiner(); } });
  svg.addEventListener('pointerleave', () => { if (survol) { survol = null; dessiner(); } });
  svg.addEventListener('click', e => { const c = cible(e); if (c) selectionner(c[0], c[1]); });
  btnOk.addEventListener('click', jouer);
  $('[data-k="annuler"]').addEventListener('click', () => { choix = null; msg.innerHTML = `À vous. ${CONSIGNE}`; dessiner(); });
  $('[data-k="neuf"]').addEventListener('click', nouvelle);
  selD.addEventListener('change', nouvelle);
  btnM.addEventListener('click', () => { if (aJoue || fini || tour !== 'vous') return; btnM.disabled = true; aJoue = true; tour = 'machine'; choix = null; msg.innerHTML = 'La machine réfléchit…'; dessiner(); attente = setTimeout(coupMachine, 600); });
  cbVoir.addEventListener('change', dessiner);
  nouvelle();
})();
