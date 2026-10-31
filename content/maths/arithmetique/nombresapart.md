+++
title = "Nombres particuliers"
date = 2021-03-06T14:20:50+01:00
weight = 3
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
</style>


# Nombres particuliers

## Divisibilité et nombres premiers 

Les nombres premiers sont en quelque sorte les atomes des nombres, les objets primordiaux.

Euclide prouva qu'il en existe une infinité avec un joli exemple de démonstration par l'absurde.

<div id="preuve">

Supposons qu'il existe un nombre fini de nombres premiers et dressons-en la liste complète.<br>
Multiplions ensuite entre eux tous les nombres de cette liste et ajoutons $1$ au résultat pour obtenir le nombre $n$<br>
$n$ est-il premier&nbsp;?<br>
<ul style="margin:-1em 0 1em 0;">
<li>S'il l'est, on a trouvé un nouveau nombre premier absent de la liste. Contradiction.</li>
<li>S'il ne l'est pas, alors il doit être un produit de nombres premiers plus petits. Mais aucun des nombres premiers de la liste ne peut être un diviseur de $n$ puisque la division euclidienne par n'importe lequel donnera un reste de $1$. Donc $n$ doit avoir au moins un facteur premier absent de la liste. Contradiction.</li>
</ul>

</div>

<br>

L'énigme suivante joue sur la décomposition en facteurs premiers d'un entier.

{{< youtube-plus id="bpvzvnsjjDE" ratio="16x9" width="800px" rounded=true shadow=true >}}


<br>

Et cette vidéo explique une propriété de prime abord étonnante&nbsp;: si on retranche $1$ au carré d'un nombre premier, le résultat est divisible par $24$.

{{< youtube-plus id="IOGpTFJduaA" ratio="16x9" width="800px" rounded=true shadow=true >}}


<br>


## Algorithme d'Euclide


Un des plus anciens algorithmes connus. Sa formulation est simplissime (comme le montre le code Python ci-dessous) mais sa puissance est redoutable.


```python
def pgcd(a,b):
    if b == 0:
        return a
    else:
        return pgcd(b,a%b)
```


{{< youtube-plus id="70jd0Mthyl8" ratio="16x9" width="800px" rounded=true shadow=true >}}

Quand est-ce que l'algo galère le plus&nbsp;? Quand $a$ et $b$ sont deux nombres consécutifs de la suite de Fibonacci&nbsp;! Bref, l'étude de la complexité de l'algorithme d'Euclide fait intervenir le nombre d'or...

{{< youtube-plus id="X6WnBdmNYiM" ratio="16x9" width="800px" rounded=true shadow=true >}}

<br>

## Fractions continues


Les fractions continues permettent d'enquêter visuellement sur le degré de rationalité d'un nombre irrationnel en déterminant les fractions successives qui l'approximent le mieux.

Elles rendent plus transparents les différents compromis qu'on est amené à faire pour tenter de caler des nombres carrés dans des nombres ronds du fait de périodicités incompatibles. On explique ainsi les calendriers, les almanachs d'éclipses et les 12 notes de musique.


{{< youtube-plus id="zSnFffFo9bk" ratio="16x9" width="800px" rounded=true shadow=true >}}

Les fractions continues nous ont aussi été utiles pour l'étude de la complexité de l'algorithme d'Euclide avec lequel elles entretiennent un lien étroit.

<br>

## Nombre d'or

Le nombre d'or est une sorte de tarte à la crème des mathématiques. D'infinies élucubrations lui font tenir un rôle quasi mystique.

On ne peut nier cependant qu'il apparaît parfois dans des endroits étonnants. Reste seulement à démystifier sa présence.

La vidéo suivante explique ainsi comment suite de Fibonacci et nombre d'or apparaissent dans certains arrangements des plantes. Armé d'un peu de physique et des fractions continues, on comprend que leur présence est somme toute logique, voire triviale.


{{< youtube-plus id="_V4GjyvDTfI" ratio="4x3" width="640px" rounded=true shadow=true >}}


Le nombre d'or fait aussi son apparition dans l'étude de la complexité de l'algorithme d'Euclide comme on l'a vu plus haut.

Un [**autre exemple plus discutable**](https://www.nature.com/articles/s41598-017-05122-5) mais tournant autour des mêmes concepts développés dans les vidéos précédentes&nbsp;: l'inverse du nombre d'or serait le ratio optimal dans le jeu de l'ultimatum.

<br>

<h2><a href="../exponentielle">Nombre $\mathrm{e}$</a></h2>

L'autre grand nombre irrationnel a une origine plus tardive et moins spectaculaire que $\pi$&nbsp;: il apparaît la première fois au 17<sup>e</sup> dans une histoire d'intérêts composés... Baptisé par Euler, $\mathrm{e}$ a néanmoins rapidement débordé son étroit contexte de naissance financier pour surgir dans presque tous les domaines mathématiques.

Ce talent d'ubiquité vient pour une part de son lien avec la fraction $\mathbf{\frac{1}{k!}}$ qui émerge dans quatre univers mathématiques et physiques par le **même mécanisme géométrique de brisure de symétrie de permutation** ($\operatorname{Card}(\mathfrak{S}\_k) = k!$)&nbsp;:

| Volet & Domaine | Objet global de mesure $1$ | Symétrie brisée ($\mathfrak{S}\_k$) | Domaine résiduel de mesure $\frac{1}{k!}$ | Somme sur $k \ge 0$ |
| :--- | :--- | :--- | :--- | :--- |
| **[1. Intérêts composés](../../arithmetique/exponentielle/)** | $k$-uplets de périodes parmi $n$ ($n^k \times \frac{1}{n^k} = 1$) | Filiation chronologique des intérêts $1 \le i_1 < \dots < i_k \le n$ | Gain de $k$-ième génération $\binom{n}{k}\frac{1}{n^k} \to \frac{1}{k!}$ | $\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n = \mathrm{e}$ |
| **[2. Géométrie euclidienne](../../geometrie/simplexes/)** | Hypercube unité $[0, 1]^k$ | Ordre croissant des coordonnées $t_{\sigma(1)} \le \dots \le t_{\sigma(k)}$ | Simplexe canonique $\Delta_k = \\{0 \le t_1 \le \dots \le t_k \le 1\\}$ | $\sum_{k=0}^\infty \operatorname{Vol}_k(\Delta_k) = \mathrm{e}$ |
| **[2. Physique quantique (TQC)](../../geometrie/simplexes/#flèche-du-temps--dyson-et-wick)** | Hypercube des temps $[t', t]^k$ sous l'opérateur $T$ | Causalité temporelle ($t \ge t_1 \ge \dots \ge t_k \ge t'$) | Simplexe causal de la [série de Dyson](/physique/tqc/gifted_amateur/tqc7/#la-série-de-dyson) | $\hat U_I = T\exp\left(-\mathrm{i}\int \hat H_I\right)$ |
| **[3. Probabilités](../../proba/simplexes_proba)** | Tirages uniformes sur $[0, 1]^k$ ou $k$-uplets de points fixes | Monotonie ($U_1 \le \dots \le U_k$), cisaillement ($T_j = \sum_{i=1}^j U_i$) ou crible $\\{i_1 < \dots < i_k\\}$ | Survie $\mathbb{P}(N > k) = \frac{1}{k!}$ ou terme du crible $\frac{(-1)^k}{k!}$ | $\mathbb{E}[N] = \mathbb{E}[M] = \mathrm{e}$ et $\lim p_n = \mathrm{e}^{-1}$ |

