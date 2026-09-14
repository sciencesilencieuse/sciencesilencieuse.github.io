+++
title = "TQC-1"
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



# Théorie quantique des champs -- Partie 1

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

**L'oscillateur harmonique est la brique de base de toute la TQC&nbsp;!**

D'où viennent les particules&nbsp;? D'un problème d'oscillateurs. Un système ondulatoire, une fois décomposé en modes normaux, est une collection d'oscillateurs harmoniques indépendants&nbsp;; et chaque oscillateur quantifié ne peut absorber l'énergie que par paquets de $\hbar\omega$. Ces paquets ont tout d'une particule, et on va apprendre à les créer et à les détruire avec des opérateurs.

On parle de **seconde quantification** pour désigner cette obtention de particules à partir des ondes.

> **Première quantification**&nbsp;: les particules se comportent comme des ondes.<br>
>**Seconde quantification**&nbsp;: les ondes se comportent comme des particules.

Fil de la partie&nbsp;:
<ul>
<li><b>L'outil&nbsp;:</b> l'<a href="./#les-oscillateurs-harmoniques">oscillateur harmonique</a>, résolu sans polynômes de Hermite, à coups d'opérateurs d'échelle $\hat{a}$ et $\hat{a}^\dagger$. Tout le spectre sort de la seule relation $[\hat{a},\hat{a}^\dagger]=1$.</li>
<li><b>Le saut conceptuel&nbsp;:</b> la <a href="./#représentation-en-nombre-doccupation">représentation en nombre d'occupation</a>. On ne suit plus des fonctions d'onde, on compte des particules dans des états. L'échange de deux particules fait surgir un signe $\lambda=\pm 1$&nbsp;: bosons ou fermions, et le principe de Pauli en cadeau.</li>
<li><b>Les applications.</b> Le formalisme, appliqué à des électrons sur réseau, produit le <a href="./#modèle-des-liaisons-fortes-pour-lénergie-cinétique">modèle des liaisons fortes</a>, notre <a href="./#potentiel-à-deux-particules">premier diagramme de Feynman</a>, et le <a href="./#modèle-de-hubbard">modèle de Hubbard</a>, point de départ de la matière condensée moderne.</li>
</ul>

## Les oscillateurs harmoniques

### Un oscillateur seul

Une vidéo vieille comme tout sur l'oscillateur harmonique quantique qui traite pas mal des points de ce chapitre&nbsp;:

<div style="position:relative; width:640px; max-width:100%; height:480px; margin-left: auto; margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<iframe width="640" height="480"  src="https://www.youtube-nocookie.com/embed/so6-2mVI3qE?si=VQEg-hkLMpsyNf9s"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="max-width:100%"></iframe>
</div>


![](/tqcoh.png?width=100px)

Partons d'une masse $m$ accrochée à un ressort de constante de raideur $K$. La quantité de mouvement de la masse est donnée par $p=m\dot{x}$. L'énergie totale $E$ vaut la somme de l'énergie cinétique $p^2/2m$ et de l'énergie potentielle $\frac{1}{2}Kx^2$.<br>
En mécanique quantique, on remplace $p$ par l'opérateur[^0] impulsion $-\mathrm{i}\hbar\partial/\partial x$ et on obtient alors l'équation de Schrödinger d'un oscillateur harmonique&nbsp;:

[^0]: Un opérateur transforme une fonction en une autre fonction.

<p style="text-align:center;">
$\displaystyle
\left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+\frac{1}{2}K x^2\right)\psi=E\psi
$
</p>

Les solutions sont données par&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi_n(\xi)=\frac{1}{\sqrt{2^n n!}}\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}H_n(\xi)\,\mathrm{e}^{-\xi^2/2}
$
</p>

où les $H_n(\xi)$ sont des polynômes de Hermite et où $\xi=\sqrt{m\omega/\hbar}\\,x$.

![](/tqcohniveaux.png?width=800px)

Si ces fonctions propres ressemblent pas mal à des ondes, les valeurs propres $E_n=\left(n+\frac{1}{2}\right)\hbar\omega$ (avec $\omega=\sqrt{K/m}$) se rangent, elles, plutôt du côté particules. On remarque que pour $n=0$, l'énergie n'est pas nulle mais vaut $\hbar\omega/2$. C'est l'**énergie de point zéro**.

Ajouter un quantum d'énergie $\hbar\omega$ permet de monter d'un barreau l'échelle des énergies, ce que l'on a bien envie de modéliser par l'absorption d'une particule. On peut formaliser ça élégamment (et sans se salir les mains avec les polynômes de Hermite).<br>
On part du hamiltonien de l'oscillateur harmonique&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H}=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2\hat{x}^2
$
</p>

où on a réexprimé la constante de raideur : $K=m\omega^2$.

Le hamiltonien semble vouloir être factorisé en $\frac{1}{2}m\omega^2\left(\hat{x}-\frac{\mathrm{i}}{m\omega}\hat{p}\right)\left(\hat{x}+\frac{\mathrm{i}}{m\omega}\hat{p}\right)$, mais un problème se dresse&nbsp;: $\hat{x}$ et $\hat{p}$ ne commutent pas&nbsp;! En effet, $\left[\hat{x},\hat{p}\right]\equiv \hat{x}\hat{p}-\hat{p}\hat{x}=\mathrm{i}\hbar$.<br>
Par conséquent&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{1}{2}m\omega^2\left(\hat{x}-\frac{\mathrm{i}}{m\omega}\hat{p}\right)\left(\hat{x}+\frac{\mathrm{i}}{m\omega}\hat{p}\right)=\frac{1}{2}m\omega^2\hat{x}^2+\frac{\hat{p}^2}{2m}+\frac{\mathrm{i}\omega}{2}[\hat{x},\hat{p}]
$
</p>
Plutôt que $\hat{H}$, on obtient donc $\hat{H} -\frac{\hbar\omega}{2}$, le hamiltonien corrigé de l'énergie de point zéro. Cela ne semble pas un problème indépassable.

Les deux opérateurs $\hat{x}-\frac{\mathrm{i}}{m\omega}\hat{p}$ et $\hat{x}+\frac{\mathrm{i}}{m\omega}\hat{p}$ semblent voués à jouer un rôle important dans cette histoire. Ils sont adjoints[^1] l'un de l'autre (puisque $\hat{x}$ et $\hat{p}$ sont hermitiens[^2]) ce qui leur interdit d'être eux-mêmes hermitiens et donc de correspondre à une quelconque observable[^3].<br>

[^1]: L'opération adjointe est l'équivalent d'une symétrie complexe. Pour l'obtenir, on transpose l'opérateur (on inverse ses lignes et ses colonnes si on le voit comme une matrice) et on prend le conjugué complexe de ses nombres (on change le signe de la partie imaginaire $\mathrm{i}$ en $-\mathrm{i}$). Si l'on a un opérateur $\hat{A}$, son adjoint se note $\hat{A}^\dagger$.

[^2]: Un opérateur est dit hermitien s'il est égal à son propre adjoint ($\hat{A} = \hat{A}^\dagger$). En mécanique quantique, cette propriété est capitale&nbsp;: elle garantit que les valeurs propres de cet opérateur (les résultats possibles d'une mesure mathématique) sont strictement des nombres réels.

[^3]: Une observable une grandeur physique mesurable en laboratoire (comme la position, la vitesse, l'énergie). Puisqu'un cadran ou un détecteur ne peut afficher que des nombres réels (et non des nombres imaginaires), toute observable quantique doit obligatoirement être décrite par un opérateur hermitien.

Après un petit toilettage, introduisons les **opérateurs d'échelle**&nbsp;:



<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{a}=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}+\frac{\mathrm{i}}{m\omega}\hat{p}\right)
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{a}^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x}-\frac{\mathrm{i}}{m\omega}\hat{p}\right)
$
</p>

</div>

<br>

<div id="theo">

<p style="text-align:center;">
$\displaystyle
[\hat{a},\hat{a}^\dagger]=1
$
</p>

</div>

On peut inverser les définitions de $\hat{a}$ et $\hat{a}^\dagger$ pour obtenir&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{x}=\sqrt{\frac{\hbar}{2m\omega}}\left(\hat{a}+\hat{a}^\dagger\right)
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{p}=-\mathrm{i}\sqrt{\frac{\hbar m \omega}{2}}\left(\hat{a}-\hat{a}^\dagger\right)
$
</p>

</div>

Et le hamiltonien devient&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\hat{H}=\hbar\omega\left(\hat{a}^\dagger\hat{a}+\frac{1}{2}\right)
$
</p>
</div>


Appelons $|n\rangle$ un état propre de $\hat{a}^\dagger\hat{a}$ pour une valeur propre $n$. Alors $|n\rangle$ sera aussi vecteur propre de $\hat{H}$ mais pour une valeur propre $\hbar\omega(n+\frac{1}{2})$. Si $n$ vaut 0, 1, 2, ...., on aura bien retrouvé les valeurs propres d'un oscillateur harmonique&nbsp;!

<div id="preuve">

Montrons d'abord que $n\geq 0$&nbsp;:

<p style="text-align:center;">
$\displaystyle
n=\langle n|\hat{a}^\dagger\hat{a}|n\rangle = |\hat{a}|n\rangle|^2\geq 0
$
</p>

Montrons ensuite que $n$ ne prend que des valeurs entières.

On commence par définir l'**opérateur nombre** de quantas de vibration $\hat{n} = \hat{a}^\dagger\hat{a}$. On a alors $\hat{n}|n\rangle = n|n\rangle$.<br>
Nombre de quoi&nbsp;? $n$ correspond au numéro du barreau d'échelle atteint et donc au nombre de quanta d'énergie $\hbar\omega$ qu'il a fallu ajouter au système dans son état fondamental.

On peut réécrire le hamiltonien $\hat{H}=\hbar\omega\left(\hat{n}+\frac{1}{2}\right)$. Et donc $\hat{H}|n\rangle = \left(\hat{n}+\frac{1}{2}\right) \hbar\omega |n\rangle$. $|n\rangle$ est ainsi un raccourci simple pour les vilains $\psi_n(\xi)$.

De $[\hat{a},\hat{a}^\dagger]=1$, on déduit $\hat{a}\hat{a}^\dagger = 1 +\hat{a}^\dagger\hat{a}=1+\hat{n}$ et donc 
$\hat{n}\hat{a}^\dagger|n\rangle = \hat{a}^\dagger\hat{a}\hat{a}^\dagger|n\rangle=\hat{a}^\dagger(1+\hat{n})|n\rangle=(n+1)\hat{a}^\dagger|n\rangle$. Par conséquent, $\hat{a}^\dagger|n\rangle$ est un état propre de $\hat{H}$ pour une valeur propre un rang au-dessus de celle de $|n\rangle$. $\hat{a}^\dagger$ a donc pour effet d'ajouter un quantum d'énergie&nbsp;! C'est l'<b>opérateur de création</b>.

En utilisant la relation de commutation $[\hat{n},\hat{a}]=\hat{n}\hat{a}-\hat{a}\hat{n}=\hat{a}^\dagger\hat{a}\hat{a}-{\color{#970E53}\hat{a}\hat{a}^\dagger}\hat{a}=\hat{a}^\dagger\hat{a}\hat{a}-{\color{#970E53}(1+\hat{a}^\dagger\hat{a})}\hat{a}=-\hat{a}$, on obtient $\hat{n}\hat{a}|n\rangle = (-\hat{a}+\hat{a}\hat{n})|n\rangle=(n-1)\hat{a}|n\rangle$.<br>
$\hat{a}|n\rangle$ est un état propre de $\hat{H}$ pour une valeur propre un rang en-dessous de celle de $|n\rangle$. $\hat{a}$ fait donc descendre d'un étage. C'est l'<b>opérateur d'annihilation</b>.

En appliquant de manière répétée l'opérateur $\hat{a}$ à $|n\rangle$, on pourrait finir avec une énergie négative, ce qui semble physiquement blasphématoire. Il faut donc qu'il existe un état fondamental $|0\rangle$ tel que $\hat{n}|0\rangle = 0$.

Et en appliquant maintenant $\hat{a}^\dagger$ depuis $|0\rangle$, on se retrouve bien avec des valeurs de $n$ entières !

</div>

Après normalisation, on obtient&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\hat{a}|n\rangle = \sqrt{n}|n-1\rangle
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{a}^\dagger|n\rangle = \sqrt{n+1}|n+1\rangle
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Preuve&nbsp;:</summary>

On a montré que $\hat{a}|n\rangle$ est proportionnel à $|n-1\rangle$&nbsp;: $\hat{a}|n\rangle=k|n-1\rangle$.<br>
Prenons la norme de cet état&nbsp;: $|\hat a|n\rangle|^2 = \langle n|\hat{a}^\dagger\hat{a}|n\rangle=|k|^2\langle n-1|n-1\rangle=|k|^2$ (vu que les états propres de l'oscillateur harmonique sont normalisés).<br>
Mais on peut remarquer aussi que $\langle n|\hat{a}^\dagger\hat{a}|n\rangle=\langle n|\hat{n}|n\rangle =n$.<br>
On obtient par conséquent $k=\sqrt{n}$ (cela suppose $k$ réel mais comme les états sont définis à une phase près, on peut toujours choisir la phase afin que $k$ soit bien réel).<br>
On a aussi montré que $\hat{a}^\dagger|n\rangle=c|n+1\rangle$ et $|a^\dagger|n\rangle|^2 = \langle n|\hat{a}\hat{a}^\dagger|n\rangle=|c|^2\langle n+1|n+1\rangle=|c|^2$.<br>
Et comme $\hat{a}\hat{a}^\dagger=1+\hat{n}$, $\langle n|\hat{a}\hat{a}^\dagger|n\rangle=\langle n|1+\hat{n}|n\rangle=n+1$.<br>
Et donc $c=\sqrt{n+1}$
</details>
</div>

On vérifie bien que $\hat{a}|0\rangle=0$. $|0\rangle$ est effectivement l'état fondamental de l'oscillateur harmonique, on ne peut pas aller plus bas.

![](/tqcechelle.png?width=300px)

Et on retrouve aussi l'énergie de point zéro $E_0=\frac{1}{2}\hbar\omega$&nbsp;: 

<p style="text-align:center;">
$\displaystyle
\hat{H}|0\rangle=\hbar\omega\left(\hat{n}+\frac{1}{2}\right)|0\rangle=\frac{1}{2}\hbar\omega|0\rangle
$
</p> 

Montons les barreaux de l'échelle en créant à chaque fois ce qui a tout l'air d'une particule d'énergie $\hbar\omega$&nbsp;:<br>
$\displaystyle\hat{a}^\dagger|0\rangle=|1\rangle$,<br>
$\displaystyle\hat{a}^\dagger|1\rangle=\sqrt{2}|2\rangle \rightarrow |2\rangle=\frac{(\hat{a}^\dagger)^2}{\sqrt{2}}|0\rangle$,<br>
$\displaystyle\hat{a}^\dagger|2\rangle=\sqrt{3}|3\rangle \rightarrow |3\rangle=\frac{(\hat{a}^\dagger)^3}{\sqrt{3\times 2}}|0\rangle$...<br>
Et en généralisant, $\displaystyle |n\rangle=\frac{(\hat{a}^\dagger)^n}{\sqrt{n!}}|0\rangle$.

**Le problème ondulatoire de départ a spontanément produit des particules&nbsp;!**


{{%notice%}}
Des [détails supplémentaires](../../oh) sur la quantification de l'oscillateur harmonique et les opérateurs d'échelle afin de se forger une meilleure intuition.
{{%/notice%}}
<br>

### $N$ oscillateurs couplés

Supposons maintenant qu'on ait affaire à un troupeau de $N$ oscillateurs harmoniques indépendants, sans couplage. le hamiltonien devient $\displaystyle \hat{H}=\sum_{k=1}^N\hat{H}\_k$ qu'on peut réécrire&nbsp;: 

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{H}=\sum_{k=1}^N\hbar\omega_k\left(\hat{a}^\dagger_k\hat{a}^{\phantom{\dagger}}_k+\frac{1}{2}\right)
$
</p>

</div>

<br>

<div id="def">

Un état général du système est donné par $|n_1,n_2,\cdots,n_N\rangle$. C'est la **représentation en nombre d'occupation**. Et on a&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
|n_1,n_2,\cdots,n_N\rangle=\frac{1}{\sqrt{n_1 !n_2 !\cdots n_N !}}(\hat{a}_1^\dagger)^{n_1}(\hat{a}_2^\dagger)^{n_2}\cdots (\hat{a}_N^\dagger)^{n_N}|0,0,\cdots,0\rangle
$
</p>
Ou de manière plus succincte&nbsp;:

<p style="text-align:center;">
$\displaystyle
|\{n_k\}\rangle=\prod_k\frac{1}{\sqrt{n_k !}}(\hat{a}^\dagger_k)^{n_k}|0\rangle
$
</p>

</div>

**Couplons** maintenant tous ces petits ressorts.

![](/tqcohcoupled.png?width=1000px)

Le hamiltonien qui tient compte de l'interaction entre les oscillateurs s'écrit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H}=\sum_j\frac{\hat{p}_j^2}{2m}+\frac{1}{2}K(\hat{x}_{j+1}-\hat{x}_j)^2
$
</p>

**Les excitations de ce système se comportent exactement comme un jeu d'oscillateurs indépendants**. Par quel miracle&nbsp;? La **transformée de Fourier** permet de diagonaliser le hamiltonien. En effet, si les masses sont bien couplées dans l'espace réel, **les excitations se découplent dans l'espace réciproque**.

En supposant que les oscillateurs sont séparés d'une distance $a$, les transformées de Fourier de $x_j$ et $p_j$ s'écrivent&nbsp;:<a id="oscillcoup"></a>
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
x_j = \frac{1}{\sqrt{N}}\sum_k \tilde{x}_k \mathrm{e}^{\mathrm{i}kja}
$
</p>

<p style="text-align:center;">
$\displaystyle
 p_j = \frac{1}{\sqrt{N}}\sum_k \tilde{p}_k \mathrm{e}^{\mathrm{i}kja}
$
</p>

où $\tilde{x}_k$ et $\tilde{p}_k$ sont les nouveaux opérateurs dans l'espace des modes de Fourier.

En substituant dans le hamiltonien, on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H}=\sum_k\left[\frac{1}{2m}\hat{p}_k\hat{p}_{-k}+\frac{1}{2}m\omega_k^2\hat{x}_k\hat{x}_{-k}\right]
$
</p>

où on a laissé tomber les tildes et où $\omega_k^2=(4K/m)\sin^2(ka/2)$.

<div id="preuve">

Astuce pour gérer des expressions du type&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{1}{N} \sum_j \sum_{k q} \tilde{p}_k \tilde{p}_q \mathrm{e}^{\mathrm{i}(k+q) j a}
$
</p>
 
 L'idée est de commencer par la somme spatiale en utilisant l'identité $\sum_j \mathrm{e}^{\mathrm{i}\left(k-k^{\prime}\right) j a}=N \delta_{k k^{\prime}}$. Cela donne&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\sum_{k q} \tilde{p}_k \tilde{p}_q \delta_{k,-q}
$
</p>

Puis on utilise le Kronecker sur la somme des moments. Cela fixe $q=-k$, nous laissant avec une somme sur un seul indice&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\sum_k \tilde{p}_k \tilde{p}_{-k}
$
</p>

</div>

**Chaque mode de Fourier $k$ se comporte donc comme un oscillateur harmonique indépendant**.

On peut à nouveau introduire des opérateurs de création et d'annihilation&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{a}_k = \sqrt{\frac{m\omega_k}{2\hbar}}\left(\hat{x}_k+\frac{\mathrm{i}}{m\omega_k}\hat{p}_k\right)
$
</p>

<p style="text-align:center;">
$\displaystyle
 \hat{a}^\dagger_k = \sqrt{\frac{m\omega_k}{2\hbar}}\left(\hat{x}_{-k}-\frac{\mathrm{i}}{m\omega_k}\hat{p}_{-k}\right)
$
</p>

À partir d'eux, on peut isoler $\hat{x}_k$ et $\hat{p}_k$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{x}_k=\sqrt{\frac{\hbar}{2 m \omega_k}}\left(\hat{a}_k+\hat{a}_{-k}^{\dagger}\right) 
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{p}_k= -\mathrm{i} \sqrt{\frac{m \hbar \omega_k}{2}}\left(\hat{a}_k-\hat{a}_{-k}^{\dagger}\right)
$
</p>


 En réinjectant dans le hamiltonien, on obtient finalement, après réindexation et utilisation de la relation de commutation $\left[\hat{a}\_k, \hat{a}\_{k^{\prime}}^{\dagger}\right]=\delta_{k, k^{\prime}}$&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{H}=\sum_{k=1}^N\hbar\omega_k\left(\hat{a}_k^\dagger\hat{a}^{\phantom{\dagger}}_k+\frac{1}{2}\right)
$
</p>

On appelle ces modes étiquetés par le vecteur d'onde $k$ des **phonons**. Et chacun de ces phonons peut porter des multiples entiers du quantum d'énergie $\hbar\omega_k$.

</div>

Les paquets d'énergie que peut accepter le phonon ressemblent à des particules. Pourquoi alors ne pas considérer les phonons eux-mêmes comme des particules&nbsp;?

**C'est le cœur de la seconde quantification&nbsp;: un problème ondulatoire peut s'exprimer comme une collection d'oscillateurs et produit donc des particules.**

<br>

## Représentation en nombre d’occupation

On va se débarrasser des fonctions d'ondes en passant de la représentation $(x,p)$ à un nouveau type de représentation.

On place une particule dans une boite de taille $L$ (on prend dans la suite $\hbar=1$). 

L'opérateur impulsion $\hat{p}$ pour un mouvement dans la direction $x$ est $\hat{p}=-\mathrm{i}\frac{\partial}{\partial x}$. Les solutions de l'équation de Schrödinger pour la particule dans la boite sont les états propres de l'opérateur impulsion, les ondes planes $\psi(x)=\frac{1}{\sqrt{L}}\mathrm{e}^{\mathrm{i}px}$. Utiliser des conditions aux limites périodiques ($\psi(x+L)=\psi(x)$) entraîne que $\mathrm{e}^{\mathrm{i}p(x+L)}={\mathrm{e}}^{\mathrm{i}px}$ et implique donc que $\mathrm{e}^{\mathrm{i}pL}=1$. Satisfaire la condition nécessite que $pL=2\pi m$ avec $m$ entier. Cela impose donc une quantification des états d'impulsion que peut prendre la particule dans la boite&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_m = \frac{2\pi m}{L}
$
</p>

Si on a plusieurs particules sans interaction dans la boite, l'énergie totale est donnée par $\sum_m n_{p_m}E_{p_m}$ où $n_{p_m}$ est le nombre de particules dans l'état $|p_m\rangle$.

Plutôt que de noter un état à plusieurs particules identiques de cette façon $|p_1 p_2 p_1 p_3 p_5\rangle$ (ici pour 5 particules), on va juste lister le nombre de particules dans chacun des états, ce qui donne pour l'exemple précédent $|21101\rangle$. On dit qu'on passe alors à une **représentation en nombre d'occupation** qu'on a déjà rencontrée dans le chapitre précédent.

Agir avec le hamiltonien sur un état dans la représentation en nombre d'occupation permet d'obtenir l'énergie vue un peu plus haut&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H}|n_1n_2n_3\ldots\rangle=\left[\sum_m n_{p_m}E_{p_m}\right]|n_1n_2n_3\ldots\rangle
$
</p>
On retrouve une structure en niveaux d'énergie similaire à celle d'un système de $N$ oscillateurs harmoniques indépendants différents (en laissant tomber l'énergie de point zéro, on trouverait effectivement une énergie totale valant $E=\sum_{k=1}^N n_k \hbar\omega_k$). Dans les deux cas, on somme pour chaque mode (chaque niveau d'énergie), le nombre de quanta qu'il contient.

Dans le cas d'une collection d'oscillateurs harmoniques, on a vu dans le chapitre précédent qu'on peut se débarrasser de quasiment tous les vecteurs d'état (excepté le vide $|0\rangle$) grâce à l'opérateur de création&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
|n_1 n_2\ldots\rangle = \prod_k\frac{1}{(n_k !)^{\frac{1}{2}}}(\hat{a}_k^\dagger)^{n_k}|0\rangle
$
</p>

</div>

On crée ainsi un état général de plusieurs oscillateurs harmoniques en agissant sur l'état du vide. Mais on veut aller plus loin qu'une création de quanta dans des oscillateurs... **L'ambition est une création de particules dans des états d'impulsion donnés.** On veut un opérateur de création $\hat{a}^\dagger_{p_m}$ pour faire naître une particule dans l'état d'impulsion $|p_m\rangle$. Peut-on juste changer $k$ en $p_m$ pour passer de la création d'un quantum dans l'oscillateur $k$ à une particule dans l'état d'impulsion $|p_m\rangle$&nbsp;? Presque... Juste une petite question de symétrie à régler.

Considérons par exemple un système à deux états d'impulsion $p_1$ et $p_2$ décrits dans la représentation en nombre d'occupation $|n_1n_2\rangle$. Chacun de ses états est formé en agissant sur l'état du vide $|0\rangle$. Définissons $\hat{a}\_{p_1}^\dagger|0\rangle=|10\rangle$ et $\hat{a}\_{p_2}^\dagger|0\rangle=|01\rangle$ et ajoutons une nouvelle particule dans l'état inoccupé&nbsp;: $\hat{a}\_{p_2}^\dagger\hat{a}\_{p_1}^\dagger|0\rangle\propto|11\rangle$, $\hat{a}\_{p_1}^\dagger\hat{a}\_{p_2}^\dagger|0\rangle\propto|11\rangle$ où la constante de proportionnalité reste à déterminer.

Suivant qu'on ajoute une particule dans l'état $p_1$ puis une autre dans l'état $p_2$ ou dans l'ordre inverse, on doit finir avec le même état $|11\rangle$, ce qui implique $\hat{a}\_{p_1}^\dagger\hat{a}\_{p_2}^\dagger = \lambda\hat{a}\_{p_2}^\dagger\hat{a}\_{p_1}^\dagger$ où $\lambda$ est une constante.

Deux possibilités évidentes pour $\lambda$&nbsp;: $\lambda=\pm 1$. Elles correspondent à des fonctions d'onde qui sont soit symétriques, soit antisymétriques lors de l'échange des deux particules. Les particules sont appelées **bosons** dans le cas symétrique et **fermions** dans le cas antisymétrique. Ces deux cas correspondent à deux relations de commutation possibles entre les opérateurs de création et d'annihilation.

#### Cas 1&nbsp;: $\lambda=1$, les bosons

On a dans ce cas $\hat{a}\_{p_1}^\dagger\hat{a}\_{p_2}^\dagger = \hat{a}\_{p_2}^\dagger\hat{a}\_{p_1}^\dagger$ et donc (en étiquetant les opérateurs de manière plus générale), 

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\left[\hat{a}_i^\dagger,\hat{a}_j^\dagger\right]=0
$
</p>

</div>

Les opérateurs de création pour différents états de particule commutent. 

On a aussi $\left[\hat{a}\_i,\hat{a}\_j\right]=0$ et on définit $\left[\hat{a}\_i,\hat{a}\_j^\dagger\right]=\delta_{ij}$.

On obtient donc un formalisme identique à celui des oscillateurs harmoniques et on peut alors construire un état général à plusieurs particules sur le même modèle&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
|n_1n_2\cdots\rangle=\prod_m\frac{1}{(n_{p_m}!)^{\frac{1}{2}}}(\hat{a}^\dagger_{p_m})^{n_{p_m}}|0\rangle
$
</p>

</div>

Les particules ainsi décrites sont des bosons. 

Trois propriétés saillantes&nbsp;:
- On peut placer tout nombre de particules dans chaque état quantique (**on peut les empiler dans un même état d'impulsion**). 
- Ces états sont **symétriques** lors de l'échange de deux particules.
- Enfin, **l'ordre** d'ajout des particules **ne modifie pas l'état final** obtenu&nbsp;: $\hat{a}^\dagger_{p_1}\hat{a}^\dagger_{p_2}|0\rangle=\hat{a}^\dagger_{p_2}\hat{a}^\dagger_{p_1}|0\rangle=|1_{p_1}1_{p_2}\rangle$.

Action des opérateurs sur un état général&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
&\hat{a}_i^\dagger |n_1\cdots n_i\cdots\rangle = \sqrt{n_i+1}|n_1\cdots n_i+1\cdots\rangle\\
&\hat{a}_i |n_1\cdots n_i\cdots\rangle = \sqrt{n_i}|n_1\cdots n_i-1\cdots\rangle
\end{aligned}
$
</p>
</div>


#### Cas 2&nbsp;: $\lambda=-1$, les fermions

On va noter les opérateurs des fermions $\hat{c}\_i^\dagger$ pour les différentier de ceux des bosons. 

<div id="theo">

On obtient $\left\\{\hat{c}\_i^\dagger,\hat{c}\_j^\dagger\right\\} \equiv \hat{c}\_i^\dagger \hat{c}\_j^\dagger + \hat{c}\_j^\dagger\hat{c}\_i^\dagger = 0$ où on a défini l'**anticommutateur** de deux opérateurs. 

</div>

Les opérateurs des fermions anticommutent&nbsp;: $\hat{c}\_i^\dagger\hat{c}\_j^\dagger+\hat{c}\_j^\dagger\hat{c}\_i^\dagger=0$.

En prenant $i=j$, on obtient $\hat{c}\_i^\dagger\hat{c}\_i^\dagger+\hat{c}\_i^\dagger\hat{c}\_i^\dagger=0\Rightarrow \hat{c}\_i^\dagger\hat{c}_i^\dagger=0$. Essayer de caser deux particules dans le même état d'impulsion aboutit à leur annihilation complète. 

<div id="theo">

C'est le **principe de Pauli**&nbsp;; chaque état quantique ne peut être occupé que par un et un seul fermion&nbsp;!

</div>

On a aussi $\left\\{\hat{c}\_i,\hat{c}\_j\right\\}=0$ et on définit $\left\\{\hat{c}\_i,\hat{c}\_j^\dagger\right\\}=\delta_{ij}$ pour pouvoir appliquer ici aussi l'analogie avec les oscillateurs harmoniques. Mais gare maintenant à **l'ordre des opérateurs** qui **n'est plus indifférent&nbsp;!**

Action des opérateurs sur un état général&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
&\hat{c}_i^\dagger |n_1\cdots n_i\cdots\rangle = (-1)^{\sum_i}\sqrt{1-n_i}\,|n_1\cdots n_i+1\cdots\rangle\\
&\hat{c}_i  |n_1\cdots n_i\cdots\rangle = (-1)^{\sum_i}\sqrt{n_i}\,|n_1\cdots n_i-1\cdots\rangle
\end{aligned}
$
</p>
</div>

Où $(-1)^{\sum_i}=(-1)^{n_1+n_2+\cdots+n_{i-1}}$. Cela donne un facteur $(-1)$ pour chaque particule placée à gauche de l'état étiqueté par $n_i$ dans le vecteur d'état.
  
<div id="preuve">

<details>

<summary>Prenons un exemple pour s'aguerrir et vérifier la formule</summary>

Pour échanger de place de particules, on va leur faire suivre le processus suivant $|110\rangle\rightarrow|101\rangle\rightarrow|011\rangle\rightarrow|110\rangle$.

Bouger une particule de place consiste à détruire la particule à un endroit et à la créer à un autre.<br>
Déplacer une particule de l'état 2 vers l'état 3 s'écrit donc $\hat{a}^\dagger_{3}\hat{a}\_2|110\rangle$. L'enchaînement total proposé peut être décrit par l'enchaînement $\hat{a}^\dagger_{1}\hat{a}\_3\hat{a}^\dagger_{2}\hat{a}\_1\hat{a}^\dagger_{3}\hat{a}_2|110\rangle$. Et le résultat est censé être $\pm|110\rangle$ ($+$ pour des bosons et $-$ pour des fermions).

Vérifions que les relations de commutation donnent les bons résultats. S'il s'agit de bosons, on peut échanger de place deux opérateurs agissant sur des états différents ($[\hat{a}\_i,\hat{a}_j]=0$).

$\hat{a}^\dagger_{1}\hat{a}\_3\hat{a}^\dagger_{2}\hat{a}\_1\hat{a}^\dagger_{3}\hat{a}\_2|110\rangle=\hat{a}\_3\hat{a}^\dagger_{3}\hat{a}^\dagger_{1}\hat{a}\_1\hat{a}^\dagger_{2}\hat{a}_2|110\rangle$

Comme $\hat{a}^\dagger_i\hat{a}\_i=\hat{n}_i$, l'opérateur nombre qui compte le nombre de particules dans l'état $i$, on obtient&nbsp;:

$\hat{a}\_3\hat{a}^\dagger_{3}\hat{a}^\dagger_{1}\hat{a}\_1\hat{a}^\dagger_{2}\\hat{a}\_2|110\rangle=\hat{a}\_3\hat{a}^\dagger_{3}\hat{n}\_1\hat{n}\_2|110\rangle =(1)\times(1)\times \hat{a}\_3\hat{a}^\dagger_{3}|110\rangle$

En utilisant $[\hat{a}\_3,\hat{a}^\dagger_3]=1$, on obtient&nbsp;:

$\hat{a}\_3\hat{a}^\dagger_{3}|110\rangle=(1+\hat{n}_3)|110\rangle = |110\rangle + 0 =|110\rangle$

Passons aux fermions. L'échange entre deux particules s'accompagne maintenant d'un changement de signe.

$\hat{c}^\dagger_{1}\hat{c}\_3\hat{c}^\dagger_{2}\hat{c}\_1\hat{c}^\dagger_{3}\hat{c}\_2|110\rangle = -\hat{c}\_3\hat{c}^\dagger_{3}\hat{c}^\dagger_{1}\hat{c}\_1\hat{c}^\dagger_{2}\hat{c}\_2|110\rangle$ car on compte un nombre impair d'échanges. Et $-\hat{c}\_3\hat{c}^\dagger_{3}\hat{c}^\dagger_{1}\hat{c}\_1\hat{c}^\dagger_{2}\hat{c}\_2|110\rangle = -(1-\hat{n}_3)|110\rangle = -|110\rangle$. Youpi&nbsp;!

</details>

</div>
  
<br>  

On était jusque-là confiné dans une boite, mais que se passe-t-il si on écarte ses murs infiniment&nbsp;? On passe alors à la **limite du continu**. Le symbole de Kronecker $\delta_{ij}$ des commutateurs devient une fonction delta de Dirac $\delta^{(3)}(\boldsymbol{p})$ et les sommes discrètes deviennent des intégrales.
  
Le commutateur se transforme donc en&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\left[\hat{a}_\boldsymbol{p},\hat{a}^\dagger_\boldsymbol{q}\right]=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})
$
</p>

</div>
  
et le hamiltonien&nbsp;:
   
<div id="theo">   

<p style="text-align:center;">
$\displaystyle
\hat{H}=\int\mathrm{d}^3 p\, E_\boldsymbol{p}\hat{a}^\dagger_\boldsymbol{p}\hat{a}_\boldsymbol{p}
$
</p>
   
</div>
   
<br>
   
<div id="preuve">
   
Pour montrer que cette nouvelle formulation est correcte, on va retrouver à partir d'elle les bonnes fonctions d'onde dans l'espace des positions.
    
Pour des états à une seule particule, on a&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle \boldsymbol{p}|\boldsymbol{p'}\rangle=\langle 0|\hat{a}_\boldsymbol{p}\hat{a}^\dagger_\boldsymbol{p'}|0\rangle
$
</p>

Et avec les relations de commutation, on obtient&nbsp;: 

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle \boldsymbol{p}|\boldsymbol{p'}\rangle=\langle 0|\left[\delta^{(3)}(\boldsymbol{p}-\boldsymbol{p'})\pm \hat{a}^\dagger_\boldsymbol{p'}\hat{a}_\boldsymbol{p} \right]|0\rangle=\delta^{(3)}(\boldsymbol{p}-\boldsymbol{p'})
$
</p>

Vérifions que c'est la relation attendue en passant en représentation position.

Par un changement de base, $|\boldsymbol{x}\rangle = \int\mathrm{d}q\\,\phi^*\_\boldsymbol{q}(\boldsymbol{x})|\boldsymbol{q}\rangle$

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 5px 5px;">
<summary>
changement de base
</summary>

L'état $|\boldsymbol{x}\rangle$ peut s'écrire dans une nouvelle base en utilisant la relation de fermeture $1=\int\mathrm{d}^3q\\,|\boldsymbol{q}\rangle\langle\boldsymbol{q}|$ de telle sorte que $|\boldsymbol{x}\rangle = \int\mathrm{d}^3q\\,|\boldsymbol{q}\rangle\langle\boldsymbol{q}|\boldsymbol{x}\rangle$. Et comme $\langle\boldsymbol{x}|\boldsymbol{q}\rangle=\phi\_\boldsymbol{q}(\boldsymbol{x})$ et $\langle\boldsymbol{q}|\boldsymbol{x}\rangle=\phi^\*\_\boldsymbol{q}(\boldsymbol{x})$, on obtient bien $|\boldsymbol{x}\rangle = \int\mathrm{d}q\\,\phi^*\_\boldsymbol{q}(\boldsymbol{x})|\boldsymbol{q}\rangle$.
</details>

Cela donne $\langle \boldsymbol{x}|\boldsymbol{p}\rangle = \int\mathrm{d}^3q\\,\phi\_\boldsymbol{q}(\boldsymbol{x})\langle\boldsymbol{q}|\boldsymbol{p}\rangle=\phi\_\boldsymbol{p}(\boldsymbol{x})$.<br>
C'est bien ce qui était attendu, mais rien de bien folichon.

Passons maintenant au cas d'un état à deux particules&nbsp;: $\langle \boldsymbol{p'}\boldsymbol{q'}|\boldsymbol{q}\boldsymbol{p}\rangle=\langle 0|\hat{a}\_\boldsymbol{p'}\hat{a}\_\boldsymbol{q'}\hat{a}^\dagger\_\boldsymbol{q}\hat{a}^\dagger\_\boldsymbol{p}|0\rangle$.

Par utilisation des relations de commutation, on arrive à $\langle \boldsymbol{p'}\boldsymbol{q'}|\boldsymbol{q}\boldsymbol{p}\rangle=\delta^{(3)}(\boldsymbol{p'}-\boldsymbol{p})\delta^{(3)}(\boldsymbol{q'}-\boldsymbol{q})\pm\delta^{(3)}(\boldsymbol{p'}-\boldsymbol{q})\delta^{(3)}(\boldsymbol{q'}-\boldsymbol{p})$ avec le signe plus pour les bosons et moins pour les fermions.<br>

Déterminons à nouveau la fonction d'onde dans l'espace des positions grâce au changement de base&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
|\boldsymbol{x}\boldsymbol{y}\rangle = \frac{1}{\sqrt{2!}}\int \mathrm{d}^3p'\mathrm{d}^3 q' \phi^*_\boldsymbol{p'}(\boldsymbol{x})\phi^*_\boldsymbol{q'}(\boldsymbol{y})|\boldsymbol{p'}\boldsymbol{q'}\rangle
$
</p>

 où le facteur $\frac{1}{\sqrt{2!}}$ compense le double comptage $q'p'$/$p'q'$ dû au fait que la somme n'est pas restreinte. Cela donne&nbsp;:
     
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{1}{\sqrt{2!}}\int \mathrm{d}^3p'\mathrm{d}^3 q' \phi_\boldsymbol{p'}(\boldsymbol{x})\phi_\boldsymbol{q'}(\boldsymbol{y}) \langle \boldsymbol{p'}\boldsymbol{q'}|\boldsymbol{p}\boldsymbol{q}\rangle = \frac{1}{\sqrt{2!}}[\phi_\boldsymbol{p}(\boldsymbol{x})\phi_\boldsymbol{q}(\boldsymbol{y})\pm \phi_\boldsymbol{q}(\boldsymbol{x})\phi_\boldsymbol{p}(\boldsymbol{y})]
$
</p>

On retrouve l'expression d'un état à deux particules&nbsp;!

</div>

Cette nouvelle formulation de la mécanique quantique semble donc valide et dans la suite, elle va porter ses fruits.

<br>

## Seconde quantification

On considère à nouveau ici des particules non relativistes dans une boîte. Cela simplifie pas mal mais cela permet déjà d'étudier le comportement d'électrons dans un solide.


<div id="preuve">

<details>
<summary>Particule dans une boîte de volume $\mathcal{V}$</summary>

Un état $|\alpha\rangle$ se décrit en représentation position $\psi_\alpha(\boldsymbol{x})=\langle\boldsymbol{x}|\alpha\rangle$ et en représentation impulsion  $\tilde{\psi}_\alpha(\boldsymbol{p})=\langle\boldsymbol{p}|\alpha\rangle$ et comme $\langle\boldsymbol{p}|\alpha\rangle=\int\mathrm{d}^3x\\,\langle\boldsymbol{p}|\boldsymbol{x}\rangle\langle\boldsymbol{x}|\alpha\rangle$, on déduit $\langle\boldsymbol{p}|\boldsymbol{x}\rangle=\frac{1}{\sqrt{\mathcal{V}}}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}$ (par identification avec la transformée de Fourier $\tilde{\psi}\_\alpha(\boldsymbol{p})=\frac{1}{\sqrt{\mathcal{V}}}\int\mathrm{d}^3 x\\,\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}\psi\_\alpha(\boldsymbol{x})$).<br>
La transformée de Fourier inverse est discrète puisque les valeurs de $\boldsymbol{p}$ le sont&nbsp;: $\psi\_\alpha(\boldsymbol{x})=\frac{1}{\sqrt{\mathcal{V}}}\sum\_\boldsymbol{p}\mathrm{e}^{\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}\tilde{\psi}\_\alpha(\boldsymbol{p})$.<br>
Et on a aussi $\int\mathrm{d}^3 x\\,\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}} = \mathcal{V}\delta\_{\boldsymbol{p},0}$ et $\frac{1}{\mathcal{V}}\sum\_\boldsymbol{p}\mathrm{e}^{\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}=\delta^{(3)}(\boldsymbol{x})$.

</details>

</div>

On sait d'ores et déjà créer une particule d'impulsion $\boldsymbol{p}$ à partir de l'état du vide en appliquant l'opérateur de création&nbsp;: $\hat{a}^\dagger\_\boldsymbol{p}|0\rangle$. On obtient ainsi une particule complètement localisée dans l'espace des impulsions et donc s'étendant sur tout l'espace des coordonnées. Supposons maintenant que l'on veuille créer une **particule localisée** dans l'espace des coordonnées. Dans ce but, on construit des nouveaux opérateurs de création et d'annihilation appelés **opérateur de champ** par transformée de Fourier discrète des opérateurs $\hat{a}^\dagger\_\boldsymbol{p}$ et $\hat{a}\_\boldsymbol{p}$.

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{\psi}^\dagger(\boldsymbol{x}) = \frac{1}{\sqrt{\mathcal{V}}}\sum_\boldsymbol{p}\hat{a}^\dagger_\boldsymbol{p}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{\psi}(\boldsymbol{x}) = \frac{1}{\sqrt{\mathcal{V}}}\sum_\boldsymbol{p}\hat{a}_\boldsymbol{p}\mathrm{e}^{\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}
$
</p>


</div>

**Ces opérateurs de champ peuvent créer et annihiler une particule en une position $\boldsymbol{x}$.**

Pour s'en convaincre, explorons l'état $|\Psi\rangle = \hat{\psi}^\dagger(\boldsymbol{x})|0\rangle$. On a d'une part $\sum\_\boldsymbol{q}\hat{n}\_\boldsymbol{q}|\Psi\rangle = |\Psi\rangle$, ce qui signifie que $|\Psi\rangle$ est un état propre de l'opérateur nombre d'occupation pour la valeur propre 1 et donc qu'une seule particule a été créée. 

<div id="preuve">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\sum_{\boldsymbol{q}}\hat{n}_{\boldsymbol{q}}\vert{}\Psi\rangle 
&= \sum_{\boldsymbol{q}} \hat{a}^\dagger_{\boldsymbol{q}}\hat{a}_{\boldsymbol{q}} \left( \frac{1}{\sqrt{\mathcal{V}}}\sum_{\boldsymbol{p}}\hat{a}^\dagger_{\boldsymbol{p}}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}} \right) \vert{}0\rangle \\
&= \frac{1}{\sqrt{\mathcal{V}}} \sum_{\boldsymbol{q}} \sum_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}} \left( \hat{a}^\dagger_{\boldsymbol{q}} \hat{a}_{\boldsymbol{q}} \hat{a}^\dagger_{\boldsymbol{p}} \right) \vert{}0\rangle
\end{aligned}
$
</p>
Or $\hat{a}_{\boldsymbol{q}} \hat{a}^\dagger_{\boldsymbol{p}} \vert{}0\rangle = (\delta_{\boldsymbol{q},\boldsymbol{p}} \pm \hat{a}^\dagger_{\boldsymbol{p}} \hat{a}_{\boldsymbol{q}}) \vert{}0\rangle = \delta_{\boldsymbol{q},\boldsymbol{p}} \vert{}0\rangle \pm 0 = \delta_{\boldsymbol{q},\boldsymbol{p}} \vert{}0\rangle$

D'où

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\sum_{\boldsymbol{q}}\hat{n}_{\boldsymbol{q}}\vert{}\Psi\rangle 
&=  \frac{1}{\sqrt{\mathcal{V}}} \sum_{\boldsymbol{q}} \sum_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}} \hat{a}^\dagger_{\boldsymbol{q}} \delta_{\boldsymbol{q},\boldsymbol{p}} \vert{}0\rangle \\
& = \frac{1}{\sqrt{\mathcal{V}}} \sum_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}} \hat{a}^\dagger_{\boldsymbol{p}} \vert{}0\rangle \\
& = 1 \cdot \vert{}\Psi\rangle
\end{aligned}
$
</p>

</div>

D'autre part $\langle\boldsymbol{y}|\Psi\rangle=\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})$, ce qui prouve que la particule créée est bien localisée en $\boldsymbol{x}$.

<div id="preuve">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\langle\boldsymbol{y}|\Psi\rangle = \langle\boldsymbol{y}|\psi^\dagger(\boldsymbol{x})|0\rangle &= \frac{1}{\sqrt{\mathcal{V}}}\sum_\boldsymbol{p}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}\langle\boldsymbol{y}|\boldsymbol{p}\rangle\\
&=\frac{1}{\sqrt{\mathcal{V}}}\sum_\boldsymbol{p}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot(\boldsymbol{x}-\boldsymbol{y})}\\
&=\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})
\end{aligned}
$
</p>

</div>

Les opérateurs de champ satisfont les relations de commutation suivantes&nbsp;:

- pour des bosons&nbsp;: $\left[\hat{\psi}(\boldsymbol{x}),\hat{\psi}^\dagger(\boldsymbol{y})\right]=\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})$, $\left[\hat{\psi}^\dagger(\boldsymbol{x}),\hat{\psi}^\dagger(\boldsymbol{y})\right]=0$ et $\left[\hat{\psi}(\boldsymbol{x}),\hat{\psi}(\boldsymbol{y})\right]=0$

- et pour des fermions&nbsp;: $\left\\{\hat{\psi}(\boldsymbol{x}),\hat{\psi}^\dagger(\boldsymbol{y})\right\\}=\delta^{(3)}(\boldsymbol{x}-\boldsymbol{y})$, $\left\\{\hat{\psi}^\dagger(\boldsymbol{x}),\hat{\psi}^\dagger(\boldsymbol{y})\right\\}=0$ et $\left\\{\hat{\psi}(\boldsymbol{x}),\hat{\psi}(\boldsymbol{y})\right\\}=0$

C'est le moment&nbsp;: on va maintenant apprendre à upgrader les opérateurs issus de la première quantification en opérateurs de seconde quantification&nbsp;! 

Rappelons-nous d'abord qu'un opérateur $\hat{\mathcal{A}}$ associe à l'état quantique $|\psi\rangle$, élément de l'**espace de Hilbert**, un nouvel état quantique $\hat{\mathcal{A}}|\psi\rangle$. 

On va supposer ici que $\hat{\mathcal{A}}$ n'agit que sur une seule particule à la fois (contrairement à un opérateur potentiel d'interaction par exemple). En utilisant doublement la relation de fermeture et en partant de l'égalité triviale $\hat{\mathcal{A}}=\hat{\mathcal{A}}$, on peut obtenir la décomposition de $\hat{\mathcal{A}}$ sur une base donnée de l'espace de Hilbert&nbsp;: 

<p style="text-align:center;">
$\displaystyle
\hat{\mathcal{A}}=\sum_{\alpha,\beta}|\alpha\rangle\langle\alpha|\hat{\mathcal{A}}|\beta\rangle\langle\beta|=\sum_{\alpha,\beta}\mathcal{A}_{\alpha\beta}|\alpha\rangle\langle\beta|
$
</p>

où les $\mathcal{A}_{\alpha\beta}=\langle\alpha|\hat{\mathcal{A}}|\beta\rangle$ sont les éléments de matrice de la décomposition de l'opérateur, ils donnent l'amplitude de la transition d'un état $|\beta\rangle$ vers un état $|\alpha\rangle$.

L'idée va être de passer de cette transition entre états à un transfert de particules (mort de l'une suivie de la naissance d'une autre).

L'espace de Hilbert permet de décrire l'état d'une particule. L'**espace de Fock** rend possible, lui, la description d'états à $N$ particules (l'espace de Fock $\mathcal{F}$ inclut tous les états à $N$-particules pour toutes les valeurs de $N$&nbsp;: $\mathcal{F}=\bigoplus_{N=0}^\infty \mathcal{F}\_{\\! N}=\mathcal{F}\_{\\! 0}\oplus\mathcal{F}\_{\\! 1}\oplus\cdots$ où $\mathcal{F}\_{\\! 0}=\\{|0\rangle\\}$ est un ensemble ne contenant que l'état du vide et $\mathcal{F}\_{\\! 1}$ est l'espace de Hilbert. Les sous-espaces $\mathcal{F}\_{\\! N\geq 2}$ doivent être symétrisés pour des bosons et antisymétrisés pour des fermions (donc $\mathcal{F}\_{\\! 2}$ n'est pas seulement $\mathcal{F}\_{\\! 1}\otimes\mathcal{F}\_{\\! 1}$ mais seulement sa partie symétrique ou antisymétrique). Les opérateurs de création permettent de passer d'un élément de $\mathcal{F}\_{\\! N}$ à un élément de $\mathcal{F}_{\\! N+1}$ et les opérateurs d'annihilation font l'inverse.

La **version seconde quantification $\hat{A}$ de l'opérateur $\hat{\mathcal{A}}$** qui correspond à l'upgrade d'un opérateur à une particule agissant sur l'espace de Hilbert vers un opérateur multi-particules agissant sur l'espace de Fock est simplement donnée par&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\hat{A} = \sum_{\alpha\beta}\mathcal{A}_{\alpha\beta}\,\hat{a}^\dagger_\alpha\hat{a}_\beta
$
</p>

</div>

Les éléments de matrice $\mathcal{A}\_{\alpha\beta}$ sont les mêmes qu'au-dessus et ils continuent à représenter l'ensemble des transitions possibles d'une particule seule. Mais $\hat{A}$ opère bien maintenant sur un état à plusieurs particules. On commence par utiliser $\hat{a}\_\beta$ pour retirer une particule dans l'état $|\beta\rangle$, on multiplie par l'élément de matrice $\mathcal{A}\_{\alpha\beta}$ donnant l'amplitude de la transition vers le nouvel état, et enfin on utilise $\hat{a}^\dagger_\alpha$ pour placer la particules dans l'état final $|\alpha\rangle$.

![](/tqcopchamp.png?width=150px)


Dans les exemples suivants, on va construire pas à pas un **hamiltonien** simple d'une particule unique soumise à un potentiel en **version seconde quantification**. L'idée est de se familiariser avec le formalisme et constater qu'il nous redonne bien les résultats qu'on attend.


<div id="preuve">

La relation de fermeture $\hat{1}=\sum_\alpha|\alpha\rangle\langle\alpha|$ est l'exemple le plus simple de $\hat{\mathcal{A}} = \sum_{\alpha\beta}\mathcal{A}\_{\alpha\beta}\hat{a}^\dagger_\alpha\hat{a}\_\beta$ avec $\mathcal{A}\_{\alpha\beta}=\delta_{\alpha\beta}$.

Sa promotion à l'étage de la seconde quantification est simplement $\hat{n}=\sum_\alpha\hat{a}^\dagger_\alpha\hat{a}_\alpha$, l'opérateur nombre qui compte un pour chaque particule dans l'état sur lequel il agit.

</div>

<br>

<div id="preuve">

L'opérateur impulsion usuel peut s'écrire $\hat{\mathcal{A}}=\hat{\boldsymbol{p}}=\sum\_\boldsymbol{p}\boldsymbol{p}|\boldsymbol{p}\rangle\langle\boldsymbol{p}|$ qui est promu automatiquement en $\hat{\boldsymbol{p}}=\sum\_\boldsymbol{p}\boldsymbol{p}\\,\hat{a}^\dagger\_\boldsymbol{p}\hat{a}\_\boldsymbol{p}=\sum\_\boldsymbol{p}\boldsymbol{p}\\,\hat{n}\_\boldsymbol{p}$.

De même, une fonction de l'opérateur impulsion $\hat{\mathcal{A}}=f(\boldsymbol{p})$ devient $\hat{A}=\sum\_\boldsymbol{p}f(\boldsymbol{p})\hat{a}^\dagger\_\boldsymbol{p}\hat{a}\_\boldsymbol{p}=\sum\_\boldsymbol{p}f(\boldsymbol{p})\hat{n}\_\boldsymbol{p}$.

Un exemple particulier d'une telle fonction&nbsp;: le hamiltonien d'une particule libre $\frac{\boldsymbol{\hat p}^2}{2m}$.

Le hamiltonien d'une particule libre devient ainsi en seconde quantification&nbsp;:

<div id="grosseformule" style="border-radius:5px;padding:5px;background-color:#F5F5F5;width:fit-content;margin:auto;">

$\displaystyle\hat{H}=\sum\_\boldsymbol{p}\frac{\boldsymbol{p}^2}{2m}\hat{n}
\_\boldsymbol{p}$

</div>

$\hat{H}$ est diagonal dans la base des états nombre d'occupation puisqu'ils sont des états propres de $\hat{n}\_\boldsymbol{p}$. Et de fait, pour diagonaliser tout hamiltonien (ce qui revient à trouver les énergies des états propres), on n'a qu'à l'exprimer en termes de nombres d'opérateurs. Donc ici, on dit finalement que l'énergie totale du système est donnée par la somme des énergies $\frac{\boldsymbol{p}^2}{2m}$ de toutes les particules. Ça paraît sensé.

</div>

<br>

<div id="preuve">

Et si l'opérateur est une fonction de $\hat{\boldsymbol{x}}$ plutôt que $\hat{\boldsymbol{p}}$&nbsp;?<br>

La formule de promotion reste valable si les états $|\alpha\rangle$ et $|\beta\rangle$ sont des états de position. Il suffit de remplacer les opérateurs de création et d'annihilation par les opérateurs de champ, et la somme sur les impulsions par une intégrale sur l'espace.<br>

On peut ainsi écrire l'opérateur $\hat{V}$ en version seconde-quantification&nbsp;: 

<p style="text-align:center;">
$\displaystyle
 \hat{V}=\int\mathrm{d}^3 x\,\hat{\phi}^\dagger(\boldsymbol{x})V(\boldsymbol{x})\hat{\phi}(\boldsymbol{x})
$
</p>


Et si on préfère repasser dans l'espace des impulsions&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{V}=\frac{1}{\mathcal{V}}\int\mathrm{d}^3 x\,\sum_{\boldsymbol{p}_1,\boldsymbol{p}_2} \hat{a}^\dagger_{\boldsymbol{p}_1}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}_1\cdot\boldsymbol{x} }V(\hat{\boldsymbol{x}})\hat{a}_{\boldsymbol{p}_2}\mathrm{e}^{\mathrm{i}\boldsymbol{p}_2\cdot\boldsymbol{x} }
$
</p>

En introduisant la transformée de Fourier de $V(\boldsymbol{x})$, $\tilde{V}\_{\boldsymbol{p}}=\frac{1}{\mathcal{V}}\int\mathrm{d}^3 x\\,V(\boldsymbol{x})\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x} }$, la formule s'éclaircit&nbsp;:

<div id="grosseformule" style="border-radius:5px;padding:5px;background-color:#F5F5F5;width:fit-content;margin:auto;">

$\displaystyle \hat{V}=\sum_{\boldsymbol{p}\_1,\boldsymbol{p}\_2}\tilde{V}\_{\boldsymbol{p}\_1-\boldsymbol{p}\_2}\hat{a}^\dagger_{\boldsymbol{p}\_1}\hat{a}\_{\boldsymbol{p}\_2}$

</div>

Schématisation du processus&nbsp;: une particule arrive avec l'impulsion $\boldsymbol{p}\_2$, interagit avec un champ de potentiel (représenté par $\tilde{V}\_{\boldsymbol{p}\_1-\boldsymbol{p}\_2}$) puis repart avec l'impulsion $\boldsymbol{p}_1$.

Rq&nbsp;: l'opérateur $\hat{V}$ n'est pas diagonal puisque les opérateurs $\hat{a}$ créent et annihilent des particules avec des impulsions différentes.

</div>

<br>

<div id="preuve">

Étudions l'influence du potentiel sur les états et valeurs propres du hamiltonien suivant&nbsp;:<a id="hamiltonien"></a>

<p style="text-align:center;">
$\displaystyle
\hat{H} = E_0 \sum_{\boldsymbol{p}} \hat{d}_{\boldsymbol{p}}^\dagger \hat{d}_{\boldsymbol{p}} - \frac{V}{2} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2} 
\hat{d}_{\boldsymbol{p}_1}^\dagger \hat{d}_{\boldsymbol{p}_2}
$
</p>

On limite le système à 3 niveaux d'énergie, ce qui permet d'exprimer les états dans une base $|n\_{\boldsymbol{p}\_1}n\_{\boldsymbol{p}\_2}n\_{\boldsymbol{p}\_3}\rangle$.

Commençons par débrancher le potentiel ($V=0$). Une particule placée dans ce système ne peut être que dans un des trois états suivants&nbsp;: $|100\rangle$, $|010\rangle$ ou $|001\rangle$.

Rebranchons le potentiel et voyons comment il agit sur chacun des trois états&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{V}{2} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2} \hat{d}_{\boldsymbol{p}_1}^\dagger \hat{d}_{\boldsymbol{p}_2} |100\rangle = \frac{V}{2} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2} \hat{d}_{\boldsymbol{p}_1}^\dagger \hat{d}_{\boldsymbol{p}_2} |010\rangle = \frac{V}{2} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2} \hat{d}_{\boldsymbol{p}_1}^\dagger \hat{d}_{\boldsymbol{p}_2} |001\rangle = \frac{V}{2} \left( |100\rangle + |010\rangle + |001\rangle \right)
$
</p>

Une forme matricielle permet de synthétiser l'information&nbsp;:

<p style="text-align:center;">
$\displaystyle
 H = \left[E_0 \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} - \frac{V}{2} \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}\right]
$
</p>


Les valeurs propres de cette équation sont $\varepsilon=E_0,E_0,E_0-\frac{3V}{2}$. En effet, la matrice remplie de 1 est de rang 1, donc deux de ses valeurs propres sont nulles. Et comme la trace est la somme des valeurs propres, sa troisième valeur propre vaut nécessairement 3.

L'état fondamental du système $|\Omega\rangle$ a donc l'énergie $E_0-\frac{3V}{2}$ et l'état propre correspondant s'écrit $|\Omega\rangle = \frac{1}{\sqrt{3}} \left( |100\rangle + |010\rangle + |001\rangle \right)$.<br>
L'état fondamental est donc une superposition 1:1:1 des trois états d'impulsion desquels on est parti.

</div>

<br>


Quel est l'équivalent de la densité de probabilité d'une fonction d'onde dans le langage de la seconde quantification&nbsp;? La densité de particules en un point $\boldsymbol{x}$&nbsp;!<br>

<div id="def">

L'**opérateur densité** $\hat{\rho}(\boldsymbol{x})$ est donné par&nbsp;:
<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\hat{\rho}(\boldsymbol{x}) &= \hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{x})\\
&=\frac{1}{\mathcal{V}} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2} \mathrm{e}^{-\mathrm{i} (\boldsymbol{p}_1 - \boldsymbol{p}_2) \cdot \boldsymbol{x}} \, \hat{a}^\dagger_{\boldsymbol{p}_1} \hat{a}_{\boldsymbol{p}_2}
\end{aligned}
$
</p>

</div>


On vérifie que le terme de densité de particule est adapté puisqu'en intégrant sur tout l'espace, on retrouve le nombre de particules&nbsp;: $\int \mathrm{d}^3x\hat{\rho}(\boldsymbol{x})= \sum_{\boldsymbol{p}\_1 \boldsymbol{p}\_2} \delta_{\boldsymbol{p}\_2,\boldsymbol{p}\_1} \hat{a}^\dagger\_{\boldsymbol{p}\_1}  \hat{a}\_{\boldsymbol{p}\_2} =  \sum\_\boldsymbol{p} \hat{n}\_\boldsymbol{p}$

Cet opérateur permet de réécrire l'opérateur énergie potentielle d'une particule unique soumise à un potentiel extérieur comme&nbsp;: 

<div id="grosseformule" style="border-radius:5px;padding:5px;background-color:#F5F5F5;width:fit-content;margin:auto;">

$\displaystyle \hat{V} = \int \mathrm{d}^3 x \\, V(\boldsymbol{x}) \hat{\rho}(\boldsymbol{x})$</span>.

</div>

<br>

Le cadre non-relativiste dans lequel on se place jusqu'ici est limité mais il permet déjà de jouer avec des modèles de matière condensée. Finissons donc le chapitre en appliquant notre nouveau formalisme à des électrons se déplaçant sur un réseau d'atomes.

### Modèle des liaisons fortes pour l'énergie cinétique

Travaillons dans une base où $\hat{c}^\dagger_i$ crée un électron sur un site du réseau étiqueté $i$. Comme l'énergie cinétique d'une particule est d'autant plus grande que celle-ci est spatialement confinée (dans le cas d'un puits infini de largeur $L$, l'énergie cinétique vaut $E_n = \frac{1}{2m}\left( \frac{n\pi}{L}\right)^2$), on va considérer qu'un saut d'un site $j$ vers un site $i$ permet d'économiser l'énergie cinétique $t_{ij}$ (ce terme dépend d'une façon ou d'une autre du recouvrement entre les orbitales atomiques du réseau). Le hamiltonien somme tous les sauts possibles&nbsp;: 

<p style="text-align:center;">
$\displaystyle
\hat{H} = \sum_{ij}(-t_{ij})\hat{c}^\dagger_i\hat{c}_j
$
</p>

Chaque terme de la somme correspond à un processus où une particule est annihilée au site $j$ puis recréée au site $i$, modélisant un saut et sauvant ainsi l'énergie $t_{ij}$.

![](/tqcresij.png?width=300px)

On va d'abord considérer le cas le plus simple où $t_{ij}=t$ pour des voisins immédiats et $t_{ij}=0$ sinon. Le hamiltonien devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H} = -t\sum_{i\tau}\hat{c}^\dagger_i\hat{c}_{i+\tau}
$
</p>

où la somme sur $\tau$ se fait sur les plus proches voisins.

La combinaison bilinéaire $\hat{c}^\dagger_i\hat{c}_j$ rend le hamiltonien non diagonal. Pour le diagonaliser, on passe à nouveau en impulsion via les transformées de Fourier&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H} =  \sum_{\boldsymbol{k}} E_{\boldsymbol{k}}\hat{c}^\dagger_{\boldsymbol{k}} \hat{c}_{\boldsymbol{k}}
$
</p>

où la relation de dispersion est donnée par $E\_{\boldsymbol{k}}=- \sum_{\tau} t \mathrm{e}^{\mathrm{i} \boldsymbol{k} \cdot \boldsymbol{r}\_{\tau}}$.

Pour un réseau carré où $\tau$ parcourt les vecteurs $(a,0)$, $(-a,0)$, $(0,a)$ et $(0,-a)$, on obtient $E_{\boldsymbol{k}} = -2t \left( \cos(k_x a) + \cos(k_y a) \right)$

![](/tqcdispersion.png?width=400px)

On a tracé ci-dessus les contours du profil énergétique dans l'espace réciproque (l'énergie est constante sur une ligne). Pour $t>0$, l'énergie est minimale au centre $(k_x,k_y)=(0,0)$, ce qui correspond à un électron délocalisé, occupant tout le réseau et donc sans mouvement.


### Potentiel à deux particules

Ajoutons un deuxième électron capable d'interagir avec le premier.<br>
Pour la promotion seconde quantification de $\mathcal{A}_{\alpha\beta\gamma\delta}=\langle\alpha,\beta|\hat{A}|\gamma,\delta\rangle$ on peut tenter intuitivement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{A} =
\sum_{\alpha\beta\gamma\delta} A_{\alpha\beta\gamma\delta} \hat{a}^\dagger_\alpha \hat{a}^\dagger_\beta \hat{a}_\gamma \hat{a}_\delta
$
</p>

L'opérateur à deux particules typique est le potentiel $\hat{V}$. Et il sera le plus souvent fonction des coordonnées spatiales. Son expression impliquant les opérateurs de champ est alors&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} =
\frac{1}{2}
\int \mathrm{d}^3 x\, \mathrm{d}^3 y \, \hat{\psi}^\dagger(\boldsymbol{x}) \hat{\psi}^\dagger(\boldsymbol{y}) V(\boldsymbol{x}, \boldsymbol{y}) \hat{\psi}(\boldsymbol{y}) \hat{\psi}(\boldsymbol{x})
$
</p>

Le $\frac{1}{2}$ compense le double comptage des interactions. L'ordre des opérateurs n'est pas anodin&nbsp;! Celui utilisé est appelé **ordre normal** et sa vertu principale est d'assurer que l'opérateur $\hat{V}$ ait une valeur moyenne prédite (espérance quantique) nulle pour l'état de vide ($\langle 0|\hat{V}|0\rangle=0$).

On restreint le potentiel à la forme $V(\boldsymbol{x}-\boldsymbol{y})$ ne dépendant que de la séparation relative des particules (cela va garantir la conservation de l'impulsion dans l'interaction) et on décompose en modes d'impulsion les opérateurs champ&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} = \frac{1}{2\mathcal{V}^2} \int \mathrm{d}^3x \,\mathrm{d}^3 y \!\!\sum_{\boldsymbol{p}_1 \boldsymbol{p}_2 \boldsymbol{p}_3 \boldsymbol{p}_4} \mathrm{e}^{\mathrm{i}(-\boldsymbol{p}_1 \cdot \boldsymbol{x} - \boldsymbol{p}_2 \cdot \boldsymbol{y} + \boldsymbol{p}_3 \cdot \boldsymbol{y} + \boldsymbol{p}_4 \cdot \boldsymbol{x})}
 \hat{a}^\dagger_{\boldsymbol{p}_1} \hat{a}^\dagger_{\boldsymbol{p}_2} V(\boldsymbol{x} - \boldsymbol{y}) \hat{a}_{\boldsymbol{p}_3} \hat{a}_{\boldsymbol{p}_4}
$
</p>

Changement de variables et jeu sur les indices aboutissent à&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} = \frac{1}{2} \sum_{\boldsymbol{p}_1 \boldsymbol{p}_2 \boldsymbol{q}} \tilde{V}_{\boldsymbol{q}} \,\hat{a}^\dagger_{\boldsymbol{p}_1 + \boldsymbol{q}} \hat{a}^\dagger_{\boldsymbol{p}_2 - \boldsymbol{q}} \hat{a}_{\boldsymbol{p}_2} \hat{a}_{\boldsymbol{p}_1}
$
</p>

où $\tilde{V}\_\boldsymbol{q}$ est la transformée de Fourier du potentiel.

La formule peut s'interpréter comme une diffusion dans l'espace des impulsions qui se représente conventionnellement par un dessin appelé **diagramme de Feynman**.

![](/tqcfeyn1.png?width=400px)

Une particule arrive avec une impulsion $\boldsymbol{p}\_2$, émet une particule porteuse de force d'impulsion $\boldsymbol{q}$, réduisant ainsi son impulsion finale à $\boldsymbol{p}\_2-\boldsymbol{q}$. La particule porteuse de force est absorbée par une autre particule dont l'impulsion passe alors de $\boldsymbol{p}\_1$ à $\boldsymbol{p}\_1+\boldsymbol{q}$. On constate que l'impulsion est conservée aux points de croisement du diagramme.

Pour réussir à évaluer l'énergie facilement, l'idée est de transformer toutes les combinaisons d'opérateurs en opérateurs nombre. Mais on se heurte à la non diagonalité du potentiel (les problèmes impliquant une énergie potentielle ne peuvent généralement pas être résolus de manière exacte). Malgré cela, le potentiel à deux particules peut nous mener à des richesses physiques insoupçonnées (magnétisme, superfluidité, supraconductivité,...).

### Modèle de Hubbard

Le modèle de Hubbard est central en matière condensée. Il permet de capturer les implications physiques de la compétition entre énergie cinétique (qui favorise la délocalisation des électrons) et énergie potentielle (qui favorise leur localisation).

Le hamiltonien du modèle de Hubbard est construit à partir de nos deux ingrédients précédents&nbsp;: le hamiltonien du modèle de liaisons fortes pour modéliser l'énergie cinétique et le potentiel à deux particules pour modéliser les interactions electron-electron&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H} = \sum_{ij} \left(-t_{ij} \hat{c}^\dagger_i \hat{c}_j\right) + \frac{1}{2} \sum_{ijkl} \hat{c}^\dagger_i \hat{c}^\dagger_j V_{ijkl} \hat{c}_k \hat{c}_l
$
</p>

Et comme les électrons possèdent un spin $\sigma$ qui peut pointer soit vers le haut ($|\uparrow\rangle$), soit vers le bas ($|\downarrow\rangle$), le hamiltonien devient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H} = \sum_{ij\sigma} (-t_{ij}) \hat{c}^\dagger_{i\sigma} \hat{c}_{j\sigma} + \frac{1}{2} \sum_{ijkl\sigma\sigma'} \hat{c}^\dagger_{i\sigma} \hat{c}^\dagger_{j\sigma'} V_{ijkl} \hat{c}_{k\sigma'} \hat{c}_{l\sigma}
$
</p>

On suppose ici que les spins ne peuvent pas basculer. Comme l'interaction entre électrons vient de l'interaction de Coulomb, elle est indépendante de l'orientation du spin. Mais pour simplifier, on supposera que l'interaction coulombienne n'est notable que lorsque les électrons sont sur le même site. Les électrons interagissent donc via une énergie potentielle constante $U=V_{iiii}$. Mais comme le principe de Pauli impose que deux électrons sur le même site aient des spins opposés, le hamiltonien devient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H} = \sum_{ij\sigma} (-t_{ij}) \hat{c}^\dagger_{i\sigma} \hat{c}_{j\sigma} + U \sum_i \hat{n}_{i\uparrow} \hat{n}_{i\downarrow}
$
</p>

Bien que simple d'allure, obtenir les états propres est souvent une tâche complexe et ceux-ci sont généralement fortement corrélés.

<div id="preuve">

Simplifions à l'extrême avec un réseau de seulement deux sites, et un seul électron avec un spin haut $|\uparrow\rangle$. L'électron peut être soit sur le premier site, ce que l'on note $|\uparrow,0\rangle$ (spin haut sur le site 1, rien sur le site 2), soit sur le second $|0,\uparrow\rangle$ (rien sur le site 1, spin haut sur le site 2).<br>
Un état général est une combinaison de ces deux états $|\psi\rangle = a|\uparrow,0\rangle+b|0,\uparrow\rangle$ et le hamiltonien de Hubbard peut s'écrire dans cette base&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H} =
\begin{pmatrix}
0 & -t \\
-t & 0
\end{pmatrix}
$
</p>

En diagonalisant, on obtient un état fondamental $|\psi\rangle=\frac{1}{\sqrt{2}}(|\uparrow,0\rangle+|0,\uparrow\rangle )$ pour une énergie $E=-t$, et un état excité $|\psi\rangle=\frac{1}{\sqrt{2}}(|\uparrow,0\rangle-|0,\uparrow\rangle )$ pour une énergie $E=t$.

Ajoutons un électron dans le système. S'il a le même spin, la solution est simplement $|\uparrow,\uparrow\rangle$ et l'énergie associée est $E=0$ (pas d'interaction possible puisque les deux électrons ne peuvent pas occuper le même site et ils ne peuvent pas sauter d'un site à l'autre, ils sont bloqués).<br>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 5px 5px;">
<summary>
Montrons-le par le calcul&nbsp;:
</summary>
Pour la partie potentiel, on obtient bien 0 puisque $U (\hat{n}_{1\uparrow} \hat{n}_{1\downarrow}+\hat{n}_{2\uparrow} \hat{n}_{2\downarrow})|\uparrow,\uparrow\rangle=U(1\times 0+1\times 0)|\uparrow,\uparrow\rangle = 0$ (puisque l'opérateur qui compte les spins bas trouve toujours zéro).<br>
Et pour la partie cinétique, on ne garde que les termes de spin haut de le hamiltonien&nbsp;: $-t (\hat{c}^\dagger_{1\uparrow} \hat{c}_{2\uparrow}+\hat{c}^\dagger_{2\uparrow} \hat{c}_{1\uparrow})$. Et on réécrit $|\uparrow,\uparrow\rangle$ comme $\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{2\uparrow}|0\rangle$.<br>
<div style="overflow-x:auto;">
$-t (\hat{c}^\dagger_{1\uparrow} \hat{c}_{2\uparrow}+\hat{c}^\dagger_{2\uparrow} \hat{c}_{1\uparrow})\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{2\uparrow}|0\rangle=-t \hat{c}^\dagger_{1\uparrow} \hat{c}_{2\uparrow}\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{2\uparrow}|0\rangle-t\hat{c}^\dagger_{2\uparrow} \hat{c}_{1\uparrow}\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{2\uparrow}|0\rangle=t \hat{c}^\dagger_{1\uparrow} \hat{c}_{2\uparrow}\hat{c}^\dagger_{2\uparrow}\hat{c}^\dagger_{1\uparrow}|0\rangle-t\hat{c}^\dagger_{2\uparrow} \hat{c}_{1\uparrow}\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{2\uparrow}|0\rangle=t \hat{c}^\dagger_{1\uparrow}(1-\hat{n}_{2\uparrow})\hat{c}^\dagger_{1\uparrow}|0\rangle-t\hat{c}^\dagger_{2\uparrow}(1-\hat{n}_{1\uparrow})\hat{c}^\dagger_{2\uparrow}|0\rangle = t  \cancel{\hat{c}^\dagger_{1\uparrow}  \hat{c}^\dagger_{1\uparrow} }|0\rangle - t\hat{c}^\dagger_{1\uparrow}\cancel{\hat{n}_{2\uparrow}|\uparrow,0\rangle}- t\cancel{\hat{c}^\dagger_{2\uparrow}\hat{c}^\dagger_{2\uparrow}}|0\rangle+t\hat{c}^\dagger_{2\uparrow}\cancel{\hat{n}_{1\uparrow}|0,\uparrow\rangle}=0$</div>
</details>

S'ils sont de spins opposés, une base possible est $\\{|\uparrow\downarrow,0\rangle,|\uparrow,\downarrow\rangle,|\downarrow,\uparrow\rangle,|0,\uparrow\downarrow\rangle\\}$. Et dans cette base, le hamiltonien de Hubbard s'écrit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{H} = 
\begin{pmatrix}
U & -t & t & 0 \\
-t & 0 & 0 & -t \\
t & 0 & 0 & t \\
0 & -t & t & U
\end{pmatrix}
$
</p>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 5px 5px;">
<summary>
Détaillons juste l'action de le hamiltonien sur $|\uparrow\downarrow,0\rangle$ pour s'en convaincre&nbsp;:
</summary>

Terme potentiel&nbsp;: $U \hat{n}\_{1\uparrow}\hat{n}\_{1\downarrow}|\uparrow\downarrow,0\rangle = U\times 1\times 1=U$ et $U \hat{n}\_{2\uparrow}\hat{n}\_{2\downarrow}|\uparrow\downarrow,0\rangle = U\times 0\times 0=0$ (puisque l'opérateur $\hat{n}$ ne fait que compter le nombres de particules dans un site donné).

Terme cinétique&nbsp;: comme $i$ et $j$ doivent être différents, on a 4 termes dans la somme&nbsp;: $(-t) \hat{c}^\dagger_{1\uparrow} \hat{c}\_{2\uparrow}+(-t) \hat{c}^\dagger_{2\uparrow} \hat{c}\_{1\uparrow}+(-t) \hat{c}^\dagger_{1\downarrow} \hat{c}\_{2\downarrow}+(-t) \hat{c}^\dagger_{2\downarrow} \hat{c}\_{1\downarrow}$.<br>
Seuls les deux termes contenant un opérateur d'annihilation sur le site 1 ne donneront pas un résultat nul. Il nous reste $-t(\hat{c}^\dagger_{2\uparrow} \hat{c}\_{1\uparrow} +\hat{c}^\dagger_{2\downarrow} \hat{c}\_{1\downarrow})$.<br>
Appliquons cette somme d'opérateurs à $|\uparrow\downarrow,0\rangle$ qu'on peut aussi écrire $\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{1\downarrow}|0\rangle$. 

Le premier terme nous donne
<div style="overflow-x:auto;">$-t\hat{c}^\dagger_{2\uparrow} \hat{c}\_{1\uparrow} \hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{1\downarrow}|0\rangle=-t\hat{c}^\dagger_{2\uparrow} (1-\hat{n}\_{1\uparrow})\hat{c}^\dagger_{1\downarrow}|0\rangle=-t\hat{c}^\dagger_{2\uparrow}\hat{c}^\dagger_{1\downarrow}|0\rangle+t\hat{c}^\dagger_{2\uparrow} \cancel{\hat{n}\_{1\uparrow}|\downarrow,0\rangle}=-t\hat{c}^\dagger_{2\uparrow}|\downarrow,0\rangle=t|\downarrow,\uparrow\rangle$</div> <br>
Le dernier changement de signe venant du fait qu'il y ait déjà un fermion à gauche de celui créé dans l'état 2 ($(-1)^{n_1+n_2+\cdots+n_{i-1}}=(-1)^1=-1$).

Et pour le deuxième terme, on obtient&nbsp;: 
<div style="overflow-x:auto;">$-t\hat{c}^\dagger_{2\downarrow} \hat{c}\_{1\downarrow}\hat{c}^\dagger_{1\uparrow}\hat{c}^\dagger_{1\downarrow}|0\rangle=t\hat{c}^\dagger_{2\downarrow} \hat{c}\_{1\downarrow}\hat{c}^\dagger_{1\downarrow}\hat{c}^\dagger_{1\uparrow}|0\rangle=t\hat{c}^\dagger_{2\downarrow} (1-\hat{n}\_{1\downarrow})\hat{c}^\dagger_{1\uparrow}|0\rangle=t\hat{c}^\dagger_{2\downarrow}\hat{c}^\dagger_{1\uparrow}|0\rangle-t\hat{c}^\dagger_{2\downarrow}\cancel{\hat{n}\_{1\downarrow}|\uparrow,0\rangle}=-t|\uparrow,\downarrow\rangle$</div>
</details>


La matrice peut se diagonaliser et l'état fondamental s'écrit $|\psi\rangle = N(|\uparrow\downarrow,0\rangle+W|\uparrow,\downarrow\rangle-W|\downarrow,\uparrow\rangle+|0,\uparrow\downarrow\rangle)$ où $N$ est une constante de normalisation et $W=\frac{U}{4t}+\frac{1}{4t}\sqrt{U^2+16t^2}$ pour une énergie $E=\frac{U}{2}-\frac{1}{2}\sqrt{U^2+16t^2}$. C'est déjà un résultat étonnamment complexe pour un système si simple (deux électrons sur deux sites)...

</div>

<br>

On a découvert jusqu'ici comment des systèmes variés peuvent se réduire à un simple jeu d'oscillateurs harmoniques, chacun décrivant un certain mode normal du système. Et chacun de ces modes normaux peut être vu comme un état d'impulsion pour des particules identiques sans interaction. Le nombre de particules correspond alors au nombre d'excitations quantifiées du mode. Et on a défini des opérateurs qui peuvent créer et annihiler ces particules.

### Bilan

<p style="text-align:center;">
$\displaystyle
[\hat{x},\hat{p}] = \mathrm{i}\hbar
\;\xrightarrow{\ \text{factorisation}\ }\;
\hat{H} = \hbar\omega\left(\hat{a}^\dagger\hat{a} + \tfrac{1}{2}\right)
\;\xrightarrow{\ [\hat{a},\hat{a}^\dagger] = 1\ }\;
|n\rangle = \frac{(\hat{a}^\dagger)^n}{\sqrt{n!}}\,|0\rangle
$
</p>

<p style="text-align:center;">
$\displaystyle
N\ \text{oscillateurs couplés}
\;\xrightarrow{\ \text{Fourier}\ }\;
\text{modes indépendants}
\;\xrightarrow{\ \text{quantification}\ }\;
\text{phonons d'énergie } \hbar\omega_k
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{a}^\dagger_{p_1}\hat{a}^\dagger_{p_2} = \lambda\,\hat{a}^\dagger_{p_2}\hat{a}^\dagger_{p_1}
\;\xrightarrow{\ \lambda = +1\ }\;
\text{bosons}
\qquad\qquad
\hat{a}^\dagger_{p_1}\hat{a}^\dagger_{p_2} = \lambda\,\hat{a}^\dagger_{p_2}\hat{a}^\dagger_{p_1}
\;\xrightarrow{\ \lambda = -1\ }\;
\text{fermions, Pauli}
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat{A} = \sum_{\alpha\beta}\mathcal{A}_{\alpha\beta}\,\hat{a}^\dagger_\alpha\hat{a}_\beta
\;\xrightarrow{\ \text{sauts sur réseau}\ }\;
\text{liaisons fortes}
\;\xrightarrow{\ +\,U\sum_i \hat{n}_{i\uparrow}\hat{n}_{i\downarrow}\ }\;
\text{modèle de Hubbard}
$
</p>

### Pièges

<ul>
<li>L'énergie de point zéro $\hbar\omega/2$ n'est pas un artefact&nbsp;: elle vient du commutateur $[\hat{x},\hat{p}]=\mathrm{i}\hbar$, qui empêche la factorisation de le hamiltonien d'être exacte.</li>
<li>$\hat{a}$ et $\hat{a}^\dagger$ ne sont pas hermitiens&nbsp;: ce ne sont pas des observables. L'observable, c'est l'opérateur nombre $\hat{n}=\hat{a}^\dagger\hat{a}$.</li>
<li>Pour les fermions, l'ordre des opérateurs n'est jamais indifférent&nbsp;: chaque échange coûte un signe, comptabilisé par le facteur $(-1)^{n_1+\cdots+n_{i-1}}$. L'oublier fait rater le principe de Pauli.</li>
<li>L'opérateur de champ $\hat{\psi}^\dagger(\boldsymbol{x})$ n'est pas une fonction d'onde&nbsp;: c'est un opérateur qui crée une particule localisée en $\boldsymbol{x}$, construit comme transformée de Fourier des $\hat{a}^\dagger_{\boldsymbol{p}}$.</li>
<li>Le facteur $\frac{1}{2}$ du potentiel à deux particules compense un double comptage, et l'<b>ordre normal</b> des opérateurs ($\hat{a}^\dagger\hat{a}^\dagger\hat{a}\hat{a}$) garantit $\langle 0|\hat{V}|0\rangle = 0$&nbsp;: pas d'interaction dans le vide.</li>
<li>«&nbsp;Seconde quantification&nbsp;» est un nom trompeur&nbsp;: on ne quantifie pas deux fois, on change de représentation pour décrire un nombre variable de particules.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Les modèles de cette partie vivaient sur des réseaux discrets, taillés pour la matière condensée. La partie suivante quitte le réseau pour le continu et prépare le grand saut&nbsp;: la mécanique analytique des champs classiques, la relativité restreinte, et une première tentative d'équation d'onde relativiste, l'équation de Klein-Gordon, avec les paradoxes qu'elle soulève.
{{%/notice%}}

<br><br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc0">Chapitre précédent</a></td><td><a href="../tqc2">Chapitre suivant</a></td>
    </tr>
</table>
</div>