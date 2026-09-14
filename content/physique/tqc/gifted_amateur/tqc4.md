+++
title = "TQC-4"
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
    padding-left: 10px;
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



# Théorie quantique des champs -- Partie 4

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


La théorie quantique des champs décrit un monde où des particules indistinguables peuvent être créées ou détruites lors d'interactions, entre elles ou avec des entités extérieures. L'idée directrice consiste à voir les particules comme de simples excitations de champs quantiques, obtenus en quantifiant leurs alter ego classiques.

Cette partie est celle où l'on apprend à faire tourner la machine. Elle a la forme d'une recette suivie de quatre exemples, et il serait tentant de la lire comme un catalogue. Ce serait dommage, car les quatre exemples racontent une progression&nbsp;: chacun naît d'un manque du précédent.


<b>Le fil de cette partie&nbsp;:</b>
<ul style="margin-top:1em; margin-bottom:1em;">
<li>Le <b><a href="./#champ-scalaire-réel-le-laboratoire">champ scalaire réel</a></b> nous sert de laboratoire pour roder la recette. Il livre une théorie parfaitement satisfaisante, mais dans laquelle chaque particule est sa propre antiparticule, et donc dans laquelle aucune charge n'a de sens.</li>
<li>Le <b><a href="./#champ-scalaire-réel-le-laboratoire">champ scalaire complexe</a></b> répond à ce manque. Sa symétrie interne fournit une charge conservée, et cette charge exige que les particules aillent par paires de signes opposés&nbsp;: les antiparticules apparaissent.</li>
<li>Sa <b><a href="./#limite-non-relativiste-le-prix-de-la-covariance">limite non relativiste</a></b> montre le prix à payer quand on renonce à la covariance, et offre en récompense la relation d'incertitude nombre-phase, qui est le socle de toute la physique de la matière condensée cohérente.</li>
<li>Le <b><a href="./#champ-à-plusieurs-composantes-généraliser-la-charge">champ à plusieurs composantes</a></b> généralise l'idée de charge&nbsp;: si une symétrie interne à un paramètre donne une charge, une symétrie à trois paramètres donne trois charges, et ces trois charges sont l'isospin.</li>
<li>Le <b><a href="./#champ-vectoriel-massif-quand-les-composantes-vivent-dans-minkowski">champ vectoriel massif</a></b> ajoute la dernière nouveauté de la partie&nbsp;: des composantes internes qui ne vivent plus dans un espace abstrait mais dans l'espace de Minkowski lui-même. Ce sont les polarisations.</li>
</ul>
Ce qui manquera encore à la fin, c'est le spin demi-entier. Il faudra pour cela un objet plus étrange que le scalaire et le vecteur, le spineur, et ce sera l'affaire d'une autre partie.

<br>

## La recette de la quantification canonique des champs

Pour obtenir une théorie quantique des champs à partir d'une théorie des champs classique, on suit toujours la même méthode&nbsp;:

<div id="theo">
<br>
<ul>
<li><b>Étape 1&nbsp;:</b> écrire la densité lagrangienne classique en termes de champs. C'est la partie créative, tout le reste est algorithmique.</li>
<li><b>Étape 2&nbsp;:</b> calculer la densité d'impulsion conjuguée, puis la densité hamiltonienne, toujours en termes de champs.</li>
<li><b>Étape 3&nbsp;:</b> promouvoir les champs et leurs densités d'impulsion au rang d'opérateurs, et leur imposer des relations de commutation. C'est <u>l'unique</u> étape où entre la mécanique quantique.</li>
<li><b>Étape 4&nbsp;:</b> décomposer les opérateurs champ en opérateurs de création et d'annihilation. C'est la diagonalisation&nbsp;: on passe d'un objet dont on ne sait pas ce qu'il fait à des objets dont on connaît l'action sur les états.</li>
<li><b>Étape 5&nbsp;:</b> mettre les opérateurs dans l'ordre normal pour se débarrasser des infinis de point zéro.</li>
</ul>
</div>

L'étape&nbsp;4 est la seule qui ne soit pas garantie de fonctionner. Décomposer en modes d'impulsion, c'est diagonaliser l'hamiltonien, et cela ne réussit que si celui-ci est <b>quadratique</b> en les champs et leurs dérivées. Les termes de couplage, eux, mélangent les modes et ruinent la diagonalisation.


<!-- FIGURE 1 (à redessiner) : schéma de flux de la recette, en cinq boîtes verticales reliées par des flèches vers le bas.
Boîte 1, étiquetée "classique" : la densité lagrangienne L(phi, d_mu phi).
Boîte 2, encore "classique" : la densité hamiltonienne H(phi, Pi).
Une ligne horizontale en pointillés sépare la boîte 2 de la boîte 3, avec la mention "frontière quantique" écrite le long de la ligne.
Boîte 3 : les champs coiffés d'un chapeau, avec le commutateur à temps égaux écrit dedans.
Boîte 4 : la décomposition en modes, avec la mention "diagonalisation" en légende à droite et, en petit, la condition "possible seulement si L est quadratique".
Boîte 5 : l'ordre normal, avec en légende à droite "recalage du zéro d'énergie".
Une flèche de retour, en pointillés, part de la boîte 5 vers la boîte 1, étiquetée "on recommence avec un autre champ".
-->

<br>

## Champ scalaire réel&nbsp;: le laboratoire

### Étapes&nbsp;1 et&nbsp;2&nbsp;: du lagrangien à l'hamiltonien

Le lagrangien le plus simple qu'on puisse écrire pour un champ à une seule composante réelle est&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}=\frac{1}{2}\left[\partial\_\mu \phi(x)\right]^2-\frac{1}{2} m^2[\phi(x)]^2
$$

</div>
</div>

La densité d'impulsion conjuguée se calcule comme en mécanique analytique, en dérivant par rapport à la vitesse généralisée&nbsp;:

<div id="grosseformule">

$$
\Pi^\mu(x)=\frac{\partial \mathcal{L}}{\partial\left(\partial\_\mu \phi(x)\right)}
$$

</div>

Ici, cela donne $\Pi^\mu(x)=\partial^\mu \phi(x)$, dont la composante temporelle $\Pi^0(x)=\pi(x)=\partial^0 \phi(x)$ est celle qui jouera le rôle de l'impulsion (on utilise la métrique $(+,-,-,-)$).

L'hamiltonien s'obtient alors par la transformation de Legendre habituelle&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\mathcal{H}&=\Pi^0(x) \partial\_0 \phi(x)-\mathcal{L}\\\\
&=\partial^0 \phi(x) \partial\_0 \phi(x)-\mathcal{L}
\end{aligned}
$$

</div>

On obtient&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\mathcal{H}=\frac{1}{2}\left[\partial\_0 \phi(x)\right]^2+\frac{1}{2}[\nabla \phi(x)]^2+\frac{1}{2} m^2[\phi(x)]^2
$$

</div>
</div>

Cet hamiltonien est très mignon, et surtout très parlant. Ses trois termes sont trois façons de payer de l'énergie&nbsp;:

<ul>
<li>le premier est le coût d'une <b>variation temporelle</b> du champ, l'analogue exact de l'énergie cinétique&nbsp;;</li>
<li>le deuxième est le coût d'une <b>variation spatiale</b>, celui qui pénalise les champs bosselés et qui assure que l'excitation se propage au lieu de rester sur place&nbsp;;</li>
<li>le troisième est le coût d'avoir <b>un champ plutôt que rien</b>, et c'est lui que l'on appelle le terme de masse.</li>
</ul>

Le terme de masse est le seul des trois qui ne contienne aucune dérivée. C'est exactement pour cette raison qu'il pénalise l'amplitude du champ en elle-même, et donc que $m$ finira par apparaître comme le seuil d'énergie en dessous duquel aucune excitation n'existe.

<!-- FIGURE 2 (à redessiner) : les trois coûts énergétiques de la densité hamiltonienne.
Trois vignettes côte à côte, chacune montrant le profil d'un champ phi(x) tracé sur un axe horizontal x, avec la valeur zéro en trait pointillé.
Vignette de gauche, titrée "coût temporel" : un profil plat mais dessiné deux fois, à deux hauteurs différentes, relié par une flèche verticale double étiquetée d_0 phi ; la légende indique "le champ bouge dans le temps".
Vignette du milieu, titrée "coût de gradient" : un profil en forme de bosse étroite, avec des flèches obliques indiquant la pente sur ses flancs, étiquetées grad phi ; légende "le champ est bosselé dans l'espace".
Vignette de droite, titrée "coût de masse" : un profil plat mais décalé vers le haut, tout entier au-dessus du pointillé, avec une flèche verticale de la valeur zéro jusqu'au profil étiquetée phi ; légende "le champ est non nul, même immobile et uniforme".
-->

<br>

### Étape&nbsp;3&nbsp;: le passage au quantique

On promeut les champs en opérateurs&nbsp;: $\phi(x) \rightarrow \hat{\phi}(x)$ et $\Pi^0(x) \rightarrow \hat{\Pi}^0(x)$. Puis, pour les rendre quantiques, on leur impose des relations de commutation. 

En mécanique quantique à une particule, on a $[\hat{x}, \hat{p}]=\mathrm{i} \hbar$. Par analogie, on définit le **commutateur à temps égaux** pour les opérateurs champ&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\left[\hat{\phi}(t, \boldsymbol{x}), \hat{\Pi}^0(t, \boldsymbol{y})\right]=\mathrm{i} \delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
$$

</div>
</div>

Les autres commutateurs sont nuls&nbsp;: $[\hat{\phi}(x), \hat{\phi}(y)]=\left[\hat{\Pi}^0(x), \hat{\Pi}^0(y)\right]=0$.

La distribution de Dirac qui apparaît à droite nous dit que le champ en un point et l'impulsion en un <u>autre</u> point commutent, c'est-à-dire que ce sont des degrés de liberté indépendants. Autrement dit, on vient de poser qu'un champ est un oscillateur quantique par point de l'espace, chacun ignorant les autres au moment de la quantification. Le couplage entre ces oscillateurs ne viendra pas des commutateurs mais du terme de gradient de l'hamiltonien.

Remarquons aussi que la relation est imposée <u>à temps égaux</u>. Cette restriction n'est pas un détail technique&nbsp;: exiger la même chose à des temps différents entrerait en conflit avec la causalité relativiste, et c'est en explorant les commutateurs à temps différents qu'on découvre plus tard les propagateurs.

Exprimée à partir de ces opérateurs, la densité hamiltonienne $\mathcal{H}$ se mue en opérateur $\hat{\mathcal{H}}$ agissant sur les vecteurs d'état. Mais nous voici bloqués&nbsp;: on ne sait pas comment un opérateur comme $\hat{\phi}(x)$ agit sur un état nombre d'occupation $|n\_1n\_2n\_3\ldots\rangle$. Par contre, on sait parfaitement comment les opérateurs de création et d'annihilation, eux, agissent sur ces vecteurs. D'où l'étape suivante.

<br>

### Étape&nbsp;4&nbsp;: la décomposition en modes

Revenons [au premier chapitre](../tqc1/#oscillcoup), au moment d'évoquer les oscillateurs couplés. En combinant la décomposition en modes de Fourier de $x\_j$, soit $x\_j=\frac{1}{\sqrt{N}} \sum\_k \tilde{x}\_k \mathrm{e}^{\mathrm{i}kj a}$, avec l'écriture de l'opérateur correspondant à un de ces modes en fonction des opérateurs de création et d'annihilation, soit $\hat{\tilde{x}}\_k=\sqrt{\frac{\hbar}{2 m \omega\_k}}\left(\hat{a}\_k+\hat{a}\_{-k}^{\dagger}\right)$, on obtenait&nbsp;:

<div id="grosseformule">
 
 $$
 \hat{x}\_j=\left(\frac{\hbar}{m}\right)^{\frac{1}{2}} \sum\_k \frac{1}{\left(2 \omega\_k N\right)^{\frac{1}{2}}}\left[\hat{a}\_k \mathrm{e}^{\mathrm{i} k j a}+\hat{a}\_k^{\dagger} \mathrm{e}^{-\mathrm{i} k j a}\right]
 $$
 
 </div>

Le passage au champ continu consiste à remplacer l'indice discret $j$ par la variable continue $\boldsymbol{x}$, et la somme sur les modes par une intégrale. On écrit donc la version continue de cet opérateur&nbsp;:

<div id="grosseformule">

$$
\hat{\phi}(\boldsymbol{x})=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\hat{a}\_{\boldsymbol{p}} \mathrm{e}^{\mathrm{i} \boldsymbol{p} \cdot \boldsymbol{x}}+\hat{a}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{-\mathrm{i} \boldsymbol{p} \cdot \boldsymbol{x}}\right)
$$

</div>

où on est passé de $\boldsymbol{k}$ à $\boldsymbol{p}$ pour les moments, et de $\omega\_{\boldsymbol{k}}$ à $E\_\boldsymbol{p}=\left(\boldsymbol{p}^2+m^2\right)^{\frac{1}{2}}$ pour l'énergie. Comme dans le cas discret, les opérateurs de création et d'annihilation obéissent à $\left[\hat{a}\_{\boldsymbol{p}}, \hat{a}\_{\boldsymbol{q}}^{\dagger}\right]=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$.

<!-- FIGURE 3 (à redessiner) : le passage du discret au continu.
Deux panneaux côte à côte, séparés par une grosse flèche horizontale étiquetée "limite a tend vers 0".
Panneau de gauche, titré "chaîne d'oscillateurs (partie 1)" : une rangée de six masses représentées par des disques, alignées horizontalement, reliées entre elles par des ressorts en zigzag ; sous chaque masse, un indice j, j+1, etc. ; la distance entre deux masses voisines est cotée a ; au-dessus d'une masse, une flèche verticale étiquetée x_j indique son déplacement.
Panneau de droite, titré "champ continu" : une courbe continue et lisse tracée au-dessus d'un axe horizontal x ; à une abscisse quelconque, une flèche verticale étiquetée phi(x) indique la valeur du champ ; sous l'axe, la mention "un oscillateur par point".
-->

{{%notice note%}}
L'ensemble des quadri-impulsions $p$ satisfaisant la relation de dispersion relativiste $p^2=m^2$ décrit ce qu'on appelle la "couche de masse" (mass shell en anglais). C'est l'équivalent dans l'espace de Minkowski de la sphère dans l'espace euclidien&nbsp;; elle forme un hyperboloïde de révolution.<br>
![](/massshell.png?width=400px)
En restreignant la mesure de Lebesgue $\frac{\mathrm{d}^4 p}{(2 \pi)^{4}}$ à la nappe d'énergie positive de cette couche, c'est-à-dire en intégrant contre $2\pi\\,\delta\left(p^2-m^2\right)\theta\left(p^0\right)$, on obtient la **mesure invariante de Lorentz** $\frac{\mathrm{d}^3 p}{(2 \pi)^{3}} \frac{1}{2 E\_{\boldsymbol{p}}}$.<br>
Attention à ne pas confondre cette mesure avec le facteur $\frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}$ qui apparaît dans la décomposition en modes&nbsp;: ce dernier en est en quelque sorte la racine carrée, et ce n'est qu'en le combinant avec la normalisation choisie pour les $\hat{a}\_{\boldsymbol{p}}$ que l'invariance de l'ensemble apparaît. Le sens de ces facteurs de normalisation est précisément ce que la vérification ci-dessous va confirmer.
{{%/notice%}}

Il reste à donner une dépendance temporelle à notre champ, autrement dit à le rendre dynamique. Appliquons pour cela la méthode de Heisenberg&nbsp;:

<div id="grosseformule">

$$
\hat{\phi}(x)=\hat{\phi}(t, \boldsymbol{x})=\hat{U}^{\dagger}(t, 0) \hat{\phi}(\boldsymbol{x}) \hat{U}(t, 0)=\mathrm{e}^{\mathrm{i} \hat{H} t} \hat{\phi}(\boldsymbol{x}) \mathrm{e}^{-\mathrm{i} \hat{H} t}
$$

</div>

Seuls les opérateurs de création et d'annihilation sont affectés par l'opérateur d'évolution $\hat{U}(t, 0)=\mathrm{e}^{-\mathrm{i} \hat{H} t}$&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\hat{U}^{\dagger}(t, 0) \hat{a}\_{\boldsymbol{p}} \hat{U}(t, 0)&=\mathrm{e}^{-\mathrm{i} E\_p t} \hat{a}\_{\boldsymbol{p}}\\\\
\hat{U}^{\dagger}(t, 0) \hat{a}^\dagger\_{\boldsymbol{p}} \hat{U}(t, 0)&=\mathrm{e}^{\mathrm{i} E\_p t} \hat{a}^\dagger\_{\boldsymbol{p}}
\end{aligned}
$$

</div>

<div id="preuve">

<details>
<summary>Preuve&nbsp;:</summary>

On encadre l'opérateur d'annihilation entre deux exponentielles de l'hamiltonien, et comme celui-ci est diagonal dans la base des états nombre d'occupation, chaque exponentielle se contente de produire un nombre.

Prenons un état à trois modes peuplés et suivons les phases&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
& \mathrm{e}^{\mathrm{i} \hat{H} t} \hat{a}\_{\boldsymbol{q}} \mathrm{e}^{-\mathrm{i} \hat{H} t}\left|n\_{\boldsymbol{p}} n\_{\boldsymbol{q}} n\_{\boldsymbol{r}}\right\rangle \\\\
= & \mathrm{e}^{-\mathrm{i}\left(n\_{\boldsymbol{p}} E\_{\boldsymbol{p}}+n\_{\boldsymbol{q}} E\_{\boldsymbol{q}}+n\_{\boldsymbol{r}} E\_{\boldsymbol{r}}\right) t}\\, \mathrm{e}^{\mathrm{i} \hat{H} t} \hat{a}\_{\boldsymbol{q}}\left|n\_{\boldsymbol{p}} n\_{\boldsymbol{q}} n\_{\boldsymbol{r}}\right\rangle \\\\
= & \sqrt{n\_{\boldsymbol{q}}}\\, \mathrm{e}^{-\mathrm{i}\left(n\_{\boldsymbol{p}} E\_{\boldsymbol{p}}+n\_{\boldsymbol{q}} E\_{\boldsymbol{q}}+n\_{\boldsymbol{r}} E\_{\boldsymbol{r}}\right) t} \mathrm{e}^{\mathrm{i}\left(n\_{\boldsymbol{p}} E\_{\boldsymbol{p}}+\left(n\_{\boldsymbol{q}}-1\right) E\_{\boldsymbol{q}}+n\_{\boldsymbol{r}} E\_{\boldsymbol{r}}\right) t}\left|n\_{\boldsymbol{p}}\left(n\_{\boldsymbol{q}}-1\right) n\_{\boldsymbol{r}}\right\rangle \\\\
= & \mathrm{e}^{-\mathrm{i} E\_{\boldsymbol{q}} t}\\, \sqrt{n\_{\boldsymbol{q}}}\left|n\_{\boldsymbol{p}}\left(n\_{\boldsymbol{q}}-1\right) n\_{\boldsymbol{r}}\right\rangle
\end{aligned}
$$

</div>

Toutes les énergies se télescopent, sauf celle du mode que l'opérateur a effectivement vidé. Avec $\hat{a}\_\boldsymbol{q}$ seul, on aurait obtenu $\sqrt{n\_{\boldsymbol{q}}}\left|n\_{\boldsymbol{p}}\left(n\_{\boldsymbol{q}}-1\right) n\_{\boldsymbol{r}}\right\rangle$&nbsp;: rendre l'opérateur dynamique a simplement multiplié le résultat par $\mathrm{e}^{-\mathrm{i}E\_\boldsymbol{q}t}$.

En combinant cette phase temporelle avec la phase spatiale déjà présente dans la décomposition, on obtient une exponentielle manifestement covariante&nbsp;:

<div id="grosseformule">
 
 $$
 \hat{a}\_{\boldsymbol{q}} \mathrm{e}^{-\mathrm{i}\left(E\_{\boldsymbol{q}} t-\boldsymbol{q} \cdot \boldsymbol{x}\right)}=\hat{a}\_{\boldsymbol{q}} \mathrm{e}^{-\mathrm{i} q \cdot x}
 $$
 
 </div>

C'est le résultat qui rend la formule finale lisible&nbsp;: les quadrivecteurs y apparaissent contractés, alors que rien dans la construction ne l'imposait a priori.

</details>

</div>

Au final, la **décomposition en modes** du champ scalaire est donnée par&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\hat{\phi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\hat{a}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{a}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$$

<p style="text-align:center;">avec $E_{\boldsymbol{p}}=+\left(\boldsymbol{p}^2+m^2\right)^{\frac{1}{2}}$</p>

</div>

</div>

Le champ, objet a priori mystérieux, s'est dissous en une superposition d'oscillateurs indépendants, un par impulsion. Chaque oscillateur contribue par deux termes, l'un qui détruit une excitation et l'autre qui en crée une. La racine de $E\_{\boldsymbol{p}}$ au dénominateur assure la compatibilité avec le commutateur imposé à l'étape&nbsp;3, comme le montre la vérification suivante.

La décomposition du champ nous offre en prime celle de sa densité d'impulsion, puisque $\Pi^\mu(x)=\partial^\mu \phi(x)$.

<div id="preuve">

<details>
<summary>Vérification des facteurs de normalisation&nbsp;:</summary>

La dérivation de la décomposition en modes fait sortir un facteur $-\mathrm{i}p^\mu$ des exponentielles, avec un changement de signe relatif entre les deux termes&nbsp;:

<div id="grosseformule">

$$
\hat{\Pi}\^\mu(x)=\partial^\mu \hat{\phi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}\left(2 E\_\boldsymbol{p}\right)^{\frac{1}{2}}}\left(-\mathrm{i} p^\mu\right)\left(\hat{a}\_\boldsymbol{p} \mathrm{e}^{-\mathrm{i} p \cdot x}-\hat{a}\_\boldsymbol{p}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$$

</div>

Pour la composante temporelle, ce facteur vaut simplement $-\mathrm{i}E\_{\boldsymbol{p}}$. Le point important est que l'opérateur champ porte $1/\sqrt{2E\_{\boldsymbol{p}}}$ alors que sa densité d'impulsion porte $\sqrt{E\_{\boldsymbol{p}}/2}$&nbsp;: dans le commutateur des deux, les énergies vont donc se compenser exactement.

En développant ce commutateur, seuls survivent les termes croisés $[\hat{a}\_{\boldsymbol{p}}, \hat{a}\_{\boldsymbol{q}}^{\dagger}]$ et $[\hat{a}\_{\boldsymbol{p}}^{\dagger}, \hat{a}\_{\boldsymbol{q}}]$, chacun proportionnel à $\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$. Cette distribution force $E\_{\boldsymbol{p}}=E\_{\boldsymbol{q}}$, ce qui annule les phases temporelles (nous sommes à temps égaux) et réduit le préfacteur $\frac{1}{2}\sqrt{E\_{\boldsymbol{q}}/E\_{\boldsymbol{p}}}$ à $\frac{1}{2}$. Il ne reste alors qu'à intégrer sur $\boldsymbol{q}$&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\left[\hat{\phi}(\boldsymbol{x},t),\hat{\Pi}\^0(\boldsymbol{y},t)\right]&=\frac{\mathrm{i}}{2}\int\frac{\mathrm{d}^3 p } {(2 \pi)^{3}}\mathrm{e}^{\mathrm{i} \boldsymbol{p} \cdot (\boldsymbol{x}-\boldsymbol{y})} +\frac{\mathrm{i}}{2}\int\frac{\mathrm{d}^3 p } {(2 \pi)^{3}}\mathrm{e}^{-\mathrm{i} \boldsymbol{p} \cdot (\boldsymbol{x}-\boldsymbol{y})}\\\\
&=\mathrm{i}\\,\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
\end{aligned}
$$

</div>

Les deux intégrales sont deux écritures de la même distribution de Dirac, et les deux facteurs $\frac{1}{2}$ se recombinent en un.

Moralité&nbsp;: les facteurs de normalisation de la décomposition en modes sont exactement ceux qui font que le commutateur postulé à l'étape&nbsp;3 est retrouvé à l'étape&nbsp;4.

</details>

</div>

<br>

### Une énergie du vide infinie

Au tour de l'hamiltonien de subir la quantification. Il suffit d'y substituer la décomposition en modes de $\hat{\phi}(x)$, ce qui est laborieux mais sans surprise.

<div id="preuve">

<details>
<summary>Déroulement du calcul&nbsp;:</summary>

Le point de départ est l'intégrale sur le volume de la densité hamiltonienne&nbsp;:

<div id="grosseformule">

$$
\hat{H}=\int \mathrm{d}^3 x \frac{1}{2}\left\\{\left[\partial\_0 \hat{\phi}(x)\right]^2+[\boldsymbol{\nabla} \hat{\phi}(x)]^2+m^2[\hat{\phi}(x)]^2\right\\}
$$

</div>

On y injecte trois décompositions&nbsp;: celle de $\partial\_0\hat{\phi}$, qui fait sortir un facteur $-\mathrm{i}E\_{\boldsymbol{p}}$, celle de $\boldsymbol{\nabla}\hat{\phi}$, qui fait sortir $\mathrm{i}\boldsymbol{p}$, et celle de $\hat{\phi}$ lui-même. Chaque terme devient une intégrale double sur deux impulsions $\boldsymbol{p}$ et $\boldsymbol{q}$, avec quatre produits d'opérateurs.

Trois simplifications successives font tout le travail, et ce sont les seules étapes qui méritent l'attention&nbsp;:

<ul>
<li>l'<b>intégration sur $x$</b> utilise $\int \mathrm{d}^3 x \mathrm{e}^{\mathrm{i} \boldsymbol{p} \cdot \boldsymbol{x}}=(2 \pi)^3 \delta^{(3)}(\boldsymbol{p})$. Elle fait apparaître $\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$ devant les termes du type $\hat{a}^\dagger \hat{a}$, et $\delta^{(3)}(\boldsymbol{p}+\boldsymbol{q})$ devant ceux du type $\hat{a}\hat{a}$ ou $\hat{a}^\dagger\hat{a}^\dagger$&nbsp;;</li>
<li>l'<b>intégration sur $q$</b> consomme ces distributions. Les termes en $\hat{a}\hat{a}$ et $\hat{a}^\dagger\hat{a}^\dagger$ se retrouvent alors affectés du coefficient $\left(-E_{\boldsymbol{p}}^2+\boldsymbol{p}^2+m^2\right)$&nbsp;;</li>
<li>la <b>relation de dispersion</b> $E_{\boldsymbol{p}}^2=\boldsymbol{p}^2+m^2$ annule précisément ce coefficient. Les termes qui auraient créé ou détruit deux excitations d'un coup disparaissent donc, et c'est heureux&nbsp;: leur présence signifierait que l'hamiltonien ne conserve pas le nombre de particules, dans une théorie sans interaction.</li>
</ul>

Il ne survit que&nbsp;:

<div id="grosseformule">

$$
\hat{H}=\frac{1}{2} \int \mathrm{~d}^3 p\\, E\_{\boldsymbol{p}}\left(\hat{a}\_{\boldsymbol{p}} \hat{a}\_{\boldsymbol{p}}^{\dagger}+\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}\right)
$$

</div>

et il ne reste qu'à échanger l'ordre du premier produit avec $\left[\hat{a}\_{\boldsymbol{p}}, \hat{a}\_{\boldsymbol{q}}^{\dagger}\right]=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$.

</details>

</div>

On obtient&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\hat{H}=\int \mathrm{d}^3 p \\,E\_{\boldsymbol{p}}\left(\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}+\frac{1}{2} \delta^{(3)}(0)\right)
$$

</div>
</div>

Le premier terme est exactement ce qu'on espérait&nbsp;: une énergie $E\_{\boldsymbol{p}}$ par excitation présente. Le second, lui, ne dépend d'aucun état et vaut donc même dans le vide&nbsp;:

<div id="grosseformule">

$$
\langle0|\hat{H}|0\rangle = \frac{1}{2} \int \mathrm{~d}^3 p \\, E\_{\boldsymbol{p}}\\,\delta^{(3)}(0)
$$

</div>

Une énergie infinie pour le vide 😱<br>
Séparons les deux infinis différents qui se cachent dans cette expression&nbsp;:

<ul>
<li>le facteur $\delta^{(3)}(0)$ vaut $\frac{V}{(2\pi)^3}$, où $V$ est le volume de l'espace. Il diverge parce qu'on a pris un volume infini, et il disparaît dès qu'on raisonne en <b>densité</b> d'énergie plutôt qu'en énergie&nbsp;;</li>
<li>l'intégrale $\int \mathrm{d}^3 p \, E_{\boldsymbol{p}}$ diverge, elle, parce qu'on somme les demi-énergies de point zéro d'une infinité de modes de plus en plus énergétiques. C'est une divergence de courtes longueurs d'onde, et c'est la première rencontre avec ce qu'on appellera plus tard une divergence <b>ultraviolette</b>.</li>
</ul>

Rien de tout cela n'est alarmant si l'on se souvient que seul le mesurable nous intéresse. Or on ne mesure jamais que des différences d'énergie, et ces différences ont le bon goût de faire disparaître ce terme constant. L'infini obtenu ne signale finalement qu'une mauvaise définition du niveau zéro.

Malgré tout, ces infinis qui traînent partout, cela fait désordre. En ordonnant savamment les opérateurs, on va pouvoir les glisser discrètement sous le tapis.

{{%notice note%}}
Le terme constant devient en revanche un gros (!) problème lorsqu'on essaie de réconcilier théorie quantique des champs et relativité générale. Dans cette dernière, ce ne sont plus les différences d'énergie qui importent&nbsp;: le tenseur énergie-impulsion figure directement au second membre des équations d'Einstein, et une densité d'énergie du vide y agit comme une constante cosmologique.<br>
C'est le "**problème de la constante cosmologique**"&nbsp;: en coupant l'intégrale divergente à l'échelle de Planck, la densité d'énergie du vide prévue dépasse la valeur observée de quelque $10^{120}$ 😵‍💫 ordres de grandeur (facile la pire prédiction jamais faite en physique)...
{{%/notice%}}

<br>

### Étape&nbsp;5&nbsp;: l'ordre normal

L'**ordre normal** consiste simplement à placer tous les opérateurs de création à gauche.

C'est sans douleur pour les champs de Bose, mais pour ceux de Fermi, on doit multiplier par un terme $(-1)^P$ où $P$ est le nombre de permutations nécessaires pour obtenir l'ordre normal.

<div id="preuve">

Exemples&nbsp;:

$\color{#D41876 }N\left[\color{#000 }\hat{a} \hat{a}^{\dagger}\color{#D41876 }\right]\color{#000 }=\hat{a}^{\dagger} \hat{a}$, $\color{#D41876 }N\left[\color{#000 }\hat{a}^{\dagger} \hat{a}\color{#D41876 }\right]\color{#000 }=\hat{a}^{\dagger} \hat{a}$, $\color{#D41876 }N\left[\color{#000 }\hat{a}^{\dagger} \hat{a} \hat{a} \hat{a}^{\dagger} \hat{a}^{\dagger}\color{#D41876 }\right]\color{#000 }=\hat{a}^{\dagger} \hat{a}^{\dagger} \hat{a}^{\dagger} \hat{a} \hat{a}$, $\color{#D41876 }N[\color{#000 }\hat{a}\_{\boldsymbol{p}} \hat{a}\_{\boldsymbol{q}}^{\dagger} \hat{a}\_{\boldsymbol{r}}\color{#D41876 }]\color{#000 }=\hat{a}\_{\boldsymbol{q}}^{\dagger} \hat{a}\_{\boldsymbol{p}} \hat{a}\_{\boldsymbol{r}}$, $\color{#D41876 }N[\color{#000 }\hat{c}\_{\boldsymbol{p}} \hat{c}\_{\boldsymbol{q}}^{\dagger} \hat{c}\_r\color{#D41876 }]\color{#000 }=-\hat{c}\_{\boldsymbol{q}}^{\dagger} \hat{c}\_{\boldsymbol{p}} \hat{c}\_r$.

</div>

L'ordre normal n'est pas une astuce de calcul, c'est une **prescription**&nbsp;: on décide que l'hamiltonien de la théorie est $N[\hat{H}]$ plutôt que $\hat{H}$, ce qui revient à recaler le zéro d'énergie. C'est légitime précisément parce que le terme retiré est une constante, indépendante de l'état.

Appliquons-la&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\color{#D41876 }N[\color{#000 }\hat{H}\color{#D41876 }] \color{#000 }& =\frac{1}{2} \int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}} \\,\color{#D41876 }N\left[\color{#000 }\hat{a}\_{\boldsymbol{p}} \hat{a}\_{\boldsymbol{p}}^{\dagger}+\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}\color{#D41876 }\right] \\\\
& =\frac{1}{2} \int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}}\\, 2 \hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}
\end{aligned}
$$

</div>

D'où&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\color{#D41876 }N[\color{#000 }\hat{H}\color{#D41876 }] \color{#000 }=\int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}} \hat{n}\_{\boldsymbol{p}}
$$

</div>
</div>

$\hat{n}\_{\boldsymbol{p}}=\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}$ est l'opérateur nombre&nbsp;: il compte les excitations présentes dans le mode d'impulsion $\boldsymbol{p}$.

Le niveau zéro a maintenant une énergie bien mieux définie&nbsp;:
<div id="grosseformule">

$$
\langle0|N[\hat{H}]|0\rangle = 0
$$

</div>

On retrouve ainsi le même hamiltonien que pour des particules indépendantes&nbsp;! Les états d'excitation du champ peuvent être vus comme des particules d'impulsion quantifiée. Ce sont des bosons de spin $S=0$, ce qui correspond bien à un champ <u>scalaire</u>.

<br>

### Ce que raconte la décomposition en modes

Regardons ce qu'il advient lorsqu'on fait agir l'opérateur champ sur le vide. Comme $\hat{a}\_{\boldsymbol{p}}^{\dagger}|0\rangle=|\boldsymbol{p}\rangle$ et que le terme d'annihilation ne survit pas, on a&nbsp;:

<div id="grosseformule">

$$
\hat{\phi}(x)|0\rangle=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}} \mathrm{e}^{\mathrm{i} p \cdot x}|\boldsymbol{p}\rangle
$$

</div>

Le champ appliqué au vide fabrique donc une superposition de modes sortants, ce qui est déjà une information physique&nbsp;: $\hat{\phi}(x)$ est l'opérateur qui crée une particule <u>en un point de l'espace-temps</u>, et cette particule localisée est nécessairement une superposition d'impulsions.

<div id="preuve">

Cherchons l'amplitude correspondant à un de ces états, avec la normalisation $\langle q|=(2 \pi)^{\frac{3}{2}}\left(2 E\_{\boldsymbol{q}}\right)^{\frac{1}{2}}\langle\boldsymbol{q}|$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle q| \hat{\phi}(x)|0\rangle=\int \mathrm{d}^3 p\, \mathrm{e}^{\mathrm{i} p \cdot x}\langle\boldsymbol{q} \mid \boldsymbol{p}\rangle=\int \mathrm{d}^3 p\, \mathrm{e}^{\mathrm{i} p \cdot x} \delta^{(3)}(\boldsymbol{q}-\boldsymbol{p})=\mathrm{e}^{\mathrm{i}\left(E_{\boldsymbol{q}} t-\boldsymbol{q} \cdot \boldsymbol{x}\right)}=\mathrm{e}^{\mathrm{i} q \cdot x}
$
</p>

$\mathrm{e}^{\mathrm{i} q \cdot x}$ est ainsi l'amplitude, dans le mode $q$, d'une particule scalaire créée au point $x$ de l'espace-temps. C'est une onde plane, et on retrouve donc au passage la fonction d'onde de la mécanique quantique élémentaire, mais désormais comme un <u>élément de matrice</u> d'un opérateur de champ, et non plus comme un objet fondamental.

</div>

Généralisons maintenant un peu la décomposition en modes, en autorisant les deux termes à porter des opérateurs distincts, $\hat{a}\_{\boldsymbol{p}}$ et $\hat{b}\_{\boldsymbol{p}}^{\dagger}$&nbsp;:

<div id="grosseformule">

$$
\hat{\phi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\hat{a}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{b}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$$

</div>

Cette écriture est celle qui colle à l'interprétation de Feynman des solutions d'énergie négative&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\phi(x) = \sum\_\boldsymbol{p}\left[
\begin{array}{c}
\text{annihilation d'une particule} \\\\
\text{incidente d'énergie positive }E\_\boldsymbol{p} \\\\
\end{array}
\right]
+ 
\sum\_\boldsymbol{p}\left[
\begin{array}{c}
\text{création d'une antiparticule} \\\\
\text{sortante d'énergie positive }E\_\boldsymbol{p}\\\\
\end{array}
\right]$$

</div>
</div>

Pour que cette lecture tienne, il faut que $\hat{a}\_{\boldsymbol{p}}$ annihile les particules et $\hat{a}\_{\boldsymbol{p}}^{\dagger}$ les crée, tandis que $\hat{b}\_{\boldsymbol{p}}$ annihile les antiparticules et $\hat{b}\_{\boldsymbol{p}}^{\dagger}$ les crée. Dans les deux cas, l'énergie vaut $E\_{\boldsymbol{p}}=+\left(\boldsymbol{p}^2+m^2\right)^{\frac{1}{2}}$&nbsp;: personne ne porte d'énergie négative, et c'est tout l'intérêt de la manœuvre. Ce qui portait le signe moins, c'est la fréquence de l'exponentielle, pas l'énergie de l'état.

Mais dans le cas du champ scalaire <u>réel</u>, l'opérateur $\hat{\phi}$ doit être hermitien, ce qui force $\hat{b}\_{\boldsymbol{p}}^{\dagger}=\hat{a}\_{\boldsymbol{p}}^{\dagger}$. Autrement dit, chaque particule est ici sa propre antiparticule, et la distinction que nous venons d'introduire s'effondre.

Voilà donc le manque qui va faire avancer l'histoire. Pour que particules et antiparticules soient réellement deux espèces différentes, il faut quelque chose qui les distingue, c'est-à-dire une grandeur conservée qu'elles portent avec des signes opposés. Il nous faut une <b>charge</b>, et pour cela il nous faut un champ qui ait une symétrie interne à offrir au théorème de Noether. Le champ scalaire réel, avec son unique composante, n'en a aucune.

<br>

## Champ scalaire complexe&nbsp;: pour avoir une charge

### Étape&nbsp;1&nbsp;: deux composantes, une phase

La façon la plus économique de se donner une symétrie interne consiste à prendre deux champs scalaires réels de même masse. Leur lagrangien n'est que la somme des deux&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}= \frac{1}{2}\left[\partial\_\mu \phi\_1(x)\right]^2-\frac{1}{2} m^2\left[\phi\_1(x)\right]^2  +\frac{1}{2}\left[\partial\_\mu \phi\_2(x)\right]^2-\frac{1}{2} m^2\left[\phi\_2(x)\right]^2
$$

</div>
</div>

L'égalité des deux masses est la clé de tout&nbsp;: c'est elle qui rend le lagrangien insensible aux rotations dans le plan $(\phi\_1, \phi\_2)$. Or une rotation dans un plan s'écrit plus commodément comme une multiplication par une phase, ce qui invite à regrouper les deux champs réels en un seul champ complexe&nbsp;:

<div id="grosseformule">

$$
\psi=\frac{1}{\sqrt{2}}\left[\phi\_1(x)+\mathrm{i} \phi\_2(x)\right] \qquad \psi^{\dagger}=\frac{1}{\sqrt{2}}\left[\phi\_1(x)-\mathrm{i} \phi\_2(x)\right]
$$

</div>

On obtient alors quasiment le lagrangien du champ scalaire réel, mais débarrassé des facteurs $\frac{1}{2}$&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}=\partial^\mu \psi^{\dagger}(x) \partial\_\mu \psi(x)-m^2 \psi^{\dagger}(x) \psi(x)
$$

</div>
</div>

Nous n'avons ajouté aucune physique, seulement changé de variables&nbsp;: $(\phi\_1,\phi\_2)$ et $(\psi,\psi^\dagger)$ décrivent le même système. Mais les nouvelles variables rendent la symétrie <b>manifeste</b>, et une symétrie manifeste est une charge conservée qu'on peut cueillir.

<br>

### Étapes&nbsp;2 à&nbsp;5&nbsp;: la recette, sans surprise

Chaque composante $\sigma$ du champ ($\sigma=\psi$ ou $\psi^\dagger$) possède sa propre densité d'impulsion, et l'on remarquera qu'elles sont croisées&nbsp;:

<div id="grosseformule">

$$
\Pi\_{\sigma=\psi}^0=\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \psi\right)}=\partial^0 \psi^{\dagger}
 \qquad \Pi\_{\sigma=\psi^{\dagger}}^0=\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \psi^{\dagger}\right)}=\partial^0 \psi
$$

</div>

La densité hamiltonienne s'obtient en sommant sur les deux composantes, $\mathcal{H}  =\sum\_\sigma \Pi\_\sigma^0(x) \partial\_0 \psi^\sigma(x)-\mathcal{L}$, ce qui donne après simplification&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\mathcal{H}=\partial\_0 \psi^{\dagger}(x) \partial\_0 \psi(x)+\nabla \psi^{\dagger}(x) \cdot \nabla \psi(x)+m^2 \psi^{\dagger}(x) \psi(x)
$$

</div>
</div>

On y retrouve les trois mêmes coûts énergétiques que pour le champ réel, à ceci près que les carrés sont devenus des modules.

On promeut ensuite les champs au rang d'opérateurs et on impose les commutateurs à temps égaux&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\left[\hat{\psi}(t, \boldsymbol{x}), \hat{\Pi}\_\psi^0(t, \boldsymbol{y})\right]=\left[\hat{\psi}^{\dagger}(t, \boldsymbol{x}), \hat{\Pi}\_{\psi^{\dagger}}^0(t, \boldsymbol{y})\right]=\mathrm{i} \delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
$$

</div>
</div>

Tous les autres commutateurs sont nuls. La décomposition en modes vient alors sans effort&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\begin{aligned}
\hat{\psi}(x) & =\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\hat{a}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{b}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right) \\\\
\hat{\psi}^{\dagger}(x) & =\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\hat{a}\_{\boldsymbol{p}}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}+\hat{b}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}\right)
\end{aligned}
$$

</div>
<p style="text-align:center;margin-top:-0.5em;">avec $E_\boldsymbol{p}=+\left(\boldsymbol{p}^2+m^2\right)^{\frac{1}{2}}$.</p>
</div>

Cette fois, rien ne force $\hat{b}$ à coïncider avec $\hat{a}$, car $\hat\psi$ n'est plus hermitien. Les opérateurs $\hat{a}\_{\boldsymbol{p}}$ et $\hat{b}\_{\boldsymbol{p}}$ annihilent donc deux types réellement distincts de particules, avec $\left[\hat{a}\_{\boldsymbol{p}}, \hat{a}\_{\boldsymbol{q}}^{\dagger}\right]=\left[\hat{b}\_{\boldsymbol{p}}, \hat{b}\_{\boldsymbol{q}}^{\dagger}\right]=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$, toute autre combinaison étant nulle.

En substituant dans l'hamiltonien et en ordonnant les opérateurs, on obtient&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\begin{aligned}
N[\hat{H}] & =\int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}}\left(\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}+\hat{b}\_{\boldsymbol{p}}^{\dagger} \hat{b}\_{\boldsymbol{p}}\right) \\\\
& =\int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}}\left(\hat{n}\_{\boldsymbol{p}}^{(a)}+\hat{n}\_{\boldsymbol{p}}^{(b)}\right)
\end{aligned}
$$

</div>
</div>

Les particules $a$ et $b$ ont donc exactement la même énergie $E\_\boldsymbol{p}$, et donc la même masse. Ce sont deux espèces distinctes mais indiscernables par l'hamiltonien, ce qui est la signature d'une paire particule-antiparticule. Il reste à trouver ce qui les distingue, et c'est le travail de Noether.

<br>

### La charge de Noether, ou pourquoi les antiparticules existent

Le champ scalaire complexe possède une **symétrie interne** $U(1)$, puisque les transformations globales suivantes laissent le lagrangien inchangé&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\psi \rightarrow \mathrm{e}^{\mathrm{i} \alpha} \psi, \quad \psi^{\dagger} \rightarrow \mathrm{e}^{-\mathrm{i} \alpha} \psi^{\dagger}
$$

</div>
</div>

Le mot «&nbsp;interne&nbsp;» signifie que la transformation ne touche pas au point $x$ de l'espace-temps&nbsp;: elle tourne le champ sur lui-même. Le mot «&nbsp;globale&nbsp;» signifie que $\alpha$ est la même partout.

Pour appliquer le théorème de Noether, on passe aux transformations infinitésimales&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\begin{array}{cc}
\psi \rightarrow \psi+\mathrm{i} \psi \delta \alpha, & D \psi=+\mathrm{i} \psi, \\\\
\psi^{\dagger} \rightarrow \psi^{\dagger}-\mathrm{i} \psi^{\dagger} \delta \alpha, & D \psi^{\dagger}=-\mathrm{i} \psi^{\dagger}
\end{array}
$$

</div>
</div>

<br>

<div id="preuve">

En substituant dans le lagrangien, chaque terme est un produit d'un objet en $\psi$ et d'un objet en $\psi^\dagger$&nbsp;:

$
\mathcal{L} \rightarrow \partial^\mu( \psi^{\dagger}-\mathrm{i} \psi^{\dagger} \delta \alpha)\partial\_\mu(\psi+\mathrm{i} \psi \delta \alpha) - m^2( \psi^{\dagger}-\mathrm{i} \psi^{\dagger} \delta \alpha)(\psi+\mathrm{i} \psi \delta \alpha)
$

Les deux phases opposées se compensent, et il ne reste qu'une correction du second ordre&nbsp;: $\mathcal{L} \rightarrow \mathcal{L} + \delta \alpha^2\mathcal{L}$. On a donc bien $D\mathcal{L}=0$ au premier ordre.

</div>

Comme $D\mathcal L=\partial\_\mu W^\mu$, cela implique ici $W^\mu = 0$, ce qui vaut pour toutes les symétries internes&nbsp;: par définition, elles ne modifient pas le lagrangien, pas même d'une divergence totale.

Le courant de Noether est alors donné par $J\_{\mathrm{N}}^\mu=\sum\_\sigma \Pi\_\sigma^\mu D \sigma$ (avec $\sigma=\psi$ ou $\psi^\dagger$)&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\begin{aligned}
J\_{\mathrm{N}}^\mu & =\sum\_\sigma \Pi\_\sigma^\mu D \sigma=\Pi\_\psi^\mu D \psi+\Pi\_{\psi^{\dagger}}^\mu D \psi^{\dagger} \\\\
& =\mathrm{i}\left[\left(\partial^\mu \psi^{\dagger}\right) \psi-\left(\partial^\mu \psi\right) \psi^{\dagger}\right]
\end{aligned}
$$

</div>
</div>

La charge conservée correspondante est l'intégrale de la composante temporelle du courant&nbsp;:

<div id="grosseformule">

$$
\hat{Q}\_{\mathrm{N}}=\int \mathrm{d}^3 x\\, \hat{J}\_{\mathrm{N}}^0=\int \mathrm{d}^3 x\\,\mathrm{i}\left[\left(\partial^0 \hat{\psi}^{\dagger}\right) \hat{\psi}-\left(\partial^0 \hat{\psi}\right) \hat{\psi}^{\dagger}\right]
$$

</div>

<div id="preuve">

<details>
<summary>Passage aux opérateurs nombre&nbsp;:</summary>

En injectant les décompositions en modes, on obtient une expression où les quatre produits possibles apparaissent&nbsp;:

<div id="grosseformule">

$$
\hat{Q}\_{\mathrm{N}}=\frac{1}{2} \int \mathrm{~d}^3 p\left(-\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}+\hat{b}\_{\boldsymbol{p}} \hat{b}\_{\boldsymbol{p}}^{\dagger}-\hat{a}\_{\boldsymbol{p}} \hat{a}\_{\boldsymbol{p}}^{\dagger}+\hat{b}\_{\boldsymbol{p}}^{\dagger} \hat{b}\_{\boldsymbol{p}}\right)
$$

</div>

Les opérateurs de type $a$ et ceux de type $b$ arrivent avec des <u>signes opposés</u>. Cela ne vient pas d'un choix de notation mais du signe relatif entre $D\psi = +\mathrm{i}\psi$ et $D\psi^\dagger = -\mathrm{i}\psi^\dagger$, c'est-à-dire du fait que la phase tourne dans un sens pour $\psi$ et dans l'autre pour $\psi^\dagger$.

L'ordre normal élimine ensuite les constantes issues des commutateurs&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
N\left[\hat{Q}\_{\mathrm{N}}\right]&=\int \mathrm{d}^3 p\left(\hat{b}\_{\boldsymbol{p}}^{\dagger} \hat{b}\_{\boldsymbol{p}}-\hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}\right)\\\\
&=\int \mathrm{d}^3 p\left(\hat{n}\_{\boldsymbol{p}}^{(b)}-\hat{n}\_{\boldsymbol{p}}^{(a)}\right)
\end{aligned}
$$

</div>

</details>

</div>

La charge conservée est donc la <u>différence</u> entre le nombre d'antiparticules et le nombre de particules&nbsp;! Chacune des deux espèces porte une charge de Noether de signe opposé, et c'est précisément cela qui les distingue enfin.

Inversons le raisonnement. Si une théorie possède une charge conservée, alors les processus autorisés ne peuvent pas créer une particule seule&nbsp;: il faut créer simultanément quelque chose qui porte la charge opposée. L'existence des antiparticules n'est donc pas un supplément exotique ajouté à la main, elle est <u>impliquée</u> par la conservation de la charge.

Une dernière précaution de vocabulaire. Si $J^\mu\_N$ est conservé, il en est de même de $-J^\mu\_N$&nbsp;: le choix de l'espèce qui porte la charge positive est arbitraire. Par convention, le courant nombre de particules $\hat{J}^\mu\_{Nc}$ («&nbsp;c&nbsp;» pour conventionnel) est défini positivement pour les particules et négativement pour les antiparticules. On pose donc $\hat{J}\_{\mathrm{Nc}}^\mu=-N\left[\hat{J}\_{\mathrm{N}}^\mu\right]$ et $\hat{Q}\_{\mathrm{Nc}}=-N\left[\hat{Q}\_{\mathrm{N}}\right]$, pour aboutir à&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\hat{Q}\_{\mathrm{Nc}}=\int \mathrm{d}^3 p\left(\hat{n}\_{\boldsymbol{p}}^{(a)}-\hat{n}\_{\boldsymbol{p}}^{(b)}\right)
$$

</div>
</div>

<br>

### Limite non relativiste&nbsp;: le prix de la covariance

Le champ scalaire complexe a un autre mérite&nbsp;: il permet de voir comment une théorie relativiste redevient une théorie de Schrödinger, et surtout ce qu'elle perd en route.

Dans le domaine non relativiste, les énergies d'excitation sont infimes devant l'énergie de masse&nbsp;: $E=mc^2+\varepsilon$ avec $\varepsilon\ll mc^2$. La stratégie consiste à factoriser explicitement le "gros" terme, celui qui oscille très vite, pour ne garder que la partie lente&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\phi(\boldsymbol{x}, t) \rightarrow \Psi(\boldsymbol{x}, t) \mathrm{e}^{-\mathrm{i} m c^2 t / \hbar}
$$

</div>
</div>

<br>

<div id="preuve">

<details>
<summary>Vérification sur l'équation de Klein&ndash;Gordon&nbsp;:</summary>

Injectons cette forme dans l'équation&nbsp;:
<div id="grosseformule">

$$
\left(\hbar^2 \frac{\partial^2}{\partial t^2}-\hbar^2 c^2 \nabla^2+m^2 c^4\right) \Psi(\boldsymbol{x}, t) \mathrm{e}^{-\mathrm{i} m c^2 t / \hbar}=0
$$

</div>

La dérivée seconde en temps produit trois termes&nbsp;:

<div id="grosseformule">

$$
\hbar^2 \frac{\partial^2}{\partial t^2} \Psi \mathrm{e}^{-\mathrm{i} m c^2 t / \hbar}=\hbar^2\left(\frac{\partial^2 \Psi}{\partial t^2}-\frac{2 \mathrm{i} m c^2}{\hbar} \frac{\partial \Psi}{\partial t}-\frac{m^2 c^4}{\hbar^2} \Psi\right) \mathrm{e}^{-\mathrm{i} m c^2 t / \hbar}
$$

</div>

Ce sont ces trois termes qui font tout le travail, et il faut regarder leur taille respective. Le troisième se télescope exactement avec le terme de masse de l'équation&nbsp;: c'est la raison d'être de la factorisation. Le deuxième, en $mc^2 \frac{\partial\Psi}{\partial t}$, porte un facteur $c^2$. Le premier n'en porte pas, et il est donc négligeable devant le deuxième dans la limite considérée. Il reste&nbsp;:

<div id="grosseformule">

$$
\mathrm{i} \hbar \frac{\partial}{\partial t} \Psi(\boldsymbol{x}, t)=-\frac{\hbar^2}{2 m} \nabla^2 \Psi(\boldsymbol{x}, t)
$$

</div>

On a retrouvé l'<b>équation de Schrödinger</b> d'une particule libre&nbsp;! Et l'on voit précisément ce qui a été jeté&nbsp;: la dérivée seconde en temps, c'est-à-dire l'ordre même qui donnait à Klein--Gordon sa symétrie entre espace et temps.

</details>

</div>

Faisons la même chose sur le lagrangien plutôt que sur l'équation, ce qui est plus puissant puisque cela nous donnera aussi les interactions. On pose (en unités naturelles) $\psi=\frac{1}{\sqrt{2 m}} \mathrm{e}^{-\mathrm{i} m t} \Psi$, où $1/\sqrt{2m}$ est un facteur de normalisation qui rendra le résultat élégant, et l'on part du lagrangien avec une interaction de contact&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}=\partial^\mu \psi^{\dagger}(x) \partial\_\mu \psi(x)-m^2 \psi^{\dagger}(x) \psi(x)-\lambda\left[\psi^{\dagger}(x) \psi(x)\right]^2
$$

</div>
</div>

Le terme temporel donne&nbsp;:

<div id="grosseformule">

$$
\partial\_0 \psi^{\dagger} \partial\_0 \psi=\frac{1}{2 m}\left[\partial\_0 \Psi^{\dagger} \partial\_0 \Psi+\mathrm{i} m\left(\Psi^{\dagger} \partial\_0 \Psi-\left(\partial\_0 \Psi^{\dagger}\right) \Psi\right)+m^2 \Psi^{\dagger} \Psi\right]
$$

</div>

Le premier terme, en $1/m$, est négligeable devant les autres, et le troisième se télescope avec le terme de masse du lagrangien. Toute la dynamique de la théorie s'est donc réfugiée dans le deuxième terme, celui qui ne contient qu'<u>une seule</u> dérivée temporelle.

Reste une subtilité de signe. En décomposant en ondes planes $\mathrm{e}^{-\mathrm{i}p\cdot x}$, la dérivée temporelle de $\Psi$ apporte un facteur $-\mathrm{i}E\_\boldsymbol{p}$ et celle de $\Psi^\dagger$ un facteur $+\mathrm{i}E\_\boldsymbol{p}$&nbsp;; les deux morceaux de la parenthèse sont alors égaux, et $(\Psi^{\dagger} \partial\_0 \Psi-\Psi \partial\_0 \Psi^{\dagger})$ peut être remplacé par $2 \Psi^{\dagger} \partial\_0 \Psi$. On aurait tout aussi bien pu choisir la décomposition en $\mathrm{e}^{+\mathrm{i}p\cdot x}$ et obtenir $-2 \Psi^{\dagger} \partial\_0 \Psi$. C'est donc <u>nous</u> qui décidons ici de favoriser la matière au détriment de l'antimatière.

On obtient au final&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\mathcal{L}=\mathrm{i} \Psi^{\dagger}(x) \partial\_0 \Psi(x)-\frac{1}{2 m} \boldsymbol{\nabla} \Psi^{\dagger}(x) \cdot \nabla \Psi(x)-\frac{g}{2}\left[\Psi^{\dagger}(x) \Psi(x)\right]^2
$$

</div>
<p style="text-align:center;margin-top:-0.5em;">avec $g=\lambda/2m^2$</p>

</div>

Ce lagrangien est celui de la matière condensée. Il contient une seule dérivée en temps contre deux en espace&nbsp;: l'asymétrie que nous avons injectée en choisissant la matière lui a fait perdre sa belle covariance relativiste. Ce n'est pas un défaut, c'est le contenu physique de l'approximation&nbsp;: dans un monde où l'on ne crée jamais de paires, il n'y a plus de raison que le temps et l'espace se ressemblent.

<div id="preuve">

<details>
<summary>La recette sur ce lagrangien non relativiste&nbsp;:</summary>

<b>Étape 1&nbsp;:</b> plutôt que l'interaction de contact, prenons un potentiel extérieur, ce qui donnera un hamiltonien reconnaissable&nbsp;:

<div id="grosseformule">

$$
\mathcal{L}=\mathrm{i} \Psi^{\dagger}(x) \partial\_0 \Psi(x)-\frac{1}{2 m} \nabla \Psi^{\dagger}(x) \cdot \nabla \Psi(x)-V(x) \Psi^{\dagger}(x) \Psi(x)
$$

</div>

Les équations d'Euler--Lagrange redonnent logiquement l'équation de Schrödinger et, pour $V(x)=0$, la relation de dispersion $E\_\boldsymbol{p}=\frac{\boldsymbol{p}^2}{2 m}$. Comme il n'y a plus que des énergies positives, on n'aura pas besoin de fréquences négatives dans la décomposition en modes.

<b>Étape 2&nbsp;:</b> les densités d'impulsion réservent une surprise&nbsp;:

<div id="grosseformule">

$$
\Pi\_{\Psi}^0=\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \Psi\right)}=\mathrm{i} \Psi^{\dagger} \qquad \Pi\_{\Psi^{\dagger}}^0=\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \Psi^{\dagger}\right)}=0
$$

</div>

Le champ $\Psi^\dagger$ n'a pas de moment conjugué, ce qui découle directement de notre choix de favoriser la matière&nbsp;: le lagrangien ne contient plus $\partial\_0\Psi^\dagger$. Autrement dit, $\Psi$ et $\Psi^\dagger$ ne sont plus deux champs indépendants&nbsp;; $\Psi^\dagger$ <u>est</u> l'impulsion conjuguée de $\Psi$, à un facteur $\mathrm{i}$ près. L'espace des phases a été divisé par deux, ce qui est cohérent&nbsp;: on a renoncé à la moitié des solutions, celles d'antimatière.

La densité hamiltonienne s'ensuit&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\mathcal{H} & =\Pi\_{\Psi}^0 \partial\_0 \Psi-\mathcal{L} \\\\
& =\frac{1}{2 m} \nabla \Psi^{\dagger}(x) \cdot \nabla \Psi(x)+V(x) \Psi^{\dagger}(x) \Psi(x)
\end{aligned}
$$

</div>

Une densité à la Schrödinger, avec son énergie cinétique et son énergie potentielle.

<b>Étape 3&nbsp;:</b> les commutateurs à temps égaux prennent une forme particulièrement simple, justement parce que $\Pi^0\_\Psi = \mathrm{i}\Psi^\dagger$&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
{\left[\hat{\Psi}(t, \boldsymbol{x}), \hat{\Pi}\_{\Psi}^0(t, \boldsymbol{y})\right] } & =\mathrm{i} \delta^{(3)}(\boldsymbol{x}-\boldsymbol{y}) \\\\
{\left[\hat{\Psi}(t, \boldsymbol{x}), \hat{\Psi}^{\dagger}(t, \boldsymbol{y})\right] } & =\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
\end{aligned}
$$

</div>

La seconde ligne est la relation familière de la seconde quantification en matière condensée.

<b>Étape 4&nbsp;:</b> une décomposition à fréquences positives <u>et</u> négatives ne respecterait pas cette relation. La décomposition idoine ne garde donc qu'un seul terme&nbsp;:

<div id="grosseformule">

$$
\hat{\Psi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \hat{a}\_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i} p \cdot x}
$$

</div>

<p style="text-align:center;margin-top:-0.5em;">avec $E_{\boldsymbol{p}}=\frac{\boldsymbol{p}^2}{2 m}$</p>

On remarquera au passage la disparition du facteur $1/\sqrt{2E\_\boldsymbol{p}}$&nbsp;: il n'avait de raison d'être que pour assurer l'invariance de Lorentz, à laquelle nous venons de renoncer.

<b>Étape 5&nbsp;:</b> en substituant dans l'hamiltonien, en se plaçant à un instant fixé pour ne pas s'encombrer des phases d'évolution, et en posant $\tilde{V}(\boldsymbol{p}-\boldsymbol{q})=\int \frac{\mathrm{d}^3 x}{(2 \pi)^3} V(\boldsymbol{x}) \mathrm{e}^{-\mathrm{i}(\boldsymbol{p}-\boldsymbol{q}) \cdot \boldsymbol{x}}$, on obtient&nbsp;:

<div id="grosseformule">

$$
\hat{H}=\int \mathrm{d}^3 p\left(\frac{\boldsymbol{p}^2}{2 m} \hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{p}}\right)+\int \mathrm{d}^3 p \mathrm{~d}^3 q\left(\tilde{V}(\boldsymbol{p}-\boldsymbol{q}) \hat{a}\_{\boldsymbol{p}}^{\dagger} \hat{a}\_{\boldsymbol{q}}\right)
$$

</div>

On retrouve un hamiltonien très ressemblant <a href="../tqc1/#hamiltonien">à celui prévu</a> pour les systèmes discrets. Et l'on constate, comme annoncé au début de cette partie, que la partie potentielle n'est pas diagonale&nbsp;: elle relie deux impulsions différentes $\boldsymbol{p}$ et $\boldsymbol{q}$, et c'est exactement en ce sens que le couplage empêche la diagonalisation.

</details>

</div>

<br>

### La relation nombre-phase

Le champ scalaire complexe non relativiste conserve sa symétrie $U(1)$, ce qui autorise un autre jeu de variables, particulièrement adapté aux systèmes cohérents&nbsp;: l'amplitude et la phase.

<div id="def">
<div id="grosseformule">

$$
\Psi(x)=\sqrt{\rho(x)} \mathrm{e}^{\mathrm{i} \theta(x)}
$$

</div>
</div>

Nous sommes ainsi passés des deux champs $\phi\_1(x)$ et $\phi\_2(x)$ aux deux nouveaux champs $\rho(x)$ et $\theta(x)$, et la transformation de $U(1)$ s'écrit maintenant de la façon la plus simple imaginable&nbsp;: $\theta\rightarrow\theta+\alpha$. C'est une translation de la phase, et $\rho$ n'y participe pas.

<b>Étape 1&nbsp;:</b> en substituant dans le lagrangien, on obtient&nbsp;:
<div id="grosseformule">

$$
\mathcal{L}=\frac{\mathrm{i}}{2} \partial\_0 \rho-\rho \partial\_0 \theta-\frac{1}{2 m}\left[\frac{1}{4 \rho}(\boldsymbol{\nabla} \rho)^2+\rho(\boldsymbol{\nabla} \theta)^2\right]-\frac{g}{2} \rho^2
$$

</div>

Le premier terme est une dérivée totale en temps&nbsp;: il ne contribue pas aux équations du mouvement et l'on peut l'oublier sans dommage. C'est d'ailleurs pourquoi la densité d'impulsion conjuguée à $\rho$, que nous allons trouver constante, est sans conséquence physique.

Éteignons maintenant les interactions ($g=0$) pour aller au résultat.

<b>Étape 2&nbsp;:</b> les densités d'impulsion sont&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\Pi\_\rho^0(x) & =\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \rho(x)\right)}=\frac{\mathrm{i}}{2} \\\\
\Pi\_\theta^0(x) & =\frac{\partial \mathcal{L}}{\partial\left(\partial\_0 \theta(x)\right)}=-\rho(x)
\end{aligned}
$$

</div>

La seconde ligne nous dit que <b>la densité d'impulsion conjuguée à la phase est la densité de particules</b>. Le couple canonique de cette théorie n'est donc pas position-impulsion, c'est phase-densité.

<b>Étape 3&nbsp;:</b> on impose alors les relations de commutation habituelles à ce couple&nbsp;:

<div id="grosseformule">

$$
\left[\hat{\theta}(\boldsymbol{x}, t), \hat{\Pi}\_\theta^0(\boldsymbol{y}, t)\right]=-[\hat{\theta}(\boldsymbol{x}, t), \hat{\rho}(\boldsymbol{y}, t)]=\mathrm{i} \delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
$$

</div>

<div id="preuve">

<details>
<summary>Ce que dit Noether dans ces variables&nbsp;:</summary>

La transformation étant $\theta\rightarrow\theta+\alpha$, on a $D\theta = \left.\frac{\partial \theta}{\partial \alpha}\right|\_{\alpha\rightarrow 0}=1$, ce qui est aussi simple qu'on pouvait l'espérer.

$D\mathcal{L}=0$ puisque $\alpha$ est une constante (on regarde une transformation globale et non locale $\alpha(\cancel{t,\boldsymbol{x}})$). Et donc $W^\mu =0$.

Les densités d'impulsion valent $\Pi^0\_\theta=-\rho$ et $\Pi^i\_\theta=\frac{\rho}{m}\partial^i\theta$.


<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 5px 5px;">
<summary>Détail du calcul de la composante spatiale</summary>
<div style="overflow-x:auto;">
$\Pi^i_\theta=\frac{\partial\mathcal{L}}{\partial(\partial_i\theta)}=\frac{-\rho}{2m}\frac{\partial(\boldsymbol{\nabla}\theta)^2}{\partial(\partial_i\theta)}=\frac{-\rho}{2m}\frac{\partial(\eta^{kl}\partial_k\theta\partial_l\theta)}{\partial(\partial_i\theta)}=\frac{-\rho}{2m}(\eta^{kl}\delta^i_k\partial_l\theta+\eta^{kl}\delta^i_l\partial_k\theta)=\frac{-\rho}{2m}(-\delta^{kl}\delta^i_k\partial_l\theta-\delta^{kl}\delta^i_l\partial_k\theta)=\frac{\rho}{m}\partial^i\theta$</div> avec la signature $(+,-,-,-)$
</details>

On en déduit $J^0\_\mathrm{N}=\Pi^0\_\theta D\theta = -\rho(x)$ et $\boldsymbol{J}\_\mathrm{N}=\Pi^i\_\theta D\theta = -\frac{\rho}{m}\boldsymbol{\nabla}\theta$, puis, en rétablissant la convention de signe, $Q\_{\mathrm{Nc}}=\int \mathrm{d}^3 x\\, \rho(x)$ et $\boldsymbol{J}\_{\mathrm{Nc}}=\frac{\rho}{m} \boldsymbol{\nabla} \theta$.

Ces deux résultats sont physiquement très parlants&nbsp;: la charge conservée est le nombre total de particules, et le courant de particules est proportionnel au <b>gradient de la phase</b>. C'est la formule qui gouverne les supercourants&nbsp;: un condensat transporte de la matière non pas parce que sa densité varie, mais parce que sa phase s'enroule dans l'espace.

</details>

</div>

La composante temporelle du courant conservé étant $\rho(x)$, on définit le nombre total de particules comme $\hat{N}(t)=\int\mathrm{d}^3x\\,\hat{\rho}(\boldsymbol{x},t)$. En intégrant la relation de commutation sur tout l'espace, la distribution de Dirac se consomme et il reste&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
[\hat{N}(t), \hat{\theta}(\boldsymbol{x}, t)]=\mathrm{i}
$$

</div>
</div>

C'est la **relation d'incertitude nombre-phase**. Elle dit que le nombre d'excitations d'un champ et sa phase sont deux observables conjuguées, exactement comme la position et l'impulsion d'une particule&nbsp;: on ne peut pas connaître précisément les deux à la fois. Un état de nombre de particules bien défini a une phase totalement indéterminée, et un état de phase bien définie, comme un condensat ou un supraconducteur, n'a pas de nombre de particules bien défini.

<br>

## Champ à plusieurs composantes&nbsp;: généraliser la charge

### Symétries internes et isospin

Le champ scalaire complexe nous a appris qu'une symétrie interne à un paramètre donne une charge conservée. La question suivante s'impose&nbsp;: que donne une symétrie à plusieurs paramètres&nbsp;?

Partons d'une observation physique. Il est tentant de considérer que des particules qui se ressemblent beaucoup, comme le neutron et le proton, sont en fait une seule et même particule munie d'un curseur interne permettant de passer d'une forme à l'autre. L'invariance du lagrangien par rapport à ce curseur est alors décrite par une symétrie interne, sans rapport évident avec les symétries de l'espace-temps.

L'**isospin** est exactement ce curseur. Le proton et le neutron ont tous les deux un isospin $I=\frac{1}{2}$, avec, comme pour le spin conventionnel, deux valeurs propres possibles de l'opérateur $\hat{I}\_z$&nbsp;: $I\_z=+1/2$ pour le proton et $I\_z=-1/2$ pour le neutron. Par analogie avec le moment cinétique, on assemble proton et neutron dans un objet à deux composantes $\binom{p}{n}$, le doublet d'isospin, et on le fait tourner avec les mêmes matrices que celles qui font tourner les spins $\frac{1}{2}$. Remarquons tout de suite que cette symétrie n'est qu'approximative, puisqu'on n'a pas exactement $m\_p=m\_n$&nbsp;: c'est le même mécanisme qu'au paragraphe précédent, où l'égalité des masses de $\phi\_1$ et $\phi\_2$ était la condition de la symétrie.

Pour explorer l'idée, prenons trois particules scalaires $t$, $d$ et $h$ rangées dans un vecteur $(t,d,h)^t$ doté d'une symétrie $SO(3)$. Tourner le curseur interne de 90° autour de l'axe $h$ transforme une particule $t$, soit $(1,0,0)^t$, en une particule $d$, soit $(0,1,0)^t$. Et comme la symétrie est exacte, toute superposition obtenue en tournant le curseur est un état aussi légitime que les trois particules d'origine.

<!-- FIGURE 4 (à redessiner) : l'espace interne et son curseur.
Un trièdre en perspective, avec trois axes orthogonaux étiquetés non pas x, y, z mais phi_1, phi_2, phi_3, pour souligner qu'il ne s'agit pas de l'espace physique.
Sur l'axe phi_1, un vecteur unitaire épais étiqueté "particule t" ; sur l'axe phi_2, un autre étiqueté "particule d" ; sur l'axe phi_3, un troisième étiqueté "particule h".
Un arc de cercle fléché, tracé dans le plan (phi_1, phi_2) et centré sur l'origine, va du premier vecteur vers le deuxième ; il est annoté "rotation interne de 90 degrés autour de phi_3".
Un vecteur fin, en trait pointillé, part de l'origine dans une direction oblique quelconque du plan (phi_1, phi_2), annoté "superposition, état tout aussi valide".
Sous la figure, une mise en garde encadrée : "cet espace n'est pas l'espace de Minkowski ; les indices ne sont pas des indices tensoriels".
-->

Comme les particules sont des excitations du champ, on doit pouvoir étudier l'isospin en théorie des champs. On range donc les champs responsables de ces particules dans un vecteur $(\phi\_1,\phi\_2,\phi\_3)^t$, et une rotation interne transforme $\phi\_1$ en $\phi\_2$ en tournant autour de l'axe correspondant à $\phi\_3$. Si le lagrangien est invariant sous ces rotations, le théorème de Noether va nous offrir une loi de conservation.

### Application de la recette

**Étape 1&nbsp;:** posons $
\boldsymbol{\Phi}(x)=\left(\begin{array}{l}
\phi\_1(x) \\\\
\phi\_2(x) \\\\
\phi\_3(x)
\end{array}\right)
$

Le lagrangien libre de cette théorie s'écrit&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}=\frac{1}{2}\left(\partial^\mu \boldsymbol{\Phi}\right) \cdot\left(\partial\_\mu \boldsymbol{\Phi}\right)-\frac{m^2}{2} \boldsymbol{\Phi} \cdot \boldsymbol{\Phi}
$$

</div>
</div>

et n'est que l'écriture contractée de la somme des lagrangiens de chaque champ&nbsp;:

<div id="grosseformule">

$$
\mathcal{L}=\frac{1}{2}\left[\left(\partial\_\mu \phi\_1\right)^2-m^2 \phi\_1^2+\left(\partial\_\mu \phi\_2\right)^2-m^2 \phi\_2^2+\left(\partial\_\mu \phi\_3\right)^2-m^2 \phi\_3^2\right]
$$

</div>

On notera que les trois champs ont la même masse $m$, ce qui est encore une fois la condition de la symétrie.

<div id="preuve">

Attention à un piège de notation&nbsp;: $\boldsymbol{\Phi}(x)$ n'est <u>pas</u> un champ vectoriel de l'espace de Minkowski comme $x^\mu$ ou $p^\mu$.

De fait, le produit scalaire n'est pas défini avec la métrique ($g\_{\mu\nu}A^\mu A^\nu$), mais simplement par $\boldsymbol{\Phi} \cdot \boldsymbol{\Phi}=\phi\_1 \phi\_1+\phi\_2 \phi\_2+\phi\_3 \phi\_3$. Et de même $\partial^\mu \boldsymbol{\Phi} \cdot \partial\_\mu \boldsymbol{\Phi}=\partial^\mu \phi\_1 \partial\_\mu \phi\_1+\partial^\mu \phi\_2 \partial\_\mu \phi\_2+\partial^\mu \phi\_3 \partial\_\mu \phi\_3$.

L'indice $\alpha$ dans $\Phi\_\alpha$ n'est donc pas un indice tensoriel&nbsp;: il n'y a aucune différence entre $\Phi^\alpha$ et $\Phi\_\alpha$, et il n'y a pas de signe à surveiller quand on le monte ou le descend.

</div>

Notre exemple possédant une symétrie $SO(3)$, on peut transformer $\boldsymbol{\Phi}$ en $\boldsymbol{\Phi'}$ avec une matrice de rotation tridimensionnelle sans modifier le lagrangien&nbsp;:

<div id="grosseformule">

$$
\left(\begin{array}{c}
\phi\_1^{\prime} \\\\
\phi\_2^{\prime} \\\\
\phi\_3^{\prime}
\end{array}\right)=\left(\begin{array}{ccc}
\cos \theta & -\sin \theta & 0 \\\\
\sin \theta & \cos \theta & 0 \\\\
0 & 0 & 1
\end{array}\right)\left(\begin{array}{l}
\phi\_1 \\\\
\phi\_2 \\\\
\phi\_3
\end{array}\right)
$$

</div>

**Étape 2&nbsp;:** la densité hamiltonienne est la somme de trois copies de celle du champ scalaire réel&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\hat{\mathcal{H}}=\sum\_\alpha\left[\frac{1}{2}\left(\partial\_0 \hat{\phi}\_\alpha\right)^2+\frac{1}{2}\left(\nabla \hat{\phi}\_\alpha\right)^2+\frac{1}{2} m^2 \hat{\phi}\_\alpha^2\right]
$$

</div>
</div>

**Étape 3&nbsp;:** les relations de commutation à temps égaux acquièrent un Kronecker&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\left[\hat{\Phi}\_\alpha(t, \boldsymbol{x}), \hat{\Pi}\_\beta^0(t, \boldsymbol{y})\right]=\mathrm{i} \delta^{(3)}(\boldsymbol{x}-\boldsymbol{y}) \delta\_{\alpha \beta}
$$

</div>
</div>

Ce Kronecker fait en sorte que les seules valeurs non nulles correspondent au commutateur entre une composante de $\boldsymbol{\Phi}$ et la <u>même</u> composante de sa densité d'impulsion. C'est la traduction, dans l'espace interne, de ce que $\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})$ disait déjà dans l'espace ordinaire&nbsp;: les degrés de liberté sont indépendants.

**Étape 4&nbsp;:** la décomposition en modes se fait composante par composante, avec des opérateurs de création et d'annihilation distincts pour chacune&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\boldsymbol{\Phi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}}\left(\begin{array}{l}
\hat{a}\_{\boldsymbol{p} 1} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{a}\_{\boldsymbol{p} 1}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x} \\\\
\hat{a}\_{\boldsymbol{p} 2} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{a}\_{\boldsymbol{p} 2}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x} \\\\
\hat{a}\_{\boldsymbol{p} 3} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{a}\_{\boldsymbol{p} 3}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}
\end{array}\right)
$$

</div>
</div>

où les $\hat{a}\_{\boldsymbol{p} \alpha}$ sont les opérateurs d'annihilation du champ $\alpha$, avec $\left[\hat{a}\_{\boldsymbol{p} \alpha}, \hat{a}\_{\boldsymbol{q} \beta}^{\dagger}\right]=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q}) \delta\_{\alpha \beta}$.

Compactons cette expression en faisant apparaître explicitement la direction interne de chaque terme&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\boldsymbol{\Phi}(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}} \sum\_{\alpha=1}^3 \boldsymbol{h}\_\alpha\left(\hat{a}\_{\boldsymbol{p} \alpha} \mathrm{e}^{-\mathrm{i} p \cdot x}+\hat{a}\_{\boldsymbol{p} \alpha}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$$

</div>
</div>

où $\boldsymbol{h}\_1=\left(\begin{array}{l}1 \\\\0 \\\\0\end{array}\right)$, $\boldsymbol{h}\_2=\left(\begin{array}{l}0 \\\\1 \\\\0\end{array}\right)$ et $\boldsymbol{h}\_3=\left(\begin{array}{l}0 \\\\0 \\\\1\end{array}\right)$ nous renseignent sur la **polarisation** du champ dans l'espace interne. Retenons bien ce mot, car la dernière section de cette partie va lui donner un sens beaucoup plus riche.

**Étape 5&nbsp;:** en substituant dans l'hamiltonien puis en réordonnant, on obtient&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\hat{H}=\int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}} \sum\_{\alpha=1}^3 \hat{a}\_{\boldsymbol{p} \alpha}^{\dagger} \hat{a}\_{\boldsymbol{p} \alpha}
$$

</div>
</div>

Moralité, on somme maintenant à la fois sur toutes les impulsions <u>et</u> sur toutes les polarisations.

### Les trois charges sont l'isospin

Penchons-nous enfin sur les charges conservées, en partant de l'invariance du lagrangien sous les transformations $\boldsymbol{\Phi} \rightarrow \boldsymbol{\Phi} - \boldsymbol{\theta} \times \boldsymbol{\Phi}$. Le vecteur $\boldsymbol{\theta}$ ayant trois composantes, nous attendons désormais <u>trois</u> charges conservées et non plus une seule.

Prenons l'exemple d'une rotation autour de l'axe $\phi\_3$. On a $\Phi^a \rightarrow \Phi^a-\varepsilon^{a 3 c} \theta^3 \Phi^c$, d'où $D^3\phi^1 = \phi^2$, $D^3\phi^2 = -\phi^1$ et $D^3\phi^3 = 0$, en notant $D^b\phi^a$ la variation de $\phi^a$ sous la rotation autour de l'axe $b$. La composante alignée sur l'axe de rotation ne bouge pas, comme il se doit.

Pour toute symétrie interne, $D\mathcal{L}=0$ et donc $W^\mu = 0$. Le courant de Noether associé aux rotations autour de l'axe 3 est alors&nbsp;:
<div id="grosseformule">

$$
J\_{\mathrm{N}}^{3 \mu}=\Pi^{a \mu} D^3 \Phi^a=\left(\partial^\mu \phi^1\right) \phi^2-\left(\partial^\mu \phi^2\right) \phi^1
$$

</div>

Cette expression a exactement la forme du courant du champ scalaire complexe rencontré plus haut, ce qui n'est pas un hasard&nbsp;: une rotation autour de l'axe 3 n'est rien d'autre qu'une transformation $U(1)$ agissant sur la combinaison complexe $\phi^1 + \mathrm{i}\phi^2$.

En injectant les décompositions en modes, puis en appliquant l'inversion de signe conventionnelle et l'ordre normal, on obtient&nbsp;:
<div id="grosseformule">

$$
\hat{Q}\_{\mathrm{Nc}}^3=-\mathrm{i} \int \mathrm{~d}^3 p\left(\hat{a}\_{1 \boldsymbol{p}}^{\dagger} \hat{a}\_{2 \boldsymbol{p}}-\hat{a}\_{2 \boldsymbol{p}}^{\dagger} \hat{a}\_{1 \boldsymbol{p}}\right)
$$

</div>

Cet opérateur ne compte pas des particules, il en <u>convertit</u>&nbsp;: il détruit une excitation de type 2 pour en créer une de type 1, et réciproquement. Les deux autres axes donnent des formules analogues, et l'on peut tout rassembler&nbsp;:

<div id="theo">
 <div id="grosseformule">
 
 $$
 \boldsymbol{Q}\_{\mathrm{Nc}}=\int \mathrm{d}^3 x\left(\boldsymbol{\Phi} \times \partial\_0 \boldsymbol{\Phi}\right)
 $$
 
 </div>
 
 <div id="grosseformule">
 
 $$
 \hat{Q}\_{\mathrm{N} c}^a=-\mathrm{i} \int \mathrm{~d}^3 p\\, \varepsilon^{a b c} \hat{a}\_{b \boldsymbol{p}}^{\dagger} \hat{a}\_{c \boldsymbol{p}}
 $$
 
 </div>
 </div> 
 
Cette charge conservée à trois composantes <u>est</u> l'**isospin**&nbsp;! Le produit vectoriel de la première formule est la signature du moment cinétique, et c'est bien pourquoi l'isospin se manipule avec les mêmes règles que le spin, sans avoir le moindre rapport avec une rotation dans l'espace physique.

{{%notice note%}}
L'exemple à trois champs de même masse n'est pas qu'un jouet&nbsp;: c'est, à peu de choses près, le triplet de pions $(\pi^+, \pi^0, \pi^-)$, dont les masses sont effectivement très voisines (environ 140&nbsp;MeV, à quelques MeV près). L'écart résiduel entre elles mesure justement le degré auquel la symétrie d'isospin n'est qu'approchée.
{{%/notice%}}

<br>

## Champ vectoriel massif&nbsp;: quand les composantes vivent dans Minkowski

<p id="ancrelorenz"></p>

### L'équation de Proca et le compte des polarisations

Il reste une nouveauté à introduire, et c'est la plus subtile de la partie. Jusqu'ici, les composantes internes de nos champs vivaient dans un espace abstrait, sans lien avec l'espace-temps. Que se passe-t-il si les composantes <u>sont</u> des directions de l'espace-temps&nbsp;?

Prenons le lagrangien de l'électromagnétisme, $-\frac{1}{4} F\_{\mu \nu} F^{\mu \nu}$ avec $F\_{\mu \nu}=\partial\_\mu A\_\nu-\partial\_\nu A\_\mu$, et ajoutons-lui un terme de masse à la Klein--Gordon&nbsp;:

<div id="def">
<div id="grosseformule">

$$
\mathcal{L}=-\frac{1}{4} F\_{\mu \nu} F^{\mu \nu}+\frac{1}{2} m^2 A\_\mu A^\mu
$$

</div>
</div>

Ce lagrangien décrit un champ dont les excitations sont des bosons vectoriels de spin 1. Ses équations du mouvement s'obtiennent par les équations d'Euler--Lagrange&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\partial\_\mu F^{\mu \nu}+m^2 A^\nu=0
$$

</div>
</div>

C'est l'<b>équation de Proca</b>.

Elle contient une contrainte cachée qu'un seul calcul révèle. Dérivons-la une fois de plus et contractons&nbsp;: par antisymétrie de $F^{\mu\nu}$, on a $\partial\_\nu\partial\_\mu F^{\mu \nu}=0$, et il ne reste que $m^2 \partial\_\nu A^\nu=0$. Comme $m\neq 0$, le champ est nécessairement à divergence nulle&nbsp;:

<div id="grosseformule">

$$
\partial\_\mu A^\mu=0
$$

</div>

Ce résultat demande beaucoup de précaution, car il ressemble à s'y tromper à la condition de jauge de Lorenz de l'électromagnétisme, et ce n'est pas du tout la même chose. En électromagnétisme, $\partial\_\mu A^\mu=0$ est un <u>choix</u> que l'on s'autorise grâce à l'invariance de jauge. Ici, le terme de masse $m^2A\_\mu A^\mu$ brise cette invariance, il n'y a donc plus aucune liberté de jauge à exploiter&nbsp;: la condition est <u>imposée</u> par les équations du mouvement.

Le champ se décomposant en ondes planes, on peut aussi écrire cette contrainte sous la forme $p\_\mu A^\mu = 0$. Elle relie une composante aux trois autres, et le champ n'aura donc que <b>3 degrés de liberté de polarisation</b> au lieu de 4. C'est exactement le compte attendu pour une particule massive de spin 1, dont la projection du spin peut valoir $-1$, $0$ ou $+1$.

### Les vecteurs de polarisation

Comme dans le cas du champ $\boldsymbol{\Phi}$ à symétrie $SO(3)$, la décomposition en modes va demander des opérateurs de création et d'annihilation séparés pour chaque polarisation. Mais il y a désormais une nouveauté&nbsp;: chacun de ces opérateurs doit être multiplié par un **vecteur polarisation** $\epsilon^\mu\_\lambda(p)$ qui vit dans l'espace de Minkowski, et dont les composantes dépendent de l'impulsion de la particule considérée.

<div id="theo">
<div id="grosseformule">

$$
\hat{A}^\mu(x)=\int \frac{\mathrm{d}^3 p}{(2 \pi)^{\frac{3}{2}}} \frac{1}{\left(2 E\_{\boldsymbol{p}}\right)^{\frac{1}{2}}} \sum\_{\lambda=1}^3\left(\epsilon\_\lambda^\mu(p) \hat{a}\_{\boldsymbol{p} \lambda} \mathrm{e}^{-\mathrm{i} p \cdot x}+\epsilon\_\lambda^{\mu *}(p) \hat{a}\_{\boldsymbol{p} \lambda}^{\dagger} \mathrm{e}^{\mathrm{i} p \cdot x}\right)
$$

</div>
</div>

Cette formule compacte cache trois indices de nature différente, et c'est la source de toutes les confusions&nbsp;: $\mu$ repère la composante d'espace-temps du champ, $\lambda$ numérote les trois polarisations indépendantes, et $\boldsymbol{p}$ étiquette le mode. Développée, elle contiendrait douze termes, chacun portant un vecteur à quatre composantes&nbsp;; l'écriture ci-dessus dit exactement la même chose sans la calligraphie.

La contrainte $p\_\mu A^\mu=0$ devient alors $p\_\mu \epsilon\_\lambda^\mu(p)=0$, ce qui montre bien pourquoi les vecteurs polarisation dépendent de l'impulsion&nbsp;: leur rôle est de rendre le champ $A^\mu$ orthogonal à $p^\mu$, et cette orthogonalité se juge au sens du produit scalaire de Minkowski.

<div id="preuve">

<details>
<summary>À quoi ressemblent les vecteurs polarisation&nbsp;?</summary>

Comme tout quadrivecteur, ils se transforment par les transformations de Lorentz. La stratégie est donc de les écrire dans le référentiel propre de la particule, où tout est simple, puis de généraliser par un boost.

Considérons une particule au repos, avec $p^\mu=(m,0,0,0)^t$. La condition $p^\mu \epsilon\_{\lambda \mu}(p)=0$ impose simplement que la composante temporelle des polarisations soit nulle, et un choix évident de trois vecteurs indépendants est&nbsp;:
<div id="grosseformule">

$$
\epsilon\_1(m, 0)=\left(\begin{array}{l}
0 \\\\
1 \\\\
0 \\\\
0
\end{array}\right), \epsilon\_2(m, 0)=\left(\begin{array}{l}
0 \\\\
0 \\\\
1 \\\\
0
\end{array}\right), \epsilon\_3(m, 0)=\left(\begin{array}{l}
0 \\\\
0 \\\\
0 \\\\
1
\end{array}\right)
$$

</div>

Au repos, les trois polarisations sont donc sur le même pied&nbsp;: ce sont les trois directions de l'espace, et rien ne les distingue.

Pour obtenir $\epsilon\_\lambda(p)$ dans un référentiel quelconque, on applique la transformation de Lorentz $\boldsymbol{\Lambda}(p)$. Prenons une particule d'impulsion $p\_z=|\boldsymbol{p}|$ selon $z$, soit $p^\mu=\left(E\_{\boldsymbol{p}}, 0,0,|\boldsymbol{p}|\right)^t$, et appliquons le boost correspondant&nbsp;:

<div id="grosseformule">

$$
\Lambda^\mu{ }\_\nu(p)=\frac{1}{m}\left(\begin{array}{cccc}
E\_{\boldsymbol{p}} & 0 & 0 & |\boldsymbol{p}| \\\\
0 & m & 0 & 0 \\\\
0 & 0 & m & 0 \\\\
|\boldsymbol{p}| & 0 & 0 & E\_{\boldsymbol{p}}
\end{array}\right)
$$

</div>

On obtient&nbsp;:

<div id="grosseformule">

$$
\epsilon\_1\left(E\_{\boldsymbol{p}}, 0,0,|\boldsymbol{p}|\right)=\left(\begin{array}{c}
0 \\\\
1 \\\\
0 \\\\
0
\end{array}\right), \epsilon\_2\left(E\_{\boldsymbol{p}}, 0,0,|\boldsymbol{p}|\right)=\left(\begin{array}{c}
0 \\\\
0 \\\\
1 \\\\
0
\end{array}\right),
\epsilon\_3\left(E\_{\boldsymbol{p}}, 0,0,|\boldsymbol{p}|\right)=\left(\begin{array}{c}
|\boldsymbol{p}| / m \\\\
0 \\\\
0 \\\\
E\_{\boldsymbol{p}} / m
\end{array}\right)
$$

</div>

Le boost a brisé la symétrie entre les trois polarisations, et c'est tout l'intérêt du calcul. Les deux polarisations <b>transverses</b> $\epsilon\_1$ et $\epsilon\_2$, perpendiculaires au mouvement, sont sorties indemnes. La polarisation <b>longitudinale</b> $\epsilon\_3$, celle qui était alignée sur la direction du mouvement, a en revanche acquis une composante temporelle et a été dilatée d'un facteur $E\_{\boldsymbol{p}}/m$.

Cette dissymétrie mérite d'être méditée, car elle annonce beaucoup de choses. Quand $m \rightarrow 0$, la polarisation longitudinale diverge&nbsp;: la limite sans masse n'est pas continue, et c'est la trace du fait qu'un photon, lui, n'a que <u>deux</u> polarisations. Le degré de liberté longitudinal ne disparaît pas en douceur, il devient singulier. Cette observation est exactement celle qui refait surface, bien plus tard, dans le mécanisme de Higgs&nbsp;: quand un boson de jauge acquiert une masse, il doit bien trouver quelque part la polarisation longitudinale qui lui manquait.

</details>

</div>

<!-- FIGURE 5 (à redessiner) : les trois polarisations, au repos et après boost.
Deux panneaux côte à côte.
Panneau de gauche, titré "au repos" : un point représentant la particule, avec trois flèches de même longueur partant de lui, mutuellement perpendiculaires, étiquetées epsilon_1, epsilon_2, epsilon_3 ; légende sous le panneau : "les trois polarisations sont équivalentes".
Panneau de droite, titré "en mouvement selon z" : le même point, avec une grosse flèche horizontale vers la droite étiquetée p pour indiquer la direction du mouvement ; les deux flèches epsilon_1 et epsilon_2, perpendiculaires à p, sont dessinées inchangées et annotées "transverses, inchangées" ; la flèche epsilon_3, alignée sur p, est dessinée nettement plus longue, avec un facteur E/m indiqué le long d'elle, et annotée "longitudinale, dilatée" ; une petite annotation en bas précise "diverge quand m tend vers 0 : le photon n'aura que 2 polarisations".
-->

La forme diagonalisée de l'hamiltonien, elle, ne réserve aucune surprise&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\hat{H}=\int \mathrm{d}^3 p\\, E\_{\boldsymbol{p}} \sum\_{\lambda=1}^3 \hat{a}\_{\boldsymbol{p} \lambda}^{\dagger} \hat{a}\_{\boldsymbol{p} \lambda}
$$

</div>
</div>

C'est l'énergie de toutes les particules, dans toutes les polarisations, exactement comme pour le triplet à symétrie interne. La différence entre les deux cas n'est pas dans l'hamiltonien mais dans la nature de l'indice de polarisation&nbsp;: interne et insensible aux boosts pour $\boldsymbol{\Phi}$, minkowskien et remodelé par les boosts pour $A^\mu$.

<br>

## Où en sommes-nous&nbsp;?

Récapitulons ce que la recette a produit, et ce qu'elle n'a pas encore produit.

Nous savons désormais quantifier un champ scalaire, réel ou complexe, un champ à plusieurs composantes internes et un champ vectoriel massif. Dans tous les cas, la mécanique est la même&nbsp;: un lagrangien quadratique se diagonalise en modes d'impulsion, et chaque mode devient un oscillateur dont les excitations sont les particules. Les symétries internes fournissent les charges conservées, et ces charges donnent un sens à la distinction entre particule et antiparticule.<br><br>
Toutes les particules obtenues sont pourtant des <b>bosons</b>, de spin 0 ou 1. Cela n'est pas un hasard&nbsp;: c'est une conséquence directe du choix fait à l'étape&nbsp;3, celui d'imposer des relations de <b>commutation</b>. La matière ordinaire, elle, est faite de fermions de spin $\frac{1}{2}$, et aucun des objets manipulés ici, scalaire ou vecteur, ne sait décrire un spin demi-entier. Il faudra pour cela un troisième type d'objet, le <b>spineur</b>, et il faudra remplacer les commutateurs par des anticommutateurs.

<br>
<br>


<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc3">Chapitre précédent</a></td><td><a href="../tqc5">Chapitre suivant</a></td>
    </tr>
</table>
</div>
