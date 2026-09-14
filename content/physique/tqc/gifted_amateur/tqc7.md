+++
title = "TQC-7"
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


# Théorie quantique des champs -- Partie 7

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


Les parties précédentes ont bâti les outils&nbsp;: champs quantifiés, symétries, propagateurs. Aucun d'eux ne produit encore un <b>nombre mesurable</b>. Cette partie comble l'écart, en trois temps qui répondent chacun à une question&nbsp;:

<ul>
<li><b>Comment relier la théorie à une expérience&nbsp;?</b> Par la <b>matrice $S$</b>, qui n'enregistre que ce qu'on sait mesurer&nbsp;: l'état longtemps avant la collision et l'état longtemps après. Deux théorèmes la rendent calculable, Dyson et Wick.</li>
<li><b>Comment organiser le calcul&nbsp;?</b> En le <b>dessinant</b>. Chaque terme de la série devient un <b>diagramme de Feynman</b>, et les règles de Feynman permettent d'écrire l'intégrale directement depuis le dessin, sans repasser par Wick.</li>
<li><b>Comment en tirer un nombre&nbsp;?</b> Par la <b>section efficace</b>, la grandeur que l'expérimentateur mesure vraiment. On la calcule sur une théorie-jouet, $\psi^\dagger\psi\phi$, qui est la doublure de l'électrodynamique quantique.</li>
</ul>

Un fil traverse le tout&nbsp;: la même quantité, l'amplitude, se laisse écrire successivement comme une somme de contractions, comme une somme de dessins, puis comme une prédiction chiffrée.

<br>


## La matrice S

Les chapitres précédents ont construit le propagateur (l'amplitude de propagation d'un quantum). Ce chapitre construit l'objet qui parle aux <i>expériences</i>. Trois idées s'emboîtent&nbsp;:

<ul>
<li><b>L'objet mesurable</b>&nbsp;: la matrice $S$, tableau des amplitudes entre états asymptotiques libres (car dans une collision, on ne mesure jamais «&nbsp;pendant&nbsp;», seulement «&nbsp;longtemps avant&nbsp;» et «&nbsp;longtemps après&nbsp;»).</li>
<li><b>L'outil</b>&nbsp;: la représentation d'interaction, qui répartit l'évolution de sorte que les champs restent les champs libres du chapitre précédent (développements en modes et propagateur $\Delta$ compris), l'interaction ne pilotant que les états.</li>
<li><b>Deux théorèmes de conversion</b>&nbsp;: la série de Dyson (qui écrit $\hat S$ comme exponentielle chronologique de l'interaction) et le théorème de Wick (qui convertit les produits chronologiques en produits de propagateurs). Le chapitre suivant ne fera plus que <i>dessiner</i> le résultat.</li>
</ul>

<br>

### Ce qu'on mesure

Posons $\hat H = \hat H_0 + \hat H'$, où $\hat H_0$ est la partie <b>libre</b> (celle du chapitre précédent, exactement soluble, dont on connaît les états propres&nbsp;: le vide et les états de Fock) et $\hat H'$ l'<b>interaction</b>.

Dans une collision, on ne mesure jamais «&nbsp;pendant&nbsp;», seulement «&nbsp;longtemps avant&nbsp;» et «&nbsp;longtemps après&nbsp;».

Anatomie d'une expérience de diffusion&nbsp;: 
<ul style="margin-bottom:1em;">
<li>on <b>prépare</b> des paquets d'ondes très éloignés les uns des autres (donc sans interaction, des états propres de $\hat H_0$)&nbsp;;</li> 
<li>ils se rapprochent, interagissent pendant un temps fini&nbsp;;</li> 
<li>on <b>détecte</b> des paquets à nouveau très éloignés (encore des états libres). Toute la physique accessible tient dans le tableau des amplitudes «&nbsp;entrée $\to$ sortie&nbsp;».</li>
</ul>

<div id="def">

L'opérateur $\hat S$ envoie les états libres du passé lointain sur ceux du futur lointain&nbsp;:

$$
\hat S = \lim_{\substack{t_+ \to +\infty \\\\ t_- \to -\infty}} \hat U(t_+, t_-)
$$

$$
S_{fi} = \langle f|\\, \hat S\\, |i\rangle,
$$

où $|i\rangle$ et $|f\rangle$ sont des états propres de $\hat H_0$ (états de Fock construits par des $\hat a^\dagger$ sur le vide), et $\hat U$ l'opérateur d'évolution. La probabilité mesurée est $|S_{fi}|^2$.

</div>

La matrice $S$ est le tableau des amplitudes entre états asymptotiques libres.

<div id="theo">

$\hat S$ est <b>unitaire</b>&nbsp;: $\hat S^\dagger \hat S = \mathbb 1$.

</div>

<br>

<div id="preuve">

$\hat S$ est une limite d'opérateurs d'évolution, tous unitaires ($\hat U^\dagger\hat U = \mathbb 1$ car l'équation de Schrödinger conserve la norme).<br>
Lecture physique&nbsp;: $\sum_f |S_{fi}|^2 = 1$&nbsp;: quelque chose sort toujours de la collision, la somme des probabilités vaut $1$.<br>
L'unitarité de $\hat S$ est la conservation des probabilités déguisée, et deviendra un outil de contrainte puissant (théorème optique, au chapitre sur la diffusion).

</div>

{{%notice note%}}
Hypothèse cachée&nbsp;: aux temps asymptotiques, les particules sont si éloignées que l'interaction est négligeable, et les états sont «&nbsp;libres&nbsp;». C'est raisonnable pour la diffusion, mais subtil sur deux points&nbsp;: les états liés (qui n'existent que <i>par</i> l'interaction) et l'auto-interaction d'une particule avec son propre champ (une particule n'est jamais «&nbsp;nue&nbsp;», elle est habillée par son nuage de quanta). Ces subtilités sont remisées jusqu'au chapitre de renormalisation. Pour ce chapitre, on suppose l'interaction «&nbsp;éteinte&nbsp;» aux temps infinis.
{{%/notice%}}



<br>

### La représentation d'interaction

Qui, des états ou des opérateurs, porte l'évolution temporelle&nbsp;? Trois choix cohérents&nbsp;:

<div style="overflow-x:auto;">

| | Schrödinger | Heisenberg | Interaction (Dirac) |
|---|---|---|---|
| États | portent toute l'évolution | figés | évoluent sous $\hat H_I$ seulement |
| Opérateurs | figés | portent toute l'évolution | évoluent sous $\hat H_0$ seul |
| Intérêt | MQ élémentaire | champs libres (ch. précédent) | théorie des perturbations |

</div>

<br>

<div id="def">

La **représentation d'interaction** répartit l'évolution&nbsp;:

$$
|\psi_I(t)\rangle = e^{i\hat H_0 t}\\, |\psi_S(t)\rangle
$$

$$
\hat O_I(t) = e^{i\hat H_0 t}\\, \hat O_S\\, e^{-i\hat H_0 t}
$$

</div>

Les indices disent la représentation&nbsp;: $|\psi_S\rangle$ est l'état en représentation de <b>S</b>chrödinger (l'état «&nbsp;ordinaire&nbsp;», celui qui obéit à $i\partial_t|\psi_S\rangle = \hat H|\psi_S\rangle$) et $|\psi_I\rangle$ sera son avatar en représentation d'<b>I</b>nteraction.

Si $\hat H' = 0$, l'évolution se réduit à $|\psi_S(t)\rangle = e^{-i\hat H_0 t}|\psi_S(0)\rangle$&nbsp;: une «&nbsp;rotation&nbsp;» libre dans l'espace de Hilbert, connue et sans intérêt. Multiplier par $e^{+i\hat H_0 t}$ défait exactement cette rotation (c'est passer dans le <b>référentiel tournant</b> qui accompagne l'évolution libre). Dans ce référentiel, un état libre est immobile, et tout mouvement résiduel est imputable à l'interaction seule. La définition est <i>conçue</i> pour cela.

La loi de transformation des opérateurs n'est pas un choix indépendant&nbsp;: elle est forcée par l'exigence que les grandeurs physiques ne dépendent pas de la représentation&nbsp;: en effet, pour avoir $\langle\psi_S|\hat O_S|\psi_S\rangle = \langle\psi_I|\hat O_I|\psi_I\rangle$ pour tout état, il faut $\hat O_I = e^{i\hat H_0 t}\hat O_S\\, e^{-i\hat H_0 t}$ (suffit d'insérer $|\psi_I\rangle = e^{i\hat H_0 t}|\psi_S\rangle$). Noter qu'à $t = 0$, les trois représentations coïncident.

<div id="theo">

Les états n'évoluent que sous l'effet de l'<b>interaction</b>&nbsp;:

$$
i\frac{\mathrm{d}}{\mathrm{d}t}|\psi_I(t)\rangle = \hat H_I(t)\\, |\psi_I(t)\rangle
$$

$$
\hat H_I(t) \equiv e^{i\hat H_0 t}\\, \hat H'\\, e^{-i\hat H_0 t}
$$

</div>

<br>

<div id="preuve">

On dérive la définition ($\hat H_0$ commute avec sa propre exponentielle)&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
i\partial_t |\psi_I\rangle
= -\hat H_0\\, e^{i\hat H_0 t}|\psi_S\rangle + e^{i\hat H_0 t}\underbrace{(\hat H_0 + \hat H')|\psi_S\rangle}_{i\partial_t|\psi_S\rangle}
= e^{i\hat H_0 t}\\, \hat H'\\, e^{-i\hat H_0 t}\\, |\psi_I\rangle
= \hat H_I(t)\\,|\psi_I\rangle
$$

</div>

Le terme libre $\hat H_0$ s'est exactement compensé&nbsp;: si $\hat H' = 0$, les états ne bougent plus du tout.

</div>

**Le point capital**&nbsp;: les <i>opérateurs</i>, eux, évoluent sous $\hat H_0$ seul. Donc les champs, en représentation d'interaction, obéissent aux équations <b>libres</b> (en TQC, les champs *sont* les opérateurs). Tout l'acquis du chapitre précédent (développements en modes, commutateurs, propagateur $\Delta$) reste utilisable <i>tel quel</i>, même en présence d'interactions. C'est précisément pour cela que cette représentation existe.

<br>

### La série de Dyson

Notons $\hat U_I(t, t')$ l'opérateur d'évolution des états en représentation d'interaction&nbsp;: $i\partial_t \hat U_I = \hat H_I(t)\hat U_I$, avec $\hat U_I(t',t') = \mathbb 1$. En intégrant, l'équation différentielle devient une équation intégrale&nbsp;:

$$
\hat U_I(t, t') = \mathbb 1 + (-i)\int_{t'}^{t} \mathrm{d}t_1\\, \hat H_I(t_1)\\, \hat U_I(t_1, t'),
$$

qu'on résout par itération (on réinjecte l'équation dans elle-même)&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\hat U_I(t,t') = \mathbb 1 + (-i)\int_{t'}^{t}\mathrm{d}t_1\\, \hat H_I(t_1) + (-i)^2 \int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2\\, \hat H_I(t_1)\hat H_I(t_2) + \cdots
$$

</div>

Noter la structure du terme d'ordre $2$&nbsp;: les temps sont <b>ordonnés</b>, $t_1 \geq t_2$, et l'opérateur le plus ancien est à droite (l'itération produit d'elle-même des produits chronologiques). Comme $[\hat H_I(t_1), \hat H_I(t_2)] \neq 0$ en général, cet ordre n'est pas négociable.

<div id="theo">
<div id="grosseformule">

$$
\hat U_I(t,t') = T\exp\left( -i\int_{t'}^{t} \mathrm{d}t_1\\, \hat H_I(t_1) \right)
\Longrightarrow
\hat S = T\exp\left( -i\int \mathrm{d}^4x\\, \hat{\mathcal H}_I(x) \right)
$$

</div>
</div>

<br>

<div id="preuve">

Il faut convertir les intégrales <i>ordonnées</i> en intégrales <i>libres</i> sous $T$, au prix d'un facteur combinatoire. À l'ordre $2$&nbsp;: le domaine ordonné est le triangle $t' \leq t_2 \leq t_1 \leq t$, moitié du carré $[t',t]^2$.


<div style="position:relative;margin-left:auto;margin-right:auto;width:320px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/carredyson.png" style="box-shadow:none;background:none;">
</div>

Sur le carré entier, considérons $\frac{1}{2}\iint T[\hat H_I(t_1)\hat H_I(t_2)]$.
<ul>
<li>Sur le triangle $t_1 \geq t_2$, le $T$ donne $\hat H_I(t_1)\hat H_I(t_2)$.</li>
<li>Sur le triangle $t_2 \geq t_1$, il donne $\hat H_I(t_2)\hat H_I(t_1)$, qui redevient le premier intégrande en échangeant les <i>noms</i> des variables muettes $t_1 \leftrightarrow t_2$.</li>
</ul>

Les deux triangles contribuent donc autant, et

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
\int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2\\, \hat H_I(t_1)\hat H_I(t_2)
= \frac{1}{2!}\int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t}\mathrm{d}t_2\\; T\big[\hat H_I(t_1)\hat H_I(t_2)\big]
$$

</div>

À l'ordre $n$, même argument&nbsp;: le domaine libre $[t',t]^n$ se découpe en $n!$ secteurs (un par ordre chronologique possible des $t_i$), et sous $T$ ils contribuent tous autant (d'où le $1/n!$ qui reconstitue l'exponentielle)&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
\hat U_I = \sum_{n} \frac{(-i)^n}{n!} \int \cdots \int\\; T\big[\hat H_I(t_1)\cdots \hat H_I(t_n)\big]
= T\exp\left(-i\int \hat H_I\right)
$$

</div>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>
Quelques détails&nbsp;:
</summary>

Le terme d'ordre $n$ de l'itération vit sur le <i>simplexe</i> $t \geq t_1 \geq \cdots \geq t_n \geq t'$, les opérateurs déjà rangés du plus récent au plus ancien par les bornes emboîtées. Aucun $T$ n'est encore intervenu.

Le cube $[t',t]^n$ se découpe (à des ensembles de mesure nulle près) en $n!$ secteurs $D_\sigma = \\{t_{\sigma(1)} > \cdots > t_{\sigma(n)}\\}$, un par permutation.<br>
Point crucial&nbsp;: la fonction $F(t_1,\dots,t_n) = T[\hat H_I(t_1)\cdots\hat H_I(t_n)]$ est <b>totalement symétrique</b> ($T$ trie selon les <i>valeurs</i> des temps, pas selon les étiquettes). C'est ce qui autorise, sur chaque secteur, le changement de variables $s_i = t_{\sigma(i)}$ (jacobien de $1$) qui l'envoie sur le simplexe standard&nbsp;: les $n!$ secteurs livrent la même intégrale. <i>Sans</i> le $T$, ce renommage serait illicite, les $\hat H_I(t_i)$ ne commutant pas.

Le signe «&nbsp;$=$&nbsp;» final est une définition.<br>
L'exponentielle ordinaire de $\hat A = -i\int_{t'}^t \hat H_I$ donne $\sum_n \frac{(-i)^n}{n!}\int_{\text{cube}} \hat H_I(t_1)\cdots\hat H_I(t_n)$ (le produit <i>non ordonné</i>).<br>
On <b>définit</b> $T\exp(-i\int\hat H_I)$ comme la même série avec un $T$ dans chaque terme&nbsp;: «&nbsp;développer comme si les $\hat H_I(t)$ commutaient, puis ordonner&nbsp;».<br>
Cohérence&nbsp;: si les $\hat H_I(t)$ commutaient pour tout temps, le $T$ ne ferait rien et on retomberait sur $e^{-i\int\hat H_I}$, le résultat familier.
</details>

De $\hat U_I$ à $\hat S$&nbsp;:<br>
Par définition, $\hat S = \hat U_I(+\infty, -\infty)$. On prend $t' \to -\infty$ et $t \to +\infty$ dans la formule. En écrivant alors le hamiltonien d'interaction comme l'intégrale de sa densité, $\hat H_I(t_1) = \int \mathrm{d}^3x\\, \hat{\mathcal H}_I(\mathbf x, t_1)$, chaque intégrale temporelle fusionne avec son intégrale spatiale&nbsp;:

$$
\int_{-\infty}^{+\infty} \mathrm{d}t_1 \int \mathrm{d}^3 x \\;=\\; \int \mathrm{d}^4 x
$$

et le $T$ continue d'ordonner ce qu'il a toujours ordonné, la coordonnée temporelle des points d'espace-temps où les $\hat{\mathcal H}_I$ sont évalués.<br>
D'où $\hat S = T\exp\big(-i\int\mathrm{d}^4x\\,\hat{\mathcal H}_I(x)\big)$.

</div>

<u>Rq</u> (covariance)&nbsp;: dans la forme $\hat S = T\exp(-i\int\mathrm{d}^4x\\,\hat{\mathcal H}_I)$, chaque ingrédient est Lorentz-invariant&nbsp;: $\mathrm{d}^4x$, la densité scalaire $\hat{\mathcal H}_I$, et le $T$ (grâce à la micro-causalité du chapitre précédent qui rendait le produit chronologique non ambigu hors du cône).  La théorie des perturbations est ainsi bien relativiste ordre par ordre.

{{%notice note%}}
La série de Dyson est <b>asymptotique</b>, pas convergente. Dyson a même développé un argument expliquant que si elle convergeait, le vide pourrait devenir instable. Moralité, on ne peut qu'utiliser la série tronquée à un ordre fini. Pour l'électrodynamique, cela suffit à obtenir 12 chiffres significatifs...
{{%/notice%}}

<br>

### Le théorème de Wick

Développons $\hat S$ et prenons un élément de matrice&nbsp;: il apparaît des objets du type $\langle f|\\, T[\hat{\mathcal H}_I(x_1)\cdots\hat{\mathcal H}_I(x_n)]\\,|i\rangle$. Comme $\hat{\mathcal H}_I$ est un produit de champs <i>libres</i> (le hamiltonien est une fonction des champs et en représentation d'interaction, les champs obéissent aux équations libres) et que $|i\rangle, |f\rangle$ sont construits par des $\hat a^\dagger$ sur le vide, <b>tout se ramène à des valeurs moyennes dans le vide de produits chronologiques de champs libres</b>. Il faut un mécanisme pour les évaluer&nbsp;: c'est le théorème de Wick.

<div id="def">

Rappel&nbsp;: l'<b>ordre normal</b> $N[\hat A]$ range toutes les créations à gauche de toutes les annihilations (ex.&nbsp;: $N[\hat a_{\mathbf p}\hat a^\dagger_{\mathbf q}] = \hat a^\dagger_{\mathbf q}\hat a_{\mathbf p}$). Propriété clé&nbsp;:

$$
\langle 0|\\, N[\hat A]\\, |0\rangle = 0
$$

pour tout produit normal non trivial (l'annihilation de droite tue le ket, ou la création de gauche tue le bra). 

</div>

C'est l'ordre normal qui évacuait l'énergie de point zéro (redéfinir le zéro, c'est exactement soustraire la valeur dans le vide).

<div id="def">

La <b>contraction</b> de deux champs est l'écart entre ordre chronologique et ordre normal&nbsp;:


<div style="text-align:center;margin:-1em 0;">
<img src="/wick-def-contraction.svg" style="box-shadow:none;background:none;height:2.5em;">
</div>

</div>

<br>

<div id="theo">

La contraction de deux champs est un simple <b>nombre</b> (un multiple de l'identité), pas un opérateur (ce que Dirac appellait un «&nbsp;<i>c</i>-nombre&nbsp;»). Et ce nombre est le propagateur de Feynman&nbsp;:

<div style="text-align:center;margin:-1em 0;">
<img src="/wick-theo-contraction.svg" style="box-shadow:none;background:none;height:2.5em;">
</div>

</div>

<br>

<div id="preuve">

Séparons le champ en ses deux moitiés, $\hat\phi = \hat\phi_{\mathrm a} + \hat\phi_{\mathrm c}$&nbsp;: 

<ul>
<li>$\hat\phi_{\mathrm a}$ la partie <b>a</b>nnihilation (les termes en $\hat a_{\mathbf p}\, e^{-ip\cdot x}$)</li>
<li>et $\hat\phi_{\mathrm c}$ la partie <b>c</b>réation (les termes en $\hat a^\dagger_{\mathbf p}\, e^{+ip\cdot x}$).</li>
</ul>

Prenons $x^0 > y^0$, de sorte que $T\hat\phi(x)\hat\phi(y) = \hat\phi(x)\hat\phi(y)$, et développons les quatre produits&nbsp;: 

$\hat\phi_{\mathrm a}\hat\phi_{\mathrm a}$, $\hat\phi_{\mathrm c}\hat\phi_{\mathrm a}$, $\hat\phi_{\mathrm c}\hat\phi_{\mathrm c}$ sont déjà en ordre normal. 

Seul $\hat\phi_{\mathrm a}(x)\hat\phi_{\mathrm c}(y)$ (annihilation à gauche d'une création) ne l'est pas. On le remet en ordre par le commutateur&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
\hat\phi_{\mathrm a}(x)\\,\hat\phi_{\mathrm c}(y) = \hat\phi_{\mathrm c}(y)\\,\hat\phi_{\mathrm a}(x) + [\hat\phi_{\mathrm a}(x), \hat\phi_{\mathrm c}(y)],
$$

</div>

et le commutateur est un simple nombre, déjà calculé au chapitre précédent (seuls les crochets $[\hat a, \hat a^\dagger] = \delta^{(3)}$ survivent)&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
[\hat\phi_{\mathrm a}(x), \hat\phi_{\mathrm c}(y)] = \int\widetilde{\mathrm{d}p}\\; e^{-ip\cdot(x-y)} = D(x-y).
$$

</div>

Donc, pour $x^0 > y^0$&nbsp;: $T\hat\phi\hat\phi = N[\hat\phi\hat\phi] + D(x-y)$. Le cas $y^0 > x^0$ donne de même $D(y-x)$. En recollant les deux avec leurs $\theta$&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
T\\,\hat\phi(x)\hat\phi(y) = N\big[\hat\phi(x)\hat\phi(y)\big] + \underbrace{\theta(x^0-y^0)D(x-y) + \theta(y^0-x^0)D(y-x)}_{=\\;\Delta(x,y)}
$$

</div>

Vérification de cohérence&nbsp;: en prenant la valeur moyenne dans le vide, l'ordre normal disparaît et il reste $\langle 0|T\hat\phi\hat\phi|0\rangle = \Delta$ (définition du chapitre précédent).

</div>

<br>

<div id="theo">

<b>Théorème de Wick.</b> 

Pour des champs libres&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
T\big[\hat\phi_1 \cdots \hat\phi_n\big] = N\big[\hat\phi_1\cdots\hat\phi_n\big] + \sum_{\text{1 contraction}} N[\cdots] + \sum_{\text{2 contractions}} N[\cdots] + \cdots
$$

</div>

Somme sur <i>toutes</i> les façons de contracter des paires, les champs non contractés restant en ordre normal ($\hat\phi_k \equiv \hat\phi(x_k)$, chaque contraction valant $\Delta(x_j, x_k)$).

</div>

<br>

<div id="preuve">

<details>
<summary>
Esquisse de la démonstration (récurrence)
</summary>

À l'intérieur d'un $T$, l'ordre d'écriture est libre&nbsp;: renommons pour que $x_1^0$ soit le plus récent, de sorte que $T[\hat\phi_1\cdots\hat\phi_n] = \hat\phi_1\\, T[\hat\phi_2\cdots\hat\phi_n]$. 

Supposons Wick vrai pour $n-1$ champs et multiplions son développement à gauche par $\hat\phi_1 = \hat\phi_{\mathrm a}(x_1) + \hat\phi_{\mathrm c}(x_1)$&nbsp;:

<ul>
<li>$\hat\phi_{\mathrm c}(x_1)$ (création) se place à gauche des produits normaux sans rien casser&nbsp;: il s'y intègre.</li>
<li>$\hat\phi_{\mathrm a}(x_1)$ (annihilation) doit <i>traverser</i> toutes les parties création $\hat\phi_{\mathrm c}(x_k)$ des produits normaux pour rejoindre sa place à droite&nbsp;; chaque traversée coûte un commutateur $[\hat\phi_{\mathrm a}(x_1), \hat\phi_{\mathrm c}(x_k)] = D(x_1 - x_k)$. Et comme $x_1^0$ est le plus récent, $D(x_1 - x_k) = \Delta(x_1, x_k)$&nbsp;: chaque terme restant engendre exactement une contraction de $\hat\phi_1$ avec $\hat\phi_k$.</li>
</ul>

En collectant&nbsp;: les termes sans commutateur reconstituent les contractions de Wick à $n-1$ champs précédées de $\hat\phi_1$ non contracté&nbsp;; les termes avec commutateur fournissent toutes les contractions impliquant $\hat\phi_1$. C'est l'énoncé à $n$ champs.

</details>

</div>

<br>

<div id="preuve">

Exemple&nbsp;: développement complet pour quatre champs bosoniques. 

On pose $\hat\phi_k \equiv \hat\phi(x_k)$&nbsp;:

<div style="text-align:center;margin:-1em 0;">
<img src="/wick-quatre-champs.svg" style="box-shadow:none;background:none;height:9em;">
</div>

soit $1 + \binom{4}{2} + 3 = 10$ termes&nbsp;: zéro contraction (un terme), une contraction ($\binom{4}{2} = 6$ façons de choisir la paire contractée), deux contractions (les $3$ appariements complets). 

Deux remarques&nbsp;:

<ul>
<li>chaque crochet est un simple nombre (théorème ci-dessus)&nbsp;: on pourra le sortir devant le produit normal restant et l'évaluer (ce qu'on fera à la suite du corollaire)&nbsp;;</li>
<li>contracter deux champs <i>non adjacents</i> (crochet qui enjambe, par exemple $\hat\phi_1$–$\hat\phi_3$) ne pose aucun problème pour des bosons car tout se réordonne librement. Pour des fermions, chaque enjambement coûterait un signe $(-1)$.</li>
</ul>

</div>

<br>

<div id="theo">

<b>Corollaire (celui qu'on utilise en pratique)</b> 

Dans le vide, seuls survivent les termes <i>complètement</i> contractés&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\langle 0|\\, T\big[\hat\phi_1\cdots\hat\phi_n\big]\\, |0\rangle
= \sum_{\text{appariements\\\complets}}\\; \prod_{\text{paires} \\\\ (j,k)} \Delta(x_j, x_k)
$$

</div>
<ul>
<li>nul si $n$ est impair&nbsp;;</li>
<li>pour $n$ pair, la somme compte $(n-1)!! = (n-1)(n-3)\cdots 3\cdot 1$ termes.</li>
</ul>

</div>

<br>

<div id="preuve">

Tout terme de Wick contenant un produit normal non trivial meurt dans le vide ($\langle 0|\\,N[\cdots]\\,|0\rangle = 0$).<br>
Ne restent que les termes où <i>tous</i> les champs sont appariés (impossible si $n$ est impair).<br> Comptage&nbsp;: $\hat\phi_1$ choisit son partenaire parmi $n-1$ champs, puis le premier champ restant parmi $n-3$, etc.

</div>

<br>

<div id="preuve">

Retour à l'exemple à quatre champs&nbsp;:

Dans le développement ci-dessus, les sept premiers termes contiennent un $N[\cdots]$ et meurent dans le vide&nbsp;; survivent les trois termes complètement contractés, $(4-1)!! = 3$ appariements&nbsp;:

<div style="text-align:center;margin:-1em 0;">
<img src="/wick-quatre-champs-vide.svg" style="box-shadow:none;background:none;height:3em;">
</div>

Et chaque crochet s'évalue par le théorème de la contraction (crochet sur $\hat\phi_j$ et $\hat\phi_k$ $= \Delta(x_j, x_k)$), d'où le résultat en propagateurs de Feynman&nbsp;:

<div id="grosseformule" style="margin-bottom:0em;margin-top:-1em;">

$$
\langle 0|T\big[\hat\phi_1\hat\phi_2\hat\phi_3\hat\phi_4\big]|0\rangle
= \Delta(x_1,x_2)\Delta(x_3,x_4) + \Delta(x_1,x_3)\Delta(x_2,x_4) + \Delta(x_1,x_4)\Delta(x_2,x_3)
$$

</div>

</div>

Lecture physique&nbsp;: **la naissance des diagrammes.**<br>
Chaque appariement complet est une façon de <i>câbler</i> le processus&nbsp;: chaque paire contractée est une propagation d'un point à un autre, et le corollaire dit qu'une amplitude est la <b>somme sur tous les câblages possibles</b> de produits de propagateurs.<br>
Dessinez chaque câblage (un point par $x_k$, un trait par $\Delta$) et vous avez un diagramme de Feynman&nbsp;: le chapitre suivant n'est que la codification de ce geste (avec les vertex qu'apportent les $\hat{\mathcal H}_I(x)$, et les facteurs de symétrie qui comptent les câblages équivalents).

<br>

### Bilan

$\displaystyle
|S_{fi}|^2
\\;\longleftarrow\\;
S_{fi} = \Big\langle f \Big|\\, T e^{-i\int \mathrm{d}^4x\\, \hat{\mathcal H}\_I}\\, \Big| i \Big\rangle
\\;\longleftarrow\\;
\text{développer en puissances de } \hat{\mathcal H}\_I\\;\longleftarrow\\;
\langle 0|\\, T\big[\text{champs libres}\big]\\, |0\rangle
\\;\overset{\text{Wick}}{\longleftarrow}\\;
\sum_{\text{câblages}} \prod \Delta
\\;\longleftarrow\\;
\text{diagrammes (chapitre suivant)}
$


Chaque maillon a son théorème&nbsp;: Dyson pour le deuxième, Wick pour l'avant-dernier. Et chaque ingrédient ($\Delta$, la micro-causalité qui rend $T$ covariant, les champs libres) vient des chapitres précédents.

<br>

### Pièges

<ul style="margin-top:0;">
<li>Le $T$ n'est pas décoratif&nbsp;: $[\hat H_I(t_1), \hat H_I(t_2)] \neq 0$, l'ordre des facteurs compte, et c'est l'itération de l'équation intégrale qui l'impose.</li>
<li>En représentation d'interaction, les champs sont <b>libres</b>&nbsp;: ne pas les confondre avec les champs de Heisenberg de la théorie complète (qui, eux, portent l'interaction).</li>
<li>L'ordre normal n'est pas gratuit&nbsp;: c'est une redéfinition du zéro d'énergie (la même qui évacuait l'énergie du vide).</li>
<li>La série est asymptotique&nbsp;: tronquer est la règle, pas un pis-aller provisoire.</li>
<li>L'hypothèse asymptotique (interaction «&nbsp;éteinte&nbsp;» à $t = \pm\infty$) est le tapis sous lequel dorment les états liés et l'habillage des particules (rendez-vous à la renormalisation).</li>
</ul>

<br>



## Les diagrammes de Feynman

Le chapitre précédent a détaillé la stratégie pour obtenir les amplitudes de transition entre états asymptotiques initiaux et finaux&nbsp;: on développe $\hat S = T e^{-i\int \hat{\mathcal H}_I}$ en puissances de l'interaction, puis le théorème de Wick réduit chaque terme à des produits de propagateurs.<br>
Ce chapitre exécute la chaîne sur un exemple ($\phi^4$), constate que chaque terme se <b>dessine</b>, puis renverse la logique&nbsp;: une fois les <b>règles de Feynman</b> extraites, on ne développe plus jamais rien, on dessine les diagrammes et on écrit directement l'intégrale que chacun représente.


### Lire un dessin avant de savoir le calculer

Convention&nbsp;: le temps monte le long de la page. Une <b>particule</b> est une ligne dont la flèche suit le temps, une <b>antiparticule</b> une ligne dont la flèche le remonte (c'est la traduction graphique de l'interprétation de Feynman des antiparticules). La flèche suit le <i>flot de charge</i>, pas le mouvement. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagpart.png" style="box-shadow:none;background:none;">
</div>

On peut dessiner des paires créées ou annihilées, et raconter des histoires&nbsp;: une ligne qui semble «&nbsp;boucler en arrière dans le temps&nbsp;» se lit, en survolant le dessin dans l'ordre chronologique, comme <i>création d'une paire à $t_1$, puis annihilation de l'antiparticule créée avec une autre particule à $t_2$</i>. Les particules étant identiques, personne ne peut distinguer les deux lectures.

<div style="position:relative;margin-left:auto;margin-right:auto;width:480px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diaghist.png" style="box-shadow:none;background:none;">
</div>

### Le bestiaire des interactions

Les hamiltoniens d'interaction sont des <b>produits de champs libres localisés en un même point</b> $z$. L'interaction sera lue comme une collision des particules au point d'espace-temps $z$, et le $\int\mathrm{d}^4z$ de la série de Dyson dit que la collision peut avoir lieu <i>partout</i> (on somme sur toutes les positions du vertex&nbsp;: Huygens version interaction). 

Quatre modèles&nbsp;:

<ul>
<li><b>Source externe</b>&nbsp;: $\hat{\mathcal H}_I(z) = J(z)\hat\phi(z)$<br>
Un blob $J$ d'où sort une patte de champ&nbsp;:</li>
</ul>
<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagsource.png" style="box-shadow:none;background:none;">
</div>
<ul>
<li><b>Auto-interaction $\phi^4$</b>&nbsp;: $\hat{\mathcal H}_I(z) = \dfrac{\lambda}{4!}\hat\phi(z)^4$<br>
Quatre pattes de champ se rencontrent en $z$ (le $4!$ est là pour simplifier les facteurs de symétrie, voir plus bas)&nbsp;:</li>
</ul>
<div style="position:relative;margin-left:auto;margin-right:auto;width:220px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagauto.png" style="box-shadow:none;background:none;">
</div>
<ul>
<li>

<b>Type Yukawa</b>&nbsp;: $\hat{\mathcal H}\_I(z) = g\\,\hat\psi^\dagger(z)\hat\psi(z)\hat\phi(z)$, $\hat\psi$ complexe<br>
Un $\psi$ (flèche entrante), un $\psi^\dagger$ (flèche sortante) et un $\phi$ se rencontrent en $z$. Même structure que QED ($\psi \to$ électron, $\phi \to$ photon)[^1].

</li>
</ul>
<div style="position:relative;margin-left:auto;margin-right:auto;width:220px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagyuk.png" style="box-shadow:none;background:none;">
</div>
<ul>
<li><b>Coulomb non relativiste</b>&nbsp;: $\hat{\mathcal H}_I(x-y) = \tfrac12 \hat\psi^\dagger(\mathbf x)\hat\psi^\dagger(\mathbf y) V(\mathbf x - \mathbf y)\,\delta(x^0 - y^0)\,\hat\psi(\mathbf y)\hat\psi(\mathbf x)$<br>
Délocalisée mais instantanée (le $\delta$ sur les temps)&nbsp;:</li>
</ul>
<div style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcoulomb.png" style="box-shadow:none;background:none;">
</div>

[^1]: En QED, l'électron est l'excitation du champ $\psi$ et le photon celle du champ de jauge&nbsp;; le vertex à trois pattes $\psi^\dagger\psi A$ est le moteur de toute l'électrodynamique.

<br>

### $\phi^4$

Théorie de travail&nbsp;:

$$
\mathcal L = \frac{1}{2}\big[\partial_\mu\phi(x)\big]^2 - \frac{m^2}{2}\phi(x)^2 - \frac{\lambda}{4!}\phi(x)^4,
$$

La partie libre donne $\hat H_0$ par quantification canonique, et la partie interagissante $\hat{\mathcal H}_I = \dfrac{\lambda}{4!}\hat\phi(x)^4$. 

On travaille en représentation d'interaction (chapitre précédent)&nbsp;: <b>les champs $\hat\phi$ évoluent librement</b> (tout l'attirail des modes et le propagateur $\Delta$ restent valables).

<br>

#### Choisir l'élément de matrice et l'écrire en valeur moyenne dans le vide

Exemple&nbsp;: une particule entre avec l'impulsion $\mathbf p$, une particule sort avec $\mathbf q$. Avec la normalisation relativiste $|p\rangle = (2\pi)^{3/2}(2E_{\mathbf p})^{1/2}\\, \hat a^\dagger_{\mathbf p}|0\rangle$&nbsp;:

<div id="def">

<div id="grosseformule">

$$
\mathcal A = {}^{\text{out}}\langle q|p\rangle^{\text{in}} = \langle q|\hat S|p\rangle
= (2\pi)^3 (2E_{\mathbf q})^{\frac12}(2E_{\mathbf p})^{\frac12}\\; \langle 0|\\, \hat a_{\mathbf q}\\, \hat S\\, \hat a^\dagger_{\mathbf p}\\, |0\rangle
$$

</div>

</div>

Tout est ramené au vide&nbsp;: c'est la condition d'application du corollaire de Wick.<br>
Le facteur de normalisation s'expliquera dans la suite.


<br>

#### Développer $\hat S$ par Dyson


$
\hat S = T\exp\Big(-i\int\mathrm{d}^4z\\, \hat{\mathcal H}_I(z)\Big)
= T\bigg[ 1 - \frac{i\lambda}{4!}\int\mathrm{d}^4z\\, \hat\phi(z)^4 + \frac{(-i)^2}{2!}\Big(\frac{\lambda}{4!}\Big)^2 \int\mathrm{d}^4y\\,\mathrm{d}^4w\\, \hat\phi(y)^4\hat\phi(w)^4 + \cdots \bigg]
$

<br>

#### Injecter dans l'élément de matrice

$\mathcal A = \mathcal A^{(0)} + \mathcal A^{(1)} + \mathcal A^{(2)} + \cdots$, où $\mathcal A^{(n)} \propto \lambda^n$&nbsp;: la série est <i>ordonnée par le nombre de collisions</i>.


<br>

#### Moudre avec Wick

À l'ordre $1$, il faut $\langle 0|\hat a_{\mathbf q}\\, \hat\phi(z)\hat\phi(z)\hat\phi(z)\hat\phi(z)\\, \hat a^\dagger_{\mathbf p}|0\rangle$&nbsp;: une chaîne de six opérateurs, que Wick réduit à des appariements complets[^2]. Deux familles&nbsp;:

[^2]: Les contractions impliquant les $\hat a$ n'ont pas besoin de $T$&nbsp;: $\hat a^\dagger_{\mathbf p}$ crée à $t = -\infty$ et $\hat a_{\mathbf q}$ détruit à $t = +\infty$, l'ordre chronologique est fixé d'office.

<ul>
<li><b>Famille A</b> (les $\hat a$ entre eux, les $\hat\phi$ entre eux)&nbsp;: $\langle 0|\hat a_{\mathbf q}\hat a^\dagger_{\mathbf p}|0\rangle\,\langle 0|T\hat\phi\hat\phi|0\rangle\,\langle 0|T\hat\phi\hat\phi|0\rangle$.<br>
Comptage&nbsp;: apparier $4$ champs deux à deux $= 3$ façons.<br>
Exemple de représentant de la famille&nbsp;:
</li>
</ul>
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-familleA.svg" style="box-shadow:none;background:none;height:3.4em;">
</div>

<ul>
<li><b>Famille B</b> ($\hat a$ contractés avec des $\hat\phi$)&nbsp;: $\langle 0|\hat a_{\mathbf q}\hat\phi(z)|0\rangle\,\langle 0|T\hat\phi\hat\phi|0\rangle\,\langle 0|\hat\phi(z)\hat a^\dagger_{\mathbf p}|0\rangle$.<br>
Comptage&nbsp;: $4$ pattes pour $\hat a^\dagger_{\mathbf p}$, puis $3$ pour $\hat a_{\mathbf q}$ $= 12$ façons.<br>
Exemple de représentant de la famille&nbsp;:</li>
</ul>
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-familleB.svg" style="box-shadow:none;background:none;height:2.6em;">
</div>



D'où le premier ordre&nbsp;:

$
\mathcal A^{(1)} = -\frac{i\lambda}{4!}\int\mathrm{d}^4z\\,\Big[
3\\,\langle 0|\hat a_{\mathbf q}\hat a^\dagger_{\mathbf p}|0\rangle\\, \langle 0|T\hat\phi\hat\phi|0\rangle \\, \langle 0|T\hat\phi\hat\phi|0\rangle + 12\\,\langle 0|\hat a_{\mathbf q}\hat\phi(z)|0\rangle\\, \langle 0|T\hat\phi\hat\phi|0\rangle \\, \langle 0|\hat\phi(z)\hat a^\dagger_{\mathbf p}|0\rangle \Big]
$

Il reste à évaluer les <b>contractions externes</b> en suivant les règles de conversion&nbsp;:

<div id="theo">

<ul style="margin-top:1em;margin-bottom:1em;">
<li><b>Champ–champ</b>&nbsp;: le propagateur (cf. <a href="../tqc6">chapitre précédent</a>)&nbsp;:
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-phiphi.svg" style="box-shadow:none;background:none;height:2.0em;">
</div></li>
<li><b>Champ–état initial</b>&nbsp;: une onde <b>entrante</b>&nbsp;:
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-phi-adag.svg" style="box-shadow:none;background:none;height:2.6em;">
</div></li>
<li><b>Champ–état final</b>&nbsp;: une onde <b>sortante</b>&nbsp;:
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-aq-phi.svg" style="box-shadow:none;background:none;height:2.6em;">
</div></li>
<li><b>Initial–final</b>&nbsp;: rien ne s'est passé&nbsp;:
<div style="text-align:center;margin:-1em 0;">
<img src="/wick19-aa.svg" style="box-shadow:none;background:none;height:2.0em;">
</div></li>
</ul>

</div>

<br>

<div id="preuve">

Démonstration de la deuxième, par le développement en modes et $[\hat a_{\mathbf q}, \hat a^\dagger_{\mathbf p}] = \delta^{(3)}(\mathbf q - \mathbf p)$&nbsp;:

$\displaystyle
\langle 0|\hat\phi(z)\hat a^\dagger_{\mathbf p}|0\rangle
= \int \frac{\mathrm{d}^3q}{(2\pi)^{3/2}(2E_{\mathbf q})^{1/2}}\\,
\langle 0|\big(\hat a_{\mathbf q}e^{-iq\cdot z} + \hat a^\dagger_{\mathbf q}e^{iq\cdot z}\big)\hat a^\dagger_{\mathbf p}|0\rangle
= \int \frac{\mathrm{d}^3q}{(2\pi)^{3/2}(2E_{\mathbf q})^{1/2}}\\, e^{-iq\cdot z}\\,\delta^{(3)}(\mathbf q - \mathbf p)
= \frac{e^{-ip\cdot z}}{(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}}
$

Seul $\hat a\hat a^\dagger$ survit et $\hat a\hat a^\dagger = \hat a^\dagger \hat a + [\hat a, \hat a^\dagger]$, puis le $\delta^{(3)}$ épingle $\mathbf q = \mathbf p$. 

Remarque&nbsp;: les facteurs $\frac{1}{(2\pi)^{3/2}}\frac{1}{(2E_{\mathbf p})^{1/2}}$ de la contraction <b>compensent exactement</b> la normalisation relativiste $(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}$ des états. Au total, la contraction «&nbsp;champ sur état&nbsp;» vaut $\hat\phi(z)|p\rangle \to e^{-ip\cdot z}$, une onde plane nue. C'est la raison même du facteur de normalisation devant $\langle 0|\\, \hat a_{\mathbf q}\\, \hat S\\, \hat a^\dagger_{\mathbf p}\\, |0\rangle$.

</div>

Que donne l'ordre 1 finalement&nbsp;?

$\displaystyle
\mathcal A^{(1)}\_A  = -\frac{i\lambda}{8}  (2\pi)^3(2E_{\mathbf p}) \\, \delta^{(3)}(\mathbf q - \mathbf p) \int\mathrm{d}^4z \left( \int \frac{\mathrm{d}^4k}{(2\pi)^4} \frac{i}{k^2 - m^2 + i\epsilon} \right)^{\\!2}
$

Dans la famille A, la particule traverse sans interagir avec le champ. L'intégrande sur $\mathrm{d}^4z$ est indépendant de $z$ (les fluctuations du vide sont homogènes). L'intégration génère donc un volume infini de l'espace-temps. Physiquement, ces termes de vide se factoriseront et disparaîtront lors de la normalisation de la matrice $\hat S$.

Dans la famille B, la particule interagit réellement avec le champ&nbsp;:
 
$\displaystyle
\mathcal A^{(1)}\_B = \frac{(-i\lambda)}{2}\int\mathrm{d}^4z\\, \frac{\mathrm{d}^4k}{(2\pi)^4}\\, e^{i(q-p)\cdot z}\\, \frac{i}{k^2 - m^2 + i\varepsilon}
= (2\pi)^4\delta^{(4)}(q-p)\\, \frac{(-i\lambda)}{2}\int\frac{\mathrm{d}^4k}{(2\pi)^4}\frac{i}{k^2 - m^2 + i\varepsilon}
$

La particule entre, interagit en un point avec une fluctuation du vide (la boucle paramétrée par $k$), et repart avec la même impulsion quadridimensionnelle ($q = p$).<br>On remarque que l'intégrale résiduelle sur $\mathrm{d}^4k$ diverge violemment pour les grandes impulsions (divergence ultraviolette). Ce "problème" sera réglé grâce à la renormalisation.



<br>

#### Dessiner

Chaque vertex $\hat{\mathcal H}_I(z)$ est une petite bestiole dont les pattes sont les champs. Les contractions de Wick <b>câblent</b> les pattes&nbsp;: entre elles (propagateurs, lignes internes) ou vers les particules externes (lignes entrantes/sortantes). 

Expérimentons sur la famille B&nbsp;: on pose le vertex en $z$ avec ses quatre pattes&nbsp;; la contraction champ–état initial attrape une patte et en fait la ligne entrante&nbsp;; la contraction champ–champ noue deux pattes entre elles formant une boucle&nbsp;; la contraction champ–état final attrape la patte restante et sort du dessin.

Résultat&nbsp;: le diagramme "boucle" de la famille B.<br>
La famille A, elle, devient un diagramme <b>déconnecté</b>&nbsp;: la ligne directe $\delta^{(3)}(\mathbf q - \mathbf p)$ d'un côté, un «&nbsp;huit&nbsp;» de vide de l'autre.

<div style="position:relative;margin-left:auto;margin-right:auto;width:430px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/familleab.png" style="box-shadow:none;background:none;">
</div>


<br>

### Anatomie d'un diagramme

<ul style="margin-top:1.5em; margin-bottom:1em;">
<li>

Un <b>diagramme connexe</b> est un morceau d'un seul tenant&nbsp;; un diagramme <b>déconnecté</b> en assemble plusieurs. Des processus déconnectés ne peuvent pas s'influencer. L'intuition dit (et la suite confirmera) qu'on ne devra garder que les connexes[^d3].

</li>
<li>

Les <b>lignes externes</b> ont une extrémité libre&nbsp;: la connexion au monde extérieur (particules réelles, <b>sur couche</b>, entrantes en bas, sortantes en haut).

</li>


<li>

Les <b>lignes internes</b> relient deux vertex&nbsp;: particules virtuelles, <b>hors couche</b>.

</li>
<li>

Un <b>diagramme du vide</b> n'a aucune ligne externe&nbsp;: il ne touche pas aux particules, ne contribue qu'à $\langle 0|\hat S|0\rangle$, donc seulement à une <i>phase globale</i> $e^{i\phi}$ des amplitudes, invisible dans les probabilités.

</li>
</ul>

Planche anatomique d'un diagramme déconnecté d'ordre 3&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:380px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diaganat.png" style="box-shadow:none;background:none;">
</div>

[^d3]: Derrière l'intuition, un principe profond&nbsp;: la <b>décomposition en amas</b> (cluster decomposition). Des expériences distantes donnent des résultats décorrélés. Une matrice $S$ construite sur des opérateurs de création/annihilation la satisfait automatiquement&nbsp;: c'est la raison structurelle pour laquelle ces opérateurs sont <i>requis</i> en théorie des champs, et pas une simple commodité. 

Le renversement final&nbsp;: connaissant la correspondance dessins ↔ contractions, on n’a plus jamais besoin de développer&nbsp;; on dessine, puis on traduit&nbsp;:

<div id="theo">

**Règles de Feynman de $\phi^4$ en espace des positions**&nbsp;:

<ul style="margin-bottom:1em;">
<li>Chaque <b>vertex</b> contribue un facteur $-i\lambda$.</li>
<li>Chaque <b>ligne interne</b> apporte un propagateur $\Delta(x-y)$ où $x$ et $y$ sont le départ et l'arrivée de la ligne.</li>
<li>Une <b>ligne externe entrante</b> contribue une onde entrante $\mathrm{e}^{-\mathrm{i}p\cdot x}$ et une <b>ligne externe sortante</b> contribue une onde sortante $\mathrm{e}^{-\mathrm{i}p\cdot x}$ pour ligne sortante</li>
<li><b>Intégrer</b> les positions des vertex sur tout l'espace-temps.</li>
<li><b>Diviser</b> par le facteur de symétrie $D$.</li>
</ul>

</div>

<br>

### Les facteurs de symétrie

Le nombre $D$ par lequel on divise vient du comptage des contractions qui produisent le <i>même</i> dessin. 

Règle générale&nbsp;: s'il y a $m$ façons d'arranger vertex et propagateurs donnant des parties identiques du diagramme (extrémités des lignes externes fixées, sans couper de propagateur), on récolte un facteur $D_i = m$, et $D = \prod_i D_i$. 

Deux cas particuliers à connaître par cœur&nbsp;:

<div id="theo">

<ul style="margin:1em 0;">
<li>chaque propagateur dont les deux bouts rejoignent le même vertex (une boucle)&nbsp;: $D_i = 2$&nbsp;;</li>
<li>chaque paire de vertex directement reliés par $n$ propagateurs&nbsp;: $D_i = n!$.</li>
</ul>

</div>

<br>


Exemples&nbsp;:

<style>
  ol.lettres-parentheses {
    list-style-type: none; /* Supprime le style par défaut (1, 2, 3...) */
    counter-reset: mon-compteur; /* Initialise le compteur */
    padding-left: 20px;
  }

  ol.lettres-parentheses li {
    counter-increment: mon-compteur; /* Incrémente le compteur à chaque élément */
    position: relative;
  }

  ol.lettres-parentheses li::before {
    /* Affiche le compteur sous forme de lettre minuscule avec les parenthèses */
    content: "(" counter(mon-compteur, lower-alpha) ") "; 
    position: absolute;
    left: -25px; /* Ajuste la position de la lettre */
  }
</style>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/facteurs-symetrie.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

<ol class="lettres-parentheses" style="margin:1em 0;">
<li> Ligne traversée d'une seule boucle&nbsp;: un propagateur dont les deux bouts rejoignent le même vertex, $D = 2$. (Les extrémités des lignes externes sont fixées&nbsp;: rien d'autre à compter.)</li>
<li> Deux boucles en série sur la ligne&nbsp;: chaque boucle apporte un $2$, $D = 2\times 2 = 4$. Les diagrammes (a) et (b) sont des <b>self-énergies</b>&nbsp;: des propagateurs libres décorés de boucles, qui n'interagissent avec rien d'autre. On verra qu'ils ne font que déplacer les constantes du propagateur («&nbsp;renormaliser&nbsp;»).</li>
<li> Le «&nbsp;double huit&nbsp;» du vide (deux boucles accrochées au même vertex)&nbsp;: $2$ par boucle, <i>et</i> l'échange des deux bulles (rotation de $180°$ autour de l'axe horizontal) redonne le même dessin, d'où un $m = 2$ supplémentaire&nbsp;: $D = 2\times 2\times 2 = 8$.</li>
<li> <b>Sunset</b>&nbsp;: une paire de vertex directement reliés par trois propagateurs, $D = 3! = 6$.</li>
<li> Une boucle ($2$) et une paire de vertex reliés par deux lignes ($2!$)&nbsp;: $D = 2\times 2! = 4$.</li>
<li> Trois vertex en chaîne, à voir comme deux paires (le vertex central compté dans chacune), chaque paire reliée par deux lignes&nbsp;: $D = 2!\times 2! = 4$.</li>
<li> Une bulle quelque part sur le dessin&nbsp;: $D = 2$.</li>
<li> Deux bulles ($2\times 2$), plus l'échange des parties gauche et droite entre les deux vertex&nbsp;: $D = 2\times 2\times 2 = 8$.</li>
<li> Une paire de vertex reliés par deux lignes&nbsp;: $D = 2! = 2$.</li>
</ol>

(D'autres théories que $\phi^4$ auront des règles de comptage légèrement différentes.) Ces facteurs ne changent pas la physique d'un diagramme isolé, mais deviennent indispensables dès qu'on <i>somme</i> plusieurs diagrammes.

<details style="margin:1em 0;">
<summary>
D'où sort le $D = 6$ du sunset&nbsp;?
</summary>

Ordre $2$&nbsp;: préfacteur $\dfrac{1}{2!}\Big(\dfrac{1}{4!}\Big)^{\\!2}$ et huit champs ($4$ pattes au vertex $y$, $4$ au vertex $w$).<br>
Comptons les contractions qui dessinent le diagramme sunset&nbsp;: choisir le vertex qui accueille la ligne entrante ($2$ façons puisque les vertex sont interchangeables), la patte qui la reçoit ($4$), la patte de l'autre vertex pour la ligne sortante ($4$), puis apparier les $3$ pattes restantes de chaque côté ($3!$)&nbsp;: au total $2 \times 4 \times 4 \times 3! = 192$ contractions identiques. D'où le coefficient

$$
\frac{1}{2!}\Big(\frac{1}{4!}\Big)^2 \times 192 = \frac{192}{1152} = \frac{1}{6} = \frac{1}{D}.
$$

Moralité&nbsp;: le $4!$ du préfacteur et le $n!$ de Dyson compensent <i>presque</i> tout le comptage (c'est leur raison d'être) et le résidu $D$ mesure les symétries <i>internes</i> du dessin que rien ne distingue.

</details>

</div>

<br>


### L'espace des impulsions&nbsp;: le diagramme sunset

À l'ordre $\lambda^2$, le théorème de Wick produit toute une galerie de câblages&nbsp;: lignes décorées de boucles, morceaux de vide, et un diagramme à deux vertex reliés par trois propagateurs appelé «&nbsp;sunset&nbsp;».


<div style="position:relative;margin-left:auto;margin-right:auto;width:460px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagordre2.png" style="box-shadow:none;background:none;">
</div>

Prenons le terme du deuxième ordre $O(\lambda^2)$ dans l'expansion de $\langle q| \hat{S}|p\rangle$&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\begin{aligned}
\hat{S}^{(2)} &=\frac{(-\mathrm{i})^2}{2!} \int \mathrm{d}^4 y \mathrm{~d}^4 w \hat{\mathcal{H}}\_{\mathrm{I}}(y) \hat{\mathcal{H}}_{\mathrm{I}}(w)\\\\
&= \frac{(-\mathrm{i} \lambda)^2}{2!(4!)^2} \int \mathrm{~d}^4 y \mathrm{~d}^4 w \hat{\phi}(y) \hat{\phi}(y) \hat{\phi}(y) \hat{\phi}(y) \hat{\phi}(w) \hat{\phi}(w) \hat{\phi}(w) \hat{\phi}(w)
\end{aligned}
$$

</div>

On applique maintenant le théorème de Wick pour obtenir les différents diagrammes. Celui qui nous intéresse est donné par le terme&nbsp;:

<div style="text-align:center;margin:0.8em 0;">
<img src="/wicksaturne.svg" style="box-shadow:none;background:none;height:4.2em;">
</div>


<div style="position:relative;margin-left:auto;margin-right:auto;width:120px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagsat.png" style="box-shadow:none;background:none;">
</div>

Avec une patte entrante sur le vertex $w$, une sortante sur le vertex $y$, et les trois pattes restantes de chaque côté nouées deux à deux. Cela donne une onde entrante en $w$, une sortante en $y$ et trois propagateurs $\Delta(y-w)$) Et comme on l'a vu, $D=6$.

L'amplitude pour le diagramme de Feynman sunset est donc donnée par&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
-\frac{\lambda^2}{6} \int \mathrm{~d}^4 y \mathrm{~d}^4 w \\, \mathrm{e}^{\mathrm{i} q \cdot y} \Delta(y-w)^3 \mathrm{e}^{-\mathrm{i} p \cdot w}
$$

</div>


Passage maintenant en **espace des impulsions**, pas à pas. 

Chaque propagateur s'écrit $\Delta(y-w) = \displaystyle\int\frac{\mathrm{d}^4k}{(2\pi)^4}\\, e^{-ik\cdot(y-w)}\\,\frac{i}{k^2 - m^2 + i\varepsilon}$&nbsp;: trois impulsions muettes $k_1, k_2, k_3$. 

On regroupe toutes les exponentielles&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\int\mathrm{d}^4y\\; e^{i(q - k_1 - k_2 - k_3)\cdot y} = (2\pi)^4\delta^{(4)}(k_1 + k_2 + k_3 - q)
$$

</div>


Et après le premier delta&nbsp;: 


<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\int\mathrm{d}^4w\\; e^{i(k_1 + k_2 + k_3 - p)\cdot w} = (2\pi)^4\delta^{(4)}(q - p)
$$

</div>

<b>Lecture physique des deltas</b>&nbsp;:<br>
intégrer la <i>position</i> d'un vertex sur tout l'espace-temps fabrique un delta de <i>conservation de la quadri-impulsion à ce vertex</i>. C'est la dualité de Fourier position/impulsion en action. Le second delta est la conservation <b>globale</b>, que tout diagramme trimballe. Le delta du vertex $y$ épingle $k_1 = q - k_2 - k_3$, et il reste&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\text{sunset} = -\frac{\lambda^2}{6}(2\pi)^4\delta^{(4)}(q-p)
\int\frac{\mathrm{d}^4k_2}{(2\pi)^4}\frac{\mathrm{d}^4k_3}{(2\pi)^4}\\,
\frac{i}{[(q - k_2 - k_3)^2 - m^2 + i\varepsilon]}\\,
\frac{i}{(k_2^2 - m^2 + i\varepsilon)}\\,
\frac{i}{(k_3^2 - m^2 + i\varepsilon)}.
$$

</div>


Même nombre d'intégrales qu'en position, mais <b>plus aucune exponentielle</b>&nbsp;: c'est pour cela qu'on calcule en espace des impulsions.

<div style="position:relative;margin-left:auto;margin-right:auto;width:190px;max-width:100%;margin-bottom:-1em;margin-top:-2em;">
<img src="/diagsatp.png" style="box-shadow:none;background:none;">
</div>

### Les règles de Feynman de $\phi^4$ en espace des impulsions


<div id="theo">

**Règles de Feynman de $\phi^4$ en espace des impulsions**&nbsp;:

<ul style="margin-bottom:1em;">
<li>chaque <b>vertex</b>&nbsp;: un facteur $-i\lambda$&nbsp;;</li>
<li>chaque <b>ligne interne</b>, étiquetée par une impulsion $q$&nbsp;: un propagateur $\dfrac{i}{q^2 - m^2 + i\varepsilon}$&nbsp;;</li>
<li><b>imposer la conservation</b> de la quadri-impulsion à chaque vertex&nbsp;;</li>
<li><b>intégrer</b> les impulsions internes <i>non contraintes</i> avec la mesure $\dfrac{\mathrm{d}^4q}{(2\pi)^4}$&nbsp;;</li>
<li>chaque <b>ligne externe</b>&nbsp;: un facteur $1$ (en espace des impulsions, la contraction champ–état se réduit à $1$ grâce à la normalisation relativiste)&nbsp;;</li>
<li><b>diviser</b> par le facteur de symétrie $D$&nbsp;;</li>
<li>inclure le $\boldsymbol{(2\pi)^4\delta^{(4)}}$ <b>global</b> de conservation.</li>
</ul>

</div>

Les lignes externes ne portent <b>pas</b> de propagateur. Et on n'intègre que les impulsions dont les deltas n'ont pas déjà fixées (au moindre doute&nbsp;: mettre un delta par vertex et intégrer tout).


<div style="position:relative;margin-left:auto;margin-right:auto;width:580px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/extroisdiag.png" style="box-shadow:none;background:none;">
</div>


<div id="preuve">

Pour s'entraîner, calculons les contributions à $\langle|q\hat S|p\rangle$ des 3 diagrammes ci-dessus&nbsp;:

<ol class="lettres-parentheses" style="margin:1em 0; overflow-x:auto;">
<li>Ligne + une boucle&nbsp;:<br>
$\displaystyle \dfrac{(-i\lambda)}{2}\displaystyle\int\frac{\mathrm{d}^4k}{(2\pi)^4}\frac{i}{k^2 - m^2 + i\varepsilon}$</li>
<li>Ligne + boucle, accompagnées d'un «&nbsp;huit&nbsp;» du vide&nbsp;:<br>
le même facteur $\displaystyle\times\, \dfrac{(-i\lambda)}{8}\displaystyle\int\frac{\mathrm{d}^4k_1}{(2\pi)^4}\frac{\mathrm{d}^4k_2}{(2\pi)^4}\frac{i}{(k_1^2 - m^2 + i\varepsilon)}\frac{i}{(k_2^2 - m^2 + i\varepsilon)}$<br>
Le vide se <i>factorise</i>&nbsp;!</li>
<li>Deux boucles en série sur la ligne&nbsp;:<br>
$\displaystyle \dfrac{(-i\lambda)^2}{4}\displaystyle\int\frac{\mathrm{d}^4k_1}{(2\pi)^4}\frac{\mathrm{d}^4k_2}{(2\pi)^4}\frac{i}{(k_1^2 - m^2 + i\varepsilon)}\,\frac{i}{(p^2 - m^2 + i\varepsilon)}\,\frac{i}{(k_2^2 - m^2 + i\varepsilon)}$<br>
Noter la ligne <i>interne</i> d'impulsion $p$ entre les deux vertex&nbsp;;</li>
</ol>

Les deux premiers types sont des <b>diagrammes de self-énergie</b>&nbsp;: des propagateurs libres décorés de boucles, qui n'interagissent avec rien d'autre. On verra qu'ils ne font que déplacer les constantes du propagateur libre (dans le jargon, ils «&nbsp;renormalisent le propagateur&nbsp;»).

</div>

<br>

### Première diffusion&nbsp;: deux particules entrent, deux sortent

Jusque-là, on s'est occupé de diagrammes décrivant une seule particule. Et si deux particules entrent puis sortent&nbsp;? L'amplitude devient&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\langle q_1 q_2|\hat S|p_2 p_1\rangle = (2\pi)^6\big(16 E_{\mathbf p_1}E_{\mathbf p_2}E_{\mathbf q_1}E_{\mathbf q_2}\big)^{\frac12}\\,
\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\\, \hat S\\, \hat a^\dagger_{\mathbf p_2}\hat a^\dagger_{\mathbf p_1}|0\rangle.
$$

</div>

Plus besoin de contractions&nbsp;: on dessine et on traduit.

<ul>
<li><b>Ordre zéro</b> (la partie $\mathbb 1$ de $\hat S$)&nbsp;: les particules passent tout droit, 
$\displaystyle\propto \delta^{(3)}(\mathbf q_1 - \mathbf p_1)\delta^{(3)}(\mathbf q_2 - \mathbf p_2)$ (ou l'échange $1 \leftrightarrow 2$). Aucune diffusion, rien de mesuré&nbsp;: on les ignore.

<div style="position:relative;margin-left:auto;margin-right:auto;width:260px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagzero.png" style="box-shadow:none;background:none;">
</div>

</li>
<li><b>L'arbre</b> (un vertex)&nbsp;: la diffusion la plus simple,<br>
$\displaystyle
(2\pi)^4\delta^{(4)}(q_1 + q_2 - p_1 - p_2)\, (-i\lambda)
$

<div style="position:relative;margin-left:auto;margin-right:auto;width:150px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagarbre.png" style="box-shadow:none;background:none;">
</div>

</li>
<li><b>Une boucle</b> (deux vertex reliés par deux propagateurs, $D = 2!$)&nbsp;:<br>
$\displaystyle
(2\pi)^4\delta^{(4)}(q_1 + q_2 - p_1 - p_2)\, \frac{(-i\lambda)^2}{2}
\int\frac{\mathrm{d}^4k}{(2\pi)^4}\, \frac{i}{[k^2 - m^2 + i\varepsilon]}\, \frac{i}{[(p_1 + p_2 - k)^2 - m^2 + i\varepsilon]}$

<div style="position:relative;margin-left:auto;margin-right:auto;width:120px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagbulle.png" style="box-shadow:none;background:none;">
</div>

</li>
</ul>


{{%notice note%}}
On n'a pas encore dit comment <i>faire</i> ces intégrales, et pour cause&nbsp;: beaucoup divergent&nbsp;! Apprivoiser ces infinis révèle une grande part de la physique cachée de la théorie des champs (renormalisation, ch. 32 du livre)&nbsp;; certaines intégrales convergent, et le chapitre suivant en tire déjà de la physique mesurable.
{{%/notice%}}

<br>

### Bilan

Le processus complet pour obtenir les amplitudes&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:380px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagfeyorganigramme.png" style="box-shadow:none;background:none;">
</div>

<br>

### Pièges

<ul style="margin-top:0;">
<li>Ne pas oublier le facteur de symétrie $D$ (invisible sur un diagramme isolé, fatal dans une somme).</li>
<li>Les lignes externes ne portent <b>pas</b> de propagateur.</li>
<li>N'intégrer que les impulsions <b>non contraintes</b> par les deltas de vertex.</li>
<li>Les diagrammes du vide se factorisent et ne contribuent qu'une phase (on les laissera tomber proprement grâce au théorème des amas liés).</li>
<li>La normalisation relativiste des états n'est pas décorative&nbsp;: elle est <i>conçue</i> pour que les contractions externes se réduisent à des ondes planes nues, puis à $1$ en espace des impulsions.</li>
</ul>

<br>

## Théorie de la diffusion

Les chapitres précédents ont construit la machinerie nécessaire pour déterminer une amplitude&nbsp;: propagateurs, matrice $S$, théorème de Wick, diagrammes. Ce chapitre utilise cette machinerie sur une expérience. Trois parties&nbsp;:

<ul>
<li><b>Une nouvelle théorie-jouet</b>&nbsp;: la théorie $\psi^\dagger\psi\phi$ de Yukawa. C'est la <i>doublure</i> de l'électrodynamique quantique (mêmes gestes, sans les spins), et elle a le bon goût de différencier les antiparticules, ce que $\phi^4$ ne pouvait pas faire.</li>
<li><b>La grammaire des processus</b>&nbsp;: lire les flèches (flot de nombres, pas d'impulsions), reconnaître les trois canaux $s$, $t$, $u$, et distiller l'amplitude jusqu'à son cœur utile, l'amplitude invariante $\mathcal M$ (diagrammes connexes amputés, sans le $\delta^{(4)}$).</li>
<li><b>Le nombre mesuré</b>&nbsp;: la section efficace, $\mathrm{d}\sigma/\mathrm{d}\Omega \propto |\mathcal M|^2$, et le grand bouclage&nbsp;: la limite non relativiste de l'échange d'un phion <i>redonne</i>, via l'approximation de Born, le potentiel de Yukawa découvert ici (ce qu'on avait posé à la main y est maintenant dérivé).</li>
</ul>


<br>

### La théorie $\psi^\dagger\psi\phi$, doublure de la QED

<div id="def">

Deux champs&nbsp;: $\hat\psi$ <b>complexe</b> (les «&nbsp;psions&nbsp;», masse $m$, avec leurs antiparticules) et $\hat\phi$ <b>réel</b> (les «&nbsp;phions&nbsp;», masse $\mu$)&nbsp;:

<div id="grosseformule" style="margin:-1em 0 ;">

$$
\mathcal L = \partial^\mu\psi^\dagger\partial_\mu\psi - m^2\psi^\dagger\psi + \frac{1}{2}(\partial_\mu\phi)^2 - \frac{1}{2}\mu^2\phi^2 - g\\,\psi^\dagger\psi\phi.
$$

</div>

L'interaction est $\mathcal L_I = -g\psi^\dagger\psi\phi$, donc $\hat{\mathcal H}_I(z) = +\\,g\\,\hat\psi^\dagger(z)\hat\psi(z)\hat\phi(z)$[^y1].

</div>

[^y1]: $\hat{\mathcal H}_I = -\hat{\mathcal L}_I$ est vrai ici parce que l'interaction ne contient pas de dérivées&nbsp;; avec des couplages dérivatifs, le passage lagrangien → hamiltonien est plus subtil.

En QED, l'électron est l'excitation d'un champ complexe et le photon celle d'un champ de jauge, couplés par un vertex à trois pattes. Ici, le <b>psion</b> joue l'électron (scalaire, bosonique) et le <b>phion</b> joue un photon massif scalaire $\to$ même structure de vertex, mêmes canaux, mêmes gestes de calcul, sans la machinerie des spins. Tout ce qui suit est une répétition générale de QED.


<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vertyuk.png" style="box-shadow:none;background:none;">
</div>

<u>Rappels</u>&nbsp;: on note $E_{\mathbf p} = (\mathbf p^2 + m^2)^{1/2}$ pour les psions et $\omega_{\mathbf q} = (\mathbf q^2 + \mu^2)^{1/2}$ pour les phions (pour ne pas confondre avec le $i\varepsilon$ des propagateurs)&nbsp;:

<ul>
<li>$\hat\psi(x) = \displaystyle\int \frac{\mathrm{d}^3p}{(2\pi)^{3/2}} \frac{1}{(2E_{\mathbf p})^{1/2}} \Big( \hat a_{\mathbf p}\,e^{-ip\cdot x} + \hat b^{\dagger}_{\mathbf p}\,e^{ip\cdot x} \Big)$<br>
$\hat\psi$ <b>détruit un psion ou crée un antipsion</b>&nbsp;;</li>
<li>$\hat\psi^{\dagger}(x) = \displaystyle\int \frac{\mathrm{d}^3p}{(2\pi)^{3/2}} \frac{1}{(2E_{\mathbf p})^{1/2}} \Big( \hat a^{\dagger}_{\mathbf p}\,e^{ip\cdot x} + \hat b_{\mathbf p}\,e^{-ip\cdot x} \Big)$<br>
$\hat\psi^\dagger$ <b>crée un psion ou détruit un antipsion</b>&nbsp;;</li>
<li>$\hat\phi(x) = \displaystyle\int \frac{\mathrm{d}^3q}{(2\pi)^{3/2}} \frac{1}{(2\omega_{\mathbf q})^{1/2}} \Big( \hat c_{\mathbf q}\,e^{-iq\cdot x} + \hat c^{\dagger}_{\mathbf q}\,e^{iq\cdot x} \Big)$<br>
le phion, réel, est sa propre antiparticule.</li>
</ul>


Deux conséquences du vertex à <b>trois</b> pattes&nbsp;:

<ul>
<li><b>Tous les termes du premier ordre sont nuls</b> pour nos processus.<br>
Raison mécanique&nbsp;: $\hat{\mathcal H}_I$ contient <i>un seul</i> $\hat\phi$&nbsp;; entre deux vides sans phion externe, ce $\hat\phi$ orphelin ne peut être contracté avec personne, et $\langle 0|\hat\phi|0\rangle = 0$. (Pour du $2\to 2$, argument encore plus simple&nbsp;: impossible d'accrocher quatre pattes externes à un vertex qui n'en a que trois.)</li>
<li><b>Tous les facteurs de symétrie valent $D = 1$</b>.<br>
Raison&nbsp;: les trois pattes d'un vertex sont <i>toutes différentes</i> ($\psi$, $\psi^\dagger$, $\phi$). Aucune permutation interne ne redonne le même câblage, contrairement aux quatre pattes identiques de $\phi^4$. Le comptage des contractions compense alors exactement le $1/n!$ de Dyson, sans surplus.</li>
</ul>

<br>

### Le dictionnaire des contractions

La règle de lecture qui engendre tout le dictionnaire&nbsp;: <b>une contraction externe est non nulle si et seulement si le champ contient l'opérateur conjugué de celui de l'état</b>. Il faut que quelqu'un détruise ce qui a été créé. Et on a toujours pour les exponentielles&nbsp;: $e^{-ip\cdot x}$ = quelque chose <i>entre</i>, $e^{+ip\cdot x}$ = quelque chose <i>sort</i>.

<div id="theo">

Les contractions non nulles de la théorie&nbsp;:

<b>Les deux propagateurs</b> (lignes internes)&nbsp;:
<!-- Préambule LaTeXiT : \usepackage{simplewick} -->
<!-- LaTeX (simplewick) :
\contraction{}{\hat\psi(x)}{\,}{\hat\psi^{\dagger}(y)}
\hat\psi(x)\,\hat\psi^{\dagger}(y) = \int\frac{\mathrm{d}^4p}{(2\pi)^4}\,\frac{i\,e^{-ip\cdot(x-y)}}{p^2-m^2+i\varepsilon},
\qquad
\contraction{}{\hat\phi(x)}{\,}{\hat\phi(y)}
\hat\phi(x)\,\hat\phi(y) = \int\frac{\mathrm{d}^4q}{(2\pi)^4}\,\frac{i\,e^{-iq\cdot(x-y)}}{q^2-\mu^2+i\varepsilon}
-->

<div style="text-align:center;margin:-1em 0;">
<img src="/wickprop1.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<div style="text-align:center;margin:-1em 0;">
<img src="/wickprop2.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<b>Psion entrant / sortant</b> (la contraction entre $\hat\psi$ et $\hat a$ détruit ce que celle entre $\hat a^{\dagger}\_{\mathbf p}$ a créé, et celle entre $\hat\psi^\dagger$ et $\hat a^{\dagger}$ crée ce que $\hat a_{\mathbf p}$ va détruire)&nbsp;:
<!-- LaTeX (simplewick) :
\contraction{}{\hat\psi(x)}{\,}{\hat a^{\dagger}_{\mathbf p}}
\hat\psi(x)\,\hat a^{\dagger}_{\mathbf p} = \frac{e^{-ip\cdot x}}{(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}},
\qquad
\contraction{}{\hat a_{\mathbf p}}{\,}{\hat\psi^{\dagger}(x)}
\hat a_{\mathbf p}\,\hat\psi^{\dagger}(x) = \frac{e^{ip\cdot x}}{(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}}
-->

<div style="text-align:center;margin:-1em 0;">
<img src="/wickpsion1.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<div style="text-align:center;margin:-1em 0;">
<img src="/wickpsion2.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<b>Antipsion entrant / sortant</b> (c'est $\hat\psi^\dagger$ qui reçoit l'antipsion entrant, et $\hat\psi$ qui l'expédie)&nbsp;:
<!-- LaTeX (simplewick) :
\contraction{}{\hat\psi^{\dagger}(x)}{\,}{\hat b^{\dagger}_{\mathbf p}}
\hat\psi^{\dagger}(x)\,\hat b^{\dagger}_{\mathbf p} = \frac{e^{-ip\cdot x}}{(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}},
\qquad
\contraction{}{\hat b_{\mathbf p}}{\,}{\hat\psi(x)}
\hat b_{\mathbf p}\,\hat\psi(x) = \frac{e^{ip\cdot x}}{(2\pi)^{3/2}(2E_{\mathbf p})^{1/2}}
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickantipsion1.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<div style="text-align:center;margin:-1em 0;">
<img src="/wickantipsion2.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<b>Phion entrant / sortant</b>&nbsp;:
<!-- LaTeX (simplewick) :
\contraction{}{\hat\phi(x)}{\,}{\hat c^{\dagger}_{\mathbf q}}
\hat\phi(x)\,\hat c^{\dagger}_{\mathbf q} = \frac{e^{-iq\cdot x}}{(2\pi)^{3/2}(2\omega_{\mathbf q})^{1/2}},
\qquad
\contraction{}{\hat c_{\mathbf q}}{\,}{\hat\phi(x)}
\hat c_{\mathbf q}\,\hat\phi(x) = \frac{e^{iq\cdot x}}{(2\pi)^{3/2}(2\omega_{\mathbf q})^{1/2}}
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickphion1.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<div style="text-align:center;margin:-1em 0;">
<img src="/wickphion2.svg" style="box-shadow:none;background:none;height:3em;">
</div>

<b>Toutes les autres contractions sont nulles</b> (par exemple $\hat\psi$ avec $\hat\psi$&nbsp;: personne n'y détruit ce que l'autre crée).

</div>

On peut vérifier chacune de ces contractions comme on l'a fait au chapitre précédent (développement en modes, $[\hat a, \hat a^\dagger] = \delta^{(3)}$, le delta épingle l'impulsion).

<br>

### Premières récoltes&nbsp;: le têtard et l'huître


{{%notice note%}}
Convention d'étiquetage pour toute la suite&nbsp;: entrées $p, k$, sorties $p', k'$, la lettre $q$ restant réservée aux impulsions des lignes <i>internes</i>.
{{%/notice%}}

Calculons $\mathcal A = \langle p'|\hat S|p\rangle$ (un psion entre avec $p$, un psion sort avec $p'$). Le premier ordre est nul (le $\hat\phi$ orphelin)&nbsp;; à l'ordre $2$, la chaîne à digérer est $\langle 0|\hat a_{\mathbf p'}\\,\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\\,\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\\,\hat a^{\dagger}_{\mathbf p}|0\rangle$. 

Premier câblage&nbsp;:

<!-- LaTeX (simplewick), le têtard :
\contraction{\langle 0|}{\hat a_{\mathbf q}}{}{\hat\psi^{\dagger}(y)}
\contraction[4ex]{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)}{\hat\psi(y)}{\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)}{\hat a^{\dagger}_{\mathbf p}}
\contraction[3ex]{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)\hat\psi(w)}{\hat\phi(w)}
\contraction{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)}{\hat\psi^{\dagger}(w)}{}{\hat\psi(w)}
\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p}|0\rangle
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wicktetard.svg" style="box-shadow:none;background:none;height:4.0em;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:280px;max-width:100%;margin-bottom:-2em;margin-top:-1em;">
<img src="/diagtetard.png" style="box-shadow:none;background:none;">
</div>

Lecture&nbsp;: le psion traverse le vertex $y$ en émettant un phion, lequel aboutit au vertex $w$ où une boucle de psion se referme sur elle-même. Ce diagramme est baptisé le <b>têtard</b>[^y2].<br>
Intuition de sa valeur&nbsp;: la boucle $\hat\psi^\dagger(w)\hat\psi(w)$ au même point mesure la <i>densité de psions dans l'état fondamental</i> $\to$ nulle dans le vide, d'où un diagramme nul ici.

{{%notice note%}}
En matière condensée, où l'état fondamental est peuplé, les têtards vivent très bien.
{{%/notice%}}

[^y2]: Nom forgé par Sidney Coleman. Quand la <i>Physical Review</i> s'offusqua du terme «&nbsp;tadpole&nbsp;», Coleman proposa comme alternative «&nbsp;spermion&nbsp;». La <i>Physical Review</i> céda.

Deuxième câblage&nbsp;:

<!-- LaTeX (simplewick), l'huître :
\contraction{\langle 0|}{\hat a_{\mathbf q}}{}{\hat\psi^{\dagger}(y)}
\contraction[2ex]{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)}{\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)}
\contraction[3ex]{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)\hat\psi(w)}{\hat\phi(w)}
\contraction[2ex]{\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)}{\hat\psi(w)}{\hat\phi(w)}{\hat a^{\dagger}_{\mathbf p}}
\langle 0|\hat a_{\mathbf q}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p}|0\rangle
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickhuitre.svg" style="box-shadow:none;background:none;height:3.6em;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:180px;max-width:100%;margin-bottom:-2em;margin-top:-1em;">
<img src="/diaghuitre.png" style="box-shadow:none;background:none;">
</div>


Lecture&nbsp;: le psion entre en $y$, émet un phion virtuel, continue, et le <i>réabsorbe</i> en $w$. On obtient l'<b>huître</b>, première self-énergie de la théorie. Par les règles (voir plus bas), son amplitude vaut

<div id="grosseformule" style="margin:-1em 0;">

$$
\mathcal A_{\text{huître}} = (-ig)^2 \int \frac{\mathrm{d}^4k}{(2\pi)^4}\\,
\frac{i}{(k^2 - \mu^2 + i\varepsilon)}\\, \frac{i}{[(p-k)^2 - m^2 + i\varepsilon]}\\,
(2\pi)^4\delta^{(4)}(p' - p)
$$

</div>


Il existe aussi deux câblages <b>déconnectés</b> (la ligne directe $\hat a_{\mathbf p'}\hat a^{\dagger}_{\mathbf p}$ accompagnée d'un morceau de vide à deux vertex). Même sort qu'au chapitre précédent&nbsp;: ils ne contribueront pas.

<!-- Figure à redessiner (L&B fig. 20.3) : les deux diagrammes déconnectés du second ordre : ligne directe â â† à côté (a) d'un « haltère » du vide (deux boucles psion reliées par un phion), (b) d'une « huître fermée » du vide (boucle psion double reliée par un phion) -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagdecon.png" style="box-shadow:none;background:none;">
</div>

Les flèches&nbsp;: 
<ul>
<li>sur les lignes de psions, la flèche suit le temps&nbsp;;</li>
<li>sur les antipsions, elle le remonte&nbsp;;</li> 
<li>les phions n'en portent pas (particule = antiparticule).</li>
</ul>

 Ces flèches ne représentent <b>pas l'impulsion</b> mais le <b>flot du nombre de particules conservé</b> (le courant de Noether de la symétrie $U(1)$, $\hat Q = \int\mathrm{d}^3p\\,(\hat n^{(a)}\_{\mathbf p} - \hat n^{(b)}_{\mathbf p})$ («&nbsp;flèche = flot de charge&nbsp;»)&nbsp;: un psion entrant augmente le nombre, ligne qui rentre&nbsp;; un antipsion entrant le diminue, ligne qui <i>sort</i>.<br>
 Conséquence&nbsp;: <b>un antipsion a son impulsion opposée à son flot de nombre</b> (d'où l'astuce de dessiner des flèches d'impulsion séparées à côté des lignes  pour y voir plus clair).

<br>

### La grammaire des processus&nbsp;: les canaux $t$, $u$, $s$


Faisons maintenant interagir deux particules.

<div style="position:relative;margin-left:auto;margin-right:auto;width:150px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/expdiff.png" style="box-shadow:none;background:none;">
</div>

<b>Deux psions entrent, deux sortent.</b> L'élément à calculer est $\langle p' k'|\hat S|k\\, p\rangle$ (normalisations sous-entendues). Premier ordre nul (trois pattes pour quatre clients). À l'ordre $2$, premier câblage&nbsp;:

<!-- LaTeX (simplewick), canal t :
\contraction[2ex]{\langle 0|}{\hat a_{\mathbf q_1}}{\hat a_{\mathbf q_2}}{\hat\psi^{\dagger}(y)}
\contraction[3ex]{\langle 0|\hat a_{\mathbf q_1}}{\hat a_{\mathbf q_2}}{\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)}{\hat\psi^{\dagger}(w)}
\contraction[4ex]{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)}{\hat\psi(y)}{\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}}{\hat a^{\dagger}_{\mathbf p_1}}
\contraction[2ex]{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)\hat\psi(w)}{\hat\phi(w)}
\contraction{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)}{\hat\psi(w)}{\hat\phi(w)}{\hat a^{\dagger}_{\mathbf p_2}}
\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}\hat a^{\dagger}_{\mathbf p_1}|0\rangle
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickcanalt.svg" style="box-shadow:none;background:none;height:4.0em;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcanalt.png" style="box-shadow:none;background:none;">
</div>

Lecture&nbsp;: chaque psion traverse son vertex, et les deux vertex s'échangent un phion virtuel (<i>un psion émet un quantum de force, l'autre l'encaisse, les deux repartent déviés</i>). C'est le processus en <b>canal $t$</b>. 

Second câblage, mêmes ingrédients, sorties permutées&nbsp;:

<!-- LaTeX (simplewick), canal u :
\contraction[4ex]{\langle 0|}{\hat a_{\mathbf q_1}}{\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)}{\hat\psi^{\dagger}(w)}
\contraction{\langle 0|\hat a_{\mathbf q_1}}{\hat a_{\mathbf q_2}}{}{\hat\psi^{\dagger}(y)}
\contraction[5ex]{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)}{\hat\psi(y)}{\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}}{\hat a^{\dagger}_{\mathbf p_1}}
\contraction[2ex]{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)\hat\psi(w)}{\hat\phi(w)}
\contraction{\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)}{\hat\psi(w)}{\hat\phi(w)}{\hat a^{\dagger}_{\mathbf p_2}}
\langle 0|\hat a_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}\hat a^{\dagger}_{\mathbf p_1}|0\rangle
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickcanalu.svg" style="box-shadow:none;background:none;height:4.4em;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:320px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcanalu.png" style="box-shadow:none;background:none;">
</div>

C'est le <b>canal $u$</b>&nbsp;: identique au canal $t$ <i>à l'échange près des particules finales</i>. Les psions étant indiscernables, personne ne peut dire laquelle des deux sorties vient de laquelle des entrées&nbsp;: <b>on additionne donc les amplitudes</b> $t$ et $u$ (c'est l'indiscernabilité quantique en action).

<b>Psion contre antipsion.</b> Entrées&nbsp;: psion $p$, antipsion $\bar k$&nbsp;; sorties&nbsp;: psion $p'$, antipsion $\bar k'$. L'élément est $\langle p'\bar k'|\hat S|\bar k\\, p\rangle = \langle 0|\hat b_{\mathbf k'}\hat a_{\mathbf p'}\\,\hat S\\,\hat a^{\dagger}\_{\mathbf p}\hat b^{\dagger}_{\mathbf k}|0\rangle$)&nbsp;: le câblage type canal $t$ existe toujours (avec des lignes d'antipsions à flèches descendantes), mais une possibilité <b>nouvelle</b> se révèle&nbsp;:

<!-- LaTeX (simplewick), canal s :
\contraction[2ex]{\langle 0|}{\hat b_{\mathbf q_1}}{\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)}{\hat\psi(y)}
\contraction{\langle 0|\hat b_{\mathbf q_1}}{\hat a_{\mathbf q_2}}{}{\hat\psi^{\dagger}(y)}
\contraction[2ex]{\langle 0|\hat b_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)}{\hat\phi(y)}{\hat\psi^{\dagger}(w)\hat\psi(w)}{\hat\phi(w)}
\contraction[3ex]{\langle 0|\hat b_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)}{\hat\psi^{\dagger}(w)}{\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}}{\hat b^{\dagger}_{\mathbf p_1}}
\contraction{\langle 0|\hat b_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)}{\hat\psi(w)}{\hat\phi(w)}{\hat a^{\dagger}_{\mathbf p_2}}
\langle 0|\hat b_{\mathbf q_1}\hat a_{\mathbf q_2}\hat\psi^{\dagger}(y)\hat\psi(y)\hat\phi(y)\hat\psi^{\dagger}(w)\hat\psi(w)\hat\phi(w)\hat a^{\dagger}_{\mathbf p_2}\hat b^{\dagger}_{\mathbf p_1}|0\rangle
-->
<div style="text-align:center;margin:-1em 0;">
<img src="/wickcanals.svg" style="box-shadow:none;background:none;height:3.6em;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcanals.png" style="box-shadow:none;background:none;">
</div>

Lecture&nbsp;: au vertex $w$, le psion et l'antipsion entrants <b>s'annihilent</b> en un phion virtuel, qui <b>se rematérialise</b> au vertex $y$ en une nouvelle paire. C'est le <b>canal $s$</b>. Les antiparticules rendent possible la disparition de la matière en force pure avant renaissance.

Qui s'additionne avec quoi&nbsp;?
<ul>
<li>Pour $\psi\psi \to \psi\psi$, canaux $t + u$&nbsp;;</li>
<li>pour $\psi\bar\psi \to \psi\bar\psi$, canaux $t + s$ (car dans ce cas «&nbsp;échanger les sorties&nbsp;» échange <i>un psion et un antipsion</i>, particules parfaitement discernables. Le câblage type $u$ décrit alors un <i>autre</i> élément de matrice ($\langle \bar p' k'|\hat S|\bar k\, p\rangle$), pas le nôtre.</li>
</ul>

<br>

<!-- Figure à redessiner (L&B fig. 20.4) : les trois câblages en espace-temps, avec les étiquettes de contraction à chaque extrémité : (a) canal t : deux lignes psion montantes reliées par un phion horizontal ; (b) canal u : pareil mais les deux lignes se CROISENT au-dessus du phion ; (c) canal s : psion et antipsion (flèche descendante) convergent vers le vertex du bas, phion VERTICAL, nouvelle paire au vertex du haut -->


<div id="theo">

<b>Règles de Feynman de la théorie $\psi^\dagger\psi\phi$</b> (espace des impulsions)&nbsp;:

<ul>
<li>chaque <b>vertex</b>&nbsp;: un facteur $-ig$&nbsp;;</li>
<li>chaque <b>ligne interne de phion</b> d'impulsion $q$&nbsp;: $\dfrac{i}{q^2 - \mu^2 + i\varepsilon}$&nbsp;; chaque <b>ligne interne de psion</b>&nbsp;: $\dfrac{i}{q^2 - m^2 + i\varepsilon}$&nbsp;;</li>
<li>intégrer les impulsions <b>non déterminées</b> par la conservation&nbsp;;</li>
<li>lignes externes&nbsp;: facteur $1$&nbsp;;</li>
<li>tous les facteurs de symétrie valent $1$&nbsp;;</li>
<li>un $(2\pi)^4\delta^{(4)}$ global de conservation par diagramme.</li>
</ul>

</div>

<br>

<div id="preuve">

<b>Application aux trois canaux</b> (l'impulsion du phion interne est <i>entièrement fixée</i> par la conservation aux vertex $\to$ rien à intégrer)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal A^{(2)} = (-ig)^2\, \frac{i}{q^2 - \mu^2 + i\varepsilon}\, (2\pi)^4\delta^{(4)}\Big(\sum p_{\text{f}} - \sum p_{\text{i}}\Big)
$
</p>

où $q$ est l'impulsion du phion échangé.

D'où les trois cas, en notant $p, k$ les entrées et $p', k'$ les sorties&nbsp;:

<ul>
<li><b>canal $t$</b>&nbsp;: $q = p' - p$, et $q^2 = (p'-p)^2 \equiv t$ (l'impulsion <i>transférée</i>)&nbsp;;</li>
<li><b>canal $u$</b>&nbsp;: $q = p' - k$, et $q^2 = (p'-k)^2 \equiv u$ (le transfert <i>croisé</i>)&nbsp;;</li>
<li><b>canal $s$</b>&nbsp;: $q = p + k$ (les deux entrées fusionnent), et $q^2 = (p+k)^2 \equiv s$ (le carré de l'<i>énergie totale</i> disponible). </li>
</ul>

$s$, $t$ et $u$ sont les <b>variables de Mandelstam</b>.

</div>



<div style="position:relative;margin-left:auto;margin-right:auto;width:850px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagstup.png" style="box-shadow:none;background:none;">
</div>


{{%notice note%}}
Les trois variables ne sont pas indépendantes.<br>
Cela donne un bonus utile pour vérifier ses calculs&nbsp;: pour tout processus $2\to 2$, $s + t + u = \sum_i m_i^2$ (ici $4m^2$). 
{{%/notice%}}

<br>

### De l'amplitude au nombre mesuré

#### Distiller l'amplitude&nbsp;: la matrice $T$ et l'amplitude invariante

Deux scories encombrent nos amplitudes. La première&nbsp;: le terme $\mathbb 1$ de $\hat S$ («&nbsp;rien ne se passe&nbsp;»), sans intérêt pour la diffusion. On l'ôte en écrivant&nbsp;:

$$
\hat S = \mathbb 1 + i\hat T,
$$

Les éléments de $\hat T$ forment la <b>matrice de transition</b>. 

La seconde&nbsp;: le $(2\pi)^4\delta^{(4)}$ que tout diagramme trimballe. On le factorise en définissant l'<b>amplitude invariante</b> $\mathcal M$ (pour un processus $2\to 2$)&nbsp;:

<div id="def">
<div id="grosseformule" style="margin:0 0 -1em 0;">

$$
\langle p_{1\text f}\\, p_{2\text f}|\\, i\hat T\\, |p_{2\text i}\\, p_{1\text i}\rangle
= (2\pi)^4\delta^{(4)}\big(p_{1\text f} + p_{2\text f} - p_{2\text i} - p_{1\text i}\big)\\; \mathrm{i}\mathcal M
$$

</div>

(le $\mathrm{i}$ est là pour raccorder aux conventions de la diffusion non relativiste[^y3]).

</div>

[^y3]: C'est ce $i$ qui fera tomber juste la comparaison avec l'approximation de Born ci-dessous.

Et la simplification la plus forte&nbsp;: <b>seuls les diagrammes entièrement connexes contribuent à $\hat T$</b>. Les déconnectés décrivent des processus qui ne s'influencent pas (cela semble physiquement évident, et c'est démontrable par le théorème des amas liés). 

De plus, les diagrammes portant des boucles <i>sur les pattes externes</i> (les self-énergies type huître accrochées aux jambes) n'y contribuent pas non plus&nbsp;: on les élimine par l'<b>amputation</b>[^y4]. 

D'où le mode d'emploi définitif&nbsp;:

<div id="theo">
<div id="grosseformule" style="margin:0 0 -1em 0;">

$$
\mathrm{i}\mathcal M\\, (2\pi)^4\delta^{(4)}\Big(\sum p_{\text f} - \sum p_{\text i}\Big)
= \sum \left(\begin{array}{c}\text{tous les diagrammes de Feynman}\\\\ \text{connexes et amputés,}\\\\ \text{d'entrées } p_{\text i} \text{ et de sorties } p_{\text f}\end{array}\right)
$$

</div>
</div>

[^y4]: <b>Amputer</b>&nbsp;: couper toutes les boucles de self-énergie qui poussent sur les pattes externes. La justification profonde (les pattes externes doivent décrire des particules physiques, déjà «&nbsp;habillées&nbsp;») attend la renormalisation&nbsp;; pour l'instant, c'est une règle.

<br>

#### La section efficace

Que mesure-t-on&nbsp;? La <b>section efficace</b> $\sigma$&nbsp;: l'aire <i>effective</i> que la cible présente au faisceau, définie opérationnellement par le taux d'événements

$$
R = \sigma L
$$

où $L$ est la <b>luminosité</b> du faisceau (dimensions&nbsp;: temps$^{-1}\times$aire$^{-1}$). 

$\sigma$ est le facteur permettant de passer du «&nbsp;nombre de projectiles par seconde et par m²&nbsp;» au «&nbsp;nombre de clics par seconde&nbsp;» sur le détecteur.

La diffusion part dans toutes les directions, et un détecteur ne couvre qu'un morceau d'angle solide&nbsp;: la grandeur naturelle utile est alors la <b>section efficace différentielle</b> $\mathrm{d}\sigma/\mathrm{d}\Omega$. C'est la part de $\sigma$ envoyée dans $\mathrm{d}\Omega$ (direction $(\theta,\phi)$). Intégrée sur $4\pi$, elle redonne $\sigma$ ($\int_0^{2\pi}\mathrm{d}\varphi\int_{-1}^{1}\mathrm{d}(\cos\theta)\\,\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \sigma$).



<div style="position:relative;margin-left:auto;margin-right:auto;width:850px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/schemdiff.png" style="box-shadow:none;background:none;">
</div>

Reste le pont entre ce que l'expérience compte et ce que la théorie produit. Le schéma est celui de la <b>règle d'or de Fermi</b>&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\text{taux} \;=\; \big|\text{amplitude de transition}\big|^2 \;\times\; \big(\text{densité d'états finals accessibles}\big)
$
</p>

</div>

Il suffit ensuite de rapporter la règle au flux incident pour obtenir une <i>aire</i>. Les trois ingrédients, un par un&nbsp;:

<ul>
<li><b>L'amplitude de transition</b>&nbsp;: $\langle f|\,\mathrm{i}\hat T\,|i\rangle$, le coefficient du tableau $\hat T$ reliant l'état préparé $|i\rangle$ à l'état détecté $|f\rangle$. Une fois le $(2\pi)^4\delta^{(4)}$ de conservation factorisé, il ne reste que $\mathcal M$&nbsp;: l'amplitude invariante est exactement l'élément de matrice dont parle la règle d'or, débarrassé de sa scorie cinématique. Son module carré $|\mathcal M|^2$ est la probabilité, c'est là que vit toute la dynamique (donc tous les diagrammes).</li>
<li><b>La densité d'états finals</b>&nbsp;: combien de manières distinctes la nature a-t-elle de réaliser «&nbsp;deux particules sortantes&nbsp;»&nbsp;? C'est l'espace des phases&nbsp;: le décompte des impulsions permises par la conservation. C'est lui qui fabrique le $\mathrm{d}\Omega$ (chaque direction de sortie est un état final différent) et qui apporte les puissances de $2\pi$ et d'énergie.</li>
<li><b>Le flux incident</b>&nbsp;: un taux d'événements dépend trivialement de l'intensité du faisceau&nbsp;; diviser par le flux l'élimine et laisse une grandeur intrinsèque à la <i>cible</i>, homogène à une aire. C'est ce qui distingue $\sigma$ (propriété de l'interaction) de $R$ (propriété de la manip).</li>
</ul>

En menant ce décompte avec soin, on obtient pour deux particules de <i>même masse</i> diffusant l'une sur l'autre&nbsp;:

<div id="theo">

$$
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{|\mathcal M|^2}{64\pi^2 E_{\text{CM}}^2},
$$

où $E_{\text{CM}}$ est l'énergie totale dans le référentiel du centre de masse

</div>

<br>


#### Born redonne Yukawa

<div id="preuve">

Diffusion de deux psions <i>discernables</i>&nbsp;: 

seul le canal $t$ contribue. Limite non relativiste&nbsp;: $p \approx (m, \mathbf p)$ pour les quatre pattes, donc

<div id="grosseformule" style="margin:-1em 0;">

$$
t = (p' - p)^2 \approx -|\mathbf p' - \mathbf p|^2 = -|\mathbf q|^2,
$$

</div>

où $\mathbf q = \mathbf p' - \mathbf p$ est le transfert de tri-impulsion (la composante temporelle $\approx m - m = 0$ s'efface&nbsp;: à basse énergie, on ne transfère que de l'impulsion, pas de l'énergie). L'amplitude du canal $t$ devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = (-\mathrm ig)^2\,\frac{\mathrm i}{t - \mu^2} = -g^2\,\frac{\mathrm i}{-|\mathbf q|^2 - \mu^2}
= \frac{\mathrm ig^2}{|\mathbf q|^2 + \mu^2}
$
</p>


Rq&nbsp;: le $\mathrm i\varepsilon$ est superflu puisque le dénominateur ne s'annule jamais. 

Avec $E_{\text{CM}} = 2m$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{1}{256\pi^2 m^2}\left(\frac{g^2}{|\mathbf q|^2 + \mu^2}\right)^2
$
</p>

C'est une prédiction mesurable, angle par angle (via $|\mathbf q|^2 = 4|\mathbf p|^2\sin^2(\theta/2)$).

<b>Ce que Born prévoit&nbsp;:</b><br>

<p style="text-align:center;">
$\displaystyle
\langle\mathbf p'|\,\mathrm i\hat T\,|\mathbf p\rangle = - \mathrm i\,\tilde V(\mathbf q)\,(2\pi)\delta(E_{\mathbf p'} - E_{\mathbf p})
$
</p>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>
Preuve
</summary>

On est dans le cadre de la mécanique quantique <b>non relativiste</b> (sans création ni destruction de particules). Une particule d'impulsion $\mathbf p$ arrive sur un <i>potentiel fixe</i> $V(\mathbf r)$ (fixe = la cible est lourde et ne recule pas), et repart avec l'impulsion $\mathbf p'$. Question&nbsp;: avec quelle amplitude&nbsp;?

Le geste est <b>exactement celui du chapitre sur la matrice&nbsp;$S$</b>, en version appauvrie&nbsp;: on traite $V$ comme une perturbation et on tronque la série de Dyson au premier ordre,

<p style="text-align:center;">
$\displaystyle
\hat S \simeq \mathbb 1 - \mathrm{i}\int\mathrm{d}t\; \hat V_I(t)
\Longrightarrow
\langle \mathbf p'|\,\mathrm{i}\hat T\,|\mathbf p\rangle = -\mathrm{i}\int\mathrm{d}t\; \langle\mathbf p'|\hat V_I(t)|\mathbf p\rangle
$
</p>

En représentation d'interaction, $\hat V_I(t)$ porte les phases $e^{\mathrm{i}(E_{\mathbf p'} - E_{\mathbf p})t}$, dont l'intégrale sur $t$ donne $(2\pi)\delta(E_{\mathbf p'} - E_{\mathbf p})$&nbsp;; et l'élément de matrice spatial se calcule entre ondes planes&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle\mathbf p'|\hat V|\mathbf p\rangle = \int\mathrm{d}^3r\; e^{-i\mathbf p'\cdot\mathbf r}\, V(\mathbf r)\, e^{i\mathbf p\cdot\mathbf r}
= \int\mathrm{d}^3r\; e^{-i\mathbf q\cdot\mathbf r}\, V(\mathbf r) \equiv \tilde V(\mathbf q)$<br> 
avec $\mathbf q = \mathbf p' - \mathbf p$
</p>

D'où le résultat.

</details>

Ce que ça raconte&nbsp;:<br>
au premier ordre, la particule entre en onde plane, «&nbsp;touche&nbsp;» le potentiel <b>une seule fois</b>, et ressort en onde plane. L'amplitude de déviation $\mathbf q$ est simplement la <b>composante de Fourier du potentiel à la fréquence spatiale $\mathbf q$</b>.<br>
Un potentiel non négligeable sur une échelle $a$ dévie efficacement jusqu'à $|\mathbf q| \sim 1/a$, et pas au-delà. C'est l'analogue exact de la diffraction&nbsp;: la figure de diffusion est la transformée de Fourier de l'obstacle. L'approximation est bonne tant que le potentiel est faible (une seule «&nbsp;touche&nbsp;» suffit à raconter l'histoire).

Un détail qui compte&nbsp;:<br>
il n'y a ici qu'un delta d'<b>énergie</b>, pas le $\delta^{(4)}$ de la théorie des champs. Raison&nbsp;: un potentiel fixe brise l'invariance par translation d'espace (la cible encaisse l'impulsion sans qu'on la compte), alors qu'en théorie des champs la cible est une particule dynamique à part entière, et l'impulsion est conservée pour de bon. C'est pourquoi la comparaison ci-dessous porte sur les <i>coefficients</i>, pas sur les deltas.
</details>


Ce qui nous donne le droit de comparer la prédiction de la théorie quantique des champs à celle de la mécanique quantique est le fait qu'à basse énergie les deux récits décrivent <i>le même phénomène observable</i>&nbsp;: une particule qui repart déviée. La théorie des champs dit «&nbsp;il y a eu échange d'un phion&nbsp;»&nbsp;; la mécanique quantique dit «&nbsp;il y a eu un potentiel&nbsp;». On <b>définit</b> donc le potentiel effectif comme celui qui reproduirait la même amplitude. C'est la traduction, dans le langage des forces, de ce que l'échange de quanta produit. 

Identifions donc les coefficients, $\mathrm{i}\mathcal M \\;\leftrightarrow\\; -\mathrm{i}\tilde V(\mathbf q)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde V(\mathbf q) = -\frac{g^2}{|\mathbf q|^2 + \mu^2}
$
</p>

<b>Le signe moins</b> n'est cette fois-ci pas parachuté. Le potentiel est bien <i>négatif</i> entre deux psions de même «&nbsp;charge&nbsp;» et donc <b>attractif</b>. L'échange d'un scalaire attire toujours, contrairement à l'échange d'un vecteur (le photon), qui fait se repousser les charges identiques.

La transformée inverse redonne le potentiel de Yukawa (calcul mené pas à pas dans la partie sur le propagateur de Feynman&nbsp;: pôle en $|\mathbf q| = \mathrm i\mu$, fermeture du contour par le haut)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Longrightarrow
V(\mathbf r) = -\frac{g^2}{4\pi|\mathbf r|}\,\mathrm  e^{-\mu|\mathbf r|}
$
</p>

</div>

{{%notice note%}}
Une honnêteté de comptable&nbsp;: l'identification $\mathrm i\mathcal M \leftrightarrow -\mathrm i\tilde V(\mathbf q)$ est un peu cavalière, car les deux membres ne portent pas la même normalisation d'états. Les états relativistes traînent un facteur $\sqrt{2E_{\mathbf p}} \approx \sqrt{2m}$ par patte externe que la mécanique quantique non relativiste ignore. Le raccordement soigneux fait donc apparaître des facteurs $2m$ qu'on absorbe dans les conventions. Ce qui est <i>robuste</i>, et qui porte toute la physique est la <b>dépendance en $\mathbf q$</b> (donc la forme du potentiel et sa portée $1/\mu$) et le <b>signe</b>.
{{%/notice%}}

Dans la partie sur le propagateur de Feynman, ce potentiel avait été <i>obtenu</i> en résolvant Klein–Gordon statique avec une source (un raccourci semi-classique). Ici, il <b>ressort tout seul</b> de la théorie des champs complète&nbsp;: échange d'un phion en canal $t$, limite non relativiste, dictionnaire de Born. Les deux routes se rejoignent exactement, signe attractif compris (des «&nbsp;charges&nbsp;» identiques s'attirent par échange scalaire), portée $1/\mu$ comprise. 

C'est ce bouclage qui vaut à la théorie $\psi^\dagger\psi\phi$ son nom de <b>théorie de Yukawa</b>&nbsp;: la force <i>est</i> l'ombre non relativiste de l'échange de quanta.

<br>

### Bilan

Le trajet complet, du lagrangien au compteur de l'expérimentateur&nbsp;:

$\displaystyle
\mathcal L
\\;\longrightarrow\\;
\text{règles de Feynman}
\\;\longrightarrow\\;
\sum\\, \text{connexes amputés} = \mathrm i\mathcal M
\\;\longrightarrow\\;
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{|\mathcal M|^2}{64\pi^2 E_{\text{CM}}^2}
\\;\longrightarrow\\;
R = \sigma L
\\;\longrightarrow\\;
\text{clics}.
$

<br>

### Pièges

<ul style="margin-top:0;">
<li>$\hat{\mathcal H}_I = -\hat{\mathcal L}_I$&nbsp;: le signe du couplage change en route.</li>
<li>Les flèches des lignes = <b>flot de nombre</b>, jamais l'impulsion&nbsp;; un antipsion a l'impulsion opposée à sa flèche.</li>
<li>Savoir <i>qui</i> additionner&nbsp;: $\psi\psi \to t + u$&nbsp;; $\psi\bar\psi \to t + s$.</li>
<li>Seuls les diagrammes connexes <i>et amputés</i> nourrissent $\mathcal M$.</li>
<li>$D = 1$ dans cette théorie, mais c'est une propriété du vertex à pattes toutes distinctes, pas une loi générale (cf. $\phi^4$).</li>
<li>Le canal $s$ a un pôle en $s = \mu^2$&nbsp;: si l'énergie de collision atteint la masse du médiateur, l'amplitude explose. C'est une <i>résonance</i>, le pôle du propagateur de la partie précédente vu depuis l'accélérateur (sa largeur viendra des corrections d'ordre supérieur).</li>
</ul>


<br>

{{%notice note%}}
Et maintenant&nbsp;? Nous savons dessiner une amplitude et la convertir en section efficace, mais nous avons esquivé une difficulté majeure&nbsp;: dès qu'un diagramme contient une <b>boucle</b>, l'intégrale sur l'impulsion interne <b>diverge</b>.<br><br>
La partie suivante prépare le terrain en donnant un second moteur à la machine, l'<b>intégrale de chemin</b> et la fonctionnelle génératrice $Z[J]$, qui feront apparaître les mêmes diagrammes par une tout autre route. Les infinis, eux, seront affrontés plus loin, avec la renormalisation.
{{%/notice%}}

<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc6">Chapitre précédent</a></td><td><a href="../tqc8">Chapitre suivant</a></td>
    </tr>
</table>
</div>