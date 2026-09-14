+++
title = "TQC-16"
date = 2026-08-02T10:00:00+01:00
weight = 1
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
  #grosseformule 
{
    overflow-x: auto; 
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
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
ul
{
margin-top:0em;
margin-bottom:0.5em;
}
/* Pour rétablir le comportement de details */
details > summary:first-of-type {
  display: list-item;     /* remet le triangle + l'accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
</style>




# Théorie quantique des champs -- Partie 16

{{%notice note%}}
Notes de lecture du livre *Quantum field theory for the gifted amateur* de Thomas Lancaster et Stephen Blundell.
{{%/notice%}}

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Retour sommaire</a></th></td>
    </tr>
</table>
</div>
<br>


On a précédemment construit l'électrodynamique quantique et ses règles de Feynman. Mais dès qu'on dépasse l'ordre le plus bas, les intégrales divergent. Comment faire alors une quelconque prédiction précise&nbsp;? Cette partie lève l'obstacle en appliquant à la QED la machinerie de renormalisation développée aux parties&nbsp;11 et&nbsp;12, et en tire deux résultats qui ont fait sa réputation.

Le premier est que la <b>charge électrique n'est pas une constante</b>&nbsp;: le vide se comporte comme un diélectrique, écrante l'électron, et la valeur mesurée de $\alpha$ dépend de la distance à laquelle on regarde. Le second est le <b>moment magnétique anormal de l'électron</b>&nbsp;: la valeur $g = 2$ que Dirac avait déduite de la relativité reçoit une correction, calculable à partir d'un unique diagramme, et vérifiée aujourd'hui sur une dizaine de chiffres significatifs.

Ces deux résultats ont ceci de commun qu'ils sont des <b>tests</b> au sens fort&nbsp;: la théorie sans champ quantifié y prédit des valeurs nettes (exactement $2$, exactement une dégénérescence, exactement une constante), et l'expérience les contredit toutes les trois. On mènera donc les calculs jusqu'au nombre, et un tableau de confrontation clôt la partie.


## La renormalisation de QED

Jusqu'ici, tous nos calculs se sont arrêtés à l'ordre le plus bas, celui des diagrammes en arbre. Dès qu'on veut faire mieux, les intégrales sur les impulsions internes des boucles **divergent**. La machinerie de la renormalisation, construite à la partie&nbsp;11 sur la théorie $\phi^4$, va s'appliquer ici pour la première fois à des particules réelles.

Et elle ne se contente pas d'éponger les infinis. Elle **prédit deux effets mesurés**&nbsp;:

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>la charge électrique n'est pas une constante&nbsp;: elle dépend de l'échelle à laquelle on la mesure&nbsp;;</li>
<li>le facteur $g$ de l'électron n'est pas tout à fait 2.</li>
</ul>
{{%notice note "L'itinéraire du chapitre"%}}
Quatre stations.
<ol style="margin-top:-0.5em; margin-bottom:0.5em;">
<li>Mettre en place le programme&nbsp;: trois fonctions de Green divergentes, trois contretermes, trois conditions de renormalisation.</li>
<li>L'appliquer au photon&nbsp;: sa self-énergie transforme la charge en une fonction de l'échelle, et l'hydrogène le mesure.</li>
<li>Traduire cette dépendance dans le langage du groupe de renormalisation&nbsp;: la fonction $\beta$ de QED et la course de $\alpha$.</li>
<li>L'appliquer au vertex&nbsp;: le facteur $g$ de l'électron et le calcul de Schwinger.<br><br>
À chaque station, le même réflexe&nbsp;: la théorie est fixée <b>en un point</b> par une mesure, et tout ce qui bouge <b>ailleurs</b> est une prédiction.</li>
</ol>
{{%/notice%}}

### Rappel&nbsp;: le vocabulaire de la renormalisation

Trois notions vont revenir sans arrêt.

<div id="def">

<b>Diagramme 1PI</b> (pour «&nbsp;une particule irréductible&nbsp;»)&nbsp;: un diagramme qu'on ne peut pas couper en deux morceaux en sectionnant une <b>seule</b> ligne interne.

</div>

L'intérêt de cette notion est purement pratique. Un diagramme <i>réductible</i> est fait de morceaux 1PI enfilés comme des perles sur un collier&nbsp;; il suffit donc de calculer les perles, et l'enfilage se fera tout seul par une somme géométrique.

<div id="def">

<b>Self-énergie</b>&nbsp;: la somme de tous les diagrammes 1PI qu'on peut insérer dans une ligne de particule, en ne comptant que les corrections, sans le propagateur nu lui-même.

On la note $-\mathrm{i}\tilde\Sigma$ pour l'électron et $\mathrm{i}\tilde\Pi^{\mu\nu}$ pour le photon.

</div>

Le mot est trompeusement modeste. Ce que la self-énergie décrit, c'est qu'une particule qui se propage n'est <b>jamais nue</b>&nbsp;: elle traîne un cortège de fluctuations quantiques, et ce cortège modifie sa propagation. Nous l'avions rencontrée à la partie&nbsp;11 sous le nom de $\tilde\Sigma$, où elle déplaçait le pôle du propagateur.

<div id="def">

<b>Contreterme</b>&nbsp;: un terme ajouté au lagrangien, de forme imposée, dont le rôle est d'absorber exactement la partie divergente d'une fonction de Green.

<b>Condition de renormalisation</b>&nbsp;: la contrainte physique qui fixe, en <b>un point</b>, la valeur du contreterme.

</div>

Insistons sur la logique, car c'est elle qui fait toute la puissance de la méthode. Un contreterme n'est pas un tour de passe-passe pour cacher un infini. C'est la reconnaissance que les paramètres écrits dans le lagrangien de départ, la masse et la charge «&nbsp;nues&nbsp;», **ne sont pas ceux qu'on mesure**. Ce qu'on mesure, c'est la masse et la charge de la particule habillée de son cortège. Renormaliser, c'est réexprimer la théorie en fonction des quantités mesurables.

### Le programme&nbsp;: trois fonctions de Green, trois contretermes

<div id="theo">

QED est <b>renormalisable</b> avec exactement <b>trois</b> contretermes, un par fonction de Green divergente. Trois, et pas un de plus&nbsp;: c'est cela qui rend la théorie prédictive.

</div>

<br>

<div style="overflow-x:auto;">

| fonction de Green | notation | contreterme |
|---|---|---|
| self-énergie de l'électron | $-\mathrm{i}\tilde\Sigma(\not{\\!\\!p})$ | $\mathrm{i}\big(\not{\\!\\!p}\\,B + A\big)$ |
| self-énergie du photon | $\mathrm{i}\tilde\Pi^{\mu\nu}(q)$ | $\mathrm{i}\big(g^{\mu\nu}q^2 - q^\mu q^\nu\big)C$ |
| fonction de vertex | $-\mathrm{i}Q\lvert e\rvert\\,\tilde\Gamma^\mu(p, p')$ | $\mathrm{i}Q\lvert e\rvert\\,\gamma^\mu D$ |

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/fctgreenetcontretermes.png" style="box-shadow:none;background:none;">
</div>


<div id="preuve">

<b>Pourquoi ces trois-là, et pourquoi ces formes&nbsp;?</b>

La réponse tient dans le <b>comptage de puissances</b>, l'outil de la partie&nbsp;11. Rappelons son principe&nbsp;: on évalue, pour un diagramme donné, la puissance de l'impulsion de boucle qui subsiste au numérateur une fois tous les propagateurs pris en compte. Cette puissance s'appelle le <b>degré de divergence superficiel</b> $D$&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>$D \geq 0$&nbsp;: le diagramme est sensible à la coupure et réclame un contreterme&nbsp;;</li>
<li>$D < 0$&nbsp;: il converge, et il n'y a rien à faire.</li>
</ul>

Pour la théorie $\phi^4$, ce comptage donnait $D = 4 - N$ avec $N$ le nombre de pattes externes. Refaisons-le pour QED, où deux sortes de lignes coexistent.

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 5px 5px;">

<summary>
Le comptage de puissances de QED
</summary>

<b>Les notations</b><br>
Pour un diagramme quelconque, notons $L$ son nombre de boucles, $V$ son nombre de vertex, $P_{\mathrm e}$ et $P_\gamma$ ses nombres de <b>propagateurs internes</b> fermioniques et photoniques, enfin $N_{\mathrm e}$ et $N_\gamma$ ses nombres de <b>pattes externes</b> de chaque sorte.

<b>Pas 1&nbsp;: compter les puissances</b><br>
Trois contributions, et elles se lisent directement sur les règles de Feynman de la partie précédente&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>chaque <b>boucle</b> apporte une intégrale $\int\mathrm d^4k$, donc $+4$&nbsp;;</li>
<li>chaque <b>propagateur fermionique</b> vaut $\dfrac{\mathrm i(\not{\!\!k}+m)}{k^2-m^2}$, qui décroît comme $1/k$ à grand $k$, donc $-1$&nbsp;;</li>
<li>chaque <b>propagateur photonique</b> vaut $\dfrac{-\mathrm i g_{\mu\nu}}{k^2}$, qui décroît comme $1/k^2$, donc $-2$.</li>
</ul>

<p style="text-align:center;">
$\displaystyle
D = 4L - P_{\mathrm e} - 2P_\gamma
$
</p>

<b>Notons au passage l'asymétrie&nbsp;:</b> un propagateur de fermion décroît deux fois moins vite qu'un propagateur de photon, parce que son numérateur contient un $\not{\\!\\!k}$. C'est cette asymétrie qui va rendre les pattes fermioniques «&nbsp;plus coûteuses&nbsp;» que les pattes photoniques.

<b>Pas 2&nbsp;: éliminer $L$, $P_{\mathrm e}$ et $P_\gamma$</b><br>
Ces quantités ne sont pas indépendantes, car la <b>topologie</b> du diagramme les relie. Tout repose sur la structure du vertex de QED, qui porte <b>deux</b> extrémités fermioniques et <b>une</b> extrémité photonique.

<i>Extrémités fermioniques</i><br>
Les $V$ vertex en fournissent $2V$. Chacune est soit une extrémité de propagateur interne (et chaque propagateur en consomme deux), soit une patte externe (qui en consomme une)&nbsp;:

<p style="text-align:center;">
$\displaystyle
2V = 2P_{\mathrm e} + N_{\mathrm e}
\qquad\Longrightarrow\qquad
P_{\mathrm e} = V - \frac{N_{\mathrm e}}{2}
$
</p>

<i>Extrémités photoniques</i><br>
Le même raisonnement, avec une seule extrémité par vertex&nbsp;:

<p style="text-align:center;">
$\displaystyle
V = 2P_\gamma + N_\gamma
\qquad\Longrightarrow\qquad
P_\gamma = \frac{V - N_\gamma}{2}
$
</p>

<i>Nombre de boucles</i><br>
Chaque propagateur interne apporte une impulsion à intégrer, chaque vertex une contrainte de conservation, et l'une de ces contraintes est la conservation globale, déjà satisfaite&nbsp;:

<p style="text-align:center;">
$\displaystyle
L = P_{\mathrm e} + P_\gamma - V + 1
$
</p>

<b>Pas 3&nbsp;: substituer</b><br>
En reportant $L$ dans l'expression de $D$&nbsp;:

<p style="text-align:center;">
$\displaystyle
D = 4\big(P_{\mathrm e} + P_\gamma - V + 1\big) - P_{\mathrm e} - 2P_\gamma = 3P_{\mathrm e} + 2P_\gamma - 4V + 4
$
</p>

puis en y injectant les deux relations topologiques&nbsp;:

<p style="text-align:center;">
$\displaystyle
D = 3\left(V - \frac{N_{\mathrm e}}{2}\right) + \big(V - N_\gamma\big) - 4V + 4
$
</p>

<b>Le nombre de vertex disparaît&nbsp;!</b> Les termes $3V + V - 4V$ s'annulent exactement, et il reste

<p style="text-align:center;">
$\displaystyle
D = 4 - \frac{3}{2}N_{\mathrm e} - N_\gamma
$
</p>

<b>Cette disparition de $V$ est le cœur de la renormalisabilité.</b> Elle signifie que le degré de divergence ne dépend <b>que des pattes externes</b>, et pas de l'ordre perturbatif. Aller à deux, trois ou cent boucles ne fait donc apparaître aucune nouvelle sorte de divergence&nbsp;: les mêmes trois contretermes suffiront à tous les ordres.

</details>

<b>Passons en revue les cas.</b> Il suffit d'énumérer les petites valeurs de $N_{\mathrm e}$ et $N_\gamma$, sachant que $N_{\mathrm e}$ est nécessairement pair (une ligne fermionique a deux bouts).

<div style="overflow-x:auto;">

| $N_{\mathrm e}$ | $N_\gamma$ | $D$ | fonction de Green | verdict |
|---|---|---|---|---|
| 0 | 1 | 3 | photon → vide | nulle par symétrie |
| 0 | 2 | 2 | self-énergie du photon | <b>divergente</b> |
| 0 | 3 | 1 | trois photons | nulle par symétrie |
| 0 | 4 | 0 | diffusion photon–photon | finie par Ward |
| 2 | 0 | 1 | self-énergie de l'électron | <b>divergente</b> |
| 2 | 1 | 0 | vertex | <b>divergente</b> |
| 2 | 2 | $-1$ | Compton | convergente |
| 4 | 0 | $-2$ | Møller | convergente |

</div>

Trois lignes du tableau demandent un commentaire, car elles montrent que le comptage n'est qu'un <b>premier tri</b>.

<b>Les $N_\gamma$ impairs s'annulent</b>, malgré leur degré positif. C'est le <b>théorème de Furry</b>, conséquence de l'invariance sous conjugaison de charge&nbsp;: la boucle fermionique parcourue dans un sens et dans l'autre donne deux contributions qui se compensent, avec un signe $(-1)^{N_\gamma}$. Nous avions rencontré cette symétrie $\mathrm C$ à la partie&nbsp;5.

<b>La diffusion photon–photon a $D = 0$</b>, donc paraît logarithmiquement divergente. Elle est en réalité <b>finie</b>, et c'est l'identité de Ward qui la sauve&nbsp;: la contrainte $q_\mu\mathcal M^\mu = 0$ force l'amplitude à contenir suffisamment de facteurs d'impulsion externe pour améliorer la convergence. C'est heureux, car un contreterme à quatre photons n'existe pas dans le lagrangien de QED, et la théorie ne serait pas renormalisable.

<b>Il ne reste donc que trois fonctions divergentes</b>, celles du tableau des contretermes. Exactement trois, et le comptage garantit qu'il n'en apparaîtra jamais d'autres.

<b>Et le degré de divergence dicte la forme des contretermes.</b> Voilà le second bénéfice du calcul. Un diagramme de degré $D$ engendre une divergence qui est un <b>polynôme de degré $D$</b> dans les impulsions externes&nbsp;: il faut donc autant de constantes que ce polynôme a de coefficients indépendants.

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li><b>Vertex</b>, $D = 0$&nbsp;: polynôme de degré 0, donc une <b>constante</b>. D'où le contreterme $\mathrm i Q|e|\gamma^\mu D$, avec son unique paramètre.</li>
<li><b>Self-énergie de l'électron</b>, $D = 1$&nbsp;: polynôme de degré 1 en $\not{\!\!p}$, donc <b>deux</b> constantes, un terme constant et un terme linéaire. D'où $\mathrm i(\not{\!\!p}\,B + A)$.</li>
<li><b>Self-énergie du photon</b>, $D = 2$&nbsp;: polynôme de degré 2 en $q$, ce qui autoriserait trois structures. Mais l'identité de Ward les réduit à <b>une seule</b>, comme nous allons le voir&nbsp;: d'où l'unique constante $C$ devant $(g^{\mu\nu}q^2 - q^\mu q^\nu)$.</li>
</ul>

<b>Les formes du tableau ne sont donc pas choisies&nbsp;: elles sont comptées.</b>

</div>



Les <b>conditions de renormalisation</b> fixent ensuite le sens physique de chaque paramètre. Avant de les écrire, comprenons bien à quelle question elles répondent.

<div id="theo">

<b>Le problème posé.</b> Les contretermes ont une <i>forme</i> imposée par les symétries, mais leurs constantes $A$, $B$, $C$, $D$ ne sont pas déterminées. Chacune doit absorber une partie divergente (cela fixe leur comportement à grande coupure) mais rien n'empêche d'y ajouter en plus n'importe quelle quantité <b>finie</b>.

Il manque donc, pour chaque contreterme, <b>une information venue de l'extérieur de la théorie</b>. Cette information est une <b>mesure</b>.

</div>

Voilà pourquoi ces conditions ne sont pas des conventions techniques mais le point de contact entre le formalisme et le laboratoire. Prenons-les une par une.

<div id="def">

<b>Condition sur l'électron</b>

<p style="text-align:center;">
$\displaystyle
\tilde\Sigma(\not{\!\!p} = m) = 0
$
</p>

</div>

<br>

<div id="preuve">

<b>Ce qu'elle dit</b> 

Le propagateur complet de l'électron, une fois toutes les corrections resommées, s'écrit

<p style="text-align:center;">
$\displaystyle
\tilde G(p) = \frac{\mathrm i}{\not{\!\!p} - m_0 - \tilde\Sigma(\not{\!\!p})}
$
</p>

où $m_0$ est la masse <b>nue</b>, celle écrite dans le lagrangien de départ. Son <b>pôle</b> se situe là où le dénominateur s'annule, donc <b>pas</b> en $\not{\\!\\!p} = m_0$, mais en une valeur déplacée par la self-énergie.

<b>Or le pôle du propagateur est la masse physique.</b> Nous l'avons établi à la partie&nbsp;11&nbsp;: un propagateur a son pôle sur la couche de masse de la particule qu'il propage, et c'est cette position que l'expérience mesure.

La condition $\tilde\Sigma(\not{\\!\\!p} = m) = 0$ impose donc simplement que le pôle se trouve en $\not{\\!\\!p} = m$, où $m$ est la masse <b>mesurée</b> de l'électron, $511$&nbsp;keV.

<b>Ce qu'on mesure au laboratoire</b><br>
On ne mesure jamais $m_0$, qui est d'ailleurs infinie&nbsp;: on mesure la masse de l'électron habillé de son nuage de photons virtuels, c'est-à-dire le seul électron qui existe. Le contreterme $A$ est précisément la quantité qui relie l'un à l'autre.

</div>

<br>

<div id="def">

<b>Condition sur le photon</b>

<p style="text-align:center;">
$\displaystyle
\tilde\Pi^{\mu\nu}(q = 0) = 0
$
</p>

</div>

<br>

<div id="preuve">

<b>Ce qu'elle dit</b> 

Par le même raisonnement, la self-énergie du photon déplace le pôle de son propagateur. Un pôle en $q^2 = M^2$ signifierait un photon de masse $M$. Exiger que la self-énergie s'annule en $q = 0$, c'est exiger que le pôle reste en $q^2 = 0$&nbsp;: <b>le photon est sans masse</b>.

<b>Ce qu'on mesure</b><br>
 La masse du photon est contrainte expérimentalement à moins de $10^{-18}$&nbsp;eV, par des mesures du champ magnétique planétaire et par la portée de l'interaction électromagnétique. C'est zéro à toutes fins pratiques.

<b>Mais cette condition est d'un statut différent des deux autres</b>. La masse nulle du photon n'est pas un fait qu'on ajuste&nbsp;: c'est une <b>conséquence de l'invariance de jauge</b>, garantie par la structure $(q^2g^{\mu\nu} - q^\mu q^\nu)$ que nous établirons dans un instant. Le facteur $q^2$ en préfacteur assure l'annulation en $q = 0$ automatiquement.

Cette condition n'ajoute donc pas d'information physique&nbsp;: elle enregistre une contrainte de symétrie. C'est une <b>vérification de cohérence</b> plutôt qu'une mesure, et si le calcul la violait, ce serait le signe d'une erreur ou d'une anomalie.

</div>

<br>

<div id="def">

<b>Condition sur le vertex</b>

<p style="text-align:center;">
$\displaystyle
\tilde\Gamma^\mu(p' - p = 0) = \gamma^\mu
$
</p>

</div>

<br>

<div id="preuve">

<b>Ce qu'elle dit</b>

Le vertex complet remplace le $\gamma^\mu$ nu des règles de Feynman. Exiger qu'il se réduise exactement à $\gamma^\mu$ à transfert nul, c'est exiger que l'intensité du couplage y vaille exactement $Q|e|$, la charge mesurée.

<b>Ce qu'on mesure, et où</b><br>
Le transfert nul, $q = p' - p = 0$, correspond à un photon de très grande longueur d'onde, donc à une mesure <b>à grande distance</b> de la charge. C'est le régime de l'électrostatique&nbsp;: la force de Coulomb entre deux charges éloignées, l'expérience de Millikan, la constante de structure fine $\alpha = 1/137{,}036$.

<b>Voilà le point crucial pour la suite&nbsp;:</b> cette valeur $1/137$ n'est pas «&nbsp;la&nbsp;» charge de l'électron dans l'absolu. C'est la charge <b>mesurée à transfert nul</b>, c'est-à-dire vue de loin, à travers tout le nuage d'écrantage. Le chapitre va montrer qu'elle est différente ailleurs.

</div>

<br>

<div id="theo">

<b>La logique d'ensemble</b>

La théorie ne prédit <b>ni</b> la masse de l'électron, <b>ni</b> la valeur de sa charge&nbsp;: ce sont deux nombres qu'on lui fournit, mesurés une fois pour toutes. Ce qu'elle prédit, c'est <b>tout le reste</b>.

</div>

Ce marché est bien plus avantageux qu'il n'y paraît. On donne deux nombres à la théorie&nbsp;; en échange, elle livre les sections efficaces de tous les processus, à toutes les énergies, avec une précision qui atteindra dix chiffres significatifs pour le moment magnétique. **Une théorie non renormalisable, elle, exigerait un nombre infini de mesures** avant de pouvoir prédire quoi que ce soit... et ne prédirait donc rien.

Chacune de ces conditions ne peut être imposée qu'<b>en un point</b>&nbsp;: la masse au pôle, la charge à transfert nul. Ailleurs, les fonctions de Green <b>bougent</b>, et plus rien ne vient les contraindre. C'est ce qui distingue la renormalisation d'un simple ménage&nbsp;: en fixant la théorie en un point, on obtient gratuitement des prédictions partout ailleurs.


<div id="preuve">

<b>Une liberté&nbsp;: le point de renormalisation</b>

Rien n'oblige à imposer la charge à transfert nul. On pourrait aussi bien la fixer à une échelle $\mu$ quelconque, en exigeant $\tilde\Gamma^\mu(q^2 = -\mu^2) = \gamma^\mu$. On mesurerait alors une <i>autre</i> valeur numérique, et l'on obtiendrait une <i>autre</i> paramétrisation de la même théorie.

<b>Aucune prédiction physique ne peut dépendre de ce choix</b>, puisqu'il s'agit d'un choix de convention. Cette exigence d'indépendance est loin d'être vide&nbsp;: c'est exactement elle qui engendre les équations du <b>groupe de renormalisation</b>, rencontrées à la partie&nbsp;11 et que nous retrouverons plus bas.

En pratique, on choisit le point le plus commode. À transfert nul pour QED, où l'électrostatique fournit une mesure très précise&nbsp;; à une échelle $\mu$ élevée en chromodynamique, où le couplage à transfert nul serait démesuré.

</div>


<br>

### La self-énergie du photon&nbsp;: le vide est un diélectrique

Concentrons-nous sur le photon, dont le cas est le plus riche.
{{%notice note "Le plan"%}}
<ul style="margin-top:-0.5em; margin-bottom:0em;">
<li>On identifie ce que contient la self-énergie du photon (une paire virtuelle)&nbsp;;</li>
<li>on laisse l'identité de Ward réduire ses seize composantes à une <b>unique fonction scalaire</b>&nbsp;;</li>
<li> on resomme le propagateur par l'équation de Dyson&nbsp;;</li>
<li>on empaquette le résultat dans une <b>charge dépendant de l'échelle</b>&nbsp;;</li>
<li> et on va lire la conséquence dans les niveaux de l'hydrogène.</li>
</ul>
{{%/notice%}}

#### Ce que contient $\tilde\Pi^{\mu\nu}$

La self-énergie du photon rassemble tous les diagrammes 1PI qu'on peut insérer dans une ligne de photon. À une boucle, il n'y en a qu'un, et son contenu physique est spectaculaire&nbsp;: **le photon se transforme momentanément en une paire électron–positron, qui se recombine ensuite en photon**.

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/paireelpos.png" style="box-shadow:none;background:none;">
</div>

Autrement dit, le photon arrache une paire au vide et la lui rend. C'est ce qu'on appelle la **polarisation du vide**.

<!-- FIGURE à redessiner (d'après fig. 41.5 de L&B) : ligne de photon ondulée verticale portant q, interrompue par une boucle fermionique circulaire : l'électron tourne avec p+q sur un demi-cercle et p sur l'autre, les deux vertex étiquetés mu et nu. Ajouter des flèches sur la boucle pour marquer le sens du flux fermionique, et rappeler en annotation le facteur (-1) de boucle fermionique. Légende : « La polarisation du vide à une boucle : le photon devient brièvement une paire électron-positron. » -->

#### L'identité de Ward impose la structure tensorielle

Une difficulté nous attend, que le cas scalaire n'avait pas&nbsp;: ici, $\tilde\Pi^{\mu\nu}$ porte <b>deux indices</b>. Avant de pouvoir resommer quoi que ce soit, il faut savoir quelle est sa structure tensorielle.

C'est le moment où l'identité de Ward, démontrée à la partie précédente, va faire tout le travail.

<div id="preuve">

<b>Ce que dit Ward</b><br>
Nous avons établi que la contraction d'une amplitude avec l'impulsion du photon qui s'y attache donne zéro&nbsp;: $q_\mu\mathcal M^\mu = 0$. Appliquée à la self-énergie du photon, cette identité donne

<p style="text-align:center;">
$\displaystyle
q_\nu\,\tilde\Pi^{\mu\nu}(q) = 0
$
</p>

<b>Comment en tirer la structure&nbsp;?</b><br>
Cherchons la forme la plus générale possible pour $\tilde\Pi^{\mu\nu}$. C'est un tenseur à deux indices, ne dépendant que du quadrivecteur $q$&nbsp;: il ne peut donc être construit qu'avec les deux seuls objets disponibles, $g^{\mu\nu}$ et $q^\mu q^\nu$. Écrivons donc

<p style="text-align:center;">
$\displaystyle
\tilde\Pi^{\mu\nu}(q) = A(q^2)\,g^{\mu\nu} + B(q^2)\,q^\mu q^\nu
$
</p>

<b>Contractons avec $q_\nu$</b>, et exigeons zéro&nbsp;:

<p style="text-align:center;">
$\displaystyle
A\,q^\mu + B\,q^\mu q^2 = 0
\quad\Longrightarrow\quad
A = -B\,q^2
$
</p>

<b>Il ne reste donc qu'une seule fonction inconnue.</b> En posant $B = -\tilde\Pi(q)$, on obtient la forme annoncée&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\Pi^{\mu\nu}(q) = \big(q^2 g^{\mu\nu} - q^\mu q^\nu\big)\,\tilde\Pi(q)
$
</p>

<b>Ce qui vient d'être gagné est considérable.</b> D'un objet à seize composantes, l'invariance de jauge a fait une <b>unique fonction scalaire</b> $\tilde\Pi(q)$. Toute la polarisation du vide tient dans ce seul nombre.

</div>

<b>Et le facteur $q^2$ en préfacteur est capital.</b> Il garantit que $\tilde\Pi^{\mu\nu}$ <b>s'annule en $q = 0$</b>, quelle que soit la valeur de $\tilde\Pi(0)$.

Or une masse de photon apparaîtrait précisément comme un terme non nul en $q = 0$ dans la self-énergie. 

<div id="theo">

<b>L'invariance de jauge interdit donc au photon de prendre une masse</b>, et cela sans qu'on ait rien à imposer.

</div>

Nous voici en mesure de resommer, puisque la self-énergie se réduit désormais à un scalaire multipliant une structure tensorielle fixée.


#### La resommation&nbsp;: du propagateur nu au propagateur habillé

Le propagateur nu du photon, celui de la partie précédente, vaut $-\mathrm{i}g_{\mu\nu}/q^2$. Que devient-il quand on tient compte de toutes les insertions possibles&nbsp;?

<div id="preuve">

C'est exactement la situation de l'<b>équation de Dyson</b>, rencontrée à la partie&nbsp;6 pour la fonction de Green et à la partie&nbsp;11 pour la self-énergie.

Un diagramme de propagation quelconque est un collier&nbsp;: propagateur nu, puis éventuellement une perle 1PI, puis un propagateur nu, puis éventuellement une autre perle, et ainsi de suite. En sommant sur le <b>nombre de perles</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde D = \tilde D_0 + \tilde D_0\,\Sigma\,\tilde D_0 + \tilde D_0\,\Sigma\,\tilde D_0\,\Sigma\,\tilde D_0 + \cdots
$
</p>

où $\Sigma$ désigne l'insertion, c'est-à-dire la perle. C'est une <b>série géométrique</b> de raison $\Sigma\tilde D_0$, dont on connaît la somme. Il est commode de l'écrire sous sa forme <b>inverse</b>, beaucoup plus parlante&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde D = \frac{\tilde D_0}{1 - \Sigma\,\tilde D_0}
\qquad\Longleftrightarrow\qquad
\tilde D^{-1} = \tilde D_0^{-1} - \Sigma
$
</p>

<b>Sous cette forme, la resommation devient une simple soustraction</b>&nbsp;: l'inverse du propagateur habillé est l'inverse du propagateur nu, diminué de la self-énergie. C'est cette écriture que représente le schéma ci-dessous.

<b>Que vaut $\Sigma$ ici&nbsp;?</b> C'est là que la structure tensorielle établie à l'instant intervient. Les perles sont enfilées le long d'une ligne de photon, donc contractées de part et d'autre avec des propagateurs&nbsp;; le terme en $q^\mu q^\nu$, contracté avec des courants conservés, ne contribue jamais. Il ne reste que la partie transverse, dont le coefficient est

<p style="text-align:center;">
$\displaystyle
\Sigma \;\longrightarrow\; q^2\,\tilde\Pi(q)
$
</p>

<b>Voilà d'où vient le facteur $q^2$</b> qui accompagne le blob dans le schéma&nbsp;: il n'est pas dans la self-énergie elle-même, il est extrait de sa structure tensorielle par l'identité de Ward. Le blob représente le <i>scalaire</i> $\tilde\Pi$, et le $q^2$ est écrit à côté.

<b>Voilà aussi pourquoi on ne calcule que les diagrammes 1PI</b>&nbsp;: tout le reste s'obtient par cette somme, sans aucun calcul supplémentaire. C'est le seul intérêt de la notion, mais il est décisif.

</div>

<!-- FIGURE à redessiner (d'après la figure de resommation de L&B, chapitre 41) : l'équation de Dyson pour le photon, en deux lignes d'équation diagrammatique. Lignes de photon ondulées verticales.
PREMIÈRE LIGNE. Membre de gauche : une ligne ondulée portant un blob HACHURÉ, annoté « propagateur habillé ». Signe égal, puis la somme : une ligne ondulée nue ; plus une ligne portant un blob « 1PI » ; plus une ligne portant DEUX blobs « 1PI » séparés par un morceau de ligne ondulée ; plus « ... ».
SECONDE LIGNE. Signe égal, puis une grande fraction : au numérateur « 1 » ; au dénominateur, entre grandes parenthèses, une ligne ondulée nue affectée de l'exposant -1, moins un blob « 1PI » suivi de « q^2 ».
Ajouter une accolade sous le « q^2 » avec l'annotation : « extrait de la structure tensorielle par l'identité de Ward : le blob est le scalaire Pi ».
Légende : « La resommation en image. Chaque terme ajoute une perle ; la somme est géométrique, et sa forme inverse la réduit à une soustraction. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/dysonphoton.png" style="box-shadow:none;background:none;">
</div>



En reportant $\tilde D_0^{-1} = \mathrm{i}\\,q^2$ (au facteur $g_{\mu\nu}$ près) dans la forme inverse, le $q^2$ se met en facteur et il vient&nbsp;:

<div id="theo">

<b>Propagateur habillé du photon</b>

<p style="text-align:center;">
$\displaystyle
\tilde D_{\mu\nu}(q) = \frac{-\mathrm{i}\,g_{\mu\nu}}{q^2\big[1 - \tilde\Pi(q)\big]}
$
</p>

Le pôle reste en $q^2 = 0$&nbsp;: le photon demeure sans masse. La condition de renormalisation $\tilde\Pi(0) = 0$, imposée par le contreterme $C$, exprime cette exigence.

</div>


#### Où est la physique&nbsp;? La charge se met à dépendre de l'échelle

Voici l'étape la plus astucieuse du chapitre, et elle mérite d'être suivie pas à pas.

<div id="preuve">

<b>L'observation de départ</b><br>
Un propagateur de photon n'apparaît jamais seul dans une amplitude&nbsp;: il est toujours <b>encadré par deux vertex</b>, puisqu'un photon doit bien être émis puis absorbé. Or chaque vertex apporte un facteur $\lvert e_0\rvert$, la charge <b>nue</b>.

<b>L'idée</b><br>
Plutôt que de garder ces deux facteurs à part, <b>empaquetons-les avec le propagateur</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
e_0^2\;\times\;\frac{-\mathrm{i}g_{\mu\nu}}{q^2\big[1 - \tilde\Pi(q)\big]}
\;=\;
\frac{-\mathrm{i}g_{\mu\nu}}{q^2}\;\times\;\underbrace{\frac{e_0^2}{1 - \big[\tilde\Pi(q) - \tilde\Pi(0)\big]}}_{\textstyle \text{à lire comme } e(q)^2}
$
</p>

<b>Deux choses viennent de se produire.</b> D'une part, nous avons retrouvé un propagateur d'apparence <b>nue</b>, en $1/q^2$. D'autre part, toute la correction a été absorbée dans un facteur qui a la place et la dimension d'un <b>carré de charge</b>.

<b>Pourquoi la soustraction $\tilde\Pi(q) - \tilde\Pi(0)$&nbsp;?</b> C'est la condition de renormalisation en action. En $q = 0$, la parenthèse doit valoir exactement $e^2$, la charge mesurée&nbsp;; la soustraction assure que c'est bien le cas, et c'est elle qui absorbe la divergence, laquelle est indépendante de $q$.

</div>

<br>

<div id="theo">

<b>Charge électrique courante</b>

<p style="text-align:center;">
$\displaystyle
\lvert e(q)\rvert = \frac{\lvert e_0\rvert}{\sqrt{1 - \big[\tilde\Pi(q) - \tilde\Pi(0)\big]}}
$
</p>

La «&nbsp;constante&nbsp;» de couplage électromagnétique <b>dépend du transfert d'impulsion</b> du photon qui véhicule la force.

</div>

Ce résultat est si contraire à l'intuition qu'il faut en donner l'image physique.

<div id="theo">

<b>Le vide est un diélectrique.</b>

Un diélectrique ordinaire, plongé dans le champ d'une charge, se <b>polarise</b>&nbsp;: ses molécules s'orientent en dipôles, la face proche de la charge présentant le signe opposé. Vu de loin, on ne voit plus la charge nue mais la charge <b>écrantée</b>, affaiblie par ce cortège.

Le vide de QED fait exactement cela. Les paires virtuelles $e^+e^-$ se comportent comme des dipôles fugaces, orientés par le champ de la charge centrale, et l'habillent d'un nuage d'écrantage.

<b>D'où la conclusion&nbsp;:</b> sonder à grand $\lvert q\rvert$, c'est regarder de <b>près</b>, donc pénétrer à l'intérieur du nuage, donc voir une charge <b>plus grande</b>. La charge effective croît quand on s'approche.

</div>

<!-- FIGURE à redessiner (d'après fig. 41.6 de L&B) : une charge centrale (signe moins encerclé) entourée d'une couronne de petits dipôles ovales (chaque ovale contient un + et un -), tous orientés avec le + vers le centre. AJOUT par rapport au livre : tracer deux cercles en tirets concentriques de rayons différents, le petit à l'intérieur du nuage de dipôles et le grand à l'extérieur, annotés respectivement « sonde à grand |q| : voit la charge presque nue » et « sonde à petit |q| : voit la charge écrantée ». Légende : « Écrantage de la charge par les paires virtuelles : le vide est un diélectrique. La charge mesurée dépend de la distance à laquelle on la mesure. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/chargeecrantee.png" style="box-shadow:none;background:none;">
</div>


#### Le calcul, et sa conséquence mesurable

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/boucleauneboucle.png" style="box-shadow:none;background:none;">
</div>

L'amplitude à une boucle se lit sur le diagramme, avec deux ingrédients propres aux boucles fermioniques&nbsp;: un facteur $(-1)$, et une <b>trace</b> sur les indices de spineurs, puisque la ligne de fermion se referme sur elle-même&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathrm{i}\tilde\Pi^{\mu\nu}(q) = (-1)\left(-\mathrm{i}e_0\right)^2\int\frac{\mathrm{d}^4p}{(2\pi)^4}\,\operatorname{Tr}\left(\gamma^\mu\,\frac{\mathrm{i}}{\not{\!\!p} - m}\,\gamma^\nu\,\frac{\mathrm{i}}{\not{\!\!p} + \not{\!\!q} - m}\right)
$
</p>

Le calcul suit la même mécanique que celui qui sera mené pas à pas pour le vertex en fin de chapitre&nbsp;: trace de matrices $\gamma$, fusion des deux propagateurs par un paramètre de Feynman $x$, décalage d'impulsion, extraction de la divergence logarithmique, absorbée par le contreterme $C$. Le résultat renormalisé tient en une ligne&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\Pi(q) - \tilde\Pi(0) = -\frac{e_0^2}{2\pi^2}\int_0^1\mathrm{d}x\;(x - x^2)\,\ln\!\left(\frac{m^2}{m^2 - (x - x^2)\,q^2}\right)
$
</p>

<div id="preuve">

Trois remarques pour lire cette formule&nbsp;:

L'intégrale sur $x$ est celle des <b>paramètres de Feynman</b> de la partie&nbsp;11&nbsp;: elle vient de la fusion des deux propagateurs de la boucle.

Le <b>logarithme</b> est la signature d'une divergence logarithmique, déjà soustraite ici&nbsp;: c'est le $-\tilde\Pi(0)$ qui a transformé un $\ln\Lambda^2$ divergent en un rapport fini.

Et la <b>dépendance en $q^2$</b> ne survit que dans le dénominateur du logarithme. À $q^2 = 0$, l'argument vaut 1, le logarithme s'annule, et la charge courante se réduit bien à la charge mesurée.

</div>

Dans la limite <b>statique</b> ($q^2 = -\boldsymbol q^2$) et à petit $\lvert\boldsymbol q\rvert$, le propagateur corrigé, ramené en espace direct par transformée de Fourier, livre le potentiel créé par un électron&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
V(\boldsymbol r) = -\left\{\frac{\alpha}{\lvert\boldsymbol r\rvert} + \frac{4\alpha^2}{15\,m^2}\,\delta^{(3)}(\boldsymbol r)\right\}
$
</p>

Coulomb, <b>plus une correction de contact</b>.

</div>

Le second terme est une distribution de Dirac&nbsp;: il n'agit qu'à l'origine. Cela traduit exactement l'image du nuage&nbsp;: **l'écrantage ne se fait sentir que si l'on pénètre dedans**. C'est un artefact de la limite à petit $\lvert\boldsymbol q\rvert$&nbsp;; la version exacte, le **potentiel d'Uehling**, est une correction de courte portée s'étendant sur une longueur d'onde de Compton $\sim 1/m$.

Et ceci se mesure.

Dans l'hydrogène, seuls les états $l = 0$ ont une fonction d'onde non nulle à l'origine, et tâtent donc le terme de contact. **L'orbitale $2S_{1/2}$ est déplacée, l'orbitale $2P_{1/2}$ ne l'est pas**, alors que la théorie de Dirac les prédisait exactement dégénérées.

<div id="preuve">
<details>
<summary>Le décalage, jusqu'au nombre&nbsp;:</summary>

Le terme de contact se traite en perturbation au premier ordre&nbsp;; la distribution de Dirac ne laisse survivre que la valeur de la fonction d'onde à l'origine&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta E = \left\langle -\frac{4\alpha^2}{15m^2}\,\delta^{(3)}(\boldsymbol r)\right\rangle = -\frac{4\alpha^2}{15m^2}\,\lvert\psi(0)\rvert^2
$
</p>

Pour l'orbitale $2S$ de l'hydrogène, $\lvert\psi_{2S}(0)\rvert^2 = \dfrac{1}{8\pi a_0^3}$, et le rayon de Bohr vaut $a_0 = 1/(\alpha m)$ en unités naturelles, d'où $\lvert\psi_{2S}(0)\rvert^2 = \dfrac{\alpha^3m^3}{8\pi}$. En reportant, les puissances de $m$ se simplifient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta E = -\frac{4\alpha^2}{15m^2}\cdot\frac{\alpha^3m^3}{8\pi} = -\frac{\alpha^5\,m}{30\pi}
$
</p>

Un résultat d'ordre $\alpha^5\\,mc^2$&nbsp;: la structure fine est en $\alpha^4 mc^2$, cet effet est donc plus petit d'un facteur $\alpha$, ce qui annonce déjà l'ordre de grandeur du mégahertz. Numériquement, avec $\alpha^5 = 2{,}069\times10^{-11}$ et $mc^2 = 511{,}0$&nbsp;keV&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta E = -1{,}122\times10^{-7}\ \mathrm{eV}
\quad\Longrightarrow\quad
\Delta\nu = \frac{\Delta E}{h} = -27{,}1\ \mathrm{MHz}
$
</p>

</details>
</div>

La polarisation du vide décale donc la transition $2S_{1/2} \to 2P_{1/2}$ de $-27$&nbsp;MHz. C'est une petite partie du **déplacement de Lamb** total ($+1057$&nbsp;MHz, dominé par la self-énergie de l'électron), et de signe opposé à l'ensemble&nbsp;; mais c'est une partie calculée et vérifiée séparément.

<div id="theo">

La mesure de Lamb et Retherford en 1947 fut l'événement déclencheur de toute cette histoire. Elle établissait qu'une dégénérescence prédite <b>exactement</b> par l'équation de Dirac était levée, donc qu'il fallait quelque chose de plus. C'est elle qui convainquit les physiciens de prendre les photons virtuels au sérieux, et qui lança la course à la renormalisation.

</div>

<br>

### Le groupe de renormalisation, et la charge qui varie avec l'échelle

Nous avons une charge qui dépend du transfert d'impulsion. Le langage naturel pour décrire cette dépendance est celui du **groupe de renormalisation**, construit à la partie&nbsp;11.

<div id="def">

La <b>fonction $\beta$</b> mesure la vitesse à laquelle un couplage varie quand on change l'échelle d'observation $\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\beta = \mu\,\frac{\mathrm{d}\lvert e\rvert}{\mathrm{d}\mu}
$
</p>

</div>

<br>

<div id="preuve">

Elle se calcule en trois pas à partir de la charge courante.

<b>Pas 1&nbsp;: la limite de grand transfert.</b> Pour $\lvert q^2\rvert = \mu^2 \gg m^2$, l'argument du logarithme de la boucle est dominé par le terme en $q^2$&nbsp;: le logarithme devient $\ln\!\big(x(1-x)\,\mu^2/m^2\big) \simeq \ln(\mu^2/m^2)$ à des constantes finies près, et sort de l'intégrale. Celle-ci se réduit alors à $\int_0^1 x(1-x)\,\mathrm dx = \frac{1}{6}$, d'où

<p style="text-align:center;">
$\displaystyle
\tilde\Pi(\mu) - \tilde\Pi(0) \simeq \frac{e^2}{12\pi^2}\,\ln\frac{\mu^2}{m^2}
$
</p>

<b>Pas 2&nbsp;: reporter dans la charge courante</b> et développer la racine au premier ordre&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lvert e(\mu)\rvert \simeq \lvert e\rvert\left(1 + \frac{e^2}{24\pi^2}\,\ln\frac{\mu^2}{m^2}\right)
$
</p>

<b>Pas 3&nbsp;: dériver</b> par rapport à $\ln\mu$, le $\ln\mu^2$ apportant un facteur $2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\beta = \mu\,\frac{\mathrm{d}\lvert e\rvert}{\mathrm{d}\mu} = +\frac{\lvert e\rvert^3}{12\pi^2}
$
</p>

</div>

<br>


<b>Le signe plus est l'information capitale.</b>

<div id="theo">

Il dit que le couplage électromagnétique <b>croît</b> avec l'échelle d'énergie, c'est-à-dire quand on regarde de plus près.

</div>

<b>C'est cohérent avec l'image de l'écrantage</b>&nbsp;: s'approcher de l'électron, c'est traverser le nuage de paires et voir la charge grossir. Les deux descriptions, diélectrique et groupe de renormalisation, disent la même chose dans deux langages.


Confrontons à l'expérience, mais soigneusement, car il y a un piège instructif.

<div id="preuve">
<details>
<summary>Ce que prédit la boucle d'électron seule, et pourquoi cela ne suffit pas&nbsp;:</summary>

En intégrant la fonction $\beta$, on obtient la forme la plus commode, qui est linéaire en $\ln\mu$ pour l'<i>inverse</i> du couplage&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{1}{\alpha(\mu)} = \frac{1}{\alpha(m_e)} - \frac{2}{3\pi}\ln\frac{\mu}{m_e}
$
</p>

Au pôle du $Z^0$, $\mu = M_Z = 91{,}19$&nbsp;GeV, et $\ln(M_Z/m_e) = 12{,}09$, d'où

<p style="text-align:center;">
$\displaystyle
\frac{1}{\alpha(M_Z)} = 137{,}04 - \frac{2}{3\pi}\times 12{,}09 = 137{,}04 - 2{,}57 = 134{,}5
$
</p>

Or la mesure donne $\alpha^{-1}(M_Z) \simeq 128{,}9$. <b>L'écart est réel et n'est pas une imprécision&nbsp;: c'est un manque de physique.</b>

La boucle d'électron n'est en effet pas la seule&nbsp;: <i>toute</i> particule chargée peut apparaître dans la boucle de polarisation du vide, à condition que l'énergie sondée dépasse le seuil de création de sa paire. Entre $m_e$ et $M_Z$, il faut donc ajouter le muon, le tau, et les cinq quarks accessibles (chacun comptant trois fois pour la couleur, et avec sa charge au carré). La fonction $\beta$ devient

<p style="text-align:center;">
$\displaystyle
\mu\frac{\mathrm{d}\alpha}{\mathrm{d}\mu} = \frac{2\alpha^2}{3\pi}\sum_f N_c^{(f)}\,Q_f^2
$
</p>

la somme portant sur les fermions déjà «&nbsp;allumés&nbsp;» à l'échelle $\mu$. On comprend alors que la fonction $\beta$ <b>compte les degrés de liberté chargés</b> de la théorie, et que sa mesure est une façon de les recenser.

</details>
</div>

Le résultat de la confrontation est le suivant. La boucle d'électron seule prédit $\alpha^{-1}(M_Z) = 134{,}5$&nbsp;; en ajoutant tous les leptons et quarks accessibles, on tombe sur la valeur mesurée au LEP par diffusion Bhabha, $\alpha^{-1}(M_Z) = 128{,}9$. Numériquement, la «&nbsp;constante&nbsp;» de structure fine passe donc de $1/137$ aux grandes distances à environ $1/129$ à l'échelle électrofaible&nbsp;: un effet de six pour cent, mesuré, et prédit à condition de compter correctement les particules.

{{%notice note "Aparté : le signe opposé qui vaut un prix Nobel"%}}
Retenir le raisonnement, car il se retourne spectaculairement ailleurs. En chromodynamique quantique, les gluons portent eux-mêmes la charge de couleur, et leurs boucles contribuent à la fonction $\beta$ avec le signe <b>moins</b>, qui l'emporte&nbsp;: le couplage fort <b>décroît</b> à courte distance. C'est la liberté asymptotique (Gross, Politzer, Wilczek, Nobel 2004)&nbsp;: les quarks sont quasi libres au cœur du proton et inséparables de loin. Anti-écrantage&nbsp;: le vide de QCD se comporte comme un milieu paramagnétique plutôt que diélectrique. Même mathématique, physique inversée, et l'on comprend pourquoi le signe de $\beta$ est la première chose qu'on calcule dans une théorie de jauge.
{{%/notice%}}

### Les corrections de vertex et le $g$ de l'électron

Second grand résultat, côté vertex. Rappelons d'abord pourquoi ce nombre-là est un juge de paix.

<div id="def">

Le <b>moment magnétique</b> de l'électron est l'aimant élémentaire porté par son spin. Il lui est proportionnel, et le coefficient sans dimension de cette proportionnalité est le <b>facteur $g$</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{\boldsymbol{\mu}} = g\left(\frac{Q\lvert e\rvert}{2m}\right)\hat{\boldsymbol{S}}
\qquad\text{avec } Q = -1 \text{ pour l'électron}
$
</p>

</div>

La partie&nbsp;13 a montré le tour de force de Dirac&nbsp;: là où la mécanique quantique non relativiste devait postuler $g = 2$, son équation le <b>prédit</b>. La question de cette section est alors naturelle&nbsp;: le nuage de photons virtuels qui habille tout électron modifie-t-il cet aimant&nbsp;? La réponse de Schwinger (1948) est oui&nbsp;: la possibilité d'émettre et de réabsorber des photons virtuels déforme le vertex électron–photon d'une manière mesurable, et fait passer $g$ de $2$ à $2 + \frac{\alpha}{\pi}$, sans aucun paramètre libre.

{{%notice note "Le plan en une phrase"%}}
On définit l'objet qui généralise le vertex nu (la fonction de vertex)&nbsp;; on montre par un argument de <b>moment cinétique</b> qu'il tient tout entier dans deux fonctions scalaires, les facteurs de forme $F_1$ et $F_2$&nbsp;; on relie $g$ à $F_2(0)$&nbsp;; et le calcul de $F_2(0)$ occupe la section suivante.
{{%/notice%}}

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vertelphot.png" style="box-shadow:none;background:none;">
</div>

<div id="def">

La <b>fonction de vertex</b> $-\mathrm{i}Q\lvert e\rvert\\,\tilde{\Gamma}^\mu(p, p')$ généralise le vertex nu&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
-\mathrm{i}Q\lvert e\rvert\,\tilde{\Gamma}^\mu(p, p') = \sum \left( \begin{array}{c} \text{Toutes les insertions amputées avec une ligne} \\ \text{de fermion entrante, une ligne de fermion} \\ \text{sortante et une ligne de photon.} \end{array} \right)
$
</p>

«&nbsp;Amputées&nbsp;» signifie que les propagateurs des trois pattes externes sont ôtés&nbsp;: on ne garde que le cœur de l'interaction, la propagation des pattes étant déjà traitée par les self-énergies.

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/decgreenvert.png" style="box-shadow:none;background:none;">
</div>

À l'ordre le plus bas, la somme se réduit à son premier terme, $\tilde{\Gamma}^\mu = \gamma^\mu$&nbsp;: on retrouve les règles de Feynman. Tout l'enjeu est de savoir quelle forme les corrections ont le droit de prendre.

#### Combien de fonctions faut-il pour décrire le vertex&nbsp;?

Ici, le <b>moment cinétique</b> mène la danse. Par symétrie de croisement, le vertex peut se lire «&nbsp;verticalement&nbsp;»&nbsp;: un photon hors couche de masse qui se matérialise en une paire électron–positron. La question «&nbsp;combien de fonctions pour décrire le vertex&nbsp;?&nbsp;» devient alors&nbsp;: <b>de combien de façons la paire peut-elle porter les nombres quantiques du photon&nbsp;?</b>

<div id="def">

<b>La notation $J^P$, et les nombres quantiques du photon</b> 

On étiquette un état par son moment cinétique total $J$ et sa parité $P$, sa valeur propre sous le renversement des coordonnées d'espace. Pour un système de deux particules, on précise aussi le moment orbital relatif $L$ et le spin total $S$ par la notation spectroscopique $^{2S+1}L_J$, où $L = 0, 1, 2, \ldots$ se note $S, P, D, \ldots$ comme en physique atomique.

Le photon porte $J^P = 1^-$&nbsp;: spin $1$, parce que son champ $A^\mu$ est un quadrivecteur, qui se transforme sous les rotations comme un objet de moment cinétique $1$&nbsp;; parité $-1$, parce que $\boldsymbol{A}$ est un vecteur <b>polaire</b>, qui change de signe avec les coordonnées, comme le champ électrique qui en dérive.

</div>

La paire $e^+e^-$, elle, se décrit par son moment orbital $L$ et par son spin total $S$, qui vaut $0$ ou $1$ pour deux spins $1/2$. Deux règles fixent les configurations admises&nbsp;:

<ul>
<li>le moment cinétique total de la paire, obtenu en composant $L$ et $S$, doit valoir $J = 1$, celui du photon&nbsp;;</li>
<li>sa parité doit valoir $-1$, celle du photon. Or elle s'écrit $P = (-1)^{L+1}$&nbsp;: le facteur orbital $(-1)^L$ habituel des harmoniques sphériques, multiplié par un signe supplémentaire $-1$, car la théorie de Dirac attribue à un fermion et à son antifermion des <b>parités intrinsèques opposées</b>. Il faut donc $L$ <b>pair</b>.</li>
</ul>

Il n'y a plus qu'à énumérer les couples $(L, S)$ candidats&nbsp;:

<div style="overflow-x:auto;">

| configuration | $L$ | $S$ | $J = 1$ possible&nbsp;? | $P = (-1)^{L+1}$ | verdict |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $^3S_1$ | $0$ | $1$ | oui | $-1$ | <b>permise</b> |
| $^1P_1$ | $1$ | $0$ | oui | $+1$ | exclue |
| $^3P_1$ | $1$ | $1$ | oui | $+1$ | exclue |
| $^3D_1$ | $2$ | $1$ | oui | $-1$ | <b>permise</b> |

</div>

<br>

<div id="preuve">

<details>
<summary>Un contrôle par la conjugaison de charge&nbsp;:</summary>

Le photon possède un troisième nombre quantique, sa <b>parité de charge</b> $C = -1$&nbsp;: le champ électromagnétique change de signe quand on échange toutes les charges avec les anticharges. C'est la symétrie $\mathrm C$ de la partie&nbsp;5, celle-là même qui fonde le théorème de Furry rencontré plus haut.

Pour une paire fermion–antifermion, on montre que $C = (-1)^{L+S}$. Les deux configurations retenues donnent bien $C = (-1)^{0+1} = (-1)^{2+1} = -1$&nbsp;: le tri opéré par la parité est confirmé, sans exclusion nouvelle.

</details>

</div>

<br>

<div id="theo">

<b>Deux configurations, donc deux fonctions.</b> La paire ne peut porter les nombres quantiques du photon que de deux façons indépendantes, l'onde $S$ et l'onde $D$. Décrire complètement le vertex exige donc, et il suffit, de <b>deux fonctions scalaires</b> de $q$. Avant tout calcul, le dénombrement des états a fixé la taille de la réponse.

</div>

On range ces deux fonctions dans la base suivante, qui n'est pas la traduction terme à terme des ondes $S$ et $D$, mais une base équivalente et bien plus commode pour le calcul&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\tilde{\Gamma}^\mu(p, p') = \gamma^\mu\,F_1(q) + \frac{\mathrm{i}\sigma^{\mu\nu}q_\nu}{2m}\,F_2(q)
\qquad\text{avec } q^\mu = p'^\mu - p^\mu \text{ et } \sigma^{\mu\nu} = \frac{\mathrm{i}}{2}[\gamma^\mu, \gamma^\nu]
$
</p>

$F_1$ est le <b>facteur de forme de Dirac</b>, $F_2$ le <b>facteur de forme de Pauli</b>.

</div>

<br>

<div id="preuve">

<details>
<summary>Le même dénombrement, vu du formalisme&nbsp;:</summary>

On peut retrouver ce «&nbsp;deux&nbsp;» en construisant la forme la plus générale du vertex. Entre spineurs sur couche de masse, une fois les équations de Dirac utilisées pour éliminer $\not{\\!\\!p}$ et $\not{\\!\\!p}'$, il ne reste que trois structures respectant la parité (celles qui contiennent $\gamma^5$, comme $\gamma^\mu\gamma^5$, sont interdites puisque QED conserve la parité)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\Gamma^\mu = \gamma^\mu\,A(q^2) + (p'^\mu + p^\mu)\,B(q^2) + q^\mu\,C(q^2)
$
</p>

L'identité de Ward, $q_\mu\\,\bar u(p')\tilde\Gamma^\mu u(p) = 0$, fait alors le ménage&nbsp;:

<ul>
<li>$q_\mu\,\bar u(p')\gamma^\mu u(p) = \bar u(p')(\not{\!\!p}' - \not{\!\!p})u(p) = (m - m)\,\bar u(p')u(p) = 0$&nbsp;: la première structure passe automatiquement&nbsp;;</li>
<li>$q\cdot(p' + p) = p'^2 - p^2 = m^2 - m^2 = 0$&nbsp;: la deuxième aussi&nbsp;;</li>
<li>$q_\mu\,q^\mu = q^2 \neq 0$&nbsp;: la troisième est éliminée, donc $C = 0$.</li>
</ul>

Restent deux fonctions libres, comme le moment cinétique l'annonçait. La décomposition de Gordon, établie un peu plus bas, convertit la structure $(p'^\mu + p^\mu)$ en combinaison de $\gamma^\mu$ et de $\sigma^{\mu\nu}q_\nu$&nbsp;: on retombe exactement sur la base $(F_1, F_2)$.

</details>

</div>

<b>Ce que chaque facteur mesure.</b> $F_1$ généralise la charge&nbsp;: il décrit la <b>distribution de charge</b> que le photon voit, et $F_1(0)$ en est la valeur totale, en unités de $Q\lvert e\rvert$. $F_2$ est la nouveauté&nbsp;: une structure de couplage <b>magnétique</b> absente du vertex nu. C'est exactement le terme que Pauli avait proposé d'ajouter à la main à l'équation de Dirac pour décrire le proton, dont le moment magnétique, $g_p \simeq 5{,}59$, n'a rien à voir avec $2$&nbsp;: un gros $F_2$ trahit une <b>structure interne</b>. Celle du proton est faite de quarks et de gluons&nbsp;; celle de l'électron sera faite de son propre nuage de photons virtuels, et c'est pourquoi son $F_2$ sera minuscule, d'ordre $\alpha$.

Précisons enfin le statut des valeurs à transfert nul, car il porte toute la logique de la prédiction. À l'ordre le plus bas, $\tilde\Gamma^\mu = \gamma^\mu$&nbsp;: donc $F_1 = 1$ et $F_2 = 0$, à tout $q$. Aux ordres suivants, les deux facteurs reçoivent des corrections, mais elles n'ont pas le même statut&nbsp;:

<ul>
<li>$F_1(0) = 1$ reste vrai <b>par définition</b>&nbsp;: c'est la condition de renormalisation du vertex, celle qui définit la charge mesurée à transfert nul, et le contreterme $D$ est ajusté pour cela&nbsp;;</li>
<li>$F_2(0)$, lui, n'est fixé par rien. Le zéro de l'ordre le plus bas peut bouger, et toute valeur non nulle sera une <b>prédiction</b>, pas un ajustement.</li>
</ul>

#### Du vertex au moment magnétique

Le lien entre ces facteurs de forme et le $g$ mesurable se fait en quatre pas. Annonçons d'abord le résultat, qui est d'une simplicité désarmante.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
g = 2\left[1 + F_2(0)\right]
$
</p>

Tout l'écart de $g$ à la valeur $2$ de Dirac est porté par le <b>facteur de forme de Pauli à transfert nul</b>, et par lui seul.

</div>

<br>

<div id="preuve">

<details>
<summary>Du vertex au facteur $g$, en quatre pas&nbsp;:</summary>

<b>Pas I&nbsp;: coupler à un champ magnétique classique</b><br>
Le $g$ se définit par la réponse du spin à un champ extérieur. On branche donc le vertex sur un potentiel classique, exactement comme pour Rutherford à la partie précédente&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M = -\mathrm{i}\,Q|e|\;\bar u(p')\,\tilde\Gamma^\mu\,u(p)\;\tilde A^{\mathrm{cl}}_\mu(q)
$
</p>

<b>Pas II&nbsp;: séparer l'orbital du spin, par la décomposition de Gordon</b><br>
Le terme en $F_1$ porte un $\gamma^\mu$, dont on ne voit pas s'il agit sur le spin ou sur le mouvement. La décomposition de Gordon tranche&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u(p')\,\gamma^\mu\,u(p) = \bar u(p')\left[\frac{p'^\mu + p^\mu}{2m} + \frac{\mathrm{i}\sigma^{\mu\nu}q_\nu}{2m}\right]u(p)
$
</p>

Le premier terme est le <b>courant de convection</b>, indépendant du spin&nbsp;: c'est le courant qu'aurait une particule scalaire. Le second a exactement la structure du terme en $F_2$.

<b>Voilà le point qui fait tout&nbsp;:</b> après cette séparation, la partie de l'amplitude qui dépend du spin porte le facteur $F_1(q) + F_2(q)$, les deux facteurs de forme contribuant <b>de la même façon</b> au magnétisme. En $q = 0$, où $F_1(0) = 1$ par condition de renormalisation, cela vaut $1 + F_2(0)$.

<b>Pas III&nbsp;: passer à la limite non relativiste et lire le potentiel</b><br>
Avec $u(p) \simeq \sqrt m\begin{pmatrix}\xi\\\xi\end{pmatrix}$ et les formes explicites de $\sigma^{\mu\nu}$, la partie de spin devient proportionnelle à $\left[\xi'^\dagger\sigma^k\xi\right]\tilde B^k(\boldsymbol q)$, le champ magnétique apparaissant par $\mathrm{i}\epsilon^{ijk}q^i\tilde A^{\mathrm{cl}\,j} = \tilde B^k$, c'est-à-dire, en espace direct, par $\boldsymbol B = \boldsymbol\nabla\times\boldsymbol A$, exactement comme dans le calcul de l'équation de Pauli à la partie&nbsp;13.

En extrayant le potentiel par l'approximation de Born, et en divisant par la normalisation relativiste $2m$&nbsp;:

<p style="text-align:center;">
$\displaystyle
V(\boldsymbol x) = -\frac{Q|e|}{m}\,\big\{1 + F_2(0)\big\}\;\langle\hat{\boldsymbol S}\rangle\cdot\boldsymbol B(\boldsymbol x)
$
</p>

<b>Pas IV&nbsp;: comparer avec la définition de $g$</b><br>
Le moment magnétique d'une particule de spin $\boldsymbol S$ est défini par

<p style="text-align:center;">
$\displaystyle
V = -g\,\frac{Q|e|}{2m}\,\langle\hat{\boldsymbol S}\rangle\cdot\boldsymbol B
$
</p>

L'identification est alors immédiate, le facteur $2$ du dénominateur venant compenser celui de l'accolade&nbsp;:

<p style="text-align:center;">
$\displaystyle
g = 2\big[1 + F_2(0)\big]
$
</p>

<b>Contrôle</b><br>
À l'ordre le plus bas, le vertex est un pur $\gamma^\mu$, donc $F_2 = 0$ et $g = 2$&nbsp;: on retrouve exactement la prédiction de Dirac établie à la partie&nbsp;13. Rien n'a été perdu en route.

</details>

</div>

On a utilisé la décomposition de Gordon pour écrire $g$. On peut l'ajouter à notre boîte à outils.

<div id="def">

**Décomposition de Gordon**

<p style="text-align:center;">
$\displaystyle
\bar u(p')\,\gamma^\mu\,u(p) = \bar u(p')\left[\frac{p'^\mu + p^\mu}{2m} + \frac{\mathrm{i}\sigma^{\mu\nu}q_\nu}{2m}\right]u(p)
$
</p>

</div>

<br>

<div id="preuve">
<details>
<summary>
Preuve
</summary>
On part de l'identité $\gamma^\mu\gamma^\nu = g^{\mu\nu} - \mathrm{i}\sigma^{\mu\nu}$, qui n'est que la séparation de $\gamma^\mu\gamma^\nu$ en parties symétrique et antisymétrique.

On l'utilise deux fois, en insérant les équations de Dirac de part et d'autre&nbsp;: $\not{\\!\\!p}\\,u(p) = m\\,u(p)$ à droite, et $\bar u(p')\not{\\!\\!p}' = m\\,\bar u(p')$ à gauche. Cela permet d'écrire

<p style="text-align:center;">
$\displaystyle
2m\,\bar u(p')\gamma^\mu u(p) = \bar u(p')\left[\not{\!\!p}'\gamma^\mu + \gamma^\mu\not{\!\!p}\right]u(p)
$
</p>

En développant chaque produit avec l'identité ci-dessus, les parties symétriques donnent $p'^\mu + p^\mu$ et les antisymétriques se combinent en $\mathrm{i}\sigma^{\mu\nu}(p' - p)\_\nu = \mathrm{i}\sigma^{\mu\nu}q_\nu$. En divisant par $2m$, on obtient la décomposition annoncée.

</details>

</div>

Il ne reste donc «&nbsp;plus qu'à&nbsp;» calculer $F_2(0)$, et c'est là que la théorie quantique des champs prend le relais de l'équation de Dirac.

<div id="theo">

Il n'y a rien à l'ordre le plus bas, puisque le vertex nu est un pur $\gamma^\mu$. Rien non plus à l'ordre suivant. La première contribution vient de l'ordre $e^3$, et d'un <b>unique</b> diagramme&nbsp;: l'électron émet un photon virtuel avant d'atteindre le vertex et le réabsorbe après, le photon d'interaction s'accrochant entre les deux.

C'est le <b>diagramme de Schwinger</b>, et il fait l'objet de la section suivante.

</div>

<!-- FIGURE à redessiner (d'après fig. 41.10 de L&B) : le diagramme de vertex à l'ordre 3, temps vers le haut : ligne fermionique montante (p en bas, p' en haut), photon externe ondulé arrivant au vertex central (impulsion q) ; un photon virtuel ondulé en arc relie un point de la ligne avant le vertex (impulsion du fermion k) à un point après (k' = k+q), le photon d'arc portant p-k. Légende : « Le diagramme de Schwinger : la seule contribution d'ordre alpha à F2(0) ». -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagschwinger.png" style="box-shadow:none;background:none;">
</div>


### Le calcul de Schwinger

Le matériel nécessaire a été construit dans les chapitres précédents, à savoir les règles de Feynman de QED et l'algèbre des matrices $\gamma$ avec ses identités de contraction (partie précédente), les paramètres de Feynman et le décalage d'impulsion, et la décomposition de Gordon. Et pourtant, au bout de l'assemblage, il sort un **nombre pur**, sans masse, sans coupure et sans logarithme, qui prédit une décimale mesurée. Voyons-le en cinq étapes.

{{%notice note "Le plan en une phrase"%}}
On écrit l'intégrale du diagramme, on nettoie le numérateur avec l'algèbre de Dirac, on symétrise le dénominateur par les paramètres de Feynman, on trie le numérateur en séparant ce qui est $\gamma^\mu$ (donc $F_1$) de ce qui est $\sigma^{\mu\nu}q_\nu$ (donc $F_2$), et l'on intègre.<br><br>
<b>Aucune divergence n'apparaîtra dans la partie $F_2$</b>&nbsp;: c'est la clef de la prédictibilité.
{{%/notice%}}

#### Étape 1&nbsp;: l'intégrale du diagramme

On applique les règles de Feynman de QED en suivant la ligne fermionique à rebours de la flèche. En notant $k$ l'impulsion du fermion avant le vertex et $k' = k + q$ après, le photon virtuel porte $p - k$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u(p')\,\delta\Gamma^\mu\,u(p) = \int\!\frac{\mathrm d^4k}{(2\pi)^4}\;
\frac{-\mathrm i g_{\nu\rho}}{(k-p)^2+\mathrm i\epsilon}\;
\bar u(p')\,(-\mathrm ie\gamma^\nu)\,
\frac{\mathrm i\,(\not{\!\!k}'+m)}{k'^2-m^2+\mathrm i\epsilon}\,
\gamma^\mu\,
\frac{\mathrm i\,(\not{\!\!k}+m)}{k^2-m^2+\mathrm i\epsilon}\,
(-\mathrm ie\gamma^\rho)\,u(p)
$
</p>

Trois propagateurs au dénominateur (deux fermions, un photon), deux vertex de plus qu'à l'arbre&nbsp;: c'est bien une correction d'ordre $e^2$ relative, donc $\alpha$.

#### Étape 2&nbsp;: nettoyer le numérateur

L'indice $\nu$ du photon virtuel est contracté entre les deux extrémités de l'arc, ce qui prend en sandwich toute la chaîne. Les identités de contraction de la partie précédente s'en chargent.

<div id="preuve">
<details>
<summary>Les trois identités et leur emploi&nbsp;:</summary>

<p style="text-align:center;">
$\displaystyle
\gamma^\nu\gamma^\mu\gamma_\nu = -2\gamma^\mu,
\quad
\gamma^\nu\gamma^\alpha\gamma^\beta\gamma_\nu = 4g^{\alpha\beta},
\quad
\gamma^\nu\gamma^\alpha\gamma^\mu\gamma^\beta\gamma_\nu = -2\gamma^\beta\gamma^\mu\gamma^\alpha
$
</p>

Le numérateur à traiter est $\gamma^\nu(\not{\\!\\!k}'+m)\gamma^\mu(\not{\\!\\!k}+m)\gamma_\nu$. En développant le produit, quatre morceaux apparaissent&nbsp;:

<ul>
<li>le terme sans masse, $\gamma^\nu(\not{\!\!k}')\gamma^\mu(\not{\!\!k})\gamma_\nu$, traité par la troisième identité (cinq matrices)&nbsp;: il donne $-2(\not{\!\!k})\gamma^\mu(\not{\!\!k}')$, avec <b>inversion de l'ordre</b> de $k$ et $k'$&nbsp;;</li>
<li>les deux termes linéaires en $m$, traités par la deuxième identité (quatre matrices)&nbsp;: ils donnent $4m\,k^\mu$ et $4m\,k'^\mu$, c'est-à-dire des objets <b>sans matrice $\gamma$ libre</b>&nbsp;;</li>
<li>le terme en $m^2$, traité par la première identité&nbsp;: $-2m^2\gamma^\mu$.</li>
</ul>

En rassemblant, et en comptant les facteurs $\mathrm i$ des propagateurs et des vertex (soit $(-\mathrm i)\times(-\mathrm ie)^2\times\mathrm i^2 = -\mathrm ie^2$, multiplié par le $-2$ commun)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u(p')\,\delta\Gamma^\mu\,u(p) = 2\mathrm ie^2\!\int\!\frac{\mathrm d^4k}{(2\pi)^4}
\frac{\bar u(p')\big[(\not{\!\!k})\gamma^\mu(\not{\!\!k}') + m^2\gamma^\mu - 2m(k+k')^\mu\big]u(p)}
{\big((k-p)^2+\mathrm i\epsilon\big)\big(k'^2-m^2+\mathrm i\epsilon\big)\big(k^2-m^2+\mathrm i\epsilon\big)}
$
</p>

Le numérateur ne contient plus que trois structures, et l'on notera déjà que la troisième, $(k+k')^\mu$, n'a aucune matrice $\gamma$&nbsp;: c'est elle qui alimentera $F_2$ après passage par Gordon.

</details>
</div>

#### Étape 3&nbsp;: symétriser le dénominateur

Trois facteurs différents au dénominateur interdisent toute intégration. Le remède est celui de la partie&nbsp;11&nbsp;: les **paramètres de Feynman**, qui les fusionnent en un seul au prix d'intégrales supplémentaires sur des variables auxiliaires.

<div id="preuve">
<details>
<summary>Fusion et décalage d'impulsion&nbsp;:</summary>

L'identité à trois facteurs s'écrit

<p style="text-align:center;">
$\displaystyle
\frac{1}{ABC} = \int_0^1\!\mathrm dx\,\mathrm dy\,\mathrm dz\;\delta(x+y+z-1)\;\frac{2}{[xA+yB+zC]^3}
$
</p>

Avec $A = k^2-m^2$, $B = k'^2-m^2$ et $C = (k-p)^2$, le crochet devient, après regroupement,

<p style="text-align:center;">
$\displaystyle
k^2 + 2k\cdot(yq - zp) + yq^2 - (x+y-z)m^2
$
</p>

On complète alors le carré en posant

<p style="text-align:center;">
$\displaystyle
\boxed{\ \ell = k + yq - zp\ }
$
</p>

qui est le <b>décalage d'impulsion</b>&nbsp;: la variable d'intégration devient $\ell$, ce qui est licite puisque l'intégrale porte sur tout l'espace. Le dénominateur prend sa forme définitive, ne dépendant plus de $\ell$ que par $\ell^2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big[\ell^2 - \Delta\big]^3
\qquad\text{avec}\qquad
\Delta = (1-z)^2m^2 - xy\,q^2
$
</p>

en ayant utilisé $p^2 = p'^2 = m^2$ et $p\cdot q = -q^2/2$. Cette quantité $\Delta$ est positive et joue le rôle d'une masse effective&nbsp;: c'est elle qui apparaîtra au dénominateur du résultat final.

</details>
</div>

#### Étape 4&nbsp;: trier, et voir apparaître $F_2$

C'est l'étape décisive. Le décalage $k = \ell - yq + zp$ étant reporté dans le numérateur, celui-ci devient un polynôme en $\ell$, et il faut le ranger selon les deux structures autorisées par la symétrie, $\gamma^\mu$ et $\sigma^{\mu\nu}q_\nu$.

<div id="preuve">
<details>
<summary>Le tri, et les trois outils qui le rendent possible&nbsp;:</summary>

Trois simplifications font tout le travail&nbsp;:

<ul>
<li><b>Parité en $\ell$.</b> Les termes <i>linéaires</i> en $\ell$ s'intègrent à zéro, le dénominateur ne dépendant que de $\ell^2$. Pour les termes quadratiques, on peut remplacer $\ell^\alpha\ell^\beta \to \frac{\ell^2}{4}g^{\alpha\beta}$ par isotropie.</li>
<li><b>Équations de Dirac.</b> Le numérateur est pris en sandwich entre $\bar u(p')$ et $u(p)$&nbsp;: on peut donc utiliser $(\not{\!\!p})\,u(p) = m\,u(p)$ à droite et $\bar u(p')(\not{\!\!p}') = m\,\bar u(p')$ à gauche, ce qui élimine toutes les occurrences de $\not{\!\!p}$ et $\not{\!\!p}'$.</li>
<li><b>Décomposition de Gordon.</b> Les termes restants du type $(p+p')^\mu$, qui n'ont pas de matrice $\gamma$, se convertissent grâce à la relation du pas II, lue à l'envers&nbsp;: $\frac{(p+p')^\mu}{2m} = \gamma^\mu - \frac{\mathrm i\sigma^{\mu\nu}q_\nu}{2m}$. <b>C'est ici, et seulement ici, que naît la structure de Pauli.</b></li>
</ul>

Après le tri, le numérateur se met sous la forme

<p style="text-align:center;">
$\displaystyle
\bar u(p')\left[
\gamma^\mu\left(-\frac{\ell^2}{2} + (1-x)(1-y)q^2 + (1-2z-z^2)m^2\right)
+ \frac{\mathrm i\sigma^{\mu\nu}q_\nu}{2m}\Big(2m^2 z(1-z)\Big)
\right]u(p)
$
</p>

<b>Observons attentivement les deux coefficients</b>, car toute la suite en découle. Le coefficient de $\gamma^\mu$ contient un terme en $\ell^2$&nbsp;; celui de $\sigma^{\mu\nu}q_\nu$ n'en contient aucun. Or c'est précisément le $\ell^2$ qui, intégré contre $1/(\ell^2-\Delta)^3$, produit une divergence logarithmique. <b>La divergence est donc tout entière dans $F_1$, et $F_2$ est fini d'emblée.</b>

</details>
</div>

Le facteur de forme $F_1$ diverge, et sa divergence est absorbée par le contreterme de vertex&nbsp;: la valeur $F_1(0) = 1$ est une <b>condition de renormalisation</b>, c'est-à-dire un choix, pas une prédiction. Le facteur $F_2$, lui, est <b>convergent sans contreterme</b>. Il ne dépend d'aucune coupure, ne contient aucun logarithme, et sa valeur en $q = 0$ est un nombre pur multiplié par $\alpha$. <b>C'est pour cela que le moment magnétique anormal est prédictible</b>, et c'est ce qui en fait le test de précision par excellence.

#### Étape 5&nbsp;: les deux intégrations

Il ne reste qu'à intégrer, d'abord sur $\ell$, puis sur les paramètres de Feynman.

<div id="preuve">
<details>
<summary>L'intégrale sur $\ell$, puis sur $x$, $y$, $z$&nbsp;:</summary>

La partie $F_2$ n'ayant pas de $\ell$ au numérateur, une seule intégrale est nécessaire, et elle est convergente&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\!\frac{\mathrm d^4\ell}{(2\pi)^4}\,\frac{1}{(\ell^2-\Delta)^3} = \frac{-\mathrm i}{32\pi^2\,\Delta}
$
</p>

En rassemblant les préfacteurs ($2\mathrm ie^2$ de l'étape 2, le facteur 2 de l'identité de Feynman, et le $-\mathrm i/32\pi^2$ ci-dessus), on obtient

<p style="text-align:center;">
$\displaystyle
2\mathrm ie^2 \times 2 \times \frac{-\mathrm i}{32\pi^2} = \frac{e^2}{8\pi^2} = \frac{\alpha}{2\pi}
$
</p>

d'où le facteur de forme de Pauli à tout $q$&nbsp;:

<p style="text-align:center;">
$\displaystyle
F_2(q^2) = \frac{\alpha}{2\pi}\int_0^1\!\mathrm dx\,\mathrm dy\,\mathrm dz\;\delta(x+y+z-1)\;\frac{2m^2 z(1-z)}{(1-z)^2m^2 - xy\,q^2}
$
</p>

<b>Posons maintenant $q = 0$</b>, puisque c'est le moment magnétique statique qui nous intéresse. Alors $\Delta = (1-z)^2m^2$, et une simplification spectaculaire se produit&nbsp;: le $m^2$ disparaît, et l'un des deux facteurs $(1-z)$ aussi.

<p style="text-align:center;">
$\displaystyle
F_2(0) = \frac{\alpha}{2\pi}\int\!\mathrm dx\,\mathrm dy\,\mathrm dz\;\delta(x+y+z-1)\;\frac{2z(1-z)}{(1-z)^2}
= \frac{\alpha}{\pi}\int\!\mathrm dx\,\mathrm dy\,\mathrm dz\;\delta(x+y+z-1)\;\frac{z}{1-z}
$
</p>

La distribution $\delta$ sert à faire l'intégrale sur $x$&nbsp;; il reste $y$ à parcourir de $0$ à $1-z$, ce qui fournit exactement un facteur $(1-z)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
F_2(0) = \frac{\alpha}{\pi}\int_0^1\!\mathrm dz\;(1-z)\,\frac{z}{1-z} = \frac{\alpha}{\pi}\int_0^1 z\,\mathrm dz
$
</p>

<b>Le facteur $(1-z)$ gênant s'annule contre celui du volume d'intégration</b>, et il ne reste que l'intégrale la plus simple des mathématiques.

</details>
</div>

Tout se referme sur $\int_0^1 z\\,\mathrm dz = \tfrac12$&nbsp;:

<div id="theo">

<b>Le résultat de Schwinger (1948)</b>

<p style="text-align:center;">
$\displaystyle
F_2(0) = \frac{\alpha}{2\pi}
\quad\Longrightarrow\quad
g = 2\left(1 + \frac{\alpha}{2\pi} + \ldots\right) = 2{,}00232\ldots
$
</p>

</div>

Reprenons la mesure de ce qui vient d'être fait. Une intégrale sur quatre dimensions d'impulsion, un numérateur de seize termes matriciels, trois propagateurs, une divergence. Et au bout, $\int_0^1 z\\,\mathrm dz$. Aucun ingrédient nouveau n'a été introduit&nbsp;: les règles de Feynman, l'algèbre des $\gamma$, les paramètres de Feynman et la décomposition de Gordon suffisaient. C'est ce que la théorie quantique des champs a de plus convaincant&nbsp;: la machinerie, assemblée pièce par pièce et pour d'autres raisons, produit sans qu'on l'y invite un nombre que l'on peut aller vérifier au laboratoire.

L'accord avec l'expérience de l'époque valut à Schwinger une salve d'applaudissements spontanée au congrès de l'APS de 1948, et le $\frac{\alpha}{2\pi}$ est gravé sur sa tombe.

<div id="preuve">
<details>
<summary>Ce que vaut le seul terme de Schwinger, face à la mesure&nbsp;:</summary>

L'anomalie est définie par $a_e = (g-2)/2$. Le calcul ci-dessus donne

<p style="text-align:center;">
$\displaystyle
a_e^{(1)} = \frac{\alpha}{2\pi} = 1{,}161\,410\times10^{-3}
$
</p>

alors que la mesure donne

<p style="text-align:center;">
$\displaystyle
a_e^{\text{mes}} = 1{,}159\,652\,181\times10^{-3}
$
</p>

Le premier terme seul est donc juste à <b>0,15&nbsp;%</b> près, ce qui est déjà remarquable pour un unique diagramme. L'écart résiduel est comblé par les ordres supérieurs, calculés jusqu'à $\alpha^5$ (des milliers de diagrammes), et l'accord final porte sur une dizaine de chiffres significatifs.

C'est ce qui fait de QED <b>la théorie la plus précisément testée de toute la physique</b>. Le cousin muonique $a_\mu$, plus sensible aux particules lourdes virtuelles puisque l'effet croît comme $m_\mu^2/M^2$, fait couler beaucoup d'encre comme sonde de physique au-delà du modèle standard.

</details>
</div>

Relisons enfin l'histoire complète du facteur $g$, car elle résume toute la partie précédente et celle-ci&nbsp;: Pauli le met à la main ($g = 2$ postulé)&nbsp;; Dirac le <b>déduit</b> de la relativité ($g = 2$ exact)&nbsp;; le champ quantique le <b>corrige</b> ($g = 2 + \frac{\alpha}{\pi}$, parce que l'électron n'est jamais nu&nbsp;: il traîne son nuage de photons virtuels, qui participe au moment magnétique). Chaque étage de la théorie laisse son empreinte dans les décimales d'un seul nombre mesurable.

### La confrontation, en un tableau

<div style="overflow-x: auto;">

| Grandeur | Sans QED | Avec QED | Mesure |
|:---:|:---:|:---:|:---:|
| $g$ de l'électron | Dirac&nbsp;: exactement $2$ | $2\left(1+\dfrac{\alpha}{2\pi}+\ldots\right)$ | $2{,}002\\,319\\,304\\,362$ |
| $a_e = (g-2)/2$ | $0$ | $1{,}159\\,652\\,181\times10^{-3}$ (jusqu'à $\alpha^5$) | $1{,}159\\,652\\,181\times10^{-3}$ |
| Lamb&nbsp;: $2S_{1/2} - 2P_{1/2}$ | Dirac&nbsp;: $0$, les deux niveaux sont dégénérés | $+1058$&nbsp;MHz, dont $-27$&nbsp;MHz de polarisation du vide | $1057{,}8$&nbsp;MHz |
| $\alpha^{-1}$ à l'échelle $M_Z$ | constante&nbsp;: $137{,}04$ | $128{,}9$ (toutes particules chargées) | $128{,}9 \pm 0{,}1$ |

</div>

Les trois lignes ne testent pas la même chose, et c'est ce qui rend le tableau instructif. Le $g$ de l'électron teste le **vertex** et la structure du couplage. Le déplacement de Lamb teste la **self-énergie de l'électron** (pour l'essentiel) et la **polarisation du vide** (pour la petite part calculée ici), avec la particularité de porter sur une dégénérescence que la théorie de Dirac prédisait exacte&nbsp;: sans champ quantifié, l'effet serait rigoureusement nul. Et la course de $\alpha$ teste le **groupe de renormalisation** lui-même, en vérifiant qu'une constante fondamentale n'en est pas une.

{{%notice note%}}
Dans les trois cas, la colonne «&nbsp;sans QED&nbsp;» donne un résultat <b>net et faux</b>&nbsp;: exactement 2, exactement 0, exactement constant. Ce n'est pas une théorie vague que la renormalisation vient préciser, c'est une théorie précise qu'elle vient corriger. C'est ce qui donne aux mesures leur pouvoir de trancher.
{{%/notice%}}

### Bilan

<p style="text-align:center;">
$\displaystyle
\tilde\Pi^{\mu\nu} = (q^2 g^{\mu\nu} - q^\mu q^\nu)\,\tilde\Pi
\;\xrightarrow{\ \text{Ward}\ }\;
\tilde D = \frac{-\mathrm{i}\,g_{\mu\nu}}{q^2\left(1 - \tilde\Pi\right)}
\;\xrightarrow{\ \text{empaquetage}\ }\;
|e(q)| = \frac{|e_0|}{\sqrt{1 - [\tilde\Pi(q) - \tilde\Pi(0)]}}
$
</p>

<p style="text-align:center;">
$\displaystyle
|e(q)|
\;\xrightarrow{\ \text{limite statique}\ }\;
V(\boldsymbol r) = -\left\{\frac{\alpha}{r} + \frac{4\alpha^2}{15m^2}\delta^{(3)}(\boldsymbol r)\right\}
\;\xrightarrow{\ \text{orbitale } 2S\ }\;
\Delta\nu = -27\ \mathrm{MHz}
$
</p>

<p style="text-align:center;">
$\displaystyle
\beta = +\frac{|e|^3}{12\pi^2} > 0
\;\xrightarrow{\ \text{tous les fermions chargés}\ }\;
\alpha^{-1}\ :\ 137{,}0 \ \longrightarrow\ 128{,}9\ \text{à l'échelle } M_Z
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde\Gamma^\mu = \gamma^\mu F_1 + \frac{\mathrm{i}\sigma^{\mu\nu}q_\nu}{2m}F_2
\;\xrightarrow{\ \text{Gordon}\ }\;
g = 2\left[1 + F_2(0)\right]
\;\xrightarrow{\ \text{Schwinger}\ }\;
F_2(0) = \frac{\alpha}{\pi}\int_0^1 z\,\mathrm dz = \frac{\alpha}{2\pi}
$
</p>

### Pièges

<ul>
<li>Le photon habillé reste sans masse&nbsp;: la structure $(q^2 g^{\mu\nu} - q^\mu q^\nu)$ imposée par Ward maintient le pôle en $q^2 = 0$. Une self-énergie qui donnerait une masse au photon signalerait une violation de jauge.</li>
<li>$e(q)$ n'est pas «&nbsp;la charge qui change avec le temps&nbsp;»&nbsp;: c'est la force effective vue à une résolution donnée. La charge de Thomson ($q \to 0$) reste la constante des tables.</li>
<li>Ne pas confondre les deux contributions au déplacement de Lamb&nbsp;: la polarisation du vide donne $-27\ \mathrm{MHz}$, le gros du $+1057\ \mathrm{MHz}$ vient de la self-énergie de l'électron. Le signe même diffère.</li>
<li>$F_1(0) = 1$ n'est pas un résultat de calcul mais une <b>condition de renormalisation</b> (définition de la charge)&nbsp;: c'est pourquoi seul $F_2(0)$ contient de la physique nouvelle à transfert nul.</li>
<li>$F_2$ est <b>fini sans contreterme</b>, et ce n'est pas un hasard&nbsp;: le terme en $\ell^2$ du numérateur, seul responsable de la divergence logarithmique, n'accompagne que la structure $\gamma^\mu$. Toute la divergence est donc dans $F_1$. C'est cette finitude qui rend $a_e$ prédictible sans aucun paramètre ajustable.</li>
<li>La décomposition de Gordon ne vaut qu'entre spineurs sur couche de masse&nbsp;: elle utilise l'équation de Dirac des deux côtés.</li>
<li>Le signe de $\beta$ n'est pas universel&nbsp;: positif en QED (écrantage), négatif en QCD (liberté asymptotique). Le calcul est le même, le contenu en boucles change tout.</li>
</ul>





{{%notice note%}}
Et maintenant&nbsp;? Nous possédons une théorie quantique des champs complète pour l'électromagnétisme et la matière chargée&nbsp;: construite sur le principe de jauge, renormalisée, et vérifiée sur une dizaine de chiffres significatifs. Difficile de faire mieux.<br><br>
Mais QED ne décrit qu'une seule des interactions. Les deux autres reposent elles aussi sur des symétries de jauge, à ceci près que leurs groupes, $SU(2)$ et $SU(3)$, sont <b>non abéliens</b>&nbsp;: leurs éléments ne commutent pas. La partie suivante reprend donc le principe de jauge dans ce cadre, et découvre que le champ de jauge y devient <b>sa propre source</b>, ce qui explique enfin la liberté asymptotique. Elle applique ensuite ce mécanisme, augmenté d'une brisure spontanée de symétrie, au <b>modèle de Weinberg–Salam</b>&nbsp;: l'unification de l'électromagnétisme et de l'interaction faible, d'où sortent la masse de l'électron, un neutrino sans masse, un photon sans masse et les bosons $W^\pm$ et $Z^0$.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc15">Chapitre précédent</a></td><td><a href="../tqc17">Chapitre suivant</a></td>
    </tr>
</table>
</div>