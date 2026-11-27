+++
title = "Nombres particuliers"
date = 2021-03-06T14:20:50+01:00
weight = 3
+++

<style>
mjx-container[display="true"] { max-width:100%; overflow-x:auto; overflow-y:hidden; }
h2
{
color:#970E53 !important;
}
h2 a
{
color: inherit !important;
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
.tableau-large
{
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.tableau-large table
{
    min-width: 36rem;
}
.outil
{
    max-width: 40rem;
    margin: 1.4em auto;
}
.outil input[type="text"]
{
    width: 15em;
    max-width: 100%;
    font-size: 1em;
    padding: 0.2em 0.5em;
    border: 2px solid #004D80;
    border-radius: 8px;
}
.outil button
{
    font-size: 0.95em;
    padding: 0.15em 0.7em;
    margin: 0.2em 0.2em 0.2em 0;
    border: 2px solid #004D80;
    border-radius: 8px;
    background: #EEF4FA;
    color: #004D80;
    cursor: pointer;
}
.outil-scroll
{
    overflow-x: auto;
}
.outil-table
{
    border-collapse: collapse;
    width: 100%;
}
.outil-table td, .outil-table th
{
    border-bottom: 1px solid #C7DDDC;
    padding: 0.25em 0.6em;
    text-align: right;
}
.outil-table .doute
{
    color: #94A3B8;
}
.outil-res
{
    font-family: monospace;
    color: #004D80;
    margin: 0.5em 0;
    overflow-wrap: anywhere;
}
.outil-note
{
    font-size: 0.85em;
    color: #64748B;
}
.figure-centree
{
    position: relative;
    margin: 1em auto;
    max-width: 100%;
    text-align: center;
}
</style>

# Nombres particuliers

Les nombres premiers, l'algorithme d'Euclide, les fractions continues, le nombre d'or et le nombre $\mathrm{e}$ forment une chaîne. Les premiers fondent la divisibilité. L'algorithme d'Euclide calcule le plus grand diviseur commun de deux entiers, et ses quotients successifs sont ceux de la fraction continue de leur rapport. Dans le pire des cas, ces quotients valent tous 1, ce qui conduit aux nombres de Fibonacci et au nombre d'or. Le nombre $\mathrm{e}$, enfin, se rattache à ce paysage par son développement en fraction continue et par ses factorielles.

## Divisibilité et nombres premiers {#premiers}

Les nombres premiers sont en quelque sorte les atomes des nombres, les objets primordiaux.

<div class="bloc bloc-def">
<div class="bloc-titre">Nombre premier</div>

Un entier $p \ge 2$ est **premier** si ses seuls diviseurs positifs sont $1$ et $p$. Un entier $n \ge 2$ qui n'est pas premier est dit **composé**.

</div>

<div class="bloc bloc-theo">
<div class="bloc-titre">Théorème fondamental de l'arithmétique</div>

Tout entier $n \ge 2$ s'écrit comme un produit de nombres premiers, et cette écriture est unique à l'ordre des facteurs près.

</div>

Par exemple, $2026 = 2 \times 1013$, avec $2$ et $1013$ premiers. Les nombres premiers jouent ainsi pour la multiplication le rôle des briques&nbsp;: on construit tout entier par assemblage, et d'une seule façon.

### Il y en a une infinité

<div class="bloc bloc-theo">
<div class="bloc-titre">Infinité des nombres premiers</div>

Il existe une infinité de nombres premiers.

</div>

Euclide en a donné un joli exemple de démonstration par l'absurde.

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration d'Euclide</div>

Supposons qu'il existe un nombre fini de nombres premiers et dressons-en la liste complète $p_1, \dots, p_r$. Multiplions entre eux tous les nombres de cette liste et ajoutons $1$ au résultat pour obtenir le nombre
$$n = p_1 p_2 \cdots p_r + 1.$$

$n$ est-il premier&nbsp;?

- S'il l'est, on a trouvé un nombre premier absent de la liste, puisque $n$ est plus grand que chacun des $p_i$. Contradiction.
- S'il ne l'est pas, alors il est divisible par un nombre premier. Mais aucun nombre premier de la liste ne peut être un diviseur de $n$, puisque la division euclidienne de $n$ par n'importe lequel donne un reste de $1$. Donc $n$ a un facteur premier absent de la liste. Contradiction.

</div>

<details class="encadre">
<summary class="encadre-titre">Le nombre $n$ n'est pas toujours premier</summary>
<p>La preuve ne dit pas que $p_1 \cdots p_r + 1$ est premier, seulement qu'il possède un facteur premier absent de la liste. Avec $2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30031$, on obtient $30031 = 59 \times 509$, et ni 59 ni 509 ne figurent parmi les six premiers nombres premiers.</p>
</details>

Euler a donné une autre démonstration, qui relie la divergence de la série harmonique à l'infinité des nombres premiers et conduit à la fonction $\zeta$ de Riemann&nbsp;: voir [Une série, un produit](../riemann/#fonction).

<details class="encadre">
<summary class="encadre-titre">Combien y en a-t-il jusqu'à $x$ ?</summary>
<p>On note $\pi(x)$ le nombre de nombres premiers inférieurs ou égaux à $x$. Les premiers se raréfient comme l'inverse du logarithme&nbsp;: le théorème des nombres premiers dit que $\pi(x) \sim \frac{x}{\ln x}$. Par exemple, $\pi(1000) = 168$ alors que $\frac{1000}{\ln 1000} \approx 145$, et $\pi(10^6) = 78\,498$ alors que $\frac{10^6}{\ln 10^6} \approx 72\,382$. L'écart entre $\pi(x)$ et une formule exacte est l'objet de l'hypothèse de Riemann&nbsp;: voir <a href="../riemann/#formule">Où se cachent les nombres premiers</a>.</p>
</details>

### Deux curiosités

L'énigme suivante joue sur la décomposition en facteurs premiers d'un entier.

{{< youtube-plus id="bpvzvnsjjDE" ratio="16x9" width="800px" rounded=true shadow=true >}}

Et cette vidéo explique une propriété de prime abord étonnante&nbsp;: si on retranche $1$ au carré d'un nombre premier $p \ge 5$, le résultat est divisible par $24$.

{{< youtube-plus id="IOGpTFJduaA" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">Une preuve en quelques lignes</summary>
<p>On écrit $p^2 - 1 = (p-1)(p+1)$. Comme $p$ est premier et différent de $2$, il est impair&nbsp;: $p - 1$ et $p + 1$ sont deux entiers pairs consécutifs, donc l'un des deux est multiple de $4$, et le produit est multiple de $8$. Parmi les trois entiers consécutifs $p-1$, $p$, $p+1$, l'un est multiple de $3$&nbsp;; ce n'est pas $p$ (premier, différent de $3$), donc c'est $p-1$ ou $p+1$, et le produit est multiple de $3$. Comme $8$ et $3$ sont premiers entre eux, $p^2 - 1$ est multiple de $8 \times 3 = 24$.</p>
</details>

## Algorithme d'Euclide {#euclide}

C'est l'un des plus anciens algorithmes connus. Sa formulation est simplissime, mais sa puissance est redoutable. Il calcule le plus grand diviseur commun de deux entiers sans en chercher la décomposition en facteurs premiers.

<div class="bloc bloc-def">
<div class="bloc-titre">Plus grand commun diviseur (pgcd)</div>

Soit $a$ et $b$ deux entiers naturels non tous deux nuls. Leur **plus grand commun diviseur**, noté $\operatorname{pgcd}(a, b)$ (ou $a \wedge b$), est le plus grand entier qui divise à la fois $a$ et $b$.

</div>

<div class="bloc bloc-prop">
<div class="bloc-titre">Pgcd et division euclidienne</div>

Soit $a$ et $b$ deux entiers, avec $b \ge 1$, et $r$ le reste de la division euclidienne de $a$ par $b$ ($a = bq + r$, $0 \le r < b$). Alors
$$\operatorname{pgcd}(a, b) = \operatorname{pgcd}(b, r).$$

</div>

La raison est que les couples $(a, b)$ et $(b, r)$ ont les mêmes diviseurs communs&nbsp;: un entier qui divise $b$ et $r$ divise $a = bq + r$, et un entier qui divise $a$ et $b$ divise $r = a - bq$. On remplace donc $(a, b)$ par un couple plus petit sans changer le pgcd, jusqu'à ce que le reste soit nul, car $\operatorname{pgcd}(a, 0) = a$.

```python
def pgcd(a, b):
    if b == 0:
        return a
    else:
        return pgcd(b, a % b)
```

Pour $\operatorname{pgcd}(1071, 462)$&nbsp;:

| division | quotient | reste |
|:---|:---:|:---:|
| $1071 = 2 \times 462 + 147$ | 2 | 147 |
| $462 = 3 \times 147 + 21$ | 3 | 21 |
| $147 = 7 \times 21 + 0$ | 7 | 0 |

Le dernier reste non nul est $21$, donc $\operatorname{pgcd}(1071, 462) = 21$. Les quotients $2, 3, 7$ réapparaîtront dans la section sur les fractions continues.

{{< youtube-plus id="70jd0Mthyl8" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">Remonter l'algorithme : l'identité de Bézout</summary>
<p>En remontant les divisions, on exprime le pgcd comme combinaison des deux nombres de départ. Ici&nbsp;: $21 = 462 - 3 \times 147$, puis $147 = 1071 - 2 \times 462$, d'où
$$21 = 462 - 3\,(1071 - 2 \times 462) = 7 \times 462 - 3 \times 1071.$$
C'est l'identité de Bézout&nbsp;: pour tous entiers $a$ et $b$, il existe des entiers relatifs $u$ et $v$ tels que $au + bv = \operatorname{pgcd}(a, b)$. Elle sert à inverser un nombre modulo un autre, et donc en cryptographie.</p>
</details>

### Quand l'algorithme peine-t-il le plus ?

Quand $a$ et $b$ sont deux nombres consécutifs de la suite de Fibonacci. On définit cette suite par $F_0 = 0$, $F_1 = 1$ et $F_{n+2} = F_{n+1} + F_n$&nbsp;: $0, 1, 1, 2, 3, 5, 8, 13, 21, \dots$ Par exemple, pour $\operatorname{pgcd}(8, 5)$&nbsp;: $8 = 1 \times 5 + 3$, $5 = 1 \times 3 + 2$, $3 = 1 \times 2 + 1$, $2 = 2 \times 1 + 0$, soit quatre divisions pour de petits nombres, avec des quotients tous égaux à $1$ (sauf le dernier).

<div class="bloc bloc-theo">
<div class="bloc-titre">Lamé (1844)</div>

Si l'algorithme d'Euclide appliqué à $a > b \ge 1$ effectue $n$ divisions, alors $b \ge F_{n+1}$ et $a \ge F_{n+2}$. Par conséquent, le nombre de divisions est au plus d'environ $4{,}8$ fois le nombre de chiffres décimaux de $b$.

</div>

L'idée est de remonter l'algorithme à l'envers. Le dernier reste non nul vaut au moins $1 = F_1$, l'avant-dernier au moins $F_2$, et chaque reste est au moins la somme des deux suivants (car le quotient vaut au moins $1$)&nbsp;: les restes croissent au moins comme les nombres de Fibonacci. Comme $F_n$ croît comme $\varphi^n$, où $\varphi$ est le nombre d'or (voir plus bas), le nombre de divisions est de l'ordre de $\log_\varphi b \approx 4{,}8 \log_{10} b$.

{{< youtube-plus id="X6WnBdmNYiM" ratio="16x9" width="800px" rounded=true shadow=true >}}

Bref, l'étude de la complexité de l'algorithme d'Euclide fait intervenir le nombre d'or.

## Fractions continues {#fractions-continues}

Une fraction continue écrit un nombre comme un entier plus l'inverse d'un entier plus l'inverse d'un entier, et ainsi de suite.

<div class="bloc bloc-def">
<div class="bloc-titre">Fraction continue</div>

Soit $a_0 \in \mathbb{Z}$ et $a_1, a_2, \dots$ des entiers strictement positifs. On note
$$[a_0; a_1, a_2, \dots] = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{\ddots}}}.$$
Les $a_i$ sont les **quotients partiels**. Les nombres $\frac{p_n}{q_n} = [a_0; a_1, \dots, a_n]$, obtenus en s'arrêtant au rang $n$, sont les **réduites** du nombre.

</div>

Le lien avec l'algorithme d'Euclide est direct&nbsp;: les quotients successifs de l'algorithme, appliqué à $(a, b)$, sont les quotients partiels de $\frac{a}{b}$. Dans l'exemple précédent, les quotients $2, 3, 7$ donnent
$$\frac{1071}{462} = 2 + \cfrac{1}{3 + \cfrac{1}{7}} = [2; 3, 7].$$
Un nombre est rationnel si et seulement si son développement s'arrête, et l'algorithme d'Euclide s'arrête toujours. Pour un nombre irrationnel, le développement continue indéfiniment, et ses réduites sont des fractions de plus en plus précises.

<div class="outil">
<p>Choisissez un nombre (une fraction <code>p/q</code> ou un décimal) et suivez l'algorithme&nbsp;:</p>
<p><input type="text" id="cf-in" value="3.14159265358979323846" aria-label="Nombre dont on cherche la fraction continue"> <button type="button" data-v="3.14159265358979323846">π</button> <button type="button" data-v="1.41421356237309504880">√2</button> <button type="button" data-v="1.61803398874989484820">φ</button> <button type="button" data-v="2.71828182845904523536">e</button> <button type="button" data-v="1071/462">1071/462</button></p>
<p class="outil-res" id="cf-res"></p>
<div class="outil-scroll"><table class="outil-table"><thead><tr><th>rang</th><th>quotient</th><th>réduite</th><th>valeur</th></tr></thead><tbody id="cf-out"></tbody></table></div>
<p class="outil-note" id="cf-note"></p>
</div>
<script>
(function () {
  function lire(s) {
    s = s.trim().replace(',', '.');
    var m = s.match(/^(\d+)\s*\/\s*(\d+)$/);
    if (m) { if (BigInt(m[2]) === 0n) { return null; } return { num: BigInt(m[1]), den: BigInt(m[2]), exact: true }; }
    m = s.match(/^(\d+)(?:\.(\d+))?$/);
    if (!m) { return null; }
    var f = m[2] || '';
    return { num: BigInt(m[1] + f), den: 10n ** BigInt(f.length), exact: f.length === 0 };
  }
  function calculer(p) {
    var a = p.num, b = p.den, h1 = 1n, h0 = 0n, k1 = 0n, k0 = 1n, rows = [];
    while (b !== 0n && rows.length < 40) {
      var q = a / b, r = a % b, h = q * h1 + h0, k = q * k1 + k0;
      rows.push({ q: q, h: h, k: k, doute: !p.exact && k * k > p.den });
      h0 = h1; h1 = h; k0 = k1; k1 = k; a = b; b = r;
    }
    return rows;
  }
  function maj() {
    var p = lire(document.getElementById('cf-in').value);
    var out = document.getElementById('cf-out'), res = document.getElementById('cf-res'), note = document.getElementById('cf-note');
    if (!p) { out.innerHTML = ''; res.textContent = ''; note.textContent = 'Entrez une fraction p/q ou un nombre décimal positif.'; return; }
    var rows = calculer(p), t = rows.map(function (r) { return r.q.toString(); });
    res.textContent = '[' + t[0] + (t.length > 1 ? '; ' + t.slice(1).join(', ') : '') + ']';
    out.innerHTML = rows.map(function (r, i) {
      return '<tr' + (r.doute ? ' class="doute"' : '') + '><td>' + i + '</td><td>' + r.q + '</td><td>' + r.h + '/' + r.k + '</td><td>' + (Number(r.h) / Number(r.k)).toPrecision(12) + '</td></tr>';
    }).join('');
    note.textContent = rows.some(function (r) { return r.doute; }) ? 'Les lignes grisées dépendent de la troncature du décimal saisi.' : '';
  }
  document.getElementById('cf-in').addEventListener('input', maj);
  Array.prototype.forEach.call(document.querySelectorAll('.outil button[data-v]'), function (b) {
    b.addEventListener('click', function () { document.getElementById('cf-in').value = b.getAttribute('data-v'); maj(); });
  });
  maj();
})();
</script>

Les réduites sont les meilleures approximations rationnelles, au sens suivant.

<div class="bloc bloc-prop">
<div class="bloc-titre">Qualité des réduites</div>

Soit $x$ un irrationnel et $\frac{p_n}{q_n}$ ses réduites. Alors
$$\left| x - \frac{p_n}{q_n} \right| < \frac{1}{q_n q_{n+1}} < \frac{1}{q_n^2}.$$
Inversement, si une fraction $\frac{p}{q}$ vérifie $\left| x - \frac{p}{q} \right| < \frac{1}{2q^2}$, c'est une réduite de $x$.

</div>

Plus un quotient partiel est grand, plus la réduite précédente est précise. Pour $\pi = [3; 7, 15, 1, 292, \dots]$, le grand quotient $292$ explique la qualité de la réduite qui le précède&nbsp;:

| réduite de $\pi$ | erreur |
|:---:|:---:|
| $3$ | $1{,}4 \times 10^{-1}$ |
| $\frac{22}{7}$ | $1{,}3 \times 10^{-3}$ |
| $\frac{333}{106}$ | $8{,}3 \times 10^{-5}$ |
| $\frac{355}{113}$ | $2{,}7 \times 10^{-7}$ |
| $\frac{103993}{33102}$ | $5{,}8 \times 10^{-10}$ |

Les fractions continues permettent ainsi d'enquêter visuellement sur le degré de rationalité d'un nombre irrationnel en déterminant les fractions successives qui l'approximent le mieux. Elles rendent plus transparents les différents compromis qu'on est amené à faire pour tenter de caler des nombres carrés dans des nombres ronds du fait de périodicités incompatibles. On explique ainsi les calendriers, les almanachs d'éclipses et les 12 notes de musique.

{{< youtube-plus id="zSnFffFo9bk" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">Calendrier et gamme : deux compromis lus dans une fraction continue</summary>
<p><b>L'année.</b> L'année tropique dure environ $365{,}2422$ jours, dont la partie fractionnaire donne $0{,}2422 = [0; 4, 7, 1, 3, \dots]$. Les réduites sont $\frac{1}{4}$, $\frac{7}{29}$, $\frac{8}{33}$, etc.&nbsp;: la première est le calendrier julien (une année bissextile tous les 4 ans), la troisième donne 8 années bissextiles en 33 ans. Le calendrier grégorien, avec 97 années bissextiles en 400 ans, adopte un autre compromis.</p>
<p><b>La gamme.</b> Douze quintes justes (de rapport $\frac{3}{2}$) dépassent sept octaves (de rapport $2$) de $1{,}4\ \%$&nbsp;: $(\frac{3}{2})^{12} \approx 129{,}7$ alors que $2^7 = 128$. La raison est que $\log_2 \frac{3}{2} = 0{,}58496\dots = [0; 1, 1, 2, 2, 3, 1, \dots]$ a pour réduites $\frac{1}{2}, \frac{3}{5}, \frac{7}{12}, \frac{24}{41}, \frac{31}{53}, \dots$&nbsp;: la fraction $\frac{7}{12}$ signifie «&nbsp;12 quintes $\approx$ 7 octaves&nbsp;», d'où les 12 notes de la gamme occidentale, et $\frac{31}{53}$ une gamme à 53 notes plus précise.</p>
</details>

Les fractions continues nous ont aussi été utiles pour l'étude de la complexité de l'algorithme d'Euclide, avec lequel elles entretiennent un lien étroit.

## Nombre d'or {#nombre-or}

Le nombre d'or est une sorte de tarte à la crème des mathématiques. D'infinies élucubrations lui font tenir un rôle quasi mystique. On ne peut nier cependant qu'il apparaît parfois dans des endroits étonnants. Reste seulement à démystifier sa présence.

<div class="bloc bloc-def">
<div class="bloc-titre">Nombre d'or</div>

Le **nombre d'or** est la racine positive de l'équation $x^2 = x + 1$&nbsp;:
$$\varphi = \frac{1 + \sqrt{5}}{2} \approx 1{,}618.$$

</div>

En divisant l'équation par $x$, on obtient $x = 1 + \frac{1}{x}$, qu'on peut réinjecter dans elle-même&nbsp;: $\varphi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}$. Son développement en fraction continue est donc $[1; 1, 1, 1, \dots]$, et ses réduites sont les rapports de nombres de Fibonacci consécutifs, $\frac{F_{n+1}}{F_n} = 1, 2, \frac{3}{2}, \frac{5}{3}, \frac{8}{5}, \dots$, qui convergent vers $\varphi$. La formule de Binet donne le terme général&nbsp;:
$$F_n = \frac{\varphi^n - \left(-\frac{1}{\varphi}\right)^n}{\sqrt{5}}.$$

<div class="bloc bloc-theo">
<div class="bloc-titre">Hurwitz (1891)</div>

Pour tout irrationnel $x$, il existe une infinité de fractions $\frac{p}{q}$ telles que $\left| x - \frac{p}{q} \right| < \frac{1}{\sqrt{5} q^2}$. La constante $\sqrt{5}$ ne peut pas être remplacée par un nombre plus grand, et le nombre d'or le montre.

</div>

Autrement dit, $\varphi$ est le nombre le plus mal approchable par des rationnels, parce que tous ses quotients partiels valent $1$, le plus petit possible, et qu'aucune réduite n'y est exceptionnellement bonne. C'est la raison pour laquelle il apparaît quand une disposition doit éviter les coïncidences rationnelles.

### Phyllotaxie : les graines du tournesol

La vidéo suivante explique ainsi comment suite de Fibonacci et nombre d'or apparaissent dans certains arrangements des plantes. Armé d'un peu de physique et des fractions continues, on comprend que leur présence est somme toute logique, voire triviale.

{{< youtube-plus id="_V4GjyvDTfI" ratio="4x3" width="640px" rounded=true shadow=true >}}

Pour le constater soi-même, on place des graines l'une après l'autre, chacune tournée d'un angle fixe par rapport à la précédente et un peu plus loin du centre. L'angle d'or est $360° \times \left(1 - \frac{1}{\varphi}\right) \approx 137{,}508°$.

<div class="outil">
<p><label for="ph-a">Angle entre deux graines&nbsp;:</label> <input type="range" id="ph-a" min="0" max="180" step="any" value="137.5077640500379" style="width:min(18em,100%);"> <span id="ph-val"></span></p>
<p><button type="button" data-a="90">90° (un quart de tour)</button> <button type="button" data-a="137.5077640500379">angle d'or</button> <button type="button" data-a="144">144° (2/5 de tour)</button></p>
<div class="figure-centree"><svg id="ph-svg" viewBox="-200 -200 400 400" role="img" aria-label="Graines disposées selon un angle fixe entre deux graines successives" style="width:100%;max-width:420px;height:auto;"></svg></div>
</div>
<script>
(function () {
  var N = 600, svg = document.getElementById('ph-svg'), sl = document.getElementById('ph-a'), val = document.getElementById('ph-val');
  function dessiner() {
    var a = parseFloat(sl.value), h = '';
    for (var n = 1; n <= N; n++) {
      var r = 190 * Math.sqrt(n / N), t = n * a * Math.PI / 180;
      h += '<circle cx="' + (r * Math.cos(t)).toFixed(1) + '" cy="' + (r * Math.sin(t)).toFixed(1) + '" r="3.4" fill="hsl(' + Math.round(330 - 130 * n / N) + ',65%,42%)"/>';
    }
    svg.innerHTML = h;
    val.textContent = a.toFixed(3).replace('.', ',') + '°';
  }
  sl.addEventListener('input', dessiner);
  Array.prototype.forEach.call(document.querySelectorAll('button[data-a]'), function (b) {
    b.addEventListener('click', function () { sl.value = b.getAttribute('data-a'); dessiner(); });
  });
  dessiner();
})();
</script>

Avec un angle qui est une fraction simple de tour, comme un quart de tour, les graines s'alignent sur quelques rayons et laissent des vides. L'angle d'or, dont le rapport à un tour est le nombre le plus mal approché par des fractions, remplit le disque de façon homogène, et les spirales visibles comptent des nombres de Fibonacci.

Le nombre d'or fait aussi son apparition dans l'étude de la complexité de l'algorithme d'Euclide, comme on l'a vu plus haut. Un [**autre exemple plus discutable**](https://www.nature.com/articles/s41598-017-05122-5), mais tournant autour des mêmes concepts développés dans les vidéos précédentes&nbsp;: l'inverse du nombre d'or serait le ratio optimal dans le jeu de l'ultimatum.

<h2 id="nombre-e"><a href="../exponentielle">Nombre $\mathrm{e}$</a></h2>

L'autre grand nombre irrationnel a une origine plus tardive et moins spectaculaire que $\pi$&nbsp;: il apparaît pour la première fois au 17<sup>e</sup> siècle, dans une histoire d'intérêts composés étudiée par Jacob Bernoulli. Baptisé $\mathrm{e}$ par Euler, il a vite débordé ce contexte financier pour surgir dans presque tous les domaines des mathématiques et de la physique.

Son développement en fraction continue est plus régulier que celui de $\pi$&nbsp;: $\mathrm{e} = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, 1, 8, \dots]$, où l'on retrouve les entiers pairs $2, 4, 6, 8, \dots$ séparés de deux $1$. Cette régularité, établie par Euler, donne une preuve de l'irrationalité de $\mathrm{e}$.

Ce talent d'ubiquité vient en bonne partie de son écriture $\mathrm{e} = \sum \frac{1}{k!}$, et d'un fait simple&nbsp;: **parmi les $k!$ façons de ranger $k$ objets, une seule les met dans l'ordre.** Dès qu'un phénomène impose un ordre (chronologique ou croissant) à $k$ éléments, la fraction $\frac{1}{k!}$ apparaît, et $\mathrm{e}$ n'est jamais loin&nbsp;:

<div class="tableau-large">

| Domaine | Où se cache le $\frac{1}{k!}$ | Ce que donne la somme |
| :--- | :--- | :--- |
| **[Intérêts composés](../exponentielle/)** | les intérêts de $k$-ième génération, nés de $k$ versements successifs | le capital plafonne à $\mathrm{e}$ |
| **[Géométrie](../../geometrie/simplexes/)** | le volume de la part du cube $[0, 1]^k$ où les coordonnées sont rangées dans l'ordre | $1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots = \mathrm{e}$ |
| **[Physique quantique](../../geometrie/simplexes/#flèche-du-temps--dyson-et-wick)** | les $k$ interactions d'une histoire ont lieu dans l'ordre chronologique | l'exponentielle ordonnée de la [série de Dyson](/physique/tqc/gifted_amateur/tqc7/#la-série-de-dyson) |
| **[Probabilités](../../proba/simplexes_proba/)** | $k$ nombres tirés au hasard sont rangés dans l'ordre croissant avec probabilité $\frac{1}{k!}$ | il faut en moyenne $\mathrm{e}$ tirages avant une première baisse |

</div>

Pourquoi l'ordre produit-il toujours $\frac{1}{k!}$, et pas autre chose&nbsp;? Parce que, dans tous ces exemples, chaque étape se produit de la même façon, sans dépendre de ce qui s'est passé avant&nbsp;: le $k!$ est [la signature des processus sans mémoire](../../geometrie/simplexes/#le-k-signature-de-labsence-de-mémoire).

## Exercices {#exercices}

<details class="exercice">
<summary class="exercice-titre">Quatre exercices</summary>
<p><b>1.</b> Calculer $\operatorname{pgcd}(1260, 198)$ par l'algorithme d'Euclide, puis trouver des entiers $u$ et $v$ tels que $1260u + 198v$ soit égal à ce pgcd.</p>
<details class="solution">
<summary>Solution</summary>
<p>$1260 = 6 \times 198 + 72$, $198 = 2 \times 72 + 54$, $72 = 1 \times 54 + 18$, $54 = 3 \times 18 + 0$&nbsp;: le pgcd est $18$. En remontant, $18 = 72 - 54 = 72 - (198 - 2 \times 72) = 3 \times 72 - 198 = 3\,(1260 - 6 \times 198) - 198 = 3 \times 1260 - 19 \times 198$, donc $u = 3$ et $v = -19$. On vérifie&nbsp;: $3780 - 3762 = 18$.</p>
</details>
<p><b>2.</b> Donner le développement en fraction continue de $\frac{1260}{198}$, puis celui de $\frac{355}{113}$.</p>
<details class="solution">
<summary>Solution</summary>
<p>Les quotients de l'exercice précédent sont $6, 2, 1, 3$&nbsp;: $\frac{1260}{198} = [6; 2, 1, 3]$ (c'est aussi $\frac{70}{11}$). Pour $\frac{355}{113}$&nbsp;: $355 = 3 \times 113 + 16$, $113 = 7 \times 16 + 1$, $16 = 16 \times 1 + 0$, donc $\frac{355}{113} = [3; 7, 16]$. On retrouve les deux premiers quotients de $\pi$, et le grand quotient final $16$ dit que $\frac{355}{113}$ est une très bonne approximation de $\pi$.</p>
</details>
<p><b>3.</b> Montrer qu'il existe, pour tout entier $m \ge 1$, $m$ entiers consécutifs qui ne sont pas premiers.</p>
<details class="solution">
<summary>Solution</summary>
<p>Considérons les entiers $(m+1)! + 2, (m+1)! + 3, \dots, (m+1)! + (m+1)$, au nombre de $m$. Pour $2 \le j \le m + 1$, $j$ divise $(m+1)!$ et $j$ divise $j$, donc $j$ divise $(m+1)! + j$, qui est supérieur à $j$&nbsp;: il est composé. Les nombres premiers peuvent donc être séparés par des écarts arbitrairement grands, bien qu'il y en ait une infinité.</p>
</details>
<p><b>4.</b> Soit $x = [1; 1, 1, 1, \dots]$ (une infinité de $1$). Montrer que $x = \varphi$, puis calculer $\frac{F_{n+1}}{F_n}$ pour $n$ de $1$ à $7$ et comparer à $\varphi$.</p>
<details class="solution">
<summary>Solution</summary>
<p>Comme le développement se répète, $x = 1 + \frac{1}{x}$, donc $x^2 = x + 1$ et $x > 0$&nbsp;: $x = \varphi$. Les rapports valent $\frac{1}{1} = 1$, $\frac{2}{1} = 2$, $\frac{3}{2} = 1{,}5$, $\frac{5}{3} \approx 1{,}667$, $\frac{8}{5} = 1{,}6$, $\frac{13}{8} = 1{,}625$, $\frac{21}{13} \approx 1{,}615$&nbsp;: ils oscillent de part et d'autre de $\varphi \approx 1{,}618$ en s'en rapprochant.</p>
</details>
</details>
