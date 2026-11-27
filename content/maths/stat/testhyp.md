+++
title = "Test d'hypothèse"
date = 2021-03-06T14:20:50+01:00
weight = 4
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
.fig-val
{
    font-size: 0.95em;
    color: #334155;
    margin: 0.2em 0;
}
.tbl
{
    border-collapse: collapse;
    margin: 0.6em auto;
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
    font-weight: bold;
}
</style>

# Test d'hypothèse

Face à des données entachées de hasard, un écart observé peut venir de la seule fluctuation de l'échantillonnage, ou traduire un effet réel. Un test d'hypothèse est une procédure qui tranche, en contrôlant le risque de se tromper. C'est la forme prise par la décision en science expérimentale.

## Le principe d'un test

Les statistiques au service de la prise de décision en science.

{{< youtube-plus id="9TxSmOK6GWA" ratio="16x9" width="800px" rounded=true shadow=true >}}

### Un exemple : la pièce est-elle équilibrée ?

On lance 100 fois une pièce, et l'on obtient 62 fois face. La pièce est-elle truquée&nbsp;? Si elle était équilibrée, le nombre de faces suivrait la loi binomiale $\mathcal{B}(100, 0{,}5)$, centrée sur $50$ avec un écart-type de $5$. Obtenir $62$ est-il assez improbable pour douter de l'équilibre&nbsp;? Cela dépend du seuil de risque que l'on accepte, et de ce que l'on appelle «&nbsp;assez improbable&nbsp;».

<div class="bloc bloc-def">
<div class="bloc-titre">Test d'hypothèse</div>

Un **test d'hypothèse** oppose deux hypothèses&nbsp;: l'**hypothèse nulle** $H_0$ («&nbsp;il n'y a pas d'effet&nbsp;», par exemple $p = 0{,}5$) et l'**hypothèse alternative** $H_1$ («&nbsp;il y a un effet&nbsp;», par exemple $p \neq 0{,}5$). On se donne

1. un **seuil de risque** $\alpha$ (en général $0{,}05$), fixé **avant** de regarder les données&nbsp;;
2. une **statistique de test** $T$ (ici, le nombre de faces), dont on connaît la loi quand $H_0$ est vraie&nbsp;;
3. une **région de rejet**, ensemble de valeurs de $T$ dont la probabilité sous $H_0$ vaut au plus $\alpha$ (ici, les valeurs trop éloignées de $50$).

Si la valeur observée de $T$ est dans la région de rejet, on **rejette** $H_0$. Sinon, on **ne rejette pas** $H_0$.

</div>

<div class="bloc bloc-def">
<div class="bloc-titre">p-valeur</div>

La **p-valeur** d'un test est la probabilité, calculée en supposant $H_0$ vraie, d'obtenir une valeur de la statistique de test au moins aussi extrême que celle observée. On rejette $H_0$ au seuil $\alpha$ si et seulement si la p-valeur est inférieure ou égale à $\alpha$.

</div>

Dans la figure suivante, on teste l'hypothèse $H_0 : p = p_0$ sur un échantillon de $n$ lancers donnant $k$ succès. Les barres sont la loi du nombre de succès sous $H_0$, colorées en rose dans la région de rejet. La barre orange est la valeur observée.

<div class="fig">
<p class="fig-ctl"><label for="te-n">Nombre de lancers $n$&nbsp;: <span id="te-nv"></span></label><input type="range" id="te-n" min="10" max="200" step="1" value="100"></p>
<p class="fig-ctl"><label for="te-k">Nombre de succès observés $k$&nbsp;: <span id="te-kv"></span></label><input type="range" id="te-k" min="0" max="100" step="1" value="62"></p>
<p class="fig-ctl"><label for="te-p">Hypothèse nulle $p_0$&nbsp;: <span id="te-pv"></span></label><input type="range" id="te-p" min="0.05" max="0.95" step="0.01" value="0.5"></p>
<p class="fig-ctl"><label>Seuil $\alpha$&nbsp;: <select id="te-a"><option value="0.1">10 %</option><option value="0.05" selected>5 %</option><option value="0.01">1 %</option></select> &nbsp; Alternative&nbsp;: <select id="te-o"><option value="2" selected>p ≠ p₀ (bilatérale)</option><option value="1">p &gt; p₀ (unilatérale)</option></select></label></p>
<svg id="te-svg" viewBox="0 0 460 235" role="img" aria-label="Loi binomiale sous l'hypothèse nulle, région de rejet et valeur observée"></svg>
<p class="fig-val" id="te-val"></p>
</div>
<script>
(function () {
  var sn = document.getElementById('te-n'), sk = document.getElementById('te-k'), sp = document.getElementById('te-p'), sa = document.getElementById('te-a'), so = document.getElementById('te-o');
  var svg = document.getElementById('te-svg'), out = document.getElementById('te-val'), nv = document.getElementById('te-nv'), kv = document.getElementById('te-kv'), pv = document.getElementById('te-pv');
  var lf = [0], i;
  for (i = 1; i <= 200; i++) { lf.push(lf[i - 1] + Math.log(i)); }
  function pmf(n, p, k) { return Math.exp(lf[n] - lf[k] - lf[n - k] + k * Math.log(p) + (n - k) * Math.log(1 - p)); }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function fp(x) { return x < 0.0001 ? '< 0,0001' : fr(x, 4); }
  var kmem = 62;
  function dessiner(e) {
    var n = parseInt(sn.value, 10), p = parseFloat(sp.value), al = parseFloat(sa.value), two = so.value === '2';
    if (e && e.target === sk) { kmem = parseInt(sk.value, 10); }
    var k = Math.min(kmem, n);
    sk.max = n; sk.value = k;
    nv.textContent = n; kv.textContent = k; pv.textContent = fr(p, 2);
    var P = [], j, F = 0, ia = 0, ib = n, kc = n + 1, tin = true, tsup = true, mx = 0, mu = n * p, sg = Math.sqrt(n * p * (1 - p));
    for (j = 0; j <= n; j++) { P.push(pmf(n, p, j)); }
    for (j = 0; j <= n; j++) {
      F += P[j];
      if (tin && F > al / 2) { ia = j; tin = false; }
      if (tsup && F >= 1 - al / 2 - 1e-12) { ib = j; tsup = false; }
    }
    var tail = 0;
    for (j = n; j >= 0; j--) { tail += P[j]; if (tail <= al + 1e-12) { kc = j; } else { break; } }
    function rejet(j) { return two ? (j < ia || j > ib) : (j >= kc); }
    var pl = 0, pr = 0;
    for (j = 0; j <= k; j++) { pl += P[j]; }
    for (j = k; j <= n; j++) { pr += P[j]; }
    var pval = two ? Math.min(1, 2 * Math.min(pl, pr)) : pr;
    var k0 = Math.max(0, Math.floor(Math.min(mu - 5.5 * sg, k - 1))), k1 = Math.min(n, Math.ceil(Math.max(mu + 5.5 * sg, k + 1)));
    for (j = k0; j <= k1; j++) { mx = Math.max(mx, P[j]); }
    var X0 = 30, X1 = 448, Y0 = 195, Y1 = 14, bw = (X1 - X0) / (k1 - k0 + 1);
    function bx(x) { return X0 + (x - (k0 - 0.5)) * bw; }
    var h = '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    for (j = k0; j <= k1; j++) {
      var hh = (Y0 - Y1) * P[j] / (mx * 1.1);
      h += '<rect x="' + (bx(j - 0.5) + 0.5).toFixed(1) + '" y="' + (Y0 - hh).toFixed(1) + '" width="' + Math.max(0.6, bw - 1).toFixed(1) + '" height="' + Math.max(0.5, hh).toFixed(1) + '" fill="' + (j === k ? '#C2770B' : rejet(j) ? '#970E53' : '#B0BEC5') + '" fill-opacity="' + (j === k ? 1 : rejet(j) ? 0.75 : 1) + '"/>';
    }
    h += '<line x1="' + bx(k).toFixed(1) + '" y1="' + Y1 + '" x2="' + bx(k).toFixed(1) + '" y2="' + Y0 + '" stroke="#C2770B" stroke-width="1.6" stroke-dasharray="4 3"/>';
    var R = k1 - k0, st = 1, ca = [1, 2, 5, 10, 20, 50];
    for (i = 0; i < ca.length; i++) { st = ca[i]; if (R / st <= 8) { break; } }
    for (j = Math.ceil(k0 / st) * st; j <= k1; j += st) { h += '<text x="' + bx(j).toFixed(1) + '" y="' + (Y0 + 16) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + j + '</text>'; }
    svg.innerHTML = h;
    var ok = pval <= al;
    out.innerHTML = 'H<sub>0</sub> : p = ' + fr(p, 2) + ' &nbsp; observé : ' + k + ' succès sur ' + n + ' (fréquence ' + fr(k / n, 3) + ')<br>' + (two ? 'région de rejet : k < ' + ia + ' ou k > ' + ib : 'région de rejet : k ≥ ' + (kc > n ? '∞' : kc)) + '<br>p-valeur ' + (two ? 'bilatérale' : 'unilatérale') + ' = <b>' + fp(pval) + '</b> &nbsp; <span style="color:' + (ok ? '#970E53' : '#006C65') + '"><b>' + (ok ? 'p ≤ α : on rejette H<sub>0</sub>' : 'p > α : on ne rejette pas H<sub>0</sub>') + '</b></span>';
  }
  [sn, sk, sp, sa, so].forEach(function (el) { el.addEventListener('input', dessiner); el.addEventListener('change', dessiner); });
  dessiner();
})();
</script>

Avec $62$ faces sur $100$, la p-valeur bilatérale vaut environ $0{,}021$&nbsp;: on rejette l'équilibre de la pièce au seuil de $5$&nbsp;%, mais pas au seuil de $1$&nbsp;%. On retrouve ce que dit l'intervalle de fluctuation (voir [lois](../../proba/lois/#intervalle-de-fluctuation))&nbsp;: au seuil de $5$&nbsp;%, il vaut $[40; 60]$ pour une pièce équilibrée, et $62$ est à l'extérieur.

<details class="encadre">
<summary class="encadre-titre">Ce que la p-valeur n'est pas</summary>
<p>Une p-valeur de $0{,}02$ <b>ne signifie pas</b> qu'il y a $2$&nbsp;% de chances que l'hypothèse nulle soit vraie. C'est la probabilité des données (ou de données plus extrêmes) <b>si</b> $H_0$ est vraie, et non la probabilité de $H_0$ sachant les données. Passer de l'une à l'autre demande de connaître la probabilité a priori de $H_0$, ce que fait la <a href="../bayes/">règle de Bayes</a>. Si l'on teste mille hypothèses dont $999$ sont fausses, les $5$&nbsp;% de faux positifs de ces $999$ tests (environ $50$) noient le seul vrai positif.</p>
<p>Une petite p-valeur ne mesure pas non plus la taille de l'effet&nbsp;: avec assez de données, un effet minuscule devient «&nbsp;significatif&nbsp;». Et ne pas rejeter $H_0$ ne prouve pas qu'elle est vraie&nbsp;: on dit seulement que les données ne suffisent pas à l'écarter.</p>
</details>

### Deux façons de se tromper

Un test peut se tromper dans deux sens. Il peut rejeter $H_0$ alors qu'elle est vraie (un faux positif), ou ne pas la rejeter alors qu'elle est fausse (un faux négatif).

<div class="bloc bloc-def">
<div class="bloc-titre">Risques de première et de seconde espèce</div>

Le **risque de première espèce** est $\alpha = P(\text{rejeter } H_0 \mid H_0 \text{ vraie})$, que l'on fixe. Le **risque de seconde espèce** est $\beta = P(\text{ne pas rejeter } H_0 \mid H_1 \text{ vraie})$. La **puissance** du test est $1 - \beta$, la probabilité de déceler un effet quand il existe.

</div>

<table class="tbl">
<tr><th></th><th>$H_0$ vraie</th><th>$H_1$ vraie</th></tr>
<tr><th>on rejette $H_0$</th><td>erreur de 1<sup>re</sup> espèce (probabilité $\alpha$)</td><td>bonne décision (puissance $1 - \beta$)</td></tr>
<tr><th>on ne rejette pas $H_0$</th><td>bonne décision</td><td>erreur de 2<sup>e</sup> espèce (probabilité $\beta$)</td></tr>
</table>

Le risque $\beta$ dépend de la taille de l'effet à déceler, du nombre de données et du seuil $\alpha$. La figure suivante illustre un test sur la moyenne d'un échantillon de $n$ mesures d'écart-type $\sigma$&nbsp;: sous $H_0$, la moyenne est centrée sur $0$&nbsp;; sous $H_1$, elle est centrée sur $d\sigma$ (l'effet est de $d$ écarts-types). Les deux courbes sont les lois de la moyenne, d'écart-type $\frac{\sigma}{\sqrt{n}}$. On rejette $H_0$ à droite du seuil $c$.

<div class="fig">
<p class="fig-ctl"><label for="er-d">Taille de l'effet $d$ (en écarts-types)&nbsp;: <span id="er-dv"></span></label><input type="range" id="er-d" min="0" max="1.5" step="0.05" value="0.5"></p>
<p class="fig-ctl"><label for="er-n">Nombre de mesures $n$&nbsp;: <span id="er-nv"></span></label><input type="range" id="er-n" min="1" max="200" step="1" value="16"></p>
<p class="fig-ctl"><label>Seuil $\alpha$&nbsp;: <select id="er-a"><option value="0.1">10 %</option><option value="0.05" selected>5 %</option><option value="0.01">1 %</option></select></label></p>
<svg id="er-svg" viewBox="0 0 460 235" role="img" aria-label="Lois de la moyenne sous H0 et sous H1, risques alpha et beta et puissance"></svg>
<p class="fig-val" id="er-val"></p>
</div>
<script>
(function () {
  var sd = document.getElementById('er-d'), sn = document.getElementById('er-n'), sa = document.getElementById('er-a');
  var svg = document.getElementById('er-svg'), out = document.getElementById('er-val'), dv = document.getElementById('er-dv'), nv = document.getElementById('er-nv');
  var ZC = { '0.1': 1.2816, '0.05': 1.6449, '0.01': 2.3263 };
  function erf(x) { var s = x < 0 ? -1 : 1, t; x = Math.abs(x); t = 1 / (1 + 0.3275911 * x); return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)); }
  function cdf(x) { return 0.5 * (1 + erf(x / Math.SQRT2)); }
  function phi(x) { return Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI); }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function dessiner() {
    var d = parseFloat(sd.value), n = parseInt(sn.value, 10), key = sa.value, al = parseFloat(key), c = ZC[key], del = d * Math.sqrt(n);
    dv.textContent = fr(d, 2); nv.textContent = n;
    var xmin = -3.5, xmax = Math.max(4.5, del + 3.5), X0 = 14, X1 = 446, Y0 = 195, Y1 = 14, t, h = '';
    function px(x) { return X0 + (x - xmin) / (xmax - xmin) * (X1 - X0); }
    function py(v) { return Y0 - (Y0 - Y1) * v / 0.42; }
    function area(f, a, b, col, op) {
      var dd = 'M' + px(a).toFixed(1) + ',' + Y0, N = 80;
      for (t = 0; t <= N; t++) { var x = a + (b - a) * t / N; dd += 'L' + px(x).toFixed(1) + ',' + py(f(x)).toFixed(1); }
      return '<path d="' + dd + 'L' + px(b).toFixed(1) + ',' + Y0 + 'Z" fill="' + col + '" fill-opacity="' + op + '" stroke="none"/>';
    }
    function f0(x) { return phi(x); }
    function f1(x) { return phi(x - del); }
    h += area(f1, c, xmax, '#006C65', 0.3);
    h += area(f1, xmin, c, '#C2770B', 0.5);
    h += area(f0, c, xmax, '#970E53', 0.65);
    function courbe(f, col) { var dd = ''; for (t = 0; t <= 200; t++) { var x = xmin + (xmax - xmin) * t / 200; dd += (t ? 'L' : 'M') + px(x).toFixed(1) + ',' + py(f(x)).toFixed(1); } return '<path d="' + dd + '" fill="none" stroke="' + col + '" stroke-width="2"/>'; }
    h += courbe(f0, '#334155') + courbe(f1, '#004D80');
    h += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    h += '<line x1="' + px(c).toFixed(1) + '" y1="' + Y1 + '" x2="' + px(c).toFixed(1) + '" y2="' + Y0 + '" stroke="#C2770B" stroke-width="1.6" stroke-dasharray="5 4"/>';
    h += '<text x="' + px(c).toFixed(1) + '" y="' + (Y0 + 16) + '" font-size="12" text-anchor="middle" fill="#C2770B" font-family="Georgia,serif" font-style="italic">seuil c</text>';
    h += '<text x="' + px(0).toFixed(1) + '" y="' + (py(0.4) - 5).toFixed(1) + '" font-size="13" text-anchor="middle" fill="#334155" font-family="Georgia,serif">H₀</text>';
    h += '<text x="' + px(del).toFixed(1) + '" y="' + (py(0.4) - 5).toFixed(1) + '" font-size="13" text-anchor="middle" fill="#004D80" font-family="Georgia,serif">H₁</text>';
    svg.innerHTML = h;
    var beta = cdf(c - del);
    out.innerHTML = '<span style="color:#970E53">risque α = ' + fr(100 * al, 0) + ' %</span> &nbsp; <span style="color:#C2770B">risque β = ' + fr(100 * beta, 1) + ' %</span> &nbsp; <span style="color:#006C65">puissance 1 − β = ' + fr(100 * (1 - beta), 1) + ' %</span><br>écart entre les deux moyennes : ' + fr(del, 2) + ' écarts-types de la moyenne';
  }
  [sd, sn, sa].forEach(function (el) { el.addEventListener('input', dessiner); el.addEventListener('change', dessiner); });
  dessiner();
})();
</script>

Les trois aires colorées se lisent ainsi&nbsp;: l'aire rose (sous la courbe de $H_0$, à droite de $c$) est $\alpha$, l'aire orange (sous la courbe de $H_1$, à gauche de $c$) est $\beta$, et l'aire verte, qui est le reste de la courbe de $H_1$, est la puissance. En déplaçant les curseurs, on voit que&nbsp;:

- diminuer $\alpha$ pour se protéger des faux positifs fait augmenter $\beta$&nbsp;: on rate plus d'effets réels&nbsp;;
- un effet plus grand est plus facile à déceler&nbsp;;
- seule l'augmentation du nombre de mesures $n$ rapproche les courbes de leur séparation et réduit à la fois $\alpha$ et $\beta$, puisque la largeur des courbes décroît en $\frac{1}{\sqrt{n}}$.

C'est pourquoi on calcule, avant une expérience, le nombre de mesures nécessaire pour atteindre une puissance donnée (souvent $80$&nbsp;%) pour un effet donné.

### Quelques tests classiques

<details class="encadre">
<summary class="encadre-titre">Test sur une moyenne (test de Student)</summary>
<p>Pour savoir si la moyenne $\mu$ d'une population diffère d'une valeur de référence $\mu_0$, on calcule à partir de $n$ mesures de moyenne $\bar{x}$ et d'écart-type expérimental $s$ la statistique
$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}.$$
Sous $H_0 : \mu = \mu_0$ et pour des mesures de loi normale, $t$ suit la <b>loi de Student</b> à $n - 1$ degrés de liberté (voir le <a href="../../proba/lois/#autres-lois">bestiaire des lois</a>). On rejette $H_0$ au seuil de $5$&nbsp;% quand $|t|$ dépasse environ $2$ (valeur exacte $2{,}26$ pour $n = 10$, $1{,}96$ pour $n$ très grand). Le même principe permet de comparer les moyennes de deux échantillons.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Test du khi-deux d'adéquation&nbsp;: un dé est-il équilibré&nbsp;?</summary>
<p>On lance $600$ fois un dé et l'on obtient les effectifs $90$, $110$, $95$, $85$, $120$, $100$ pour les faces $1$ à $6$. Si le dé est équilibré, l'effectif attendu est $E_i = 100$ pour chaque face. La statistique du khi-deux compare effectifs observés $O_i$ et attendus&nbsp;:
$$\chi^2 = \sum_{i=1}^{6}\frac{(O_i - E_i)^2}{E_i} = \frac{100 + 100 + 25 + 225 + 400 + 0}{100} = 8{,}5.$$
Sous $H_0$, elle suit approximativement la loi du khi-deux à $6 - 1 = 5$ degrés de liberté. Le seuil de rejet à $5$&nbsp;% est $11{,}07$. Comme $8{,}5 < 11{,}07$ (la p-valeur vaut environ $0{,}13$), on ne rejette pas l'hypothèse d'un dé équilibré. L'écart des effectifs à $100$ est de l'ordre de la fluctuation attendue, de $\sqrt{600 \times \frac{1}{6} \times \frac{5}{6}} \approx 9{,}1$.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Fisher, Neyman et Pearson&nbsp;: deux philosophies mélangées</summary>
<p>La p-valeur est due à Ronald Fisher. Dans <i>Statistical Methods for Research Workers</i> (1925), il propose le seuil de $0{,}05$ comme repère «&nbsp;commode&nbsp;», non comme dogme. Dans une expérience célèbre, qu'il raconte en 1935, une dame prétend distinguer le thé versé sur le lait de celui où le lait est versé sur le thé. On lui présente $8$ tasses, dont $4$ de chaque sorte, dans le désordre. Si elle devine au hasard, la probabilité de tout identifier correctement est $\frac{1}{\binom{8}{4}} = \frac{1}{70} \approx 1{,}4$&nbsp;%&nbsp;: une réussite complète est assez improbable pour que l'on rejette le simple hasard.</p>
<p>Jerzy Neyman et Egon Pearson (1933) ont formalisé autrement&nbsp;: deux hypothèses explicites, un risque $\alpha$ fixé d'avance, un risque $\beta$ et une puissance. Leur lemme dit que, pour deux hypothèses simples, le test le plus puissant à $\alpha$ donné est celui qui rejette quand le rapport de vraisemblance est grand. L'usage actuel mélange les deux approches (une p-valeur comparée à un seuil fixé), ce que ni l'un ni l'autre n'aurait approuvé.</p>
</details>

## p-hacking

> Extrait traduit de 'Everything is predictable' de Tom Chivers

Peut-être que l’exemple le plus célèbre est celui du scientifique de l'alimentation Brian Wansink, une star de l’Université Cornell qui a reçu des millions de dollars de financement du gouvernement fédéral américain sous l’administration Obama. Il a publié beaucoup d’études sur notre comportement alimentaire, notamment une sur la façon dont les hommes mangent plus en compagnie de femmes (probablement pour les impressionner) ; une autre sur comment donner des noms plus “attractifs” aux légumes (appeler les carottes “carottes à vision X-ray,” par exemple) permet que les enfants d’école primaire en mangent deux fois plus.
<br><br>
Puis, en 2016, il a commis l’erreur de publier un billet de blog intitulé "The Grad Student Who Never Said 'No.'".
<br><br>
L’étudiante en question était une doctorante turque. Lorsqu’elle est arrivée à Cornell, Wansink “lui a donné un ensemble de données d’une étude autofinancée, sans résultats probants” - une étude qui examinait le comportement alimentaire dans un buffet italien à volonté pendant un mois. Selon ses propres termes, il lui a dit : “Cela nous a coûté beaucoup de temps et  d'argent à collecter. Il doit y avoir quelque chose ici que nous pouvons sauver parce que cet ensemble de données est cool (riche et unique).” L’étudiante s’est donc mise au travail et a découpé l’ensemble de données de nombreuses façons différentes. Et, inévitablement, elle a trouvé de nombreuses corrélations p < 0,05 - suffisamment pour qu'elle et Wansink publient cinq articles (y compris l’article “les hommes mangent trop pour impressionner les femmes”).

Cela a éveillé la suspicion de certains scientifiques et journalistes scientifiques, et ils ont commencé à passer au crible les autres recherches de Wansink. De plus, Stephanie Lee, une journaliste scientifique de BuzzFeed, a mis la main sur ses emails, dans lesquels - il s’est avéré - il demanda à sa doctorante de découper les données en “mâles, femelles, mangeurs de déjeuner, mangeurs de dîner, personnes mangeant seules, personnes mangeant en groupe de 2, personnes mangeant en groupe de 2+, personnes commandant de l’alcool, personnes commandant des boissons non alcoolisées, personnes restant près du buffet, personnes s’asseyant loin, etc.” pour “essorer le jeu de données jusqu'à en extraire tous les résultats significatifs possibles” et faire en sorte que cela “devienne viral à grande échelle.”

En conséquence, dix-huit des articles de Wansink ont été rétractés ; sept ont reçu des “expressions of concern” que les revues ajoutent aux études qu’elles ne pensent pas pouvoir être totalement fiables, mais qu’elles ne sont pas prêtes à rétracter complètement ; et quinze ont été corrigés. Wansink, entre-temps, a démissionné de Cornell en 2019, après que l’université a conclu qu’il avait commis une faute scientifique et lui a interdit l’enseignement et la recherche.

C'est un exemple particulièrement frappant, mais d’une certaine manière Wansink a eu la malchance d’être détruit publiquement pour quelque chose qui était presque une pratique standard. Le p-hacking se produit tout le temps, de manière beaucoup moins dramatique - et beaucoup de scientifiques n’ont absolument aucune idée qu’ils font quelque chose de mal. Daryl Bem, dans un chapitre d'un livre de 1987 écrit comme un guide pour aider les étudiants à publier leurs recherches, a écrit qu’il “y a deux articles que vous pouvez écrire : l’article que vous aviez prévu d’écrire lorsque vous avez conçu votre étude ; l’article qui a le plus de sens maintenant que vous avez vu les résultats. La bonne réponse est le second.” Il a appelé les chercheurs à “analyser les sexes séparément, créer de nouveaux index composites… réorganiser les données pour les mettre en relief de manière plus audacieuse… Les données peuvent être suffisamment solides pour justifier de recentrer votre article autour des nouvelles découvertes et de subordonner ou même d’ignorer vos hypothèses originales."

![](https://imgs.xkcd.com/comics/significant.png)

Dans un [**espace de données à grande dimension**](../../geometrie/geo4/#the-average-man), plus on a d'axes (de catégories, d'entrées,...), plus on a de chances d'obtenir un résultat hors norme sur au moins l'un d'eux.<br>
Ce [**chouette site**](https://tylervigen.com/spurious-correlations) met le phénomène à profit pour débusquer des corrélations amusantes (avec pour chacune des p-values inférieures à 1%...)&nbsp;:

<a href="https://tylervigen.com/spurious-correlations"><div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:0em;border: solid 5px #438DEC; border-radius:5px;">
<img src="/spurious.png" style="box-shadow:none;background:none;">
</div></a>

### Quand on teste plusieurs hypothèses

Le p-hacking est un cas particulier d'un problème général&nbsp;: les **tests multiples**.

<div class="bloc bloc-prop">
<div class="bloc-titre">Tests multiples</div>

Si l'on réalise $m$ tests indépendants au seuil $\alpha$ sur des données où aucun effet n'existe, la probabilité d'obtenir au moins un résultat «&nbsp;significatif&nbsp;» est
$$1 - (1 - \alpha)^m.$$
Pour $\alpha = 0{,}05$, elle vaut $64$&nbsp;% pour $m = 20$ et $99$&nbsp;% pour $m = 100$.

</div>

En effet, chaque test échoue à produire un faux positif avec la probabilité $1 - \alpha$, et les $m$ tests indépendants ensemble avec la probabilité $(1 - \alpha)^m$. L'expérience suivante reprend la bande dessinée ci-dessus&nbsp;: on teste $20$ couleurs de bonbons pour savoir si l'une d'elles provoque l'acné. Pour chaque couleur, on compare un groupe de $30$ personnes à un groupe témoin, mais **les données sont des nombres aléatoires purs&nbsp;: aucune couleur n'a d'effet.**

<div class="fig">
<p class="fig-ctl"><button type="button" id="jb-1">Refaire l'expérience</button><button type="button" id="jb-2">Répéter 1 000 fois</button></p>
<p class="fig-ctl"><label><input type="checkbox" id="jb-c"> Corriger par la méthode de Bonferroni (seuil $\frac{0{,}05}{20}$)</label></p>
<svg id="jb-svg" viewBox="0 0 460 224" role="img" aria-label="Vingt tests sur des données aléatoires, les p-valeurs et les résultats significatifs"></svg>
<p class="fig-val" id="jb-val"></p>
</div>
<script>
(function () {
  var svg = document.getElementById('jb-svg'), out = document.getElementById('jb-val'), cb = document.getElementById('jb-c');
  var NOM = ['marron', 'rouge', 'bleu', 'vert', 'jaune', 'orange', 'rose', 'violet', 'turquoise', 'beige', 'gris', 'noir', 'blanc', 'lilas', 'saumon', 'kaki', 'bordeaux', 'citron', 'menthe', 'lavande'];
  var ps = [], bilan = '';
  function gauss() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function erfc(x) { var t = 1 / (1 + 0.3275911 * x); return (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); }
  function une() { var n = 30, a = 0, b = 0, i; for (i = 0; i < n; i++) { a += gauss(); b += gauss(); } return erfc(Math.abs(a - b) / n / Math.sqrt(2 / n) / Math.SQRT2); }
  function seuil() { return cb.checked ? 0.05 / 20 : 0.05; }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function expe() { ps = []; for (var i = 0; i < 20; i++) { ps.push(une()); } bilan = ''; dessiner(); }
  function dessiner() {
    var s = seuil(), h = '', i, nb = 0;
    for (i = 0; i < 20; i++) {
      var x = 10 + (i % 5) * 88, y = 8 + Math.floor(i / 5) * 53, sig = ps[i] <= s;
      if (sig) { nb++; }
      h += '<rect x="' + x + '" y="' + y + '" width="82" height="46" rx="8" fill="' + (sig ? '#C9E4E1' : '#F1F5F9') + '" stroke="' + (sig ? '#006C65' : '#CBD5E1') + '" stroke-width="' + (sig ? 2.4 : 1) + '"/>';
      h += '<text x="' + (x + 41) + '" y="' + (y + 19) + '" font-size="13" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + NOM[i] + '</text>';
      h += '<text x="' + (x + 41) + '" y="' + (y + 37) + '" font-size="13" text-anchor="middle" fill="' + (sig ? '#006C65' : '#64748B') + '" font-family="Georgia,serif" font-weight="' + (sig ? 'bold' : 'normal') + '">p = ' + fr(ps[i], ps[i] < 0.01 ? 4 : 3) + '</text>';
    }
    svg.innerHTML = h;
    out.innerHTML = nb ? '<b style="color:#006C65">' + nb + ' couleur' + (nb > 1 ? 's' : '') + ' « significative' + (nb > 1 ? 's' : '') + ' » au seuil ' + fr(100 * s, s < 0.01 ? 2 : 0) + ' %</b> alors qu\'aucune n\'a d\'effet&nbsp;!' : 'Aucune couleur significative cette fois-ci.';
    out.innerHTML += bilan ? '<br>' + bilan : '';
  }
  function repeter() {
    var s = seuil(), R = 1000, c = 0, r, i;
    for (r = 0; r < R; r++) { for (i = 0; i < 20; i++) { if (une() <= s) { c++; break; } } }
    bilan = 'Sur ' + R + ' expériences de ce type, <b>' + c + '</b> ont au moins une couleur significative (' + fr(100 * c / R, 1) + ' %). Théorie : ' + fr(100 * (1 - Math.pow(1 - s, 20)), 1) + ' %.';
    dessiner();
  }
  cb.addEventListener('change', function () { bilan = ''; dessiner(); });
  document.getElementById('jb-1').addEventListener('click', expe);
  document.getElementById('jb-2').addEventListener('click', repeter);
  expe();
})();
</script>

Sans correction, au moins une couleur sort «&nbsp;significative&nbsp;» dans $64$&nbsp;% des expériences, et un journal pourrait titrer «&nbsp;Les bonbons verts provoquent l'acné&nbsp;». Il suffit d'oublier de dire qu'on a testé vingt couleurs. Avec la correction de Bonferroni, le risque total retombe à environ $5$&nbsp;%.

<details class="encadre">
<summary class="encadre-titre">Comment se prémunir&nbsp;: corrections, préenregistrement, réplication</summary>
<p>La <b>correction de Bonferroni</b> consiste à tester chaque hypothèse au seuil $\frac{\alpha}{m}$&nbsp;: le risque d'obtenir au moins un faux positif parmi les $m$ tests reste au plus $\alpha$. Elle est simple, mais conservatrice. La procédure de Benjamini et Hochberg (1995) contrôle plutôt la proportion de faux positifs parmi les résultats déclarés significatifs (le taux de fausses découvertes), ce qui convient quand on teste des milliers d'hypothèses, comme en génomique.</p>
<p>Les remèdes les plus efficaces sont de méthode&nbsp;: <b>préenregistrer</b> l'hypothèse et l'analyse avant de voir les données, <b>déclarer</b> tous les tests faits, et <b>répliquer</b> les résultats sur de nouvelles données.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">En physique des particules&nbsp;: cinq sigmas et l'effet de «&nbsp;regarder ailleurs&nbsp;»</summary>
<p>Pour annoncer une découverte, la physique des particules exige une p-valeur de $2{,}9 \times 10^{-7}$, soit $5$ écarts-types d'une loi normale (cinq sigmas), au lieu de $0{,}05$. La raison est la même que pour les bonbons&nbsp;: un détecteur examine des milliers de régions du spectre, et une fluctuation de $3$ sigmas quelque part est attendue. On distingue la significativité <b>locale</b> d'un excès, et la significativité <b>globale</b>, corrigée de l'effet de «&nbsp;regarder ailleurs&nbsp;» (<i>look-elsewhere effect</i>). En 2015, un excès de photons autour de $750$ GeV avait une significativité locale d'environ $3{,}9$ sigmas, mais d'environ $2$ sigmas après correction, et il a disparu avec plus de données. Le boson de Higgs, lui, a franchi les cinq sigmas en 2012.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">La crise de la reproductibilité</summary>
<p>En 2005, John Ioannidis a publié un article intitulé «&nbsp;Why most published research findings are false&nbsp;», où il montre par un calcul de probabilités (de type bayésien) que, quand on teste beaucoup d'hypothèses peu plausibles avec des échantillons petits, la majorité des résultats «&nbsp;significatifs&nbsp;» peuvent être faux. En 2015, le projet Open Science Collaboration a tenté de reproduire $100$ études publiées de psychologie&nbsp;: $97$ des études originales avaient un résultat significatif, contre environ $36$ des réplications. Ces constats ont poussé de nombreuses revues à adopter le préenregistrement et à demander l'effet mesuré, avec son intervalle de confiance, plutôt qu'une seule p-valeur.</p>
</details>

<details class="exercice">
<summary class="exercice-titre">Trois exercices</summary>
<p><b>1.</b> Une pièce donne $62$ faces sur $100$ lancers. Calculer la p-valeur approchée du test bilatéral de l'équilibre avec l'approximation normale, et conclure à $5$&nbsp;%.</p>
<details class="solution">
<summary>Solution</summary>
<p>Sous $H_0$, le nombre de faces a pour espérance $50$ et pour écart-type $\sqrt{100 \times 0{,}5 \times 0{,}5} = 5$. La statistique centrée réduite vaut $z = \frac{62 - 50}{5} = 2{,}4$ (avec une correction de continuité, $\frac{61{,}5 - 50}{5} = 2{,}3$). La p-valeur bilatérale est $P(|Z| \ge 2{,}4) \approx 0{,}016$ (ou $0{,}021$ avec la correction, ce qui est la valeur exacte de la loi binomiale). Elle est inférieure à $0{,}05$&nbsp;: on rejette l'équilibre à $5$&nbsp;%.</p>
</details>
<p><b>2.</b> On fait $40$ comparaisons indépendantes au seuil de $5$&nbsp;%, sans aucun effet réel. Quelle est la probabilité d'obtenir au moins un résultat significatif, et quel seuil de Bonferroni faut-il utiliser pour que ce risque reste inférieur à $5$&nbsp;%&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>La probabilité d'au moins un faux positif est $1 - 0{,}95^{40} \approx 0{,}87$, soit $87$&nbsp;%. Avec le seuil de Bonferroni $\frac{0{,}05}{40} = 0{,}00125$ pour chaque test, le risque total est au plus $5$&nbsp;%.</p>
</details>
<p><b>3.</b> Un test est réalisé au seuil de $5$&nbsp;% avec une puissance de $80$&nbsp;%. Sur $1000$ hypothèses testées, dont $100$ seulement sont vraies (un effet réel existe), combien de résultats significatifs obtient-on, et quelle proportion d'entre eux correspond à de vrais effets&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Parmi les $100$ effets réels, on en détecte $80$ (puissance). Parmi les $900$ hypothèses nulles vraies, $5$&nbsp;% donnent un faux positif, soit $45$. On obtient donc $80 + 45 = 125$ résultats significatifs, dont $80$, soit $64$&nbsp;%, sont de vrais effets. Plus d'un résultat «&nbsp;significatif&nbsp;» sur trois est un faux positif, bien que le seuil soit de $5$&nbsp;%.</p>
</details>
</details>
