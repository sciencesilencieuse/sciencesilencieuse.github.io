+++
title = "Les infinis"
date = 2021-03-06T14:20:50+01:00
weight = 1
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
</style>


# Infinis dénombrables et indénombrables

À la fin du 19<sup>e</sup> siècle, le mathématicien allemand **Georg Cantor** démontre qu'il y a autant d'entiers que d'entiers relatifs, et même autant que de nombres rationnels ou que de nombres algébriques (racines de polynômes à coefficients rationnels). Tous ces ensembles contiennent $\aleph _0$ éléments.

Par contre, il y a infiniment plus de nombres transcendants, à tels points que tout segment continu est constitué quasi exclusivement de ces nombres dont les représentants connus sont si rares ($\pi$ et $\mathrm{e}$ sont les transcendants stars).


{{< youtube-plus id="0hB95JwlzBY" ratio="16x9" width="800px" rounded=true shadow=true >}}


Cette démonstration de Cantor de l'indénombrabilité des réels révolutionna les mathématiques en ensemençant certains des plus importants résultats du 20<sup>e</sup> siècle&nbsp;: on retrouve, par exemple, un "argument diagonal" du même type chez **Gödel** dans son premier **théorème d'incomplétude** ou dans le **théorème de l'arrêt** de **Türing**.


{{< youtube-plus id="VyHbd6sx5Po" ratio="16x9" width="800px" rounded=true shadow=true >}}


Mais revenons aux nombres&nbsp;: pourquoi l'argument de la diagonal ne marcherait-il pas avec les entiers&nbsp;?<br>
Après tout, on pourrait bien lister tous les entiers (en binaire) et retourner le premier chiffre à la première ligne, le deuxième à la deuxième, et ainsi de suite, jusqu'à se retrouver avec un nombre absent de la liste. 

$$
0000\ldots 0001 \longrightarrow {\color{red}1}000\ldots0001\\\\
0000\ldots 0010 \longrightarrow 0{\color{red}1}00\ldots0010\\\\
\cdots
$$


Et on démontrerait ainsi que l'ensemble dénombrable des entiers est en fait indénombrable...

![](https://i.gifer.com/40Oj.gif?width=200px)

Bien sûr, on a fauté quelque part. Mais où&nbsp;?<br>
Notre confiance en l'obtention d'un nouvel entier par cette méthode était mal placée. En effet, le principe même de la construction de ce nouvel entier suppose que l'écriture de chacun des entiers inventorié est faite d'un nombre infini de 1 et de 0 (en complétant avec une infinité de 0 à gauche si besoin). Or par définition, **un entier est fini**&nbsp;! 

Retourner un 0 infiniment loin devant le 1 pour le premier chiffre du nombre diagonal nous sort tout de suite de l'ensemble des entiers...

Par contre, on montre ainsi que l'ensemble des suites infinis de 1 et de 0 est bien, elle, indénombrable. On n'a pas tout perdu.

On pourrait résister encore un peu en se restreignant, comme dans [la vidéo](https://youtu.be/0hB95JwlzBY), à l'intervalle $[0\\, ;1]$. Plutôt que de lister les réels, listons les rationnels de l'intervalle. Ils ont bien, eux, des développement décimaux potentiellement infinis après tout. L'argument diagonal semble donc pouvoir marcher...<br>
Et en effet, il marche&nbsp;! Le nombre fourni par la diagonale n'appartient effectivement pas à $\mathbb{Q}$. Mais si on ne suppose pas que $\mathbb{Q}$ recouvre parfaitement l'intervalle, sans aucun trou, il n'y a pas de contradiction. Le nombre diagonal a justement permis de construire un de ces trous&nbsp;: un nombre irrationnel.

C'est parce qu'on part de l'hypothèse que les réels recouvrent parfaitement (sans trou) l'intervalle que l'argument de Cantor implique leur indénombrabilité. le nombre diagonal a bien un développement décimal le plaçant dans l'intervalle $[0\\,;1]$. Il s'agit donc d'un réel puisque, par définition, tout point de cet intervalle est un réel. Or il n'est pas listé. On en conclut que les réels ne sont pas listables (dénombrables).

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-2em;margin-top:-1em;">
<img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Georg_Cantor2.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

<p style="text-align:center;"><i>En bon représentant du corps des logiciens, Cantor luttait contre la dépression.</i></p>



