+++
title = "TQC-8"
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


# Théorie quantique des champs -- Partie 8

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



Interlude et remboursement de dette. Les chapitres précédents ont laissé deux ardoises&nbsp;: «&nbsp;les diagrammes du vide ne contribuent qu'une phase&nbsp;» (admis) et «&nbsp;seuls les diagrammes connexes nourrissent la matrice $T$&nbsp;» (admis aussi). Pour les payer, on fait un détour par la physique statistique, et le détour est en réalité un raccourci&nbsp;: les deux mondes reposent sur une seule et même idée.



## Détour par la physique statistique


<ul style="margin-top:1em;">
<li><b>L'idée</b>&nbsp;: toute l'information d'un système tient dans un seul objet, $Z$. Pour l'en extraire, une manivelle universelle&nbsp;: <b>coupler une source linéairement, dériver, éteindre la source</b>. En physique statistique, $Z$ est la fonction de partition et la source est un champ magnétique (par exemple)&nbsp;; en théorie des champs, $Z[J]$ est la fonctionnelle génératrice et la source secoue des particules hors du vide.</li>
<li><b>Le pont</b>&nbsp;: le théorème de Gell-Mann–Low, qui égale les fonctions de Green <i>exactes</i> (incalculables&nbsp;: vide en interaction, champs de Heisenberg) à un quotient d'objets <i>calculables</i> (vide libre, champs libres, Wick, diagrammes).</li>
<li><b>Le dividende</b>&nbsp;: le quotient fait s'annuler exactement les diagrammes du vide. C'est le théorème des amas liés, et les deux ardoises sont soldées.</li>
</ul>
<br>

### Condensé de physique statistique

<div id="def">

Un système de hamiltonien $\hat H_0$, d'états propres $|\alpha\rangle$ d'énergies $E_\alpha$, à la température $T$.<br>
la probabilité d'occuper l'état $|\alpha\rangle$ est donnée par la distribution de Gibbs&nbsp;:


<p style="text-align:center;">
$
\displaystyle p_\alpha = \frac{e^{-\beta E_\alpha}}{Z}\\\\
\displaystyle \beta = \frac{1}{k_B T}\\\\
\displaystyle Z = \sum_\alpha e^{-\beta E_\alpha} = \mathrm{Tr}\,\big[e^{-\beta \hat H_0}\big]
$
</p>

$Z$ est la <b>fonction de partition</b>.

</div>

En apparence, $Z$ n'est qu'une constante de normalisation (il faut bien que $\sum_\alpha p_\alpha = 1$). En réalité, <b>toute l'information sur le système est dans $Z$</b>. C'est pour cela qu'on l'appelle aussi <b>fonction génératrice</b>.

Le modèle de travail est un aimant unidimensionnel&nbsp;: $N$ sites étiquetés $i$, chacun portant un spin $\tfrac12$ pointant vers le haut ($S_z = +\tfrac12$) ou vers le bas ($S_z = -\tfrac12$). 


<!-- Figure à redessiner (L&B fig. 21.1) : une chaîne horizontale de sites numérotés i = 1, 2, ..., 10, chacun décoré d'une flèche verticale vers le haut ou vers le bas (mélange aléatoire) -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/modeleaimant.png" style="box-shadow:none;background:none;">
</div>

On définit le <b>champ à valeurs opérateurs</b> $\hat\phi_i$&nbsp;: on entre une position $i$, on ressort un opérateur $\hat S_{z i}$ (agissant sur le seul spin du site $i$). Ce n'est rien d'autre que la définition d'un champ quantique où le réseau remplace le continuum.



Que vaut, à la température $T$, la <b>moyenne thermique</b> du spin au site $i$&nbsp;?

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\langle\hat\phi_i\rangle_t = \mathrm{Tr}\,\big[\hat\phi_i\, \hat\rho\,\big]\\\\
\displaystyle \hat\rho \equiv \frac{e^{-\beta\hat H_0}}{Z}
$
</p>

où $\hat\rho$ est l'<b>opérateur densité</b> (ses éléments de matrice forment la <i>matrice densité</i>).

</div>

<br>

<div id="preuve">

On somme les valeurs propres pondérées par les probabilités de Gibbs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\langle\hat\phi_i\rangle_t
&= \sum_\alpha S^{(\alpha)}_{z i}\, p_\alpha\\
&= \frac{1}{Z}\sum_\alpha \langle\alpha|\hat\phi_i|\alpha\rangle\, e^{-\beta E_\alpha}\\
&= \frac{1}{Z}\sum_\alpha \langle\alpha|\hat\phi_i\, e^{-\beta\hat H_0}|\alpha\rangle\\
&= \frac{\mathrm{Tr}\,\big[\hat\phi_i\, e^{-\beta\hat H_0}\big]}{Z}
\end{aligned}
$
</p>

Moralité&nbsp;: multiplier par la matrice densité et tracer sur les états résume à peu près toute la physique statistique.

</div>

{{%notice note%}}
Sans champ extérieur, un système de spins sans interaction a $\langle\hat\phi_i\rangle_t = 0$ pour tout $i$ (autant de chances vers le haut que vers le bas). Un système <b>ordonné</b> (magnétiquement) a $\langle\hat\phi_i\rangle_t \neq 0$&nbsp;: la moyenne du champ devient un <i>paramètre d'ordre</i>.<br>
Le jumeau côté théorie des champs ($\langle\Omega|\hat\phi|\Omega\rangle \neq 0$) est la porte de la brisure spontanée de symétrie.
{{%/notice%}}

<br>

### La manivelle&nbsp;: les sources

Il existe une façon plus élégante (et plus généralisable) d'obtenir $\langle\hat\phi_i\rangle_t$. On ajoute au hamiltonien un terme <b>source</b>, couplant un nombre $J_k$ au champ en chaque site&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat H_s = -\frac{1}{\beta}\sum_k J_k\, \hat\phi_k
\Longrightarrow
Z(J) = \mathrm{Tr}\,\Big[e^{-\beta\hat H_0 + \sum_k J_k\hat\phi_k}\Big]
$
</p>

</div>

La source n'a rien de fictif&nbsp;: pour un aimant, $J_k$ est (à un facteur près) le <b>champ magnétique local</b> $B_k$[^g1]. La manivelle, c'est le bouton de l'électroaimant.

[^g1]: Et la recette qui suit est alors de la thermodynamique parfaitement standard&nbsp;: dériver l'énergie libre par rapport au champ magnétique donne l'aimantation, $M = -\partial F/\partial B$. La suite de cette partie est la généralisation systématique de ce geste.

Recette pour obtenir $\langle\hat\phi_i\rangle_t$&nbsp;:

<div id="theo">

Dériver par rapport à la source, puis l'éteindre&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle\hat\phi_i\rangle_t
= \frac{1}{Z(J=0)}\, \frac{\partial Z(J)}{\partial J_i}\bigg|_{J=0}
$
</p>

Et plus généralement, pour les <b>fonctions de corrélation</b> à $n$ points&nbsp;:


<p style="text-align:center;">
$\displaystyle
\langle\hat\phi_{i_1}\cdots\hat\phi_{i_n}\rangle_t
= \frac{1}{Z(0)}\, \frac{\partial^n Z(J)}{\partial J_{i_1}\cdots\partial J_{i_n}}\bigg|_{J=0}
$
</p>


</div>

<br>

<div id="preuve">

Chaque dérivée $\partial/\partial J_i$ fait descendre un $\hat\phi_i$ de l'exponentielle sous la trace, et poser $J = 0$ referme la boutique&nbsp;: on retombe sur $\mathrm{Tr}[\hat\phi_{i_1}\cdots\hat\phi_{i_n} e^{-\beta\hat H_0}]/Z$.<br>
Subtilité&nbsp;: $\hat\phi_i$ ne commute pas avec $\hat H_0$ en général, donc dériver une exponentielle d'opérateurs produit a priori $\hat\phi_i$ inséré <i>à toutes les positions possibles</i> dans l'exponentielle&nbsp;; c'est la <i>cyclicité de la trace</i> qui ramène toutes ces insertions à une seule, $\mathrm{Tr}[\hat\phi_i\\, e^{\cdots}]$. Pour l'aimant, les $\hat\phi_k$ de sites différents commutent entre eux et la question ne se pose pas.

</div>

<u>Ce que racontent les corrélations</u>&nbsp;: $G_{ij} = \langle\hat\phi_i\hat\phi_j\rangle_t$ répond à la question «&nbsp;si je connais le spin en $i$, que sais-je du spin en $j$&nbsp;?&nbsp;». 
<ul>
<li>Spins indépendants&nbsp;: $G_{ij} = 0$.</li> 
<li>Parfaitement alignés&nbsp;: $G_{ij} = \tfrac14$ (les valeurs propres sont $\pm\tfrac12$).</li>
<li>Le cas intéressant est intermédiaire&nbsp;: $G_{ij} \approx \tfrac14$ à courte distance puis $G_{ij} \to 0$ quand $|i-j| \to \infty$. La décroissance définit une <i>longueur de corrélation</i>.</li>
</ul>

 Et quand le système est ordonné ($\langle\hat\phi_i\rangle_t \neq 0$), on soustrait la partie triviale due à l'alignement moyen pour ne garder que les fluctuations corrélées&nbsp;:
 
 <p style="text-align:center;">
 $\displaystyle
 G^c_{ij} = \langle\hat\phi_i\hat\phi_j\rangle_t - \langle\hat\phi_i\rangle_t\langle\hat\phi_j\rangle_t
 $
 </p>

On obtient alors la fonction de corrélation <b>connexe</b>. Le mot n'est pas un hasard&nbsp;: c'est le même «&nbsp;connexe&nbsp;» que celui des diagrammes, comme on va le voir dans la suite.

Conclusion&nbsp;: coupler <i>linéairement</i> une source au champ transforme $Z$ en machine à fabriquer toutes les moyennes et toutes les corrélations. Une fonction, une manivelle, tout le système.

<br>

### Le dictionnaire

Tout ce qui précède a un jumeau en théorie des champs. Au passage à la limite continue ($i \to x$, $\hat\phi_i \to \hat\phi(x)$), les corrélations deviennent des fonctions de Green, les dérivées deviennent fonctionnelles.

<div style="overflow-x:auto;">
<table>
  <thead>
    <tr>
      <th></th>
      <th>Physique statistique (réseau)</th>
      <th>Théorie des champs (continuum)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Source</td>
      <td>$J_i$</td>
      <td>$J(x)$</td>
    </tr>
    <tr>
      <td>Génératrice</td>
      <td>$Z(J)$</td>
      <td>$Z[J]$</td>
    </tr>
    <tr>
      <td>Fonctions de Green</td>
      <td>$G_{i_1\cdots i_n} = \langle\hat\phi_{i_1}\cdots\hat\phi_{i_n}\rangle_t$</td>
      <td>$G^{(n)}(x_1,\ldots,x_n) = \langle\Omega|T\hat\phi(x_1)\cdots\hat\phi(x_n)|\Omega\rangle$</td>
    </tr>
    <tr>
      <td>Recette</td>
      <td>$\dfrac{1}{Z(0)}\dfrac{\partial^n Z}{\partial J_{i_1}\cdots\partial J_{i_n}}\bigg|_{0}$</td>
      <td>$\dfrac{1}{\mathrm{i}^n}\dfrac{1}{Z[0]}\dfrac{\delta^n Z[J]}{\delta J(x_1)\cdots\delta J(x_n)}\bigg|_{0}$</td>
    </tr>
    <tr>
      <td>Ordre</td>
      <td>$\langle\hat\phi_i\rangle_t \neq 0$</td>
      <td>$\langle\Omega|\hat\phi(x)|\Omega\rangle \neq 0$</td>
    </tr>
  </tbody>
</table>
</div>

<p style="margin-top:1.5em;">Trois différences tout de même&nbsp;:</p>
<ul>
<li>le $T$ (les champs vivent dans le temps réel, il faut ordonner, alors que la moyenne thermique, elle, n'a pas de temps)&nbsp;;</li>
<li>le $1/\mathrm{i}^n$ (la source entrera dans une exponentielle en $e^{+\mathrm{i}\int J\phi}$, chaque dérivée fait tomber un $\mathrm{i}\hat\phi$)&nbsp;;</li>
<li>et les dérivées <i>fonctionnelles</i> (voir la suite). </li>
</ul>

La correspondance profonde entre les deux colonnes, le temps imaginaire, $\beta \leftrightarrow \mathrm{i}t$, sera détaillée plus loin.


On secoue un système avec une force $f(t)$ (ici l'oscillateur $\hat H' = -f(t)\hat x$). Comment sa moyenne répond-elle&nbsp;? On définit la <b>fonction de réponse</b> $\chi$ par $\langle\hat x(t)\rangle = \int\mathrm{d}t'\\,\chi(t-t')\\,f(t')$.

<div id="preuve">

On se place en représentation d'interaction et on développe au premier ordre (la série de Dyson, tronquée)&nbsp;:

<p style="text-align:center;">
$\displaystyle
|\psi_I(t)\rangle = |0\rangle + i\int_{-\infty}^{t}\mathrm{d}t'\, f(t')\,\hat x_I(t')\,|0\rangle
$
</p>

d'où, en ne gardant que le premier ordre dans $\langle\psi_I|\hat x_I(t)|\psi_I\rangle$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\delta\langle\hat x(t)\rangle = i\int\mathrm{d}t'\,\theta(t-t')\,\big\langle\big[\hat x_I(t), \hat x_I(t')\big]\big\rangle\, f(t')
\Longrightarrow
\chi(t-t') = i\,\theta(t-t')\,\big\langle\big[\hat x(t), \hat x(t')\big]\big\rangle
$
</p>

C'est la <b>formule de Kubo</b>&nbsp;: la réponse linéaire est le <i>commutateur retardé</i>. C'est très exactement le «&nbsp;$G_R \propto \theta\times[\\;,\\;]$&nbsp;» de la discussion de causalité du chapitre sur les propagateurs, ici dérivé comme théorème général. Le $\theta$ n'est pas décoratif&nbsp;: la réponse ne précède jamais la cause. Pour l'oscillateur, avec $\hat x_I(t) = (2m\omega)^{-1/2}(\hat a\\, e^{-i\omega t} + \hat a^\dagger e^{i\omega t})$, le commutateur se calcule&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big[\hat x(t), \hat x(t')\big] = -\frac{i}{m\omega}\sin\omega(t-t')\\
\Longrightarrow
\chi(t-t') = \theta(t-t')\,\frac{\sin\omega(t-t')}{m\omega}
$
</p>

La fonction de Green <b>retardée classique</b> de l'oscillateur, à l'identique. Rien d'étonnant&nbsp;: le commutateur est un simple nombre, la réponse moyenne d'un oscillateur quantique est exactement classique (Ehrenfest). 

Conséquence remarquable&nbsp;: ce nombre ne dépend pas de l'état dans lequel se trouve l'oscillateur. <b>La réponse est la même à toute température</b>.

</div>

La formule de Kubo est le socle de toute la physique de la réponse linéaire (susceptibilités, conductivités…).

Quelle est la fonction de Green de la diffusion, et que nous raconte son pôle unique&nbsp;?

<div id="preuve">

Un <b>mode hydrodynamique</b> est la fluctuation d'une quantité conservée (le nombre de particules, l'énergie, l'impulsion). 

La traduction mathématique de la conservation de la quantité $n$ est l'équation de continuité $\partial_t n + \mathbf{\nabla}\cdot \mathbf{j} = 0$. Si on lui adjoint une relation constitutive comme la loi de Fick, $\mathbf{j}=-D\mathbf{\nabla}n$, on obtient l'équation de la diffusion $\partial_t n - D\nabla^2 n = 0$.

 On place une source ponctuelle à $t = 0$ et on cherche $G$ telle que $G(\mathbf x - \mathbf y, t = 0) = \delta^{(3)}(\mathbf x - \mathbf y)$. 

En Fourier&nbsp;:

<p style="text-align:center;">
$\displaystyle
(-i\omega + D\mathbf q^2)\,\tilde G(\omega, \mathbf q) = 1
\Longrightarrow
\tilde G(\omega, \mathbf q) = \frac{1}{-i\omega + D\mathbf q^2}
$
</p>

L'unique pôle est en $\omega = -iD\mathbf q^2$&nbsp;: <b>sur l'axe imaginaire, dans le demi-plan inférieur</b>. 

Comme dans le chapitre des propagateurs, on retrouve que rien ne se passe avant l'origine des temps puisque le contour ne ramasse le pôle que pour $t > 0$.

Et pour $t>0$, on récupère un pôle imaginaire pur $\Rightarrow$ aucune oscillation, une <b>relaxation pure</b> $e^{-D\mathbf q^2 t}$. Et cela donne une gaussienne qui s'étale dans l'espace réel $G \propto t^{-3/2}\\,e^{-|\mathbf x|^2/4Dt}$.

Après les pôles de masse $\pm(E_{\mathbf p} - i\varepsilon)$ donnant une propagation oscillante, on découvre donc le pôle $-iD\mathbf q^2$ correspondant à une décroissance sans phase.

Et la <i>position</i> de ce nouveau pôle encode la physique hydrodynamique&nbsp;: les grandes longueurs d'onde relaxent en un temps $1/D\mathbf q^2$, c'est-à-dire lentement, expliquant pourquoi les modes hydrodynamiques dominent les temps longs. Peu importe les milliards de détails complexes et chaotiques des collisions moléculaires à l'échelle microscopique, la physique aux temps longs est entièrement dictée par les lois de conservation du système.

</div>

<br>


### $Z[J]$ pour les champs

On retourne la même manivelle en ajoutant une source au lagrangien, couplée linéairement au champ&nbsp;:

<div id="def">

$$
\mathcal L[\phi(x)] \\;\longrightarrow\\; \mathcal L[\phi(x)] + J(x)\\,\phi(x)
$$

Donc le hamiltonien reçoit $-J\phi$ (toujours le même piège de signe qu'avec $\hat{\mathcal H}_I = -\hat{\mathcal L}_I$). 

Pourquoi «&nbsp;source&nbsp;»&nbsp;? Parce qu'en théorie quantique des champs ce terme <b>crée des excitations</b> du champ $\phi$, c'est-à-dire des particules. Brancher $J$, c'est attraper le champ et le secouer pour en faire tomber des quanta.

</div>

<br>

<div id="def">

La <b>fonctionnelle génératrice</b> est l'amplitude vide $\to$ vide en présence de la source&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z[J] = \langle\Omega|\, \hat U(\infty, -\infty)\, |\Omega\rangle_J
= \Big\langle \begin{array}{c}\text{zéro particule}\\ \text{à } x^0 = +\infty\end{array} \Big|\, \begin{array}{c}\text{zéro particule}\\ \text{à } y^0 = -\infty\end{array} \Big\rangle_J
$
</p>


où $\hat U$ est l'évolution sous le hamiltonien <b>complet</b>, $|\Omega\rangle$ le <b>vrai</b> vide de la théorie en interaction ($\hat H|\Omega\rangle = 0$&nbsp;: l'énergie du fondamental est posée à zéro), et l'indice $J$ se lit «&nbsp;en présence de la source&nbsp;». On pourrait appeler $Z[J]$ le <i>propagateur de zéro particule</i>.

</div>

Deux classes de processus peuvent se produire entre ces deux vides (outre «&nbsp;rien du tout&nbsp;»)&nbsp;: 

<ul>
<li>une particule est créée par la source $J$ quelque part, se propage, et est réabsorbée par $J$ ailleurs (les processus <i>source-à-source</i>, ceux qui nous intéressent)&nbsp;;</li>
<li>une particule apparaît spontanément et disparaît (les <b>diagrammes du vide</b>, présents même à $J = 0$). </li>
</ul>

On évacue les seconds par normalisation&nbsp;:
<p style="text-align:center;">
$\displaystyle
\mathcal Z[J] = \frac{Z[J]}{Z[J=0]},
\; \mathcal Z[0] = 1
$
</p>


<u>Problème technique</u>&nbsp;: $\hat U$ vit en représentation de <b>Heisenberg de la théorie complète</b>. Les champs $\hat\phi_H$ y évoluent sous $\hat H$ tout entier. Donc ils ne sont <b>pas libres</b>, et le théorème de Wick (qui ne vaut que pour des champs libres) est inutilisable. On peut néanmoins écrire une équation de Dyson en traitant le terme de source comme «&nbsp;l'interaction&nbsp;» ($\hat H_{\text{source}} = -J\hat\phi_H$)&nbsp;: ce découpage ne génère que les processus à sources (pas les diagrammes du vide, qui existent sans $J$), et livre directement la version normalisée&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal Z[J] = \Big\langle\Omega\Big|\, T\exp\Big( i\int\mathrm{d}^4x\; J(x)\,\hat\phi_H(x) \Big)\Big|\Omega\Big\rangle
= 1 + \sum_{n=1}^{\infty} \frac{i^n}{n!}\int\mathrm{d}^4x_1\cdots\mathrm{d}^4x_n\, J(x_1)\cdots J(x_n)\,
\langle\Omega|T\hat\phi_H(x_1)\cdots\hat\phi_H(x_n)|\Omega\rangle
$
</p>


Les coefficients du développement sont précisément les objets convoités&nbsp;:

<div id="def">

Les <b>fonctions de Green</b> de la théorie en interaction&nbsp;:

$$
G^{(n)}(x_1, \ldots, x_n) = \langle\Omega|\\, T\hat\phi_H(x_1)\cdots\hat\phi_H(x_n)\\, |\Omega\rangle.
$$

Pour la théorie <i>libre</i>, $G^{(2)}(x, y) = \langle 0|T\hat\phi\hat\phi|0\rangle = \Delta(x,y)$, la fonction de Green de Klein–Gordon du chapitre des propagateurs.<br>
En interaction, $G^{(2)}$ est le propagateur «&nbsp;habillé&nbsp;».<br>
Toute l'information de la théorie est dans la collection des $G^{(n)}$. On a d'ailleurs vu au chapitre précédent comment la matrice $S$ s'en extrait (diagrammes connexes amputés).

</div>

Pour les cueillir, il faut savoir dériver par rapport à une <i>fonction</i>&nbsp;:

<div id="def">

<b>La dérivée fonctionnelle</b>

C'est la limite continue de la dérivée partielle&nbsp;: là où le réseau donnait $\partial J_j/\partial J_i = \delta_{ij}$, le continuum donne

<p style="text-align:center;">
$\displaystyle
\frac{\delta J(y)}{\delta J(x)} = \delta^{(4)}(y - x)
$
</p>

d'où

<p style="text-align:center;">
$\displaystyle
\frac{\delta}{\delta J(x)}\int\mathrm{d}^4y\; J(y)\,f(y) = f(x)
$
</p>


Dériver par $\delta/\delta J(x)$, c'est demander «&nbsp;comment la quantité répond-elle si je pince la source <i>au point</i> $x$&nbsp;?&nbsp;», et la réponse consomme une intégrale et un $J$.

</div>

<br>

<div id="theo">

La recette d'extraction&nbsp;:

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
G^{(n)}(x_1, \ldots, x_n)
&= \frac{1}{\mathrm{i}^n}\, \frac{\delta^n \mathcal Z[J]}{\delta J(x_1)\cdots\delta J(x_n)}\bigg|_{J=0}\\
&= \frac{1}{\mathrm{i}^n}\, \frac{1}{Z[0]}\, \frac{\delta^n Z[J]}{\delta J(x_1)\cdots\delta J(x_n)}\bigg|_{J=0}
\end{aligned}
$
</p>

</div>


</div>

<br>

<div id="preuve">

Chaque $\delta/\delta J(x_k)$ consomme un $J$ et une intégrale (en épinglant le point $x_k$) et laisse le $\mathrm{i}$ correspondant&nbsp;; à $J = 0$, tous les termes gardant au moins un $J$ meurent, <b>seul le terme d'ordre exactement $n$ survit</b>. 

Le $1/n!$ est mangé par les $n!$ façons d'attribuer les $n$ dérivées aux $n$ facteurs $J$, les $\mathrm{i}^n$ sont évacués par le préfacteur&nbsp;: il reste bien $\langle\Omega|T\hat\phi_H(x_1)\cdots\hat\phi_H(x_n)|\Omega\rangle$. 

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/fonctgen.png" style="box-shadow:none;background:none;">
</div>

Le programme est posé. Reste à savoir <b>calculer</b> $\mathcal Z[J]$. Deux voies existent&nbsp;: la relier à la matrice $S$ (ce chapitre), ou l'intégrale de chemin de Feynman (chapitres suivant). 

<br>

### Le pont de Gell-Mann–Low

Le problème en une phrase&nbsp;: $\mathcal Z[J]$ est <i>exacte mais incalculable</i> (champs de Heisenberg, pas de Wick). La matrice $S$, elle, vit en représentation d'interaction $\to$ champs <b>libres</b>, Wick, diagrammes. Il faut un pont. 

Proposition&nbsp;:

<div id="grosseformule" style="margin:-0.5em 0;">

$$
\mathcal Z[J] = \frac{Z[J]}{Z[0]}
= \frac{\big\langle 0\big|\\, T e^{-i\int\mathrm{d}^4x\\,[\hat{\mathcal H}_I - J(x)\hat\phi_I(x)]}\\, \big|0\big\rangle}{\big\langle 0\big|\\, Te^{-i\int\mathrm{d}^4x\\,\hat{\mathcal H}_I}\\, \big|0\big\rangle}
$$

</div>

Même structure que l'expression exacte, mais tout y est <b>libre</b>&nbsp;: vide libre $|0\rangle$, champs $\hat\phi_I$, et le dénominateur n'est autre que $\langle 0|\hat S|0\rangle$. 

En appliquant la recette d'extraction ($n$ dérivées, $1/i^n$, $J = 0$), la proposition équivaut à l'énoncé suivant&nbsp;:

<div id="theo">

<b>Théorème de Gell-Mann–Low</b>[^g2]&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle\Omega|\, T\hat\phi_H(x_1)\cdots\hat\phi_H(x_n)\, |\Omega\rangle
= \frac{\langle 0|\, T\hat\phi_I(x_1)\cdots\hat\phi_I(x_n)\, \hat S\, |0\rangle}{\langle 0|\, \hat S\, |0\rangle}
$
</p>

</div>

[^g2]: Démontré par Gell-Mann et Low en 1951. Murray Gell-Mann (Nobel 1969) est aussi celui qui baptisa les «&nbsp;quarks&nbsp;», d'un mot emprunté au <i>Finnegans Wake</i> de Joyce.

Que contient chaque membre précisément&nbsp;?

| | Membre de gauche | Membre de droite |
|---|---|---|
| Le vide | $\|\Omega\rangle$, vide <b>en interaction</b> ($\hat H\|\Omega\rangle = 0$) | $\|0\rangle$, vide <b>libre</b> ($\hat H_0\|0\rangle = 0$) |
| Les champs | $\hat\phi_H$, évoluent sous $\hat H$ <b>complet</b> | $\hat\phi_I$, évoluent sous $\hat H_0$&nbsp;: <b>libres</b> |
| Statut | l'objet <b>exact</b>, incalculable | l'objet <b>calculable</b> (Wick, diagrammes) |

Le théorème dit&nbsp;: <b>l'exact est égal au calculable, à condition de diviser par $\langle 0|\hat S|0\rangle$</b>. 

<div id="preuve">

<details>
<summary>
L'esprit de la démonstration
</summary>

L'idée&nbsp;: fabriquer le vrai vide à partir du vide libre. 

On branche l'interaction <i>adiabatiquement</i> depuis $t = -\infty$&nbsp;: en évoluant $|0\rangle$ très lentement, le vide libre «&nbsp;s'habille&nbsp;» et se retrouve (à une phase et une norme près) dans le vrai fondamental $|\Omega\rangle$ (pourvu que les deux se recouvrent&nbsp;: $\langle\Omega|0\rangle \neq 0$). 

En insérant cette construction des deux côtés d'une chaîne $T\hat\phi\cdots\hat\phi$, les opérateurs d'évolution se recollent en un $\hat S$ au numérateur, et <b>toutes les phases et normes parasites se rangent exactement dans le $\langle 0|\hat S|0\rangle$ du dénominateur</b> (c'est lui qui fait le ménage). 

On reconnaît l'hypothèse adiabatique du chapitre sur la matrice $S$. Cest ici qu'elle travaille le plus dur.

</details>

</div>

<br>

### Le dividende&nbsp;: paiement de la dette des connexes

Gell-Mann–Low est un <b>quotient</b>, et les deux étages parlent en diagrammes&nbsp;: il doit y avoir des simplifications. Il y en a, et elles sont totales.

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
G^{(n)}(x_1, \ldots, x_n)
= \sum \left(\begin{array}{c}\text{tous les diagrammes CONNEXES}\\ \text{à } n \text{ pattes externes}\end{array}\right)
$
</p>

Les diagrammes du vide ont disparu, et les diagrammes déconnectés avec eux.

</div>

<br>

<div id="preuve">

L'argument est purement combinatoire. Un diagramme déconnecté quelconque du numérateur se factorise en (sa partie connexe à pattes externes) $\times$ (des copies de diagrammes du vide connexes). 

Étiquetons les diagrammes du vide connexes par $i$, de valeurs $V_i$, et supposons que notre diagramme en contient $n_i$ copies du type $i$. Sa valeur est&nbsp;:

$$
\Big(\text{connexe à pattes externes}\Big) \times \prod_i \frac{1}{n_i!}\\, (V_i)^{n_i}
$$

Le $1/n_i!$ étant le facteur de symétrie d'échange des $n_i$ copies identiques. 

Sommons sur <i>tout</i>&nbsp;: sur les parties connexes à pattes, et sur toutes les listes $\{n_i\}$. La somme se factorise, et chaque facteur reconstruit une exponentielle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum_{\{n_i\}} \prod_i \frac{1}{n_i!}(V_i)^{n_i}
= \prod_i \sum_{n_i} \frac{(V_i)^{n_i}}{n_i!}
= \prod_i e^{V_i} = e^{\sum_i V_i}
$
</p>


Donc numérateur $= \big[\sum \text{connexes à pattes}\big] \times e^{\sum_i V_i}$, tandis que le dénominateur vaut $\langle 0|\hat S|0\rangle = e^{\sum_i V_i}$ tout court&nbsp;: <b>l'exponentielle des vides se simplifie exactement</b>.

</div>

<u>Les deux ardoises soldées</u>&nbsp;: le $\langle 0|\hat S|0\rangle = e^{\sum V_i}$ est précisément la «&nbsp;phase globale des diagrammes du vide&nbsp;» admise au [chapitre](./tqc7/#développer-la-matrice-s-les-diagrammes-de-feynman) sur les diagrammes de Feynman&nbsp;; et «&nbsp;seuls les connexes contribuent&nbsp;» (du [chapitre](./tqc7/#de-lamplitude-au-nombre-mesuré) qui suivait) est maintenant un théorème, pas une intuition.

<u>L'intuition derrière l'exponentielle</u>&nbsp;: des morceaux déconnectés ne partagent rien, donc leurs amplitudes se <i>multiplient</i>&nbsp;; sommer sur «&nbsp;combien de copies de chacun&nbsp;» reconstruit mécaniquement une exponentielle. C'est mot pour mot la raison pour laquelle, en physique statistique, $Z$ est multiplicative pour des sous-systèmes indépendants tandis que $\ln Z$ (l'énergie libre) est <b>additive</b>. Les diagrammes connexes sont les grandeurs extensives de la théorie des champs.

Même jeu pour la génératrice elle-même&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
Z[J] &= \langle 0|\hat S|0\rangle_J\\
&= \sum \left(\begin{array}{c}\text{diagrammes du vide et source-à-source,}\\ \text{déconnectés compris}\end{array}\right)\\
&= \exp\left[\, \sum \left(\begin{array}{c}\text{diagrammes du vide et}\\ \text{source-à-source connexes}\end{array}\right)\right]
\end{aligned}
$
</p>

C'est le <b>théorème des amas liés</b> (linked-cluster theorem), dont l'énoncé est&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum\big(\text{tous les diagrammes}\big) = e^{\sum(\text{diagrammes connexes})}
$
</p>


</div>

<br>

<div id="preuve">

<b>Le sens diagrammatique de la normalisation</b>

Appliquons le théorème aux deux étages du quotient.<br>
À $J = 0$, seuls les vides subsistent&nbsp;: $Z[0] = \exp\big[\sum(\text{vides connexes})\big]$. Avec la source, l'exponentielle se scinde&nbsp;: un diagramme connexe est soit source-à-source, soit du vide, jamais les deux&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z[J] = e^{\sum(\text{source-à-source connexes})}\; e^{\sum(\text{vides connexes})}\\
\displaystyle \Longrightarrow
\mathcal Z[J] = \frac{Z[J]}{Z[0]} = \exp\Big[\sum\big(\text{source-à-source connexes}\big)\Big]
$
</p>

La fonctionnelle normalisée gagne ainsi son identité propre&nbsp;: <b>l'exponentielle des seuls diagrammes source-à-source connexes</b>. La division par $Z[0]$ est, une fois encore, la simplification de l'exponentielle des vides.

</div>




<!-- Figure à redessiner (panneau (a) = le « Dumbbell » de L&B fig. 22.2 : deux blobs hachurés J reliés par une ligne de propagateur ; compléter en bestiaire) : (a) le Dumbbell source-à-source minimal ; (b) le même avec une self-énergie (huître) sur la ligne ; (c) un diagramme du vide isolé ; (d) un exemple déconnecté = (a) accompagné de (c). Légende : Z[J] les somme tous ; ln Z[J] ne garde que les connexes ; la normalisation efface (c) et (d) -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:460px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/illhaltere.png" style="box-shadow:none;background:none;">
</div>

<ul>
<li>On peut ajouter le diagramme (a) à notre bestiaire. C'est l'<b>haltère</b> (Dumbbell).</li>
<li>(b) est un haltère avec une self-énergie.</li> 
<li>(c) est un diagramme du vide</li> 
<li>Et (d) est un diagramme connexe composé de (a) et (c).</li>
</ul>


$Z[J]$ les somme tous. $\ln(Z[J])$ ne garde que les connexes. La normalisation efface (c) et (d).


<div id="preuve">

Deux clous dans le vide&nbsp;: la troisième dérivation du <b>potentiel de Yukawa</b>

Théorie&nbsp;: $\mathcal L = \frac12(\partial\phi)^2 - \frac{m^2}{2}\phi^2 + gJ\phi$, avec pour source deux «&nbsp;clous&nbsp;» statiques plantés dans le vide, $J(x) = \delta^{(3)}(\mathbf x - \mathbf x_1) + \delta^{(3)}(\mathbf x - \mathbf x_2)$. Aucune particule ne diffuse&nbsp;: on demande seulement au vide <i>ce que ça lui coûte</i>.

L'haltère de cette théorie&nbsp;: $(\text{Dumbbell}) = \frac{(-ig)^2}{2}\int\mathrm{d}^4x\\,\mathrm{d}^4y\\;\\, J(x)\\,\Delta(x-y)\\,J(y)$.

Injectons les deux deltas et gardons les termes croisés $1 \leftrightarrow 2$ (l'auto-énergie de chaque clou est une constante sans intérêt)&nbsp;; les sources étant <i>statiques</i>, l'intégrale sur les temps épingle $p^0 = 0$, et le propagateur de Feynman dégénère en fonction de Green statique, $\frac{\mathrm{i}}{p^2 - m^2 + \mathrm{i}\varepsilon}\big|_{p^0 = 0} = \frac{-\mathrm{i}}{\mathbf p^2 + m^2}$, plus besoin de $\mathrm{i}\varepsilon$. On retrouve la limite statique du propagateur de Feynman&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\text{Dumbbell})_{12} = i g^2 \int\mathrm{d}x^0 \int\frac{\mathrm{d}^3p}{(2\pi)^3}\;\, \frac{e^{i\mathbf p\cdot(\mathbf x_1 - \mathbf x_2)}}{\mathbf p^2 + m^2}
$
</p>


Le coup de génie&nbsp;: le vide en présence des deux clous est un état stationnaire d'énergie $E$. Sur la durée $T$ des sources, il accumule donc la phase $\langle 0|\hat S|0\rangle = e^{-iET}$. Or $\langle 0|\hat S|0\rangle = e^{(\text{Dumbbell})}$ et $\int\mathrm{d}x^0 = T$. En identifiant les exposants&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = -g^2\int\frac{\mathrm{d}^3p}{(2\pi)^3}\;\frac{e^{i\mathbf p\cdot(\mathbf x_1 - \mathbf x_2)}}{\mathbf p^2 + m^2}
= -\frac{g^2}{4\pi\,|\mathbf x_1 - \mathbf x_2|}\;\, e^{-m|\mathbf x_1 - \mathbf x_2|}
$
</p>

Enseignements&nbsp;:

<ul style="margin-top:-0.5em;margin-bottom:1em;">
<li>On a obtenu une troisième dérivation du potentiel de Yukawa, et c'est la plus profonde.
<ul>
<li>Chapitre propagateurs: fonction de Green statique (raccourci semi-classique).</li>
<li>Chapitre diffusion&nbsp;: limite de Born (il fallait des particules qui se croisent).</li>
<li>Ici&nbsp;: <b>l'énergie du vide déformé par deux sources immobiles, lue directement dans $Z[J]$</b>. Pas de diffusion, pas de limite non relativiste&nbsp;: deux clous, et le vide qui répond en abaissant son énergie. La «&nbsp;force&nbsp;» est un déplacement d'énergie de point zéro.</li>
</ul>
</li>
<li><b>Le signe est structurel</b>&nbsp;: $E < 0$, les clous s'attirent. L'échange d'un scalaire attire des sources identiques.</li>
<li>Méthodologiquement&nbsp;: $\langle 0|\hat S|0\rangle = e^{-iET}$ est un <b>extracteur d'énergie du fondamental</b>. L'astuce resservira sans cesse (énergies de Casimir, potentiels effectifs).</li>
</ul>

</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\mathcal L
\;\overset{+\,J\phi}{\longrightarrow}\;
Z[J]
\;\overset{(\delta/\delta J)^n,\, J=0}{\longrightarrow}\;
G^{(n)} = \langle\Omega|T\hat\phi_H\cdots\hat\phi_H|\Omega\rangle
\;\overset{\text{Gell-Mann–Low}}{\longrightarrow}\;
\frac{\langle 0|T\hat\phi_I\cdots\hat\phi_I\,\hat S|0\rangle}{\langle 0|\hat S|0\rangle}
\;\overset{\text{amas liés}}{\longrightarrow}\;
\sum \text{connexes}
$
</p>



### Pièges

<ul>
<li><b>Deux vides, deux évolutions</b>&nbsp;: $|\Omega\rangle$ (interaction, exact) contre $|0\rangle$ (libre, calculable)&nbsp;; $\hat\phi_H$ (sous $\hat H$) contre $\hat\phi_I$ (sous $\hat H_0$).</li>
<li>Wick ne s'applique <b>qu'aux champs libres</b>&nbsp;: c'est la raison d'être du détour entier par Gell-Mann–Low.</li>
<li>$\mathcal L + J\phi$ signifie $\hat H - J\hat\phi$&nbsp;: le signe change en route (même piège qu'avec $\hat{\mathcal H}_I = -\hat{\mathcal L}_I$).</li>
<li>Les dérivées fonctionnelles <i>consomment</i> les sources&nbsp;: après $n$ dérivées et $J = 0$, seul le terme d'ordre $n$ survit (le $1/n!$ et les $\mathrm{i}^n$ s'évaporent exactement).</li>
<li>La normalisation $Z[0]$ n'est pas cosmétique&nbsp;: c'est elle qui évacue les diagrammes du vide (et le théorème des amas liés dit <i>comment</i>&nbsp;: par simplification d'une exponentielle).</li>
<li>Le $1/n_i!$ des copies de diagrammes du vide est un facteur de symétrie (le comptage du chapitre sur les diagrammes continue de travailler en coulisses).</li>
</ul>



{{%notice note%}}
Et maintenant&nbsp;? Le calcul <i>direct</i> de $Z[J]$ par l'intégrale de chemin de Feynman (où la théorie libre donnera la jolie forme fermée $Z_0[J] \propto \exp\big[-\tfrac12\int J\Delta J\big]$), et la correspondance profonde temps imaginaire $\leftrightarrow$ température ($\beta \leftrightarrow it$), qui transformera l'analogie de ce chapitre en identité.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc7">Chapitre précédent</a></td><td><a href="../tqc9">Chapitre suivant</a></td>
    </tr>
</table>
</div>