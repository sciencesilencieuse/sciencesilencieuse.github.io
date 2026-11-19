+++
title = "Prouver un algorithme"
date = 2026-11-19T15:00:00+01:00
weight = 9
chapter = false
css = "algo.css"
+++

# Prouver un algorithme

Un programme qui a passé mille tests peut encore échouer au mille et unième. «&nbsp;Tester un programme peut montrer la présence de bugs, jamais leur absence&nbsp;», écrit Edsger Dijkstra en 1970. Pour être sûr, il faut raisonner sur le code lui-même et démontrer deux choses&nbsp;: qu'il s'arrête toujours, c'est la **terminaison**, et que ce qu'il renvoie est bien ce qu'on attendait, c'est la **correction**. Une troisième question, savoir s'il s'arrête assez vite, est celle de la [complexité](../complexite/).

## Dire ce qu'on attend

Avant de prouver qu'un programme est juste, il faut dire ce que «&nbsp;juste&nbsp;» veut dire. On écrit pour cela sa **spécification**&nbsp;:

- les **préconditions**, ce que l'on suppose des entrées&nbsp;;
- les **postconditions**, ce que l'on garantit en sortie.

Pour la division euclidienne de $a$ par $b$, la précondition est que $a$ et $b$ sont des entiers avec $a \geqslant 0$ et $b > 0$, et la postcondition que les valeurs renvoyées $q$ et $r$ vérifient $a = bq + r$ et $0 \leqslant r < b$. Sans la précondition $b > 0$, il n'y aurait rien à garantir&nbsp;: la spécification est un contrat, et l'algorithme n'est tenu à rien quand l'appelant ne respecte pas sa part.

<div class="encadre bleu">
<div class="encadre-titre">Correction partielle, correction totale</div>

Un algorithme est **partiellement correct** si, pour toute entrée qui vérifie les préconditions, **s'il s'arrête**, sa sortie vérifie les postconditions. Il est **totalement correct** si, de plus, il s'arrête toujours. La distinction n'est pas un détail&nbsp;: une boucle infinie est partiellement correcte, puisqu'elle ne renvoie jamais rien de faux.

</div>

## S'arrêter

### Le variant de boucle

Une boucle `for` parcourt un nombre de tours fixé d'avance. Le danger vient des boucles `while` et des fonctions récursives, qui peuvent tourner sans fin. Pour prouver qu'une boucle `while` s'arrête, on exhibe un **variant**&nbsp;: une quantité entière, positive tant que la boucle tourne, et qui diminue **strictement** à chaque tour. Une suite d'entiers positifs strictement décroissante ne peut pas être infinie&nbsp;: depuis $10$, il y a au plus $10$ marches à descendre avant d'atteindre $0$. La boucle fait donc un nombre fini de tours.

Dans l'algorithme d'Euclide, le variant est `b`&nbsp;:

```python
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```

À chaque tour, `b` est remplacé par le reste de la division de `a` par `b`, qui est un entier compris entre $0$ et $b - 1$&nbsp;: il est positif et strictement plus petit. Dans la multiplication égyptienne ou l'exponentiation rapide, le variant est le nombre que l'on divise par $2$ à chaque tour. Le choix du variant n'est pas toujours aussi évident, mais l'idée est toujours la même&nbsp;: trouver ce qui s'use.

### Les fonctions récursives

Pour une fonction récursive, le raisonnement est le même&nbsp;: il faut qu'une quantité entière positive diminue strictement d'un appel à l'appel suivant, et que les cas de base arrêtent la descente. C'est le plus souvent l'argument lui-même, comme `n` dans `factorielle(n)`, qui appelle `factorielle(n - 1)`.

Ce n'est pas toujours aussi visible. La fonction 91 de John McCarthy appelle $M(n + 11)$, avec un argument **plus grand**, puis s'applique au résultat&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
appels = 0

def M(n):
    global appels
    appels += 1
    if n > 100:
        return n - 10
    return M(M(n + 11))

for n in [1, 50, 90, 100, 101, 150]:
    appels = 0
    print(f"M({n}) = {M(n)}, en {appels} appel" + ("s" if appels > 1 else ""))
{{< /runpython >}}

Elle s'arrête pourtant toujours, et renvoie $91$ pour tout $n \leqslant 100$. On le démontre par récurrence sur $101 - n$, la distance qui sépare $n$ du cas de base. Pour $90 \leqslant n \leqslant 100$, $n + 11$ dépasse $100$, donc $M(n + 11) = n + 1$ et $M(n) = M(n + 1)$&nbsp;: de proche en proche, $M(n) = M(101) = 91$. Pour $n < 90$, l'appel intérieur $M(n + 11)$ porte sur un entier plus proche de $101$&nbsp;; par hypothèse de récurrence, il s'arrête et vaut $91$, et $M(n) = M(91) = 91$. Ce n'est pas l'argument qui diminue d'un appel à l'autre, mais la distance $101 - n$ dans la preuve.

### La suite de Syracuse

On part d'un entier $n$&nbsp;: s'il est pair, on le divise par $2$, sinon on le remplace par $3n + 1$, et l'on recommence jusqu'à tomber sur $1$.

```python
def vol(n):
    etapes = 0
    while n != 1:
        n = n // 2 if n % 2 == 0 else 3 * n + 1
        etapes += 1
    return etapes
```

Cette boucle s'arrête-t-elle pour tout $n$&nbsp;? Personne ne le sait. La conjecture, énoncée par Lothar Collatz dans les années 1930, a été vérifiée par ordinateur pour tous les entiers jusqu'à $2^{68}$, soit près de $3 \times 10^{20}$. En 2019, Terence Tao a montré qu'elle est vraie «&nbsp;presque&nbsp;» pour tous les entiers, en un sens précis. Mais aucun variant n'est connu&nbsp;: la suite monte et descend de façon imprévisible, et Paul Erdős disait que les mathématiques ne sont peut-être pas encore prêtes pour de tels problèmes.

<div class="anim" data-anim="syracuse"></div>
{{< script "js/syracuse.js" >}}

### Le problème de l'arrêt

Faute de savoir le faire à la main, pourrait-on écrire un programme qui décide, pour n'importe quel programme et n'importe quelle entrée, s'il s'arrête&nbsp;? En 1936, Alan Turing démontre que c'est impossible. Supposons qu'une telle fonction `termine(programme, entree)` existe, et écrivons&nbsp;:

```python
def paradoxe(programme):
    if termine(programme, programme):
        while True:         # boucle sans fin
            pass
    else:
        return
```

Que fait `paradoxe(paradoxe)`&nbsp;? Si elle s'arrête, c'est que `termine(paradoxe, paradoxe)` a répondu non, donc qu'elle ne s'arrête pas. Si elle ne s'arrête pas, c'est que `termine` a répondu oui, donc qu'elle s'arrête. Les deux cas sont contradictoires&nbsp;: la fonction `termine` ne peut pas exister. C'est le même mécanisme que dans le [théorème d'incomplétude de Gödel](/logique/godel/). Il n'existera donc jamais d'outil universel pour prouver la terminaison. Il reste à la prouver programme par programme, comme on vient de le faire.

## Calculer juste

### L'invariant de boucle

Pour prouver qu'une boucle calcule ce qu'on attend, on cherche une propriété qui reste vraie d'un tour à l'autre, un **invariant**. La preuve suit le schéma d'une récurrence&nbsp;:

- **initialisation**&nbsp;: l'invariant est vrai avant le premier tour&nbsp;;
- **conservation**&nbsp;: s'il est vrai au début d'un tour, il l'est encore à la fin&nbsp;;
- **sortie**&nbsp;: quand la boucle s'arrête, l'invariant est vrai **et** la condition de la boucle est fausse. Ces deux faits réunis doivent donner la postcondition.

L'animation suit quatre boucles tour par tour, avec leur variant, qui diminue jusqu'à la sortie, et leur invariant, qui ne bouge pas.

<div class="anim" data-anim="invariant"></div>
{{< script "js/invariant.js" >}}

Pour l'algorithme d'Euclide, l'invariant est $\mathrm{pgcd}(a, b)$. Si $a = bq + r$, tout diviseur commun de $a$ et $b$ divise $r = a - bq$, et tout diviseur commun de $b$ et $r$ divise $a = bq + r$&nbsp;: les couples $(a, b)$ et $(b, r)$ ont les mêmes diviseurs communs, donc le même pgcd. Le tour de boucle conserve l'invariant. En sortie, $b = 0$, et $\mathrm{pgcd}(a, 0) = a$&nbsp;: la valeur renvoyée est bien le pgcd des entrées.

Pour la multiplication égyptienne, l'invariant est $a \times b + p$. Si $a$ est pair, on remplace $a$ par $\frac{a}{2}$ et $b$ par $2b$, ce qui ne change pas leur produit. Si $a$ est impair, on remplace $a$ par $\frac{a - 1}{2}$, $b$ par $2b$ et $p$ par $p + b$, et $\frac{a-1}{2} \times 2b + p + b = ab + p$. En sortie, $a = 0$, et $p$ vaut le produit cherché.

Trouver l'invariant est la partie créative de la preuve. Il dit ce que la boucle a déjà accompli&nbsp;: «&nbsp;le pgcd n'a pas changé&nbsp;», «&nbsp;ce qui reste à ajouter vaut $a \times b$&nbsp;».

### La dichotomie, enfin juste

La [recherche dichotomique](../rechercher/#une-boucle-plus-délicate-quil-ny-paraît) est l'exemple type d'une boucle facile à imaginer et difficile à écrire juste. Avec un invariant, la version correcte s'écrit sans hésiter&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def dichotomie(L, x):
    """Précondition : L est triée. Postcondition : renvoie True si et seulement si x est dans L."""
    g, d = 0, len(L) - 1
    while g <= d:
        # invariant : si x est dans L, il est dans la zone L[g], ..., L[d]
        # variant : d - g + 1, le nombre de cases de la zone
        m = (g + d) // 2
        if L[m] == x:
            return True
        elif L[m] < x:
            g = m + 1       # L est triée : L[g], ..., L[m] sont tous plus petits que x
        else:
            d = m - 1       # et ici, L[m], ..., L[d] sont tous plus grands
    return False

from random import randint
for essai in range(10000):
    L = sorted(randint(1, 10) for _ in range(randint(0, 8)))
    x = randint(0, 11)
    assert dichotomie(L, x) == (x in L), (L, x)
print("10 000 tests réussis")
{{< /runpython >}}

- **Initialisation**&nbsp;: la zone est la liste entière, l'invariant est vrai.
- **Conservation**&nbsp;: si `L[m] < x`, comme `L` est triée, toutes les cases de `g` à `m` sont plus petites que `x`&nbsp;; si `x` est dans la zone, il est donc entre `m + 1` et `d`. Le cas `L[m] > x` est symétrique. La zone rétrécit d'au moins une case&nbsp;: le variant diminue strictement.
- **Sortie**&nbsp;: si l'on sort par `return True`, on a trouvé `x`. Sinon, la condition `g <= d` est fausse, la zone est vide, et l'invariant dit que `x` n'est pas dans `L`.

La preuve désigne exactement l'erreur de la version fausse. Avec `while g < d`, on sort quand `g` vaut `d`&nbsp;: la zone contient encore une case, jamais examinée, et l'invariant ne permet plus de conclure.

### Écrire l'invariant d'abord&nbsp;: le drapeau hollandais

Un invariant ne sert pas qu'à vérifier un programme après coup&nbsp;: on peut l'écrire **avant** le code, et laisser le code en découler. Dijkstra en donne un exemple célèbre&nbsp;: ranger en un seul passage, par échanges, des boules rouges, blanches et bleues, comme les bandes du drapeau néerlandais.

On commence par décrire une situation intermédiaire, avec trois indices `r`, `i` et `w`&nbsp;: les cases avant `r` sont rouges, celles de `r` à `i` (exclu) blanches, celles de `i` à `w` (exclu) pas encore examinées, celles à partir de `w` bleues. Au départ, `r = i = 0` et `w = n`&nbsp;: tout est à examiner. À la fin, la zone à examiner doit être vide. Reste à écrire un tour de boucle qui examine la boule en `i` et rétablit l'invariant&nbsp;; il n'y a que trois cas, et chacun se déduit du dessin.

<div class="anim" data-anim="drapeau"></div>
{{< script "js/drapeau.js" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def drapeau(t):
    r, i, w = 0, 0, len(t)
    # invariant : t[:r] rouges, t[r:i] blanches, t[i:w] à examiner, t[w:] bleues
    while i < w:                            # variant : w - i
        if t[i] == "R":
            t[r], t[i] = t[i], t[r]
            r += 1
            i += 1
        elif t[i] == "W":
            i += 1
        else:
            w -= 1
            t[i], t[w] = t[w], t[i]
    return t

print("".join(drapeau(list("BWRRWBRBWWRBRW"))))
{{< /runpython >}}

À chaque tour, soit `i` augmente, soit `w` diminue&nbsp;: `w - i` est un variant, et chaque boule n'est examinée qu'une fois. C'est la partition en trois zones qu'utilisent les meilleures versions du [tri rapide](../trier/#quicksort) quand le tableau contient beaucoup de valeurs égales au pivot. Le [tri par insertion](../trier/#trois-tris-simples) suit la même démarche, avec l'invariant «&nbsp;les `i` premières cases sont triées&nbsp;», tout comme le [tas](../graphes/#le-tas-une-file-de-priorité), construit autour de l'invariant «&nbsp;chaque parent est plus petit que ses enfants&nbsp;».

### Les fonctions récursives

Pour une fonction récursive, la preuve de correction est une récurrence, dont la structure est celle du code lui-même. Prenons l'[exponentiation rapide](../recursivite/#lexponentiation-rapide)&nbsp;:

```python
def puissance(x, n):
    if n == 0:
        return 1
    p = puissance(x, n // 2)
    if n % 2 == 0:
        return p * p
    return p * p * x
```

On montre, par récurrence forte sur $n$, que `puissance(x, n)` renvoie $x^n$. Pour $n = 0$, elle renvoie $1 = x^0$. Si la propriété est vraie pour tous les entiers plus petits que $n \geqslant 1$, elle l'est en particulier pour $k = \lfloor n/2 \rfloor < n$, et `p` vaut $x^k$. Si $n = 2k$, la fonction renvoie $x^k \times x^k = x^{2k}$&nbsp;; si $n = 2k + 1$, elle renvoie $x^{2k} \times x = x^{2k+1}$. Dans les deux cas, c'est $x^n$. Une fonction récursive se prouve souvent plus facilement qu'une boucle&nbsp;: l'hypothèse de récurrence tient lieu d'invariant, et elle est donnée par la définition même de la fonction.

## Faire vérifier par la machine

### Les assertions

Entre le test et la preuve, il y a un intermédiaire&nbsp;: écrire la spécification et l'invariant **dans le code**, sous forme d'assertions. L'instruction `assert condition` ne fait rien si la condition est vraie, et arrête le programme avec une erreur sinon. Une précondition violée est ainsi détectée à l'entrée de la fonction, plutôt que par un résultat absurde trois fonctions plus loin.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def division(a, b):
    assert a >= 0 and b > 0, "précondition violée"
    q, r = 0, a
    while r >= b:
        assert a == b * q + r and r >= 0, "invariant violé"
        ancien = r
        q, r = q + 1, r - b
        assert r < ancien, "le variant n'a pas diminué"
    assert a == b * q + r and 0 <= r < b, "postcondition violée"
    return q, r

print(division(47, 9))
print(division(47, 0))
{{< /runpython >}}

Ce n'est pas une preuve&nbsp;: les assertions ne sont vérifiées que sur les entrées effectivement essayées. Mais elles rendent visible le raisonnement, et le moindre écart est signalé à l'endroit où il se produit.

### La preuve formelle

À la fin des années 1960, Robert Floyd et Tony Hoare transforment ces raisonnements en un calcul&nbsp;: un **triplet de Hoare** $\\{P\\}\\,C\\,\\{Q\\}$ affirme que si la propriété $P$ est vraie avant l'instruction $C$, alors $Q$ est vraie après, et des règles permettent de combiner ces triplets instruction par instruction, boucle par boucle. Il devient alors possible de faire vérifier une preuve par un logiciel, qui ne laisse passer aucun cas oublié.

Ces méthodes sont coûteuses, mais elles sont employées là où une erreur ne pardonne pas. Le logiciel de pilotage automatique de la ligne 14 du métro parisien, mise en service en 1998, a été développé avec la méthode B&nbsp;: le code est produit à partir d'un modèle dont on a prouvé les propriétés de sécurité. Le compilateur C CompCert, conçu à l'Inria par Xavier Leroy, est accompagné d'une preuve, vérifiée par l'assistant de preuve Coq, que le code produit fait exactement ce que dit le code source. C'est en tentant de prouver formellement Timsort, l'algorithme de tri de Python et de Java, que des chercheurs ont découvert en 2015 [un bug](../trier/#le-tri-de-python) passé inaperçu pendant treize ans.

<div class="encadre prune">
<div class="encadre-titre">Ariane 501</div>

Le 4 juin 1996, trente-sept secondes après son décollage, le premier exemplaire de la fusée Ariane 5 se met en travers de sa trajectoire et se désintègre. En cause, une ligne du logiciel de navigation, repris tel quel d'Ariane 4&nbsp;: la conversion d'une mesure de vitesse horizontale, stockée dans un nombre à virgule sur 64 bits, en un entier signé sur 16 bits, qui ne peut pas dépasser $32\\,767$. Ariane 5, plus puissante, accélérait beaucoup plus vite qu'Ariane 4, et la valeur a débordé. Le calcul fautif ne servait même plus à rien après le décollage.

L'algorithme était juste. C'est l'hypothèse implicite sur les nombres qui était fausse&nbsp;: sur une machine, un entier n'est pas un entier mathématique, et une preuve qui l'oublie ne prouve rien.

</div>
