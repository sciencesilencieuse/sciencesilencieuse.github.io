/* Le complément à deux vu comme un cercle. Sur n bits, les 2^n mots forment un
   cercle : ajouter 1, c'est avancer d'un cran, et après 11…1 on revient à 00…0.
   En complément à deux, les mots qui commencent par 1 représentent les négatifs :
   la moitié droite du cercle porte 0, 1, 2…, la moitié gauche …, −2, −1.
   Une addition est une rotation ; franchir la frontière entre le plus grand
   positif et le plus petit négatif, c'est le dépassement de capacité.
   Conteneur attendu : <div class="anim" data-anim="cercle"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="cercle"]');
  if (!root) return;

  root.innerHTML = `
<div class="ce-grille">
  <svg class="ce-svg" viewBox="-210 -210 420 420" role="img" aria-label="Les mots de n bits disposés en cercle, avec leur valeur en complément à deux"></svg>
  <div class="ce-panneau">
    <p class="ce-message" aria-live="polite"></p>
    <div class="ce-calcul"></div>
  </div>
</div>
<div class="anim-ctrl">
  <label>Mots de <select data-k="n"><option value="3">3 bits</option><option value="4" selected>4 bits</option><option value="5">5 bits</option></select></label>
  <label>a = <input type="number" data-k="a" value="5" step="1"></label>
  <label>b = <input type="number" data-k="b" value="7" step="1"></label>
  <button type="button" data-k="add">Calculer a + b</button>
  <button type="button" class="sec" data-k="opp">Calculer −a</button>
  <label><input type="checkbox" data-k="nat"> lire les mots comme des entiers naturels</label>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.ce-message'), calc = $('.ce-calcul'), selN = $('[data-k="n"]'), inA = $('[data-k="a"]'), inB = $('[data-k="b"]'), cbNat = $('[data-k="nat"]');
  let n = 4, pos = 5, trace = [], timer = 0;

  const M = () => 2 ** n;
  const mot = k => k.toString(2).padStart(n, '0');
  const signe = k => k >= M() / 2 ? k - M() : k;
  const lire = k => cbNat.checked ? k : signe(k);
  const angle = k => (-90 + 360 * k / M()) * Math.PI / 180;
  const borner = x => { const lo = cbNat.checked ? 0 : -M() / 2, hi = cbNat.checked ? M() - 1 : M() / 2 - 1; return Math.max(lo, Math.min(hi, Math.round(+x || 0))); };

  function dessiner() {
    const R = 150, r = 112;
    let h = `<circle r="${R}" class="ce-anneau"/>`;
    // frontières de dépassement
    const front = (k, cls) => { const a = (angle(k) + angle(k - 1 < 0 ? M() - 1 : k - 1)) / 2 + (k === 0 ? Math.PI : 0); return `<line x1="${Math.cos(a) * 70}" y1="${Math.sin(a) * 70}" x2="${Math.cos(a) * 200}" y2="${Math.sin(a) * 200}" class="${cls}"/>`; };
    h += cbNat.checked ? front(0, 'ce-front') : front(M() / 2, 'ce-front');
    // trace de la dernière addition
    if (trace.length > 1) {
      let d = '';
      trace.forEach((k, i) => { const a = angle(k), rr = 92 - Math.min(30, i * 0.6); d += `${i ? 'L' : 'M'}${Math.cos(a) * rr} ${Math.sin(a) * rr}`; });
      h += `<path d="${d}" class="ce-trace"/>`;
    }
    for (let k = 0; k < M(); k++) {
      const a = angle(k), x = Math.cos(a), y = Math.sin(a), v = lire(k), neg = !cbNat.checked && v < 0;
      h += `<g class="ce-pt${k === pos ? ' ce-cur' : ''}${neg ? ' ce-neg' : ''}"><circle cx="${x * R}" cy="${y * R}" r="${n === 5 ? 6 : 8}"/>` +
           `<text x="${x * (R + (n === 5 ? 30 : 34))}" y="${y * (R + (n === 5 ? 30 : 34)) + 4}" class="ce-mot">${mot(k)}</text>` +
           `<text x="${x * r}" y="${y * r + 5}" class="ce-val">${v}</text></g>`;
    }
    const a = angle(pos);
    h += `<line x1="0" y1="0" x2="${Math.cos(a) * 128}" y2="${Math.sin(a) * 128}" class="ce-aiguille"/><circle r="5" class="ce-centre"/>`;
    svg.innerHTML = h;
  }
  function etatInitial() {
    clearInterval(timer); timer = 0;
    n = +selN.value; inA.value = borner(inA.value); inB.value = borner(inB.value);
    pos = ((+inA.value % M()) + M()) % M(); trace = [];
    msg.innerHTML = `Sur ${n} bits, il y a ${M()} mots, rangés en cercle&nbsp;: ajouter 1, c'est avancer d'un cran dans le sens des aiguilles d'une montre. ` +
      (cbNat.checked ? `Lus comme des entiers naturels, ils vont de 0 à ${M() - 1}.` : `En complément à deux, les mots qui commencent par 1 représentent les négatifs&nbsp;: de ${-M() / 2} à ${M() / 2 - 1}.`) +
      ` Le trait rouge marque le passage où le résultat cesse d'être juste.`;
    calc.innerHTML = '';
    dessiner();
  }
  function additionner() {
    clearInterval(timer);
    const a = borner(inA.value), b = Math.round(+inB.value || 0);
    inA.value = a;
    pos = ((a % M()) + M()) % M(); trace = [pos];
    const pasN = Math.abs(b), sens = Math.sign(b);
    let k = 0, franchi = false;
    const frontiere = cbNat.checked ? 0 : M() / 2;
    timer = setInterval(() => {
      if (k >= pasN) {
        clearInterval(timer); timer = 0;
        const res = lire(pos), vrai = a + b;
        msg.innerHTML = `${a} + ${b} = <b>${res}</b>` + (res === vrai ? `&nbsp;: c'est juste.` : `&nbsp;! Le vrai résultat, ${vrai}, ne tient pas sur ${n} bits&nbsp;: en franchissant le trait rouge, on est passé de l'autre côté du cercle. C'est un <b>dépassement de capacité</b>, et le processeur ne le signale pas.`);
        calc.innerHTML = `<pre class="ce-pose">  ${mot(((a % M()) + M()) % M())}   (${a})\n+ ${mot(((b % M()) + M()) % M())}   (${b})\n= ${mot(pos)}   (${res})</pre>`;
        dessiner(); return;
      }
      const avant = pos;
      pos = ((pos + sens) % M() + M()) % M(); trace.push(pos); k++;
      if ((sens > 0 && pos === frontiere) || (sens < 0 && avant === frontiere)) franchi = true;
      msg.innerHTML = `${a} + ${b}&nbsp;: ${k} cran${k > 1 ? 's' : ''} sur ${pasN}…` + (franchi ? ' <b>On a franchi le trait rouge.</b>' : '');
      dessiner();
    }, Math.max(60, Math.min(260, 2400 / Math.max(1, pasN))));
  }
  function oppose() {
    clearInterval(timer); timer = 0; cbNat.checked = false;
    const a = borner(inA.value), k = ((a % M()) + M()) % M(), inv = (~k) & (M() - 1), res = (inv + 1) % M();
    pos = res; trace = [];
    calc.innerHTML = `<pre class="ce-pose">  ${mot(k)}   (${a})\n  ${mot(inv)}   on inverse chaque bit (${signe(inv)})\n+ ${mot(1)}\n= ${mot(res)}   (${signe(res)})</pre>`;
    msg.innerHTML = `Pour obtenir −a, on inverse tous les bits puis on ajoute 1. En effet, a plus son inverse donne ${'1'.repeat(n)}, c'est-à-dire −1&nbsp;: l'inverse de a vaut donc −a − 1, et il suffit d'ajouter 1.` +
      (a === -M() / 2 ? ` Exception&nbsp;: ${a} n'a pas d'opposé sur ${n} bits, car ${-a} ne tient pas&nbsp;; le calcul redonne ${a}.` : '');
    dessiner();
  }
  $('[data-k="add"]').addEventListener('click', additionner);
  $('[data-k="opp"]').addEventListener('click', oppose);
  selN.addEventListener('change', etatInitial);
  cbNat.addEventListener('change', etatInitial);
  inA.addEventListener('change', etatInitial);
  svg.addEventListener('click', e => {
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
    const q = pt.matrixTransform(svg.getScreenCTM().inverse());
    let a = Math.atan2(q.y, q.x) * 180 / Math.PI + 90; if (a < 0) a += 360;
    const k = Math.round(a / 360 * M()) % M();
    inA.value = lire(k); etatInitial();
  });
  etatInitial();
})();
