+++
title = "Démon de Maxwell et principe de Landauer"
date = 2026-11-11T10:00:00+01:00
weight = 8
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
<style>
.etape-txt
{
    text-align: center;
    min-height: 3.2em;
    margin: 0.5em auto 0.2em;
    max-width: 34rem;
    color: #334155;
}
.fig-commandes button[aria-pressed="true"]
{
    background: #004D80;
    color: #fff;
}
.fig-commandes button:disabled
{
    opacity: 0.5;
    cursor: default;
}
h1
{
voverflow-x:auto;
}
</style>

<h1>Information et thermodynamique&nbsp;: du démon de Maxwell à la gomme de Landauer</h1>

Peut-on tirer du travail d'un système simplement parce qu'on **sait** dans quel état il se trouve&nbsp;? Et, à l'inverse, que coûte le fait d'**oublier**&nbsp;? Ces deux questions ont une réponse commune, d'une simplicité déconcertante&nbsp;:

<div id="def">

À la température $T$, un bit d'information vaut $k\_B T\ln 2$ d'énergie. C'est le travail maximal que l'on peut extraire en connaissant un bit sur un système, et c'est la chaleur minimale qu'il faut dissiper pour effacer un bit.

</div>

À température ambiante, cela fait $3\times10^{-21}$ joule&nbsp;: presque rien. Mais ce presque rien est ce qui empêche le second principe de la thermodynamique de s'effondrer, et c'est la clé du lien entre l'entropie des physiciens et l'information des informaticiens. « L'information est physique », répétait Rolf Landauer&nbsp;: elle est inscrite dans des livres, des mémoires, des molécules, et doit donc obéir aux lois de la physique, à commencer par celles de la thermodynamique.

Cette page suit la trame d'un bel article d'Eric Lutz et Sergio Ciliberto paru dans *Physics Today* en 2015 (voir les sources), en l'étoffant là où un calcul ou une image permettent d'y voir plus clair, et en la prolongeant jusqu'aux trous noirs. Elle complète la page [Entropie et information](../entropie/).

## Deux entropies

### L'entropie de Shannon&nbsp;: ce que l'on ne sait pas encore

Qu'est-ce que l'information&nbsp;? Une réponse intuitive&nbsp;: *ce que vous ne saviez pas déjà*. Si l'on vous annonce que la Terre est ronde, vous n'apprenez rien. Si l'on vous annonce que le prix du pétrole doublera demain (et que c'est vrai), vous apprenez beaucoup. Un message informe d'autant plus qu'il était improbable.

Claude Shannon a quantifié cette idée en 1948. Pour une source qui émet les messages $x$ avec les probabilités $p(x)$, la quantité moyenne d'information par message, ou **entropie de Shannon**, vaut

<p style="text-align:center;">
$\displaystyle H=-\sum_x p(x)\,\log_2 p(x)\quad\text{(en bits).}$
</p>

Le cas le plus simple est celui d'un système à deux états (pile ou face, gauche ou droite, aimanté vers le haut ou vers le bas). Si l'état est connu d'avance, l'examiner n'apprend rien&nbsp;: $H=0$. Si les deux états sont équiprobables, l'incertitude est maximale et la lever apporte exactement **un bit**, l'unité d'information&nbsp;: la réponse à une question par oui ou non dont on ignore tout.

<div class="svg-container">
<svg viewBox="0 0 600 300" role="img" aria-label="Courbe de l'entropie de Shannon d'une variable à deux états en fonction de la probabilité p de l'un des états : nulle en 0 et en 1, maximale et égale à un bit pour p égal un demi." style="width:100%;max-width:600px;height:auto;">
<line x1="90" y1="250" x2="540" y2="250" stroke="#cbd5e1" stroke-width="1" />
<text x="82" y="254" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="90" y1="145.0" x2="540" y2="145.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="82" y="149.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,5</text>
<line x1="90" y1="40" x2="540" y2="40" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="82" y="44" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="90" y="268" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="202.5" y="268" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,25</text>
<text x="315.0" y="268" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,5</text>
<text x="427.5" y="268" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,75</text>
<text x="540" y="268" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<polyline points="90.0,250.0 92.2,240.5 94.5,233.0 96.8,226.4 99.0,220.3 101.2,214.6 103.5,209.2 105.8,204.0 108.0,199.1 110.2,194.4 112.5,189.9 114.8,185.5 117.0,181.2 119.2,177.1 121.5,173.2 123.8,169.3 126.0,165.5 128.2,161.9 130.5,158.3 132.8,154.9 135.0,151.5 137.2,148.2 139.5,145.0 141.8,141.9 144.0,138.8 146.2,135.9 148.5,132.9 150.8,130.1 153.0,127.3 155.2,124.6 157.5,121.9 159.8,119.3 162.0,116.8 164.2,114.3 166.5,111.9 168.8,109.5 171.0,107.2 173.2,104.9 175.5,102.7 177.8,100.5 180.0,98.4 182.2,96.3 184.5,94.3 186.8,92.3 189.0,90.4 191.2,88.5 193.5,86.6 195.8,84.8 198.0,83.0 200.2,81.3 202.5,79.6 204.8,78.0 207.0,76.4 209.2,74.8 211.5,73.3 213.8,71.8 216.0,70.4 218.2,68.9 220.5,67.6 222.8,66.2 225.0,64.9 227.2,63.7 229.5,62.4 231.8,61.2 234.0,60.1 236.2,59.0 238.5,57.9 240.8,56.8 243.0,55.8 245.2,54.8 247.5,53.8 249.8,52.9 252.0,52.0 254.2,51.2 256.5,50.4 258.8,49.6 261.0,48.8 263.2,48.1 265.5,47.4 267.8,46.7 270.0,46.1 272.2,45.5 274.5,44.9 276.8,44.4 279.0,43.9 281.2,43.4 283.5,43.0 285.8,42.6 288.0,42.2 290.2,41.8 292.5,41.5 294.8,41.2 297.0,41.0 299.2,40.7 301.5,40.5 303.8,40.4 306.0,40.2 308.2,40.1 310.5,40.1 312.8,40.0 315.0,40.0 317.2,40.0 319.5,40.1 321.8,40.1 324.0,40.2 326.2,40.4 328.5,40.5 330.8,40.7 333.0,41.0 335.2,41.2 337.5,41.5 339.8,41.8 342.0,42.2 344.2,42.6 346.5,43.0 348.8,43.4 351.0,43.9 353.2,44.4 355.5,44.9 357.8,45.5 360.0,46.1 362.2,46.7 364.5,47.4 366.8,48.1 369.0,48.8 371.2,49.6 373.5,50.4 375.8,51.2 378.0,52.0 380.2,52.9 382.5,53.8 384.8,54.8 387.0,55.8 389.2,56.8 391.5,57.9 393.8,59.0 396.0,60.1 398.2,61.2 400.5,62.4 402.8,63.7 405.0,64.9 407.2,66.2 409.5,67.6 411.8,68.9 414.0,70.4 416.2,71.8 418.5,73.3 420.8,74.8 423.0,76.4 425.2,78.0 427.5,79.6 429.8,81.3 432.0,83.0 434.2,84.8 436.5,86.6 438.8,88.5 441.0,90.4 443.2,92.3 445.5,94.3 447.8,96.3 450.0,98.4 452.2,100.5 454.5,102.7 456.8,104.9 459.0,107.2 461.2,109.5 463.5,111.9 465.8,114.3 468.0,116.8 470.2,119.3 472.5,121.9 474.8,124.6 477.0,127.3 479.2,130.1 481.5,132.9 483.8,135.9 486.0,138.8 488.2,141.9 490.5,145.0 492.8,148.2 495.0,151.5 497.2,154.9 499.5,158.3 501.8,161.9 504.0,165.5 506.2,169.3 508.5,173.2 510.8,177.1 513.0,181.2 515.2,185.5 517.5,189.9 519.8,194.4 522.0,199.1 524.2,204.0 526.5,209.2 528.8,214.6 531.0,220.3 533.2,226.4 535.5,233.0 537.8,240.5 540.0,250.0" fill="none" stroke="#004D80" stroke-width="2.4" stroke-linejoin="round"/>
<circle cx="315.0" cy="40" r="5" fill="#970E53"/>
<text x="315.0" y="28" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >pile ou face équilibré : 1 bit</text>
<circle cx="495.0" cy="151.5" r="4.5" fill="#006C65"/>
<text x="485.0" y="177.51092534625093" text-anchor="end" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >pièce truquée à 90 % :</text>
<text x="485.0" y="193.51092534625093" text-anchor="end" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >0,47 bit</text>
<text x="112" y="240" text-anchor="start" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >issue certaine : 0 bit</text>
<text x="540" y="288" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >probabilité <tspan font-style="italic">p</tspan> de « pile »</text>
<text x="30" y="145.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 30 145.0)">entropie <tspan font-style="italic">H</tspan> (en bits)</text>
</svg>
</div>
<p class="legende">L'entropie d'un système à deux états. Elle mesure l'incertitude avant de regarder, ou, ce qui revient au même, l'information gagnée en regardant. Un système à deux états stocke au plus un bit.</p>

Les physiciens préfèrent le logarithme népérien&nbsp;: $H=-\sum p\ln p$, et le bit vaut alors $\ln 2\approx0{,}69$. Ce n'est qu'un changement d'unité, comme passer des pouces aux centimètres.

### L'entropie de Clausius&nbsp;: ce que l'on ne peut pas récupérer

Un siècle plus tôt, Rudolf Clausius avait introduit une tout autre entropie. Le point de départ est une observation banale&nbsp;: une tasse de thé chaud refroidit dans la pièce, jamais l'inverse. Les phénomènes spontanés ont un sens. Clausius le traduit par une grandeur $S$, l'**entropie thermodynamique**, qui varie de $\frac{Q}{T}$ lorsqu'un corps reçoit réversiblement la chaleur $Q$ à la température $T$, et qui, contrairement à l'énergie, n'est pas conservée&nbsp;:

<div id="theo">

**Second principe.** L'entropie d'un système isolé ne peut qu'augmenter. Elle ne peut diminuer quelque part que si elle augmente au moins autant ailleurs.

</div>

William Thomson (lord Kelvin) en donne en 1851 une formulation équivalente, qui servira de fil rouge à toute la page&nbsp;: **il est impossible de produire du travail de façon cyclique en puisant de la chaleur dans une seule source**. Pas de bateau qui avancerait en refroidissant l'océan.

Pour un système maintenu à la température $T$, le second principe limite le travail récupérable&nbsp;:

<p style="text-align:center;">
$\displaystyle W_{\max}=-\Delta F=-(\Delta E-T\Delta S),$
</p>

où $F=E-TS$ est l'énergie libre. Toute l'énergie n'est pas utilisable&nbsp;: il y a une part perdue, $T\Delta S$.

### La même formule

Entre les deux, Ludwig Boltzmann puis Willard Gibbs avaient donné à l'entropie de Clausius un sens microscopique. Un état macroscopique (un gaz à telle pression et telle température) est compatible avec un nombre gigantesque d'états microscopiques (les positions et vitesses de toutes les molécules). Si $p\_i$ est la probabilité du micro-état $i$,

<p style="text-align:center;">
$\displaystyle S=-k_B\sum_i p_i\ln p_i .$
</p>

C'est, à la constante de Boltzmann près, **la formule de Shannon**&nbsp;:

<p style="text-align:center;">
$\displaystyle S=k_B\,H\quad(H\text{ en unités naturelles}),\qquad\text{soit}\qquad 1\ \text{bit}\;\longleftrightarrow\;k_B\ln 2\approx 10^{-23}\ \mathrm{J\,K^{-1}}.$
</p>

L'entropie thermodynamique d'un système est donc **l'information qui nous manque** pour connaître son micro-état quand on n'en connaît que la description macroscopique. Un litre d'air ambiant cache ainsi environ $10^{24}$ bits. La constante $k\_B$ n'a rien de profond&nbsp;: elle est là parce que l'on mesure les températures en kelvins plutôt qu'en joules.

Simple coïncidence de formules&nbsp;? (La légende veut que von Neumann ait conseillé à Shannon le mot « entropie » au motif que « personne ne sait vraiment ce que c'est ».) Toute la suite montre que non&nbsp;: l'identification a des conséquences mesurables, en joules.

## Le démon de Maxwell

En 1867, James Clerk Maxwell imagine un être minuscule, « aux facultés si aiguisées qu'il peut suivre chaque molécule dans sa course ». Un récipient rempli de gaz est divisé en deux par une paroi percée d'une petite porte, que le démon manœuvre. Au départ, la température est la même partout&nbsp;; mais la température n'est qu'une moyenne, et certaines molécules vont plus vite que d'autres. Le démon ouvre la porte aux molécules rapides qui viennent de la gauche et aux molécules lentes qui viennent de la droite, et la ferme aux autres.

<div class="svg-container">
<canvas id="dm-c" width="1200" height="580" style="width:100%;max-width:600px;height:auto;" aria-label="Deux compartiments remplis de molécules, rapides en magenta et lentes en bleu, séparés par une paroi percée d'une porte que surveille le démon."></canvas>
<div class="fig-commandes"><button type="button" id="dm-mode">Congédier le démon (porte ouverte)</button> <button type="button" id="dm-reset">Remélanger</button> <button type="button" id="dm-pause">❚❚ Pause</button></div>
<div class="fig-commandes"><span>molécules examinées par le démon&nbsp;: <b id="dm-obs">0</b></span></div>
</div>
<p class="legende">Les molécules rapides sont en magenta, les lentes en bleu. Le démon (l'œil) ne laisse passer que les rapides vers la droite et les lentes vers la gauche&nbsp;: un écart de température se creuse tout seul. Congédiez le démon&nbsp;: la porte reste ouverte et les températures s'égalisent.</p>

Peu à peu, le compartiment de droite se réchauffe et celui de gauche se refroidit. Avec cet écart de température, on peut faire tourner un moteur thermique. Si la porte est sans frottement, le démon n'a fourni aucun travail&nbsp;: on a fabriqué du travail à partir d'une seule source de chaleur, et diminué l'entropie d'un système isolé. **Le second principe est violé.**

Maxwell n'y voyait pas un paradoxe mais une leçon&nbsp;: le second principe serait une loi *statistique*, vraie seulement pour des êtres trop grossiers pour voir les molécules. Ses successeurs ont été moins sereins. Si le démon est lui-même un objet physique (un automate, un circuit, une molécule), alors l'ensemble « gaz + démon » est un système isolé ordinaire, auquel le second principe doit s'appliquer. Quelque part, le démon doit payer. Mais où&nbsp;? Il faudra cent quinze ans pour répondre correctement.

Remarquez ce que fait exactement le démon&nbsp;: il **acquiert de l'information** (la vitesse et la position de chaque molécule qui se présente) et **agit en conséquence**. C'est une machine à rétroaction.

## La machine de Szilard&nbsp;: un bit, un travail

En 1929, Leó Szilárd réduit le démon à sa plus simple expression. Le gaz ne contient plus qu'**une seule molécule**, dans une boîte en contact avec un thermostat à la température $T$. Le démon glisse une cloison au milieu, regarde de quel côté est la molécule, puis utilise la cloison comme un piston&nbsp;: la molécule, en la bombardant, la repousse et soulève un poids.

<div class="svg-container">
<svg viewBox="0 0 600 745" role="img" aria-label="Le cycle de Szilard en six schémas disposés en boucle : état initial, insertion de la cloison, mesure, détente qui soulève un poids en puisant de la chaleur dans le thermostat, retrait de la cloison, effacement de la mémoire qui rejette de la chaleur." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="szq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#006C65"/></marker></defs>
<defs><marker id="szm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<defs><marker id="szc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<defs><marker id="sza" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker></defs>
<defs><marker id="szb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<rect x="10" y="10" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="24" y="34" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1. État initial</text>
<rect x="26" y="62" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="22" y="142" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="111.0" y="156" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="237" y="70" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="214" y="78" width="46" height="46" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="2.2"/>
<text x="237" y="110" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<circle cx="78" cy="106" r="6.5" fill="#004D80"/>
<circle cx="146" cy="86" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="118" cy="112" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="54" cy="80" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="176" cy="112" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<text x="145.0" y="186" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >La molécule est quelque part dans la boîte.</text>
<text x="145.0" y="201" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >La mémoire du démon est vierge.</text>
<rect x="320" y="10" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="334" y="34" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">2. On glisse une cloison</text>
<rect x="336" y="62" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="332" y="142" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="421.0" y="156" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="547" y="70" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="524" y="78" width="46" height="46" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="2.2"/>
<text x="547" y="110" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="421.0" y1="62" x2="421.0" y2="138" stroke="#C2770B" stroke-width="5"/>
<path d="M421.0,46 L421.0,59" stroke="#C2770B" stroke-width="1.8" fill="none" marker-end="url(#sza)"/>
<circle cx="378" cy="110" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="464" cy="110" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<text x="378" y="88" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >?</text>
<text x="464" y="88" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >?</text>
<text x="455.0" y="186" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >Gauche ou droite ? On ne le sait pas encore.</text>
<text x="455.0" y="201" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >Insérer la cloison ne coûte aucun travail.</text>
<rect x="320" y="260" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="334" y="284" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">3. Le démon mesure</text>
<rect x="336" y="312" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="332" y="392" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="421.0" y="406" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="547" y="320" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="524" y="328" width="46" height="46" rx="6" fill="#fff" stroke="#C2770B" stroke-width="2.2"/>
<text x="547" y="360" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >G</text>
<line x1="421.0" y1="312" x2="421.0" y2="388" stroke="#C2770B" stroke-width="5"/>
<circle cx="378" cy="360" r="6.5" fill="#004D80"/>
<ellipse cx="378" cy="299" rx="15" ry="8.5" fill="#fff" stroke="#C2770B" stroke-width="1.8"/><circle cx="378" cy="299" r="4" fill="#C2770B"/>
<path d="M398,299 C468,293 504,318 521,344" stroke="#C2770B" stroke-width="1.4" fill="none" stroke-dasharray="4 3" marker-end="url(#sza)"/>
<text x="455.0" y="436" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >Il note le côté dans sa mémoire : 1 bit.</text>
<text x="455.0" y="451" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >Mémoire et molécule sont corrélées.</text>
<rect x="320" y="510" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="334" y="534" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">4. Détente : on récolte du travail</text>
<rect x="336" y="562" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="332" y="642" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="421.0" y="656" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="547" y="570" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="524" y="578" width="46" height="46" rx="6" fill="#fff" stroke="#C2770B" stroke-width="2.2"/>
<text x="547" y="610" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >G</text>
<line x1="421.0" y1="562" x2="421.0" y2="638" stroke="#C2770B" stroke-width="2" stroke-dasharray="4 3" stroke-opacity="0.6"/>
<line x1="464" y1="562" x2="464" y2="638" stroke="#C2770B" stroke-width="5"/>
<path d="M470,584 L498,584" stroke="#C2770B" stroke-width="2" fill="none" marker-end="url(#sza)"/>
<circle cx="406" cy="602" r="6.5" fill="#004D80"/>
<path d="M414,600 L456,592" stroke="#004D80" stroke-width="1.3" fill="none" stroke-dasharray="3 2.5" marker-end="url(#szb)"/>
<path d="M356,652 L356,614" stroke="#006C65" stroke-width="2" fill="none" marker-end="url(#szq)"/>
<text x="366" y="630" text-anchor="start" font-size="12.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">Q</tspan></text>
<path d="M531,652 L535,636 L545,636 L549,652 Z" fill="#334155"/>
<path d="M558,652 L558,634" stroke="#004D80" stroke-width="1.8" fill="none" marker-end="url(#szb)"/>
<text x="336" y="676" text-anchor="start" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >travail récolté : <tspan font-style="italic">W</tspan> = <tspan font-style="italic">Q</tspan> = <tspan font-style="italic">k</tspan><tspan font-style="italic">T</tspan> ln 2</text>
<text x="455.0" y="698" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >La molécule repousse la cloison, qui soulève</text>
<text x="455.0" y="713" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >un poids. La chaleur du thermostat devient travail.</text>
<rect x="10" y="510" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="24" y="534" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">5. On retire la cloison</text>
<rect x="26" y="562" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="22" y="642" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="111.0" y="656" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="237" y="570" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="214" y="578" width="46" height="46" rx="6" fill="#fff" stroke="#C2770B" stroke-width="2.2"/>
<text x="237" y="610" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >G</text>
<circle cx="78" cy="606" r="6.5" fill="#004D80"/>
<circle cx="146" cy="586" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="118" cy="612" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="54" cy="580" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="176" cy="612" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<text x="145.0" y="686" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >La boîte a retrouvé son état initial…</text>
<text x="145.0" y="701" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >mais la mémoire contient toujours « G ».</text>
<rect x="10" y="260" width="270" height="225" rx="10" fill="#fff" stroke="#cbd5e1" stroke-width="1.2"/>
<text x="24" y="284" text-anchor="start" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">6. On efface la mémoire</text>
<rect x="26" y="312" width="170" height="76" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<rect x="22" y="392" width="178" height="20" rx="5" fill="#e0efee" stroke="#006C65" stroke-width="0.8"/>
<text x="111.0" y="406" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >thermostat à <tspan font-style="italic">T</tspan></text>
<text x="237" y="320" text-anchor="middle" font-size="11.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mémoire</text>
<rect x="214" y="328" width="46" height="46" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="2.2"/>
<text x="237" y="360" text-anchor="middle" font-size="24" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<path d="M237,378 L237,408" stroke="#970E53" stroke-width="2" fill="none" marker-end="url(#szm)"/>
<text x="268" y="426" text-anchor="end" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >chaleur rejetée : <tspan font-style="italic">Q</tspan> ≥ <tspan font-style="italic">k</tspan><tspan font-style="italic">T</tspan> ln 2</text>
<text x="237" y="388" text-anchor="middle" font-size="1" fill="#334155" font-family="Georgia,'Times New Roman',serif" ></text>
<circle cx="78" cy="356" r="6.5" fill="#004D80"/>
<circle cx="146" cy="336" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="118" cy="362" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="54" cy="330" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<circle cx="176" cy="362" r="6.5" fill="none" stroke="#004D80" stroke-width="1.4" stroke-dasharray="3 2.5"/>
<text x="145.0" y="448" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >Remise à zéro : la chaleur rejetée annule</text>
<text x="145.0" y="463" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >le gain. Le cycle est bouclé, bilan nul au mieux.</text>
<path d="M284,122.5 L314,122.5" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<path d="M455.0,238 L455.0,255" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<path d="M455.0,488 L455.0,505" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<path d="M316,622.5 L286,622.5" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<path d="M145.0,507 L145.0,490" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<path d="M145.0,257 L145.0,240" stroke="#94a3b8" stroke-width="3" fill="none" marker-end="url(#szc)"/>
<text x="300" y="364.5" text-anchor="middle" font-size="1" fill="#334155" font-family="Georgia,'Times New Roman',serif" ></text>
</svg>
</div>
<p class="legende">Le cycle de Szilard, dans le cas où la molécule est trouvée à gauche (l'autre cas est symétrique). Après l'étape 5, la boîte est revenue exactement à son état initial en ayant fourni du travail… mais pas la mémoire du démon. Le cycle n'est vraiment bouclé qu'une fois la mémoire remise à zéro, à l'étape 6.</p>

### À quoi sert de savoir où est la molécule&nbsp;?

C'est le cœur de l'affaire. Une fois la cloison en place, la molécule la bombarde d'un seul côté et la pousse **en s'éloignant d'elle-même**&nbsp;: vers la droite si elle est à gauche, vers la gauche si elle est à droite. La poussée existe dans les deux cas, avec la même intensité. Ce que l'on ignore, c'est son **sens**.

Or, pour transformer une poussée en travail utile, il faut lui opposer une charge, et une charge se monte dans un sens donné&nbsp;: un poids suspendu à un fil ne peut être soulevé que si l'on tire sur le fil. Le démon doit donc décider de quel côté accrocher le poids **avant** de libérer la cloison. S'il se trompe, la cloison part du mauvais côté, le fil se détend, le poids redescend, et la détente de la molécule est gaspillée.

<div class="svg-container">
<svg viewBox="0 0 600 240" role="img" aria-label="Le même montage, poids accroché à gauche de la cloison, dans les deux situations possibles. Si la molécule est à gauche, elle repousse la cloison vers la droite et le poids monte. Si elle est à droite, la cloison part vers la gauche et le poids redescend." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="sva" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#C2770B"/></marker></defs>
<defs><marker id="svb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<defs><marker id="svm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<text x="150" y="20" text-anchor="middle" font-size="13.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">la molécule était à gauche</text>
<rect x="88" y="42" width="184" height="86" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<line x1="180.0" y1="59" x2="52" y2="59" stroke="#334155" stroke-width="1.3"/>
<circle cx="52" cy="68" r="9" fill="#fff" stroke="#334155" stroke-width="1.6"/><circle cx="52" cy="68" r="1.8" fill="#334155"/>
<line x1="43" y1="68" x2="43" y2="134" stroke="#334155" stroke-width="1.3"/>
<path d="M33,152 L37,134 L49,134 L53,152 Z" fill="#334155"/>
<path d="M66,152 L66,122" stroke="#004D80" stroke-width="2.2" fill="none" marker-end="url(#svb)"/>
<line x1="180.0" y1="42" x2="180.0" y2="128" stroke="#C2770B" stroke-width="5"/>
<circle cx="136" cy="98" r="6.5" fill="#004D80"/>
<path d="M187.0,104 L220.0,104" stroke="#C2770B" stroke-width="2.2" fill="none" marker-end="url(#sva)"/>
<text x="150" y="174" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >la cloison part à droite, le fil se tend :</text>
<text x="150" y="191" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >le poids monte, on gagne du travail</text>
<text x="450" y="20" text-anchor="middle" font-size="13.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-weight="bold">la molécule était à droite</text>
<rect x="388" y="42" width="184" height="86" fill="#f5f8fa" stroke="#334155" stroke-width="1.8"/>
<line x1="480.0" y1="59" x2="352" y2="59" stroke="#334155" stroke-width="1.3"/>
<circle cx="352" cy="68" r="9" fill="#fff" stroke="#334155" stroke-width="1.6"/><circle cx="352" cy="68" r="1.8" fill="#334155"/>
<line x1="343" y1="68" x2="343" y2="134" stroke="#334155" stroke-width="1.3"/>
<path d="M333,152 L337,134 L349,134 L353,152 Z" fill="#334155"/>
<path d="M366,122 L366,152" stroke="#970E53" stroke-width="2.2" fill="none" marker-end="url(#svm)"/>
<line x1="480.0" y1="42" x2="480.0" y2="128" stroke="#C2770B" stroke-width="5"/>
<circle cx="524" cy="98" r="6.5" fill="#004D80"/>
<path d="M473.0,104 L440.0,104" stroke="#C2770B" stroke-width="2.2" fill="none" marker-end="url(#sva)"/>
<text x="450" y="174" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >la cloison part à gauche, le fil se détend :</text>
<text x="450" y="191" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >le poids redescend, rien n'est gagné</text>
<line x1="300" y1="30" x2="300" y2="196" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<text x="300" y="228" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >même montage dans les deux cas : poids accroché à gauche de la cloison</text>
</svg>
</div>
<p class="legende">La boîte est la même dans les deux cas, et la molécule y fournit la même poussée. Seul le résultat de la mesure permet de savoir quel montage choisir&nbsp;: celui-ci si la molécule est à gauche, son image dans un miroir si elle est à droite.</p>

Comparons trois démons.

<ul>
<li><b>Le démon aveugle</b> accroche toujours le poids du même côté (ou tire à pile ou face). Une fois sur deux le poids monte, une fois sur deux il redescend. Aucune astuce ne le sauve&nbsp;: le dépliant ci-dessous montre que la meilleure stratégie possible sans information rapporte, en moyenne, exactement zéro. C'est rassurant, car une machine qui tournerait à l'aveugle en soulevant des poids serait un mouvement perpétuel.</li>
<li><b>Le démon informé</b> regarde, puis accroche le poids du bon côté. Le poids monte à chaque cycle.</li>
<li><b>Le démon mal informé</b>, dont la mesure est parfois fausse, gagne quelque chose entre les deux, en proportion exacte de ce qu'il sait (dépliant).</li>
</ul>

Notez que la mesure n'a rien changé à la boîte&nbsp;: la molécule était déjà d'un côté, et sa poussée déjà là. L'énergie non plus ne vient pas de la mesure, elle vient du thermostat, qui est le même pour les trois démons. **L'information ne fournit pas l'énergie&nbsp;: elle fournit le mode d'emploi pour la récolter.** Elle transforme une agitation dont on sait seulement qu'elle pousse « d'un côté ou de l'autre » (et dont on ne peut donc rien tirer en moyenne) en une poussée de sens connu, que l'on peut atteler à une charge. C'est exactement ce que faisait le démon de Maxwell avec sa porte&nbsp;: l'agitation thermique était là depuis le début, il ne manquait que de savoir quand ouvrir.

Dit autrement&nbsp;: de la chaleur, c'est de l'énergie dont on ignore les détails&nbsp;; du travail, c'est de l'énergie dont on maîtrise la direction. Un bit d'information sur la molécule permet de convertir un peu de la première en la seconde.

### Combien vaut un bit&nbsp;?

Combien de travail récupère-t-on&nbsp;? Un gaz d'une seule molécule obéit encore, en moyenne, à la loi des gaz parfaits&nbsp;: $pV=k\_B T$. Pendant que le volume disponible double, de $\frac V2$ à $V$,

<p style="text-align:center;">
$\displaystyle W=\int_{V/2}^{V}p\,\mathrm{d}V=k_B T\int_{V/2}^{V}\frac{\mathrm{d}V}{V}=k_B T\ln 2 .$
</p>

La molécule ne perd pas d'énergie (sa température reste $T$)&nbsp;: ce travail est intégralement puisé, sous forme de chaleur, dans le thermostat, dont l'entropie diminue de $\frac{Q}{T}=k\_B\ln 2$. Exactement un bit.

Le « 2 » du logarithme est celui des deux compartiments, c'est-à-dire celui du bit. Voilà, historiquement, le premier lien quantitatif entre information et énergie&nbsp;:

<div id="theo">

Connaître un bit sur un système en équilibre à la température $T$ permet d'en extraire au plus le travail $k\_B T\ln 2$.

</div>

Et sans information, zéro&nbsp;: c'est le cas du démon aveugle.

<div id="preuve">
<details>
<summary>et si le démon se trompe parfois&nbsp;? la valeur d'une information imparfaite</summary>

Supposons que la mesure du démon soit erronée avec la probabilité $\varepsilon$. Quand sa mémoire indique « gauche », la molécule est à gauche avec la probabilité $1-\varepsilon$ seulement. S'il laisse la cloison aller jusqu'au bout, il risque la catastrophe&nbsp;: dans les cas d'erreur, il comprime la molécule dans un volume nul, ce qui coûte un travail infini.

La bonne stratégie consiste à arrêter la cloison là où le partage des volumes reflète ce que l'on sait&nbsp;: une fraction $1-\varepsilon$ du volume à gauche, une fraction $\varepsilon$ à droite. Le travail moyen vaut alors

<p style="text-align:center;">
$\displaystyle W=(1-\varepsilon)\,k_B T\ln\frac{1-\varepsilon}{1/2}+\varepsilon\,k_B T\ln\frac{\varepsilon}{1/2}=k_B T\,\big[\ln 2-H(\varepsilon)\big],$
</p>

où $H(\varepsilon)=-\varepsilon\ln\varepsilon-(1-\varepsilon)\ln(1-\varepsilon)$ est l'entropie de l'erreur (la courbe tracée plus haut, à l'unité près). Le crochet est exactement la quantité d'information que la mesure apporte réellement sur la position&nbsp;: un bit, moins l'incertitude qui subsiste.

Avec $10\\,\\%$ d'erreurs, la mesure ne vaut plus que $0{,}53$ bit, et l'on ne récupère que $0{,}53\\;k\_B T\ln 2$. Avec $50\\,\\%$ d'erreurs, la mesure ne vaut rien&nbsp;: c'est le démon aveugle, et le mieux qu'il puisse faire (laisser la cloison au milieu) lui rapporte un travail nul. **Le travail extractible est proportionnel à l'information acquise, pas au nombre de mesures effectuées.** Nous retrouverons cette quantité sous le nom d'information mutuelle.

</details>
</div>

Szilárd comprend que le second principe ne survit que si l'intervention du démon produit, quelque part, au moins $k\_B\ln 2$ d'entropie. Il l'attribue, sans trop préciser, à l'acte de mesure.

## Jaynes&nbsp;: l'entropie est une ignorance

L'égalité $S=k\_B H$ peut sembler étrange. $S$ parle de chaleur échangée avec un réservoir&nbsp;; $H$, de messages dans un canal de communication. En 1957, Edwin Jaynes montre qu'il s'agit bien de la même chose, et que toute la physique statistique peut se reconstruire comme un problème d'inférence&nbsp;: *que puis-je dire d'un système dont je ne connais que quelques grandeurs macroscopiques&nbsp;?*

Le micro-état (positions et vitesses de $10^{24}$ molécules) contient l'information complète, mais il est inaccessible. Le macro-état (pression, volume, température) est mesurable, mais très incomplet. **L'entropie mesure le fossé entre les deux**&nbsp;: la quantité d'information perdue quand on se contente de la description macroscopique.

La formule $W\_{\max}=-(\Delta E-T\Delta S)$ se relit alors ainsi&nbsp;: l'énergie n'est entièrement convertible en travail que si l'on connaît le micro-état. Une molécule dont on connaît la position et la vitesse peut pousser un piston placé au bon endroit au bon moment&nbsp;; un gaz dont on ne connaît que la température ne peut que chauffer ce qui l'entoure. Le terme $T\Delta S$ est le prix de notre ignorance. La machine de Szilard en est l'illustration la plus pure&nbsp;: un bit d'ignorance en moins, $k\_B T\ln 2$ de travail en plus.

<div class="encadre">
<div class="encadre-titre">L'entropie dépend-elle de l'observateur&nbsp;?</div>
<p>Si l'entropie est une ignorance, elle dépend de celui qui ignore. Cette idée choque, et pourtant elle est déjà à l'œuvre dans un vieux problème, le <b>paradoxe de Gibbs</b>.</p>
<p>Retirez la cloison qui sépare deux gaz différents&nbsp;: ils se mélangent, et l'entropie augmente de $k_B\ln 2$ par molécule. Retirez la cloison entre deux volumes du <em>même</em> gaz&nbsp;: rien ne change, l'entropie non plus. Mais que signifie « différents »&nbsp;? Imaginez deux gaz que rien, dans vos instruments, ne permet de distinguer (deux isotopes, avant qu'on sache les séparer). Pour vous, ils sont identiques, il n'y a pas d'entropie de mélange, et vos prédictions sont <em>correctes</em>&nbsp;: aucune de vos expériences ne révélera jamais d'anomalie. Le jour où quelqu'un invente une membrane qui laisse passer l'un et pas l'autre, il peut extraire du travail du mélange, exactement $k_B T\ln 2$ par molécule, et pour lui l'entropie de mélange existe bel et bien.</p>
<p>Jaynes en tirait cette conclusion&nbsp;: l'entropie n'est pas une propriété du micro-état, mais du <b>jeu de variables que l'on mesure et que l'on contrôle</b>. Elle est « subjective » au même titre que le choix de décrire un gaz par sa pression et son volume&nbsp;: une fois ce choix fait, plus rien n'est arbitraire. Le démon de Maxwell n'est rien d'autre qu'un observateur qui dispose de variables supplémentaires.</p>
</div>

Conséquence troublante&nbsp;: dire que l'entropie d'un système isolé augmente, c'est dire que notre information sur son micro-état ne peut que se dégrader spontanément.

## Landauer&nbsp;: oublier a un prix

### Écrire n'est pas effacer

Rolf Landauer, physicien chez IBM, se demande en 1961 quelles opérations d'un ordinateur dégagent *nécessairement* de la chaleur. Sa réponse repose sur une distinction.

<ul>
<li><b>Copier</b> ou <b>mesurer</b>&nbsp;: on fait correspondre aux états « gauche » et « droite » d'un système les états « G » et « D » d'une mémoire. Deux situations de départ, deux situations d'arrivée&nbsp;: l'opération est <b>logiquement réversible</b>, on peut la défaire. Rien n'interdit de la réaliser sans dissiper de chaleur.</li>
<li><b>Effacer</b>&nbsp;: quel que soit l'état de la mémoire, « 0 » ou « 1 », on la remet à « 0 ». Deux situations de départ, une seule à l'arrivée&nbsp;: l'opération est <b>logiquement irréversible</b>. Une fois le bit effacé, impossible de savoir ce qu'il valait.</li>
</ul>

Or la mécanique, classique comme quantique, est réversible au niveau microscopique&nbsp;: deux états distincts de l'univers ne peuvent pas évoluer vers le même état. Si les deux états de la mémoire se confondent, la différence entre eux n'a pas disparu&nbsp;: elle a été repoussée ailleurs, dans les innombrables degrés de liberté de l'environnement, où elle est devenue inaccessible. **L'information effacée n'est pas détruite, elle est transformée en chaleur.**

<div class="svg-container">
<svg viewBox="0 0 600 250" role="img" aria-label="Avant l'effacement, le bit occupe deux régions de son espace des états, 0 et 1 ; après, une seule. Le volume total étant conservé, la région occupée par l'environnement doit doubler : son entropie augmente." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="pha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#334155"/></marker></defs>
<text x="155" y="24" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >avant : bit inconnu</text>
<line x1="50" y1="210" x2="265" y2="210" stroke="#94a3b8" stroke-width="1.2"/><line x1="50" y1="210" x2="50" y2="40" stroke="#94a3b8" stroke-width="1.2"/>
<text x="155" y="232" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >état du bit</text>
<text x="38" y="125" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 38 125)">états de l'environnement</text>
<text x="105" y="226" text-anchor="middle" font-size="1" fill="#334155" font-family="Georgia,'Times New Roman',serif" ></text>
<text x="465" y="24" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >après : bit effacé</text>
<line x1="360" y1="210" x2="575" y2="210" stroke="#94a3b8" stroke-width="1.2"/><line x1="360" y1="210" x2="360" y2="40" stroke="#94a3b8" stroke-width="1.2"/>
<text x="465" y="232" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >état du bit</text>
<text x="348" y="125" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" transform="rotate(-90 348 125)">états de l'environnement</text>
<text x="415" y="226" text-anchor="middle" font-size="1" fill="#334155" font-family="Georgia,'Times New Roman',serif" ></text>
<rect x="65" y="130" width="80" height="70" fill="#004D80" fill-opacity="0.55"/><rect x="160" y="130" width="80" height="70" fill="#970E53" fill-opacity="0.55"/>
<text x="105" y="170" text-anchor="middle" font-size="20" fill="#fff" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="200" y="170" text-anchor="middle" font-size="20" fill="#fff" font-family="Georgia,'Times New Roman',serif" >1</text>
<rect x="375" y="60" width="80" height="70" fill="#970E53" fill-opacity="0.55"/><rect x="375" y="130" width="80" height="70" fill="#004D80" fill-opacity="0.55"/>
<text x="415" y="140" text-anchor="middle" font-size="20" fill="#fff" font-family="Georgia,'Times New Roman',serif" >0</text>
<rect x="470" y="130" width="80" height="70" fill="none" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4 3"/>
<text x="510" y="170" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >vide</text>
<path d="M278,125 L330,125" stroke="#334155" stroke-width="2" fill="none" marker-end="url(#pha)"/>
<text x="304" y="112" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >effacement</text>
</svg>
</div>
<p class="legende">L'effacement vu dans l'espace des états. Les régions colorées représentent l'ensemble des états possibles du bit et de son environnement. Leur surface totale est conservée par les lois de la mécanique (théorème de Liouville). Si le bit n'occupe plus qu'un état au lieu de deux, l'environnement doit en occuper deux fois plus&nbsp;: son entropie augmente de $k_B\ln 2$.</p>

<div id="theo">

**Principe de Landauer** 

L'effacement d'un bit d'information dans un environnement à la température $T$ s'accompagne d'un dégagement de chaleur d'au moins $k\_B T\ln 2$.

</div>

<br>

<div id="preuve">
<details>
<summary>la démonstration rapide à partir du second principe</summary>

Considérons la mémoire (le système) et son environnement (un réservoir à la température $T$). D'après le second principe, l'entropie totale ne peut pas diminuer&nbsp;:

<p style="text-align:center;">$\Delta S_{\text{tot}}=\Delta S_{\text{mém}}+\Delta S_{\text{rés}}\geqslant 0 .$</p>

Le réservoir est si grand qu'il reste à l'équilibre&nbsp;: s'il reçoit la chaleur $Q$, son entropie varie de $\Delta S\_{\text{rés}}=\frac{Q}{T}$. Donc $Q\geqslant -T\\,\Delta S\_{\text{mém}}$.

Avant l'effacement, le bit est inconnu&nbsp;: $H=\ln 2$. Après, il vaut 0 à coup sûr&nbsp;: $H=0$. En admettant $S=k\_B H$, on a $\Delta S\_{\text{mém}}=-k\_B\ln 2$, et donc

<p style="text-align:center;">$Q\geqslant k_B T\ln 2 .$</p>

Deux remarques. D'abord, le principe de Landauer n'est pas une loi nouvelle&nbsp;: c'est le second principe, appliqué à une mémoire, <em>à condition</em> de compter l'incertitude sur le bit comme une entropie à part entière. C'est cette condition qui est le vrai contenu physique. Ensuite, à la limite $Q=k\_B T\ln 2$, l'entropie totale est constante&nbsp;: un effacement idéal est logiquement irréversible mais <b>thermodynamiquement réversible</b>. L'entropie n'est pas créée, elle est déménagée de la mémoire vers l'environnement.

</details>
</div>

### Effacer, c'est faire tourner Szilard à l'envers

Pour s'en convaincre sans formule, reprenons la boîte de Szilard et utilisons-la comme mémoire&nbsp;: molécule à gauche pour « 0 », à droite pour « 1 ». Comment la remettre à « 0 » sans regarder ce qu'elle contient&nbsp;?

<ul>
<li>On retire la cloison&nbsp;: la molécule occupe toute la boîte.</li>
<li>On pousse un piston depuis la droite jusqu'au milieu. La molécule se retrouve à gauche, à coup sûr.</li>
<li>On remet la cloison.</li>
</ul>

La compression isotherme de $V$ à $\frac V2$ coûte le travail $k\_B T\ln 2$, intégralement cédé au thermostat sous forme de chaleur. C'est exactement le cycle de Szilard, parcouru en sens inverse. **Extraire du travail d'un bit connu et effacer un bit inconnu sont les deux sens d'une même transformation.**

Ce petit modèle fait apparaître deux précisions utiles.

<ul>
<li>Le coût concerne l'effacement d'un bit <b>inconnu</b>, par une procédure qui ne dépend pas de sa valeur. Si l'on <em>sait</em> que la mémoire contient « 1 », on peut la ramener à « 0 » sans rien dissiper (il suffit de déplacer la boîte, ou de retourner l'aimant)&nbsp;: c'est une opération réversible, qui échange deux états connus.</li>
<li>Une mémoire <b>vierge est un carburant</b>. Une bande de $N$ bits tous à « 0 », c'est $N$ boîtes de Szilard dont on connaît le contenu&nbsp;: on peut en tirer $N k_B T\ln 2$ de travail, et l'on récupère une bande de bits aléatoires. Charles Bennett a ainsi imaginé un moteur qui « brûle » de la mémoire vide. On parle aujourd'hui de <em>réservoir d'information</em>, au même titre que l'on parle de réservoir de chaleur.</li>
</ul>

### L'expérience de Lyon&nbsp;: effacer un bit sous le microscope

En 2012, l'équipe de Sergio Ciliberto, à l'École normale supérieure de Lyon, réalise l'expérience de pensée de Landauer. Le bit est une bille de silice de deux micromètres, dans l'eau, piégée par un laser dans un **potentiel à deux puits**&nbsp;: bille à gauche pour « 0 », à droite pour « 1 ». La barrière entre les puits est assez haute pour que l'agitation thermique ne fasse pas sauter la bille&nbsp;: la mémoire est stable.

Pour effacer, on suit un protocole proposé par Bennett&nbsp;: on abaisse la barrière, on incline le potentiel vers la droite (en déplaçant doucement le liquide), on relève la barrière, puis on redresse. D'où qu'elle parte, la bille finit à droite. En filmant la trajectoire, on calcule le travail fourni à chaque cycle, qui sur un cycle complet est égal à la chaleur cédée à l'eau.

L'animation ci-dessous refait l'expérience numériquement, sur quatre cents billes à la fois, dont la moitié part de chaque puits. Chaque bille subit la force du potentiel et les chocs aléatoires de l'eau (c'est une équation de Langevin, une chaîne de Markov en temps continu).

<div class="svg-container">
<svg id="ef-svg" viewBox="0 0 600 300" role="img" aria-label="À gauche, le potentiel à deux puits et un ensemble de particules, qui suit le protocole d'effacement : abaisser la barrière, incliner, relever la barrière, redresser. À droite, la chaleur dissipée en fonction de la durée du protocole, comparée à la limite de Landauer." style="width:100%;max-width:600px;height:auto;">
<text id="ef-etape" x="180" y="24" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif"></text>
<line x1="30" y1="250" x2="330" y2="250" stroke="#94a3b8" stroke-width="1"/>
<text x="62" y="270" text-anchor="start" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >gauche = 0</text>
<text x="298" y="270" text-anchor="end" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >droite = 1</text>
<polyline id="ef-pot" points="" fill="none" stroke="#334155" stroke-width="2.2" stroke-linejoin="round"/><g id="ef-dots"></g>
<text x="180" y="290" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >couleur : puits de départ de chaque particule</text>
<line x1="400" y1="250" x2="580" y2="250" stroke="#94a3b8" stroke-width="1"/><line x1="400" y1="250" x2="400" y2="52" stroke="#94a3b8" stroke-width="1"/>
<text x="394" y="254.0" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="394" y="174.83333333333331" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="394" y="95.66666666666666" text-anchor="end" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<line x1="400" y1="170.8" x2="580" y2="170.8" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="400" y1="91.7" x2="580" y2="91.7" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 4"/>
<text x="419.96638746547205" y="266" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >5</text>
<line x1="420.0" y1="250" x2="420.0" y2="254" stroke="#94a3b8"/>
<text x="474.1517866849887" y="266" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >20</text>
<line x1="474.2" y1="250" x2="474.2" y2="254" stroke="#94a3b8"/>
<text x="517.0926996097583" y="266" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >60</text>
<line x1="517.1" y1="250" x2="517.1" y2="254" stroke="#94a3b8"/>
<text x="564.1517866849887" y="266" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >200</text>
<line x1="564.2" y1="250" x2="564.2" y2="254" stroke="#94a3b8"/>
<line x1="400" y1="195.1" x2="580" y2="195.1" stroke="#006C65" stroke-width="2"/>
<text x="490.0" y="219.5629241028355" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >limite de Landauer :</text>
<text x="490.0" y="234.5629241028355" text-anchor="middle" font-size="11.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >ln 2 ≈ 0,69</text>
<rect x="401" y="195.1" width="179" height="54.4" fill="#006C65" fill-opacity="0.08"/>
<text x="495.0" y="284" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >durée du protocole</text>
<text x="396" y="44" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >chaleur dissipée (en <tspan font-style="italic">k</tspan><tspan font-style="italic">T</tspan>)</text>
<g id="ef-pts"></g>
</svg>
<div class="fig-commandes"><span>durée&nbsp;:</span> <button type="button" class="ef-tau" data-tau="5" aria-pressed="false">5 (brutal)</button> <button type="button" class="ef-tau" data-tau="20" aria-pressed="true">20</button> <button type="button" class="ef-tau" data-tau="60" aria-pressed="false">60</button> <button type="button" class="ef-tau" data-tau="200" aria-pressed="false">200 (très lent)</button> <button type="button" id="ef-go">▶ Lancer</button></div>
<div class="fig-commandes"><span>chaleur dissipée par bit&nbsp;: <b id="ef-q">–</b> <i>kT</i></span> <span style="margin-left:1.2em">bits correctement effacés&nbsp;: <b id="ef-ok">–</b>&nbsp;%</span></div>
</div>
<p class="legende">Choisissez la durée du protocole (dans une unité arbitraire&nbsp;: le temps que met une bille à diffuser sur la distance entre les puits). À gauche, le potentiel se déforme et entraîne les billes&nbsp;; à la fin, les deux couleurs sont indiscernablement mêlées dans le puits de droite&nbsp;: l'information sur le puits de départ est perdue. À droite, chaque point reporte la chaleur moyenne dissipée par bit. Un effacement brutal dissipe beaucoup&nbsp;; un effacement lent s'approche de la limite de Landauer sans jamais passer dessous. (Avec quatre cents billes seulement, chaque point fluctue de quelques centièmes.)</p>

C'est exactement ce qu'a trouvé l'équipe lyonnaise&nbsp;: la chaleur dissipée décroît quand on ralentit le protocole, à peu près comme $k\_B T\ln 2+\frac{B}{\tau}$ où $\tau$ est la durée, et tend vers la limite de Landauer sans la franchir. Le terme en $\frac1\tau$ est le prix de la précipitation&nbsp;: c'est du frottement, de l'irréversibilité ordinaire, que l'on peut réduire autant que l'on veut en prenant son temps. Le terme $k\_B T\ln 2$, lui, est incompressible. En 2014, l'équipe de John Bechhoefer a confirmé la limite à quelques pour cent près, et l'on a depuis vérifié le principe sur des bits magnétiques nanométriques et sur des systèmes quantiques (un ion piégé).

## L'exorcisme&nbsp;: où le démon paie-t-il&nbsp;?

Nous avons maintenant toutes les pièces. Longtemps, on a cru, à la suite de Szilárd, de Léon Brillouin et de Dennis Gabor, que le démon payait **au moment de la mesure**&nbsp;: pour voir une molécule, il faut l'éclairer, et dans une enceinte à la température $T$ le photon utilisé doit se détacher du rayonnement ambiant, donc porter une énergie supérieure à $k\_B T$, qui finit dissipée. L'argument est juste pour ce dispositif de mesure, mais il n'a rien de général. Bennett a montré qu'une mesure est une copie, que l'on peut en principe réaliser de façon réversible, sans coût minimal.

En 1982, Bennett déplace le projecteur (Oliver Penrose avait eu la même idée dès 1970). Le démon doit **noter** ce qu'il observe. Après un cycle, le gaz est revenu à son état initial, mais pas la mémoire du démon, qui contient le résultat de la mesure. Pour que la machine fonctionne vraiment en cycle, cette mémoire doit être remise à zéro. Et là, le principe de Landauer s'applique&nbsp;: effacer le bit dissipe au moins $k\_B T\ln 2$, précisément ce que la machine de Szilard venait de gagner. **Le démon ne viole pas le second principe&nbsp;: au mieux, il fait match nul.**

Suivons les comptes de la machine de Szilard, étape par étape. Tout est exprimé en bits ($k\_B\ln 2$ d'entropie par bit).

<div class="tableau-large">

| étape | incertitude sur la molécule | incertitude sur la mémoire | ce que la mémoire sait de la molécule | entropie du thermostat (variation) | **total** |
|:--|:-:|:-:|:-:|:-:|:-:|
| départ | 1 | 0 | 0 | 0 | **1** |
| après la mesure | 1 | 1 | 1 | 0 | **1** |
| après la détente | 1 | 1 | 0 | −1 | **1** |
| après l'effacement | 1 | 0 | 0 | 0 | **1** |

</div>

Le total s'obtient en ajoutant les deux incertitudes et l'entropie du thermostat, puis en retranchant ce que la mémoire sait de la molécule (pour ne pas compter deux fois la même incertitude).

Lisez la deuxième ligne&nbsp;: après la mesure, la mémoire est aussi incertaine que la molécule (pour un observateur extérieur, elle indique « G » ou « D » à pile ou face), mais les deux sont parfaitement **corrélées**. L'incertitude totale n'a pas changé&nbsp;: connaître l'une, c'est connaître l'autre. Tout le tour de passe-passe du démon est là. La détente **consomme cette corrélation**&nbsp;: à la fin, la molécule est de nouveau n'importe où, sans rapport avec la mémoire, et la corrélation perdue a servi à pomper un bit d'entropie hors du thermostat. Il reste un bit aléatoire dans la mémoire, que l'effacement renvoie au thermostat.

À aucun moment l'entropie totale n'a diminué. Le démon n'a fait que **déplacer** un bit d'entropie du thermostat vers sa mémoire, puis de sa mémoire vers le thermostat.

<div class="encadre">
<div class="encadre-titre">Mesurer ou effacer&nbsp;: le vrai partage des coûts</div>
<p>L'histoire que l'on raconte d'ordinaire (« Brillouin avait tort, c'est l'effacement qui coûte, pas la mesure ») est un peu trop tranchée. En 2009, Takahiro Sagawa et Masahito Ueda ont montré que le coût peut se répartir différemment entre la mesure et l'effacement selon la façon dont la mémoire est construite. Seule leur <b>somme</b> est contrainte&nbsp;:</p>
<p style="text-align:center;">$W_{\text{mesure}}+W_{\text{effacement}}\;\geqslant\;k_B T\,I,$</p>
<p>où $I$ est l'information acquise. Avec une mémoire symétrique (deux états de même énergie), la mesure peut être gratuite et l'effacement coûte $k_B T\ln 2$&nbsp;: c'est le scénario de Bennett. Avec une mémoire dissymétrique, on peut alléger l'effacement et alourdir la mesure. Ce qui est impossible, c'est d'échapper aux deux. Et le démon peut aussi refuser d'effacer&nbsp;: il lui faut alors une mémoire toujours plus grande, qui se remplit de bits aléatoires. Il n'a pas fait disparaître l'entropie du gaz, il l'a stockée.</p>
</div>

## Les démons au laboratoire

Pendant près d'un siècle et demi, tout cela est resté expérience de pensée. Erwin Schrödinger écrivait encore en 1952 que l'on n'expérimente jamais sur un seul atome ou une seule molécule, « pas plus qu'on n'élève des ichtyosaures au zoo ». Depuis les années 2000, les ichtyosaures sont au zoo.

**Un démon de lumière.** En 2008, l'équipe de Mark Raizen (Austin) piège des atomes dans un puits magnétique et y introduit une barrière optique à sens unique, formée de deux faisceaux laser accolés. Le premier change l'état interne de l'atome&nbsp;; le second repousse les atomes qui sont dans l'état initial, et laisse passer les autres. Un atome qui arrive du bon côté rencontre d'abord le premier faisceau, change d'état, traverse le second sans encombre, puis retombe dans son état initial en émettant un photon&nbsp;: le voilà de l'autre côté, et il ne peut plus revenir. En balayant lentement cette « diode à atomes » à travers le piège, on rassemble les atomes dans un coin en les refroidissant. Où est passée l'entropie&nbsp;? Dans le photon émis à chaque passage, parti dans une direction aléatoire&nbsp;: la lumière, d'abord parfaitement ordonnée, emporte l'information sur l'atome qui a traversé. L'équipe a vérifié que l'entropie gagnée par la lumière dépasse toujours celle perdue par les atomes. En 2007, l'équipe de David Leigh (Édimbourg) avait réalisé un démon chimique, une molécule en forme d'anneau enfilé sur un axe et munie d'une « porte » commandée par la lumière.

**Une machine de Szilard sur un escalier.** En 2010, l'équipe de Masaki Sano (Tokyo) place une bille de quelques centaines de nanomètres, agitée par le mouvement brownien, dans un potentiel en forme d'escalier incliné. Laissée à elle-même, la bille descend en moyenne, mais l'agitation thermique lui fait parfois gravir une marche. Une caméra la surveille&nbsp;: chaque fois qu'elle vient de monter, on bascule le potentiel pour lui barrer la route du retour. La bille grimpe l'escalier, et gagne de l'énergie potentielle, sans que personne ne l'ait poussée&nbsp;: seule l'information sur sa position a été utilisée. C'est la première conversion mesurée d'information en énergie.

<div class="svg-container">
<svg id="es-svg" viewBox="0 0 600 300" role="img" aria-label="Une bille brownienne sur un escalier d'énergie incliné. Sans intervention, elle descend en moyenne. Lorsque le démon pose une cloison derrière elle après chaque saut vers le haut, elle grimpe." style="width:100%;max-width:600px;height:auto;">
<defs><clipPath id="es-clip"><rect x="0" y="0" width="600" height="300"/></clipPath></defs>
<g clip-path="url(#es-clip)"><polygon id="es-fill" points="" fill="#004D80" fill-opacity="0.07"/><polyline id="es-pot" points="" fill="none" stroke="#004D80" stroke-width="2.4" stroke-linejoin="round"/>
<line id="es-wall" x1="0" y1="0" x2="0" y2="0" stroke="#C2770B" stroke-width="5" opacity="0"/>
<circle id="es-b" cx="300" cy="150" r="8" fill="#970E53" stroke="#fff" stroke-width="1.5"/></g>
<g id="es-eye" opacity="0.15"><ellipse cx="560" cy="28" rx="20" ry="11" fill="#fff" stroke="#C2770B" stroke-width="2"/><circle cx="560" cy="28" r="5.5" fill="#C2770B"/></g>
<rect x="8" y="8" width="250" height="46" rx="6" fill="#fff" fill-opacity="0.9" stroke="#cbd5e1"/>
<text x="18" y="27" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >marches gravies : <tspan id="es-n" font-weight="bold">0</tspan></text>
<text x="18" y="46" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >énergie gagnée : <tspan id="es-e" font-weight="bold">0</tspan> <tspan font-style="italic">k</tspan><tspan font-style="italic">T</tspan></text>
<text x="592" y="292" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >vers le haut →</text>
</svg>
<div class="fig-commandes"><button type="button" id="es-mode">Faire intervenir le démon</button> <button type="button" id="es-pause">❚❚ Pause</button></div>
</div>
<p class="legende">Une bille brownienne sur un escalier d'énergie (chaque marche représente $0{,}8\ kT$, et chaque bosse à franchir $3\ kT$ environ). Sans démon, elle dévale la pente par à-coups. Faites intervenir le démon&nbsp;: dès qu'il voit la bille franchir une crête, il pose une cloison derrière elle (trait orange). La cloison ne pousse pas la bille et ne lui fournit aucun travail&nbsp;; elle ne fait que sélectionner les fluctuations favorables.</p>

**Un électron pour molécule.** En 2014, l'équipe de Jukka Pekola (Helsinki) construit une machine de Szilard électronique&nbsp;: la « molécule » est un unique électron, qui peut se trouver sur l'un ou l'autre de deux îlots métalliques minuscules, et le travail extrait par cycle approche $k\_B T\ln 2$.

Ajoutées à l'expérience de Lyon, ces réalisations donnent à la physique de l'information ce qui lui manquait&nbsp;: une base expérimentale.

## Le second principe, version augmentée

Ces expériences ont accompagné un renouveau théorique. En 2008, Sagawa et Ueda intègrent l'information au second principe lui-même. Pour un système à la température $T$ sur lequel on effectue des mesures, le travail maximal extractible devient

<div id="theo">

<p style="text-align:center;">$\displaystyle W_{\max}=-\Delta F+k_B T\,I,$</p>

où $I$ est l'**information mutuelle** entre le système et le résultat des mesures (en unités naturelles).

</div>

L'information mutuelle est la bonne mesure de « ce que la mémoire sait du système ». Si $X$ désigne l'état du système et $M$ le contenu de la mémoire,

<p style="text-align:center;">$\displaystyle I=H(X)-H(X\mid M),$</p>

c'est-à-dire l'incertitude sur le système avant la mesure, moins celle qui subsiste une fois la mémoire lue. Elle est nulle si la mémoire n'a aucun rapport avec le système, et vaut $H(X)$ si la mesure est parfaite. Pour la machine de Szilard avec un taux d'erreur $\varepsilon$, on retrouve $I=\ln 2-H(\varepsilon)$, la formule du dépliant plus haut.

<div class="svg-container">
<svg viewBox="0 0 600 270" role="img" aria-label="Deux disques qui se recouvrent : l'un représente l'incertitude sur le système, l'autre l'incertitude sur la mémoire ; leur intersection est l'information mutuelle, ce que la mémoire sait du système." style="width:100%;max-width:600px;height:auto;">
<circle cx="240" cy="135" r="95" fill="#004D80" fill-opacity="0.22" stroke="#004D80" stroke-width="2"/>
<circle cx="360" cy="135" r="95" fill="#C2770B" fill-opacity="0.22" stroke="#C2770B" stroke-width="2"/>
<text x="196" y="127" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">H</tspan>(<tspan font-style="italic">X</tspan> | <tspan font-style="italic">M</tspan>)</text>
<text x="196" y="146" text-anchor="middle" font-size="11.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >ce qui reste</text>
<text x="196" y="160" text-anchor="middle" font-size="11.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >inconnu</text>
<text x="404" y="127" text-anchor="middle" font-size="14" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">H</tspan>(<tspan font-style="italic">M</tspan> | <tspan font-style="italic">X</tspan>)</text>
<text x="404" y="146" text-anchor="middle" font-size="11.5" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >bruit de</text>
<text x="404" y="160" text-anchor="middle" font-size="11.5" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >la mesure</text>
<path d="M300,61.35 A95,95 0 0,1 300,208.65 A95,95 0 0,1 300,61.35 Z" fill="#fdf6f9"/>
<circle cx="240" cy="135" r="95" fill="none" stroke="#004D80" stroke-width="2"/><circle cx="360" cy="135" r="95" fill="none" stroke="#C2770B" stroke-width="2"/>
<text x="300" y="128" text-anchor="middle" font-size="22" fill="#970E53" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">I</tspan></text>
<text x="300" y="147" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >information</text>
<text x="300" y="160" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >mutuelle</text>
<text x="20" y="22" text-anchor="start" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >incertitude sur le système : <tspan font-style="italic">H</tspan>(<tspan font-style="italic">X</tspan>)</text>
<text x="580" y="262" text-anchor="end" font-size="13" fill="#C2770B" font-family="Georgia,'Times New Roman',serif" >incertitude sur la mémoire : <tspan font-style="italic">H</tspan>(<tspan font-style="italic">M</tspan>)</text>
</svg>
</div>
<p class="legende">L'information mutuelle est la partie commune aux deux incertitudes&nbsp;: ce que l'on apprend sur le système en lisant la mémoire (et réciproquement). C'est elle, et elle seule, qui se convertit en travail.</p>

La formule met l'information, l'entropie et l'énergie sur le même plan. Appliquée à un moteur qui fonctionne entre une source chaude à $T\_2$ et une source froide à $T\_1$, elle donne

<p style="text-align:center;">$\displaystyle W_{\max}=\left(1-\frac{T_1}{T_2}\right)Q_2+k_B T_1\,I .$</p>

Sans mesure ($I=0$), on reconnaît le rendement de Carnot. Avec mesure et rétroaction, le moteur fait mieux, et peut même fonctionner avec **une seule source** ($T\_1=T\_2$), ce qu'interdit la formulation de Kelvin. Il n'y a pas de contradiction&nbsp;: dans un moteur ordinaire, la source froide sert à évacuer l'entropie&nbsp;; ici, ce rôle est tenu par la mémoire, qui absorbe l'entropie sous forme de bits. La mémoire est un réservoir d'un nouveau genre, qui n'échange ni chaleur ni travail, mais de l'information. Et si l'on inclut dans le bilan le coût de sa remise à zéro, l'énoncé de Kelvin est rétabli.

<div id="preuve">
<details>
<summary>un second principe valable seulement en moyenne</summary>

À l'échelle d'une bille brownienne, le travail fourni lors d'une transformation fluctue d'un essai à l'autre. Le second principe, $W\geqslant\Delta F$, ne porte que sur la <b>moyenne</b>&nbsp;; certaines réalisations individuelles le « violent » (dans l'expérience de Lyon, certains effacements dissipent moins que $k\_B T\ln 2$, et quelques-uns absorbent même de la chaleur). Ces fluctuations ne sont pas quelconques. Christopher Jarzynski a montré en 1997 que

<p style="text-align:center;">$\displaystyle \left\langle \mathrm{e}^{-(W-\Delta F)/k_B T}\right\rangle=1,$</p>

égalité exacte, même très loin de l'équilibre, dont l'inégalité $\langle W\rangle\geqslant\Delta F$ est une conséquence. En présence de mesures et de rétroaction, Sagawa et Ueda ont obtenu la généralisation

<p style="text-align:center;">$\displaystyle \left\langle \mathrm{e}^{-(W-\Delta F)/k_B T-I}\right\rangle=1,$</p>

où $I$ est cette fois l'information acquise lors de chaque réalisation. Elle entraîne $\langle W\rangle\geqslant\Delta F-k\_B T\langle I\rangle$&nbsp;: on peut fournir moins de travail que $\Delta F$ (ou en extraire davantage), dans la limite exacte de l'information dont on dispose. Maxwell avait raison sur un point&nbsp;: le second principe est bien une loi statistique. Mais c'est une statistique qui inclut le démon.

</details>
</div>

## Ce que cela change

### Pour les ordinateurs

Le principe de Landauer ne concerne pas que la touche « effacer ». Il s'applique à toute opération logiquement irréversible, c'est-à-dire qui a moins de sorties distinctes que d'entrées. Une porte ET reçoit deux bits et n'en rend qu'un&nbsp;: quand elle répond 0, impossible de savoir si l'entrée était 00, 01 ou 10. De l'information est perdue à chaque opération, donc de la chaleur est produite.

À température ambiante, $k\_B T\ln 2\approx3\times10^{-21}\ \mathrm{J}$, soit $0{,}018$ électronvolt. Effacer un gigaoctet à la limite de Landauer dissiperait $2\times10^{-11}$ joule, de quoi soulever un grain de sable d'une quinzaine de micromètres. Les transistors actuels dissipent encore plusieurs milliers de fois plus par opération, mais l'écart se réduit depuis des décennies, et l'évacuation de la chaleur est devenue le principal obstacle à la miniaturisation. Les extrapolations que citent Lutz et Ciliberto plaçaient la rencontre avec la limite vers 2035&nbsp;: une frontière fixée non par la technologie, mais par le second principe.

Peut-on la contourner&nbsp;? Oui, en n'effaçant rien. Bennett a montré dès 1973 que tout calcul peut être mené avec des opérations **logiquement réversibles** (des portes qui ont autant de sorties que d'entrées, comme la porte de Toffoli), en conservant les résultats intermédiaires puis en « décalculant » pour les défaire proprement. Un tel ordinateur pourrait, en principe, calculer avec une dissipation aussi faible que l'on veut, à condition de calculer lentement. Ce n'est pas qu'une curiosité&nbsp;: les ordinateurs quantiques sont, par construction, des machines réversibles.

### Pour le vivant

Les cellules sont des machines à traiter de l'information&nbsp;: elles copient leur ADN, lisent des concentrations chimiques dans leur milieu, communiquent. Et elles le font remarquablement près des limites fondamentales. Bennett notait que l'enzyme qui transcrit l'ADN en ARN ne dissipe qu'une vingtaine de $k\_B T$ par nucléotide copié, bien mieux que n'importe quel circuit électronique.

Le principe de Landauer devient alors un outil. Pankaj Mehta et David Schwab ont calculé en 2012 le coût énergétique minimal qu'une cellule doit payer pour « mesurer » la concentration d'une molécule dans son environnement&nbsp;: apprendre a un prix, et il existe un compromis entre la précision de la mesure et l'énergie dépensée. De même, le moteur qui fait tourner le flagelle de la bactérie *Escherichia coli*, et qui change de sens selon la concentration d'une protéine régulatrice, a été modélisé comme un démon de Maxwell&nbsp;: sa sensibilité extrême se paie en énergie consommée.

## Jusqu'aux trous noirs

Il y a un endroit de l'Univers où la question « où va l'information&nbsp;? » se pose avec une acuité particulière.

### La tasse de thé de Wheeler

Vers 1970, John Wheeler soumet une énigme à son étudiant Jacob Bekenstein. Je prends une tasse de thé chaud (de l'entropie) et je la jette dans un trou noir. Or un trou noir, vu de l'extérieur, est l'objet le plus simple qui soit&nbsp;: il est entièrement décrit par sa masse, sa charge et son moment cinétique. La tasse a disparu, son entropie aussi. L'entropie de l'Univers accessible a diminué&nbsp;: **le trou noir est le démon de Maxwell ultime**, une poubelle à entropie.

C'est le paradoxe du démon, à l'envers. Et la solution a la même forme&nbsp;: il faut que le trou noir lui-même porte une entropie, qui augmente quand on y jette quelque chose. Bekenstein remarque qu'une grandeur se comporte exactement ainsi. Stephen Hawking venait de démontrer que **l'aire de l'horizon** d'un trou noir ne peut jamais diminuer, ce qui ressemble furieusement à un second principe. Bekenstein propose donc, en 1972, que l'entropie d'un trou noir soit proportionnelle à l'aire de son horizon, et énonce un **second principe généralisé**&nbsp;: la somme de l'entropie ordinaire, hors des trous noirs, et de l'entropie des trous noirs ne diminue jamais.

<div id="preuve">
<details>
<summary>pourquoi l'aire&nbsp;? un calcul d'ordre de grandeur à la Bekenstein</summary>

Cherchons la plus petite quantité d'information que l'on puisse jeter dans un trou noir, et voyons de combien l'horizon grandit.

Le messager le plus économe est un photon. Pour qu'il ne porte qu'un bit environ (« je suis tombé dedans »), il faut qu'on ne puisse même pas dire <em>où</em> il est entré&nbsp;: sa longueur d'onde doit être de l'ordre de la taille du trou noir, $\lambda\sim R$. Son énergie est alors $E\sim\frac{hc}{R}$, et la masse du trou noir augmente de $\delta M=\frac{E}{c^2}\sim\frac{h}{Rc}$.

Le rayon de l'horizon est le rayon de Schwarzschild, $R=\frac{2GM}{c^2}$, et son aire $A=4\pi R^2=\frac{16\pi G^2M^2}{c^4}$. Donc

<p style="text-align:center;">$\displaystyle \delta A=\frac{32\pi G^2 M}{c^4}\,\delta M\sim\frac{32\pi G^2 M}{c^4}\cdot\frac{h}{Rc}=\frac{16\pi\,G h}{c^3}.$</p>

La masse $M$ a disparu du résultat&nbsp;! **Chaque bit ajouté augmente l'aire de la même quantité, quelle que soit la taille du trou noir**, et cette quantité est, à un facteur numérique près, le carré de la longueur de Planck $\ell\_P=\sqrt{G\hbar/c^3}\approx1{,}6\times10^{-35}\ \mathrm m$. Le nombre de bits engloutis est donc proportionnel à l'aire, comptée en aires de Planck.

</details>
</div>

Hawking trouve d'abord l'idée absurde&nbsp;: qui dit entropie dit température, et un corps qui a une température rayonne. Or rien ne sort d'un trou noir. En 1974, en voulant réfuter Bekenstein, il découvre que si&nbsp;: à cause des effets quantiques au voisinage de l'horizon, un trou noir émet un rayonnement thermique, à la température

<p style="text-align:center;">$\displaystyle T_H=\frac{\hbar c^3}{8\pi G M k_B},$</p>

ce qui fixe le coefficient de proportionnalité de Bekenstein&nbsp;:

<div id="theo">

<p style="text-align:center;">$\displaystyle S_{\text{trou noir}}=k_B\,\frac{A}{4\,\ell_P^{\,2}}\qquad\text{avec}\qquad \ell_P^{\,2}=\frac{G\hbar}{c^3}.$</p>

</div>

Un quart de l'aire de l'horizon, mesurée en aires de Planck&nbsp;: dans cette seule formule figurent la gravitation ($G$), la relativité ($c$), la mécanique quantique ($\hbar$) et la thermodynamique ($k\_B$).

### Le trou noir comme gomme de Landauer

On peut relire ces formules avec les lunettes de cette page. Quand un trou noir absorbe l'énergie $\delta E$, son entropie augmente de $\delta S=\frac{\delta E}{T\_H}$ (c'est la relation de Clausius, qui se vérifie directement sur les deux formules précédentes). Pour y faire disparaître un bit, c'est-à-dire augmenter son entropie de $k\_B\ln 2$, il faut donc lui fournir

<p style="text-align:center;">$\displaystyle \delta E=k_B T_H\ln 2 .$</p>

**Un trou noir efface l'information exactement à la limite de Landauer**, à sa propre température. On vérifie d'ailleurs que l'énergie du photon du dépliant précédent, de longueur d'onde comparable à l'horizon, varie comme $k\_B T\_H$&nbsp;: toutes deux sont proportionnelles à $\frac{\hbar c}{R}$. Et comme cette température est minuscule pour un trou noir stellaire (soixante milliardièmes de kelvin pour une masse solaire), l'effacement y est extraordinairement bon marché&nbsp;: c'est la raison pour laquelle les trous noirs peuvent contenir tant d'entropie.

Car ils en contiennent une quantité prodigieuse. Un trou noir d'une masse solaire, de trois kilomètres de rayon, a une entropie de $10^{77}\ k\_B$, dix milliards de milliards de fois celle du Soleil. Aucun objet de même taille ne peut faire mieux&nbsp;: le trou noir est l'état d'entropie maximale, ce vers quoi tout s'effondre si l'on tasse trop d'information dans une région.

<div class="svg-container">
<svg viewBox="0 0 600 310" role="img" aria-label="Comparaison, en échelle logarithmique, des entropies du Soleil, d'un trou noir d'une masse solaire, du rayonnement fossile, du trou noir central de la Galaxie, de l'ensemble des trous noirs et de l'horizon cosmologique." style="width:100%;max-width:600px;height:auto;">
<text x="40" y="30" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >le Soleil</text>
<rect x="40" y="35" width="55.5" height="12" rx="2" fill="#64748b" fill-opacity="0.45"/>
<text x="101.46666666666667" y="46" text-anchor="start" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">58</tspan></text>
<text x="40" y="70" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >trou noir d'une masse solaire</text>
<rect x="40" y="75" width="187.2" height="12" rx="2" fill="#004D80" fill-opacity="0.75"/>
<text x="233.2" y="86" text-anchor="start" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">77</tspan></text>
<text x="40" y="110" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >rayonnement fossile de tout l'Univers observable</text>
<rect x="40" y="115" width="277.3" height="12" rx="2" fill="#64748b" fill-opacity="0.45"/>
<text x="323.3333333333333" y="126" text-anchor="start" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">90</tspan></text>
<text x="40" y="150" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Sagittarius A* (4 millions de masses solaires)</text>
<rect x="40" y="155" width="279.4" height="12" rx="2" fill="#004D80" fill-opacity="0.75"/>
<text x="325.41333333333336" y="166" text-anchor="start" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">90</tspan></text>
<text x="40" y="190" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >tous les trous noirs de l'Univers observable</text>
<rect x="40" y="195" width="374.4" height="12" rx="2" fill="#004D80" fill-opacity="0.75"/>
<text x="420.4" y="206" text-anchor="start" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">104</tspan></text>
<text x="40" y="230" text-anchor="start" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >horizon cosmologique</text>
<rect x="40" y="235" width="499.2" height="12" rx="2" fill="#970E53" fill-opacity="0.75"/>
<text x="545.2" y="246" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">122</tspan></text>
<line x1="40" y1="266" x2="560" y2="266" stroke="#94a3b8" stroke-width="1"/>
<line x1="40.0" y1="266" x2="40.0" y2="270" stroke="#94a3b8"/>
<text x="40.0" y="284" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">50</tspan></text>
<line x1="213.3" y1="266" x2="213.3" y2="270" stroke="#94a3b8"/>
<text x="213.33333333333334" y="284" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">75</tspan></text>
<line x1="386.7" y1="266" x2="386.7" y2="270" stroke="#94a3b8"/>
<text x="386.6666666666667" y="284" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">100</tspan></text>
<line x1="560.0" y1="266" x2="560.0" y2="270" stroke="#94a3b8"/>
<text x="560.0" y="284" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >10<tspan dy="-5" font-size="9">125</tspan></text>
<text x="560" y="304" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >entropie (en unités de <tspan font-style="italic">k</tspan>), échelle logarithmique</text>
</svg>
</div>
<p class="legende">Quelques entropies, en unités de $k_B$ (ordres de grandeur). Le seul trou noir central de notre Galaxie contient autant d'entropie que tout le rayonnement fossile de l'Univers observable. L'entropie de l'Univers est, de très loin, dominée par ses trous noirs.</p>

Autre surprise&nbsp;: l'entropie d'un trou noir croît comme sa **surface**, alors que celle de tout système ordinaire croît comme son volume. La quantité maximale d'information que peut contenir une région de l'espace serait donc fixée par l'aire de sa frontière, à raison d'un bit pour quelques aires de Planck. C'est le **principe holographique**, évoqué sur la page [Entropie et information](../entropie/).

### L'information peut-elle vraiment disparaître&nbsp;?

Reste une question, la plus difficile. Tout au long de cette page, l'information « effacée » n'était jamais détruite&nbsp;: elle partait dans l'environnement, et un démon assez habile aurait pu, en principe, la reconstituer. Les lois microscopiques sont réversibles. Avec un trou noir, c'est moins clair. Puisqu'il rayonne, il perd de la masse et finit par s'évaporer entièrement (en $10^{67}$ ans pour une masse solaire). Selon le calcul de Hawking, le rayonnement émis est parfaitement thermique&nbsp;: il ne dépend que de la masse du trou noir, pas de ce qui y est tombé. Une encyclopédie et un tas de sable de même masse donneraient exactement les mêmes cendres. L'information serait alors détruite pour de bon, en contradiction avec la mécanique quantique. C'est le **paradoxe de l'information**, formulé par Hawking en 1976.

La plupart des physiciens pensent aujourd'hui que l'information ressort, subtilement encodée dans les corrélations du rayonnement, comme elle l'est dans la fumée d'un livre qui brûle. Don Page a montré en 1993 à quoi devrait alors ressembler l'entropie du rayonnement au cours du temps (elle croît, puis décroît jusqu'à zéro), et des calculs menés depuis 2019 retrouvent cette courbe à partir de la gravité elle-même. Comment l'information franchit l'horizon reste en revanche mal compris&nbsp;; la question touche à la nature de l'espace-temps, et rejoint les idées présentées sur la page [ER = EPR](../../quantique/erepr/). Elle mériterait une page à elle seule.

## En bref

<ul>
<li><b>L'entropie thermodynamique est une information manquante</b>&nbsp;: celle qui sépare la description macroscopique d'un système de son micro-état. Le facteur de conversion est $k_B\ln 2$ par bit.</li>
<li><b>L'information est une ressource thermodynamique</b>&nbsp;: connaître un bit sur un système à la température $T$ permet d'en tirer $k_B T\ln 2$ de travail, et pas davantage.</li>
<li><b>L'information est toujours inscrite quelque part</b>, dans une mémoire qui est un système physique et dont l'entropie compte. Le second principe s'applique à l'ensemble formé par le système, la mémoire et l'environnement.</li>
<li><b>Oublier a un prix</b>&nbsp;: effacer un bit inconnu rejette au moins $k_B T\ln 2$ de chaleur. C'est ce qui interdit au démon de Maxwell de gagner.</li>
<li><b>L'information ne disparaît pas, elle se disperse</b>&nbsp;: dans la chaleur d'un microprocesseur, dans les photons d'un piège à atomes, et peut-être dans le rayonnement d'un trou noir.</li>
</ul>

<br>


> Lutz, E. et Ciliberto, S. « Information: From Maxwell's demon to Landauer's eraser », *Physics Today* 68 (9), 30 (2015). [🌐](https://physicstoday.aip.org/features/information-from-maxwells-demon-to-landauers-eraser)
Bennett, C. H. « The thermodynamics of computation, a review », *International Journal of Theoretical Physics* 21, 905 (1982).
Jaynes, E. T. « The Gibbs Paradox », dans *Maximum Entropy and Bayesian Methods*, Kluwer (1992). [🌐](https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf)
Bekenstein, J. D. « Black Holes and Entropy », *Physical Review D* 7, 2333 (1973).
Egan, C. A. et Lineweaver, C. H. « A Larger Estimate of the Entropy of the Universe », *The Astrophysical Journal* 710, 1825 (2010). [🌐](https://arxiv.org/abs/0909.3983)

<script>
(function () {
  var cv = document.getElementById('dm-c');
  if (!cv) return;
  var ctx = cv.getContext('2d'), W = 600, H = 290, S = cv.width / W;
  var BLEU = '#004D80', MAG = '#970E53', GRIS = '#64748b';
  var X0 = 20, X1 = 580, Y0 = 46, Y1 = 270, XM = 300, DY0 = 118, DY1 = 198, R = 5;
  var N = 56, P = [], vmed = 1, demon = true, running = true, visible = false, raf = null, obs = 0, flash = 0, T0 = 1;
  function $(id) { return document.getElementById(id); }
  function gauss() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.2832 * v); }
  function reset() {
    P = []; obs = 0;
    for (var i = 0; i < N; i++) {
      var vx = gauss(), vy = gauss(), x;
      do { x = X0 + R + Math.random() * (X1 - X0 - 2 * R); } while (Math.abs(x - XM) < 2 * R);
      P.push({ x: x, y: Y0 + R + Math.random() * (Y1 - Y0 - 2 * R), vx: 1.5 * vx, vy: 1.5 * vy });
    }
    var sp = P.map(function (p) { return p.vx * p.vx + p.vy * p.vy; }).sort(function (a, b) { return a - b; });
    vmed = (sp[N / 2 - 1] + sp[N / 2]) / 2;
    T0 = sp.reduce(function (a, b) { return a + b; }, 0) / N;
    P.forEach(function (p) { p.fast = p.vx * p.vx + p.vy * p.vy > vmed; });
  }
  // rebond diffus : la vitesse garde sa norme, sa direction est légèrement brouillée
  function bounce(p, nx, ny) {
    var v = Math.hypot(p.vx, p.vy), a = Math.atan2(ny, nx) + (Math.random() - 0.5) * 2.2;
    p.vx = v * Math.cos(a); p.vy = v * Math.sin(a);
  }
  function step() {
    for (var i = 0; i < N; i++) {
      var p = P[i], ox = p.x;
      p.x += p.vx; p.y += p.vy;
      if (p.x < X0 + R) { p.x = X0 + R; bounce(p, 1, 0); }
      if (p.x > X1 - R) { p.x = X1 - R; bounce(p, -1, 0); }
      if (p.y < Y0 + R) { p.y = Y0 + R; bounce(p, 0, 1); }
      if (p.y > Y1 - R) { p.y = Y1 - R; bounce(p, 0, -1); }
      var left = ox < XM;
      if ((left && p.x > XM - R) || (!left && p.x < XM + R)) {
        var pass = false;
        if (p.y > DY0 + R && p.y < DY1 - R) {
          if (demon) { obs++; pass = left ? p.fast : !p.fast; if (pass) flash = 10; }
          else pass = true;
        }
        if (pass) p.x = left ? XM + R + 0.5 : XM - R - 0.5;
        else { p.x = left ? XM - R : XM + R; bounce(p, left ? -1 : 1, 0); }
      }
    }
  }
  function txt(s, x, y, col, al, size) { ctx.fillStyle = col; ctx.textAlign = al || 'center'; ctx.font = (size || 13) + "px Georgia, 'Times New Roman', serif"; ctx.fillText(s, x, y); }
  function draw() {
    ctx.setTransform(S, 0, 0, S, 0, 0); ctx.clearRect(0, 0, W, H);
    var nL = 0, nR = 0, eL = 0, eR = 0;
    P.forEach(function (p) { var e = p.vx * p.vx + p.vy * p.vy; if (p.x < XM) { nL++; eL += e; } else { nR++; eR += e; } });
    var tL = nL ? 300 * eL / nL / T0 : 0, tR = nR ? 300 * eR / nR / T0 : 0;
    function tint(t) { var k = Math.max(-1, Math.min(1, (t - 300) / 250)); return k >= 0 ? 'rgba(151,14,83,' + (0.03 + 0.10 * k) + ')' : 'rgba(0,77,128,' + (0.03 - 0.10 * k) + ')'; }
    ctx.fillStyle = tint(tL); ctx.fillRect(X0, Y0, XM - X0, Y1 - Y0);
    ctx.fillStyle = tint(tR); ctx.fillRect(XM, Y0, X1 - XM, Y1 - Y0);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 2; ctx.strokeRect(X0, Y0, X1 - X0, Y1 - Y0);
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(XM, Y0); ctx.lineTo(XM, DY0); ctx.moveTo(XM, DY1); ctx.lineTo(XM, Y1); ctx.stroke();
    var open = !demon || flash > 0;
    ctx.strokeStyle = '#C2770B'; ctx.lineWidth = 3; ctx.beginPath();
    if (open) { ctx.moveTo(XM, DY0); ctx.lineTo(XM + 26, DY0 + 14); } else { ctx.moveTo(XM, DY0); ctx.lineTo(XM, DY1); }
    ctx.stroke();
    if (flash > 0) flash--;
    P.forEach(function (p) { ctx.fillStyle = p.fast ? MAG : BLEU; ctx.beginPath(); ctx.arc(p.x, p.y, R, 0, 6.2832); ctx.fill(); });
    if (demon) {
      // l'œil du démon, au-dessus de la porte
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#C2770B'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(XM, 24, 17, 10, 0, 0, 6.2832); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#C2770B'; ctx.beginPath(); ctx.arc(XM, 24, 5, 0, 6.2832); ctx.fill();
    }
    txt('T = ' + Math.round(tL) + ' K', (X0 + XM) / 2 - 20, 30, tL < 300 ? BLEU : MAG, 'center', 15);
    txt('T = ' + Math.round(tR) + ' K', (XM + X1) / 2 + 20, 30, tR < 300 ? BLEU : MAG, 'center', 15);
    txt(nL + ' molécules', X0 + 4, 286, GRIS, 'left', 12); txt(nR + ' molécules', X1 - 4, 286, GRIS, 'right', 12);
    $('dm-obs').textContent = obs;
  }
  function frame() { step(); step(); draw(); raf = (running && visible) ? requestAnimationFrame(frame) : null; }
  function go() { if (!raf && running && visible) raf = requestAnimationFrame(frame); }
  $('dm-mode').addEventListener('click', function () { demon = !demon; this.textContent = demon ? 'Congédier le démon (porte ouverte)' : 'Rappeler le démon'; draw(); go(); });
  $('dm-reset').addEventListener('click', function () { reset(); draw(); go(); });
  $('dm-pause').addEventListener('click', function () { running = !running; this.textContent = running ? '❚❚ Pause' : '▶ Reprendre'; go(); });
  reset();
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { running = false; $('dm-pause').textContent = '▶ Lancer'; }
  draw();
  if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; go(); }, { threshold: 0.2 }).observe(cv);
  else { visible = true; go(); }
})();
(function () {
  var svg = document.getElementById('es-svg');
  if (!svg) return;
  function $(id) { return document.getElementById(id); }
  var A = 1.5, F = 0.8, TWO_PI = 2 * Math.PI, DT = 0.001;
  var x = 0, wall = -1e9, demon = false, running = true, visible = false, raf = null, cam = 0, x0 = 0, tSim = 0;
  var CX = 300, CY = 150, SX = 86, SY = 21;
  function U(z) { return F * z - A * Math.cos(TWO_PI * z); }
  function dU(z) { return F + A * TWO_PI * Math.sin(TWO_PI * z); }
  function gauss() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TWO_PI * v); }
  function sim(n) {
    var s = Math.sqrt(2 * DT);
    for (var k = 0; k < n; k++) {
      x += -dU(x) * DT + s * gauss();
      if (demon) {
        // le démon regarde : dès que la bille a franchi une crête, il pose une cloison juste derrière
        var top = Math.floor(x - 0.5) + 0.5;
        if (x > top + 0.12 && top > wall) wall = top;
        if (x < wall) x = 2 * wall - x;
      }
    }
    tSim += n * DT;
  }
  function px(z) { return CX + SX * (z - cam); }
  function py(z) { return CY - SY * (U(z) - F * cam); }
  function draw() {
    cam += 0.08 * (x - cam);
    var pts = [], z;
    for (var i = 0; i <= 140; i++) { z = cam - 3.5 + 7 * i / 140; pts.push(px(z).toFixed(1) + ',' + py(z).toFixed(1)); }
    $('es-pot').setAttribute('points', pts.join(' '));
    $('es-fill').setAttribute('points', pts.join(' ') + ' 600,300 0,300');
    $('es-b').setAttribute('cx', px(x).toFixed(1)); $('es-b').setAttribute('cy', (py(x) - 9).toFixed(1));
    var w = $('es-wall');
    if (demon && wall > -1e8) { w.setAttribute('opacity', 1); w.setAttribute('x1', px(wall).toFixed(1)); w.setAttribute('x2', px(wall).toFixed(1)); w.setAttribute('y1', (py(wall) - 46).toFixed(1)); w.setAttribute('y2', (py(wall) + 4).toFixed(1)); }
    else w.setAttribute('opacity', 0);
    var n = Math.round(x) - x0;
    $('es-n').textContent = (n > 0 ? '+' : '') + n;
    $('es-e').textContent = ((n > 0 ? '+' : '') + (n * F).toFixed(1)).replace('.', ',').replace('-', '−');
    $('es-n').textContent = $('es-n').textContent.replace('-', '−');
  }
  function frame() { sim(45); draw(); raf = (running && visible) ? requestAnimationFrame(frame) : null; }
  function go() { if (!raf && running && visible) raf = requestAnimationFrame(frame); }
  $('es-mode').addEventListener('click', function () {
    demon = !demon; wall = -1e9; x0 = Math.round(x);
    this.textContent = demon ? 'Congédier le démon' : 'Faire intervenir le démon';
    $('es-eye').setAttribute('opacity', demon ? 1 : 0.15); draw(); go();
  });
  $('es-pause').addEventListener('click', function () { running = !running; this.textContent = running ? '❚❚ Pause' : '▶ Reprendre'; go(); });
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { running = false; $('es-pause').textContent = '▶ Lancer'; }
  cam = x; draw();
  if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; go(); }, { threshold: 0.25 }).observe(svg);
  else { visible = true; go(); }
})();
(function () {
  var svg = document.getElementById('ef-svg');
  if (!svg) return;
  function $(id) { return document.getElementById(id); }
  var a = 10, C = 20, FM = 6, N = 400, DT = 0.002, NS = 'http://www.w3.org/2000/svg';
  var X = new Float64Array(N), W = new Float64Array(N), dots = [], busy = false, tau = 20, FRAMES = 420;
  var PX0 = 30, PX1 = 330, PY0 = 250, XR = 1.75, UMIN = -9, UMAX = 16, PH = 200;
  var GX0 = 400, GX1 = 580, GY0 = 250, GY1 = 60, QMAX = 2.4;
  function gauss() { var u = 1 - Math.random(), v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(6.2832 * v); }
  function sm(z) { z = Math.max(0, Math.min(1, z)); return z * z * (3 - 2 * z); }
  function proto(u) {
    var c = u < 0.3 ? C * (1 - sm(u / 0.3)) : (u >= 0.45 ? C * sm((u - 0.45) / 0.3) : 0), f;
    if (u < 0.3) f = 0; else if (u < 0.45) f = FM * sm((u - 0.3) / 0.15); else if (u < 0.75) f = FM; else f = FM * (1 - sm((u - 0.75) / 0.25));
    return [c, f];
  }
  function Upot(x, c, f) { return a * x * x * x * x - c * x * x - f * x + c * c / (4 * a); }
  function sx(x) { return PX0 + (PX1 - PX0) * (x + XR) / (2 * XR); }
  function sy(u) { return PY0 - PH * (Math.max(UMIN, Math.min(UMAX, u)) - UMIN) / (UMAX - UMIN); }
  function init() {
    for (var i = 0; i < N; i++) { X[i] = (i % 2 ? 1 : -1) + 0.11 * gauss(); W[i] = 0; }
  }
  var g = $('ef-dots');
  for (var i = 0; i < 70; i++) {
    var c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 4); c.setAttribute('fill', i % 2 ? '#970E53' : '#004D80'); c.setAttribute('fill-opacity', 0.75);
    g.appendChild(c); dots.push(c);
  }
  function draw(c, f, label) {
    var pts = [];
    for (var k = 0; k <= 90; k++) { var x = -XR + 2 * XR * k / 90; pts.push(sx(x).toFixed(1) + ',' + sy(Upot(x, c, f)).toFixed(1)); }
    $('ef-pot').setAttribute('points', pts.join(' '));
    for (var i = 0; i < dots.length; i++) {
      var xi = Math.max(-XR, Math.min(XR, X[i]));
      dots[i].setAttribute('cx', sx(xi).toFixed(1)); dots[i].setAttribute('cy', (sy(Upot(xi, c, f)) - 5 - 3 * (i % 3)).toFixed(1));
    }
    $('ef-etape').textContent = label;
  }
  function gx(t) { return GX0 + (GX1 - GX0) * Math.log(t / 3) / Math.log(300 / 3); }
  function gy(q) { return GY0 + (GY1 - GY0) * Math.min(QMAX, q) / QMAX; }
  function fr(v, d) { return v.toFixed(d).replace('.', ','); }
  function run() {
    if (busy) return;
    busy = true; $('ef-go').disabled = true; init();
    var steps = Math.round(tau / DT), per = Math.ceil(steps / FRAMES), k = 0, cf = proto(0), s = Math.sqrt(2 * DT);
    function frame() {
      for (var q = 0; q < per && k < steps; q++, k++) {
        var n2 = proto((k + 1) / steps), dc = n2[0] - cf[0], df = n2[1] - cf[1];
        for (var i = 0; i < N; i++) {
          var x = X[i];
          W[i] += -dc * x * x - df * x;
          X[i] = x - (4 * a * x * x * x - 2 * n2[0] * x - n2[1]) * DT + s * gauss();
        }
        cf = n2;
      }
      var u = k / steps;
      draw(cf[0], cf[1], u < 0.3 ? '1. on abaisse la barrière' : u < 0.45 ? '2. on incline vers la droite' : u < 0.75 ? '3. on relève la barrière' : u < 1 ? '4. on redresse' : 'bit effacé : tout le monde est à droite');
      if (k < steps) { requestAnimationFrame(frame); return; }
      var w = 0, ok = 0;
      for (var i = 0; i < N; i++) { w += W[i]; if (X[i] > 0) ok++; }
      w /= N;
      $('ef-q').textContent = fr(w, 2); $('ef-ok').textContent = Math.round(100 * ok / N);
      var p = document.createElementNS(NS, 'circle');
      p.setAttribute('cx', gx(tau).toFixed(1)); p.setAttribute('cy', gy(w).toFixed(1)); p.setAttribute('r', 4.5); p.setAttribute('fill', '#970E53'); p.setAttribute('fill-opacity', 0.8);
      $('ef-pts').appendChild(p);
      busy = false; $('ef-go').disabled = false;
    }
    requestAnimationFrame(frame);
  }
  var btns = document.querySelectorAll('.ef-tau');
  for (var b = 0; b < btns.length; b++) (function (el) {
    el.addEventListener('click', function () {
      if (busy) return;
      tau = parseFloat(el.getAttribute('data-tau'));
      for (var j = 0; j < btns.length; j++) btns[j].setAttribute('aria-pressed', btns[j] === el ? 'true' : 'false');
      run();
    });
  })(btns[b]);
  $('ef-go').addEventListener('click', run);
  init(); draw(C, 0, 'état initial : un bit inconnu (gauche ou droite)');
})();
</script>
