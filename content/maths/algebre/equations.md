+++
title = "Équations"
date = 2021-03-06T14:20:50+01:00
weight = 1
chapter = false
+++

<style>
mjx-container[display="true"] { max-width:100%; overflow-x:auto; overflow-y:hidden; }
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
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
.bloc-preuve { border-color: #64748B; background: #F1F5F9; }
.bloc-def > .bloc-titre { color: #004D80; }
.bloc-prop > .bloc-titre { color: #C2770B; }
.bloc-theo > .bloc-titre { color: #970E53; }
.bloc-preuve > .bloc-titre { color: #475569; }
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
details.solution > summary
{
    cursor: pointer;
    color: #6B4FA0;
    font-style: italic;
}
.fig
{
    max-width: 40rem;
    margin: 1.4em auto;
    text-align: center;
}
.fig > svg
{
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 460px;
    height: auto;
}
.fig canvas
{
    display: block;
    margin: 0.4em auto;
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 8px;
}
.fig-ctl
{
    margin: 0.4em 0 0.2em;
    text-align: center;
}
.fig-ctl label
{
    display: block;
}
.fig-ctl input[type="range"]
{
    display: block;
    margin: 0.3em auto;
    width: min(16em, 100%);
    accent-color: #004D80;
}
.fig-ctl select
{
    font-size: 1em;
    padding: 0.1em 0.4em;
    max-width: 100%;
}
.fig-ctl button
{
    font-size: 0.9em;
    padding: 0.1em 0.7em;
    margin: 0.15em 0.1em;
    border: 2px solid #004D80;
    border-radius: 8px;
    background: #EEF4FA;
    color: #004D80;
    cursor: pointer;
}
.fig-ctl select.sel-seul
{
    display: block;
    margin: 0.3em auto;
    text-align-last: center;
}
.fig-val.note
{
    font-size: 0.85em;
    color: #64748B;
}
.fig-ctl .coef
{
    display: inline-block;
    margin: 0.1em 0.25em;
}
.fig-ctl .coef input
{
    width: 3.8em;
    font-size: 0.95em;
    text-align: center;
}
.fig-val
{
    font-size: 0.95em;
    color: #334155;
    margin: 0.2em 0;
}
.tbl
{
    border-collapse: collapse;
    border: none;
    margin: 0.8em auto;
    font-size: 0.95em;
    max-width: 100%;
}
.tbl td, .tbl th
{
    border: 1px solid #C7DDDC;
    padding: 0.3em 0.7em;
    text-align: center;
}
.tbl th
{
    background: #EEF4FA;
}
</style>

# Équations

Résoudre une équation polynomiale, c'est trouver les nombres qui annulent un polynôme. On a su le faire pour le premier et le second degré dès l'Antiquité, pour les degrés trois et quatre à la Renaissance, avant de se heurter au cinquième degré, puis de passer au calcul approché. Cette page suit cette histoire. Elle commence par le premier degré (équations, inéquations, systèmes), poursuit avec le second degré, d'abord dans les nombres réels, puis dans les nombres complexes, et monte ensuite vers les degrés supérieurs, avec des figures pour manipuler les racines.

<div class="bloc bloc-def">
<div class="bloc-titre">Équation polynomiale et racine</div>

Un **polynôme** de degré $n$ est une expression $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0$ où $a_n \neq 0$. Une **racine** de $P$ est un nombre $r$ tel que $P(r) = 0$. Résoudre l'**équation** $P(x) = 0$, c'est trouver toutes ses racines. On distingue les racines réelles et les racines complexes, et l'on compte une racine **multiple** autant de fois que sa multiplicité.

</div>

## Le premier degré

### Équations du premier degré

<div class="bloc bloc-theo">
<div class="bloc-titre">Équation du premier degré</div>

Soit $a x + b = 0$ avec $a \neq 0$. Elle a une unique solution&nbsp;:
$$x = -\frac{b}{a}.$$
(Si $a = 0$, l'équation n'a aucune solution quand $b \neq 0$, et tous les réels pour solutions quand $b = 0$.)

</div>

Pour résoudre, on «&nbsp;isole l'inconnue&nbsp;»&nbsp;: on fait la même opération des deux côtés de l'égalité (retrancher $b$, puis diviser par $a$), comme on garde une balance en équilibre en ajoutant ou en retirant la même masse des deux plateaux. Par exemple, $3x + 6 = 0$ donne $3x = -6$, soit $x = -2$.

### Inéquations du premier degré

Une inéquation remplace l'égalité par un ordre ($<$, $\le$, $>$, $\ge$). On ne cherche plus un nombre, mais un ensemble de nombres, le plus souvent un intervalle. On procède comme pour l'équation, avec une précaution&nbsp;: **multiplier ou diviser par un nombre négatif renverse le sens de l'inégalité**.

<div class="bloc bloc-prop">
<div class="bloc-titre">Signe de ax + b</div>

Pour $a \neq 0$, le nombre $a x + b$ s'annule en $x = -\frac{b}{a}$, il a le signe de $a$ à droite de cette valeur, et le signe opposé à gauche.

<table class="tbl">
<tr><th>$x$</th><td>$-\infty$</td><td>$-\frac{b}{a}$</td><td>$+\infty$</td></tr>
<tr><th>$a x + b$ si $a > 0$</th><td>$-$</td><td>$0$</td><td>$+$</td></tr>
<tr><th>$a x + b$ si $a < 0$</th><td>$+$</td><td>$0$</td><td>$-$</td></tr>
</table>

</div>

En effet, $a x + b > 0$ équivaut à $a x > -b$, puis à $x > -\frac{b}{a}$ si $a > 0$ ou à $x < -\frac{b}{a}$ si $a < 0$ (on a divisé par un nombre négatif). Par exemple, $-2x + 6 \ge 0$ équivaut à $-2x \ge -6$, donc à $x \le 3$, soit l'intervalle $]-\infty\ ; 3]$.

Dans la figure suivante, on règle $a$ et $b$ et l'on choisit l'inégalité. La droite $y = a x + b$ est tracée et l'ensemble des solutions apparaît en vert sur l'axe des abscisses.

<div class="fig">
<p class="fig-ctl"><label for="in-a">$a$ = <span id="in-av"></span></label><input type="range" id="in-a" min="-3" max="3" step="0.5" value="-2"></p>
<p class="fig-ctl"><label for="in-b">$b$ = <span id="in-bv"></span></label><input type="range" id="in-b" min="-6" max="6" step="0.5" value="6"></p>
<p class="fig-ctl"><label for="in-s">Inégalité&nbsp;:</label><select id="in-s" class="sel-seul"><option value="gt">a x + b &gt; 0</option><option value="ge" selected>a x + b ≥ 0</option><option value="lt">a x + b &lt; 0</option><option value="le">a x + b ≤ 0</option></select></p>
<svg id="in-svg" viewBox="0 0 460 205" role="img" aria-label="Une droite et l'ensemble des x où elle est positive ou négative"></svg>
<p class="fig-val" id="in-val"></p>
</div>
<script>
(function () {
  var sa = document.getElementById('in-a'), sb = document.getElementById('in-b'), ss = document.getElementById('in-s'), svg = document.getElementById('in-svg'), out = document.getElementById('in-val');
  var X0 = 30, X1 = 440, Y0 = 15, Y1 = 185, U = (X1 - X0) / 12, cx = (X0 + X1) / 2, cy = (Y0 + Y1) / 2, V = 14;
  function fr(x, d) { if (Math.abs(x) < 0.5 * Math.pow(10, -d)) { x = 0; } return x.toFixed(d).replace('.', ',').replace('-', '−'); }
  function dessiner() {
    var a = parseFloat(sa.value), b = parseFloat(sb.value), s = ss.value, i, h = '';
    document.getElementById('in-av').textContent = fr(a, 1); document.getElementById('in-bv').textContent = fr(b, 1);
    h += '<defs><clipPath id="in-cl"><rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '"/></clipPath></defs><rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    h += '<line x1="' + X0 + '" y1="' + cy + '" x2="' + X1 + '" y2="' + cy + '" stroke="#64748B"/><line x1="' + cx + '" y1="' + Y0 + '" x2="' + cx + '" y2="' + Y1 + '" stroke="#64748B"/>';
    for (i = -6; i <= 6; i++) { h += '<line x1="' + (cx + i * U) + '" y1="' + (cy - 3) + '" x2="' + (cx + i * U) + '" y2="' + (cy + 3) + '" stroke="#64748B"/>'; if (i !== 0 && i % 2 === 0) { h += '<text x="' + (cx + i * U) + '" y="' + (cy + 15) + '" font-size="11" text-anchor="middle" fill="#475569" font-family="Georgia,serif">' + i + '</text>'; } }
    var pos = s === 'gt' || s === 'ge', large = s === 'ge' || s === 'le', txt, r = null;
    if (Math.abs(a) > 1e-9) {
      r = -b / a;
      var vers = (a > 0) === pos ? 'droite' : 'gauche', xa = Math.max(-6, Math.min(6, r)), ex = vers === 'droite' ? 6 : -6;
      h += '<line x1="' + (cx + xa * U) + '" y1="' + cy + '" x2="' + (cx + ex * U) + '" y2="' + cy + '" stroke="#006C65" stroke-width="7" stroke-linecap="butt" opacity="0.75"/>';
      var rr = fr(r, 2).replace(',00', '').replace(/(,\d)0$/, '$1');
      txt = vers === 'droite' ? 'x ' + (large ? '≥' : '>') + ' ' + rr + ' , soit ' + (large ? '[' : ']') + rr + ' ; +∞[' : 'x ' + (large ? '≤' : '<') + ' ' + rr + ' , soit ]−∞ ; ' + rr + (large ? ']' : '[');
    } else {
      var vrai = pos ? (large ? b >= 0 : b > 0) : (large ? b <= 0 : b < 0);
      if (vrai) { h += '<line x1="' + X0 + '" y1="' + cy + '" x2="' + X1 + '" y2="' + cy + '" stroke="#006C65" stroke-width="7" opacity="0.75"/>'; }
      txt = a === 0 ? (vrai ? 'a = 0 : l\'inégalité est toujours vraie, tous les réels sont solutions' : 'a = 0 : l\'inégalité est fausse, aucune solution') : '';
    }
    var d = '';
    for (i = 0; i <= 200; i++) { var x = -6 + 12 * i / 200; d += (i ? 'L' : 'M') + (cx + x * U).toFixed(1) + ',' + (cy - (a * x + b) * V / 2).toFixed(1); }
    h += '<path d="' + d + '" fill="none" stroke="#004D80" stroke-width="2.4" clip-path="url(#in-cl)"/>';
    if (r !== null && Math.abs(r) <= 6) { h += '<circle cx="' + (cx + r * U).toFixed(1) + '" cy="' + cy + '" r="5" fill="' + (large ? '#006C65' : '#fff') + '" stroke="#006C65" stroke-width="2"/>'; }
    svg.innerHTML = h;
    out.innerHTML = (a !== 0 ? 'Solutions de ' + ss.options[ss.selectedIndex].text.replace('a x + b', 'ax + b') + ' : ' : '') + txt;
  }
  [sa, sb, ss].forEach(function (e) { e.addEventListener('input', dessiner); e.addEventListener('change', dessiner); });
  dessiner();
})();
</script>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube WPc-Hj2O_Os>}}
</div>

### Systèmes de deux équations ou inéquations linéaires

Avec deux inconnues $x$ et $y$, une équation linéaire $a x + b y = c$ est l'équation d'une **droite** du plan. Résoudre un système de deux telles équations, c'est chercher les points communs aux deux droites. Une inéquation $a x + b y \le c$ décrit au contraire un **demi-plan**&nbsp;: tout un côté d'une droite.

<div class="bloc bloc-theo">
<div class="bloc-titre">Système de deux équations linéaires</div>

Soit le système
$$\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \end{cases}$$
et $D = a_1 b_2 - a_2 b_1$ son **déterminant**.

- Si $D \neq 0$, les deux droites se coupent en un point, et le système a une **unique solution**&nbsp;: $x = \dfrac{c_1 b_2 - c_2 b_1}{D}$ et $y = \dfrac{a_1 c_2 - a_2 c_1}{D}$ (formules de Cramer).
- Si $D = 0$, les droites sont parallèles. Elles sont soit distinctes, et le système n'a **aucune solution**, soit confondues, et il en a **une infinité**.

</div>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration (combinaison linéaire)</div>

On multiplie la première équation par $b_2$ et la seconde par $b_1$, puis on soustrait pour éliminer $y$&nbsp;: $(a_1 b_2 - a_2 b_1)x = c_1 b_2 - c_2 b_1$. De même, en éliminant $x$, on trouve $(a_1 b_2 - a_2 b_1)y = a_1 c_2 - a_2 c_1$. Quand $D \neq 0$, on divise par $D$&nbsp;; quand $D = 0$, les membres de gauche sont nuls, et le système est impossible ou indéterminé selon que les membres de droite sont non nuls ou nuls.

</div>

On résout en pratique par **substitution** (on exprime $y$ en fonction de $x$ dans une équation, puis on remplace dans l'autre) ou par **combinaison linéaire** (comme ci-dessus). Par exemple, $x + y = 3$ et $x - y = 1$ donnent en les additionnant $2x = 4$, soit $x = 2$ puis $y = 1$ (la formule de Cramer confirme&nbsp;: $D = -2$, $x = \frac{-4}{-2} = 2$). Ces opérations sont celles de la méthode du pivot de Gauss, qui traite de la même façon des systèmes de $n$ équations (voir <a href="../lineaire/">l'algèbre linéaire</a>).

<div class="bloc bloc-prop">
<div class="bloc-titre">Système d'inéquations</div>

Chaque inéquation $a x + b y \le c$ (ou $\ge$, $<$, $>$) a pour solutions un **demi-plan**, délimité par la droite $a x + b y = c$ (qui lui appartient si l'inégalité est large, et non si elle est stricte). L'ensemble des solutions d'un système d'inéquations est l'**intersection** des demi-plans&nbsp;: une région du plan, convexe, qui peut être un polygone, une région non bornée, ou être vide.

</div>

Pour savoir de quel côté de la droite est le demi-plan, on teste un point, par exemple l'origine (si $c \neq 0$)&nbsp;: elle vérifie $a x + b y \le c$ quand $0 \le c$. Par exemple, $x + y \le 3$ et $x - y \ge 1$ définissent la région située en dessous de la première droite et au-dessous de la seconde, dont le sommet est le point $(2 ; 1)$ solution du système d'équations correspondant.

Dans la figure suivante, on entre les coefficients de deux relations $a x + b y \mathrel{\square} c$ et l'on choisit le symbole $=$, $\le$, $<$, $\ge$ ou $>$. Les droites sont tracées (en pointillés quand l'inégalité est stricte). Pour des équations, le point d'intersection est marqué&nbsp;; pour des inéquations, chaque demi-plan est teinté (en bleu et en rose) et leur intersection, l'ensemble des solutions, apparaît en vert.

<div class="fig">
<p class="fig-ctl"><span class="coef" style="color:#1D4ED8">(1)</span><span class="coef"><input type="number" step="0.5" value="1" id="sy-a1" aria-label="a1"> x</span> +<span class="coef"><input type="number" step="0.5" value="1" id="sy-b1" aria-label="b1"> y</span><select id="sy-o1" aria-label="symbole de la première relation"><option value="eq" selected>=</option><option value="le">≤</option><option value="lt">&lt;</option><option value="ge">≥</option><option value="gt">&gt;</option></select><span class="coef"><input type="number" step="0.5" value="3" id="sy-c1" aria-label="c1"></span></p>
<p class="fig-ctl"><span class="coef" style="color:#DC2626">(2)</span><span class="coef"><input type="number" step="0.5" value="1" id="sy-a2" aria-label="a2"> x</span> +<span class="coef"><input type="number" step="0.5" value="-1" id="sy-b2" aria-label="b2"> y</span><select id="sy-o2" aria-label="symbole de la seconde relation"><option value="eq" selected>=</option><option value="le">≤</option><option value="lt">&lt;</option><option value="ge">≥</option><option value="gt">&gt;</option></select><span class="coef"><input type="number" step="0.5" value="1" id="sy-c2" aria-label="c2"></span></p>
<p class="fig-ctl"><button type="button" data-sy="1,1,eq,3,1,-1,eq,1">solution unique</button><button type="button" data-sy="1,1,eq,3,1,1,eq,5">droites parallèles</button><button type="button" data-sy="1,1,eq,3,2,2,eq,6">droites confondues</button><button type="button" data-sy="1,1,le,3,1,-1,ge,1">deux demi-plans</button><button type="button" data-sy="1,1,le,1,1,1,ge,3">région vide</button><button type="button" data-sy="1,1,eq,3,1,-1,le,1">équation et inéquation</button></p>
<svg id="sy-svg" viewBox="0 0 330 320" role="img" aria-label="Deux droites, ou deux demi-plans, et leur intersection" style="max-width:340px;"></svg>
<p class="fig-val" id="sy-val"></p>
</div>
<script>
(function () {
  var ids = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2'], el = {}, svg = document.getElementById('sy-svg'), out = document.getElementById('sy-val');
  ids.forEach(function (k) { el[k] = document.getElementById('sy-' + k); });
  var o1 = document.getElementById('sy-o1'), o2 = document.getElementById('sy-o2');
  var M = 6, S = 300, X0 = 15, Y0 = 10, U = S / (2 * M);
  var SYM = { eq: '=', le: '≤', lt: '<', ge: '≥', gt: '>' };
  function fr(x, d) { if (Math.abs(x) < 0.5 * Math.pow(10, -d)) { x = 0; } var s = x.toFixed(d); if (s.indexOf('.') >= 0) { s = s.replace(/0+$/, '').replace(/\.$/, ''); } return s.replace('.', ',').replace('-', '−'); }
  function px(x) { return X0 + (x + M) * U; }
  function py(y) { return Y0 + (M - y) * U; }
  function bon(a, b, c, op, p) { var v = a * p[0] + b * p[1] - c; return op === 'le' || op === 'lt' ? c - a * p[0] - b * p[1] : v; }
  function coupe(P, a, b, c, op) {
    if (Math.abs(a) + Math.abs(b) < 1e-12) { return (op === 'le' || op === 'lt' ? 0 <= c : 0 >= c) ? P : []; }
    var R = [], i, n = P.length;
    for (i = 0; i < n; i++) {
      var A = P[i], B = P[(i + 1) % n], ga = bon(a, b, c, op, A), gb = bon(a, b, c, op, B);
      if (ga >= -1e-12) { R.push(A); }
      if ((ga > 1e-12 && gb < -1e-12) || (ga < -1e-12 && gb > 1e-12)) { var t = ga / (ga - gb); R.push([A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])]); }
    }
    return R;
  }
  function aire(P) { var s = 0, i; for (i = 0; i < P.length; i++) { var A = P[i], B = P[(i + 1) % P.length]; s += A[0] * B[1] - B[0] * A[1]; } return Math.abs(s) / 2; }
  function pts(P) { return P.map(function (p) { return px(p[0]).toFixed(1) + ',' + py(p[1]).toFixed(1); }).join(' '); }
  function segDroite(a, b, c) {
    if (Math.abs(a) + Math.abs(b) < 1e-12) { return null; }
    var n2 = a * a + b * b, p = [a * c / n2, b * c / n2], d = [-b, a], T = 40;
    return [[p[0] - T * d[0], p[1] - T * d[1]], [p[0] + T * d[0], p[1] + T * d[1]]];
  }
  function droiteDansCarre(a, b, c) {
    var s = segDroite(a, b, c); if (!s) { return null; }
    var P = [[-M, -M], [M, -M], [M, M], [-M, M]], t0 = -1e9, t1 = 1e9, n2 = a * a + b * b, p = [a * c / n2, b * c / n2], d = [-b, a], k;
    for (k = 0; k < 2; k++) {
      if (Math.abs(d[k]) < 1e-12) { if (p[k] < -M || p[k] > M) { return null; } continue; }
      var ta = (-M - p[k]) / d[k], tb = (M - p[k]) / d[k]; t0 = Math.max(t0, Math.min(ta, tb)); t1 = Math.min(t1, Math.max(ta, tb));
    }
    if (t0 > t1) { return null; }
    return [[p[0] + t0 * d[0], p[1] + t0 * d[1]], [p[0] + t1 * d[0], p[1] + t1 * d[1]]];
  }
  function dessiner() {
    var a1 = parseFloat(el.a1.value) || 0, b1 = parseFloat(el.b1.value) || 0, c1 = parseFloat(el.c1.value) || 0, a2 = parseFloat(el.a2.value) || 0, b2 = parseFloat(el.b2.value) || 0, c2 = parseFloat(el.c2.value) || 0;
    var s1 = o1.value, s2 = o2.value, h = '', i, carre = [[-M, -M], [M, -M], [M, M], [-M, M]];
    h += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    var ineq1 = s1 !== 'eq', ineq2 = s2 !== 'eq', H1 = ineq1 ? coupe(carre, a1, b1, c1, s1) : null, H2 = ineq2 ? coupe(carre, a2, b2, c2, s2) : null;
    if (H1 && H1.length) { h += '<polygon points="' + pts(H1) + '" fill="#1D4ED8" fill-opacity="0.12"/>'; }
    if (H2 && H2.length) { h += '<polygon points="' + pts(H2) + '" fill="#DC2626" fill-opacity="0.12"/>'; }
    var inter = null;
    if (ineq1 && ineq2) { inter = coupe(coupe(carre, a1, b1, c1, s1), a2, b2, c2, s2); if (inter.length) { h += '<polygon points="' + pts(inter) + '" fill="#006C65" fill-opacity="0.4"/>'; } }
    h += '<line x1="' + px(-M) + '" y1="' + py(0) + '" x2="' + px(M) + '" y2="' + py(0) + '" stroke="#64748B"/><line x1="' + px(0) + '" y1="' + py(-M) + '" x2="' + px(0) + '" y2="' + py(M) + '" stroke="#64748B"/>';
    for (i = -M + 1; i < M; i++) { if (i !== 0) { h += '<line x1="' + px(i) + '" y1="' + (py(0) - 3) + '" x2="' + px(i) + '" y2="' + (py(0) + 3) + '" stroke="#64748B"/><line x1="' + (px(0) - 3) + '" y1="' + py(i) + '" x2="' + (px(0) + 3) + '" y2="' + py(i) + '" stroke="#64748B"/>'; if (i % 2 === 0) { h += '<text x="' + px(i) + '" y="' + (py(0) + 15) + '" font-size="10" text-anchor="middle" fill="#475569" font-family="Georgia,serif">' + i + '</text><text x="' + (px(0) + 6) + '" y="' + (py(i) + 3) + '" font-size="10" fill="#475569" font-family="Georgia,serif">' + i + '</text>'; } } }
    function trait(a, b, c, op, col) {
      var d = droiteDansCarre(a, b, c); if (!d) { return ''; }
      return '<line x1="' + px(d[0][0]).toFixed(1) + '" y1="' + py(d[0][1]).toFixed(1) + '" x2="' + px(d[1][0]).toFixed(1) + '" y2="' + py(d[1][1]).toFixed(1) + '" stroke="' + col + '" stroke-width="2.4"' + (op === 'lt' || op === 'gt' ? ' stroke-dasharray="6 5"' : '') + '/>';
    }
    h += trait(a1, b1, c1, s1, '#1D4ED8') + trait(a2, b2, c2, s2, '#DC2626');
    var D = a1 * b2 - a2 * b1, txt = '', sol = null;
    if (Math.abs(D) > 1e-9) { sol = [(c1 * b2 - c2 * b1) / D, (a1 * c2 - a2 * c1) / D]; }
    if (sol && Math.abs(sol[0]) <= M && Math.abs(sol[1]) <= M) { h += '<circle cx="' + px(sol[0]).toFixed(1) + '" cy="' + py(sol[1]).toFixed(1) + '" r="5" fill="' + (!ineq1 && !ineq2 ? '#006C65' : '#fff') + '" stroke="#006C65" stroke-width="2"/>'; }
    /* ensemble des solutions */
    if (!ineq1 && !ineq2) {
      var deg1 = Math.abs(a1) + Math.abs(b1) < 1e-12, deg2 = Math.abs(a2) + Math.abs(b2) < 1e-12;
      if (sol) { txt = 'D = ' + fr(D, 2) + ' ≠ 0 : une unique solution, (x ; y) = (' + fr(sol[0], 3) + ' ; ' + fr(sol[1], 3) + ')'; }
      else if (deg1 && deg2) { txt = (Math.abs(c1) < 1e-12 && Math.abs(c2) < 1e-12) ? 'tout le plan est solution' : 'aucune solution'; }
      else if (deg1 || deg2) { var okc = deg1 ? Math.abs(c1) < 1e-12 : Math.abs(c2) < 1e-12; txt = okc ? 'une relation est toujours vraie : les solutions sont tous les points de la droite de l\'autre relation (une infinité)' : 'une relation est impossible : aucune solution'; }
      else if (Math.abs(a1 * c2 - a2 * c1) < 1e-9 && Math.abs(b1 * c2 - b2 * c1) < 1e-9) { txt = 'D = 0, droites confondues : une infinité de solutions (tous les points de la droite)'; h += '<g opacity="0.45">' + trait(a1, b1, c1, 'eq', '#006C65').replace('stroke-width="2.4"', 'stroke-width="9"') + '</g>'; }
      else { txt = 'D = 0, droites parallèles et distinctes : aucune solution'; }
    } else if (ineq1 && ineq2) {
      var A = inter.length > 2 ? aire(inter) : 0;
      txt = A > 1e-6 ? 'intersection des deux demi-plans : région non vide' + (sol ? ', de sommet (' + fr(sol[0], 3) + ' ; ' + fr(sol[1], 3) + ')' : '') + (inter.some(function (p) { return Math.abs(p[0]) >= M - 1e-9 || Math.abs(p[1]) >= M - 1e-9; }) ? ' (elle sort de la fenêtre : région non bornée)' : '') : (inter.length ? 'les demi-plans ne se rencontrent que le long d\'une droite ou en un point' : 'les demi-plans n\'ont aucun point commun : aucune solution');
    } else {
      var e = ineq1 ? [a2, b2, c2] : [a1, b1, c1], q = ineq1 ? [a1, b1, c1, s1] : [a2, b2, c2, s2], dd = droiteDansCarre(e[0], e[1], e[2]);
      if (Math.abs(e[0]) + Math.abs(e[1]) < 1e-12) { txt = 'l\'équation 0 = c est ' + (Math.abs(e[2]) < 1e-12 ? 'toujours vraie : les solutions forment le demi-plan' : 'impossible : aucune solution'); }
      else {
        var n2 = e[0] * e[0] + e[1] * e[1], p0 = [e[0] * e[2] / n2, e[1] * e[2] / n2], dv = [-e[1], e[0]], g0 = bon(q[0], q[1], q[2], q[3], p0), g1 = q[3] === 'le' || q[3] === 'lt' ? -(q[0] * dv[0] + q[1] * dv[1]) : q[0] * dv[0] + q[1] * dv[1], t0 = -1e9, t1 = 1e9;
        if (Math.abs(g1) < 1e-12) { if (g0 < 0) { t0 = 1; t1 = 0; } } else { var t = -g0 / g1; if (g1 > 0) { t0 = t; } else { t1 = t; } }
        if (t0 > t1) { txt = 'aucune solution : la droite est entièrement hors du demi-plan'; }
        else {
          var seg = [[p0[0] + Math.max(t0, -40) * dv[0], p0[1] + Math.max(t0, -40) * dv[1]], [p0[0] + Math.min(t1, 40) * dv[0], p0[1] + Math.min(t1, 40) * dv[1]]];
          h += '<line x1="' + px(seg[0][0]).toFixed(1) + '" y1="' + py(seg[0][1]).toFixed(1) + '" x2="' + px(seg[1][0]).toFixed(1) + '" y2="' + py(seg[1][1]).toFixed(1) + '" stroke="#006C65" stroke-width="7" opacity="0.6" clip-path="url(#sy-cl)"/>';
          txt = 'les solutions sont les points de la droite (' + (ineq1 ? '2' : '1') + ') qui sont dans le demi-plan (' + (ineq1 ? '1' : '2') + ') : une demi-droite ou toute la droite';
        }
      }
    }
    svg.innerHTML = '<defs><clipPath id="sy-cl"><rect x="' + X0 + '" y="' + Y0 + '" width="' + S + '" height="' + S + '"/></clipPath></defs>' + h;
    out.innerHTML = txt;
  }
  ids.forEach(function (k) { el[k].addEventListener('input', dessiner); });
  [o1, o2].forEach(function (s) { s.addEventListener('change', dessiner); });
  Array.prototype.forEach.call(document.querySelectorAll('button[data-sy]'), function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-sy').split(',');
      el.a1.value = v[0]; el.b1.value = v[1]; o1.value = v[2]; el.c1.value = v[3]; el.a2.value = v[4]; el.b2.value = v[5]; o2.value = v[6]; el.c2.value = v[7]; dessiner();
    });
  });
  dessiner();
})();
</script>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube tLwoouhIXyM>}}
</div>

## Le second degré

### Dans les réels : le discriminant

Pour un polynôme du second degré $a x^2 + b x + c$, la méthode de la balance ne suffit plus, puisque l'inconnue apparaît deux fois (en $x$ et en $x^2$). On se ramène à un carré.

<div class="bloc bloc-theo">
<div class="bloc-titre">Équation du second degré dans les réels</div>

Soit $a x^2 + b x + c = 0$ avec $a \neq 0$, et $\Delta = b^2 - 4ac$ son **discriminant**.

- Si $\Delta > 0$, il y a deux solutions réelles $x_{\pm} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$.
- Si $\Delta = 0$, il y a une solution double $x = -\dfrac{b}{2a}$.
- Si $\Delta < 0$, il n'y a aucune solution réelle.

</div>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration (forme canonique)</div>

On met $a$ en facteur et l'on complète le carré&nbsp;:
$$a x^2 + b x + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{\Delta}{4a^2}\right].$$
L'équation s'écrit alors $\left(x + \frac{b}{2a}\right)^2 = \frac{\Delta}{4a^2}$. Un carré de réel est positif ou nul&nbsp;: si $\Delta > 0$, on extrait la racine carrée et l'on obtient deux solutions&nbsp;; si $\Delta = 0$, il n'y en a qu'une&nbsp;; si $\Delta < 0$, le membre de droite est négatif et aucun réel ne convient.

</div>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube _Hk1F35MLr4>}}
</div>

La forme canonique donne aussi le signe du trinôme, donc la solution des inéquations du second degré.

<div class="bloc bloc-prop">
<div class="bloc-titre">Signe d'un trinôme du second degré</div>

Soit $T(x) = a x^2 + b x + c$ avec $a \neq 0$.

- Si $\Delta > 0$, de racines $x_1 < x_2$, $T(x)$ a le signe de $a$ à l'extérieur de $[x_1 ; x_2]$ et le signe opposé à l'intérieur.
- Si $\Delta = 0$, $T(x)$ a le signe de $a$ partout, sauf en la racine double où il s'annule.
- Si $\Delta < 0$, $T(x)$ a le signe de $a$ pour tout réel $x$.

</div>

On le voit sur la parabole $y = T(x)$, tournée vers le haut si $a > 0$ et vers le bas si $a < 0$&nbsp;: elle est au-dessus de l'axe des abscisses là où $T > 0$. Par exemple, $x^2 - 3x + 2 < 0$ a pour discriminant $1$ et pour racines $1$ et $2$, avec $a = 1 > 0$&nbsp;: le trinôme est négatif entre les racines, d'où la solution $]1 ; 2[$.

<details class="encadre">
<summary class="encadre-titre">Babylone, al-Khwârizmî, Viète</summary>
<p>Des tablettes mésopotamiennes d'environ $1800$ av. J.-C. (comme BM 13901) contiennent des problèmes équivalents à des équations du second degré, résolus en complétant le carré, sans notation littérale. Vers $825$, al-Khwârizmî a écrit à Bagdad un traité sur la résolution des équations, <i>al-jabr wa-l-muqābala</i> («&nbsp;la restauration et la réduction&nbsp;»), qui a donné son nom à l'algèbre (et le sien à l'algorithme). Il ne disposait pas des nombres négatifs&nbsp;: il traitait séparément les différents cas d'équations. François Viète a introduit en $1591$ l'usage de lettres pour les inconnues et pour les coefficients, ce qui a permis d'écrire des formules générales et de découvrir des relations comme celles qui portent son nom.</p>
</details>

### Dans les complexes : quand le discriminant est négatif

Jusque-là, rien de bien folichon... Mais si on libère la variable de nos polynômes en lui permettant de se balader dans l'espace des complexes, tout devient plus sympa. Déjà, plus d'histoires de 0, 1 ou 2 solutions pour un polynôme de degré 2... En complexe, un polynôme de degré 2 a toujours 2 solutions. C'est quand même plus propre comme ça. Et d'ailleurs, un polynôme de degré n a toujours n racines et peut donc se factoriser en n polynômes de degré 1. C'est le **théorème fondamental de l'algèbre**.

{{% notice type="note" round="true" %}}
[Jolie série de vidéos](https://www.youtube.com/playlist?list=PLiaHhY2iBX9g6KIvZ_703G3KJXapKkNaF) sur les complexes.
{{% /notice %}}

<div class="bloc bloc-theo">
<div class="bloc-titre">Équation du second degré dans les complexes</div>

Soit $a x^2 + b x + c = 0$ avec $a \neq 0$ et $\Delta = b^2 - 4ac$. Dans $\mathbb{C}$, l'équation a toujours deux racines (confondues si $\Delta = 0$)&nbsp;:
$$x_{\pm} = \frac{-b \pm \delta}{2a}, \qquad \text{où } \delta^2 = \Delta.$$
Si les coefficients sont réels et $\Delta < 0$, on prend $\delta = \mathrm{i}\sqrt{-\Delta}$, et les deux racines sont **complexes conjuguées**&nbsp;: $x_{\pm} = \dfrac{-b \pm \mathrm{i}\sqrt{-\Delta}}{2a}$.

</div>

La démonstration est la même, avec une racine carrée complexe quand $\Delta$ est négatif&nbsp;: le nombre $\mathrm{i}\sqrt{-\Delta}$ a pour carré $-(-\Delta) = \Delta$. Dans la figure suivante, on fait varier les coefficients. À gauche, la parabole $y = ax^2 + bx + c$&nbsp;; à droite, le plan complexe où se placent les racines. Quand la parabole ne coupe plus l'axe des abscisses, les deux racines quittent l'axe réel et se placent de part et d'autre, à des positions conjuguées.

<div class="fig">
<p class="fig-ctl"><label for="sd-a">$a$ = <span id="sd-av"></span></label><input type="range" id="sd-a" min="-2" max="2" step="0.1" value="1"></p>
<p class="fig-ctl"><label for="sd-b">$b$ = <span id="sd-bv"></span></label><input type="range" id="sd-b" min="-6" max="6" step="0.1" value="1"></p>
<p class="fig-ctl"><label for="sd-c">$c$ = <span id="sd-cv"></span></label><input type="range" id="sd-c" min="-6" max="6" step="0.1" value="2"></p>
<svg id="sd-svg" viewBox="0 0 460 250" role="img" aria-label="Une parabole et, à côté, les racines de l'équation dans le plan complexe"></svg>
<p class="fig-val" id="sd-val"></p>
</div>
<script>
(function () {
  var sa = document.getElementById('sd-a'), sb = document.getElementById('sd-b'), sc = document.getElementById('sd-c');
  var svg = document.getElementById('sd-svg'), out = document.getElementById('sd-val');
  var LX = 10, LY = 20, RX = 250, S = 200, U = 20;
  function fr(x, d) { if (Math.abs(x) < 0.5 * Math.pow(10, -d)) { x = 0; } return x.toFixed(d).replace('.', ',').replace('-', '−'); }
  function T(x, y, t, col, anc, sz) { return '<text x="' + x + '" y="' + y + '" font-size="' + (sz || 12) + '" text-anchor="' + (anc || 'middle') + '" fill="' + col + '" font-family="Georgia,serif" font-style="italic">' + t + '</text>'; }
  function dessiner() {
    var a = parseFloat(sa.value); if (Math.abs(a) < 0.05) { a = 0.1; }
    var b = parseFloat(sb.value), c = parseFloat(sc.value), D = b * b - 4 * a * c;
    document.getElementById('sd-av').textContent = fr(a, 1); document.getElementById('sd-bv').textContent = fr(b, 1); document.getElementById('sd-cv').textContent = fr(c, 1);
    var h = '<defs><clipPath id="sd-cl"><rect x="' + LX + '" y="' + LY + '" width="' + S + '" height="' + S + '"/></clipPath></defs>';
    h += '<rect x="' + LX + '" y="' + LY + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    h += '<rect x="' + RX + '" y="' + LY + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    var cx = LX + S / 2, cy = LY + S / 2, rx = RX + S / 2;
    h += '<line x1="' + LX + '" y1="' + cy + '" x2="' + (LX + S) + '" y2="' + cy + '" stroke="#94A3B8"/><line x1="' + cx + '" y1="' + LY + '" x2="' + cx + '" y2="' + (LY + S) + '" stroke="#94A3B8"/>';
    h += '<line x1="' + RX + '" y1="' + cy + '" x2="' + (RX + S) + '" y2="' + cy + '" stroke="#94A3B8"/><line x1="' + rx + '" y1="' + LY + '" x2="' + rx + '" y2="' + (LY + S) + '" stroke="#94A3B8"/>';
    var i, d = '';
    for (i = -5; i <= 5; i++) {
      h += '<line x1="' + (cx + i * U) + '" y1="' + (cy - 3) + '" x2="' + (cx + i * U) + '" y2="' + (cy + 3) + '" stroke="#94A3B8"/><line x1="' + (rx + i * U) + '" y1="' + (cy - 3) + '" x2="' + (rx + i * U) + '" y2="' + (cy + 3) + '" stroke="#94A3B8"/><line x1="' + (rx - 3) + '" y1="' + (cy + i * U) + '" x2="' + (rx + 3) + '" y2="' + (cy + i * U) + '" stroke="#94A3B8"/>';
      if (i !== 0 && i % 2 === 0) { h += T(cx + i * U, cy + 15, i, '#64748B', 'middle', 10) + T(rx + i * U, cy + 15, i, '#64748B', 'middle', 10); }
    }
    for (i = 0; i <= 200; i++) { var x = -5 + i * 0.05, y = a * x * x + b * x + c; d += (i ? 'L' : 'M') + (cx + x * U).toFixed(1) + ',' + (cy - y * 10).toFixed(1); }
    h += '<path d="' + d + '" fill="none" stroke="#004D80" stroke-width="2.4" clip-path="url(#sd-cl)"/>';
    h += T(LX + 4, LY + S - 6, 'y = ax² + bx + c', '#004D80', 'start', 11) + T(RX + S - 4, LY + 12, 'plan complexe', '#475569', 'end', 11) + T(RX + S - 4, cy - 4, 'Re', '#64748B', 'end', 10) + T(rx + 4, LY + 22, 'Im', '#64748B', 'start', 10);
    var txt;
    function pt(re, im, col) {
      var X = rx + re * U, Y = cy - im * U;
      if (Math.abs(re) <= 5.2 && Math.abs(im) <= 5.2) { return '<circle cx="' + X.toFixed(1) + '" cy="' + Y.toFixed(1) + '" r="5" fill="' + col + '" stroke="#fff" stroke-width="1.2"/>'; }
      return '';
    }
    if (D >= 0) {
      var r1 = (-b - Math.sqrt(D)) / (2 * a), r2 = (-b + Math.sqrt(D)) / (2 * a);
      [r1, r2].forEach(function (r) { if (Math.abs(r) <= 5.2) { h += '<circle cx="' + (cx + r * U).toFixed(1) + '" cy="' + cy + '" r="5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>'; } h += pt(r, 0, '#C2770B'); });
      txt = D > 0 ? 'Δ = ' + fr(D, 2) + ' &gt; 0 : deux racines réelles, x = ' + fr(r1, 3) + ' et x = ' + fr(r2, 3) : 'Δ = 0 : une racine double, x = ' + fr(r1, 3);
    } else {
      var re = -b / (2 * a), im = Math.sqrt(-D) / (2 * Math.abs(a));
      h += pt(re, im, '#970E53') + pt(re, -im, '#970E53');
      txt = 'Δ = ' + fr(D, 2) + ' &lt; 0 : pas de racine réelle, deux racines complexes ' + fr(re, 3) + ' ± ' + fr(im, 3) + ' i';
    }
    svg.innerHTML = h;
    out.innerHTML = txt;
  }
  [sa, sb, sc].forEach(function (e) { e.addEventListener('input', dessiner); });
  dessiner();
})();
</script>

<div class="bloc bloc-prop">
<div class="bloc-titre">Relations de Viète</div>

Si $x_1$ et $x_2$ sont les racines (réelles ou complexes) de $a x^2 + b x + c = 0$, alors
$$x_1 + x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}.$$
Plus généralement, pour un polynôme $P(x) = a_n (x - x_1)(x - x_2)\cdots(x - x_n)$, la somme des racines vaut $-\frac{a_{n-1}}{a_n}$ et leur produit $(-1)^n\frac{a_0}{a_n}$.

</div>

En effet, $a(x - x_1)(x - x_2) = a x^2 - a(x_1 + x_2)x + a x_1 x_2$, et l'on identifie les coefficients. Ces relations permettent de trouver deux nombres à partir de leur somme $s$ et de leur produit $p$&nbsp;: ce sont les racines de $x^2 - s x + p = 0$.

## Le troisième et le quatrième degré : Cardan et Ferrari

Pour le second degré, la formule ne mobilise que des racines carrées. Pour le troisième degré, il faut des racines cubiques, et la formule met en jeu des nombres complexes dans un cas où toutes les racines sont réelles.

<div class="bloc bloc-theo">
<div class="bloc-titre">Formule de Cardan</div>

Soit l'équation $t^3 + p t + q = 0$ avec $p$ et $q$ réels, et $D = \dfrac{q^2}{4} + \dfrac{p^3}{27}$. On pose
$$u^3 = -\frac{q}{2} + \sqrt{D}, \qquad v = -\frac{p}{3u}.$$
Alors les trois racines sont $t_0 = u + v$, $t_1 = \omega u + \omega^2 v$ et $t_2 = \omega^2 u + \omega v$, où $\omega = \mathrm{e}^{2\mathrm{i}\pi/3}$. Si $D > 0$, il y a une racine réelle et deux complexes conjuguées&nbsp;; si $D = 0$, une racine est multiple&nbsp;; si $D < 0$, il y a trois racines réelles distinctes.

</div>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration de la formule de Cardan</div>

On cherche $t$ sous la forme $t = u + v$. Alors $t^3 = u^3 + v^3 + 3uv(u + v)$, c'est-à-dire $t^3 - 3uvt - (u^3 + v^3) = 0$. Cette équation est celle de départ si $uv = -\frac{p}{3}$ et $u^3 + v^3 = -q$. Les nombres $u^3$ et $v^3$ ont donc pour somme $-q$ et pour produit $(uv)^3 = -\frac{p^3}{27}$&nbsp;: ce sont les racines de $z^2 + q z - \frac{p^3}{27} = 0$, soit $-\frac{q}{2} \pm \sqrt{D}$. Les deux autres racines se déduisent des deux autres racines cubiques de l'unité, qui multiplient $u$ par $\omega$ et $v$ par $\omega^2$ (pour que $uv$ reste égal à $-\frac{p}{3}$).

</div>

Une équation générale $a x^3 + b x^2 + c x + d = 0$ se ramène à ce cas par le changement de variable $x = t - \frac{b}{3a}$, qui supprime le terme en $x^2$ (on obtient $p = \frac{3ac - b^2}{3a^2}$ et $q = \frac{2b^3 - 9abc + 27a^2 d}{27a^3}$).

Dans la figure suivante, on choisit $p$ et $q$. À gauche, la courbe $y = t^3 + pt + q$&nbsp;; à droite, les trois racines dans le plan complexe. Le texte donne les valeurs intermédiaires de la formule.

<div class="fig">
<p class="fig-ctl"><label for="cd-p">$p$ = <span id="cd-pv"></span></label><input type="range" id="cd-p" min="-20" max="20" step="0.5" value="-15"></p>
<p class="fig-ctl"><label for="cd-q">$q$ = <span id="cd-qv"></span></label><input type="range" id="cd-q" min="-20" max="20" step="0.5" value="-4"></p>
<p class="fig-ctl"><button type="button" data-cd="-15,-4">t³ = 15t + 4 (Bombelli)</button><button type="button" data-cd="3,-4">t³ + 3t = 4</button><button type="button" data-cd="1,1">t³ + t + 1 = 0</button><button type="button" data-cd="-3,2">t³ − 3t + 2 = 0 (racine double)</button></p>
<svg id="cd-svg" viewBox="0 0 460 250" role="img" aria-label="Courbe d'un polynôme de degré 3 et ses trois racines dans le plan complexe"></svg>
<p class="fig-val" id="cd-val"></p>
</div>
<script>
(function () {
  var sp = document.getElementById('cd-p'), sq = document.getElementById('cd-q'), svg = document.getElementById('cd-svg'), out = document.getElementById('cd-val');
  var LX = 10, LY = 20, RX = 250, S = 200, U = 20;
  function fr(x, d) { if (Math.abs(x) < 0.5 * Math.pow(10, -d)) { x = 0; } return x.toFixed(d).replace('.', ',').replace('-', '−'); }
  function cx(z, d) { var r = fr(z[0], d), i = fr(Math.abs(z[1]), d); if (Math.abs(z[1]) < 0.5 * Math.pow(10, -d)) { return r; } return r + (z[1] < 0 ? ' − ' : ' + ') + i + ' i'; }
  function mul(a, b) { return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]; }
  function add(a, b) { return [a[0] + b[0], a[1] + b[1]]; }
  function div(a, b) { var d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; }
  function cbrt(z) {
    if (Math.abs(z[1]) < 1e-12) { return [Math.cbrt(z[0]), 0]; }
    var r = Math.cbrt(Math.hypot(z[0], z[1])), th = Math.atan2(z[1], z[0]) / 3;
    return [r * Math.cos(th), r * Math.sin(th)];
  }
  function T(x, y, t, col, anc, sz) { return '<text x="' + x + '" y="' + y + '" font-size="' + (sz || 12) + '" text-anchor="' + (anc || 'middle') + '" fill="' + col + '" font-family="Georgia,serif" font-style="italic">' + t + '</text>'; }
  function dessiner() {
    var p = parseFloat(sp.value), q = parseFloat(sq.value), D = q * q / 4 + p * p * p / 27;
    document.getElementById('cd-pv').textContent = fr(p, 1); document.getElementById('cd-qv').textContent = fr(q, 1);
    var sD = D >= 0 ? [Math.sqrt(D), 0] : [0, Math.sqrt(-D)];
    var u3 = [-q / 2 + sD[0], sD[1]];
    if (Math.hypot(u3[0], u3[1]) < 1e-9) { u3 = [-q / 2 - sD[0], -sD[1]]; }
    var u = cbrt(u3), v = Math.hypot(u[0], u[1]) < 1e-9 ? [0, 0] : div([-p / 3, 0], u);
    var w = [-0.5, Math.sqrt(3) / 2], w2 = [-0.5, -Math.sqrt(3) / 2];
    var roots = [add(u, v), add(mul(w, u), mul(w2, v)), add(mul(w2, u), mul(w, v))];
    var h = '<defs><clipPath id="cd-cl"><rect x="' + LX + '" y="' + LY + '" width="' + S + '" height="' + S + '"/></clipPath></defs>';
    h += '<rect x="' + LX + '" y="' + LY + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/><rect x="' + RX + '" y="' + LY + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    var cx0 = LX + S / 2, cy = LY + S / 2, rx = RX + S / 2, i, d = '';
    h += '<line x1="' + LX + '" y1="' + cy + '" x2="' + (LX + S) + '" y2="' + cy + '" stroke="#94A3B8"/><line x1="' + cx0 + '" y1="' + LY + '" x2="' + cx0 + '" y2="' + (LY + S) + '" stroke="#94A3B8"/><line x1="' + RX + '" y1="' + cy + '" x2="' + (RX + S) + '" y2="' + cy + '" stroke="#94A3B8"/><line x1="' + rx + '" y1="' + LY + '" x2="' + rx + '" y2="' + (LY + S) + '" stroke="#94A3B8"/>';
    for (i = -5; i <= 5; i++) { h += '<line x1="' + (cx0 + i * U) + '" y1="' + (cy - 3) + '" x2="' + (cx0 + i * U) + '" y2="' + (cy + 3) + '" stroke="#94A3B8"/><line x1="' + (rx + i * U) + '" y1="' + (cy - 3) + '" x2="' + (rx + i * U) + '" y2="' + (cy + 3) + '" stroke="#94A3B8"/><line x1="' + (rx - 3) + '" y1="' + (cy + i * U) + '" x2="' + (rx + 3) + '" y2="' + (cy + i * U) + '" stroke="#94A3B8"/>'; if (i !== 0 && i % 2 === 0) { h += T(cx0 + i * U, cy + 15, i, '#64748B', 'middle', 10) + T(rx + i * U, cy + 15, i, '#64748B', 'middle', 10); } }
    for (i = 0; i <= 200; i++) { var x = -5 + i * 0.05, y = x * x * x + p * x + q; d += (i ? 'L' : 'M') + (cx0 + x * U).toFixed(1) + ',' + (cy - y * 3).toFixed(1); }
    h += '<path d="' + d + '" fill="none" stroke="#004D80" stroke-width="2.4" clip-path="url(#cd-cl)"/>';
    h += T(LX + 4, LY + S - 6, 'y = t³ + pt + q', '#004D80', 'start', 11) + T(RX + S - 4, LY + 12, 'plan complexe', '#475569', 'end', 11);
    roots.forEach(function (z) {
      var reel = Math.abs(z[1]) < 1e-6;
      if (reel && Math.abs(z[0]) <= 5.2) { h += '<circle cx="' + (cx0 + z[0] * U).toFixed(1) + '" cy="' + cy + '" r="5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>'; }
      if (Math.abs(z[0]) <= 5.2 && Math.abs(z[1]) <= 5.2) { h += '<circle cx="' + (rx + z[0] * U).toFixed(1) + '" cy="' + (cy - z[1] * U).toFixed(1) + '" r="5" fill="' + (reel ? '#C2770B' : '#970E53') + '" stroke="#fff" stroke-width="1.2"/>'; }
    });
    svg.innerHTML = h;
    out.innerHTML = 'D = ' + fr(D, 2) + (D > 1e-9 ? ' &gt; 0 : une racine réelle' : D < -1e-9 ? ' &lt; 0 : trois racines réelles' : ' = 0 : racine multiple') + '<br>u³ = ' + cx(u3, 3) + ' &nbsp; u = ' + cx(u, 3) + ' &nbsp; v = ' + cx(v, 3) + '<br>racines : ' + roots.map(function (z) { return cx(z, 3); }).join(' &nbsp;;&nbsp; ');
  }
  [sp, sq].forEach(function (e) { e.addEventListener('input', dessiner); });
  Array.prototype.forEach.call(document.querySelectorAll('button[data-cd]'), function (b) {
    b.addEventListener('click', function () { var v = b.getAttribute('data-cd').split(','); sp.value = v[0]; sq.value = v[1]; dessiner(); });
  });
  dessiner();
})();
</script>

Le cas $t^3 = 15t + 4$ est celui de Bombelli (1572). On vérifie à la main que $t = 4$ est une racine ($64 = 60 + 4$), et pourtant la formule donne $D = 2^2 + \frac{(-15)^3}{27} = -121 < 0$, donc $u^3 = 2 + \sqrt{-121} = 2 + 11\mathrm{i}$. Bombelli a remarqué que $(2 + \mathrm{i})^3 = 2 + 11\mathrm{i}$, donc $u = 2 + \mathrm{i}$ et $v = 2 - \mathrm{i}$, et $t = u + v = 4$&nbsp;: les parties imaginaires se compensent. C'est le <b>casus irreducibilis</b>&nbsp;: pour obtenir un résultat réel avec la formule, il faut passer par les nombres complexes, ce qui est l'une des raisons historiques de leur acceptation.

<details class="encadre">
<summary class="encadre-titre">Del Ferro, Tartaglia, Cardan et Ferrari : une querelle de priorité</summary>
<p>Scipione del Ferro, à Bologne, a résolu vers $1515$ les équations du type $x^3 + px = q$, et a gardé le secret. Niccolò Tartaglia l'a retrouvée en $1535$, à l'occasion d'un défi public. Girolamo Cardan lui a arraché la formule en lui promettant de ne pas la divulguer, puis l'a publiée en $1545$ dans l'<i>Ars Magna</i>, en citant ses sources, ce qui a déclenché une longue querelle. Dans le même livre figure la résolution du quatrième degré, due à Lodovico Ferrari, l'élève de Cardan. Les nombres négatifs n'étaient pas encore acceptés, ce qui obligeait à distinguer une douzaine de cas pour le troisième degré.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Ferrari : ramener le quatrième degré au troisième</summary>
<p>Une équation du quatrième degré se ramène à $x^4 + p x^2 + q x + r = 0$ par un changement de variable. Ferrari l'écrit $x^4 = -p x^2 - q x - r$ et ajoute un paramètre $y$ des deux côtés&nbsp;:
$$\left(x^2 + \frac{p}{2} + y\right)^2 = 2y\,x^2 - q x + \left(\frac{p}{2} + y\right)^2 - r.$$
Le membre de droite est un polynôme du second degré en $x$&nbsp;; c'est un carré parfait quand son discriminant est nul, ce qui donne l'équation $q^2 = 8y\left[\left(\frac{p}{2} + y\right)^2 - r\right]$, du troisième degré en $y$ (la «&nbsp;résolvante&nbsp;»). On la résout par la formule de Cardan, puis l'équation de départ devient $(\text{carré})^2 = (\text{carré})^2$, c'est-à-dire deux équations du second degré.</p>
</details>

<table class="tbl">
<tr><th>degré</th><th>formule en radicaux</th><th>date</th></tr>
<tr><td>1</td><td>$x = -\frac{b}{a}$</td><td>Antiquité</td></tr>
<tr><td>2</td><td>discriminant</td><td>Antiquité, ~1800 av. J.-C.</td></tr>
<tr><td>3</td><td>Cardan</td><td>1545</td></tr>
<tr><td>4</td><td>Ferrari</td><td>1545</td></tr>
<tr><td>$\ge 5$</td><td>aucune en général</td><td>Abel, 1824</td></tr>
</table>

## Le cinquième degré : Abel, Ruffini et Galois

Après les degrés trois et quatre, on a cherché pendant près de trois siècles une formule pour le degré cinq. La réponse a été négative.

<div class="bloc bloc-theo">
<div class="bloc-titre">Théorème d'Abel-Ruffini</div>

Il n'existe pas de formule générale qui exprime les racines d'une équation polynomiale de degré $n \ge 5$ à partir de ses coefficients avec les seules opérations $+$, $-$, $\times$, $\div$ et les extractions de racines (les «&nbsp;radicaux&nbsp;»).

</div>

Paolo Ruffini en a proposé une preuve en 1799, jugée incomplète, et Niels Henrik Abel en a donné une preuve complète en 1824. Il ne dit pas que les équations de degré cinq n'ont pas de racines (le théorème fondamental de l'algèbre en garantit cinq), ni qu'aucune n'est exprimable avec des radicaux&nbsp;: $x^5 - 1 = 0$ ou $x^5 - 2 = 0$ le sont. Il dit qu'aucune formule ne vaut pour toutes.

<div class="bloc bloc-def">
<div class="bloc-titre">Résolubilité par radicaux (Galois)</div>

Évariste Galois (1830-1832) a associé à chaque équation un groupe fini de permutations de ses racines, son **groupe de Galois**. L'équation est résoluble par radicaux si et seulement si ce groupe est **résoluble** (on peut le construire par une suite de groupes dont les quotients successifs sont commutatifs). Le groupe de toutes les permutations de $n$ objets, $S_n$, est résoluble pour $n \le 4$ et ne l'est plus pour $n \ge 5$.

</div>

Le groupe de Galois d'une équation «&nbsp;générique&nbsp;» de degré $n$ est $S_n$, d'où l'impossibilité pour $n \ge 5$. Un exemple concret est $x^5 - x - 1 = 0$, dont le groupe de Galois est $S_5$&nbsp;: aucune expression à base de radicaux ne donne sa racine réelle, qui vaut environ $1{,}1673$. Le groupe $A_5$ des permutations paires de cinq objets, de $60$ éléments, est le plus petit groupe non commutatif sans sous-groupe distingué non trivial («&nbsp;simple&nbsp;»)&nbsp;; c'est aussi le groupe des rotations de l'icosaèdre. Voir la page sur les <a href="../groupes/">groupes</a>.

<details class="encadre">
<summary class="encadre-titre">Résoudre le cinquième degré malgré tout</summary>
<p>L'impossibilité ne concerne que les radicaux. En 1858, Charles Hermite a montré qu'on peut résoudre l'équation générale du cinquième degré avec des fonctions elliptiques, après l'avoir ramenée à la forme $x^5 - x + a = 0$ (forme de Bring-Jerrard). Et l'on peut toujours calculer les racines avec autant de décimales qu'on veut, par des méthodes numériques comme celle de la section suivante. Le théorème d'Abel est aussi une réussite de la méthode de Galois&nbsp;: pour comprendre une équation, on étudie la symétrie de ses racines, ce qui est à l'origine de la théorie des groupes.</p>
</details>

## Le théorème fondamental de l'algèbre

<div class="bloc bloc-theo">
<div class="bloc-titre">Théorème de d'Alembert-Gauss</div>

Tout polynôme non constant à coefficients complexes admet au moins une racine complexe. Par conséquent, un polynôme de degré $n$ s'écrit
$$P(z) = a_n (z - z_1)(z - z_2)\cdots(z - z_n),$$
où $z_1, \dots, z_n$ sont ses $n$ racines complexes, comptées avec leur multiplicité.

</div>

Le résultat a été énoncé par d'Alembert en 1746, et démontré avec une rigueur croissante par Gauss, dont la thèse de 1799 donne la première preuve, et par Argand en 1806. Il fait des nombres complexes un corps «&nbsp;algébriquement clos&nbsp;»&nbsp;: aucune équation polynomiale n'oblige à inventer de nouveaux nombres.

<details class="encadre">
<summary class="encadre-titre">Pourquoi y a-t-il toujours une racine&nbsp;?</summary>
<p>Voici l'idée de la preuve d'Argand. Quand $|z|$ est grand, $|P(z)|$ est grand (c'est le terme de plus haut degré qui domine), donc la fonction $z \mapsto |P(z)|$ atteint un minimum en un point $z_0$. Supposons $P(z_0) \neq 0$. Au voisinage de $z_0$, $P(z) \approx P(z_0) + c\,(z - z_0)^k$, où $c \neq 0$ et $k \ge 1$ est le premier degré non nul du développement. On peut choisir la direction de $z - z_0$ (en tournant dans le plan complexe) pour que le terme correctif soit de signe opposé à $P(z_0)$, ce qui fait baisser $|P|$ en dessous de sa valeur minimale. Cette contradiction montre que $P(z_0) = 0$.</p>
</details>

<div class="bloc bloc-prop">
<div class="bloc-titre">Racines conjuguées</div>

Si les coefficients de $P$ sont réels et si $z$ est une racine, alors son conjugué $\overline{z}$ est aussi une racine, avec la même multiplicité. Ainsi, les racines non réelles d'un polynôme réel vont par paires conjuguées, et un polynôme réel de degré impair a au moins une racine réelle.

</div>

La raison est que $P(\overline{z}) = \overline{P(z)}$ quand les coefficients sont réels. Il en résulte que tout polynôme réel se factorise en polynômes réels de degré $1$ et $2$ (un facteur du second degré $(z - w)(z - \overline{w})$ pour chaque paire de racines conjuguées).

<div class="bloc bloc-def">
<div class="bloc-titre">Racines de l'unité</div>

Les solutions de $z^n = 1$ sont les $n$ nombres $\mathrm{e}^{2\mathrm{i}k\pi/n}$ pour $k = 0, 1, \dots, n - 1$, les **racines $n$-ièmes de l'unité**. Ce sont les sommets d'un polygone régulier à $n$ côtés inscrit dans le cercle unité, et leur somme est nulle pour $n \ge 2$.

</div>

On le voit avec les relations de Viète&nbsp;: dans $z^n - 1$, le coefficient de $z^{n-1}$ est nul, donc la somme des racines l'est aussi. Les racines de l'unité sont aussi à la base de la transformée de Fourier rapide (voir <a href="../fft/">FFT et polynômes</a>) et des entiers algébriques (voir <a href="../../arithmetique/complexes/">les complexes</a>).

### Explorateur de racines

Dans la figure suivante, on choisit un polynôme à coefficients réels, de degré au plus $6$. Le plan complexe montre ses racines, calculées numériquement (méthode de Durand-Kerner). Les racines réelles sont en orange, les autres en rose, et le cercle pointillé est le cercle unité. En changeant un coefficient, on voit les racines bouger&nbsp;: elles se rencontrent sur l'axe réel puis quittent l'axe par paires conjuguées.

<div class="fig">
<p class="fig-ctl"><label>Degré&nbsp;: <select id="ex-deg"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option><option>6</option></select></label></p>
<p class="fig-ctl" id="ex-coef"></p>
<p class="fig-ctl"><button type="button" data-ex="1,0,1">x²+1</button><button type="button" data-ex="1,0,0,-1">x³−1</button><button type="button" data-ex="1,0,0,0,1">x⁴+1</button><button type="button" data-ex="1,0,0,0,-1,-1">x⁵−x−1</button><button type="button" data-ex="1,-6,11,-6">(x−1)(x−2)(x−3)</button><button type="button" data-ex="1,0,0,0,0,0,-1">x⁶−1</button></p>
<svg id="ex-svg" viewBox="0 0 460 330" role="img" aria-label="Racines complexes d'un polynôme à coefficients réels"></svg>
<p class="fig-val" id="ex-val"></p>
</div>
<script>
(function () {
  var sel = document.getElementById('ex-deg'), box = document.getElementById('ex-coef'), svg = document.getElementById('ex-svg'), out = document.getElementById('ex-val');
  var coefs = [1, 0, 0, -1], ins = [];
  function fr(x, d) { if (Math.abs(x) < 0.5 * Math.pow(10, -d)) { x = 0; } return x.toFixed(d).replace('.', ',').replace('-', '−'); }
  function sup(n) { return n === 0 ? '' : n === 1 ? 'x' : 'x<sup>' + n + '</sup>'; }
  function construire() {
    var d = parseInt(sel.value, 10), i; box.innerHTML = ''; ins = [];
    for (i = 0; i <= d; i++) {
      var lab = document.createElement('label'); lab.className = 'coef';
      lab.innerHTML = (sup(d - i) || '1') + ' <input type="number" step="0.5" value="' + (coefs[i] !== undefined ? coefs[i] : 0) + '">';
      box.appendChild(lab); ins.push(lab.querySelector('input'));
      lab.querySelector('input').addEventListener('input', dessiner);
    }
  }
  function racines(c) {
    var n = c.length - 1; if (n < 1) { return []; }
    var a = c.map(function (v) { return v / c[0]; }), R = 1 + Math.max.apply(null, a.slice(1).map(Math.abs)), z = [], k, it, i, j;
    for (k = 0; k < n; k++) { var th = 2 * Math.PI * k / n + 0.4; z.push([0.5 * Math.min(R, 3) * Math.cos(th), 0.5 * Math.min(R, 3) * Math.sin(th)]); }
    for (it = 0; it < 600; it++) {
      var md = 0;
      for (i = 0; i < n; i++) {
        var pr = 1, pi = 0, nr, ni;
        for (j = 1; j <= n; j++) { nr = pr * z[i][0] - pi * z[i][1] + a[j]; ni = pr * z[i][1] + pi * z[i][0]; pr = nr; pi = ni; }
        var dr = 1, di = 0;
        for (j = 0; j < n; j++) { if (j === i) { continue; } var xr = z[i][0] - z[j][0], xi = z[i][1] - z[j][1]; nr = dr * xr - di * xi; ni = dr * xi + di * xr; dr = nr; di = ni; }
        var den = dr * dr + di * di; if (den < 1e-300) { continue; }
        var qr = (pr * dr + pi * di) / den, qi = (pi * dr - pr * di) / den;
        z[i][0] -= qr; z[i][1] -= qi; md = Math.max(md, Math.hypot(qr, qi));
      }
      if (md < 1e-15) { break; }
    }
    return z.map(function (w) { return [Math.abs(w[0]) < 1e-7 ? 0 : w[0], Math.abs(w[1]) < 1e-6 ? 0 : w[1]]; });
  }
  function cx(z) { var r = fr(z[0], 3); if (z[1] === 0) { return r; } return r + (z[1] < 0 ? ' − ' : ' + ') + fr(Math.abs(z[1]), 3) + ' i'; }
  function dessiner() {
    var c = ins.map(function (e) { var v = parseFloat(e.value); return isFinite(v) ? v : 0; });
    coefs = c.slice();
    while (c.length > 1 && c[0] === 0) { c.shift(); }
    var z = racines(c), m = 1.5, i;
    z.forEach(function (w) { m = Math.max(m, 1.25 * Math.hypot(w[0], w[1])); });
    m = Math.min(m, 40);
    var X0 = 80, Y0 = 15, S = 300, sc = S / (2 * m), cxp = X0 + S / 2, cyp = Y0 + S / 2, h = '<rect x="' + X0 + '" y="' + Y0 + '" width="' + S + '" height="' + S + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    h += '<line x1="' + X0 + '" y1="' + cyp + '" x2="' + (X0 + S) + '" y2="' + cyp + '" stroke="#94A3B8"/><line x1="' + cxp + '" y1="' + Y0 + '" x2="' + cxp + '" y2="' + (Y0 + S) + '" stroke="#94A3B8"/>';
    h += '<circle cx="' + cxp + '" cy="' + cyp + '" r="' + sc + '" fill="none" stroke="#94A3B8" stroke-dasharray="4 4"/>';
    var step = m > 12 ? 10 : m > 6 ? 5 : m > 3 ? 2 : 1;
    for (i = -Math.floor(m / step) * step; i <= m; i += step) { if (i !== 0) { h += '<line x1="' + (cxp + i * sc) + '" y1="' + (cyp - 3) + '" x2="' + (cxp + i * sc) + '" y2="' + (cyp + 3) + '" stroke="#94A3B8"/><text x="' + (cxp + i * sc) + '" y="' + (cyp + 15) + '" font-size="10" text-anchor="middle" fill="#64748B" font-family="Georgia,serif">' + i + '</text><line x1="' + (cxp - 3) + '" y1="' + (cyp - i * sc) + '" x2="' + (cxp + 3) + '" y2="' + (cyp - i * sc) + '" stroke="#94A3B8"/><text x="' + (cxp + 8) + '" y="' + (cyp - i * sc + 3) + '" font-size="10" fill="#64748B" font-family="Georgia,serif">' + i + 'i</text>'; } }
    h += '<text x="' + (X0 + S - 4) + '" y="' + (cyp - 5) + '" font-size="11" text-anchor="end" fill="#64748B" font-family="Georgia,serif" font-style="italic">Re</text><text x="' + (cxp - 6) + '" y="' + (Y0 + 12) + '" font-size="11" text-anchor="end" fill="#64748B" font-family="Georgia,serif" font-style="italic">Im</text>';
    z.forEach(function (w) { h += '<circle cx="' + (cxp + w[0] * sc).toFixed(1) + '" cy="' + (cyp - w[1] * sc).toFixed(1) + '" r="5.5" fill="' + (w[1] === 0 ? '#C2770B' : '#970E53') + '" stroke="#fff" stroke-width="1.4"/>'; });
    svg.innerHTML = h;
    if (c.length < 2) { out.textContent = 'Polynôme constant : pas de racine.'; return; }
    var n = c.length - 1, s = [0, 0], p = [1, 0];
    z.forEach(function (w) { s[0] += w[0]; s[1] += w[1]; p = [p[0] * w[0] - p[1] * w[1], p[0] * w[1] + p[1] * w[0]]; });
    out.innerHTML = 'degré ' + n + ', racines : ' + z.map(cx).join(' &nbsp;;&nbsp; ') + '<br>somme = ' + fr(s[0], 3) + ' &nbsp; −a<sub>n−1</sub>/a<sub>n</sub> = ' + fr(-(c[1] || 0) / c[0], 3) + ' &nbsp; produit = ' + fr(p[0], 3) + ' &nbsp; (−1)<sup>n</sup>a<sub>0</sub>/a<sub>n</sub> = ' + fr((n % 2 ? -1 : 1) * c[n] / c[0], 3);
  }
  sel.addEventListener('change', function () { construire(); dessiner(); });
  Array.prototype.forEach.call(document.querySelectorAll('button[data-ex]'), function (b) {
    b.addEventListener('click', function () { coefs = b.getAttribute('data-ex').split(',').map(Number); sel.value = coefs.length - 1; construire(); dessiner(); });
  });
  construire(); dessiner();
})();
</script>

## Calculer quand les formules ne suffisent plus : la méthode de Newton

Même quand une formule existe, elle est souvent peu pratique, et pour le degré cinq ou plus elle n'existe pas. On calcule alors les racines par approximations successives.

<div class="bloc bloc-def">
<div class="bloc-titre">Méthode de Newton</div>

Pour résoudre $f(x) = 0$, on part d'une valeur $x_0$ proche d'une racine et l'on construit
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.$$
Géométriquement, $x_{n+1}$ est l'abscisse du point où la **tangente** à la courbe en $x_n$ coupe l'axe des abscisses.

</div>

<div class="bloc bloc-prop">
<div class="bloc-titre">Convergence quadratique</div>

Si $r$ est une racine simple de $f$ ($f(r) = 0$ et $f'(r) \neq 0$), et si $x_0$ est assez proche de $r$, alors la suite $(x_n)$ converge vers $r$, et l'erreur est élevée au carré à chaque pas&nbsp;: $|x_{n+1} - r| \le C|x_n - r|^2$.

</div>

Le nombre de décimales exactes double environ à chaque itération. Pour $f(x) = x^2 - 2$, la méthode donne $x_{n+1} = \frac{1}{2}\left(x_n + \frac{2}{x_n}\right)$, la méthode de Héron (ou «&nbsp;babylonienne&nbsp;») pour $\sqrt{2}$&nbsp;: de $x_0 = 1$, on obtient $\frac{3}{2}$, $\frac{17}{12}$, $\frac{577}{408} \approx 1{,}41421569$, qui est exact à $6$ décimales. Dans la figure suivante, on choisit une équation et un point de départ, puis on déroule les itérations&nbsp;: chaque tangente (en rose) donne le point suivant.

<div class="fig">
<p class="fig-ctl"><label for="nw-p">Équation&nbsp;:</label><select id="nw-p" class="sel-seul"><option value="0">x³ − 2x − 5 = 0 (l'exemple de Newton, 1669)</option><option value="1">x² − 2 = 0</option><option value="2">x³ − x − 1 = 0</option></select></p>
<p class="fig-ctl"><label for="nw-x">Point de départ x₀ = <span id="nw-xv"></span></label><input type="range" id="nw-x" min="1" max="3.4" step="0.1" value="3"></p>
<p class="fig-ctl"><button type="button" id="nw-1">Itération suivante</button><button type="button" id="nw-5">+ 5 itérations</button><button type="button" id="nw-0">Recommencer</button></p>
<svg id="nw-svg" viewBox="0 0 460 260" role="img" aria-label="La méthode de Newton : tangentes successives à la courbe"></svg>
<p class="fig-val" id="nw-val"></p>
</div>
<script>
(function () {
  var P = [
    { f: function (x) { return x * x * x - 2 * x - 5; }, d: function (x) { return 3 * x * x - 2; }, x0: 1, x1: 3.4, y0: -8, y1: 32, dep: 3, pas: 0.1, nom: 'x³ − 2x − 5' },
    { f: function (x) { return x * x - 2; }, d: function (x) { return 2 * x; }, x0: 0.3, x1: 3, y0: -2.5, y1: 7, dep: 3, pas: 0.1, nom: 'x² − 2' },
    { f: function (x) { return x * x * x - x - 1; }, d: function (x) { return 3 * x * x - 1; }, x0: 0.7, x1: 2.2, y0: -2, y1: 8, dep: 2, pas: 0.1, nom: 'x³ − x − 1' }
  ];
  var sp = document.getElementById('nw-p'), sx = document.getElementById('nw-x'), svg = document.getElementById('nw-svg'), out = document.getElementById('nw-val'), xv = document.getElementById('nw-xv');
  var it = [];
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function cur() { return P[parseInt(sp.value, 10)]; }
  function racine(p) { var x = p.dep, i; for (i = 0; i < 80; i++) { x -= p.f(x) / p.d(x); } return x; }
  function reset() { var p = cur(); it = [parseFloat(sx.value)]; dessiner(); }
  function regler() { var p = cur(); sx.min = p.x0; sx.max = p.x1; sx.step = p.pas; sx.value = p.dep; reset(); }
  function suivant() { var p = cur(), x = it[it.length - 1], d = p.d(x); if (!isFinite(d) || Math.abs(d) < 1e-12 || it.length > 40) { return; } it.push(x - p.f(x) / d); }
  function dessiner() {
    var p = cur(), X0 = 40, X1 = 450, Y0 = 20, Y1 = 225, i, h = '';
    xv.textContent = fr(parseFloat(sx.value), 1);
    function px(x) { return X0 + (x - p.x0) / (p.x1 - p.x0) * (X1 - X0); }
    function py(y) { return Y1 - (y - p.y0) / (p.y1 - p.y0) * (Y1 - Y0); }
    h += '<defs><clipPath id="nw-cl"><rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '"/></clipPath></defs><rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#F8FAFC" stroke="#CBD5E1"/>';
    h += '<g clip-path="url(#nw-cl)"><line x1="' + X0 + '" y1="' + py(0).toFixed(1) + '" x2="' + X1 + '" y2="' + py(0).toFixed(1) + '" stroke="#64748B" stroke-width="1.2"/>';
    var d = '';
    for (i = 0; i <= 200; i++) { var x = p.x0 + (p.x1 - p.x0) * i / 200; d += (i ? 'L' : 'M') + px(x).toFixed(1) + ',' + py(p.f(x)).toFixed(1); }
    h += '<path d="' + d + '" fill="none" stroke="#004D80" stroke-width="2.4"/>';
    var r = racine(p);
    for (i = 0; i < it.length; i++) {
      var xi = it[i], yi = p.f(xi), last = i === it.length - 1, col = last ? '#970E53' : '#E2A8C2';
      h += '<line x1="' + px(xi).toFixed(1) + '" y1="' + py(0).toFixed(1) + '" x2="' + px(xi).toFixed(1) + '" y2="' + py(yi).toFixed(1) + '" stroke="#94A3B8" stroke-dasharray="3 3"/>';
      if (!last) { h += '<line x1="' + px(xi).toFixed(1) + '" y1="' + py(yi).toFixed(1) + '" x2="' + px(it[i + 1]).toFixed(1) + '" y2="' + py(0).toFixed(1) + '" stroke="' + col + '" stroke-width="1.6"/>'; }
      h += '<circle cx="' + px(xi).toFixed(1) + '" cy="' + py(0).toFixed(1) + '" r="' + (last ? 5 : 3.5) + '" fill="' + (last ? '#970E53' : '#C2770B') + '" stroke="#fff"/>';
    }
    h += '</g>';
    h += '<circle cx="' + px(r).toFixed(1) + '" cy="' + py(0).toFixed(1) + '" r="4" fill="none" stroke="#006C65" stroke-width="2"/>';
    [Math.ceil(p.x0), Math.ceil(p.x0) + 1, Math.ceil(p.x0) + 2].forEach(function (t) { if (t <= p.x1) { h += '<text x="' + px(t).toFixed(1) + '" y="' + (Y1 + 15) + '" font-size="11" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + t + '</text>'; } });
    svg.innerHTML = h;
    var rows = it.slice(0, 9).map(function (x, k) { return 'x<sub>' + k + '</sub> = ' + fr(x, 10) + ' (erreur ' + Math.abs(x - r).toExponential(1).replace('.', ',').replace('e-', ' × 10⁻').replace('e+', ' × 10') + ')'; });
    out.innerHTML = 'racine ≈ ' + fr(r, 10) + (it.length > 9 ? '<br>… ' : '<br>') + rows.slice(Math.max(0, rows.length - 3)).join('<br>');
  }
  sp.addEventListener('change', regler);
  sx.addEventListener('input', reset);
  document.getElementById('nw-1').addEventListener('click', function () { suivant(); dessiner(); });
  document.getElementById('nw-5').addEventListener('click', function () { for (var k = 0; k < 5; k++) { suivant(); } dessiner(); });
  document.getElementById('nw-0').addEventListener('click', reset);
  regler();
})();
</script>

<details class="encadre">
<summary class="encadre-titre">Newton, Raphson et l'équation du cinquième degré</summary>
<p>Isaac Newton a présenté la méthode vers $1669$ sur l'équation $y^3 - 2y - 5 = 0$, qui est devenue l'exemple classique, et John Wallis l'a publiée en $1685$. Joseph Raphson en a donné en $1690$ une version simplifiée, la forme itérative que l'on utilise aujourd'hui. Cette méthode calcule sans difficulté les racines du quintique $x^5 - x - 1 = 0$, dont le théorème d'Abel dit qu'aucune formule n'exprime la racine&nbsp;: le calcul numérique ne se soucie pas de la résolubilité par radicaux.</p>
</details>

### Quand Newton hésite : les bassins fractals

Dans le plan complexe, la méthode de Newton s'applique au même titre. Chaque racine attire les points de départ qui convergent vers elle, son **bassin d'attraction**. Pour $z^2 - 1$, la frontière entre les deux bassins est une droite. Pour le troisième degré, Arthur Cayley a posé en 1879 la question de la forme des bassins, et c'est à partir des années 1980 que les ordinateurs en ont révélé la structure fractale&nbsp;: la frontière est une courbe infiniment découpée, où les trois bassins se touchent en chaque point.

Dans la figure suivante, chaque point du plan est coloré selon la racine vers laquelle la méthode de Newton converge quand on part de ce point, et plus sombre quand la convergence est lente. Les points en noir ne convergent pas&nbsp;: pour $z^3 - 2z + 2$, le point $0$ est attiré par un cycle $0 \to 1 \to 0$ et n'atteint jamais de racine.

<div class="fig">
<p class="fig-ctl"><label for="nf-p">Polynôme&nbsp;:</label><select id="nf-p" class="sel-seul"><option value="0">z³ − 1</option><option value="1">z⁴ − 1</option><option value="2">z⁵ − 1</option><option value="3">z³ − 2z + 2 (un cycle de période 2)</option><option value="4">z⁵ − z − 1 (aucune formule)</option></select></p>
<canvas id="nf-cv" width="400" height="400" role="img" aria-label="Bassins d'attraction de la méthode de Newton dans le plan complexe, que l'on peut déplacer et agrandir" style="touch-action:none;cursor:grab;"></canvas>
<p class="fig-ctl"><button type="button" id="nf-zp">Zoom +</button><button type="button" id="nf-zm">Zoom −</button><button type="button" id="nf-r">Vue initiale</button></p>
<p class="fig-val" id="nf-val"></p>
<p class="fig-val note">Glisser pour déplacer, molette ou pincement pour zoomer (la figure est recalculée dès que le mouvement s'arrête). Sur téléphone, pour faire défiler la page, touchez en dehors de la figure.</p>
</div>
<script>
(function () {
  var cv = document.getElementById('nf-cv'), sel = document.getElementById('nf-p'), ctx = cv.getContext('2d'), W = 400, out = document.getElementById('nf-val');
  var tmp = document.createElement('canvas'), tctx = tmp.getContext('2d'), buf = document.createElement('canvas'), bctx = buf.getContext('2d');
  buf.width = W; buf.height = W;
  var POL = [[1, 0, 0, -1], [1, 0, 0, 0, -1], [1, 0, 0, 0, 0, -1], [1, 0, -2, 2], [1, 0, 0, 0, -1, -1]];
  var PAL = [[92, 160, 222], [247, 177, 89], [226, 120, 170], [102, 200, 176], [170, 150, 225]], GRIS = [150, 155, 170];
  var c, dc, n, roots, cx = 0, cy = 0, R = 2, version = 0, ptrs = {}, bv = { ok: false, cx: 0, cy: 0, R: 2 }, minuteur = null;
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  function racines(p) {
    var m = p.length - 1, a = p.map(function (v) { return v / p[0]; }), z = [], k, it, i, j;
    for (k = 0; k < m; k++) { var th = 2 * Math.PI * k / m + 0.4; z.push([1.2 * Math.cos(th), 1.2 * Math.sin(th)]); }
    for (it = 0; it < 500; it++) {
      for (i = 0; i < m; i++) {
        var pr = 1, pi = 0, nr, ni;
        for (j = 1; j <= m; j++) { nr = pr * z[i][0] - pi * z[i][1] + a[j]; ni = pr * z[i][1] + pi * z[i][0]; pr = nr; pi = ni; }
        var dr = 1, di = 0;
        for (j = 0; j < m; j++) { if (j === i) { continue; } var xr = z[i][0] - z[j][0], xi = z[i][1] - z[j][1]; nr = dr * xr - di * xi; ni = dr * xi + di * xr; dr = nr; di = ni; }
        var den = dr * dr + di * di; if (den < 1e-300) { continue; }
        z[i][0] -= (pr * dr + pi * di) / den; z[i][1] -= (pi * dr - pr * di) / den;
      }
    }
    return z;
  }
  function choisir() {
    c = POL[parseInt(sel.value, 10)]; n = c.length - 1; dc = []; for (var k = 0; k < n; k++) { dc.push(c[k] * (n - k)); }
    roots = racines(c); cx = 0; cy = 0; R = 2; bv.ok = false; rendre();
  }
  function couleur(zr, zi, maxit) {
    var it, k, t;
    for (it = 0; it < maxit; it++) {
      var pr = c[0], pi = 0, qr = dc[0], qi = 0;
      for (k = 1; k <= n; k++) { t = pr * zr - pi * zi + c[k]; pi = pr * zi + pi * zr; pr = t; }
      for (k = 1; k < n; k++) { t = qr * zr - qi * zi + dc[k]; qi = qr * zi + qi * zr; qr = t; }
      var den = qr * qr + qi * qi; if (den < 1e-30) { break; }
      var sr = (pr * qr + pi * qi) / den, si = (pi * qr - pr * qi) / den;
      zr -= sr; zi -= si;
      if (sr * sr + si * si < 1e-18) {
        var best = 1e18, b = 0;
        for (k = 0; k < n; k++) { var dd = (zr - roots[k][0]) * (zr - roots[k][0]) + (zi - roots[k][1]) * (zi - roots[k][1]); if (dd < best) { best = dd; b = k; } }
        var f = 1 - 0.22 * Math.min(1, it / 16), p = PAL[b % PAL.length];
        return [p[0] * f + 255 * (1 - f), p[1] * f + 255 * (1 - f), p[2] * f + 255 * (1 - f)];
      }
    }
    return GRIS;
  }
  var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  function sci(x) {
    if (x === 0) { return '0'; }
    var e = Math.floor(Math.log10(Math.abs(x)));
    if (e >= -3 && e < 4) { return x.toPrecision(3).replace('.', ',').replace(/,?0+$/, function (m) { return m.indexOf(',') >= 0 ? '' : m; }); }
    var m = x / Math.pow(10, e), s = String(Math.abs(e)).split('').map(function (d) { return SUP[d]; }).join('');
    return m.toPrecision(2).replace('.', ',') + ' × 10' + (e < 0 ? '⁻' : '') + s;
  }
  function legende() { out.innerHTML = 'zoom × ' + sci(2 / R) + ' &nbsp; centre ' + sci(cx) + ' ' + (cy < 0 ? '−' : '+') + ' ' + sci(Math.abs(cy)) + ' i'; }
  /* Pendant un mouvement, on ne recalcule rien : on déplace et on agrandit, avec lissage, la dernière image complète.
     Le calcul net ne commence qu'après une courte pause, et remplace l'image d'un coup quand il est fini. */
  function afficherTransforme() {
    ctx.fillStyle = '#EEF2F7'; ctx.fillRect(0, 0, W, W);
    if (!bv.ok) { return; }
    var s = bv.R / R, dx = ((bv.cx - bv.R) - (cx - R)) / (2 * R) * W, dy = ((cy + R) - (bv.cy + bv.R)) / (2 * R) * W;
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(buf, dx, dy, W * s, W * s);
  }
  function bouger() { version++; legende(); afficherTransforme(); clearTimeout(minuteur); minuteur = setTimeout(rendre, 90); }
  function rendre() {
    var v = ++version, maxit = R < 0.05 ? 120 : 60, res = W, cr = cx, ci = cy, rr = R, img = new ImageData(res, res), y = 0;
    legende();
    if (!bv.ok) { afficherTransforme(); }
    function bloc() {
      if (v !== version) { return; }
      var fin = Math.min(res, y + 10), x, o, col;
      for (; y < fin; y++) {
        for (x = 0; x < res; x++) {
          col = couleur(cr + rr * (2 * (x + 0.5) / res - 1), ci - rr * (2 * (y + 0.5) / res - 1), maxit);
          o = 4 * (y * res + x); img.data[o] = col[0]; img.data[o + 1] = col[1]; img.data[o + 2] = col[2]; img.data[o + 3] = 255;
        }
      }
      if (y < res) { setTimeout(bloc, 0); return; }
      tmp.width = res; tmp.height = res; tctx.putImageData(img, 0, 0);
      ctx.imageSmoothingEnabled = false; ctx.drawImage(tmp, 0, 0);
      bctx.drawImage(tmp, 0, 0); bv = { ok: true, cx: cr, cy: ci, R: rr };
    }
    bloc();
  }
  function zoomer(s, ux, uy) {
    var nR = Math.max(1e-9, Math.min(6, R * s));
    var zr = cx + R * ux, zi = cy - R * uy;
    R = nR; cx = zr - R * ux; cy = zi + R * uy; bouger();
  }
  function rel(e) { var r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 2 - 1, (e.clientY - r.top) / r.height * 2 - 1]; }
  cv.addEventListener('wheel', function (e) { e.preventDefault(); var u = rel(e); zoomer(e.deltaY < 0 ? 1 / 1.25 : 1.25, u[0], u[1]); }, { passive: false });
  cv.addEventListener('pointerdown', function (e) { cv.setPointerCapture(e.pointerId); ptrs[e.pointerId] = [e.clientX, e.clientY]; cv.style.cursor = 'grabbing'; });
  cv.addEventListener('pointermove', function (e) {
    if (!ptrs[e.pointerId]) { return; }
    var ids = Object.keys(ptrs), old = ptrs[e.pointerId], nw = [e.clientX, e.clientY], r = cv.getBoundingClientRect();
    if (ids.length === 1) {
      cx -= (nw[0] - old[0]) / r.width * 2 * R; cy += (nw[1] - old[1]) / r.height * 2 * R; bouger();
    } else {
      var oid = ids.filter(function (k) { return k !== String(e.pointerId); })[0], o = ptrs[oid];
      var d0 = Math.hypot(old[0] - o[0], old[1] - o[1]), d1 = Math.hypot(nw[0] - o[0], nw[1] - o[1]);
      var m0 = [(old[0] + o[0]) / 2, (old[1] + o[1]) / 2], m1 = [(nw[0] + o[0]) / 2, (nw[1] + o[1]) / 2];
      cx -= (m1[0] - m0[0]) / r.width * 2 * R; cy += (m1[1] - m0[1]) / r.height * 2 * R;
      if (d1 > 5 && d0 > 5) { zoomer(d0 / d1, (m1[0] - r.left) / r.width * 2 - 1, (m1[1] - r.top) / r.height * 2 - 1); } else { bouger(); }
    }
    ptrs[e.pointerId] = nw;
  });
  function fin(e) { delete ptrs[e.pointerId]; cv.style.cursor = 'grab'; }
  cv.addEventListener('pointerup', fin); cv.addEventListener('pointercancel', fin);
  cv.addEventListener('dblclick', function (e) { var u = rel(e); zoomer(0.5, u[0], u[1]); });
  document.getElementById('nf-zp').addEventListener('click', function () { zoomer(0.5, 0, 0); });
  document.getElementById('nf-zm').addEventListener('click', function () { zoomer(2, 0, 0); });
  document.getElementById('nf-r').addEventListener('click', function () { cx = 0; cy = 0; R = 2; bouger(); });
  sel.addEventListener('change', choisir);
  choisir();
})();
</script>

Sur un exemple aussi simple que $z^3 - 1$, trois bassins se partagent le plan et leurs frontières, très découpées, signifient qu'un point de départ à peine différent peut conduire à une autre racine. C'est un exemple de **sensibilité aux conditions initiales** dans un système pourtant très simple (voir la page sur le <a href="../../../physique/chaos/">chaos</a>).

## Exercices

<details class="exercice">
<summary class="exercice-titre">Cinq exercices</summary>
<p><b>1.</b> Résoudre le système $2x + 3y = 7$, $x - y = 1$, puis dire à quoi correspond géométriquement la solution.</p>
<details class="solution">
<summary>Solution</summary>
<p>De la seconde équation, $x = y + 1$. En remplaçant dans la première, $2(y + 1) + 3y = 7$, soit $5y = 5$, donc $y = 1$ et $x = 2$. Le déterminant vaut $D = 2 \times (-1) - 1 \times 3 = -5 \neq 0$&nbsp;: les deux droites sont sécantes, et la solution $(2 ; 1)$ est leur point d'intersection. Vérification&nbsp;: $2 \times 2 + 3 \times 1 = 7$ et $2 - 1 = 1$.</p>
</details>
<p><b>2.</b> Résoudre dans $\mathbb{C}$ l'équation $2x^2 - 3x + 5 = 0$. Vérifier avec les relations de Viète.</p>
<details class="solution">
<summary>Solution</summary>
<p>$\Delta = 9 - 40 = -31 < 0$, donc $x_{\pm} = \frac{3 \pm \mathrm{i}\sqrt{31}}{4}$. La somme des racines vaut $\frac{6}{4} = \frac{3}{2} = -\frac{b}{a}$ et le produit $\frac{9 + 31}{16} = \frac{40}{16} = \frac{5}{2} = \frac{c}{a}$.</p>
</details>
<p><b>3.</b> Trouver deux nombres dont la somme vaut $10$ et le produit $24$.</p>
<details class="solution">
<summary>Solution</summary>
<p>Ce sont les racines de $x^2 - 10x + 24 = 0$, de discriminant $100 - 96 = 4$, soit $x = \frac{10 \pm 2}{2}$&nbsp;: $4$ et $6$.</p>
</details>
<p><b>4.</b> Montrer que $\sqrt[3]{2 + \sqrt{5}} + \sqrt[3]{2 - \sqrt{5}} = 1$.</p>
<details class="solution">
<summary>Solution</summary>
<p>Posons $t = u + v$ avec $u = \sqrt[3]{2 + \sqrt{5}}$ et $v = \sqrt[3]{2 - \sqrt{5}}$. On a $u^3 + v^3 = 4$ et $uv = \sqrt[3]{4 - 5} = -1$, donc $t^3 = u^3 + v^3 + 3uv\,t = 4 - 3t$, c'est-à-dire $t^3 + 3t - 4 = 0$, soit $(t - 1)(t^2 + t + 4) = 0$. Le second facteur a pour discriminant $-15 < 0$, donc la seule racine réelle est $t = 1$. (On reconnaît la formule de Cardan pour $p = 3$ et $q = -4$.)</p>
</details>
<p><b>5.</b> Appliquer deux itérations de la méthode de Newton à $f(x) = x^2 - 3$ en partant de $x_0 = 2$.</p>
<details class="solution">
<summary>Solution</summary>
<p>$x_{n+1} = x_n - \frac{x_n^2 - 3}{2x_n} = \frac{1}{2}\left(x_n + \frac{3}{x_n}\right)$. Donc $x_1 = \frac{1}{2}\left(2 + \frac{3}{2}\right) = \frac{7}{4} = 1{,}75$ et $x_2 = \frac{1}{2}\left(\frac{7}{4} + \frac{12}{7}\right) = \frac{97}{56} \approx 1{,}7321429$. On a $\sqrt{3} \approx 1{,}7320508$&nbsp;: l'erreur passe de $0{,}27$ à $0{,}018$ puis à $9{,}2 \times 10^{-5}$.</p>
</details>
</details>
