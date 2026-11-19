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
<div class="nm-grille">
  <svg class="nm-jeu" role="img" aria-label="Rangées d'allumettes ; cliquer sur une allumette retire celle-ci et toutes celles à sa droite"></svg>
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
  const SW = 34, SH = 74, MARGE = 18;
  let tas, tour, survol = null, fini, aJoue, attente = 0;

  const somme = t => t.reduce((x, y) => x ^ y, 0);
  const pl = (k, mot) => `${k} ${mot}${k > 1 ? 's' : ''}`;

  function nouvelle() {
    clearTimeout(attente);
    tas = selD.value === 'hasard' ? Array.from({ length: 3 + Math.floor(Math.random() * 2) }, () => 1 + Math.floor(Math.random() * 9)) : [...DEPARTS[selD.value]];
    tour = 'vous'; fini = false; aJoue = false; survol = null;
    btnM.disabled = false;
    msg.innerHTML = `À vous de jouer&nbsp;: cliquez sur une allumette pour la retirer, avec toutes celles à sa droite. Celui qui prend la dernière allumette gagne.`;
    dessiner();
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
    tas[r] -= k;
    const avant = X;
    if (tas.every(t => t === 0)) { fini = true; msg.innerHTML = `La machine prend ${pl(k, 'allumette')} dans la rangée ${r + 1}, la dernière&nbsp;: <b>elle gagne</b>.`; }
    else msg.innerHTML = `La machine prend ${pl(k, 'allumette')} dans la rangée ${r + 1}. ` +
      (avant ? `À vous.` : `<i>(Elle était en position perdante&nbsp;: elle a joué au hasard.)</i> À vous.`);
    tour = 'vous';
    dessiner();
  }

  function jouer(r, j) {                              // l'humain retire l'allumette j de la rangée r et celles à sa droite
    if (fini || tour !== 'vous') return;
    const k = tas[r] - j;
    tas[r] = j; aJoue = true; btnM.disabled = true; survol = null;
    if (tas.every(t => t === 0)) { fini = true; msg.innerHTML = `Vous prenez la dernière allumette&nbsp;: <b>vous gagnez&nbsp;!</b> Rejouez avec le même départ&nbsp;: la machine ne vous laissera pas toujours une position gagnante.`; dessiner(); return; }
    tour = 'machine';
    msg.innerHTML = `Vous prenez ${pl(k, 'allumette')} dans la rangée ${r + 1}. La machine réfléchit…`;
    dessiner();
    attente = setTimeout(coupMachine, 900);
  }

  function dessiner() {
    const L = Math.max(...DEPARTS.grand, ...tas, 7), Wv = MARGE * 2 + 40 + L * SW, Hv = MARGE * 2 + tas.length * (SH + 14);
    svg.setAttribute('viewBox', `0 0 ${Wv} ${Hv}`);
    let h = '';
    tas.forEach((t, r) => {
      const y = MARGE + r * (SH + 14);
      h += `<text x="${MARGE}" y="${y + SH / 2 + 7}" class="nm-num">${r + 1}</text>`;
      const max = Math.max(t, (survol && survol[0] === r) ? t : 0);
      for (let j = 0; j < max; j++) {
        const x = MARGE + 40 + j * SW, pris = survol && survol[0] === r && j >= survol[1];
        h += `<g class="nm-a${pris ? ' nm-pris' : ''}${fini || tour !== 'vous' ? '' : ' nm-actif'}" data-r="${r}" data-j="${j}">` +
             `<rect x="${x}" y="${y}" width="${SW}" height="${SH}" class="nm-zone"/>` +
             `<rect x="${x + SW / 2 - 4}" y="${y + 14}" width="8" height="${SH - 16}" rx="3" class="nm-bois"/>` +
             `<ellipse cx="${x + SW / 2}" cy="${y + 13}" rx="6.5" ry="9" class="nm-tete"/></g>`;
      }
    });
    svg.innerHTML = h;
    // calculs de la machine
    calc.hidden = !cbVoir.checked;
    if (cbVoir.checked) {
      const B = Math.max(1, ...tas.map(t => t.toString(2).length)), X = somme(tas);
      const bits = v => v.toString(2).padStart(B, '0').split('');
      const impair = Array.from({ length: B }, (_, b) => tas.filter(t => bits(t)[b] === '1').length % 2 === 1);
      let tb = `<table class="nm-table"><tr><th>rangée</th><th>allumettes</th>${Array.from({ length: B }, (_, b) => `<th>${2 ** (B - 1 - b)}</th>`).join('')}</tr>`;
      tas.forEach((t, r) => { tb += `<tr><td>${r + 1}</td><td>${t}</td>${bits(t).map((c, b) => `<td class="${impair[b] && c === '1' ? 'nm-imp' : ''}">${c}</td>`).join('')}</tr>`; });
      tb += `<tr class="nm-somme"><td colspan="2">somme de Nim</td>${bits(X).map((c, b) => `<td class="${impair[b] ? 'nm-imp' : ''}">${c}</td>`).join('')}</tr></table>`;
      const qui = tour === 'vous' ? 'vous' : 'la machine';
      tb += fini ? '' : X === 0 ? `<p>Dans chaque colonne, un nombre pair de 1&nbsp;: la somme est nulle, <b>${qui === 'vous' ? 'vous êtes' : 'la machine est'} en position perdante</b>. Tout coup changera un chiffre d'une seule rangée, et rendra donc une colonne impaire.</p>`
        : `<p>La somme vaut ${X}, elle n'est pas nulle&nbsp;: <b>${qui === 'vous' ? 'vous êtes' : 'la machine est'} en position gagnante</b>. Il existe un coup qui rend toutes les colonnes paires.</p>`;
      calc.innerHTML = tb;
    }
  }

  function cible(e) { const g = e.target.closest('.nm-a'); return g ? [+g.dataset.r, +g.dataset.j] : null; }
  svg.addEventListener('pointermove', e => { if (fini || tour !== 'vous' || e.pointerType === 'touch') return; const c = cible(e); if ((c && String(c)) !== (survol && String(survol))) { survol = c; dessiner(); } });
  svg.addEventListener('pointerleave', () => { if (survol) { survol = null; dessiner(); } });
  svg.addEventListener('click', e => { const c = cible(e); if (c) jouer(c[0], c[1]); });
  $('[data-k="neuf"]').addEventListener('click', nouvelle);
  selD.addEventListener('change', nouvelle);
  btnM.addEventListener('click', () => { if (aJoue || fini || tour !== 'vous') return; btnM.disabled = true; aJoue = true; tour = 'machine'; msg.innerHTML = 'La machine réfléchit…'; dessiner(); attente = setTimeout(coupMachine, 600); });
  cbVoir.addEventListener('change', dessiner);
  nouvelle();
})();
