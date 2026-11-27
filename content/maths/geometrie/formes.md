+++
title = "Formes différentielles"
date = 2026-11-15T12:00:00+01:00
weight = 7
+++

<style>
.bloc
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid;
    border-radius: 12px;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.bloc-titre
{
    font-weight: bold;
    margin-bottom: 0.3em;
}
.bloc-def { border-color: #004D80; background: #EEF4FA; }
.bloc-prop { border-color: #C2770B; background: #FDF6EC; }
.bloc-theo { border-color: #970E53; background: #FBF1F5; }
.bloc-def > .bloc-titre { color: #004D80; }
.bloc-prop > .bloc-titre { color: #C2770B; }
.bloc-theo > .bloc-titre { color: #970E53; }
.bloc-def > .bloc-titre::before { content: "Définition ("; }
.bloc-prop > .bloc-titre::before { content: "Propriété ("; }
.bloc-theo > .bloc-titre::before { content: "Théorème ("; }
.bloc-titre::after { content: ")"; }
.encadre
{
    max-width: 40rem;
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
details.encadre > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.encadre > summary::-webkit-details-marker
{
    display: none;
}
details.encadre > summary::before
{
    content: "\25B8\00A0";
}
details.encadre[open] > summary::before
{
    content: "\25BE\00A0";
}
.exercice
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #6B4FA0;
    border-radius: 12px;
    background: #F6F3FA;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.exercice-titre
{
    font-weight: bold;
    color: #6B4FA0;
    margin-bottom: 0.3em;
}
details.exercice > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.exercice > summary::-webkit-details-marker
{
    display: none;
}
details.exercice > summary::before
{
    content: "\25B8\00A0";
}
details.exercice[open] > summary::before
{
    content: "\25BE\00A0";
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
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
ul
{
margin-top:0em;
margin-bottom:0.5em;
}
.legende
{
    text-align: center;
    font-size: 0.9em;
    color: #64748b;
    font-style: italic;
    margin-top: -0.6em;
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
.fig-range
{
    accent-color: #004D80;
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

<h1>Formes différentielles</h1>
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Des mesureurs de flèches, adaptés à la géométrie.</i></p>

Un vecteur est une flèche&nbsp;: un déplacement, une vitesse. Mais beaucoup de grandeurs ne sont pas des flèches. La variation d'altitude quand on fait un pas sur une carte, le travail d'une force pendant un déplacement, la variation d'énergie d'un gaz qu'on comprime sont des **mesureurs**, qui à chaque flèche associent un nombre. Les **formes différentielles** sont ces mesureurs, avec le calcul qui va avec.

Ce formalisme apporte trois choses&nbsp;:
<ol>
<li>Il distingue dès le départ les flèches et les mesureurs. L'histoire des indices en haut et en bas (composantes contravariantes et covariantes) devient une simple différence de nature entre deux objets.</li>
<li>Il s'écrit de la même façon dans tous les systèmes de coordonnées. Les facteurs parasites des coordonnées polaires ou sphériques disparaissent des formules, et se retrouvent dans les dessins, où l'on sait les lire.</li>
<li>Un seul théorème, celui de Stokes, contient le théorème fondamental de l'analyse, la formule de Green et celle de la divergence.</li>
</ol>

Les calculs se font toujours dans un système de coordonnées, mais grâce aux formes, les formules gardent la même tête d'un système à l'autre. On part d'un objet familier&nbsp;: le gradient.

<script>
window.FG = (function () {
  var NS = 'http://www.w3.org/2000/svg';
  function $(id) { return document.getElementById(id); }
  function el(tag, at, parent) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); if (parent) parent.appendChild(e); return e; }
  function put(e, at) { for (var k in at) e.setAttribute(k, typeof at[k] === 'number' ? at[k].toFixed(2) : at[k]); }
  function pt(svg, ev) { var p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY; return p.matrixTransform(svg.getScreenCTM().inverse()); }
  // rend un élément déplaçable : onmove reçoit le point en coordonnées du SVG
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
  function fmt(x, d) { return (d === undefined ? x.toFixed(2) : x.toFixed(d)).replace('.', ',').replace('-', '−'); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  // courbes de niveau (marching squares) de f sur [x0,x1]x[y0,y1] ; X, Y convertissent en pixels
  function contours(f, x0, x1, y0, y1, nx, ny, levels, X, Y) {
    var dx = (x1 - x0) / nx, dy = (y1 - y0) / ny, v = [], d = [], i, j;
    for (j = 0; j <= ny; j++) { v[j] = []; for (i = 0; i <= nx; i++) v[j][i] = f(x0 + i * dx, y0 + j * dy); }
    function lr(p, q) { return p / (p - q); }
    levels.forEach(function (L) {
      for (j = 0; j < ny; j++) for (i = 0; i < nx; i++) {
        var a = v[j][i] - L, b = v[j][i + 1] - L, c = v[j + 1][i + 1] - L, e = v[j + 1][i] - L;
        var idx = (a > 0 ? 1 : 0) | (b > 0 ? 2 : 0) | (c > 0 ? 4 : 0) | (e > 0 ? 8 : 0);
        if (idx === 0 || idx === 15) continue;
        var xa = x0 + i * dx, ya = y0 + j * dy;
        var T = [xa + dx * lr(a, b), ya], R = [xa + dx, ya + dy * lr(b, c)], B = [xa + dx * lr(e, c), ya + dy], Lf = [xa, ya + dy * lr(a, e)], s;
        switch (idx) {
          case 1: case 14: s = [[Lf, T]]; break; case 2: case 13: s = [[T, R]]; break; case 3: case 12: s = [[Lf, R]]; break;
          case 4: case 11: s = [[R, B]]; break; case 6: case 9: s = [[T, B]]; break; case 7: case 8: s = [[Lf, B]]; break;
          default: { var m = (a + b + c + e) / 4; s = ((m > 0) === (idx === 5)) ? [[Lf, B], [T, R]] : [[Lf, T], [B, R]]; }
        }
        s.forEach(function (g) { d.push('M' + X(g[0][0]).toFixed(1) + ',' + Y(g[0][1]).toFixed(1) + 'L' + X(g[1][0]).toFixed(1) + ',' + Y(g[1][1]).toFixed(1)); });
      }
    });
    return d.join('');
  }
  // texte SVG composé : liste de [texte, mode, couleur] avec mode '' | 'i' | 'b' | 'sup' | 'sub' ; gère les décalages verticaux
  function T(segs) {
    var out = '', shift = 0;
    segs.forEach(function (s) {
      var m = s[1] || '', target = m === 'sup' ? -5 : (m === 'sub' ? 4 : 0), d = target - shift; shift = target;
      out += '<tspan' + (d ? ' dy="' + d + '"' : '') + (m === 'sup' || m === 'sub' ? ' font-size="10"' : '') + (m === 'i' ? ' font-style="italic"' : '') + (m === 'b' ? ' font-weight="bold"' : '') + (s[2] ? ' fill="' + s[2] + '"' : '') + '>' + s[0] + '</tspan>';
    });
    return out;
  }
  // sur écran étroit, le panneau de lecture (à droite du dessin) passe sous le dessin : dessin et texte restent lisibles
  function responsive(svg, panelX) {
    var vb = svg.getAttribute('viewBox').split(/\s+/).map(Number), H0 = vb[3];
    var texts = [].slice.call(svg.querySelectorAll('text')).filter(function (t) { return parseFloat(t.getAttribute('x')) >= panelX - 6; });
    if (!texts.length) return;
    var g = el('g', {}, svg); texts.forEach(function (t) { g.appendChild(t); });
    var ys = texts.map(function (t) { return parseFloat(t.getAttribute('y')); }), y0 = Math.min.apply(null, ys) - 16, y1 = Math.max.apply(null, ys) + 8;
    function apply() {
      var narrow = (svg.parentNode.clientWidth || 600) < 520;
      if (narrow) { svg.setAttribute('viewBox', '0 0 ' + (panelX - 4) + ' ' + (H0 + (y1 - y0))); g.setAttribute('transform', 'translate(' + (14 - panelX) + ',' + (H0 - y0 + 4) + ')'); }
      else { svg.setAttribute('viewBox', vb.join(' ')); g.removeAttribute('transform'); }
    }
    apply(); window.addEventListener('resize', apply);
    if (window.ResizeObserver) new ResizeObserver(apply).observe(svg.parentNode);
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return { responsive: responsive, T: T, $: $, el: el, put: put, pt: pt, drag: drag, fmt: fmt, clamp: clamp, contours: contours, reduce: reduce };
})();
</script>

## Le gradient {#gradient}

Sur une colline d'altitude $V(x, y)$, le gradient est la flèche qui pointe vers la plus forte montée, et dont la longueur est la pente. La recette est familière&nbsp;: dans des axes orthonormés, ses composantes sont les dérivées partielles, $\vec\nabla V = (\partial V/\partial x,\ \partial V/\partial y)$, et elle sert à prévoir ce que lit un instrument. Pour un petit déplacement $\Delta\vec r$, l'altitude varie de

$$\Delta V = \vec\nabla V\cdot\Delta\vec r = \frac{\partial V}{\partial x}\\,\Delta x + \frac{\partial V}{\partial y}\\,\Delta y.$$

Cette recette ne dépend-elle que de la colline&nbsp;? Deux arpenteurs étudient la même colline, au même point $P$. L'arpenteur A mesure ses deux axes en mètres et trouve $\partial V/\partial x = 0{,}3$ et $\partial V/\partial y = 0{,}4$ (des mètres de dénivelé par mètre)&nbsp;: son gradient est $(0{,}3\\,;\\,0{,}4)$, de pente $0{,}5$. L'arpenteur B mesure $x$ en kilomètres et $y$ en mètres. Il trouve $\partial V/\partial x' = 300$ (des mètres par kilomètre) et $\partial V/\partial y = 0{,}4$, applique la même recette et obtient $(300\\,;\\,0{,}4)$, une flèche qui pointe presque plein est.

Même colline, même point, deux directions de plus forte montée. La recette n'est correcte que dans des axes orthonormés (perpendiculaires et gradués avec la même unité). En coordonnées polaires, on bute sur le même obstacle&nbsp;: la recette $(\partial V/\partial r,\ \partial V/\partial\theta)$ est fausse, et on la corrige par un facteur $1/r$.

Pourtant, A et B s'accordent sur un point. Un pas de $10$ m vers l'est et de $10$ m vers le nord s'écrit $(\Delta x, \Delta y) = (10\ \mathrm{m},\ 10\ \mathrm{m})$ pour A, et $(\Delta x', \Delta y) = (0{,}01\ \mathrm{km},\ 10\ \mathrm{m})$ pour B. L'altimètre indique

$$\Delta V = 0{,}3\times 10 + 0{,}4\times 10 = 7\ \mathrm{m}\quad\text{(A)},\qquad \Delta V = 300\times 0{,}01 + 0{,}4\times 10 = 7\ \mathrm{m}\quad\text{(B)}.$$

Les composantes du pas sont divisées par $1000$ et celles de la «&nbsp;pente&nbsp;» multipliées par $1000$, mais la somme des produits ne change pas&nbsp;: c'est la lecture de l'instrument. La figure rejoue cette scène sur une colline quelconque.

<div class="svg-container">
<svg id="fg-svg" viewBox="0 0 600 345" role="img" aria-label="Une colline représentée par ses courbes de niveau, un point P et un petit pas, flèche bleue. Deux arpenteurs appliquent la même recette, le gradient est le couple des dérivées partielles, dans leurs propres unités : A mesure les deux axes en mètres, B mesure l'axe x par graduations de lambda mètres. Les directions qu'ils trouvent, flèche grise pour A et flèche orange pour B, diffèrent dès que lambda n'est pas égal à 1. En revanche, la variation d'altitude pour le pas bleu est la même pour les deux. On peut déplacer P et la pointe du pas, et régler lambda." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="fga" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="fgb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#334155"/></marker>
<marker id="fgc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="fg-map"><rect x="15" y="40" width="365" height="282"/></clipPath></defs>
<rect x="15" y="40" width="365" height="282" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1"/>
<path id="fg-cont" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1" clip-path="url(#fg-map)"/>
<line id="fg-ga" x1="0" y1="0" x2="0" y2="0" stroke="#334155" stroke-width="3" marker-end="url(#fgb)"/>
<line id="fg-gb" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="3" marker-end="url(#fgc)"/>
<line id="fg-u" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#fga)"/>
<circle id="fg-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fg-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fg-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="fg-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="fg-la" x="0" y="0" font-size="14" font-weight="bold" fill="#334155" font-family="Georgia,'Times New Roman',serif">A</text>
<text id="fg-lb" x="0" y="0" font-size="14" font-weight="bold" fill="#C2770B" font-family="Georgia,'Times New Roman',serif">B</text>
<text id="fg-lu" x="0" y="0" font-size="14" font-style="italic" fill="#004D80" font-family="Georgia,'Times New Roman',serif">pas</text>
<text x="15" y="28" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">carte d'une colline (courbes de niveau de <tspan font-style="italic">V</tspan>)</text>
<text x="400" y="58" font-size="13.5" font-weight="bold" fill="#334155" font-family="Georgia,'Times New Roman',serif">A : les deux axes en mètres</text>
<text id="fg-a1" x="400" y="78" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-a2" x="400" y="96" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-a3" x="400" y="116" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-bh" x="400" y="150" font-size="13.5" font-weight="bold" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-b1" x="400" y="170" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-b2" x="400" y="188" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-b3" x="400" y="208" font-size="13.5" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fg-ok" x="400" y="242" font-size="14" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text x="400" y="266" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">flèches grise et orange : « gradient =</text>
<text x="400" y="281" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">(∂V/∂x, ∂V/∂y) » appliqué par A et par B</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>unité de B sur l'axe <i>x</i> (en mètres)</span> <input type="range" class="fig-range" id="fg-l" min="0.25" max="4" step="0.05" value="3" style="width:120px;margin:0;"> <span id="fg-lv" style="min-width:2.6em;">3,00</span></label>
<button type="button" class="fig-btn" id="fg-r">Mêmes unités</button>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fg-svg'); if (!svg) return;
  var S = 36.5, OX = 15, OY = 322, LEN = 56;                // 1 unité de la carte = 10 m ; altitude en mètres = 3 V
  function X(x) { return OX + S * x; } function Y(y) { return OY - S * y; }
  var HL = [[4.2, 3.2, 3.9, 5.5, 3.2], [3.4, 7.0, 3.3, 4.5, 3.8]];
  function V(x, y) { var s = 0; HL.forEach(function (h) { s += h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); }); return s; }
  function G(x, y) { var gx = 0, gy = 0; HL.forEach(function (h) { var e = h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); gx += e * (-2 * (x - h[1]) / h[3]); gy += e * (-2 * (y - h[2]) / h[4]); }); return [gx, gy]; }
  var lev = []; for (var l = 0.4; l < 4.3; l += 0.4) lev.push(l);
  F.$('fg-cont').setAttribute('d', F.contours(V, 0, 10, 0, 7.8, 110, 86, lev, X, Y));
  var p = [1.8, 2.4], u = [1.2, -0.25], lam = 3;
  function sg(x, d) { return (x >= 0 ? '+' : '') + F.fmt(x, d); }
  function draw() {
    var g = G(p[0], p[1]), sx = 0.3 * g[0], sy = 0.3 * g[1];   // pentes en m par m
    var dxm = 10 * u[0], dym = 10 * u[1], t1 = sx * dxm, t2 = sy * dym, dV = t1 + t2;
    var P = [X(p[0]), Y(p[1])], T = [X(p[0] + u[0]), Y(p[1] + u[1])];
    function dir(ax, ay) { var n = Math.hypot(ax, ay) || 1e-9; return [P[0] + LEN * ax / n, P[1] - LEN * ay / n]; }
    var A = dir(sx, sy), B = dir(lam * sx, sy);
    F.put(F.$('fg-u'), { x1: P[0], y1: P[1], x2: T[0], y2: T[1] });
    F.put(F.$('fg-ga'), { x1: P[0], y1: P[1], x2: A[0], y2: A[1] });
    F.put(F.$('fg-gb'), { x1: P[0], y1: P[1], x2: B[0], y2: B[1] });
    ['fg-p', 'fg-hp'].forEach(function (id) { F.put(F.$(id), { cx: P[0], cy: P[1] }); }); F.put(F.$('fg-ht'), { cx: T[0], cy: T[1] });
    F.put(F.$('fg-lp'), { x: P[0] - 18, y: P[1] + 17 }); F.put(F.$('fg-lu'), { x: T[0] + 8, y: T[1] + 14 });
    F.put(F.$('fg-la'), { x: A[0] + 8, y: A[1] - 8 }); F.put(F.$('fg-lb'), { x: B[0] + 8, y: B[1] + 14 });
    F.$('fg-a1').textContent = 'pas : Δx = ' + F.fmt(dxm, 1) + ' m ; Δy = ' + F.fmt(dym, 1) + ' m';
    F.$('fg-a2').textContent = 'pentes : ∂V/∂x = ' + F.fmt(sx, 2) + ' ; ∂V/∂y = ' + F.fmt(sy, 2);
    F.$('fg-a3').textContent = 'ΔV = ' + F.fmt(t1, 2) + ' ' + sg(t2, 2) + ' = ' + sg(dV, 2) + ' m';
    F.$('fg-bh').textContent = 'B : axe x en unités de ' + F.fmt(lam, 2) + ' m';
    F.$('fg-b1').textContent = 'pas : Δx′ = ' + F.fmt(dxm / lam, 2) + ' ; Δy = ' + F.fmt(dym, 1) + ' m';
    F.$('fg-b2').textContent = 'pentes : ∂V/∂x′ = ' + F.fmt(lam * sx, 2) + ' ; ∂V/∂y = ' + F.fmt(sy, 2);
    F.$('fg-b3').textContent = 'ΔV = ' + F.fmt(lam * sx * dxm / lam, 2) + ' ' + sg(t2, 2) + ' = ' + sg(dV, 2) + ' m';
    F.$('fg-ok').textContent = 'même ΔV : ' + sg(dV, 2) + ' m';
    F.$('fg-lv').textContent = F.fmt(lam, 2);
    svg.setAttribute('data-vals', [sx, sy, dV, lam * sx].map(function (x) { return x.toFixed(4); }).join(','));
  }
  F.drag(svg, F.$('fg-hp'), function (q) { p = [F.clamp((q.x - OX) / S, 0.3, 9.7), F.clamp((OY - q.y) / S, 0.3, 7.5)]; draw(); });
  F.drag(svg, F.$('fg-ht'), function (q) { var dx = (q.x - X(p[0])) / S, dy = (Y(p[1]) - q.y) / S, n = Math.hypot(dx, dy); if (n > 1.4) { dx *= 1.4 / n; dy *= 1.4 / n; } u = [dx, dy]; draw(); });
  F.$('fg-l').addEventListener('input', function () { lam = parseFloat(this.value); draw(); });
  F.$('fg-r').addEventListener('click', function () { lam = 1; F.$('fg-l').value = 1; draw(); });
  draw();
  F.responsive(svg, 400);
})();
</script>
<p class="legende">Une même colline, un même point $P$, un même pas (flèche bleue). L'arpenteur A mesure les deux axes en mètres&nbsp;; B mesure l'axe $x$ par graduations de $\lambda$ mètres. Chacun applique la recette «&nbsp;gradient = (∂V/∂x, ∂V/∂y)&nbsp;» dans ses propres unités et obtient la flèche grise (A) ou orange (B), ramenées ici à la même longueur&nbsp;: leurs directions diffèrent dès que $\lambda \neq 1$. En revanche, la variation d'altitude $\Delta V$ pour le pas bleu est la même pour les deux.</p>

**Ce qui ne dépend pas de la graduation.** C'est $\Delta V$, la variation d'altitude pour un déplacement $\Delta\vec r$ donné. La machine qui à $\Delta\vec r$ associe cette variation est **linéaire**&nbsp;: à petite échelle, doubler le déplacement double la variation, et deux déplacements mis bout à bout additionnent leurs variations. C'est la **différentielle** $\mathrm{d}V$.

Ce n'est pas un vecteur, mais un **mesureur**, qui prend un vecteur et rend un nombre. A et B décrivent le même mesureur, avec des nombres différents. Le gradient s'en déduit grâce au produit scalaire, c'est-à-dire en sachant mesurer longueurs et angles&nbsp;: c'est cet ingrédient que la recette cachait.

## Le mesureur $\mathrm{d}f$ : une pile de lignes {#fleches}

Précisons l'objet que A et B ont en commun. On repère les points par un vecteur position $\vec r$, et un petit déplacement à partir de $P$ est un vecteur $\vec u$ qui mène au point $\vec r + \vec u$. Pour $\vec u$ petit, la variation d'une fonction $f$ est proportionnelle à $\vec u$ (développement de Taylor à l'ordre un)&nbsp;:

$$f(\vec r + \vec u) - f(\vec r) \simeq \mathrm{d}f\_P(\vec u).$$

Le membre de droite est l'application linéaire de $\vec u$ qui approche le mieux la variation de $f$&nbsp;: c'est la différentielle de $f$ en $P$.

<div class="bloc bloc-def">
<div class="bloc-titre">différentielle d'une fonction</div>

La **différentielle** de $f$ en $P$ est l'application linéaire $\mathrm{d}f\_P$ qui à un déplacement $\vec u$ associe

$$\mathrm{d}f\_P(\vec u) = \frac{\mathrm{d}}{\mathrm{d}\varepsilon}f(\vec r + \varepsilon\vec u)\Big|\_{\varepsilon = 0}\qquad(\varepsilon\text{ sans dimension}).$$

En coordonnées cartésiennes, $\mathrm{d}f(\vec u) = \frac{\partial f}{\partial x}u\_x + \frac{\partial f}{\partial y}u\_y$.

</div>

Comment dessiner un mesureur&nbsp;? Traçons les lignes où $f$ vaut $f(P)$, $f(P) + \Delta$, $f(P) + 2\Delta$, et ainsi de suite (pour une altitude, les courbes de niveau). De très près, elles se redressent en droites parallèles et équidistantes. Un déplacement partant de $P$ franchit un certain nombre de ces lignes&nbsp;: c'est la valeur de $\mathrm{d}f$ sur ce vecteur, en unités de $\Delta$ (négative quand on descend). Une application linéaire des vecteurs vers les nombres se dessine donc comme **une pile de lignes**. Comme sur une carte de randonnée, plus les lignes sont serrées, plus la pente est forte, et un déplacement qui longe une ligne ne change pas la valeur de $f$.

<div class="svg-container">
<svg id="f1-svg" viewBox="0 0 600 345" role="img" aria-label="Carte de courbes de niveau d'une colline à deux sommets. En un point P, la différentielle de l'altitude est dessinée comme une pile de lignes parallèles et équidistantes. Une flèche partant de P franchit un certain nombre de ces lignes : c'est la valeur de la différentielle sur cette flèche. On peut déplacer P et la pointe de la flèche." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="f1a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<clipPath id="f1-clip"><circle id="f1-cc" cx="0" cy="0" r="98"/></clipPath>
<clipPath id="f1-map"><rect x="15" y="40" width="365" height="282"/></clipPath></defs>
<rect x="15" y="40" width="365" height="282" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1"/>
<path id="f1-cont" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1" clip-path="url(#f1-map)"/>
<g clip-path="url(#f1-map)"><circle id="f1-ring" cx="0" cy="0" r="98" fill="#fff" fill-opacity="0.55" stroke="#970E53" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<g clip-path="url(#f1-clip)"><path id="f1-loc" d="M0,0" fill="none" stroke="#970E53" stroke-width="1.7" stroke-opacity="0.85"/></g></g>
<g id="f1-dots"></g>
<line id="f1-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#f1a)"/>
<circle id="f1-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="f1-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="f1-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="f1-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="f1-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text x="15" y="28" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">carte d'une colline (courbes de niveau de V)</text>
<text x="400" y="62" font-size="14.5" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">V</tspan> en <tspan font-style="italic">P</tspan> : un mesureur</text>
<text x="400" y="84" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">lignes magenta : valeurs de <tspan font-style="italic">V</tspan> séparées</text>
<text x="400" y="101" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">de 0,4, vues de très près</text>
<text x="400" y="140" font-size="14.5" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif"><tspan font-weight="bold">v</tspan> : un vecteur</text>
<text x="400" y="162" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">un petit déplacement depuis <tspan font-style="italic">P</tspan></text>
<text x="400" y="206" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">V</tspan>(<tspan font-weight="bold">v</tspan>) = nombre de lignes</text>
<text x="400" y="223" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">franchies par le vecteur :</text>
<text id="f1-n" x="400" y="258" font-size="26" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">0</text>
<text id="f1-s" x="400" y="280" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f1-svg'); if (!svg) return;
  var S = 36.5, OX = 15, OY = 322, DV = 0.4, R = 98;
  function X(x) { return OX + S * x; } function Y(y) { return OY - S * y; }
  var H = [[4.2, 3.2, 3.9, 5.5, 3.2], [3.4, 7.0, 3.3, 4.5, 3.8]];
  function V(x, y) { var s = 0; H.forEach(function (h) { s += h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); }); return s; }
  function G(x, y) { var gx = 0, gy = 0; H.forEach(function (h) { var e = h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); gx += e * (-2 * (x - h[1]) / h[3]); gy += e * (-2 * (y - h[2]) / h[4]); }); return [gx, gy]; }
  var lev = []; for (var l = 0.4; l < 4.3; l += 0.4) lev.push(l);
  F.$('f1-cont').setAttribute('d', F.contours(V, 0, 10, 0, 7.8, 110, 86, lev, X, Y));
  var P = [X(4.9), Y(3.1)], T = [X(4.9) + 62, Y(3.1) - 14];
  var dots = F.$('f1-dots'), pool = []; for (var i = 0; i < 16; i++) pool.push(F.el('circle', { r: 3.6, fill: '#fff', stroke: '#970E53', 'stroke-width': 1.6, visibility: 'hidden' }, dots));
  function draw() {
    var g = G((P[0] - OX) / S, (OY - P[1]) / S), gn = Math.hypot(g[0], g[1]) || 1e-9;
    var nx = g[0] / gn, ny = -g[1] / gn, d = DV / gn * S, d1 = '';
    for (var k = -Math.ceil((R + 12) / d); k <= Math.ceil((R + 12) / d); k++) {
      var cx = P[0] + k * d * nx, cy = P[1] + k * d * ny, tx = -ny, ty = nx, Lh = R + 14;
      d1 += 'M' + (cx - Lh * tx).toFixed(1) + ',' + (cy - Lh * ty).toFixed(1) + 'L' + (cx + Lh * tx).toFixed(1) + ',' + (cy + Lh * ty).toFixed(1);
    }
    F.$('f1-loc').setAttribute('d', d1);
    ['f1-cc', 'f1-ring'].forEach(function (id) { F.put(F.$(id), { cx: P[0], cy: P[1] }); });
    F.put(F.$('f1-v'), { x1: P[0], y1: P[1], x2: T[0], y2: T[1] });
    F.put(F.$('f1-p'), { cx: P[0], cy: P[1] }); F.put(F.$('f1-hp'), { cx: P[0], cy: P[1] }); F.put(F.$('f1-ht'), { cx: T[0], cy: T[1] });
    F.put(F.$('f1-lp'), { x: P[0] - 16, y: P[1] + 16 }); F.put(F.$('f1-lv'), { x: T[0] + 8, y: T[1] - 8 });
    var N = (g[0] * (T[0] - P[0]) / S + g[1] * (-(T[1] - P[1]) / S)) / DV, a = Math.abs(N);
    pool.forEach(function (c, j) { var k = j + 1; if (k <= Math.floor(a) && a > 0) { var f = k / a; F.put(c, { cx: P[0] + f * (T[0] - P[0]), cy: P[1] + f * (T[1] - P[1]), visibility: 'visible' }); } else c.setAttribute('visibility', 'hidden'); });
    F.$('f1-n').textContent = (N >= 0 ? '+' : '') + F.fmt(N, 1) + ' ligne' + (a >= 2 ? 's' : '');
    F.$('f1-s').textContent = a < 0.05 ? 'la flèche longe une ligne de niveau' : (N > 0 ? 'en montant' : 'en descendant');
  }
  F.drag(svg, F.$('f1-hp'), function (q) { var dx = T[0] - P[0], dy = T[1] - P[1]; P = [F.clamp(q.x, OX + 8, OX + 357), F.clamp(q.y, 52, OY - 8)]; T = [P[0] + dx, P[1] + dy]; draw(); });
  F.drag(svg, F.$('f1-ht'), function (q) { var dx = q.x - P[0], dy = q.y - P[1], n = Math.hypot(dx, dy), m = 80; if (n > m) { dx *= m / n; dy *= m / n; } T = [P[0] + dx, P[1] + dy]; draw(); });
  draw();
  F.responsive(svg, 400);
})();
</script>
<p class="legende">Une colline à deux sommets. En $P$, la différentielle $\mathrm{d}V$ est la pile de lignes magenta (valeurs de $V$ séparées de $\Delta = 0{,}4$, comme sur la carte, vues de très près). Le vecteur bleu franchit un nombre de lignes qui est la valeur de $\mathrm{d}V$ sur lui. Doubler le vecteur double ce nombre&nbsp;; le retourner change son signe.</p>

<div class="bloc bloc-def">
<div class="bloc-titre">1-forme</div>

Soit $E$ un espace vectoriel réel (ici, les petits déplacements à partir d'un point $P$, que les mathématiciens appellent l'espace tangent en $P$ et notent $T\_PM$). Une **forme linéaire** sur $E$ est une application linéaire $\alpha : E \to \mathbb{R}$&nbsp;; elles constituent l'**espace dual** $E^{\ast}$ (ici, l'**espace cotangent** $T^{\ast}\_PM$). Une **1-forme différentielle** sur $M$ est le choix, en chaque point $P$, d'une forme linéaire $\alpha\_P \in T^{\ast}\_PM$ qui varie de façon régulière avec $P$. On note $\alpha(\vec v)$, ou $\langle\alpha, \vec v\rangle$, sa valeur sur un vecteur $\vec v$.

</div>

**Le long d'un mouvement.** Un point mobile a pour vecteur position $\vec r(t)$ et pour vitesse $\vec v = \mathrm{d}\vec r/\mathrm{d}t$. Pendant la durée $\mathrm{d}t$, il se déplace de $\mathrm{d}\vec r = \vec v\\,\mathrm{d}t$, et la fonction varie de $\mathrm{d}f(\vec v\\,\mathrm{d}t) = \mathrm{d}f(\vec v)\\,\mathrm{d}t$. Un randonneur qui lit son altimètre en marchant voit donc l'indication $f\big(\vec r(t)\big)$ varier au rythme $\mathrm{d}f(\vec v)$, ce que résume la propriété suivante.

<div class="bloc bloc-prop">
<div class="bloc-titre">dérivée le long d'un mouvement</div>

Pour un point de position $\vec r(t)$ et de vitesse $\vec v = \mathrm{d}\vec r/\mathrm{d}t$,

$$\frac{\mathrm{d}}{\mathrm{d}t}f\big(\vec r(t)\big) = \mathrm{d}f(\vec v)$$

(les physiciens écrivent $\vec\nabla f\cdot\vec v$). Le même mesureur $\mathrm{d}f$ accepte donc un déplacement (il rend une variation de $f$) ou une vitesse (il rend un taux de variation).

</div>

La figure suit le randonneur, sur la carte à gauche et sur son altimètre à droite.

<div class="svg-container" style="display:flex;flex-wrap:wrap;gap:6px 10px;justify-content:center;align-items:flex-start;">
<svg id="fc-map" viewBox="0 0 360 350" role="img" aria-label="Carte de courbes de niveau de l'altitude f, et pile de lignes de la différentielle de f en P. Une trajectoire courbe gamma passe au point P à l'instant 0 ; le vecteur v est sa vitesse en P, dessinée comme le déplacement qu'elle produirait en une seconde. Un point mobile parcourt la trajectoire. La pile de lignes magenta représente la différentielle de f en P. On peut déplacer P, la pointe de la flèche, et régler la courbure de la trajectoire." style="flex:1 1 280px;max-width:360px;height:auto;touch-action:none;">
<defs><marker id="fca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="fcb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="fc-mclip"><rect x="10" y="34" width="340" height="280"/></clipPath>
<clipPath id="fc-lclip"><circle id="fc-lcc" cx="0" cy="0" r="60"/></clipPath></defs>
<rect x="10" y="34" width="340" height="280" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1"/>
<path id="fc-cont" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1" clip-path="url(#fc-mclip)"/>
<g clip-path="url(#fc-mclip)"><circle id="fc-ring" cx="0" cy="0" r="60" fill="#fff" fill-opacity="0.55" stroke="#970E53" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<g clip-path="url(#fc-lclip)"><path id="fc-loc" d="M0,0" fill="none" stroke="#970E53" stroke-width="1.1" stroke-opacity="0.75"/></g>
<path id="fc-gam" d="M0,0" fill="none" stroke="#C2770B" stroke-width="2.4" marker-end="url(#fcb)"/></g>
<line id="fc-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#fca)"/>
<circle id="fc-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fc-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fc-m" cx="0" cy="0" r="5" fill="#C2770B" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fc-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="fc-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="fc-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text id="fc-lg" x="0" y="0" font-size="14" font-style="italic" fill="#C2770B" font-family="Georgia,'Times New Roman',serif">γ</text>
<text x="10" y="26" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">carte : courbes de niveau de <tspan font-style="italic">f</tspan></text>
<text x="10" y="332" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">magenta : la forme d<tspan font-style="italic">f</tspan> en <tspan font-style="italic">P</tspan> (pile de lignes)</text>
</svg>
<svg id="fc-gr" viewBox="0 0 360 350" role="img" aria-label="Graphe de la valeur de f le long de la trajectoire en fonction du temps t, entre -1 et 1 seconde. Des lignes horizontales marquent les niveaux de la carte. La droite bleue est la tangente à la courbe en t = 0 ; sa pente est la valeur de la différentielle de f sur le vecteur vitesse v. La courbe change avec la courbure de la trajectoire, pas la tangente." style="flex:1 1 280px;max-width:360px;height:auto;">
<defs><clipPath id="fc-gclip"><rect x="40" y="40" width="310" height="230"/></clipPath></defs>
<rect x="40" y="40" width="310" height="230" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
<g clip-path="url(#fc-gclip)">
<path id="fc-grid" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1"/>
<line x1="195" y1="40" x2="195" y2="270" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
<line id="fc-tan" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.4"/>
<path id="fc-cur" d="M0,0" fill="none" stroke="#C2770B" stroke-width="2.4"/></g>
<circle id="fc-g0" cx="195" cy="155" r="5" fill="#334155" stroke="#fff" stroke-width="1.6"/>
<circle id="fc-gm" cx="0" cy="0" r="5" fill="#C2770B" stroke="#fff" stroke-width="1.6"/>
<text x="40" y="26" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">valeur de <tspan font-style="italic">f</tspan> le long de la trajectoire</text>
<text x="40" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif">−1</text>
<text x="195" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif">0</text>
<text x="350" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif">1</text>
<text x="200" y="288" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" dx="60" font-style="italic">temps <tspan font-style="italic">t</tspan> (s)</text>
<text id="fc-r1" x="40" y="312" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fc-r2" x="40" y="331" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
<div style="flex:1 1 100%;display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>courbure de la trajectoire</span> <input type="range" class="fig-range" id="fc-c" min="-2" max="2" step="0.05" value="0.9" style="width:120px;margin:0;"></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>instant <i>t</i> (s)</span> <input type="range" class="fig-range" id="fc-t" min="-1" max="1" step="0.02" value="0.5" style="width:120px;margin:0;"> <span id="fc-tv" style="min-width:2.6em;">0,50</span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fc-map'); if (!svg) return;
  var S = 34, OX = 10, OY = 314, DV = 0.4, H = 2.4, K = 115 / H, VMAX = 1.5, RL = 60;
  function X(x) { return OX + S * x; } function Y(y) { return OY - S * y; }
  function TX(t) { return 195 + 155 * t; }
  var HL = [[4.2, 3.2, 3.9, 5.5, 3.2], [3.4, 7.0, 3.3, 4.5, 3.8]];
  function V(x, y) { var s = 0; HL.forEach(function (h) { s += h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); }); return s; }
  function G(x, y) { var gx = 0, gy = 0; HL.forEach(function (h) { var e = h[0] * Math.exp(-((x - h[1]) * (x - h[1]) / h[3] + (y - h[2]) * (y - h[2]) / h[4])); gx += e * (-2 * (x - h[1]) / h[3]); gy += e * (-2 * (y - h[2]) / h[4]); }); return [gx, gy]; }
  var lev = []; for (var l = 0.4; l < 4.3; l += 0.4) lev.push(l);
  F.$('fc-cont').setAttribute('d', F.contours(V, 0, 10, 0, 8.2, 110, 90, lev, X, Y));
  var p = [5.2, 2.0], v = [0.6, 1.0], c = 0.9, tt = 0.5;
  function gam(t) { var a = [-c * v[1], c * v[0]]; return [p[0] + t * v[0] + t * t / 2 * a[0], p[1] + t * v[1] + t * t / 2 * a[1]]; }
  function draw() {
    var f0 = V(p[0], p[1]), g = G(p[0], p[1]), s = g[0] * v[0] + g[1] * v[1], i, t, q, d = '', dc = '', dg = '';
    for (i = 0; i <= 40; i++) { t = -1 + i * 0.05; q = gam(t); d += (i ? 'L' : 'M') + X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }
    F.$('fc-gam').setAttribute('d', d);
    var gn = Math.hypot(g[0], g[1]) || 1e-9, nx = g[0] / gn, ny = -g[1] / gn, sp = DV / gn * S, dl = '';
    for (var k = -Math.ceil((RL + 12) / sp); k <= Math.ceil((RL + 12) / sp); k++) { var cx = X(p[0]) + k * sp * nx, cy = Y(p[1]) + k * sp * ny; dl += 'M' + (cx + (RL + 14) * ny).toFixed(1) + ',' + (cy - (RL + 14) * nx).toFixed(1) + 'L' + (cx - (RL + 14) * ny).toFixed(1) + ',' + (cy + (RL + 14) * nx).toFixed(1); }
    F.$('fc-loc').setAttribute('d', dl);
    ['fc-lcc', 'fc-ring'].forEach(function (id) { F.put(F.$(id), { cx: X(p[0]), cy: Y(p[1]) }); });
    for (i = 0; i <= 80; i++) { t = -1 + i * 0.025; q = gam(t); dc += (i ? 'L' : 'M') + TX(t).toFixed(1) + ',' + (155 - (V(q[0], q[1]) - f0) * K).toFixed(1); }
    F.$('fc-cur').setAttribute('d', dc);
    for (i = 1; i <= 10; i++) { var yy = 155 - (DV * i - f0) * K; if (yy > 36 && yy < 274) dg += 'M40,' + yy.toFixed(1) + 'L350,' + yy.toFixed(1); }
    F.$('fc-grid').setAttribute('d', dg);
    F.put(F.$('fc-tan'), { x1: TX(-1), y1: 155 + s * K, x2: TX(1), y2: 155 - s * K });
    F.put(F.$('fc-v'), { x1: X(p[0]), y1: Y(p[1]), x2: X(p[0] + v[0]), y2: Y(p[1] + v[1]) });
    F.put(F.$('fc-p'), { cx: X(p[0]), cy: Y(p[1]) }); F.put(F.$('fc-hp'), { cx: X(p[0]), cy: Y(p[1]) });
    F.put(F.$('fc-ht'), { cx: X(p[0] + v[0]), cy: Y(p[1] + v[1]) });
    F.put(F.$('fc-lp'), { x: X(p[0]) - 16, y: Y(p[1]) + 17 }); F.put(F.$('fc-lv'), { x: X(p[0] + v[0]) + 8, y: Y(p[1] + v[1]) - 8 });
    q = gam(1); F.put(F.$('fc-lg'), { x: X(q[0]) + 8, y: Y(q[1]) + 4 });
    q = gam(tt); F.put(F.$('fc-m'), { cx: X(q[0]), cy: Y(q[1]) });
    F.put(F.$('fc-gm'), { cx: TX(tt), cy: 155 - (V(q[0], q[1]) - f0) * K });
    F.$('fc-tv').textContent = F.fmt(tt);
    F.$('fc-r1').innerHTML = F.T([['pente de la droite bleue : d'], ['f', 'i'], ['(', ''], ['v', 'b'], [') = ' + (s >= 0 ? '+' : '') + F.fmt(s) + ' /s']]);
    F.$('fc-r2').textContent = 'soit ' + (s >= 0 ? '+' : '') + F.fmt(s / DV, 1) + ' lignes franchies par seconde (Δ = 0,4)';
  }
  F.drag(svg, F.$('fc-hp'), function (q) { p = [F.clamp((q.x - OX) / S, 0.5, 9.5), F.clamp((OY - q.y) / S, 0.5, 7.7)]; draw(); });
  F.drag(svg, F.$('fc-ht'), function (q) { var dx = (q.x - X(p[0])) / S, dy = (Y(p[1]) - q.y) / S, n = Math.hypot(dx, dy); if (n > VMAX) { dx *= VMAX / n; dy *= VMAX / n; } v = [dx, dy]; draw(); });
  F.$('fc-c').addEventListener('input', function () { c = parseFloat(this.value); draw(); });
  F.$('fc-t').addEventListener('input', function () { tt = parseFloat(this.value); draw(); });
  draw();
})();
</script>
<p class="legende">À gauche, la trajectoire $\vec r(t)$ (orange), parcourue de $t = -1$ à $t = 1$ s, et la vitesse $\vec v$ en $P$ (bleu, dessinée comme le déplacement qu'elle produirait en une seconde). La pile de lignes magenta représente $\mathrm{d}f_P$ (comme dans la figure précédente, avec $\Delta = 0{,}4$ entre deux lignes). À droite, l'indication de l'altimètre, $f(\vec r(t))$&nbsp;: les lignes grises horizontales sont les niveaux de la carte, que le point mobile franchit aux mêmes instants. La droite bleue est la tangente en $t = 0$. En faisant varier la courbure, la trajectoire et la courbe orange changent, mais la tangente reste la même.</p>

**Pente ou nombre de lignes&nbsp;?** C'est le même nombre, exprimé dans deux unités. La pente de la droite bleue est $\mathrm{d}f\_P(\vec v)$, en unités de $f$ par seconde. En une seconde, le point se déplace (au premier ordre) de $\vec v\times 1\ \mathrm{s}$ et franchit $\mathrm{d}f\_P(\vec v)/\Delta$ lignes&nbsp;: avec $\Delta = 0{,}4$, une pente de $1{,}73$ correspond à $4{,}3$ lignes par seconde.

La **forme** $\mathrm{d}f\_P$ n'est ni l'un ni l'autre&nbsp;: c'est l'application $\vec u \mapsto \mathrm{d}f\_P(\vec u)$ tout entière, représentée par la pile de lignes magenta. Pente et nombre de lignes sont sa valeur sur le vecteur choisi&nbsp;; un autre vecteur en $P$ donne une autre valeur, et la pile reste la même. Cette valeur ne dépend que de $\vec v$, et non de la forme de la trajectoire&nbsp;: à petite échelle, la trajectoire se confond avec sa tangente, et sa courbure n'intervient qu'au second ordre.

Les 1-formes ne sont pas toutes des différentielles de fonctions (le travail d'une force de frottement n'en est pas une, voir [Intégrer une 1-forme](#integrer)), mais ce sont les plus familières.

## Deux sortes de composantes {#composantes}

A et B n'ont pas choisi les mêmes vecteurs de référence&nbsp;: A prend un mètre sur chaque axe, B un kilomètre sur l'axe $x$. Comment les nombres d'un vecteur, et ceux d'un mesureur, changent-ils pour un choix quelconque&nbsp;?

**Repérer un vecteur.** On choisit deux vecteurs de référence $(\vec e\_1, \vec e\_2)$ non colinéaires, pas forcément perpendiculaires ni de même longueur (les axes $\hat e\_x$, $\hat e\_y$ en sont un cas particulier). Un vecteur $\vec v$ (déplacement, vitesse, force&hellip;) s'écrit alors de façon unique, par la règle du parallélogramme&nbsp;: $\vec v = v^1\vec e\_1 + v^2\vec e\_2$[^einstein]. Les $v^i$ sont ses **composantes**&nbsp;: combien de $\vec e\_1$, combien de $\vec e\_2$.

**Repérer un mesureur.** Un mesureur $\alpha$ est linéaire&nbsp;: il est connu par ses valeurs sur les vecteurs de référence, $\alpha\_i = \alpha(\vec e\_i)$, le nombre de lignes franchies par $\vec e\_i$ (pour une altitude, la pente le long de l'axe $i$). Par linéarité, la valeur de $\alpha$ sur un vecteur quelconque s'en déduit.

<div class="bloc bloc-def">
<div class="bloc-titre">composantes</div>

Dans une base $(\vec e\_i)$, un vecteur s'écrit $\vec v = v^i\\,\vec e\_i$&nbsp;: les $v^i$ sont ses **composantes**. Une 1-forme $\alpha$ a pour composantes $\alpha\_i = \alpha(\vec e\_i)$, et

$$\alpha(\vec v) = \alpha\_1 v^1 + \alpha\_2 v^2 = \alpha\_i\\, v^i.$$

</div>

[^einstein]: Convention d'Einstein&nbsp;: un indice répété, une fois en haut et une fois en bas, est sommé sur toutes ses valeurs. Ainsi $v^i\\,\vec e\_i$ désigne $\sum\_i v^i\\,\vec e\_i$ et $\alpha\_i\\, v^i$ désigne $\sum\_i \alpha\_i\\, v^i$.

**Changer de référence.** Allonger $\vec e\_1$ d'un facteur $\lambda$ (B le fait, avec $\lambda = 1000$) divise $v^1$ par $\lambda$, puisqu'il faut moins de $\vec e\_1$ pour le même déplacement ($\Delta x$ passe de $10$ m à $0{,}01$ km), et multiplie $\alpha\_1$ par $\lambda$, puisqu'un pas plus long franchit plus de lignes ($\partial V/\partial x$ passe de $0{,}3$ à $300$).

Le produit ne change pas&nbsp;: $\alpha\_1 v^1 = 0{,}3 \times 10 = 300 \times 0{,}01 = 3$&nbsp;m. C'est l'analyse dimensionnelle&nbsp;: $v^1$ compte des «&nbsp;kilomètres&nbsp;», $\alpha\_1$ des «&nbsp;mètres par kilomètre&nbsp;», et l'unité se simplifie. Le travail $-P\\,\mathrm{d}V$ d'un gaz en est un autre exemple&nbsp;: passer des m$^3$ aux litres multiplie $\mathrm{d}V$ par $1000$ et divise $P$ par $1000$, et le produit reste le même travail, en joules. La figure fait de même avec des changements de base quelconques (angle, longueur).

<div class="svg-container">
<svg id="f2-svg" viewBox="0 0 600 345" role="img" aria-label="Un vecteur v et une forme alpha, dessinée comme une pile de lignes, exprimés dans une base oblique (e1, e2). Les composantes du vecteur sont les coefficients de sa décomposition ; celles de la forme sont les nombres de lignes franchies par chaque vecteur de base. En changeant la base, les deux jeux de composantes varient en sens contraire, mais le nombre de lignes franchies par v ne change pas." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="f2a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="f2b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker>
<marker id="f2c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="f2-clip"><rect x="12" y="34" width="372" height="300"/></clipPath></defs>
<rect x="12" y="34" width="372" height="300" fill="#f8fafc" stroke="#e2e8f0"/>
<g clip-path="url(#f2-clip)"><path id="f2-lines" d="M0,0" fill="none" stroke="#970E53" stroke-width="1.3" stroke-opacity="0.55"/>
<polygon id="f2-par" points="0,0" fill="#d1dfe8" fill-opacity="0.6" stroke="#004D80" stroke-width="1" stroke-dasharray="4 3" stroke-opacity="0.7"/></g>
<g id="f2-d1"></g><g id="f2-d2"></g><g id="f2-dv"></g>
<line id="f2-e1" x1="0" y1="0" x2="0" y2="0" stroke="#006C65" stroke-width="2.6" marker-end="url(#f2b)"/>
<line id="f2-e2" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="2.6" marker-end="url(#f2c)"/>
<line id="f2-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#f2a)"/>
<circle cx="120" cy="262" r="2.8" fill="#334155"/>
<circle id="f2-h" cx="0" cy="0" r="14" fill="#004D80" fill-opacity="0.001"/>
<text id="f2-l1" x="0" y="0" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif"><tspan font-weight="bold">e</tspan><tspan dy="4" font-size="9.8">1</tspan></text>
<text id="f2-l2" x="0" y="0" font-size="14" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"><tspan font-weight="bold">e</tspan><tspan dy="4" font-size="9.8">2</tspan></text>
<text id="f2-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text x="20" y="28" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">lignes magenta : la forme α</text>
<text x="398" y="50" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">décomposer le vecteur</text>
<text id="f2-tv" x="398" y="72" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f2-tv2" x="398" y="94" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text x="398" y="118" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">compter les lignes franchies</text>
<text id="f2-ta" x="398" y="140" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text x="398" y="186" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">nombre de lignes franchies par v</text>
<text id="f2-tp" x="398" y="212" font-size="15.5" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f2-tn" x="398" y="236" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-style="italic">inchangé quand on change de base</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>angle entre <b>e</b><sub>1</sub> et <b>e</b><sub>2</sub></span> <input type="range" class="fig-range" id="f2-a" min="30" max="150" step="1" value="70" style="width:120px;margin:0;"> <span id="f2-av" style="min-width:2.6em;">70°</span></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>longueur de <b>e</b><sub>1</sub></span> <input type="range" class="fig-range" id="f2-l" min="0.5" max="1.8" step="0.05" value="1" style="width:120px;margin:0;"> <span id="f2-lv2" style="min-width:2.6em;">1,00</span></label>
<button type="button" class="fig-btn" id="f2-r">Base orthonormée</button>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f2-svg'); if (!svg) return;
  var OX = 120, OY = 262, U = 66, A = 0.9, B = 0.55;   // forme : α(x,y) = A x + B y
  var al = 70 * Math.PI / 180, L1 = 1, v = [1.5, 1.25];
  function X(x) { return OX + U * x; } function Y(y) { return OY - U * y; }
  var pools = {};
  ['f2-d1', 'f2-d2', 'f2-dv'].forEach(function (id, k) { var col = ['#006C65', '#C2770B', '#004D80'][k]; pools[id] = []; for (var i = 0; i < 12; i++) pools[id].push(F.el('circle', { r: 3.4, fill: '#fff', stroke: col, 'stroke-width': 1.6, visibility: 'hidden' }, F.$(id))); });
  function dots(id, w) { var n = A * w[0] + B * w[1], a = Math.abs(n); pools[id].forEach(function (c, j) { var k = j + 1; if (a > 0 && k <= Math.floor(a)) { F.put(c, { cx: X(w[0] * k / a), cy: Y(w[1] * k / a), visibility: 'visible' }); } else c.setAttribute('visibility', 'hidden'); }); }
  function draw() {
    var e1 = [L1, 0], e2 = [Math.cos(al), Math.sin(al)], det = e1[0] * e2[1] - e1[1] * e2[0];
    var v1 = (v[0] * e2[1] - v[1] * e2[0]) / det, v2 = (e1[0] * v[1] - e1[1] * v[0]) / det;
    var a1 = A * e1[0] + B * e1[1], a2 = A * e2[0] + B * e2[1], av = a1 * v1 + a2 * v2, direct = A * v[0] + B * v[1];
    // lignes de la forme : A x + B y = k
    var n = Math.hypot(A, B), nx = A / n, ny = B / n, tx = -ny, ty = nx, d = '';
    for (var k = -8; k <= 10; k++) { var cx = k / n * nx, cy = k / n * ny; d += 'M' + X(cx - 9 * tx).toFixed(1) + ',' + Y(cy - 9 * ty).toFixed(1) + 'L' + X(cx + 9 * tx).toFixed(1) + ',' + Y(cy + 9 * ty).toFixed(1); }
    F.$('f2-lines').setAttribute('d', d);
    F.put(F.$('f2-e1'), { x1: X(0), y1: Y(0), x2: X(e1[0]), y2: Y(e1[1]) }); F.put(F.$('f2-e2'), { x1: X(0), y1: Y(0), x2: X(e2[0]), y2: Y(e2[1]) }); F.put(F.$('f2-v'), { x1: X(0), y1: Y(0), x2: X(v[0]), y2: Y(v[1]) });
    F.$('f2-par').setAttribute('points', [[0, 0], [v1 * e1[0], v1 * e1[1]], v, [v2 * e2[0], v2 * e2[1]]].map(function (q) { return X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }).join(' '));
    F.put(F.$('f2-h'), { cx: X(v[0]), cy: Y(v[1]) });
    F.put(F.$('f2-l1'), { x: X(e1[0]) + 6, y: Y(e1[1]) + 17 }); F.put(F.$('f2-l2'), { x: X(e2[0]) - 22, y: Y(e2[1]) - 5 }); F.put(F.$('f2-lv'), { x: X(v[0]) + 9, y: Y(v[1]) - 9 });
    dots('f2-d1', e1); dots('f2-d2', e2); dots('f2-dv', v);
    var G = '#006C65', O = '#C2770B', sp = '\u00a0\u00a0\u00a0';
    F.$('f2-tv').innerHTML = F.T([['v', 'b', '#004D80'], [' = '], ['v', 'i', G], ['1', 'sup', G], ['e', 'b', G], ['1', 'sub', G], [' + '], ['v', 'i', O], ['2', 'sup', O], ['e', 'b', O], ['2', 'sub', O]]);
    F.$('f2-tv2').innerHTML = F.T([['v', 'i', G], ['1', 'sup', G], [' = ' + F.fmt(v1), '', G], [sp], ['v', 'i', O], ['2', 'sup', O], [' = ' + F.fmt(v2), '', O]]);
    F.$('f2-ta').innerHTML = F.T([['α', '', G], ['1', 'sub', G], [' = ' + F.fmt(a1), '', G], [sp], ['α', '', O], ['2', 'sub', O], [' = ' + F.fmt(a2), '', O]]);
    F.$('f2-tp').innerHTML = F.T([['α(', ''], ['v', 'b'], [') = α'], ['1', 'sub'], ['v', 'i'], ['1', 'sup'], [' + α'], ['2', 'sub'], ['v', 'i'], ['2', 'sup'], [' = ' + F.fmt(av)]]);
    F.$('f2-av').textContent = Math.round(al * 180 / Math.PI) + '°'; F.$('f2-lv2').textContent = F.fmt(L1);
    svg.setAttribute('data-vals', [v1, v2, a1, a2, av, direct].map(function (x) { return x.toFixed(4); }).join(','));
  }
  F.drag(svg, F.$('f2-h'), function (q) { v = [F.clamp((q.x - OX) / U, -1.2, 4.0), F.clamp((OY - q.y) / U, -1.4, 3.6)]; draw(); });
  F.$('f2-a').addEventListener('input', function () { al = this.value * Math.PI / 180; draw(); });
  F.$('f2-l').addEventListener('input', function () { L1 = parseFloat(this.value); draw(); });
  F.$('f2-r').addEventListener('click', function () { al = Math.PI / 2; L1 = 1; F.$('f2-a').value = 90; F.$('f2-l').value = 1; draw(); });
  draw();
  F.responsive(svg, 398);
})();
</script>
<p class="legende">Un même vecteur $\vec v$ (bleu) et une même 1-forme $\alpha$ (lignes magenta), exprimées dans une base $(\vec e_1, \vec e_2)$ que l'on peut déformer. Les composantes $v^i$ de la décomposition (parallélogramme) et les nombres de lignes $\alpha_i$ franchies par les vecteurs de base varient en sens contraires quand on change la longueur ou l'angle des vecteurs de base (le curseur de longueur reproduit le changement d'unité de l'arpenteur B), mais le nombre de lignes franchies par $\vec v$ ne change pas. Les points sur les flèches marquent les lignes franchies.</p>

La figure illustre une propriété générale.

<div class="bloc bloc-prop">
<div class="bloc-titre">contravariant et covariant</div>

Quand on change de base, les composantes d'un vecteur («&nbsp;combien de&nbsp;» vecteurs de base) varient à l'inverse de la base&nbsp;: elles sont **contravariantes** (indice en haut). Celles d'une 1-forme («&nbsp;combien par&nbsp;» vecteur de base) varient comme la base&nbsp;: elles sont **covariantes** (indice en bas). Leur rencontre $\alpha\_i\\,v^i$ est un nombre indépendant de la base.

</div>

Aucun «&nbsp;dictionnaire&nbsp;» entre indices hauts et bas n'est nécessaire&nbsp;: l'indice dit de quel objet il s'agit. Il n'en faut un que pour transformer un vecteur en mesureur, ce qui demande une métrique (voir plus bas, à propos du gradient).

**Des mesureurs qui lisent les composantes.** Le mesureur $\varepsilon^1$ qui répond à «&nbsp;combien de $\vec e\_1$ contient ce vecteur&nbsp;?» est connu par ses valeurs sur la base&nbsp;: $\varepsilon^1(\vec e\_1) = 1$ et $\varepsilon^1(\vec e\_2) = 0$. De même pour $\varepsilon^2$.

<div class="bloc bloc-def">
<div class="bloc-titre">base duale</div>

Les 1-formes $\varepsilon^i$ telles que

$$\varepsilon^i(\vec e\_j) = \delta^i\_j$$

(symbole de Kronecker&nbsp;: $1$ si $i = j$, $0$ sinon) forment la **base duale** de $(\vec e\_i)$. Elles lisent les composantes, $\varepsilon^i(\vec v) = v^i$, et toute 1-forme s'écrit $\alpha = \alpha\_i\\,\varepsilon^i$.

</div>

On le vérifie par linéarité&nbsp;: $\varepsilon^i(\vec v) = v^j\\,\varepsilon^i(\vec e\_j) = v^i$, et les deux membres de $\alpha = \alpha\_i\\,\varepsilon^i$ valent $\alpha\_j$ sur chaque $\vec e\_j$. Les vecteurs s'écrivent $v^i\\,\vec e\_i$ et les mesureurs $\alpha\_i\\,\varepsilon^i$&nbsp;: deux espaces en miroir.

**Le cas des coordonnées curvilignes.** Un système de coordonnées $(q^1, q^2)$ (par exemple $(r, \theta)$) attribue ses coordonnées à chaque point, et réciproquement la position est une fonction $\vec r(q^1, q^2)$. Les coordonnées étant des fonctions de la position, on dispose déjà de mesureurs&nbsp;: leurs différentielles $\mathrm{d}q^i$. Pour un déplacement $\vec u$, le nombre $\mathrm{d}q^i(\vec u)$ est la variation de la coordonnée $q^i$&nbsp;; en coordonnées cartésiennes, $\mathrm{d}x(\vec u) = u\_x$. Ce sont les candidats naturels pour la base duale&nbsp;; il reste à trouver les vecteurs correspondants.

Faisons varier la seule coordonnée $q^i$, de $\delta$, les autres restant fixes&nbsp;: le point décrit la **courbe coordonnée** de $q^i$, et son vecteur position change, au premier ordre, de $\vec e\_i\\,\delta$, avec $\vec e\_i = \partial\vec r/\partial q^i$.

Ce vecteur est tangent à la courbe coordonnée (c'est le $\vec e\_i$ de la page [De Newton à Hamilton](/physique/meca/hamilton/)), et sa dimension est celle d'une longueur par unité de $q^i$&nbsp;: en polaires, $\vec e\_r$ vaut $1$ m par mètre et $\vec e\_\theta$ vaut $r$ mètres par radian. Par construction, quand le point se déplace de $\vec e\_i$, la coordonnée $q^i$ augmente de $1$ et les autres ne changent pas, donc $\mathrm{d}q^j(\vec e\_i) = \delta^j\_i$.

Cette relation suffit à faire des $\vec e\_i$ une base. Si $c^i\\,\vec e\_i = \vec 0$, appliquer $\mathrm{d}q^j$ donne $c^j = 0$&nbsp;: les $n$ vecteurs sont indépendants, donc ils forment une base de l'espace de dimension $n$. Tout déplacement s'écrit ainsi $\vec u = u^i\\,\vec e\_i$, et appliquer $\mathrm{d}q^j$ aux deux membres donne $u^j = \mathrm{d}q^j(\vec u)$&nbsp;: les composantes d'un déplacement sont les variations des coordonnées.

<div class="bloc bloc-prop">
<div class="bloc-titre">base d'un système de coordonnées</div>

Pour des coordonnées $(q^i)$, les vecteurs $\vec e\_i = \partial\vec r/\partial q^i$ forment une base de vecteurs, dont la base duale est $(\mathrm{d}q^i)$&nbsp;:

$$\mathrm{d}q^j(\vec e\_i) = \delta^j\_i,\qquad \mathrm{d}\vec r = \vec e\_i\\,\mathrm{d}q^i.$$

</div>

La figure suivante dessine ces objets pour un système de coordonnées curvilignes. Les lignes de $\mathrm{d}q^j$ sont les courbes coordonnées $q^j = \text{cste}$, avec un écart de $1$ entre deux lignes. Le vecteur $\vec e\_i$ longe les courbes $q^j = \text{cste}$ avec $j \neq i$, donc n'en franchit aucune, et il franchit une ligne de $\mathrm{d}q^i$.

<div class="svg-container">
<svg id="fd-svg" viewBox="0 0 600 345" role="img" aria-label="Un système de coordonnées curvilignes (q1, q2) : les courbes q1 = constante sont des droites verticales vertes, les courbes q2 = constante sont des paraboles orange. En un point P, le vecteur vert e1 (dérivée du vecteur position par rapport à q1) est tangent à la parabole orange qui passe par P et franchit une ligne verte ; le vecteur orange e2 est tangent à la droite verte qui passe par P et franchit une ligne orange. Un vecteur bleu v se décompose en v1 e1 + v2 e2, où v1 et v2 sont les valeurs de dq1 et dq2 sur v. On peut déplacer P et la pointe du vecteur v." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="fda" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="fdb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker>
<marker id="fdc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="fd-clip"><rect x="10" y="34" width="372" height="300"/></clipPath></defs>
<rect x="10" y="34" width="372" height="300" fill="#f8fafc" stroke="#e2e8f0"/>
<g clip-path="url(#fd-clip)"><path id="fd-gv" d="M0,0" fill="none" stroke="#006C65" stroke-width="1.3" stroke-opacity="0.55"/>
<path id="fd-gp" d="M0,0" fill="none" stroke="#C2770B" stroke-width="1.3" stroke-opacity="0.6"/>
<polygon id="fd-par" points="0,0" fill="#d1dfe8" fill-opacity="0.6" stroke="#004D80" stroke-width="1" stroke-dasharray="4 3" stroke-opacity="0.7"/></g>
<line id="fd-e1" x1="0" y1="0" x2="0" y2="0" stroke="#006C65" stroke-width="2.8" marker-end="url(#fdb)"/>
<line id="fd-e2" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="2.8" marker-end="url(#fdc)"/>
<line id="fd-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#fda)"/>
<circle id="fd-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fd-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fd-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="fd-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="fd-l1" x="0" y="0" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-l2" x="0" y="0" font-size="14" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text id="fd-tt" x="20" y="28" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic"></text>
<text x="398" y="50" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">valeurs des d<tspan font-style="italic">q</tspan><tspan dy="-5" font-size="9">i</tspan><tspan dy="5"> sur les vecteurs de base</tspan></text>
<text id="fd-a11" x="398" y="76" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-a21" x="398" y="98" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-a12" x="398" y="122" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-a22" x="398" y="144" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text x="398" y="182" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">décomposer le vecteur bleu</text>
<text id="fd-b1" x="398" y="206" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-b2" x="398" y="228" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fd-b3" x="398" y="256" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fd-svg'); if (!svg) return;
  var OX = 195, OY = 250, U = 50, KK = 1 / 6, B = 2 * KK;   // coordonnées : q1 = x, q2 = y - x²/6
  function X(x) { return OX + U * x; } function Y(y) { return OY - U * y; }
  var G = '#006C65', O = '#C2770B', i, d = '', x;
  for (i = -3; i <= 3; i++) d += 'M' + X(i).toFixed(1) + ',30L' + X(i).toFixed(1) + ',338';
  F.$('fd-gv').setAttribute('d', d); d = '';
  for (i = -2; i <= 5; i++) { for (x = -3.5; x <= 3.51; x += 0.25) d += (x < -3.4 ? 'M' : 'L') + X(x).toFixed(1) + ',' + Y(i + KK * x * x).toFixed(1); }
  F.$('fd-gp').setAttribute('d', d);
  F.$('fd-tt').innerHTML = F.T([['courbes ', '', '#64748b'], ['q', 'i', G], ['1', 'sup', G], [' = cste', '', G], ['  ·  courbes ', '', '#64748b'], ['q', 'i', O], ['2', 'sup', O], [' = cste', '', O]]);
  var p = [0.6, 0.9], v = [1.1, 1.2];
  function z(a) { a = Math.round(a * 1e6) / 1e6 + 0; return F.fmt(a, 0) === '-0' ? '0' : F.fmt(a, a === Math.round(a) ? 0 : 2); }
  function dq(w, j) { return j === 1 ? w[0] : w[1] - B * p[0] * w[0]; }
  function Q(j) { var c = j === 1 ? G : O; return [['d', '', c], ['q', 'i', c], [String(j), 'sup', c]]; }
  function D(j) { var c = j === 1 ? G : O; return [['e', 'b', c], [String(j), 'sub', c]]; }
  function draw() {
    var e1 = [1, B * p[0]], e2 = [0, 1], v1 = dq(v, 1), v2 = dq(v, 2), q;
    F.put(F.$('fd-e1'), { x1: X(p[0]), y1: Y(p[1]), x2: X(p[0] + e1[0]), y2: Y(p[1] + e1[1]) });
    F.put(F.$('fd-e2'), { x1: X(p[0]), y1: Y(p[1]), x2: X(p[0] + e2[0]), y2: Y(p[1] + e2[1]) });
    F.put(F.$('fd-v'), { x1: X(p[0]), y1: Y(p[1]), x2: X(p[0] + v[0]), y2: Y(p[1] + v[1]) });
    F.$('fd-par').setAttribute('points', [[0, 0], [v1 * e1[0], v1 * e1[1]], v, [v2 * e2[0], v2 * e2[1]]].map(function (r) { return X(p[0] + r[0]).toFixed(1) + ',' + Y(p[1] + r[1]).toFixed(1); }).join(' '));
    ['fd-p', 'fd-hp'].forEach(function (id) { F.put(F.$(id), { cx: X(p[0]), cy: Y(p[1]) }); }); F.put(F.$('fd-ht'), { cx: X(p[0] + v[0]), cy: Y(p[1] + v[1]) });
    F.put(F.$('fd-lp'), { x: X(p[0]) - 18, y: Y(p[1]) + 17 });
    F.put(F.$('fd-l1'), { x: X(p[0] + e1[0]) + 4, y: Y(p[1] + e1[1]) + 17 }); F.put(F.$('fd-l2'), { x: X(p[0]) - 26, y: Y(p[1] + 1) + 8 });
    F.put(F.$('fd-lv'), { x: X(p[0] + v[0]) + 9, y: Y(p[1] + v[1]) - 9 });
    F.$('fd-l1').innerHTML = F.T(D(1)); F.$('fd-l2').innerHTML = F.T(D(2));
    [[1, 1], [2, 1], [1, 2], [2, 2]].forEach(function (ij) {
      var w = ij[1] === 1 ? e1 : e2;
      F.$('fd-a' + ij[0] + ij[1]).innerHTML = F.T(Q(ij[0]).concat([['('], ], D(ij[1]), [[') = ' + z(dq(w, ij[0]))]]));
    });
    F.$('fd-b1').innerHTML = F.T([['v', 'i', G], ['1', 'sup', G], [' = '], ].concat(Q(1), [['('], ['v', 'b'], [') = ' + z(v1)]]));
    F.$('fd-b2').innerHTML = F.T([['v', 'i', O], ['2', 'sup', O], [' = '], ].concat(Q(2), [['('], ['v', 'b'], [') = ' + z(v2)]]));
    F.$('fd-b3').innerHTML = F.T([['v', 'b', '#004D80'], [' = '], ['v', 'i', G], ['1', 'sup', G]].concat(D(1), [[' + '], ['v', 'i', O], ['2', 'sup', O]], D(2)));
  }
  F.drag(svg, F.$('fd-hp'), function (r) { p = [F.clamp((r.x - OX) / U, -3, 2.2), F.clamp((OY - r.y) / U, -1.2, 3.4)]; draw(); });
  F.drag(svg, F.$('fd-ht'), function (r) { var dx = (r.x - X(p[0])) / U, dy = (Y(p[1]) - r.y) / U, n = Math.hypot(dx, dy); if (n > 2) { dx *= 2 / n; dy *= 2 / n; } v = [dx, dy]; draw(); });
  draw();
  F.responsive(svg, 398);
})();
</script>
<p class="legende">Un système de coordonnées $(q^1, q^2)$ défini par $q^1 = x$ et $q^2 = y - x^2/6$&nbsp;: les courbes $q^1 = \text{cste}$ (vertes) sont des droites, les courbes $q^2 = \text{cste}$ (orange) des paraboles. Ce sont les lignes de $\mathrm{d}q^1$ et de $\mathrm{d}q^2$, avec un écart de $1$. En $P$, le vecteur $\vec e_1 = \partial\vec r/\partial q^1$ est tangent à la parabole orange et franchit une ligne verte&nbsp;; $\vec e_2 = \partial\vec r/\partial q^2$ est tangent à la droite verte et franchit une ligne orange. Les $\mathrm{d}q^i$ ne sont donc pas «&nbsp;perpendiculaires&nbsp;» aux $\vec e_j$&nbsp;: la dualité ne demande aucun angle. Le vecteur bleu se décompose en $v^1\vec e_1 + v^2\vec e_2$ (parallélogramme en tirets), avec $v^i = \mathrm{d}q^i(\vec v)$.</p>

**Les composantes de $\mathrm{d}f$.** Pour une fonction $f$, la valeur de $\mathrm{d}f$ sur $\vec e\_i$ est la variation de $f$ quand $q^i$ augmente de $1$, les autres coordonnées étant fixées, c'est-à-dire la dérivée partielle $\partial f/\partial q^i$&nbsp;: c'est la pente le long de l'axe $i$, comme pour A et B. Comme $\alpha = \alpha\_i\\,\varepsilon^i$, on en déduit la propriété suivante.

<div class="bloc bloc-prop">
<div class="bloc-titre">dérivation en chaîne</div>

Dans tout système de coordonnées $(q^i)$,

$$\mathrm{d}f = \frac{\partial f}{\partial q^i}\\,\mathrm{d}q^i.$$

C'est la règle de dérivation en chaîne, qui garde la même forme d'un système de coordonnées à l'autre.

</div>

## La différentielle et les coordonnées polaires {#polaires}

Appliquons cette formule aux coordonnées polaires $(r, \theta)$&nbsp;: $\mathrm{d}f = \frac{\partial f}{\partial r}\\,\mathrm{d}r + \frac{\partial f}{\partial\theta}\\,\mathrm{d}\theta$. Aucun facteur $1/r$&nbsp;: la formule est exactement celle des coordonnées cartésiennes. Où est passé le $1/r$&nbsp;? Dans le dessin.

<div class="svg-container">
<svg id="f3-svg" viewBox="0 0 600 345" role="img" aria-label="Le plan en coordonnées polaires. Les cercles r = constante sont les lignes de niveau de la forme dr, les rayons theta = constante sont celles de la forme d theta. Une flèche partant du point P franchit un certain nombre de cercles et de rayons : ce sont les valeurs de dr et de d theta sur cette flèche. Les rayons s'écartent quand on s'éloigne de l'origine. On peut déplacer P et la pointe de la flèche." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="f3a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<clipPath id="f3-clip"><rect x="10" y="34" width="380" height="306"/></clipPath></defs>
<rect x="10" y="34" width="380" height="306" fill="#f8fafc" stroke="#e2e8f0"/>
<g id="f3-grid" clip-path="url(#f3-clip)"></g>
<g clip-path="url(#f3-clip)"><path id="f3-hl" d="M0,0" fill="none" stroke="#C2770B" stroke-width="2.6" stroke-linecap="round"/>
<path id="f3-hl2" d="M0,0" fill="none" stroke="#C2770B" stroke-width="2.6"/></g>
<line id="f3-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#f3a)"/>
<circle id="f3-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="f3-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="f3-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="f3-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="f3-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text id="f3-lg" x="0" y="0" font-size="12" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" font-style="italic" text-anchor="middle"></text>
<text x="18" y="28" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic"><tspan fill="#006C65">cercles : lignes de d<tspan font-style="italic">r</tspan></tspan> · <tspan fill="#C2770B">rayons : lignes de d<tspan font-style="italic">θ</tspan></tspan></text>
<text x="402" y="62" font-size="14.5" font-weight="bold" fill="#006C65" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">r</tspan>(<tspan font-weight="bold">v</tspan>) : cercles franchis</text>
<text id="f3-nr" x="402" y="92" font-size="24" font-weight="bold" fill="#006C65" font-family="Georgia,'Times New Roman',serif"></text>
<text x="402" y="138" font-size="14.5" font-weight="bold" fill="#C2770B" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">θ</tspan>(<tspan font-weight="bold">v</tspan>) : rayons franchis</text>
<text id="f3-nt" x="402" y="168" font-size="24" font-weight="bold" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"></text>
<text x="402" y="206" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">Les rayons s'écartent quand on</text>
<text x="402" y="223" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">s'éloigne de l'origine : à distance</text>
<text x="402" y="240" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"><tspan font-style="italic">r</tspan>, deux rayons voisins sont</text>
<text id="f3-sp" x="402" y="257" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f3-svg'); if (!svg) return;
  var OX = 200, OY = 187, S = 31, DT = Math.PI / 12, g = F.$('f3-grid'), i;
  for (i = 1; i <= 6; i++) F.el('circle', { cx: OX, cy: OY, r: S * i, fill: 'none', stroke: '#006C65', 'stroke-width': 1, 'stroke-opacity': 0.5 }, g);
  for (i = 0; i < 24; i++) F.el('line', { x1: OX, y1: OY, x2: OX + 8 * S * Math.cos(i * DT), y2: OY - 8 * S * Math.sin(i * DT), stroke: '#C2770B', 'stroke-width': 1, 'stroke-opacity': 0.5 }, g);
  F.el('circle', { cx: OX, cy: OY, r: 3, fill: '#334155' }, g);
  var r = 2.7, th = 0.85, v = [0.9, 0.55];
  function draw() {
    var c = Math.cos(th), s = Math.sin(th), P = [OX + S * r * c, OY - S * r * s], T = [P[0] + S * v[0], P[1] - S * v[1]];
    F.put(F.$('f3-v'), { x1: P[0], y1: P[1], x2: T[0], y2: T[1] });
    ['f3-p', 'f3-hp'].forEach(function (id) { F.put(F.$(id), { cx: P[0], cy: P[1] }); }); F.put(F.$('f3-ht'), { cx: T[0], cy: T[1] });
    F.put(F.$('f3-lp'), { x: P[0] - 17, y: P[1] + 17 }); F.put(F.$('f3-lv'), { x: T[0] + 8, y: T[1] - 8 });
    // les deux rayons voisins de P, et l'arc de cercle qui les sépare
    var k = Math.floor(th / DT), a0 = k * DT, a1 = a0 + DT, d = '';
    [a0, a1].forEach(function (a) { d += 'M' + OX + ',' + OY + 'L' + (OX + 8 * S * Math.cos(a)).toFixed(1) + ',' + (OY - 8 * S * Math.sin(a)).toFixed(1); });
    F.$('f3-hl').setAttribute('d', d);
    F.$('f3-hl2').setAttribute('d', 'M' + (OX + S * r * Math.cos(a0)).toFixed(1) + ',' + (OY - S * r * Math.sin(a0)).toFixed(1) + 'A' + (S * r).toFixed(1) + ',' + (S * r).toFixed(1) + ' 0 0 0 ' + (OX + S * r * Math.cos(a1)).toFixed(1) + ',' + (OY - S * r * Math.sin(a1)).toFixed(1));
    var am = (a0 + a1) / 2; F.put(F.$('f3-lg'), { x: OX + (S * r + 15) * Math.cos(am), y: OY - (S * r + 15) * Math.sin(am) + 4 });
    F.$('f3-lg').textContent = '';
    var vr = v[0] * c + v[1] * s, vt = -v[0] * s + v[1] * c, nr = vr / 1, nt = vt / r / DT;
    F.$('f3-nr').textContent = (nr >= 0 ? '+' : '') + F.fmt(nr, 1);
    F.$('f3-nt').textContent = (nt >= 0 ? '+' : '') + F.fmt(nt, 1);
    F.$('f3-sp').textContent = 'écartés de r·Δθ = ' + F.fmt(r * DT, 2) + ' (Δθ = 15°).';
    svg.setAttribute('data-vals', [r, nr, nt, vr, vt].map(function (x) { return x.toFixed(4); }).join(','));
  }
  F.drag(svg, F.$('f3-hp'), function (q) { var x = q.x - OX, y = OY - q.y; r = F.clamp(Math.hypot(x, y) / S, 0.9, 4.7); th = Math.atan2(y, x); if (th < 0) th += 2 * Math.PI; draw(); });
  F.drag(svg, F.$('f3-ht'), function (q) { var c = Math.cos(th), s = Math.sin(th), P = [OX + S * r * c, OY - S * r * s], dx = (q.x - P[0]) / S, dy = -(q.y - P[1]) / S, n = Math.hypot(dx, dy); if (n > 1.8) { dx *= 1.8 / n; dy *= 1.8 / n; } v = [dx, dy]; draw(); });
  draw();
  F.responsive(svg, 402);
})();
</script>
<p class="legende">Les lignes de $\mathrm{d}r$ sont des cercles équidistants, celles de $\mathrm{d}\theta$ des rayons séparés de $\Delta\theta = 15°$. Un vecteur franchit $\mathrm{d}r(\vec v) = v_r$ cercles et $\mathrm{d}\theta(\vec v) = v_\theta/r$ radians, soit $v_\theta/(r\Delta\theta)$ rayons ($v_r$ et $v_\theta$ sont les composantes de $\vec v$ sur les vecteurs unitaires radial et orthoradial). À distance $r$, deux rayons voisins sont écartés de $r\Delta\theta$&nbsp;: plus on s'éloigne, moins le même vecteur en franchit.</p>

Le facteur $1/r$ est donc dans l'objet $\mathrm{d}\theta$ lui-même&nbsp;: les rayons divergent. C'est une propriété géométrique, que le dessin montre, et la formule de $\mathrm{d}f$ n'a pas besoin de la répéter. Physiquement, un cycliste qui roule à la vitesse $v$ sur un rond-point de rayon $r$ balaye l'angle $v/r$ par seconde&nbsp;: à vitesse égale, plus le cercle est grand, moins l'angle change.

**Et le gradient&nbsp;?** Le $1/r$ des manuels apparaît dans $\vec\nabla f = \frac{\partial f}{\partial r}\\,\hat e\_r + \frac{1}{r}\frac{\partial f}{\partial\theta}\\,\hat e\_\theta$, car le gradient est un vecteur (la direction de plus forte pente) alors que $\mathrm{d}f$ est un mesureur. Pour passer de l'un à l'autre, il faut une **métrique** $g$, c'est-à-dire un produit scalaire $g(\vec u, \vec v)$ qui mesure longueurs et angles (pour la métrique euclidienne usuelle, $g(\vec u, \vec v) = \vec u\cdot\vec v$).

<div class="bloc bloc-def">
<div class="bloc-titre">gradient</div>

À chaque vecteur $\vec u$, la métrique associe la 1-forme $\vec u^\flat$ («&nbsp;$\vec u$ bémol&nbsp;») qui à un vecteur $\vec v$ associe le nombre $g(\vec u, \vec v)$. Le **gradient** de $f$ est le vecteur $\vec\nabla f$ dont la 1-forme associée est $\mathrm{d}f$, $(\vec\nabla f)^\flat = \mathrm{d}f$, c'est-à-dire

$$g\big(\vec\nabla f, \vec v\big) = \mathrm{d}f(\vec v)\quad\text{pour tout vecteur }\vec v.$$

</div>

Avec le produit scalaire usuel, $\vec\nabla f\cdot\vec v = \mathrm{d}f(\vec v)$&nbsp;: la composante de $\vec\nabla f$ sur un vecteur unitaire (un pas d'une unité de longueur) est la variation de $f$ pour ce pas, c'est-à-dire la pente dans cette direction.

Pour trouver $\vec\nabla f$ en coordonnées polaires, décomposons-le sur les vecteurs unitaires $\hat e\_r$ et $\hat e\_\theta$, qui sont orthogonaux et de longueur $1$. La composante de $\vec\nabla f$ sur chacun d'eux est son produit scalaire avec celui-ci, c'est-à-dire la valeur de $\mathrm{d}f$ sur celui-ci&nbsp;:

$$\vec\nabla f = \mathrm{d}f(\hat e\_r)\\,\hat e\_r + \mathrm{d}f(\hat e\_\theta)\\,\hat e\_\theta.$$

Il reste à exprimer ces deux vecteurs avec les vecteurs coordonnés.

- $\vec e\_r = \partial\vec r/\partial r$ est le déplacement qui éloigne de l'origine d'une unité de longueur ($r$ augmente de $1$), à $\theta$ fixé. C'est $\hat e\_r$, et $\mathrm{d}f(\hat e\_r) = \partial f/\partial r$.
- $\vec e\_\theta = \partial\vec r/\partial\theta$ est le déplacement qui fait varier $\theta$ de $1$ radian, à $r$ fixé. Il se fait sur un cercle de rayon $r$, c'est un arc de longueur $r$&nbsp;: $\vec e\_\theta = r\\,\hat e\_\theta$. Par linéarité de $\mathrm{d}f$, $\mathrm{d}f(\hat e\_\theta) = \frac{1}{r}\\,\mathrm{d}f(\vec e\_\theta) = \frac{1}{r}\\,\partial f/\partial\theta$.

On obtient la formule des manuels.

<div class="bloc bloc-prop">
<div class="bloc-titre">gradient en coordonnées</div>

En coordonnées polaires,

$$\vec\nabla f = \frac{\partial f}{\partial r}\\,\hat e\_r + \frac{1}{r}\frac{\partial f}{\partial\theta}\\,\hat e\_\theta.$$

Dans un système de coordonnées quelconque, $(\vec\nabla f)^i = g^{ij}\\,\partial f/\partial q^j$, où $(g^{ij})$ est l'inverse de la matrice $(g\_{ij})$ de la métrique.

</div>

Le $1/r$ vient de la métrique $g = \mathrm{d}r^2 + r^2\\,\mathrm{d}\theta^2$, qui dit que $\vec e\_\theta$ est de longueur $r$. Ici $(g^{ij}) = \mathrm{diag}(1, 1/r^2)$, ce qui redonne la formule précédente puisque $\vec e\_\theta = r\\,\hat e\_\theta$.

**Retour aux deux arpenteurs.** La recette «&nbsp;gradient = dérivées partielles&nbsp;» est le cas $g^{ij} = \delta^{ij}$, celui des axes orthonormés. Pour B, $\vec e\_1'$ mesure $1000$ m, donc $(g^{ij}) = \mathrm{diag}(10^{-6}, 1)$ et $(\vec\nabla V)^i = g^{ij}\\,\partial V/\partial q^j$ vaut $(3\times 10^{-4}\\,;\\,0{,}4)$&nbsp;: c'est le vecteur $(0{,}3\\,;\\,0{,}4)$ de A, exprimé dans les graduations de B (la première composante est divisée par $1000$). Une fois sa métrique prise en compte, B décrit le même vecteur que A.

Quand une grandeur est naturellement un mesureur (une variation, une force dérivant d'un potentiel, un travail), on n'a pas besoin de métrique.

## Intégrer une 1-forme {#integrer}

Un chemin est une suite de petits déplacements, et une 1-forme associe un nombre à chaque petit déplacement&nbsp;: on additionne ces nombres. Soit $\gamma$ un chemin de $A$ à $B$, parcouru par un point de vecteur position $\vec r(t)$ pour $t \in [a, b]$, avec la vitesse $\vec v(t) = \mathrm{d}\vec r/\mathrm{d}t$. Découpons $[a, b]$ en $N$ pas $\Delta t$. Pendant le pas qui commence à $t\_k$, le point se déplace, au premier ordre, de $\vec v(t\_k)\\,\Delta t$, et la 1-forme, prise au point $\vec r(t\_k)$, donne sur ce déplacement le nombre

$$\alpha\big(\vec v(t\_k)\\,\Delta t\big) = \alpha\big(\vec v(t\_k)\big)\\,\Delta t,$$

par linéarité. La somme de ces nombres tend, quand les pas deviennent petits, vers l'intégrale de $\alpha$ le long de $\gamma$.

<div class="bloc bloc-def">
<div class="bloc-titre">intégrale d'une 1-forme</div>

L'**intégrale** d'une 1-forme $\alpha$ le long d'un chemin $\gamma$, parcouru par le point $\vec r(t)$ pour $t \in [a, b]$ avec la vitesse $\vec v(t)$, est

$$\int\_\gamma \alpha = \int\_a^b \alpha\big(\vec v(t)\big)\\,\mathrm{d}t,$$

où $\alpha$ est prise au point $\vec r(t)$. C'est la limite des sommes $\sum\_k \alpha\big(\vec v(t\_k)\big)\\,\Delta t$.

</div>

Le nombre $\alpha\big(\vec v(t)\big)$ est le nombre de lignes de $\alpha$ franchies par unité de temps&nbsp;; multiplié par $\mathrm{d}t$, c'est celui du déplacement $\mathrm{d}\vec r = \vec v\\,\mathrm{d}t$, et l'intégrale est l'aire sous le graphe.

Prenons la 1-forme la plus concrète de la physique, **le travail d'une force**. Une force $\vec F$ fournit à un point matériel, pour un petit déplacement $\vec u$, le travail $\vec F\cdot\vec u$, linéaire en $\vec u$&nbsp;: c'est une 1-forme, $\omega\_F = \vec F^\flat$, définie par $\omega\_F(\vec u) = \vec F\cdot\vec u$. Appliquée à un déplacement $\mathrm{d}\vec r$, elle donne un travail (en joules)&nbsp;; appliquée à la vitesse, $\omega\_F(\vec v) = \vec F\cdot\vec v$ est la puissance de la force (en watts). Le travail sur le chemin est la somme des travaux élémentaires, que l'on peut écrire de trois façons&nbsp;:

$$W = \int\_\gamma \omega\_F = \int\_a^b \omega\_F(\vec v)\\,\mathrm{d}t = \int\_a^b \vec F\big(\vec r(t)\big)\cdot\vec v(t)\\,\mathrm{d}t.$$

La figure construit cette intégrale avec des rectangles.

<div class="svg-container" style="display:flex;flex-wrap:wrap;gap:6px 10px;justify-content:center;align-items:flex-start;">
<svg id="fw-map" viewBox="0 0 360 350" role="img" aria-label="Carte d'un champ de force F, dessiné par des flèches grises, et d'un chemin gamma qui va du point A au point B en passant par M. Le chemin est découpé en pas de même durée ; chaque pas est coloré en vert quand la force pousse dans le sens du mouvement et en orange quand elle s'y oppose. On peut déplacer A, M et B." style="flex:1 1 280px;max-width:360px;height:auto;touch-action:none;">
<defs><marker id="fwf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker>
<marker id="fwe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#334155"/></marker>
<clipPath id="fw-mclip"><rect x="10" y="34" width="340" height="280"/></clipPath></defs>
<rect x="10" y="34" width="340" height="280" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1"/>
<g id="fw-field" clip-path="url(#fw-mclip)"></g>
<g clip-path="url(#fw-mclip)"><path id="fw-gam" d="M0,0" fill="none" stroke="#334155" stroke-width="1" marker-end="url(#fwe)"/>
<path id="fw-pos" d="M0,0" fill="none" stroke="#006C65" stroke-width="3.6" stroke-linecap="butt"/>
<path id="fw-neg" d="M0,0" fill="none" stroke="#C2770B" stroke-width="3.6" stroke-linecap="butt"/>
<g id="fw-dots"></g></g>
<circle id="fw-ha" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fw-hm" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fw-hb" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fw-a" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fw-m" cx="0" cy="0" r="4" fill="#fff" stroke="#334155" stroke-width="1.6" pointer-events="none"/>
<circle id="fw-b" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<text id="fw-la" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">A</text>
<text id="fw-lb" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">B</text>
<text x="10" y="26" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">champ de force <tspan font-weight="bold" font-style="normal">F</tspan> (gris) et chemin <tspan font-style="italic">γ</tspan></text>
<text x="10" y="332" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">vert : <tspan font-weight="bold" font-style="normal">F</tspan> pousse dans le sens du mouvement ; orange : s'y oppose</text>
</svg>
<svg id="fw-gr" viewBox="0 0 360 350" role="img" aria-label="Graphe de la puissance de la force le long du chemin, en fonction du temps entre 0 et 1. Des rectangles de largeur égale à la durée d'un pas ont pour hauteur la valeur au début du pas ; leur aire totale est la somme de Riemann, qui se rapproche de l'aire sous la courbe quand le nombre de pas augmente." style="flex:1 1 280px;max-width:360px;height:auto;">
<defs><clipPath id="fw-gclip"><rect x="40" y="40" width="310" height="230"/></clipPath></defs>
<rect x="40" y="40" width="310" height="230" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
<g clip-path="url(#fw-gclip)"><line x1="40" y1="155" x2="350" y2="155" stroke="#94a3b8" stroke-width="1"/>
<path id="fw-rp" d="M0,0" fill="#006C65" fill-opacity="0.3" stroke="#006C65" stroke-width="1"/>
<path id="fw-rn" d="M0,0" fill="#C2770B" fill-opacity="0.3" stroke="#C2770B" stroke-width="1"/>
<path id="fw-cur" d="M0,0" fill="none" stroke="#334155" stroke-width="2"/></g>
<text x="40" y="26" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">α(<tspan font-weight="bold" font-style="normal">v</tspan>(<tspan font-style="italic">t</tspan>)) en fonction de <tspan font-style="italic">t</tspan> (la puissance <tspan font-weight="bold" font-style="normal">F</tspan>·<tspan font-weight="bold" font-style="normal">v</tspan>)</text>
<text x="40" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif">0</text>
<text x="350" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif">1</text>
<text x="195" y="288" font-size="12" text-anchor="middle" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">temps t</text>
<text id="fw-r1" x="40" y="312" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fw-r2" x="40" y="331" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
<div style="flex:1 1 100%;display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>nombre de pas <i>N</i></span> <input type="range" class="fig-range" id="fw-n" min="2" max="40" step="1" value="8" style="width:140px;margin:0;"> <span id="fw-nv" style="min-width:2em;">8</span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fw-map'); if (!svg) return;
  var S = 34, OX = 10, OY = 314, i, j;
  function X(x) { return OX + S * x; } function Y(y) { return OY - S * y; }
  function TX(t) { return 40 + 310 * t; }
  function Fx(x, y) { return [0.45 * (y - 4) - 1.2, -0.45 * (x - 5)]; }
  var fg = F.$('fw-field');
  for (i = 1; i <= 9; i += 2) for (j = 1; j <= 7; j += 2) { var f = Fx(i, j), k = 0.2; F.el('line', { x1: X(i - k * f[0]), y1: Y(j - k * f[1]), x2: X(i + k * f[0]), y2: Y(j + k * f[1]), stroke: '#94a3b8', 'stroke-width': 1.6, 'marker-end': 'url(#fwf)' }, fg); }
  var A = [1.2, 1.5], M = [4.3, 6.0], B = [8.6, 2.2], N = 8, dots = [];
  for (i = 0; i <= 40; i++) dots.push(F.el('circle', { r: 2.6, fill: '#fff', stroke: '#334155', 'stroke-width': 1.2, visibility: 'hidden' }, F.$('fw-dots')));
  function pos(t) { var C = [2 * M[0] - (A[0] + B[0]) / 2, 2 * M[1] - (A[1] + B[1]) / 2], u = 1 - t; return [u * u * A[0] + 2 * t * u * C[0] + t * t * B[0], u * u * A[1] + 2 * t * u * C[1] + t * t * B[1]]; }
  function vit(t) { var C = [2 * M[0] - (A[0] + B[0]) / 2, 2 * M[1] - (A[1] + B[1]) / 2]; return [2 * (1 - t) * (C[0] - A[0]) + 2 * t * (B[0] - C[0]), 2 * (1 - t) * (C[1] - A[1]) + 2 * t * (B[1] - C[1])]; }
  function g(t) { var q = pos(t), f = Fx(q[0], q[1]), w = vit(t); return f[0] * w[0] + f[1] * w[1]; }
  function sg(x) { return (x >= 0 ? '+' : '') + F.fmt(x, 2); }
  function draw() {
    var d = '', dp = '', dn = '', t, q, k, m, gs = [], gmax = 1, ex = 0, rs = 0, rp = '', rn = '', dc = '';
    for (i = 0; i <= 40; i++) { t = i / 40; q = pos(t); d += (i ? 'L' : 'M') + X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }
    F.$('fw-gam').setAttribute('d', d);
    for (i = 0; i <= 400; i++) { t = i / 400; gmax = Math.max(gmax, Math.abs(g(t)) * 1.08); }
    for (i = 0; i < 400; i++) ex += g((i + 0.5) / 400) / 400;
    var sc = 105 / gmax;
    for (k = 0; k < N; k++) {
      var t0 = k / N, g0 = g(t0), seg = '';
      rs += g0 / N;
      for (m = 0; m <= 6; m++) { q = pos(t0 + m / 6 / N); seg += (m ? 'L' : 'M') + X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }
      if (g0 >= 0) dp += seg; else dn += seg;
      var x0 = TX(t0), x1 = TX(t0 + 1 / N), y1 = 155 - g0 * sc, r = 'M' + x0.toFixed(1) + ',155L' + x0.toFixed(1) + ',' + y1.toFixed(1) + 'L' + x1.toFixed(1) + ',' + y1.toFixed(1) + 'L' + x1.toFixed(1) + ',155Z';
      if (g0 >= 0) rp += r; else rn += r;
      q = pos(t0); F.put(dots[k], { cx: X(q[0]), cy: Y(q[1]), visibility: 'visible' });
    }
    for (k = N; k <= 40; k++) dots[k].setAttribute('visibility', 'hidden');
    F.$('fw-pos').setAttribute('d', dp || 'M0,0'); F.$('fw-neg').setAttribute('d', dn || 'M0,0');
    F.$('fw-rp').setAttribute('d', rp || 'M0,0'); F.$('fw-rn').setAttribute('d', rn || 'M0,0');
    for (i = 0; i <= 80; i++) { t = i / 80; dc += (i ? 'L' : 'M') + TX(t).toFixed(1) + ',' + (155 - g(t) * sc).toFixed(1); }
    F.$('fw-cur').setAttribute('d', dc);
    [['fw-a', 'fw-ha', A], ['fw-m', 'fw-hm', M], ['fw-b', 'fw-hb', B]].forEach(function (e) { F.put(F.$(e[0]), { cx: X(e[2][0]), cy: Y(e[2][1]) }); F.put(F.$(e[1]), { cx: X(e[2][0]), cy: Y(e[2][1]) }); });
    F.put(F.$('fw-la'), { x: X(A[0]) - 18, y: Y(A[1]) + 18 }); F.put(F.$('fw-lb'), { x: X(B[0]) + 9, y: Y(B[1]) + 18 });
    F.$('fw-nv').textContent = N;
    F.$('fw-r1').textContent = 'somme des rectangles (N = ' + N + ') : ' + sg(rs);
    F.$('fw-r2').textContent = 'intégrale (limite N → ∞) : ' + sg(ex);
  }
  [['fw-ha', A], ['fw-hm', M], ['fw-hb', B]].forEach(function (e) { F.drag(svg, F.$(e[0]), function (q) { e[1][0] = F.clamp((q.x - OX) / S, 0.4, 9.6); e[1][1] = F.clamp((OY - q.y) / S, 0.4, 7.8); draw(); }); });
  F.$('fw-n').addEventListener('input', function () { N = parseInt(this.value, 10); draw(); });
  draw();
})();
</script>
<p class="legende">Le champ de force $\vec F$ (flèches grises) et un chemin $\gamma$ de $A$ à $B$, découpé en $N$ pas de même durée. À droite, le graphe de $t \mapsto \alpha\big(\vec v(t)\big) = \vec F\cdot\vec v$ (la puissance de la force). Chaque rectangle a pour largeur $\Delta t = 1/N$ et pour hauteur la valeur au début du pas, donc pour aire $\alpha(\vec v(t_k))\Delta t$&nbsp;; vert quand la force pousse dans le sens du mouvement, orange quand elle s'y oppose. La somme des aires se rapproche de l'intégrale quand $N$ augmente.</p>

Le travail est positif sur les portions où la force pousse dans le sens du mouvement (en vert), négatif sur celles où elle s'y oppose (en orange), et nul sur celles où elle est perpendiculaire à la trajectoire (comme la force magnétique sur une charge).

**En coordonnées.** Les composantes de la vitesse sont $v^i = \mathrm{d}q^i/\mathrm{d}t$, donc $\alpha(\vec v) = \alpha\_i\\,v^i$, et l'on retrouve l'intégrale curviligne usuelle&nbsp;: $\int\_\gamma (P\\,\mathrm{d}x + Q\\,\mathrm{d}y) = \int\_a^b \big(P\\,\dot x + Q\\,\dot y\big)\\,\mathrm{d}t$. Pour le travail, les composantes sont les valeurs de $\omega\_F$ sur les vecteurs de base&nbsp;: $\omega\_F = F\_x\\,\mathrm{d}x + F\_y\\,\mathrm{d}y + F\_z\\,\mathrm{d}z$ en cartésiennes&nbsp;; en polaires, $\omega\_F(\vec e\_r) = F\_r$ et $\omega\_F(\vec e\_\theta) = \vec F\cdot r\hat e\_\theta = rF\_\theta$, donc $\omega\_F = F\_r\\,\mathrm{d}r + rF\_\theta\\,\mathrm{d}\theta$.

<div class="bloc bloc-prop">
<div class="bloc-titre">invariance de l'intégrale</div>

L'intégrale $\int\_\gamma\alpha$ ne dépend ni du système de coordonnées, ni du paramétrage du chemin (pour un paramétrage croissant). Parcourir le chemin en sens inverse change son signe.

</div>

En effet, le nombre $\alpha(\mathrm{d}\vec r)$ est défini sans coordonnées. Si l'on reparamètre $\tilde{\vec r}(s) = \vec r\big(\varphi(s)\big)$ avec $\varphi$ croissante, la vitesse est multipliée par $\varphi'(s)$, et le changement de variable $t = \varphi(s)$ redonne la même intégrale&nbsp;: un chemin parcouru deux fois plus vite franchit les mêmes lignes.

**Quand la 1-forme est une différentielle.** Pour $\alpha = \mathrm{d}f$, le nombre $\alpha(\vec v)\\,\mathrm{d}t$ est la variation de $f$ pendant $\mathrm{d}t$&nbsp;: compter les lignes de niveau franchies revient à lire la différence d'altitude entre l'arrivée et le départ.

<div class="bloc bloc-def">
<div class="bloc-titre">forme exacte</div>

Une 1-forme $\alpha$ est **exacte** si c'est la différentielle d'une fonction, $\alpha = \mathrm{d}f$ ($f$ est un potentiel de $\alpha$).

</div>

<div class="bloc bloc-theo">
<div class="bloc-titre">fondamental de l'analyse</div>

Si $\alpha = \mathrm{d}f$ est exacte,

$$\int\_\gamma \mathrm{d}f = f(B) - f(A).$$

L'intégrale ne dépend que des extrémités $A$ et $B$ du chemin&nbsp;; en particulier, elle est nulle sur tout chemin fermé.

</div>

Le travail d'une force dérivant d'un potentiel, $\omega\_F = -\mathrm{d}V$, est exact&nbsp;: $W = V(A) - V(B)$, et la force est conservative. Celui d'un frottement fluide $\vec F = -\lambda\vec v$ vaut $-\lambda\int\|\vec v\|^2\mathrm{d}t$ et dépend du chemin&nbsp;: il n'est pas exact. C'est aussi le cas de la force de la figure&nbsp;: déplacer le point $M$ change l'intégrale, $A$ et $B$ restant fixes.

**Circulation d'un fluide.** Soit $\vec w(\vec r)$ le champ des vitesses d'un fluide. La 1-forme associée est $\vec w^\flat = w\_x\\,\mathrm{d}x + w\_y\\,\mathrm{d}y + w\_z\\,\mathrm{d}z$, et son intégrale sur un chemin fermé $\gamma$ est la **circulation**

$$\Gamma = \oint\_\gamma \vec w\cdot\mathrm{d}\vec r = \int\_a^b \vec w\big(\vec r(t)\big)\cdot\vec v(t)\\,\mathrm{d}t.$$

Elle mesure combien le fluide tourne le long de la boucle. Prenons une rotation d'ensemble, de vitesse angulaire $\Omega$&nbsp;: la vitesse du fluide est orthoradiale, de norme $\Omega r$, soit $\vec w = \Omega r\\,\hat e\_\theta = \Omega(-y, x)$ en coordonnées cartésiennes. Sa 1-forme est donc $\Omega(-y\\,\mathrm{d}x + x\\,\mathrm{d}y)$ en cartésiennes.

Pour l'écrire en polaires, on lit ses composantes, c'est-à-dire ses valeurs sur les vecteurs de base (comme pour la 1-forme travail)&nbsp;:

$$\vec w\cdot\vec e\_r = \Omega r\\,\hat e\_\theta\cdot\hat e\_r = 0,\qquad \vec w\cdot\vec e\_\theta = \Omega r\\,\hat e\_\theta\cdot r\hat e\_\theta = \Omega r^2.$$

La 1-forme est donc $\vec w^\flat = \Omega r^2\\,\mathrm{d}\theta$&nbsp;: les lignes de $\mathrm{d}\theta$ sont les rayons, et le fluide les croise d'autant plus vite qu'on s'éloigne de l'axe. Sur le cercle de rayon $R$, $r = R$ est constant, donc $\mathrm{d}r = 0$, et il ne reste que

$$\Gamma = \oint \Omega R^2\\,\mathrm{d}\theta = \Omega R^2\int\_0^{2\pi}\mathrm{d}\theta = 2\pi\Omega R^2,$$

le double de $\Omega$ fois l'aire du disque. Le calcul en cartésiennes donne le même résultat&nbsp;: sur $\vec r(t) = R(\cos t, \sin t)$, la vitesse est $\vec v = R(-\sin t, \cos t)$, $\vec w\cdot\vec v = \Omega R^2$, et $\int\_0^{2\pi}\Omega R^2\\,\mathrm{d}t = 2\pi\Omega R^2$.

Si la vitesse dérive d'un potentiel, $\vec w = \vec\nabla\varphi$, la 1-forme est $\mathrm{d}\varphi$, exacte, et la circulation est nulle sur toute boucle. Le lien général entre circulation et rotation du champ est le théorème de Stokes ([section sur la différentielle extérieure](#stokes)).

<details class="encadre">
<summary class="encadre-titre">Le théorème de circulation de Kelvin</summary>
<p>Dans un fluide parfait, la circulation autour d'un circuit fermé entraîné par l'écoulement ne change pas au cours du temps. Les formes en donnent une démonstration de quelques lignes. Soit $\gamma(t)$ un circuit formé de particules du fluide, et $\Gamma(t) = \oint_{\gamma(t)}\vec w\cdot\mathrm{d}\vec r$ sa circulation. Elle varie pour deux raisons.</p>
<p>D'abord, la vitesse de chaque particule change&nbsp;: cela donne $\oint\frac{D\vec w}{Dt}\cdot\mathrm{d}\vec r$ (la dérivée est celle qui suit la particule). Pour un fluide dont la pression ne dépend que de la densité, soumis à une force dérivant d'un potentiel $\Phi$, l'équation d'Euler s'écrit $\frac{D\vec w}{Dt} = -\vec\nabla(h + \Phi)$, où $h$ est l'enthalpie par unité de masse. Cette intégrale est donc celle de la forme exacte $-\mathrm{d}(h + \Phi)$ sur une boucle fermée&nbsp;: elle est nulle. Ensuite, le circuit se déforme&nbsp;: deux particules voisines s'écartent de leur différence de vitesse, donc $\mathrm{d}\vec r$ varie de $\mathrm{d}\vec w$. Cela donne $\oint\vec w\cdot\mathrm{d}\vec w = \oint\mathrm{d}\big(\tfrac12|\vec w|^2\big)$, encore une forme exacte, donc encore nulle.</p>
<p>Les deux termes sont des circulations de formes exactes, donc $\mathrm{d}\Gamma/\mathrm{d}t = 0$. Un écoulement dont la circulation est nulle sur tout circuit (un écoulement irrotationnel) le reste&nbsp;; et la circulation d'un tourbillon se conserve en le suivant. La viscosité, une pression qui dépend aussi de la température ou une force non conservative cassent l'exactitude des formes ci-dessus&nbsp;: c'est là que la vorticité peut se créer.</p>
</details>

## Aires orientées&nbsp;: les 2-formes {#aires}

Un mesureur à une flèche est une 1-forme. Pour une surface, la brique élémentaire est un petit parallélogramme construit sur deux petits déplacements $\vec u$ et $\vec v$, et l'on cherche un mesureur qui lui associe un nombre, par exemple son aire. Doubler $\vec u$ double l'aire, et accoler deux parallélogrammes de même côté $\vec v$ additionne leurs aires&nbsp;: le mesureur est **linéaire** en chaque vecteur. Échanger $\vec u$ et $\vec v$ retourne l'orientation&nbsp;: il est **antisymétrique** (deux vecteurs parallèles donnent une aire nulle). Un tel mesureur, linéaire en chaque vecteur et antisymétrique, est une **2-forme**.

<div class="bloc bloc-def">
<div class="bloc-titre">2-forme et produit extérieur</div>

Une **2-forme** est une application qui à deux vecteurs $(\vec u, \vec v)$ associe un nombre, linéaire en chacun et antisymétrique (échanger $\vec u$ et $\vec v$ change le signe). Le **produit extérieur** de deux 1-formes $\alpha$ et $\beta$ est la 2-forme

$$(\alpha\wedge\beta)(\vec u, \vec v) = \alpha(\vec u)\\,\beta(\vec v) - \alpha(\vec v)\\,\beta(\vec u).$$

Il est antisymétrique&nbsp;: $\beta\wedge\alpha = -\alpha\wedge\beta$, donc $\alpha\wedge\alpha = 0$.

</div>

Prenons $\alpha = \mathrm{d}x$ et $\beta = \mathrm{d}y$. La valeur de $\mathrm{d}x$ sur un vecteur est sa composante selon $x$ ($\mathrm{d}x(\vec u) = u\_x$, voir la section [Deux sortes de composantes](#composantes)), donc

$$\mathrm{d}x\wedge\mathrm{d}y\\,(\vec u, \vec v) = u\_x v\_y - u\_y v\_x.$$

C'est le déterminant des deux vecteurs, l'aire orientée du parallélogramme qu'ils engendrent. On dessine $\mathrm{d}x\wedge\mathrm{d}y$ comme un quadrillage de carreaux, vus «&nbsp;de face&nbsp;»&nbsp;: sa valeur sur $(\vec u, \vec v)$ est le nombre algébrique de carreaux balayés par le parallélogramme.

<div class="svg-container">
<svg id="f5-svg" viewBox="0 0 600 330" role="img" aria-label="Le plan quadrillé en carreaux unité, qui représentent la forme dx wedge dy. Deux flèches u et v partent de l'origine et délimitent un parallélogramme. La valeur de dx wedge dy sur le couple (u, v) est l'aire orientée de ce parallélogramme, comptée en carreaux ; elle change de signe quand on échange u et v. On peut déplacer les pointes des deux flèches." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="f5u" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="f5v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="f5-clip"><rect x="10" y="30" width="380" height="290"/></clipPath></defs>
<rect x="10" y="30" width="380" height="290" fill="#f8fafc" stroke="#e2e8f0"/>
<g clip-path="url(#f5-clip)"><path id="f5-grid" d="M0,0" fill="none" stroke="#970E53" stroke-width="1" stroke-opacity="0.35"/>
<polygon id="f5-par" points="0,0" fill="#006C65" fill-opacity="0.28" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/></g>
<path id="f5-arc" d="M0,0" fill="none" stroke="#334155" stroke-width="1.4"/>
<line id="f5-u" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#f5u)"/>
<line id="f5-v" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="2.8" marker-end="url(#f5v)"/>
<circle id="f5-hu" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/><circle id="f5-hv" cx="0" cy="0" r="15" fill="#C2770B" fill-opacity="0.001"/>
<circle cx="90" cy="270" r="3" fill="#334155"/>
<text id="f5-lu" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">u</text>
<text id="f5-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#C2770B" font-family="Georgia,'Times New Roman',serif">v</text>
<text x="18" y="24" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">carreaux : la forme d<tspan font-style="italic">x</tspan> ∧ d<tspan font-style="italic">y</tspan></text>
<text x="402" y="62" font-size="14.5" font-weight="bold" fill="#334155" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">x</tspan> ∧ d<tspan font-style="italic">y</tspan>(<tspan font-weight="bold" fill="#004D80">u</tspan>, <tspan font-weight="bold" fill="#C2770B">v</tspan>) =</text>
<text id="f5-n" x="402" y="96" font-size="26" font-weight="bold" fill="#006C65" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f5-s" x="402" y="118" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text x="402" y="160" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">aire orientée du parallélogramme,</text>
<text x="402" y="177" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">en nombre de carreaux</text>
<text id="f5-f" x="402" y="214" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f5-f2" x="402" y="234" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
<div style="margin:2px 0 6px;"><button type="button" class="fig-btn" id="f5-sw">Échanger u et v</button></div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f5-svg'); if (!svg) return;
  var OX = 90, OY = 270, U = 46, u = [2.3, 0.7], w = [0.6, 1.9];
  function X(x) { return OX + U * x; } function Y(y) { return OY - U * y; }
  var g = '', k; for (k = -2; k <= 8; k++) g += 'M' + X(k) + ',20V330'; for (k = -2; k <= 7; k++) g += 'M0,' + Y(k) + 'H400';
  F.$('f5-grid').setAttribute('d', g);
  function draw() {
    var area = u[0] * w[1] - u[1] * w[0], pos = area >= 0;
    F.put(F.$('f5-u'), { x1: X(0), y1: Y(0), x2: X(u[0]), y2: Y(u[1]) }); F.put(F.$('f5-v'), { x1: X(0), y1: Y(0), x2: X(w[0]), y2: Y(w[1]) });
    F.$('f5-par').setAttribute('points', [[0, 0], u, [u[0] + w[0], u[1] + w[1]], w].map(function (q) { return X(q[0]).toFixed(1) + ',' + Y(q[1]).toFixed(1); }).join(' '));
    F.$('f5-par').setAttribute('fill', pos ? '#006C65' : '#970E53');
    F.put(F.$('f5-hu'), { cx: X(u[0]), cy: Y(u[1]) }); F.put(F.$('f5-hv'), { cx: X(w[0]), cy: Y(w[1]) });
    F.put(F.$('f5-lu'), { x: X(u[0]) + 8, y: Y(u[1]) + 16 }); F.put(F.$('f5-lv'), { x: X(w[0]) - 18, y: Y(w[1]) - 6 });
    // petit arc du premier au second vecteur
    var a1 = Math.atan2(u[1], u[0]), a2 = Math.atan2(w[1], w[0]), rr = 26, d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    F.$('f5-arc').setAttribute('d', 'M' + (OX + rr * Math.cos(a1)).toFixed(1) + ',' + (OY - rr * Math.sin(a1)).toFixed(1) + 'A' + rr + ',' + rr + ' 0 0 ' + (d > 0 ? 0 : 1) + ' ' + (OX + rr * Math.cos(a1 + d)).toFixed(1) + ',' + (OY - rr * Math.sin(a1 + d)).toFixed(1));
    var n = F.$('f5-n'); n.textContent = (area >= 0 ? '+' : '') + F.fmt(area, 2); n.setAttribute('fill', pos ? '#006C65' : '#970E53');
    F.$('f5-s').textContent = pos ? 'sens direct (de u vers v, anti-horaire)' : 'sens indirect (de u vers v, horaire)';
    F.$('f5-f').textContent = 'u₁v₂ − u₂v₁ = ' + F.fmt(u[0], 1) + ' × ' + F.fmt(w[1], 1) + ' − ' + F.fmt(u[1], 1) + ' × ' + F.fmt(w[0], 1);
    F.$('f5-f2').textContent = '= ' + F.fmt(area, 2);
    svg.setAttribute('data-vals', [area, u[0], u[1], w[0], w[1]].map(function (x) { return x.toFixed(4); }).join(','));
  }
  F.drag(svg, F.$('f5-hu'), function (q) { u = [F.clamp((q.x - OX) / U, -1.8, 6.4), F.clamp((OY - q.y) / U, -0.8, 5.2)]; draw(); });
  F.drag(svg, F.$('f5-hv'), function (q) { w = [F.clamp((q.x - OX) / U, -1.8, 6.4), F.clamp((OY - q.y) / U, -0.8, 5.2)]; draw(); });
  F.$('f5-sw').addEventListener('click', function () { var t = u; u = w; w = t; draw(); });
  draw();
  F.responsive(svg, 402);
})();
</script>
<p class="legende">Le quadrillage représente $\mathrm{d}x\wedge\mathrm{d}y$. Le parallélogramme construit sur $\vec u$ et $\vec v$ balaie un certain nombre de carreaux, positif si l'on tourne de $\vec u$ vers $\vec v$ dans le sens direct, négatif sinon. Échanger les deux vecteurs change le signe.</p>

**Changer de variables.** Que devient $\mathrm{d}x\wedge\mathrm{d}y$ en coordonnées polaires&nbsp;? Écrivons d'abord $\mathrm{d}x$ et $\mathrm{d}y$ avec $\mathrm{d}r$ et $\mathrm{d}\theta$. Les fonctions $x = r\cos\theta$ et $y = r\sin\theta$ dépendent de $(r, \theta)$, et la formule $\mathrm{d}f = \frac{\partial f}{\partial q^i}\\,\mathrm{d}q^i$ de la section [Deux sortes de composantes](#composantes) donne

$$\mathrm{d}x = \frac{\partial x}{\partial r}\\,\mathrm{d}r + \frac{\partial x}{\partial\theta}\\,\mathrm{d}\theta = \cos\theta\\,\mathrm{d}r - r\sin\theta\\,\mathrm{d}\theta,\qquad \mathrm{d}y = \sin\theta\\,\mathrm{d}r + r\cos\theta\\,\mathrm{d}\theta.$$

Concrètement, une flèche de composantes polaires $(u\_r, u\_\theta) = \big(\mathrm{d}r(\vec u), \mathrm{d}\theta(\vec u)\big)$ a pour composantes cartésiennes $u\_x = \cos\theta\\,u\_r - r\sin\theta\\,u\_\theta$ et $u\_y = \sin\theta\\,u\_r + r\cos\theta\\,u\_\theta$. Le produit extérieur se développe par bilinéarité&nbsp;:

$$\mathrm{d}x\wedge\mathrm{d}y = \cos\theta\sin\theta\\,\mathrm{d}r\wedge\mathrm{d}r + r\cos^2\theta\\,\mathrm{d}r\wedge\mathrm{d}\theta - r\sin^2\theta\\,\mathrm{d}\theta\wedge\mathrm{d}r - r^2\sin\theta\cos\theta\\,\mathrm{d}\theta\wedge\mathrm{d}\theta.$$

Les termes $\mathrm{d}r\wedge\mathrm{d}r$ et $\mathrm{d}\theta\wedge\mathrm{d}\theta$ sont nuls, et $\mathrm{d}\theta\wedge\mathrm{d}r = -\mathrm{d}r\wedge\mathrm{d}\theta$, d'où le résultat suivant.

<div class="bloc bloc-prop">
<div class="bloc-titre">élément d'aire en polaires</div>

$$\mathrm{d}x\wedge\mathrm{d}y = r\left(\cos^2\theta + \sin^2\theta\right)\mathrm{d}r\wedge\mathrm{d}\theta = r\\,\mathrm{d}r\wedge\mathrm{d}\theta.$$

</div>

Le jacobien de la transformation, ici le facteur $r$, apparaît sans qu'on calcule de déterminant&nbsp;: l'antisymétrie du produit extérieur le fait d'elle-même.

<div class="svg-container">
<svg id="f6-svg" viewBox="0 0 600 345" role="img" aria-label="Deux plans côte à côte. À gauche, le plan des coordonnées (r, theta), où une petite case est un rectangle de côtés delta r et delta theta. À droite, le plan réel, où la même case est un morceau de couronne dont l'aire est à peu près r fois delta r fois delta theta : plus la case est loin de l'origine, plus elle est étirée. On peut modifier r, delta r et delta theta." style="width:100%;max-width:600px;height:auto;">
<rect x="14" y="46" width="170" height="262" fill="#f8fafc" stroke="#e2e8f0"/>
<g id="f6-lg"></g>
<rect id="f6-rect" x="0" y="0" width="0" height="0" fill="#970E53" fill-opacity="0.22" stroke="#970E53" stroke-width="1.6"/>
<text x="16" y="38" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">plan des coordonnées (<tspan font-style="italic">r</tspan>, <tspan font-style="italic">θ</tspan>)</text>
<text x="199" y="38" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">plan réel</text>
<g id="f6-rg"></g>
<path id="f6-cell" d="M0,0" fill="#970E53" fill-opacity="0.22" stroke="#970E53" stroke-width="1.6" stroke-linejoin="round"/>
<text id="f6-ldr" x="0" y="0" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif">Δ<tspan font-style="italic">r</tspan></text>
<text id="f6-ldt" x="0" y="0" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" text-anchor="middle"><tspan font-style="italic">r</tspan> Δ<tspan font-style="italic">θ</tspan></text>
<text x="440" y="70" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">aire du rectangle :</text>
<text id="f6-a1" x="440" y="92" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text x="440" y="130" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">aire de la case :</text>
<text id="f6-a2" x="440" y="152" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f6-a3" x="440" y="172" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text x="440" y="214" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">rapport des aires :</text>
<text id="f6-a4" x="440" y="238" font-size="19" font-weight="bold" fill="#006C65" font-family="Georgia,'Times New Roman',serif"></text>
<text x="440" y="258" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">(≈ <tspan font-style="italic">r</tspan> : le « jacobien »)</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span><i>r</i></span> <input type="range" class="fig-range" id="f6-r" min="0.6" max="3.6" step="0.05" value="2" style="width:110px;margin:0;"> <span id="f6-rv" style="min-width:2.4em;">2,00</span></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>Δ<i>r</i></span> <input type="range" class="fig-range" id="f6-dr" min="0.1" max="1" step="0.05" value="0.5" style="width:110px;margin:0;"> <span id="f6-drv" style="min-width:2.4em;">0,50</span></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>Δ<i>θ</i></span> <input type="range" class="fig-range" id="f6-dt" min="10" max="60" step="1" value="30" style="width:110px;margin:0;"> <span id="f6-dtv" style="min-width:2.4em;">30°</span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f6-svg'); if (!svg) return;
  var LX = 24, LY = 298, SR = 36, ST = 120;                  // plan (r, θ) : r horizontal, θ vertical
  var OX = 215, OY = 318, S = 44, TH0 = 0.45;                // plan réel
  var lg = F.$('f6-lg'), rg = F.$('f6-rg'), i;
  for (i = 0; i <= 4; i++) F.el('line', { x1: LX + SR * i, y1: 46, x2: LX + SR * i, y2: 308, stroke: '#e2e8f0' }, lg);
  for (i = 0; i <= 2; i++) F.el('line', { x1: 14, y1: LY - ST * i * 0.5, x2: 184, y2: LY - ST * i * 0.5, stroke: '#e2e8f0' }, lg);
  var tx = function (x, y, t, anc) { var e = F.el('text', { x: x, y: y, 'font-size': 12.5, 'font-style': 'italic', fill: '#64748b', 'font-family': "Georgia,'Times New Roman',serif", 'text-anchor': anc || 'start' }, lg); e.textContent = t; };
  tx(180, 324, 'r', 'end'); tx(20, 62, 'θ');
  for (i = 1; i <= 5; i++) F.el('path', { d: 'M' + (OX + S * i) + ',' + OY + 'A' + S * i + ',' + S * i + ' 0 0 0 ' + (OX + S * i * Math.cos(1.3)).toFixed(1) + ',' + (OY - S * i * Math.sin(1.3)).toFixed(1), fill: 'none', stroke: '#cbd5e1' }, rg);
  [0, 0.25, 0.5, 0.75, 1.0, 1.3].forEach(function (a) { F.el('line', { x1: OX, y1: OY, x2: OX + 5 * S * Math.cos(a), y2: OY - 5 * S * Math.sin(a), stroke: '#cbd5e1' }, rg); });
  function draw() {
    var r = +F.$('f6-r').value, dr = +F.$('f6-dr').value, dt = +F.$('f6-dt').value * Math.PI / 180;
    F.put(F.$('f6-rect'), { x: LX + SR * r, y: LY - ST * (TH0 + dt) * 1, width: SR * dr, height: ST * dt });
    // la case dans le plan réel
    var r2 = r + dr, a0 = TH0, a1 = TH0 + dt, P = function (rr, a) { return [OX + S * rr * Math.cos(a), OY - S * rr * Math.sin(a)]; };
    var A = P(r, a0), B = P(r2, a0), C = P(r2, a1), D = P(r, a1);
    F.$('f6-cell').setAttribute('d', 'M' + A[0].toFixed(1) + ',' + A[1].toFixed(1) + 'L' + B[0].toFixed(1) + ',' + B[1].toFixed(1) + 'A' + (S * r2).toFixed(1) + ',' + (S * r2).toFixed(1) + ' 0 0 0 ' + C[0].toFixed(1) + ',' + C[1].toFixed(1) + 'L' + D[0].toFixed(1) + ',' + D[1].toFixed(1) + 'A' + (S * r).toFixed(1) + ',' + (S * r).toFixed(1) + ' 0 0 1 ' + A[0].toFixed(1) + ',' + A[1].toFixed(1) + 'Z');
    var m = P(r + dr / 2, a0); F.put(F.$('f6-ldr'), { x: m[0] + 4, y: m[1] + 15 });
    var m2 = P(r + dr / 2, (a0 + a1) / 2); F.put(F.$('f6-ldt'), { x: m2[0] + 30 * Math.cos((a0 + a1) / 2), y: m2[1] - 30 * Math.sin((a0 + a1) / 2) });
    var a1v = dr * dt, aex = 0.5 * dt * (r2 * r2 - r * r), apx = r * dr * dt;
    F.$('f6-a1').textContent = 'Δr Δθ = ' + F.fmt(a1v, 3);
    F.$('f6-a2').textContent = 'r Δr Δθ = ' + F.fmt(apx, 3);
    F.$('f6-a3').textContent = 'valeur exacte : ' + F.fmt(aex, 3);
    F.$('f6-a4').textContent = '× ' + F.fmt(aex / a1v, 2);
    F.$('f6-rv').textContent = F.fmt(r); F.$('f6-drv').textContent = F.fmt(dr); F.$('f6-dtv').textContent = Math.round(dt * 180 / Math.PI) + '°';
    svg.setAttribute('data-vals', [a1v, apx, aex, aex / a1v].map(function (x) { return x.toFixed(5); }).join(','));
  }
  ['f6-r', 'f6-dr', 'f6-dt'].forEach(function (id) { F.$(id).addEventListener('input', draw); });
  draw();
  F.responsive(svg, 436);
})();
</script>
<p class="legende">À gauche, une petite case $\Delta r\times\Delta\theta$ dans le plan des coordonnées $(r, \theta)$. À droite, la même case dans le plan réel&nbsp;: elle est étirée d'un facteur voisin de $r$ (exactement $r + \Delta r/2$). C'est le facteur de $\mathrm{d}x\wedge\mathrm{d}y = r\,\mathrm{d}r\wedge\mathrm{d}\theta$.</p>

**Intégrer une 2-forme.** Comme pour une 1-forme le long d'un chemin, on découpe une surface $D$ en petits parallélogrammes, construits sur des couples de petits déplacements $(\vec u\_k, \vec v\_k)$, et l'on additionne les nombres $\omega(\vec u\_k, \vec v\_k)$.

<div class="bloc bloc-def">
<div class="bloc-titre">intégrale d'une 2-forme</div>

L'**intégrale** $\int\_D\omega$ est la limite des sommes $\sum\_k \omega(\vec u\_k, \vec v\_k)$. Pour $\omega = h\\,\mathrm{d}x\wedge\mathrm{d}y$, on retrouve l'intégrale double usuelle $\iint h\\,\mathrm{d}x\\,\mathrm{d}y$&nbsp;; en polaires, $\omega = h\\,r\\,\mathrm{d}r\wedge\mathrm{d}\theta$ donne $\iint h\\,r\\,\mathrm{d}r\\,\mathrm{d}\theta$, avec le facteur $r$ de la figure.

</div>

<details class="encadre">
<summary class="encadre-titre">L'intégrale de Gauss en un tour de polaires</summary>
<p>La fonction $e^{-x^2}$ n'a pas de primitive élémentaire, et pourtant $I = \int_{-\infty}^{+\infty}e^{-x^2}\mathrm{d}x$ se calcule en passant par son carré. Le produit de deux intégrales est l'intégrale de la 2-forme $e^{-x^2}e^{-y^2}\,\mathrm{d}x\wedge\mathrm{d}y$ sur le plan&nbsp;: $I^2 = \iint e^{-(x^2 + y^2)}\,\mathrm{d}x\wedge\mathrm{d}y$. En polaires, $\mathrm{d}x\wedge\mathrm{d}y = r\,\mathrm{d}r\wedge\mathrm{d}\theta$, d'où</p>
<p>$$I^2 = \int_0^{2\pi}\mathrm{d}\theta\int_0^{+\infty}e^{-r^2}\,r\,\mathrm{d}r = 2\pi\cdot\frac{1}{2} = \pi, \qquad I = \sqrt{\pi}.$$</p>
<p>Le facteur $r$ de l'élément d'aire rend la primitive élémentaire, puisque $r\,\mathrm{d}r = \frac{1}{2}\mathrm{d}(r^2)$&nbsp;; sans lui, $\int e^{-r^2}\mathrm{d}r$ ne l'est pas. Cette intégrale normalise la distribution de Maxwell–Boltzmann des vitesses, et la gaussienne de la mécanique quantique.</p>
</details>

En dimension $3$, une 2-forme mesure des petites surfaces orientées&nbsp;: on la dessine comme un champ de **tubes**, et sa valeur sur une surface est le nombre de tubes qu'elle traverse. C'est la notion de **flux**. Pour un fluide de vitesse $\vec w$, le débit à travers une surface est le nombre de tubes de courant qui la traversent&nbsp;; pour le champ magnétique, le flux (en webers) est le nombre de tubes de champ&nbsp;; et le courant $I$ d'un fil est le nombre de tubes de courant qui traversent sa section.

<details class="encadre">
<summary class="encadre-titre">Où est passé le produit vectoriel&nbsp;?</summary>
<p>Le produit vectoriel $\vec a\times\vec b$ de deux vecteurs est perpendiculaire aux deux, et sa norme est l'aire du parallélogramme qu'ils engendrent. Les formes disent d'où il sort. L'objet naturel est la 2-forme $a^\flat\wedge b^\flat$, où $a^\flat$ est la 1-forme associée à $\vec a$, définie par $a^\flat(\vec u) = \vec a\cdot\vec u$. Ses composantes sur $\mathrm{d}y\wedge\mathrm{d}z$, $\mathrm{d}z\wedge\mathrm{d}x$ et $\mathrm{d}x\wedge\mathrm{d}y$ sont $a_yb_z - a_zb_y$, $a_zb_x - a_xb_z$ et $a_xb_y - a_yb_x$&nbsp;: ce sont les trois composantes du produit vectoriel.</p>
<p>En dimension $3$, une 2-forme a trois composantes, comme un vecteur&nbsp;; la métrique et l'orientation (l'opérateur $\star$ de Hodge, utilisé ici avant d'être défini&nbsp;: sa définition est donnée plus bas, dans la section <a href='#maxwell'>sur l'électromagnétisme</a>) permettent de l'identifier à un vecteur, et c'est ce vecteur qu'on appelle $\vec a\times\vec b$. Cela explique deux faits familiers. Le produit vectoriel n'existe qu'en dimension $3$, parce qu'en dimension $n$ une 2-forme a $n(n-1)/2$ composantes, nombre qui vaut $n$ seulement pour $n = 3$. Et c'est un pseudovecteur&nbsp;: sa définition fait intervenir l'orientation, donc il change de sens quand on inverse l'orientation de l'espace (comme le champ magnétique, qui est une 2-forme).</p>
</details>

## La différentielle extérieure et le théorème de Stokes {#stokes}

Le théorème fondamental de l'analyse dit que l'intégrale de $\mathrm{d}f$ le long d'un chemin ne dépend que de son bord, ses deux extrémités&nbsp;: $\int\_\gamma\mathrm{d}f = f(B) - f(A)$. Existe-t-il un énoncé analogue pour une surface, dont le bord est une courbe fermée&nbsp;? Pour le formuler, il faut une opération qui prolonge $f \mapsto \mathrm{d}f$ aux formes de tout degré.

<div class="bloc bloc-def">
<div class="bloc-titre">différentielle extérieure</div>

La **différentielle extérieure** $\mathrm{d}$ prolonge $f \mapsto \mathrm{d}f$ aux formes de tout degré, en différentiant les coefficients. Sur une 1-forme $\alpha = P\\,\mathrm{d}x + Q\\,\mathrm{d}y$,

$$\mathrm{d}\alpha = \mathrm{d}P\wedge\mathrm{d}x + \mathrm{d}Q\wedge\mathrm{d}y = \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathrm{d}x\wedge\mathrm{d}y.$$

</div>

Les termes en $\mathrm{d}x\wedge\mathrm{d}x$ et $\mathrm{d}y\wedge\mathrm{d}y$ s'annulent par antisymétrie. On lit $\mathrm{d}\alpha$ comme la circulation de $\alpha$ par unité d'aire&nbsp;: c'est le rotationnel. Appliquée deux fois à une fonction, la différentielle extérieure donne zéro&nbsp;: avec $P = \partial f/\partial x$ et $Q = \partial f/\partial y$, le coefficient de $\mathrm{d}x\wedge\mathrm{d}y$ est $\frac{\partial^2f}{\partial x\\,\partial y} - \frac{\partial^2f}{\partial y\\,\partial x} = 0$ (théorème de Schwarz).

<div class="bloc bloc-prop">
<div class="bloc-titre">d∘d = 0</div>

Pour toute forme $\alpha$, $\mathrm{d}(\mathrm{d}\alpha) = 0$, ce que l'on écrit $\mathrm{d}\circ\mathrm{d} = 0$.

</div>

L'énoncé cherché est le suivant.

<div class="bloc bloc-theo">
<div class="bloc-titre">Stokes</div>

Pour une région $D$ de bord $\partial D$ (muni de l'orientation induite) et une forme $\alpha$ de degré adapté,

$$\int\_{\partial D}\alpha = \int\_D \mathrm{d}\alpha.$$

</div>

Pourquoi est-ce vrai&nbsp;? On découpe $D$ en petites cases. La circulation de $\alpha$ autour de chaque case vaut, au premier ordre, $\mathrm{d}\alpha$ fois l'aire de la case. Quand on additionne ces circulations, chaque arête intérieure est parcourue deux fois, en sens opposés, par les deux cases voisines&nbsp;: les contributions s'annulent, et il ne reste que le bord.

<div class="svg-container">
<svg id="f7-svg" viewBox="0 0 600 320" role="img" aria-label="Un rectangle découpé en petites cases. Chaque case est parcourue dans le sens direct par la forme alpha égale à x dy. Sur chaque arête intérieure, les deux cases voisines la parcourent en sens opposés, donc les contributions s'annulent : il ne reste que le bord du rectangle. La somme des circulations des cases est égale à la circulation sur le bord, et aussi à l'intégrale de d alpha, c'est-à-dire à l'aire. On peut changer la finesse du découpage." style="width:100%;max-width:600px;height:auto;">
<rect x="50" y="62" width="300" height="200" fill="#f8fafc" stroke="none"/>
<path id="f7-in" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1.1"/>
<path id="f7-inh" d="M0,0" fill="#94a3b8" stroke="none"/>
<path id="f7-bd" d="M0,0" fill="none" stroke="#004D80" stroke-width="2.6"/>
<path id="f7-bdh" d="M0,0" fill="#004D80" stroke="none"/>
<text x="50" y="52" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">α = <tspan font-style="italic">x</tspan> d<tspan font-style="italic">y</tspan>, sur le rectangle [0, 3] × [0, 2]</text>
<text x="372" y="84" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">chaque case : circulation de α</text>
<text id="f7-c" x="372" y="104" font-size="13" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text x="372" y="146" font-size="13" font-weight="bold" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif">somme sur toutes les cases :</text>
<text id="f7-s" x="372" y="172" font-size="20" font-weight="bold" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text x="372" y="208" font-size="13" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">circulation sur le bord :</text>
<text id="f7-b" x="372" y="234" font-size="20" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif"></text>
<text x="372" y="268" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">arêtes intérieures grises : deux flèches</text>
<text x="372" y="284" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">opposées, qui s'annulent</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>découpage</span> <input type="range" class="fig-range" id="f7-n" min="1" max="6" step="1" value="2" style="width:150px;margin:0;"> <span id="f7-nv" style="min-width:5.2em;"></span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f7-svg'); if (!svg) return;
  function X(x) { return 50 + 100 * x; } function Y(y) { return 262 - 100 * y; }
  function arrow(o, x1, y1, x2, y2, sz) {
    var X1 = X(x1), Y1 = Y(y1), X2 = X(x2), Y2 = Y(y2), a = Math.atan2(Y2 - Y1, X2 - X1), c = Math.cos(a), s = Math.sin(a);
    o.l += 'M' + X1.toFixed(1) + ',' + Y1.toFixed(1) + 'L' + X2.toFixed(1) + ',' + Y2.toFixed(1);
    o.h += 'M' + X2.toFixed(1) + ',' + Y2.toFixed(1) + 'L' + (X2 - sz * c + sz * 0.55 * s).toFixed(1) + ',' + (Y2 - sz * s - sz * 0.55 * c).toFixed(1) + 'L' + (X2 - sz * c - sz * 0.55 * s).toFixed(1) + ',' + (Y2 - sz * s + sz * 0.55 * c).toFixed(1) + 'Z';
  }
  function draw() {
    var n = +F.$('f7-n').value, nx = 3 * n, ny = 2 * n, h = 1 / n, e = 0.07 * h, inn = { l: '', h: '' }, bd = { l: '', h: '' }, sum = 0, edge = 0, sz = Math.max(2.6, Math.min(6, 40 * h * 0.28)), i, j;
    for (j = 0; j < ny; j++) for (i = 0; i < nx; i++) {
      var x0 = i * h, x1 = x0 + h, y0 = j * h, y1 = y0 + h;
      // α = x dy : seules les arêtes verticales contribuent ; les arêtes horizontales valent 0
      var circ = x1 * h - x0 * h; sum += circ;
      arrow(j === 0 ? bd : inn, x0 + e, y0 + e, x1 - e, y0 + e, sz);
      arrow(i === nx - 1 ? bd : inn, x1 - e, y0 + e, x1 - e, y1 - e, sz);
      arrow(j === ny - 1 ? bd : inn, x1 - e, y1 - e, x0 + e, y1 - e, sz);
      arrow(i === 0 ? bd : inn, x0 + e, y1 - e, x0 + e, y0 + e, sz);
      if (i === nx - 1) edge += x1 * h; if (i === 0) edge -= x0 * h;
    }
    F.$('f7-in').setAttribute('d', inn.l); F.$('f7-inh').setAttribute('d', inn.h); F.$('f7-bd').setAttribute('d', bd.l); F.$('f7-bdh').setAttribute('d', bd.h);
    F.$('f7-c').textContent = '= aire de la case = ' + F.fmt(h * h, n > 3 ? 3 : 2) + '  (' + nx * ny + ' cases)';
    F.$('f7-s').textContent = F.fmt(sum, 2); F.$('f7-b').textContent = F.fmt(edge, 2);
    F.$('f7-nv').textContent = nx + ' × ' + ny + ' cases';
    svg.setAttribute('data-vals', [sum, edge, nx * ny].join(','));
  }
  F.$('f7-n').addEventListener('input', draw); draw();
  F.responsive(svg, 372);
})();
</script>
<p class="legende">La 1-forme $\alpha = x\,\mathrm{d}y$ a pour différentielle extérieure $\mathrm{d}\alpha = \mathrm{d}x\wedge\mathrm{d}y$, dont l'intégrale sur le rectangle est son aire, $6$. Plus le découpage est fin, plus les arêtes intérieures (grises) se compensent par paires, et la somme sur les cases coïncide avec la circulation sur le bord (bleu).</p>

**Stokes en physique.** Pour un fluide, la circulation autour d'une petite boucle est le «&nbsp;tour&nbsp;» que ferait une petite roue à aubes posée dans l'écoulement, et la formule de Stokes dit que la circulation sur un grand circuit est la somme de ces tours sur la surface qu'il borde. Sous forme intégrale, des lois de l'électromagnétisme en sont des cas&nbsp;: Ampère, $\oint\vec B\cdot\mathrm{d}\vec r = \mu\_0 I$ (la circulation de $\vec B$ est le courant enlacé)&nbsp;; Faraday, $\oint\vec E\cdot\mathrm{d}\vec r = -\mathrm{d}\Phi\_B/\mathrm{d}t$ (la tension induite dans un circuit est l'opposé de la variation du flux à travers lui)&nbsp;; et, pour la divergence, Gauss, $\oint\vec E\cdot\mathrm{d}\vec S = Q/\varepsilon\_0$.

Ce seul énoncé contient des résultats qu'on apprend séparément&nbsp;: en dimension $1$, c'est le théorème fondamental de l'analyse, $\int\_a^b\mathrm{d}f = f(b) - f(a)$, rappelé plus haut&nbsp;; en dimension $2$, la formule de Green&nbsp;; en dimension $3$, le théorème du rotationnel (Stokes-Kelvin) et celui de la divergence (Ostrogradski). Le dictionnaire avec le calcul vectoriel est&nbsp;:

- $\mathrm{d}$ sur une fonction&nbsp;: le gradient&nbsp;;
- $\mathrm{d}$ sur une 1-forme&nbsp;: le rotationnel&nbsp;;
- $\mathrm{d}$ sur une 2-forme (en dimension $3$)&nbsp;: la divergence.

Et $\mathrm{d}\circ\mathrm{d} = 0$ résume à elle seule deux identités, $\vec\nabla\times(\vec\nabla f) = \vec 0$ et $\vec\nabla\cdot(\vec\nabla\times\vec A) = 0$. Pour traduire une forme en vecteur (le rotationnel, par exemple, est une 2-forme), il faut en plus la métrique et l'opérateur $\star$ de Hodge, défini dans la section sur l'[électromagnétisme](#maxwell).

<details class="encadre">
<summary class="encadre-titre">Une histoire de formes et de théorèmes</summary>
<p>Le théorème de Stokes n'est pas de Stokes. Gauss en démontre des cas particuliers vers 1813, et Ostrogradski en donne la forme générale pour la divergence dans les années 1820, devant l'Académie des sciences de Paris. Pour la version plane, que l'on attribue à Green, le mathématicien et historien Victor Katz relève qu'elle apparaît sans démonstration dans une note de Cauchy de 1846. Quant à la version pour la circulation, elle naît d'une lettre de lord Kelvin à Stokes en 1850&nbsp;: Stokes la pose en 1854 comme question à l'examen du prix Smith de Cambridge, et son nom reste attaché à la formule.</p>
<p>Les formes ont une histoire parallèle. Pfaff, en 1814-1815, étudie les expressions $a_i\,\mathrm{d}x^i$ et leurs formes normales&nbsp;: c'est le «&nbsp;problème de Pfaff&nbsp;». Grassmann introduit en 1844 l'algèbre extérieure, avec sa règle d'anticommutation. Élie Cartan, en 1899, reprend le problème de Pfaff et donne à la différentielle extérieure sa forme actuelle, qui ne dépend d'aucun choix de coordonnées. Les théorèmes de Gauss, Green et Stokes, appris séparément, deviennent alors une seule formule, $\int_{\partial D}\alpha = \int_D\mathrm{d}\alpha$.</p>
</details>

### Le rotationnel en coordonnées polaires

Soit $A = A\_x\\,\mathrm{d}x + A\_y\\,\mathrm{d}y = A\_r\\,\mathrm{d}r + A\_\theta\\,\mathrm{d}\theta$ une 1-forme (par exemple le travail d'une force). La différentielle extérieure se calcule de la même façon dans les deux systèmes&nbsp;:

$$\mathrm{d}A = \left(\frac{\partial A\_y}{\partial x} - \frac{\partial A\_x}{\partial y}\right)\mathrm{d}x\wedge\mathrm{d}y = \left(\frac{\partial A\_\theta}{\partial r} - \frac{\partial A\_r}{\partial\theta}\right)\mathrm{d}r\wedge\mathrm{d}\theta.$$

Aucune formule n'est à retenir. La formule des manuels, avec ses $1/r$, apparaît quand on exprime la même chose avec les composantes **physiques** $\hat A\_r = A\_r$ et $\hat A\_\theta = A\_\theta/r$ (composantes sur les vecteurs unitaires) et le rotationnel comme coefficient de l'élément d'aire $\mathrm{d}x\wedge\mathrm{d}y = r\\,\mathrm{d}r\wedge\mathrm{d}\theta$&nbsp;:

$$(\vec\nabla\times\vec A)\_z = \frac{1}{r}\left(\frac{\partial\left(r\hat A\_\theta\right)}{\partial r} - \frac{\partial\hat A\_r}{\partial\theta}\right).$$

Le $1/r$ est celui de l'élément d'aire, et le $r$ dans la dérivée vient de $A\_\theta = r\hat A\_\theta$.

### Fermée ne veut pas dire exacte

<div class="bloc bloc-def">
<div class="bloc-titre">forme fermée</div>

Une forme $\alpha$ est **fermée** si $\mathrm{d}\alpha = 0$. Toute forme exacte (différentielle d'une fonction) est fermée, puisque $\mathrm{d}\circ\mathrm{d} = 0$.

</div>

<div class="bloc bloc-theo">
<div class="bloc-titre">lemme de Poincaré</div>

Sur un domaine sans trou (un disque, un demi-plan, plus généralement un domaine étoilé), toute forme fermée est exacte.

</div>

La réciproque n'est vraie que localement. Le contre-exemple standard est la 1-forme $\mathrm{d}\theta = \dfrac{x\\,\mathrm{d}y - y\\,\mathrm{d}x}{x^2 + y^2}$ sur le plan privé de l'origine&nbsp;: un calcul direct donne $\mathrm{d}(\mathrm{d}\theta) = 0$, et pourtant sa circulation sur un cercle autour de l'origine vaut $2\pi$. Elle n'est pas la différentielle d'une fonction définie sur tout le plan privé de l'origine, car l'angle $\theta$ saute de $2\pi$ au bout d'un tour.

<div class="svg-container">
<svg id="f4-svg" viewBox="0 0 600 300" role="img" aria-label="Le plan privé de l'origine, avec les rayons qui sont les lignes de niveau de la forme d theta. Une boucle circulaire, qu'on peut déplacer, est parcourue dans le sens direct. Si elle entoure l'origine, elle franchit tous les rayons dans le même sens et la somme vaut 2 pi ; sinon elle les franchit autant de fois dans un sens que dans l'autre et la somme est nulle." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><clipPath id="f4-clip"><rect x="10" y="30" width="360" height="262"/></clipPath>
<marker id="f4a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<rect x="10" y="30" width="360" height="262" fill="#f8fafc" stroke="#e2e8f0"/>
<g id="f4-g" clip-path="url(#f4-clip)"></g>
<circle id="f4-loop" cx="0" cy="0" r="62" fill="none" stroke="#004D80" stroke-width="3" clip-path="url(#f4-clip)"/>
<path id="f4-arr" d="M0,0" fill="none" stroke="#004D80" stroke-width="3" marker-end="url(#f4a)"/>
<circle id="f4-h" cx="0" cy="0" r="18" fill="#004D80" fill-opacity="0.08" stroke="#004D80" stroke-opacity="0.5" stroke-dasharray="3 3"/>
<circle cx="190" cy="161" r="4" fill="#334155"/>
<text x="198" y="182" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">O (exclue)</text>
<text x="18" y="24" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">rayons : lignes de la forme d<tspan font-style="italic">θ</tspan></text>
<text x="388" y="62" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif">circulation de d<tspan font-style="italic">θ</tspan></text>
<text x="388" y="80" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif">le long de la boucle :</text>
<text id="f4-n" x="388" y="118" font-size="26" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f4-r" x="388" y="142" font-size="13" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f4-t" x="388" y="190" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f4-t2" x="388" y="207" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f4-t3" x="388" y="224" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f4-svg'); if (!svg) return;
  var OX = 190, OY = 161, R = 62, g = F.$('f4-g'), c = [250, 161], i;
  for (i = 0; i < 24; i++) F.el('line', { x1: OX, y1: OY, x2: OX + 400 * Math.cos(i * Math.PI / 12), y2: OY - 400 * Math.sin(i * Math.PI / 12), stroke: '#C2770B', 'stroke-width': 1, 'stroke-opacity': 0.55 }, g);
  function winding() { var N = 720, tot = 0, prev = null; for (var k = 0; k <= N; k++) { var a = 2 * Math.PI * k / N, x = c[0] + R * Math.cos(a) - OX, y = OY - (c[1] - R * Math.sin(a)); var th = Math.atan2(y, x); if (prev !== null) { var d = th - prev; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; tot += d; } prev = th; } return tot; }
  function draw() {
    F.put(F.$('f4-loop'), { cx: c[0], cy: c[1] }); F.put(F.$('f4-h'), { cx: c[0], cy: c[1] });
    F.$('f4-arr').setAttribute('d', 'M' + (c[0] + R * Math.cos(-0.12)).toFixed(1) + ',' + (c[1] - R * Math.sin(-0.12)).toFixed(1) + 'A' + R + ',' + R + ' 0 0 0 ' + (c[0] + R * Math.cos(0.5)).toFixed(1) + ',' + (c[1] - R * Math.sin(0.5)).toFixed(1));
    var w = winding(), inside = Math.abs(w) > 1;
    F.$('f4-n').textContent = inside ? '2π ≈ 6,28' : '0';
    F.$('f4-r').textContent = inside ? '= 24 rayons franchis dans le même sens' : '= autant de rayons dans chaque sens';
    F.$('f4-t').textContent = inside ? 'La boucle entoure O : dθ n\'est pas la' : 'La boucle n\'entoure pas O : la circulation';
    F.$('f4-t2').textContent = inside ? 'différentielle d\'une fonction du plan privé' : 'est nulle, comme pour une différentielle.';
    F.$('f4-t3').textContent = inside ? 'de O (θ saute de 2π au tour).' : '';
    F.$('f4-loop').setAttribute('stroke', inside ? '#970E53' : '#004D80'); F.$('f4-arr').setAttribute('stroke', inside ? '#970E53' : '#004D80');
    svg.setAttribute('data-vals', w.toFixed(4));
  }
  F.drag(svg, F.$('f4-h'), function (q) { c = [F.clamp(q.x, 10 + R + 2, 370 - R - 2), F.clamp(q.y, 30 + R + 2, 292 - R - 2)]; draw(); });
  draw();
  F.responsive(svg, 388);
})();
</script>
<p class="legende">Les rayons sont les lignes de $\mathrm{d}\theta$. Une boucle qui entoure l'origine franchit tous les rayons dans le même sens, et la circulation vaut $2\pi$&nbsp;; une boucle qui ne l'entoure pas les franchit autant de fois dans un sens que dans l'autre, et la circulation est nulle.</p>

**Le champ magnétique d'un fil.** Un fil rectiligne infini, parcouru par un courant $I$, crée un champ orthoradial $\vec B = \frac{\mu\_0 I}{2\pi r}\\,\hat e\_\theta$. La 1-forme associée, celle dont l'intégrale est la circulation $\oint\vec B\cdot\mathrm{d}\vec r$, se lit sur les vecteurs de base&nbsp;: $\vec B\cdot\vec e\_r = 0$ et $\vec B\cdot\vec e\_\theta = \frac{\mu\_0 I}{2\pi r}\\,r = \frac{\mu\_0 I}{2\pi}$, donc

$$\vec B^\flat = \frac{\mu\_0 I}{2\pi}\\,\mathrm{d}\theta.$$

Le $1/r$ du champ est celui des rayons de $\mathrm{d}\theta$ qui divergent&nbsp;; la 1-forme, elle, a un coefficient constant.

**Elle est fermée.** En cartésiennes, $\vec B^\flat = P\\,\mathrm{d}x + Q\\,\mathrm{d}y$ avec $P = -\frac{\mu\_0 I}{2\pi}\frac{y}{x^2 + y^2}$ et $Q = \frac{\mu\_0 I}{2\pi}\frac{x}{x^2 + y^2}$. Hors du fil, $\frac{\partial Q}{\partial x} = \frac{\mu\_0 I}{2\pi}\frac{y^2 - x^2}{(x^2 + y^2)^2} = \frac{\partial P}{\partial y}$, donc $\mathrm{d}\vec B^\flat = 0$&nbsp;: c'est $\vec\nabla\times\vec B = \vec 0$, puisqu'il n'y a pas de courant hors du fil.

**Elle n'est pas exacte.** La circulation sur un cercle de rayon $R$ autour du fil vaut

$$\oint\vec B\cdot\mathrm{d}\vec r = \frac{\mu\_0 I}{2\pi}\oint\mathrm{d}\theta = \mu\_0 I,$$

quel que soit $R$&nbsp;: c'est le théorème d'Ampère. Si $\vec B^\flat$ était la différentielle d'une fonction $\varphi$, sa circulation serait la différence de $\varphi$ entre l'arrivée et le départ de la boucle, donc nulle sur toute boucle fermée. Le candidat naturel est $\varphi = \frac{\mu\_0 I}{2\pi}\\,\theta$, mais il n'est pas défini sur tout le plan privé du fil&nbsp;: il augmente de $\mu\_0 I$ à chaque tour.

**Pourquoi fermée ne suffit pas.** Sur un domaine sans trou (un demi-plan par exemple), $\theta$ est une fonction ordinaire et $\vec B^\flat = \mathrm{d}\big(\frac{\mu\_0 I}{2\pi}\theta\big)$ est exacte&nbsp;: c'est le lemme de Poincaré. Le théorème de Stokes explique l'obstruction globale. Une boucle qui borde un disque $D$ contenu dans le domaine où $\mathrm{d}\vec B^\flat = 0$ a une circulation $\int\_D\mathrm{d}\vec B^\flat = 0$. Une boucle autour du fil ne borde aucun disque du plan privé du fil&nbsp;: le disque contiendrait le fil, là où le champ n'est pas défini (et où $\vec\nabla\times\vec B = \mu\_0\vec\jmath \neq \vec 0$). Une circulation non nulle détecte le trou, c'est-à-dire le courant enfermé.

<details class="encadre">
<summary class="encadre-titre">Aharonov–Bohm&nbsp;: un potentiel qu'on ne peut pas jeter</summary>
<p>Hors d'un solénoïde très long, de flux magnétique $\Phi$, le champ $\vec B$ est nul, mais pas le potentiel vecteur&nbsp;: on peut le prendre égal à $A = \frac{\Phi}{2\pi}\,\mathrm{d}\theta$, la 1-forme du fil, à un facteur près. Elle est fermée, puisque $\mathrm{d}A = B = 0$, et pourtant elle n'est pas exacte&nbsp;: $\oint A = \Phi \neq 0$ sur toute boucle qui entoure le solénoïde. Aucune fonction $\Lambda$ ne vérifie $A = \mathrm{d}\Lambda$ sur toute la région extérieure, si bien qu'on ne peut pas supprimer $A$ par un changement de jauge.</p>
<p>En mécanique quantique, la fonction d'onde d'une particule de charge $q$ qui suit un chemin $\gamma$ est déphasée de $\frac{q}{\hbar}\int_\gamma A$. Deux faisceaux qui contournent le solénoïde par ses deux côtés ont un déphasage relatif $\frac{q}{\hbar}\oint A = \frac{q\Phi}{\hbar}$, que la figure d'interférence révèle, alors que les particules ne traversent aucune région où $\vec B \neq \vec 0$. Prévu par Ehrenberg et Siday en 1949, puis par Aharonov et Bohm en 1959, l'effet a été observé par Chambers en 1960. Ce que la physique mesure est la circulation de $A$, c'est-à-dire la partie «&nbsp;fermée mais pas exacte&nbsp;» de $A$, et non $A$ lui-même.</p>
<div class="svg-container">
<svg id="fa-svg" viewBox="0 0 600 300" role="img" aria-label="Schéma de l'expérience d'interférence d'Aharonov et Bohm. Une source d'électrons éclaire un mur percé de deux fentes. Les deux faisceaux contournent par le haut et par le bas un solénoïde qui contient un flux magnétique, et se recombinent sur un écran où l'on observe des franges. Le champ magnétique est nul sur les trajets des électrons, mais le potentiel vecteur circule autour du solénoïde. Quand on fait varier le flux, les franges se déplacent, et la figure est identique quand le flux augmente d'un quantum h/q." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="fam" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<circle cx="40" cy="150" r="7" fill="#334155"/>
<text x="40" y="176" font-size="15" text-anchor="middle" fill="#475569" font-family="Georgia,'Times New Roman',serif">source</text>
<text x="40" y="190" font-size="15" text-anchor="middle" fill="#475569" font-family="Georgia,'Times New Roman',serif">d'électrons</text>
<line x1="47" y1="150" x2="106" y2="110" stroke="#94a3b8" stroke-width="1.2"/>
<line x1="47" y1="150" x2="106" y2="190" stroke="#94a3b8" stroke-width="1.2"/>
<rect x="105" y="30" width="7" height="75" fill="#475569"/>
<rect x="105" y="115" width="7" height="70" fill="#475569"/>
<rect x="105" y="195" width="7" height="75" fill="#475569"/>
<text x="108" y="22" font-size="15" text-anchor="middle" fill="#475569" font-family="Georgia,'Times New Roman',serif">deux fentes</text>
<path d="M112,110 Q260,40 520,150" fill="none" stroke="#004D80" stroke-width="2.2"/>
<path d="M112,190 Q260,260 520,150" fill="none" stroke="#C2770B" stroke-width="2.2"/>
<text x="330" y="68" font-size="15" fill="#004D80" font-style="italic" font-family="Georgia,'Times New Roman',serif">chemin 1</text>
<text x="330" y="244" font-size="15" fill="#C2770B" font-style="italic" font-family="Georgia,'Times New Roman',serif">chemin 2</text>
<circle cx="260" cy="150" r="24" fill="#FBE1DE" stroke="#970E53" stroke-width="1.8"/>
<text x="260" y="156" font-size="20" text-anchor="middle" fill="#970E53" font-weight="bold" font-family="Georgia,'Times New Roman',serif">B</text>
<path d="M299.5,135.6 A42,42 0 1 0 299.5,164.4" fill="none" stroke="#970E53" stroke-width="1.6" stroke-dasharray="3 3" marker-end="url(#fam)"/>
<text x="316" y="155" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif">A circule, B = 0 ici</text>
<line x1="520" y1="40" x2="520" y2="260" stroke="#334155" stroke-width="3"/>
<text x="520" y="278" font-size="15" text-anchor="middle" fill="#475569" font-family="Georgia,'Times New Roman',serif">écran</text>
<path id="fa-ref" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 3"/>
<path id="fa-cur" d="M0,0" fill="none" stroke="#970E53" stroke-width="2"/>
<text x="560" y="34" font-size="14" text-anchor="middle" fill="#475569" font-family="Georgia,'Times New Roman',serif">intensité</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>flux <i>&Phi;</i> / <i>&Phi;</i><sub>0</sub></span> <input type="range" class="fig-range" id="fa-f" min="0" max="2" step="0.05" value="0.5" style="width:140px;margin:0;"> <span id="fa-fv" style="min-width:2.6em;">0,50</span></label>
<span id="fa-dl-t">déphasage <i>qΦ/ħ</i> = <span id="fa-dl">3,14 rad</span></span>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fa-svg'); if (!svg) return;
  function curve(delta) { var d = '', y; for (y = 50; y <= 250; y += 2) { var I = (1 + Math.cos(2 * Math.PI * (y - 150) / 40 + delta)) / 2; d += (y > 50 ? 'L' : 'M') + (534 + 50 * I).toFixed(1) + ',' + y; } return d; }
  F.$('fa-ref').setAttribute('d', curve(0));
  function draw() { var f = parseFloat(F.$('fa-f').value), delta = 2 * Math.PI * f; F.$('fa-cur').setAttribute('d', curve(delta)); F.$('fa-fv').textContent = F.fmt(f, 2); F.$('fa-dl').textContent = F.fmt(delta, 2) + ' rad'; }
  F.$('fa-f').addEventListener('input', draw);
  draw();
})();
</script>
<p class="legende">Schéma de l'expérience. Le flux $\Phi$ du solénoïde est confiné&nbsp;: les électrons ne traversent jamais de région où $\vec B \neq \vec 0$, mais le potentiel vecteur circule autour. Les franges de l'écran se déplacent avec $\Phi$ (courbe rouge, la courbe grise en tirets est la figure sans flux), et la figure est identique chaque fois que $\Phi$ augmente de $\Phi_0 = h/q$.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Compter les trous avec des formes</summary>
<p>Le plan privé d'un point porte une forme fermée non exacte, $\mathrm{d}\theta$. Le plan privé de deux points en porte deux indépendantes, l'une pour chaque trou&nbsp;; un disque ou le plan entier n'en portent aucune. Le nombre de formes fermées non exactes indépendantes d'un domaine ne dépend donc que de sa topologie&nbsp;: c'est un nombre de «&nbsp;trous&nbsp;». C'est le point de départ de la cohomologie de de Rham, développée par Georges de Rham dans les années 1930.</p>
<p>Le théorème de Stokes montre pourquoi. Deux boucles qu'on peut déformer l'une dans l'autre sans franchir de trou bordent ensemble une surface où la forme est fermée, et donnent la même circulation&nbsp;: c'est pourquoi la circulation de $\mathrm{d}\theta$ vaut $2\pi$ sur tout cercle autour de l'origine, quel que soit son rayon, et même sur une boucle tordue. Une boucle qui entoure un trou ne peut pas être réduite à un point, et son intégrale mesure ce que le trou contient (le courant du fil, le flux du solénoïde). L'encadré suivant est le miroir de cette idée&nbsp;: les cycles, bords de rien, forment l'homologie, et les formes fermées modulo les formes exactes forment la cohomologie.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Wheeler et le bord d'un bord</summary>
<p>Dans <em>Gravitation</em> (1973), Misner, Thorne et Wheeler consacrent le chapitre 15 à une idée que Wheeler reprend dans <em>A Journey into Gravity and Spacetime</em> : l'équation d'Einstein $G = 8\pi T$ devient intelligible à partir d'un principe qui tient en une phrase, <em>le bord d'un bord est vide</em>, $\partial\partial = 0$. Il se vérifie en toute dimension :</p>
<ul>
<li>en dimension $1$, le bord d'un segment $[A, B]$ est formé de ses deux extrémités, $B - A$ ; un point n'a pas de bord ;</li>
<li>en dimension $2$, le bord d'un carré est formé de $4$ arêtes orientées. Chaque sommet est l'arrivée d'une arête et le départ de la suivante ;</li>
<li>en dimension $3$, le bord d'un cube est formé de $6$ faces. Chaque arête appartient à deux faces, qui la parcourent en sens opposés ;</li>
<li>en dimension $4$, le bord d'un hypercube est formé de $8$ cubes. Chacune des $24$ faces carrées appartient à deux cubes, avec des orientations opposées.</li>
</ul>
<p>Dans chaque cas, une « face du bord » est partagée par deux cellules voisines qui la parcourent en sens opposés, et les contributions se compensent. C'est le mécanisme de la preuve du théorème de Stokes, où les arêtes intérieures s'annulent par paires.</p>
<div class="svg-container" style="display:flex;flex-wrap:wrap;gap:8px 10px;justify-content:center;align-items:flex-start;">
<svg viewBox="0 0 220 250" role="img" aria-label="Un carré dont le bord est formé de quatre arêtes orientées dans le sens direct. À chaque sommet, une arête arrive et la suivante repart : le bord du bord est vide." style="flex:1 1 190px;max-width:235px;height:auto;">
<defs><marker id="fbm1" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker></defs>
<text x="110" y="16" font-size="11.5" fill="#334155" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">2 dimensions : un carré</text>
<rect x="62" y="50" width="90" height="90" fill="#E5F3E0" stroke="none"/>
<line x1="62" y1="140" x2="152" y2="140" stroke="#006C65" stroke-width="2.2"/>
<line x1="102.0" y1="140.0" x2="112.0" y2="140.0" stroke="#006C65" stroke-width="2.4" marker-end="url(#fbm1)"/>
<line x1="152" y1="140" x2="152" y2="50" stroke="#006C65" stroke-width="2.2"/>
<line x1="152.0" y1="100.0" x2="152.0" y2="90.0" stroke="#006C65" stroke-width="2.4" marker-end="url(#fbm1)"/>
<line x1="152" y1="50" x2="62" y2="50" stroke="#006C65" stroke-width="2.2"/>
<line x1="112.0" y1="50.0" x2="102.0" y2="50.0" stroke="#006C65" stroke-width="2.4" marker-end="url(#fbm1)"/>
<line x1="62" y1="50" x2="62" y2="140" stroke="#006C65" stroke-width="2.2"/>
<line x1="62.0" y1="90.0" x2="62.0" y2="100.0" stroke="#006C65" stroke-width="2.4" marker-end="url(#fbm1)"/>
<circle cx="62" cy="140" r="3.2" fill="#334155"/>
<text x="52" y="154" font-size="11" fill="#334155" text-anchor="start" font-weight="bold" font-style="italic" font-family="Georgia,'Times New Roman',serif">A</text>
<circle cx="152" cy="140" r="3.2" fill="#334155"/>
<text x="158" y="154" font-size="11" fill="#334155" text-anchor="start" font-weight="bold" font-style="italic" font-family="Georgia,'Times New Roman',serif">B</text>
<circle cx="152" cy="50" r="3.2" fill="#334155"/>
<text x="158" y="44" font-size="11" fill="#334155" text-anchor="start" font-weight="bold" font-style="italic" font-family="Georgia,'Times New Roman',serif">C</text>
<circle cx="62" cy="50" r="3.2" fill="#334155"/>
<text x="52" y="44" font-size="11" fill="#334155" text-anchor="start" font-weight="bold" font-style="italic" font-family="Georgia,'Times New Roman',serif">D</text>
<text x="110" y="192" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">Bord : 4 arêtes. À chaque sommet,</text>
<text x="110" y="206" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">une arête arrive, la suivante repart :</text>
<text x="110" y="220" font-size="10.5" fill="#970E53" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">(B−A) + (C−B) + (D−C) + (A−D) = 0</text>
<text x="110" y="234" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">le bord du bord est vide.</text>
</svg>
<svg viewBox="0 0 220 250" role="img" aria-label="Le patron d'un cube : six carrés, chacun parcouru dans le sens direct vu de l'extérieur. Chaque arête commune à deux carrés est parcourue en sens opposés par les deux carrés ; les arêtes du pourtour se recollent deux à deux en pliant le patron." style="flex:1 1 190px;max-width:235px;height:auto;">
<defs><marker id="fbm2" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker></defs>
<text x="110" y="16" font-size="11.5" fill="#334155" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">3 dimensions : un cube</text>
<rect x="56" y="34" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="70.0" y1="66.0" x2="80.0" y2="66.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="88.0" y1="58.0" x2="88.0" y2="48.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="80.0" y1="40.0" x2="70.0" y2="40.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="62.0" y1="48.0" x2="62.0" y2="58.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<rect x="18" y="72" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="32.0" y1="104.0" x2="42.0" y2="104.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="50.0" y1="96.0" x2="50.0" y2="86.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="42.0" y1="78.0" x2="32.0" y2="78.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="24.0" y1="86.0" x2="24.0" y2="96.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<rect x="56" y="72" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="70.0" y1="104.0" x2="80.0" y2="104.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="88.0" y1="96.0" x2="88.0" y2="86.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="80.0" y1="78.0" x2="70.0" y2="78.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="62.0" y1="86.0" x2="62.0" y2="96.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<rect x="94" y="72" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="108.0" y1="104.0" x2="118.0" y2="104.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="126.0" y1="96.0" x2="126.0" y2="86.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="118.0" y1="78.0" x2="108.0" y2="78.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="100.0" y1="86.0" x2="100.0" y2="96.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<rect x="132" y="72" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="146.0" y1="104.0" x2="156.0" y2="104.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="164.0" y1="96.0" x2="164.0" y2="86.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="156.0" y1="78.0" x2="146.0" y2="78.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="138.0" y1="86.0" x2="138.0" y2="96.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<rect x="56" y="110" width="38" height="38" fill="#E5F3E0" stroke="#334155" stroke-width="1"/>
<line x1="70.0" y1="142.0" x2="80.0" y2="142.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="88.0" y1="134.0" x2="88.0" y2="124.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="80.0" y1="116.0" x2="70.0" y2="116.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<line x1="62.0" y1="124.0" x2="62.0" y2="134.0" stroke="#006C65" stroke-width="1.6" marker-end="url(#fbm2)"/>
<text x="110" y="192" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">Bord : 6 faces. Une arête commune à</text>
<text x="110" y="206" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">deux faces est parcourue en sens opposés :</text>
<text x="110" y="220" font-size="10.5" fill="#970E53" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">les contributions se compensent.</text>
<text x="110" y="234" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">Le pourtour se recolle par paires.</text>
</svg>
<svg viewBox="0 0 220 250" role="img" aria-label="Un hypercube en dimension quatre, dessiné comme un cube dans un cube. Son bord est formé de huit cubes : le cube intérieur, le cube extérieur et six troncs de pyramide. Le cube intérieur (en vert) et le tronc au-dessus de lui (en orange) se touchent par une face carrée, parcourue en sens opposés par les deux cubes." style="flex:1 1 190px;max-width:235px;height:auto;">
<text x="110" y="16" font-size="11.5" fill="#334155" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">4 dimensions : un hypercube</text>
<polygon points="82.0,86.5 99.4,74.9 138.0,74.9 138.0,113.5 120.6,125.1 82.0,125.1" fill="#006C65" fill-opacity="0.28" stroke="none"/>
<polygon points="43.3,67.8 84.7,40.2 176.7,40.2 138.0,74.9 120.6,86.5 82.0,86.5" fill="#C2770B" fill-opacity="0.28" stroke="none"/>
<line x1="43.3" y1="159.8" x2="84.7" y2="132.2" stroke="#475569" stroke-width="1.3"/>
<line x1="43.3" y1="159.8" x2="43.3" y2="67.8" stroke="#475569" stroke-width="1.3"/>
<line x1="43.3" y1="159.8" x2="135.3" y2="159.8" stroke="#475569" stroke-width="1.3"/>
<line x1="84.7" y1="132.2" x2="84.7" y2="40.2" stroke="#475569" stroke-width="1.3"/>
<line x1="84.7" y1="132.2" x2="176.7" y2="132.2" stroke="#475569" stroke-width="1.3"/>
<line x1="43.3" y1="67.8" x2="84.7" y2="40.2" stroke="#475569" stroke-width="1.3"/>
<line x1="43.3" y1="67.8" x2="135.3" y2="67.8" stroke="#475569" stroke-width="1.3"/>
<line x1="84.7" y1="40.2" x2="176.7" y2="40.2" stroke="#475569" stroke-width="1.3"/>
<line x1="135.3" y1="159.8" x2="176.7" y2="132.2" stroke="#475569" stroke-width="1.3"/>
<line x1="135.3" y1="159.8" x2="135.3" y2="67.8" stroke="#475569" stroke-width="1.3"/>
<line x1="176.7" y1="132.2" x2="176.7" y2="40.2" stroke="#475569" stroke-width="1.3"/>
<line x1="135.3" y1="67.8" x2="176.7" y2="40.2" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="125.1" x2="99.4" y2="113.5" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="125.1" x2="82.0" y2="86.5" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="125.1" x2="120.6" y2="125.1" stroke="#475569" stroke-width="1.3"/>
<line x1="99.4" y1="113.5" x2="99.4" y2="74.9" stroke="#475569" stroke-width="1.3"/>
<line x1="99.4" y1="113.5" x2="138.0" y2="113.5" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="86.5" x2="99.4" y2="74.9" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="86.5" x2="120.6" y2="86.5" stroke="#475569" stroke-width="1.3"/>
<line x1="99.4" y1="74.9" x2="138.0" y2="74.9" stroke="#475569" stroke-width="1.3"/>
<line x1="120.6" y1="125.1" x2="138.0" y2="113.5" stroke="#475569" stroke-width="1.3"/>
<line x1="120.6" y1="125.1" x2="120.6" y2="86.5" stroke="#475569" stroke-width="1.3"/>
<line x1="138.0" y1="113.5" x2="138.0" y2="74.9" stroke="#475569" stroke-width="1.3"/>
<line x1="120.6" y1="86.5" x2="138.0" y2="74.9" stroke="#475569" stroke-width="1.3"/>
<line x1="82.0" y1="125.1" x2="43.3" y2="159.8" stroke="#94a3b8" stroke-width="1"/>
<line x1="99.4" y1="113.5" x2="84.7" y2="132.2" stroke="#94a3b8" stroke-width="1"/>
<line x1="82.0" y1="86.5" x2="43.3" y2="67.8" stroke="#94a3b8" stroke-width="1"/>
<line x1="99.4" y1="74.9" x2="84.7" y2="40.2" stroke="#94a3b8" stroke-width="1"/>
<line x1="120.6" y1="125.1" x2="135.3" y2="159.8" stroke="#94a3b8" stroke-width="1"/>
<line x1="138.0" y1="113.5" x2="176.7" y2="132.2" stroke="#94a3b8" stroke-width="1"/>
<line x1="120.6" y1="86.5" x2="135.3" y2="67.8" stroke="#94a3b8" stroke-width="1"/>
<line x1="138.0" y1="74.9" x2="176.7" y2="40.2" stroke="#94a3b8" stroke-width="1"/>
<polygon points="82.0,86.5 99.4,74.9 138.0,74.9 120.6,86.5" fill="none" stroke="#970E53" stroke-width="2.6"/>
<text x="110" y="192" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">Bord : 8 cubes (vert et orange :</text>
<text x="110" y="206" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">deux d'entre eux, qui se touchent</text>
<text x="110" y="220" font-size="10.5" fill="#970E53" text-anchor="middle" font-weight="bold" font-style="normal" font-family="Georgia,'Times New Roman',serif">par la face en rouge, vue en sens opposés).</text>
<text x="110" y="234" font-size="10.5" fill="#475569" text-anchor="middle" font-weight="normal" font-style="normal" font-family="Georgia,'Times New Roman',serif">24 faces, chacune dans 2 cubes.</text>
</svg>
</div>
<p>Ce principe est le miroir géométrique de $\mathrm{d}\circ\mathrm{d} = 0$. Le théorème de Stokes, appliqué deux fois, donne $\int_{\partial\partial D}\alpha = \int_{\partial D}\mathrm{d}\alpha = \int_D\mathrm{d}\mathrm{d}\alpha$. Comme $\partial\partial D$ est vide, le membre de gauche est nul pour toute région $D$, donc $\mathrm{d}\mathrm{d}\alpha = 0$.</p>
<p>Wheeler en tire la conservation de l'énergie-impulsion. Le tenseur d'Einstein $G$ est ce qu'il appelle le <em>moment de rotation</em>, une mesure de la courbure d'un petit cube d'espace-temps. L'équation d'Einstein dit que le moment de rotation associé à un cube à trois dimensions est $8\pi$ fois l'énergie-impulsion qu'il contient. Or le bord d'un bloc d'espace-temps à quatre dimensions est formé de huit de ces cubes, et, comme le bord d'un bord est vide, la somme de leurs moments de rotation est automatiquement nulle. C'est l'identité de Bianchi contractée, $\nabla_\mu G^{\mu\nu} = 0$. L'équation $G = 8\pi T$ entraîne alors $\nabla_\mu T^{\mu\nu} = 0$ : la conservation n'est pas une hypothèse ajoutée, c'est une identité géométrique, du même type que $B = \mathrm{d}A \Rightarrow \mathrm{d}B = 0$ en électromagnétisme.</p>
</details>

## Application&nbsp;: retour sur les moments {#hamilton}

La page [De Newton à Hamilton](/physique/meca/hamilton/) obtient les moments $p\_i$ en projetant la loi de Newton sur une base attachée aux coordonnées. Avec les formes, la même histoire se lit presque d'elle-même.

### La force est une 1-forme, la vitesse un vecteur

Dans des coordonnées $(q^i)$ quelconques, la vitesse est un **vecteur** $\vec v = \dot q^i\\,\vec e\_i$&nbsp;: ses composantes sont les $\dot q^i$. La force dérivant d'un potentiel $V$ est la **1-forme** $-\mathrm{d}V = -\frac{\partial V}{\partial q^i}\\,\mathrm{d}q^i$&nbsp;: ses composantes sont les $-\partial V/\partial q^i$, celles qu'on obtient en projetant sur la base attachée aux coordonnées. Aucune métrique n'est nécessaire pour l'écrire, et aucun facteur $1/r$&nbsp;: la force n'en contient pas.

### Le moment est une 1-forme

La masse, ou plus généralement la métrique $g$ de l'espace des configurations, transforme un vecteur en mesureur&nbsp;: c'est la même opération que pour le gradient, prise dans l'autre sens, de $\vec v$ vers $\vec v^\flat$ (l'**isomorphisme musical** qui «&nbsp;abaisse un indice&nbsp;»). Le moment est le résultat&nbsp;:

$$p = m\\,\vec v^\flat,\quad\text{c'est-à-dire}\quad p(\delta\vec v) = m\\,g(\vec v, \delta\vec v),\qquad p = m\\,g\_{ij}\\,\dot q^j\\,\mathrm{d}q^i,\quad p\_i = m\\,g\_{ij}\\,\dot q^j.$$

En coordonnées polaires, la métrique est $g = \mathrm{d}r^2 + r^2\\,\mathrm{d}\theta^2$, et

$$p = m\left(\dot r\\,\mathrm{d}r + r^2\dot\theta\\,\mathrm{d}\theta\right),$$

de sorte que $p\_r = m\dot r$ et $p\_\theta = mr^2\dot\theta$ se lisent sans calcul. Le $r^2$ de $p\_\theta$ vient de la métrique, qui convertit le vecteur en mesureur. La différence de dimension entre $p\_r$ et $p\_\theta$ vient de ce que $\mathrm{d}r$ mesure des longueurs et $\mathrm{d}\theta$ des radians.

Pourquoi un mesureur plutôt qu'un vecteur&nbsp;? Parce que le moment mesure comment l'énergie cinétique $T(\vec v) = \frac{1}{2}m\\,g(\vec v, \vec v)$ varie quand on change la vitesse&nbsp;:

$$p(\delta\vec v) = \frac{\mathrm{d}}{\mathrm{d}\varepsilon}\\,T(\vec v + \varepsilon\\,\delta\vec v)\Big|\_{\varepsilon=0} = m\\,g(\vec v, \delta\vec v).$$

C'est la dérivée d'une fonction par rapport à un vecteur, donc une 1-forme.

### L'espace des phases et sa forme symplectique

Un point de l'espace des phases est un couple $(q, p)$&nbsp;: une position, et une 1-forme en cette position. Sur cet espace, les 1-formes $\mathrm{d}q^i$ et $\mathrm{d}p\_i$ ont un sens, et leur produit extérieur définit une 2-forme.

<div class="bloc bloc-def">
<div class="bloc-titre">forme symplectique</div>

La **forme symplectique** de l'espace des phases est la 2-forme

$$\omega = \mathrm{d}q^i\wedge\mathrm{d}p\_i = \mathrm{d}q^1\wedge\mathrm{d}p\_1 + \dots + \mathrm{d}q^n\wedge\mathrm{d}p\_n.$$

</div>

Pour un degré de liberté, c'est l'aire orientée $u\_q v\_p - u\_p v\_q$ du plan $(q, p)$, l'«&nbsp;aire&nbsp;» de la page [De Newton à Hamilton](/physique/meca/hamilton/). Pour plusieurs degrés de liberté, c'est la somme des aires orientées des projections sur chaque plan $(q^i, p\_i)$. Elle est, au signe près, la différentielle d'une 1-forme canonique, la 1-forme de Liouville $\Theta = p\_i\\,\mathrm{d}q^i$&nbsp;: $\omega = -\mathrm{d}\Theta$ (les auteurs qui posent $\omega = \mathrm{d}p\wedge\mathrm{d}q$, comme Arnold, ont le signe opposé).

### Hamilton, Liouville et Noether, pas à pas

**Le problème.** L'énergie $H$ est une fonction de l'espace des phases, donc $\mathrm{d}H$ est un mesureur, une pile de lignes (les courbes de niveau de $H$). Le mouvement, lui, est un champ de vecteurs&nbsp;: en chaque point, la vitesse $(\dot q, \dot p)$. Comment passer de $\mathrm{d}H$ à un vecteur&nbsp;? Pour le gradient, il fallait une métrique. Ici, la 2-forme $\omega$ joue ce rôle&nbsp;: on cherche le vecteur $X\_H$, le **champ hamiltonien**, défini ainsi.

<div class="bloc bloc-def">
<div class="bloc-titre">champ hamiltonien</div>

Le **champ hamiltonien** de la fonction $H$ est le vecteur $X\_H$ tel que, pour tout vecteur $\vec Y$,

$$\omega(X\_H, \vec Y) = \mathrm{d}H(\vec Y).$$

On écrit aussi $\iota\_{X\_H}\omega = \mathrm{d}H$, où $\iota\_X\omega$ est la 1-forme $\vec Y \mapsto \omega(X, \vec Y)$ (le **produit intérieur**).

</div>

<div class="svg-container">
<svg id="f8-svg" viewBox="0 0 600 345" role="img" aria-label="L'espace des phases du pendule, avec les courbes de niveau de H. En un point P, le champ hamiltonien X_H est tangent à la courbe de niveau. Pour toute flèche Y partant de P, l'aire orientée du parallélogramme construit sur X_H et Y est égale au nombre dH(Y) de lignes de niveau de H franchies par Y : le champ X_H est défini par cette égalité. On peut déplacer P et la pointe de Y." style="width:100%;max-width:600px;height:auto;touch-action:none;">
<defs><marker id="f8x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<marker id="f8y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<clipPath id="f8-map"><rect x="12" y="40" width="372" height="290"/></clipPath><clipPath id="f8-clip"><circle id="f8-cc" cx="0" cy="0" r="90"/></clipPath></defs>
<rect x="12" y="40" width="372" height="290" fill="#f8fafc" stroke="#cbd5e1"/>
<path id="f8-cont" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1" clip-path="url(#f8-map)"/>
<g clip-path="url(#f8-map)"><circle id="f8-ring" cx="0" cy="0" r="90" fill="#fff" fill-opacity="0.5" stroke="#970E53" stroke-opacity="0.35" stroke-dasharray="3 3"/>
<g clip-path="url(#f8-clip)"><path id="f8-loc" d="M0,0" fill="none" stroke="#970E53" stroke-width="1.5" stroke-opacity="0.8"/></g>
<polygon id="f8-par" points="0,0" fill="#006C65" fill-opacity="0.28" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/></g>
<line id="f8-x" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="2.8" marker-end="url(#f8x)"/>
<line id="f8-y" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#f8y)"/>
<circle id="f8-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/><circle id="f8-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="f8-hy" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="f8-lx" x="0" y="0" font-size="14.5" fill="#C2770B" font-family="Georgia,'Times New Roman',serif"><tspan font-style="italic">X</tspan><tspan dy="4" font-size="10">H</tspan></text>
<text id="f8-ly" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">Y</text>
<text x="18" y="33" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">espace des phases du pendule : <tspan font-style="italic">q</tspan> → , <tspan font-style="italic">p</tspan> ↑ (courbes de niveau de <tspan font-style="italic">H</tspan>)</text>
<text x="396" y="62" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">aire orientée du parallélogramme</text>
<text x="396" y="80" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">(<tspan font-style="italic">X</tspan><tspan dy="4" font-size="10">H</tspan><tspan dy="-4">, </tspan><tspan font-weight="bold" fill="#004D80">Y</tspan>) = <tspan font-style="italic">ω</tspan>(<tspan font-style="italic">X</tspan><tspan dy="4" font-size="10">H</tspan><tspan dy="-4">, </tspan><tspan font-weight="bold" fill="#004D80">Y</tspan>)</text>
<text id="f8-a" x="396" y="110" font-size="23" font-weight="bold" fill="#006C65" font-family="Georgia,'Times New Roman',serif"></text>
<text x="396" y="156" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">variation de <tspan font-style="italic">H</tspan> le long de <tspan font-weight="bold" fill="#004D80">Y</tspan> :</text>
<text x="396" y="174" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">H</tspan>(<tspan font-weight="bold" fill="#004D80">Y</tspan>)</text>
<text id="f8-b" x="396" y="204" font-size="23" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text x="396" y="244" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">Ces deux nombres sont égaux, pour</text>
<text x="396" y="261" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">toute flèche <tspan font-weight="bold">Y</tspan> : cela définit <tspan font-style="italic">X</tspan><tspan dy="4" font-size="10">H</tspan><tspan dy="-4">.</tspan></text>
</svg>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f8-svg'); if (!svg) return;
  var OX = 198, OY = 186, S = 50, DH = 0.4, R = 90;
  function X(q) { return OX + S * q; } function Y(p) { return OY - S * p; }
  function H(q, p) { return p * p / 2 - Math.cos(q); }
  var lev = []; for (var l = -0.8; l < 3.1; l += 0.4) lev.push(Math.round(l * 10) / 10);
  F.$('f8-cont').setAttribute('d', F.contours(H, -3.7, 3.7, -2.8, 2.8, 150, 110, lev, X, Y));
  var P = [0.9, 0.85], Yv = [0.55, 0.9];
  function draw() {
    var q = P[0], p = P[1], Hq = Math.sin(q), Hp = p, xh = [Hp, -Hq], n = Math.hypot(Hq, Hp) || 1e-9;
    var a = xh[0] * Yv[1] - xh[1] * Yv[0], b = Hq * Yv[0] + Hp * Yv[1], px = X(q), py = Y(p);
    var nx = Hq / n, ny = -Hp / n, d = DH / n * S, d1 = '', k;
    for (k = -Math.ceil((R + 12) / d); k <= Math.ceil((R + 12) / d); k++) { var cx = px + k * d * nx, cy = py + k * d * ny, tx = -ny, ty = nx; d1 += 'M' + (cx - (R + 14) * tx).toFixed(1) + ',' + (cy - (R + 14) * ty).toFixed(1) + 'L' + (cx + (R + 14) * tx).toFixed(1) + ',' + (cy + (R + 14) * ty).toFixed(1); }
    F.$('f8-loc').setAttribute('d', d1);
    ['f8-cc', 'f8-ring'].forEach(function (id) { F.put(F.$(id), { cx: px, cy: py }); });
    F.put(F.$('f8-x'), { x1: px, y1: py, x2: X(q + xh[0]), y2: Y(p + xh[1]) });
    F.put(F.$('f8-y'), { x1: px, y1: py, x2: X(q + Yv[0]), y2: Y(p + Yv[1]) });
    F.$('f8-par').setAttribute('points', [[0, 0], xh, [xh[0] + Yv[0], xh[1] + Yv[1]], Yv].map(function (v) { return X(q + v[0]).toFixed(1) + ',' + Y(p + v[1]).toFixed(1); }).join(' '));
    F.$('f8-par').setAttribute('fill', a >= 0 ? '#006C65' : '#970E53');
    ['f8-p', 'f8-hp'].forEach(function (id) { F.put(F.$(id), { cx: px, cy: py }); }); F.put(F.$('f8-hy'), { cx: X(q + Yv[0]), cy: Y(p + Yv[1]) });
    F.put(F.$('f8-lx'), { x: X(q + xh[0]) + 7, y: Y(p + xh[1]) + 16 }); F.put(F.$('f8-ly'), { x: X(q + Yv[0]) + 8, y: Y(p + Yv[1]) - 8 });
    F.$('f8-a').textContent = (a >= 0 ? '+' : '') + F.fmt(a, 2); F.$('f8-b').textContent = (b >= 0 ? '+' : '') + F.fmt(b, 2);
    svg.setAttribute('data-vals', [a, b, q, p].map(function (x) { return x.toFixed(5); }).join(','));
  }
  F.drag(svg, F.$('f8-hp'), function (z) { P = [F.clamp((z.x - OX) / S, -3.4, 3.4), F.clamp((OY - z.y) / S, -2.3, 2.3)]; draw(); });
  F.drag(svg, F.$('f8-hy'), function (z) { var dx = (z.x - X(P[0])) / S, dy = -(z.y - Y(P[1])) / S, m = Math.hypot(dx, dy); if (m > 1.5) { dx *= 1.5 / m; dy *= 1.5 / m; } Yv = [dx, dy]; draw(); });
  draw();
  F.responsive(svg, 396);
})();
</script>
<p class="legende">Espace des phases du pendule, $H = \frac{p^2}{2} - \cos q$. Au point $P$, le champ hamiltonien $X_H$ (orange) est tangent à la courbe de niveau de $H$. Pour n'importe quel vecteur $\vec Y$ (bleu), l'aire orientée du parallélogramme construit sur $X_H$ et $\vec Y$ est égale à la valeur de $\mathrm{d}H$ sur $\vec Y$&nbsp;: c'est la définition de $X_H$.</p>

**Les équations de Hamilton.** Pour un degré de liberté, écrivons $X\_H = (X\_q, X\_p)$ et $\vec Y = (Y\_q, Y\_p)$. Alors $\omega(X\_H, \vec Y) = X\_q Y\_p - X\_p Y\_q$ et $\mathrm{d}H(\vec Y) = \frac{\partial H}{\partial q}Y\_q + \frac{\partial H}{\partial p}Y\_p$. L'égalité doit être vraie pour tout $\vec Y$, ce qui identifie les coefficients de $Y\_p$ et de $Y\_q$&nbsp;:

<div class="bloc bloc-prop">
<div class="bloc-titre">équations de Hamilton</div>

$$X\_q = \frac{\partial H}{\partial p}, \qquad X\_p = -\frac{\partial H}{\partial q},$$

c'est-à-dire $\dot q = \partial H/\partial p$ et $\dot p = -\partial H/\partial q$ le long du mouvement.

</div>

Le champ $X\_H$ est la «&nbsp;pente tournée d'un quart de tour&nbsp;» de $\mathrm{d}H$, la rotation étant celle que définit $\omega$, et le mouvement est le flot de $X\_H$. Trois propriétés s'en déduisent.

**$H$ est conservée.** $\mathrm{d}H(X\_H) = \omega(X\_H, X\_H) = 0$, par antisymétrie de $\omega$. Le point de l'espace des phases ne traverse aucune ligne de niveau de $H$&nbsp;: il suit la courbe de niveau, ce que la figure montre, puisque $X\_H$ y est tangent à la courbe de niveau. Pour le pendule de la figure, les courbes de niveau fermées sont les oscillations, et les courbes ouvertes les rotations complètes.

**Liouville&nbsp;: les aires sont conservées.** Pour un degré de liberté, la divergence du champ $X\_H = \big(\frac{\partial H}{\partial p}, -\frac{\partial H}{\partial q}\big)$ est $\frac{\partial^2 H}{\partial q\\,\partial p} - \frac{\partial^2 H}{\partial p\\,\partial q} = 0$&nbsp;: le fluide des points de l'espace des phases est incompressible, et l'aire d'une région que le flot transporte ne change pas. En général, la formule de Cartan donne la variation de $\omega$ le long du flot,

$$\mathcal{L}\_{X\_H}\omega = \mathrm{d}(\iota\_{X\_H}\omega) + \iota\_{X\_H}\mathrm{d}\omega = \mathrm{d}(\mathrm{d}H) + 0 = 0,$$

car $\mathrm{d}\omega = 0$ et $\mathrm{d}\circ\mathrm{d} = 0$.

<div class="bloc bloc-theo">
<div class="bloc-titre">Liouville</div>

Le flot hamiltonien conserve la forme symplectique $\omega$&nbsp;: il conserve les aires de l'espace des phases (pour un degré de liberté) et, plus généralement, ses volumes.

</div>

**Noether&nbsp;: symétrie et conservation.** Une autre fonction $G$ de l'espace des phases engendre un champ $X\_G$, donc un flot. La variation de $G$ le long du flot de $H$ est $\mathrm{d}G(X\_H) = \omega(X\_G, X\_H)$, notée $\\{G, H\\}$ (le **crochet de Poisson**, antisymétrique).

<div class="bloc bloc-theo">
<div class="bloc-titre">Noether, version hamiltonienne</div>

Pour deux fonctions $G$ et $H$ de l'espace des phases, $G$ est conservée le long du flot de $H$ si et seulement si $\\{G, H\\} = 0$, c'est-à-dire si $H$ est invariante le long du flot de $G$.

</div>

En effet, si $G$ est conservée, $\\{G, H\\} = 0$, ce qui signifie aussi $\mathrm{d}H(X\_G) = -\\{G, H\\} = 0$&nbsp;: $H$ est invariante le long du flot de $G$. Une quantité conservée engendre donc une symétrie de $H$, et réciproquement. Exemple&nbsp;: pour $G = p$, $X\_G = (1, 0)$, et son flot translate $q$ à $p$ fixé. $H$ est invariante par cette translation si $\partial H/\partial q = 0$, et c'est précisément la condition pour que $\dot p = -\partial H/\partial q$ soit nul&nbsp;: l'invariance par translation entraîne la conservation de la quantité de mouvement. (Pour le moment cinétique, le flot est une rotation.)

**Transformations canoniques.** Si $p\\,\mathrm{d}q - P\\,\mathrm{d}Q = \mathrm{d}F$ (fonction génératrice), la différentielle extérieure de cette égalité donne $\mathrm{d}p\wedge\mathrm{d}q = \mathrm{d}P\wedge\mathrm{d}Q$&nbsp;: la transformation conserve $\omega$.

<details class="encadre">
<summary class="encadre-titre">Liouville, Gibbs et l'entropie</summary>
<p>Le théorème de Liouville est le socle de la mécanique statistique. Un ensemble statistique est un nuage de points de l'espace des phases&nbsp;; en évoluant, le nuage change de forme mais pas de volume, puisque le flot hamiltonien conserve $\omega$. Toute densité qui ne dépend que de $H$, comme la densité canonique $\rho \propto e^{-H/kT}$, est constante le long du flot et se déplace avec un volume conservé&nbsp;: elle est donc stationnaire. Gibbs en fait en 1902 la base de sa mécanique statistique.</p>
<p>La même conservation interdit de comprimer le nuage. Effacer un bit, c'est ramener deux régions de l'espace des phases à une seule, de volume moitié&nbsp;; comme le volume total est conservé, l'environnement doit compenser en voyant son volume accessible au moins doubler, ce qui coûte au moins $kT\ln 2$ de chaleur. C'est le principe de Landauer, traité dans la page <a href='/physique/phistat/landauer/'>Information</a>.</p>
</details>

### Ce que les formes ne font pas disparaître

La métrique reste présente&nbsp;: le passage de $\dot q$ à $p$ la fait intervenir, et sa dépendance en la position est à l'origine de la force centrifuge, c'est-à-dire du terme $\frac{m}{2}\frac{\partial g\_{kl}}{\partial q^i}\dot q^k\dot q^l$ de la page de mécanique. Les formes ne l'effacent pas&nbsp;; elles montrent où il se range, dans $H = \frac{1}{2m}g^{ab}p\_ap\_b + V$, où $g^{ab}$ est la métrique sur les 1-formes.

## Application&nbsp;: la thermodynamique {#thermo}

Pour un système dont l'état est décrit par $(S, V)$, le premier et le second principes, pour une transformation réversible, s'écrivent comme une égalité entre 1-formes&nbsp;:

$$\mathrm{d}U = T\\,\mathrm{d}S - P\\,\mathrm{d}V.$$

La différentielle extérieure de cette égalité, avec $\mathrm{d}\circ\mathrm{d} = 0$, donne

$$0 = \mathrm{d}T\wedge\mathrm{d}S - \mathrm{d}P\wedge\mathrm{d}V, \qquad\text{soit}\qquad \mathrm{d}T\wedge\mathrm{d}S = \mathrm{d}P\wedge\mathrm{d}V.$$

En développant $\mathrm{d}T = \left(\frac{\partial T}{\partial S}\right)\_V\mathrm{d}S + \left(\frac{\partial T}{\partial V}\right)\_S\mathrm{d}V$ et de même $\mathrm{d}P$, l'identification des coefficients de $\mathrm{d}S\wedge\mathrm{d}V$ donne la relation de Maxwell.

<div class="bloc bloc-prop">
<div class="bloc-titre">relation de Maxwell</div>

Pour une transformation réversible, $\mathrm{d}T\wedge\mathrm{d}S = \mathrm{d}P\wedge\mathrm{d}V$, c'est-à-dire

$$\left(\frac{\partial T}{\partial V}\right)\_S = -\left(\frac{\partial P}{\partial S}\right)\_V.$$

</div>

Le contenu géométrique de l'égalité $\mathrm{d}T\wedge\mathrm{d}S = \mathrm{d}P\wedge\mathrm{d}V$ est plus parlant&nbsp;: les aires orientées sont **les mêmes dans le plan $(S, T)$ et dans le plan $(V, P)$**. Comme les plans $(q, p)$ de l'espace des phases, ces deux couples de variables conjuguées partagent la même «&nbsp;aire&nbsp;». L'aire d'un cycle est le travail, $\oint P\\,\mathrm{d}V = \oint T\\,\mathrm{d}S$, puisque $\oint\mathrm{d}U = 0$.

<div class="svg-container">
<svg id="f9-svg" viewBox="0 0 600 330" role="img" aria-label="Un cycle de Carnot d'un gaz parfait dessiné dans deux plans : le plan (V, P) à gauche, où il a une forme courbe, et le plan (S, T) à droite, où c'est un rectangle. L'aire du cycle, c'est-à-dire le travail fourni, est la même dans les deux plans. On peut modifier la température de la source froide et le rapport des volumes." style="width:100%;max-width:600px;height:auto;">
<line x1="50" y1="290" x2="290" y2="290" stroke="#94a3b8"/><line x1="50" y1="290" x2="50" y2="96" stroke="#94a3b8"/>
<line x1="350" y1="290" x2="590" y2="290" stroke="#94a3b8"/><line x1="350" y1="290" x2="350" y2="96" stroke="#94a3b8"/>
<polygon id="f9-a" points="0,0" fill="#004D80" fill-opacity="0.2" stroke="#004D80" stroke-width="2" stroke-linejoin="round"/>
<polygon id="f9-b" points="0,0" fill="#970E53" fill-opacity="0.2" stroke="#970E53" stroke-width="2" stroke-linejoin="round"/>
<g id="f9-l" font-size="13.5" font-family="Georgia,'Times New Roman',serif" font-style="italic" fill="#334155"></g>
<text x="170" y="84" text-anchor="middle" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">plan (<tspan font-style="italic">V</tspan>, <tspan font-style="italic">P</tspan>)</text>
<text x="470" y="84" text-anchor="middle" font-size="13.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif">plan (<tspan font-style="italic">S</tspan>, <tspan font-style="italic">T</tspan>)</text>
<text x="290" y="306" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">V</text><text x="44" y="102" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">P</text>
<text x="590" y="306" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">S</text><text x="344" y="102" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">T</text>
<text id="f9-ta" x="170" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f9-tb" x="470" y="40" text-anchor="middle" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text x="170" y="58" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">aire du cycle</text>
<text x="470" y="58" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">aire du cycle</text>
</svg>
<div style="display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span><i>T</i><sub>f</sub> / <i>T</i><sub>c</sub></span> <input type="range" class="fig-range" id="f9-t" min="0.4" max="0.9" step="0.01" value="0.5" style="width:120px;margin:0;"> <span id="f9-tv" style="min-width:2.4em;">0,50</span></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span><i>V</i><sub>B</sub> / <i>V</i><sub>A</sub></span> <input type="range" class="fig-range" id="f9-r" min="1.3" max="2.2" step="0.05" value="2" style="width:120px;margin:0;"> <span id="f9-rv" style="min-width:2.4em;">2,00</span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('f9-svg'); if (!svg) return;
  var G = 5 / 3, W = 232, Hh = 168, ORX = 50, ORY = 290, OSX = 350;
  function area(poly) { var s = 0, n = poly.length; for (var i = 0; i < n; i++) { var a = poly[i], b = poly[(i + 1) % n]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; }
  function draw() {
    var tf = +F.$('f9-t').value, r = +F.$('f9-r').value, c = Math.pow(1 / tf, 1 / (G - 1));   // T chaud = 1, V_A = 1, nR = 1
    var VA = 1, VB = r, VC = r * c, VD = c, pts = [], k, N = 40;
    // A->B isotherme chaud, B->C adiabatique, C->D isotherme froid, D->A adiabatique (P V^γ = cte)
    for (k = 0; k <= N; k++) { var v = VA * Math.pow(VB / VA, k / N); pts.push([v, 1 / v]); }
    var PB = 1 / VB; for (k = 1; k <= N; k++) { var v2 = VB * Math.pow(VC / VB, k / N); pts.push([v2, PB * Math.pow(VB / v2, G)]); }
    for (k = 1; k <= N; k++) { var v3 = VC * Math.pow(VD / VC, k / N); pts.push([v3, tf / v3]); }
    var PD = tf / VD; for (k = 1; k < N; k++) { var v4 = VD * Math.pow(VA / VD, k / N); pts.push([v4, PD * Math.pow(VD / v4, G)]); }
    var vmax = Math.max(VC, VD) * 1.06, sx = W / vmax, sy = Hh / 1.1;
    F.$('f9-a').setAttribute('points', pts.map(function (q) { return (ORX + sx * q[0]).toFixed(1) + ',' + (ORY - sy * q[1]).toFixed(1); }).join(' '));
    var dS = Math.log(r), smax = Math.log(2.2) * 1.15, ssx = W / smax, ssy = Hh / 1.1;
    var rect = [[0, 1], [dS, 1], [dS, tf], [0, tf]];
    F.$('f9-b').setAttribute('points', rect.map(function (q) { return (OSX + ssx * q[0]).toFixed(1) + ',' + (ORY - ssy * q[1]).toFixed(1); }).join(' '));
    var A1 = area(pts), A2 = area(rect);
    F.$('f9-ta').textContent = F.fmt(A1, 3); F.$('f9-tb').textContent = F.fmt(A2, 3);
    var lb = F.$('f9-l'); while (lb.firstChild) lb.removeChild(lb.firstChild);
    function lab(x, y, t, anc) { var e = F.el('text', { x: x, y: y, 'text-anchor': anc || 'middle' }, lb); e.textContent = t; }
    lab(ORX + sx * VA - 2, ORY - sy * 1 - 8, 'A'); lab(ORX + sx * VB + 8, ORY - sy / VB - 6, 'B'); lab(ORX + sx * VC + 8, ORY - sy * tf / VC - 6, 'C'); lab(ORX + sx * VD - 4, ORY - sy * tf / VD + 16, 'D');
    lab(OSX + ssx * 0 - 10, ORY - ssy * 1 + 4, 'A', 'end'); lab(OSX + ssx * dS + 12, ORY - ssy * 1 + 4, 'B', 'start'); lab(OSX + ssx * dS + 12, ORY - ssy * tf + 4, 'C', 'start'); lab(OSX - 10, ORY - ssy * tf + 4, 'D', 'end');
    F.$('f9-tv').textContent = F.fmt(tf); F.$('f9-rv').textContent = F.fmt(r);
    svg.setAttribute('data-vals', [A1, A2, (1 - tf) * dS].map(function (x) { return x.toFixed(5); }).join(','));
  }
  F.$('f9-t').addEventListener('input', draw); F.$('f9-r').addEventListener('input', draw);
  draw();
})();
</script>
<p class="legende">Un cycle de Carnot d'un gaz parfait monoatomique ($nR = 1$, $S = \frac{3}{2}\ln T + \ln V$, $\gamma = 5/3$, température de la source chaude prise égale à $1$) dans le plan $(V, P)$, où il a une forme courbe, et dans le plan $(S, T)$, où c'est un rectangle de côtés $\Delta S = \ln(V_B/V_A)$ et $1 - T_f/T_c$. Les deux aires, calculées séparément, sont égales (au travail $W = (T_c - T_f)\Delta S$). Les échelles diffèrent d'un plan à l'autre, pas l'aire.</p>

**La chaleur n'est pas une différentielle.** La 1-forme $\delta Q = T\\,\mathrm{d}S$ a pour différentielle extérieure $\mathrm{d}T\wedge\mathrm{d}S$, non nulle en général&nbsp;: elle n'est pas fermée, donc pas exacte, et la chaleur n'est pas une fonction d'état. En revanche $\delta Q/T = \mathrm{d}S$ est exacte&nbsp;: $1/T$ est un facteur intégrant.

<details class="encadre">
<summary class="encadre-titre">Carathéodory et le second principe</summary>
<p>En 1909, Constantin Carathéodory refonde la thermodynamique sans machine thermique ni notion première de chaleur. Il part du premier principe, qui définit sur l'espace des états la 1-forme de Pfaff $\delta Q = \mathrm{d}U + P\,\mathrm{d}V$, et d'un postulat d'inaccessibilité adiabatique&nbsp;: dans tout voisinage d'un état, il existe des états qu'aucune transformation adiabatique ne peut atteindre. Un théorème sur les formes de Pfaff traduit ce postulat en une propriété d'intégrabilité de $\delta Q_{\mathrm{rev}}$&nbsp;: la forme admet un facteur intégrant, d'où l'existence d'une température absolue $T$ et d'une entropie $S$ telles que $\delta Q_{\mathrm{rev}} = T\,\mathrm{d}S$.</p>
<p>Pour deux variables d'état, comme $(S, V)$ dans cette page, toute forme de Pfaff admet localement un facteur intégrant, et le résultat ne dit rien de plus. À partir de trois variables, c'est une condition (celle de Frobenius, $\alpha\wedge\mathrm{d}\alpha = 0$), que le postulat de Carathéodory impose. L'entropie apparaît alors comme la fonction dont les surfaces de niveau sont les états reliés par des transformations adiabatiques réversibles.</p>
</details>

## Application&nbsp;: l'électromagnétisme {#maxwell}

Le champ électrique est un mesureur de déplacements&nbsp;: le travail par unité de charge le long d'un chemin est $\int\_\gamma E$, avec la 1-forme $E = E\_x\\,\mathrm{d}x + E\_y\\,\mathrm{d}y + E\_z\\,\mathrm{d}z$. Le champ magnétique intervient par son **flux** à travers une surface orientée, c'est-à-dire par une grandeur qui prend deux vecteurs (les côtés d'un petit parallélogramme) et donne un nombre&nbsp;: c'est une 2-forme,

$$B = B\_x\\,\mathrm{d}y\wedge\mathrm{d}z + B\_y\\,\mathrm{d}z\wedge\mathrm{d}x + B\_z\\,\mathrm{d}x\wedge\mathrm{d}y.$$

La distinction entre vecteur et pseudovecteur devient celle entre 1-forme et 2-forme&nbsp;: un pseudovecteur est une 2-forme qu'on a identifiée à un vecteur grâce à l'orientation et à la métrique de l'espace.

### L'opérateur de Hodge

Les équations de Maxwell relient les champs à leurs sources, et pour les écrire il faut un outil de plus. Le champ électrique a deux visages&nbsp;: une 1-forme (la pile de surfaces équipotentielles, dont la circulation est une tension) et, pour la loi de Gauss, une 2-forme (les tubes de champ, dont le flux est une charge). Le passage de l'une à l'autre se fait avec la métrique de l'espace, par l'**opérateur de Hodge** $\star$, qui transforme une $k$-forme en une $(n-k)$-forme en dimension $n$.

Il se définit d'abord en dimension $3$, dans des axes orthonormés et pour une orientation donnée.

<div class="bloc bloc-def">
<div class="bloc-titre">opérateur de Hodge</div>

En dimension $3$,

$$\star\mathrm{d}x = \mathrm{d}y\wedge\mathrm{d}z,\qquad \star\mathrm{d}y = \mathrm{d}z\wedge\mathrm{d}x,\qquad \star\mathrm{d}z = \mathrm{d}x\wedge\mathrm{d}y,$$

et inversement $\star(\mathrm{d}y\wedge\mathrm{d}z) = \mathrm{d}x$, $\star(\mathrm{d}z\wedge\mathrm{d}x) = \mathrm{d}y$, $\star(\mathrm{d}x\wedge\mathrm{d}y) = \mathrm{d}z$, ainsi que $\star 1 = \mathrm{d}x\wedge\mathrm{d}y\wedge\mathrm{d}z$. Plus généralement, pour une métrique $g$, $\star$ est caractérisé par

$$\alpha\wedge\star\beta = g(\alpha, \beta)\\,\mathrm{vol},$$

où $g(\alpha, \beta)$ est le produit scalaire de $\alpha$ et $\beta$ induit par la métrique et $\mathrm{vol}$ la forme volume. Cette définition vaut en toute dimension, dans tout système de coordonnées, et en espace-temps avec la métrique de Minkowski.

</div>

Le sens est géométrique&nbsp;: les lignes de $\mathrm{d}x$ sont les plans $x = \text{cste}$, et la 2-forme $\star\mathrm{d}x = \mathrm{d}y\wedge\mathrm{d}z$ a pour tubes les droites parallèles à l'axe $x$. L'opérateur $\star$ remplace une pile de plans par les tubes qui leur sont perpendiculaires.

En dimension $2$, $\star\mathrm{d}x = \mathrm{d}y$ et $\star\mathrm{d}y = -\mathrm{d}x$&nbsp;: $\star$ fait tourner d'un quart de tour la pile de lignes. C'est la rotation que l'on rencontre dans le champ hamiltonien $X\_H$, la «&nbsp;pente tournée d'un quart de tour&nbsp;». En coordonnées polaires, $\star\mathrm{d}r = r\\,\mathrm{d}\theta$ et $\star\mathrm{d}\theta = -\mathrm{d}r/r$&nbsp;: $\star$ dépend de la métrique, qui fait de $\mathrm{d}r$ et de $r\\,\mathrm{d}\theta$ les deux 1-formes «&nbsp;de longueur $1$&nbsp;» (et non de $\mathrm{d}\theta$).

Voici ce qu'il permet de faire&nbsp;:

- le produit vectoriel, $\vec a\times\vec b = \big(\star(a^\flat\wedge b^\flat)\big)^\sharp$, où $\sharp$ est l'opération inverse de $\flat$ (elle associe à une 1-forme le vecteur correspondant)&nbsp;;
- le calcul vectoriel, $\vec\nabla f = (\mathrm{d}f)^\sharp$, $\vec\nabla\times\vec A = \big(\star\mathrm{d}A^\flat\big)^\sharp$, $\vec\nabla\cdot\vec A = \star\mathrm{d}\star A^\flat$ et $\Delta f = \star\mathrm{d}\star\mathrm{d}f$&nbsp;;
- la loi de Gauss, $\mathrm{d}\star E = \rho/\varepsilon\_0$ (avec $\rho$ la 3-forme densité de charge)&nbsp;: le flux de $E$ à travers une surface fermée, c'est-à-dire le nombre de tubes de champ qui la traversent, est la charge intérieure divisée par $\varepsilon\_0$.

La différentielle extérieure $\mathrm{d}$ n'utilise pas la métrique, alors que $\star$ l'utilise&nbsp;: c'est la raison pour laquelle $\mathrm{d}B = 0$ est indépendante de la géométrie, et pas la loi de Gauss.

### Les équations de Maxwell

Les équations de Maxwell s'écrivent alors sans aucune coordonnée.

<div class="bloc bloc-prop">
<div class="bloc-titre">équations de Maxwell</div>

Avec un potentiel $A$ (une 1-forme), $B = \mathrm{d}A$, donc $\mathrm{d}B = 0$. La loi de Faraday s'écrit $\mathrm{d}E = -\partial\_t B$, et la loi de Gauss $\mathrm{d}\star E = \rho/\varepsilon\_0$. En relativité, avec la 2-forme $F$ de l'espace-temps,

$$\mathrm{d}F = 0,\qquad \mathrm{d}\star F = J.$$

</div>

L'équation $\mathrm{d}B = 0$ est $\vec\nabla\cdot\vec B = 0$&nbsp;: le flux de $B$ à travers toute surface fermée est nul, les tubes de $B$ ne se terminent nulle part.

En relativité, $E$ et $B$ se fondent en une seule 2-forme $F$ de l'espace-temps, et les quatre équations de Maxwell se réduisent à deux&nbsp;: $\mathrm{d}F = 0$ (les deux équations sans source) et $\mathrm{d}\star F = J$ (celles avec sources, où $J$ est la 3-forme courant). L'opérateur $\star$ agit ici sur les 2-formes de l'espace-temps&nbsp;: $\star F$ est la 2-forme duale de $F$, où les rôles de $E$ et de $B$ sont échangés (au signe près). Il utilise la métrique, alors que $\mathrm{d}F = 0$ n'en utilise aucune&nbsp;: la moitié des équations de Maxwell est indépendante de la géométrie de l'espace-temps.


<details class="exercice">
<summary class="exercice-titre">Exercice&nbsp;: le flux d'une charge ponctuelle à travers une surface quelconque</summary>
<p><b>Énoncé.</b> Une charge $q$ est placée à l'origine et crée le champ $\vec E = \frac{q}{4\pi\varepsilon_0 r^2}\,\hat e_r$. Montrer que son flux à travers toute surface fermée $S$ qui entoure l'origine vaut $q/\varepsilon_0$.</p>
<p><b>Résolution traditionnelle.</b> Pour une sphère centrée en $O$, le champ est normal à la surface et uniforme, donc le flux vaut $E\cdot 4\pi r^2 = q/\varepsilon_0$. Pour une surface quelconque, on ne peut plus intégrer directement&nbsp;: il faut la paramétrer et écrire sa normale (pour un cube de côté $2a$, une face donne $$\frac{q}{4\pi\varepsilon_0}\iint\frac{a\,\mathrm dx\,\mathrm dy}{(x^2 + y^2 + a^2)^{3/2}},$$ une intégrale qui n'est pas immédiate). On passe donc par le théorème de la divergence. Il faut d'abord connaître la divergence en coordonnées sphériques, $\vec\nabla\cdot\vec E = \frac{1}{r^2}\frac{\partial (r^2 E_r)}{\partial r}$ (une formule qu'on retient ou qu'on redémontre), qui est nulle pour $r \neq 0$. Mais $\vec E$ n'est pas défini en $O$, et on ne peut pas appliquer le théorème à l'intérieur de $S$. On retire donc une petite boule centrée en $O$, on applique le théorème à la région comprise entre les deux surfaces (avec des normales bien orientées), et l'on conclut que le flux à travers $S$ est celui à travers la petite sphère.</p>
<p><b>Avec les formes.</b></p>
<ol>
<li>Le flux est $\int_S \star E^\flat$. Dans le repère orthonormé $(\mathrm dr,\ r\,\mathrm d\theta,\ r\sin\theta\,\mathrm d\varphi)$, $\star\mathrm dr = r\,\mathrm d\theta\wedge r\sin\theta\,\mathrm d\varphi$, donc
$$\star E^\flat = \frac{q}{4\pi\varepsilon_0 r^2}\,r^2\sin\theta\,\mathrm d\theta\wedge\mathrm d\varphi = \frac{q}{4\pi\varepsilon_0}\,\sin\theta\,\mathrm d\theta\wedge\mathrm d\varphi.$$
Le $r^2$ disparaît de lui-même.</li>
<li>Cette 2-forme est fermée. Écrivons-la $\omega = f(\theta)\,\mathrm d\theta\wedge\mathrm d\varphi$, avec $f(\theta) = \frac{q}{4\pi\varepsilon_0}\sin\theta$. Sa différentielle s'obtient en différentiant le coefficient&nbsp;:
$$\mathrm d\omega = \mathrm df\wedge\mathrm d\theta\wedge\mathrm d\varphi = \Big(\frac{\partial f}{\partial r}\,\mathrm dr + \frac{\partial f}{\partial\theta}\,\mathrm d\theta + \frac{\partial f}{\partial\varphi}\,\mathrm d\varphi\Big)\wedge\mathrm d\theta\wedge\mathrm d\varphi.$$
Le deuxième terme contient $\mathrm d\theta\wedge\mathrm d\theta = 0$ et le troisième $\mathrm d\varphi\wedge\mathrm d\varphi = 0$ (antisymétrie). Reste le terme en $\mathrm dr$, dont le coefficient $\partial f/\partial r$ est nul, puisque $f$ ne dépend que de $\theta$. Donc $\mathrm d\omega = 0$ hors de l'origine, sans aucune formule de divergence.</li>
<li>Soit $S_\varepsilon$ une petite sphère centrée en $O$ et $D$ la région comprise entre $S_\varepsilon$ et $S$. Le théorème de Stokes donne $\int_S\star E^\flat - \int_{S_\varepsilon}\star E^\flat = \int_D\mathrm d\star E^\flat = 0$.</li>
<li>Sur $S_\varepsilon$, $$\int_{S_\varepsilon}\star E^\flat = \frac{q}{4\pi\varepsilon_0}\int_0^{\pi}\sin\theta\,\mathrm d\theta\int_0^{2\pi}\mathrm d\varphi = \frac{q}{\varepsilon_0}.$$ Donc le flux à travers $S$ vaut $q/\varepsilon_0$.</li>
</ol>
<div class="svg-container">
<svg viewBox="0 0 420 320" role="img" aria-label="Une charge au centre, entourée d'une petite sphère et d'une surface fermée quelconque. Un même cône d'angle solide découpe un morceau de chaque surface : le même nombre de tubes de champ les traverse, donc le flux est le même." style="width:100%;max-width:420px;height:auto;">
<path d="M325.5,160.0L328.6,153.8L331.2,147.3L333.1,140.5L334.2,133.6L334.5,126.6L334.0,119.7L332.5,113.0L330.2,106.5L326.9,100.4L322.8,94.9L318.0,89.9L312.4,85.6L306.2,82.1L299.6,79.3L292.7,77.3L285.5,76.1L278.3,75.7L271.1,75.9L264.1,76.7L257.4,77.9L251.0,79.6L245.0,81.5L239.4,83.5L234.2,85.4L229.5,87.2L225.1,88.8L221.1,89.9L217.3,90.7L213.6,90.9L210.0,90.5L206.3,89.7L202.5,88.3L198.3,86.4L193.9,84.2L189.0,81.7L183.7,79.0L177.9,76.3L171.6,73.7L164.8,71.3L157.6,69.3L150.2,67.8L142.4,67.0L134.6,66.9L126.8,67.6L119.2,69.2L111.9,71.6L105.0,75.0L98.8,79.2L93.2,84.2L88.5,89.9L84.8,96.2L82.0,103.0L80.3,110.2L79.6,117.6L79.9,125.1L81.2,132.6L83.4,140.0L86.5,147.0L90.2,153.7L94.5,160.0L99.2,165.8L104.2,171.1L109.4,175.9L114.5,180.3L119.6,184.2L124.5,187.8L129.1,191.1L133.3,194.2L137.1,197.2L140.5,200.1L143.5,203.2L146.1,206.4L148.4,209.9L150.4,213.6L152.3,217.7L154.1,222.0L156.0,226.7L158.0,231.6L160.1,236.8L162.6,242.1L165.5,247.4L168.8,252.6L172.5,257.7L176.7,262.5L181.4,266.9L186.5,270.8L191.9,274.1L197.7,276.6L203.8,278.5L210.0,279.5L216.3,279.7L222.5,279.0L228.6,277.6L234.5,275.4L240.1,272.5L245.4,268.9L250.3,264.9L254.7,260.4L258.7,255.7L262.4,250.7L265.6,245.6L268.5,240.5L271.1,235.5L273.5,230.5L275.8,225.8L278.1,221.3L280.4,217.0L282.8,212.9L285.4,208.9L288.2,205.1L291.2,201.4L294.5,197.6L298.1,193.8L301.9,189.9L305.9,185.7L310.0,181.3L314.1,176.5L318.2,171.4L322.0,165.9L325.5,160.0Z" fill="#FDF6EC" stroke="#C2770B" stroke-width="2.2"/>
<circle cx="210" cy="160" r="42" fill="#EEF4FA" stroke="#004D80" stroke-width="2.2"/>
<polygon points="333.1,115.2 332.1,111.6 330.9,108.2 329.4,104.8 327.6,101.6 325.7,98.5 323.4,95.6 321.0,92.8 318.3,90.2 315.4,87.8 312.4,85.6 309.2,83.6 305.8,81.9 302.3,80.3 298.7,79.0 295.0,77.9 291.3,77.0 287.4,76.4 283.6,75.9 279.7,75.7 275.9,75.7 235.9,126.9 236.8,127.6 237.7,128.4 238.5,129.2 239.4,130.0 240.2,130.8 241.0,131.7 241.8,132.6 242.5,133.5 243.3,134.4 244.0,135.3 244.7,136.3 245.3,137.2 245.9,138.2 246.5,139.3 247.1,140.3 247.6,141.3 248.1,142.4 248.6,143.5 249.1,144.5 249.5,145.6" fill="#970E53" fill-opacity="0.22" stroke="none"/>
<line x1="210" y1="160" x2="340.6" y2="112.5" stroke="#970E53" stroke-width="1.4" stroke-dasharray="4 3"/>
<line x1="210" y1="160" x2="280.8" y2="69.3" stroke="#970E53" stroke-width="1.4" stroke-dasharray="4 3"/>
<circle cx="210" cy="160" r="5" fill="#334155"/>
<text x="200.0" y="180.0" font-size="15" fill="#334155" text-anchor="end" font-style="italic" font-weight="normal" font-family="Georgia,'Times New Roman',serif">q</text>
<text x="174.6" y="199.4" font-size="16" fill="#004D80" text-anchor="end" font-style="normal" font-weight="normal" font-family="Georgia,'Times New Roman',serif"><tspan font-style="italic">S</tspan><tspan font-size="10" dy="4">&#949;</tspan></text>
<text x="284.0" y="238.6" font-size="16" fill="#C2770B" text-anchor="start" font-style="normal" font-weight="normal" font-family="Georgia,'Times New Roman',serif"><tspan font-style="italic">S</tspan></text>
<text x="333.4" y="66.3" font-size="13" fill="#970E53" text-anchor="middle" font-style="italic" font-weight="normal" font-family="Georgia,'Times New Roman',serif">même angle solide</text>
</svg>
</div>
<p class="legende">Un même cône d'angle solide découpe un morceau de la petite sphère et un morceau de la surface $S$&nbsp;: les tubes de champ qui traversent l'un traversent l'autre, et les flux sont égaux.</p>
<p><b>Ce que le formalisme apporte.</b></p>
<ul>
<li>Le calcul n'utilise que trois outils du formalisme, $\star$ dans un repère orthonormé, $\mathrm d$ et le théorème de Stokes. Aucune formule de divergence à retenir, et l'argument de la boule retirée devient une simple application de Stokes.</li>
<li>La 2-forme $\sin\theta\,\mathrm d\theta\wedge\mathrm d\varphi$ est l'élément d'angle solide. Le flux à travers une surface ne dépend donc que de l'angle solide sous lequel la charge la voit&nbsp;: les six faces d'un cube centré sur la charge voient chacune un sixième de $4\pi$, et portent chacune le flux $q/(6\varepsilon_0)$, sans aucune intégrale.</li>
<li>La structure est celle de $\mathrm d\theta$ pour le fil&nbsp;: la forme $\star E^\flat$ est fermée mais pas exacte sur l'espace privé de l'origine (si $\star E^\flat = \mathrm d\beta$, Stokes donnerait un flux nul sur la sphère). La charge joue le rôle du trou. En dimension $2$, pour un fil chargé, $\star E^\flat = \frac{\lambda}{2\pi\varepsilon_0}\mathrm d\theta$ est exactement la forme du champ magnétique du fil.</li>
<li>Le même calcul démontre le théorème de Gauss pour la gravitation de Newton, dont le champ varie aussi en $1/r^2$.</li>
</ul>
</details>

<details class="exercice">
<summary class="exercice-titre">Exercice&nbsp;: potentiel, jauge et conservation de la charge, en tenseurs et en formes</summary>
<p><b>Énoncé.</b> Le champ électromagnétique dérive d'un potentiel $A$. Montrer (1) que les équations de Maxwell sans source sont satisfaites automatiquement, (2) que le champ est inchangé par un changement de jauge, (3) que la charge est conservée. On compare le formalisme tensoriel (indices d'espace-temps $\mu, \nu, \lambda$) et celui des formes.</p>
<p><b>1. Équations sans source.</b></p>
<ul>
<li><em>Tenseurs.</em> $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$, et il faut montrer que $\partial_\lambda F_{\mu\nu} + \partial_\mu F_{\nu\lambda} + \partial_\nu F_{\lambda\mu} = 0$. En développant, on obtient six termes, $\partial_\lambda\partial_\mu A_\nu - \partial_\lambda\partial_\nu A_\mu + \partial_\mu\partial_\nu A_\lambda - \partial_\mu\partial_\lambda A_\nu + \partial_\nu\partial_\lambda A_\mu - \partial_\nu\partial_\mu A_\lambda$, qui s'annulent deux à deux parce que les dérivées secondes commutent.</li>
<li><em>Formes.</em> $F = \mathrm dA$, donc $\mathrm dF = \mathrm d\mathrm dA = 0$.</li>
</ul>
<p><b>2. Invariance de jauge.</b></p>
<ul>
<li><em>Tenseurs.</em> Avec $A_\mu \to A_\mu + \partial_\mu\chi$, $F_{\mu\nu}$ varie de $\partial_\mu\partial_\nu\chi - \partial_\nu\partial_\mu\chi = 0$.</li>
<li><em>Formes.</em> Avec $A \to A + \mathrm d\chi$, $F$ varie de $\mathrm d\mathrm d\chi = 0$.</li>
</ul>
<p><b>3. Conservation de la charge.</b></p>
<ul>
<li><em>Tenseurs.</em> Les équations avec sources s'écrivent $\partial_\mu F^{\mu\nu} = J^\nu$. Appliquons $\partial_\nu$&nbsp;: $\partial_\nu J^\nu = \partial_\nu\partial_\mu F^{\mu\nu}$. Cette quantité change de signe quand on échange les deux indices muets, puisque $F^{\nu\mu} = -F^{\mu\nu}$, alors que $\partial_\nu\partial_\mu$ est symétrique&nbsp;: elle est égale à son opposé, donc nulle. Ainsi $\partial_\nu J^\nu = 0$.</li>
<li><em>Formes.</em> $\mathrm d\star F = J$, donc $\mathrm dJ = \mathrm d\mathrm d\star F = 0$. En composantes, avec $J = \rho\,\mathrm dx\wedge\mathrm dy\wedge\mathrm dz - j_x\,\mathrm dt\wedge\mathrm dy\wedge\mathrm dz - j_y\,\mathrm dt\wedge\mathrm dz\wedge\mathrm dx - j_z\,\mathrm dt\wedge\mathrm dx\wedge\mathrm dy$, on trouve
$$\mathrm dJ = \Big(\frac{\partial\rho}{\partial t} + \vec\nabla\cdot\vec\jmath\Big)\,\mathrm dt\wedge\mathrm dx\wedge\mathrm dy\wedge\mathrm dz,$$
c'est-à-dire l'équation de continuité.</li>
</ul>
<p><b>4. Espace-temps courbe.</b></p>
<ul>
<li><em>Tenseurs.</em> Les dérivées partielles deviennent des dérivées covariantes $\nabla_\mu$, avec des symboles de Christoffel. Il faut montrer que ceux-ci disparaissent de l'équation sans source (ils sont symétriques en leurs indices bas, donc s'annulent dans l'antisymétrisation), et que $\nabla_\mu F^{\mu\nu} = \frac{1}{\sqrt{-g}}\partial_\mu\big(\sqrt{-g}\,F^{\mu\nu}\big)$ pour obtenir la conservation de la charge.</li>
<li><em>Formes.</em> Rien ne change&nbsp;: $\mathrm dF = 0$, $\mathrm d\star F = J$ et $\mathrm dJ = 0$ s'écrivent et se démontrent de la même façon. La différentielle extérieure n'utilise ni métrique ni connexion, et la métrique n'intervient que dans $\star$.</li>
</ul>
<p><b>Ce que le formalisme apporte.</b></p>
<ul>
<li>Les indices disparaissent. En tenseurs, on utilise deux fois la commutation des dérivées secondes (points 1 et 2) et une fois l'annulation d'une contraction symétrique-antisymétrique (point 3), chaque fois avec le détail des indices&nbsp;; en formes, ces arguments sont regroupés une fois pour toutes dans $\mathrm d\circ\mathrm d = 0$.</li>
<li>Les équations gardent la même forme dans tout système de coordonnées et sur toute variété. Dans le formalisme tensoriel, le passage à l'espace-temps courbe ajoute des symboles de Christoffel et des identités à démontrer.</li>
<li>La structure se lit&nbsp;: $F$ est exacte, donc fermée&nbsp;; $J$ est exacte, donc fermée&nbsp;; la conservation de la charge est une identité géométrique, de même nature que le bord d'un bord vide.</li>
</ul>
<p><b>Limite.</b> Les formes ne décrivent que les tenseurs antisymétriques. Pour les tenseurs symétriques (la métrique, le tenseur énergie-impulsion), le formalisme tensoriel reste nécessaire.</p>
</details>

<br>

> <b>Needham</b>, T., <i>Visual Differential Geometry and Forms</i>, Princeton University Press (2021)&nbsp;: un traitement très visuel, dans l'esprit des figures de cette page.<br>
<b>Misner</b>, C. W., <b>Thorne</b>, K. S., <b>Wheeler</b>, J. A., <i>Gravitation</i>, W. H. Freeman (1973), chapitres 2 à 4&nbsp;: les 1-formes comme piles de lignes, et l'électromagnétisme en formes.<br>
