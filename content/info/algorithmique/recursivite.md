+++
title = "Récursivité"
date = 2026-11-19T10:00:00+01:00
weight = 4
chapter = false
css = "algo.css"
+++

# Récursivité

## Le même problème, en plus petit

Pour additionner les entiers de $1$ à $n$, il suffit de savoir additionner ceux de $1$ à $n-1$, puis d'ajouter $n$. Pour additionner ceux de $1$ à $n-1$, il suffit de savoir additionner ceux de $1$ à $n-2$… et ainsi de suite jusqu'à $0$, dont la somme est connue d'avance. Une fonction **récursive** s'appelle elle-même sur une version plus petite du problème&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def somme(n):
    if n < 1:              # cas de base : résolu directement
        return 0
    return n + somme(n - 1)

print(somme(5), somme(100))
{{< /runpython >}}

<div class="nb-fig">
<div class="rc-anat">
<div class="rc-code"><span class="k">def</span> somme(n):
<span class="rc-base">    <span class="k">if</span> n &lt; 1:
        <span class="k">return</span> 0</span>
<span class="rc-rec">    <span class="k">return</span> <span class="rc-comb">n +</span> <span class="rc-appel">somme(n - 1)</span></span></div>
<div class="rc-legende"><span class="rc-l1">cas de base&nbsp;: résolu sans appel</span><span class="rc-l2">appel sur un problème plus petit</span><span class="rc-l3">combinaison avec le résultat</span></div>
</div>
</div>

Deux ingrédients suffisent&nbsp;: un **cas de base**, assez simple pour être résolu sans appel, et la garantie que chaque appel s'en rapproche. Pour le reste, on écrit la fonction en *supposant* qu'elle marche déjà sur les problèmes plus petits. C'est exactement le raisonnement par récurrence&nbsp;: si $P(0)$ est vraie et si $P(n-1)$ entraîne $P(n)$, alors $P(n)$ est vraie pour tout $n$.

### La pile d'exécution

Quand `somme(5)` appelle `somme(4)`, son calcul est suspendu&nbsp;: il manque encore la valeur de `somme(4)` pour terminer l'addition. L'ordinateur range les appels interrompus les uns sur les autres, dans une **pile d'exécution** (*call stack*), et les reprend dans l'ordre inverse, le dernier interrompu d'abord. La pile monte jusqu'au cas de base, puis redescend en propageant les valeurs.

<div class="anim" data-anim="pile-appels" data-fonctions="somme"></div>

L'arbre des appels de `somme` n'est qu'une chaîne&nbsp;: chaque appel n'en provoque qu'un seul autre. La fonction `fib`, qui calcule les termes de la suite de Fibonacci, s'appelle **deux** fois. Son arbre d'appels se ramifie, mais la pile, elle, ne contient jamais qu'une seule branche à la fois&nbsp;: sa hauteur est la profondeur de l'arbre, pas son nombre de nœuds.

<div class="anim" data-anim="pile-appels" data-fonctions="fib,puiss"></div>
{{< script "js/pile-appels.js" >}}

<div class="quiz">

Combien d'appels à `somme` l'expression `somme(100)` provoque-t-elle&nbsp;? Et quelle hauteur maximale la pile atteint-elle pendant le calcul de `fib(100)`&nbsp;?

<details><summary>Réponse</summary>

$101$ appels, de `somme(100)` à `somme(0)`. Pour `fib(100)`, la pile ne dépasse pas $100$ appels&nbsp;: la plus longue branche descend de `fib(100)` à `fib(1)` en retirant $1$ à chaque étage. Le nombre total d'appels, lui, est astronomique (voir [plus bas](#quand-larbre-explose)).

</details>
</div>

La pile a une taille limitée. Python refuse par défaut de dépasser environ mille appels imbriqués et lève alors une `RecursionError`&nbsp;: `somme(5000)` échoue, alors qu'une simple boucle `for` calcule la même chose sans le moindre souci.

<div class="encadre prune">
<div class="encadre-titre">Pour comprendre la récursivité…</div>

… il faut d'abord comprendre la récursivité. Les informaticiens adorent ce genre de clin d'œil. Le système GNU doit son nom à un acronyme récursif, *GNU's Not Unix* («&nbsp;GNU n'est pas Unix&nbsp;»), dont la première lettre se déplie sans fin. Et le moteur de recherche Google, à qui l'on demande *recursion*, suggère malicieusement&nbsp;: «&nbsp;*Did you mean: recursion*&nbsp;».

</div>

## Les tours de Hanoï

Trois tiges, des disques de tailles toutes différentes empilés sur la première, du plus grand au plus petit. Il faut tout transporter sur la dernière tige, un disque à la fois, sans jamais poser un disque sur un plus petit. Chercher une suite de mouvements à la main devient vite un casse-tête. Raisonner récursivement le dissout&nbsp;: pour déplacer $n$ disques, on déplace les $n-1$ du dessus sur la tige intermédiaire, on déplace le grand, puis on remet les $n-1$ par-dessus.

{{< youtube-plus id="lIIXLQvcd4Q" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

<div class="anim" data-anim="hanoi"></div>
{{< script "js/hanoi3d.js" "module" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def hanoi(n, depart, cible, inter):
    if n == 0:
        return
    hanoi(n - 1, depart, inter, cible)        # dégager les n - 1 disques du dessus
    print("disque", n, ":", depart, "→", cible)
    hanoi(n - 1, inter, cible, depart)        # les reposer sur le grand

hanoi(3, "A", "C", "B")
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">La tour de Brahma</div>

Le casse-tête est inventé en 1883 par le mathématicien Édouard Lucas, sous le pseudonyme de «&nbsp;N. Claus de Siam&nbsp;», anagramme de «&nbsp;Lucas d'Amiens&nbsp;». Il l'accompagne d'une légende&nbsp;: dans un temple de Bénarès, des prêtres déplaceraient sans relâche 64 disques d'or, et le monde finirait quand ils auraient terminé.

Combien de mouvements faut-il&nbsp;? Déplacer $n$ disques, c'est déplacer deux fois $n-1$ disques, plus le grand&nbsp;: $H(n)=2H(n-1)+1$ avec $H(0)=0$, d'où $H(n)=2^n-1$. On montre que c'est le minimum possible. Pour 64 disques, à un mouvement par seconde, il faudrait $2^{64}-1\approx 1{,}8\cdot 10^{19}$ secondes, soit environ 585 milliards d'années&nbsp;: le monde a de la marge.

</div>

## Dessiner récursivement

Une **tortue** est un crayon que l'on pilote en vue subjective, avec trois ordres&nbsp;: `A` avance d'un pas, `+` tourne à droite d'un angle fixé, `-` tourne à gauche. La consigne `A--A--A`, avec un angle de $60°$, trace un triangle équilatéral.

Le biologiste hongrois Aristid Lindenmayer imagine en 1968 de faire *pousser* ces consignes. Une règle de réécriture remplace chaque lettre par un mot, par exemple `A` → `A+A--A+A`&nbsp;: chaque segment devient une ligne brisée de quatre segments. Appliquée à elle-même, encore et encore, la règle transforme le triangle en flocon de Koch. Ces **L-systèmes** (pour Lindenmayer) produisent des courbes qui remplissent le plan, des triangles troués à l'infini, et des plantes étonnamment réalistes.

<div class="anim" data-anim="lsysteme"></div>
{{< script "js/lsysteme.js" >}}

La réécriture se programme en quelques lignes, et la récursivité s'y lit directement&nbsp;: le niveau $n$ est le niveau $n-1$ réécrit une fois de plus.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
import turtle

def reecrire(chaine, regles, niveau):
    if niveau == 0:
        return chaine
    nouvelle = ""
    for c in chaine:
        nouvelle += regles.get(c, c)     # une lettre sans règle reste inchangée
    return reecrire(nouvelle, regles, niveau - 1)

def tracer(consigne, angle, pas, depart=(0, 0), cap=0):
    t = turtle.Turtle()
    t.speed(0)
    t.hideturtle()
    t.penup()
    t.goto(depart)
    t.setheading(cap)
    t.pendown()
    memoire = []                          # la mémoire de la tortue : une pile
    for c in consigne:
        if c == "A":
            t.forward(pas)
        elif c == "+":
            t.right(angle)
        elif c == "-":
            t.left(angle)
        elif c == "[":
            memoire.append((t.position(), t.heading()))
        elif c == "]":
            position, cap = memoire.pop()
            t.penup()
            t.goto(position)
            t.setheading(cap)
            t.pendown()

turtle.tracer(0)                          # dessin instantané
tracer(reecrire("A--A--A", {"A": "A+A--A+A"}, 4), 60, 3, depart=(-120, -70))
# Une plante, avec des crochets :
# tracer(reecrire("P", {"A": "AA", "P": "A[+PA-[P]--P][---P]"}, 5), 20, 3, depart=(0, -190), cap=90)
turtle.update()
{{< /runpython >}}

Les crochets donnent de la mémoire à la tortue&nbsp;: `[` retient sa position et son cap, `]` l'y ramène. C'est ce qui permet de dessiner des branches, puisqu'il faut bien revenir au tronc une fois une branche finie. La structure qui retient ces positions est une **pile**&nbsp;: la tortue revient toujours à la dernière position retenue, exactement comme l'ordinateur revient au dernier appel interrompu.

## L'algorithme d'Euclide

Un des plus vieux algorithmes connus, décrit dans les *Éléments* d'Euclide vers $-300$, calcule le plus grand commun diviseur de deux entiers. Il repose sur une seule remarque&nbsp;: si $a=bq+r$, les diviseurs communs de $a$ et $b$ sont exactement ceux de $b$ et $r$. Donc $\mathrm{pgcd}(a,b)=\mathrm{pgcd}(b,r)$, et l'on recommence avec des nombres plus petits jusqu'à ce que le reste soit nul.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def pgcd(a, b):
    if b == 0:
        return a
    return pgcd(b, a % b)

print(pgcd(1080, 480))
{{< /runpython >}}

En géométrie, l'algorithme découpe un rectangle&nbsp;: on y retire autant de carrés de côté $b$ que possible, et il reste un rectangle $b\times r$ sur lequel on recommence. Le dernier carré obtenu a pour côté le pgcd, et il pave le rectangle de départ.

<div class="anim" data-anim="euclide"></div>
{{< script "js/euclide.js" >}}

{{< youtube-plus id="70jd0Mthyl8" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

<div class="encadre prune">
<div class="encadre-titre">Lamé, 1844&nbsp;: la première analyse de complexité</div>

Combien de divisions l'algorithme d'Euclide demande-t-il&nbsp;? Le pire cas est atteint pour deux termes consécutifs de la suite de Fibonacci, où chaque quotient vaut $1$ et où l'on ne recule que d'un cran à chaque étape&nbsp;: essayez $89$ et $55$ dans l'animation. En 1844, Gabriel Lamé en déduit que le nombre de divisions ne dépasse jamais cinq fois le nombre de chiffres du plus petit des deux nombres. C'est souvent considéré comme le premier théorème de l'histoire de la complexité algorithmique.

</div>

{{< youtube-plus id="X6WnBdmNYiM" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

En remontant les divisions, on peut aussi écrire le pgcd comme une combinaison de $a$ et $b$&nbsp;: c'est l'**algorithme d'Euclide étendu**, que la tradition indienne appelait le «&nbsp;pulvérisateur&nbsp;». Si $\mathrm{pgcd}(b,r)=bx+ry$ et $r=a-qb$, alors $\mathrm{pgcd}(a,b)=ay+b(x-qy)$&nbsp;: l'appel récursif fournit $(x,y)$, et l'on en déduit le couple suivant.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def pulverisateur(a, b):
    if b == 0:
        return a, 1, 0                   # pgcd(a, 0) = a = a×1 + 0×0
    d, x, y = pulverisateur(b, a % b)    # d = b×x + (a % b)×y
    return d, y, x - (a // b) * y

a, b = 1920, 1080
d, u, v = pulverisateur(a, b)
print(f"pgcd({a}, {b}) = {d} = {a}×({u}) + {b}×({v})")
{{< /runpython >}}

## Quand l'arbre explose

Elle est élégante, la fonction `fib`, mais elle cache un piège. Pour calculer `fib(5)`, elle calcule `fib(3)` deux fois, `fib(2)` trois fois, et ces répétitions s'accumulent d'étage en étage&nbsp;: le nombre d'appels croît comme les termes de la suite elle-même, c'est-à-dire exponentiellement.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
appels = 0

def fib(n):
    global appels
    appels += 1
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

for n in [5, 10, 15, 20]:
    appels = 0
    f = fib(n)
    print(f"fib({n}) = {f} : {appels} appels")
{{< /runpython >}}

Chaque nouveau terme multiplie le travail par environ $1{,}618$, le nombre d'or. Calculer `fib(100)` ainsi demanderait plus d'appels qu'il ne s'est écoulé de nanosecondes depuis le Big Bang. Le remède est simple&nbsp;: noter chaque résultat la première fois qu'on le calcule, et le relire ensuite au lieu de le recalculer. Cette **mémoïsation** fait tomber le coût à une centaine d'appels.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
memo = {}

def fib(n):
    if n not in memo:
        memo[n] = n if n < 2 else fib(n - 1) + fib(n - 2)
    return memo[n]

print(fib(100))
{{< /runpython >}}

La récursivité, à elle seule, ne rend donc pas un algorithme rapide&nbsp;: tout dépend de la forme de l'arbre des appels. Quand les mêmes sous-problèmes reviennent sans cesse, on les mémorise, et c'est le point de départ de la [programmation dynamique](../gloutons-dynamique/#quand-les-sous-problèmes-se-répètent-la-programmation-dynamique). Quand ils sont indépendants et rapetissent vite, on peut diviser pour régner.

## Diviser pour régner

La stratégie tient en trois temps&nbsp;: **diviser** le problème en morceaux indépendants, les **résoudre** récursivement, puis **combiner** les réponses.

### L'exponentiation rapide

Calculer $x^n$ en multipliant $x$ par lui-même demande $n-1$ multiplications. Mais $x^{n}=\left(x^{n/2}\right)^2$ quand $n$ est pair, et $x^{n}=x\left(x^{(n-1)/2}\right)^2$ quand il est impair&nbsp;: un seul appel récursif, sur un exposant deux fois plus petit, suivi d'une ou deux multiplications. La seconde animation de la pile, avec la fonction `puiss`, le montre&nbsp;: au lieu d'une chaîne de $n$ appels, une chaîne d'environ $\log\_2 n$.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
multiplications = 0

def puiss_mod(x, n, m):                  # x puissance n, modulo m
    global multiplications
    if n == 0:
        return 1
    y = puiss_mod(x, n // 2, m)
    multiplications += 1
    y = y * y % m
    if n % 2 == 1:
        multiplications += 1
        y = y * x % m
    return y

m = 1000000007
for n in [10, 1000, 10**9, 10**18]:
    multiplications = 0
    r = puiss_mod(3, n, m)
    assert r == pow(3, n, m)
    print(f"3^{n} mod m = {r} en {multiplications} multiplications")
{{< /runpython >}}

Élever un nombre à une puissance de l'ordre du milliard de milliards en une centaine de multiplications&nbsp;: c'est ce qui rend possible la cryptographie RSA, où l'on calcule sans cesse des puissances gigantesques modulo de grands nombres.

### Le coût d'un découpage

On l'a vu avec le [plus grand sous-tableau](../complexite/#mathcalonlog-n-diviser-pour-régner), et le **tri fusion**, décrit par John von Neumann dès 1945, en est l'exemple le plus célèbre&nbsp;: trier chaque moitié, puis fusionner deux listes triées en un seul passage. Combien coûte un tel algorithme&nbsp;? L'arbre des appels permet de le voir d'un coup d'œil. Supposons qu'on coupe un problème de taille $n$ en $a$ sous-problèmes de taille $n/2$, et que couper puis recombiner coûte un travail proportionnel à $n$. Au niveau $k$ de l'arbre, il y a $a^k$ sous-problèmes, chacun de taille $n/2^k$&nbsp;: le travail du niveau vaut $n\\,(a/2)^k$. Tout se joue donc dans la comparaison entre $a$ et $2$, c'est-à-dire entre la vitesse à laquelle les sous-problèmes **se multiplient** et celle à laquelle ils **rapetissent**.

<div class="anim" data-anim="arbre-recursion"></div>
{{< script "js/arbre-recursion.js" >}}

<div class="encadre bleu">
<div class="encadre-titre">Le théorème maître</div>

Plus généralement, si l'on coupe en $a$ sous-problèmes de taille $n/b$ et que la combinaison coûte $\mathcal{O}(n^d)$, on compare $a$ à $b^d$&nbsp;:

- si $a<b^d$, la racine domine, et le coût total est $\mathcal{O}(n^d)$&nbsp;;
- si $a=b^d$, tous les niveaux se valent, et l'on paie $\mathcal{O}(n^d\log n)$&nbsp;;
- si $a>b^d$, les feuilles dominent, et l'on paie $\mathcal{O}(n^{\log\_b a})$.

C'est un combat entre $a$, le rythme auquel les sous-problèmes prolifèrent, et $b^d$, le rythme auquel le travail par sous-problème fond. L'exponentiation rapide ($a=1$, $b=2$, $d=0$) et le tri fusion ($a=2$, $b=2$, $d=1$) tombent tous deux dans le cas d'égalité&nbsp;: $\mathcal{O}(\log n)$ et $\mathcal{O}(n\log n)$.

</div>

### Multiplier plus vite qu'à l'école

Couper chaque nombre en deux moitiés et calculer les quatre produits de moitiés donne $a=4$, $b=2$, $d=1$&nbsp;: les feuilles dominent, et l'on retombe sur le $\mathcal{O}(n^2)$ de l'école. Diviser pour régner ne suffit pas&nbsp;; il faut une idée de plus.

En 1960, lors d'un séminaire à Moscou, Andreï Kolmogorov conjecture qu'on ne peut pas multiplier deux nombres de $n$ chiffres en moins de $n^2$ opérations élémentaires. Moins d'une semaine plus tard, Anatoli Karatsouba, un étudiant de 23 ans, lui apporte un contre-exemple. Kolmogorov, enthousiaste, présente le résultat et le fait publier en 1962&nbsp;; Karatsouba ne l'apprend qu'en recevant les tirés à part.

L'idée, qui remonte à une astuce de Gauss pour les nombres complexes&nbsp;: écrire $x=a\cdot 10^m+b$ et $y=c\cdot 10^m+d$. Le produit demande $ac$, $bd$ et $ad+bc$, soit quatre produits en apparence. Mais $ad+bc=(a+b)(c+d)-ac-bd$&nbsp;: **trois** produits suffisent. Appliquée récursivement, cette économie fait passer de $4$ à $3$ sous-problèmes, et le coût tombe à $\mathcal{O}(n^{\log\_2 3})\approx\mathcal{O}(n^{1{,}585})$.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
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

## Se passer de la récursivité

Toute fonction récursive peut s'écrire avec une boucle et une pile explicite&nbsp;: il suffit de faire soi-même ce que fait la pile d'exécution, comme la tortue avec ses crochets. Parfois, la version sans récursivité révèle même une structure que la récursivité cachait.

Les tours de Hanoï en offrent un bel exemple. Numérotons les coups à partir de $1$&nbsp;: aux coups impairs, on déplace le plus petit disque, toujours dans le même sens de rotation&nbsp;; aux coups pairs, un seul autre mouvement est permis, et on le joue. Mieux encore, le disque déplacé au coup $k$ se lit dans l'écriture binaire de $k$&nbsp;: c'est le nombre de zéros qui la terminent, plus un. Résoudre les tours de Hanoï, c'est compter en binaire.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def disque_du_coup(k):                  # nombre de zéros à la fin de k en binaire, plus un
    d = 1
    while k % 2 == 0:
        k //= 2
        d += 1
    return d

def hanoi_sans_recursivite(n):
    tiges = [list(range(n, 0, -1)), [], []]
    sens = 1 if n % 2 == 0 else 2       # sens de rotation du petit disque
    for k in range(1, 2 ** n):
        d = disque_du_coup(k)
        for i in range(3):              # on cherche la tige qui porte le disque d au sommet
            if tiges[i] and tiges[i][-1] == d:
                depart = i
        if d == 1:
            arrivee = (depart + sens) % 3
        else:                           # la seule tige où d peut se poser
            for j in range(3):
                if j != depart and (not tiges[j] or tiges[j][-1] > d):
                    arrivee = j
        tiges[arrivee].append(tiges[depart].pop())
        print(f"coup {k:2} ({k:04b}) : disque {d}, {'ABC'[depart]} → {'ABC'[arrivee]}")
    return tiges

print(hanoi_sans_recursivite(4))
{{< /runpython >}}

La suite des disques déplacés, $1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1, 3\ldots$, est la «&nbsp;suite de la règle&nbsp;»&nbsp;: elle donne la hauteur des graduations d'une règle, plus longues aux centimètres, moyennes aux demi-centimètres, courtes aux millimètres. Le grand disque ne bouge qu'une fois, au milieu&nbsp;; les deux moitiés de la suite, de part et d'autre, sont deux copies de la solution pour $n-1$ disques. La récursivité était là depuis le début, dessinée dans la règle.

<div class="encadre retenir">
<div class="encadre-titre">À retenir</div>

- Une fonction récursive a deux ingrédients&nbsp;: un **cas de base**, résolu directement, et des **appels sur des problèmes plus petits**, qui s'en rapprochent.
- Chaque appel en attente occupe une place dans la **pile d'exécution**&nbsp;; trop d'appels emboîtés la font déborder.
- Quand les mêmes sous-problèmes reviennent, comme pour Fibonacci, l'arbre des appels explose&nbsp;: il faut **mémoriser** les résultats.
- **Diviser pour régner**, c'est découper en sous-problèmes indépendants et nettement plus petits&nbsp;; le coût total se lit sur l'arbre des appels.

</div>
