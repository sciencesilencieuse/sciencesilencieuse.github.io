+++
title = "Notions fondamentales"
date = 2021-03-06T14:20:50+01:00
weight = 1
chapter = false
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
#axiom
{
    background-color:#E5F3E0;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#gros
{
    overflow-x: auto;
    margin-top:-0.5em;
    margin-bottom:-0.5em;
}
</style>


<h1 style="overflow-x:auto;">Notions fondamentales en mécanique quantique</h1>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img style="border-radius:10px;" src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F039e8c19-4b94-46c8-9204-5c31902ef50e_1746x956.png" style="box-shadow:none;background:none;">
</div>

Le cinquième Conseil international de Solvay, en 1927, avait pour thème «&nbsp;Électrons et Photons&nbsp;» et porta principalement sur la mécanique quantique. 17 des 29 personnalités présentes à ce congrès étaient ou allaient devenir prix Nobel...

C'est à cette occasion qu'eurent lieu les échanges entre les représentants de l'«&nbsp;école de Copenhague&nbsp;» (Bohr, Heisenberg, Ehrenfest, etc.), partisans d'une mécanique quantique probabiliste, et les adeptes d'une approche déterministe (Einstein, Schrödinger, de Broglie notamment). Ce fut le début d'une longue controverse d'une vingtaine d'années entre les deux principaux protagonistes, Bohr et Einstein.

Aujourd’hui, l’interprétation de Copenhague est le cadre de référence le plus couramment enseigné, même si d’autres lectures (décohérence, réaliste, informationnelle…) gagnent du terrain.<br>
Les lignes qui suivent en résument brièvement les axiomes et en illustrent quelques conséquences fondamentales, avec un prisme *information quantique*.

> Source&nbsp;: Knee, G. C. « Isolation of the Conceptual Ingredients of Quantum Theory by Toy Theory Comparison », mémoire de Master of Science, Imperial College London, soutenu le 20 septembre 2010 <a href="https://www.imperial.ac.uk/media/imperial-college/research-centres-and-groups/theoretical-physics/msc/dissertations/2010/George-Knee-Dissertation.pdf" target="_blank">🌐</a>

## Un jeu d'axiomes

L'interprétation de la mécanique correspondant à l'**école de Copenhague**, repose sur un jeu d'axiomes[^1]&nbsp;:

<div id="axiom">
<ul><li>Axiome 1&nbsp;: <b>État quantique</b><br>
À un instant fixé, l’état d’un système quantique est un <b>vecteur</b> $\lvert \psi\rangle$ dans un <b>espace de Hilbert</b> $\mathcal{H}$.
</li></ul>
</div>

Ce premier axiome implique la **superposition quantique des états**. Le deuxième implique l'**unitarité de l'évolution**&nbsp;:


<div id="axiom">
<ul><li>Axiome 2&nbsp;: <b>Évolution unitaire</b><br>
L’évolution d’un système quantique est toujours unitaire, c’est-à-dire décrite par un <b>opérateur unitaire</b> $\hat U$ (tel que $\hat U^\dagger = \hat U^{-1}$), parfois appelé « porte », agissant selon $\lvert \psi\rangle \;\longmapsto\;\hat U \lvert \psi\rangle$.<br>
En particulier, l’évolution dans le temps obéit à l’<b>équation de Schrödinger</b>

$$\mathrm{i}\\,\hbar\frac{\partial}{\partial t}\lvert \psi\rangle \\;=\\; \hat H \lvert \psi\rangle ,$$

où $\hat H$ est l’opérateur <b>Hamiltonien</b>.
</li></ul>
</div>

L'axiome suivant implique les états intriqués, l'aspect le plus bizarre de la théorie. Il est parfois omis car soit considéré comme naturel soit dérivable des autres axiomes (voir [cet article](https://arxiv.org/pdf/2003.11007) de Carcassi, Maccone et Aidala de 2021).

<div id="axiom">
<ul><li>Axiome 3 : <b>Produit tensoriel</b><br>
L'état quantique d'un système composite est un vecteur dans le produit tensoriel des espaces de Hilbert de ses sous-systèmes.
</li></ul>
</div>


Ces trois premiers axiomes contiennent toute la structure mathématique de la théorie. Les suivants traitent de la **mesure** qu'on peut décrire comme le **transfert d'informations entre systèmes**. Le but est d'établir une correspondance entre le vecteur dans l'espace de Hilbert et les résultats d'expériences.


<div id="axiom">
<ul><li>Axiome 4&nbsp;: <b>Règle de Born</b><br>
Une mesure sur un système quantique est décrite par un opérateur hermitien $\hat A$ (i.e. $\hat A = \hat A^\dagger$), appelé "<b>observable</b>".<br>
Cette observable possède une décomposition spectrale

$$\hat A \\;=\\; \sum_i \lambda_i \\,\lvert e_i\rangle\langle e_i\rvert$$

où les valeurs propres $\lambda_i$ sont les résultats possibles de la mesure et les projecteurs $\lvert e_i\rangle\langle e_i\rvert$ en sont les opérateurs associés.<br>
Si l’on mesure l’état $\lvert \psi\rangle$, la probabilité d’obtenir le résultat $i$ est
$$p(i) \\;=\\; \langle \psi \rvert e_i\rangle\langle e_i \lvert \psi\rangle$$
</li></ul>
</div>

<br>

<div id="axiom">
<ul><li>Axiome 5&nbsp;: <b>Postulat de réduction du paquet d'onde</b><br>
Après la mesure, l’état du système s’effondre sur l’état propre associé au résultat obtenu. Si l’issue $i$ est observée, l’état devient

$$\frac{\lvert e_i\rangle\langle e_i \lvert \psi\rangle}{\sqrt{p(i)}}$$ 
</li></ul>
</div>

<br>

<div id="axiom">
<ul><li>Axiome 6&nbsp;: <b>Relation de complétude</b><br>
Les <b>projecteurs</b> satisfont la relation

$$\sum_i \lvert e_i\rangle\langle e_i\rvert \\;=\\; \mathbb{I}$$

où $\mathbb{I}$ est l’opérateur identité sur $\mathcal{H}$. 
</li></ul>
</div>

[^1]: D'une source à l'autre, l'ordre et le nombre d'axiomes varient. 

## Information quantique

### Le bit classique
Un bit est la plus petite unité d’information&nbsp;: il distingue entre deux possibilités (le résultat d’un pile ou face, l’état marche/arrêt d’une lampe, le niveau de tension haut/bas dans un circuit, etc.). On note habituellement  ces possibilités «&nbsp;zéro logique&nbsp;» et «&nbsp;un logique&nbsp;» : $0, 1$.

Pour représenter plus d’information, on considère une chaîne de bits&nbsp;: avec $n$ bits, on a $2^n$ possibilités (par exemple, pour 3 bits : $000,001, \dots,111$).


###	Le qubit
L’analogue quantique du bit est le <b>qubit</b>. C’est le système quantique non trivial le plus simple. À l’issue d’une mesure, il distingue également deux possibilités, correspondant aux éléments d’une base orthonormale de l’espace de Hilbert à deux dimensions $\mathcal{H}_2$. 

On note $\lvert0\rangle$ et $\lvert1\rangle$ les deux vecteurs de base. On peut les réaliser physiquement de plein de façons&nbsp;: le premier et deuxième niveau d'énergie d'un atome d'hydrogène, le spin haut et le spin bas d'une particule de spin $1/2$, la polarisation horizontale et verticale d'un photon, etc.

<div id="theo">

La grande différence avec un bit classique est qu'entre deux mesures, le qubit existe comme une <b>superposition des deux possibilités</b>&nbsp;:
$$\lvert\psi\rangle = \alpha\\,\lvert0\rangle + \beta\\,\lvert1\rangle$$
avec $\alpha,\beta\in\mathbb{C}$ et $\lvert\alpha\rvert^2 + \lvert\beta\rvert^2 = 1$.

</div>

Une autre différence importante est qu'on peut tout à fait mesurer le qubit dans une direction qui ne distingue pas $|0\rangle$ de $|1\rangle$.

 On identifie deux états qui ne diffèrent que par une phase globale étant donné qu'ils produisent des prédictions physiques identiques. Cela permet de spécifier un qubit par un poids relatif et une phase relative. En ne considérant que des poids égaux dans la superposition, on peut écrire&nbsp;:
 $$|\psi\rangle = \frac{|0\rangle+\mathrm{e}^{\mathrm{i}\theta} |1\rangle}{\sqrt{2}}$$
 
Les cas particuliers $\theta=0$ et $\theta=\pi$ donnent respectivement les deux états suivants&nbsp;:
$$|+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}$$
$$|-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}}$$

Il est possible de réaliser une mesure distinguant $|+\rangle$ de $|-\rangle$ en choisissant l’observable
$$\hat X \\;=\\; |+\rangle\langle+| \\;-\\; |-\rangle\langle-|
$$

Contrairement au cas classique, le résultat d'une mesure n'est pas toujours entièrement déterminé par la mesure elle-même et l'état $|\psi\rangle$.

L’information contenue dans un système binaire classique est quantifiée par un bit, soit la quantité nécessaire pour spécifier complètement l’un des deux états possibles. En revanche, pour un état quantique, les coefficients complexes $\alpha$ et $\beta$ peuvent varier de façon continue, de sorte qu’il faudrait une quantité infinie d’information classique pour décrire exactement un qubit.

### Matrice densité

<div id="def">

On définit la matrice densité $\rho_\psi$ associée à un état pur $\lvert\psi\rangle$ par&nbsp;:
$$ \rho_\psi = \lvert\psi\rangle\langle\psi\rvert$$

Si $\lvert\psi\rangle = \alpha\\,\lvert0\rangle + \beta\\,\lvert1\rangle$, alors
$$\rho_\psi = 
\begin{pmatrix}
|\alpha|^2 & \alpha^\*\beta\\\\
\beta^\* \alpha & |\beta|^2
\end{pmatrix}$$

</div>

La condition de normalisation $\langle\psi|\psi\rangle=1$ entraîne que la trace de la matrice densité vaut un ($\mathrm{Tr}\\,\rho_\psi = 1$).

### Fidélité

<div id="def">

Pour deux états purs $\lvert\psi\rangle$ et $\lvert\chi\rangle$, la <b>fidélité</b> est définie par 
$F = \bigl|\langle\psi|\chi\rangle\bigr|^2$.<br>

Ou pour deux états dont les matrices de densité sont $\rho$ et $\sigma$, 
$F = \mathrm{Tr}\\,\sqrt{\rho}\\,\sqrt{\sigma}$.

</div>

### Orthogonalité

<div id="def">

Deux états $\lvert\psi\rangle$ et $\lvert\chi\rangle$ sont dits <b>orthogonaux</b> si
$\langle\psi|\chi\rangle = 0$.
Les deux états ont alors une fidélité nulle.

</div>

### État pur et état mixte

<div id="def">

Un <b>état pur</b> est un vecteur dans l’espace de Hilbert. Toute combinaison linéaire normalisée des vecteurs de base est un état pur&nbsp;:
$$|\psi\rangle = \sum_i\alpha_i|i\rangle$$
Les $\alpha_i\in\mathbb{C}$ sont appelés poids.<br>
Toute combinaison linéaire d'états purs est encore un état pur.

</div>

<br>

<div id="def">

Un <b>état mixte</b> est une combinaison convexe de matrices densité&nbsp;:

$$
\rho = \sum_i p_i\\,\rho_i
$$

où chaque $\rho_i$ représente un état pur, et les $p_i$ sont des probabilités telles que $\sum_i p_i=1$.
</div>

Il existe de nombreuses décompositions convexes d’un état mixte. Par exemple, l’état mixte maximal&nbsp;:

<div id="gros">

$$
\rho \\;=\\;\tfrac12\bigl(|0\rangle\langle0| + |1\rangle\langle1|\bigr)
\\;=\\;\tfrac12\bigl(|+\rangle\langle+| + |-\rangle\langle-|\bigr)
\\;=\\;\tfrac{\mathbb{I}}2
$$

</div>

Un état mixte ne peut pas s’écrire comme une somme d’états de base à poids complexes.

La différence sémantique entre un état « pur » et un état « mixte » tient au fait que l’incertitude pour le premier est une incertitude purement quantique, tandis que pour le second une part d’incertitude classique est introduite. Un état mixte apparaît si l’on prépare un état quantique en fonction du résultat d’un pile ou face classique, en assignant un certain état pour pile et un autre pour face. On peut aussi interpréter cette incertitude classique comme une forme d’erreur expérimentale.

## Sphère de Bloch

Il existe une représentation géométrique élégante des qubits qui facilite grandement la visualisation des opérations de mesure, d’évolution et de similarité des états dans l’espace de Hilbert. 

Dans la représentation par matrice densité d’un état pur, on compte à première vue deux coefficients complexes, soit quatre nombres réels. La condition de normalisation (trace = 1) en élimine un. Il reste donc trois degrés de liberté réels pour un état mixte. Et comme on a vu que deux états purs ne se différentiant que par une phase globale sont en fait identiques,  il ne reste que deux degrés de liberté pour un état pur[^2]. Cela permet de représenter les états purs sur la surface d’une sphère et les états mixtes dans son intérieur.

[^2]: La normalisation $|\alpha|^2+|\beta|^2=1$ contraint de vivre à la surface d'une sphère $S^3$ dans $\mathbb{R}^4$. Multiplier par une phase globale $\mathrm{e}^{\mathrm{i}\gamma}$ fait parcourir un cercle $S_1$ dans cette sphère. Puisqu'on identifie tous ces points, on quotiente $S^3$ par $S^1$. Et $S^3/S^1\simeq S^2$, la sphère ordinaire.

<div id="def">

On définit le vecteur de Bloch $\vec{r} = [r_x,\,r_y,\,r_z]$ associé à un état $\rho$ par

<div id="gros">

$$
\rho = \frac12\bigl(\mathbb{I} + \vec{r}\\!\cdot\\!\vec{\sigma}\bigr)
=\frac12
\begin{pmatrix}
1 + r_z & r_x - \mathrm{i}\\,r_y \\\\
r_x + \mathrm{i}\\,r_y & 1 - r_z
\end{pmatrix}
$$

</div>

où $\boldsymbol{\sigma} = [\hat X,\\,\hat Y,\\,\hat Z]$ est le triplet de matrices de Pauli. 
</div>

Grâce à ce vecteur, tout qubit peut être visualisé comme un point de la sphère de Bloch&nbsp;:
<ul style="margin-top:-0.5em;margin-bottom:-0.5em;">
<li>les états purs correspondent aux points de la surface&nbsp;;</li>
<li>les états mixtes se situent à l’intérieur&nbsp;;</li>
<li>deux états orthogonaux apparaissent comme des points diamétralement opposés.</li>
</ul>

Par construction, les vecteurs propres des matrices de Pauli occupent trois paires de points antipodaux sur la sphère&nbsp;:
$$\hat X|+\rangle = |+\rangle,\quad \hat X|-\rangle = -|-\rangle$$
<div id="gros">
$$\hat Y|{+}\mathrm{i}\rangle = |{+}\mathrm{i}\rangle=\frac{|0\rangle+\mathrm{i}|1\rangle}{\sqrt{2}},\quad \hat Y|{-}\mathrm{i}\rangle = -|{-}\mathrm{i}\rangle=\frac{|0\rangle-\mathrm{i}|1\rangle}{\sqrt{2}}$$
</div>
$$\hat Z|0\rangle = |0\rangle,\quad \hat Z|1\rangle = -|1\rangle$$

Chaque paire de vecteurs propres est une base de l'espace de Hilbert qui définit un axe orthogonal dans la sphère de Bloch.

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/blochsph.png" style="box-shadow:none;background:none;">
</div>

Attention, ça ne veut pas dire que ces trois bases sont orthogonales (ça n'aurait pas de sens puisque chacune est complète)&nbsp;; elles sont **mutuellement non biaisées**[^3] (c'est ça que traduit géométriquement les axes orthogonaux de la sphère de Bloch).  

Par combinaison convexe, on fait passer les états purs situés sur la surface de la sphère de Bloch vers des états mixtes à l’intérieur de celle‑ci. L’état maximalement mixte, $\mathbb{I}/2$, se situe au centre de la sphère de Bloch.

[^3]: Deux bases $\\{e_i\\}$ et $\\{f_i\\}$ sont mutuellement non biaisées si, pour tout $i,j$&nbsp;:
$\bigl|\langle e_i | f_j\rangle\bigr|^2 \\;=\\;\text{cste}$.<br>
Pour des bases orthonormales, on peut démontrer que la constante vaut $\frac 1 d$ où $d=\dim\mathcal H$ grâce à la relation suivante $\langle e_i|\Bigl(\sum_j |f_j\rangle\langle f_j|\Bigr)|e_i\rangle
\\;=\\;\sum_j \bigl|\langle f_j|e_i\rangle\bigr|^2
\\;=\\;\langle e_i|\mathbb I|e_i\rangle\\;=\\;1$ où on a utilisé la complétude de la base $\\{f_i\\}$, $\sum_j |f_j\rangle\langle f_j| = \mathbb I$, et la normalité des éléments $\\{e_i\\}$. Si tous les termes $\bigl|\langle f_j|e_i\rangle\bigr|^2$ sont en plus égaux (définition de bases non biaisées), chacun vaut forcément $\frac1d$ (puisqu'il y a autant de vecteurs dans chaque base que de dimensions).<br>
La conséquence géométrique est que des états mutuellement non biaisés sont équidistances sur la sphère de Bloch puisque les angles entre eux sont identiques.

## Paire de Qubits

Lorsqu’il faut décrire plusieurs systèmes quantiques simultanément, on a recours au **produit tensoriel** $\otimes$ (axiome 3). Supposons, par exemple, qu’on souhaite modéliser à la fois un qubit situé à La Rochelle et un autre à Paris ; on écrit alors
$$
|\psi\rangle_{\text{La Rochelle}}\\;\otimes\\;|\phi\rangle_{\text{Paris}}
$$
où $|\psi\rangle$ désigne l’état du premier qubit et $|\phi\rangle$ celui du second. Une fois qu’un ordre conventionnel est adopté, il est d’usage de supprimer les indices géographiques (et même de fusionner les deux kets en un seul) :
$$
|\psi\rangle_{\text{La Rochelle}}\otimes|\phi\rangle_{\text{Paris}}
\\;=\\;
|\psi\rangle\otimes|\phi\rangle
\\;=\\;
|\psi\phi\rangle
$$

Cette expression est appelée un **état produit**&nbsp;; elle vit dans l’espace de Hilbert tensoriel $H_1\otimes H_2$. Ainsi, si $|\psi\rangle\in H_1$ possède la base $\\\{|L\rangle,|R\rangle\\\}$ et $|\phi\rangle\in H_2$ la base $\\\{|P\rangle,|S\rangle\\\}$, alors $|\psi\rangle\otimes|\phi\rangle$ appartient à $H_1\otimes H_2$ et la base combinée devient $\\\{|LP\rangle,|LS\rangle,|RP\rangle,|RS\rangle\\\}$.  

De même qu’un qubit unique peut passer par une porte (unitaire), un état produit peut être soumis à l’action d’un opérateur tensoriel
$$
\bigl(\hat A_{\text{La Rochelle}}\otimes\hat B_{\text{Paris}}\bigr)\\,
|\psi\rangle\otimes|\phi\rangle
$$
Si l’on prend $\hat A=\mathbb{I}$, on agit uniquement sur le qubit de Paris ; si c’est $\hat B=\mathbb{I}$, on agit seulement sur celui de La Rochelle.

La base computationnelle $\\\{|0\rangle,|1\rangle\\\}$ d’un qubit se prolonge naturellement en une base de l’espace bipartite&nbsp;: $\\\{|00\rangle,\\;|01\rangle,\\;|10\rangle,\\;|11\rangle\\\}$.
Un état général de deux qubits est donc une combinaison linéaire de ces quatre kets. 

<div id="theo">

Au cours de l’évolution, un tel état bipartite peut devenir un **état intriqué** comme, par exemple, l'état de Bell&nbsp;:
$$
|{\rm Bell}\rangle
\frac{1}{\sqrt{2}}\bigl(|00\rangle+|11\rangle\bigr)
$$
</div>

On remarque que l'état de Bell ne contient pas les « termes croisés » $|01\rangle$ et $|10\rangle$ (leurs poids sont nuls). Il est donc impossible de l’écrire comme produit de deux qubits séparés&nbsp;! Les états intriqués comme celui‑ci jouent un rôle central dans la plupart des protocoles de l’information quantique. 

## Non-clonage quantique

Maintenant qu’un espace produit bipartite a été introduit, on peut l’utiliser pour illustrer certains traits particulièrement surprenants de la mécanique quantique. 

Supposons que l’on veuille copier – cloner – un état quantique. Un cloneur universel opère simultanément sur un qubit de données $|\psi\rangle$ et sur un qubit ancillaire initialisé dans un état fixe (par exemple l’état « vierge » $|0\rangle$), de sorte que l’état final soit le produit de deux exemplaires du qubit de données&nbsp;:

$$U\\,|\psi\rangle|0\rangle \\;=\\; |\psi\rangle|\psi\rangle$$

et, par le même procédé, pour tout autre état $|\phi\rangle$&nbsp;:

$$
U\\,|\phi\rangle|0\rangle \\;=\\; |\phi\rangle|\phi\rangle
$$

En prenant le produit scalaire des deux relations précédentes, on obtient&nbsp;:

$$
\langle\psi|\phi\rangle \\;=\\; \bigl(\langle\psi|\phi\rangle\bigr)^{2}
$$

Cette équation n’admet de solution que si les états sont identiques ($\langle\psi|\phi\rangle = 1$) ou orthogonaux ($\langle\psi|\phi\rangle = 0$). 

<div id="theo">

Il en découle qu’un cloneur universel 🐑 capable de copier n’importe quel état est impossible.

</div>

En d’autres termes, la seule procédure qui conserve les produits scalaires (et donc la structure de l’espace de Hilbert) ne peut cloner, au mieux, que des états orthogonaux. Le point crucial est qu’un processus de clonage universel violerait l’évolution unitaire prescrite par l’axiome 2&nbsp;: il ne préserverait pas les produits scalaires et ne pourrait donc être représenté par un opérateur unitaire. 

Pour cloner un état, l’appareil devrait accéder à toute l’information qui le caractérise sans le perturber. Les états classiques satisfont cette condition&nbsp;: ils peuvent être entièrement déterminés par une quantité finie d’informations et restent intacts lors d’une mesure, de sorte qu’il suffit de les identifier puis de préparer un second système identique. En revanche, un état quantique ne peut être déterminé qu’au prix d’un nombre infini de mesures et, surtout, le processus de mesure le détruit. 

<div id="theo">

Cette impossibilité fondamentale d’extraire toutes les informations sans perturber le système explique pourquoi un état quantique arbitraire ne peut jamais être cloné. 

</div>


## Téléportation quantique

La téléportation quantique est un autre phénomène étonnant&nbsp;: il s’accorde parfaitement avec le théorème d’interdiction du clonage, puisqu’on y transfère un état sans jamais en créer une copie supplémentaire.

La description du protocole exige un espace de Hilbert tripartite qu'on peut voir comme le produit tensoriel de trois qubits&nbsp;:
$$
\mathcal H = \underbrace{\mathcal H_1 \otimes \mathcal H_2}\_{\text{Alice}}
\otimes \underbrace{\mathcal H_3}\_{\text{Bob}}
$$

Alice possède l’état inconnu $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ qu’elle veut transmettre à Bob. Aucune ligne « quantique » directe ne relie les deux laboratoires.<br>
Les amplitudes $\alpha$, $\beta$ sont inconnues des deux parties ; un simple message classique ne suffit donc pas.<br>
Alice et Bob partagent toutefois à l’avance une paire intriquée de Bell
$|{\rm Bell}\rangle
= \frac{1}{\sqrt2}\bigl(|00\rangle+|11\rangle\bigr)$. 


Le système complet est alors initialement 
$$|{\text{teleport}}\rangle
= |\psi\rangle\\,|{\rm Bell}\rangle
= \frac{1}{\sqrt2}\\,|\psi\rangle\bigl(|00\rangle+|11\rangle\bigr)$$
On peut le développer pour bien distinguer la <span style="color:#00AB8E;">partie Alice</span> et la <span style="color:#F27200;">partie Bob</span>&nbsp;:

<div id="gros">

$$
|{\rm teleport}\rangle
= \tfrac1{\sqrt2}\bigl(
\alpha  {\color{#00AB8E}|00\rangle} {\color{#F27200}|0\rangle} + \alpha {\color{#00AB8E}|01\rangle}  {\color{#F27200}|1\rangle} + \beta {\color{#00AB8E}|10\rangle} {\color{#F27200}|0\rangle} + \beta {\color{#00AB8E}|11\rangle} {\color{#F27200}|1\rangle}\bigr)
$$

</div>

Alice effectue maintenant sur ses deux qubits la mesure définie par l’observable
$A=\sum_{i=I,X,Y,Z}\lambda_i P_i$ dont les quatre issues possibles équiprobables sont associées aux projecteurs suivants&nbsp;:
$$
\begin{aligned}
P_{\mathbb{I}} & =\frac{1}{2}(|00\rangle+|11\rangle)(\langle 00|+\langle 11|) \\\\
P_X & =\frac{1}{2}(|00\rangle-|11\rangle)(\langle 00|-\langle 11|) \\\\
P_Y & =\frac{1}{2}(|01\rangle+|10\rangle)(\langle 01|+\langle 10|) \\\\
P_Z & =\frac{1}{2}(|01\rangle-|10\rangle)(\langle 01|-\langle 10|) \\\\
\end{aligned}
$$

Ces projecteurs vérifient $\sum P_i = \mathbb{I}$ en accord avec l'axiome 6 et, par la règle de Born (axiome 4), chaque résultat apparaît avec la  probabilité 1/4.

Après la mesure, suivant $\lambda_i$, l’état devient

<div id="gros">

$$|{\rm teleport^\prime_\mathbb{I}}\rangle = {\color{#00AB8E} P_\mathbb{I}}\otimes {\color{#F27200}\mathbb{I}}\\,|{\rm teleport}\rangle
= {\color{#00AB8E}|{\rm Bell}\rangle}\\,\bigl({\color{#F27200}|\psi\rangle}\bigr)$$

</div>

<div id="gros">

$$|{\rm teleport^\prime_\sigma}\rangle = {\color{#00AB8E} P_\sigma}\otimes{\color{#F27200}\mathbb{I}}\\,|{\rm teleport}\rangle
= {\color{#00AB8E}|{\rm Bell^\prime}\rangle}\\,\bigl({\color{#F27200}\sigma|\psi\rangle}\bigr)$$

</div>

Avec $\sigma\in\{\hat{X},\hat{Y},\hat{Z}\}$ (opérateurs de Pauli) et où $|{\text{Bell}^\prime}\rangle$ est l'état de Bell ou une rotation unitaire de l'état de Bell.<br>
Dans 25 % des cas ($P_\mathbb{I}$), le qubit de Bob est déjà le bon et la téléportation est donc déjà achevée&nbsp;; sinon il en diffère d’un opérateur de Pauli.

Exemple&nbsp;: supposons que $i=X$&nbsp;:

<div style="overflow-x:auto;">

$$
\begin{aligned}
|{\rm teleport^\prime_X}\rangle &= P_X\otimes\mathbb{I}\\,|{\text{teleport}}\rangle \\\\
&= \bigl( \tfrac 12({\color{#00AB8E}|00\rangle-|11\rangle})( {\color{#00AB8E}\langle 00| - \langle 11|})\otimes {\color{#F27200}\mathbb{I}}\bigr) \tfrac1{\sqrt2}\bigl(
\alpha  {\color{#00AB8E}|00\rangle} {\color{#F27200}|0\rangle} + \alpha {\color{#00AB8E}|01\rangle}  {\color{#F27200}|1\rangle} + \beta {\color{#00AB8E}|10\rangle} {\color{#F27200}|0\rangle} + \beta {\color{#00AB8E}|11\rangle} {\color{#F27200}|1\rangle}\bigr) \\\\
& =  \tfrac 12({\color{#00AB8E}|00\rangle-|11\rangle})\otimes\tfrac 1{\sqrt2}(\alpha{\color{#F27200}|0\rangle}-\beta{\color{#F27200}|1\rangle})\\\\
& =  \tfrac 1{\sqrt2}({\color{#00AB8E}|00\rangle-|11\rangle}) \otimes \tfrac 12 \hat{Z} (\alpha{\color{#F27200}|0\rangle}+\beta{\color{#F27200}|1\rangle})\\\\
& = \tfrac 1{\sqrt2}({\color{#00AB8E}|00\rangle-|11\rangle}) \otimes \tfrac 12 {\color{#F27200}\hat{Z}|\psi\rangle}
\end{aligned}
$$

</div>

La partie Alice est bien un état de Bell et Bob se retrouve avec une transformation de l'état à télétransporter.

Alice téléphone alors à Bob et lui envoie deux bits d'information classique pour indiquer son résultat&nbsp;:
<ul style="margin-top:-0.5em;margin-bottom:-0.5em;">
<li>«&nbsp;$00$&nbsp;» pour un succès direct ($P_\mathbb{I}$)&nbsp;;</li>
<li>«&nbsp;$01$&nbsp;», «&nbsp;$10$&nbsp;», «&nbsp;$11$&nbsp;» pour préciser respectivement $\hat{X}$, $\hat{Y}$ ou $\hat{Z}$, l'opérateur de Pauli à utiliser.</li>
</ul>

<u>Rq</u>&nbsp;: dans notre exemple, Alice envoie $11$.
 
Bob applique alors la correction sur son qubit avec l'opérateur de Pauli approprié $\sigma$&nbsp;:

$${\color{#00AB8E}\mathbb{I}}\otimes{\color{#00AB8E}\mathbb{I}}\otimes{\color{#F27200}\sigma}\\,|{\text{teleport}^\prime_{\sigma}}\rangle
={ \color{#00AB8E}|{\rm Bell^\prime}\rangle}\\,{\color{#F27200}|\psi\rangle}$$

grâce à l'involution de l'opérateur de Pauli $\sigma^2=\mathbb{I}$.


<div id="theo">

À l'issue de l'algorithme et conformément au paradigme LOCC (opérations locales + communication classique), on a réalisé&nbsp;:
$$|\psi\rangle\\,|{\text{Bell}}\rangle \\;\longrightarrow\\;
|{\text{Bell}^\prime}\rangle\\,|\psi\rangle$$

</div>
