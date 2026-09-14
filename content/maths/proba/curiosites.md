+++
title = "Curiosités et énigmes"
date = 2021-03-06T14:20:50+01:00
weight = 3
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
  #grosseformule 
{
    overflow-x: auto; 
}
</style>


# Curiosités et énigmes

## Anniversaires simultanés

Quelle est la probabilité que deux élèves d'une classe est un anniversaire le même jour&nbsp;?

Lorsqu'on n'a jamais fait le calcul ou entendu parler du résultat, notre intuition nous amène généralement à soupçonner une probabilité bien plus petite qu'elle ne l'est.<br>
C'est d'ailleurs assez fréquent que notre intuition soit aux fraises lorsqu'il s'agit d'estimer une probabilité ou expliquer des statistiques (voir [le paradoxe de Simpson](../stat/#paradoxe-de-simpson)).


{{< youtube-plus id="1Wpajb8Dk04" ratio="16x9" width="800px" rounded=true shadow=true >}}


## Spaghetti et inégalité triangulaire

Une petite énigme à base d'inégalité triangulaire :

Quelle est la probabilité de pouvoir faire un triangle avec les 3 bouts obtenus en cassant aléatoirement un spaghetti en deux endroits ?


{{< youtube-plus id="EdRzfn3ctK8" ratio="16x9" width="800px" rounded=true shadow=true >}}


## Paradoxe des deux enfants

Le paradoxe des deux enfants repose grandement sur la formulation et provoque encore parfois des débats passionnés.


{{< youtube-plus id="MeoIzbjC_HM" ratio="16x9" width="800px" rounded=true shadow=true >}}


{{< runpython lang="python" mode="toggle" default="code" height="400" width="800" >}}
from random import randint

s = 0
S = 0
n = 100000
c = int(input("Une famille a deux enfants\n\
dont au moins une fille :                    taper 0\n\
dont au moins une fille qui aime les maths : taper 1\n\
dont au moins fille née un dimanche :        taper 2\n"))
a = [1,2,7]
cas = ['',' qui aime les maths',' née un dimanche']

for i in range(n) :
	e1 , j1 = randint(0,1) , randint(1,a[c])
	e2 , j2 = randint(0,1) , randint(1,a[c])
	if (e1 == 1 and j1 == a[c]) or (e2 == 1 and j2 == a[c]) :
		S += 1
		if e1 == e2 :
			s += 1
print("\nSimulation sur {} familles de 2 enfants :\n{} comprennent au moins une fille{},\n\
et parmi elles, {} comprennent 2 filles, soit {:.2f} %.".format(n,S,cas[c],s,s/S*100))
{{< /runpython >}}



## Paradoxe de Cover

Où comment un tirage aléatoire permet de gagner de l'information&nbsp;!


{{< youtube-plus id="lhIkXOZ2o-s" ratio="short" width="300px" rounded=true shadow=false >}}


On vous présente deux papiers pliés où sont écrits deux nombres choisis aléatoirement $a$ et $b$.

Vous choisissez un des deux papiers et l'ouvrez pour découvrir le nombre $X$ (soit $a$, soit $b$). Puis on vous demande lequel des deux papiers contient le plus grand nombre.

Cela semble du 50-50, et pourtant... Si vous tirez un nombre aléatoire $Z$ selon une **distribution continue** sur $\mathbb{R}$, vous pouvez augmenter vos chances&nbsp;! Il suffit de comparer $Z$ à $X$&nbsp;: si $Z>X$ vous choisissez $Y$ comme plus grand nombre (l'autre papier) et si $Z<X$, vous choisissez $X$.

Dans le code ci-dessous, on tire deux nombres aléatoires $a$ et $b$ selon une distribution normale centrée sur 0 et d'écart-type 100, puis on tire au sort le nombre $X$. Petite différence par rapport à ce qui précède, on se sert d'une fonction logistique pour "envoyer" $X$ entre 0 et 1 puis on le compare à un $Z$ tiré uniformément entre 0 et 1.<br>
On voit qu'on obtient alors un taux de succès autour de 75%&nbsp;!


{{< runpython lang="python" mode="toggle" default="code" height="400" width="800" >}}
import random
import math

def gauss_box_muller(mu=0.0, sigma=1.0):
    """
    Retourne un échantillon selon N(mu, sigma^2)
    en ne faisant appel qu'à random et math.
    """
    # 1) générer deux U[0,1) indépendants
    u1 = random.random()
    u2 = random.random()
    # 2) appliquer la transformée de Box–Muller
    z0 = math.sqrt(-2.0 * math.log(u1)) * math.cos(2.0 * math.pi * u2)
    # z1 = math.sqrt(-2.0 * math.log(u1)) * math.sin(2.0 * math.pi * u2)
    # 3) ajuster moyenne et écart-type
    return mu + z0 * sigma

def f(x):
    return math.exp(x)/(1+math.exp(x))

succes = 0
N = 10000

for _ in range(N):
    a = gauss_box_muller(0, 100)
    b = gauss_box_muller(0, 100)
    Z = random.random()
    if random.random() < 0.5:
        X, Y = a, b
    else:
        X, Y = b, a
    if Z > f(X): # Y est choisi
        if Y > X:
            succes += 1
    else: # X est choisi
        if X > Y:
            succes += 1

print("Proba de succ\u00E8s : \n{:.2f} %".format(succes/N*100))
{{< /runpython >}}

Par quel miracle&nbsp;???

Déjà, comme $Z$ est issue d'une loi continues, on n'aura jamais $Z=a$ ou $Z=b$ et pour que la méthode permette de deviner correctement, il faut que&nbsp;:

<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li>$X=\max(a,b)$ (une chance sur deux) <b>et</b> $ Z < X $ </li>
<li>$X=\min(a,b)$ (une chance sur deux)  <b>et</b> $ Z>X $ </li>
</ul>

La probabilité de succès est donc&nbsp;:<br>
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/democover.png" style="box-shadow:none;background:none;">
</div>
D'où :

<div style="overflow-x:auto;">

$$
\begin{aligned}
P_\text { succ } &= \frac{1}{2}P(Z<\max (a, b))+\frac{1}{2}[1-P(Z<\min (a, b))]\\\\
&=\frac{1}{2}+\frac{1}{2}[P(Z<\max (a, b))-P(Z < \min (a, b))]\\\\
&=\frac{1}{2}+\frac12\color{#970E53}P\left(\min(a,b) < Z<\max(a,b)\right)
\end{aligned}
$$

</div>

Puisque $Z$ suit une loi continue ${\color{#970E53}P\left(\min(a,b) < Z<\max(a,b)\right)}>0$. On se retrouve donc bien avec une probabilité supérieure à $\tfrac12$.

Dans une démonstration similaire (qu'on retrouve dans [cet article](https://johncarlosbaez.wordpress.com/2015/07/20/the-game-of-googol/?utm_source=chatgpt.com) de John Baez retraçant l'origine du paradoxe), Greg Egan utilise une fonction $f:\mathbb{R}\rightarrow ]0,1[$ strictement croissante (si $x<y$, $f(x)<f(y)$)  pour ramener $X$ dans $]0,1[$. C'est en suivant cette méthode qu'on a utilisé dans le code la fonction logistique $f(x)=\frac{\mathrm{e}^x}{\mathrm{e}^x +1}$.<br>
Le nombre aléatoire $Z$ est alors choisi uniformément entre $0$ et $1$ et on compare $Z$ à $f(X)$ plutôt qu'à $X$.<br>
Supposons $a>b$.<br>La probabilité de deviner correctement devient&nbsp;:
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/demoegan.png" style="box-shadow:none;background:none;">
</div>
On obtient ainsi&nbsp;:

<div style="overflow-x:auto;">

$$P_\text { succ }=\frac{1}{2}+\frac{1}{2}(f(a)-f(b))>\frac{1}{2}$$ 

</div>

En effet, $f(a)>f(b)$ par croissance stricte de $f$. 

Les deux démonstrations sont équivalentes. Suffit de poser $f(x)=P(Z<x)$ (bien strictement croissante) pour s'en convaincre. $P_\text { succ }$ devient alors $\frac{1}{2}+\frac{1}{2}(P(Z<\max(a,b))-P(Z<\min(a,b))$.

Dans le code ci-dessus, les nombres $a$ et $b$ sont volontairement très éloignés de 0 ($\sigma=100$). La fonction logistique donne alors soit $\approx 0$ (nombre $\ll 0$), soit $\approx 1$ (nombre $\gg 0$). Donc $f(a)-f(b)$ va donner $1$ lorsque $a$ et $b$ sont de signes différents (50% des cas) et $0$ dans les autres cas. Ça nous donne une espérance de succès de $\tfrac12+\tfrac12\tfrac12=\tfrac34$.<br>

En diminuant $\sigma$, on diminue le pourcentage de succès (on retrouve que l'efficacité de la méthode est d'autant plus grande que $Z$ a de chances d'être entre $a$ et $b$).

Si $a$, $b$ et $Z$ sont tirés uniformément dans $[0,1]$, on obtient une espérance de succès de $\tfrac23$. En effet, on a alors $P_\text { succ }(a,b)=\tfrac12 + \tfrac12|a-b|$. Or comme on l'a vu [plus haut](./#densité-de-probabilités), $\mathbb{E}[|a-b|]=\tfrac13$, donc $\mathbb{E}[P_\text{succ}(a,b)]=\tfrac12+\tfrac12\tfrac13=\tfrac23$.

Cela finit par sérieusement perdre de sa magie... Si la loi d'où est tiré $Z$ est adaptée aux valeurs de $a$ et $b$, tout va pour le mieux, mais dès que ce n'est plus le cas, on se retrouve bêtement autour de 50%... Il suffit par exemple d'un $\mu\gg\sigma$ dans la loi normale du code. La fonction logistique va envoyer tout le monde sur $\approx 1$ et on n'aura quasi jamais $Z>f(a)$. 

Certes, le hasard permet d'augmenter ses chances, mais tant que la distribution des nombres sur les papiers et celle du nombre aléatoire tiré ne se correspondent pas, l'avantage obtenu sera infinitésimal... Le tirage n'apporte donc finalement aucune information importante. Celle-ci viendrait plutôt du choix adéquat de la distribution de $Z$ puisqu'il impliquerait de connaître celle de $a$ et $b$&nbsp;!

## Problème du secrétaire

Dans ce problème aux nombreux noms, il s'agit d'imaginer une stratégie optimale pour choisir avec la plus grande probabilité le meilleur candidat. Les candidats défilent un à un sans retour possible et on doit décider pour chacun si on le rejette ou si c'est celui qu'on embauche.

{{< runpython lang="python" mode="toggle" default="code" height="400" width="800" >}}
from random import random,shuffle

def strategie(L,nb_vus):
    n = len(L)
    if nb_vus == 0:
        return L[0]
    M = max(L[:nb_vus])
    for i in range(nb_vus,n):
        if L[i] > M:
            return(L[i])
    return(L[-1])
            
N = 10000
MAX = 9
Liste = [i for i in range(MAX+1)]
Resultats = [0]*(MAX+1)
for i in range(MAX+1):
    S = 0
    for _ in range(N):
        shuffle(Liste)
        if strategie(Liste,i) == MAX:
            S +=1
    Resultats[i] = S/N
print(Resultats)
prob = max(Resultats)
print(f"Il semble optimal d'inspecter {Resultats.index(prob)+1} candidats.")
print(f"Sélectionner ensuite le premier candidat dépassant les {Resultats.index(prob)+1} premiers assure de trouver le meilleur candidat absolu avec une probabilité de {prob*100:.1f}%")
{{< /runpython >}}


{{%notice note%}}
Si on avait besoin de construire la fonction de mélange des éléments d'une liste (`shuffle`)&nbsp;:
{{%/notice%}}

{{< runpython lang="python" mode="toggle" default="code" height="300" width="800" >}}
from random import random

def shuffle(L):
    n = len(L)
    for i in range(n-1):
        k = n-i
        t  = int(random()*k)
        k -= 1
        L[k] , L[t] = L[t], L[k]
    return L
    
# exemple :
L = ["blob",5,18.3,(1,2,6),"Ok"]
print(L)
print(shuffle(L))
{{< /runpython >}}