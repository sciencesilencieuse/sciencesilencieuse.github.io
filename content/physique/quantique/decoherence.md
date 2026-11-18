+++
title = "Décohérence et darwinisme quantique"
date = 2026-11-18T08:00:00+01:00
weight = 9
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
overflow-x:auto;
}
</style>

<style>
.rp-log
{
    max-width: 34rem;
    margin: 0.3em auto 0.6em;
    font-size: 0.9em;
    color: #334155;
    min-height: 3.6em;
    text-align: center;
}
.ev-ligne
{
    display: flex;
    justify-content: center;
    gap: 22px;
    margin: 14px 0 6px;
}
.ev-carte
{
    text-align: center;
    font-family: Georgia, 'Times New Roman', serif;
}
.ev-s, .ev-e
{
    width: 38px;
    height: 38px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95em;
}
.ev-s
{
    border-radius: 50%;
    color: #fff;
}
.ev-e
{
    border: 2px solid #334155;
    border-radius: 7px;
    background: #fff;
    color: #334155;
}
.ev-lien
{
    width: 2px;
    height: 20px;
    margin: 0 auto;
    background: #94a3b8;
}
.ev-verdict
{
    text-align: center;
    min-height: 2.8em;
    margin: 0.3em auto 0.2em;
    max-width: 34rem;
    color: #334155;
}
.dq-obs
{
    max-width: 38rem;
    margin: 0.2em auto 0.5em;
    font-size: 0.88em;
    color: #334155;
    min-height: 6.5em;
}
.dq-obs div
{
    margin: 0.15em 0;
}
.dq-pastille
{
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    margin-right: 0.4em;
    vertical-align: -0.05em;
}
</style>

<h1>Décohérence et darwinisme quantique&nbsp;: comment un monde classique émerge d'un univers quantique</h1>

Selon la théorie quantique, une particule peut être à deux endroits à la fois, et un chat dans un état « mort + vivant ». Pourtant, personne n'a jamais vu un fauteuil en superposition, et deux personnes qui regardent le même fauteuil s'accordent sur l'endroit où il se trouve. D'où vient ce monde ordinaire, net et partagé&nbsp;?

Wojciech Zurek, du laboratoire de Los Alamos, travaille sur cette question depuis le début des années 1980. Il en a fait la synthèse en 2025 dans un livre, *Decoherence and Quantum Darwinism: From Quantum Foundations to Classical Reality* (Cambridge University Press). Cette page en résume les thèses. Plutôt que de suivre l'ordre des chapitres, elle suit l'ordre des **questions**&nbsp;: chaque idée de Zurek répond à une difficulté laissée ouverte par la précédente, et c'est cet enchaînement qui la rend convaincante.

<div class="encadre">
<div class="encadre-titre">La carte du raisonnement</div>
<ol>
<li><b>Qu'est-ce qu'une mesure&nbsp;?</b> Zurek part d'une exigence modeste, la <i>répétabilité</i>, et en tire une conséquence forte&nbsp;: les états que l'on peut enregistrer sans les perturber sont deux à deux orthogonaux.</li>
<li><b>Qui choisit lesquels&nbsp;?</b> L'environnement. En surveillant l'appareil, il ne laisse survivre que des «&nbsp;états pointeurs&nbsp;»&nbsp;: c'est la <i>décohérence</i>.</li>
<li><b>D'où viennent les probabilités&nbsp;?</b> De la symétrie de l'intrication, par l'<i>envariance</i>&nbsp;: la règle de Born ne serait pas un postulat.</li>
<li><b>Pourquoi les faits sont-ils partagés&nbsp;?</b> Parce que l'environnement en garde des copies innombrables&nbsp;: c'est le <i>darwinisme quantique</i>. Un fait objectif est un fait dont chacun peut lire une copie.</li>
<li><b>Que veut dire « exister »&nbsp;?</b> C'est l'<i>interprétation existentielle</i>&nbsp;: pour un état quantique, exister, c'est être répliqué.</li>
</ol>
</div>

## Le parti pris&nbsp;: tout est quantique

Il y a deux façons classiques de s'embarrasser du problème de la mesure. Dans l'interprétation de **Copenhague**, l'appareil est classique par décret&nbsp;: on trace une frontière arbitraire entre le monde quantique et ce qui l'observe, et l'on ajoute à la théorie une règle d'effondrement. Dans celle d'**Everett**, il n'y a ni frontière ni effondrement, mais il faut alors expliquer dans quelle base les « mondes » se séparent, et d'où viennent les probabilités.

Zurek garde d'Everett l'idée que **tout** est quantique, observateur compris, et pose la question en ingénieur&nbsp;: *en n'utilisant que les règles de base, que peut-on démontrer&nbsp;?* Il en retient trois&nbsp;:

<ul>
<li>l'état d'un système est un vecteur d'un espace de Hilbert&nbsp;;</li>
<li>l'évolution est unitaire (équation de Schrödinger)&nbsp;;</li>
<li>un système composé est décrit par le produit tensoriel de ses parties.</li>
</ul>

Ni l'effondrement de la fonction d'onde ni la règle de Born ne figurent dans la liste. Ce sont précisément les « postulats de mesure » que les manuels ajoutent à la main (voir la page [Notions fondamentales](../fondations/)). Si l'on en a besoin, il faut les **déduire**.

## Qu'est-ce qu'une mesure&nbsp;? La répétabilité

### La pré-mesure ne suffit pas

Mesurer un qubit $\alpha|0\rangle+\beta|1\rangle$, c'est le faire interagir avec un appareil $A$ de façon que l'état de $A$ *dépende* de celui du qubit. Si l'appareil part de son état « prêt », une porte CNOT (par exemple) donne

<p style="text-align:center;">
$\displaystyle(\alpha|0\rangle+\beta|1\rangle)\,|A_{\text{prêt}}\rangle\;\longrightarrow\;\alpha\,|0\rangle|A_0\rangle+\beta\,|1\rangle|A_1\rangle .$
</p>

Rien n'a été « choisi »&nbsp;: l'état final est une superposition d'enregistrements, et l'opération est parfaitement réversible (c'est la « copie réversible » de la page sur le [démon de Maxwell et Landauer](../../phistat/landauer/)). Mais toute interaction qui corrèle deux systèmes ne mérite pas le nom de mesure. Qu'est-ce qui fait d'une corrélation un *enregistrement*&nbsp;?

### L'exigence de répétabilité

Zurek met au centre une propriété que tout le monde admet sans la formuler&nbsp;: **si l'on refait la mesure aussitôt, on obtient le même résultat.** Sans cela, le « résultat » ne serait pas une information sur le système, mais un bruit. Un thermomètre dont l'indication change quand on le relit ne mesure rien.

L'animation ci-dessous met cette propriété en scène. Le qubit est représenté sur un disque de Bloch (une coupe de la sphère de Bloch&nbsp;: $|0\rangle$ en haut, $|1\rangle$ en bas, $|+\rangle$ à droite, $|-\rangle$ à gauche). On mesure successivement «&nbsp;haut ou bas&nbsp;» ($\sigma\_z$) ou «&nbsp;droite ou gauche&nbsp;» ($\sigma\_x$). Les résultats sont tirés au hasard avec les probabilités de Born (c'est la règle des manuels, que nous cherchons à comprendre).

<div class="svg-container">
<svg id="rp-svg" viewBox="0 0 600 290" role="img" aria-label="Disque de Bloch d'un qubit. On mesure successivement le qubit selon l'axe vertical ou l'axe horizontal. Une mesure répétée selon le même axe redonne le même résultat, une mesure selon l'autre axe le rebat au hasard." style="width:100%;max-width:600px;height:auto;"></svg>
<div class="fig-commandes"><button type="button" id="rp-z">mesurer haut/bas (σ<sub>z</sub>)</button> <button type="button" id="rp-x">mesurer droite/gauche (σ<sub>x</sub>)</button> <button type="button" id="rp-new">↺ nouvel état</button></div>
<div class="rp-log" id="rp-log">Cliquez sur « mesurer haut/bas » deux fois de suite, puis sur « mesurer droite/gauche ».</div>
</div>
<p class="legende">Après une mesure, l'état est l'un des deux états propres de la grandeur mesurée. Si l'on mesure la même grandeur, on retrouve donc toujours le même résultat&nbsp;: la mesure est répétable. Mesurer l'autre grandeur rebat les cartes, car les états propres de $\sigma_x$ sont des superpositions de ceux de $\sigma_z$.</p>

### Ce que la répétabilité impose aux états

L'observation clé de Zurek est que la répétabilité n'est pas innocente pour une théorie *unitaire*. Écrivons-la précisément. Un appareil mesure de façon répétable deux états $|\psi\rangle$ et $|\varphi\rangle$ s'il les **enregistre sans les perturber**&nbsp;:

<p style="text-align:center;">
$\displaystyle U\,|\psi\rangle|A_0\rangle=|\psi\rangle|A_\psi\rangle,\qquad U\,|\varphi\rangle|A_0\rangle=|\varphi\rangle|A_\varphi\rangle .$
</p>

(Le système est resté dans l'état $|\psi\rangle$&nbsp;: si on le mesure encore, on retrouvera $|A_\psi\rangle$.) Or une évolution unitaire conserve les produits scalaires. En les comparant avant et après&nbsp;:

<p style="text-align:center;">
$\displaystyle\langle\psi|\varphi\rangle\,\langle A_0|A_0\rangle=\langle\psi|\varphi\rangle\,\langle A_\psi|A_\varphi\rangle
\quad\Longrightarrow\quad
\langle\psi|\varphi\rangle\,\bigl(1-\langle A_\psi|A_\varphi\rangle\bigr)=0 .$
</p>

<div id="theo">

**Répétabilité et orthogonalité.** Si l'appareil distingue $|\psi\rangle$ de $|\varphi\rangle$ (les enregistrements $|A\_\psi\rangle$ et $|A\_\varphi\rangle$ diffèrent), alors $\langle\psi|\varphi\rangle=0$&nbsp;: **les deux états sont orthogonaux.**

</div>

La preuve tient en une ligne, et c'est la parente du théorème de non-clonage (Wootters et Zurek, 1982)&nbsp;: la même conservation des produits scalaires qui interdit de copier un état quelconque interdit d'enregistrer, sans le perturber, deux états non orthogonaux. Elle a trois conséquences, que le chapitre 2 du livre développe sous le titre « des événements discrets à partir de la répétabilité »&nbsp;:

<ul>
<li><b>Les résultats sont discrets.</b> L'ensemble des états qu'un appareil peut enregistrer de façon répétable est une famille orthogonale, donc dénombrable. C'est l'origine des « sauts quantiques »&nbsp;: les états d'arrivée possibles d'une mesure sont un petit nombre d'états bien distincts, et non un continuum. Ce n'est pas une règle ajoutée, c'est une conséquence de l'unitarité et de la répétabilité.</li>
<li><b>L'observable mesurée, ce sont ces états.</b> Dire qu'un appareil mesure «&nbsp;$\sigma_z$&nbsp;» ne veut rien dire de plus que&nbsp;: il laisse intacts les états $|0\rangle$ et $|1\rangle$. Les états propres définissent la grandeur mesurée, et non l'inverse.</li>
<li><b>Une superposition ne peut pas être enregistrée intacte.</b> Si le système est dans $\alpha|0\rangle+\beta|1\rangle$, l'appareil ne peut pas l'enregistrer sans la modifier&nbsp;: il l'intrique (c'est la pré-mesure ci-dessus). C'est la partie « effondrement » du problème, que la suite doit expliquer.</li>
</ul>

(Dans l'article de revue de 2003, la répétabilité immédiate figure parmi les axiomes de la mesure&nbsp;; d'après son titre, le chapitre 2 du livre en fait un point de départ dont on *déduit* la discrétion des résultats. Je n'ai lu que les résumés de ce chapitre, et non son texte.)

### Une mesure répétable est une copie

Notez ce que la répétabilité dit de l'enregistrement. Si le résultat reste vrai quand on le relit, c'est que $|A\_k\rangle$ est une **copie** de la valeur $k$, que l'on peut consulter sans la perturber. C'est pour cela que mesurer, au sens de Bennett, c'est copier&nbsp;; et c'est pour cela que seule une famille orthogonale se laisse copier. Le non-clonage n'interdit pas la mesure, il en dicte la grammaire.

### Mais quelle famille&nbsp;?

Il reste une difficulté. La pré-mesure ne dit pas *quelles* valeurs l'appareil enregistre. Dans le cas simple $\alpha=\beta$, on peut réécrire le même état intriqué dans une autre base&nbsp;:

<p style="text-align:center;">
$\displaystyle|0\rangle|A_0\rangle+|1\rangle|A_1\rangle\;=\;|+\rangle|A_+\rangle+|-\rangle|A_-\rangle,\qquad |A_\pm\rangle=\frac{|A_0\rangle\pm|A_1\rangle}{\sqrt2}.$
</p>

Lu de gauche à droite, l'appareil a mesuré «&nbsp;haut ou bas&nbsp;»&nbsp;; lu de droite à gauche, «&nbsp;droite ou gauche&nbsp;». L'état ne tranche pas&nbsp;: c'est ce que Zurek appelle l'*ambiguïté de base*, héritée du principe de superposition. Dans le cas général, la décomposition de Schmidt de la paire système-appareil est unique, mais elle dépend de l'état présenté, alors qu'un appareil doit mesurer **la même grandeur quel que soit l'état qu'on lui présente**. Il manque un troisième acteur pour fixer la base.

## L'environnement choisit la base&nbsp;: décohérence et einselection

### Un appareil n'est jamais seul

Un appareil macroscopique n'est jamais isolé&nbsp;: il est baigné de lumière, d'air, de rayonnement thermique. Ce milieu est l'**environnement** $E$.

<div class="svg-container">
<svg viewBox="0 0 600 190" role="img" aria-label="Trois acteurs : le système S, l'appareil A et l'environnement E. S et A sont corrélés par la mesure, A et E par la décohérence. La paire S-A ne dit pas la base, l'environnement la fixe." style="width:100%;max-width:600px;height:auto;">
<defs><marker id="ch-pt" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#475569"/></marker></defs>
<rect x="30" y="40" width="120" height="64" rx="10" fill="#DCEFFE" stroke="#004D80" stroke-width="1.6"/>
<text x="90" y="68" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-weight="bold">système S</text>
<text x="90" y="90" text-anchor="middle" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif">un qubit</text>
<rect x="240" y="40" width="120" height="64" rx="10" fill="#FBF1DC" stroke="#C2770B" stroke-width="1.6"/>
<text x="300" y="68" text-anchor="middle" font-size="15" fill="#8a5508" font-family="Georgia,'Times New Roman',serif" font-weight="bold">appareil A</text>
<text x="300" y="90" text-anchor="middle" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif">le registre</text>
<rect x="450" y="40" width="120" height="64" rx="10" fill="#E5F3E0" stroke="#006C65" stroke-width="1.6"/>
<text x="510" y="68" text-anchor="middle" font-size="15" fill="#006C65" font-family="Georgia,'Times New Roman',serif" font-weight="bold">environnement E</text>
<text x="510" y="90" text-anchor="middle" font-size="12" fill="#334155" font-family="Georgia,'Times New Roman',serif">photons, air…</text>
<line x1="152" y1="72" x2="236" y2="72" stroke="#475569" stroke-width="2" marker-end="url(#ch-pt)"/>
<line x1="362" y1="72" x2="446" y2="72" stroke="#475569" stroke-width="2" marker-end="url(#ch-pt)"/>
<text x="194" y="60" text-anchor="middle" font-size="12" fill="#475569" font-family="Georgia,'Times New Roman',serif">mesure</text>
<text x="404" y="60" text-anchor="middle" font-size="12" fill="#475569" font-family="Georgia,'Times New Roman',serif">décohérence</text>
<text x="194" y="124" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">corrèle S et A</text>
<text x="404" y="124" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">corrèle A et E</text>
<text x="300" y="162" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif">α |0⟩|A₀⟩|E₀⟩ + β |1⟩|A₁⟩|E₁⟩</text>
</svg>
</div>
<p class="legende">La mesure corrèle le système et l'appareil&nbsp;; l'environnement, lui, corrèle ses propres états avec ceux de l'appareil. Rien de tout cela ne viole l'unitarité&nbsp;: l'état global reste pur.</p>

Or l'environnement **surveille** l'appareil en permanence, sans que personne le lui ait demandé&nbsp;: un photon qui rebondit sur un objet porte la trace de *l'endroit* où il se trouve. L'environnement fait donc de l'appareil ce que l'appareil fait du système&nbsp;: il l'enregistre, et il le fait en continu, des milliards de fois par seconde. La question devient&nbsp;: **quels états de l'appareil supportent cette surveillance sans être perturbés&nbsp;?** C'est la question de la répétabilité, posée à l'environnement. Et la réponse est la même&nbsp;: ceux que l'environnement distingue sans les modifier forment une famille orthogonale. Zurek les appelle **états pointeurs**, et le tri qui les sélectionne **einselection** (pour «&nbsp;environment-induced superselection&nbsp;»). Le «&nbsp;tamis de prévisibilité&nbsp;» est la procédure pratique&nbsp;: on essaie tous les états de l'appareil, et l'on retient ceux qui s'intriquent le moins avec l'environnement, donc ceux qui restent prévisibles.

### La décohérence en une ligne

Calculons ce que devient l'état du couple $SA$ quand on ignore l'environnement. L'état global est $\alpha|0\rangle|A\_0\rangle|E\_0\rangle+\beta|1\rangle|A\_1\rangle|E\_1\rangle$. Les termes croisés de la matrice densité réduite de $SA$ sont multipliés par le produit scalaire

<p style="text-align:center;">
$\displaystyle r=\langle E_1|E_0\rangle,\qquad
\rho_{SA}=|\alpha|^2\,|0A_0\rangle\langle0A_0|+|\beta|^2\,|1A_1\rangle\langle1A_1|+\bigl(\alpha\beta^*\,r\,|0A_0\rangle\langle1A_1|+\text{h.c.}\bigr).$
</p>

Si l'environnement a enregistré le résultat de façon parfaitement distincte ($E\_0\perp E\_1$), alors $r=0$ et les termes croisés (les «&nbsp;cohérences&nbsp;») disparaissent&nbsp;: il ne reste que les populations $|\alpha|^2$ et $|\beta|^2$. Pourquoi $r$ devient-il si petit&nbsp;? Parce que l'environnement est fait de nombreuses parties, et que chacune n'enregistre qu'un peu&nbsp;: chaque photon, chaque molécule ajoute un facteur de module inférieur à 1. Un produit de $N$ facteurs est de l'ordre de $q^N$, et décroît donc exponentiellement.

Le modèle le plus simple est celui d'un qubit couplé à $N$ spins par une interaction de la forme $\sigma\_z\otimes\sum\_k g\_k\sigma\_z^{(k)}$. L'animation suivante trace la cohérence restante $r(t)$ (la force totale du couplage est la même pour tous les $N$, répartie en $N$ morceaux).

<div class="svg-container">
<svg id="dc-svg" viewBox="0 0 600 290" role="img" aria-label="À gauche, la matrice densité réduite d'un qubit : les populations restent constantes tandis que les cohérences s'effacent. À droite, la courbe de la cohérence restante en fonction du temps, pour un environnement de N spins." style="width:100%;max-width:600px;height:auto;"></svg>
<div class="fig-commandes"><span>spins de l'environnement&nbsp;:</span> <button type="button" class="dc-n" data-n="1" aria-pressed="false">1</button> <button type="button" class="dc-n" data-n="3" aria-pressed="false">3</button> <button type="button" class="dc-n" data-n="10" aria-pressed="true">10</button> <button type="button" class="dc-n" data-n="100" aria-pressed="false">100</button> <button type="button" id="dc-go">▶ Rejouer</button></div>
</div>
<p class="legende">Les populations (en bleu) ne bougent pas&nbsp;; les cohérences (en magenta) sont multipliées par $r(t)$. Avec un seul spin, la cohérence disparaît puis <i>revient</i>&nbsp;: l'information circule entre $S$ et $E$ sans se perdre. Plus l'environnement est grand, plus ce retour devient improbable, jusqu'à devenir inobservable.</p>

Ce dernier point est important&nbsp;: la décohérence n'est pas un effacement. L'information sur la phase de la superposition n'est pas détruite, elle est dispersée dans un grand nombre de degrés de liberté, d'où elle ne revient pratiquement jamais. C'est le même type d'irréversibilité que celle de l'effacement de Landauer&nbsp;: une irréversibilité de fait, pas de principe.

### Les états pointeurs

Dans ce modèle, l'interaction ne modifie pas les états $|0\rangle$ et $|1\rangle$ du système&nbsp;: elle change seulement l'état de l'environnement selon que le système est en $|0\rangle$ ou en $|1\rangle$. Ces deux états sont donc les «&nbsp;états pointeurs&nbsp;»&nbsp;; les superpositions, elles, s'intriquent avec $E$ et perdent leur cohérence. Si l'interaction était de la forme $\sigma\_x\otimes\cdots$, les états pointeurs seraient $|\pm\rangle$.

**C'est donc la forme de l'interaction avec l'environnement, et non le système, ni l'observateur, qui fixe la base**&nbsp;: c'est la réponse à l'ambiguïté de base. L'animation suivante la visualise sur le disque de Bloch. Tous les états purs d'un plan sont représentés par des points sur le cercle&nbsp;; on choisit l'axe de couplage, puis on laisse l'environnement agir.

<div class="svg-container">
<svg id="ei-svg" viewBox="0 0 600 300" role="img" aria-label="Disque de Bloch : des états purs sur le cercle. Sous l'effet de la décohérence, ils glissent perpendiculairement vers l'axe de couplage choisi. Seuls les deux états de cet axe, les états pointeurs, restent purs." style="width:100%;max-width:600px;height:auto;"></svg>
<div class="fig-commandes"><label for="ei-phi">axe de couplage&nbsp;:</label> <input type="range" id="ei-phi" min="-90" max="90" step="5" value="0"> <span id="ei-phi-val">0°</span></div>
<div class="fig-commandes"><label for="ei-t">temps&nbsp;:</label> <input type="range" id="ei-t" min="0" max="100" step="1" value="0"> <button type="button" id="ei-go">▶ Décohérence</button></div>
</div>
<p class="legende">Chaque point est un état pur du qubit. L'environnement fait fondre les cohérences par rapport à l'axe de couplage&nbsp;: les points glissent perpendiculairement à cet axe et s'écrasent dessus (un point à l'intérieur du disque est un état mixte). Seuls les deux états de l'axe (en orange) ne bougent pas&nbsp;: ils sont les <b>états pointeurs</b>. Déplacez l'axe&nbsp;: la base privilégiée suit.</p>

### Combien de temps&nbsp;?

Pour un objet massif, Zurek donne le taux de décohérence d'une superposition de deux positions distantes de $\Delta x$&nbsp;:

<p style="text-align:center;">
$\displaystyle\tau_D^{-1}=\gamma\left(\frac{\Delta x}{\lambda_T}\right)^2,\qquad \lambda_T=\frac{\hbar}{\sqrt{2Mk_BT}},$
</p>

où $\gamma=\tau\_R^{-1}$ est le taux de relaxation (la rapidité avec laquelle l'objet perd son énergie par frottement), $M$ sa masse et $\lambda\_T$ la longueur d'onde thermique de de Broglie. Le rapport $(\Delta x/\lambda\_T)^2$ est gigantesque dès que l'objet est macroscopique&nbsp;: pour un gramme à température ambiante et une séparation d'un centimètre, la décohérence est environ **$10^{40}$ fois plus rapide que la relaxation**. Un chat de Schrödinger n'a jamais le temps d'exister. Zurek lui-même invite à prendre ces estimations avec précaution&nbsp;: le taux ne peut pas dépasser une valeur limite fixée par les propriétés de l'environnement, et il sature pour de grandes séparations.

Le livre étend ce programme à l'espace des phases (chapitre 6), c'est-à-dire à la description classique par positions et impulsions. Il y relie la décohérence au second principe&nbsp;: dans une dynamique chaotique, la production d'entropie est liée aux exposants de Lyapunov. L'entropie que nous voyons croître est alors celle des corrélations entre le système et son environnement (voir la page sur [l'information et la thermodynamique](../../phistat/landauer/)). Il affirme aussi que la mécanique newtonienne et la thermodynamique d'équilibre découlent des mêmes symétries d'intrication que la règle de Born, dont il est question ci-dessous.

<div class="encadre">
<div class="encadre-titre">La décohérence ne règle pas tout</div>
<p>Zurek insiste lui-même sur ce que la décohérence n'explique <i>pas</i>&nbsp;:</p>
<ul>
<li><b>L'état global reste pur et intriqué.</b> La matrice densité réduite est diagonale, mais elle ressemble à un mélange statistique («&nbsp;le système est en $|0\rangle$ <i>ou</i> en $|1\rangle$, et j'ignore lequel&nbsp;») sans en être un&nbsp;: les deux termes existent encore dans l'état global.</li>
<li><b>Les probabilités sont supposées.</b> Pour lire la diagonale $|\alpha|^2,|\beta|^2$ comme des probabilités, on utilise la règle de Born, que l'on voudrait précisément expliquer. Zurek reconnaît qu'il ne faut pas la supposer «&nbsp;sous une forme ou une autre&nbsp;».</li>
<li><b>L'accord entre observateurs n'est pas expliqué.</b> Pourquoi deux personnes trouvent-elles le même résultat&nbsp;?</li>
</ul>
<p>Les deux sections suivantes s'attaquent à la deuxième et à la troisième difficultés.</p>
</div>

## D'où viennent les probabilités&nbsp;? L'envariance

Voici le troisième ingrédient de la théorie de Zurek, le plus déroutant&nbsp;: la règle de Born ($p\_k=|a\_k|^2$) ne serait pas un postulat, mais découlerait d'une symétrie de l'intrication, qu'il baptise **envariance** (« *environment-assisted invariance* »).

<div id="def">

**Envariance.** Un état $|\psi\_{SE}\rangle$ du système et de son environnement est *envariant* sous une transformation $U\_S$ du système s'il existe une transformation $U\_E$ de l'environnement qui l'annule&nbsp;: $(U\_S\otimes U\_E)|\psi\_{SE}\rangle=|\psi\_{SE}\rangle$.

</div>

C'est une propriété propre à l'intrication. Pour un état de Schmidt $|\psi\rangle=\sum\_k a\_k|s\_k\rangle|e\_k\rangle$, on voit tout de suite deux cas&nbsp;:

<ul>
<li>déphaser $|s_k\rangle$ côté système modifie l'état, mais on l'annule en appliquant le déphasage opposé à $|e_k\rangle$ côté environnement&nbsp;;</li>
<li>si tous les $|a_k|$ sont égaux, échanger deux états $|s_i\rangle$ et $|s_j\rangle$ côté système modifie l'état, mais on l'annule en échangeant $|e_i\rangle$ et $|e_j\rangle$ côté environnement.</li>
</ul>

Le widget suivant montre le second cas sur trois termes. Chaque carte contient un état du système (une boule colorée) et l'état de l'environnement qui lui est associé (un carré). L'état global est la somme de ces trois paires.

<div class="svg-container">
<div class="ev-ligne" id="ev-ligne"></div>
<div class="ev-verdict" id="ev-verdict"></div>
<div class="fig-commandes"><button type="button" id="ev-s">échanger les boules 1 et 2 (agir sur S)</button> <button type="button" id="ev-e">échanger les carrés 1 et 2 (agir sur E)</button> <button type="button" id="ev-r">↺ remise à zéro</button></div>
</div>
<p class="legende">État de départ&nbsp;: $\frac1{\sqrt3}\sum_k|s_k\rangle|e_k\rangle$. Agir sur $S$ seul change les paires, donc l'état. Agir ensuite sur $E$ seul rétablit exactement les paires de départ&nbsp;: l'état global est revenu à l'identique.</p>

Voici comment Zurek en tire des probabilités. L'hypothèse de départ est que **ce que l'on fait à $E$ ne peut pas changer ce qui est vrai de $S$**, puisque $S$ et $E$ n'interagissent plus (pas de signalement instantané). Notons $p(s\_k)$ la probabilité de trouver le système en $s\_k$.

<div id="preuve">

**Poids égaux $\Rightarrow$ probabilités égales.**

<ol>
<li>On échange $s_1$ et $s_2$ côté système. Dans le nouvel état, la probabilité de $s_1$ est l'ancienne probabilité de $s_2$ (on a seulement permuté les étiquettes).</li>
<li>On échange ensuite $e_1$ et $e_2$ côté environnement. L'état global est de retour à son état d'origine.</li>
<li>Or cette seconde opération n'a rien touché au système, donc elle n'a changé aucune de ses probabilités. Les probabilités de $S$ après l'étape 1 sont donc celles du départ.</li>
<li>Conclusion&nbsp;: $p(s_1)=p(s_2)$. Il n'y a rien d'autre dans le raisonnement que la symétrie.</li>
</ol>

</div>

Les déphasages se traitent de même&nbsp;: comme on peut les annuler côté $E$, ils ne peuvent pas intervenir dans les probabilités de $S$. **Les probabilités ne dépendent donc que des modules $|a\_k|$.**

Il reste à traiter les poids inégaux, par exemple $\sqrt{2/3}|0\rangle|a\rangle+\sqrt{1/3}|1\rangle|b\rangle$. On *raffine* l'environnement&nbsp;: on découpe $|a\rangle$ en deux moitiés orthogonales, de sorte que l'état global devienne une superposition de **trois** termes de même poids, dont deux correspondent à «&nbsp;0&nbsp;» et un à «&nbsp;1&nbsp;» (Zurek utilise un système auxiliaire pour que les trois termes soient bien des états orthogonaux de même statut). Les trois termes sont équiprobables par l'argument précédent&nbsp;: $p(0)=2/3$ et $p(1)=1/3$, soit $|a\_k|^2$. On retrouve la règle de Born pour des carrés rationnels, puis par continuité pour tous.

<div class="encadre">
<div class="encadre-titre">Un résultat qui divise</div>
<p>Cette dérivation est l'une des idées les plus discutées de Zurek. Maximilian Schlosshauer et Arthur Fine, qui l'ont analysée en détail, y ont repéré plusieurs hypothèses implicites, par exemple que les probabilités du système ne dépendent que de son état et non de ce qui est fait à l'environnement. Certains jugent qu'elles contiennent déjà l'essentiel de la règle de Born&nbsp;; d'autres, dont Zurek, qu'elles sont des conditions de bon sens (et plus faibles que la règle). Mon résumé est volontairement simplifié&nbsp;: la dérivation complète est plus soigneuse, et se trouve dans l'article de 2005 de Zurek.</p>
</div>

Quel que soit le verdict, l'idée vaut d'être retenue&nbsp;: les probabilités quantiques apparaîtraient comme un fait *d'ignorance structurelle*, dû à l'intrication entre le système et son environnement, et non comme un hasard postulé.

## Pourquoi un monde objectif&nbsp;? Le darwinisme quantique

### On ne mesure presque jamais directement

Il reste la troisième difficulté. Même si l'on admet que les états pointeurs sont choisis et que les probabilités sont celles de Born, pourquoi deux observateurs s'accordent-ils&nbsp;? Zurek part d'un fait banal que la théorie ne prenait pas au sérieux&nbsp;: **on ne mesure presque jamais un objet directement.** On voit la Lune par la lumière qui s'en est réfléchie, on lit un thermomètre par les photons qu'il diffuse. Ce que nous observons, ce sont des *fragments de l'environnement*.

L'environnement joue donc un double rôle&nbsp;: il détruit les superpositions (décohérence) et il sert de **canal d'information** vers les observateurs. Zurek l'appelle le «&nbsp;témoin&nbsp;». Cela change la question&nbsp;: au lieu de demander ce que sait l'observateur du système, on demande **ce que chaque fragment de l'environnement sait du système**.

### Un modèle minimal

Prenons un qubit $S$ et $N$ qubits d'environnement (les photons). Si chaque qubit d'environnement enregistre la valeur pointeur, l'état global est

<p style="text-align:center;">
$\displaystyle\alpha\,|0\rangle|0\rangle^{\otimes N}+\beta\,|1\rangle|1\rangle^{\otimes N}.$
</p>

On donne à un observateur un fragment $F$ de $m$ qubits d'environnement. Ce que $F$ sait de $S$ se mesure par l'**information mutuelle** $I(S:F)=H\_S+H\_F-H\_{SF}$ (entropies de Shannon ou de von Neumann, selon que les états sont classiques ou quantiques). On trouve&nbsp;:

<ul>
<li>si $1\leqslant m\lt N$, l'état réduit de $SF$ est un <b>mélange</b> de «&nbsp;tout à 0&nbsp;» et de «&nbsp;tout à 1&nbsp;» (les cohérences sont emportées par le reste de l'environnement, que l'on n'a pas&nbsp;; elles sont inaccessibles). Les trois entropies valent la même quantité $h$, donc $I(S:F)=h=H_S$&nbsp;: le fragment sait <b>tout</b> de la valeur pointeur, quelle que soit sa taille, pourvu qu'elle soit non nulle&nbsp;;</li>
<li>si $m=N$, l'état de $SF$ est pur, $H_{SF}=0$, et $I(S:F)=2H_S$&nbsp;: on récupère en plus la cohérence, mais il fallait <b>tout</b> l'environnement pour cela.</li>
</ul>

La courbe de $I(S:F)$ en fonction de la fraction $f=m/N$ présente donc un **plateau** à la hauteur $H\_S$, ce que Zurek appelle le «&nbsp;profil d'information partielle&nbsp;». Comparons avec un autre cas, celui d'un état global tiré au hasard&nbsp;: tout fragment de moins de la moitié de l'environnement est alors dans un état maximalement mélangé, indépendant de $S$. Le fragment ne sait rien, jusqu'à $f\approx 1/2$, après quoi l'information apparaît d'un coup.

<div class="svg-container">
<svg id="dq-svg" viewBox="0 0 600 330" role="img" aria-label="À gauche, un système entouré d'un anneau de photons, et quatre observateurs qui lisent chacun un fragment. À droite, l'information mutuelle entre le système et un fragment, en fonction de la fraction de l'environnement lue : un plateau quand l'environnement a copié la valeur pointeur, une marche à la moitié quand l'information est codée globalement." style="width:100%;max-width:600px;height:auto;"></svg>
<div class="fig-commandes"><button type="button" class="dq-mode" data-mode="rec" aria-pressed="true">l'environnement a copié la valeur</button> <button type="button" class="dq-mode" data-mode="glob" aria-pressed="false">information codée globalement</button> <button type="button" id="dq-new">↺ nouveau tirage</button></div>
<div class="fig-commandes"><label for="dq-m">photons lus par chaque observateur&nbsp;:</label> <input type="range" id="dq-m" min="0" max="36" step="1" value="4"> <span id="dq-mval">4 sur 36</span></div>
<div class="dq-obs" id="dq-obs"></div>
</div>
<p class="legende">Au centre, le système $S$, dans l'état pointeur $0$ (bleu) ou $1$ (magenta). Autour, $N=36$ photons. Les points colorés à l'extérieur indiquent quels photons chaque observateur lit. Dans le premier cas, chaque photon porte une copie de la valeur de $S$&nbsp;: les observateurs lisent tous la même chose. Dans le second, l'information existe, mais seulement dans les corrélations entre un très grand nombre de photons&nbsp;: aucun observateur ne peut la lire photon par photon. À droite, la courbe $I(S:F)$ en unités de $H_S$.</p>

### Redondance et objectivité

Le premier cas, avec son plateau, est celui du monde ordinaire. Mesurons à quel point l'information est répandue. Soit $\delta$ une tolérance (une fraction de $H\_S$ que l'on accepte de ne pas connaître). On note $f\_\delta$ la plus petite fraction de l'environnement qui donne $I(S:F)\geqslant(1-\delta)\,H\_S$, et l'on définit la **redondance**

<p style="text-align:center;">
$\displaystyle R_\delta=\frac1{f_\delta}.$
</p>

C'est le nombre de fragments disjoints qui contiennent chacun (à $\delta$ près) toute l'information classique sur $S$. Dans notre modèle $f\_\delta=1/N$, donc $R=N$&nbsp;: chaque photon est une copie.

C'est cette redondance qui donne un sens opérationnel à l'**objectivité**. Un fait objectif est un fait que plusieurs observateurs peuvent découvrir **indépendamment**, sans se concerter et sans le perturber, et sur lequel ils s'accordent. La répétabilité, qui valait pour une mesure répétée par une seule personne, vaut maintenant pour une multitude d'observateurs&nbsp;: chacun lit une copie différente, et toutes les copies disent la même chose. Remarquez le point subtil&nbsp;: ce qui prolifère, c'est la valeur *pointeur*, et elle seule. La cohérence, la phase de la superposition, reste au contraire cachée dans les corrélations globales, hors de portée de tout observateur local. Elle est donc fragile, et aucun fait objectif ne peut en dépendre.

Il en résulte aussi un **effondrement effectif**. Quand un observateur lit un fragment, il apprend la valeur de $S$, et il sait du même coup ce que liront les autres. Tout se passe comme si l'état de $S$ s'était effondré sur un état pointeur, alors que rien dans la théorie n'a changé, sinon l'information qu'ont obtenue les observateurs.

### Pourquoi « darwinisme »&nbsp;?

L'analogie de Zurek est la suivante. La décohérence *sélectionne* les états pointeurs (c'est l'einselection), comme le milieu sélectionne les organismes viables. Les états sélectionnés *prolifèrent* par copies dans l'environnement, comme une espèce se reproduit, et les états qui laissent le plus de copies sont ceux que l'on observe. Les superpositions, elles, n'ont pas de descendance&nbsp;: elles ne se copient pas, puisque l'environnement ne garde pas leur phase. Il faut prendre l'analogie pour ce qu'elle est (il n'y a ici ni mutation ni vraie reproduction), mais elle capture bien l'idée centrale&nbsp;: **est « fit » l'état dont l'environnement fait beaucoup de copies.**

### Dans la vraie vie

Cette redondance est-elle réaliste&nbsp;? En 2010, Jess Riedel et Zurek ont calculé l'information mutuelle entre un objet et les photons diffusés par un corps noir. Ils trouvent que l'information sur la position prolifère dans l'environnement rapidement et en quantité, avec des redondances de plusieurs ordres de grandeur supérieures à celles des modèles exactement solubles étudiés auparavant. Leur exemple frappant&nbsp;: un grain de poussière de 1 micromètre éclairé par le Soleil pendant une microseconde voit sa position imprimée environ **cent millions de fois** dans les photons diffusés. La redondance croît linéairement avec le temps, au rythme $1/\tau\_D$, et ne dépend que de façon logarithmique de la tolérance $\delta$. La lumière est un bon témoin parce qu'elle interagit avec presque tout, et que ses photons n'interagissent presque pas entre eux, de sorte que chacun garde sa copie intacte.

En laboratoire, des expériences menées en 2018 et 2019 sur des états de photons intriqués ont mesuré ces profils. Ciampini et ses collègues comparent un état «&nbsp;en étoile&nbsp;», où un qubit central est copié dans tous les autres, et un état «&nbsp;en losange&nbsp;»&nbsp;: l'information mutuelle reste à peu près constante pour le premier (le plateau) et croît avec la taille du fragment pour le second. Chen et ses collègues, avec six photons (un système, cinq environnements), voient l'information mutuelle approcher l'entropie du système dès les petits fragments. Une troisième expérience a été menée sur un centre coloré du diamant (Unden et al.). Ce sont des tests à très petite échelle, mais ils reproduisent bien les profils du widget ci-dessus.

## L'interprétation existentielle

Zurek tire de tout cela une position sur le statut de l'état quantique, qu'il appelle l'**interprétation existentielle**. Elle comporte trois idées.

<ol>
<li><b>Exister, c'est être répliqué.</b> Un état quantique n'a d'existence objective (pour un observateur) que s'il est inscrit en de nombreux exemplaires dans l'environnement. Le livre parle d'«&nbsp;<i>extantons</i>&nbsp;» (d'après l'anglais <i>extant</i>, existant) et de «&nbsp;<i>qmèmes</i>&nbsp;», par analogie avec les mèmes de Dawkins&nbsp;; je n'en détaille pas le formalisme, que je n'ai pas lu.</li>
<li><b>L'état quantique est « épiontique ».</b> Zurek emploie ce mot (de épistémique et ontique) pour dire que l'état quantique réunit information et existence&nbsp;: il décrit ce que l'on peut savoir, et en même temps ce qui est. C'est une troisième voie entre les deux camps de la page [Épistémique vs. ontique](../epistovsonto/).</li>
<li><b>La classicalité est émergente, non préexistante.</b> L'univers est entièrement quantique&nbsp;; le monde classique est ce qui survit à la sélection par l'environnement. Zurek présente cette lecture comme le prolongement de Copenhague (où il fallait un appareil classique) et comme compatible avec Everett (où il faut un critère pour les branches), en ajoutant ce qui leur manquait.</li>
</ol>

## Bilan

<div class="tableau-large">

| question | idée de Zurek | ce qu'elle explique | ce qui reste discuté |
|:--|:--|:--|:--|
| Qu'est-ce qu'une mesure&nbsp;? | répétabilité $+$ unitarité | résultats discrets, états orthogonaux, observable définie par ses états propres | rôle exact des axiomes de départ |
| Qui choisit la base&nbsp;? | décohérence, einselection | états pointeurs, disparition des cohérences en un temps très court | l'état global reste pur et intriqué |
| D'où viennent les probabilités&nbsp;? | envariance | règle de Born sans la postuler | hypothèses implicites, circularité |
| Pourquoi un monde partagé&nbsp;? | darwinisme quantique | redondance, objectivité, effondrement effectif | découpage en sous-systèmes supposé donné |
| Que signifie exister&nbsp;? | interprétation existentielle | statut épiontique de l'état | statut interprétatif |

</div>

Deux réserves générales, pour ne pas donner l'impression que tout est réglé. D'abord, ce programme **suppose un découpage de l'univers** en système, appareil et environnement&nbsp;; Zurek le tient pour donné par l'expérience, mais beaucoup trouvent qu'il mérite d'être justifié (la frontière de Copenhague ne disparaît pas, elle se déplace). Ensuite, beaucoup de philosophes de la physique estiment que le problème de la mesure subsiste malgré la décohérence, parce que celle-ci ne dit pas pourquoi *un seul* résultat est observé. Zurek répond que c'est justement le rôle du darwinisme quantique et de l'interprétation existentielle, mais le débat est ouvert.

Pour le fil rouge de ce site, retenons ceci&nbsp;: **mesurer, c'est copier, et un monde objectif est un monde où l'information a été copiée assez de fois pour que chacun puisse la lire**. Le lien avec la page sur [l'information et la thermodynamique](../../phistat/landauer/) est direct&nbsp;: les copies sont gratuites en principe, et ce qui est irréversible, c'est leur dispersion dans l'environnement.

<br>

> Zurek, W. H. *Decoherence and Quantum Darwinism: From Quantum Foundations to Classical Reality*, Cambridge University Press (2025). [🌐](https://cambridge.org/core/books/decoherence-and-quantum-darwinism/E851B8F658044E4BF549AAEEB7B47B37)<br><br>
> Zurek, W. H. « Decoherence, einselection, and the quantum origins of the classical », *Reviews of Modern Physics* 75, 715 (2003). [🌐](http://conf.kias.re.kr/~brane/wc04/project/zurek2003.pdf)<br><br>
Schlosshauer, M. et Fine, A. « On Zurek's derivation of the Born rule », *Foundations of Physics* 35, 197 (2005). [🌐](https://arxiv.org/abs/quant-ph/0312058)


<script>
window.QU = (function () {
  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function txt(parent, s, x, y, col, anchor, size, extra) {
    var t = el('text', { x: x, y: y, fill: col || '#334155', 'text-anchor': anchor || 'middle', 'font-size': size || 12.5, 'font-family': "Georgia,'Times New Roman',serif" }, parent);
    if (extra) for (var k in extra) t.setAttribute(k, extra[k]);
    t.textContent = s;
    return t;
  }
  function fr(v, d) { return v.toFixed(d).replace('.', ','); }
  function hs(parent, x, y, pre, col, anchor, size) {
    var t = txt(parent, pre + 'H', x, y, col, anchor, size || 12);
    var s = el('tspan', { dy: 3, 'font-size': 9 }, t); s.textContent = 'S';
    return t;
  }
  return { el: el, txt: txt, fr: fr, hs: hs, BLEU: '#004D80', MAG: '#970E53', VERT: '#006C65', ORANGE: '#C2770B', GRIS: '#64748b' };
})();
</script>

<script>
(function () {
  /* Mesures répétées d'un qubit sur le disque de Bloch */
  var svg = document.getElementById('rp-svg');
  if (!svg) return;
  var Q = window.QU, el = Q.el, txt = Q.txt;
  var cx = 170, cy = 145, R = 108, v = [Math.sin(0.9), Math.cos(0.9)], busy = false, n = 0, lines = [], last = null;
  el('circle', { cx: cx, cy: cy, r: R, fill: '#F8FAFC', stroke: '#94a3b8', 'stroke-width': 1.5 }, svg);
  el('line', { x1: cx - R, y1: cy, x2: cx + R, y2: cy, stroke: '#cbd5e1', 'stroke-dasharray': '3 4' }, svg);
  el('line', { x1: cx, y1: cy - R, x2: cx, y2: cy + R, stroke: '#cbd5e1', 'stroke-dasharray': '3 4' }, svg);
  txt(svg, '|0⟩', cx, cy - R - 8, Q.BLEU); txt(svg, '|1⟩', cx, cy + R + 20, Q.BLEU);
  txt(svg, '|+⟩', cx + R + 22, cy + 4, Q.BLEU); txt(svg, '|−⟩', cx - R - 22, cy + 4, Q.BLEU);
  var arrow = el('line', { x1: cx, y1: cy, stroke: Q.MAG, 'stroke-width': 3, 'stroke-linecap': 'round' }, svg);
  var tip = el('circle', { r: 6, fill: Q.MAG }, svg);
  txt(svg, 'probabilité du prochain résultat', 440, 70, '#334155', 'middle', 13);
  function bar(y, lab) {
    txt(svg, lab, 440, y - 10, Q.BLEU, 'middle', 12.5);
    el('rect', { x: 360, y: y, width: 160, height: 16, rx: 4, fill: '#E2E8F0' }, svg);
    var f = el('rect', { x: 360, y: y, width: 80, height: 16, rx: 4, fill: Q.BLEU, 'fill-opacity': 0.75 }, svg);
    var t = txt(svg, '', 440, y + 32, '#334155', 'middle', 12);
    return { f: f, t: t };
  }
  var bz = bar(112, 'haut (|0⟩) plutôt que bas (|1⟩)'), bx = bar(188, 'droite (|+⟩) plutôt que gauche (|−⟩)');
  function pct(p) { return Math.round(100 * p) + ' %'; }
  function draw() {
    var x = cx + R * v[0], y = cy - R * v[1];
    arrow.setAttribute('x2', x); arrow.setAttribute('y2', y);
    tip.setAttribute('cx', x); tip.setAttribute('cy', y);
    var pz = (1 + v[1]) / 2, px = (1 + v[0]) / 2;
    bz.f.setAttribute('width', 160 * pz); bx.f.setAttribute('width', 160 * px);
    bz.t.textContent = pct(pz) + ' haut, ' + pct(1 - pz) + ' bas';
    bx.t.textContent = pct(px) + ' droite, ' + pct(1 - px) + ' gauche';
  }
  var bZ = document.getElementById('rp-z'), bX = document.getElementById('rp-x'), bN = document.getElementById('rp-new'), log = document.getElementById('rp-log');
  function setBusy(b) { busy = b; bZ.disabled = b; bX.disabled = b; bN.disabled = b; }
  function glide(vNew) {
    setBusy(true);
    var a0 = Math.atan2(v[0], v[1]), a1 = Math.atan2(vNew[0], vNew[1]), d = a1 - a0, t0 = null;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    function f(now) {
      if (t0 === null) t0 = now;
      var u = Math.min(1, (now - t0) / 500); u = u * u * (3 - 2 * u);
      var a = a0 + d * u; v = [Math.sin(a), Math.cos(a)]; draw();
      if (u < 1) requestAnimationFrame(f); else { v = vNew; draw(); setBusy(false); }
    }
    requestAnimationFrame(f);
  }
  function measure(axis) {
    if (busy) return;
    var p = axis === 'z' ? (1 + v[1]) / 2 : (1 + v[0]) / 2, plus = Math.random() < p, vNew = axis === 'z' ? [0, plus ? 1 : -1] : [plus ? 1 : -1, 0];
    var name = axis === 'z' ? (plus ? 'haut' : 'bas') : (plus ? 'droite' : 'gauche');
    n++;
    var s = n + '. mesure ' + (axis === 'z' ? 'haut/bas' : 'droite/gauche') + ' → <b>' + name + '</b>';
    if (last && last.axis === axis) s += last.name === name ? ' (même résultat que la fois précédente)' : ' (?!)';
    else if (last) s += ' (l\'autre grandeur&nbsp;: le résultat est de nouveau aléatoire)';
    last = { axis: axis, name: name };
    lines.push(s); if (lines.length > 5) lines.shift();
    log.innerHTML = lines.join('<br>');
    glide(vNew);
  }
  bZ.addEventListener('click', function () { measure('z'); });
  bX.addEventListener('click', function () { measure('x'); });
  bN.addEventListener('click', function () {
    if (busy) return;
    var a = Math.random() * 2 * Math.PI; v = [Math.sin(a), Math.cos(a)]; n = 0; lines = []; last = null;
    log.innerHTML = 'Nouvel état préparé. Mesurez-le.'; draw();
  });
  draw();
})();
</script>

<script>
(function () {
  /* Décohérence d'un qubit par N spins d'environnement */
  var svg = document.getElementById('dc-svg');
  if (!svg) return;
  var Q = window.QU, el = Q.el, txt = Q.txt, fr = Q.fr;
  var KMAX = 100, gam = [], cc = [], seed = 20240601;
  function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
  for (var k = 0; k < KMAX; k++) { gam.push(0.6 + 0.8 * rnd()); cc.push((2 * rnd() - 1) * 0.6); }
  var N = 10, TMAX = 4, DUR = 5000, nm = 1, curve = null, t = TMAX, raf = null;
  var PX0 = 285, PX1 = 580, PY0 = 250, PY1 = 62;
  function norm(n) { var s = 0; for (var k = 0; k < n; k++) s += gam[k] * gam[k]; return Math.sqrt(s); }
  function rOf(tt) {
    var p = 1;
    for (var k = 0; k < N; k++) {
      var g = gam[k] / nm, a = Math.cos(2 * g * tt), b = Math.sin(2 * g * tt);
      p *= a * a + cc[k] * cc[k] * b * b;
    }
    return Math.sqrt(p);
  }
  function X(tt) { return PX0 + (PX1 - PX0) * tt / TMAX; }
  function Y(r) { return PY0 - (PY0 - PY1) * r; }
  /* matrice */
  var MX = 55, MY = 92, C = 64;
  txt(svg, 'matrice densité de S', MX + C, 62, '#334155', 'middle', 13);
  txt(svg, '|0⟩', MX + C / 2, MY - 8, Q.BLEU); txt(svg, '|1⟩', MX + 3 * C / 2, MY - 8, Q.BLEU);
  txt(svg, '|0⟩', MX - 14, MY + C / 2 + 4, Q.BLEU); txt(svg, '|1⟩', MX - 14, MY + 3 * C / 2 + 4, Q.BLEU);
  var cells = [];
  [[0, 0, true], [1, 1, true], [0, 1, false], [1, 0, false]].forEach(function (c) {
    var r = el('rect', { x: MX + c[1] * C, y: MY + c[0] * C, width: C, height: C, fill: c[2] ? Q.BLEU : Q.MAG, 'fill-opacity': c[2] ? 0.55 : 0.8, stroke: '#fff', 'stroke-width': 2 }, svg);
    var t = txt(svg, '', MX + c[1] * C + C / 2, MY + c[0] * C + C / 2 + 5, '#fff', 'middle', 14);
    cells.push({ r: r, t: t, diag: c[2] });
  });
  var rTxt = txt(svg, '', MX + C, MY + 2 * C + 30, Q.MAG, 'middle', 13);
  var nTxt = txt(svg, '', MX + C, MY + 2 * C + 50, '#64748b', 'middle', 12);
  /* graphe */
  el('line', { x1: PX0, y1: PY0, x2: PX1, y2: PY0, stroke: '#94a3b8' }, svg);
  el('line', { x1: PX0, y1: PY0, x2: PX0, y2: PY1 - 6, stroke: '#94a3b8' }, svg);
  [0, 0.5, 1].forEach(function (r) {
    txt(svg, fr(r, r === 0.5 ? 1 : 0), PX0 - 6, Y(r) + 4, '#64748b', 'end', 11.5);
    if (r > 0) el('line', { x1: PX0, y1: Y(r), x2: PX1, y2: Y(r), stroke: '#cbd5e1', 'stroke-dasharray': '3 4' }, svg);
  });
  for (var i = 0; i <= TMAX; i++) {
    txt(svg, i, X(i), PY0 + 16, '#64748b', 'middle', 11.5);
    el('line', { x1: X(i), y1: PY0, x2: X(i), y2: PY0 + 4, stroke: '#94a3b8' }, svg);
  }
  txt(svg, 'temps (unité arbitraire)', (PX0 + PX1) / 2, 284, '#334155', 'middle', 12.5);
  txt(svg, 'cohérence restante r', PX0 - 4, PY1 - 14, '#334155', 'start', 12.5);
  var path = el('polyline', { fill: 'none', stroke: Q.MAG, 'stroke-width': 2.2, 'stroke-linejoin': 'round' }, svg);
  var cur = el('line', { y1: PY0, y2: PY1, stroke: '#64748b', 'stroke-dasharray': '4 3' }, svg);
  var dot = el('circle', { r: 5, fill: Q.MAG }, svg);
  function build() {
    nm = norm(N);
    var pts = [];
    for (var j = 0; j <= 240; j++) { var tt = TMAX * j / 240; pts.push(X(tt).toFixed(1) + ',' + Y(rOf(tt)).toFixed(1)); }
    path.setAttribute('points', pts.join(' '));
    nTxt.textContent = 'environnement : ' + N + (N > 1 ? ' spins' : ' spin');
  }
  function update(tt) {
    var r = rOf(tt);
    cur.setAttribute('x1', X(tt)); cur.setAttribute('x2', X(tt));
    dot.setAttribute('cx', X(tt)); dot.setAttribute('cy', Y(r));
    cells.forEach(function (c) {
      if (c.diag) c.t.textContent = '0,50';
      else { c.r.setAttribute('fill-opacity', (0.05 + 0.75 * r).toFixed(3)); c.t.textContent = fr(0.5 * r, 2); }
    });
    rTxt.textContent = 'cohérence restante r = ' + fr(r, 2);
  }
  function play() {
    if (raf) cancelAnimationFrame(raf);
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      t = Math.min(TMAX, TMAX * (now - t0) / DUR); update(t);
      raf = t < TMAX ? requestAnimationFrame(f) : null;
    }
    raf = requestAnimationFrame(f);
  }
  var btns = document.querySelectorAll('.dc-n');
  for (var b = 0; b < btns.length; b++) (function (e) {
    e.addEventListener('click', function () {
      N = parseInt(e.getAttribute('data-n'), 10);
      for (var j = 0; j < btns.length; j++) btns[j].setAttribute('aria-pressed', btns[j] === e ? 'true' : 'false');
      build(); play();
    });
  })(btns[b]);
  document.getElementById('dc-go').addEventListener('click', play);
  build(); update(TMAX);
})();
</script>

<script>
(function () {
  /* Einselection : les états purs glissent vers l'axe de couplage */
  var svg = document.getElementById('ei-svg');
  if (!svg) return;
  var Q = window.QU, el = Q.el, txt = Q.txt;
  var cx = 190, cy = 150, R = 112, NP = 24, phi = 0, tt = 0, raf = null;
  el('circle', { cx: cx, cy: cy, r: R, fill: '#F8FAFC', stroke: '#94a3b8', 'stroke-width': 1.5 }, svg);
  el('line', { x1: cx - R, y1: cy, x2: cx + R, y2: cy, stroke: '#e2e8f0' }, svg);
  el('line', { x1: cx, y1: cy - R, x2: cx, y2: cy + R, stroke: '#e2e8f0' }, svg);
  txt(svg, '|0⟩', cx, cy - R - 8, Q.BLEU); txt(svg, '|1⟩', cx, cy + R + 20, Q.BLEU);
  txt(svg, '|+⟩', cx + R + 22, cy + 4, Q.BLEU); txt(svg, '|−⟩', cx - R - 22, cy + 4, Q.BLEU);
  var ax = el('line', { stroke: Q.ORANGE, 'stroke-width': 2.5, 'stroke-dasharray': '6 4' }, svg);
  var dots = [];
  for (var i = 0; i < NP; i++) dots.push(el('circle', { r: 5, stroke: '#fff', 'stroke-width': 0.8 }, svg));
  var p1 = el('circle', { r: 9, fill: 'none', stroke: Q.ORANGE, 'stroke-width': 3 }, svg), p2 = el('circle', { r: 9, fill: 'none', stroke: Q.ORANGE, 'stroke-width': 3 }, svg);
  txt(svg, 'états encore purs :', 455, 105, '#334155', 'middle', 13);
  var nPur = txt(svg, '', 455, 132, Q.MAG, 'middle', 18);
  var dsc = txt(svg, '', 455, 175, Q.ORANGE, 'middle', 13), dsc2 = txt(svg, '', 455, 194, Q.ORANGE, 'middle', 13);
  function rr(t) { return Math.exp(-4.5 * t); }
  function mix(L) {
    var k = Math.max(0, Math.min(1, (1 - L) / 0.6));
    return 'rgb(' + Math.round(151 + (148 - 151) * k) + ',' + Math.round(14 + (163 - 14) * k) + ',' + Math.round(83 + (184 - 83) * k) + ')';
  }
  function update() {
    var n = [Math.sin(phi), Math.cos(phi)], r = rr(tt), pur = 0;
    ax.setAttribute('x1', cx - 1.12 * R * n[0]); ax.setAttribute('y1', cy + 1.12 * R * n[1]);
    ax.setAttribute('x2', cx + 1.12 * R * n[0]); ax.setAttribute('y2', cy - 1.12 * R * n[1]);
    p1.setAttribute('cx', cx + R * n[0]); p1.setAttribute('cy', cy - R * n[1]);
    p2.setAttribute('cx', cx - R * n[0]); p2.setAttribute('cy', cy + R * n[1]);
    for (var i = 0; i < NP; i++) {
      var a = 2 * Math.PI * i / NP, v = [Math.sin(a), Math.cos(a)], d = v[0] * n[0] + v[1] * n[1];
      var w = [d * n[0] + r * (v[0] - d * n[0]), d * n[1] + r * (v[1] - d * n[1])], L = Math.hypot(w[0], w[1]);
      if (L > 0.985) pur++;
      dots[i].setAttribute('cx', cx + R * w[0]); dots[i].setAttribute('cy', cy - R * w[1]); dots[i].setAttribute('fill', mix(L));
    }
    nPur.textContent = pur + ' sur ' + NP;
    var deg = Math.round(phi * 180 / Math.PI);
    if (deg === 0) { dsc.textContent = 'couplage en σz'; dsc2.textContent = 'états pointeurs : |0⟩ et |1⟩'; }
    else if (Math.abs(deg) === 90) { dsc.textContent = 'couplage en σx'; dsc2.textContent = 'états pointeurs : |+⟩ et |−⟩'; }
    else { dsc.textContent = 'couplage incliné de ' + Math.abs(deg) + '°'; dsc2.textContent = 'états pointeurs : sur l\'axe'; }
  }
  var sPhi = document.getElementById('ei-phi'), sT = document.getElementById('ei-t'), vPhi = document.getElementById('ei-phi-val');
  sPhi.addEventListener('input', function () { phi = parseFloat(sPhi.value) * Math.PI / 180; vPhi.textContent = sPhi.value + '°'; update(); });
  sT.addEventListener('input', function () { tt = parseFloat(sT.value) / 100; update(); });
  document.getElementById('ei-go').addEventListener('click', function () {
    if (raf) cancelAnimationFrame(raf);
    var t0 = null;
    function f(now) {
      if (t0 === null) t0 = now;
      tt = Math.min(1, (now - t0) / 3500); sT.value = Math.round(100 * tt); update();
      raf = tt < 1 ? requestAnimationFrame(f) : null;
    }
    tt = 0; raf = requestAnimationFrame(f);
  });
  update();
})();
</script>

<script>
(function () {
  /* Envariance : agir sur S, puis annuler en agissant sur E */
  var ligne = document.getElementById('ev-ligne');
  if (!ligne) return;
  var cols = ['#004D80', '#006C65', '#970E53'], sub = ['₁', '₂', '₃'], S, E, ops;
  var verdict = document.getElementById('ev-verdict');
  function same() {
    var a = [];
    for (var i = 0; i < 3; i++) a.push(S[i] + '' + E[i]);
    return a.sort().join() === '00,11,22';
  }
  function sw(a) { return a.map(function (x) { return x === 0 ? 1 : (x === 1 ? 0 : x); }); }
  function render() {
    var h = '';
    for (var i = 0; i < 3; i++) h += '<div class="ev-carte"><div class="ev-s" style="background:' + cols[S[i]] + '">s' + sub[S[i]] + '</div><div class="ev-lien"></div><div class="ev-e">e' + sub[E[i]] + '</div></div>';
    ligne.innerHTML = h;
    if (ops === 0) verdict.innerHTML = 'État de départ&nbsp;: chaque boule est associée à son carré.';
    else if (same()) verdict.innerHTML = '<b>Les paires sont exactement celles du départ&nbsp;:</b> l\'état global est inchangé, bien que l\'on ait agi sur S puis sur E.';
    else verdict.innerHTML = 'Les paires ne sont plus celles du départ&nbsp;: l\'état global a <b>changé</b>.';
  }
  function reset() { S = [0, 1, 2]; E = [0, 1, 2]; ops = 0; render(); }
  document.getElementById('ev-s').addEventListener('click', function () { S = sw(S); ops++; render(); });
  document.getElementById('ev-e').addEventListener('click', function () { E = sw(E); ops++; render(); });
  document.getElementById('ev-r').addEventListener('click', reset);
  reset();
})();
</script>

<script>
(function () {
  /* Darwinisme quantique : fragments d'environnement et information mutuelle */
  var svg = document.getElementById('dq-svg');
  if (!svg) return;
  var Q = window.QU, el = Q.el, txt = Q.txt, fr = Q.fr;
  var N = 36, CX = 165, CY = 165, RR = 112, mode = 'rec', m = 4, outcome = 0, perm = [], bits = [];
  var OBS = ['#C2770B', '#006C65', '#7C3AED', '#334155'], OBSN = ['orange', 'vert', 'violet', 'gris'];
  function col(b) { return b ? Q.MAG : Q.BLEU; }
  function ang(i) { return 2 * Math.PI * i / N - Math.PI / 2; }
  el('circle', { cx: CX, cy: CY, r: RR, fill: 'none', stroke: '#e2e8f0', 'stroke-dasharray': '3 4' }, svg);
  var photons = [];
  for (var i = 0; i < N; i++) photons.push(el('circle', { cx: CX + RR * Math.cos(ang(i)), cy: CY + RR * Math.sin(ang(i)), r: 7.5, stroke: '#64748b', 'stroke-width': 1 }, svg));
  var gObs = el('g', {}, svg);
  var sC = el('circle', { cx: CX, cy: CY, r: 26 }, svg);
  txt(svg, 'S', CX, CY + 6, '#fff', 'middle', 18, { 'font-weight': 'bold' });
  txt(svg, 'photons (environnement)', CX, 28, '#64748b', 'middle', 12);
  /* graphe */
  var PX0 = 400, PX1 = 580, PY0 = 262, PY1 = 82, UN = (PY0 - PY1) / 2;
  txt(svg, 'information mutuelle I(S:F)', 490, 56, '#334155', 'middle', 13);
  el('line', { x1: PX0, y1: PY0, x2: PX1, y2: PY0, stroke: '#94a3b8' }, svg);
  el('line', { x1: PX0, y1: PY0, x2: PX0, y2: PY1 - 8, stroke: '#94a3b8' }, svg);
  [0, 1, 2].forEach(function (u) {
    var y = PY0 - u * UN;
    if (u === 0) txt(svg, '0', PX0 - 6, y + 4, '#64748b', 'end', 11.5);
    else Q.hs(svg, PX0 - 6, y + 4, u === 1 ? '' : '2 ', '#64748b', 'end', 11.5);
    if (u > 0) el('line', { x1: PX0, y1: y, x2: PX1, y2: y, stroke: '#cbd5e1', 'stroke-dasharray': '3 4' }, svg);
  });
  [0, 0.5, 1].forEach(function (f) {
    txt(svg, fr(f, f === 0.5 ? 1 : 0), PX0 + (PX1 - PX0) * f, PY0 + 16, '#64748b', 'middle', 11.5);
    el('line', { x1: PX0 + (PX1 - PX0) * f, y1: PY0, x2: PX0 + (PX1 - PX0) * f, y2: PY0 + 4, stroke: '#94a3b8' }, svg);
  });
  txt(svg, 'fraction f de l\'environnement lue', 490, 296, '#334155', 'middle', 12.5);
  function Irec(k) { return k === 0 ? 0 : (k < N ? 1 : 2); }
  function Iglob(k) { return 1 + Math.min(k, N + 1 - k) - Math.min(k + 1, N - k); }
  function curve(f, stroke) {
    var pts = [];
    for (var k = 0; k <= N; k++) pts.push((PX0 + (PX1 - PX0) * k / N).toFixed(1) + ',' + (PY0 - UN * f(k)).toFixed(1));
    return el('polyline', { points: pts.join(' '), fill: 'none', stroke: stroke, 'stroke-linejoin': 'round' }, svg);
  }
  var cRec = curve(Irec, Q.VERT), cGlob = curve(Iglob, Q.MAG);
  var mk = el('circle', { r: 6, fill: '#fff', 'stroke-width': 2.5 }, svg);
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function draw() {
    outcome = Math.random() < 0.5 ? 0 : 1;
    perm = []; for (var j = 0; j < 4; j++) { var a = []; for (var i = 0; i < N; i++) a.push(i); perm.push(shuffle(a)); }
    bits = []; for (var i = 0; i < N; i++) bits.push(Math.random() < 0.5 ? 0 : 1);
    update();
  }
  function update() {
    var rec = mode === 'rec';
    sC.setAttribute('fill', col(outcome));
    for (var i = 0; i < N; i++) photons[i].setAttribute('fill', col(rec ? outcome : bits[i]));
    while (gObs.firstChild) gObs.removeChild(gObs.firstChild);
    for (var j = 0; j < 4; j++) for (var k = 0; k < m; k++) {
      var a = ang(perm[j][k]), r = RR + 16 + 6 * j;
      el('circle', { cx: CX + r * Math.cos(a), cy: CY + r * Math.sin(a), r: 2.6, fill: OBS[j] }, gObs);
    }
    cRec.setAttribute('stroke-width', rec ? 3 : 1.2); cRec.setAttribute('stroke-opacity', rec ? 1 : 0.45);
    cGlob.setAttribute('stroke-width', rec ? 1.2 : 3); cGlob.setAttribute('stroke-opacity', rec ? 0.45 : 1);
    var I = rec ? Irec(m) : Iglob(m);
    mk.setAttribute('cx', PX0 + (PX1 - PX0) * m / N); mk.setAttribute('cy', PY0 - UN * I); mk.setAttribute('stroke', rec ? Q.VERT : Q.MAG);
    document.getElementById('dq-mval').textContent = m + ' sur ' + N;
    var h = '';
    for (var j = 0; j < 4; j++) {
      var s = '<div><span class="dq-pastille" style="background:' + OBS[j] + '"></span>observateur ' + OBSN[j] + '&nbsp;: ';
      if (m === 0) s += 'n\'a rien lu.';
      else {
        var shown = [], lim = Math.min(m, 12);
        for (var k = 0; k < lim; k++) shown.push(rec ? outcome : bits[perm[j][k]]);
        s += 'lit <b>' + shown.join(' ') + (m > lim ? ' …' : '') + '</b> → ';
        s += rec ? 'conclut que S vaut <b>' + outcome + '</b>.' : 'ne peut rien conclure sur S.';
      }
      h += s + '</div>';
    }
    if (rec && m > 0) h += '<div>Chaque observateur a lu <b>' + m + '</b> photon' + (m > 1 ? 's' : '') + ' et en a appris autant que s\'il avait mesuré S lui-même. Au plus <b>' + Math.floor(N / m) + '</b> observateurs peuvent lire des fragments disjoints de cette taille.</div>';
    else if (!rec) h += '<div>I(S:F) = <b>' + I + '</b> bit' + (I > 1 ? 's' : '') + (m >= N / 2 ? ' (mais seule une mesure collective de tous les photons peut le récupérer)' : '') + '.</div>';
    else h += '<div>I(S:F) = <b>0</b> bit&nbsp;: aucun photon lu, aucune information.</div>';
    document.getElementById('dq-obs').innerHTML = h;
  }
  var sm = document.getElementById('dq-m');
  sm.addEventListener('input', function () { m = parseInt(sm.value, 10); update(); });
  var mb = document.querySelectorAll('.dq-mode');
  for (var b = 0; b < mb.length; b++) (function (e) {
    e.addEventListener('click', function () {
      mode = e.getAttribute('data-mode');
      for (var j = 0; j < mb.length; j++) mb[j].setAttribute('aria-pressed', mb[j] === e ? 'true' : 'false');
      update();
    });
  })(mb[b]);
  document.getElementById('dq-new').addEventListener('click', draw);
  draw();
})();
</script>
