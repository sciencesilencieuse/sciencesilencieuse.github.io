+++
title = "Logique"
date = 2021-03-06T14:20:50+01:00
weight = 5
hidden = true
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


# Logique


## Algèbre de Boole

L'algèbre de Boole permet d'algébriser la logique.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube _9nogCrIrIY>}}
</div>

<br>

---


## Logique des propositions

<br>

L'**implication** $A\rightarrow B$ signifie que si $A$ est vraie alors $B$ est vraie.

| $A$ | $B$ | $A\rightarrow B$ |
|-----|-----|-------------------|
| 0   | 0   | 1                 |
| 0   | 1   | 1                 |
| 1   | 0   | 0                 |
| 1   | 1   | 1                 |

L'**implication réciproque** s'écrit $B\rightarrow A$. On peut la lire&nbsp;: $B$ est vraie seulement si $A$ est vraie.

| $A$ | $B$ | $B\rightarrow A$ |
|-----|-----|-------------------|
| 0   | 0   | 1                 |
| 0   | 1   | 0                 |
| 1   | 0   | 1                 |
| 1   | 1   | 1                 |

S'il y a conjonction entre l'implication ($B$ si $A$) et sa réciproque ($B$ seulement si $A$), ce qui s'écrit $(A\rightarrow B) \land (B\rightarrow A)$, alors les propositions $A$ et $B$ sont dites **matériellement équivalentes** $A \leftrightarrow B$.

| $A$ | $B$ | $A\leftrightarrow B$ |
|-----|-----|-------------------|
| 0   | 0   | 1                 |
| 0   | 1   | 0                 |
| 1   | 0   | 0                 |
| 1   | 1   | 1                 |

On peut exprimer l'équivalence entre deux propositions de plusieurs manières&nbsp;:
- $A$ si et seulement si (ssi) $B$&nbsp;;
- pour que $A$, il faut et il suffit que $B$&nbsp;;
-  une condition nécessaire et suffisante pour $A$ est $B$.

L'implication $A\rightarrow B$ est **logiquement équivalente** à sa **contraposée**  $\neg B\rightarrow \neg A$, ce qui signifie que leurs tables de vérité sont les mêmes.

| $A$ | $B$ | $\neg B\rightarrow \neg A$ |
|-----|-----|-------------------|
| 0   | 0   | 1                 |
| 0   | 1   | 1                 |
| 1   | 0   | 0                |
| 1   | 1   | 1                 |

On note $A\rightarrow B \equiv \neg B\rightarrow \neg A$.

L'**équivalence logique** entre deux propositions revient à dire que l'**équivalence matérielle** entre les deux propositions est une tautologie (toujours vraie). L'équivalence matérielle est un opérateur, c'est un élément du **langage de la logique des propositions**. L'équivalence logique ne fait pas partie de ce langage mais d'un **méta-langage**.

Il ne faut pas confondre la contraposée avec **la négation de l'antécédent** $\neg A\rightarrow \neg B$ qui n'est pas logiquement équivalente à l'implication.

| $A$ | $B$ | $\neg A\rightarrow \neg B$ |
|-----|-----|-------------------|
| 0   | 0   | 1                 |
| 0   | 1   | 0                 |
| 1   | 0   | 1                |
| 1   | 1   | 1                 |

La négation de l'antécédant est équivalent à la réciproque de la contraposée. L'utiliser en pensant qu'il est équivalent à l'implication est un raisonnement fallacieux ou **sophisme**.

Une proposition $F$ est une **conséquence logique** d'un ensemble de formules $\Gamma$ si lorsque les $\Gamma$ sont vraies, alors $F$ est vraie.  On note $\Gamma\models F$.<br>Cela revient à dire que $\Gamma\rightarrow F$ est une tautologie.<br>
Comme $\equiv$, $\models$ est un élément du méta-langage.

Exemples : 
- $A\models A\lor B$
- $A\land B \models B$
- **Modus ponens**&nbsp;:<br>
$A \land (A\rightarrow B) \models B$<br>
    >S'il a plu ($A$) alors le sol est mouillé ($B$)<br>
    Il a plu ($A$)<br>
    Alors le sol est mouillé ($B$)
    
    | $A$ | $B$ |$A\rightarrow B$ |  $A \land (A\rightarrow B) $ |$A \land (A\rightarrow B) \rightarrow B$ |
|-----|-----|-------------------|-------------------|-------------------|
| 0   | 0   | 1                 |  0  | 1 |
| 0   | 1   | 1                | 0  | 1 |
| 1   | 0   | 0                | 0  | 1 |
| 1   | 1   | 1                 | 1 | 1 |


- **Modus tollens**&nbsp;:<br>
$\neg B \land (A\rightarrow B) \models \neg A$ <br>
    >S'il a plu ($A$) alors le sol est mouillé ($B$)<br>
    Le sol n'est pas mouillé ($\neg B$)<br>
    Alors il n'a pas plu ($\neg A$)
    
    | $A$ | $B$ |$A\rightarrow B$ |  $\neg B \land (A\rightarrow B) $ |$\neg B \land (A\rightarrow B) \rightarrow \neg A$ |
|-----|-----|-------------------|-------------------|-------------------|
| 0   | 0   | 1                 |  1  | 1 |
| 0   | 1   | 1                | 0  | 1 |
| 1   | 0   | 0                | 0  | 1 |
| 1   | 1   | 1                 | 0 | 1 |

- **Syllogisme hypothétique**&nbsp;:<br>
$(A\rightarrow B) \land (B\rightarrow C) \models A\rightarrow C$
    >Si je bois ($A$), je ne peux pas conduire ($B$).<br>
    Si je ne peux pas conduire ($B$), je dois appeler un taxi ($C$).<br>
    Par conséquent, si je bois ($A$), alors je dois appeler un taxi ($C$).

    Ce syllogisme incarne le principe de **transitivité de l'implication**.
    
    | $A$ | $B$ | $C$ |$A\rightarrow B$ |  $B\rightarrow C$ | $A\rightarrow C$ | $(A\rightarrow B) \land (B\rightarrow C)$ |$(A\rightarrow B) \land (B\rightarrow C) \rightarrow (A\rightarrow C)$ |
|-----|-----|-----|--------------|-------------------|-------------------|---------|---|
| 0   | 0   | 0   |      1        |  1  |  1 | 1 |  1 |
| 0   | 0   | 1    |       1     | 1  |  1 | 1 |  1 |
| 0   | 1   | 0     |       1    | 0  |  1 | 0 | 1 |
| 0   | 1   | 1     |        1    | 1 |  1 | 1 | 1 |
| 1   | 0   | 0     |         0   | 1 |  0 | 0 | 1 |
| 1   | 0   | 1     |         0   | 1 |  1 | 0 | 1 |
| 1   | 1   | 0     |        1   | 0 |   0 |  0 | 1 |
| 1   | 1   | 1     |         1   | 1 |  1 | 1 | 1 |

- **Syllogisme disjonctif**&nbsp;:<br>
$(A\lor B) \land (\neg A) \models B$<br>
    >C'est soit bleu ($A$), soit rouge ($B$)<br>
    Ce n'est pas bleu ($\neg A$)<br>
    Alors c'est rouge ($B$)
    
     | $A$ | $B$ |$A\lor B$ |  $(A\lor B)\land (\neg A) $ | $(A\lor B)\land (\neg A) \rightarrow B$ |
|-----|-----|-------------------|-------------------|-------------------|
| 0   | 0   | 0                 |  0  | 1 |
| 0   | 1   | 1                | 1  | 1 |
| 1   | 0   | 1                | 0  | 1 |
| 1   | 1   | 1                 | 0 | 1 |

Deux **raisonnements fallacieux** sont cousins du modus ponens et du modus tollens&nbsp;:
-  la **négation de l'antécédent**&nbsp;:<br>
$\neg A \land (A\rightarrow B)  \not\models \neg B$ <br>
    >S'il a plu ($A$) alors le sol est mouillé ($B$)<br>
    Il n'a pas plu ($\neg A$)<br>
    Alors le sol n'est pas mouillé ($\neg B$)
    
    C'est faux, le sol peut être mouillé malgré l'absence de pluie.<br>
| $A$ | $B$ |$A\rightarrow B$ |  $\neg A \land (A\rightarrow B) $ |$\neg A \land (A\rightarrow B) \rightarrow \neg B$ |
|-----|-----|-------------------|-------------------|-------------------|
| 0   | 0   | 1                 |  1  | 1 |
| 0   | 1   | 1                | 1  | 0 |
| 1   | 0   | 0                | 0  | 1 |
| 1   | 1   | 1                 | 0 | 1 |
 
   La table de vérité montre que $\neg A \land (A\rightarrow B) \rightarrow \neg B$ n'est pas une tautologie, ce qui prouve qu'il n'y a pas conséquence logique.

- l'**affirmation du conséquent**&nbsp;:<br>
$B \land (A\rightarrow B)  \not\models A$<br>
    >S'il a plu ($A$) alors le sol est mouillé ($B$)<br>
    Le sol est mouillé ($B$)<br>
    Alors il a plu ($A$)
    
    C'est faux. Le sol peut être mouillé pour d'autres raisons.C'est une confusion entre la possibilité et la nécessité.<br>
| $A$ | $B$ |$A\rightarrow B$ |  $B \land (A\rightarrow B) $ |$B \land (A\rightarrow B) \rightarrow A$ |
|-----|-----|-------------------|-------------------|-------------------|
| 0   | 0   | 1                 |  0  | 1 |
| 0   | 1   | 1                | 1  | 0 |
| 1   | 0   | 0                | 0  | 1 |
| 1   | 1   | 1                 | 1 | 1 |

<br>

---

<br>

## Logique des prédicats

<br>

> Tous les hommes sont mortels ($A$)<br>
 Socrate est un homme ($B$)<br>
 Donc Socrate est mortel ($C$)
 
 Ce syllogisme s'écrit en logique des propositions $A\land B \models C$, ce qui n'est pas valide...<br>
 La logique des propositions vit dans un monde constitué seulement de faits. On va dépasser ça grâce à la logique des prédicats qui peuple le monde d'objets (chiens, théories, chiffres, Socrate, etc.), de relations (rouge, premier, plus grand que, être mortel, etc.) et de fonctions (ajouter 1, longueur, nom du frère, etc.). 
 
 L'upgrade de la logique des propositions en logique des prédicats ou <b>logique du 1<sup>er</sup> ordre</b> passe ainsi par l'introduction des notions de **variables**, de **constantes**, de **fonctions**, de **prédicats**, et de **quantificateurs**.
 
 - Les **variables** ($x$, $y$, $z$, etc.) représentent les objets dont on parle.
 - Les **constantes** ($a$, $b$, $c$, etc.) sont des valeurs particulières des objets (ici Socrate).
 - Variables et constantes sont des **termes** du langage.
 - les **fonctions** ($f$, $g$, $h$, etc.) permettent de fabriquer de nouveaux termes à partir d'anciens. Le nombre de terme auquels la fonction s'applique s'appelle sont **arité**. Une constante est une fonction d'arité 0. 
 - les **prédicats** ($P$, $Q$, $R$, etc.) rendent compte des relation entre les termes (ici "être un homme" et "être mortel"). L'arité d'un prédicat est à nouveau le nombre de termes qu'il prend en argument.
 - les quantificateurs sont d'une part le **quantificateur universel** $\foralll$ qui sinfie ("pour tout") et le **quantificateur existentiel** $\exists$ qui signifie ("il existe").
 
 Les constantes et les variables sont issues d’un même ensemble appelé le **domaine**.
 
 Une **formule atomique** est de la forme $P(t_1,\ldots,t_n)$ où $P$ est une prédicat d'arité $n$ et $t_1,\ldots,t_n$ sont des termes.<br>
 On construit des **formules complexes** en combinant des formules atomiques grâce à des connecteurs.
 
 Revenons à l'exemple de départ.<br>
 Appelons $x$ la variable homme, $s$ la constante Socrate, $P$ le prédicat "être un homme" et $Q$ le prédicat "être mortel".<br>
 L'énoncé devient&nbsp;:<br>
 $(\forall x P(x)\rightarrow Q(x))\land P(s)\models Q(s)$<br>
  
  <br>
  
#### Carré d'Aristote

<br>
  
En combinant deux prédicats $P$ et $Q$, leur négation et les deux quantificateurs, on peut construire 4 propositions donts les relations sont représentées dans le carré d'Aristote.

![](/carraristote.png?width=800px)

- Deux propositions sont **contradictoires** si elles ne peuvent être ni vraies ni fausses en même temps.<br>Sont donc contradictoire deux propositions dont l'une est la négation de l'autre.<br>
Pour mieux le voir, on va réécrire les propositions universelles sous des formes logiquement équivalentes utilisant le quantificateur existentiel.<br>
Il est ainsi équivalent de dire $\forall x(P(x)\rightarrow Q(x))$ (tout $P$ est $Q$) et $\neg\exists x (P(x)\land\neg Q(x))$ (il n'existe pas de $P$ qui soit non $Q$). On retrouve bien ainsi que **A** est la négation de **O**.<br>
De même, $\forall x(P(x)\rightarrow \neg Q(x)$ ("aucun $P$ n'est $Q$" ou plus clairement "tous les $P$ sont non $Q$") est équivalent à $\neg\exists x (P(x)\land  Q(x))$ ("il n'existe pas de $P$ qui soit $Q$"). Donc **E** nie bien **I**.

- Deux propositions sont **contraires** ne peuvent pas être vraies en même temps (comme les contradictoires) mais elles peuvent être fausses en même temps par contre. Pour une proposition donnée, on peut trouver plusieurs propositions contraires. Le fait qu'une propositions soit fausse n'entraîne pas qu'une de ses propositions contraires soit vraie.

- Des propositions **subcontraires** peuvent être vraies en même temps mais pas fausses en même temps.

- Des propositions **subalternes** s'opposent par la quantité.  Si la proposition universelle est vraie, alors la proposition particulière est vraie aussi.

---

#### Aparté sur les syllogismes

Aristote s'est amusé à définir et répertorier tous les **syllogismes** possibles.<br>
Un syllogisme est un raisonnement mettant en œuvre trois propositions&nbsp;: les deux premières sont les **prémisses** et elles conduisent à une conclusion.

- La 1<sup>re</sup> prémisse est la majeure. C'est une des propositions universelles **A** ou **I**.
- La 2<sup>e</sup> prémisse est la mineure. Elle peut être d'une des 4 formes **A**, **E**, **I** ou **O**, mais elle doit avoir un terme commun avec la majeure.
- La conclusion peut être d'une des 4 formes, mais elle doit avoir un terme commun avec la majeure.

De toutes les possibilités, Aristote a isolé 24 syllogismes valides dont 4 ont un statut particulier puisqu'ils peuvent générer les autres. Au Moyen-Âge, les scolastiques ont fabriqué des moyens mnémotechniques à base des lettres correspondant aux formes des propositions. Les 4 stars sont alors&nbsp;:

- B**a**rb**a**r**a** (pour **AAA**) dont l'exemple type est celui du début avec Socrate (où il faut remplacer "Socrate est un homme" et "Socrate est mortel" par "tous les Socrates sont des hommes" et "tous les Socrates sont mortels".<br>
    > Tout P est Q<br>
    Tout R est P<br>
    Donc tout R est Q
    
- C**e**l**a**r**e**nt (pour **EAE**)&nbsp;:
    > Aucun P n'est Q<br>
    Tout R est P<br>
    Donc aucun R n'est Q

- D**a**r**i**<b>i</b> (pour **AII**)&nbsp;:
    > Tout P est Q<br>
    Quelque R est P<br>
    donc quelque R est Q

- F**e**r**i**<b>o</b> (pour **EIO**)&nbsp;:
    > Aucun P n'est Q<br>
    Quelque R est P<br>
    donc quelque R n'est pas Q

Les syllogismes, c'est mignons, mais ils n'ont à peu près jamais été utilisés par les mathématiciens pour leurs démonstrations...
 
 ---
 
#### Variables libres et liées

<br>
 
On dit qu’une occurrence de la variable $x$ dans une formule $F$ est **liée** si un quantificateur porte sur elle.<br>
Si aucun quantificateur ne porte sur l'occurence de la variable, on parle d’occurrence **libre**. <br>
Une variable est **libre** si toutes ses occurrences sont libres.<br>
Une variable est **liée** si elle a au moins une occurrence liée. On parle aussi de variable muette dans ce dernier cas.

Exemple&nbsp;:<br>
Dans $\forall x (P(x)\rightarrow Q(x,y))$, $x$ est lié et $y$ est libre.

Une formule sans variable libre est dit **close** (ou fermée).<br>
Une **théorie** est un ensemble de formules closes.

<br>

### Aspect sémantique

#### Interprétations et modèles

<br>

Les **interprétations** visent à donner une valeur de vérité aux formules. Pour cela, l'interprétation $I$ d'une formule $F$ sur un domaine $D$ pioche dans $D$ pour affecter des valeurs aux constantes et associe à chaque symbole de prédicat une relation sur le domaine (de la bonne arité) et à chaque symbole de fonction une fonction sur le domaine (toujours de la bonne arité).


Une formule atomique $P(t_1,\ldots,t_n)$ est vraie dans une interprétation $I$ sur le domaine $D$ si et seulement si les éléments du domaine qui sont l'interprétation des termes $t_1,\ldots,t_n$ sont dans la relation correspondant à l'interprétation du prédicat $P$.

La valeur de vérité d'une formule complexe est calculée à partir des valeurs de vérités des atomes dont elle est composée en suivant les règles de la logique des propositions.

Exemples :<br>

> Interprétons $F = \forall x P(x)\rightarrow Q(x)$ sur le domaine $\\{a,b,c\\}$.
    | $x$ | $P_I(x)$ |$Q_I(x)$ | 
|-----|-----|-------------------|
|  $a$   | 1   | 1                 |  
| $b$  | 0   | 1                | 
| $c$   | 0   | 0                | 
>
> Dans cette interprétation, $F$ est vraie car $P_I(x)\rightarrow Q_I(x)$ est bien vraie pour toutes les valeurs de $x$.
>
> Mais il suffit d'interpréter $P(x)$ un peu différemment pour que $F$ devienne fausse&nbsp;:
    | $x$ | $P_{I'}(x)$ |$Q_{I'}(x)$ | 
|-----|-----|-------------------|-------------------|
|  $a$   | 1   | 1                 | 
| $b$  | 0   | 1               | 
| $c$   | 1   | 0                | 


> De manière moins arbitraire, on cherche en général une interprétation qui a du sens.<br>
> La formule $F = \forall x\forall y (P(x,a)\land P(y,x)\rightarrow \neg P(y,a)$ peut vouloir dire "les amis des amis de $a$ ne sont pas amis de $a$" en interprétant $P$ comme une relation d'amité.<br>
Considérons l'interprétation suivante&nbsp;: $D=\\{\text{Anna}, \text{Bob}, \text{Joe}, \text{Clovis},  \text{Aline}\\}$, $a_I=\text{Anna}$, $P_I=\\{ (\text{Anna},\text{Joe}), (\text{Anna},\text{Bob}), (\text{Joe},\text{Clovis}), (\text{Bob},\text{Aline}) \\}$.<br>
Anna est amie avec Joe et Bob, Joe est ami avec Clovis, Bob est ami avec Aline, et ni Clovis, ni Aline ne sont amis avec Anna. Donc la formule est vraie dans cette interprétation.
>
> On aurait aussi pu interpréter $P$ comme une relation de supériorité.<br>
Imaginons donc maintenant $I'$ donnée par&nbsp;: $D'=\\{1,5,12,52\\}$, $a_{I'}=5$ et $P_{I'}(x,y)=1$ si $x>y$.<br>
On voit maintenant que $F$ est forcément fausse dans cette interprétation puisque la relation $>$ est transitive.

Une interprétation d'une formule sur un domaine est un **modèle** de cette formule si la formule est vraie pour cette interprétation.<br>
C'est le cas de $I$ pour nos exemples, mais pas de $I'$.

Une formule est **valide** (tautologie) si elle est vraie quelle que soit l'interprétation (si toute interprétation est un modèle).<br>
Aucune des deux formules en exemple n'est valide.<br>
Exemple de formule valide&nbsp;: $\forall x P(x) \rightarrow \exists x P(x)$ (si une propriété est vraie pour tout $x$, alors elle est vraie pour au moins un $x$).

Une formule est **satisfaisable** (ou consistante) s'il elle possède un modèle.


<u>Rq</u> : une formule peut donc être invalide et consistante.

<br>

#### Équivalence et conséquence

<br>

Deux formules $F$ et $F'$ sont sémantiquement **équivalentes** si pour toute interprétation $I$, $F_I=F_I'$ (mêmes tables de vérité).<br>  On note $F\equiv F'$.<br>
Exemple&nbsp;: $\neg\neg P(x) \equiv P(x)$

<br>

Un ensemble de formules $\\{F_1,\ldots,F_n\\}$ **satisfait** une formule $F$ si tout modèle de $\\{F_1,\ldots,F_n\\}$ est aussi modèle de $F$.<br>
On dit que $F$ est **conséquence sémantique** de la théorie$T = \\{F_1,\ldots,F_n\\}$ et on note $\\{F_1,\ldots,F_n\\} \models F$.<br>
Exemple&nbsp;: $P(a)\models \exists x P(x)$

Si $F$ est une formule **valide**, on note $\models F$ (il y a une quantification universelle implicite sur toutes les représentations).

<br>

$\\{F_1,\ldots,F_n\\} \models F$ équivaut à&nbsp;:
- $\models (F_1\land\ldots\land F_n)\rightarrow  F$
-  $\models \neg(F_1\land\ldots\land F_n)\lor  F$
- si les formules sont closes, $ F_1\land\ldots\land F_n \land \neg  F$ est insatisfaisable (preuve par l'absurde).

<br>

### Aspect syntaxique

S'assurer de la validité d'une formule suppose de s'assurer qu'elle est vraie pour un nombre d'interprétations potentiellement infini. Et même lorsqu'il est fini, l'attribution 
