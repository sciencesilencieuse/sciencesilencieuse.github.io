+++
title = "Formes différentielles"
date = 2026-11-15T12:00:00+01:00
weight = 7
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

Les calculs se font toujours dans un système de coordonnées mais grace aux formes, les formules gardent la même tête d'un système à l'autre.

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

## Des flèches et des mesureurs {#fleches}

Sur une carte, la position est un point. Un petit déplacement à partir de ce point est un **vecteur** (plus précisément un *vecteur tangent*)&nbsp;: une flèche. L'altitude $V$ est une fonction du point. Si l'on se déplace de la flèche $\vec v$, l'altitude varie, et cette variation est proportionnelle à $\vec v$ et additive quand on ajoute des flèches&nbsp;: elle dépend **linéairement** de $\vec v$. L'application linéaire qui à une flèche associe la variation d'altitude, c'est la **différentielle** $\mathrm{d}V$ de la fonction, au point considéré.

Pour la dessiner, traçons les lignes où $V$ vaut $V(P)$, $V(P) + \Delta$, $V(P) + 2\Delta$, et ainsi de suite. De très près, ces courbes de niveau se redressent en droites parallèles et équidistantes. Une flèche partant de $P$ franchit un certain nombre de ces lignes&nbsp;: c'est la valeur de $\mathrm{d}V$ sur la flèche, en unités de $\Delta$ (comptée négativement quand on descend). Une application linéaire des flèches vers les nombres se dessine donc comme **une pile de lignes**.

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
<text x="400" y="140" font-size="14.5" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif"><tspan font-weight="bold">v</tspan> : une flèche</text>
<text x="400" y="162" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif">un petit déplacement depuis <tspan font-style="italic">P</tspan></text>
<text x="400" y="206" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">d<tspan font-style="italic">V</tspan>(<tspan font-weight="bold">v</tspan>) = nombre de lignes</text>
<text x="400" y="223" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">franchies par la flèche :</text>
<text id="f1-n" x="400" y="258" font-size="26" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">0</text>
<text id="f1-s" x="400" y="280" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
<text x="400" y="320" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez <tspan font-style="italic">P</tspan> et la pointe de la flèche</text>
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
<p class="legende">Une colline à deux sommets. En $P$, la différentielle $\mathrm{d}V$ est la pile de lignes magenta (valeurs de $V$ séparées de $\Delta = 0{,}4$, comme sur la carte, vues de très près). La flèche bleue franchit un nombre de lignes qui est la valeur de $\mathrm{d}V$ sur elle. Doubler la flèche double ce nombre&nbsp;; la retourner change son signe.</p>

<div id="def">

**Définition**

Soit $E$ un espace vectoriel réel (ici, l'espace des vecteurs tangents en un point $P$, noté $T\_PM$). Une **forme linéaire** sur $E$ est une application linéaire $\alpha : E \to \mathbb{R}$. Ces formes constituent l'**espace dual** $E^{\ast}$ (ici, l'**espace cotangent** $T^{\ast}\_PM$). Une **1-forme différentielle** sur $M$ est le choix, en chaque point $P$, d'une forme linéaire $\alpha\_P \in T^{\ast}\_PM$ qui varie de façon régulière avec $P$. On note $\alpha(\vec v)$, ou $\langle\alpha, \vec v\rangle$, le nombre obtenu en l'appliquant à un vecteur $\vec v$.

</div>

Pour une fonction $f$, le mesureur $\mathrm{d}f$ s'obtient en suivant $f$ le long d'un mouvement. Soit $\gamma$ une trajectoire qui passe en $P$ à l'instant $t = 0$ avec la vitesse $\vec v$&nbsp;: la flèche $\vec v$ est la vitesse du point mobile. Pendant le mouvement, $f$ prend les valeurs $f\big(\gamma(t)\big)$, qui varient avec $t$. La **différentielle** de $f$ en $P$ est la 1-forme qui associe à la flèche $\vec v$ le taux de variation de $f$ à l'instant $0$&nbsp;:

$$\mathrm{d}f\_P(\vec v) = \frac{\mathrm{d}}{\mathrm{d}t}f\big(\gamma(t)\big)\Big|\_{t=0}.$$

Sur la carte, c'est le nombre de lignes de niveau franchies par unité de temps. Sur le graphe de $t \mapsto f\big(\gamma(t)\big)$, c'est la pente de la tangente en $t = 0$.

<div class="svg-container" style="display:flex;flex-wrap:wrap;gap:6px 10px;justify-content:center;align-items:flex-start;">
<svg id="fc-map" viewBox="0 0 360 340" role="img" aria-label="Carte de courbes de niveau de l'altitude f. Une trajectoire courbe gamma passe au point P à l'instant 0 ; la flèche v est sa vitesse en P. Un point mobile parcourt la trajectoire. On peut déplacer P, la pointe de la flèche, et régler la courbure de la trajectoire." style="flex:1 1 280px;max-width:360px;height:auto;touch-action:none;">
<defs><marker id="fca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker>
<marker id="fcb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker>
<clipPath id="fc-mclip"><rect x="10" y="34" width="340" height="280"/></clipPath></defs>
<rect x="10" y="34" width="340" height="280" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1"/>
<path id="fc-cont" d="M0,0" fill="none" stroke="#94a3b8" stroke-width="1" clip-path="url(#fc-mclip)"/>
<g clip-path="url(#fc-mclip)"><path id="fc-gam" d="M0,0" fill="none" stroke="#C2770B" stroke-width="2.4" marker-end="url(#fcb)"/></g>
<line id="fc-v" x1="0" y1="0" x2="0" y2="0" stroke="#004D80" stroke-width="2.8" marker-end="url(#fca)"/>
<circle id="fc-hp" cx="0" cy="0" r="15" fill="#334155" fill-opacity="0.001"/>
<circle id="fc-p" cx="0" cy="0" r="5.5" fill="#334155" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fc-m" cx="0" cy="0" r="5" fill="#C2770B" stroke="#fff" stroke-width="1.6" pointer-events="none"/>
<circle id="fc-ht" cx="0" cy="0" r="15" fill="#004D80" fill-opacity="0.001"/>
<text id="fc-lp" x="0" y="0" font-size="14" font-style="italic" fill="#334155" font-family="Georgia,'Times New Roman',serif">P</text>
<text id="fc-lv" x="0" y="0" font-size="15" font-weight="bold" fill="#004D80" font-family="Georgia,'Times New Roman',serif">v</text>
<text id="fc-lg" x="0" y="0" font-size="14" font-style="italic" fill="#C2770B" font-family="Georgia,'Times New Roman',serif">γ</text>
<text x="10" y="26" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">carte : courbes de niveau de <tspan font-style="italic">f</tspan></text>
<text x="10" y="332" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez <tspan font-style="italic">P</tspan> et la pointe de la flèche</text>
</svg>
<svg id="fc-gr" viewBox="0 0 360 340" role="img" aria-label="Graphe de la valeur de f le long de la trajectoire en fonction du temps t, entre -1 et 1. Des lignes horizontales marquent les niveaux de la carte. La droite bleue est la tangente à la courbe en t = 0 ; sa pente est la valeur de la différentielle de f sur la flèche v. La courbe change avec la courbure de la trajectoire, pas la tangente." style="flex:1 1 280px;max-width:360px;height:auto;">
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
<text x="200" y="288" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" dx="60" font-style="italic">temps <tspan font-style="italic">t</tspan></text>
<text id="fc-r1" x="40" y="312" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif"></text>
<text id="fc-r2" x="40" y="331" font-size="12.5" fill="#475569" font-family="Georgia,'Times New Roman',serif"></text>
</svg>
<div style="flex:1 1 100%;display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:center;align-items:center;margin:2px 0 6px;font-size:0.92em;">
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>courbure de la trajectoire</span> <input type="range" class="fig-range" id="fc-c" min="-2" max="2" step="0.05" value="0.9" style="width:120px;margin:0;"></label>
<label style="display:inline-flex;align-items:center;gap:8px;margin:0;font-weight:normal;"><span>instant <i>t</i></span> <input type="range" class="fig-range" id="fc-t" min="-1" max="1" step="0.02" value="0.5" style="width:120px;margin:0;"> <span id="fc-tv" style="min-width:2.6em;">0,50</span></label>
</div>
</div>
<script>
(function () {
  var F = window.FG, svg = F.$('fc-map'); if (!svg) return;
  var S = 34, OX = 10, OY = 314, DV = 0.4, H = 2.4, K = 115 / H, VMAX = 1.5;
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
    F.$('fc-r1').innerHTML = F.T([['pente en 0 : d'], ['f', 'i'], ['(', ''], ['v', 'b'], [') = ' + (s >= 0 ? '+' : '') + F.fmt(s)]]);
    F.$('fc-r2').textContent = (s >= 0 ? '+' : '') + F.fmt(s / DV, 1) + ' lignes de niveau franchies par unité de temps';
  }
  F.drag(svg, F.$('fc-hp'), function (q) { p = [F.clamp((q.x - OX) / S, 0.5, 9.5), F.clamp((OY - q.y) / S, 0.5, 7.7)]; draw(); });
  F.drag(svg, F.$('fc-ht'), function (q) { var dx = (q.x - X(p[0])) / S, dy = (Y(p[1]) - q.y) / S, n = Math.hypot(dx, dy); if (n > VMAX) { dx *= VMAX / n; dy *= VMAX / n; } v = [dx, dy]; draw(); });
  F.$('fc-c').addEventListener('input', function () { c = parseFloat(this.value); draw(); });
  F.$('fc-t').addEventListener('input', function () { tt = parseFloat(this.value); draw(); });
  draw();
})();
</script>
<p class="legende">À gauche, une trajectoire $\gamma$ (orange) qui passe en $P$ avec la vitesse $\vec v$ (bleu), parcourue de $t = -1$ à $t = 1$. À droite, la valeur de $f$ le long de cette trajectoire&nbsp;: les lignes grises horizontales sont les niveaux de la carte, que le point mobile franchit aux mêmes instants. La droite bleue est la tangente en $t = 0$, de pente $\mathrm{d}f_P(\vec v)$. En faisant varier la courbure, la trajectoire et la courbe orange changent, mais la tangente reste la même.</p>

Le résultat ne dépend que de $\vec v$, pas de la trajectoire choisie&nbsp;: deux trajectoires qui passent en $P$ avec la même vitesse, mais se courbent différemment, ont des graphes différents et la même tangente en $t = 0$. La règle de dérivation en chaîne, que la [section sur les coordonnées polaires](#polaires) énonce, en donne la raison&nbsp;: la pente ne fait intervenir que les composantes de $\vec v$.

Toutes les 1-formes ne sont pas de cette forme (le travail d'une force de frottement n'est la différentielle d'aucune fonction), mais celles-là sont les plus familières.

## Deux sortes de composantes, sans dictionnaire {#composantes}

Choisissons une base de flèches $(\vec e\_1, \vec e\_2)$, par exemple les axes d'un système de coordonnées. Un vecteur se décompose sur cette base (règle du parallélogramme)&nbsp;: $\vec v = v^1\vec e\_1 + v^2\vec e\_2$[^einstein]. Les $v^i$ sont les **coefficients** de la décomposition.

Une 1-forme est entièrement connue dès qu'on sait ce qu'elle donne sur les vecteurs de base&nbsp;: $\alpha\_i = \alpha(\vec e\_i)$, le nombre de lignes franchies par $\vec e\_i$. Par linéarité,

$$\alpha(\vec v) = \alpha\_1 v^1 + \alpha\_2 v^2 = \alpha\_i\\, v^i.$$

[^einstein]: Convention d'Einstein&nbsp;: un indice répété, une fois en haut et une fois en bas, est sommé sur toutes ses valeurs. Ainsi $v^i\\,\vec e\_i$ désigne $\sum\_i v^i\\,\vec e\_i$ et $\alpha\_i\\, v^i$ désigne $\sum\_i \alpha\_i\\, v^i$.

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
<text x="398" y="50" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">décomposer la flèche</text>
<text id="f2-tv" x="398" y="72" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f2-tv2" x="398" y="94" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text x="398" y="118" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">compter les lignes franchies</text>
<text id="f2-ta" x="398" y="140" font-size="14.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<text x="398" y="186" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">nombre de lignes franchies par v</text>
<text id="f2-tp" x="398" y="212" font-size="15.5" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif"></text>
<text id="f2-tn" x="398" y="236" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-style="italic">inchangé quand on change de base</text>
<text x="398" y="322" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez la pointe de v</text>
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
<p class="legende">Une même flèche $\vec v$ (bleu) et une même 1-forme $\alpha$ (lignes magenta), exprimées dans une base $(\vec e_1, \vec e_2)$ que l'on peut déformer. Les coefficients $v^i$ de la décomposition (parallélogramme) et les nombres de lignes $\alpha_i$ franchies par les vecteurs de base varient quand on change de base, mais le nombre de lignes franchies par $\vec v$ ne change pas. Les points sur les flèches marquent les lignes franchies.</p>

Changer de base modifie les deux jeux de nombres, mais en sens contraire. Si l'on allonge $\vec e\_1$ d'un facteur $\lambda$, le coefficient $v^1$ est divisé par $\lambda$ (il faut moins de $\vec e\_1$ pour reconstruire le même vecteur), alors que $\alpha\_1$ est multiplié par $\lambda$ (un vecteur plus long franchit plus de lignes). Le produit $\alpha\_1 v^1$ ne change pas&nbsp;: $\alpha(\vec v)$ est un nombre, indépendant du choix de la base.

C'est tout le contenu de la distinction entre composantes **contravariantes** (les $v^i$, qui varient à l'inverse de la base) et **covariantes** (les $\alpha\_i$, qui varient avec elle). Ce sont les composantes de deux objets de nature différente, une flèche et un mesureur de flèches, dont la rencontre donne un nombre. Aucun «&nbsp;dictionnaire&nbsp;» entre indices hauts et bas n'est nécessaire&nbsp;: l'indice dit de quel objet il s'agit. Un dictionnaire n'apparaît que si l'on veut transformer une flèche en mesureur, ce qui demande une métrique (voir la section suivante).

Les 1-formes $\varepsilon^1, \varepsilon^2$ telles que $\varepsilon^i(\vec e\_j) = \delta^i\_j$ forment la **base duale**. Elles lisent les coefficients d'un vecteur, $\varepsilon^i(\vec v) = v^i$, et toute 1-forme s'écrit $\alpha = \alpha\_i\\,\varepsilon^i$. Pour un système de coordonnées $(q^i)$, les vecteurs de base sont les $\partial/\partial q^i$ (les $\vec e\_i = \partial\vec r/\partial q^i$ de la page [De Newton à Hamilton](/physique/meca/hamilton/)) et la base duale est formée des **différentielles des coordonnées** $\mathrm{d}q^i$&nbsp;: $\mathrm{d}q^i(\vec v)$ est la $i$-ième composante de la vitesse $\vec v$.

## La différentielle et les coordonnées polaires {#polaires}

Pour une fonction $f$, la règle de dérivation en chaîne donne, dans tout système de coordonnées $(q^i)$,

$$\mathrm{d}f = \frac{\partial f}{\partial q^i}\\,\mathrm{d}q^i.$$

En coordonnées polaires, $\mathrm{d}f = \frac{\partial f}{\partial r}\\,\mathrm{d}r + \frac{\partial f}{\partial\theta}\\,\mathrm{d}\theta$. Aucun facteur $1/r$&nbsp;: la formule est exactement celle des coordonnées cartésiennes. Où est passé le $1/r$ des manuels&nbsp;? Dans le dessin.

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
<text x="402" y="322" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez <tspan font-style="italic">P</tspan> et la pointe de la flèche</text>
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
<p class="legende">Les lignes de $\mathrm{d}r$ sont des cercles équidistants, celles de $\mathrm{d}\theta$ des rayons séparés de $\Delta\theta = 15°$. Une flèche franchit $\mathrm{d}r(\vec v) = v_r$ cercles et $\mathrm{d}\theta(\vec v) = v_\theta/r$ radians, soit $v_\theta/(r\Delta\theta)$ rayons ($v_r$ et $v_\theta$ sont les composantes de $\vec v$ sur les vecteurs unitaires radial et orthoradial). À distance $r$, deux rayons voisins sont écartés de $r\Delta\theta$&nbsp;: plus on s'éloigne, moins la même flèche en franchit.</p>

Le facteur $1/r$ est donc dans l'objet $\mathrm{d}\theta$ lui-même&nbsp;: les rayons divergent. C'est une propriété géométrique, que le dessin montre, et la formule de $\mathrm{d}f$ n'a pas besoin de la répéter.

**Le gradient**, lui, est autre chose&nbsp;: c'est une flèche, alors que $\mathrm{d}f$ est un mesureur. Pour passer de l'un à l'autre, il faut une **métrique** $g$, c'est-à-dire une façon de mesurer longueurs et angles, qui associe à chaque flèche $\vec u$ la 1-forme $g(\vec u, \cdot)$. Le gradient est la flèche $\vec\nabla f$ telle que $g(\vec\nabla f, \cdot) = \mathrm{d}f$. En coordonnées polaires, la métrique est $g = \mathrm{d}r^2 + r^2\\,\mathrm{d}\theta^2$, et l'on obtient

$$\vec\nabla f = \frac{\partial f}{\partial r}\\,\hat e\_r + \frac{1}{r}\frac{\partial f}{\partial\theta}\\,\hat e\_\theta.$$

Le $1/r$ de cette formule vient de la métrique, source de tous les facteurs des coordonnées curvilignes. Quand une grandeur est naturellement un mesureur (une variation, une force dérivant d'un potentiel, un travail), on n'a pas besoin d'elle.

## Intégrer une 1-forme {#integrer}

Le long d'un chemin $\gamma : [a, b] \to M$, on additionne les nombres que la 1-forme donne sur les petits déplacements&nbsp;:

$$\int\_\gamma \alpha = \int\_a^b \alpha\_{\gamma(t)}\big(\dot\gamma(t)\big)\\,\mathrm{d}t.$$

C'est le nombre de lignes de $\alpha$ franchies par le chemin, comptées algébriquement. Pour la 1-forme travail d'une force, c'est le travail&nbsp;; pour la 1-forme associée à la vitesse d'un fluide, c'est la circulation. L'intégrale ne dépend pas du système de coordonnées, ni de la façon de paramétrer le chemin.

Pour $\alpha = \mathrm{d}f$, compter les lignes de niveau franchies revient à lire la différence d'altitude entre l'arrivée et le départ&nbsp;:

$$\int\_\gamma \mathrm{d}f = f(B) - f(A).$$

Le résultat ne dépend que des extrémités $A$ et $B$ du chemin&nbsp;: c'est le théorème fondamental de l'analyse. Une 1-forme qui est la différentielle d'une fonction est dite **exacte**. Le travail d'une force dérivant d'un potentiel est exact (la force est conservative)&nbsp;; celui d'une force de frottement, qui dépend du chemin, ne l'est pas.

## Aires orientées&nbsp;: les 2-formes {#aires}

Un mesureur à une flèche est une 1-forme. Un mesureur à **deux** flèches, qui à deux vecteurs associe un nombre, linéaire en chacun et **antisymétrique** (échanger les deux flèches change le signe), est une **2-forme**. Le modèle de base est l'aire orientée&nbsp;: le produit extérieur $\mathrm{d}x\wedge\mathrm{d}y$ associe à $(\vec u, \vec v)$ l'aire orientée du parallélogramme qu'ils engendrent,

$$\mathrm{d}x\wedge\mathrm{d}y\\,(\vec u, \vec v) = u\_x v\_y - u\_y v\_x.$$

On reconnaît le déterminant des deux vecteurs. On le dessine comme un quadrillage de carreaux, vus «&nbsp;de face&nbsp;»&nbsp;: la 2-forme est le nombre algébrique de carreaux balayés par le parallélogramme.

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
<text x="402" y="318" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez les pointes de u et v</text>
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
<p class="legende">Le quadrillage représente $\mathrm{d}x\wedge\mathrm{d}y$. Le parallélogramme construit sur $\vec u$ et $\vec v$ balaie un certain nombre de carreaux, positif si l'on tourne de $\vec u$ vers $\vec v$ dans le sens direct, négatif sinon. Échanger les deux flèches change le signe.</p>

De façon générale, le **produit extérieur** de deux 1-formes est $(\alpha\wedge\beta)(\vec u, \vec v) = \alpha(\vec u)\\,\beta(\vec v) - \alpha(\vec v)\\,\beta(\vec u)$. Il est antisymétrique, $\beta\wedge\alpha = -\alpha\wedge\beta$, donc $\alpha\wedge\alpha = 0$.

**Changer de variables.** Les 1-formes se transforment par les règles du calcul différentiel&nbsp;: $\mathrm{d}x = \cos\theta\\,\mathrm{d}r - r\sin\theta\\,\mathrm{d}\theta$ et $\mathrm{d}y = \sin\theta\\,\mathrm{d}r + r\cos\theta\\,\mathrm{d}\theta$. Le produit extérieur donne alors, en développant et en utilisant $\mathrm{d}r\wedge\mathrm{d}r = \mathrm{d}\theta\wedge\mathrm{d}\theta = 0$ et $\mathrm{d}\theta\wedge\mathrm{d}r = -\mathrm{d}r\wedge\mathrm{d}\theta$,

$$\mathrm{d}x\wedge\mathrm{d}y = r\left(\cos^2\theta + \sin^2\theta\right)\mathrm{d}r\wedge\mathrm{d}\theta = r\\,\mathrm{d}r\wedge\mathrm{d}\theta.$$

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

En dimension $3$, une 2-forme mesure des petites surfaces orientées&nbsp;: on la dessine comme un champ de **tubes**, et sa valeur sur une surface est le nombre de tubes qu'elle traverse. C'est la notion de **flux**.

## La différentielle extérieure et le théorème de Stokes {#stokes}

On sait différentier une fonction&nbsp;: $f \mapsto \mathrm{d}f$. La **différentielle extérieure** $\mathrm{d}$ prolonge cette opération aux formes de tout degré. Sur une 1-forme $\alpha = P\\,\mathrm{d}x + Q\\,\mathrm{d}y$, elle vaut

$$\mathrm{d}\alpha = \mathrm{d}P\wedge\mathrm{d}x + \mathrm{d}Q\wedge\mathrm{d}y = \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathrm{d}x\wedge\mathrm{d}y.$$

(Les termes en $\mathrm{d}x\wedge\mathrm{d}x$ et $\mathrm{d}y\wedge\mathrm{d}y$ s'annulent par antisymétrie.) On la lit comme la circulation de $\alpha$ par unité d'aire&nbsp;: c'est le rotationnel. Appliquée deux fois à une fonction, elle donne zéro, $\mathrm{d}(\mathrm{d}f) = 0$&nbsp;: avec $P = \partial f/\partial x$ et $Q = \partial f/\partial y$, le coefficient de $\mathrm{d}x\wedge\mathrm{d}y$ est $\frac{\partial^2f}{\partial x\\,\partial y} - \frac{\partial^2f}{\partial y\\,\partial x} = 0$ (théorème de Schwarz). Plus généralement, $\mathrm{d}\circ\mathrm{d} = 0$.

<div id="theo">

**Théorème de Stokes**

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

Ce seul énoncé contient des résultats qu'on apprend séparément&nbsp;: en dimension $1$, c'est le théorème fondamental de l'analyse, $\int\_a^b\mathrm{d}f = f(b) - f(a)$&nbsp;; en dimension $2$, la formule de Green&nbsp;; en dimension $3$, le théorème du rotationnel (Stokes-Kelvin) et celui de la divergence (Ostrogradski). Le dictionnaire avec le calcul vectoriel est&nbsp;:
<ul>
<li>$\mathrm{d}$ sur une fonction&nbsp;: le gradient&nbsp;;</li>
<li>$\mathrm{d}$ sur une 1-forme&nbsp;: le rotationnel&nbsp;;</li>
<li>$\mathrm{d}$ sur une 2-forme (en dimension $3$)&nbsp;: la divergence.</li>
</ul>
Et $\mathrm{d}\circ\mathrm{d} = 0$ résume à elle seule deux identités, $\vec\nabla\times(\vec\nabla f) = \vec 0$ et $\vec\nabla\cdot(\vec\nabla\times\vec A) = 0$.

### Le rotationnel en coordonnées polaires

Soit $A = A\_x\\,\mathrm{d}x + A\_y\\,\mathrm{d}y = A\_r\\,\mathrm{d}r + A\_\theta\\,\mathrm{d}\theta$ une 1-forme (par exemple le travail d'une force). La différentielle extérieure se calcule de la même façon dans les deux systèmes&nbsp;:

$$\mathrm{d}A = \left(\frac{\partial A\_y}{\partial x} - \frac{\partial A\_x}{\partial y}\right)\mathrm{d}x\wedge\mathrm{d}y = \left(\frac{\partial A\_\theta}{\partial r} - \frac{\partial A\_r}{\partial\theta}\right)\mathrm{d}r\wedge\mathrm{d}\theta.$$

Aucune formule n'est à retenir. La formule des manuels, avec ses $1/r$, apparaît quand on exprime la même chose avec les composantes **physiques** $\hat A\_r = A\_r$ et $\hat A\_\theta = A\_\theta/r$ (composantes sur les vecteurs unitaires) et le rotationnel comme coefficient de l'élément d'aire $\mathrm{d}x\wedge\mathrm{d}y = r\\,\mathrm{d}r\wedge\mathrm{d}\theta$&nbsp;:

$$(\vec\nabla\times\vec A)\_z = \frac{1}{r}\left(\frac{\partial\left(r\hat A\_\theta\right)}{\partial r} - \frac{\partial\hat A\_r}{\partial\theta}\right).$$

Le $1/r$ est celui de l'élément d'aire, et le $r$ dans la dérivée vient de $A\_\theta = r\hat A\_\theta$.

### Fermée ne veut pas dire exacte

Une forme $\alpha$ est **fermée** si $\mathrm{d}\alpha = 0$. Toute forme exacte est fermée, puisque $\mathrm{d}\circ\mathrm{d} = 0$. La réciproque est vraie localement (c'est le lemme de Poincaré), mais pas toujours globalement. Le contre-exemple standard est la 1-forme $\mathrm{d}\theta = \dfrac{x\\,\mathrm{d}y - y\\,\mathrm{d}x}{x^2 + y^2}$ sur le plan privé de l'origine&nbsp;: un calcul direct donne $\mathrm{d}(\mathrm{d}\theta) = 0$, et pourtant sa circulation sur un cercle autour de l'origine vaut $2\pi$. Elle n'est pas la différentielle d'une fonction définie sur tout le plan privé de l'origine, car l'angle $\theta$ saute de $2\pi$ au bout d'un tour.

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
<text x="388" y="282" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez la boucle</text>
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
    F.$('f4-t3').textContent = inside ? 'de O (θ saute de 2π au tour).' : 'Déplacez la boucle autour de O.';
    F.$('f4-loop').setAttribute('stroke', inside ? '#970E53' : '#004D80'); F.$('f4-arr').setAttribute('stroke', inside ? '#970E53' : '#004D80');
    svg.setAttribute('data-vals', w.toFixed(4));
  }
  F.drag(svg, F.$('f4-h'), function (q) { c = [F.clamp(q.x, 10 + R + 2, 370 - R - 2), F.clamp(q.y, 30 + R + 2, 292 - R - 2)]; draw(); });
  draw();
  F.responsive(svg, 388);
})();
</script>
<p class="legende">Les rayons sont les lignes de $\mathrm{d}\theta$. Une boucle qui entoure l'origine franchit tous les rayons dans le même sens, et la circulation vaut $2\pi$&nbsp;; une boucle qui ne l'entoure pas les franchit autant de fois dans un sens que dans l'autre, et la circulation est nulle.</p>

La circulation du champ magnétique autour d'un fil rectiligne parcouru par un courant $I$, $B = \frac{\mu\_0 I}{2\pi}\\,\mathrm{d}\theta$, en est l'exemple physique&nbsp;: le champ est fermé hors du fil, sa circulation vaut $\mu\_0 I$ (théorème d'Ampère), et il n'est pas le gradient d'un potentiel scalaire.

## Application&nbsp;: retour sur les moments {#hamilton}

La page [De Newton à Hamilton](/physique/meca/hamilton/) obtient les moments $p\_i$ en projetant la loi de Newton sur une base attachée aux coordonnées. Avec les formes, la même histoire se lit presque d'elle-même.

### La force est une 1-forme, la vitesse un vecteur

Dans des coordonnées $(q^i)$ quelconques, la vitesse est un **vecteur** $\vec v = \dot q^i\\,\partial/\partial q^i$&nbsp;: ses composantes sont les $\dot q^i$. La force dérivant d'un potentiel $V$ est la **1-forme** $-\mathrm{d}V = -\frac{\partial V}{\partial q^i}\\,\mathrm{d}q^i$&nbsp;: ses composantes sont les $-\partial V/\partial q^i$, celles qu'on obtient en projetant sur la base attachée aux coordonnées. Aucune métrique n'est nécessaire pour l'écrire, et aucun facteur $1/r$&nbsp;: la force n'en contient pas.

### Le moment est une 1-forme

La masse, ou plus généralement la métrique $g$ de l'espace des configurations, transforme une flèche en mesureur&nbsp;: $\vec v \mapsto m\\,g(\vec v, \cdot)$. C'est l'**isomorphisme musical** qui «&nbsp;abaisse un indice&nbsp;», noté $\flat$. Le moment est le résultat&nbsp;:

$$p = m\\,g(\vec v, \cdot) = m\\,g\_{ij}\\,\dot q^j\\,\mathrm{d}q^i, \qquad p\_i = m\\,g\_{ij}\\,\dot q^j.$$

En coordonnées polaires, la métrique est $g = \mathrm{d}r^2 + r^2\\,\mathrm{d}\theta^2$, et

$$p = m\left(\dot r\\,\mathrm{d}r + r^2\dot\theta\\,\mathrm{d}\theta\right),$$

de sorte que $p\_r = m\dot r$ et $p\_\theta = mr^2\dot\theta$ se lisent sans calcul. Le $r^2$ de $p\_\theta$ vient de la métrique, qui convertit la flèche en mesureur. La différence de dimension entre $p\_r$ et $p\_\theta$ vient de ce que $\mathrm{d}r$ mesure des longueurs et $\mathrm{d}\theta$ des radians.

Pourquoi un mesureur plutôt qu'une flèche&nbsp;? Parce que le moment mesure comment l'énergie cinétique $T(\vec v) = \frac{1}{2}m\\,g(\vec v, \vec v)$ varie quand on change la vitesse&nbsp;:

$$p(\delta\vec v) = \frac{\mathrm{d}}{\mathrm{d}\varepsilon}\\,T(\vec v + \varepsilon\\,\delta\vec v)\Big|\_{\varepsilon=0} = m\\,g(\vec v, \delta\vec v).$$

C'est la dérivée d'une fonction par rapport à une flèche, donc une 1-forme.

### L'espace des phases et sa forme symplectique

Un point de l'espace des phases est un couple $(q, p)$&nbsp;: une position, et une 1-forme en cette position. Sur cet espace, les 1-formes $\mathrm{d}q^i$ et $\mathrm{d}p\_i$ ont un sens, et leur produit extérieur définit une 2-forme,

$$\omega = \mathrm{d}q^i\wedge\mathrm{d}p\_i = \mathrm{d}q^1\wedge\mathrm{d}p\_1 + \dots + \mathrm{d}q^n\wedge\mathrm{d}p\_n.$$

Pour un degré de liberté, c'est l'aire orientée $u\_q v\_p - u\_p v\_q$ du plan $(q, p)$, l'«&nbsp;aire&nbsp;» de la page [De Newton à Hamilton](/physique/meca/hamilton/). Pour plusieurs degrés de liberté, c'est la somme des aires orientées des projections sur chaque plan $(q^i, p\_i)$. C'est la **forme symplectique**. Elle est, au signe près, la différentielle d'une 1-forme canonique, la 1-forme de Liouville $\Theta = p\_i\\,\mathrm{d}q^i$&nbsp;: $\omega = -\mathrm{d}\Theta$ (les auteurs qui posent $\omega = \mathrm{d}p\wedge\mathrm{d}q$, comme Arnold, ont le signe opposé).

### Hamilton, Liouville et Noether en une ligne

Pour une fonction $H$, le **champ hamiltonien** $X\_H$ est la flèche définie par $\iota\_{X\_H}\omega = \mathrm{d}H$, où $\iota\_X\omega = \omega(X, \cdot)$ est le **produit intérieur**. Autrement dit, pour toute flèche $\vec Y$,

$$\omega(X\_H, \vec Y) = \mathrm{d}H(\vec Y).$$

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
<text x="396" y="322" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">glissez P et la pointe de Y</text>
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
<p class="legende">Espace des phases du pendule, $H = \frac{p^2}{2} - \cos q$. Au point $P$, le champ hamiltonien $X_H$ (orange) est tangent à la courbe de niveau de $H$. Pour n'importe quelle flèche $\vec Y$ (bleu), l'aire orientée du parallélogramme construit sur $X_H$ et $\vec Y$ est égale à la valeur de $\mathrm{d}H$ sur $\vec Y$&nbsp;: c'est la définition de $X_H$.</p>

Dans les coordonnées $(q, p)$, cette égalité donne $X\_H = \left(\frac{\partial H}{\partial p}, -\frac{\partial H}{\partial q}\right)$&nbsp;: ce sont les équations de Hamilton. Le champ $X\_H$ est la «&nbsp;pente tournée d'un quart de tour&nbsp;» de $\mathrm{d}H$, la rotation étant celle que définit $\omega$.

Les propriétés fondamentales se lisent alors sans calcul&nbsp;:
<ul>
<li><b>Conservation de $H$.</b> $\mathrm{d}H(X_H) = \omega(X_H, X_H) = 0$, par antisymétrie de $\omega$.</li>
<li><b>Théorème de Liouville.</b> Le flot de $X_H$ conserve $\omega$. La formule de Cartan donne la variation de $\omega$ le long du flot, $\mathcal{L}_{X_H}\omega = \mathrm{d}(\iota_{X_H}\omega) + \iota_{X_H}\mathrm{d}\omega = \mathrm{d}(\mathrm{d}H) + 0 = 0$, car $\mathrm{d}\omega = 0$ et $\mathrm{d}\circ\mathrm{d} = 0$. Les aires (et, pour plusieurs degrés de liberté, les volumes) sont conservées.</li>
<li><b>Crochet de Poisson et théorème de Noether.</b> Le crochet $\{G, H\} = \omega(X_G, X_H)$ est antisymétrique par construction. Comme $\mathrm{d}G(X_H) = \omega(X_G, X_H)$, c'est la variation de $G$ le long du flot de $H$&nbsp;: $G$ est conservée si et seulement si $\{G, H\} = 0$, c'est-à-dire si $H$ est invariant par le flot de $G$ (car $\mathrm{d}H(X_G) = -\{G, H\}$).</li>
<li><b>Transformations canoniques.</b> Si $p\,\mathrm{d}q - P\,\mathrm{d}Q = \mathrm{d}F$ (fonction génératrice), la différentielle extérieure de cette égalité donne $\mathrm{d}p\wedge\mathrm{d}q = \mathrm{d}P\wedge\mathrm{d}Q$&nbsp;: la transformation conserve $\omega$.</li>
</ul>

### Ce que les formes ne font pas disparaître

La métrique reste présente&nbsp;: le passage de $\dot q$ à $p$ la fait intervenir, et sa dépendance en la position est à l'origine de la force centrifuge, c'est-à-dire du terme $\frac{m}{2}\frac{\partial g\_{kl}}{\partial q^i}\dot q^k\dot q^l$ de la page de mécanique. Les formes ne l'effacent pas&nbsp;; elles montrent où il se range, dans $H = \frac{1}{2m}g^{ab}p\_ap\_b + V$, où $g^{ab}$ est la métrique sur les 1-formes. Et les calculs se font toujours en coordonnées&nbsp;: ce qui change, c'est que les énoncés gardent la même forme quand on change de coordonnées.

## Application&nbsp;: la thermodynamique {#thermo}

Pour un système dont l'état est décrit par $(S, V)$, le premier et le second principes, pour une transformation réversible, s'écrivent comme une égalité entre 1-formes&nbsp;:

$$\mathrm{d}U = T\\,\mathrm{d}S - P\\,\mathrm{d}V.$$

La différentielle extérieure de cette égalité, avec $\mathrm{d}\circ\mathrm{d} = 0$, donne

$$0 = \mathrm{d}T\wedge\mathrm{d}S - \mathrm{d}P\wedge\mathrm{d}V, \qquad\text{soit}\qquad \mathrm{d}T\wedge\mathrm{d}S = \mathrm{d}P\wedge\mathrm{d}V.$$

En développant $\mathrm{d}T = \left(\frac{\partial T}{\partial S}\right)\_V\mathrm{d}S + \left(\frac{\partial T}{\partial V}\right)\_S\mathrm{d}V$ et de même $\mathrm{d}P$, l'identification des coefficients de $\mathrm{d}S\wedge\mathrm{d}V$ donne la relation de Maxwell

$$\left(\frac{\partial T}{\partial V}\right)\_S = -\left(\frac{\partial P}{\partial S}\right)\_V.$$

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

## Application&nbsp;: l'électromagnétisme {#maxwell}

Le champ électrique est un mesureur de déplacements&nbsp;: le travail par unité de charge le long d'un chemin est $\int\_\gamma E$, avec la 1-forme $E = E\_x\\,\mathrm{d}x + E\_y\\,\mathrm{d}y + E\_z\\,\mathrm{d}z$. Le champ magnétique intervient par son **flux** à travers une surface orientée, c'est-à-dire par une grandeur qui prend deux flèches (les côtés d'un petit parallélogramme) et donne un nombre&nbsp;: c'est une 2-forme,

$$B = B\_x\\,\mathrm{d}y\wedge\mathrm{d}z + B\_y\\,\mathrm{d}z\wedge\mathrm{d}x + B\_z\\,\mathrm{d}x\wedge\mathrm{d}y.$$

La distinction entre vecteur et pseudovecteur devient celle entre 1-forme et 2-forme&nbsp;: un pseudovecteur est une 2-forme qu'on a identifiée à un vecteur grâce à l'orientation et à la métrique de l'espace.

Les équations de Maxwell s'écrivent alors sans aucune coordonnée. Avec un potentiel $A$ (une 1-forme), $B = \mathrm{d}A$, donc $\mathrm{d}B = 0$&nbsp;: c'est $\vec\nabla\cdot\vec B = 0$, le flux de $B$ à travers toute surface fermée est nul, les tubes de $B$ ne se terminent nulle part. L'équation de Faraday s'écrit $\mathrm{d}E = -\partial\_t B$. En relativité, $E$ et $B$ se fondent en une seule 2-forme $F$ de l'espace-temps, et les quatre équations de Maxwell se réduisent à deux&nbsp;: $\mathrm{d}F = 0$ (les deux équations sans source) et $\mathrm{d}\star F = J$ (celles avec sources, où $J$ est la 3-forme courant). L'opérateur $\star$ (dualité de Hodge) utilise la métrique, alors que $\mathrm{d}F = 0$ n'en utilise aucune&nbsp;: la moitié des équations de Maxwell est indépendante de la géométrie de l'espace-temps.


<br>

> Needham, T., <i>Visual Differential Geometry and Forms</i>, Princeton University Press (2021)&nbsp;: un traitement très visuel, dans l'esprit des figures de cette page.<br><br>
Misner, C. W., Thorne, K. S., Wheeler, J. A., <i>Gravitation</i>, W. H. Freeman (1973), chapitres 2 à 4&nbsp;: les 1-formes comme piles de lignes, et l'électromagnétisme en formes.
