/* Le drapeau hollandais (Dijkstra) : ranger des boules rouges, blanches et
   bleues en un seul passage, par échanges. Trois indices découpent le tableau
   en quatre zones, et l'algorithme est écrit pour que cet invariant reste vrai :
   t[0:r] rouge, t[r:i] blanc, t[i:w] pas encore examiné, t[w:n] bleu.
   Conteneur attendu : <div class="anim" data-anim="drapeau"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="drapeau"]');
  if (!root) return;

  const N = 14, P = 44, X0 = 24, Y = 70;
  const NOM = { R: 'rouge', W: 'blanche', B: 'bleue' };
  root.innerHTML = `
<div class="dr-defile"><svg class="dr-svg" viewBox="0 0 ${2 * X0 + N * P} 150" role="img" aria-label="Boules rouges, blanches et bleues rangées par échanges, avec les quatre zones de l'invariant"></svg></div>
<p class="dr-inv"><span class="dr-z dr-zr">t[0:r] rouges</span> <span class="dr-z dr-zw">t[r:i] blanches</span> <span class="dr-z dr-zi">t[i:w] pas encore examinées</span> <span class="dr-z dr-zb">t[w:n] bleues</span></p>
<p class="dr-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Trier</button>
  <button type="button" class="sec" data-k="neuf">Autres boules</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.dr-message');
  let t, r, i, w, timer = 0, etapes, echanges;

  function neuf() {
    clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Trier';
    t = Array.from({ length: N }, (_, k) => ({ id: k, c: 'RWB'[Math.floor(Math.random() * 3)] }));
    r = 0; i = 0; w = N; etapes = 0; echanges = 0;
    msg.innerHTML = `Au départ, r = i = 0 et w = n&nbsp;: les zones rouge, blanche et bleue sont vides, tout le tableau est à examiner. L'invariant est vrai, trivialement.`;
    construire(); placer(0);
  }
  function construire() {
    let h = `<rect class="dr-fond" x="0" y="0" width="0" height="0"/>`;
    h += `<g class="dr-zones"></g>`;
    for (const b of t) h += `<g class="dr-boule" data-id="${b.id}"><circle r="17" class="dr-${b.c}"/></g>`;
    h += `<g class="dr-ptr"></g>`;
    svg.innerHTML = h;
  }
  const cx = k => X0 + k * P + P / 2;
  function placer(cur) {
    t.forEach((b, k) => { const g = svg.querySelector(`[data-id="${b.id}"]`); g.style.transform = `translate(${cx(k)}px, ${Y}px)`; g.classList.toggle('dr-cur', k === cur); });
    // zones de l'invariant
    const zone = (a, b, cls, lab) => b > a ? `<rect x="${X0 + a * P + 2}" y="${Y - 26}" width="${(b - a) * P - 4}" height="52" rx="8" class="${cls}"/><text x="${X0 + (a + b) * P / 2}" y="${Y + 46}" class="dr-lab">${lab}</text>` : '';
    svg.querySelector('.dr-zones').innerHTML = zone(0, r, 'dr-zr', 'rouges') + zone(r, i, 'dr-zw', 'blanches') + zone(i, w, 'dr-zi', i < w ? 'à examiner' : '') + zone(w, N, 'dr-zb', 'bleues');
    // indices
    const fl = (k, nom, dy) => { const x = X0 + k * P; return `<line x1="${x}" y1="${Y - 30}" x2="${x}" y2="${Y - 44 - dy}" class="dr-trait"/><text x="${x}" y="${Y - 48 - dy}" class="dr-nom">${nom}</text>`; };
    svg.querySelector('.dr-ptr').innerHTML = fl(r, 'r', 0) + fl(i, 'i', r === i ? 14 : 0) + fl(w, 'w', w === i ? 14 : 0);
  }
  function echanger(a, b) { [t[a], t[b]] = [t[b], t[a]]; if (a !== b) echanges++; }
  function pas() {
    if (i >= w) return false;
    etapes++;
    const c = t[i].c, k = i;
    if (c === 'R') { echanger(r, i); msg.innerHTML = `t[i] est rouge&nbsp;: on l'échange avec t[r], la première blanche, puis r et i avancent. Les deux zones restent bien rangées.`; r++; i++; }
    else if (c === 'W') { msg.innerHTML = `t[i] est blanche&nbsp;: elle est déjà au bon endroit, à la fin de la zone blanche. i avance.`; i++; }
    else { w--; echanger(i, w); msg.innerHTML = `t[i] est bleue&nbsp;: w recule et on l'échange avec t[w], qui n'avait pas encore été examinée. i ne bouge pas&nbsp;: la boule arrivée en i reste à examiner.`; }
    msg.innerHTML += ` Variant w − i = ${w - i}.`;
    if (i >= w) msg.innerHTML = `La zone à examiner est vide (i = w)&nbsp;: l'invariant dit alors que le tableau est rangé, rouges, blanches puis bleues. ${etapes} étapes, ${echanges} échanges, chaque boule examinée une seule fois.`;
    placer(i < w ? i : -1);
    return i < w;
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Trier'; if (i >= w) neuf(); else pas(); });
  $('[data-k="go"]').addEventListener('click', e => {
    if (timer) { clearInterval(timer); timer = 0; e.target.textContent = 'Reprendre'; return; }
    if (i >= w) neuf();
    e.target.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Trier'; } }, 800);
  });
  $('[data-k="neuf"]').addEventListener('click', neuf);
  neuf();
})();
