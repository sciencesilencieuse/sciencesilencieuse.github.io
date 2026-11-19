/* Programmation dynamique : une table remplie case par case, chaque case se
   déduisant de cases déjà calculées (encadrées), puis le chemin qui reconstruit
   la solution.
   data-mode="sac"     : sac à dos 0/1, T[i][c] = meilleure valeur avec les i
                         premiers objets et une capacité c ;
   data-mode="edition" : distance d'édition, D[i][j] = nombre minimal
                         d'opérations pour changer les i premières lettres du
                         premier mot en les j premières du second.
   Conteneur attendu : <div class="anim" data-anim="table-pd" data-mode="sac"></div> */
(function () {
  'use strict';
  const OBJETS = [['🎸', 6, 30], ['📷', 5, 24], ['🔭', 5, 24], ['🧸', 3, 13], ['📚', 2, 7], ['⏰', 1, 1]], CAP = 10;
  document.querySelectorAll('.anim[data-anim="table-pd"]').forEach(init);

  function init(root) {
    const SAC = root.dataset.mode !== 'edition';
    root.innerHTML = `
${SAC ? `<p class="pd-objets">${OBJETS.map(([e, p, v]) => `<span>${e} <small>${p} kg, valeur ${v}</small></span>`).join('')}<span class="pd-cap">capacité du sac : ${CAP} kg</span></p>` : ''}
<div class="pd-defile"><table class="pd-table"></table></div>
<p class="pd-formule" aria-live="polite"></p>
<p class="pd-resultat"></p>
<div class="anim-ctrl">
  ${SAC ? '' : `<label>De <input type="text" data-k="a" size="11" maxlength="12" spellcheck="false" value="ordinateur"></label>
  <label>vers <input type="text" data-k="b" size="11" maxlength="12" spellcheck="false" value="ordonnateur"></label>`}
  <button type="button" data-k="pas">Une case</button>
  <button type="button" class="sec" data-k="auto">Remplir</button>
  <button type="button" class="sec" data-k="tout">Tout remplir</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
    const $ = s => root.querySelector(s);
    const tab = $('table'), formule = $('.pd-formule'), resultat = $('.pd-resultat'), btnAuto = $('[data-k="auto"]');
    let L, C, V, ordre, k, timer = 0, A = '', B = '';

    function preparer() {
      clearInterval(timer); timer = 0; btnAuto.textContent = 'Remplir';
      if (SAC) { L = OBJETS.length + 1; C = CAP + 1; }
      else { A = ($('[data-k="a"]').value || 'chien').toLowerCase().slice(0, 12); B = ($('[data-k="b"]').value || 'niche').toLowerCase().slice(0, 12); L = A.length + 1; C = B.length + 1; }
      V = Array.from({ length: L }, () => new Array(C).fill(null));
      ordre = [];
      for (let i = 0; i < L; i++) for (let j = 0; j < C; j++) {
        if (SAC ? i === 0 : i === 0 || j === 0) V[i][j] = SAC ? 0 : i + j;      // première ligne (et colonne) : cas de base
        else ordre.push([i, j]);
      }
      k = 0;
      const entete = SAC ? '<tr><th>objets \\ capacité</th>' + Array.from({ length: C }, (_, c) => `<th>${c}</th>`).join('') + '</tr>'
                         : '<tr><th></th><th>∅</th>' + [...B].map(ch => `<th>${ch}</th>`).join('') + '</tr>';
      let h = entete;
      for (let i = 0; i < L; i++) {
        h += `<tr><th>${SAC ? (i ? OBJETS.slice(0, i).map(o => o[0]).join('') : 'aucun') : (i ? A[i - 1] : '∅')}</th>`;
        for (let j = 0; j < C; j++) h += `<td data-i="${i}" data-j="${j}">${V[i][j] === null ? '' : V[i][j]}</td>`;
        h += '</tr>';
      }
      tab.innerHTML = h;
      formule.innerHTML = SAC ? 'Première ligne : sans aucun objet, la valeur est nulle quelle que soit la capacité. Ligne <i>i</i> : on ajoute le <i>i</i>-ème objet aux choix possibles.'
                              : 'Première ligne et première colonne : passer de rien à <i>j</i> lettres demande <i>j</i> insertions, passer de <i>i</i> lettres à rien, <i>i</i> suppressions.';
      resultat.innerHTML = '';
    }
    const td = (i, j) => tab.querySelector(`td[data-i="${i}"][data-j="${j}"]`);
    function calculer(i, j) {
      if (SAC) {
        const [e, p, v] = OBJETS[i - 1], sans = V[i - 1][j];
        if (p > j) return { val: sans, src: [[i - 1, j]], txt: `${e} pèse ${p} kg, plus que la capacité ${j} : T[${i}][${j}] = T[${i - 1}][${j}] = <b>${sans}</b>` };
        const avec = v + V[i - 1][j - p];
        return { val: Math.max(sans, avec), src: [[i - 1, j], [i - 1, j - p]], txt: `Sans ${e} : T[${i - 1}][${j}] = ${sans} ; avec ${e} : ${v} + T[${i - 1}][${j - p}] = ${avec}. On garde le meilleur : <b>${Math.max(sans, avec)}</b>` };
      }
      const sub = V[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1), del = V[i - 1][j] + 1, ins = V[i][j - 1] + 1, m = Math.min(sub, del, ins);
      return { val: m, src: [[i - 1, j - 1], [i - 1, j], [i, j - 1]],
        txt: `${A[i - 1] === B[j - 1] ? `« ${A[i - 1]} » = « ${B[j - 1]} » : on garde la lettre (${V[i - 1][j - 1]})` : `remplacer « ${A[i - 1]} » par « ${B[j - 1]} » (${V[i - 1][j - 1]} + 1)`}, supprimer « ${A[i - 1]} » (${V[i - 1][j]} + 1), insérer « ${B[j - 1]} » (${V[i][j - 1]} + 1) : le minimum vaut <b>${m}</b>` };
    }
    function pas() {
      tab.querySelectorAll('.pd-cur, .pd-src').forEach(x => x.classList.remove('pd-cur', 'pd-src'));
      if (k >= ordre.length) return false;
      const [i, j] = ordre[k++], r = calculer(i, j);
      V[i][j] = r.val; const c = td(i, j); c.textContent = r.val; c.classList.add('pd-cur');
      r.src.forEach(([a, b]) => td(a, b).classList.add('pd-src'));
      formule.innerHTML = r.txt + '.';
      if (k === ordre.length) fin();
      return k < ordre.length;
    }
    function fin() {
      tab.querySelectorAll('.pd-chemin').forEach(x => x.classList.remove('pd-chemin'));
      if (SAC) {
        let j = CAP; const pris = [];
        for (let i = OBJETS.length; i > 0; i--) { td(i, j).classList.add('pd-chemin'); if (V[i][j] !== V[i - 1][j]) { pris.push(OBJETS[i - 1]); j -= OBJETS[i - 1][1]; } }
        td(0, j).classList.add('pd-chemin');
        resultat.innerHTML = `Valeur maximale : <b>${V[OBJETS.length][CAP]}</b>, avec ${pris.reverse().map(o => o[0]).join(' et ')} (${pris.reduce((s, o) => s + o[1], 0)} kg). En remontant la table depuis le coin, chaque changement de valeur d'une ligne à l'autre signale un objet pris. Le glouton, qui prend les objets par valeur au kilo décroissante (🎸, 🧸, ⏰), n'obtenait que 44.`;
      } else {
        let i = A.length, j = B.length; const h = [], b = [], m = [];
        while (i > 0 || j > 0) {
          td(i, j).classList.add('pd-chemin');
          if (i > 0 && j > 0 && V[i][j] === V[i - 1][j - 1] + (A[i - 1] === B[j - 1] ? 0 : 1)) { h.push(A[i - 1]); b.push(B[j - 1]); m.push(A[i - 1] === B[j - 1] ? ' ' : '≠'); i--; j--; }
          else if (i > 0 && V[i][j] === V[i - 1][j] + 1) { h.push(A[i - 1]); b.push('·'); m.push('−'); i--; }
          else { h.push('·'); b.push(B[j - 1]); m.push('+'); j--; }
        }
        td(0, 0).classList.add('pd-chemin');
        resultat.innerHTML = `Distance d'édition : <b>${V[A.length][B.length]}</b>. Alignement obtenu en remontant le chemin (− suppression, + insertion, ≠ remplacement)&nbsp;:<pre class="pd-align">${h.reverse().join(' ')}\n${m.reverse().join(' ')}\n${b.reverse().join(' ')}</pre>`;
      }
    }
    function tout() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Remplir'; while (pas()); tab.querySelectorAll('.pd-cur, .pd-src').forEach(x => x.classList.remove('pd-cur', 'pd-src')); }
    $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; btnAuto.textContent = 'Remplir'; if (k >= ordre.length) preparer(); else pas(); });
    btnAuto.addEventListener('click', () => {
      if (timer) { clearInterval(timer); timer = 0; btnAuto.textContent = 'Reprendre'; return; }
      if (k >= ordre.length) preparer();
      btnAuto.textContent = 'Pause';
      timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; btnAuto.textContent = 'Remplir'; } }, 600);
    });
    $('[data-k="tout"]').addEventListener('click', () => { if (k >= ordre.length) preparer(); tout(); });
    $('[data-k="reset"]').addEventListener('click', preparer);
    root.querySelectorAll('input[type="text"]').forEach(x => x.addEventListener('change', preparer));
    preparer();
  }
})();
