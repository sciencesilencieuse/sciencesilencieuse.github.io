+++
title = "Jeux d'accessibilité"
date = 2021-03-06T14:20:50+01:00
weight = 3
chapter = false
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
</style>



# Jeux d'accessibilité sur un graphe

Cette partie du cours a moins à voir avec les jeux vidéo qu'avec la modélisation de systèmes réactifs (automate bancaire, système-environnement), les problèmes de contrôle, la théorie de la décision, les problèmes de routage sur Internet, l'économie... Autant de domaines admettant une description en termes d'opposition entre adversaires sur une arène (un des adversaires pouvant modéliser l'environnement). La détermination d'une stratégie gagnante résout alors le problème posé en assurant sa correction.

<br>

### L'arène

On entendra ici par jeu&nbsp;:
- des jeux à deux joueurs ($J_1$ et $J_2$ ou Eve et Adam)
- à **information complète**&nbsp;: les deux joueurs savent tout (pas comme aux cartes)
- **alternés** (pas comme à chifoumi)
- **non randomisés** (pas de hasard)

L'**arène** dans laquelle le jeu prend place est un **graphe orienté biparti**.
<style>
#bipa p:first-child:after {
    content: 'Graphe biparti';
}
</style>
{{% notice type="def" title="Graphe biparti" round="true" %}}
Un graphe biparti (ou bipartite) $G$ est un graphe dont l'ensemble des sommets peut être divisé en deux sous-ensembles de sommets disjoints $S_1$ et $S_2$ ($S_1$ et $S_2$ sont une partition de $S$&nbsp;: $S_1\cup S_2=S$, $S_1\cap S_2=\varnothing$) tels que chaque arête de $G$ a une extrémité dans $S_1$ et l'autre dans $S_2$.
{{% /notice %}}


![](/animbipar.gif)

{{% notice type="tip" round="true" %}}
Un graphe est biparti si on peut colorier tous les sommets du graphe avec seulement deux couleurs de manière à ce que deux sommets voisins n'aient jamais la même couleur (on parle alors de **2-coloriage**).<br>
On peut montrer qu'un graphe est biparti si et seulement s'il ne possède pas de cycle de longueur impaire.<br>
{{% /notice %}}

> Démonstration de "graphe biparti $\Leftrightarrow$ pas de cycle impair"&nbsp;:
>- On montre $\Rightarrow$ en constatant l'impossibilité d'un 2-coloriage sur un cycle impair. *Donc tout graphe contenant un cycle impair ne peut pas être biparti.*
> - Et on montre $\Leftarrow$ en essayant de créer un 2-coloriage depuis un sommet&nbsp;; tant qu'on ne rencontre pas de cycle, pas de problème.<br>
> 	Tous les sommets à une distance impaire du sommet de départ sont coloriés d'une couleur et tous ceux à une distance paire sont coloriés de l'autre couleur.<br>
> 	Donc un graphe sans cycle est toujours biparti.<br>
> 	Place aux cycles maintenant. Supposons que deux des chemins partant d'un sommet se rejoignent, alors on a deux possibilités&nbsp;:
> 	- la jonction se fait entre deux sommets de couleurs différentes et le 2-coloriage reste possible.<br>
> 	Dans ce cas, on joint un chemin de longueur paire et un chemin de longueur impaire, ce qui donne un cycle de longueur paire (avec le +1 de l'arête de la jonction).
> 	- la jonction se fait entre sommets de la même couleur rendant impossible le 2-coloriage.<br>
> 	Dans ce deuxième cas, on obtient nécessairement un cycle de longueur impaire puisqu'on joint deux chemins de la même parité (+ 1 de l'arête de jonction).<br>
> 		
> 	Seuls les cycles impairs font donc échouer le 2-coloriage. *Tout graphe non biparti contient au moins un cycle impair.*

Retournons aux jeux...<br>
Deux joueurs, $J_1$ et $J_2$, s'affrontent sur un graphe orienté biparti $G=(S,A)$ où $S$ est constitué des sommets contrôlés par le joueur 1, $S_1$, et de ceux contrôlés par le joueur 2, $S_2$. Chaque sommet est une position valide du jeu et chaque arête est un mouvement autorisé entre ces positions.

Il manque encore une condition de gain pour rendre le jeu intéressant&nbsp;; dans le cas d'un **jeu d'accessibilité**, on attribue à chaque joueur un sous-ensemble de sommets correspondant à des états gagnants qu'il convient d'atteindre pour... gagner. Il peut aussi exister un sous-ensemble de sommets correspondant à des états de partie nulle.

Un jeu d'accessibilité est alors défini par un quadruplet $(G,S_1,S_2,F)$ où $(G,S_1,S_2)$ est une arène et $F$ est l'ensemble des sommets gagnants pour $J_1$.

<br>

### Exemples

#### Chomp

Chomp est un jeu où les deux adversaires mangent à tour de rôle des carrés de chocolat d'une tablette avec la "contrainte" de manger tous les carrés à droite et au-dessus du carré choisi. Le perdant doit manger le brocoli qui reste à la fin.

Eve commence le jeu avec la tablette ci-dessous composée de 5 carrés. Il existe alors 9 configurations possibles, pas toutes atteignables par les deux joueurs.

Traçons l'arène (les ronds bleus sont les positions contrôlées par Eve et les carrés roses par Adam).

$F$ (sommet gagnant pour Eve) est le carré rose avec un brocoli puisque l'atteindre signifie qu'Adam se retrouve avec le légume à manger.

![](/chompintro.gif)

<br>

#### Une des nombreuses variantes du jeu de Nim

Un tas d'allumettes est disposé devant Eve et Adam. Eve joue en premier et peut retirer autant d'allumettes qu'elle le souhaite du moment qu'elle en prend au moins une et qu'elle en laisse au moins une. C'est ensuite au tour d'Adam de retirer des allumettes avec pour tous les tours qui suivent une contrainte supplémentaire&nbsp;: on ne peut pas retirer plus de deux fois le nombre d'allumettes prises par son adversaire au tour précédent. Le joueur qui retire la dernière allumette gagne. Il n'y a pas de match nul.

Traçons le graphe du jeu en supposant que l'on commence avec 5 allumettes et étiquetons les sommets avec le couple (nombre d'allumettes présentes, nombre d'allumettes prenables). L'étiquette du nœud de départ est donc (5,4).<br>
On a indiqué en jaune le sommet à atteindre pour Eve (sommet de $F$).

![](/variantenim.png?width=600px)

Le graphe est ici plutôt simple, mais on verra [dans le TP](http://localhost:1313/semestre_3/tp13/#jeux-daccessibilité-à-deux-joueurs) que pour des nombres d'allumettes plus grands, on sera content de pouvoir confier la tâche de sa construction à Python.

{{% notice type="tip" round="true" %}}
Ce jeu est une variante du jeu de Nim (voir TP) comme en fait tout jeu impartial à deux joueurs (théorème de Sprague-Grundy). Un **jeu impartial** est un jeu tour par tour dans lequel les coups autorisés, ainsi que les gains obtenus, dépendent uniquement de la position, et pas du joueur dont c'est le tour. C'est le cas de Chomp qui est donc, lui aussi, un jeu de Nim déguisé... Un jeu qui n'est pas impartial est appelé **jeu partisan** (le morpion ou les échecs par exemple).
{{% /notice %}}

<br>

#### Morpion (tic-tac-toe)

Pas besoin de rappeler les règles du morpion (oxo en Belgique).<br>
Dans cet exemple, Eve démarre sur un jeu déjà avancé, elle a les ronds.<br>
Cette fois-ci, $F$ contient plusieurs sommets (toujours indiqués en jaune).

![](/graphetictac1.png?width=1000px)

<br>

### Stratégie

Gagner la partie, c'est arriver sur un sommet de $F$. Comment savoir si Eve peut ou non gagner selon sa position de départ&nbsp;? Et si elle le peut, comment mettre au point pour elle une stratégie gagnante&nbsp;?

<br>

#### Positions gagnantes et attracteurs

Pour déterminer l'ensemble des positions gagnantes pour Eve sur l'arène, on travaille récursivement depuis les sommets de $F$ en suivant les deux préceptes suivants&nbsp;:
- un sommet d'Eve est gagnant si **un** de ses arcs sortants le lie à un sommet gagnant.<br>
Eve n'a alors plus qu'à emprunter ce chemin.<br>
![](/sommetgagnant1.png?width=200px)
- un sommet d'Adam est gagnant (pour Eve) si **tous** ses arcs sortants le lient à un sommet gagnant.<br>
En effet, Adam ne peut alors pas éviter de mettre Eve dans une position gagnante.
![](/sommetgagnant2.png?width=200px)

Formalisons un peu tout ça en définissant la suite $Attr_i(F)$ qui contient l'ensemble des sommets gagnants après $i$ étapes&nbsp;:
$$ \begin{array}{lll} Attr_0(F) &= &F \\\\  Attr\_{i+1}(F) &= &Attr\_{i}(F) \\\\ &&\cup \\{s \in S_1|Succ(s)\cap Attr_i(F) ≠ \varnothing \\} \\\\ &&\cup \\{s\in S_2| Succ(s)\subseteq Attr_i(F)\\} \end{array} $$
Étant donné que $Attr_i(F) \subseteq Attr\_{i+1}(F) \subseteq S$, pour tout $i≥0$, si on suppose le graphe fini, la suite est croissante et bornée et donc stationnaire (à partir d'un certain $i=i_0$, $Attr_i(F)$ est constante, et si $|G|=n$, $i_0$ vaut au plus $n-1$).

{{%notice type="info" round="true"%}}
On appelle **attracteur** de $F$ pour le joueur $J_1$  la limite de $Attr_i(F)$. On le note $Attr(F)$.<br>
Tout sommet dans l'attracteur est une **position gagnante** pour $J_1$.
{{%/notice%}}

Le complémentaire d'un attracteur est appelé **piège**. Si le joueur 1 est sur une position n'appartenant pas à son attracteur (et donc à son piège), cela signifie que :
- si c'est son tour, tous les mouvements possibles restent dans le piège,
- si c'est le tour de l'adversaire, celui-ci a toujours au moins une possibilité de laisser le joueur 1 dans le piège.

Cette position est donc perdante...

<br>

##### Détermination "à la main" de l'attracteur dans les exemples précédents

L'attracteur dans l'exemple du jeu Chomp contient 9 sommets, dont le sommet de départ.

![](/chompattract.gif)

Dans le cas de la variante de Nim, l'attracteur se réduit à $Attr(G) = \\{(0,0,1) , (1,1,0) , (2,2,0) \\}$ où la troisième valeur des triplets correspond au joueur qui contrôle le sommet (0 pour Eve et 1 pour Adam). Le sommet de départ $(5,4,0)$ n'est pas dedans $\Rightarrow$ c'est perdu pour Eve 😭..

![](/nimvarattr.png?width=600px)

Enfin, sur l'exemple du morpion, l'attracteur contient 13 sommets dont celui de départ.

![](/morpionattr.gif)

<br>

#####     Programme permettant de calculer l'attracteur

On peut écrire un programme récursif calculant l'attracteur en temps linéaire en $|S | + |A|$ ([rappelons-nous](https://info-tsi-vieljeux.github.io/semestre_2/graphes/#parcours-dun-graphe) que le parcours complet d'un graphe est au mieux en $O(|S | + |A|)$ car cela correspond à parcourir les $|S|$ sommets et les $|A|$ arêtes). Pour éviter de calculer plusieurs fois le même élément, l'algorithme tient à jour, pour chaque sommet $s$, un compteur `n` des successeurs non encore inspectés (sous la forme d'un dictionnaire).


```python
def attracteur(G: dict, F: list) -> list:
    """
    préconditions: G est est un graphe sous forme de liste d'adjacence implémentée par un dictionnaire
                   F est la liste des sommets gagnants pour le joueur 1
    postcondition: la fonction retourne l'attracteur de F pour le joueur 1 sous forme d'un dictionnaire
                   dont les clés sont les sommets de G et les valeurs True ou False suivant que le sommet appartienne ou non à l'attracteur
    """
    Pred = inverseGraphe(G)
    n = {s:len(G[s]) for s in G}
    Attr = {s:False for s in G}
    for sommet in F:
        Joueur1 = True
        propage(sommet,Joueur1,Attr,Pred,n)
    return Attr

def propage(sommet,Joueur1,Attr,Pred,n):
    if Attr[sommet]:
        return
    Attr[sommet] = True
    for s in Pred[sommet]:
        n[s] -= 1 # un successeur de s en moins
        if Joueur1 or (n[s] == 0) :
            propage(s,not Joueur1,Attr,Pred,n)
```
<br>

#### Stratégie gagnante

<style>
#moryless p:first-child:after {
    content: 'Stratégie sans mémoire gagnante';
}
</style>
{{% notice type="def" title="Stratégie sans mémoire" round="true" %}}
Une **stratégie sans mémoire** est une fonction $\sigma$ qui assigne un mouvement autorisé à un joueur pour chaque position non terminale&nbsp;: $\forall s\in S, (s,\sigma(s))\in A.$<br>
Un joueur sur une position $s$ suit une stratégie s'il emprunte le chemin $<s,\sigma(s),\sigma^2(s),\ldots>$. Elle est dite sans mémoire car pour une position donnée, la stratégie est indépendante du chemin qui y a mené ($\sigma$ ne dépend que du sommet).<br>
Une **stratégie sans mémoire gagnante** depuis une position donnée garantit la victoire au joueur en un nombre de coups limité. Pour le joueur 1, une stratégie gagnante garantit d'arriver sur un sommet de $F$. Mais suivant la position de départ, une telle stratégie n'existe pas forcément...
{{% /notice %}}


En construisant l'attracteur, on répond à notre première question&nbsp;: **la position d'Eve est-elle gagnante&nbsp;? Il suffit de vérifier qu'elle appartient à l'attracteur.**<br>
Si c'est le cas, une stratégie gagnante est facile à mettre en place&nbsp;; il faut faire en sorte que chaque déplacement sur le graphe (chaque coup joué) se fasse vers un sommet de l'attracteur. Chaque coup d'Eve vers un sommet de l'attracteur piège aussi le coup suivant d'Adam dans l'attracteur.<br>
Comme son nom l'indique, l'attracteur attire irrémédiablement vers $F$, assurant la victoire au joueur 1.

Le joueur 2 aussi, bien sûr, a son attracteur, et il appartient au complémentaire de l'attracteur du joueur 1, piège du joueur 1. Donc un seul écart du joueur 1 en dehors de son attracteur, et c'en est fini pour lui, le joueur 2 peut le condamner à rester dans le piège.
![](https://media2.giphy.com/media/yEIJLJXHwJHZm/giphy.gif)

Revenons à nos exemples :
- Pour Chomp, le joueur 1 appartient à l'attracteur, ce qui signifie que sa position de départ est gagnante. Par conséquent, il a une stratégie gagnante. Mais attention à ne pas se tromper au début&nbsp;! Sur 5 mouvements possibles, le seul assurant la victoire est de manger le carré en haut à droite.
- Pour la variante de Nim, c'est foutu... Quelle que soit notre stratégie, elle sera perdante.
- Enfin, pour Tic-tac-toe, la victoire tend les bras au joueur 1. Et, sans surprise, son premier mouvement doit être de prendre le milieu.

<br>

### Arbre et minimax

Pour des jeux comme les échecs, le graphe est bien trop gros pour pouvoir appliquer nos méthodes précédentes. Alors comment s'en sortir&nbsp;?

L'idée est de se contenter d'une recherche partielle autour de la position actuelle donnant à l'algorithme seulement quelques coups d'avance. Il évalue alors les différentes positions futures possibles en leur attribuant un score issu d'une **heuristique**.

<style>
#heuri p:first-child:after {
    content: 'Heuristique';
}
</style>
{{% notice type="def" title="Heuristique" round="true" %}}
Une heuristique est une méthode de calcul qui fournit rapidement une solution réalisable, pas nécessairement optimale ou exacte, pour un problème d'optimisation difficile. Elle  s'impose quand les algorithmes de résolution exacte sont impraticables, à savoir de complexité polynomiale de haut degré, exponentielle ou plus.<br>
Une heuristique est donc un compromis entre d'un côté l'optimalité (trouver la meilleure solution) et/ou la complétude (trouver toutes les solutions) de l'algorithme et de l'autre côté sa vitesse.
{{% /notice %}}

Pour implémenter efficacement cette recherche partielle, l'idée est d'utiliser un arbre plutôt que l'arène précédente. Quelle différence&nbsp;? L'absence de cycle qui va permettre d'élaguer&nbsp;! On le paye au prix de la redondance des sommets (le même sommet peut apparaître plusieurs fois dans l'arbre). Pour chaque position, les différents coups possibles correspondent aux différentes branches et on avance ainsi niveau par niveau jusqu'aux feuilles représentant les positions terminales.

Le gros avantage d'un arbre est qu'il permet facilement de ne garder que quelques niveaux (on raccourcit alors toutes les branches jusqu'à la profondeur considérée).

Muni de cet arbre, l'algorithme se lance dans un parcours en profondeur jusqu'à la profondeur maximale stipulée. Lorsque ce niveau est atteint (2, par exemple, si on veut que l'IA ait deux coups d'avance), l'algorithme évalue les feuilles grâce à son heuristique, puis il propage ce score vers les niveaux supérieurs en suivant le **principe du minimax**&nbsp;:
- sur un niveau correspondant au joueur 1, on sélectionne la valeur **maximale** parmi les branches, 
- et sur un niveau correspondant à l'adversaire, on sélectionne la valeur **minimale**.  

Le principe est de maximiser les gains du joueur 1 tout en minimisant ceux du joueur 2. 
La valeur est au final transmise à la racine (la position depuis laquelle on a lancé la recherche) et la meilleure branche est sélectionnée.

Prenons l'exemple du jeu de Morpion. Une heuristique possible pour évaluer un plateau pourrait consister à compter $+1$ pour chaque alignement encore possible pour le joueur et  $-1$ pour ceux encore possibles pour son adversaire.

![](/minimaxgif.gif)


L'arbre total du morpion n'est pas si gros&nbsp;; le **facteur de ramification** $b$ est de 5 en moyenne et il y a au plus 9 niveaux (9 coups), ce qui donne $\approx 5^9 = 1\\,953\\,125$ (à titre de comparaison, aux échecs, $b\approx35$ et une partie dure en moyenne 100 coups, ce qui donne $b^m\approx10^{54}$ sommets à inspecter...). 

L'algorithme minimax appliqué au morpion inspecte en réalité environ 4 fois moins de sommets que les deux millions prédits, car ce chiffre ne tient pas compte des nombreuses parties potentielles se terminant avant le neuvième coup. Il en inspecte néanmoins beaucoup plus qu'il ne faudrait (il n'y a que $9!=362\\,880$ coups possibles si l'ordi commence et seulement $8!=40\\,320$ si l'humain a l'honneur), ce qui illustre le fait qu'un arbre contient beaucoup de sommets redondants par rapport au graphe du jeu dont il est tiré (c'est le prix à payer pour casser les cycles).

La taille modérée de l'arbre permet de l'explorer jusqu'aux parties finales, mais on peut constater en jouant avec le petit programme ci-dessous que la réduction à une profondeur d'un seul niveau grâce à l'heuristique[^3] est tout autant redoutable en inspectant presque 4000 fois moins de sommets&nbsp;!


{{< runpython lang="python" height="600" mode="toggle" file="morpionminimax.py">}}
{{< /runpython >}}


[^3]: 2-ply minimax en anglais

Cela prouve qu'au morpion, 1 coup d'avance, c'est bien suffisant... Mais ce n'est pas vraiment le cas aux échecs, où les plus grands joueurs (comme Kasparov) prévoient jusqu'à 12 coups à l'avance&nbsp;! Deep Blue, qui a battu Kasparov en 1997, cherchait jusqu'à une profondeur typiquement comprise entre 6 et 16, mais pouvait aller jusqu'à 40 dans certaines situations.

Dans le cas des échecs, l'heuristique permettant d'évaluer un état de l'échiquier est bien plus complexe qu'au morpion. Elle doit prendre en compte la quantité de pièces et pions restants, la qualité des pièces et les positions de tout ce beau monde (domination du centre, structure compacte, etc.).

La taille du jeu de Go rend vaine toute tentative de type minimax. C'est au point que les grands joueurs de Go ont longtemps refusé de jouer contre des ordinateurs, non par peur de perdre, mais parce qu'ils les trouvaient trop mauvais. C'est l'essor du deep learning, et donc une philosophie basée sur l'apprentissage plus que sur la stratégie, qui a permis à [la machine](https://www.deepmind.com/research/highlighted-research/alphago) de devenir un adversaire coriace à ce jeu-là aussi.

<br>

## Sac à dos et heuristique

Voyons enfin une autre utilisation d'heuristique avec le problème du sac à dos, ici dans sa version "0/1" (knapsack 0/1 en anglais).

Le problème du sac à dos est un problème classique d'optimisation avec d'importantes applications théoriques et industrielles.

Soit $c\in\mathbb{N}^{\*}$, soit $v$ une séquence de $n$ éléments appartenant à $\mathbb{N}^{*}$, et soit $p$ une séquence de $n$ éléments appartenant à $\\{1,2,...,c\\}$.<br>
Nous appelons $c$ la capacité, $v$ la séquence de valeurs et $p$ la séquence de poids.<br>
Le problème du sac à dos consiste à mettre des objets de poids $p$, dans un sac à dos qui peut contenir un poids maximal $c$, de telle sorte que la valeur des objets choisis soit maximisée.<br>
Plus formellement, cela revient à maximiser
$$\text{val}(x)=\sum_{i=1}^n x[i]\cdot v[i]$$
sous la contrainte $c≥\sum_{i=1}^n x[i]\cdot p[i]$, où $x\in\\{0,1\\}^n$ indique les objets choisis.

Exemple : supposons que le sac ait une capacité de 900 et que l'on cherche à y placer les objets suivants
| objets      |  🥏  |  🎺 |   🥊  |  🧸  |  🪠  |  ⏰  |
|-------------|:---:|:--:|:----:|:---:|:---:|:---:|
| valeurs $v$ |  5  | 50 |  65  |  20 |  10 |  12 |
| poids $p$   | 320 |  700 | 845 | 180 | 70 | 420 |

Le plus simple pour arriver à nos fins est de suivre une **stratégie gloutonne** (une stratégie étape par étape où un critère de classement permet de sélectionner le prochain objet à ajouter). Un critère qui semble prometteur est le ratio valeur/poids de chaque objet. L'idée est alors de placer les objets dans le sac dans l'ordre inverse de leur ratio. Cela semble une bonne stratégie puisque les objets ajoutés maximisent ainsi la valeur qu'ils apportent par rapport à la place qu'ils prennent. Mais si l'approche gloutonne a l'avantage d'être très simple, le revers de la médaille est qu'elle est à courte vue, on perd la vision d'ensemble. Et dans certaines configurations, comme c'est le cas dans notre exemple, cela s'avère contre-productif. 

| objets      | 🥏 |  🎺 | 🥊 | 🧸 |  🪠 | ⏰  |
|-------------|:-:|:--:|:-:|:-:|:--:|:--:|
| ratio $v/p$ | 1/64 |  1/14 | 1/13 | 1/9 | 1/7 | 1/35 |

L'approche gloutonne nous encourage ici à placer d'abord 🪠 dans le sac, puis 🧸, et c'est tout. Plus de place pour l'objet suivant (🥊). On obtient finalement une valeur de 30 et un poids de 250.<br>
Cet exemple nous montre que l'approche gloutonne ne garantit pas l'optimalité (loin de là même, vu la place qu'il reste dans le sac...). On pourrait néanmoins facilement améliorer les choses en continuant d'essayer de placer les éléments de ratio plus grand sans s'arrêter au premier blocage. On tente 🎺, trop grosse, puis ⏰, là ça rentre, et enfin 🥏 qui ne loge pas. On obtient ainsi une valeur de 42 et un poids de 670. Mais même ainsi, on n'a pas obtenu la réponse optimale.



Puisqu'on suppose, dans cette version "0/1" du problème qu'un objet est soit présent, soit absent (pas de fraction et pas de multiple), on peut représenter l'ensemble des possibilités par un **arbre binaire**.<br>
Une méthode sûre pour résoudre le problème consiste alors à parcourir l'arbre dans son entièreté et regarder la valeur et le poids de chaque branche complète (de la racine jusqu'à la feuille), pour choisir au final la branche la plus rémunératrice et respectant la contrainte de capacité.<br>
C'est la méthode par **force brute**.

![](/arbreknapsack.png)

Un algorithme récursif possible pour faire ce travail (à chaque embranchement, on compare avec et sans l'objet)&nbsp;:

```python
def sacadosBrute(v,p,c,i,valeur,poids):
    n = len(v)
    if i == n:
        if poids > c:
            return 0
        else:
            return valeur
    else:
        valeurAvec = valeur + v[i]
        poidsAvec = poids + p[i]
        return max(sacadosBrute(v,p,c,i+1,valeur,poids),sacadosBrute(v,p,c,i+1,valeurAvec,poidsAvec))
```

Comme vous l'aurez deviné, la résolution du problème du sac à dos par force brute est en $O(2^n)$ où $n$ est le nombre d'objets. Donc au-delà de quelques dizaines d'objets, c'est mort...

Pour améliorer les choses, on peut utiliser la méthode "séparation et évaluation" (**branch and bound** ou BB en anglais) qui vise à élaguer l'arbre autant que faire se peut.<br>
Arrivé à un certain sommet de l'arbre, si l'objet se trouvant en dessous amène à un dépassement de la capacité, cela ne sert plus à rien de continuer sa branche, alors on coupe.<br>
L'autre idée est d'utiliser la détermination de la valeur optimale du sac par la méthode gloutonne comme une **heuristique**&nbsp;; si sous un sommet, la somme des valeurs des objets restants aboutit à une valeur totale inférieure à l'heuristique, on coupe.

Voilà un code possible&nbsp;:
```python
def sacadosBB(v,p,c,i,valeur,poids,meilleure,potentiel):
    nbappels += 1
    n = len(v)
    meilleure = max(meilleure,valeur)
    if i == n:
        if poids > c:
            return 0
        else:
            return valeur
    elif valeur + potentiel[i] < meilleure:
        return valeur 
    else:
        valeurAvec = valeur + v[i]
        poidsAvec = poids + p[i]
        sol = sacadosBB(v,p,c,i+1,valeur,poids,meilleure,potentiel)
        if poidsAvec <= c:
            sol = max(sol,sacadosBB(v,p,c,i+1,valeurAvec,poidsAvec,meilleure,potentiel))
        return sol
```

Cela donne un arbre bien plus clairsemé sur notre exemple (et avec, qui plus est, une heuristique qui ne nous aide pas des masses, car très mauvaise).

![](/arbreknapsackBB.png)


Une autre technique possible est d'utiliser la **programmation dynamique** qui est présentée dans la vidéo ci-dessous.


{{<youtube F48AbiZGds0>}}




