+++
title = "Propositions - Sémantique"
date = 2021-03-06T14:20:50+01:00
weight = 2
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
  td, th {
  text-align: center;
  vertical-align: middle;
  min-width: 3em;
}
#preuve
{
    background-color:#EAEAEA;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#def
{
    background-color:#DCEFFE;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#theo
{
    background-color:#FBE1DE;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
table {
  border-collapse: collapse;
  border: 0;
}
td, th {
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
}
</style>


<br>


<div style="position:relative; width:200px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/duparc.png" style="border-radius:10px;">
</div>

{{%notice info%}}
Notes de lecture du livre *La logique pas à pas* de Jacques Duparc que je paraphrase allégrement. 
{{%/notice%}}

<br>

# Calcul des propositions


<div style="overflow-x: auto;">
<table>
  <tr>
    <th><a href="../logique1/">Syntaxe</a></th>
    <th><a href="../logique2/">Sémantique</a></th>
    <th><a href="../logique3/">Preuve</a></th>
  </tr>
</table>
</div>

<br>

## Sémantique

<br>

### Modèle

<br>

La sémantique concerne l'interprétation des formules. Le calcul propositionnel est très frustre à cet égard. Une variable propositionnelle vaut soit 1, soit 0, c'est-à-dire qu'elle est soit vraie, soit fausse. Et il en est de même pour une formule dont l'interprétation se déduit de celles des variables et des règles qu'impliquent les connecteurs.

<div id="def">

À partir de l'ensemble des variables $VAR$, on peut construire une fonction $\delta$ qui associe une valeur de vérité à certains éléments de $VAR$&nbsp;:<br>$\delta :\\;VAR\rightarrow\set{0,1}$<br>
$\delta$ est une **distribution de valeurs de vérité**.

</div>

$\delta$ permet de définir un **modèle** $\mathcal{M}$ du calcul propositionnel.

![](/semantique1.png?width=500px)

Imaginons qu'un ensemble de formules ne possèdent que deux variables $P$ et $Q$. On a alors 4 modèles différents possibles&nbsp;:

![](/semantique2.png?width=1300px)

- $\mathcal{M}_1$ pour lequel la distribution de valeur de vérité $\delta_1$ est définie par&nbsp;: $\delta_1(P) = 0$ et $\delta_1(Q)=0$
- $\mathcal{M}_2$ pour lequel la distribution de valeur de vérité $\delta_2$ est définie par&nbsp;: $\delta_2(P) = 0$ et $\delta_2(Q)=1$
- $\mathcal{M}_3$ pour lequel la distribution de valeur de vérité $\delta_3$ est définie par&nbsp;: $\delta_3(P) = 1$ et $\delta_3(Q)=0$
- $\mathcal{M}_4$ pour lequel la distribution de valeur de vérité $\delta_4$ est définie par&nbsp;: $\delta_4(P) = 1$ et $\delta_4(Q)=1$

<div id="def">

Pour un modèle $\mathcal{M}$, si $\delta(P)=1$, on note $\mathcal{M}\models P$. Cela signifie que $P$ est vraie dans le modèle $\mathcal{M}$.<br>
À linverse, si $\delta(P)=0$, on écrira $\mathcal{M}\not\models P$.

</div>
<br>
<div id="theo">

Si  $\mathcal{M}\not\models P$ alors $\mathcal{M}\models \neg P$.

</div>

Exemple :<br>
si $\mathcal{M}\models P,\neg Q,R$, cela signifie que dans le modèle $\mathcal{M}$, $P$ et $R$ sont vraies, mais $Q$ est fausse.

<br>

### Évaluation des formules

<br>

Pour évaluer des formules, il faut pouvoir étendre la fonction de distribution de valeurs de vérité des seules variables propositionnelles à toutes les formules de $\mathcal{F}$. $\delta$ devient alors $\delta_\mathcal{F}$ et on construit $\delta_\mathcal{F}$ à partir de $\delta$ en utilisant les règles suivantes&nbsp;:

<div id="def">
<ul>
<li>$\delta_\mathcal{F}(\phi) = \delta(\phi)$ si $\phi$ est une variable propositionnelle.</li>

<li>$\delta_\mathcal{F}(\neg\phi) = 1- \delta_\mathcal{F}(\phi)$ (non $\phi$ est vraie seulement si $\phi$ est fausse).
<div style="position:relative; width:150px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/formsemnot.png"></div></li>
<li>$\delta_\mathcal{F}(\phi \lor\psi) = \max(\delta_\mathcal{F}(\phi) ,\delta_\mathcal{F}(\psi) ) $ ($\phi \lor\psi$ est toujours vraie sauf lorsque les deux sous-formules $\phi$ et $\psi$ sont toutes deux fausses).
<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/formsemou.png"></div></li>
<li>$\delta_\mathcal{F}(\phi \land \psi) = \delta_\mathcal{F}(\phi) \cdot \delta_\mathcal{F}(\psi)$ ($\phi \land\psi$ est toujours fausse sauf lorsque les deux sous-formules $\phi$ et $\psi$ sont toutes deux vraies).
<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/formsemet.png"></div></li>
<li>$\delta_\mathcal{F}(\phi \rightarrow \psi) = \max(1- \delta_\mathcal{F}(\phi) ,\delta_\mathcal{F}(\psi) )$ ($\phi \rightarrow \psi$ est toujours vraie sauf quand à la fois $\phi$ est vraie et $\psi$ est fausse).
<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/formsemimp.png"></div></li>
<li>$\delta_\mathcal{F}(\phi \leftrightarrow \psi) = \max(\delta_\mathcal{F}(\phi) \cdot\delta_\mathcal{F}(\psi), (1-\delta_\mathcal{F}(\phi) )\cdot(1-\delta_\mathcal{F}(\psi) ) )$ ($\phi \leftrightarrow \psi$ est vraie lorsque $\phi$ et $\psi$ ont la même valeur de vérité).
<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="/formsemequ.png"></div></li>
</ul>
</div>

<br>

Avec nos petits coloriages, on peut maintenant s'atteler à la valeur de vérité d'une formule complexe dans un modèle donné.<br>

Soit le modèle $\mathcal{M}$ défini par $\mathcal{M}\models P,\neg Q, R$ et la formule $\phi$ qu'on s'est amusé à linéariser [à la fin du chapitre sur la syntaxe](../logique1/#linéarisation-dune-formule). On va partir des feuilles et remonter jusqu'à la racine de l'arbre.
![](/gifverite.gif)

Comme la racine est fausse, la formule $\phi$ est fausse dans ce modèle&nbsp;: $\mathcal{M}\not\models\phi$.<br>
La formule n'est d'ailleurs vraie que dans un seul des 8 modèles possibles.
![](/huitmodeles.png)

Si la hauteur $n$ de la formule est grande, le coloriage devient vite impraticable car trop long. En imaginant que tous les opérateurs sont binaires et que chaque branche est de longueur $n$, cela nous demanderait le coloriage de $0+2+2^2+\ldots+2^{n-1}=2^n-1$ nouveaux nœuds. Avec une formule de hauteur 31, ce qui ne semble pas délirant, on pourrait se retrouver à devoir colorier plus d'un milliard de nœuds...

<br>

### Formules logiquement équivalentes

<br>

<div id="def">

Une formule $\phi$ est <b>satisfaite</b> dans un modèle $\mathcal{M}$ si elle est vraie dans ce modèle. La distribution de valeur de vérité $\delta$ qui caractérise $\mathcal{M}$ vaut alors 1.<br>
$\mathcal{M}\models\phi$ signifie que $\delta_\mathcal{F}(\phi) = 1$ et $\mathcal{M}\not\models\phi$ signifie que $\delta_\mathcal{F}(\phi) = 0$. 

</div>
<br>
<div id="def">

Deux formules $\phi$ et $\psi$ sont deux formules **équivalentes** ($\phi\equiv\psi$) ssi elles sont satisfaites dans les mêmes modèles (mêmes valeurs de vérité dans les mêmes modèles).

</div>

{{%notice info%}}
$\equiv$ est une équivalence sémantique alors que $\leftrightarrow$ est une équivalence syntaxique, parfois appelée équivalence matérielle.
{{%/notice%}}

<div id="theo">

$\phi\equiv\psi$ ssi (pour tout modèle $\mathcal{M}$, $\mathcal{M}\models \phi\leftrightarrow \psi$).

</div>
<br>
<div id="preuve">
<p style="margin-bottom:-1.1em;">Preuve :</p>
<ul>
<li>Si les deux formules sont équivalentes dans un modèle, alors $\delta_\mathcal{F}(\phi)=\delta_\mathcal{F}(\psi)$ dans ce modèle. Et par conséquent $\delta_\mathcal{F}(\phi\leftrightarrow\psi)=1$.</li>
<li>Inversement, si la formule $\phi\leftrightarrow\psi$ est vraie dans tout modèle, les valeurs que prennent $\phi$ et $\psi$ dans ces modèles sont les mêmes.</li>
</ul>
</div>

<p style="margin-bottom:-1.1em;">La relation est&nbsp;:</p>

- **réflexive** : $\phi\equiv\phi$
- **symétrique** : $\phi\equiv\psi$ ssi $\psi\equiv\phi$
- **transitive** : Si ($\phi\equiv\psi$ et $\psi \equiv\theta$) alors $\psi\equiv\theta$

<p style="margin-top:-1em;">Donc il s'agit bien d'une <b>relation d'équivalence</b>.</p>

<br>

### Théorie et conséquence sémantique

<br>

<div id="def">

Une <b>théorie</b> $\mathcal{T}$ du calcul des propositions est un ensemble de formules&nbsp;: $\mathcal{T} \subseteq \mathcal{F}$.

</div>
<br>
<div id="def">
<ul>
<li>$\mathcal{T}$ est <b>satisfaite</b> dans le modèle $\mathcal{M}$ ($\mathcal{M}$ est un modèle de $\mathcal{T}$), noté $\mathcal{M}\models\mathcal{T}$, si pour toute formule $\phi$ de $\mathcal{T}$, $\mathcal{M}\models\phi$.</li>
<li>$\mathcal{T}$  est <b>satisfaisable</b> ou <b>consistante</b> s'il existe au moins un modèle $\mathcal{M}$ tel que $\mathcal{M}\models\mathcal{T}$.</li>
<li>$\mathcal{T}$ est <b>inconsistante</b> si $\mathcal{T}$ n'est pas satisfaisable.</li>
</ul>
</div>

Une théorie est inconsistante lorsqu'elle se contredit. Elle dit alors quelque chose et son contraire, ce qui ne peut être vérifié dans aucun modèle.

Comparons maintenant deux théories $\mathcal{T}$ et $\mathcal{T'}$&nbsp;:

<div id="def">
<ul>
<li>$\mathcal{T'}$ est une <b>conséquence sémantique</b> de $\mathcal{T}$, noté $\mathcal{T} \models \mathcal{T'}$ si tout modèle satisfaisant $\mathcal{T}$ satisfait aussi $\mathcal{T'}$.</li>

<li>$\mathcal{T}$ et $\mathcal{T'}$ sont deux <b>théories équivalentes</b>, noté $\mathcal{T} \equiv \mathcal{T'}$, si elles ont exactement les mêmes modèles.</li>
</ul>
</div>

Plus une théorie raconte de choses, moins elle possède de modèles. Et si elle raconte trop de choses, elle finit par devenir inconsistante car plus aucun modèle ne peut la satisfaire.

On écrit $\mathcal{T}\models\phi$ si la théorie $\mathcal{T'}$ se réduit au singleton $\set{\phi}$.<br>
Et $\models\phi$ est un raccourci pour $\emptyset \models \phi$ ce qui signifie que $\phi$ est une conséquence logique de la théorie vide. Or la théorie vide ne dit rien et est donc satisfaite dans tous les modèles. Cela revient donc à dire que $\phi$ est vraie dans tous les modèles. $\phi$ est appelée une **tautologie**.

![](/inclusiontheorie.png?width=500px)

<div id="theo">

$\mathcal{T}\models\mathcal{T'}$ ssi l'ensemble des modèles de $\mathcal{T}$ est contenu dans l'ensemble des modèles de $\mathcal{T'}$.

</div>

En effet, $\mathcal{T'}$ est une conséquence sémantique de $\mathcal{T}$ si elle est vraie partout où $\mathcal{T}$ est vraie.

Deux théories équivalentes ont exactement les mêmes modèles ($\mathcal{T}\equiv \mathcal{T'}$ correspond à avoir à la fois $\mathcal{T}\models \mathcal{T'}$ et $\mathcal{T'}\models \mathcal{T}$), ce qui revient à dire qu'il n'existe pas de modèle pouvant les discriminer. Elles ne sont pas nécessairement égales (pas nécessairement le même ensemble de formules), mais elles sont égales sur le plan sémantique puisqu'elles signifient la même chose.

{{%notice info%}}
La notion de conséquence sémantique est la version sémantique de la notion de déduction. Dire qu'une formule est une conséquence sémantique d'une théorie, c'est affirmer que partout où la théorie est satisfaite (c.-à-d. quand les hypothèses sont vraies), la formule l'est également. La formule découle donc de la théorie.
{{%/notice%}}

<div id="theo">
<ul>
<li>Si $\mathcal{T}$ est satisfaisable et $\mathcal{T'}\subseteq\mathcal{T}$, alors $\mathcal{T'}$ est également satisfaisable.<br>
En restreignant une théorie, on conserve la non contradiction.<br>
Le contraire n'est évidemment pas vrai. Si on étend une théorie (en ajoutant de nouvelles formules), on diminue le nombre de modèles qui la satisfait. Et on accroît ce nombre de modèles en enlevant des formules à la théorie, pour atteindre à la limite tous les modèles possibles lorsque la théorie devient vide.</li>

<li>Si $\mathcal{T'}$ est inconsistante et $\mathcal{T'}\subseteq\mathcal{T}$, alors $\mathcal{T}$ est également inconsistante.<br>
Étendre une théorie inconsistante ne peut pas la rendre satisfaisable.</li>

<li>Si $\mathcal{T'}\models\phi$ et $\mathcal{T'}\subseteq\mathcal{T}$, alors $\mathcal{T}\models\phi$. Si $\phi$ est la conséquence d'une théorie, alors elle est la conséquence de toute théorie qui étend celle-ci (puisque le nombre de modèles satisfaisant cette théorie étendue s'est réduit et qu'on ne peut donc pas y trouver un nouveau modèle où $\phi$ deviendrait fausse).</li>

<li>$\mathcal{T}$ est inconsistante ssi $\mathcal{T}\models\phi\land\neg\phi$.</li>

<li>$\mathcal{T}$ est inconsistante ssi pour toute formule $\phi$, $\mathcal{T}\models\phi$. En effet, la plus grande théorie possible ($\mathcal{F}$) contient toute formule $\phi$ et sa négation.</li>

<li>$\mathcal{T}\models\phi$ ssi $\mathcal{T}\cup\set{\neg\phi}$ est inconsistante.<br>
En effet, dire que $\phi$ est conséquence sémantique de $\mathcal{T}$, c'est dire que $\phi$ est vraie dans tous les modèles de $\mathcal{T}$ et donc que $\neg\phi$ est fausse dans tous les modèles de $\mathcal{T}$. Impossible donc pour un modèle de satisfaire à la fois $\mathcal{T}$ et $\neg\phi$.<br>
À l'inverse, si $\mathcal{T}\cup\set{\neg\phi}$ est inconsistante, alors $\neg\phi$ est fausse dans tous les modèles de $\mathcal{T}$ et donc $\phi$ est vraie dans tous les modèles de $\mathcal{T}$. D'où $\mathcal{T}\models\phi$.</li>

<li>$\mathcal{T}\cup\set{\phi}\models\psi$ ssi $\mathcal{T}\models\phi\rightarrow\psi$.<br>
La seule possibilité pour que $\phi\rightarrow\psi$ soit fausse est si à la fois $\phi$ est vraie et $\psi$ est fausse.  Or si $\mathcal{T}\cup\set{\phi}\models\psi$, cela signifie que si $\phi$ est vraie dans un modèle, alors $\psi$ est nécessairement vraie dans ce même modèle.<br>
À l'inverse, si $\phi\rightarrow\psi$ est conséquence de $\mathcal{T}$, alors $\psi$ est vraie dans tous les modèles de $\mathcal{T}\cup\set{\phi}$ puisque $\phi\rightarrow\psi$ est vraie dans tous les modèles de $\mathcal{T}$.<br>
En d'autres termes, déduire $\phi\rightarrow\psi$ de nos hypothèses $\mathcal{T}$, c'est la même chose que déduire $\psi$ en faisant l'hypothèse supplémentaire qu'on a $\phi$.</li>
</ul>
</div>

<br>

### Substitution de sous formules équivalentes

<br>

Dans une formule, **substituer** une sous-formule par une autre revient à retirer toutes la partie de l'arbre qui descend d'un nœud et la remplacer par un autre sous-arbre.

Si la sous-formule "greffée" est équivalente à la sous-formule retirée, alors la nouvelle formule est équivalente à l'originale.

L'intérêt des substitutions est de simplifier la formule pour rendre son interprétation plus facile. 

Une simplification forte (bien qu'elle agrandisse l'arbre) consiste à restreindre le nombre de symboles utilisés.

<div id="theo">

On peut ainsi toujours transformer une formule $\phi$ par une formule $\phi_{\neg,\lor,\land}\equiv\phi$ avec tous ses connecteurs logiques dans $\set{\neg,\lor,\land}$.

</div>
<br>
<div id="preuve"> 

Il suffit en effet de substituer les nœuds $\rightarrow$ et $\leftrightarrow$&nbsp;:

![](/substit1.png?width=700px)

</div>
<br>
<div id="theo">

On peut aller encore plus loin en transformant une formule $\phi$ par une formule $\phi_{\neg,\lor}\equiv\phi$ avec tous ses connecteurs logiques dans $\set{\neg,\lor}$.<br>
Ou bien en transformant une formule $\phi$ par une formule $\phi_{\neg,\land}\equiv\phi$ avec tous ses connecteurs logiques dans $\set{\neg,\land}$.

</div>
<br>
<div id="preuve"> 

On utilise pour cela les deux substitutions suivantes&nbsp;:

![](/substit2.png?width=600px)

</div>

Dans l'exemple suivant, on détermine une formule équivalente avec $\neg$ et $\lor$ comme seuls connecteurs logiques (et on élimine les doubles négations dans la dernière étape.

![](/gifsubstit.gif)


<br>

### Jeux d'évaluation

<br>

<div id="theo">

Ernst Zermelo a démontré que les jeux tour à tour à deux joueurs finis, à information parfaite (pas comme la bataille navale), sans hasard, et sans match nul, sont tous <b>déterminés</b>.<br>
Cela signifie qu'un des deux joueurs a une <b>stratégie gagnante</b>.

</div>

<br>

<div id="preuve">

Pour pouver ce résultat, on va représenter toutes les configurations possibles dans le jeu par un arbre dont les nœuds sont étiquetés par un des deux joueurs (0 ou 1) et les arêtes sont ses coups possibles depuis cette position. Les feuilles de l'arbre correspondent à des positions gagnantes, soit pour 0, soit pour 1. Puis on va décrire un algorithme permettant de déterminer lequel des deux joueurs a une stratégie gagnante sur une position donnée.

On commence par colorier en <b style="color:#EE220C">rouge</b> les feuilles gagnantes pour <b style="color:#EE220C">0</b> et en <b style="color:#1DB100">vert</b> les feuilles gagnantes pour <b style="color:#1DB100">1</b>.

Ensuite on regarde les prédécesseurs de ces feuilles&nbsp;:
 - s'il s'agit d'une position de <b style="color:#EE220C">0</b>, alors
    - on le colorie en <b style="color:#EE220C">rouge</b> si au moins un des successeurs est <b style="color:#EE220C">rouge</b> car alors <b style="color:#EE220C">0</b> peut y aller et gagner.
    - on le colorie en <b style="color:#1DB100">vert</b> si tous ses successeurs sont <b style="color:#1DB100">verts</b> (car <b style="color:#EE220C">0</b> n'a alors pas d'autre choix que d'aller sur une position gagnante de <b style="color:#1DB100">1</b> et lui donner la victoire).
- s'il s'agit d'une position de <b style="color:#1DB100">1</b>, alors on inverse le raisonnement&nbsp;:
    - on le colorie en <b style="color:#1DB100">vert</b> si au moins un des successeurs est <b style="color:#1DB100">vert</b> car alors <b style="color:#1DB100">1</b> peut y aller et gagner.
    - on le colorie en <b style="color:#EE220C">rouge</b> si tous ses successeurs sont <b style="color:#EE220C">rouges</b> (car <b style="color:#1DB100">1</b> n'a alors pas d'autre choix que d'aller sur une position gagnante de <b style="color:#EE220C">0</b> et lui donner la victoire).
    
On répète ensuite la procédure avec les prédécesseurs des nœuds que l'on vient de colorer jusqu'à remonter à la racine.

Comme on finira fatalement par colorier ainsi chaque nœud de l'arbre, on prouve qu'il existe au moins une stratégie gagnante pour chacun des sous-arbres et pour le jeu complet.
</div>


Un petit exemple&nbsp;:

![](/gifarbrejeu.gif)

Étant donné un modèle $\mathcal{M}$ et une formule $\phi \in \mathcal{F}$, la valeur que prend la formule dans le modèle peut être obtenue grâce à un jeu inventé par Jaakko Hintikka, noté $\mathbb{E}v(\mathcal{M},\phi)$ et appelé **jeu d'évaluation**. 

$\phi$ doit être écrite avec seulement les connecteurs logiques $\neg$, $\land$ et $\lor$ (ce qui, comme on l'a vu, est toujours possible).

Les deux joueurs s'appellent le **V**érificateur (<b style="color:#1DB100">V</b>) dont le but est de prouver que la formule est satisfaite dans le modèle ($\mathcal{M}\models\phi$) et le **F**alsificateur (<b style="color:#EE220C">F</b>) qui doit montrer que la formule est fausse ($\mathcal{M}\not\models\phi$).

L'arbre du jeu correspond à l'arbre de la formule. Si un nœud est une disjonction $\lor$, c'est au tour de <b style="color:#1DB100">V</b> et si c'est une conjonction $\land$, c'est au tour de <b style="color:#EE220C">F</b>. Si le nœud est une négation $\neg$, les deux joueurs échangent leur rôle. De plus, les propositions vraies correspondent à des positions gagnantes pour <b style="color:#1DB100">V</b> et les propositions fausses sont gagnantes pour <b style="color:#EE220C">F</b>.

Grâce à ces règles, on obtient le théorème suivant&nbsp;:

<div id="theo">
<ol>
<li>$\mathcal{M}\models\phi$ ssi <b style="color:#1DB100">V</b> a une stratégie gagnante dans $\mathbb{E}v(\mathcal{M},\phi)$.</li>
<br>
<li>$\mathcal{M}\models\neg\phi$ ssi <b style="color:#EE220C">F</b> a une stratégie gagnante dans $\mathbb{E}v(\mathcal{M},\phi)$.</li>
</ol>
</div>

<br>

<div style="background-color:#EAEAEA;border-radius:10px;padding:10px">

Prouvons-le par induction sur la hauteur de la formule $\phi$&nbsp;:<br>
<ul>
<li> hauteur $0$&nbsp;: correspond à une formule $\phi$ réduite à une variable propositionnelle. On vérifie alors tout de suite 1. et 2..</li>
<li> hauteur $n+1$&nbsp;:</li>
    <ul>
    <li> si $\phi=\neg\psi$, alors l'hypothèse d'induction opère sur $\psi$.<br>
    Le jeu d'évaluation impliquant $\psi$ est le même que celui impliquant $\phi$ à un changement de rôle près. Si $\psi$ est vraie, alors <b style="color:#1DB100">V</b> a une stratégie gagnante dans $\mathbb{E}v(\mathcal{M},\psi)$ (par hypothèse d'induction) et donc <b style="color:#EE220C">F</b> a une stratégie gagnante dans $\mathbb{E}v(\mathcal{M},\phi)$ (par la règle de changement de rôle). Une $\phi$ fausse donne bien une stratégie gagnante pour <b style="color:#EE220C">F</b>. Et inversement, une $\phi$ vraie donnera bien une stratégie gagnante pour <b style="color:#1DB100">V</b>.</li>
    <li> si $\phi=\psi_1\land\psi_2$, alors l'hypothèse d'induction opère sur $\psi_1$ et $\psi_2$.<br>
    Puisqu'on est sur un $\land$, les règles du jeu stipulent que c'est au tour de <b style="color:#EE220C">F</b> de jouer.<br>
    $\phi$ vraie implique $\psi_1$ et $\psi_2$ vraie, ce qui donne une stratégie gagnante pour <b style="color:#1DB100">V</b> puisque les deux branches sont gagnantes. Et à l'inverse, si $\phi$ est fausse, cela implique qu'au moins une des sous-formules soit fausse et donc que <b style="color:#EE220C">F</b> dispose d'au moins une branche avec une stratégie gagnante ce qui assure que le nœud $\land$ est gagnant pour <b style="color:#EE220C">F</b>.</li>
    <li> si $\phi=\psi_1\lor\psi_2$, alors l'hypothèse d'induction opère sur $\psi_1$ et $\psi_2$.<br>
    C'est au tour de <b style="color:#1DB100">V</b> de jouer d'après les règles. Il n'a besoin que d'une branche gagnante pour rendre le nœud victorieux. Or si $\phi$ est vraie, c'est bien le cas&nbsp;: au moins une des sous-formules est vraie et donc au moins une branche victorieuse s'ouvre à <b style="color:#1DB100">V</b>.<br>
    Et une $\phi$ fausse implique que les deux sous-formules sont fausses aussi et donc victorieuses pour <b style="color:#EE220C">F</b>, ce qui donne le nœud $\lor$ à <b style="color:#EE220C">F</b>.</li>
    </ul>
</ul></div>

Exemple&nbsp;: considérons la formule $\bar{\phi}=\neg (( \neg( \neg P \land (( Q\land ( R \land \neg P )) \lor ( Q \land \neg P ))) \land ( P \land ( R \lor \neg R )) \lor ( ( R \land Q ) ))$ dont l'arbre est représenté ci-dessous. Et on se donne le modèle $\mathcal{M}\models P,Q,\neg R$

![](/formjeu1.png?width=500px)

On commence par colorier les feuilles conformément au modèle, puis on remplace chaque occurrence de $\lor$, $\land$, $\neg$ respectivement par les symboles <b style="color:#1DB100">V</b>, <b style="color:#EE220C">F</b> et <b  style="color:#0076BA">⇔</b>.

![](/formjeu2.png?width=1000px)

Ensuite on s'occupe des changements de rôle&nbsp;: si la branche connectant un nœud à la racine contient un nombre impair d'inversions, on intervertit l'étiquette du nœud, et sinon on la laisse telle quelle.

![](/formjeu3.png?width=1000px)

On peut maintenant retirer les symboles d'inversion et chercher lequel de <b style="color:#1DB100">V</b> ou <b style="color:#EE220C">F</b> a une stratégie gagnante en remontant depuis les feuilles.

![](/formjeu4.png)

Victoire au Falsificateur <b style="color:#EE220C">F</b>&nbsp;! D'après le théorème, on a donc $\mathcal{M}\not\models\phi$.

Les trois stratégies gagnantes possibles pour le Falsificateur sont les suivantes&nbsp;:

![](/formjeu5.png?width=1200px)

<br>

### Table de vérité

<br>

Une **table de vérité** est un tableau regroupant de manière synthétique tous les modèles d'une fomrule donnée.

Si la formule possède $n$ variables propositionnelles, le tableau contient $2^n$ lignes, une ligne par modèle.

Exemple&nbsp;:<br>
Construisons la table de vérité de $\phi := \left(\left(P\land\neg Q\right)\rightarrow\left(\neg\left( P\lor R\right) \leftrightarrow\neg Q\right)\right)$

![](/tabver1.png?width=400px)

![](/tabver2.png?width=700px)

<br>

### Tautologies et contradictions

<br>

<div id="def">
Comme on l'a vu plus haut, $\phi$ est une <b>tautologie</b> si elle est vraie dans tous les modèles, ce qu'on note $\models \phi$.
</div>

On écrit alors aussi&nbsp;: $\phi \equiv \top$

Et rappelons le lien étroit entre la notion de tautologie et celle d'équivalence $\leftrightarrow$&nbsp;:<br>

<div id="theo">
$\phi\equiv \psi$ ssi $\phi\leftrightarrow\psi\equiv\top$
</div>

<br>

<div id="def">
$\phi$ est une <b>contradiction</b> ssi $\phi$ est une tautologie. On note alors $\phi\equiv\bot$.
</div>

Une contradiction est fausse dans tout modèle. Elle n'a donc pas de modèle&nbsp;; une contradiction ne peut jamais avoir lieu.

Tautologies importantes&nbsp;:

<table>
<tr>
<th scope="row" colspan="2">idempotence de la conjonction et de la disjonction</th>
</tr>
<tr>
<td style="width:50%;">$(P\land P)\leftrightarrow P$</td><td>$(P\lor P)\leftrightarrow P$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row" colspan="3">commutativité de la conjonction, disjonction et de la double implication</th>
</tr>
<tr>
<td style="width:33.33%;">$(P\lor Q) \leftrightarrow (Q\lor P)$</td><td style="width:33.33%;">$(P\land Q) \leftrightarrow (Q\land P)$</td><td style="width:33.33%;">$(P\leftrightarrow Q) \leftrightarrow (Q\leftrightarrow P)$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row" colspan="3">associativité de la disjonction, de la conjonction et de la double implication</th>
</tr>
<tr>
<td style="width:33.33%;">$((P\lor Q) \lor R)\leftrightarrow (P\lor(Q\lor R))$</td><td style="width:33.33%;">$((P\land Q) \land R)\leftrightarrow (P\land(Q\land R))$</td><td style="width:33.33%;">$((P\leftrightarrow Q) \leftrightarrow R)\leftrightarrow (P\leftrightarrow(Q\leftrightarrow R))$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row" colspan="2">distributivité de la disjonction par rapport à la conjonction et réciproquement</th>
</tr>
<tr>
<td style="width:50%;">$(P\lor (Q\land R))\leftrightarrow ((P\lor Q)\land (P\lor R))$</td><td>$(P\land (Q\lor R))\leftrightarrow ((P\land Q)\lor (P\land R))$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row" colspan="2">lois d'absorption</th>
</tr>
<tr>
<td style="width:50%;">$(P\land(P\lor Q))\leftrightarrow P$</td><td>$(P\lor(P\land Q))\leftrightarrow P$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row" colspan="2">lois de De Morgan</th>
</tr>
<tr>
<td style="width:50%;">$\neg (P\lor Q) \leftrightarrow (\neg P \land \neg Q)$</td><td>$\neg (P\land Q) \leftrightarrow (\neg P \lor \neg Q)$</td>
</tr>
</table>
<br>
<table>
<tr>
<th scope="row">contraposée</th>
</tr>
<tr>
<td>$(P\rightarrow Q) \leftrightarrow (\neg Q \rightarrow \neg P)$</td>
</tr>
</table>

<br>

Un **raisonnement** consiste généralement à partir d'une tautologie, la prémisse, et à aboutir à de nouvelles tautologies à partir d'implications (une tautologie étant vraie dans tout modèle, elle implique nécessairement une autre tautologie).

Dans un **raisonnement par l'absurde** (preuve par contradiction), pour montrer que $\phi$ est une tautologie, on suppose que $\neg \phi$ est vraie dans au moins un modèle pour aboutir à une contradiction $\psi$ ($\psi\equiv\bot$). Dans les modèles où $\neg \phi$ est vraie, $\neg \phi \rightarrow \psi$ est également vraie. Or $\neg\phi\rightarrow\psi\equiv \neg\neg\phi\lor\psi \equiv \phi\lor\bot \equiv \phi$. Donc dans les modèles où $\neg\phi$ est vraie, $\phi$ est vraie. Par conséquent, il n'y a pas de modèle où $\neg \phi$ est vraie. D'où $\phi\equiv\top$.

<br>

### Formes normales

<br>

Supposons que l'on ait un nombre fini de variables propositionnelles $\set{P_1,P_2,\ldots,P_n}$.<br>
On va construire une formule $\phi$ qui n'est vraie que dans un modèle $\mathcal{M}$ associé à une distribution de vérité $\delta$&nbsp;:<br>
$\displaystyle \phi = (\epsilon_1 P_1\land \epsilon_2 P_2\land\cdots\land\epsilon_n P_n) = \bigwedge_{i=1}^n \epsilon_i P_i$ où $\epsilon_i$ désigne $\neg$ si $\delta(P_i) = 0$ et $\not \\! \neg$ si $\delta(P_i) = 1$ (avec $\not \\! \neg P= P$).

La table de vérité aura bien des zéros partout sauf dans la ligne correspondant au modèle $\mathcal{M}$.

Passons maintenant d'une formule qui vérifie un seul modèle à une formule qui en vérifie plusieurs. Choisissons $\set{\mathcal{M}\_i:i\in I}$ parmi les $2^n$ modèles possibles. En appelant $\phi$ la formule vraie dans $\mathcal{M}\_i$, il suffit de former la formule suivante&nbsp;:<br>
$\displaystyle \phi = \bigvee_{i\in I}\phi_i$ 

<div id="def"">
Une formule $\phi$ est sous <b>forme normale disjonctive</b> si elle peut s'écrire&nbsp;:<br>

$\displaystyle \phi = \bigvee_{1≤i≤k} (\bigwedge_{1≤j≤n_i} \epsilon_{i,j}P_{i,j})$
</div>

On suppose ici que $\phi$ est satisfaite dans $k$ modèles, qu'un modèle $i$ parmi ces $k$ possède $n_i$ variables, et que pour une variable $P_{i,j}$ parmi ces $n_i$, $\epsilon_{i,j}$ désigne soit $\neg$, soit $\not\\!\neg$.

<div id="theo"">
Pour toute formule $\phi$, il existe une formule $\psi$ sous forme normale disjonctive telle que $\phi\equiv \psi$
</div>

<br>

<div id="preuve">
Preuve : si $\phi$ est une contradiction, il suffit de prendre $\psi=P\land\neg P$ (n'importe quelle contradiction fait l'affaire) qui est bien sous une forme normale disjonctive.<br>
Sinon, on construit $\phi$ à partir des modèles où elle est vraie comme expliqué plus haut.
</div>

<br>

<div id="def">
$\phi$ est sous une <b>forme normale conjonctive</b> si elle s'écrit&nbsp;:<br>

$\displaystyle \phi = \bigwedge_{1≤i≤k} (\bigvee_{1≤j≤n_i} \epsilon_{i,j}P_{i,j})$
</div>

<br>

<div id="theo">
Pour toute formule $\phi$, il existe une formule $\psi$ sous forme normale conjonctive telle que $\phi\equiv \psi$.
</div>

<br>

<div id="preuve">
<ul>
<li>Preuve sémantique&nbsp;:</li>

   On va construire une formule sur le modèle de celle ayant aboutit à la forme normale disjonctive mais on va maintenant supposer qu'on veut une formule $\psi$ qui soit vraie dans tout modèle à l'exception de certains.<br>
Considérons $\set{\mathcal{M}\_i: i\in I}$ l'ensemble des modèles dans lesquels $\phi$ est fausse. Si l'ensemble est vide, $\phi$ est une tautologie et $\psi=\bigwedge_{1≤i≤k} (\bigvee_{1≤j≤n_i} P_{i,j})$ marche. Sinon, considérons pour chaque $i$ dans $I$, la formule&nbsp;:<br>
<div style="overflow-x: auto;">

$
\begin{aligned}
\psi_i &= \neg(\epsilon_1 P_1\land\epsilon_2 P_2 \land\cdots \land \epsilon_k P_k)\\\\
&= (\epsilon_1 \neg P_1\lor\epsilon_2 \neg P_2 \lor\cdots \lor \epsilon_k \neg P_k)\\\\
&= \bigvee_{1≤j≤k}\bar{\epsilon}\_j P\_j
\end{aligned}
$
</div>
où $\bar{\epsilon}_i = \neg$ et $\epsilon_i = \not \!\neg $ ssi $\mathcal{M}_i \models P_i$ et inversement $\bar{\epsilon}_i = \not\! \neg$ et $\epsilon_i =  \neg$ ssi $\mathcal{M}_i \not\models P_i$.<br>
Par construction, $\psi_i$ est vraie dans tous les modèles de $\phi$, à l'exception de $\mathcal{M}_i$. Ainsi la formule $\psi = \bigwedge_{i\in I}\psi_i$ est vraie dans tous les modèles possibles, à l'exception de tous les $\mathcal{M}_i$ pour $i$ dans $I$. $\psi$ est donc vraie dans tous les modèles de $\phi$&nbsp;: $\mathcal{M}\models\phi$ ssi $\mathcal{M}\models\psi$, ce qui signifie bien que $\psi \equiv \phi$. 

<li>Ébauchons une preuve syntaxique (par un jeu de réécriture)&nbsp;:</li>
<ul>
    <li>on commence par se débarrasser des connecteurs $\rightarrow$ et $\leftrightarrow$ pous n'avoir plus que $\lor$, $\land$ et $\neg$ et on se débarrasse des doubles négations,</li>
    <li>on utilise les lois de De Morgan pour faire entrer les négations à l'intérieur des formules jusqu'à ce que tous les symboles de négation soient placés devant une variable,</li>
    <li>on distribue la disjonction par rapport à la conjonction pour faire descendre les $\lor$ dans l'arbre de la formule jusqu'à ce qu'ils ne relient plus entre eux que des littéraux (des variables et leur négation).</li>
</div>

<blockquote>
Exemple : Soit $\phi = \neg((\neg P \rightarrow Q)\rightarrow \neg (Q\leftrightarrow P))$

<div style="overflow-x: auto;">

 $\begin{aligned}
\phi &\equiv \neg ( \neg (\neg P \rightarrow Q ) \lor \neg ( Q \leftrightarrow P))\\\\
&\equiv \neg ( \neg ( \neg \neg P \lor Q ) \lor \neg ( Q \leftrightarrow P )\\\\
&\equiv \neg ( \neg (\neg\neg P\lor Q ) \lor \neg ( ( \neg Q \lor P ) \land ( \neg P \lor Q ) )\\\\
&\equiv \neg( \neg( P \lor Q ) \lor \neg ( ( \neg Q \lor P ) \land ( \neg P \lor Q ) )\\\\
&\equiv \neg \neg ( \lor Q ) \land \neg \neg ( ( \neg Q \lor P ) \land ( \neg P \lor Q ) ) \\\\
& \equiv ( P \lor Q ) \land ( ( \neg Q \lor P ) \land ( \neg P \lor Q ) ) \\\\
& \equiv ( P \lor Q ) \land ( \neg Q \lor P ) \land ( \neg P \lor Q )
\end{aligned}
$

</div>
</blockquote>

Et pour construire de la même manière une formule sous forme normale disjonctive, il suffit d'utiliser à la fin la distribution de la conjonction par rapport à la distribution puisqu'il s'agit cette fois-ci de faire descendre $\land$ dans l'arbre.

{{%notice tip%}}
Sans stratégie, **tester la validité** d'une formule revient à vérifier sa véracité pour chaque combinaison des valeurs des variables, ce qui va dépendre exponentiellement du nombre de variables (ce qui devient vite impraticable). L'équivalence entre le tableau de vérité de la formule et sa forme normale conjonctive ($\phi=\bigwedge_{i}\phi_i$) permet un test syntaxique rapide de la validité. Pour vérifier que chaque $\phi_i$ est une tautologie, il suffit de s'assurer de la présence dans chaque $\phi_i=\bigvee_j P_j$ d'une couple contradictoire $P_j$ et $\neg P_j$.<br>
Et pour un **test de satisfabilité**, la forme normale disjonctive $\phi=\bigvee_j \phi_i$ est plus adaptée. On va à nouveau tester la présence d'un couple de variables contradictoires dans les $\phi_i=\bigwedge_{j}P_j$. Si on revient bredouille pour au moins un $i$ alors la formule est satisfaisable.
{{%/notice%}}

<br>

### Connecteurs binaires et systèmes complets de connecteurs

<br>

Appelons $*$ un connecteur binaire quelconque. On a 4 modèles possibles à considérer et comme la valeur de $P\*Q$ dans chacun de ces modèles peut être soit vraie, soit fausse, cela fait en tout $4^2$ tables de vérité possibles et donc 16 connecteurs binaires différents&nbsp;:

<div style="overflow-x: auto;">
<table id="tabcondit">
<tr>
<th>P</th><th style="border-right: solid lightgrey 2px;">Q</th><th>$\bot$</th><th>$\not \!\lor$</th><th>$\not \! \leftarrow$</th><th>$\not\!\pi_1$</th><th>$\not \rightarrow$</th><th>$\not\!\pi_2$</th><th>$\not \! \leftrightarrow$</th><th>$\not \!\!\land$</th><th>$ \land$</th><th>$ \leftrightarrow$</th><th>$ \pi_2$</th><th>$ \rightarrow$</th><th>$ \pi_1$</th><th>$ \leftarrow$</th><th>$ \lor$</th><th>$ \top$</th>
</tr>
<tr>
<td>0</td><td style="border-right:  solid lightgrey 2px;">0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td>
</tr>
<tr>
<td>0</td><td style="border-right:  solid lightgrey 2px;">1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td>
</tr>
<tr>
<td>1</td><td style="border-right:  solid lightgrey 2px;">0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td>
</tr>
<tr>
<td>1</td><td style="border-right:  solid lightgrey 2px;">1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td>
</tr>
</table>
</div>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
  // Sélectionne toutes les cellules du tableau
  var cellules = document.querySelectorAll('#tabcondit td');

  // Parcourt chaque cellule pour vérifier son contenu
  cellules.forEach(function(cellule) {
    if(cellule.textContent === '0') {
      // Si le contenu est zéro, définit le fond à gris
      cellule.style.backgroundColor = '#F7C0B7';
    } else {
      // Sinon, définit le fond à blanc
      cellule.style.backgroundColor = '#D2FBB5';
    }
  });
});
</script>

On retrouve ainsi les 4 connecteurs binaires du calcul des propositions ($\lor$, $\land$, $\rightarrow$, $\leftrightarrow$) mais aussi le **dual** de chacun d'eux ($\not\\!\lor$, $\not\\!\\!\land$, $\not\\!\rightarrow$, $\not\\!\leftrightarrow$) où $P\\!\not \\!* \\;Q\equiv\neg(P*Q)$.<br>
On trouve aussi l'implication inverse $\leftarrow$ et son dual $\not\\!\leftarrow$, le connecteur $\top$ qui vaut toujours 1 et son dual $\bot$ qui vaut 0 dans tout modèle.<br>
Et on découvre enfin deux connecteurs $\pi_1$ qui donne à la formule la valeur de $P$ et $\pi_2$ qui lui donne la valeur de $Q$ et leurs duaux $\not\\!\pi_1$ et $\not\\!\pi_2$ qui donnent respectivement $\neg P$ et $\neg Q$.

<div id="theo">

Chaque connecteur peut être exprimé par une formule du calcul des propositions (c.-à-d. qu'on peut les écrire à partir des 4 connecteurs binaires de base et la négation).

</div>
<br>
<div id="preuve">
$P\;\bot \;Q \equiv P\leftrightarrow \neg P$<br>
$P\not \! \lor \; Q \equiv \neg(P\lor Q)$<br>
$P\not \! \rightarrow Q \equiv \neg(P\rightarrow Q)$<br>
$P\!\not \! \pi_1 \;Q \equiv \neg P$<br>
$P\,\not \! \leftarrow Q \equiv \neg(Q\rightarrow P)$<br>
$P\!\not \! \pi_2 \;Q \equiv \neg Q$<br>
$P\,\not \! \leftrightarrow Q \equiv \neg(P\leftrightarrow Q)$<br>
$P\,\not \!\!  \land \;\; Q \equiv \neg(P\land Q)$<br>
$P \leftarrow Q \equiv Q \rightarrow P$<br>
$P \; \top \; Q \equiv P \leftrightarrow P$<br>
$P\; \pi_1 \;Q \equiv P$<br>
$P\; \pi_2 \;Q \equiv Q$<br>
</div>
<br>
<div id="theo">

On peut généraliser à des connecteurs d'arité quelconque. Toute formule $\gamma$ écrite avec ces connecteurs est équivalente à une formule du calcul des propositions. 

</div>
<br>
<div id="preuve">

Il suffit de trouver une formule $\phi$ qui ait les mêmes modèles que $\gamma$.<br>
Imaginons par exemple que les variables propositionnelles de $\gamma$ soient $P_1$, $P_2$, $P_3$ et $P_4$ et supposons que dans un modèle $\mathcal{M}$ de $\gamma$, $P_3$ soit fausse et les autres vraies, alors la formule suivante sera vraie dans le modèle $\mathcal{M}$ et seulement dans lui&nbsp;: $\phi_\mathcal{M}=\left(P_1\land P_2 \land \neg P_3 \land P_4\right)$.

Construisons maintenant une formule $\phi$ vraie dans tous les modèles $\mathcal{M}\_i$ tels que $\mathcal{M}\_i \models \gamma$ en formant la disjonction des formules $\phi_{\mathcal{M}\_i}$&nbsp;: $\phi = \bigvee\_{1≤i≤n}\phi_{\mathcal{M}_i}$.

$\phi$ est vraie dans un modèle possible de $\gamma$ si seulement si $\gamma$ est vraie dans ce modèle. On a donc bien $\phi\equiv\gamma$.
</div>
<br>
<div id="def">
<p>Un ensemble de connecteurs est appelé <b>système complet de connecteurs</b> si pour toute formule $\phi \in \mathcal{F}$, il existe une formule $\gamma$ écrite seulement avec ces connecteurs et telle que $\phi\equiv\psi$.</p>

<p>Ce système complet est dit <b>minimal</b> si tout ensemble plus petit de connecteurs n'est pas complet.</p>
</div>


On a déjà montré que toute formule du calcul des propositions peut s'écrire avec uniquement les connecteurs $\set{\neg,\lor\land\rightarrow,\leftrightarrow}$ et plus avant, on a vu qu'on pouvait écrire les autres connecteurs à partir de $\set{\neg,\lor}$ ou de $\set{\neg,\land}$.


<div id="theo">
$\set{\neg,\lor,\land\rightarrow,\leftrightarrow}$, $\set{\neg,\lor}$ et $\set{\neg,\land}$ sont donc des systèmes complets de connecteurs.
</div>

On voit tout de suite que $\set{\neg,\lor,\land\rightarrow,\leftrightarrow}$ n'est pas minimal mais qu'en est-il pour les deux autres&nbsp;?

<div id="theo">
$\set{\neg,\lor}$ et $\set{\neg,\land}$ sont des systèmes complets minimaux de connecteurs.
</div>
<br>
<div id="preuve">

<p style="margin-bottom:-1.1em;">Prouvons-le pour $\set{\neg,\lor}$ (il suffit d'intervertir $\lor$ et $\land$ pour obtenir l'autre preuve) en considérant toutes les réductions de l'ensemble possibles&nbsp;:</p>
<ul>
<li> $\set{}$ : les formules ne sont plus que des variables propositionnelles. Or une variable propositionnelle $R$ ne peut pas être équivalente à une formule comme $P\lor Q$. Raisonnons par l'absurde en supposant que $R\equiv P\lor Q$&nbsp;:
<ul>
<li>si $R=P$, on considère le modèle dans lequel $P$ est fausse et $Q$ est vraie pour aboutir à une contradiction.</li>
<li>si $R=Q$, on considère le modèle dans lequel $Q$ est fausse et $P$ est vraie pour aboutir à une contradiction.</li>
<li>si $R\not = P,Q$, on considère n'importe quel modèle où $R$ est fausse et $P$ est vraie pour aboutir à une contradiction.</li>
</ul>
</li>
<li> $\set{\neg}$ : dans ce cas les formules s'écrivent $\neg\cdots\neg R $. Si elle contient un nombre pair de négations, on retombe sur le cas précédent, sinon il suffit de trouver une formule du calcul des propositions qui ne puisse pas être équivalente à $\neg R$.  Et $P\lor Q$ convient à nouveau. Raisonnons par l'absurde en supposant que $\neg R\equiv P\lor Q$&nbsp;:&nbsp;:
<ul>
<li>si $R=P$, il suffit d'un modèle où $P$ est vraie pour aboutir à une contradiction.</li>
<li>si $R=Q$, il suffit d'un modèle où $Q$ est vraie pour aboutir à une contradiction.</li>
<li>si $R\not = P,Q$,  il suffit d'un modèle où $R$ et $P$ sont vraies pour aboutir à une contradiction.</li>
</ul></li>
<li>$\set{\lor}$ : montrons qu'on ne peut pas créer de formule équivalente à $\neg P$ avec ce connecteur.<br>
Toutes les formules construisibles sont dans ce cas de la forme $(P_1\lor\cdots\lor P_k)$.<br>
Raisonnons par l'absurde en supposant que $(P_1\lor\cdots\lor P_k)\equiv \neg P$<br>
 Il suffit de considérer le modèle où tous les $P_i$ et $P$ sont vraies pour aboutir à une contradiction.
</li>
</ul>
</div>

On peut faire encore mieux avec un système minimal ne contenant qu'un seul connecteur&nbsp;:

<div id="theo">
$\set{\not\!\lor}$ et $\set{\not\!\!\land}$ sont des systèmes complets minimaux de connecteurs.
</div>

On note parfois $\not\\!\lor$ avec une flèche vers le bas $\downarrow$, appelée flèche de Peirce, et $\not\\!\\!\land$ avec une flèche vers le haut $\uparrow$ ou une barre $\mid$, appelée barre de Sheffer.

<div id="preuve">
<p>Prouvons que $\set{\not\!\lor}$ est un système minimal complet&nbsp;:</p>

<p>Le caractère minimal ne faisant pas de doute, il suffit de montrer que $\set{\not\!\lor}$ est complet, c.-à-d. que pour toute formule $\phi \in \mathcal{F}$, il existe une formule équivalente $\psi$ écrite seulement avec $\not\!\lor$.</p>

<p style="margin-bottom:-1.1em;">On va supposer que la formule $\phi$ ne contient que des négations et des disjonctions ($\set{\neg,\lor}$ est complet...) et on va raisonner par induction sur la hauteur de la formule&nbsp;:</p>

<ul>
<li> Si $\phi$ est de hauteur 0, alors $\phi=P$ et la formule $(P\not\!\lor \;P)\not\!\lor \;(P\not\!\lor \;P)$ convient puisque&nbsp;:<br>
<div style="overflow-x: auto;">

$
\begin{aligned}
(P\not\\!\lor \\;P)\not\\!\lor\\;(P\not\\!\lor \\;P) &\equiv \neg((P\not\\!\lor \\;P)\lor(P \not\\!\lor \\;P)\\\\
&\equiv \neg (P \not\\!\lor \\;P)\\\\
&\equiv \neg\neg(P\lor P)\\\\
&\equiv \neg\neg P\\\\
&\equiv P
\end{aligned}
$

</div>
</li>
<li> On suppose maintenant que toutes les formules de hauteur $n$ peuvent s'écrire seulement avec $\not\!\lor$ et on vérifie que c'est encore le cas pour les formules de hauteur $n+1$. Comme $\phi$ ne contient que $\neg$ et $\lor$, seuls deux cas se présentent&nbsp;:
<ul>
<li>$\phi=\neg\varphi$&nbsp;: par hypothèse d'induction, $\varphi$ est équivalente à une formule $\psi'$ qui ne s'écrit qu'avec $\not\!\lor$. La formule $\psi=\psi' \not\!\lor \; \psi'$ convient&nbsp;:
<div style="overflow-x: auto;">

$
\begin{aligned}
\psi' \not\\!\lor  \\; \psi' &\equiv \neg(\psi'\lor \psi')\\\\
&\equiv \neg \psi'\\\\
&\equiv \neg \varphi\\\\
&\equiv \phi\\\\
\end{aligned}
$

</div>
</li>
<li>$\phi=\phi_1\lor \phi_2$&nbsp;: par hypothèse d'induction, $\phi_1$ et $\phi_2$ sont équivalentes respectivement à $\psi_1$ et $\psi_2$ qui ne s'écrivent qu'avec $\not\!\lor$. La formule $(\psi_1 \not\!\lor \; \psi_2)\not\!\lor \; (\psi_1 \not\!\lor \;\psi_2)$ convient&nbsp;:
<div style="overflow-x: auto;">

$
\begin{aligned}
(\psi_1 \not\\!\lor \\; \psi_2)\not\\!\lor \\;(\psi_1 \not\\!\lor \\;\psi_2) &\equiv \neg((\psi_1 \not\\!\lor \\;\psi_2)\lor(\psi_1 \not\\!\lor \\;\psi_2)\\\\
&\equiv \neg (\psi_1 \not\\!\lor \\;\psi_2)\\\\
&\equiv \neg\neg(\psi_1\lor \psi_2)\\\\
&\equiv  \psi_1\lor\psi_2\\\\
&\equiv  \phi_1\lor\phi_2\\\\
&\equiv \phi
\end{aligned}
$

</div>
</li>
</ul>
</ul>
</div>

{{%notice note%}}
C'est ainsi qu'un ordinateur peut être construit entièrement avec des portes logiques NAND ou NOR qui sont dites universelles (il semblerait que l'Apollo Guidance Computer qui servit à poser l'homme sur la Lune pendant le programme Apollo était construit exclusivement avec des portes NOR). Ces portes réalisent en effet électroniquement les opérations logiques $\not\\!\\!\land$ et $\not\\!\lor$ et permettent donc de construire toutes les formules de la logique des propositions. 
{{%/notice%}}


<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Agc_view.jpg/1280px-Agc_view.jpg" style="border-radius:20px;"></div>
<br>

{{%notice note%}}
Après la notion de **modèle**, on va maintenant s'intéresser à la notion de **preuve**. Et ces deux notions seront réunies par le **théorème de complétude**.
{{%/notice%}}

<br>
<p style="text-align:center;">
<a href="../logique3" style="font-size:2em;">Suite : <b>Théorie de la démonstration</b></a>
</p>
