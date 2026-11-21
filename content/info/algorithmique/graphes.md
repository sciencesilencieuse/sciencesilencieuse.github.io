+++
title = "Graphes"
date = 2026-11-19T10:00:00+01:00
weight = 6
chapter = false
css = "algo.css"
+++

# Graphes

## Les sept ponts de Königsberg

Au XVIII<sup>e</sup> siècle, la ville prussienne de Königsberg est traversée par la Pregel, qui enserre deux îles. Sept ponts relient les îles et les rives, et les habitants se demandent s'il est possible de se promener en traversant chaque pont **une et une seule fois**. Personne n'y parvient, mais personne ne sait prouver que c'est impossible.

![Königsberg, ses deux îles et ses sept ponts](/konigsberg.png)

En 1736, Leonhard Euler règle la question, et fonde du même coup la théorie des graphes. Son idée est d'oublier tout ce qui ne compte pas&nbsp;: la forme des rives, la longueur des ponts, le tracé des rues. Il ne reste que quatre zones de terre, les **sommets**, et sept ponts qui les relient, les **arêtes**. Chaque fois qu'on traverse une zone, on y entre par un pont et on en ressort par un autre&nbsp;: les ponts d'une zone traversée vont par deux. Seules la zone de départ et la zone d'arrivée peuvent avoir un nombre impair de ponts. Or à Königsberg, les quatre zones en ont un nombre impair.

<div class="anim" data-anim="konigsberg"></div>
{{< script "js/fin-partie.js" >}}
{{< script "js/konigsberg.js" >}}

Le nombre d'arêtes qui partent d'un sommet est son **degré**. Euler a montré qu'une promenade passant une fois par chaque arête, aujourd'hui appelée **chemin eulérien**, existe si et seulement si le graphe est connexe et compte zéro ou deux sommets de degré impair. Le critère se vérifie d'un coup d'œil, quelle que soit la taille du graphe&nbsp;: inutile d'essayer toutes les promenades.

<div class="encadre prune">
<div class="encadre-titre">Königsberg aujourd'hui</div>

Königsberg est devenue Kaliningrad, ville russe. Deux des sept ponts ont été détruits par les bombardements de 1944, et deux autres remplacés par une voie rapide. Il en reste cinq, et le problème a changé de réponse&nbsp;: deux zones seulement ont désormais un nombre impair de ponts. La promenade d'Euler est enfin possible, à condition de partir d'une île pour finir sur l'autre.

</div>

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
# chaque zone de terre et la liste des zones où mènent ses ponts (un pont par élément)
ponts_1736 = {"nord": ["Kneiphof", "Kneiphof", "Lomse"],
              "sud": ["Kneiphof", "Kneiphof", "Lomse"],
              "Kneiphof": ["nord", "nord", "sud", "sud", "Lomse"],
              "Lomse": ["nord", "sud", "Kneiphof"]}

def degres(G):
    return {s: len(G[s]) for s in G}

d = degres(ponts_1736)
print(d)
print("somme des degrés :", sum(d.values()), "= 2 × nombre de ponts")
impairs = [s for s in d if d[s] % 2 == 1]
print(len(impairs), "zones de degré impair : promenade",
      "possible" if len(impairs) in (0, 2) else "impossible")
{{< /runpython >}}

La somme des degrés vaut toujours le double du nombre d'arêtes, puisque chaque arête a deux bouts. Elle est donc paire, et le nombre de sommets de degré impair l'est aussi. C'est le «&nbsp;lemme des poignées de main&nbsp;»&nbsp;: dans une soirée, le nombre de personnes ayant serré un nombre impair de mains est toujours pair.

## Des réseaux partout

Des sommets, et des traits pour les relier&nbsp;: cette simplicité fait la puissance des graphes. Des aéroports et des vols, des carrefours et des rues, des neurones et des synapses, des pages web et des liens, des personnes et des amitiés, des atomes et des liaisons chimiques&nbsp;: tous ces réseaux se décrivent de la même façon, et les mêmes algorithmes s'y appliquent.

{{< youtube-plus id="DdaElt6oP6w" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Quelques mots suffisent pour en parler&nbsp;:

- un graphe est **orienté** si ses liens ont un sens (une rue à sens unique, un lien d'une page web vers une autre)&nbsp;; on parle alors d'**arcs**, de **successeurs** et de **prédécesseurs**&nbsp;;
- un **chemin** est une suite de sommets reliés de proche en proche&nbsp;; sa **longueur** est son nombre d'arêtes, et la **distance** entre deux sommets est la longueur du plus court chemin qui les relie&nbsp;;
- un graphe est **connexe** si l'on peut aller de n'importe quel sommet à n'importe quel autre&nbsp;;
- un **cycle** est un chemin qui revient à son point de départ sans repasser par la même arête, et un **arbre** est un graphe connexe sans cycle&nbsp;;
- un graphe est **pondéré** si chaque arête porte un nombre, son **poids**&nbsp;: une distance, une durée, un prix.

### Représenter un graphe en mémoire

Deux représentations dominent. La **liste d'adjacence** associe à chaque sommet la liste de ses voisins, ce qu'un dictionnaire Python fait naturellement. La **matrice d'adjacence** est un tableau $n\times n$ où la case $(i,j)$ vaut $1$ s'il y a une arête de $i$ vers $j$, et $0$ sinon.

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Opération</th><th>Liste d'adjacence</th><th>Matrice d'adjacence</th></tr>
<tr><td>mémoire occupée</td><td>$n+m$</td><td>$n^2$</td></tr>
<tr><td>énumérer les voisins d'un sommet</td><td>proportionnel à son degré</td><td>$n$</td></tr>
<tr><td>tester si deux sommets sont reliés</td><td>proportionnel au degré</td><td>$1$</td></tr>
<tr><td>trouver les prédécesseurs (graphe orienté)</td><td>$n+m$</td><td>$n$</td></tr>
</table>
</div>
<p class="legende">Ordres de grandeur, pour un graphe de $n$ sommets et $m$ arêtes.</p>

La plupart des réseaux réels sont **creux**&nbsp;: chaque sommet n'a que quelques voisins parmi des millions. La matrice y gaspille une place immense en zéros, et la liste d'adjacence l'emporte. La matrice a pourtant un tour dans son sac&nbsp;: le coefficient $(i,j)$ de sa puissance $M^k$ compte les chemins de longueur $k$ qui vont de $i$ à $j$. Un chemin de longueur $k$ est en effet un chemin de longueur $k-1$ vers un sommet intermédiaire, suivi d'une arête, et c'est exactement ce que somme le produit matriciel.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def produit(A, B):
    n = len(A)
    return [[sum(A[i][k] * B[k][j] for k in range(n)) for j in range(n)] for i in range(n)]

M = [[1, 1, 0],          # sommet 1 : vers 1 et vers 2
     [0, 0, 1],          # sommet 2 : vers 3
     [1, 1, 0]]          # sommet 3 : vers 1 et vers 2
P = M
for k in range(2, 5):
    P = produit(P, M)
    print(f"chemins de longueur {k} de 3 vers 1 : {P[2][0]}")
{{< /runpython >}}

## Parcourir un graphe

Pour savoir quels sommets on peut atteindre depuis un sommet de départ, il faut explorer le graphe méthodiquement, sans tourner en rond. Deux stratégies s'offrent à nous&nbsp;: le **parcours en largeur**, qui explore par couches de plus en plus éloignées, comme une onde qui s'étend, et le **parcours en profondeur**, qui s'enfonce le plus loin possible avant de revenir sur ses pas.

{{< youtube-plus id="QCj7VijRkiM" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Les deux parcours s'écrivent avec le **même code**. On range dans une structure les sommets qui restent à voir&nbsp;; on en retire un, on le marque comme vu s'il ne l'est pas déjà, et l'on range ses voisins. Tout dépend de l'élément qu'on retire. Avec une **file**, on retire le premier arrivé, comme dans une file d'attente&nbsp;: c'est le parcours en largeur. Avec une **pile**, on retire le dernier arrivé, comme dans une pile d'assiettes&nbsp;: c'est le parcours en profondeur.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def parcours(G, depart, retirer):
    a_voir, vus, ordre = [depart], set(), []
    while a_voir:
        s = retirer(a_voir)
        if s not in vus:          # sans ce test, le moindre cycle ferait tourner en rond
            vus.add(s)
            ordre.append(s)
            a_voir.extend(G[s])
    return ordre

file = lambda L: L.pop(0)         # premier arrivé, premier servi
pile = lambda L: L.pop()          # dernier arrivé, premier servi

G = {"Bob": ["Alice", "Dave", "Charlie"], "Alice": ["Elisa"], "Charlie": ["Elisa", "Hector"],
     "Dave": ["Farid", "Gus"], "Elisa": [], "Farid": [], "Gus": [], "Hector": []}
print("largeur    :", parcours(G, "Bob", file))
print("profondeur :", parcours(G, "Bob", pile))
{{< /runpython >}}

Chaque sommet est marqué une fois, et chaque arête examinée une fois (deux fois si elle n'est pas orientée)&nbsp;: les deux parcours coûtent un temps proportionnel à $n+m$. En Python, `L.pop(0)` décale toute la liste et coûte cher sur de grandes listes&nbsp;; la structure `deque` du module `collections` retire en temps constant aux deux bouts.

L'animation ci-dessous parcourt le graphe des quartiers d'une ville, des Minimes jusqu'au Stade. Les poids des arcs sont des durées de trajet. On peut y suivre le contenu de la structure et l'ordre dans lequel les sommets sont vus.

<div class="anim" data-anim="graphe-pas"></div>
{{< script "js/graphe-pas.js" >}}

Le parcours en largeur trouve le chemin qui compte le **moins de tronçons**&nbsp;: il atteint d'abord tous les sommets à distance $1$, puis tous ceux à distance $2$, et ainsi de suite. Le parcours en profondeur, lui, trouve un chemin quelconque. Dans un labyrinthe, la différence saute aux yeux&nbsp;: la largeur progresse comme une tache d'encre, la profondeur comme un explorateur qui suit un mur.

<div class="anim" data-anim="labyrinthe"></div>
{{< script "js/labyrinthe.js" >}}

La pile du parcours en profondeur n'est autre que la [pile d'exécution](../recursivite/#la-pile-dexécution) d'une fonction récursive, qui s'écrit alors en quelques lignes&nbsp;:

```python
def profondeur(G, s, vus):
    vus.add(s)
    for v in G[s]:
        if v not in vus:
            profondeur(G, v, vus)
    return vus
```

### Six degrés de séparation

En 1967, le psychologue Stanley Milgram demande à des habitants du Nebraska de faire parvenir une lettre à un agent de change de Boston, en ne la confiant qu'à des connaissances qu'ils tutoient. Les lettres qui arrivent ont changé de mains environ six fois&nbsp;: c'est l'origine de l'expression «&nbsp;six degrés de séparation&nbsp;». En 2016, Facebook mesure la distance moyenne entre deux de ses utilisateurs, à l'échelle d'un milliard et demi de sommets&nbsp;: $4{,}57$, soit $3{,}57$ intermédiaires seulement.

Les mathématiciens ont leur **nombre d'Erdős**, la distance à Paul Erdős dans le graphe des cosignatures d'articles&nbsp;; les cinéphiles leur **nombre de Bacon**, la distance à l'acteur Kevin Bacon dans le graphe des acteurs ayant tourné ensemble. Dans les deux cas, presque tout le monde est à moins de cinq ou six pas. Pourquoi un monde si petit&nbsp;? Si chacun a $k$ amis, on atteint environ $k^d$ personnes en $d$ pas&nbsp;: la distance typique croît comme le **logarithme** de la population.

Voici un vrai graphe de ce genre&nbsp;: les 10&nbsp;902 films américains sortis de 1980 à 2023, et les 21&nbsp;480 acteurs de leurs distributions principales. Chaque point blanc est un film, chaque point coloré un acteur, relié aux films où il tient l'un des premiers rôles&nbsp;; la couleur donne son nombre de Bacon, calculé par un parcours en largeur depuis Kevin Bacon. Le graphe se découpe en **communautés**, des grappes d'acteurs et de films qui se fréquentent beaucoup (souvent ceux d'une même époque), nommées ici d'après leur acteur le plus prolifique&nbsp;; de longs filaments les relient, tissés par les acteurs aux carrières les plus fournies (Bruce Willis et ses 104 films, Samuel L. Jackson et ses 95). Choisissez un acteur, ou cliquez sur un point&nbsp;: son plus court chemin vers Kevin Bacon s'allume.

<div class="anim" data-anim="bacon"></div>
{{< script "js/bacon.js" "module" >}}
<p class="legende">Données&nbsp;: listes de films américains de Wikipédia (licence CC BY-SA), compilées dans le dépôt <a href="https://github.com/prust/wikipedia-movie-data">wikipedia-movie-data</a>&nbsp;; communautés détectées par la méthode de Leiden, disposition calculée par simulation de forces (bibliothèque igraph), rendu WebGL (three.js).</p>

Sur plus de vingt et un mille acteurs, $93\\,\\%$ sont reliés à Kevin Bacon, et presque tous ont un nombre de Bacon de $2$ ou $3$&nbsp;; deux seulement atteignent $6$. Les autres se répartissent en cinq cents petits îlots détachés du graphe, dont le plus gros ne compte qu'une trentaine de sommets&nbsp;: des films dont aucun interprète principal n'a joué un premier rôle dans un autre film de la liste. Un graphe aléatoire se comporte de même&nbsp;: dès que chaque sommet a en moyenne un peu plus d'un voisin, une **composante géante** apparaît et rassemble presque tout le monde.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import randrange

def distances(G, depart):          # parcours en largeur qui note la couche de chaque sommet
    dist = {depart: 0}
    file, tete = [depart], 0
    while tete < len(file):
        s = file[tete]; tete += 1
        for v in G[s]:
            if v not in dist:
                dist[v] = dist[s] + 1
                file.append(v)
    return dist

n, k = 3000, 8                     # 3000 personnes, 8 amis tirés au hasard chacune
G = {i: set() for i in range(n)}
for i in range(n):
    while len(G[i]) < k:
        j = randrange(n)
        if j != i:
            G[i].add(j); G[j].add(i)

for depart in [0, 1, 2]:
    d = distances(G, depart)
    print(f"depuis la personne {depart} : distance moyenne {sum(d.values()) / len(d):.2f}, maximale {max(d.values())}")
{{< /runpython >}}

## Plus courts chemins

Dans l'animation des quartiers, le parcours en largeur rejoint le Stade par l'Hôpital&nbsp;: trois tronçons seulement, mais vingt-neuf minutes de trajet, alors qu'un détour par Tasdon, Lafond et Mireuil n'en demande que vingt. Pour tenir compte des poids, Edsger Dijkstra remplace la file par une **file de priorité**, dont on retire toujours l'élément de plus petite valeur&nbsp;: ici, le sommet le plus proche du départ parmi ceux qui attendent. Le reste du code ne change pas.

{{< youtube-plus id="Bku9EfWqQC0" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Pourquoi est-ce juste&nbsp;? Quand un sommet sort de la file de priorité, tous ceux qui attendent sont au moins aussi loin du départ&nbsp;; comme les poids sont positifs, aucun détour par l'un d'eux ne pourra faire mieux. La distance de ce sommet est donc définitive. L'argument tombe si certains poids sont négatifs, et l'algorithme peut alors se tromper.

<div class="encadre prune">
<div class="encadre-titre">Vingt minutes à une terrasse de café</div>

En 1956, Edsger Dijkstra, jeune programmeur au Centre mathématique d'Amsterdam, cherche une démonstration frappante pour l'inauguration d'un nouvel ordinateur, l'ARMAC. Il choisit de calculer le plus court trajet entre deux villes des Pays-Bas. «&nbsp;Un matin, je faisais des courses à Amsterdam avec ma jeune fiancée, et, fatigués, nous nous sommes assis à la terrasse d'un café pour boire une tasse de café. J'ai juste réfléchi à la façon de le faire, et j'ai alors conçu l'algorithme du plus court chemin. C'était une invention de vingt minutes.&nbsp;» Sans papier ni crayon, ce qui l'oblige, dira-t-il, à éviter toute complication inutile.

</div>

### Le tas, une file de priorité

Pour retirer sans cesse le plus petit élément, chercher le minimum dans une liste à chaque tour coûterait un temps proportionnel à sa longueur. Un **tas** fait bien mieux. C'est un arbre binaire rangé dans une simple liste (les enfants de la case $i$ sont les cases $2i+1$ et $2i+2$) où chaque parent est plus petit que ses enfants&nbsp;: le minimum est toujours à la racine. Pour ajouter un élément, on le place au bout et on le fait remonter tant qu'il est plus petit que son parent&nbsp;; pour retirer la racine, on la remplace par le dernier élément et on fait redescendre celui-ci. Chaque opération parcourt une seule branche de l'arbre, soit environ $\log\_2 n$ étages.

{{< youtube-plus id="JRzTS8zPwSE" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def ajouter(tas, x):                  # on place x au bout, puis on le fait remonter
    tas.append(x)
    i = len(tas) - 1
    while i > 0 and tas[(i - 1) // 2] > tas[i]:
        tas[i], tas[(i - 1) // 2] = tas[(i - 1) // 2], tas[i]
        i = (i - 1) // 2

def retirer(tas):                     # on sort la racine, le dernier la remplace et redescend
    racine, dernier = tas[0], tas.pop()
    if tas:
        tas[0] = dernier
        i = 0
        while True:
            m = i
            for e in (2 * i + 1, 2 * i + 2):
                if e < len(tas) and tas[e] < tas[m]:
                    m = e
            if m == i:
                break
            tas[i], tas[m] = tas[m], tas[i]
            i = m
    return racine


def dijkstra(G, depart):
    dist = {depart: 0}
    pred = {depart: None}
    tas = [(0, depart)]
    vus = set()
    while tas:
        d, s = retirer(tas)           # le sommet en attente le plus proche du départ
        if s in vus:
            continue                  # une entrée périmée : on avait trouvé mieux depuis
        vus.add(s)
        for v, poids in G[s].items():
            if v not in dist or d + poids < dist[v]:
                dist[v] = d + poids
                pred[v] = s
                ajouter(tas, (d + poids, v))
    return dist, pred

G = {"Minimes": {"Tasdon": 5, "Hôpital": 4}, "Hôpital": {"Verdun": 21}, "Verdun": {"Stade": 4},
     "Tasdon": {"Cognehors": 7, "Lafond": 7}, "Cognehors": {"Verdun": 8},
     "Lafond": {"Mireuil": 5}, "Mireuil": {"Stade": 3}, "Stade": {}}
dist, pred = dijkstra(G, "Minimes")
chemin, s = [], "Stade"
while s is not None:
    chemin.append(s)
    s = pred[s]
print(" → ".join(reversed(chemin)), ":", dist["Stade"], "minutes")
{{< /runpython >}}

Ce même tas donne un algorithme de tri, le **tri par tas**&nbsp;: on range tous les éléments dans un tas, puis on les retire un à un, du plus petit au plus grand. Il trie en place, en $n\log n$ opérations même dans le pire cas.

### Viser la cible&nbsp;: A\*

Dijkstra s'étend dans toutes les directions à la fois, sans savoir où se trouve l'arrivée. En 1968, pour guider le robot Shakey de l'institut de recherche de Stanford, Peter Hart, Nils Nilsson et Bertram Raphael lui ajoutent une **estimation** de la distance restante. La priorité d'un sommet devient le coût déjà payé *plus* une estimation optimiste de ce qui reste à payer, comme la distance à vol d'oiseau. Tant que l'estimation ne surestime jamais le coût réel, le chemin trouvé reste le meilleur, et la recherche se dirige vers la cible. C'est l'algorithme **A\***, omniprésent dans les jeux vidéo et les logiciels de navigation.

Sur la carte ci-dessous, l'herbe coûte $1$, le marécage $3$, le lac $10$, et les murs sont infranchissables. Un grand lac barre toujours la ligne droite entre le départ et l'arrivée. Quatre algorithmes partent ensemble, et, à chaque instant, chacun a validé le même nombre de cases&nbsp;:

- le **parcours en largeur** ignore les poids&nbsp;: il trouve le chemin qui traverse le moins de cases, quitte à passer à la nage&nbsp;;
- **Dijkstra** trouve le chemin le moins coûteux, mais s'étend dans toutes les directions&nbsp;;
- **A\*** trouve le même coût optimal, en validant bien moins de cases&nbsp;;
- le **meilleur d'abord glouton** ne regarde que l'estimation&nbsp;: il fonce vers le but sans se soucier de ce qu'il a déjà payé, et arrive souvent le premier, mais par un mauvais chemin.

<div class="anim" data-anim="carte"></div>
{{< script "js/carte.js" >}}

## Relier au moindre coût&nbsp;: l'arbre couvrant minimal

On veut relier des villes par un réseau électrique, des serveurs par des câbles, des champs par des canaux, en dépensant le moins possible. Le réseau doit être connexe, et il n'a aucun intérêt à contenir un cycle&nbsp;: une arête d'un cycle peut être retirée sans rien déconnecter. On cherche donc un **arbre couvrant**, qui relie tous les sommets, de poids total minimal.

Essayer tous les arbres est hors de question&nbsp;: Arthur Cayley a montré en 1889 qu'un graphe complet à $n$ sommets en contient $n^{n-2}$, soit plus de $10^{23}$ pour vingt villes. Mais une stratégie **gloutonne**, qui fait à chaque étape le choix qui semble le meilleur sans jamais revenir dessus, trouve l'arbre optimal. Kruskal examine les arêtes de la plus courte à la plus longue et garde chacune d'elles, sauf si elle fermait un cycle. Prim fait pousser un seul arbre en lui ajoutant toujours l'arête la plus courte qui en sort.

<div class="anim" data-anim="arbre-couvrant"></div>
{{< script "js/arbre-couvrant.js" >}}

Pour savoir si une arête fermerait un cycle, Kruskal doit savoir si ses deux extrémités sont déjà dans le même morceau. Une structure astucieuse, l'**union-find**, répond en un temps quasi constant&nbsp;: chaque sommet pointe vers un autre sommet de son morceau, jusqu'à un représentant qui pointe vers lui-même. Deux sommets sont dans le même morceau s'ils ont le même représentant, et fusionner deux morceaux revient à faire pointer un représentant vers l'autre.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def kruskal(sommets, aretes):
    chef = {s: s for s in sommets}        # union-find : chaque sommet pointe vers un autre

    def representant(s):
        while chef[s] != s:
            chef[s] = chef[chef[s]]       # raccourcit le chemin au passage
            s = chef[s]
        return s

    arbre, total = [], 0
    for poids, a, b in sorted(aretes):    # de la plus légère à la plus lourde
        ra, rb = representant(a), representant(b)
        if ra != rb:                      # deux morceaux différents : pas de cycle
            chef[ra] = rb
            arbre.append((a, b, poids))
            total += poids
    return arbre, total

villes = ["Brest", "Rennes", "Nantes", "Caen", "Le Mans", "Tours"]
# distances routières approximatives, en kilomètres
aretes = [(242, "Brest", "Rennes"), (298, "Brest", "Nantes"), (107, "Rennes", "Nantes"),
          (182, "Rennes", "Caen"), (153, "Rennes", "Le Mans"), (183, "Nantes", "Le Mans"),
          (168, "Caen", "Le Mans"), (95, "Le Mans", "Tours"), (205, "Nantes", "Tours"),
          (235, "Caen", "Tours")]
arbre, total = kruskal(villes, aretes)
for a, b, p in arbre:
    print(f"{a} – {b} : {p} km")
print("total :", total, "km")
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">L'électrification de la Moravie</div>

Le premier algorithme d'arbre couvrant minimal n'est dû ni à Kruskal ni à Prim, mais au mathématicien tchèque Otakar Borůvka, en 1926. Une compagnie d'électricité lui demande comment relier au moindre coût les villes de la Moravie du Sud. Vojtěch Jarník publie en 1930 la méthode que Prim redécouvrira en 1957, et que Dijkstra retrouvera encore deux ans plus tard. Le labyrinthe de l'animation des parcours, plus haut, est lui-même, à quelques murs près, un arbre couvrant minimal&nbsp;: celui que construit Kruskal sur une grille dont chaque mur a reçu un poids tiré au hasard. On y a ensuite percé quelques murs de plus, pour créer des boucles.

</div>

## Euler facile, Hamilton difficile

Passer une fois par chaque **arête**, c'est le problème d'Euler, et le critère des degrés le tranche instantanément. Passer une fois par chaque **sommet** semble un problème voisin. Il est en réalité d'une tout autre difficulté.

En 1857, l'astronome et mathématicien irlandais William Rowan Hamilton invente le «&nbsp;jeu icosien&nbsp;»&nbsp;: un plateau de vingt villes, reliées par trente routes, sur lequel il faut faire un tour complet en passant une seule fois par chaque ville. Le plateau n'est autre qu'un **dodécaèdre** aplati&nbsp;: ses vingt sommets vus en perspective à travers l'une de ses faces. Hamilton le vend à un fabricant de jouets pour 25 livres, et le jeu est un échec commercial. Le circuit qu'il demande, passant une fois par chaque sommet et revenant au départ, porte aujourd'hui son nom&nbsp;: un **cycle hamiltonien**.

<div class="anim" data-anim="icosien"></div>
{{< script "js/icosien3d.js" "module" >}}

Le dodécaèdre compte trente cycles hamiltoniens. Pour les trouver, l'ordinateur n'a pas mieux qu'une exploration systématique&nbsp;: prolonger le chemin tant que c'est possible, et revenir en arrière dans les impasses. On ne connaît aucun critère simple, comparable à celui d'Euler, pour décider si un graphe possède un cycle hamiltonien&nbsp;: le problème est **NP-complet**. Chercher le plus court d'entre eux, quand les arêtes ont des longueurs, c'est le célèbre [problème du voyageur de commerce](../gloutons-dynamique/#le-voyageur-de-commerce-held-karp).

<div class="encadre retenir">
<div class="encadre-titre">À retenir</div>

- Un graphe, ce sont des **sommets** reliés par des **arêtes**&nbsp;; on le range le plus souvent en **liste d'adjacence**.
- Le **parcours en largeur**, avec une file, donne les distances en nombre d'arêtes&nbsp;; le **parcours en profondeur** utilise une pile.
- Avec des longueurs positives, **Dijkstra** et son tas trouvent les plus courts chemins&nbsp;; **A\*** guide la recherche vers la cible.
- L'**arbre couvrant minimal** s'obtient par des algorithmes gloutons, Prim ou Kruskal.
- Le chemin d'**Euler** se décide par un simple compte des degrés&nbsp;; le cycle de **Hamilton** est un problème NP-complet.

</div>
