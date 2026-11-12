+++
title = "Calcul des propositions - Preuve"
menuTitle = "Preuve"
date = 2021-03-06T14:20:50+01:00
weight = 3
aliases = ["/logique/logique3/"]
css = "logique.css"
+++

# Calcul des propositions
<p class="chap-sous">Preuve&nbsp;: démontrer sans regarder le sens</p>

<nav class="chap-nav" aria-label="Chapitres">
<a href="../syntaxe/">Syntaxe</a>
<a href="../semantique/">Sémantique</a>
<a href="../preuve/" class="actif">Preuve</a>
</nav>

<div class="source-livre">
<img src="/duparc.png" alt="Couverture du livre La logique pas à pas">
<p>Notes de lecture de <i>La logique pas à pas</i> de Jacques Duparc, que je paraphrase allégrement en y glissant quelques exemples, histoires et énigmes.</p>
</div>


Pour savoir si une formule est une tautologie, on a jusqu'ici passé en revue tous ses modèles. C'est sûr, mais ce n'est pas ainsi que raisonne un mathématicien&nbsp;: personne ne démontre le théorème de Pythagore en inspectant tous les triangles. On part de ce qu'on sait, et on avance pas à pas, par des étapes que n'importe qui peut contrôler.

Une **preuve**, c'est cela&nbsp;: un objet fini, purement syntaxique, qu'une machine pourrait vérifier sans rien comprendre à ce qu'elle lit. Toute la question est de savoir si ce jeu de symboles attrape exactement les vérités de la sémantique.

## Théorie de la démonstration


<p style="margin-bottom:-1.1em;">Une preuve ou une démonstration&nbsp;:</p>

- est de longueur finie,
- est vérifiable mécaniquement,
- s'appuie sur des hypothèses,
- aboutit à une conclusion.

Une démonstration permet de mettre au jour une vérité syntaxique  (s'appuyant sur un jeu de règles) plutôt que sémantique (faisant intervenir les modèles d'une théorie).

On a vu que $\phi$ est une **conséquence sémantique** de la théorie $\mathcal{T}$, noté $\mathcal{T}\models \phi$, si $\phi$ est vraie dans tous les modèles de $\mathcal{T}$.

On va maintenant se pencher sur la **conséquence syntaxique** de la théorie $\mathcal{T}$. $\phi$ est une conséquence syntaxique de $\mathcal{T}$, noté $\mathcal{T} \vdash \phi$, s'il existe une démonstration de $\phi$ sur la base d'hypothèses contenues dans la théorie $\mathcal{T}$. Fini les modèles, on ne s'intéresse plus qu'à la syntaxe par un jeu de réécriture.

Quel est le lien entre les conséquences sémantiques et syntaxiques&nbsp;?

Si on veut que nos démonstrations aboutissent à des résultats ayant du sens, il faut qu'ils correspondent aux conséquences sémantiques. Et à l'inverse, on souhaite qu'une conséquence sémantique puisse se démontrer mécaniquement. Le système de règles de démonstrations va être consciencieusement mis au point afin d'aboutir à l'équivalence entre les deux conséquences&nbsp;: $\mathcal{T}\models \phi$ si et seulement si $\mathcal{T} \vdash \phi$. Et en particulier, on veut qu'une formule soit une tautologie si et seulement si elle est prouvable sans hypothèse&nbsp;: $\models \phi$ ssi $\vdash \phi$.

<p style="margin-bottom:-1.1em;">On va distinguer trois familles de systèmes de démonstration différents pour le calcul des propositions&nbsp;:</p>

- les **systèmes axiomatiques**,
- la **déduction naturelle**,
- le **calcul des séquents**.


### Les systèmes axiomatiques


Les systèmes axiomatiques ou systèmes **"à la Hilbert"** reposent sur un petit nombre de vérités élémentaires, les **axiomes**, et sur des **règles** de construction qui préservent la vérité.<br>
Les démonstrations obtenues sont concises mais très peu explicatives. Ça marche, mais on ne sait pas pourquoi, tant ces preuves manquent de structure.

Exemple d'un système axiomatique reposant sur le système complet de connecteurs $\set{\neg,\rightarrow}$ et comportant 3 axiomes pour une seule règle&nbsp;:

<div style="overflow-x: auto;">
<table>
<tr>
<th colspan="3">Axiomes</th>
</tr>
<tr>
<td style="width:33.33%">$(1)\quad\phi\rightarrow (\psi\rightarrow\phi)$</td><td style="width:33.33%">$(2)\quad(\phi\rightarrow (\psi\rightarrow\theta))\rightarrow ((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta))$</td><td>$(3)\quad(\neg\psi\rightarrow \neg\phi) \rightarrow ((\neg \psi\rightarrow\phi)\rightarrow \psi)$</td>
</tr>
<tr>
<th colspan="3">Règle</th>
</tr>
<tr>
<td colspan="3"><i>modus ponens</i>&nbsp;: de $\phi$ et $\phi\rightarrow \psi$ on déduit $\psi$</td>
</tr>
</table>
</div>

<div class="encadre prune">
<div class="encadre-titre">Pourquoi une règle n'est pas un axiome&nbsp;: Achille et la Tortue</div>

En 1895, Lewis Carroll, logicien à Oxford quand il n'écrivait pas *Alice*, publie dans la revue *Mind* un dialogue de trois pages. La Tortue accorde à Achille deux prémisses&nbsp;: $A$, et «&nbsp;si $A$ alors $B$&nbsp;». Achille triomphe&nbsp;: donc $B$&nbsp;!

«&nbsp;Pas si vite, dit la Tortue. Pourquoi serais-je forcée d'accepter $B$&nbsp;? — Parce que si $A$ et $A\rightarrow B$ sont vraies, alors $B$ l'est. — Voilà une nouvelle prémisse. Notez-la dans votre carnet, je l'accepte volontiers.&nbsp;» Achille note $(A\land(A\rightarrow B))\rightarrow B$. «&nbsp;Et maintenant, vous devez accepter $B$&nbsp;! — Pourquoi&nbsp;? — Parce que si ces trois prémisses sont vraies… — Encore une prémisse&nbsp;! Notez, notez.&nbsp;» Le carnet d'Achille n'est toujours pas terminé.

La morale est celle des systèmes à la Hilbert&nbsp;: on peut ajouter autant d'axiomes qu'on veut, il ne se passera jamais rien si l'on n'a pas au moins une **règle**, qui n'est pas une formule de plus mais une autorisation d'agir. Le *modus ponens* ne s'écrit pas dans le carnet&nbsp;: il s'applique.

</div>

<p style="margin-bottom:-1.1em;">La déduction de $\phi$ à partir d'un ensemble de formules $\Gamma$ est une suite finie de formules $\langle \phi_1,\phi_2,\ldots,\phi_n\rangle$ telle que&nbsp;:</p>

- chaque $\phi_i$ vérifie une des trois conditions suivantes&nbsp;:
    - $\phi_i$ est un axiome,
    - $\phi_i$ est une hypothèse ($\phi_i \in \Gamma$),
    - $\phi_i$ est obtenue à partir de l'application de la règle du <i>modus ponens</i> à deux formules $\phi_j$ et $\phi_k$ telles que $j,k<i$.
- $\phi_n=\phi$

<p style="margin-bottom:-0.5em;">Exemple de la démonstration de la formule $(\phi\rightarrow\phi)$ sans hypothèse&nbsp;:</p>
<div style="overflow-x: auto;">

$
\begin{array}{llr}
  (1)& (\phi\rightarrow ((\phi\rightarrow \phi)\rightarrow\phi))\rightarrow ((\phi\rightarrow (\phi\rightarrow \phi))\rightarrow(\phi\rightarrow\phi)) & \text{(axiome 2 avec } \psi = (\phi\rightarrow \phi) \text{ et }\theta = \phi )\\\\
  (2)& \phi\rightarrow ((\phi\rightarrow \phi)\rightarrow\phi) & \text{(axiome 1 avec } \psi = (\phi\rightarrow \phi) )\\\\
  (3)&  (\phi\rightarrow (\phi\rightarrow \phi))\rightarrow(\phi\rightarrow\phi) & (\textit{modus ponens} \text{ (1) - (2))}\\\\
  (4)& \phi\rightarrow (\phi\rightarrow \phi) & \text{(axiome 1 avec } \psi = \phi )\\\\
  (5)& \phi\rightarrow\phi & (\textit{modus ponens} \text{ (3) - (4))}
\end{array}
$
</div>

Cinq lignes et deux axiomes tarabiscotés pour établir que «&nbsp;si $\phi$ alors $\phi$&nbsp;»… On ne peut pas dire que la démonstration nous éclaire beaucoup.

<div class="encadre">
<div class="encadre-titre">$1+1=2$, page 379</div>

Le monument du genre est *Principia Mathematica* de Whitehead et Russell (1910-1913), qui entreprend de reconstruire les mathématiques à partir d'un système axiomatique. Il faut attendre la page 379 du premier volume pour lire, sous la proposition ✱54.43&nbsp;: «&nbsp;De cette proposition il suivra, quand l'addition arithmétique aura été définie, que $1+1=2$.&nbsp;» La preuve ne s'achève que dans le deuxième volume, accompagnée de ce commentaire pince-sans-rire&nbsp;: «&nbsp;La proposition ci-dessus est parfois utile.&nbsp;»

</div>

En conclusion, les systèmes à la Hilbert sont économes et commodes quand il s'agit de raisonner *sur* un système de preuve (il n'y a qu'une règle à examiner), mais ils sont pénibles pour démontrer quoi que ce soit, et leurs preuves ne ressemblent en rien à un raisonnement humain.


### La déduction naturelle

C'est précisément ce divorce entre les preuves formelles et la pratique des mathématiciens qui pousse le jeune Gerhard Gentzen, dans sa thèse de 1934, à inventer un formalisme «&nbsp;qui se rapproche autant que possible du raisonnement réel&nbsp;». Son idée&nbsp;: très peu d'axiomes, beaucoup de règles, et surtout le droit de faire ce que tout le monde fait sans cesse, à savoir **poser une hypothèse**, en tirer des conséquences, puis s'en débarrasser («&nbsp;supposons $\phi$… donc $\psi$&nbsp;; ainsi, si $\phi$ alors $\psi$&nbsp;»).

Pour garder la trace des hypothèses en cours, on ne manipule plus des formules mais des séquents.


<div class="def">

<p style="margin-bottom:-0.5em;">Un <b>séquent</b>, noté $\Gamma\vdash\phi$, est un couple où&nbsp;:</p>
<ul>
<li>$\Gamma$ est un ensemble fini de formules,</li>
<li>$\phi$ est une formule.</li>
</ul>

</div>

<p style="margin-bottom:-0.5em;">Remarques&nbsp;:</p>

- $\Gamma$ représente les hypothèses que l'on veut utiliser.
- $\phi$ est la conclusion du séquent, la formule à démontrer.
- $\vdash$ se lit "**démontre**" ou "**prouve**".
- On écrit $\vdash\phi$ si $\phi$ se démontre sans hypothèse ($\Gamma=\emptyset $).

<div class="def">
<ul>
<li>Un séquent est <b>prouvable</b> s'il peut être obtenu par une application finie de règles de démonstration.</li>
<li>Une formule $\phi$ est prouvable si le séquent $\vdash\phi$ est prouvable.
</ul>
</div>

On écrit $\Gamma\nvdash\phi$ si $\Gamma\vdash\phi$ n'est pas prouvable.

La **règle** est la brique de base de la démonstration. Une démonstration est ainsi un assemblage de règles généralement représenté sous forme d'arbre.

<p style="margin-bottom:-0.5em;">Chaque règle est composée&nbsp;:</p>

- d'un ensemble de **prémisses** (de 0 à 3), chacune étant un séquent.
- d'un séquent **conclusion**.
- d'une barre horizontale qui sépare les deux (on identifie la règle à droite de la barre).

<p style="margin-bottom:-0.5em;">Pour chaque connecteur logique, on a deux types de règles&nbsp;:</p>

- les règles d'**introduction**,
- et les règles d'**élimination**.

On va dans la suite considérer le système complet de connecteurs $\set{\neg,\land,\lor,\rightarrow}$, auquel on adjoint le symbole $\bot$ qui représente la contradiction (l'absurde).

<p style="margin-bottom:-0.5em;">En dehors des <b>axiomes</b> représentés par le séquent $\phi \vdash\phi$, les règles peuvent être regroupées en deux catégories&nbsp;:</p>

- les <b>règles logiques</b> (règles d'introduction et d'élimination des différents connecteurs).
- les <b>règles structurelles</b> permettant de manipuler les hypothèses&nbsp;; l'affaiblissement permet d'ajouter de nouvelles hypothèses et la contraction permet de fusionner deux occurrences de la même hypothèse.


#### Logique minimale


Règles de la **logique minimale**&nbsp;:

<div class="def regles">
<ul>
<li><b>Axiome</b><br>
$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\vdash\phi$}
\end{prooftree}
$
<br>
<br>
Un séquent dont la conclusion est aussi l'hypothèse est prouvable.
</li>


<li><b>Introduction de la conjonction</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi$}
\AxiomC{$\Gamma'\vdash\psi$}
\RightLabel{$\;\scriptsize \land i$}
\BinaryInfC{$\Gamma,\Gamma' \vdash\phi\land\psi$}
\end{prooftree}
$
<br>
<br>
Si $\phi$ et $\psi$ sont prouvées, alors on prouve $\phi\land\psi$.
</li>


<li><b>Élimination de la conjonction</b><br>
<br>
$
\begin{array}{cc}
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi\land\psi$}
\RightLabel{$\;\scriptsize \land e_g$}
\UnaryInfC{$\Gamma \vdash\phi $}
\end{prooftree}
&
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi\land\psi$}
\RightLabel{$\;\scriptsize \land e_d$}
\UnaryInfC{$\Gamma \vdash\psi $}
\end{prooftree}
\end{array}
$
<br>
<br>
De $\phi\land\psi$, on peut déduire $\phi$ et $\psi$.
</li>


<li><b>Introduction de la disjonction</b><br>
<br>
$
\begin{array}{cc}
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi$}
\RightLabel{$\;\scriptsize \lor i_g$}
\UnaryInfC{$\Gamma \vdash \phi\lor\psi $}
\end{prooftree}
&
\begin{prooftree}
\AxiomC{$\Gamma\vdash\psi$}
\RightLabel{$\;\scriptsize \lor i_d$}
\UnaryInfC{$\Gamma \vdash \phi\lor\psi $}
\end{prooftree}
\end{array}
$
<br>
<br>
Si on a prouvé une formule, alors <i>a fortiori</i>, on a prouvé cette formule ou une autre.
</li>


<li><b>Élimination de la disjonction</b><br>
<br>
<div class="defile">
$
\begin{prooftree}
\AxiomC{$\Gamma \vdash \phi \lor \psi$}
\AxiomC{$\Gamma',\phi \vdash \theta$}
\AxiomC{$\Gamma'',\psi \vdash \theta$}
\RightLabel{$\;\scriptsize \lor e$}
\TrinaryInfC{$\Gamma,\Gamma',\Gamma''\vdash \theta$}
\end{prooftree}
$
</div>
<br>
Si on a prouvé $\phi\lor\psi$, alors pour prouver $\theta$, il suffit de prouver $\theta$ en supposant $\phi$ <b>et</b> de prouver $\theta$ en supposant $\psi$. C'est le raisonnement par disjonction de cas.
</li>


<li><b>Introduction de l'implication</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma,\phi\vdash\psi$}
\RightLabel{$\;\scriptsize \rightarrow i$}
\UnaryInfC{$\Gamma \vdash\phi\rightarrow\psi$}
\end{prooftree}
$
<br>
<br>
Pour prouver $\phi\rightarrow \psi$, il suffit de prouver $\psi$ avec $\phi$ ajoutée aux hypothèses.
</li>


<li><b>Élimination de l'implication</b> (<i>modus ponens</i>)<br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi\rightarrow\psi$}
\AxiomC{$\Gamma'\vdash\phi$}
\RightLabel{$\;\scriptsize \rightarrow e$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\psi$}
\end{prooftree}
$
<br>
<br>
Si on a prouvé $\phi$ et $\phi\rightarrow\psi$, alors on a prouvé $\psi$.
</li>


<li><b>Introduction de la négation</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma,\phi \vdash\bot$}
\RightLabel{$\;\scriptsize \neg i$}
\UnaryInfC{$\Gamma\vdash\neg\phi$}
\end{prooftree}
$
<br>
<br>
Pour montrer $\neg\phi$, il suffit d'aboutir à une contradiction en supposant $\phi$.
</li>


<li><b>Élimination de la négation</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma \vdash \neg\phi$}
\AxiomC{$\Gamma' \vdash \phi$}
\RightLabel{$\;\scriptsize \neg e$}
\BinaryInfC{$\Gamma,\Gamma'\vdash \bot$}
\end{prooftree}
$
<br>
<br>
Si on a prouvé à la fois $\phi$ et $\neg\phi$, alors on a prouvé une contradiction.
</li>


<li><b>Affaiblissement</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma \vdash \phi$}
\RightLabel{$\;\scriptsize aff$}
\UnaryInfC{$\Gamma,\psi\vdash \phi$}
\end{prooftree}
$
<br>
<br>
Si on peut prouver $\phi$ avec les hypothèses $\Gamma$, alors on peut prouver $\phi$ en ajoutant d'autres hypothèses à $\Gamma$ (il peut y avoir des hypothèses qui ne servent pas).
</li>


<li><b>Contraction</b><br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma,\psi,\psi \vdash \phi$}
\RightLabel{$\;\scriptsize ctr$}
\UnaryInfC{$\Gamma,\psi\vdash \phi$}
\end{prooftree}
$
<br>
<br>
L'ensemble d'hypothèses $\Gamma\cup\set{\psi,\psi}$ est le même que $\Gamma\cup\set{\psi}$.
</li>

</ul>
</div>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/resumreglesminim.png" style="border-radius:20px">
</div>

<p style="margin-bottom:-0.5em;">Chaque règle peut être regardée comme un arbre simple lu de haut en bas et dont la racine est en bas (pour une fois). Le séquent conclusion est donc la racine et les prémisses sont les feuilles.</p>

- L'axiome n'est qu'une racine. 
- Les éliminations de la conjonction, les introductions de la disjonction, l'introduction de l'implication, l'introduction de la négation, l'affaiblissement et la contraction sont des arbres à une racine et une feuille.
- l'introduction de la conjonction, l'élimination de l'implication et l'élimination de la négation sont des arbres à une racine et deux feuilles.
- l'élimination de la disjonction est un arbre à une racine et trois feuilles.

Pour construire une preuve, on va assembler ces arbres.

<div class="def">

Une <b>déduction</b> (en logique minimale) dans le système de la déduction naturelle est un arbre fini dont les nœuds sont des séquents $\left(S_i\right)_{i≤k}$, et tel que pour chaque nœud $S_i$ de la déduction&nbsp;:
<ul>
<li>$S_i$ est une feuille si et seulement si $S_i$ est un axiome,</li>
<br>
<li> si $S_i$ n'est pas une feuille, alors l'arbre dont $S_i$ est la racine et les enfants de $S_i$ sont les feuilles est une instance de l'une des règles du tableau.</li>
</ul>

Une formule $\phi$ est déductible des hypothèses $\Gamma$ s'il existe une déduction dont la racine soit le séquent $\Delta\vdash\phi$ pour un ensemble d'hypothèses $\Delta \subseteq \Gamma$. On note alors $\Gamma\vdash_m \phi$.

</div>


Exemples de preuves&nbsp;:

<div class="preuve">

Prouver que $(\phi\rightarrow (\psi\rightarrow\theta))\rightarrow ((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta))$ est bien un théorème du calcul des propositions revient à obtenir une déduction du séquent $\vdash_{\\! m} \\;(\phi\rightarrow (\psi\rightarrow\theta))\rightarrow ((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta)$&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\rightarrow(\psi\rightarrow\theta)\vdash\phi\rightarrow(\psi\rightarrow\theta)$}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\;\scriptsize \rightarrow e$}
\BinaryInfC{$\phi\rightarrow(\psi\rightarrow\theta),\phi\vdash\psi\rightarrow\theta$}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\rightarrow\psi\vdash\phi\rightarrow\psi$}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\;\scriptsize \rightarrow e$}
\BinaryInfC{$\phi\rightarrow\psi,\phi\vdash\psi$}
\RightLabel{$\;\scriptsize \rightarrow e$}
\BinaryInfC{$\phi\rightarrow(\psi\rightarrow\theta),\phi\rightarrow\psi,\phi,\phi\vdash\theta$}
\RightLabel{$\;\scriptsize ctr$}
\UnaryInfC{$\phi\rightarrow(\psi\rightarrow\theta),\phi\rightarrow\psi,\phi\vdash\theta$}
\RightLabel{$\;\scriptsize \rightarrow i$}
\UnaryInfC{$\phi\rightarrow(\psi\rightarrow\theta),\phi\rightarrow\psi\vdash(\phi\rightarrow\theta)$}
\RightLabel{$\;\scriptsize \rightarrow i$}
\UnaryInfC{$\phi\rightarrow(\psi\rightarrow\theta)\vdash(\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta)$}
\RightLabel{$\;\scriptsize \rightarrow i$}
\UnaryInfC{$\vdash (\phi\rightarrow(\psi\rightarrow\theta))\rightarrow((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta))$}
\end{prooftree}
\phantom{--------}
$$
</div>

</div>


<div class="preuve">

Preuve du séquent $\vdash_{\\!m}\\; \phi\rightarrow\neg\neg\phi$&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\neg\phi\vdash\neg\phi$}
\AxiomC{}
\RightLabel{$\;\scriptsize ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\;\scriptsize \neg e$}
\BinaryInfC{$\neg\phi,\phi\vdash\bot$}
\RightLabel{$\;\scriptsize \neg i$}
\UnaryInfC{$\phi\vdash\neg\neg\phi$}
\RightLabel{$\;\scriptsize \rightarrow i$}
\UnaryInfC{$\vdash \phi\rightarrow\neg\neg\phi$}
\end{prooftree}
$$
</div>

</div>

Par contre, on ne peut pas prouver l'implication inverse avec les règles de la logique minimale ($\nvdash_{\\!m} \neg\neg\phi\rightarrow\phi$). On ne peut donc pas éliminer les doubles négations (on verra plus loin qu'il manque la règle de l'absurdité classique pour y parvenir).

<div class="preuve">

Montrons que $\vdash_{\\!m} \\,\neg\phi\leftrightarrow (\phi\rightarrow\bot)$&nbsp;:
<div style="position:relative;width:620px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedeb.png">
</div>
</div>

Rq&nbsp;: pour raccourcir les preuves, on va intégrer dorénavant les affaiblissements et contractions aux autres règles.<br>


La notion de preuve telle qu'on l'a définie ne s'appuie que sur un enchaînement de règles pour aboutir à la conclusion. Il s'agit donc d'une conséquence **syntaxique** des formules en hypothèse.

De la même manière qu'on a défini l'équivalence sémantique à partir de la notion de conséquence sémantique, on va définir une équivalence au sens syntaxique à partir des séquents.

<div class="def">

Deux formules $\phi$ et $\psi$ sont **équivalentes** pour la logique minimale si on a à la fois $\phi\vdash_{\\!m}\psi$ et $\psi\vdash_{\\!m}\phi$, et on écrit $\phi\equiv_m\psi$
</div>


#### Logique intuitionniste


Certains raisonnements ne sont pas possibles avec la logique minimale. On va enrichir le pouvoir expressif de notre système déductif grâce à de nouvelles règles. Ces règles concernent la contradiction $\bot$, et plus précisément son élimination.

<div class="def">

**Absurdité intuitionniste** (ou **élimination de la contradiction**)<br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\bot$}
\RightLabel{$\\;\scriptsize \bot e_i$}
\UnaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$
<br>
<br>
Si une contradiction découle d'un jeu d'hypothèses, alors n'importe quelle formule est démontrable avec ces mêmes hypothèses. Les médiévaux disaient <i>ex falso quodlibet</i>&nbsp;: du faux, on déduit ce qu'on veut.
</div>

<div class="encadre prune">
<div class="encadre-titre">Bertrand Russell est le pape</div>

On raconte que Russell, expliquant lors d'un dîner qu'une proposition fausse implique n'importe quoi, fut mis au défi&nbsp;: «&nbsp;Alors, de $2+2=5$, démontrez donc que vous êtes le pape&nbsp;!&nbsp;» Il aurait répondu sans se démonter&nbsp;: «&nbsp;Si $2+2=5$, alors $4=5$. Retranchons 3 de chaque côté&nbsp;: $1=2$. Or le pape et moi sommes deux. Donc le pape et moi sommes un.&nbsp;»

</div>


On obtient ainsi un nouveau système déductif&nbsp;; celui de la **logique intuitionniste**.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/resumreglesintui.png" style="border-radius:20px">
</div>

La règle de l'absurdité intuitionniste n'est pas démontrable dans le cadre de la logique minimale. Les déductions qui utilisent cette règle ne sont donc pas possibles en logique minimale. Il existe par conséquent des formules qui sont des théorèmes en logique intuitionniste (des séquents démontrables), mais restent non prouvables en logique minimale.

<div class="def">

Deux formules $\phi$ et $\psi$ sont **équivalentes** pour la logique intuitionniste si on a à la fois $\phi\vdash_{\\!i}\psi$ et $\psi\vdash_{\\!i}\phi$, et on écrit $\phi\equiv_i\psi$.
</div>


<div class="preuve">
Exemple d'une formule démontrable en logique intuitionniste et non démontrable en logique minimale&nbsp;: $\neg\neg(\neg\neg\phi\rightarrow\phi)$
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\neg\neg\phi\vdash\neg\neg\phi$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax+aff$}
\UnaryInfC{$\phi,\neg\neg\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\phi\vdash\neg\neg\phi\rightarrow\phi$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\neg(\neg\neg\phi\rightarrow\phi)\vdash\neg(\neg\neg\phi\rightarrow\phi)$}
\RightLabel{$\scriptsize\;\neg e$}
\BinaryInfC{$\neg(\neg\neg\phi\rightarrow\phi),\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\neg(\neg\neg\phi\rightarrow\phi)\vdash\neg\phi$}
\RightLabel{$\scriptsize\;\neg e$}
\BinaryInfC{$\neg\neg\phi,\neg(\neg\neg\phi\rightarrow\phi)\vdash\bot$}
\RightLabel{$\scriptsize\;\bot e_i$}
\UnaryInfC{$\neg\neg\phi,\neg(\neg\neg\phi\rightarrow\phi)\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\neg(\neg\neg\phi\rightarrow\phi)\vdash\neg\neg\phi\rightarrow\phi$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\neg(\neg\neg\phi\rightarrow\phi)\vdash\neg(\neg\neg\phi\rightarrow\phi)$}
\RightLabel{$\scriptsize\;\neg e + ctr$}
\BinaryInfC{$\neg(\neg\neg\phi\rightarrow\phi)\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\vdash \neg\neg(\neg\neg\phi\rightarrow\phi)$}
\end{prooftree}
$$
</div>
</div>


#### La logique classique


<div class="def">

**Absurdité classique**<br>
<br>
$
\begin{prooftree}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\\;\scriptsize \bot e_c$}
\UnaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$
<br>
<br>
Si une contradiction découle d'un jeu d'hypothèses auquel on ajoute la négation d'une formule, alors la formule est démontrable à partir du jeu d'hypothèses de départ.
</div>


En ajoutant à la logique minimale non pas la règle de l'absurdité intuitionniste mais cette règle de l'absurdité classique, on obtient la **logique classique**.

L'absurdité classique n'est démontrable ni en logique minimale, ni en logique intuitionniste, alors que l'absurdité intuitionniste n'est qu'un cas particulier de l'absurdité classique.
<br>

<div class="preuve">
<div class="defile">
$$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\bot$}
\RightLabel{$\scriptsize\;aff$}
\UnaryInfC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\bot e_c$}
\UnaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</div>

Tout ce que prouve la logique intuitionniste, la logique classique le prouve donc aussi.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/resumreglesclass.png" style="border-radius:20px">
</div>


Des raisonnements comme la loi du tiers exclu ou l'élimination des doubles négations deviennent enfin démontrables (ils ne l'étaient pas en logique intuitionniste et *a fortiori* pas non plus en logique minimale).


<div class="preuve">
<b>Loi du tiers exclu</b> $\vdash\phi\lor\neg\phi$
<div style="position:relative;width:620px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvetiersexclu.png">
</div>
</div>


<div class="preuve">
<b>Élimination des doubles négations</b> $\vdash\neg\neg\phi\rightarrow\phi$
<div style="position:relative;width:280px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedbleneg.png">
</div>
</div>


<div class="preuve">
<b>Loi de Peirce</b> $\vdash(\neg\phi\rightarrow\phi)\rightarrow\phi$
<div style="position:relative;width:440px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvepeirce.png">
</div>
</div>


<div class="preuve">
La <b>contraposition</b> $\vdash(\neg\psi\rightarrow\neg\phi)\rightarrow(\phi\rightarrow\psi)$
<div style="position:relative;width:450px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvecontrap.png">
</div>
</div>


{{%notice type="note" round="true"%}}
Sous la forme $(\neg\phi\rightarrow\phi)\rightarrow\phi$, la troisième formule est aussi connue sous le joli nom de *consequentia mirabilis* (ou loi de Clavius)&nbsp;: si une proposition découle de sa propre négation, alors elle est vraie. La loi de Peirce proprement dite s'écrit $((\phi\rightarrow\psi)\rightarrow\phi)\rightarrow\phi$, et on retrouve la version ci-dessus en prenant $\psi=\bot$, puisque $\neg\phi$ équivaut à $\phi\rightarrow\bot$.
{{%/notice%}}

L'ajout de l'absurdité classique aux règles de la logique minimale n'est pas le seul chemin pour obtenir la logique classique. En utilisant chacun des quatre différents séquents que l'on vient de démontrer comme axiome, on peut augmenter soit la logique minimale, soit la logique intuitionniste en logique classique.

<div class="theo">
<ol>
<li>logique classique = logique intuitionniste + <b>principe du tiers exclu</b></li>
<li>logique classique = logique intuitionniste + <b>loi de Peirce</b></li>
<li>logique classique = logique minimale + <b>élimination des doubles négations</b></li>
<li>logique classique = logique minimale + <b>contraposition</b></li>
</ol>
</div>


<div class="preuve">

Nous allons montrer que les inclusions sont vérifiées dans les deux sens.
<ul>
<li>Pour le sens $\supset$, c'est déjà fait.<br>
En effet, on a démontré plus haut que chacun des axiomes ajoutés peut se démontrer en logique classique sans hypothèse supplémentaire.</li>
<br>
<li> Sens $\subset$&nbsp;: il suffit de vérifier à chaque fois que la règle de l'absurde classique peut être obtenue à partir de la logique considérée à laquelle on a ajouté l'axiome.
<br>
<br>
<ol>
<li>logique classique $\subset$ logique intuitionniste + <span style="color:#970E53">principe du tiers exclu</span>&nbsp;:<br><br>
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\color{#970E53}\vdash\phi\lor\neg\phi$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\phi\vdash\phi$}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\bot e_i$}
\UnaryInfC{$\Gamma,\neg\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\lor e$}
\TrinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>


<li>logique classique $\subset$ logique intuitionniste + <span style="color:#970E53">loi de Peirce</span>&nbsp;:<br><br>
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\color{#970E53}\neg\phi\rightarrow\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\vdash (\neg\phi\rightarrow\phi)\rightarrow\phi$}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\bot e_i$}
\UnaryInfC{$\Gamma,\neg\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\Gamma\vdash \neg\phi\rightarrow\phi$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>


<li>logique classique $\subset$ logique minimale + <span style="color:#970E53">élimination des doubles négations</span>&nbsp;:<br><br>
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\color{#970E53}\vdash\neg\neg\phi\rightarrow\phi$}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\Gamma\vdash\neg\neg\phi$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>


<li>logique classique $\subset$ logique minimale + <span style="color:#970E53">contraposition</span><br>
On va utiliser une instance de la contraposition où $\psi:=\phi$ et $\phi:=\neg\bot$&nbsp;:<br><br>
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\color{#970E53}\neg\phi\rightarrow\neg\neg\bot\vdash\neg\bot\rightarrow\phi$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\vdash (\neg\phi\rightarrow\neg\neg\bot)\rightarrow(\neg\bot\rightarrow\phi)$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\bot\vdash\bot$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\neg\bot\vdash\neg\bot$}
\RightLabel{$\scriptsize\;\neg e$}
\BinaryInfC{$\bot,\neg\bot\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\bot\vdash\neg\neg\bot$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\vdash \bot\rightarrow\neg\neg\bot$}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma,\neg\phi\vdash\neg\neg\bot$}
\RightLabel{$\scriptsize\;\rightarrow i$}
\UnaryInfC{$\Gamma\vdash\neg\phi\rightarrow\neg\neg\bot$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma\vdash\neg\bot\rightarrow\phi$}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\bot\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\vdash\neg\bot$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>
</ol>
</ul>
</div>

{{%notice type="info" round="true"%}}
La logique intuitionniste, contrairement à la logique classique, vise à obtenir des preuves **constructives**. Montrer qu'une formule ne peut pas être fausse ne suffit pas&nbsp;: il faut en construire la vérité, étape par étape. Or un raisonnement par l'absurde classique ne construit rien, il se contente d'établir que $\neg\phi$ mène à une contradiction. De même, le tiers exclu affirme $\psi\lor\neg\psi$ sans jamais dire laquelle des deux est vraie.<br><br>
Exemple classique de l'utilisation du tiers exclu en mathématiques&nbsp;:<br>
prouvons qu'il existe deux nombres irrationnels $a$ et $b$ tels que $a^b$ soit rationnel.<br>
Sachant que $\sqrt{2}$ est irrationnel, on distingue deux cas&nbsp;:
- si $\sqrt{2}^{\sqrt{2}}$ est rationnel, alors on prend $a=b=\sqrt{2}$&nbsp;;
- si $\sqrt{2}^{\sqrt{2}}$ est irrationnel, alors on prend $a=\sqrt{2}^{\sqrt{2}}$ et $b=\sqrt{2}$, puisqu'ainsi $a^b=\sqrt{2}^{\sqrt{2}\times\sqrt{2}}=\sqrt{2}^2=2$.

D'après le tiers exclu, on est dans un cas ou dans l'autre&nbsp;: le théorème est démontré. Mais la preuve est incapable d'exhiber le couple annoncé&nbsp;! Pour cela, il faudrait savoir si $\sqrt{2}^{\sqrt{2}}$ est rationnel (il ne l'est pas, mais c'est une conséquence du théorème de Gelfond-Schneider, autrement plus difficile). Un intuitionniste réclamera une preuve qui montre ses témoins, par exemple $a=\sqrt{2}$ et $b=\log_2 9$, pour lesquels $a^b=3$.<br><br>
En logique intuitionniste, si l'on a réussi à démontrer $\vdash_i\phi\lor\psi$, c'est qu'on a démontré l'un des deux séquents $\vdash_i\phi$ ou $\vdash_i\psi$. Il n'y a pas de vérité intermédiaire indéterminée.<br><br>
Un autre grief contre la logique classique concerne l'implication matérielle&nbsp;: $\phi\rightarrow\psi$ est considérée comme vraie dès que $\phi$ est fausse, sans qu'on ait jamais eu à construire de lien entre $\phi$ et $\psi$. La philosophe Dorothy Edgington en a tiré une «&nbsp;démonstration&nbsp;» de l'existence de Dieu. Première prémisse&nbsp;: si Dieu n'existe pas ($\neg G$), alors il n'est pas vrai que si je prie ($P$), mes prières seront exaucées ($A$). L'affirmation ne semble pas choquante. Sous forme de formule&nbsp;: $\neg G\rightarrow \neg(P\rightarrow A)$, ce qui se réécrit, en éliminant les implications, $G\lor(P \land \neg A)$. Deuxième prémisse, et coup de grâce&nbsp;: $\neg P$, «&nbsp;je ne prie pas&nbsp;». Si $P$ est fausse, $P\land\neg A$ l'est aussi, et seul $G$ survit&nbsp;: «&nbsp;Dieu existe&nbsp;». Il suffit donc de ne pas prier…
{{%/notice%}}


<div class="encadre">
<div class="encadre-titre">La querelle du tiers exclu</div>

L'intuitionnisme naît au début du XX<sup>e</sup> siècle sous l'impulsion du mathématicien néerlandais L.E.J. Brouwer, pour qui un objet mathématique n'existe que si l'on sait le construire. Appliquer le tiers exclu à des ensembles infinis lui paraît aussi injustifié que d'affirmer qu'une question sans réponse connue en possède forcément une.

David Hilbert, le plus influent des mathématiciens de l'époque, s'en étrangle&nbsp;: «&nbsp;Priver le mathématicien du tiers exclu, ce serait comme interdire le télescope à l'astronome, ou au boxeur l'usage de ses poings.&nbsp;» La querelle tourne à la brouille personnelle, jusqu'à l'éviction de Brouwer du comité de rédaction des *Mathematische Annalen* en 1928.

L'histoire a donné un peu raison à chacun&nbsp;: les mathématiques courantes sont restées classiques, mais la logique intuitionniste est devenue, grâce à son caractère constructif, le langage naturel de l'informatique théorique et des assistants de preuve.

</div>

Les règles de la logique classique permettent de faire coïncider les notions de conséquence syntaxique et de conséquence sémantique.

<div class="theo">

<b>Correction</b> de la logique classique&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
Si $\Gamma\vdash_{\\!c}\phi$ alors $\Gamma\models\phi$ 

</div>


<div class="preuve">

Une preuve étant un arbre fini de séquents, on va procéder par induction sur la hauteur de cet arbre, qu'on appellera la longueur de la preuve.<br>

<ul>
<li>Si la preuve a une longueur 1, le séquent ne peut être qu'un axiome de la forme $\phi\vdash\phi$.<br>
Reste à montrer que $\phi\models\phi$ est vraie. Et c'est bien sûr le cas&nbsp;: par définition, $\phi\models\phi$ est vraie si $\phi$ est vraie dans chaque modèle où $\phi$ est vraie...<br>
<li>On suppose maintenant la propriété vraie pour toutes les preuves de longueur au plus $n$.<br>
Une preuve de longueur $n+1$ se termine par l'application d'une règle, dont les prémisses sont elles-mêmes prouvées par des preuves de longueur au plus $n$.<br>
Il faut montrer que les règles ont été judicieusement choisies pour "conserver" la notion de conséquence sémantique entre les prémisses et la conclusion.<br>
Ici, les prémisses sont bien des conséquences sémantiques par application de l'hypothèse d'induction.<br>
On doit maintenant vérifier sur chaque règle que le séquent conclusion est une conséquence sémantique des prémisses.<br>
Montrons-le pour la règle d'élimination de l'implication
$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi\rightarrow\psi$}
\AxiomC{$\Gamma'\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow e$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\psi$}
\end{prooftree}
$&nbsp;: 

<br>
Par hypothèse d'induction, on sait que $\Gamma\models\phi\rightarrow\psi$ et $\Gamma'\models\phi$. Donc dans les modèles de $\Gamma \cup \Gamma'$ (ensemble des modèles où les formules de $\Gamma$ et $\Gamma'$ sont vraies simultanément), à la fois $\phi\rightarrow\psi$ et $\phi$ sont vérifiées. Et comme lorsque $\phi$ est vraie, $\phi\rightarrow\psi$ n'est vraie que si $\psi$ est vraie, il en résulte que $\psi$ est vraie dans ces modèles&nbsp;: $\Gamma,\Gamma'\models\psi$.<br>
On peut montrer de manière équivalente que cela marche pour chaque règle...
</li>
</ul>
</div>


Une conséquence de la correction de la logique classique est que pour toute théorie finie $\Gamma$ et pour tout modèle $\mathcal{M}$ de cette théorie, si une formule est démontrable à partir des hypothèses $\Gamma$, alors elle est vraie dans $\mathcal{M}$.<br>
Tout ce que l'on peut déduire syntaxiquement d'une théorie est vrai dans un modèle quelconque de cette théorie.


<div class="theo">

<b>Complétude</b> de la logique classique&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
Si $\Gamma\models\phi$ alors $\Gamma\vdash_{\\!c}\phi$

</div>


<div class="preuve">

La preuve qui suit est due au logicien hongrois László Kalmár (1935). Son idée&nbsp;: chaque ligne de la table de vérité d'une formule peut être convertie en une preuve, et le tiers exclu permet ensuite de recoller toutes les lignes.

Soit $\phi$, une formule quelconque du calcul des propositions dont les variables sont parmi $\set{P_1,\ldots,P_n}$, et $\mathcal{M}$, un modèle possible de $\phi$. On note&nbsp;:
<ul>
<li> $P_i^\mathcal{M} = P_i$ si $P_i$ est vraie dans $\mathcal{M}$,</li>
<li> $P_i^\mathcal{M} = \neg P_i$ sinon.</li>
</ul>

On pose également&nbsp;:
<ul>
<li> $\phi^\mathcal{M} = \phi$ si $\mathcal{M}\models\phi$,</li>
<li> $\phi^\mathcal{M} = \neg\phi$ sinon.</li>
</ul>

Par induction sur la hauteur de $\phi$ on veut montrer le résultat suivant&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\\!c}\phi^{\mathcal{M}}$
<ul>

<li>si $ht(\phi)=0$, $\phi$ est une variable propositionnelle $P_i$ et il est alors immédiat que $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\!c}P_i^{\mathcal{M}}$</li>
<br>
<li>si $ht(\phi)=n+1$, alors on a une des possibilités suivantes&nbsp;: $\phi=\neg\psi$, $\phi=\psi_1\rightarrow\psi_2$, $\phi=\psi_1\lor\psi_2$ ou $\phi=\psi_1\land\psi_2$.<br>
Chaque $\psi$, de hauteur $n$, respecte par hypothèse la propriété et on doit montrer dans chaque cas que cela implique le même respect de la propriété pour $\phi$.

Prenons par exemple le cas $\phi=\psi_1\rightarrow\psi_2$ pour voir le type de raisonnement qu'il faut mener&nbsp;:
<br>
<ul>
<li> Si $\mathcal{M}\not\models\psi_1$, alors $\mathcal{M}\models\phi$ et donc $\phi^\mathcal{M}=\phi$, et $\psi_1^\mathcal{M}=\neg\psi_1$.<br>
Par hypothèse d'induction, $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\neg\psi_1$<br>
Considérons la règle suivante&nbsp;:<br>
</li>
</ul>
</li>
</ul>
</li>
</ul>


<div style="position:relative;width:400px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/grossepreuveformule1.png">
</div>

<ul>
<ul>
<ul>
<li style="list-style-type: none;">
L'utilisation de cette règle et du <i>modus ponens</i> permet d'obtenir&nbsp;:
$\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1\rightarrow\psi_2$, ce qui est bien ce que l'on voulait montrer puisque $\psi_1\rightarrow\psi_2=\phi^\mathcal{M}$</li>
<br>
<li>Si $\mathcal{M}\models\psi_1$, alors&nbsp;:
<ul>
<br>
<li>Si $\mathcal{M}\models\psi_2$, alors $\mathcal{M}\models\phi$ et donc $\phi^\mathcal{M}=\phi$, $\psi_1^\mathcal{M}=\psi_1$ et $\psi_2^\mathcal{M}=\psi_2$.<br>
Par hypothèse d'induction, on a&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1^\mathcal{M}$ et $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_2^\mathcal{M}$<br>
C'est-à-dire&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1$ et $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_2$<br>
De $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_2$, on déduit par affaiblissement $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}},\psi_1  \vdash_{\!c}\psi_2$, puis par introduction de l'implication&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\!c}\psi_1 \rightarrow\psi_2$</li>
<br>
<li>Si $\mathcal{M}\not\models\psi_2$, alors $\mathcal{M}\not\models\phi$ et donc $\phi^\mathcal{M}=\neg\phi$, $\psi_1^\mathcal{M}=\psi_1$ et $\psi_2^\mathcal{M}=\neg\psi_2$.<br>
Par hypothèse d'induction, on a&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1^\mathcal{M}$ et $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_2^\mathcal{M}$<br>
C'est-à-dire&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1$ et $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\neg\psi_2$<br>
On en déduit&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\psi_1\land\neg\psi_2$.<br>
Considérons la règle suivante&nbsp;:

</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>

<div style="position:relative;width:700px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/grossepreuveformule2.png">
</div>

<ul>
<ul>
<ul>
<ul>
<li style="list-style-type: none;">
On applique ensuite la règle du <i>modus ponens</i> pour obtenir $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}}  \vdash_{\!c}\neg(\psi_1\rightarrow\psi_2)$ qui est bien le résultat recherché.
</li>
</ul>
</ul></li> 
</ul>

Supposons qu'on ait passé en revue tous les autres cas pour finir de montrer que $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\\!c}\phi^{\mathcal{M}}$.

Nous allons maintenant prouver que pour toute formule $\phi$, si $\phi$ est une tautologie, alors $\phi$ est un théorème de la logique classique.<br>
Soit $\phi$, une formule quelconque du calcul des propositions dont les variables sont $P_1,\ldots,P_n$. Et soit $\mathcal{M}$ un modèle possible de $\phi$. On a montré que $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\\!c}\phi^{\mathcal{M}}$. Or $\mathcal{M}\models\phi$ est vérifié, donc $\phi^\mathcal{M}=\phi$. D'où $\set{P_1^{\mathcal{M}},\ldots,P_n^{\mathcal{M}}} \vdash_{\\!c}\phi$.<br>
Si $\phi$ est une tautologie, ce résultat est valable pour n'importe quel modèle. Choisissons les modèles $\mathcal{M}$ et $\mathcal{M'}$ qui distribuent les mêmes valeurs de vérité pour toutes les variables $P_i$ sauf $P_n$. $\mathcal{M}\models P_n$ alors que $\mathcal{M'}\models \neg P_n$.<br>
On a à la fois $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}},P_n^{\mathcal{M}}} \vdash_{\\!c}\phi$ et $\set{P_1^{\mathcal{M'}},\ldots,P_{n-1}^{\mathcal{M'}},P_n^{\mathcal{M'}}} \vdash_{\\!c}\phi$.<br>
D'où $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}},P_n} \vdash_{\\!c}\phi$ et $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}},\neg P_n} \vdash_{\\!c}\phi$ qu'on peut aussi écrire $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}}},P_n \vdash_{\\!c}\phi$ et $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}}},\neg P_n \vdash_{\\!c}\phi$.<br>
Construisons la règle suivante en appliquant le tiers exclu&nbsp;:
<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\UnaryInfC{$\vdash \psi\lor\neg\psi$}
\AxiomC{}
\UnaryInfC{$\Gamma,\psi\vdash\phi$}
\AxiomC{}
\UnaryInfC{$\Gamma,\neg\psi\vdash\phi$}
\RightLabel{$\scriptsize\;\lor e$}
\TrinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
En appliquant cette règle à notre cas, on obtient&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_{n-1}^{\mathcal{M}}} \vdash_{\!c}\phi$ et à nouveau, ce résultat ne dépend pas du modèle $\mathcal{M}$. On peut donc recommencer le même raisonnement, ce qui donne successivement&nbsp;: $\set{P_1^{\mathcal{M}},\ldots,P_{n-2}^{\mathcal{M}}} \vdash_{\!c}\phi, \set{P_1^{\mathcal{M}},\ldots,P_{n-3}^{\mathcal{M}}} \vdash_{\!c}\phi, \set{P_1^{\mathcal{M}},\ldots,P_{n-4}^{\mathcal{M}}} \vdash_{\!c}\phi,\ldots $<br>
Et en dernière étape, on obtient $P_1\vdash_{\!c}\phi$ et $\neg P_1\vdash_{\!c}\phi$. D'où l'on déduit $\vdash_{\!c}\phi$ par application du tiers exclu.<br>
Nous avons donc bien réussi à prouver que $\models\phi$ implique $\vdash_{\!c}\phi$.

Il ne nous reste plus qu'à montrer que pour toute formule $\phi$ et pour tout ensemble fini d'hypothèses $\Gamma=\set{\psi_1,\ldots,\psi_k}$, $\Gamma\models\phi$ implique $\Gamma\vdash_{\\!c}\phi$.<br>
Il apparait immédiatement que $\Gamma\models\phi$ si et seulement si $\models(\psi_1\land\psi_2\land\ldots\land\psi_k)\rightarrow\phi $.<br>
Le résultat précédent sur les tautologies nous permet de déduire que $\vdash_{\\!c}(\psi_1\land\psi_2\land\ldots\land\psi_k)\rightarrow \phi$.<br>
Il est évident par ailleurs que $\Gamma\vdash_{\\!c}(\psi_1\land\psi_2\land\ldots\land\psi_k)$.<br>
Par <i>modus ponens</i>, on obtient donc $\Gamma\vdash_{\\!c}\phi$.

</div>

{{%notice type="tip" round="true"%}}
La complétude du calcul des propositions a été établie par Emil Post dans sa thèse de 1921.<br>
De façon informelle, la correction stipule que toute formule prouvable est vraie, alors que la complétude, de son côté, affirme que toutes les formules vraies sont prouvables.<br>
Et dit autrement encore, on peut prouver **toute la vérité** (**complétude**) et **rien que la vérité** (**correction**).
{{%/notice%}}

<div class="theo">

Corollaire&nbsp;:<br>

$\models\phi$ ssi $\vdash_{\\!c}\phi$<br>
Toute tautologie est démontrable sans utiliser d'hypothèse et à l'inverse, toute formule démontrable sans hypothèse est une tautologie.

</div>


<div class="theo">

Corollaire&nbsp;:

Soient $\phi$ et $\psi$ deux formules du calcul des propositions,<br>
$\phi\equiv\psi$ ssi $\phi\equiv_c\psi$
</div>


On a montré finalement que **la sémantique du calcul des propositions correspond à la logique classique**. On peut d'ailleurs parler de "sémantique classique". Mais qu'en est-il de la logique intuitionniste&nbsp;? Peut-on définir une sémantique qui lui soit adaptée afin d'obtenir un théorème de complétude pour la logique intuitionniste&nbsp;?<br>
Oui, grâce aux modèles de Kripke.


### Les modèles de Kripke du calcul des propositions intuitionniste


On a vu qu'une formule est démontrable en logique classique si et seulement si elle est vraie dans tous les modèles (classiques) possibles. On va aboutir à une proposition similaire grâce aux modèles de Kripke&nbsp;: une formule est démontrable en logique intuitionniste si et seulement si elle est réalisée dans tous les modèles de Kripke possibles.

L'idée, proposée par Saul Kripke en 1965, se raconte bien. Un modèle classique est une photographie&nbsp;: tout y est déjà tranché, vrai ou faux. Un modèle de Kripke est plutôt le **film d'une recherche**. Chaque nœud de l'arbre est un état des connaissances, et ses descendants sont les états futurs envisageables, selon ce qu'on découvrira. «&nbsp;Le nœud $\alpha$ force $P$&nbsp;» signifie que $P$ est *établie* à ce stade. Deux principes en découlent&nbsp;:
- ce qui est établi le reste (on ne désapprend pas)&nbsp;;
- ne pas avoir établi $P$ n'est pas avoir établi $\neg P$&nbsp;: pour affirmer $\neg P$, il faut être sûr que $P$ ne sera *jamais* établie, quelle que soit la suite de l'histoire.


<div class="def">

Soit $\set{P_1,\ldots,P_k}$ un ensemble de variables propositionnelles.<br>
$\mathcal{K}=(\mathcal{T}_\mathcal{K},\Vdash)$ est un <b>modèle de Kripke</b> arborescent fini sur les variables $P\_1,\ldots,P\_k$ si&nbsp;:

<ul>
<li>$\mathcal{T}_\mathcal{K}$ est un arbre fini dont la <b>relation d'ancestralité</b> entre deux nœuds est notée $\alpha≤\beta$ ($\alpha$ est un ancêtre de $\beta$).</li>
<br>
<li>$\Vdash$ est une relation binaire appelée <b>relation de forcing</b> entre les nœuds de $\mathcal{T}_\mathcal{K}$ et les variables propositionnelles qui vérifie&nbsp;:<br>

<ul>
<li>pour tout nœud $\alpha$&nbsp;: $\alpha\not\Vdash\bot$</li>

<li>pour tout nœud $\alpha$, $\beta$ et variable propositionnelle $P_i$, si à la fois $\alpha≤\beta$ et $\alpha\Vdash P_i$ alors on a $\beta\Vdash P_i$.</li>
</ul>
</li>
</ul>
</div>


{{%notice type="info" round="true"%}}
Un modèle de Kripke avec un seul nœud peut être vu comme un modèle de la logique classique car les conditions de la relation de forcing ($\Vdash$) sont alors identiques à celles de la relation de vérité sémantique ($\models$).
{{%/notice%}}

La relation de forcing fait en sorte que si une formule est vraie dans un nœud (qui représente un monde, comme on le verra en logique modale), alors elle reste vraie dans tous les nœuds accessibles depuis le nœud de départ (tous les mondes accessibles).


<div class="def">

Soit $\mathcal{K}=(\mathcal{T}_\mathcal{K},\Vdash)$ un modèle de Kripke arborescent fini sur les variables $P\_1,\ldots,P\_k$, $\alpha$ un nœud de $\mathcal{T}\_\mathcal{K}$ et $\phi$, $\psi$ des formules du calcul des propositions dont les variables sont parmi $\set{P\_1,\ldots,P\_k}$,

<ul>
<li>$\alpha\Vdash \phi\land\psi$ ssi $\alpha\Vdash\phi$ et $\alpha\Vdash\psi$</li>
<br>
<li>$\alpha\Vdash \phi\lor\psi$ ssi $\alpha\Vdash\phi$ ou $\alpha\Vdash\psi$</li>
<br>
<li>$\alpha\Vdash \phi\rightarrow\psi$ ssi pour tout nœud $\beta$ de $\mathcal{T}_\mathcal{K}$ tel que $\alpha≤\beta$, si $\beta\Vdash\phi$ alors $\beta\Vdash\psi$.<br>
On cherche ici à construire explicitement la vérité de $\psi$ à partir de celle de $\phi$ (alors qu'en logique classique, l'établissement de la vérité de $\phi$ n'est pas nécessaire puisque l'implication est considérée comme vraie soit par l'absence de $\phi$, soit par la présence de $\psi$).
</li>
<br>
<li>$\alpha\Vdash \neg\phi$ ssi pour tout nœud $\beta$ de $\mathcal{T}_\mathcal{K}$ tel que $\alpha≤\beta$, $\beta\not\Vdash\phi$.<br>
Dit autrement&nbsp;: $\alpha$ force $\neg\phi$ quand ni lui ni aucun de ses descendants ne force $\phi$.<br>
En effet, la négation $\neg\phi$ est interprétée ici comme la formule $\phi\rightarrow\bot$. La définition de la relation de forcing de l'implication dit que&nbsp;: $\alpha\Vdash\phi\rightarrow\bot$ ssi pour tout nœud $\beta$ de $\mathcal{T}_\mathcal{K}$ tel que $\alpha≤\beta$, si $\beta\Vdash\phi$ alors $\beta\Vdash\bot$. Or la condition $\beta\Vdash\bot$ est interdite par définition des modèles de la logique intuitionniste, donc $\beta\Vdash\bot$ n'est satisfait nulle part. D'où $\beta\not\Vdash\phi$.</li>
</ul>
</li>
</ul>
</div>

Voilà un exemple de modèle de Kripke sur les variables $P$, $Q$, $R$.
![](/kripke1.png?width=450px)
On y trouve les relations de forcing suivantes&nbsp;:

- $\theta\Vdash Q\land P$ mais $\beta\not\Vdash Q\land P$
- $\alpha\Vdash P\rightarrow Q$ mais $\alpha\not\Vdash Q\rightarrow P$
- $\beta\Vdash\neg P$ mais $\alpha\not\Vdash\neg P$
- $\alpha\not\Vdash P$, $\alpha\not\Vdash \neg P$ et $\alpha\not\Vdash \neg\neg P$


<div class="def">

Soit $\mathcal{K}=(\mathcal{T}_\mathcal{K},\Vdash)$ un modèle de Kripke arborescent fini sur les variables $P\_1,\ldots,P\_k$, $\alpha$ un nœud de $\mathcal{T}\_\mathcal{K}$, $\phi$ une formule et $\Gamma$ un ensemble fini de formules dont les variables sont parmi $\set{P\_1,\ldots,P\_k}$,

<ul>
<li>$\alpha\Vdash \Gamma$ ssi $\alpha\Vdash\phi$ pour toute formule de $\Gamma$.</li>
<br>
<li>$\phi$ (respectivement $\Gamma)$ est <b>réalisée</b> dans $\mathcal{K}$ si pour tout nœud $\alpha$ de $\mathcal{T}_\mathcal{K}$, $\alpha\Vdash\phi$ (respectivement $\alpha\Vdash\Gamma$).</li>
<br>
<li>$\phi$ est une conséquence intuitionniste de $\Gamma$, noté $\Gamma\Vdash_i\phi$, ssi pour tout modèle de Kripke $\mathcal{K}=(\mathcal{T}_\mathcal{K},\Vdash)$ et tout nœud $\alpha$ si $\alpha\Vdash\Gamma$ alors $\alpha\Vdash\phi$.<br>
En particulier, on note $\Vdash_i \phi$ si $\phi$ est réalisée dans tout modèle de Kripke.
</li>
</ul>
</li>
</ul>
</div>

![](/kripke2.png?width=100px)
Ce modèle ne réalise ni le tiers exclu $(P\lor\neg P)$, ni l'élimination des doubles négations $(\neg\neg P\rightarrow P)$.

En effet&nbsp;:

- $\alpha \not\Vdash P$ par définition et $\alpha\not\Vdash \neg P$ puisque $\alpha≤\beta$ et $\beta\Vdash P$. Donc $\alpha\not\Vdash P\lor\neg P$.

- $\alpha\not\Vdash\neg P$ et $\beta\not\Vdash\neg P$ d'où $\alpha\Vdash \neg\neg P$ et $\beta\Vdash \neg\neg P$. D'où $\beta\Vdash\neg\neg P\rightarrow P$ et $\alpha\not\Vdash\neg\neg P\rightarrow P$ (puisque $\alpha \not\Vdash P$).

Cela permet de constater l'adaptation des modèles de Kripke à la logique intuitionniste&nbsp;; il peut exister des modèles où ni $\phi$, ni $\neg\phi$ ne sont établis comme vrais.


<div class="theo">

<b>Correction et complétude de la logique intuitionniste</b>&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
$\Gamma\Vdash_i\phi$ ssi $\Gamma\vdash_{\\!i} \phi$
</div>


<div class="theo">

Corollaire&nbsp;:

$\Vdash_i\phi$ ssi $\vdash_{\\!i} \phi$
</div>


En abandonnant la condition "pour tout nœud $\alpha$&nbsp;: $\alpha\not\Vdash\bot$" on obtient le modèle de Kripke adapté à la logique minimale.

La condition de forcing de la négation devient alors $\alpha\Vdash\neg\phi$ ssi $\alpha\Vdash\phi\rightarrow\bot$ (pour tout nœud $\beta$ de $\mathcal{T}_\mathcal{K}$ tel que $\alpha≤\beta$, si $\beta\Vdash\phi$ alors $\beta\Vdash\bot$).

On obtient cette fois-ci&nbsp;: 

<div class="theo">

<b>Correction et complétude de la logique minimale</b>&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
$\Gamma\Vdash_m\phi$ ssi $\Gamma\vdash_{\\!m} \phi$

D'où découle $\Vdash_m\phi$ ssi $\vdash_{\\!m} \phi$
</div>

![](/kripke3.png?width=100px)
Dans ce modèle de Kripke de la logique minimale, $\neg\neg(\neg\neg P\rightarrow P)$ n'est pas réalisée.

En effet, $\beta\not\Vdash P$ par définition, d'où $\beta\Vdash \neg P$. Mais on a également $\beta\Vdash\neg\neg P$ puisque $\beta\Vdash \bot$. Mais alors $\beta\not\Vdash \neg\neg P\rightarrow P$. Par conséquent $\beta\Vdash\neg(\neg\neg P\rightarrow P)$ et toujours à cause du fait que $\beta\Vdash \bot$, on obtient $\beta\Vdash \neg\neg(\neg\neg P\rightarrow P)$.

$\alpha\not\Vdash P$ et $\beta\not\Vdash P$ par définition, d'où $\beta\Vdash \neg P$. Mais $\alpha\not\Vdash \neg\neg P$ puisque $\alpha\not\Vdash\bot$. On a aussi $\alpha\not\Vdash\neg\neg P\rightarrow P$ puisque $\beta\Vdash \neg\neg P$ et $\beta\not\Vdash P$. Par conséquent, $\alpha\Vdash \neg(\neg\neg P\rightarrow P)$ puisqu'à la fois $\alpha\not\Vdash\neg\neg P \rightarrow P$ et $\beta\not\Vdash \neg\neg P\rightarrow P$. D'où $\alpha\not\Vdash\neg\neg(\neg\neg P\rightarrow P)$ puisqu'à la fois $\alpha\Vdash\neg(\neg\neg P \rightarrow P)$ et $\alpha\not\Vdash\bot$.

Il existe donc un nœud du modèle qui ne force pas la formule $\neg\neg(\neg\neg P\rightarrow P)$. Le théorème de complétude de la logique minimale nous dit alors que $\neg\neg(\neg\neg P\rightarrow P)$ n'est pas un théorème de la logique minimale.<br>
Or on a montré que cette formule était un théorème de la logique intuitionniste. Le séquent $\vdash\neg\neg(\neg\neg P\rightarrow P)$ est donc prouvable en logique intuitionniste mais pas en logique minimale. Cela prouve que la logique minimale forme un sous-ensemble strict de la logique intuitionniste, elle-même strictement incluse dans la logique classique.
![](/troislogiques.png?width=600px)


### Le calcul des séquents


Comme la déduction naturelle, le calcul des séquents a été mis au point par Gerhard Gentzen, dans la même thèse de 1934. Son but est de mettre encore mieux en lumière les propriétés mathématiques de la notion de démonstration.

Les différences principales avec la déduction naturelle sont que la partie droite des séquents n'est plus une seule formule conclusion mais un ensemble fini de formules, et les règles d'élimination sont remplacées par des règles d'introduction à gauche afin de rendre le système de démonstration symétrique.


<div class="def">

Un <b>séquent</b> (noté $\Gamma\vdash\Delta$) est un couple où&nbsp;:

<ul>
<li>$\Gamma$ est un ensemble fini de formules, appelé la partie gauche du séquent,</li>

<li>$\Delta$ est également un ensemble fini de formules, appelé la partie droite du séquent.</li>
</ul>
</div>


Intuitivement, un séquent $\Gamma\vdash\Delta$ où $\Gamma=\set{\phi_1,\ldots,\phi_n}$ et $\Delta=\set{\psi_1,\ldots,\psi_k}$ est interprété comme $\bigwedge_{1≤i≤n}\phi_i \vdash \bigvee_{1≤j≤k} \psi_j$. Une conjonction d'hypothèses prouve une disjonction de conclusions.<br>
La conjonction vide d'hypothèses est interprétée comme le vrai, alors que la disjonction vide de conclusion est interprétée comme le faux.<br>
$\vdash\Delta$ signifie donc $(\psi_1\lor\psi_2\lor\ldots\lor\psi_k)$, alors que le séquent $\Gamma\vdash$ signifie $(\phi_1\land\phi_2\land\ldots\land\phi_n)\rightarrow\bot$, c'est-à-dire $\neg(\phi_1\land\phi_2\land\ldots\land\phi_n)$.<br>
Enfin $\vdash$, qui signifie "vrai implique faux", est interprété comme l'absurde (il correspond au séquent $\vdash\bot$ de la déduction naturelle).

Les **règles** du calcul des séquents sont très proches de celles de la déduction naturelle.<br>
D'un ensemble de **prémisses** (0, 1 ou 2), on déduit un séquent **conclusion**.

Les règles d'introduction sont conservées, mais elles deviennent des règles d'introduction à droite. Les règles d'élimination deviennent, elles, des règles d'introduction à gauche.

Les règles structurelles sont symétrisées et on ajoute un axiome ainsi qu'une nouvelle règle, la <b>règle de coupure</b>&nbsp;:
<div class="defile">
$$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi,\Delta$}
\AxiomC{$\Gamma',\phi\vdash\Delta'$}
\RightLabel{$\scriptsize\;cut$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\Delta,\Delta'$}
\end{prooftree}
$$
</div>

En déduction naturelle, cela correspond aux deux prémisses $\Gamma\vdash\phi$ et $\phi\vdash\psi$ desquelles on déduit $\Gamma\vdash\psi$.<br>
La règle de coupure est souvent utilisée dans les preuves pour simplifier la déduction en introduisant des lemmes ou des théorèmes intermédiaires.<br>
Étant donné qu'il n'y a plus de règles d'élimination, c'est la règle de coupure qui permet de rétablir la transitivité dans les déductions.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/reglesequents.png" style="border-radius:20px">
</div>

L'**affaiblissement à droite** reflète l'idée que si on a une preuve que quelque chose est vrai à partir d'un ensemble de prémisses, ajouter une conclusion supplémentaire comme possibilité n'enlève rien à la validité de cette preuve.<br>
En remplaçant $\Delta$ par $\emptyset$, on retrouve la règle d'**absurdité intuitionniste**.


<div class="preuve">
Preuve du tiers exclu&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\neg_d$}
\UnaryInfC{$\vdash\phi,\neg\phi$}
\RightLabel{$\scriptsize\;\lor_d$}
\UnaryInfC{$\vdash\phi\lor\neg\phi$}
\end{prooftree}
$$
</div>
</div>


<div class="preuve">
Preuve de $\vdash\phi\rightarrow\neg\neg\phi$&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\neg_g$}
\UnaryInfC{$\phi,\neg\phi\vdash$}
\RightLabel{$\scriptsize\;\neg_d$}
\UnaryInfC{$\phi\vdash\neg\neg\phi$}
\RightLabel{$\scriptsize\;\rightarrow_d$}
\UnaryInfC{$\vdash\phi\rightarrow\neg\neg\phi$}
\end{prooftree}
$$
</div>
</div>


<div class="preuve">
Preuve de l'élimination des doubles négations&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\neg_d$}
\UnaryInfC{$\vdash\phi,\neg\phi$}
\RightLabel{$\scriptsize\;\neg_g$}
\UnaryInfC{$\neg\neg\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow_d$}
\UnaryInfC{$\vdash\neg\neg\phi\rightarrow\phi$}
\end{prooftree}
$$
</div>
</div>


Les deux formules précédentes se ressemblent fortement mais seule la première est prouvable en logique intuitionniste.<br>
Les deux preuves en calcul des séquents sont quasiment les mêmes, mais l'ordre d'introduction des négations est inversé (gauche-droite pour la première et droite-gauche pour la deuxième).


<div class="theo">

La <b>logique intuitionniste</b> est la version du calcul des séquents dont les règles sont restreintes aux séquents avec au plus une formule à droite, la contraction à droite étant considérée comme implicite.

</div>


L'idée est d'obliger une preuve à indiquer spécifiquement la conclusion dérivée, sans ambiguïté.<br>
Et la négation est interprétée comme l'absence de preuve puisque c'est maintenant seulement $\phi\vdash\bot$ qui donne $\vdash\neg\phi$. Cela rend par conséquent l'utilisation de la négation à droite impossible dans la deuxième preuve alors qu'il n'y a pas de problème dans la première.


<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/reglesequentsint.png" style="border-radius:20px">
</div>


<div class="theo">

La <b>logique minimale</b> est la version du calcul des séquents sans la règle de l'affaiblissement à droite et dont les règles sont restreintes aux séquents avec au plus une formule à droite (la contraction à droite n'est ici pas considérée comme implicite).

</div>


<div class="preuve">
Preuve de $\vdash\neg\neg(\neg\neg\phi\rightarrow\phi)$&nbsp;:

<div style="position:relative;width:450px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedblenegsequent.png">
</div>
</div>

Chaque nœud de l'arbre de preuve ne contient pas plus d'une formule à droite du symbole du séquent, par contre la règle d'affaiblissement à droite est utilisée, ce qui situe cette preuve dans le cadre de la logique intuitionniste mais pas de la logique minimale.


La <b>règle de coupure</b> correspond, en déduction naturelle, à l'introduction de l'implication suivie aussitôt de son élimination&nbsp;:

<div class="defile">
$$
\begin{prooftree}
\AxiomC{$\Gamma,\phi\vdash\psi$}
\RightLabel{$\scriptsize\;\rightarrow_i$}
\UnaryInfC{$\Gamma\vdash\phi\rightarrow\psi$}
\AxiomC{$\Gamma'\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow_e$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\psi$}
\end{prooftree}
$$
</div>

Cette règle est essentielle pour tenir compte de la manière dont nous raisonnons puisqu'il arrive très souvent que l'on utilise les conclusions d'un raisonnement antérieur comme hypothèses pour de nouvelles démonstrations (hypothèses que nous faisons disparaître sur la base du fait que nous les avons démontrées).

Mais si notre objectif est d'automatiser les preuves, de les algorithmiser, les règles de coupure deviennent un handicap.


<div class="theo">

<b>Élimination des coupures</b> (le <i>Hauptsatz</i>, «&nbsp;théorème principal&nbsp;», de Gentzen)

S'il existe, en calcul des séquents classique (respectivement intuitionniste), une preuve du séquent $\Gamma\vdash\Delta$, alors il existe une preuve en calcul des séquents classique (respectivement intuitionniste) de ce séquent sans utilisation de la règle de coupure.

</div>


Tout séquent est donc prouvable par utilisation des seuls axiomes, règles logiques et règles structurelles. La démonstration du théorème consiste alors  justement à remplacer dans une preuve donnée chaque utilisation de la règle de coupure par d'autres règles.


<div class="theo">

<b>Corollaire</b>&nbsp;: le séquent "$\vdash$" n'est pas prouvable en logique classique.

</div>


"$\vdash$" signifie que le vrai entraîne le faux. Nous voilà plutôt soulagés d'être dans l'incapacité de prouver ce résultat qui ferait s'effondrer tout l'édifice logique patiemment construit. Si $\vdash$ était prouvable, alors par affaiblissement, tout séquent $\vdash\Delta$ le serait également...


<div class="preuve">

S'il existait une preuve du séquent $\vdash$, il en existerait aussi une sans utilisation de la règle de coupure. Or toutes les autres règles introduisent une formule soit à droite, soit à gauche, soit des deux côtés à la fois. La seule règle permettant de faire disparaître une formule est la règle de contraction, mais elle ne la fait pas disparaître complètement puisqu'elle se contente d'en faire disparaître les occurrences. On ne pourra donc jamais aboutir à "$\vdash$" sans la règle de coupure et donc d'après le théorème d'élimination des coupures, on ne peut pas démontrer $\vdash$ en calcul des séquents. Youpi.
</div>


<div class="theo">

<b>Propriété de la sous-formule</b>

Si le séquent $\Gamma\vdash\Delta$ est prouvable en logique classique (respectivement intuitionniste), alors il existe une preuve en logique classique (respectivement intuitionniste) de ce séquent dans laquelle n'apparaissent que des séquents constitués de sous-formules des formules de $\Gamma$ et de $\Delta$.

</div>


<div class="preuve">

Il existe une preuve sans coupure de $\Gamma\vdash\Delta$. Or on peut vérifier règle par règle, par induction sur la hauteur de cette preuve sans coupure, qu'elle peut ne faire apparaître que des sous-formules de $\Gamma$ et de $\Delta$.
</div>


{{%notice type="info" round="true"%}}
Une conséquence de la propriété de la sous-formule est qu'une preuve d'une disjonction en logique intuitionniste passe nécessairement par une preuve d'un des termes de la disjonction&nbsp;:
<br>
$\vdash_{\\!i}\phi\lor\psi$ si et seulement si ($\vdash_{\\!i}\phi$ ou $\vdash_{\\!i}\psi$).
<br>
Par exemple, prouver une instance du tiers exclu $\vdash_i\phi\lor\neg\phi$ en logique intuitionniste suppose qu'on a été capable soit de prouver $\vdash_i\phi$, soit de prouver $\vdash_i\neg\phi$, ce qui n'est pas le cas en logique classique. (Attention, la propriété ne vaut que sans hypothèses&nbsp;: de l'hypothèse $P\lor Q$ on déduit évidemment $P\lor Q$, sans pouvoir déduire ni $P$ ni $Q$.)
{{%/notice%}}

La conséquence majeure de la propriété de la sous-formule est de permettre (tout particulièrement en logique intuitionniste) une **recherche de preuve automatique**. La production mécanique de preuve comme par exemple la preuve de correction de programmes informatiques devient en effet possible une fois qu'on se débarrasse du caractère abstrait des preuves par coupures. Cela donne des preuves longues mais simples ne faisant appel qu'aux sous-formules des formules du séquent qu'il s'agit de prouver.

<div class="encadre bleu">
<div class="encadre-titre">Des preuves aux programmes</div>

L'élimination des coupures a une postérité inattendue. Dans les années 1960, on s'aperçoit (c'est la **correspondance de Curry-Howard**) qu'une preuve en logique intuitionniste et un programme informatique sont un seul et même objet, vu sous deux angles&nbsp;:

<div class="tableau-large">
<table class="tab-recap">
<tr><th>Logique</th><th>Programmation</th></tr>
<tr><td>formule</td><td>type</td></tr>
<tr><td>preuve de $\phi\rightarrow\psi$</td><td>fonction qui transforme une donnée de type $\phi$ en donnée de type $\psi$</td></tr>
<tr><td>preuve de $\phi\land\psi$</td><td>couple (une donnée de chaque type)</td></tr>
<tr><td><i>modus ponens</i></td><td>application d'une fonction à un argument</td></tr>
<tr><td>élimination d'une coupure</td><td>une étape de calcul</td></tr>
</table>
</div>

Utiliser un lemme (une coupure), c'est appeler une fonction&nbsp;; éliminer la coupure, c'est exécuter l'appel. Les assistants de preuve comme Rocq (ex-Coq) ou Lean reposent sur cette idée&nbsp;: y vérifier une démonstration, c'est vérifier qu'un programme est bien typé.

</div>

<nav class="suite-nav" aria-label="Chapitre précédent et suivant">
<a href="../semantique/" class="precedent"><span>← Précédent</span><b>Sémantique</b></a>
<a href="../../modale/syntaxe-semantique/" class="suivant"><span>Suite →</span><b>Logique modale</b></a>
</nav>
