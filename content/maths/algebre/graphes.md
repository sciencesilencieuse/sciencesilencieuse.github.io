+++
title = "Graphes"
date = 2021-03-06T14:20:50+01:00
weight = 3
chapter = false
css = "algo.css"
+++

<style>
table {
  border-collapse: collapse;
  border: 0;
}
td, th {
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
}
 #gris {
     border: 0;
  }
</style>



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
</style>



# Graphes

{{%notice type="tip" round="true"%}}
[**Cours sur les graphes**](https://info-tsi-vieljeux.github.io/semestre_2/graphes/) donné à des élèves de TSI1 en informatique.
{{%/notice%}}

## Jeu de Nim

Utilisation des graphes dans la théorie des jeux de Nim.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube 2jahbr5wMHk>}}
</div>

<br>

## Combinatoire

Graphes et combinatoire

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube U2ClKgKEoyo>}}
</div>

<br>


## Chemin hamiltonien

Petit jeu sur un graphe inventé par Hamilton en 1857, le «&nbsp;jeu icosien&nbsp;». Le but est de trouver un <i>cycle hamiltonien</i>&nbsp;: visiter une seule fois chaque ville avant de revenir à la ville de départ. Les vingt villes sont les sommets d'un dodécaèdre régulier&nbsp;: le plateau de Hamilton n'est autre que ce solide vu en perspective à travers l'une de ses faces, comme le montre le bouton «&nbsp;Gonfler en dodécaèdre&nbsp;». Si le défi n'est pas suffisant, laissez l'ordinateur imposer les cinq premières villes, comme le proposait Hamilton.

<div class="anim" data-anim="icosien"></div>
{{< script "js/fin-partie.js" >}}
{{< script "js/icosien3d.js" "module" >}}

Le jeu est repris sur la page [Graphes](/info/algorithmique/graphes/#euler-facile-hamilton-difficile) de la partie algorithmique.



