/* Le code de Gray sur un disque de codeur rotatif. Chaque anneau du disque porte
   un bit (l'anneau intérieur, le bit de poids fort) ; des capteurs alignés lisent
   la position du disque. En binaire naturel, plusieurs bits peuvent changer d'un
   cran au suivant : si les capteurs ne basculent pas exactement ensemble, la
   lecture peut être aberrante. En code de Gray, un seul bit change à chaque cran.
   Conteneur attendu : <div class="anim" data-anim="gray"></div>                */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="gray"]');
  if (!root) return;

  root.innerHTML = `
<div class="ax-onglets gr-onglets" role="tablist"><button type="button" data-c="bin" class="ax-on">Binaire naturel</button><button type="button" data-c="gray">Code de Gray</button></div>
<div class="gr-grille">
  <div class="gr-disque-cadre"><svg class="gr-disque" viewBox="-160 -170 320 330" role="img" aria-label="Disque de codeur rotatif : chaque anneau porte un bit"></svg></div>
  <div class="gr-cote"><div class="gr-defile"><table class="gr-table"></table></div></div>
</div>
<p class="gr-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Bits <select data-k="n"><option value="3" selected>3</option><option value="4">4</option></select></label>
  <button type="button" data-k="pas">Cran suivant</button>
  <button type="button" class="sec" data-k="go">Tourner</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), tab = $('table'), msg = $('.gr-message'), btnGo = $('[data-k="go"]');
  const COUL = ['#2563EB', '#DB2777', '#0D9488', '#D97706'];
  let n = 3, code = 'bin', k = 0, timer = 0, rot = 0;

  const M = () => 2 ** n;
  const gray = v => v ^ (v >> 1);
  const mot = (v, c) => (c === 'gray' ? gray(v) : v).toString(2).padStart(n, '0');
  const nbDiff = (a, b) => [...a].filter((c, i) => c !== b[i]).length;

  function secteur(r1, r2, a1, a2) {
    const p = (r, a) => `${(r * Math.sin(a)).toFixed(2)} ${(-r * Math.cos(a)).toFixed(2)}`;
    return `M${p(r1, a1)}L${p(r2, a1)}A${r2} ${r2} 0 0 1 ${p(r2, a2)}L${p(r1, a2)}A${r1} ${r1} 0 0 0 ${p(r1, a1)}z`;
  }
  function construire() {
    const R0 = 34, L = n === 3 ? 34 : 27, da = 2 * Math.PI / M();
    let h = `<g class="gr-rotor">`;
    for (let v = 0; v < M(); v++) {
      const w = mot(v, code), a1 = (v - 0.5) * da, a2 = (v + 0.5) * da;
      for (let b = 0; b < n; b++) {                     // b = 0 : bit de poids fort, anneau intérieur
        const r1 = R0 + b * L, r2 = r1 + L - 2;
        h += `<path d="${secteur(r1, r2, a1, a2)}" class="gr-case${w[b] === '1' ? ' gr-un' : ''}" style="--c:${COUL[b]}"/>`;
      }
      const rt = R0 + n * L + 12, a = v * da;
      h += `<text x="${(rt * Math.sin(a)).toFixed(1)}" y="${(-rt * Math.cos(a) + 4).toFixed(1)}" class="gr-num">${v}</text>`;
    }
    h += `</g>`;
    // le bras de lecture, fixe, en haut
    const Rf = R0 + n * L;
    h += `<line x1="0" y1="-${R0 - 6}" x2="0" y2="-${Rf + 24}" class="gr-bras"/>`;
    for (let b = 0; b < n; b++) h += `<circle cx="0" cy="-${R0 + b * L + (L - 2) / 2}" r="5.5" class="gr-capteur" data-b="${b}"/>`;
    h += `<path d="M-8 -${Rf + 30}L8 -${Rf + 30}L0 -${Rf + 20}z" class="gr-pointe"/>`;
    h += `<text x="0" y="8" class="gr-centre"></text>`;
    svg.innerHTML = h;
  }
  function tableau(avant) {
    let h = `<tr><th>position</th><th>binaire</th><th>Gray</th></tr>`;
    for (let v = 0; v < M(); v++) {
      const prec = (v - 1 + M()) % M();
      const cel = c => { const w = mot(v, c), p = mot(prec, c); return [...w].map((x, i) => `<span class="${x !== p[i] ? 'gr-change' : ''}">${x}</span>`).join(''); };
      h += `<tr class="${v === k ? 'gr-cur' : ''}${code === 'bin' ? ' gr-vb' : ' gr-vg'}"><td>${v}</td><td class="gr-bin">${cel('bin')}</td><td class="gr-gray">${cel('gray')}</td></tr>`;
    }
    tab.innerHTML = h;
    const cur = tab.querySelector('.gr-cur'); if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  function maj(avant) {
    const w = mot(k, code);
    svg.querySelector('.gr-rotor').style.transform = `rotate(${-rot * 360 / M()}deg)`;
    svg.querySelectorAll('.gr-num').forEach(x => { x.style.transform = `rotate(${rot * 360 / M()}deg)`; });
    svg.querySelector('.gr-centre').textContent = w;
    svg.querySelectorAll('.gr-capteur').forEach(c => { const b = +c.dataset.b; c.classList.toggle('gr-allume', w[b] === '1'); c.style.setProperty('--c', COUL[b]); });
    tableau();
    if (avant === undefined) {
      msg.innerHTML = `Le disque tourne sous ${n} capteurs alignés, un par anneau&nbsp;; chacun lit 1 sur une case colorée, 0 sur une case blanche. Ensemble, ils donnent la position du disque, ici ${k}, codée ${w}.`;
      return;
    }
    const a = mot(avant, code), d = nbDiff(a, w);
    const ab = mot(avant, 'bin'), wb = mot(k, 'bin'), ag = mot(avant, 'gray'), wg = mot(k, 'gray');
    msg.innerHTML = code === 'bin'
      ? `De ${avant} à ${k}&nbsp;: <b>${ab} → ${wb}</b>, ${d} bit${d > 1 ? 's changent' : ' change'} à la fois.` + (d > 1 ? ` Si les capteurs ne basculent pas exactement au même instant, la lecture peut passer un court moment par une position sans rapport, par exemple ${(() => { const i = [...ab].findIndex((c, j) => c !== wb[j]); const m = ab.slice(0, i) + wb[i] + ab.slice(i + 1); return `${m}, c'est-à-dire ${parseInt(m, 2)}`; })()}, si le capteur du bit de gauche bascule le premier. En code de Gray, le même pas donne ${ag} → ${wg}&nbsp;: un seul bit change.` : '')
      : `De ${avant} à ${k}&nbsp;: <b>${ag} → ${wg}</b>, un seul bit change, comme à chaque cran, y compris de ${M() - 1} à 0. Une lecture prise pendant la transition donne l'une des deux positions voisines, jamais une position lointaine.`;
  }
  function pas() { const avant = k; k = (k + 1) % M(); rot++; maj(avant); }
  function reset() { clearInterval(timer); timer = 0; btnGo.textContent = 'Tourner'; n = +$('[data-k="n"]').value; k = 0; rot = 0; construire(); maj(); }
  root.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
    code = b.dataset.c; root.querySelectorAll('[data-c]').forEach(x => x.classList.toggle('ax-on', x === b));
    construire(); maj();
  }));
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; btnGo.textContent = 'Tourner'; pas(); });
  btnGo.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Tourner'; return; }
    btnGo.textContent = 'Pause'; pas(); timer = setInterval(pas, 1400);
  });
  $('[data-k="n"]').addEventListener('change', reset);
  reset();
})();
