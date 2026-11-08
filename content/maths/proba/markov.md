+++
title = "Chaînes de Markov"
date = 2021-03-06T14:20:50+01:00
weight = 2
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


# Chaînes de Markov

Une **chaîne de Markov**, c'est un jeton qui saute de case en case au hasard, avec une seule règle&nbsp;: **pour décider où aller, il ne regarde que la case où il se trouve.** Peu importe le chemin qui l'y a mené. Le futur ne dépend du passé que par le présent.

Cette amnésie paraît être une limitation sévère. C'est au contraire ce qui rend ces objets si maniables, et si répandus&nbsp;: la météo du lendemain, une partie de pile ou face, un jeu de cartes qu'on bat, un marcheur égaré, un moteur de recherche, ou les milliards de spins d'un aimant qu'on simule sur ordinateur. Autant d'exemples de la polyvalence des chaînes de Markov.

<div class="encadre">
<div class="encadre-titre">Markov, Pouchkine et les voyelles</div>
<p>En 1913, Andreï Markov publie la première application de ses chaînes, sur un terrain inattendu&nbsp;: le roman en vers <em>Eugène Onéguine</em> de Pouchkine. Il dispose les 20&nbsp;000 premières lettres du texte (sans espaces ni ponctuation) en tableaux de cent lettres, puis compte les voyelles, les consonnes et les paires de lettres consécutives. Sur les 19&nbsp;999 paires, les voyelles représentent 43&nbsp;% des lettres, mais une voyelle n'est suivie d'une autre voyelle que 1&nbsp;104 fois sur 8&nbsp;638 (13&nbsp;%), alors qu'une consonne est suivie d'une voyelle 7&nbsp;534 fois sur 11&nbsp;361 (66&nbsp;%). Les lettres ne sont pas indépendantes&nbsp;: chacune « se souvient » de la précédente. Markov essaie même une mémoire de deux lettres, qui rend encore mieux compte des fluctuations observées dans le texte.</p>
<p>La théorie, elle, datait de 1906 et était née d'une querelle. Le mathématicien Pavel Nekrassov soutenait que la loi des grands nombres (les moyennes se stabilisent) exigeait des événements indépendants, et il en tirait même des conclusions théologiques sur le libre arbitre. Markov construisit ses chaînes pour lui démontrer que des événements enchaînés obéissent eux aussi à la loi des grands nombres&nbsp;; <em>Onéguine</em> en fournit, sept ans plus tard, l'illustration concrète.</p>
</div>

## Une promenade au hasard sur un graphe

Voici un modèle (très) simplifié de la météo&nbsp;: trois états, soleil, nuages et pluie. Chaque flèche porte la probabilité de passer d'un état à l'autre d'un jour au suivant. Après une journée ensoleillée, il fait encore beau six fois sur dix&nbsp;; après une journée de pluie, il pleut encore quatre fois sur dix. Le jeton rouge parcourt le graphe en tirant au sort chaque nouvelle flèche.

<div class="svg-container">
<svg id="mt-svg" viewBox="0 0 600 590" role="img" aria-label="Une chaîne de Markov à trois états : soleil, nuages, pluie. Chaque flèche porte la probabilité de passer d'un état à l'autre le lendemain. Un jeton parcourt le graphe au hasard ; en dessous, la proportion de jours passés dans chaque état se stabilise sur la loi stationnaire." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="mta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<defs><marker id="mtah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<path id="mt-e00" d="M280.8,74.9 C245.8,30.8 354.2,30.8 319.2,74.9" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e01" d="M268.8,138.1 Q194.4,205.2 151.7,289.2" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e02" d="M319.0,147.5 Q364.4,236.8 434.3,299.9" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e10" d="M161.2,303.9 Q235.6,236.8 278.3,152.8" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e11" d="M104.8,363.1 C77.4,412.3 36.1,312.0 90.2,327.6" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e12" d="M171.5,338.3 Q300.0,358.0 422.6,339.3" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e20" d="M451.0,294.5 Q405.6,205.2 335.7,142.1" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e21" d="M428.5,325.7 Q300.0,306.0 177.4,324.7" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<path id="mt-e22" d="M509.8,327.6 C563.9,312.0 522.6,412.3 495.2,363.1" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#mta)"/>
<text x="300.0" y="37.0" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,60</text>
<text x="202.3" y="214.4" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,30</text>
<text x="370.5" y="235.2" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,10</text>
<text x="227.7" y="237.6" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,30</text>
<text x="57.9" y="366.7" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,40</text>
<text x="298.5" y="353.4" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,30</text>
<text x="399.5" y="216.8" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,20</text>
<text x="301.5" y="320.6" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,40</text>
<text x="542.1" y="366.7" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">0,40</text>
<circle id="mt-n0" cx="300" cy="110" r="40" fill="#f8efe2" stroke="#C2770B" stroke-width="2.2"/>
<text x="300.0" y="115.0" text-anchor="middle" font-size="15" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >soleil</text>
<circle id="mt-n1" cx="130" cy="332" r="40" fill="#eceef1" stroke="#64748b" stroke-width="2.2"/>
<text x="130.0" y="337.0" text-anchor="middle" font-size="15" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >nuages</text>
<circle id="mt-n2" cx="470" cy="332" r="40" fill="#e0eaf0" stroke="#004D80" stroke-width="2.2"/>
<text x="470.0" y="337.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >pluie</text>
<circle id="mt-tok" cx="300" cy="110" r="9" fill="#970E53" stroke="#fff" stroke-width="2"/>
<line x1="60.0" y1="565.0" x2="560.0" y2="565.0" stroke="#94a3b8" stroke-width="1" />
<rect id="mt-b0" x="110" y="565" width="80" height="0" fill="#ddb479"/>
<line x1="102" y1="497.6" x2="198" y2="497.6" stroke="#334155" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="150.0" y="583.0" text-anchor="middle" font-size="13" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >soleil</text>
<text id="mt-v0" x="150" y="559" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round"></text>
<rect id="mt-b1" x="270" y="565" width="80" height="0" fill="#aab3bf"/>
<line x1="262" y1="503.2" x2="358" y2="503.2" stroke="#334155" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="310.0" y="583.0" text-anchor="middle" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >nuages</text>
<text id="mt-v1" x="310" y="559" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round"></text>
<rect id="mt-b2" x="430" y="565" width="80" height="0" fill="#739db9"/>
<line x1="422" y1="522.8" x2="518" y2="522.8" stroke="#334155" stroke-width="1.6" stroke-dasharray="5 3"/>
<text x="470.0" y="583.0" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >pluie</text>
<text id="mt-v2" x="470" y="559" font-size="13" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round"></text>
<text id="mt-day" x="560" y="431" font-size="13" fill="#64748b" text-anchor="end" font-family="Georgia,'Times New Roman',serif">jour 0</text>
<text x="60.0" y="431.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >proportion des jours passés dans chaque état</text>
<text x="560.0" y="449.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >tirets : loi stationnaire</text>
</svg>
<div class="fig-commandes"><button type="button" id="mt-go">❚❚ Pause</button> <button type="button" id="mt-fast">Accélérer ×50</button> <button type="button" id="mt-reset">Remettre à zéro</button></div>
</div>
<p class="legende">Le jeton suit les flèches au hasard, avec les probabilités indiquées. En bas, la proportion des jours passés dans chaque état&nbsp;: elle fluctue d'abord, puis se cale sur les tirets, quelle que soit l'histoire du jeton. Accélérez pour voir la convergence.</p>

Toute l'information tient dans un tableau, la **matrice de transition**, dont la case $(i,j)$ contient la probabilité d'aller de $i$ vers $j$&nbsp;:

<p style="text-align:center;">
$\displaystyle P=\begin{pmatrix}0{,}6 & 0{,}3 & 0{,}1\\ 0{,}3 & 0{,}4 & 0{,}3\\ 0{,}2 & 0{,}4 & 0{,}4\end{pmatrix}$
</p>

Chaque ligne est une loi de probabilité (ses termes sont positifs et de somme $1$)&nbsp;: c'est le « dé » qu'on lance quand le jeton se trouve dans l'état correspondant.

<div id="def">
<p><b>Chaîne de Markov.</b> Une suite d'états aléatoires $X_0, X_1, X_2,\dots$ à valeurs dans un ensemble fini $E$ est une chaîne de Markov de matrice de transition $P=(p_{ij})$ si, pour tout instant $t$ et tous états,</p>
<p style="text-align:center;">$\mathbb{P}(X_{t+1}=j \mid X_t=i,\ X_{t-1}=i_{t-1},\dots,X_0=i_0)=\mathbb{P}(X_{t+1}=j\mid X_t=i)=p_{ij}.$</p>
<p>La matrice $P$ est dite <b>stochastique</b>&nbsp;: ses coefficients sont positifs et chaque ligne a pour somme $1$.</p>
</div>

Ce qui rend le formalisme si agréable, c'est que **suivre la loi de probabilité revient à multiplier des matrices**. Notons $\mu\_t$ la loi de $X\_t$, écrite comme un vecteur ligne (par exemple $\mu\_0=(1,0,0)$ s'il fait beau le jour $0$). La formule des probabilités totales donne immédiatement&nbsp;:

<p style="text-align:center;">
$\displaystyle \mu_{t+1}=\mu_t\,P \qquad\text{et donc}\qquad \mu_t=\mu_0\,P^t.$
</p>

La case $(i,j)$ de $P^t$ est la probabilité d'aller de $i$ à $j$ en exactement $t$ pas. Toute la dynamique est contenue dans les puissances d'une matrice.

<div class="encadre">
<div class="encadre-titre">Shannon et les textes de Markov</div>
<p>En 1948, dans l'article qui fonde la théorie de l'information, Claude Shannon reprend l'idée de Markov pour <em>fabriquer</em> du texte. On choisit chaque lettre au hasard en ne regardant que les $k$ précédentes, avec les fréquences observées dans un vrai texte. C'est une chaîne de Markov dont les états sont les suites de $k$ lettres. Voici ce que donne la recette appliquée à l'ensemble des pages de ce site&nbsp;:</p>
<p><b>Deux lettres de mémoire</b>&nbsp;:</p>
<p class="texte-markov">Résure du de dant symble le, Jactiqui dans. On damplées s'éque et et de terayonn du prés une de aut le sois possonnen ce.</p>
<p><b>Six lettres de mémoire</b>&nbsp;:</p>
<p class="texte-markov">Soit une vers la formule qui donne à une doubles noms des par exemple précédent choisis aléatoire, il suffit qu'échangent pas connexes Gell-Mann-Low est une phase une hydrodynamique.</p>
<p><b>Deux mots de mémoire</b>&nbsp;:</p>
<p class="texte-markov">La transformée de Legendre permet d'encoder différemment l'information d'une fonction. En particulier, l'évolution dans le cadre de la figure suivante ici dans une boîte, ce qui existe sans qu'on ait affaire à un point alors que la capacité par unité de volume.</p>
<p>Le français émerge à mesure que la mémoire s'allonge, sans que la machine « comprenne » quoi que ce soit. Les modèles de langage actuels ne sont plus des chaînes de Markov au sens strict, mais ils prolongent cette idée&nbsp;: prédire le mot suivant à partir de ceux qui précèdent.</p>
</div>

## Le point fixe de la danse des probabilités

Dans l'animation, l'histogramme se stabilise. Ce n'est pas un hasard&nbsp;: la loi $\mu\_t$ elle-même converge. Avec trois états, une loi de probabilité $(a,b,c)$ est un point d'un triangle, le **simplexe** (chaque sommet est une certitude, le centre est l'incertitude maximale, voir la page [Simplexes et probabilités](../simplexes_proba/)). Multiplier par $P$ déplace ce point. Itérons depuis différents départs&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 600 380" role="img" aria-label="Le triangle des lois de probabilité sur trois états. Partant d'un sommet (certitude) ou d'un point quelconque, la loi du temps t avance pas à pas et converge vers le même point, la loi stationnaire." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="sxa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<polygon points="300.0,30.0 95.0,345.0 505.0,345.0" fill="#f5f8fa" stroke="#94a3b8" stroke-width="1.4"/>
<text x="300.0" y="18.0" text-anchor="middle" font-size="13.5" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >soleil certain</text>
<text x="95.0" y="367.0" text-anchor="middle" font-size="13.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >nuages</text>
<text x="505.0" y="367.0" text-anchor="middle" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >pluie</text>
<polyline points="300.0,30.0 259.0,156.0 269.2,196.9 273.8,212.1 275.5,217.7 276.1,219.8 276.3,220.6 276.4,220.9 276.5,221.0 276.5,221.0 276.5,221.1 276.5,221.1 276.5,221.1" fill="none" stroke="#C2770B" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.75"/>
<circle cx="300.0" cy="30.0" r="4.2" fill="#C2770B" />
<circle cx="259.0" cy="156.0" r="2.8" fill="#C2770B" />
<circle cx="269.2" cy="196.9" r="2.8" fill="#C2770B" />
<circle cx="273.8" cy="212.1" r="2.8" fill="#C2770B" />
<circle cx="275.5" cy="217.7" r="2.8" fill="#C2770B" />
<circle cx="276.1" cy="219.8" r="2.8" fill="#C2770B" />
<circle cx="276.3" cy="220.6" r="2.8" fill="#C2770B" />
<circle cx="276.4" cy="220.9" r="2.8" fill="#C2770B" />
<circle cx="276.5" cy="221.0" r="2.8" fill="#C2770B" />
<circle cx="276.5" cy="221.0" r="2.8" fill="#C2770B" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#C2770B" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#C2770B" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#C2770B" />
<polyline points="95.0,345.0 279.5,250.5 279.5,231.6 277.7,225.0 276.9,222.5 276.6,221.6 276.5,221.3 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1" fill="none" stroke="#64748b" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.75"/>
<circle cx="95.0" cy="345.0" r="4.2" fill="#64748b" />
<circle cx="279.5" cy="250.5" r="2.8" fill="#64748b" />
<circle cx="279.5" cy="231.6" r="2.8" fill="#64748b" />
<circle cx="277.7" cy="225.0" r="2.8" fill="#64748b" />
<circle cx="276.9" cy="222.5" r="2.8" fill="#64748b" />
<circle cx="276.6" cy="221.6" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.3" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#64748b" />
<polyline points="505.0,345.0 300.0,282.0 283.6,244.2 279.1,229.7 277.5,224.3 276.8,222.3 276.6,221.5 276.5,221.2 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1" fill="none" stroke="#004D80" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.75"/>
<circle cx="505.0" cy="345.0" r="4.2" fill="#004D80" />
<circle cx="300.0" cy="282.0" r="2.8" fill="#004D80" />
<circle cx="283.6" cy="244.2" r="2.8" fill="#004D80" />
<circle cx="279.1" cy="229.7" r="2.8" fill="#004D80" />
<circle cx="277.5" cy="224.3" r="2.8" fill="#004D80" />
<circle cx="276.8" cy="222.3" r="2.8" fill="#004D80" />
<circle cx="276.6" cy="221.5" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.2" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#004D80" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#004D80" />
<polyline points="443.5,313.5 293.9,266.2 281.8,238.2 278.4,227.5 277.2,223.5 276.7,222.0 276.6,221.4 276.5,221.2 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1 276.5,221.1" fill="none" stroke="#970E53" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" stroke-opacity="0.75"/>
<circle cx="443.5" cy="313.5" r="4.2" fill="#970E53" />
<circle cx="293.9" cy="266.2" r="2.8" fill="#970E53" />
<circle cx="281.8" cy="238.2" r="2.8" fill="#970E53" />
<circle cx="278.4" cy="227.5" r="2.8" fill="#970E53" />
<circle cx="277.2" cy="223.5" r="2.8" fill="#970E53" />
<circle cx="276.7" cy="222.0" r="2.8" fill="#970E53" />
<circle cx="276.6" cy="221.4" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.2" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="2.8" fill="#970E53" />
<circle cx="276.5" cy="221.1" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
<text x="290.5" y="243.1" text-anchor="start" font-size="18" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >π</text>
<text x="560.0" y="120.0" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >chaque point : la loi</text>
<text x="560.0" y="136.0" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >d'un jour donné</text>
</svg>
</div>
<p class="legende">Chaque trajectoire suit la loi du temps qu'il fait, jour après jour, en partant d'une certitude (un sommet) ou d'une loi quelconque (en rouge). Toutes convergent vers le même point $\pi$&nbsp;: la chaîne oublie d'où elle est partie.</p>

Le point d'arrivée $\pi$ ne bouge plus quand on le multiplie par $P$&nbsp;: c'est un **point fixe**, la **loi stationnaire** (ou invariante). Ici, $\pi=\left(\frac{24}{61},\frac{22}{61},\frac{15}{61}\right)\approx(0{,}39\\;;\\;0{,}36\\;;\\;0{,}25)$&nbsp;: c'est la hauteur des tirets de l'histogramme. Sur le long terme, il fait beau 39&nbsp;% du temps, quel que soit le temps qu'il faisait au départ.

<div id="theo">
<p><b>Théorème de convergence</b> 

Si la chaîne est <b>irréductible</b> (on peut aller de tout état à tout autre) et <b>apériodique</b> (elle n'est pas condamnée à revenir sur ses pas selon un rythme fixe), alors il existe une unique loi $\pi$ telle que $\pi P=\pi$, et pour toute loi de départ $\mu_0$&nbsp;:</p>
<p style="text-align:center;">$\mu_0P^t\xrightarrow[t\to\infty]{}\pi.$</p>
<p>De plus, la proportion du temps passé dans chaque état $x$ tend vers $\pi(x)$ (loi des grands nombres de Markov).</p>
</div>

Les deux hypothèses ne sont pas des détails techniques&nbsp;: chacune exclut une façon de ne pas converger.

<div class="svg-container">
<svg viewBox="0 0 600 200" role="img" aria-label="Deux chaînes qui ne convergent pas. À gauche, une chaîne périodique : le jeton alterne à coup sûr entre deux états, sa loi oscille sans fin. À droite, une chaîne réductible : deux groupes d'états qui ne communiquent pas, la limite dépend du point de départ." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="oba" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<path d="M102.5,103.4 Q155.0,123.0 201.9,105.5" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="153.6" y="118.7" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">1</text>
<path d="M207.5,86.6 Q155.0,67.0 108.1,84.5" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="156.4" y="81.3" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">1</text>
<circle cx="80" cy="95" r="22" fill="#e6edf2" stroke="#004D80" stroke-width="2"/><text x="80.0" y="100.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >A</text>
<circle cx="230" cy="95" r="22" fill="#e6edf2" stroke="#004D80" stroke-width="2"/><text x="230.0" y="100.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >B</text>
<text x="155.0" y="175.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >périodique : A, B, A, B…</text>
<path d="M383.1,76.5 Q410.0,84.0 431.1,78.1" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="408.6" y="85.6" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">½</text>
<path d="M436.9,63.5 Q410.0,56.0 388.9,61.9" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="411.4" y="64.4" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">1</text>
<path d="M383.1,146.5 Q410.0,154.0 431.1,148.1" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="408.6" y="155.6" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">1</text>
<path d="M436.9,133.5 Q410.0,126.0 388.9,131.9" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="411.4" y="134.4" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">1</text>
<path d="M340,58 C290,30 290,95 338,78" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#oba)"/>
<text x="298.0" y="52.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >½</text>
<circle cx="360" cy="70" r="22" fill="#e6f0f0" stroke="#006C65" stroke-width="2"/><text x="360.0" y="75.0" text-anchor="middle" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >C</text>
<circle cx="460" cy="70" r="22" fill="#e6f0f0" stroke="#006C65" stroke-width="2"/><text x="460.0" y="75.0" text-anchor="middle" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >D</text>
<circle cx="360" cy="140" r="22" fill="#f5e7ee" stroke="#970E53" stroke-width="2"/><text x="360.0" y="145.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >E</text>
<circle cx="460" cy="140" r="22" fill="#f5e7ee" stroke="#970E53" stroke-width="2"/><text x="460.0" y="145.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >F</text>
<line x1="300" y1="105" x2="530" y2="105" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<text x="445.0" y="190.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >réductible : deux mondes séparés</text>
</svg>
</div>
<p class="legende">À gauche, le jeton alterne à coup sûr&nbsp;: partie de A, sa loi vaut $(1,0)$, $(0,1)$, $(1,0)$… et ne converge jamais (pourtant $\left(\frac12,\frac12\right)$ est bien stationnaire). À droite, une fois dans l'un des deux mondes, on n'en sort plus&nbsp;: la limite dépend du point de départ.</p>

<div id="preuve">
<details>
<summary>pourquoi ça converge&nbsp;: le cas de la grenouille</summary>

Le livre de Levin et Peres ouvre sur une grenouille qui vit sur deux nénuphars, E et O. Chaque matin, elle lance la pièce posée sur son nénuphar et saute sur l'autre si elle obtient pile&nbsp;: avec probabilité $p$ depuis E, $q$ depuis O. La matrice est $P=\begin{pmatrix}1-p&p\\ q&1-q\end{pmatrix}$ et la loi stationnaire vaut $\pi=\left(\frac{q}{p+q},\frac{p}{p+q}\right)$.

Notons $\Delta\_t=\mu\_t(\text{E})-\frac{q}{p+q}$ l'écart à l'équilibre. Comme $\mu\_{t+1}(\text{E})=(1-p)\mu\_t(\text{E})+q\big(1-\mu\_t(\text{E})\big)$, un calcul d'une ligne donne $\Delta\_{t+1}=(1-p-q)\Delta\_t$, donc&nbsp;:

<p style="text-align:center;">$\Delta_t=(1-p-q)^t\,\Delta_0.$</p>

L'écart fond comme une suite géométrique de raison $1-p-q$, qui est la seconde valeur propre de $P$. Il ne fond pas quand $|1-p-q|=1$&nbsp;: soit $p=q=0$ (la grenouille ne bouge jamais, la chaîne est réductible), soit $p=q=1$ (elle saute tous les jours, la chaîne est périodique). On retrouve exactement les deux obstacles.

Pour la météo, c'est pareil avec trois états&nbsp;: les valeurs propres de $P$ sont $1$, $\frac{2+\sqrt3}{10}\approx0{,}37$ et $\frac{2-\sqrt3}{10}\approx0{,}03$. La première correspond à $\pi$, les deux autres mesurent la vitesse à laquelle le reste s'efface&nbsp;: l'écart à l'équilibre est divisé par près de $3$ chaque jour, d'où la convergence en quelques pas visible dans le triangle.
</details>
</div>

<div class="encadre">
<div class="encadre-titre">PageRank&nbsp;: la loi stationnaire qui a fait la fortune de Google</div>
<p>En 1998, Sergey Brin et Larry Page cherchent à classer les pages du web. Leur idée&nbsp;: imaginer un internaute qui clique au hasard sur l'un des liens de la page où il se trouve, et qui, de temps en temps (15&nbsp;% du temps), saute sur une page quelconque. C'est une chaîne de Markov dont les états sont les pages. Le score d'une page, son <b>PageRank</b>, est la proportion du temps que l'internaute y passe à long terme&nbsp;: sa loi stationnaire.</p>
<div class="svg-container">
<svg viewBox="0 0 600 300" role="img" aria-label="Un petit web de six pages. Les flèches sont les liens. Le surfeur aléatoire suit un lien au hasard, et de temps en temps saute sur une page quelconque. La taille de chaque page est proportionnelle au temps qu'il y passe : c'est son PageRank." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="pra" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<path d="M102.3,120.1 Q96.0,152.5 102.3,185.1" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M144.3,102.1 Q184.4,127.8 216.7,136.2" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M144.2,215.1 Q195.9,200.2 224.4,180.9" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M227.9,122.9 Q195.6,102.2 154.4,91.5" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M317.4,133.9 Q351.6,122.4 376.9,103.0" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M443.0,113.5 Q458.9,143.5 480.7,163.6" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M471.8,205.6 Q441.0,209.1 410.1,224.7" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M473.7,185.3 Q397.7,161.3 324.9,154.8" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<path d="M386.7,208.7 Q408.5,161.3 413.2,123.8" fill="none" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#pra)"/>
<circle cx="110" cy="80" r="38.8" fill="#88acc4" stroke="#004D80" stroke-width="1.6"/>
<text x="110.0" y="85.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >13 %</text>
<circle cx="110" cy="225" r="33.6" fill="#a6c1d3" stroke="#004D80" stroke-width="1.6"/>
<text x="110.0" y="230.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >8 %</text>
<circle cx="270" cy="150" r="48.1" fill="#407aa0" stroke="#004D80" stroke-width="1.6"/>
<text x="270.0" y="155.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" >24 %</text>
<circle cx="420" cy="70" r="47.2" fill="#477fa4" stroke="#004D80" stroke-width="1.6"/>
<text x="420.0" y="75.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" >23 %</text>
<circle cx="520" cy="200" r="46.6" fill="#4d83a6" stroke="#004D80" stroke-width="1.6"/>
<text x="520.0" y="205.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" >22 %</text>
<circle cx="370" cy="245" r="37.9" fill="#8db0c6" stroke="#004D80" stroke-width="1.6"/>
<text x="370.0" y="250.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >12 %</text>
</svg>
</div>
<p class="legende">Six pages et leurs liens&nbsp;; la taille de chaque disque est proportionnelle à son PageRank. Une page est importante si des pages importantes pointent vers elle&nbsp;: la définition est circulaire, et c'est précisément l'équation $\pi=\pi P$ qui la rend cohérente.</p>
<p>Le saut aléatoire n'est pas qu'un détail&nbsp;: il rend la chaîne irréductible et apériodique, ce qui garantit l'existence, l'unicité et la convergence du classement, et il évite que l'internaute reste piégé dans un recoin du web sans liens sortants.</p>
</div>

<div class="encadre">
<div class="encadre-titre">Sept battements suffisent</div>
<p>Converger, oui, mais en combien de temps&nbsp;? Battre un jeu de cartes, c'est faire avancer une chaîne de Markov dont les états sont les $52!\approx8\times10^{67}$ ordres possibles du jeu&nbsp;; sa loi stationnaire est la loi uniforme, le mélange parfait. Pour le battement à l'américaine (on coupe le jeu en deux et on entrelace les deux paquets), Dave Bayer et Persi Diaconis ont calculé en 1992 la distance exacte au mélange parfait après chaque battement.</p>
<div class="svg-container">
<svg viewBox="0 0 600 470" role="img" aria-label="Un jeu de 52 cartes, colorées selon leur position de départ, après 0 à 12 battements à l'américaine. Les premières lignes gardent de longues suites ordonnées ; vers 7 battements, l'ordre a disparu à l'œil. À droite, la distance exacte au mélange parfait : elle reste proche de 1 pendant cinq battements, puis s'effondre brutalement." style="width:100%;max-width:600px;height:auto;">
<text x="213.2" y="18.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >le jeu, carte par carte</text>
<text x="478.0" y="18.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >distance au mélange parfait</text>
<text x="42.0" y="51.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<rect x="52.0" y="34" width="6.5" height="24" fill="#004d80"/>
<rect x="58.2" y="34" width="6.5" height="24" fill="#034c7f"/>
<rect x="64.4" y="34" width="6.5" height="24" fill="#064b7e"/>
<rect x="70.6" y="34" width="6.5" height="24" fill="#09497d"/>
<rect x="76.8" y="34" width="6.5" height="24" fill="#0c487c"/>
<rect x="83.0" y="34" width="6.5" height="24" fill="#0f477c"/>
<rect x="89.2" y="34" width="6.5" height="24" fill="#12467b"/>
<rect x="95.4" y="34" width="6.5" height="24" fill="#15447a"/>
<rect x="101.6" y="34" width="6.5" height="24" fill="#184379"/>
<rect x="107.8" y="34" width="6.5" height="24" fill="#1b4278"/>
<rect x="114.0" y="34" width="6.5" height="24" fill="#1e4177"/>
<rect x="120.2" y="34" width="6.5" height="24" fill="#213f76"/>
<rect x="126.4" y="34" width="6.5" height="24" fill="#243e75"/>
<rect x="132.6" y="34" width="6.5" height="24" fill="#263d75"/>
<rect x="138.8" y="34" width="6.5" height="24" fill="#293c74"/>
<rect x="145.0" y="34" width="6.5" height="24" fill="#2c3a73"/>
<rect x="151.2" y="34" width="6.5" height="24" fill="#2f3972"/>
<rect x="157.4" y="34" width="6.5" height="24" fill="#323871"/>
<rect x="163.6" y="34" width="6.5" height="24" fill="#353770"/>
<rect x="169.8" y="34" width="6.5" height="24" fill="#38366f"/>
<rect x="176.0" y="34" width="6.5" height="24" fill="#3b346e"/>
<rect x="182.2" y="34" width="6.5" height="24" fill="#3e336d"/>
<rect x="188.4" y="34" width="6.5" height="24" fill="#41326d"/>
<rect x="194.6" y="34" width="6.5" height="24" fill="#44316c"/>
<rect x="200.8" y="34" width="6.5" height="24" fill="#472f6b"/>
<rect x="207.0" y="34" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="213.2" y="34" width="6.5" height="24" fill="#4d2d69"/>
<rect x="219.4" y="34" width="6.5" height="24" fill="#502c68"/>
<rect x="225.6" y="34" width="6.5" height="24" fill="#532a67"/>
<rect x="231.8" y="34" width="6.5" height="24" fill="#562966"/>
<rect x="238.0" y="34" width="6.5" height="24" fill="#592866"/>
<rect x="244.2" y="34" width="6.5" height="24" fill="#5c2765"/>
<rect x="250.4" y="34" width="6.5" height="24" fill="#5f2564"/>
<rect x="256.6" y="34" width="6.5" height="24" fill="#622463"/>
<rect x="262.8" y="34" width="6.5" height="24" fill="#652362"/>
<rect x="269.0" y="34" width="6.5" height="24" fill="#682261"/>
<rect x="275.2" y="34" width="6.5" height="24" fill="#6b2160"/>
<rect x="281.4" y="34" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="287.6" y="34" width="6.5" height="24" fill="#711e5e"/>
<rect x="293.8" y="34" width="6.5" height="24" fill="#731d5e"/>
<rect x="300.0" y="34" width="6.5" height="24" fill="#761c5d"/>
<rect x="306.2" y="34" width="6.5" height="24" fill="#791a5c"/>
<rect x="312.4" y="34" width="6.5" height="24" fill="#7c195b"/>
<rect x="318.6" y="34" width="6.5" height="24" fill="#7f185a"/>
<rect x="324.8" y="34" width="6.5" height="24" fill="#821759"/>
<rect x="331.0" y="34" width="6.5" height="24" fill="#851558"/>
<rect x="337.2" y="34" width="6.5" height="24" fill="#881457"/>
<rect x="343.4" y="34" width="6.5" height="24" fill="#8b1357"/>
<rect x="349.6" y="34" width="6.5" height="24" fill="#8e1256"/>
<rect x="355.8" y="34" width="6.5" height="24" fill="#911055"/>
<rect x="362.0" y="34" width="6.5" height="24" fill="#940f54"/>
<rect x="368.2" y="34" width="6.5" height="24" fill="#970e53"/>
<rect x="408" y="38" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="38" width="140.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="50.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1,00</text>
<text x="42.0" y="82.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<rect x="52.0" y="65" width="6.5" height="24" fill="#3e336d"/>
<rect x="58.2" y="65" width="6.5" height="24" fill="#004d80"/>
<rect x="64.4" y="65" width="6.5" height="24" fill="#41326d"/>
<rect x="70.6" y="65" width="6.5" height="24" fill="#034c7f"/>
<rect x="76.8" y="65" width="6.5" height="24" fill="#44316c"/>
<rect x="83.0" y="65" width="6.5" height="24" fill="#064b7e"/>
<rect x="89.2" y="65" width="6.5" height="24" fill="#472f6b"/>
<rect x="95.4" y="65" width="6.5" height="24" fill="#09497d"/>
<rect x="101.6" y="65" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="107.8" y="65" width="6.5" height="24" fill="#4d2d69"/>
<rect x="114.0" y="65" width="6.5" height="24" fill="#0c487c"/>
<rect x="120.2" y="65" width="6.5" height="24" fill="#502c68"/>
<rect x="126.4" y="65" width="6.5" height="24" fill="#532a67"/>
<rect x="132.6" y="65" width="6.5" height="24" fill="#0f477c"/>
<rect x="138.8" y="65" width="6.5" height="24" fill="#562966"/>
<rect x="145.0" y="65" width="6.5" height="24" fill="#592866"/>
<rect x="151.2" y="65" width="6.5" height="24" fill="#5c2765"/>
<rect x="157.4" y="65" width="6.5" height="24" fill="#5f2564"/>
<rect x="163.6" y="65" width="6.5" height="24" fill="#622463"/>
<rect x="169.8" y="65" width="6.5" height="24" fill="#652362"/>
<rect x="176.0" y="65" width="6.5" height="24" fill="#12467b"/>
<rect x="182.2" y="65" width="6.5" height="24" fill="#682261"/>
<rect x="188.4" y="65" width="6.5" height="24" fill="#6b2160"/>
<rect x="194.6" y="65" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="200.8" y="65" width="6.5" height="24" fill="#15447a"/>
<rect x="207.0" y="65" width="6.5" height="24" fill="#184379"/>
<rect x="213.2" y="65" width="6.5" height="24" fill="#1b4278"/>
<rect x="219.4" y="65" width="6.5" height="24" fill="#711e5e"/>
<rect x="225.6" y="65" width="6.5" height="24" fill="#1e4177"/>
<rect x="231.8" y="65" width="6.5" height="24" fill="#731d5e"/>
<rect x="238.0" y="65" width="6.5" height="24" fill="#213f76"/>
<rect x="244.2" y="65" width="6.5" height="24" fill="#243e75"/>
<rect x="250.4" y="65" width="6.5" height="24" fill="#263d75"/>
<rect x="256.6" y="65" width="6.5" height="24" fill="#761c5d"/>
<rect x="262.8" y="65" width="6.5" height="24" fill="#791a5c"/>
<rect x="269.0" y="65" width="6.5" height="24" fill="#293c74"/>
<rect x="275.2" y="65" width="6.5" height="24" fill="#7c195b"/>
<rect x="281.4" y="65" width="6.5" height="24" fill="#7f185a"/>
<rect x="287.6" y="65" width="6.5" height="24" fill="#2c3a73"/>
<rect x="293.8" y="65" width="6.5" height="24" fill="#2f3972"/>
<rect x="300.0" y="65" width="6.5" height="24" fill="#821759"/>
<rect x="306.2" y="65" width="6.5" height="24" fill="#323871"/>
<rect x="312.4" y="65" width="6.5" height="24" fill="#851558"/>
<rect x="318.6" y="65" width="6.5" height="24" fill="#881457"/>
<rect x="324.8" y="65" width="6.5" height="24" fill="#8b1357"/>
<rect x="331.0" y="65" width="6.5" height="24" fill="#353770"/>
<rect x="337.2" y="65" width="6.5" height="24" fill="#38366f"/>
<rect x="343.4" y="65" width="6.5" height="24" fill="#8e1256"/>
<rect x="349.6" y="65" width="6.5" height="24" fill="#911055"/>
<rect x="355.8" y="65" width="6.5" height="24" fill="#3b346e"/>
<rect x="362.0" y="65" width="6.5" height="24" fill="#940f54"/>
<rect x="368.2" y="65" width="6.5" height="24" fill="#970e53"/>
<rect x="408" y="69" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="69" width="140.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="81.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1,00</text>
<text x="42.0" y="113.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >2</text>
<rect x="52.0" y="96" width="6.5" height="24" fill="#3e336d"/>
<rect x="58.2" y="96" width="6.5" height="24" fill="#1e4177"/>
<rect x="64.4" y="96" width="6.5" height="24" fill="#731d5e"/>
<rect x="70.6" y="96" width="6.5" height="24" fill="#004d80"/>
<rect x="76.8" y="96" width="6.5" height="24" fill="#213f76"/>
<rect x="83.0" y="96" width="6.5" height="24" fill="#41326d"/>
<rect x="89.2" y="96" width="6.5" height="24" fill="#243e75"/>
<rect x="95.4" y="96" width="6.5" height="24" fill="#034c7f"/>
<rect x="101.6" y="96" width="6.5" height="24" fill="#263d75"/>
<rect x="107.8" y="96" width="6.5" height="24" fill="#44316c"/>
<rect x="114.0" y="96" width="6.5" height="24" fill="#064b7e"/>
<rect x="120.2" y="96" width="6.5" height="24" fill="#472f6b"/>
<rect x="126.4" y="96" width="6.5" height="24" fill="#761c5d"/>
<rect x="132.6" y="96" width="6.5" height="24" fill="#09497d"/>
<rect x="138.8" y="96" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="145.0" y="96" width="6.5" height="24" fill="#4d2d69"/>
<rect x="151.2" y="96" width="6.5" height="24" fill="#791a5c"/>
<rect x="157.4" y="96" width="6.5" height="24" fill="#293c74"/>
<rect x="163.6" y="96" width="6.5" height="24" fill="#0c487c"/>
<rect x="169.8" y="96" width="6.5" height="24" fill="#502c68"/>
<rect x="176.0" y="96" width="6.5" height="24" fill="#7c195b"/>
<rect x="182.2" y="96" width="6.5" height="24" fill="#7f185a"/>
<rect x="188.4" y="96" width="6.5" height="24" fill="#532a67"/>
<rect x="194.6" y="96" width="6.5" height="24" fill="#2c3a73"/>
<rect x="200.8" y="96" width="6.5" height="24" fill="#0f477c"/>
<rect x="207.0" y="96" width="6.5" height="24" fill="#562966"/>
<rect x="213.2" y="96" width="6.5" height="24" fill="#592866"/>
<rect x="219.4" y="96" width="6.5" height="24" fill="#2f3972"/>
<rect x="225.6" y="96" width="6.5" height="24" fill="#5c2765"/>
<rect x="231.8" y="96" width="6.5" height="24" fill="#821759"/>
<rect x="238.0" y="96" width="6.5" height="24" fill="#323871"/>
<rect x="244.2" y="96" width="6.5" height="24" fill="#851558"/>
<rect x="250.4" y="96" width="6.5" height="24" fill="#881457"/>
<rect x="256.6" y="96" width="6.5" height="24" fill="#8b1357"/>
<rect x="262.8" y="96" width="6.5" height="24" fill="#353770"/>
<rect x="269.0" y="96" width="6.5" height="24" fill="#38366f"/>
<rect x="275.2" y="96" width="6.5" height="24" fill="#8e1256"/>
<rect x="281.4" y="96" width="6.5" height="24" fill="#5f2564"/>
<rect x="287.6" y="96" width="6.5" height="24" fill="#622463"/>
<rect x="293.8" y="96" width="6.5" height="24" fill="#652362"/>
<rect x="300.0" y="96" width="6.5" height="24" fill="#12467b"/>
<rect x="306.2" y="96" width="6.5" height="24" fill="#682261"/>
<rect x="312.4" y="96" width="6.5" height="24" fill="#911055"/>
<rect x="318.6" y="96" width="6.5" height="24" fill="#3b346e"/>
<rect x="324.8" y="96" width="6.5" height="24" fill="#940f54"/>
<rect x="331.0" y="96" width="6.5" height="24" fill="#6b2160"/>
<rect x="337.2" y="96" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="343.4" y="96" width="6.5" height="24" fill="#970e53"/>
<rect x="349.6" y="96" width="6.5" height="24" fill="#15447a"/>
<rect x="355.8" y="96" width="6.5" height="24" fill="#184379"/>
<rect x="362.0" y="96" width="6.5" height="24" fill="#1b4278"/>
<rect x="368.2" y="96" width="6.5" height="24" fill="#711e5e"/>
<rect x="408" y="100" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="100" width="140.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="112.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1,00</text>
<text x="42.0" y="144.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >3</text>
<rect x="52.0" y="127" width="6.5" height="24" fill="#3e336d"/>
<rect x="58.2" y="127" width="6.5" height="24" fill="#2c3a73"/>
<rect x="64.4" y="127" width="6.5" height="24" fill="#0f477c"/>
<rect x="70.6" y="127" width="6.5" height="24" fill="#1e4177"/>
<rect x="76.8" y="127" width="6.5" height="24" fill="#731d5e"/>
<rect x="83.0" y="127" width="6.5" height="24" fill="#562966"/>
<rect x="89.2" y="127" width="6.5" height="24" fill="#592866"/>
<rect x="95.4" y="127" width="6.5" height="24" fill="#2f3972"/>
<rect x="101.6" y="127" width="6.5" height="24" fill="#004d80"/>
<rect x="107.8" y="127" width="6.5" height="24" fill="#213f76"/>
<rect x="114.0" y="127" width="6.5" height="24" fill="#41326d"/>
<rect x="120.2" y="127" width="6.5" height="24" fill="#243e75"/>
<rect x="126.4" y="127" width="6.5" height="24" fill="#5c2765"/>
<rect x="132.6" y="127" width="6.5" height="24" fill="#821759"/>
<rect x="138.8" y="127" width="6.5" height="24" fill="#034c7f"/>
<rect x="145.0" y="127" width="6.5" height="24" fill="#323871"/>
<rect x="151.2" y="127" width="6.5" height="24" fill="#263d75"/>
<rect x="157.4" y="127" width="6.5" height="24" fill="#851558"/>
<rect x="163.6" y="127" width="6.5" height="24" fill="#881457"/>
<rect x="169.8" y="127" width="6.5" height="24" fill="#44316c"/>
<rect x="176.0" y="127" width="6.5" height="24" fill="#064b7e"/>
<rect x="182.2" y="127" width="6.5" height="24" fill="#8b1357"/>
<rect x="188.4" y="127" width="6.5" height="24" fill="#353770"/>
<rect x="194.6" y="127" width="6.5" height="24" fill="#38366f"/>
<rect x="200.8" y="127" width="6.5" height="24" fill="#472f6b"/>
<rect x="207.0" y="127" width="6.5" height="24" fill="#8e1256"/>
<rect x="213.2" y="127" width="6.5" height="24" fill="#5f2564"/>
<rect x="219.4" y="127" width="6.5" height="24" fill="#622463"/>
<rect x="225.6" y="127" width="6.5" height="24" fill="#652362"/>
<rect x="231.8" y="127" width="6.5" height="24" fill="#761c5d"/>
<rect x="238.0" y="127" width="6.5" height="24" fill="#09497d"/>
<rect x="244.2" y="127" width="6.5" height="24" fill="#12467b"/>
<rect x="250.4" y="127" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="256.6" y="127" width="6.5" height="24" fill="#682261"/>
<rect x="262.8" y="127" width="6.5" height="24" fill="#911055"/>
<rect x="269.0" y="127" width="6.5" height="24" fill="#4d2d69"/>
<rect x="275.2" y="127" width="6.5" height="24" fill="#3b346e"/>
<rect x="281.4" y="127" width="6.5" height="24" fill="#940f54"/>
<rect x="287.6" y="127" width="6.5" height="24" fill="#791a5c"/>
<rect x="293.8" y="127" width="6.5" height="24" fill="#6b2160"/>
<rect x="300.0" y="127" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="306.2" y="127" width="6.5" height="24" fill="#293c74"/>
<rect x="312.4" y="127" width="6.5" height="24" fill="#0c487c"/>
<rect x="318.6" y="127" width="6.5" height="24" fill="#970e53"/>
<rect x="324.8" y="127" width="6.5" height="24" fill="#15447a"/>
<rect x="331.0" y="127" width="6.5" height="24" fill="#502c68"/>
<rect x="337.2" y="127" width="6.5" height="24" fill="#184379"/>
<rect x="343.4" y="127" width="6.5" height="24" fill="#1b4278"/>
<rect x="349.6" y="127" width="6.5" height="24" fill="#7c195b"/>
<rect x="355.8" y="127" width="6.5" height="24" fill="#7f185a"/>
<rect x="362.0" y="127" width="6.5" height="24" fill="#532a67"/>
<rect x="368.2" y="127" width="6.5" height="24" fill="#711e5e"/>
<rect x="408" y="131" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="131" width="140.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="143.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1,00</text>
<text x="42.0" y="175.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >4</text>
<rect x="52.0" y="158" width="6.5" height="24" fill="#652362"/>
<rect x="58.2" y="158" width="6.5" height="24" fill="#761c5d"/>
<rect x="64.4" y="158" width="6.5" height="24" fill="#09497d"/>
<rect x="70.6" y="158" width="6.5" height="24" fill="#3e336d"/>
<rect x="76.8" y="158" width="6.5" height="24" fill="#12467b"/>
<rect x="83.0" y="158" width="6.5" height="24" fill="#2c3a73"/>
<rect x="89.2" y="158" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="95.4" y="158" width="6.5" height="24" fill="#0f477c"/>
<rect x="101.6" y="158" width="6.5" height="24" fill="#1e4177"/>
<rect x="107.8" y="158" width="6.5" height="24" fill="#682261"/>
<rect x="114.0" y="158" width="6.5" height="24" fill="#731d5e"/>
<rect x="120.2" y="158" width="6.5" height="24" fill="#911055"/>
<rect x="126.4" y="158" width="6.5" height="24" fill="#4d2d69"/>
<rect x="132.6" y="158" width="6.5" height="24" fill="#3b346e"/>
<rect x="138.8" y="158" width="6.5" height="24" fill="#940f54"/>
<rect x="145.0" y="158" width="6.5" height="24" fill="#562966"/>
<rect x="151.2" y="158" width="6.5" height="24" fill="#791a5c"/>
<rect x="157.4" y="158" width="6.5" height="24" fill="#592866"/>
<rect x="163.6" y="158" width="6.5" height="24" fill="#2f3972"/>
<rect x="169.8" y="158" width="6.5" height="24" fill="#004d80"/>
<rect x="176.0" y="158" width="6.5" height="24" fill="#213f76"/>
<rect x="182.2" y="158" width="6.5" height="24" fill="#6b2160"/>
<rect x="188.4" y="158" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="194.6" y="158" width="6.5" height="24" fill="#41326d"/>
<rect x="200.8" y="158" width="6.5" height="24" fill="#243e75"/>
<rect x="207.0" y="158" width="6.5" height="24" fill="#5c2765"/>
<rect x="213.2" y="158" width="6.5" height="24" fill="#821759"/>
<rect x="219.4" y="158" width="6.5" height="24" fill="#293c74"/>
<rect x="225.6" y="158" width="6.5" height="24" fill="#034c7f"/>
<rect x="231.8" y="158" width="6.5" height="24" fill="#0c487c"/>
<rect x="238.0" y="158" width="6.5" height="24" fill="#323871"/>
<rect x="244.2" y="158" width="6.5" height="24" fill="#970e53"/>
<rect x="250.4" y="158" width="6.5" height="24" fill="#263d75"/>
<rect x="256.6" y="158" width="6.5" height="24" fill="#15447a"/>
<rect x="262.8" y="158" width="6.5" height="24" fill="#851558"/>
<rect x="269.0" y="158" width="6.5" height="24" fill="#881457"/>
<rect x="275.2" y="158" width="6.5" height="24" fill="#44316c"/>
<rect x="281.4" y="158" width="6.5" height="24" fill="#064b7e"/>
<rect x="287.6" y="158" width="6.5" height="24" fill="#502c68"/>
<rect x="293.8" y="158" width="6.5" height="24" fill="#184379"/>
<rect x="300.0" y="158" width="6.5" height="24" fill="#1b4278"/>
<rect x="306.2" y="158" width="6.5" height="24" fill="#7c195b"/>
<rect x="312.4" y="158" width="6.5" height="24" fill="#8b1357"/>
<rect x="318.6" y="158" width="6.5" height="24" fill="#7f185a"/>
<rect x="324.8" y="158" width="6.5" height="24" fill="#353770"/>
<rect x="331.0" y="158" width="6.5" height="24" fill="#532a67"/>
<rect x="337.2" y="158" width="6.5" height="24" fill="#38366f"/>
<rect x="343.4" y="158" width="6.5" height="24" fill="#472f6b"/>
<rect x="349.6" y="158" width="6.5" height="24" fill="#711e5e"/>
<rect x="355.8" y="158" width="6.5" height="24" fill="#8e1256"/>
<rect x="362.0" y="158" width="6.5" height="24" fill="#5f2564"/>
<rect x="368.2" y="158" width="6.5" height="24" fill="#622463"/>
<rect x="408" y="162" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="162" width="140.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="174.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1,00</text>
<text x="42.0" y="206.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >5</text>
<rect x="52.0" y="189" width="6.5" height="24" fill="#6b2160"/>
<rect x="58.2" y="189" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="64.4" y="189" width="6.5" height="24" fill="#41326d"/>
<rect x="70.6" y="189" width="6.5" height="24" fill="#243e75"/>
<rect x="76.8" y="189" width="6.5" height="24" fill="#652362"/>
<rect x="83.0" y="189" width="6.5" height="24" fill="#5c2765"/>
<rect x="89.2" y="189" width="6.5" height="24" fill="#821759"/>
<rect x="95.4" y="189" width="6.5" height="24" fill="#761c5d"/>
<rect x="101.6" y="189" width="6.5" height="24" fill="#293c74"/>
<rect x="107.8" y="189" width="6.5" height="24" fill="#09497d"/>
<rect x="114.0" y="189" width="6.5" height="24" fill="#3e336d"/>
<rect x="120.2" y="189" width="6.5" height="24" fill="#12467b"/>
<rect x="126.4" y="189" width="6.5" height="24" fill="#2c3a73"/>
<rect x="132.6" y="189" width="6.5" height="24" fill="#034c7f"/>
<rect x="138.8" y="189" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="145.0" y="189" width="6.5" height="24" fill="#0f477c"/>
<rect x="151.2" y="189" width="6.5" height="24" fill="#1e4177"/>
<rect x="157.4" y="189" width="6.5" height="24" fill="#0c487c"/>
<rect x="163.6" y="189" width="6.5" height="24" fill="#682261"/>
<rect x="169.8" y="189" width="6.5" height="24" fill="#323871"/>
<rect x="176.0" y="189" width="6.5" height="24" fill="#970e53"/>
<rect x="182.2" y="189" width="6.5" height="24" fill="#731d5e"/>
<rect x="188.4" y="189" width="6.5" height="24" fill="#263d75"/>
<rect x="194.6" y="189" width="6.5" height="24" fill="#911055"/>
<rect x="200.8" y="189" width="6.5" height="24" fill="#15447a"/>
<rect x="207.0" y="189" width="6.5" height="24" fill="#851558"/>
<rect x="213.2" y="189" width="6.5" height="24" fill="#881457"/>
<rect x="219.4" y="189" width="6.5" height="24" fill="#4d2d69"/>
<rect x="225.6" y="189" width="6.5" height="24" fill="#3b346e"/>
<rect x="231.8" y="189" width="6.5" height="24" fill="#44316c"/>
<rect x="238.0" y="189" width="6.5" height="24" fill="#940f54"/>
<rect x="244.2" y="189" width="6.5" height="24" fill="#064b7e"/>
<rect x="250.4" y="189" width="6.5" height="24" fill="#502c68"/>
<rect x="256.6" y="189" width="6.5" height="24" fill="#562966"/>
<rect x="262.8" y="189" width="6.5" height="24" fill="#184379"/>
<rect x="269.0" y="189" width="6.5" height="24" fill="#1b4278"/>
<rect x="275.2" y="189" width="6.5" height="24" fill="#7c195b"/>
<rect x="281.4" y="189" width="6.5" height="24" fill="#8b1357"/>
<rect x="287.6" y="189" width="6.5" height="24" fill="#791a5c"/>
<rect x="293.8" y="189" width="6.5" height="24" fill="#7f185a"/>
<rect x="300.0" y="189" width="6.5" height="24" fill="#592866"/>
<rect x="306.2" y="189" width="6.5" height="24" fill="#353770"/>
<rect x="312.4" y="189" width="6.5" height="24" fill="#2f3972"/>
<rect x="318.6" y="189" width="6.5" height="24" fill="#532a67"/>
<rect x="324.8" y="189" width="6.5" height="24" fill="#38366f"/>
<rect x="331.0" y="189" width="6.5" height="24" fill="#472f6b"/>
<rect x="337.2" y="189" width="6.5" height="24" fill="#004d80"/>
<rect x="343.4" y="189" width="6.5" height="24" fill="#711e5e"/>
<rect x="349.6" y="189" width="6.5" height="24" fill="#8e1256"/>
<rect x="355.8" y="189" width="6.5" height="24" fill="#5f2564"/>
<rect x="362.0" y="189" width="6.5" height="24" fill="#622463"/>
<rect x="368.2" y="189" width="6.5" height="24" fill="#213f76"/>
<rect x="408" y="193" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="193" width="129.3" height="16" fill="#73aeaa"/>
<text x="554.0" y="205.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,92</text>
<text x="42.0" y="237.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >6</text>
<rect x="52.0" y="220" width="6.5" height="24" fill="#6b2160"/>
<rect x="58.2" y="220" width="6.5" height="24" fill="#970e53"/>
<rect x="64.4" y="220" width="6.5" height="24" fill="#731d5e"/>
<rect x="70.6" y="220" width="6.5" height="24" fill="#263d75"/>
<rect x="76.8" y="220" width="6.5" height="24" fill="#911055"/>
<rect x="83.0" y="220" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="89.2" y="220" width="6.5" height="24" fill="#41326d"/>
<rect x="95.4" y="220" width="6.5" height="24" fill="#243e75"/>
<rect x="101.6" y="220" width="6.5" height="24" fill="#15447a"/>
<rect x="107.8" y="220" width="6.5" height="24" fill="#851558"/>
<rect x="114.0" y="220" width="6.5" height="24" fill="#881457"/>
<rect x="120.2" y="220" width="6.5" height="24" fill="#652362"/>
<rect x="126.4" y="220" width="6.5" height="24" fill="#5c2765"/>
<rect x="132.6" y="220" width="6.5" height="24" fill="#4d2d69"/>
<rect x="138.8" y="220" width="6.5" height="24" fill="#3b346e"/>
<rect x="145.0" y="220" width="6.5" height="24" fill="#44316c"/>
<rect x="151.2" y="220" width="6.5" height="24" fill="#940f54"/>
<rect x="157.4" y="220" width="6.5" height="24" fill="#064b7e"/>
<rect x="163.6" y="220" width="6.5" height="24" fill="#502c68"/>
<rect x="169.8" y="220" width="6.5" height="24" fill="#562966"/>
<rect x="176.0" y="220" width="6.5" height="24" fill="#184379"/>
<rect x="182.2" y="220" width="6.5" height="24" fill="#821759"/>
<rect x="188.4" y="220" width="6.5" height="24" fill="#761c5d"/>
<rect x="194.6" y="220" width="6.5" height="24" fill="#293c74"/>
<rect x="200.8" y="220" width="6.5" height="24" fill="#09497d"/>
<rect x="207.0" y="220" width="6.5" height="24" fill="#3e336d"/>
<rect x="213.2" y="220" width="6.5" height="24" fill="#1b4278"/>
<rect x="219.4" y="220" width="6.5" height="24" fill="#7c195b"/>
<rect x="225.6" y="220" width="6.5" height="24" fill="#12467b"/>
<rect x="231.8" y="220" width="6.5" height="24" fill="#8b1357"/>
<rect x="238.0" y="220" width="6.5" height="24" fill="#2c3a73"/>
<rect x="244.2" y="220" width="6.5" height="24" fill="#791a5c"/>
<rect x="250.4" y="220" width="6.5" height="24" fill="#034c7f"/>
<rect x="256.6" y="220" width="6.5" height="24" fill="#7f185a"/>
<rect x="262.8" y="220" width="6.5" height="24" fill="#592866"/>
<rect x="269.0" y="220" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="275.2" y="220" width="6.5" height="24" fill="#353770"/>
<rect x="281.4" y="220" width="6.5" height="24" fill="#0f477c"/>
<rect x="287.6" y="220" width="6.5" height="24" fill="#2f3972"/>
<rect x="293.8" y="220" width="6.5" height="24" fill="#532a67"/>
<rect x="300.0" y="220" width="6.5" height="24" fill="#38366f"/>
<rect x="306.2" y="220" width="6.5" height="24" fill="#472f6b"/>
<rect x="312.4" y="220" width="6.5" height="24" fill="#1e4177"/>
<rect x="318.6" y="220" width="6.5" height="24" fill="#0c487c"/>
<rect x="324.8" y="220" width="6.5" height="24" fill="#004d80"/>
<rect x="331.0" y="220" width="6.5" height="24" fill="#711e5e"/>
<rect x="337.2" y="220" width="6.5" height="24" fill="#682261"/>
<rect x="343.4" y="220" width="6.5" height="24" fill="#8e1256"/>
<rect x="349.6" y="220" width="6.5" height="24" fill="#5f2564"/>
<rect x="355.8" y="220" width="6.5" height="24" fill="#622463"/>
<rect x="362.0" y="220" width="6.5" height="24" fill="#323871"/>
<rect x="368.2" y="220" width="6.5" height="24" fill="#213f76"/>
<rect x="408" y="224" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="224" width="85.9" height="16" fill="#73aeaa"/>
<text x="554.0" y="236.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,61</text>
<text x="42.0" y="268.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >7</text>
<rect x="52.0" y="251" width="6.5" height="24" fill="#7c195b"/>
<rect x="58.2" y="251" width="6.5" height="24" fill="#6b2160"/>
<rect x="64.4" y="251" width="6.5" height="24" fill="#970e53"/>
<rect x="70.6" y="251" width="6.5" height="24" fill="#731d5e"/>
<rect x="76.8" y="251" width="6.5" height="24" fill="#263d75"/>
<rect x="83.0" y="251" width="6.5" height="24" fill="#911055"/>
<rect x="89.2" y="251" width="6.5" height="24" fill="#12467b"/>
<rect x="95.4" y="251" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="101.6" y="251" width="6.5" height="24" fill="#8b1357"/>
<rect x="107.8" y="251" width="6.5" height="24" fill="#41326d"/>
<rect x="114.0" y="251" width="6.5" height="24" fill="#2c3a73"/>
<rect x="120.2" y="251" width="6.5" height="24" fill="#243e75"/>
<rect x="126.4" y="251" width="6.5" height="24" fill="#15447a"/>
<rect x="132.6" y="251" width="6.5" height="24" fill="#851558"/>
<rect x="138.8" y="251" width="6.5" height="24" fill="#881457"/>
<rect x="145.0" y="251" width="6.5" height="24" fill="#791a5c"/>
<rect x="151.2" y="251" width="6.5" height="24" fill="#652362"/>
<rect x="157.4" y="251" width="6.5" height="24" fill="#5c2765"/>
<rect x="163.6" y="251" width="6.5" height="24" fill="#034c7f"/>
<rect x="169.8" y="251" width="6.5" height="24" fill="#7f185a"/>
<rect x="176.0" y="251" width="6.5" height="24" fill="#4d2d69"/>
<rect x="182.2" y="251" width="6.5" height="24" fill="#3b346e"/>
<rect x="188.4" y="251" width="6.5" height="24" fill="#44316c"/>
<rect x="194.6" y="251" width="6.5" height="24" fill="#592866"/>
<rect x="200.8" y="251" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="207.0" y="251" width="6.5" height="24" fill="#353770"/>
<rect x="213.2" y="251" width="6.5" height="24" fill="#940f54"/>
<rect x="219.4" y="251" width="6.5" height="24" fill="#0f477c"/>
<rect x="225.6" y="251" width="6.5" height="24" fill="#064b7e"/>
<rect x="231.8" y="251" width="6.5" height="24" fill="#2f3972"/>
<rect x="238.0" y="251" width="6.5" height="24" fill="#502c68"/>
<rect x="244.2" y="251" width="6.5" height="24" fill="#532a67"/>
<rect x="250.4" y="251" width="6.5" height="24" fill="#38366f"/>
<rect x="256.6" y="251" width="6.5" height="24" fill="#562966"/>
<rect x="262.8" y="251" width="6.5" height="24" fill="#184379"/>
<rect x="269.0" y="251" width="6.5" height="24" fill="#472f6b"/>
<rect x="275.2" y="251" width="6.5" height="24" fill="#821759"/>
<rect x="281.4" y="251" width="6.5" height="24" fill="#761c5d"/>
<rect x="287.6" y="251" width="6.5" height="24" fill="#1e4177"/>
<rect x="293.8" y="251" width="6.5" height="24" fill="#0c487c"/>
<rect x="300.0" y="251" width="6.5" height="24" fill="#004d80"/>
<rect x="306.2" y="251" width="6.5" height="24" fill="#711e5e"/>
<rect x="312.4" y="251" width="6.5" height="24" fill="#682261"/>
<rect x="318.6" y="251" width="6.5" height="24" fill="#293c74"/>
<rect x="324.8" y="251" width="6.5" height="24" fill="#09497d"/>
<rect x="331.0" y="251" width="6.5" height="24" fill="#8e1256"/>
<rect x="337.2" y="251" width="6.5" height="24" fill="#5f2564"/>
<rect x="343.4" y="251" width="6.5" height="24" fill="#3e336d"/>
<rect x="349.6" y="251" width="6.5" height="24" fill="#1b4278"/>
<rect x="355.8" y="251" width="6.5" height="24" fill="#622463"/>
<rect x="362.0" y="251" width="6.5" height="24" fill="#323871"/>
<rect x="368.2" y="251" width="6.5" height="24" fill="#213f76"/>
<rect x="408" y="255" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="255" width="46.8" height="16" fill="#006C65"/>
<text x="554.0" y="267.0" text-anchor="start" font-size="12" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-weight="bold">0,33</text>
<text x="42.0" y="299.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >8</text>
<rect x="52.0" y="282" width="6.5" height="24" fill="#7c195b"/>
<rect x="58.2" y="282" width="6.5" height="24" fill="#6b2160"/>
<rect x="64.4" y="282" width="6.5" height="24" fill="#970e53"/>
<rect x="70.6" y="282" width="6.5" height="24" fill="#731d5e"/>
<rect x="76.8" y="282" width="6.5" height="24" fill="#263d75"/>
<rect x="83.0" y="282" width="6.5" height="24" fill="#502c68"/>
<rect x="89.2" y="282" width="6.5" height="24" fill="#532a67"/>
<rect x="95.4" y="282" width="6.5" height="24" fill="#911055"/>
<rect x="101.6" y="282" width="6.5" height="24" fill="#12467b"/>
<rect x="107.8" y="282" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="114.0" y="282" width="6.5" height="24" fill="#38366f"/>
<rect x="120.2" y="282" width="6.5" height="24" fill="#562966"/>
<rect x="126.4" y="282" width="6.5" height="24" fill="#184379"/>
<rect x="132.6" y="282" width="6.5" height="24" fill="#8b1357"/>
<rect x="138.8" y="282" width="6.5" height="24" fill="#472f6b"/>
<rect x="145.0" y="282" width="6.5" height="24" fill="#41326d"/>
<rect x="151.2" y="282" width="6.5" height="24" fill="#2c3a73"/>
<rect x="157.4" y="282" width="6.5" height="24" fill="#243e75"/>
<rect x="163.6" y="282" width="6.5" height="24" fill="#15447a"/>
<rect x="169.8" y="282" width="6.5" height="24" fill="#821759"/>
<rect x="176.0" y="282" width="6.5" height="24" fill="#851558"/>
<rect x="182.2" y="282" width="6.5" height="24" fill="#881457"/>
<rect x="188.4" y="282" width="6.5" height="24" fill="#761c5d"/>
<rect x="194.6" y="282" width="6.5" height="24" fill="#791a5c"/>
<rect x="200.8" y="282" width="6.5" height="24" fill="#652362"/>
<rect x="207.0" y="282" width="6.5" height="24" fill="#1e4177"/>
<rect x="213.2" y="282" width="6.5" height="24" fill="#5c2765"/>
<rect x="219.4" y="282" width="6.5" height="24" fill="#0c487c"/>
<rect x="225.6" y="282" width="6.5" height="24" fill="#034c7f"/>
<rect x="231.8" y="282" width="6.5" height="24" fill="#7f185a"/>
<rect x="238.0" y="282" width="6.5" height="24" fill="#004d80"/>
<rect x="244.2" y="282" width="6.5" height="24" fill="#711e5e"/>
<rect x="250.4" y="282" width="6.5" height="24" fill="#682261"/>
<rect x="256.6" y="282" width="6.5" height="24" fill="#293c74"/>
<rect x="262.8" y="282" width="6.5" height="24" fill="#4d2d69"/>
<rect x="269.0" y="282" width="6.5" height="24" fill="#09497d"/>
<rect x="275.2" y="282" width="6.5" height="24" fill="#3b346e"/>
<rect x="281.4" y="282" width="6.5" height="24" fill="#8e1256"/>
<rect x="287.6" y="282" width="6.5" height="24" fill="#44316c"/>
<rect x="293.8" y="282" width="6.5" height="24" fill="#5f2564"/>
<rect x="300.0" y="282" width="6.5" height="24" fill="#3e336d"/>
<rect x="306.2" y="282" width="6.5" height="24" fill="#1b4278"/>
<rect x="312.4" y="282" width="6.5" height="24" fill="#592866"/>
<rect x="318.6" y="282" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="324.8" y="282" width="6.5" height="24" fill="#353770"/>
<rect x="331.0" y="282" width="6.5" height="24" fill="#940f54"/>
<rect x="337.2" y="282" width="6.5" height="24" fill="#0f477c"/>
<rect x="343.4" y="282" width="6.5" height="24" fill="#622463"/>
<rect x="349.6" y="282" width="6.5" height="24" fill="#323871"/>
<rect x="355.8" y="282" width="6.5" height="24" fill="#064b7e"/>
<rect x="362.0" y="282" width="6.5" height="24" fill="#2f3972"/>
<rect x="368.2" y="282" width="6.5" height="24" fill="#213f76"/>
<rect x="408" y="286" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="286" width="23.4" height="16" fill="#73aeaa"/>
<text x="554.0" y="298.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,17</text>
<text x="42.0" y="330.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >9</text>
<rect x="52.0" y="313" width="6.5" height="24" fill="#7c195b"/>
<rect x="58.2" y="313" width="6.5" height="24" fill="#6b2160"/>
<rect x="64.4" y="313" width="6.5" height="24" fill="#970e53"/>
<rect x="70.6" y="313" width="6.5" height="24" fill="#731d5e"/>
<rect x="76.8" y="313" width="6.5" height="24" fill="#7f185a"/>
<rect x="83.0" y="313" width="6.5" height="24" fill="#004d80"/>
<rect x="89.2" y="313" width="6.5" height="24" fill="#263d75"/>
<rect x="95.4" y="313" width="6.5" height="24" fill="#502c68"/>
<rect x="101.6" y="313" width="6.5" height="24" fill="#711e5e"/>
<rect x="107.8" y="313" width="6.5" height="24" fill="#682261"/>
<rect x="114.0" y="313" width="6.5" height="24" fill="#532a67"/>
<rect x="120.2" y="313" width="6.5" height="24" fill="#293c74"/>
<rect x="126.4" y="313" width="6.5" height="24" fill="#4d2d69"/>
<rect x="132.6" y="313" width="6.5" height="24" fill="#911055"/>
<rect x="138.8" y="313" width="6.5" height="24" fill="#09497d"/>
<rect x="145.0" y="313" width="6.5" height="24" fill="#12467b"/>
<rect x="151.2" y="313" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="157.4" y="313" width="6.5" height="24" fill="#3b346e"/>
<rect x="163.6" y="313" width="6.5" height="24" fill="#38366f"/>
<rect x="169.8" y="313" width="6.5" height="24" fill="#562966"/>
<rect x="176.0" y="313" width="6.5" height="24" fill="#184379"/>
<rect x="182.2" y="313" width="6.5" height="24" fill="#8b1357"/>
<rect x="188.4" y="313" width="6.5" height="24" fill="#472f6b"/>
<rect x="194.6" y="313" width="6.5" height="24" fill="#8e1256"/>
<rect x="200.8" y="313" width="6.5" height="24" fill="#44316c"/>
<rect x="207.0" y="313" width="6.5" height="24" fill="#5f2564"/>
<rect x="213.2" y="313" width="6.5" height="24" fill="#41326d"/>
<rect x="219.4" y="313" width="6.5" height="24" fill="#2c3a73"/>
<rect x="225.6" y="313" width="6.5" height="24" fill="#243e75"/>
<rect x="231.8" y="313" width="6.5" height="24" fill="#15447a"/>
<rect x="238.0" y="313" width="6.5" height="24" fill="#3e336d"/>
<rect x="244.2" y="313" width="6.5" height="24" fill="#1b4278"/>
<rect x="250.4" y="313" width="6.5" height="24" fill="#592866"/>
<rect x="256.6" y="313" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="262.8" y="313" width="6.5" height="24" fill="#821759"/>
<rect x="269.0" y="313" width="6.5" height="24" fill="#353770"/>
<rect x="275.2" y="313" width="6.5" height="24" fill="#851558"/>
<rect x="281.4" y="313" width="6.5" height="24" fill="#881457"/>
<rect x="287.6" y="313" width="6.5" height="24" fill="#761c5d"/>
<rect x="293.8" y="313" width="6.5" height="24" fill="#791a5c"/>
<rect x="300.0" y="313" width="6.5" height="24" fill="#652362"/>
<rect x="306.2" y="313" width="6.5" height="24" fill="#940f54"/>
<rect x="312.4" y="313" width="6.5" height="24" fill="#0f477c"/>
<rect x="318.6" y="313" width="6.5" height="24" fill="#1e4177"/>
<rect x="324.8" y="313" width="6.5" height="24" fill="#622463"/>
<rect x="331.0" y="313" width="6.5" height="24" fill="#323871"/>
<rect x="337.2" y="313" width="6.5" height="24" fill="#064b7e"/>
<rect x="343.4" y="313" width="6.5" height="24" fill="#5c2765"/>
<rect x="349.6" y="313" width="6.5" height="24" fill="#2f3972"/>
<rect x="355.8" y="313" width="6.5" height="24" fill="#213f76"/>
<rect x="362.0" y="313" width="6.5" height="24" fill="#0c487c"/>
<rect x="368.2" y="313" width="6.5" height="24" fill="#034c7f"/>
<rect x="408" y="317" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="317" width="12.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="329.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,09</text>
<text x="42.0" y="361.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >10</text>
<rect x="52.0" y="344" width="6.5" height="24" fill="#41326d"/>
<rect x="58.2" y="344" width="6.5" height="24" fill="#7c195b"/>
<rect x="64.4" y="344" width="6.5" height="24" fill="#2c3a73"/>
<rect x="70.6" y="344" width="6.5" height="24" fill="#243e75"/>
<rect x="76.8" y="344" width="6.5" height="24" fill="#15447a"/>
<rect x="83.0" y="344" width="6.5" height="24" fill="#6b2160"/>
<rect x="89.2" y="344" width="6.5" height="24" fill="#970e53"/>
<rect x="95.4" y="344" width="6.5" height="24" fill="#3e336d"/>
<rect x="101.6" y="344" width="6.5" height="24" fill="#731d5e"/>
<rect x="107.8" y="344" width="6.5" height="24" fill="#7f185a"/>
<rect x="114.0" y="344" width="6.5" height="24" fill="#004d80"/>
<rect x="120.2" y="344" width="6.5" height="24" fill="#1b4278"/>
<rect x="126.4" y="344" width="6.5" height="24" fill="#592866"/>
<rect x="132.6" y="344" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="138.8" y="344" width="6.5" height="24" fill="#821759"/>
<rect x="145.0" y="344" width="6.5" height="24" fill="#263d75"/>
<rect x="151.2" y="344" width="6.5" height="24" fill="#502c68"/>
<rect x="157.4" y="344" width="6.5" height="24" fill="#711e5e"/>
<rect x="163.6" y="344" width="6.5" height="24" fill="#353770"/>
<rect x="169.8" y="344" width="6.5" height="24" fill="#682261"/>
<rect x="176.0" y="344" width="6.5" height="24" fill="#851558"/>
<rect x="182.2" y="344" width="6.5" height="24" fill="#881457"/>
<rect x="188.4" y="344" width="6.5" height="24" fill="#761c5d"/>
<rect x="194.6" y="344" width="6.5" height="24" fill="#791a5c"/>
<rect x="200.8" y="344" width="6.5" height="24" fill="#532a67"/>
<rect x="207.0" y="344" width="6.5" height="24" fill="#293c74"/>
<rect x="213.2" y="344" width="6.5" height="24" fill="#4d2d69"/>
<rect x="219.4" y="344" width="6.5" height="24" fill="#652362"/>
<rect x="225.6" y="344" width="6.5" height="24" fill="#940f54"/>
<rect x="231.8" y="344" width="6.5" height="24" fill="#911055"/>
<rect x="238.0" y="344" width="6.5" height="24" fill="#0f477c"/>
<rect x="244.2" y="344" width="6.5" height="24" fill="#09497d"/>
<rect x="250.4" y="344" width="6.5" height="24" fill="#1e4177"/>
<rect x="256.6" y="344" width="6.5" height="24" fill="#622463"/>
<rect x="262.8" y="344" width="6.5" height="24" fill="#323871"/>
<rect x="269.0" y="344" width="6.5" height="24" fill="#064b7e"/>
<rect x="275.2" y="344" width="6.5" height="24" fill="#12467b"/>
<rect x="281.4" y="344" width="6.5" height="24" fill="#5c2765"/>
<rect x="287.6" y="344" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="293.8" y="344" width="6.5" height="24" fill="#3b346e"/>
<rect x="300.0" y="344" width="6.5" height="24" fill="#38366f"/>
<rect x="306.2" y="344" width="6.5" height="24" fill="#562966"/>
<rect x="312.4" y="344" width="6.5" height="24" fill="#184379"/>
<rect x="318.6" y="344" width="6.5" height="24" fill="#8b1357"/>
<rect x="324.8" y="344" width="6.5" height="24" fill="#2f3972"/>
<rect x="331.0" y="344" width="6.5" height="24" fill="#472f6b"/>
<rect x="337.2" y="344" width="6.5" height="24" fill="#8e1256"/>
<rect x="343.4" y="344" width="6.5" height="24" fill="#213f76"/>
<rect x="349.6" y="344" width="6.5" height="24" fill="#0c487c"/>
<rect x="355.8" y="344" width="6.5" height="24" fill="#44316c"/>
<rect x="362.0" y="344" width="6.5" height="24" fill="#5f2564"/>
<rect x="368.2" y="344" width="6.5" height="24" fill="#034c7f"/>
<rect x="408" y="348" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="348" width="6.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="360.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,04</text>
<text x="42.0" y="392.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >11</text>
<rect x="52.0" y="375" width="6.5" height="24" fill="#41326d"/>
<rect x="58.2" y="375" width="6.5" height="24" fill="#293c74"/>
<rect x="64.4" y="375" width="6.5" height="24" fill="#7c195b"/>
<rect x="70.6" y="375" width="6.5" height="24" fill="#2c3a73"/>
<rect x="76.8" y="375" width="6.5" height="24" fill="#4d2d69"/>
<rect x="83.0" y="375" width="6.5" height="24" fill="#243e75"/>
<rect x="89.2" y="375" width="6.5" height="24" fill="#15447a"/>
<rect x="95.4" y="375" width="6.5" height="24" fill="#6b2160"/>
<rect x="101.6" y="375" width="6.5" height="24" fill="#652362"/>
<rect x="107.8" y="375" width="6.5" height="24" fill="#940f54"/>
<rect x="114.0" y="375" width="6.5" height="24" fill="#911055"/>
<rect x="120.2" y="375" width="6.5" height="24" fill="#0f477c"/>
<rect x="126.4" y="375" width="6.5" height="24" fill="#970e53"/>
<rect x="132.6" y="375" width="6.5" height="24" fill="#09497d"/>
<rect x="138.8" y="375" width="6.5" height="24" fill="#3e336d"/>
<rect x="145.0" y="375" width="6.5" height="24" fill="#731d5e"/>
<rect x="151.2" y="375" width="6.5" height="24" fill="#1e4177"/>
<rect x="157.4" y="375" width="6.5" height="24" fill="#7f185a"/>
<rect x="163.6" y="375" width="6.5" height="24" fill="#622463"/>
<rect x="169.8" y="375" width="6.5" height="24" fill="#323871"/>
<rect x="176.0" y="375" width="6.5" height="24" fill="#064b7e"/>
<rect x="182.2" y="375" width="6.5" height="24" fill="#004d80"/>
<rect x="188.4" y="375" width="6.5" height="24" fill="#1b4278"/>
<rect x="194.6" y="375" width="6.5" height="24" fill="#12467b"/>
<rect x="200.8" y="375" width="6.5" height="24" fill="#5c2765"/>
<rect x="207.0" y="375" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="213.2" y="375" width="6.5" height="24" fill="#3b346e"/>
<rect x="219.4" y="375" width="6.5" height="24" fill="#592866"/>
<rect x="225.6" y="375" width="6.5" height="24" fill="#38366f"/>
<rect x="231.8" y="375" width="6.5" height="24" fill="#562966"/>
<rect x="238.0" y="375" width="6.5" height="24" fill="#184379"/>
<rect x="244.2" y="375" width="6.5" height="24" fill="#8b1357"/>
<rect x="250.4" y="375" width="6.5" height="24" fill="#2f3972"/>
<rect x="256.6" y="375" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="262.8" y="375" width="6.5" height="24" fill="#821759"/>
<rect x="269.0" y="375" width="6.5" height="24" fill="#472f6b"/>
<rect x="275.2" y="375" width="6.5" height="24" fill="#263d75"/>
<rect x="281.4" y="375" width="6.5" height="24" fill="#502c68"/>
<rect x="287.6" y="375" width="6.5" height="24" fill="#711e5e"/>
<rect x="293.8" y="375" width="6.5" height="24" fill="#353770"/>
<rect x="300.0" y="375" width="6.5" height="24" fill="#8e1256"/>
<rect x="306.2" y="375" width="6.5" height="24" fill="#213f76"/>
<rect x="312.4" y="375" width="6.5" height="24" fill="#0c487c"/>
<rect x="318.6" y="375" width="6.5" height="24" fill="#682261"/>
<rect x="324.8" y="375" width="6.5" height="24" fill="#44316c"/>
<rect x="331.0" y="375" width="6.5" height="24" fill="#5f2564"/>
<rect x="337.2" y="375" width="6.5" height="24" fill="#851558"/>
<rect x="343.4" y="375" width="6.5" height="24" fill="#881457"/>
<rect x="349.6" y="375" width="6.5" height="24" fill="#761c5d"/>
<rect x="355.8" y="375" width="6.5" height="24" fill="#791a5c"/>
<rect x="362.0" y="375" width="6.5" height="24" fill="#532a67"/>
<rect x="368.2" y="375" width="6.5" height="24" fill="#034c7f"/>
<rect x="408" y="379" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="379" width="3.0" height="16" fill="#73aeaa"/>
<text x="554.0" y="391.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,02</text>
<text x="42.0" y="423.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >12</text>
<rect x="52.0" y="406" width="6.5" height="24" fill="#41326d"/>
<rect x="58.2" y="406" width="6.5" height="24" fill="#592866"/>
<rect x="64.4" y="406" width="6.5" height="24" fill="#293c74"/>
<rect x="70.6" y="406" width="6.5" height="24" fill="#7c195b"/>
<rect x="76.8" y="406" width="6.5" height="24" fill="#38366f"/>
<rect x="83.0" y="406" width="6.5" height="24" fill="#2c3a73"/>
<rect x="89.2" y="406" width="6.5" height="24" fill="#562966"/>
<rect x="95.4" y="406" width="6.5" height="24" fill="#4d2d69"/>
<rect x="101.6" y="406" width="6.5" height="24" fill="#243e75"/>
<rect x="107.8" y="406" width="6.5" height="24" fill="#15447a"/>
<rect x="114.0" y="406" width="6.5" height="24" fill="#6b2160"/>
<rect x="120.2" y="406" width="6.5" height="24" fill="#652362"/>
<rect x="126.4" y="406" width="6.5" height="24" fill="#940f54"/>
<rect x="132.6" y="406" width="6.5" height="24" fill="#184379"/>
<rect x="138.8" y="406" width="6.5" height="24" fill="#911055"/>
<rect x="145.0" y="406" width="6.5" height="24" fill="#8b1357"/>
<rect x="151.2" y="406" width="6.5" height="24" fill="#0f477c"/>
<rect x="157.4" y="406" width="6.5" height="24" fill="#970e53"/>
<rect x="163.6" y="406" width="6.5" height="24" fill="#09497d"/>
<rect x="169.8" y="406" width="6.5" height="24" fill="#2f3972"/>
<rect x="176.0" y="406" width="6.5" height="24" fill="#3e336d"/>
<rect x="182.2" y="406" width="6.5" height="24" fill="#4a2e6a"/>
<rect x="188.4" y="406" width="6.5" height="24" fill="#731d5e"/>
<rect x="194.6" y="406" width="6.5" height="24" fill="#1e4177"/>
<rect x="200.8" y="406" width="6.5" height="24" fill="#821759"/>
<rect x="207.0" y="406" width="6.5" height="24" fill="#472f6b"/>
<rect x="213.2" y="406" width="6.5" height="24" fill="#263d75"/>
<rect x="219.4" y="406" width="6.5" height="24" fill="#502c68"/>
<rect x="225.6" y="406" width="6.5" height="24" fill="#711e5e"/>
<rect x="231.8" y="406" width="6.5" height="24" fill="#353770"/>
<rect x="238.0" y="406" width="6.5" height="24" fill="#8e1256"/>
<rect x="244.2" y="406" width="6.5" height="24" fill="#7f185a"/>
<rect x="250.4" y="406" width="6.5" height="24" fill="#213f76"/>
<rect x="256.6" y="406" width="6.5" height="24" fill="#622463"/>
<rect x="262.8" y="406" width="6.5" height="24" fill="#0c487c"/>
<rect x="269.0" y="406" width="6.5" height="24" fill="#323871"/>
<rect x="275.2" y="406" width="6.5" height="24" fill="#682261"/>
<rect x="281.4" y="406" width="6.5" height="24" fill="#44316c"/>
<rect x="287.6" y="406" width="6.5" height="24" fill="#5f2564"/>
<rect x="293.8" y="406" width="6.5" height="24" fill="#851558"/>
<rect x="300.0" y="406" width="6.5" height="24" fill="#881457"/>
<rect x="306.2" y="406" width="6.5" height="24" fill="#761c5d"/>
<rect x="312.4" y="406" width="6.5" height="24" fill="#064b7e"/>
<rect x="318.6" y="406" width="6.5" height="24" fill="#004d80"/>
<rect x="324.8" y="406" width="6.5" height="24" fill="#1b4278"/>
<rect x="331.0" y="406" width="6.5" height="24" fill="#12467b"/>
<rect x="337.2" y="406" width="6.5" height="24" fill="#791a5c"/>
<rect x="343.4" y="406" width="6.5" height="24" fill="#5c2765"/>
<rect x="349.6" y="406" width="6.5" height="24" fill="#532a67"/>
<rect x="355.8" y="406" width="6.5" height="24" fill="#6e1f5f"/>
<rect x="362.0" y="406" width="6.5" height="24" fill="#034c7f"/>
<rect x="368.2" y="406" width="6.5" height="24" fill="#3b346e"/>
<rect x="408" y="410" width="140" height="16" fill="#f1f5f9"/>
<rect x="408" y="410" width="1.5" height="16" fill="#73aeaa"/>
<text x="554.0" y="422.0" text-anchor="start" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0,01</text>
<text x="22.0" y="220.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 22 220)">battements</text>
</svg>
</div>
<p class="legende">Un jeu de 52 cartes, colorées selon leur position de départ, après 0 à 12 battements. À droite, la distance exacte au mélange parfait (la plus grande erreur possible sur la probabilité d'un événement). Elle reste collée à $1$ pendant cinq battements, puis s'effondre en trois ou quatre coups.</p>
<p>Ce décrochage brutal porte un nom, le <b>phénomène de seuil</b> (<em>cutoff</em>)&nbsp;: rien ne se passe, puis tout se passe d'un coup. D'où le célèbre « sept battements suffisent », à nuancer&nbsp;: après sept battements, la distance vaut encore $0{,}33$. Peter Doyle a inventé une réussite qu'on gagne avec probabilité $\frac12$ avec un jeu parfaitement mélangé, mais avec probabilité $0{,}80$ après sept battements d'un jeu initialement trié. Pour descendre à 1&nbsp;% d'erreur, comparable à l'avantage d'un casino, il faut plutôt onze ou douze battements.</p>
</div>

## Le jeu de Penney

Deux joueurs choisissent chacun une séquence de trois lancers de pièce, par exemple FFP (face, face, pile) et PFF. On lance la pièce jusqu'à ce que l'une des deux séquences apparaisse&nbsp;: son propriétaire gagne. Toutes les séquences de trois lancers sont équiprobables, alors le jeu semble équitable. Il ne l'est pas du tout.

{{< youtube-plus id="mIN9AWYKtjc" ratio="16x9" width="800px" rounded=true shadow=true >}}

Le tableau complet des probabilités de victoire est saisissant&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 600 528" role="img" aria-label="Tableau des probabilités exactes que la séquence du joueur 2 (en ligne) apparaisse avant celle du joueur 1 (en colonne). Les cases encadrées sont la meilleure réponse à chaque choix du joueur 1 : elle gagne toujours au moins deux fois sur trois." style="width:100%;max-width:600px;height:auto;">
<text x="338.0" y="22.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >choix du joueur 1</text>
<text x="32.0" y="278.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 32 278)">choix du joueur 2</text>
<text x="156.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<text x="208.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<text x="260.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<text x="312.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<text x="364.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<text x="416.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<text x="468.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<text x="520.0" y="60" font-size="13" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<text x="120" y="101.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<rect x="130" y="70" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="182" y="70" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="234" y="70" width="52" height="52" fill="#c3d5e1" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,40</text>
<rect x="286" y="70" width="52" height="52" fill="#c3d5e1" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,40</text>
<rect x="338" y="70" width="52" height="52" fill="#5689ab" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="101.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,12</text>
<rect x="390" y="70" width="52" height="52" fill="#cadae4" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,42</text>
<rect x="442" y="70" width="52" height="52" fill="#9cbacd" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,30</text>
<rect x="494" y="70" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="101.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<text x="120" y="153.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<rect x="130" y="122" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="182" y="122" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="234" y="122" width="52" height="52" fill="#dcadc5" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,67</text>
<rect x="286" y="122" width="52" height="52" fill="#dcadc5" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,67</text>
<rect x="338" y="122" width="52" height="52" fill="#88acc4" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="153.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,25</text>
<rect x="390" y="122" width="52" height="52" fill="#e3bdd0" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,62</text>
<rect x="442" y="122" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="494" y="122" width="52" height="52" fill="#d6a1bc" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="153.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,70</text>
<text x="120" y="205.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<rect x="130" y="174" width="52" height="52" fill="#e7c6d7" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,60</text>
<rect x="182" y="174" width="52" height="52" fill="#a9c3d4" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,33</text>
<rect x="234" y="174" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="286" y="174" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="338" y="174" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="390" y="174" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="442" y="174" width="52" height="52" fill="#b9cedc" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,38</text>
<rect x="494" y="174" width="52" height="52" fill="#e9cddb" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="205.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,58</text>
<text x="120" y="257.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<rect x="130" y="226" width="52" height="52" fill="#e7c6d7" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="257.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,60</text>
<rect x="182" y="226" width="52" height="52" fill="#a9c3d4" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="257.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,33</text>
<rect x="234" y="226" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="257.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="286" y="226" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="338" y="226" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="257.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="390" y="226" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="257.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="442" y="226" width="52" height="52" fill="#ce8eaf" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="257.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,75</text>
<rect x="494" y="226" width="52" height="52" fill="#ba608d" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="257.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,88</text>
<text x="120" y="309.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<rect x="130" y="278" width="52" height="52" fill="#ba608d" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="309.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,88</text>
<rect x="182" y="278" width="52" height="52" fill="#ce8eaf" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="309.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,75</text>
<rect x="234" y="278" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="309.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="286" y="278" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="309.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="338" y="278" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="390" y="278" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="309.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="442" y="278" width="52" height="52" fill="#a9c3d4" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="309.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,33</text>
<rect x="494" y="278" width="52" height="52" fill="#e7c6d7" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="309.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,60</text>
<text x="120" y="361.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<rect x="130" y="330" width="52" height="52" fill="#e9cddb" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,58</text>
<rect x="182" y="330" width="52" height="52" fill="#b9cedc" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,38</text>
<rect x="234" y="330" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="286" y="330" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="338" y="330" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="390" y="330" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="442" y="330" width="52" height="52" fill="#a9c3d4" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,33</text>
<rect x="494" y="330" width="52" height="52" fill="#e7c6d7" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="361.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,60</text>
<text x="120" y="413.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<rect x="130" y="382" width="52" height="52" fill="#d6a1bc" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,70</text>
<rect x="182" y="382" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="234" y="382" width="52" height="52" fill="#e3bdd0" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,62</text>
<rect x="286" y="382" width="52" height="52" fill="#88acc4" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="413.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,25</text>
<rect x="338" y="382" width="52" height="52" fill="#dcadc5" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,67</text>
<rect x="390" y="382" width="52" height="52" fill="#dcadc5" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,67</text>
<rect x="442" y="382" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="494" y="382" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="520.0" y="413.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<text x="120" y="465.0" font-size="13" text-anchor="end" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<rect x="130" y="434" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="156.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="182" y="434" width="52" height="52" fill="#9cbacd" stroke="#fff" stroke-width="2"/>
<text x="208.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,30</text>
<rect x="234" y="434" width="52" height="52" fill="#cadae4" stroke="#fff" stroke-width="2"/>
<text x="260.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,42</text>
<rect x="286" y="434" width="52" height="52" fill="#5689ab" stroke="#fff" stroke-width="2"/>
<text x="312.0" y="465.0" font-size="13.5" fill="#fff" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,12</text>
<rect x="338" y="434" width="52" height="52" fill="#c3d5e1" stroke="#fff" stroke-width="2"/>
<text x="364.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,40</text>
<rect x="390" y="434" width="52" height="52" fill="#c3d5e1" stroke="#fff" stroke-width="2"/>
<text x="416.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,40</text>
<rect x="442" y="434" width="52" height="52" fill="#f8fafc" stroke="#fff" stroke-width="2"/>
<text x="468.0" y="465.0" font-size="13.5" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif">0,50</text>
<rect x="494" y="434" width="52" height="52" fill="#f1f5f9" stroke="#fff" stroke-width="2"/>
<rect x="132" y="280" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="184" y="280" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="236" y="124" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="288" y="124" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="340" y="384" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="392" y="384" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="444" y="228" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<rect x="496" y="228" width="48" height="48" fill="none" stroke="#334155" stroke-width="2.4" rx="3"/>
<text x="338.0" y="510.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >rouge : le joueur 2 est favori ; bleu : le joueur 1 est favori</text>
</svg>
</div>
<p class="legende">Probabilité que la séquence du joueur 2 (en ligne) sorte avant celle du joueur 1 (en colonne), calculée exactement. Les cases encadrées sont la meilleure réponse du joueur 2&nbsp;: quelle que soit la séquence adverse, il existe une réponse qui gagne au moins deux fois sur trois.</p>

Il n'y a donc pas de meilleure séquence&nbsp;: **celui qui choisit en second gagne**. Les meilleures réponses forment même un cycle, comme à pierre-feuille-ciseaux&nbsp;: FFP est battue par PFF, elle-même battue par PPF, battue par FPP, qui est battue par… FFP.

<div class="svg-container">
<svg viewBox="0 0 600 270" role="img" aria-label="Graphe des meilleures réponses : une flèche va de la séquence choisie par le joueur 1 vers celle que le joueur 2 doit lui opposer, avec la probabilité de victoire. Les quatre séquences du centre forment un cycle, comme pierre-feuille-ciseaux. Sous chaque séquence, le nombre moyen de lancers pour la voir apparaître." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="pca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<line x1="109.0" y1="80.0" x2="185.0" y2="80.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="147.0" y="71.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >2/3</text>
<line x1="259.0" y1="80.0" x2="335.0" y2="80.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="297.0" y="71.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >3/4</text>
<line x1="491.0" y1="80.0" x2="415.0" y2="80.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="453.0" y="71.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >7/8</text>
<line x1="375.0" y1="110.0" x2="375.0" y2="164.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="355.0" y="142.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >2/3</text>
<line x1="341.0" y1="200.0" x2="265.0" y2="200.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="303.0" y="191.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >3/4</text>
<line x1="491.0" y1="200.0" x2="415.0" y2="200.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="453.0" y="191.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >2/3</text>
<line x1="109.0" y1="200.0" x2="185.0" y2="200.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="147.0" y="191.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >7/8</text>
<line x1="225.0" y1="170.0" x2="225.0" y2="116.0" stroke="#970E53" stroke-width="3.2" marker-end="url(#pca)"/>
<text x="205.0" y="148.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >2/3</text>
<rect x="41" y="58" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="75" y="86" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<text x="75.0" y="48.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10 lancers</text>
<rect x="191" y="58" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="225" y="86" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<text x="225.0" y="48.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8 lancers</text>
<rect x="341" y="58" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="375" y="86" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<text x="375.0" y="48.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8 lancers</text>
<rect x="491" y="58" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="525" y="86" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan><tspan fill="#004D80">F</tspan></text>
<text x="525.0" y="48.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >14 lancers</text>
<rect x="41" y="178" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="75" y="206" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<text x="75.0" y="240.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >14 lancers</text>
<rect x="191" y="178" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="225" y="206" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan></text>
<text x="225.0" y="240.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8 lancers</text>
<rect x="341" y="178" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="375" y="206" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan></text>
<text x="375.0" y="240.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8 lancers</text>
<rect x="491" y="178" width="68" height="44" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.6"/>
<text x="525" y="206" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-weight="bold"><tspan fill="#970E53">P</tspan><tspan fill="#004D80">F</tspan><tspan fill="#970E53">P</tspan></text>
<text x="525.0" y="240.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10 lancers</text>
</svg>
</div>
<p class="legende">Les meilleures réponses, avec leur probabilité de victoire. La recette, due à John Conway&nbsp;: prendre le contraire du deuxième lancer adverse, puis y accoler les deux premiers lancers adverses (contre FFP&nbsp;: P suivi de FF, soit PFF). Sous chaque séquence, le nombre moyen de lancers nécessaires pour la voir sortir.</p>

Essayez de battre l'ordinateur, qui applique la recette de Conway&nbsp;:

<div class="svg-container">
<svg id="pj-svg" viewBox="0 0 600 170" role="img" aria-label="Jeu de Penney contre l'ordinateur : vous choisissez une séquence, l'ordinateur répond, puis les lancers défilent jusqu'à ce que l'une des deux séquences apparaisse." style="width:100%;max-width:600px;height:auto;">
<text id="pj-vs" x="300" y="26" font-size="16" text-anchor="middle" font-family="Georgia,'Times New Roman',serif"></text>
<g id="pj-coins"></g>
<text id="pj-res" x="300" y="112" font-size="14" fill="#334155" text-anchor="middle" font-family="Georgia,'Times New Roman',serif"></text>
<rect x="80" y="128" width="440" height="16" rx="8" fill="#e5c3d4"/>
<rect id="pj-bar" x="80" y="128" width="0" height="16" rx="8" fill="#004D80"/>
<text id="pj-s1" x="80" y="162" font-size="13" fill="#004D80" text-anchor="start" font-family="Georgia,'Times New Roman',serif">vous : 0</text>
<text id="pj-s2" x="520" y="162" font-size="13" fill="#970E53" text-anchor="end" font-family="Georgia,'Times New Roman',serif">ordinateur : 0</text>
</svg>
<div class="fig-commandes"><div id="pj-choix" class="pj-choix">Votre séquence : </div><button type="button" id="pj-go">▶ Jouer une partie</button> <button type="button" id="pj-many">Jouer 100 parties d'un coup</button></div>
</div>
<p class="legende">Choisissez votre séquence, puis lancez des parties. L'ordinateur répond toujours avec la recette de Conway&nbsp;; sur 100 parties, la barre ne ment pas.</p>

### Une course entre deux chaînes de Markov

Pour comprendre, suivons la partie comme un jeton sur un graphe. L'état est la fin de la suite des lancers qui peut encore servir à l'un des joueurs. Voici la course FFP contre PFF&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 600 300" role="img" aria-label="La course entre FFP et PFF comme chaîne de Markov. Chaque flèche a une probabilité 1/2. Dès que P sort, le jeton ne peut plus jamais atteindre FFP : la seule chance de FFP est de commencer par deux F, soit une chance sur quatre." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="pka" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<defs><marker id="pkm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<rect x="150" y="170" width="240" height="82" rx="14" fill="#f9f1f5" stroke="#970E53" stroke-width="1.2" stroke-dasharray="5 4"/>
<path d="M93.6,134.1 Q135.0,115.0 170.9,98.4" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="138.7" y="131.5" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >F</text>
<path d="M93.3,156.6 Q135.0,177.5 171.4,195.7" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="139.0" y="171.1" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >P</text>
<path d="M226.0,85.0 Q270.0,85.0 308.0,85.0" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="268.5" y="102.0" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >F</text>
<path d="M366.0,85.0 Q415.0,85.0 458.0,85.0" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="413.5" y="102.0" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >P</text>
<path d="M200.0,111.0 Q200.0,147.5 200.0,178.0" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="212.0" y="151.0" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >P</text>
<path d="M226.0,210.0 Q270.0,210.0 308.0,210.0" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="268.5" y="227.0" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >F</text>
<path d="M366.0,210.0 Q415.0,210.0 458.0,210.0" fill="none" stroke="#970E53" stroke-width="1.7" marker-end="url(#pkm)"/>
<text x="413.5" y="227.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >F</text>
<path d="M315.4,218.4 Q270.0,234.0 230.3,220.4" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="271.4" y="243.7" text-anchor="middle" font-size="13" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" >P</text>
<path d="M188,230 C166,270 234,270 212,230" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="230.0" y="263.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >P</text>
<path d="M328,65 C306,25 374,25 352,65" fill="none" stroke="#94a3b8" stroke-width="1.7" marker-end="url(#pka)"/>
<text x="370.0" y="42.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >F</text>
<rect x="35.0" y="125" width="70" height="40" rx="9" fill="#e6edf2" stroke="#004D80" stroke-width="1.6"/>
<text x="70.0" y="150.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >départ</text>
<rect x="172.0" y="65" width="56" height="40" rx="9" fill="#e6edf2" stroke="#004D80" stroke-width="1.6"/>
<text x="200.0" y="90.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >F</text>
<rect x="312.0" y="65" width="56" height="40" rx="9" fill="#e6edf2" stroke="#004D80" stroke-width="1.6"/>
<text x="340.0" y="90.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >FF</text>
<rect x="462.0" y="65" width="56" height="40" rx="9" fill="#bfdad8" stroke="#006C65" stroke-width="1.6"/>
<text x="490.0" y="90.0" text-anchor="middle" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >FFP</text>
<rect x="172.0" y="190" width="56" height="40" rx="9" fill="#e6edf2" stroke="#004D80" stroke-width="1.6"/>
<text x="200.0" y="215.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >P</text>
<rect x="312.0" y="190" width="56" height="40" rx="9" fill="#e6edf2" stroke="#004D80" stroke-width="1.6"/>
<text x="340.0" y="215.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >PF</text>
<rect x="462.0" y="190" width="56" height="40" rx="9" fill="#e5c3d4" stroke="#970E53" stroke-width="1.6"/>
<text x="490.0" y="215.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >PFF</text>
<text x="580.0" y="290.0" text-anchor="end" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >le piège : une fois P sorti, FFP ne peut plus gagner</text>
</svg>
</div>
<p class="legende">Chaque flèche a une probabilité $\frac12$. Les états FFP et PFF sont <b>absorbants</b>&nbsp;: une fois atteints, la partie est finie.</p>

Le dessin dit tout. Dès qu'un P sort, le jeton entre dans la zone rose, et il n'en ressortira que par PFF&nbsp;: tout F qui suit un P prépare PFF, et FF ne peut plus apparaître sans être précédé d'un P. La seule chance de FFP est donc que les deux premiers lancers soient FF, soit une chance sur quatre. PFF gagne trois fois sur quatre. Le secret de la réponse de Conway est là&nbsp;: **se placer juste devant la séquence adverse**, pour qu'elle serve de tremplin.

### Le paradoxe des temps d'attente

On pourrait croire qu'une séquence gagne parce qu'elle sort plus vite en moyenne. Il n'en est rien. Il faut en moyenne 14 lancers pour voir FFF et seulement 8 pour FFP&nbsp;; pourtant, face à face, elles ont exactement une chance sur deux chacune (dès que FF sort, le lancer suivant tranche). Inversement, FFP et PFF demandent toutes deux 8 lancers en moyenne, mais PFF gagne trois fois sur quatre. Le temps d'attente moyen ne dit rien de l'issue d'une course&nbsp;: c'est la façon dont les deux séquences se recouvrent qui décide.

D'où viennent ces nombres&nbsp;? Une séquence qui « se recouvre » elle-même est lente à venir&nbsp;: un échec à la dernière lettre de FFF ne laisse aucun acquis, alors qu'un échec de FFP (on tire F au lieu de P) laisse FF, prêt à servir.

<div id="preuve">
<details>
<summary>calculer le temps d'attente avec un casino (l'argument des parieurs)</summary>

Voici un argument d'une élégance rare, présenté dans le livre de Levin et Peres. Installons un casino équitable où l'on parie sur chaque lancer&nbsp;: une mise de $k$ euros sur le bon côté rapporte $2k$, sinon elle est perdue.

Avant chaque lancer, un nouveau parieur arrive avec 1&nbsp;euro et suit la séquence attendue, disons FPF&nbsp;: il mise tout sur F&nbsp;; s'il gagne, il remise ses 2&nbsp;euros sur P&nbsp;; s'il gagne encore, il remise ses 4&nbsp;euros sur F. Au premier échec, il repart les poches vides.

Arrêtons tout quand FPF sort, au lancer $\tau$. À ce moment, $\tau$ parieurs ont misé chacun 1&nbsp;euro. Qui repart avec de l'argent&nbsp;? Celui arrivé trois lancers plus tôt, qui a vu sortir FPF en entier&nbsp;: il emporte $8$&nbsp;euros. Celui arrivé au dernier lancer a misé sur F et gagné&nbsp;: $2$&nbsp;euros. Celui de l'avant-dernier lancer avait misé sur F et vu sortir P&nbsp;: rien. Les gains totaux valent donc $8+2=10$, quoi qu'il arrive.

Le casino étant équitable, les joueurs ne peuvent rien gagner en moyenne&nbsp;: $\mathbb{E}(\text{gains}-\text{mises})=0$, soit $10-\mathbb{E}(\tau)=0$. D'où $\mathbb{E}(\tau)=10$.

En général, le temps d'attente moyen d'une séquence est la somme des $2^k$ pour toutes les longueurs $k$ telles que les $k$ dernières lettres de la séquence coïncident avec ses $k$ premières&nbsp;: $8$ pour FFP (aucun recouvrement), $8+2=10$ pour FPF, $8+4+2=14$ pour FFF. Avec deux familles de parieurs, une par joueur, le même argument donne la formule de Conway pour les probabilités de victoire.
</details>
</div>

<br>

<div id="preuve">
<details>
<summary>la méthode générale&nbsp;: la matrice fondamentale d'une chaîne absorbante</summary>

Rangeons d'abord les états <b>transitoires</b> (départ, F, P, FF…), puis les états <b>absorbants</b> (les deux séquences gagnantes). La matrice de transition prend la forme par blocs

<p style="text-align:center;">$P=\begin{pmatrix}Q & R\\ 0 & I\end{pmatrix},$</p>

où $Q$ contient les transitions entre états transitoires et $R$ celles qui mènent à un état absorbant. Par récurrence,

<p style="text-align:center;">$P^n=\begin{pmatrix}Q^n & (I+Q+\dots+Q^{n-1})R\\ 0 & I\end{pmatrix}.$</p>

Comme le jeton finit forcément absorbé, $Q^n\to0$. La série $I+Q+Q^2+\dots$ converge alors vers la <b>matrice fondamentale</b>&nbsp;:

<p style="text-align:center;">$N=(I-Q)^{-1}.$</p>

Son coefficient $N\_{ij}$ est le nombre moyen de passages par l'état $j$ en partant de $i$ (chaque terme $(Q^n)\_{ij}$ est la probabilité d'y être au temps $n$). On en tire tout&nbsp;:
<ul>
<li>la somme de la ligne $i$ de $N$ est la durée moyenne de la partie en partant de $i$&nbsp;;</li>
<li>la matrice $B=NR$ donne les probabilités d'absorption&nbsp;: $ B_{ i k } $ est la probabilité de finir dans l'état gagnant $k$ en partant de $i$.</li>
</ul>
C'est ainsi qu'est calculé exactement le tableau des 56 duels ci-dessus&nbsp;: une petite matrice à inverser par duel.

</details>
</div>

## Revenir chez soi

Lâchons maintenant un marcheur sur un réseau infini&nbsp;: à chaque pas, il choisit au hasard l'une des directions possibles (gauche ou droite sur une droite, quatre directions dans le plan, six dans l'espace). C'est une chaîne de Markov, avec une infinité d'états. Question simple&nbsp;: **reviendra-t-il un jour à son point de départ&nbsp;?**

<div class="svg-container">
<svg viewBox="0 0 600 320" role="img" aria-label="Proportion de marches aléatoires déjà revenues à leur point de départ en fonction du nombre de pas (échelle logarithmique). En dimension 1 et 2, la courbe tend vers 1 : le retour est certain. En dimension 3, elle plafonne vers 34 % : deux fois sur trois, le marcheur se perd pour toujours." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="pox" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<line x1="60.0" y1="264.0" x2="530.0" y2="264.0" stroke="#cbd5e1" stroke-width="1" />
<text x="52.0" y="268.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0 %</text>
<line x1="60.0" y1="204.0" x2="530.0" y2="204.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="208.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >25 %</text>
<line x1="60.0" y1="144.0" x2="530.0" y2="144.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="148.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >50 %</text>
<line x1="60.0" y1="84.0" x2="530.0" y2="84.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="88.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >75 %</text>
<line x1="60.0" y1="24.0" x2="530.0" y2="24.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="28.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >100 %</text>
<text x="60.0" y="282.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="169.3" y="282.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10</text>
<text x="278.6" y="282.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >100</text>
<text x="387.8" y="282.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1 000</text>
<text x="497.1" y="282.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10 000</text>
<text x="530.0" y="300.0" text-anchor="end" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >nombre de pas (échelle logarithmique)</text>
<line x1="60.0" y1="182.3" x2="530.0" y2="182.3" stroke="#006C65" stroke-width="1.2" stroke-dasharray="6 4"/>
<text x="534.0" y="186.3" text-anchor="start" font-size="12" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >34 %</text>
<polyline points="60.0,264.0 92.9,143.1 112.1,143.1 125.8,113.7 136.4,113.7 145.0,98.0 152.3,98.0 158.7,89.3 164.3,89.3 169.3,82.6 173.8,82.6 177.9,77.8 181.7,77.8 185.2,74.5 188.5,74.5 191.6,71.6 194.5,71.6 197.2,69.0 199.7,69.0 202.2,67.0 204.5,67.0 206.7,65.0 208.8,65.0 210.8,63.4 212.8,63.4 214.6,61.7 216.4,61.7 218.1,60.2 219.8,60.2 221.4,58.9 223.0,58.9 224.5,57.8 227.4,56.9 228.7,56.9 230.1,56.0 232.6,54.9 233.9,54.9 236.2,54.3 237.4,53.6 239.6,52.9 241.7,52.4 243.7,51.7 244.7,51.7 246.6,51.2 248.4,50.7 250.2,50.0 252.7,49.1 254.3,48.7 255.9,48.3 258.1,48.0 259.5,47.7 261.6,47.2 263.0,47.0 264.9,46.7 266.8,46.1 268.6,45.9 270.3,45.4 272.5,44.8 274.1,44.6 276.1,44.2 277.6,43.8 279.5,43.4 281.3,43.0 283.1,42.7 285.2,42.3 286.8,42.0 288.8,41.5 290.6,41.3 292.4,40.8 294.2,40.5 295.9,40.3 297.8,40.0 299.7,39.8 301.4,39.5 303.2,39.2 305.1,39.0 306.7,38.8 308.5,38.5 310.5,38.3 312.2,38.0 314.0,37.8 316.0,37.6 317.7,37.4 319.5,37.1 321.3,36.9 323.2,36.6 325.0,36.3 326.7,36.0 328.6,35.7 330.4,35.4 332.2,35.2 334.0,35.0 335.8,34.8 337.6,34.6 339.5,34.5 341.3,34.2 343.1,33.9 344.9,33.7 346.8,33.6 348.5,33.4 350.4,33.2 352.2,33.0 354.0,32.8 355.8,32.7 357.6,32.6 359.5,32.3 361.2,32.3 363.0,32.1 364.8,32.0 366.6,31.8 368.5,31.7 370.3,31.5 372.1,31.5 373.9,31.3 375.7,31.2 377.6,31.1 379.4,30.9 381.2,30.8 383.0,30.6 384.8,30.5 386.6,30.4 388.4,30.3 390.3,30.2 392.1,30.1 393.9,29.9 395.7,29.8 397.5,29.7 399.4,29.6 401.1,29.5 403.0,29.4 404.8,29.3 406.6,29.2 408.4,29.1 410.2,29.1 412.1,28.9 413.9,28.8 415.7,28.7 417.5,28.7 419.3,28.5 421.1,28.5 422.9,28.4 424.7,28.3 426.6,28.2 428.4,28.1 430.2,27.9 432.0,27.9 433.8,27.9 435.6,27.7 437.4,27.7 439.3,27.6 441.1,27.6 442.9,27.5 444.7,27.5 446.5,27.4 448.3,27.4 450.1,27.3 452.0,27.3 453.8,27.2 455.6,27.2 457.4,27.1 459.2,27.0 461.0,27.0 462.9,26.9 464.7,26.9 466.5,26.8 468.3,26.7 470.1,26.6 471.9,26.6 473.7,26.5 475.6,26.5 477.4,26.4 479.2,26.4 481.0,26.3 482.8,26.3 484.6,26.2 486.4,26.2 488.3,26.2 490.1,26.1 491.9,26.1 493.7,26.1 495.5,26.1 497.3,26.0 499.2,26.0 501.0,25.9 502.8,25.8 504.6,25.8 506.4,25.8 508.2,25.8 510.0,25.7 511.9,25.7 513.7,25.7 515.5,25.6 517.3,25.6 519.1,25.5 520.9,25.5 522.7,25.5 524.6,25.4 526.4,25.4 528.2,25.4 530.0,25.4" fill="none" stroke="#970E53" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" />
<polyline points="60.0,264.0 92.9,202.9 112.1,202.9 125.8,184.1 136.4,184.1 145.0,174.6 152.3,174.6 158.7,167.8 164.3,167.8 169.3,162.7 173.8,162.7 177.9,158.6 181.7,158.6 185.2,155.7 188.5,155.7 191.6,153.1 194.5,153.1 197.2,151.0 199.7,151.0 202.2,149.0 204.5,149.0 206.7,147.7 208.8,147.7 210.8,146.0 212.8,146.0 214.6,144.3 216.4,144.3 218.1,142.9 219.8,142.9 221.4,141.8 223.0,141.8 224.5,140.7 227.4,139.7 228.7,139.7 230.1,138.8 232.6,138.0 233.9,138.0 236.2,137.3 237.4,136.6 239.6,135.7 241.7,135.1 243.7,134.3 244.7,134.3 246.6,133.7 248.4,133.0 250.2,132.4 252.7,131.4 254.3,130.9 255.9,130.5 258.1,130.0 259.5,129.6 261.6,128.9 263.0,128.4 264.9,128.1 266.8,127.2 268.6,126.8 270.3,126.3 272.5,125.8 274.1,125.5 276.1,124.9 277.6,124.4 279.5,123.8 281.3,123.3 283.1,123.0 285.2,122.5 286.8,122.1 288.8,121.5 290.6,121.2 292.4,120.7 294.2,120.3 295.9,119.7 297.8,119.2 299.7,118.8 301.4,118.5 303.2,118.2 305.1,117.8 306.7,117.5 308.5,117.0 310.5,116.5 312.2,116.2 314.0,115.7 316.0,115.3 317.7,115.1 319.5,114.7 321.3,114.3 323.2,113.8 325.0,113.4 326.7,113.1 328.6,112.7 330.4,112.2 332.2,111.8 334.0,111.6 335.8,111.2 337.6,110.8 339.5,110.4 341.3,110.0 343.1,109.5 344.9,109.3 346.8,108.9 348.5,108.7 350.4,108.2 352.2,107.8 354.0,107.4 355.8,107.0 357.6,106.6 359.5,106.3 361.2,105.9 363.0,105.5 364.8,105.2 366.6,104.8 368.5,104.4 370.3,104.1 372.1,103.7 373.9,103.4 375.7,103.2 377.6,102.8 379.4,102.4 381.2,102.1 383.0,101.8 384.8,101.6 386.6,101.3 388.4,101.0 390.3,100.7 392.1,100.5 393.9,100.2 395.7,99.9 397.5,99.7 399.4,99.3 401.1,99.1 403.0,98.8 404.8,98.5 406.6,98.2 408.4,98.0 410.2,97.8 412.1,97.5 413.9,97.3 415.7,97.0 417.5,96.8 419.3,96.5 421.1,96.0 422.9,95.9 424.7,95.6 426.6,95.3 428.4,95.1 430.2,94.8 432.0,94.5 433.8,94.3 435.6,94.1 437.4,93.9 439.3,93.7 441.1,93.5 442.9,93.3 444.7,93.0 446.5,92.7 448.3,92.5 450.1,92.1 452.0,91.8 453.8,91.6 455.6,91.4 457.4,91.1 459.2,90.9 461.0,90.6 462.9,90.4 464.7,90.2 466.5,90.0 468.3,89.8 470.1,89.6 471.9,89.3 473.7,89.2 475.6,88.9 477.4,88.7 479.2,88.5 481.0,88.2 482.8,88.0 484.6,87.8 486.4,87.7 488.3,87.5 490.1,87.3 491.9,87.1 493.7,86.9 495.5,86.7 497.3,86.5 499.2,86.3 501.0,86.1 502.8,85.9 504.6,85.7 506.4,85.5 508.2,85.4 510.0,85.2 511.9,85.1 513.7,84.9 515.5,84.8 517.3,84.6 519.1,84.5 520.9,84.4 522.7,84.1 524.6,84.0 526.4,83.9 528.2,83.7 530.0,83.5" fill="none" stroke="#004D80" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" />
<polyline points="60.0,264.0 92.9,223.5 112.1,223.5 125.8,213.6 136.4,213.6 145.0,208.5 152.3,208.5 158.7,205.4 164.3,205.4 169.3,202.9 173.8,202.9 177.9,200.8 181.7,200.8 185.2,199.2 188.5,199.2 191.6,198.0 194.5,198.0 197.2,197.0 199.7,197.0 202.2,196.3 204.5,196.3 206.7,195.6 208.8,195.6 210.8,194.9 212.8,194.9 214.6,194.3 216.4,194.3 218.1,193.8 219.8,193.8 221.4,193.5 223.0,193.5 224.5,193.2 227.4,193.0 228.7,193.0 230.1,192.8 232.6,192.5 233.9,192.5 236.2,192.2 237.4,191.9 239.6,191.7 241.7,191.5 243.7,191.3 244.7,191.3 246.6,191.1 248.4,191.0 250.2,190.7 252.7,190.4 254.3,190.2 255.9,190.1 258.1,190.0 259.5,189.8 261.6,189.6 263.0,189.5 264.9,189.4 266.8,189.2 268.6,189.1 270.3,189.0 272.5,188.8 274.1,188.6 276.1,188.5 277.6,188.2 279.5,188.0 281.3,187.8 283.1,187.7 285.2,187.5 286.8,187.4 288.8,187.3 290.6,187.2 292.4,187.1 294.2,186.9 295.9,186.7 297.8,186.6 299.7,186.5 301.4,186.4 303.2,186.3 305.1,186.2 306.7,186.1 308.5,186.0 310.5,185.9 312.2,185.8 314.0,185.7 316.0,185.6 317.7,185.6 319.5,185.5 321.3,185.4 323.2,185.3 325.0,185.1 326.7,185.0 328.6,184.9 330.4,184.9 332.2,184.8 334.0,184.6 335.8,184.5 337.6,184.4 339.5,184.4 341.3,184.3 343.1,184.2 344.9,184.1 346.8,184.0 348.5,184.0 350.4,183.9 352.2,183.8 354.0,183.8 355.8,183.7 357.6,183.7 359.5,183.6 361.2,183.5 363.0,183.5 364.8,183.4 366.6,183.4 368.5,183.3 370.3,183.2 372.1,183.1 373.9,183.1 375.7,183.1 377.6,183.0 379.4,183.0 381.2,182.9 383.0,182.9 384.8,182.9 386.6,182.8 388.4,182.8 390.3,182.7 392.1,182.7 393.9,182.7 395.7,182.7 397.5,182.6 399.4,182.6 401.1,182.6 403.0,182.6 404.8,182.5 406.6,182.4 408.4,182.4 410.2,182.4 412.1,182.3 413.9,182.3 415.7,182.3 417.5,182.3 419.3,182.2 421.1,182.2 422.9,182.2 424.7,182.1 426.6,182.1 428.4,182.1 430.2,182.1 432.0,182.0 433.8,182.0 435.6,182.0 437.4,182.0 439.3,182.0 441.1,182.0 442.9,181.9 444.7,181.9 446.5,181.9 448.3,181.9 450.1,181.8 452.0,181.8 453.8,181.8 455.6,181.8 457.4,181.8 459.2,181.8 461.0,181.7 462.9,181.7 464.7,181.7 466.5,181.7 468.3,181.6 470.1,181.6 471.9,181.6 473.7,181.6 475.6,181.6 477.4,181.6 479.2,181.5 481.0,181.5 482.8,181.5 484.6,181.5 486.4,181.5 488.3,181.5 490.1,181.5 491.9,181.5 493.7,181.5 495.5,181.5 497.3,181.5 499.2,181.4 501.0,181.4 502.8,181.4 504.6,181.4 506.4,181.4 508.2,181.4 510.0,181.4 511.9,181.4 513.7,181.4 515.5,181.3 517.3,181.3 519.1,181.3 520.9,181.3 522.7,181.3 524.6,181.3 526.4,181.3 528.2,181.3 530.0,181.2" fill="none" stroke="#006C65" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" />
<text x="221.4" y="48.9" text-anchor="start" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">dimension 1 : la droite</text>
<text x="396.5" y="121.8" text-anchor="start" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">dimension 2 : le plan</text>
<text x="396.5" y="170.7" text-anchor="start" font-size="13" fill="#006C65" font-family="Georgia,'Times New Roman',serif" paint-order="stroke" stroke="#fff" stroke-width="5" stroke-linejoin="round">dimension 3 : l'espace</text>
</svg>
</div>
<p class="legende">Proportion de 20&nbsp;000 marcheurs simulés déjà revenus à l'origine après un nombre de pas donné. Sur une droite et dans le plan, la courbe monte vers 100&nbsp;% (lentement dans le plan). Dans l'espace, elle plafonne vers 34&nbsp;%.</p>

C'est le **théorème de Pólya** (1921)&nbsp;: en dimension 1 et 2, le marcheur revient presque sûrement à son point de départ, et même une infinité de fois (la marche est dite **récurrente**)&nbsp;; en dimension 3 et au-delà, il a une probabilité strictement positive (environ 66&nbsp;% en dimension 3) de ne jamais revenir (la marche est **transiente**). Shizuo Kakutani l'a résumé d'une formule&nbsp;: *un homme ivre finit toujours par retrouver sa maison, un oiseau ivre peut se perdre à jamais.*

<div id="preuve">
<details>
<summary>pourquoi la dimension change tout</summary>

L'idée tient en deux remarques.

D'abord, revenir une infinité de fois ou un nombre fini de fois, c'est la même question qu'un nombre moyen de visites infini ou fini&nbsp;: si chaque départ a une probabilité $r<1$ de revenir, le nombre de retours suit une loi géométrique, de moyenne finie $\frac{r}{1-r}$. Le marcheur est donc récurrent si et seulement si $\sum\_t \mathbb{P}(\text{être à l'origine au temps } t)=+\infty$.

Ensuite, après $t$ pas, le marcheur s'est éloigné d'environ $\sqrt t$ (c'est la diffusion) et s'étale donc sur un domaine d'environ $(\sqrt t)^d$ cases. La probabilité d'être pile à l'origine vaut donc environ $t^{-d/2}$. Or $\sum t^{-1/2}$ et $\sum t^{-1}$ divergent, tandis que $\sum t^{-3/2}$ converge. La frontière passe exactement entre le plan et l'espace&nbsp;: en dimension 2, la série diverge de justesse (comme le logarithme), ce qui explique la lenteur de la courbe bleue.
</details>
</div>

Revenir est certain sur une droite, mais **combien de temps faut-il attendre&nbsp;?** Pour une chaîne finie, la réponse tient en une formule d'une simplicité désarmante, due à Mark Kac&nbsp;:

<div id="theo">
<p><b>Temps de retour.</b> Pour une chaîne irréductible de loi stationnaire $\pi$, le temps moyen pour revenir à un état $x$ en partant de $x$ vaut</p>
<p style="text-align:center;">$\mathbb{E}_x\left(\tau_x^+\right)=\dfrac{1}{\pi(x)}.$</p>
</div>

L'intuition est immédiate&nbsp;: si le jeton passe une fraction $\pi(x)$ de son temps en $x$, ses visites sont espacées en moyenne de $1/\pi(x)$ pas.

Cette formule a résolu l'un des grands paradoxes de la physique. En 1907, Paul et Tatiana Ehrenfest proposent un modèle jouet de gaz&nbsp;: $N$ particules réparties entre deux compartiments&nbsp;; à chaque instant, une particule tirée au hasard change de compartiment. Toutes au départ à gauche, elles se répartissent vite moitié-moitié, comme un gaz qui se détend.

<div class="svg-container">
<svg viewBox="0 0 600 300" role="img" aria-label="Urne d'Ehrenfest avec 100 particules, toutes au départ dans le compartiment de gauche. À chaque pas, une particule tirée au hasard change de compartiment. Le nombre de particules à gauche descend vers 50 puis fluctue autour ; à droite, la loi stationnaire (binomiale) qui décrit ces fluctuations." style="width:100%;max-width:600px;height:auto;">
<line x1="60.0" y1="254.0" x2="460.0" y2="254.0" stroke="#cbd5e1" stroke-width="1" />
<text x="52.0" y="258.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="60.0" y1="196.5" x2="460.0" y2="196.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="200.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >25</text>
<line x1="60.0" y1="139.0" x2="460.0" y2="139.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="143.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >50</text>
<line x1="60.0" y1="81.5" x2="460.0" y2="81.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="85.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >75</text>
<line x1="60.0" y1="24.0" x2="460.0" y2="24.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="52.0" y="28.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >100</text>
<text x="60.0" y="272.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="193.3" y="272.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >400</text>
<text x="326.7" y="272.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >800</text>
<text x="460.0" y="272.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1200</text>
<text x="460.0" y="290.0" text-anchor="end" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >nombre de pas</text>
<text x="16.0" y="139.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 16 139.0)">particules à gauche</text>
<polyline points="60.0,24.0 60.7,28.6 61.3,33.2 62.0,37.8 62.7,42.4 63.3,47.0 64.0,51.6 64.7,56.2 65.3,60.8 66.0,60.8 66.7,60.8 67.3,65.4 68.0,70.0 68.7,74.6 69.3,74.6 70.0,79.2 70.7,83.8 71.3,88.4 72.0,93.0 72.7,97.6 73.3,97.6 74.0,97.6 74.7,97.6 75.3,97.6 76.0,102.2 76.7,102.2 77.3,106.8 78.0,111.4 78.7,116.0 79.3,116.0 80.0,116.0 80.7,111.4 81.3,111.4 82.0,116.0 82.7,120.6 83.3,120.6 84.0,120.6 84.7,116.0 85.3,116.0 86.0,111.4 86.7,116.0 87.3,116.0 88.0,120.6 88.7,116.0 89.3,120.6 90.0,125.2 90.7,125.2 91.3,129.8 92.0,129.8 92.7,134.4 93.3,139.0 94.0,134.4 94.7,134.4 95.3,134.4 96.0,129.8 96.7,134.4 97.3,129.8 98.0,129.8 98.7,129.8 99.3,129.8 100.0,129.8 100.7,129.8 101.3,129.8 102.0,129.8 102.7,134.4 103.3,139.0 104.0,134.4 104.7,139.0 105.3,139.0 106.0,134.4 106.7,129.8 107.3,125.2 108.0,125.2 108.7,125.2 109.3,129.8 110.0,129.8 110.7,129.8 111.3,125.2 112.0,120.6 112.7,125.2 113.3,129.8 114.0,129.8 114.7,129.8 115.3,129.8 116.0,125.2 116.7,125.2 117.3,125.2 118.0,125.2 118.7,129.8 119.3,125.2 120.0,125.2 120.7,120.6 121.3,120.6 122.0,120.6 122.7,125.2 123.3,129.8 124.0,129.8 124.7,129.8 125.3,129.8 126.0,134.4 126.7,129.8 127.3,125.2 128.0,125.2 128.7,125.2 129.3,120.6 130.0,120.6 130.7,125.2 131.3,125.2 132.0,125.2 132.7,120.6 133.3,120.6 134.0,120.6 134.7,120.6 135.3,120.6 136.0,116.0 136.7,111.4 137.3,111.4 138.0,106.8 138.7,111.4 139.3,111.4 140.0,111.4 140.7,116.0 141.3,116.0 142.0,120.6 142.7,120.6 143.3,120.6 144.0,125.2 144.7,129.8 145.3,134.4 146.0,134.4 146.7,134.4 147.3,134.4 148.0,139.0 148.7,143.6 149.3,143.6 150.0,143.6 150.7,143.6 151.3,143.6 152.0,143.6 152.7,143.6 153.3,139.0 154.0,139.0 154.7,139.0 155.3,139.0 156.0,139.0 156.7,134.4 157.3,139.0 158.0,134.4 158.7,129.8 159.3,125.2 160.0,125.2 160.7,125.2 161.3,120.6 162.0,120.6 162.7,125.2 163.3,125.2 164.0,129.8 164.7,125.2 165.3,125.2 166.0,125.2 166.7,125.2 167.3,125.2 168.0,120.6 168.7,120.6 169.3,120.6 170.0,125.2 170.7,125.2 171.3,125.2 172.0,125.2 172.7,125.2 173.3,129.8 174.0,134.4 174.7,134.4 175.3,134.4 176.0,129.8 176.7,134.4 177.3,139.0 178.0,139.0 178.7,143.6 179.3,143.6 180.0,143.6 180.7,143.6 181.3,143.6 182.0,139.0 182.7,139.0 183.3,139.0 184.0,143.6 184.7,139.0 185.3,139.0 186.0,139.0 186.7,139.0 187.3,143.6 188.0,143.6 188.7,148.2 189.3,143.6 190.0,139.0 190.7,134.4 191.3,129.8 192.0,134.4 192.7,134.4 193.3,129.8 194.0,129.8 194.7,134.4 195.3,134.4 196.0,129.8 196.7,129.8 197.3,125.2 198.0,125.2 198.7,125.2 199.3,125.2 200.0,125.2 200.7,125.2 201.3,125.2 202.0,125.2 202.7,129.8 203.3,129.8 204.0,129.8 204.7,125.2 205.3,125.2 206.0,125.2 206.7,129.8 207.3,129.8 208.0,129.8 208.7,134.4 209.3,129.8 210.0,125.2 210.7,125.2 211.3,120.6 212.0,120.6 212.7,125.2 213.3,125.2 214.0,125.2 214.7,129.8 215.3,129.8 216.0,125.2 216.7,125.2 217.3,129.8 218.0,125.2 218.7,125.2 219.3,120.6 220.0,125.2 220.7,129.8 221.3,129.8 222.0,134.4 222.7,134.4 223.3,129.8 224.0,134.4 224.7,134.4 225.3,134.4 226.0,134.4 226.7,139.0 227.3,139.0 228.0,139.0 228.7,139.0 229.3,139.0 230.0,143.6 230.7,139.0 231.3,139.0 232.0,139.0 232.7,139.0 233.3,139.0 234.0,139.0 234.7,143.6 235.3,139.0 236.0,139.0 236.7,143.6 237.3,148.2 238.0,148.2 238.7,148.2 239.3,152.8 240.0,148.2 240.7,143.6 241.3,139.0 242.0,139.0 242.7,143.6 243.3,143.6 244.0,143.6 244.7,148.2 245.3,152.8 246.0,152.8 246.7,157.4 247.3,157.4 248.0,157.4 248.7,157.4 249.3,157.4 250.0,157.4 250.7,157.4 251.3,152.8 252.0,152.8 252.7,148.2 253.3,148.2 254.0,143.6 254.7,148.2 255.3,148.2 256.0,143.6 256.7,139.0 257.3,134.4 258.0,129.8 258.7,134.4 259.3,134.4 260.0,134.4 260.7,129.8 261.3,134.4 262.0,139.0 262.7,143.6 263.3,143.6 264.0,139.0 264.7,139.0 265.3,139.0 266.0,143.6 266.7,139.0 267.3,143.6 268.0,143.6 268.7,143.6 269.3,143.6 270.0,143.6 270.7,139.0 271.3,143.6 272.0,139.0 272.7,139.0 273.3,139.0 274.0,139.0 274.7,134.4 275.3,134.4 276.0,134.4 276.7,134.4 277.3,134.4 278.0,134.4 278.7,134.4 279.3,139.0 280.0,143.6 280.7,148.2 281.3,152.8 282.0,152.8 282.7,148.2 283.3,148.2 284.0,148.2 284.7,148.2 285.3,143.6 286.0,143.6 286.7,139.0 287.3,139.0 288.0,139.0 288.7,143.6 289.3,143.6 290.0,143.6 290.7,148.2 291.3,152.8 292.0,152.8 292.7,148.2 293.3,148.2 294.0,143.6 294.7,139.0 295.3,139.0 296.0,139.0 296.7,139.0 297.3,139.0 298.0,134.4 298.7,139.0 299.3,139.0 300.0,134.4 300.7,134.4 301.3,134.4 302.0,139.0 302.7,134.4 303.3,139.0 304.0,143.6 304.7,143.6 305.3,143.6 306.0,139.0 306.7,143.6 307.3,143.6 308.0,143.6 308.7,143.6 309.3,143.6 310.0,143.6 310.7,143.6 311.3,143.6 312.0,148.2 312.7,152.8 313.3,152.8 314.0,152.8 314.7,157.4 315.3,157.4 316.0,162.0 316.7,162.0 317.3,157.4 318.0,157.4 318.7,162.0 319.3,157.4 320.0,157.4 320.7,152.8 321.3,152.8 322.0,152.8 322.7,152.8 323.3,157.4 324.0,157.4 324.7,152.8 325.3,152.8 326.0,148.2 326.7,143.6 327.3,143.6 328.0,143.6 328.7,139.0 329.3,139.0 330.0,139.0 330.7,139.0 331.3,139.0 332.0,139.0 332.7,143.6 333.3,148.2 334.0,152.8 334.7,148.2 335.3,143.6 336.0,148.2 336.7,152.8 337.3,152.8 338.0,152.8 338.7,157.4 339.3,152.8 340.0,152.8 340.7,157.4 341.3,157.4 342.0,157.4 342.7,157.4 343.3,157.4 344.0,157.4 344.7,162.0 345.3,162.0 346.0,157.4 346.7,157.4 347.3,152.8 348.0,152.8 348.7,157.4 349.3,157.4 350.0,162.0 350.7,166.6 351.3,166.6 352.0,166.6 352.7,166.6 353.3,166.6 354.0,162.0 354.7,166.6 355.3,171.2 356.0,175.8 356.7,175.8 357.3,175.8 358.0,175.8 358.7,175.8 359.3,171.2 360.0,171.2 360.7,171.2 361.3,166.6 362.0,162.0 362.7,162.0 363.3,166.6 364.0,162.0 364.7,157.4 365.3,162.0 366.0,157.4 366.7,157.4 367.3,162.0 368.0,162.0 368.7,162.0 369.3,157.4 370.0,152.8 370.7,157.4 371.3,152.8 372.0,157.4 372.7,152.8 373.3,152.8 374.0,152.8 374.7,148.2 375.3,152.8 376.0,152.8 376.7,148.2 377.3,148.2 378.0,148.2 378.7,148.2 379.3,143.6 380.0,143.6 380.7,143.6 381.3,148.2 382.0,148.2 382.7,148.2 383.3,148.2 384.0,148.2 384.7,143.6 385.3,143.6 386.0,143.6 386.7,143.6 387.3,143.6 388.0,143.6 388.7,139.0 389.3,143.6 390.0,148.2 390.7,148.2 391.3,143.6 392.0,139.0 392.7,139.0 393.3,139.0 394.0,134.4 394.7,134.4 395.3,134.4 396.0,139.0 396.7,139.0 397.3,139.0 398.0,143.6 398.7,148.2 399.3,148.2 400.0,152.8 400.7,152.8 401.3,152.8 402.0,152.8 402.7,152.8 403.3,152.8 404.0,148.2 404.7,148.2 405.3,148.2 406.0,152.8 406.7,152.8 407.3,157.4 408.0,157.4 408.7,157.4 409.3,157.4 410.0,152.8 410.7,152.8 411.3,152.8 412.0,152.8 412.7,152.8 413.3,148.2 414.0,148.2 414.7,143.6 415.3,148.2 416.0,148.2 416.7,143.6 417.3,139.0 418.0,143.6 418.7,143.6 419.3,143.6 420.0,143.6 420.7,143.6 421.3,139.0 422.0,139.0 422.7,139.0 423.3,143.6 424.0,143.6 424.7,139.0 425.3,139.0 426.0,143.6 426.7,143.6 427.3,139.0 428.0,139.0 428.7,139.0 429.3,143.6 430.0,143.6 430.7,143.6 431.3,143.6 432.0,139.0 432.7,139.0 433.3,139.0 434.0,139.0 434.7,134.4 435.3,129.8 436.0,129.8 436.7,129.8 437.3,134.4 438.0,129.8 438.7,129.8 439.3,134.4 440.0,129.8 440.7,129.8 441.3,129.8 442.0,134.4 442.7,129.8 443.3,134.4 444.0,134.4 444.7,129.8 445.3,134.4 446.0,129.8 446.7,129.8 447.3,129.8 448.0,129.8 448.7,129.8 449.3,129.8 450.0,129.8 450.7,129.8 451.3,129.8 452.0,129.8 452.7,129.8 453.3,134.4 454.0,139.0 454.7,139.0 455.3,134.4 456.0,139.0 456.7,139.0 457.3,139.0 458.0,139.0 458.7,139.0 459.3,139.0 460.0,143.6" fill="none" stroke="#004D80" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" />
<rect x="482" y="179.2" width="0.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="177.0" width="0.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="174.7" width="0.5" height="2.30" fill="#c16e98"/>
<rect x="482" y="172.3" width="1.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="170.1" width="1.8" height="2.30" fill="#c16e98"/>
<rect x="482" y="167.8" width="3.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="165.4" width="5.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="163.2" width="8.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="160.8" width="12.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="158.5" width="17.9" height="2.30" fill="#c16e98"/>
<rect x="482" y="156.2" width="25.2" height="2.30" fill="#c16e98"/>
<rect x="482" y="153.9" width="34.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="151.6" width="44.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="149.3" width="54.8" height="2.30" fill="#c16e98"/>
<rect x="482" y="147.0" width="65.5" height="2.30" fill="#c16e98"/>
<rect x="482" y="144.8" width="75.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="142.4" width="83.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="140.2" width="88.2" height="2.30" fill="#c16e98"/>
<rect x="482" y="137.8" width="90.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="135.6" width="88.2" height="2.30" fill="#c16e98"/>
<rect x="482" y="133.2" width="83.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="130.9" width="75.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="128.6" width="65.5" height="2.30" fill="#c16e98"/>
<rect x="482" y="126.3" width="54.8" height="2.30" fill="#c16e98"/>
<rect x="482" y="124.1" width="44.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="121.8" width="34.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="119.5" width="25.2" height="2.30" fill="#c16e98"/>
<rect x="482" y="117.2" width="17.9" height="2.30" fill="#c16e98"/>
<rect x="482" y="114.9" width="12.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="112.5" width="8.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="110.2" width="5.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="108.0" width="3.1" height="2.30" fill="#c16e98"/>
<rect x="482" y="105.6" width="1.8" height="2.30" fill="#c16e98"/>
<rect x="482" y="103.3" width="1.0" height="2.30" fill="#c16e98"/>
<rect x="482" y="101.0" width="0.5" height="2.30" fill="#c16e98"/>
<rect x="482" y="98.7" width="0.3" height="2.30" fill="#c16e98"/>
<rect x="482" y="96.4" width="0.1" height="2.30" fill="#c16e98"/>
<text x="527.0" y="65.4" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >loi</text>
<text x="527.0" y="80.4" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >stationnaire</text>
</svg>
</div>
<p class="legende">L'urne d'Ehrenfest avec 100 particules. L'équilibre est atteint en quelques centaines de pas, puis le système fluctue autour de 50, selon la loi stationnaire (binomiale) dessinée à droite.</p>

Or Poincaré avait démontré qu'un système mécanique isolé revient toujours, aussi près qu'on veut, de son état initial. Comment concilier ce retour obligatoire avec l'irréversibilité observée, le gaz qui ne se recomprime jamais tout seul dans un coin&nbsp;? Le modèle d'Ehrenfest donne la réponse, chiffrée. Le retour à l'état « tout à gauche » est certain, mais la loi stationnaire lui donne la probabilité $\pi=\frac{1}{2^N}$&nbsp;: d'après Kac, il faut attendre en moyenne $2^N$ pas. Pour 100 particules, c'est $2^{100}\approx10^{30}$ pas&nbsp;: à un million de pas par seconde, des millions de fois l'âge de l'Univers. Pour un vrai gaz, avec $N\approx10^{23}$, le nombre défie toute image. **Les deux points de vue sont justes&nbsp;: le retour est certain, mais il n'arrive jamais à notre échelle.** La flèche du temps est une affaire de nombres gigantesques, pas une impossibilité (voir la page [Entropie](../../../physique/phistat/entropie/)).

## Échantillonner l'impossible&nbsp;: le Monte-Carlo par chaînes de Markov

Jusqu'ici, la chaîne était donnée et l'on cherchait sa loi stationnaire. Renversons la question&nbsp;: **on se donne une loi $\pi$, et l'on fabrique une chaîne dont elle est la loi stationnaire.** Il suffira alors de laisser tourner la chaîne assez longtemps pour obtenir des tirages selon $\pi$. C'est le **Monte-Carlo par chaînes de Markov** (MCMC), sans doute l'algorithme le plus utilisé de la physique numérique.

Pourquoi un tel détour&nbsp;? Parce qu'en physique statistique, la loi à échantillonner est celle de Boltzmann&nbsp;: à la température $T$, une configuration $x$ d'énergie $E(x)$ a la probabilité

<p style="text-align:center;">
$\displaystyle \pi(x)=\frac{\mathrm{e}^{-E(x)/kT}}{Z},\qquad Z=\sum_y \mathrm{e}^{-E(y)/kT}.$
</p>

Le numérateur se calcule sans peine, mais la constante $Z$ (la fonction de partition) est une somme sur toutes les configurations&nbsp;: $2^{10\\,000}$ termes pour un petit aimant de $100\times100$ spins. Impossible à calculer, et donc impossible de tirer directement selon $\pi$.

### La règle de Metropolis

L'astuce tient en une règle&nbsp;: depuis la configuration $x$, on **propose** une petite modification $y$ (retourner un spin, déplacer une particule), puis on l'**accepte**

<ul>
<li>toujours si elle fait baisser l'énergie&nbsp;;</li>
<li>avec la probabilité $\mathrm{e}^{-\Delta E/kT}$ si elle l'augmente de $\Delta E$&nbsp;;</li>
</ul>

et sinon on reste sur place. Le rapport $\frac{\pi(y)}{\pi(x)}=\mathrm{e}^{-\Delta E/kT}$ ne fait intervenir que la différence d'énergie&nbsp;: **la constante $Z$ a disparu.**

<div class="svg-container">
<svg viewBox="0 0 600 330" role="img" aria-label="En haut, un paysage d'énergie à deux vallées et la règle de Metropolis : un pas qui descend est toujours accepté, un pas qui monte d'une hauteur ΔE l'est avec la probabilité exp(−ΔE/kT). En bas, l'histogramme des positions visitées par la chaîne coïncide avec la loi de Boltzmann." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="mpa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker></defs>
<defs><marker id="mpm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<polyline points="122.6,19.5 124.2,27.8 125.8,35.9 127.4,43.6 129.0,51.0 130.6,58.1 132.2,64.9 133.8,71.4 135.5,77.6 137.1,83.5 138.7,89.2 140.3,94.6 141.9,99.8 143.5,104.6 145.1,109.3 146.7,113.7 148.3,117.9 149.9,121.8 151.5,125.5 153.1,129.0 154.7,132.3 156.3,135.4 157.9,138.2 159.5,140.9 161.1,143.4 162.7,145.7 164.3,147.8 166.0,149.8 167.6,151.6 169.2,153.2 170.8,154.6 172.4,156.0 174.0,157.1 175.6,158.1 177.2,159.0 178.8,159.7 180.4,160.4 182.0,160.8 183.6,161.2 185.2,161.5 186.8,161.6 188.4,161.6 190.0,161.6 191.6,161.4 193.2,161.2 194.8,160.8 196.5,160.4 198.1,159.9 199.7,159.3 201.3,158.6 202.9,157.9 204.5,157.1 206.1,156.2 207.7,155.3 209.3,154.3 210.9,153.3 212.5,152.2 214.1,151.1 215.7,149.9 217.3,148.7 218.9,147.5 220.5,146.2 222.1,144.9 223.7,143.6 225.4,142.3 227.0,140.9 228.6,139.5 230.2,138.1 231.8,136.7 233.4,135.3 235.0,133.9 236.6,132.5 238.2,131.1 239.8,129.6 241.4,128.2 243.0,126.8 244.6,125.4 246.2,124.0 247.8,122.7 249.4,121.3 251.0,120.0 252.6,118.6 254.2,117.3 255.9,116.1 257.5,114.8 259.1,113.6 260.7,112.4 262.3,111.2 263.9,110.0 265.5,108.9 267.1,107.9 268.7,106.8 270.3,105.8 271.9,104.8 273.5,103.9 275.1,103.0 276.7,102.2 278.3,101.4 279.9,100.6 281.5,99.9 283.1,99.2 284.7,98.5 286.4,98.0 288.0,97.4 289.6,96.9 291.2,96.5 292.8,96.0 294.4,95.7 296.0,95.4 297.6,95.1 299.2,94.9 300.8,94.7 302.4,94.6 304.0,94.5 305.6,94.5 307.2,94.5 308.8,94.6 310.4,94.7 312.0,94.9 313.6,95.1 315.3,95.3 316.9,95.6 318.5,96.0 320.1,96.4 321.7,96.8 323.3,97.3 324.9,97.8 326.5,98.3 328.1,98.9 329.7,99.5 331.3,100.2 332.9,100.9 334.5,101.7 336.1,102.4 337.7,103.2 339.3,104.1 340.9,104.9 342.5,105.8 344.1,106.7 345.8,107.7 347.4,108.7 349.0,109.6 350.6,110.6 352.2,111.7 353.8,112.7 355.4,113.8 357.0,114.8 358.6,115.9 360.2,117.0 361.8,118.0 363.4,119.1 365.0,120.2 366.6,121.3 368.2,122.3 369.8,123.4 371.4,124.5 373.0,125.5 374.6,126.5 376.3,127.5 377.9,128.5 379.5,129.5 381.1,130.4 382.7,131.3 384.3,132.1 385.9,133.0 387.5,133.8 389.1,134.5 390.7,135.2 392.3,135.8 393.9,136.4 395.5,136.9 397.1,137.4 398.7,137.8 400.3,138.1 401.9,138.4 403.5,138.5 405.2,138.6 406.8,138.6 408.4,138.6 410.0,138.4 411.6,138.1 413.2,137.7 414.8,137.3 416.4,136.7 418.0,136.0 419.6,135.1 421.2,134.2 422.8,133.1 424.4,131.9 426.0,130.5 427.6,129.0 429.2,127.4 430.8,125.6 432.4,123.6 434.0,121.5 435.7,119.2 437.3,116.8 438.9,114.1 440.5,111.3 442.1,108.3 443.7,105.1 445.3,101.6 446.9,98.0 448.5,94.2 450.1,90.1 451.7,85.9 453.3,81.4 454.9,76.6 456.5,71.6 458.1,66.4 459.7,60.9 461.3,55.2 462.9,49.2 464.5,42.9 466.2,36.3 467.8,29.5 469.4,22.4 471.0,14.9" fill="none" stroke="#334155" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
<circle cx="240.0" cy="120.5" r="9" fill="#004D80"/>
<path d="M228.0,108.5 Q217.1,90.5 194.2,139.0" fill="none" stroke="#006C65" stroke-width="2" marker-end="url(#mpa)"/>
<path d="M252.0,108.5 Q262.9,80.5 285.8,76.1" fill="none" stroke="#970E53" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#mpm)"/>
<text x="190.9" y="183.5" text-anchor="middle" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >descente : toujours acceptée</text>
<text x="245.8" y="32.1" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif">montée de Δ<tspan font-style="italic">E</tspan> :</text>
<text x="245.8" y="47.1" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif">acceptée avec la proba e<tspan dy="-6" font-size="9.5">−Δ<tspan font-style="italic">E</tspan>/<tspan font-style="italic">kT</tspan></tspan></text>
<text x="488.7" y="40.0" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >énergie <tspan font-style="italic">E</tspan></text>
<line x1="60.0" y1="315.0" x2="540.0" y2="315.0" stroke="#94a3b8" stroke-width="1" />
<rect x="57.3" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="62.8" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="68.2" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="73.7" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="79.1" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="84.6" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="90.0" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="95.5" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="100.9" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="106.4" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="111.8" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="117.3" y="314.9" width="5.4" height="0.1" fill="#8cafc6"/>
<rect x="122.8" y="314.6" width="5.4" height="0.4" fill="#8cafc6"/>
<rect x="128.2" y="314.0" width="5.4" height="1.0" fill="#8cafc6"/>
<rect x="133.7" y="312.5" width="5.4" height="2.5" fill="#8cafc6"/>
<rect x="139.1" y="309.6" width="5.4" height="5.4" fill="#8cafc6"/>
<rect x="144.6" y="303.8" width="5.4" height="11.2" fill="#8cafc6"/>
<rect x="150.0" y="294.2" width="5.4" height="20.8" fill="#8cafc6"/>
<rect x="155.5" y="280.8" width="5.4" height="34.2" fill="#8cafc6"/>
<rect x="160.9" y="263.5" width="5.4" height="51.5" fill="#8cafc6"/>
<rect x="166.4" y="246.2" width="5.4" height="68.8" fill="#8cafc6"/>
<rect x="171.8" y="231.3" width="5.4" height="83.7" fill="#8cafc6"/>
<rect x="177.3" y="221.7" width="5.4" height="93.3" fill="#8cafc6"/>
<rect x="182.8" y="217.6" width="5.4" height="97.4" fill="#8cafc6"/>
<rect x="188.2" y="218.7" width="5.4" height="96.3" fill="#8cafc6"/>
<rect x="193.7" y="223.7" width="5.4" height="91.3" fill="#8cafc6"/>
<rect x="199.1" y="231.4" width="5.4" height="83.6" fill="#8cafc6"/>
<rect x="204.6" y="241.1" width="5.4" height="73.9" fill="#8cafc6"/>
<rect x="210.0" y="252.1" width="5.4" height="62.9" fill="#8cafc6"/>
<rect x="215.5" y="262.8" width="5.4" height="52.2" fill="#8cafc6"/>
<rect x="220.9" y="271.7" width="5.4" height="43.3" fill="#8cafc6"/>
<rect x="226.4" y="279.5" width="5.4" height="35.5" fill="#8cafc6"/>
<rect x="231.8" y="286.7" width="5.4" height="28.3" fill="#8cafc6"/>
<rect x="237.3" y="292.7" width="5.4" height="22.3" fill="#8cafc6"/>
<rect x="242.8" y="296.9" width="5.4" height="18.1" fill="#8cafc6"/>
<rect x="248.2" y="300.5" width="5.4" height="14.5" fill="#8cafc6"/>
<rect x="253.7" y="303.2" width="5.4" height="11.8" fill="#8cafc6"/>
<rect x="259.1" y="305.2" width="5.4" height="9.8" fill="#8cafc6"/>
<rect x="264.6" y="306.5" width="5.4" height="8.5" fill="#8cafc6"/>
<rect x="270.0" y="307.8" width="5.4" height="7.2" fill="#8cafc6"/>
<rect x="275.5" y="308.7" width="5.4" height="6.3" fill="#8cafc6"/>
<rect x="280.9" y="309.5" width="5.4" height="5.5" fill="#8cafc6"/>
<rect x="286.4" y="310.1" width="5.4" height="4.9" fill="#8cafc6"/>
<rect x="291.8" y="310.5" width="5.4" height="4.5" fill="#8cafc6"/>
<rect x="297.3" y="310.5" width="5.4" height="4.5" fill="#8cafc6"/>
<rect x="302.8" y="310.4" width="5.4" height="4.6" fill="#8cafc6"/>
<rect x="308.2" y="310.2" width="5.4" height="4.8" fill="#8cafc6"/>
<rect x="313.7" y="309.9" width="5.4" height="5.1" fill="#8cafc6"/>
<rect x="319.1" y="309.3" width="5.4" height="5.7" fill="#8cafc6"/>
<rect x="324.6" y="308.9" width="5.4" height="6.1" fill="#8cafc6"/>
<rect x="330.0" y="308.4" width="5.4" height="6.6" fill="#8cafc6"/>
<rect x="335.5" y="307.4" width="5.4" height="7.6" fill="#8cafc6"/>
<rect x="340.9" y="306.4" width="5.4" height="8.6" fill="#8cafc6"/>
<rect x="346.4" y="305.0" width="5.4" height="10.0" fill="#8cafc6"/>
<rect x="351.8" y="303.5" width="5.4" height="11.5" fill="#8cafc6"/>
<rect x="357.3" y="301.6" width="5.4" height="13.4" fill="#8cafc6"/>
<rect x="362.8" y="299.0" width="5.4" height="16.0" fill="#8cafc6"/>
<rect x="368.2" y="296.2" width="5.4" height="18.8" fill="#8cafc6"/>
<rect x="373.7" y="293.1" width="5.4" height="21.9" fill="#8cafc6"/>
<rect x="379.1" y="289.6" width="5.4" height="25.4" fill="#8cafc6"/>
<rect x="384.6" y="285.8" width="5.4" height="29.2" fill="#8cafc6"/>
<rect x="390.0" y="281.8" width="5.4" height="33.2" fill="#8cafc6"/>
<rect x="395.5" y="278.5" width="5.4" height="36.5" fill="#8cafc6"/>
<rect x="400.9" y="276.4" width="5.4" height="38.6" fill="#8cafc6"/>
<rect x="406.4" y="276.5" width="5.4" height="38.5" fill="#8cafc6"/>
<rect x="411.8" y="278.9" width="5.4" height="36.1" fill="#8cafc6"/>
<rect x="417.3" y="282.7" width="5.4" height="32.3" fill="#8cafc6"/>
<rect x="422.8" y="287.7" width="5.4" height="27.3" fill="#8cafc6"/>
<rect x="428.2" y="294.1" width="5.4" height="20.9" fill="#8cafc6"/>
<rect x="433.7" y="300.9" width="5.4" height="14.1" fill="#8cafc6"/>
<rect x="439.1" y="306.0" width="5.4" height="9.0" fill="#8cafc6"/>
<rect x="444.6" y="309.8" width="5.4" height="5.2" fill="#8cafc6"/>
<rect x="450.0" y="312.2" width="5.4" height="2.8" fill="#8cafc6"/>
<rect x="455.5" y="313.8" width="5.4" height="1.2" fill="#8cafc6"/>
<rect x="460.9" y="314.6" width="5.4" height="0.4" fill="#8cafc6"/>
<rect x="466.4" y="314.9" width="5.4" height="0.1" fill="#8cafc6"/>
<rect x="471.8" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="477.3" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="482.8" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="488.2" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="493.7" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="499.1" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="504.6" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="510.0" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="515.5" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="520.9" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="526.4" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="531.8" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<rect x="537.3" y="315.0" width="5.4" height="0.0" fill="#8cafc6"/>
<polyline points="60.0,315.0 65.5,315.0 70.9,315.0 76.4,315.0 81.8,315.0 87.3,315.0 92.7,315.0 98.2,315.0 103.6,315.0 109.1,315.0 114.5,315.0 120.0,314.9 125.5,314.8 130.9,314.2 136.4,312.9 141.8,309.7 147.3,303.8 152.7,294.0 158.2,280.2 163.6,263.1 169.1,245.0 174.5,228.5 180.0,216.3 185.5,210.0 190.9,210.0 196.4,215.4 201.8,224.8 207.3,236.3 212.7,248.5 218.2,260.1 223.6,270.6 229.1,279.5 234.5,286.8 240.0,292.7 245.5,297.3 250.9,300.8 256.4,303.5 261.8,305.6 267.3,307.2 272.7,308.4 278.2,309.2 283.6,309.9 289.1,310.3 294.5,310.6 300.0,310.8 305.5,310.9 310.9,310.8 316.4,310.7 321.8,310.4 327.3,310.0 332.7,309.4 338.2,308.6 343.6,307.7 349.1,306.4 354.5,304.8 360.0,302.9 365.5,300.5 370.9,297.7 376.4,294.6 381.8,291.2 387.3,287.7 392.7,284.4 398.2,281.8 403.6,280.4 409.1,280.4 414.5,282.3 420.0,285.9 425.5,290.9 430.9,296.5 436.4,302.1 441.8,306.8 447.3,310.3 452.7,312.6 458.2,313.9 463.6,314.6 469.1,314.9 474.5,315.0 480.0,315.0 485.5,315.0 490.9,315.0 496.4,315.0 501.8,315.0 507.3,315.0 512.7,315.0 518.2,315.0 523.6,315.0 529.1,315.0 534.5,315.0 540.0,315.0" fill="none" stroke="#970E53" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
<text x="540.0" y="204.0" text-anchor="end" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >positions visitées par la chaîne (barres)</text>
<text x="540" y="220" font-size="12.5" fill="#970E53" text-anchor="end" font-family="Georgia,'Times New Roman',serif">loi de Boltzmann ∝ e<tspan dy="-6" font-size="9.5">−<tspan font-style="italic">E</tspan>/<tspan font-style="italic">kT</tspan></tspan><tspan dy="6"> (courbe)</tspan></text>
</svg>
</div>
<p class="legende">En haut, la règle sur un paysage d'énergie à deux vallées&nbsp;: la bille descend toujours, mais remonte parfois, d'autant plus facilement que la température est élevée. En bas, après 400&nbsp;000 pas, l'histogramme des positions visitées colle à la loi de Boltzmann.</p>

<div id="preuve">
<details>
<summary>pourquoi la loi stationnaire est bien celle de Boltzmann&nbsp;: l'équilibre détaillé</summary>

Une loi $\pi$ est stationnaire dès que le « trafic » entre deux états est le même dans les deux sens&nbsp;:

<p style="text-align:center;">$\pi(x)\,P(x,y)=\pi(y)\,P(y,x)\quad\text{pour tous } x, y.$</p>

C'est l'<b>équilibre détaillé</b> (la chaîne est dite <b>réversible</b>). En sommant sur $x$, on obtient $\sum\_x\pi(x)P(x,y)=\pi(y)\sum\_x P(y,x)=\pi(y)$, c'est-à-dire $\pi P=\pi$.

Vérifions-le pour Metropolis, avec une proposition symétrique (on propose $y$ depuis $x$ aussi souvent que $x$ depuis $y$). Supposons $E(y)>E(x)$&nbsp;: alors $P(x,y)=\text{(proposition)}\times\mathrm{e}^{-(E(y)-E(x))/kT}$ et $P(y,x)=\text{(proposition)}\times1$. D'où

<p style="text-align:center;">$\pi(x)P(x,y)=\dfrac{\mathrm{e}^{-E(x)/kT}}{Z}\,\mathrm{e}^{-(E(y)-E(x))/kT}\times\text{(prop.)}=\dfrac{\mathrm{e}^{-E(y)/kT}}{Z}\times\text{(prop.)}=\pi(y)P(y,x).$</p>

L'équilibre détaillé est satisfait&nbsp;: la loi de Boltzmann est stationnaire, et si la chaîne est irréductible et apériodique, elle converge vers elle. C'est une version microscopique du principe d'équilibre des réactions chimiques&nbsp;: à l'équilibre, chaque processus est exactement compensé par son inverse.
</details>
</div>

### Le modèle d'Ising et sa transition de phase

Le terrain de jeu favori de cet algorithme est le **modèle d'Ising**, le plus simple des aimants. Sur une grille, chaque site porte un spin qui pointe vers le haut ($+1$) ou vers le bas ($-1$). Deux voisins alignés abaissent l'énergie&nbsp;:

<p style="text-align:center;">
$\displaystyle E=-J\sum_{\text{voisins } i,j}\sigma_i\,\sigma_j .$
</p>

Deux tendances s'affrontent. L'énergie pousse les spins à s'aligner tous dans le même sens (un aimant)&nbsp;; l'agitation thermique les pousse au désordre. Qui l'emporte&nbsp;? Faites l'expérience&nbsp;: ci-dessous, une grille de $160\times160$ spins évolue selon la règle de Metropolis, en direct.

<div class="ising">
<canvas id="is-c" width="160" height="160" aria-label="Simulation du modèle d'Ising : chaque pixel est un spin, bleu vers le haut, clair vers le bas."></canvas>
<svg id="is-g" viewBox="0 0 300 250" role="img" aria-label="Aimantation en fonction de la température : la courbe exacte d'Onsager, nulle au-dessus de la température critique ; le point rouge est la mesure en direct." style="width:min(300px,100%);height:auto;">
<line x1="46.0" y1="198.0" x2="282.0" y2="198.0" stroke="#cbd5e1" stroke-width="1" />
<text x="40.0" y="202.0" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="46.0" y1="108.0" x2="282.0" y2="108.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="40.0" y="112.0" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,5</text>
<line x1="46.0" y1="18.0" x2="282.0" y2="18.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="40.0" y="22.0" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="46.0" y="214.0" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="124.7" y="214.0" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<text x="203.3" y="214.0" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >3</text>
<text x="282.0" y="214.0" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >4</text>
<text x="282.0" y="231.0" text-anchor="end" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" >température <tspan font-style="italic">T</tspan></text>
<text x="16.0" y="108.0" text-anchor="middle" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 16 108.0)">aimantation |m|</text>
<polyline points="46.0,18.1 46.3,18.1 46.7,18.1 47.0,18.1 47.3,18.1 47.7,18.2 48.0,18.2 48.3,18.2 48.7,18.2 49.0,18.2 49.3,18.2 49.7,18.2 50.0,18.2 50.3,18.2 50.7,18.2 51.0,18.2 51.3,18.2 51.7,18.2 52.0,18.2 52.3,18.2 52.7,18.3 53.0,18.3 53.3,18.3 53.7,18.3 54.0,18.3 54.3,18.3 54.7,18.3 55.0,18.3 55.3,18.3 55.7,18.3 56.0,18.3 56.4,18.3 56.7,18.4 57.0,18.4 57.4,18.4 57.7,18.4 58.0,18.4 58.4,18.4 58.7,18.4 59.0,18.4 59.4,18.4 59.7,18.5 60.0,18.5 60.4,18.5 60.7,18.5 61.0,18.5 61.4,18.5 61.7,18.5 62.0,18.5 62.4,18.6 62.7,18.6 63.0,18.6 63.4,18.6 63.7,18.6 64.0,18.6 64.4,18.7 64.7,18.7 65.0,18.7 65.4,18.7 65.7,18.7 66.0,18.7 66.4,18.8 66.7,18.8 67.0,18.8 67.4,18.8 67.7,18.8 68.0,18.8 68.4,18.9 68.7,18.9 69.0,18.9 69.4,18.9 69.7,18.9 70.0,19.0 70.4,19.0 70.7,19.0 71.0,19.0 71.4,19.1 71.7,19.1 72.0,19.1 72.4,19.1 72.7,19.2 73.0,19.2 73.4,19.2 73.7,19.2 74.0,19.3 74.4,19.3 74.7,19.3 75.1,19.3 75.4,19.4 75.7,19.4 76.1,19.4 76.4,19.5 76.7,19.5 77.1,19.5 77.4,19.5 77.7,19.6 78.1,19.6 78.4,19.6 78.7,19.7 79.1,19.7 79.4,19.7 79.7,19.8 80.1,19.8 80.4,19.8 80.7,19.9 81.1,19.9 81.4,20.0 81.7,20.0 82.1,20.0 82.4,20.1 82.7,20.1 83.1,20.1 83.4,20.2 83.7,20.2 84.1,20.3 84.4,20.3 84.7,20.4 85.1,20.4 85.4,20.4 85.7,20.5 86.1,20.5 86.4,20.6 86.7,20.6 87.1,20.7 87.4,20.7 87.7,20.8 88.1,20.8 88.4,20.9 88.7,20.9 89.1,21.0 89.4,21.0 89.7,21.1 90.1,21.1 90.4,21.2 90.7,21.2 91.1,21.3 91.4,21.3 91.7,21.4 92.1,21.5 92.4,21.5 92.7,21.6 93.1,21.6 93.4,21.7 93.8,21.8 94.1,21.8 94.4,21.9 94.8,22.0 95.1,22.0 95.4,22.1 95.8,22.2 96.1,22.2 96.4,22.3 96.8,22.4 97.1,22.4 97.4,22.5 97.8,22.6 98.1,22.7 98.4,22.7 98.8,22.8 99.1,22.9 99.4,23.0 99.8,23.1 100.1,23.1 100.4,23.2 100.8,23.3 101.1,23.4 101.4,23.5 101.8,23.6 102.1,23.7 102.4,23.7 102.8,23.8 103.1,23.9 103.4,24.0 103.8,24.1 104.1,24.2 104.4,24.3 104.8,24.4 105.1,24.5 105.4,24.6 105.8,24.7 106.1,24.8 106.4,24.9 106.8,25.0 107.1,25.1 107.4,25.3 107.8,25.4 108.1,25.5 108.4,25.6 108.8,25.7 109.1,25.8 109.4,25.9 109.8,26.1 110.1,26.2 110.4,26.3 110.8,26.4 111.1,26.6 111.4,26.7 111.8,26.8 112.1,27.0 112.5,27.1 112.8,27.3 113.1,27.4 113.5,27.5 113.8,27.7 114.1,27.8 114.5,28.0 114.8,28.1 115.1,28.3 115.5,28.4 115.8,28.6 116.1,28.8 116.5,28.9 116.8,29.1 117.1,29.3 117.5,29.4 117.8,29.6 118.1,29.8 118.5,30.0 118.8,30.2 119.1,30.3 119.5,30.5 119.8,30.7 120.1,30.9 120.5,31.1 120.8,31.3 121.1,31.5 121.5,31.7 121.8,32.0 122.1,32.2 122.5,32.4 122.8,32.6 123.1,32.9 123.5,33.1 123.8,33.3 124.1,33.6 124.5,33.8 124.8,34.1 125.1,34.3 125.5,34.6 125.8,34.9 126.1,35.1 126.5,35.4 126.8,35.7 127.1,36.0 127.5,36.3 127.8,36.6 128.1,36.9 128.5,37.2 128.8,37.5 129.1,37.8 129.5,38.2 129.8,38.5 130.1,38.9 130.5,39.2 130.8,39.6 131.2,40.0 131.5,40.3 131.8,40.7 132.2,41.1 132.5,41.6 132.8,42.0 133.2,42.4 133.5,42.9 133.8,43.3 134.2,43.8 134.5,44.3 134.8,44.8 135.2,45.3 135.5,45.9 135.8,46.4 136.2,47.0 136.5,47.6 136.8,48.2 137.2,48.9 137.5,49.5 137.8,50.2 138.2,51.0 138.5,51.7 138.8,52.5 139.2,53.3 139.5,54.2 139.8,55.1 140.2,56.0 140.5,57.1 140.8,58.1 141.2,59.3 141.5,60.5 141.8,61.8 142.2,63.2 142.5,64.8 142.8,66.4 143.2,68.3 143.5,70.4 143.8,72.8 144.2,75.6 144.5,78.9 144.8,83.0 145.2,88.7 145.5,97.7 145.8,198.0 145.8,198.0 282.0,198.0" fill="none" stroke="#004D80" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" />
<line x1="145.8" y1="18.0" x2="145.8" y2="198.0" stroke="#970E53" stroke-width="1" stroke-dasharray="4 3"/>
<text x="149.8" y="30" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif"><tspan font-style="italic">T</tspan><tspan dy="3" font-size="9">c</tspan><tspan dy="-3"> ≈ 2,27</tspan></text>
<text x="49.9" y="176.4" text-anchor="start" font-size="11" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >valeur exacte (Onsager, Yang)</text>
<line id="is-tl" x1="0" y1="18" x2="0" y2="198" stroke="#334155" stroke-width="1" stroke-opacity="0.35"/>
<circle id="is-dot" cx="0" cy="0" r="6" fill="#970E53" stroke="#fff" stroke-width="1.5"/>
</svg>
</div>
<div class="fig-commandes"><span>température&nbsp;: <span style="font-style:italic">T</span> = <span id="is-tv">2,00</span></span> <input type="range" id="is-t" min="1" max="4" step="0.01" value="2" aria-label="Température"> <button type="button" id="is-tc">aller à <span style="font-style:italic">T</span><sub>c</sub></button></div>
<div class="fig-commandes"><button type="button" id="is-rand">Tout désordonner</button> <button type="button" id="is-up">Tout aligner</button> <button type="button" id="is-pause">❚❚ Pause</button></div>
<p class="legende">Chaque pixel est un spin (bleu vers le haut, clair vers le bas). Le curseur règle la température (avec $J=k=1$). Le point rouge est l'aimantation mesurée, comparée à la valeur exacte. Partez du désordre à basse température&nbsp;: des domaines se forment et grossissent lentement. Placez-vous à $T_c$&nbsp;: des amas de toutes tailles apparaissent. Au-dessus, le désordre l'emporte.</p>

Il y a une **température critique**, $T\_c=\frac{2J}{k\ln(1+\sqrt2)}\approx2{,}27\\,J/k$. En dessous, une **aimantation spontanée** apparaît&nbsp;: une majorité de spins s'alignent d'eux-mêmes, sans champ extérieur. Au-dessus, elle est nulle. C'est une véritable **transition de phase**, celle d'un aimant qui perd son aimantation quand on le chauffe au-delà de son point de Curie (voir la page [Transitions de phase](../../../physique/phistat/chgt/)). Kramers et Wannier avaient localisé $T\_c$ dès 1941 par un argument de symétrie, et Lars Onsager a résolu le modèle exactement en 1944, un tour de force&nbsp;; mais pour presque tous les autres modèles, seule la simulation par MCMC donne accès aux propriétés de la transition.

Remarquez aussi combien la simulation **peine** à basse température quand on part du désordre&nbsp;: les domaines mettent un temps fou à se résorber, puisqu'un spin isolé dans un domaine adverse n'a presque aucune chance de basculer. Près de $T\_c$, c'est pire encore&nbsp;: c'est le **ralentissement critique**. On retrouve la question des sept battements&nbsp;: la loi stationnaire existe, mais la chaîne peut mettre un temps démesuré à l'atteindre. Le temps de mélange est le talon d'Achille du MCMC, et l'objet même du livre de Levin et Peres.

<div class="encadre">
<div class="encadre-titre">Los Alamos, 1953</div>
<p>L'algorithme est publié en 1953 par Nicholas Metropolis, Arianna et Marshall Rosenbluth, Augusta et Edward Teller, sous le titre <em>Equation of State Calculations by Fast Computing Machines</em>. Il s'agit de calculer les propriétés d'un fluide de disques durs sur MANIAC, l'un des premiers ordinateurs, construit à Los Alamos pour les calculs des armes nucléaires. Selon les témoignages ultérieurs, l'essentiel du travail revient aux Rosenbluth&nbsp;: Arianna Rosenbluth écrivit le programme, Metropolis dirigeait la machine et signa en premier. En 1970, le statisticien W.&nbsp;K. Hastings généralise la méthode à des propositions non symétriques&nbsp;: c'est l'algorithme de Metropolis-Hastings, aujourd'hui au cœur des statistiques bayésiennes, de la cosmologie à la génétique.</p>
</div>

<br>

<b><i>Sources&nbsp;:</i></b>

- Levin, D. A. et Peres, Y. *Markov Chains and Mixing Times*, 2<sup>e</sup> édition, American Mathematical Society (2017). [🌐](https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf)
- Petruszewycz, M. « Chaînes de Markov discrètes dans le domaine linguistique : l'article de 1913 de A. A. Markov », *Publications des séminaires de mathématiques et informatique de Rennes*, fascicule 2 (1981). [🌐](https://www.numdam.org/item/PSMIR_1981___2_A3_0.pdf)
- Hayes, B. « First Links in the Markov Chain », *American Scientist* 101 (2013). [🌐](https://www.americanscientist.org/article/first-links-in-the-markov-chain)
- Bayer, D. et Diaconis, P. « Trailing the Dovetail Shuffle to its Lair », *The Annals of Applied Probability* 2 (1992).
- Metropolis, N., Rosenbluth, A. W., Rosenbluth, M. N., Teller, A. H. et Teller, E. « Equation of State Calculations by Fast Computing Machines », *The Journal of Chemical Physics* 21 (1953).
- Powell, V. et Lehe, L. *Markov Chains, explained visually*, Setosa. [🌐](https://setosa.io/ev/markov-chains/)

<script>
(function () {
  var svg = document.getElementById('mt-svg');
  if (!svg) return;
  var P = [[.6, .3, .1], [.3, .4, .3], [.2, .4, .4]];
  var pos = [[300, 110], [130, 332], [470, 332]], y0 = 565, h = 120;
  function $(id) { return document.getElementById(id); }
  var tok = $('mt-tok'), cnt = [0, 0, 0], day = 0, cur = 0, speed = 1, running = false, visible = false, timer = null;
  function draw() {
    var tot = Math.max(1, day);
    for (var i = 0; i < 3; i++) {
      var f = cnt[i] / tot, hh = h * Math.min(1, f / 0.7), b = $("mt-b" + i);
      b.setAttribute('y', (y0 - hh).toFixed(1)); b.setAttribute('height', hh.toFixed(1));
      $('mt-v' + i).setAttribute('y', (y0 - hh - 6).toFixed(1));
      $('mt-v' + i).textContent = day ? (100 * f).toFixed(1).replace('.', ',') + ' %' : '';
    }
    $('mt-day').textContent = 'jour ' + day;
  }
  function pick(i) { var r = Math.random(), a = 0; for (var j = 0; j < 3; j++) { a += P[i][j]; if (r < a) return j; } return 2; }
  function highlight(i, j, on) { var e = $('mt-e' + i + j); e.setAttribute('stroke', on ? '#970E53' : '#94a3b8'); e.setAttribute('stroke-width', on ? 2.6 : 1.6); e.setAttribute('marker-end', on ? 'url(#mtah)' : 'url(#mta)'); }
  function step() {
    if (!running || !visible) { timer = null; return; }
    if (speed > 1) {
      for (var k = 0; k < speed; k++) { cur = pick(cur); cnt[cur]++; day++; }
      tok.setAttribute('cx', pos[cur][0]); tok.setAttribute('cy', pos[cur][1]);
      draw(); timer = setTimeout(step, 60); return;
    }
    var nx = pick(cur), path = $('mt-e' + cur + nx), L = path.getTotalLength(), t0 = null, from = cur;
    highlight(from, nx, true);
    function anim(ts) {
      if (t0 === null) t0 = ts;
      var u = Math.min(1, (ts - t0) / 650), q = path.getPointAtLength(L * (u < 0.5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u)));
      tok.setAttribute('cx', q.x.toFixed(1)); tok.setAttribute('cy', q.y.toFixed(1));
      if (u < 1) requestAnimationFrame(anim);
      else {
        highlight(from, nx, false);
        cur = nx; cnt[cur]++; day++;
        tok.setAttribute('cx', pos[cur][0]); tok.setAttribute('cy', pos[cur][1]);
        draw(); timer = setTimeout(step, 250);
      }
    }
    requestAnimationFrame(anim);
  }
  function start() { if (!timer && running && visible) timer = setTimeout(step, 100); }
  $('mt-go').addEventListener('click', function () { running = !running; this.textContent = running ? '❚❚ Pause' : '▶ Reprendre'; start(); });
  $('mt-fast').addEventListener('click', function () { speed = speed === 1 ? 50 : 1; this.textContent = speed === 1 ? 'Accélérer ×50' : 'Ralentir'; });
  $('mt-reset').addEventListener('click', function () { cnt = [0, 0, 0]; day = 0; cur = 0; tok.setAttribute('cx', pos[0][0]); tok.setAttribute('cy', pos[0][1]); draw(); });
  draw();
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) running = true; else $('mt-go').textContent = '▶ Lancer';
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; start(); }, { threshold: 0.3 }).observe(svg);
  } else { visible = true; start(); }
})();
(function () {
  var svg = document.getElementById('pj-svg');
  if (!svg) return;
  var NS = 'http://www.w3.org/2000/svg', BLEU = '#004D80', MAG = '#970E53';
  function $(id) { return document.getElementById(id); }
  function reply(s) { return (s[1] === 'F' ? 'P' : 'F') + s[0] + s[1]; }   // la recette de Conway
  function col(c) { return c === 'F' ? BLEU : MAG; }
  function seqHTML(s) { return s.split('').map(function (c) { return '<tspan fill="' + col(c) + '">' + c + '</tspan>'; }).join(''); }
  var mine = 'FFP', his = reply(mine), w1 = 0, w2 = 0, busy = false;
  function setChoice(s) {
    mine = s; his = reply(s); w1 = 0; w2 = 0;
    document.querySelectorAll('#pj-choix button').forEach(function (b) { b.classList.toggle('actif', b.dataset.s === s); });
    $('pj-vs').innerHTML = 'vous : ' + seqHTML(mine) + '   contre   ordinateur : ' + seqHTML(his);
    $('pj-coins').innerHTML = ''; $('pj-res').textContent = ''; score();
  }
  function score() {
    var n = w1 + w2;
    $('pj-bar').setAttribute('width', n ? (440 * w1 / n).toFixed(1) : 0);
    $('pj-s1').textContent = 'vous : ' + w1 + (n ? ' (' + Math.round(100 * w1 / n) + ' %)' : '');
    $('pj-s2').textContent = 'ordinateur : ' + w2 + (n ? ' (' + Math.round(100 * w2 / n) + ' %)' : '');
  }
  function game() {
    var t = '';
    while (true) {
      t += Math.random() < 0.5 ? 'F' : 'P';
      if (t.slice(-3) === mine) return [t, 1];
      if (t.slice(-3) === his) return [t, 2];
    }
  }
  function drawCoins(t, k, win) {
    var g = $('pj-coins'); g.innerHTML = '';
    var n = Math.min(t.length, 22), start = t.length - n, r = 11, gap = 25, x0 = 300 - (n - 1) * gap / 2;
    for (var i = 0; i < n; i++) {
      if (start + i >= k) break;
      var c = t[start + i], last = win && start + i >= t.length - 3;
      var cc = document.createElementNS(NS, 'circle');
      cc.setAttribute('cx', x0 + i * gap); cc.setAttribute('cy', 66); cc.setAttribute('r', r);
      cc.setAttribute('fill', last ? col(c) : '#fff'); cc.setAttribute('stroke', col(c)); cc.setAttribute('stroke-width', 1.8);
      g.appendChild(cc);
      var tx = document.createElementNS(NS, 'text');
      tx.setAttribute('x', x0 + i * gap); tx.setAttribute('y', 71); tx.setAttribute('text-anchor', 'middle');
      tx.setAttribute('font-size', 13); tx.setAttribute('fill', last ? '#fff' : col(c));
      tx.setAttribute('font-family', "Georgia,'Times New Roman',serif"); tx.textContent = c;
      g.appendChild(tx);
    }
    if (t.length > 22) {
      var dots = document.createElementNS(NS, 'text'); dots.setAttribute('x', x0 - 22); dots.setAttribute('y', 71);
      dots.setAttribute('text-anchor', 'end'); dots.setAttribute('font-size', 13); dots.setAttribute('fill', '#64748b'); dots.textContent = '…';
      g.appendChild(dots);
    }
  }
  function play() {
    if (busy) return; busy = true;
    var r = game(), t = r[0], k = 0;
    $('pj-res').textContent = '';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function tick() {
      k++;
      var done = k >= t.length;
      drawCoins(t, k, done);
      if (!done && !reduce) { setTimeout(tick, 260); return; }
      drawCoins(t, t.length, true);
      if (r[1] === 1) w1++; else w2++;
      $('pj-res').textContent = (r[1] === 1 ? 'Vous gagnez' : "L'ordinateur gagne") + ' après ' + t.length + ' lancers.';
      score(); busy = false;
    }
    tick();
  }
  function many() {
    if (busy) return;
    var last;
    for (var i = 0; i < 100; i++) { last = game(); if (last[1] === 1) w1++; else w2++; }
    drawCoins(last[0], last[0].length, true);
    $('pj-res').textContent = '100 parties de plus jouées.';
    score();
  }
  var box = $('pj-choix');
  ['FFF', 'FFP', 'FPF', 'FPP', 'PFF', 'PFP', 'PPF', 'PPP'].forEach(function (s) {
    var b = document.createElement('button'); b.type = 'button'; b.dataset.s = s;
    b.innerHTML = s.split('').map(function (c) { return '<span style="color:' + col(c) + '">' + c + '</span>'; }).join('');
    b.addEventListener('click', function () { if (!busy) setChoice(s); });
    box.appendChild(b);
  });
  $('pj-go').addEventListener('click', play);
  $('pj-many').addEventListener('click', many);
  setChoice('FFP');
})();
(function () {
  var cv = document.getElementById('is-c');
  if (!cv) return;
  var N = 160, ctx = cv.getContext('2d'), img = ctx.createImageData(N, N), s = new Int8Array(N * N);
  var T = 2.0, Tc = 2 / Math.log(1 + Math.SQRT2), running = true, visible = false, raf = null, mAvg = 0;
  var UP = [0, 77, 128], DN = [243, 230, 236];
  var X0 = 46, Y0 = 18, w = 236, h = 180;
  function $(id) { return document.getElementById(id); }
  function randomize() { for (var i = 0; i < N * N; i++) s[i] = Math.random() < 0.5 ? 1 : -1; mAvg = 0; }
  function align() { for (var i = 0; i < N * N; i++) s[i] = 1; mAvg = 1; }
  var a4, a8;
  function setT(v) { T = v; a4 = Math.exp(-4 / T); a8 = Math.exp(-8 / T); $('is-tv').textContent = T.toFixed(2).replace('.', ','); }
  function sweep() {
    for (var k = 0; k < N * N; k++) {
      var i = (Math.random() * N) | 0, j = (Math.random() * N) | 0, idx = i * N + j;
      var nb = s[((i + 1) % N) * N + j] + s[((i + N - 1) % N) * N + j] + s[i * N + (j + 1) % N] + s[i * N + (j + N - 1) % N];
      var dE = 2 * s[idx] * nb;                       // J = 1, k_B = 1
      if (dE <= 0 || (dE === 4 && Math.random() < a4) || (dE === 8 && Math.random() < a8)) s[idx] = -s[idx];
    }
  }
  function draw() {
    var d = img.data, m = 0;
    for (var i = 0; i < N * N; i++) {
      var c = s[i] > 0 ? UP : DN; m += s[i];
      d[4 * i] = c[0]; d[4 * i + 1] = c[1]; d[4 * i + 2] = c[2]; d[4 * i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    m = Math.abs(m / (N * N)); mAvg = 0.85 * mAvg + 0.15 * m;
    var x = X0 + w * (Math.min(4, Math.max(1, T)) - 1) / 3, y = Y0 + h * (1 - mAvg);
    $('is-dot').setAttribute('cx', x.toFixed(1)); $('is-dot').setAttribute('cy', y.toFixed(1));
    $('is-tl').setAttribute('x1', x.toFixed(1)); $('is-tl').setAttribute('x2', x.toFixed(1));
  }
  function frame() { sweep(); sweep(); draw(); raf = (running && visible) ? requestAnimationFrame(frame) : null; }
  function go() { if (!raf && running && visible) raf = requestAnimationFrame(frame); }
  $('is-t').addEventListener('input', function () { setT(parseFloat(this.value)); go(); });
  $('is-tc').addEventListener('click', function () { $('is-t').value = Tc.toFixed(2); setT(Tc); go(); });
  $('is-rand').addEventListener('click', function () { randomize(); draw(); go(); });
  $('is-up').addEventListener('click', function () { align(); draw(); go(); });
  $('is-pause').addEventListener('click', function () { running = !running; this.textContent = running ? '❚❚ Pause' : '▶ Reprendre'; go(); });
  setT(2.0); randomize();
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { running = false; $('is-pause').textContent = '▶ Lancer'; for (var k = 0; k < 150; k++) sweep(); }
  draw();
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; go(); }, { threshold: 0.2 }).observe(cv);
  } else { visible = true; go(); }
})();
</script>
