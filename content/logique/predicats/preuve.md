+++
title = "Calcul des prédicats - Démontrer au premier ordre"
menuTitle = "Démontrer au premier ordre"
date = 2026-11-13T10:00:00+01:00
weight = 2
css = "logique.css"
+++

# Calcul des prédicats
<p class="chap-sous">Démontrer au premier ordre&nbsp;: quatre règles, un théorème de Gödel et quelques vertiges</p>

<nav class="chap-nav" aria-label="Chapitres">
<a href="../langage/">Langage et sens</a>
<a href="../preuve/" class="actif">Démontrer au premier ordre</a>
</nav>

Bonne nouvelle&nbsp;: pour démontrer en calcul des prédicats, on garde **tout** ce qu'on a construit pour le [calcul des propositions](../../propositions/preuve/#la-déduction-naturelle). Les séquents, les arbres de preuve, les règles d'introduction et d'élimination de chaque connecteur, l'absurdité classique&nbsp;: rien ne change. Il suffit d'ajouter une règle d'introduction et une règle d'élimination pour chacun des deux quantificateurs.

## Quatre règles de plus

Dans ce qui suit, $\phi(t)$ désigne la formule $\phi(x)$ dans laquelle on a remplacé la variable libre $x$ par le terme $t$.

<div class="def">
<p><b>Les deux règles faciles</b></p>
<div class="defile arbre">
$$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\forall x\,\phi(x)$}
\RightLabel{$\scriptstyle \forall e$}
\UnaryInfC{$\Gamma\vdash\phi(t)$}
\end{prooftree}
\qquad\qquad
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi(t)$}
\RightLabel{$\scriptstyle \exists i$}
\UnaryInfC{$\Gamma\vdash\exists x\,\phi(x)$}
\end{prooftree}
$$
</div>
<ul>
<li>$\forall e$&nbsp;: ce qui vaut pour tous vaut pour chacun («&nbsp;tous les hommes sont mortels, donc Socrate aussi&nbsp;»).</li>
<li>$\exists i$&nbsp;: pour prouver qu'il existe un objet qui convient, il suffit d'en exhiber un, le <b>témoin</b> $t$.</li>
</ul>
</div>

<div class="def">
<p><b>Les deux règles délicates</b></p>
<div class="defile arbre">
$$
\begin{prooftree}
\AxiomC{$\Gamma\vdash\phi(x)$}
\RightLabel{$\scriptstyle \forall i$}
\UnaryInfC{$\Gamma\vdash\forall x\,\phi(x)$}
\end{prooftree}
\qquad\qquad
\begin{prooftree}
\AxiomC{$\Gamma\vdash\exists x\,\phi(x)$}
\AxiomC{$\Gamma',\phi(x)\vdash\psi$}
\RightLabel{$\scriptstyle \exists e$}
\BinaryInfC{$\Gamma,\Gamma'\vdash\psi$}
\end{prooftree}
$$
</div>
<ul>
<li>$\forall i$, à condition que $x$ ne soit pas libre dans les hypothèses $\Gamma$&nbsp;: c'est le «&nbsp;<b>soit $x$ quelconque</b>&nbsp;» des démonstrations. Si l'on a prouvé $\phi(x)$ sans rien supposer de $x$, on l'a prouvée pour tous les $x$.</li>
<li>$\exists e$, à condition que $x$ ne soit libre ni dans $\Gamma'$ ni dans $\psi$&nbsp;: c'est le «&nbsp;<b>soit $x$ tel que…</b>&nbsp;». Sachant qu'un objet vérifie $\phi$, on lui donne un nom, on raisonne sur lui, et la conclusion ne doit pas dépendre du nom choisi.</li>
</ul>
</div>

<div class="encadre prune">
<div class="encadre-titre">Tous les nombres sont pairs</div>

«&nbsp;Soit $x$ un nombre quelconque. Supposons $x=2$. Alors $x$ est pair. Comme $x$ était quelconque, tous les nombres sont pairs.&nbsp;»

L'erreur saute aux yeux en français, et la règle $\forall i$ la rend mécanique&nbsp;: on a prouvé $x=2\vdash\mathit{Pair}(x)$, mais la variable $x$ est libre dans l'hypothèse $x=2$. Elle n'était donc pas quelconque du tout, et la généralisation est interdite.

</div>

<div class="exemple">
<p><b>Socrate, enfin.</b> Avec $H$ pour «&nbsp;homme&nbsp;», $M$ pour «&nbsp;mortel&nbsp;» et $s$ pour Socrate&nbsp;:</p>
<div class="defile arbre">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptstyle ax$}
\UnaryInfC{$\forall x\,(H(x)\to M(x))\vdash\forall x\,(H(x)\to M(x))$}
\RightLabel{$\scriptstyle \forall e$}
\UnaryInfC{$\forall x\,(H(x)\to M(x))\vdash H(s)\to M(s)$}
\AxiomC{}
\RightLabel{$\scriptstyle ax$}
\UnaryInfC{$H(s)\vdash H(s)$}
\RightLabel{$\scriptstyle \to e$}
\BinaryInfC{$\forall x\,(H(x)\to M(x)),\ H(s)\vdash M(s)$}
\end{prooftree}
$$
</div>
</div>

<div class="exemple">
<p><b>Échanger les quantificateurs.</b> S'il existe quelqu'un que tout le monde aime, alors tout le monde aime quelqu'un&nbsp;:</p>
<div class="defile arbre">
$$
\begin{prooftree}
\AxiomC{}
\RightLabel{$\scriptstyle ax$}
\UnaryInfC{$\exists y\,\forall x\,R(x,y)\vdash\exists y\,\forall x\,R(x,y)$}
\AxiomC{}
\RightLabel{$\scriptstyle ax$}
\UnaryInfC{$\forall x\,R(x,y)\vdash\forall x\,R(x,y)$}
\RightLabel{$\scriptstyle \forall e$}
\UnaryInfC{$\forall x\,R(x,y)\vdash R(x,y)$}
\RightLabel{$\scriptstyle \exists i$}
\UnaryInfC{$\forall x\,R(x,y)\vdash\exists y\,R(x,y)$}
\RightLabel{$\scriptstyle \forall i$}
\UnaryInfC{$\forall x\,R(x,y)\vdash\forall x\,\exists y\,R(x,y)$}
\RightLabel{$\scriptstyle \exists e$}
\BinaryInfC{$\exists y\,\forall x\,R(x,y)\vdash\forall x\,\exists y\,R(x,y)$}
\end{prooftree}
$$
</div>
<p>Le $\forall i$ est permis car $x$ est liée dans l'hypothèse $\forall x\,R(x,y)$, et le $\exists e$ l'est car $y$ ne figure pas, libre, dans la conclusion. L'inverse est impossible à prouver, et c'est heureux&nbsp;: la <a href="../langage/#lordre-compte">figure sur l'ordre des quantificateurs</a> montre une situation où tout le monde aime quelqu'un sans que personne ne soit aimé de tous.</p>
</div>

## Gödel 1929&nbsp;: la complétude

Le calcul des prédicats a donc ses preuves (le symbole $\vdash$) et sa sémantique (le symbole $\models$, «&nbsp;vrai dans toutes les structures où les hypothèses sont vraies&nbsp;»). Coïncident-ils, comme en calcul des propositions&nbsp;?

<div class="theo">
<p><b>Théorème de complétude</b> (Gödel, 1929)&nbsp;: pour tout ensemble d'énoncés $\Gamma$ et tout énoncé $\phi$,</p>
<p style="text-align:center;">$\Gamma\models\phi$ si et seulement si $\Gamma\vdash\phi$.</p>
</div>

Tout ce qui est vrai dans toutes les structures se démontre, et rien d'autre. La question avait été posée en 1928 par David Hilbert et Wilhelm Ackermann dans leur manuel de logique. Kurt Gödel, 23 ans, y répond l'année suivante dans sa thèse de doctorat à Vienne.

La preuve qu'on enseigne aujourd'hui, due à Leon Henkin (1949), suit la même idée que la [complétude des logiques modales](../../modale/systemes/#pourquoi-cest-complet)&nbsp;: fabriquer une structure à partir de la syntaxe elle-même. Les objets du domaine sont les termes du langage, et, pour que chaque «&nbsp;il existe&nbsp;» ait de quoi se réaliser, on ajoute au langage une nouvelle constante, un témoin, pour chaque formule $\exists x\,\phi(x)$.

{{% notice type="piege" round="true" %}}
**Complétude et incomplétude ne se contredisent pas**, malgré les noms et l'auteur commun. Le théorème de complétude (1929) dit que les règles de preuve attrapent toutes les **conséquences logiques** d'un ensemble d'axiomes. Les théorèmes d'incomplétude (1931) disent qu'un ensemble d'axiomes pour l'arithmétique ne **décide** jamais tous les énoncés&nbsp;: il en reste qui ne sont ni démontrables ni réfutables. Les deux se concilient très bien&nbsp;: un tel énoncé est vrai dans certaines structures qui satisfont les axiomes et faux dans d'autres, donc il n'est pas une conséquence logique des axiomes, et la complétude n'oblige pas à le démontrer.
{{% /notice %}}

## La compacité&nbsp;: les preuves sont finies

Une preuve n'utilise qu'un nombre fini d'hypothèses. Grâce à la complétude, cette banalité devient un théorème surprenant sur les structures.

<div class="theo">
<p><b>Théorème de compacité</b>&nbsp;: si chaque partie finie d'un ensemble d'énoncés $\Gamma$ a une structure qui la rend vraie, alors $\Gamma$ tout entier en a une.</p>
</div>

En effet, si $\Gamma$ n'avait aucune structure, on pourrait en déduire une contradiction (complétude), et cette preuve n'utiliserait qu'une partie finie de $\Gamma$, qui serait donc déjà contradictoire.

**Premier vertige : la finitude est indicible.** Supposons qu'un énoncé $\phi$ dise «&nbsp;le domaine est fini&nbsp;». Ajoutons-lui les énoncés «&nbsp;il y a au moins $n$ objets&nbsp;», pour tous les $n$. Chaque partie finie de cette liste n'en mentionne qu'un nombre fini et a donc une structure (finie, assez grande). Par compacité, la liste entière a une structure, à la fois finie et plus grande que tout entier&nbsp;: c'est absurde. Aucune formule ne sait dire «&nbsp;fini&nbsp;».

**Second vertige : des entiers infiniment grands.** Prenons tous les énoncés vrais sur les entiers, et ajoutons une nouvelle constante $c$ avec les axiomes $c>0$, $c>1$, $c>2$, et ainsi de suite. Chaque partie finie est vraie dans les entiers usuels (il suffit de choisir $c$ assez grand). Par compacité, il existe une structure qui vérifie **tous les énoncés vrais de l'arithmétique** et qui contient pourtant un «&nbsp;entier&nbsp;» $c$ plus grand que $0$, que $1$, que $2$… Aucun énoncé du premier ordre ne la distingue des entiers ordinaires.

<div class="svg-container" style="text-align:center;margin:1em 0 0.4em;">
<svg viewBox="0 0 560 112" role="img" aria-label="Un modèle non standard de l'arithmétique : après tous les entiers usuels viennent des entiers infiniment grands, groupés en blocs" style="width:100%;max-width:560px;height:auto;"><circle cx="24" cy="64" r="6" fill="#004D80"/><text x="24" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">0</text><circle cx="58" cy="64" r="6" fill="#004D80"/><text x="58" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">1</text><circle cx="92" cy="64" r="6" fill="#004D80"/><text x="92" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">2</text><circle cx="126" cy="64" r="6" fill="#004D80"/><text x="126" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">3</text><circle cx="160" cy="64" r="6" fill="#004D80"/><text x="160" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">4</text><circle cx="194" cy="64" r="6" fill="#004D80"/><text x="194" y="90" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif">5</text><text x="232" y="69" text-anchor="middle" font-size="18" fill="#004D80" font-family="Georgia,'Times New Roman',serif">…</text><line x1="18" y1="64" x2="214" y2="64" stroke="#004D80" stroke-width="1" opacity="0.4"/><text x="118" y="26" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif">les entiers « standard »</text><rect x="268" y="34" width="282" height="74" rx="12" fill="#FBE9EF" stroke="#970E53" stroke-dasharray="4 3"/><text x="290" y="69" text-anchor="middle" font-size="18" fill="#970E53" font-family="Georgia,'Times New Roman',serif">…</text><circle cx="326" cy="64" r="6" fill="#970E53"/><text x="326" y="90" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">c−2</text><circle cx="372" cy="64" r="6" fill="#970E53"/><text x="372" y="90" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">c−1</text><circle cx="418" cy="64" r="6" fill="#970E53"/><text x="418" y="90" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">c</text><circle cx="464" cy="64" r="6" fill="#970E53"/><text x="464" y="90" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">c+1</text><circle cx="510" cy="64" r="6" fill="#970E53"/><text x="510" y="90" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">c+2</text><text x="540" y="69" text-anchor="middle" font-size="18" fill="#970E53" font-family="Georgia,'Times New Roman',serif">…</text><line x1="300" y1="64" x2="530" y2="64" stroke="#970E53" stroke-width="1" opacity="0.4"/><text x="409" y="26" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif">des entiers « infiniment grands »</text></svg>
</div>
<p class="legende">Un modèle non standard de l'arithmétique&nbsp;: les entiers usuels, puis, au-delà de tous, des entiers infiniment grands (un tel entier $c$ a toujours un prédécesseur $c-1$ et un successeur $c+1$).</p>

<div class="encadre">
<div class="encadre-titre">Le retour des infinitésimaux</div>

Thoralf Skolem construit de tels modèles non standard de l'arithmétique dès 1934. Vers 1960, Abraham Robinson applique la même idée aux nombres réels&nbsp;: la compacité fournit des réels **infiniment petits**, plus petits que $1/n$ pour tout $n$ et pourtant non nuls. Les infinitésimaux de Leibniz, que les mathématiciens du XIX<sup>e</sup> siècle avaient bannis comme incohérents, retrouvent ainsi une existence parfaitement rigoureuse. C'est l'**analyse non standard**.

</div>

## Löwenheim-Skolem&nbsp;: l'infini devient relatif

<div class="theo">
<p><b>Théorème de Löwenheim-Skolem</b>&nbsp;: un ensemble d'énoncés écrits dans un langage dénombrable qui possède une structure infinie possède aussi une structure **dénombrable**.</p>
</div>

Or la théorie des ensembles s'écrit au premier ordre, dans un langage qui ne contient qu'un symbole, $\in$. Elle démontre, avec l'argument diagonal de Cantor, qu'il existe des ensembles [non dénombrables](../../../maths/fondements/infinis/), comme l'ensemble des réels. Et pourtant, d'après Löwenheim-Skolem, elle possède un modèle dénombrable&nbsp;! C'est le **paradoxe de Skolem** (1922).

Il n'y a pas de contradiction. Dans ce modèle, «&nbsp;l'ensemble des réels&nbsp;» n'a qu'une quantité dénombrable d'éléments vue **de l'extérieur**&nbsp;; mais la bijection qui le prouverait n'appartient pas au modèle. Vu **de l'intérieur**, l'ensemble est bel et bien non dénombrable, puisqu'aucune bijection avec les entiers n'y existe. «&nbsp;Dénombrable&nbsp;» est une notion relative au monde dans lequel on se place. Skolem en concluait que la théorie des ensembles ne pouvait pas servir de fondement absolu aux mathématiques.

## La fin du rêve de la décision

En calcul des propositions, on sait **décider** mécaniquement si une formule est une tautologie&nbsp;: il suffit de dresser sa table de vérité. En 1928, Hilbert pose la même question pour le calcul des prédicats&nbsp;: c'est le célèbre *Entscheidungsproblem*, le «&nbsp;problème de la décision&nbsp;».

La réponse, négative, arrive en 1936, deux fois la même année. Alonzo Church avec le lambda-calcul, puis Alan Turing avec ses machines, montrent qu'**aucun algorithme** ne décide si un énoncé du premier ordre est universellement valide. Pour y parvenir, Turing a dû d'abord définir précisément ce qu'est un algorithme&nbsp;: l'informatique théorique est née de cette question de logique.

On peut seulement **énumérer** les preuves, l'une après l'autre. Si l'énoncé est valide, on finira par tomber sur sa preuve (la complétude le garantit). S'il ne l'est pas, la recherche peut durer éternellement sans qu'on puisse jamais savoir s'il faut continuer à chercher. On dit que la validité est **semi-décidable**.

<div class="tableau-large">
<table class="tab-recap">
<tr><th></th><th>Calcul des propositions</th><th>Calcul des prédicats</th></tr>
<tr><td class="g"><b>correct et complet</b></td><td>oui (Post, 1921)</td><td>oui (Gödel, 1929)</td></tr>
<tr><td class="g"><b>compact</b></td><td>oui</td><td>oui</td></tr>
<tr><td class="g"><b>décidable</b></td><td>oui, par les tables de vérité</td><td>non (Church, Turing, 1936), seulement semi-décidable</td></tr>
</table>
</div>

## Vers l'arithmétique

Une **théorie** est un ensemble d'énoncés qu'on prend pour axiomes. La plus célèbre est l'**arithmétique de Peano**, notée $\text{PA}$. Son langage contient la constante $0$, la fonction successeur ($x\mapsto x+1$), l'addition et la multiplication. Ses axiomes disent par exemple que $0$ n'est le successeur de personne, et comment calculer $x+(y+1)$ ou $x\times(y+1)$.

La récurrence pose le problème annoncé au début. Faute de pouvoir dire «&nbsp;pour toute propriété&nbsp;», on l'écrit sous forme de **schéma**&nbsp;: un axiome distinct pour chaque formule $\phi(x)$,

$$\big(\phi(0)\land\forall x\,(\phi(x)\rightarrow\phi(x+1))\big)\rightarrow\forall x\,\phi(x).$$

Les formules sont dénombrables, alors que les propriétés des entiers (les ensembles d'entiers) ne le sont pas. Le schéma laisse donc échapper l'immense majorité des propriétés, et c'est par cette brèche que s'engouffrent les modèles non standard.

C'est dans ce cadre que se jouent les **théorèmes d'incomplétude** de Gödel&nbsp;: $\text{PA}$, comme toute théorie raisonnable qui la contient, laisse des énoncés vrais sans démonstration. Comme l'arithmétique peut parler de ses propres preuves, on peut lire ces théorèmes avec une boîte de logique modale. C'est l'objet de la rubrique suivante.

<nav class="suite-nav" aria-label="Chapitre précédent et suivant">
<a href="../langage/" class="precedent"><span>← Précédent</span><b>Langage et sens</b></a>
<a href="../../prouvabilite/" class="suivant"><span>Suite →</span><b>Prouvabilité et incomplétude</b></a>
</nav>
