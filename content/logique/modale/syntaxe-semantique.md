+++
title = "Logique modale - Syntaxe et sémantique"
menuTitle = "Syntaxe et sémantique"
date = 2021-03-06T14:20:50+01:00
weight = 1
aliases = ["/logique/logique4/"]
css = "logique.css"
+++

# Logique modale
<p class="chap-sous">Syntaxe et sémantique&nbsp;: des graphes de mondes possibles</p>

<nav class="chap-nav" aria-label="Chapitres">
<a href="../syntaxe-semantique/" class="actif">Syntaxe et sémantique</a>
<a href="../systemes/">Systèmes logiques</a>
<a href="../logiques/">Différentes logiques modales</a>
</nav>

<div class="source-livre">
<img src="/duparc.png" alt="Couverture du livre La logique pas à pas">
<p>Notes de lecture de <i>La logique pas à pas</i> de Jacques Duparc, que je paraphrase allégrement en y glissant quelques exemples, histoires et énigmes.</p>
</div>


Le calcul des propositions ne connaît que deux verdicts&nbsp;: vrai ou faux. Le langage courant est plus nuancé. «&nbsp;Il pleut&nbsp;», «&nbsp;il pleut forcément&nbsp;», «&nbsp;il se peut qu'il pleuve&nbsp;», «&nbsp;je sais qu'il pleut&nbsp;», «&nbsp;il pleuvra toujours&nbsp;»&nbsp;: autant de **modalités** d'une même affirmation. La logique modale se donne les moyens de les exprimer, et, pour leur donner un sens, remplace le monde unique du calcul des propositions par tout un **graphe de mondes possibles**.

Commençons par une énigme.

![](/iledragons.png)

Une petite communauté de dragons vit sur une île aux règles spéciales. Si un dragon apprend qu'il a les yeux bleus, c'est la honte et il doit partir le soir même. Mais les autres dragons n'ont pas le droit de lui dire et aucun de ces dragons n'a de reflet et ne peut donc constater la couleur de ses propres yeux.

Trois dragons peuplent l'île, **A**pophis, **B**ahamut et **C**araxès, lorsqu'un jour, un étranger débarque.<br>
L'étranger déclare&nbsp;:
> l'un de vous au moins a les yeux bleus.

Le premier soir, aucun dragon ne part.<br>
Le deuxième soir, toujours rien.<br>
Le troisième soir, ils partent tous les trois...

Que s'est-il passé&nbsp;? Chaque dragon voyait bien que les deux autres avaient les yeux bleus, l'étranger ne leur a donc rien appris… et pourtant, sans lui, personne ne serait jamais parti. Pour démêler l'affaire, il faut pouvoir parler de ce que chacun **sait**, et de ce que chacun **croit possible**&nbsp;: c'est exactement ce que la logique modale permet de modéliser.


## Syntaxe


La **syntaxe** de la logique modale est celle du calcul des propositions à laquelle on ajoute deux opérateurs unaires, les **opérateurs de modalité**&nbsp;:
- la boîte $\Box$, qu'on lira selon les contextes «&nbsp;nécessairement&nbsp;», «&nbsp;je sais que&nbsp;», «&nbsp;toujours&nbsp;», «&nbsp;il est obligatoire que&nbsp;»…
- le diamant $\Diamond$, son compagnon plus timide&nbsp;: «&nbsp;possiblement&nbsp;», «&nbsp;je n'exclus pas que&nbsp;», «&nbsp;un jour&nbsp;», «&nbsp;il est permis que&nbsp;»…

$\Box P$ et $\Diamond\neg Q$ sont des formules, mais aussi $\Box(P\rightarrow\Diamond Q)$ ou $\Box\Box\Diamond P$&nbsp;: les opérateurs s'empilent et se combinent librement avec les connecteurs.

On va être amené à non pas définir un seul $\Box$ et $\Diamond$ mais potentiellement une infinité (dénombrable).<br>
On écrira alors $[i]$ et $\langle i \rangle$, où $i$ varie dans un ensemble $I$. Dans l'histoire des dragons, par exemple, il y aura une boîte par dragon&nbsp;: $[A]$ pour «&nbsp;Apophis sait que&nbsp;», $[B]$ pour «&nbsp;Bahamut sait que&nbsp;», etc.


<div class="def">

Le <b>langage</b> $\mathcal{L}$ de la logique modale est l'ensemble suivant&nbsp;:

$\mathcal{L}=VAR\cup\set{\top,\bot,\neg,\lor,\land\rightarrow,\leftrightarrow,(,)}\cup\set{[i]:i\in\mathbb{N}}\cup\set{\langle i\rangle:i\in\mathbb{N}}$

</div>


<div class="def">

Soient $\phi$, $\psi$, $\theta$ trois formules, on note $\phi[\theta/\psi]$ la <b>substitution uniforme</b> de la formule $\theta$ à toutes les occurrences de $\psi$ dans $\phi$.

</div>

Une substitution uniforme consiste dans un premier temps à retirer toutes les occurrences de $\psi$ puis à remplacer chacune par $\theta$.


## Sémantique


### Système de transition


On va utiliser les **modèles de Kripke**, c'est-à-dire des graphes dirigés, pour interpréter les formules de la logique modale. Mais on se cantonnera ici à la logique classique (les interprétations de la négation et de l'implication seront traditionnelles et non intuitionnistes). Chaque nœud va correspondre à un **monde possible** qui sont ou non liés entre eux par des arcs.

<div class="encadre">
<div class="encadre-titre">Un lycéen d'Omaha</div>

L'idée de «&nbsp;mondes possibles&nbsp;» remonte à Leibniz, pour qui une vérité nécessaire est une vérité qui vaut dans tous les mondes que Dieu aurait pu créer (le nôtre étant, comme s'en moquera Voltaire dans *Candide*, «&nbsp;le meilleur des mondes possibles&nbsp;»). Mais pendant un demi-siècle, la logique modale moderne reste une collection de systèmes d'axiomes concurrents, sans que personne sache dire précisément de quoi ils parlent.

La réponse vient d'un adolescent du Nebraska, Saul Kripke, qui rédige à dix-sept ans un article publié en 1959&nbsp;: un monde possible est un nœud dans un graphe, et «&nbsp;nécessaire&nbsp;» veut dire «&nbsp;vrai dans tous les mondes accessibles&nbsp;». La légende veut qu'un département de mathématiques de Harvard, impressionné, lui ait proposé un poste, et qu'il ait répondu&nbsp;: «&nbsp;Ma mère dit que je dois d'abord finir le lycée et aller à l'université.&nbsp;»

</div>

On appelle ces graphes dirigés des **systèmes de transition** (*frame* en anglais)&nbsp;:

<div class="def">

Pour $I$ un ensemble non vide, un système de transition étiqueté par $I$ (ou de signature $I$) est une structure relationnelle (un graphe dirigé étiqueté) 
$$\mathcal{S}=(N,A)$$
où $N$ est un ensemble non vide dont les éléments sont appelés nœuds 
<br>et $A$ est un ensemble de relations binaires sur $N$ indicées par $I$ ($A=\set{A_i\subseteq N\times N|i\in I}$).
</div>


<div class="def">

Un système de transition $\mathcal{S}(N,A)$ (avec $A=\set{A_i\subseteq N\times N|i\in I}$) est dit
<ul>
<li><b>réflexif</b> si, pour tout $i\in I$ et pour tout $a\in N$, il vérifie $a\xrightarrow{i}a$&nbsp;;</li>
<li><b>symétrique</b> si, pour tout $i\in I$ et pour tout $a,b\in N$, dès qu'il vérifie $a\xrightarrow{i}b$, il vérifie aussi $b\xrightarrow{i}a$&nbsp;;</li>
<li><b>transitif</b> si, pour tout $i\in I$ et pour tout $a,b,c\in N$, dès qu'il vérifie à la fois $a\xrightarrow{i}b$ et $b\xrightarrow{i}c$, il vérifie aussi $a\xrightarrow{i}c$&nbsp;;</li>
<li><b>famélique</b> si, pour tout $i\in I$ et pour tout $a,b\in N$, dès qu'il vérifie $a\xrightarrow{i} b$ alors $a=b$&nbsp;;</li>
<li><b>dense</b>  si, pour tout $i\in I$ et pour tout $a,c\in N$, dès qu'il vérifie $a\xrightarrow{i} c$, alors il existe $b$ tel que $a\xrightarrow{i} b$ et $b\xrightarrow{i} c$&nbsp;;</li>
<li><b>non borné à droite</b>  si, pour tout $i\in I$ et pour tout $a\in N$, il existe un nœud $b\in N$ tel que $a\xrightarrow{i}b$&nbsp;;</li>
<li><b>euclidien</b>  si, pour tout $i\in I$ et pour tout $a,b,c\in N$,  dès qu'il vérifie à la fois $a\xrightarrow{i} b$ et $a\xrightarrow{i} c$, alors il vérifie aussi $b\xrightarrow{i} c$.</li>
</ul>
</div>


### Satisfaction


Un système de transition se mue en **modèle de la logique modale** (modèle de Kripke) dès qu'il est équipé d'une valuation portant sur les variables étudiées. Une valuation indique pour chaque nœud du graphe les variables qui sont forcées en ce nœud.

<div class="def">

Soient $I$ un ensemble non vide et $\mathcal{S}=(N,A)$ un système de transition étiqueté par $I$.<br>
Une <b>valuation</b> sur ce système de transition $\mathcal{S}$ est une fonction&nbsp;:
$$
\begin{array}{ccc}
\mathcal{V}: VAR & \to & \mathcal{P}(N)\\\\
\phantom{\mathcal{V}:}P & \mapsto & \set{a|a\Vdash P}
\end{array}
$$
</div>

<div class="def">

La <b>satisfaction</b> d'une formule $\phi$ au nœud $a$ (au sein de $\mathcal{S}$ et pour la valuation $\mathcal{V}$) est notée $a\Vdash\phi$ et se définit par induction sur la hauteur de $\phi$&nbsp;:
<ul>
<li>$a\Vdash\top$ et $a\nVdash\bot$</li>
<li>$a\Vdash P$ ssi $a\in\mathcal{V}(P)$ (pour une variable $P$ quelconque)</li>
<li>$a\Vdash\neg\phi$ ssi $a\nVdash\phi$</li>
<li>$a\Vdash\phi\lor\psi$ ssi ($a\Vdash\phi$ ou $a\Vdash\psi$)</li>
<li>$a\Vdash\phi\land\psi$ ssi ($a\Vdash\phi$ et $a\Vdash\psi$)</li>
<li>$a\Vdash\phi\rightarrow\psi$ ssi ($a\nVdash\phi$ ou $a\Vdash\psi$)</li>
<li>$a\Vdash\phi\leftrightarrow\psi$ ssi (($a\Vdash\phi$ et $a\Vdash\psi$) ou ($a\nVdash\phi$ et $a\nVdash\psi$))</li>
<li>$a\Vdash[i]\phi$ ssi pour tout $b$, si $a\xrightarrow{i}b$, alors $b\Vdash\phi$</li>
<li>$a\Vdash\langle i\rangle\phi$ ssi il existe $b$ tel que $a\xrightarrow{i}b$ et $b\Vdash\phi$</li>
</ul>
</div>

Les sept premières lignes ne font que recopier le calcul des propositions, monde par monde. Tout le sel est dans les deux dernières&nbsp;: pour évaluer $[i]\phi$ ou $\langle i\rangle\phi$ en $a$, on ne regarde pas $a$ lui-même, on va voir **chez les voisins**, au bout des flèches étiquetées $i$. La boîte exige $\phi$ chez tous les voisins, le diamant se contente d'un seul. Ce sont, en somme, un «&nbsp;pour tout&nbsp;» et un «&nbsp;il existe&nbsp;» à portée limitée.

Le cas d'un nœud sans voisin (un cul-de-sac) mérite qu'on s'y arrête&nbsp;:

- S'il n'existe pas de nœud $b$ tel que $a\xrightarrow{i}b$, alors quelle que soit la formule $\phi$, $a\Vdash\langle i\rangle\phi$ est toujours fausse. Autrement dit, $a\nVdash \langle i\rangle\phi$.

- Par contre, s'il n'existe pas de nœud $b$ tel que $a\xrightarrow{i}b$, alors $a\Vdash[i]\phi$ est toujours vraie quelle que soit la formule $\phi$. En effet pour que $a\Vdash[i]\phi$ soit vérifiée il faut que si $a\xrightarrow{i}b$, alors $b\Vdash\phi$. Mais s'il n'y a aucun $a\xrightarrow{i}b$ alors l'implication est toujours vérifiée. Dans un cul-de-sac, tout est nécessaire et rien n'est possible&nbsp;: même $[i]\bot$ y est vraie&nbsp;!

<div class="def">

La satisfaction d'une formule en un nœud $a$ d'un système de transition $\mathcal{S}$ équipé d'une valuation $\mathcal{V}$ dépend de ces trois ingrédients et on notera donc $\langle \mathcal{S},\mathcal{V},a\rangle\Vdash\phi$.

</div>


Revenons à nos dragons&nbsp;:


### Exemple des dragons aux yeux bleus


<div class="preuve">

Les mondes possibles (les nœuds du graphe) vont correspondre aux différentes combinaisons possibles de couleurs d'yeux pour les trois dragons $A$, $B$ et $C$. On a deux possibilités (yeux bleus ou non) pour chacun des trois dragons. Cela fait 8 mondes possibles. 

Les arcs entre mondes vont être étiquetés chacun par un des trois dragons et vont correspondre aux différents mondes que ce dragon pense possibles depuis le monde où il est.

![](/kripkedragons.png?width=800px)

Par exemple, dans le monde où seul $B$ a les yeux bleus (le monde 3) $A$ imagine aussi possible  le monde où $A$ et $B$ ont tous les deux les yeux bleus (le monde 5). Une flèche étiquetée par $A$ rejoint donc ces deux mondes possibles. Et bien sûr, dans le monde où $A$ et $B$ ont les yeux bleus, $A$ imagine possible le monde où seul $B$ a les yeux bleus (il y a donc une flèche de 5 vers 3). Et comme c'est vrai dans chaque cas et pour les trois dragons, cela montre que ce système de transition est **symétrique**. Il est de plus évident que chaque monde semble possible pour les dragons qui s'y trouvent. Le système est donc aussi **réflexif**.

Imaginons que l'on soit dans le monde 2. L'ensemble des mondes possibles se simplifie alors grandement.

![](/kripkedragons1.png?width=800px)

La déclaration de l'étranger n'est pas une surprise pour $B$ et $C$ qui voient bien que le pauvre $A$ a les yeux bleus et est donc sans effet pour eux. Par contre $A$ comprend que l'autre monde qu'il pensait possible, le monde béni où il n'avait pas des yeux infâmes (le monde 1) est en fait impossible.

Avant la déclaration de l'étranger, $2\Vdash\color{#00AB8E}\langle A\rangle \color{#000}\neg A$ puisqu'il y a une flèche étiquetée par <span style="color:#00AB8E">$A$</span> qui rejoint 1 (qui réalise $\neg A$). On peut traduire ça par&nbsp;: "dans le monde 2, Apophis croit possible qu'il n'ait pas les yeux bleus". De même $2\Vdash\color{#FEAE00}\langle B\rangle \color{#000}\neg B$ et $2\Vdash\color{#FF42A1}\langle C\rangle \color{#000}\neg C$, grâce cette fois aux boucles étiquetées par <span style="color:#FEAE00">$B$</span> et par <span style="color:#FF42A1">$C$</span> qui reviennent sur le monde 2, où ni $B$ ni $C$ n'ont les yeux bleus. Donc chaque dragon croit encore possible de ne pas avoir les yeux bleus. Mais Bahamut n'est sûr de rien&nbsp;: la flèche étiquetée par <span style="color:#FEAE00">$B$</span> vers le monde 5 donne aussi $2\Vdash\color{#FEAE00}\langle B\rangle \color{#000} B$ (et de même pour Caraxès, avec la flèche vers le monde 6).
<br>D'autre part, on peut écrire que $2\Vdash\color{#FF42A1}[C] \color{#000} A$ puisque les deux arcs étiquetés par <span style="color:#FF42A1">$C$</span> qui partent de 2 vont dans des mondes (2 et 6) où $A$ est réalisée. Ça peut se lire&nbsp;: "dans le monde 2, Caraxès sait qu'Apophis a les yeux bleus".<br>
On peut aussi compliquer les énoncés avec par exemple&nbsp;: $6 \Vdash \color{#FF42A1}\langle C\rangle \color{#FEAE00}\langle B\rangle \color{#000} (B\land\neg C)$ (une flèche rose part de 6 vers 2 et une flèche jaune part de 2 vers 5 où $B$ a les yeux bleus mais pas $C$).

Après la déclaration de l'étranger, le monde 1 disparaît&nbsp;!

![](/kripkedragons2.png?width=800px)

Si $B$ et $C$ sont toujours dans le doute quant à la couleur de leurs yeux, pour $A$, les jeux sont faits. En effet, on a dorénavant $2\Vdash\color{#00AB8E}[A] \color{#000} A$. Et le soir même, Apophis s'en va tout penaud.

En généralisant, dans les mondes où seul un dragon a les yeux bleus (2, 3 et 4), ce dragon le comprend au moment de la déclaration de l'étranger et se retire le soir même.

Imaginons maintenant que l'on soit dans le monde 5 où Apophis et Bahamut ont les yeux bleus.

![](/kripkedragons3.png?width=800px)

La déclaration de l'étranger ne fait pas beaucoup d'effet car ils étaient déjà tous les trois au courant qu'au moins l'un d'eux avait les yeux bleus... Par conséquent, le soir même, personne ne part. Et ça par contre, ça change pas mal de choses&nbsp;! En effet, les mondes 2 et 3 deviennent d'un coup impossibles puisqu'on a vu que les mondes où seul un des dragons a les yeux bleus voient ce dragon décamper dès le premier soir.

![](/kripkedragons4.png?width=800px)

On a maintenant&nbsp;: $5\Vdash (\color{#00AB8E}[A] \color{#000} A)\land (\color{#FEAE00}[B] \color{#000} B)$. $A$ et $B$ ont acquis la certitude d'avoir les yeux bleus et s'envolent au deuxième soir.<br>
Les deux dragons aux yeux bleus des mondes 7 ou 6 auraient fait de même.

La dernière situation possible correspond au monde 8.

![](/kripkedragons5.png?width=800px)

On reprend le raisonnement précédent. Personne ne part au premier soir, mais cette fois-ci, ça ne permet d'éliminer aucun monde possible... Et par conséquent, au deuxième soir, personne ne s'envole. Mais là, bingo&nbsp;! Ça élimine les mondes où seuls deux dragons ont les yeux piscine. Finalement, ils comprennent tous les trois qu'ils sont bannis et s'envolent au troisième soir.<br>
La situation de départ correspondait donc au monde 8.

</div>


<div class="encadre prune">
<div class="encadre-titre">Mais qu'a donc appris l'étranger&nbsp;?</div>

Dans le monde 8, chaque dragon voit deux paires d'yeux bleus. Tous savaient donc déjà qu'«&nbsp;au moins l'un de nous a les yeux bleus&nbsp;». L'étranger n'a rien dit de neuf, et pourtant sa phrase déclenche tout.

Ce qui change n'est pas ce que chacun sait, mais ce que chacun sait **de ce que savent les autres**. Avant la déclaration, le monde 8 vérifie

<p style="text-align:center;">$8\Vdash \color{#00AB8E}\langle A\rangle\color{#FEAE00}\langle B\rangle\color{#FF42A1}\langle C\rangle\color{#000}(\neg A\land\neg B\land\neg C)$</p>

Apophis juge possible le monde 7 (où il n'a pas les yeux bleus)&nbsp;; dans ce monde, Bahamut jugerait possible le monde 4&nbsp;; et dans celui-là, Caraxès jugerait possible le monde 1, où personne n'a les yeux bleus. Autrement dit&nbsp;: Apophis n'exclut pas que Bahamut n'exclue pas que Caraxès n'exclue pas qu'aucun dragon n'ait les yeux bleus&nbsp;! En supprimant le monde 1, l'étranger rend cette formule fausse.

Une information publique devient ce qu'on appelle une **connaissance commune**&nbsp;: tout le monde la sait, tout le monde sait que tout le monde la sait, et ainsi de suite indéfiniment. C'est beaucoup plus fort que «&nbsp;tout le monde le sait&nbsp;», et la notion joue un rôle central en théorie des jeux et en économie (c'est toute la différence entre un secret de Polichinelle et une annonce officielle).

L'énigme circule sous bien des déguisements (insulaires aux yeux bleus, enfants au front sale, maris trompés) et se généralise&nbsp;: avec $n$ dragons aux yeux bleus, tous partent le $n$-ième soir.

</div>

On peut remarquer en passant différentes équivalences&nbsp;:
- $a\Vdash\neg\color{#00AB8E}[A] \color{#000} \phi$ ssi $a\Vdash \color{#00AB8E}\langle A\rangle \color{#000} \neg \phi$<br>
Pour A, ne pas savoir quelque chose est équivalent à croire possible son contraire.
- $a\Vdash\color{#00AB8E}[A] \color{#000} \phi$ ssi $a\Vdash \neg\color{#00AB8E}\langle A\rangle \color{#000} \neg \phi$<br>
Pour A, savoir quelque chose est identique à ne pas croire possible le contraire de cette chose.
- $a\Vdash\neg\color{#00AB8E}[A] \color{#000} \neg\phi$ ssi $a\Vdash \color{#00AB8E}\langle A\rangle \color{#000}  \phi$<br>
Pour A, croire possible quelque chose revient à ne pas savoir le contraire de cette chose.


### Modèles et classes


<div class="def">

Soient $\phi$ une formule, $I$ un ensemble non vide, $\mathcal{S}=(N,A)$ un système de transition étiqueté par $I$, $a$ un nœud de $\mathcal{S}$ et $\mathcal{V}$ une valuation,
<ul>
<li>$\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\phi$ ssi pour tous nœuds $a'$, $\langle\mathcal{S},\mathcal{V},a'\rangle\Vdash\phi$</li>
<li>$\langle\mathcal{S},a\rangle\Vdash^{\forall \mathcal{V}}\phi$ ssi pour toutes valuations $\mathcal{V'}$, $\langle\mathcal{S},\mathcal{V'},a\rangle\Vdash\phi$</li>
<li>$\mathcal{S}\Vdash^{\forall  a,\forall \mathcal{V}}\phi$ ssi pour tous nœuds $a'$ et toutes valuations $\mathcal{V'}$, $\langle\mathcal{S},\mathcal{V'},a'\rangle\Vdash\phi$</li>
</ul>
</div>


<div class="def">

Un <b>modèle</b> de la logique modale (modèle de Kripke) est un système de transition équipé d'une valuation&nbsp;:
$$\mathcal{M}=\langle\mathcal{S},\mathcal{V}\rangle$$
Une formule $\phi$ est <b>vraie</b> (ou <b>satisfaite</b>) dans le modèle $\langle\mathcal{S},\mathcal{V}\rangle$ si elle est forcée en chacun des nœuds du système de transition&nbsp;:
$$\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\phi$$

</div>

La notion de vérité dans un modèle de Kripke est donc une notion de <b>vérité globale</b> puisqu'elle prend en compte l'ensemble des nœuds du système de transition.

Prenons l'exemple du système de transition $\mathcal{S}$ équipé de la valuation $\mathcal{V}$ ci-dessous&nbsp;:

![](/explekripke.png?width=500px)

On a bien $\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}Q\lor\neg Q$. Par contre, comme $b\Vdash Q$ alors que $a\Vdash\neg Q$, $\langle\mathcal{S},\mathcal{V}\rangle\nVdash^{\forall a}Q$ et $\langle\mathcal{S},\mathcal{V}\rangle\nVdash^{\forall a}\neg Q$.<br>
On peut donc avoir une formule $\phi\lor\psi$ satisfaite sans que ni $\phi$ ni $\psi$ ne le soient&nbsp;!


{{%notice type="info" round="true"%}}
On retrouve les modèles du calcul des propositions en se restreignant aux systèmes de transition contenant un seul nœud. Dit autrement, une formule $\phi$ de <b>profondeur modale</b> nulle est une formule du calcul des propositions.<br>
Soit $\mathcal{M}$ un modèle du calcul des propositions défini par la distribution de valeur de vérité $\delta_\mathcal{M}$ qui associe aux variables apparaissant dans $\phi$ la valeur 1 lorsqu'elles sont vraies dans $\mathcal{M}$ et 0 sinon ($\delta_\mathcal{M}(P)=1$ ssi $\mathcal{M}\models P$). La formule $\phi$ est vraie dans $\mathcal{M}$ (noté $\mathcal{M}\models\phi$) si et seulement si cette même formule $\phi$ est vraie dans le système de transition $\mathcal{S}\_\mathcal{M}=(N,A)$, où $N=\set{a}$ et $A=\emptyset$, équipé de la valuation $\mathcal{V}\_{\delta_\mathcal{M}}$ définie par&nbsp;: $\mathcal{V}\_{\delta_\mathcal{M}}(P)=\set{a}$ si et seulement si $\delta_\mathcal{M}(P)=1$ et $\mathcal{V}\_{\delta_\mathcal{M}}(P)=\emptyset$ si et seulement si $\delta_\mathcal{M}(P)=0$.<br>
Cela s'écrit&nbsp;: $\mathcal{M}\models\phi$ ssi $\langle\mathcal{S},\mathcal{V}\_{\delta_\mathcal{M}}\rangle\Vdash^{\forall a}\phi$
{{%/notice%}}

<div class="def">

Soit $\phi$ une formule de la logique modale et $\mathcal{S}$ un système de transition.<br>
La formule $\phi$ est <b>valide</b> dans $\mathcal{S}$ si&nbsp;:
$$\mathcal{S}\Vdash^{\forall a,\forall \mathcal{V}} \phi$$

</div>

**La notion de validité est globale**, elle aussi. Et à nouveau, une formule $\phi\lor\psi$ peut être valide dans un système de transition sans que ni $\phi$, ni $\psi$ ne le soit.


<div class="theo">

Soient $\phi$ une formule de profondeur modale nulle et $\mathcal{S}=(N,A)$ un système de transition.<br>
Les affirmations suivantes sont équivalentes&nbsp;:

<ol>
<li>$\mathcal{S}\Vdash^{\forall a,\forall\mathcal{V}} \phi$</li>
<li>Il existe $a\in N$ tel que $\langle\mathcal{S},a\rangle\Vdash^{\forall \mathcal{V}}\phi$</li>
<li>Pour $\mathcal{T}=(\set{a},\emptyset)$, $\langle\mathcal{T},a\rangle\Vdash^{\forall \mathcal{V}}\phi$</li>
<li>$\phi$ est une tautologie du calcul des propositions</li>
</ol>

</div>


<div class="preuve">

On va montrer la suite des implications suivante $(1)\rightarrow(2)$, $(2)\rightarrow(3)$, $(3)\rightarrow(4)$ et $(4)\rightarrow(1)$. La circularité nous permettra alors d'obtenir toutes les autres implications. Par exemple, $(2)\rightarrow(1)$ découle de $(2)\rightarrow(3)\rightarrow(4)\rightarrow(1)$.
<ul>
<li>$(1)\rightarrow(2)$ et $(2)\rightarrow(3)$ sont immédiates.</li>
<li>Pour montrer $(3)\rightarrow(4)$, nous allons montrer la contraposée $\neg(4)\rightarrow\neg(3)$.<br>
Supposons que $\phi$ ne soit pas une tautologie du calcul des propositions. Il existe donc un modèle $\mathcal{M}$ pour lequel la formule est fausse. Équipons alors le système de transition $\mathcal{T}=(\set{a},\emptyset)$ de la valuation où pour chacune des variables propositionnelles $P$ apparaissant dans $\phi$, $a\in\mathcal{V}(P)$ si et seulement si $\mathcal{M}\models P$.<br>
Par définition de la satisfaction locale d'une formule $\langle \mathcal{T},\mathcal{V},a\rangle\Vdash \phi$ ssi $\mathcal{M}\models\phi$.<br>
Comme notre hypothèse est que $\mathcal{M}\not\models\phi$, on en déduit que $\langle \mathcal{T},\mathcal{V},a\rangle\nVdash \phi$. On a donc trouvé une valuation qui contredit $(3)$.
</li>
<li>Pour montrer $(4)\rightarrow(1)$, on passe également par la contraposée $\neg(1)\rightarrow\neg(4)$.<br>
On suppose que $\mathcal{S}\Vdash^{\forall a,\forall \mathcal{V}}\phi$ n'est pas satisfaite, et donc qu'il existe une valuation $\mathcal{V}$ et un nœud $a$ tels que $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\phi$. On définit le modèle du calcul des propositions $\mathcal{M}$ par $\mathcal{M}\models P$ si et seulement si $a\in\mathcal{V}(P)$, et ce pour chaque variable propositionnelle apparaissant dans $\phi$. On a donc $\mathcal{M}\not\models\phi$. Par conséquent, $\phi$ n'est pas une tautologie.
</li>
</ul>

</div>


<div class="def">

Soit $\phi$ une formule et $\mathscr{C}$ une <b>classe</b> de systèmes de transition.<br>
$\mathscr{C}\Vdash\phi$ ssi pour tout $\mathcal{S}\in\mathscr{C}, \mathcal{S}\Vdash^{\forall a,\forall\mathcal{V}}\phi$ ($\phi$ est valide dans tout système de la classe $\mathscr{C}$).
</div>


<div class="theo">

Soit $\mathscr{C}$ la classe de tous les systèmes de transition.<br>
$\mathscr{C}\Vdash\Box(P\rightarrow Q)\rightarrow(\Box P\rightarrow \Box Q)$<br>

</div>


<div class="preuve">

Soient $\mathcal{S}$ un système de transition, $a$ un nœud de $\mathcal{S}$ et $\mathcal{V}$ une valuation quelconque.<br>
Si $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box(P\rightarrow Q)$, alors pour tout $b$ tel que $a\longrightarrow b$, $\langle \mathcal{S},\mathcal{V}, b\rangle\Vdash P\rightarrow Q$.<br>
Pour montrer $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box P\rightarrow \Box Q$, il suffit de supposer $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box P$ et de montrer $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box Q$.<br>
Or, si $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box P$, alors $\langle \mathcal{S},\mathcal{V}, b\rangle\Vdash P$ pour tout $b$ tel que $a\longrightarrow b$. Et comme par hypothèse $\langle \mathcal{S},\mathcal{V}, b\rangle\Vdash P\rightarrow Q$, on en déduit $\langle \mathcal{S},\mathcal{V}, b\rangle\Vdash Q$.<br>
Et comme c'est vrai pour tout $b$ successeur de $a$, on en déduit $\langle \mathcal{S},\mathcal{V}, a\rangle\Vdash\Box Q$.

</div>

Voici maintenant le phénomène le plus remarquable de la logique modale&nbsp;: certaines formules «&nbsp;voient&nbsp;» la **forme du graphe**. Peu importe la valuation, peu importe ce que racontent les variables&nbsp;: telle formule est valide exactement quand les flèches sont disposées de telle manière. On a déjà croisé une première propriété dans l'histoire des dragons (chaque monde y est accessible depuis lui-même). Passons-les en revue.

<div id="refl" class="ancre"></div>

<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>réflexif</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Box\phi\rightarrow\phi)$</li>
</ol>
</div>

![](/exrefl.png?width=500px)


<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Si un nœud $a$ quelconque, pour une valuation quelconque, vérifie $a\Vdash\Box \phi$, alors par définition, pour tout $b$ tel que $a\longrightarrow b$, $b\Vdash\phi$. Puisque $\mathcal{S}$ est réflexif, $a$ est lui-même un de ces $b$ et donc $a\Vdash\phi$.
</li>
<li>$(2)\Rightarrow(1)$<br>
Supposons que $\mathcal{S}$ ne soit pas réflexif. Il s'ensuit qu'il existe un nœud $a$ tel que $a\,\,\not\!\!\longrightarrow a$. Soit $\phi=P$ une formule de hauteur nulle et $\mathcal{V}$ une valuation telle que $b\in\mathcal{V}(P)$ si et seulement si $a\longrightarrow b$. Par définition de $\mathcal{V}$, on a à la fois $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box P$ et $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash P$, donc $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash (\Box P\rightarrow P)$. Cela prouve ainsi que $\mathcal{S}\nVdash ^{\forall a,\forall\mathcal{V}}(\Box P\rightarrow P)$, ce qui contredit l'hypothèse.
</li>
</ul>

</div>


<div class="def">

On note $\mathscr{C}_{ref.}$ la classe de tous les systèmes de transition réflexifs.
</div>


<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>famélique</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\phi\rightarrow\Box\phi)$</li>
</ol>
</div>

![](/exfame.png?width=400px)


<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Un système de transition $\mathcal{S}$ muni de la valuation $\mathcal{V}$ satisfait la formule $\phi\rightarrow\Box\phi$ au nœud $a$ si, $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\phi$ entraîne $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\phi$. Autrement dit, dès qu'une formule est satisfaite en un nœud, elle doit être satisfaite en chacun des successeurs de ce nœud.<br>
Si le seul successeur possible d'un nœud est lui-même (système famélique), l'implication tient toujours. 
</li>
<li>$(2)\Rightarrow(1)$<br>
Dans le cas où il existe un nœud $a$ possédant un successeur $b$ différent de lui-même, il suffit de considérer la formule $\phi=P$ et la valuation $\mathcal{V}$ qui vérifie $a\in\mathcal{V}(P)$ et $b\not\in\mathcal{V}(P)$ pour obtenir&nbsp;:<br>
<ul>
<li>$\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\phi$</li>
<li>$\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\Box\phi$</li>
<li>$\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\phi\rightarrow\Box\phi$</li>
</ul>
</li>
</ul>

</div>


<div id="trans" class="ancre"></div>

<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>transitif</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Box\phi\rightarrow \Box\Box\phi )$</li>
</ol>
</div>

![](/extrans.png?width=700px)

<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Soient $\mathcal{S}$ un système de transition transitif, $\mathcal{V}$ une valuation et $a$ un nœud.<br>
Si $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\phi$ alors pour tout nœud $b$ tel que $a\longrightarrow b$, $\langle\mathcal{S},\mathcal{V},b\rangle\Vdash\phi$.<br>
Pour montrer $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\Box\phi$, il suffit de montrer que pour tout $c$ tel qu'il existe $b$ vérifiant $a\longrightarrow b$ et $b\longrightarrow c$, on a $\langle\mathcal{S},\mathcal{V},c\rangle\Vdash\phi$.<br>
Or puisque $\mathcal{S}$ est transitif, $a\longrightarrow b$ et $b\longrightarrow c$ impliquent $a\longrightarrow c$. D'où $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\phi$ entraîne $\langle\mathcal{S},\mathcal{V},c\rangle\Vdash\phi$.
</li>
<li>$(2)\Rightarrow(1)$<br>
Soit un système de transition non transitif $\mathcal{S}$ et soient $a$, $b$ et $c$ trois nœuds de $\mathcal{S}$ tels que $a\longrightarrow b$, $b\longrightarrow c$ et $a\not\!\!\longrightarrow c$. Soit $\mathcal{V}$ une valuation qui vérifie $d\in\mathcal{V}(P)$ si et seulement si $a\rightarrow d$.<br>
Pour $\phi=P$, nous obtenons donc à la fois $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\phi$ et $\langle\mathcal{S},\mathcal{V},c\rangle\nVdash\phi$ ce qui montre que $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\Box\Box\phi$.
</li>
</ul>

</div>


<div class="def">

On note $\mathscr{C}_{tr.}$ la classe de tous les systèmes de transition transitifs.
</div>

<div id="syme" class="ancre"></div>

<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>symétrique</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\phi\rightarrow \Box\Diamond\phi)$
</ol>

</div>


On peut traduire $\Box\Diamond\phi$ par "pour tout successeur possible, $\phi$ est vrai dans au moins un successeur".


![](/exsyme.png?width=500px)

<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Soient $\mathcal{S}$ un système de transition symétrique, $\mathcal{V}$ une valuation et $a$ un nœud.<br>
On suppose $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash \phi$. Pour tout nœud $a$, soit $a$ n'a pas de successeur et la formule $\phi\rightarrow \Box\Diamond\phi$ est trivialement vérifiée (toute formule commençant par $\Box$ est vraie en un nœud sans successeur), soit $a$ possède un ou plusieurs successeurs et chacun d'entre eux possède alors $a$ comme successeur par symétrie du graphe. Tous ces nœuds ont    donc au moins un successeur, $a$, où $\phi$ est vraie. Par conséquent, tous les successeurs de $a$ forcent $\Diamond \phi$. Et finalement, on a bien $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash \Box\Diamond\phi$.
</li>
<li>$(2)\Rightarrow(1)$<br>
S'il existe deux nœuds $a$ et $b$ tels que $a\longrightarrow b$ mais $b\,\,\not\!\!\longrightarrow a$, il suffit de considérer une valuation telle que $a\Vdash P$ et $c\Vdash\neg P$ pour tout nœud $c$ tel que $b\longrightarrow c$ pour obtenir $a\nVdash P \rightarrow\Box\Diamond P$.
</li>
</ul>

</div>


<div class="def">

On note $\mathscr{C}_{sym.}$ la classe de tous les systèmes de transition symétriques.
</div>


<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>dense</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Box\Box\phi\rightarrow \Box\phi)$
</ol>

</div>

![](/exdense.png?width=700px)

<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Soient $\mathcal{S}$ un système de transition dense, $\mathcal{V}$ une valuation et $a$ un nœud.<br>
Supposons que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\Box\phi$ est vérifié et montrons que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\phi$ l'est également.<br>
Soit $c$ un nœud vérifiant $a\longrightarrow c$. $\mathcal{S}$ étant dense, il existe $b$ tel que $a\longrightarrow b$ et $b\longrightarrow c$. Par conséquent, l'hypothèse $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\Box\phi$ entraîne aussitôt $\langle\mathcal{S},\mathcal{V},c\rangle\Vdash \phi$.
</li>
<li>$(2)\Rightarrow(1)$<br>
Soit un système de transition non dense $\mathcal{S}$ qui vérifie $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Box\Box\phi\rightarrow \Box\phi)$ pour n'importe quelle formule $\phi$.<br>
Si $\mathcal{S}$ n'est pas dense, il existe deux nœuds $a$ et $c$ tels que $a\longrightarrow c$ sans qu'aucun $b$ ne vérifie à la fois $a\longrightarrow b$ et $b\longrightarrow c$.<br>
Considérons la valuation $\mathcal{V}$ définie par $d\in\mathcal{V}(P)$ si et seulement si $d\neq c$.<br>
Comme $c$ est un successeur de $a$ et que $\langle\mathcal{S},\mathcal{V},c\rangle\nVdash P$, on a $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\Box P$. Et pourtant $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Box\Box P$&nbsp;: en deux pas depuis $a$, on ne peut jamais arriver sur $c$ (c'est justement le défaut de densité), donc on arrive toujours sur un nœud où $P$ est vraie. D'où $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\Box\Box P \rightarrow \Box P$.
</li>
</ul>

</div>

<div id="nbd" class="ancre"></div>

<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>non borné à droite</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Box\phi\rightarrow \Diamond\phi)$
</ol>

</div>

![](/exnbd.png?width=850px)

<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Soient $\mathcal{S}$ un système de transition non borné à droite, $\mathcal{V}$ une valuation et $a$ un nœud.<br>
On suppose que $a\Vdash\Box P$. La seule possibilité pour que $a\nVdash\Diamond P$, c'est que le nœud $a$ n'ait aucun successeur or l'hypothèse que $\mathcal{S}$ est non borné à droite nous l'interdit, donc nécessairement $a\Vdash\Diamond P$.
</li>
<li>$(2)\Rightarrow(1)$<br>
Si un système de transition n'est pas non borné à droite, il existe un nœud $a$ sans successeur. Quelle que soit la valuation, on a alors $a\Vdash \Box P$ (il n'y a aucun successeur à vérifier) mais aussi $a\nVdash \Diamond P$ (il n'y a aucun successeur où $P$ pourrait être vraie).
</li>
</ul>

</div>


<div class="def">

On note $\mathscr{C}_{n.b.d.}$ la classe de tous les systèmes de transition non bornés à droite.
</div>

<div id="eucl" class="ancre"></div>

<div class="theo">

Pour tout système de transition $\mathcal{S}$, les affirmations suivantes sont équivalentes&nbsp;:
<ol>
<li>$\mathcal{S}$ est <b>euclidien</b></li>
<li>Pour toute formule $\phi$, $\mathcal{S}\Vdash^{\forall a, \forall \mathcal{V}}(\Diamond\phi\rightarrow \Box\Diamond\phi)$
</ol>

</div>

![](/exeucl.png?width=700px)


<div class="preuve">

<ul>
<li>$(1)\Rightarrow(2)$<br>
Soient $\mathcal{S}$ un système de transition euclidien, $\mathcal{V}$ une valuation et $a$ un nœud.<br>
S'il existe un nœud $c$ tel que $a\longrightarrow c$ et $\langle\mathcal{S},\mathcal{V},c\rangle\Vdash \phi$, alors pour tout nœud $b$ tel que $a\longrightarrow b$, il existe un nœud $d$, tel que $b\longrightarrow d$ et $\langle\mathcal{S},\mathcal{V},d\rangle\Vdash \phi$. En effet, il suffit de prendre $d=c$ puisque le caractère euclidien du graphe assure que de  $a\longrightarrow b$ et $a\longrightarrow c$, nous obtenons $b\longrightarrow c$.
</li>
<li>$(2)\Rightarrow(1)$<br>
Si un système de transition n'est pas euclidien, il existe des nœuds $a$, $b$, $c$, avec $a\longrightarrow b$ et $a\longrightarrow c$, mais sans arc $b\longrightarrow c$, alors il suffit de considérer une valuation telle que $\langle\mathcal{S},\mathcal{V},c\rangle\Vdash P$ et pour tout nœud $d\neq c$, $\langle\mathcal{S},\mathcal{V},d\rangle\nVdash P$. On obtient ainsi $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash \Diamond P$, mais comme il n'y a pas d'arc de $b$ vers $c$, $\langle\mathcal{S},\mathcal{V},b\rangle\nVdash \Diamond P$ et par conséquent $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash \Box\Diamond P$.
</li>
</ul>

</div>


Récapitulons ces correspondances entre la géométrie du graphe et les formules qu'il valide&nbsp;:

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Le système est…</th><th>c'est-à-dire…</th><th>si et seulement s'il valide</th></tr>
<tr><td class="g">réflexif</td><td class="g">chaque nœud se voit lui-même</td><td>$\Box\phi\rightarrow\phi$</td></tr>
<tr><td class="g">famélique</td><td class="g">un nœud ne voit, au plus, que lui-même</td><td>$\phi\rightarrow\Box\phi$</td></tr>
<tr><td class="g">transitif</td><td class="g">tout ce qu'on atteint en deux pas s'atteint en un seul</td><td>$\Box\phi\rightarrow\Box\Box\phi$</td></tr>
<tr><td class="g">symétrique</td><td class="g">toute flèche a sa flèche retour</td><td>$\phi\rightarrow\Box\Diamond\phi$</td></tr>
<tr><td class="g">dense</td><td class="g">tout pas peut se décomposer en deux</td><td>$\Box\Box\phi\rightarrow\Box\phi$</td></tr>
<tr><td class="g">non borné à droite</td><td class="g">aucun cul-de-sac</td><td>$\Box\phi\rightarrow\Diamond\phi$</td></tr>
<tr><td class="g">euclidien</td><td class="g">deux voisins d'un même nœud se voient l'un l'autre</td><td>$\Diamond\phi\rightarrow\Box\Diamond\phi$</td></tr>
</table>
</div>

Ces formules deviendront, au chapitre suivant, les **axiomes** des principaux systèmes de logique modale.

Soit $\Gamma$ un ensemble de formules. On écrit&nbsp;:
- $\mathcal{S}\Vdash^{\forall a, \forall\mathcal{V}} \Gamma$ si et seulement si pour toute formule $\phi\in\Gamma$, $\mathcal{S}\Vdash^{\forall a, \forall\mathcal{V}} \phi$<br>
$\mathcal{S}$ est un système de transition tel qu'en tout nœud et quelle que soit la valuation considérée, il satisfait tout ce que "raconte" $\Gamma$. C'est donc par sa seule forme que ce système de transition vérifie l'ensemble des formules de $\Gamma$.

- $\mathscr{C} \Vdash\Gamma$ si et seulement si pour toute formule $\phi\in\Gamma$, $\mathscr{C}\Vdash \phi$<br>
Même affirmation que la précédente mais pour une classe de systèmes de transition tout entière plutôt que pour un seul représentant. En ce sens, la plus grande classe $\mathscr{C}$ qui vérifie $\mathscr{C}\Vdash\Gamma$ octroie une sorte de caractérisation par la seule forme des graphes de ce que raconte $\Gamma$.


### Conséquences sémantiques


<div class="def">

Soient $\Gamma$ un ensemble de formules et $\mathscr{C}$ une classe de systèmes de transition.<br>
$\phi$ est une <b>conséquence sémantique globale</b> de $\Gamma$ (noté $\Gamma\models^{\forall a}_\mathscr{C}\phi$) si et seulement si pour tout système de transition $\mathcal{S}\in \mathscr{C}$, et toute valuation $\mathcal{V}$, si $\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\Gamma$ alors $\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\phi$

</div>

Plus simplement, une formule est conséquence d'un ensemble d'hypothèses si chaque fois que ces hypothèses sont vraies dans un modèle de la classe considérée, alors cette formule est également vraie dans ce modèle.


<div class="def">

Soient $\Gamma$ un ensemble de formules et $\mathscr{C}$ une classe de systèmes de transition.<br>
$\phi$ est une <b>conséquence sémantique locale</b> de $\Gamma$ (noté $\Gamma\models_\mathscr{C}\phi$) si et seulement si pour tout système de transition $\mathcal{S}\in \mathscr{C}$, toute valuation $\mathcal{V}$, et tout nœud $a\in N$, si $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Gamma$ alors $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\phi$

</div>

La conséquence sémantique locale est plus forte que la globale au sens où si $\Gamma\models_\mathscr{C}\phi$ alors $\Gamma\models^{\forall a}_\mathscr{C}\phi$. L'inverse est généralement faux comme le montre l'exemple suivant&nbsp;:

<div class="preuve">

Soient $\mathscr{C}$ la classe de tous les systèmes de transition, $\Gamma=\set{P}$ et $\phi=\Box P$.<br>
On a  $\Gamma\models^{\forall a}_\mathscr{C}\phi$.<br>
En effet, considérons un modèle quelconque $\langle\mathcal{S},\mathcal{V}\rangle$ qui vérifie $\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\Gamma$, ce qui revient ici à affirmer que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash P$ est vraie pour tout nœud $a$. En particulier, pour tout nœud $b$ tel que $a\longrightarrow b$, la relation $\langle\mathcal{S},\mathcal{V},b\rangle\Vdash P$ est vérifiée, ce qui signifie que tout nœud $a$ vérifie $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash \Box P$.

Par contre, il est facile de trouver un modèle où $\Gamma\models_\mathscr{C}\phi$ est faux&nbsp;:
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/preuvecsqsem.png">
</div>
Dans ce modèle, on a $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash P$ et $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash \Box P$

</div>

{{%notice type="tip" round="true"%}}
Plus prosaïquement, la conséquence locale dit que partout où il y a $\Gamma$, il y a $\phi$, alors que la conséquence globale dit que s'il y a $\Gamma$ partout alors il y a $\phi$ partout.
{{%/notice%}}


Il existe un lien entre les deux conséquences sémantiques&nbsp;:

<div class="theo">

$\Gamma\models^{\forall a}\_\mathscr{C}\phi$ si et seulement si $\set{\Box^n\psi|n\in\mathbb{N},\psi\in\Gamma}\models\_\mathscr{C}\phi$ (où $\Box^n\psi = \underbrace{\Box\Box\ldots\Box}_{n}\psi$ si $n>0$ et $\psi$ si $n =0$)

</div>


$\Box^n$ permet en quelque sorte de généraliser la vérité d'un nœud puisque dire qu'on a $\Box^n\psi$ en $a$ implique que $\psi$ est vraie en tout nœud atteignable depuis $a$.

<div class="preuve">

<ul>
<li>$\Leftarrow$<br>
Si on a $\Gamma$ en tout nœud, alors en un nœud $a$ quelconque, on a nécessairement $\Box^n\psi$ vraie pour tout $n$ et tout $\psi$ dans $\Gamma$. Or par hypothèse, cela implique que $\phi$ est vraie en ce nœud. Et comme le raisonnement ne dépend pas du nœud $a$, cela montre que $\phi$ est vraie en tout nœud.
</li>
<li>$\Rightarrow$<br>
Démontrons la contraposée&nbsp;: si $\set{\Box^n\psi|n\in\mathbb{N},\psi\in\Gamma}\not\models_\mathscr{C}\phi$ alors $\Gamma\not\models^{\forall a}_\mathscr{C}\phi$.<br>
Soient $\mathcal{S}=(N,A)$ un système de transition, $\mathcal{V}$ une valuation et $a\in N$ un nœud, tels que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\set{\Box^n\psi|n\in\mathbb{N},\psi\in\Gamma}$ alors que $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\phi$.<br>
Fabriquons le système de transition $\mathcal{T}=(N',A')$ qui correspond à la restriction de $\mathcal{S}$ à l'ensemble des nœuds accessibles depuis $a$ en un nombre quelconque de pas ($a$ compris) et munissons-le d'une valuation $\mathcal{V}'$ identique à $\mathcal{V}$ pour ces nœuds.<br>
Par construction, dans le modèle $\langle\mathcal{T},\mathcal{V}'\rangle$ ainsi formé, $\psi$ est vraie en tout nœud&nbsp;: $\langle\mathcal{T},\mathcal{V}'\rangle\Vdash^{\forall a}\psi$. Cela entraîne que $\langle\mathcal{T},\mathcal{V}'\rangle\Vdash^{\forall a}\Gamma$, et pourtant $\langle\mathcal{T},\mathcal{V}',a\rangle\nVdash\phi$ par hypothèse, ce qui implique $\Gamma\not\models^{\forall a}_\mathscr{C}\phi$.
</ul>

</div>


<p>Dans cette preuve, il faut s'assurer que le système restreint $\mathcal{T}$ appartient encore à la classe $\mathscr{C}$. C'est évident pour la classe de tous les systèmes de transition, et c'est encore vrai pour les classes définies par les propriétés précédentes (réflexivité, symétrie, transitivité…), qui survivent toutes à cette restriction.</p>
<p>Notons enfin que, pour deux formules, $\phi\models^{\forall a}_\mathscr{C}\psi$ signifie que tout modèle de la classe où $\phi$ est vraie est aussi un modèle où $\psi$ est vraie. Comme en calcul des propositions, la conséquence est une inclusion entre ensembles de modèles.</p>


### Théories, équivalence et bisimulation


<div class="def">

On appelle <b>théorie du modèle</b> $\langle\mathcal{S},\mathcal{V}\rangle$ l'ensemble de toutes les formules qui sont vraies dans ce modèle&nbsp;:
$$Th_\mathcal{M}=\set{\phi|\langle\mathcal{S},\mathcal{V}\rangle\Vdash^{\forall a}\phi}$$

</div>

La théorie d'un modèle est composée de toutes les formules décrivant ce modèle.<br>
Deux modèles sont distinguables par la logique modale s'ils n'ont pas la même théorie.


<div class="def">

On appelle <b>théorie locale d'un modèle</b> $\langle\mathcal{S},\mathcal{V}\rangle$ au nœud $a$ l'ensemble de toutes les formules qui sont vraies en ce nœud&nbsp;:
$$Th_{(\mathcal{M},a)}=\set{\phi|\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\phi}$$

</div>


<div class="def">

Soient $\mathcal{M}$ et $\mathcal{N}$ deux modèles de la logique modale.
<ul>
<li>$\mathcal{M}$ et $\mathcal{N}$ sont <b>équivalents</b> s'ils ont la même théorie&nbsp;:<br>
$\mathcal{M} \equiv \mathcal{N}$ si et seulement si $Th_\mathcal{M}=Th_\mathcal{N}$</li>
<br>
<li>$\mathcal{M}$ et $\mathcal{N}$ sont <b>localement équivalents</b> s'ils partagent la même théorie locale&nbsp;:<br>
$(\mathcal{M},a) \equiv (\mathcal{N},b)$ si et seulement si $Th_{(\mathcal{M},a)}=Th_{(\mathcal{N},b)}$</li>
</div>


<div class="preuve">

Les deux modèles suivants sont équivalents ($\mathcal{M} \equiv \mathcal{N}$).
<div style="position:relative;width:800px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/exequivkr.png">
</div>
Et par ailleurs, $(\mathcal{M},a) \equiv (\mathcal{N},a')$, $(\mathcal{M},b) \equiv (\mathcal{N},b')$, $(\mathcal{M},b) \equiv (\mathcal{N},c')$.<br>
La <b>bisimulation</b> va nous permettre de reconnaître que ces modèles sont localement équivalents.

</div>


Deux modèles correspondent en quelque sorte à deux univers parallèles. Mais il se peut que depuis un des mondes du premier univers, tout paraisse exactement identique à ce que l'on perçoit depuis un monde du deuxième univers. Bien que les univers soient différents, ses "habitants" ne peuvent pas les différencier. On dit qu'ils sont <b>indiscernables</b> ou <b>bisimilaires</b>. Deux mondes sont indiscernables s'il n'existe pas de formule vraie dans l'un et fausse dans l'autre.

La notion vient d'ailleurs autant de l'informatique que de la logique&nbsp;: dans les années 1980, Robin Milner et David Park cherchaient à dire quand deux programmes ou deux machines, vus de l'extérieur, se comportent de la même façon. Un système de transition, c'est aussi un automate.

Un jeu à deux joueurs à information parfaite, le jeu de bisimulation, est défini de telle sorte que le joueur appelé <b>Duplicateur</b> possède une stratégie gagnante si et seulement si les deux mondes (associés à leurs modèles respectifs) qui interviennent dans le jeu sont indiscernables.

Plus besoin de passer en revue toutes les formules possibles pour déterminer si deux mondes sont ou non discernables...


<div class="def">

Soient $\mathcal{M}=\langle\mathcal{S}=(N,A) , \mathcal{V}\rangle$ et  $\mathcal{N}=\langle\mathcal{T}=(M,B),\mathcal{W}\rangle$ deux modèles de la logique modale et soient $a\in N$ et $b\in M$ deux nœuds.

Le jeu de bisimulation $\mathbb{Bis}((\mathcal{M},a),(\mathcal{N},b))$ est défini comme suit&nbsp;:
<ul>
<li>il comprend deux joueurs appelés <b>Duplicateur</b> et <b>Corrupteur</b>.<br>
Le Duplicateur ($\text{D}_{up}$) cherche à montrer que les deux modèles sont localement bisimilaires, alors que le Corrupteur ($\text{C}_{or}$) au contraire veut montrer qu'ils ne le sont pas.<br>
Un coup, pour chacun des joueurs, consiste à choisir un nœud dans un système de transition. Les nœuds de départ étant $a$ dans $\mathcal{S}$ et $b$ dans $\mathcal{T}$.
</li>
<br>
<li>
À chaque tour, pour une position $a'$ dans $\mathcal{M}$ et une position $b'$ dans $\mathcal{N}$, $\text{C}_{or}$ choisit d'abord de jouer dans $\mathcal{S}$ ou dans $\mathcal{T}$ puis il choisit un arc permettant d'arriver à un successeur du nœud $a'$ ou $b'$ et $\text{D}_{up}$ répond en choisissant un successeur dans l'autre modèle tel que les nœuds choisis dans chaque modèle satisfont les mêmes variables propositionnelles.
</li>
<br>
<li>Fin de la partie&nbsp;:
<ul>
<li>S'il existe une variable $P$ telle que la position initiale vérifie $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash P$ si et seulement si $\langle\mathcal{T},\mathcal{W},b\rangle\nVdash P$, alors $\text{C}_{or}$ l'emporte.</li>
<li>Si un joueur ne peut plus avancer alors il perd la partie.</li>
<li>Si la partie est infinie, $\text{D}_{up}$ l'emporte.</li>
</ul>
</li>
</ul>
</div>


<div class="preuve">

Exemple 1&nbsp;:
<div style="position:relative;width:1000px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/bisimu1.png">
</div>
Le Corrupteur possède une stratégie gagnante&nbsp;:
<ul>
<li>$\text{C}_{or}$ choisit de jouer dans $\mathcal{N}$ puis va en $b'$.</li>
<li>$\text{D}_{up}$ n'a pas d'autre choix que d'aller en $b$.</li>
<li>$\text{C}_{or}$ choisit à nouveau de jouer dans $\mathcal{N}$ et va en $c'$.</li>
<li>$\text{D}_{up}$ perd car il ne peut plus avancer.</li>
</ul>

</div>


<div class="preuve">

Exemple 2&nbsp;:
<div style="position:relative;width:800px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/exequivkr.png">
</div>
Le Duplicateur possède une stratégie gagnante&nbsp;:
<ul>
<li>Si $\text{C}_{or}$ choisit d'aller en $b'$ ou en $c'$, $\text{D}_{up}$ va en $b$ (il n'a pas trop le choix en même temps...).</li>
<li>Si $\text{C}_{or}$ choisit d'aller en $b$, $\text{D}_{up}$ va en $b'$ ou en $c'$ (c'est sans importance).</li>
</ul>
Le Corrupteur ne peut pas jouer son deuxième coup et perd la partie.

</div>


<div class="preuve">

Exemple 3&nbsp;:
<div style="position:relative;width:1200px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/bisimu2.png">
</div>
Le modèle $\mathcal{N}$ est défini par&nbsp;:
<ul>
<li>l'ensemble des nœuds est $\mathbb{N}$,</li>
<li>de tout nœud $n\in\mathbb{N}$ partent deux arcs&nbsp;: $n\longrightarrow n+1$ et $n\longrightarrow n+2$</li>
<li>$2n\Vdash P$ et $2n+1\nVdash P$</li>
</ul>
Le Duplicateur possède une stratégie gagnante qui consiste à tout moment de la partie&nbsp;:
<ul>
<li>si $\text{C}_{or}$ joue dans $\mathcal{N}$ et va sur $n$, à aller sur $a$ si $n$ est pair et sur $b$ sinon,</li>
<li>si $\text{C}_{or}$ joue dans $\mathcal{M}$ et va sur $a$, à aller sur $n+2$ si $n$ est pair et sur $n+1$ sinon,</li>
<li>si $\text{C}_{or}$ joue dans $\mathcal{M}$ et va sur $b$, à aller sur $n+1$ si $n$ est pair et sur $n+2$ sinon,</li>
</ul>
De la sorte, le jeu continue indéfiniment.

</div>


<div class="theo">

<b>Théorème de Hennessy-Milner</b>&nbsp;:
<ul>
<li>Si $\text{D}_{up}$ a une stratégie gagnante dans $\mathbb{Bis}((\mathcal{M},a),(\mathcal{N},b))$, alors $(\mathcal{M},a)\equiv(\mathcal{N},b)$.</li>
<li>La réciproque est vraie dès que, dans les deux modèles, chaque nœud n'a qu'un nombre fini de successeurs (c'est le cas en particulier de tous les modèles finis).</li>
</ul>

</div>

Le premier point se comprend bien&nbsp;: une formule ne peut explorer un modèle qu'en suivant des flèches et en consultant des variables, exactement comme le Corrupteur. Si le Duplicateur sait toujours répondre, aucune formule ne fera la différence. Pour la réciproque, l'hypothèse de finitude est nécessaire&nbsp;: une formule est un objet fini, et avec une infinité de successeurs, le Corrupteur peut disposer de coups qu'aucune formule ne sait décrire.

<nav class="suite-nav" aria-label="Chapitre précédent et suivant">
<a href="../../propositions/preuve/" class="precedent"><span>← Précédent</span><b>Calcul des propositions</b></a>
<a href="../systemes/" class="suivant"><span>Suite →</span><b>Systèmes logiques</b></a>
</nav>
