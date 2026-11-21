+++
title = "Trier"
date = 2026-11-19T10:00:00+01:00
weight = 5
chapter = false
css = "algo.css"
+++

# Trier

Trier, c'est remettre dans l'ordre une liste désordonnée. Le problème est omniprésent&nbsp;: un tableur classe ses lignes, un moteur de recherche ses résultats, un jeu vidéo ses objets du plus lointain au plus proche avant de les dessiner. Il est surtout la clé de bien d'autres problèmes&nbsp;: chercher par dichotomie, repérer des doublons, calculer une médiane, tout devient facile dans une liste triée. Rien d'étonnant à ce qu'on l'appelle parfois la mère de tous les problèmes algorithmiques.

<div class="anim" data-anim="tris"></div>

![Trois tris inefficaces, dessin xkcd](https://imgs.xkcd.com/comics/ineffective_sorts.png)

## Trois tris simples

Le **tri par sélection** est celui qu'on pratique spontanément avec des cartes étalées sur une table&nbsp;: chercher la plus petite, la placer en tête, puis recommencer avec les cartes restantes.

Le **tri par insertion** est celui du joueur qui range sa main au fur et à mesure qu'il ramasse ses cartes&nbsp;: chaque nouvelle carte glisse vers la gauche jusqu'à trouver sa place parmi celles déjà rangées.

Le **tri à bulles**, enfin, compare les voisins deux à deux et les échange s'ils sont dans le désordre&nbsp;: les grands éléments remontent vers la fin comme des bulles vers la surface. Il ne sert presque jamais en pratique, mais il est le plus simple à écrire.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
comp = 0                                   # compteur de comparaisons

def plus_grand(x, y):
    global comp
    comp += 1
    return x > y

def tri_selection(L):
    n = len(L)
    for i in range(n - 1):
        m = i                              # indice du plus petit élément restant
        for j in range(i + 1, n):
            if plus_grand(L[m], L[j]):
                m = j
        L[i], L[m] = L[m], L[i]

def tri_insertion(L):
    for i in range(1, len(L)):
        j = i
        while j > 0 and plus_grand(L[j - 1], L[j]):
            L[j - 1], L[j] = L[j], L[j - 1]
            j -= 1

def tri_bulles(L):
    n = len(L)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if plus_grand(L[j], L[j + 1]):
                L[j], L[j + 1] = L[j + 1], L[j]

for tri in [tri_selection, tri_insertion, tri_bulles]:
    for L in [[1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1]]:
        comp = 0
        M = L[:]
        tri(M)
        print(f"{tri.__name__:14} {L} : {comp} comparaisons")
{{< /runpython >}}

Les trois tris reposent sur deux boucles imbriquées, et le pire cas le montre&nbsp;: pour une liste de $n$ éléments, on compare chaque élément à tous ceux qui le suivent, soit $(n-1)+(n-2)+\cdots+1=\dfrac{n(n-1)}{2}$ comparaisons. Les trois tris sont **quadratiques**&nbsp;: doubler la taille de la liste quadruple le travail. Ils ne se valent pourtant pas&nbsp;:

- le tri par insertion s'adapte aux données. Sur une liste déjà triée, chaque élément est comparé une seule fois à son voisin, et le tri ne coûte que $n-1$ comparaisons. Sur une liste presque triée, il reste très rapide&nbsp;;
- le tri par sélection fait toujours le même nombre de comparaisons, mais au plus $n-1$ échanges. Quand écrire coûte cher, sur une mémoire qui s'use à chaque écriture par exemple, c'est un avantage.

<div class="quiz">

Combien de comparaisons le tri par insertion fait-il pour une liste de $200$ éléments rangés en ordre inverse&nbsp;?

<details><summary>Réponse</summary>

C'est son pire cas&nbsp;: le $i$-ème élément doit remonter jusqu'au début, au prix de $i$ comparaisons. Au total, $1+2+\cdots+199=\dfrac{200\times 199}{2}=19\\,900$ comparaisons.

</details>
</div>

## Le tri fusion

Pour trier un paquet de cartes, on peut le couper en deux, trier chaque moitié, puis **fusionner** les deux paquets triés&nbsp;: on compare les cartes du dessus, on prend la plus petite, et l'on recommence. La fusion ne demande qu'un seul passage. Et pour trier chaque moitié, on la coupe à son tour en deux… C'est le **tri fusion**, que John von Neumann décrit dès 1945, l'un des tout premiers programmes écrits pour un ordinateur à programme enregistré.

{{< youtube-plus id="XaqR3G_NVoo" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
comp = 0

def fusion(A, B):
    global comp
    R, i, j = [], 0, 0
    while i < len(A) and j < len(B):
        comp += 1
        if A[i] <= B[j]:                   # <= et non < : le tri reste stable
            R.append(A[i])
            i += 1
        else:
            R.append(B[j])
            j += 1
    return R + A[i:] + B[j:]              # ce qui reste d'un côté est déjà trié

def tri_fusion(L):
    if len(L) <= 1:
        return L
    m = len(L) // 2
    return fusion(tri_fusion(L[:m]), tri_fusion(L[m:]))

for L in [[1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1], [5, 1, 7, 3, 8, 2, 6, 4]]:
    comp = 0
    print(tri_fusion(L), comp, "comparaisons")
{{< /runpython >}}

Combien coûte le tri fusion&nbsp;? À chaque niveau de l'arbre des appels, les fusions traitent ensemble les $n$ éléments, pour un travail proportionnel à $n$. Et comme la taille des morceaux est divisée par deux d'un niveau au suivant, il y a $\log\_2 n$ niveaux. Le coût total est de l'ordre de $n\log\_2 n$&nbsp;: pour un million d'éléments, une vingtaine de millions de comparaisons, contre un demi-billion pour un tri quadratique. La page [Récursivité](../recursivite/#le-coût-dun-découpage) montre cet arbre, et le théorème qui généralise ce calcul.

Le tri fusion a un défaut&nbsp;: il n'est pas **en place**. Il a besoin d'une liste auxiliaire pour fusionner, donc d'une mémoire supplémentaire proportionnelle à $n$.

## Quicksort

En 1959, Tony Hoare, jeune étudiant britannique à Moscou, travaille sur un programme de traduction automatique du russe vers l'anglais. Il doit trier les mots de chaque phrase avant de les chercher dans un dictionnaire stocké sur bande magnétique. C'est pour cela qu'il imagine Quicksort, qu'il publie à son retour en Angleterre, en 1961.

Le principe est encore de diviser pour régner, mais à l'envers du tri fusion. On choisit un élément, le **pivot**, et l'on range à sa gauche tous les éléments plus petits, à sa droite tous les autres&nbsp;: c'est la **partition**. Le pivot est alors à sa place définitive, et il reste à trier, indépendamment, les deux côtés. Tout le travail se fait *avant* les appels récursifs, et la combinaison ne coûte plus rien. Surtout, la partition se fait en échangeant des éléments à l'intérieur de la liste&nbsp;: Quicksort trie **en place**.

{{< youtube-plus id="Cubuk-9gzvk" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import randint

def partition(L, g, d):
    """Range autour du pivot L[g] ; renvoie la position finale du pivot."""
    p = L[g]
    i = g + 1                              # L[g+1:i] < p <= L[i:j]
    for j in range(g + 1, d + 1):
        if L[j] < p:
            L[i], L[j] = L[j], L[i]
            i += 1
    L[g], L[i - 1] = L[i - 1], L[g]
    return i - 1

def tri_rapide(L, g=0, d=None):
    if d is None:
        d = len(L) - 1
    if g < d:
        k = randint(g, d)                  # pivot tiré au hasard
        L[g], L[k] = L[k], L[g]
        p = partition(L, g, d)
        tri_rapide(L, g, p - 1)
        tri_rapide(L, p + 1, d)
    return L

print(tri_rapide([5, 1, 7, 3, 8, 2, 6, 4, 9, 0]))
{{< /runpython >}}

Des danseurs hongrois exécutent ci-dessous une variante sans hasard, où le premier élément sert toujours de pivot (chapeau noir). Le chapeau rouge passe d'élément en élément vers le pivot&nbsp;; chaque fois que les deux danseurs sont dans le désordre, ils échangent leurs places. Quand le pivot récupère le chapeau rouge, il est bien placé, et chaque côté recommence.

{{< youtube-plus id="ywWBy6J5gz8" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Prendre toujours le premier élément comme pivot a un défaut grave&nbsp;: sur une liste déjà triée, le pivot est le plus petit élément, la partition laisse un côté vide et l'autre amputé d'un seul élément, et le tri devient quadratique. Le hasard règle le problème&nbsp;: avec un pivot tiré au sort, le coût **moyen** est de l'ordre de $n\log\_2 n$ quelle que soit la liste de départ (environ $1{,}39\\,n\log\_2 n$ comparaisons). Il n'y a plus de mauvaise entrée, seulement de mauvais tirages, et ils sont rarissimes.

<div class="quiz">

Avec le premier élément pour pivot, quelle hauteur la pile d'exécution atteint-elle pour trier une liste déjà triée de $500$ éléments&nbsp;?

<details><summary>Réponse</summary>

$500$&nbsp;: chaque appel ne retire qu'un élément, le pivot, et relance le tri sur les $499$ autres. Python, qui refuse par défaut de dépasser un millier d'appels imbriqués, échouerait sur une liste triée de quelques milliers d'éléments.

</details>
</div>

Si l'on renonce à trier en place, Quicksort s'écrit en quelques lignes. Ici, il trie les lettres d'un mot&nbsp;: chaque appel garde la première lettre comme pivot, envoie à gauche les lettres qui viennent avant elle dans l'alphabet (ou lui sont égales), à droite les autres, et recolle les deux morceaux triés de part et d'autre du pivot.

<div class="anim" data-anim="pile-appels" data-fonctions="rapide"></div>
{{< script "js/pile-appels.js" >}}

L'élégance de ce code cache une dérobade&nbsp;: en fabriquant de nouvelles listes, il esquive la vraie difficulté, qui est de tout ranger à l'intérieur de la liste de départ, sans mémoire supplémentaire.

## La course

Six algorithmes trient en même temps le même tableau. À chaque instant, tous ont fait le même nombre de comparaisons&nbsp;; le classement final se lit sous chaque tableau. Le type de données change tout.

<div class="anim" data-anim="course-tris"></div>
{{< script "js/course-tris.js" >}}

- **Au hasard**, les tris en $n\log n$ distancent nettement les tris quadratiques, et l'écart se creuse avec la taille.
- **Presque triées**, le tri par insertion passe devant tout le monde, tandis que le Quicksort au premier pivot s'effondre.
- **En ordre inverse**, c'est le pire cas de l'insertion, et encore une catastrophe pour le premier pivot.
- **Avec beaucoup de doublons**, Quicksort perd du terrain, pivot au hasard ou non&nbsp;: tous les éléments égaux au pivot partent du même côté, et les partitions se déséquilibrent. La parade, proposée par Edsger Dijkstra sous le nom de «&nbsp;drapeau hollandais&nbsp;», consiste à partitionner en trois zones&nbsp;: plus petits, égaux, plus grands.

## Peut-on trier plus vite&nbsp;?

Tous ces tris ont un point commun&nbsp;: ils n'accèdent aux éléments qu'en les **comparant** deux à deux. Un tel algorithme peut se dessiner comme un arbre de décision&nbsp;: chaque nœud est une comparaison, chaque feuille un ordre possible des éléments.

<div style="text-align:center;margin:1.2em 0 0.4em;">
<svg viewBox="0 0 666 270" role="img" aria-label="Arbre de décision pour trier trois éléments a, b, c : chaque nœud est une comparaison, chaque feuille un ordre ; six feuilles, trois comparaisons au plus" style="width:100%;max-width:666px;height:auto;font-family:system-ui,sans-serif;"><line x1="303" y1="42" x2="133" y2="93" stroke="#94a3b8" stroke-width="1.4"/><text x="206" y="72" font-size="11" fill="#64748b" text-anchor="end">oui</text><line x1="303" y1="42" x2="473" y2="93" stroke="#94a3b8" stroke-width="1.4"/><text x="400" y="72" font-size="11" fill="#64748b" text-anchor="start">non</text><line x1="133" y1="117" x2="48" y2="168" stroke="#94a3b8" stroke-width="1.4"/><text x="79" y="146" font-size="11" fill="#64748b" text-anchor="end">oui</text><line x1="133" y1="117" x2="218" y2="168" stroke="#94a3b8" stroke-width="1.4"/><text x="187" y="146" font-size="11" fill="#64748b" text-anchor="start">non</text><line x1="473" y1="117" x2="388" y2="168" stroke="#94a3b8" stroke-width="1.4"/><text x="419" y="146" font-size="11" fill="#64748b" text-anchor="end">oui</text><line x1="473" y1="117" x2="558" y2="168" stroke="#94a3b8" stroke-width="1.4"/><text x="527" y="146" font-size="11" fill="#64748b" text-anchor="start">non</text><line x1="218" y1="192" x2="158" y2="233" stroke="#94a3b8" stroke-width="1.4"/><text x="176" y="216" font-size="11" fill="#64748b" text-anchor="end">oui</text><line x1="218" y1="192" x2="278" y2="233" stroke="#94a3b8" stroke-width="1.4"/><text x="260" y="216" font-size="11" fill="#64748b" text-anchor="start">non</text><line x1="558" y1="192" x2="498" y2="233" stroke="#94a3b8" stroke-width="1.4"/><text x="516" y="216" font-size="11" fill="#64748b" text-anchor="end">oui</text><line x1="558" y1="192" x2="618" y2="233" stroke="#94a3b8" stroke-width="1.4"/><text x="600" y="216" font-size="11" fill="#64748b" text-anchor="start">non</text><rect x="268" y="18" width="70" height="24" rx="5" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="303" y="34.5" font-size="12.5" text-anchor="middle" fill="#004D80" font-style="italic">a < b ?</text><rect x="98" y="93" width="70" height="24" rx="5" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="133" y="109.5" font-size="12.5" text-anchor="middle" fill="#004D80" font-style="italic">b < c ?</text><rect x="438" y="93" width="70" height="24" rx="5" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="473" y="109.5" font-size="12.5" text-anchor="middle" fill="#004D80" font-style="italic">a < c ?</text><rect x="12" y="168" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="48" y="184.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">a, b, c</text><rect x="183" y="168" width="70" height="24" rx="5" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="218" y="184.5" font-size="12.5" text-anchor="middle" fill="#004D80" font-style="italic">a < c ?</text><rect x="352" y="168" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="388" y="184.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">b, a, c</text><rect x="523" y="168" width="70" height="24" rx="5" fill="#E6EEF5" stroke="#004D80" stroke-width="1.3"/><text x="558" y="184.5" font-size="12.5" text-anchor="middle" fill="#004D80" font-style="italic">b < c ?</text><rect x="122" y="233" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="158" y="249.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">a, c, b</text><rect x="242" y="233" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="278" y="249.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">c, a, b</text><rect x="462" y="233" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="498" y="249.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">b, c, a</text><rect x="582" y="233" width="72" height="24" rx="12" fill="#DCFCE7" stroke="#16a34a" stroke-width="1.3"/><text x="618" y="249.5" font-size="12.5" text-anchor="middle" fill="#14532d" font-weight="600">c, b, a</text></svg>
</div>
<p class="legende">Trier trois éléments a, b, c&nbsp;: six ordres possibles, donc six feuilles, et trois comparaisons dans le pire cas.</p>

Pour trier $n$ éléments, l'arbre doit pouvoir aboutir à chacun des $n!$ ordres possibles&nbsp;: il a au moins $n!$ feuilles. Un arbre binaire de hauteur $h$ ayant au plus $2^h$ feuilles, il faut $2^h\geqslant n!$, c'est-à-dire $h\geqslant\log\_2(n!)$. Et la formule de Stirling donne $\log\_2(n!)\approx n\log\_2 n-1{,}44\\,n$. **Aucun tri par comparaisons ne peut faire mieux que de l'ordre de $n\log n$ comparaisons dans le pire cas**&nbsp;: le tri fusion est optimal, à une petite constante près.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from math import log2, factorial
from random import shuffle

comp = 0
def tri_fusion(L):
    global comp
    if len(L) <= 1:
        return L
    A, B = tri_fusion(L[:len(L) // 2]), tri_fusion(L[len(L) // 2:])
    R, i, j = [], 0, 0
    while i < len(A) and j < len(B):
        comp += 1
        if A[i] <= B[j]:
            R.append(A[i]); i += 1
        else:
            R.append(B[j]); j += 1
    return R + A[i:] + B[j:]

for n in [10, 100, 1000]:
    L = list(range(n)); shuffle(L)
    comp = 0
    tri_fusion(L)
    print(f"n = {n:4} : borne log2(n!) = {log2(factorial(n)):7.0f}, tri fusion : {comp:6} comparaisons")
{{< /runpython >}}

C'est le même argument que pour la [recherche dichotomique](../rechercher/#impossible-de-faire-mieux-en-comparant)&nbsp;: chaque comparaison n'apporte qu'un bit d'information, et il faut $\log\_2(n!)$ bits pour désigner un ordre parmi $n!$. Pour aller plus vite, il faut, là encore, cesser de comparer.

## Trier sans comparer

Si les éléments sont des entiers compris entre $0$ et $m$, il suffit de **compter**&nbsp;: un tableau de $m+1$ cases reçoit le nombre d'occurrences de chaque valeur, puis on réécrit chaque valeur autant de fois qu'elle est apparue. Pas une seule comparaison, et un coût proportionnel à $n+m$&nbsp;: c'est le **tri par dénombrement**. Il n'est intéressant que si $m$ n'est pas trop grand devant $n$.

Pour des nombres plus grands, on trie **chiffre par chiffre**, en commençant par les unités. Une condition est essentielle&nbsp;: chaque passage doit préserver l'ordre obtenu par les passages précédents entre nombres ayant le même chiffre courant. C'est le **tri par base** (*radix sort*).

<div class="anim" data-anim="tri-base"></div>
{{< script "js/tri-base.js" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def tri_denombrement(L, m):
    effectifs = [0] * (m + 1)
    for x in L:
        effectifs[x] += 1
    R = []
    for v in range(m + 1):
        R += [v] * effectifs[v]
    return R

def tri_base(L, chiffres):
    for p in range(chiffres):                  # unités, dizaines, centaines…
        casiers = [[] for _ in range(10)]
        for x in L:
            casiers[x // 10 ** p % 10].append(x)   # à la suite : l'ordre est préservé
        L = [x for casier in casiers for x in casier]
    return L

print(tri_denombrement([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 9))
print(tri_base([170, 45, 75, 902, 24, 2, 66, 802, 351], 3))
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">Le recensement de 1890</div>

Le recensement américain de 1880 a demandé près de huit ans de dépouillement. Pour celui de 1890, Herman Hollerith propose de reporter les réponses sur des cartes perforées, lues par des machines électriques&nbsp;: les résultats essentiels sont connus en quelques mois. Les trieuses de cartes qu'il conçoit ensuite, et toutes celles qui leur succèdent pendant un demi-siècle, trient exactement comme l'animation&nbsp;: une colonne de la carte à la fois, en commençant par le dernier chiffre, en distribuant les cartes dans des casiers. L'entreprise de Hollerith deviendra IBM.

</div>

## La stabilité

Deux éléments égaux pour le tri peuvent être distincts par ailleurs&nbsp;: deux élèves de même note, deux fichiers de même taille. Un tri est **stable** s'il conserve leur ordre de départ. Dans l'animation ci-dessous, les barres blanche et noire ont la même hauteur&nbsp;: un tri stable ne les intervertit jamais.

<div class="anim" data-anim="tris-stable"></div>
{{< script "js/tris3d.js" "module" >}}

Comptons les lettres «&nbsp;r&nbsp;», «&nbsp;c&nbsp;», «&nbsp;q&nbsp;» et «&nbsp;p&nbsp;» d'une phrase, rangeons les couples par ordre alphabétique, puis trions-les par effectif&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def tri_bulles(L, cle):
    L = L[:]
    for i in range(len(L) - 1):
        for j in range(len(L) - 1 - i):
            if cle(L[j]) > cle(L[j + 1]):
                L[j], L[j + 1] = L[j + 1], L[j]
    return L

def tri_selection(L, cle):
    L = L[:]
    for i in range(len(L) - 1):
        m = i
        for j in range(i + 1, len(L)):
            if cle(L[j]) < cle(L[m]):
                m = j
        L[i], L[m] = L[m], L[i]
    return L

T = [("c", 5), ("p", 5), ("q", 2), ("r", 6)]         # déjà rangé par ordre alphabétique
effectif = lambda couple: couple[1]
print("bulles   :", tri_bulles(T, effectif))
print("sélection :", tri_selection(T, effectif))
print("sorted   :", sorted(T, key=effectif))
{{< /runpython >}}

Le tri par sélection a fait passer «&nbsp;p&nbsp;» devant «&nbsp;c&nbsp;» en échangeant au loin le premier élément avec le minimum&nbsp;: il n'est pas stable. Le tri à bulles, qui n'échange que des voisins strictement dans le désordre, l'est. La stabilité permet de trier selon plusieurs critères&nbsp;: pour classer des élèves par note, puis par ordre alphabétique à note égale, on trie d'abord par nom, **puis** par note, avec un tri stable. C'est exactement ce que fait le tri par base, chiffre après chiffre.

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Tri</th><th>Meilleur cas</th><th>En moyenne</th><th>Pire cas</th><th>En place</th><th>Stable</th></tr>
<tr><td>sélection</td><td>$n^2$</td><td>$n^2$</td><td>$n^2$</td><td>oui</td><td>non</td></tr>
<tr><td>insertion</td><td>$n$</td><td>$n^2$</td><td>$n^2$</td><td>oui</td><td>oui</td></tr>
<tr><td>bulles</td><td>$n^2$</td><td>$n^2$</td><td>$n^2$</td><td>oui</td><td>oui</td></tr>
<tr><td>fusion</td><td>$n\log n$</td><td>$n\log n$</td><td>$n\log n$</td><td>non</td><td>oui</td></tr>
<tr><td>rapide (pivot au hasard)</td><td>$n\log n$</td><td>$n\log n$</td><td>$n^2$</td><td>oui</td><td>non</td></tr>
<tr><td>dénombrement (valeurs de $0$ à $m$)</td><td>$n+m$</td><td>$n+m$</td><td>$n+m$</td><td>non</td><td>—</td></tr>
<tr><td>Timsort (Python)</td><td>$n$</td><td>$n\log n$</td><td>$n\log n$</td><td>non</td><td>oui</td></tr>
</table>
</div>
<p class="legende">Ordres de grandeur du nombre d'opérations, pour une liste de $n$ éléments.</p>

## Le tri de Python

Que fait `sorted`&nbsp;? En 2002, Tim Peters écrit pour Python un tri hybride, baptisé depuis **Timsort**. Il repère dans la liste les tronçons déjà triés (dans un sens ou dans l'autre), allonge les plus courts par insertion, là où ce tri excelle, puis fusionne les tronçons deux à deux, en suivant des règles soigneusement choisies pour que les fusions restent équilibrées. Il est stable, et il exploite tout l'ordre déjà présent&nbsp;: une liste triée ne lui coûte que $n-1$ comparaisons. Java, Android, le moteur JavaScript de Chrome et bien d'autres l'ont adopté.

Pour voir Timsort exploiter l'ordre déjà présent, il suffit de compter ses comparaisons&nbsp;: on trie des objets dont la méthode `__lt__`, celle qu'appelle l'opérateur `<`, incrémente un compteur. Ce programme s'exécute avec le vrai Python, et donc le vrai Timsort.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
from random import shuffle, randrange
from math import log2

class Compte:
    n = 0                                   # comparaisons faites par sorted
    def __init__(self, v):
        self.v = v
    def __lt__(self, autre):
        Compte.n += 1
        return self.v < autre.v

n = 100_000
hasard = list(range(n)); shuffle(hasard)
presque = list(range(n))
for _ in range(100):                        # 100 échanges de voisins au hasard
    i = randrange(n - 1)
    presque[i], presque[i + 1] = presque[i + 1], presque[i]
cas = {"au hasard": hasard,
       "déjà triée": list(range(n)),
       "en ordre inverse": list(range(n, 0, -1)),
       "presque triée": presque,
       "deux moitiés triées": list(range(0, n, 2)) + list(range(1, n, 2))}

print(f"n = {n:_} ; n log2 n ≈ {round(n * log2(n)):_}".replace("_", " "))
for nom, L in cas.items():
    Compte.n = 0
    sorted(Compte(x) for x in L)
    print(f"{nom:20} : {Compte.n:>9_} comparaisons".replace("_", " "))
{{< /runpython >}}

Une liste déjà triée ne coûte que $n-1$ comparaisons&nbsp;: Timsort y voit un seul tronçon. Une liste en ordre inverse aussi&nbsp;: il repère un unique tronçon décroissant, qu'il retourne. Deux moitiés triées l'une après l'autre ne demandent que de repérer deux tronçons puis de les fusionner. Seule la liste au hasard s'approche de la borne $n\log\_2 n$.

<div class="encadre prune">
<div class="encadre-titre">Une erreur trouvée en tentant une preuve</div>

En 2015, une équipe de chercheurs néerlandais et allemands entreprend de prouver formellement, à l'aide d'un logiciel, que Timsort est correct. La preuve échoue&nbsp;: les règles qui maintiennent les fusions équilibrées ne garantissent pas toujours ce qu'elles sont censées garantir. Dans la version Java, l'erreur permettait de construire des tableaux qui faisaient planter le tri. Le correctif ne tient qu'en quelques lignes, mais il a fallu treize ans et une tentative de preuve pour le trouver.

</div>

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
eleves = [("Zoé", 15), ("Hugo", 12), ("Inès", 15), ("Adam", 12), ("Léa", 17), ("Noé", 12)]
par_nom = sorted(eleves)                                   # ordre alphabétique
par_note = sorted(par_nom, key=lambda e: e[1], reverse=True)   # stable : l'ordre alphabétique survit à note égale
for nom, note in par_note:
    print(f"{note}  {nom}")
{{< /runpython >}}

<div class="encadre retenir">
<div class="encadre-titre">À retenir</div>

- Les tris simples (sélection, insertion, bulles) coûtent $\mathcal{O}(n^2)$&nbsp;; le tri par insertion excelle sur des données presque triées.
- Le **tri fusion** coûte toujours $\mathcal{O}(n \log n)$, avec une mémoire auxiliaire&nbsp;; le **Quicksort** aussi en moyenne, mais $\mathcal{O}(n^2)$ dans le pire cas.
- Aucun tri par comparaisons ne fait mieux que $n \log\_2 n$ comparaisons dans le pire cas. Sans comparer, le tri par base descend au temps linéaire quand les clés sont bornées.
- Un tri **stable** préserve l'ordre des éléments égaux. Celui de Python, Timsort, est stable et tire parti de l'ordre déjà présent.

</div>
