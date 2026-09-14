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


Un des plus anciens algorithmes connus. Sa formulation est simplissime (comme le montre le code python ci-dessous) mais sa puissance est redoutable.


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

Elles rendent plus transparents les différents compromis qu'on est amené à faire pour tenter de caler des nombres carrés dans des nombres ronds du fait de périodicités incompatibles. On explique ainsi les calendriers, les almanachs d'éclipses et les 12 notes de musiques.


{{< youtube-plus id="zSnFffFo9bk" ratio="16x9" width="800px" rounded=true shadow=true >}}

Les fractions continues nous ont aussi été utiles pour l'étude de la complexité de l'algorithme d'Euclide avec lequel elles entretiennent un lien étroit.

<br>

## Nombre d'or

Le nombre d'or est une sorte de tarte à la crème des mathématiques. D'infinies élucubrations lui font tenir un rôle quasi mystique.

On ne peut nier cependant qu'il apparaît parfois dans des endroits étonnants. Reste seulement à démystifier sa présence.

La vidéo suivante explique ainsi comment suite de Fibonacci et nombre d'or apparaissent dans certains arrangements des plantes. Armé d'un peu de physique et des fractions continues, leurs présences devient somme toute logique, voire triviale.


{{< youtube-plus id="_V4GjyvDTfI" ratio="4x3" width="640px" rounded=true shadow=true >}}


Le nombre d'or fait aussi son apparition dans l'étude de la complexité de l'algorithme d'Euclide comme on l'a vu plus haut.

Un [**autre exemple plus discutable**](https://www.nature.com/articles/s41598-017-05122-5) mais tournant autour des mêmes concepts développés dans les vidéos précédentes&nbsp;: l'inverse du nombre d'or serait le ratio optimal dans le jeu de l'ultimatum.





