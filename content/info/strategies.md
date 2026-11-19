+++
title = "Stratégies"
date = 2026-11-18T10:00:00+01:00
weight = 2
chapter = false
css = "algo.css"
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
 #debord
{
overflow-x: auto; 
}
details > summary:first-of-type {
  display: list-item;     
  cursor: pointer;        
}
details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
</style>


# Stratégies algorithmiques

Face à un problème nouveau, le réflexe le plus fécond de l'algorithmicien tient en une question&nbsp;: *et si je savais déjà résoudre le même problème, en plus petit&nbsp;?* Trier mille cartes, c'est trier deux paquets de cinq cents, puis les fusionner. Calculer le centième terme d'une suite, c'est d'abord connaître les précédents. Trouver le plus court chemin vers Lyon, c'est d'abord le trouver vers les villes voisines.

Ce geste dessine un **arbre**&nbsp;: chaque problème s'y ramifie en sous-problèmes, qui se ramifient à leur tour, jusqu'à des cas si simples qu'on les résout d'un coup. Toutes les grandes stratégies de conception, que Roughgarden appelle des *paradigmes*, partent de cet arbre&nbsp;; elles diffèrent par ce qu'elles en font. Cette page les suit dans l'ordre où elles l'apprivoisent, avant de montrer comment le choix d'une **structure de données** décide de l'ordre dans lequel on le parcourt.

<div style="text-align:center;margin:1.2em 0 0.4em;">
<svg viewBox="0 0 760 254" role="img" aria-label="Le même arbre de sous-problèmes vu par quatre stratégies : un arbre complet d'appels récursifs ; des morceaux deux fois plus petits à chaque niveau ; un arbre dont les nœuds identiques sont fusionnés ; une seule branche suivie" style="width:100%;max-width:760px;height:auto;"><line x1="90.6" y1="45.4" x2="61.9" y2="80.6" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="99.4" y1="45.4" x2="128.1" y2="80.6" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="54.9" y1="92.5" x2="41.4" y2="125.5" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="60.1" y1="92.5" x2="73.6" y2="125.5" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="129.9" y1="92.5" x2="116.4" y2="125.5" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="135.1" y1="92.5" x2="148.6" y2="125.5" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="37.4" y1="138.9" x2="30.8" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="40.1" y1="138.9" x2="46.7" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="74.9" y1="138.9" x2="68.3" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="77.6" y1="138.9" x2="84.2" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="112.4" y1="138.9" x2="105.8" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="115.1" y1="138.9" x2="121.7" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="149.9" y1="138.9" x2="143.3" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><line x1="152.6" y1="138.9" x2="159.2" y2="171.1" stroke="#475569" stroke-width="1.3" opacity="1"/><circle cx="95.0" cy="40.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="57.5" cy="86.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="132.5" cy="86.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="38.8" cy="132.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="76.2" cy="132.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="113.8" cy="132.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="151.2" cy="132.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="29.4" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="48.1" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="66.9" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="85.6" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="104.4" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="123.1" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="141.9" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><circle cx="160.6" cy="178.0" r="7" fill="#fff" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="95.0" y="236" text-anchor="middle" font-size="13" font-weight="600" fill="#475569" font-family="sans-serif">Récursivité</text><text x="95.0" y="249.5" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">un arbre d'appels</text><line x1="285.0" y1="46.0" x2="247.5" y2="80.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="285.0" y1="46.0" x2="322.5" y2="80.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="247.5" y1="92.0" x2="228.8" y2="126.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="247.5" y1="92.0" x2="266.2" y2="126.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="322.5" y1="92.0" x2="303.8" y2="126.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="322.5" y1="92.0" x2="341.2" y2="126.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="228.8" y1="138.0" x2="219.4" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="228.8" y1="138.0" x2="238.1" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="266.2" y1="138.0" x2="256.9" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="266.2" y1="138.0" x2="275.6" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="303.8" y1="138.0" x2="294.4" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="303.8" y1="138.0" x2="313.1" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="341.2" y1="138.0" x2="331.9" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="341.2" y1="138.0" x2="350.6" y2="172.0" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><rect x="219.0" y="34.0" width="132.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="215.5" y="80.0" width="64.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="290.5" y="80.0" width="64.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="213.8" y="126.0" width="30.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="251.2" y="126.0" width="30.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="288.8" y="126.0" width="30.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="326.2" y="126.0" width="30.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="212.9" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="231.6" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="250.4" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="269.1" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="287.9" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="306.6" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="325.4" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><rect x="344.1" y="172.0" width="13.0" height="12" rx="3" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="365.0" y="44.0" font-size="10" fill="#004D80" font-family="sans-serif" text-anchor="end"></text><text x="285.0" y="236" text-anchor="middle" font-size="13" font-weight="600" fill="#004D80" font-family="sans-serif">Diviser pour régner</text><text x="285.0" y="249.5" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">des morceaux disjoints</text><line x1="190.0" y1="30" x2="190.0" y2="210" stroke="#e2e8f0"/><line x1="468.5" y1="47.6" x2="445.5" y2="74.4" stroke="#006C65" stroke-width="1.4" opacity="1"/><line x1="478.9" y1="49.2" x2="507.1" y2="114.8" stroke="#006C65" stroke-width="1.4" opacity="1"/><line x1="447.6" y1="87.0" x2="502.4" y2="119.0" stroke="#006C65" stroke-width="1.4" opacity="1"/><line x1="439.0" y1="92.0" x2="439.0" y2="156.0" stroke="#006C65" stroke-width="1.4" opacity="1"/><line x1="502.4" y1="129.0" x2="447.6" y2="161.0" stroke="#006C65" stroke-width="1.4" opacity="1"/><line x1="511.0" y1="134.0" x2="511.0" y2="172.0" stroke="#006C65" stroke-width="1.4" opacity="1"/><circle cx="475.0" cy="40.0" r="10" fill="#EEF7F6" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="475.0" y="43.6" text-anchor="middle" font-size="10" fill="#006C65" font-family="sans-serif" opacity="1">F4</text><circle cx="439.0" cy="82.0" r="10" fill="#EEF7F6" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="439.0" y="85.6" text-anchor="middle" font-size="10" fill="#006C65" font-family="sans-serif" opacity="1">F3</text><circle cx="511.0" cy="124.0" r="10" fill="#EEF7F6" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="511.0" y="127.6" text-anchor="middle" font-size="10" fill="#006C65" font-family="sans-serif" opacity="1">F2</text><circle cx="439.0" cy="166.0" r="10" fill="#EEF7F6" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="439.0" y="169.6" text-anchor="middle" font-size="10" fill="#006C65" font-family="sans-serif" opacity="1">F1</text><circle cx="511.0" cy="182.0" r="10" fill="#EEF7F6" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="511.0" y="185.6" text-anchor="middle" font-size="10" fill="#006C65" font-family="sans-serif" opacity="1">F0</text><text x="475.0" y="236" text-anchor="middle" font-size="13" font-weight="600" fill="#006C65" font-family="sans-serif">Programmation dynamique</text><text x="475.0" y="249.5" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">les doublons fusionnés</text><line x1="380.0" y1="30" x2="380.0" y2="210" stroke="#e2e8f0"/><line x1="660.6" y1="45.4" x2="631.9" y2="80.6" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="669.4" y1="45.4" x2="698.1" y2="80.6" stroke="#970E53" stroke-width="2" opacity="1"/><line x1="624.9" y1="92.5" x2="611.4" y2="125.5" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="630.1" y1="92.5" x2="643.6" y2="125.5" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="699.9" y1="92.5" x2="686.4" y2="125.5" stroke="#970E53" stroke-width="2" opacity="1"/><line x1="705.1" y1="92.5" x2="718.6" y2="125.5" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="607.4" y1="138.9" x2="600.8" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="610.1" y1="138.9" x2="616.7" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="644.9" y1="138.9" x2="638.3" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="647.6" y1="138.9" x2="654.2" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="682.4" y1="138.9" x2="675.8" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="685.1" y1="138.9" x2="691.7" y2="171.1" stroke="#970E53" stroke-width="2" opacity="1"/><line x1="719.9" y1="138.9" x2="713.3" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><line x1="722.6" y1="138.9" x2="729.2" y2="171.1" stroke="#cbd5e1" stroke-width="1.2" opacity="0.6"/><circle cx="665.0" cy="40.0" r="7" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><circle cx="627.5" cy="86.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="702.5" cy="86.0" r="7" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><circle cx="608.8" cy="132.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="646.2" cy="132.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="683.8" cy="132.0" r="7" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><circle cx="721.2" cy="132.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="599.4" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="618.1" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="636.9" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="655.6" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="674.4" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="693.1" cy="178.0" r="7" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><circle cx="711.9" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><circle cx="730.6" cy="178.0" r="7" fill="#fff" stroke="#cbd5e1" stroke-width="1.6" opacity="0.7"/><text x="665.0" y="236" text-anchor="middle" font-size="13" font-weight="600" fill="#970E53" font-family="sans-serif">Glouton</text><text x="665.0" y="249.5" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">une seule branche</text><line x1="570.0" y1="30" x2="570.0" y2="210" stroke="#e2e8f0"/></svg>
</div>
<p class="legende">Le même arbre de sous-problèmes, vu par quatre stratégies.</p>

Les complexités sont exprimées avec la notation $\mathcal{O}$, présentée sur la page [Complexité](../complexite/#mesurer-sans-chronomètre), où plusieurs de ces stratégies ont déjà fait une apparition.

## Le geste fondateur&nbsp;: la récursivité

Une fonction récursive s'appelle elle-même sur une version plus petite du problème. Deux ingrédients suffisent&nbsp;: un **cas de base**, assez simple pour être résolu directement, et la garantie que chaque appel s'en rapproche. Pour le reste, on écrit la fonction en *supposant* qu'elle marche déjà sur les problèmes plus petits&nbsp;: c'est exactement le raisonnement par récurrence des mathématiciens. Ce n'est pas toujours la forme la plus économe, mais c'est souvent la plus claire, et la récursivité sait donner un air de magie aux algorithmes en permettant à de tout petits codes de réaliser des tâches étonnamment complexes.

Les tours de Hanoï en sont l'exemple le plus célèbre. Pour déplacer $n$ disques, on déplace les $n-1$ du dessus sur le piquet intermédiaire, on déplace le grand, puis on remet les $n-1$ par-dessus. Trois lignes, et le problème est résolu.

{{< youtube-plus id="lIIXLQvcd4Q" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="vpython" mode="output"  width="600" file="hanoi.py" autorun="true" />}}



<p style="margin-top:1.5em;">Fonction centrale du programme ci-dessus&nbsp;:</p>

<pre style="margin-top:-0.5em;"><code class="language-python">def Hanoi(n, depart, cible, inter):
    if n == 1:
      deplacement(depart,cible)
    else :
      Hanoi(n-1,depart,inter,cible)
      Hanoi(1,depart,cible,inter)
      Hanoi(n-1,inter,cible,depart)

Hanoi(6, 0, 2,1)</code></pre>

<div class="encadre prune">
<div class="encadre-titre">La tour de Brahma</div>

Le casse-tête est inventé en 1883 par le mathématicien Édouard Lucas, sous le pseudonyme de «&nbsp;N. Claus de Siam&nbsp;», anagramme de «&nbsp;Lucas d'Amiens&nbsp;». Il l'accompagne d'une légende&nbsp;: dans un temple de Bénarès, des prêtres déplaceraient sans relâche 64 disques d'or, et le monde finirait quand ils auraient terminé.

Combien de mouvements faut-il&nbsp;? Déplacer $n$ disques, c'est déplacer deux fois $n-1$ disques, plus le grand&nbsp;: $H(n)=2H(n-1)+1$ avec $H(1)=1$, d'où $H(n)=2^n-1$. On montre que c'est le minimum possible. Pour 64 disques, à un mouvement par seconde, il faudrait $2^{64}-1\approx 1{,}8\cdot 10^{19}$ secondes, soit environ 585 milliards d'années&nbsp;: le monde a de la marge.

</div>

<div class="encadre bleu">
<div class="encadre-titre">Comment l'ordinateur s'y retrouve&nbsp;: la pile d'appels</div>

Quand `Hanoi(3, …)` appelle `Hanoi(2, …)`, le premier appel est mis en attente&nbsp;: il faudra y revenir, avec ses variables, à l'endroit exact où on l'a quitté. L'ordinateur empile ainsi les appels interrompus les uns sur les autres, et les reprend dans l'ordre inverse, le dernier interrompu d'abord. Cette **pile d'appels** est le mécanisme caché de toute récursivité. Elle a une taille limitée&nbsp;: Python refuse par défaut de dépasser un millier d'appels imbriqués (`RecursionError`). On retrouvera cette pile à la fin de l'histoire, dans le parcours des graphes.

</div>

<div class="encadre prune">
<div class="encadre-titre">Pour comprendre la récursivité…</div>

… il faut d'abord comprendre la récursivité. Les informaticiens adorent ce genre de clin d'œil. Le système GNU doit son nom à un acronyme récursif, *GNU's Not Unix* («&nbsp;GNU n'est pas Unix&nbsp;»), dont la première lettre se déplie sans fin. Et le moteur de recherche Google, à qui l'on demande *recursion*, suggère malicieusement&nbsp;: «&nbsp;*Did you mean: recursion*&nbsp;».

</div>

L'élégance a pourtant un prix. L'arbre des appels de Hanoï compte $2^n-1$ nœuds&nbsp;: la récursivité, à elle seule, ne rend pas un algorithme rapide. Tout dépend de la **forme de l'arbre**, et deux questions décident de tout. En combien de morceaux coupe-t-on le problème, et de combien rapetissent-ils&nbsp;? Ces morceaux sont-ils indépendants, ou les mêmes reviennent-ils sans cesse&nbsp;? La première question mène à «&nbsp;diviser pour régner&nbsp;», la seconde à la programmation dynamique.

## Couper en morceaux&nbsp;: diviser pour régner

La stratégie tient en trois temps&nbsp;: **diviser** le problème en morceaux indépendants, les **résoudre** récursivement, puis **combiner** les réponses. On l'a vue à l'œuvre avec le [plus grand sous-tableau](../complexite/#mathcalonlog-n-diviser-pour-régner)&nbsp;; elle est aussi ancienne que l'informatique elle-même, puisque John von Neumann décrit dès 1945 le **tri fusion**&nbsp;: trier chaque moitié, puis fusionner deux listes triées, ce qui se fait en un seul passage.

Combien coûte un tel algorithme&nbsp;? L'arbre de récursion permet de le voir d'un coup d'œil. Supposons qu'on coupe un problème de taille $n$ en $a$ sous-problèmes de taille $n/2$, et que couper puis recombiner coûte un travail proportionnel à $n$. Au niveau $k$ de l'arbre, il y a $a^k$ sous-problèmes, chacun de taille $n/2^k$&nbsp;: le travail du niveau vaut $n\\,(a/2)^k$. Tout se joue donc dans la comparaison entre $a$ et $2$, c'est-à-dire entre la vitesse à laquelle les sous-problèmes **se multiplient** et celle à laquelle ils **rapetissent**.

<div class="anim" data-anim="arbre-recursion"></div>
{{< script "js/arbre-recursion.js" >}}

<div class="encadre bleu">
<div class="encadre-titre">Le théorème maître, en une phrase</div>

Plus généralement, si l'on coupe en $a$ sous-problèmes de taille $n/b$ et que la combinaison coûte $\mathcal{O}(n^d)$, on compare $a$ à $b^d$&nbsp;:

- si $a<b^d$, la racine domine, et le coût total est $\mathcal{O}(n^d)$&nbsp;;
- si $a=b^d$, tous les niveaux se valent, et l'on paie $\mathcal{O}(n^d\log n)$&nbsp;;
- si $a>b^d$, les feuilles dominent, et l'on paie $\mathcal{O}(n^{\log\_b a})$.

Roughgarden présente ce combat avec humour&nbsp;: $a$, le rythme auquel les sous-problèmes prolifèrent, joue le rôle des «&nbsp;forces du mal&nbsp;», et $b^d$, le rythme auquel le travail par sous-problème fond, celui des «&nbsp;forces du bien&nbsp;».

</div>

### Multiplier plus vite qu'à l'école

L'animation l'a montré&nbsp;: couper chaque nombre en deux moitiés et calculer les quatre produits de moitiés donne $a=4$, et l'on retombe sur le $\mathcal{O}(n^2)$ de l'école. Diviser pour régner ne suffit pas&nbsp;; il faut une idée de plus.

Pour multiplier deux nombres de $n$ chiffres, la méthode apprise à l'école calcule $n^2$ produits de chiffres. En 1960, lors d'un séminaire à Moscou, Andreï Kolmogorov conjecture qu'on ne peut pas faire mieux. Moins d'une semaine plus tard, Anatoli Karatsouba, un étudiant de 23 ans, lui apporte un contre-exemple. Kolmogorov, enthousiaste, présente le résultat et le fait publier en 1962&nbsp;; Karatsouba ne l'apprend qu'en recevant les tirés à part.

L'idée, qui remonte à une astuce de Gauss pour les nombres complexes&nbsp;: écrire $x=a\cdot 10^m+b$ et $y=c\cdot 10^m+d$. Le produit demande $ac$, $bd$ et $ad+bc$, soit quatre produits en apparence. Mais $ad+bc=(a+b)(c+d)-ac-bd$&nbsp;: **trois** produits suffisent. Appliquée récursivement, cette économie fait passer de $a=4$ à $a=3$ sous-problèmes, le cas où les feuilles dominent dans l'animation&nbsp;: le coût tombe à $\mathcal{O}(n^{\log\_2 3})\approx\mathcal{O}(n^{1{,}585})$.

{{< runpython lang="python" mode="toggle" height="auto" >}}
from random import randint
produits = 0                           # nombre de produits de petits nombres

def karatsuba(x, y):
    global produits
    if x < 10 or y < 10:
        produits += 1
        return x * y
    m = max(len(str(x)), len(str(y))) // 2
    a, b = divmod(x, 10 ** m)
    c, d = divmod(y, 10 ** m)
    ac, bd = karatsuba(a, c), karatsuba(b, d)
    milieu = karatsuba(a + b, c + d) - ac - bd     # 3 produits au lieu de 4
    return ac * 10 ** (2 * m) + milieu * 10 ** m + bd

def nombre(n):                         # un nombre aléatoire de n chiffres
    return int(str(randint(1, 9)) + "".join(str(randint(0, 9)) for _ in range(n - 1)))

for n in [8, 16, 32, 64, 128]:
    x, y = nombre(n), nombre(n)
    produits = 0
    assert karatsuba(x, y) == x * y
    print(n, "chiffres :", produits, "produits, contre", n * n, "à l'école")
{{< /runpython >}}

En 2019, David Harvey et Joris van der Hoeven ont atteint $\mathcal{O}(n\log n)$, la limite que l'on conjecture depuis les années 1970.

### Trier, «&nbsp;la mère de tous les problèmes&nbsp;»

Les tris sont omniprésents en informatique et Tim Roughgarden (auteur des géniaux *Algorithms illuminated*) en parle même comme de la “mère de tous les problèmes algorithmiques”.

Ci-dessous, vous pourrez comparer l'efficacité de différents tris par comparaison en les voyant se débattre courageusement avec les données.

{{< runpython lang="vpython" mode="toggle" default="output" width="800" version="3.1" file="tris.py"  autorun="true"/>}}

![](https://imgs.xkcd.com/comics/ineffective_sorts.png)

### Quicksort

En 1959, Tony Hoare, jeune étudiant britannique à Moscou, travaille sur un programme de traduction automatique du russe vers l'anglais. Il doit trier les mots de chaque phrase avant de les chercher dans un dictionnaire stocké sur bande magnétique. C'est pour cela qu'il imagine Quicksort, qu'il publiera à son retour en Angleterre, en 1961. Le principe est encore «&nbsp;diviser pour régner&nbsp;», mais à l'envers du tri fusion&nbsp;: tout le travail se fait **avant** les appels récursifs, en rangeant les éléments de part et d'autre d'un pivot, et la combinaison ne coûte plus rien.

{{< youtube-plus id="Cubuk-9gzvk" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}


Un code Python possible pour la version détaillée dans la vidéo&nbsp;:

<details>
<summary id="correcsum">Code</summary>
<blockquote id="correc">

```python
from random import randint

def permute(L, i, j):
    L[i], L[j] = L[j], L[i]

def partition(L, g, d):
    p = L[g]
    i = g+1
    for j in range(g+1,d+1):
        if L[j] < p:
            permute(L,i,j)
            i += 1
    permute(L,g,i-1)
    return i-1

def tri_rapide_gd(L, g, d):
    if g < d: 
        pivot = randint(g,d)
        permute(L,pivot,g)
        pivot = partition(L, g, d)
        tri_rapide_gd(L, g, pivot-1)
        tri_rapide_gd(L, pivot+1, d)
    return L

def tri_rapide(L):
    g = 0
    d = len(L)-1
    return tri_rapide_gd(L, g, d)
```

</blockquote>
</details>

La danse hongroise ci-dessous implémente une version de l'algorithme sans hasard&nbsp;:

{{< youtube-plus id="ywWBy6J5gz8" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Dans cette version, le premier élément est systématiquement choisi comme pivot (chapeau noir) et la partition marche un peu différemment&nbsp;:<br>
<ul>
<li>Le chapeau rouge <code>i</code> est d'abord donné au dernier élément de la partition puis comparé au pivot <code>p</code>.</li>
<ul>
<li>Si le chapeau rouge est plus petit que le pivot, les deux éléments échangent leur place et le chapeau rouge est donné au plus proche voisin du côté du pivot.</li>
<li>Sinon le pivot reste à sa place et le chapeau rouge est là aussi donné au voisin immédiat le plus proche du pivot.</li>
</ul>
<li>Lorsque le pivot récupère le chapeau rouge, il est bien placé.</li>
<li>On coupe ensuite la liste en deux sur le pivot et on recommence récursivement.</li>
</ul>

Un code Python possible pour cette variante&nbsp;:

<details>
<summary id="correcsum">Code</summary>
<blockquote id="correc">

```python
def partition(L):
    p = 0         # pivot (chapeau noir)
    i = len(L)-1  # chapeau rouge
    while i != p:
      if (L[p]-L[i])*(p-i) < 0:
        L[p],L[i] = L[i],L[p]
        p,i = i,p
      i -= (i-p)//abs(i-p)
    return p
    
def tri_rapide(L):
    if len(L) <= 1:
      return L
    else:
      p = partition(L)
      L[:p] = tri_rapide(L[:p])
      L[p+1:] = tri_rapide(L[p+1:])
      return L
```

</blockquote>
</details>


Un tirage non aléatoire du pivot rend l'algorithme moins robuste sur certaines entrées. Avec le choix systématique du premier élément (par exemple), on se retrouve avec une complexité en $O(n^2)$ sur des données déjà triées ou presque. Le tirage aléatoire rend extrêmement peu probable un scénario "défavorable".  

Si en plus de choisir le premier élément comme pivot, on ne s'occupe même plus d'avoir un tri en place (c'est-à-dire qu'on s'autorise des copies de la liste de départ), Quicksort peut s'écrire de manière très compacte&nbsp;:

```python
def triRapide(elements):
    if len(elements) <= 1:
        return elements
    else: 
        pivot = elements[0]
        plusPetit = triRapide([e for e in elements[1:] if e <= pivot])
        plusGrand = triRapide([e for e in elements[1:] if e > pivot])
        return plusPetit + [pivot] + plusGrand
```

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/hannibal.png" style="box-shadow:none;background:none;">
</div>

Mais attention, l'élégance de ce code cache sa lâcheté puisqu'en ne rangeant plus en place, il esquive la principale difficulté d'un algorithme de tri. S'interdire la création de nouvelles listes oblige en effet à gérer astucieusement les permutations au sein de la liste de départ. Et si cela donne souvent des codes plus verbeux, ils n'en sont pas moins beaucoup plus fins.

<br>


Le tirage aléatoire du pivot a une conséquence remarquable, que Roughgarden met en avant&nbsp;: pour **toute** entrée, le temps moyen (sur les tirages) est en $\mathcal{O}(n\log n)$. Il n'y a plus de «&nbsp;mauvaise entrée&nbsp;», seulement de mauvais tirages, et ils sont rarissimes.

Diviser pour régner repose sur une hypothèse silencieuse&nbsp;: les morceaux sont **indépendants**. Trier la moitié gauche ne dit rien de la moitié droite. Que se passe-t-il quand les sous-problèmes se recouvrent&nbsp;?

## Quand les sous-problèmes se répètent&nbsp;: la programmation dynamique

La suite de Fibonacci, $F\_n=F\_{n-1}+F\_{n-2}$, appelle une fonction récursive immédiate. Mais son arbre des appels explose&nbsp;: pour calculer $F\_5$, on calcule deux fois $F\_3$, trois fois $F\_2$, cinq fois $F\_1$. Ces sous-problèmes ne sont pas indépendants, ce sont **les mêmes**&nbsp;: l'arbre n'est qu'un petit graphe déguisé.

<div style="text-align:center;margin:1.2em 0 0.4em;">
<svg viewBox="0 0 760 300" role="img" aria-label="À gauche, l'arbre des appels récursifs de F5, avec 15 nœuds où les mêmes termes reviennent plusieurs fois ; à droite, le même calcul replié en 6 sous-problèmes distincts" style="width:100%;max-width:760px;height:auto;"><line x1="238.7" y1="42.5" x2="171.3" y2="81.5" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="262.3" y1="40.3" x2="387.7" y2="83.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="150.2" y1="96.5" x2="109.8" y2="131.5" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="171.3" y1="94.5" x2="238.7" y2="133.5" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="93.5" y1="151.3" x2="76.5" y2="180.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="109.8" y1="148.5" x2="150.2" y2="183.5" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="63.5" y1="203.3" x2="46.5" y2="232.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="76.5" y1="203.3" x2="93.5" y2="232.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="243.5" y1="151.3" x2="226.5" y2="180.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="256.5" y1="151.3" x2="273.5" y2="180.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="393.5" y1="99.3" x2="376.5" y2="128.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="409.8" y1="96.5" x2="450.2" y2="131.5" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="363.5" y1="151.3" x2="346.5" y2="180.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><line x1="376.5" y1="151.3" x2="393.5" y2="180.7" stroke="#cbd5e1" stroke-width="1.3" opacity="1"/><circle cx="250.0" cy="36.0" r="13" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><text x="250.0" y="40.0" text-anchor="middle" font-size="11" fill="#970E53" font-family="sans-serif" opacity="1">F5</text><circle cx="160.0" cy="88.0" r="13" fill="#FEF3C7" stroke="#B45309" stroke-width="1.6" opacity="1"/><text x="160.0" y="92.0" text-anchor="middle" font-size="11" fill="#B45309" font-family="sans-serif" opacity="1">F4</text><circle cx="100.0" cy="140.0" r="13" fill="#E6EEF5" stroke="#004D80" stroke-width="1.6" opacity="1"/><text x="100.0" y="144.0" text-anchor="middle" font-size="11" fill="#004D80" font-family="sans-serif" opacity="1">F3</text><circle cx="70.0" cy="192.0" r="13" fill="#E6F3F1" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="70.0" y="196.0" text-anchor="middle" font-size="11" fill="#006C65" font-family="sans-serif" opacity="1">F2</text><circle cx="40.0" cy="244.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="40.0" y="248.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><circle cx="100.0" cy="244.0" r="13" fill="#F8FAFC" stroke="#64748b" stroke-width="1.6" opacity="1"/><text x="100.0" y="248.0" text-anchor="middle" font-size="11" fill="#64748b" font-family="sans-serif" opacity="1">F0</text><circle cx="160.0" cy="192.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="160.0" y="196.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><circle cx="250.0" cy="140.0" r="13" fill="#E6F3F1" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="250.0" y="144.0" text-anchor="middle" font-size="11" fill="#006C65" font-family="sans-serif" opacity="1">F2</text><circle cx="220.0" cy="192.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="220.0" y="196.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><circle cx="280.0" cy="192.0" r="13" fill="#F8FAFC" stroke="#64748b" stroke-width="1.6" opacity="1"/><text x="280.0" y="196.0" text-anchor="middle" font-size="11" fill="#64748b" font-family="sans-serif" opacity="1">F0</text><circle cx="400.0" cy="88.0" r="13" fill="#E6EEF5" stroke="#004D80" stroke-width="1.6" opacity="1"/><text x="400.0" y="92.0" text-anchor="middle" font-size="11" fill="#004D80" font-family="sans-serif" opacity="1">F3</text><circle cx="370.0" cy="140.0" r="13" fill="#E6F3F1" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="370.0" y="144.0" text-anchor="middle" font-size="11" fill="#006C65" font-family="sans-serif" opacity="1">F2</text><circle cx="340.0" cy="192.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="340.0" y="196.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><circle cx="400.0" cy="192.0" r="13" fill="#F8FAFC" stroke="#64748b" stroke-width="1.6" opacity="1"/><text x="400.0" y="196.0" text-anchor="middle" font-size="11" fill="#64748b" font-family="sans-serif" opacity="1">F0</text><circle cx="460.0" cy="140.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="460.0" y="144.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><text x="250" y="294" text-anchor="middle" font-size="12" fill="#475569" font-family="sans-serif">l'arbre des appels : 15 appels</text><line x1="520" y1="20" x2="520" y2="270" stroke="#e2e8f0"/><line x1="640.0" y1="181.0" x2="640.0" y2="199.0" stroke="#cbd5e1" stroke-width="1.4" opacity="1"/><path d="M652.0,174.0 C692.0,188.0 692.0,236.0 652.0,250.0" fill="none" stroke="#cbd5e1" stroke-width="1.4"/><line x1="640.0" y1="137.0" x2="640.0" y2="155.0" stroke="#cbd5e1" stroke-width="1.4" opacity="1"/><path d="M652.0,130.0 C692.0,144.0 692.0,192.0 652.0,206.0" fill="none" stroke="#cbd5e1" stroke-width="1.4"/><line x1="640.0" y1="93.0" x2="640.0" y2="111.0" stroke="#cbd5e1" stroke-width="1.4" opacity="1"/><path d="M652.0,86.0 C692.0,100.0 692.0,148.0 652.0,162.0" fill="none" stroke="#cbd5e1" stroke-width="1.4"/><line x1="640.0" y1="49.0" x2="640.0" y2="67.0" stroke="#cbd5e1" stroke-width="1.4" opacity="1"/><path d="M652.0,42.0 C692.0,56.0 692.0,104.0 652.0,118.0" fill="none" stroke="#cbd5e1" stroke-width="1.4"/><circle cx="640.0" cy="256.0" r="13" fill="#F8FAFC" stroke="#64748b" stroke-width="1.6" opacity="1"/><text x="640.0" y="260.0" text-anchor="middle" font-size="11" fill="#64748b" font-family="sans-serif" opacity="1">F0</text><circle cx="640.0" cy="212.0" r="13" fill="#F1F5F9" stroke="#475569" stroke-width="1.6" opacity="1"/><text x="640.0" y="216.0" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif" opacity="1">F1</text><circle cx="640.0" cy="168.0" r="13" fill="#E6F3F1" stroke="#006C65" stroke-width="1.6" opacity="1"/><text x="640.0" y="172.0" text-anchor="middle" font-size="11" fill="#006C65" font-family="sans-serif" opacity="1">F2</text><circle cx="640.0" cy="124.0" r="13" fill="#E6EEF5" stroke="#004D80" stroke-width="1.6" opacity="1"/><text x="640.0" y="128.0" text-anchor="middle" font-size="11" fill="#004D80" font-family="sans-serif" opacity="1">F3</text><circle cx="640.0" cy="80.0" r="13" fill="#FEF3C7" stroke="#B45309" stroke-width="1.6" opacity="1"/><text x="640.0" y="84.0" text-anchor="middle" font-size="11" fill="#B45309" font-family="sans-serif" opacity="1">F4</text><circle cx="640.0" cy="36.0" r="13" fill="#FBE9EF" stroke="#970E53" stroke-width="1.6" opacity="1"/><text x="640.0" y="40.0" text-anchor="middle" font-size="11" fill="#970E53" font-family="sans-serif" opacity="1">F5</text><text x="640" y="294" text-anchor="middle" font-size="12" fill="#475569" font-family="sans-serif">replié : 6 sous-problèmes</text></svg>
</div>
<p class="legende">À gauche, l'arbre des appels récursifs de $F_5$&nbsp;; à droite, le même calcul une fois les doublons fusionnés.</p>

L'idée de la programmation dynamique est de replier l'arbre&nbsp;: résoudre chaque sous-problème **une seule fois**, ranger la réponse, et la réutiliser. On peut le faire de haut en bas, en mémorisant les résultats de la fonction récursive (c'est la **mémoïsation**), ou de bas en haut, en remplissant un tableau des plus petits sous-problèmes vers les plus grands.

<div class="encadre prune">
<div class="encadre-titre">Un nom choisi pour ne rien dire</div>

Richard Bellman, qui invente la méthode au début des années 1950 à la RAND Corporation, a raconté d'où vient son nom. Le secrétaire à la Défense de l'époque, Charles Wilson, dont dépendait le financement de la RAND, avait «&nbsp;une peur et une haine pathologiques du mot *recherche*&nbsp;». Bellman cherche donc un nom qui ne sente pas les mathématiques. *Programming*, au sens de planifier, convient. Et *dynamic* a cet avantage qu'il est impossible de l'employer dans un sens péjoratif&nbsp;: «&nbsp;c'était quelque chose à quoi même un membre du Congrès ne pourrait rien objecter&nbsp;».

</div>

La logique de la **programmation dynamique** est présentée dans la vidéo suivante.

{{< youtube-plus id="F48AbiZGds0" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{%notice type="note" round="true"%}}
L'idée fondatrice de la programmation dynamique (DP) tient en une phrase&nbsp;: beaucoup de problèmes qui semblent exiger d'explorer un nombre exponentiel de scénarios ne comportent en réalité qu'un petit nombre de sous-problèmes distincts, chacun rencontré un très grand nombre de fois.<br>
Dit autrement, l'arbre des possibilités est immense mais des branches très différentes de l'arbre convergent sans arrêt vers les mêmes situations. Une exploration récursive aboutirait à un graphe acyclique dense en nœuds partagés, comme celui de Fibonacci ci-dessus.<br>
La DP consiste à identifier les sous-problèmes, à les résoudre chacun une seule fois, à stocker les résultats (la fameuse matrice), et à les combiner.
{{%/notice%}}

### Fibonacci, quatre fois

Fibonacci offre même une petite échelle de raffinement, sur le modèle de celles de la page [Complexité](../complexite/#une-échelle-de-raffinement-la-recherche-du-doublon). La version récursive naïve recalcule sans cesse les mêmes termes&nbsp;: son coût croît comme $\varphi^n$, exponentiellement. En mémorisant chaque terme (c'est la programmation dynamique), on descend à $\mathcal{O}(n)$ en temps et en mémoire. En ne gardant que les deux derniers termes, la mémoire tombe à $\mathcal{O}(1)$. Enfin, les formules de **doublement**, $F\_{2k}=F\_k(2F\_{k+1}-F\_k)$ et $F\_{2k+1}=F\_k^2+F\_{k+1}^2$, permettent de sauter de $k$ à $2k$&nbsp;: $\mathcal{O}(\log n)$ opérations arithmétiques.

{{< runpython lang="python" mode="toggle" height="auto" >}}
def fib_naif(n):                       # O(φ^n) : les mêmes termes sont recalculés
    return n if n < 2 else fib_naif(n - 1) + fib_naif(n - 2)

def fib_memo(n, memo={0: 0, 1: 1}):    # O(n) en temps et en mémoire
    if n not in memo:
        memo[n] = fib_memo(n - 1) + fib_memo(n - 2)
    return memo[n]

def fib_iter(n):                       # O(n) en temps, O(1) en mémoire
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

def fib_double(n):                     # O(log n) opérations : renvoie (F(n), F(n+1))
    if n == 0:
        return 0, 1
    a, b = fib_double(n // 2)
    c, d = a * (2 * b - a), a * a + b * b      # F(2k), F(2k+1)
    return (d, c + d) if n % 2 else (c, d)

print(fib_naif(20), fib_memo(20), fib_iter(20), fib_double(20)[0])
print(fib_double(300)[0])
{{< /runpython >}}

On retrouve la même idée, réduite à deux variables, dans l'[algorithme de Kadane](../complexite/#mathcalon-un-seul-passage-kadane)&nbsp;: la meilleure tranche qui se termine en $i$ se déduit de celle qui se termine en $i-1$.

### Le voyageur de commerce&nbsp;: Held-Karp

Le problème du voyageur de commerce, rencontré à propos de [P = NP](../complexite/#mathrmpstackrelmathrmnp), n'a pas d'algorithme polynomial connu. Le meilleur algorithme exact (non quantique), celui de Held et Karp, utilise la programmation dynamique. L'implémentation ci-dessous utilise la technique du masquage pour parcourir tous les sous-ensembles de villes visitées possibles et pour pouvoir tester rapidement l'appartenance ou non d'une ville à ce sous-ensemble.

<details>
<summary id="correcsum">Code</summary>
<blockquote id="correc">

```python
def tsp_chemin(distance, depart=0):
        """
        Résout le problème du voyageur de commerce (TSP) en utilisant une programmation dynamique basée sur les masques binaires.
        
        Cette fonction calcule, pour chaque sous-ensemble de villes et pour chaque ville terminale, le coût minimal pour parcourir l'ensemble des villes spécifié par le masque et terminer dans cette ville.
        Elle permet également de reconstruire le chemin optimal en stockant, pour chaque état, la ville précédente.
        
        Paramètres
        ----------
        distance : list[list[float]]
            Matrice des distances entre les villes, où distance[i][j] représente la distance allant de la ville i à la ville j.
        depart : int, optionnel
            Indice de la ville de départ (par défaut 0).   
        
        Retourne
        --------
        tuple
            Un tuple (dp, parent) contenant :
              - dp : list[list[float]]
                Tableau à deux dimensions de taille (2^n x n) où dp[masque][j] est le coût minimum pour visiter
                l'ensemble de villes indiqué par le masque (représenté en binaire) et terminer à la ville j.
              - parent : list[list[int]]
                Tableau à deux dimensions de taille (2^n x n) permettant de reconstruire le chemin optimal.
                Pour chaque état (masque, j), parent[masque][j] stocke l'indice de la ville qui précède j dans le chemin optimal.
        
        Description
        -----------
        L'algorithme initialise une table dp avec des valeurs infinies, sauf pour l'état correspondant au départ.
        Il parcourt ensuite tous les masques possibles (correspondant aux 2^n sous-ensembles de villes) et, pour chaque ville déjà visitée, il tente de mettre à jour le coût minimal pour atteindre chaque ville non encore visitée.
        La structure parent est utilisée pour enregistrer les transitions effectuées, ce qui permet ultérieurement
        de reconstruire le chemin optimal.
        
        Exemple d'utilisation
        ---------------------
        >>> distance = [
        ...     [0, 10, 15, 20],
        ...     [10, 0, 35, 25],
        ...     [15, 35, 0, 30],
        ...     [20, 25, 30, 0]
        ... ]
        >>> dp, parent = tsp_chemin(distance, depart=0)
        """
        n = len(distance)
        INF = float('inf')
        dp = [[INF] * n for _ in range(1 << n)] 
        parent = [[-1] * n for _ in range(1 << n)]
        
        dp[1 << depart][depart] = 0
        for masque in range(1 << n):  # 2^n possibilités (chaque ville est visitée ou non visitée)
            for i in range(n):
                if masque & (1 << i):  # si la ville i est visitée
                    for j in range(n):
                        if not (masque & (1 << j)):  # si la ville j n'est pas encore visitée
                            nv_masque = masque | (1 << j)
                            if dp[nv_masque][j] > dp[masque][i] + distance[i][j]:
                                dp[nv_masque][j] = dp[masque][i] + distance[i][j]
                                parent[nv_masque][j] = i
        return dp, parent
```

</blockquote>
</details>


Comme à chaque fois en programmation dynamique, la matrice `dp` contient toutes les informations nécessaires et pour reconstruire le plus petit chemin et obtenir son coût, on peut utiliser le code suivant&nbsp;:

<details>
<summary id="correcsum">Code</summary>
<blockquote id="correc">

```python
def reconstr_chemin(parent, masque, dernier):
    chemin = []
    while dernier != -1:
        chemin.append(dernier)
        temp = parent[masque][dernier]
        masque = masque & ~(1 << dernier)
        dernier = temp
    chemin.reverse()
    return chemin
 
dp, parent = tsp_chemin(distance, depart=0)
masque_final = (1 << len(distance)) - 1
coût_min, chemin_min = float('inf'), None

for i in range(len(distance)):
    coût_total = dp[masque_final][i] + distance[i][0] 
    if coût_total < coût_min:
        coût_min = coût_total
        chemin_min = reconstr_chemin(parent, masque_final, i)
        chemin_min.append(0)  # Fermer le cycle
```

</blockquote>
</details>

<br>

<video width="500" controls style="display:block;max-width:100%;position:relative;margin-left:auto;margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/tps_vid.mp4" type="video/mp4">
</video>

La logique de cet algorithme repose sur la relation de récurrence suivante : $C(S,i) = \min_{j \in S,\ j \neq i} \left\\{ C\left(S \setminus \\{i\\}, j\right) + \mathrm{d}(j,i) \right\\}$ où $C(S,i)$ représente la plus petite distance pour parcourir chaque ville de l'ensemble $S$ et terminer dans la ville $i$ et $d(i,j)$ est la distance entre la ville $i$ et la ville $j$.

Sa complexité temporelle est en $\mathcal{O}(n^2 2^n)$. En effet, tous les sous-ensembles de villes sont inspectés $\mathcal{O}(2^n)$ et pour chacun, on parcourt toutes les paires ville de départ - ville d'arrivée possibles $\mathcal{O}(n)\times\mathcal{O}(n)$ sans jamais faire autre chose que des opérations en temps constant $\mathcal{O}(1)$ pour chaque paire.

La programmation dynamique explore toutes les branches, mais chacune une seule fois. Ne pourrait-on pas, parfois, être plus audacieux&nbsp;: à chaque embranchement, choisir une seule branche, et ne jamais revenir en arrière&nbsp;?

## Ne jamais revenir en arrière&nbsp;: les algorithmes gloutons

Un algorithme glouton construit sa solution pas à pas, en faisant à chaque étape le choix qui semble le meilleur sur le moment, sans jamais le remettre en cause. Dans l'arbre des possibles, il ne suit qu'une seule branche&nbsp;: c'est ce qui le rend si rapide. Les algorithmes gloutons sont très faciles à comprendre et à implémenter. Si on devait leur trouver un défaut, il est à chercher du côté de leur correction, pas toujours simple à démontrer…

L'exemple le plus familier est le **rendu de monnaie**&nbsp;: pour rendre une somme avec le moins de pièces possible, on prend toujours la plus grosse pièce qui ne dépasse pas ce qui reste. Avec les euros, ça marche à tous les coups. Avec les pièces britanniques d'avant 1971 (1, 3, 6, 12, 24 et 30 pence), ça échoue&nbsp;: pour rendre 48 pence, le glouton donne $30+12+6$, trois pièces, alors que deux florins, $24+24$, suffisaient. La programmation dynamique, elle, explore toutes les branches (une seule fois chacune) et trouve toujours l'optimum.

{{< runpython lang="python" mode="toggle" height="auto" >}}
def glouton(montant, pieces):
    rendu = []
    for p in sorted(pieces, reverse=True):     # la plus grosse pièce d'abord
        while montant >= p:
            montant -= p
            rendu.append(p)
    return rendu

def optimal(montant, pieces):                  # programmation dynamique
    meilleur = [[]] + [None] * montant          # meilleur[m] : rendu optimal de m
    for m in range(1, montant + 1):
        for p in pieces:
            if p <= m and meilleur[m - p] is not None:
                essai = meilleur[m - p] + [p]
                if meilleur[m] is None or len(essai) < len(meilleur[m]):
                    meilleur[m] = essai
    return meilleur[montant]

euros = [1, 2, 5, 10, 20, 50, 100, 200]        # en centimes
pence = [1, 3, 6, 12, 24, 30]                  # Royaume-Uni, avant 1971
print("289 c :", glouton(289, euros), "contre", optimal(289, euros))
print("48 d  :", glouton(48, pence), "contre", optimal(48, pence))
{{< /runpython >}}

<div class="encadre bleu">
<div class="encadre-titre">Quand peut-on faire confiance à un glouton&nbsp;?</div>

Il faut le **démontrer**, et l'argument classique est un **échange**. On prend une solution optimale quelconque, et l'on montre qu'on peut la modifier, sans la dégrader, pour qu'elle commence par le choix du glouton. De proche en proche, la solution du glouton est donc elle-même optimale. Pour les euros, cet échange marche&nbsp;; pour les anciens pence, il échoue sur 48. La plupart des systèmes monétaires sont d'ailleurs conçus pour que le glouton, celui de la caissière, soit optimal.

</div>

{{< youtube-plus id="yrOj8XvroIE" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Sont présentés ci-dessous deux algorithmes gloutons très similaires qui permettent de résoudre des problèmes d'optimisation sur des graphes&nbsp;:
- **Dijkstra** cherche le plus court chemin entre deux nœuds.
- **Prim** construit l'arbre couvrant de poids minimal.

{{< youtube-plus id="Bku9EfWqQC0" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< youtube-plus id="6ctSw0eQJkw" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

<div class="encadre prune">
<div class="encadre-titre">Vingt minutes à une terrasse de café</div>

Edsger Dijkstra a raconté comment il a trouvé son algorithme, en 1956, à Amsterdam&nbsp;: «&nbsp;Un matin, je faisais des courses avec ma jeune fiancée&nbsp;; fatigués, nous nous sommes assis à la terrasse d'un café pour boire une tasse de café, et je me suis demandé si je pouvais faire ça. J'ai alors conçu l'algorithme du plus court chemin. C'était une invention de vingt minutes.&nbsp;» Sans papier ni crayon, ce qui l'obligeait, disait-il, à éviter toute complication inutile. Il s'agissait de montrer les capacités d'un nouvel ordinateur, l'ARMAC, en calculant des itinéraires entre une soixantaine de villes des Pays-Bas.

L'arbre couvrant minimal a une histoire plus longue encore&nbsp;: Otakar Borůvka le résout dès 1926, pour concevoir le réseau électrique de la Moravie, puis Vojtěch Jarník en 1930, et Robert Prim le redécouvre en 1957.

</div>

Ce qui rend Dijkstra rapide n'est pas seulement son idée gloutonne&nbsp;: c'est la structure de données qui, à chaque étape, lui tend le sommet le plus proche. C'est le dernier personnage de cette histoire.

## La structure de données guide le code

> «&nbsp;Algorithmes + structures de données = programmes.&nbsp;»<br>
> Niklaus Wirth, titre de son livre de 1976

Bien choisir sa structure de données, c'est souvent avoir déjà écrit l'algorithme. On l'a vu avec le [doublon](../complexite/#barreau-3-se-souvenir-de-ce-quon-a-vu), où un simple ensemble fait gagner une classe de complexité, ou avec [Kadane](../complexite/#mathcalon-un-seul-passage-kadane), où deux nombres suffisent à résumer tout le passé. L'exemple le plus frappant est celui des parcours de graphe, où une seule ligne change, et avec elle tout l'algorithme.

### Pile, file, file de priorité&nbsp;: un seul parcours

Pour inventorier les sommets d'un graphe, deux stratégies sont possibles : 
- le **parcours en largeur (BFS)**,
- et le **parcours en profondeur (DFS)**.

{{< youtube-plus id="QCj7VijRkiM" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Le code est identique entre les deux algorithmes à la structure de données utilisée près&nbsp;! On utilise une **file** (queue en anglais) pour le parcours en largeur et une **pile** pour le parcours en profondeur.

 ![](https://info-tsi-vieljeux.github.io/queue.png?width=600)

Avec sa logique FIFO (premier arrivé, premier parti, comme dans une file d'attente), BFS explore le graphe de proche en proche.

![](https://info-tsi-vieljeux.github.io/gifbreadth.gif?width=700)

```python
from collections import deque
# deque est une file à double extrémités (double-ended queue) avec la primitive popleft() pour retirer à gauche comme une file et pop() pour retirer à droite comme une pile.

def BFS(G,depart):
    """
    graphe G(S,A) représenté par une liste d'adjacence implémentée par un dictionnaire et depart un sommet de S
    """
    file = deque()
    file.append(depart)
    Vus = {s : False for s in G}
    Sommets = []
    while file: # tant que la file n'est pas vide
        sommet = file.popleft() # méthode de la classe deque permettant de défiler
        if not Vus[sommet]:
            file += G[sommet]
            Vus[sommet] = True
            Sommets.append(sommet) 
    return Sommets
```

Avec sa logique LIFO (dernier arrivé, premier parti, comme pour une pile d'assiettes pendant la vaisselle), DFS s'enfonce dans une branche du graphe jusqu'à son extrémité puis revient à la dernière jonction rencontrée et explore une nouvelle branche, et ainsi de suite.

 ![](https://info-tsi-vieljeux.github.io/piles.png?width=550)
 
 ![](https://info-tsi-vieljeux.github.io/gifdepth.gif?width=700)

```python
def DFS(G,depart):
    pile = deque()
    pile.append(depart)
    Vus = {s : False for s in G}
    Sommets = []
    while pile:
        sommet = pile.pop()
        if not Vus[sommet]:
            pile += G[sommet]
            Vus[sommet] = True
            Sommets.append(sommet) 
    return Sommets
```

Comme la récursivité utilise naturellement une pile via la pile d'exécution, il y a une écriture récursive naturelle de la recherche en profondeur.

```python
def DFS(G,depart,Vus,Sommets=None):
    if Sommets is None:      # une liste neuve à chaque appel extérieur
        Sommets = []
    Sommets.append(depart)
    Vus[depart] = True
    for sommet in G[depart]:
        if not Vus[sommet]:
            DFS(G,sommet,Vus,Sommets)
    return Sommets
```


Le programme ci-dessous rend cette symétrie explicite&nbsp;: un **unique** parcours, auquel on passe la façon de retirer le prochain sommet à visiter. Retirer le premier arrivé donne le parcours en largeur, retirer le dernier, le parcours en profondeur.

{{< runpython lang="python" mode="toggle" height="auto" >}}
def parcours(G, depart, retirer):
    a_voir, vus, ordre = [depart], set(), []
    while a_voir:
        s = retirer(a_voir)
        if s not in vus:
            vus.add(s)
            ordre.append(s)
            a_voir.extend(G[s])
    return ordre

file = lambda L: L.pop(0)              # premier arrivé, premier servi
pile = lambda L: L.pop()               # dernier arrivé, premier servi

G = {"A": ["B", "C"], "B": ["D", "E"], "C": ["F"], "D": [], "E": ["F"], "F": []}
print("largeur   :", parcours(G, "A", file))
print("profondeur:", parcours(G, "A", pile))
{{< /runpython >}}

L'animation ci-dessous rejoue ce parcours sur une grille semée d'obstacles, de la case verte à la case rose. Seule change la structure qui range les cases à explorer&nbsp;: avec une **pile**, l'exploration s'enfonce dans un couloir et trouve un chemin quelconque&nbsp;; avec une **file**, elle progresse par cercles de distance croissante et trouve le plus court&nbsp;; avec une **file de priorité** qui sert d'abord la case la plus prometteuse (distance parcourue plus distance restante à vol d'oiseau), elle file droit vers le but. C'est l'algorithme A*, l'un des plus utilisés dans les jeux vidéo et les GPS.

<div class="anim" data-anim="labyrinthe"></div>
{{< script "js/labyrinthe.js" >}}

On peut voir Dijkstra comme un parcours de graphe où la structure de données n'est plus une file ou une pile mais une file de priorité, qui tend à chaque instant l'élément prioritaire, ici le sommet le plus proche du départ (avec un tas, le consulter coûte $\mathcal{O}(1)$ et le retirer $\mathcal{O}(\log n)$).

Pour implémenter une file de priorité, on peut utiliser un tas (heap), arbre binaire presque ordonné dont la racine est l'élément prioritaire.

{{< youtube-plus id="JRzTS8zPwSE" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}


Une implémentation possible de Dijkstra&nbsp;:

<details>
<summary id="correcsum">Code</summary>
<blockquote id="correc">

```python
import heapq

def Dijkstra(G, depart):
    """
    Calcule les plus courts chemins dans un graphe pondéré à partir d'un sommet de départ.

    Paramètres :
      - G : dict, représentation du graphe où les clés sont les sommets et les valeurs sont des dictionnaires {voisin: poids}.
      - depart : le sommet de départ.

    Retourne :
      - predecesseurs : dict, permettant de reconstruire les plus courts chemins.
      - distances : dict, distances minimales depuis le sommet de départ.
    """
    if depart not in G:
        raise ValueError("Le sommet de départ n'est pas présent dans le graphe")

    distances = {sommet: float('infinity') for sommet in G}
    predecesseurs = {sommet: None for sommet in G}
    distances[depart] = 0

    tas = [(0, depart)]
    while tas:
        distance_actuelle, sommet_actuel = heapq.heappop(tas)
        # On ignore l'entrée obsolète si un meilleur chemin a été trouvé
        if distance_actuelle > distances[sommet_actuel]:
            continue

        for voisin, poids in G[sommet_actuel].items():
            nouvelle_distance = distance_actuelle + poids
            if nouvelle_distance < distances[voisin]:
                distances[voisin] = nouvelle_distance
                predecesseurs[voisin] = sommet_actuel
                heapq.heappush(tas, (nouvelle_distance, voisin))
    return predecesseurs, distances
```

</blockquote>
</details>

<br>


<div class="tableau-large">
<table class="tab-recap">
<tr><th>Structure de données</th><th>On retire…</th><th>Algorithme obtenu</th></tr>
<tr><td>pile</td><td>le dernier arrivé</td><td>parcours en profondeur</td></tr>
<tr><td>file</td><td>le premier arrivé</td><td>parcours en largeur (plus courts chemins en nombre d'arêtes)</td></tr>
<tr><td>file de priorité, clé = distance</td><td>le plus proche du départ</td><td>Dijkstra (plus courts chemins pondérés)</td></tr>
<tr><td>file de priorité, clé = distance + estimation</td><td>le plus prometteur</td><td>A* (recherche guidée)</td></tr>
</table>
</div>

La boucle est bouclée. La version récursive du parcours en profondeur n'a besoin d'aucune pile explicite, puisque la [pile d'appels](#le-geste-fondateur-la-récursivité) de la récursivité en tient lieu&nbsp;: explorer un arbre de sous-problèmes et parcourir un graphe ne sont qu'une seule et même chose.

## Épilogue&nbsp;: deux algorithmes où tout se rejoint

### Algorithme d'Euclide

Un des plus vieux algorithmes ($\approx$-300).


{{< youtube-plus id="70jd0Mthyl8" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}


La suite de Fibonacci est un peu la tarte à la crème du mathématicien de série télévisée avec ses spirales dans les coquillages... Mais c'est bien elle qui montre le bout de son nez là où on ne l'attendait pas vraiment dans cette vidéo sur la complexité de l'algorithme d'Euclide.

{{< youtube-plus id="X6WnBdmNYiM" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

On peut utiliser le pulvérisateur (algorithme d'Euclide étendu) ci-dessous. Le code est corrigé par rapport à celui de la vidéo qui présente une erreur dans le cas de base (on doit retourner `b, 0, 1` comme Euclide bien sûr et non `a,0,1`).

{{< runpython lang="python" mode="toggle" default="code" height="240" width="800" >}}
def pulverisateur(a, b):
    assert b!=0 and a>b
    if a%b == 0:
        return b, 0, 1
    else:
        pgcd, x, y = pulverisateur(b, a % b)
        return pgcd, y, x - (a // b) * y

a, b = 1920, 1080
pgcd,x,y = pulverisateur(1920,1080)
print(f"pgcd({a},{b}) = {pgcd}\n{a}*{x} + {b}*{y} = {pgcd}")
{{< /runpython >}}

Et ce petit programme donne la décomposition en fraction continue&nbsp;:

{{< runpython lang="python" mode="toggle" default="code" height="200" width="800" >}}
def frac_ctn(a,b):
    C = []
    while b!= 0:
        C.append(a//b)
        a,b = b,a%b
    return C

print(frac_ctn(144,89))
{{< /runpython >}}

<br>

<div class="encadre prune">
<div class="encadre-titre">Lamé, 1844&nbsp;: la première analyse de complexité</div>

Combien de divisions l'algorithme d'Euclide demande-t-il&nbsp;? Le pire cas est atteint pour deux termes consécutifs de la suite de Fibonacci, où chaque quotient vaut $1$ et où l'on ne recule que d'un cran à chaque étape. En 1844, Gabriel Lamé en déduit que le nombre de divisions ne dépasse jamais cinq fois le nombre de chiffres du plus petit des deux nombres. C'est souvent considéré comme le premier théorème de l'histoire de la complexité algorithmique&nbsp;: un algorithme récursif, la suite de la programmation dynamique, et une majoration du coût dans le pire des cas, réunis dans un seul résultat.

</div>

### Algorithme X

Polyominos et Sudoku ont droit à leur algorithme au nom aguicheur&nbsp;: X. Il s'agit de recouvrir exactement une grille, chaque case une et une seule fois, avec des pièces choisies dans une liste. L'algorithme X explore récursivement l'arbre des choix possibles&nbsp;: il place une pièce, résout le problème restant, et revient en arrière (on parle de *backtracking*) quand il aboutit à une impasse. Il **élague** aussi l'arbre, en choisissant toujours d'abord la case la plus difficile à couvrir.

Tout son art tient dans la façon de revenir en arrière à moindre coût. Donald Knuth l'a résolu en 2000 par une structure de données d'une élégance rare, les **liens dansants** (*dancing links*)&nbsp;: dans une liste doublement chaînée, retirer un élément $x$ se fait en deux affectations, `x.gauche.droite = x.droite` et `x.droite.gauche = x.gauche`. Or $x$ garde, lui, la mémoire de ses voisins&nbsp;: pour le remettre en place au moment de revenir en arrière, il suffit de deux autres affectations, `x.gauche.droite = x` et `x.droite.gauche = x`. Les éléments «&nbsp;dansent&nbsp;» hors de la liste puis y reviennent.

{{< youtube-plus id="NTzoLEB7lO0" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Récursivité pour explorer, élagage pour ne pas tout explorer, structure de données pour revenir en arrière sans rien payer&nbsp;: l'algorithme X rassemble à lui seul le fil de cette page.

<br>

> Tim Roughgarden, *Algorithms Illuminated*, 4 volumes (Soundlikeyourself Publishing, 2017-2020)&nbsp;: les paradigmes de cette page, un volume après l'autre.<br>
Thomas Cormen, Charles Leiserson, Ronald Rivest et Clifford Stein, *Algorithmes* (Dunod, 3<sup>e</sup> éd. française 2010)&nbsp;: la référence encyclopédique.<br>
Donald Knuth, «&nbsp;Dancing Links&nbsp;» (2000), en accès libre sur [arXiv](https://arxiv.org/abs/cs/0011047)&nbsp;: l'algorithme X expliqué par son auteur.<br>
Richard Bellman, *Eye of the Hurricane* (World Scientific, 1984)&nbsp;: l'autobiographie où il raconte le choix du nom «&nbsp;programmation dynamique&nbsp;».

<nav class="suite-nav" aria-label="Page précédente">
<a href="../complexite/" class="precedent"><span>← Précédent</span><b>Complexité</b></a>
</nav>
