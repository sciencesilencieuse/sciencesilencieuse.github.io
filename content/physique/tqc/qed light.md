+++
title = "QED light"
date = 2021-03-06T14:20:50+01:00
weight = 4
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
</style>


# Réflexion vitreuse


Pourquoi lors d’une réflexion sur un milieu transparent (eau, verre, etc.), la lumière semble-t-elle se réfléchir uniquement sur la surface, alors que la transparence même du milieu assure que la lumière pénètre bien à l’intérieur&nbsp;? Qu’a donc de si particulier la surface&nbsp;? Rien assurément. Mais POURQUOI ALORS crie le curieux désespéré face au Grand Téton.

<div style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;margin-bottom:-2em;margin-top:-1em;">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Grandtetonnational_park59887215.jpg" style="box-shadow:none;background:none;">
</div>
<p style="margin-top:-2em;text-align:center;font-size:0.9em;"><i>photo : <a href="https://fr.m.wikipedia.org/wiki/Fichier:Grandtetonnational_park59887215.jpg">Chascar</a> (Parc national du Grand Teton près du Jackson Lake Lodge)</i></p>

C’est là qu’un Feynman capée de sa déconcertante facilité débarque : «c’est une histoire de petites flèches pauvre créature limitée». Et il développa ces histoires de flèches dans une série de conférences tout public consacrées à l’électrodynamique quantique (*QED the strange theory of light and matter*).<br>
L’électrodynamique quantique, hmm... D’après Wikipedia, cette théorie s’occupe des interactions entre électrons, donc de la lumière. On lit aussi que la QED s’inscrit dans un cadre conceptuel plus large : la **théorie quantique des champs** (TQC). Là, on a peur : la réponse serait-elle aussi inaccessible que le Grand Téton&nbsp;? Mais puisque l’irritant génie te dit que ce n’est qu’une histoire de flèches...<br>
Tentons de colporter Sa parole.<br>


## Long préalable : des flèches qui tournent

La quantique nous apprend que l’observation d’un évènement est probabiliste : on a une certaine probabilité d’observé un photon à un endroit donné, et la probabilité complémentaire de ne pas l’observer. La TQC ajoute que cette probabilité finale résulte d’une interférence entre de multiples ondelettes de probabilité qui se propagent partout dans l’espace sur un champ mystérieux.

Précisons un peu&nbsp;: quelque soit l’évènement, la probabilité de le détecter s’obtient par superposition (ou somme) de toutes les probabilités attachées à chaque réalisation possible de l’évènement (même la plus saugrenue !). Techniquement, on somme des amplitudes de probabilités qui se propagent en oscillant au cours du temps le long de chaque chemin de réalisation considéré.

Mais sommer des trucs qui oscillent n’est pas tout à fait aussi simple que de sommer des carottes. Cela revient en fait à sommer des flèches qui tournent.

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed1.png" style="box-shadow:none;background:none;">
</div>

Remarque&nbsp;: une flèche qui tourne peut être modélisée par un nombre complexe $\mathrm{e}^{\mathrm{i}t}$ (les complexes permettent de représenter un vecteur, une flèche, en un seul nombre, la partie imaginaire servant de 2<sup>e</sup> axe, et $\mathrm{e}^{\mathrm{i}t}$ représente une flèche qui fait un tour par seconde). Grâce aux complexes, on somme presque des ondes comme des carottes.<br>
Ajoutons que le nombre de tours par seconde que font ces flèches (la fréquence des ondes) est proportionnel à l’énergie (plus précisément à l’hamiltonien $H$, ce qui donne une amplitude complexe en $\mathrm{e}^{\mathrm{i}Ht}$).

N’importe quel processus, comme aller d’un point A à un point B, peut se faire d’une infinité de façons. La TQC assure que toutes ces possibilités sont à prendre en compte et à sommer, y compris la promenade du photon au jardin des tuileries avant de revenir en B. Dans un monde très simplifié où le photon n’interagit avec personne lors de son parcours (énergie constante et uniforme), chacune de ces possibilités a la même probabilitéréflexion de se réaliser, et par conséquent, chacune correspond à une flèche de même taille (très très petite). Même taille d’accord, mais pas même orientation. Chaque flèche aura tourné d’un angle proportionnel au temps du parcours&nbsp;!

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed2.png" style="box-shadow:none;background:none;">
</div>

Et cette rotation qui n’a l’air de rien est primordiale. En effet, on peut sommer 1000 flèches de même longueur et obtenir une flèche de longueur nulle, il suffit que, mises bout à bout, la dernière flèche pointe sur le pied de la première.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed3.png" style="box-shadow:none;background:none;">
</div>

On ajoute donc des petites flèches les unes aux autres, une flèche par possibilité, et la probabilité final d’observer l’évènement va dépendre de l’angle dont les flèches tournent d’un chemin à l’autre (le chemin étant une possibilité de réalisation).
Rq&nbsp;: cette somme sur l’ensemble des chemins correspond aux intégrales de chemin de Feynman.

Mais voyons où peuvent nous mener ces flèches qui tournent...

<br>

## Propagation rectiligne de la lumière

Reprenons l’histoire du photon allant d’un point A à un point B et dessinons tous les chemins possibles. Répétons-le, la longueur du chemin est proportionnelle à l’angle de rotation de la flèche correspondante. En sommant toutes les flèches, on se rend vite compte que seules certaines contributions sont «constructives» dans le sens où elles seules permettent d’augmenter la longueur de la flèche finale. Et elles correspondent à des parcours rectilignes ou quasi rectilignes.<br>
En effet, près de la ligne droite, les différents chemins sont quasiment aussi longs et sont donc parcourus en des temps très proches. Par conséquent, les flèches tournent peu et pointent à peu près dans la même direction. Leur somme donne donc une flèche plus grande ! C’est une situation d’interférence entre ondes en phase. Au contraire, dès qu’on s’écarte de la ligne droite, ça tourne beaucoup et la somme ne donne plus rien (les ondes sont déphasées, les interférences destructives).

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed4.png" style="box-shadow:none;background:none;">
</div>

On redécouvre là le **principe de Fermat** (et tous les autres **principes variationnels** qui se résument au **principe de moindre action** puisque c’est elle, $H\times t$, qui fait la phase de nos ondes)&nbsp;! Mais la lumière ne «cherche» pas à minimiser son temps de parcours, c’est seulement que près de ce chemin particulier, la quasi stationnarité des phases augmente la probabilité de présence. Un extrémum dans la variation de parcours correspond à des flèches variant peu d’angles pour des parcours proches et donc à une accumulation d’amplitudes de probabilité dans cette zone. Et à l’inverse, si on s’écarte de cet extrémum (puits ou col) les variations sont grandes et la somme devient vite destructive (les flèches tournent en rond).

Si le milieu de propagation des photons est inhomogène, faisant varier spatialement la vitesse de la lumière (on verra plus bas que cette variation est artificielle), l’extrémisation des temps de trajet ne donne alors plus une ligne droite ! D’où la réfraction (et les mirages).

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Highway_Mirage_%285994891327%29.jpg" style="box-shadow:none;background:none;border-radius:5px;">
</div>

Mais réhomogénéisons le milieu et revenons sur un point très important&nbsp;: le parcours en ligne droite ne représente pas à lui seul la contribution la plus probable. Il l’est autant que n’importe quel autre parcours (y compris le passage par les Tuileries). C’est l’accumulation de parcours proches variant peu qui augmente la probabilité&nbsp;!
Mais que peut-il alors bien se passer si on empêche les ondes de probabilité d’aller fureter aux alentours&nbsp;?

<br>

## Diffraction

Envoyons un photon depuis A et comparons la probabilité qu’il arrive en B ou en C. On a compris l’histoire : dans le 1er cas, il faut sommer tous les chemins possibles entra A et B, et dans le 2<sup>e</sup>, entre A et C. D’un chemin à l’autre, il y a plus de variation entre A et C, donc les flèches tournent plus et les ondes de probabilité ont donc plus vite fait de se détruire.<br>Résultat&nbsp;: une probabilité de détection beaucoup plus faible en C qu’en B (négligeable même).

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed5.png" style="box-shadow:none;background:none;">
</div>

Mais si on resserre le passage...

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed6.png" style="box-shadow:none;background:none;">
</div>

Moins de chemins sont maintenant accessibles et les ondes de probabilité n’ont donc plus trop le loisir d’interférer destructivement. Tous les lieux de détection tendent alors à se ressembler et la probabilité d’être détecté en C n’est ainsi plus du tout négligeable&nbsp;! La lumière est diffractée.

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diffrchat.png" style="box-shadow:none;background:none;border-radius:15px;">
</div>

On peut aussi jouer les vicieux et obturer certains passages de manière à ce que les flèches arrivent toute en phase en un point où, sans cela, la probabilité de détection aurait été très faible.

Sans bouchons, c’est pas terrible&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed7.png" style="box-shadow:none;background:none;">
</div>

Avec bouchons, oulala la grosse flèche&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed8.png" style="box-shadow:none;background:none;">
</div>

On vient de fabriquer un réseau et prouver du même coup que les probas fouinent bien partout&nbsp;; un endroit plongé dans le noir peut être éclaboussé de lumière en cachant une partie de cette lumière&nbsp;! Il faut se débrouiller néanmoins pour la cacher astucieusement afin d’augmenter la probabilité de présence en cet endroit. Au départ, les probas étaient bien venues voir C mais elles trouvaient l’endroit pas terrible. Après disposition des petits caches, C devient tout à fait fréquentable...

Mais revenons au Grand Téton.

<br>

## Ralentissement de la lumière dans le verre


Il nous manque un ingrédient pour parler de réflexion : la diffusion d’un photon par un atome (la lumière réfléchie n’est pas la lumière incidente, c’est de la lumière toute neuve, crachée par un atome éclairé).<br>
Il va y a voir une certaine probabilité d’être diffusé, une nouvelle flèche... Sa taille donne la proba de diffusion dans la direction qui nous intéresse, chose qu’on ne sait pas calculer dans le cas du verre ou de l’eau mais qu’on peut déduire expérimentalement comme on le verra plus loin.<br>
On a sa taille (enfin non mais on fait comme si), il manque encore la direction&nbsp;:<br>
dans le cas d’un milieu transparent, la proba de diffusion fait un quart de tour par rapport à la proba de passer sans encombre (+90°). Effectivement, la flèche finale (être et ne pas être diffusée) ne doit pas se trouvée réduite (dans l’approximation où le milieu est parfaitement transparent et donc n’absorbe pas, ça semble logique), ni agrandie (car ça serait bizarre). Seule possibilité restante&nbsp;: l’ajout d’une petite flèche à 90° qui fait seulement tourner la probabilité de ne pas être diffusé.<br>
En vrai, bien sûr, le milieu absorbe un peu. Il suffit, pour le retranscrire en flèches, de courber à peu moins de 90° la flèche de la diffusion, ce qui réduira la taille de la flèche finale.

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed9.png" style="box-shadow:none;background:none;">
</div>

Faisons traverser une certaine épaisseur de verre à la lumière et regardons la probabilité que le récepteur en détecte. On simplifie en supposant que la lumière ne se dirige que dans une direction.<br>
Un photon détecté peut être passé à travers le verre sans avoir été diffusé (grosse flèche bleue) ou avoir été émis par un atome après diffusion (petite flèche verte). Chaque atome sur le trajet est susceptible d’avoir émis un photon détecté après avoir été atteint par le photon incident (différentes flèches vertes, toutes alignées car le trajet total est toujours aussi long).
On somme tout ça et qu’obtient-on approximativement&nbsp;? Une grosse flèche de passage direct qui a tourné un peu (flèche rouge).<br>
Très bien, mais n’y a-t-il pas autre chose qui aurait pu donner une flèche semblable&nbsp;? Si, si, un trajet sans verre mais un poil plus long&nbsp;! On peut donc faire semblant et dire que le temps de parcours (et donc l’angle de rotation de la flèche) est rallongé par le verre, puisque tout se passe comme si. D’où la vilaine et néanmoins très pratique assertion «le verre ralentit la lumière» (alors que les photons continuent tous à se déplacer à c bien sûr).

<br>

## Réflexion vitreuse

Ayé, il est temps d’essayer de répondre à la question du départ...
Il suffit de déplacer le récepteur au niveau de l’émetteur (pour rester avec une seule direction) et on regarde ce qui se passe avec les flèches&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/qed10.png" style="box-shadow:none;background:none;">
</div>

La lumière qui retourne au récepteur a nécessairement été diffusée (flèche verte) et suivant la profondeur de l’atome diffusant, le parcours total est plus ou moins long, et donc, d’une possibilité de diffusion à l’autre, les flèches vertes tournent (la probabilité d’être détecté après diffusion sur l’atome 4 est déphasée par rapport à celle correspondant à l’atome 3).
Mises bout à bout, les probabilités de diffusion, de même taille et un peu déphasées, tournent en rond. Le résultat final peut alors se résumer à la somme de deux rayons de cercle (flèche bleue + flèche rouge). Suivant l’épaisseur de la vitre traversée, la probabilité de détecter un photon réfléchi varie donc entre 0 et le diamètre du cercle dessiné par les probabilités.
Expérimentalement, cette oscillation de la réflexion en fonction d l’épaisseur est bien observée et on la trouve comprise entre 0 et 16%. Mais cela suppose une épaisseur de vitre parfaitement déterminée (à une fraction de longueur d’onde près). Dans un cas plus ordinaire, la flèche rouge s’affole et fait pleins de tours, son orientation devient aléatoire. La probabilité d’être détecté se réduit à la flèche bleue. On mesure donc facilement le rayon du cercle puisqu’il correspond à la probabilité de réflexion moyenne sur une surface vitrée (8%).

On remarque que la flèche verte n°1, correspondant à la probabilité de diffusion sur un atome de la surface (le tout premier), fait un angle de -90° par rapport à la flèche bleue. La flèche bleue a par conséquent un angle de rotation opposé (+π) à la flèche qui représenterait la probabilité de faire le même trajet aller-retour, mais sans avoir été diffusé (si c’était possible), rebond du photon sur la face avant quoi. Par ailleurs, la flèche rouge a, elle, une orientation correspondante à un trajet long comme l’aller-retour jusqu’à la face postérieure (la diffusion sur le petit dernier, n°6, fait bien un angle d’environ +90° avec elle).

On peut maintenant simplifier notre description. La réflexion sur une vitre se résume à l’interférence entre deux trajets possibles pour le photon&nbsp;:
<ul style="margin-top:-0em;">
<li>rebond sur la face avant + déphasage de 180° avec une probabilité de 8% (flèche bleue),</li>
<li>rebond sur la face arrière avec aussi une probabilité de 8% (flèche rouge).</li>
</ul>
Et si la vitre est ordinaire (épaisseur aléatoire sur une taille caractéristique d’une fraction de longueur d’onde), tout se résume à un rebond sur la face avant&nbsp;!

Et l’agacement nerveux provoqué par les deux Grands Tétons s’apaisent enfin (les quelques secondes où on réussi à étouffer le désespérant bourdonnement des millions de questions qui essaiment derrière ces flèches).

