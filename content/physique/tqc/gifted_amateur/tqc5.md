+++
title = "TQC-5"
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
margin-top:-0.5em;
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


# Théorie quantique des champs -- Partie 5

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


Deux chapitres, et un même thème sous deux visages&nbsp;: <b>ce que les symétries imposent à une théorie</b>.

<ul>
<li>Le premier part d'une exigence qui semble gratuite, l'invariance sous une transformation de phase <b>locale</b>, et découvre qu'elle <b>dicte l'électromagnétisme</b>. Le champ de jauge $A^\mu$ n'est pas postulé, il est réclamé par la symétrie&nbsp;; et une fois qu'on lui donne une dynamique, on retombe sur Maxwell sans avoir eu le choix. Au passage, la quantification du champ électromagnétique livre le photon, avec ses deux polarisations et son spin&nbsp;1.</li>
<li>Le second quitte les groupes continus pour les <b>symétries discrètes</b>&nbsp;: la conjugaison de charge $\mathrm C$, la parité $\mathrm P$ et le renversement du temps $\mathrm T$. Chacune est violée quelque part dans la nature, mais leur produit $\mathrm{CPT}$ résiste à tout, et c'est un théorème. Le chapitre se clôt sur la topologie du groupe des rotations, qui explique pourquoi un spineur change de signe après un tour complet.</li>
</ul>

<br>


## Champs de jauge et théorie de jauge

Une invariance de jauge trahit moins une symétrie du système qu'une redondance dans sa description (différentes configurations du champ aboutissent à des observables identiques). Cette redondance nous laisse une certaine latitude quant au choix de la meilleure formulation, c'est le choix de jauge. Une transformation d'une description à une autre est appelée **transformation de jauge** et l'invariance sous-jacente est l'**invariance de jauge**.

L'invariance de jauge n'est pas une symétrie dans le sens où il n'est pas question ici de curseurs internes permettant de passer d'une particule à une autre. C'est plutôt l'affirmation de notre incapacité à trouver une description unique du système. On peut citer comme exemple l'indétermination de l'origine des potentiels électriques (le choix d'associer 0&nbsp;V à la terre est arbitraire), celle de l'origine des phases en mécanique quantique (on peut passer de $\psi(x)$ à $\psi(x)\mathrm{e}^{\mathrm{i}\alpha}$ sans changer la physique), et, en électromagnétisme, la liberté sur le choix de $A$ laissé par la transformation $A \rightarrow A+\nabla \chi$ (où $\chi(\boldsymbol{x})$ est une fonction de la position) qui est sans effet sur $\boldsymbol{B}=\boldsymbol{\nabla} \times \boldsymbol{A}$. On verra que ces trois indéterminations sont en fait liées entre elles. On constate aussi que dans les trois cas, seules des variations de la grandeur indéterminée peuvent faire l'objet d'observations.

Pour avoir des définitions propres, on doit lever toute ambiguïté en fixant des jauges. 

Il peut s'agir de choix de jauges globaux, identiques en tout point, ou de choix locaux, susceptibles de varier d'un point à l'autre.

Partons du lagrangien du champ scalaire complexe&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathcal{L}=\left(\partial^\mu \psi\right)^{\dagger}\left(\partial_\mu \psi\right)-m^2 \psi^{\dagger} \psi
$
</p>
</div>

Comme on l'a vu, la symétrie $U(1)$ se traduit par la non variation du lagrangien (et par extension des équations du mouvement) lors de la transformation $\psi(x) \rightarrow \psi(x) \mathrm{e}^{\mathrm{i} \alpha}$. Il s'agit là d'une **transformation globale** puisqu'elle change le champ d'une même valeur en tout point de l'espace-temps. La théorie est donc dite invariante par transformation $U(1)$ globale.

Que se passerait-il si on imposait une invariance **locale** par rapport à la phase&nbsp;? Il faudrait que la transformation $\psi(x) \rightarrow \psi(x) \mathrm{e}^{\mathrm{i} \alpha(x)}$ (où $\alpha(x)$ peut maintenant différer d'un point à l'autre) soit sans effet sur les équations du mouvement. Cela semble une demande un peu extrême, mais elles se révèle surprenemment féconde&nbsp;: l'électromagnétisme en découle&nbsp;!

On n'est pas embêté par le terme de masse&nbsp;: $m^2\psi^\dagger\psi\rightarrow m^2\psi^\dagger \mathrm{e}^{-\mathrm{i} \alpha(x)} \mathrm{e}^{\mathrm{i} \alpha(x)} \psi = m^2\psi^\dagger\psi $. Par contre, le terme contenant les dérivées pose problème puisque la dérivée agit maintenant sur $\alpha(x)$&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\partial_\mu \psi(x) & \rightarrow \partial_\mu \psi(x) \mathrm{e}^{\mathrm{i} \alpha(x)} \\
& =\mathrm{e}^{\mathrm{i} \alpha(x)} \partial_\mu \psi(x)+\psi(x) \mathrm{e}^{\mathrm{i} \alpha(x)} \mathrm{i} \partial_\mu \alpha(x) \\
& =\mathrm{e}^{\mathrm{i} \alpha(x)}\left[\partial_\mu+\mathrm{i} \partial_\mu \alpha(x)\right] \psi(x)
\end{aligned}
$
</p>
</div>

Et de même, on a $\partial^\mu \psi^{\dagger}(x)  \rightarrow  \mathrm{e}^{-\mathrm{i} \alpha(x)}\left[\partial^\mu-\mathrm{i} \partial^\mu \alpha(x)\right] \psi^{\dagger}(x)$.

Le premier terme du lagrangien est donc tout chamboulé&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\left(\partial^\mu \psi^{\dagger}\right)\left(\partial_\mu \psi\right)-\mathrm{i}\left(\partial^\mu \alpha\right) \psi^{\dagger}\left(\partial_\mu \psi\right)+\mathrm{i}\left(\partial^\mu \psi^{\dagger}\right)\left(\partial_\mu \alpha\right) \psi+\left(\partial^\mu \alpha\right)\left(\partial_\mu \alpha\right) \psi^{\dagger} \psi
$
</p>
</div>

Faire dépendre $\alpha$ de la position a logiquement retiré sa symétrie $U(1)$ à la théorie qui n'est donc pas invariante sous une transformation $U(1)$ locale. Mais peut-on restaurer cette symétrie&nbsp;?

Oui, en ajoutant un nouveau champ $A^\mu(x)$ dont la mission sera d'annuler les variations de la phase d'un point à l'autre. On greffe ce champ à la dérivée pour créer une sorte de "super dérivée"&nbsp;: la **dérivée covariante $D_\mu$**.

<div id="def">
<p style="text-align:center;">
$\displaystyle
D_\mu=\partial_\mu+\mathrm{i} q A_\mu(x)
$
</p>
</div>

La dérivée covariante peut réparer la symétrie $U(1)$ si le nouveau champ $A_\mu$ se transforme comme&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
 A_\mu \rightarrow A_\mu-\frac{1}{q} \partial_\mu \alpha(x)
$
</p>

 $q$ est le paramètre de couplage, il nous informe sur la force de l'interaction entre $A_\mu$ et les autres champs.
 
 </div>

<br>

<div id="preuve">

Si $\psi(x) \rightarrow \psi(x) \mathrm{e}^{\mathrm{i} \alpha(x)}$, alors $\partial_\mu \psi \rightarrow\left(\partial_\mu \psi\right) \mathrm{e}^{\mathrm{i} \alpha}+\mathrm{i}\left(\partial_\mu \alpha\right) \psi$ et donc

<p style="text-align:center;">
$\displaystyle
D_\mu \psi
=\left(\partial_\mu+\mathrm{i} q A_\mu\right) \psi  \rightarrow\left(\partial_\mu \psi\right) \mathrm{e}^{\mathrm{i} \alpha}+\mathrm{i}\left(\partial_\mu \alpha\right) \psi \, \mathrm{e}^{\mathrm{i} \alpha} +\mathrm{i} q A_\mu \psi \, \mathrm{e}^{\mathrm{i} \alpha} - \mathrm{i}\left(\partial_\mu \alpha\right) \psi \, \mathrm{e}^{\mathrm{i} \alpha}
= (\partial_\mu \psi) \mathrm{e}^{\mathrm{i} \alpha} + \mathrm{i} q A_\mu \psi \, \mathrm{e}^{\mathrm{i} \alpha}
= \left( D_\mu \psi \right)  \mathrm{e}^{\mathrm{i} \alpha}
$
</p>

</div>

Le lagrangien entier devient invariant si on remplace les dérivées ordinaires par des dérivées covariantes&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathcal{L}=\left(D^\mu \psi\right)^{\dagger}\left(D_\mu \psi\right)-m^2 \psi^{\dagger} \psi
$
</p>
</div>


Pour imposer une symétrie $U(1)$ locale, la théorie se doit alors d'être invariante par rapport à deux jeux de transformations en parallèle&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\psi(x) & \rightarrow \psi(x) \mathrm{e}^{\mathrm{i} \alpha(x)} \\
A_\mu(x) & \rightarrow A_\mu(x)-\frac{1}{q} \partial_\mu \alpha(x)
\end{aligned}
$
</p>
</div>

<br>

<div id="def">

Une théorie où un champ $A^\mu(x)$ est introduit pour permettre une invariance par rapport à une transformation locale est appelée **théorie de jauge**. Le champ $A^\mu(x)$ est appelé **champ de jauge**.

</div>

Le champ de jauge, introduit pour satisfaire notre envie soudaine d'invariance locale, peut-il s'avérer suffisamment réel jusqu'à avoir sa propre dynamique&nbsp;?

<br>

### Théorie de jauge la plus simple&nbsp;: l'électromagnétisme

Une théorie dont le lagrangien contient des termes décrivant $A^\mu(x)$ se doit d'être invariante sous des transformations du type $A_\mu(x) \rightarrow A_\mu(x)-\frac{1}{q} \partial_\mu \alpha(x)$. L'électromagnétisme est justement un exemple d'une telle théorie avec son champ vectoriel $A^\mu(x)=(V(x), \boldsymbol{A}(x))$ formant le lagrangien&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\mathcal{L}&=-\frac{1}{4} \left(\partial_\mu A_\nu-\partial_\nu A_\mu\right) \left(\partial^\mu A^\nu-\partial^\nu A^\mu\right) - J_{\mathrm{em}}^\mu A^\mu\\
&= -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} - J_{\mathrm{em}}^\mu A^\mu
\end{aligned}
$
</p>

<p style="text-align:center;">
où $F_{\mu\nu} = \left(\partial_\mu A_\nu-\partial_\nu A_\mu\right)$ est le <b>tenseur de Maxwell</b>
</p>
</div>

<br>

<div id="preuve">
<details>
<summary>
Motivation du terme $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$
</summary>

<b>La nécessité d'une cinétique (faire vivre le champ)</b><br>
À ce stade du raisonnement, le champ de jauge $A_\mu(x)$ a été introduit uniquement comme une rustine mathématique pour réparer la dérivée de $\psi$. S'il en reste là, $A_\mu$ n'est qu'un champ statique, une toile de fond sans vie.<br>
Pour que $A_\mu$ devienne une véritable particule (le photon) capable de se propager dans l'espace et le temps, il doit posséder sa propre énergie cinétique. Dans un lagrangien, un terme cinétique doit impérativement contenir des dérivées du champ par rapport à l'espace-temps ($\partial_\mu A_\nu$).

<b>Le couperet de la symétrie de jauge</b><br>
Nous voulons ajouter un terme cinétique $\mathcal L_{\text{photon}}$ qui ne dépend que de $A_\mu$. Mais notre règle d'or (le principe de jauge) est stricte&nbsp;: ce nouveau terme doit être totalement invariant sous la transformation de jauge&nbsp;:

<p style="text-align:center;">
$\displaystyle
A_\mu \to A_\mu - \frac{1}{q}\partial_\mu\alpha
$
</p>

Ce que cela interdit (la masse du photon)&nbsp;:<br>
Si l'on tentait de lui donner une masse avec un terme classique de type $m^2 A_\mu A^\mu$, la transformation de jauge ajouterait des termes parasites contenant $\partial_\mu\alpha$ qui ne s'annuleraient jamais.<br>
Conséquence&nbsp;: La symétrie de jauge interdit au photon d'avoir une masse. $m_\gamma = 0$ n'est pas mesuré, c'est exigé mathématiquement.

<b>La géométrie à la rescousse (d'où vient $F_{\mu\nu}$&nbsp;?)</b><br>
Nous devons donc construire un objet mathématique avec des dérivées de $A_\mu$, qui soit insensible à la jauge.
Regardons comment se transforme la dérivée simple du champ&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu A_\nu \to \partial_\mu \left( A_\nu - \frac{1}{q}\partial_\nu\alpha \right) = \partial_\mu A_\nu - \frac{1}{q}\partial_\mu\partial_\nu\alpha
$
</p>

Le terme parasite contient les dérivées secondes croisées $\partial_\mu\partial_\nu\alpha$. Le théorème de Schwarz nous dit que l'ordre des dérivées partielles n'importe pas&nbsp;: $\partial_\mu\partial_\nu = \partial_\nu\partial_\mu$.<br>
Pour éliminer ce parasite, l'astuce est de soustraire la version inversée du terme&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\partial_\mu A_\nu - \partial_\nu A_\mu) \to (\partial_\mu A_\nu - \partial_\nu A_\mu) - \frac{1}{q}(\partial_\mu\partial_\nu\alpha - \partial_\nu\partial_\mu\alpha) = (\partial_\mu A_\nu - \partial_\nu A_\mu) - 0
$
</p>

On vient de construire un objet fondamentalement invariant de jauge, le tenseur de Maxwell&nbsp;:

<p style="text-align:center;">
$\displaystyle
F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu
$
</p>

<b>Construire le scalaire de Lorentz (l'équation finale)</b><br>
Le lagrangien doit être un scalaire de Lorentz (un simple nombre, invariant sous les rotations et les changements de référentiels). Notre objet $F_{\mu\nu}$ est un tenseur à deux indices. Pour fabriquer un scalaire, la seule solution est de le contracter avec lui-même&nbsp;: $F_{\mu\nu}F^{\mu\nu}$.<br>
Nous avons notre terme&nbsp;! Il s'écrira proportionnellement à $F_{\mu\nu}F^{\mu\nu}$.

Pourquoi le facteur $-\frac{1}{4}$&nbsp;?
C'est ici qu'interviennent les conventions physiques de base pour retomber sur nos pattes&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Le signe moins&nbsp;: Il est crucial pour que l'énergie cinétique (liée aux champs électriques et magnétiques) soit positive. Si le signe était positif, le photon aurait une énergie cinétique négative, ce qui produirait une particule fantôme qui déstabiliserait le vide quantique.</li>
<li>Le facteur $1/4$&nbsp;: Le tenseur $F_{\mu\nu}$ est antisymétrique. Lorsqu'on fait la double somme sur $\mu$ et $\nu$, chaque terme croisé est compté deux fois (un facteur $2$), et les équations d'Euler--Lagrange font encore descendre un facteur $2$ de l'exposant. Le $1/4$ sert à neutraliser ces facteurs pour que les équations du mouvement générées soient exactement les équations de Maxwell classiques $\partial_\mu F^{\mu\nu} = J^\nu$.</li>
</ul>

Pourquoi pas des puissances supérieures&nbsp;?<br>
On pourrait imaginer des termes comme $(F_{\mu\nu}F^{\mu\nu})^2$. Ils sont invariants de jauge et de Lorentz&nbsp;!<br>
Cependant, l'analyse dimensionnelle et la condition de renormalisabilité (pour que la théorie quantique ne génère pas d'infinis impossibles à maîtriser) interdisent dans un espace-temps à 4 dimensions d'avoir des termes dont la dimension d'énergie dépasse 4. Le terme $F^2$ a exactement la dimension 4. Tout terme supérieur exigerait l'introduction d'une nouvelle échelle de masse (physique au-delà du modèle standard).

<b>En conclusion</b><br> 
Le terme $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$ est l'unique terme cinétique renormalisable, invariant de Lorentz et invariant de jauge qu'il est mathématiquement possible d'écrire dans notre univers. La symétrie dicte l'interaction, mais elle dicte aussi la dynamique libre du champ.

</details>

</div>

{{%notice type="note" title="Courbure du champ de jauge"%}}

Plutôt que de tâtonner, la géométrie différentielle nous donne le tenseur de Maxwell automatiquement. En calculant le commutateur des deux dérivées covariantes $[D_\mu, D_\nu] = D_\mu D_\nu - D_\nu D_\mu$  agissant sur le champ $\psi$, les dérivées ordinaires s'annulent et il ne reste que&nbsp;:

<p style="text-align:center;">
$\displaystyle
[D_\mu, D_\nu]\psi = \mathrm{i}q (\partial_\mu A_\nu - \partial_\nu A_\mu)\psi = \mathrm{i}q F_{\mu\nu}\psi
$
</p>

$F_{\mu\nu}$ mesure la "**courbure**" de notre symétrie de jauge.

<details>
<summary>
Géométrie différentielle&nbsp;: la force comme courbure
</summary>

C'est le changement de paradigme fondamental apporté par la géométrie différentielle à la physique&nbsp;: les interactions fondamentales ne sont rien d'autre que la manifestation géométrique d'une courbure.

<b>Les forces de jauge (électromagnétisme, forces nucléaires)</b><br>
Pour comprendre pourquoi le terme cinétique $F_{\mu\nu}$ est une courbure, il faut adopter la vision des mathématiciens (la théorie des espaces fibrés).
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Le potentiel $A_\mu$ est une «&nbsp;connexion&nbsp;»&nbsp;: en géométrie, une connexion est l'outil qui permet de comparer des objets situés en des points différents. Ici, $A_\mu$ nous dit comment la «&nbsp;phase&nbsp;» (l'angle interne) d'un électron tourne lorsqu'on le déplace d'un point à un autre de l'espace.</li>
<li>Le tenseur $F_{\mu\nu}$ est la «&nbsp;courbure&nbsp;»&nbsp;: comment mesure-t-on la courbure d'un espace ? En marchant le long d'une boucle fermée. Sur Terre, si nous marchons vers le pôle Nord, tournons à 90°, marchons jusqu'à l'équateur, tournons à 90° et revenons au point de départ, vous ne regardez plus dans la même direction.<br>
En physique quantique, si on prend un électron, qu'on le déplace le long d'une minuscule boucle spatio-temporelle fermée et qu'on le ramène à son point de départ, sa phase quantique aura tourné. La quantité exacte dont la phase a tourné est mesurée par $F_{\mu\nu}$.</li>
</ul>

C'est exactement ce que dit la formule mathématique du commutateur &nbsp;:
<p style="text-align:center;">
$\displaystyle
[D_\mu, D_\nu]\psi = \mathrm{i}q F_{\mu\nu}\psi
$
</p>

Faire $D_\mu D_\nu - D_\nu D_\mu$, c'est faire un petit pas dans la direction $\nu$, puis $\mu$, et soustraire le chemin inverse ($\mu$ puis $\nu$). C'est le contour d'un rectangle infinitésimal.<br>
Ainsi, le terme cinétique du photon $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$ se lit géométriquement comme&nbsp;: la somme des courbures au carré de l'espace interne de la particule. Ce principe a été généralisé par Yang et Mills pour décrire la force nucléaire forte (les gluons) et faible (les bosons $W$ et $Z$) avec des courbures non plus de simples phases, mais de matrices complexes.

<b>La force de gravité (Relativité Générale)</b><br>
Si les physiciens des particules ont découvert que les forces étaient la courbure d'espaces «&nbsp;internes&nbsp;», Einstein, lui, l'avait déjà découvert pour l'espace physique lui-même&nbsp;!<br>
Dans la relativité générale, le champ qui varie n'est pas un potentiel $A_\mu$, c'est la métrique de l'espace-temps lui-même, notée $g_{\mu\nu}$ (qui permet de mesurer les distances).
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>La connexion (l'équivalent de $A_\mu$) est représentée par les symboles de Christoffel $\Gamma^\lambda_{\mu\nu}$.</li>
<li>La courbure (l'équivalent de $F_{\mu\nu}$) est le tenseur de Riemann $R^\rho_{\sigma\mu\nu}$, qui mesure littéralement à quel point l'espace-temps est tordu.</li>
</ul>

Quel est le terme « cinétique » du champ gravitationnel dans le lagrangien d'Einstein-Hilbert ?

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\text{gravité}} = R
$
</p>

C'est tout. $R$ (le scalaire de Ricci) est simplement la contraction du tenseur de Riemann. Le lagrangien de la gravité est purement et simplement la courbure de l'espace-temps.

<b>La matière</b><br>
La règle est donc parfaite pour les forces (les bosons vecteurs de spin 1 et le graviton de spin 2).<br>
En revanche, pour les champs de matière (les fermions de spin 1/2 comme l'électron, ou le scalaire de spin 0 comme le Higgs), le terme cinétique n'est pas une courbure.
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Terme cinétique de Dirac&nbsp;: $\bar$\bar\psi\,\mathrm{i}\gamma^\mu D_\mu\,\psi$</li>
<li>Terme cinétique de Klein-Gordon&nbsp;: $(D_\mu\phi)^\dagger(D^\mu\phi)$</li>
</ul>

Ici, la dérivée covariante $D_\mu$ est une «&nbsp;vitesse généralisée&nbsp;». Ces termes mesurent simplement à quel point le champ de matière ondule ou se déplace dans l'espace. Ils «&nbsp;ressentent&nbsp;» la géométrie (via le $A_\mu$ contenu dans $D_\mu$), mais ils ne sont pas la géométrie.

</details>

{{%/notice%}}

Les équations du mouvement qu'on en déduit ne sont autres que les deux équations de Maxwell inhomogènes&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\partial^2 A^\nu-\partial^\nu\left(\partial_\mu A^\mu\right)=J_{\mathrm{em}}^\nu
$
</p>
</div>

Ni le lagrangien, ni les équations du mouvement ne sont modifiés par la transformation $A_\mu(x) \rightarrow A_\mu(x)-\partial_\mu \chi(x)$ qui se décompose en&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
V & \rightarrow V-\partial_0 \chi \\
\boldsymbol{A} & \rightarrow \boldsymbol{A}+\boldsymbol{\nabla} \chi
\end{aligned}
$
</p>

C'est bien ce qu'on nomme en électromagnétisme l'invariance de jauge (si $A_\mu$ décrit correctement le champ électromagnétique dans une certaine situation, alors $A_\mu-\partial_\mu \chi$ aussi). Et on en déduit que l'électromagnétisme est une **théorie de jauge** puisqu'en choisissant de redéfinir $\chi(x)$ comme $\alpha(x)/q$, on retrouve bien la définition vue plus haut.

Comment choisir $\chi(x)$&nbsp;? Il est commun d'en passer par la **jauge de Lorenz** (sans "t")&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\partial_\mu A^\mu(x)=0
$
</p>
</div>

<br>

<div id="preuve">

$A_\mu$ se transforme en  $A_\mu^{\prime}=A_\mu-\partial_\mu \chi$ et la jauge de Lorenz impose $\partial^\mu A_\mu^{\prime}=\partial^\mu A_\mu-\partial^\mu \partial_\mu \chi=0$. Pour la respecter, il faut donc poser $\partial^2 \chi=\partial^\mu A_\mu$.

</div>

Grâce à la jauge de Lorenz et en l'absence de courant $J_{\mathrm{em}}^\mu$, on obtient l'équation d'un champ libre sans masse. En effet l'équation du mouvement $\partial^2 A^\nu-\partial^\nu\left(\partial_\mu A^\mu\right)=J_{\mathrm{em}}^\nu$ devient $\partial^2 A^{\prime \nu}-\partial^\nu\left(\partial_\mu A^{\prime \mu}\right)=\partial^2 A^{\prime \nu}=0$ dont les solutions sont des ondes planes de la forme $A^\mu=\epsilon^\mu(p) \mathrm{e}^{-\mathrm{i} p \cdot x}$ avec $E_{\boldsymbol{p}}=|\boldsymbol{p}|$. La jauge de Lorenz fait donc ressembler l'électromagnétisme à une théorie de champ vectoriel. 

On avait <a href="../tqc4/#ancrelorenz">déjà rencontré</a> la condition de Lorenz dans le cas du champ massif de spin 1 mais elle n'avait alors rien d'un choix&nbsp;; on l'obtenait en prenant la divergence de l'équation de Proca... Mais dans tous les cas, la condition réduit le nombre de composantes indépendantes de $A'^\mu$ de quatre à trois.

Cela ne rend toujours pas $A^{\prime \mu}$ unique ici puisqu'on peut continuer à transformer le champ $A_\mu^\prime \rightarrow A_\mu^{\prime \prime}=A_\mu^{\prime}-\partial_\mu \xi$ tant que $\partial^2 \xi = 0$ ($A^{\prime \mu}$ et $A^{\prime \prime \mu}$ respectent tous deux la condition de Lorenz). Pour rendre $A^{\prime \prime \mu}$ unique, on choisit en plus de fixer $\partial_0 \xi=A_0^{\prime}$, ce qui implique $A_0^{\prime \prime}=0$. 

Avec ce choix, la condition de Lorenz implique finalement la **jauge de Coulomb**&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\boldsymbol{\nabla} \cdot \boldsymbol{A}^{\prime \prime}=0
$
</p>
</div>

Le nombre de degrés de liberté du champ est encore réduit d'un cran.

La physique impose finalement au champ $A^\mu$ de n'avoir que deux composantes indépendantes&nbsp;!

<div id="preuve">

<details>
<summary>Le décompte, jusqu'aux deux polarisations physiques&nbsp;:</summary>

Les équations du mouvement sous la jauge de Lorenz donnent $\partial^2A^\mu = 0$. Avec la condition $A^0 = 0$, cela implique des ondes planes de la forme $\boldsymbol{A}=\boldsymbol{\epsilon} \mathrm{e}^{-\mathrm{i} p \cdot x}$. 

La jauge de Coulomb $\boldsymbol{\nabla} \cdot \boldsymbol{A}=0$ impose alors $\boldsymbol{p} \cdot \boldsymbol{A}=\boldsymbol{p} \cdot \boldsymbol{\epsilon}=0$ qui nous dit que la direction de propagation de l'onde est perpendiculaire à la polarisation&nbsp;; l'onde est **transverse**&nbsp;!

En supposant une propagation selon l'axe $z$ avec une impulsion $q^\mu=(|\boldsymbol{q}|, 0,0,|\boldsymbol{q}|)$, on peut par exemple se donner une polarisation linéaire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol{\epsilon}_1(q)=\left(\begin{array}{l}
1 \\
0 \\
0
\end{array}\right), \quad \boldsymbol{\epsilon}_2(q)=\left(\begin{array}{l}
0 \\
1 \\
0
\end{array}\right)
$
</p>

ou encore une polarisation circulaire avec&nbsp;:

<p style="text-align:center;">
$\displaystyle
\epsilon_{\mathrm{R}}^*(q)=-\frac{1}{\sqrt{2}}\left(\begin{array}{l}
1 \\
\mathrm{i} \\
0
\end{array}\right), \quad \epsilon_{\mathrm{L}}^*(q)=\frac{1}{\sqrt{2}}\left(\begin{array}{c}
1 \\
-\mathrm{i} \\
0
\end{array}\right)
$
</p>
</details>

</div>

Pour observer les effets du champ électromagnétique, il faut le coupler à un champ de matière. La recette la plus simple consiste à remplacer les dérivées ordinaires par les dérivées covariantes dans le lagrangien. On nomme ce procédé **couplage minimal**.

Considérons un champ scalaire complexe en présence d'un champ électromagnétique. Si les champs sont indépendants, le lagrangien total s'écrit comme la somme des lagrangiens de chacune des théories&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal{L}=\left(\partial^\mu \psi\right)^{\dagger}\left(\partial_\mu \psi\right)-m^2 \psi^{\dagger} \psi-\frac{1}{4} F_{\mu \nu} F^{\mu \nu}
$
</p>

On obtient un couplage entre les champs en passant de $\partial$ à $D$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\mathcal{L}&= \left(D^\mu \psi\right)^{\dagger}\left(D_\mu \psi\right)-m^2 \psi^{\dagger} \psi-\frac{1}{4} F_{\mu \nu} F^{\mu \nu} \\
&=  \left(\partial^\mu \psi^{\dagger}-\mathrm{i} q A^\mu \psi^{\dagger}\right)\left(\partial_\mu \psi+\mathrm{i} q A_\mu \psi\right)-m^2 \psi^{\dagger} \psi-\frac{1}{4} F_{\mu \nu} F^{\mu \nu} \\
&= \partial^\mu \psi^{\dagger} \partial_\mu \psi-m^2 \psi^{\dagger} \psi-\frac{1}{4} F_{\mu \nu} F^{\mu \nu}  + {\color{#D41876}\left(-\mathrm{i} q A^\mu \psi^{\dagger}\left(\partial_\mu \psi\right)+\mathrm{i} q\left(\partial^\mu \psi^{\dagger}\right) A_\mu \psi+q^2 \psi^{\dagger} \psi A^\mu A_\mu\right) }
\end{aligned}
$
</p>

Le couplage entre le champ $A^\mu$ et les champs $\psi$ et $\psi^\dagger$ est contenu dans le dernier terme et l'importance du couplage est fixée par $q$, la charge électromagnétique.

On appelle **principe de jauge** la notion selon laquelle un champ de jauge introduit pour assurer une symétrie locale dicte la forme du couplage, c'est-à-dire des interactions, dans la théorie.

<br>

### Quantification canonique du champ électromagnétique

Le terme de masse du champ massif de spin 1 [vu précédemment](../tqc4/#quantification-canonique-dun-champ-à-plusieurs-composantes) lui ôtait toute possibilité d'invariance de jauge alors que la nature non massive du champ de jauge lui confère cette invariance et lui retire une composante.

On obtient <i>in fine</i>&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\hat{A}^\mu(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E_{\boldsymbol{p}}\right)^{\frac{1}{2}}} \sum_{\lambda=1}^2\left(\epsilon_\lambda^\mu(p) \hat{a}_{\boldsymbol{p} \lambda} \mathrm{e}^{-\mathrm{i} p \cdot x}+\epsilon_\lambda^{\mu *}(p) \hat{a}_{\boldsymbol{p} \lambda}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$
</p>
</div>

avec $E_p=|\boldsymbol{p}|$.

Et le hamiltonien est donné par&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\hat{H}=\int \mathrm{d}^3 p \sum_{\lambda=1}^2 E_{\boldsymbol{p}} \hat{a}_{\boldsymbol{p} \lambda}^{\dagger} \hat{a}_{\boldsymbol{p} \lambda}
$
</p>
</div>

Les excitations du champ électromagnétique sont des **photons** qu'on peut observer dans deux états de polarisation transverses. 

Ces particules ont un spin $S=1$ et on en trouve deux types&nbsp;: $\hat{a}\_{\boldsymbol{p} 1}^{\dagger}|0\rangle$ et $\hat{a}_{\boldsymbol{p} 2}^{\dagger}|0\rangle.$

Considérons un photon se propageant selon la direction $z$ avec l'impulsion $q^\mu=(|\boldsymbol{q}|, 0,0,|\boldsymbol{q}|)$. Dans une base de polarisation circulaire, on peut écrire $\epsilon_{\lambda=\mathrm{R}}^\*(q)=-\frac{1}{\sqrt{2}}(0,1, \mathrm{i}, 0)$ (correspondant à $S_z = 1$) et $\epsilon_{\lambda=\mathrm{L}}^\*(q)=\frac{1}{\sqrt{2}}(0,1,-\mathrm{i}, 0)$ (correspondant à $S_z = -1$). Il n'y a pas de photon avec $S^z = 0$ puisque cela correspondrait à une polarisation longitudinale interdite $\epsilon_{\lambda=3}^*(p)=(0,0,0,1).$

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
U(1)\ \text{globale}
\;\xrightarrow{\ \alpha \to \alpha(x)\ }\;
\text{symétrie brisée par}\ \partial_\mu\alpha
\;\xrightarrow{\ D_\mu = \partial_\mu + \mathrm{i}qA_\mu\ }\;
\text{symétrie restaurée}
$
</p>

<p style="text-align:center;">
$\displaystyle
A_\mu \to A_\mu - \tfrac{1}{q}\partial_\mu\alpha
\;\xrightarrow{\ \text{terme cinétique invariant}\ }\;
-\tfrac{1}{4}F_{\mu\nu}F^{\mu\nu}
\;\xrightarrow{\ \text{Euler--Lagrange}\ }\;
\text{équations de Maxwell}
$
</p>

<p style="text-align:center;">
$\displaystyle
4\ \text{composantes de}\ A^\mu
\;\xrightarrow{\ \text{jauge de Lorenz}\ }\;
3
\;\xrightarrow{\ \text{jauge de Coulomb}\ }\;
2\ \text{polarisations}
\;\xrightarrow{\ \text{quantification}\ }\;
\text{photon}
$
</p>

### Pièges

<ul>
<li>Une invariance de jauge n'est <b>pas une symétrie</b> au sens ordinaire&nbsp;: elle ne relie pas deux configurations physiquement distinctes, elle signale une <b>redondance de description</b>. C'est pour cela qu'on doit la <i>fixer</i> pour calculer, alors qu'on ne fixe jamais une symétrie véritable.</li>
<li>Le champ de jauge est introduit pour une raison purement formelle, mais il acquiert ensuite une <b>dynamique propre</b>. Ce n'est pas un artifice de calcul&nbsp;: c'est le photon.</li>
<li>Le paramètre $q$ n'est pas un choix libre&nbsp;: il apparaît à la fois dans $D_\mu$ et dans la loi de transformation de $A_\mu$, et c'est cette <b>double occurrence</b> qui fait la compensation. C'est aussi ce qui explique que la charge soit quantifiée de la même façon pour tous les champs couplés au même $A_\mu$.</li>
<li>Fixer la jauge de Lorenz ne fixe pas <b>tout</b>&nbsp;: il reste une liberté résiduelle, celle des $\chi$ satisfaisant $\partial^2\chi = 0$, et c'est elle qu'on épuise avec la jauge de Coulomb. D'où la descente $4 \to 3 \to 2$.</li>
<li>Le photon n'a <b>pas</b> d'état $S_z = 0$, alors qu'une particule de spin&nbsp;1 massive en aurait trois. La polarisation longitudinale est interdite par l'invariance de jauge, et c'est la trace de l'absence de masse.</li>
<li>Ne pas confondre les deux jauges&nbsp;: Lorenz ($\partial_\mu A^\mu = 0$) est covariante, Coulomb ($\boldsymbol\nabla\cdot\boldsymbol A = 0$) ne l'est pas. La seconde est commode mais brise la covariance manifeste.</li>
</ul>

<br>

## Symétries discrètes

On a rencontré jusque-là des symétries portées par des transformations continues (translations, rotations) représentées par des groupes continus (groupes de Lie). Mais on peut aussi rencontrer des symétries correspondant à des transformations discrètes représentées cette fois-ci par des groupes finis.

### Conjugaison de charge

On appelle conjugaison de charge la transformation qui change une particule en son antiparticule. C'est l'opérateur $\text { C }$ qui se charge de cette prouesse. Il ne permute pas seulement la charge d'une particule, mais aussi son nombre leptonique, son hypercharge et tout autre "nombre de charge". On a alors&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathrm{C}|p\rangle=|\bar{p}\rangle
$
</p>
</div>

La charge d'une particule $p$ de charge $q$ est mesurée par un opérateur $\hat{Q}$&nbsp;: $\hat{Q}|p\rangle=q|p\rangle$. Par contre&nbsp;: $\hat{Q}|\bar{p}\rangle=-q|\bar{p}\rangle$. On peut donc écrire $\mathrm{C} \hat{Q}|p\rangle=q \mathrm{C}|p\rangle=q|\bar{p}\rangle$, mais $\hat{Q} \mathrm{C}|p\rangle=\hat{Q}|\bar{p}\rangle=-q|\bar{p}\rangle$, ce qui implique que $\hat{Q} \mathrm{C}=-\mathrm{C} \hat{Q}$, ou de manière équivalente&nbsp;:


<div id="theo">
<p style="text-align:center;">
$\displaystyle
\mathrm{C}^{-1} \hat{Q} \mathrm{C}=-\hat{Q}
$
</p>
</div>

L'échange entre particule et antiparticule impose&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\mathrm{C}^{-1} \hat{a}_{\boldsymbol{p}} \mathrm{C}=\hat{b}_{\boldsymbol{p}} \quad\quad \mathrm{C}^{-1} \hat{b}_{\boldsymbol{p}}^{\dagger} \mathrm{C}=\hat{a}_{\boldsymbol{p}}^{\dagger}
$
</p>
</div>

Et comme un champ scalaire $\hat{\psi}(x)$ peut s'écrire $\hat{\psi}(x)=\int_{\boldsymbol{p}}\left(\hat{a}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{b}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)$, on doit avoir $\mathrm{C}^{-1} \hat{\psi} \mathrm{C}=\hat{\psi}^{\dagger}$ ($\hat{\psi}^{\dagger}=\int_{\boldsymbol{p}}\left(\hat{a}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}+\hat{b}_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}\right)$).


<div id="preuve">

Comme $\mathrm{C}^2=I$, les valeurs propre de $\mathrm{C}$ ne peuvent être que $\pm 1$. La plupart des particules ne sont pas des états propres de $\mathrm{C}$ puisque si elles l'étaient, on aurait $\mathrm{C}|p\rangle=|\bar{p}\rangle= \pm|p\rangle$, ce qui impliquerait que $|\bar{p}\rangle$ est le même état que $|p\rangle$ et donc que la particule est sa propre antiparticule. C'est vrai pour les particules sans charge quantique.

Le photon $\gamma$, lui, est un état propre de $\mathrm{C}$ avec la valeur propre $-1$, puisqu'en changeant totues les particules en leurs antiparticules, le champ électromagnétique est renversé ($A^\mu \rightarrow-A^\mu$). C'est aussi le cas pour le pion neutre $\pi^0$, mais avec la valeur propre $+1$. Cela explique pourquoi la réaction $\pi^0 \rightarrow \gamma+\gamma$ est autorisée alors que $\pi^0 \rightarrow \gamma+\gamma+\gamma$ est impossible.

</div>

<br>

### Parité

Une symétrie miroir inverse la direction de l'axe perpendiculaire au miroir et conserve les autres. Si on fait suivre cette transformation d'une rotation à 180° autour de l'axe perpendiculaire au miroir, on aura inversé toutes les directions spatiales, opérant ainsi une **inversion spatiale** ($\boldsymbol{x}\rightarrow-\boldsymbol{x}$). Cette transformation, appelée **parité**, est prise en charge par l'opérateur $\mathrm{P}$. L'opérateur position va donc anticommuter avec l'opérateur parité&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\hat{\boldsymbol{x}} \mathrm{P}=-\mathrm{P} \hat{\boldsymbol{x}}
$
</p>
</div>

Ou de manière équivalente&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathrm{P}^{-1} \hat{\boldsymbol{x}} \,\mathrm{P}=-\hat{\boldsymbol{x}}
$
</p>
</div>

L'effet sur les coordonnées de l'impulsion est le même ($p \rightarrow-\boldsymbol{p}$) et donc&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathrm{P}^{-1} \hat{\boldsymbol{p}} \, \mathrm{P}=-\hat{\boldsymbol{p}}
$
</p>
</div>

L'opérateur $\mathrm{P}$ est hermitien et son propre inverse ($\mathrm{P}^2=I$), donc $\mathrm{P}$ est aussi un opérateur unitaire.

L'opérateur de parité est sans effet sur les scalaires mais renverse les vecteurs. Mais il existe une classe spéciale de scalaire et de vecteurs (même si pas réellement des scalaires et des vecteurs mais plutôt des ojets composites) pour lesquels ce n'est pas vrai&nbsp;: les **pseudoscalaires** formés par un produit mixte et les **pseudovecteurs** (aussi appelés vecteurs axiaux) formés par un produit vectoriel entre vecteurs ordinaires (aussi appelés vecteurs polaires).

Le champ électrique $\boldsymbol{E}$ agit comme un vecteur ordianaire (polaire) alors que le champ magnitique et le moment cinétique $\boldsymbol{L}$ sont des pesudovecteurs (vecteurs axiaux).

<div id="def">
<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\mathrm{P}(\text { scalaire })&=\text { scalaire }\\
\mathrm{P}(\text { pseudoscalaire })&=-\text { pseudoscalaire }\\
\mathrm{P}(\textbf{ vecteur })&=- \textbf{ vecteur }\\
\mathrm{P}(\textbf{ pseudovecteur })&= \textbf{pseudovecteur }
\end{aligned}
$
</p>
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcparite.png" style="box-shadow:none;background:none;">
</div>

Comme $\mathrm{P}^2 = I$, sous la multiplication, le groupe $\{I, P\}$ est isomorphe à $\mathbb{Z}_2$, le groupe cyclique d'ordre 2. 

<p style="text-align:center;">
$\displaystyle
\begin{array}{c|cc} 
& I & \mathrm{P} \\
\hline I & I & \mathrm{P} \\
\mathrm{P} & \mathrm{P} & I
\end{array}
$
</p>

Comme pour $\mathrm{C}$, cela signifie que les valeurs propres de $\mathrm{P}$ sont $\pm1$. Les scalaires et pseudovecteurs ont une valeur de parité de $+1$ alors que pseudoscalaires et vecteurs ont une parité de $-1$.

Le photon étant une excitation d'un champ vectoriel non massique, il possède une parité intrinsèque de $-1$. Le pion est, lui, décrit par un champ pseudoscalaire et a donc aussi une parité de $-1$. On verra plus tard que la parité d'un fermion est opposée à celle de son antiparticule.

La complication avec l'opérateur de parité est qu'il agit à la fois sur les coordonnées du champ et sur la nature même du champ.

<div id="preuve">

Prenons le cas d'un champ scalaire. La parité va faire en sorte que $\phi(t, \boldsymbol{x}) \rightarrow \phi(t,-\boldsymbol{x})$. Étudions maintenant son action sur les opérateurs de création et d'annihilation&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{P}^{-1} \hat{\phi}(t, \boldsymbol{x}) \mathrm{P}=\hat{\phi}(t,-\boldsymbol{x})=\int_{\boldsymbol{p}} \hat{a}_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}(E t+\boldsymbol{p} \cdot \boldsymbol{x})}+\hat{a}_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i}(E t+\boldsymbol{p} \cdot \boldsymbol{x})}
$
</p>

C'est possible si $\mathrm{P}^{-1} \hat{a}\_{\boldsymbol{p}} \mathrm{P}=\hat{a}\_{-{\boldsymbol{p}}}$ et $\mathrm{P}^{-1} \hat{a}\_{\boldsymbol{p}}^{\dagger} \mathrm{P}=\hat{a}_{-\boldsymbol{p}}^{\dagger}$. L'opérateur de parité renverse simplement les impulsions pour les opérateurs de création et d'annihilation.

</div>

<br>

### Renversement du temps

L'opérateur renversement du temps $\mathrm{T}$ transforme un champ scalaire $\phi(t, \boldsymbol{x})$ en $\phi(-t, \boldsymbol{x})$. Elle laisse donc le vecteur position tranquille&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathrm{T}^{-1} \hat{\boldsymbol{x}} \mathrm{~T}=\hat{\boldsymbol{x}}
$
</p>
</div>

Mais elle renverse l'impulsion&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\mathrm{T}^{-1} \hat{\boldsymbol{p}} \mathrm{~T}=-\hat{\boldsymbol{p}}
$
</p>
</div>

La seule possibilité pour préserver la relation de commutation $\left[\hat{x}, \hat{p}_x\right]=\mathrm{i}$ est que $\mathrm{T}$ soit antiunitaire puisqu'il faut que $\mathrm{T}^{-1} \mathrm{i} \mathrm{~T}=-\mathrm{i}$.

<div id="preuve">

Pour un opérateur antiunitaire, $\mathrm{T}^2=-I$. On peut noter aussi que $\mathrm{T}^{-1} \mathrm{i} \mathrm{~T}=-\mathrm{i}$ équivaut à $\mathrm{i} T=-\mathrm{Ti}$ ce qui signifie que $\mathrm{i}$ anticommute avec $\mathrm{T}$.

</div>

L'opérateur antiunitaire archétypal est $\mathrm{K}$, l'opérateur de conjugaison complexe. Et on peut construire un opérateur antiunitaire général par le produit d'un opérateur unitaire $\mathrm{U}$ et de $\mathrm{K}$. Écrivons ainsi $\mathrm{T}=\mathrm{UK}$, qui équivaut (en multipliant les deux membres à droite par $\mathrm{K}$) à $\mathrm{U}=\mathrm{T} \mathrm{K}$.

<div id="preuve">

Pour des particules sans spin, on peut choisir $\mathrm{U}=I$ et $\mathrm{U}=\mathrm{K}$. Ce n'est pas surprenant si on regarde l'effet de la conjugaison complexe sur l'équation de Schrödinger&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{gathered}
\hat{H} \psi=\mathrm{i} \frac{\partial \psi}{\partial t} \\
\hat{H} \psi^*=-\mathrm{i} \frac{\partial \psi^*}{\partial t}=\mathrm{i} \frac{\partial \psi^*}{\partial(-t)}
\end{gathered}
$
</p>

La combinaison d'un renversement du temps et d'une conjugaison complexe laisse invariante l'équation de Schrödinger. Ça semble bien montrer que dans ce cas, $\mathrm{K}$ et $\mathrm{T}$ sont une seule et même transformation.

</div>

<br>

<div id="preuve">

<details>
<summary>Le renversement du temps sur un spin, et le théorème de Kramers&nbsp;:</summary>

Pour des particules avec spin, les choses se compliquent puisque le moment cinétique est renversé lorsqu'on change le sens d'écoulement du temps. Et donc l'action de $\mathrm{T}$ sur l'opérateur de spin $\hat{\boldsymbol{S}}$ s'écrit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{T}^{-1} \hat{\boldsymbol{S}} \mathrm{~T}=-\hat{\boldsymbol{S}}
$
</p>

En se rappelant que seul la matrice de Pauli $\sigma_y$ a des composantes complexes, l'action de l'opérateur de conjugaison complexe sur les opérateurs de spin est plus tordue&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{K}^{-1} \hat{S}_x \mathrm{~K}=\hat{S}_x, \quad \mathrm{~K}^{-1} \hat{S}_y \mathrm{~K}=-\hat{S}_y, \quad \mathrm{~K}^{-1} \hat{S}_z \mathrm{~K}=\hat{S}_z 
$
</p>

Une forme appropriée pour $\mathrm{U}$ serait donc $\mathrm{U}=\exp \left(-\mathrm{i} \pi \hat{S}_y\right)$ correspondant à une rotation de π autour de la direction $y$  de telle sorte qu'en combinant $\mathrm{U}$ et $\mathrm{K}$, on renverse bien les trois composantes du spin. On a ainsi&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{T}=\exp \left(-\mathrm{i} \pi \hat{S}_y\right) \mathrm{K}
$
</p>

On obtient alors&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{T}^2=\mathrm{U}\mathrm{K}\mathrm{U}\mathrm{K}=\exp \left(- \mathrm{i} \pi \hat{S}_y\right)\exp \left(+\mathrm{i} \pi (-\hat{S}_y)\right)=\exp \left(- 2\mathrm{i} \pi \hat{S}_y\right)=(-1)^{2S}
$
</p>

Pour un électron unique, on a $S=\frac{1}{2}$ et donc $\mathrm{T}^2=-1$. Cela reste le cas si on a un nombre impair d'électrons, mais si le nombre est pair, alors $\mathrm{T}^2=1$.

Plaçons-nous dans le cas où le nombre d'électrons est impair et supposons que le hamiltonien $\mathcal{H}$ du système est invariant par rapport à une inversion temporelle ($\mathcal{H}$ commute avec $\mathrm{T}$). Les états $|\psi\rangle$ et $\mathrm{T}|\psi\rangle$ ont alors la même énergie. Mais correspondent-ils au même état&nbsp;? S'ils l'étaient, on aurait $\mathrm{T}|\psi\rangle=\alpha|\psi\rangle$ où $\alpha$ est un nombre complexe. Mais alors, $\mathrm{T}^2|\psi\rangle=\mathrm{T} \alpha|\psi\rangle=\alpha^* \mathrm{~T}|\psi\rangle=|\alpha|^2|\psi\rangle$ et comme $\mathrm{T}^2=-1$, on aboutit à une contradiction $|\alpha|^2=-1$. Conclusion, $|\psi\rangle$ et $\mathrm{T}|\psi\rangle$ sont linéairement indépendants et sont appelés **doublets de Kramers**. On vient ainsi de déduire que les niveaux d'énergie d'un système temporellement symétrique avec un nombre impair d'électrons sont $n$-fois dégénérés avec un $n$ pair. C'est le **théorème de Kramers**. Pour séparer ces paires, il faut introduire une perturbation qui brise la symétrie temporelle, comme un champ magnétique.


</details>

</div>

<br>

### Combinaisons de transformations discrètes

En renversant à la fois le temps $t$ avec $\mathrm{T}$ et les coordonnées spatiales $\boldsymbol{x}$ avec $\mathrm{P}$, on obtient un renversement complet de l'espace-temps $x$. Sur un champ scalaire, on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\mathrm{PT})^{-1} \hat{\phi}(x)(\mathrm{PT})=\hat{\phi}(-x)
$
</p>

Cette opération laisse les opérateurs de création et d'annihilation inchangés puisque l'impulsion est retournée une fois par l'opération de parité et une nouvelle fois par le renversement du temps.

<p style="text-align:center;">
$\displaystyle
(\mathrm{PT})^{-1} \hat{a}_{\boldsymbol{p}}(\mathrm{PT})=\hat{a}_{\boldsymbol{p}} \quad(\mathrm{PT})^{-1} \hat{a}_{\boldsymbol{p}}^{\dagger}(\mathrm{PT})=\hat{a}_{\boldsymbol{p}}^{\dagger}
$
</p>

Le seul effet sur la décomposition en modes est alors de changer le signe de $\mathrm{i}$ dans l'exponentielle. $\mathrm{P}\mathrm{T}$ agit donc comme un opérateur de conjugaison complexe.


Les symétries liées à $\mathrm{C}$, $\mathrm{P}$ et $\mathrm{T}$ sont chacune conservées dans la plupart des processus à plusieurs particules, mais pas tous. $\mathrm{P}$ est par exemple "violée" en interaction faible.


<div id="theo">

**Théorème $\mathrm{CPT}$**&nbsp;:

Si le lagrangien d'une théorie est invariant de Lorentz, local, hermitien et normalement ordonné, alors la théorie possède la symétrie $\textrm{CPT}$&nbsp;; renverser à la fois l'espace-temps et les particules en antiparticules doit laisser la théorie invariante. 

</div>

La preuve consiste à montrer que $(\mathrm{CPT})^{-1} \mathcal{L}(x)(\mathrm{CPT})=\mathcal{L}(-x)$ et ainsi d'en déduire que $\mathrm{CPT}$ commute avec le hamiltonien et est donc une symétrie. Jusqu'ici, la symétrie $\mathrm{CPT}$ a résisté à tous les tests.

<br>

### Combinaisons de transformations discrètes et continues

$SO(3)$, le **groupe orthogonal spécial**, est le groupe des rotations à 3 dimensions représentées par des matrices $3\times 3$ orthogonales et de déterminant $+1$ (spéciales). Ces rotations qui respectent l'orientation (c'est ce qu'assure le déterminant de $+1$) sont dites **propres**.

La transformation de parité peut être représentée par la matrice $\text{diag}(-1,-1,-1)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\left(\begin{array}{ccc}
-1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1
\end{array}\right)
$
</p>

Là, le déterminant est clairement $-1$. En combinant avec $SO(3)$, c'est-à-dire en s'autorisant les **rotations impropres** (ne conservant pas l'orientation), on obtient le groupe $O(3)$ de toutes les matrices orthogonales $3\times 3$.

<div id="preuve">

L'othogonalité implique $R^TR = I$ et en prenant le déterminant $\operatorname{det} \mathbf{R} \times \operatorname{det} \mathbf{R}^{\mathrm{T}}=1$. Et comme $\operatorname{det} \mathbf{R}=\operatorname{det} \mathbf{R}^{\mathrm{T}}$, on obtient $(\operatorname{det} \mathbf{R})^2=1$. D'où les deux possibilités $\operatorname{det} \mathbf{R}= \pm 1$.

</div>

Le groupe $O(3)$ est composé de deux ensembles disjoints liés l'un à l'autre par une parité. Seul l'ensemble spécial correspond à un groupe indépendant car lui seul possède l'identité.


<div id="preuve">

Pour obtenir $\text{diag}(-1,-1,-1)$, l'opération de parité, on peut faire le produit d'une réflexion par un miroir dans le plan $x-y$, représentée par $\text{diag}(1,1,-1)$ par une rotation de $\pi$ autour de l'axe $z$, représentée par $\text{diag}(-1,-1,1)$. En tant que produit entre une rotation impropre et une rotation propre, l'opération de parité est une rotation impropre.

</div>

$SO(3)$ est un **groupe connexe** dans le sens où on peut se promener continument d'un élément à l'autre. Au contraire, $O(3)$ consiste en l'union de deux ensembles disjoints&nbsp;; celui des éléments de déterminant $+1$ et celui des déterminants $-1$.


On obtient quelque chose de similaire avec le **groupe de Lorentz** (souvent appelé $O(3,1)$, pour distinguer les 3 directions spatiales de la direction temporelle) contenant toutes les rotations, réflexions et boosts de Lorentz. Ce groupe consiste en 4 composants séparés topologiquement car en plus de $\mathrm{P}$, on doit considérer $\mathrm{T}$.

Dans une représentation à 4 dimensions, $\mathrm{P}=\operatorname{diag}(1,-1,-1,-1)$ et $\mathrm{T}=\operatorname{diag}(-1,1,1,1)$. Le sous-groupe du groupe de Lorentz qui ne renverse ni les coordonnées spatiales ni temporelles est appelé sous-groupe **propre** (conserve l'orientation spatiale) **orthochrone** (conserve l'orientation du temps) de Lorentz $SO^+(1,3)$. Ce sous-groupe connexe est une des quatre composantes du groupe de Lorentz. On accède aux autres composantes à partir de $SO^+(1,3)$&nbsp;:
<ul>
<li>par action de $\mathrm{P}$,</li>
<li>par action de $\mathrm{T}$,</li>
<li>par action de $\mathrm{PT}$.</li>
</ul>


Revenons enfin sur $SO(3)$ et sa topologie. Une rotation est caractérisée par un axe et un angle. Par conséquent, tous les points dans une boule de rayon $\pi$ peuvent représenter une rotation (l'axe est donné par le vecteur entre le centre de la sphère et le point choisi et l'angle est donné par la norme de ce vecteur). Dans cette représentation, deux points antipodaux correspondent à le même rotation (une rotation de $\pi$ autour d'un axe est équivalente à une rotation de $-\pi$ autour de l'axe inverse). La topologie de $SO(3)$ est donc celle d'une boule dont les points antipodaux de la surface sont identifiés entre eux (on peut se téléporter d'un point à l'autre). 

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/doublecover.png" style="box-shadow:none;background:none;">
</div>

Cela signifie que l'espace topologique de $SO(3)$ est connexe mais pas **simplement connexe**. En effet, dans un espace simplement connexe, tout lacet (chemin continu fermé) doit pouvoir se réduire continument à un point. Or ici, le lacet allant d'un pôle à l'autre (ce chemin est bien un lacet puisque ses extrémités correspondent à un seul et même point) n'est pas déformable en un point puisque tout mouvement d'une extrémité s'accompagne d'un mouvement opposé de l'autre extrémité pour rester antipodal. Par contre, en faisant un deuxième tour d'un pôle à l'autre, on peut maintenant faire disparaître le lacet comme le montre le dessin ci-dessus. Cela montre que les rotations de $4\pi$ sont continument déformables en un point alors que les rotations de $2\pi$ ne le sont pas. La ["ceinture de Dirac"](https://www.math.utah.edu/%7Epalais/Links/Movies/Belt.mov) ou les ["assiettes de Feynman"](https://www.math.utah.edu/%7Epalais/Links/Movies/Plate.mov) tentent d'illustrer expérimentalement ce phénomène. 

<div style="position:relative; width:640px; max-width:100%; height:360px; margin-left: auto; margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<iframe width="640" height="360" src="https://www.youtube.com/embed/JaIR-cWk_-o?si=zKfe0yRkB0Pw4xvv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  style="max-width:100%"></iframe>
</div>


On peut faire correspondre les rotations 3D aux éléments d'un autre groupe&nbsp;: $SU(2)$, le **groupe spécial unitaire**  représenté par des matrices $2\times 2$ de déterminant 1. Les éléments de $SU(2)$ permettent de faire tourner les spineurs.

Une matrice de rotation peut en effet s'écrire $\mathbf{R}(\hat{\boldsymbol{n}}, \theta)$ avec&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathbf{R}(\hat{\boldsymbol{n}}, \theta)=\exp \left(-\mathrm{i} \frac{\theta}{2} \boldsymbol{\sigma} \cdot \boldsymbol{n}\right)=I \cos \frac{\theta}{2}-\mathrm{i} \sin \frac{\theta}{2} \boldsymbol{\sigma} \cdot \boldsymbol{n}
$
</p>

où $\boldsymbol{\sigma}=\left(\sigma_x, \sigma_y, \sigma_z\right)$ sont les matrices de Pauli et $I$ la matrice identité. On remarque alors que&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathbf{R}(\hat{\boldsymbol{n}}, 0)=I\quad,\quad \mathbf{R}(\hat{\boldsymbol{n}}, 2 \pi)=-I \quad,\quad \mathbf{R}(\hat{\boldsymbol{n}}, 4 \pi)=I
$
</p>

On dit que $SU(2)$ est un **double recouvrement** de $SO(3)$. Prenons l'identité par exemple&nbsp;: dans $SO(3)$, l'absence de rotation est représentée par $\operatorname{diag}(1,1,1)$ et dans $SU(2)$, à la fois par $\operatorname{diag}(1,1)$ et $\operatorname{diag}(-1,-1)$.

Un spineur peut s'écrire comme une entité à deux composantes $\binom{a}{b}$ où $a$ et $b$ sont des nombres complexes tels que $|a|^2+|b|^2=1$. En écrivant $a=x_0+\mathrm{i} x_1$ et $b=x_2+\mathrm{i} x_3$ où les $x_i$ sont des nombres réels, la condition $|a|^2+|b|^2=1$ devient $x_0^2+x_1^2+x_2^2+x_3^2=1$ et donc $SU(2)$ est isomorphe à $S^3$, la 3-sphère, ce qui montre que $SU(2)$ est simplement connexe, contrairement à $SO(3)$. $SO(3)$ est finalement un groupe quotient&nbsp;: $S O(3) \cong S U(2) / \mathbb{Z}_2$.

On peut généraliser ces arguments à la composante connexe du groupe de Lorentz&nbsp;: $S O(1,3) \cong S L(2, \mathbb{C}) / \mathbb{Z}_2$ où $S L(2, \mathbb{C})$ est le groupe des matrices $2\times 2$ complexes de déterminant unité.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\mathrm C\ :\ \text{particule} \leftrightarrow \text{antiparticule}
\qquad
\mathrm P\ :\ \boldsymbol x \to -\boldsymbol x
\qquad
\mathrm T\ :\ t \to -t
$
</p>

<p style="text-align:center;">
$\displaystyle
\mathrm T\ \text{antiunitaire}
\;\xrightarrow{\ \mathrm T^2 = (-1)^{2S}\ }\;
\text{nombre impair d'électrons}
\;\xrightarrow{\ \ }\;
\text{doublets de Kramers}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{Lorentz invariant} + \text{local} + \text{hermitien}
\;\xrightarrow{\ \text{théorème}\ }\;
\mathrm{CPT}\ \text{conservée}
$
</p>

<p style="text-align:center;">
$\displaystyle
SO(3) \ \text{connexe mais pas simplement connexe}
\;\xrightarrow{\ SU(2)/\mathbb Z_2\ }\;
\text{rotation de } 2\pi \ \Rightarrow \ -1 \ \text{sur un spineur}
$
</p>

### Pièges

<ul>
<li>$\mathrm T$ n'est pas un opérateur unitaire mais <b>antiunitaire</b>&nbsp;: il conjugue les nombres complexes. C'est cette propriété, et non une subtilité technique, qui donne $\mathrm T^2 = -1$ pour un spin demi-entier et fait exister les doublets de Kramers.</li>
<li>La plupart des particules ne sont <b>pas</b> des états propres de $\mathrm C$&nbsp;: seules celles qui sont leur propre antiparticule le sont. Parler de la «&nbsp;valeur propre de $\mathrm C$&nbsp;» d'un électron n'a pas de sens.</li>
<li>$\mathrm C$, $\mathrm P$ et $\mathrm T$ sont chacune violée quelque part dans la nature&nbsp;: $\mathrm P$ par l'interaction faible, $\mathrm{CP}$ dans le secteur des saveurs. Seul le <b>produit</b> $\mathrm{CPT}$ résiste, et c'est un théorème, pas une observation.</li>
<li>La parité est une rotation <b>impropre</b> et ne fait donc pas partie de $SO(3)$&nbsp;: on ne peut pas l'atteindre continûment depuis l'identité. C'est précisément ce qui la rend discrète.</li>
<li>Le facteur $\theta/2$ dans $\mathbf R(\hat{\boldsymbol n}, \theta) = \exp(-\mathrm i\frac{\theta}{2}\boldsymbol\sigma\cdot\boldsymbol n)$ n'est pas une coquille&nbsp;: c'est lui qui produit le double recouvrement, donc le signe moins après un tour complet.</li>
<li>Une rotation de $2\pi$ n'est <b>pas</b> l'identité sur un spineur, mais une rotation de $4\pi$ l'est. Ce n'est pas un artefact de calcul&nbsp;: c'est la topologie de $SO(3)$, et la ceinture de Dirac le montre à la main.</li>
</ul>

<br>

{{%notice note%}}
Et maintenant&nbsp;? Nous avons vu ce que les symétries <b>imposent</b> à une théorie&nbsp;: l'invariance locale fabrique l'électromagnétisme, les symétries discrètes contraignent les processus autorisés. Mais nous ne savons toujours pas <b>calculer</b> une amplitude&nbsp;: aucun nombre comparable à une mesure n'est encore sorti de la machine.<br><br>
La partie suivante fournit l'objet qui manque, le <b>propagateur</b>, c'est-à-dire l'amplitude pour qu'un quantum aille d'un point à un autre. On le construit d'abord en mécanique quantique, où il se révèle être une simple fonction de Green, puis pour un champ relativiste, où il faudra résoudre une crise de causalité. La récompense est immédiate&nbsp;: le potentiel de Yukawa, et l'explication des forces par échange de particules virtuelles.
{{%/notice%}}

<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc4">Chapitre précédent</a></td><td><a href="../tqc6">Chapitre suivant</a></td>
    </tr>
</table>
</div>
