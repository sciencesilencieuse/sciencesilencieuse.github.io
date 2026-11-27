+++
title = "Théorie des jeux"
date = 2021-03-06T14:20:50+01:00
weight = 7
chapter = false
css = "algo.css"
+++

<style>
mjx-container[display="true"] { max-width:100%; overflow-x:auto; overflow-y:hidden; }
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
.bloc
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid;
    border-radius: 12px;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.bloc-titre
{
    font-weight: bold;
    margin-bottom: 0.3em;
}
.bloc-def { border-color: #004D80; background: #EEF4FA; }
.bloc-prop { border-color: #C2770B; background: #FDF6EC; }
.bloc-theo { border-color: #970E53; background: #FBF1F5; }
.bloc-preuve { border-color: #64748B; background: #F1F5F9; }
.bloc-def > .bloc-titre { color: #004D80; }
.bloc-prop > .bloc-titre { color: #C2770B; }
.bloc-theo > .bloc-titre { color: #970E53; }
.bloc-preuve > .bloc-titre { color: #475569; }
.encadre
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #006C65;
    border-radius: 12px;
    background: #F3F8F7;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.encadre-titre
{
    font-weight: bold;
    color: #006C65;
    margin-bottom: 0.3em;
}
details.encadre > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.encadre > summary::-webkit-details-marker
{
    display: none;
}
details.encadre > summary::before
{
    content: "\25B8\00A0";
}
details.encadre[open] > summary::before
{
    content: "\25BE\00A0";
}
.exercice
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #6B4FA0;
    border-radius: 12px;
    background: #F6F3FA;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.exercice-titre
{
    font-weight: bold;
    color: #6B4FA0;
    margin-bottom: 0.3em;
}
details.exercice > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.exercice > summary::-webkit-details-marker
{
    display: none;
}
details.exercice > summary::before
{
    content: "\25B8\00A0";
}
details.exercice[open] > summary::before
{
    content: "\25BE\00A0";
}
details.solution > summary
{
    cursor: pointer;
    color: #6B4FA0;
    font-style: italic;
}
.jeu-tab
{
    border-collapse: collapse;
    margin: 1em auto;
    width: 500px;
    max-width: 100%;
    table-layout: fixed;
}
.jeu-tab th, .jeu-tab td
{
    border: 1px solid #A3A3A3;
    text-align: center;
    padding: 0.7em 0.3em;
    font-size: 1.25em;
}
.jeu-tab th { border-color: #FFFFFF; font-weight: normal; }
.jeu-tab th.r1 { background: #E8948B; }
.jeu-tab th.r2 { background: #E0654F; }
.jeu-tab th.b1 { background: #82BFFC; }
.jeu-tab th.b2 { background: #5CA1FD; }
.jeu-tab td { background: #FEFEFE; }
.jeu-tab td.jeu-res { background: #E6F2F1; border: 3px solid #006C65; font-weight: bold; }
.selle-legende
{
    max-width: 40rem;
    margin: 0.4em auto 1.4em auto;
    font-size: 0.95em;
    color: #334155;
    text-align: center;
}
.jeu-matrice
{
    border-collapse: separate;
    border-spacing: 3px;
    margin: 1em auto 0.4em auto;
}
.jeu-matrice th, .jeu-matrice td
{
    text-align: center;
    padding: 0.2em 0.5em;
    border: none;
    font-weight: normal;
}
.jeu-matrice th.jb { background: #BFDBFE; font-weight: bold; }
.jeu-matrice th.jr { background: #FECACA; font-weight: bold; }
.jeu-matrice th.jm { font-size: 0.85em; color: #64748B; }
.jeu-matrice td { background: #FFFFFF; border: 1px solid #CBD5E1; }
.jeu-matrice td.jeu-col { border: 3px solid #006C65; background: #E6F2F1; }
.jeu-matrice input[type="number"]
{
    width: 4.5em;
    font-size: 1em;
    text-align: center;
    border: none;
    background: transparent;
}
.jeu-resultat
{
    max-width: 40rem;
    margin: 0.6em auto 1.4em auto;
    padding: 0.5em 1em;
    border-radius: 8px;
    background: #F1F5F9;
    color: #1E293B;
}
</style>

# Un peu de théorie des jeux

<p style="text-align:center;color:#475569;">Cette page est très inspirée du livre <em>Chases and Escapes: The Mathematics of Pursuit and Evasion</em> de Paul Nahin.</p>

## Attaque - Défense

### Le problème

Un petit problème mathématique qui fleure bon la Guerre Froide&nbsp;:

> Deux bombardiers bleus sont en mission. L'un transporte une bombe H et l'autre des équipements pour brouiller les radars. Leur plan de vol est tel qu'un des deux bombardiers est mieux protégé par les mitrailleuses de l'autre. Pour éviter qu'un avion de chasse rouge abatte l'avion bleu transportant la bombe, que vaut-il mieux&nbsp;: le placer dans la position la mieux ou la moins bien protégée&nbsp;?

La réponse semble de prime abord évidente et pourtant...

Listons les stratégies possibles pour les Bleus et les Rouges&nbsp;:
- B1 : placer la bombe dans le bombardier le mieux protégé
- B2 : placer la bombe dans le bombardier le moins bien protégé
- R1 : attaquer le bombardier le mieux protégé
- R2 : attaquer le bombardier le moins bien protégé

<table class="jeu-tab" aria-label="Matrice de gains : B1 contre R1 80, B1 contre R2 100, B2 contre R1 100, B2 contre R2 60">
<tr><th></th><th class="r1">R1</th><th class="r2">R2</th></tr>
<tr><th class="b1">B1</th><td>80</td><td>100</td></tr>
<tr><th class="b2">B2</th><td>100</td><td>60</td></tr>
</table>

La matrice de gains ci-dessus peut s'interpréter ainsi&nbsp;: les chances de survie du bombardier le mieux protégé sont de 80&nbsp;% s'il est attaqué (et de 100&nbsp;% s'il ne l'est pas...) alors que le moins bien protégé n'a que 60&nbsp;% de chances de s'en sortir (et 100&nbsp;% si on le laisse tranquille).

<div class="bloc bloc-def">
<div class="bloc-titre">Jeu à somme nulle</div>

Un **jeu à somme nulle** à deux joueurs est décrit par une **matrice de gains** $A = (a_{ij})$&nbsp;: quand Bleu joue la stratégie $i$ et Rouge la stratégie $j$, Rouge verse $a_{ij}$ à Bleu. Les gains d'un joueur sont les pertes de l'autre. Bleu cherche à rendre ce gain le plus grand possible, Rouge le plus petit.

</div>

On a imaginé ainsi un «&nbsp;**jeu**&nbsp;» **à somme nulle**. Dans la nomenclature de la théorie des jeux, il s'agit d'un jeu **injuste** puisque toutes les entrées sont positives $\Rightarrow$ bleu repart forcément «&nbsp;gagnant&nbsp;» (même si ça n'a pas vraiment de sens ici).

### Stratégies pures et point col

La stratégie optimale pour deux joueurs rationnels va consister à minimiser le «&nbsp;score&nbsp;» maximum que l'autre joueur peut faire en suivant ainsi un principe du moindre mal. En effet, chaque joueur sait que l'autre va chercher à maximiser ses gains et va donc s'évertuer à rendre cette maximisation la plus faible possible.

Si une stratégie unique permet d'arriver à cette fin, sans que le joueur soit jamais motivé à changer de stratégie lors d'un prochain tour, on dit qu'il joue une **stratégie pure**. C'est le cas dans l'exemple suivant&nbsp;:

<table class="jeu-tab" aria-label="Matrice de gains : B1 contre R1 6, B1 contre R2 5, B2 contre R1 3, B2 contre R2 4">
<tr><th></th><th class="r1">R1</th><th class="r2">R2</th></tr>
<tr><th class="b1">B1</th><td>6</td><td class="jeu-res">5</td></tr>
<tr><th class="b2">B2</th><td>3</td><td>4</td></tr>
</table>

Bleu est incité à choisir la stratégie B1 pour maximiser ses gains minimums réalisables&nbsp;: dans le pire des cas, il recevra 5 alors qu'avec la stratégie B2, il recevrait au pire 3...<br>
Si Rouge joue sa première stratégie, il perd au pire 6 alors qu'avec la seconde, il perd au pire 5. Donc Rouge va jouer la seconde stratégie.

En résumé, Bleu choisit la ligne contenant le plus grand des gains minimums et Rouge choisit la colonne contenant le plus petit gain maximum possible.

<div class="bloc bloc-def">
<div class="bloc-titre">Valeurs inférieure et supérieure</div>

Pour une matrice de gains $A = (a_{ij})$, la **valeur inférieure** (ou maximin) est le plus grand des gains minimaux des lignes, la **valeur supérieure** (ou minimax) est le plus petit des gains maximaux des colonnes&nbsp;:
$$\underline{V} = \max_i \min_j a_{ij}, \qquad \overline{V} = \min_j \max_i a_{ij}.$$
On a toujours $\underline{V} \le \overline{V}$.

</div>

L'inégalité est claire&nbsp;: pour tous $i$ et $j$, $\min_{j'} a_{ij'} \le a_{ij} \le \max_{i'} a_{i'j}$, donc le plus grand des termes de gauche reste inférieur au plus petit des termes de droite.

<div class="bloc bloc-def">
<div class="bloc-titre">Point col</div>

Le jeu est **stable** quand $\underline{V} = \overline{V}$. Il possède alors un **point col** (ou point-selle) $(i^{\ast}, j^{\ast})$&nbsp;: le gain $a_{i^{\ast}j^{\ast}}$ est à la fois le plus petit de sa ligne et le plus grand de sa colonne. Aucun joueur n'est incité à changer de stratégie, et la valeur commune $V = a_{i^{\ast}j^{\ast}}$ est la **valeur du jeu**.

</div>

Le résultat de la partie est ici un gain de 5 pour Bleu, à l'intersection de la ligne B1 et de la colonne R2. C'est un point col (ou point-selle, en référence à une selle de cheval)&nbsp;: on a en effet un minimum local dans une direction et un maximum local dans l'autre.

La surface $z = x^2 - y^2$ est l'exemple type. L'origine y est un point col&nbsp;: la ligne bleue (qui suit $x$) y passe par un minimum, la ligne rouge (qui suit $y$) y passe par un maximum.

<div class="anim" data-anim="selle1"></div>

### Quand il n'y a pas de point col : les stratégies mixtes

Changeons de matrice de gain&nbsp;:

<table class="jeu-tab" aria-label="Matrice de gains : B1 contre R1 3, B1 contre R2 6, B2 contre R1 5, B2 contre R2 4">
<tr><th></th><th class="r1">R1</th><th class="r2">R2</th></tr>
<tr><th class="b1">B1</th><td>3</td><td>6</td></tr>
<tr><th class="b2">B2</th><td>5</td><td>4</td></tr>
</table>

Pour maximiser le gain minimal, Bleu choisit la stratégie B2 ($4>3$) alors que pour minimiser le gain maximal pour Bleu, Rouge choisit la stratégie R1 ($5<6$). On remarque que le plus grand gain minimal sur une rangée ($4$) est maintenant différent du plus petit gain maximal sur une colonne ($5$). La conséquence est que maintenant, chacun des deux joueurs est incité à changer sa stratégie. Si Rouge passe de la stratégie R1 à R2 par exemple, il réduit le gain de Bleu de $5$ à $4$ (en imaginant que Bleu ait bien choisi la stratégie B2). Mais alors, Bleu est tenté de passer de la stratégie B2 à B1 pour passer d'un gain de $4$ à un gain de $6$. Et ainsi de suite...

Jouer une stratégie pure n'est donc optimal pour aucun des joueurs. Le mieux qu'ils puissent faire est de jouer une **stratégie mixte** composée d'un mélange aléatoire (pour que l'autre joueur ne puisse pas anticiper) des stratégies 1 et 2.

<div class="bloc bloc-def">
<div class="bloc-titre">Stratégie mixte</div>

Une **stratégie mixte** de Bleu est un choix aléatoire entre ses stratégies pures, avec des probabilités fixées&nbsp;: B1 avec la probabilité $p$ et B2 avec la probabilité $1 - p$. De même, Rouge joue R1 avec la probabilité $q$ et R2 avec la probabilité $1 - q$. Pour la matrice $\begin{pmatrix} a & b \\\\ c & d \end{pmatrix}$, le gain espéré de Bleu est
$$V(p, q) = p q a + p(1-q) b + (1-p) q c + (1-p)(1-q) d.$$

</div>

<div class="bloc bloc-theo">
<div class="bloc-titre">Minimax (von Neumann, 1928)</div>

Pour tout jeu à somme nulle fini à deux joueurs, il existe des stratégies mixtes optimales pour les deux joueurs, telles que Bleu, en choisissant $p^{\ast}$, s'assure un gain espéré au moins égal à un nombre $V$, et Rouge, en choisissant $q^{\ast}$, s'assure de ne pas perdre plus de $V$&nbsp;:
$$\max_p \min_q V(p, q) = \min_q \max_p V(p, q) = V.$$

</div>

Ce fut l'un des tours de force de John von Neumann de démontrer en 1928 qu'il existe pour tout jeu à deux opposants à somme nulle une stratégie mixte optimale pour les deux joueurs telle qu'ils puissent espérer le même gain moyen $V$, $V$ étant le meilleur possible. C'est le **théorème du minimax**.

Débusquons cette stratégie optimale pour le dernier exemple. On va supposer que Bleu joue la stratégie B1 avec une probabilité $p$ et B2 avec donc une probabilité $1-p$. Et Rouge joue R1 avec la probabilité $q$ et R2 avec la probabilité $1-q$.

Si Bleu joue B1, il gagne $3q + 6(1-q)$. Et s'il joue B2, il gagne $5q+4(1-q)$. L'espérance de gain de Bleu est donc $V(p,q)=p[3q+6(1-q)]+(1-p)[5q+4(1-q)]=4+2p+q-4pq$.

Du point de vue de Rouge, on obtient une espérance de gain valant $q[3p+5(1-p)]+(1-q)[6p+4(1-p)]=4+2p+q-4pq$. On obtient donc à nouveau $V(p,q)$.

Tracer $V(p,q)$ fait apparaître une selle de cheval. La stratégie optimale pour Bleu et Rouge va donc consister à placer leurs stratégies sur le point col&nbsp;; le point minimax.

<div class="anim" data-anim="selle2"></div>

Bleu veut choisir $p$ tel que $\displaystyle \frac{\partial V}{\partial q} = 0$. Cela donne $1-4p=0$ et donc $p=1/4$. La distribution de probabilité optimale pour Bleu est donc $\left(\frac{1}{4}\ ; \frac{3}{4}\right)$.

Rouge veut choisir $q$ tel que $\displaystyle \frac{\partial V}{\partial p} = 0$. Cela donne $2-4q=0$ et donc $q=1/2$. La distribution de probabilité optimale pour Rouge est donc $\left(\frac{1}{2}\ ; \frac{1}{2}\right)$.

Le gain pour les deux au point minimax est alors $V(p=1/4,q=1/2) = 4,5$.

<div class="bloc bloc-prop">
<div class="bloc-titre">Stratégies optimales d'un jeu 2 × 2 sans point col</div>

Pour la matrice de gains $\begin{pmatrix} a & b \\\\ c & d \end{pmatrix}$ sans point col, avec $\Delta = a - b - c + d \neq 0$, les stratégies mixtes optimales et la valeur du jeu sont
$$p^{\ast} = \frac{d - c}{\Delta}, \qquad q^{\ast} = \frac{d - b}{\Delta}, \qquad V = \frac{ad - bc}{\Delta}.$$

</div>

On les obtient en annulant les dérivées partielles de $V(p, q)$&nbsp;: $\frac{\partial V}{\partial q} = p(a - b) + (1 - p)(c - d) = 0$ donne $p^{\ast}$, et $\frac{\partial V}{\partial p} = q(a - c) + (1 - q)(b - d) = 0$ donne $q^{\ast}$. Pour la matrice précédente ($a = 3$, $b = 6$, $c = 5$, $d = 4$), $\Delta = -4$, donc $p^{\ast} = \frac{4 - 5}{-4} = \frac{1}{4}$, $q^{\ast} = \frac{4 - 6}{-4} = \frac{1}{2}$ et $V = \frac{12 - 30}{-4} = 4{,}5$.

<details class="encadre">
<summary class="encadre-titre">L'optimum rend l'adversaire indifférent</summary>
<p>Dans la figure précédente, la ligne bleue suit le gain de Bleu quand il fait varier $p$ alors que Rouge joue sa stratégie optimale $q^{\ast} = \frac{1}{2}$. La ligne est horizontale&nbsp;: quelle que soit la valeur de $p$, Bleu gagne $4{,}5$. De même, la ligne rouge est horizontale. À l'équilibre, chaque joueur choisit ses probabilités pour que <b>l'autre ne puisse tirer aucun avantage de sa propre stratégie</b>. C'est pourquoi une stratégie mixte optimale ne se déduit pas des gains du joueur lui-même, mais de ceux de son adversaire. Dans la surface, cela se lit par une pente nulle dans les deux directions au point col.</p>
</details>

### Retour à la guerre froide

Revenons maintenant à notre problème de guerre froide.

<table class="jeu-tab" aria-label="Matrice de gains : B1 contre R1 80, B1 contre R2 100, B2 contre R1 100, B2 contre R2 60">
<tr><th></th><th class="r1">R1</th><th class="r2">R2</th></tr>
<tr><th class="b1">B1</th><td>80</td><td>100</td></tr>
<tr><th class="b2">B2</th><td>100</td><td>60</td></tr>
</table>

Il n'y a clairement pas de point col pour des stratégies pures puisque le plus grand minimum pour les lignes est $80$ alors que le plus petit maximum pour les colonnes est $100$. Il faut donc jouer des stratégies mixtes.

Supposons, comme dans l'exemple précédent, que la stratégie mixte de Bleu soit $(p\ ; 1-p)$ et que celle de Rouge soit $(q\ ; 1-q)$.

- Pour Bleu : $V(p,q)= p[80q+100(1-q)]+(1-p)[100q+60(1-q)]$
- Pour Rouge : $V(p,q)=q[80p+100(1-p)]+(1-q)[100p+60(1-p)]$

Dans les deux cas, $V(p,q)=60+40p+40q-60pq$. On obtient bien à nouveau une selle de cheval. Cherchons son point col.

<div class="anim" data-anim="selle3"></div>

Le point minimax est tel que $\displaystyle \frac{\partial V}{\partial p} = \frac{\partial V}{\partial q}  = 0$. Cela donne $40-60q=0$ et $40-60p=0$, d'où $p=q=2/3$. Les stratégies mixtes optimales pour Bleu et Rouge ont la même distribution de probabilités&nbsp;: $\left(\frac{2}{3}\ ; \frac{1}{3}\right)$.

Contrairement à l'intuition, Bleu doit donc placer la bombe dans l'avion le moins protégé dans 1/3 des cas. Et toujours dans 1/3 des cas, Rouge doit attaquer ce bombardier (le moins protégé).

La valeur du gain au point minimax vaut $\displaystyle V\left(\frac{2}{3},\frac{2}{3}\right)=60+40\left(\frac{2}{3}\right)+40\left(\frac{2}{3}\right)-60\left(\frac{2}{3}\right)\left(\frac{2}{3}\right)=\frac{260}{3}\approx 86,7$. Le porteur de la bombe va donc survivre avec une probabilité de $86,7$&nbsp;% qui est supérieure aux $80$&nbsp;% correspondant à la stratégie évidente, mais finalement naïve, de toujours placer la bombe dans le bombardier le mieux protégé.

Et que se passe-t-il si Bleu applique la stratégie mais pas Rouge&nbsp;?<br>
On a alors $\displaystyle V\left(\frac{2}{3},q\right) = 60+40\left(\frac{2}{3}\right)+40q-60\left(\frac{2}{3}\right)q=\frac{260}{3}+40q-40q=\frac{260}{3}$. Le résultat est indépendant de $q$&nbsp;! Quelle que soit la stratégie de Rouge, le gain est assuré par Bleu. Et à l'inverse, si Rouge applique la stratégie mais pas Bleu, on obtient à nouveau le même résultat, indépendant de $p$.

### Un laboratoire : essayez avec vos matrices

Saisissez les quatre gains de Bleu. La page repère le point col s'il existe, sinon calcule les stratégies mixtes optimales, et trace la surface $V(p, q)$ avec son point minimax. Les valeurs de départ sont celles du problème de la guerre froide.

<div class="anim" data-anim="labo-jeu"></div>

<details class="encadre">
<summary class="encadre-titre">Pierre-papier-ciseaux, et au-delà de deux stratégies</summary>
<p>Le théorème du minimax vaut pour un nombre quelconque de stratégies. Pour pierre-papier-ciseaux, avec les gains $+1$ pour une victoire, $-1$ pour une défaite et $0$ pour un match nul, la matrice est
$$\begin{pmatrix} 0 & -1 & 1 \\ 1 & 0 & -1 \\ -1 & 1 & 0 \end{pmatrix}.$$
Il n'y a pas de point col (les gains minimaux des lignes valent $-1$, les gains maximaux des colonnes valent $+1$). La stratégie mixte optimale est de jouer les trois coups avec la probabilité $\frac{1}{3}$, et la valeur du jeu est $0$&nbsp;: personne ne peut exploiter un joueur qui tire au hasard, et un joueur qui privilégie un coup peut être exploité par l'autre. Pour un nombre quelconque de stratégies, on trouve les stratégies optimales par la <b>programmation linéaire</b>. George Dantzig, l'inventeur de l'algorithme du simplexe, a raconté que John von Neumann lui avait expliqué en 1947 l'équivalence entre les jeux à somme nulle et la programmation linéaire.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Des jeux à somme nulle à l'équilibre de Nash</summary>
<p>Les jeux à somme nulle sont un cas particulier. Dans la plupart des situations réelles, ce que l'un gagne n'est pas ce que l'autre perd (commerce, coopération, dilemme du prisonnier). John von Neumann et Oskar Morgenstern ont fondé la théorie des jeux en 1944 avec <i>Theory of Games and Economic Behavior</i>. En 1950, John Nash a généralisé la notion de stratégie optimale à un nombre quelconque de joueurs et à des gains quelconques&nbsp;: un <b>équilibre de Nash</b> est un ensemble de stratégies (éventuellement mixtes) où aucun joueur n'a intérêt à changer de stratégie seul. Pour un jeu à somme nulle à deux joueurs, c'est exactement le couple de stratégies du théorème du minimax, c'est-à-dire le point col de la surface $V(p, q)$.</p>
</details>

<details class="exercice">
<summary class="exercice-titre">Trois exercices</summary>
<p><b>1.</b> Résoudre le jeu de matrice de gains $\begin{pmatrix} 2 & 5 \\ 4 & 3 \end{pmatrix}$ (point col éventuel, sinon stratégies mixtes optimales et valeur).</p>
<details class="solution">
<summary>Solution</summary>
<p>Les gains minimaux des lignes sont $2$ et $3$ (maximin $3$), les gains maximaux des colonnes sont $4$ et $5$ (minimax $4$). Comme $3 < 4$, il n'y a pas de point col. Avec $\Delta = 2 - 5 - 4 + 3 = -4$&nbsp;: $p^{\ast} = \frac{3 - 4}{-4} = \frac{1}{4}$, $q^{\ast} = \frac{3 - 5}{-4} = \frac{1}{2}$ et $V = \frac{6 - 20}{-4} = 3{,}5$.</p>
</details>
<p><b>2.</b> À «&nbsp;pile ou face&nbsp;», Bleu gagne $1$ si les deux joueurs montrent le même côté et perd $1$ sinon. Quelle est la stratégie optimale&nbsp;? Quelle est la valeur du jeu&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>La matrice est $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$, sans point col (maximin $-1$, minimax $1$). $\Delta = 4$, donc $p^{\ast} = \frac{1 - (-1)}{4} = \frac{1}{2}$, $q^{\ast} = \frac{1}{2}$ et $V = \frac{1 - 1}{4} = 0$. Chaque joueur doit jouer pile ou face au hasard, et le jeu est équitable.</p>
</details>
<p><b>3.</b> Montrer que $\underline{V} \le \overline{V}$ pour toute matrice de gains.</p>
<details class="solution">
<summary>Solution</summary>
<p>Soit $i_0$ une ligne qui réalise $\underline{V}$, c'est-à-dire telle que $\min_j a_{i_0 j} = \underline{V}$, et $j_0$ une colonne qui réalise $\overline{V}$, c'est-à-dire telle que $\max_i a_{i j_0} = \overline{V}$. Alors $\underline{V} \le a_{i_0 j_0}$ (c'est le minimum de sa ligne) et $a_{i_0 j_0} \le \overline{V}$ (c'est un élément de la colonne dont le maximum vaut $\overline{V}$), donc $\underline{V} \le \overline{V}$.</p>
</details>
</details>

{{< script "js/selles3d.js" "module" >}}
