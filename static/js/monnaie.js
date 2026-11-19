/* Rendu de monnaie : le glouton (toujours la plus grosse pièce possible) contre
   l'optimum, calculé par programmation dynamique : meilleur[m] = 1 + min sur les
   pièces p ≤ m de meilleur[m − p]. La bande du bas montre, pour tous les montants,
   le nombre optimal de pièces, en rouge là où le glouton fait moins bien.
   Conteneur attendu : <div class="anim" data-anim="monnaie"></div>                */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="monnaie"]');
  if (!root) return;

  const SYSTEMES = {
    euro: { nom: 'euros (en centimes)', pieces: [1, 2, 5, 10, 20, 50, 100, 200], max: 400, defaut: 289 },
    pence: { nom: 'Royaume-Uni avant 1971 (pence)', pieces: [1, 3, 6, 12, 24, 30], max: 120, defaut: 48 },
    jouet: { nom: 'pièces de 1, 3 et 4', pieces: [1, 3, 4], max: 40, defaut: 6 }
  };
  root.innerHTML = `
<div class="mo-lignes">
  <p><span class="mo-lib">Glouton</span><span class="mo-pieces" data-o="g"></span></p>
  <p><span class="mo-lib">Optimal</span><span class="mo-pieces" data-o="o"></span></p>
</div>
<p class="mo-titre">Nombre optimal de pièces pour chaque montant de 0 à <span data-o="max"></span> <span class="mo-note">(en rouge : le glouton fait moins bien)</span></p>
<div class="mo-bande" role="img" aria-label="Pour chaque montant, le nombre optimal de pièces ; les montants où le glouton échoue sont en rouge"></div>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Pièces <select data-k="s">${Object.entries(SYSTEMES).map(([k, s]) => `<option value="${k}">${s.nom}</option>`).join('')}</select></label>
  <label>Montant <input type="range" min="1" max="400" value="289" data-k="m"><output></output></label>
  <button type="button" data-k="remplir">Remplir le tableau pas à pas</button>
</div>`;
  const $ = s => root.querySelector(s);
  const selS = $('[data-k="s"]'), inM = $('[data-k="m"]'), outM = $('output'), bande = $('.mo-bande'), info = $('.anim-info');
  let S, opt, choix, gl, timer = 0;

  function glouton(m) { const r = []; for (const p of [...S.pieces].sort((a, b) => b - a)) while (m >= p) { m -= p; r.push(p); } return r; }
  function calculer() {
    S = SYSTEMES[selS.value]; const M = S.max;
    opt = new Array(M + 1).fill(Infinity); choix = new Array(M + 1).fill(0); opt[0] = 0;
    for (let m = 1; m <= M; m++) for (const p of S.pieces) if (p <= m && opt[m - p] + 1 < opt[m]) { opt[m] = opt[m - p] + 1; choix[m] = p; }
    gl = Array.from({ length: M + 1 }, (_, m) => glouton(m).length);
  }
  const optimal = m => { const r = []; while (m > 0) { r.push(choix[m]); m -= choix[m]; } return r.sort((a, b) => b - a); };
  const pieces = L => L.map(p => `<i class="mo-p" style="--t:${0.9 + 0.35 * Math.log10(p + 1)}">${p}</i>`).join('');
  function bandeHTML(jusqua, courant) {
    let h = '';
    for (let m = 0; m <= S.max; m++) {
      const vu = m <= jusqua, rouge = vu && gl[m] > opt[m];
      const lu = courant !== undefined && S.pieces.some(p => courant - p === m);
      h += `<span class="mo-c${rouge ? ' mo-rouge' : ''}${m === +inM.value ? ' mo-sel' : ''}${m === courant ? ' mo-cur' : ''}${lu ? ' mo-lu' : ''}" data-m="${m}" title="${m} : ${opt[m]} pièce${opt[m] > 1 ? 's' : ''}${gl[m] > opt[m] ? `, le glouton en prend ${gl[m]}` : ''}">${vu ? opt[m] : ''}</span>`;
    }
    bande.innerHTML = h;
  }
  function afficher() {
    const m = +inM.value; outM.textContent = m;
    const g = glouton(m), o = optimal(m);
    $('[data-o="g"]').innerHTML = pieces(g) + ` <b>${g.length} pièce${g.length > 1 ? 's' : ''}</b>`;
    $('[data-o="o"]').innerHTML = pieces(o) + ` <b>${o.length} pièce${o.length > 1 ? 's' : ''}</b>`;
    $('[data-o="max"]').textContent = S.max;
    const echecs = gl.filter((x, k) => x > opt[k]).length;
    info.innerHTML = echecs ? `Le glouton échoue pour <b>${echecs}</b> montant${echecs > 1 ? 's' : ''} sur ${S.max}, le premier étant ${gl.findIndex((x, k) => x > opt[k])}.` : `Le glouton est optimal pour tous les montants de 1 à ${S.max}.`;
    bandeHTML(S.max);
  }
  function remplir() {
    clearInterval(timer);
    let m = 0;
    timer = setInterval(() => {
      m++;
      if (m > S.max) { clearInterval(timer); afficher(); return; }
      bandeHTML(m, m);
      const cand = S.pieces.filter(p => p <= m).map(p => `${opt[m - p]} + 1`).join(', ');
      info.innerHTML = `meilleur[${m}] = minimum de (${cand}) = <b>${opt[m]}</b> : on regarde les montants ${S.pieces.filter(p => p <= m).map(p => m - p).join(', ')}, déjà calculés.`;
    }, Math.max(25, 2500 / S.max));
  }
  selS.addEventListener('change', () => { clearInterval(timer); calculer(); inM.max = S.max; inM.value = S.defaut; afficher(); });
  inM.addEventListener('input', () => { clearInterval(timer); afficher(); });
  bande.addEventListener('click', e => { const c = e.target.closest('[data-m]'); if (c) { clearInterval(timer); inM.value = Math.max(1, +c.dataset.m); afficher(); } });
  $('[data-k="remplir"]').addEventListener('click', remplir);
  calculer(); afficher();
})();
