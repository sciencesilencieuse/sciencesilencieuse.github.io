+++
title = "Paradoxe de Hempel"
date = 2026-11-11T12:00:00+01:00
weight = 2
+++

# Paradoxe de Hempel

> Voir une chaussure blanche participe-t-il à prouver que tous les corbeaux sont noirs&nbsp;?

<br>

## Le paradoxe

Un ornithologue veut établir que **tous les corbeaux sont noirs**. Sa méthode est celle de toutes les sciences d'observation&nbsp;: accumuler les cas favorables. Chaque corbeau noir croisé renforce un peu l'hypothèse, sans jamais la prouver définitivement.

En logique, l'hypothèse s'écrit «&nbsp;pour tout objet $x$, si $x$ est un corbeau, alors $x$ est noir&nbsp;»&nbsp;:

$$\forall x,\quad C(x)\rightarrow N(x)$$

Or toute implication est équivalente à sa **contraposée** ([les deux formules ont la même table de vérité](../../propositions/semantique/#formules-logiquement-équivalentes))&nbsp;: «&nbsp;si $x$ n'est pas noir, alors $x$ n'est pas un corbeau&nbsp;».

$$\forall x,\quad \neg N(x)\rightarrow \neg C(x)$$

Autrement dit&nbsp;: **tout ce qui n'est pas noir n'est pas un corbeau**. Les deux énoncés disent exactement la même chose du monde.

Le piège, formulé par le philosophe Carl Hempel dans les années 1940, se referme alors en deux temps&nbsp;:

1. Une généralité est confirmée par ses cas particuliers. Un corbeau noir confirme «&nbsp;tous les corbeaux sont noirs&nbsp;»&nbsp;; de même, un objet non noir qui n'est pas un corbeau confirme «&nbsp;tout ce qui n'est pas noir n'est pas un corbeau&nbsp;».
2. Ce qui confirme un énoncé confirme tout énoncé logiquement équivalent.

Une chaussure blanche n'est ni noire, ni un corbeau. Elle confirme donc la contraposée (point 1), donc l'hypothèse de départ (point 2). Même chose pour une banane jaune, un schtroumpf ou une tasse de lait. L'ornithologue peut ranger ses jumelles et faire avancer la science en inventoriant son salon.

Les deux principes paraissent inattaquables, et la conclusion est absurde. Lequel lâcher&nbsp;?

<br>

## La réponse bayésienne

Aucun des deux. La réponse la plus convaincante consiste à accepter la conclusion... après l'avoir **quantifiée**.

«&nbsp;Confirmer&nbsp;» n'est pas tout ou rien. Dans le cadre de [l'inférence bayésienne](../../../maths/stat/bayes/), une information $I$ confirme une hypothèse $H$ dès qu'elle augmente sa probabilité, et elle la confirme d'autant mieux qu'on s'attendait davantage à l'observer si $H$ est vraie que si $H$ est fausse. C'est ce que dit le [théorème de Bayes exprimé en termes de cotes](../../../maths/stat/bayes/#bayes-et-cote)&nbsp;:

$$\frac{P(H|I)}{P(\overline{H}|I)}=\frac{P(I|H)}{P(I|\overline{H})}\times\frac{P(H)}{P(\overline{H})}$$

Chaque observation multiplie la cote de $H$ par le **facteur de Bayes** $\frac{P(I|H)}{P(I|\overline{H})}$. S'il vaut 1, l'observation n'apprend rien. Plus il dépasse 1, plus elle confirme.

Faisons le calcul dans un monde simplifié, peuplé d'un million de corbeaux et de mille milliards d'objets qui ne sont pas noirs. Deux hypothèses s'affrontent&nbsp;:

- $H$&nbsp;: tous les corbeaux sont noirs&nbsp;;
- $\overline{H}$&nbsp;: un corbeau sur dix est blanc, soit 100&nbsp;000 corbeaux blancs perdus parmi les mille milliards d'objets non noirs.

**Première méthode&nbsp;: on attrape un corbeau au hasard et on regarde sa couleur.** Il est noir. Si $H$ est vraie, c'était certain. Si $\overline{H}$ est vraie, cela arrivait 9 fois sur 10. Le facteur de Bayes vaut

$$\frac{1}{0{,}9}\approx 1{,}11$$

Chaque corbeau noir multiplie la cote de $H$ par 1,11. Il suffit de 44 corbeaux noirs pour la multiplier par 100.

**Seconde méthode&nbsp;: on prend un objet non noir au hasard et on regarde ce que c'est.** C'est une chaussure. Si $H$ est vraie, il était certain que ce ne serait pas un corbeau. Si $\overline{H}$ est vraie, on avait une chance sur dix millions de tomber sur l'un des 100&nbsp;000 corbeaux blancs, donc une probabilité $1-10^{-7}$ de ne pas en voir. Le facteur de Bayes vaut

$$\frac{1}{1-10^{-7}}\approx 1{,}0000001$$

Chaque chaussure blanche multiplie bien la cote de $H$ par un nombre plus grand que 1&nbsp;: elle confirme. Mais il en faut environ 46 millions pour obtenir le même effet que 44 corbeaux.

{{< notice type="coeur" round="true" >}}
Le paradoxe n'était pas une erreur de logique. La chaussure blanche confirme réellement que tous les corbeaux sont noirs. Simplement, elle le fait un million de fois moins qu'un corbeau noir. Notre intuition arrondit ce presque rien à zéro, et en pratique elle a bien raison.
{{< /notice >}}

Cette résolution a été esquissée dès 1940 par la logicienne polonaise Janina Hosiasson-Lindenbaum.

<br>

## Tout dépend de la façon de chercher

L'écart vient entièrement des effectifs. Il y a incomparablement plus d'objets non noirs que de corbeaux&nbsp;: un corbeau blanc y serait une aiguille dans une botte de foin, et ne pas tomber dessus n'apprend presque rien.

Inversons les proportions, et l'ornithologie en chambre redevient parfaitement raisonnable. Pour vérifier que «&nbsp;tous les montages sous tension de la salle de TP ont leur capot fermé&nbsp;», on peut inspecter les montages sous tension. Mais on peut tout aussi bien regarder les quelques montages au capot ouvert et vérifier qu'aucun n'est sous tension. C'est la contraposée, et personne n'y voit de paradoxe.

Autre leçon&nbsp;: ce n'est pas l'objet observé qui confirme, c'est la **procédure** qui l'a fourni. Un corbeau noir obtenu en tirant un corbeau au hasard n'apporte pas la même information que le même oiseau obtenu en tirant un objet noir au hasard, ou en demandant à un ami de nous montrer un corbeau noir. Le statisticien I. J. Good a même construit une situation où observer un corbeau noir fait *baisser* la probabilité que tous les corbeaux soient noirs[^1].

[^1]: I. J. Good, «&nbsp;The White Shoe Is a Red Herring&nbsp;», *The British Journal for the Philosophy of Science*, 17(4), 322 (1967). On hésite entre deux mondes. Dans le premier, il y a cent corbeaux, tous noirs, parmi un million d'oiseaux. Dans le second, mille corbeaux noirs, un corbeau blanc et un million d'autres oiseaux. On tire un oiseau au hasard&nbsp;: c'est un corbeau noir. L'événement est dix fois plus probable dans le second monde, et plaide donc pour celui où tous les corbeaux ne sont pas noirs.

<br>

## En vidéo

Le paradoxe raconté en vidéo (en anglais)&nbsp;:

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube Ca_sxDTPo60>}}
</div>

<br>

## Pour aller plus loin

- <a href="https://plato.stanford.edu/entries/confirmation/" target="_blank">*Confirmation*</a>, Stanford Encyclopedia of Philosophy.
- Carl G. Hempel, «&nbsp;Studies in the Logic of Confirmation&nbsp;», *Mind*, 54 (1945).
- [Inférence bayésienne](../../../maths/stat/bayes/), sur ce site.
