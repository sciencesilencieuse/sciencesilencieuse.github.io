+++
title = "TQC-9"
date = 2021-03-06T14:20:50+01:00
weight = 1
hidden = true
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


# Théorie quantique des champs -- Partie 9

{{%notice note%}}
Notes de lecture du livre *Quantum field theory for the gifted amateur* de Thomas Lancaster et Stephen Blundell.
{{%/notice%}}

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Retour sommaire</a></th></td>
    </tr>
</table>
</div>
<br>



Changement de moteur. Jusqu'ici, la théorie quantique des champs roulait sur des opérateurs&nbsp;: quantification canonique, commutateurs, matrice $S$, théorème de Wick. Cette partie reconstruit tout sur un autre principe, celui des intégrales de chemin de Feynman&nbsp;: <i>une amplitude est une somme sur toutes les histoires possibles, chacune pondérée par sa phase $\mathrm e^{\mathrm i S/\hbar}$</i>.

Trois gains majeurs&nbsp;:

<ul>
<li><b>La limite classique devient transparente</b>&nbsp;: la trajectoire de Lagrange n'est plus un postulat mais le survivant d'une interférence (phase stationnaire).</li>
<li><b>Wick devient automatique</b>&nbsp;: la fonctionnelle génératrice $Z[J]$ de la partie précédente se calcule <i>d'un bloc</i> par une intégrale gaussienne&nbsp;; le carré complété donne $\mathcal Z_0[J] = \mathrm e^{-\frac12\int J\Delta J}$, et toute la combinatoire de Wick est contenue dans les moments d'une gaussienne.</li>
<li><b>La température rejoint le temps</b>&nbsp;: la rotation de Wick $t \to -i\tau$ transforme $\mathrm e^{\mathrm iS}$ en poids de Boltzmann $\mathrm e^{-S_E}$, et la physique statistique se déroule en temps imaginaire périodique.</li>
</ul>

Et on peut en tirer deux extensions&nbsp;:

<ul>
<li><b>Les vides non triviaux</b>&nbsp;: quand le fond du potentiel n'est plus au centre, le fondamental brise la symétrie du hamiltonien (Landau, Goldstone).</li>
<li><b>Les bonnes bases</b>&nbsp;: les états cohérents (les états «&nbsp;les plus classiques&nbsp;») diagonalisent $\hat a$ et rendent l'intégrale de champs naturelle&nbsp;; leur version fermionique exige les nombres de Grassmann.</li>
</ul>

<br>

## L'intégrale de chemin&nbsp;: toutes les histoires à la fois

### L'idée

La question mère de la mécanique quantique&nbsp;: quelle est l'amplitude pour qu'une particule parte de $q_a$ à l'instant $t_a$ et arrive en $q_b$ à $t_b$&nbsp;? C'est le <b>propagateur</b>. La prescription de Feynman&nbsp;: la particule emprunte <b>toutes les trajectoires possibles</b> (zigzagantes, bouclées, en avant, en arrière) et chacune contribue une phase pure&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
G(q_b, t_b\,; q_a, t_a) = \int \mathcal D[q(t)]\; \mathrm e^{\mathrm iS[q(t)]/\hbar}\\
\displaystyle S[q] = \int_{t_a}^{t_b}\mathrm{d}t\; L[q(t)]
$
</p>

où $\int\mathcal D[q(t)]$ ordonne d'intégrer sur <i>toutes</i> les trajectoires reliant $(q_a, t_a)$ à $(q_b, t_b)$, et $S$ est l'action classique de la trajectoire[^p1].

</div>

[^p1]: La mesure $\mathcal D[q(t)]$ est un objet mathématiquement louche (une limite de produits infinis d'intégrales). En pratique, elle n'apparaît que dans des rapports où ses pathologies se simplifient.

<!-- Figure à redessiner (L&B fig. 23.1) : deux points A et B dans un plan, reliés par quatre ou cinq chemins ondulés distincts, chacun étiqueté e^{iS₁/ħ}, e^{iS₂/ħ}, ... ; légende : la particule les emprunte tous -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/figchemins.png" style="box-shadow:none;background:none;">
</div>

### D'où ça sort&nbsp;: le découpage en tranches

Ce n'est pas un postulat de plus&nbsp;: la formule <i>découle</i> de la mécanique quantique ordinaire.

<div id="preuve">

Partons de l'objet canonique $G = \langle q_b|\\,\mathrm e^{-\mathrm{i}\hat H T}\\,|q_a\rangle$ ($T = t_b - t_a$, $\hbar = 1$ pour alléger) et découpons le temps en $N$ tranches $\delta t = T/N$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm e^{-\mathrm{i}\hat H T} = \big(\mathrm e^{-\mathrm{i}\hat H \delta t}\big)^{\!N}
$
</p>


Puis insérons une relation de fermeture $\int\mathrm{d}q_j\\,|q_j\rangle\langle q_j| = \mathbb 1$ entre chaque paire de facteurs. L'amplitude devient une intégrale sur toutes les <b>positions intermédiaires</b> $q_1, \ldots, q_{N-1}$ $\to$ c'est déjà la somme sur les chemins, version pixellisée. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/decoupetranches.png" style="box-shadow:none;background:none;">
</div>

Reste à évaluer une tranche. Pour $\hat H = \hat p^2/2m + V(\hat q)$ et $\delta t$ petit (erreur en $O(\delta t^2)$ lorsqu'on sépare les exponentielles[^p2], négligeable dans la limite)&nbsp;:

[^p2]: Si deux opérateurs ont comme relation de commutation $[\hat A, \hat B]=\hat C$, alors $\mathrm{e}^{\hat{A}+\hat{B}}=\mathrm{e}^{\hat{A}} \mathrm{e}^{\hat{B}} \mathrm{e}^{-\hat{C} / 2}$. Ici $\hat{A}=-\mathrm{i} \hat{T} \Delta t$ et $\hat{B}=-\mathrm{i} \hat{V} \Delta t$ et donc $\hat{C}=-(\Delta t)^2[\hat{T}, \hat{V}]$. Cela donne $\mathrm{e}^{-\hat{C} / 2} \approx 1+O\left[(\Delta t)^2\right]$.

<p style="text-align:center;">
$\displaystyle
\langle q_{j+1}|\mathrm e^{-\mathrm i\hat H\delta t}|q_j\rangle
\approx \mathrm e^{-\mathrm{i}\delta t\, V(q_j)} \int\frac{\mathrm{d}p}{2\pi}\; \mathrm e^{\mathrm{i}p(q_{j+1} - q_j)}\, \mathrm e^{-\mathrm{i}\delta t\, p^2/2m}
$
</p>

où l'on a fait agir $V(\hat q)$ sur $|q_j\rangle$ et inséré une fermeture en impulsion pour la partie cinétique. 

L'intégrale sur $p$ est <b>gaussienne</b> (la première d'une longue série&nbsp;!) et donne&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle q_{j+1}|\mathrm e^{-\mathrm{i}\hat H\delta t}|q_j\rangle
\approx \sqrt{\frac{m}{2\pi \mathrm{i}\,\delta t}}\;
\exp\left\{ \mathrm{i}\,\delta t\left[ \frac{m}{2}\Big(\frac{q_{j+1} - q_j}{\delta t}\Big)^2 - V(q_j) \right] \right\}
$
</p>


Le crochet est $L = \frac{m}{2}\dot q^2 - V$ évalué sur la tranche&nbsp;: le produit des $N$ tranches reconstruit $\exp\big[i\sum_j \delta t\\, L\big] \to \mathrm e^{\mathrm iS}$, et la limite $N \to \infty$ du produit des $\int\mathrm{d}q_j$ (préfacteurs compris) <i>définit</i> $\int\mathcal D[q(t)]$.

Moralité&nbsp;: le hamiltonien et les opérateurs sont entrés dans la machine, et il en ressort le <b>lagrangien</b> et des trajectoires ordinaires. L'intégrale de chemin est la formulation lagrangienne de la mécanique quantique.

</div>

<br>

### Limite classique

Chaque chemin pèse autant en module&nbsp;: alors pourquoi le monde a-t-il l'air classique&nbsp;? Par <b>interférence</b>. 

Pour une trajectoire typique, $S \gg \hbar$&nbsp;: la phase $S/\hbar$ pointe n'importe où sur le cadran. Une trajectoire voisine a une action $S' = S + \delta S$&nbsp;; si $\delta S \gg \hbar$, sa phase est décorrélée. Un paquet de telles trajectoires a des phases aléatoires et <b>s'annule en moyenne</b>. 

Seule exception&nbsp;: le voisinage d'une trajectoire où l'action est <i>stationnaire</i>, $\delta S = 0$. Là, toutes les voisines ont la même phase et s'additionnent en cohérence. Or $\delta S/\delta q = 0$ est précisément l'équation d'Euler–Lagrange&nbsp;: <b>la trajectoire classique est celle qui survit à l'interférence</b>, et les effets quantiques (les «&nbsp;fluctuations quantiques&nbsp;») vivent dans son voisinage immédiat, de largeur $\sim\hbar$[^p3].

[^p3]: L'approximation qui ne garde que la trajectoire classique et la forme quadratique des fluctuations autour d'elle porte le nom d'<i>approximation de la phase stationnaire</i>..

<!-- Figure à redessiner (L&B fig. 23.3) : les points A et B, le chemin classique en trait plein, une gerbe de chemins voisins en tirets qui s'en écartent peu ; légende : seuls les voisins du chemin stationnaire interfèrent constructivement -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:320px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/figinterfchemins.png" style="box-shadow:none;background:none;">
</div>

### L'arsenal gaussien

Tous les calculs reposent sur une seule intégrale, généralisée par étages&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\text{(0)}\;\; \int_{-\infty}^{\infty}\mathrm{d}x\; \mathrm e^{-x^2} = \sqrt{\pi}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{(1)}\;\; \int\mathrm{d}x\; \mathrm e^{-\frac{a x^2}{2}} = \sqrt{\frac{2\pi}{a}}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{(2)}\;\; \int\mathrm{d}x\; \mathrm e^{-\frac{a x^2}{2} + Jx} = \sqrt{\frac{2\pi}{a}}\; \mathrm e^{\frac{J^2}{2a}}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{(3)}\;\; \int\mathrm{d}^n x\; \mathrm e^{-\frac12 x^{\mathsf T}\! A\, x + J^{\mathsf T}\! x} = \frac{(2\pi)^{n/2}}{\sqrt{\det A}}\; \mathrm e^{\frac12 J^{\mathsf T}\! A^{-1} J}
$
</p>

</div>

<br>

<div id="preuve">

(0)&nbsp;: l'astuce polaire ($I^2$ en coordonnées polaires). 

(1)&nbsp;: changement d'échelle. 

(2)&nbsp;: on <i>complète le carré</i>&nbsp;

<p style="text-align:center;">
$\displaystyle
-\frac{a}{2}x^2 + Jx = -\frac{a}{2}\Big(x - \frac{J}{a}\Big)^2 + \frac{J^2}{2a}
$
</p>

on translate $x \to x + J/a$ (la mesure ne bronche pas), et la source se découple.

(3)&nbsp;: diagonaliser $A$ (symétrique), appliquer (2) valeur propre par valeur propre&nbsp;; le produit des $\sqrt{2\pi/a_i}$ fabrique le $1/\sqrt{\det A}$.

Et le passage au continu s'écrit tout seul&nbsp;: $x_i \to \phi(x)$, la matrice $A$ devient un <i>opérateur</i>, $\det A$ un déterminant fonctionnel (avalé par la normalisation), et $A^{-1}$… <b>une fonction de Green</b>. Toute la partie tient dans cette phrase&nbsp;: <i>une intégrale gaussienne avec source livre l'inverse de l'opérateur, c'est-à-dire le propagateur</i>.

</div>

<u>Rq</u>&nbsp;: dans (3), $x$ et $J$ sont des vecteurs et $A$ est une matrice. $J^TA^{-1}J$ est donc une double somme qui se transforme en double intégrale dans la version continue.


{{%notice note%}}
Prenons $L = -\frac12 x A x + Jx$ et appliquons Euler–Lagrange (de manière très cavalière) comme si $A$ était un nombre&nbsp;:<br>
$\to -Ax + J = 0$<br>
Donc $x_\star = A^{-1}J$, et en réinjectant, $L(x_\star) = +\frac12\\, J\\, A^{-1} b$.<br>
On a retrouvé <i>l'exposant exact du résultat (3)</i>. 
<br><br>
$\mathrm e^{\frac12 JA^{-1}J}$ n'est donc rien d'autre que <b>l'intégrande évalué au point stationnaire</b>. Pour une gaussienne, la phase stationnaire est exacte, et le déterminant n'est que le prix (indépendant de $J$) des fluctuations autour. 
{{%/notice%}}


<br>

### L'oscillateur harmonique, et les infinis apprivoisés

On cherche l'amplitude de <b>retour à l'origine</b> $G(0, T\\,; 0, 0)$. Cela revient à poser la particule au fond du puits harmonique, puis revenir au temps $T$ et se demander si elle est encore là. 

On veut donc &nbsp;:

<p style="text-align:center;overflow-x:auto">
$\displaystyle
G\left(q_{\mathrm{b}}=0, t_{\mathrm{b}}=T, q_{\mathrm{a}}=0, t_{\mathrm{a}}=0\right)=\int_{q_{\mathrm{a}}=0, t_{\mathrm{a}}=0}^{q_{\mathrm{b}}=0, t_{\mathrm{b}}=T} \mathcal{D}[q(t)] \mathrm{e}^{\mathrm{i} S}=\int_{q_{\mathrm{a}}=0, t_{\mathrm{a}}=0}^{q_{\mathrm{b}}=0, t_{\mathrm{b}}=T} \mathcal{D}[q(t)] \mathrm{e}^{\mathrm{i} \int_0^T \!\mathrm{~d} t L[q(t)]}
$
</p>

<div id="preuve">

Problème&nbsp;: comme le lagrangien d'un oscillateur harmonique s'écrit $L=\frac{m \dot{q}(t)^2}{2}-\frac{m \omega_0^2 q(t)^2}{2}$, on a $G=\int \mathcal{D}[q(t)] \mathrm{e}^{\frac{\mathrm{i} m}{2} \int \mathrm{~d} t\left[\left(\frac{\mathrm{~d} q(t)}{\mathrm{d} t}\right)^2-\omega_0^2 q(t)^2\right]}$ qui n'est pas dans une forme connue.

Le truc est d'intégrer par partie la partie cinétique $I=\int \mathrm{d} t\left(\frac{\partial q(t)}{\partial t}\right)^2=\int \mathrm{d} t\left(\frac{\partial q(t)}{\partial t}\right)\left(\frac{\partial q(t)}{\partial t}\right)$.

Cela donne&nbsp;:

<p style="text-align:center;">
$\displaystyle
I=\cancel{\left[q(t) \frac{\partial q(t)}{\partial t}\right]_{t=0}^T}-\int \mathrm{d} t q(t) \frac{\partial^2}{\partial t^2} q(t)
$
</p>

Les conditions aux limites ($q=0$ au début et à la fin de la trajectoire) détruisent le premier terme.

</div>


L'action prend la forme $\frac{\mathrm{i}}{2}\int\mathrm{d}t\\, q\\,\hat C\\, q$ avec $\hat C = m(-\partial_t^2 - \omega_0^2)$. L'intégrale gaussienne (3) donne alors&nbsp;: $G \propto [\det\hat C\\,]^{-1/2}$. Tout l'art est de donner un sens à ce déterminant.

<div id="preuve">

Le déterminant d'un opérateur est le produit de ses valeurs propres. 

Avec les conditions aux limites $q(0) = q(T) = 0$, les fonctions propres de $\hat C$ sont les $\sin(n\pi t/T)$, de valeurs propres $\lambda_n = m\big[(n\pi/T)^2 - \omega_0^2\big]$. 

<p style="text-align:center;">
$\displaystyle
G(0, T\,; 0,0)=B\left\{\prod_{n=1}^{\infty} m\left[\left(\frac{n \pi}{T}\right)^2-\omega_0^2\right]\right\}^{-\frac{1}{2}}
$
</p>

Le produit infini diverge, et la constante de mesure $B$ est inconnue. 

La cure&nbsp;: <b>diviser par la particule libre</b> ($\omega_0 = 0$), dont on connaît le propagateur exact&nbsp;: $G_{\omega_0=0}(0,T\\,;0,0)=G_\mathrm{libre}(0,T\\,;0,0)=\left(\frac{-\mathrm{i} m}{2 \pi T}\right)^{\frac{1}{2}}$. 

Dans le rapport, $B$ et les divergences s'annulent terme à terme&nbsp;:

<p style="text-align:center;">
$\displaystyle
G(0,T\,;0,0) = G_{\text{libre}} \prod_{n=1}^{\infty}\left[ 1 - \Big(\frac{\omega_0 T}{n\pi}\Big)^{\!2} \right]^{-\frac12}
= \left( \frac{-i\, m\omega_0}{2\pi\sin\omega_0 T} \right)^{\!\frac12}
$
</p>


En utilisant l'identité d'Euler $\prod_{n}\big[1 - (x/n\pi)^2\big] = \sin x / x$.

</div>

La densité de probabilité $|G|^2 \propto 1/|\sin\omega_0 T|$ <b>pique aux temps $T = n\pi/\omega_0$</b>&nbsp;: à ces instants, tous les chemins partant et revenant à l'origine interfèrent constructivement. Les trajectoires «&nbsp;font le point&nbsp;» puis se défocalisent, au rythme de l'oscillateur (à chaque demi-période). 



<!-- Figure à redessiner (L&B fig. 23.4) : la courbe 2π|G|²/(mω₀) en fonction de ω₀T/π, série de pics aigus aux valeurs entières de ω₀T/π ; légende : les chemins « font le point » à chaque demi-période -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/grapheohchem.png" style="box-shadow:none;background:none;">
</div>

Leçon générale du calcul&nbsp;: les intégrales de chemin engendrent des infinis (mesure, déterminants), et on les apprivoise par des <i>rapports</i> bien choisis (même stratégie que pour normaliser $\mathcal Z[J]$).


<br>

### Bilan 

<p style="text-align:center;">
$\displaystyle
\langle q_b|\mathrm e^{-\mathrm{i}\hat H T}|q_a\rangle
\;\overset{\text{tranches}}{\longrightarrow}\;
\int\mathcal D[q]\, \mathrm e^{\mathrm{i}S/\hbar}
\;\overset{\delta S = 0}{\longrightarrow}\;
\text{classique + fluctuations}
\;\overset{\text{carré complété}}{\longrightarrow}\;
\mathrm e^{\frac12 J A^{-1} J}
\;\overset{\det\, =\, \prod\lambda_n}{\longrightarrow}\;
G_{\text{oscillateur}}
$
</p>

<br>

### Pièges

<ul>
<li>Tous les chemins pèsent <b>autant en module</b>&nbsp;: c'est l'interférence qui sélectionne le classique, pas un poids. Et la trajectoire de Lagrange n'est «&nbsp;choisie&nbsp;» qu'à $\delta S \sim \hbar$ près.</li>
<li>La mesure $\mathcal D[q]$ n'a de sens que dans des <b>rapports</b>&nbsp;: constante de mesure et déterminants divergents s'éliminent en divisant par un cas connu (ici, la particule libre).</li>
<li>L'inverse $A^{-1}$ du carré complété est une <b>fonction de Green</b>&nbsp;: elle exige des conditions aux limites. Les oublier, c'est choisir un inverse au hasard.</li>
<li>L'intégration par parties suppose que les termes de bord meurent ($q = 0$ aux extrémités, champs nuls à l'infini)&nbsp;: à vérifier, pas automatique.</li>
<li>Temps réel ici&nbsp;: $L = T - V$. Ne pas confondre avec le $L_E = T + V$ qu'on verra plus loin.</li>
</ul>

<br>

## Les intégrales de champs


De la particule au champ, le saut d'écriture est minuscule&nbsp;: la trajectoire $q(t)$ devient une <b>configuration de champ</b> $\phi(x)$ sur tout l'espace-temps, et l'action devient $S = \int\mathrm{d}^4x\\,\mathcal L[\phi]$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathcal D[\phi(x)]\; \mathrm e^{\,\mathrm{i}\int\mathrm{d}^4x\,\mathcal L[\phi(x)]}
$
</p>


Point capital&nbsp;: <b>les $\phi(x)$ qui vivent sous cette intégrale sont des champs classiques</b>, des fonctions ordinaires, jamais passées à la machine de quantification canonique, sans relations de commutation.<br>
Toute la mécanique quantique est dans la <i>somme</i> sur les configurations, pas dans les objets sommés. C'est le charme profond de la méthode&nbsp;: une théorie quantique sans opérateurs.

Mauvaise nouvelle&nbsp;: cette intégrale ne donne pas un propagateur.<br>
Bonne nouvelle&nbsp;: elle donne <b>la fonctionnelle génératrice</b> de la partie précédente. 

En branchant la source&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\mathcal Z[J] = \frac{\displaystyle\int\mathcal D\phi\; \mathrm e^{\,\mathrm{i}\int\mathrm{d}^4x\,[\mathcal L(\phi) + J\phi]}}{\displaystyle\int\mathcal D\phi\; \mathrm e^{\,\mathrm{i}\int\mathrm{d}^4x\,\mathcal L(\phi)}}
$
</p>

</div>

On obtient alors les fonctions de Green par la recette connue&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
G^{(n)} = \frac{1}{\mathrm{i}^n}\frac{\delta^n\mathcal Z}{\delta J\cdots\delta J}\big|_{J=0}
$
</p>

</div>

Dans la partie précédente sur la physique statistique, on calculait $Z[J]$ via la matrice $S$ (Gell-Mann–Low). Ici, l'intégrale de chemin la calcule <i>directement</i>.

<!-- Figure à redessiner (L&B fig. 24.1) : l'organigramme de la fig. 22.1 avec le nouveau moteur, « Lagrangien » ; flèche « + source J » vers la boîte « Intégrale de chemin, donne Z[J] » ; flèche « dériver » vers « Fonctions de Green » ; bulle latérale « on en INFÈRE les règles de Feynman » ; flèche finale vers « Prédictions physiques » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/orgaintchemin.png" style="box-shadow:none;background:none;">
</div>

<br>

### Le champ libre

<div id="theo">

Pour le champ scalaire libre&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal Z_0[J] = \exp\left[ -\frac12 \int\mathrm{d}^4x\,\mathrm{d}^4y\;\, J(x)\, \Delta(x-y)\, J(y) \right]
$
</p>

où $\Delta$ est le propagateur de Feynman. 

</div>

Toute la théorie libre, en une ligne fermée...

<div id="preuve">

L'exposant est $\displaystyle \mathrm{i}\int \mathrm{d}x^4 \big[\frac12(\partial\phi)^2 - \frac{m^2}{2}\phi^2 + J\phi\big]$. 

Une intégration par parties donne $\frac12(\partial\phi)^2 \to -\frac12\phi\\,\partial^2\phi$. D'où la forme (3) en version continue «&nbsp;$-\frac12\phi K\phi + J\phi$&nbsp;» avec l'opérateur $K = \partial^2 + m^2$.

<ul>
<li>La convergence exige le $\mathrm{i}\varepsilon$&nbsp;!</li>
</ul>
L'intégrande oscille&nbsp;; pour lui donner un sens on remplace $m^2 \to m^2 - \mathrm{i}\varepsilon$, ce qui incline infinitésimalement le poids vers une décroissance.<br>
 C'est le retour du $\mathrm{i}\varepsilon$, et c'est lui qui sélectionne l'inverse <i>de Feynman</i> parmi toutes les fonctions de Green de $K$.

<ul style="margin-top:1em;">
<li>Complétion du carré</li>
</ul>
On translate $\phi = \chi + \phi_J$ avec $K\phi_J = J$, c'est-à-dire $\phi_J = K^{-1}J$. Et on connaît cet inverse&nbsp;: $(\partial^2 + m^2)\,\Delta = -\mathrm{i}\,\delta^{(4)}$, donc $K^{-1} = i\Delta$ (au sens des noyaux).<br>
Les termes croisés s'annulent, l'intégrale sur $\chi$ se factorise (indépendante de $J$&nbsp;: elle part dans la normalisation).

Il reste sous l'intégrale (double)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i} \times \frac12\, J\, K^{-1} J = \frac{\mathrm{i}}{2}\, J\,(\mathrm{i}\Delta)\, J = -\frac12 J\,\Delta\, J
$
</p>

<u>Contrôle</u>&nbsp;:<br>
la recette $\displaystyle G^{(2)} = \frac{1}{i^2}\frac{\delta^2\mathcal Z_0}{\delta J\delta J}\big|_0$ redonne bien $\displaystyle G^{(2)}(x,y) = \Delta(x-y)$, le propagateur, comme il se doit.

</div>


$\mathcal Z_0[J] = \mathrm e^{\text{Dumbbell}}$&nbsp;: l'exposant $-\frac12\int J\Delta J$ est exactement le diagramme haltère (deux blobs $J$ reliés par un propagateur). Le théorème des amas liés est ici vérifié <i>exactement</i>&nbsp;: dans la théorie libre, l'unique diagramme source-à-source connexe est l'haltère, et $\mathcal Z_0$ en est l'exponentielle, ni plus ni moins.

<br>

### Les interactions, et les règles retrouvées

Retournons à la théorie $\phi^4$ $\to$ $\mathcal L_{\text{int}} = -\frac{\lambda}{4!}\phi^4$

Dans l'intégrale, chaque $\phi(z)$ en facteur de $\mathrm e^{\mathrm i\int J\phi}$ peut se fabriquer par une dérivée, $\phi(z) \to \frac{1}{i}\frac{\delta}{\delta J(z)}$. D'où la formule compacte&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal Z[J] \;\propto\; \exp\left[ -\mathrm{i}\frac{\lambda}{4!}\int\mathrm{d}^4z\, \Big(\frac{1}{\mathrm{i}}\frac{\delta}{\delta J(z)}\Big)^{\!4} \right]\; \mathcal Z_0[J]
$
</p>
<div id="grosseformule" style="margin:-0.5em 0;">



</div>

On peut développer l'exponentielle en puissances de $\lambda$ et laisser les dérivées mordre dans $\mathrm e^{-\frac12 J\Delta J}$&nbsp;:<br>
Chaque paire de $\delta/\delta J$ décroche un $\Delta$, chaque $\delta/\delta J$ isolée s'accroche à un $J$ restant. 

Au premier ordre, les quatre dérivées au même point $z$ produisent trois familles&nbsp;: 
<ul style="margin-top:-0.5em;">
<li>$\Delta(0)^2$ (le double-huit du vide),</li>
<li>$\Delta(0)\times(\Delta J)^2$ (boucle sur la ligne rejoignant deux sources),</li>
<li>$(\Delta J)^4$ (le vertex à quatre sources).</li>
</ul>

 Une fois le $1/4!$ absorbé, les poids de chaque famille sont $\frac18$, $\frac14$ et $\frac{1}{4!}$&nbsp;: les facteurs de symétrie ressortent tout seuls du calcul des dérivées. 
 
 Les règles de Feynman sont retrouvées, sans quantification canonique, sans théorème de Wick, sans matrice $S$.

<div id="preuve">

Cascade des quatre dérivées.

On agit sur $\mathcal Z_0[J] = \mathrm e^{-\frac12\int J\Delta J}$ avec $\delta/\delta J(z)$, quatre fois de suite. 

En notant $(\Delta J)(z) \equiv \int\mathrm{d}^4y\\,\Delta(z-y)J(y)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\delta\mathcal Z_0}{\delta J(z)} = -(\Delta J)\,\mathcal Z_0
$
</p>

<p style="text-align:center;">
$\displaystyle
\frac{\delta^2\mathcal Z_0}{\delta J(z)^2} = \big[-\Delta(0) + (\Delta J)^2\big]\,\mathcal Z_0
$
</p>

<p style="text-align:center;">
$\displaystyle
\frac{\delta^3\mathcal Z_0}{\delta J(z)^3} = \big[3\Delta(0)\,(\Delta J) - (\Delta J)^3\big]\,\mathcal Z_0
$
</p>

<p style="text-align:center;">
$\displaystyle
\displaystyle \frac{\delta^4\mathcal Z_0}{\delta J(z)^4} = \big[3\Delta(0)^2 - 6\Delta(0)\,(\Delta J)^2 + (\Delta J)^4\big]\,\mathcal Z_0
$
</p>


Chaque dérivée soit <i>consomme un $J$</i> pendu à un $\Delta$ existant (elle referme une ligne), soit <i>ouvre une nouvelle ligne</i> $(\Delta J)$ (et les coefficients $3$ et $6$ comptent les façons de le faire). 

En multipliant par $-\frac{i\lambda}{4!}\int\mathrm{d}^4z$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal Z_1[J] = -\mathrm{i}\lambda\left[ \frac18\int\Delta(0)^2 \;-\; \frac14\int\Delta(0)\,(\Delta J)^2 \;+\; \frac{1}{4!}\int(\Delta J)^4 \right]\mathcal Z_0[J]
$
</p>

Les facteurs de symétrie ne sont plus des règles à retenir&nbsp;: ce sont les coefficients d'un calcul de dérivées.

</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\mathcal D[q(t)] \to \mathcal D[\phi(x)]
\;\overset{\int\text{par parties}}{\longrightarrow}\;
-\tfrac12\phi K\phi + J\phi
\;\overset{i\varepsilon}{\longrightarrow}\;
\mathcal Z_0[J] = \mathrm e^{-\frac12\int J\Delta J}
\;\overset{(\delta/\delta J)^n}{\longrightarrow}\;
G^{(n)}
\;\overset{\text{interactions}}{\longrightarrow}\;
\text{règles de Feynman}
$
</p>

<br>

### Pièges

<ul>
<li>Les $\phi(x)$ sous l'intégrale sont des champs <b>classiques</b>&nbsp;: pas de chapeaux, pas de commutateurs (la quantique est dans la somme).</li>
<li>L'intégrale de champs ne donne pas un propagateur&nbsp;: elle donne $Z[J]$. Le propagateur s'en <i>extrait</i>, par deux dérivées.</li>
<li>$m^2 \to m^2 - \mathrm{i}\varepsilon$ n'est pas une option&nbsp;: sans lui la gaussienne diverge, et c'est <i>lui</i> qui désigne l'inverse <b>de Feynman</b> parmi toutes les fonctions de Green de $K$.</li>
<li>Tenir les $\mathrm{i}$&nbsp;: $(\partial^2 + m^2)\Delta = -\mathrm{i}\delta^{(4)}$, donc $K^{-1} = \mathrm{i}\Delta$. Une erreur de $\mathrm{i}$ ici se paie dans tous les diagrammes ensuite.</li>
<li>La normalisation par $Z[0]$ avale d'un coup la constante de mesure <i>et</i> le déterminant, divergents tous les deux.</li>
<li>Les poids $\frac18$, $\frac14$, $\frac1{4!}$ sortent <i>déjà</i> du calcul des dérivées&nbsp;: ne pas rediviser par un facteur de symétrie.</li>
<li>N'est calculable d'un bloc que ce qui peut se mettre sous la forme $\frac12\phi\hat K\phi$ (ou $\frac12 A^\mu\hat K_{\mu\nu}A^\nu$)&nbsp;: c'est la <i>définition</i> fonctionnelle de «&nbsp;libre&nbsp;».</li>
</ul>


<br>

## La théorie statistique des champs

### La rotation de Wick

D'un côté $\mathrm e^{\mathrm iS}$, de l'autre $\mathrm e^{-\beta E}$&nbsp;: pour passer de l'un à l'autre, on <b>tourne le temps</b>&nbsp;: $t \to -i\tau$. On passe alors d'ue la métrique de Minkowski $(+,-,-,-)$ à la métrique euclidienne $(+,+,+,+)$.<br>
L'action devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}S \;\longrightarrow\; -S_E\\
\displaystyle L_E[q(\tau)] = \frac{m}{2}\Big(\frac{\mathrm{d}q}{\mathrm{d}\tau}\Big)^{\!2} + V(q)
$
</p>

Le potentiel s'additionne&nbsp;: en temps imaginaire, cinétique et potentiel pèsent ensemble, et le poids $\mathrm e^{-S_E}$ est réel positif, comme un poids de Boltzmann.

<!-- Figure à redessiner (L&B fig. 25.1) : le plan complexe de p⁰, avec la rotation de −π/2 (flèche en quart de cercle) amenant l'axe réel sur l'axe imaginaire, ET les deux pôles panachés du propagateur de Feynman (en ±(E − iε), quadrants 2 et 4) : le contour tourné ne croise aucune singularité. Annoter « t → −iτ, p⁰ → iω » et « e^{iS} → e^{−S_E} » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:340px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/figrotwick.png" style="box-shadow:none;background:none;">
</div>



{{%notice note%}}
Le sens de la rotation ($-\pi/2$, pas $+\pi/2$) n'est pas un caprice&nbsp;: c'est le $i\varepsilon$ qui l'impose. Dans le plan $p^0$, le contour s'appuyant sur l'axe des réels doit être déformé vers l'axe imaginaire sans rencontrer aucun pôle sur la route pour que l'intégrale reste la même (théorème intégral de Cauchy). Or aucun des deux pôles panachés du propagateur de Feynman n'est rencontré si l'axe réel tourne dans le sens trigo ($+\pi/2$) et comme $p_0=\mathrm{i}\partial_t$, cela oblige $t$ à tourner négativement ($-\pi/2$) pour que $p_0$ aille dans le bon sens.
{{%/notice%}}

Le propagateur de Feynman s'écrit maintenant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta_E(x) = \int\frac{\mathrm{d}^4p}{(2\pi)^4}\, \frac{\mathrm e^{-\mathrm ip\cdot x}}{p^2 + m^2}\\
\displaystyle
(-\partial_E^2 + m^2)\,\Delta_E(x-y) = \delta^{(4)}(x-y)
$
</p>


Plus de $i\varepsilon$, plus de $i$ du tout&nbsp;: la métrique «&nbsp;civilisée&nbsp;» $(+,+,+,+)$ rend le dénominateur $p^2 + m^2$ strictement positif.

<div id="theo">

La fonction de partition est une intégrale de chemin en temps imaginaire <b>périodique</b>[^p4]&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z = \mathrm{Tr}\,\big[\mathrm e^{-\beta\hat H}\big]
= \oint  \mathcal D q\; \mathrm e^{-\int_0^\beta \mathrm{d}\tau\, L_E[q(\tau)]}\\
\displaystyle q(0) = q(\beta)
$
</p>

Et pour des champs&nbsp;: 

<p style="text-align:center;">
$\displaystyle
Z = \displaystyle \oint \mathcal D\phi\; \mathrm e^{-\int_0^\beta\mathrm{d}\tau\int\mathrm{d}^3x\,\mathcal L_E[\phi]}\\
\displaystyle \phi(0, \mathbf x) = \phi(\beta, \mathbf x)$
</p>

</div>

[^p4]: Conditions <i>périodiques</i> pour les bosons&nbsp;; pour les fermions, il faudra des conditions <b>antipériodiques</b>, $\psi(0,\mathbf x) = -\psi(\beta, \mathbf x)$. On verra plus tard pourquoi.

<br>

<div id="preuve">

On sait décomposer $\langle q_B|\mathrm e^{-\mathrm i\hat H t_B}|q_A\rangle$ en somme sur les trajectoires de $0$ à $t_B$.<br>
Que modifier pour calculer $\mathrm{Tr}\\,\mathrm e^{-\beta\hat H} = \sum_\lambda\langle\lambda|\mathrm e^{-\beta\hat H}|\lambda\rangle$&nbsp;?
<ul>
<li>poser $|q_A\rangle = |q_B\rangle = |\lambda\rangle$ et sommer (la trace exige de <i>revenir au même état</i>)&nbsp;;</li> 
<li>poser $t_B = -i\beta$&nbsp;;</li>
<li>donner un sens aux nouvelles bornes $\int_0^{-i\beta}$ par la rotation $t \to -i\tau$, qui euclidianise l'action.</li>
</ul>

Le retour au même état, sommé sur tous les états, se traduit sur les trajectoires par $q(\tau = 0) = q(\tau = \beta)$&nbsp;: en imaginant $\tau$ prolongé, les configurations sont <b>périodiques de période $\beta$</b>.

</div>

<b>La physique statistique se déroule en temps imaginaire périodique</b>. Plus il fait chaud, plus le cylindre de temps est court ($\beta \to 0$). Les trajectoires quantiques sont forcées de faire des boucles minuscules et finissent par être écrasées sur le plan spatial. La dimension temporelle "disparaît" macroscopiquement, et l'on retrouve la physique statistique classique, uniquement spatiale. 

À température nulle, le cylindre se déroule complètement. Le temps imaginaire redevient une ligne droite infinie. La particule a toute la place temporelle pour faire ses fluctuations quantiques. On retrouve la pure Théorie Quantique des Champs du vide.

<!-- Figure à redessiner (L&B fig. 25.2) : trois panneaux : (a) une trajectoire de champ dans le temps réel t (axe vertical), libre ; (b) la tranche de temps imaginaire 0 ≤ τ ≤ β (un « mur » d'épaisseur β) avec une trajectoire qui revient à son point de départ ; (c) l'axe τ gradué 0, β, 2β, 3β avec la trajectoire périodique répétée -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:540px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/figwickcyl.png" style="box-shadow:none;background:none;">
</div>

<br>

### Les fréquences de Matsubara

En impulsions, la rotation remplace $p^0 \to i\omega$, et la périodicité <b>discrétise</b> les fréquences&nbsp;: une fonction périodique de période $\beta$ n'a que les harmoniques&nbsp;:

<p style="text-align:center;">
$\displaystyle
\omega_n = \frac{2\pi n}{\beta}, \; n \in \mathbb Z
$
</p>

Du moins pour les bosons périodiques. Et pour les fermions antipériodiques, on a&nbsp;:

<p style="text-align:center;">
$\displaystyle 
\omega_n = \frac{(2n+1)\pi}{\beta}
$
</p>


Ce sont les <b>fréquences de Matsubara</b>. 

L'intégrale sur $p^0$ devient une somme&nbsp;: $\displaystyle\int\frac{\mathrm{d}p^0}{2\pi} \\;\longrightarrow\\; \frac{1}{\beta}\sum_n$.<br>
La température est un peigne de fréquences.

<div id="theo">

<b>Règles de Feynman de $\phi^4$ à $T \neq 0$</b>&nbsp;:

<ul>
<li>chaque ligne interne&nbsp;: $\dfrac{1}{\omega_n^2 + \mathbf p^2 + m^2}$&nbsp;;</li>
<li>chaque vertex&nbsp;: un facteur $-\lambda$&nbsp;;</li>
<li>impulsions internes libres&nbsp;: mesure $\dfrac{1}{\beta}\displaystyle\sum_n\int\frac{\mathrm{d}^3p}{(2\pi)^3}$&nbsp;;</li>
<li>diviser par le facteur de symétrie&nbsp;;</li>
<li>conservation par diagramme&nbsp;: $(2\pi)^3\delta^{(3)}(\mathbf p_{\text{in}} - \mathbf p_{\text{out}})\,\beta\,\delta_{\omega_n,\omega_m}$. Et pour les diagrammes du vide, ce delta évalué en zéro donne $\beta\mathcal V$ (le volume d'espace-temps euclidien) dans la limite thermodynamique.</li>
</ul>

</div>

Les $\mathrm i$ ont disparu. En euclidien, propagateurs et vertex sont réels. On ne somme plus des phases, on somme des poids.<br>
Par contre on a retrouvé le propagateur scalaire classique $1/(\omega_n^2 + \mathbf p^2 + m^2)$ tourné ($p^0 \to i\omega_n$). Le $i\varepsilon$ n'est plus nécessaire puisque le dénominateur euclidien ne s'annule jamais.


<div id="preuve">

<b>Deux diagrammes pour se faire la main</b>

La correction au premier ordre de $\ln Z[J=0]$ est donné par le diagramme en double boucle.

<div style="position:relative;margin-left:auto;margin-right:auto;width:50px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/doubleboucle.png" style="box-shadow:none;background:none;">
</div>

Le facteur de symétrie vaut $D=8$ et sa contribution est donc&nbsp;:

<p style="text-align:center;">
$\displaystyle
\ln Z_{(1)}=-\frac{\lambda \mathcal{V} \beta}{8}\left[\frac{1}{\beta} \sum_n \int \frac{\mathrm{~d}^3 p}{(2 \pi)^3} \frac{1}{\omega_n^2+\mathbf p^2+m^2}\right]^2
$
</p>

La correction au premier ordre du propagateur $\tilde{G}_{(1)}(k, q)$ est la boucle sur la ligne.

<div style="position:relative;margin-left:auto;margin-right:auto;width:110px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/ligneboucle.png" style="box-shadow:none;background:none;">
</div>

Le facteur de symétrie est $D=2$ et l'amplitude pour ce diagramme est donnée par&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{G}_{(1)}(k, q) =  \frac{1}{\omega_m^2+\boldsymbol{k}^2+m^2}\left\{\frac{-\lambda}{2}\left[\frac{1}{\beta} \sum_n \int \frac{\mathrm{~d}^3 p}{(2 \pi)^3} \frac{1}{\omega_n^2+\boldsymbol{p}^2+m^2}\right]\right\}  \times \frac{1}{\omega_l^2+\boldsymbol{q}^2+m^2}(2 \pi)^3 \delta^{(3)}(\boldsymbol{k}-\boldsymbol{q}) \beta \delta_{\omega_m, \omega_l}
$
</p>

La somme de Matsubara commune aux deux diagrammes peut se faire exactement, et le résultat se scinde en deux morceaux qui racontent chacun leur histoire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\underbrace{\int\frac{\mathrm{d}^4 p}{(2\pi)^4}\,\frac{1}{(p^0)^2 + E_{\mathbf p}^2}}_{\text{indépendant de } T}
\; + \;
\underbrace{\int\frac{\mathrm{d}^3p}{(2\pi)^3}\,\frac{1}{E_{\mathbf p}}\,\frac{1}{\mathrm e^{\beta E_{\mathbf p}} - 1}}_{\text{la physique thermique}}
$
</p>

Le premier morceau est la contribution du vide à $T = 0$ (divergente, elle attendra la renormalisation).<br>
Le second fait apparaître <b>le facteur d'occupation de Bose</b> $n_B(E_{\mathbf p}) = 1/(\mathrm e^{\beta E_{\mathbf p}} - 1)$. La température ne se manifeste que par les quanta thermiquement peuplés. 

La partie thermique de la correction pour le diagramme en 8 s'écrit alors&nbsp;:

<p style="text-align:center;">
$\displaystyle
\ln Z_{(1)}\Big|_{T} = -\frac{\lambda\beta\mathcal V}{8}\left[ \int\frac{\mathrm{d}^3p}{(2\pi)^3}\,\frac{n_B(E_{\mathbf p})}{E_{\mathbf p}} \right]^2
$
</p>

Ce terme représente la toute première correction apportée par les interactions à la thermodynamique du gaz de phions. 

Le même mécanisme mathématique s'applique au propagateur avec l'insertion de la boucle : l'interaction avec le milieu décale l'énergie propre des particules. Par conséquent, l'inertie est modifiée et la <b>masse devient une fonction de la température</b> (on parle de masse thermique). 

</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
t \to -i\tau
\;\overset{\text{pôles évités}}{\longrightarrow}\;
\mathrm e^{\mathrm iS} \to \mathrm e^{-S_E}
\;\overset{\text{Tr}}{\longrightarrow}\;
\phi(0) = \phi(\beta)
\;\longrightarrow\;
Z = \!\oint\mathcal D\phi\; \mathrm e^{-S_E}
\;\longrightarrow\;
\omega_n = \tfrac{2\pi n}{\beta}
\;\longrightarrow\;
\text{règles } T \neq 0
\;\longrightarrow\;
n_B(E_{\mathbf p})
$
</p>


### Pièges

<ul>
<li>Le sens de la rotation ($-\pi/2$, pas $+\pi/2$) est imposé par les pôles du propagateur&nbsp;: l'autre sens les croise.</li>
<li>En euclidien, le potentiel change de camp&nbsp;: $L_E = T + V$.</li>
<li>Plus aucun $\mathrm{i}$&nbsp;: vertex $-\lambda$ (et non $-\mathrm i\lambda$), propagateur réel $1/(\omega_n^2 + \mathbf p^2 + m^2)$, $\mathrm i\varepsilon$ inutile (aucun pôle à éviter).</li>
<li>Bosons périodiques, fermions <b>anti</b>périodiques&nbsp;: peignes de Matsubara pairs contre impairs.</li>
<li>$\int\frac{\mathrm{d}p^0}{2\pi} \to \frac1\beta\sum_n$&nbsp;: ne pas oublier le $\frac1\beta$, ni le $\beta\,\delta_{\omega_n,\omega_m}$ de conservation, qui donne le facteur $\beta\mathcal V$ des diagrammes du vide.</li>
<li>Dans les sommes de Matsubara, le morceau indépendant de $T$ est divergent (affaire de renormalisation)&nbsp;: la physique thermique est tout entière dans $n_B$.</li>
<li>Test de santé de toute formule à $T \neq 0$&nbsp;: $\beta \to \infty$ doit dérouler le cylindre et redonner la théorie ordinaire (tournée).</li>
</ul>


<br>

## Brisure de symétrie

### L'intuition du flambage

Si on place une masse de plus en plus grande sur une règle verticale, la règle va finir par flamber, c'est-à-dire plier, soit à gauche, soit à droite. Le système {règle + masse} est pourtant parfaitement symétrique gauche/droite. Rien dans la physique ne permet de prédire le côté choisi[^p5]&nbsp;: <b>l'état fondamental n'a pas la symétrie du hamiltonien</b>. 

Pour un aimant ($\hat H = -J\sum_i \hat S^z_i\hat S^z_{i+1}$), aucune préférence haut/bas, et pourtant là aussi, le fondamental choisit d'orienter tous les spins vers le haut, ou tous vers le bas.

[^p5]: Dans la vraie vie, une perturbation infime fait pencher la balance, mais elle peut être arbitrairement petite. C'est le sens précis de «&nbsp;spontané&nbsp;».

<!-- Figure à redessiner (L&B fig. 26.3) : trois vignettes du flambage : (a) la règle droite chargée d'un poids (symétrique) ; (b) flambée vers la gauche ; (c) flambée vers la droite -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/flambage.png" style="box-shadow:none;background:none;">
</div>

### Landau

<div id="def">

<b>Le schéma de Landau</b>[^p6]

L'équilibre minimise l'énergie libre $F = U - TS$, écrite comme fonction d'un <b>paramètre d'ordre</b>, un champ de moyenne nulle dans la phase symétrique et non nulle dans la phase brisée (pour l'aimant, c'est l'aimantation $M$). 

En se bornant à l'échelle macroscopique, on développe&nbsp;:

<p style="text-align:center;">
$\displaystyle
F = F_0 + a M^2 + b M^4 + \cdots\\
\displaystyle a = a_0 (T - T_c),\;\; b > 0
$
</p>


On ne garde que les puissances <i>paires</i> comme l'exige la symétrie $M \to -M$ du problème.

</div>

[^p6]: Le schéma de Landau est une <i>théorie de champ moyen</i>&nbsp;: l'aimantation y est un champ uniforme, les fluctuations sont ignorées. Le livre y reviendra en force (notamment ch. 43).

<br>

<div id="preuve">

Minimisons&nbsp;:<br>
$\partial F/\partial M \approx 2aM + 4bM^3 = 0$.<br>
Pour $T > T_c$ ($a > 0$)&nbsp;: un seul minimum, $M = 0$. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:340px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/landau1.png" style="box-shadow:none;background:none;">
</div>

Pour $T < T_c$ ($a < 0$)&nbsp;: $M = 0$ devient un maximum local (équilibre métastable&nbsp;: la moindre pichenette précipite le système dans un vrai minimum), et deux minima apparaissent en&nbsp;:

<p style="text-align:center;">
$\displaystyle
M_0^2 \\ -\frac{a}{2b} = \frac{a_0}{2b}(T_c - T)
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:340px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/landau2.png" style="box-shadow:none;background:none;">
</div>

Les «&nbsp;fesses de Lifshitz&nbsp;». Le système choisit un des deux minima&nbsp;: symétrie brisée, et transition de phase à $T = T_c$ (le paramètre d'ordre croît continûment depuis zéro&nbsp;: transition du second ordre).

</div>

<br>

### Goldstone

La version théorie des champs qui propose une symétrie <b>continue</b> avec deux champs réels $(\phi_1, \phi_2)$ et le signe du terme de masse retourné&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac12\big[(\partial\phi_1)^2 + (\partial\phi_2)^2\big]
+ \frac{\mu^2}{2}\big(\phi_1^2 + \phi_2^2\big)
- \frac{\lambda}{4!}\big(\phi_1^2 + \phi_2^2\big)^2
$
</p>
Symétrie globale $SO(2)$&nbsp;: les rotations du plan interne $(\phi_1, \phi_2)$ laissent $\mathcal L$ invariant. Le potentiel $U(\phi_1, \phi_2)$ a la forme d'un <b>cul de bouteille</b>&nbsp;: une bosse au centre, et un <b>cercle de minima</b> d'équation $\phi_1^2 + \phi_2^2 = 6\mu^2/\lambda$. Cela donne une infinité de vides, tous équivalents. Le système doit en <i>choisir</i> un.

<!-- Figure à redessiner (L&B fig. 26.6) : (a) une bouteille de vin culottée (clin d'œil) ; (b) la surface du potentiel en chapeau mexicain / fond de bouteille, bosse centrale et gouttière circulaire ; (c) vue de dessus dans le plan (φ₁, φ₂) : le cercle des minima, avec un point marqué sur le cercle = le vide choisi -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:580px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/symbris.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

Brisons la symétrie en choisissant le vide $(\phi_1, \phi_2) = \big(\sqrt{6\mu^2/\lambda},\\, 0\big)$ (un point parmi l'infinité sur le cercle minimal).<br>
Et étudions l'effet de petites déviations autour de ce minimum&nbsp;: $\phi_1' = \phi_1 - \sqrt{6\mu^2/\lambda}$, $\phi_2' = \phi_2$.

<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/perturbgold.png" style="box-shadow:none;background:none;">
</div>

Le développement de Taylor du potentiel au minimum donne $\partial^2 U/\partial\phi_1^2 = 2\mu^2$ et $\partial^2 U/\partial\phi_2^2 = 0$, d'où (constantes ignorées, ordre $\phi'^2$)&nbsp;:

$$
\mathcal L = \frac12\big[(\partial\phi_1')^2 + (\partial\phi_2')^2\big] - \mu^2\\,(\phi_1')^2 + O(\phi'^3).
$$

Le champ $\phi_1'$ a une masse $m = \sqrt{2}\\,\mu$. <br>
Le champ $\phi_2'$ n'a <b>aucun terme quadratique $\to$ il est sans masse</b>.

</div>

Ce résultat «&nbsp;magique&nbsp;» est limpide sur le paysage&nbsp;: une excitation dans la direction $\phi_1'$ (radiale) doit <b>escalader la paroi</b> du potentiel. Elle coûte, donc elle est massive.<br>
Une excitation dans la direction $\phi_2'$ <b>roule le long de la gouttière</b>, sans aucune force de rappel. Elle est gratuite, donc sans masse. En langage de matière condensée, on dirait <i>sans gap</i> plutôt que sans masse&nbsp;: la relation de dispersion part de l'origine. C'est le <b>mode de Goldstone</b>, et le théorème est général&nbsp;:

<div id="theo">

<b>Théorème de Goldstone</b>&nbsp;: chaque générateur <i>brisé</i> d'une symétrie continue globale engendre un mode d'excitation sans masse (sans gap).

</div>

<br>

<div id="preuve">

Soit $\hat Q$ un générateur de symétrie, $[\hat Q, \hat H] = 0$, et deux champs reliés par la symétrie, $[\hat Q, \hat\phi^\dagger_A] = \hat\phi^\dagger_B$. 

<b>Si le vide est invariant</b>, $\hat Q|0\rangle = 0$, alors les particules $A$ et $B$ sont dégénérées&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat H\,\hat\phi^\dagger_B|0\rangle = \hat H\hat Q\,\hat\phi^\dagger_A|0\rangle
= \hat Q\hat H\,\hat\phi^\dagger_A|0\rangle = E_A\,\hat Q\,\hat\phi^\dagger_A|0\rangle
= E_A\,\hat\phi^\dagger_B|0\rangle\\
\Longrightarrow E_B = E_A
$
</p>

Conclusion&nbsp;:<br>
Dans un <b>vide invariant</b> ($\hat Q|0\rangle = 0$), la symétrie se manifeste par des <i>multiplets dégénérés</i>, des partenaires de même masse, visibles au spectromètre (l'isospin du proton et du neutron).<br>
Dans un <b>vide non invariant</b> ($\hat Q|0\rangle \neq 0$), on ne trouve plus de partenaires dégénérés. La symétrie se manifeste <i>autrement</i>, par son mode de Goldstone. 

Une symétrie ne disparaît jamais&nbsp;: elle choisit entre organiser le spectre (mode de Wigner) et hanter le vide (mode de Goldstone).

</div>


Retour de **masse nulle = portée infinie**&nbsp;: le mode de Goldstone transporte de l'information sur le choix du vide à distance arbitraire. 

Quatre signatures accompagnent d'ailleurs toute brisure dans un système à grand nombre de particules (classification d'Anderson)&nbsp;: 
<ul>
<li>une <b>transition de phase</b> (là où le paramètre $a$ change de signe)&nbsp;;</li> 
<li>de nouvelles <b>excitations</b> (le vide ayant changé, le spectre change, les modes de Goldstone en sont l'exemple)&nbsp;;</li>
<li>la <b>rigidité</b> (déformer l'ordre coûte&nbsp;: raideur de phase des supraconducteurs, raideur de spin des aimants, solidité mécanique des cristaux)&nbsp;;</li>
<li>et des <b>défauts</b> (la symétrie peut être brisée différemment en des régions différentes&nbsp;: parois de domaines, vortex… les objets topologiques abordés plus loin).</li>
</ul>


<br>

### Marier la brisure à une jauge&nbsp;: le photon mange le Goldstone

Que devient tout cela si la symétrie brisée est <b>locale</b>&nbsp;?<br>
Comme on l'a vu, un lagrangien avec une symétrie locale contient des champs de jauge. Le plus simple est le champ de jauge scalaire complexe avec masse retournée&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = (\partial^\mu\psi^\dagger - iqA^\mu\psi^\dagger)(\partial_\mu\psi + iqA_\mu\psi) + \mu^2\psi^\dagger\psi - \lambda(\psi^\dagger\psi)^2 - \frac14 F_{\mu\nu}F^{\mu\nu}
$
</p>


Invariant sous $\psi \to \psi\\, \mathrm e^{\mathrm i\alpha(x)}$ tant qu'on transforme aussi $A_\mu \to A_\mu - \frac1q\partial_\mu\alpha$. Avant brisure, la théorie décrit deux scalaires massifs de charges opposées et deux polarisations de photon sans masse.

<div id="preuve">

Passons en polaires, $\psi = \rho\\, \mathrm e^{\mathrm i\theta}$.<br>
$\partial_\mu \psi+\mathrm{i} q A_\mu \psi$ devient alors $\left(\partial_\mu \varrho\right) \mathrm{e}^{\mathrm{i} \theta}+\mathrm{i}\left(\partial_\mu \theta+q A_\mu\right) \varrho \mathrm{e}^{\mathrm{i} \theta}$.<br>
$A_\mu$ n'entre donc dans la théorie que par la combinaison <b>invariante de jauge</b> $C_\mu \equiv A_\mu + \frac1q\partial_\mu\theta$ puisqu'elle laisse $F_{\mu\nu}$ inchangé ($F_{\mu \nu}=\partial_\mu A_\nu-\partial_\nu A_\mu=\partial_\mu C_\nu-\partial_\nu C_\mu$).

<p style="text-align:center;">
$\displaystyle
\mathcal L = (\partial_\mu\rho)^2 + \rho^2 q^2 C^2 + \mu^2\rho^2 - \lambda\rho^4 - \frac14 F^{\mu\nu}F_{\mu\nu}
$
</p>

Brisons la symétrie&nbsp;:<br>
Les minima décrivent le cercle $\rho_0 = \sqrt{\mu^2/2\lambda}$. Choisissons $\theta_0 = 0$ et développons autour du minimum choisi en posant $\chi/\sqrt2 = \rho - \rho_0$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal L = \frac12(\partial_\mu\chi)^2 - \mu^2\chi^2
- \frac14 F_{\mu\nu}F^{\mu\nu} + \frac{M^2}{2}\,C^2 + \cdots\\
\qquad M = q\sqrt{\mu^2/\lambda}
$
</p>

Le mode radial $\chi$ est massif ($\sqrt2\\,\mu$), comme toujours. Mais la surprise vient de la présence du champ vectoriel **massif** $C_\mu$ dont la particule a une masse $M$. Et le champ de phase $\theta$ (le Goldstone de la version globale) a, lui, complètement <b>disparu du lagrangien</b>.

</div>

Le mot de Coleman&nbsp;: tout se passe comme si le photon sans masse avait <b>mangé le boson de Goldstone</b> et, engraissé, changé de nom en $C_\mu$. La comptabilité des degrés de liberté tombe juste&nbsp;: $\\{2$ scalaires massifs $+\\, 2$ photons sans masse$\\}$ avant, $\\{1$ scalaire massif $+\\, 3$ vecteurs massifs$\\}$ après $\to$ quatre et quatre&nbsp;: le Goldstone n'est pas perdu, il est devenu la polarisation longitudinale du vecteur. Et <i>pourquoi</i> était-il éliminable&nbsp;? Parce que le changement de variables $C_\mu = A_\mu + \frac1q\partial_\mu\theta$ est… une transformation de jauge&nbsp;: le Goldstone d'une symétrie jaugée est de la <b>jauge pure</b>, il n'était pas vraiment là. 

On a décrit ici le **mécanisme de Higgs** qui peut se résumer en une phrase&nbsp;: <i>l'élimination par transformation de jauge de tous les modes de Goldstone</i>[^p8]. Historiquement, il a donné l'explication de l'absence troublante de particules de Goldstone dans la nature&nbsp;: la brisure de symétrie permet une autre voie.

[^p8]: Historique tourmenté&nbsp;: Anderson en donne une version non relativiste dès 1962, inspirée de la supraconductivité&nbsp;; en 1964, Brout–Englert puis Higgs publient les traitements relativistes. Seul Higgs mentionne le boson massif.

<br>

### L'ordre en basse dimension

La théorie des champs permet de poser une question que la nature pose aussi&nbsp;: la brisure de symétrie survit-elle en dimension réduite&nbsp;? Réponse&nbsp;: <b>non, pas de brisure d'une symétrie continue en $d \leq 2$ dimensions</b>. L'argument tient en une intégrale&nbsp;: si la symétrie est brisée, les excitations qui se propagent sont des Goldstones sans masse, et la fluctuation du champ en un point vaut (propagateur euclidien à masse nulle, pris à l'origine)&nbsp;:

<p style="text-align:center;">
$\displaystyle
G(0,0) = \int\frac{\mathrm{d}^d p}{(2\pi)^d}\, \frac{1}{p^2}
\;\sim\; \int_0 \mathrm{d}p\; p^{\,d-3}
$
</p>

Intégrable en $p \to 0$ pour $d > 2$, <b>divergente pour $d \leq 2$</b>. Les fluctuations de grande longueur d'onde (les Goldstones eux-mêmes) divergent et pulvérisent l'ordre qu'ils étaient censés signaler&nbsp;: la brisure s'auto-détruit. 

C'est le **théorème de Coleman-Mermin-Wagner** (pas de brisure de symétrie en dimension $≤2$ avec un paramètre d'ordre possédant une symétrie continue).

Version aimant, sans théorie des champs&nbsp;: les magnons (ondes de spin quantifiées) coûtent $E_{\mathbf p} = \alpha\mathbf p^2$, et leur population thermique $\int\mathrm{d}p\\, p^{d-1}/(\mathrm e^{\beta E_{\mathbf p}} - 1) \sim \int p^{\\,d-3}\mathrm{d}p$ (pour des petits $\mathbf p$) diverge en $d \leq 2$ (les ondes de spin dévorent l'aimantation, l'ordre à grande échelle). 

Belle ironie&nbsp;: le théorème de Goldstone fournit lui-même l'arme de sa propre limitation. 

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
F = F_0 + aM^2 + bM^4
\;\overset{a < 0}{\longrightarrow}\;
M_0^2 = -\tfrac{a}{2b}
\;\longrightarrow\;
U(\phi)\; \text{retourné}
\;\overset{\text{choix du vide}}{\longrightarrow}\;
\text{masses = courbures}
\;\longrightarrow\;
\text{Goldstone}
\;\overset{\text{jauge}}{\longrightarrow}\;
\text{Higgs}
\;(\overset{d \leq 2}{\longrightarrow}\;
\text{pas de brisure})
$
</p>

<br>

### Pièges

<ul>
<li>Le développement de Landau ne contient que les puissances <i>autorisées par la symétrie</i>&nbsp;: c'est elle qui écrit la thermodynamique, pas la microscopie.</li>
<li>«&nbsp;Spontanée&nbsp;» signifie que le lagrangien <b>reste symétrique</b>&nbsp;: c'est le vide qui choisit et $M = 0$ devient métastable, pas interdit.</li>
<li>Les masses des excitations sont les <b>courbures du potentiel au minimum choisi</b>, pas à l'origine&nbsp;: développer autour du mauvais point donne des masses au carré négatives (le signal, précisément, qu'on n'est pas assis dans un vide).</li>
<li>Goldstone exige <b>continue</b> et <b>globale</b>&nbsp;: discrète → rien&nbsp;; jaugée → mangé. Et le comptage des degrés de liberté ($2 + 2 = 1 + 3$) doit toujours tomber juste.</li>
<li>Si un mode s'élimine par une transformation de jauge, il était de la <b>jauge pure</b>&nbsp;: pas un degré de liberté physique.</li>
<li>Coleman–Mermin–Wagner&nbsp;: c'est l'<b>infrarouge</b> ($p \to 0$) qui tue l'ordre en $d \leq 2$, pas l'ultraviolet. Et $d$ compte les dimensions d'<i>espace</i>.</li>
</ul>

<br>

## Les états cohérents

### L'état le plus classique possible

Question d'apparence innocente&nbsp;: quel état quantique ressemble le plus à une onde classique d'amplitude et de phase données&nbsp;? 

L'oscillateur classique a $Q = Q_0\cos(\omega t - \theta)$ et $P = -P_0\sin(\omega t - \theta)$&nbsp;: position et impulsion oscillent <i>en quadrature</i>, verrouillées à $90°$. 

Les états propres de l'énergie $|n\rangle$ ne savent rien de tout cela ($\langle\hat Q\rangle = \langle\hat P\rangle = 0$&nbsp;: rien n'y oscille, ce sont des états stationnaires).

Où trouver un état quantique qui possède cette relation de phase entre $\hat Q$ et $\hat P$&nbsp;? Chez les états propres de l'opérateur d'annihilation puisque la quadrature y est câblée en dur&nbsp;: $\hat a=(\hat{Q}+\mathrm{i} \hat{P}) / \sqrt{2}$.

<div id="def">

L'<b>état cohérent</b> $|\alpha\rangle$, pour $\alpha \in \mathbb C$ est défini comme&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat a\,|\alpha\rangle = \alpha\,|\alpha\rangle
$
</p>

</div>

On peut réécrire l'état cohérent ainsi&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
|\alpha\rangle=\mathrm{e}^{-\frac{|\alpha|^2}{2}} \mathrm{e}^{\alpha \hat{a}^{\dagger}}|0\rangle
$
</p>

</div>

<br>

<div id="preuve">

Un état cohérent est la somme infini des états propres de l'énergie&nbsp;: $|\alpha\rangle=\sum_{n=0}^{\infty} c_n|n\rangle $. Et en substituant dans la définition $\hat a\\,|\alpha\rangle = \alpha\\,|\alpha\rangle$, on se retrouve avec une relation de récurrence&nbsp;: $c_{n+1}=\alpha c_n / \sqrt{n+1}$.

D'où $\displaystyle |\alpha\rangle = c_0 \big( |0 \rangle+\frac{\alpha}{\sqrt{1!}} |1\rangle+\frac{\alpha^2}{\sqrt{2!}} |2\rangle + \frac{\alpha^3}{\sqrt{3!}} |3\rangle+\ldots \big)$.

En utilisant $|n\rangle = \frac{\left(\hat{a}^{\dagger}\right)^n}{\sqrt{n!}}|0\rangle$, on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
|\alpha\rangle = c_0\big(1+\frac{\alpha}{1!} \hat{a}^{\dagger}+\frac{\alpha^2}{2!}\left(\hat{a}^{\dagger}\right)^2+\frac{\alpha^3}{3!}\left(\hat{a}^{\dagger}\right)^3+\ldots\big)|0\rangle
$
</p>

Et par normalisation $\langle \alpha | \alpha \rangle = 1$, on a finalement $c_0=\mathrm{e}^{-|\alpha|^2 / 2}$.

</div>

L'amplitude de probabilité de trouvé $|\alpha\rangle$ dans l'état $| n\rangle$ vaut $c_n=\langle n | \alpha\rangle=\mathrm{e}^{-\frac{|\alpha|^2}{2}} \alpha^n / \sqrt{n!}$ donnant une densité de probabilité $P_n=\left|c_n\right|^2=\mathrm{e}^{-|\alpha|^2}|\alpha|^{2 n} / n!$ $\to$ $P_n$ suit une **distribution de Poisson**.

Trois propriétés&nbsp;:

<ul>
<li><b>Le nombre de particules est indéterminé</b>&nbsp;: $|\alpha\rangle$ superpose tous les $|n\rangle$, avec une distribution de Poisson et $\langle\hat n\rangle = |\alpha|^2$. C'est le prix d'une <i>phase</i> bien définie, un état de $n$ fixé n'a aucune phase.

<div id="preuve" style="margin-top:0.5em;">

<details><summary>Détail supplémentaire&nbsp;:</summary>

Le nombre moyen de quanta dans l'état cohérent est donné par $\langle\hat{n}\rangle=\langle\alpha| \hat{a}^{\dagger} \hat{a}|\alpha\rangle=|\alpha|^2$. La variance vaut donc $|\alpha|^2$ (propriété clé des distributions de Poisson, leur moyenne et leur variance sont identiques) et par conséquent, l'écart-type $\Delta n$ vaut $|\alpha|$.

L'incertitude relative sur le nombre de quanta vaut alors&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\Delta n}{\langle\hat{n}\rangle}=\frac{|\alpha|}{|\alpha|^2}=\frac{1}{|\alpha|}
$
</p>

Donc bien qu'on ne sache pas exactement combien de quanta peuplent un état cohérent, l'incertitude relative sur ce nombre tend vers zéro quand $\alpha$ (et donc l'occupation moyenne) tend vers l'infini. 

</details>
</div>

</li>
</ul>

<ul>
<li><b>Incertitude minimale</b>&nbsp;: $(\Delta P)^2(\Delta Q)^2 = \tfrac14$, la borne exacte de Heisenberg. Aucun état ne fait mieux&nbsp;: c'est le plus proche d'un point classique de l'espace des phases que la mécanique quantique autorise.

<div id="preuve" style="margin-top:0.5em;">

<details>
<summary>Démonstration&nbsp;:</summary>

Soient $\vert{}Q\rangle$ et $\vert{}P\rangle$ les états propres respectifs des opérateurs de position $\hat{Q}$ et d'impulsion $\hat{P}$.

L'action de l'opérateur d'annihilation $\hat{a}$ sur un état cohérent $\vert{}\alpha\rangle$ s'écrit&nbsp;:
<p style="text-align:center;">
$\displaystyle
\hat{a}\vert{}\alpha\rangle = \frac{1}{\sqrt{2}}(\hat{Q} + \mathrm i\hat{P})\vert{}\alpha\rangle = \alpha\vert{}\alpha\rangle
$
</p>

En projetant cette équation sur le bra $\langle Q\vert{}$ (c'est-à-dire en multipliant à gauche), on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{1}{\sqrt{2}}\langle Q\vert{}(\hat{Q} + \mathrm i\hat{P})\vert{}\alpha\rangle = \alpha\langle Q\vert{}\alpha\rangle
$
</p>

Sachant que $\hat{Q}\vert{}Q\rangle = Q\vert{}Q\rangle$ et que l'opérateur impulsion en représentation position s'écrit $\hat{P} = -\mathrm i\frac{\partial}{\partial Q}$, nous pouvons effectuer les remplacements suivants&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li>$\langle Q\vert{}\hat{Q} = Q\langle Q\vert{}$ (puisque la valeur propre de position $Q$ est un nombre réel).</li>
<li>$\langle Q\vert{}i\hat{P} = \frac{\partial}{\partial Q}\langle Q\vert{}$.</li>
</ul>

En injectant ces relations, on aboutit à une équation différentielle simple pour la fonction d'onde en position&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\partial}{\partial Q}\langle Q\vert{}\alpha\rangle = -(Q - \sqrt{2}\alpha)\langle Q\vert{}\alpha\rangle
$
</p>

La solution normalisée de cette équation différentielle est&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle Q\vert{}\alpha\rangle = \frac{1}{\pi^{1/4}}\mathrm e^{-(Q-\sqrt{2}\alpha)^2/2}
$
</p>

La fonction d'onde est donc une gaussienne. Son centre est décalé par rapport à l'origine d'une valeur $\sqrt{2}\alpha = \langle\hat{Q}\rangle + \mathrm i\langle\hat{P}\rangle$.

Par un raisonnement analogue, on peut montrer que la fonction d'onde dans l'espace des impulsions est donnée par&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle P\vert{}\alpha\rangle = \frac{1}{\pi^{1/4}}\mathrm e^{-(P+\mathrm i\sqrt{2}\alpha)^2/2}
$
</p>

À l'aide de ces fonctions d'onde en position et en impulsion, il devient possible de calculer les incertitudes spatiales et impulsionnelles. La méthode la plus directe consiste à utiliser leurs définitions statistiques usuelles&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\Delta Q)^2 = \langle\hat{Q}^2\rangle - \langle\hat{Q}\rangle^2, \qquad (\Delta P)^2 = \langle\hat{P}^2\rangle - \langle\hat{P}\rangle^2
$
</p>

Après calcul, on trouve que le produit de ces variances vaut&nbsp;:


<p style="text-align:center;">
$\displaystyle
(\Delta P)^2(\Delta Q)^2 = \frac{1}{4}
$
</p>

En comparant ce résultat à l'inégalité du principe d'incertitude d'Heisenberg ($\Delta Q \Delta P \geq 1/2$), on constate que les états cohérents atteignent bien la valeur d'incertitude minimale absolue.
C'est précisément en ce sens que les états cohérents représentent l'approximation quantique la plus proche possible des objets classiques, c'est-à-dire des objets capables d'être parfaitement localisés à la fois dans l'espace des positions et dans celui des impulsions.

</details>
</div>

</li>
</ul>

<ul>
<li><b>Il évolue classiquement</b>&nbsp;: $|\alpha(0)\rangle \to |\alpha(t)\rangle$ avec $\alpha(t) = \alpha_0\, \mathrm e^{-\mathrm i\omega t}$ (à une phase globale près), d'où $\langle\hat Q\rangle = \sqrt2\,\alpha_0\cos(\omega t - \theta)$ et $\langle\hat P\rangle = -\sqrt2\,\alpha_0\sin(\omega t - \theta)$&nbsp;: les moyennes exécutent le mouvement harmonique <i>classique</i>. Dans le plan $(Q, P)$, l'état est un petit «&nbsp;nuage&nbsp;» d'incertitude $\Delta Q = \Delta P = 1/\sqrt2$ qui orbite comme un point matériel.

<div id="preuve" style="margin-top:0.5em;">

<details><summary>Démonstration&nbsp;:</summary>

Comment les états cohérents réagissent à l'opérateur d'évolution $\hat{U}(\theta) = \mathrm e^{-\mathrm i\theta\hat{n}}$, où $\theta$ est un angle (un nombre réel) et $\hat{n}$ est notre opérateur habituel du nombre de particules&nbsp;?

Testons d'abord l'effet de cet opérateur sur un état de base $\vert{}n\rangle$ (qui vérifie $\hat{n}\vert{}n\rangle = n\vert{}n\rangle$). Pour ce faire, il suffit de se rappeler qu'une exponentielle d'opérateur peut se développer en série de Taylor&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{U}(\theta)\vert{}n\rangle = \left(1 + (-i\theta\hat{n}) + \frac{(-i\theta\hat{n})^2}{2!} + \dots \right)\vert{}n\rangle = \mathrm e^{-\mathrm i\theta n}\vert{}n\rangle
$
</p>

L'astuce ici est que chaque fois que l'opérateur $\hat{n}$ agit sur $\vert{}n\rangle$, il fait simplement sortir le nombre $n$. L'exponentielle de l'opérateur devient donc une simple exponentielle scalaire.

Nous pouvons maintenant appliquer ce résultat à un état cohérent $\vert{}\alpha\rangle$, qui est par définition une superposition de tous les états $\vert{}n\rangle$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{U}(\theta)\vert{}\alpha\rangle = \mathrm e^{-\vert{}\alpha\vert{}^2/2} \sum_{n=0}^{\infty} \frac{(\alpha \mathrm e^{-\mathrm i\theta})^n}{\sqrt{n!}}\vert{}n\rangle = \vert{}\alpha \mathrm e^{-\mathrm i\theta}\rangle
$
</p>

Conclusion de cette étape&nbsp;: L'action de $\hat{U}(\theta)$ sur un état cohérent $\vert{}\alpha\rangle$ a simplement pour effet de le transformer en un nouvel état cohérent, dont la valeur propre est multipliée par la phase $\mathrm e^{-\mathrm i\theta}$.

Ce résultat purement mathématique nous permet de déduire immédiatement l'évolution temporelle d'un état cohérent $\vert{}\alpha\rangle$ soumis au hamiltonien de l'oscillateur harmonique $\hat{H} = \omega(\hat{n} + 1/2)$ (en posant $\hbar=1$).

L'évolution de l'état au cours du temps $t$ s'écrit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\vert{}\alpha(t)\rangle = \mathrm e^{-\mathrm i\hat{H}t}\vert{}\alpha(0)\rangle = \mathrm e^{-\mathrm i\omega t/2}\vert{}\alpha(0) \mathrm e^{-\mathrm i\omega t}\rangle
$
</p>

Ce résultat final se lit en deux parties&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li>Le préfacteur exponentiel $\mathrm e^{-\mathrm i\omega t/2}$&nbsp;: c'est un simple facteur de phase global qui provient de l'énergie du point zéro (le $1/2$ du hamiltonien). Il n'affecte pas les probabilités physiques.</li>
<li>L'état $\vert{}\alpha(0) \mathrm e^{-\mathrm i\omega t}\rangle$&nbsp;: c'est ici que réside le message fondamental. Ce terme nous prouve qu'un état cohérent reste un état cohérent au cours du temps. Sa valeur propre (le nombre complexe $\alpha$) se contente de tourner en rond dans le plan complexe à la vitesse angulaire $\omega$.</li>
</ul>

Nous venons donc de démontrer mathématiquement que la dynamique de cet état quantique reproduit parfaitement le mouvement oscillatoire régulier d'un oscillateur harmonique&nbsp;!

</details>
</div>

</li>
</ul>



<!-- Figure à redessiner (L&B fig. 27.2) : le plan (Q horizontal, P vertical), un cercle en tirets centré à l'origine, et sur ce cercle un petit nuage de points (« blob ») avec une flèche indiquant sa rotation ; annoter ⟨Q⟩ = √2 Re α, ⟨P⟩ = √2 Im α -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/etatcoherent.png" style="box-shadow:none;background:none;">
</div>

### Nombre et phase, variables conjuguées

Écrivons $\alpha = |\alpha| \mathrm e^{\mathrm i\theta}$ et dérivons l'état par rapport à sa phase. Le développement en $|n\rangle$ donne&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\frac{\partial}{\partial\theta}\,|\alpha\rangle = \hat n\,|\alpha\rangle
$
</p>

On obtient la même structure que $\hat p = -\mathrm i\,\partial/\partial x$ $\to$ <b>le nombre et la phase sont conjugués</b>, avec l'incertitude heuristique $\Delta n\\,\Delta\theta \gtrsim 1$. 

Définir rigoureusement un <i>opérateur</i> de phase est en revanche épineux (la tentative de Dirac, $\hat a = \mathrm e^{\mathrm i\hat\phi}\sqrt{\hat n}$, bute sur des incohérences $\to$ la phase n'est pas une observable ordinaire). Mais la morale conjuguée tient, et elle est féconde&nbsp;: 
<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li>un état à $n$ fixé a une phase totalement floue&nbsp;;</li>
<li>un état de phase raide doit laisser flotter son nombre de particules.</li>
</ul>  

Deux incarnations&nbsp;:

<ul>
<li><b>Le laser</b>&nbsp;: $n$ photons dans un mode de cavité, à nombre fixé, ont une phase totalement indéterminée&nbsp;; le même mode en état cohérent $|\alpha_{\mathbf k}\rangle$ a $\Delta n = |\alpha|$ mais une phase de plus en plus raide à mesure qu'on le remplit ($\Delta\cos\theta \sim 1/|\alpha|$)&nbsp;: c'est le bon modèle du champ dans un laser.</li>
<li style="margin-top:0.8em;"><b>Le superfluide</b>&nbsp;: des bosons en interaction dans un état cohérent multimode vérifient $\hat\Psi(\mathbf x)|\psi\rangle = \psi(\mathbf x)|\psi\rangle$&nbsp;: le champ <i>quantique</i> a une valeur propre <i>classique</i>, la <b>fonction d'onde macroscopique</b>. Avec le mode $\mathbf p = 0$ macroscopiquement occupé, $\psi_0 = \sqrt{n_0}\,\mathrm e^{\mathrm i\theta_0}$&nbsp;: fixer la phase $\theta_0$ partout, c'est <b>briser spontanément la symétrie de phase</b>&nbsp;: le chapitre sur la <a href="./#brisure-de-symétrie">brisure de symétrie</a> refait surface, avec $\psi(\mathbf x)$ pour paramètre d'ordre. Contre-épreuve parlante&nbsp;: dans un état à nombres d'occupation fixés, $\langle\hat\Psi(\mathbf x)\rangle = 0$, donc sans cohérence, pas de paramètre d'ordre.</li>
</ul>

<br>

### Une source classique fabrique un état cohérent

Avec $\hat H_I(t) = -f(t)\\,\hat x_I(t)$, le premier ordre de la série de Dyson appliqué au vide donne

<p style="text-align:center;">
$\displaystyle
- \mathrm i\int\mathrm{d}t\;\hat H_I(t)\,|0\rangle
= \mathrm i\int\mathrm{d}t\; f(t)\, \frac{\hat a\,\mathrm e^{-\mathrm i\omega t} + \hat a^\dagger \mathrm e^{\mathrm i\omega t}}{(2m\omega)^{1/2}}\,|0\rangle
= \frac{\mathrm i\tilde f(\omega)}{(2m\omega)^{1/2}}\,|1\rangle
$
</p>

Seul $\hat a^\dagger$ survit sur $|0\rangle$, et l'intégrale temporelle sélectionne $\tilde f(\omega)$&nbsp;: la source ne crée un quantum que par sa composante de Fourier à la fréquence propre (accord résonnant).

À tous les ordres, les morceaux source-à-source déconnectés s'exponentient (amas liés) et l'émission de $n$ quanta se factorise&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal A_n = \frac{1}{\sqrt{n!}}\;\alpha^n\; \mathrm e^{(\text{Dumbbell})}\\
\displaystyle \alpha \equiv \frac{\mathrm i\tilde f(\omega)}{(2m\omega)^{1/2}}
$
</p>

Le $\sqrt{n!}$ vient de la normalisation de $|n\rangle$.

L'état final est donc $\propto \sum_n \frac{\alpha^n}{\sqrt{n!}}\\,|n\rangle$&nbsp;: <b>c'est l'état cohérent $|\alpha\rangle$</b>.


Une source classique branchée sur un mode quantique prépare exactement un état cohérent, d'amplitude $\alpha = \mathrm i\tilde f(\omega)/(2m\omega)^{1/2}$ (module <i>et</i> phase hérités de la source). C'est le mécanisme du laser pompé, de l'antenne, de tout champ «&nbsp;classique&nbsp;» rayonné&nbsp;: le monde classique émet du cohérent.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
Q, P\; \text{en quadrature}
\;\longrightarrow\;
\hat a|\alpha\rangle = \alpha|\alpha\rangle
\;\longrightarrow\;
|\alpha\rangle = \mathrm e^{-\frac{|\alpha|^2}{2}}\mathrm e^{\alpha\hat a^{\dagger}}|0\rangle
\;\longrightarrow\;
\text{Poisson},\;\, \Delta P\Delta Q = \tfrac12
\;\longrightarrow\;
\alpha(t) = \alpha_0 \mathrm e^{-\mathrm i\omega t}
\;\longrightarrow\;
\hat n \leftrightarrow \theta
\;\longrightarrow\;
\text{laser, superfluide}
$
</p>

Pourquoi ce chapitre ici&nbsp;? Parce que les états cohérents sont la <b>bonne base pour l'intégrale de chemin</b>. Ils diagonalisent $\hat a$&nbsp;: pris en sandwich entre états cohérents, les opérateurs $\hat a, \hat a^\dagger$ deviennent des <i>nombres complexes</i> $\alpha, \alpha^*$.

<br>

### Pièges

<ul>
<li>$\hat a$ n'est pas hermitien&nbsp;: $\alpha$ est complexe, et c'est le but (un module <i>et</i> une phase). $\hat a^\dagger$, lui, n'a <b>aucun</b> état propre&nbsp;: il élève le plancher d'occupation.</li>
<li>$|\alpha\rangle$ n'est état propre ni de $\hat H$ ni de $\hat n$&nbsp;: le nombre de quanta est indéterminé, c'est le <i>prix</i> d'une phase définie, pas un défaut.</li>
<li>Les $|\alpha\rangle$ ne sont ni orthogonaux ($\langle\alpha|\beta\rangle \neq 0$) ni indépendants&nbsp;: une famille <b>sur-complète</b>, à manier avec sa relation de fermeture propre.</li>
<li>Classique seulement à grand remplissage&nbsp;: $\Delta n/\langle n\rangle = 1/|\alpha| \to 0$. Un état cohérent presque vide reste très quantique.</li>
<li>L'opérateur de phase de Dirac est mal défini&nbsp;: «&nbsp;$\hat n$ et $\theta$ conjugués&nbsp;» est une heuristique féconde, pas un théorème d'observables.</li>
<li>$\langle\hat\Psi\rangle = 0$ dans tout état à nombres fixés&nbsp;: sans cohérence, pas de fonction d'onde macroscopique. Interdire le nombre flou interdirait lasers et condensats.</li>
</ul>

<br>

## Les nombres de Grassmann&nbsp;: l'intégrale de chemin des fermions

### De nouveaux nombres, et pourquoi il en faut

L'intégrale de chemin somme sur des champs <i>classiques</i>. Or les champs fermioniques, même débarrassés de leurs chapeaux, doivent garder la trace de l'anticommutation $\hat\psi(x)\hat\psi(y) = -\hat\psi(y)\hat\psi(x)$ du formalisme canonique. Et l'état cohérent fermionique devrait vérifier $\hat c\\,|\eta\rangle = \eta\\,|\eta\rangle$ avec des valeurs propres qui anticommutent. Dans les deux cas, il faut de <b>nouveaux nombres</b>. Et ils furent inventés un siècle plus tôt par Hermann Grassmann, dont l'œuvre fut largement ignorée de son vivant.

<div id="def">

Les <b>nombres de Grassmann</b> (de symboles $\eta, \bar\eta, \ldots$) vérifient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\eta\,\eta' = -\eta'\eta\\
\Longrightarrow \eta^2 = 0
$
</p>


Conséquence radicale&nbsp;: toute fonction est <i>linéaire</i>, $f(\eta) = a + b\\,\eta$ (le développement de Taylor s'arrête net). 

</div>

On veut pouvoir faire des calculs avec ces nombres, ce qui nous amène à définir la dérivation et l'intégration des nombres de Grassmann.

### L'intégrale de Berezin

<div id="def">

La dérivation est définie par&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\partial}{\partial \eta} \eta=1\\
\displaystyle  \frac{\partial}{\partial \eta} a=0
$
</p>

De plus, l'opérateur dérivé lui-même anticommute. Si $\zeta$ est un autre nombre de Grassmann, on a $\frac{\partial}{\partial \eta} \zeta \eta=-\zeta \frac{\partial}{\partial \eta} \eta=-\zeta$.


</div>

<br>

<div id="def">

L'intégration (dite de Berezin) se <b>définit</b> par

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}\eta\; 1 = 0\\
\displaystyle \int\mathrm{d}\eta\; \eta = 1
$
</p>

Par conséquent, $\int f(\eta) \mathrm d \eta = \int (a+b\eta) \mathrm d \eta = a\times 0 + b\times 1  = b = \frac{\partial}{\partial \eta}f(\eta)$ 

Intégrer, c'est dériver. Bizarre, mais cohérent si on veut une invariance par translation.

</div>

<br>

<div id="preuve">

Les règles de Berezin découlent de cette volonté d'avoir une invariance par translation. C'est une symétrie fondamentale, et en pratique, c'est elle qu'on invoque à chaque fois qu'on utilise l'astuce de la complétion du carré dans l'exponentielle gaussienne.

Comment définir les règles de l'intégrale de Grassmann pour conserver le droit de faire des changements de variables par translation&nbsp;?

Berezin exige donc que pour toute fonction $f$ et pour toute constante de Grassmann $\theta$, on ait&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int \mathrm{d} \eta f(\eta+\theta)=\int \mathrm{d} \eta f(\eta)
$
</p>

Voyons ce que cela implique pour $f(\eta)=a+b \eta$.

Déjà, on a $f(\eta+\theta)=a+b(\eta+\theta)=(a+b \theta)+b \eta$.

Appliquons maintenant l'intégration à la fonction non translatée et à la translatée&nbsp;:

<p style="text-align:center;">
 $\displaystyle
\int \mathrm{d} \eta f(\eta )=  \int \mathrm{d} \eta(a+b \eta)=a \int \mathrm{~d} \eta 1+b \int \mathrm{~d} \eta \eta\\
\displaystyle  \int \mathrm{d} \eta f(\eta +\theta ) = \int \mathrm{d} \eta((a+b \theta)+b \eta)=(a+b \theta) \int \mathrm{d} \eta 1+b \int \mathrm{~d} \eta \eta
 $
 </p> 
 
 Par conséquent, les deux intégrales ne sont égales que si $b \theta \int \mathrm{~d} \eta 1=0$. Et comme $b$ et $\theta$ peuvent valoir n'importe quoi, cela a amené Berezin à imposer&nbsp;:
 
 <p style="text-align:center;">
 $\displaystyle
 \int \mathrm{d} \eta 1=0
 $
 </p>

</div>

<br>

### La gaussienne, et le déterminant qui remonte au numérateur

<div id="theo">

La gaussienne de Grassmann inverse la place du déterminant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\;\, \mathrm e^{\bar\eta\, a\, \eta} = a
$
</p>

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}^N\!\eta\,\mathrm{d}^N\!\bar\eta\;\ \mathrm e^{\bar\eta A \eta} = \det A
$
</p>


Là où la gaussienne bosonique complexe donne $\displaystyle\int\mathrm{d}z\\,\mathrm{d}z^\*\\, \mathrm e^{-z^* a z} = \pi/a$, les fermions donnent le déterminant <b>au numérateur</b>.

</div>

<br>

<div id="preuve">

Le cas $1\times 1$ tient en une ligne&nbsp;: $\mathrm e^{\bar\eta a\eta} = 1 + \bar\eta a\eta$. La série de Taylor s'arrête net, $(\bar\eta\eta)^2 = 0$. Et les règles de Berezin ne retiennent que le terme saturant les deux intégrales&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\; (1 + \bar\eta\, a\, \eta) = \int\mathrm{d}\eta\; a\,\eta = a
$
</p>

Le cas $N \times N$ s'obtient en développant l'exponentielle&nbsp;: seul survit le terme contenant chaque $\eta_i$ et chaque $\bar\eta_i$ exactement une fois, et la somme signée sur les appariements est <i>la définition du déterminant</i>.

</div>

<br>

### L'état cohérent fermionique

<div id="def">

Avec $\hat c^\dagger$ le créateur d'un fermion,

<p style="text-align:center;">
$\displaystyle
|\eta\rangle = \mathrm e^{-\eta\hat c^{\dagger}}|0\rangle = |0\rangle - \eta\,|1\rangle
$
</p>

(la série s'arrête d'elle-même&nbsp;: $\eta^2 = 0$), en convenant que les nombres de Grassmann anticommutent aussi avec les opérateurs de fermions, $\\{\eta, \hat c\\} = 0$. 

On vérifie en une ligne que $\hat c\\,|\eta\rangle = \eta\\,|\eta\rangle$. 

Côté bra, on pose $\langle\bar\eta| = \langle 0| + \bar\eta\langle 1|$, où $\bar\eta$ n'est <b>pas</b> le conjugué de $\eta$ mais une variable de Grassmann indépendante. 

Ces définitions impliquent le recouvrement (produit scalaire) $\langle\bar\zeta|\eta\rangle = \mathrm e^{\bar\zeta\eta}$. 

Enfin, pour que ces états cohérents soient utilisables, il leur faut une <b>relation de complétude</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}\eta\,\mathrm{d}\bar\eta\; \mathrm e^{\bar\eta\eta}\,|\eta\rangle\langle\bar\eta| = \mathbb 1
$
</p>

Attention, le ket porte $\eta$ et le bra porte $\bar\eta$, conformément aux définitions ci-dessus. Et le signe de l'exposant est <b>affaire de convention</b>&nbsp;: il dépend de l'ordre choisi pour $\mathrm d\eta\,\mathrm d\bar\eta$ et de la règle d'anticommutation entre nombres de Grassmann et états impairs. On trouve donc $\mathrm e^{-\bar\eta\eta}$ dans une bonne partie de la littérature, sans que la physique en soit changée.

</div>


### La gaussienne avec sources, et le propagateur

Reste l'intégrale la plus importante de toutes&nbsp;: la gaussienne <b>avec sources</b>. Le carré se complète exactement comme chez les bosons (grâce aux règles de Berezin)&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\int\mathrm{d}\psi\,\mathrm{d}\bar\psi\;\, \mathrm e^{\bar\psi K\psi + \bar\eta\psi + \bar\psi\eta} = C\, \mathrm e^{-\bar\eta K^{-1}\eta}
$
</p>

Le $C$ partira dans la normalisation.

</div>

<br>

<div id="preuve">

Il suffit d'écrire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar{\psi} K \psi+\bar{\eta} \psi+\bar{\psi} \eta=\left(\bar{\psi}+\bar{\eta} K^{-1}\right) K\left(\psi+K^{-1} \eta\right)-\bar{\eta} K^{-1} \eta
$
</p>

</div>

Pour toute théorie fermionique dont le lagrangien peut se mettre sous la forme en $\bar\psi(x)\hat K\psi(x)$, on a donc&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal Z[\bar\eta, \eta]
= \frac{\displaystyle\int\mathcal D\psi\,\mathcal D\bar\psi\;\, \mathrm e^{\,\mathrm i\int\mathrm{d}^4x\,[\mathcal L(\bar\psi,\psi) + \bar\eta\psi + \bar\psi\eta]}}{\displaystyle\int\mathcal D\psi\,\mathcal D\bar\psi\;\, \mathrm e^{\,\mathrm i\int\mathrm{d}^4x\,\mathcal L(\bar\psi,\psi)}}
= \mathrm e^{-i\int \bar\eta(x)\,\hat K^{-1}(x,y)\,\eta(y)}
$
</p>


Le propagateur se lit directement, c'est $\mathrm i\hat K^{-1}$. Et la quantification est terminée. C'est le jumeau exact du $\mathcal Z_0[J] = \mathrm e^{-\frac12\int J\Delta J}$ bosonique, avec deux sources de Grassmann $\bar\eta, \eta$ au lieu d'une source réelle.

</div>

À température finie s'imposent les conditions <b>antipériodiques</b> $\psi(0) = -\psi(\beta)$ annoncées deux chapitres plus tôt (et les fréquences de Matsubara impaires $\omega_n = (2n+1)\pi/\beta$).

Le $\det A$ au numérateur (contre $1/\det$ pour les bosons) est l'origine profonde du <b>signe $(-1)$ de chaque boucle de fermions</b>, celui que le théorème de Wick fermionique annonçait par ses signatures de permutation. Deux langages, un seul fait&nbsp;: les fermions comptent avec des signes.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\eta\zeta = -\zeta\eta
\;\longrightarrow\;
f = a + b\eta
\;\overset{\text{Berezin}}{\longrightarrow}\;
{\textstyle\int}\mathrm{d}\eta\;\eta = 1
\;\longrightarrow\;
\mathrm e^{\bar\eta A\eta} \to \det A
\;\longrightarrow\;
|\eta\rangle = |0\rangle - \eta|1\rangle
\;\overset{\text{carré complété}}{\longrightarrow}\;
\mathcal Z[\bar\eta,\eta] = \mathrm e^{-\mathrm i\int\bar\eta\hat K^{-1}\eta}
$
</p>

<br>

### Pièges

<ul>
<li>Intégrer = dériver (Berezin)&nbsp;: aucune «&nbsp;aire sous la courbe&nbsp;» à chercher&nbsp;; c'est une définition algébrique, justifiée par ses invariances.</li>
<li>L'<b>ordre</b> de tout compte (variables, différentielles, opérateurs)&nbsp;: chaque échange coûte un signe.</li>
<li>$\bar\eta$ n'est <b>pas</b> le conjugué de $\eta$, et $\langle\bar\eta|$ n'est pas l'adjoint de $|\eta\rangle$. Ce sont des variables indépendantes.</li>
<li>Les nombres de Grassmann anticommutent <i>aussi</i> avec les opérateurs de fermions, $\{\eta, \hat c\} = 0$.</li>
<li>$\det A$ au <b>numérateur</b> (contre $\pi/a$ pour la gaussienne bosonique complexe)&nbsp;: c'est l'origine du $(-1)$ par boucle de fermions.</li>
<li>À $T \neq 0$&nbsp;: <b>anti</b>périodicité et fréquences de Matsubara impaires.</li>
</ul>

<br>

{{%notice note%}}
Et maintenant&nbsp;? Le livre est équipé de <b>deux moteurs complets</b> (canonique et fonctionnel) et de la température. La suite en tire les grandes récoltes&nbsp;: les théories effectives et la renormalisation (où l'intégrale de chemin règne sans partage), et la physique de la matière condensée (où états cohérents, Matsubara et brisure de symétrie travaillent ensemble, supraconducteurs en tête).
{{%/notice%}}

<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc8">Chapitre précédent</a></td><td><a href="../tqc10">Chapitre suivant</a></td>
    </tr>
</table>
</div>