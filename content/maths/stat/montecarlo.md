+++
title = "Monte Carlo"
date = 2021-03-06T14:20:50+01:00
weight = 2
+++

<style>
mjx-container[display="true"] { max-width:100%; overflow-x:auto; overflow-y:hidden; }
#grosseformule
{
    overflow-x: auto;
}
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
    border-bottom: 1px solid #C7DDDC;
    padding: 0.2em 0.6em;
    text-align: right;
}
.tbl th
{
    text-align: left;
    font-weight: normal;
}
.tbl tr:first-child th
{
    font-weight: bold;
    vertical-align: bottom;
}
.tbl tr:first-child th:not(:first-child)
{
    text-align: right;
}
</style>

# Monte Carlo

La méthode de Monte Carlo remplace un calcul par une expérience&nbsp;: au lieu de résoudre une intégrale ou de propager des incertitudes par une formule, on tire au hasard un grand nombre de valeurs et l'on fait la moyenne. Elle marche quand le calcul exact est impossible ou pénible, et sa précision se contrôle par les outils du chapitre sur les lois de probabilité.

## Le principe : une espérance estimée par une moyenne

Si l'on cherche à calculer une quantité déterministe (comme la valeur d'une intégrale complexe ou l'espérance d'une variable aléatoire), on peut reformuler le problème sous la forme de l'espérance d'une fonction $f(X)$ d'une variable aléatoire $X$. Il suffit alors de générer des réalisations de $X$ et de moyenner.

<div class="bloc bloc-def">
<div class="bloc-titre">Estimateur de Monte Carlo</div>

Soit $X$ une variable aléatoire, $f$ une fonction, et $x_1, x_2, \dots, x_N$ des réalisations indépendantes de $X$. L'**estimateur de Monte Carlo** de $E\big(f(X)\big)$ est la moyenne empirique
$$\hat I_N = \frac{1}{N}\sum_{i=1}^{N} f(x_i).$$

</div>

<div class="bloc bloc-theo">
<div class="bloc-titre">Loi des grands nombres</div>

Si $E\big(f(X)\big)$ existe, alors $\hat I_N$ converge presque sûrement vers $E\big(f(X)\big)$ quand $N \to +\infty$&nbsp;:
$$\lim_{N \to \infty} \frac{1}{N}\sum_{i=1}^{N} f(x_i) = E\big(f(X)\big).$$

</div>

La loi des grands nombres garantit que la méthode converge, mais ne dit pas à quelle vitesse. C'est le rôle du théorème suivant.

<div class="bloc bloc-theo">
<div class="bloc-titre">Théorème central limite</div>

Si $f(X)$ a une variance finie $\sigma^2$, alors la variable $\dfrac{\sqrt{N}\big(\hat I_N - E(f(X))\big)}{\sigma}$ converge en loi vers la loi normale $\mathcal{N}(0, 1)$. Pour $N$ grand, $\hat I_N$ se répartit donc selon une courbe en cloche centrée sur la cible $E\big(f(X)\big)$, d'écart-type $\frac{\sigma}{\sqrt{N}}$.

</div>

Cette erreur en $\frac{1}{\sqrt{N}}$ donne un **intervalle de confiance** à 95&nbsp;%, que l'on calcule à partir de l'écart-type expérimental $s_N$ des valeurs $f(x_i)$&nbsp;:
$$E\big(f(X)\big) \in \left[\hat I_N - 1{,}96\frac{s_N}{\sqrt{N}}\ ;\ \hat I_N + 1{,}96\frac{s_N}{\sqrt{N}}\right].$$
Gagner un chiffre significatif, c'est diviser l'erreur par $10$, donc multiplier $N$ par $100$.

### Un exemple : estimer $\pi$ avec des fléchettes

Lançons au hasard des fléchettes dans le carré $[0, 1]^2$. Un point $(X, Y)$ tombe dans le quart de disque de rayon $1$ avec la probabilité $\frac{\pi}{4}$, l'aire du quart de disque. La proportion $\hat{p}$ de fléchettes dans le quart de disque estime donc $\frac{\pi}{4}$, et $4\hat{p}$ estime $\pi$. C'est une moyenne de la fonction $f$ égale à $4$ dans le quart de disque et $0$ ailleurs.

La figure suivante permet d'ajouter des tirages. À gauche, les fléchettes (en vert celles qui sont dans le quart de disque). À droite, l'estimation de $\pi$ en fonction de $N$ (en échelle logarithmique)&nbsp;: la courbe bleue est la méthode des fléchettes, et le fuseau gris est l'intervalle de confiance à 95&nbsp;% théorique, qui se resserre comme $\frac{1}{\sqrt{N}}$. La courbe orange est une autre estimation, expliquée plus bas.

<div class="fig">
<p class="fig-ctl"><button type="button" id="pi-1">+ 100</button><button type="button" id="pi-2">+ 10 000</button><button type="button" id="pi-3">+ 1 000 000</button><button type="button" id="pi-0">Recommencer</button></p>
<svg id="pi-svg" viewBox="0 0 460 262" role="img" aria-label="Estimation de pi par la méthode des fléchettes et par une moyenne de fonction, en fonction du nombre de tirages"></svg>
<p class="fig-val" id="pi-val"></p>
</div>
<script>
(function () {
  var svg = document.getElementById('pi-svg'), out = document.getElementById('pi-val');
  var CK = [], e, a;
  for (e = 0; e <= 5; e++) { [1, 2, 5].forEach(function (a) { CK.push(a * Math.pow(10, e)); }); }
  CK.push(1e6);
  var N, hits, sg, sg2, pts, rec, ptr;
  function raz() { N = 0; hits = 0; sg = 0; sg2 = 0; pts = []; rec = []; ptr = 0; }
  function ajouter(m) {
    for (var k = 0; k < m; k++) {
      var x = Math.random(), y = Math.random(), u = Math.random(), g = 4 / (1 + u * u), dedans = x * x + y * y <= 1;
      N++; if (dedans) { hits++; } sg += g; sg2 += g * g;
      if (pts.length < 1500) { pts.push([x, y, dedans]); }
      if (N === CK[ptr]) { rec.push([N, 4 * hits / N, sg / N]); ptr++; }
    }
    dessiner();
  }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  var LX = 10, LY = 18, LS = 200, RX = 262, RY = 18, RW = 188, RH = 200, YMIN = 2.6, YMAX = 3.7;
  function px(n) { return RX + RW * Math.log(n) / Math.log(1e6); }
  function py(v) { return RY + RH - RH * (Math.max(YMIN, Math.min(YMAX, v)) - YMIN) / (YMAX - YMIN); }
  function dessiner() {
    var h = '<rect x="' + LX + '" y="' + LY + '" width="' + LS + '" height="' + LS + '" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2"/>';
    pts.forEach(function (p) { h += '<circle cx="' + (LX + p[0] * LS).toFixed(1) + '" cy="' + (LY + LS - p[1] * LS).toFixed(1) + '" r="1.5" fill="' + (p[2] ? '#006C65' : '#C2770B') + '"/>'; });
    h += '<path d="M ' + (LX + LS) + ' ' + (LY + LS) + ' A ' + LS + ' ' + LS + ' 0 0 0 ' + LX + ' ' + LY + '" fill="none" stroke="#334155" stroke-width="1.4"/>';
    h += '<rect x="' + RX + '" y="' + RY + '" width="' + RW + '" height="' + RH + '" fill="#fff" stroke="#64748B" stroke-width="1.2"/>';
    var sd = 4 * Math.sqrt(Math.PI / 4 * (1 - Math.PI / 4)), up = '', dn = '', n, t;
    for (t = 0; t <= 60; t++) { n = Math.pow(1e6, t / 60) ; n = Math.max(1, n); up += (t ? 'L' : 'M') + px(n).toFixed(1) + ',' + py(Math.PI + 1.96 * sd / Math.sqrt(n)).toFixed(1); }
    for (t = 60; t >= 0; t--) { n = Math.max(1, Math.pow(1e6, t / 60)); dn += 'L' + px(n).toFixed(1) + ',' + py(Math.PI - 1.96 * sd / Math.sqrt(n)).toFixed(1); }
    h += '<path d="' + up + dn + 'Z" fill="#94A3B8" fill-opacity="0.25" stroke="none"/>';
    h += '<line x1="' + RX + '" y1="' + py(Math.PI).toFixed(1) + '" x2="' + (RX + RW) + '" y2="' + py(Math.PI).toFixed(1) + '" stroke="#970E53" stroke-width="1.3" stroke-dasharray="5 4"/>';
    h += '<text x="' + (RX + RW - 3) + '" y="' + (py(Math.PI) - 4).toFixed(1) + '" font-size="12" text-anchor="end" fill="#970E53" font-family="Georgia,serif">π</text>';
    [0, 2, 4, 6].forEach(function (e) { h += '<text x="' + px(Math.pow(10, e)).toFixed(1) + '" y="' + (RY + RH + 14) + '" font-size="11" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + ['1', '100', '10⁴', '10⁶'][e / 2] + '</text>'; });
    h += '<text x="' + (RX + RW) + '" y="' + (RY + RH + 28) + '" font-size="11" text-anchor="end" fill="#334155" font-family="Georgia,serif" font-style="italic">N</text>';
    [2.8, 3, 3.2, 3.4, 3.6].forEach(function (v) { h += '<text x="' + (RX - 4) + '" y="' + (py(v) + 4).toFixed(1) + '" font-size="10" text-anchor="end" fill="#334155" font-family="Georgia,serif">' + fr(v, 1) + '</text>'; });
    var dA = '', dB = '', R = rec.slice();
    if (N > 0 && (!R.length || R[R.length - 1][0] !== N)) { R.push([N, 4 * hits / N, sg / N]); }
    R.forEach(function (r, i) { dA += (i ? 'L' : 'M') + px(r[0]).toFixed(1) + ',' + py(r[1]).toFixed(1); dB += (i ? 'L' : 'M') + px(r[0]).toFixed(1) + ',' + py(r[2]).toFixed(1); });
    if (R.length > 1) { h += '<path d="' + dA + '" fill="none" stroke="#004D80" stroke-width="2"/><path d="' + dB + '" fill="none" stroke="#C2770B" stroke-width="2"/>'; }
    else if (R.length === 1) { h += '<circle cx="' + px(R[0][0]).toFixed(1) + '" cy="' + py(R[0][1]).toFixed(1) + '" r="3" fill="#004D80"/><circle cx="' + px(R[0][0]).toFixed(1) + '" cy="' + py(R[0][2]).toFixed(1) + '" r="3" fill="#C2770B"/>'; }
    svg.innerHTML = h;
    if (!N) { out.textContent = 'Aucun tirage pour l\'instant.'; return; }
    var p = hits / N, pd = 4 * p, hd = 1.96 * 4 * Math.sqrt(p * (1 - p) / N), m = sg / N, s = Math.sqrt(Math.max(0, (sg2 - N * m * m) / Math.max(1, N - 1))), hi = 1.96 * s / Math.sqrt(N);
    out.innerHTML = 'N = ' + N.toLocaleString('fr-FR') + '<br><span style="color:#004D80">fléchettes : π ≈ ' + fr(pd, 4) + ' ± ' + fr(hd, 4) + '</span><br><span style="color:#C2770B">moyenne de 4/(1 + u²) : π ≈ ' + fr(m, 4) + ' ± ' + fr(hi, 4) + '</span> &nbsp; (intervalles à 95 %)';
  }
  document.getElementById('pi-1').addEventListener('click', function () { ajouter(100); });
  document.getElementById('pi-2').addEventListener('click', function () { ajouter(10000); });
  document.getElementById('pi-3').addEventListener('click', function () { ajouter(1000000); });
  document.getElementById('pi-0').addEventListener('click', function () { raz(); dessiner(); });
  raz(); ajouter(1000);
})();
</script>

{{< youtube-plus id="t1X1Agp1CWA" ratio="16x9" width="800px" rounded=true shadow=true >}}

Dans la deuxième partie de la vidéo, on cherche à répondre à la grande question suivante&nbsp;: comment s'assurer d'avoir suffisamment d'échantillons pour obtenir des statistiques fiables&nbsp;? Ou plus prosaïquement&nbsp;: à partir de combien est-ce suffisant&nbsp;? C'est le théorème central limite qui permet de quantifier les fluctuations autour de la cible.

<details class="encadre">
<summary class="encadre-titre">Combien de tirages pour $\pi$ à trois décimales&nbsp;? L'inégalité de Bienaymé-Tchebychev</summary>
<p>Pour les fléchettes, la fonction $f$ vaut $4$ avec la probabilité $\frac{\pi}{4}$ et $0$ sinon, d'où $\sigma = 4\sqrt{\frac{\pi}{4}\left(1 - \frac{\pi}{4}\right)} \approx 1{,}64$. Pour une erreur d'au plus $0{,}001$ à 95&nbsp;%, il faut $1{,}96\,\frac{\sigma}{\sqrt{N}} \le 0{,}001$, soit $N \ge \left(\frac{1{,}96 \times 1{,}64}{0{,}001}\right)^2 \approx 10^7$&nbsp;: environ dix millions de tirages pour trois décimales. La méthode des fléchettes est un très mauvais moyen de calculer $\pi$, mais un bon exemple.</p>
<p>L'<b>inégalité de Bienaymé-Tchebychev</b> donne une garantie sans passer par le théorème central limite&nbsp;: pour tout $\varepsilon > 0$, $P\big(|\hat I_N - E(f(X))| \ge \varepsilon\big) \le \frac{\sigma^2}{N\varepsilon^2}$. Elle est valable pour tout $N$, mais bien plus pessimiste&nbsp;: avec un risque de $5\ \%$ et $\varepsilon = 0{,}001$, elle exige près de $5 \times 10^7$ tirages, cinq fois plus que le théorème central limite.</p>
</details>

## Calculer une intégrale

<div class="bloc bloc-prop">
<div class="bloc-titre">Intégrale et espérance</div>

Si $U$ est une variable uniforme sur $[a, b]$ et $g$ une fonction intégrable, alors
$$\int_a^b g(x)\mathrm{d}x = (b - a)E\big(g(U)\big).$$
Pour une intégrale sur un domaine $D$ de volume $|D|$, on tire des points uniformes dans $D$ et $\int_D g = |D|E\big(g(U)\big)$.

</div>

En effet, la densité de $U$ est $\frac{1}{b-a}$, donc $E\big(g(U)\big) = \int_a^b g(x)\frac{1}{b-a}\mathrm{d}x$. Pour $\pi$, on a $\int_0^1 \frac{4}{1 + x^2}\mathrm{d}x = 4 \arctan 1 = \pi$, et la courbe orange de la figure précédente est la moyenne de $\frac{4}{1+u^2}$ pour des $u$ tirés uniformément dans $[0, 1]$.

<details class="encadre">
<summary class="encadre-titre">Réduire la variance&nbsp;: même méthode, moins de tirages</summary>
<p>La précision dépend de $\sigma$, l'écart-type de la quantité moyennée, et non de la méthode elle-même. Pour la fonction $\frac{4}{1 + u^2}$, un calcul donne $\sigma \approx 0{,}64$, contre $1{,}64$ pour les fléchettes. L'erreur est $2{,}6$ fois plus petite à $N$ égal, ou encore il faut $6{,}5$ fois moins de tirages pour la même précision. Sur la figure, la courbe orange est plus resserrée autour de $\pi$ que la courbe bleue. Choisir une meilleure fonction ou une meilleure loi de tirage s'appelle la <b>réduction de variance</b>, par exemple l'échantillonnage préférentiel (tirer plus souvent là où la fonction est grande) ou les variables antithétiques.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Pourquoi Monte Carlo, si la précision en $\frac{1}{\sqrt{N}}$ est modeste&nbsp;?</summary>
<p>En dimension $1$, les méthodes de quadrature classiques (trapèzes, Simpson) sont bien plus précises. Mais pour une intégrale en dimension $d$ sur une grille de $n$ points par axe, il faut $N = n^d$ évaluations, et l'erreur de la méthode des trapèzes décroît comme $n^{-2} = N^{-2/d}$&nbsp;: de plus en plus lentement quand $d$ augmente. L'erreur de Monte Carlo reste en $N^{-1/2}$ <b>quelle que soit la dimension</b>. Au-delà de la dimension $4$, Monte Carlo l'emporte. C'est pourquoi on l'utilise pour les intégrales qui comptent beaucoup de variables&nbsp;: physique statistique ($3N$ coordonnées pour $N$ particules), transport des neutrons, finance, rendu d'images de synthèse.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Des aiguilles de Buffon à Los Alamos</summary>
<p>L'idée précède les ordinateurs. En 1777, Buffon observe qu'une aiguille de longueur $\ell$, jetée sur un parquet dont les lames ont pour largeur $d \ge \ell$, coupe une rainure avec la probabilité $\frac{2\ell}{\pi d}$&nbsp;: en lançant l'aiguille un grand nombre de fois, on estime $\pi$. La méthode prend son nom et son essor à Los Alamos, pendant et après la seconde guerre mondiale. Stanislaw Ulam, en jouant à la réussite, a l'idée d'estimer la probabilité de gagner en jouant un grand nombre de parties plutôt qu'en la calculant. Avec John von Neumann et Nicholas Metropolis, il applique la même idée à la diffusion des neutrons, sur l'ordinateur ENIAC, puis publie en 1949 avec Metropolis l'article <i>The Monte Carlo method</i>. D'après Metropolis, le nom fait allusion au casino de Monaco, où un oncle d'Ulam empruntait de l'argent pour jouer.</p>
</details>

## Fabriquer de l'aléatoire

Un ordinateur ne tire pas de vrais nombres au hasard. Il calcule une suite déterministe de nombres qui imite des tirages indépendants et uniformes sur $[0, 1[$&nbsp;: un **générateur pseudo-aléatoire**, qui part d'une **graine** (en la fixant, on reproduit exactement la même simulation). Python utilise le Mersenne Twister, de période $2^{19937} - 1$. Tout le reste s'en déduit.

<div class="bloc bloc-theo">
<div class="bloc-titre">Méthode d'inversion</div>

Soit $F$ la fonction de répartition d'une loi, continue et strictement croissante sur son support, et $U$ une variable uniforme sur $]0, 1[$. Alors $X = F^{-1}(U)$ a pour fonction de répartition $F$.

</div>

En effet, $P\big(F^{-1}(U) \le x\big) = P\big(U \le F(x)\big) = F(x)$, puisque la fonction de répartition d'une variable uniforme sur $]0, 1[$ est $t \mapsto t$. Pour la <a href="../../proba/lois/#le-processus-de-poisson-et-la-loi-exponentielle">loi exponentielle</a> de paramètre $\Gamma$, $F(t) = 1 - \mathrm{e}^{-\Gamma t}$, d'où $F^{-1}(u) = -\frac{\ln(1 - u)}{\Gamma}$, et comme $1 - U$ est aussi uniforme, le temps $T = -\frac{\ln U}{\Gamma}$ suit la loi exponentielle. Avec cette formule, on simule les instants des désintégrations d'une source radioactive.

<details class="encadre">
<summary class="encadre-titre">Gaussiennes (Box-Muller) et méthode du rejet</summary>
<p>La fonction de répartition de la loi normale n'a pas d'inverse explicite. La <b>méthode de Box-Muller</b> contourne ce problème&nbsp;: si $U_1$ et $U_2$ sont uniformes indépendantes sur $]0, 1[$, alors
$$Z_1 = \sqrt{-2\ln U_1}\,\cos(2\pi U_2), \qquad Z_2 = \sqrt{-2\ln U_1}\,\sin(2\pi U_2)$$
sont deux variables normales centrées réduites indépendantes. Pour obtenir $\mathcal{N}(\mu, \sigma^2)$, on pose $X = \mu + \sigma Z$.</p>
<p>La <b>méthode du rejet</b> de von Neumann s'applique à une densité $f$ quelconque bornée par $M$ sur $[a, b]$&nbsp;: on tire un point $(X, Y)$ uniformément dans le rectangle $[a, b] \times [0, M]$, et l'on garde $X$ si $Y \le f(X)$. C'est la méthode des fléchettes, utilisée pour fabriquer des lois au lieu de calculer des aires.</p>
</details>

## Monte Carlo pour l'estimation d'incertitudes-types en science expérimentale

La méthode de Monte Carlo permet d'obtenir empiriquement une incertitude-type composée (sans en passer par une formule de propagation).

<div class="bloc bloc-def">
<div class="bloc-titre">Incertitude-type</div>

L'**incertitude-type** $\mathrm{u}(x)$ associée à une grandeur mesurée $x$ est l'écart-type de la distribution des valeurs qu'on peut raisonnablement attribuer à cette grandeur. On l'évalue de deux façons&nbsp;: **type A**, par une analyse statistique de mesures répétées (écart-type expérimental), et **type B**, par un autre moyen (tolérance du fabricant, graduation de l'instrument), en supposant une loi de probabilité. Une grandeur connue à $\pm a$ près, avec une loi uniforme sur $[x - a, x + a]$, a pour incertitude-type $\mathrm{u}(x) = \frac{a}{\sqrt{3}}$.

</div>

Le résultat pour la loi uniforme vient de sa variance, $\frac{(2a)^2}{12} = \frac{a^2}{3}$. Quand une grandeur $y$ se calcule à partir de grandeurs indépendantes, on peut propager les incertitudes.

<div class="bloc bloc-prop">
<div class="bloc-titre">Propagation des incertitudes</div>

Si $y = f(x_1, \dots, x_n)$ avec des grandeurs $x_i$ indépendantes, alors, au premier ordre,
$$\mathrm{u}(y)^2 = \sum_{i=1}^{n}\left(\frac{\partial f}{\partial x_i}\right)^2 \mathrm{u}(x_i)^2.$$
Pour un produit ou un quotient de puissances, cela s'écrit avec les incertitudes relatives&nbsp;: $\left(\frac{\mathrm{u}(y)}{y}\right)^2 = \sum_i \left(\frac{\mathrm{u}(x_i)}{x_i}\right)^2$ (avec des exposants égaux à $1$).

</div>

Cette formule suppose que $f$ est presque linéaire sur la plage d'incertitude, et ne dit rien de la forme de la distribution de $y$. Monte Carlo n'a pas ces limites.

Prenons l'exemple de la détermination de l'incertitude-type sur la concentration d'une solution obtenue par un titrage.<br>
Supposons que la concentration mystère $C_A$ soit donnée par la formule&nbsp;: $C_A = C_B\times\frac{V_E}{V_A}$

<ul>
<li>Volume $V_A$&nbsp;: il est mesuré à l'aide d'une pipette jaugée de $\pu{10,000 mL}$ de classe A. Le fabricant indique une tolérance $a = 0,020 \text{ mL}$. On considère que la distribution des erreurs suit une loi uniforme sur l'intervalle $[V_A - a \, ; \, V_A + a]$. L'incertitude-type associée est donc :

$$\mathrm{u}(V_A) = \frac{a}{\sqrt{3}} \approx 0{,}012 \text{ mL}$$

</li>
<li>Volume à l'équivalence $V_E$&nbsp;: lu sur une burette graduée de $\pu{25 mL}$, il est de $\pu{12,50 mL}$. Compte tenu de la tolérance de la burette et des erreurs de lecture (double lecture du zéro et de la graduation), l'incertitude-type globale estimée expérimentalement est $\mathrm{u}(V_E) = 0{,}05 \text{ mL}$.</li>
<li>Concentration $C_B$&nbsp;: la solution titrante a une concentration de $C_B = \pu{1,00e-2mol*L-1}$ avec une incertitude-type $\mathrm{u}(C_B) = \pu{5e-5 mol*L-1}$.</li>
</ul>

> Écrire le résultat de $C_A$ (avec son incertitude-type).

On obtient $C_A=\pu{1,250e-2 mol*L-1}$.

La formule de propagation des incertitudes donne alors&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\mathrm{u}(C_A) &= C_A\cdot \sqrt{\left(\frac{\mathrm{u}(V_A) }{V_A}\right)^2+\left(\frac{\mathrm{u}(V_E) }{V_E}\right)^2+\left(\frac{\mathrm{u}(C_B) }{C_B}\right)^2}\\\\
&=1,25\cdot 10^{-2}\sqrt{\left(\frac{0{,}0115}{10{,}00}\right)^2 + \left(\frac{0{,}05}{12{,}50}\right)^2 + \left(\frac{5\times 10^{-5}}{1{,}00\times 10^{-2}}\right)^2}\\\\
&\approx 8,131968\ldots \cdot 10^{-5}\\,  \pu{mol\*L-1} \\\\
&\approx 9 \cdot 10^{-5}\\,  \pu{mol*L-1}
\end{aligned}
$$

</div>

Finalement, en ne gardant qu'un seul chiffre significatif pour l'incertitude-type&nbsp;:

<div id="grosseformule" style="border:solid red 2px;width:fit-content;margin:auto;padding:0 10px; border-radius: 5px;">
$$C_A=(1,250 \pm 0,009)\cdot 10^{-2}\; \pu{mol*L-1}$$
</div>

On voit que l'incertitude relative sur $C_B$ domine&nbsp;: les carrés des incertitudes relatives valent $1{,}3 \times 10^{-6}$ pour $V_A$, $1{,}6 \times 10^{-5}$ pour $V_E$ et $2{,}5 \times 10^{-5}$ pour $C_B$, soit des parts de la variance d'environ 3&nbsp;%, 38&nbsp;% et 59&nbsp;%. Pour gagner en précision, il faut d'abord une solution titrante mieux connue, puis une meilleure lecture de la burette, et il est inutile de changer la pipette.

Voyons maintenant comment obtenir la même chose avec le petit programme ci-dessous implémentant la méthode de Monte Carlo&nbsp;:

{{< runpython lang="python" mode="toggle" default="code" height="400" width="800" >}}
import random
import math

N = 100000 

# Liste pour stocker toutes les valeurs de CA simulées
liste_CA = []

# --- BOUCLE DE MONTE-CARLO ---
for i in range(N):
    # Tirage pour VA (loi uniforme entre 10.00 - a et 10.00 + a)
    a = 0.02
    VA = random.uniform(10.00 - a, 10.00 + a)
    
    # Tirage pour VE (loi normale : moyenne=12.50, ecart-type=0.05)
    VE = random.gauss(12.50, 0.05)
    
    # Tirage pour CB (loi normale : moyenne=1.00e-2, ecart-type=5e-5)
    CB = random.gauss(1.00e-2, 5e-5)
    
    # Calcul de CA pour cette simulation et ajout à la liste
    CA = CB * VE / VA
    liste_CA.append(CA)

# Calcul de la moyenne de CA
CA_moyen = sum(liste_CA) / N

# Calcul de l'incertitude-type (écart-type expérimental)
somme_carres = 0
for CA in liste_CA:
    somme_carres += (CA - CA_moyen) ** 2

u_CA = math.sqrt(somme_carres / (N - 1))

# Fonction d'écriture du résultat
def ecriture_resultat(valeur, incertitude):
    # Trouver l'ordre de grandeur initial de l'incertitude
    rang_u = math.floor(math.log10(incertitude))
    # On décale la virgule pour isoler le premier chiffre significatif (ex: 8.12)
    u_normalise = incertitude / (10**rang_u)
    # Arrondi par excès à l'entier supérieur (ex: math.ceil(8.12) -> 9)
    u_arrondi = math.ceil(u_normalise) * (10**rang_u)
    # Sécurité : recalculer l'exposant si l'arrondi change l'ordre de grandeur (ex: 0.095 -> 0.10)
    rang_u = math.floor(math.log10(u_arrondi))
    
    # Arrondir le résultat au même niveau de précision
    valeur_arrondie = round(valeur, -rang_u)
    
    # Déterminer l'exposant pour la notation scientifique (basé sur la valeur)
    rang_val = math.floor(math.log10(abs(valeur_arrondie)))
    
    # Normaliser les deux valeurs pour la notation scientifique
    val_norm = valeur_arrondie / (10**rang_val)
    u_norm = u_arrondi / (10**rang_val)
    
    # Calculer le nombre de décimales à afficher après la virgule
    decimales = rang_val - rang_u
    if decimales < 0:
        decimales = 0
        
    return f"({val_norm:.{decimales}f} +/- {u_norm:.{decimales}f}) x 10^{rang_val}"
    
# Affichage des résultats
print(f"Concentration moyenne CA : {CA_moyen} mol/L")
print(f"Incertitude-type u(CA)   : {u_CA} mol/L")
print("--------------------------------------------------")
print(f"CA = {ecriture_resultat(CA_moyen, u_CA)} mol/L")
{{< /runpython >}}

Le programme tire chaque grandeur selon sa loi (uniforme pour $V_A$, normale pour $V_E$ et $C_B$), calcule $C_A$ pour chaque tirage et prend l'écart-type expérimental des $N$ valeurs obtenues. La figure suivante fait la même simulation dans la page et montre la distribution de $C_A$, qui est une courbe en cloche dont la largeur donne l'incertitude-type.

<div class="fig">
<p class="fig-ctl"><label for="ti-n">Nombre de tirages $N$&nbsp;: <select id="ti-n"><option value="100">100</option><option value="1000">1 000</option><option value="10000">10 000</option><option value="100000" selected>100 000</option><option value="1000000">1 000 000</option></select> <button type="button" id="ti-b">Nouvelle simulation</button></label></p>
<svg id="ti-svg" viewBox="0 0 460 235" role="img" aria-label="Histogramme des valeurs simulées de la concentration C A et courbe en cloche prévue par la formule de propagation"></svg>
<p class="fig-val" id="ti-val"></p>
</div>
<script>
(function () {
  var svg = document.getElementById('ti-svg'), out = document.getElementById('ti-val'), sel = document.getElementById('ti-n');
  var USIM = 0.00813, M0 = 1.25;
  function gauss(m, s) { var u = 1 - Math.random(), v = Math.random(); return m + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function simuler() {
    var N = parseInt(sel.value, 10), v = new Float64Array(N), i, s = 0, s2 = 0;
    for (i = 0; i < N; i++) {
      var VA = 10 - 0.02 + 0.04 * Math.random(), VE = gauss(12.5, 0.05), CB = gauss(1.0, 0.005);
      v[i] = CB * VE / VA; s += v[i];
    }
    var m = s / N;
    for (i = 0; i < N; i++) { s2 += (v[i] - m) * (v[i] - m); }
    var u = Math.sqrt(s2 / (N - 1));
    var B = 50, lo = M0 - 4 * USIM, hi = M0 + 4 * USIM, cnt = [], mx = 0;
    for (i = 0; i < B; i++) { cnt.push(0); }
    for (i = 0; i < N; i++) { var b = Math.floor((v[i] - lo) / (hi - lo) * B); if (b >= 0 && b < B) { cnt[b]++; } }
    var X0 = 30, X1 = 448, Y0 = 195, Y1 = 14, bw = (X1 - X0) / B, h = '';
    var dens = cnt.map(function (c) { return c / (N * (hi - lo) / B); });
    var curve = function (x) { return Math.exp(-(x - M0) * (x - M0) / (2 * USIM * USIM)) / (USIM * Math.sqrt(2 * Math.PI)); };
    mx = Math.max(curve(M0), Math.max.apply(null, dens));
    function ys(d) { return Y0 - (Y0 - Y1) * d / (mx * 1.08); }
    h += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    for (i = 0; i < B; i++) { h += '<rect x="' + (X0 + i * bw + 0.4).toFixed(1) + '" y="' + ys(dens[i]).toFixed(1) + '" width="' + (bw - 0.8).toFixed(1) + '" height="' + (Y0 - ys(dens[i])).toFixed(1) + '" fill="#004D80" fill-opacity="0.55"/>'; }
    var d = '', x;
    for (x = lo; x <= hi + 1e-9; x += (hi - lo) / 100) { d += (d ? 'L' : 'M') + (X0 + (x - lo) / (hi - lo) * (X1 - X0)).toFixed(1) + ',' + ys(curve(x)).toFixed(1); }
    h += '<path d="' + d + '" fill="none" stroke="#970E53" stroke-width="2.2"/>';
    [1.22, 1.25, 1.28].forEach(function (t) { var tx = X0 + (t - lo) / (hi - lo) * (X1 - X0); h += '<line x1="' + tx.toFixed(1) + '" y1="' + Y0 + '" x2="' + tx.toFixed(1) + '" y2="' + (Y0 + 5) + '" stroke="#64748B"/><text x="' + tx.toFixed(1) + '" y="' + (Y0 + 19) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + fr(t, 2) + '</text>'; });
    h += '<text x="' + X1 + '" y="' + (Y0 + 34) + '" font-size="12" text-anchor="end" fill="#334155" font-family="Georgia,serif">C<tspan dy="3" font-size="9">A</tspan><tspan dy="-3"> (en 10⁻² mol/L)</tspan></text>';
    svg.innerHTML = h;
    out.innerHTML = 'C<sub>A</sub> = ' + fr(m, 4) + ' × 10⁻² mol/L &nbsp; u(C<sub>A</sub>) = <b>' + fr(u * 1e3, 2) + ' × 10⁻⁵ mol/L</b> &nbsp; (formule de propagation : 8,13 × 10⁻⁵)<br><span style="color:#970E53">courbe : loi normale de moyenne 1,250 × 10⁻² et d\'écart-type 8,13 × 10⁻⁵</span>';
  }
  sel.addEventListener('change', simuler);
  document.getElementById('ti-b').addEventListener('click', simuler);
  simuler();
})();
</script>

L'écart-type expérimental calculé sur $N$ tirages est lui-même incertain, d'environ $\frac{1}{\sqrt{2(N-1)}}$ en valeur relative pour une distribution normale&nbsp;: 7&nbsp;% pour $N = 100$, 0,7&nbsp;% pour $N = 10^4$ et 0,2&nbsp;% pour $N = 10^5$. En relançant la simulation avec peu de tirages, on voit l'incertitude-type fluctuer. La méthode, normalisée par le supplément 1 du *Guide pour l'expression de l'incertitude de mesure* (JCGM 101, 2008), est la référence quand le modèle n'est pas linéaire ou que les distributions ne sont pas gaussiennes.

<details class="exercice">
<summary class="exercice-titre">Trois exercices</summary>
<p><b>1.</b> On veut estimer une probabilité $p$ voisine de $0{,}3$ avec une précision de $\pm 0{,}01$ à $95\ \%$. Combien de tirages faut-il&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Pour la moyenne de variables de Bernoulli, $\sigma = \sqrt{p(1-p)} \approx \sqrt{0{,}21} \approx 0{,}46$. On veut $1{,}96\,\frac{\sigma}{\sqrt{N}} \le 0{,}01$, soit $N \ge \left(\frac{1{,}96 \times 0{,}46}{0{,}01}\right)^2 \approx 8100$. Sans connaître $p$, la borne $\sigma \le \frac{1}{2}$ donne $N \ge 9604$, soit à peu près $\frac{1}{\varepsilon^2}$ avec $\varepsilon = 0{,}01$.</p>
</details>
<p><b>2.</b> Écrire un programme Python qui estime $\int_0^1 \mathrm{e}^{-x^2}\mathrm{d}x$ par Monte Carlo, avec son incertitude-type.</p>
<details class="solution">
<summary>Solution</summary>
<pre><code>import random, math
N = 100000
vals = [math.exp(-random.random()**2) for _ in range(N)]
moy = sum(vals) / N
s = math.sqrt(sum((v - moy)**2 for v in vals) / (N - 1))
print(moy, "+/-", s / math.sqrt(N))</code></pre>
<p>On obtient environ $0{,}747 \pm 0{,}001$ (la valeur exacte est $0{,}7468\ldots$). C'est la moyenne de $g(u) = \mathrm{e}^{-u^2}$ pour $u$ uniforme sur $[0, 1]$, et $\frac{s}{\sqrt{N}}$ est l'incertitude-type de cette moyenne.</p>
</details>
<p><b>3.</b> Une règle graduée en millimètres sert à lire une longueur. Quelle incertitude-type de type B associer à une lecture à $\pm 0{,}5$ mm près, en supposant une loi uniforme&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>La demi-largeur de l'intervalle est $a = 0{,}5$ mm. L'incertitude-type est $\mathrm{u} = \frac{a}{\sqrt{3}} \approx 0{,}29$ mm. Si la longueur est la différence de deux lectures indépendantes, les incertitudes s'ajoutent en quadrature&nbsp;: $\mathrm{u} = \sqrt{2} \times 0{,}29 \approx 0{,}41$ mm.</p>
</details>
</details>
