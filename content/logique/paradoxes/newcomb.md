+++
title = "Paradoxe de Newcomb"
date = 2026-11-11T12:00:00+01:00
weight = 3
+++

# Paradoxe de Newcomb

> Deux boîtes, un devin presque infaillible et une question toute simple&nbsp;: en prenez-vous une ou deux&nbsp;?

<br>

## Le jeu

Devant vous, deux boîtes&nbsp;:

- la boîte **A** est transparente et contient 1&nbsp;000&nbsp;€&nbsp;;
- la boîte **B** est opaque et contient soit 1&nbsp;000&nbsp;000&nbsp;€, soit rien du tout.

Vous avez le choix entre prendre **la boîte B seule** ou prendre **les deux boîtes**.

Le contenu de B a été décidé hier par un Prédicteur. S'il a prévu que vous prendriez B seule, il y a déposé le million. S'il a prévu que vous prendriez les deux, il l'a laissée vide. Or ce Prédicteur est redoutable&nbsp;: il a déjà joué des milliers de fois, et il ne s'est presque jamais trompé. Vous savez tout cela, et il sait que vous le savez.

<div style="overflow-x: auto;">
<table>
  <tr>
    <th></th>
    <th>B contient le million</th>
    <th>B est vide</th>
  </tr>
  <tr>
    <th>Vous prenez B seule</th>
    <td>1&nbsp;000&nbsp;000&nbsp;€</td>
    <td>0&nbsp;€</td>
  </tr>
  <tr>
    <th>Vous prenez A et B</th>
    <td>1&nbsp;001&nbsp;000&nbsp;€</td>
    <td>1&nbsp;000&nbsp;€</td>
  </tr>
</table>
</div>

Que faites-vous&nbsp;?

Le problème a été imaginé en 1960 par le physicien William Newcomb, puis rendu célèbre par le philosophe Robert Nozick en 1969.

<br>

## Deux raisonnements irréprochables

### Une seule boîte&nbsp;: le calcul d'espérance

Supposons que le Prédicteur voie juste avec une probabilité $p$.

Si je prends B seule, il l'avait prévu avec la probabilité $p$, et je gagne en moyenne (en euros)

$$E_1 = p\times 10^6$$

Si je prends les deux, je touche les 1&nbsp;000&nbsp;€ à coup sûr, plus le million s'il s'est trompé&nbsp;:

$$E_2 = 10^3 + (1-p)\times 10^6$$

Avec un Prédicteur fiable à 99&nbsp;%, cela fait 990&nbsp;000&nbsp;€ d'un côté et 11&nbsp;000&nbsp;€ de l'autre. Il n'y a pas photo. Mieux, la boîte unique l'emporte dès que

$$p > \frac{1}{2}+\frac{10^3}{2\times 10^6} = 0{,}5005$$

Un Prédicteur à peine meilleur qu'une pièce de monnaie suffit. Et d'ailleurs, regardez autour de vous&nbsp;: ceux qui n'ont pris qu'une boîte sont repartis millionnaires, les autres avec 1&nbsp;000&nbsp;€.

### Deux boîtes&nbsp;: l'argument de dominance

Le Prédicteur est passé hier. À l'instant où je choisis, le contenu de B est fixé, et rien de ce que je ferai ne peut le modifier. De deux choses l'une&nbsp;:

- soit B contient le million, et prendre les deux me rapporte 1&nbsp;001&nbsp;000&nbsp;€ au lieu de 1&nbsp;000&nbsp;000&nbsp;€&nbsp;;
- soit B est vide, et prendre les deux me rapporte 1&nbsp;000&nbsp;€ au lieu de rien.

Dans les deux cas, je gagne 1&nbsp;000&nbsp;€ de plus en prenant tout&nbsp;: il suffit de lire le tableau colonne par colonne. On dit que cette stratégie **domine** l'autre. Un ami qui verrait l'intérieur de la boîte B me conseillerait de prendre les deux, quoi qu'il y voie&nbsp;!

<br>

Nozick remarquait que presque tout le monde trouve la réponse évidente, mais que les gens se partagent à peu près en deux camps, chacun persuadé que l'autre déraisonne. Les philosophes de métier ne font pas mieux&nbsp;: dans l'enquête PhilPapers de 2020, environ quatre sur dix choisissaient les deux boîtes, trois sur dix une seule, et les autres ne tranchaient pas.

<br>

## Deux théories de la décision

Le calcul d'espérance et l'argument de dominance sont deux piliers de la théorie de la décision et, d'ordinaire, ils ne se contredisent jamais. Pourquoi ici&nbsp;? Parce que l'argument de dominance n'est valable que si l'état du monde, ici le contenu de B, est **indépendant** de mon choix. Et tout le problème est de savoir ce qu'«&nbsp;indépendant&nbsp;» veut dire.

- **Causalement**, il l'est&nbsp;: mon choix d'aujourd'hui ne peut pas agir sur un dépôt fait hier. C'est le point de vue de la *théorie causale de la décision*, qui recommande les deux boîtes.
- **Statistiquement**, il ne l'est pas&nbsp;: mon choix et le contenu de la boîte sont fortement corrélés. C'est le point de vue de la *théorie évidentielle de la décision*, qui recommande l'acte qui constitue la meilleure nouvelle, donc une seule boîte.

Une corrélation sans causalité&nbsp;: le schéma est classique. Mon choix ne cause pas le contenu de la boîte, le contenu ne cause pas mon choix, mais les deux ont une **cause commune**&nbsp;: ce que je suis, mon caractère, l'état de mon cerveau hier, que le Prédicteur a su lire.

<p style="text-align:center;font-size:1.1em;">
contenu de B &nbsp;⟵&nbsp; prédiction &nbsp;⟵&nbsp; <b>ce que je suis</b> &nbsp;⟶&nbsp; mon choix
</p>

Le partisan des deux boîtes en conclut&nbsp;: «&nbsp;ce que je suis est déjà joué, autant ramasser les 1&nbsp;000&nbsp;€&nbsp;». Le partisan de la boîte unique lui répond&nbsp;: «&nbsp;justement, sois quelqu'un qui n'en prend qu'une&nbsp;».

{{< notice type="coeur" round="true" >}}
Les deux camps n'évaluent pas la même chose. Si l'on juge un **acte isolé**, une fois les boîtes remplies, prendre les deux est imbattable. Si l'on juge une **disposition**, une règle de conduite adoptée une fois pour toutes, «&nbsp;ne prendre qu'une boîte&nbsp;» rapporte bien davantage. Le paradoxe se loge exactement dans cet écart&nbsp;: la meilleure règle prescrit un acte qui, pris isolément, n'est pas le meilleur.
{{< /notice >}}

<br>

## Et si le Prédicteur vous simulait&nbsp;?

On peut pousser l'expérience de pensée un cran plus loin. Comment le Prédicteur s'y prend-il&nbsp;? S'il est un démon de Laplace, il connaît l'état de chaque particule de mon cerveau et déroule les équations. Autrement dit, il **me simule**.

Mais alors, au moment de choisir, comment savoir si je suis l'original, devant les vraies boîtes, ou la simulation, dont le choix va déterminer leur contenu&nbsp;? Dans le second cas, mon choix *cause* bel et bien le contenu de B, et même le plus fervent partisan de la causalité devrait ne prendre qu'une boîte.

Le paradoxe de Newcomb finit ainsi par reposer une vieille question&nbsp;: que reste-t-il de la notion de «&nbsp;choix&nbsp;» pour un système dont le comportement est prévisible&nbsp;?

{{< notice type="tip" title="Une variante" round="true" >}}
Vous jouez au dilemme du prisonnier contre une copie exacte de vous-même. Coopérez-vous&nbsp;? Le philosophe David Lewis a montré que c'est le même problème&nbsp;: votre copie fera ce que vous ferez, sans que vous puissiez agir sur elle.
{{< /notice >}}

<br>

## Pour aller plus loin

- <a href="https://plato.stanford.edu/entries/decision-causal/" target="_blank">*Causal Decision Theory*</a>, Stanford Encyclopedia of Philosophy.
- Robert Nozick, «&nbsp;Newcomb's Problem and Two Principles of Choice&nbsp;», dans *Essays in Honor of Carl G. Hempel* (1969).
- David Lewis, «&nbsp;Prisoners' Dilemma Is a Newcomb Problem&nbsp;», *Philosophy & Public Affairs*, 8(3) (1979).
