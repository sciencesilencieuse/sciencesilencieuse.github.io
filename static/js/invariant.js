/* Variant et invariant de boucle, tour par tour. Pour quatre boucles
   classiques, on suit les valeurs des variables à chaque passage, la valeur du
   variant (un entier positif qui décroît strictement) et celle de l'invariant
   (une quantité qui ne change pas), puis la conclusion qu'on en tire en sortie.
   Conteneur attendu : <div class="anim" data-anim="invariant"></div>           */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="invariant"]');
  if (!root) return;

  const pgcd = (x, y) => { x = x < 0n ? -x : x; y = y < 0n ? -y : y; while (y) [x, y] = [y, x % y]; return x; };
  const ALGOS = {
    euclide: {
      nom: 'Algorithme d\'Euclide', e: ['a', 'b'], def: [1071n, 462n], max: [100000n, 100000n],
      code: 'def pgcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a',
      init: ([a, b]) => ({ a, b }), cond: s => s.b !== 0n, pas: s => ({ a: s.b, b: s.a % s.b }),
      vars: ['a', 'b'], variant: s => s.b, vNom: 'b',
      inv: s => pgcd(s.a, s.b), iNom: 'pgcd(a, b)',
      fin: (s, I) => `En sortie, b = 0, et pgcd(a, 0) = a. L'invariant donne donc pgcd(${I.a}, ${I.b}) = pgcd(a, 0) = <b>${s.a}</b>&nbsp;: c'est bien ce que renvoie la fonction.`
    },
    egypte: {
      nom: 'Multiplication égyptienne', e: ['a', 'b'], def: [23n, 5n], max: [100000n, 100000n],
      code: 'def multiplier(a, b):\n    p = 0\n    while a > 0:\n        if a % 2 == 1:\n            p = p + b\n        b = 2 * b\n        a = a // 2\n    return p',
      init: ([a, b]) => ({ a, b, p: 0n }), cond: s => s.a > 0n,
      pas: s => ({ a: s.a / 2n, b: 2n * s.b, p: s.a % 2n === 1n ? s.p + s.b : s.p }),
      vars: ['a', 'b', 'p'], variant: s => s.a, vNom: 'a',
      inv: s => s.a * s.b + s.p, iNom: 'a × b + p',
      fin: (s, I) => `En sortie, a = 0, donc a × b + p = p. L'invariant donne p = ${I.a} × ${I.b} = <b>${s.p}</b>. On n'a fait que des divisions et des multiplications par 2, et des additions&nbsp;: c'est ainsi que multiplie un processeur.`
    },
    puissance: {
      nom: 'Exponentiation rapide', e: ['x', 'n'], def: [3n, 13n], max: [12n, 40n],
      code: 'def puissance(x, n):\n    p = 1\n    while n > 0:\n        if n % 2 == 1:\n            p = p * x\n        x = x * x\n        n = n // 2\n    return p',
      init: ([x, n]) => ({ x, n, p: 1n }), cond: s => s.n > 0n,
      pas: s => ({ x: s.x * s.x, n: s.n / 2n, p: s.n % 2n === 1n ? s.p * s.x : s.p }),
      vars: ['x', 'n', 'p'], variant: s => s.n, vNom: 'n',
      inv: s => s.p * s.x ** s.n, iNom: 'p × xⁿ',
      fin: (s, I) => `En sortie, n = 0, donc p × xⁿ = p. L'invariant donne p = ${I.x}<sup>${I.n}</sup> = <b>${s.p}</b>, en ${lignes - 1} tour${lignes > 2 ? 's' : ''}&nbsp;: autant que de chiffres dans l'écriture binaire de ${I.n}.`
    },
    division: {
      nom: 'Division euclidienne', e: ['a', 'b'], def: [47n, 9n], max: [300n, 300n],
      code: 'def division(a, b):\n    q, r = 0, a\n    while r >= b:\n        q = q + 1\n        r = r - b\n    return q, r',
      init: ([a, b]) => ({ q: 0n, r: a, _b: b, _a: a }), cond: s => s.r >= s._b,
      pas: s => ({ ...s, q: s.q + 1n, r: s.r - s._b }),
      vars: ['q', 'r'], variant: s => s.r, vNom: 'r',
      inv: s => s._b * s.q + s.r, iNom: 'b × q + r',
      fin: (s, I) => `En sortie, r &lt; b, et l'invariant donne ${I.a} = ${I.b} × q + r&nbsp;: q = <b>${s.q}</b> et r = <b>${s.r}</b> sont bien le quotient et le reste.`
    }
  };

  root.innerHTML = `
<div class="anim-ctrl">
  <label>Boucle <select data-k="algo">${Object.entries(ALGOS).map(([k, a]) => `<option value="${k}">${a.nom}</option>`).join('')}</select></label>
  <label data-k="l0"><span></span> <input type="number" data-k="e0" min="0" step="1"></label>
  <label data-k="l1"><span></span> <input type="number" data-k="e1" min="1" step="1"></label>
</div>
<div class="iv-grille">
  <div class="iv-carte iv-code"></div>
  <div class="iv-cote">
    <div class="iv-carte iv-variant">
      <div class="iv-titre">Variant <code class="iv-vnom"></code></div>
      <div class="iv-ligne"><span class="iv-gros iv-vval"></span><span class="iv-chip iv-vchip"></span></div>
      <svg class="iv-graphe" viewBox="0 0 300 96" preserveAspectRatio="none" aria-hidden="true"></svg>
    </div>
    <div class="iv-carte iv-invariant">
      <div class="iv-titre">Invariant <code class="iv-inom"></code></div>
      <div class="iv-ligne"><span class="iv-gros iv-ival"></span><span class="iv-chip iv-ichip"></span></div>
    </div>
  </div>
</div>
<p class="iv-message" aria-live="polite"></p>
<div class="iv-defile"><table class="iv-table"></table></div>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Un tour de boucle</button>
  <button type="button" class="sec" data-k="tout">Jusqu'à la sortie</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const selA = $('[data-k="algo"]'), tab = $('table'), msg = $('.iv-message'), code = $('.iv-code'), graphe = $('.iv-graphe');
  let A, I, s, lignes, v0, inv0, timer = 0, hist = [], L = {};
  const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const colorer = t => esc(t).replace(/\b(def|while|if|return)\b/g, '<span class="iv-kw">$1</span>').replace(/(?<![\w.])(\d+)\b/g, '<span class="iv-nb">$1</span>').replace(/(<span class="iv-kw">def<\/span> )(\w+)/, '$1<span class="iv-fn">$2</span>');

  function choisir() {
    A = ALGOS[selA.value];
    [0, 1].forEach(k => { $(`[data-k="l${k}"] span`).textContent = A.e[k]; $(`[data-k="e${k}"]`).value = String(A.def[k]); $(`[data-k="e${k}"]`).max = String(A.max[k]); });
    const lg = A.code.split('\n'), ind = l => l.match(/^ */)[0].length;
    const w = lg.findIndex(l => l.trim().startsWith('while'));
    L = { w, init: [], corps: [], ret: lg.length - 1 };
    lg.forEach((l, k) => { if (k > 0 && k < w) L.init.push(k); if (k > w && ind(l) > ind(lg[w])) L.corps.push(k); });
    code.innerHTML = lg.map((l, k) => `<div class="iv-l" data-n="${k}"><span class="iv-num">${k + 1}</span><span class="iv-txt">${colorer(l) || ' '}</span>${k === w ? '<span class="iv-cond"></span>' : ''}</div>`).join('');
    $('.iv-vnom').textContent = A.vNom; $('.iv-inom').textContent = A.iNom;
    preparer();
  }
  function surligner(etat) {
    code.querySelectorAll('.iv-l').forEach(x => x.classList.remove('iv-on', 'iv-sortie'));
    const on = k => code.querySelector(`[data-n="${k}"]`).classList.add('iv-on');
    const cond = code.querySelector('.iv-cond');
    cond.className = 'iv-cond'; cond.textContent = '';
    if (etat === 'init') L.init.forEach(on);
    if (etat === 'corps') { on(L.w); L.corps.forEach(on); cond.classList.add('iv-vrai'); cond.textContent = 'vrai'; }
    if (etat === 'sortie') { on(L.w); code.querySelector(`[data-n="${L.ret}"]`).classList.add('iv-on', 'iv-sortie'); cond.classList.add('iv-faux'); cond.textContent = 'faux'; }
  }
  function lire(k) {
    let v; try { v = BigInt(Math.max(0, Math.floor(+$(`[data-k="e${k}"]`).value || 0))); } catch (e) { v = A.def[k]; }
    if (v > A.max[k]) v = A.max[k];
    if (k === 1 && v < 1n && selA.value !== 'egypte') v = 1n;
    $(`[data-k="e${k}"]`).value = String(v);
    return v;
  }
  function preparer() {
    clearInterval(timer); timer = 0;
    const e = [lire(0), lire(1)];
    I = { [A.e[0]]: e[0], [A.e[1]]: e[1] };
    s = A.init(e); v0 = A.variant(s); inv0 = A.inv(s); hist = [];
    tab.innerHTML = `<thead><tr><th>tour</th>${A.vars.map(v => `<th>${v}</th>`).join('')}<th class="iv-hv">${A.vNom}</th><th class="iv-hi">${A.iNom}</th></tr></thead><tbody></tbody>`;
    lignes = 0; ajouter();
    surligner(A.cond(s) ? 'init' : 'sortie');
    msg.innerHTML = `Avant d'entrer dans la boucle, le variant ${A.vNom} vaut ${v0}, un entier positif, et l'invariant ${A.iNom} vaut <b>${inv0}</b>. C'est l'<b>initialisation</b>.` + (A.cond(s) ? '' : ` La condition de boucle est déjà fausse&nbsp;: on n'entre pas dans la boucle. ` + A.fin(s, I));
  }
  function cartes(pulse) {
    const v = A.variant(s), inv = A.inv(s);
    $('.iv-vval').textContent = String(v);
    $('.iv-vchip').textContent = hist.length > 1 ? `${hist[hist.length - 2]} → ${v}` : 'entier ≥ 0';
    $('.iv-ival').textContent = String(inv);
    const ok = inv === inv0, chip = $('.iv-ichip');
    chip.textContent = ok ? (hist.length > 1 ? '✓ inchangé' : 'valeur de départ') : '✗ a changé';
    chip.classList.toggle('iv-ko', !ok);
    if (pulse) { const c = $('.iv-invariant'); c.classList.remove('iv-pulse'); void c.offsetWidth; c.classList.add('iv-pulse'); }
    // la descente du variant : une barre par tour
    const n = hist.length, W = 300, Hh = 96, base = 84, larg = Math.min(30, (W - 8) / Math.max(n, 6)), max = Number(v0) || 1;
    let h = `<line x1="0" y1="${base}" x2="${W}" y2="${base}" class="iv-base"/>`;
    hist.forEach((x, k) => {
      const hh = Math.max(Number(x) / max * (base - 14), x > 0n ? 2 : 0), xx = 4 + k * larg;
      h += `<rect x="${xx + larg * 0.12}" y="${base - hh}" width="${larg * 0.76}" height="${hh}" rx="2" class="iv-barre${k === n - 1 ? ' iv-der' : ''}"/>`;
      if (x === 0n) h += `<circle cx="${xx + larg / 2}" cy="${base}" r="3" class="iv-zero"/>`;
    });
    graphe.innerHTML = h;
  }
  function ajouter() {
    const v = A.variant(s), inv = A.inv(s);
    hist.push(v);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${lignes}</td>${A.vars.map(k => `<td>${s[k]}</td>`).join('')}<td class="iv-hv">${v}</td><td class="iv-hi">${inv}${inv === inv0 ? ' <span class="iv-ok">✓</span>' : ' ✗'}</td>`;
    tab.querySelectorAll('tr.iv-cur').forEach(x => x.classList.remove('iv-cur'));
    tr.classList.add('iv-cur');
    tab.querySelector('tbody').appendChild(tr); lignes++;
    const d = $('.iv-defile'); d.scrollTop = d.scrollHeight;
    cartes(lignes > 1);
  }
  function pas() {
    if (!A.cond(s)) { surligner('sortie'); msg.innerHTML = `La condition de boucle est fausse&nbsp;: on sort. ` + A.fin(s, I); return false; }
    const avant = A.variant(s);
    s = A.pas(s); ajouter();
    const apres = A.variant(s);
    if (!A.cond(s)) { surligner('sortie'); msg.innerHTML = `Tour ${lignes - 1}&nbsp;: la condition de boucle devient fausse, on sort. ` + A.fin(s, I); return false; }
    surligner('corps');
    msg.innerHTML = `Tour ${lignes - 1}&nbsp;: le variant passe de ${avant} à ${apres}, il a strictement diminué&nbsp;; l'invariant vaut toujours <b>${inv0}</b>. C'est la <b>conservation</b>.`;
    return true;
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; if (!A.cond(s)) preparer(); else pas(); });
  $('[data-k="tout"]').addEventListener('click', () => { clearInterval(timer); if (!A.cond(s)) preparer(); timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; } }, 550); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selA.addEventListener('change', choisir);
  root.querySelectorAll('input').forEach(x => x.addEventListener('change', preparer));
  choisir();
})();
