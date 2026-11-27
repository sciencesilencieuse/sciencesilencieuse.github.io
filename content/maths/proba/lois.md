+++
title = "Lois et variables aléatoires"
date = 2021-03-06T14:20:50+01:00
weight = 1
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
.tbl
{
    border-collapse: collapse;
    margin: 0.6em auto;
    font-size: 0.95em;
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
.fig-val
{
    font-size: 0.95em;
    color: #334155;
    margin: 0.2em 0;
}
</style>

# Lois et variables aléatoires

Une variable aléatoire associe un nombre au résultat d'une expérience. Sa loi décrit la façon dont les valeurs se répartissent. Quand les valeurs possibles sont en nombre fini (ou dénombrable), la loi est discrète, comme la loi binomiale. Quand elles remplissent un intervalle, la loi est continue et se décrit par une densité, comme la loi normale.

## Variable aléatoire, espérance et variance

<div class="bloc bloc-def">
<div class="bloc-titre">Variable aléatoire</div>

Une **variable aléatoire** $X$ est une fonction qui, à chaque issue d'une expérience aléatoire, associe un nombre réel. Sa **loi** est la donnée des probabilités $P(X = x_i)$ de ses valeurs possibles $x_1, \dots, x_r$.

</div>

<div class="bloc bloc-def">
<div class="bloc-titre">Espérance, variance et écart-type</div>

Pour une variable aléatoire $X$ qui prend les valeurs $x_i$ avec les probabilités $p_i$, l'**espérance** est la moyenne des valeurs pondérée par leurs probabilités,
$$E(X) = \sum_i p_i x_i,$$
la **variance** est la moyenne des carrés des écarts à l'espérance,
$$V(X) = \sum_i p_i\big(x_i - E(X)\big)^2,$$
et l'**écart-type** est $\sigma(X) = \sqrt{V(X)}$.

</div>

L'espérance est la valeur « moyenne » qu'on obtiendrait en répétant l'expérience un grand nombre de fois. L'écart-type mesure l'écart typique à cette moyenne&nbsp;: c'est lui qui donne la largeur de la zone où se trouvent la plupart des résultats. Pour un dé équilibré, $E(X) = \frac{1 + 2 + \dots + 6}{6} = 3{,}5$, $V(X) = \frac{35}{12}$ et $\sigma(X) \approx 1{,}71$.

<details class="encadre">
<summary class="encadre-titre">Trois règles de calcul</summary>
<p>Pour des réels $a$ et $b$ et des variables aléatoires $X$ et $Y$&nbsp;:</p>
<ul>
<li>$E(aX + b) = aE(X) + b$ et $V(aX + b) = a^2 V(X)$&nbsp;: décaler ne change pas la dispersion, multiplier par $a$ la multiplie par $|a|$ pour l'écart-type&nbsp;;</li>
<li>$E(X + Y) = E(X) + E(Y)$, que $X$ et $Y$ soient indépendantes ou non&nbsp;;</li>
<li>$V(X + Y) = V(X) + V(Y)$ si $X$ et $Y$ sont <b>indépendantes</b>. Les variances s'additionnent, pas les écarts-types&nbsp;: la dispersion d'une somme de $n$ termes indépendants identiques croît comme $\sqrt{n}$, pas comme $n$.</li>
</ul>
<p>La variance se calcule aussi par $V(X) = E(X^2) - E(X)^2$. Pour le dé, $E(X^2) = \frac{91}{6}$, d'où $V(X) = \frac{91}{6} - \frac{49}{4} = \frac{35}{12}$.</p>
</details>

## Loi binomiale

D'une épreuve de Bernoulli à la loi binomiale :

{{< youtube-plus id="zkfa9uAy1yM" ratio="16x9" width="800px" rounded=true shadow=true >}}

<div class="bloc bloc-def">
<div class="bloc-titre">Loi de Bernoulli</div>

Une **épreuve de Bernoulli** de paramètre $p$ est une expérience à deux issues&nbsp;: un succès, de probabilité $p$, et un échec, de probabilité $1 - p$. La variable aléatoire $X$ qui vaut $1$ en cas de succès et $0$ en cas d'échec suit la **loi de Bernoulli** de paramètre $p$. Son espérance est $E(X) = p$ et sa variance $V(X) = p(1 - p)$.

</div>

<div class="bloc bloc-def">
<div class="bloc-titre">Loi binomiale</div>

On répète $n$ fois, de façon indépendante, la même épreuve de Bernoulli de paramètre $p$. Le nombre $X$ de succès suit la **loi binomiale** de paramètres $n$ et $p$, notée $\mathcal{B}(n, p)$, et pour $k = 0, 1, \dots, n$,
$$P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k}.$$

</div>

Le coefficient binomial $\binom{n}{k}$ (noté aussi $C_n^k$) compte les façons de choisir quels sont les $k$ essais réussis parmi les $n$&nbsp;; chaque choix a la même probabilité $p^k(1-p)^{n-k}$, d'où la formule.

<div class="bloc bloc-prop">
<div class="bloc-titre">Espérance et variance de la loi binomiale</div>

Si $X$ suit $\mathcal{B}(n, p)$, alors
$$E(X) = np, \qquad V(X) = np(1 - p), \qquad \sigma(X) = \sqrt{np(1-p)}.$$

</div>

Il suffit d'écrire $X = X_1 + \dots + X_n$, où $X_i$ vaut $1$ si le $i$-ème essai est un succès et $0$ sinon&nbsp;: les $X_i$ sont des variables de Bernoulli indépendantes, donc $E(X) = n p$ par additivité de l'espérance, et $V(X) = n p(1-p)$ par additivité de la variance pour des variables indépendantes.

Dans la figure suivante, on fait varier $n$ et $p$. La hauteur de chaque barre est $P(X = k)$. La barre est colorée quand $k$ est dans l'intervalle de fluctuation défini plus bas.

<div class="fig">
<p class="fig-ctl"><label for="bi-n">Nombre d'essais $n$&nbsp;: <span id="bi-nv"></span></label><input type="range" id="bi-n" min="1" max="200" step="1" value="40"></p>
<p class="fig-ctl"><label for="bi-p">Probabilité de succès $p$&nbsp;: <span id="bi-pv"></span></label><input type="range" id="bi-p" min="0.01" max="0.99" step="0.001" value="0.167"></p>
<p class="fig-ctl"><label for="bi-s">Seuil de risque&nbsp;: <select id="bi-s"><option value="0.1">10 %</option><option value="0.05" selected>5 %</option><option value="0.01">1 %</option></select></label></p>
<p class="fig-ctl"><label><input type="checkbox" id="bi-g"> Superposer la courbe en cloche de la loi normale de même espérance et de même écart-type</label></p>
<svg id="bi-svg" viewBox="0 0 460 250" role="img" aria-label="Diagramme en bâtons de la loi binomiale"></svg>
<p class="fig-val" id="bi-val"></p>
</div>
<script>
(function () {
  var sn = document.getElementById('bi-n'), sp = document.getElementById('bi-p'), ss = document.getElementById('bi-s'), cg = document.getElementById('bi-g');
  var svg = document.getElementById('bi-svg'), out = document.getElementById('bi-val'), nv = document.getElementById('bi-nv'), pv = document.getElementById('bi-pv');
  var lf = [0], i;
  for (i = 1; i <= 200; i++) { lf.push(lf[i - 1] + Math.log(i)); }
  function pmf(n, p, k) { return Math.exp(lf[n] - lf[k] - lf[n - k] + k * Math.log(p) + (n - k) * Math.log(1 - p)); }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function dessiner() {
    var n = parseInt(sn.value, 10), p = parseFloat(sp.value), seuil = parseFloat(ss.value);
    var mu = n * p, sg = Math.sqrt(n * p * (1 - p));
    nv.textContent = n; pv.textContent = fr(p, 3);
    var P = [], k, F = 0, ia = 0, ib = n, tin = true, tsup = true, mx = 0;
    for (k = 0; k <= n; k++) { P.push(pmf(n, p, k)); }
    for (k = 0; k <= n; k++) {
      F += P[k];
      if (tin && F > seuil / 2) { ia = k; tin = false; }
      if (tsup && F >= 1 - seuil / 2 - 1e-12) { ib = k; tsup = false; }
    }
    var k0 = Math.max(0, Math.floor(mu - 5.5 * sg)), k1 = Math.min(n, Math.ceil(mu + 5.5 * sg));
    if (k1 - k0 < 4) { k0 = Math.max(0, k0 - 2); k1 = Math.min(n, k1 + 2); }
    for (k = k0; k <= k1; k++) { mx = Math.max(mx, P[k]); }
    var X0 = 34, X1 = 448, Y0 = 205, Y1 = 18, bw = (X1 - X0) / (k1 - k0 + 1);
    function px(x) { return X0 + (x - (k0 - 0.5)) * bw; }
    var h = '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    for (k = k0; k <= k1; k++) {
      var hh = (Y0 - Y1) * P[k] / (mx * 1.08), inn = (k >= ia && k <= ib);
      h += '<rect x="' + (px(k - 0.5) + 0.5).toFixed(1) + '" y="' + (Y0 - hh).toFixed(1) + '" width="' + Math.max(0.6, bw - 1).toFixed(1) + '" height="' + hh.toFixed(1) + '" fill="' + (inn ? '#006C65' : '#B0BEC5') + '" fill-opacity="' + (inn ? 0.8 : 1) + '"/>';
    }
    if (cg.checked && sg > 0) {
      var d = '', x;
      for (x = k0 - 0.5; x <= k1 + 0.5; x += 0.1) {
        var y = Y0 - (Y0 - Y1) * (Math.exp(-(x - mu) * (x - mu) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI))) / (mx * 1.08);
        d += (d ? 'L' : 'M') + px(x).toFixed(1) + ',' + Math.max(2, y).toFixed(1);
      }
      h += '<path d="' + d + '" fill="none" stroke="#970E53" stroke-width="2.2"/>';
    }
    h += '<line x1="' + px(mu).toFixed(1) + '" y1="' + Y1 + '" x2="' + px(mu).toFixed(1) + '" y2="' + Y0 + '" stroke="#C2770B" stroke-width="1.8" stroke-dasharray="5 4"/>';
    var R = k1 - k0, st = 1, ca = [1, 2, 5, 10, 20, 50, 100];
    for (i = 0; i < ca.length; i++) { st = ca[i]; if (R / st <= 8) { break; } }
    for (k = Math.ceil(k0 / st) * st; k <= k1; k += st) { h += '<text x="' + px(k).toFixed(1) + '" y="' + (Y0 + 16) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + k + '</text>'; }
    h += '<text x="' + X1 + '" y="' + (Y0 + 32) + '" font-size="12" text-anchor="end" fill="#334155" font-family="Georgia,serif" font-style="italic">k</text>';
    svg.innerHTML = h;
    out.innerHTML = 'E(X) = ' + fr(mu, 2) + ' &nbsp; σ(X) = ' + fr(sg, 2) + '<br>Intervalle de fluctuation à ' + fr(100 * (1 - seuil), 0) + ' % : <b>[' + ia + ' ; ' + ib + ']</b> succès, soit en fréquence [' + fr(ia / n, 3) + ' ; ' + fr(ib / n, 3) + ']';
  }
  [sn, sp, ss, cg].forEach(function (e) { e.addEventListener('input', dessiner); e.addEventListener('change', dessiner); });
  dessiner();
})();
</script>

### Intervalle de fluctuation

<div class="bloc bloc-def">
<div class="bloc-titre">Intervalle de fluctuation</div>

Soit $X$ une variable de loi $\mathcal{B}(n, p)$ et $\alpha \in ]0, 1[$ un seuil de risque. Un **intervalle de fluctuation** au seuil $\alpha$ est un intervalle $[a; b]$ tel que $P(a \le X \le b) \ge 1 - \alpha$. On prend en général le plus petit, avec $a$ le plus petit entier tel que $P(X \le a) > \frac{\alpha}{2}$ et $b$ le plus petit entier tel que $P(X \le b) \ge 1 - \frac{\alpha}{2}$.

</div>

Si l'on observe un nombre de succès en dehors de cet intervalle, il y avait au plus une probabilité $\alpha$ d'obtenir un résultat aussi écarté si $p$ était la vraie probabilité de succès. On rejette alors l'hypothèse sur $p$, avec un risque $\alpha$ de se tromper. C'est le principe des tests d'hypothèse.

Le programme ci-dessous permet de déterminer l'intervalle de fluctuation pour un seuil donné&nbsp;:

{{< runpython lang="python" mode="toggle" default="code" width="800">}}
from fractions import Fraction

def binom(n, k):
    if k > n - k:  
        k = n - k
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) // i
    return result

def loibinom(n, p, k):
    assert 0 <= p <= 1, "La probabilité p doit être comprise entre 0 et 1."
    assert 0 <= k <= n, "k doit être compris entre 0 et n."
    return p**k * (1-p)**(n-k) * binom(n, k)
  
def bino_repart(n, p, k):
    F = 0
    for i in range(k + 1):
        F += loibinom(n, p, i)
    return F

def intervalle(n, p, seuil=0.05):
    F_old = 0
    borne_inf = seuil / 2
    test_inf = True
    borne_sup = 1 - seuil / 2
    test_sup = True
    k = 0    
    ia, ib = 0, n    
    while test_sup and k <= n:
        F_new = F_old + loibinom(n, p, k)        
        if test_inf and F_new > borne_inf:
            ia = k
            test_inf = False            
        if test_sup and F_new >= borne_sup:
            ib = k
            test_sup = False      
        k += 1
        F_old = F_new       
    return (ia, ib)

n = int(input("Taille de la population ? "))
while True:
    try:
        # On récupère l'entrée en nettoyant la virgule et le symbole % au cas où
        saisie = input("Proportion ? ").replace(",", ".").replace("%", "")        
        p = float(Fraction(saisie))        
        # Si supérieur à 1, on considère que c'est un pourcentage
        if p > 1:
            p /= 100           
        if 0 < p < 1:
            break      
        print("La probabilité doit être strictement comprise entre 0 et 1 (ou 0 et 100 %).")     
    except (ValueError, ZeroDivisionError):
        print("Veuillez entrer une valeur numérique, une fraction ou un pourcentage valide.")

seuil = 0.05

rep = input("Voulez-vous un autre seuil de risque alpha que 5 % (correspondant à un intervalle de probabilité de 95%) ? (taper O ou N) : \n").strip().lower()

while rep not in ("o", "n"):
    rep = input("Veuillez taper O pour Oui, ou N pour Non : \n").strip().lower()

if rep == "o":
    while True:
        try:
            saisie = input("Quel seuil de risque alpha souhaitez-vous ? ").replace(",", ".").replace("%", "")
            seuil = float(Fraction(saisie))   
            if seuil > 1:
                seuil = seuil / 100
            if 0 < seuil < 1:
                break
            else:
                print("Le seuil doit être strictement compris entre 0 et 1 (ou 0 et 100 %).")
        except ValueError:
            print("Veuillez entrer une valeur numérique valide.")

proba_intervalle = 1 - seuil
ia, ib = intervalle(n, p, seuil)

print(f"\nL'intervalle de fluctuation au seuil de {seuil * 100:.1f} % (probabilité de {proba_intervalle * 100:.1f} %) pour une proportion p = {p * 100:.1f} % dans un échantillon de taille {n} est :\n[{(ia / n) * 100:.1f} % ; {(ib / n) * 100:.1f} %]\n(soit entre {ia} et {ib} individus)")
{{< /runpython >}}

On peut vérifier l'intervalle graphiquement avec la figure précédente, qui indique l'intervalle de fluctuation pour le seuil choisi.

<details class="exercice">
<summary class="exercice-titre">Le dé est-il pipé&nbsp;?</summary>
<p>Sur 40 lancers d'un dé à 6 faces, 13 ont donné 6. Le dé est-il pipé&nbsp;?</p>
<details class="solution">
<summary>Correction</summary>
<p>Si le dé est équilibré, le nombre de 6 suit la loi $\mathcal{B}\big(40, \frac{1}{6}\big)$. L'intervalle de fluctuation à 95&nbsp;% pour le nombre de succès est $[2\,; 12]$, soit en fréquence $I = \big[\frac{2}{40}\,; \frac{12}{40}\big] = [0{,}05\,; 0{,}30]$.</p>
<p>La fréquence observée dans l'échantillon est $f = \frac{13}{40} = 0{,}325$. On constate que $f \notin I$ (ou que $13 > 12$). La fréquence observée étant en dehors de l'intervalle de fluctuation associé à une probabilité de 95&nbsp;%, on rejette l'hypothèse d'un dé équilibré, avec un risque de 5&nbsp;% de se tromper si le dé est en réalité équilibré.</p>
<p>On peut être plus précis&nbsp;: pour un dé équilibré, la probabilité d'obtenir au moins 13 fois le 6 est $P(X \ge 13) \approx 1{,}1\ \%$, ce qui est rare.</p>
</details>
</details>

<details class="encadre">
<summary class="encadre-titre">L'intervalle de fluctuation asymptotique, et la fourchette des sondages</summary>
<p>Pour $n$ grand, la loi binomiale est bien approchée par la loi normale (voir plus bas), ce qui donne un intervalle de fluctuation au seuil de 5&nbsp;% pour la fréquence $f = \frac{X}{n}$&nbsp;:
$$\left[\,p - 1{,}96\sqrt{\frac{p(1-p)}{n}}\ ;\ p + 1{,}96\sqrt{\frac{p(1-p)}{n}}\,\right].$$
Comme $p(1-p) \le \frac{1}{4}$, la demi-largeur est au plus $\frac{1{,}96}{2\sqrt{n}} \approx \frac{1}{\sqrt{n}}$. D'où la fourchette utilisée pour les sondages&nbsp;: une fréquence observée $f$ sur $n$ personnes donne l'intervalle de confiance à 95&nbsp;%
$$\left[\,f - \frac{1}{\sqrt{n}}\ ;\ f + \frac{1}{\sqrt{n}}\,\right].$$
Pour $n = 1000$, on obtient la marge d'erreur de $\pm 3$ points que l'on voit dans la presse. Pour la diviser par $2$, il faut multiplier la taille de l'échantillon par $4$.</p>
</details>

## Densité de probabilités

Quand une variable prend ses valeurs dans un intervalle, la probabilité d'une valeur précise est nulle&nbsp;: on ne s'intéresse qu'aux probabilités d'intervalles. On les lit sur une aire sous une courbe, la densité.

<div class="bloc bloc-def">
<div class="bloc-titre">Densité de probabilité</div>

Une **densité de probabilité** sur un intervalle $I$ est une fonction $f$ continue (sauf éventuellement en un nombre fini de points), positive, d'intégrale égale à $1$ sur $I$. Une variable aléatoire $X$ a pour densité $f$ si, pour tous $a \le b$ de $I$,
$$P(a \le X \le b) = \int_a^b f(x)\mathrm{d}x.$$
Son espérance est $E(X) = \int_I xf(x)\mathrm{d}x$ et sa variance $V(X) = \int_I \big(x - E(X)\big)^2 f(x)\mathrm{d}x$.

</div>

L'exemple le plus simple est la **loi uniforme** sur $[0, 1]$, de densité $f(x) = 1$&nbsp;: tous les intervalles de même longueur ont la même probabilité, et $E(X) = \frac{1}{2}$. Une énigme permet d'évoquer les densités de probabilité&nbsp;:

> Quelle est la distance moyenne entre deux points pris au hasard sur un segment&nbsp;?

{{< youtube-plus id="XLYXqpl9Z0s" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">La solution avec la densité de la distance</summary>
<p>Prenons le segment $[0, 1]$ et deux points $A$ et $B$ indépendants et uniformes. Le couple $(A, B)$ est uniforme dans le carré $[0, 1]^2$, d'aire $1$, et la distance est $D = |A - B|$. L'événement $D > d$ correspond à deux triangles rectangles isocèles de côté $1 - d$ dans les coins du carré&nbsp;: $P(D > d) = (1 - d)^2$, donc la fonction de répartition vaut $P(D \le d) = 1 - (1 - d)^2$. En dérivant, la densité de $D$ est $f(d) = 2(1 - d)$ sur $[0, 1]$, et
$$E(D) = \int_0^1 d \cdot 2(1 - d)\,\mathrm{d}d = 2\left(\frac{1}{2} - \frac{1}{3}\right) = \frac{1}{3}.$$
Les petites distances sont plus probables que les grandes (la densité décroît), ce qui explique une moyenne inférieure à $\frac{1}{2}$.</p>
</details>

Dans la figure suivante, on tire au hasard des couples de points, et l'on compare l'histogramme des distances à la densité $2(1-d)$ et la moyenne observée à $\frac{1}{3}$.

<div class="fig">
<p class="fig-ctl"><button type="button" id="mc-1">Tirer 1 000 couples</button><button type="button" id="mc-2">Tirer 100 000 couples</button><button type="button" id="mc-0">Recommencer</button></p>
<svg id="mc-svg" viewBox="0 0 460 240" role="img" aria-label="Histogramme des distances entre deux points tirés au hasard et densité théorique"></svg>
<p class="fig-val" id="mc-val"></p>
</div>
<script>
(function () {
  var svg = document.getElementById('mc-svg'), out = document.getElementById('mc-val');
  var B = 20, cnt, N, S;
  function raz() { cnt = []; for (var i = 0; i < B; i++) { cnt.push(0); } N = 0; S = 0; }
  function tirer(m) { for (var i = 0; i < m; i++) { var d = Math.abs(Math.random() - Math.random()); cnt[Math.min(B - 1, Math.floor(d * B))]++; S += d; } N += m; dessiner(); }
  function dessiner() {
    var X0 = 40, X1 = 440, Y0 = 200, Y1 = 14, bw = (X1 - X0) / B, h = '', i, ymax = 2.2;
    h += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    for (i = 0; i < B; i++) {
      var dens = N ? cnt[i] / (N / B) : 0, hh = (Y0 - Y1) * dens / ymax;
      h += '<rect x="' + (X0 + i * bw + 0.5).toFixed(1) + '" y="' + (Y0 - hh).toFixed(1) + '" width="' + (bw - 1).toFixed(1) + '" height="' + hh.toFixed(1) + '" fill="#004D80" fill-opacity="0.55"/>';
    }
    h += '<line x1="' + X0 + '" y1="' + (Y0 - (Y0 - Y1) * 2 / ymax) + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#970E53" stroke-width="2.4"/>';
    h += '<text x="' + (X0 + 8) + '" y="' + (Y0 - (Y0 - Y1) * 2 / ymax - 6) + '" font-size="13" fill="#970E53" font-family="Georgia,serif">2(1 − d)</text>';
    [0, 0.5, 1].forEach(function (t) { h += '<text x="' + (X0 + t * (X1 - X0)) + '" y="' + (Y0 + 16) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + String(t).replace('.', ',') + '</text>'; });
    h += '<text x="' + X1 + '" y="' + (Y0 + 32) + '" font-size="12" text-anchor="end" fill="#334155" font-family="Georgia,serif" font-style="italic">d</text>';
    svg.innerHTML = h;
    out.innerHTML = N ? N.toLocaleString('fr-FR') + ' couples &nbsp; distance moyenne observée = <b>' + (S / N).toFixed(4).replace('.', ',') + '</b> &nbsp; (valeur exacte 1/3 ≈ 0,3333)' : 'Aucun tirage pour l\'instant.';
  }
  document.getElementById('mc-1').addEventListener('click', function () { tirer(1000); });
  document.getElementById('mc-2').addEventListener('click', function () { tirer(100000); });
  document.getElementById('mc-0').addEventListener('click', function () { raz(); dessiner(); });
  raz(); dessiner();
})();
</script>

On peut aussi vérifier la solution statistiquement avec un petit programme simplissime&nbsp;:

{{< runpython lang="python" mode="toggle" default="code" height="300" width="800" >}}
from random import random

N = 500000
d_moy = 0

for i in range(N):
    A = random()
    B = random()
    d = abs(A-B)
    d_moy += d

d_moy /= N

print("Distance moyenne : {}".format(d_moy))
{{< /runpython >}}

## Loi normale

La célèbre gaussienne (ou courbe en cloche)&nbsp;:

{{< youtube-plus id="H_r7iDhANl0" ratio="16x9" width="800px" rounded=true shadow=true >}}

<div class="bloc bloc-def">
<div class="bloc-titre">Loi normale</div>

Soit $\mu \in \mathbb{R}$ et $\sigma > 0$. Une variable aléatoire $X$ suit la **loi normale** $\mathcal{N}(\mu, \sigma^2)$ si elle a pour densité
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\ \mathrm{e}^{-\frac{(x - \mu)^2}{2\sigma^2}}, \qquad x \in \mathbb{R}.$$
Son espérance est $\mu$ et son écart-type $\sigma$. La loi $\mathcal{N}(0, 1)$ est la loi normale **centrée réduite**.

</div>

La courbe est symétrique autour de $\mu$, qui en est le sommet. Le paramètre $\sigma$ règle la largeur de la cloche&nbsp;: plus il est grand, plus elle est large et basse. Si $X$ suit $\mathcal{N}(\mu, \sigma^2)$, la variable $\frac{X - \mu}{\sigma}$ suit $\mathcal{N}(0, 1)$, ce qui ramène tous les calculs à une seule loi.

<div class="bloc bloc-prop">
<div class="bloc-titre">Règle des un, deux et trois sigmas</div>

Si $X$ suit $\mathcal{N}(\mu, \sigma^2)$, alors
$$P(\mu - \sigma \le X \le \mu + \sigma) \approx 0{,}683, \quad P(\mu - 2\sigma \le X \le \mu + 2\sigma) \approx 0{,}954, \quad P(\mu - 3\sigma \le X \le \mu + 3\sigma) \approx 0{,}997.$$
Plus précisément, $P(\mu - 1{,}96\sigma \le X \le \mu + 1{,}96\sigma) \approx 0{,}95$.

</div>

Dans la figure suivante, on choisit la largeur $k$ de l'intervalle $[\mu - k\sigma; \mu + k\sigma]$ et l'on lit la probabilité correspondante, qui est l'aire sous la courbe.

<div class="fig">
<p class="fig-ctl"><label for="no-k">Largeur $k$ (en écarts-types)&nbsp;: <span id="no-kv"></span></label><input type="range" id="no-k" min="0.1" max="4" step="0.01" value="1.96"></p>
<p class="fig-ctl"><button type="button" data-k="1">1</button><button type="button" data-k="1.96">1,96</button><button type="button" data-k="2">2</button><button type="button" data-k="3">3</button></p>
<svg id="no-svg" viewBox="0 0 460 230" role="img" aria-label="La courbe en cloche de la loi normale centrée réduite avec l'aire entre moins k et plus k"></svg>
<p class="fig-val" id="no-val"></p>
</div>
<script>
(function () {
  var sl = document.getElementById('no-k'), svg = document.getElementById('no-svg'), out = document.getElementById('no-val'), kv = document.getElementById('no-kv');
  function erf(x) {
    var s = x < 0 ? -1 : 1, t;
    x = Math.abs(x); t = 1 / (1 + 0.3275911 * x);
    return s * (1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x));
  }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function dessiner() {
    var k = parseFloat(sl.value), X0 = 30, X1 = 430, Y0 = 190, Y1 = 20, sc = (X1 - X0) / 8, cx = (X0 + X1) / 2, h = '', x;
    function gy(t) { return Y0 - (Y0 - Y1) * Math.exp(-t * t / 2); }
    var d = 'M' + (cx - k * sc).toFixed(1) + ',' + Y0, dc = '';
    for (x = -k; x <= k + 1e-9; x += 0.02) { d += 'L' + (cx + x * sc).toFixed(1) + ',' + gy(x).toFixed(1); }
    d += 'L' + (cx + k * sc).toFixed(1) + ',' + Y0 + 'Z';
    for (x = -4; x <= 4 + 1e-9; x += 0.05) { dc += (dc ? 'L' : 'M') + (cx + x * sc).toFixed(1) + ',' + gy(x).toFixed(1); }
    h += '<path d="' + d + '" fill="#006C65" fill-opacity="0.35" stroke="none"/>';
    h += '<path d="' + dc + '" fill="none" stroke="#004D80" stroke-width="2.4"/>';
    h += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    [-3, -2, -1, 0, 1, 2, 3].forEach(function (t) {
      h += '<line x1="' + (cx + t * sc) + '" y1="' + Y0 + '" x2="' + (cx + t * sc) + '" y2="' + (Y0 + 5) + '" stroke="#64748B"/><text x="' + (cx + t * sc) + '" y="' + (Y0 + 19) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + (t === 0 ? 'μ' : (t < 0 ? 'μ − ' + (-t) + 'σ' : 'μ + ' + t + 'σ')).replace('1σ', 'σ') + '</text>';
    });
    svg.innerHTML = h;
    var P = erf(k / Math.SQRT2);
    kv.textContent = fr(k, 2);
    out.innerHTML = 'P(μ − ' + fr(k, 2) + 'σ ≤ X ≤ μ + ' + fr(k, 2) + 'σ) = <b>' + fr(100 * P, 1) + ' %</b> &nbsp; (chaque queue : ' + fr(50 * (1 - P), 2) + ' %)';
  }
  sl.addEventListener('input', dessiner);
  Array.prototype.forEach.call(document.querySelectorAll('button[data-k]'), function (b) {
    b.addEventListener('click', function () { sl.value = b.getAttribute('data-k'); dessiner(); });
  });
  dessiner();
})();
</script>

<div class="bloc bloc-theo">
<div class="bloc-titre">Théorème de de Moivre-Laplace</div>

Soit $X_n$ une variable de loi $\mathcal{B}(n, p)$ avec $0 < p < 1$. La variable centrée réduite $\dfrac{X_n - np}{\sqrt{np(1-p)}}$ converge en loi vers $\mathcal{N}(0, 1)$ quand $n \to +\infty$&nbsp;: pour tous $a < b$,
$$P\left(a \le \frac{X_n - np}{\sqrt{np(1-p)}} \le b\right) \longrightarrow \int_a^b \frac{1}{\sqrt{2\pi}}\mathrm{e}^{-t^2/2}\mathrm{d}t.$$

</div>

On le voit dans la figure de la loi binomiale ci-dessus&nbsp;: en cochant la case «&nbsp;courbe en cloche&nbsp;», la gaussienne de même espérance et de même écart-type épouse les barres dès que $n$ est assez grand (et $p$ pas trop proche de $0$ ou de $1$). C'est ce qui justifie l'intervalle de fluctuation asymptotique $p \pm 1{,}96\sqrt{\frac{p(1-p)}{n}}$.

<details class="encadre">
<summary class="encadre-titre">Pourquoi la gaussienne est-elle partout&nbsp;?</summary>
<p>Le théorème de de Moivre-Laplace est un cas particulier du <b>théorème central limite</b>&nbsp;: la somme d'un grand nombre de variables aléatoires indépendantes, de même loi et de variance finie, suit approximativement une loi normale, quelle que soit la loi de départ. Une grandeur qui résulte de l'accumulation de nombreuses petites contributions indépendantes, comme l'erreur d'une mesure, a donc une répartition en cloche. Abraham de Moivre a établi l'approximation de la loi binomiale en 1733, Laplace l'a généralisée, et Gauss s'est servi de cette courbe pour décrire les erreurs de mesure en astronomie. Adolphe Quetelet l'a appliquée aux caractéristiques des populations, comme la taille.</p>
<p>La loi normale a aussi une propriété de stabilité&nbsp;: la somme de deux variables normales indépendantes est normale, d'espérance la somme des espérances et de variance la somme des variances.</p>
</details>

<details class="exercice">
<summary class="exercice-titre">Un sondage et une marge d'erreur</summary>
<p>Dans un sondage réalisé auprès de $1000$ personnes, $52\ \%$ disent vouloir voter pour le candidat $A$. Peut-on affirmer, avec un risque de $5\ \%$, que $A$ aura la majorité&nbsp;? Combien de personnes faut-il interroger pour que la marge d'erreur soit de $\pm 1$ point&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>L'intervalle de confiance à 95&nbsp;% est $\big[0{,}52 - \frac{1}{\sqrt{1000}}\,;\ 0{,}52 + \frac{1}{\sqrt{1000}}\big] \approx [0{,}488\,;\ 0{,}552]$. Il contient $0{,}5$&nbsp;: on ne peut pas exclure que le vrai pourcentage soit inférieur à $50\ \%$, donc on ne peut pas affirmer que $A$ aura la majorité.</p>
<p>Une marge de $\pm 1$ point s'écrit $\frac{1}{\sqrt{n}} = 0{,}01$, soit $n = 10\,000$ personnes.</p>
</details>
</details>


## Loi de Poisson

### Compter des événements rares

La loi binomiale compte les succès parmi un nombre $n$ d'essais connu. Mais il arrive qu'on compte des événements qui surviennent à des instants ou à des endroits aléatoires, sans qu'aucun nombre d'essais ne s'impose&nbsp;: les désintégrations d'un échantillon radioactif, les appels reçus par un standard, les coquilles d'un livre, les gouttes de pluie sur un carrelage. On connaît seulement une valeur moyenne. La loi de Poisson décrit ces comptages.

<div class="bloc bloc-def">
<div class="bloc-titre">Loi de Poisson</div>

Soit $\lambda > 0$. Une variable aléatoire $X$ à valeurs entières suit la **loi de Poisson** de paramètre $\lambda$, notée $\mathcal{P}(\lambda)$, si pour tout entier $k \ge 0$,
$$P(X = k) = \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}.$$

</div>

<div class="bloc bloc-prop">
<div class="bloc-titre">Espérance et variance de la loi de Poisson</div>

Si $X$ suit $\mathcal{P}(\lambda)$, alors $E(X) = V(X) = \lambda$, donc $\sigma(X) = \sqrt{\lambda}$.

</div>

Le paramètre $\lambda$ est donc le nombre moyen d'événements, et la fluctuation typique autour de cette moyenne vaut $\sqrt{\lambda}$. L'égalité de l'espérance et de la variance caractérise les comptages de Poisson&nbsp;: un comptage dont la variance est très différente de la moyenne n'est pas poissonnien.

<details class="encadre">
<summary class="encadre-titre">Le calcul de l'espérance et de la variance</summary>
<p>Avec $\sum_{k \ge 0} \frac{\lambda^k}{k!} = \mathrm{e}^{\lambda}$, on a $E(X) = \sum_{k \ge 1} k\,\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!} = \lambda\,\mathrm{e}^{-\lambda}\sum_{k \ge 1}\frac{\lambda^{k-1}}{(k-1)!} = \lambda$. De même, $E\big(X(X-1)\big) = \sum_{k \ge 2} k(k-1)\,\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!} = \lambda^2$, donc $E(X^2) = \lambda^2 + \lambda$ et $V(X) = E(X^2) - E(X)^2 = \lambda$.</p>
</details>

### De la binomiale à la loi de Poisson

<div class="bloc bloc-theo">
<div class="bloc-titre">Loi des événements rares</div>

Soit $X_n$ une variable de loi $\mathcal{B}(n, p_n)$ avec $np_n \to \lambda$ quand $n \to +\infty$. Alors, pour tout entier $k$,
$$P(X_n = k) \longrightarrow \mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}.$$

</div>

Quand on a un très grand nombre d'essais ($n$ grand) dont chacun réussit très rarement ($p$ petit), le nombre de succès ne dépend plus que du produit $\lambda = np$. Bortkiewicz parlait de «&nbsp;loi des petits nombres&nbsp;». En pratique, l'approximation est excellente dès que $n \ge 30$ et $p \le 0{,}1$.

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration de la loi des événements rares</div>

Prenons $p = \frac{\lambda}{n}$. Alors
$$P(X_n = k) = \frac{n(n-1)\cdots(n-k+1)}{k!}\left(\frac{\lambda}{n}\right)^k\left(1 - \frac{\lambda}{n}\right)^{n-k} = \frac{\lambda^k}{k!}\ A_n B_n C_n,$$
où $A_n = \frac{n(n-1)\cdots(n-k+1)}{n^k}$, $B_n = \left(1 - \frac{\lambda}{n}\right)^{n}$ et $C_n = \left(1 - \frac{\lambda}{n}\right)^{-k}$. Le facteur $A_n$ est un produit de $k$ termes $\frac{n-j}{n}$ qui tendent tous vers $1$. Le facteur $B_n$ tend vers $\mathrm{e}^{-\lambda}$&nbsp;: c'est la limite classique qui définit l'exponentielle. Le facteur $C_n$ tend vers $1$, puisque $k$ est fixé. Le produit tend donc vers $\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$.

</div>

Prenons $p = \frac{\lambda}{n}$. Alors
$$P(X_n = k) = \frac{n(n-1)\cdots(n-k+1)}{k!}\left(\frac{\lambda}{n}\right)^k\left(1 - \frac{\lambda}{n}\right)^{n-k} = \frac{\lambda^k}{k!}\cdot\underbrace{\frac{n(n-1)\cdots(n-k+1)}{n^k}}\_{\to1}\cdot\underbrace{\left(1 - \frac{\lambda}{n}\right)^{n}}\_{\to\mathrm{e}^{-\lambda}}\cdot\underbrace{\left(1 - \frac{\lambda}{n}\right)^{-k}}\_{\to1}.$$
Le premier facteur est un produit de $k$ termes qui tendent vers $1$, le deuxième est la limite classique qui définit l'exponentielle, et le dernier tend vers $1$ puisque $k$ est fixé. Le produit tend donc vers $\mathrm{e}^{-\lambda}\frac{\lambda^k}{k!}$.

</div>

Dans la figure suivante, les barres sont la loi $\mathcal{P}(\lambda)$ et les points la loi binomiale $\mathcal{B}(n, \frac{\lambda}{n})$, de même moyenne $\lambda$. Quand on augmente $n$ à $\lambda$ fixé, les points se posent sur les barres.

<div class="fig">
<p class="fig-ctl"><label for="po-l">Moyenne $\lambda$&nbsp;: <span id="po-lv"></span></label><input type="range" id="po-l" min="0.5" max="20" step="0.1" value="3"></p>
<p class="fig-ctl"><label for="po-n">Nombre d'essais $n$ de la binomiale&nbsp;: <span id="po-nv"></span></label><input type="range" id="po-n" min="2" max="200" step="1" value="10"></p>
<svg id="po-svg" viewBox="0 0 460 230" role="img" aria-label="Loi de Poisson en barres et loi binomiale de même moyenne en points"></svg>
<p class="fig-val" id="po-val"></p>
</div>
<script>
(function () {
  var sl = document.getElementById('po-l'), sn = document.getElementById('po-n'), svg = document.getElementById('po-svg'), out = document.getElementById('po-val');
  var lv = document.getElementById('po-lv'), nv = document.getElementById('po-nv'), lf = [0], i;
  for (i = 1; i <= 400; i++) { lf.push(lf[i - 1] + Math.log(i)); }
  function pp(l, k) { return Math.exp(-l + k * Math.log(l) - lf[k]); }
  function pb(n, p, k) { return k > n ? 0 : Math.exp(lf[n] - lf[k] - lf[n - k] + k * Math.log(p) + (n - k) * Math.log(1 - p)); }
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function dessiner() {
    var l = parseFloat(sl.value), n = parseInt(sn.value, 10), p = l / n, ok = p < 0.99, k, mx = 0;
    lv.textContent = fr(l, 1); nv.textContent = n;
    var K = Math.min(60, Math.ceil(l + 6 * Math.sqrt(l) + 4)), A = [], Bn = [];
    for (k = 0; k <= K; k++) { A.push(pp(l, k)); Bn.push(ok ? pb(n, p, k) : 0); mx = Math.max(mx, A[k], Bn[k]); }
    var X0 = 30, X1 = 448, Y0 = 195, Y1 = 14, bw = (X1 - X0) / (K + 1), h = '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    function ys(v) { return Y0 - (Y0 - Y1) * v / (mx * 1.1); }
    for (k = 0; k <= K; k++) {
      h += '<rect x="' + (X0 + k * bw + 0.5).toFixed(1) + '" y="' + ys(A[k]).toFixed(1) + '" width="' + Math.max(0.6, bw - 1).toFixed(1) + '" height="' + (Y0 - ys(A[k])).toFixed(1) + '" fill="#006C65" fill-opacity="0.6"/>';
      if (ok) { h += '<circle cx="' + (X0 + (k + 0.5) * bw).toFixed(1) + '" cy="' + ys(Bn[k]).toFixed(1) + '" r="' + Math.min(4.2, Math.max(2, bw / 3)).toFixed(1) + '" fill="#C2770B" stroke="#fff" stroke-width="0.8"/>'; }
    }
    var st = 1, ca = [1, 2, 5, 10, 20];
    for (i = 0; i < ca.length; i++) { st = ca[i]; if (K / st <= 10) { break; } }
    for (k = 0; k <= K; k += st) { h += '<text x="' + (X0 + (k + 0.5) * bw).toFixed(1) + '" y="' + (Y0 + 16) + '" font-size="12" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + k + '</text>'; }
    h += '<text x="' + X1 + '" y="' + (Y0 + 32) + '" font-size="12" text-anchor="end" fill="#334155" font-family="Georgia,serif" font-style="italic">k</text>';
    svg.innerHTML = h;
    var tv = 0;
    if (ok) { for (k = 0; k <= 400; k++) { tv += Math.abs(pp(l, k) - pb(n, p, k)); } tv /= 2; }
    out.innerHTML = ok ? '<span style="color:#006C65">barres : Poisson</span> &nbsp; <span style="color:#C2770B">points : binomiale B(' + n + ' ; ' + fr(p, 3) + ')</span><br>écart entre les deux lois (distance en variation) : <b>' + fr(tv, 4) + '</b>' : 'Il faut n > λ pour que p = λ/n soit une probabilité.';
  }
  sl.addEventListener('input', dessiner); sn.addEventListener('input', dessiner);
  dessiner();
})();
</script>

### Pourquoi la radioactivité est poissonnienne

Un échantillon contient $N$ noyaux identiques, dont chacun a une probabilité $p = \frac{\Delta t}{\tau}$, très petite, de se désintégrer pendant un intervalle $\Delta t$ très court devant la durée de vie moyenne $\tau$, indépendamment des autres. Le nombre de désintégrations observées pendant $\Delta t$ suit donc la loi binomiale $\mathcal{B}(N, p)$ avec $N$ immense et $p$ minuscule, c'est-à-dire, d'après le théorème précédent, une loi de Poisson de paramètre $\lambda = Np = \frac{N\Delta t}{\tau}$, le produit du taux moyen de désintégrations par la durée de comptage. Trois conséquences pour qui compte des événements&nbsp;:

- **L'incertitude d'un comptage.** Si l'on a compté $N_c$ événements, la fluctuation typique est $\sqrt{N_c}$, soit une incertitude relative de $\frac{1}{\sqrt{N_c}}$. Pour mesurer un taux à 1&nbsp;% près, il faut compter $10000$ événements&nbsp;; pour le mesurer deux fois plus précisément, il faut compter quatre fois plus longtemps.
- **Le bruit de comptage** (ou bruit de grenaille, *shot noise*). Les photons reçus par un capteur, les électrons qui franchissent une jonction arrivent de façon indépendante et suivent la même loi&nbsp;: le rapport signal sur bruit d'une image plafonne à $\sqrt{N_c}$, quelle que soit la qualité de l'électronique.
- **Une vérification expérimentale.** Rutherford et Geiger ont compté en 1910 les scintillations produites par les particules $\alpha$ d'une source de polonium sur plus de $2600$ intervalles de $7{,}5$ s, avec une moyenne d'environ $3{,}9$ particules par intervalle. La fréquence observée de chaque valeur $k$ suivait la loi de Poisson, ce que le mathématicien Harry Bateman a établi dans un appendice du même article.

### Le processus de Poisson et la loi exponentielle

Supposons que des événements indépendants se produisent à un taux moyen constant $\Gamma$ (par seconde, par exemple). Le nombre d'événements dans un intervalle de durée $t$ suit la loi $\mathcal{P}(\Gamma t)$. En particulier, la probabilité qu'il n'y en ait aucun pendant $t$ est $\mathrm{e}^{-\Gamma t}$, et c'est aussi la probabilité que le temps d'attente $T$ du premier événement dépasse $t$. On vient de décrire une nouvelle loi, à densité.

<div class="bloc bloc-def">
<div class="bloc-titre">Loi exponentielle</div>

Soit $\Gamma > 0$. Une variable aléatoire $T$ suit la **loi exponentielle** de paramètre $\Gamma$ si elle a pour densité $f(t) = \Gamma\mathrm{e}^{-\Gamma t}$ pour $t \ge 0$, c'est-à-dire si $P(T > t) = \mathrm{e}^{-\Gamma t}$. Son espérance est $E(T) = \frac{1}{\Gamma}$ et son écart-type aussi.

</div>

<div class="bloc bloc-prop">
<div class="bloc-titre">Absence de mémoire</div>

Si $T$ suit une loi exponentielle, alors pour tous $s, t \ge 0$,
$$P(T > s + t \mid T > s) = P(T > t).$$

</div>

En effet, $P(T > s + t \mid T > s) = \frac{\mathrm{e}^{-\Gamma(s+t)}}{\mathrm{e}^{-\Gamma s}} = \mathrm{e}^{-\Gamma t}$. Le temps déjà attendu ne renseigne pas sur le temps qui reste&nbsp;: un noyau radioactif ne vieillit pas. Un noyau qui a survécu un milliard d'années a la même probabilité de se désintégrer dans la seconde qui vient qu'un noyau tout juste formé. La durée de vie moyenne est $\tau = \frac{1}{\Gamma}$, et la **demi-vie** $t_{1/2}$, définie par $\mathrm{e}^{-\Gamma t_{1/2}} = \frac{1}{2}$, vaut $t_{1/2} = \frac{\ln 2}{\Gamma} = \tau \ln 2 \approx 0{,}69\tau$.

<details class="encadre">
<summary class="encadre-titre">Le paradoxe de l'autobus</summary>
<p>Des autobus passent à un arrêt à des instants de Poisson, en moyenne toutes les $10$ minutes. Un voyageur arrive à un instant quelconque. Combien attend-il en moyenne&nbsp;? On répond souvent $5$ minutes, par symétrie. Mais l'absence de mémoire dit que le temps d'attente suit une loi exponentielle de moyenne $10$ minutes, quel que soit le moment d'arrivée. Le voyageur a plus de chances de tomber dans un long intervalle entre deux autobus que dans un court&nbsp;: l'intervalle dans lequel il se trouve dure en moyenne $20$ minutes, deux fois plus que l'intervalle typique. C'est le paradoxe de l'inspection, qui se retrouve pour les files d'attente, les pannes et les temps de réponse.</p>
</details>

### Quelques propriétés utiles

<div class="bloc bloc-prop">
<div class="bloc-titre">Somme de lois de Poisson</div>

Si $X$ et $Y$ sont indépendantes, de lois $\mathcal{P}(\lambda_1)$ et $\mathcal{P}(\lambda_2)$, alors $X + Y$ suit $\mathcal{P}(\lambda_1 + \lambda_2)$.

</div>

Pour deux sources radioactives indépendantes, par exemple, le comptage total est encore poissonnien, de moyenne la somme des moyennes. Inversement, si chaque événement n'est détecté qu'avec une probabilité $\varepsilon$ (le rendement d'un détecteur), le nombre d'événements détectés suit $\mathcal{P}(\varepsilon\lambda)$&nbsp;: un tri au hasard d'un comptage de Poisson reste poissonnien.

<details class="encadre">
<summary class="encadre-titre">La preuve de l'additivité</summary>
<p>Pour tout entier $n \ge 0$, $P(X + Y = n) = \sum_{k=0}^{n} \mathrm{e}^{-\lambda_1}\frac{\lambda_1^k}{k!}\,\mathrm{e}^{-\lambda_2}\frac{\lambda_2^{n-k}}{(n-k)!} = \frac{\mathrm{e}^{-(\lambda_1 + \lambda_2)}}{n!}\sum_{k=0}^{n}\binom{n}{k}\lambda_1^k\lambda_2^{n-k} = \mathrm{e}^{-(\lambda_1 + \lambda_2)}\frac{(\lambda_1 + \lambda_2)^n}{n!}$, par la formule du binôme.</p>
</details>

Quand $\lambda$ est grand, la loi de Poisson ressemble à une loi normale d'espérance $\lambda$ et de variance $\lambda$. Cela se voit en déplaçant le curseur $\lambda$ de la figure précédente, et cela découle du théorème de de Moivre-Laplace.

### Des événements au hasard ne sont pas régulièrement espacés

Des événements indépendants ne se répartissent pas uniformément&nbsp;: le hasard fabrique des paquets et des vides. Dans la figure suivante, on lance $N$ points au hasard sur un carré découpé en $100$ cases, et l'on compte les points par case. Le nombre de points par case suit une loi de Poisson de paramètre $\lambda = \frac{N}{100}$&nbsp;: les barres montrent la répartition observée des cases, les points orange la répartition attendue.

<div class="fig">
<p class="fig-ctl"><label for="pp-n">Nombre de points $N$&nbsp;: <span id="pp-nv"></span></label><input type="range" id="pp-n" min="20" max="400" step="10" value="100"></p>
<p class="fig-ctl"><button type="button" id="pp-b">Nouveau tirage</button></p>
<svg id="pp-svg" viewBox="0 0 460 246" role="img" aria-label="Points tirés au hasard sur un carré de cent cases, et histogramme du nombre de points par case"></svg>
<p class="fig-val" id="pp-val"></p>
</div>
<script>
(function () {
  var sl = document.getElementById('pp-n'), svg = document.getElementById('pp-svg'), out = document.getElementById('pp-val'), nv = document.getElementById('pp-nv');
  var pts = [], G = 10;
  function fr(x, d) { return x.toFixed(d).replace('.', ','); }
  function tirer() { var N = parseInt(sl.value, 10); pts = []; for (var i = 0; i < N; i++) { pts.push([Math.random(), Math.random()]); } dessiner(); }
  function fact(k) { var f = 1; for (var i = 2; i <= k; i++) { f *= i; } return f; }
  function dessiner() {
    var N = pts.length, lam = N / (G * G), cnt = [], i, k;
    nv.textContent = N;
    for (i = 0; i < G * G; i++) { cnt.push(0); }
    pts.forEach(function (p) { cnt[Math.floor(p[1] * G) * G + Math.floor(p[0] * G)]++; });
    var cs = 20, ox = 10, oy = 12, mxc = Math.max.apply(null, cnt), h = '';
    for (i = 0; i < G * G; i++) {
      var cx = ox + (i % G) * cs, cy = oy + Math.floor(i / G) * cs;
      h += '<rect x="' + cx + '" y="' + cy + '" width="' + cs + '" height="' + cs + '" fill="' + (cnt[i] === 0 ? '#FDF6EC' : '#006C65') + '" fill-opacity="' + (cnt[i] === 0 ? 1 : Math.min(0.55, 0.08 + 0.1 * cnt[i])) + '" stroke="#CBD5E1" stroke-width="0.8"/>';
    }
    pts.forEach(function (p) { h += '<circle cx="' + (ox + p[0] * G * cs).toFixed(1) + '" cy="' + (oy + p[1] * G * cs).toFixed(1) + '" r="1.9" fill="#334155"/>'; });
    var K = Math.max(mxc, Math.ceil(lam + 3 * Math.sqrt(lam))) + 1, hist = [], ex = [], my = 0;
    for (k = 0; k <= K; k++) { hist.push(0); ex.push(G * G * Math.exp(-lam) * Math.pow(lam, k) / fact(k)); }
    cnt.forEach(function (c) { hist[c]++; });
    for (k = 0; k <= K; k++) { my = Math.max(my, hist[k], ex[k]); }
    var X0 = 250, X1 = 450, Y0 = 205, Y1 = 20, bw = (X1 - X0) / (K + 1);
    function ys(v) { return Y0 - (Y0 - Y1) * v / (my * 1.1); }
    h += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#64748B" stroke-width="1.2"/>';
    for (k = 0; k <= K; k++) {
      h += '<rect x="' + (X0 + k * bw + 0.5).toFixed(1) + '" y="' + ys(hist[k]).toFixed(1) + '" width="' + Math.max(0.6, bw - 1).toFixed(1) + '" height="' + (Y0 - ys(hist[k])).toFixed(1) + '" fill="#004D80" fill-opacity="0.6"/>';
      h += '<circle cx="' + (X0 + (k + 0.5) * bw).toFixed(1) + '" cy="' + ys(ex[k]).toFixed(1) + '" r="3.4" fill="#C2770B" stroke="#fff" stroke-width="0.8"/>';
      if (K <= 14 || k % 2 === 0) { h += '<text x="' + (X0 + (k + 0.5) * bw).toFixed(1) + '" y="' + (Y0 + 15) + '" font-size="11" text-anchor="middle" fill="#334155" font-family="Georgia,serif">' + k + '</text>'; }
    }
    h += '<text x="' + X1 + '" y="' + (Y0 + 30) + '" font-size="11" text-anchor="end" fill="#334155" font-family="Georgia,serif" font-style="italic">points par case</text>';
    h += '<text x="' + X0 + '" y="' + (Y1 - 6) + '" font-size="11" fill="#334155" font-family="Georgia,serif" font-style="italic">nombre de cases</text>';
    svg.innerHTML = h;
    out.innerHTML = 'λ = ' + fr(lam, 2) + ' points par case en moyenne &nbsp; cases vides : ' + hist[0] + ' (attendu ' + fr(ex[0], 1) + ') &nbsp; case la plus peuplée : ' + mxc + ' points';
  }
  sl.addEventListener('input', tirer);
  document.getElementById('pp-b').addEventListener('click', tirer);
  tirer();
})();
</script>

### Deux exemples historiques

<details class="encadre">
<summary class="encadre-titre">Les coups de pied de cheval de l'armée prussienne</summary>
<p>Ladislaus von Bortkiewicz, dans <i>Das Gesetz der kleinen Zahlen</i> (1898), a étudié le nombre de soldats tués par un coup de sabot de cheval dans $14$ corps de cavalerie prussiens pendant $20$ ans, soit $280$ observations «&nbsp;corps-année&nbsp;». Il y a eu $196$ morts au total, soit $\lambda = 0{,}70$ par corps et par an. La loi de Poisson de paramètre $0{,}70$ décrit remarquablement les données&nbsp;:</p>
<table class="tbl" style="max-width:100%;">
<tr><th>morts par corps et par an</th><th>observé</th><th>attendu, $\mathcal{P}(0{,}70)$</th></tr>
<tr><th>0</th><td>144</td><td>139,0</td></tr>
<tr><th>1</th><td>91</td><td>97,3</td></tr>
<tr><th>2</th><td>32</td><td>34,1</td></tr>
<tr><th>3</th><td>11</td><td>7,9</td></tr>
<tr><th>4</th><td>2</td><td>1,4</td></tr>
</table>
</details>

<details class="encadre">
<summary class="encadre-titre">Les bombes volantes sur Londres</summary>
<p>En 1946, l'actuaire R. D. Clarke a découpé le sud de Londres en $576$ carrés de $0{,}25$ km$^2$ et compté les impacts de bombes volantes de 1944&nbsp;: $537$ impacts, soit $\lambda \approx 0{,}93$ par carré. On pouvait craindre que les impacts soient dirigés vers certains quartiers, ou au contraire dispersés avec régularité. Les données suivent la loi de Poisson&nbsp;:</p>
<table class="tbl" style="max-width:100%;">
<tr><th>impacts par carré</th><th>carrés observés</th><th>attendu, $\mathcal{P}(0{,}93)$</th></tr>
<tr><th>0</th><td>229</td><td>226,7</td></tr>
<tr><th>1</th><td>211</td><td>211,4</td></tr>
<tr><th>2</th><td>93</td><td>98,5</td></tr>
<tr><th>3</th><td>35</td><td>30,6</td></tr>
<tr><th>4</th><td>7</td><td>7,1</td></tr>
<tr><th>5 et plus</th><td>1</td><td>1,6</td></tr>
</table>
<p>Les impacts se répartissent donc au hasard, et les «&nbsp;grappes&nbsp;» de plusieurs impacts dans un même carré, qui semblent signaler une cible, sont aussi celles que prévoit le hasard (comme les cases peuplées de la figure ci-dessus).</p>
</details>

### Où rencontre-t-on la loi de Poisson&nbsp;?

<details class="encadre">
<summary class="encadre-titre">Un inventaire d'applications</summary>
<ul>
<li><b>Téléphonie et files d'attente.</b> Agner Krarup Erlang a modélisé en 1909 les appels reçus par un central téléphonique de Copenhague par un processus de Poisson, ce qui a fondé la théorie des files d'attente. On l'utilise encore pour dimensionner des centres d'appels, des caisses, des serveurs.</li>
<li><b>Comptage de cellules.</b> Dans un hémocytomètre (une lame quadrillée), le nombre de cellules par carré suit une loi de Poisson. William Gosset, dit «&nbsp;Student&nbsp;», l'a vérifié en 1907 avec des cellules de levure, ce qui permet d'estimer l'erreur d'un comptage.</li>
<li><b>Astronomie et imagerie.</b> Le nombre de photons reçus par un pixel pendant la pose suit une loi de Poisson, ce qui impose le bruit de grenaille ($\sqrt{N_c}$), limite fondamentale du rapport signal sur bruit.</li>
<li><b>Assurance.</b> Le nombre de sinistres d'un portefeuille par an est modélisé par une loi de Poisson, ce qui donne les premiers modèles de la ruine d'une compagnie d'assurance.</li>
<li><b>Informatique et réseaux.</b> Les arrivées de requêtes sur un serveur ou de paquets sur un lien, quand elles viennent de nombreux utilisateurs indépendants.</li>
<li><b>Sport.</b> Le nombre de buts marqués par une équipe dans un match de football est souvent modélisé par une loi de Poisson, dont le paramètre dépend de la force des équipes.</li>
<li><b>Physique des particules.</b> Les muons cosmiques qui traversent un détecteur, les événements rares recherchés dans un collisionneur.</li>
</ul>
<p>Une condition limite l'usage de la loi de Poisson&nbsp;: les événements doivent être indépendants et de taux constant. Quand ils arrivent par salves (épidémies, séismes qui provoquent des répliques, pannes en cascade), la variance dépasse la moyenne, et on utilise des lois plus dispersées, comme la loi binomiale négative.</p>
</details>

<details class="exercice">
<summary class="exercice-titre">Trois exercices sur la loi de Poisson</summary>
<p><b>1.</b> Un compteur enregistre en moyenne $3$ particules par seconde. Quelle est la probabilité de n'en enregistrer aucune pendant une seconde&nbsp;? D'en enregistrer au moins deux&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Le nombre de particules suit $\mathcal{P}(3)$. $P(X = 0) = \mathrm{e}^{-3} \approx 0{,}050$. $P(X \ge 2) = 1 - P(X = 0) - P(X = 1) = 1 - \mathrm{e}^{-3}(1 + 3) \approx 0{,}80$.</p>
</details>
<p><b>2.</b> Combien de temps faut-il compter pour mesurer ce taux avec une incertitude relative de $1\ \%$&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Il faut $N_c$ comptages tels que $\frac{1}{\sqrt{N_c}} = 0{,}01$, soit $N_c = 10\,000$, ce qui, à $3$ comptages par seconde, représente environ $3300$ secondes, soit près d'une heure.</p>
</details>
<p><b>3.</b> Un livre de $400$ pages contient $200$ coquilles réparties au hasard. Quelle est la proportion de pages sans coquille&nbsp;? Et de pages qui en contiennent au moins deux&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Il y a en moyenne $\lambda = 0{,}5$ coquille par page. $P(X = 0) = \mathrm{e}^{-0{,}5} \approx 0{,}61$, soit environ $243$ pages sans coquille. $P(X \ge 2) = 1 - \mathrm{e}^{-0{,}5}(1 + 0{,}5) \approx 0{,}09$, soit environ $36$ pages qui en contiennent au moins deux.</p>
</details>
</details>

## Autres lois : un petit bestiaire {#autres-lois}

Les lois de ce chapitre ne sont pas isolées&nbsp;: elles se déduisent les unes des autres. La figure suivante en montre quelques liens, et les listes qui suivent donnent pour chaque loi le contexte où elle apparaît et une application.

<div class="fig">
<svg id="re-svg" viewBox="0 0 480 330" role="img" aria-label="Schéma des liens entre lois usuelles : Bernoulli, binomiale, géométrique, Poisson, exponentielle, gamma, normale, khi-deux et Student" style="max-width:480px;">
<defs><marker id="re-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748B"/></marker></defs>
<g stroke="#64748B" stroke-width="1.5" fill="none" marker-end="url(#re-fl)">
<line x1="190" y1="30" x2="112" y2="30"/>
<line x1="290" y1="30" x2="368" y2="30"/>
<line x1="420" y1="45" x2="420" y2="105"/>
<line x1="395" y1="45" x2="272" y2="105"/>
<line x1="290" y1="120" x2="368" y2="120"/>
<line x1="240" y1="135" x2="240" y2="195"/>
<line x1="60" y1="45" x2="210" y2="198"/>
<line x1="240" y1="225" x2="240" y2="285"/>
<line x1="420" y1="135" x2="420" y2="195"/>
<line x1="420" y1="225" x2="420" y2="285"/>
</g>
<g font-family="Georgia,serif" font-size="14" text-anchor="middle">
<g fill="#EEF4FA" stroke="#004D80" stroke-width="1.6"><rect x="190" y="15" width="100" height="30" rx="8"/><rect x="370" y="15" width="100" height="30" rx="8"/><rect x="10" y="15" width="100" height="30" rx="8"/><rect x="190" y="105" width="100" height="30" rx="8"/><rect x="370" y="105" width="100" height="30" rx="8"/></g>
<g fill="#FDF6EC" stroke="#C2770B" stroke-width="1.6"><rect x="190" y="195" width="100" height="30" rx="8"/><rect x="190" y="285" width="100" height="30" rx="8"/><rect x="370" y="195" width="100" height="30" rx="8"/><rect x="370" y="285" width="100" height="30" rx="8"/></g>
<g fill="#334155"><text x="240" y="35">Bernoulli</text><text x="420" y="35">Binomiale</text><text x="60" y="35">Géométrique</text><text x="240" y="125">Poisson</text><text x="420" y="125">Normale</text><text x="240" y="215">Exponentielle</text><text x="240" y="305">Gamma</text><text x="420" y="215">Khi-deux</text><text x="420" y="305">Student</text></g>
</g>
<g font-family="Georgia,serif" font-size="11" fill="#475569" font-style="italic" text-anchor="middle">
<text x="151" y="22">1<tspan dy="-4" font-size="8">er</tspan><tspan dy="4"> succès</tspan></text>
<text x="329" y="22">somme de n</text>
<text x="428" y="82" text-anchor="start">n grand</text>
<text x="300" y="90" text-anchor="end">n grand, p petit</text>
<text x="329" y="112">λ grand</text>
<text x="248" y="163" text-anchor="start">temps entre</text>
<text x="248" y="176" text-anchor="start">événements</text>
<text x="140" y="150" text-anchor="end">version continue</text>
<text x="248" y="258" text-anchor="start">somme de k</text>
<text x="412" y="168" text-anchor="end">somme de carrés</text>
<text x="412" y="258" text-anchor="end">avec une normale</text>
</g>
</svg>
</div>

### Lois discrètes

- **Uniforme discrète** sur $\lbrace 1, \dots, r \rbrace$, avec $E = \frac{r+1}{2}$. *Contexte et application*&nbsp;: toutes les valeurs sont équiprobables, comme pour un dé équilibré, un tirage au sort ou un générateur pseudo-aléatoire.
- **Géométrique** $\mathcal{G}(p)$, avec $P(X = k) = (1-p)^{k-1}p$ et $E = \frac{1}{p}$. *Contexte et application*&nbsp;: rang du premier succès dans une suite d'épreuves de Bernoulli. Il faut en moyenne $6$ lancers pour obtenir un premier $6$. Comme l'exponentielle dont elle est la version discrète, elle n'a pas de mémoire. On l'utilise pour les temps d'attente en unités discrètes et pour la fiabilité d'un système qui peut tomber en panne à chaque cycle.
- **Hypergéométrique** $\mathcal{H}(N, K, n)$, avec $P(X = k) = \dfrac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$ et $E = \frac{nK}{N}$. *Contexte et application*&nbsp;: nombre d'objets d'un type donné quand on tire $n$ objets **sans remise** parmi $N$, dont $K$ sont du type voulu. Elle sert au contrôle de qualité, au loto, aux sondages sur de petites populations et à l'estimation d'effectifs par capture-recapture. Quand $N$ est très grand devant $n$, elle se confond avec la loi binomiale.
- **Binomiale négative** (nombre d'échecs avant le $r$-ième succès). *Contexte et application*&nbsp;: comptages plus dispersés que Poisson (variance supérieure à la moyenne), comme le nombre de cas dans une épidémie, les réclamations d'assurance ou les comptages en écologie.
- **Zipf** (loi de puissance discrète), avec $P(X = k) \propto \frac{1}{k^s}$. *Contexte et application*&nbsp;: la fréquence du $k$-ième mot le plus utilisé d'un texte décroît comme $\frac{1}{k}$, et la même loi décrit la taille des villes ou le trafic des sites web. Une loi de puissance a une queue épaisse&nbsp;: les valeurs extrêmes y sont bien plus fréquentes que dans une loi normale.
- **Benford**, avec $P(\text{premier chiffre} = d) = \log_{10}\big(1 + \frac{1}{d}\big)$, soit 30&nbsp;% pour le chiffre 1 et 5&nbsp;% pour le chiffre 9. *Contexte et application*&nbsp;: grandeurs qui s'étalent sur plusieurs ordres de grandeur (populations, prix, constantes physiques). Les comptables légistes s'en servent pour repérer les chiffres truqués, que l'on distribue spontanément de façon uniforme.

### Lois continues

- **Uniforme** sur $[a, b]$, avec $E = \frac{a+b}{2}$ et $V = \frac{(b-a)^2}{12}$. *Contexte et application*&nbsp;: aucune valeur n'est privilégiée. Pour une lecture d'instrument à $\pm\Delta$ près, l'incertitude-type vaut $\frac{\Delta}{\sqrt{3}}$ (voir <a href="../../stat/ecarttype/">écart-type expérimental</a>). C'est aussi la loi de départ de la simulation (voir <a href="../../stat/montecarlo/">Monte Carlo</a>).
- **Exponentielle** $\mathcal{E}(\Gamma)$, avec $E = \frac{1}{\Gamma}$. *Contexte et application*&nbsp;: temps d'attente entre deux événements d'un processus de Poisson, durée de vie sans vieillissement, désintégration radioactive, durée entre deux appels.
- **Gamma** (ou d'Erlang, pour un paramètre de forme entier $k$), avec $E = \frac{k}{\Gamma}$. *Contexte et application*&nbsp;: temps d'attente du $k$-ième événement d'un processus de Poisson, somme de $k$ exponentielles indépendantes. Files d'attente, fiabilité de systèmes avec $k$ étapes.
- **Normale** $\mathcal{N}(\mu, \sigma^2)$. *Contexte et application*&nbsp;: somme de nombreuses petites contributions indépendantes (théorème central limite), erreurs de mesure, grandeurs biologiques comme la taille.
- **Log-normale**&nbsp;: $\ln X$ suit une loi normale. *Contexte et application*&nbsp;: produit de nombreux facteurs aléatoires indépendants, ce qui rend positives et dissymétriques la taille de grains, les revenus, les durées de réparation, les concentrations de polluants.
- **Weibull** $\mathcal{W}(k, \lambda)$. *Contexte et application*&nbsp;: durées de vie et fiabilité. Avec $k < 1$, le risque de panne décroît avec l'âge (mortalité infantile), avec $k = 1$ on retrouve l'exponentielle, avec $k > 1$ il croît (usure). Elle décrit aussi la vitesse du vent, d'où son usage en énergie éolienne.
- **Khi-deux** $\chi^2(\nu)$&nbsp;: somme de $\nu$ carrés de variables normales centrées réduites indépendantes. *Contexte et application*&nbsp;: test d'adéquation de Pearson (une loi décrit-elle des données&nbsp;?), test d'indépendance, estimation d'une variance, et le $\chi^2$ qu'on minimise dans un ajustement par moindres carrés (voir <a href="../../stat/testhyp/">test d'hypothèse</a>).
- **Student** $t(\nu)$&nbsp;: rapport d'une normale à la racine d'un khi-deux normalisé. *Contexte et application*&nbsp;: moyenne d'un petit échantillon quand l'écart-type est inconnu, intervalles de confiance et tests sur de petits effectifs. Gosset l'a introduite en 1908 sous le pseudonyme de Student, pour le contrôle de qualité à la brasserie Guinness.
- **Cauchy** (ou de Lorentz). *Contexte et application*&nbsp;: rapport de deux variables normales centrées indépendantes, profil des raies spectrales élargies par la durée de vie des états, résonances. Elle n'a **ni espérance ni variance**&nbsp;: la moyenne de $n$ tirages suit la même loi qu'un seul tirage, et la moyenner n'améliore rien.
- **Maxwell-Boltzmann**. *Contexte et application*&nbsp;: dans un gaz à l'équilibre, chaque composante de la vitesse d'une molécule suit une loi normale de moyenne nulle et de variance $\frac{k_B T}{m}$, et la norme de la vitesse suit la loi de Maxwell. C'est le modèle de la distribution des vitesses moléculaires.
- **Pareto** (loi de puissance continue). *Contexte et application*&nbsp;: queue épaisse, comme la répartition des richesses (la règle des $80/20$), la taille des villes ou des entreprises.
- **Bêta** $\mathrm{Beta}(a, b)$, sur $[0, 1]$. *Contexte et application*&nbsp;: incertitude sur une proportion inconnue, mise à jour par la règle de Bayes (voir <a href="../../stat/bayes/">inférence bayésienne</a>).
- **Valeurs extrêmes** (Gumbel, Fréchet, Weibull). *Contexte et application*&nbsp;: loi du maximum d'un grand nombre de variables indépendantes, à la manière dont la loi normale décrit leur somme. Crues centennales, vents maximaux, séismes, dimensionnement d'ouvrages.
