+++
title = "Groupes discrets"
date = 2021-03-06T14:20:50+01:00
weight = 1
chapter = false
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
</style>


#  Les groupes

<p style="font-size:1.2em;text-align:center;font-weight:bold;"><a href="../">Retour sommaire</a></p>

> Un groupe est un club privé, un entre-soi monarchique d’éléments se reproduisant entre eux...

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/valsevienne.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

<br>

## Généralités

### Définition d'un groupe

  Comme son nom l’indique, un groupe désigne un ensemble d’éléments. Mais pour que cet ensemble soit promu groupe, on doit le munir d’une loi de composition interne (un truc qui dit comment les éléments jouent entre eux et rien qu’entre eux). Quand on compose un élément du groupe avec un autre élément du groupe, on obtient encore un élément du groupe. C’est surtout ça un groupe&nbsp;!


<div id="def">
<br>
  Techniquement, un groupe $G=\{a,b,c\}$ est bien un groupe si&nbsp;:
<br><br>
<ul>
  <li>$\forall (a,b) \in G^2,\ a\cdot b \in G$</li>
  <li>La loi de composition interne est <b>associative</b>, c’est-à-dire<br>$ (a\cdot b)\cdot c = a\cdot (b\cdot c) $</li>
  <li>$G$ contient un <b>élément neutre</b> $e$ tel que<br>$\forall a \in G,\ a\cdot e = a$</li>
  <li>Pour chaque $a \in G,$ il existe un <b>élément symétrique</b> $a^{-1}$ tel que $a\cdot a^{-1} = e$</li>
</ul>
</div>

  Remarque : on dira indifféremment "loi de composition interne" ou "loi de multiplication interne".


<div id="preuve">
Exemple de groupe ultra simple&nbsp;:
<br>$\boldsymbol{C_2} = \{1,-1\}$ avec la multiplication ordinaire comme loi de composition interne. En effet, $1\times1,\; 1\times(-1),\; (-1)\times(-1)$ font tous partie de $\boldsymbol{C_2}$ puisque le résultat est toujours 1 ou -1. La permutation entre deux éléments associée à l’identité forme un groupe en tout point similaire, c’est aussi $\boldsymbol{C_2}$. De la même façon, l’identité et l’inversion spatiale (parité), i.e. $x \mapsto -x,$ forment encore $\boldsymbol{C_2}$. Un même groupe peut donc être décrit différemment !
  </p>
</div>


### Groupes et symétries

  **Groupes et symétries sont fortement liés**, ce qui explique l’importance de leur étude en physique, étant donné que les symétries sont au centre de notre compréhension physique du monde.


  Imaginons un système $\mathcal{S}$ laissé invariant par deux symétries différentes $A$ et $B$. La loi de composition interne $A\cdot B$ correspond, dans le cas des symétries, à l’application successive de $A$ et de $B$ sur le système. Et l’application successive des symétries sur le système continue nécessairement à le laisser invariant, donc $A\cdot B$ est aussi une symétrie du système. La loi de composition interne étant interprétée comme une succession d’opérations de symétrie, l’associativité en découle : on aura forcément $A\cdot (B\cdot C) = (A\cdot B)\cdot C$ (en gardant l’ordre).

  Enfin, laisser $\mathcal{S}$ tel quel constitue l’élément neutre de toutes les symétries et chaque action d’une symétrie peut être inversée.


  Les **opérations de symétrie** sur un système forment donc toujours un groupe !


### Vocabulaire

<div id="def">
  L’<b>ordre</b> ou le <b>cardinal</b> d’un groupe est son nombre d’éléments.
  </div>
  
  <br>
  
  <div id="def">
  Un groupe est dit <b>abélien</b> lorsque la loi de composition est commutative, c’est-à-dire $ab = ba, \forall a,b \in G$.
  </div>
  
  $\boldsymbol{C_2}$ est à l’évidence abélien.

<div id="preuve">
  <b>Exemple :</b> Le plus petit groupe non abélien est le groupe des symétries du triangle équilatéral, appelé groupe diédral $\boldsymbol{D_3}$.
  
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
  <img src="/grouped3.png" style="box-shadow:none;background:none;">
  </div>

  Il y a 6 transformations qui laissent le triangle invariant : l’identité ($e$), les rotations de $\frac{2\pi}{3}$ et $\frac{4\pi}{3}$ (appelées $R_1$ et $R_2$), et les réflexions par rapport aux hauteurs (notées $S_A, S_B, S_C$). Elles sont toutes inversibles et la table de multiplication entre ces transformations finit de prouver qu’il s’agit bien d’un groupe.

  Le caractère non abélien est évident si on compare, par exemple, $R_1 S_A$ (qui amène $A$ en $C$, $B$ en $B$ et $C$ en $A$, en appliquant les transformations de la droite vers la gauche) et $S_A R_1$ (qui amène $A$ en $B$, $B$ en $A$ et $C$ en $C$).
</div>


<br>

<div id="def">
  La <b>table de multiplication</b> d’un groupe permet de savoir comment chacun des éléments interagit et permet donc de le décrire entièrement.
  </div>

<br>

<div id="preuve">

Pour $\boldsymbol{D_3}$, la table de multiplication est la suivante<span id="ancre">&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tabgroupe1.png" style="box-shadow:none;background:none;">
</div>


</div>


Deux grandes dynasties de groupe se partagent le royaume&nbsp;:
- les groupes cycliques qui peuvent décomposer tous les groupes abéliens.
- les groupes symétriques auxquels peuvent se rapporter tout groupe d’ordre fini. 


## Groupes cycliques et groupes symétriques

### Groupe cyclique

Le groupe cyclique $\boldsymbol{C_n}$ (dont on a déjà côtoyé un membre avec $\boldsymbol{C_2}$) a la structure générale $\\{e,a,a^2,\ldots,a^{n-1};a^n=e\\}$ avec $n$ un entier positif quelconque. On le note aussi $\<a\>$.

a générant tous les éléments du groupe est appelé... **générateur** du groupe.

<div id="def">
On appelle <b>période</b> ou <b>ordre</b> d’un élément $a$ d’un groupe le plus petit entier positif $m$ tel que $a^m=e$. Si $m$ n’existe pas, $a$ est dit d’ordre infini.
</div>


Le générateur $a$ de $\boldsymbol{C_n}$ est donc, par définition, de période (ou d’ordre) $n$.

L’ordre d’un groupe cyclique coïncide avec l’ordre de son générateur (ce qui explique l’utilisation du termes ordre au lieu de période pour un élément).

Tous les groupes cycliques sont abéliens (car $a^i a^j=a^j a^i=a^{i+j}$).

<div id="preuve">
Les racines n-ième de l’unité $\{\exp{^{i2\pi/n}}\}$ munies de la règle usuelle de multiplication sont l’exemple concret le plus direct d’un groupe cyclique.
</div>

Les lignes et colonnes de la table de multiplication de ces groupes sont en permutation circulaire (telle que l’ordre reste le même) les unes par rapport aux autres, d’où son nom.

<div id="preuve">
Table de multiplication de $\boldsymbol{C_2}$&nbsp;:
<div style="position:relative;margin-left:auto;margin-right:auto;width:220px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tabgroupe2.png" style="box-shadow:none;background:none;">
</div>
Table de multiplication de $\boldsymbol{C_3}$&nbsp;:
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tabgroupe3.png" style="box-shadow:none;background:none;">
</div>
</div>


### Groupe symétrique

Le groupe symétrique $\boldsymbol{S_n}$ est formé de toutes les permutations possibles entre $n$ éléments différents et est donc d’ordre $n!$.

On peut représenter de manière générale les permutations de $n$ éléments sur deux lignes&nbsp;:

$p=\left(\begin{array}{ccccc}
1 & 2 & 3 & \cdots & n \\\\
p_1 & p_2 & p_3 & \cdots & p_n
\end{array}\right)$

Une permutation suivie d’une seconde en forme bien sûr une troisième, ce qui définit la loi de composition du groupe.   L’identité correspond à l’absence de permutation&nbsp;:

$
e=\left(\begin{array}{lllll}
1 & 2 & 3 & \cdots & n \\\\
1 & 2 & 3 & \cdots & n
\end{array}\right)
$

Et l’inverse de p est logiquement&nbsp;:

$
p^{-1}=\left(\begin{array}{ccccc}
p_1 & p_2 & p_3 & \cdots & p_n \\\\
1 & 2 & 3 & \cdots & n
\end{array}\right)
$

<br>

<div id="preuve">
Exemple : 

$\boldsymbol{S_3}$ est d’ordre $3!=6$. Les 6 permutations sont :

<div id="grosseformule" style="margin-top:-1em;margin-bottom:-1em;">

$$
\begin{aligned}
& \left(\begin{array}{lll}
1 & 2 & 3 \\\\
1 & 2 & 3
\end{array}\right) \\\\
& \left(\begin{array}{lll}
1 & 2 & 3 \\\\
2 & 1 & 3
\end{array}\right),\left(\begin{array}{lll}
1 & 2 & 3 \\\\
1 & 3 & 2
\end{array}\right),\left(\begin{array}{lll}
1 & 2 & 3 \\\\
3 & 2 & 1
\end{array}\right) \\\\
& \left(\begin{array}{lll}
1 & 2 & 3 \\\\
2 & 3 & 1
\end{array}\right),\left(\begin{array}{lll}
1 & 2 & 3 \\\\
3 & 1 & 2
\end{array}\right)
\end{aligned}
$$

</div>

Le premier élément n’est autre que $e$ (rien n’a bougé). Les trois éléments suivants sont obtenus en permutant deux éléments du trio et en laissant le troisième tranquille. Les deux derniers éléments sont obtenus en permutant circulairement les trois éléments.

</div>

Pour une écriture plus compacte, on décompose les permutations en 1-cycle (pas de permutations), 2-cycle (permutations 2 à 2), 3-cycle (permutations circulaires à 3 éléments), etc. 

<div id="preuve">
Cela donne pour les 6 permutations du groupe $\boldsymbol{S_3}$&nbsp;:<br>

$$\begin{aligned}
& e=(1)(2)(3) \\\\
& (12)(3),(1)(23),(2)(31), \\\\
& (123),(321)
\end{aligned}
$$

L’ordre d’écriture est indifférent et il est d’usage d’omettre les 1-cycle ou éléments non permutés ($(12)(3)=(12)$).

</div>

Lorsqu’on multiplie deux permutations, on part de la permutation la plus à droite et on regarde où arrive successivement chacun des éléments. 

<div id="preuve">
Exemple :

$(23)\cdot(13)=\\,?$

<ul>
<li>  
$1\rightarrow\,?$ : $(13)$ est tel que $1\rightarrow 3$ et $(23)$ est tel que $3\rightarrow 2$, donc 1 est envoyé sur 2 ($1\rightarrow 2$) par le produit des permutations.
</li>
<li>
$2\rightarrow\,?$ : $(13)$ est tel que $2\rightarrow 2$ et $(23)$ est tel que $2\rightarrow 3$, donc 2 est envoyé sur 3 ($2\rightarrow 3$) par le produit des permutations.
</li>
<li>
$3\rightarrow\,?$ : $(13)$ est tel que $3\rightarrow 1$ et $(23)$ est tel que $1\rightarrow 1$, donc 3 est envoyé sur 1 ($3\rightarrow 1$) par le produit des permutations.
</li>
</ul>

On obtient bien la permutation cyclique $(123)$ dans laquelle $1\rightarrow 2\rightarrow 3\rightarrow 1$. Donc $(23)\cdot (13) = (123)$.

Autre exemple : $(321)\cdot (12) = (1)(23)(2) = (23)$

</div>

## Sous-groupes, morphismes, classes et groupes quotients

### Sous-groupes

<div id="def">
Un sous-ensemble de $G$ qui forme un groupe avec la même loi de multiplication est un <b>sous-groupe</b> de $G$.
</div>

Tout élément $a$ différent de $e$ d’un groupe $G$ d’ordre fini forme un sous-groupe cyclique de $G$.

<div id="preuve">
Preuve : 

$a\cdot a=a^2$ est dans $G$ par propriété des groupes et vaut soit $e$ soit un élément différent de $a$ (car seul $a\cdot e$ donne $a$).<br>
De même, si $a^2≠e$, alors $a^2\cdot a=a^3$ vaut soit $e$, soit un élément différent à la fois de $a$ et $a^2$ puisqu’ils sont tous deux différents de $e$. En continuant ainsi, on obtient un ensemble $\{a,a^2,a^3,a^4,a^5,\ldots\}$ s’arrêtant pour $a^p$ valant $e$ (et cela arrive nécessairement puisque le groupe $G$ est fini). On obtient alors un groupe cyclique d’ordre $p$.
</div>

### Morphismes

<div id="def">
Un <b>homomorphisme</b> entre un groupe $G$ et un groupe $G^{\prime}$ est une application envoyant les éléments de $G$ vers $G^{\prime}$ tout en préservant la loi de composition&nbsp;:

si $g_i \in G \mapsto g_i^{\prime} \in G^{\prime}$ et $g_1g_2=g_3$, alors $g_1^{\prime} g_2^{\prime}=g_3^{\prime}$.

Quand l’application est bijective, un élément pour un élément, on parle d’<b>isomorphisme</b> (on le note symboliquement $G \simeq G^{\prime}$).
</div>


  Si on appelle $f$ l’homomorphisme de $G$ vers $G^{\prime}$, on a :

<ul>
  <li>$f(g_1)f(g_2) = f(g_1g_2)$ par définition,</li>
  <li>$f(g)f(e) = f(g)$ donc $f(e) = e'$ (l’élément neutre est préservé),</li>
  <li>$f(g^{-1}) = f^{-1}(g)$ car $f(g^{-1})f(g) = f(e) = e'$.</li>
</ul>


  Cela montre que&nbsp;:
  
  <div id="theo">
L’<b>image</b> de l'<b>homomorphisme</b> $f$, notée $\mathrm{Im}(f) \equiv f(G) \equiv \{ f(g) ; g \in G \}$, est un <b>sous-groupe</b> de $G'$.
  </div>

<br>

<div id="preuve">
Preuve :
<br><br>
  <ul>
    <li>$e' \in \mathrm{Im}(f)$,</li>
    <li>Pour tout $g_1, g_2 \in G$, $f(g_1)f(g_2) = f(g_1g_2) \in \mathrm{Im}(f)$,</li>
    <li>Pour tout $g \in G$, $f(g^{-1}) = f(g)^{-1} \in \mathrm{Im}(f)$.</li>
  </ul>
</div>

<br>

<div id="preuve">

Construisons la table de multiplication du groupe $\boldsymbol{S_3}$ :

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/grtri.png" style="box-shadow:none;background:none;">
</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tabgroupe4.png" style="box-shadow:none;background:none;">
</div>

On remarque qu’en identifiant les deux permutations circulaires aux rotations de $\boldsymbol{D_3}$ et les 2-cycles aux réflexions, on retrouve exactement la même table de multiplication. Cela montre que $\boldsymbol{S_3}$ et $\boldsymbol{D_3}$ sont isomorphes ($\boldsymbol{S_3} \simeq \boldsymbol{D_3}$).

</div>

<p>
  L’exemple précédent est généralisable&nbsp;:

<div id="theo">
<b>Théorème de Cayley&nbsp;</b>

Tout groupe $G$ d’ordre $n$ est isomorphe à un sous-groupe de $\boldsymbol{S_n}$.
</div>      

</p>
<div id="preuve">
Preuve :

Les éléments de $G$ sont étiquetés $\\{g_i \\, ; i = 1, \dots, n\\}$.<br>
Pour un élément $a \in G$, l’élément $a g_i$ est un élément de $G$.<br>
On peut très bien appeler $a_i$ l’indice entier qui désigne cet élément&nbsp;: $g_{a_i} \equiv a g_i$, ce qui détermine une séquence de nombres entiers $\left(a_1, \cdots, a_n\right)$.<br>
Comme $a g_i=a g_k$ seulement pour $i=k$ (suffit de multiplier par $a^{-1}$ pour s’en assurer), tous les entiers $\left\\{a_1, \cdots, a_n\right\\}$ sont différents. Ils forment donc une permutation de $(1,2, \cdots, n)$.

Plus simplement, on peut voir l’action de $a$ sur l’ensemble des $g\in G$ comme une translation (à gauche) des éléments du groupe ($ga$ serait la translation à droite, différente par défaut).

On peut par conséquent envoyer $G$ sur $\boldsymbol{S_n}$&nbsp;:

$
a \in G \longrightarrow p_a=\left(\begin{array}{cccc}
1 & 2 & \cdots & n \\\\
a_1 & a_2 & \cdots & a_n
\end{array}\right) \in \boldsymbol{S_n}
$

Si $ab=c$ dans $G$, on a&nbsp;:

<div id="grosseformule">

$\begin{aligned}
 p_a p_b&=\left(\begin{array}{cccc}
1 & 2 & \cdots & n \\\\
a_1 & a_2 & \cdots & a_n
\end{array}\right) \cdot\left(\begin{array}{cccc}
1 & 2 & \cdots & n \\\\
b_1 & b_2 & \cdots & b_n
\end{array}\right) \\\\
& =\left(\begin{array}{llll}
b_1 & b_2 & \cdots & b_n \\\\
a_{b_1} & a_{b_2} & \cdots & a_{b_n}
\end{array}\right) \cdot\left(\begin{array}{llll}
1 & 2 & \cdots & n \\\\
b_1 & b_2 & \cdots & b_n
\end{array}\right)=\left(\begin{array}{cccc}
1 & 2 & \cdots & n \\\\
a_{b_1} & a_{b_2} & \cdots & a_{b_n}
\end{array}\right)
\end{aligned}
$

</div>

Or $g_{a_{b_i}}=a g_{b_i}=a\left(b g_i\right)=(a b) g_i=c g_i=g_{c_i}$, donc&nbsp;:

$p_a p_b=p_c=\left(\begin{array}{cccc}
1 & 2 & \cdots & n \\\\
c_1 & c_2 & \cdots & c_n
\end{array}\right) \in S_n$


On a finalement montré que l’application $a \in G \longrightarrow p_a \in \boldsymbol{S_n}$ préserve la loi de composition interne, ie c’est un homomorphisme.<br>
Et comme on a commencé par dire que l’application envoyait un antécédent sur une image unique, il s’agit d’un isomorphisme.<br>
L’ensemble des $p_a$ (pour tous les $a$ de $G$) forme donc un sous-groupe de $\boldsymbol{S_n}$ isomorphe à $G$.

</div>


### Classes

<div id="def">
Deux éléments $a$ et $b$ de $G$ sont dit <b>conjugués</b> s’il existe un troisième élément $p$ de $G$ tel que $b=pap^{-1}$. On écrit $b\sim a$ car il s’agit d’une <b>relation d’équivalence</b>. 
</div>

Une relation d’équivalence se doit d’être symétrique ($a\sim b \Rightarrow b\sim a$), réflexive ($a\sim a$) et transitive (si on a $a\sim b$ et $b\sim c$ alors $a\sim c$), ce qu’on vérifie bien avec la relation de conjugaison.

<div id="def">
Des éléments conjugués les uns par rapport aux autres forment une <b>classe de conjugaison</b>.
</div>

<br>

<div id="theo">
L’identité (élément neutre) forme une classe à elle seule.
</div>

<br>

<div id="theo">
Dans un groupe symétrique, les cycle d’une même longueur appartienne à une même classe.
</div>

<br>

<div id="preuve">
Preuve :

soit $p$ un cycle de longueur donnée et $q$ une permutation quelconque du même groupe de symétrie alors :

$
\begin{aligned}
q p q^{-1} & =\left(q_i \leftarrow i\right)\left(p_i \leftarrow i\right)\left(i \leftarrow q_i\right) \\\\
& =\left(q_i \leftarrow i\right)\left(p_i \leftarrow q_i\right) \\\\
& =\left(q_{p_i} \leftarrow p_i\right)\left(p_i \leftarrow q_i\right) \\\\
& =\left(q_{p_i} \leftarrow q_i\right) \\\\
& =q[p]
\end{aligned}
$

On n’a fait qu’étiqueter différemment la permutation $p$&nbsp;:

$
\left(\begin{array}{ccccc}
1 & 2 & 3 & \cdots & n \\\\
p_1 & p_2 & p_3 & \cdots & p_n
\end{array}\right)
$
devient
$
\left(\begin{array}{ccccc}
q_1 & q_2 & q_3 & \cdots & q_n \\\\
p_{q_1} & p_{q_2} & p_{q_3} & \cdots & p_{q_n}
\end{array}\right)
$.

L’ordre change mais pas ce que devient chacune des valeurs. La structure des cycles est donc nécessairement la même.
</div>

<br>

<div id="preuve">
Exemple :

$\boldsymbol{S_3}$ est donc constitué de 3 classes&nbsp;:

<ul>
<li>$e$</li>
<li>$\{(12),(23),(13)\}$</li>
<li>$\{(123),(321)\}$</li>
</ul>
Comme l’isomorphisme entre $\boldsymbol{D_3}$ et $\boldsymbol{S_3}$ l’impose, ces classes trouves bien leurs correspondances dans $\boldsymbol{S_3}$ puisqu’on peut vérifier que l’identité, les deux rotations et les trois réflexions forment là encore trois classes de conjugaison.
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/grclasse1.png" style="box-shadow:none;background:none;">
</div>

</div>

Chaque élément d’un groupe appartient à une et une seule classe puisque l’action de conjugaison consiste en une translation à gauche et une translation à droite (composer tous les éléments du groupe par un même élément revient à les décaler (ou permuter) tous de la même façon) et donc associe un élément conjugué différent à chaque élément différent du groupe (c’est une bijection). 

Et d’autre part, deux classes différentes sont disjointes par transitivité (si elle ne sont pas disjointes, elles coïncident).
Par conséquent, l’union de toutes les classes d’un groupe reforme le groupe, ou dit autrement, <b>les classes forment une partition du groupe</b>.

<div id="def">

Un sous-groupe $H$ de $G$ est dit <b>invariant</b>, ou <b>normal</b>, ou <b>distingué</b>, s’il est identique à ses sous-groupes conjugués ($H=g^{-1} H g$ pour $g\in G$).

</div>

Remarque&nbsp;:<br>
un sous-groupe invariant est nécessairement une union de classes conjuguées dont l’identité (un groupe doit la contenir).

<div id="preuve">
Exemple : 

Le sous-groupe $\{e, (123), (321)\}$ de $\boldsymbol{S_3}$ forme un sous-groupe invariant puisqu’il contient l’identité et la classe entière des 3-cycles. Tout élément conjugué de cet ensemble appartient à une de ces deux classes et se trouve donc dans l’ensemble de départ.
</div>

Les classes de conjugaison ne sont pas les seules à savoir découper un groupe. Leurs concurrentes : les <b>classes latérales</b> dites à gauche ou à droite issues d’un sous-groupe donné.

Cette partition diffère de la précédente sur deux points : elle n’est pas nécessairement unique et les classes latérales entrant dans la partition comportent chacune le même nombre d’éléments. 

<div id="def">

Soit $H=\\{h_1,h_2,\ldots\\}$ un sous-groupe de $G$ et $p$ un élément de $G$ (qui n’est pas dans $H$). Alors l’ensemble $pH=\\{ph_1,ph_2,\ldots\\}$ est appelé <b>classe à gauche</b> de $G$ suivant $H$.<br>
De même, $Hp$ est une <b>classe à droite</b> suivant $H$.

</div>

Remarques&nbsp;:
<ul> 
<li>si $p$ est dans $H$, on récupère $H$ ($pH=H=Hp$) par définition d’un sous-groupe.</li>
<li>une classe à gauche (ou à droite), comme une classe tout court, n’est généralement pas un groupe (on doit contenir l’identité pour en être un !).</li>
</ul>

<div id="theo">

Deux classes à gauche (ou à droite) d’un même sous-groupe soit coïncident complètement, soit n’ont aucun élément en commun. 

</div>

<br>

<div id="preuve">
Preuve :

Soient $pH$ et $qH$ deux classes à gauche et supposons qu’on ait, pour un certain $h_i$, et un certain $h_j$ pris dans $H$, $ph_i=qh_j$, donc $pH$ et $qH$ ont au moins un élément en commun.

Comme $q^{-1}p=h_j h_i^{-1}$, $q^{-1}p$ est un élément de $H$. 

Par conséquent, $q^{-1}pH=H$ (puisque $H$ est un sous-groupe donc un groupe). 

Conclusion : $pH=qH$.

Pour ne pas être dans ce cas, il ne faut aucun $h_i$ et $h_j$ tels que $ph_i=qh_j$, autrement dit, $pH$ et $qH$ doivent être disjoints.


</div>


Et chaque classe à gauche (ou à droite) suivant un sous-groupe $H$ a nécessairement autant d’éléments que $H$.


<div id="theo">

On en déduit que pour un sous-groupe $H$ d’ordre $n_H$, l’ensemble des classes à gauche (ou à droite) forme une partition des éléments de $H$ en ensembles disjoints de $n_H$ éléments chacun.

</div>

<br>

<div id="preuve">
Exemple :

Le sous-groupe $\left\\{H_1: e,(123),(321)\right\\}$ de $\boldsymbol{S_3}$ possède une classe à gauche $\\{M:(12),(23),(31)\\}$ obtenue en multipliant à gauche les éléments de $H_1$ par $(12)$, ou par $(23)$, ou encore par $(31)$.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/grclasse2.png" style="box-shadow:none;background:none;">
</div>

Le sous-groupe $\left\\{H_2: e,(12)\right\\}$ de $\boldsymbol{S_3}$ possède, lui, deux classes à gauche&nbsp;:

<ul>
<li>$\left\{M_1:(23),(321)\right\}$ obtenue en multipliant à gauche les éléments de $H_2$ soit par $(23)$, soit par $(321)$&nbsp;;
</li>
<li>$\left\{M_2:(31),(123)\right\}$ obtenue en multipliant à gauche les éléments de $H_2$ soit par $(31)$, soit par $(123)$.
</li>
</ul>

</div>

<br>

<div id="theo">

Le <b>théorème de Lagrange</b> en découle&nbsp;:

l’ordre d’un groupe fini doit être un multiple entier de l’ordre de n’importe lequel de ses sous-groupes.

</div>

Cela entraîne que tout groupe d’ordre premier est cyclique et donc abélien. Plutôt joli, non&nbsp;?

<div id="preuve">
Preuve :

Soit $a$ un élément de $G$ différent de $e$.<br>Alors $a$ forme un sous-groupe cyclique de $G$ d’ordre au moins 2.<br>
Or cet ordre doit diviser l’ordre $G$.<br>
Seule solution, il vaut l’ordre $G$, ce qui implique que $G$ soit cyclique et par conséquent abélien.
</div>


### Groupes quotients

Les classes à gauche ou à droite issues d’un sous-groupe invariant sont particulièrement simples et utiles. Déjà, classes à gauche et classes à droite coïncident ($pHp^{-1}=H$ implique $pH=Hp$). De plus, la partition obtenue est unique et une «factorisation» de $G$ basée sur cette partition devient naturelle. 

<div id="theo">

L’ensemble des classes issues d’un sous-groupe invariant $H$ d’un groupe $G$ a la propriété de former lui-même un groupe, appelé <b>groupe quotient</b> $G/H$, d’ordre $n_G/n_H$.

</div>

<br>

<div id="preuve">
Preuve :
<br><br>
<ul>
<li>La loi de composition interne entre deux classes latérales $pH$ et $qH$ est définie comme l’ensemble des produits $ph_iqh_j=(pq)h_k$ avec $h_k=(q^{-1}h_iq)h_j$ appartenant bien à $H$ (puisque $H$ est un sous-groupe invariant).<br>
Plus simplement&nbsp;: $pHqH=pqH$. </li>
<li>$H=eH$ joue le rôle de l’élément neutre.</li>
<li>$p^{-1}H$ est l’inverse de $pH$.</li>
<li>$pH\cdot(qH\cdot rH)=(pH\cdot qH)\cdot rH=(pqr)H$</li>
</ul>

</div>

<br>

<div id="preuve">
Exemple 1 :

Considérons $\mathbb{Z}/2\mathbb{Z}$ où $\mathbb{Z}$ est l’ensemble des entiers relatifs munis de l’addition comme loi de composition interne. $2\mathbb{Z}$ est donc l’ensemble des entiers relatifs pairs. Et par conséquent, $\mathbb{Z}/2\mathbb{Z}$ est formé de deux sous-groupes distincts&nbsp;: les entiers pairs et les entiers impairs. Le groupe quotient $\mathbb{Z}/2\mathbb{Z}$ est donc isomorphe au groupe cyclique à deux éléments $\boldsymbol{C_2}$. Il correspond aussi à l’ensemble $\\{0,1\\}$ muni de l’addition modulo 2.

On peut généraliser en disant que $\mathbb{Z}/2\mathbb{Z}$ est isomorphe au groupe cyclique $\boldsymbol{C_n}$ et correspond aussi à l’ensemble des restes dans la division euclidienne de $k$ par $n$, soit l’ensemble $\\{0,1,\ldots,n\\}$ muni de l’addition modulo $n$.
</div>

L’exemple précédent permet de mieux comprendre pourquoi $G/H$ se lit $G$ <b>modulo</b> $H$.

<div id="preuve">
Exemple 2 :

Dans le cas de $\boldsymbol{S_3}$, $H=\\{e,(123),(321)\\}$ est un sous-groupe invariant.

$G/H$ contient deux éléments : $H$ et $M=\\{(12),(23),(31)\\}$.

$H$ est l’ensemble des permutations paires à 3 éléments (l’identité correspond à aucune permutation et les 3 cycles à des permutations doubles). On appelle aussi $H$ $\boldsymbol{A_3}$, groupe alterné d’ordre 3.<br>
$M$ est l’ensemble des permutations impaires.

On voit facilement que la composition de deux permutations impaires ou paires donne une permutation paire alors qu’une composition mixte donne une permutation impaire&nbsp;:<br>
$HM=MH=M$, $HH=H$ et $MM=H$.

On en déduit que $G/H$ est isomorphe à $\boldsymbol{C_2}$ (H est envoyé sur l’identité et $\boldsymbol{M}$ correspond à l’autre élément).

</div>

Le morphisme  $f: G \rightarrow G / H, g \mapsto g H$ est appelé <b>morphisme canonique</b> ou projection canonique.

Le deuxième exemple illustre un théorème qui va se révéler bien utile mais définissons d’abord le noyau d’un homomorphisme&nbsp;:

<div id="def">

Soit f un homomorphisme de $G$ à $G^{\prime}$. On appelle <b>noyau</b> $K$ de cet homomorphisme l’ensemble des éléments de $G$ qui sont envoyé sur l’élément neutre de $G’$ ($K=\\{g \in G ; g \stackrel{f}{\longmapsto} e^{\prime} \in G^{\prime}\\}$).

</div>

<br>

<div id="theo">

<b>Théorème d’isomorphisme</b> (premier)&nbsp;:

Soit $f$ un homomorphisme de $G$ à $G^{\prime}$ de noyau $K$.<br>
$K$ forme alors un sous-groupe invariant de $G$.<br> 
Le groupe quotient $G/K$ est isomorphe à $G^{\prime}$.<br> 
Autrement dit, on rend $f$ injectif en quotientant $G$ par son noyau.<br> 

Cela se note symboliquement $G / K \simeq G^{\prime}$ 
 ou encore $G / \operatorname{Ker}(f) \simeq f(G)$ où $\operatorname{Ker}(f)$ désigne le noyau de $f$ et $f(G)$ est l’image de $f$.
 
 </div>
 
 <div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
 <img src="/griso1.png" style="box-shadow:none;background:none;">
 </div>
 
 <br>
 
 <div id="preuve">
 Preuve :<br><br>

<ul>
<li>
Montrons que $K$ est un sous-groupe&nbsp;:<br>
pour $a$ et $b$ dans $K$, $a \cdot b \xrightarrow{f} e^{\prime} \cdot e^{\prime}=e^{\prime}$, donc $a\cdot b$ est aussi dans $K$. La préservation de la loi de composition par l’homomorphisme assure que pour $g \xrightarrow{f} g^{\prime}$, on a aussi $e \xrightarrow{f} e^{\prime}$ et $g^{-1} \xrightarrow{f} g^{\prime-1}$. D’où $e \in K$, et si $a\in K$, alors $a^{-1}$ est aussi dans $K$ (car  $a^{-1} \xrightarrow{f} e^{\prime-1}=e^{\prime}$).
</li>
<br>
<li>
Montrons que $K$ est invariant&nbsp;:<br>
prenons $a$ dans $K$ et $g$ dans $G$. $g a g^{-1} \xrightarrow{f} g^{\prime} e^{\prime} g^{\prime-1}=e^{\prime}$. Donc  $g a g^{-1} \in K$ pour tout  $g\in G$.
</li>
<br>
<li>
Montrons que $G/K$ est isomorphe à $G^{\prime}$&nbsp;:

Les éléments du groupe quotient $G/K$ sont les classes latérales $pK$. 

Considérons l’application envoyant les classes latérales vers l’image de $f$, $p K \xrightarrow{\rho} f(p)=p^{\prime} \in G^{\prime}$.
<ul>
<li>
$\rho$ est bien définie&nbsp;: si $pK=qK$ pour $p,q\in K$, alors $q^{-1}p$ est aussi dans $K$ (puisque $K$ est un groupe) et donc comme $f$ est un homomorphisme&nbsp;:

$
\begin{aligned}
f\left(q^{-1} p\right) & =1 \\\\
& =f\left(q^{-1}\right) f(p) \\\\
& =f^{-1}(q) f(p)
\end{aligned}
$ 

Et finalement, $f(q)=f(p)$.

</li>
<li>
$\rho$ est bien un homomorphisme&nbsp;:

$
\begin{aligned}
\rho(p K \cdot q K) & =\rho(p q K) \\\\
& =f(p q) \\\\
& =f(p) f(q) \\\\
& =\rho(p K) \rho(q K)
\end{aligned}
$

</li>
<li>
Si $\rho(p K)=\rho(q K)$ alors $\rho\left(q^{-1} p K\right)=\rho\left(q^{-1} K \cdot p K\right)$ (le groupe quotient est un groupe), et par action de groupe de l’homomorphisme, $\rho\left(q^{-1} K \cdot p K\right)=\rho\left(q^{-1} K\right) \rho(p K)=\rho^{-1}(q K) \rho(p K)=e^{\prime}$, ce qui implique $q^{-1} p K=K$ ou $qK=pK$.

</li>

</ul>

L’application est bien bijective.

</li>
</ul>

 </div>


<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/griso2.png" style="box-shadow:none;background:none;">
</div>

<br>

Le dessin ci-dessus illustre le cas d’un groupe $G$ contenant 15 éléments avec un noyau $K$ en contenant 3. $G/K$ et $G^{\prime}$ sont alors tous deux d’ordre 5.

<div id="preuve">
Exemple :

on a vu dans un exemple précédent que l’homomorphisme de $\boldsymbol{S_3}$ sur $\boldsymbol{C_2}$ devient un isomorphisme si on quotiente $\boldsymbol{S_3}$ par le sous groupe invariant $H=\\{e,(123),(321)\\}$&nbsp;: $\boldsymbol{S_3} / H \simeq \boldsymbol{C_2}$. Or $H$ est bien le noyau $K$ de l’homomorphisme comme le prévoit le théorème d’isomorphisme.
<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/griso3.png" style="box-shadow:none;background:none;">
</div>
</div>

Image et noyau nous disent beaucoup sur les homomorphismes.<br>
En effet :

<div id="theo">

Pour un homomorphisme $f$ tel que $G \xrightarrow{f} G^{\prime}$&nbsp;:
<ul>
<li>$f$ est <b>injectif</b> si et seulement si $\operatorname{Ker}(f)=e$</li>
<li>$f$ est <b>surjectif</b> si et seulement si $\operatorname{Im}(f)=G^{\prime}$</li>
</ul>

</div>


## Produit direct de deux groupes

<div id="def">

Soit $H_1$ et $H_2$ deux sous-groupes du groupe $G$ avec les deux propriétés suivantes&nbsp;:
<ul>
<li>les éléments de $H_1$ commutent avec les éléments de $H_2$.</li>
<li>chaque élément de $g\in G$ peut s’écrire $g=h_1h_2$ avec $h_1\in H_1$ et $h_2\in H_2$.</li>
 $G$ est alors le <b>produit direct</b> de $H_1$ et $H_2$&nbsp;: $G=H_1 \otimes H_2$.

</div>

<br>

<div id="preuve">
Exemple :

Décomposons $\boldsymbol{C_6}=\\{e=a^6, a, a^2, a^3, a^4, a^5\\}$ en $\color{red} H_1=\\{e, a^3\\}$ et $\color{blue} H_2=\\{e, a^2,a^4\\}$.

Comme $\boldsymbol{C_6}$ est abélien, le premier critère est respecté.

Et on a&nbsp;: $e = \color{red}e\color{blue}e$, $a = \color{red}a^3\color{blue}a^4$, $a^2 = \color{red}e\color{blue}a^2$, $a^3 = \color{red}a^3\color{blue}e$, $a^4 = \color{red}e\color{blue}a^4$, $a^5 = \color{red}a^3\color{blue}a^2$.

$H_1 \simeq C_2$ et $H_2 \simeq C_3$ donc $C_6 \simeq C_2 \otimes C_3$.

</div>

<br>

<div id="theo">

Si $G=H_1 \otimes H_2$, alors $H_1$ et $H_2$ doivent être invariants.

</div>

<br>

<div id="preuve">
Preuve :

Pour $a_1\in H_1$, $g a_1 g^{-1}=h_1 h_2 a_1\left(h_1 h_2\right)^{-1}=h_1 h_2 a_1 h_2^{-1} h_1^{-1}=h_1 a_1 h_1^{-1} \in H_1$  (et on peut bien sûr faire pareil avec $a_2$ dans $H_2$). 


</div>

On peut donc construire les groupes quotient $G/H_1$ et $G/H_2$. On montre alors que $G / H_1 \simeq H_2$ et $G / H_2 \simeq H_1$, ce qui éclaire un peu plus le terme de groupe quotient.

<br>

<p style="font-size:1.2em;text-align:center;font-weight:bold;"><a href="../groupe2">Chapitre suivant&nbsp;: les représentations</a></p>

<p style="font-size:1.2em;text-align:center;font-weight:bold;"><a href="../">Retour sommaire</a></p>