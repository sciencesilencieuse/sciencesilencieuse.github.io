+++
title = "Oscillateur harmonique"
date = 2021-03-06T14:20:50+01:00
weight = 1
hidden = false
+++

<style>
 #correc
  {
    color: #006C65;
    border-left: solid 10px #C7DDDC;
  }
 #comm
  {
    color: #004D80;
    border-left: solid 10px #B3CAD9;
  }
 #commsum
  {
    color: #004D80;
  }
 #correcsum
  {
    color: #006C65;
  }
  #grosseformule 
{
    overflow-x: auto; 
}
#preuve
{
    background-color:#EAEAEA;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
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
figure.fig
{
  margin:1.5em auto;
  text-align:center;
}
figure.fig svg
{
  height:auto;
}
figure.fig figcaption
{
  font-size:0.85em;
  color:#555;
  margin-top:0.4em;
}
/* Pour rétablir le comportement de details */
details > summary:first-of-type {
  display: list-item;     /* remet le triangle + l’accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
</style>


## Quantification de l'oscillateur harmonique et opérateurs d'échelle

### Point de départ

<div id="def">

Variables réduites sans dimension&nbsp;:

<p style="text-align:center;">$\displaystyle \hat X = \sqrt{\frac{m\omega}{\hbar}}\,\hat{x} $</p>

<p style="text-align:center;">
$\displaystyle
\hat P = \frac{\hat{p}}{\sqrt{m\hbar\omega}} 
$
</p>

<p style="text-align:center;">
$\displaystyle
 [\hat X,\hat P] = \mathrm{i}
$
</p>

</div>

Dans ces variables, le hamiltonien s'écrit&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\hat H = \frac{\hbar\omega}{2}\left(\hat X^2+\hat P^2\right)
$
</p>
</div>

Les opérateurs d'échelle sont&nbsp;:

<div id="def">
<p style="text-align:center;">$\displaystyle \hat a = \frac{\hat X+\mathrm{i}\hat P}{\sqrt 2}  $</p>

<p style="text-align:center;">
$\displaystyle
\hat a^\dagger = \frac{\hat X-\mathrm{i}\hat P}{\sqrt 2}
$
</p>

<p style="text-align:center;">
$\displaystyle
 [\hat a,\hat a^\dagger] = 1
$
</p>

</div>

Action sur le hamiltonien&nbsp;:

<div id="theo">
<p style="text-align:center;">
En posant $\displaystyle
\hat N = \hat a^\dagger \hat a
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat H = \hbar\omega\left(\hat N+\frac12\right)
$
</p>


<p style="text-align:center;">
$\displaystyle
[\hat N,\hat a^\dagger] = +\,\hat a^\dagger \qquad [\hat N,\hat a] = -\,\hat a
$
</p>
</div>


Ces trois dernières relations vont être **redémontrées** à partir de la seule géométrie du plan de phase. Nous établirons que l'équidistance des niveaux est un fait topologique, que $\\hat a$ et $\\hat a^\\dagger$ sont les objets qui le rendent lisible, et que $n$ est un nombre de tours.

{{%notice note "Convention de notation"%}}
Pour s'y repérer dans le va et vient entre classique et quantique, les **opérateurs** quantiques ($\\hat X$, $\\hat P$, $\\hat a$, $\\hat a^\\dagger$, $\\hat N$, $\\hat H$) seront systématiquement coiffés d'un chapeau et les **fonctions classiques sur le plan de phase** ($X$, $P$, et les combinaisons que nous en formerons) seront laissées nues. Ainsi $X$ est un nombre réel qui repère un point du plan, tandis que $\\hat X$ est l'opérateur qui lui correspond. Le chapeau marque donc exactement l'endroit où l'on quantifie.
{{%/notice%}}


### Le flot classique est une rotation rigide

Les équations de Hamilton $\\dot x = p/m$ et $\\dot p = -m\\omega^2 x$, traduites dans les variables réduites classiques, donnent&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle 
\begin{cases}
\dot X = \omega P\\
\dot P = -\,\omega X
\end{cases}
$</p>

C'est le système d'une rotation uniforme du plan $(X,P)$ à la vitesse angulaire $\\omega$, dans le sens horaire.

</div>

<figure class="fig" style="width:700px;max-width:100%;">
<svg viewBox="0 0 420 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deux orbites circulaires de rayons différents balayant le même angle pendant la même durée">
<defs><marker id="ar1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#970E53" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<defs><marker id="ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#004D80" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<line x1="25" y1="115" x2="235" y2="115" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
<line x1="115" y1="15" x2="115" y2="215" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
<text x="240" y="119" font-size="12" fill="currentColor">X</text>
<text x="121" y="22" font-size="12" fill="currentColor">P</text>
<circle cx="115" cy="115" r="45" fill="none" stroke="currentColor" stroke-width="0.7" opacity="0.4"/>
<circle cx="115" cy="115" r="78" fill="none" stroke="currentColor" stroke-width="0.7" opacity="0.4"/>
<line x1="115" y1="115" x2="160" y2="115" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.6"/>
<line x1="115" y1="115" x2="140.8" y2="151.9" stroke="#970E53" stroke-width="0.8" stroke-dasharray="3 3"/>
<line x1="115" y1="115" x2="159.7" y2="178.9" stroke="#004D80" stroke-width="0.8" stroke-dasharray="3 3"/>
<path d="M160 115 A45 45 0 0 1 140.8 151.9" fill="none" stroke="#970E53" stroke-width="2.4" marker-end="url(#ar1)"/>
<path d="M193 115 A78 78 0 0 1 159.7 178.9" fill="none" stroke="#004D80" stroke-width="2.4" marker-end="url(#ar2)"/>
<circle cx="160" cy="115" r="3" fill="#970E53"/>
<circle cx="193" cy="115" r="3" fill="#004D80"/>
<text x="258" y="100" font-size="12" fill="currentColor">pendant la même durée,</text>
<text x="258" y="118" font-size="12" fill="currentColor">les deux points balayent</text>
<text x="258" y="136" font-size="12" fill="currentColor">le même angle</text>
</svg>
<figcaption>Le plan tourne d'un bloc : la vitesse angulaire ne dépend pas du rayon.</figcaption>
</figure>

Deux propriétés de ce flot, toutes deux indispensables à la suite.

**Isochronisme.** La vitesse angulaire ne dépend d'aucune des deux coordonnées&nbsp;: le plan tourne d'un bloc. C'est propre aux hamiltoniens quadratiques&nbsp;; dans un potentiel anharmonique, chaque orbite aurait sa période.

**Fermeture.** Au bout de $T = 2\\pi/\\omega$, la rotation vaut $2\\pi$&nbsp;: le flot est **l'identité**, chaque point du plan est revenu exactement à sa place.


### $a$ et $a^\dagger$ sont les modes propres de la rotation

Le système est couplé&nbsp;: $\\dot X$ fait intervenir $P$, et réciproquement. On cherche donc des combinaisons linéaires $f = uX+vP$, à coefficients complexes, dont l'évolution ne fasse intervenir qu'elles-mêmes&nbsp;:

<p style="text-align:center;">$\displaystyle \dot f = \lambda f$</p>

#### Découpler, c'est diagonaliser

Les fonctions linéaires forment un espace vectoriel $\\mathcal L$ de dimension $2$, de base $(X,P)$&nbsp;: une telle fonction est décrite par son couple de coefficients $(u,v)$.

L'opération $\\mathcal D : f \\mapsto \\dot f$ est linéaire et envoie $\\mathcal L$ dans $\\mathcal L$&nbsp;; c'est donc un endomorphisme. Explicitement&nbsp;:

<p style="text-align:center;">$\displaystyle \dot f = u\,(\omega P) + v\,(-\omega X) = (-\omega v)\,X + (\omega u)\,P$</p>

soit, dans la base $(X,P)$&nbsp;:

<p style="text-align:center;">$\displaystyle \mathcal D = \omega\begin{pmatrix} 0 & -1\\ 1 & 0\end{pmatrix}$</p>

La condition de découplage $\\dot f = \\lambda f$ s'écrit alors $\\mathcal D f = \\lambda f$.

<div id="theo">

Une combinaison découplée est un **vecteur propre** de $\\mathcal D$, et $\\lambda$ est sa valeur propre. Découpler un système différentiel linéaire et diagonaliser sa matrice sont la même opération&nbsp;: les termes hors diagonale sont exactement ceux qui font intervenir une coordonnée dans l'équation d'une autre.

</div>

<br>

<div id="preuve">

L'identification des coefficients de $X$ et de $P$ dans $\\mathcal D f = \\lambda f$ donne&nbsp;:

<p style="text-align:center;">$\displaystyle -\,\omega v = \lambda u \quad$
et 
$\displaystyle\quad \omega u = \lambda v$</p>

d'où $\\lambda^2 = -\\omega^2$, soit $\\lambda = \\mp\\,\\mathrm{i}\\omega$. Pour $\\lambda = -\\mathrm{i}\\omega$, la première équation donne $v = \\mathrm{i}u$, donc $f \\propto X + \\mathrm{i}P$. Pour $\\lambda = +\\mathrm{i}\\omega$, elle donne $v = -\\mathrm{i}u$, donc $f \\propto X - \\mathrm{i}P$.

</div>

<br>

<div id="theo">

Les seules fonctions linéaires dont l'évolution est une multiplication par un nombre sont, à un facteur près, $X+\\mathrm{i}P$ et $X-\\mathrm{i}P$&nbsp;:

<p style="text-align:center;">$\displaystyle (X+\mathrm{i}P)(t) = \mathrm{e}^{-\mathrm{i}\omega t}\,(X+\mathrm{i}P)(0)$</p>

<p style="text-align:center;">
$\displaystyle
 (X-\mathrm{i}P)(t) = \mathrm{e}^{+\mathrm{i}\omega t}\,(X-\mathrm{i}P)(0)
$
</p>

</div>

{{%notice note "Pourquoi a-t-il fallu passer aux complexes ?"%}}

Une rotation du plan réel ne laisse aucune direction réelle invariante&nbsp;; c'est à peu près sa définition. Le polynôme caractéristique $\\lambda^2+\\omega^2$ n'a pas de racine réelle, et $\\mathcal D$ n'est pas diagonalisable sur $\\mathbb R$. Les deux directions propres n'existent qu'après complexification&nbsp;: c'est de là que viennent les nombres complexes dans un problème qui n'en contenait aucun.

{{%/notice%}}

#### Ce que la valeur propre contrôle

L'équation découplée s'intègre en $f(t) = \\mathrm{e}^{\\lambda t}f(0)$, mais la nature du mouvement dépend entièrement de $\\lambda$.

<figure class="fig" style="width:800px;max-width:100%;">
<svg viewBox="0 0 440 155" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois comportements selon la valeur propre : décroissance sur une demi-droite, rotation sur un cercle, spirale">
<line x1="20" y1="70" x2="138" y2="70" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<line x1="70" y1="24" x2="70" y2="116" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<circle cx="130" cy="70" r="4.6" fill="#970E53"/>
<circle cx="112" cy="70" r="3.4" fill="#970E53"/>
<circle cx="99.4" cy="70" r="3.4" fill="#970E53"/>
<circle cx="90.6" cy="70" r="3.4" fill="#970E53"/>
<circle cx="84.4" cy="70" r="3.4" fill="#970E53"/>
<circle cx="80" cy="70" r="3.4" fill="#970E53"/>
<text x="70" y="136" font-size="11" fill="currentColor" text-anchor="middle">&#955; réel</text>
<text x="70" y="150" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">aucune rotation</text>
<line x1="160" y1="70" x2="278" y2="70" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<line x1="215" y1="24" x2="215" y2="116" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<circle cx="215" cy="70" r="42" fill="none" stroke="currentColor" stroke-width="0.7" stroke-dasharray="4 3" opacity="0.45"/>
<circle cx="257" cy="70" r="4.6" fill="#004D80"/>
<circle cx="244.7" cy="40.3" r="3.4" fill="#004D80"/>
<circle cx="215" cy="28" r="3.4" fill="#004D80"/>
<circle cx="185.3" cy="40.3" r="3.4" fill="#004D80"/>
<circle cx="173" cy="70" r="3.4" fill="#004D80"/>
<circle cx="185.3" cy="99.7" r="3.4" fill="#004D80"/>
<circle cx="215" cy="112" r="3.4" fill="#004D80"/>
<circle cx="244.7" cy="99.7" r="3.4" fill="#004D80"/>
<text x="215" y="136" font-size="11" fill="currentColor" text-anchor="middle">&#955; imaginaire pur</text>
<text x="215" y="150" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">module figé, rotation</text>
<line x1="305" y1="70" x2="423" y2="70" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<line x1="360" y1="24" x2="360" y2="116" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<circle cx="415" cy="70" r="4.6" fill="#006C65"/>
<circle cx="393.1" cy="36.9" r="3.4" fill="#006C65"/>
<circle cx="360" cy="30.3" r="3.4" fill="#006C65"/>
<circle cx="336.1" cy="46.1" r="3.4" fill="#006C65"/>
<circle cx="331.3" cy="70" r="3.4" fill="#006C65"/>
<circle cx="342.7" cy="87.3" r="3.4" fill="#006C65"/>
<circle cx="360" cy="90.7" r="3.4" fill="#006C65"/>
<circle cx="372.4" cy="82.4" r="3.4" fill="#006C65"/>
<text x="360" y="136" font-size="11" fill="currentColor" text-anchor="middle">&#955; complexe</text>
<text x="360" y="150" font-size="9.5" fill="currentColor" text-anchor="middle" opacity="0.75">spirale</text>
</svg>
<figcaption>La valeur de f à instants réguliers, dans le plan complexe, selon la valeur propre. Le gros point marque l'instant initial.</figcaption>
</figure>

Si $\\lambda$ est **réel**, $\\mathrm{e}^{\\lambda t}$ est un réel positif&nbsp;: il ne touche pas à l'argument de $f$, seulement à son module. Aucune rotation.

Si $\\lambda = \\mathrm{i}\\mu$ est **imaginaire pur**, $\\left|\\mathrm{e}^{\\mathrm{i}\\mu t}\\right| = 1$&nbsp;: le module est figé, seul l'argument avance, à vitesse constante.

Si $\\lambda$ est **quelconque**, les deux effets se composent en une spirale.

Le découplage ne suffit donc pas à produire une rotation. Ici, c'est l'énergie qui l'impose&nbsp;:

<div id="theo">

$\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(X^2+P^2\\right) = 2X\\dot X + 2P\\dot P = 2\\omega XP - 2\\omega PX = 0$. Si $\\lambda$ avait une partie réelle, $|f|$ croîtrait ou décroîtrait exponentiellement, donc $X^2+P^2$ aussi. **La conservation de l'énergie interdit à $\\lambda$ d'avoir une partie réelle.**

</div>


Algébriquement, $\\mathcal D$ est réelle et antisymétrique, ce qui force ses valeurs propres à être imaginaires pures. L'antisymétrie est la forme matricielle de la conservation de l'énergie.

$\\hat a$ et $\\hat a^\\dagger$ sont donc les **coordonnées normales de la rotation**, l'analogue des vecteurs de polarisation circulaire $\\hat{\\mathbf e}_x \\pm \\mathrm{i}\\hat{\\mathbf e}_y$. Le facteur $1/\\sqrt2$ n'est qu'une normalisation, choisie pour que le commutateur vaille $1$.

{{%notice note "Pourquoi X porte deux fréquences et non une"%}}

En additionnant les deux modes propres, $X = \\tfrac12\\left[(X+\\mathrm{i}P)+(X-\\mathrm{i}P)\\right]$, donc

<p style="text-align:center;">$\displaystyle X(t) = \tfrac12\Big[\mathrm{e}^{-\mathrm{i}\omega t}(X+\mathrm{i}P)(0) + \mathrm{e}^{+\mathrm{i}\omega t}(X-\mathrm{i}P)(0)\Big]$</p>

Exactement deux fréquences. Au plus deux, car $\\mathcal L$ est de dimension $2$ et $\\mathcal D$ n'y a que deux valeurs propres. Au moins deux, car $X$ est réelle&nbsp;: une fonction réelle est égale à sa conjuguée, donc elle ne peut contenir $\\mu$ sans contenir $-\\mu$. Aucune observable réelle non constante n'a de fréquence unique.

Le prix d'une fréquence unique est donc de renoncer à la réalité. C'est la raison de fond pour laquelle $\\hat a$ n'est pas hermitien, et pour laquelle il n'apparaît jamais seul dans une grandeur physique.

{{%/notice%}}

Visuellement&nbsp;: $\\mathrm{Re}\\left(X-\\mathrm{i}P\\right) = X$, donc la valeur de $X$ est l'ombre de celle de $X-\\mathrm{i}P$. Huit instants également espacés, régulièrement répartis sur le cercle, s'entassent aux bords une fois projetés.

<figure class="fig" style="width:700px;max-width:100%;">
<svg viewBox="0 0 420 262" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Huit instants régulièrement répartis sur le cercle des valeurs de X moins i P, dont la projection sur l'axe réel s'entasse aux bords">
<line x1="92" y1="100" x2="250" y2="100" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
<line x1="170" y1="25" x2="170" y2="180" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
<text x="252" y="116" font-size="10" fill="currentColor">Re</text>
<text x="176" y="22" font-size="10" fill="currentColor">Im</text>
<circle cx="170" cy="100" r="68" fill="none" stroke="currentColor" stroke-width="0.9" stroke-dasharray="4 3" opacity="0.5"/>
<line x1="238" y1="100" x2="238" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="218.1" y1="51.9" x2="218.1" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="170" y1="32" x2="170" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="121.9" y1="51.9" x2="121.9" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="102" y1="100" x2="102" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="218.1" y1="148.1" x2="218.1" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="121.9" y1="148.1" x2="121.9" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<line x1="170" y1="168" x2="170" y2="209" stroke="currentColor" stroke-width="0.5" stroke-dasharray="2 3" opacity="0.55"/>
<circle cx="238" cy="100" r="5" fill="#004D80"/>
<circle cx="218.1" cy="51.9" r="3.5" fill="#004D80"/>
<circle cx="170" cy="32" r="3.5" fill="#004D80"/>
<circle cx="121.9" cy="51.9" r="3.5" fill="#004D80"/>
<circle cx="102" cy="100" r="3.5" fill="#004D80"/>
<circle cx="121.9" cy="148.1" r="3.5" fill="#004D80"/>
<circle cx="170" cy="168" r="3.5" fill="#004D80"/>
<circle cx="218.1" cy="148.1" r="3.5" fill="#004D80"/>
<text x="242" y="92" font-size="10" fill="currentColor">t = 0</text>
<text x="268" y="70" font-size="10" fill="currentColor">valeur de X - iP :</text>
<text x="268" y="84" font-size="10" fill="currentColor" opacity="0.75">les huit instants sont</text>
<text x="268" y="98" font-size="10" fill="currentColor" opacity="0.75">régulièrement répartis</text>
<line x1="102" y1="212" x2="238" y2="212" stroke="currentColor" stroke-width="1.4"/>
<circle cx="102" cy="212" r="3.6" fill="#970E53"/>
<circle cx="121.9" cy="212" r="3.6" fill="#970E53"/>
<circle cx="170" cy="212" r="3.6" fill="#970E53"/>
<circle cx="218.1" cy="212" r="3.6" fill="#970E53"/>
<circle cx="238" cy="212" r="5" fill="#970E53"/>
<text x="268" y="200" font-size="10" fill="currentColor">valeur de X :</text>
<text x="268" y="214" font-size="10" fill="currentColor" opacity="0.75">les mêmes instants,</text>
<text x="268" y="228" font-size="10" fill="currentColor" opacity="0.75">entassés aux bords</text>
<text x="170" y="250" font-size="10.5" fill="currentColor" text-anchor="middle" opacity="0.8">projection sur l'axe réel</text>
</svg>
<figcaption>L'oscillation est l'ombre de la rotation.</figcaption>
</figure>


### Le poids, et pourquoi il est entier

<div id="def">

Une fonction $f$ non nulle sur le plan de phase a le **poids** $k$ si, le long du mouvement classique,

<p style="text-align:center;">$\displaystyle f(t) = \mathrm{e}^{\mathrm{i}k\omega t}\,f(0)$</p>

</div>

Le poids est le nombre de tours que fait la phase de $f$ pendant que le plan en fait un. Rien, pour l'instant, n'impose que ce nombre soit entier.

Le théorème précédent donne immédiatement&nbsp;:

<p style="text-align:center;">$\displaystyle k\left(X-\mathrm{i}P\right) = +1$</p>

<p style="text-align:center;">
$\displaystyle
k\left(X+\mathrm{i}P\right) = -1
$
</p>

<p style="text-align:center;">
$\displaystyle
k(1) = 0
$
</p>

<div id="theo">

**Les poids s'additionnent&nbsp;:** si $f$ a le poids $k_1$ et $g$ le poids $k_2$, alors $fg$ a le poids $k_1+k_2$.

</div>

<br>

<div id="preuve">

$(fg)(t) = \\mathrm{e}^{\\mathrm{i}k_1\\omega t}f(0)\\cdot\\mathrm{e}^{\\mathrm{i}k_2\\omega t}g(0) = \\mathrm{e}^{\\mathrm{i}(k_1+k_2)\\omega t}(fg)(0)$.

</div>

En particulier $\\left(X-\\mathrm{i}P\\right)^n$ a le poids $n$&nbsp;: chaque facteur ajoute un tour.

<div id="theo">

**Quantification du poids&nbsp;:** toute fonction de poids $k$ bien définie sur le plan de phase vérifie $k \\in \\mathbb Z$.

</div>

<br>

<div id="preuve">

Prenons $t = T$. Le flot au temps $T$ est l'identité&nbsp;: chaque point du plan est revenu exactement à sa place. Or $f$ est une fonction du point&nbsp;; si le point n'a pas bougé, la valeur n'a pas changé. Donc, en tant que fonctions sur le plan, $f(T) = f(0)$.

La définition du poids donne par ailleurs $f(T) = \\mathrm{e}^{\\mathrm{i}k\\omega T}f(0) = \\mathrm{e}^{2\\pi\\mathrm{i}k}f(0)$.

Comme $f$ n'est pas identiquement nulle, $\\mathrm{e}^{2\\pi\\mathrm{i}k} = 1$, c'est-à-dire $k\\in\\mathbb Z$.

</div>

Cette démonstration n'utilise ni $\\hbar$, ni la mécanique quantique, ni même le hamiltonien sinon pour savoir que son flot est une rotation. Elle repose sur un seul fait&nbsp;: **une rotation de $2\\pi$ est l'identité**. C'est l'argument qui impose des indices entiers aux séries de Fourier, et qui quantifie le moment cinétique d'une particule sur un anneau.


{{%notice note "Une remarque de vocabulaire"%}}

Le verbe «&nbsp;quantifier&nbsp;» a deux sens&nbsp;: passer du classique au quantique, et obtenir un ensemble discret de valeurs. Nous venons d'obtenir le second sans faire le premier. Le caractère entier était déjà inscrit dans la forme du plan de phase classique.

{{%/notice%}}


### Le spectre

Il reste à transporter le poids côté quantique. Les seuls opérateurs que nous manipulerons sont les quantifications de fonctions polynomiales du plan de phase&nbsp;; leurs poids sont donc entiers.

<div id="theo">

**Traduction quantique du poids&nbsp;:** un opérateur $\\hat O$ vérifie $\\hat O(t) = \\mathrm{e}^{\\mathrm{i}k\\omega t}\\hat O$ en représentation de Heisenberg si et seulement si

<p style="text-align:center;">$\displaystyle \left[\hat H, \hat O\right] = k\,\hbar\omega\,\hat O\quad$
c'est-à-dire
$\displaystyle
\quad [\hat N,\hat O] = k\,\hat O$</p>

</div>

<br>

<div id="preuve">

En représentation de Heisenberg, $\\hat O(t) = \\mathrm{e}^{\\mathrm{i}\\hat Ht/\\hbar}\\,\\hat O\\,\\mathrm{e}^{-\\mathrm{i}\\hat Ht/\\hbar}$. Chaque exponentielle se dérive en faisant descendre $\\pm\\,\\mathrm{i}\\hat H/\\hbar$&nbsp;:

<p style="text-align:center;">$\displaystyle \frac{\mathrm{d}\hat O}{\mathrm{d}t} = \frac{\mathrm{i}}{\hbar}\,\mathrm{e}^{\mathrm{i}\hat Ht/\hbar}\left(\hat H\hat O - \hat O\hat H\right)\mathrm{e}^{-\mathrm{i}\hat Ht/\hbar}$</p>

En $t=0$ les exponentielles valent l'identité&nbsp;: $\\left.\\dot{\\hat O}\\right|_0 = \\frac{\\mathrm{i}}{\\hbar}\\left[\\hat H,\\hat O\\right]$.

L'autre écriture, $\\hat O(t) = \\mathrm{e}^{\\mathrm{i}k\\omega t}\\hat O$, donne $\\left.\\dot{\\hat O}\\right|_0 = \\mathrm{i}k\\omega\\,\\hat O$.

L'identification fournit $\\left[\\hat H,\\hat O\\right] = k\\hbar\\omega\\,\\hat O$. Réciproquement, cette relation fait de $\\hat O(t)$ la solution de $\\dot{\\hat O} = \\mathrm{i}k\\omega\\hat O$ avec $\\hat O(0)=\\hat O$, solution unique et égale à $\\mathrm{e}^{\\mathrm{i}k\\omega t}\\hat O$.

Enfin $\\frac12$ commute avec tout, donc $\\left[\\hat H,\\hat O\\right] = \\hbar\\omega\\left[\\hat N,\\hat O\\right]$, d'où $\\left[\\hat N,\\hat O\\right] = k\\hat O$.

</div>

Pour $\\hat O = \\hat a^\\dagger$ on retrouve $[\\hat N,\\hat a^\\dagger] = +\\hat a^\\dagger$, donc $k=+1$&nbsp;; pour $\\hat O = \\hat a$, $k=-1$. **Les commutateurs de départ ne sont rien d'autre que l'énoncé des poids.**

<div id="theo">

**Règle de sélection&nbsp;:** si $\\hat N|\\nu\\rangle = \\nu|\\nu\\rangle$ et si $\\hat O$ a le poids $k$, alors $\\hat O|\\nu\\rangle$ est nul ou vecteur propre de $\\hat N$ pour la valeur propre $\\nu+k$.

</div>

<br>

<div id="preuve">

$\\hat N\\hat O = \\hat O\\hat N + [\\hat N,\\hat O] = \\hat O\\hat N + k\\hat O$, donc

<p style="text-align:center;">$\displaystyle \hat N\left(\hat O|\nu\rangle\right) = (\nu+k)\left(\hat O|\nu\rangle\right)$</p>

</div>

Les poids étant entiers, les valeurs propres de $\\hat N$ ne peuvent se relier que par des sauts entiers. Reste à savoir lesquelles sont atteintes.

<div id="theo">

<p style="text-align:center;">
<b>Le spectre de $\hat N$ est $\mathbb N$.</b>
</p>


</div>

<br>

<div id="preuve">

Soit $|\\nu\\rangle$ un vecteur propre normé de $\\hat N$. Alors

<p style="text-align:center;">$\displaystyle \left\lVert \hat a|\nu\rangle\right\rVert^2 = \langle\nu|\hat a^\dagger\hat a|\nu\rangle = \nu \qquad\text{et}\qquad \left\lVert \hat a^\dagger|\nu\rangle\right\rVert^2 = \langle\nu|\hat a\hat a^\dagger|\nu\rangle = \nu+1$</p>

la seconde égalité utilisant $\\hat a\\hat a^\\dagger = \\hat N + 1$. La première impose déjà $\\nu \\geqslant 0$.

Si $\\nu > 0$, alors $\\hat a|\\nu\\rangle \\neq 0$, et c'est par la règle de sélection ($k=-1$) un vecteur propre pour $\\nu-1$. On peut donc descendre tant que la valeur propre reste strictement positive.

Supposons $\\nu \\notin \\mathbb N$. Aucune des valeurs $\\nu, \\nu-1, \\nu-2, \\dots$ n'est nulle, la descente ne s'arrête jamais et atteint des valeurs propres négatives&nbsp;: contradiction. Donc $\\nu \\in \\mathbb N$.

En descendant $\\nu$ fois on obtient un vecteur propre pour la valeur $0$, et la seconde égalité montre que $\\hat a^\\dagger$ ne l'annule jamais&nbsp;: toutes les valeurs entières sont atteintes.

</div>

Avec $\\hat H = \\hbar\\omega\\left(\\hat N+\\frac12\\right)$&nbsp;:

<div id="theo">

<p style="text-align:center;">$\displaystyle E_n = \hbar\omega\left(n+\frac12\right), \qquad n\in\mathbb N$</p>

</div>

L'écart vaut $\\hbar\\omega$ parce que $\\omega$ est la vitesse de rotation du plan de phase, que $\\hbar$ convertit une fréquence en énergie, et que le seul nombre autorisé entre les deux est un entier.


### L'horloge interne

$|n\\rangle$ est un état propre de $\\hat H$. En reportant $|\\psi(t)\\rangle = c(t)|n\\rangle$ dans $\\mathrm{i}\\hbar\\,\\partial_t|\\psi\\rangle = \\hat H|\\psi\\rangle$, il vient $\\mathrm{i}\\hbar\\,\\dot c = E_n c$, donc $c(t) = \\mathrm{e}^{-\\mathrm{i}E_nt/\\hbar}$. La phase de l'état tourne donc à la vitesse $E_n/\\hbar = \\left(n+\\frac12\\right)\\omega$.

Le plan de phase, lui, tourne à $\\omega$ pour tous les états sans exception.

| rotation | vitesse | dépend de $n$&nbsp;? |
|:---:|:---:|:---:|
| le plan de phase | $\\omega$ | non, isochronisme |
| la phase de l'état | $\\left(n+\\frac12\\right)\\omega$ | oui, linéairement |

<br>

<div id="theo">

Pendant que le plan de phase fait un tour, la phase de $|n\\rangle$ en fait $n+\\frac12$. $\\hat a^\\dagger$ n'accélère pas le plan&nbsp;: il ajoute **un tour d'horloge par tour de plan**.

</div>


En écrivant $\\frac12\\left(\\hat X^2+\\hat P^2\\right) = \\hat a^\\dagger \\hat a + \\frac12$, on voit que le $\frac12$ n'est autre que le commutateur $[\\hat a,\\hat a^\\dagger]$. Identique pour tous les niveaux, il ne participe à aucun écart.


### La représentation de Bargmann

Un point du plan de phase est un couple de réels, donc un nombre complexe. Sa coordonnée naturelle est

<p style="text-align:center;">$\displaystyle \alpha = \frac{X+\mathrm{i}P}{\sqrt2}, \qquad \bar\alpha = \frac{X-\mathrm{i}P}{\sqrt2}$</p>

<div id="theo">

$\\hat a$ est la quantification de la **coordonnée complexe du plan de phase**, et $\\hat a^\\dagger$ celle de sa conjuguée.

</div>

Les définitions de départ ne font donc que nommer la coordonnée du plan et sa conjuguée. Le module $|\\alpha|$ est le rayon de l'orbite, l'argument la position sur l'orbite, et le mouvement classique s'écrit $\\alpha(t)=\\mathrm{e}^{-\\mathrm{i}\\omega t}\\alpha(0)$.

Notons $z$ la coordonnée de poids $+1$, c'est-à-dire $z = \\bar\\alpha \\propto X-\\mathrm{i}P$. La fonction $z^n$ a le poids $n$, et son argument fait $n$ tours quand $z$ parcourt un cercle, puisque $\\arg\\left(z^n\\right)=n\\arg z$. Étiquetons donc la base de Fock par les monômes&nbsp;:

<p style="text-align:center;">$\displaystyle |n\rangle \longleftrightarrow \frac{z^n}{\sqrt{n!}}$</p>

Ce n'est qu'un changement de nom, sans aucune hypothèse. Voyons ce que deviennent les opérateurs.

<div id="theo">

<p style="text-align:center;">$\displaystyle \hat a^\dagger = \times\,z  \qquad \hat a = \frac{\partial}{\partial z}  \qquad \hat N = z\frac{\partial}{\partial z}$</p>

</div>

<br>

<div id="preuve">

De $\\hat a^\\dagger|n\\rangle = \\sqrt{n+1}\\,|n+1\\rangle$&nbsp;:

<p style="text-align:center;">$\displaystyle \frac{z^n}{\sqrt{n!}} \longmapsto \sqrt{n+1}\,\frac{z^{n+1}}{\sqrt{(n+1)!}} = \frac{z^{n+1}}{\sqrt{n!}} = z\cdot\frac{z^n}{\sqrt{n!}}$</p>

De $\\hat a|n\\rangle = \\sqrt{n}\\,|n-1\\rangle$&nbsp;:

<p style="text-align:center;">$\displaystyle \frac{z^n}{\sqrt{n!}} \longmapsto \sqrt{n}\,\frac{z^{n-1}}{\sqrt{(n-1)!}} = \frac{n\,z^{n-1}}{\sqrt{n!}} = \frac{\partial}{\partial z}\frac{z^n}{\sqrt{n!}}$</p>

Enfin $\\hat N = \\hat a^\\dagger\\hat a = z\\,\\partial_z$.

</div>

{{%notice note "Le commutateur canonique est la règle de Leibniz"%}}

Dériver un produit $zf$ fait tomber exactement un facteur $z$&nbsp;: $\\partial_z(zf) = f + z\\,\\partial_z f$, c'est-à-dire $\\left[\\partial_z, \\times z\\right] = \\mathrm{id}$. La relation $[\\hat a,\\hat a^\\dagger]=1$ n'est rien d'autre que cette formule de dérivation du lycée.

{{%/notice%}}

Un état quelconque $|\\psi\\rangle = \\sum_n c_n|n\\rangle$ devient $f(z) = \\sum_n c_n z^n/\\sqrt{n!}$&nbsp;: le développement sur les niveaux d'énergie **est** le développement en série entière, et $c_n$ est à la fois l'amplitude de trouver $n$ quanta et le $n$-ième coefficient de Taylor.

$\\hat N = z\\partial_z$ est l'opérateur d'Euler&nbsp;: il rend le degré. Degré, enroulement, poids, nombre de quanta&nbsp;: un seul entier, quatre noms.

#### Le plancher est topologique

Les fonctions ainsi obtenues ne comportent que des puissances positives ou nulles de $z$. Ce n'est pas une restriction arbitraire&nbsp;: un terme en $z^{-1}$ exploserait à l'origine, qui est un point parfaitement ordinaire du plan de phase.

<div id="theo">

L'enroulement d'un état est son degré, donc positif ou nul&nbsp;: **aucun état ne peut avoir un poids négatif.**

</div>

C'est ce qui rend la dérivée obligatoire. Une opération qui baisse le poids d'une unité en préservant la régularité devrait envoyer la constante sur un objet régulier de poids $-1$&nbsp;; il n'en existe pas, donc elle annule la constante. La division par $z$ ne l'annule pas, elle fabrique le pôle interdit&nbsp;; la dérivation l'annule d'office, $\\partial_z 1 = 0$.

Le plancher obtenu plus haut par la positivité de $\\hat N$ reçoit ainsi une seconde lecture&nbsp;: on ne descend pas en dessous de zéro tour parce qu'il n'existe pas de motif régulier faisant un nombre négatif de tours.

Corollaire&nbsp;: $\\hat a$ et $\\hat a^\\dagger$ ne peuvent pas être unitaires. Un enroulement est un invariant topologique, et aucune transformation préservant la norme ne le modifie.

<div id="hoc-wrap" style="margin:1.5rem 0;font-family:inherit">
<div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">
<div style="position:relative;width:280px;height:280px;flex:none">
<canvas id="hoc-disk" width="280" height="280" style="position:absolute;left:0;top:0;width:280px;height:280px"></canvas>
<svg viewBox="0 0 280 280" style="position:absolute;left:0;top:0;width:280px;height:280px">
<line x1="8" y1="140" x2="272" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
<line x1="140" y1="8" x2="140" y2="272" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
<text x="274" y="136" font-size="12" fill="currentColor" text-anchor="end">X</text>
<text x="146" y="18" font-size="12" fill="currentColor">P</text>
<circle cx="227" cy="140" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
</svg>
</div>
<div style="flex:1;min-width:250px">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<span style="font-size:0.9em;opacity:0.75;min-width:90px">enroulement n</span>
<input type="range" id="hoc-n" min="0" max="6" step="1" value="2" style="flex:1">
<span id="hoc-nv" style="font-size:0.9em;font-weight:500;min-width:14px">2</span>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
<label style="font-size:0.85em;opacity:0.75;display:flex;align-items:center;gap:6px">
<input type="checkbox" id="hoc-g" checked> pondérer par la gaussienne du vide</label>
</div>
<div style="display:flex;gap:8px;margin-bottom:12px">
<button id="hoc-pp" style="padding:5px 12px;font-size:0.85em;cursor:pointer">pause</button>
<button id="hoc-rs" style="padding:5px 12px;font-size:0.85em;cursor:pointer">remise à zéro</button>
</div>
<div style="display:flex;gap:24px">
<div><div id="hoc-t1" style="font-size:1.6em;font-weight:500">0.00</div><div style="font-size:0.8em;opacity:0.7">tours du plan</div></div>
<div><div id="hoc-t2" style="font-size:1.6em;font-weight:500">0.00</div><div style="font-size:0.8em;opacity:0.7">tours d'horloge</div></div>
</div>
</div>
</div>
<div style="margin-top:14px">
<div style="font-size:0.8em;opacity:0.7;margin-bottom:5px">le cercle déroulé de 0 à 2&pi; : compter les arcs-en-ciel</div>
<canvas id="hoc-strip" width="640" height="30" style="width:100%;height:30px"></canvas>
</div>
</div>

<script>
(function(){
var dk=document.getElementById('hoc-disk');if(!dk)return;
var dc=dk.getContext('2d'),st=document.getElementById('hoc-strip'),sc=st.getContext('2d');
var el=function(i){return document.getElementById(i)};
var nn=el('hoc-n'),nv=el('hoc-nv'),gg=el('hoc-g'),pp=el('hoc-pp'),rs=el('hoc-rs');
var t1=el('hoc-t1'),t2=el('hoc-t2');
var N=2,TH=0,RUN=true,LAST=0,RMAX=3.2,SZ=280,C=140,SC=130/RMAX;
function hsl(h,l){h=((h%360)+360)%360;var c=(1-Math.abs(2*l-1)),x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2,r,g,b;
if(h<60){r=c;g=x;b=0}else if(h<120){r=x;g=c;b=0}else if(h<180){r=0;g=c;b=x}
else if(h<240){r=0;g=x;b=c}else if(h<300){r=x;g=0;b=c}else{r=c;g=0;b=x}
return[(r+m)*255,(g+m)*255,(b+m)*255]}
function draw(){
var im=dc.createImageData(SZ,SZ),d=im.data,G=gg.checked;
var mx=N===0?1:Math.pow(N,N/2)*Math.exp(-N/2);
for(var y=0;y<SZ;y++)for(var x=0;x<SZ;x++){
var X=(x-C)/SC,P=(C-y)/SC,r=Math.sqrt(X*X+P*P),i=(y*SZ+x)*4;
if(r>RMAX){d[i+3]=0;continue}
var am=G?Math.min(1,Math.pow(r,N)*Math.exp(-r*r/2)/mx):1;
var c=hsl(N*Math.atan2(-P,X)*180/Math.PI,1-0.5*am);
d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];d[i+3]=255}
dc.putImageData(im,0,0);
for(var k=0;k<st.width;k++){var q=hsl(-N*(k/st.width*360),0.5);
sc.fillStyle='rgb('+q[0]+','+q[1]+','+q[2]+')';sc.fillRect(k,0,1,30)}}
function tick(ts){if(!LAST)LAST=ts;var dt=(ts-LAST)/1000;LAST=ts;if(RUN)TH+=0.6*dt;
dk.style.transform='rotate('+(TH*180/Math.PI)+'deg)';
t1.textContent=(TH/(2*Math.PI)).toFixed(2);
t2.textContent=(N*TH/(2*Math.PI)).toFixed(2);
requestAnimationFrame(tick)}
nn.addEventListener('input',function(){N=+nn.value;nv.textContent=N;draw()});
gg.addEventListener('change',draw);
pp.addEventListener('click',function(){RUN=!RUN;pp.textContent=RUN?'pause':'lecture'});
rs.addEventListener('click',function(){TH=0});
draw();requestAnimationFrame(tick)})();
</script>


### Le rayon de l'orbite

Comparons enfin le niveau $n$ à l'orbite classique de même énergie.

<div id="theo">

**Action d'une période&nbsp;:** pour l'oscillateur harmonique, $\\displaystyle\\oint p\\,\\mathrm{d}x = E\\,T$.

</div>

<br>

<div id="preuve">

Avec $x(t) = A\\cos\\omega t$, $p = m\\dot x = -m\\omega A\\sin\\omega t$ et $E = \\frac12 m\\omega^2A^2$&nbsp;:

<p style="text-align:center;">$\displaystyle \oint p\,\mathrm{d}x = \int_0^T p\,\dot x\,\mathrm{d}t = \int_0^T m\omega^2A^2\sin^2(\omega t)\,\mathrm{d}t = m\omega^2A^2\,\frac{T}{2} = E\,T$</p>

</div>

Divisons par $h$. Le même nombre se lit de trois façons.

**Une aire.** $\\oint p\\,\\mathrm{d}x$ est l'aire enfermée par l'orbite dans le plan $(x,p)$. Le quotient par $h$ compte donc les cellules d'aire $h$ contenues dans l'orbite.

**Un décompte de longueurs d'onde.** La longueur d'onde de de Broglie locale vaut $\\lambda(x) = h/|p(x)|$, donc

<p style="text-align:center;">$\displaystyle \oint \frac{\mathrm{d}x}{\lambda(x)} = \frac{1}{h}\oint |p|\,\mathrm{d}x = \frac{1}{h}\oint p\,\mathrm{d}x$</p>

C'est la même intégrale. Le trajet spatial aller-retour entre les points de rebroussement est exactement un tour dans le plan de phase&nbsp;: l'aller est la branche $p>0$, le retour la branche $p<0$. **L'aire dans l'espace des phases n'est pas l'analogue du décompte spatial, elle en est la valeur.**

<figure class="fig" style="width:700px;max-width:100%;">
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Un tour dans le plan de phase correspond à un aller-retour sur le segment spatial">
<defs><marker id="ar6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#970E53" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<defs><marker id="ar7" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#004D80" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<line x1="80" y1="80" x2="222" y2="80" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
<line x1="150" y1="18" x2="150" y2="142" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
<text x="226" y="84" font-size="11" fill="currentColor">x</text>
<text x="155" y="25" font-size="11" fill="currentColor">p</text>
<path d="M98 80 A52 52 0 0 1 202 80" fill="none" stroke="#970E53" stroke-width="2.2" marker-end="url(#ar6)"/>
<path d="M202 80 A52 52 0 0 1 98 80" fill="none" stroke="#004D80" stroke-width="2.2" marker-end="url(#ar7)"/>
<text x="150" y="22" font-size="11" fill="#970E53" text-anchor="middle"></text>
<text x="262" y="60" font-size="11" fill="#970E53">aller, p &gt; 0</text>
<text x="262" y="112" font-size="11" fill="#004D80">retour, p &lt; 0</text>
<line x1="98" y1="80" x2="98" y2="196" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.5"/>
<line x1="202" y1="80" x2="202" y2="196" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.5"/>
<line x1="98" y1="196" x2="202" y2="196" stroke="currentColor" stroke-width="1.4"/>
<path d="M98 196 q6.5 -11 13 0 q6.5 11 13 0 q6.5 -11 13 0 q6.5 11 13 0 q6.5 -11 13 0 q6.5 11 13 0 q6.5 -11 13 0 q6.5 11 13 0" fill="none" stroke="#006C65" stroke-width="1.6"/>
<text x="98" y="216" font-size="11" fill="currentColor" text-anchor="middle">-A</text>
<text x="202" y="216" font-size="11" fill="currentColor" text-anchor="middle">+A</text>
<text x="262" y="196" font-size="11" fill="currentColor">le trajet spatial</text>
<text x="150" y="240" font-size="11" fill="currentColor" text-anchor="middle" opacity="0.75">un tour en haut = un aller-retour en bas</text>
</svg>
<figcaption>Les deux lectures portent sur le même chemin, décrit une fois dans le plan de phase et une fois sur l'axe des x.</figcaption>
</figure>

**Un décompte de tours.** Avec $\\oint p\\,\\mathrm{d}x = ET$&nbsp;:

<p style="text-align:center;">$\displaystyle \frac{1}{h}\oint p\,\mathrm{d}x = \frac{ET}{h} = \frac{E/\hbar}{2\pi/T}$</p>

soit le rapport de la vitesse de l'horloge interne à celle du plan.

<div id="theo">

Les trois décomptes coïncident et valent $\\dfrac{E_n}{\\hbar\\omega} = n+\\dfrac12$. Chaque niveau ajoute une cellule d'aire $h$ à l'orbite, une longueur d'onde de de Broglie au trajet spatial, et un tour d'horloge par tour de plan&nbsp;: trois énoncés d'un seul fait.

</div>

Reste à convertir en rayon. L'aire vaut $h\\left(n+\\frac12\\right)$&nbsp;; en variables réduites l'orbite est un cercle de rayon $R$, et $\\mathrm{d}x\\,\\mathrm{d}p = \\hbar\\,\\mathrm{d}X\\,\\mathrm{d}P$ donne une aire physique $\\hbar\\pi R^2$. D'où $\\pi R^2 = 2\\pi\\left(n+\\frac12\\right)$, soit

<p style="text-align:center;">$\displaystyle R_n = \sqrt{2n+1}$</p>

<figure class="fig" style="width:700px;max-width:100%;">
<svg viewBox="0 0 430 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cercles concentriques de rayons en racine de deux n plus un, séparés par des anneaux de même aire">
<path fill-rule="evenodd" fill="#EF9F27" opacity="0.35" d="M40 125 a85 85 0 1 0 170 0 a85 85 0 1 0 -170 0 Z M59 125 a66 66 0 1 1 132 0 a66 66 0 1 1 -132 0 Z"/>
<line x1="15" y1="125" x2="235" y2="125" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<line x1="125" y1="15" x2="125" y2="235" stroke="currentColor" stroke-width="0.5" opacity="0.45"/>
<circle cx="125" cy="125" r="38" fill="none" stroke="#004D80" stroke-width="1"/>
<circle cx="125" cy="125" r="66" fill="none" stroke="#004D80" stroke-width="1"/>
<circle cx="125" cy="125" r="85" fill="none" stroke="#004D80" stroke-width="1"/>
<circle cx="125" cy="125" r="100" fill="none" stroke="#004D80" stroke-width="1"/>
<text x="133" y="82" font-size="11" fill="currentColor">n = 0</text>
<text x="133" y="20" font-size="11" fill="currentColor">n = 3</text>
<line x1="205" y1="112" x2="248" y2="92" stroke="currentColor" stroke-width="0.6" opacity="0.6"/>
<text x="254" y="88" font-size="11" fill="currentColor">chaque anneau enferme</text>
<text x="254" y="105" font-size="11" fill="currentColor">la même aire h</text>
<text x="254" y="134" font-size="11" fill="currentColor" opacity="0.75">les rayons croissent en</text>
<text x="254" y="151" font-size="11" fill="currentColor" opacity="0.75">racine de 2n+1, donc</text>
<text x="254" y="168" font-size="11" fill="currentColor" opacity="0.75">les cercles se resserrent</text>
</svg>
<figcaption>C'est l'aire, et non le rayon ni la circonférence, qui augmente d'une quantité constante.</figcaption>
</figure>

Le rayon croît en $\\sqrt n$ et les cercles se resserrent&nbsp;: c'est l'**aire** qui est le compteur linéaire. La deuxième lecture le fait voir&nbsp;: quand l'orbite grandit, le trajet s'allonge mais l'impulsion augmente, donc la longueur d'onde raccourcit. Les deux effets se multiplient, et le décompte croît comme $R^2$.

Le vide enferme l'aire $h/2$, soit $R_0 = 1$. L'origine du plan, où le système serait au repos exact, est exclue par $\\hat N \\geqslant 0$, elle-même reflet de $\\Delta X\\,\\Delta P \\geqslant \\frac12$.


## Bilan

1. Le flot classique est une rotation rigide du plan de phase, à vitesse $\\omega$ indépendante de l'orbite, et qui vaut l'identité après un tour.
2. Diagonaliser ce flot sur les fonctions linéaires donne $X\\pm\\mathrm{i}P$&nbsp;: ce sont les fonctions classiques associées à $\\hat a$ et $\\hat a^\\dagger$, et aussi la coordonnée complexe du plan et sa conjuguée.
3. Le poids d'une fonction est le nombre de tours de sa phase par tour de plan. Les poids s'additionnent quand on multiplie.
4. Une rotation de $2\\pi$ étant l'identité, une fonction bien définie sur le plan revient sur elle-même&nbsp;: son poids est entier. C'est le seul argument non trivial, et il est topologique.
5. Un opérateur de poids $k$ décale la valeur propre de $\\hat N$ de $k$&nbsp;; la positivité de $\\hat N$ force le spectre à être $\\mathbb N$, donc $E_n = \\hbar\\omega\\left(n+\\frac12\\right)$.
6. L'état $|n\\rangle$ est le monôme $z^n$, d'enroulement $n$&nbsp;; $\\hat a^\\dagger$ multiplie par $z$, $\\hat a$ dérive, et le commutateur canonique est la règle de Leibniz.
7. Un enroulement négatif exigerait un pôle&nbsp;: le plancher est topologique autant qu'algébrique.
8. L'action $\\oint p\\,\\mathrm{d}x = ET$ compte simultanément les cellules d'aire $h$, les longueurs d'onde de de Broglie et les tours d'horloge&nbsp;; le rayon suit en $\\sqrt{2n+1}$.

L'énergie n'est pas la grandeur première. La grandeur première est un entier topologique&nbsp;; $\\omega$ vient de la géométrie du flot, $\\hbar$ de la conversion, et $E = \\hbar\\omega\\,n$ à un décalage près.
 