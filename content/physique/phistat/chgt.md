+++
title = "Transitions de phase"
date = 2021-03-06T14:20:50+01:00
weight = 8
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

ul
{
margin-top:-0.5em;
}
</style>


# Phase et transition

## Fluide supercritique

<div style="position:relative;margin-left:auto;margin-right:auto;width:1000px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/diagCO2.png">
</div>

On place un échantillon d'eau dans un récipient hermétique à 25&nbsp;°C. On fait le vide d'air, et on laisse l'équilibre de vaporisation-condensation s'établir. On obtient un mélange d'eau liquide et de vapeur d'eau à une pression de 0,03&nbsp;atm. Une frontière distincte entre le liquide plus dense et le gaz moins dense est clairement observable. En augmentant la température, la pression de la vapeur d'eau augmente, comme décrit par la courbe liquide-gaz du diagramme de phase de l'eau, et un équilibre diphasique entre les phases liquide et gazeuse persiste. À une température de 374&nbsp;°C, la pression de vapeur a atteint 218&nbsp;atm, et toute augmentation supplémentaire de la température entraîne la disparition de la frontière entre les phases liquide et vapeur. Toute l'eau dans le récipient est maintenant présente dans une phase unique dont les propriétés physiques sont intermédiaires entre celles des états gazeux et liquide, le fluide supercritique. Au-dessus de sa température critique, un gaz ne peut pas être liquéfié, quelle que soit la pression appliquée. La pression requise pour liquéfier un gaz à sa température critique est appelée pression critique.

En contournant le point critique, on peut passer de l'état liquide à l'état gazeux (et inversement) **continument**, sans seuil. On parle alors de **transition de phase du deuxième ordre**. Au moment du contournement du point critique (lorsque $P>P_C$ et $T>T_C$), on dit que la matière est dans un nouvel état (un 5<sup>e</sup> état avec les solides, liquides, gaz et plasmas), le **fluide supercritique**. 

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube P9EftqFYaHg>}}
</div>

Cet état possède à la fois des propriétés d'un gaz et d'un liquide&nbsp;; comme un gaz, il occupe tout l'espace disponible, possède une grande diffusivité mais pas de tension superficielle, et comme un liquide, il a une grand pouvoir de dissolution de solutés non volatils. Il peut donc pénétrer plus efficacement les petites ouvertures d'un mélange solide et en extraire les composants solubles. Ces propriétés font des fluides supercritiques des solvants extrêmement utiles pour un large éventail d'applications. Par exemple, le dioxyde de carbone supercritique est devenu un solvant très populaire dans l'industrie alimentaire, étant utilisé pour décaféiner le café, éliminer les graisses des chips et extraire les composés aromatiques et les fragrances des huiles d'agrumes. Il est non toxique et relativement peu coûteux. Après utilisation, le $\ce{CO2}$ peut être facilement récupéré en réduisant la pression et en collectant le gaz résultant.

On comprend assez bien les propriétés du fluide superfluide aux vues des conditions pour y parvenir. La grande température rend l'agitation cinétique supérieure aux liaisons intermoléculaires, empêchant l'agglomération, mais la grande pression donne malgré tout au fluide une densité de liquide. Les molécules sont très proches mais ne "collent" pas.

<div id="preuve">

En agitant un extincteur par une journée fraiche, on sent et entend le liquide remuer à l'intérieur. Mais si on répète l'expérience par une journée très chaude, on ne sent plus aucun liquide à l'intérieur de l'extincteur. Où est-il passé&nbsp;?<br>
À une température supérieure à la température critique du $\ce{CO2}$ (31&nbsp;°C), aucune pression n'est plus suffisante pour le liquéfier.

</div>

On voit dans la vidéo que la proximité du point critique peut se traduire (lors du passage de superfluide à gaz+liquide) par un phénomène spectaculaire&nbsp;: le fluide devient "brouillardeux". On appelle ce phénomène l'**opalescence critique**. Lorsque la température ou la pression d'un superfluide passe sous sa valeur critique, on assiste en tout point du fluide à une hésitation de la matière entre liquide et gaz provoquant des fluctuations de densité de toutes tailles. Ces fluctuations de densité entraînent des fluctuations d'indice optique et les plus petites fluctuations (échelles de taille de la longueur d'onde de la lumière visible) vont entraîner la forte diffusion qui caractérise le phénomène (un peu comme les micro-gouttes d'huile dans le lait ou le pastis allongé).

Techniquement, la transition de phase du deuxième ordre que subit alors le superfluide est caractérisée par la divergence de la longueur de corrélation $\xi$ qui traduit la distance sur laquelle une perturbation locale peut influencer le système. Près du point critique, les fluctuations deviennent corrélées sur des distances de plus en plus grandes. Plus précisément, la longueur de corrélation évolue alors en loi de puissance&nbsp;: $\xi=|T-T_C|^\nu$ ($\nu$ est appelé exposant critique). Au point critique, la longueur de corrélation devient théoriquement infinie&nbsp;; il y a des fluctuations (ici de densité) à toutes les échelles.

<div id="theo">

Les transitions du premier ordre sont des transitions *avec sauts* alors que celles du deuxième ordre sont des transitions *avec divergences*. 

</div>

## Transitions de phase

Deux vidéos impressionnantes de qualité sur les transitions de phase&nbsp;:

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube itRV2jEtV8Q>}}
</div>

<br>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube yEcysu5xZH0>}}
</div>




