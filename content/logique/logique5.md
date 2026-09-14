+++
title = "Logique modale"
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
</style>


<br>


<div style="position:relative; width:200px; max-width: 100%; margin-left: auto;margin-right: auto;border-radius:10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/duparc.png" style="border-radius:10px;">
</div>

{{%notice info%}}
Notes de lecture du livre *La logique pas à pas* de Jacques Duparc que je paraphrase allégrement. 
{{%/notice%}}


# Logique modale

<div style="overflow-x: auto;">
<table>
<tr>
    <th><a href="../logique4/">Syntaxe et sémantique</a></th>
    <th><a href="../logique5/">Systèmes logiques</a></th>
    <tH><a href="../logique6/">Différentes logiques modales</a></th>
  </tr>
</table>
</div>

<br>

<br>

## Axiomatique&nbsp;: les systèmes logiques

<br>

Nous cherchons l'équivalent en logique modale des tautologies pour le calcul des propositions&nbsp;; des formules vraies dans tous les modèles, ou plutôt dans toute une classe de modèles car comme on va le voir, la topologie d'un modèle contraint la vérité à l'intérieur de celui-ci.

<div id="def">

La <b>logique de la classe $\mathscr{C}$</b> est la classe de toutes les formules qui sont valides dans tous les systèmes de transition de $\mathscr{C}$&nbsp;: $\mathbb{Log}_\mathscr{C}=\set{\phi|\text{pour tout }\mathcal{S}\in\mathscr{C},\mathcal{S}\Vdash^{\forall a,\forall \mathcal{V}} \phi}$

</div>

<br>

Cette logique doit contenir toutes les formules qui sont des tautologies du calcul des propositions puisque ces formule de profondeur modale nulle (pas d'opérateurs modaux) sont nécessairement forcées en tout nœud de n'importe quel modèle.

<ul>
<li>Si la logique contient la formule $\phi$, elle doit aussi contenir $\Box\phi$. En effet, si $\phi$ est forcée en tout nœud, alors le successeur de tout nœud force aussi $\phi$. On appelle ça la <b>nécessitation</b> (ou généralisation) d'une formule.</li>
<br>
<li>De plus, si $\phi$ appartient à la logique, la satisfaction de $\phi$ en un nœud $a$ donné est indépendante de la valuation $\mathcal{V}$ (que $P$ soit vraie ou fausse, $P$ est forcée au nœud $a$). Par conséquent, que $\psi$ soit vraie ou fausse, la satisfaction de la formule $\phi[\psi/P]$ ne varie pas. Toutes <b>substitutions uniformes</b> opérées sur les variables d'une formule appartenant à la logique sera aussi dans la logique.</li>
<br>
<li>Enfin, la logique de la classe de tous les systèmes de transition est close par <b><i>modus ponens</i></b>&nbsp;; si $\phi \rightarrow\psi$ et $\psi$ appartiennent toutes deux à la logique, alors $\psi$ également. En effet, le <i>modus ponens</i> préserve la validité puisque si un modèle vérifie en un noud à la fois $\psi$ et $\psi\rightarrow\phi$, alors (par définition de l'interprétation de l'implication) il vérifie également $\phi$.</li>
</ul>

Pour déterminer des nouvelles tautologies en calcul des propositions, on a utilisé des systèmes de déduction (à la Hilbert, déduction naturelle, calcul des séquents). La modalité complique un peu les choses et seul le système à la Hilbert va pouvoir s'adapter facilement.

<div id="def">

<ul>
<li>Un <b>axiome</b> est une formule.</li>
<li>Un <b>système formel</b> est un ensemble d'axiomes.</li>
</ul>

</div>

<br>

<div id="def">

Soient $I$ un ensemble non vide, $\phi$ une formule et $\textbf{S}$ un système formel.<br>
Une <b>preuve</b> de la formule $\varphi$ dans le système formel $\textbf{S}$ est une suite finie de formule $\langle\varphi_1,\varphi_2,\ldots,\varphi_n\rangle$ telle que&nbsp;:
<ul>
<li>$\varphi_n=\phi$</li>
<br>
<li>chaque $\varphi_l$ vérifie l'une des quatre conditions suivantes&nbsp;:
<ul>
<li>$\varphi_l \in \textbf{S}$ ($\varphi_l$ est un axiome)</li>
<li>$\varphi_l$ est obtenue par application de la règle du <i>modus ponens</i> à deux formules d'indice inférieurs $\varphi_j$ et $\varphi_k$ où $j , k < l$ ($\varphi_j = \varphi_k\rightarrow\varphi_l$)</li>
<li>$\varphi_l = \varphi_k[\theta /P]$ où $k < l$ (substitution d'une variable $P$ quelconque par une formule $\theta$ quelconque dans une formule d'indice inférieure)</li>
<li>$\varphi_l = [i]\varphi_j$ où $j < l$ ($\varphi_l$ est obtenue à partir de l'application de la règle de nécessitation appliquée à une formule d'indice inférieure pour une étiquette $i\in I$ quelconque)</li>
</ul>
</li>
</ul>

</div>

<br>

<div id="preuve">

Exemple 1&nbsp;:

Si $\textbf{S}$ désigne l'ensemble des tautologies du calcul des propositions, alors la suite 
<div style="overflow-x:auto;margin-top:-1em;">
$$\langle P\rightarrow(P\lor\neg P),\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q),\Box (\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q)),\Box (\Diamond  \phi\rightarrow(\Diamond \phi\rightarrow\lor\neg\Diamond \phi))\rangle$$
</div>
est une preuve de $\Box (\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q)),\Box (\Diamond  \phi\rightarrow(\Diamond \phi\rightarrow\lor\neg\Diamond \phi)$ dans ce système.

En effet&nbsp;:
<ul style="margin-top:-0.5em;">
<li>$\varphi_1=P\rightarrow(P\lor\neg P)$ est une tautologie du calcul des propositions et donc un axiome du système formel $\textbf{S}$,</li>
<li>$\varphi_2 = \Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q) = P\rightarrow(P\lor\neg P)[\Diamond Q /P]$ est la substitution de la formule $\Diamond Q$ à $P$ dans $\varphi_0$,</li>
<li>$\varphi_3 = \Box (\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q))$ est obtenu par nécessitation de $\varphi_1$,</li>
<li>$\varphi_4 = \Box (\Diamond  \phi\rightarrow(\Diamond \phi\rightarrow\lor\neg\Diamond \phi) = \varphi_3[\phi/Q]$</li>
</ul>


C'est plus élégant de représenter l'enchaînement sous forme d'arbre&nbsp;:

<div id="grosseformule">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;ax$}
\UnaryInfC{$P\rightarrow(P\lor\neg P)$}
\RightLabel{$\scriptsize\;sub.$}
\UnaryInfC{$\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q)$}
\RightLabel{$\scriptsize\;nec.$}
\UnaryInfC{$\Box (\Diamond  Q\rightarrow(\Diamond Q\rightarrow\lor\neg\Diamond Q))$}
\RightLabel{$\scriptsize\;sub.$}
\UnaryInfC{$\Box (\Diamond  \phi\rightarrow(\Diamond \phi\rightarrow\lor\neg\Diamond \phi)$}
\end{prooftree}
$$
</div>

</div>

<br>

<div id="preuve">

Exemple 2&nbsp;:

Si $\textbf{S}$ désigne l'ensemble des tautologies du calcul des propositions auquel on ajoute la formule $P\rightarrow\Diamond P$, alors l'arbre ci-dessous décrit une preuve de $\Box(\phi\rightarrow\Diamond\Diamond\phi)$ dans ce système&nbsp;:

<div style="position:relative;width:1300px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/exple260.png">
</div>

</div>

<br>

<div id="def">

Soient $\textbf{S}$ un système formel et $\Gamma$ un ensemble de formules appelées hypothèses.<br>
On écrit $\Gamma\vdash_\textbf{S}\phi$ s'il existe un ensemble fini de formules $\set{\psi_1,\psi_2,\ldots,\psi_n}\subseteq\Gamma$ tel que la formule $(\psi_1\land\psi_2\land\ldots\land\psi_n)\rightarrow\phi$ puisse être prouvée dans le système formel $\textbf{S}$. Autrement dit le séquent $\vdash_\textbf{S}(\psi_1\land\psi_2\land\ldots\land\psi_n)\rightarrow\phi$ est vérifiée pour un nombre fini de formules bien choisies de $\Gamma$.

</div>

<br>

{{%notice info%}}
Attention, ici les hypothèses n'ont pas le même sens qu'en logique des propositions. En effet, pour prouver le séquent $\phi\vdash_\textbf{S}\psi$, on ne peut pas ajouter $\phi$ aux axiomes et tenter d'atteindre $\psi$ à partir des règles (*modus ponens*, substitution uniforme et nécessitation). Il faut ici réussir à prouver la formule $\phi\rightarrow\psi$ sur la base des seuls axiomes.
<br><br>
Si on pouvait faire comme en logique des propositions, prouver $\phi\vdash_\textbf{S}\Box\phi$ deviendrait évident&nbsp;: on place $\phi$ dans les axiomes et on applique la règle de nécessitation. Mais non, il faut pouvoir prouver $\vdash_\textbf{S}\phi\rightarrow\Box\phi$ et comme on va le voir, dans le système $\textbf{K}$, la formule $P\rightarrow\Box P$ n'est pas prouvable ($P\nvdash_\textbf{K}\Box P$).
{{%/notice%}}

<br>

### Le système K

<br>

<div id="def">

Le système $\textbf{K}$ est le plus petit système formel qui contient&nbsp;:
<ul>
<li>chaque tautologie du calcul des propositions</li>
<li>$\text{(K)}$&nbsp;: $\Box(P\rightarrow Q)\rightarrow (\Box P\rightarrow \Box Q)$</li>
<li>$\text{(dual)}$&nbsp;: $\Diamond P\leftrightarrow\neg\Box\neg P$</li>
</ul>
</div>

<br>

<div id="theo">

Le système $\textbf{K}$ est **minimal** en ce sens qu'il est validé dans tout modèle.

</div>

<br>

<div id="preuve">

Pour tout modèle $\mathcal{M}=\langle\mathcal{S},\mathcal{V}\rangle$ et tout nœud $a$, si $a\Vdash\Box(P\rightarrow Q)$ et $a\Vdash\Box P$, cela signifie que pour tout nœud $b$ tel que $a\longrightarrow b$, $b\Vdash P\rightarrow Q$ et $b\Vdash P$, par conséquent $b\Vdash Q$ et donc $a\Vdash \Box Q$.<br> Cela montre que l'axiome $\text{(K)}$ est valide dans tous les systèmes de transition.

</div>

<br>

<div id="preuve">

Pour montrer que $P\rightarrow\Box P$ n'est pas prouvable dans $\textbf{K}$, il suffit donc de présenter un modèle (et le système $\textbf{K}$ autorise tous les systèmes de transition) où l'implication est fausse pour au moins un nœud. Or on a déjà vu un tel modèle&nbsp;:
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/preuvecsqsem.png">
</div>
Dans ce modèle, on a $a\Vdash P$ mais aussi $a\nVdash \Box P$ et par conséquent $a\nVdash P\rightarrow\Box P$.
</div>

<br>

Cet axiome $\text{(K)}$ (K en l'honneur de Kripke) est appelé **axiome de distribution** car il permet de distribuer l'opérateur modal $\Box$ à l'intérieur de l'implication. On l'appelle aussi parfois axiome d'omniscience logique car il stipule que si un agent sait que $P$ implique $Q$, alors s’il sait également que $P$ il doit savoir que $Q$. En d’autres termes, l'agent doit connaître toutes les conséquences logiques de ce qu'il sait déjà. 


L'axiome $\text{(dual)}$ permet, lui, de passer d'un opérateur modal à l'autre et est aussi valide dans tout sytème de transition (être sûr de la présence d'un truc revient à ne pas être sûr de son absence, ou pour rester sur la structure du système de transition, dire qu'il existe un chemin vers $P$ revient à ne pas dire que tous les chemins vont vers $\neg P$).<br>
La relation sœur permettant de passer de l'opérateur boite à l'opérateur diamant $\Box P \leftrightarrow \neg\Diamond\neg P$ (si tous les chemins mènent à $P$, il n'existe pas de chemin menant à $\neg P$) est elle aussi vraie partout.<br>
Ces deux relations soulignent bien la nature duale des opérateurs $\Diamond$ et $\Box$.


Mais ce système formel n'est pas encore suffisamment riche pour contenir toutes les formules valides dans tous les modèles quels qu'ils soient. Pour cela, il faudrait également considérer toutes les substitutions uniformes possibles (entre autre dans la formule  $\text{(K)}$). On passe alors aux **logiques modales**.

<br>

### Logique modale normale

<br>

<div id="def">

Une <b>logique modale normale</b> $\mathbb{L}$ est un ensemble de formules qui contient le système formel $\textbf{K}$ et qui est clos par&nbsp;:
<ul>
<li><i>modus ponens</i>
$$
\begin{prooftree}
\AxiomC{$\phi$}
\AxiomC{$\phi\rightarrow\psi$}
\RightLabel{$\scriptsize\;mod.p.$}
\BinaryInfC{$\psi$}
\end{prooftree}
$$
</li>
<li>substitution uniforme
$$
\begin{prooftree}
\AxiomC{$\phi$}
\RightLabel{$\scriptsize\;sub.$}
\UnaryInfC{$\phi[\theta/P]$}
\end{prooftree}
$$
</li>
<li>nécessitation
$$
\begin{prooftree}
\AxiomC{$\phi$}
\RightLabel{$\scriptsize\;nec.$}
\UnaryInfC{$\Box\phi$}
\end{prooftree}
$$
</li>
</ul>

</div>

<br>

Toute logique modale normale contient chaque formule $\phi$ prouvable dans le système formel $\textbf{K}$ (si $\vdash_\textbf{K}\phi$ alors $\phi$ fait partie de toute logique modale normale).

La plus petite logique modale normale est construite sur la base du système formel $\textbf{K}$. On la note $\mathbb{L}\_\textbf{K}$. Le lien entre la logique normale $\mathbb{L}\_\textbf{K}$ et le système formel $\textbf{K}$ est le suivant&nbsp;: $\phi \in \mathbb{L}\_\textbf{K}$ ssi $\vdash_\textbf{K}\phi$.

<br>

### Quelques axiomes usuels

<br>

<div id="def">

$\text{(K) :}$ $\Box(P\rightarrow Q)\rightarrow(\Box P\rightarrow \Box Q)$

</div>

On l'a vu, l'axiome $\text{(K)}$ est à la base des logiques modales normales.

<br>

<div id="def">

$\text{(D) :}$ $\Box P\rightarrow \Diamond P$

</div>

La formule $\text{(D)}$ dit que si quelque chose est nécessaire, alors elle doit être possible. On peut aussi l'interpréter différemment dans d'autres types de logiques que nous allons entrevoir ensuite&nbsp;: en logique déontique, la formule dit que quelque chose d'obligatoire doit être permis&nbsp;; en logique épistémique, elle dit que si je sais $P$, alors il est faux que je sache $\neg P$&nbsp;; et en logique doxastique, que si je crois que $P$, alors il est faux que je crois que $\neg P$.<br>
$\text{(D)}$ est parfois appelé axiome de consistance.

[Comme on l'a vu plus tôt](../logique4/#nbd), un système de transition qui valide $\text{(D)}$ n'admet **pas d'impasse**. Autrement dit, les arcs doivent être **non bornés à droite**.

<br>

<div id="def">

$\text{(T) :}$ $\Box P\rightarrow P$

</div>

La formule $\text{(T)}$ dit que si quelque chose est nécessaire, alors elle est. On l'appelle parfois axiome de factivité.<br>
En logique déontique&nbsp;: ce qui est obligatoire est.<br>
En logique épistémique&nbsp;: si je sais $P$, alors $P$ est avéré.<br>
En logique doxastique&nbsp;: si je crois que $P$, alors $P$ est également avéré.

Et [nous avons vu](../logique4/#refl) qu'un système de transition valide $\text{(T)}$ si et seulement si ce système est **réflexif**. $\text{(T)}$ est donc aussi l'axiome de réflexivité.

<br>

<div id="def">

$\text{(B) :}$ $P\rightarrow \Box\Diamond P$

</div>

La formule $\text{(B)}$ dit que si quelque chose est vraie, alors il est nécessaire qu'elle soit possible.<br>
En logique déontique&nbsp;: ce qui est, est obligatoirement permis.<br>
En logique épistémique&nbsp;: si je $P$ est avéré, alors je sais que je ne sais pas $\neg P$.<br>
En logique doxastique&nbsp;: si $P$ est avéré, alors je crois que je ne crois pas $\neg P$.

Et [nous avons vu](../logique4/#syme) qu'un système de transition valide $\text{(B)}$ si et seulement si ce système est **symétrique**. $\text{(B)}$ est donc aussi l'axiome de symétrie.

<br>

<div id="def">

$\text{(4) :}$ $\Box P\rightarrow \Box\Box P$

</div>

La formule $\text{(4)}$ dit que si quelque chose est nécessaire, alors elle est nécessairement nécessaire.<br>
En logique déontique&nbsp;: si quelque chose est obligatoire, c'est obligatoire qu'elle le soit.<br>
En logique épistémique&nbsp;: si je sais $P$, alors je sais que je sais $P$. Et transitivement, on sait que l'on sait que l'on sait... Autrement dit, avec la formule (4) nous décrivons des agents parfaitement rationnel.<br>
On appelle $\text{(4)}$ l'axiome d'introspection positive dans le cadre de la logique épistémique.

Et [nous avons vu](../logique4/#trans) qu'un système de transition valide $\text{(4)}$ si et seulement si ce système est **transitif**. $\text{(4)}$ est donc aussi l'axiome de transitivité.

<br>

<div id="def">

$\text{(5) :}$ $\Diamond P\rightarrow \Box\Diamond P$

</div>

La formule $\text{(5)}$ dit que s'il n'est pas nécessaire que quelque chose ne soit pas, alors elle est nécessaire.<br>
En logique déontique&nbsp;: si quelque chose est permise, c'est obligatoire qu'elle soit permise.<br>
En logique épistémique&nbsp;: si je ne sais pas quelque chose, alors je sais que je ne le sais pas. L'interprétation épistémique décrit un agent parfaitement conscient de ce qu'il ne sait pas.<br>
En logique doxastique&nbsp;: si je ne crois pas quelsue chose, alors je crois que je ne le crois pas. L'interprétation doxastique décrit un agent parfaitement conscient de ce qu'il ne croit pas.<br>
On appelle $\text{(5)}$ l'axiome d'introspection négative dans le cadre de la logique épistémique.

Et [nous avons vu](../logique4/#eucl) qu'un système de transition valide $\text{(5)}$ si et seulement si ce système est **euclidien**. $\text{(5)}$ est donc aussi l'axiome d'euclidité.


<br>

En prenant ensemble les formules $\text{(5)}$ et $\text{(T)}$, on regarde des systèmes de transition à la fois **euclidiens** et **réflexifs**. Or la conjonction de ces deux propriétés est équivalentes à la conjonction des trois propriétés d'une relation d'équivalence&nbsp;!

<div id="theo">

Un système de transition est à la fois **euclidien** et **réflexif** si et seulement si il est à la fois **réflexif**, **symétrique** et **transitif**.

</div>

Autrement dit, un graphe euclidien et réflexif est en fait ni plus ni moins qu'un graphe dans lequel la relation d'accessibilité est une **relation d'équivalence** (relation définie par les trois propriétés réflexivité, symétrie et transitivité).

<div id="preuve">
<ul>
<li>$\Rightarrow$&nbsp;:<br>
<ul>
<li>réflexif&nbsp;: c'est immédiat</li>
<li>symétrique&nbsp;: si on a un arc $a\longrightarrow b$, alors par réflexivité, on a aussi $a\longrightarrow a$, et le caractère euclidien impose donc $b\longrightarrow a$.</li>
<li>transitif&nbsp;: supposons qu'on ait deux arcs $a\longrightarrow b$ et $b\longrightarrow c$. Comme on a montré la symétrie du graphe, on a aussi un arc $b\longrightarrow a$ et le caractère euclidien impose donc un arc $a\longrightarrow c$.
</li>
</ul>
</li>
<li>$\Leftarrow$&nbsp;:<br>
<ul>
<li>réflexif&nbsp;: c'est immédiat</li>
<li>euclidien&nbsp;: supposons qu'on ait deux arcs $a\longrightarrow b$ et $a\longrightarrow c$. La symétrie donne un arc $b\longrightarrow a$ et la transitivité impose alors un arc $b\longrightarrow c$.</li>
</ul>
</li>
</ul>
</div>

<br><br>

## Quelques systèmes formels et logiques usuels

<br>

Par la suite, nous confonderons un système formel et la logique qu'il induit par clôture. Les systèmes formels qu'on va introduire sont tous des extensions du système $\textbf{K}$.

<div id="def">

<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ul>
<li>$\textbf{K}$</li>
<li>$\textbf{KD}$&nbsp;: $\textbf{K}\cup\set{\text{(D)}}$</li>
<li>$\textbf{KB}$&nbsp;: $\textbf{K}\cup\set{\text{(B)}}$</li>
<li>$\textbf{KT}$&nbsp;: $\textbf{K}\cup\set{\text{(T)}}$</li>
<li>$\textbf{K4}$&nbsp;: $\textbf{K}\cup\set{\text{(4)}}$</li>
<li>$\textbf{KB4}$&nbsp;: $\textbf{K}\cup\set{\text{(B),(4)}}$</li>
<li>$\textbf{KD4}$&nbsp;: $\textbf{K}\cup\set{\text{(D),(4)}}$</li>
<li>$\textbf{KDB}$&nbsp;: $\textbf{K}\cup\set{\text{(D),(B)}}$</li>
<li>$\textbf{KTB}$&nbsp;: $\textbf{K}\cup\set{\text{(T),(B)}}$</li>
<li>$\textbf{S4} = \textbf{KT4}$&nbsp;: $\textbf{K}\cup\set{\text{(T),(4)}}$</li>
<li>$\textbf{S5} = \textbf{KT5}$&nbsp;: $\textbf{K}\cup\set{\text{(T),(5)}}$</li>
</ul>
</div>
</div>

<br>

Convainquons-nous dans un premier temps que ces axiomes apportent bien quelque chose de plus en montrant par exemple que la logique $\textbf{KB}$ ne permet pas de prouver l'axiome $\text{(4)}$.

<div id="preuve">

Comme $\text{(B)}$ est vraie dans tout système de transition symétrique, il suffit de trouver un modèle symétrique où au moins un nœud ne satisfait pas $\text{(4)}=\Box P\rightarrow\Box\Box P$ pour montrer que $\textbf{K4}\not\subseteq \textbf{KB}$.
<div style="position:relative;width:350px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvekbpask4.png">
</div>
Comme $P$ est satisfait dans tout les successeurs de $a$, $a\Vdash\Box P$. Mais pour avoir $a\Vdash\Box\Box P$, il faudrait que tous les successeurs de $a$ satisfassent $\Box P$, or ce n'est pas le cas de $b$ (qui a pour successeur $a$ lui-même par symétrie et $a\nVdash P$). D'où $a\nVdash \Box\Box P$.
</div>

<br>

De même, montrons que $\textbf{KTB}$ ne peut prouver ni $\text{(4)}$ ni $\text{(5)}$.

<div id="preuve">

$\text{(T)}$ et $\text{(B)}$ seront vraies ensemble dans tout système de transition à la fois réflexif et symétrique. Exhibons un tel modèle où au moins un nœud ne satisfait ni $\text{(4)}=\Box P\rightarrow\Box\Box P$ ni $\text{(5)}=\Diamond P\rightarrow\Box\Diamond P$.
<div style="position:relative;width:600px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvektbpas45.png">
</div>
On constate que dans ce modèle réflexif et symétrique, $a$ ne satisfait pas $\text{(4)}$ et $b$ ne satisfait pas une instance de $\text{(5)}$ où $P=\neg Q$.
</div>

<br>

Mais on va préférer dans la suite mettre au jour les inclusions inverses (qui contient qui) grâce à la notion de **réduction**.

<div id="def">

Soient $\textbf{S}$ et $\textbf{S'}$ deux systèmes formels et $\phi$ une formule quelconque,<br>
<p style="text-align:center;">
$\textbf{S}≤\textbf{S'}$ si et seulement si $\vdash_\textbf{S}\phi\rightarrow \,\vdash_\textbf{S'}\phi$
</p>
</div>

Cette relation est réflexive ($\textbf{S}≤\textbf{S}$) et transitive (si $\textbf{S}≤\textbf{S'}$ et $\textbf{S'}≤\textbf{S''}$ alors $\textbf{S}≤\textbf{S''}$).

$\textbf{S}≤\textbf{S'}$ se lit $\textbf{S}$ **se réduit à** $\textbf{S'}$. Tout ce qui est prouvé à l'aide de $\textbf{S}$ peut également l'être à l'aide de $\textbf{S'}$.

Si $\textbf{S}$ se réduit à $\textbf{S'}$, cela signifie que $\textbf{S'}$ permet de prouver au moins autant de formules (appelées **théorèmes**) que $\textbf{S}$ et par conséquent, que la classe des systèmes de transition dans lesquels tous les théorèmes de $\textbf{S'}$ sont valides est incluse dans celle des systèmes de transition qui tous valident les théorèmes de $\textbf{S}$ (c'est plus dur de raconter plus de choses, ça restreint l'ensemble des modèles possibles).<br>

Autrement dit, 

<div id="theo">

si $\mathscr{C}\_\textbf{S}$ et $\mathscr{C}_\textbf{S'}$ désignent respectivement la classe de tous les systèmes de transition qui valident $\textbf{S}$ et $\textbf{S'}$&nbsp;:<br>
<p style="text-align:center;">
$\textbf{S}≤\textbf{S'}$ si et seulement si $\mathscr{C}_\textbf{S'}\subseteq\mathscr{C}_\textbf{S}$.
</p>
</div>

<br>

Par contre, les logiques modales normales étant des ensembles de formules satisfaites, pour elles l'inclusion est dans l'autre sens&nbsp;:

<div id="theo">

Lorsque $\textbf{S}$ et $\textbf{S'}$ contiennent tous les deux le système formel $\textbf{K}$, les logiques modales normales qu'ils engendrent ($\mathbb{L}\_\textbf{S}$ et $\mathbb{L}\_\textbf{S'}$) vérifient la relation suivante&nbsp;:<br>
<p style="text-align:center;">
$\textbf{S}≤\textbf{S'}$ si et seulement si $\mathbb{L}_\textbf{S}\subseteq\mathbb{L}_\textbf{S'}$.
</p>
</div>

On obtient alors immédiatement les réductions suivantes&nbsp;:

<div id="theo">
<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ul>
<li>$\textbf{K}≤\textbf{K4}$</li>
<li>$\textbf{K}≤\textbf{KB}$</li>
<li>$\textbf{K}≤\textbf{KD}$</li>
<li>$\textbf{K4}≤\textbf{KB4}$</li>
<li>$\textbf{K4}≤\textbf{KD4}$</li>
<li>$\textbf{KB}≤\textbf{KB4}$</li>
<li>$\textbf{KB}≤\textbf{KDB}$</li>
<li>$\textbf{KD}≤\textbf{KDB}$</li>
<li>$\textbf{KD}≤\textbf{KD4}$</li>
<li>$\textbf{KT}≤\textbf{KTB}$</li>
<li>$\textbf{KT}≤\textbf{KT4}$</li>
</ul>
</div>
</div>

Montrons maintenant que&nbsp;:

<div id="theo">
<p style="text-align:center">
$\textbf{KD}≤\textbf{KT}$
</p>
</div>

<br>

<div id="preuve">

Il suffit de montrer que la formule $\text{(D)}$ peut être prouvée grâce au système $\textbf{KT}$, c'est-à-dire&nbsp;: $\vdash_\textbf{KT} \Box P\rightarrow\Diamond P$.
<div style="position:relative;width:1100px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvekdkt.png">
</div>
</div>

On en déduit immédiatement&nbsp;:

<div id="theo">
<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ul>
<li>$\textbf{KDB}≤\textbf{KTB}$</li>
<li>$\textbf{KD4}≤\textbf{ KT4=S4}$</li>
</ul>
</div>
</div>

<br>

On peut aussi montrer que&nbsp;:

<div id="theo">
<p style="text-align:center">
$\textbf{KTB}≤\textbf{S5}$
</p>
</div>

<br>

<div id="preuve">

Il suffit de montrer que la formule $\text{(B)}$ peut être prouvée grâce au système $\textbf{KT5}$, c'est-à-dire&nbsp;: $\vdash_\textbf{S5} P\rightarrow\Box\Diamond P$.

Montrons d'abord que $\vdash_\textbf{KT}P\rightarrow\Diamond P$, ce qui montre également que $\vdash_\textbf{KT5}P\rightarrow\Diamond P$.
<div style="position:relative;width:550px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvektbs51.png">
</div>
Puis utilisons ce résultat pour montrer que $\vdash_\textbf{S5}P\rightarrow\Box\Diamond P$
<div style="position:relative;width:800px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuvektbs52.png">
</div>
</div>

<br>

<div id="theo">
<p style="text-align:center">
$\textbf{S4}≤\textbf{S5}$
</p>
</div>

<br>

<div id="preuve">

Il suffit de montrer que la formule $\text{(4)}$ peut être prouvée grâce au système $\textbf{KT5}$, c'est-à-dire&nbsp;: $\vdash_\textbf{S5} \Box P\rightarrow\Box\Box P$.<br>

On commence par montrer $\vdash_\textbf{S5} \Box P\rightarrow\Box\Diamond\Box P$ en ajoutant juste une substitution au théorème précédant&nbsp;:
<div id="grosseformule">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptsize\;th.$}
\UnaryInfC{$ P\rightarrow\Box\Diamond P$}
\RightLabel{$\scriptsize\;sub.$}
\UnaryInfC{$ \Box P \rightarrow \Box\Diamond \Box P$}
\end{prooftree}
$$
</div>
On montre ensuite $\vdash_\textbf{S5} \Diamond\Box P\rightarrow \Box P$
<div style="position:relative;width:650px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuves4s51.png">
</div>
Puis on montre $\vdash_\textbf{S5} \Box\Diamond\Box P\rightarrow \Box\Box P$
<div style="position:relative;width:620px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuves4s52.png">
</div>
Pour enfin pouvoir conclure&nbsp;:
<div style="position:relative;width:950px;max-width:100%;margin-left:auto;margin-right:auto;">
<img src="/preuves4s53.png">
</div>
</div>

<br>

<div id="theo">
<p style="text-align:center">
$\textbf{KB4}≤\textbf{S5}$
</p>
</div>

<br>

<div id="preuve">

Il faut montrer à la fois que&nbsp;:
<ul>
<li>la formule $\text{(4)}$ peut être prouvée dans le système $\textbf{S5}$ et on l'a fait dans la démonstration de la réduction de $\textbf{S4}$ à $\textbf{S5}$,</li>
<li>la formule $\text{(B)}$ peut être prouvée dans le système $\textbf{S5}$ et on l'a fait dans la démonstration de la réduction de $\textbf{KTB}$ à $\textbf{S5}$,</li>
</ul>
</div>

<br>

Représentons tout ça graphiquement en utilisant le code suivant&nbsp;: une flèche allant de $\textbf{S}$ à $\textbf{S'}$ signifie que la relation $\textbf{S}≤\textbf{S'}$ est avérée ($\textbf{S}$ se réduit à $\textbf{S'}$).

![](/compsystformels.png?width=600px)

Et comme on l'a vu, la réduction d'un système formel à un autre implique l'inclusion inverse entre les classes de tous les systèmes de transition qui valident ces systèmes formels.<br>
Dans le graphique suivant, une flèche allant de $\mathscr{C}$ à $\mathscr{C'}$ désigne donc l'inclusion inverse $\mathscr{C}\supseteq\mathscr{C'}$.

![](/compsysttrans.png?width=600px)

Le projet est maintenant de préciser le rapport entre axiomatique et sémantique avec l'espoir que l'ensemble des formules valides sur les structures d'un certain type soit identique à l'ensemble des axiomes et théorèmes d'un certain système (ce qu'on a appelé une logique modale), car ainsi la validité formera une interprétation du système. Mais pour s'assurer de cette adéquation entre sémantique et axiomatique, il faut d'une part obtenir la **correction** (ou solidité, soundness en anglais) du système (toutes les formules prouvables sont vraies), et sa réciproque, la **complétude** (toutes les formules vraies sont prouvables).<br>
Dit autrement, on doit pouvoir déduire du système formel **tout le vrai** (**complétude**) et **rien que le vrai** (**correction**).

<br>

On va d'abord chercher à faire correspondre une logique modale normale à chaque classe de systèmes de transitions.

<div id="def">

Soit $\mathscr{C}$ une classe de systèmes de transition et $\mathbb{L}$ une logique modale normale, $\mathbb{L}$ est <b>correcte</b> par rapport à la classe $\mathscr{C}$ (noté $\mathscr{C}$<b>-correcte</b>) si pour toute formule $\phi$ et pour tout système de transition $\mathcal{S}$ de la classe $\mathscr{C}$, si $\vdash_\mathbb{L}\phi$ alors $\mathcal{S}\Vdash^{\forall a,\forall \mathcal{V}}\phi$.<br>
Ce qu'on peut aussi écrire&nbsp;:<br>
$$\text{si } \vdash_\mathbb{L}\phi \text{ alors }\models_{\mathscr{C}}\phi$$

</div>

À chacune des onze classes, on peut faire correspondre une logique modale normale qui se trouve être correcte pour cette classe.

<div id="theo">
<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ul>
<li>si $\vdash_\textbf{K}\phi$ alors $\models_{\mathscr{C}}\phi$</li>
<li>si $\vdash_\textbf{K4}\phi$ alors $\models_{\mathscr{C}_{tr.}}\phi$</li>
<li>si $\vdash_\textbf{KD}\phi$ alors $\models_{\mathscr{C}_{n.b.d.}}\phi$</li>
<li>si $\vdash_\textbf{KD4}\phi$ alors $\models_{\mathscr{C}_{tr.,n.b.d.}}\phi$</li>
<li>si $\vdash_\textbf{KT}\phi$ alors $\models_{\mathscr{C}_{ref.}}\phi$</li>
<li>si $\vdash_\textbf{S4}\phi$ alors $\models_{\mathscr{C}_{ref.,tr.}}\phi$</li>
<li>si $\vdash_\textbf{KB}\phi$ alors $\models_{\mathscr{C}_{sym.}}\phi$</li>
<li>si $\vdash_\textbf{KB4}\phi$ alors $\models_{\mathscr{C}_{sym.,tr.}}\phi$</li>
<li>si $\vdash_\textbf{KDB}\phi$ alors $\models_{\mathscr{C}_{sym.,n.b.d.}}\phi$</li>
<li>si $\vdash_\textbf{KTB}\phi$ alors $\models_{\mathscr{C}_{ref.,sym.}}\phi$</li>
<li>si $\vdash_\textbf{S5}\phi$ alors $\models_{\mathscr{C}_{ref.,sym.,tr.}}\phi$</li>
</ul>
</div>
</div>

<br>

<div id="preuve">

On a déjà en fait déjà tout démontré.<br>
En effet, on a montré que les axiomes de la logique normale minimale (tautologies du calcul des propositions, $\text{(K)}$ et $\text{(dual)}$) sont satisfaites en tout nœud et pour toute valuation de tous les systèmes de transitions. Et on a montré que les trois opérations utilisés pour les preuves (la nécéssitation, la substitution uniforme et le <i>modus ponens</i>) préservent la validité. Donc une formule prouvable dans $\textbf{K}$ est valide dans tout système de transition ( $\textbf{K}$ est $\mathscr{C}$-correcte).

Ensuite, on a montré que chacun des axiomes modaux supplémentaires ajoutés à $\textbf{K}$ pour obtenir les autres logiques normales ont une validité limitée à une classe spécifique de systèmes de transition.

<ul>
<li>$\text{(T)}$ est valide dans tout système de transition réflexif.</li>
<li>$\text{(B)}$ est valide dans tout système de transition symétrique.</li>
<li>$\text{(4)}$ est valide dans tout système de transition transitif.</li>
<li>$\text{(D)}$ est valide dans tout système de transition non borné à droite.</li>
<li>$\text{(4)}$ est valide dans tout système de transition euclidien.</li>
</ul>

Et on a montré qu'un graphe est à la fois réflexif et euclidien si et seulement si il est réflexif, symétrique et transitif.

</div>

On représente graphiquement par une flèche "$\textbf{X}\longrightarrow\mathscr{C}\_x$" la relation de correction&nbsp;: "si $\vdash_\textbf{X}\phi$, alors $\models_{\mathscr{C}_x}\phi$".

![](/compsolide.png?width=1200px)

On va essayer maintenant d'associer les classe aux logiques, la sémantique à la syntaxe.


<div id="def">

Soit $\mathscr{C}$ une classe de systèmes de transition et $\mathbb{L}$ une logique modale normale.
<ul>
<li>$\mathbb{L}$ est faiblement complète par rapport à la classe $\mathscr{C}$ (noté $\mathscr{C}$<b>-faiblement complète</b>) si pour toute formule $\phi$&nbsp;:<br>
$$\text{si }\models_\mathscr{C}\phi \text{ alors } \vdash_\mathbb{L}\phi$$</li>
<li>$\mathbb{L}$ est fortement complète par rapport à la classe $\mathscr{C}$ (noté $\mathscr{C}$<b>-fortement complète</b>) si pour toute formule $\phi$ et tout ensemble de formules $\Gamma$&nbsp;:<br>
$$\text{si } \Gamma \models_\mathscr{C}\phi \text{ alors } \Gamma \vdash_\mathbb{L}\phi$$</li>
</ul>

</div>

<br>

On a alors le **théorème de forte complétude** suivant&nbsp;:

<div id="theo">
<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ol>
<li>si $\Gamma\models_{\mathscr{C}}\phi$ alors $\Gamma\vdash_\textbf{K}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{tr.}}\phi$ alors $\Gamma\vdash_\textbf{K4}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{n.b.d.}}\phi$ alors $\Gamma\vdash_\textbf{KD}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{tr.,n.b.d.}}\phi$ alors $\Gamma\vdash_\textbf{KD4}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{ref.}}\phi$ alors $\Gamma\vdash_\textbf{KT}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{ref.,tr.}}\phi$ alors $\Gamma\vdash_\textbf{S4}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{sym.}}\phi$ alors $\Gamma\vdash_\textbf{KB}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{sym.,tr.}}\phi$ alors $\Gamma\vdash_\textbf{KB4}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{sym.,n.b.d.}}\phi$ alors $\Gamma\vdash_\textbf{KDB}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{ref.,sym.}}\phi$ alors $\Gamma\vdash_\textbf{KTB}\phi$</li>
<li>si $\Gamma\models_{\mathscr{C}_{ref.,sym.,tr.}}\phi$ alors $\Gamma\vdash_\textbf{S5}\phi$</li>
</ol>
</div>
</div>


<br>

Pour le démontrer on va avoir besoin de nouvelles définitions et de plusieurs lemmes.

<div id="def">

Soient $\textbf{S}$ un système formel et $\Gamma$ un ensemble de formules,<br>
<p style="text-align:center;">
$\Gamma$ est $\textbf{S}$<b>-consistant</b> si et seulement si $\Gamma\nvdash_\textbf{S}\bot$.
</p>
Dans le cas contraire, $\Gamma$ est dit $\textbf{S}$-inconsistant.

</div>

<br>

<div id="theo">
<b>Lemme d'existence</b>

Soient $\mathscr{C}$ une classe de système de transition et $\mathbb{L}$ une logique modale normale,<br>
<p style="text-align:center;">
$\mathbb{L}$ est $\mathscr{C}$-(fortement) complète si et seulement si pour tout $\Gamma\subseteq\mathbb{L}$ qui est $\mathbb{L}$-consistant, il existe $\mathcal{S}\in\mathscr{C},\mathcal{V}$ et $a$ tels que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Gamma$.
</p>

</div>

<br>

<div id="preuve">

<ul>
<li>$\Rightarrow$&nbsp;:<br>
puisque $\mathbb{L}$ est $\mathscr{C}$-complète, un ensemble de formules quelconque $\mathbb{L}$-consistant $\Gamma\subseteq\mathbb{L}$ est nécessairement satisfaisable pour un système de transition de la classe $\mathscr{C}$. En effet, si ce n'était pas le cas, l'expression $\Gamma\models_\mathscr{C}\bot$ serait vraie, mais alors nous pourrions en déduire $\Gamma\vdash_\mathbb{L}\bot$ en utilisant la $\mathscr{C}$-complétude de $\mathbb{L}$.
</li>
<li>$\Leftarrow$&nbsp;:<br>
montrons la contraposée. On suppose donc que $\mathbb{L}$ n'est pas $\mathscr{C}$-complète. Soit donc $\Gamma$ un ensemble de formules et $\phi$ une formule tels que $\Gamma\models_\mathscr{C}\phi$ mais $\Gamma\nvdash_\mathbb{L}\phi$. Il apparaît dès lors que $\Gamma\cup\set{\neg\phi}\nvdash_\mathbb{L}\bot$ est vérifiée, car $\Gamma\cup\set{\neg\phi}\vdash_\mathbb{L}\bot$ entraînerait $\Gamma\vdash_\mathbb{L}\neg\phi\rightarrow\bot$ puis, en passant par la contraposée, $\Gamma\vdash_\mathbb{L}\phi$. Par conséquent $\Gamma\cup\set{\neg\phi}$ est $\mathbb{L}$-consistant et pourtant, pour tout système de transition $\mathcal{S}\in\mathscr{C}$, $\mathcal{V}$ et $a$, $\langle\mathcal{S},\mathcal{V},a\rangle\nVdash\Gamma\cup\set{\neg\phi}$.
</li>
</ul>

</div>


<br>

L'idée pour démontrer la complétude est de chercher un modèle $\langle\mathcal{S},\mathcal{V}\rangle$ dont le système de transition fait partie de la classe considérée et un nœud $a$ tels que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Gamma$ où $\Gamma$ est un ensemble de formules $\mathbb{L}$-consistant.<br>
On va mettre au point un tel modèle en modelant les nœuds de son système de distribution directement à partir d'ensembles de formules&nbsp;! La sémantique détourne ainsi la syntaxe à son profit en donnant vie à une sorte de Golem syntaxique.

<br>

<div id="def">

Soient $\mathbb{L}$ une logique modale normale et $\Gamma$ un ensemble de formules,<br>
<p style="text-align:center;">
$\Gamma$ est <b>maximal $\mathbb{L}$-consistant</b> (MC) si et seulement si $\Gamma\nvdash_\mathbb{L}\bot$ et pour tout ensemble $\Gamma \subsetneq \Gamma'$, $\Gamma'\vdash_\mathbb{L}\bot$.
</p>

</div>

Remarques&nbsp;: 

<p style="margin-bottom:-1.1em;">si $\Gamma$ est maximal $\mathbb{L}$-consistant, alors&nbsp;:</p>
<ul>
<li>$\mathbb{L}\subseteq\Gamma$</li>
<li>$\Gamma$ est clos par <i>modus ponens</i></li>
<li>pour toute formule $\phi$, $\phi\in\Gamma$ ou $\neg\phi\in\Gamma$</li>
<li>pour toutes formules $\phi$ et $\psi$, $\phi\lor\psi\in\Gamma$ si et seulement si $\phi\in\Gamma$ ou $\psi\in\Gamma$</li>
</ul>


<div id="theo">
<b>Lemme de Lindenbaum</b>
<p style="text-align:center;">
Si $\Gamma$ est $\mathbb{L}$-consistant, alors il existe $\Gamma_{max}$ maximal $\mathbb{L}$-consistant tel que $\Gamma\subseteq\Gamma_{max}$.
</p>
</div>

<br>

<div id="preuve">

Soit $(\phi_n)_{n\in\mathbb{N}}$ une énumération de toutes les formules. On définit&nbsp;:
<ul>
<li>$\Gamma_0=\Gamma$</li>
<li>
$\Gamma_{n+1}=\begin{cases}\Gamma_n\cup\set{\phi_n} \text{ si } \Gamma_n\cup\set{\phi_n}\nvdash_\mathbb{L}\bot\\ \Gamma_n\cup\set{\neg\phi_n} \text{ sinon}\end{cases}$</li>
<li>$\displaystyle \Gamma_{max}=\bigcup_{n\in\mathbb{N}}\Gamma_n$
</ul>
$\Gamma_{max}$ est $\mathbb{L}$-consistant car sinon il existerait un plus petit entier $n$ tel que $\Gamma_{n+1}\vdash_\mathbb{L}\bot$. Nous aurions alors $\Gamma_n\cup\set{\phi_n}\vdash_\mathbb{L}\bot$ et $\Gamma_n\cup\set{\neg\phi_n}\vdash_\mathbb{L}\bot$ par construction de $\Gamma_{max}$. En utilisant le raisonnement par l'absurde, nous obtenons à la fois $\Gamma_n\vdash_\mathbb{L}\phi_n$ et $\Gamma_n\vdash_\mathbb{L}\neg\phi_n$, ce qui entraîne $\Gamma_n\vdash_\mathbb{L}\bot$, contredisant la fait que par minimalité de l'entier $n$, $\Gamma_n$ est $\mathbb{L}$-consistant.

$\Gamma_{max}$ est maximal car sinon il existerait $\Gamma'$ $\mathbb{L}$-consistant tel que $\Gamma_{max}\subsetneq\Gamma'$. Dans ce cas, une formule quelconque $\psi$ telle que $\psi\in\Gamma'\setminus\Gamma_{max}$ apparaîtrait dans l'énumération $(\phi_n)\_{n\in\mathbb{N}}$ de toutes les formules et il existerait ainsi un entier $n$ tel que $\psi=\phi_n$. Par construction de $\Gamma_{max}$, comme $\phi_n\not\in\Gamma_{max}$, $\Gamma_n\cup\set{\phi_n}\vdash_\mathbb{L}\bot$ est vérifiée. Donc $\Gamma_{max}\cup\set{\phi_n}\vdash_\mathbb{L}\bot$ ce qui entraîne $\Gamma'\vdash_\mathbb{L}\bot$, contredisant la $\mathbb{L}$-consistance de $\Gamma'$.
</div>

<br>

<div id="def">
<p style="margin-bottom:-1.1em;">
Soit $\mathbb{L}$ une logique modale normale, le <b>modèle canonique</b> $\mathcal{M}_\mathbb{L}$ est défini par $\mathcal{M}_\mathbb{L}=\langle N_\mathbb{L},A_\mathbb{L},\mathcal{V}_\mathbb{L}\rangle$ avec&nbsp;:
</p>
<div style="pos:relative;margin-right:auto;margin-left:auto;width:fit-content;">
<ul>
<li>$N_\mathbb{L}=\set{\Gamma|\Gamma\text{ maximal }\mathbb{L}\text{-consistant}}$</li>
<li>$A_\mathbb{L}$ défini par $\Gamma\longrightarrow\Gamma'$ si et seulement si pour toute formule $\phi$, si $\phi\in\Gamma'$ alors $\Diamond\phi\in\Gamma$ (c.-à-d. $\Gamma\supseteq\set{\Diamond\phi : \phi\in\Gamma'}$)</li>
<li>$\mathcal{V}_\mathbb{L}$ est défini par $\mathcal{V}_\mathbb{L}(P)=\set{\Gamma\in N_\mathbb{L}|P\in\Gamma}$ (c.-à-d. $\Gamma\Vdash P$ si et seulement si $P\in\Gamma$)</li>
</ul>
</div>
</div>

<br>

<div id="theo">
<b>Lemme ($\longrightarrow$ et $\Box$)</b>

Soit $\mathbb{L}$ une logique modale normale et $\mathcal{M}\_\mathbb{L}=\langle N\_\mathbb{L},A_\mathbb{L},\mathcal{V}\_\mathbb{L}\rangle$ le modèle canonique associé à $\mathbb{L}$. Pour tout nœud $\Gamma,\Gamma'\in N_\mathbb{L}$, on a&nbsp;:
<p style="text-align:center;">
$\Gamma\longrightarrow\Gamma'$ si et seulement si pour toute formule $\phi$, si $\Box\phi\in\Gamma$ alors $\phi\in\Gamma'$.
</p>
</div>

<br>

<div id="preuve">
<ul>
<li>$\Rightarrow$&nbsp;:<br>
Raisonnons par l'absurde en supposant $\Box\phi\in\Gamma$ et $\phi\not\in\Gamma'$. Par maximale $\mathbb{L}$-consistance de $\Gamma'$, $\neg\phi\in\Gamma'$. Par définition de l'arc $\Gamma\longrightarrow\Gamma'$, $\Diamond\neg\phi\in\Gamma$ et puisque $\Gamma$ est consistant, $\neg\Diamond\neg\phi\not\in\Gamma$, d'où $\Box\phi\not\in\Gamma$ (où on a utilisé la dualité entre $\Diamond$ et $\Box$). Contradiction.
</li>
<li>$\Leftarrow$&nbsp;:<br>
Soit $\phi\in\Gamma'$. Raisonnons par l'absurde en supposant $\Diamond\phi\not\in\Gamma$ (ce qui signifie que $\Gamma\,\,\not\!\!\longrightarrow\Gamma'$). Alors par maximale $\mathbb{L}$-consistance $\neg\Diamond\phi\in\Gamma$, par conséquent $\neg\Diamond\neg\neg\phi\in\Gamma$ et donc $\Box\neg\phi\in\Gamma$ (où on a utilisé la dualité entre $\Diamond$ et $\Box$). Par hypothèse, $\Box\neg\phi\in\Gamma$ entraîne $\neg\phi\in\Gamma'$, ce qui contredit la $\mathbb{L}$-consistance de $\Gamma'$.
</li>
</ul>
</div>

<br>

<div id="theo">
<b>Lemme ($\longrightarrow$ et $\Diamond$)</b>

Soit $\mathbb{L}$ une logique modale normale et $\mathcal{M}\_\mathbb{L}=\langle N\_\mathbb{L},A_\mathbb{L},\mathcal{V}\_\mathbb{L}\rangle$ le modèle canonique associé à $\mathbb{L}$. Pour tout nœud $\Gamma,\Gamma'\in N_\mathbb{L}$&nbsp;:
<p style="text-align:center;">
Si $\Diamond\phi\in\Gamma$ alors il existe $\Gamma'$ tel que $\Gamma\longrightarrow\Gamma'$ et $\phi\in\Gamma'$.
</p>
</div>

<br>

<div id="preuve">

Supposons $\Diamond\phi\in\Gamma$. Pour obtenir $\Gamma'$, on construit d'abord $\Theta=\set{\phi}\cup\set{\psi|\Box\psi\in\Gamma}$. Cet ensemble est consistant car sinon il existerait $\psi_1,\ldots,\psi_k\in\Theta$ tels que $\vdash_\mathbb{L}(\psi_1\land\ldots\land\psi_k)\rightarrow\neg\phi$. Par nécessitation, $\vdash_\mathbb{L}\Box((\psi_1\land\ldots\land\psi_k)\rightarrow\neg\phi)$. Et par distributivité (utilisation de l'axiome $\text{(K)}$) $\vdash_\mathbb{L}\Box(\psi_1\land\ldots\land\psi_k)\rightarrow\Box\neg\phi$. Et puisque dans toute logique normale $\vdash_\mathbb{L}(\Box\psi_1\land\ldots\land\Box\psi_k)\rightarrow\Box(\psi_1\land\ldots\land\psi_k)$, on obtient finalement $\vdash_\mathbb{L}(\Box\psi_1\land\ldots\land\Box\psi_k)\rightarrow\Box\neg\phi$. Par conséquent $\Gamma\vdash_\mathbb{L}\Box\neg\phi$, ce qui implique que $\Box\neg\phi\in\Gamma$ par maximalité, et donc également $\neg\Diamond\phi\in\Gamma$ (par dualité). Or par hypothèse, $\Diamond\phi\in\Gamma$, ce qui entraîne l'inconsistance de $\Gamma$. Contradiction.<br>
Comme on vient de montrer que l'ensemble $\Theta=\set{\phi}\cup\set{\psi|\Box\psi\in\Gamma}$ est $\mathbb{L}$-consistant, il suffit de prendre pour $\Gamma'$ l'ensemble $\Theta_{max}$ maximal $\mathbb{L}$-consistant donné par le lemme de Lindenbaum tel que $\Theta\subseteq\Theta_{max}$. On a bien ainsi un nœud de $N_\mathbb{L}$ contenant $\phi$.

</div>

<br>

<div id="theo">
<b>Lemme de vérité</b>

Soit $\mathbb{L}$ une logique modale normale et $\mathcal{M}\_\mathbb{L}=\langle N\_\mathbb{L},A_\mathbb{L},\mathcal{V}\_\mathbb{L}\rangle$ le modèle canonique associé à $\mathbb{L}$. Pour tout nœud $\Gamma\in N_\mathbb{L}$&nbsp;:
<p style="text-align:center;">
$\langle\mathcal{M}_\mathbb{L},\Gamma\rangle\Vdash\phi$ si et seulement si $\phi\in\Gamma$
</p>
</div>

<br>

<div id="preuve">

La démonstration se fait par induction sur la hauteur de la formule $\phi$.
<ul>
<li> si $ht(\phi)=0$, alors $\phi=\top$ ou $\phi=\bot$ ou $\phi$ est une variable propositionnelle et $\Gamma\Vdash\phi$ ssi $\phi\in\Gamma$ est la définition même de la valuation $\mathcal{V}_\mathbb{L}$.</li>
<li> si $ht(\phi)=n+1$
<ul>
<li>si $\phi=\neg\psi$, alors $\Gamma\Vdash\neg\phi$ ssi $\Gamma\nVdash\psi$. Or par hypothèse d'induction $\Gamma\nVdash\psi$ ssi $\psi\not\in\Gamma$. Par maximalité de $\Gamma$, on obtient $\neg\psi\in\Gamma$.</li>
<li>si $\phi=(\psi_1\lor\psi_2)$, alors $\Gamma\Vdash(\psi_1\lor\psi_2)$ ssi $\Gamma\Vdash\psi_1$ ou $\Gamma\Vdash\psi_2$.<br>
Par hypothèse d'induction, $\Gamma\Vdash\psi_1$ ssi $\psi_1\in\Gamma$ et $\Gamma\Vdash\psi_2$ ssi $\psi_2\in\Gamma$. Et par maximalité de $\Gamma$, $\psi_1\in\Gamma$ ou $\psi_2\in\Gamma$ ssi $(\psi_1\lor\psi_2)\in\Gamma$.</li>
<li>si $\phi=(\psi_1\land\psi_2)$, alors $\Gamma\Vdash(\psi_1\lor\psi_2)$ ssi $\Gamma\Vdash\psi_1$ et $\Gamma\Vdash\psi_2$.<br>
Par hypothèse d'induction, $\Gamma\Vdash\psi_1$ ssi $\psi_1\in\Gamma$ et $\Gamma\Vdash\psi_2$ ssi $\psi_2\in\Gamma$. Or par $\mathbb{L}$-consistance, $\psi_1\in\Gamma$ et $\psi_2\in\Gamma$ ssi $(\psi_1\land\psi_2)\in\Gamma$.</li>
<li>si $\phi=(\psi_1\rightarrow\psi_2)$. On déduit ce cas de $\neg\psi_1\lor\psi_2$.</li>
<li>si $\phi=(\psi_1\leftrightarrow\psi_2)$. On déduit ce cas de $(\psi_1\rightarrow\psi_2)\land(\psi_2\rightarrow\psi_1)$.</li>
<li>si $\phi=\Diamond\psi$, alors $\Gamma\Vdash\Diamond \psi$ ssi il existe $\Gamma',\Gamma\longrightarrow\Gamma'$ et $\Gamma'\Vdash\psi$. Or par hypothèse d'induction $\Gamma'\Vdash\psi$ ssi $\psi\in\Gamma'$. Finalement, par définition de la relation $\Gamma\longrightarrow\Gamma'$ et par le lemme ($\longrightarrow$ et $\Diamond$) $\psi\in\Gamma'$ ssi $\Diamond\psi\in\Gamma$.</li>
<li>si $\phi=\Box\psi$, alors $\Gamma\Vdash\Box\phi$ ssi $\Gamma\Vdash\neg\Diamond\neg\psi$ ssi $\neg\Diamond\neg\psi\in\Gamma$ ssi $\Box\psi\in\Gamma$ (par maximal $\mathbb{L}$-consistance).</li>
</ul>
</li>
</ul>
</div>

Nous voilà parés pour démontrer la complétude forte des onze logiques normales décrites grâce au modèle canonique de chacune.

<div id="preuve">

Le lemme d'existence nous dit que $\mathbb{L}$ est $\mathscr{C}$-fortement complète ssi pour tout $\Gamma\subseteq\mathbb{L}$, $\mathbb{L}$-consistant, il existe $\mathcal{S}\in\mathscr{C}$, $\mathcal{V}$ et $a$ tels que $\langle\mathcal{S},\mathcal{V},a\rangle\Vdash\Gamma$.

Pour chaque logique normale, nous allons choisir le modèle canonique $\mathcal{M}\_\mathbb{L}=\langle N\_\mathbb{L},A\_\mathbb{L},\mathcal{V}\_\mathbb{L}\rangle$ associé. Et pour le nœud $a$, nous allons prendre $\Gamma_{max}$. Le lemme de vérité nous dit alors que $\langle\mathcal{M}\_\mathbb{L},\Gamma_{max}\rangle\Vdash\phi$ ssi $\phi\in\Gamma_{max}$. En conséquence, puisque $\Gamma\subseteq\Gamma_{max}$, il ressort que $\langle\mathcal{M}\_\mathbb{L},\Gamma_{max}\rangle\Vdash\Gamma$.

Il ne reste plus qu'à vérifier à chaque fois que le modèle canonique est bien construit sur la base d'un système de transition de la classe $\mathscr{C}$ considérée.

<ol>
<li>$\mathcal{M}_\textbf{K}\in\mathscr{C}$&nbsp;: comme $\mathscr{C}$ désigne la classe de tous les systèmes de transition, il n'ya rien à montrer.</li>
<li>$\mathcal{M}_\textbf{K4}\in\mathscr{C}_{tr.}$&nbsp;:<br>
il faut montrer que pour tout nœud $\Xi_1$, $\Xi_2$ et $\Xi_3$ de $\mathcal{M}_\textbf{K4}$, si $\Xi_1\longrightarrow \Xi_2$ et $\Xi_2\longrightarrow \Xi_3$, alors $\Xi_1\longrightarrow \Xi_3$.<br>
La formule $\text{(4)}=\Box p\rightarrow\Box\Box P$ est équivalente (par dualité) à la formule $\neg\Diamond\neg P\rightarrow\neg\Diamond\neg\neg\Diamond\neg P$ elle même équivalente à $\Diamond\Diamond\neg P\rightarrow\Diamond\neg P$ (en passant par la contraposée et en éliminant les doubles négations). Comme $\Diamond\Diamond\neg P\rightarrow\Diamond\neg P\in\Gamma$, on a aussi $\Diamond\Diamond\neg P\rightarrow\Diamond\neg P\in\Xi_1$ et puisque $\Xi_1$ est clos par substitution uniforme, $\Diamond\Diamond\neg \neg\phi\rightarrow\Diamond\neg \neg\phi\in\Xi_1$. Et donc chaque formule $\Diamond\Diamond\rightarrow\Diamond$ appartient à $\Xi_1$.<br>
Par définition de $\Xi_1\longrightarrow \Xi_2$ et $\Xi_2\longrightarrow \Xi_3$, pour une formule $\phi$ quelconque, si $\phi\in\Xi_3$, alors $\Diamond\phi\in\Xi_2$ et $\Diamond\Diamond\phi\in\Xi_1$. Et comme $\Xi_1$ est clos par <i>modus ponens</i>, si à la fois $\Diamond\Diamond\phi\in\Xi_1$ et $\Diamond\Diamond\phi\rightarrow\Diamond\phi\in\Xi_1$, alors $\Diamond\phi\in\Xi_1$. Cela prouve que pour toute formule $\phi$, si $\phi\in\Xi_3$, alors $\Diamond\phi\in\Xi_1$, et par conséquent $\Xi_1\longrightarrow\Xi_3$.
</li>
<li>$\mathcal{M}_\textbf{KD}\in\mathscr{C}_{n.b.d.}$&nbsp;:<br>
il faut montrer que pour tout nœud $\Xi_1$ de $\mathcal{M}_\textbf{KD}$, il existe $\Xi_2$ tel que $\Xi_1\longrightarrow \Xi_2$.<br>
D'après le lemme ($\longrightarrow$ et $\Diamond$), si $\Diamond\phi\in\Xi_1$, alors il existe $\Xi_2$ tel que $\Xi_1\longrightarrow \Xi_2$ et $\phi\in\Xi_2$. Or l'axiome $\text{(D)}$ dit précisément $\Box P\rightarrow\Diamond P$. Comme $\Xi_1$ est clos par substitution uniforme, la formule $\Box\top\rightarrow\Diamond\top$ est dans $\Xi_1$. Or $\Xi_1$ vérifie nécessairement $\Box\top$ (car une tautologie est vraie partout) et comme $\Xi_1$ est clos par <i>modus ponens</i>, $\Diamond\top\in\Xi_1$, et donc d'après le lemme ($\longrightarrow$ et $\Diamond$), il existe $\Xi_2$ tel que $\Xi_1\longrightarrow \Xi_2$ et $\top\in\Xi_2$.
</li>
<li>$\mathcal{M}_\textbf{KD4}\in\mathscr{C}_{tr.,n.b.d.}$&nbsp;:<br>
Conséquence de 2. et 3.
</li>
<li>$\mathcal{M}_\textbf{KT}\in\mathscr{C}_{ref.}$&nbsp;:<br>
Il faut montrer que $\Xi\longrightarrow \Xi$ est vérifié pour tout nœud $\Xi$ de $\mathcal{M}_\textbf{KT}$.<br>
La formule $\text{(T)}=\Box P\rightarrow P$ est équivalente à $\neg\Diamond\neg P\rightarrow P$ et par contraposition à $\neg P\rightarrow\diamond\neg P$. Comme $\Xi$ est clos par substitution uniforme, la formule $\neg \neg \phi\rightarrow\diamond\neg \neg\phi$ est dans $\Xi$ et donc $\phi\rightarrow\Diamond\phi$ est dans $\Xi$. La cloture par <i>modus ponens</i> permet alors de déduire que pour toute formule $\phi\in\Xi$, $\Diamond\phi\in\Xi$, ce qui est la condition nécessaire à la relation $\Xi\longrightarrow \Xi$.
</li>
<li>$\mathcal{M}_\textbf{S4}\in\mathscr{C}_{ref.,tr.}$&nbsp;:<br>
Conséquence de 2. et 5.
</li>
<li>$\mathcal{M}_\textbf{KB}\in\mathscr{C}_{sym.}$&nbsp;:<br>
il faut montrer que pour tout couple de nœuds $\Xi_1$ et $\Xi_2$ de $\mathcal{M}_\textbf{KB}$, $\Xi_1\longrightarrow \Xi_2$ alors $\Xi_2\longrightarrow \Xi_1$.<br>
$\text{(B)}= P\rightarrow \Box\Diamond P$ . Comme $\Xi_1$ est clos par substitution uniforme, les formules $\phi\rightarrow\Box\Diamond\phi$ sont dans $\Xi_1$. La cloture par <i>modus ponens</i> de $\Xi_1$ nous dit alors que si $\phi\in\Xi_1$, alors $\Box\Diamond\phi\in\Xi_1$. Or d'après le lemme ($\longrightarrow$ et $\Box$), si $\Xi_1\longrightarrow\Xi_2$ alors pour toute formule $\phi$, si $\Box\phi\in\Xi_1$, alors $\phi\in\Xi_2$. Par conséquent, pour tout $\phi\in\Xi_1$, $\Diamond\phi\in\Xi_2$, ce qui est la condition nécessaire pour définir $\Xi_2\longrightarrow\Xi_1$.
</li>
<li>$\mathcal{M}_\textbf{KB4}\in\mathscr{C}_{sym.tr.}$&nbsp;:<br>
Conséquence de 2. et 7.
</li>
<li>$\mathcal{M}_\textbf{KDB}\in\mathscr{C}_{sym.,n.b.d.}$&nbsp;:<br>
Conséquence de 3. et 7.
</li>
<li>$\mathcal{M}_\textbf{KTB}\in\mathscr{C}_{ref.sym.}$&nbsp;:<br>
Conséquence de 5. et 7.
</li>
<li>$\mathcal{M}_\textbf{S5}\in\mathscr{C}_{ref.,sym.tr.}$&nbsp;:<br>
Conséquence de 2. et 5. et 7.
</li>
</ol>

</div>

On représente graphiquement par une flèche "$\mathscr{C}\_x\longrightarrow\textbf{X}$" la relation de forte-complétude&nbsp;: "si $\Gamma\models_{\mathscr{C}\_x}\phi$, alors $\Gamma\vdash_\textbf{X}\phi$".

![](/compcomplet.png?width=1200px)


{{%notice note%}}
La notion de conséquence sémantique $\models$ demande une satisfaction sur tous les modèle alors que la notion de conséquence syntaxique $\vdash$ demande seulement l'existence d'une preuve.<br>
Dit autrement, $\models$ est définie avec un quantificateur universel $\forall$ et $\vdash$ avec un quantificateur existentiel $\exists$ or la négation du quantificateur universel est le quantificateur existentiel et inversement.<br>
Démontrer qu'une formule est non démontrable est donc très difficile du côté de la  théorie de la démonstration puisque cela oblige à montrer que **toutes** les preuves échouent. Par contre, sur le versant sémantique, il suffit de trouver **un** modèle où la négation de la formule est satisfaite (un contre-exemple suffit).<br>
C'est la **correction** qui nous permet le changement de versant (on passe de la syntaxe à la sémantique).<br>
On peut trouver d'ailleurs un peu douloureux que la correspondance de loin la plus difficile à démontrer (la complétude) apporte si peu d'applications concrètes.
{{%/notice%}}

<br>
<p style="text-align:center;">
<a href="../logique6" style="font-size:2em;">Suite : <b>Différentes logiques modales</b></a>
</p>
