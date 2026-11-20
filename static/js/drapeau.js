/* Le drapeau hollandais (Dijkstra) : ranger des boules rouges, blanches et
   bleues en un seul passage, par échanges. Trois indices découpent le tableau
   en quatre zones, et l'algorithme est écrit pour que cet invariant reste vrai :
   t[0:r] rouge, t[r:i] blanc, t[i:w] pas encore examiné, t[w:n] bleu.
   Conteneur attendu : <div class="anim" data-anim="drapeau"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="drapeau"]');
  if (!root) return;

  const N = (root.clientWidth || 700) < 560 ? 9 : 14, P = 44, X0 = 40, Y = 100, H = 196, RB = 16;   // moins de boules sur petit écran
  root.innerHTML = `
<div class="dr-defile"><svg class="dr-svg" viewBox="0 0 ${2 * X0 + N * P} ${H}" role="img" aria-label="Boules rouges, blanches et bleues rangées par échanges, avec les quatre zones de l'invariant"></svg></div>
<p class="dr-inv"><span class="dr-z dr-zr">t[0:r] rouges</span> <span class="dr-z dr-zw">t[r:i] blanches</span> <span class="dr-z dr-zi">t[i:w] à examiner</span> <span class="dr-z dr-zb">t[w:n] bleues</span></p>
<p class="dr-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Trier</button>
  <button type="button" class="sec" data-k="neuf">Autres boules</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.dr-message');
  let t, r, i, w, timer = 0, etapes, echanges, ancien = new Map(), sens = 1;

  function neuf() {
    clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Trier';
    t = Array.from({ length: N }, (_, k) => ({ id: k, c: 'RWB'[Math.floor(Math.random() * 3)] }));
    r = 0; i = 0; w = N; etapes = 0; echanges = 0; ancien = new Map();
    msg.innerHTML = `Au départ, r = i = 0 et w = n&nbsp;: les zones rouge, blanche et bleue sont vides, tout le tableau est à examiner. L'invariant est vrai, trivialement.`;
    construire(); placer(0);
  }
  function construire() {
    const grad = (id, c1, c2) => `<radialGradient id="${id}" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
    let h = `<defs>${grad('dr-gR', '#F87171', '#B91C1C')}${grad('dr-gW', '#FFFFFF', '#CBD5E1')}${grad('dr-gB', '#60A5FA', '#1E3A8A')}</defs>`;
    h += `<g class="dr-zones"></g>`;
    for (let k = 0; k < N; k++) h += `<text x="${cx(k)}" y="${Y + 42}" class="dr-idx">${k}</text>`;
    h += `<circle r="${RB + 6}" class="dr-anneau" cx="0" cy="0"/>`;
    for (const b of t) h += `<g class="dr-boule" data-id="${b.id}"><ellipse cx="0" cy="${RB + 3}" rx="${RB * 0.8}" ry="3" class="dr-ombre"/><circle r="${RB}" fill="url(#dr-g${b.c})" class="dr-${b.c}"/></g>`;
    h += `<g class="dr-ptr"></g>`;
    svg.innerHTML = h;
  }
  const cx = k => X0 + k * P + P / 2;
  function placer(cur) {
    sens = -sens;
    t.forEach((b, k) => {
      const g = svg.querySelector(`[data-id="${b.id}"]`), x = cx(k), avant = ancien.get(b.id);
      g.setAttribute('transform', `translate(${x} ${Y})`);
      if (avant !== undefined && avant !== x && g.animate) {           // échange : les deux boules se croisent en arc
        const dy = (x > avant ? -1 : 1) * 34;
        g.animate([{ transform: `translate(${avant}px, ${Y}px)` }, { transform: `translate(${(avant + x) / 2}px, ${Y + dy}px)` }, { transform: `translate(${x}px, ${Y}px)` }],
          { duration: 520, easing: 'ease-in-out' });
      }
      ancien.set(b.id, x);
    });
    const an = svg.querySelector('.dr-anneau');
    an.style.opacity = cur >= 0 ? 1 : 0;
    if (cur >= 0) an.style.transform = `translate(${cx(cur)}px, ${Y}px)`;
    // zones de l'invariant
    const zone = (a, b, cls, lab) => b > a ? `<rect x="${X0 + a * P + 2}" y="${Y - 27}" width="${(b - a) * P - 4}" height="54" rx="12" class="${cls}"/>` +
      ((b - a) * P > 40 ? `<text x="${X0 + (a + b) * P / 2}" y="${Y + 64}" class="dr-lab ${cls}-t">${lab}</text>` : '') : '';
    svg.querySelector('.dr-zones').innerHTML = zone(0, r, 'dr-zr', 'rouges') + zone(r, i, 'dr-zw', 'blanches') + zone(i, w, 'dr-zi', 'à examiner') + zone(w, N, 'dr-zb', 'bleues');
    // indices : une étiquette par position, qui regroupe les indices confondus
    const pos = new Map();
    for (const [nom, k] of [['r', r], ['i', i], ['w', w]]) { if (!pos.has(k)) pos.set(k, []); pos.get(k).push(nom); }
    let h = '';
    for (const [k, noms] of pos) {
      const x = X0 + k * P, larg = 14 + noms.length * 12 + (noms.length - 1) * 20, y0 = 14;
      h += `<line x1="${x}" y1="${y0 + 30}" x2="${x}" y2="${Y - 30}" class="dr-repere"/>` +
           `<rect x="${x - larg / 2}" y="${y0}" width="${larg}" height="24" rx="12" class="dr-pilule"/>` +
           `<path d="M${x - 5} ${y0 + 23}L${x} ${y0 + 30}L${x + 5} ${y0 + 23}z" class="dr-pointe"/>` +
           `<text x="${x}" y="${y0 + 17}" class="dr-nom">${noms.map(n => `<tspan class="dr-n-${n}">${n}</tspan>`).join('<tspan class="dr-egal"> = </tspan>')}</text>`;
    }
    svg.querySelector('.dr-ptr').innerHTML = h;
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
