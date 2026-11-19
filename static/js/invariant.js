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
  <pre class="iv-code"></pre>
  <div class="iv-defile"><table class="iv-table"></table></div>
</div>
<p class="iv-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Un tour de boucle</button>
  <button type="button" class="sec" data-k="tout">Jusqu'à la sortie</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const selA = $('[data-k="algo"]'), tab = $('table'), msg = $('.iv-message'), code = $('.iv-code');
  let A, I, s, lignes, v0, inv0, timer = 0;

  function choisir() {
    A = ALGOS[selA.value];
    [0, 1].forEach(k => { $(`[data-k="l${k}"] span`).textContent = A.e[k]; $(`[data-k="e${k}"]`).value = String(A.def[k]); $(`[data-k="e${k}"]`).max = String(A.max[k]); });
    code.textContent = A.code;
    preparer();
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
    s = A.init(e); v0 = A.variant(s); inv0 = A.inv(s);
    tab.innerHTML = `<tr><th>tour</th>${A.vars.map(v => `<th>${v}</th>`).join('')}<th class="iv-hv">variant ${A.vNom}</th><th class="iv-hi">invariant ${A.iNom}</th></tr>`;
    lignes = 0; ajouter();
    msg.innerHTML = `Avant d'entrer dans la boucle, le variant ${A.vNom} vaut ${v0}, un entier positif, et l'invariant ${A.iNom} vaut <b>${inv0}</b>. C'est l'<b>initialisation</b>.` + (A.cond(s) ? '' : ` La condition de boucle est déjà fausse&nbsp;: on n'entre pas dans la boucle. ` + A.fin(s, I));
  }
  function ajouter() {
    const v = A.variant(s), inv = A.inv(s), larg = v0 > 0n ? Number(v * 1000n / v0) / 10 : 0;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${lignes}</td>${A.vars.map(k => `<td>${s[k]}</td>`).join('')}<td class="iv-hv"><span class="iv-barre" style="--w:${larg}"></span><span class="iv-val">${v}</span></td><td class="iv-hi">${inv}${inv === inv0 ? ' <span class="iv-ok">✓</span>' : ' ✗'}</td>`;
    tab.querySelectorAll('tr.iv-cur').forEach(x => x.classList.remove('iv-cur'));
    tr.classList.add('iv-cur');
    tab.appendChild(tr); lignes++;
    const d = $('.iv-defile'); d.scrollTop = d.scrollHeight;
  }
  function pas() {
    if (!A.cond(s)) { msg.innerHTML = `La condition de boucle est fausse&nbsp;: on sort. ` + A.fin(s, I); return false; }
    const avant = A.variant(s);
    s = A.pas(s); ajouter();
    const apres = A.variant(s);
    if (!A.cond(s)) { msg.innerHTML = `Tour ${lignes - 1}&nbsp;: la condition de boucle devient fausse, on sort. ` + A.fin(s, I); return false; }
    msg.innerHTML = `Tour ${lignes - 1}&nbsp;: le variant passe de ${avant} à ${apres}, il a strictement diminué&nbsp;; l'invariant vaut toujours <b>${inv0}</b>. C'est la <b>conservation</b>.`;
    return true;
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; if (!A.cond(s)) preparer(); else pas(); });
  $('[data-k="tout"]').addEventListener('click', () => { clearInterval(timer); if (!A.cond(s)) preparer(); timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; } }, 450); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selA.addEventListener('change', choisir);
  root.querySelectorAll('input').forEach(x => x.addEventListener('change', preparer));
  choisir();
})();
