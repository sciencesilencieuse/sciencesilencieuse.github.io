+++
title = "Propositions - Preuve"
date = 2021-03-06T14:20:50+01:00
weight = 3
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
  td, th {
  text-align: center;
  vertical-align: middle;
  min-width: 3em;
}
#grosseformule 
{
    overflow-x: auto; 
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

## Théorie de la démonstration

<br>

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

<br>

### Les systèmes axiomatiques

<br>

Les systèmes axiomatiques ou systèmes **"à la Hilbert"** reposent sur un petit nombre de vérités élémentaires, les **axiomes**, et sur des **règles** de construction qui préservent la vérité.<br>
Les démonstrations obtenues sont concises mais très peu explicatives. Ça marche, mais on ne sait pas pourquoi, faute au manque de structure de ces preuves.

Exemple d'un système axiomatique reposant sur le système complet de connecteur $\set{\neg,\rightarrow}$ et comportant 3 axiomes pour une seule règle&nbsp;:

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

<p style="margin-bottom:-1.1em;">La déduction de $\phi$ à partir d'un ensemble de formules $\Gamma$ est une suite finie de formules $\langle \phi_1,\phi_2,\ldots,\phi_n\rangle$ telle que&nbsp;:</p>

- chaque $\phi_i$ vérifie une des trois conditions suivantes&nbsp;:
    - $\phi_i$ est un axiome,
    - $\phi_i$ est une hypothèse ($\phi_i \in \Gamma$),
    - $\phi_i$ est obtenue à partir de l'application de la règle du <i>modus ponens</i> à deux formules $\phi_j$ et $\phi_k$ telles que $j,k≤i$.
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

On ne peut pas dire que la démonstration nous éclaire beaucoup sur la vérité de $\phi\rightarrow \phi$...

En conclusion, les systèmes à la Hilbert sont utiles pour démontrer des trucs mais pas pour étudier les démonstrations elles-mêmes.

<br>

### La déduction naturelle

<br>

<div id="def">

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

<div id="def">
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

On va dans la suite considérer le système complet de connecteur $\set{\neg,\land,\lor,\rightarrow}$. 

<p style="margin-bottom:-0.5em;">En dehors des <b>axiomes</b> représentés par le séquent $\phi \vdash\phi$, les règles peuvent être regroupées en deux catégories&nbsp;:</p>

- les <b>règles logiques</b> (règles d'introduction et d'élimination des différents connecteurs).
- les <b>règles structurelles</b> permettant de manipuler les hypothèses&nbsp;; l'affaiblissement permet d'ajouter de nouvelles hypothèses et la contraction permet de fusionner deux occurrences de la même hypothèse.

<br>

#### Logique minimale

<br>

Règles de la **logique minimale**&nbsp;:


<div id="def">
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

<br>

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

<br>

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

<br>

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
\UnaryInfC{$\Gamma \vdash \phi\lor\phi $}
\end{prooftree}
\end{array}
$
<br>
<br>
Si on a prouvé une formule, alors <i>a fortiori</i>, on a prouvé cette formule ou une autre.
</li>

<br>

<li><b>Élimination de la disjonction</b><br>
<br>
<div id="grosseformule">
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
Si on a prouvé $\phi\lor\psi$, alors pour prouver $\theta$, il suffit de prouver $\theta$ en supposant $\phi$ ou prouver $\theta$ en supposant $\psi$. 
</li>

<br>

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

<br>

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

<br>

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

<br>

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

<br>

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

<br>

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
- Les éliminations de la conjonction, les introductions de la disjonctions, l'introduction de l'implication, l'introduction de la négation, l'affaiblissement et la contraction sont des arbres à une racine et une feuille.
- l'introduction de la conjonction, l'élimination de l'implication et l'élimination de la négation sont des arbres à une racine et deux feuilles.
- l'élimination de la disjonction et un arbre à une racine et trois feuilles.

Pour construire une preuve, on va assembler ces arbres.

<div id="def">

Une <b>déduction</b> (en logique minimale) dans le système de la déduction naturelle est un arbre fini dont les nœuds sont des séquents $\left(S_i\right)_{i≤k}$, et tel que pour chaque nœud $S_i$ de la déduction&nbsp;:
<ul>
<li>$S_i$ est une feuille si et seulement si $S_i$ est un axiome,</li>
<br>
<li> si $S_i$ n'est pas une feuille, alors l'arbre dont $S_i$ est la racine et les enfants de $S_i$ sont les feuilles est une instance de l'une des règles du tableau.</li>
</ul>

Une formule $\phi$ est déductible des hypothèses $\Gamma$ s'il existe une déduction dont la racine soit le séquent $\Delta\vdash\phi$ pour un ensemble d'hypothèses $\Delta \subseteq \Gamma$. On note alors $\Gamma\vdash_m \phi$.

</div>

<br>

Exemples de preuves&nbsp;:

<div id="preuve">

Prouver que $(\phi\rightarrow (\psi\rightarrow\theta))\rightarrow ((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta))$ est bien un théorème du calcul des propositions revient à obtenir une déduction du séquent $\vdash_{\\! m} \\;(\phi\rightarrow (\psi\rightarrow\theta))\rightarrow ((\phi\rightarrow\psi)\rightarrow(\phi\rightarrow\theta)$&nbsp;:

<div id="grosseformule">
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

<br>

<div id="preuve">

Preuve du séquent $\vdash_{\\!m}\\; \phi\rightarrow\neg\neg\phi$&nbsp;:

<div id="grosseformule">
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

<div id="preuve">

Montrons que $\vdash_{\\!m} \\,\neg\phi\leftrightarrow (\phi\rightarrow\bot)$&nbsp;:
<div style="position:relative;width:620px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedeb.png">
</div>
</div>

Rq&nbsp;: pour raccourcir les preuves, on va intégrer dorénavant les affaiblissements et contractions aux autres règles.<br>

<br>

La notion de preuve telle qu'on l'a défini ne s'appuie que sur un enchaînement de règles pour aboutir à la conclusion. Il s'agit donc d'une conséquence **syntaxique** des formules en hypothèse.

De la même manière qu'on a défini l'équivalence sémantique à partir de la notion de conséquence sémantique, on va définir une équivalence au sens syntaxique à partir des séquents.

<div id="def">

Deux formules $\phi$ et $\psi$ sont **équivalentes** pour la logique minimale si on a à la fois $\phi\vdash_{\\!m}\psi$ et $\psi\vdash_{\\!m}\phi$, et on écrit $\phi\equiv_m\psi$
</div>

<br><br>

#### Logique intuitionniste

<br>

Certains raisonnements ne sont pas possibles avec la logique minimale. On va enrichir le pouvoir expressif de notre système déductif grâce à de nouvelles règles. Ces règles concernent la contradiction $\bot$, et plus précisément son élimination.

<div id="def">

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
Si une contradiction découle d'un jeu d'hypothèses, alors n'importe quelle formule est démontrable avec ces mêms hypothèses.
</div>

<br>

On obtient ainsi un nouveau système déductif&nbsp;; celui de la **logique intuitionniste**.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/resumreglesintui.png" style="border-radius:20px">
</div>

La règle de l'absurdité intuitionniste n'est pas démontrable dans le cadre de la logique minimale. Les déductions qui utilisent cette règle ne sont donc pas possibles en logique minimale. Il existe par conséquent des formules qui sont des théorèmes en logique intuitionniste (des séquents démontrables), mais restent non prouvables en logique minimale.

<div id="def">

Deux formules $\phi$ et $\psi$ sont **équivalentes** pour la logique intuitionniste si on a à la fois $\phi\vdash_{\\!i}\psi$ et $\psi\vdash_{\\!i}\phi$, et on écrit $\phi\equiv_i\psi$.
</div>

<br>

<div id="preuve">
Exemple d'une formule démontrable en logique intuitionniste et non démontrable en logique minimale&nbsp;: $\neg\neg(\neg\neg\phi\rightarrow\phi)$
<div id="grosseformule">
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

<br>

#### La logique classique

<br>

<div id="def">

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
Si une contradiction découle d'un jeu d'hypothèse auquel on ajoute la négation d'une formule, alors la formule est démontrable à partir du jeu d'hypothèses de départ.
</div>

<br>

En ajoutant à la logique minimale non pas la règle de l'absurdité intuitionniste mais cette règle de l'absurdité classique, on obtient la **logique classique**.

L'absurdité classique n'est démontrable ni en logique minimale, ni en logique intuitionniste, alors que l'absurdité intuitionniste n'est qu'un cas particulier de l'absurdité classique.
<br>

<div id="preuve">
<div id="grosseformule">
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

Cela montre que la logique classique est un upgrade par rapport à la logique intuitionniste.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/resumreglesclass.png" style="border-radius:20px">
</div>

<br>

Des raisonnements comme la loi du tiers exclu ou l'élimination des doubles négations deviennent enfin démontrables (ils ne l'étaient pas en logique intuitionniste et *a fortiori* pas non plus en logique minimale).

<br> 

<div id="preuve">
<b>Loi du tiers exclu</b> $\vdash\phi\lor\neg\phi$
<div style="position:relative;width:620px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvetiersexclu.png">
</div>
</div>

<br> 

<div id="preuve">
<b>Élimination des doubles négations</b> $\vdash\neg\neg\phi\rightarrow\phi$
<div style="position:relative;width:280px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedbleneg.png">
</div>
</div>

<br> 

<div id="preuve">
<b>Loi de Peirce</b> $\vdash(\neg\phi\rightarrow\phi)\rightarrow\phi$
<div style="position:relative;width:440px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvepeirce.png">
</div>
</div>

<br> 

<div id="preuve">
La <b>contraposition</b> $\vdash(\neg\psi\rightarrow\neg\phi)\rightarrow(\phi\rightarrow\psi)$
<div style="position:relative;width:450px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvecontrap.png">
</div>
</div>

<br>

<br>

L'ajout de l'absurdité classique aux règles de la logique minimale n'est pas le seul chemin pour obtenir la logique classique. En utilisant chacun des quatre différents séquents que l'on vient de démontrer comme axiome, on peut augmenter soit la logique minimale, soit la logique intuitionniste en logique classique.

<div id="theo">
<ol>
<li>logique classique = logique intuitionniste + <b>principe du tiers exclu</b></li>
<li>logique classique = logique intuitionniste + <b>loi de Peirce</b></li>
<li>logique classique = logique minimale + <b>élimination des doubles négations</b></li>
<li>logique classique = logique minimale + <b>contraposition</b></li>
</ol>
</div>

<br>

<div id="preuve">

Nous allons montré que les inclusions sont vérifiées dans les deux sens.
<ul>
<li>Pour le sens $\supset$, c'est déjà fait.<br>
En effet, on a démontré plus haut que chacun des axiomes ajoutés peut se démontrer en logique classique sans hypothèse supplémentaire.</li>
<br>
<li> Sens $\subset$&nbsp;: il suffit de vérifier à chaque fois que la règle de l'absurde classique peut être obtenue à partir de la logique considérée à laquelle on a ajouté l'axiome.
<br>
<br>
<ol>
<li>logique classique $\subset$ logique intuitionniste + <span style="color:#970E53">principe du tiers exclu</span>&nbsp;:<br><br>
<div id="grosseformule">
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

<br>

<li>logique classique $\subset$ logique intuitionniste + <span style="color:#970E53">loi de Peirce</span>&nbsp;:<br><br>
<div id="grosseformule">
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
\RightLabel{$\scriptsize\;\lor e$}
\BinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>

<br>

<li>logique classique $\subset$ logique minimale + <span style="color:#970E53">élimination des doubles négations</span>&nbsp;:<br><br>
<div id="grosseformule">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\color{#970E53}\vdash\neg\neg\phi\rightarrow\phi$}
\AxiomC{$\Gamma,\neg\phi\vdash\bot$}
\RightLabel{$\scriptsize\;\neg i$}
\UnaryInfC{$\Gamma\vdash\neg\neg\phi$}
\RightLabel{$\scriptsize\;\lor e$}
\BinaryInfC{$\Gamma\vdash\phi$}
\end{prooftree}
$$
</div>
</li>

<br>

<li>logique classique $\subset$ logique minimale + <span style="color:#970E53">contraposition</span><br>
On va utiliser une instance de la contraposition où $\psi:=\phi$ et $\phi:=\neg\bot$&nbsp;:<br><br>
<div id="grosseformule">
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
\RightLabel{$\scriptsize\;\rightarrow e$}
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

{{%notice info%}}
La logique intuitionniste, contrairement à la logique classique, vise à obtenir des preuves **constructives**. Établir la vérité de $\phi$ ne suffit pas, il faut la construire étape par étape. Or les raisonnements par l'absurde classique ne construisent pas réellement la vérité de $\phi$ puisqu'ils se contentent d'établir une contradiction mettant en jeu $\neg\phi$. De même, le tiers exclu nous affirme que $\phi=\psi\lor\neg\psi$ sans jamais établir la vérité de $\psi$ ou $\neg\psi$.<br><br>
Exemple classique de l'utilisation du tiers exclu en mathématique&nbsp;:<br>
prouvons qu'il existe un couple de nombres irrationnels $(a,b)$ ($a,b\in\mathbb{R}\setminus \mathbb{Q}$) tels que $a^b$ soit rationnel ($a^b\in\mathbb{Q}$).<br>
Sachant que $\sqrt{2}$ est irrationnel, on distingue deux cas&nbsp;:<br>
si $\sqrt{2}^\sqrt{2}$ est rationnel, alors on prend $a=b=\sqrt{2}$<br>
si $\sqrt{2}^\sqrt{2}$ est irrationnel, alors on prend $a=\sqrt{2}^\sqrt{2}$ et $b=\sqrt{2}$ puisqu'ainsi $a^b=2$.<br>
On a donc bien répondu à la question puisque d'après le principe du tiers exclu, on est dans un cas ou dans l'autre. Mais pour savoir laquelle des deux options est la bonne, il faudrait savoir si $\sqrt{2}^\sqrt{2}$ est rationnel ou non (et démontrer qu'il ne l'est pas est beaucoup plus lourd)...<br><br>
En logique intuitionniste, si l'on a réussi à démontrer le séquent $\vdash_{\\! i}\phi\lor\psi$, c'est qu'on a démontré un des deux séquents $\vdash_{\\! i}\phi$ ou $\vdash_{\\! i}\psi$. Il n'y a pas de vérité intermédiaire indéterminée.<br><br>
Un autre grief contre la logique classique concerne l'implication matérielle&nbsp;: $\phi\rightarrow\psi$ est considérée comme vraie si $\neg\phi$ sans qu'on n'ait jamais eu à construire de lien entre $\phi$ et $\psi$. La philosophe Dorothy Edgington en a tiré une démonstration de l'existence de Dieu grâce à la formule suivante&nbsp;: si Dieu n'existe pas ($\neg G$), il n'est pas vrai que si je prie ($P$), alors mes prières seront entendues ($A$). L'affirmation ne semble pas choquante. Sous forme de formule, cela donne&nbsp;: $(\neg G)\rightarrow \neg(P\rightarrow A)$. La formule peut se réécrire en éliminant les implications&nbsp;: $G\lor\neg(\neg P \lor A)$. Et voilà maintenant le coup de grâce, sous la forme d'une deuxième formule&nbsp;: $\neg P$, "je ne prie pas". Et si $P$ est faux, seul $G$ survit dans la formule principale&nbsp;; "Dieu existe".
{{%/notice%}}

<br>

Les règles de la logique classique permettent de faire coïncider les notions de conséquence syntaxique et de conséquence sémantique.

<div id="theo">

<b>Correction</b> de la logique classique&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
Si $\Gamma\vdash_{\\!c}\phi$ alors $\Gamma\models\phi$ 

</div>

<br>

<div id="preuve">

Une preuve étant une suite finie de séquent, on va procéder par induction sur la longueur de la preuve.<br>

<ul>
<li>Si la preuve a une longueur 1, le séquent ne peut être qu'un axiome de la forme $\phi\vdash\phi$.<br>
Reste à montrer que $\phi\models\phi$ est vraie. Et c'est bien sûr le cas&nbsp;: par définition, $\phi\models\phi$ est vraie si $\phi$ est vraie dans chaque modèle où $\phi$ est vraie...<br>
<li>On suppose maintenant la propriété vraie pour toutes les preuves de longueur $n$.<br>
Une preuve de longueur $n+1$ est une preuve de longueur $n$ à laquelle on ajoute un séquent qui est soit un axiome (on revient au cas précédent), soit une des règles.<br>
Il faut montrer que les règles ont été judicieusement choisies pour "conserver" la notion de conséquence sémantique entre els prémisses et la conclusion.<br>
Ici, les prémisses sont bien des conséquences sémantiques par application de l'hypothèse d'induction (elles correspondent à des séquents de longueur $≤n$).<br>
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

<br>

Une conséquence de la correction de la logique classique est que pour toute théorie finie $\Gamma$ et pour tout modèle $\mathcal{M}$ de cette théorie, si une formule est démontrable à partir des hypothèses $\Gamma$, alors elle est vraie dans $\mathcal{M}$.<br>
Tout ce que l'on peut déduire syntaxiquement d'une théorie est vrai dans un modèle quelconque de cette théorie.

<br>

<div id="theo">

<b>Complétude</b> de la logique classique&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
Si $\Gamma\models\phi$ alors $\Gamma\vdash_{\\!c}\phi$

</div>

<br>

<div id="preuve">

Soit $\phi$, une formule quelconque du calcul des propositions dont les variables sont parmis $\set{P_1,\ldots,P_n}$, et $\mathcal{M}$, un modèle possible de $\phi$. On note&nbsp;:
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
<div id="grosseformule">
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

{{%notice tip%}}
De façon informelle, la correction stipule que toute formule prouvable est vraie, alors que la complétude, de son côté, affirme que toutes les formules vraies sont prouvables.<br>
Et dit autrement encore, on peut prouver **toute la vérité** (**complétude**) et **rien que la vérité** (**correction**).
{{%/notice%}}

<div id="theo">

Corollaire&nbsp;:<br>

$\models\phi$ ssi $\vdash_{\\!c}\phi$<br>
Toute tautologie est démontrable sans utiliser d'hypothèse et à l'inverse, toute formule démontrable sans hypothèse est une tautologie.

</div>

<br>

<div id="theo">

Corollaire&nbsp;:

Soient $\phi$ et $\psi$ deux formules du calcul des propositions,<br>
$\Gamma\equiv\psi$ ssi $\Gamma\equiv_c\psi$
</div>

<br>


On a montré finalement que **la sémantique du calcul des propositions correspond à la logique classique**. On peut d'ailleurs parler de "sémantique classique". Mais qu'en est-il de la logique intuitionniste&nbsp;? Peut-on définir une sémantique qui lui soit adaptée afin d'obtenir un théorème de complétude pour la logique intuitionniste&nbsp;?<br>
Oui, grâce aux modèles de Kripke.

<br>

### Les modèles de Kripke du calcul des propositions intuitionniste

<br>

On a vu qu'une formule est démontrable en logique classique si et seulement si elle est vraie dans tous les modèles (classiques) possibles. On va aboutir à une proposition similaire grâce aux modèles de Kripke&nbsp;: une formule est démontrable en logique intuitionniste si et seulement si elle est réalisée dans tous les modèles de Kripke possibles.

<br>

<div id="def">

Soit $\set{P_1,\ldots,P_k}$ un ensemble de variables propositionnelles.<br>
$\mathcal{K}=(\mathcal{T}_\mathcal{K},\Vdash)$ est un <b>modèle de Kripke</b> arborescent fini sur les variables $P\_1,\ldots,P\_k$ si&nbsp;:

<ul>
<li>$\mathcal{T}_\mathcal{K}$ est un arbre fini dont la <b>relation d'ancestralité</b> entre deux nœuds est noté $\alpha≤\beta$ ($\alpha$ est un ancêtre de $\beta$).</li>
<br>
<li>$\Vdash$ est une relation binaire appelée <b>relation de forcing</b> entre les nœuds de $\mathcal{T}_\mathcal{K}$ et les variables propositionnelles qui vérifie&nbsp;:<br>

<ul>
<li>pour tout nœud $\alpha$&nbsp;: $\alpha\not\Vdash\bot$</li>

<li>pour tout nœud $\alpha$, $\beta$ et variable propositionnelle $P_i$, si à la fois $\alpha≤\beta$ et $\alpha\Vdash P_i$ alors on a $\beta\Vdash P_i$.</li>
</ul>
</li>
</ul>
</div>

<br>

{{%notice info%}}
Un modèle de Kripke avec un seul nœud peut être vu comme un modèle de la logique classique car les conditions de la relations de forcing ($\Vdash$) sont alors identiques à celles de la relation de vérité sémantique ($\models$).
{{%/notice%}}

La relation de forcing fait en sorte que si une formule est vraie dans un nœud (qui représente un monde, comme on le verra en logique modale), alors elle reste vraie dans tous les nœuds accessibles depuis le nœud de départ (tous les mondes accessibles).

<br>

<div id="def">

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
Dit autrement, aucun nœud ne force le faux.<br>
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


<div id="def">

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

<br>

<div id="theo">

<b>Correction et complétude de la logique intuitionniste</b>&nbsp;:

Soient $\Gamma$ un ensemble fini de formules et $\phi$ une formule du calcul des propositions,<br>
$\Gamma\Vdash_i\phi$ ssi $\Gamma\vdash_{\\!i} \phi$
</div>

<br>

<div id="theo">

Corollaire&nbsp;:

$\Vdash_i\phi$ ssi $\vdash_{\\!i} \phi$
</div>

<br>

En abandonnant la condition "pour tout nœud $\alpha$&nbsp;: $\alpha\not\Vdash\bot$" on obtient le modèle de Kripke adaptée à la logique minimale.

La condition de forcing de la négation devient alors $\alpha\Vdash\neg\phi$ ssi $\alpha\Vdash\phi\rightarrow\bot$ (pour tout nœud $\beta$ de $\mathcal{T}_\mathcal{K}$ tel que $\alpha≤\beta$, si $\beta\Vdash\phi$ alors $\beta\Vdash\bot$).

On obtient cette fois-ci&nbsp;: 

<div id="theo">

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
Or on a montré que cette formule était un théorème de la logique intuitionniste. Le séquent $\vdash\neg\neg(\neg\neg P\rightarrow P)$ est donc prouvable en logique intuitionniste mais pas en logique minimale. Cela prouve que la logique minimale forme un sous-ensemble strict de la logique intuitionniste, elle-même strictement inclue dans la logique classique.
![](/troislogiques.png?width=600px)

<br>

### Le calcul des séquents

<br>

Comme la déduction naturelle, le calcul des séquents a été mis au point par Gerhard Gentzen. Son but est de mettre encore mieux en lumière les propriétés mathématiques de la notion de démonstration.

Les différences principales avec la déduction naturelle sont que la partie droite des séquents n'est plus une seule formule conclusion mais un ensemble fini de formules, et les règles d'élimination sont remplacées par des règles d'introduction à gauche afin de rendre le système de démonstration symétrique.

<br>

<div id="def">

Un <b>séquent</b> (noté $\Gamma\vdash\Delta$) est un couple où&nbsp;:

<ul>
<li>$\Gamma$ est un ensemble fini de formules, appelé la partie gauche du séquent,</li>

<li>$\Delta$ est également un ensemble fini de formules, appelé la partie droite du séquent.</li>
</ul>
</div>

<br>

Intuitivement, un séquent $\Gamma\vdash\Delta$ où $\Gamma=\set{\phi_1,\ldots,\phi_n}$ et $\Delta=\set{\psi_1,\ldots,\psi_k}$ est interprété comme $\bigwedge_{1≤i≤n}\phi_i \vdash \bigvee_{1≤j≤k} \psi_j$. Une conjonction d'hypothèses prouve une disjonction de conclusions.<br>
La conjonction vide d'hypothèse est interprété comme le vrai, alors que la disjonction vide de conclusion est interprétée comme le faux.<br>
$\vdash\Delta$ signifie donc $(\psi_1\lor\psi_2\lor\ldots\lor\psi_k)$, alors que le séquent $\Gamma\vdash$ signifie $(\phi_1\land\phi_2\land\ldots\land\phi_n)\rightarrow\bot$, c'est-à-dire $\neg(\phi_1\land\phi_2\land\ldots\land\phi_n)$.<br>
Enfin $\vdash$, qui signifie "vrai implique faux", est interprété comme l'absurde (il correspond au séquent $\vdash\bot$ de la déduction naturelle).

Les **règles** du calcul des séquents sont très proches de celles de la déduction naturelle.<br>
D'un ensemble de **prémisses** (0, 1 ou 2), on déduit un séquent **conclusion**.

Les règles d'introduction sont conservées, mais elles deviennent des règles d'introduction à droite. Les règles d'élimination deviennent, elles, des règles d'introduction à gauche.

Les règles structurelles sont symétrisées et on ajoute un axiome ainsi qu'une nouvelle règle, la <b>règle de coupure</b>&nbsp;:
<div id="grosseformule">
$$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi,\Delta$}
\AxiomC{$\Gamma',\phi\vdash\Delta'$}
\RightLabel{$\scriptsize\;cut$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\Delta,\Delta'$}
\end{prooftree}
$$
</div>

En déduction naturelle, cela correspond aux deux prémisses $\Gamma\vdash\phi$ et $\phi\vdash\psi$ desquels on déduit $\Gamma\vdash\psi$.<br>
La règle de coupure est souvent utilisée dans les preuves pour simplifier la déduction en introduisant des lemmes ou des théorèmes intermédiaires.<br>
Étant donné qu'il n'y a plus de règles d'élimination, c'est la règle de coupure qui permet de rétablir la transitivité dans les déductions.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/reglesequents.png" style="border-radius:20px">
</div>

L'**affaiblissement à droite** reflète l'idée que si on a une preuve que quelque chose est vrai à partir d'un ensemble de prémisses, ajouter une conclusion supplémentaire comme possibilité n'enlève rien à la validité de cette preuve.<br>
En remplaçant $\Delta$ par $\emptyset$, on retrouve la règle d'**absurdité intuitionniste**.

<br>

<div id="preuve">
Preuve du tiers exclu&nbsp;:

<div id="grosseformule">
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

<br>

<div id="preuve">
Preuve de $\vdash\phi\rightarrow\neg\neg\phi$&nbsp;:

<div id="grosseformule">
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

<br>

<div id="preuve">
Preuve de l'élimination des doubles négations&nbsp;:

<div id="grosseformule">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\neg_d$}
\UnaryInfC{$\vdash\phi,\neg\phi$}
\RightLabel{$\scriptsize\;\neg_g$}
\UnaryInfC{$\neg\neg\phi\vdash\phi$}
\RightLabel{$\scriptsize\;\rightarrow_g$}
\UnaryInfC{$\vdash\neg\neg\phi\rightarrow\phi$}
\end{prooftree}
$$
</div>
</div>

<br>

Les deux formules précédentes se ressemblent fortement mais seule la première est prouvable en logique intuitionniste.<br>
Les deux preuves en calcul des séquents sont quasiment les mêmes, mais l'ordre d'introduction des négations est inversé (gauche-droite pour la première et droite-gauche pour la deuxième).

<br>

<div id="theo">

La <b>logique intuitionniste</b> est la version du calcul des séquents dont les règles sont restreintes aux séquents avec au plus une formule à droite, la contraction à droite étant considérée comme implicite.

</div>

<br>

L'idée est d'obliger une preuve à indiquer spécifiquement la conclusion dérivée, sans ambiguïté.<br>
Et la négation est interprétée comme l'absence de preuve puisque puisque c'est maintenant seulement $\phi\vdash\bot$ qui donne $\vdash\neg\phi$. Cela rend par conséquent l'utilisation de la négation à droite impossible dans la deuxième preuve alors qu'il n'y a pas de problème dans la première.


<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:20px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/reglesequentsint.png" style="border-radius:20px">
</div>

<br>

<div id="theo">

La <b>logique minimale</b> est la version du calcul des séquents sans la règle de l'affaiblissement à droite et dont les règles sont restreintes aux séquents avec au plus une formule à droite (la contraction à droite n'est ici pas considérée comme implicite).

</div>


<br>


<div id="preuve">
Preuve de $\vdash\neg\neg(\neg\neg\phi\rightarrow\phi)$&nbsp;:

<div style="position:relative;width:450px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvedblenegsequent.png">
</div>
</div>

Chaque nœud de l'arbre de preuve ne contient pas plus d'une formule à droite du symbole du séquent, par contre la règle d'affaiblissement à droite est utilisée, ce qui situe cette preuve dans le cadre de la logique intuitionniste mais pas de la logique minimale.

<br>

La <b>règle de coupure</b> correspond, en déduction naturelle, à l'introduction de l'implication suivie aussitôt de son élimination&nbsp;:

<div id="grosseformule">
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

Cette règle est essentielle pour tenir compte de la manière dont nous raisonnons puisqu'il arrive très souvent que l'on utilise les conclusions d'un raisonnements antérieur comme hypothèses pour de nouvelles démonstrations (hypothèses que nous faisons disparaître sur la base du fait que nous les avons démontrées).

Mais si notre objectif est d'automatiser les preuves, de les algorithmiser, les règles de coupure deviennent un handicap.

<br>

<br>

<div id="theo">

<b>Élimination des coupures</b>

S'il existe, en calcul des séquents classique (respectivement intuitionniste), une preuve du séquent $\Gamma\vdash\Delta$, alors il existe une preuve en calcul des séquents classique (respectivement intuitionniste) de ce séquent sans utilisation de la règle de coupure.

</div>

<br>

Tout séquent est donc prouvable par utilisation des seuls axiomes, règles logiques et règles structurelles. La démonstration du théorème consiste alors  justement à remplacer dans une preuve donnée chaque utilisation de la règle de coupure par d'autres règles.

<br>

<div id="theo">

<b>Corollaire</b>&nbsp;: le séquent "$\vdash$" n'est pas prouvable en logique classique.

</div>

<br>

"$\vdash$" signifie que le vrai entraîne le faux. Nous voilà plutôt soulagé d'être dans l'incapacité de prouver ce résultat qui ferait s'effondrer tout l'édifice logique patiemment construit. Si $\vdash$ était prouvable, alors par affaiblissement, tout séquent $\vdash\Delta$ le serait également...


<br>

<div id="preuve">

S'il existait une preuve du séquent $\vdash$, il en existerait aussi une sans utilisation de la règle de coupure. Or toutes les autres règles introduisent une formule soit à droite, soit à gauche, soit des deux côtés à la fois. La seule règle permettant de faire disparaître une formule est la règle de contraction, mais elle ne la fait pas disparaître complètement puisqu'elle se contente d'en faire disparaître les occurences. On ne pourra donc jamais aboutir à "$\vdash$" sans la règle de coupure et donc d'après le théorème d'élimination des coupures, on ne peut pas démontrer $\vdash$ en calcul des séquents. Youpi.
</div>

<br>


<div id="theo">

<b>Propriété de la sous-formule</b>

Si le séquent $\Gamma\vdash\Delta$ est prouvable en logique classique (respectivement intuitionniste), alors il existe une preuve en logique classique (respectivement intuitionniste) de ce séquent dans laquelle n'apparaîssent que des séquents constitués de sous-formules des formules de $\Gamma$ et de $\Delta$.

</div>

<br>

<div id="preuve">

Il existe une preuve sans coupure de $\Gamma\vdash\Delta$. Or on peut vérifier règle par règle, par induction sur la hauteur de cette preuve sans coupure, qu'elle peut ne faire apparaître que des sous-formules de $\Gamma$ et de $\Delta$.
</div>

<br>

{{%notice info%}}
Une conséquence de la propriété de la sous-formule est qu'une preuve d'une disjonction en logique intuitionniste passe nécessairement par une preuve d'un des termes de la disjonction&nbsp;:
<br>
$\vdash_{\\!i}\phi\lor\psi$ si et seulement si ($\vdash_{\\!i}\phi$ ou $\vdash_{\\!i}\psi$).
<br>
Par exemple, prouver une instance du tiers exclu $\Gamma\vdash_{\\!i}\phi\lor\neg\phi$ en logique intuitionniste suppose qu'on a été capable soit de prouver $\Gamma\vdash_{\\!i}\phi$, soit de prouver $\Gamma\vdash_{\\!i}\neg\phi$, et ce n'est pas le cas en logique classique.
{{%/notice%}}

La conséquence majeure de la propriété de la sous-formule est de permettre (tout particulièrement en logique intuitionniste) une **recherche de preuve automatique**. La production mécanique de preuve comme par exemple la preuve de correction de programmes informatiques devient en effet possible une fois qu'on se débarrasse du caractère abstrait des preuves par coupures. Cela donne des preuves longues mais simples ne faisant appel qu'aux sous-formules des formules du séquent qu'il s'agit de prouver.

<br>