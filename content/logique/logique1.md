+++
title = "Calcul des propositions"
date = 2021-03-06T14:20:50+01:00
weight = 1
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
table {
  border-collapse: collapse;
  border: 0;
}
td, th {
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
}
</style>


<br>

<div style="position:relative; width:200px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/duparc.png" style="border-radius:10px;">
</div>

{{%notice info%}}
Notes de lecture du livre *La logique pas à pas* de Jacques Duparc que je paraphrase allégrement. 
{{%/notice%}}


<br>

# Calcul des propositions

<div style="overflow-x: auto;">
<table>
  <tr>
    <th><a href="../logique1/">Syntaxe</a></th>
    <th><a href="../logique2/">Sémantique</a></th>
    <th><a href="../logique3/">Preuve</a></th>
  </tr>
</table>
</div>

<br>

Le calcul des propositions (ou **calcul propositionnel** ou **logique des propositions**) permet de modéliser des raisonnements simples. Son pouvoir expressif est assez limité mais c'est sur ses fondations que se construisent les logiques plus évoluées.

<br>

## Syntaxe

<br>

### Langage

<br>

<div id="def">
<p style="margin-bottom:-1.1em;">Le <b>langage</b> du calcul des propositions est constitué </p>
<ul>
<li>de variables propositionnelles $P$, $Q$, $R$,..., </li>
<li>de connecteurs logiques $\neg, \lor, \land, \rightarrow, \leftrightarrow$</li>
<li>et de parenthèses.</li>
</ul>
</div>

On désigna par $VAR=\Set{P,Q,R\dots}$ l'ensemble des variables propositionnelles, potentiellement infini.

<div id="def">
<ul>
<li>Le connectecteur logique $\neg$ est unaire (ou d'arité 1) puisqu'il transforme à lui seul une formule en une autre formule. C'est le symbole de <b>négation</b> et il se dit <b>non</b>.</li>
<li>Les autres connecteurs logiques sont binaires (d'arité 2) puisqu'ils lient deux formules en une nouvelle.</li>
<ul>
    <li>$\lor$ est le symbole de <b>disjonction</b> ("<b>ou</b>")</li>
    <li>$\land$ est le symbole de <b>conjonction</b> ("<b>et</b>")</li>
    <li>$\rightarrow$ est le symbole d'<b>implication</b> ("<b>mplique</b>")</li>
    <li>$\leftrightarrow$ est le symbole de <b>double implication</b> ou d'<b>équivalence</b> ("<b>si et seulement si</b>" ou "<b>équivaut à</b>")</li>
</ul>
</ul>
</div>
<br>
<div id="def">

Le <b>langage</b> du calcul des propositions est alors l'ensemble suivant&nbsp;: $\mathcal{L} = VAR\cup\Set{\neg,\lor,\land,\rightarrow,\leftrightarrow,(,)}$

</div>

<br>

### Formules

<br>

On peut représenter les formules du calcul propositionnel par des **arbres** dont les feuilles sont des variables propositionnelles et les nœuds sont des connecteurs.

<div id="def">

<p style="margin-bottom:-1.1em;">L'ensemble $\mathcal{F}$ des formules du calcul propositionnel est le plus petit ensemble d'arbres qui</p>
<ul>
<li>contient chaque arbre réduit à sa racine qui est une variable propositionnelle.</li>
<li>chaque fois qu'il contient des formules $\phi$ et $\psi$ contient également  les formules suivantes&nbsp;:
<div style="position:relative; width:500px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/ensformules.png"></div>
</li>
</ul>
</div>

La **hauteur** d'une formule est la longueur de sa plus longue branche.

{{%notice tip%}}
C'est une définition par **récurrence** (ou **inductive**)&nbsp;: on a d'abord défini les feuilles, cas de base de hauteur 0, puis on a donné la recette pour passer d'un arbre de hauteur $n$ à un arbre de hauteur $n+1$.
{{%/notice%}}

Une **sous formule** d'une formule $\phi$ est un sous-arbre de $\phi$ dont l'un des nœuds de $\phi$ est la racine.

![](/sousformules.png?width=600px)

La formule de hauteur 5 ci-dessus contient&nbsp;:
- 5 feuilles, sous-formules de hauteur 0 (en vert),
-  3 sous-formules de hauteur 1 (en rouge),
-  2 sous-formules de hauteur 2 (en bleu),
- 1 sous-formule de hauteur 3 (en rose),
- 1 sous-formule de hauteur 4 (en jaune).

Lorsqu'une sous-formule apparaît plusieurs fois dans une formule, on dit qu'elle a plusieurs **occurences**.

<br>

### Linéarisation d'une formule

<br>

La linéarisation d'une formule $\theta$ peut s'obtenir par induction&nbsp;:
- une feuille $\color{#007100}P$ se linéarise en $\color{#007100}P$&nbsp;: $\theta=\color{#007100}P$
- les linéarisations des sous-formules suivantes ![](/ensformules.png?width=500px)
sont données respectivement par $\theta=\left(\color{#B51700}{\neg}\color{#007100}{\phi}\color{#000} \right)$, $\theta=\left(\color{#007100}{\phi} \color{#B51700}{\lor} \color{#007100}{\psi} \color{#000} \right)$, $\theta=\left( \color{#007100}{\phi} \color{#B51700}{\land} \color{#007100}{\psi} \color{#000} \right)$, $\theta=\left( \color{#007100}{\phi} \color{#B51700}{\rightarrow} \color{#007100}{\psi} \color{#000} \right)$, $\theta=\left( \color{#007100}{\phi} \color{#B51700}{\leftrightarrow} \color{#007100} \psi  \color{#000} \right)$.

Exemple :

La linéarisation de cette formule $\phi$ donne&nbsp;:

![](/linearisationformule.png?width=600px)

$$\displaystyle
\phi =  ( \color{#B51700}{\neg}\color{#000}  ( \color{#007100}{P} \color{#B51700}{\lor} \color{#007100}{R}\color{#000}  ) ) \color{#B51700}{\land} \color{#000} (\color{#007100}{P} \color{#B51700}{\lor}\color{#000}  ( ( \color{#B51700}{\neg} \color{#007100}{R}\color{#000}  ) \color{#B51700}{\rightarrow} \color{#000}( ( \color{#B51700}{\neg} \color{#007100}{Q}\color{#000} ) \color{#B51700}{\leftrightarrow} \color{#007100}{P} \color{#000} ) ))
$$


<br>

{{%notice note%}}
La **syntaxe**, c'est l'articulation des symboles. La **sémantique**, c'est ce que ça raconte.
{{%/notice%}}

<br>
<p style="text-align:center;">
<a href="../logique2" style="font-size:2em;">Suite : <b>la sémantique</b></a>
</p>
