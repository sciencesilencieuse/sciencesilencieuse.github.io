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

On pourra vérifier l'intervalle graphiquement avec l'applet GeoGebra suivant.

<div style="max-width: 800px; margin: 0 auto;">
  <iframe
    src="https://www.geogebra.org/material/iframe/id/w8q2tjvn/width/800/height/700/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false"
    title="Intervalle de fluctuation et loi binomiale"
    style="width: 100%; aspect-ratio: 8 / 7; border: 0;"
    scrolling="no">
  </iframe>
</div>

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

On le voit dans la figure de la loi binomiale ci-dessus&nbsp;: en cochant la case «&nbsp;courbe en cloche&nbsp;», la gaussienne de même espérance et de même écart-type épouse les barres dès que $n$ est assez grand (et $p$ pas trop proche de $0$ ou de $1$). C'est ce qui justifie l'intervalle de fluctuation asymptotique $p \pm 1{,}96\sqrt{\frac{p(1-p)}{n}}$. On peut à nouveau tirer profit de l'applet GeoGebra qui précède pour obtenir des intervalles de fluctuation.

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
