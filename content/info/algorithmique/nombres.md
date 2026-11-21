+++
title = "Les nombres en machine"
date = 2026-11-19T18:00:00+01:00
weight = 10
chapter = false
css = "algo.css"
+++

# Les nombres en machine

Dans une machine, tout s'écrit avec des $\color{#2563EB}{0}$ et des $\color{#2563EB}{1}$, et chaque nombre dispose d'un nombre fixé de chiffres, le plus souvent $64$. Cette seule contrainte explique des comportements déroutants&nbsp;: en Python, `0.1 + 0.2` ne vaut pas `0.3`, et ailleurs, ajouter $1$ à un grand nombre positif peut donner un nombre négatif. Elle est aussi à l'origine de quelques-uns des bugs les plus célèbres, et les plus coûteux, de l'histoire de l'informatique.

## Compter en base 2

### La valeur d'un chiffre dépend de sa place

Dans l'écriture décimale $301$, le chiffre $3$ vaut trois centaines, le $1$ une seule unité&nbsp;: chaque rang vaut dix fois le précédent. En **base 2**, il n'y a que deux chiffres, $0$ et $1$, et chaque rang vaut le **double** du précédent. Le même nombre $301$ s'écrit alors $(100101101)\_2$&nbsp;: il suffit d'additionner les poids des rangs qui portent un $1$.

<div class="nb-fig">
<div class="nb-ligne"><span class="nb-lab">base 10</span><span class="nb-t dec"><b>3</b><small>×100</small></span><span class="nb-t dec"><b>0</b><small>×10</small></span><span class="nb-t dec"><b>1</b><small>×1</small></span></div>
<div class="nb-somme"><span class="or">3</span>×100 + <span class="or">0</span>×10 + <span class="or">1</span>×1 = 301</div>
<div class="nb-ligne" style="margin-top:0.9em"><span class="nb-lab">base 2</span><span class="nb-t on"><b>1</b><small>256</small></span><span class="nb-t"><b>0</b><small>128</small></span><span class="nb-t"><b>0</b><small>64</small></span><span class="nb-t on"><b>1</b><small>32</small></span><span class="nb-t"><b>0</b><small>16</small></span><span class="nb-t on"><b>1</b><small>8</small></span><span class="nb-t on"><b>1</b><small>4</small></span><span class="nb-t"><b>0</b><small>2</small></span><span class="nb-t on"><b>1</b><small>1</small></span></div>
<div class="nb-somme"><span class="bl">256</span> + <span class="bl">32</span> + <span class="bl">8</span> + <span class="bl">4</span> + <span class="bl">1</span> = 301</div>
<p class="nb-leg">Sous chaque chiffre, son poids&nbsp;: une puissance de 10 en décimal, une puissance de 2 en binaire.</p>
</div>

En base $b$, l'écriture $(a\_n \cdots a\_1 a\_0)\_b$, où chaque chiffre vérifie $0 \leqslant a\_i < b$, désigne le nombre

$$ a\_n b^n + \cdots + a\_1 b + a\_0 = \sum\_{i=0}^{n} a\_i\\, b^i. $$

La base 2 est celle des machines, faites de composants qui n'ont que deux états, passant ou bloqué, chargé ou déchargé. Chaque chiffre binaire est un **bit** (*binary digit*), et huit bits forment un **octet**. On peut basculer ci-dessous chaque bit d'un clic&nbsp;:

<div class="anim" data-anim="bits"></div>

### Passer d'une base à l'autre

Pour écrire un nombre en base 2, on le divise par $2$&nbsp;: le **reste** est le dernier chiffre, et l'on recommence avec le quotient. Les restes, lus de bas en haut, donnent l'écriture binaire.

<div class="nb-fig">
<div class="nb-flux">
<table class="nb-div">
<tr><td>301 = 2 × 150 +</td><td class="nb-r"><span>1</span></td></tr>
<tr><td>150 = 2 × 75 +</td><td class="nb-r"><span class="z">0</span></td></tr>
<tr><td>75 = 2 × 37 +</td><td class="nb-r"><span>1</span></td></tr>
<tr><td>37 = 2 × 18 +</td><td class="nb-r"><span>1</span></td></tr>
<tr><td>18 = 2 × 9 +</td><td class="nb-r"><span class="z">0</span></td></tr>
<tr><td>9 = 2 × 4 +</td><td class="nb-r"><span>1</span></td></tr>
<tr><td>4 = 2 × 2 +</td><td class="nb-r"><span class="z">0</span></td></tr>
<tr><td>2 = 2 × 1 +</td><td class="nb-r"><span class="z">0</span></td></tr>
<tr><td>1 = 2 × 0 +</td><td class="nb-r"><span>1</span></td></tr>
</table>
<span class="nb-lire">lire de bas en haut ↑</span>
<span class="nb-resultat">301 = (100101101)<sub>2</sub></span>
</div>
</div>

Pour revenir en décimal, la **méthode de Horner** évite de calculer les puissances&nbsp;: on lit les chiffres de gauche à droite, et à chaque nouveau chiffre on double ce qu'on a avant de l'ajouter, puisque $a\_2 \cdot 4 + a\_1 \cdot 2 + a\_0 = (a\_2 \cdot 2 + a\_1) \cdot 2 + a\_0$.

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

### L'hexadécimal

Les écritures binaires sont longues. Comme $16 = 2^4$, un paquet de **quatre bits** correspond exactement à un chiffre en **base 16**, ou hexadécimal, dont les chiffres sont $0$ à $9$, puis $\text{A}$ pour $10$, jusqu'à $\text{F}$ pour $15$. Pour passer du binaire à l'hexadécimal, il suffit de grouper les bits par quatre, en partant de la droite&nbsp;:

<div class="nb-fig">
<div class="nb-hex">
<div class="nb-paquet p0"><span class="nb-bits">1100</span><span class="nb-fleche">↓</span><span class="nb-hexa">C</span></div>
<div class="nb-paquet p1"><span class="nb-bits">0111</span><span class="nb-fleche">↓</span><span class="nb-hexa">7</span></div>
<div class="nb-paquet p2"><span class="nb-bits">1110</span><span class="nb-fleche">↓</span><span class="nb-hexa">E</span></div>
<div class="nb-paquet p3"><span class="nb-bits">1011</span><span class="nb-fleche">↓</span><span class="nb-hexa">B</span></div>
</div>
<p class="nb-leg">$(1100\,0111\,1110\,1011)_2 = (\text{C7EB})_{16} = 51\,179$&nbsp;: seize bits, quatre chiffres hexadécimaux.</p>
</div>

Un octet s'écrit donc avec exactement deux chiffres hexadécimaux, de `00` à `FF`, ce qui rend cette base omniprésente&nbsp;: adresses mémoire, adresses des cartes réseau, codes des couleurs. Une couleur d'écran est faite de trois octets, pour le rouge, le vert et le bleu&nbsp;:

<div class="anim" data-anim="couleur"></div>
{{< script "js/bases.js" >}}

### Le code de Gray

L'écriture binaire n'est pas la seule façon de coder des entiers avec des bits. Un **codeur rotatif**, qui mesure l'angle d'un axe, porte un disque découpé en anneaux, un par bit, lus par des capteurs alignés. En binaire naturel, passer de $3 = (011)\_2$ à $4 = (100)\_2$ fait changer **trois bits à la fois**. Les capteurs ne basculent jamais exactement au même instant&nbsp;: pendant une fraction de seconde, la lecture peut donner $(111)\_2 = 7$ ou $(000)\_2 = 0$, très loin de la vraie position.

Le **code de Gray** range les entiers de sorte que deux entiers consécutifs ne diffèrent que d'**un seul bit**. Une lecture prise pendant une transition donne alors l'une des deux positions voisines, jamais une position aberrante.

<div class="anim" data-anim="gray"></div>
{{< script "js/gray.js" >}}

Le code de Gray se construit par **réflexion**&nbsp;: on écrit la liste à $n$ bits, puis la même liste à l'envers, comme dans un miroir&nbsp;; on ajoute un $\color{#2563EB}{0}$ devant la première moitié et un $\color{#DB2777}{1}$ devant la seconde. Deux codes voisins diffèrent toujours d'un bit, y compris à la jonction des deux moitiés, et entre le dernier et le premier.

<div class="nb-fig">
<table class="nb-tab">
<tr><th>1 bit</th><th>2 bits</th><th>3 bits</th></tr>
<tr><td>0</td><td><span class="nb-ch bl">0</span>0</td><td><span class="nb-ch bl">0</span>00</td></tr>
<tr><td>1</td><td><span class="nb-ch bl">0</span>1</td><td><span class="nb-ch bl">0</span>01</td></tr>
<tr><td></td><td><span class="nb-ch rg" style="color:#DB2777">1</span>1</td><td><span class="nb-ch bl">0</span>11</td></tr>
<tr><td></td><td><span class="nb-ch rg" style="color:#DB2777">1</span>0</td><td><span class="nb-ch bl">0</span>10</td></tr>
<tr><td></td><td></td><td><span class="nb-ch" style="color:#DB2777">1</span>10</td></tr>
<tr><td></td><td></td><td><span class="nb-ch" style="color:#DB2777">1</span>11</td></tr>
<tr><td></td><td></td><td><span class="nb-ch" style="color:#DB2777">1</span>01</td></tr>
<tr><td></td><td></td><td><span class="nb-ch" style="color:#DB2777">1</span>00</td></tr>
</table>
<p class="nb-leg">La seconde moitié de chaque colonne est la colonne précédente lue à l'envers, précédée d'un 1.</p>
</div>

Il existe aussi une formule directe&nbsp;: le code de Gray de $n$ est $n \oplus \lfloor n/2 \rfloor$, le ou exclusif de $n$ et de $n$ décalé d'un rang vers la droite, `n ^ (n >> 1)` en Python.

<div class="encadre prune">
<div class="encadre-titre">Les tours de Hanoï en code de Gray</div>

Le code porte le nom de Frank Gray, ingénieur aux laboratoires Bell, qui le brevette en 1953, mais Émile Baudot l'utilisait déjà pour le télégraphe dans les années 1870. On le retrouve dans un jeu familier&nbsp;: les [tours de Hanoï](../recursivite/#les-tours-de-hanoï). Numérotons les disques à partir du plus petit et comptons en code de Gray, avec autant de bits que de disques. À chaque étape, le bit qui change indique le disque à déplacer&nbsp;: le bit de droite pour le plus petit disque, le suivant pour le deuxième, et ainsi de suite. Les $2^n - 1$ codes successifs donnent exactement les $2^n - 1$ déplacements de la solution optimale.

</div>

## Les entiers

### Entiers naturels

Avec $n$ bits, on écrit tous les entiers de $0$ à $2^n - 1$. Ajouter $1$ au plus grand d'entre eux demanderait un bit de plus, qui n'existe pas&nbsp;: comme un compteur kilométrique, le résultat revient à $0$.

<div class="nb-fig">
<table class="nb-tab">
<tr><th>taille</th><th>entiers naturels</th><th>entiers relatifs (complément à deux)</th></tr>
<tr><td style="color:#2563EB">8 bits</td><td>0 à 255</td><td>−128 à 127</td></tr>
<tr><td style="color:#DB2777">16 bits</td><td>0 à 65 535</td><td>−32 768 à 32 767</td></tr>
<tr><td style="color:#0D9488">32 bits</td><td>0 à 4 294 967 295</td><td>−2 147 483 648 à 2 147 483 647</td></tr>
<tr><td style="color:#D97706">64 bits</td><td>0 à environ 1,8 × 10<sup>19</sup></td><td>environ ± 9,2 × 10<sup>18</sup></td></tr>
</table>
</div>

### Entiers relatifs&nbsp;: le complément à deux

Pour les négatifs, l'idée la plus simple est de réserver le premier bit au signe. Elle a deux défauts&nbsp;: $0$ a deux écritures, $+0$ et $-0$, et l'addition ordinaire ne marche plus. Sur $4$ bits, $3$ s'écrirait `0011` et $-3$ s'écrirait `1011`, dont la somme posée en binaire donne `1110`, soit $-6$.

Les machines utilisent le **complément à deux**. La règle tient en une phrase&nbsp;: sur $n$ bits, le bit de gauche a un poids **négatif**, $-2^{n-1}$, et tous les autres gardent leur poids habituel.

<div class="nb-fig">
<div class="nb-ligne"><span class="nb-lab">−3 sur 4 bits</span><span class="nb-t neg"><b>1</b><small>−8</small></span><span class="nb-t on"><b>1</b><small>4</small></span><span class="nb-t"><b>0</b><small>2</small></span><span class="nb-t on"><b>1</b><small>1</small></span></div>
<div class="nb-somme"><span class="rg">−8</span> + <span class="bl">4</span> + <span class="bl">1</span> = −3</div>
<div class="nb-ligne" style="margin-top:0.9em"><span class="nb-lab">5 sur 4 bits</span><span class="nb-t"><b>0</b><small>−8</small></span><span class="nb-t on"><b>1</b><small>4</small></span><span class="nb-t"><b>0</b><small>2</small></span><span class="nb-t on"><b>1</b><small>1</small></span></div>
<div class="nb-somme"><span class="bl">4</span> + <span class="bl">1</span> = 5</div>
<p class="nb-leg">Un mot qui commence par 1 est négatif, puisque −8 l'emporte sur tous les autres poids réunis (4 + 2 + 1 = 7).</p>
</div>

Il en découle tout le reste. Un mot qui commence par $\color{#DC2626}{1}$ est négatif, un mot qui commence par $\color{#2563EB}{0}$ est positif ou nul, et $0$ n'a qu'une écriture. Sur $n$ bits, on écrit les entiers de $-2^{n-1}$ à $2^{n-1} - 1$. Surtout, l'addition posée habituellement donne le bon résultat, sans aucun circuit spécial pour les négatifs&nbsp;: c'est la même addition que pour les naturels, en oubliant la retenue qui sortirait du mot. Pour obtenir l'opposé d'un nombre, on **inverse tous les bits** et on **ajoute 1**&nbsp;:

<div class="nb-fig">
<table class="nb-div">
<tr><td>3</td><td style="font-weight:700;color:#2563EB">0011</td><td style="text-align:left;color:#64748b">le nombre</td></tr>
<tr><td>on inverse</td><td style="font-weight:700;color:#7C3AED">1100</td><td style="text-align:left;color:#64748b">vaut −4, car x + (x inversé) = 1111 = −1</td></tr>
<tr><td>+ 1</td><td style="font-weight:700;color:#DC2626">1101</td><td style="text-align:left;color:#64748b">vaut −3</td></tr>
</table>
</div>

Les $2^n$ mots se rangent naturellement sur un cercle&nbsp;: ajouter $1$, c'est avancer d'un cran, et après `1111` vient `0000`. Les positifs occupent une moitié du cercle, les négatifs l'autre.

<div class="anim" data-anim="cercle"></div>
{{< script "js/cercle.js" >}}

Le cercle montre aussi le revers du procédé. Sur $4$ bits, $5 + 7$ donne `1100`, c'est-à-dire $-4$&nbsp;: le vrai résultat, $12$, ne tient pas sur $4$ bits. C'est un **dépassement de capacité** (*overflow*), et le processeur ne s'arrête pas pour autant&nbsp;: il continue avec une valeur fausse.

### Quand le compteur fait le tour

Un dépassement de capacité ne prévient pas&nbsp;: le programme continue, avec un nombre faux. Il frappe souvent longtemps après la mise en service, le jour où un compteur finit par faire le tour du cercle.

{{< youtube-plus id="3jrY3g-CPNI" ratio="16x9" width="800" shadow=true rounded=true loading="lazy" >}}

<div class="bugs">
<div class="bug"><span class="bug-an">1980</span><div class="bug-titre">Le niveau 256 de Pac-Man</div><p>Le numéro du niveau tient sur un octet. Au niveau <span class="bug-nb">256</span>, le compteur repasse à 0, la routine qui dessine les fruits s'emballe et couvre la moitié droite de l'écran de symboles illisibles&nbsp;: le niveau est impossible à finir.</p></div>
<div class="bug"><span class="bug-an">1996</span><div class="bug-titre">Ariane 501</div><p>Une vitesse convertie en entier signé de <span class="bug-nb">16 bits</span> dépasse <span class="bug-nb">32 767</span>&nbsp;: la fusée se désintègre 37 secondes après le décollage. Le récit complet est dans la page <a href="../prouver/#la-preuve-formelle">Prouver un algorithme</a>.</p></div>
<div class="bug"><span class="bug-an">2004</span><div class="bug-titre">Le silence radio de Los Angeles</div><p>Les contrôleurs aériens du sud de la Californie perdent pendant trois heures le contact avec quelque 400 avions. Un compteur de millisecondes sur 32 bits fait le tour au bout de <span class="bug-nb">2<sup>32</sup> ms ≈ 49,7 jours</span>, et le redémarrage préventif, prévu tous les 30 jours, avait été oublié.</p></div>
<div class="bug"><span class="bug-an">2013</span><div class="bug-titre">La sonde Deep Impact</div><p>La NASA perd le contact avec la sonde, dont l'impacteur avait percuté la comète Tempel 1 en 2005. Son horloge comptait les dixièmes de seconde depuis l'an 2000 sur 32 bits&nbsp;: <span class="bug-nb">2<sup>32</sup></span> dixièmes de seconde, c'est un peu plus de 13 ans et 7 mois.</p></div>
<div class="bug"><span class="bug-an">2014</span><div class="bug-titre">Gangnam Style</div><p>La vidéo dépasse <span class="bug-nb">2 147 483 647</span> vues, le plus grand entier signé de 32 bits. YouTube doit passer ses compteurs à 64 bits.</p></div>
<div class="bug"><span class="bug-an">2015</span><div class="bug-titre">Le Boeing 787</div><p>L'aviation civile américaine impose de redémarrer régulièrement les générateurs électriques&nbsp;: après <span class="bug-nb">2<sup>31</sup></span> centièmes de seconde, soit <span class="bug-nb">248 jours</span>, un compteur déborde et les générateurs se mettent en sécurité, même en vol.</p></div>
<div class="bug"><span class="bug-an">2016</span><div class="bug-titre">Le jackpot impossible</div><p>Une machine à sous d'un casino new-yorkais annonce un gain de plus de <span class="bug-nb">42,9 millions</span> de dollars, presque exactement <span class="bug-nb">2<sup>32</sup></span> centimes. Le casino refuse de payer et invoque une panne.</p></div>
<div class="bug"><span class="bug-an">2038</span><div class="bug-titre">Le bug de l'an 2038</div><p>Beaucoup de systèmes comptent les secondes écoulées depuis le 1<sup>er</sup> janvier 1970. Sur 32 bits signés, ce compteur atteindra <span class="bug-nb">2<sup>31</sup> − 1</span> le 19 janvier 2038 à 3 h 14 min 7 s, temps universel, puis deviendra négatif&nbsp;: le 13 décembre 1901.</p></div>
</div>

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
from datetime import datetime, timedelta

print("2^31 centièmes de seconde :", 2**31 / 100 / 86400, "jours")
print("2^32 millièmes de seconde :", 2**32 / 1000 / 86400, "jours")
print("2^31 - 1 secondes après 1970 :", datetime(1970, 1, 1) + timedelta(seconds=2**31 - 1))
print("puis -2^31 secondes :", datetime(1970, 1, 1) - timedelta(seconds=2**31))

# Les entiers de Python n'ont pas de taille fixée : ils grandissent tant qu'il y a de la mémoire
print(2**100)

# Ceux de numpy, si : int32 est un entier signé sur 32 bits
import numpy as np
compteur = np.array([2**31 - 1], dtype=np.int32)
print(compteur, "+ 1 =", compteur + 1)
{{< /runpython >}}

Python cache le problème&nbsp;: ses entiers s'allongent autant que nécessaire, au prix de calculs plus lents sur les très grands nombres. Mais les bibliothèques de calcul comme numpy, et la plupart des autres langages, utilisent des entiers de taille fixe.

### Voir un dépassement&nbsp;: une image en 6 bits

Une image en donne une illustration très visible. Une photo en couleurs est un tableau de pixels, chacun fait de trois octets, pour le rouge, le vert et le bleu&nbsp;: c'est une image en **24 bits**, qui peut afficher $256^3 = 16\\,777\\,216$ couleurs. Les bibliothèques de traitement d'images la rangent dans un tableau numpy d'entiers `uint8`, sans signe et sur un octet. Réduisons-la à **6 bits**, deux par couleur&nbsp;: chaque valeur de $0$ à $255$ doit être remplacée par l'un de quatre niveaux, un par intervalle de $64$. Encore faut-il choisir lesquels, et faire le calcul sans sortir d'un octet.

<div class="anim" data-anim="image6bits" data-src="/larochelle.jpg"></div>
{{< script "js/image6bits.js" >}}
<p class="legende">Le port de La Rochelle. Faire glisser le curseur pour comparer l'image d'origine et l'image convertie, cliquer sur un pixel pour suivre le calcul en binaire.</p>

Le dépassement ne se voit pas dans le code, qui paraît juste, mais il saute aux yeux sur l'image. Pour l'éviter, il suffit ici de choisir un calcul qui reste dans les bornes, ou de convertir d'abord le tableau en entiers de 16 bits, avec `image.astype(np.uint16)`, avant de le ramener à 8 bits une fois le calcul fini.

## Les nombres à virgule

### Une écriture finie ou infinie

Après la virgule, les rangs binaires valent $\frac{1}{2}$, $\frac{1}{4}$, $\frac{1}{8}$, etc. Ainsi $0{,}625 = \color{#2563EB}{\frac{1}{2}} + \color{#2563EB}{\frac{1}{8}}$ s'écrit $(0{,}\color{#2563EB}{1}0\color{#2563EB}{1})\_2$. Pour obtenir ces chiffres, on **double**&nbsp;: la partie entière du résultat, $0$ ou $1$, donne le chiffre suivant, et l'on recommence avec la partie après la virgule.

Avec $0{,}1$, le calcul ne s'arrête jamais&nbsp;: après quelques doublements, on retombe sur $0{,}2$, et tout recommence.

<div class="nb-fig">
<svg class="nb-cycle" viewBox="0 0 460 250" role="img" aria-label="Doublements successifs de 0,1 : on retombe sur 0,2 après quatre étapes">
<defs><marker id="nb-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#64748b"/></marker></defs>
<g font-family="ui-monospace, monospace" font-size="15" text-anchor="middle">
<rect x="10" y="38" width="64" height="34" rx="9" fill="#F1F5F9" stroke="#94a3b8"/><text x="42" y="60" fill="#334155" font-weight="700">0,1</text>
<rect x="150" y="38" width="64" height="34" rx="9" fill="#FEF3C7" stroke="#D97706"/><text x="182" y="60" fill="#92400E" font-weight="700">0,2</text>
<rect x="330" y="38" width="64" height="34" rx="9" fill="#FEF3C7" stroke="#D97706"/><text x="362" y="60" fill="#92400E" font-weight="700">0,4</text>
<rect x="330" y="168" width="64" height="34" rx="9" fill="#FEF3C7" stroke="#D97706"/><text x="362" y="190" fill="#92400E" font-weight="700">0,8</text>
<rect x="150" y="168" width="64" height="34" rx="9" fill="#FEF3C7" stroke="#D97706"/><text x="182" y="190" fill="#92400E" font-weight="700">0,6</text>
<path d="M74 55H146" stroke="#64748b" stroke-width="2" marker-end="url(#nb-fl)"/><text x="110" y="48" font-size="12" fill="#64748b">×2</text><text x="110" y="76" font-size="14" fill="#94a3b8" font-weight="700">0</text>
<path d="M214 55H326" stroke="#64748b" stroke-width="2" marker-end="url(#nb-fl)"/><text x="270" y="48" font-size="12" fill="#64748b">×2</text><text x="270" y="76" font-size="14" fill="#94a3b8" font-weight="700">0</text>
<path d="M362 72V164" stroke="#64748b" stroke-width="2" marker-end="url(#nb-fl)"/><text x="395" y="114" font-size="12" fill="#64748b">×2</text><text x="380" y="132" font-size="14" fill="#94a3b8" font-weight="700">0</text>
<path d="M330 185H218" stroke="#64748b" stroke-width="2" marker-end="url(#nb-fl)"/><text x="274" y="178" font-size="12" fill="#64748b">×2 = 1,6</text><text x="274" y="206" font-size="14" fill="#2563EB" font-weight="700">1</text>
<path d="M182 168V76" stroke="#64748b" stroke-width="2" marker-end="url(#nb-fl)"/><text x="122" y="114" font-size="12" fill="#64748b">×2 = 1,2</text><text x="164" y="132" font-size="14" fill="#2563EB" font-weight="700">1</text>
<text x="230" y="240" font-size="13" fill="#64748b" font-family="system-ui, sans-serif">chaque flèche donne un chiffre ; la partie entière 1 est retirée</text>
</g>
</svg>
<p class="nb-leg" style="font-size:0.95em">$0{,}1 = (0{,}0\,\color{#B45309}{0011}\,\color{#B45309}{0011}\,\color{#B45309}{0011}\ldots)_2$&nbsp;: le motif $\color{#B45309}{0011}$ se répète indéfiniment.</p>
</div>

C'est la même chose qu'en décimal, où $\frac{1}{3} = 0{,}333\ldots$ n'a pas d'écriture finie&nbsp;: seules les fractions dont le dénominateur ne contient que des facteurs $2$ et $5$ en ont une. En binaire, seules celles dont le dénominateur est une **puissance de 2** en ont une. Or $0{,}1 = \frac{1}{10}$ et $10 = 2 \times \color{#DC2626}{5}$&nbsp;: une machine ne peut garder qu'un nombre fini de chiffres du motif, et **le nombre $0{,}1$ n'existe pas en machine**. Seule une approximation existe.

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

### La virgule flottante

Les physiciens écrivent la distance de la Terre au Soleil $\color{#0D9488}{+}\\,\color{#2563EB}{1{,}496} \times 10^{\color{#DB2777}{11}}$ m et la masse d'un électron $\color{#0D9488}{+}\\,\color{#2563EB}{9{,}109} \times 10^{\color{#DB2777}{-31}}$ kg&nbsp;: un **signe**, un nombre fixé de chiffres significatifs, la **mantisse**, et une puissance de dix, l'**exposant**, qui fait «&nbsp;flotter&nbsp;» la virgule. La machine fait de même en base 2&nbsp;:

$$ x = \color{#0D9488}{\pm}\\, \color{#2563EB}{1{,}f\_1 f\_2 \ldots f\_p} \times 2^{\color{#DB2777}{e}}, $$

où la mantisse commence toujours par $1$, suivi d'un nombre fixé $p$ de chiffres binaires, et où l'exposant $e$ est un entier. Par exemple, $\color{#2563EB}{1{,}01}\_2 \times 2^{\color{#DB2777}{1}} = 1{,}25 \times 2 = 2{,}5$.

Avec un nombre fixé de chiffres, les nombres représentables ne sont **pas** régulièrement répartis. Prenons un format minuscule, avec seulement deux ou trois chiffres après la virgule. Entre $1$ et $2$, il y a autant de nombres qu'entre $2$ et $4$, ou qu'entre $4$ et $8$&nbsp;: chaque intervalle est une règle graduée de la même façon, mais de plus en plus longue. Sur la vraie droite, en bas, les nombres se serrent près de $0$ et s'espacent vers les grandes valeurs.

<div class="anim" data-anim="droite-flottants"></div>

L'écart **absolu** entre deux nombres voisins grandit avec eux, mais l'écart **relatif** reste du même ordre&nbsp;: un nombre est toujours connu avec le même nombre de chiffres significatifs, qu'il s'agisse d'une masse d'électron ou d'une distance astronomique. C'est tout l'intérêt de la virgule flottante.

### La norme IEEE 754

La norme **IEEE 754**, adoptée en 1985 sous l'impulsion de William Kahan, fixe les formats utilisés par presque toutes les machines. Le plus courant, la **double précision**, utilisée par les `float` de Python, occupe $64$ bits&nbsp;:

<div class="nb-fig">
<div class="nb-ieee"><div class="s">signe<small>1 bit</small></div><div class="e">exposant<small>11 bits</small></div><div class="m">mantisse<small>52 bits</small></div></div>
<p class="nb-leg">Les 64 bits d'un nombre en double précision, de gauche à droite.</p>
</div>

- <span class="nb-fs">le signe</span>&nbsp;: $0$ pour positif, $1$ pour négatif&nbsp;;
- <span class="nb-fe">l'exposant</span>, stocké avec un **biais**&nbsp;: on lui ajoute $1023$ pour n'avoir à stocker que des entiers positifs&nbsp;;
- <span class="nb-fm">la mantisse</span>&nbsp;: seuls les $52$ chiffres après la virgule sont stockés. Le $1$ avant la virgule, toujours présent, est le **bit caché**&nbsp;: il donne $53$ chiffres binaires significatifs, soit environ $16$ chiffres décimaux.

Prenons $13\\,256{,}625$. En binaire, il s'écrit <span class="nb-ch">11001111001000,101</span>, c'est-à-dire <span class="nb-ch bl">1,1001111001000101</span>&nbsp;×&nbsp;2<sup class="nb-fe">13</sup>. L'exposant stocké est $13 + 1023 = 1036$, qui s'écrit <span class="nb-ch" style="color:#DB2777">10000001100</span> en binaire. La mantisse est faite des $16$ chiffres après la virgule, suivis de $36$ zéros&nbsp;:

<div class="nb-fig" style="font:0.88em/1.5 ui-monospace, monospace; text-align:center; overflow-wrap:anywhere">
<span class="nb-fs">0</span> <span class="nb-fe">10000001100</span> <span class="nb-fm">1001111001000101</span><span style="color:#94a3b8">000000000000000000000000000000000000</span>
<p class="nb-leg">Le mot de 64 bits de 13 256,625 : un nombre dyadique, stocké exactement.</p>
</div>

Les exposants extrêmes sont réservés&nbsp;: tous les bits à $0$ pour zéro et pour des nombres minuscules dits **dénormalisés**, tous les bits à $1$ pour l'infini et pour `NaN` (*not a number*), le résultat d'une opération impossible. Le décortiqueur ci-dessous montre le mot de n'importe quel nombre&nbsp;; on peut aussi cliquer sur les bits pour les changer.

<div class="anim" data-anim="ieee754"></div>
{{< script "js/flottants.js" >}}

Le nombre stocké pour `0.1` vaut exactement <span class="nombre-long"><span class="nb-ch vt">0,1</span><span class="nb-ch gr">0000000000000000</span><span class="nb-ch rg">55511151231257827021181583404541015625</span></span>&nbsp;: les dix-sept premiers chiffres après la virgule sont justes, la suite est l'**erreur d'arrondi**, de l'ordre de $5{,}6 \times 10^{-18}$. Python l'affiche `0.1`, parce que c'est la plus courte écriture décimale qui redonne ce flottant, mais c'est bien ce nombre-là qui entre dans les calculs.

### Les pièges

Chaque opération sur des flottants produit un résultat exact, aussitôt arrondi au flottant le plus proche. L'erreur relative de chaque arrondi est minuscule, au plus $2^{-53} \approx 1{,}1 \times 10^{-16}$, mais elle a des conséquences bien visibles.

<div class="nb-pieges">
<div class="nb-piege" style="--c:#DC2626"><h4>L'égalité est trompeuse</h4><code class="nb-in">0.1 + 0.2 == 0.3</code><span class="nb-out">0.1 + 0.2 = 0.3000000000000000<span class="faux">4</span> → False</span><p>Ne jamais tester l'égalité de deux flottants&nbsp;: on vérifie qu'ils sont proches, avec <code>math.isclose</code>.</p></div>
<div class="nb-piege" style="--c:#7C3AED"><h4>L'ordre compte</h4><code class="nb-in">(0.1 + 0.2) + 0.3</code><span class="nb-out">0.600000000000000<span class="faux">1</span>, mais 0.1 + (0.2 + 0.3) = 0.6</span><p>L'addition des flottants n'est plus associative.</p></div>
<div class="nb-piege" style="--c:#D97706"><h4>L'absorption</h4><code class="nb-in">(1e16 + 1) - 1e16</code><span class="nb-out"><span class="faux">0.0</span> au lieu de 1</span><p>Au-delà de 2<sup>53</sup>, deux flottants voisins sont espacés de plus de 1&nbsp;: ajouter 1 ne change rien.</p></div>
<div class="nb-piege" style="--c:#0D9488"><h4>La compensation</h4><code class="nb-in">(1 - cos(1e-8)) / 1e-16</code><span class="nb-out"><span class="faux">0.0</span> au lieu de 0.5</span><p>Soustraire deux nombres très proches efface leurs chiffres significatifs communs&nbsp;: il ne reste que l'erreur.</p></div>
</div>

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

Ajouter dix fois $0{,}1$ ne donne pas exactement $1$&nbsp;; la fonction `math.fsum` compense les erreurs d'arrondi, et depuis Python 3.12, `sum` le fait aussi pour les flottants. L'absorption a une conséquence surprenante&nbsp;: la boucle suivante, qui serait infinie avec des nombres réels, s'arrête.

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
x, n = 1.0, 0
while x + 1 != x:
    x = 2 * x
    n = n + 1
print("x + 1 == x pour x = 2 **", n, "=", x)
{{< /runpython >}}

Contre la compensation, il faut souvent réécrire la formule. Pour $x$ petit, $1 - \cos x$ soustrait deux nombres presque égaux&nbsp;; l'identité $1 - \cos x = 2 \sin^2 \frac{x}{2}$ donne la même quantité sans soustraction&nbsp;:

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
from math import cos, sin

# (1 - cos x) / x² tend vers 1/2 quand x tend vers 0
for x in [1e-2, 1e-4, 1e-6, 1e-8]:
    naif = (1 - cos(x)) / x**2
    stable = 2 * sin(x / 2)**2 / x**2       # même quantité, puisque 1 - cos x = 2 sin²(x/2)
    print(f"x = {x:.0e}   formule directe : {naif:.10f}   formule réécrite : {stable:.10f}")
{{< /runpython >}}

### Quand les erreurs s'accumulent

Une erreur d'arrondi de $10^{-16}$ semble sans conséquence. Mais répétée des millions de fois, toujours dans le même sens, ou amplifiée par un calcul mal conditionné, elle finit par se voir.

<div class="bugs">
<div class="bug flottant"><span class="bug-an">1982</span><div class="bug-titre">L'indice de la Bourse de Vancouver</div><p>Créé à <span class="bug-nb">1 000</span> points, l'indice est recalculé des milliers de fois par jour et chaque résultat est <b>tronqué</b> à trois décimales au lieu d'être arrondi. Vingt-deux mois plus tard, il affiche environ <span class="bug-nb">525</span>, alors que sa vraie valeur dépasse <span class="bug-nb">1 098</span>.</p></div>
<div class="bug flottant"><span class="bug-an">1991</span><div class="bug-titre">Le missile Patriot de Dhahran</div><p>Une batterie antimissile ne parvient pas à intercepter un Scud, qui tue 28 soldats américains. Son horloge accumulait, à chaque dixième de seconde, l'erreur commise sur <span class="bug-nb">0,1</span>. Le calcul est détaillé ci-dessous.</p></div>
<div class="bug flottant"><span class="bug-an">1994</span><div class="bug-titre">La division du Pentium</div><p>Quelques cases manquent dans une table de l'algorithme de division des premiers Pentium&nbsp;: 4 195 835 / 3 145 727 donne <span class="bug-nb">1,33373…</span> au lieu de <span class="bug-nb">1,33382…</span>. Intel remplace les processeurs, pour un coût de 475 millions de dollars.</p></div>
<div class="bug flottant"><span class="bug-an">2007</span><div class="bug-titre">Excel et 65 535</div><p>À sa sortie, Excel 2007 affiche <span class="bug-nb">100 000</span> pour 850 × 77,1, dont le résultat est 65 535. Le calcul était juste&nbsp;; c'est la conversion du flottant en texte décimal qui se trompait, pour quelques nombres très proches de 65 535.</p></div>
</div>

<div class="encadre bug-long">
<div class="encadre-titre">Le Patriot, en chiffres</div>

L'horloge de la batterie comptait le temps en dixièmes de seconde, et le logiciel multipliait ce compteur par $\color{#2563EB}{0{,}1}$, stocké en **virgule fixe** sur $24$ bits, avec $23$ chiffres après la virgule. Le développement binaire infini de $0{,}1$ était donc coupé après le $23^\text{e}$ chiffre&nbsp;:

$$ 0{,}1 \approx (0{,}0\color{#B45309}{0011}\color{#B45309}{0011}\color{#B45309}{0011}\color{#B45309}{0011}\color{#B45309}{0011}00)\_2, \qquad \text{erreur} \approx \color{#DC2626}{9{,}5 \times 10^{-8}}. $$

Moins d'un dix-millionième, mais à chaque dixième de seconde. Après cent heures de fonctionnement sans interruption, l'horloge retardait d'un tiers de seconde, et le radar cherchait le missile à plus d'un demi-kilomètre de sa position réelle. Le correctif, qui était connu, est arrivé le lendemain.

</div>

{{< runpython lang="python" mode="toggle" height="auto" width="800" >}}
z = int(0.1 * 2**23) / 2**23            # 0,1 tronqué à 23 chiffres binaires après la virgule
erreur = 0.1 - z
print("0,1 est stocké comme", z, "- erreur :", erreur)

tops = 100 * 3600 * 10                  # dixièmes de seconde en 100 heures
print("dérive de l'horloge après 100 h :", tops * erreur, "s")
print("distance parcourue par un Scud pendant ce temps :", 1676 * tops * erreur, "m")
{{< /runpython >}}

### Calculer juste malgré tout

Les flottants restent le bon outil pour la physique et l'ingénierie, où les données sont elles-mêmes des mesures approchées, à condition de garder ces pièges en tête. Quand l'exactitude est indispensable, Python offre d'autres représentations, plus lentes&nbsp;: les entiers, d'abord, qui sont exacts&nbsp;; les fractions du module `fractions`, qui calculent exactement avec des rationnels&nbsp;; et le module `decimal`, qui calcule en base 10 avec la précision choisie, comme l'exigent les calculs monétaires.

{{< runpython lang="pyodide" mode="toggle" height="auto" width="800" >}}
from fractions import Fraction
from decimal import Decimal

print(Fraction(1, 10) + Fraction(2, 10) == Fraction(3, 10))
print(Decimal("0.1") + Decimal("0.2"))
print(Fraction(0.1))                    # la fraction exacte que représente le flottant 0.1
{{< /runpython >}}

<div class="encadre retenir">
<div class="encadre-titre">À retenir</div>

- Sur $n$ bits, on écrit $2^n$ valeurs, pas une de plus&nbsp;: les entiers de $0$ à $2^n - 1$, ou de $-2^{n-1}$ à $2^{n-1} - 1$ en complément à deux.
- Un dépassement de capacité ne déclenche aucune erreur&nbsp;: le compteur fait le tour, et le calcul continue avec une valeur fausse.
- Un flottant est un nombre dyadique, $\pm 1{,}f \times 2^e$, connu avec environ $16$ chiffres significatifs. Presque tous les nombres décimaux, à commencer par $0{,}1$, n'en sont que des approximations.
- On ne teste jamais l'égalité de deux flottants, et l'on se méfie des soustractions de nombres proches et des sommes très longues.

</div>
