+++
title = "Les nombres en machine"
date = 2026-11-19T18:00:00+01:00
weight = 10
chapter = false
css = "algo.css"
+++

# Les nombres en machine

Dans une machine, tout s'écrit avec des $0$ et des $1$, et chaque nombre dispose d'un nombre fixé de chiffres, le plus souvent $64$. Cette contrainte suffit à expliquer des comportements déroutants&nbsp;: en Python, `0.1 + 0.2` ne vaut pas `0.3`, et ailleurs, ajouter $1$ à un grand nombre positif peut donner un nombre négatif. Ce sont aussi les causes d'accidents bien réels.

## Compter en base 2

Dans l'écriture décimale $301$, le chiffre $3$ vaut trois centaines&nbsp;: la valeur d'un chiffre dépend de sa position, et chaque rang vaut dix fois le précédent. En base $b$, chaque rang vaut $b$ fois le précédent, et l'écriture $(a\_n \cdots a\_1 a\_0)\_b$ désigne le nombre

$$ a\_n b^n + \cdots + a\_1 b + a\_0 = \sum\_{i=0}^{n} a\_i\\, b^i, \qquad 0 \leqslant a\_i < b. $$

En **base 2**, il n'y a que deux chiffres, $0$ et $1$, et chaque rang vaut le double du précédent&nbsp;: $301 = 256 + 32 + 8 + 4 + 1$ s'écrit $(100101101)\_2$. C'est la base des machines, faites de composants qui n'ont que deux états, et chaque chiffre binaire est un **bit**. Huit bits forment un **octet**.

<div class="anim" data-anim="bits"></div>

Pour lire une écriture en base $b$, on peut calculer chaque puissance de $b$, mais la **méthode de Horner** est plus économe&nbsp;: on lit les chiffres de gauche à droite, et à chaque nouveau chiffre on multiplie ce qu'on a par $b$ avant de l'ajouter, puisque $a\_2 b^2 + a\_1 b + a\_0 = (a\_2 b + a\_1) b + a\_0$. Pour écrire un nombre en base $b$, on fait l'inverse&nbsp;: le reste de la division par $b$ donne le dernier chiffre, le quotient donne les autres.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def vers_decimal(chiffres, b):
    """Méthode de Horner : chiffres est une chaîne, par exemple '100101101'."""
    n = 0
    for c in chiffres:
        n = n * b + int(c)
    return n

def vers_base(n, b):
    """Divisions successives : chaque reste donne un chiffre, de droite à gauche."""
    if n == 0:
        return "0"
    chiffres = ""
    while n > 0:
        chiffres = str(n % b) + chiffres
        n = n // b
    return chiffres

print(vers_decimal("100101101", 2), int("100101101", 2))
print(vers_base(301, 2), bin(301))
print(vers_base(301, 3))
{{< /runpython >}}

Les écritures binaires sont longues. Comme $16 = 2^4$, un paquet de quatre bits correspond exactement à un chiffre en **base 16**, ou hexadécimal, dont les chiffres sont $0, 1, \ldots, 9$, puis $\text{A}$ pour $10$ jusqu'à $\text{F}$ pour $15$. Un octet s'écrit donc avec deux chiffres hexadécimaux, ce qui rend cette base omniprésente&nbsp;: adresses mémoire, adresses MAC des cartes réseau, codes des couleurs, dont chacune est faite de trois octets pour le rouge, le vert et le bleu.

<div class="anim" data-anim="couleur"></div>
{{< script "js/bases.js" >}}

## Les entiers

### Entiers naturels

Avec $n$ bits, on écrit tous les entiers de $0$ à $2^n - 1$&nbsp;: de $0$ à $255$ avec un octet, de $0$ à $2^{64} - 1 \approx 1{,}8 \times 10^{19}$ avec $64$ bits. Ajouter $1$ au plus grand d'entre eux demanderait un bit de plus, qui n'existe pas&nbsp;: comme un compteur kilométrique, le résultat revient à $0$.

### Entiers relatifs&nbsp;: le complément à deux

Pour les négatifs, l'idée la plus simple est de réserver le premier bit au signe. Elle a deux défauts&nbsp;: $0$ a deux écritures, $+0$ et $-0$, et l'addition ordinaire ne marche plus. Sur $4$ bits, $3$ s'écrirait `0011` et $-3$ s'écrirait `1011`, dont la somme posée en binaire donne `1110`, soit $-6$.

Les machines utilisent le **complément à deux**, qui part de l'addition. Sur $4$ bits, `1111 + 0001` donne `10000`&nbsp;; le cinquième bit n'existe pas, il reste `0000`. Puisque `1111` plus $1$ donne $0$, il est naturel de décider que `1111` représente $-1$. De même, `1110` représente $-2$, et ainsi de suite jusqu'à `1000`, qui représente $-8$. Sur $n$ bits, les mots qui commencent par $0$ représentent les entiers de $0$ à $2^{n-1} - 1$, ceux qui commencent par $1$ les entiers de $-2^{n-1}$ à $-1$&nbsp;: le premier bit indique toujours le signe, $0$ n'a qu'une écriture, et l'addition posée habituellement donne le bon résultat, sans aucun circuit spécial pour les négatifs.

<div class="anim" data-anim="cercle"></div>
{{< script "js/cercle.js" >}}

Le cercle montre aussi le revers du procédé. Sur $4$ bits, $5 + 7$ donne `1100`, c'est-à-dire $-4$&nbsp;: le vrai résultat, $12$, ne tient pas sur $4$ bits. C'est un **dépassement de capacité** (*overflow*), et le processeur ne s'arrête pas pour autant&nbsp;: il continue avec une valeur fausse.

### Quand le compteur fait le tour

Les dépassements de capacité ont causé bien des pannes, souvent longtemps après la mise en service, quand un compteur finit par faire le tour du cercle.

- En 2015, l'autorité américaine de l'aviation civile ordonne de redémarrer régulièrement les générateurs électriques des Boeing 787&nbsp;: après $248$ jours de fonctionnement sans interruption, un compteur de centièmes de seconde, sur $32$ bits signés, dépasse $2^{31} - 1$ et les générateurs se mettent en sécurité, même en vol.
- En 2004, les contrôleurs aériens du sud de la Californie perdent pendant trois heures le contact radio avec quelque $400$ avions. Le système de communication devait être redémarré tous les $30$ jours&nbsp;: un compteur de millisecondes sur $32$ bits faisait le tour au bout d'environ $49{,}7$ jours, et le redémarrage avait été oublié.
- En 2014, la vidéo *Gangnam Style* dépasse $2\\,147\\,483\\,647$ vues, la limite d'un entier signé de $32$ bits, et YouTube doit passer ses compteurs à $64$ bits.
- Beaucoup de systèmes comptent le temps en secondes écoulées depuis le 1<sup>er</sup> janvier 1970. Sur $32$ bits signés, ce compteur atteindra sa limite le 19 janvier 2038&nbsp;: c'est le **bug de l'an 2038**.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
from datetime import datetime, timedelta

print("2^31 centièmes de seconde :", 2**31 / 100 / 86400, "jours")
print("2^32 millièmes de seconde :", 2**32 / 1000 / 86400, "jours")
print("2^31 - 1 secondes après 1970 :", datetime(1970, 1, 1) + timedelta(seconds=2**31 - 1))

# Les entiers de Python n'ont pas de taille fixée : ils grandissent tant qu'il y a de la mémoire
print(2**100)

# Ceux de numpy, si : int32 est un entier signé sur 32 bits
import numpy as np
compteur = np.array([2**31 - 1], dtype=np.int32)
print(compteur, "+ 1 =", compteur + 1)
{{< /runpython >}}

Python cache le problème&nbsp;: ses entiers s'allongent autant que nécessaire, au prix de calculs plus lents sur les très grands nombres. Mais les bibliothèques de calcul comme numpy, et la plupart des autres langages, utilisent des entiers de taille fixe. C'est aussi un dépassement qui a détruit la fusée [Ariane 501](../prouver/#la-preuve-formelle)&nbsp;: une vitesse convertie en un entier de $16$ bits, qui ne pouvait pas dépasser $32\\,767$.

Une image en donne une illustration très visible. Une photo en couleurs est un tableau de pixels, chacun fait de trois octets, pour le rouge, le vert et le bleu&nbsp;: c'est une image en **24 bits**, qui peut afficher $256^3$ couleurs. Les bibliothèques de traitement d'images la rangent dans un tableau numpy d'entiers `uint8`, sans signe et sur un octet. Réduisons-la à **6 bits**, deux par couleur&nbsp;: chaque valeur de $0$ à $255$ doit être remplacée par l'un de quatre niveaux, un par intervalle de $64$. Encore faut-il choisir lesquels, et faire le calcul sans sortir d'un octet.

<div class="anim" data-anim="image6bits" data-src="/larochelle.jpg"></div>
{{< script "js/image6bits.js" >}}
<p class="legende">Le port de La Rochelle. Faire glisser le curseur pour comparer l'image d'origine et l'image convertie, cliquer sur un pixel pour suivre le calcul en binaire.</p>

Le dépassement ne se voit pas dans le code, qui paraît juste, mais il saute aux yeux sur l'image. Pour l'éviter, il suffit ici de choisir un calcul qui reste dans les bornes, ou de convertir d'abord le tableau en entiers de 16 bits, avec `image.astype(np.uint16)`, avant de le ramener à 8 bits une fois le calcul fini.

## Les nombres à virgule

### Une écriture finie ou infinie

Après la virgule, les rangs binaires valent $\frac{1}{2}$, $\frac{1}{4}$, $\frac{1}{8}$, etc. Ainsi $0{,}625 = \frac{1}{2} + \frac{1}{8}$ s'écrit $(0{,}101)\_2$. Pour obtenir ces chiffres, on multiplie par $2$&nbsp;: la partie entière du résultat donne le chiffre suivant, et l'on recommence avec la partie fractionnaire.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
def binaire_apres_virgule(x, chiffres):
    """Écriture binaire de x, compris entre 0 et 1, avec le nombre de chiffres demandé."""
    s = "0,"
    for _ in range(chiffres):
        x = 2 * x
        if x >= 1:
            s += "1"
            x = x - 1
        else:
            s += "0"
    return s

print(binaire_apres_virgule(0.625, 8))
print(binaire_apres_virgule(0.1, 40))
{{< /runpython >}}

En décimal, $\frac{1}{3} = 0{,}333\ldots$ n'a pas d'écriture finie&nbsp;: seules les fractions dont le dénominateur ne contient que des facteurs $2$ et $5$ en ont une. En binaire, seules celles dont le dénominateur est une puissance de $2$ en ont une. Or $0{,}1 = \frac{1}{10}$, et $10 = 2 \times 5$&nbsp;: en binaire, $0{,}1$ s'écrit $(0{,}0\overline{0011})\_2$, avec le motif $0011$ répété indéfiniment. Une machine ne peut en garder qu'un nombre fini de chiffres&nbsp;: le nombre $0{,}1$ n'existe pas en machine, seule une approximation existe.

### La virgule flottante

Les physiciens écrivent la masse d'un électron $9{,}109 \times 10^{-31}$ kg et la distance de la Terre au Soleil $1{,}496 \times 10^{11}$ m&nbsp;: un nombre de chiffres significatifs fixé, et une puissance de dix qui fait «&nbsp;flotter&nbsp;» la virgule. La machine fait de même en base 2. Un nombre non nul s'écrit $\pm\, 1{,}f \times 2^e$, où la **mantisse** $1{,}f$ commence toujours par $1$, suivi d'un nombre fixé de chiffres binaires, et où l'**exposant** $e$ est un entier.

Avec un nombre fixé de chiffres, les nombres représentables ne sont pas régulièrement répartis. Entre $1$ et $2$, entre $2$ et $4$, entre $4$ et $8$, il y en a toujours autant, donc de plus en plus espacés. Le format ci-dessous, minuscule, n'a que quelques chiffres de mantisse&nbsp;:

<div class="anim" data-anim="droite-flottants"></div>

L'écart absolu entre deux nombres voisins grandit avec eux, mais l'écart **relatif** reste à peu près constant&nbsp;: un nombre est toujours connu avec le même nombre de chiffres significatifs, qu'il s'agisse d'une masse d'électron ou d'une distance astronomique.

La norme **IEEE 754**, adoptée en 1985 sous l'impulsion de William Kahan, fixe les formats utilisés par presque toutes les machines. Le plus courant, la **double précision**, utilisé par les `float` de Python, occupe $64$ bits&nbsp;:

- $1$ bit de **signe**&nbsp;;
- $11$ bits d'**exposant**, auquel on ajoute $1023$ pour ne stocker que des entiers positifs&nbsp;: c'est le **biais**&nbsp;;
- $52$ bits de **mantisse**, pour les chiffres après la virgule. Le $1$ avant la virgule, toujours présent, n'est pas stocké&nbsp;: c'est le **bit caché**, qui donne $53$ chiffres binaires significatifs, soit environ $16$ chiffres décimaux.

Les exposants extrêmes sont réservés&nbsp;: tous les bits à $0$ pour zéro et pour des nombres minuscules dits **dénormalisés**, tous les bits à $1$ pour l'infini et pour `NaN` (*not a number*), le résultat d'une opération impossible.

<div class="anim" data-anim="ieee754"></div>
{{< script "js/flottants.js" >}}

Le nombre stocké pour `0.1` vaut exactement <span class="nombre-long">0,1000000000000000055511151231257827021181583404541015625</span>. Python l'affiche `0.1`, parce que c'est la plus courte écriture décimale qui redonne ce flottant, mais c'est bien ce nombre-là qui entre dans les calculs.

### Les pièges

Chaque opération sur des flottants produit un résultat exact, aussitôt arrondi au flottant le plus proche. L'erreur relative de chaque arrondi est minuscule, au plus $2^{-53} \approx 1{,}1 \times 10^{-16}$, mais elle a des conséquences visibles.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
import math, sys

# 0.1, 0.2 et 0.3 sont tous arrondis, et pas de la même façon
print(0.1 + 0.2, 0.1 + 0.2 == 0.3)
print(math.isclose(0.1 + 0.2, 0.3))     # la bonne façon de comparer deux flottants

# L'ordre des opérations compte
print((0.1 + 0.2) + 0.3, 0.1 + (0.2 + 0.3))
s = 0
for _ in range(10):
    s = s + 0.1
print(s, math.fsum([0.1] * 10))

# Absorption : un nombre trop petit devant l'autre disparaît
print(2.0**53 + 1 == 2.0**53)
print((1e16 + 1) - 1e16)

# Les limites du format
print(sys.float_info.max, sys.float_info.max * 10, sys.float_info.max * 10 - sys.float_info.max * 10)
print(sys.float_info.epsilon)           # écart entre 1 et le flottant suivant
{{< /runpython >}}

- **Ne jamais tester l'égalité de deux flottants**&nbsp;: deux calculs mathématiquement égaux peuvent différer d'un arrondi. On vérifie plutôt qu'ils sont proches, avec `math.isclose` ou une tolérance choisie.
- **L'addition n'est plus associative**&nbsp;: $(a + b) + c$ et $a + (b + c)$ peuvent différer. Ajouter dix fois $0{,}1$ ne donne pas exactement $1$&nbsp;; la fonction `math.fsum` compense les erreurs d'arrondi, et depuis Python 3.12, `sum` le fait aussi pour les flottants.
- **Un petit nombre peut être absorbé par un grand**&nbsp;: au-delà de $2^{53}$, l'écart entre deux flottants voisins dépasse $1$, et ajouter $1$ ne change plus rien. La boucle suivante, qui serait infinie avec des nombres réels, s'arrête donc&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
x, n = 1.0, 0
while x + 1 != x:
    x = 2 * x
    n = n + 1
print("x + 1 == x pour x = 2 **", n, "=", x)
{{< /runpython >}}

- **Soustraire deux nombres proches détruit les chiffres significatifs**&nbsp;: c'est la **compensation catastrophique**. Pour $x$ petit, $1 - \cos x$ est très proche de $0$, et les chiffres exacts de $\cos x$ se perdent dans la soustraction. Une autre écriture de la même quantité évite le problème&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from math import cos, sin

# (1 - cos x) / x² tend vers 1/2 quand x tend vers 0
for x in [1e-2, 1e-4, 1e-6, 1e-8]:
    naif = (1 - cos(x)) / x**2
    stable = 2 * sin(x / 2)**2 / x**2       # même quantité, puisque 1 - cos x = 2 sin²(x/2)
    print(f"x = {x:.0e}   formule directe : {naif:.10f}   formule réécrite : {stable:.10f}")
{{< /runpython >}}

### Quand les erreurs s'accumulent

Le 25 février 1991, pendant la guerre du Golfe, une batterie de missiles antimissiles Patriot ne parvient pas à intercepter un missile Scud, qui tue $28$ soldats américains à Dhahran, en Arabie saoudite. L'horloge de la batterie comptait le temps en dixièmes de seconde, et le logiciel multipliait ce compteur par $0{,}1$, stocké en virgule fixe sur $24$ bits. L'erreur sur $0{,}1$, inférieure à un dix-millionième, s'ajoutait à chaque top d'horloge. La batterie fonctionnait sans interruption depuis une centaine d'heures.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
z = int(0.1 * 2**23) / 2**23            # 0,1 tronqué à 23 chiffres binaires après la virgule
erreur = 0.1 - z
print("0,1 est stocké comme", z, "- erreur :", erreur)

tops = 100 * 3600 * 10                  # dixièmes de seconde en 100 heures
print("dérive de l'horloge après 100 h :", tops * erreur, "s")
print("distance parcourue par un Scud pendant ce temps :", 1676 * tops * erreur, "m")
{{< /runpython >}}

Un tiers de seconde de décalage, et le radar cherchait le missile à plus d'un demi-kilomètre de sa position réelle. Le correctif, qui était connu, est arrivé le lendemain.

Les arrondis faussent aussi les calculs lents et réguliers. En 1982, la Bourse de Vancouver crée un nouvel indice, fixé à $1\\,000$. Il est recalculé des milliers de fois par jour, et chaque résultat est **tronqué** à trois décimales au lieu d'être arrondi&nbsp;: la troncature fait perdre en moyenne un demi-millième à chaque calcul, toujours dans le même sens. Vingt-deux mois plus tard, l'indice affiche environ $525$, alors que sa vraie valeur dépasse $1\\,098$.

### Calculer juste malgré tout

Les flottants restent le bon outil pour la physique et l'ingénierie, où les données sont elles-mêmes des mesures approchées, à condition de garder ces pièges en tête. Quand l'exactitude est indispensable, Python offre d'autres représentations, plus lentes&nbsp;: les entiers, d'abord, qui sont exacts&nbsp;; les fractions du module `fractions`, qui calculent exactement avec des rationnels&nbsp;; et le module `decimal`, qui calcule en base 10 avec la précision choisie, comme l'exigent les calculs monétaires.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
from fractions import Fraction
from decimal import Decimal

print(Fraction(1, 10) + Fraction(2, 10) == Fraction(3, 10))
print(Decimal("0.1") + Decimal("0.2"))
print(Fraction(0.1))                    # la fraction exacte que représente le flottant 0.1
{{< /runpython >}}
