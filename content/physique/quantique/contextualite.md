+++
title = "Contextualité"
date = 2021-03-06T14:20:50+01:00
weight = 4
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
#axiom
{
    background-color:#E5F3E0;
    border-radius:10px;
    padding:5px 20px 5px 20px;
}
#gros
{
    overflow-x: auto;
    margin-top:-0.5em;
    margin-bottom:-0.5em;
}
.svg-container
{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 2px;
}
.legende
{
    text-align: center;
    font-size: 0.9em;
    color: #64748b;
    font-style: italic;
    margin-top: -0.6em;
}
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
/* Pour rétablir le comportement de details */
details > summary:first-of-type {
  display: list-item;     /* remet le triangle + l’accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
ul
{
margin-top:0em;
}
.tableau-large
{
    overflow-x: auto;
}
.tableau-large table
{
    width: auto;
    min-width: 34rem;
    margin: 0 auto;
}
@media (max-width: 480px)
{
    #body-inner .anchor { display: none; }
}
.renvoi
{
    font-size: 0.9em;
    color: #004D80;
    margin-top: -0.4em;
}
.renvoi a
{
    color: #004D80 !important;
    text-decoration: underline;
}
</style>
<style>
.bio
{
    max-width: 36rem;
    margin: 1.3em auto;
    border: 2px solid #006C65;
    border-radius: 12px;
    background: #F3F8F7;
    padding: 0.7em 1.2em 0.5em 1.2em;
    font-size: 0.92em;
    line-height: 1.5;
}
.bio-tete
{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0 1em;
}
.bio-nom
{
    font-weight: bold;
    color: #006C65;
    font-size: 1.08em;
}
.bio-dates
{
    color: #64748b;
    font-size: 0.92em;
}
.bio-frise
{
    position: relative;
    height: 5px;
    background: #D3E6E4;
    border-radius: 3px;
    margin: 0.5em 0 1.3em 0;
}
.bio-frise::before, .bio-frise::after
{
    position: absolute;
    top: 7px;
    font-size: 0.72em;
    color: #94a3b8;
}
.bio-frise::before { content: "1600"; left: 0; }
.bio-frise::after { content: "2000"; right: 0; }
.bio-frise span
{
    position: absolute;
    top: -1px;
    height: 7px;
    background: #006C65;
    border-radius: 4px;
}
.bio p
{
    margin: 0.2em 0 0.3em 0;
}
.fig-commandes
{
    text-align: center;
    font-size: 0.9em;
    color: #334155;
    margin: 0.2em 0 0.4em 0;
}
.fig-commandes button
{
    font: inherit;
    padding: 0.2em 0.9em;
    margin: 0.2em 0.3em;
    border: 1px solid #94a3b8;
    border-radius: 6px;
    background: #fff;
    color: #004D80;
    cursor: pointer;
}
.fig-commandes button:hover
{
    background: #F1F5F9;
}
.fig-commandes label
{
    display: inline;
    font-weight: normal !important;
}
.fig-commandes input[type=range]
{
    display: inline-block;
    accent-color: #970E53;
    vertical-align: middle;
    width: 11em;
    max-width: 60%;
    margin: 0 0.4em;
    padding: 0;
    border: none;
    box-shadow: none;
    height: auto;
}
.tableau-large td:nth-child(n+2)
{
    white-space: nowrap;
}
.video-fig
{
    margin: 15px auto 2px auto;
    width: 640px;
    max-width: 100%;
}
.video-fig video
{
    width: 100%;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
}
#preuve ol
{
    margin-top: 0.3em;
}
.ising
{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px 24px;
    margin-top: 15px;
}
.ising canvas
{
    width: min(400px, 100%);
    height: auto;
    image-rendering: pixelated;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
}
.pj-choix
{
    margin-bottom: 0.3em;
}
.pj-choix button
{
    font-family: Georgia, 'Times New Roman', serif !important;
    font-weight: bold;
    padding: 0.1em 0.45em !important;
    margin: 0.15em 0.1em !important;
}
.pj-choix button.actif
{
    background: #EEF3F7 !important;
    border-color: #004D80 !important;
    box-shadow: inset 0 0 0 1px #004D80;
}
.encadre
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #006C65;
    border-radius: 12px;
    background: #F3F8F7;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.encadre-titre
{
    font-weight: bold;
    color: #006C65;
    margin-bottom: 0.3em;
}
.texte-markov
{
    font-family: Georgia, 'Times New Roman', serif;
    font-style: italic;
    color: #334155;
    background: #fff;
    border-radius: 8px;
    padding: 0.5em 0.9em;
    margin: 0.4em 0;
}
</style>


# La contextualité et le théorème de Kochen-Specker

Quand on pèse une boule de pétanque, la balance affiche une masse que la boule possédait déjà. Et cette masse ne dépend évidemment pas de ce qu'on mesure en même temps&nbsp;: qu'on en profite pour relever son diamètre ou sa température, la balance affichera la même chose. Mesurer, c'est **révéler** une propriété qui était là, indifférente au reste de l'expérience.

La mécanique quantique ne promet rien de tel&nbsp;: elle ne donne que les probabilités des résultats. Mais on peut espérer que ce hasard ne reflète que notre ignorance, et que chaque grandeur possède en réalité une valeur bien définie que la théorie ne sait pas décrire, une **variable cachée**. Le théorème de Bell exclut les variables cachées *locales* (voir la page [EPR](../epr/)). Le théorème de **Kochen et Specker** (1967) vise plus bas encore&nbsp;: sans intrication, sans distance, avec un seul système, il montre que les grandeurs quantiques ne peuvent pas toutes posséder des valeurs qui seraient indépendantes de la façon dont on les mesure. La nature est **contextuelle**.

Encore faut-il dire précisément ce que cela signifie. C'est l'objet de la première partie&nbsp;; les suivantes en donnent des preuves que l'on peut tenir dans le creux de la main.

## Qu'est-ce que la contextualité&nbsp;?

### Les contextes de mesure

Deux observables $A$ et $B$ sont **compatibles** lorsqu'elles commutent&nbsp;: $AB=BA$. Elles possèdent alors une base commune de vecteurs propres, si bien qu'on peut les mesurer ensemble, dans une même expérience, et que mesurer l'une ne perturbe pas le résultat de l'autre (les observables et leurs projecteurs sont définis dans les [axiomes](../fondations/#un-jeu-daxiomes) de la page Notions fondamentales).

<div id="def">
<p>Un <b>contexte de mesure</b> est un ensemble d'observables deux à deux compatibles, que l'on mesure ensemble dans une même expérience.</p>
</div>

Tout le sujet repose sur une particularité de l'algèbre quantique&nbsp;: **la compatibilité n'est pas transitive.** Une observable $A$ peut être compatible avec $B$ et avec $C$ sans que $B$ et $C$ le soient entre elles. On peut alors mesurer $A$ de deux façons qui s'excluent&nbsp;: avec $B$, ou avec $C$. La même observable appartient à deux contextes.

<div class="svg-container">
<svg viewBox="0 0 600 268" role="img" aria-label="L'observable A peut être mesurée en même temps que B, ou en même temps que C, mais B et C ne peuvent pas être mesurées ensemble. A appartient donc à deux contextes de mesure différents. La non-contextualité suppose que la valeur révélée pour A est la même dans les deux." style="width:100%;max-width:600px;height:auto;">
<rect x="74.0" y="74.0" width="272.0" height="92.0" rx="46" fill="#f0f4f7" stroke="#004D80" stroke-width="2" transform="rotate(0.0 210.0 120.0)"/>
<rect x="260.0" y="80.0" width="260.0" height="80.0" rx="40" fill="#f9f1f5" stroke="#970E53" stroke-width="2" transform="rotate(0.0 390.0 120.0)"/>
<circle cx="300" cy="120" r="26" fill="#fff" stroke="#334155" stroke-width="1.8"/>
<text x="300.0" y="127.0" font-size="20" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan></text>
<circle cx="120" cy="120" r="26" fill="#fff" stroke="#334155" stroke-width="1.8"/>
<text x="120.0" y="127.0" font-size="20" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">B</tspan></text>
<circle cx="480" cy="120" r="26" fill="#fff" stroke="#334155" stroke-width="1.8"/>
<text x="480.0" y="127.0" font-size="20" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">C</tspan></text>
<text x="165.0" y="46.0" font-size="14" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >contexte 1 : on mesure <tspan font-style="italic">A</tspan> avec <tspan font-style="italic">B</tspan></text>
<text x="435.0" y="46.0" font-size="14" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >contexte 2 : on mesure <tspan font-style="italic">A</tspan> avec <tspan font-style="italic">C</tspan></text>
<path d="M120,170 C180,245 420,245 480,170" fill="none" stroke="#64748b" stroke-width="1.4" stroke-dasharray="5 4"/>
<text x="300.0" y="250.0" font-size="13.5" fill="#64748b" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round"><tspan font-style="italic">B</tspan> et <tspan font-style="italic">C</tspan> sont incompatibles : jamais mesurées ensemble</text>
</svg>
</div>
<p class="legende">Une observable, deux contextes. Aucune expérience ne réalise les deux contextes à la fois, puisque $B$ et $C$ sont incompatibles.</p>

En physique classique, cette situation n'existe pas&nbsp;: toutes les grandeurs sont compatibles, il n'y a qu'un seul grand contexte, et la question qui suit ne se pose même pas.

### L'hypothèse de non-contextualité

Supposons que les résultats de mesure révèlent des valeurs préexistantes. La figure pose alors une question nette&nbsp;: la valeur révélée pour $A$ est-elle **la même** selon qu'on la mesure avec $B$ ou avec $C$&nbsp;? Répondre oui, c'est faire l'hypothèse de non-contextualité. Détaillons les deux étages de cette hypothèse.

<div id="def">
<p><b>Modèle non contextuel à valeurs définies.</b> C'est un modèle qui attribue à chaque observable $A$ une valeur $v(A)$ telle que&nbsp;:</p>
<p><b>1. Valeurs définies.</b> $v(A)$ existe avant la mesure, c'est l'une des valeurs propres de $A$, et c'est elle que la mesure révèle.</p>
<p><b>2. Non-contextualité.</b> $v(A)$ ne dépend que de $A$ (et de l'état caché du système), et pas des autres observables compatibles que l'on choisit de mesurer en même temps.</p>
</div>

Ces deux hypothèses ont une conséquence immédiate, qui servira dans toutes les preuves. Si des observables **compatibles** sont liées par une relation, par exemple $C=AB$ ou $A+B+C=2$, la mécanique quantique prédit que les résultats obtenus en les mesurant ensemble vérifient cette relation à coup sûr. Les valeurs révélées doivent donc la vérifier aussi&nbsp;:

<p style="text-align:center;">
$\displaystyle C=AB\ \Longrightarrow\ v(C)=v(A)\,v(B),\qquad A+B+C=2\ \Longrightarrow\ v(A)+v(B)+v(C)=2.$
</p>

Pourquoi croire à la non-contextualité&nbsp;? Trois raisons la rendent presque irrésistible.

<ul>
<li><b>C'est ainsi que marche le monde classique</b>&nbsp;: la masse de la boule ne dépend pas du thermomètre posé à côté.</li>
<li><b>C'est le même objet mathématique.</b> Dans les deux contextes, $A$ est le même opérateur, avec les mêmes valeurs propres et les mêmes projecteurs.</li>
<li><b>Les probabilités quantiques, elles, sont non contextuelles.</b> La règle de Born donne la probabilité d'un résultat à partir de son seul projecteur&nbsp;: les statistiques de $A$ sont rigoureusement les mêmes, qu'on la mesure avec $B$ ou avec $C$. Si le contexte influençait la valeur de $A$, cette influence serait donc parfaitement invisible dans les fréquences observées.</li>
</ul>

Le troisième point mérite qu'on s'y arrête, car il prévient un contresens fréquent. **La contextualité ne dit pas que les statistiques d'une mesure dépendent du contexte&nbsp;: elles n'en dépendent pas.** Elle dit qu'il est impossible d'expliquer ces statistiques par des valeurs préexistantes qui n'en dépendraient pas non plus.

<div id="theo">
<p><b>Contextualité.</b> Une théorie est contextuelle si ses prédictions ne peuvent être reproduites par aucun modèle non contextuel à valeurs définies. Le théorème de Kochen-Specker affirme que la mécanique quantique est contextuelle, dès que l'espace des états est de dimension au moins $3$.</p>
</div>

Autrement dit, il faut renoncer à l'une des deux hypothèses. Soit les grandeurs n'ont pas de valeur avant d'être mesurées (« les expériences non réalisées n'ont pas de résultat », selon la formule d'Asher Peres). Soit elles en ont une, mais qui dépend de l'ensemble du dispositif de mesure, et qu'on ne peut donc plus regarder comme une propriété du système seul.

### La parabole des trois coffrets

Ernst Specker a illustré la logique du problème par un conte dès 1960, sept ans avant le théorème.

À l'école des prophètes d'Arbèles, en Assyrie, enseignait un devin venu de Ninive. Il avait une fille, et aucune envie de la marier. À chaque prétendant, il imposait donc la même épreuve&nbsp;: trois coffrets alignés sur une table, dont chacun contient une gemme ou est vide. Le prétendant doit prédire, pour chacun des trois, s'il est plein ou vide.

Vient la vérification, et c'est là qu'est le piège. Le devin ne fait ouvrir que **deux** coffrets. Or, avec trois coffrets et seulement deux réponses possibles, toute prédiction annonce forcément le même contenu pour au moins deux d'entre eux&nbsp;: ce sont ces deux-là que le devin désigne. Et l'on y trouve à chaque fois une gemme dans l'un et rien dans l'autre, tantôt dans le premier ouvert, tantôt dans le second. La prédiction est toujours fausse, et les prétendants repartent un à un.

Ils croient avoir mal deviné. Le mal est plus profond&nbsp;: si deux coffrets ouverts ensemble montrent toujours un plein et un vide, quelle que soit la paire choisie, alors **aucun contenu fixé à l'avance n'est possible**.

<div class="svg-container">
<svg viewBox="0 0 600 250" role="img" aria-label="Trois coffrets disposés en triangle. On ne peut en ouvrir que deux à la fois, et l'on trouve alors toujours un coffret plein et un coffret vide. Aucun remplissage fixé à l'avance ne respecte cette règle pour les trois paires : si le premier est plein, le deuxième est vide, donc le troisième devrait être à la fois plein et vide." style="width:100%;max-width:600px;height:auto;">
<line x1="300.0" y1="60.0" x2="170.0" y2="205.0" stroke="#94a3b8" stroke-width="2" />
<circle cx="235.0" cy="132.5" r="13" fill="#fff" stroke="#94a3b8" stroke-width="1.2"/>
<text x="235.0" y="137.5" font-size="15" fill="#64748b" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >≠</text>
<line x1="170.0" y1="205.0" x2="430.0" y2="205.0" stroke="#94a3b8" stroke-width="2" />
<circle cx="300.0" cy="205.0" r="13" fill="#fff" stroke="#94a3b8" stroke-width="1.2"/>
<text x="300.0" y="210.0" font-size="15" fill="#64748b" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >≠</text>
<line x1="430.0" y1="205.0" x2="300.0" y2="60.0" stroke="#94a3b8" stroke-width="2" />
<circle cx="365.0" cy="132.5" r="13" fill="#fff" stroke="#94a3b8" stroke-width="1.2"/>
<text x="365.0" y="137.5" font-size="15" fill="#64748b" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >≠</text>
<rect x="266" y="36" width="68" height="48" rx="7" fill="#e6edf2" stroke="#004D80" stroke-width="2"/><path d="M266,52 L334,52" stroke="#004D80" stroke-width="1.4"/><polygon points="300.0,58.0 311.0,68.0 300.0,79.0 289.0,68.0" fill="#004D80"/>
<rect x="136" y="181" width="68" height="48" rx="7" fill="#f0f1f3" stroke="#64748b" stroke-width="2"/><path d="M136,197 L204,197" stroke="#64748b" stroke-width="1.4"/>
<rect x="396" y="181" width="68" height="48" rx="7" fill="#f5e7ee" stroke="#970E53" stroke-width="2"/><path d="M396,197 L464,197" stroke="#970E53" stroke-width="1.4"/><text x="430.0" y="222.0" font-size="22" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">?</text>
<text x="348.0" y="65.0" font-size="14" fill="#004D80" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >plein</text>
<text x="122.0" y="210.0" font-size="14" fill="#64748b" text-anchor="end" font-family="Georgia,'Times New Roman',serif" >donc vide</text>
<text x="478.0" y="203.0" font-size="14" fill="#970E53" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >plein et vide</text>
<text x="478.0" y="220.0" font-size="14" fill="#970E53" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >à la fois ?</text>
</svg>
</div>
<p class="legende">Chaque paire de coffrets (chaque contexte) obéit à la règle « un plein, un vide ». Si le premier est plein, le deuxième est vide&nbsp;; le troisième devrait alors différer des deux à la fois.</p>

On peut s'en convaincre en passant en revue les huit remplissages possibles.

<div class="svg-container">
<svg viewBox="0 0 600 282" role="img" aria-label="Les huit façons de remplir trois coffrets. Dans chacune, au moins une paire de coffrets a le même contenu et viole la règle « un plein, un vide » : les trois paires quand les coffrets sont tous pleins ou tous vides, une seule paire dans les six autres cas." style="width:100%;max-width:600px;height:auto;">
<line x1="75.0" y1="32.0" x2="106.2" y2="86.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="106.2" y1="86.0" x2="43.8" y2="86.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="43.8" y1="86.0" x2="75.0" y2="32.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<rect x="64.0" y="23.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="95.2" y="77.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="32.8" y="77.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<text x="75.0" y="120.0" font-size="12.5" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >0 paire sur 3</text>
<line x1="225.0" y1="32.0" x2="256.2" y2="86.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="256.2" y1="86.0" x2="193.8" y2="86.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="193.8" y1="86.0" x2="225.0" y2="32.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<rect x="214.0" y="23.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="245.2" y="77.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="182.8" y="77.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<text x="225.0" y="120.0" font-size="12.5" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >0 paire sur 3</text>
<line x1="375.0" y1="32.0" x2="406.2" y2="86.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="406.2" y1="86.0" x2="343.8" y2="86.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="343.8" y1="86.0" x2="375.0" y2="32.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<rect x="364.0" y="23.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="395.2" y="77.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="332.8" y="77.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<text x="375.0" y="120.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<line x1="525.0" y1="32.0" x2="556.2" y2="86.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="556.2" y1="86.0" x2="493.8" y2="86.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="493.8" y1="86.0" x2="525.0" y2="32.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<rect x="514.0" y="23.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="545.2" y="77.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="482.8" y="77.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<text x="525.0" y="120.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<line x1="75.0" y1="144.0" x2="106.2" y2="198.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="106.2" y1="198.0" x2="43.8" y2="198.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="43.8" y1="198.0" x2="75.0" y2="144.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<rect x="64.0" y="135.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="95.2" y="189.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="32.8" y="189.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<text x="75.0" y="232.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<line x1="225.0" y1="144.0" x2="256.2" y2="198.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="256.2" y1="198.0" x2="193.8" y2="198.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="193.8" y1="198.0" x2="225.0" y2="144.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<rect x="214.0" y="135.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="245.2" y="189.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="182.8" y="189.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<text x="225.0" y="232.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<line x1="375.0" y1="144.0" x2="406.2" y2="198.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="406.2" y1="198.0" x2="343.8" y2="198.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="343.8" y1="198.0" x2="375.0" y2="144.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<rect x="364.0" y="135.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="395.2" y="189.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<rect x="332.8" y="189.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<text x="375.0" y="232.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<line x1="525.0" y1="144.0" x2="556.2" y2="198.0" stroke="#970E53" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="1 0"/>
<line x1="556.2" y1="198.0" x2="493.8" y2="198.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<line x1="493.8" y1="198.0" x2="525.0" y2="144.0" stroke="#40918c" stroke-width="1.8" stroke-linecap="round"/>
<rect x="514.0" y="135.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="545.2" y="189.0" width="22" height="18" rx="3.5" fill="#fff" stroke="#004D80" stroke-width="1.8"/>
<rect x="482.8" y="189.0" width="22" height="18" rx="3.5" fill="#004D80" stroke="#004D80" stroke-width="1.8"/>
<text x="525.0" y="232.0" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >2 paires sur 3</text>
<rect x="20" y="262" width="18" height="12" rx="3" fill="#004D80" stroke="#004D80" stroke-width="1.5"/>
<text x="44.0" y="273.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >plein</text>
<rect x="96" y="262" width="18" height="12" rx="3" fill="#fff" stroke="#004D80" stroke-width="1.5"/>
<text x="120.0" y="273.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >vide</text>
<line x1="180.0" y1="268.0" x2="206.0" y2="268.0" stroke="#40918c" stroke-width="1.8" />
<text x="212.0" y="273.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >paire conforme (un plein, un vide)</text>
<line x1="420.0" y1="268.0" x2="446.0" y2="268.0" stroke="#970E53" stroke-width="3.2" />
<text x="452.0" y="273.0" font-size="12.5" fill="#970E53" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >paire en défaut</text>
</svg>
</div>
<p class="legende">Les huit remplissages. Chacun met au moins une paire en défaut&nbsp;: un contenu fixé à l'avance respecte la règle pour deux paires sur trois au mieux, alors que les coffrets du devin la respectent pour les trois.</p>

Le conte contient déjà, en miniature, tout ce qui fait la contextualité.

<ul>
<li><b>Chaque contexte est irréprochable.</b> Pour une paire donnée, on observe « plein-vide » une fois sur deux et « vide-plein » une fois sur deux&nbsp;: rien d'étrange. Mieux, un coffret donné est plein une fois sur deux, quelle que soit la paire dans laquelle on l'ouvre. Les statistiques d'un coffret ne dépendent pas du contexte, exactement comme en mécanique quantique.</li>
<li><b>C'est le recollement qui est impossible.</b> Il n'existe aucune façon de tirer au sort le contenu des trois coffrets à la fois qui redonne ces statistiques pour chacune des trois paires. Des descriptions cohérentes de chaque contexte, mais pas de description d'ensemble&nbsp;: c'est la définition même d'une situation contextuelle.</li>
<li><b>Tout repose sur un interdit.</b> Si l'on pouvait ouvrir les trois coffrets ensemble, on verrait bien deux contenus identiques, et le tour serait éventé. La contextualité a besoin de mesures que l'on ne peut pas toutes faire à la fois.</li>
<li><b>Les deux issues sont déjà là.</b> Soit les coffrets n'ont pas de contenu tant qu'on ne les ouvre pas. Soit ils en ont un, mais truqué&nbsp;: un mécanisme caché le fait dépendre de l'autre coffret ouvert en même temps. Ce sont exactement les deux façons de sortir du théorème.</li>
</ul>

Le conte finit bien. La fille du devin, lasse d'attendre, vient en aide au prétendant qu'elle a choisi&nbsp;: elle ouvre elle-même deux coffrets pour lesquels il avait prédit des contenus *différents*, et la prédiction se vérifie. Le père proteste qu'il aurait voulu en voir ouvrir deux autres. On essaie alors d'ouvrir le troisième coffret&nbsp;: impossible. La prédiction n'a pas été réfutée, et le devin doit s'incliner.

Reste que ce n'est qu'un conte&nbsp;: avec des mesures idéales, la mécanique quantique ne permet pas de fabriquer ces trois coffrets. Quand trois observables sont compatibles deux à deux, elles le sont toutes ensemble&nbsp;; on pourrait donc ouvrir les trois coffrets d'un coup, et l'interdit tomberait. Mais il suffit d'enrichir un peu la structure pour que le tour devienne réalisable. Avec cinq coffrets disposés en cercle, dont on ne peut ouvrir que deux voisins, on obtient le [pentagone](#une-inégalité-pour-le-laboratoire-le-pentagone) étudié plus bas. Avec quatre coffrets répartis entre deux personnes éloignées, on obtient le [théorème de Bell](#bell-un-cas-particulier). Le carré magique qui suit en est une autre variante, à neuf cases.

## Le carré magique de Mermin et Peres

Voici la preuve la plus simple, trouvée en 1990 par David Mermin et Asher Peres. Elle commence par une énigme d'arithmétique. Remplissez la grille de $+1$ et de $-1$ de façon que le produit de chaque ligne vaille $+1$, celui des deux premières colonnes $+1$, et celui de la troisième colonne $-1$.

<div class="svg-container">
<svg id="cm-svg" viewBox="0 0 600 380" role="img" aria-label="Grille de trois cases sur trois à remplir de +1 et de −1. Le produit de chaque ligne doit valoir +1, celui des deux premières colonnes +1, celui de la troisième colonne −1. On ne peut jamais satisfaire les six contraintes à la fois." style="width:100%;max-width:600px;height:auto;">
<g id="cm-c00" tabindex="0" role="button" aria-label="Case ligne 1, colonne 1" style="cursor:pointer;outline:none"><rect x="113" y="33" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="156.0" y="86.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c01" tabindex="0" role="button" aria-label="Case ligne 1, colonne 2" style="cursor:pointer;outline:none"><rect x="205" y="33" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="248.0" y="86.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c02" tabindex="0" role="button" aria-label="Case ligne 1, colonne 3" style="cursor:pointer;outline:none"><rect x="297" y="33" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="340.0" y="86.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c10" tabindex="0" role="button" aria-label="Case ligne 2, colonne 1" style="cursor:pointer;outline:none"><rect x="113" y="125" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="156.0" y="178.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c11" tabindex="0" role="button" aria-label="Case ligne 2, colonne 2" style="cursor:pointer;outline:none"><rect x="205" y="125" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="248.0" y="178.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c12" tabindex="0" role="button" aria-label="Case ligne 2, colonne 3" style="cursor:pointer;outline:none"><rect x="297" y="125" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="340.0" y="178.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c20" tabindex="0" role="button" aria-label="Case ligne 3, colonne 1" style="cursor:pointer;outline:none"><rect x="113" y="217" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="156.0" y="270.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c21" tabindex="0" role="button" aria-label="Case ligne 3, colonne 2" style="cursor:pointer;outline:none"><rect x="205" y="217" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="248.0" y="270.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<g id="cm-c22" tabindex="0" role="button" aria-label="Case ligne 3, colonne 3" style="cursor:pointer;outline:none"><rect x="297" y="217" width="86" height="86" rx="10" fill="#e6edf2" stroke="#004D80" stroke-width="1.8"/><text x="340.0" y="270.0" font-size="28" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">+1</text></g>
<circle id="cm-r0" cx="420" cy="76.0" r="15" fill="#006C65"/>
<text id="cm-rt0" x="420" y="81.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="446.0" y="81.0" font-size="13.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<circle id="cm-r1" cx="420" cy="168.0" r="15" fill="#006C65"/>
<text id="cm-rt1" x="420" y="173.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="446.0" y="173.0" font-size="13.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<circle id="cm-r2" cx="420" cy="260.0" r="15" fill="#006C65"/>
<text id="cm-rt2" x="420" y="265.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="446.0" y="265.0" font-size="13.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<circle id="cm-k0" cx="156.0" cy="336" r="15" fill="#006C65"/>
<text id="cm-kt0" x="156.0" y="341.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="156.0" y="372.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<circle id="cm-k1" cx="248.0" cy="336" r="15" fill="#006C65"/>
<text id="cm-kt1" x="248.0" y="341.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="248.0" y="372.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<circle id="cm-k2" cx="340.0" cy="336" r="15" fill="#006C65"/>
<text id="cm-kt2" x="340.0" y="341.5" font-size="16" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">✓</text>
<text x="340.0" y="372.0" font-size="13.5" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >produit = −1</text>
<text id="cm-n" x="405" y="356" font-size="14" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" font-weight="bold"></text>
</svg>
<div class="fig-commandes"><button type="button" id="cm-reset">Tout remettre à +1</button> <button type="button" id="cm-rand">Remplir au hasard</button></div>
</div>
<p class="legende">Cliquez sur une case pour changer son signe. Les pastilles indiquent les contraintes satisfaites&nbsp;: on en obtient facilement cinq, jamais six.</p>

C'est impossible, et la raison tient en deux lignes. Multiplions les trois produits des lignes&nbsp;: on obtient le produit des neuf cases, qui doit valoir $(+1)(+1)(+1)=+1$. Multiplions les trois produits des colonnes&nbsp;: c'est encore le produit des neuf cases, qui doit valoir cette fois $(+1)(+1)(-1)=-1$. Un même nombre ne peut pas valoir à la fois $+1$ et $-1$.

Et pourtant, la mécanique quantique remplit la grille. Prenons deux qubits et notons $X\_1$ l'observable de Pauli $X$ du premier qubit, $Y\_2$ l'observable $Y$ du second, et ainsi de suite (les [matrices de Pauli](../spekkens/#matrices-de-pauli) ont toutes pour valeurs propres $+1$ et $-1$).

<div class="svg-container">
<svg viewBox="0 0 600 350" role="img" aria-label="Le carré de Mermin-Peres : neuf observables de deux qubits. Les trois observables de chaque ligne et de chaque colonne commutent entre elles. Le produit vaut l'identité sur chaque ligne et sur les deux premières colonnes, et moins l'identité sur la troisième colonne." style="width:100%;max-width:600px;height:auto;">
<rect x="113" y="25" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="156.0" y="76.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="205" y="25" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="248.0" y="76.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="297" y="25" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="340.0" y="76.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="113" y="117" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="156.0" y="168.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="205" y="117" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="248.0" y="168.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="297" y="117" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="340.0" y="168.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="113" y="209" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="156.0" y="260.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="205" y="209" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="248.0" y="260.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Y</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan><tspan font-style="italic">X</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<rect x="297" y="209" width="86" height="86" rx="10" fill="#f2f6f9" stroke="#334155" stroke-width="1.4"/>
<text x="340.0" y="260.0" font-size="22" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Z</tspan><tspan dy="4" font-size="15.4">1</tspan><tspan dy="-4" font-size="1"> </tspan><tspan font-style="italic">Z</tspan><tspan dy="4" font-size="15.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<text x="402.0" y="73.0" font-size="14" fill="#004D80" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >→ produit = +1</text>
<text x="402.0" y="165.0" font-size="14" fill="#004D80" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >→ produit = +1</text>
<text x="402.0" y="257.0" font-size="14" fill="#004D80" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >→ produit = +1</text>
<text x="156.0" y="318.0" font-size="15" fill="#006C65" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >↓</text>
<text x="156.0" y="338.0" font-size="14" fill="#006C65" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<text x="248.0" y="318.0" font-size="15" fill="#006C65" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >↓</text>
<text x="248.0" y="338.0" font-size="14" fill="#006C65" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >produit = +1</text>
<text x="340.0" y="318.0" font-size="15" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >↓</text>
<text x="340.0" y="338.0" font-size="14" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">produit = −1</text>
</svg>
</div>
<p class="legende">Le carré de Mermin-Peres. Les trois observables d'une même ligne ou d'une même colonne commutent&nbsp;: chaque ligne et chaque colonne est un contexte. Chaque observable appartient à deux contextes, sa ligne et sa colonne.</p>

Sur chaque ligne, le produit des trois observables est l'identité&nbsp;; sur les deux premières colonnes aussi&nbsp;; sur la troisième, c'est l'opposé de l'identité. Si l'on mesure les trois observables d'une ligne, le produit des trois résultats vaut donc $+1$ à coup sûr, et pour la troisième colonne $-1$ à coup sûr, **quel que soit l'état des deux qubits**.

<div id="preuve">
<details>
<summary>vérifier les produits</summary>

Tout repose sur les relations $XY=\mathrm{i}Z$ et $YX=-\mathrm{i}Z$, d'où $XYZ=\mathrm{i}$ et $YXZ=-\mathrm{i}$ (fois l'identité), et sur le fait que le carré d'une matrice de Pauli est l'identité. Les observables de qubits différents commutent toujours.

La première ligne donne $X\_1\cdot X\_2\cdot X\_1X\_2=X\_1^2\\,X\_2^2=1$, et de même pour la deuxième. La troisième donne $(X\_1Y\_2)(Y\_1X\_2)(Z\_1Z\_2)=(XYZ)\_1\\,(YXZ)\_2=(\mathrm{i})(-\mathrm{i})=+1$.

Les deux premières colonnes donnent $X\_1\cdot Y\_2\cdot X\_1Y\_2=1$ et $X\_2\cdot Y\_1\cdot Y\_1X\_2=1$. La troisième donne $(X\_1X\_2)(Y\_1Y\_2)(Z\_1Z\_2)=(XYZ)\_1\\,(XYZ)\_2=\mathrm{i}\times\mathrm{i}=-1$.

Quant à la compatibilité&nbsp;: deux produits comme $X\_1X\_2$ et $Y\_1Y\_2$ commutent, car échanger $X$ et $Y$ coûte un signe sur chaque qubit, et les deux signes se compensent.

</details>
</div>

Un modèle non contextuel devrait attribuer à chacune des neuf observables une valeur $\pm1$, la même dans sa ligne et dans sa colonne, en respectant les six produits. C'est exactement l'énigme de la grille&nbsp;: elle n'a pas de solution. **Aucun modèle non contextuel ne reproduit les prédictions quantiques pour ces neuf observables.**

Où l'hypothèse casse-t-elle&nbsp;? Dans la preuve d'impossibilité, on a utilisé la même valeur pour $X\_1X\_2$ dans sa ligne et dans sa colonne. Or mesurer la ligne et mesurer la colonne sont deux expériences différentes, qui s'excluent. Si l'on admet que la valeur d'une case dépend du contexte, l'énigme disparaît&nbsp;: il y a alors dix-huit valeurs au lieu de neuf, et l'argument de parité ne tient plus.

L'expérience a été réalisée en 2009 à Innsbruck sur deux ions calcium piégés (Kirchmair et ses collaborateurs)&nbsp;: les six produits sortent comme prévu, pour tous les états testés.

## Le théorème de Kochen-Specker

### L'énoncé

Le résultat général se formule avec les observables les plus élémentaires, les **projecteurs**, qui posent une question à réponse oui ($1$) ou non ($0$)&nbsp;: « le système est-il dans l'état $|e\rangle$&nbsp;? ». Les projecteurs sur les vecteurs d'une même base orthonormée commutent et leur somme est l'identité&nbsp;: mesurés ensemble, exactement un répond oui.

<div id="theo">
<p><b>Théorème de Kochen-Specker (1967).</b> Dans un espace de Hilbert de dimension au moins $3$, il est impossible d'attribuer à chaque projecteur de rang $1$ une valeur $0$ ou $1$, indépendante de la base dans laquelle on le mesure, de façon que dans chaque base orthonormée exactement un projecteur reçoive la valeur $1$.</p>
</div>

Simon Kochen et Ernst Specker l'ont publié en 1967. John Bell l'avait obtenu de son côté dès 1964 (son article, retardé, parut en 1966) à partir d'un théorème d'Andrew Gleason. C'est pourquoi on parle parfois du théorème de Bell-Kochen-Specker.

### Colorier la sphère

En dimension $3$, l'énoncé devient un problème de coloriage. Pour une particule de spin $1$, les carrés des composantes du spin selon trois directions orthogonales, $S\_x^2$, $S\_y^2$ et $S\_z^2$, commutent, valent chacun $0$ ou $1$, et vérifient $S\_x^2+S\_y^2+S\_z^2=2$. Dans chaque triade de directions orthogonales, les valeurs sont donc **deux fois $1$ et une fois $0$**.

<div class="svg-container">
<svg viewBox="0 0 600 320" role="img" aria-label="Une sphère et deux triades de directions orthogonales qui partagent la même direction verticale. Dans chaque triade, exactement une direction doit recevoir la valeur 0 et les deux autres la valeur 1. La direction commune doit recevoir la même valeur dans les deux triades." style="width:100%;max-width:600px;height:auto;">
<circle cx="300" cy="165" r="125" fill="#f5f8fa" stroke="#cbd5e1" stroke-width="1.4"/>
<polyline points="410.4,146.9 407.1,145.1 403.6,143.4 399.7,141.7 395.6,140.1 391.2,138.6 386.6,137.1 381.7,135.8 376.6,134.5 371.3,133.3 365.8,132.2 360.1,131.1 354.2,130.2 348.2,129.4 342.0,128.6 335.8,128.0 329.4,127.5 322.9,127.0 316.4,126.7 309.9,126.5 303.3,126.4 296.7,126.4 290.1,126.5 283.5,126.7 277.0,127.0 270.5,127.5 264.2,128.0 257.9,128.6 251.7,129.4 245.7,130.2 239.9,131.1 234.2,132.2 228.6,133.3 223.3,134.5 218.2,135.8 213.4,137.2 208.7,138.6 204.3,140.1 200.2,141.7 196.4,143.4 192.8,145.1 189.6,146.9 186.7,148.7 184.0,150.6 181.7,152.5 179.8,154.4 178.1,156.4 176.8,158.4 175.9,160.4 175.3,162.5 175.0,164.5 175.1,166.5 175.5,168.6 176.3,170.6 177.4,172.6 178.9,174.6 180.7,176.6 182.9,178.5 185.3,180.4 188.1,182.2 191.2,184.0 194.6,185.8 198.3,187.5 202.3,189.1 206.5,190.7 211.1,192.1 215.8,193.6 220.8,194.9 226.0,196.1 231.4,197.3 237.1,198.4 242.8,199.4 248.8,200.2 254.9,201.0 261.1,201.7 267.4,202.3 273.8,202.8 280.3,203.1 286.9,203.4 293.4,203.6 300.0,203.6 306.6,203.6 313.2,203.4 319.8,203.1 326.2,202.8 332.7,202.3 339.0,201.7 345.2,201.0 351.3,200.2 357.2,199.3 363.0,198.4 368.6,197.3 374.0,196.1 379.2,194.9 384.2,193.5 389.0,192.1 393.5,190.6 397.8,189.1 401.7,187.4 405.4,185.8 408.8,184.0 411.9,182.2 414.7,180.4 417.2,178.5 419.3,176.5 421.1,174.6 422.6,172.6 423.7,170.6 424.5,168.6 424.9,166.5 425.0,164.5 424.7,162.4 424.1,160.4 423.2,158.4 421.9,156.4 420.2,154.4 418.2,152.5 415.9,150.6 413.3,148.7 410.4,146.9" fill="none" stroke="#cbd5e1" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="4 4"/>
<line x1="300.0" y1="165.0" x2="410.4" y2="146.9" stroke="#006C65" stroke-width="2.2" />
<circle cx="410.4" cy="146.9" r="13" fill="#004D80" stroke="#fff" stroke-width="1.5"/>
<text x="410.4" y="151.9" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="300.0" y1="165.0" x2="241.3" y2="130.9" stroke="#006C65" stroke-width="2.2" />
<circle cx="241.3" cy="130.9" r="13" fill="#004D80" stroke="#fff" stroke-width="1.5"/>
<text x="241.3" y="135.9" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="300.0" y1="165.0" x2="330.2" y2="127.5" stroke="#C2770B" stroke-width="2.2" stroke-dasharray="6 4"/>
<circle cx="330.2" cy="127.5" r="13" fill="#004D80" stroke="#fff" stroke-width="1.5"/>
<text x="330.2" y="132.5" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="300.0" y1="165.0" x2="178.7" y2="155.7" stroke="#C2770B" stroke-width="2.2" stroke-dasharray="6 4"/>
<circle cx="178.7" cy="155.7" r="13" fill="#004D80" stroke="#fff" stroke-width="1.5"/>
<text x="178.7" y="160.7" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="300.0" y1="165.0" x2="300.0" y2="46.1" stroke="#334155" stroke-width="2.2" />
<circle cx="300.0" cy="46.1" r="13" fill="#970E53" stroke="#fff" stroke-width="1.5"/>
<text x="300.0" y="51.1" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">0</text>
<circle cx="300.0" cy="165.0" r="3.5" fill="#334155" />
<text x="322.0" y="48.1" font-size="13" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >direction commune aux deux triades</text>
<text x="322.0" y="65.1" font-size="13" fill="#64748b" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >sa valeur ne dépend pas de la triade</text>
<text x="52.0" y="300.0" font-size="13" fill="#006C65" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >première triade (trait plein)</text>
<text x="548.0" y="300.0" font-size="13" fill="#C2770B" text-anchor="end" font-family="Georgia,'Times New Roman',serif" >seconde triade (tirets)</text>
</svg>
</div>
<p class="legende">La règle « $1$-$0$-$1$ ». Une même direction appartient à une infinité de triades (on peut faire tourner les deux autres axes autour d'elle). La non-contextualité exige qu'elle porte la même valeur dans toutes.</p>

Il faudrait donc colorier toutes les directions de l'espace en deux couleurs de sorte que chaque triade orthogonale contienne exactement une direction « $0$ ». Le théorème dit que c'est impossible, et il suffit même d'un nombre fini de directions bien choisies pour faire échouer tout coloriage. La preuve originale en utilisait $117$. La course à la preuve la plus courte était lancée&nbsp;: $33$ directions pour Asher Peres en 1991, $31$ pour John Conway et Simon Kochen. On sait qu'il en faut au moins $22$.

<div class="svg-container">
<svg viewBox="0 0 600 352" role="img" aria-label="Un cube vu en perspective, avec les points où les 33 directions de Peres le traversent. Sur chaque face, neuf points forment une grille de trois sur trois ; s'y ajoutent les milieux des arêtes." style="width:100%;max-width:600px;height:auto;">
<polygon points="334.4,319.2 448.8,244.7 448.8,47.4 334.4,121.9" fill="#ebf1f5" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="151.2,272.6 151.2,75.3 334.4,121.9 334.4,319.2" fill="#f2f6f9" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="151.2,75.3 334.4,121.9 448.8,47.4 265.6,0.8" fill="#e6edf2" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<circle cx="351.1" cy="279.4" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="351.1" cy="209.6" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="351.1" cy="139.9" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="391.6" cy="253.0" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="391.6" cy="183.3" r="5.5" fill="#970E53" stroke="#fff" stroke-width="1.2"/>
<circle cx="391.6" cy="113.5" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="432.1" cy="226.7" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="432.1" cy="156.9" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="432.1" cy="87.2" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="448.8" cy="146.0" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="334.4" cy="220.5" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="391.6" cy="84.6" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="391.6" cy="281.9" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="178.0" cy="250.6" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="242.8" cy="267.0" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="307.5" cy="283.5" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="178.0" cy="180.8" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="242.8" cy="197.3" r="5.5" fill="#970E53" stroke="#fff" stroke-width="1.2"/>
<circle cx="307.5" cy="213.7" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="178.0" cy="111.0" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="242.8" cy="127.5" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="307.5" cy="143.9" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="242.8" cy="98.6" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="242.8" cy="295.9" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="151.2" cy="174.0" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="194.8" cy="71.2" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="235.2" cy="44.9" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="275.7" cy="18.5" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="259.5" cy="87.7" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="300.0" cy="61.3" r="5.5" fill="#970E53" stroke="#fff" stroke-width="1.2"/>
<circle cx="340.5" cy="35.0" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="324.3" cy="104.1" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="364.8" cy="77.8" r="5.5" fill="#004D80" stroke="#fff" stroke-width="1.2"/>
<circle cx="405.2" cy="51.5" r="5.5" fill="#006C65" stroke="#fff" stroke-width="1.2"/>
<circle cx="208.4" cy="38.1" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="357.2" cy="24.1" r="5.5" fill="#C2770B" stroke="#fff" stroke-width="1.2"/>
<circle cx="60" cy="336" r="5" fill="#970E53"/>
<text x="70.0" y="340.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >centres des faces (3)</text>
<circle cx="215" cy="336" r="5" fill="#C2770B"/>
<text x="225.0" y="340.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >milieux des arêtes (6)</text>
<circle cx="385" cy="336" r="5" fill="#004D80"/>
<text x="395.0" y="340.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >12 directions</text>
<circle cx="490" cy="336" r="5" fill="#006C65"/>
<text x="500.0" y="340.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >12 directions</text>
</svg>
</div>
<p class="legende">Les $33$ directions de Peres, repérées par les points où elles traversent un cube (chaque direction le traverse aussi au point opposé). Aucun coloriage de ces points ne respecte la règle « $1$-$0$-$1$ » pour toutes les triades orthogonales qu'ils forment.</p>

En dimension $2$, en revanche, le théorème est faux&nbsp;: pour un seul qubit, chaque direction n'appartient qu'à une seule base (elle-même et son opposée), il n'y a pas de contextes qui se chevauchent, et Kochen et Specker ont eux-mêmes construit un modèle non contextuel. C'est ce qui permet à la [théorie-jouet de Spekkens](../spekkens/) d'imiter si bien un qubit isolé.

### Dix-huit vecteurs et un argument de parité

La preuve la plus courte possible se joue en dimension $4$. En 1996, Adán Cabello, José Estebaranz et Guillermo García-Alcaine exhibent $18$ vecteurs qui se regroupent en $9$ bases orthogonales. Dans la figure, chaque point est un vecteur (ses quatre coordonnées sont indiquées, une barre signifiant $-1$), et chaque trait est une base&nbsp;: les six côtés de l'hexagone et les trois rectangles. Essayez de choisir **exactement un vecteur par base**.

<div class="svg-container">
<svg id="cb-svg" viewBox="0 0 600 470" role="img" aria-label="Les 18 vecteurs de Cabello, disposés sur un hexagone, et leurs 9 contextes : les six côtés de l'hexagone et trois rectangles qui se croisent au centre. Chaque contexte contient quatre vecteurs orthogonaux, et chaque vecteur appartient à exactement deux contextes. Il faudrait choisir exactement un vecteur par contexte : c'est impossible." style="width:100%;max-width:600px;height:auto;">
<polygon id="cb-x6" points="184.8,133.7 272.5,83.0 415.2,330.3 327.5,381.0" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linejoin="round"/>
<polygon id="cb-x7" points="327.5,83.0 415.2,133.7 272.5,381.0 184.8,330.3" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linejoin="round"/>
<polygon id="cb-x8" points="157.2,181.4 442.8,181.4 442.8,282.6 157.2,282.6" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linejoin="round"/>
<line id="cb-x0" x1="214.0" y1="83.0" x2="386.0" y2="83.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<line id="cb-x1" x1="386.0" y1="83.0" x2="472.0" y2="232.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<line id="cb-x2" x1="472.0" y1="232.0" x2="386.0" y2="381.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<line id="cb-x3" x1="386.0" y1="381.0" x2="214.0" y2="381.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<line id="cb-x4" x1="214.0" y1="381.0" x2="128.0" y2="232.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<line id="cb-x5" x1="128.0" y1="232.0" x2="214.0" y2="83.0" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round"/>
<text x="132.7" y="178.0" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">11<tspan text-decoration="overline">1</tspan>1</text>
<circle id="cb-p0" cx="157.2" cy="181.4" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 1 -1 1" style="cursor:pointer;outline:none"/>
<text x="165.0" y="123.4" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">0011</text>
<circle id="cb-p1" cx="184.8" cy="133.7" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 0 1 1" style="cursor:pointer;outline:none"/>
<text x="201.0" y="68.0" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1<tspan text-decoration="overline">1</tspan>00</text>
<circle id="cb-p2" cx="214.0" cy="83.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 -1 0 0" style="cursor:pointer;outline:none"/>
<text x="267.8" y="65.4" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1100</text>
<circle id="cb-p3" cx="272.5" cy="83.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 1 0 0" style="cursor:pointer;outline:none"/>
<text x="332.2" y="65.4" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">0010</text>
<circle id="cb-p4" cx="327.5" cy="83.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 0 1 0" style="cursor:pointer;outline:none"/>
<text x="399.0" y="68.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">0001</text>
<circle id="cb-p5" cx="386.0" cy="83.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 0 0 1" style="cursor:pointer;outline:none"/>
<text x="435.0" y="123.4" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">0100</text>
<circle id="cb-p6" cx="415.2" cy="133.7" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 1 0 0" style="cursor:pointer;outline:none"/>
<text x="467.3" y="178.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1010</text>
<circle id="cb-p7" cx="442.8" cy="181.4" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 0 1 0" style="cursor:pointer;outline:none"/>
<text x="498.0" y="236.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">10<tspan text-decoration="overline">1</tspan>0</text>
<circle id="cb-p8" cx="472.0" cy="232.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 0 -1 0" style="cursor:pointer;outline:none"/>
<text x="467.3" y="294.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">010<tspan text-decoration="overline">1</tspan></text>
<circle id="cb-p9" cx="442.8" cy="282.6" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 1 0 -1" style="cursor:pointer;outline:none"/>
<text x="435.0" y="348.6" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1<tspan text-decoration="overline">1</tspan>1<tspan text-decoration="overline">1</tspan></text>
<circle id="cb-p10" cx="415.2" cy="330.3" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 -1 1 -1" style="cursor:pointer;outline:none"/>
<text x="399.0" y="404.0" font-size="12.5" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1111</text>
<circle id="cb-p11" cx="386.0" cy="381.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 1 1 1" style="cursor:pointer;outline:none"/>
<text x="332.2" y="406.6" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1<tspan text-decoration="overline">1</tspan><tspan text-decoration="overline">1</tspan>1</text>
<circle id="cb-p12" cx="327.5" cy="381.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 -1 -1 1" style="cursor:pointer;outline:none"/>
<text x="267.8" y="406.6" font-size="12.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">100<tspan text-decoration="overline">1</tspan></text>
<circle id="cb-p13" cx="272.5" cy="381.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 0 0 -1" style="cursor:pointer;outline:none"/>
<text x="201.0" y="404.0" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">01<tspan text-decoration="overline">1</tspan>0</text>
<circle id="cb-p14" cx="214.0" cy="381.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 0 1 -1 0" style="cursor:pointer;outline:none"/>
<text x="165.0" y="348.6" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">1001</text>
<circle id="cb-p15" cx="184.8" cy="330.3" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 0 0 1" style="cursor:pointer;outline:none"/>
<text x="132.7" y="294.0" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5"><tspan text-decoration="overline">1</tspan>111</text>
<circle id="cb-p16" cx="157.2" cy="282.6" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur -1 1 1 1" style="cursor:pointer;outline:none"/>
<text x="102.0" y="236.0" font-size="12.5" fill="#334155" text-anchor="end" font-family="Georgia,'Times New Roman',serif" letter-spacing="1.5">111<tspan text-decoration="overline">1</tspan></text>
<circle id="cb-p17" cx="128.0" cy="232.0" r="9.5" fill="#fff" stroke="#334155" stroke-width="2" tabindex="0" role="button" aria-label="Vecteur 1 1 1 -1" style="cursor:pointer;outline:none"/>
<text id="cb-n" x="300" y="462" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"></text>
</svg>
<div class="fig-commandes"><button type="button" id="cb-reset">Tout effacer</button></div>
</div>
<p class="legende">Cliquez sur les vecteurs auxquels vous attribuez la valeur $1$. Une base devient verte quand elle contient exactement un vecteur choisi, rouge quand elle en contient plusieurs. On peut en verdir huit, jamais neuf.</p>

L'obstacle est le même que pour le carré magique. Chaque vecteur appartient à **exactement deux** bases&nbsp;: en comptant les vecteurs choisis base par base, on compte chacun deux fois, et le total est pair. Mais il faudrait un vecteur choisi dans chacune des $9$ bases, soit un total de $9$, qui est impair. Contradiction.

Ces $18$ vecteurs ne sortent pas de nulle part&nbsp;: ils font partie des $24$ vecteurs propres communs aux lignes et aux colonnes du carré de Mermin-Peres (deux qubits, c'est bien un espace de dimension $4$). Et l'on a démontré en 2020 qu'on ne peut pas faire plus court&nbsp;: aucune preuve de ce type n'utilise moins de $18$ vecteurs, en quelque dimension que ce soit.

## Une inégalité pour le laboratoire&nbsp;: le pentagone

Les preuves précédentes sont logiques&nbsp;: elles opposent des certitudes. Aucune expérience n'est parfaite, et pour tester la contextualité il faut une **inégalité**, comme celle de Bell pour la non-localité. La plus simple a été trouvée en 2008 par Alexander Klyachko, Ali Can, Sinem Binicioğlu et Alexander Shumovsky&nbsp;: c'est l'inégalité **KCBS**. Elle ne demande qu'un système à trois états (un qutrit, comme un spin $1$), le plus petit pour lequel la contextualité est possible.

On considère cinq questions à réponse oui ou non, $A\_1,\dots,A\_5$, disposées en pentagone. Deux questions voisines sont compatibles, et **exclusives**&nbsp;: elles ne peuvent pas répondre oui toutes les deux.

<div class="svg-container">
<svg viewBox="0 0 600 310" role="img" aria-label="À gauche, le pentagone des cinq mesures : deux mesures voisines sont compatibles et ne peuvent pas répondre oui toutes les deux, si bien qu'au plus deux mesures sur cinq répondent oui. À droite, cinq directions de l'espace disposées en parapluie autour de l'état du système : chaque direction est perpendiculaire à ses deux voisines du pentagone, qui dessinent une étoile à cinq branches." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="kca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<polygon points="150.0,48.0 237.5,111.6 204.1,214.4 95.9,214.4 62.5,111.6" fill="#f5f8fa" stroke="#004D80" stroke-width="2"/>
<circle cx="150.0" cy="48.0" r="19" fill="#004D80" stroke="#004D80" stroke-width="2"/>
<text x="151.0" y="53.0" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="9.8">1</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="237.5" cy="111.6" r="19" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="238.5" y="116.6" font-size="14" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="9.8">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="204.1" cy="214.4" r="19" fill="#004D80" stroke="#004D80" stroke-width="2"/>
<text x="205.1" y="219.4" font-size="14" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="9.8">3</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="95.9" cy="214.4" r="19" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="96.9" y="219.4" font-size="14" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="9.8">4</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="62.5" cy="111.6" r="19" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="63.5" y="116.6" font-size="14" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="9.8">5</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<text x="150.0" y="268.0" font-size="13" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >au plus deux « oui » (disques pleins)</text>
<text x="150.0" y="287.0" font-size="13" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >sans voisins : somme ≤ 2</text>
<polyline points="570.1,123.5 569.7,119.6 568.5,115.8 566.4,112.0 563.6,108.2 560.0,104.6 555.6,101.1 550.5,97.7 544.7,94.5 538.2,91.5 531.1,88.7 523.4,86.1 515.2,83.7 506.5,81.6 497.5,79.8 488.0,78.2 478.2,76.9 468.2,75.9 458.1,75.2 447.8,74.8 437.4,74.8 427.1,75.0 416.8,75.5 406.7,76.4 396.9,77.5 387.2,78.9 378.0,80.7 369.1,82.6 360.6,84.9 352.7,87.4 345.3,90.1 338.5,93.0 332.4,96.1 326.9,99.4 322.1,102.8 318.1,106.4 314.9,110.1 312.5,113.9 310.8,117.7 310.0,121.6 310.0,125.4 310.8,129.3 312.5,133.1 314.9,136.9 318.1,140.6 322.1,144.1 326.9,147.6 332.4,150.9 338.5,154.0 345.3,156.9 352.7,159.6 360.6,162.1 369.1,164.4 378.0,166.3 387.2,168.0 396.9,169.5 406.7,170.6 416.8,171.5 427.1,172.0 437.4,172.2 447.8,172.1 458.1,171.8 468.2,171.1 478.2,170.1 488.0,168.8 497.5,167.2 506.5,165.4 515.2,163.3 523.4,160.9 531.1,158.3 538.2,155.5 544.7,152.5 550.5,149.2 555.6,145.9 560.0,142.4 563.6,138.7 566.4,135.0 568.5,131.2 569.7,127.4 570.1,123.5" fill="none" stroke="#cbd5e1" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="3 4"/>
<polyline points="566.1,111.4 319.1,105.5 509.6,164.7 448.3,74.9 356.9,161.0 566.1,111.4" fill="none" stroke="#80a6c0" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 4"/>
<line x1="440.0" y1="232.0" x2="448.3" y2="74.9" stroke="#004D80" stroke-width="2.2"/>
<circle cx="448.3" cy="74.9" r="5" fill="#004D80"/>
<line x1="440.0" y1="232.0" x2="319.1" y2="105.5" stroke="#004D80" stroke-width="2.2"/>
<circle cx="319.1" cy="105.5" r="5" fill="#004D80"/>
<line x1="440.0" y1="232.0" x2="566.1" y2="111.4" stroke="#004D80" stroke-width="2.2"/>
<circle cx="566.1" cy="111.4" r="5" fill="#004D80"/>
<line x1="440.0" y1="232.0" x2="356.9" y2="161.0" stroke="#004D80" stroke-width="2.2"/>
<circle cx="356.9" cy="161.0" r="5" fill="#004D80"/>
<line x1="440.0" y1="232.0" x2="509.6" y2="164.7" stroke="#004D80" stroke-width="2.2"/>
<circle cx="509.6" cy="164.7" r="5" fill="#004D80"/>
<line x1="440.0" y1="232.0" x2="440.0" y2="40.5" stroke="#970E53" stroke-width="2.6" marker-end="url(#kca)"/>
<text x="450.0" y="46.5" font-size="13" fill="#970E53" text-anchor="start" font-family="Georgia,'Times New Roman',serif" >état du système</text>
<circle cx="440.0" cy="232.0" r="3.5" fill="#334155" />
<text x="440.0" y="268.0" font-size="13" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >cinq directions, chacune perpendiculaire</text>
<text x="440.0" y="287.0" font-size="13" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >aux deux qui lui sont reliées (tirets)</text>
</svg>
</div>
<p class="legende">À gauche, si les réponses préexistent, deux voisines ne sont jamais « oui » ensemble&nbsp;: il y a au plus deux « oui » parmi les cinq. À droite, la réalisation quantique&nbsp;: cinq directions en parapluie autour de l'état du système&nbsp;; les directions reliées par un trait de l'étoile sont perpendiculaires.</p>

Dans un modèle non contextuel, les cinq réponses existent toutes à la fois. Sur un pentagone, on ne peut pas placer plus de deux « oui » sans que deux d'entre eux soient voisins. En moyenne sur de nombreuses répétitions, la somme des cinq probabilités de « oui » obéit donc à

<p style="text-align:center;">
$\displaystyle p(A_1)+p(A_2)+p(A_3)+p(A_4)+p(A_5)\ \leqslant\ 2 .$
</p>

La mécanique quantique fait mieux&nbsp;: en choisissant bien l'état et les cinq directions, la somme atteint $\sqrt5\approx2{,}24$.

<div id="preuve">
<details>
<summary>d'où vient $\sqrt5$</summary>

Chaque question est un projecteur sur une direction $|v\_i\rangle$ de l'espace à trois dimensions. Deux projecteurs sur des directions perpendiculaires commutent et sont exclusifs&nbsp;: il suffit donc de trouver cinq directions telles que chacune soit perpendiculaire à ses deux voisines du pentagone.

Plaçons-les en parapluie autour d'un axe, toutes inclinées du même angle $\theta$, et régulièrement espacées. Deux voisines du pentagone sont séparées par deux cinquièmes de tour ($144°$) autour de l'axe. Leur produit scalaire vaut $\sin^2\theta\cos144°+\cos^2\theta$, et il s'annule quand $\cos^2\theta=\frac{\cos36°}{1+\cos36°}=\frac{1}{\sqrt5}$.

Prenons pour état du système le vecteur $|\psi\rangle$ porté par l'axe. La probabilité de « oui » à chaque question est $|\langle\psi|v\_i\rangle|^2=\cos^2\theta=\frac{1}{\sqrt5}$, et la somme des cinq vaut $\frac{5}{\sqrt5}=\sqrt5$.

</details>
</div>

L'expérience a été faite à Vienne en 2011 avec des photons uniques (Lapkiewicz et ses collaborateurs)&nbsp;: l'inégalité est violée. Le titre de l'article insiste sur le point essentiel, la « non-classicité d'un système quantique indivisible »&nbsp;: pas de paires, pas d'intrication, pas de distance, un seul photon à trois états.

<div class="encadre">
<div class="encadre-titre">Un pont vers la théorie des graphes</div>
<p>Le pentagone n'est qu'un exemple. À toute expérience de ce type, on associe un graphe dont les sommets sont les événements et dont les arêtes relient les événements exclusifs. Adán Cabello, Simone Severini et Andreas Winter ont montré en 2014 que les deux bornes se lisent directement sur le graphe&nbsp;:</p>
<ul>
<li>la borne non contextuelle est son <b>nombre d'indépendance</b> (le plus grand nombre de sommets sans arête entre eux)&nbsp;: $2$ pour le pentagone&nbsp;;</li>
<li>le maximum quantique est son <b>nombre de Lovász</b>&nbsp;: $\sqrt5$ pour le pentagone.</li>
</ul>
<p>Le nombre de Lovász avait été inventé en 1979 pour un tout autre problème, posé par Shannon&nbsp;: quelle quantité d'information peut-on transmettre sans aucune erreur sur un canal bruité dont les confusions possibles forment un pentagone&nbsp;? La réponse, $\sqrt5$ symboles par envoi, était déjà celle de KCBS, trente ans avant.</p>
</div>

## Bell, un cas particulier

Le pentagone a un grand frère célèbre. Ôtez un sommet&nbsp;: on obtient un carré, quatre mesures dont chacune est compatible avec ses deux voisines. C'est exactement le scénario de Bell dans sa version CHSH&nbsp;: Alice choisit entre $A\_1$ et $A\_2$, Bob entre $B\_1$ et $B\_2$, et les quatre contextes sont les quatre paires (mesure d'Alice, mesure de Bob).

<div class="svg-container">
<svg viewBox="0 0 600 260" role="img" aria-label="Trois scénarios en forme de cycle. Chaque sommet est une mesure, chaque arête relie deux mesures que l'on peut effectuer ensemble. Le triangle de Specker n'a pas de réalisation quantique ; le carré est le scénario de Bell (CHSH) ; le pentagone est celui de Klyachko, Can, Binicioğlu et Shumovsky." style="width:100%;max-width:600px;height:auto;">
<polygon points="105.0,38.0 158.7,131.0 51.3,131.0" fill="#f6f7f8" stroke="#64748b" stroke-width="2.2" stroke-linejoin="round"/>
<circle cx="105.0" cy="38.0" r="13" fill="#fff" stroke="#64748b" stroke-width="2"/>
<circle cx="158.7" cy="131.0" r="13" fill="#fff" stroke="#64748b" stroke-width="2"/>
<circle cx="51.3" cy="131.0" r="13" fill="#fff" stroke="#64748b" stroke-width="2"/>
<text x="105.0" y="196.0" font-size="14" fill="#64748b" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">triangle de Specker</text>
<text x="105.0" y="218.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >non contextuel : ≤ 1</text>
<text x="105.0" y="238.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >quantique : pas mieux</text>
<polygon points="343.8,56.2 343.8,143.8 256.2,143.8 256.2,56.2" fill="#f0f4f7" stroke="#004D80" stroke-width="2.2" stroke-linejoin="round"/>
<circle cx="343.8" cy="56.2" r="13" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="344.8" y="60.2" font-size="12" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">B</tspan><tspan dy="4" font-size="8.4">1</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="343.8" cy="143.8" r="13" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="344.8" y="147.8" font-size="12" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="8.4">1</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="256.2" cy="143.8" r="13" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="257.2" y="147.8" font-size="12" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">B</tspan><tspan dy="4" font-size="8.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<circle cx="256.2" cy="56.2" r="13" fill="#fff" stroke="#004D80" stroke-width="2"/>
<text x="257.2" y="60.2" font-size="12" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan><tspan dy="4" font-size="8.4">2</tspan><tspan dy="-4" font-size="1"> </tspan></text>
<text x="300.0" y="196.0" font-size="14" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">carré : Bell (CHSH)</text>
<text x="300.0" y="218.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >local : ≤ 2</text>
<text x="300.0" y="238.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >quantique : 2√2 ≈ 2,83</text>
<polygon points="495.0,38.0 554.0,80.8 531.4,150.2 458.6,150.2 436.0,80.8" fill="#f9f1f5" stroke="#970E53" stroke-width="2.2" stroke-linejoin="round"/>
<circle cx="495.0" cy="38.0" r="13" fill="#fff" stroke="#970E53" stroke-width="2"/>
<circle cx="554.0" cy="80.8" r="13" fill="#fff" stroke="#970E53" stroke-width="2"/>
<circle cx="531.4" cy="150.2" r="13" fill="#fff" stroke="#970E53" stroke-width="2"/>
<circle cx="458.6" cy="150.2" r="13" fill="#fff" stroke="#970E53" stroke-width="2"/>
<circle cx="436.0" cy="80.8" r="13" fill="#fff" stroke="#970E53" stroke-width="2"/>
<text x="495.0" y="196.0" font-size="14" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold">pentagone : KCBS</text>
<text x="495.0" y="218.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >non contextuel : ≤ 2</text>
<text x="495.0" y="238.0" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >quantique : √5 ≈ 2,24</text>
</svg>
</div>
<p class="legende">Trois scénarios, une même structure&nbsp;: des mesures (sommets) compatibles deux à deux (arêtes) le long d'un cycle. Le triangle est la parabole de Specker, sans réalisation quantique. Le carré est celui de Bell. Le pentagone est celui de KCBS.</p>

**La non-localité est une contextualité dont les contextes sont séparés dans l'espace.** Supposer que le résultat d'Alice ne dépend pas de la mesure choisie par Bob, c'est supposer qu'il ne dépend pas du contexte. La page [Limites de la non-localité](../nonlocale/#inégalité-chsh) détaille l'inégalité CHSH et sa borne quantique $2\sqrt2$.

Le lien fonctionne dans les deux sens.

<ul>
<li><b>L'argument GHZ est une preuve de Kochen-Specker.</b> Les règles de parité de la page <a href="../epr/#sans-statistiques-lexpérience-ghz">EPR</a> forment un argument du même type que le carré magique, avec des observables de trois qubits au lieu de deux, chacune confiée à un laboratoire différent.</li>
<li><b>Le carré magique devient un jeu de télépathie.</b> Alice reçoit une ligne du carré, Bob une colonne&nbsp;; chacun doit remplir ses trois cases en respectant le produit imposé, sans communiquer, et ils doivent tomber d'accord sur la case commune. Des joueurs classiques ne gagnent au mieux que $8$ fois sur $9$. En partageant deux paires intriquées et en mesurant les observables de Mermin-Peres, Alice et Bob gagnent à tous les coups.</li>
</ul>

La différence entre les deux théorèmes est dans la **justification** de l'hypothèse. Chez Bell, la non-contextualité est garantie par la physique&nbsp;: si les mesures d'Alice et de Bob sont assez éloignées, la relativité interdit que l'une influence l'autre. Pour un système unique, rien d'aussi fort ne l'impose. Bell lui-même jugeait l'hypothèse de Kochen et Specker discutable&nbsp;: le résultat d'une mesure, écrivait-il, peut raisonnablement dépendre non seulement de l'état du système, mais aussi de la disposition complète de l'appareil. C'est en cherchant une situation où cette échappatoire se ferme qu'il a abouti à son théorème sur la localité.

## Ce que le théorème n'interdit pas

Un théorème d'impossibilité ne vaut que par ses hypothèses. Voici les portes qu'il laisse ouvertes.

### Renoncer aux valeurs définies

C'est la lecture la plus courante&nbsp;: les observables n'ont pas de valeur avant la mesure, et le résultat est créé par l'interaction avec l'appareil. Les approches de type Copenhague, relationnelles ou QBistes n'ont alors rien à expliquer&nbsp;: une « valeur » n'existe que relativement à une expérience complète, contexte compris (voir [Épistémique vs. ontique](../epistovsonto/)).

### Des variables cachées contextuelles

Le théorème n'exclut pas les variables cachées&nbsp;: il exclut celles qui sont non contextuelles. La **mécanique bohmienne** en est l'exemple vivant. Les particules y ont à tout instant une position bien définie, guidée par la fonction d'onde, et la théorie reproduit toutes les prédictions quantiques. Mais le spin n'y est pas une propriété de la particule. Dans un appareil de Stern et Gerlach, la particule sort vers le haut ou vers le bas selon sa position initiale&nbsp;; si l'on inverse le sens de l'aimant, la même particule, partie de la même position, sort du même côté, ce qui signifie désormais le résultat opposé. La « valeur du spin » dépend de la façon dont on la mesure&nbsp;: elle est contextuelle, et la théorie l'assume. Pour un bohmien, mesurer le spin n'est pas révéler une propriété, c'est décrire où va la particule dans un dispositif donné.

### L'objection de la précision finie

En 1999, David Meyer, puis Adrian Kent et Rob Clifton, soulèvent une objection inattendue. Les preuves exigent des directions **exactement** orthogonales. Or on peut colorier sans contradiction un ensemble de directions (celles à coordonnées rationnelles, par exemple) qui approche d'aussi près qu'on veut n'importe quelle direction. Comme aucune expérience n'a une précision infinie, un modèle non contextuel pourrait se cacher dans les marges d'erreur. L'objection a suscité un long débat, et surtout une réponse constructive&nbsp;: reformuler la contextualité de manière à la rendre testable avec des mesures imparfaites.

### La contextualité généralisée de Spekkens

C'est Robert Spekkens qui propose cette reformulation en 2005. Son point de départ est un principe hérité de Leibniz&nbsp;: **ce qu'aucune expérience ne distingue doit être représenté de la même façon.** Dans le vocabulaire des [modèles ontologiques](../epistovsonto/#la-distinction-de-harrigan-et-spekkens), où l'état réel du système est noté $\lambda$, un modèle est non contextuel si deux procédures expérimentales indiscernables (qui donnent les mêmes statistiques dans toutes les expériences possibles) y sont décrites de manière identique.

Cette définition a plusieurs avantages. Elle ne suppose plus que les résultats sont déterminés à l'avance, elle s'applique aux mesures bruitées, et elle ne concerne pas seulement les mesures, mais aussi les **préparations**.

<div class="svg-container">
<svg viewBox="0 0 600 270" role="img" aria-label="Une coupe de la sphère de Bloch. L'état complètement mélangé, au centre, peut se préparer en tirant à pile ou face entre les deux états du haut et du bas, ou entre les deux états de gauche et de droite. Les deux recettes sont indiscernables par toute mesure." style="width:100%;max-width:600px;height:auto;">
<circle cx="300" cy="132" r="100" fill="#f5f8fa" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="300.0" y1="32.0" x2="300.0" y2="232.0" stroke="#004D80" stroke-width="2.4" />
<line x1="200.0" y1="132.0" x2="400.0" y2="132.0" stroke="#970E53" stroke-width="2.4" />
<circle cx="300.0" cy="32.0" r="6" fill="#004D80" />
<text x="300" y="20" font-size="17" fill="#004D80" text-anchor="middle" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|0⟩</text>
<circle cx="300.0" cy="232.0" r="6" fill="#004D80" />
<text x="300" y="256" font-size="17" fill="#004D80" text-anchor="middle" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|1⟩</text>
<circle cx="200.0" cy="132.0" r="6" fill="#970E53" />
<text x="188" y="138" font-size="17" fill="#970E53" text-anchor="end" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|−⟩</text>
<circle cx="400.0" cy="132.0" r="6" fill="#970E53" />
<text x="412" y="138" font-size="17" fill="#970E53" text-anchor="start" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|+⟩</text>
<circle cx="300" cy="132" r="8" fill="#fff" stroke="#334155" stroke-width="2.2"/>
<text x="316.0" y="120.0" font-size="13" fill="#334155" text-anchor="start" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">mélange complet</text>
<text x="96.0" y="60.0" font-size="13.5" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >recette 1 :</text>
<text x="96.0" y="78.0" font-size="13.5" fill="#004D80" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >pile ou face entre</text>
<text x="96" y="98" font-size="15" fill="#004D80" text-anchor="middle" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|0⟩ et |1⟩</text>
<text x="504.0" y="190.0" font-size="13.5" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >recette 2 :</text>
<text x="504.0" y="208.0" font-size="13.5" fill="#970E53" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" >pile ou face entre</text>
<text x="504" y="228" font-size="15" fill="#970E53" text-anchor="middle" font-family="'STIX Two Math','STIX Two Text','Cambria Math','DejaVu Serif','Times New Roman',serif">|+⟩ et |−⟩</text>
</svg>
</div>
<p class="legende">Deux recettes pour préparer le même état mélangé d'un qubit. Aucune mesure ne les distingue. Un modèle non contextuel doit donc leur associer la même distribution de probabilité sur les états réels $\lambda$.</p>

Spekkens démontre que la mécanique quantique est contextuelle en ce sens, et cela **dès un seul qubit**&nbsp;: aucun modèle ne peut représenter de la même façon tous les mélanges indiscernables. Le théorème de Kochen-Specker devient un cas particulier (les mesures idéales à résultats déterminés), et l'objection de la précision finie tombe, puisque les inégalités obtenues tolèrent le bruit. Elles ont été testées, et violées, avec des photons en 2016 (Mazurek et ses collaborateurs).

C'est aussi cette définition qui éclaire la [théorie-jouet de Spekkens](../spekkens/#ce-que-le-jouet-ne-peut-pas-reproduire)&nbsp;: le jouet est un modèle non contextuel au sens généralisé. Tout ce qu'il reproduit (et la liste est longue) peut donc s'expliquer classiquement&nbsp;; ce qui lui échappe désigne la contextualité comme un bon candidat au titre de frontière entre le classique et le quantique.

<div class="encadre">
<div class="encadre-titre">La contextualité, carburant du calcul quantique</div>
<p>Si la contextualité marque la frontière du quantique, elle devrait être ce qui donne leur puissance aux ordinateurs quantiques. C'est bien ce que l'on trouve.</p>
<ul>
<li><b>Les états magiques.</b> Les opérations les plus faciles à protéger contre les erreurs (le formalisme stabilisateur) se simulent efficacement sur un ordinateur classique. Pour calculer vraiment, il faut leur injecter des états spéciaux, dits magiques. Mark Howard, Joel Wallman, Victor Veitch et Joseph Emerson ont montré en 2014 que, pour des systèmes de dimension impaire, un état n'est utile à cette fin que s'il est contextuel.</li>
<li><b>Le calcul par la mesure.</b> Robert Raussendorf a montré en 2013 qu'un ordinateur quantique fondé sur des mesures successives ne peut calculer une fonction non linéaire que si ses corrélations sont contextuelles.</li>
<li><b>Un avantage démontré.</b> En 2018, Sergey Bravyi, David Gosset et Robert König ont prouvé que des circuits quantiques de profondeur constante résolvent un problème hors de portée des circuits classiques de même profondeur. Le cœur de la preuve est un jeu non local de la famille du carré magique et de GHZ.</li>
</ul>
</div>

<br>

<b><i>Sources&nbsp;:</i></b>

- Adlam, E. *Foundations of Quantum Mechanics*, Cambridge Elements, Cambridge University Press (2021).
- Mermin, N. D. « Hidden variables and the two theorems of John Bell », *Reviews of Modern Physics* 65 (1993). [🌐](https://arxiv.org/abs/1802.10119)
- Budroni, C., Cabello, A., Gühne, O., Kleinmann, M. et Larsson, J.-Å. « Kochen-Specker contextuality », *Reviews of Modern Physics* 94 (2022). [🌐](https://arxiv.org/abs/2102.13036)
- Liang, Y.-C., Spekkens, R. et Wiseman, H. « Specker's parable of the overprotective seer: a road to contextuality, nonlocality and complementarity », *Physics Reports* 506 (2011). [🌐](https://arxiv.org/abs/1010.1273)
- Kochen, S. et Specker, E. « The problem of hidden variables in quantum mechanics », *Journal of Mathematics and Mechanics* 17 (1967).
- Cabello, A., Estebaranz, J. et García-Alcaine, G. « Bell-Kochen-Specker theorem: a proof with 18 vectors », *Physics Letters A* 212 (1996). [🌐](https://arxiv.org/abs/quant-ph/9706009)
- Klyachko, A., Can, M. A., Binicioğlu, S. et Shumovsky, A. « Simple test for hidden variables in spin-1 systems », *Physical Review Letters* 101 (2008). [🌐](https://arxiv.org/abs/0706.0126)
- Spekkens, R. « Contextuality for preparations, transformations, and unsharp measurements », *Physical Review A* 71 (2005). [🌐](https://arxiv.org/abs/quant-ph/0406166)
- Howard, M., Wallman, J., Veitch, V. et Emerson, J. « Contextuality supplies the 'magic' for quantum computation », *Nature* 510 (2014). [🌐](https://arxiv.org/abs/1401.4174)

<script>
(function () {
  var svg = document.getElementById('cm-svg');
  if (!svg) return;
  var BLEU = '#004D80', MAG = '#970E53', TEAL = '#006C65';
  function $(id) { return document.getElementById(id); }
  var v = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  function draw() {
    var ok = 0;
    for (var r = 0; r < 3; r++) for (var k = 0; k < 3; k++) {
      var g = $('cm-c' + r + k), col = v[r][k] > 0 ? BLEU : MAG;
      g.firstChild.setAttribute('stroke', col);
      g.firstChild.setAttribute('fill', v[r][k] > 0 ? '#E6EDF2' : '#F5E7EE');
      g.lastChild.setAttribute('fill', col);
      g.lastChild.textContent = v[r][k] > 0 ? '+1' : '−1';
    }
    function mark(id, good) {
      $(id).setAttribute('fill', good ? TEAL : MAG);
      $(id.replace('cm-r', 'cm-rt').replace('cm-k', 'cm-kt')).textContent = good ? '✓' : '✗';
      if (good) ok++;
    }
    for (var r = 0; r < 3; r++) mark('cm-r' + r, v[r][0] * v[r][1] * v[r][2] === 1);
    for (var k = 0; k < 3; k++) mark('cm-k' + k, v[0][k] * v[1][k] * v[2][k] === (k < 2 ? 1 : -1));
    $('cm-n').textContent = ok + ' / 6 contraintes';
  }
  for (var r = 0; r < 3; r++) for (var k = 0; k < 3; k++) (function (r, k) {
    var g = $('cm-c' + r + k);
    function flip(ev) { v[r][k] = -v[r][k]; draw(); if (ev) ev.preventDefault(); }
    g.addEventListener('click', flip);
    g.addEventListener('keydown', function (ev) { if (ev.key === ' ' || ev.key === 'Enter') flip(ev); });
  })(r, k);
  $('cm-reset').addEventListener('click', function () { v = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]; draw(); });
  $('cm-rand').addEventListener('click', function () { for (var r = 0; r < 3; r++) for (var k = 0; k < 3; k++) v[r][k] = Math.random() < 0.5 ? 1 : -1; draw(); });
  draw();
})();
(function () {
  var svg = document.getElementById('cb-svg');
  if (!svg) return;
  var CTX = [[5, 4, 3, 2], [5, 6, 7, 8], [10, 11, 8, 9], [12, 11, 13, 14], [17, 16, 15, 14], [0, 17, 2, 1], [10, 12, 3, 1], [4, 6, 15, 13], [0, 16, 7, 9]];
  var TEAL = '#006C65', MAG = '#970E53', GRIS = '#cbd5e1', TXT = '#334155';
  function $(id) { return document.getElementById(id); }
  var sel = [];
  for (var i = 0; i < 18; i++) sel.push(false);
  function draw() {
    var ok = 0;
    for (var i = 0; i < 18; i++) { var p = $('cb-p' + i); p.setAttribute('fill', sel[i] ? TXT : '#fff'); p.setAttribute('aria-pressed', sel[i]); }
    for (var j = 0; j < 9; j++) {
      var n = 0; for (var k = 0; k < 4; k++) if (sel[CTX[j][k]]) n++;
      var e = $('cb-x' + j);
      e.setAttribute('stroke', n === 1 ? TEAL : (n === 0 ? GRIS : MAG));
      e.setAttribute('stroke-width', n === 0 ? 3 : 4.5);
      if (n === 1) ok++;
    }
    $('cb-n').textContent = ok + ' contexte' + (ok > 1 ? 's' : '') + ' sur 9 avec exactement un vecteur choisi';
  }
  for (var i = 0; i < 18; i++) (function (i) {
    var p = $('cb-p' + i);
    function flip(ev) { sel[i] = !sel[i]; draw(); if (ev) ev.preventDefault(); }
    p.addEventListener('click', flip);
    p.addEventListener('keydown', function (ev) { if (ev.key === ' ' || ev.key === 'Enter') flip(ev); });
  })(i);
  $('cb-reset').addEventListener('click', function () { for (var i = 0; i < 18; i++) sel[i] = false; draw(); });
  draw();
})();
</script>
