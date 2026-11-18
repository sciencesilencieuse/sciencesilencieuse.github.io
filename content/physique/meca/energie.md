+++
title = "Énergie cinétique et travail"
date = 2026-11-18T10:00:00+01:00
weight = 1
css = "meca.css"
+++

# Énergie cinétique et travail

D'où vient l'idée qu'un corps en mouvement porte une «&nbsp;énergie&nbsp;», et pourquoi celle-ci croît-elle comme le **carré** de sa vitesse&nbsp;? Cette page suit les deux questions dans l'ordre&nbsp;: d'abord la naissance des notions d'énergie cinétique et de travail, puis la raison de ce $v^2$.

## La naissance de l'énergie cinétique et du travail

Une approche historique sur l'émergence du concept d'énergie en mécanique, de Descartes à Einstein.

{{< youtube-plus id="ivc3-Tt56Uo" ratio="16x9" width="800" shadow=true rounded=true >}}

Sources&nbsp;:

> Bevilacqua, F. (2003). “An Historico-Critical Account of Potential Energy: Is It an Energy of Form or an Energy of Position?”. The Physics Teacher. 41 (8): 466–472<br>
> Karam, R. (2019). “Understanding energy as a subtle concept: A model for teaching and learning energy”. American Journal of Physics. 87 (7): 495–501

### L'expérience de Galilée

Bien avant qu'on parle d'énergie, Galilée remarque qu'une hauteur de chute et une vitesse sont liées d'une façon très particulière. Un feuillet de ses notes de travail, le **folio 116v** (vers 1608), consigne une expérience que l'historien Stillman Drake a reconstituée dans les années 1970. Une bille est lâchée d'une hauteur $h$ sur un plan incliné posé sur une table. En bas, un déflecteur la renvoie à l'horizontale&nbsp;; elle roule jusqu'au bord de la table, puis tombe au sol.

L'astuce tient à la chute finale. Sa durée ne dépend que de la hauteur de la table, la même à chaque lancer. La distance $d$ parcourue horizontalement pendant la chute est donc proportionnelle à la vitesse de la bille au bord de la table&nbsp;: mesurer $d$, c'est mesurer cette vitesse.

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Hauteur de lâcher $h$</th><th>Portée $d$</th><th>$d/\sqrt{h}$</th></tr>
<tr><td>300</td><td>800</td><td>46,2</td></tr>
<tr><td>600</td><td>1172</td><td>47,8</td></tr>
<tr><td>800</td><td>1328</td><td>47,0</td></tr>
<tr><td>828</td><td>1340</td><td>46,6</td></tr>
<tr><td>1000</td><td>1500</td><td>47,4</td></tr>
</table>
</div>
<p class="legende" style="text-align:center;font-size:0.9em;color:#64748b;"><i>Les mesures du folio 116v, en </i>punti<i> (un </i>punto<i> vaut environ 0,94 mm&nbsp;; la table mesure 828 </i>punti<i>, soit 78 cm).</i></p>

Le rapport $d/\sqrt{h}$ est presque constant&nbsp;: la vitesse acquise est proportionnelle à la **racine carrée de la hauteur**. Autrement dit, la hauteur de chute est proportionnelle au carré de la vitesse, $h\propto v^2$. C'est le germe de l'énergie cinétique&nbsp;: Huygens, puis Leibniz avec sa «&nbsp;force vive&nbsp;» $mv^2$, en tireront l'idée qu'une grandeur en $v^2$ s'échange contre de la hauteur.

À vous de refaire l'expérience. Lâchez la bille de différentes hauteurs et comparez vos points aux mesures de Galilée. Cochez ensuite «&nbsp;abscisse en $\sqrt{h}$&nbsp;»&nbsp;: les points s'alignent sur une droite. Changez enfin l'inclinaison sans toucher à la hauteur&nbsp;: la descente est plus ou moins longue, mais la bille arrive en bas avec la même vitesse, et tombe au même endroit.

<div class="anim" data-anim="galilee"></div>
{{< script "js/galilee.js" >}}

<div class="encadre">
<div class="encadre-titre">Une bille qui roule</div>

Une bille qui glisserait sans frottement arriverait en bas avec la vitesse $v=\sqrt{2gh}$. Celle de Galilée roule&nbsp;: elle consacre une partie de son énergie à tourner sur elle-même (deux septièmes pour une sphère pleine), et n'atteint que $v=\sqrt{10gh/7}$. Le facteur est le même pour toutes les hauteurs, et ne change donc rien à la proportionnalité à $\sqrt{h}$. L'animation en tient compte&nbsp;: sa courbe théorique, $d=2\sqrt{5hH/7}$ où $H$ est la hauteur de la table, suit les mesures de Galilée à environ 5&nbsp;% près.

</div>

## Pourquoi une énergie cinétique en $v^2$&nbsp;?

Trois démonstrations de la formule de l'énergie cinétique.

Je trouve la deuxième (celle de Johann Bernoulli) fabuleuse d'intuition géométrique (elle utilise l'[escargot de Pythagore](https://youtu.be/2Ea1hh81dds), voir aussi la [page de géométrie](../../../maths/geometrie/geo1/#escargot-de-pythagore)).

{{< youtube-plus id="3a2qOozWpr0" ratio="16x9" width="800" shadow=true rounded=true >}}

Sources&nbsp;:

> Prentis, J. J. (2005). “Why is the energy of motion proportional to the square of the velocity?”. American Journal of Physics. 73 (8): 701–707<br>
> Maimon, R. (2011). “Why does kinetic energy increase quadratically, not linearly, with speed?”. Physics Stack Exchange. [🌐](https://physics.stackexchange.com/questions/535/why-does-kinetic-energy-increase-quadratically-not-linearly-with-speed/14752#14752)

### La preuve de Bernoulli en animation

L'argument de Johann Bernoulli repose sur des **ressorts identiques qui se bloquent** une fois comprimés. Un tel ressort, heurté de face par une bille animée d'une unité de vitesse, l'arrête et garde l'énergie qu'il a reçue&nbsp;: prenons-la pour unité d'énergie. Combien de ressorts faut-il pour arrêter une bille de $n$ unités de vitesse&nbsp;?

On pourrait croire qu'il en faut $n$, alignés les uns derrière les autres. Mais un ressort n'absorbe qu'**une** unité de vitesse dans son axe&nbsp;: une bille plus rapide le comprimerait au-delà de sa course. Bernoulli dispose donc ses ressorts en biais. Chacun, fixé à un support, porte à son extrémité une plaque parfaitement lisse. Décomposons la vitesse $v$ de la bille en deux composantes orthogonales&nbsp;:

- une composante $v\_\parallel=1$ perpendiculaire à la plaque, dans l'axe du ressort&nbsp;: en heurtant la plaque, la bille la fait reculer et comprime le ressort, qui absorbe peu à peu cette composante puis se bloque&nbsp;;
- une composante $v\_\perp=\sqrt{v^2-1}$ parallèle à la plaque&nbsp;: une surface lisse ne peut pousser que perpendiculairement à elle-même, elle ne touche donc pas à cette composante. La bille longe la plaque pendant la compression, puis la quitte tangentiellement avec cette seule vitesse.

À chaque ressort, le carré de la vitesse diminue donc exactement de $1$&nbsp;: $v^2$ passe de $n^2$ à $n^2-1$, puis $n^2-2$, et ainsi de suite jusqu'à $0$. Il faut $n^2$ ressorts pour arrêter la bille&nbsp;: son énergie vaut $n^2$ unités, elle est proportionnelle au carré de sa vitesse.

<div class="anim" data-anim="bernoulli"></div>
{{< script "js/bernoulli.js" >}}

Les vitesses successives, tracées depuis un même point (à droite), dessinent l'[escargot de Pythagore](../../../maths/geometrie/geo1/#escargot-de-pythagore) parcouru de l'extérieur vers l'intérieur. Chaque triangle rectangle a pour côtés $1$ (en rose, la part absorbée par un ressort) et $\sqrt{m-1}$ (la vitesse qui reste), et pour hypoténuse $\sqrt{m}$, la vitesse avant le choc.

<div class="encadre prune">
<div class="encadre-titre">Pourquoi un ressort en biais absorbe-t-il la même énergie&nbsp;?</div>

C'est le cœur de l'argument, et c'est un principe de relativité à la Galilée. Plaçons-nous dans un référentiel qui glisse le long de la plaque à la vitesse $v\_\perp$. Dans ce référentiel, la plaque défile parallèlement à elle-même, mais la bille arrive de face, avec une seule unité de vitesse&nbsp;: c'est exactement la situation de référence, et le ressort se bloque en ayant stocké une unité d'énergie. Les mouvements dans deux directions perpendiculaires s'ignorent l'un l'autre, et c'est ce qui permet de décomposer la vitesse.

</div>
