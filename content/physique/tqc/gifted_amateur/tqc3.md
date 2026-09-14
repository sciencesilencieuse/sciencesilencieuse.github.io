+++
title = "TQC-3"
date = 2021-03-06T14:20:50+01:00
weight = 3
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



# Théorie quantique des champs -- Partie 3

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

Cette partie rassemble l'outillage qui manque encore avant de quantifier les champs, et il tient en trois questions.

<ul>
<li><b>Qui porte le temps&nbsp;?</b> Dans la représentation de Schrödinger, les états&nbsp;; dans celle d'Heisenberg, les opérateurs. La seconde, plus proche de la mécanique classique, sera l'habit naturel des champs quantiques, qui sont des opérateurs dynamiques définis en chaque point de l'espace-temps.</li>
<li><b>Comment transformer&nbsp;?</b> Translations, rotations, boosts&nbsp;: chaque transformation continue s'écrit comme l'exponentielle d'un <b>générateur</b> ($\hat{\boldsymbol{p}}$, $\hat{H}$, $\hat{\boldsymbol{J}}$, $\boldsymbol{K}$), et la théorie des <b>représentations</b> dit comment une même transformation agit sur un scalaire, un vecteur ou un spineur.</li>
<li><b>Que rapportent les symétries&nbsp;?</b> Le théorème de Noether&nbsp;: toute symétrie continue du lagrangien engendre un courant conservé, donc une charge conservée. L'énergie et l'impulsion sont les charges des translations de l'espace-temps.</li>
</ul>

En chemin, deux résultats montrent pourquoi la mécanique quantique à une particule ne survivra pas à la relativité, et pourquoi il faudra des champs.

## Évolution temporelle

Deux représentations de la mécanique quantique s'opposent quant à la description de l'évolution temporelle d'un système&nbsp;: la représentation de Schrödinger et la représentation d'Heisenberg.


### Représentation de Schrödinger

Dans la **représentation de Schrödinger**, ce sont les fonctions d'onde qui dépendent du temps et leur évolution est déterminée par l'équation de Schrödinger&nbsp;:

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\mathrm{i} \frac{\partial \psi(\boldsymbol{x}, t)}{\partial t}=\hat{H} \psi(\boldsymbol{x}, t)
$
</p>
</div>

On accède aux variables dynamiques comme la position et l'impulsion via des opérateurs ($\hat{\boldsymbol{x}}=\boldsymbol{x}$, $\hat{\boldsymbol{p}}=-\mathrm{i} \nabla$) qui agissent sur la fonction d'onde.

On est très loin de la mécanique classique où les variables dynamiques ($\boldsymbol{p}(t)$, $\boldsymbol{x}(t)$,...) dépendent du temps et sont donc décrites par des équations du mouvement. Mais comme aucun "opérateur temps" n'existe en mécanique quantique, il faut se contenter d'un paramètre temporel $t$ que la représentation de Schrödinger confine donc entièrement dans la fonction d'onde.

Pas d'opérateur donnant le temps mais quand même un **opérateur d'évolution** $\hat{U}(t\_2,t\_1)$ permettant de faire évoluer une particule de $t\_1$ à $t\_2$.

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\psi\left(t_2\right)=\hat{U}\left(t_2, t_1\right) \psi\left(t_1\right)
$
</p>
</div>

L'opérateur d'évolution a les propriétés suivantes&nbsp;:
<ol style="margin-top:0.5em;">
<li>$\hat{U}\left(t_1, t_1\right)=1$<br>
Rien ne se passe si les instants sont les mêmes.
</li>
<br>
<li>$\hat{U}\left(t_3, t_2\right) \hat{U}\left(t_2, t_1\right)=\hat{U}\left(t_3, t_1\right)$<br>
Cette relation de composition montre qu'on peut construire une translation temporelle quelconque en multipliant entre elles une multitude de translations temporelles minuscules.
</li>
<br>
<li>$\displaystyle \mathrm{i} \frac{\mathrm{d}}{\mathrm{d} t_2} \hat{U}\left(t_2, t_1\right)=\hat{H} \hat{U}\left(t_2, t_1\right)$<br>
L'opérateur d'évolution lui-même obéit à l'équation de Schrödinger.
<br><br>
<div id="preuve">

Pour le prouver, on part de $\psi\left(t\_2\right)=\hat{U}\left(t\_2, t\_1\right) \psi\left(t\_1\right)$ et on dérive par rapport à $t\_2$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\frac{\mathrm{d} \psi\left(t_2\right)}{\mathrm{d} t_2}=\frac{\mathrm{d} \hat{U}\left(t_2, t_1\right)}{\mathrm{d} t_2} \psi\left(t_1\right)
$
</p>

Et en utilisant $\mathrm{i} \frac{\partial \psi(\boldsymbol{x}, t)}{\partial t}=\hat{H} \psi(\boldsymbol{x}, t)$, on obtient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\mathrm{i} \frac{\mathrm{d} \psi\left(t_2\right)}{\mathrm{d} t_2}=\hat{H} \psi\left(t_2\right)=\hat{H} \hat{U}\left(t_2, t_1\right) \psi\left(t_1\right)
$
</p>
</div></li>
<br>

<li>$\hat{U}\left(t_1, t_2\right)=\hat{U}^{-1}\left(t_2, t_1\right)$<br>
En prenant l'inverse de l'opérateur d'évolution, on remonte le temps.
</li>

<br>

<li>$\hat{U}^{\dagger}\left(t_2, t_1\right) \hat{U}\left(t_2, t_1\right)=1,$<br>
L'opérateur d'évolution est unitaire.
<br><br>
<div id="preuve">

Pour $t\_2=t\_1$, c'est trivial.

Pour $t\_2\neq t\_1$, montrons que cette composition d'opérateurs est constante (et cette constante vaut 1 par normalisation)&nbsp;:

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t_2}\left[\hat{U}^{\dagger}\left(t_2, t_1\right) \hat{U}\left(t_2, t_1\right)\right] & =\frac{\mathrm{d} \hat{U}^{\dagger}}{\mathrm{d} t_2} \hat{U}+\hat{U}^{\dagger} \frac{\mathrm{d} \hat{U}}{\mathrm{d} t_2} \\
& =-\frac{\hat{U}^{\dagger} \hat{H} \hat{U}}{\mathrm{i}}+\frac{\hat{U}^{\dagger} \hat{H} \hat{U}}{\mathrm{i}}\\
&=0
\end{aligned}
$
</p>

où on a utilisé $\frac{\mathrm{d} \hat{U}}{\mathrm{d} t}=\frac{\hat{H} \hat{U}}{\mathrm{i}}$ et $\frac{\mathrm{d} \hat{U}^{\dagger}}{\mathrm{d} t}=-\frac{\hat{U}^{\dagger} \hat{H}}{\mathrm{i}}$. 

</div>

</div>

Une conséquence directe est que $\hat{U}^\dagger(t\_2,t\_1)=\hat{U}^{-1}(t\_2,t\_1)$&nbsp;; l'opérateur adjoint est l'opérateur inverse.

</li>

</ol>

La propriété 3 permet d'exprimer explicitement $\hat{U}(t\_2,t\_1)$&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}\left(t_2, t_1\right)=\mathrm{e}^{-\mathrm{i} \hat{H}\left(t_2-t_1\right)}
$
</p>
</div>

<br>

<div id="preuve">

Ce type d'expression exponentielle cache le développement&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\mathrm{e}^{\hat{A}}=1+\hat{A}+\frac{1}{2!} \hat{A} \hat{A}+\frac{1}{3!} \hat{A} \hat{A} \hat{A}+\ldots
$
</p>

</div>

<br>

### Représentation d'Heisenberg

Plutôt que de placer la dépendance temporelle dans la fonction d'onde, dans la **représentation d'Heisenberg**, ce sont les opérateurs qui la prennent en charge.

Pour passer d'une représentation à l'autre, commençons par écrire la valeur moyenne de l'opérateur $O$ dans l'état $\psi(t)$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\hat{O}(t)\rangle=\langle\psi(t)| \hat{O}|\psi(t)\rangle
$
</p>

Toutes les représentations doivent s'accorder sur ce résultat.

Utilisons maintenant l'opérateur d'évolution pour ne plus avoir à s'occuper que de l'état à l'instant initial $\psi(0)$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi(t)=\hat{U}(t, 0) \psi(0)=\mathrm{e}^{-\mathrm{i} \hat{H} t} \psi(0)
$
</p>

Et en replaçant $\psi(t)$ dans l'expression de la valeur moyenne&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\psi(t)| \hat{O}|\psi(t)\rangle=\langle\psi(0)| \hat{U}^{\dagger}(t, 0) \hat{O} \hat{U}(t, 0)|\psi(0)\rangle
$
</p>

Dans la représentation de Schrödinger, on considère les opérateurs comme indépendants du temps ($\hat{O}\_{\mathrm{S}} \equiv \hat{O}$), contrairement aux états ($\left|\psi\_{\mathrm{S}}(t)\right\rangle \equiv \hat{U}(t, 0)|\psi(0)\rangle$) de telle sorte que&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\psi(0)| \hat{U}^{\dagger}(t, 0)[\hat{O}] \hat{U}(t, 0)|\psi(0)\rangle=\left\langle\psi_{\mathrm{S}}(t)\right| \hat{O}_{\mathrm{S}}\left|\psi_{\mathrm{S}}(t)\right\rangle
$
</p>

Mais en étendant un peu les crochets, on obtient une nouvelle façon de voir les choses où les opérateurs deviennent des objets dynamiques&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\psi(0)|\left[\hat{U}^{\dagger}(t, 0) \hat{O} \hat{U}(t, 0)\right]|\psi(0)\rangle=\left\langle\psi_{\mathrm{H}}\right| \hat{O}_{\mathrm{H}}(t)\left|\psi_{\mathrm{H}}\right\rangle
$
</p>

On obtient ainsi la représentation d'Heisenberg où les états sont indépendants du temps ($\psi\_{\mathrm{H}} \equiv \psi(0)$), contrairement aux opérateurs&nbsp;:

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\hat{O}_{\mathrm{H}}(t) \equiv \hat{U}^{\dagger}(t, 0) \hat{O}_{\mathrm{S}} \hat{U}(t, 0)
$
</p>
</div>

On retrouve une situation similaire à la mécanique classique avec ses variables dynamiques.

Et pour expliciter la dépendance temporelle de $\hat{O}\_H(t)$, on différentie l'équation précédente et on utilise la propriété 3 de l'opérateur d'évolution&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\frac{\mathrm{d} \hat{O}_{\mathrm{H}}(t)}{\mathrm{d} t}=\frac{\mathrm{d} \hat{U}^{\dagger}}{\mathrm{d} t} \hat{O}_{\mathrm{S}} \hat{U}+\hat{U}^{\dagger} \hat{O}_{\mathrm{S}} \frac{\mathrm{d} \hat{U}}{\mathrm{d} t}=\frac{1}{\mathrm{i}}\left(-\hat{U}^{\dagger} \hat{H} \hat{O}_{\mathrm{S}} \hat{U}+\hat{U}^{\dagger} \hat{O}_{\mathrm{S}} \hat{H} \hat{U}\right)
$
</p>

En utilisant la définition de $\hat{O}\_H(t)$ et le fait que $\hat{U}$ et $\hat{H}$ commutent (puisque $\hat{U}$ s'exprime à partir de $\hat{H}$), on obtient l'équation du mouvement d'Heisenberg&nbsp;:

<div id="theo">

<p style="text-align:center; ">
$\displaystyle
\frac{\mathrm{d} \hat{O}_{\mathrm{H}}(t)}{\mathrm{d} t}=\frac{1}{\mathrm{i}}\left[\hat{O}_{\mathrm{H}}(t), \hat{H}\right]
$
</p>

</div>

<br>

### Les limites de la description du monde par la mécanique quantique

La mécanique quantique "classique" est une description formidable du monde à petite échelle. Mais c'est fondamentalement une description à une particule. Tant qu'on n'est pas embêté par la relativité, ça suffit. Mais les deux résultats suivants témoignent de l'incapacité de la mécanique quantique à une particule à s'accommoder d'un cadre relativiste.

Premier coup dur&nbsp;: la probabilité de trouver la particule en dehors de son cône de lumière n'est pas nulle. En effet, $\langle\boldsymbol{x}| \mathrm{e}^{-\mathrm{i} \hat{H} t}|\boldsymbol{x}=0\rangle$ donne un résultat proportionnel à $\mathrm{e}^{-m|x|}$ pour un intervalle de type espace (tel que $|x|>t$). C'est certes infime pour des grands $|\boldsymbol{x}|$, mais cela reste difficilement acceptable...

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqccone.png">
</div>

Deuxième coup porté&nbsp;: imaginons que l'on cloisonne la particule entre deux murs (des barrières de potentiel) séparés d'une distance bien inférieure à sa longueur d'onde de Compton $\lambda=h/(mc)$ ($1/m$ en unités naturelles). La minuscule incertitude sur la position ($\Delta x \ll \lambda$) entraîne une incertitude sur l'impulsion telle ($\Delta p \gg 1/\lambda=m$) que l'énergie de la particule devient suffisante pour faire jaillir des paires de particules-antiparticules. La boite devrait alors contenir en moyenne plus d'une particule, situation que la mécanique quantique "classique" n'est pas câblée pour décrire.

Ces objets définis localement (en un point $x$ de l'espace-temps) que sont les champs et plus précisément les **champs d'opérateurs** $\hat{\phi}(x)$ vont tirer la quantique de ce mauvais pas. Et puisqu'il s'agit de placer au premier plan des opérateurs dynamiques, la représentation d'Heisenberg va se trouver être la représentation idoine.<br>
Pour rendre un champ d'opérateurs compatible avec la relativité, il suffit de s'assurer que des opérateurs éloignés d'un intervalle de type espace commutent ($[\hat{\phi}(x), \hat{\phi}(y)]=0$ si $(x-y)^2<0$). Cela empêche que le résultat de l'une des mesures puisse influer causalement le résultat de l'autre.

<br>

## Transformations continues

### Translations dans l'espace-temps

Pour translater une particule dans l'espace, il nous faut un opérateur $\hat{U}$ qui transforme un état localisé en $\boldsymbol{x}$ en un état localisé en $\boldsymbol{x}+\boldsymbol{a}$&nbsp;:

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(\boldsymbol{a})|\boldsymbol{x}\rangle=|\boldsymbol{x}+\boldsymbol{a}\rangle
$
</p>
</div>

On suppose ici qu'on a transporté la particule à sa nouvelle place&nbsp;; on parle alors de point de vue actif.

Faisons maintenant agir l'opérateur sur une fonction d'onde $\psi(x)$&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(\boldsymbol{a})\psi(\boldsymbol{x})=\psi(\boldsymbol{x}-\boldsymbol{a})
$
</p>
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqctrans.png">
</div>

<div id="preuve">

Soit $|\psi\rangle$ l'état décrit par la fonction d'onde  $\psi(\boldsymbol{x})=\langle\psi|\boldsymbol{x}\rangle$ et soit $|\phi\rangle=\hat{U}(\boldsymbol{a})|\psi\rangle$, l'état translaté.

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
\phi(\boldsymbol{x}) & =\langle \boldsymbol{x} | \phi\rangle\\
&=\langle \boldsymbol{x} | \hat{U}(\boldsymbol{a})|\psi\rangle\\
&=\int \mathrm{d} \boldsymbol{x}^{\prime} \langle \boldsymbol{x} | \hat{U}(\boldsymbol{a}) | \boldsymbol{x}^{\prime}\rangle \langle \boldsymbol{x}^{\prime} | \psi \rangle\\
&=\int \mathrm{d} \boldsymbol{x}^{\prime} \langle \boldsymbol{x} | \boldsymbol{x}^{\prime}+\boldsymbol{a} \rangle \langle \boldsymbol{x}^{\prime} | \psi\rangle \\
& =\int \mathrm{d} \boldsymbol{x}^{\prime} \delta (\boldsymbol{x}-\boldsymbol{x}^{\prime}-\boldsymbol{a}) \psi (\boldsymbol{x}^{\prime})\\
&=\psi(\boldsymbol{x}-\boldsymbol{a})
\end{aligned}
$
</p>

</div>

En réécrivant ça $\phi(\boldsymbol{x}+\boldsymbol{a})=\psi(\boldsymbol{x})$, on obtient un moyen simple de se souvenir du signe&nbsp;: 

>la valeur de la nouvelle fonction d'onde au nouveau point est égale à la valeur de l'ancienne fonction d'onde à l'ancien point.

Propriétés de l'opérateur de translation&nbsp;:

<ul>

<li>
$\hat{U}(\boldsymbol{0})=1$<br>
Présence d'un élément neutre.
</li>

<li>
$\hat{U}(\boldsymbol{a})\hat{U}(\boldsymbol{b})=\hat{U}(\boldsymbol{a}+\boldsymbol{b})$<br>
Loi de composition.
</li>

<li>
$\hat{U}(\boldsymbol{a})^{-1}=\hat{U}(-\boldsymbol{a})$<br>
L'opérateur de translation admet un inverse.
</li>

<li>
$\hat{U}(\boldsymbol{a})^{-1}=\hat{U}(\boldsymbol{a})^\dagger$<br>
L'opérateur de translation est <b>unitaire</b>.
</li>

</ul>

Ces propriétés montrent que ces transformations forment un *groupe*&nbsp;; et comme chaque élément dépend continûment d'un paramètre ($\boldsymbol{a}$), le groupe possède une infinité d'éléments&nbsp;: il s'agit d'un **groupe de Lie**.

<div id="preuve">

Un **groupe** est un ensemble $G$ muni d'une loi de composition interne $\bullet$ associative admettant un élément neutre et, pour chaque élément de l'ensemble, un élément symétrique&nbsp;:
<ul>
<li>$\forall a, b \in G, a \bullet b \in G$ (loi de composition interne assurant la fermeture du groupe)</li>
<li>$\forall a, b, c \in G, a \bullet(b \bullet c)=(a \bullet b) \bullet c$ (associativité)</li>
<li>$\exists e \in G$ tel que $\forall a \in G, a \bullet e=e \bullet a=a$ (élément neutre)</li>
<li>$\forall a \in G, \exists a^{-1} \in G$ tel que $a \bullet a^{-1}=a^{-1} \bullet a=e$ (inverse)</li>
</ul>
</div>

{{%notice note%}}
[Des vieilles notes de lecture d'un autre chouette livre](https://sciencesilencieuse.github.io/maths/groupes/) pour en savoir un peu plus sur les groupes discrets.
{{%/notice%}}

L'opérateur de translation peut aussi être vu comme la transformation d'un opérateur&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{\dagger}(\boldsymbol{a}) \hat{\boldsymbol{x}} \hat{U}(\boldsymbol{a})=(\hat{\boldsymbol{x}}+\boldsymbol{a}) .
$
</p>
</div>

<br>

<div id="preuve">
<div id="grosseformule">
On a en effet&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\hat{U}(\boldsymbol{a})|\boldsymbol{x}\rangle & =|\boldsymbol{x}+\boldsymbol{a}\rangle \\
\hat{\boldsymbol{x}} U(\boldsymbol{a})|\boldsymbol{x}\rangle & =\hat{\boldsymbol{x}}|\boldsymbol{x}+\boldsymbol{a}\rangle=(\boldsymbol{x}+\boldsymbol{a})|\boldsymbol{x}+\boldsymbol{a}\rangle \\
U^{\dagger}(\boldsymbol{a}) \hat{\boldsymbol{x}} U(\boldsymbol{a})|\boldsymbol{x}\rangle & =(\boldsymbol{x}+\boldsymbol{a}) U^{\dagger}(\boldsymbol{a})|\boldsymbol{x}+\boldsymbol{a}\rangle=(\boldsymbol{x}+\boldsymbol{a})|\boldsymbol{x}\rangle
\end{aligned}
$
</p>

</div>
</div>

Imaginons une observable représentée par l'opérateur $\hat{O}$. Si une translation n'a pas d'effet sur la propriété mesurée par cet opérateur, on peut écrire&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\psi(\boldsymbol{x})| \hat{O}|\psi(\boldsymbol{x})\rangle=\langle\psi(\boldsymbol{x})| \hat{U}^{-1}(\boldsymbol{a}) \hat{O} \hat{U}(\boldsymbol{a})|\psi(\boldsymbol{x})\rangle
$
</p>
 
 On dit alors que l'opérateur est un **invariant** et la condition pour qu'un opérateur $\hat{O}$ soit un invariant est donc&nbsp;:
     
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{-1}(\boldsymbol{a}) \hat{O} \hat{U}(\boldsymbol{a})=\hat{O}
$
</p>


Ce qui devient en faisant agir $\hat{U}$ à gauche de chaque membre de l'égalité&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
[\hat{O},\hat{U}]=0
$
</p>
</div>

L'invariance par rapport à une transformation implique la commutation des opérateurs.

Essayons maintenant d'obtenir une formule explicite pour l'opérateur de translation.

<p style="text-align:center; ">
$\displaystyle
\psi(x-\delta a)=\psi(x)-\frac{\mathrm{d} \psi(x)}{\mathrm{d} x} \delta a+\ldots
$
</p>

Ce qu'on peut réécrire au premier ordre, en se rappelant que $\hat{p}=-\mathrm{i} \frac{\mathrm{d}}{\mathrm{d} x}$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi(x-\delta a)=(1-\mathrm{i} \hat{p} \delta a) \psi(x)
$
</p>

On dit que l'opérateur $\hat{p}$ est le **générateur** des translations spatiales. Pour opérer une translation d'une distance $a$, on peut translater de $\delta a$ un grand nombre $N$ de fois&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
\psi(x-a) & =\lim _{N \rightarrow \infty}(1- \mathrm{i} \hat{p} \delta a)^N \psi(x) \\
& =\mathrm{e}^{-\mathrm{i} \hat{p} a} \psi(x)
\end{aligned}
$
</p>

Par identification&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(\boldsymbol{a})=\mathrm{e}^{-\mathrm{i} \hat{\boldsymbol{p}} \cdot \boldsymbol{a}}
$
</p>
</div>

Action de l'opérateur de translation sur un état d'impulsion $|\boldsymbol{q}\rangle$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
\hat{U}(\boldsymbol{a})|\boldsymbol{q}\rangle & =\mathrm{e}^{-\mathrm{i} \hat{p} \cdot \boldsymbol{a}}|\boldsymbol{q}\rangle \\
& =\mathrm{e}^{-\mathrm{i} \boldsymbol{q} \cdot \boldsymbol{a}}|\boldsymbol{q}\rangle
\end{aligned}
$
</p>

Projeté sur l'axe des coordonnées, on obtient bien une fonction d'onde translatée&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\boldsymbol{x}| \hat{U}(\boldsymbol{a})|\boldsymbol{q}\rangle=\langle\boldsymbol{x} | \boldsymbol{q}\rangle \mathrm{e}^{-\mathrm{i} \boldsymbol{q} \cdot \boldsymbol{a}}=\frac{1}{\sqrt{\mathcal{V}}} \mathrm{e}^{\mathrm{i} \boldsymbol{q} \cdot(\boldsymbol{x}-\boldsymbol{a})}
$
</p>

L'opérateur d'évolution de la section précédente peut aussi être vu comme un opérateur de translation temporelle.

On peut le reconstruire sur le modèle des translations spatiales en partant d'une petite variation $\delta t\_a$ dans la fonction d'onde&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi\left(t-\delta t_a\right)=\psi(t)-\frac{\mathrm{d} \psi(t)}{\mathrm{d} t} \delta t_a+\ldots
$
</p>

Et comme $\hat{H}=\mathrm{i} \frac{\mathrm{d}}{\mathrm{d} t}$, on obtient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi\left(t-\delta t_a\right)=\left(1+\mathrm{i} \hat{H} \delta t_a\right) \psi(t)
$
</p>

Ce qui donne finalement&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(t_a)=\mathrm{e}^{\mathrm{i}\hat{H}t_a}
$
</p>
</div>

On peut dès lors combiner les deux translations en un seul opérateur de translation spatio-temporelle en définissant l'opérateur quadri-impulsion $\hat{p}=(\hat{H}, \hat{\boldsymbol{p}})$&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(a)=\mathrm{e}^{\mathrm{i} \hat{p} \cdot a}=\mathrm{e}^{\mathrm{i} \hat{H} t_a-\mathrm{i} \hat{\boldsymbol{p}} \cdot \boldsymbol{a}}
$
</p>
</div>

<br>

### Rotations

Une matrice de rotation $\mathbf{R}(\boldsymbol{\theta})$ (où $\boldsymbol{\theta}$ est le vecteur dont l'axe est celui de la rotation et la norme est donnée par l'angle) agit sur une grandeur vectorielle comme l'impulsion&nbsp;: $\boldsymbol{p}^{\prime}=\mathbf{R}(\boldsymbol{\theta}) \boldsymbol{p}$. L'opérateur vectoriel associé peut se définir comme&nbsp;:

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\left|\boldsymbol{p}^{\prime}\right\rangle=\hat{U}(\boldsymbol{\theta})|\boldsymbol{p}\rangle=|\mathbf{R}(\boldsymbol{\theta}) \boldsymbol{p}\rangle
$
</p>
</div>

L'opérateur possède à nouveau les propriétés clés attendues pour une telle transformation&nbsp;:

<ul>
<li>unitarité&nbsp;: $\hat{U}^{\dagger}(\boldsymbol{\theta}) \hat{U}(\boldsymbol{\theta})=1$</li>
<li>présence d'un élément neutre&nbsp;: $\hat{U}(0)=1$</li>
<li>loi de composition interne&nbsp;: $\hat{U}(\boldsymbol{\theta}_1)\hat{U}(\boldsymbol{\theta}_2)=\hat{U}(\boldsymbol{\theta}_{12})$ où $\mathbf{R}(\boldsymbol{\theta}_{12})=\mathbf{R}(\boldsymbol{\theta}_1) \mathbf{R}(\boldsymbol{\theta}_2)$</li>
</ul>

<div id="preuve">

<details>
<summary>Preuve de l'unitarité&nbsp;:</summary>
<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
\hat{U}(\boldsymbol{\theta}) \hat{U}^{\dagger}(\boldsymbol{\theta}) & =\hat{U}(\boldsymbol{\theta})\left(\int \mathrm{d}^3 p|\boldsymbol{p}\rangle\langle\boldsymbol{p}|\right) \hat{U}^{\dagger}(\boldsymbol{\theta}) \\
& =\int \mathrm{d}^3 p|\mathbf{R}(\boldsymbol{\theta}) \boldsymbol{p}\rangle\langle\mathbf{R}(\boldsymbol{\theta}) \boldsymbol{p}|\\
&=\int \mathrm{d}^3 \boldsymbol{p}^{\prime}|\boldsymbol{p}^{\prime}\rangle\langle\boldsymbol{p}^{\prime}|\\
&=1
\end{aligned}
$
</p>

Puisque $\boldsymbol{p}^{\prime}=\mathbf{R}(\boldsymbol{\theta}) \boldsymbol{p}$ et $\mathrm{d}^3 p^{\prime}=\mathrm{d}^3 p$ car $\operatorname{det} \mathbf{R}(\boldsymbol{\theta})=1$ par conservation de l'orientation (et donc le jacobien vaut 1).

</details>

</div>

Ces opérateurs forment un nouveau groupe de Lie appelé le groupe des rotations.

<div id="preuve">

Translations dans l'espace-temps, rotations et boosts de Lorentz et leurs combinaisons sont tous des éléments du groupe de Poincaré et peuvent tous être représentés par des opérateurs unitaires.

</div>

La rotation, non plus d'un état, mais d'un opérateur, est donnée par&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{\dagger}(\boldsymbol{\theta}) \,\hat{\boldsymbol{p}} \,\hat{U}(\boldsymbol{\theta})=\mathbf{R}(\boldsymbol{\theta}) \hat{\boldsymbol{p}}
$
</p>
</div>

Cherchons là encore à exprimer explicitement l'opérateur en partant d'une petite rotation selon l'axe des $z$ d'une fonction d'onde&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi\left(\theta^z-\delta \theta^z\right)=\psi\left(\theta^z\right)-\frac{\mathrm{d} \psi\left(\theta^z\right)}{\mathrm{d} \theta^z} \delta \theta^z+\ldots
$
</p>

C'est maintenant l'opérateur moment angulaire qui va jouer le rôle de générateur de la transformation. Et dans notre cas, on utilise le fait que $\hat{J}^z=-\mathrm{i} \frac{\mathrm{d}}{\mathrm{d} \theta^z}$&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\psi\left(\theta-\delta \theta^z\right)=\left(1-\mathrm{i} \hat{J}^z \delta \theta^z\right) \psi\left(\theta^z\right)
$
</p>

Et finalement, en répétant $N\rightarrow\infty$ fois l'opération, l'opérateur s'écrit $\hat{U}(\theta^z)=\mathrm{e}^{-\mathrm{i} \hat{J}^z \theta^z}$. Et en généralisant à une rotation quelconque&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(\boldsymbol{\theta})=\mathrm{e}^{-\mathrm{i} \hat{\boldsymbol{J}} \cdot \boldsymbol{\theta}}
$
</p>
</div>

<br>

### Représentation des transformations

Transformer un champ est un poil plus compliqué puisqu'il faut à la fois bouger le champ au nouvel endroit et transformer aussi l'objet que le champ produit. Or cet objet peut être de nature différente&nbsp;: scalaire, vectorielle ou spinorielle. Il faut donc pouvoir adapter une même transformation à ces différents objets et c'est la théorie des **représentations** qui permet cela.

<div id="def">

Une représentation d'un groupe, notée $D$, est obtenue en associant chaque élément $g\_i$ du groupe $G$ à un opérateur linéaire continu qui agit sur un espace vectoriel. Cette association doit préserver la règle de composition&nbsp;: si $g\_1\bullet g\_2=g\_3$, alors $D(g\_1)D(g\_2)=D(g\_3)$.<br>
En pratique, il s'agit de représenter les éléments du groupe par des matrices.

</div>

<br>

<div id="preuve">

<details>
<summary>
Exemple des rotations&nbsp;:
</summary>

Toute rotation $\boldsymbol{R}(\boldsymbol{\theta})$ peut être représentée par une matrice $D(\boldsymbol{\theta})$ qui prend une forme très similaire à l'opérateur&nbsp;: 

<p style="text-align:center; ">
$\displaystyle
D(\boldsymbol{\theta})=\mathrm{e}^{-\mathrm{i} \boldsymbol{J} \cdot \boldsymbol{\theta}}
$
</p>

$\boldsymbol{J}$ est une matrice carrée et une représentation de l'opérateur $\hat{\boldsymbol{J}}$. 

On peut isoler $J^i$ dans l'équation précédente&nbsp;:

<p style="text-align:center; ">
$\displaystyle
J^i=-\left.\frac{1}{\mathrm{i}} \frac{\partial D\left(\theta^i\right)}{\partial \theta^i}\right|_{\theta^i=0}
$
</p>

On note souvent les représentations des rotations d'un champ caractérisé par un nombre quantique de moment cinétique $j$, $D^{(j)}(\boldsymbol{\theta})$.

Considérons des rotations autour de l'axe des $z$.

<ul>

<li>Une représentation triviale est $D(\theta^z)=1$, et donc $J^z=-\left.\frac{1}{\mathrm{i}} \frac{\partial D\left(\theta^z\right)}{\partial \theta^z}\right|\_{\theta^z=0}=0$. Et par extension, $J^x=J^y=0$. C'est une représentation appropriée pour un champ scalaire puisqu'un scalaire ne peut avoir de moment cinétique. On a donc obtenu la représentation des rotations d'un champ scalaire&nbsp;: $D^{(0)}(\boldsymbol{\theta})=1$.</li>

<br>

<li>Pour un champ de spineurs (décrivant des particules de spin $\frac{1}{2}$), la représentation d'une rotation selon l'axe des $z$ peut s'écrire&nbsp;:

<p style="text-align:center; ">
$\displaystyle
D^{1/2}\left(\theta^z\right)=\left(\begin{array}{cc}
\mathrm{e}^{-\mathrm{i} \theta^z / 2} & 0 \\
0 & \mathrm{e}^{\mathrm{i} \theta^z / 2}
\end{array}\right)
$
</p>

Et donc 

<p style="text-align:center; ">
$\displaystyle
J^z=-\left.\frac{1}{\mathrm{i}} \frac{\partial D^{1/2}\left(\theta^z\right)}{\partial \theta^z}\right|_{\theta^z=0}=\frac{1}{2}\left(\begin{array}{cc}
1 & 0 \\
0 & -1
\end{array}\right)
$
</p>

</li>

<br>

<li>
Pour un champ vectoriel, la représentation matricielle des rotations est plus familière. Pour une rotation selon l'axe $z$, on a&nbsp;:

<p style="text-align:center; ">
$\displaystyle
D^{(1)}(\theta^z)=\mathbf{R}\left(\theta^z\right)=\left(\begin{array}{cccc}
1 & 0 & 0 & 0 \\
0 & \cos \theta^z & -\sin \theta^z & 0 \\
0 & \sin \theta^z &  \cos \theta^z & 0  \\
0 & 0 & 0 & 1
\end{array}\right)
$
</p>

Ce qui donne&nbsp;:

<p style="text-align:center; ">
$\displaystyle
J^z=-\left.\frac{1}{\mathrm{i}} \frac{\partial \mathbf{R}\left(\theta^z\right)}{\partial \theta^z}\right|_{\theta^z=0}=\mathrm{i}\left(\begin{array}{cccc}
0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0
\end{array}\right)
$
</p>
</li>
</ul>

La formule générale pour les éléments de matrice de $D^{(j)}(\boldsymbol{\theta})$ est donnée par&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
{\left[D^{(j)}(\boldsymbol{\theta})\right]_{m, m^{\prime}} } & =\left\langle j m^{\prime}\right| \hat{U}(\boldsymbol{\theta})|j m\rangle \\
& =\left\langle j m^{\prime}\right| \mathrm{e}^{-\mathrm{i} \hat{\boldsymbol{J}} \cdot \boldsymbol{\theta}}|j m\rangle
\end{aligned}
$
</p>

On peut ensuite utiliser les relations standard de l'opérateur moment cinétique&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{gathered}
\hat{J}^z|j \, m\rangle=m|j \, m\rangle, \\
\hat{J}^{ \pm}|j \, m\rangle=\sqrt{(j \mp m)(j+1 \pm m)}|j \,m \pm 1\rangle, \\
\hat{J}^{ \pm}=\hat{J}^x \pm \mathrm{i} \hat{J}^y .
\end{gathered}
$
</p>

</details>

</div>


Le point remarquable de toutes ces représentations est qu'elles partagent la même structure algébrique sous-jacente de l'opérateur rotation. Cette algèbre est appelée **algèbre de Lie** et peut apparaître dès qu'on a un groupe continu. 

La continuité entraîne en effet qu'il existe des éléments du groupe arbitrairement proches de l'identité pour lesquels on peut écrire $g(\boldsymbol{\alpha})=1+\mathrm{i} \alpha^i T^i+O(\alpha^2)$ où les $T^i$ sont les générateurs du groupe. L'algèbre de Lie s'exprime alors par le commutateur $\left[T^i, T^j\right]=\mathrm{i} f^{i j k} T^k$ où les $f^{ijk}$ sont appelées **constantes de structure**. 

Pour les rotations $T^i = J^i$ et $f^{ijk}=\varepsilon^{ijk}$.

<br>

### Transformations d'un champ quantique

Commençons par translater un champ scalaire.<br>
Si on translate à la fois un état et un opérateur du même vecteur $\boldsymbol{a}$, alors rien ne devrait changer&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\langle\boldsymbol{y}| \hat{\phi}(\boldsymbol{x})|\boldsymbol{y}\rangle=\langle\boldsymbol{y}+\boldsymbol{a}| \hat{\phi}(\boldsymbol{x}+\boldsymbol{a})|\boldsymbol{y}+\boldsymbol{a}\rangle
$
</p>

Or $|\boldsymbol{y}+\boldsymbol{a}\rangle=\hat{U}(\boldsymbol{a})|\boldsymbol{y}\rangle$, donc $\hat{\phi}(\boldsymbol{x}) = \hat{U}^\dagger (\boldsymbol{a}) \hat{\phi}(\boldsymbol{x}+\boldsymbol{a}) \hat{U}(\boldsymbol{a})$ et par conséquent&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{\dagger}(\boldsymbol{a}) \hat{\phi}(\boldsymbol{x}) \hat{U}(\boldsymbol{a})=\hat{\phi}(\boldsymbol{x}-\boldsymbol{a})
$
</p>
</div>

En passant aux rotations, on doit se rappeler que transformer le champ agit à la fois sur le point où le champ est évalué et sur la polarisation du champ. Et cette modification de la polarisation du champ se fait via la représentation appropriée de l'opérateur rotation (pour un champ scalaire, par exemple, $D(\boldsymbol{\theta})=1$).

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcrot.png">
</div>

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{\dagger}(\boldsymbol{\theta}) \hat{\boldsymbol{\Phi}}(x) \hat{U}(\boldsymbol{\theta})=D(\boldsymbol{\theta}) \hat{\boldsymbol{\Phi}}\left(\mathbf{R}^{-1}(\boldsymbol{\theta}) x\right)
$
</p>
</div>

Remarque&nbsp;: dans le dessin, $D(\boldsymbol{\theta}) $ s'occupe de tourner la flèche rouge à sa nouvelle place.

<br>

### Transformations de Lorentz

Après les translations et les rotations, cherchons à exprimer les **boosts** de Lorentz.

Une transformation de Lorentz selon l'axe $x$ est donnée par $x^{\prime \mu}=\boldsymbol{\Lambda}\left(\beta^1\right)\_{\\;\nu}^\mu x^\nu$ où&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\boldsymbol{\Lambda}\left(\beta^1\right)=\left(\begin{array}{cccc}
\gamma^1 & \beta^1 \gamma^1 & 0 & 0 \\
\beta^1 \gamma^1 & \gamma^1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right)
$
</p>

Cette transformation connecte deux référentiels inertiels en mouvement relatif avec une vitesse $v=c\beta^1$ selon $x$. En introduisant la **rapidité** $\phi^i$ définie par $\tanh \phi^i=\beta^i$, la matrice devient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\boldsymbol{\Lambda}\left(\phi^1\right)=\left(\begin{array}{cccc}
\cosh \phi^1 & \sinh \phi^1 & 0 & 0 \\
\sinh \phi^1 & \cosh \phi^1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{array}\right)
$
</p>

Introduisons un opérateur pour cette transformation dans l'espace de Hilbert&nbsp;: 

<div id="def">
<p style="text-align:center; ">
$\displaystyle
\hat{U}(\boldsymbol{\phi})|\boldsymbol{p}\rangle=|\boldsymbol{\Lambda}(\boldsymbol{\phi}) \boldsymbol{p}\rangle
$
</p>
</div>

Et sur le modèle des rotations, donnons une forme générale matricielle pour les représentations de la transformation de Lorentz&nbsp;:

<p style="text-align:center; ">
$\displaystyle
D(\phi)=\mathrm{e}^{\mathrm{i} \boldsymbol{K} \cdot \boldsymbol{\phi}}
$
</p>

Les générateurs de la transformation sont donnés par&nbsp;:

<p style="text-align:center; ">
$\displaystyle
K^i=\left.\frac{1}{\mathrm{i}} \frac{\partial D\left(\phi^i\right)}{\partial \phi^i}\right|_{\phi^i=0}
$
</p>

Un champ quantique se transforme sous l'action d'un boost comme&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\hat{U}^{\dagger}(\boldsymbol{\phi}) \hat{\boldsymbol{\Phi}}(x) \hat{U}(\boldsymbol{\phi})=D(\boldsymbol{\phi}) \hat{\boldsymbol{\Phi}}\left(\boldsymbol{\Lambda}^{-1}(\boldsymbol{\phi}) x\right)
$
</p>
</div>

Enfin, en jouant avec un jeu de générateurs, on obtient la surprenante relation de commutation suivante&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\left[K^1, K^2\right]=K^1 K^2-K^2 K^1=-\mathrm{i} J^3
$
</p>

La différence entre un boost selon les $x$ suivi d'un boost selon les $y$ et un boost selon les $y$ suivi d'un boost selon les $x$ est une rotation autour des $z$&nbsp;!

Mathématiquement, cela implique que les boosts seuls ne forment pas un groupe&nbsp;: leurs commutateurs font sortir de l'ensemble des boosts, en engendrant des rotations.

En généralisant, les relations de commutation s'écrivent&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
\left[J^i, K^j\right]=\mathrm{i} \varepsilon^{i j k} K^k
$
</p>
</div>

Pris ensemble, les boosts et les rotations forment une algèbre de Lie fermée et c'est ce groupe élargi qu'on appelle le **groupe de Lorentz**. Et de fait, une transformation générale de Lorentz s'écrit&nbsp;:

<div id="theo">
<p style="text-align:center; ">
$\displaystyle
D(\boldsymbol{\theta}, \boldsymbol{\phi})=\mathrm{e}^{-\mathrm{i}(\boldsymbol{J} \cdot \boldsymbol{\theta}-\boldsymbol{K} \cdot \boldsymbol{\phi})}
$
</p>
</div>

{{%notice note%}}
Les transformations $L$ du groupe de Lorentz sont l'ensemble des transformations linéaires de $\mathbb{R}^{1,3}$ qui préservent la forme bilinéaire de Lorentz (ou pseudo-norme de Minkowski)&nbsp;: $(L(x),L(y))=(x,y)$
{{%/notice%}}

Et en ajoutant les translations à la fête, on obtient le **groupe de Poincaré**.

<br>

## Symétrie

### Invariance et conservation


<div id="def">

Une quantité est **invariante** lorsqu'elle garde la même valeur après une transformation. On dit alors qu'elle présente une certaine **symétrie**. Un cylindre par exemple est invariant par rotation autour de son axe et on dit alors qu'il possède une symétrie de rotation autour de cet axe.

</div>

<br>

<div id="def">

Une quantité est **conservée** lorsqu'elle garde la même valeur avant et après un évènement. Dans une collision entre particules par exemple, la quadri-impulsion est conservée dans un référentiel donné.

</div>

Ce sont ces deux notions différentes que le théorème de Noether lie entre elles en stipulant qu'une invariance conduit à une loi de conservation.

Paramétrons par une quantité $\lambda$ les variations du champ $\phi(x^\mu)$ soumis à une transformation continue. 

Pour une transformation infinitésimale, on va noter&nbsp;:

<p style="text-align:center; ">
$\displaystyle
D \phi=\left.\frac{\partial \phi}{\partial \lambda}\right|_{\lambda=0}
$
</p>

de telle façon que le changement infinitésimal $\delta\phi$ du champ induit par $\delta\lambda$ puisse se noter&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \phi=D \phi \delta \lambda
$
</p>


<div id="preuve">

Pour une translation d'un quadrivecteur $a^\mu$, par exemple, on peut écrire&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\phi\left(x^\mu\right) \rightarrow \phi\left(x^\mu+\lambda a^\mu\right)
$
</p>

Et en posant $y^\mu=x^\mu+\lambda a^\mu$, on obtient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\frac{\partial \phi}{\partial \lambda}=\frac{\partial \phi}{\partial y^\mu} \frac{\partial y^\mu}{\partial \lambda}=\frac{\partial \phi}{\partial y^\mu} a^\mu
$
</p>

Et en prenant la limite $\lambda\rightarrow 0$, on a finalement&nbsp;:

<p style="text-align:center; ">
$\displaystyle
D \phi=a^\mu \partial_\mu \phi
$
</p>
</div>

<br>

### Théorème de Noether

Considérons une petite variation du champ $\phi(x)\rightarrow\phi(x)+\delta\phi(x)$ où $\delta\phi(x) = 0$ sur les bords de la région d'espace-temps considérée (ce sont les conditions aux limites de Dirichlet imposant un champ fixe sur les bords permettant d'avoir un principe variationnel bien défini). 

La petite variation de la densité lagrangienne $\mathcal{L}$ s'écrit&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \mathcal{L}=\frac{\partial \mathcal{L}}{\partial \phi} \delta \phi+\frac{\partial \mathcal{L}}{\partial\left(\partial_\mu \phi\right)} \delta\left(\partial_\mu \phi\right)
$
</p>

Posons&nbsp;:

<div id="def">
<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\Pi^\mu(x)=\frac{\partial \mathcal{L}}{\partial\left(\partial_\mu \phi\right)}
$
</p>

<p style="text-align:center;">$\Pi^\mu(x)$ est la <b>densité d'impulsion</b>.</p>
</div>
</div>

C'est une généralisation quadrivectorielle du moment conjugué $\pi(x)=\delta \mathcal{L} / \delta \dot{\phi}$. Et d'ailleurs, le moment conjugué est la composante temporelle de la densité d'impulsion&nbsp;: $\Pi^0(x)=\pi(x)$.

La variation de la densité lagrangienne peut maintenant s'écrire&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \mathcal{L}=\frac{\partial \mathcal{L}}{\partial \phi} \delta \phi+\Pi^\mu \delta\left(\partial_\mu \phi\right)
$
</p>

En utilisant $\delta\left(\partial\_\mu \phi\right)=\partial\_\mu(\delta \phi)$ et $\partial\_\mu\left(\Pi^\mu \delta \phi\right)=\Pi^\mu \partial\_\mu(\delta \phi)+\left(\partial\_\mu \Pi^\mu\right) \delta \phi$, on obtient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \mathcal{L}=\left(\frac{\partial \mathcal{L}}{\partial \phi}-\partial_\mu \Pi^\mu\right) \delta \phi+\partial_\mu\left(\Pi^\mu \delta \phi\right)
$
</p>

Supposons que l'action n'est pas modifiée par la transformation&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
\delta S &= \int \mathrm{d}^4 x\, \delta \mathcal{L}\\
&=\int \mathrm{d}^4 x\left(\frac{\partial \mathcal{L}}{\partial \phi}-\partial_\mu \Pi^\mu\right) \delta \phi+\cancel{\int \mathrm{d}^4 x\, \partial_\mu\left(\Pi^\mu \delta \phi\right)}\\
&=0
\end{aligned}
$
</p>

<div id="preuve">
<div id="grosseformule">

Pourquoi  $\int \mathrm{d}^4 x\\, \partial\_\mu\left(\Pi^\mu \delta \phi\right)=0$&nbsp;?

Le théorème de la divergence (Gauss-Ostrogradski) nous dit que la variation d'une quantité dans un volume vaut le flux de cette quantité à travers les parois du volume&nbsp;:

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\int_\mathcal{V} \mathrm{d}^4 x\, \partial_\mu\left(\Pi^\mu \delta \phi\right) = \int_{\partial\mathcal{V}} \mathrm{d}\mathcal{A}\, n_\mu \left(\Pi^\mu \delta \phi\right)
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcdiv.png">
</div>

où $n\_\mu$ est le vecteur normal à la surface $\mathcal{A}$ qui délimite le volume d'intégration.

Or, comme stipulé plus haut, les variations du champ $\delta\phi$ s'évanouissent sur la frontière.

</div>

</div>
</div>

Par conséquent, on obtient&nbsp;:

<div id="theo">

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\frac{\partial \mathcal{L}}{\partial \phi}=\partial_\mu \Pi^\mu
$
</p>

<p style="text-align:center;">C'est l'<b>équation d'Euler-Lagrange</b>.</p>

</div>
</div>

Partons maintenant du fait que le champ respecte l'équation du mouvement&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta\mathcal{L}=\cancel{\left(\frac{\partial \mathcal{L}}{\partial \phi}-\partial_\mu \Pi^\mu\right) \delta \phi}+\partial_\mu\left(\Pi^\mu \delta \phi\right)
$
</p>

En utilisant $\delta \phi=D \phi \delta \lambda$, on obtient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \mathcal{L}=\partial_\mu\left(\Pi^\mu D \phi\right) \delta \lambda
$
</p>

Comme la transformation est censée être une symétrie du système, son action doit rester inchangée. Cela implique une densité lagrangienne inchangée à la quadri-divergence d'une fonction $W^\mu(x)$ près&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\delta \mathcal{L}=\left(\partial_\mu W^\mu\right) \delta \lambda
$
</p>

En effet, l'intégration sur l'espace d'une divergence totale va donner une constante. L'action sera donc la même à une constante près, ce qui sera sans effet sur ses variations (de même qu'en mécanique des particules, le lagrangien est défini à une dérivée totale du temps près).

Finalement, une action stationnaire implique&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\partial_\mu\left(\Pi^\mu D \phi-W^\mu\right)=0
$
</p>

Ou encore $\partial\_\mu J\_{\mathrm{N}}^\mu=0$ où

<div id="theo">
<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
J_{\mathrm{N}}^\mu(x)=\Pi^\mu(x) D \phi(x)-W^\mu(x)
$
</p>

<p style="text-align:center;">est le <b>courant de Noether</b>.</p>
</div>
</div>

Le courant de Noether est donc conservé localement.

<div id="theo">

**Théorème de Noether**&nbsp;:

Si une transformation de symétrie continue $\phi\rightarrow\phi+D\phi$ ne change $\mathcal{L}$ que par l'addition d'une quadridivergence ($D\mathcal{L}=\partial\_\mu W^\mu$) pour un $\phi$ arbitraire, alors cela implique l'existence d'un courant $J\_{\mathrm{N}}^\mu(x)=\Pi^\mu(x) D \phi(x)-W^\mu(x)$.<br>
Si $\phi$ obéit aux équations du mouvement, alors le courant est conservé&nbsp;: $\partial\_\mu J\_{\mathrm{N}}^\mu=0$.

</div>

<br>

<div id="theo">

Les courants conservés donnent naissance à des **charges conservées** $Q\_{\mathrm{N}}=\int J\_{\mathrm{N}}^\mu \\,\mathrm{d} \mathcal{A}\_\mu$ aussi appelées **charges de Noether**.

</div>

<br>

<div id="preuve">

En effet, si on fixe le temps, la «&nbsp;surface&nbsp;» d'intégration devient le volume tridimensionnel et donc&nbsp;:
$Q\_{\mathrm{N}}=\int \mathrm{d}^3 x J\_{\mathrm{N}}^0$ où $J^0\_N$ est la composante temporelle (normale à la surface). 

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcj0.png">
</div>

Et comme $\partial\_\mu J^\mu\_N=0$, 
<p style="text-align:center; ">
$\displaystyle
\int \mathrm{d}^3 x\left(\partial_\mu J_{\mathrm{N}}^\mu\right)=\int \mathrm{d}^3 x\left(\partial_0 J_{\mathrm{N}}^0+\partial_k J_{\mathrm{N}}^k\right)=0
$
</p>

En utilisant le théorème de la divergence, le second terme devient&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\int \mathrm{d}^3 x \,\partial_k J_{\mathrm{N}}^k=\int \mathrm{d} \mathcal{A}_k J_{\mathrm{N}}^k
$
</p>

Et il disparaît si le volume est assez grand. 

On a donc finalement&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\int \mathrm{d}^3 x\, \partial_0 J_{\mathrm{N}}^0=\frac{\mathrm{d} Q_{\mathrm{N}} }{ \mathrm{d} t} = 0
$
</p>

Ça correspond bien à une charge conservée.

</div>

<br>

<div id="def">

Recette pour trouver des charges conservées à partir du théorème de Noether&nbsp;:

<p style="text-align:center;">
$\displaystyle
D \phi=\left.\frac{\partial \phi}{\partial \lambda}\right|_{\lambda=0}
\;\longrightarrow\;
\Pi^\mu(x)=\frac{\partial \mathcal{L}}{\partial\left(\partial_\mu \phi\right)}
\;\longrightarrow\;
\partial_\mu W^\mu=D \mathcal{L}
\;\longrightarrow\;
J_{\mathrm{N}}^\mu=D \phi \,\Pi^\mu-W^\mu
\;\longrightarrow\;
Q_{\mathrm{N}}=\int \mathrm{d}^3 x J_{\mathrm{N}}^0
$
</p>

</div>

<br>

### Application : translations de l'espace-temps

Supposons une translation de l'espace-temps $x^{\prime \mu}=x^\mu+a^\mu$ qui nous donne $D \phi=a^\mu \partial\_\mu \phi$. On a aussi $D \mathcal{L}=a^\mu \partial\_\mu \mathcal{L}=\partial\_\mu\left(a^\mu \mathcal{L}\right)$.

On reconnait alors que $D \mathcal{L}=\partial\_\mu W^\mu$ avec $W^\mu=a^\mu \mathcal{L}$. Le courant conservé s'en déduit&nbsp;:

<p style="text-align:center; ">
$\displaystyle
\begin{aligned}
J_{\mathrm{N}}^\mu & =\Pi^\mu D \phi-W^\mu \\
& =\Pi^\mu a^\nu \partial_\nu \phi-a^\mu \mathcal{L} \\
& =a^\nu\left[\Pi^\mu \partial_\nu \phi-\delta_\nu^\mu \mathcal{L}\right] \\
& =a_\nu T^{\mu \nu}
\end{aligned}
$
</p>

où $T^{\mu \nu}=\Pi^\mu \partial^\nu \phi-g^{\mu \nu} \mathcal{L}$ est le **tenseur énergie-impulsion**. 

La charge conservée correspondante peut s'écrire&nbsp;:

<p style="text-align:center; ">
$\displaystyle
P^\alpha=\int \mathrm{d}^3 x \,T^{0 \alpha}
$
</p>

La composante temporelle de cette charge est&nbsp;:

<p style="text-align:center; ">
$\displaystyle
P^0=\int \mathrm{d}^3 x \,T^{00}=\int \mathrm{d}^3 x[\pi(x) \dot{\phi}(x)-\mathcal{L}(x)]=\int \mathrm{d}^3 x\, \mathcal{H}
$
</p>

On reconnaît l'énergie du champ (on a utilisé $g^{00} = 1$). 

Et les composantes spatiales nous donnent&nbsp;:

<p style="text-align:center; ">
$\displaystyle
P^k=\int \mathrm{d}^3 x\, T^{0 k}=\int \mathrm{d}^3 x\, \pi(x) \partial^k \phi(x)
$
</p>

On reconnaît là l'impulsion du champ (on a utilisé $g^{0k}=0$).

<div id="theo">

Un champ symétrique par rapport aux translations voit son énergie et son impulsion conservées.

</div>

{{%notice note%}}
[Petit article de Quantamagazine](https://www.quantamagazine.org/how-noethers-theorem-revolutionized-physics-20250207/) sur le théorème de Noether.
{{%/notice%}}
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<a href="https://www.quantamagazine.org/how-noethers-theorem-revolutionized-physics-20250207/"><img src="https://www.quantamagazine.org/wp-content/uploads/2025/02/NoethersTheorem-crKristinaArmitage-Lede-scaled.webp" style="box-shadow:none;background:none;width:50px;border-radius:10px;"></a>
</div>
<br>

### Symétries internes

Pour des champs plus complexes que des champs scalaires réels, en plus des symétries de l'espace-temps, il faudra se préoccuper de la façon dont les symétries affectent les champs eux-mêmes. On verra par exemple un peu plus loin que la symétrie $U(1)$ d'un champ scalaire complexe entraîne la conservation du nombre de particules&nbsp;!

### Bilan

<p style="text-align:center;">
$\displaystyle
\hat{U}(t) = \mathrm{e}^{-\mathrm{i}\hat{H}t}
\;\longrightarrow\;
\hat{O}_{\mathrm{H}}(t) = \hat{U}^\dagger\hat{O}\hat{U}
\;\longrightarrow\;
\frac{\mathrm{d}\hat{O}_{\mathrm{H}}}{\mathrm{d}t} = \frac{1}{\mathrm{i}}\,[\hat{O}_{\mathrm{H}}, \hat{H}]
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{translations} \to \mathrm{e}^{-\mathrm{i}\hat{\boldsymbol{p}}\cdot\boldsymbol{a}}
\qquad
\text{rotations} \to \mathrm{e}^{-\mathrm{i}\hat{\boldsymbol{J}}\cdot\boldsymbol{\theta}}
\qquad
\text{boosts} \to \mathrm{e}^{\mathrm{i}\boldsymbol{K}\cdot\boldsymbol{\phi}}
\qquad
[K^1, K^2] = -\mathrm{i}J^3
$
</p>

<p style="text-align:center;">
$\displaystyle
D\phi
\;\longrightarrow\;
\Pi^\mu = \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}
\;\longrightarrow\;
J_{\mathrm{N}}^\mu = \Pi^\mu D\phi - W^\mu
\;\xrightarrow{\ \partial_\mu J_{\mathrm{N}}^\mu = 0\ }\;
Q_{\mathrm{N}} = \int\mathrm{d}^3x\, J_{\mathrm{N}}^0
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{translations d'espace-temps}
\;\longrightarrow\;
T^{\mu\nu} = \Pi^\mu\partial^\nu\phi - g^{\mu\nu}\mathcal{L}
\;\longrightarrow\;
P^0 = \text{énergie},
\quad
P^k = \text{impulsion}
$
</p>

### Pièges

<ul>
<li>Il n'existe pas d'opérateur temps&nbsp;: $t$ est un paramètre, pas une observable. C'est ce qui force les représentations de Schrödinger et d'Heisenberg à se partager sa prise en charge.</li>
<li>$\hat{U}(\boldsymbol{a})\psi(\boldsymbol{x}) = \psi(\boldsymbol{x}-\boldsymbol{a})$. La nouvelle fonction d'onde au nouveau point vaut l'ancienne à l'ancien point.</li>
<li>L'objet fondamental d'un groupe de Lie est son <b>générateur</b>, avec l'algèbre de ses commutateurs&nbsp;: toutes les représentations, du scalaire au spineur, partagent la même algèbre.</li>
<li>Les boosts seuls ne forment pas un groupe&nbsp;: $[K^1, K^2] = -\mathrm{i}J^3$. Il faut leur adjoindre les rotations pour fermer l'algèbre, et c'est le groupe de Lorentz.</li>
<li>Le théorème de Noether repose sur deux hypothèses distinctes&nbsp;: la symétrie fournit l'<b>existence</b> du courant, les équations du mouvement fournissent sa <b>conservation</b>.</li>
<li>Invariance et conservation ne sont pas synonymes&nbsp;: l'une compare avant/après une <b>transformation</b>, l'autre avant/après un <b>évènement</b>. Le théorème de Noether est précisément le pont entre les deux.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Tout est en place&nbsp;: des lagrangiens de champs classiques, la représentation d'Heisenberg pour héberger des opérateurs dynamiques, et le théorème de Noether pour surveiller les symétries. La partie suivante peut accomplir le programme annoncé&nbsp;: promouvoir les champs classiques en champs d'opérateurs, et voir les particules émerger comme leurs excitations quantifiées.
{{%/notice%}}



<br>
<br>


<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc2">Chapitre précédent</a></td><td><a href="../tqc4">Chapitre suivant</a></td>
    </tr>
</table>
</div>