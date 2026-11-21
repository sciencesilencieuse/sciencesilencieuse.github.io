+++
title = "L'hypothèse de Riemann"
date = 2026-11-21T10:00:00+01:00
weight = 5
+++

<style>
#def
{
    background-color:#DCEFFE;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#theo
{
    background-color:#FBE1DE;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#preuve
{
    background-color:#EAEAEA;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
details > summary:first-of-type {
  display: list-item;
  cursor: pointer;
}
details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
.svg-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.legende
{
    text-align: center;
    font-size: 0.9em;
    color: #64748b;
    font-style: italic;
    margin-top: -0.6em;
}
.rz-ctl
{
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
    justify-content: center;
    align-items: center;
    margin: 6px 0 4px;
    font-size: 0.92em;
}
.rz-ctl label
{
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-weight: normal;
}
.rz-out
{
    font-size: 0.9em;
    color: #334155;
    margin: 4px auto 0;
    max-width: 600px;
    line-height: 1.5;
    min-height: 2.4em;
}
.encadre
{
    max-width: 42rem;
    margin: 1.4em auto;
    border: 2px solid #006C65;
    border-radius: 12px;
    background: #F3F8F7;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.encadre-titre
{
    font-weight: bold;
    color: #006C65;
    margin-bottom: 0.3em;
}
.encadre > details > summary.encadre-titre
{
    cursor: pointer;
    margin-bottom: 0.3em;
}
.encadre > details[open] > summary.encadre-titre
{
    margin-bottom: 0.6em;
}
.fig-btn
{
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    margin: 0;
    padding: 0.4em 1em;
    font: inherit;
    font-size: 0.9em;
    line-height: 1.2;
    color: #334155;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 999px;
    cursor: pointer;
    transition: background-color .15s, border-color .15s, color .15s;
}
.fig-btn:hover
{
    color: #004D80;
    background: #f1f5f9;
    border-color: #94a3b8;
}
.fig-btn:active
{
    background: #e2e8f0;
}
.fig-btn:focus-visible
{
    outline: 2px solid #004D80;
    outline-offset: 2px;
}
.fig-btn svg
{
    flex: none;
    fill: currentColor;
}
.fig-range
{
    accent-color: #004D80;
}
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
ul, ol
{
margin-top:0em;
margin-bottom:0.5em;
}
@media (max-width: 480px)
{
    #body-inner .anchor { display: none; }
}
mjx-container[display="true"]
{
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
}
h1{
overflow-x:auto;
}
</style>

<h1>L'hypothèse de Riemann</h1>
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Les zéros d'une fonction complexe, et la façon dont les nombres premiers s'y cachent.</i></p>

Les nombres premiers $2, 3, 5, 7, 11, 13, \dots$ échappent à toute formule simple qui donnerait le suivant. Pourtant, vus de loin, ils sont très réguliers&nbsp;: il y en a environ $x/\ln x$ parmi les entiers inférieurs à $x$. En 1859, Bernhard Riemann a découvert que cette régularité, et surtout les écarts à cette régularité, se lisent dans les **zéros d'une fonction de variable complexe**, la fonction $\zeta$. Il a conjecturé que ces zéros sont tous alignés sur une même droite. Cette **hypothèse de Riemann** figure parmi les 23 problèmes proposés par Hilbert en 1900 et parmi les sept problèmes du millénaire de l'Institut Clay (un million de dollars). Elle n'est pas, à ce jour, démontrée de façon admise par la communauté&nbsp;; [une annonce de démonstration faite le 20 novembre 2026](#actualite) est en cours d'examen.

Le chemin qui mène à l'énoncé passe par trois idées&nbsp;:
<ol>
<li><a href="#fonction"><b>Une série, un produit</b></a>&nbsp;: la fonction $\zeta$ s'écrit comme une somme sur tous les entiers et comme un produit sur tous les nombres premiers.</li>
<li><a href="#prolongement"><b>Prolonger une fonction</b></a>&nbsp;: la série n'existe que dans un demi-plan. Deux exemples simples montrent comment la fonction se prolonge au-delà, puis on prolonge $\zeta$.</li>
<li><a href="#zeros"><b>Les zéros</b></a> et <a href="#formule"><b>la formule qui les relie aux nombres premiers</b></a>&nbsp;: chaque zéro est une oscillation dans la répartition des premiers.</li>
</ol>


<script>
window.RZ = (function () {
  var NS = 'http://www.w3.org/2000/svg';
  function $(id) { return document.getElementById(id); }
  function el(tag, at, parent) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); if (parent) parent.appendChild(e); return e; }
  function put(e, at) { for (var k in at) e.setAttribute(k, typeof at[k] === 'number' ? at[k].toFixed(2) : at[k]); }
  function pt(svg, ev) { var p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  function drag(svg, handle, onmove) {
    handle.style.touchAction = 'none'; handle.style.cursor = 'grab';
    handle.addEventListener('pointerdown', function (ev) {
      ev.preventDefault(); handle.style.cursor = 'grabbing';
      function mv(e) { onmove(pt(svg, e)); e.preventDefault(); }
      function up() { handle.style.cursor = 'grab'; document.removeEventListener('pointermove', mv); document.removeEventListener('pointerup', up); document.removeEventListener('pointercancel', up); }
      document.addEventListener('pointermove', mv); document.addEventListener('pointerup', up); document.addEventListener('pointercancel', up);
      onmove(pt(svg, ev));
    });
  }
  function fmt(x, d) { if (!isFinite(x)) return x > 0 ? '+∞' : '−∞'; var s = (d === undefined ? 2 : d); return x.toFixed(s).replace('.', ',').replace('-', '−'); }
  function cfmt(re, im, d) { d = d === undefined ? 3 : d; return fmt(re, d) + (im < 0 ? ' − ' : ' + ') + fmt(Math.abs(im), d) + ' i'; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // crée le svg d'une figure dans le conteneur id
  function fig(id, W, H, label) {
    var box = $(id), svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': label });
    svg.style.cssText = 'width:100%;max-width:' + W + 'px;height:auto;touch-action:manipulation;';
    box.insertBefore(svg, box.firstChild); return svg;
  }
  // texte SVG simple
  function txt(parent, x, y, s, o) {
    o = o || {};
    var t = el('text', { x: x, y: y, 'font-size': o.size || 13, fill: o.fill || '#334155', 'text-anchor': o.anchor || 'start', 'font-family': "Georgia,'Times New Roman',serif" }, parent);
    if (o.italic) t.setAttribute('font-style', 'italic'); if (o.bold) t.setAttribute('font-weight', 'bold');
    t.innerHTML = s; return t;
  }
  function when(node, cb) {
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { cb(e[0].isIntersecting); }, { threshold: 0.25 }).observe(node);
    else cb(true);
  }
  var ICO_PAUSE = '<svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><rect x="2" y="1.5" width="2.8" height="9" rx="0.8"/><rect x="7.2" y="1.5" width="2.8" height="9" rx="0.8"/></svg>';
  var ICO_PLAY = '<svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><path d="M3 1.6 L10.4 6 L3 10.4 Z"/></svg>';
  // bouton lecture/pause ; step(dt) est appelé tant que la lecture est active et que la figure est visible
  function player(btn, node, step, startOn) {
    var run = !!startOn && !reduce, vis = false, raf = null, last = null;
    function lab() { btn.innerHTML = run ? ICO_PAUSE + '<span>Pause</span>' : ICO_PLAY + '<span>Animer</span>'; }
    function loop(ts) { raf = null; if (!run || !vis) { last = null; return; } if (last !== null) step(Math.min(0.1, (ts - last) / 1000)); last = ts; raf = requestAnimationFrame(loop); }
    function kick() { if (!raf && run && vis) raf = requestAnimationFrame(loop); }
    btn.addEventListener('click', function () { run = !run; last = null; lab(); kick(); });
    when(node, function (v) { vis = v; last = null; kick(); });
    lab();
    return { stop: function () { run = false; lab(); }, start: function () { run = true; last = null; lab(); kick(); } };
  }
  // ---- ζ de Riemann par Euler-Maclaurin (valable pour tout s ≠ 1) ----
  var BN = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730, 7 / 6, -3617 / 510, 43867 / 798, -174611 / 330];
  var FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000];
  function zetaEM(sr, si) {
    var N = Math.max(14, Math.ceil(Math.abs(si) / 2 + 12 + Math.abs(Math.min(0, sr)) / 2)), re = 0, im = 0, n, l, a, c, sn;
    for (n = 1; n < N; n++) { l = Math.log(n); a = Math.exp(-sr * l); c = Math.cos(si * l); sn = Math.sin(si * l); re += a * c; im -= a * sn; }
    var lN = Math.log(N), aN = Math.exp(-sr * lN), cN = Math.cos(si * lN), sN = Math.sin(si * lN);   // N^{-s} = aN (cN - i sN)
    var pr = aN * cN, pi_ = -aN * sN;                                                                // N^{-s}
    re += 0.5 * pr; im += 0.5 * pi_;
    // N^{1-s}/(s-1)
    var qr = N * pr, qi = N * pi_, dr = sr - 1, di = si, dd = dr * dr + di * di;
    re += (qr * dr + qi * di) / dd; im += (qi * dr - qr * di) / dd;
    // termes de Bernoulli : B_2k/(2k)! * s(s+1)...(s+2k-2) * N^{-s-2k+1}
    var tr = sr, ti = si, Nk = 1 / N, k, m, nr, ni;
    for (k = 1; k <= 10; k++) {
      if (k > 1) { for (m = 2 * k - 3; m <= 2 * k - 2; m++) { nr = tr * (sr + m) - ti * si; ni = tr * si + ti * (sr + m); tr = nr; ti = ni; } Nk /= N * N; }
      var f = BN[k - 1] / FACT[2 * k] * Nk;
      re += f * (tr * pr - ti * pi_); im += f * (tr * pi_ + ti * pr);
    }
    return [re, im];
  }
  // Γ complexe (Lanczos), pour Re z >= 0,5
  function cgamma(zr, zi) {
    zr -= 1; var xr = GC[0], xi = 0, i, d, tr = zr + 7.5;
    for (i = 1; i < 9; i++) { d = (zr + i) * (zr + i) + zi * zi; xr += GC[i] * (zr + i) / d; xi -= GC[i] * zi / d; }
    var lr = Math.log(Math.hypot(tr, zi)), li = Math.atan2(zi, tr);                 // ln t
    var er = (zr + 0.5) * lr - zi * li - tr, ei = (zr + 0.5) * li + zi * lr - zi;     // (z+1/2) ln t - t
    var m = Math.sqrt(2 * Math.PI) * Math.exp(er), cr = m * Math.cos(ei), ci = m * Math.sin(ei);
    return [cr * xr - ci * xi, cr * xi + ci * xr];
  }
  // ζ(s) pour tout s ≠ 1 : Euler-Maclaurin à droite, équation fonctionnelle pour Re s < −0,5
  function zeta(sr, si) {
    if (sr >= -0.5) return zetaEM(sr, si);
    var z1 = zetaEM(1 - sr, -si), g = cgamma(1 - sr, -si);
    var m = Math.exp(sr * Math.LN2 + (sr - 1) * Math.log(Math.PI)), ph = si * (Math.LN2 + Math.log(Math.PI)), fr = m * Math.cos(ph), fi = m * Math.sin(ph);
    var a = Math.PI * sr / 2, b = Math.PI * si / 2, sr_ = Math.sin(a) * Math.cosh(b), si_ = Math.cos(a) * Math.sinh(b);
    var pr = fr * sr_ - fi * si_, pi = fr * si_ + fi * sr_;
    var qr = pr * g[0] - pi * g[1], qi = pr * g[1] + pi * g[0];
    return [qr * z1[0] - qi * z1[1], qr * z1[1] + qi * z1[0]];
  }
  function zr(x) { return zeta(x, 0)[0]; }
  // Γ réel (Lanczos)
  var GC = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  function gamma(x) {
    if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
    x -= 1; var a = GC[0], t = x + 7.5, i; for (i = 1; i < 9; i++) a += GC[i] / (x + i);
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
  }
  // premiers et zéros
  function sieve(n) { var s = new Uint8Array(n + 1), p = [], i, j; for (i = 2; i <= n; i++) { if (!s[i]) { p.push(i); for (j = i * i; j <= n; j += i) s[j] = 1; } } return p; }
  var ZEROS = [14.134725, 21.022040, 25.010858, 30.424876, 32.935062, 37.586178, 40.918719, 43.327073, 48.005151, 49.773832, 52.970321, 56.446248, 59.347044, 60.831779, 65.112544, 67.079811, 69.546402, 72.067158, 75.704691, 77.144840, 79.337375, 82.910381, 84.735493, 87.425275, 88.809111, 92.491899, 94.651344, 95.870634, 98.831194, 101.317851, 103.725538, 105.446623, 107.168611, 111.029536, 111.874659, 114.320221, 116.226680, 118.790783, 121.370125, 122.946829, 124.256819, 127.516684, 129.578704, 131.087689, 133.497737, 134.756510, 138.116042, 139.736209, 141.123707, 143.111846, 146.000982, 147.422765, 150.053520, 150.925258, 153.024694, 156.112909, 157.597592, 158.849988, 161.188964, 163.030710, 165.537069, 167.184440, 169.094515, 169.911976, 173.411537, 174.754192, 176.441434, 178.377408, 179.916484, 182.207078, 184.874468, 185.598784, 187.228923, 189.416159, 192.026656, 193.079727, 195.265397, 196.876482, 198.015310];
  return { $: $, el: el, put: put, pt: pt, drag: drag, fmt: fmt, cfmt: cfmt, clamp: clamp, fig: fig, txt: txt, when: when, player: player, reduce: reduce, zeta: zeta, zr: zr, gamma: gamma, sieve: sieve, ZEROS: ZEROS };
})();
</script>

## Une série, un produit {#fonction}

Le point de départ est la somme des inverses des puissances des entiers. Pour $s = 1$, c'est la série harmonique, qui diverge. Pour $s = 2$, Euler a montré en 1735 qu'elle vaut $\pi^2/6$. Pour un nombre complexe $s = \sigma + \mathrm{i}t$ (avec $\sigma$ et $t$ réels), on pose $n^{-s} = n^{-\sigma}\\,\mathrm{e}^{-\mathrm{i}t\ln n}$&nbsp;: c'est un nombre complexe de module $n^{-\sigma}$ dont l'argument $-t\ln n$ tourne quand $n$ varie. Le module ne dépend que de la partie réelle $\sigma$. Comme la série $\sum n^{-\sigma}$ converge pour $\sigma > 1$, la série converge absolument dans tout le demi-plan $\operatorname{Re}(s) > 1$.

<div id="def">

**Fonction zêta de Riemann**

Pour $\operatorname{Re}(s) > 1$,

$$\zeta(s) = \sum\_{n=1}^{+\infty} \frac{1}{n^s}.$$

</div>

Euler a remarqué en 1737 que cette somme sur *tous les entiers* est aussi un produit sur *tous les nombres premiers*&nbsp;:

<div id="theo">

**Produit d'Euler**

Pour $\operatorname{Re}(s) > 1$,

$$\zeta(s) = \prod\_{p\ \text{premier}} \frac{1}{1 - p^{-s}} = \frac{1}{1 - 2^{-s}} \cdot \frac{1}{1 - 3^{-s}} \cdot \frac{1}{1 - 5^{-s}} \cdots$$

</div>

L'idée se voit sur un crible. Multiplions $\zeta(s)$ par $1 - 2^{-s}$&nbsp;:

$$\bigl(1 - 2^{-s}\bigr)\zeta(s) = \sum\_{n \ge 1} n^{-s} - \sum\_{n \ge 1} (2n)^{-s}.$$

Le second terme est la somme des termes d'indice pair&nbsp;: ils disparaissent, et il ne reste que les termes d'indice impair. Multiplions ensuite par $1 - 3^{-s}$&nbsp;: les termes dont l'indice est multiple de $3$ disparaissent à leur tour. Multiplier par $1 - p^{-s}$ pour chaque nombre premier $p$ appliqué dans l'ordre, c'est le **crible d'Ératosthène** appliqué aux termes d'une somme. Après avoir éliminé les multiples des $k$ premiers nombres premiers, il ne reste que le terme $1$ et les termes d'indice sans facteur premier parmi ces $k$ nombres, qui sont de plus en plus petits. À la limite, il ne reste que $1$&nbsp;: $\zeta(s)\prod_p (1 - p^{-s}) = 1$.

<div class="svg-container" id="rz1">
<div class="rz-ctl">
<label><span>exposant <i>s</i></span> <input type="range" class="fig-range" id="rz1-s" min="1.05" max="4" step="0.05" value="2" style="width:120px;margin:0;"> <span id="rz1-sv" style="min-width:2.6em;">2,00</span></label>
<label><span>premiers éliminés</span> <input type="range" class="fig-range" id="rz1-k" min="0" max="25" step="1" value="0" style="width:150px;margin:0;"> <span id="rz1-kv" style="min-width:1.6em;">0</span></label>
<button type="button" class="fig-btn" id="rz1-go"></button>
</div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz1'); if (!box) return;
  var svg = R.fig('rz1', 600, 330, "Le tamis d'Euler : on barre dans la grille des entiers de 1 à 64 les multiples des premiers nombres premiers, 2, puis 3, puis 5, et ainsi de suite. À droite, le produit des facteurs (1 − p^(−s))^(−1) pour les k premiers nombres premiers se rapproche de la valeur de la série ζ(s).");
  var P = R.sieve(200), K = 25, CELL = 34, GX = 14, GY = 32;
  var PAL = ['#f6dfb8', '#cfe1ef', '#f2d0e0', '#cde7e3'], i, n;
  var spf = []; for (n = 1; n <= 64; n++) { var f = 0; if (n > 1) { f = 0; while (n % P[f]) f++; } spf[n] = n === 1 ? -1 : f; }
  R.txt(svg, 14, 20, "les entiers de 1 à 64 : on barre les multiples des <tspan font-style='normal'>k</tspan> premiers nombres premiers", { size: 12, fill: '#64748b', italic: true });
  var cells = [], labs = [];
  for (n = 1; n <= 64; n++) {
    var cx = GX + ((n - 1) % 8) * CELL, cy = GY + Math.floor((n - 1) / 8) * CELL;
    cells[n] = R.el('rect', { x: cx + 1.5, y: cy + 1.5, width: CELL - 3, height: CELL - 3, rx: 5, fill: '#fff', stroke: '#006C65', 'stroke-width': 1.2 }, svg);
    labs[n] = R.txt(svg, cx + CELL / 2, cy + CELL / 2 + 4.5, String(n), { size: 13, anchor: 'middle' });
  }
  // zone de tracé
  var X0 = 345, X1 = 585, Y0 = 52, Y1 = 232;
  R.el('line', { x1: X0, y1: Y1, x2: X1 + 4, y2: Y1, stroke: '#94a3b8' }, svg); R.el('line', { x1: X0, y1: Y1, x2: X0, y2: Y0 - 6, stroke: '#94a3b8' }, svg);
  R.txt(svg, X0, Y0 - 16, "produit sur les <tspan font-style='italic'>k</tspan> premiers premiers", { size: 12, fill: '#64748b', italic: true });
  R.txt(svg, X1 + 12, Y1 + 4, "<tspan font-style='italic'>k</tspan>", { size: 12, anchor: 'end', fill: '#64748b' });
  [0, 5, 10, 15, 20, 25].forEach(function (k) { var x = X0 + k * (X1 - X0) / K; R.el('line', { x1: x, y1: Y1, x2: x, y2: Y1 + 4, stroke: '#94a3b8' }, svg); R.txt(svg, x, Y1 + 15, String(k), { size: 11, anchor: 'middle', fill: '#64748b' }); });
  var zline = R.el('line', { x1: X0, x2: X1, stroke: '#970E53', 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, svg);
  var zlab = R.txt(svg, X1, 0, '', { size: 12.5, anchor: 'end', fill: '#970E53' });
  var curve = R.el('path', { fill: 'none', stroke: '#004D80', 'stroke-width': 2 }, svg), dots = R.el('g', {}, svg);
  var mark = R.el('circle', { r: 5, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.5 }, svg);
  var t1 = R.txt(svg, 345, 268, '', { size: 13.5 }), t2 = R.txt(svg, 345, 288, '', { size: 13.5 }), t3 = R.txt(svg, 345, 310, '', { size: 13.5, fill: '#006C65' });
  var s = 2, k = 0;
  function prod(s, m) { var v = 1, j; for (j = 0; j < m; j++) v /= 1 - Math.pow(P[j], -s); return v; }
  function draw() {
    var z = R.zr(s), ymax = z * 1.06, d = '', j;
    function Y(v) { return Y1 - (v - 1) / (ymax - 1) * (Y1 - Y0); }
    function X(m) { return X0 + m * (X1 - X0) / K; }
    for (j = 0; j <= K; j++) d += (j ? 'L' : 'M') + X(j).toFixed(1) + ',' + Y(prod(s, j)).toFixed(1);
    curve.setAttribute('d', d);
    R.put(zline, { y1: Y(z), y2: Y(z) }); R.put(zlab, { y: Y(z) - 6 }); zlab.innerHTML = "<tspan font-style='italic'>ζ</tspan>(<tspan font-style='italic'>s</tspan>) = " + R.fmt(z, 3);
    dots.innerHTML = ''; for (j = 0; j <= K; j++) R.el('circle', { cx: X(j), cy: Y(prod(s, j)), r: j === k ? 0 : 2.2, fill: '#004D80', 'fill-opacity': 0.55 }, dots);
    var pk = prod(s, k); R.put(mark, { cx: X(k), cy: Y(pk) });
    for (n = 1; n <= 64; n++) {
      var gone = spf[n] >= 0 && spf[n] < k, fresh = spf[n] >= 0 && spf[n] === k - 1;
      R.put(cells[n], { fill: gone ? (PAL[spf[n]] || '#e6eaef') : '#fff', stroke: fresh ? '#970E53' : (gone ? '#cbd5e1' : '#006C65'), 'stroke-width': fresh ? 2.2 : 1.2 });
      R.put(labs[n], { fill: gone ? '#a7b0bb' : '#1e293b' });
    }
    t1.innerHTML = k === 0 ? "aucun premier : le produit vaut 1" : "premiers utilisés : 2" + (k > 1 ? ', 3' : '') + (k > 2 ? ', 5' : '') + (k > 3 ? ', 7' : '') + (k > 4 ? ', …, ' + P[k - 1] : '');
    t2.innerHTML = "produit = " + R.fmt(pk, 4) + "   (ζ(<tspan font-style='italic'>s</tspan>) = " + R.fmt(z, 4) + ")";
    t3.innerHTML = "somme restante ζ/produit = " + R.fmt(z / pk, 4) + " → 1";
    R.$('rz1-sv').textContent = R.fmt(s, 2); R.$('rz1-kv').textContent = k;
    R.$('rz1-k').value = k;
  }
  var acc = 0, hold = 0;
  var pl = R.player(R.$('rz1-go'), box, function (dt) {
    if (k >= K) { hold += dt; if (hold > 1.8) { k = 0; hold = 0; acc = 0; draw(); } return; }
    acc += dt; if (acc > 0.7) { acc = 0; k++; draw(); }
  }, true);
  R.$('rz1-s').addEventListener('input', function () { s = parseFloat(this.value); draw(); });
  R.$('rz1-k').addEventListener('input', function () { k = parseInt(this.value, 10); pl.stop(); draw(); });
  draw();
})();
</script>
<p class="legende">Le crible d'Euler. À gauche, les entiers de $1$ à $64$&nbsp;: à chaque étape, on barre les multiples d'un nouveau nombre premier (couleur de ce premier). À droite, le produit des $k$ premiers facteurs $\frac{1}{1 - p^{-s}}$ se rapproche de la valeur de la série (en magenta). La somme restante $\zeta(s) / \text{produit}$ est ce qu'il reste des termes de la série&nbsp;: elle tend vers $1$. Plus $s$ est proche de $1$, plus la convergence est lente.</p>

<div id="preuve">
<details>
<summary>le calcul&nbsp;: pourquoi la somme sur les entiers est un produit sur les premiers</summary>

On part d'un exemple avec deux nombres premiers seulement, puis on passe à tous. Soit $s$ un nombre complexe de partie réelle $\sigma > 1$.

**Étape 1&nbsp;: un facteur par nombre premier.** Pour un nombre premier $p$, le nombre $p^{-s}$ est de module $p^{-\sigma} < 1$. La série géométrique de raison $p^{-s}$ converge donc, et

$$\frac{1}{1 - p^{-s}} = 1 + p^{-s} + p^{-2s} + p^{-3s} + \cdots = \sum\_{k=0}^{+\infty} \bigl(p^k\bigr)^{-s}.$$

Ce facteur contient les termes $n^{-s}$ de *toutes les puissances de $p$* ($n = 1, p, p^2, p^3, \dots$), et de rien d'autre.

**Étape 2&nbsp;: multiplier deux facteurs.** Prenons $p = 2$ et $p = 3$. En développant le produit des deux séries, chaque terme de la première est multiplié par chaque terme de la seconde&nbsp;:

$$\frac{1}{1 - 2^{-s}} \cdot \frac{1}{1 - 3^{-s}} = \Bigl(\sum\_{a \ge 0} \bigl(2^a\bigr)^{-s}\Bigr)\Bigl(\sum\_{b \ge 0} \bigl(3^b\bigr)^{-s}\Bigr) = \sum\_{a \ge 0}\sum\_{b \ge 0} \bigl(2^a 3^b\bigr)^{-s},$$

car $\bigl(2^a\bigr)^{-s}\bigl(3^b\bigr)^{-s} = \bigl(2^a 3^b\bigr)^{-s}$. Les termes obtenus sont donc les $n^{-s}$ pour les entiers $n = 2^a 3^b$, rangés ci-dessous dans un tableau (une ligne par $a$, une colonne par $b$)&nbsp;:

<div style="overflow-x:auto;">
<table style="margin:0.8em auto;border-collapse:collapse;text-align:center;">
<tr><th style="padding:4px 14px;"></th><th style="padding:4px 14px;">$b = 0$</th><th style="padding:4px 14px;">$b = 1$</th><th style="padding:4px 14px;">$b = 2$</th><th style="padding:4px 14px;">$b = 3$</th></tr>
<tr><th style="padding:4px 14px;">$a = 0$</th><td style="padding:4px 14px;border:1px solid #cbd5e1;">$1$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$3$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$9$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$27$</td></tr>
<tr><th style="padding:4px 14px;">$a = 1$</th><td style="padding:4px 14px;border:1px solid #cbd5e1;">$2$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$6$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$18$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$54$</td></tr>
<tr><th style="padding:4px 14px;">$a = 2$</th><td style="padding:4px 14px;border:1px solid #cbd5e1;">$4$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;background:#fde68a;">$12$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$36$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$108$</td></tr>
<tr><th style="padding:4px 14px;">$a = 3$</th><td style="padding:4px 14px;border:1px solid #cbd5e1;">$8$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$24$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$72$</td><td style="padding:4px 14px;border:1px solid #cbd5e1;">$216$</td></tr>
</table>
</div>

Chaque case contient un entier $n = 2^a 3^b$, c'est-à-dire un entier dont les seuls facteurs premiers sont $2$ et $3$&nbsp;; le terme correspondant de la somme est $n^{-s}$. Le développement «&nbsp;terme à terme&nbsp;» est permis parce que les deux séries sont absolument convergentes&nbsp;: on peut alors les multiplier et regrouper les termes dans n'importe quel ordre.

**Étape 3&nbsp;: chaque entier apparaît une fois, et une seule.** Regardons l'entier $12 = 2^2 \cdot 3$ (case colorée). Il n'a qu'une seule écriture sous la forme $2^a 3^b$, avec $a = 2$ et $b = 1$&nbsp;: il figure donc dans une seule case. C'est l'**unicité de la décomposition en facteurs premiers**, et c'est elle qui garantit que la somme obtenue est exactement la somme des $n^{-s}$, avec un coefficient $1$ devant chaque terme&nbsp;:

$$\frac{1}{1 - 2^{-s}} \cdot \frac{1}{1 - 3^{-s}} = \sum\_{n\ :\ \text{les facteurs premiers de } n \text{ sont } 2 \text{ ou } 3} n^{-s}.$$

Si un entier pouvait s'écrire de deux façons, il apparaîtrait deux fois et la formule serait fausse. (Il existe des systèmes de nombres où la décomposition n'est pas unique, par exemple $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$ dans les entiers de $\mathbb{Q}(\sqrt{-5})$&nbsp;: le produit d'Euler y prend une autre forme.)

*Vérification pour $s = 2$.* Le produit vaut $\frac{1}{1 - 1/4} \cdot \frac{1}{1 - 1/9} = \frac{4}{3} \cdot \frac{9}{8} = \frac{3}{2}$. La somme des cases du tableau est $1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \frac{1}{36} + \frac{1}{64} + \frac{1}{81} + \cdots$, dont les sept termes écrits valent déjà $1{,}48$ environ, et qui tend bien vers $1{,}5$.

**Étape 4&nbsp;: tous les nombres premiers jusqu'à $P$.** Le même raisonnement s'applique à un nombre quelconque de facteurs. Pour les nombres premiers $p \le P$,

$$\prod\_{p \le P} \frac{1}{1 - p^{-s}} = \sum\_{n\ :\ \text{tous les facteurs premiers de } n \text{ sont} \le P} n^{-s}.$$

Cette somme porte sur *presque* tous les entiers. Elle contient tous les $n \le P$, car les facteurs premiers de $n$ sont eux-mêmes $\le n \le P$. Il lui manque seulement certains entiers $n > P$&nbsp;: ceux qui ont au moins un facteur premier supérieur à $P$ (par exemple $2 \cdot 3 \cdot 101$ si $P = 100$).

**Étape 5&nbsp;: faire tendre $P$ vers l'infini.** La somme complète $\zeta(s)$ contient les mêmes termes plus les termes manquants, qui sont tous d'indice $n > P$. Leur total est donc petit&nbsp;: en prenant les modules, $|n^{-s}| = n^{-\sigma}$, et

$$\left| \zeta(s) - \prod\_{p \le P} \frac{1}{1 - p^{-s}} \right| \le \sum\_{n > P} n^{-\sigma}.$$

Le membre de droite est le reste d'une série convergente (car $\sigma > 1$)&nbsp;: il tend vers $0$ quand $P$ tend vers l'infini. Pour $s = 2$ et $P = 3$, par exemple, il vaut $\sum\_{n > 3} \frac{1}{n^2} \approx 0{,}28$, et l'écart réel est $\zeta(2) - \frac{3}{2} \approx 0{,}14$, bien inférieur. Les produits partiels, calculés pour $P = 2, 3, 5, 7, \dots$, convergent donc vers $\zeta(s)$&nbsp;: c'est la définition d'un produit infini.

*Où sert l'hypothèse $\sigma > 1$&nbsp;?* À deux endroits&nbsp;: les séries géométriques de l'étape 1 convergent parce que $p^{-\sigma} < 1$, et le reste de l'étape 5 tend vers $0$ parce que la série $\sum n^{-\sigma}$ converge. Pour $\sigma \le 1$, ce dernier point est faux (série harmonique), et la formule n'a plus de sens.

</details>
</div>

<br>

### Une première conséquence&nbsp;: les nombres premiers sont en nombre infini

Faisons tendre $s$ vers $1$ par valeurs supérieures. La série $\sum n^{-s}$ dépasse $\int\_1^{+\infty} x^{-s}\\,\mathrm{d}x = \frac{1}{s - 1}$, donc $\zeta(s) \to +\infty$. S'il n'y avait qu'un nombre fini de nombres premiers $p\_1, \dots, p\_r$, le produit d'Euler serait un produit fini de $r$ facteurs, qui tendrait vers le nombre fini $\prod\_i \frac{1}{1 - 1/p\_i}$. C'est une contradiction&nbsp;: il y a une infinité de nombres premiers. La divergence de la série harmonique code l'infinitude des nombres premiers. On en tire un résultat plus fort&nbsp;: la somme $\sum\_p 1/p$ des inverses des nombres premiers diverge elle aussi (en prenant le logarithme du produit).

### Une seconde conséquence&nbsp;: aucun zéro à droite de la droite $\operatorname{Re}(s) = 1$

Pour $\operatorname{Re}(s) = \sigma > 1$, multiplions $\zeta(s)$ par $\prod\_{p \le P}(1 - p^{-s})$. Le crible dit que le résultat est la somme des $n^{-s}$ sur les entiers sans facteur premier $\le P$, c'est-à-dire $1 + (\text{une somme sur des } n > P)$, qui tend vers $1$ quand $P \to +\infty$. Si l'on avait $\zeta(s) = 0$, ce produit vaudrait $0$ pour tout $P$, et ne pourrait pas tendre vers $1$. Donc $\zeta(s) \neq 0$ quand $\operatorname{Re}(s) > 1$.

Les zéros de $\zeta$ ne peuvent donc pas se trouver là où la série et le produit sont définis. S'ils existent, c'est ailleurs, là où la série diverge. Pour les chercher, il faut d'abord donner un sens à $\zeta(s)$ pour $\operatorname{Re}(s) \le 1$.

## Prolonger une fonction {#prolongement}

La série $\sum n^{-s}$ diverge pour $\operatorname{Re}(s) \le 1$. Or c'est précisément en $s = \frac{1}{2} + \mathrm{i}t$, dans cette zone, que se jouera l'hypothèse. Riemann définit $\zeta$ sur le plan complexe entier (privé de $s = 1$) par **prolongement analytique**. Deux exemples plus simples montrent ce que cela veut dire.

### Premier exemple&nbsp;: la série géométrique

La série $1 + z + z^2 + \cdots$ converge pour $|z| < 1$, et vaut alors $\frac{1}{1 - z}$. Pour $|z| \ge 1$, elle diverge (ses termes ne tendent même pas vers $0$). Pourtant la fonction $\frac{1}{1 - z}$ est parfaitement définie pour tout $z \neq 1$. Dire qu'elle « prolonge » la série n'est pas une convention&nbsp;: c'est la *seule* façon de prolonger la fonction en restant dans la classe des fonctions analytiques.

Une fonction est **analytique** (ou holomorphe) sur un ouvert si, autour de chaque point, elle est somme d'une série entière. Ces fonctions sont rigides&nbsp;:

<div id="theo">

**Unicité du prolongement analytique**

Soit $U$ un ouvert connexe du plan complexe, et soient $f$ et $g$ deux fonctions analytiques sur $U$. Si $f = g$ sur un petit disque contenu dans $U$ (ou plus généralement sur un ensemble ayant un point d'accumulation dans $U$), alors $f = g$ sur tout $U$.

</div>

Les valeurs d'une fonction analytique sur un petit disque déterminent donc tout le reste. Il existe au plus un prolongement analytique à un domaine plus grand.

Voyons comment il se construit concrètement. La série en $0$ converge dans le disque de centre $0$ et de rayon $1$, c'est-à-dire jusqu'au point où la fonction cesse d'être définie, le pôle $z = 1$. Choisissons un autre centre $c$ dans ce disque et développons la fonction en série entière autour de $c$&nbsp;:

$$\frac{1}{1 - z} = \frac{1}{(1 - c) - (z - c)} = \sum\_{n=0}^{+\infty} \frac{(z - c)^n}{(1 - c)^{n+1}}.$$

Cette série converge dans le disque de centre $c$ et de rayon $|1 - c|$, la distance de $c$ au pôle. Elle donne les mêmes valeurs que la première dans l'intersection des deux disques, mais converge aussi en des points où la première diverge. On recommence à partir d'un nouveau centre, pris dans le nouveau disque, et ainsi de suite&nbsp;: une chaîne de disques qui contourne le pôle.

<div class="svg-container" id="rz2">
<div class="rz-ctl">
<label><span>termes de la série</span> <input type="range" class="fig-range" id="rz2-n" min="1" max="80" step="1" value="30" style="width:130px;margin:0;"> <span id="rz2-nv" style="min-width:1.8em;">30</span></label>
<button type="button" class="fig-btn" id="rz2-ch">Prolonger de proche en proche</button>
<button type="button" class="fig-btn" id="rz2-rs">Recommencer</button>
</div>
<div class="rz-out" id="rz2-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz2'); if (!box) return;
  var W = 600, H = 330, SC = 88, OX = 252, OY = 165;
  var svg = R.fig('rz2', W, H, "Le plan complexe, le pôle de la fonction 1/(1 − z) au point 1, et le disque de convergence de la série de Taylor de cette fonction autour d'un centre c : il est centré en c et son rayon est la distance de c au pôle. On peut déplacer le centre c et le point z.");
  function X(x) { return OX + SC * x; } function Y(y) { return OY - SC * y; }
  var cl = R.el('clipPath', { id: 'rz2-clip' }, R.el('defs', {}, svg)); R.el('rect', { x: 6, y: 6, width: W - 12, height: H - 12 }, cl);
  R.el('rect', { x: 6, y: 6, width: W - 12, height: H - 12, fill: '#f8fafc', stroke: '#e2e8f0' }, svg);
  var g = R.el('g', { 'clip-path': 'url(#rz2-clip)' }, svg), gr = '', a;
  for (a = -3; a <= 4; a++) gr += 'M' + X(a) + ',6V' + (H - 6);
  for (a = -2; a <= 2; a++) gr += 'M6,' + Y(a) + 'H' + (W - 6);
  R.el('path', { d: gr, stroke: '#e2e8f0', fill: 'none' }, g);
  R.el('line', { x1: 6, y1: OY, x2: W - 6, y2: OY, stroke: '#94a3b8' }, g); R.el('line', { x1: OX, y1: 6, x2: OX, y2: H - 6, stroke: '#94a3b8' }, g);
  [-2, -1, 1, 2, 3].forEach(function (v) { R.txt(g, X(v), OY + 14, String(v).replace('-', '−'), { size: 11, anchor: 'middle', fill: '#94a3b8' }); });
  R.txt(g, OX + 5, Y(1) + 4, "<tspan font-style='italic'>i</tspan>", { size: 11, fill: '#94a3b8' });
  var ghosts = R.el('g', {}, g);
  var disc = R.el('circle', { fill: '#006C65', 'fill-opacity': 0.1, stroke: '#006C65', 'stroke-width': 1.8 }, g);
  var seg = R.el('line', { stroke: '#64748b', 'stroke-dasharray': '3 3' }, g);
  var pole = R.el('g', {}, g);
  R.el('path', { d: 'M' + (X(1) - 6) + ',' + (OY - 6) + 'l12,12m0,-12l-12,12', stroke: '#970E53', 'stroke-width': 2.6 }, pole);
  R.txt(g, X(1) + 8, OY + 20, "pôle <tspan font-style='italic'>z</tspan> = 1", { size: 12, fill: '#970E53' });
  var hc = R.el('circle', { r: 16, fill: '#006C65', 'fill-opacity': 0.001 }, g), pc = R.el('circle', { r: 6.5, fill: '#006C65', stroke: '#fff', 'stroke-width': 1.6, 'pointer-events': 'none' }, g);
  var hz = R.el('circle', { r: 16, fill: '#004D80', 'fill-opacity': 0.001 }, g), pz = R.el('circle', { r: 6.5, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.6, 'pointer-events': 'none' }, g);
  var lc = R.txt(g, 0, 0, "<tspan font-style='italic'>c</tspan>", { size: 15, fill: '#006C65' }), lz = R.txt(g, 0, 0, "<tspan font-style='italic'>z</tspan>", { size: 15, fill: '#004D80' });
  R.txt(svg, 14, 24, "disque de convergence de la série de Taylor en <tspan font-style='italic'>c</tspan> (rayon = distance de <tspan font-style='italic'>c</tspan> au pôle)", { size: 12, fill: '#64748b', italic: true });
  var c = [0, 0], z = [-1.5, 0.35], N = 30, list = [], chain = null;
  function show(v, err) { var m = Math.hypot(v[0], v[1]); return m > 1e4 ? "<b style='color:#970E53'>diverge (module > 10<sup>4</sup>)</b>" : R.cfmt(v[0], v[1], 3) + " <span style='color:#64748b'>(écart " + (err < 1e-4 ? '< 10<sup>−4</sup>' : R.fmt(err, 3)) + ")</span>"; }
  function draw() {
    var r = Math.hypot(1 - c[0], c[1]);
    R.put(disc, { cx: X(c[0]), cy: Y(c[1]), r: r * SC });
    R.put(seg, { x1: X(c[0]), y1: Y(c[1]), x2: X(z[0]), y2: Y(z[1]) });
    R.put(hc, { cx: X(c[0]), cy: Y(c[1]) }); R.put(pc, { cx: X(c[0]), cy: Y(c[1]) }); R.put(hz, { cx: X(z[0]), cy: Y(z[1]) }); R.put(pz, { cx: X(z[0]), cy: Y(z[1]) });
    R.put(lc, { x: X(c[0]) - 18, y: Y(c[1]) - 10 }); R.put(lz, { x: X(z[0]) + 9, y: Y(z[1]) - 9 });
    ghosts.innerHTML = ''; list.forEach(function (q) { R.el('circle', { cx: X(q[0]), cy: Y(q[1]), r: Math.hypot(1 - q[0], q[1]) * SC, fill: 'none', stroke: '#006C65', 'stroke-opacity': 0.35, 'stroke-dasharray': '4 3' }, ghosts); });
    // calculs
    var den = [1 - c[0], -c[1]], dd = den[0] * den[0] + den[1] * den[1];
    var qq = [((z[0] - c[0]) * den[0] + (z[1] - c[1]) * den[1]) / dd, ((z[1] - c[1]) * den[0] - (z[0] - c[0]) * den[1]) / dd];   // (z-c)/(1-c)
    var sr = 0, si = 0, pr = 1, pi = 0, j, t;
    for (j = 0; j < N; j++) { sr += pr; si += pi; t = pr * qq[0] - pi * qq[1]; pi = pr * qq[1] + pi * qq[0]; pr = t; }
    var S = [(sr * den[0] + si * den[1]) / dd, (si * den[0] - sr * den[1]) / dd];                                              // somme / (1-c)
    var S0 = [0, 0], w = [1, 0]; for (j = 0; j < N; j++) { S0[0] += w[0]; S0[1] += w[1]; t = w[0] * z[0] - w[1] * z[1]; w[1] = w[0] * z[1] + w[1] * z[0]; w[0] = t; }
    var e = [1 - z[0], -z[1]], ee = e[0] * e[0] + e[1] * e[1], ex = [e[0] / ee, -e[1] / ee];
    var d = Math.hypot(z[0] - c[0], z[1] - c[1]), ok = d < r, err = Math.hypot(S[0] - ex[0], S[1] - ex[1]);
    R.$('rz2-out').innerHTML =
      "centre <i>c</i> = " + R.cfmt(c[0], c[1], 2) + ", rayon = |1 − <i>c</i>| = " + R.fmt(r, 2) + "<br>" +
      "point <i>z</i> = " + R.cfmt(z[0], z[1], 2) + ", distance à <i>c</i> = " + R.fmt(d, 2) + " : <b style='color:" + (ok ? '#006C65' : '#970E53') + "'>" + (ok ? 'dans le disque, la série converge' : 'hors du disque, la série diverge') + "</b><br>" +
      "valeur de 1/(1 − <i>z</i>) = " + R.cfmt(ex[0], ex[1], 3) + "<br>" +
      "somme de " + N + " termes de la série en <i>c</i> = " + show(S, err) + "<br>" +
      "somme de " + N + " termes de la série en 0 (1 + <i>z</i> + <i>z</i><sup>2</sup> + …) = " + show(S0, Math.hypot(S0[0] - ex[0], S0[1] - ex[1]));
    R.$('rz2-nv').textContent = N;
  }
  R.drag(svg, hc, function (q) { if (chain) return; c = [R.clamp((q.x - OX) / SC, -2.6, 3.4), R.clamp((OY - q.y) / SC, -1.8, 1.8)]; draw(); });
  R.drag(svg, hz, function (q) { z = [R.clamp((q.x - OX) / SC, -2.6, 3.4), R.clamp((OY - q.y) / SC, -1.8, 1.8)]; draw(); });
  R.$('rz2-n').addEventListener('input', function () { N = parseInt(this.value, 10); draw(); });
  var WP = [[0, 0], [0.3, 0.7], [0.9, 1.1], [1.8, 0.9], [2.2, 0]];
  function stepChain(ts) {
    if (!chain) return;
    var dt = chain.last === null ? 0 : Math.min(0.05, (ts - chain.last) / 1000); chain.last = ts;
    var tgt = WP[chain.i + 1], dx = tgt[0] - c[0], dy = tgt[1] - c[1], dist = Math.hypot(dx, dy), v = 0.7 * dt;
    if (dist <= v) { c = [tgt[0], tgt[1]]; list.push([tgt[0], tgt[1]]); chain.i++; chain.wait = 0.5; }
    else { c = [c[0] + dx / dist * v, c[1] + dy / dist * v]; }
    draw();
    if (chain.i >= WP.length - 1) { chain = null; return; }
    requestAnimationFrame(stepChain);
  }
  R.$('rz2-ch').addEventListener('click', function () { c = [WP[0][0], WP[0][1]]; list = [[0, 0]]; chain = { i: 0, last: null }; draw(); requestAnimationFrame(stepChain); });
  R.$('rz2-rs').addEventListener('click', function () { chain = null; c = [0, 0]; z = [-1.5, 0.35]; list = []; draw(); });
  draw();
})();
</script>
<p class="legende">Le disque de convergence de la série de Taylor de $\frac{1}{1 - z}$ en $c$ (en vert) a pour rayon la distance de $c$ au pôle $1$. Déplacez $c$ et le point $z$. Dans le disque, la somme partielle s'approche de $\frac{1}{1 - z}$&nbsp;; en dehors, elle diverge, alors que $\frac{1}{1 - z}$ reste définie. Le bouton fait avancer le centre de proche en proche autour du pôle&nbsp;: les disques (pointillés) se recouvrent et finissent par atteindre l'autre côté de $1$. Placez alors $z$ dans le dernier disque&nbsp;: la série en $0$ y diverge, la série en $c$ donne la bonne valeur.</p>

<div class="encadre">
<div class="encadre-titre">Que signifie «&nbsp;$1 + 2 + 4 + 8 + \cdots = -1$&nbsp;»&nbsp;?</div>
<p>En $z = 2$, la série $1 + 2 + 4 + 8 + \cdots$ diverge, évidemment&nbsp;: aucune somme ne vaut $-1$. Ce qui vaut $-1$, c'est la valeur en $z = 2$ du prolongement analytique de la fonction définie par la série, c'est-à-dire $\frac{1}{1 - 2}$. Les formules de ce genre (dont la plus célèbre est « $1 + 2 + 3 + \cdots = -\frac{1}{12}$ », voir plus bas) disent ce que vaut la fonction prolongée, pas ce que vaut une somme.</p>
</div>

### Deuxième exemple&nbsp;: la factorielle

On sait calculer $n! = 1 \times 2 \times \cdots \times n$ pour $n$ entier. Existe-t-il une fonction analytique qui interpole ces valeurs, par exemple pour $\frac{1}{2}$&nbsp;? Euler a trouvé la **fonction Gamma**&nbsp;:

$$\Gamma(s) = \int\_0^{+\infty} t^{s-1}\\,\mathrm{e}^{-t}\\,\mathrm{d}t \qquad (\operatorname{Re}(s) > 0).$$

L'intégrale converge seulement pour $\operatorname{Re}(s) > 0$. Mais elle vérifie $\Gamma(s + 1) = s\\,\Gamma(s)$ (preuve ci-dessous), d'où $\Gamma(n) = (n - 1)!$. Cette relation permet de calculer $\Gamma$ là où l'intégrale n'existe pas&nbsp;:

$$\Gamma(s) = \frac{\Gamma(s + 1)}{s} \qquad \text{définit } \Gamma \text{ pour } -1 < \operatorname{Re}(s) < 0.$$

Par exemple, $\Gamma\bigl(-\tfrac{1}{2}\bigr) = \frac{\Gamma(1/2)}{-1/2} = -2\sqrt{\pi}$. On recommence pour $-2 < \operatorname{Re}(s) < -1$ avec $\Gamma(s) = \frac{\Gamma(s + 2)}{s(s + 1)}$, et ainsi de suite. La fonction obtenue est définie sur tout le plan complexe, sauf aux entiers négatifs ou nuls, qui sont des pôles.

<div id="preuve">
<details>
<summary>le calcul&nbsp;: la relation $\Gamma(s + 1) = s\,\Gamma(s)$</summary>

Pour $\operatorname{Re}(s) > 0$, une intégration par parties donne

$$\Gamma(s + 1) = \int\_0^{+\infty} t^{s}\\,\mathrm{e}^{-t}\\,\mathrm{d}t = \Bigl[-t^{s}\mathrm{e}^{-t}\Bigr]\_0^{+\infty} + s \int\_0^{+\infty} t^{s-1}\\,\mathrm{e}^{-t}\\,\mathrm{d}t = s\\,\Gamma(s).$$

Le crochet est nul&nbsp;: en $0$ parce que $\operatorname{Re}(s) > 0$, en $+\infty$ parce que l'exponentielle l'emporte sur toute puissance. Comme $\Gamma(1) = \int\_0^{+\infty} \mathrm{e}^{-t}\mathrm{d}t = 1$, on obtient par récurrence $\Gamma(n) = (n - 1)!$.

</details>
</div>

<div class="svg-container" id="rz3">
<div class="rz-ctl">
<label><span>étapes de prolongement</span> <input type="range" class="fig-range" id="rz3-k" min="0" max="6" step="1" value="2" style="width:140px;margin:0;"> <span id="rz3-kv" style="min-width:1.2em;">1</span></label>
<label><span>point <i>x</i></span> <input type="range" class="fig-range" id="rz3-x" min="-4.3" max="4.3" step="0.01" value="-0.5" style="width:150px;margin:0;"> <span id="rz3-xv" style="min-width:3em;">−0,50</span></label>
<button type="button" class="fig-btn" id="rz3-go"></button>
</div>
<div class="rz-out" id="rz3-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz3'); if (!box) return;
  var W = 600, H = 300, SX = 64, OX = 300, OY = 150, SY = 13.5, YM = 10;
  var svg = R.fig('rz3', W, H, "Le graphe de la fonction Γ sur la droite réelle. Les points (n, (n − 1)!) sont ceux de la factorielle. La courbe est d'abord tracée pour x > 0 par la formule intégrale, puis prolongée pas à pas vers la gauche à l'aide de la relation Γ(x) = Γ(x + 1)/x. Elle a des pôles en 0, −1, −2, etc.");
  function X(x) { return OX + SX * x; } function Y(y) { return OY - SY * y; }
  var cl = R.el('clipPath', { id: 'rz3-clip' }, R.el('defs', {}, svg)); R.el('rect', { x: 8, y: OY - SY * YM, width: W - 16, height: 2 * SY * YM }, cl);
  var g = R.el('g', { 'clip-path': 'url(#rz3-clip)' }, svg);
  var a, gd = ''; for (a = -4; a <= 4; a++) gd += 'M' + X(a) + ',' + (OY - SY * YM) + 'V' + (OY + SY * YM);
  R.el('path', { d: gd, stroke: '#eef2f6', fill: 'none' }, g);
  for (a = 0; a >= -4; a--) R.el('line', { x1: X(a), y1: OY - SY * YM, x2: X(a), y2: OY + SY * YM, stroke: '#970E53', 'stroke-opacity': 0.35, 'stroke-dasharray': '4 4' }, g);
  R.el('line', { x1: 8, y1: OY, x2: W - 8, y2: OY, stroke: '#94a3b8' }, g);
  for (a = -4; a <= 4; a++) if (a) R.txt(g, X(a), OY + 14, String(a).replace('-', '−'), { size: 11, anchor: 'middle', fill: '#94a3b8' });
  R.txt(svg, 14, 11, "Γ(<tspan font-style='italic'>x</tspan>) sur la droite réelle (verticales pointillées : pôles en 0, −1, −2, …)", { size: 12, fill: '#64748b', italic: true });
  var COL = ['#004D80', '#006C65', '#C2770B', '#970E53', '#006C65', '#C2770B', '#970E53'];
  var paths = [], j;
  for (j = 0; j <= 6; j++) {
    var lo = j === 0 ? 0 : -j, hi = j === 0 ? 4.4 : -j + 1, d = '', x, first = true;
    for (x = lo + 0.015; x < hi - 0.0149; x += 0.02) { var y = R.gamma(x); if (Math.abs(y) > 14) { first = true; continue; } d += (first ? 'M' : 'L') + X(x).toFixed(1) + ',' + Y(y).toFixed(1); first = false; }
    paths[j] = R.el('path', { d: d, fill: 'none', stroke: COL[j], 'stroke-width': 2.4, 'stroke-linejoin': 'round' }, g);
  }
  var dots = R.el('g', {}, g), n;
  for (n = 1; n <= 5; n++) { R.el('circle', { cx: X(n), cy: Y(R.gamma(n)), r: 4.6, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.4 }, dots); }
  R.txt(g, X(2.2), Y(4.2), "Γ(<tspan font-style='italic'>n</tspan>) = (<tspan font-style='italic'>n</tspan> − 1)!", { size: 13, fill: '#004D80' });
  R.txt(g, X(2.2), Y(3.1), "points : 1, 1, 2, 6, 24", { size: 11, fill: '#64748b', italic: true });
  var mk = R.el('circle', { r: 5, fill: '#1e293b', stroke: '#fff', 'stroke-width': 1.6 }, g);
  var k = 2, x0 = -0.5;
  function draw() {
    for (j = 0; j <= 6; j++) paths[j].setAttribute('visibility', j === 0 ? (k >= 1 ? 'visible' : 'hidden') : (k >= j + 1 ? 'visible' : 'hidden'));
    var y = R.gamma(x0), show = Math.abs(y) < YM + 3 && (x0 > 0 ? k >= 1 : k >= Math.ceil(-x0) + 1);
    R.put(mk, { cx: X(x0), cy: Y(Math.max(-YM, Math.min(YM, y))), visibility: show ? 'visible' : 'hidden' });
    var out = '', m, prodStr = '', den = 1, base;
    if (x0 > 0) { out = "x > 0 : Γ(" + R.fmt(x0, 2) + ") = " + R.fmt(y, 4) + " (formule intégrale)"; }
    else {
      m = Math.ceil(-x0) + (Number.isInteger(x0) ? 1 : 0); if (m < 1) m = 1;
      base = x0 + m; for (j = 0; j < m; j++) { den *= x0 + j; prodStr += (j ? ' · ' : '') + '(' + R.fmt(x0 + j, 2) + ')'; }
      out = "Γ(" + R.fmt(x0, 2) + ") = Γ(" + R.fmt(base, 2) + ") / [" + prodStr + "] = " + R.fmt(R.gamma(base), 4) + " / " + R.fmt(den, 4) + " = <b>" + R.fmt(R.gamma(base) / den, 4) + "</b>" + (k < m + 1 ? " <span style='color:#970E53'>(point pas encore atteint par le prolongement)</span>" : '');
    }
    R.$('rz3-out').innerHTML = out; R.$('rz3-kv').textContent = k; R.$('rz3-xv').textContent = R.fmt(x0, 2);
  }
  R.$('rz3-k').addEventListener('input', function () { k = parseInt(this.value, 10); draw(); });
  R.$('rz3-x').addEventListener('input', function () { x0 = parseFloat(this.value); if (Math.abs(x0 - Math.round(x0)) < 0.004 && x0 <= 0) x0 = Math.round(x0) + 0.01; draw(); });
  var acc = 0, hold = 0;
  R.player(R.$('rz3-go'), box, function (dt) { if (k >= 6) { hold += dt; if (hold > 2) { k = 0; hold = 0; R.$('rz3-k').value = k; draw(); } return; } acc += dt; if (acc > 1.1) { acc = 0; k++; R.$('rz3-k').value = k; draw(); } }, false);
  draw();
})();
</script>
<p class="legende">La fonction $\Gamma$ sur la droite réelle. Les points sont la factorielle. La courbe bleue est donnée par l'intégrale d'Euler ($x > 0$). Chaque étape de prolongement (curseur) utilise $\Gamma(x) = \Gamma(x + 1)/x$ pour passer à l'intervalle de gauche. Les verticales magenta sont les pôles. Le curseur $x$ affiche le calcul de $\Gamma(x)$ par cette relation.</p>

Ces deux exemples donnent la recette&nbsp;: prolonger, c'est trouver une identité qui ramène le calcul dans la zone où la définition de départ fonctionne. Pour $\zeta$, il en faut deux.

### Prolonger $\zeta$&nbsp;: de la droite $\operatorname{Re}(s) = 1$ à $\operatorname{Re}(s) = 0$

La série $\sum n^{-s}$ diverge dès que $\operatorname{Re}(s) \le 1$. Mais en l'alternant, on gagne une unité de convergence. Posons

$$\eta(s) = \sum\_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n^s} = 1 - \frac{1}{2^s} + \frac{1}{3^s} - \cdots$$

Cette série converge pour $\operatorname{Re}(s) > 0$ (une série alternée dont les termes décroissent vers $0$ converge). Et pour $\operatorname{Re}(s) > 1$, on a

$$\eta(s) = \bigl(1 - 2^{1-s}\bigr)\zeta(s).$$

<div id="preuve">
<details>
<summary>le calcul&nbsp;: le lien entre $\eta$ et $\zeta$</summary>

Pour $\operatorname{Re}(s) > 1$, séparons les indices pairs et impairs dans $\zeta(s)$&nbsp;:

$$\zeta(s) - 2 \sum\_{n \ge 1} (2n)^{-s} = \sum\_{n \ge 1} n^{-s} - 2 \sum\_{n\ \text{pair}} n^{-s} = \sum\_{n\ \text{impair}} n^{-s} - \sum\_{n\ \text{pair}} n^{-s} = \eta(s).$$

Or $2 \sum (2n)^{-s} = 2 \cdot 2^{-s}\zeta(s) = 2^{1-s}\zeta(s)$. D'où $\bigl(1 - 2^{1-s}\bigr)\zeta(s) = \eta(s)$.

*Le prolongement.* Les deux membres de $\zeta(s) = \frac{\eta(s)}{1 - 2^{1-s}}$ sont analytiques pour $\operatorname{Re}(s) > 0$, sauf aux points où $2^{1-s} = 1$, soit $s = 1 + \frac{2\pi\mathrm{i}k}{\ln 2}$ ($k$ entier). Le membre de droite définit donc une fonction analytique sur $\operatorname{Re}(s) > 0$ (privé de ces points), qui coïncide avec $\zeta$ pour $\operatorname{Re}(s) > 1$. D'après l'unicité du prolongement, c'est le prolongement de $\zeta$.

*Les points exceptionnels.* En $s = 1$, le numérateur tend vers $\eta(1) = \ln 2$ (série harmonique alternée) et le dénominateur $1 - 2^{1-s} \sim (s - 1)\ln 2$. Donc $\zeta(s) \sim \frac{1}{s - 1}$&nbsp;: c'est un **pôle simple de résidu $1$**. Aux autres points $s = 1 + \frac{2\pi \mathrm{i} k}{\ln 2}$ ($k \neq 0$), le numérateur s'annule aussi et la fonction reste finie. En particulier, $\eta(s) \to \frac{1}{2}$ quand $s \to 0^+$ et $1 - 2^{1-s} \to -1$, d'où $\zeta(0) = -\frac{1}{2}$.

</details>
</div>

<br>

<div class="svg-container" id="rz4">
<div class="rz-ctl">
<label><span>termes <i>N</i></span> <input type="range" class="fig-range" id="rz4-n" min="1" max="200" step="1" value="20" style="width:140px;margin:0;"> <span id="rz4-nv" style="min-width:2.2em;">20</span></label>
<label><span>point <i>s</i></span> <input type="range" class="fig-range" id="rz4-s" min="-4.5" max="4.2" step="0.01" value="0.5" style="width:140px;margin:0;"> <span id="rz4-sv" style="min-width:3em;">0,50</span></label>
<button type="button" class="fig-btn" id="rz4-go"></button>
</div>
<div class="rz-out" id="rz4-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz4'); if (!box) return;
  var W = 600, H = 350, SX = 60, OX = 332, SY = 36, OY = 232, YMIN = -3.2, YMAX = 5.2;
  var svg = R.fig('rz4', W, H, "La fonction ζ sur la droite réelle. Pour s > 1, la somme partielle de la série (orange) se rapproche de ζ(s). Pour 0 < s < 1, c'est la série alternée divisée par 1 − 2^(1−s) (vert) qui converge vers ζ(s). Pour s < 0, ni l'une ni l'autre ne convergent, et c'est l'équation fonctionnelle qui fournit la courbe (bleue).");
  function X(x) { return OX + SX * x; } function Y(y) { return OY - SY * y; }
  var cl = R.el('clipPath', { id: 'rz4-clip' }, R.el('defs', {}, svg)); R.el('rect', { x: 8, y: Y(YMAX), width: W - 16, height: Y(YMIN) - Y(YMAX) }, cl);
  var g = R.el('g', { 'clip-path': 'url(#rz4-clip)' }, svg);
  R.el('rect', { x: X(1), y: Y(YMAX), width: X(4.45) - X(1), height: Y(YMIN) - Y(YMAX), fill: '#C2770B', 'fill-opacity': 0.08 }, g);
  R.el('rect', { x: X(0), y: Y(YMAX), width: X(1) - X(0), height: Y(YMIN) - Y(YMAX), fill: '#006C65', 'fill-opacity': 0.08 }, g);
  R.el('rect', { x: X(-5.4), y: Y(YMAX), width: X(0) - X(-5.4), height: Y(YMIN) - Y(YMAX), fill: '#970E53', 'fill-opacity': 0.05 }, g);
  var a, gd = ''; for (a = -5; a <= 4; a++) gd += 'M' + X(a) + ',' + Y(YMAX) + 'V' + Y(YMIN); for (a = -3; a <= 5; a++) gd += 'M8,' + Y(a) + 'H' + (W - 8);
  R.el('path', { d: gd, stroke: '#eef2f6', fill: 'none' }, g);
  R.el('line', { x1: 8, y1: Y(0), x2: W - 8, y2: Y(0), stroke: '#94a3b8' }, g); R.el('line', { x1: X(1), y1: Y(YMAX), x2: X(1), y2: Y(YMIN), stroke: '#970E53', 'stroke-dasharray': '4 4', 'stroke-opacity': 0.6 }, g);
  for (a = -5; a <= 4; a++) if (a) R.txt(g, X(a), Y(0) + 14, String(a).replace('-', '−'), { size: 11, anchor: 'middle', fill: '#94a3b8' });
  for (a = -3; a <= 5; a++) if (a) R.txt(g, 14, Y(a) + 4, String(a).replace('-', '−'), { size: 11, fill: '#94a3b8' });
  R.txt(svg, X(2.7), 26, "la série converge", { size: 12.5, fill: '#C2770B', anchor: 'middle', italic: true });
  R.txt(svg, X(0.5), 26, "série alternée", { size: 12.5, fill: '#006C65', anchor: 'middle', italic: true });
  R.txt(svg, X(-2.7), 26, "équation fonctionnelle", { size: 12.5, fill: '#970E53', anchor: 'middle', italic: true });
  R.txt(svg, X(1) + 6, Y(YMAX) + 24, "pôle", { size: 12, fill: '#970E53' });
  var pT = R.el('path', { fill: 'none', stroke: '#004D80', 'stroke-width': 2.6 }, g), pS = R.el('path', { fill: 'none', stroke: '#C2770B', 'stroke-width': 2 }, g), pE = R.el('path', { fill: 'none', stroke: '#006C65', 'stroke-width': 2 }, g);
  var i;
  // courbe exacte
  (function () {
    var d = '', x, first;
    [[-5.4, 0.985], [1.015, 4.45]].forEach(function (iv) { first = true; for (x = iv[0]; x <= iv[1]; x += 0.01) { var y = R.zr(x); if (y > YMAX + 4 || y < YMIN - 4) { first = true; continue; } d += (first ? 'M' : 'L') + X(x).toFixed(1) + ',' + Y(y).toFixed(1); first = false; } });
    pT.setAttribute('d', d);
  })();
  // points remarquables
  [[2, Math.PI * Math.PI / 6], [0, -0.5], [-1, -1 / 12]].forEach(function (p) { R.el('circle', { cx: X(p[0]), cy: Y(p[1]), r: 4.2, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.4 }, g); });
  [-2, -4].forEach(function (p) { R.el('circle', { cx: X(p), cy: Y(0), r: 4.6, fill: '#fff', stroke: '#004D80', 'stroke-width': 1.8 }, g); });
  R.txt(g, X(2) + 7, Y(Math.PI * Math.PI / 6) - 6, "π²/6", { size: 12, fill: '#004D80' });
  R.txt(g, X(0) - 8, Y(-0.5) + 16, "−1/2", { size: 12, fill: '#004D80', anchor: 'end' });
  R.txt(g, X(-1) - 4, Y(-1 / 12) - 8, "−1/12", { size: 12, fill: '#004D80', anchor: 'end' });
  R.txt(g, X(-2), Y(0) - 10, "zéro", { size: 11, fill: '#004D80', anchor: 'middle' });
  var cur = R.el('line', { y1: Y(YMAX), y2: Y(YMIN), stroke: '#1e293b', 'stroke-width': 1.2, 'stroke-dasharray': '2 3' }, g);
  var N = 20, s0 = 0.5;
  function S(n, s) { var t = 0, j; for (j = 1; j <= n; j++) t += Math.pow(j, -s); return t; }
  function E(n, s) { var t = 0, j; for (j = 1; j <= n; j++) t += (j % 2 ? 1 : -1) * Math.pow(j, -s); return t / (1 - Math.pow(2, 1 - s)); }
  function curves() {
    var dS = '', dE = '', x, first = true, y;
    for (x = -5.4; x <= 4.45; x += 0.02) { y = S(N, x); if (y > YMAX + 3 || y < YMIN - 3) { first = true; continue; } dS += (first ? 'M' : 'L') + X(x).toFixed(1) + ',' + Y(y).toFixed(1); first = false; }
    first = true; for (x = 0.015; x <= 4.45; x += 0.02) { if (Math.abs(x - 1) < 0.02) { first = true; continue; } y = E(N, x); if (y > YMAX + 3 || y < YMIN - 3) { first = true; continue; } dE += (first ? 'M' : 'L') + X(x).toFixed(1) + ',' + Y(y).toFixed(1); first = false; }
    pS.setAttribute('d', dS); pE.setAttribute('d', dE);
  }
  function out() {
    R.put(cur, { x1: X(s0), x2: X(s0) });
    var z = R.zr(s0), sTxt = R.fmt(S(N, s0), 3), eTxt = s0 > 0 && Math.abs(s0 - 1) > 0.02 ? R.fmt(E(N, s0), 3) : '(non définie)';
    R.$('rz4-out').innerHTML = "en <i>s</i> = " + R.fmt(s0, 2) + " : <b style='color:#004D80'>ζ(<i>s</i>) = " + R.fmt(z, 4) + "</b> ; somme partielle de la série = <b style='color:#C2770B'>" + sTxt + "</b> ; série alternée / (1 − 2<sup>1−<i>s</i></sup>) = <b style='color:#006C65'>" + eTxt + "</b>";
    R.$('rz4-nv').textContent = N; R.$('rz4-sv').textContent = R.fmt(s0, 2);
  }
  R.$('rz4-n').addEventListener('input', function () { N = parseInt(this.value, 10); pl.stop(); curves(); out(); });
  R.$('rz4-s').addEventListener('input', function () { s0 = parseFloat(this.value); out(); });
  var acc = 0, hold = 0;
  var pl = R.player(R.$('rz4-go'), box, function (dt) {
    if (N >= 200) { hold += dt; if (hold > 1.5) { N = 1; hold = 0; } } else { acc += dt; var inc = Math.max(1, Math.round(N / 14)); if (acc > 0.12) { acc = 0; N = Math.min(200, N + inc); } }
    R.$('rz4-n').value = N; curves(); out();
  }, false);
  curves(); out();
})();
</script>
<p class="legende">La fonction $\zeta$ sur la droite réelle. À droite de $1$ (zone orange), la somme partielle de la série (orange) converge vers $\zeta(s)$ quand le nombre de termes augmente. Entre $0$ et $1$ (zone verte), elle diverge, mais la série alternée divisée par $1 - 2^{1-s}$ (verte) converge, lentement, vers la même courbe que celle que donne le prolongement (bleue). À gauche de $0$, aucune des deux séries ne marche&nbsp;: la courbe bleue vient de l'équation fonctionnelle ci-dessous. Les points sont les valeurs $\zeta(2) = \frac{\pi^2}{6}$, $\zeta(0) = -\frac{1}{2}$, $\zeta(-1) = -\frac{1}{12}$&nbsp;; les cercles sont les zéros en $-2$ et $-4$.</p>

### Prolonger $\zeta$&nbsp;: le plan complexe entier

Pour $\operatorname{Re}(s) \le 0$, Riemann utilise une symétrie cachée.

<div id="theo">

**Équation fonctionnelle de Riemann**

La fonction $\zeta$ se prolonge en une fonction analytique sur $\mathbb{C} \setminus \\{1\\}$, avec un pôle simple en $1$, et la fonction $\Lambda(s) = \pi^{-s/2}\\,\Gamma\\!\left(\frac{s}{2}\right)\zeta(s)$ vérifie

$$\Lambda(s) = \Lambda(1 - s).$$

</div>

L'équation relie la valeur en $s$ à la valeur en $1 - s$, symétrique par rapport à $\frac{1}{2}$. Si $\operatorname{Re}(s) < 0$, alors $\operatorname{Re}(1 - s) > 1$&nbsp;: la zone qu'on ne sait pas calculer est ramenée à celle où la série converge. C'est le même mécanisme que pour $\Gamma$. Elle se réécrit

$$\zeta(s) = 2^s\\,\pi^{s-1}\\,\sin\\!\left(\frac{\pi s}{2}\right)\Gamma(1 - s)\\,\zeta(1 - s).$$

Elle donne aussitôt des valeurs et des zéros&nbsp;:
<ul>
<li>le facteur $\sin\!\left(\frac{\pi s}{2}\right)$ s'annule en $s = -2, -4, -6, \dots$ alors que les autres facteurs (dont $\zeta(1 - s)$, non nul car $\operatorname{Re}(1 - s) > 1$) ne s'annulent pas&nbsp;: ce sont les <b>zéros triviaux</b> de $\zeta$&nbsp;;</li>
<li>en $s = -1$, on trouve $\zeta(-1) = -\frac{1}{12}$. C'est la valeur de la fonction prolongée, et c'est le sens qu'il faut donner à «&nbsp;$1 + 2 + 3 + 4 + \cdots = -\frac{1}{12}$&nbsp;»&nbsp;: la série $\sum n^{-s}$ en $s = -1$ diverge, mais la fonction $\zeta$ vaut $-\frac{1}{12}$ en ce point.</li>
</ul>

<div id="preuve">
<details>
<summary>le calcul&nbsp;: d'où vient l'équation fonctionnelle (la fonction thêta)</summary>

*Étape 1&nbsp;: une intégrale pour $\zeta$.* Pour $\operatorname{Re}(s) > 1$, le changement de variable $t = \pi n^2 x$ dans $\Gamma(s/2)$ donne $\pi^{-s/2}\Gamma(s/2)\\,n^{-s} = \int\_0^{+\infty} x^{s/2 - 1}\mathrm{e}^{-\pi n^2 x}\\,\mathrm{d}x$. En sommant sur $n \ge 1$, avec $\omega(x) = \sum\_{n \ge 1} \mathrm{e}^{-\pi n^2 x}$,

$$\Lambda(s) = \int\_0^{+\infty} x^{s/2 - 1}\\,\omega(x)\\,\mathrm{d}x.$$

*Étape 2&nbsp;: la symétrie de la fonction thêta.* La formule de Poisson (ou la symétrie de Jacobi) donne, pour $\theta(x) = \sum\_{n \in \mathbb{Z}} \mathrm{e}^{-\pi n^2 x} = 1 + 2\omega(x)$, la relation $\theta(1/x) = \sqrt{x}\\,\theta(x)$. Autrement dit $\omega(1/x) = \sqrt{x}\\,\omega(x) + \frac{\sqrt{x} - 1}{2}$.

*Étape 3&nbsp;: couper en $x = 1$.* Séparons l'intégrale en $\int\_0^1 + \int\_1^{+\infty}$. Dans la première, le changement de variable $x \to 1/x$ et la relation de l'étape 2 donnent

$$\int\_0^1 x^{s/2 - 1}\omega(x)\\,\mathrm{d}x = \int\_1^{+\infty} x^{-s/2 - 1}\Bigl(\sqrt{x}\\,\omega(x) + \tfrac{\sqrt{x} - 1}{2}\Bigr)\mathrm{d}x = \int\_1^{+\infty} x^{-s/2 - 1/2}\omega(x)\\,\mathrm{d}x + \frac{1}{s - 1} - \frac{1}{s},$$

car $\int\_1^{+\infty} x^{-s/2 - 1/2}\mathrm{d}x = \frac{2}{s - 1}$ et $\int\_1^{+\infty} x^{-s/2 - 1}\mathrm{d}x = \frac{2}{s}$. Comme $\frac{1}{s - 1} - \frac{1}{s} = \frac{1}{s(s - 1)}$,

$$\Lambda(s) = \frac{1}{s(s - 1)} + \int\_1^{+\infty}\Bigl(x^{s/2 - 1} + x^{-(s + 1)/2}\Bigr)\omega(x)\\,\mathrm{d}x.$$

*Étape 4&nbsp;: conclure.* Comme $\omega(x)$ décroît comme $\mathrm{e}^{-\pi x}$, l'intégrale converge pour tout $s$ complexe et définit une fonction analytique de $s$. Le membre de droite est ainsi analytique sur $\mathbb{C}$, sauf aux pôles de $\frac{1}{s(s - 1)}$, en $0$ et en $1$. Il est invariant par $s \to 1 - s$ (les deux termes de l'intégrale s'échangent). Cela prolonge $\Lambda$ à $\mathbb{C} \setminus \\{0, 1\\}$ et démontre $\Lambda(s) = \Lambda(1 - s)$. Enfin $\zeta(s) = \pi^{s/2}\Lambda(s)/\Gamma(s/2)$&nbsp;: comme $1/\Gamma$ est entière et s'annule en $0, -2, -4, \dots$, le pôle de $\Lambda$ en $0$ est compensé, $\zeta$ est analytique sauf en $1$, et elle s'annule en $-2, -4, \dots$

</details>
</div>

<br>

## Les zéros de $\zeta$ {#zeros}

Que sait-on, sans effort, sur les zéros de $\zeta$&nbsp;?
<ul>
<li>Il n'y en a pas pour $\operatorname{Re}(s) > 1$ (le produit d'Euler, plus haut).</li>
<li>Il n'y en a pas pour $\operatorname{Re}(s) < 0$, sauf les zéros triviaux $-2, -4, -6, \dots$ (équation fonctionnelle).</li>
<li>Il n'y en a pas non plus sur les droites $\operatorname{Re}(s) = 1$ (Hadamard et de la Vallée Poussin, 1896) et $\operatorname{Re}(s) = 0$.</li>
</ul>

Les autres zéros, appelés **zéros non triviaux**, sont donc dans la bande $0 < \operatorname{Re}(s) < 1$, la **bande critique**. Ils ont deux symétries. Comme $\zeta(\bar{s}) = \overline{\zeta(s)}$, si $\rho$ est un zéro, $\bar{\rho}$ l'est aussi (symétrie par rapport à l'axe réel). Et d'après l'équation fonctionnelle, $1 - \rho$ en est un autre (symétrie par rapport à la droite $\operatorname{Re}(s) = \frac{1}{2}$, la **droite critique**). Les zéros viennent donc par quadruplets $\rho, \bar{\rho}, 1 - \rho, 1 - \bar{\rho}$, sauf ceux de la droite critique, qui viennent par paires $\frac{1}{2} \pm \mathrm{i}\gamma$.

<div id="theo">

**Hypothèse de Riemann**

Tous les zéros non triviaux de la fonction $\zeta$ ont pour partie réelle $\frac{1}{2}$.

</div>

On connaît les premiers zéros avec précision&nbsp;: $\frac{1}{2} \pm 14{,}1347\mathrm{i}$, $\frac{1}{2} \pm 21{,}0220\mathrm{i}$, $\frac{1}{2} \pm 25{,}0109\mathrm{i}$, $\frac{1}{2} \pm 30{,}4249\mathrm{i}$, … Voyons-les sur la carte de $\zeta$.

<div class="svg-container" id="rz5">
<canvas id="rz5-cv" width="600" height="330" role="img" aria-label="Coloriage de la fonction ζ dans le plan complexe : la couleur donne l'argument de ζ(s), la luminosité son module. Les zéros apparaissent en noir, le pôle en s = 1 en blanc. Les zéros non triviaux sont alignés sur la droite Re(s) = 1/2." style="width:100%;max-width:600px;height:auto;border:1px solid #cbd5e1;border-radius:6px;touch-action:manipulation;cursor:crosshair;"></canvas>
<div class="rz-ctl">
<button type="button" class="fig-btn" id="rz5-ov">Vue d'ensemble</button>
<label><span>hauteur <i>t</i> de la fenêtre</span> <input type="range" class="fig-range" id="rz5-t" min="0" max="60" step="0.05" value="14.13" style="width:150px;margin:0;"> <span id="rz5-tv" style="min-width:3.4em;">14,13</span></label>
<button type="button" class="fig-btn" id="rz5-nx">Zoom sur un zéro</button>
<button type="button" class="fig-btn" id="rz5-go"></button>
</div>
<div class="rz-out" id="rz5-out">Passez le pointeur sur l'image pour lire la valeur de ζ(<i>s</i>). À droite, la règle donne la hauteur <i>t</i> de la fenêtre&nbsp;: cliquez dessus pour y aller.</div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz5'); if (!box) return;
  var cv = R.$('rz5-cv'), ctx = cv.getContext('2d'), W = 600, H = 330, RS = 2, w = W / RS, h = H / RS, TMAXR = 60;
  var off = document.createElement('canvas'); off.width = w; off.height = h; var octx = off.getContext('2d'), img = octx.createImageData(w, h);
  var VOV = { cx: -1, cy: 0, sc: 40 };
  function VT(t) { return { cx: 0.5, cy: t, sc: 105 }; }
  var view = { cx: VOV.cx, cy: VOV.cy, sc: VOV.sc }, mode = 'ov', t = 14.13, zi = -1, tr = null;
  function hsl(hh, s, l) {
    var a = s * Math.min(l, 1 - l);
    function f(n) { var k = (n + hh * 12) % 12; return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); }
    return [f(0) * 255, f(8) * 255, f(4) * 255];
  }
  function render() {
    var i, j, d = img.data, v = view;
    for (j = 0; j < h; j++) for (i = 0; i < w; i++) {
      var sr = v.cx + (i * RS + RS / 2 - W / 2) / v.sc, si = v.cy - (j * RS + RS / 2 - H / 2) / v.sc;
      var z = R.zeta(sr, Math.abs(si)); if (si < 0) z[1] = -z[1];
      var m = Math.hypot(z[0], z[1]), hue = (Math.atan2(z[1], z[0]) / (2 * Math.PI) + 1) % 1, l = 1 - 1 / (1 + Math.pow(m, 0.6));
      var c = hsl(hue, 1, 0.97 * l), o = 4 * (j * w + i);
      d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
    }
    octx.putImageData(img, 0, 0);
    ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, 0, W, H);
    overlay();
  }
  function px(x) { return W / 2 + (x - view.cx) * view.sc; } function py(y) { return H / 2 - (y - view.cy) * view.sc; }
  function label(s, x, y, col, al, sz) { ctx.font = (sz || 13) + "px Georgia,'Times New Roman',serif"; ctx.textAlign = al || 'left'; ctx.lineWidth = 3.5; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.strokeText(s, x, y); ctx.fillStyle = col || '#0f172a'; ctx.fillText(s, x, y); }
  function dot(x, y, r) { ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.strokeStyle = '#0f172a'; ctx.lineWidth = 1.2; ctx.stroke(); }
  // règle des hauteurs (à droite) : position de la fenêtre le long de l'axe imaginaire
  var RX = W - 22, RY0 = H - 18, RY1 = 22;
  function ry(tt) { return RY0 - tt * (RY0 - RY1) / TMAXR; }
  function ruler() {
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.82)'; ctx.beginPath(); ctx.moveTo(W - 46, 6); ctx.lineTo(W - 4, 6); ctx.lineTo(W - 4, H - 6); ctx.lineTo(W - 46, H - 6); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#475569'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(RX, RY0); ctx.lineTo(RX, RY1); ctx.stroke();
    ctx.font = "11px Georgia,serif"; ctx.textAlign = 'right'; ctx.fillStyle = '#334155';
    [0, 20, 40, 60].forEach(function (tt) { ctx.beginPath(); ctx.moveTo(RX - 4, ry(tt)); ctx.lineTo(RX + 4, ry(tt)); ctx.stroke(); ctx.fillText(String(tt), RX - 7, ry(tt) + 4); });
    ctx.fillStyle = '#970E53'; R.ZEROS.forEach(function (g) { if (g <= TMAXR) { ctx.fillRect(RX + 2, ry(g) - 0.6, 6, 1.4); } });
    var half = H / (2 * view.sc), y1 = ry(Math.min(TMAXR, view.cy + half)), y2 = ry(Math.max(0, view.cy - half)), hh = Math.max(4, y2 - y1);
    ctx.fillStyle = 'rgba(0,77,128,0.28)'; ctx.strokeStyle = '#004D80'; ctx.lineWidth = 1.3; ctx.fillRect(RX - 12, y1, 24, hh); ctx.strokeRect(RX - 12, y1, 24, hh);
    ctx.textAlign = 'center'; ctx.fillStyle = '#334155'; ctx.font = "italic 11px Georgia,serif"; ctx.fillText('t', RX, 16);
    ctx.restore();
  }
  function overlay() {
    var sc = view.sc, i;
    ctx.save(); ctx.lineWidth = 1.3;
    [0, 1].forEach(function (L) { ctx.setLineDash([2, 4]); ctx.strokeStyle = 'rgba(255,255,255,0.75)'; ctx.beginPath(); ctx.moveTo(px(L), 0); ctx.lineTo(px(L), H); ctx.stroke(); });
    ctx.setLineDash([7, 4]); ctx.lineWidth = 1.8; ctx.strokeStyle = '#ffffff'; ctx.beginPath(); ctx.moveTo(px(0.5), 0); ctx.lineTo(px(0.5), H); ctx.stroke();
    ctx.setLineDash([]); ctx.strokeStyle = 'rgba(15,23,42,0.55)'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(0, py(0)); ctx.lineTo(W, py(0)); ctx.stroke();
    var ytop = view.cy + H / (2 * sc), ybot = view.cy - H / (2 * sc);
    if (sc >= 25 && ybot < 0 && ytop > 0) {
      label('pôle', px(1) + 6, py(0) - 12, '#0f172a');
      [-2, -4, -6].forEach(function (a) { dot(px(a), py(0), 3.5); label(String(a).replace('-', '−'), px(a), py(0) + 20, '#0f172a', 'center'); });
      label('zéros « triviaux »', px(-4), py(0) - 20, '#0f172a', 'center');
      label('bande critique', px(0.5), 18, '#0f172a', 'center'); label('Re s = 1/2', px(0.5), 34, '#0f172a', 'center');
    }
    if (sc >= 12) {
      R.ZEROS.forEach(function (g) { var yy = py(g); if (yy > -5 && yy < H + 5) { dot(px(0.5), yy, Math.max(1.6, Math.min(3.6, sc / 30))); if (sc >= 80) label('½ + ' + R.fmt(g, 3) + ' i', px(0.5) + 12, yy + 4, '#0f172a'); } });
    }
    if (ytop < R.ZEROS[0] && sc >= 25) { label('▲ premier zéro non trivial en t = ' + R.fmt(R.ZEROS[0], 2), px(0.5) + 10, 54, '#970E53', 'left', 12); }
    if (sc >= 80) label('t = ' + R.fmt(view.cy, 1), 8, 18, '#0f172a');
    ctx.restore(); ruler();
  }
  var pend = false;
  function ask() { if (pend) return; pend = true; requestAnimationFrame(function () { pend = false; render(); }); }
  function syncSlider() { R.$('rz5-t').value = t; R.$('rz5-tv').textContent = R.fmt(t, 2); }
  function setT(v) { tr = null; t = Math.max(0, Math.min(TMAXR, v)); view = VT(t); mode = 'tm'; syncSlider(); ask(); }
  // zoom continu d'une vue à l'autre : on dézoome pendant le déplacement, puis on zoome
  function go(target, dur) {
    var f = { cx: view.cx, cy: view.cy, sc: view.sc };
    tr = { from: f, to: target, t0: null, dur: dur || 1.8 }; mode = 'tr';
    requestAnimationFrame(stepTr);
  }
  function stepTr(ts) {
    if (!tr) return;
    if (tr.t0 === null) tr.t0 = ts;
    var u = Math.min(1, (ts - tr.t0) / 1000 / tr.dur), e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
    var f = tr.from, g = tr.to, dy = Math.abs(g.cy - f.cy), dx = Math.abs(g.cx - f.cx);
    var lmid = (Math.log(f.sc) + Math.log(g.sc)) / 2, need = H / (1.35 * Math.max(dy, dx * H / W, 0.4)), bump = Math.max(0, lmid - Math.log(Math.min(f.sc, g.sc, need)));
    var ls = Math.log(f.sc) + (Math.log(g.sc) - Math.log(f.sc)) * e - bump * Math.sin(Math.PI * e);
    view = { cx: f.cx + (g.cx - f.cx) * e, cy: f.cy + (g.cy - f.cy) * e, sc: Math.exp(ls) };
    render();
    if (u < 1) requestAnimationFrame(stepTr);
    else { view = { cx: g.cx, cy: g.cy, sc: g.sc }; if (g.sc === VOV.sc && g.cy === 0) { mode = 'ov'; } else { mode = 'tm'; t = g.cy; syncSlider(); } tr = null; render(); }
  }
  R.$('rz5-ov').addEventListener('click', function () { pl.stop(); go(VOV, 1.8); });
  R.$('rz5-t').addEventListener('input', function () { pl.stop(); setT(parseFloat(this.value)); });
  R.$('rz5-nx').addEventListener('click', function () { pl.stop(); zi = (mode === 'ov' || zi < 0) ? 0 : (zi + 1) % 12; go(VT(R.ZEROS[zi]), mode === 'ov' ? 2.2 : 1.3); });
  var pl = R.player(R.$('rz5-go'), box, function (dt) {
    if (tr) return;
    if (mode === 'ov') { go(VT(Math.max(t, 0.8)), 2.2); return; }
    var nt = t + 3.2 * dt; if (nt > 58) nt = 0.8; setT(nt);
  }, false);
  function pos(ev) { var r = cv.getBoundingClientRect(); return [(ev.clientX - r.left) / r.width * W, (ev.clientY - r.top) / r.height * H]; }
  cv.addEventListener('pointerdown', function (ev) {
    var p = pos(ev); if (p[0] < W - 48) return;
    pl.stop(); var tt = Math.max(0, Math.min(TMAXR, (RY0 - p[1]) * TMAXR / (RY0 - RY1)));
    go(VT(tt), 1.5);
  });
  cv.addEventListener('pointermove', function (ev) {
    var p = pos(ev), x = p[0], y = p[1];
    cv.style.cursor = x >= W - 48 ? 'pointer' : 'crosshair';
    if (x >= W - 48) return;
    var sr = view.cx + (x - W / 2) / view.sc, si = view.cy - (y - H / 2) / view.sc, z = R.zeta(sr, Math.abs(si)); if (si < 0) z[1] = -z[1];
    R.$('rz5-out').innerHTML = "<i>s</i> = " + R.cfmt(sr, si, 2) + " : ζ(<i>s</i>) = " + R.cfmt(z[0], z[1], 3) + ", |ζ| = " + R.fmt(Math.hypot(z[0], z[1]), 3);
  });
  render();
})();
</script>
<p class="legende">La fonction $\zeta$ dans le plan complexe. La teinte donne l'argument de $\zeta(s)$, la luminosité son module&nbsp;: autour d'un zéro (zone sombre), toutes les couleurs se rencontrent&nbsp;; près du pôle en $s = 1$, $\zeta$ devient très grande (zone claire). En « vue d'ensemble », on voit le pôle et les zéros triviaux sur l'axe réel. Le bouton «&nbsp;Zoom sur un zéro&nbsp;» zoome de façon continue depuis la vue d'ensemble jusqu'au premier zéro non trivial, puis fait glisser la fenêtre d'un zéro au suivant le long de la droite critique (pointillés blancs), où ils sont alignés. La règle à droite situe la fenêtre sur l'axe des ordonnées $t$&nbsp;; on peut cliquer dessus, ou utiliser le curseur.</p>

Une autre façon de voir les zéros&nbsp;: suivre la courbe décrite par $\zeta\\!\left(\frac{1}{2} + \mathrm{i}t\right)$ quand $t$ augmente.

<div class="svg-container" id="rz6">
<div style="display:flex;flex-wrap:wrap;gap:6px 14px;justify-content:center;align-items:flex-start;" id="rz6-svgs"></div>
<div class="rz-ctl">
<label><span>hauteur <i>t</i></span> <input type="range" class="fig-range" id="rz6-t" min="0" max="52" step="0.02" value="0" style="width:170px;margin:0;"> <span id="rz6-tv" style="min-width:3em;">0,00</span></label>
<button type="button" class="fig-btn" id="rz6-go"></button>
</div>
<div class="rz-out" id="rz6-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz6'); if (!box) return;
  var host = R.$('rz6-svgs'), TM = 52, SC = 44, CX = 150, CY = 150, DT = 0.03, pts = [], mods = [], i, n = Math.round(TM / DT), mx = 0;
  for (i = 0; i <= n; i++) { var z = R.zeta(0.5, i * DT); pts.push(z); mods.push(Math.hypot(z[0], z[1])); }
  var cmax = [], run = 0; for (i = 0; i <= n; i++) { run = Math.max(run, mods[i]); cmax.push(run); } mx = run;
  function mk(w, hh, label) { var s = R.el('svg', { viewBox: '0 0 ' + w + ' ' + hh, role: 'img', 'aria-label': label }); s.style.cssText = 'width:100%;max-width:' + w + 'px;height:auto;flex:1 1 ' + (w - 40) + 'px;'; host.appendChild(s); return s; }
  var A = mk(300, 300, "La courbe décrite par ζ(1/2 + it) dans le plan complexe quand t augmente. Chaque passage par l'origine correspond à un zéro de ζ sur la droite critique.");
  var B = mk(300, 300, "Le module de ζ(1/2 + it) en fonction de t. Il s'annule aux zéros.");
  R.el('rect', { x: 1, y: 1, width: 298, height: 298, fill: '#f8fafc', stroke: '#e2e8f0' }, A);
  var gridG = R.el('g', {}, A);
  R.el('line', { x1: 2, y1: CY, x2: 298, y2: CY, stroke: '#94a3b8' }, A); R.el('line', { x1: CX, y1: 2, x2: CX, y2: 298, stroke: '#94a3b8' }, A);
  R.txt(A, 12, 20, "ζ(½ + <tspan font-style='italic'>it</tspan>) dans le plan complexe", { size: 12, fill: '#64748b', italic: true });
  var origin = R.el('circle', { cx: CX, cy: CY, r: 3.2, fill: '#970E53' }, A); R.txt(A, CX + 6, CY + 15, '0', { size: 11, fill: '#970E53' });
  var trail = R.el('path', { fill: 'none', stroke: '#004D80', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, A), head = R.el('circle', { r: 5.2, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.5 }, A);
  var PX0 = 34, PX1 = 290, PY0 = 270, PY1 = 40, MM = Math.ceil(mx * 1.08 * 2) / 2;
  function tx(t) { return PX0 + t * (PX1 - PX0) / TM; } function ty(m) { return PY0 - m * (PY0 - PY1) / MM; }
  R.el('rect', { x: 1, y: 1, width: 298, height: 298, fill: '#f8fafc', stroke: '#e2e8f0' }, B);
  R.el('line', { x1: PX0, y1: PY0, x2: PX1 + 4, y2: PY0, stroke: '#94a3b8' }, B); R.el('line', { x1: PX0, y1: PY0, x2: PX0, y2: PY1 - 8, stroke: '#94a3b8' }, B);
  R.txt(B, 12, 20, "|ζ(½ + <tspan font-style='italic'>it</tspan>)| en fonction de <tspan font-style='italic'>t</tspan>", { size: 12, fill: '#64748b', italic: true });
  [0, 10, 20, 30, 40, 50].forEach(function (t) { R.el('line', { x1: tx(t), y1: PY0, x2: tx(t), y2: PY0 + 4, stroke: '#94a3b8' }, B); R.txt(B, tx(t), PY0 + 16, String(t), { size: 10.5, anchor: 'middle', fill: '#64748b' }); });
  for (var m = 1; m < MM; m++) (function (m) { R.txt(B, PX0 - 5, ty(m) + 4, String(m), { size: 10.5, anchor: 'end', fill: '#64748b' }); R.el('line', { x1: PX0, y1: ty(m), x2: PX1, y2: ty(m), stroke: '#e8edf2' }, B); })(m);
  R.ZEROS.forEach(function (g) { if (g < TM) R.el('line', { x1: tx(g), y1: PY0, x2: tx(g), y2: PY0 - 9, stroke: '#970E53', 'stroke-width': 2 }, B); });
  var dm = ''; for (i = 0; i <= n; i++) dm += (i ? 'L' : 'M') + tx(i * DT).toFixed(1) + ',' + ty(Math.min(mods[i], MM)).toFixed(1);
  R.el('path', { d: dm, fill: 'none', stroke: '#94a3b8', 'stroke-width': 1.2 }, B);
  var dm2 = R.el('path', { fill: 'none', stroke: '#004D80', 'stroke-width': 2 }, B), cur = R.el('circle', { r: 4.6, fill: '#004D80', stroke: '#fff', 'stroke-width': 1.4 }, B);
  R.txt(B, PX1, PY1 - 14, "traits magenta : zéros connus", { size: 10.5, anchor: 'end', fill: '#970E53', italic: true });
  var scl = R.txt(A, 12, 290, '', { size: 11, fill: '#64748b', italic: true });
  var t = 0;
  function grid() {
    var step = [0.25, 0.5, 1, 2].filter(function (q) { return q * SC >= 26; })[0] || 2, a, gd = '';
    gridG.innerHTML = '';
    for (a = -Math.floor(150 / SC / step); a <= Math.floor(150 / SC / step); a++) { gd += 'M' + (CX + SC * step * a).toFixed(1) + ',2V298M2,' + (CY - SC * step * a).toFixed(1) + 'H298'; }
    R.el('path', { d: gd, stroke: '#e8edf2', fill: 'none' }, gridG);
    scl.innerHTML = 'un carreau = ' + R.fmt(step, step < 1 ? 2 : 0);
  }
  function draw() {
    var k = Math.round(t / DT), d = '', d2 = '', j;
    SC = 135 / Math.max(1.5, cmax[k] * 1.04); grid(); R.put(origin, { cx: CX, cy: CY });
    for (j = 0; j <= k; j++) { d += (j ? 'L' : 'M') + (CX + SC * pts[j][0]).toFixed(1) + ',' + (CY - SC * pts[j][1]).toFixed(1); d2 += (j ? 'L' : 'M') + tx(j * DT).toFixed(1) + ',' + ty(Math.min(mods[j], MM)).toFixed(1); }
    trail.setAttribute('d', d); dm2.setAttribute('d', d2);
    R.put(head, { cx: CX + SC * pts[k][0], cy: CY - SC * pts[k][1] }); R.put(cur, { cx: tx(t), cy: ty(Math.min(mods[k], MM)) });
    var near = 1e9, zz = 0; R.ZEROS.forEach(function (g, q) { if (Math.abs(g - t) < near) { near = Math.abs(g - t); zz = q; } });
    var cnt = 0; R.ZEROS.forEach(function (g) { if (g <= t) cnt++; });
    R.$('rz6-out').innerHTML = "<i>t</i> = " + R.fmt(t, 2) + " : ζ(½ + <i>it</i>) = " + R.cfmt(pts[k][0], pts[k][1], 3) + ", |ζ| = " + R.fmt(mods[k], 3) + " — zéros déjà franchis : <b>" + cnt + "</b>" + (mods[k] < 0.25 ? " <b style='color:#970E53'>(la courbe passe près de l'origine)</b>" : '');
    R.$('rz6-tv').textContent = R.fmt(t, 2); R.$('rz6-t').value = t;
  }
  R.$('rz6-t').addEventListener('input', function () { pl.stop(); t = parseFloat(this.value); draw(); });
  var hold = 0;
  var pl = R.player(R.$('rz6-go'), box, function (dt) { if (t >= TM - 0.05) { hold += dt; if (hold > 1.6) { t = 0; hold = 0; } } else t = Math.min(TM, t + 2.6 * dt); draw(); }, false);
  draw();
})();
</script>
<p class="legende">À gauche, la courbe $t \mapsto \zeta\left(\frac{1}{2} + \mathrm{i}t\right)$ dans le plan complexe. Elle s'enroule en boucles, et chaque passage par l'origine est un zéro de $\zeta$ sur la droite critique. À droite, son module, qui s'annule aux zéros (traits magenta).</p>

L'hypothèse affirme que *tous* les zéros sont sur cette droite. Pour un zéro $\rho = \beta + \mathrm{i}\gamma$ hors de la droite, on aurait $\beta \neq \frac{1}{2}$, et trois autres zéros symétriques.

## Où se cachent les nombres premiers {#formule}

### Compter les nombres premiers

Notons $\pi(x)$ le nombre de nombres premiers inférieurs ou égaux à $x$ (rien à voir avec le nombre $\pi$). Gauss et Legendre ont constaté, vers 1800, que $\pi(x)$ est proche de $\frac{x}{\ln x}$, et encore plus proche du **logarithme intégral**

$$\mathrm{li}(x) = \int\_2^x \frac{\mathrm{d}t}{\ln t}.$$

Cette approximation est le **théorème des nombres premiers**, démontré en 1896 par Hadamard et de la Vallée Poussin. Leur démonstration utilise exactement l'absence de zéros de $\zeta$ sur la droite $\operatorname{Re}(s) = 1$. La question est maintenant de savoir *à quel point* $\mathrm{li}(x)$ approche $\pi(x)$.

<div class="svg-container" id="rz8">
<div class="rz-ctl">
<label><span>jusqu'à <i>x</i> =</span> <input type="range" class="fig-range" id="rz8-x" min="1.4" max="5" step="0.01" value="3.5" style="width:170px;margin:0;"> <span id="rz8-xv" style="min-width:4.6em;">3 162</span></label>
<button type="button" class="fig-btn" id="rz8-go"></button>
</div>
<div class="rz-out" id="rz8-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz8'); if (!box) return;
  var W = 600, H = 420, X0 = 56, X1 = 584;
  var svg = R.fig('rz8', W, H, "Le nombre π(x) de nombres premiers inférieurs ou égaux à x, comparé à x/ln x et à li(x). En bas, l'écart π(x) − li(x), avec l'enveloppe √x ln x/(8π) que garantirait l'hypothèse de Riemann pour x ≥ 2657.");
  var PR = R.sieve(100000), cnt = new Int32Array(100001), i, j = 0;
  for (i = 0; i <= 100000; i++) { while (j < PR.length && PR[j] <= i) j++; cnt[i] = j; }
  function li(x) { var L = Math.log(x), s = 0, t = 1, k; for (k = 1; k < 80; k++) { t *= L / k; s += t / k; } return 0.5772156649015329 + Math.log(L) + s; }
  var g = R.el('g', {}, svg);
  var xv = 3.5;
  function draw(vv) {
    var X = Math.round(Math.pow(10, vv)); g.innerHTML = '';
    var A0 = 250, A1 = 46, B0 = 392, B1 = 296; // zone haute et zone basse (y)
    function xp(x) { return X0 + (x - 2) / (X - 2) * (X1 - X0); }
    var top = li(X) * 1.06;
    function yp(v) { return A0 - v / top * (A0 - A1); }
    var a, tk = niceStep(X), ty = niceStep(top);
    function niceStep(m) { var e = Math.pow(10, Math.floor(Math.log10(m / 4))), r = m / 4 / e; return (r < 1.5 ? 1 : r < 3.5 ? 2 : r < 7.5 ? 5 : 10) * e; }
    for (a = 0; a <= top; a += ty) { R.el('line', { x1: X0, y1: yp(a), x2: X1, y2: yp(a), stroke: '#eef2f6' }, g); R.txt(g, X0 - 6, yp(a) + 4, fnum(a), { size: 10.5, anchor: 'end', fill: '#64748b' }); }
    for (a = tk; a <= X; a += tk) { R.txt(g, xp(a), A0 + 14, fnum(a), { size: 10.5, anchor: 'middle', fill: '#64748b' }); R.el('line', { x1: xp(a), y1: A0, x2: xp(a), y2: A0 + 4, stroke: '#94a3b8' }, g); }
    R.el('line', { x1: X0, y1: A0, x2: X1 + 4, y2: A0, stroke: '#94a3b8' }, g); R.el('line', { x1: X0, y1: A0, x2: X0, y2: A1 - 6, stroke: '#94a3b8' }, g);
    var dp = '', dl = '', dx = '', px, step = (X - 2) / 560;
    for (px = 2; px <= X + 1e-9; px += step) {
      var xx = Math.min(px, X); dp += (dp ? 'L' : 'M') + xp(xx).toFixed(1) + ',' + yp(cnt[Math.floor(xx)]).toFixed(1);
      dl += (dl ? 'L' : 'M') + xp(xx).toFixed(1) + ',' + yp(li(xx)).toFixed(1); dx += (dx ? 'L' : 'M') + xp(xx).toFixed(1) + ',' + yp(xx / Math.log(xx)).toFixed(1);
    }
    R.el('path', { d: dx, fill: 'none', stroke: '#C2770B', 'stroke-width': 1.8 }, g); R.el('path', { d: dl, fill: 'none', stroke: '#006C65', 'stroke-width': 1.8, 'stroke-dasharray': '6 3' }, g); R.el('path', { d: dp, fill: 'none', stroke: '#1e293b', 'stroke-width': 2 }, g);
    R.txt(g, X0 + 8, A1 + 4, "<tspan fill='#1e293b'>── π(<tspan font-style='italic'>x</tspan>)</tspan>   <tspan fill='#006C65'>- - li(<tspan font-style='italic'>x</tspan>)</tspan>   <tspan fill='#C2770B'>── <tspan font-style='italic'>x</tspan>/ln <tspan font-style='italic'>x</tspan></tspan>", { size: 12.5 });
    // écart
    var env = function (x) { return Math.sqrt(x) * Math.log(x) / (8 * Math.PI); }, mx = 1, e;
    for (px = 2; px <= X; px += Math.max(1, (X - 2) / 600)) { e = Math.abs(cnt[Math.floor(px)] - li(px)); if (e > mx) mx = e; if (X >= 2657 && px >= 2657) mx = Math.max(mx, env(px)); }
    mx *= 1.12; var mid = (B0 + B1) / 2;
    function yb(v) { return mid - v / mx * (mid - B1); }
    R.el('line', { x1: X0, y1: mid, x2: X1, y2: mid, stroke: '#94a3b8' }, g); R.el('line', { x1: X0, y1: B0, x2: X0, y2: B1 - 4, stroke: '#94a3b8' }, g);
    R.txt(g, X0 - 6, yb(mx * 0.8) + 4, '+' + fnum(mx * 0.8), { size: 10.5, anchor: 'end', fill: '#64748b' }); R.txt(g, X0 - 6, yb(-mx * 0.8) + 4, '−' + fnum(mx * 0.8), { size: 10.5, anchor: 'end', fill: '#64748b' });
    R.txt(g, X0 - 6, mid + 4, '0', { size: 10.5, anchor: 'end', fill: '#64748b' });
    R.txt(g, X0 + 8, B1 - 8, "écart π(<tspan font-style='italic'>x</tspan>) − li(<tspan font-style='italic'>x</tspan>)", { size: 12.5, fill: '#970E53' });
    var de = '', dh1 = '', dh2 = '';
    for (px = 2; px <= X + 1e-9; px += step) { var q = Math.min(px, X); de += (de ? 'L' : 'M') + xp(q).toFixed(1) + ',' + yb(cnt[Math.floor(q)] - li(q)).toFixed(1); if (q >= 2657) { dh1 += (dh1 ? 'L' : 'M') + xp(q).toFixed(1) + ',' + yb(env(q)).toFixed(1); dh2 += (dh2 ? 'L' : 'M') + xp(q).toFixed(1) + ',' + yb(-env(q)).toFixed(1); } }
    if (dh1) { R.el('path', { d: dh1, fill: 'none', stroke: '#004D80', 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, g); R.el('path', { d: dh2, fill: 'none', stroke: '#004D80', 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, g); R.txt(g, X1, B0 + 14, "pointillés bleus : ± √<tspan font-style='italic'>x</tspan> ln <tspan font-style='italic'>x</tspan> / (8π), valable si l'hypothèse est vraie", { size: 11.5, anchor: 'end', fill: '#004D80', italic: true }); }
    R.el('path', { d: de, fill: 'none', stroke: '#970E53', 'stroke-width': 1.7 }, g);
    var pi_ = cnt[X], lx = li(X);
    R.$('rz8-out').innerHTML = "<i>x</i> = " + fnum(X) + " : π(<i>x</i>) = <b>" + fnum(pi_) + "</b>, li(<i>x</i>) = " + R.fmt(lx, 1) + ", <i>x</i>/ln <i>x</i> = " + R.fmt(X / Math.log(X), 1) + " ; écart π − li = <b>" + R.fmt(pi_ - lx, 1) + "</b>" + (X >= 2657 ? ", enveloppe √<i>x</i> ln <i>x</i>/(8π) = " + R.fmt(env(X), 1) : '');
    R.$('rz8-xv').textContent = fnum(X);
  }
  function fnum(n) { return Math.round(n).toLocaleString('fr-FR').replace(/ | /g, ' '); }
  R.$('rz8-x').addEventListener('input', function () { xv = parseFloat(this.value); pl.stop(); draw(xv); });
  var dirn = 1;
  var pl = R.player(R.$('rz8-go'), box, function (dt) { xv += dirn * 0.5 * dt; if (xv > 5) { xv = 5; dirn = -1; } if (xv < 1.4) { xv = 1.4; dirn = 1; } R.$('rz8-x').value = xv; draw(xv); }, false);
  draw(xv);
})();
</script>
<p class="legende">Le nombre de nombres premiers $\pi(x)$ (en noir, un escalier), comparé à $\frac{x}{\ln x}$ (en orange) et à $\mathrm{li}(x)$ (en vert, pointillés). Le logarithme intégral suit l'escalier de très près. En bas&nbsp;: l'écart $\pi(x) - \mathrm{li}(x)$. Il reste bien en dessous de $\frac{\sqrt{x}\ln x}{8\pi}$, la borne que l'hypothèse de Riemann garantit (pointillés bleus).</p>

### Le pont&nbsp;: la dérivée logarithmique du produit d'Euler

Il est plus commode de compter les premiers avec un poids. On note $\Lambda(n) = \ln p$ si $n$ est une puissance $p^k$ d'un nombre premier $p$ (avec $k \ge 1$), et $\Lambda(n) = 0$ sinon (c'est la fonction de von Mangoldt). La **fonction de Chebyshev** est

$$\psi(x) = \sum\_{n \le x} \Lambda(n) = \sum\_{p^k \le x} \ln p.$$

C'est un escalier qui monte de $\ln p$ à chaque puissance d'un nombre premier $p$. Le lien avec $\zeta$ vient du produit d'Euler&nbsp;:

<div id="theo">

$$-\frac{\zeta^{\prime}(s)}{\zeta(s)} = \sum\_{n=1}^{+\infty} \frac{\Lambda(n)}{n^s} \qquad (\operatorname{Re}(s) > 1).$$

</div>

<br>

<div id="preuve">
<details>
<summary>le calcul&nbsp;: la dérivée logarithmique du produit d'Euler</summary>

Le produit d'Euler donne $\ln \zeta(s) = -\sum\_p \ln\bigl(1 - p^{-s}\bigr)$. On dérive terme à terme&nbsp;:

$$\frac{\zeta^{\prime}(s)}{\zeta(s)} = -\sum\_p \frac{\ln p\\,p^{-s}}{1 - p^{-s}} = -\sum\_p \ln p \sum\_{k \ge 1} p^{-ks} = -\sum\_{n \ge 1} \frac{\Lambda(n)}{n^s},$$

où l'on a développé $\frac{p^{-s}}{1 - p^{-s}} = \sum\_{k \ge 1} p^{-ks}$ (série géométrique).

</details>
</div>

<br>

À gauche, une fonction qui ne dépend que de $\zeta$&nbsp;; à droite, une somme qui ne dépend que des nombres premiers. Pour passer de cette somme à l'escalier $\psi(x)$, on utilise une intégrale de contour (formule de Perron), qui exprime $\psi(x)$ comme une intégrale de $-\frac{\zeta^{\prime}}{\zeta}(s)\frac{x^s}{s}$ le long d'une droite verticale. On déplace ensuite le contour vers la gauche. À chaque pôle de $-\frac{\zeta^{\prime}}{\zeta}$ rencontré, on récupère un résidu. Or $-\frac{\zeta^{\prime}}{\zeta}$ a des pôles&nbsp;:
<ul>
<li>en $s = 1$ (le pôle de $\zeta$), de résidu $1$, qui donne le terme $x$&nbsp;;</li>
<li>en chaque zéro $\rho$ de $\zeta$, de résidu $-1$ (compté avec la multiplicité du zéro), qui donne un terme $-\frac{x^\rho}{\rho}$&nbsp;;</li>
<li>en les zéros triviaux, qui donnent un terme de plus petite taille.</li>
</ul>

### La formule explicite

On obtient la formule suivante, due à von Mangoldt (1895) à partir des idées de Riemann.

<div id="theo">

**Formule explicite**

Pour $x > 1$ qui n'est pas une puissance de nombre premier,

$$\psi(x) = x - \sum\_{\rho} \frac{x^\rho}{\rho} - \ln(2\pi) - \frac{1}{2}\ln\bigl(1 - x^{-2}\bigr),$$

où la somme porte sur les zéros non triviaux $\rho$ de $\zeta$ (comptés avec multiplicité et regroupés par paires $\rho, \bar{\rho}$).

</div>

Le terme principal $x$ est le théorème des nombres premiers. Tous les écarts à cette tendance sont dus aux zéros. Pour un zéro $\rho = \frac{1}{2} + \mathrm{i}\gamma$ sur la droite critique, on a $x^\rho = \sqrt{x}\\,\mathrm{e}^{\mathrm{i}\gamma\ln x}$&nbsp;: une **onde** d'amplitude $\sqrt{x}$ qui oscille en fonction de $\ln x$, avec la fréquence $\gamma$. Chaque zéro apporte sa fréquence. Reconstruire l'escalier des nombres premiers est une synthèse de Fourier dont les fréquences sont les ordonnées des zéros.

La reconstruction de cet escalier, zéro après zéro, est animée [plus bas](#reconstruction).


### La même formule pour $\pi(x)$

La fonction qu'on cherche vraiment à reconstruire est $\pi(x)$, le nombre de premiers inférieurs ou égaux à $x$. Riemann a donné une formule directe pour elle. Il compte chaque puissance $p^k$ d'un nombre premier avec le poids $\frac{1}{k}$, ce qui définit $J(x) = \sum\_{k \ge 1} \frac{1}{k}\\,\pi\bigl(x^{1/k}\bigr)$, et il obtient

<div id="theo">

**Formule de Riemann**

Pour $x > 1$,

$$J(x) = \mathrm{li}(x) - \sum\_{\rho} \mathrm{li}\bigl(x^{\rho}\bigr) - \ln 2 + \int\_x^{+\infty} \frac{\mathrm{d}t}{t\\,(t^2 - 1)\ln t},$$

où $\mathrm{li}(x^\rho)$ désigne la fonction exponentielle intégrale $\mathrm{Ei}(\rho\ln x)$, et l'on retrouve $\pi$ par $\pi(x) = \sum\_{n \ge 1} \frac{\mu(n)}{n}\\,J\bigl(x^{1/n}\bigr)$ ($\mu$ est la fonction de Möbius).

</div>

<br>

<div id="preuve">
<details>
<summary>le calcul&nbsp;: retrouver $\pi$ à partir de $J$ (inversion de Möbius)</summary>

La fonction de Möbius vérifie $\sum\_{n \mid m} \mu(n) = 1$ si $m = 1$ et $0$ sinon. En reportant la définition de $J$ dans $\sum\_{n \ge 1} \frac{\mu(n)}{n} J\bigl(x^{1/n}\bigr)$, on obtient la somme double

$$\sum\_{n \ge 1}\sum\_{k \ge 1} \frac{\mu(n)}{n k}\\,\pi\bigl(x^{1/(nk)}\bigr) = \sum\_{m \ge 1} \frac{1}{m}\\,\pi\bigl(x^{1/m}\bigr) \sum\_{n \mid m} \mu(n) = \pi(x),$$

où l'on a posé $m = nk$. Seuls les entiers $n \le \log\_2 x$ comptent, puisque $J(y) = 0$ pour $y < 2$.

</details>
</div>

<br>

Si l'on garde le seul terme $\mathrm{li}$, l'inversion donne la **fonction $R$ de Riemann**, $R(x) = \sum\_n \frac{\mu(n)}{n}\mathrm{li}\bigl(x^{1/n}\bigr)$, qui suit déjà l'escalier $\pi(x)$ de très près&nbsp;: c'est le meilleur point de départ sans les zéros. Chaque paire de zéros $\rho, \bar{\rho}$ ajoute ensuite une correction $-2\operatorname{Re} R(x^\rho)$, qui est une petite onde.

### Reconstruire l'escalier, zéro après zéro {#reconstruction}

La figure suivante montre les deux formules à l'œuvre. Le bouton $\pi(x)$ ou $\psi(x)$ choisit la fonction reconstruite&nbsp;; le curseur (ou le bouton d'animation) ajoute les zéros un à un, par ordre croissant d'ordonnée.

<div class="svg-container" id="rz7">
<div class="rz-ctl">
<span role="group" aria-label="Fonction à reconstruire" style="display:inline-flex;gap:6px;align-items:center;"><span style="font-size:0.95em;">reconstruire</span>
<button type="button" class="fig-btn" id="rz7-bpi" aria-pressed="true"><span>π(<i>x</i>)</span></button>
<button type="button" class="fig-btn" id="rz7-bps" aria-pressed="false"><span>ψ(<i>x</i>)</span></button></span>
<label><span>zéros utilisés <i>K</i></span> <input type="range" class="fig-range" id="rz7-k" min="0" max="79" step="1" value="0" style="width:160px;margin:0;"> <span id="rz7-kv" style="min-width:1.8em;">0</span></label>
<button type="button" class="fig-btn" id="rz7-go"></button>
</div>
<div class="rz-out" id="rz7-out"></div>
</div>
<script>
(function () {
  var R = window.RZ, box = R.$('rz7'); if (!box) return;
  var W = 600, H = 360, X0 = 38, X1 = 588, Y0 = 248, Y1 = 34, WY0 = 336, WH = 38;
  var svg = R.fig('rz7', W, H, "Reconstruction d'un escalier de nombres premiers à partir des zéros de la fonction zêta. L'escalier est soit π(x), le nombre de nombres premiers inférieurs ou égaux à x, soit ψ(x), qui augmente de ln p à chaque puissance d'un nombre premier p. Avec zéro zéro, on obtient la courbe lisse de la tendance moyenne ; en ajoutant un à un les zéros, les marches apparaissent.");
  var EG = 0.5772156649015329, P = R.sieve(50), i;
  function li(y) { var L = Math.log(y), s = 0, t = 1, k; for (k = 1; k < 120; k++) { t *= L / k; s += t / k; } return EG + Math.log(L) + s; }
  function ei(zr, zi) { // exponentielle intégrale, Im z > 0
    var a = Math.hypot(zr, zi), sr, si, tr, ti, k, nr;
    if (a < 28) {
      sr = 0; si = 0; tr = 1; ti = 0;
      for (k = 1; k < 140; k++) { nr = (tr * zr - ti * zi) / k; ti = (tr * zi + ti * zr) / k; tr = nr; sr += tr / k; si += ti / k; if (k > a && Math.hypot(tr, ti) / k < 1e-16) break; }
      return [EG + Math.log(a) + sr, Math.atan2(zi, zr) + si];
    }
    sr = 1; si = 0; tr = 1; ti = 0;
    var d2 = zr * zr + zi * zi, ir = zr / d2, ii = -zi / d2;
    for (k = 1; k <= a; k++) { var ur = (tr * ir - ti * ii) * k, ui = (tr * ii + ti * ir) * k; if (Math.hypot(ur, ui) > Math.hypot(tr, ti)) break; tr = ur; ti = ui; sr += tr; si += ti; }
    var e = Math.exp(zr), er = e * Math.cos(zi), ei_ = e * Math.sin(zi), pr = er * sr - ei_ * si, pi = er * si + ei_ * sr;
    return [(pr * ir - pi * ii), (pr * ii + pi * ir) + Math.PI];
  }
  var MU = { 1: 1, 2: -1, 3: -1, 5: -1 };
  function tail(y) { var a0 = Math.log(y), h = 12 / 300, s = 0, j, u; for (j = 0; j < 300; j++) { u = a0 + (j + 0.5) * h; s += h / (u * (Math.exp(2 * u) - 1)); } return s; }
  function grid(xmin, xmax, step) { var xs = [], x; for (x = xmin + 0.001; x <= xmax; x += step) xs.push(x); return xs; }
  // ---- deux modes : π(x) et ψ(x) ----
  var modes = {};
  function psiSteps() { var pp = []; R.sieve(40).forEach(function (p) { for (var q = p; q <= 40; q *= p) pp.push([q, Math.log(p)]); }); pp.sort(function (u, v) { return u[0] - v[0]; }); return pp; }
  function makePsi() {
    var o = { key: 'psi', XMIN: 1.4, XMAX: 40, YM: 44, yt: [0, 10, 20, 30, 40], xt: [10, 20, 30, 40], steps: psiSteps() };
    o.xs = grid(o.XMIN, o.XMAX, 0.04); var N = o.xs.length;
    o.lnx = o.xs.map(Math.log); o.sq = o.xs.map(Math.sqrt);
    o.base = o.xs.map(function (x) { return x - Math.log(2 * Math.PI) - 0.5 * Math.log(1 - 1 / (x * x)); });
    o.ref = o.xs.map(function (x) { return x; });
    o.truth = function (x) { var s = 0; o.steps.forEach(function (q) { if (q[0] <= x) s += q[1]; }); return s; };
    o.corr = function (j, i) { var g = R.ZEROS[j], ph = g * o.lnx[i]; return -2 * o.sq[i] * ((0.5 * Math.cos(ph) + g * Math.sin(ph)) / (0.25 + g * g)); };
    o.title = "ψ(<tspan font-style='italic'>x</tspan>) : somme des ln <tspan font-style='italic'>p</tspan> pour les puissances de premiers <tspan font-style='italic'>p</tspan>ᵏ ≤ <tspan font-style='italic'>x</tspan>";
    o.refLab = "- - <tspan font-style='italic'>x</tspan> (théorème des nombres premiers)"; o.refName = "<i>x</i>"; o.exLab = "── ψ(<tspan font-style='italic'>x</tspan>) exacte";
    o.w0 = "avec 0 zéro : la courbe lisse <tspan font-style='italic'>x</tspan> − ln 2π";
    o.wk = function (K) { return "onde ajoutée par le zéro n°" + K + " (<tspan font-style='italic'>γ</tspan> = " + R.fmt(R.ZEROS[K - 1], 3) + ") : amplitude ~ √<tspan font-style='italic'>x</tspan>, oscillation en ln <tspan font-style='italic'>x</tspan>"; };
    o.staircase = function (X, Y) { var d = 'M' + X(o.XMIN) + ',' + Y(0), acc = 0; o.steps.forEach(function (e) { d += 'L' + X(e[0]).toFixed(1) + ',' + Y(acc).toFixed(1); acc += e[1]; d += 'L' + X(e[0]).toFixed(1) + ',' + Y(acc).toFixed(1); }); return d + 'L' + X(o.XMAX) + ',' + Y(acc); };
    return o;
  }
  function makePi() {
    var o = { key: 'pi', XMIN: 2, XMAX: 50, YM: 19, yt: [0, 5, 10, 15], xt: [10, 20, 30, 40, 50] };
    o.xs = grid(o.XMIN, o.XMAX, 0.08); var N = o.xs.length, k;
    o.base = new Float64Array(N); o.ref = new Float64Array(N);
    for (k = 0; k < N; k++) { var tot = 0, n; for (n = 1; n <= 5; n++) { if (!MU[n]) continue; var y = Math.pow(o.xs[k], 1 / n); if (y < 2) continue; tot += MU[n] / n * (li(y) - Math.LN2 + tail(y)); } o.base[k] = tot; o.ref[k] = li(o.xs[k]); }
    o.truth = function (x) { var c = 0; P.forEach(function (p) { if (p <= x) c++; }); return c; };
    o.corr = function (j, i) { var tot = 0, n, g = R.ZEROS[j]; for (n = 1; n <= 5; n++) { if (!MU[n]) continue; if (Math.pow(o.xs[i], 1 / n) < 2) continue; var L = Math.log(o.xs[i]) / n, v = ei(0.5 * L, g * L); tot += MU[n] / n * 2 * v[0]; } return -tot; };
    o.title = "π(<tspan font-style='italic'>x</tspan>) : nombre de nombres premiers ≤ <tspan font-style='italic'>x</tspan>";
    o.refLab = "- - li(<tspan font-style='italic'>x</tspan>)"; o.refName = "li(<i>x</i>)"; o.exLab = "── π(<tspan font-style='italic'>x</tspan>) exact";
    o.w0 = "sans zéro : la fonction <tspan font-style='italic'>R</tspan> de Riemann, déjà très proche de l'escalier";
    o.wk = function (K) { return "correction apportée par le zéro n°" + K + " (<tspan font-style='italic'>γ</tspan> = " + R.fmt(R.ZEROS[K - 1], 3) + ")"; };
    o.staircase = function (X, Y) { var d = 'M' + X(o.XMIN) + ',' + Y(1), c = 1; P.forEach(function (p) { if (p > 2) { d += 'L' + X(p).toFixed(1) + ',' + Y(c).toFixed(1); c++; d += 'L' + X(p).toFixed(1) + ',' + Y(c).toFixed(1); } }); return d + 'L' + X(o.XMAX) + ',' + Y(c); };
    return o;
  }
  function init(o) { o.cum = new Float64Array(o.xs.length); o.Kc = 0; o.cache = []; return o; }
  var cur, K = 0, S = null, apx, wave, wl;
  function build(o) {
    cur = o; if (S) svg.removeChild(S); S = R.el('g', {}, svg);
    function X(x) { return X0 + (x - o.XMIN) / (o.XMAX - o.XMIN) * (X1 - X0); } function Y(y) { return Y0 - y / o.YM * (Y0 - Y1); }
    o.X = X; o.Y = Y; var gd = '';
    o.xt.forEach(function (a) { gd += 'M' + X(a) + ',' + Y0 + 'V' + Y1; }); o.yt.forEach(function (a) { gd += 'M' + X0 + ',' + Y(a) + 'H' + X1; });
    R.el('path', { d: gd, stroke: '#eef2f6', fill: 'none' }, S);
    R.el('line', { x1: X0, y1: Y0, x2: X1 + 4, y2: Y0, stroke: '#94a3b8' }, S); R.el('line', { x1: X0, y1: Y0, x2: X0, y2: Y1 - 8, stroke: '#94a3b8' }, S);
    o.xt.forEach(function (a) { R.txt(S, X(a), Y0 + 14, String(a), { size: 11, anchor: 'middle', fill: '#64748b' }); });
    o.yt.forEach(function (a) { R.txt(S, X0 - 6, Y(a) + 4, String(a), { size: 11, anchor: 'end', fill: '#64748b' }); });
    R.txt(S, X1 + 12, Y0 + 4, "<tspan font-style='italic'>x</tspan>", { size: 12, anchor: 'end', fill: '#64748b' });
    R.txt(S, 14, 20, o.title, { size: 12.5, fill: '#64748b', italic: true });
    var dr = ''; for (var i = 0; i < o.xs.length; i++) dr += (i ? 'L' : 'M') + X(o.xs[i]).toFixed(1) + ',' + Y(o.ref[i]).toFixed(1);
    R.el('path', { d: dr, fill: 'none', stroke: '#94a3b8', 'stroke-width': 1.6, 'stroke-dasharray': '5 4' }, S);
    R.el('path', { d: o.staircase(X, Y), fill: 'none', stroke: '#1e293b', 'stroke-width': 1.8 }, S);
    apx = R.el('path', { fill: 'none', stroke: '#C2770B', 'stroke-width': 2.2, 'stroke-linejoin': 'round' }, S);
    R.txt(S, X0 + 14, Y1 + 24, o.exLab, { size: 12.5, fill: '#1e293b' });
    R.txt(S, X0 + 14, Y1 + 42, "── approximation avec <tspan font-style='italic'>K</tspan> zéros", { size: 12.5, fill: '#C2770B' });
    R.txt(S, X0 + 14, Y1 + 60, o.refLab, { size: 12.5, fill: '#94a3b8' });
    R.el('line', { x1: X0, y1: WY0, x2: X1, y2: WY0, stroke: '#cbd5e1' }, S);
    wave = R.el('path', { fill: 'none', stroke: '#006C65', 'stroke-width': 1.5 }, S); wl = R.txt(S, X0, 281, '', { size: 12, fill: '#006C65', italic: true });
    R.$('rz7-bpi').setAttribute('aria-pressed', o.key === 'pi'); R.$('rz7-bps').setAttribute('aria-pressed', o.key === 'psi');
    [['rz7-bpi', 'pi'], ['rz7-bps', 'psi']].forEach(function (q) { var b = R.$(q[0]), on = o.key === q[1]; b.style.background = on ? '#e0ecf5' : '#fff'; b.style.borderColor = on ? '#004D80' : '#cbd5e1'; b.style.color = on ? '#004D80' : '#334155'; });
  }
  function sync() {
    var o = cur, N = o.xs.length, i;
    while (o.Kc < K) { o.cache[o.Kc] = []; for (i = 0; i < N; i++) { var t = o.corr(o.Kc, i); o.cache[o.Kc][i] = t; o.cum[i] += t; } o.Kc++; }
    while (o.Kc > K) { o.Kc--; for (i = 0; i < N; i++) o.cum[i] -= o.cache[o.Kc][i]; }
    var dd = '', s2 = 0, s1 = 0, nn = 0;
    for (i = 0; i < N; i++) { var v = o.base[i] + o.cum[i]; dd += (i ? 'L' : 'M') + o.X(o.xs[i]).toFixed(1) + ',' + o.Y(Math.max(-1, Math.min(o.YM, v))).toFixed(1); if (o.xs[i] >= 3) { var tr = o.truth(o.xs[i]); s2 += (v - tr) * (v - tr); s1 += (o.ref[i] - tr) * (o.ref[i] - tr); nn++; } }
    apx.setAttribute('d', dd);
    if (K > 0) {
      var rc = o.cache[K - 1], mx = 0, wd = ''; for (i = 0; i < N; i++) mx = Math.max(mx, Math.abs(rc[i]));
      for (i = 0; i < N; i++) wd += (i ? 'L' : 'M') + o.X(o.xs[i]).toFixed(1) + ',' + (WY0 - rc[i] / mx * WH * 0.5).toFixed(1);
      wave.setAttribute('d', wd); wave.setAttribute('visibility', 'visible'); wl.innerHTML = o.wk(K);
    } else { wave.setAttribute('visibility', 'hidden'); wl.innerHTML = o.w0; }
    R.$('rz7-kv').textContent = K; R.$('rz7-k').value = K;
    R.$('rz7-out').innerHTML = "écart quadratique moyen avec " + (o.key === 'pi' ? 'π' : 'ψ') + "(<i>x</i>) sur [3 ; " + o.XMAX + "] : " + o.refName + " → <b>" + R.fmt(Math.sqrt(s1 / nn), 2) + "</b> ; avec <b>" + K + "</b> zéro" + (K > 1 ? 's' : '') + " → <b>" + R.fmt(Math.sqrt(s2 / nn), 2) + "</b>";
  }
  function show(key) { if (!modes[key]) modes[key] = init(key === 'pi' ? makePi() : makePsi()); build(modes[key]); sync(); }
  R.$('rz7-bpi').addEventListener('click', function () { show('pi'); });
  R.$('rz7-bps').addEventListener('click', function () { show('psi'); });
  R.$('rz7-k').addEventListener('input', function () { K = parseInt(this.value, 10); pl.stop(); sync(); });
  var acc = 0, hold = 0;
  var pl = R.player(R.$('rz7-go'), box, function (dt) { if (K >= 79) { hold += dt; if (hold > 2) { K = 0; hold = 0; sync(); } return; } acc += dt; if (acc > 0.22) { acc = 0; K++; sync(); } }, false);
  show('pi');
})();
</script>
<p class="legende">Reconstruction de l'escalier des nombres premiers à partir des zéros de $\zeta$. L'escalier noir est $\pi(x)$ (formule de Riemann) ou $\psi(x)$ (formule explicite). Avec $K = 0$, la courbe orange est la tendance lisse&nbsp;: la fonction $R$ de Riemann pour $\pi$ (déjà plus proche de l'escalier que la courbe grise $\mathrm{li}(x)$), la courbe $x - \ln 2\pi - \frac{1}{2}\ln(1 - x^{-2})$ pour $\psi$. Chaque zéro ajouté apporte une onde (en vert, en bas)&nbsp;: les marches se dessinent de plus en plus nettement aux nombres premiers (pour $\pi$) ou à leurs puissances $2, 3, 4, 5, 7, 8, 9, \dots$ (pour $\psi$), et la courbe orange tend vers l'escalier.</p>

### Ce que dit l'hypothèse sur les nombres premiers

Si un zéro avait une partie réelle $\beta > \frac{1}{2}$, le terme $x^\rho$ aurait pour amplitude $x^\beta$, plus grande que $\sqrt{x}$&nbsp;: les nombres premiers s'écarteraient de leur répartition moyenne de plus que $\sqrt{x}$. L'hypothèse de Riemann dit que ce n'arrive jamais&nbsp;: les oscillations sont partout de taille $\sqrt{x}$. Précisément&nbsp;:

<div id="theo">

**Une reformulation de l'hypothèse de Riemann** (Koch, 1901)

L'hypothèse de Riemann est équivalente à

$$\pi(x) = \mathrm{li}(x) + O\bigl(\sqrt{x}\\,\ln x\bigr) \quad (x \to +\infty).$$

Plus précisément, si elle est vraie, alors $|\pi(x) - \mathrm{li}(x)| < \frac{\sqrt{x}\ln x}{8\pi}$ pour tout $x \ge 2657$ (Schoenfeld, 1976).

</div>

La taille $\sqrt{x}$ est celle des fluctuations d'une marche aléatoire de $x$ pas. L'hypothèse de Riemann dit que les nombres premiers sont aussi réguliers que s'ils étaient tirés au hasard avec la bonne densité $\frac{1}{\ln n}$&nbsp;: ni plus, ni moins. C'est la meilleure régularité qu'on puisse espérer.

## Ce que l'on sait {#savoir}

<ul>
<li><b>Vérifications numériques.</b> Les premiers $10^{13}$ zéros non triviaux ont été calculés et sont tous sur la droite critique (Gourdon, 2004). Platt et Trudgian (2021) ont vérifié que tous les zéros d'ordonnée $|\operatorname{Im}| \le 3 \times 10^{12}$ sont sur la droite critique.</li>
<li><b>Une infinité de zéros sur la droite.</b> Hardy l'a démontré en 1914. Selberg (1942) a montré qu'une proportion positive des zéros est sur la droite, Levinson (1974) en a obtenu plus d'un tiers, Conrey (1989) plus de $40\ \%$, Pratt, Robles, Zaharescu et Zeindler (2020) plus de $41{,}6\ \%$.</li>
<li><b>Ce qui en dépend.</b> Des centaines de théorèmes d'arithmétique commencent par «&nbsp;sous l'hypothèse de Riemann&nbsp;». Par exemple, le critère de Robin&nbsp;: l'hypothèse est équivalente à $\sigma(n) < \mathrm{e}^{\gamma}\,n\ln\ln n$ pour tout entier $n > 5040$ ($\sigma(n)$ est la somme des diviseurs de $n$ et $\gamma$ la constante d'Euler).</li>
<li><b>Des généralisations.</b> L'hypothèse de Riemann généralisée remplace $\zeta$ par les fonctions $L$ de Dirichlet et d'autres fonctions analogues, qui comptent les premiers dans les progressions arithmétiques. On connaît des analogues démontrés&nbsp;: pour les corps de fonctions sur un corps fini, c'est le théorème de Weil (1948) puis de Deligne (1974).</li>
<li><b>Une piste spectrale.</b> La conjecture de Hilbert et Pólya propose que les ordonnées $\gamma$ des zéros soient les valeurs propres d'un opérateur autoadjoint, ce qui imposerait qu'elles soient réelles, donc que les zéros soient sur la droite. Les espacements des zéros ressemblent à ceux des valeurs propres de grandes matrices aléatoires hermitiennes (Montgomery, Odlyzko). Aucun opérateur de ce genre n'est connu.</li>
</ul>

## Actualité&nbsp;: l'annonce du 20 novembre 2026 {#actualite}

*Situation au 21 novembre 2026, le lendemain de l'annonce. Les informations ci-dessous sont celles que rapportent les médias et les chercheurs cités&nbsp;; elles évoluent d'heure en heure.*

**Un résultat annoncé en août.** Le 10 août 2026, l'équipe Science d'Anthropic a publié un billet intitulé «&nbsp;Claude has improved on a longstanding lower bound for the fraction of zeros of the Riemann zeta function that satisfy the Riemann hypothesis&nbsp;»&nbsp;: une version de recherche, non publiée, du modèle d'IA Claude y fait passer de 41,6 % à 67,2 % la proportion des zéros connue pour être sur la droite critique. Les auteurs précisent que ce résultat n'est pas une démonstration de l'hypothèse de Riemann et ne s'attendent pas à ce que ces techniques y conduisent. Il a été formalisé en Lean (voir ci-dessous) et examiné par deux spécialistes, Brian Conrey et Dan Goldston.

**L'annonce du 20 novembre.** Le 20 novembre 2026, Levent Alpöge, mathématicien chez Anthropic, a annoncé avoir démontré avec Claude l'hypothèse de Riemann, ainsi, selon plusieurs comptes rendus, que sa version généralisée. La démonstration est publiée sous la forme d'une **formalisation dans Lean**, un assistant de preuve&nbsp;: un très grand ensemble de fichiers (plus de 175 000 selon l'un des comptes rendus) dont un ordinateur vérifie chaque étape logique, à partir des seuls axiomes usuels. D'après ces comptes rendus, Andrew Sutherland (MIT) a compilé ces fichiers de façon indépendante, et le vérificateur de Lean accepte la démonstration. Le même jour, Alessandro Masullo (Stanford) aurait annoncé de son côté une autre démonstration, rédigée sans IA&nbsp;; Ravi Vakil, président de l'American Mathematical Society, aurait signalé qu'elle avait été soumise de façon indépendante.

**Ce qui est vérifié, et ce qui ne l'est pas encore.** Une démonstration formalisée soulève trois questions distinctes.
<ol>
<li><b>Le vérificateur accepte-t-il la démonstration&nbsp;?</b> D'après les comptes rendus, oui, et cela a été reproduit indépendamment.</li>
<li><b>L'énoncé formalisé est-il bien l'hypothèse de Riemann&nbsp;?</b> Il faut relire les définitions écrites en Lean (la fonction $\zeta$, ses zéros, la droite critique). C'est précisément ce que des spécialistes examinent. D'après les comptes rendus, la première vérification indique que le code démontre l'énoncé tel qu'il est posé.</li>
<li><b>La démonstration est-elle comprise&nbsp;?</b> Personne, au 21 novembre, n'a encore relu l'argument sous une forme lisible par des humains. Un compte rendu parle de plusieurs semaines pour le comprendre, et certains spécialistes regrettent l'absence d'un texte rédigé.</li>
</ol>

Les annonces précédentes d'une démonstration, par exemple celles d'Atiyah en 2018 ou de de Branges en 2004, n'ont pas été confirmées. Les spécialistes réagissent ici avec un mélange d'enthousiasme et de prudence. Pour le prix du millénaire, le règlement de l'Institut Clay exige en outre une publication dans une revue à comité de lecture, puis un délai de deux ans pendant lequel la solution doit être largement acceptée.


