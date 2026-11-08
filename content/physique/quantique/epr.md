+++
title = "EPR"
date = 2021-03-06T14:20:50+01:00
weight = 4
chapter = false
hidden = false
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

# Que faire de la non-localité quantique&nbsp;?


## Intrication, EPR et inégalités de Bell

{{< youtube-plus id="QS_bw6PVfsE" ratio="16x9" width="800" shadow="false" rounded="true" >}}

### Des corrélations à distance

Deux particules qui ont interagi peuvent se retrouver dans un état **intriqué**, comme l'état singulet $\frac{1}{\sqrt2}\bigl(\lvert\uparrow\downarrow\rangle - \lvert\downarrow\uparrow\rangle\bigr)$&nbsp;: impossible de l'écrire comme le produit d'un état pour chaque particule (voir [Paire de qubits](../fondations/#paire-de-qubits)). Mesurer le spin de l'une donne un résultat aléatoire, mais l'autre donne toujours le résultat opposé, aussi loin qu'on l'ait emmenée.

En 1935, Einstein, Podolsky et Rosen s'emparent de ce type de corrélation. La vidéo en donne une version imagée&nbsp;: deux jumeaux, séparés, répondent toujours la même chose quand on leur pose la même question. Deux explications sont possibles&nbsp;:
<ul>
<li>ils <b>communiquent instantanément</b> au moment où on les interroge, ce qui est une «&nbsp;action fantôme à distance&nbsp;» incompatible avec l'esprit de la relativité&nbsp;;</li>
<li>ils ont convenu d'un <b>plan</b> avant d'être séparés&nbsp;: leurs réponses étaient fixées à l'avance.</li>
</ul>

Partisans de la localité, EPR choisissent la seconde explication. Mais rien, dans le formalisme quantique, ne décrit un tel plan&nbsp;: la mécanique quantique serait donc **incomplète**, et il faudrait la compléter par des «&nbsp;variables cachées&nbsp;» jouant le rôle du plan (l'état physique $\lambda$ de la page [Épistémique vs. ontique](../epistovsonto/#la-distinction-de-harrigan-et-spekkens)).

### Le test de Bell

En 1964, John Bell montre que l'on peut trancher expérimentalement. La vidéo suit une version simplifiée, due à David Mermin&nbsp;: on pose à chaque jumeau l'une de trois questions, A, B ou C, tirée au hasard. Si les jumeaux suivent un plan, chacun a en poche une réponse à chacune des trois questions. Il y a huit plans possibles, et pour chacun on peut calculer la probabilité que les deux jumeaux répondent la même chose à deux questions **différentes**&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 600 289" role="img" aria-label="À gauche, les huit plans de réponses possibles aux trois questions A, B, C et, pour chacun, la probabilité de réponses identiques à deux questions différentes : au moins 1/3. À droite, trois polariseurs orientés à 60° les uns des autres donnent des réponses identiques avec la probabilité cos²60° = 1/4." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="bp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<text x="170.0" y="18.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >plans de réponses possibles</text>
<rect x="30" y="39" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="45.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="30" y="69" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="45.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="30" y="99" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="45.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<text x="45.0" y="165.0" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >1</text>
<rect x="66" y="39" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="81.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="66" y="69" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="81.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="66" y="99" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="81.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<text x="81.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="102" y="39" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="117.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="102" y="69" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="117.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="102" y="99" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="117.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<text x="117.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="138" y="39" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="153.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="138" y="69" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="153.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="138" y="99" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="153.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<text x="153.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="174" y="39" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="189.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="174" y="69" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="189.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="174" y="99" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="189.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<text x="189.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="210" y="39" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="225.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="210" y="69" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="225.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<rect x="210" y="99" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="225.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<text x="225.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="246" y="39" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="261.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="246" y="69" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="261.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="246" y="99" width="30" height="22" rx="4" fill="#d1e5e3" stroke="#006C65" stroke-width="0.8"/>
<text x="261.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >oui</text>
<text x="261.0" y="165.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<rect x="282" y="39" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="297.0" y="54.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="282" y="69" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="297.0" y="84.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<rect x="282" y="99" width="30" height="22" rx="4" fill="#ecd4e0" stroke="#970E53" stroke-width="0.8"/>
<text x="297.0" y="114.0" text-anchor="middle" font-size="10.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non</text>
<text x="297.0" y="165.0" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="20.0" y="54.0" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >A</text>
<text x="20.0" y="84.0" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >B</text>
<text x="20.0" y="114.0" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >C</text>
<text x="170.0" y="192.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >probabilité de réponses identiques</text>
<text x="170.0" y="208.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >à deux questions différentes : toujours ≥ 1/3</text>
<circle cx="470" cy="120" r="75" fill="none" stroke="#cbd5e1" stroke-width="1"/>
<line x1="470.0" y1="195.0" x2="470.0" y2="45.0" stroke="#004D80" stroke-width="1.8"/>
<text x="470.0" y="36.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >A</text>
<line x1="535.0" y1="157.5" x2="405.0" y2="82.5" stroke="#004D80" stroke-width="1.8"/>
<text x="392.9" y="80.5" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >B</text>
<line x1="405.0" y1="157.5" x2="535.0" y2="82.5" stroke="#004D80" stroke-width="1.8"/>
<text x="547.1" y="80.5" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >C</text>
<polyline points="470.0,88.0 468.8,88.0 467.7,88.1 466.5,88.2 465.4,88.3 464.3,88.5 463.1,88.7 462.0,89.0 460.9,89.3 459.8,89.7 458.7,90.1 457.6,90.5 456.6,91.0 455.5,91.5 454.5,92.0 453.5,92.6 452.5,93.2 451.6,93.8 450.6,94.5 449.7,95.2 448.8,96.0 448.0,96.8 447.2,97.6 446.4,98.4 445.6,99.3 444.9,100.2 444.2,101.1 443.5,102.0 442.9,103.0 442.3,104.0" fill="none" stroke="#64748b" stroke-width="1"/>
<text x="447.0" y="84.2" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >60°</text>
<polyline points="497.7,104.0 497.1,103.0 496.5,102.0 495.8,101.1 495.1,100.2 494.4,99.3 493.6,98.4 492.8,97.6 492.0,96.8 491.2,96.0 490.3,95.2 489.4,94.5 488.4,93.8 487.5,93.2 486.5,92.6 485.5,92.0 484.5,91.5 483.4,91.0 482.4,90.5 481.3,90.1 480.2,89.7 479.1,89.3 478.0,89.0 476.9,88.7 475.7,88.5 474.6,88.3 473.5,88.2 472.3,88.1 471.2,88.0 470.0,88.0" fill="none" stroke="#64748b" stroke-width="1"/>
<text x="493.0" y="84.2" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >60°</text>
<text x="470.0" y="228.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >trois polariseurs à 60°</text>
<text x="470.0" y="248.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >réponses identiques avec</text>
<text x="470.0" y="266.0" text-anchor="middle" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >la probabilité cos²60° = 1/4</text>
<line x1="330.0" y1="30.0" x2="330.0" y2="270.0" stroke="#cbd5e1" stroke-width="1" />
<text x="170.0" y="262.0" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >1/4 < 1/3 : aucun plan préétabli</text>
<text x="170.0" y="280.0" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >ne reproduit les prédictions quantiques</text>
</svg>
</div>
<p class="legende">À gauche, les huit plans possibles. Un plan où les trois réponses sont égales donne toujours des réponses identiques&nbsp;; sinon, deux questions seulement sur trois ont la même réponse, et la probabilité vaut $\frac13$. À droite, l'expérience quantique, avec trois polariseurs orientés à $60°$ les uns des autres.</p>

Quel que soit le plan, et quel que soit le mélange de plans utilisé, cette probabilité est donc au moins égale à $\frac13$&nbsp;: c'est une **inégalité de Bell**.

Dans l'expérience quantique, les deux jumeaux sont deux photons dans l'état $\frac{1}{\sqrt2}\bigl(\lvert\uparrow_A\uparrow_A\rangle + \lvert\downarrow_A\downarrow_A\rangle\bigr)$, où $\lvert\uparrow_A\rangle$ signifie «&nbsp;le photon traverse le polariseur A&nbsp;» (c'est l'état de Bell $\lvert\Phi^+\rangle$ des [Notions fondamentales](../fondations/#paire-de-qubits)). Les trois questions correspondent à trois polariseurs orientés à $60°$ les uns des autres. Comme le montre la vidéo en réécrivant l'état dans la base d'un autre polariseur, les deux photons donnent toujours la même réponse à la même question, et la probabilité d'une même réponse à deux polariseurs faisant un angle $\theta$ vaut $\cos^2\theta$, comme dans la loi de Malus. Pour deux questions différentes, elle vaut donc $\cos^2 60° = \frac14$.

<div id="theo">

$\frac14 \lt \frac13$&nbsp;: les photons violent l'inégalité de Bell. Leurs réponses ne peuvent pas être écrites à l'avance dans un plan local.

</div>

Les expériences, depuis celles d'Alain Aspect au début des années 1980 jusqu'aux tests «&nbsp;sans échappatoire&nbsp;» de 2015, ont confirmé la prédiction quantique (prix Nobel 2022 pour Aspect, Clauser et Zeilinger). La page [Limites de la non-localité](../nonlocale/) présente la version quantitative de ce résultat, l'inégalité CHSH, et montre pourquoi la mécanique quantique ne la viole pas davantage. La page sur la [théorie-jouet de Spekkens](../spekkens/#ce-que-le-jouet-ne-peut-pas-reproduire) montre à l'inverse jusqu'où peut aller un modèle local&nbsp;: très loin, mais jamais au-delà de l'inégalité.

La vidéo conclut sur une alternative. Soit les particules ont chacune leur existence propre, et elles s'influencent à distance. Soit on suit le formalisme à la lettre&nbsp;: l'état intriqué n'est pas séparable, les deux jumeaux n'en font qu'un («&nbsp;une fusion&nbsp;»), et ils ne s'individualisent qu'au moment de la mesure. Mais cette fusion n'est pas locale pour autant, puisqu'elle s'étend en deux endroits à la fois. Quant aux variables cachées de Bohm, qui voulaient échapper à cet étalement, l'inégalité de Bell les condamne à être elles-mêmes non locales.

## Ce que dit la relativité

Selon la relativité restreinte, deux événements ne peuvent être reliés causalement que si l'un est dans le cône de lumière de l'autre&nbsp;: aucune influence ne va plus vite que la lumière. Dans une expérience de Bell, les deux mesures sont faites de sorte qu'aucun signal ne puisse relier l'une à l'autre.

<div class="svg-container">
<svg viewBox="0 12 600 288" role="img" aria-label="Diagramme d'espace-temps : la source S émet deux particules mesurées en A et en B. A et B sont séparés par un intervalle de type espace : aucun signal allant moins vite que la lumière ne peut relier ces deux événements." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="cax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<defs><marker id="cp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<line x1="40.0" y1="285.0" x2="40.0" y2="25.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#cax)"/>
<text x="52.0" y="30.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan></text>
<line x1="40.0" y1="285.0" x2="580.0" y2="285.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#cax)"/>
<text x="578.0" y="278.0" text-anchor="end" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">x</tspan></text>
<polygon points="150.0,105.0 65.0,20.0 235.0,20.0" fill="#e0eded" stroke="none"/>
<line x1="150.0" y1="105.0" x2="65.0" y2="20.0" stroke="#66a7a3" stroke-width="1" />
<line x1="150.0" y1="105.0" x2="235.0" y2="20.0" stroke="#66a7a3" stroke-width="1" />
<polygon points="450.0,105.0 365.0,20.0 535.0,20.0" fill="#f3e2ea" stroke="none"/>
<line x1="450.0" y1="105.0" x2="365.0" y2="20.0" stroke="#c16e98" stroke-width="1" />
<line x1="450.0" y1="105.0" x2="535.0" y2="20.0" stroke="#c16e98" stroke-width="1" />
<line x1="300.0" y1="255.0" x2="150.0" y2="105.0" stroke="#004D80" stroke-width="1.6" />
<line x1="300.0" y1="255.0" x2="450.0" y2="105.0" stroke="#004D80" stroke-width="1.6" />
<circle cx="300" cy="255" r="5" fill="#004D80"/>
<text x="300.0" y="277.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">S</text>
<text x="300.0" y="293.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >source</text>
<circle cx="150" cy="105" r="5" fill="#006C65"/>
<text x="150.0" y="93.0" text-anchor="middle" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-weight="bold">A</text>
<text x="138.0" y="127.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >mesure d'Alice</text>
<circle cx="450" cy="105" r="5" fill="#970E53"/>
<text x="450.0" y="93.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-weight="bold">B</text>
<text x="462.0" y="127.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >mesure de Bob</text>
<line x1="158" y1="105" x2="442" y2="105" stroke="#64748b" stroke-width="1" stroke-dasharray="2 4"/>
<text x="300.0" y="97.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >intervalle de type espace</text>
<text x="150.0" y="40.0" text-anchor="middle" font-size="12" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >futur de A</text>
<text x="450.0" y="40.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >futur de B</text>
</svg>
</div>
<p class="legende">Diagramme d'espace-temps d'une expérience de Bell. Les deux particules partent de la source S. Les mesures A et B sont hors du cône de lumière l'une de l'autre&nbsp;: aucune ne peut influencer l'autre sans dépasser la vitesse de la lumière.</p>

Comment donc deux événements séparés par un intervalle de type espace peuvent-ils «&nbsp;s'accorder&nbsp;» sur leurs réponses&nbsp;?

On pourrait croire que la violation des inégalités de Bell contredit la relativité. Ce n'est pas le cas&nbsp;: il faudrait pour cela pouvoir transmettre un message plus vite que la lumière, et le **théorème de non-communication** l'interdit. Quoi que fasse Alice, les résultats de Bob, pris seuls, sont parfaitement aléatoires&nbsp;: son qubit, considéré seul, est dans l'état maximalement mixte (voir [la trace partielle](../fondations/#létat-dun-seul-qubit-la-trace-partielle)). La corrélation n'apparaît que lorsqu'Alice et Bob comparent leurs résultats, ce qui demande un échange ordinaire d'informations. C'est la même raison qui empêche la téléportation quantique de transmettre quoi que ce soit avant l'arrivée des deux bits classiques (voir [Téléportation quantique](../fondations/#téléportation-quantique)).

La relativité offre même une difficulté supplémentaire. Pour des événements séparés par un intervalle de type espace, l'ordre temporel dépend de l'observateur&nbsp;: dans un référentiel, Alice mesure la première et «&nbsp;réduit&nbsp;» l'état du photon de Bob&nbsp;; dans un autre, c'est l'inverse. L'histoire d'une influence de l'un sur l'autre n'a donc pas de sens indépendant du référentiel. Le philosophe Abner Shimony parlait de «&nbsp;coexistence pacifique&nbsp;»&nbsp;: la théorie quantique et la relativité s'accordent sur tout ce qui est mesurable, mais racontent deux histoires difficilement compatibles de ce qui se passe.

## Les façons de s'en sortir

Le théorème de Bell repose sur plusieurs hypothèses&nbsp;: les résultats de mesure sont fixés (au moins en probabilité) par un état physique $\lambda$&nbsp;; les influences sont locales&nbsp;; le choix des mesures est indépendant de $\lambda$&nbsp;; chaque mesure a un résultat unique&nbsp;; les causes précèdent leurs effets. Chaque interprétation de la mécanique quantique renonce à au moins l'une d'elles. Les sections qui suivent présentent quatre de ces options, d'après le livre d'Emily Adlam&nbsp;; la dernière section en mentionne d'autres.

### Anti-réalisme

Une première approche consiste à ne pas chercher d'explication&nbsp;: il n'y a pas de $\lambda$, pas de description de la réalité derrière les résultats de mesure, seulement un formalisme qui permet de prédire leurs probabilités. Les corrélations sont un fait, qu'aucun mécanisme sous-jacent n'a à expliquer. Une théorie physique doit prédire les résultats d'expérience&nbsp;; procurer une satisfaction intellectuelle ne fait pas partie de ses prérogatives.

Cette position prend des formes variées, de l'interprétation de Copenhague au QBism (voir [Épistémique vs. ontique](../epistovsonto/#que-conclure)). Elle prend aussi la forme implicite du célèbre «&nbsp;Tais-toi et calcule&nbsp;!&nbsp;» (*shut up and calculate*), formule de David Mermin souvent attribuée à Feynman.

Mais même les plus pragmatiques s'opposent rarement à l'ambition d'une théorie unifiant toutes les lois physiques. Or une telle théorie achoppe aujourd'hui sur la compatibilité entre la relativité générale et la physique quantique. Trouver un terrain d'entente sur la localité pourrait nous rapprocher de ce Graal.

### Superdéterminisme

Pour sauver la localité, on peut aussi s'attaquer à une autre hypothèse du théorème, l'**indépendance statistique**&nbsp;: la variable cachée $\lambda$, qui décrit l'état de la paire, ne dépend pas des réglages $a$ et $b$ choisis par les expérimentateurs.

Bell utilisait l'exemple des chaussettes de son collègue Reinhold Bertlmann, toujours dépareillées&nbsp;: il suffit d'en apercevoir une pour savoir aussitôt que l'autre n'est pas de la même couleur. Rien de mystérieux&nbsp;: la corrélation a une cause commune, le choix fait le matin devant le tiroir. C'est exactement l'explication par un «&nbsp;plan&nbsp;» que le test de Bell met à l'épreuve, en choisissant les questions **au hasard**, une fois les particules séparées. Encore faut-il que ce choix soit réellement indépendant de $\lambda$.

<div class="svg-container">
<svg viewBox="0 7 600 263" role="img" aria-label="Hypothèse d'indépendance statistique et superdéterminisme : les réglages a et b ne dépendent pas de la variable cachée λ, sauf si une cause commune C, dans le passé, les a corrélés." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="sa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#94a3b8"/></marker></defs>
<defs><marker id="sm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<text x="155.0" y="262.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >ce que suppose Bell</text>
<line x1="143.9" y1="132.2" x2="91.7" y2="48.7" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="166.1" y1="132.2" x2="218.3" y2="48.7" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="66.2" y1="74.9" x2="73.5" y2="51.0" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="243.8" y1="74.9" x2="236.5" y2="51.0" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="136.8" y1="139.5" x2="78.2" y2="105.5" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 4"/>
<text x="107.5" y="127.5" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >✗</text>
<line x1="173.2" y1="139.5" x2="231.8" y2="105.5" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 4"/>
<text x="202.5" y="127.5" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >✗</text>
<text x="155.0" y="194.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >λ indépendant de <tspan font-style="italic">a</tspan> et <tspan font-style="italic">b</tspan></text>
<circle cx="60" cy="95" r="20" fill="#fff" stroke="#006C65" stroke-width="1.6"/><text x="60.0" y="100.0" text-anchor="middle" font-size="15" fill="#006C65" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">a</tspan></text>
<circle cx="250" cy="95" r="20" fill="#fff" stroke="#006C65" stroke-width="1.6"/><text x="250.0" y="100.0" text-anchor="middle" font-size="15" fill="#006C65" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">b</tspan></text>
<circle cx="155" cy="150" r="20" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="155.0" y="155.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >λ</text>
<circle cx="80" cy="30" r="17" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="80.0" y="35.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan></text>
<circle cx="230" cy="30" r="17" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="230.0" y="35.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">B</tspan></text>
<text x="445.0" y="262.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >superdéterminisme</text>
<line x1="433.9" y1="132.2" x2="381.7" y2="48.7" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="456.1" y1="132.2" x2="508.3" y2="48.7" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="356.2" y1="74.9" x2="363.5" y2="51.0" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="533.8" y1="74.9" x2="526.5" y2="51.0" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#sa)"/>
<line x1="433.2" y1="217.6" x2="362.4" y2="113.2" stroke="#970E53" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#sm)"/>
<line x1="456.8" y1="217.6" x2="527.6" y2="113.2" stroke="#970E53" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#sm)"/>
<line x1="445.0" y1="214.0" x2="445.0" y2="172.0" stroke="#970E53" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#sm)"/>
<circle cx="445" cy="235" r="20" fill="#fff" stroke="#970E53" stroke-width="1.6"/><text x="445.0" y="240.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >C</text>
<text x="473.0" y="240.0" text-anchor="start" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >cause commune</text>
<circle cx="350" cy="95" r="20" fill="#fff" stroke="#006C65" stroke-width="1.6"/><text x="350.0" y="100.0" text-anchor="middle" font-size="15" fill="#006C65" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">a</tspan></text>
<circle cx="540" cy="95" r="20" fill="#fff" stroke="#006C65" stroke-width="1.6"/><text x="540.0" y="100.0" text-anchor="middle" font-size="15" fill="#006C65" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">b</tspan></text>
<circle cx="445" cy="150" r="20" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="445.0" y="155.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >λ</text>
<circle cx="370" cy="30" r="17" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="370.0" y="35.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">A</tspan></text>
<circle cx="520" cy="30" r="17" fill="#fff" stroke="#004D80" stroke-width="1.6"/><text x="520.0" y="35.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">B</tspan></text>
<text x="20.0" y="100.0" text-anchor="middle" font-size="1" fill="#334155" font-family="Georgia,'Times New Roman',serif" ></text>
<line x1="300.0" y1="15.0" x2="300.0" y2="245.0" stroke="#cbd5e1" stroke-width="1" />
</svg>
</div>
<p class="legende">À gauche, l'hypothèse de Bell&nbsp;: les résultats $A$ et $B$ dépendent de $\lambda$ et des réglages $a$ et $b$, mais les réglages ne dépendent pas de $\lambda$. À droite, le superdéterminisme&nbsp;: une cause commune C, dans le passé, a corrélé $\lambda$ et les réglages.</p>

Ne se pourrait-il pas que le dispositif de mesure **et** la variable cachée $\lambda$ soient liés depuis un passé commun&nbsp;? Le libre choix de l'expérimentateur se dissout alors dans un engrenage où le réglage de la mesure était inscrit d'avance, en lien avec $\lambda$. Pour rendre cette hypothèse plus difficile à tenir, des expériences ont confié le choix des réglages à la lumière d'étoiles lointaines (2017), puis de quasars dont la lumière a été émise il y a plusieurs milliards d'années (2018)&nbsp;: la cause commune devrait alors remonter à ces époques reculées.

Une critique fréquente du superdéterminisme est qu'il fragiliserait la possibilité même d'acquérir des connaissances scientifiques, tant l'indépendance statistique joue un rôle crucial dans le raisonnement expérimental. Supposons que l'on cherche à savoir si un système possède la propriété A ou la propriété B, sans pouvoir tester les deux à la fois. On réalise la même préparation 1&nbsp;000 fois, et l'on teste A ou B selon le résultat d'un pile ou face. Si le test de A est négatif les quelque 500 fois où il est réalisé, on aimerait conclure que le système n'a jamais la propriété A. Mais une «&nbsp;cause commune&nbsp;» a pu faire en sorte que le système possède la propriété A seulement lorsque c'est B qui est testée&nbsp;! C'est ce type de conspiration qui semble saper la possibilité même de connaissances scientifiques.

Le superdéterminisme a pourtant un atout de poids&nbsp;: il gomme à la fois l'indéterminisme et la non-localité quantiques, les deux principales incompatibilités avec les théories relativistes, qui sont, elles, déterministes et locales.

### Non-localité temporelle

La tension avec la relativité ne vient pas tant de la non-localité elle-même que de l'**instantanéité** de l'influence à distance. Pourquoi la supposer instantanée&nbsp;? Cela revient à supposer que l'état quantique est délocalisé dans l'espace, mais toujours localisé dans le temps&nbsp;: on garde ainsi l'idée que le passé influence le futur, et pas l'inverse.

Si l'on accepte au contraire une influence du choix d'une mesure sur le résultat de l'autre, quel que soit le lieu **et quel que soit l'instant** de la seconde, la contradiction avec la relativité s'affaiblit&nbsp;: on rétablit la symétrie entre espace et temps si chère à Einstein.

À quoi ressemblerait une théorie non locale dans le temps&nbsp;? Le cours entier de l'histoire serait fixé d'un seul bloc par des lois intemporelles. Un événement à un instant $t$ dépendrait alors d'événements passés, même s'ils n'ont laissé aucune trace à l'instant $t$, mais aussi d'événements futurs.

<div class="svg-container">
<svg viewBox="0 16 600 233" role="img" aria-label="Deux façons de concevoir une loi physique : pas à pas, en faisant évoluer l'état d'un instant au suivant, ou d'un seul bloc, en contraignant l'histoire entière entre deux instants, comme le fait le principe de moindre action." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="gax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<defs><marker id="gb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<line x1="30.0" y1="210.0" x2="250.0" y2="210.0" stroke="#80a6c0" stroke-width="1.4" />
<text x="262.0" y="214.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan>₀</text>
<line x1="80.0" y1="204.0" x2="80.0" y2="158.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="140.0" y1="204.0" x2="140.0" y2="158.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="200.0" y1="204.0" x2="200.0" y2="158.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="30.0" y1="150.0" x2="250.0" y2="150.0" stroke="#80a6c0" stroke-width="1.4" />
<text x="262.0" y="154.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan>₁</text>
<line x1="80.0" y1="144.0" x2="80.0" y2="98.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="140.0" y1="144.0" x2="140.0" y2="98.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="200.0" y1="144.0" x2="200.0" y2="98.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="30.0" y1="90.0" x2="250.0" y2="90.0" stroke="#80a6c0" stroke-width="1.4" />
<text x="262.0" y="94.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan>₂</text>
<line x1="80.0" y1="84.0" x2="80.0" y2="38.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="140.0" y1="84.0" x2="140.0" y2="38.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="200.0" y1="84.0" x2="200.0" y2="38.0" stroke="#004D80" stroke-width="1.3" marker-end="url(#gb)"/>
<line x1="30.0" y1="30.0" x2="250.0" y2="30.0" stroke="#80a6c0" stroke-width="1.4" />
<text x="262.0" y="34.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan>₃</text>
<text x="140.0" y="240.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >pas à pas : l'état présent fixe le suivant</text>
<rect x="330" y="25" width="240" height="190" fill="#f0f4f7" stroke="#cbd5e1"/>
<polyline points="370.0,205.0 371.0,200.5 371.9,196.0 372.9,191.5 373.9,187.0 374.9,182.5 376.0,178.0 377.0,173.6 378.2,169.2 379.3,164.8 380.5,160.5 381.7,156.3 383.0,152.0 384.3,147.9 385.7,143.7 387.2,139.7 388.7,135.7 390.3,131.8 392.0,127.9 393.7,124.1 395.6,120.4 397.5,116.8 399.5,113.2 401.5,109.7 403.7,106.3 406.0,103.0 408.3,99.8 410.7,96.6 413.3,93.6 415.9,90.6 418.6,87.7 421.4,84.9 424.3,82.2 427.3,79.6 430.4,77.1 433.5,74.6 436.8,72.3 440.1,70.0 443.6,67.8 447.1,65.6 450.7,63.6 454.4,61.6 458.1,59.7 461.9,57.9 465.8,56.1 469.8,54.4 473.8,52.8 477.9,51.2 482.1,49.6 486.2,48.2 490.5,46.7 494.8,45.3 499.1,43.9 503.4,42.6 507.8,41.3 512.2,40.0 516.7,38.7 521.1,37.5 525.5,36.2 530.0,35.0" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
<polyline points="370.0,205.0 372.1,201.6 374.3,198.1 376.4,194.7 378.5,191.3 380.7,187.9 382.8,184.5 385.0,181.1 387.2,177.7 389.4,174.3 391.6,171.0 393.8,167.6 396.0,164.3 398.3,161.0 400.6,157.7 402.9,154.4 405.2,151.2 407.5,147.9 409.9,144.7 412.3,141.5 414.7,138.4 417.1,135.2 419.6,132.1 422.1,129.1 424.6,126.0 427.2,123.0 429.8,120.0 432.4,117.0 435.0,114.1 437.7,111.2 440.4,108.3 443.2,105.4 446.0,102.6 448.8,99.8 451.6,97.0 454.5,94.3 457.4,91.6 460.3,88.9 463.2,86.3 466.2,83.6 469.2,81.0 472.2,78.5 475.3,75.9 478.4,73.4 481.5,70.9 484.6,68.4 487.8,65.9 490.9,63.4 494.1,61.0 497.3,58.6 500.6,56.2 503.8,53.8 507.0,51.4 510.3,49.1 513.6,46.7 516.8,44.4 520.1,42.0 523.4,39.7 526.7,37.3 530.0,35.0" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
<polyline points="370.0,205.0 374.6,203.9 379.3,202.9 383.9,201.8 388.5,200.7 393.1,199.6 397.7,198.5 402.2,197.3 406.7,196.1 411.2,194.9 415.6,193.6 420.0,192.2 424.3,190.9 428.5,189.4 432.7,187.9 436.8,186.3 440.8,184.7 444.7,183.0 448.6,181.2 452.4,179.3 456.1,177.3 459.7,175.3 463.2,173.2 466.6,171.0 469.9,168.7 473.2,166.3 476.3,163.8 479.3,161.2 482.2,158.5 485.0,155.7 487.8,152.8 490.4,149.8 492.9,146.8 495.3,143.6 497.6,140.3 499.8,137.0 501.9,133.5 503.9,130.0 505.8,126.3 507.6,122.6 509.3,118.8 511.0,114.9 512.5,110.9 514.0,106.9 515.4,102.8 516.7,98.6 518.0,94.3 519.2,90.0 520.3,85.6 521.4,81.2 522.4,76.7 523.4,72.2 524.3,67.6 525.2,63.1 526.0,58.4 526.8,53.8 527.7,49.1 528.4,44.4 529.2,39.7 530.0,35.0" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
<polyline points="370.0,205.0 375.6,204.9 381.2,204.7 386.8,204.5 392.4,204.3 397.9,204.1 403.4,203.9 408.9,203.5 414.3,203.2 419.6,202.8 424.8,202.3 430.0,201.7 435.1,201.1 440.1,200.3 445.0,199.5 449.8,198.6 454.5,197.6 459.1,196.4 463.5,195.2 467.8,193.8 472.0,192.3 476.1,190.7 480.0,189.0 483.7,187.1 487.4,185.1 490.9,182.9 494.2,180.6 497.4,178.2 500.4,175.6 503.2,172.8 506.0,169.9 508.5,166.9 510.9,163.7 513.2,160.4 515.3,157.0 517.2,153.4 519.0,149.6 520.7,145.7 522.2,141.7 523.5,137.6 524.8,133.3 525.9,128.9 526.9,124.4 527.7,119.8 528.5,115.0 529.1,110.2 529.6,105.3 530.0,100.2 530.4,95.1 530.6,89.9 530.8,84.6 530.9,79.3 530.9,73.9 530.9,68.4 530.8,62.9 530.7,57.4 530.6,51.8 530.4,46.2 530.2,40.6 530.0,35.0" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
<polyline points="370.0,205.0 373.4,202.8 376.8,200.5 380.2,198.3 383.6,196.1 387.0,193.8 390.4,191.6 393.8,189.3 397.1,187.0 400.5,184.8 403.8,182.4 407.1,180.1 410.4,177.8 413.6,175.4 416.9,173.0 420.1,170.6 423.3,168.2 426.4,165.7 429.5,163.2 432.6,160.7 435.7,158.2 438.7,155.6 441.7,153.0 444.7,150.3 447.6,147.7 450.5,145.0 453.4,142.2 456.2,139.4 459.0,136.6 461.7,133.8 464.5,130.9 467.1,128.0 469.8,125.0 472.4,122.0 474.9,119.0 477.5,116.0 480.0,112.9 482.4,109.8 484.8,106.6 487.2,103.4 489.6,100.2 491.9,97.0 494.2,93.7 496.5,90.4 498.7,87.1 500.9,83.7 503.1,80.3 505.3,76.9 507.4,73.5 509.5,70.1 511.6,66.6 513.7,63.1 515.8,59.7 517.8,56.2 519.9,52.7 521.9,49.1 523.9,45.6 526.0,42.1 528.0,38.5 530.0,35.0" fill="none" stroke="#970E53" stroke-width="2"/>
<text x="480.0" y="120.0" text-anchor="start" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >chemin réel</text>
<text x="370.0" y="80.0" text-anchor="start" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >chemins envisagés</text>
<circle cx="370" cy="205" r="4.5" fill="#970E53"/>
<circle cx="530" cy="35" r="4.5" fill="#970E53"/>
<text x="380.0" y="209.0" text-anchor="start" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >début fixé</text>
<text x="520.0" y="39.0" text-anchor="end" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >fin fixée</text>
<text x="450.0" y="240.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >d'un seul bloc : l'histoire entière est contrainte</text>
</svg>
</div>
<p class="legende">À gauche, une loi «&nbsp;pas à pas&nbsp;»&nbsp;: l'état à un instant détermine l'état à l'instant suivant. À droite, une loi «&nbsp;globale&nbsp;»&nbsp;: l'histoire entière est sélectionnée d'un coup parmi toutes les histoires possibles entre un début et une fin fixés.</p>

Ce point de vue est plus familier qu'il n'y paraît&nbsp;: c'est celui du **principe de moindre action**. En mécanique lagrangienne, le chemin suivi par un système entre deux instants est celui qui rend l'action stationnaire, et il est déterminé d'un seul bloc, en tenant compte de ses deux extrémités (voir le [panorama du principe de moindre action](../../meca/action/)). Mais si l'approche lagrangienne est omniprésente en physique, on la cantonne d'ordinaire à un rôle de calcul, sans considérer qu'elle puisse décrire la manière dont la nature «&nbsp;fonctionne&nbsp;» réellement.

La relativité générale offre un autre point de contact. Ses équations portent naturellement sur l'espace-temps tout entier&nbsp;: une solution des équations d'Einstein décrit une histoire complète de l'univers. On peut certes, dans les cas usuels, les réécrire comme une évolution pas à pas à partir d'un instant initial, mais certaines solutions (celles qui contiennent des boucles temporelles, par exemple) n'admettent pas une telle lecture. Les lois de la gravitation sont donc, elles aussi, compatibles avec une vision globale du temps.

### Rétrocausalité

La rétrocausalité est une autre façon d'expliquer les corrélations à distance. Le temps reste ici local, mais à la chaîne causale habituelle, du passé vers le futur, s'en ajoute une du futur vers le passé. L'idée remonte au physicien Olivier Costa de Beauregard (1953)&nbsp;: l'influence du choix d'Alice n'a pas besoin de franchir l'intervalle de type espace qui la sépare de Bob, si elle passe par la source, en «&nbsp;zigzag&nbsp;».

<div class="svg-container">
<svg viewBox="0 12 600 259" role="img" aria-label="L'explication rétrocausale : le choix de mesure d'Alice en A influence la source S en remontant le temps le long du trajet de la particule, puis l'influence redescend vers B. Chaque étape reste à l'intérieur des cônes de lumière." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="zax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<defs><marker id="zm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#970E53"/></marker></defs>
<defs><marker id="zb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L9,5 L0,9 Z" fill="#004D80"/></marker></defs>
<line x1="40.0" y1="265.0" x2="40.0" y2="25.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#zax)"/>
<text x="52.0" y="30.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">t</tspan></text>
<line x1="40.0" y1="265.0" x2="580.0" y2="265.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#zax)"/>
<text x="578.0" y="258.0" text-anchor="end" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" ><tspan font-style="italic">x</tspan></text>
<line x1="300.0" y1="240.0" x2="150.0" y2="90.0" stroke="#a6c1d3" stroke-width="4" />
<line x1="300.0" y1="240.0" x2="450.0" y2="90.0" stroke="#a6c1d3" stroke-width="4" />
<line x1="151.4" y1="105.6" x2="284.4" y2="238.6" stroke="#970E53" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#zm)"/>
<line x1="315.6" y1="238.6" x2="448.6" y2="105.6" stroke="#004D80" stroke-width="1.8" marker-end="url(#zb)"/>
<circle cx="300" cy="240" r="5" fill="#004D80"/>
<text x="300.0" y="262.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">S</text>
<circle cx="150" cy="90" r="5" fill="#006C65"/>
<text x="150.0" y="78.0" text-anchor="middle" font-size="14" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-weight="bold">A</text>
<circle cx="450" cy="90" r="5" fill="#970E53"/>
<text x="450.0" y="78.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-weight="bold">B</text>
<text x="150.0" y="175.0" text-anchor="end" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >le choix d'Alice remonte</text>
<text x="150.0" y="191.0" text-anchor="end" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >le temps jusqu'à la source</text>
<text x="450.0" y="175.0" text-anchor="start" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >puis l'influence</text>
<text x="450.0" y="191.0" text-anchor="start" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >redescend vers Bob</text>
</svg>
</div>
<p class="legende">L'explication en zigzag&nbsp;: le choix de mesure d'Alice influence la source en remontant le temps le long du trajet de la particule, puis la source influence le résultat de Bob. Chaque étape reste à l'intérieur des cônes de lumière.</p>

On peut montrer, semble-t-il ([Price, 2010](https://arxiv.org/pdf/1002.0906)&nbsp;; [Leifer et Pusey, 2017](https://arxiv.org/pdf/1607.07871)), que toute interprétation de la mécanique quantique à la fois symétrique par renversement du temps et locale doit faire intervenir la rétrocausalité. Remarquons que la mécanique classique est elle-même symétrique dans le temps et locale, sans être rétrocausale&nbsp;: c'est le caractère discret des résultats de mesure quantiques qui semble imposer des influences remontant le temps.

L'[interprétation transactionnelle](https://arxiv.org/pdf/2302.06748) de John Cramer est un exemple de théorie rétrocausale. Tout événement quantique y résulte d'une «&nbsp;transaction&nbsp;» entre une onde émise vers le futur par la source et une onde de confirmation envoyée vers le passé par l'absorbeur, à la manière de la «&nbsp;poignée de main&nbsp;» de Wheeler et Feynman[^1].

[^1]: L'utilisation des solutions avancées des équations de Maxwell, et pas seulement des solutions retardées, avait déjà été proposée par Richard Feynman et John Archibald Wheeler en 1945 (théorie de l'absorbeur) pour résoudre le problème de l'énergie propre de l'électron.

Mais, comme dans les films de science-fiction, ces interactions avec le futur font naître des paradoxes du type [«&nbsp;paradoxe du grand-père&nbsp;»](https://fr.wikipedia.org/wiki/Paradoxe_du_grand-p%C3%A8re), dont on ne peut se protéger qu'au prix de contraintes fortes sur les conditions initiales et finales de l'univers, et sur les types d'interactions entre les deux.

Remarquons qu'une théorie globale (non locale dans le temps) est naturellement rétrocausale, puisque tout événement dépend de l'histoire entière. Mais il n'y a alors plus de flèche causale vers l'avant ou vers l'arrière, et donc plus de paradoxes temporels.

### Et les autres voies

D'autres interprétations, qui ne sont pas détaillées ici, choisissent encore d'autres hypothèses à abandonner&nbsp;:
<ul>
<li><b>accepter la non-localité</b>&nbsp;: dans la théorie de Bohm, les particules ont à chaque instant une position définie, mais le mouvement de chacune dépend instantanément de la position de toutes les autres. Le théorème de non-communication reste vérifié, mais la théorie a besoin d'une notion de simultanéité privilégiée, ce qui la met en tension avec la relativité&nbsp;;</li>
<li><b>renoncer à un résultat unique</b>&nbsp;: dans l'interprétation d'Everett (les «&nbsp;mondes multiples&nbsp;»), chaque mesure donne tous ses résultats possibles, dans des branches différentes, et les corrélations n'apparaissent que lorsque les résultats d'Alice et de Bob sont réunis&nbsp;;</li>
<li><b>changer d'espace</b>&nbsp;: pour les réalistes de la fonction d'onde, la non-localité n'est qu'apparente, car la réalité fondamentale est un champ local dans un espace à $3N$ dimensions (voir [Une ontologie à 3N dimensions](../3ndimensions/)).</li>
</ul>

> <b>Source</b> (certains passages ne sont qu'une traduction maladroite)&nbsp;:<br>
Emily Adlam, <i>Foundations of Quantum Mechanics</i>, Cambridge University Press, coll. &laquo;&nbsp;Elements in the Philosophy of Physics&nbsp;&raquo;, 2021

## L'expérience GHZ

Les premières expériences, de pensée puis réelles, qui ont battu en brèche le réalisme local étaient **statistiques**&nbsp;: pour violer une inégalité de Bell, il faut accumuler des mesures et faire des moyennes. L'expérience imaginée par Greenberger, Horne et Zeilinger (GHZ) est, elle, **déterministe**&nbsp;: la preuve ne repose plus sur une inégalité, mais sur une contradiction algébrique. En principe, une seule mesure suffit.

{{< youtube-plus id="htd_1lAj2Tg" ratio="16x9" width="800" shadow="false" rounded="true" >}}

### Stern-Gerlach et chaussettes

La vidéo commence par l'appareil de Stern-Gerlach. Un faisceau d'électrons qui le traverse ne donne que deux taches&nbsp;: le spin n'a que deux valeurs possibles, $\lvert\uparrow_i\rangle$ ou $\lvert\downarrow_i\rangle$, selon la direction $i$ de l'appareil. Et si l'on connaît le spin dans une direction, il est complètement indéterminé dans la direction perpendiculaire&nbsp;:

<div id="gros">

$$\lvert\uparrow_h\rangle = \frac{1}{\sqrt2}\bigl(\lvert\uparrow_v\rangle + \lvert\downarrow_v\rangle\bigr), \qquad \lvert\downarrow_h\rangle = \frac{1}{\sqrt2}\bigl(\lvert\uparrow_v\rangle - \lvert\downarrow_v\rangle\bigr).$$

</div>

C'est exactement la situation de la mesure de $\hat X$ sur l'état $\lvert0\rangle$ dans les [Notions fondamentales](../fondations/#le-qubit), ou des mesures successives de la [théorie-jouet de Spekkens](../spekkens/#des-mesures-incompatibles).

Puis viennent les chaussettes de Bertlmann&nbsp;: des corrélations à distance ne sont pas mystérieuses en elles-mêmes, tant que les chaussettes ont une couleur bien définie, même quand personne ne les regarde. Ce qui serait bizarre, c'est qu'elles n'aient aucune couleur avant d'être observées, et qu'elles se «&nbsp;décident&nbsp;» ensemble au dernier moment.

### Trois électrons et des règles de parité

L'expérience utilise trois électrons dans l'état intriqué

<div id="gros">

$$\Psi\_{\text{GHZ}} = \frac12\Bigl(\lvert\uparrow_h\uparrow_h\uparrow_h\rangle - \lvert\uparrow_h\downarrow_h\downarrow_h\rangle - \lvert\downarrow_h\uparrow_h\downarrow_h\rangle - \lvert\downarrow_h\downarrow_h\uparrow_h\rangle\Bigr).$$

</div>

Chaque électron traverse un appareil de Stern-Gerlach orienté au hasard, horizontalement ($h$) ou verticalement ($v$). Appelons «&nbsp;positive&nbsp;» une déviation vers le haut ou vers la droite. La vidéo montre, en réécrivant l'état dans les bases adaptées, que les résultats obéissent à des règles de parité strictes&nbsp;:
<ul>
<li>si les trois appareils sont horizontaux ($hhh$), le nombre de déviations positives est toujours <b>impair</b> (une ou trois)&nbsp;: c'est visible directement sur $\Psi_{\text{GHZ}}$&nbsp;;</li>
<li>si un seul appareil est horizontal ($hvv$, $vhv$ ou $vvh$), le nombre de déviations positives est toujours <b>pair</b> (zéro ou deux).</li>
</ul>

Connaître les déviations de deux électrons suffit donc à prédire celle du troisième. Ces déviations sont-elles fixées à l'avance, comme les couleurs des chaussettes&nbsp;?

### Le graphe de la contradiction

Supposons que chaque électron emporte un «&nbsp;plan&nbsp;» fixant sa déviation pour chacune des deux orientations possibles de son détecteur. Il y a six réponses à fixer&nbsp;: une pour chaque détecteur (1, 2 ou 3) et chaque orientation ($h$ ou $v$). Représentons-les par les six nœuds d'un graphe, et relions par une ligne les trois nœuds qui interviennent dans chacune des quatre configurations de mesure.

<div class="svg-container">
<svg viewBox="0 11 600 298" role="img" aria-label="Le graphe de l'argument GHZ : six nœuds (détecteur 1, 2 ou 3, réglé horizontalement ou verticalement) reliés par quatre lignes, une par configuration de mesure. Chaque nœud appartient à exactement deux lignes." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="gd" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L9,5 L0,10 Z" fill="#004D80"/></marker></defs>
<polyline points="110.0,280.0 200.0,150.0 300.0,40.0" fill="none" stroke="#970E53" stroke-width="4" stroke-linecap="round" stroke-opacity="0.8"/>
<polyline points="490.0,280.0 400.0,150.0 300.0,40.0" fill="none" stroke="#006C65" stroke-width="3" stroke-linecap="round" stroke-opacity="0.8"/>
<polyline points="110.0,280.0 300.0,195.0 400.0,150.0" fill="none" stroke="#006C65" stroke-width="3" stroke-linecap="round" stroke-opacity="0.8"/>
<polyline points="200.0,150.0 300.0,195.0 490.0,280.0" fill="none" stroke="#006C65" stroke-width="3" stroke-linecap="round" stroke-opacity="0.8"/>
<circle cx="300" cy="40" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="293.0" y="46.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">3</text>
<line x1="301" y1="40" x2="315" y2="40" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<circle cx="200" cy="150" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="193.0" y="156.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">2</text>
<line x1="201" y1="150" x2="215" y2="150" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<circle cx="400" cy="150" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="393.0" y="156.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">2</text>
<line x1="408" y1="142" x2="408" y2="158" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<circle cx="300" cy="195" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="293.0" y="201.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">3</text>
<line x1="308" y1="187" x2="308" y2="203" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<circle cx="110" cy="280" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="103.0" y="286.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="111" y1="280" x2="125" y2="280" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<circle cx="490" cy="280" r="23" fill="#fff" stroke="#004D80" stroke-width="1.6"/>
<text x="483.0" y="286.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">1</text>
<line x1="498" y1="272" x2="498" y2="288" stroke="#004D80" stroke-width="1.6" marker-start="url(#gd)" marker-end="url(#gd)"/>
<line x1="430" y1="40" x2="470" y2="40" stroke="#970E53" stroke-width="4" stroke-linecap="round"/>
<text x="478.0" y="44.0" text-anchor="start" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >hhh : nombre impair</text>
<line x1="430" y1="64" x2="470" y2="64" stroke="#006C65" stroke-width="3" stroke-linecap="round"/>
<text x="478.0" y="68.0" text-anchor="start" font-size="12" fill="#006C65" font-family="Georgia,'Times New Roman',serif" >hvv, vhv, vvh : pair</text>
<text x="478.0" y="84.0" text-anchor="start" font-size="11" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >(déviations positives)</text>
<text x="40.0" y="44.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >nœud = détecteur 1, 2 ou 3</text>
<text x="40.0" y="62.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >flèche horizontale : h, verticale : v</text>
</svg>
</div>
<p class="legende">Le graphe de la vidéo. Chaque ligne relie les trois réponses utilisées dans une configuration de mesure&nbsp;: la ligne magenta ($hhh$) doit compter un nombre impair de déviations positives, les trois lignes teal ($hvv$, $vhv$, $vvh$) un nombre pair.</p>

Additionnons les nombres de déviations positives sur les quatre lignes&nbsp;: un nombre impair plus trois nombres pairs donne un nombre **impair**. Mais chaque nœud appartient à exactement deux lignes&nbsp;: dans cette somme, chaque réponse est comptée deux fois, et le total est donc **pair**. Contradiction&nbsp;!

On peut dire la même chose avec des signes. Notons $s = +1$ pour une déviation positive et $s = -1$ pour une déviation négative. Un nombre impair de déviations positives parmi trois revient à un produit $s\_1 s\_2 s\_3 = +1$, un nombre pair à un produit $-1$. Les règles de parité s'écrivent alors

<div id="gros">

$$s\_1^h s\_2^h s\_3^h = +1, \qquad s\_1^h s\_2^v s\_3^v = -1, \qquad s\_1^v s\_2^h s\_3^v = -1, \qquad s\_1^v s\_2^v s\_3^h = -1.$$

</div>

En multipliant ces quatre égalités, chaque $s$ apparaît deux fois, donc le membre de gauche vaut $+1$, alors que le membre de droite vaut $(+1)(-1)^3 = -1$.

<div id="theo">

Aucun plan fixé à l'avance ne peut reproduire les quatre règles de parité prédites par la mécanique quantique. Contrairement au test de Bell, la contradiction est certaine, et non statistique.

</div>

L'expérience a été réalisée avec trois photons intriqués par l'équipe d'Anton Zeilinger (2000), et ses résultats confirment les règles de parité quantiques. Comme le conclut la vidéo, il faut alors renoncer à des réponses préétablies, et accepter une forme de concertation instantanée à distance, ou l'une des autres options présentées plus haut.

Remarque&nbsp;: l'état $\Psi_{\text{GHZ}}$ est un état stabilisateur, et l'argument n'utilise que des mesures de type «&nbsp;Pauli&nbsp;». C'est l'un des endroits où le formalisme stabilisateur, que la [théorie-jouet de Spekkens](../spekkens/#ce-que-le-jouet-ne-peut-pas-reproduire) imite si bien pour un ou deux systèmes, se révèle non local. Dans une base adaptée (spins mesurés selon la troisième direction, perpendiculaire à $h$ et à $v$), cet état s'écrit comme une superposition de «&nbsp;tous les spins en haut&nbsp;» et de «&nbsp;tous les spins en bas&nbsp;», à une phase près&nbsp;: c'est la forme sous laquelle on présente habituellement les états GHZ.
