+++
title = "Rechercher"
date = 2026-11-19T10:00:00+01:00
weight = 1
chapter = false
css = "algo.css"
+++

# Rechercher

## Parcourir

Le plus simple des algorithmes de recherche examine les éléments un à un, jusqu'à trouver le bon ou épuiser la liste. C'est exactement ce que fait le mot-clé `in` de Python.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def recherche(x, L):
    for e in L:
        if e == x:
            return True
    return False

L = [12, 5, 31, 8, 27, 14, 3]
print(recherche(27, L), recherche(4, L))
{{< /runpython >}}

Le coût dépend de la position de l'élément cherché&nbsp;: une seule comparaison s'il est en tête, $n$ s'il est en queue, et $n$ aussi s'il est absent, car il faut alors tout examiner pour en être sûr. C'est ce **pire cas** qu'on retient pour juger un algorithme&nbsp;: la recherche séquentielle est **linéaire**, son coût croît comme $n$. Sans aucune information sur l'ordre des éléments, on ne peut d'ailleurs pas faire mieux&nbsp;: tant qu'un élément n'a pas été regardé, il pourrait être celui qu'on cherche.

### Le maximum, et le second

Trouver le plus grand élément demande lui aussi un seul passage&nbsp;: on garde en mémoire le meilleur rencontré jusqu'ici, et on le remplace dès qu'on trouve mieux. Et le deuxième plus grand&nbsp;? On peut chercher le maximum, l'écarter, puis chercher de nouveau&nbsp;: deux passages, environ $2n$ comparaisons. Ou bien tenir à jour les deux meilleurs au cours d'un seul passage.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def deux_plus_grands(L):
    """Le maximum, et le plus grand élément strictement plus petit que lui."""
    m1, m2 = L[0], None
    for e in L[1:]:
        if e > m1:
            m1, m2 = e, m1
        elif e < m1 and (m2 is None or e > m2):
            m2 = e
    return m1, m2

print(deux_plus_grands([4, 17, 9, 17, 12, 3, 15]))
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">Lewis Carroll et le tournoi de tennis</div>

En 1883, l'auteur d'*Alice au pays des merveilles*, Charles Dodgson de son vrai nom, mathématicien à Oxford, publie un pamphlet sur les tournois de tennis. Le vainqueur d'un tournoi à élimination directe est bien le meilleur joueur&nbsp;; mais le finaliste malheureux, qui reçoit le second prix, n'est souvent pas le second meilleur. Celui-ci a très bien pu perdre dès le premier tour… contre le futur vainqueur.

L'observation donne un algorithme. Le second meilleur a forcément été battu par le champion, et par lui seul. Un tournoi désigne le maximum en $n-1$ matchs&nbsp;; il suffit ensuite d'organiser un petit tournoi entre les $\log\_2 n$ adversaires battus par le champion. Total&nbsp;: environ $n+\log\_2 n$ comparaisons, au lieu de $2n$. On montre qu'on ne peut pas faire mieux.

</div>

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import sample
comparaisons = 0

def bat(a, b):
    global comparaisons
    comparaisons += 1
    return a > b

def tournoi(L):
    joueurs = [(x, []) for x in L]          # (joueur, liste des adversaires qu'il a battus)
    while len(joueurs) > 1:
        suivants = []
        for i in range(0, len(joueurs) - 1, 2):
            (a, va), (b, vb) = joueurs[i], joueurs[i + 1]
            suivants.append((a, va + [b]) if bat(a, b) else (b, vb + [a]))
        if len(joueurs) % 2 == 1:
            suivants.append(joueurs[-1])      # exempté de ce tour
        joueurs = suivants
    return joueurs[0]

n = 1024
L = sample(range(10 ** 6), n)
champion, battus = tournoi(L)
second = battus[0]
for b in battus[1:]:
    if bat(b, second):
        second = b
assert (champion, second) == tuple(sorted(L)[-2:][::-1])
print(f"{n} joueurs : {comparaisons} comparaisons, contre {2 * n - 3} en deux passages")
{{< /runpython >}}

## Chercher un mot dans un texte

Pour savoir si un mot de $m$ lettres apparaît dans un texte de $n$ lettres, l'idée naturelle est de faire glisser le mot le long du texte et de comparer, à chaque position, les lettres une à une. Il y a $n-m+1$ positions, et jusqu'à $m$ comparaisons pour chacune&nbsp;: dans le pire des cas, de l'ordre de $n\times m$ comparaisons. Ce pire cas n'a rien d'exotique&nbsp;: chercher `aaaab` dans une longue suite de `a` le réalise, et les textes très répétitifs, comme l'ADN, s'en approchent.

<div class="quiz">

Combien de comparaisons de caractères faut-il au minimum pour s'assurer qu'un mot de $3$ lettres est absent d'un texte de $10$ lettres, avec la méthode naïve&nbsp;?

<details><summary>Réponse</summary>

Il y a $10-3+1=8$ positions, et dans le pire des cas $3$ comparaisons à chacune, soit $24$. Attention&nbsp;: en Python, `texte[i:i+m] == mot` ressemble à une seule opération, mais cache bien $m$ comparaisons.

</details>
</div>

En 1977, Robert Boyer et J Strother Moore renversent le point de vue&nbsp;: comparer le mot **de droite à gauche**. Si la dernière lettre de la fenêtre ne figure nulle part dans le mot, aucune des $m$ positions qui la contiennent ne peut convenir, et l'on peut sauter d'un coup de $m$ positions. Nigel Horspool simplifie la méthode en 1980&nbsp;: une petite table, calculée une fois pour toutes sur le mot, donne pour chaque lettre la longueur du saut. Paradoxe&nbsp;: **plus le mot cherché est long, plus la recherche va vite**, puisque les sauts s'allongent.

<div class="anim" data-anim="motif"></div>
{{< script "js/fin-partie.js" >}}
{{< script "js/motif.js" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import choice

def naif(mot, texte):
    n, m, comp = len(texte), len(mot), 0
    for p in range(n - m + 1):
        j = 0
        while j < m:
            comp += 1
            if texte[p + j] != mot[j]:
                break
            j += 1
        if j == m:
            return p, comp
    return -1, comp

def horspool(mot, texte):
    n, m, comp = len(texte), len(mot), 0
    saut = {}
    for j in range(m - 1):
        saut[mot[j]] = m - 1 - j               # distance à la fin du mot
    p = 0
    while p <= n - m:
        j = m - 1
        while j >= 0:
            comp += 1
            if texte[p + j] != mot[j]:
                break
            j -= 1
        if j < 0:
            return p, comp
        p += saut.get(texte[p + m - 1], m)     # m si la lettre n'est pas dans le mot
    return -1, comp

texte = "".join(choice("abcdefghijklmnopqrstuvwxyz") for _ in range(20000))
for m in [3, 6, 12, 24]:
    mot = "".join(choice("abcdefghijklmnopqrstuvwxyz") for _ in range(m))
    print(f"mot de {m:2} lettres : naïf {naif(mot, texte)[1]:6} comparaisons, Horspool {horspool(mot, texte)[1]:6}")
{{< /runpython >}}

Le pire cas de Horspool reste de l'ordre de $n\times m$ (le dernier exemple de l'animation le montre). D'autres algorithmes garantissent un coût proportionnel à $n+m$ quoi qu'il arrive, comme celui de Knuth, Morris et Pratt (1977), qui ne relit jamais une lettre du texte. Mais pour des textes ordinaires, les grands sauts de Boyer et Moore font merveille&nbsp;: c'est pourquoi l'outil `grep` des systèmes Unix, qui fouille des fichiers entiers en un clin d'œil, n'examine même pas la plupart des caractères qu'il parcourt.

<div class="encadre prune">
<div class="encadre-titre">Le fichier rockyou</div>

En 2009, l'entreprise RockYou se fait dérober les mots de passe de 32 millions de comptes, stockés en clair. La liste des 14 millions de mots de passe distincts, le fichier `rockyou.txt`, est devenue un outil classique des tests de sécurité&nbsp;: un mot de passe qui y figure se casse en une fraction de seconde. Le premier de la liste, par nombre d'utilisateurs&nbsp;? `123456`.

</div>

## Couper en deux&nbsp;: la dichotomie

Dans un dictionnaire papier, personne ne cherche un mot en lisant toutes les pages depuis la première. On ouvre au milieu, on regarde si le mot cherché vient avant ou après, et l'on recommence dans la bonne moitié. C'est possible parce que les mots sont **triés**&nbsp;: une seule comparaison élimine la moitié des candidats.

{{< youtube-plus id="iP897Z5Nerk" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

Chaque comparaison divisant le nombre de candidats par deux, $k$ comparaisons viennent à bout de $2^k$ éléments&nbsp;: il en faut environ $\log\_2 n$. Pour les 14 millions de mots de passe du fichier rockyou, une fois triés, $24$ comparaisons suffisent, là où la recherche séquentielle peut en demander 14 millions. L'animation fait s'affronter les deux méthodes sur un même tableau trié&nbsp;: on peut choisir la cible en cliquant sur une case.

<div class="anim" data-anim="recherche-duel"></div>
{{< script "js/recherche-duel.js" >}}

### Une boucle plus délicate qu'il n'y paraît

L'idée tient en une phrase&nbsp;; le code demande pourtant une attention extrême. Voici une version qui semble correcte&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from random import randint

def recherche_dicho(L, x):
    g, d = 0, len(L) - 1
    while g < d:
        m = (g + d) // 2
        if x < L[m]:
            d = m - 1
        elif x > L[m]:
            g = m + 1
        else:
            return True
    return False

# On teste sur des listes triées au hasard, en comparant avec « in »
for essai in range(1000):
    L = sorted(randint(1, 10) for _ in range(5))
    x = randint(1, 10)
    if recherche_dicho(L, x) != (x in L):
        print("Contre-exemple :", L, x)
        break
{{< /runpython >}}

Un seul caractère manque&nbsp;: la boucle doit continuer tant que `g <= d`. Avec `g < d`, quand l'intervalle se réduit à une seule case, on sort de la boucle sans l'avoir examinée. Le test automatique ci-dessus, qui confronte la fonction à `in` sur des milliers de cas tirés au hasard, débusque l'erreur en un instant.

<div class="encadre prune">
<div class="encadre-titre">Presque toutes les recherches dichotomiques sont fausses</div>

La recherche dichotomique apparaît dans la littérature en 1946, mais il faut attendre le début des années 1960 pour en lire une version correcte pour toutes les tailles de tableau. Dans les années 1980, Jon Bentley demande à des programmeurs professionnels de l'écrire, avec deux heures devant eux&nbsp;: environ 90&nbsp;% des programmes rendus contiennent une erreur.

En 2006, Joshua Bloch, chez Google, révèle que la recherche dichotomique de la bibliothèque standard de Java, écrite d'après une version prouvée correcte, est fausse depuis près de dix ans. En cause, la ligne `m = (g + d) / 2`&nbsp;: pour des tableaux de plus d'un milliard d'éléments, la somme `g + d` dépasse le plus grand entier représentable sur 32 bits et devient négative. Le correctif s'écrit `m = g + (d - g) / 2`. Python, dont les entiers n'ont pas de taille limite, est à l'abri de ce piège.

</div>

### Impossible de faire mieux… en comparant

Un algorithme qui ne procède que par comparaisons peut se dessiner comme un **arbre de décision**&nbsp;: chaque comparaison est un embranchement à deux issues, et chaque feuille une réponse. Pour pouvoir désigner n'importe laquelle des $n$ cases, il faut au moins $n$ feuilles, donc un arbre de hauteur au moins $\log\_2 n$. Aucun algorithme fondé sur des comparaisons ne peut battre la dichotomie dans le pire cas. Pour aller plus vite, il faudra cesser de comparer&nbsp;: c'est l'idée du hachage, plus bas.

## La racine d'une équation

La dichotomie ne cherche pas seulement dans des tableaux. Une fonction continue $f$ qui change de signe entre $a$ et $b$ s'annule entre les deux (c'est le théorème des valeurs intermédiaires). On évalue $f$ au milieu $m$ de l'intervalle, et l'on garde la moitié où le changement de signe persiste.

<div class="anim" data-anim="bissection"></div>
{{< script "js/bissection.js" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def racine(f, a, b, eps):
    assert f(a) * f(b) < 0, "pas de changement de signe sur [a, b]"
    etapes = 0
    while b - a > eps:
        m = (a + b) / 2
        if f(a) * f(m) <= 0:
            b = m
        else:
            a = m
        etapes += 1
    return (a + b) / 2, etapes

for eps in [1e-3, 1e-6, 1e-9, 1e-12]:
    r, k = racine(lambda x: x ** 2 - 2, 1, 2, eps)
    print(f"précision {eps:.0e} : {r:.13f} en {k} étapes")
{{< /runpython >}}

Chaque étape divise l'intervalle par deux&nbsp;: elle apporte un chiffre **binaire** de plus. Comme $2^{10}\approx 10^3$, il faut environ $3{,}3$ étapes par chiffre décimal, quelle que soit la fonction. C'est lent mais d'une robustesse à toute épreuve. La méthode de Newton, qui suit la tangente plutôt que de couper au milieu, double le nombre de chiffres exacts à chaque étape quand elle part assez près de la racine&nbsp;; mais elle peut aussi s'égarer, là où la dichotomie ne se trompe jamais.

## Trouver sans chercher&nbsp;: le hachage

Pour compter les occurrences d'entiers compris entre $0$ et $n-1$, nul besoin de chercher&nbsp;: on réserve un tableau de $n$ cases, et l'entier $k$ est rangé dans la case $k$. Retrouver un élément ne coûte alors qu'un accès, quel que soit le nombre d'éléments. Le **hachage** étend cette idée à n'importe quelle clé, un mot par exemple&nbsp;: une **fonction de hachage** $h$ transforme la clé en un grand entier, et l'on range la clé dans la case $h(\text{clé})\bmod m$ d'un tableau de $m$ cases.

Deux clés peuvent tomber dans la même case&nbsp;: c'est une **collision**. On range alors les clés d'une même case dans une petite liste. Tout l'enjeu est que ces listes restent courtes, ce qui demande deux choses&nbsp;: une fonction de hachage qui disperse bien les clés, et un tableau qui grandit avec elles. Quand il y a plus de clés que de cases, on double la taille du tableau et l'on range chaque clé de nouveau. Ce grand ménage coûte cher, mais il est si rare qu'en moyenne chaque ajout reste rapide.

<div class="anim" data-anim="hachage"></div>
{{< script "js/hachage.js" >}}

Les dictionnaires et les ensembles de Python sont des tables de hachage. Tester `x in d` sur un dictionnaire coûte en moyenne un temps constant, quel que soit le nombre de clés, là où `x in L` sur une liste en coûte un proportionnel à sa longueur. C'est ce qui permet, sur la page [Complexité](../complexite/#barreau-3-se-souvenir-de-ce-quon-a-vu), de trouver un doublon en un seul passage.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def h(mot):                                   # hachage polynomial
    v = 0
    for c in mot:
        v = (v * 31 + ord(c)) % 2 ** 32
    return v

def ajouter(table, mot):
    case = table[h(mot) % len(table)]
    if mot not in case:                       # quelques comparaisons, pas plus
        case.append(mot)

def contient(table, mot):
    return mot in table[h(mot) % len(table)]

table = [[] for _ in range(16)]
for mot in "le chat dort sur le tapis pendant que le chien garde la maison".split():
    ajouter(table, mot)
print(contient(table, "chien"), contient(table, "loup"))
print("longueurs des listes :", [len(case) for case in table])
{{< /runpython >}}

<div class="encadre bleu">
<div class="encadre-titre">Les collisions arrivent plus tôt qu'on ne croit</div>

Dans une classe de $23$ élèves, la probabilité que deux d'entre eux soient nés le même jour dépasse $50\\,\\%$&nbsp;: c'est le **paradoxe des anniversaires**. Avec $365$ cases, les collisions apparaissent dès une vingtaine de clés, bien avant que la table soit pleine. On ne peut donc pas les éviter&nbsp;: on doit les gérer.

Elles peuvent même servir d'arme. En 2011, deux chercheurs montrent qu'en envoyant à un serveur web des milliers de clés soigneusement choisies pour tomber dans la même case, on transforme chaque recherche en parcours d'une longue liste, et l'on paralyse le serveur. Depuis, Python tire au hasard, à chaque lancement, un paramètre secret de sa fonction de hachage des chaînes&nbsp;: un attaquant ne peut plus prévoir les collisions.

</div>

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
p = 1.0                                       # probabilité que les dates soient toutes différentes
for k in range(1, 61):
    p *= (365 - (k - 1)) / 365
    if k in (10, 20, 23, 30, 40, 50, 60):
        print(f"{k} personnes : probabilité d'une date commune = {1 - p:.1%}")
{{< /runpython >}}

<div class="encadre prune">
<div class="encadre-titre">Une idée née chez IBM</div>

Le hachage est imaginé en 1953 par Hans Peter Luhn, ingénieur chez IBM, à qui l'on doit aussi la «&nbsp;formule de Luhn&nbsp;», qui vérifie aujourd'hui encore les numéros de carte bancaire. Le mot anglais *hash* désigne un hachis&nbsp;: on hache la clé en morceaux et on les mélange, pour que des clés voisines atterrissent dans des cases éloignées.

</div>

## Poser les bonnes questions

Au jeu des vingt questions, il faut deviner un objet en posant des questions auxquelles on répond par oui ou par non. La meilleure question coupe l'ensemble des possibilités en deux parts égales&nbsp;: c'est la dichotomie, et $20$ questions départagent $2^{20}$, soit un million de possibilités. En 1948, Claude Shannon fait de cette idée une mesure&nbsp;: l'**information** apportée par une réponse se compte en **bits**, et une réponse qui divise les possibilités par deux en apporte exactement un.

Quand les réponses sont plus riches qu'un oui ou un non, une seule question peut apporter plusieurs bits. Au jeu du mot mystère, popularisé par Wordle en 2021, chaque essai renvoie une couleur pour chacune des cinq lettres&nbsp;: vert si elle est bien placée, jaune si elle figure ailleurs dans le mot, gris si elle est absente. Il y a $3^5=243$ réponses possibles, donc jusqu'à $\log\_2 243\approx 7{,}9$ bits par essai. Le meilleur essai n'est pas forcément un mot possible&nbsp;: c'est celui dont les réponses se répartissent le plus uniformément, celui qui apporte en moyenne le plus d'information. Cette moyenne s'appelle l'**entropie**&nbsp;: si la réponse $r$ survient avec la probabilité $p\_r$, elle vaut $\sum\_r p\_r\log\_2(1/p\_r)$.

<div class="anim" data-anim="mot-mystere"></div>
{{< script "js/mot-mystere.js" >}}

Le mot mystère est tiré parmi les $1\\,500$ mots de cinq lettres les plus courants, soit $10{,}6$ bits d'incertitude au départ, et les essais peuvent être n'importe lequel des $5\\,891$ mots du dictionnaire. L'ordinateur qui joue à chaque fois le coup d'entropie maximale ouvre avec «&nbsp;tarie&nbsp;», qui apporte en moyenne $6{,}2$ bits&nbsp;; il trouve le mot en $3{,}3$ essais en moyenne, et jamais en plus de $5$.

<p class="legende">Mots acceptés&nbsp;: liste <a href="https://github.com/words/an-array-of-french-words">an-array-of-french-words</a> (licence MIT)&nbsp;; mots mystères choisis d'après les fréquences de <a href="https://github.com/rspeer/wordfreq">wordfreq</a>.</p>

{{< youtube-plus id="v68zYyaEmEA" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from math import log2

def motif(essai, solution):                   # 2 : vert, 1 : jaune, 0 : gris
    r = [0] * 5
    reste = []
    for i in range(5):
        if essai[i] == solution[i]:
            r[i] = 2
        else:
            reste.append(solution[i])
    for i in range(5):
        if r[i] == 0 and essai[i] in reste:
            r[i] = 1
            reste.remove(essai[i])
    return tuple(r)

def entropie(essai, possibles):
    effectifs = {}
    for s in possibles:
        k = motif(essai, s)
        effectifs[k] = effectifs.get(k, 0) + 1
    n = len(possibles)
    return sum(c / n * log2(n / c) for c in effectifs.values())

mots = """arbre avion balle blanc boire chant chien clair corde crane danse droit fable
fleur foret frite glace grand herbe livre lourd melon monde neige ocean orage piano
plage pluie pomme porte route sable sucre table tigre train verre ville zebre""".split()
classement = sorted(mots, key=lambda e: entropie(e, mots), reverse=True)
for e in classement[:5]:
    print(e, f"{entropie(e, mots):.2f} bits")
{{< /runpython >}}

Chercher, au fond, c'est toujours réduire une incertitude. La recherche séquentielle n'élimine qu'un candidat par question&nbsp;; la dichotomie en élimine la moitié, et ne peut pas faire mieux avec des réponses binaires&nbsp;; le hachage pose une question dont la réponse, l'adresse de la case, contient d'un coup presque toute l'information.
