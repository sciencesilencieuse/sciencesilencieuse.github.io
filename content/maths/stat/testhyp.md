+++
title = "Test d'hypothèse"
date = 2021-03-06T14:20:50+01:00
weight = 4
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
</style>




# Test d'hypothèse

## Test d'hypothèse

Les statistiques au service de la prise de décision en science.


{{< youtube-plus id="9TxSmOK6GWA" ratio="16x9" width="800px" rounded=true shadow=true >}}


## p-hacking


> Extrait traduit de 'Everything is predictable' de Tom Chivers

Peut-être que l’exemple le plus célèbre est celui du scientifique de l'alimentation Brian Wansink, une star de l’Université Cornell qui a reçu des millions de dollars de financement du gouvernement fédéral américain sous l’administration Obama. Il a publié beaucoup d’études sur notre comportement alimentaire, notamment une sur la façon dont les hommes mangent plus en compagnie de femmes (probablement pour les impressionner) ; une autre sur comment donner des noms plus “attractifs” aux légumes (appeler les carottes “carottes à vision X-ray,” par exemple) permet que les enfants d’école primaire en mangent deux fois plus.
<br><br>
Puis, en 2016, il a commis l’erreur de publier un billet de blog intitulé "The Grad Student Who Never Said 'No.'".
<br><br>
L’étudiante en question était une doctorante turque. Lorsqu’elle est arrivée à Cornell, Wansink “lui a donné un ensemble de données d’une étude autofinancée, sans résultats probants” - une étude qui examinait le comportement alimentaire dans un buffet italien à volonté pendant un mois. Selon ses propres termes, il lui a dit : “Cela nous a coûté beaucoup de temps et  d'argent à collecter. Il doit y avoir quelque chose ici que nous pouvons sauver parce que cet ensemble de données est cool (riche et unique).” L’étudiante s’est donc mise au travail et a découpé l’ensemble de données de nombreuses façons différentes. Et, inévitablement, elle a trouvé de nombreuses corrélations p < 0,05 - suffisamment pour qu'elle et Wansink publient cinq articles (y compris l’article “les hommes mangent trop pour impressionner les femmes”).

Cela a éveillé la suspicion de certains scientifiques et journalistes scientifiques, et ils ont commencé à passer au crible les autres recherches de Wansink. De plus, Stephanie Lee, une journaliste scientifique de BuzzFeed, a mis la main sur ses emails, dans lesquels - il s’est avéré - il demanda à sa doctorante de découper les données en “mâles, femelles, mangeurs de déjeuner, mangeurs de dîner, personnes mangeant seules, personnes mangeant en groupe de 2, personnes mangeant en groupe de 2+, personnes commandant de l’alcool, personnes commandant des boissons non alcoolisées, personnes restant près du buffet, personnes s’asseyant loin, etc.” pour “essorer le jeu de données jusqu'à en extraire tous les résultats significatifs possibles” et faire en sorte que cela “devienne viral à grande échelle.”

En conséquence, dix-huit des articles de Wansink ont été rétractés ; sept ont reçu des "expressions of concern” que les revues ajoutent aux études qu’elles ne pensent pas pouvoir être totalement fiables, mais qu’elles ne sont pas prêtes à rétracter complètement ; et quinze ont été corrigés. Wansink, entre-temps, a démissionné de Cornell en 2019, après que l’université a conclu qu’il avait commis une faute scientifique et lui a interdit l’enseignement et la recherche.

C'est un exemple particulièrement frappant, mais d’une certaine manière Wansink a eu la malchance d’être détruit publiquement pour quelque chose qui était presque une pratique standard. Le p-hacking se produit tout le temps, de manière beaucoup moins dramatique - et beaucoup de scientifiques n’ont absolument aucune idée qu’ils font quelque chose de mal. Daryl Bem, dans un chapitre d'un livre de 1987 écrit comme un guide pour aider les étudiants à publier leurs recherches, a écrit qu’il “y a deux articles que vous pouvez écrire : l’article que vous aviez prévu d’écrire lorsque vous avez conçu votre étude ; l’article qui a le plus de sens maintenant que vous avez vu les résultats. La bonne réponse est le second.” Il a appelé les chercheurs à “analyser les sexes séparément, créer de nouveaux index composites… réorganiser les données pour les mettre en relief de manière plus audacieuse… Les données peuvent être suffisamment solides pour justifier de recentrer votre article autour des nouvelles découvertes et de subordonner ou même d’ignorer vos hypothèses originales."

![](https://imgs.xkcd.com/comics/significant.png)

Dans un [**espace de données à grande dimension**](../geometrie/geo4/#the-average-man), plus on a d'axes (de catégories, d'entrées,...), plus on a de chance d'obtenir un résultat hors norme sur au moins l'un d'eux.<br>
Ce [**chouette site**](https://tylervigen.com/spurious-correlations) met le phénomène à profit pour débusquer des corrélations amusantes (avec pour chacune des p-values inférieures à 1%...)&nbsp;:

<a href="https://tylervigen.com/spurious-correlations"><div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:0em;border: solid 5px #438DEC; border-radius:5px;">
<img src="/spurious.png" style="box-shadow:none;background:none;">
</div></a>
