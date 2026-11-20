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
  <svg class="ce-svg" viewBox="-230 -230 460 460" role="img" aria-label="Les mots de n bits disposés en cercle, avec leur valeur en complément à deux"></svg>
  <div class="ce-panneau">
    <p class="ce-message" aria-live="polite"></p>
    <div class="ce-calcul" hidden></div>
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
  let n = 4, pos = 5, depart = 5, avance = 0, anim = 0, franchi = false;
  const R = 150, LARG = 34, RW = 196, RA = 116;

  const M = () => 2 ** n;
  const mot = k => k.toString(2).padStart(n, '0');
  const signe = k => k >= M() / 2 ? k - M() : k;
  const lire = k => cbNat.checked ? k : signe(k);
  const ang = t => (-90 + 360 * t / M()) * Math.PI / 180;                 // t peut être fractionnaire
  const P = (t, r) => [Math.cos(ang(t)) * r, Math.sin(ang(t)) * r];
  const borner = x => { const lo = cbNat.checked ? 0 : -M() / 2, hi = cbNat.checked ? M() - 1 : M() / 2 - 1; return Math.max(lo, Math.min(hi, Math.round(+x || 0))); };
  const moins = v => String(v).replace('-', '−');

  function arc(t1, t2, r) {                         // arc de cercle de t1 à t2 (en crans), au rayon r
    const [x1, y1] = P(t1, r), [x2, y2] = P(t2, r), grand = Math.abs(t2 - t1) > M() / 2 ? 1 : 0, sens = t2 > t1 ? 1 : 0;
    return `M${x1.toFixed(2)} ${y1.toFixed(2)}A${r} ${r} 0 ${grand} ${sens} ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  function dessiner() {
    let h = '';
    // l'anneau : moitié des positifs, moitié des négatifs
    if (cbNat.checked) h += `<circle r="${R}" class="ce-bande ce-bpos"/>`;
    else h += `<path d="${arc(-0.5, M() / 2 - 0.5, R)}" class="ce-bande ce-bpos"/><path d="${arc(M() / 2 - 0.5, M() - 0.5, R)}" class="ce-bande ce-bneg"/>`;
    // frontière du dépassement
    const f = cbNat.checked ? -0.5 : M() / 2 - 0.5, [fx1, fy1] = P(f, R - LARG / 2 - 6), [fx2, fy2] = P(f, R + LARG / 2 + 6), [lx, ly] = P(f, RW + 24);
    h += `<line x1="${fx1}" y1="${fy1}" x2="${fx2}" y2="${fy2}" class="ce-front"/><text x="${lx}" y="${ly + 4}" class="ce-front-txt">dépassement</text>`;
    // chemin de l'addition
    if (avance) {
      const t2 = depart + avance, pas = Math.sign(avance), pts = [];
      for (let t = depart; pas > 0 ? t <= t2 + 1e-9 : t >= t2 - 1e-9; t += pas / 8) { const r = RA - Math.abs(t - depart) / M() * 10; pts.push(P(t, r)); }
      h += `<polyline points="${pts.map(p => p.map(c => c.toFixed(1)).join(',')).join(' ')}" class="ce-chemin"/>`;
      const [a1, a2] = pts[pts.length - 1], [b1, b2] = pts[Math.max(0, pts.length - 3)];
      const th = Math.atan2(a2 - b2, a1 - b1);
      h += `<path d="M${a1 + 9 * Math.cos(th)} ${a2 + 9 * Math.sin(th)}L${a1 + 7 * Math.cos(th + 2.3)} ${a2 + 7 * Math.sin(th + 2.3)}L${a1 + 7 * Math.cos(th - 2.3)} ${a2 + 7 * Math.sin(th - 2.3)}z" class="ce-fleche"/>`;
    }
    // les mots
    for (let k = 0; k < M(); k++) {
      const [x, y] = P(k, R), [wx, wy] = P(k, RW), v = lire(k), neg = !cbNat.checked && v < 0, cur = k === pos;
      h += `<g class="ce-pt${cur ? ' ce-cur' : ''}${neg ? ' ce-neg' : ''}" data-k="${k}">` +
           (cur ? `<circle cx="${x}" cy="${y}" r="${n === 5 ? 15 : 19}" class="ce-pastille"/>` : '') +
           `<text x="${x}" y="${y + 5}" class="ce-val${n === 5 ? ' ce-petit' : ''}">${moins(v)}</text>` +
           `<text x="${wx}" y="${wy + 4}" class="ce-mot${n === 5 ? ' ce-petit' : ''}">${mot(k)}</text></g>`;
    }
    // le centre : le mot courant et sa valeur
    const v = lire(pos);
    h += `<text y="-14" class="ce-c-mot">${mot(pos).split('').map((c, i) => `<tspan class="${i === 0 && !cbNat.checked ? (c === '1' ? 'ce-sg1' : 'ce-sg0') : ''}">${c}</tspan>`).join('')}</text>` +
         `<text y="34" class="ce-c-val${!cbNat.checked && v < 0 ? ' ce-neg' : ''}">${moins(v)}</text>` +
         `<text y="58" class="ce-c-leg">${cbNat.checked ? 'entier naturel' : 'complément à deux'}</text>`;
    svg.innerHTML = h;
  }
  function etatInitial() {
    cancelAnimationFrame(anim);
    n = +selN.value; inA.value = borner(inA.value); inB.value = Math.max(-M(), Math.min(M(), Math.round(+inB.value || 0)));
    pos = ((+inA.value % M()) + M()) % M(); depart = pos; avance = 0;
    msg.innerHTML = `Sur ${n} bits, il y a ${M()} mots, rangés en cercle&nbsp;: ajouter 1, c'est avancer d'un cran dans le sens des aiguilles d'une montre. ` +
      (cbNat.checked ? `Lus comme des entiers naturels, ils vont de 0 à ${M() - 1}.` : `En complément à deux, les mots qui commencent par 1 (en rouge) représentent les négatifs, de ${moins(-M() / 2)} à −1.`) +
      ` Cliquer sur un mot le choisit comme valeur de a.`;
    calc.hidden = true;
    dessiner();
  }
  function additionner() {
    cancelAnimationFrame(anim);
    const a = borner(inA.value), b = Math.max(-M(), Math.min(M(), Math.round(+inB.value || 0)));
    inA.value = a; inB.value = b;
    depart = ((a % M()) + M()) % M(); pos = depart; avance = 0; franchi = false; calc.hidden = true;
    const f = cbNat.checked ? 0 : M() / 2, duree = Math.max(500, Math.min(2200, 180 * Math.abs(b))), t0 = performance.now();
    (function etape(t) {
      const x = Math.max(0, Math.min(1, (t - t0) / duree)), lisse = x < 0.5 ? 2 * x * x : 1 - 2 * (1 - x) ** 2;
      avance = b * lisse;
      const crans = Math.trunc(avance + Math.sign(b) * 1e-9);
      pos = ((depart + crans) % M() + M()) % M();
      for (let i = 1; i <= Math.abs(crans); i++) { const k = ((depart + Math.sign(b) * i) % M() + M()) % M(), avant = ((k - Math.sign(b)) % M() + M()) % M(); if ((b > 0 && k === f) || (b < 0 && avant === f)) franchi = true; }
      msg.innerHTML = `${moins(a)} + ${moins(b)}&nbsp;: ${Math.abs(crans)} cran${Math.abs(crans) > 1 ? 's' : ''} sur ${Math.abs(b)}…` + (franchi ? ' <b>On a franchi la frontière du dépassement.</b>' : '');
      dessiner();
      if (x < 1) { anim = requestAnimationFrame(etape); return; }
      const res = lire(pos), vrai = a + b;
      msg.innerHTML = `${moins(a)} + ${moins(b)} = <b>${moins(res)}</b>` + (res === vrai ? `&nbsp;: c'est juste.` : `&nbsp;! Le vrai résultat, ${moins(vrai)}, ne tient pas sur ${n} bits&nbsp;: en franchissant la frontière, on est passé de l'autre côté du cercle. C'est un <b>dépassement de capacité</b>, et le processeur ne le signale pas.`);
      calc.innerHTML = `<pre class="ce-pose">  ${mot(depart)}   (${moins(a)})\n+ ${mot(((b % M()) + M()) % M())}   (${moins(b)})\n= ${mot(pos)}   (${moins(res)})</pre>`;
      calc.hidden = false;
    })(t0);
  }
  function oppose() {
    cancelAnimationFrame(anim); cbNat.checked = false;
    const a = borner(inA.value), k = ((a % M()) + M()) % M(), inv = (~k) & (M() - 1), res = (inv + 1) % M();
    pos = res; depart = res; avance = 0;
    calc.innerHTML = `<pre class="ce-pose">  ${mot(k)}   (${moins(a)})\n  ${mot(inv)}   on inverse chaque bit (${moins(signe(inv))})\n+ ${mot(1)}\n= ${mot(res)}   (${moins(signe(res))})</pre>`;
    calc.hidden = false;
    msg.innerHTML = `Pour obtenir −a, on inverse tous les bits puis on ajoute 1. En effet, a plus son inverse donne ${'1'.repeat(n)}, c'est-à-dire −1&nbsp;: l'inverse de a vaut donc −a − 1, et il suffit d'ajouter 1.` +
      (a === -M() / 2 ? ` Exception&nbsp;: ${moins(a)} n'a pas d'opposé sur ${n} bits, car ${-a} ne tient pas&nbsp;; le calcul redonne ${moins(a)}.` : '');
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
    if (Math.hypot(q.x, q.y) < 80) return;
    let a = Math.atan2(q.y, q.x) * 180 / Math.PI + 90; if (a < 0) a += 360;
    const k = Math.round(a / 360 * M()) % M();
    inA.value = lire(k); etatInitial();
  });
  etatInitial();
})();
