/* Algorithme de Kadane : un seul passage sur le tableau suffit pour trouver le
   sous-tableau (contigu) de somme maximale. On maintient la meilleure somme
   d'un sous-tableau qui se termine à la case courante ; dès qu'elle devient
   négative, elle ne peut plus aider personne, et l'on repart de zéro.
   En haut, les deux nombres tenus à jour ; au milieu, le tableau en barres, avec
   la tranche courante (vert d'eau) et la meilleure tranche (orange) ; en bas,
   l'évolution des deux nombres au fil du parcours.
   Conteneur attendu : <div class="anim" data-anim="kadane"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="kadane"]');
  if (!root) return;

  const N = 16;
  root.innerHTML = `
<div class="kd-compteurs">
  <div class="kd-carte kd-cour"><span class="kd-t">somme courante</span><b data-o="cour">0</b><small data-o="fcour"></small></div>
  <div class="kd-carte kd-best"><span class="kd-t">meilleure somme</span><b data-o="best">0</b><small data-o="fbest"></small></div>
</div>
<div class="kd-cadre"><svg class="kd-svg" role="img" aria-label="Les valeurs du tableau en barres ; la tranche courante et la meilleure tranche sont surlignées pendant le parcours"></svg></div>
<p class="kd-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Pas suivant</button>
  <button type="button" class="sec" data-k="auto">Lecture</button>
  <button type="button" class="sec" data-k="neuf">Nouveau tableau</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), info = $('.kd-info'), btnAuto = $('[data-k="auto"]');
  let t, st, hist, timer = 0;

  function nouveau() {
    do t = Array.from({ length: N }, () => Math.round((Math.random() * 2 - 1) * 9 + 1.2));
    while (t.filter(x => x > 0).length < 6 || t.filter(x => x < 0).length < 5);
    st = { i: -1, courant: 0, debut: 0, meilleur: 0, mDebut: 0, mFin: -1, remise: false };
    hist = [];
    maj();
  }
  function pas() {
    if (st.i >= N - 1) return false;
    st.i++;
    const x = t[st.i];
    st.avant = st.courant;
    st.remise = st.courant + x <= 0;
    if (st.remise) { st.courant = 0; st.debut = st.i + 1; }
    else st.courant += x;
    st.record = st.courant > st.meilleur;
    if (st.record) { st.meilleur = st.courant; st.mDebut = st.debut; st.mFin = st.i; }
    hist.push({ c: st.courant, m: st.meilleur, r: st.remise });
    maj();
    return st.i < N - 1;
  }
  const tranche = (a, b) => b >= a ? (a === b ? `case ${a}` : `cases ${a} à ${b}`) : 'tranche vide';
  function maj() {
    $('[data-o="cour"]').textContent = st.courant;
    $('[data-o="best"]').textContent = st.meilleur;
    $('[data-o="fcour"]').textContent = st.i >= 0 ? tranche(st.debut, st.i) : '';
    $('[data-o="fbest"]').textContent = st.mFin >= 0 ? tranche(st.mDebut, st.mFin) : '';
    root.querySelector('.kd-best').classList.toggle('kd-flash', !!st.record);
    root.querySelector('.kd-cour').classList.toggle('kd-zero', !!st.remise);
    if (st.i < 0) info.innerHTML = `On parcourt le tableau une seule fois, de gauche à droite, en tenant à jour <b class="kd-c1">deux nombres</b> seulement.`;
    else {
      const x = t[st.i];
      info.innerHTML = `Case ${st.i}, valeur <b>${x}</b>&nbsp;: ` + (st.remise
        ? `la somme courante tomberait à ${st.avant} + (${x}) = ${st.avant + x}, qui n'est pas positive. Un tel début ne peut que nuire à la suite&nbsp;: on <b class="kd-r">repart de zéro</b>.`
        : `la somme courante passe de ${st.avant} à <b class="kd-c1">${st.courant}</b>.` + (st.record ? ` C'est un <b class="kd-c2">nouveau record</b>.` : '')) +
        (st.i === N - 1 ? ` Fin du parcours&nbsp;: ${N} cases lues, une seule fois chacune.` : '');
    }
    dessiner();
  }

  function dessiner() {
    const W = Math.max(320, Math.min(760, root.clientWidth || 640)), g = 14, bw = (W - 2 * g) / N;
    const Hb = 214, y0 = 116, k = 8, Hs = 92, ys0 = Hb + 26, H = Hb + Hs + 40;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const X = j => g + j * bw;
    let h = '';
    // meilleure tranche : cadre orange, avec son étiquette en haut
    if (st.mFin >= 0) {
      const x = X(st.mDebut) + 1, l = (st.mFin - st.mDebut + 1) * bw - 2;
      h += `<rect x="${x}" y="18" width="${l}" height="${Hb - 38}" rx="10" class="kd-zbest"/>`;
      h += `<text x="${x + l / 2}" y="13" class="kd-lbest">meilleure : ${st.meilleur}</text>`;
    }
    // tranche courante : fond vert d'eau
    if (st.i >= 0 && st.debut <= st.i) h += `<rect x="${X(st.debut) + 4}" y="26" width="${(st.i - st.debut + 1) * bw - 8}" height="${Hb - 54}" rx="8" class="kd-zcour"/>`;
    // axe et barres
    h += `<line x1="${g}" y1="${y0}" x2="${W - g}" y2="${y0}" class="kd-axe"/>`;
    for (let j = 0; j < N; j++) {
      const v = t[j], lu = j <= st.i, hb = Math.max(2, Math.abs(v) * k), x = X(j) + bw * 0.18, lb = bw * 0.64;
      const y = v >= 0 ? y0 - hb : y0;
      h += `<g class="kd-b${lu ? '' : ' kd-nonlu'}${j === st.i ? ' kd-cur' : ''}">` +
           `<rect x="${x}" y="${y}" width="${lb}" height="${hb}" rx="${Math.min(4, lb / 4)}" class="${v >= 0 ? 'kd-pos' : 'kd-neg'}"/>` +
           `<text x="${X(j) + bw / 2}" y="${v >= 0 ? y - 5 : y + hb + 13}" class="kd-v">${v}</text></g>`;
      h += `<text x="${X(j) + bw / 2}" y="${Hb - 4}" class="kd-i${j === st.i ? ' kd-icur' : ''}">${j}</text>`;
      if (j === st.i && st.remise) h += `<text x="${X(j) + bw / 2}" y="${v >= 0 ? y - 18 : y0 - 8}" class="kd-reset">↺ 0</text>`;
    }
    // curseur : sous le tableau, autour du numéro de la case lue
    if (st.i >= 0) { const xc = X(st.i) + bw / 2; h += `<rect x="${xc - 11}" y="${Hb - 17}" width="22" height="18" rx="9" class="kd-curseur"/><text x="${xc}" y="${Hb - 4}" class="kd-i kd-icur">${st.i}</text>`; }
    // évolution des deux nombres
    const vmax = Math.max(10, ...hist.map(p => p.m)), Ys = v => ys0 + Hs - 8 - (Hs - 16) * v / vmax;
    h += `<line x1="${g}" y1="${Ys(0)}" x2="${W - g}" y2="${Ys(0)}" class="kd-axe"/>`;
    h += `<text x="${g}" y="${ys0 - 6}" class="kd-leg"><tspan class="kd-c1">━ somme courante</tspan>   <tspan class="kd-c2">┅ meilleure somme</tspan></text>`;
    if (hist.length) {
      const cx = j => X(j) + bw / 2;
      h += `<polyline points="${hist.map((p, j) => `${cx(j)},${Ys(p.m)}`).join(' ')}" class="kd-lbestl"/>`;
      h += `<polyline points="${hist.map((p, j) => `${cx(j)},${Ys(p.c)}`).join(' ')}" class="kd-lcour"/>`;
      hist.forEach((p, j) => { h += `<circle cx="${cx(j)}" cy="${Ys(p.c)}" r="${j === hist.length - 1 ? 4.5 : 3}" class="${p.r ? 'kd-pr' : 'kd-pc'}"/>`; });
    }
    svg.innerHTML = h;
  }

  function arreter() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Lecture'; }
  $('[data-k="pas"]').addEventListener('click', () => { arreter(); if (st.i >= N - 1) nouveau(); else pas(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { arreter(); return; }
    if (st.i >= N - 1) nouveau();
    btnAuto.textContent = 'Pause'; timer = setInterval(() => { if (!pas()) arreter(); }, 750);
  });
  $('[data-k="neuf"]').addEventListener('click', () => { arreter(); nouveau(); });
  let larg = 0; window.addEventListener('resize', () => { if (Math.abs(root.clientWidth - larg) > 8) { larg = root.clientWidth; dessiner(); } });
  nouveau();
})();
