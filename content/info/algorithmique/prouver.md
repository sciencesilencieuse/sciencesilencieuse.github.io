+++
title = "Prouver un algorithme"
date = 2026-11-19T15:00:00+01:00
weight = 9
chapter = false
css = "algo.css"
+++

# Prouver un algorithme

Un programme qui a passé mille tests peut encore échouer au mille et unième. «&nbsp;Tester un programme peut montrer la présence de bugs, jamais leur absence&nbsp;», écrit Edsger Dijkstra en 1970. Pour être sûr, il faut raisonner sur le code lui-même. Face à un algorithme, on se pose trois questions&nbsp;:

<div class="pv-trois">
<div class="pv-q t"><b>S'arrête-t-il&nbsp;?</b><span>C'est la <strong>terminaison</strong>&nbsp;: aucune entrée ne doit le faire tourner indéfiniment.</span></div>
<div class="pv-q c"><b>Calcule-t-il juste&nbsp;?</b><span>C'est la <strong>correction</strong>&nbsp;: le résultat est bien celui qu'on attendait.</span></div>
<div class="pv-q x"><b>Assez vite&nbsp;?</b><span>C'est la <strong>complexité</strong>, sujet de la page <a href="../complexite/">Complexité</a>.</span></div>
</div>

Cette page traite des deux premières, avec deux outils qui se ressemblent par le nom et se complètent&nbsp;: le **variant**, qui prouve qu'une boucle s'arrête, et l'**invariant**, qui prouve qu'elle calcule juste.

## Dire ce qu'on attend

Avant de prouver qu'un programme est juste, il faut dire ce que «&nbsp;juste&nbsp;» veut dire. C'est la **spécification**, un contrat en deux parties&nbsp;: les **préconditions**, ce que l'on suppose des entrées, et les **postconditions**, ce que l'on garantit en sortie.

<div class="nb-fig">
<div class="pv-contrat">
<div class="pv-bloc pv-pre"><span class="pv-t">préconditions</span>$a$ et $b$ entiers,<br>$a \geqslant 0$ et $b > 0$</div>
<div class="pv-fl">→</div>
<div class="pv-bloc pv-algo"><span class="pv-t">algorithme</span>q, r = division(a, b)</div>
<div class="pv-fl">→</div>
<div class="pv-bloc pv-post"><span class="pv-t">postconditions</span>$a = bq + r$<br>et $0 \leqslant r < b$</div>
</div>
<p class="nb-leg">Le contrat de la division euclidienne. Si l'appelant ne respecte pas les préconditions, par exemple avec b = 0, l'algorithme n'est tenu à rien.</p>
</div>

Un algorithme est **correct** s'il respecte son contrat. La distinction suivante n'est pas un détail&nbsp;:

<div class="pv-grille2">
<div class="pv-cas partielle"><b>Correction partielle</b>Pour toute entrée qui vérifie les préconditions, <strong>s'il s'arrête</strong>, la sortie vérifie les postconditions. Une boucle infinie est partiellement correcte&nbsp;: elle ne renvoie jamais rien de faux&nbsp;!</div>
<div class="pv-cas totale"><b>Correction totale</b>La correction partielle, <strong>et</strong> l'algorithme s'arrête toujours. C'est ce qu'on veut prouver&nbsp;: correction partielle + terminaison.</div>
</div>

<div class="bugs">
<div class="bug"><span class="bug-an">1999</span><div class="bug-titre">Mars Climate Orbiter</div><p>La sonde se désintègre dans l'atmosphère de Mars. Un logiciel au sol fournissait des impulsions en <span class="bug-nb">livres-force × secondes</span>, quand le logiciel de navigation les attendait en <span class="bug-nb">newtons × secondes</span>. Chaque programme était juste&nbsp;; c'est le contrat entre les deux qui n'était pas écrit.</p></div>
</div>

## S'arrêter

### Le variant de boucle

Une boucle `for` parcourt un nombre de tours fixé d'avance. Le danger vient des boucles `while` et des fonctions récursives, qui peuvent tourner sans fin. Pour prouver qu'une boucle `while` s'arrête, on exhibe un **variant**&nbsp;: une quantité **entière**, **positive** tant que la boucle tourne, et qui **diminue strictement** à chaque tour.

L'argument tient en une image&nbsp;: un escalier dont chaque marche est un entier positif. Depuis la marche $462$, on peut descendre longtemps, mais pas indéfiniment&nbsp;: une suite d'entiers positifs strictement décroissante finit toujours par s'arrêter. La boucle fait donc un nombre fini de tours.

Dans l'algorithme d'Euclide, le variant est `b`&nbsp;:

```python
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```

<div class="nb-fig">
<svg class="pv-escalier" viewBox="0 0 440 190" role="img" aria-label="Valeurs successives du variant b pour pgcd(1071, 462) : 462, 147, 21, 0">
<g font-family="system-ui, sans-serif" text-anchor="middle">
<line x1="20" y1="150" x2="420" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="45" y="30" width="70" height="120" rx="6" fill="#F59E0B"/><text x="80" y="22" font-weight="800" font-size="16" fill="#B45309">462</text>
<rect x="145" y="111.8" width="70" height="38.2" rx="6" fill="#FBBF24"/><text x="180" y="104" font-weight="800" font-size="16" fill="#B45309">147</text>
<rect x="245" y="144.5" width="70" height="5.5" rx="2" fill="#FCD34D"/><text x="280" y="136" font-weight="800" font-size="16" fill="#B45309">21</text>
<circle cx="380" cy="150" r="7" fill="#15803d"/><text x="380" y="136" font-weight="800" font-size="16" fill="#15803d">0</text>
<text x="80" y="170" font-size="12" fill="#64748b">avant la boucle</text><text x="180" y="170" font-size="12" fill="#64748b">tour 1</text><text x="280" y="170" font-size="12" fill="#64748b">tour 2</text><text x="380" y="170" font-size="12" fill="#64748b">tour 3 : sortie</text>
<path d="M118 60Q130 75 142 98" fill="none" stroke="#B45309" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M218 118Q230 128 242 138" fill="none" stroke="#B45309" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M318 145Q340 146 368 149" fill="none" stroke="#B45309" stroke-width="1.5" stroke-dasharray="4 3"/>
</g>
</svg>
<p class="nb-leg">Le variant b pour pgcd(1071, 462)&nbsp;: un entier positif qui diminue strictement à chaque tour, jusqu'à la sortie.</p>
</div>

À chaque tour, `b` est remplacé par le reste de la division de `a` par `b`, qui est un entier compris entre $0$ et $b - 1$&nbsp;: il reste positif et devient **strictement** plus petit. Dans la multiplication égyptienne ou l'exponentiation rapide, le variant est le nombre que l'on divise par $2$ à chaque tour. Le choix du variant n'est pas toujours aussi évident, mais l'idée est toujours la même&nbsp;: trouver ce qui s'use.

<div class="bugs">
<div class="bug"><span class="bug-an">2008</span><div class="bug-titre">Les baladeurs Zune bloqués le 31 décembre</div><p>Le 31 décembre 2008, tous les baladeurs Zune 30 Go de Microsoft se figent pour la journée. Leur horloge calculait l'année à partir du nombre de jours écoulés depuis 1980, avec une boucle dont la quantité <span class="bug-nb">jours</span> ne diminuait pas dans un cas&nbsp;: le 366<sup>e</sup> jour d'une année bissextile. Il manquait un variant.</p></div>
</div>

Voici la boucle fautive, traduite en Python. Le 31 décembre 2008 est le $10\\,593^\text{e}$ jour depuis le 1<sup>er</sup> janvier 1980, et 2008 est bissextile&nbsp;: dans la branche des années bissextiles, si `jours` vaut exactement $366$, rien ne change, et la boucle tourne indéfiniment. Un compteur de tours l'arrête ici artificiellement.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def bissextile(an):
    return an % 4 == 0 and (an % 100 != 0 or an % 400 == 0)

def annee(jours):
    """Année du jour numéro `jours`, le 1er janvier 1980 étant le jour 1."""
    an, tours = 1980, 0
    while jours > 365:
        tours += 1
        if tours > 10000:                 # garde-fou ajouté pour la démonstration
            return "boucle infinie !"
        if bissextile(an):
            if jours > 366:               # si jours == 366, rien ne change...
                jours -= 366
                an += 1
        else:
            jours -= 365
            an += 1
    return an

for j in [10592, 10593, 10594]:
    print("jour", j, "->", annee(j))
{{< /runpython >}}

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

Elle s'arrête pourtant toujours, et renvoie $\color{#15803d}{91}$ pour tout $n \leqslant 100$. On le démontre par récurrence sur $\color{#B45309}{101 - n}$, la distance qui sépare $n$ du cas de base. Pour $90 \leqslant n \leqslant 100$, $n + 11$ dépasse $100$, donc $M(n + 11) = n + 1$ et $M(n) = M(n + 1)$&nbsp;: de proche en proche, $M(n) = M(101) = 91$. Pour $n < 90$, l'appel intérieur $M(n + 11)$ porte sur un entier plus proche de $101$&nbsp;; par hypothèse de récurrence, il s'arrête et vaut $91$, et $M(n) = M(91) = 91$. Ce n'est pas l'argument qui diminue d'un appel à l'autre, mais la distance $101 - n$ dans la preuve.

### La suite de Syracuse

On part d'un entier $n$&nbsp;: s'il est **pair**, on le divise par $2$, sinon on le remplace par $3n + 1$, et l'on recommence jusqu'à tomber sur $1$. Partant de $\color{#2563EB}{6}$&nbsp;: $6 \to 3 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to \color{#15803d}{1}$.

```python
def vol(n):
    etapes = 0
    while n != 1:
        n = n // 2 if n % 2 == 0 else 3 * n + 1
        etapes += 1
    return etapes
```

Cette boucle s'arrête-t-elle pour tout $n$&nbsp;? **Personne ne le sait.** La conjecture, énoncée par Lothar Collatz dans les années 1930, a été vérifiée par ordinateur pour tous les entiers jusqu'à $2^{68}$, soit près de $3 \times 10^{20}$. En 2019, Terence Tao a montré qu'elle est vraie «&nbsp;presque&nbsp;» pour tous les entiers, en un sens précis. Mais aucun variant n'est connu&nbsp;: la suite monte et descend de façon imprévisible, et Paul Erdős disait que les mathématiques ne sont peut-être pas encore prêtes pour de tels problèmes.

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

Que fait `paradoxe(paradoxe)`&nbsp;?

<div class="pv-grille2">
<div class="pv-cas partielle"><b>Si elle s'arrête…</b>c'est que <code>termine(paradoxe, paradoxe)</code> a répondu non&nbsp;: elle ne s'arrête pas.</div>
<div class="pv-cas partielle"><b>Si elle ne s'arrête pas…</b>c'est que <code>termine</code> a répondu oui&nbsp;: elle s'arrête.</div>
</div>

Les deux cas sont contradictoires&nbsp;: la fonction `termine` ne peut pas exister. C'est le même mécanisme que dans le [théorème d'incomplétude de Gödel](/logique/godel/). Il n'existera donc jamais d'outil universel pour prouver la terminaison. Il reste à la prouver programme par programme, comme on vient de le faire.

## Calculer juste

### L'invariant de boucle

Pour prouver qu'une boucle calcule ce qu'on attend, on cherche une propriété qui reste vraie d'un tour à l'autre, un **invariant**. La preuve a exactement la forme d'une démonstration par récurrence&nbsp;:

<div class="nb-fig">
<div class="pv-etapes">
<span class="pv-h"></span><span class="pv-h pv-rec">récurrence</span><span class="pv-h">invariant de boucle</span>
<span class="pv-n pv-e1">1</span><div class="pv-c pv-e1 pv-rec"><b>Initialisation</b>la propriété est vraie au rang 0</div><div class="pv-c pv-e1"><b>Initialisation</b>l'invariant est vrai avant le premier tour</div>
<span class="pv-n pv-e2">2</span><div class="pv-c pv-e2 pv-rec"><b>Hérédité</b>vraie au rang k ⇒ vraie au rang k + 1</div><div class="pv-c pv-e2"><b>Conservation</b>vrai au début d'un tour ⇒ vrai à la fin</div>
<span class="pv-n pv-e3">3</span><div class="pv-c pv-e3 pv-rec"><b>Conclusion</b>vraie à tout rang</div><div class="pv-c pv-e3"><b>Sortie</b>invariant vrai <strong>et</strong> condition de boucle fausse ⇒ postcondition</div>
</div>
</div>

La troisième étape est propre aux boucles&nbsp;: c'est là qu'on récolte le fruit de la preuve. En sortie, on dispose de deux informations à la fois, l'invariant et la négation de la condition de boucle, et c'est leur réunion qui doit donner la postcondition.

L'animation suit quatre boucles tour par tour, avec leur variant, qui diminue jusqu'à la sortie, et leur invariant, qui ne bouge pas.

<div class="anim" data-anim="invariant"></div>
{{< script "js/invariant.js" >}}

Pour l'algorithme d'Euclide, l'invariant est $\mathrm{pgcd}(a, b)$. Si $a = bq + r$, tout diviseur commun de $a$ et $b$ divise $r = a - bq$, et tout diviseur commun de $b$ et $r$ divise $a = bq + r$&nbsp;: les couples $(a, b)$ et $(b, r)$ ont les mêmes diviseurs communs, donc le même pgcd. Le tour de boucle conserve l'invariant. En sortie, $b = 0$, et $\mathrm{pgcd}(a, 0) = a$&nbsp;:

<div class="nb-fig">
<div class="pv-chaine">
<span class="pv-p">pgcd(1071, <em>462</em>)</span><span class="pv-eg">=</span>
<span class="pv-p">pgcd(462, <em>147</em>)</span><span class="pv-eg">=</span>
<span class="pv-p">pgcd(147, <em>21</em>)</span><span class="pv-eg">=</span>
<span class="pv-p">pgcd(21, <em>0</em>)</span><span class="pv-eg">=</span>
<span class="pv-p pv-fin">21</span>
</div>
<p class="nb-leg">L'invariant, en vert, ne change pas d'un tour à l'autre&nbsp;; le variant, en orange, diminue jusqu'à 0.</p>
</div>

Pour la multiplication égyptienne, l'invariant est $\color{#15803d}{a \times b + p}$. Si $a$ est pair, on remplace $a$ par $\frac{a}{2}$ et $b$ par $2b$, ce qui ne change pas leur produit. Si $a$ est impair, on remplace $a$ par $\frac{a - 1}{2}$, $b$ par $2b$ et $p$ par $p + b$, et $\frac{a-1}{2} \times 2b + p + b = ab + p$. En sortie, $a = 0$, et $p$ vaut le produit cherché.

Trouver l'invariant est la partie créative de la preuve. Il dit ce que la boucle a déjà accompli&nbsp;: «&nbsp;le pgcd n'a pas changé&nbsp;», «&nbsp;ce qui reste à ajouter vaut $a \times b$&nbsp;».

<div class="bugs">
<div class="bug"><span class="bug-an">2014</span><div class="bug-titre">Apple et le « goto fail »</div><p>Dans le code qui vérifie l'authenticité d'une connexion sécurisée sur iPhone et Mac, une ligne <span class="bug-nb">goto fail;</span> se retrouve écrite deux fois. La seconde est toujours exécutée, et saute la dernière vérification de signature&nbsp;: pendant plus d'un an, des connexions frauduleuses sont acceptées. Le programme s'arrêtait toujours&nbsp;; il ne calculait pas juste.</p></div>
</div>

### La dichotomie, enfin juste

La [recherche dichotomique](../rechercher/#une-boucle-plus-délicate-quil-ny-paraît) est l'exemple type d'une boucle facile à imaginer et difficile à écrire juste. L'invariant est un dessin&nbsp;: si $x$ est dans la liste, il est dans la **zone** qui va de l'indice $g$ à l'indice $d$&nbsp;; tout ce qui est à gauche est trop petit, tout ce qui est à droite trop grand.

<div class="nb-fig">
<div class="pv-zone"><span class="exclu">2</span><span class="exclu">3</span><span class="exclu">5</span><span class="exclu">7</span><span class="exclu">11</span><span class="zone">13</span><span class="milieu">17</span><span class="zone">19</span><span class="zone">23</span></div>
<div class="pv-reperes"><span></span><span></span><span></span><span></span><span></span><span>g</span><span>m</span><span></span><span>d</span></div>
<p class="nb-leg">On cherche x = 19. La zone en bleu contient forcément x s'il est dans la liste. Comme L[m] = 17 &lt; 19, toute la partie g…m est trop petite&nbsp;: la zone devient m + 1…d, et rétrécit.</p>
</div>

Avec cet invariant, la version correcte s'écrit sans hésiter&nbsp;:

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

<div class="nb-fig">
<div class="pv-etapes" style="grid-template-columns:auto 1fr">
<span class="pv-n pv-e1">1</span><div class="pv-c pv-e1"><b>Initialisation</b>la zone est la liste entière&nbsp;: l'invariant est vrai.</div>
<span class="pv-n pv-e2">2</span><div class="pv-c pv-e2"><b>Conservation</b>si L[m] &lt; x, comme L est triée, les cases de g à m sont toutes plus petites que x&nbsp;: x, s'il est dans la zone, est entre m + 1 et d. Le cas L[m] &gt; x est symétrique. La zone rétrécit d'au moins une case&nbsp;: le variant d − g + 1 diminue strictement.</div>
<span class="pv-n pv-e3">3</span><div class="pv-c pv-e3"><b>Sortie</b>si l'on sort par return True, on a trouvé x. Sinon, la condition g ≤ d est fausse&nbsp;: la zone est vide, et l'invariant dit que x n'est pas dans L.</div>
</div>
</div>

La preuve désigne exactement l'erreur de la version fausse. Avec `while g < d`, on sort quand `g` vaut `d`&nbsp;: la zone contient encore une case, jamais examinée, et l'invariant ne permet plus de conclure.

### Écrire l'invariant d'abord&nbsp;: le drapeau hollandais

Un invariant ne sert pas qu'à vérifier un programme après coup&nbsp;: on peut l'écrire **avant** le code, et laisser le code en découler. Dijkstra en donne un exemple célèbre&nbsp;: ranger en un seul passage, par échanges, des boules rouges, blanches et bleues, comme les bandes du drapeau néerlandais.

On commence par décrire une situation intermédiaire, avec trois indices `r`, `i` et `w`&nbsp;: les cases avant `r` sont <span class="nb-ch rg">rouges</span>, celles de `r` à `i` (exclu) <span class="nb-ch gr" style="font-weight:700">blanches</span>, celles de `i` à `w` (exclu) <span class="nb-ch" style="color:#B45309">pas encore examinées</span>, celles à partir de `w` <span class="nb-ch bl">bleues</span>. Au départ, `r = i = 0` et `w = n`&nbsp;: tout est à examiner. À la fin, la zone à examiner doit être vide. Reste à écrire un tour de boucle qui examine la boule en `i` et rétablit l'invariant&nbsp;; il n'y a que trois cas, et chacun se déduit du dessin.

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

<div class="bugs">
<div class="bug"><span class="bug-an">2014</span><div class="bug-titre">Heartbleed</div><p>Dans OpenSSL, qui chiffre une grande partie du web, le client envoie un petit message que le serveur lui renvoie en écho, avec sa <span class="bug-nb">longueur annoncée</span>. Le serveur ne vérifiait pas que cette longueur correspondait à la longueur réelle. En annonçant 64 Ko pour un message d'un octet, on récupérait des morceaux de la mémoire du serveur, mots de passe et clés compris. Une précondition non vérifiée.</p></div>
</div>

### La preuve formelle

À la fin des années 1960, Robert Floyd et Tony Hoare transforment ces raisonnements en un calcul. Un **triplet de Hoare** affirme que si la propriété $P$ est vraie avant l'instruction $C$, alors $Q$ est vraie après&nbsp;:

<div class="nb-fig">
<div class="pv-hoare"><span class="P">{ x ≥ 0 }</span><span class="C">x = x + 1</span><span class="Q">{ x ≥ 1 }</span></div>
<p class="nb-leg">Précondition en bleu, instruction en noir, postcondition en vert. Des règles permettent d'enchaîner ces triplets instruction par instruction, et d'en déduire celui d'une boucle à partir de son invariant.</p>
</div>

Il devient alors possible de faire vérifier une preuve par un logiciel, qui ne laisse passer aucun cas oublié. Ces méthodes sont coûteuses, mais elles sont employées là où une erreur ne pardonne pas&nbsp;:

- le logiciel de pilotage automatique de la **ligne 14 du métro parisien**, mise en service en 1998, a été développé avec la méthode B&nbsp;: le code est produit à partir d'un modèle dont on a prouvé les propriétés de sécurité&nbsp;;
- le compilateur C **CompCert**, conçu à l'Inria par Xavier Leroy, est accompagné d'une preuve, vérifiée par l'assistant de preuve Coq, que le code produit fait exactement ce que dit le code source&nbsp;;
- c'est en tentant de prouver formellement **Timsort**, l'algorithme de tri de Python et de Java, que des chercheurs ont découvert en 2015 [un bug](../trier/#le-tri-de-python) passé inaperçu pendant treize ans.

<div class="encadre bug-long">
<div class="encadre-titre">Ariane 501</div>

Le 4 juin 1996, trente-sept secondes après son décollage, le premier exemplaire de la fusée Ariane 5 se met en travers de sa trajectoire et se désintègre. En cause, une ligne du logiciel de navigation, repris tel quel d'Ariane 4&nbsp;: la conversion d'une mesure de vitesse horizontale, stockée dans un nombre à virgule sur $64$ bits, en un entier signé sur $\color{#DC2626}{16}$ bits, qui ne peut pas dépasser $\color{#DC2626}{32\\,767}$. Ariane 5, plus puissante, accélérait beaucoup plus vite qu'Ariane 4, et la valeur a débordé. Le calcul fautif ne servait même plus à rien après le décollage.

L'algorithme était juste. C'est l'hypothèse implicite sur les nombres qui était fausse&nbsp;: sur une machine, un entier n'est pas un entier mathématique, et une preuve qui l'oublie ne prouve rien. C'est l'objet de la page suivante, [Les nombres en machine](../nombres/).

</div>

<div class="encadre bleu">
<div class="encadre-titre">À retenir</div>

- On prouve un algorithme par rapport à une **spécification**&nbsp;: des préconditions sur les entrées, des postconditions sur la sortie.
- **Terminaison**&nbsp;: un variant, entier positif qui diminue strictement à chaque tour.
- **Correction**&nbsp;: un invariant, avec trois étapes, initialisation, conservation, sortie&nbsp;; à la sortie, invariant et condition de boucle fausse donnent ensemble la postcondition.
- Aucun programme ne peut décider, pour tout programme, s'il s'arrête&nbsp;: la terminaison se prouve au cas par cas.

</div>
