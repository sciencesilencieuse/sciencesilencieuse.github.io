+++
title = "Explorer et revenir en arrière"
date = 2026-11-19T12:00:00+01:00
weight = 8
chapter = false
css = "algo.css"
aliases = ["/info/jeux/"]
+++

# Explorer et revenir en arrière

Quand on ne connaît aucun raccourci, ni choix glouton dont on sache prouver qu'il est le bon, ni sous-problèmes qui se répètent, il reste à parcourir l'arbre de tous les choix possibles. Cet arbre est le plus souvent gigantesque, mais on n'a presque jamais besoin de le parcourir en entier&nbsp;: il suffit de reconnaître au plus tôt qu'une branche ne mène nulle part, de l'abandonner, et de revenir au dernier embranchement pour essayer la suivante. C'est le **retour sur trace** (*backtracking*). Et quand l'arbre est celui d'une partie, les embranchements appartiennent tour à tour à l'un et à l'autre joueur, qui ne veulent pas la même chose.

## Le retour sur trace

### Les huit reines

En 1848, le compositeur de problèmes d'échecs Max Bezzel pose une question dans un journal berlinois&nbsp;: peut-on placer huit reines sur un échiquier sans qu'aucune ne puisse en prendre une autre&nbsp;? Une reine attaque sur toute sa ligne, toute sa colonne et ses deux diagonales. Gauss lui-même s'y intéresse, et l'on finit par établir qu'il y a $92$ solutions. On peut essayer à la main sur l'échiquier ci-dessous avant de laisser faire l'algorithme.

Deux reines sur une même ligne se prendraient&nbsp;: il y en a donc exactement une par ligne. L'algorithme les pose ligne après ligne, de haut en bas. Sur chaque ligne, il essaie les colonnes de gauche à droite et pose la reine sur la première case qui n'est pas en prise, puis passe à la ligne suivante. Si une ligne n'offre aucune case libre, c'est une **impasse**&nbsp;: inutile d'aller plus loin, l'un des choix précédents était mauvais. On revient alors sur la ligne précédente, on retire sa reine et on la décale vers la droite.

<div class="anim" data-anim="reines"></div>
{{< script "js/fin-partie.js" >}}
{{< script "js/reines.js" >}}

Sur l'échiquier ordinaire, il suffit d'essayer $876$ cases pour trouver une première solution, et $15\\,720$ pour les trouver toutes. C'est infime comparé aux $16\\,777\\,216$ façons de poser une reine par ligne. Chaque impasse coupe d'un coup toutes les façons de compléter l'échiquier qu'on aurait pu imaginer à partir de là&nbsp;: on ne les examine jamais.

{{< youtube-plus id="tU1ceGzt0lo" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def reines(n):
    colonnes = []                   # colonnes[l] : colonne de la reine posée sur la ligne l
    solutions = []

    def libre(l, c):
        for l2, c2 in enumerate(colonnes):
            if c2 == c or abs(c2 - c) == l - l2:    # même colonne ou même diagonale
                return False
        return True

    def placer(l):
        if l == n:                  # une reine sur chaque ligne : c'est une solution
            solutions.append(list(colonnes))
            return
        for c in range(n):
            if libre(l, c):
                colonnes.append(c)  # on avance...
                placer(l + 1)
                colonnes.pop()      # ...puis on revient en arrière

    placer(0)
    return solutions

solutions = reines(8)
print(len(solutions), "solutions, dont la première :")
for c in solutions[0]:
    print(" ".join("♛" if j == c else "·" for j in range(8)))
{{< /runpython >}}

<div class="encadre bleu">
<div class="encadre-titre">Le schéma du retour sur trace</div>

Tous les algorithmes de retour sur trace ont la même forme&nbsp;: une fonction récursive qui reçoit une solution partielle et essaie de la prolonger.

```python
def explorer(partielle):
    if partielle est complète:
        on la garde
    else:
        for choix in les prolongements possibles:
            if choix est compatible avec partielle:
                faire(choix)
                explorer(partielle)
                défaire(choix)
```

Le retour en arrière, c'est la ligne `défaire(choix)`&nbsp;: au retour de l'appel récursif, la solution partielle doit être exactement celle d'avant, pour que le choix suivant parte du bon endroit. Pour savoir où l'on en était dans chaque ligne, rien à programmer&nbsp;: c'est la [pile d'appels](../recursivite/#la-pile-dexécution) qui s'en souvient.

</div>

### Élaguer&nbsp;: séparer et évaluer

Le sac à dos de la [page précédente](../gloutons-dynamique/#quand-le-glouton-se-trompe-le-sac-à-dos) se prête lui aussi au retour sur trace. Pour chaque objet, on le prend ou on le laisse&nbsp;: l'arbre des choix est binaire, et ses $2^n$ feuilles sont tous les sacs imaginables. La force brute les examine toutes. On peut couper deux sortes de branches&nbsp;:

- celles qui sont **trop lourdes**&nbsp;: dès que le sac dépasse la capacité, rien en dessous ne peut convenir&nbsp;;
- celles qui sont **sans espoir**&nbsp;: on estime, de façon optimiste, la meilleure valeur qu'on pourrait encore atteindre sous un nœud. Si même cette estimation ne bat pas le meilleur sac déjà trouvé, on coupe.

Pour l'estimation, on remplit la place restante avec les objets restants par valeur au kilo décroissante, en s'autorisant à découper le dernier objet qui ne rentre pas. Pour ce sac à dos «&nbsp;fractionnaire&nbsp;», le glouton est optimal, et aucun vrai sac ne peut faire mieux&nbsp;: c'est une **borne**. La méthode porte le nom de **séparation et évaluation** (*branch and bound*)&nbsp;: séparer, c'est créer les deux branches, évaluer, c'est calculer la borne.

<div class="anim" data-anim="arbre-sac"></div>
{{< script "js/arbre-sac.js" >}}

L'ordre d'exploration compte&nbsp;: en descendant d'abord du côté «&nbsp;avec&nbsp;» et en rangeant les objets par valeur au kilo décroissante, on rencontre très tôt un bon sac, et un bon record fait couper davantage. Sur ces six objets, la force brute visite les $127$ nœuds de l'arbre, la séparation et l'évaluation seulement $13$. L'écart se creuse vite avec le nombre d'objets&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import randint, seed

seed(6)
n = 15
objets = [(randint(1, 30), randint(1, 60)) for _ in range(n)]     # (poids, valeur)
objets.sort(key=lambda o: o[1] / o[0], reverse=True)              # meilleure valeur au kilo d'abord
capacite = sum(p for p, v in objets) // 3

def borne(i, place, valeur):
    """Le mieux qu'on puisse espérer avec les objets i, i+1, ... en découpant au besoin le dernier."""
    for p, v in objets[i:]:
        if p <= place:
            place -= p
            valeur += v
        else:
            return valeur + v * place / p
    return valeur

def force_brute(i, place, valeur):
    global noeuds
    noeuds += 1
    if i == n:
        return valeur if place >= 0 else -1
    p, v = objets[i]
    return max(force_brute(i + 1, place - p, valeur + v),     # avec l'objet i
               force_brute(i + 1, place, valeur))             # sans l'objet i

def separer_evaluer(i, place, valeur):
    global noeuds, record
    noeuds += 1
    if i == n:
        record = max(record, valeur)
        return
    p, v = objets[i]
    if p <= place and borne(i + 1, place - p, valeur + v) > record:   # avec l'objet i
        separer_evaluer(i + 1, place - p, valeur + v)
    if borne(i + 1, place, valeur) > record:                           # sans l'objet i
        separer_evaluer(i + 1, place, valeur)

noeuds = 0
print("force brute :          valeur", force_brute(0, capacite, 0), "en visitant", noeuds, "nœuds")
noeuds, record = 0, 0
separer_evaluer(0, capacite, 0)
print("séparer et évaluer :   valeur", record, "en visitant", noeuds, "nœuds")
{{< /runpython >}}

Rien ne garantit que l'élagage soit toujours aussi efficace&nbsp;: sur des instances construites pour le piéger, il reste un nombre exponentiel de nœuds à visiter. Mais avec des bornes plus fines, c'est cette méthode qui permet aux logiciels d'optimisation de résoudre en pratique des problèmes à des milliers de variables, de la planification des vols à la découpe de tôles.

### Le Sudoku et l'algorithme X

Polyominos et Sudoku ont droit à leur algorithme au nom aguicheur&nbsp;: X. Il résout les problèmes de **couverture exacte**&nbsp;: on dispose d'une liste de *contraintes* et d'une liste d'*options*, chaque option satisfaisant certaines contraintes, et l'on doit choisir des options de sorte que chaque contrainte soit satisfaite **une et une seule fois**. Paver une grille avec des pièces, c'est cela&nbsp;: chaque case doit être couverte exactement une fois, et chaque pièce utilisée exactement une fois.

{{< youtube-plus id="NTzoLEB7lO0" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

#### Le Sudoku, un problème de couverture exacte

Une option, c'est un triplet $(l, c, n)$&nbsp;: «&nbsp;mettre le chiffre $n$ dans la case de la ligne $l$ et de la colonne $c$&nbsp;». Il y en a $9 \times 9 \times 9 = 729$. Les contraintes se rangent en quatre familles de $81$, soit $324$ en tout&nbsp;:

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Famille</th><th>Contrainte (une par couple)</th><th>L'option $(l, c, n)$ satisfait…</th></tr>
<tr><td>case</td><td>la case $(l, c)$ reçoit un chiffre</td><td>la contrainte $(l, c)$</td></tr>
<tr><td>ligne × chiffre</td><td>la ligne $l$ contient le chiffre $n$</td><td>la contrainte $(l, n)$</td></tr>
<tr><td>colonne × chiffre</td><td>la colonne $c$ contient le chiffre $n$</td><td>la contrainte $(c, n)$</td></tr>
<tr><td>bloc × chiffre</td><td>le bloc $b$ contient le chiffre $n$</td><td>la contrainte $(b, n)$</td></tr>
</table>
</div>

Chaque option satisfait exactement quatre contraintes, une par famille. Une grille remplie, ce sont $81$ options qui, ensemble, satisfont chacune des $324$ contraintes une et une seule fois&nbsp;: $81 \times 4 = 324$, le compte est bon. Les chiffres donnés au départ ne sont que des options imposées d'avance.

#### L'algorithme

L'algorithme X est un retour sur trace dont chaque étape tient en quelques mots&nbsp;:

1. s'il ne reste aucune contrainte à satisfaire, la grille est résolue&nbsp;;
2. sinon, on choisit la contrainte qui a **le moins d'options** restantes&nbsp;;
3. on essaie ses options une à une. Retenir une option, c'est retirer les quatre contraintes qu'elle satisfait **et toutes les options qui touchent ces contraintes**, devenues incompatibles. Puis on recommence sur le problème réduit&nbsp;;
4. si une contrainte n'a plus aucune option, c'est une impasse&nbsp;: on remet tout en place et l'on passe à l'option suivante du niveau précédent.

Le choix de l'étape 2 est l'**élagage**&nbsp;: plutôt que d'ouvrir l'arbre des possibles là où il est le plus touffu, on va là où il y a le moins de branches. Quand une contrainte n'a plus qu'une option, il n'y a même pas de choix à faire. L'animation ci-dessous suit l'algorithme pas à pas. À gauche, les petits chiffres gris sont les options encore vivantes&nbsp;; à droite, les $324$ contraintes sont dessinées en quatre grilles de $9 \times 9$ (pour «&nbsp;ligne × chiffre&nbsp;», la rangée est la ligne et la colonne est le chiffre), colorées selon leur nombre d'options restantes.

<div class="anim" data-anim="sudoku-x"></div>
{{< script "js/sudoku-x.js" >}}

<div class="encadre bleu">
<div class="encadre-titre">Les techniques des joueurs, sans les avoir programmées</div>

Les amateurs de Sudoku connaissent deux réflexes de base. Le **singleton nu**&nbsp;: une case n'a plus qu'un candidat. Le **singleton caché**&nbsp;: dans une ligne, une colonne ou un bloc, un chiffre n'a plus qu'une place possible. Personne ne les a appris à l'algorithme X, et pourtant il les applique&nbsp;: une contrainte «&nbsp;case&nbsp;» à une seule option, c'est un singleton nu&nbsp;; une contrainte «&nbsp;ligne × chiffre&nbsp;», «&nbsp;colonne × chiffre&nbsp;» ou «&nbsp;bloc × chiffre&nbsp;» à une seule option, c'est un singleton caché. Sur la grille «&nbsp;Facile&nbsp;», il ne fait que cela&nbsp;: aucun pari, aucun retour en arrière. Les techniques humaines apparaissent d'elles-mêmes, comme les cas particuliers d'une seule règle&nbsp;: aller au plus contraint.

</div>

<div class="encadre prune">
<div class="encadre-titre">Une symétrie cachée</div>

Regardons les trois premières familles&nbsp;: elles correspondent aux couples $(l, c)$, $(l, n)$ et $(c, n)$. Les trois coordonnées de l'option $(l, c, n)$ y jouent des rôles parfaitement symétriques&nbsp;: sans les blocs, une grille de Sudoku est un **carré latin**, c'est-à-dire $81$ triplets tels que deux coordonnées quelconques déterminent toujours la troisième. Le joueur, lui, privilégie les cases, parce que c'est là qu'il écrit. Pour l'algorithme, «&nbsp;quel chiffre dans la case $(3, 5)$&nbsp;?&nbsp;» et «&nbsp;où va le $7$ dans la ligne $3$&nbsp;?&nbsp;» sont la même question, posée selon un autre couple de coordonnées. C'est pourquoi il trouve les singletons cachés, réputés plus difficiles à repérer, aussi facilement que les singletons nus. Seuls les blocs brisent la symétrie.

</div>

Difficile pour un humain ne veut d'ailleurs pas dire difficile pour l'algorithme. La grille «&nbsp;AI Escargot&nbsp;», présentée en 2006 par le mathématicien finlandais Arto Inkala comme la plus difficile jamais conçue, ne demande ici que $87$ retours en arrière, et celle qu'Inkala a proposée en 2012 environ $1\\,400$&nbsp;: quelques millisecondes pour un ordinateur. Ces nombres dépendent beaucoup de la façon de départager les contraintes qui ont le même nombre d'options&nbsp;: en changeant seulement cet ordre, l'Escargot peut en demander près de $1\\,500$. La raison profonde est ailleurs&nbsp;: la couverture exacte est un problème **NP-complet** (comme le [voyageur de commerce](../gloutons-dynamique/#le-voyageur-de-commerce-held-karp)), et l'on ne connaît aucun algorithme efficace dans tous les cas. Pour une grille $9 \times 9$, l'élagage suffit largement&nbsp;; pour des Sudoku géants $n^2 \times n^2$, l'explosion combinatoire finit toujours par gagner.

#### Une implémentation en Python

Ali Assaf a montré qu'avec des dictionnaires d'ensembles, l'algorithme X tient en une trentaine de lignes de Python. La version ci-dessous suit son idée. `X` associe à chaque contrainte l'ensemble des options qui la satisfont, et `Y` à chaque option la liste des contraintes qu'elle satisfait. La fonction `choisir` retire les contraintes satisfaites par une option, et retire les options incompatibles des autres contraintes. Elle renvoie ce qu'elle a retiré, pour que `rendre` puisse le remettre&nbsp;: `rendre` parcourt **les mêmes boucles en sens inverse**, si bien que le problème retrouve exactement son état d'avant. La recherche elle-même ne s'occupe que de choisir, essayer et revenir.

{{< runpython lang="python" mode="toggle" default="code" height="auto" width="800" >}}
def choisir(X, Y, r):
    """Retient l'option r : retire ses contraintes et les options incompatibles."""
    retirees = []
    for j in Y[r]:                      # chaque contrainte satisfaite par r...
        for i in X[j]:                  # ...rend incompatibles les autres options i qui la satisfont
            for k in Y[i]:
                if k != j:
                    X[k].remove(i)      # i disparaît de ses autres contraintes
        retirees.append(X.pop(j))       # la contrainte j est satisfaite : on la retire
    return retirees

def rendre(X, Y, r, retirees):
    """Le miroir de choisir : mêmes boucles, en sens inverse."""
    for j in reversed(Y[r]):
        X[j] = retirees.pop()
        for i in X[j]:
            for k in Y[i]:
                if k != j:
                    X[k].add(i)

def algorithme_x(X, Y, solution):
    if not X:                                   # plus aucune contrainte : gagné
        return list(solution)
    c = min(X, key=lambda j: len(X[j]))         # la contrainte la plus difficile à satisfaire
    for r in sorted(X[c]):                      # si X[c] est vide, la boucle ne fait rien : impasse
        solution.append(r)
        retirees = choisir(X, Y, r)
        resultat = algorithme_x(X, Y, solution)
        rendre(X, Y, r, retirees)               # on défait exactement ce qu'on a fait
        solution.pop()
        if resultat:
            return resultat
    return None

def sudoku(grille):
    Y = {}                                      # option (l, c, n) -> ses 4 contraintes
    for l in range(9):
        for c in range(9):
            b = 3 * (l // 3) + c // 3
            for n in range(1, 10):
                Y[(l, c, n)] = [("case", l, c), ("ligne", l, n), ("colonne", c, n), ("bloc", b, n)]
    X = {}                                      # contrainte -> ensemble des options qui la satisfont
    for r in Y:
        for j in Y[r]:
            if j not in X:
                X[j] = set()
            X[j].add(r)
    for l in range(9):                          # les chiffres donnés sont des options imposées
        for c in range(9):
            if grille[l][c]:
                choisir(X, Y, (l, c, grille[l][c]))
    for (l, c, n) in algorithme_x(X, Y, []):
        grille[l][c] = n
    return grille

texte = """53..7....
           6..195...
           .98....6.
           8...6...3
           4..8.3..1
           7...2...6
           .6....28.
           ...419..5
           ....8..79"""
grille = [[0 if ch == "." else int(ch) for ch in ligne] for ligne in texte.split()]
for ligne in sudoku(grille):
    print(" ".join(str(n) for n in ligne))
{{< /runpython >}}

Rien dans `algorithme_x`, `choisir` et `rendre` ne parle de Sudoku&nbsp;: seule la fonction `sudoku` traduit la grille en contraintes et en options. Le même moteur pave un échiquier de pentominos ou place huit reines, pourvu qu'on lui décrive le problème dans sa langue.

Avec des dictionnaires, chaque retrait et chaque remise a un coût. Tout l'art de l'algorithme X tient pourtant dans la façon de revenir en arrière à moindre coût, et Donald Knuth l'a résolu en 2000 par une structure de données d'une élégance rare, les **liens dansants** (*dancing links*)&nbsp;: dans une liste doublement chaînée, retirer un élément $x$ se fait en deux affectations, `x.gauche.droite = x.droite` et `x.droite.gauche = x.gauche`. Or $x$ garde, lui, la mémoire de ses voisins&nbsp;: pour le remettre en place au moment de revenir en arrière, il suffit de deux autres affectations, `x.gauche.droite = x` et `x.droite.gauche = x`. Les éléments «&nbsp;dansent&nbsp;» hors de la liste puis y reviennent.


## Jouer contre quelqu'un

Dans un jeu à deux joueurs, l'arbre des possibles change de nature&nbsp;: on ne choisit plus qu'à un embranchement sur deux, l'adversaire choisit aux autres, et il ne choisira pas ce qui nous arrange. On s'intéresse ici aux jeux où les deux joueurs jouent **chacun à leur tour**, **sans hasard** et **en voyant tout** (information complète)&nbsp;: le morpion, les dames, les échecs ou le go, mais pas le poker, le backgammon ou le pierre-feuille-ciseaux.

### Positions gagnantes, positions perdantes

Un tas d'allumettes&nbsp;; chacun à son tour en retire une, deux ou trois, et celui qui prend la dernière gagne. Qui doit gagner, selon le nombre d'allumettes&nbsp;? On le décide de proche en proche, en partant de la fin, à partir de deux règles&nbsp;:

- une position est **perdante** pour le joueur qui doit jouer si **tous** ses coups mènent à une position gagnante pour l'adversaire. C'est le cas, en particulier, s'il ne peut plus jouer du tout&nbsp;: devant un tas vide, il a perdu, puisque l'autre vient de prendre la dernière allumette&nbsp;;
- une position est **gagnante** si **au moins un** coup mène à une position perdante pour l'adversaire.

Devant $1$, $2$ ou $3$ allumettes, on prend tout et l'on gagne. Devant $4$, chaque coup laisse $3$, $2$ ou $1$ allumette à l'adversaire, qui gagne&nbsp;: $4$ est perdante. Devant $5$, $6$ ou $7$, on gagne en laissant $4$ à l'adversaire. Et ainsi de suite&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
memo = {}

def gagnante(n):
    """Le joueur qui doit jouer devant n allumettes peut-il forcer la victoire ?"""
    if n not in memo:
        # gagnante s'il existe un coup qui laisse une position perdante à l'adversaire
        memo[n] = any(not gagnante(n - k) for k in (1, 2, 3) if k <= n)
    return memo[n]

print("positions perdantes :", [n for n in range(40) if not gagnante(n)])
{{< /runpython >}}

Les positions perdantes sont les multiples de $4$. La stratégie gagnante s'en déduit&nbsp;: laisser toujours un multiple de $4$ à l'adversaire. Celui qui commence devant un multiple de $4$ a perdu d'avance, si l'autre ne se trompe pas. La définition est récursive, et le dictionnaire `memo` évite de recalculer une position déjà rencontrée&nbsp;: c'est de la [programmation dynamique](../gloutons-dynamique/#quand-les-sous-problèmes-se-répètent-la-programmation-dynamique).

<div class="encadre bref">
<div class="encadre-titre">À Fort Boyard</div>

Dans le jeu des bâtonnets de *Fort Boyard*, on part de $20$ bâtonnets, on en retire de $1$ à $3$, et c'est celui qui prend le dernier qui **perd**. Quelles sont alors les positions perdantes, et faut-il commencer&nbsp;? Il suffit de changer une ligne du programme&nbsp;: devant un tas vide, c'est maintenant celui qui doit jouer qui a gagné.

</div>

### Le jeu de Nim

Le jeu de Nim se joue avec plusieurs rangées d'allumettes. Chacun à son tour en retire autant qu'il veut, au moins une, mais dans une seule rangée. Celui qui prend la dernière gagne. La disposition $1$, $3$, $5$, $7$ est celle du film *L'Année dernière à Marienbad* (Alain Resnais, 1961), où un personnage gagne partie après partie.

<div class="anim" data-anim="nim"></div>
{{< script "js/nim.js" >}}

Les positions sont trop nombreuses pour les tabuler de tête. En 1901, le mathématicien américain Charles Bouton trouve la règle&nbsp;: on écrit le nombre d'allumettes de chaque rangée en binaire, et l'on additionne **sans retenue**, colonne par colonne&nbsp;: $1 + 1 = 0$. C'est le **ou exclusif** (*xor*), noté `^` en Python. Le résultat s'appelle la **somme de Nim**, et une position est perdante exactement quand elle est nulle, c'est-à-dire quand chaque colonne contient un nombre pair de $1$. Les deux règles des positions gagnantes et perdantes suffisent à le démontrer&nbsp;:

- depuis une somme nulle, tout coup change le nombre d'une seule rangée, donc au moins un de ses chiffres binaires&nbsp;: la colonne correspondante devient impaire, et la somme n'est plus nulle&nbsp;;
- depuis une somme $s$ non nulle, on regarde le $1$ le plus à gauche de $s$ et une rangée $r$ qui a un $1$ dans cette colonne. En inversant dans $r$ les chiffres situés sous les $1$ de $s$, on obtient un nombre $r \oplus s$ plus petit que $r$, puisque son chiffre le plus à gauche qui change passe de $1$ à $0$. Ramener la rangée à $r \oplus s$ allumettes est donc un coup permis, et il rend toutes les colonnes paires&nbsp;;
- la position finale, sans aucune allumette, a une somme nulle&nbsp;: le joueur qui doit jouer y a perdu.

Les positions de somme nulle se comportent donc exactement comme les positions perdantes&nbsp;: on ne peut que les quitter, on peut toujours y revenir, et la partie s'y termine. C'est ce que fait la machine&nbsp;; quand c'est elle qui est en position perdante, elle joue un petit coup en attendant une erreur.

{{< youtube-plus id="2jahbr5wMHk" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Rien n'empêche de vérifier la règle de Bouton par la force, en explorant toutes les parties possibles avec les deux règles du jeu de bâtonnets&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
memo = {}

def gagnante(tas):
    tas = tuple(sorted(tas))        # l'ordre des rangées n'importe pas
    if tas not in memo:
        coups = [tas[:i] + (t - k,) + tas[i + 1:] for i, t in enumerate(tas) for k in range(1, t + 1)]
        memo[tas] = any(not gagnante(c) for c in coups)
    return memo[tas]

ecarts = 0
for a in range(10):
    for b in range(10):
        for c in range(10):
            if gagnante((a, b, c)) != (a ^ b ^ c != 0):
                ecarts += 1
print(len(memo), "positions examinées,", ecarts, "écart avec la règle de Bouton")
print("perdante (1, 3, 5, 7) ?", not gagnante((1, 3, 5, 7)), "  somme de Nim :", 1 ^ 3 ^ 5 ^ 7)
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">Tous les jeux sont des jeux de Nim</div>

Un jeu est dit **impartial** quand les coups permis ne dépendent que de la position, et pas du joueur qui doit jouer&nbsp;: c'est le cas du jeu de bâtonnets et de Nim, pas des échecs, où chacun ne déplace que ses pièces. Dans les années 1930, Roland Sprague et Patrick Grundy démontrent, chacun de leur côté, que **toute** position d'un jeu impartial se comporte comme une rangée de Nim d'une certaine taille. Pour jouer à plusieurs jeux impartiaux à la fois, où l'on choisit à chaque tour dans lequel jouer, il suffit alors de faire la somme de Nim de ces tailles.

</div>

### Jeux sur un graphe&nbsp;: l'attracteur

Dans l'arbre d'une partie, une même position peut apparaître à de nombreux endroits, atteinte par des suites de coups différentes. Plutôt que l'arbre, on dessine alors le **graphe du jeu**, appelé **arène**&nbsp;: un sommet par position, un arc par coup permis. Une position comprend aussi le joueur qui doit jouer, si bien que les sommets se répartissent en ceux d'Eve, qui commence, et ceux d'Adam, et que chaque arc va d'un sommet de l'un à un sommet de l'autre&nbsp;: le graphe est **biparti**. On se donne enfin l'ensemble $F$ des positions où Eve a gagné. C'est un **jeu d'accessibilité**&nbsp;: Eve veut amener la partie dans $F$, Adam veut l'en empêcher.

Prenons une variante du jeu de bâtonnets&nbsp;: un tas de $n$ allumettes, et chaque joueur peut prendre au plus le double de ce que l'adversaire vient de prendre. Au premier coup, Eve peut tout prendre sauf la totalité. Une position est un couple (allumettes restantes, maximum que l'on peut prendre), avec le joueur au trait, et Eve a gagné si la partie arrive en $(0, 0)$ avec Adam au trait.

L'ensemble des positions gagnantes pour Eve se construit de proche en proche, avec les deux mêmes règles qu'au jeu de bâtonnets. On part de $F$, puis on ajoute à chaque étape&nbsp;:

- les sommets d'Eve dont **un** successeur est déjà gagnant&nbsp;: Eve n'a qu'à jouer ce coup&nbsp;;
- les sommets d'Adam dont **tous** les successeurs sont déjà gagnants&nbsp;: Adam ne peut pas l'éviter.

En notant $S_E$ et $S_A$ les sommets d'Eve et d'Adam et $\text{Succ}(s)$ les successeurs d'un sommet $s$, cela s'écrit

$$ \begin{array}{lll} \text{Attr}_0(F) &= &F \\\\  \text{Attr}\_{i+1}(F) &= &\text{Attr}\_{i}(F) \\\\ &&\cup \\{s \in S_E \mid \text{Succ}(s)\cap \text{Attr}_i(F) \neq \varnothing \\} \\\\ &&\cup \\{s\in S_A \mid \text{Succ}(s)\subseteq \text{Attr}_i(F)\\} \end{array} $$

La suite d'ensembles est croissante et ne peut pas dépasser l'ensemble des sommets&nbsp;: si le graphe est fini, elle finit par ne plus bouger. Sa limite est l'**attracteur** de $F$ pour Eve, noté $\text{Attr}(F)$&nbsp;: c'est l'ensemble des positions d'où Eve est sûre de gagner.

<div class="anim" data-anim="attracteur"></div>
{{< script "js/attracteur.js" >}}

Si le départ est dans l'attracteur, Eve a une **stratégie gagnante**, et même une stratégie **sans mémoire**&nbsp;: une règle qui, à chacun de ses sommets $s$, associe un coup $\sigma(s)$, sans se soucier du chemin qui y a mené. Il suffit de choisir pour $\sigma(s)$ un successeur dans l'attracteur, en prenant soin de le choisir parmi ceux ajoutés à une étape antérieure, pour se rapprocher de $F$ à chaque coup. Adam, lui, ne peut jamais en sortir. Et hors de l'attracteur, la situation est symétrique&nbsp;: c'est un **piège** pour Eve, Adam peut l'y maintenir indéfiniment.

Dans cette variante, Eve perd pour $n = 2, 3, 5, 8, 13$&nbsp;: on reconnaît la suite de Fibonacci, d'où son nom de **Nim de Fibonacci**. Le programme ci-dessous calcule l'attracteur et le confirme bien au-delà. Pour éviter de réexaminer sans cesse les mêmes sommets, il part de $F$ et remonte les arcs à l'envers&nbsp;; pour chaque sommet d'Adam, un compteur retient le nombre de ses successeurs pas encore dans l'attracteur, et ce sommet y entre quand le compteur tombe à zéro. Chaque arc n'est ainsi parcouru qu'une fois, et le calcul prend un temps proportionnel à la taille du graphe, comme un [parcours](../graphes/#parcourir-un-graphe).

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def jeu(n):
    """Graphe du Nim de Fibonacci. Sommet : (allumettes, maximum prenable, joueur), 0 pour Eve, 1 pour Adam."""
    G = {}
    a_voir = [(n, n - 1, 0)]            # Eve commence, sans pouvoir tout prendre
    while a_voir:
        s = a_voir.pop()
        if s not in G:
            a, m, j = s
            G[s] = [(a - k, min(2 * k, a - k), 1 - j) for k in range(1, min(m, a) + 1)]
            a_voir.extend(G[s])
    return G

def inverse(G):
    pred = {s: [] for s in G}
    for s in G:
        for t in G[s]:
            pred[t].append(s)
    return pred

def attracteur(G, F):
    pred = inverse(G)
    reste = {s: len(G[s]) for s in G}   # successeurs pas encore dans l'attracteur
    attr = set()

    def ajouter(s):
        if s in attr:
            return
        attr.add(s)
        for p in pred[s]:
            reste[p] -= 1
            if p[2] == 0 or reste[p] == 0:  # Eve : un coup suffit ; Adam : il les faut tous
                ajouter(p)

    for s in F:
        if s in G:                      # F peut contenir des positions inatteignables
            ajouter(s)
    return attr

perdu = [n for n in range(2, 90) if (n, n - 1, 0) not in attracteur(jeu(n), [(0, 0, 1)])]
print("Eve perd pour n =", perdu)
{{< /runpython >}}

Quand Eve gagne, une règle simple donne son coup&nbsp;: tout entier s'écrit d'une seule façon comme somme de nombres de Fibonacci non consécutifs (théorème de Zeckendorf, par exemple $12 = 8 + 3 + 1$), et il suffit de prendre le plus petit terme de cette somme, ici $1$.

<div class="encadre prune">
<div class="encadre-titre">Gagner sans savoir comment</div>

Au **Chomp**, deux joueurs mangent tour à tour une tablette de chocolat rectangulaire dont le carré en bas à gauche est empoisonné. Chacun choisit un carré et le mange, avec tous ceux situés au-dessus et à sa droite&nbsp;; celui qui doit manger le carré empoisonné a perdu.

Un théorème d'Ernst Zermelo (1913) assure que, dans un jeu fini à deux joueurs, sans hasard, à information complète et sans match nul, l'un des deux joueurs a une stratégie gagnante. Au Chomp, c'est toujours le premier, et l'argument est un **vol de stratégie**. Supposons que le second joueur ait une stratégie gagnante. Le premier mange seulement le carré en haut à droite&nbsp;; le second répond par le coup que lui dicte sa stratégie. Mais ce coup emporte de toute façon le carré en haut à droite&nbsp;: le premier joueur aurait pu le jouer d'emblée, et appliquer ensuite la stratégie gagnante à la place du second. Les deux joueurs auraient alors une stratégie gagnante, ce qui est absurde.

On sait donc que le premier joueur gagne au Chomp, sans savoir en général quel premier coup jouer&nbsp;: pour le trouver, il faut calculer l'attracteur, et le graphe grossit vite avec la tablette.

</div>

### Minimax

Le graphe du morpion compte $5\\,478$ positions, ce qui permet de calculer l'attracteur. Celui des échecs en compte de l'ordre de $10^{44}$&nbsp;: aucun ordinateur ne le construira jamais. On revient alors à l'arbre de la partie, explorée à partir de la position actuelle.

Plutôt que «&nbsp;gagnante&nbsp;» ou «&nbsp;perdante&nbsp;», on attribue à chaque position une **valeur** du point de vue d'un joueur, disons les croix&nbsp;: $+1$ si elles gagnent, $-1$ si elles perdent, $0$ pour un match nul. Aux feuilles, la partie est finie et la valeur se lit sur la grille. Aux autres nœuds, on la déduit de celles des enfants&nbsp;: quand c'est aux croix de jouer, elles choisissent le coup de plus grande valeur, la valeur du nœud est donc le **maximum** de celles de ses enfants&nbsp;; quand c'est aux ronds, ils choisissent le coup le pire pour les croix, la valeur du nœud est le **minimum**. C'est le principe du **minimax**, posé par John von Neumann en 1928. Les deux règles des positions gagnantes et perdantes en sont le cas particulier où les valeurs ne peuvent être que $+1$ ou $-1$&nbsp;: un maximum vaut $+1$ si l'un des enfants vaut $+1$, un minimum vaut $+1$ si tous les enfants valent $+1$.

<div class="anim" data-anim="minimax-arbre"></div>

En appliquant le minimax à la grille vide, on trouve une valeur nulle&nbsp;: le morpion est un jeu nul, et deux joueurs parfaits font toujours match nul. Contre la machine ci-dessous, qui explore tout, on ne peut donc espérer mieux.

<div class="anim" data-anim="morpion"></div>
{{< script "js/morpion.js" >}}

Pour choisir son premier coup, la machine examine plus d'un demi-million de positions, alors que le graphe n'en compte que $5\\,478$&nbsp;: l'arbre répète les mêmes positions, atteintes par des suites de coups différentes. Deux remèdes, déjà rencontrés&nbsp;:

- **mémoriser** la valeur de chaque position déjà évaluée, comme en programmation dynamique&nbsp;;
- **élaguer**. Supposons que les croix aient déjà trouvé un coup qui leur garantit la valeur $\alpha$. En examinant un autre coup, elles découvrent une riposte des ronds qui donne moins que $\alpha$&nbsp;: inutile d'examiner les autres ripostes, ce coup est de toute façon moins bon que le premier. C'est l'**élagage alpha-bêta**, la version adverse de la séparation et de l'évaluation. Il ne change pas la valeur calculée, seulement le nombre de positions examinées.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
LIGNES = [(0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)]

def gagnant(g):
    for i, j, k in LIGNES:
        if g[i] != "." and g[i] == g[j] == g[k]:
            return g[i]
    return None

def coups(g, joueur):
    return [g[:i] + joueur + g[i + 1:] for i in range(9) if g[i] == "."]

def minimax(g, joueur):
    """Valeur de la grille g pour les croix (+1, 0 ou -1), joueur étant au trait."""
    global positions
    positions += 1
    v = gagnant(g)
    if v:
        return 1 if v == "X" else -1
    if "." not in g:
        return 0
    autre = "O" if joueur == "X" else "X"
    valeurs = [minimax(c, autre) for c in coups(g, joueur)]
    return max(valeurs) if joueur == "X" else min(valeurs)

memo = {}
def minimax_memo(g, joueur):
    if g not in memo:
        v = gagnant(g)
        if v:
            memo[g] = 1 if v == "X" else -1
        elif "." not in g:
            memo[g] = 0
        else:
            autre = "O" if joueur == "X" else "X"
            valeurs = [minimax_memo(c, autre) for c in coups(g, joueur)]
            memo[g] = max(valeurs) if joueur == "X" else min(valeurs)
    return memo[g]

def alpha_beta(g, joueur, alpha=-2, beta=2):
    """Même valeur que minimax, sans explorer les coups dont on sait déjà qu'ils ne seront pas choisis."""
    global positions
    positions += 1
    v = gagnant(g)
    if v:
        return 1 if v == "X" else -1
    if "." not in g:
        return 0
    if joueur == "X":
        for c in coups(g, "X"):
            alpha = max(alpha, alpha_beta(c, "O", alpha, beta))
            if alpha >= beta:       # les ronds ne laisseront jamais les croix arriver ici
                break
        return alpha
    for c in coups(g, "O"):
        beta = min(beta, alpha_beta(c, "X", alpha, beta))
        if alpha >= beta:           # les croix ne laisseront jamais les ronds arriver ici
            break
    return beta

positions = 0
print("minimax :           valeur", minimax("." * 9, "X"), "-", positions, "positions examinées")
print("avec mémoire :      valeur", minimax_memo("." * 9, "X"), "-", len(memo), "positions différentes")
positions = 0
print("alpha-bêta :        valeur", alpha_beta("." * 9, "X"), "-", positions, "positions examinées")
{{< /runpython >}}

Aux échecs, même l'élagage ne suffit pas&nbsp;: avec une trentaine de coups possibles à chaque tour et des parties de plusieurs dizaines de coups, l'arbre compte de l'ordre de $10^{120}$ feuilles (c'est le nombre de Shannon). On arrête donc l'exploration à une profondeur fixée, quelques coups à l'avance, et l'on remplace la valeur exacte des positions atteintes par une estimation, une **heuristique**&nbsp;: pour les échecs, un compte pondéré du matériel restant, corrigé par la sécurité du roi, le contrôle du centre ou la structure des pions. Au morpion, on peut compter les alignements encore possibles pour chacun&nbsp;: c'est ce que fait la machine dans ses deux derniers réglages. Avec un seul coup d'avance, elle ne voit pas venir les menaces&nbsp;; avec deux, elle devient difficile à battre en examinant des milliers de fois moins de positions que l'exploration complète.

Deep Blue, qui bat le champion du monde Garry Kasparov en 1997, examinait 200 millions de positions par seconde avec alpha-bêta, à une profondeur typique de 6 à 16 coups, et parfois bien plus dans les situations tactiques. Au go, l'arbre est encore incomparablement plus touffu et les positions plus difficiles à évaluer&nbsp;: il faut attendre AlphaGo, en 2016, pour qu'une machine batte un des meilleurs joueurs du monde, Lee Sedol. Son évaluation des positions et le choix des coups à explorer ne sont plus écrits à la main, mais appris par des réseaux de neurones, entraînés sur des parties humaines puis sur des millions de parties jouées contre lui-même.

## Jouer longtemps&nbsp;: le dilemme du prisonnier répété

Deux complices sont interrogés séparément. Chacun peut se taire, c'est-à-dire coopérer avec l'autre, ou le dénoncer, c'est-à-dire trahir. On compte les gains en points&nbsp;: $3$ chacun s'ils coopèrent tous les deux, $1$ chacun s'ils se trahissent mutuellement, et quand l'un trahit un complice qui coopère, $5$ pour le traître et $0$ pour sa victime.

Quoi que fasse l'autre, trahir rapporte plus&nbsp;: $5$ au lieu de $3$ s'il coopère, $1$ au lieu de $0$ s'il trahit. Deux joueurs qui raisonnent ainsi trahissent tous les deux et gagnent $1$ chacun, alors qu'en coopérant ils auraient gagné $3$&nbsp;: c'est le **dilemme du prisonnier**, formalisé en 1950. Les jeux précédents étaient à somme nulle, ce que l'un gagne l'autre le perd&nbsp;; celui-ci ne l'est pas, et la coopération y profite aux deux.

Tout change si l'on joue de nombreuses fois de suite contre le même adversaire&nbsp;: trahir aujourd'hui peut coûter cher demain. En 1980, le politologue Robert Axelrod invite des spécialistes de la théorie des jeux à lui envoyer des programmes, et fait jouer chacun contre tous les autres, et contre lui-même, en matchs de $200$ tours. Le vainqueur est le plus court de tous, envoyé par le mathématicien et psychologue Anatol Rapoport&nbsp;: **donnant-donnant** (*tit for tat*), qui coopère au premier tour puis rejoue le dernier coup de l'adversaire. Un second tournoi, avec $62$ participants qui connaissaient le résultat du premier, donne le même vainqueur.

<div class="anim" data-anim="axelrod"></div>
{{< script "js/axelrod.js" >}}

Donnant-donnant ne gagne jamais un match&nbsp;: au mieux, il fait jeu égal. Il gagne le tournoi parce qu'il obtient beaucoup de tous ses adversaires. Axelrod résume ses qualités en quatre mots&nbsp;: il est **bienveillant**, puisqu'il ne trahit jamais le premier, **réactif**, puisqu'il punit aussitôt une trahison, **indulgent**, puisqu'il recommence à coopérer dès que l'autre le fait, et **lisible**, puisque l'adversaire comprend vite qu'il vaut mieux coopérer avec lui. La simulation de l'évolution, où chaque stratégie se reproduit à proportion de ses gains, raconte une autre histoire. Dans une population de naïfs, les traîtres prospèrent d'abord&nbsp;; mais en éliminant leurs proies, ils scient la branche sur laquelle ils sont assis, et ce sont les stratégies qui coopèrent sans se laisser exploiter, comme donnant-donnant, qui finissent par l'emporter. La coopération peut s'installer dans une population sans que personne ne l'impose.

{{< youtube-plus id="mScpHTIi-kM" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import random

# une stratégie reçoit ses coups et ceux de l'adversaire, et renvoie "C" (coopérer) ou "T" (trahir)
def donnant_donnant(moi, lui):
    return lui[-1] if lui else "C"

def gentil(moi, lui):
    return "C"

def mechant(moi, lui):
    return "T"

def rancunier(moi, lui):
    return "T" if "T" in lui else "C"

def hasard(moi, lui):
    return "C" if random() < 0.5 else "T"

GAINS = {("C", "C"): (3, 3), ("C", "T"): (0, 5), ("T", "C"): (5, 0), ("T", "T"): (1, 1)}

def match(s1, s2, tours=200):
    c1, c2, g1, g2 = [], [], 0, 0
    for _ in range(tours):
        a, b = s1(c1, c2), s2(c2, c1)
        c1.append(a)
        c2.append(b)
        g1 += GAINS[(a, b)][0]
        g2 += GAINS[(a, b)][1]
    return g1, g2

strategies = [donnant_donnant, gentil, mechant, rancunier, hasard]
scores = {s.__name__: 0 for s in strategies}
for s1 in strategies:
    for s2 in strategies:               # chacun contre tous, lui-même compris
        scores[s1.__name__] += match(s1, s2)[0]
for nom in sorted(scores, key=scores.get, reverse=True):
    print(f"{nom:16} {scores[nom]:6}")
{{< /runpython >}}
