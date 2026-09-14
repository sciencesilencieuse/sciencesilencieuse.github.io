+++
title = "Les ensembles de nombres"
date = 2021-03-06T14:20:50+01:00
weight = 1
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
margin-bottom:0em;
}
</style>


<h1 style="overflow-x:auto;">Échaufaudage des nombres</h1>

> Dieu a crée les entiers naturels, le reste est l'œuvre de l'Homme.<br>
> Leopold Kronecker

## Un désir de symétrie


### Des entiers naturels aux entiers relatifs


Un entier naturel sert à compter des éléments distincts mais que l'on traite comme identiques (3 chameaux, 2 idées, 8 cailloux gris).

On passe d'un entier à son successeur en ajoutant une unité ($+1$). On forme alors l'ensemble infini des entiers naturels $\mathbb{N}=\\{0,1,2,\ldots\\}$.

<div id="def">

Un **ensemble** est une collection d'éléments $\\{\text{élément 1},\text{élément 2},\ldots\\}$.

</div>

Pourquoi aller plus loin&nbsp;?

Pour rendre l'addition toujours réversible&nbsp;!

<div id="def">

Une **loi de composition interne** $\star$ dans un ensemble $E$ est une opération entre deux éléments quelconques de $E$ donnant toujours un résultat dans $E$.

$$\forall (x,y)\in E^2,\quad x\star y \in E$$

</div>

L'**addition** est une parfaite loi de composition interne dans $\mathbb{N}$&nbsp;; on peut additionner tous les entiers naturels que l'on veut, on obtient toujours un entier naturel.

Mais pour résoudre des équations, il faut pouvoir faire l'opération opposée&nbsp;: soustraire. Si l'équation $2+x = 5$ ne pose pas trop de problèmes puisque la solution appartient à $\mathbb{N}$, le système s'effondre avec l'équation $5+x = 2$. Il est impossible de retrancher $5$ à $2$ en restant dans les entiers naturels&nbsp;: l'équation n'a aucune solution dans $\mathbb{N}$.

<div id="def">

L'**élément neutre** $e_\star$ de la loi de composition interne $\star$ est tel que l'opération entre n'importe quel nombre et $e_\star$ laisse le nombre inchangé.

$$\forall x\in E,\quad x\star e_\star = e_\star \star x = x$$

</div>

<br>

<div id="def">

Le **symétrique** $x'$ d'un élément $x$ pour une loi de composition $\star$ dotée d'un élément neutre $e_\star$ est tel que la composition entre $x$ et $x'$ donne l'élément neutre&nbsp;:

$$
x'\star x = x\star x'=e_\star
$$

</div>

Pour l'addition, on a bien un élément neutre ($0$, puisque pour tout $x$, $x+0=0+x=x$), mais pas de symétriques... Du moins, dans $\mathbb{N}$. L'idée est alors d'augmenter $\mathbb{N}$ de tous les symétriques de ses éléments vis à vis de l'addition, notés $x':= -x$ (tels que $x+(-x)=(-x)+x=0$) et appelés opposés. On obtient ainsi les entiers relatifs $\mathbb{Z} = \\{\ldots,-2,-1,0,1,2,\ldots\\}$. 

Dans $\mathbb{Z}$, on peut définir l'opération inverse de l'addition, la **soustraction**, comme l'addition de l'opposé d'un nombre ($a-b = a + (-b)$). Et maintenant, $5+x=2$ a bien une solution puisque $x=2-5 = 2+(-5)=-3 \in\mathbb{Z}$.

Sa parfaite symétrie élève $\mathbb{Z}$  au rang de **groupe**.

<div id="def">

Un **groupe** $(G,\star)$ est un ensemble $G$ muni d'une loi de composition interne $\star$ tel que&nbsp;:
<ul style="margin:-0.5em 0 1em 0;">
<li>la loi est associative&nbsp;: pour tous éléments $a,b,c,$ $(a\star b)\star c = a\star (b\star c)$&nbsp;;</li>
<li>il existe un élément neutre&nbsp;;</li>
<li>tout élément a un symétrique.</li>
</ul>

</div>

Il manquait la dernière condition à $(\mathbb{N},+)$. C'est maintenant réparé.<br>
De plus, comme $a+b=b+a$ pour tous les éléments $a$ et $b$ de $\mathbb{Z}$, $(\mathbb{Z},+)$ est un **groupe commutatif**.

### Du groupe à l'anneau

On peut continuer à enrichir notre structure en ajoutant une seconde opération, la **multiplication** $\times$. Si l'addition permet de translater, la multiplication permet, elle, de dilater.

Pour que les deux opérations s'entendent, il faut une règle de bonne conduite&nbsp;: la **distributivité**.

<div id="def">

$(\mathbb{A},\star_1,\star_2)$ est un **anneau commutatif** si&nbsp;:

<ul style="margin:-0.5em 0 1em 0;">
<li>$(\mathbb{A},\star_1)$ est un groupe commutatif&nbsp;;</li>
<li>$\star_2$ est distributive sur $\star_1$&nbsp;: $a\star_2(b\star_1 c) = a\star_2 b \star_1 a\star_2 c$ </li>
</ul>

</div>

Dans le cas de $(\mathbb{Z},+,\times)$, $(\mathbb{Z},+)$ est bien un groupe commutatif. Il suffit donc d'imposer que la multiplication soit distributive par rapport à l'addition pour obtenir un anneau commutatif.

L'élément neutre pour la multiplication est $e_\times = 1$.

Vérifions que la simple distributivité de $\times$ par rapport à $+$ permet de retrouver l'opération familière de multiplication.

<div id="preuve">

<div id="grosseformule">

$$
\begin{array}{rcll}
5\times 3 &=& 5\times (1+1+1)&\\\\
&=&5\times 1 + 5\times 1 + 5 \times 1 \quad& \text{distributivité}\\\\
&=& 5 + 5 + 5 &\text{muliplication par l'élément neutre}\\\\
&=& 15
\end{array}
$$

</div>

</div>


### Inverser la multiplication

On sait maintenant calculer $5+3, 3-5, 5\times 3$. Mais comment résoudre $5\times x = 15$&nbsp;? Pour isoler $x$, il faudrait pouvoir inverser la multiplication. Et que faire de l'équation $5\times x = 2$ qui ne semble pas avoir de solution dans $\mathbb{Z}$&nbsp;?

Procédons comme pour $\mathbb{N}\rightarrow\mathbb{Z}$ en ajoutant à $\mathbb{Z}$ les symétriques des éléments de $\mathbb{Z}$ vis-à-vis de la multiplication.

Petite finesse&nbsp;: l'élément neutre de la première opération ($e_+ = 0$) ne peut pas avoir d'inverse (c'est la distributivité qui l'interdit).

<div id="preuve">

En effet, la distributivité entraîne que l'élément neutre de la première opération $e_+=0$ soit **absorbant** pour la deuxième opération ($0 \times x = 0, \forall x$).

Preuve :<br>
$0+0=0$ par définition de l'élément neutre $e_+$.<br>
On multiplie par $x$ à gauche et à droite&nbsp;:<br>
$x\times(0+0)=x\times 0$<br>
On applique la distributivité&nbsp;:<br>
$x\times 0 + x\times 0 = x\times 0$<br>
Chaque élément possédant un symétrique pour l'addition (un opposé), on peut soustraire $x\times 0$ de chaque côté&nbsp;:<br>
$x\times 0 + x\times 0 -x\times 0 = x\times 0 -x\times 0$<br>
Ce qui donne&nbsp;:<br>
$x\times 0  = 0$

La règle qui force l'addition et la multiplication à cohabiter fait donc de $e_+$ un élément absorbant&nbsp;!

Et que se passe-t-il si on donne un symétrique multiplicatif (un inverse) à un élément absorbant&nbsp;?

Soit $0^{-1}$ tel que $0^{-1}\times 0 = e_\times = 1$.<br>
Or $0^{-1}\times 0 = 0$ puisque $0$ est absorbant.<br>
On en conclut que $e_+=e_\times$, soit $0=1$...

Or si $0=1$, **l'anneau s'effondre** sur lui-même&nbsp;!

En effet, prenons un élément quelconque $y$ de l'anneau.<br>
$y=y\times 1$ puisque $1=e_\times$ est l'élément neutre de  la multiplication.<br>
En utilisant $1=0$&nbsp;:<br>
$y=y\times0$<br>
Et comme $0$ est absorbant&nbsp;:<br>
$y=0$<br>

Conclusion&nbsp;: si l'élément neutre de l'addition $0$ possède un inverse, cela force tous les éléments à être égaux à $0$. L'ensemble se réduit à ce seul élément&nbsp;: $\\{0\\}$.

Dans ce micro-univers dégénéré, $0$ est effectivement son propre inverse ($e_+=e_\times=1$).

Si un anneau veut posséder plus d'un élément, $0$ est interdit d'inverse.

</div>

En ajoutant les symétriques des éléments de $\mathbb{Z} \backslash \\{0\\}$ vis-à-vis de la multiplication (les inverses), on passe de $\mathbb{Z}$ à $\mathbb{Q}$, d'un anneau commutatif à un corps&nbsp;: le **corps des nombres rationnels** (les fractions).

La présence des inverses permet maintenant de résoudre $a\times x = b$ en multipliant à gauche et à droite par l'inverse de $a$&nbsp;: $x=a^{-1}\times b$. Cette promotion au rang de corps permet de définir la nouvelle opération de **division** comme la multiplication par l'inverse.

<div id="def">

Dans un **corps** $(\mathbb{K},+,\times)$, les deux opérations sont (presque) symétriques&nbsp;:

<ul style="margin:-0.5em 0 1em 0;">
<li>$(\mathbb{K},+)$ forme un groupe commutatif&nbsp;;</li>
<li>$(\mathbb{K}\backslash\{0\},\times)$ forme aussi un groupe commutatif.</li>
</ul>

</div>

### Notion d'odre

<div id="def">

Une **relation d'ordre** (notée $\leq$) sur un ensemble $E$ est une relation binaire qui permet de hiérarchiser ses éléments. Elle doit obligatoirement vérifier les trois axiomes suivant pour tous éléments $x$, $y$ et $z$ appartenant à $E$ :

<ul style="margin:-0.5em 0 1em 0;">
<li> Soit $x\leq y$, soit $y\leq x$</li>
<li>Si $x \leq y$ et $y \leq x$, alors $x = y$</li>
<li>Si $x \leq y$ et $y \leq z$, alors $x \leq z$</li>
</ul>
</div>

<br>

<div id="def">

Un **ensemble ordonné** $(E,\leq)$ est un ensemble $E$ muni d'une relation d'ordre $\leq$  formé d'un ensemble $E$ et d'une relation d'ordre $\leq$ définie sur cet ensemble.

</div>

Les ensembles de nombres qu'on a rencontré jusqu'à maintenant ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$) étaient tous des ensembles ordonnés. Et pour cause, les nombres qu'ils contiennent peuvent à chaque fois être rangés sur une droite.


Pour obtenir un corps ordonné, il faut s'assurer que la relation d'ordre est bien compatible avec les opérations d'addition et de multiplication.

<div id="def">

<p id="compat">
Un <b>corps ordonné</b> est muni d'une relation d'ordre vérifiant les axiomes de compatibilité suivant&nbsp;:
</p>
<ul style="margin:-0.5em 0 1em 0;">
<li>compatibilité avec l'addition&nbsp;:<br>
si $y≤z$, alors $x+y≤x+z$</li>
<li>compatibilité avec la multiplication&nbsp;:<br>
si $0≤x$ et $0≤y$, alors $0≤x\times y$</li>
</ul>

</div>

<br>

<div id="theo">

<b>Le corps des rationnels est ordonné.</b>

</div>

### Résumé

Que nous a apporté la symétrisation de nos ensembles de nombres&nbsp;? 

<div id="theo">

<ul style="margin:1em 0 1em 0;">
<li>la symétrie par rapport à l'addition a créé les nombres négatifs ($\mathbb{N}\rightarrow\mathbb{Z}$) et a permis de définir la soustraction&nbsp;;</li>
<li>le symétrie par rapport à la multiplication a créé les fractions ($\mathbb{Z}\rightarrow\mathbb{Q}$) et a permis de définir la division.</li>
</ul>

</div>

## Boucher les trous

Tout est maintenant joliment symétrique. Pourquoi aller plus loin&nbsp;?<br>
À cause des trous...

Entre deux fractions, aussi proches soient-elles, on peut toujours en trouver une troisième. Les nombres rationnels $\mathbb{Q}$ semblent donc occuper tout l'espace en formant une droite de $-\infty$ à $+\infty$. Et pourtant, la droite de $\mathbb{Q}$ est en réalité une dentelle.

Les pythagoriciens, déjà, avaient démontré qu'en prenant un carré de côté $1$ et en reportant au compas la diagonale du carré sur la droite des nombres, on tombe sur un point qu'aucune fraction ne peut exprimer, un point **irrationnel** (n'appartenant pas à $\mathbb{Q}$)&nbsp;!

<div id="preuve">

La démonstration de l'irrationalité de $\sqrt{2}$ est un grand classique. C'est une preuve par contradiction&nbsp;: on suppose que $\sqrt{2}$ est une fraction et on aboutit à une contradiction.

Supposons donc que $\sqrt{2}$ peut s'exprimer sous la forme d'une fraction. Toute fraction peut se réduire en simplifiant numérateur et dénominateur jusqu'à ce qu'il n'aient plus de diviseurs communs.<br>
Posons donc $\sqrt{2}=\frac{p}{q}$ avec $p\wedge q = 1$.<br>
On prend le carré de cette équation&nbsp;: $2=\frac{p^2}{q^2}\Leftrightarrow p^2=2\times q^2\Leftrightarrow p\times p = q\times q \times 2$.<br>
Comme $q$ ne divise pas $p$ par hypothèse ($p\wedge q =1$), $p$ doit être divisible par $2$.<br>
Le numérateur $p$ est donc pair et on peut écrire $p=2\times r$.<br>
On a alors&nbsp;: $2=\frac{p^2}{q^2}=\frac{4\times r^2}{q^2}\Leftrightarrow q^2 = 2\times r^2$. Et comme $r$ divise $p$, il ne peut pas diviser aussi $q$. Par conséquent, $q$ est pair lui aussi...

On est parti de l'hypothèse que $p$ et $q$ n'ont pas de diviseurs communs (autres que 1) et pourtant, on vient de montrer que $2$ divise à la fois $p$ et $q$. Cela montre finalement qu'on ne peut pas écrire $\sqrt{2}$ sous la forme d'une fraction.

</div>

On dit que $\mathbb{Q}$ n'est pas **complet**.

Or l'intuition semble nous indiquer que la droite géométrique et l'ensemble des nombres devraient être en parfaite correspondance. On a là en effet deux "objets" constitués d'éléments parfaitement ordonnés qu'on peut translater à gauche ou à droite (additionner ou soustraire) et qu'on peut dilater où rétrécir (multiplier ou diviser).<br>
Le corps ordonné des rationnels $\mathbb{Q}$ coche jusqu'ici toutes les cases. Mais la droite géométrique a tout l'air d'être continu, elle, au contraire de $\mathbb{Q}$.

Appelons alors **réels** $\mathbb{R}$, les éléments constitutifs de cette droite continue. Comment construire ce corps ordonné **complet** qu'est $\mathbb{R}$ à partir de $\mathbb{Q}$&nbsp;?


### Le plus petit majorant

L'idée pour compléter les rationnels et de leur conférer *la* propriété qui leur manque cruellement.

On va alors définir l'ensemble des réels $\mathbb{R}$, l'extension complète des rationnels (on se contente ici de supposer que cet ensemble existe, on verra plus loin comment le construire explicitement à partir de $\mathbb{Q}$), comme l'ensemble qui contient les rationnels (le contraire serait bizarre) et possède la propriété clé suivante&nbsp;:

<div id="theo" style="border:5px solid #B51700;">

<b style="color:#B51700;">Propriété de la borne supérieure&nbsp;:</b>

<b style="color:#B51700;">Toute partie non vide majorée de $\mathbb{R}$ admet une borne supérieure (un plus petit majorant).</b>

</div>

Cela suffit pour boucher les trous de $\mathbb{Q}$ (ne pas se tromper de préposition)&nbsp;! 

Assurons-nous d'abord que cette borne supérieure est bien parfois absente de $\mathbb{Q}$. Pour cela, utilisons à nouveau notre exemple fil-rouge historique&nbsp;: $\sqrt{2}$.

<div id="preuve">

Soit $E$ l'ensemble des rationnels dont le carré est inférieur à $2$&nbsp;: $E=\\{x\in\mathbb{Q}|x^2<2\\}$.

<ul>
<li>$E$ est non vide (il contient $1$, entre autres).</li>
<li>$E$ est majoré (tous ces éléments sont inférieurs à $1,5$ par exemple).</li>
</ul>

Mais y a-t-il un plus petit majorant de $E$ dans $\mathbb{Q}$&nbsp;? Non&nbsp;!<br>
Comme $\sqrt{2}$ n'appartient pas à $\mathbb{Q}$, tout ce qu'on pourra faire, c'est s'en approcher indéfiniment ($1,5\rightarrow 1,42\rightarrow 1,415\rightarrow\ldots$).

</div>

Imaginons qu'on veule encadrer $\sqrt{2}$ par des intervalles rationnels enchâssés les uns dans les autres, tels des poupées russes $([1;2]$, $ [1,4;1,5]$, $[1,41;1,42]$, $\cdots)$.<br>
Que donnera l'intersection infinie de ces intervalles&nbsp;?<br>
Elle sera vide&nbsp;!<br>
À l'inverse, grâce à l'existence d'un plus petit majorant, ce type d'intersection n'est jamais vide dans les réels. C'est un corollaire de la propriété de la borne supérieure qui rend encore plus transparente l'idée qu'il n'y a aucun trous dans les réels.

<div id="theo">

**Propriété des segments emboîtés**

Pour tout $n \in \mathbb{N}$, on considère un intervalle fermé $I_n = [a_n, b_n] = \\{x \in \mathbb{R} \mid a_n \leq x \leq b_n\\}$ .
Supposons que ces intervalles soient emboîtés les uns dans les autres, c'est-à-dire que $I_{n+1} \subseteq I_n$ pour tout $n$.
$$I_1 \supseteq I_2 \supseteq I_3 \supseteq \dots$$
Alors, l'intersection de tous ces intervalles n'est pas vide&nbsp;:

$$\bigcap_{n=1}^{\infty} I_n \neq \emptyset$$

</div>

<br>

<div id="preuve">

Le but est de prouver qu'il existe au moins un nombre réel $x$ qui survit à toutes ces réductions et reste piégé dans tous les intervalles à la fois.

Considérons l'ensemble $A$ constitué de toutes les bornes inférieures (les "bords gauches") de nos intervalles :

$$A = \\{a_n \mid n \in \mathbb{N}\\}$$

Cet ensemble $A$ est non vide. De plus, à cause de l'emboîtement, aucun bord gauche ne pourra jamais dépasser un bord droit. N'importe quel $b_n$ est donc un majorant de $A$.<br>
Puisque $A$ est non vide et majoré, la propriété de la borne supérieure nous garantit l'existence d'un plus petit majorant.

Soit $x := \sup(A)$ cette borne supérieure.

Pour montrer que $x$ appartient à l'intersection, il faut prouver que pour un entier $n$ quelconque, on a bien $a_n \leq x \leq b_n$.
<ul>
<li>$a_n \leq x$<br>
$x$ est un majorant de l'ensemble $A$, il est donc par définition supérieur ou égal à tous les $a_n$.</li>
<li>$x \leq b_n$<br>
Nous avons établi que $b_n$ majore l'ensemble $A$. Or, $x$ est défini comme étant le plus petit des majorants. Par conséquent, $x$ est obligatoirement inférieur ou égal à $b_n$.</li>
</ul>

Conclusion :
Pour tout $n$, on a $a_n \leq x \leq b_n$. Le nombre réel $x$ appartient donc à tous les intervalles $I_n$. L'intersection infinie contient au moins le nombre $x$, elle n'est donc pas vide.

</div>

En décrétant que *toute* partie majorée possède obligatoirement un plus petit majorant, on force la droite numérique a fournir un point (un nombre) à l'exact endroit du trou que l'on avait dans $\mathbb{Q}$. On est maintenant garanti qu'aucun processus d'approximation ou d'encadrement se terminera par un vide.

Et pour illustrer, montrons que $\sqrt{2}$ a bien finalement trouvé sa place chez les réels.

<div id="preuve">

On considère $T$, l'ensemble de tous les nombres réels dont le carré est strictement inférieur à $2$ :

$$T = \\{t \in \mathbb{R} \mid t^2 < 2\\}$$

<ul>
<li>Cet ensemble n'est pas vide (il contient $1$, car $1^2 < 2$).</li>
<li>Il est majoré (par exemple par $2$, car pour tout $t \ge 2$, on a $t^2 \ge 4$, donc ces $t$ ne sont pas dans $T$).</li>
</ul>

Puisque $T$ est non vide et majoré, il possède obligatoirement un plus petit majorant dans $\mathbb{R}$ (propriété de la borne supérieure) qu'on va appeler $\alpha$&nbsp;:

$$\alpha := \sup(T)$$

Montrons que $\alpha^2 = 2$ en évacuant par l'absurde les deux autres possibilités&nbsp;: $\alpha^2 <2$ et $\alpha^2>2$. Pour cela, on va utiliser les deux parties de la définition d'un plus petit majorant.

<ul>
<li>$\alpha^2 < 2$ viole le fait que $\alpha$ soit un <i>majorant</i> de $T$.</li>
</ul>

On suppose $\alpha^2 < 2$.

Posons&nbsp;:

$$
\begin{aligned}
\left(\alpha + \frac{1}{n}\right)^2 &= \alpha^2 + \frac{2\alpha}{n} + \frac{1}{n^2} \\\\
&< \alpha^2 + \frac{2\alpha + 1}{n}
\end{aligned}
$$

Comme $\alpha^2 <2$, il reste un peu de place entre $\alpha^2$ et $2$ pour y caler $ \frac{2\alpha + 1}{n}$. Il suffit de prendre un $n$ suffisamment grand.

$\alpha + \frac{1}{n}$ appartient donc à l'ensemble $T$. $\alpha + \frac{1}{n} + \alpha>\alpha$ entre en contradiction avec le fait que $\alpha$ soit défini comme un majorant de $T$.

<ul>
<li>$\alpha^2 > 2$ viole le fait que $\alpha$ soit <i>le plus petit</i> des majorants de $T$.</li>
</ul>

Posons&nbsp;:

$$
\begin{aligned}
\left(\alpha - \frac{1}{n}\right)^2 &= \alpha^2 - \frac{2\alpha}{n} + \frac{1}{n^2} \\\\
&> \alpha^2 - \frac{2\alpha}{n}\\\\
\end{aligned}
$$

Comme $\alpha^2 >2$, il reste un peu de place entre $\alpha^2$ et $2$ pour y caler $\frac{2\alpha}{n}$. Il suffit de prendre un $n$ suffisamment grand.

On aura alors $\left(\alpha-\frac 1 n\right)^2 >2$, donc $\alpha - \frac{1}{n}$ est un majorant de $T$, or $\alpha - \frac{1}{n}<\alpha$, ce qui implique qu'on ait trouvé un plus petit majorant que le plus petit majorant...



</div>


### $\mathbb{N}$ et $\mathbb{Q}$ dans $\mathbb{R}$

$\mathbb{Q}$ est une extension de $\mathbb{N}$ et $\mathbb{R}$ est une extension de $\mathbb{Q}$. Voyons comment $\mathbb{N}$ et $\mathbb{Q}$ prennent place dans $\mathbb{R}$.

Montrons d'abord que $\mathbb{N}$ est une partie non majorée de $\mathbb{R}$ (on peut toujours trouver un entier naturel plus grand que n'importe quel réel). 

<style>
ol.liste-romaine li::marker {
  content: "(" counter(list-item, lower-roman) ") ";
}
</style>

<div id="theo">

**Propriété d'Archimède**

<ul style="margin-bottom:1em;">
<li style="list-style-type: '(i) ';">Pour tout nombre réel $x \in \mathbb{R}$, il existe un entier naturel $n \in \mathbb{N}$ tel que $n > x$.</li>
<li style="list-style-type: '(ii) ';">Pour tout nombre réel $y > 0$, il existe un entier naturel $n \in \mathbb{N}$ tel que $\frac{1}{n} < y$.</li>
</ul>

</div>

<br>

<div id="preuve">

<ul style="margin-top:1em;">
<li style="list-style-type: '(i) ';"> : on procède par l'absurde.</li>
</ul>

Supposons qu'il existe un nombre réel $x$ qui est plus grand que tous les entiers naturels.<br>
Puisque $\mathbb{N}$ est un sous-ensemble de $\mathbb{R}$ non vide et (par supposition) majoré, il doit posséder un plus petit majorant&nbsp;: 

$$\alpha := \sup(\mathbb{N})$$

Si $\alpha$ est le plus petit majorant, alors le nombre $\alpha - 1<\alpha$ ne peut pas être un majorant.<br>
Puisque $\alpha - 1$ ne majore pas $\mathbb{N}$, il existe forcément au moins un entier naturel $n$ qui le dépasse&nbsp;: 

$$n>\alpha-1$$

En ajoutant $1$ des deux côtés, on obtient&nbsp;: 

$$n+1>\alpha$$

Or $n+1$ est lui-même un entier naturel&nbsp;! On vient donc de trouver un entier naturel strictement supérieur au majorant de tous les entiers. Contradiction.

Conclusion&nbsp;: il y aura toujours un entier naturel $n$ pour dépasser n'importe quel réel $x$.

<ul style="margin-top:1em;">
<li style="list-style-type: '(ii) ';">est une conséquence de (i).</li>
</ul>

Soit un réel $y > 0$. Puisque $y$ est strictement positif, son inverse $\frac{1}{y}$ est un nombre réel bien défini.

D'après le point (i) que l'on vient de prouver, il existe forcément un entier naturel $n$ tel que&nbsp;: 

$$n > \frac{1}{y}$$

Comme $n$ et $y$ sont strictement positifs, on peut inverser l'inégalité (ce qui change le sens de l'ordre) pour obtenir exactement&nbsp;: 

$$\frac{1}{n} < y$$

</div>


Cette propriété d'allure anodine va nous permettre de prouver que $\mathbb{Q}$ est dense dans $\mathbb{R}$.

<div id="theo">

**Densité de $\mathbb{Q}$ dans $\mathbb{R}$**

Pour tous nombres réels $a$ et $b$ tels que $a < b$, il existe un nombre rationnel $r \in \mathbb{Q}$ tel que $a < r < b$.

</div>

<br>

<div id="preuve">

L'objectif est de construire explicitement une fraction de la forme $\frac{m}{n}$ coincée entre $a$ et $b$.

<ol style="margin:1em 0 0 0;">
<li> Choisir le bon dénominateur $n$ (dilater l'intervalle pour que sa largeur soit supérieure à 1)</li>
</ol>

Puisque $a < b$, la distance qui les sépare est strictement positive : $b - a > 0$.<br>
D'après la Propriété d'Archimède (point ii), on peut trouver un entier naturel $n \in \mathbb{N}$ suffisamment grand pour que l'écart $\frac{1}{n}$ soit plus petit que cette distance :

$$\frac{1}{n} < b - a$$

En multipliant tout par $n$, on obtient $1 < nb - na$, ce qui donne :

$$na + 1 < nb$$

<ol start="2" style="margin:1em 0 0 0;">
<li>Choisir le numérateur $m$ (trouver l'entier dans l'intervalle)</li>
</ol>

Maintenant que l'intervalle entre $na$ et $nb$ est assez large, cherchons l'entier $m$ qui va tomber dedans.<br>
On choisit $m$ comme étant le tout premier entier qui dépasse $na$.
Puisque $m$ est le plus petit entier strictement supérieur à $na$, l'entier juste avant lui ($m-1$) est, par définition, inférieur ou égal à $na$. On a donc l'encadrement :

$$m - 1 \leq na < m$$

<ol start ="3" style="margin:1em 0 0 0;">
<li> Coincer l'entier $m$ pour conclure</li>
</ol>

Nous avons d'un côté $na < m$.<br>
De l'autre, à partir de $m - 1 \leq na$, on ajoute $1$ pour obtenir $m \leq na + 1$.<br>
Or, notre étape 1 nous a garanti que $na + 1 < nb$.<br>
On trouve donc&nbsp;:

$$na < m \leq na + 1 < nb$$

Ce qui se résume en&nbsp;:

$$na < m < nb$$

Il ne reste plus qu'à diviser toute l'inégalité par $n$ (qui est positif) :

$$a < \frac{m}{n} < b$$

Le nombre $r = \frac{m}{n}$ est un rationnel, et il est strictement compris entre $a$ et $b$.

</div>


### Les coupures de Dedekind

Jusque-là, on s'est contenté de définir l'ensemble des réels en ajoutant aux rationnels la propriété de la borne supérieure, mais sans jamais s'assurer qu'une telle extension était réellement organique. 

Le mathématicien allemand Dedekind a donné une recette de construction explicite des réels à partir des rationnels comme seul ingrédient. Et on verra que la propriété cruciale de la borne supérieure découle naturellement de cette construction.

La recette repose sur un coup de ciseaux de la droite des rationnels, la coupure de Dedekind.  

<div id="def">

On appelle **coupure de Dedekind** une partition de l'ensemble des rationnels $\mathbb{Q}$ en deux sous-ensembles $A$ et $B$ qui respecte les quatre conditions suivantes :

<ol style="margin:-0.5em 0 1em 0;">

<li>Non-vacuité : $A \neq \emptyset$ et $B \neq \emptyset$ (on ne coupe pas "en dehors" de la droite).</li>

<li>Partition : $A \cup B = \mathbb{Q}$ et $A \cap B = \emptyset$ (chaque rationnel est d'un côté ou de l'autre de la coupure).</li>

<li>Ordre : Pour tout $a \in A$ et tout $b \in B$, on a $a < b$ (le morceau $A$ est strictement à gauche du morceau $B$).</li>

<li>Convention de la frontière : l'ensemble $A$ ne possède pas de plus grand élément.</li>

</ol>

</div>

<u>Rq</u>&nbsp;:  la condition 4 sert à éviter les ambiguïtés pour une coupure sur un rationnel. Si la coupure est sur le nombre $3$ par exemple, on décide que $3$ va dans $B$. Ainsi, $A = \\{x \in \mathbb{Q} \mid x < 3\\}$ n'a pas de maximum, et $B = \\{x \in \mathbb{Q} \mid x \ge 3\\}$ possède un minimum ($3$).

Une fois ces coupures définies dans $\mathbb{Q}$, on regarde le comportement de l'ensemble $B$ (la partie droite). C'est lui qui révèle la nature du nombre.

<ul>
<li>Si $B$ possède un plus petit élément (un minimum) $m$ : la coupure correspond au nombre rationnel $m$. La frontière appartient à $B$.</li>
<li>Si $B$ ne possède pas de plus petit élément&nbsp;: ni $A$ n'a de maximum, ni $B$ n'a de minimum. Il y a un "vide" rationnel entre les deux ensembles. On décrète alors que cette coupure est un nombre irrationnel.</li>
</ul>

<br>

<div id="def">

L'ensemble des nombres réels $\mathbb{R}$ est alors défini comme l'**ensemble de toutes les coupures de Dedekind** possibles. 

</div>

Puisque l'ensemble $A$ détermine entièrement l'ensemble $B$ (car $B = \mathbb{Q} \setminus A$), on peut même définir une coupure, c'est-à-dire un nombre réel $x$, comme étant simplement l'ensemble "de gauche" $A_x$.

Réexprimons les propriétés constitutives d'une coupure en termes uniquement d'ensembles $A$&nbsp;:

<div id="def">

Une **coupure de Dedekind** $A_x$ (alias un nombre réel) est une partie de $\mathbb{Q}$&nbsp;:

<ol style="margin:-0.5em 0 1em 0;">
<li>non vide&nbsp;;</li>
<li>différente de $\mathbb{Q}$&nbsp;;</li>
<li><b>fermée vers le bas</b> (si un nombre $p$ appartient à $A$, alors tout nombre $q$ strictement inférieur à $p$ doit aussi appartenir à $A$)&nbsp;;</li>
<li>sans maximum.</li>
</ol>

</div>

Montrons qu'en définissant les réels comme l'ensemble des $A_x$, on obtient bien un corps ordonné.<br>
Pour cela, on ne peut plus utiliser nos opérations habituelles sur les nombres. Il faut redéfinir l'addition, la multiplication et l'ordre uniquement en termes d'ensembles.

<div id="preuve">

<ol start ="1" style="margin:1em 0 0 0;">
<li>L'ordre ($≤$)</li>
</ol>

Comment dire que $x \leq y$ quand $x$ et $y$ sont des ensembles&nbsp;? Grâce à l'inclusion&nbsp;:

$$x \leq y \iff A_x \subseteq A_y$$

Intuition&nbsp;: si la lame des ciseaux tombe plus à gauche pour $x$ que pour $y$, l'ensemble de gauche de $x$ est forcément inclus dans celui de $y$ (fermeture vers le bas). Cette définition confère immédiatement à $\mathbb{R}$ un ordre total.

<ol start ="2" style="margin:1em 0 0 0;">
<li>L'addition</li>
</ol>

Pour additionner deux réels $x$ et $y$, on additionne tous les éléments de leurs ensembles $A_x$ et $A_y$&nbsp;:

$$A_{x+y} := \\{a + b \mid a \in A_x, b \in A_y\\}$$ 

Il faut ensuite démontrer rigoureusement que ce nouvel ensemble $A_{x+y}$ vérifie bien les propriétés d'une coupure (non vide, pas égal à $\mathbb{Q}$, fermé vers le bas, sans maximum). Puis on prouve que cette opération est commutative, associative, et que la coupure correspondant au nombre $0$ agit bien comme élément neutre[^1].

<ol start ="3" style="margin:1em 0 0 0;">
<li>La multiplication</li>
</ol>

C'est la partie la plus laborieuse. On ne peut pas juste multiplier les ensembles comme on les a additionnés, à cause de la règle des signes (multiplier deux nombres négatifs donne un positif, ce qui empêche la fermeture vers le bas de la coupure).<br>
On doit donc :
<ul>
<li>définir la multiplication uniquement pour les réels positifs (les coupures où $0 \in A$).</li>
<li>traiter les réels négatifs par des cas particuliers en utilisant l'opposé.</li>
</ul>

En résumé, on ne "démontre" pas que $A$ a les propriétés d'un nombre. On construit les lois $+$, $\times$ et $\leq$ sur ces ensembles pour les forcer à se comporter comme un corps.

</div>

[^1]: Esquisse de la preuve pour l'élément neutre&nbsp;:<br>
On veut arriver à $A_{x+0}=\\{a+b|a\in A_x,b\in A_0\\} = A_x$.<br>
Pour ça, on montre que $A_{x+0}\subset A_x$ grâce à la fermeture vers le bas&nbsp;: $a+b<a$ (puisque tout élément de $A_0$ est strictement négatif). Et donc $a+b \in A_x$.<br>
Et on montre que $A_x \subset A_{x+0}$ grâce à l'absence de maximum dans $A_x$&nbsp;: il y a toujours un $a'\in A_x$ tel que $a'>a$. Et donc $a=a'+(a-a')$. Comme $a-a'<0$, $(a-a')\in A_0$. Finalement, tout élément $a$ de $A_x$ peut s'écrire comme un élément $a'+(a-a')$ de $A_{x+0}$.

<br>

<div id="theo">

La magie de la définition de Dedekind est qu'elle permet de démontrer simplement la propriété clé que **toute partie non vide et majorée de $\mathbb{R}$ admet une borne supérieure**.

</div>

<br>


<div id="preuve">

Soit $E$ un sous-ensemble de $\mathbb{R}$, non vide et majoré.

<ul>
<li>Chaque élément $x \in E$ est une coupure, donc un sous-ensemble $A_x \subset \mathbb{Q}$.</li>
<li>Puisque $E$ est majoré, il existe une coupure $M$ (un réel) telle que pour tout $x \in E$, on ait $x \leq M$. En termes d'ensembles, cela signifie&nbsp;: $\forall x \in E, A_x \subseteq A_M$ .</li>
</ul>

On cherche un bon candidat pour incarner cette borne supérieure. Puisque les réels sont des ensembles, l'idée est de tous les unir.<br>
On définit ainsi l'ensemble $S$ comme la réunion de toutes les coupures appartenant à $E$&nbsp;:

$$S := \bigcup_{x \in E} A_x$$

On procède maintenant en trois temps pour montrer que $S$ est la borne supérieure attendue.

<ol start ="1" style="margin:1em 0 0 0;">
<li>Prouvons que $S$ est bien un nombre réel (une coupure valide).</li>
</ol>

Il faut vérifier les quatre propriétés de la coupure sur notre ensemble $S \subset \mathbb{Q}$ :
<ul>
<li>Non vide&nbsp;:<br>
Comme $E$ n'est pas vide, il contient au moins une coupure $A_{x_0}$. Comme cette coupure n'est pas vide, la réunion $S$ n'est pas vide.</li>
<li>Différent de $\mathbb{Q}$&nbsp;:<br>
On sait que pour tout $x \in E$, $A_x \subseteq A_M$. Par définition de la réunion, on a donc $S \subseteq A_M$. Comme $M$ est une coupure valide, $A_M \neq \mathbb{Q}$. Donc $S \neq \mathbb{Q}$.</li>
<li>Fermé vers le bas&nbsp;:<br>
Soit un rationnel $p \in S$ et soit $q \in \mathbb{Q}$ tel que $q < p$.
Puisque $p \in S$, il existe par définition de la réunion au moins une coupure $A_x$ telle que $p \in A_x$. Or, $A_x$ est une vraie coupure, donc elle est fermée vers le bas&nbsp;: on a donc $q \in A_x$. Par conséquent, $q \in S$.</li>
<li>Pas de plus grand élément&nbsp;:<br>
Soit $p \in S$. Il appartient à un certain $A_x$. Comme $A_x$ est une coupure, elle n'a pas de maximum, donc il existe $r \in A_x$ tel que $p < r$. Ce $r$ appartient évidemment à $S$. Donc $S$ n'a pas de maximum.</li>
</ul>

Conclusion&nbsp;: l'ensemble $S$ est bien une coupure de Dedekind. Il représente donc un nombre réel.

<ol start ="2" style="margin:1em 0 0 0;">
<li>Prouvons que $S$ est un majorant de $E$</li>
</ol>

Soit $x$ un élément quelconque de $E$. Par définition même de la réunion d'ensembles, on a trivialement&nbsp;:

$$A_x \subseteq \bigcup_{k \in E} A_k = S$$

Et comme l'inclusion traduit l'ordre ($A_x \subseteq S \iff x \leq S$), on en déduit que $x \leq S$.
Conclusion&nbsp;: $S$ majore bien l'ensemble $E$.

<ol start ="3" style="margin:1em 0 0 0;">
<li>Prouvons que $S$ est le plus petit des majorants</li>
</ol>

Soit $M'$ un autre majorant de $E$. Cela signifie que pour tout $x \in E$, $x \leq M'$, c'est-à-dire $A_x \subseteq A_{M'}$.<br>
Puisque tous les ensembles $A_x$ (pour $x \in E$) sont inclus dans $A_{M'}$, leur réunion totale est nécessairement incluse dans $A_{M'}$.<br>
On a donc :

$$S \subseteq A_{M'}$$

Ce qui se traduit par $S \leq M'$.<br>
Conclusion&nbsp;: n'importe quel autre majorant $M'$ est obligatoirement plus grand ou égal à $S$. $S$ est bien la borne supérieure.

</div>

Avec la construction de Dedekind, la complétude de $\mathbb{R}$ découle de manière presque triviale d'un axiome basique de la théorie des ensembles&nbsp;: l'union de plusieurs "sacs de rationnels" fermés vers le bas donne naturellement un nouveau "sac de rationnels" parfaitement conforme.

### Cantor et les suites de Cauchy 

Cantor a bouché les trous des rationnels d'une toute autre façon que Dedekind.

Il a utilisé des suites de Cauchy dont l'intérêt est de s'assurer d'une convergence vers une limite (un nombre) sans que ce nombre n'ait besoin d'être défini.

<div id="def">

Une **suite** $(u_n)$ est de **Cauchy** si, pour tout écart $\epsilon$ strictement positif (aussi petit soit-il), il existe un rang $N$ à partir duquel la distance entre deux termes quelconques $u_p$ et $u_q$ est inférieure à cet écart.

Formellement, cela s'écrit :

<div id="grosseformule">
$$\forall \epsilon > 0, \exists N \in \mathbb{N}, \forall p \ge N, \forall q \ge N, |u_p - u_q| < \epsilon$$
</div>

</div>

Ici, la convergence est une propriété interne à la suite (on ne mesure pas la distance entre la limite externe $L$ et les éléments de $(u_n)$).

Cela permet d'avoir des suites définies dans $\mathbb{Q}$ qui convergent même si leurs cibles n'est pas dans $\mathbb{Q}$ (la suite des approximations décimales de $\sqrt{2}$ par exemple).

Et ainsi, Cantor réussit à construire les nombres irrationnels (les "trous") en n'utilisant que le matériel disponible, c'est-à-dire les rationnels&nbsp;: il décrète que les irrationnels sont les suites elles-mêmes. La cible de ces suites n'a pas d'existence dans les rationnels, mais l'ensemble des éléments de ces suites de Cauchy, si.

Petit problème cependant, certaines suites de Cauchy peuvent converger vers le même nombre. 

<div id="def">

Deux suites de Cauchy $(u_n)$ et $(v_n)$ sont dites équivalentes si la limite de leur différence tend vers $0$&nbsp;:

<div id="grosseformule">
$$(u_n) \sim (v_n) \iff \lim_{n \to \infty} (u_n - v_n) = 0$$
</div>

</div>

Cantor définit alors un nombre réel comme une classe d'équivalence de suites de Cauchy de rationnels.

<div id="def">

En appelant $\mathcal{C}$ l'ensemble de toutes les suites de Cauchy à valeurs dans $\mathbb{Q}$, le corps des nombres réels $\mathbb{R}$ est défini comme l'ensemble quotient&nbsp;:

$$\mathbb{R} = \mathcal{C} / \sim$$

</div>



{{%notice note%}}
C'est exactement la même année, 1872, que Cantor publie sa construction par les classes d'équivalence de suites, et que Richard Dedekind publie son traité (Stetigkeit und irrationale Zahlen) où il présente sa méthode par les coupures.<br>
Les deux hommes (qui étaient amis et correspondaient beaucoup) ont résolu le problème de la nature du continu géométrique au même moment, par deux voies totalement différentes.
{{%/notice%}}

## Et $\mathbb{C}$ alors&nbsp;?

La volonté d'étendre les ensembles de nombres afin qu'ils contiennent les solutions à des équations qui n'en n'avaient pas dans l'ensemble de départ peut être vue, main dans la main avec la recherche de symétrie, comme le véritable moteur de notre quête&nbsp;:

$$
\begin{aligned}
x+2=0 &\Rightarrow \mathbb{N}\rightarrow\mathbb{Z}\\\\
2x=3 &\Rightarrow \mathbb{Z}\rightarrow\mathbb{Q}\\\\
x^2=2 &\Rightarrow \mathbb{Q}\rightarrow\mathbb{R}\\\\
x^2 = -1 &\Rightarrow \mathbb{R}\rightarrow\mathbb{C}
\end{aligned}
$$


Avec $\mathbb{R}$, on a obtenu un corps topologiquement complet. Et on peut même montré qu'il s'agit du **seul** corps ordonné complet (intuitivement, il n'y a qu'une seule droite des réels).<br>
Mais $\mathbb{R}$ n'est pas algébriquement clos dans le sens où certaines équations polynomiales n'y ont pas de solution comme $x^2+1=0$.

On construit alors $\mathbb{C}$ comme la clôture algébrique de $\mathbb{R}$ en faisant en sorte que tout polynôme ait des racines. 

Les mathématiciens utilisent $i=\sqrt{-1}$ depuis le 16<sup>e</sup> siècle pour obtenir les racines de ces polynômes récalcitrants, mais sans vraiment lui conférer le statut de nombre à part entière. $i$ restait une astuce de calcul un peu honteuse. Il fallut attendre la mathématicien irlandais Hamilton pour qu'une construction entièrement basée sur $\mathbb{R}$ permette de se passer du parachutage d'un nombre magique.

Hamilton propose de changer de dimension&nbsp;! 

<div id="def">

L'**ensemble des nombres complexes** $\mathbb{C}$ est défini comme l'ensemble des couples de nombres réels $\mathbb{R}^2 = \\{(a, b) \mid a \in \mathbb{R}, b \in \mathbb{R}\\}$ , muni de deux lois de composition interne définies ainsi pour tous couples $(a,b)$ et $(c,d)$&nbsp;:

<ul style="margin-bottom:1em;">
<li>l'addition&nbsp;: $(a, b) + (c, d) := (a+c, b+d)$</li>
<li>La multiplication&nbsp;: $(a, b) \times (c, d) := (ac - bd, ad + bc)$</li>
</ul>

Deux couples sont égaux si et seulement si leurs composantes respectives sont égales : $(a,b) = (c,d) \iff a=c$ et $b=d$.

</div>

<br>

<div id="theo">

$\mathbb{C}$ est un corps commutatif.

</div>

<br>

<div id="preuve">

Il faut vérifier (c'est long) que cet ensemble muni de ces deux opérations coche toutes les cases d'un corps commutatif. Ce faisant, on découvre notamment que&nbsp;:

<ul style="margin-bottom:1em;">
<li>l'élément neutre de l'addition est le couple $(0, 0)$&nbsp;;</li>
<li>le symétrique additif (l'opposé) de $(a, b)$  est $(-a, -b)$&nbsp;;</li>
<li>Le symétrique multiplicatif (l'inverse) de $(a, b)$  avec $(a,b) \neq (0,0)$ est $\left(\frac{a}{a^2+b^2}, \frac{-b}{a^2+b^2}\right)$.</li>
</ul>

</div>

On peut se demander ensuite où $\mathbb{R}$ se place dans $\mathbb{C}$.

<div id="theo">

L'ensemble $\mathbb{R}$ est l'axe des abscisses de $\mathbb{R}^2$.

</div>

<br>

<div id="preuve">

Si on les additionne ou si on multiplie entre eux des couples dont la deuxième coordonnée est nulle, on obtient&nbsp;:

<ul>
<li>$(a, 0) + (c, 0) = (a+c, 0)$</li>
<li>$(a, 0) \times (c, 0) = (ac - 0, 0 + 0) = (ac, 0)$</li>
</ul>

On constate que ces couples se comportent exactement comme les nombres réels habituels. On décide donc de les identifier et on pose&nbsp;:

$$ a := (a, 0) $$

</div>

Et où est $i$&nbsp;?

<div id="def">

$$i := (0, 1)$$ 

</div>

On a bien ainsi&nbsp;:


<div id="theo">

$$i^2 = -1$$

</div>

<br>

<div id="preuve">

Calculons le carré du couple $(0,1)$ avec notre loi de multiplication&nbsp;:

$i^2 = (0, 1) \times (0, 1) = (0\times0 - 1\times1, 0\times1 + 1\times0) = (-1, 0)$

Or, d'après notre convention précédente, le couple $(-1, 0)$ est identifié au nombre réel $-1$.

</div>


Maintenant que tout est en place, prenons un couple quelconque $(a, b)$  de $\mathbb{R}^2$.<br>
Grâce aux règles que nous venons de définir, nous pouvons le décomposer algébriquement&nbsp;:

$$(a, b) = (a, 0) + (0, b)$$   

On peut réécrire le terme $(0, b)$  comme une multiplication&nbsp;:

$$(0, b) = (b, 0) \times (0, 1)$$   

Ce qui donne l'égalité complète :

$$(a, b) = (a, 0) + (b, 0) \times (0, 1)$$    

En remplaçant les couples par nos nouvelles notations ($(a,0)=a$, $(b,0)=b$ et $(0,1)=i$), on voit apparaître la forme&nbsp;:

<div id="theo">

$$(a, b) \equiv a + ib$$ 

</div>

La boucle est bouclée. L'astuce honteuse $i$ n'est rien d'autre que le vecteur unitaire de l'axe des ordonnées.

### Prix à payer

En passant de $\mathbb{Q}$ à $\mathbb{R}$, on n'avait rien perdu, au contraire&nbsp;: on avait gardé le corps, gardé l'ordre et gagné la complétude.<br>
Par contre, l'extension de $\mathbb{R}$ à $\mathbb{C}$ a un coût élevé&nbsp;: on perd la notion d'ordre&nbsp;!<br>
Dans le plan complexe, on ne peut pas classer les nombres de manière absolue. Est-ce que $i$ est plus grand que $1$&nbsp;? Plus grand que $0$&nbsp;? Ça n'a pas de sens. $\mathbb{C}$ n'est pas un corps ordonné.

<div id="preuve">

On peut démontrer très facilement par l'absurde que le corps $\mathbb{C}$ refuse les axiomes de compatibilité <a href="#compat">vus plus haut</a>.

Dans tout corps ordonné, le carré d'un nombre non nul est toujours strictement positif (conséquence directe du deuxième axiome).<br>
Or, dans $\mathbb{C}$, on a $i \neq 0$ et $i^2 = -1$.<br>
Si $\mathbb{C}$ était un corps ordonné, on aurait donc $-1 > 0$. Pourquoi pas...<br>
En ajoutant $1$ des deux côtés, on obtiendrait (axiome de compatibilité avec l'addition) $0 > 1$.<br>
Et comme $-1$ est ici positif, l'axiome de compatibilité avec la multiplication nous assure que&nbsp;: $(-1)\times(-1)>0$. Ce qui donne&nbsp;: $1>0$.<br>
Nous voilà devant une belle contradiction.

</div>

### Bon retour sur investissement

Pourquoi s'arrête-t-on à $\mathbb{C}$&nbsp;? Pourquoi n'a-t-on pas besoin d'inventer $\mathbb{D}$ pour résoudre des équations complexes bizarres, puis $\mathbb{E}$, etc.&nbsp;?

C'est là qu'intervient le **théorème de d'Alembert-Gauss** (ou théorème fondamental de l'algèbre)&nbsp;:

<div id="theo">

Tout polynôme de degré $n$ (avec $n ≥ 1$) à coefficients complexes possède exactement $n$ racines dans $\mathbb{C}$ (en comptant leurs multiplicités).

</div>

Cela signifie que l'ensemble **$\mathbb{C}$ est algébriquement clos**.<br>
Quelle que soit l'équation polynomiale[^2] à coefficient dans $\mathbb{C}$, toutes ses solutions sont déjà dans $\mathbb{C}$. Il n'y a plus aucun trou algébrique. Le système s'est refermé sur lui-même de manière parfaite.

[^2]: Le polynôme n'est rien d'autre que l'expression la plus générale possible construite avec les opérations natives du corps.

$\mathbb{R}$ et $\mathbb{C}$ représente un double aboutissement dans la quête des nombres. Avec l'unique corps ordonné complet $\mathbb{R}$, on modélise enfin la droite géométrique, et avec $\mathbb{C}$, on obtient sa clôture algébrique.

## Et après&nbsp;?

Rien n'interdit pourtant d'essayer d'étendre encore ces ensembles ou de prendre des chemins de traverse.

On peut s'amuser par exemple à augmenter à nouveau les dimensions.<br>
Sur sa lancée, Hamilton voulut transposer à trois dimensions la modélisation des rotations planes que permettent les complexes. Mais pour cela, il s'est rendu compte qu'il avait besoin de... 4 dimensions. Il mit ainsi au point les **quaternions**.  Puis ce fut le tour des **octonions**, à 8 dimensions, de voir le jour...

Mais chacune de ces extensions se fait au détriment de propriétés importantes&nbsp;: les quaternions perdent la commutativité et les octonions perdent l'associativité. Et si on veut aller plus loin, on perd carrément la division...

D'autres ont jouer à changer de géométrie avec les **nombres $p$-adiques** qui complètent les rationnels de manière analogue aux réels, mais avec une toute autre définition de la distance entre deux fractions que la valeur absolue, une distance basée sur la divisibilité par un nombre premier $p$.<br>
On n'obtient plus alors la droite réelle mais une géométrie fractale...

Manipuler les infinis en les intégrant aux systèmes de nombres est une autre tentation qui a donné naissance au corps ordonné des **nombres hyperréels** (une extension des nombres réels où la propriété d'Archimède ne tient plus et où la notion de limite n'a plus d'utilité).



>Source :<br>
&laquo;&nbsp;Understanding Analysis&nbsp;&raquo;, Stephen Abbott