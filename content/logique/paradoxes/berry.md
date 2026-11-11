+++
title = "Paradoxe de Berry"
date = 2026-11-11T12:00:00+01:00
weight = 1
+++


<style>
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
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
</style>

# Paradoxe de Berry

> Le plus petit entier positif non définissable en moins de quinze mots.

Cette phrase a l'air inoffensive. Elle contient pourtant de quoi ruiner l'un des plus beaux rêves de l'informatique théorique&nbsp;: celui d'un algorithme capable de faire de la science à notre place.



## Le paradoxe

Le français compte un nombre fini de mots. Il n'existe donc qu'un nombre fini de phrases de moins de quinze mots, et seulement un nombre fini d'entiers que ces phrases permettent de définir («&nbsp;douze&nbsp;», «&nbsp;le carré de mille&nbsp;», «&nbsp;le nombre de secondes dans un siècle&nbsp;»...). Les entiers, eux, sont en nombre infini&nbsp;: certains échappent forcément à toute définition aussi courte. Et parmi ceux-là, il y en a un plus petit que tous les autres.

Appelons-le $n$. C'est, par construction, *le plus petit entier positif non définissable en moins de quinze mots*. Sauf que cette expression en italique compte douze mots... et qu'elle définit $n$. L'entier $n$ est donc à la fois définissable et non définissable en moins de quinze mots.

Bertrand Russell publie ce paradoxe au début du XX<sup>e</sup> siècle, en l'attribuant à G. G. Berry, bibliothécaire à Oxford.

Où est l'entourloupe&nbsp;? Dans le mot «&nbsp;définissable&nbsp;», qui ne veut rien dire tant qu'on n'a pas précisé *dans quel langage* et *selon quelles règles*. Le français est assez souple pour parler de lui-même, et c'est cette autoréférence qui fait tout dérailler, comme dans «&nbsp;cette phrase est fausse&nbsp;».

On pourrait s'arrêter là et ranger Berry parmi les jeux de mots. Mais que se passe-t-il si on remplace le français par un langage qui ne laisse aucune place à l'ambiguïté&nbsp;?



## Du français à Python

Remplaçons «&nbsp;phrase&nbsp;» par «&nbsp;programme&nbsp;» et «&nbsp;définir un entier&nbsp;» par «&nbsp;l'afficher&nbsp;».

<div id="def">

<b>Complexité de Kolmogorov</b>

La complexité de Kolmogorov $K(x)$ d'un objet $x$ (un entier, un texte, une image...) est la longueur du plus court programme qui affiche $x$ puis s'arrête.

</div>

$K(x)$ mesure la quantité d'information réellement contenue dans $x$, une fois toute redondance éliminée&nbsp;:

- La chaîne `abababab...` longue de deux millions de caractères s'obtient avec `print("ab" * 10**6)`. Une vingtaine de caractères suffisent&nbsp;: sa complexité est minuscule.
- Le premier million de décimales de $\pi$ a toutes les apparences du hasard, mais un programme de quelques lignes sait les calculer. Complexité faible, là encore.
- Un million de tirages à pile ou face n'obéit, selon toute vraisemblance, à aucune règle. Le plus court programme qui affiche le résultat se contente de le recopier&nbsp;: `print("0110100...")`. Sa complexité vaut à peu près sa longueur. On dit que la suite est **incompressible**, et c'est d'ailleurs une très bonne définition du mot «&nbsp;aléatoire&nbsp;».

Et le choix du langage&nbsp;? Il compte peu. Traduire un programme Python en C ne coûte qu'un nombre fixe de caractères (la taille d'un interpréteur Python écrit en C), quel que soit $x$. D'un langage à l'autre, $K(x)$ ne change donc que d'une constante.



## Berry contre-attaque

Supposons qu'on dispose d'une fonction Python `K(n)` qui calcule la complexité de n'importe quel entier. On peut alors écrire&nbsp;:

```python
def berry():
    n = 0
    while K(n) <= 1000000000:
        n += 1
    return n

print(berry())
```

Ce programme passe les entiers en revue jusqu'à trouver le premier dont la complexité dépasse le milliard. Il finit forcément par en trouver un, puisqu'il n'existe qu'un nombre fini de programmes d'au plus un milliard de caractères, donc qu'un nombre fini d'entiers de complexité aussi basse.

Appelons $n$ l'entier affiché. Par construction, $K(n)$ dépasse le milliard. Mais regardons la taille du programme qui vient de l'afficher&nbsp;: ces quelques lignes, plus le code de la fonction `K`. Quelques milliers de caractères, quelques millions peut-être, en tout cas bien moins qu'un milliard[^1]. Donc $K(n)$ est inférieure au milliard. Contradiction.

[^1]: Et si le code de `K` dépassait le milliard de caractères, il suffirait de relever le seuil&nbsp;: chaque chiffre qu'on lui ajoute le multiplie par dix en n'allongeant le programme que d'un caractère. Le seuil finit donc toujours par dépasser la taille du programme.

Notre programme n'est rien d'autre que la phrase de Berry, «&nbsp;le plus petit entier non affichable par un programme d'au plus un milliard de caractères&nbsp;», écrite en bien moins d'un milliard de caractères. Sauf que cette fois, il n'y a plus d'ambiguïté derrière laquelle se réfugier. Une seule hypothèse a été faite, et c'est elle qui doit tomber&nbsp;:

<div id="theo">

La complexité de Kolmogorov n'est pas calculable&nbsp;: aucun programme ne peut, pour tout $x$, renvoyer $K(x)$.

</div>

On peut toujours **majorer** $K(x)$&nbsp;: il suffit d'exhiber un programme qui affiche $x$, et c'est ce que fait un logiciel de compression. Mais on ne peut jamais certifier qu'il n'en existe pas de plus court. L'idée naïve, essayer un par un tous les programmes plus courts, échoue&nbsp;: certains ne s'arrêtent jamais, et rien ne permet de savoir lesquels à l'avance. C'est le problème de l'arrêt de Turing, et la même mécanique d'autoréférence que dans [les théorèmes d'incomplétude de Gödel](../../modale/logiques/#logique-de-la-prouvabilité).



## Le rêve de Solomonoff

Au tournant des années 1960, Ray Solomonoff, l'un des participants de la conférence de Dartmouth qui a fondé l'intelligence artificielle, poursuit une idée folle&nbsp;: mécaniser l'induction. Autrement dit, automatiser ce que fait un scientifique quand il observe des données, devine la loi qui les produit et prédit la suite.

Sa recette marie deux principes&nbsp;:

- **le raisonnement bayésien**&nbsp;: on garde toutes les hypothèses compatibles avec les observations, on attribue à chacune une probabilité, et on met ces probabilités à jour à chaque nouvelle donnée (voir [l'inférence bayésienne](../../../maths/stat/bayes/))&nbsp;;
- **le rasoir d'Occam**&nbsp;: avant toute observation, les hypothèses simples sont jugées plus plausibles que les compliquées.

Reste à dire ce que «&nbsp;simple&nbsp;» veut dire, et c'est là le trait de génie. Pour Solomonoff, une hypothèse est un **programme** qui engendre les données, et sa simplicité est sa **longueur**. Un programme de $\ell$ bits reçoit le poids *a priori* $2^{-\ell}$&nbsp;: chaque bit supplémentaire divise sa plausibilité par deux. C'est la probabilité de tomber exactement sur ce programme en tirant ses bits à pile ou face.

La probabilité *a priori* d'observer une suite $x$ est alors la somme des poids de tous les programmes $p$ dont la sortie commence par $x$&nbsp;:

$$M(x)=\sum_{p \text{ affiche } x\ldots} 2^{-\ell(p)}$$

où $\ell(p)$ désigne la longueur en bits du programme $p$. Pour prédire le bit suivant, il suffit de comparer $M(x0)$ et $M(x1)$.

En 1978, Solomonoff démontre que cette méthode est d'une efficacité stupéfiante. Si les données sont produites par n'importe quel mécanisme calculable, ses prédictions convergent vers les bonnes, et le cumul de ses erreurs est borné par une quantité proportionnelle à la complexité de Kolmogorov de ce mécanisme. En clair&nbsp;: plus la loi cachée est simple, plus vite elle est apprise, et aucune loi calculable n'échappe à la méthode. Un seul algorithme pour toute la science.

Sauf que $M$ n'est pas calculable. La somme est dominée par les programmes les plus courts, si bien que $M(x)$ est de l'ordre de $2^{-K(x)}$, et pour la calculer il faudrait savoir quels programmes affichent $x$, donc en particulier lesquels s'arrêtent. Le paradoxe de Berry, qui avait l'air d'un simple jeu de mots, se dresse en travers du chemin et tue dans l'œuf <a href="https://www.scientificamerican.com/article/the-strange-story-of-the-algorithm-meant-to-solve-life-the-universe-and" target="_blank">le rêve du jeune Ray Solomonoff</a>&nbsp;: son super algorithme existe bel et bien sur le papier, mais aucun ordinateur ne pourra jamais l'exécuter 😢

Tout n'est pas perdu pour autant. L'idée survit sous des formes approchées et calculables&nbsp;: le principe de longueur de description minimale en statistique, les estimations de complexité par compression et, plus largement, l'intuition très présente en apprentissage automatique qu'**apprendre, c'est compresser**.



## En vidéo

La chaîne *Up and Atom* raconte toute cette histoire (en anglais)&nbsp;:


{{< youtube-plus id="FDXf1XxCXAk" ratio="16x9" width="800" shadow="true" rounded="true" >}}
