+++
title = "Simplexes"
date = 2026-10-31T15:00:00+01:00
weight = 6
+++

<style>
  #grosseformule
  {
   overflow-x:auto;
  }
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
.svg-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
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
  display: list-item;     /* remet le triangle + l’accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
.legende
{
    text-align: center;
    font-size: 0.9em;
    color: #64748b;
    font-style: italic;
    margin-top: -0.6em;
}
.tableau-large
{
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.tableau-large table
{
    min-width: 30rem;
}
</style>


# Simplexes et flèche du temps
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>La géométrie secrète de $\frac{1}{k!}$, des hypercubes dilatés à la série de Dyson</i></p>

On a vu [**ici**](../../arithmetique/exponentielle/) que la suite des intérêts composés de Bernoulli $\left(1 + \frac{1}{n}\right)^n$ et la série des inverses de factorielles $\sum\_{k=0}^n \frac{1}{k!}$ convergent vers la même limite $\mathrm{e} \approx 2,71828$.

Mais l'algèbre laisse intact un mystère géométrique et physique fascinant&nbsp;: **que viennent faire des factorielles $k!$ (qui comptent les permutations d'objets discrets) au cœur d'un processus de croissance continue&nbsp;?**

Nous allons voir que la fraction $\frac{1}{k!}$ possède une incarnation géométrique très simple&nbsp;: c'est le **volume du simplexe canonique $\Delta\_k$** de dimension $k$. Comprendre cet objet géométrique permet de voir pourquoi l'expansion d'un hypercube $\left(1+\frac{1}{n}\right)^n$ tend vers $\sum \frac{1}{k!}$, et pourquoi la **flèche du temps** en mécanique quantique et en théorie quantique des champs fait surgir exactement le même facteur $\frac{1}{n!}$ dans la **série de Dyson** et l'**ordonnancement de Wick**.


## Le volume d'un simplexe

### Qu'est-ce qu'un simplexe canonique $\Delta\_k$&nbsp;?

En géométrie, un **simplexe** de dimension $k$ est l'analogue le plus simple du triangle en dimension quelconque&nbsp;: c'est l'enveloppe convexe de $k + 1$ sommets (un segment en 1D, un triangle en 2D, un tétraèdre en 3D, un pentachore en 4D…).

Parmi tous les simplexes possibles, il en existe un qui apparaît naturellement dès que l'on range $k$ nombres compris entre $0$ et $1$ dans l'**ordre croissant**&nbsp;:

<div id="def">

On appelle <b>simplexe canonique (ou simplexe ordonné) de dimension $k$</b> le sous-ensemble $\Delta\_k$ de l'hypercube unité $[0, 1]^k$ formé des points dont les coordonnées sont rangées par ordre croissant&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\Delta_k = \left\\{ (t_1, t_2, \dots, t_k) \in [0, 1]^k \\;\middle|\\; 0 \le t_1 \le t_2 \le \dots \le t_k \le 1 \right\\}
$$

</div>

</div>

<br>

Pourquoi le volume $k$-dimensionnel de ce simplexe vaut-il **toujours $\frac{1}{k!}$**&nbsp;? Voyons deux manières complémentaires de s'en convaincre, pour que ce résultat devienne totalement naturel.

### Approche 1 : Empilement de pyramides

Tout le monde a appris au collège deux formules un peu mystérieuses&nbsp;:
<ul>
<li>l'aire d'un triangle vaut $\displaystyle \mathbf{\frac{1}{2}} \times \text{base} \times \text{hauteur}$&nbsp;;</li>
<li>le volume d'une pyramide vaut $\displaystyle \mathbf{\frac{1}{3}} \times \text{aire de la base} \times \text{hauteur}$.</li>
</ul>

D'où sortent ce $\frac{1}{2}$ et ce $\frac{1}{3}$&nbsp;? Et si l'on continuait en dimension $4$, $5$, …, $k$, verrait-on apparaître $\frac{1}{4}$, $\frac{1}{5}$, …, $\frac{1}{k}$&nbsp;? La réponse est oui, et c'est exactement de là que vient la factorielle&nbsp;: $\frac{1}{2} \times \frac{1}{3} \times \cdots \times \frac{1}{k} = \frac{1}{k!}$.

**L'idée : couper en tranches.** Plutôt que de chercher une formule toute faite, découpons le simplexe en fines tranches horizontales, comme une pièce montée, puis additionnons le volume des tranches.

<div id="theo">

<b>Principe de Cavalieri.</b> Pour une partie $A$ de l'hypercube $[0, 1]^k$, notons $A\_z$ sa **tranche à la hauteur** $t\_k = z$ (l'ensemble des points de $A$ dont la dernière coordonnée vaut $z$). Alors

$$
\operatorname{Vol}\_k(A) = \int\_0^1 \operatorname{Vol}\_{k-1}(A\_z)\\,\mathrm{d}z.
$$

Le volume est la «&nbsp;somme continue&nbsp;» (l'intégrale) des volumes des tranches, chacune d'épaisseur infinitésimale $\mathrm{d}z$. C'est un cas particulier du théorème de Fubini.

</div>

<br>

**Étape 1 — Du segment au triangle ($k = 2$).** Le simplexe $\Delta\_2 = \\{0 \le t\_1 \le t\_2 \le 1\\}$ est le triangle situé au-dessus de la diagonale du carré unité. Coupons-le à la hauteur $t\_2 = z$&nbsp;: la tranche est formée des $t\_1$ tels que $0 \le t\_1 \le z$, c'est un **segment de longueur $z$**. Tout en bas, les tranches sont minuscules&nbsp;; elles s'allongent régulièrement en montant, jusqu'au plafond $t\_2 = 1$ où l'on retrouve le segment $\Delta\_1 = [0, 1]$ tout entier.

<div class="svg-container">
<svg viewBox="0 0 280 250" role="img" aria-label="Le triangle Δ₂ découpé en tranches horizontales" style="width:100%;max-width:280px;height:auto;">
<defs><marker id="fl2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<style>.sx2-t{transform:translate(55px,215px) scale(0.62) translate(-55px,-215px)}.sx2-z{transform:translate(0.0px,-105.4px)}@media (prefers-reduced-motion:no-preference){.sx2-t{animation:sx2-a 6s ease-in-out infinite alternate}.sx2-z{animation:sx2-b 6s ease-in-out infinite alternate}}@keyframes sx2-a{from{transform:translate(55px,215px) scale(0.12) translate(-55px,-215px)}to{transform:translate(55px,215px) scale(0.88) translate(-55px,-215px)}}@keyframes sx2-b{from{transform:translate(0.0px,-20.4px)}to{transform:translate(0.0px,-149.6px)}}</style>
<polygon points="55.0,215.0 225.0,215.0 225.0,45.0 55.0,45.0" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<polygon points="55.0,215.0 55.0,45.0 225.0,45.0" fill="#004D80" fill-opacity="0.07" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<line x1="55.0" y1="198.0" x2="72.0" y2="198.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="181.0" x2="89.0" y2="181.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="164.0" x2="106.0" y2="164.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="147.0" x2="123.0" y2="147.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="130.0" x2="140.0" y2="130.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="113.0" x2="157.0" y2="113.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="96.0" x2="174.0" y2="96.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="79.0" x2="191.0" y2="79.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55.0" y1="62.0" x2="208.0" y2="62.0" stroke="#004D80" stroke-opacity="0.22"/>
<line x1="55" y1="45" x2="225" y2="45" stroke="#004D80" stroke-width="3" stroke-linecap="round"/>
<text x="140.0" y="36" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif">Δ₁</text>
<line x1="55" y1="215" x2="250" y2="215" stroke="#94a3b8" marker-end="url(#fl2)"/>
<line x1="55" y1="215" x2="55" y2="15" stroke="#94a3b8" marker-end="url(#fl2)"/>
<text x="252" y="233" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">t₁</text>
<text x="45" y="27" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">t₂</text>
<text x="47" y="231" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">0</text>
<text x="225" y="233" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">1</text>
<text x="47" y="49" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">1</text>
<text x="92" y="110" text-anchor="middle" font-size="17" fill="#004D80" font-family="Georgia,'Times New Roman',serif">Δ₂</text>
<g class="sx2-t"><line x1="55" y1="45" x2="225" y2="45" stroke="#970E53" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/></g>
<g class="sx2-z"><line x1="51" y1="215" x2="59" y2="215" stroke="#970E53" stroke-width="2"/><text x="46" y="220" text-anchor="end" font-size="16" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">z</text></g>
</svg>
</div>
<p class="legende">Le triangle $\Delta_2$ est une pile de segments&nbsp;: à la hauteur $z$, la tranche mesure $z$.</p>

L'aire du triangle est la somme de ces segments&nbsp;:

$$
\operatorname{Vol}\_2(\Delta\_2) = \int\_0^1 z\\,\mathrm{d}z = \frac{1}{2} = \frac{1}{2!}.
$$

Le $\frac{1}{2}$ du triangle n'est donc rien d'autre que la **longueur moyenne des tranches**&nbsp;: elles grandissent linéairement de $0$ à $1$, leur moyenne vaut $\frac{1}{2}$.

**Étape 2 — Du triangle au tétraèdre ($k = 3$).** Le simplexe $\Delta\_3 = \\{0 \le t\_1 \le t\_2 \le t\_3 \le 1\\}$ est un tétraèdre&nbsp;: une pyramide renversée, pointe à l'origine, dont la base, collée au plafond $t\_3 = 1$, est le triangle $\\{0 \le t\_1 \le t\_2 \le 1\\}$… c'est-à-dire $\Delta\_2$ lui-même&nbsp;!

À la hauteur $t\_3 = z$, la tranche est le triangle $\\{0 \le t\_1 \le t\_2 \le z\\}$&nbsp;: c'est **la base $\Delta\_2$ réduite d'un facteur $z$** (précisément, son image par l'homothétie de centre l'origine et de rapport $z$, comme dans le théorème de Thalès). Or réduire une figure plane d'un facteur $z$ dans ses deux directions multiplie son aire par $z^2$.

<div class="svg-container">
<svg viewBox="15 55 320 300" role="img" aria-label="Le tétraèdre Δ₃, pyramide renversée de base Δ₂, découpé en tranches" style="width:100%;max-width:320px;height:auto;">
<defs><marker id="fl3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<style>.sx3-t{transform:translate(60px,300px) scale(0.62) translate(-60px,-300px)}.sx3-z{transform:translate(0.0px,-105.4px)}@media (prefers-reduced-motion:no-preference){.sx3-t{animation:sx3-a 6s ease-in-out infinite alternate}.sx3-z{animation:sx3-b 6s ease-in-out infinite alternate}}@keyframes sx3-a{from{transform:translate(60px,300px) scale(0.12) translate(-60px,-300px)}to{transform:translate(60px,300px) scale(0.88) translate(-60px,-300px)}}@keyframes sx3-b{from{transform:translate(0.0px,-20.4px)}to{transform:translate(0.0px,-149.6px)}}</style>
<line x1="60.0" y1="300.0" x2="210.0" y2="330.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="60.0" y1="300.0" x2="140.0" y2="245.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="60.0" y1="300.0" x2="60.0" y2="130.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="60.0" y1="130.0" x2="210.0" y2="160.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="60.0" y1="130.0" x2="140.0" y2="75.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="140.0" y1="245.0" x2="290.0" y2="275.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="140.0" y1="245.0" x2="140.0" y2="75.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="140.0" y1="75.0" x2="290.0" y2="105.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="210.0" y1="330.0" x2="290.0" y2="275.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="210.0" y1="330.0" x2="210.0" y2="160.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="210.0" y1="160.0" x2="290.0" y2="105.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="290.0" y1="275.0" x2="290.0" y2="105.0" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<line x1="60" y1="300" x2="243.0" y2="336.6" stroke="#94a3b8" marker-end="url(#fl3)"/>
<text x="247.0" y="352.6" text-anchor="start" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">t₁</text>
<line x1="60" y1="300" x2="164.0" y2="228.5" stroke="#94a3b8" marker-end="url(#fl3)"/>
<text x="170.0" y="226.5" text-anchor="start" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">t₂</text>
<line x1="60" y1="300" x2="60.0" y2="99.4" stroke="#94a3b8" marker-end="url(#fl3)"/>
<text x="48.0" y="103.4" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">t₃</text>
<text x="52" y="316" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">0</text>
<text x="52" y="135" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">1</text>
<line x1="60" y1="300" x2="140.0" y2="75.0" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 3" stroke-opacity="0.7"/>
<g class="sx3-t"><polygon points="60.0,130.0 140.0,75.0 290.0,105.0" fill="#970E53" fill-opacity="0.22" stroke="#970E53" stroke-width="2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></g>
<polygon points="60.0,300.0 60.0,130.0 290.0,105.0" fill="#004D80" fill-opacity="0.06" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<polygon points="60.0,130.0 140.0,75.0 290.0,105.0" fill="#004D80" fill-opacity="0.16" stroke="#004D80" stroke-width="2.2" stroke-linejoin="round"/>
<text x="163" y="73" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif">Δ₂</text>
<text x="106" y="222" text-anchor="middle" font-size="17" fill="#004D80" font-family="Georgia,'Times New Roman',serif">Δ₃</text>
<g class="sx3-z"><line x1="56" y1="300" x2="64" y2="300" stroke="#970E53" stroke-width="2"/><text x="51" y="305" text-anchor="end" font-size="16" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">z</text></g>
</svg>
</div>
<p class="legende">Le tétraèdre $\Delta_3$ est une pile de triangles&nbsp;: à la hauteur $z$, la tranche est une copie de la base $\Delta_2$ réduite d'un facteur $z$, d'aire $z^2 \times \frac{1}{2}$.</p>

En empilant ces tranches&nbsp;:

$$
\operatorname{Vol}\_3(\Delta\_3) = \int\_0^1 z^2 \times \frac{1}{2}\\,\mathrm{d}z = \frac{1}{3} \times \frac{1}{2} = \frac{1}{3!}.
$$

Pourquoi $\frac{1}{3}$ cette fois, et plus $\frac{1}{2}$&nbsp;? Parce que les tranches rétrécissent maintenant dans **deux directions à la fois**&nbsp;: à mi-hauteur, la tranche n'a plus que $\left(\frac{1}{2}\right)^2 = \frac{1}{4}$ de l'aire de la base, alors que dans le triangle elle en gardait la moitié. La pyramide est plus «&nbsp;effilée&nbsp;» que le triangle, et l'aire moyenne de ses tranches tombe à $\int\_0^1 z^2\\,\mathrm{d}z = \frac{1}{3}$ de celle de la base.

**Étape $k$ — Et ainsi de suite.** Le même mécanisme se reproduit à chaque nouvelle dimension. $\Delta\_k$ est une hyperpyramide de hauteur $1$, de pointe l'origine, dont la base au plafond $t\_k = 1$ est $\Delta\_{k-1}$. À la hauteur $z$, la tranche $\\{0 \le t\_1 \le \dots \le t\_{k-1} \le z\\}$ est une copie de $\Delta\_{k-1}$ réduite d'un facteur $z$ dans ses $k - 1$ directions&nbsp;; son volume est donc $z^{k-1} \operatorname{Vol}\_{k-1}(\Delta\_{k-1})$ (une homothétie de rapport $z$ multiplie les volumes de dimension $d$ par $z^d$). Comme $\int\_0^1 z^{k-1}\\,\mathrm{d}z = \frac{1}{k}$, chaque nouvelle dimension apporte un facteur $\frac{1}{k}$&nbsp;:

<div id="grosseformule">

$$
\operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k} \times \operatorname{Vol}\_{k-1}(\Delta\_{k-1}) = \frac{1}{k} \times \frac{1}{k-1} \times \cdots \times \frac{1}{3} \times \frac{1}{2} \times 1 = \mathbf{\frac{1}{k!}}
$$

</div>

<div class="svg-container">
<svg viewBox="0 0 560 155" role="img" aria-label="Chaîne des volumes : 1, puis 1/2, 1/6, 1/24" style="width:100%;max-width:560px;height:auto;">
<defs><marker id="flc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<line x1="30" y1="82" x2="90" y2="82" stroke="#004D80" stroke-width="3" stroke-linecap="round"/>
<polygon points="174.0,100.0 174.0,56.0 226.0,56.0" fill="#004D80" fill-opacity="0.1" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<line x1="302.0" y1="104.0" x2="323.6" y2="43.2" stroke="#004D80" stroke-dasharray="2 2" stroke-opacity="0.7"/>
<polygon points="302.0,104.0 302.0,58.1 364.1,51.3" fill="#004D80" fill-opacity="0.06" stroke="#004D80" stroke-width="1.3" stroke-linejoin="round"/>
<polygon points="302.0,58.1 323.6,43.2 364.1,51.3" fill="#004D80" fill-opacity="0.16" stroke="#004D80" stroke-width="1.5" stroke-linejoin="round"/>
<text x="480" y="86" text-anchor="middle" font-size="22" fill="#004D80" fill-opacity="0.6" font-family="Georgia,'Times New Roman',serif">· · ·</text>
<text x="60" y="126" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif">Δ₁</text>
<text x="60" y="146" text-anchor="middle" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">1</text>
<text x="200" y="126" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif">Δ₂</text>
<text x="200" y="146" text-anchor="middle" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">1/2</text>
<text x="340" y="126" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif">Δ₃</text>
<text x="340" y="146" text-anchor="middle" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">1/6</text>
<text x="480" y="126" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif">Δ₄</text>
<text x="480" y="146" text-anchor="middle" font-size="15" font-weight="bold" fill="#970E53" font-family="Georgia,'Times New Roman',serif">1/24</text>
<path d="M102,38 Q130.0,16 158,38" fill="none" stroke="#94a3b8" marker-end="url(#flc)"/>
<text x="130.0" y="20" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif">× 1/2</text>
<path d="M242,38 Q270.0,16 298,38" fill="none" stroke="#94a3b8" marker-end="url(#flc)"/>
<text x="270.0" y="20" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif">× 1/3</text>
<path d="M382,38 Q410.0,16 438,38" fill="none" stroke="#94a3b8" marker-end="url(#flc)"/>
<text x="410.0" y="20" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif">× 1/4</text>
</svg>
</div>

**La factorielle $k!$ n'est donc rien d'autre que le produit des facteurs pyramidaux successifs**&nbsp;: $\frac{1}{2}$ pour le triangle, $\frac{1}{3}$ pour la pyramide, $\frac{1}{4}$ pour l'hyperpyramide de dimension $4$, et ainsi de suite jusqu'à $\frac{1}{k}$.

### Approche 2 : Pavage du cube par les $k!$ permutations

Il existe une seconde manière, sans le moindre calcul d'intégrale, de comprendre pourquoi $\operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k!}$&nbsp;: un **argument de symétrie** dans l'hypercube unité $[0, 1]^k$, dont le volume total vaut $1$.

**En dimension 2.** La diagonale $t\_1 = t\_2$ coupe le carré unité en deux triangles&nbsp;: celui où $t\_1 \le t\_2$ (c'est $\Delta\_2$) et celui où $t\_2 \le t\_1$. Échanger les noms des deux axes, c'est-à-dire faire la symétrie par rapport à la diagonale, envoie l'un sur l'autre&nbsp;: ils ont donc la même aire, qui vaut forcément $\frac{1}{2}$.

<div class="svg-container">
<svg viewBox="0 0 230 230" role="img" aria-label="Le carré unité coupé par sa diagonale en deux triangles" style="width:100%;max-width:230px;height:auto;">
<defs><marker id="fa1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="45.0,190.0 195.0,190.0 195.0,40.0" fill="#e0eaf0" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
<polygon points="45.0,190.0 45.0,40.0 195.0,40.0" fill="#ecd4e0" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
<line x1="45.0" y1="190.0" x2="195.0" y2="40.0" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="45.0" y1="190.0" x2="220.0" y2="190.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa1)"/>
<line x1="45.0" y1="190.0" x2="45.0" y2="15.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa1)"/>
<text x="222.0" y="208.0" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t₁</text>
<text x="35.0" y="26.0" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t₂</text>
<text x="37.0" y="206.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="195.0" y="208.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="37.0" y="45.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="90.0" y="82.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t₁ ≤ t₂</text>
<text x="150.0" y="151.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t₂ ≤ t₁</text>
</svg>
</div>
<p class="legende">Les deux ordres possibles de $(t_1, t_2)$ découpent le carré en deux triangles symétriques.</p>

**En dimension $k$.** Prenons un point $(t\_1, t\_2, \dots, t\_k)$ de l'hypercube dont les $k$ coordonnées sont deux à deux distinctes, et **trions ses coordonnées** de la plus petite à la plus grande. Combien de résultats différents ce tri peut-il donner&nbsp;?
<ul>
<li>$k$ choix pour la coordonnée la plus petite&nbsp;;</li>
<li>$k - 1$ choix parmi les coordonnées restantes pour la deuxième&nbsp;;</li>
<li>et ainsi de suite, soit <b>$k(k-1)\cdots 2 \times 1 = k!$ ordres possibles</b>, chacun associé à une permutation $\sigma \in \mathfrak{S}_k$.</li>
</ul>

L'hypercube se découpe donc en $k!$ régions, une par ordre possible. Comme un simple échange des noms des axes envoie n'importe laquelle de ces régions sur n'importe quelle autre, elles ont toutes le même volume&nbsp;: $\frac{1}{k!}$.

**En dimension 3**, les $3! = 6$ ordres possibles sont&nbsp;:

<p style="text-align:center;">
$\displaystyle t_1 \le t_2 \le t_3 \;\; (\Delta_3), \quad t_1 \le t_3 \le t_2, \quad t_2 \le t_1 \le t_3,$ $\displaystyle \quad t_2 \le t_3 \le t_1, \quad t_3 \le t_1 \le t_2, \quad t_3 \le t_2 \le t_1.$
</p>

Géométriquement, les trois plans $t\_1 = t\_2$, $t\_2 = t\_3$ et $t\_1 = t\_3$ passent tous par la grande diagonale du cube, de $(0,0,0)$ à $(1,1,1)$. Ils découpent le cube en **$6$ tétraèdres isométriques** disposés autour de cette diagonale comme les quartiers d'une orange. Ces tétraèdres sont des *orthoschémas*&nbsp;: trois de leurs arêtes successives sont deux à deux orthogonales (pour $\Delta\_3$, le chemin $(0,0,0) \to (0,0,1) \to (0,1,1) \to (1,1,1)$).

<div class="svg-container">
<svg viewBox="15 15 290 320" role="img" aria-label="Le cube unité éclaté en six tétraèdres disposés autour de sa grande diagonale" style="width:100%;max-width:290px;height:auto;">
<style>.cb4{transform:translate(-5.8px,-13.4px)}@keyframes cb4-k{from{transform:translate(-1.5px,-3.4px)}to{transform:translate(-9.7px,-22.4px)}}.cb5{transform:translate(9.6px,-11.4px)}@keyframes cb5-k{from{transform:translate(2.4px,-2.8px)}to{transform:translate(16.0px,-19.0px)}}.cb1{transform:translate(-15.4px,-2.0px)}@keyframes cb1-k{from{transform:translate(-3.9px,-0.5px)}to{transform:translate(-25.7px,-3.4px)}}.cb3{transform:translate(15.4px,2.0px)}@keyframes cb3-k{from{transform:translate(3.9px,0.5px)}to{transform:translate(25.7px,3.4px)}}.cb0{transform:translate(-9.6px,11.4px)}@keyframes cb0-k{from{transform:translate(-2.4px,2.8px)}to{transform:translate(-16.0px,19.0px)}}.cb2{transform:translate(5.8px,13.4px)}@keyframes cb2-k{from{transform:translate(1.5px,3.4px)}to{transform:translate(9.7px,22.4px)}}@media (prefers-reduced-motion:no-preference){.cb4{animation:cb4-k 7s ease-in-out infinite alternate}.cb5{animation:cb5-k 7s ease-in-out infinite alternate}.cb1{animation:cb1-k 7s ease-in-out infinite alternate}.cb3{animation:cb3-k 7s ease-in-out infinite alternate}.cb0{animation:cb0-k 7s ease-in-out infinite alternate}.cb2{animation:cb2-k 7s ease-in-out infinite alternate}}</style>
<line x1="160.0" y1="217.5" x2="160.0" y2="122.5" stroke="#64748b" stroke-width="1.2" stroke-dasharray="5 4"/>
<g class="cb4"><polygon points="160.0,208.3 84.1,127.8 160.0,131.7" fill="#d0dee8" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="160.0,208.3 173.4,68.8 160.0,131.7" fill="#d9e4ec" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="84.1,127.8 173.4,68.8 160.0,131.7" fill="#d0dee8" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
<g class="cb5"><polygon points="160.0,208.3 249.3,149.3 160.0,131.7" fill="#d3e0e9" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="249.3,149.3 173.4,68.8 160.0,131.7" fill="#d3e1e9" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
<g class="cb1"><polygon points="160.0,208.3 70.7,190.7 160.0,131.7" fill="#d3e0e9" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="84.1,127.8 70.7,190.7 160.0,131.7" fill="#d0dee8" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
<g class="cb3"><polygon points="160.0,208.3 235.9,212.2 160.0,131.7" fill="#d0dee8" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="249.3,149.3 235.9,212.2 160.0,131.7" fill="#d3e1e9" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
<g class="cb0"><polygon points="160.0,208.3 146.6,271.2 160.0,131.7" fill="#e3bed1" stroke="#970E53" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/><polygon points="146.6,271.2 70.7,190.7 160.0,131.7" fill="#d9a7c0" stroke="#970E53" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
<g class="cb2"><polygon points="146.6,271.2 235.9,212.2 160.0,131.7" fill="#c7d8e3" stroke="#004D80" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/></g>
</svg>
</div>
<p class="legende">Le cube unité éclaté en ses $3! = 6$ tétraèdres, vu dans l'axe de la grande diagonale (en pointillés)&nbsp;; en magenta, le simplexe canonique $\Delta_3$.</p>

<div id="theo">

<b>Théorème (Pavage de l'hypercube en simplexes de permutation).</b> L'hypercube unité $[0, 1]^k$ est partitionné (à des hyperplans diagonaux $t\_i = t\_j$ de volume nul près) en $k!$ simplexes isométriques $D\_\sigma$ indexés par les permutations $\sigma \in \mathfrak{S}\_k$&nbsp;:

<p style="text-align:center;">
$\displaystyle D_\sigma = \left\{ (t_1, \dots, t_k) \in [0, 1]^k \;\middle|\; 0 \le t_{\sigma(1)} \le t_{\sigma(2)} \le \dots \le t_{\sigma(k)} \le 1 \right\}$
</p>

Chacun de ces $k!$ simplexes a exactement le même volume, qui vaut donc la $k!$-ième partie du volume de l'hypercube&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\operatorname{Vol}\_k(\Delta_k) = \int_{0 \le t_1 \le t_2 \le \dots \le t_k \le 1} \mathrm{d}t_1\\,\mathrm{d}t_2\cdots\mathrm{d}t_k = \frac{1}{k!}
$$

</div>

</div>

<br>

<div id="preuve">

Pour toute permutation $\sigma \in \mathfrak{S}\_k$, l'application linéaire $\Phi\_\sigma : (t\_1, \dots, t\_k) \mapsto (t\_{\sigma(1)}, \dots, t\_{\sigma(k)})$ ne fait qu'échanger les noms des axes de coordonnées orthogonaux du cube. C'est une isométrie (sa matrice est une matrice de permutation, donc orthogonale) qui conserve les volumes, et qui envoie bijectivement le secteur $D\_\sigma$ sur le simplexe canonique $\Delta\_k = D\_{\mathrm{id}}$.

Comme les $k!$ secteurs $D\_\sigma$ ont tous le même volume $\operatorname{Vol}\_k(\Delta\_k)$ et que leur réunion forme l'hypercube $[0, 1]^k$ de volume $1$, on a immédiatement&nbsp;:

<p style="text-align:center;">
$\displaystyle 1 = \operatorname{Vol}_k\left([0, 1]^k\right) = \sum_{\sigma \in \mathfrak{S}_k} \operatorname{Vol}_k(D_\sigma) = k! \, \operatorname{Vol}_k(\Delta_k)$ $\displaystyle \quad \Longrightarrow \quad \operatorname{Vol}_k(\Delta_k) = \frac{1}{k!} \qquad \blacksquare$
</p>

</div>

<br>


## L'hypercube dilaté

### Découpage en couches (2D, 3D et dimension $n$)

Maintenant que nous savons que $\frac{1}{k!}$ est le volume d'un simplexe de dimension $k$, revenons à la suite de Bernoulli $u\_n = \left(1 + \frac{1}{n}\right)^n$. Géométriquement, c'est le **volume d'un hypercube de dimension $n$** dont chaque côté mesure $1 + \frac{1}{n}$&nbsp;: un cube unité légèrement «&nbsp;dilaté&nbsp;».

L'idée est de couper chaque côté en deux morceaux, un de longueur $1$ et un de longueur $\frac{1}{n}$, puis de **classer les pavés obtenus selon le nombre $k$ de leurs côtés qui mesurent $\frac{1}{n}$**.

**En 2D**, le carré de côté $1 + \frac{1}{n}$ se découpe en $4$ morceaux&nbsp;:
<ul>
<li>$k = 0$&nbsp;: <b>$1$ carré central</b> $1 \times 1$, d'aire $1$&nbsp;;</li>
<li>$k = 1$&nbsp;: <b>$2$ bandes</b> $1 \times \frac{1}{n}$, d'aire totale $\frac{2}{n}$&nbsp;;</li>
<li>$k = 2$&nbsp;: <b>$1$ petit carré de coin</b> $\frac{1}{n} \times \frac{1}{n}$, d'aire $\frac{1}{n^2}$.</li>
</ul>

**En 3D**, le cube de côté $1 + \frac{1}{n}$ se découpe en $8$ morceaux&nbsp;:
<ul>
<li>$k = 0$&nbsp;: <b>$1$ cœur</b> $1 \times 1 \times 1$, de volume $1$&nbsp;;</li>
<li>$k = 1$&nbsp;: <b>$3$ plaques</b> $1 \times 1 \times \frac{1}{n}$ plaquées sur trois faces du cœur, de volume total $\frac{3}{n}$&nbsp;;</li>
<li>$k = 2$&nbsp;: <b>$3$ baguettes</b> $1 \times \frac{1}{n} \times \frac{1}{n}$ le long de trois arêtes, de volume total $\frac{3}{n^2}$&nbsp;;</li>
<li>$k = 3$&nbsp;: <b>$1$ dé de coin</b> $\frac{1}{n} \times \frac{1}{n} \times \frac{1}{n}$, de volume $\frac{1}{n^3}$.</li>
</ul>

<div class="svg-container">
<svg viewBox="0 0 260 265" role="img" aria-label="Le carré dilaté découpé en un cœur, deux bandes et un coin" style="width:100%;max-width:260px;height:auto;">
<rect x="50.0" y="75.0" width="140.0" height="140.0" rx="2" fill="#e6edf2" stroke="#004D80" stroke-opacity="0.55"/>
<text x="120.0" y="150.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<rect x="199.0" y="75.0" width="46.7" height="140.0" rx="2" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55"/>
<text x="222.3" y="150.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/n</text>
<rect x="50.0" y="19.3" width="140.0" height="46.7" rx="2" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55"/>
<text x="120.0" y="47.7" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/n</text>
<rect x="199.0" y="19.3" width="46.7" height="46.7" rx="2" fill="#6b98b5" stroke="#004D80" stroke-opacity="0.55"/>
<text x="222.3" y="47.7" text-anchor="middle" font-size="12.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >1/n²</text>
<line x1="50.0" y1="230.0" x2="50.0" y2="240.0" stroke="#94a3b8" stroke-width="1" />
<line x1="190.0" y1="230.0" x2="190.0" y2="240.0" stroke="#94a3b8" stroke-width="1" />
<line x1="50.0" y1="235.0" x2="190.0" y2="235.0" stroke="#94a3b8" stroke-width="1" />
<text x="120.0" y="251.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="199.0" y1="230.0" x2="199.0" y2="240.0" stroke="#94a3b8" stroke-width="1" />
<line x1="245.7" y1="230.0" x2="245.7" y2="240.0" stroke="#94a3b8" stroke-width="1" />
<line x1="199.0" y1="235.0" x2="245.7" y2="235.0" stroke="#94a3b8" stroke-width="1" />
<text x="222.3" y="251.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/n</text>
<line x1="25.0" y1="215.0" x2="35.0" y2="215.0" stroke="#94a3b8" stroke-width="1" />
<line x1="25.0" y1="75.0" x2="35.0" y2="75.0" stroke="#94a3b8" stroke-width="1" />
<line x1="30.0" y1="215.0" x2="30.0" y2="75.0" stroke="#94a3b8" stroke-width="1" />
<text x="24.0" y="150.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="25.0" y1="66.0" x2="35.0" y2="66.0" stroke="#94a3b8" stroke-width="1" />
<line x1="25.0" y1="19.3" x2="35.0" y2="19.3" stroke="#94a3b8" stroke-width="1" />
<line x1="30.0" y1="66.0" x2="30.0" y2="19.3" stroke="#94a3b8" stroke-width="1" />
<text x="24.0" y="47.7" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1/n</text>
</svg>
<svg viewBox="0 0 300 320" role="img" aria-label="Le cube dilaté éclaté en huit morceaux : un cœur, trois plaques, trois baguettes et un dé de coin" style="width:100%;max-width:300px;height:auto;">
<style>.cd001{transform:translate(0.0px,-31.6px)}@keyframes cd001-k{from{transform:translate(0.0px,-12.6px)}to{transform:translate(0.0px,-42.2px)}}.cd010{transform:translate(-15.8px,13.3px)}@keyframes cd010-k{from{transform:translate(-6.3px,5.3px)}to{transform:translate(-21.1px,17.7px)}}.cd100{transform:translate(30.7px,7.0px)}@keyframes cd100-k{from{transform:translate(12.3px,2.8px)}to{transform:translate(40.9px,9.3px)}}.cd011{transform:translate(-15.8px,-18.3px)}@keyframes cd011-k{from{transform:translate(-6.3px,-7.3px)}to{transform:translate(-21.1px,-24.5px)}}.cd101{transform:translate(30.7px,-24.7px)}@keyframes cd101-k{from{transform:translate(12.3px,-9.9px)}to{transform:translate(40.9px,-32.9px)}}.cd110{transform:translate(14.9px,20.2px)}@keyframes cd110-k{from{transform:translate(5.9px,8.1px)}to{transform:translate(19.8px,27.0px)}}.cd111{transform:translate(14.9px,-11.4px)}@keyframes cd111-k{from{transform:translate(5.9px,-4.6px)}to{transform:translate(19.8px,-15.2px)}}@media (prefers-reduced-motion:no-preference){.cd001{animation:cd001-k 7s ease-in-out infinite alternate}.cd010{animation:cd010-k 7s ease-in-out infinite alternate}.cd100{animation:cd100-k 7s ease-in-out infinite alternate}.cd011{animation:cd011-k 7s ease-in-out infinite alternate}.cd101{animation:cd101-k 7s ease-in-out infinite alternate}.cd110{animation:cd110-k 7s ease-in-out infinite alternate}.cd111{animation:cd111-k 7s ease-in-out infinite alternate}}</style>
<g><polygon points="118.0,97.0 184.0,112.0 150.0,140.5 84.0,125.6" fill="#e6edf2" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="184.0,180.0 150.0,208.5 150.0,140.5 184.0,112.0" fill="#ccdbe6" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="84.0,193.6 150.0,208.5 150.0,140.5 84.0,125.6" fill="#d9e4ec" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd001"><polygon points="118.0,74.3 184.0,89.3 150.0,117.9 84.0,102.9" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="184.0,112.0 150.0,140.5 150.0,117.9 184.0,89.3" fill="#99b8cc" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="84.0,125.6 150.0,140.5 150.0,117.9 84.0,102.9" fill="#a6c1d3" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd010"><polygon points="84.0,125.6 150.0,140.5 138.6,150.0 72.7,135.1" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="150.0,208.5 138.6,218.0 138.6,150.0 150.0,140.5" fill="#99b8cc" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="72.7,203.1 138.6,218.0 138.6,150.0 72.7,135.1" fill="#a6c1d3" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd100"><polygon points="184.0,112.0 205.9,116.9 171.9,145.5 150.0,140.5" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="205.9,184.9 171.9,213.5 171.9,145.5 205.9,116.9" fill="#99b8cc" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="150.0,208.5 171.9,213.5 171.9,145.5 150.0,140.5" fill="#a6c1d3" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd011"><polygon points="84.0,102.9 150.0,117.9 138.6,127.4 72.7,112.4" fill="#6b98b5" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="150.0,140.5 138.6,150.0 138.6,127.4 150.0,117.9" fill="#5286a9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="72.7,135.1 138.6,150.0 138.6,127.4 72.7,112.4" fill="#5e8faf" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd101"><polygon points="184.0,89.3 205.9,94.3 171.9,122.8 150.0,117.9" fill="#6b98b5" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="205.9,116.9 171.9,145.5 171.9,122.8 205.9,94.3" fill="#5286a9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="150.0,140.5 171.9,145.5 171.9,122.8 150.0,117.9" fill="#5e8faf" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd110"><polygon points="150.0,140.5 171.9,145.5 160.6,155.0 138.6,150.0" fill="#6b98b5" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="171.9,213.5 160.6,223.0 160.6,155.0 171.9,145.5" fill="#5286a9" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="138.6,218.0 160.6,223.0 160.6,155.0 138.6,150.0" fill="#5e8faf" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<g class="cd111"><polygon points="150.0,117.9 171.9,122.8 160.6,132.4 138.6,127.4" fill="#0d5686" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="171.9,145.5 160.6,155.0 160.6,132.4 171.9,122.8" fill="#004d80" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/><polygon points="138.6,150.0 160.6,155.0 160.6,132.4 138.6,127.4" fill="#004d80" stroke="#004D80" stroke-opacity="0.55" stroke-width="1" stroke-linejoin="round"/></g>
<rect x="22" y="292" width="14" height="14" rx="3" fill="#e6edf2" stroke="#004D80" stroke-opacity="0.55"/>
<text x="42.0" y="304.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 0</text>
<rect x="92" y="292" width="14" height="14" rx="3" fill="#b2cad9" stroke="#004D80" stroke-opacity="0.55"/>
<text x="112.0" y="304.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 1</text>
<rect x="162" y="292" width="14" height="14" rx="3" fill="#6b98b5" stroke="#004D80" stroke-opacity="0.55"/>
<text x="182.0" y="304.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 2</text>
<rect x="232" y="292" width="14" height="14" rx="3" fill="#0d5686" stroke="#004D80" stroke-opacity="0.55"/>
<text x="252.0" y="304.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 3</text>
</svg>
</div>
<p class="legende">Le carré et le cube de côté $1 + \frac{1}{n}$ éclatés en leurs $2^2 = 4$ et $2^3 = 8$ morceaux (ici $n = 3$), de plus en plus foncés quand $k$ augmente.</p>

On reconnaît au passage la formule du binôme&nbsp;: $\left(1 + \frac{1}{n}\right)^3 = 1 + \frac{3}{n} + \frac{3}{n^2} + \frac{1}{n^3}$, où chaque terme est une couche.

**En dimension $n$**, l'hypercube dilaté $\left[0, 1 + \frac{1}{n}\right]^n$ se découpe de la même façon en $2^n$ pavés. Un pavé de la **couche $k$** est obtenu en choisissant les $k$ axes (parmi $n$) le long desquels il mesure $\frac{1}{n}$&nbsp;: il y en a $\binom{n}{k}$, chacun de volume $\frac{1}{n^k}$. Le volume total de la couche $k$ vaut donc&nbsp;:

<div id="grosseformule">

$$
V\_{n,k} = \binom{n}{k}\frac{1}{n^k} = \frac{n(n-1)\cdots(n-k+1)}{k!\\;n^k} = \frac{1}{k!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right) \xrightarrow[n \to +\infty]{} \mathbf{\frac{1}{k!}}
$$

</div>

Les couches $k = 0$ et $k = 1$ valent toujours exactement $1$ (le cœur, puis $n$ plaques de volume $\frac{1}{n}$). Les suivantes grandissent avec $n$ et se rapprochent de $\frac{1}{k!}$&nbsp;:

<div class="tableau-large">

| Couche | $n = 3$ | $n = 10$ | $n = 100$ | Limite $\frac{1}{k!}$ |
| :---: | :---: | :---: | :---: | :---: |
| $k = 0$ | $1$ | $1$ | $1$ | $1$ |
| $k = 1$ | $1$ | $1$ | $1$ | $1$ |
| $k = 2$ | $0{,}333$ | $0{,}450$ | $0{,}495$ | $0{,}5$ |
| $k = 3$ | $0{,}037$ | $0{,}120$ | $0{,}162$ | $0{,}167$ |
| $k = 4$ | $0$ | $0{,}021$ | $0{,}039$ | $0{,}042$ |
| **Total** | $u\_3 \approx 2{,}370$ | $u\_{10} \approx 2{,}594$ | $u\_{100} \approx 2{,}705$ | $\mathrm{e} \approx 2{,}718$ |

</div>

En sommant toutes les couches, $u\_n = \sum\_{k=0}^{n} V\_{n,k}$ tend donc vers $\sum\_{k=0}^{+\infty} \frac{1}{k!} = \mathrm{e}$. (Pour être rigoureux, il faut justifier l'échange de la limite et de la somme&nbsp;: c'est possible ici car $0 \le V\_{n,k} \le \frac{1}{k!}$ pour tous $n$ et $k$, et la série $\sum \frac{1}{k!}$ converge&nbsp;; c'est le *théorème de Tannery*.)

**Pourquoi la couche $k$ ressemble-t-elle au simplexe $\Delta\_k$&nbsp;?** Choisir un pavé de la couche $k$, c'est choisir $k$ axes parmi $n$, autrement dit $k$ indices $i\_1 < i\_2 < \dots < i\_k$ (rangés dans l'ordre croissant pour ne compter chaque choix qu'une fois). Associons à ce choix le petit cube de côté $\frac{1}{n}$ dont le coin supérieur est $\left(\frac{i\_1}{n}, \dots, \frac{i\_k}{n}\right)$. Comme les indices sont strictement croissants, ces petits cubes s'empilent en escalier **à l'intérieur de $\Delta\_k$**, et leur volume total est exactement $\binom{n}{k}\frac{1}{n^k} = V\_{n,k}$. Quand $n$ grandit, les marches s'affinent et l'escalier remplit tout le simplexe.

<div class="svg-container">
<svg viewBox="0 0 420 220" role="img" aria-label="Les couples d'indices i₁ < i₂ forment un escalier qui remplit le triangle Δ₂" style="width:100%;max-width:420px;height:auto;">
<rect x="40" y="35" width="150" height="150" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<rect x="40.00" y="125.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="40.00" y="95.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="40.00" y="65.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="40.00" y="35.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="70.00" y="95.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="70.00" y="65.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="70.00" y="35.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="100.00" y="65.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="100.00" y="35.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<rect x="130.00" y="35.00" width="30.00" height="30.00" fill="#adc6d6" stroke="#fff" stroke-width="1.2"/>
<polygon points="40.0,185.0 40.0,35.0 190.0,35.0" fill="none" stroke="#970E53" stroke-width="1.6" stroke-linejoin="round"/>
<text x="115.0" y="209.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >n = 5</text>
<text x="148.0" y="147.5" text-anchor="middle" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >aire 0,40</text>
<rect x="250" y="35" width="150" height="150" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<rect x="250.00" y="165.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="155.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="145.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="135.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="125.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="250.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="155.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="145.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="135.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="125.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="260.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="145.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="135.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="125.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="270.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="135.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="125.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="280.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="125.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="290.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="115.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="300.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="105.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="310.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="95.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="320.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="85.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="330.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="340.00" y="75.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="340.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="340.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="340.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="340.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="350.00" y="65.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="350.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="350.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="350.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="360.00" y="55.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="360.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="360.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="370.00" y="45.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="370.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<rect x="380.00" y="35.00" width="10.00" height="10.00" fill="#adc6d6" stroke="#fff" stroke-width="0.6"/>
<polygon points="250.0,185.0 250.0,35.0 400.0,35.0" fill="none" stroke="#970E53" stroke-width="1.6" stroke-linejoin="round"/>
<text x="325.0" y="209.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >n = 15</text>
<text x="358.0" y="147.5" text-anchor="middle" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >aire 0,47</text>
</svg>
</div>
<p class="legende">Pour $k = 2$&nbsp;: chaque couple $i_1 &lt; i_2$ donne un carré de côté $\frac{1}{n}$. L'escalier, d'aire $\binom{n}{2}\frac{1}{n^2} = V_{n,2}$, remplit le triangle $\Delta_2$ quand $n$ grandit.</p>

### Invariance d'aire sous l'hyperbole

Une troisième figure classique relie la suite de Bernoulli à $\mathrm{e}$&nbsp;: l'aire sous l'hyperbole $y = \frac{1}{x}$. Notons $\mathcal{A}(a, b)$ l'aire sous la courbe entre les abscisses $a$ et $b$ (c'est $\ln b - \ln a$, et $\mathrm{e}$ est précisément le nombre tel que $\mathcal{A}(1, \mathrm{e}) = 1$).

**La propriété clé&nbsp;:** si l'on étire les abscisses d'un facteur $c > 0$ tout en comprimant les ordonnées du même facteur, l'hyperbole ne bouge pas (le point $(x, \frac{1}{x})$ va en $(cx, \frac{1}{cx})$), et les aires sont conservées (elles sont multipliées par $c \times \frac{1}{c} = 1$). Ainsi $\mathcal{A}(ca, cb) = \mathcal{A}(a, b)$&nbsp;: une tranche plus loin mais proportionnellement plus large a la même aire.

En prenant $c = 1 + \frac{1}{n}$, les $n$ tranches successives $\left[c^j, c^{j+1}\right]$ entre $x = 1$ et $x = c^n = u\_n$ ont donc **toutes la même aire** que la première&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 430 265" role="img" aria-label="Aire sous l'hyperbole y = 1/x découpée en tranches d'aires égales" style="width:100%;max-width:430px;height:auto;">
<defs><marker id="fh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="80.0,220.0 80.0,61.7 81.3,63.0 82.7,64.3 84.0,65.5 85.3,66.8 86.7,68.0 88.0,69.2 89.3,70.4 90.7,71.6 92.0,72.7 93.3,73.8 94.7,75.0 96.0,76.1 97.3,77.1 98.7,78.2 100.0,79.3 101.3,80.3 102.7,81.3 104.0,82.3 105.3,83.3 106.7,84.3 108.0,85.2 109.3,86.2 110.7,87.1 112.0,88.1 113.3,89.0 114.7,89.9 116.0,90.7 117.3,91.6 118.7,92.5 120.0,93.3 120.0,220.0" fill="#c7d8e3" stroke="#fff" stroke-width="2"/>
<text x="100.0" y="154.6" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">𝒜</text>
<polygon points="120.0,220.0 120.0,93.3 121.7,94.4 123.3,95.4 125.0,96.4 126.7,97.4 128.3,98.4 130.0,99.4 131.7,100.3 133.3,101.2 135.0,102.2 136.7,103.1 138.3,104.0 140.0,104.8 141.7,105.7 143.3,106.6 145.0,107.4 146.7,108.2 148.3,109.1 150.0,109.9 151.7,110.6 153.3,111.4 155.0,112.2 156.7,113.0 158.3,113.7 160.0,114.4 161.7,115.2 163.3,115.9 165.0,116.6 166.7,117.3 168.3,118.0 170.0,118.7 170.0,220.0" fill="#e0eaf0" stroke="#fff" stroke-width="2"/>
<text x="145.0" y="168.7" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">𝒜</text>
<polygon points="170.0,220.0 170.0,118.7 172.1,119.5 174.2,120.3 176.2,121.1 178.3,121.9 180.4,122.7 182.5,123.5 184.6,124.3 186.7,125.0 188.8,125.7 190.8,126.5 192.9,127.2 195.0,127.9 197.1,128.6 199.2,129.3 201.2,129.9 203.3,130.6 205.4,131.2 207.5,131.9 209.6,132.5 211.7,133.1 213.8,133.8 215.8,134.4 217.9,135.0 220.0,135.6 222.1,136.1 224.2,136.7 226.3,137.3 228.3,137.8 230.4,138.4 232.5,138.9 232.5,220.0" fill="#c7d8e3" stroke="#fff" stroke-width="2"/>
<text x="201.2" y="180.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">𝒜</text>
<polygon points="232.5,220.0 232.5,138.9 235.1,139.6 237.7,140.3 240.3,140.9 242.9,141.5 245.5,142.2 248.1,142.8 250.7,143.4 253.3,144.0 255.9,144.6 258.5,145.2 261.1,145.7 263.8,146.3 266.4,146.9 269.0,147.4 271.6,147.9 274.2,148.5 276.8,149.0 279.4,149.5 282.0,150.0 284.6,150.5 287.2,151.0 289.8,151.5 292.4,152.0 295.0,152.4 297.6,152.9 300.2,153.4 302.8,153.8 305.4,154.3 308.0,154.7 310.6,155.1 310.6,220.0" fill="#e0eaf0" stroke="#fff" stroke-width="2"/>
<text x="271.6" y="189.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">𝒜</text>
<polyline points="57.6,35.9 59.3,38.1 60.9,40.3 62.6,42.4 64.3,44.4 66.0,46.4 67.6,48.4 69.3,50.3 71.0,52.2 72.6,54.0 74.3,55.8 76.0,57.6 77.7,59.3 79.3,61.0 81.0,62.7 82.7,64.3 84.4,65.9 86.0,67.4 87.7,68.9 89.4,70.4 91.0,71.9 92.7,73.3 94.4,74.7 96.1,76.1 97.7,77.5 99.4,78.8 101.1,80.1 102.7,81.4 104.4,82.6 106.1,83.9 107.8,85.1 109.4,86.3 111.1,87.4 112.8,88.6 114.4,89.7 116.1,90.8 117.8,91.9 119.5,93.0 121.1,94.0 122.8,95.1 124.5,96.1 126.2,97.1 127.8,98.1 129.5,99.1 131.2,100.0 132.8,101.0 134.5,101.9 136.2,102.8 137.9,103.7 139.5,104.6 141.2,105.5 142.9,106.3 144.5,107.2 146.2,108.0 147.9,108.8 149.6,109.6 151.2,110.4 152.9,111.2 154.6,112.0 156.2,112.8 157.9,113.5 159.6,114.3 161.3,115.0 162.9,115.7 164.6,116.4 166.3,117.1 168.0,117.8 169.6,118.5 171.3,119.2 173.0,119.9 174.6,120.5 176.3,121.2 178.0,121.8 179.7,122.4 181.3,123.1 183.0,123.7 184.7,124.3 186.3,124.9 188.0,125.5 189.7,126.1 191.4,126.6 193.0,127.2 194.7,127.8 196.4,128.3 198.0,128.9 199.7,129.4 201.4,130.0 203.1,130.5 204.7,131.0 206.4,131.5 208.1,132.1 209.8,132.6 211.4,133.1 213.1,133.6 214.8,134.1 216.4,134.5 218.1,135.0 219.8,135.5 221.5,136.0 223.1,136.4 224.8,136.9 226.5,137.3 228.1,137.8 229.8,138.2 231.5,138.7 233.2,139.1 234.8,139.5 236.5,140.0 238.2,140.4 239.8,140.8 241.5,141.2 243.2,141.6 244.9,142.0 246.5,142.4 248.2,142.8 249.9,143.2 251.6,143.6 253.2,144.0 254.9,144.4 256.6,144.7 258.2,145.1 259.9,145.5 261.6,145.8 263.3,146.2 264.9,146.6 266.6,146.9 268.3,147.3 269.9,147.6 271.6,148.0 273.3,148.3 275.0,148.6 276.6,149.0 278.3,149.3 280.0,149.6 281.6,150.0 283.3,150.3 285.0,150.6 286.7,150.9 288.3,151.2 290.0,151.5 291.7,151.8 293.4,152.1 295.0,152.4 296.7,152.7 298.4,153.0 300.0,153.3 301.7,153.6 303.4,153.9 305.1,154.2 306.7,154.5 308.4,154.8 310.1,155.1 311.7,155.3 313.4,155.6 315.1,155.9 316.8,156.1 318.4,156.4 320.1,156.7 321.8,156.9 323.4,157.2 325.1,157.5 326.8,157.7 328.5,158.0 330.1,158.2 331.8,158.5 333.5,158.7 335.2,159.0 336.8,159.2 338.5,159.5 340.2,159.7 341.8,159.9 343.5,160.2 345.2,160.4 346.9,160.7 348.5,160.9 350.2,161.1 351.9,161.3 353.5,161.6 355.2,161.8 356.9,162.0 358.6,162.2 360.2,162.5 361.9,162.7 363.6,162.9 365.2,163.1 366.9,163.3 368.6,163.5 370.3,163.7 371.9,163.9 373.6,164.2 375.3,164.4 377.0,164.6 378.6,164.8 380.3,165.0 382.0,165.2 383.6,165.4 385.3,165.6 387.0,165.8 388.7,165.9 390.3,166.1 392.0,166.3" fill="none" stroke="#004D80" stroke-width="2"/>
<line x1="40.0" y1="220.0" x2="412.0" y2="220.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fh)"/>
<line x1="40.0" y1="220.0" x2="40.0" y2="22.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fh)"/>
<text x="414.0" y="238.0" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x</text>
<text x="32.0" y="30.0" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >y</text>
<line x1="36.0" y1="61.7" x2="44.0" y2="61.7" stroke="#94a3b8" stroke-width="1" />
<text x="32.0" y="66.7" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="376.0" y="154.4" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >y = 1/x</text>
<line x1="80.0" y1="220.0" x2="80.0" y2="224.0" stroke="#94a3b8" stroke-width="1" />
<text x="80.0" y="238.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="310.6" y1="220.0" x2="310.6" y2="224.0" stroke="#94a3b8" stroke-width="1" />
<text x="310.6" y="238.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >u<tspan dy='3' font-size='10'>4</tspan></text>
<line x1="354.9" y1="220.0" x2="354.9" y2="161.8" stroke="#970E53" stroke-width="1.4" stroke-dasharray="4 3"/>
<text x="354.9" y="238.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >e</text>
</svg>
</div>
<p class="legende">Pour $n = 4$&nbsp;: les tranches $[c^j, c^{j+1}]$ avec $c = 1 + \frac{1}{4}$ s'élargissent mais gardent toutes la même aire $\mathcal{A}$.</p>

L'aire totale vaut donc $\mathcal{A}(1, u\_n) = n \times \mathcal{A}\left(1, 1 + \frac{1}{n}\right)$. Or, sur la première tranche, de largeur $\frac{1}{n}$, la courbe reste comprise entre $\frac{n}{n+1}$ et $1$, si bien que $\mathcal{A}\left(1, 1 + \frac{1}{n}\right)$ est comprise entre $\frac{1}{n+1}$ et $\frac{1}{n}$. En multipliant par $n$&nbsp;:

$$
\frac{n}{n+1} \le \mathcal{A}(1, u\_n) \le 1.
$$

Quand $n \to +\infty$, l'aire $\mathcal{A}(1, u\_n)$ tend donc vers $1 = \mathcal{A}(1, \mathrm{e})$&nbsp;: autrement dit $\ln u\_n \to 1$, et $u\_n \to \mathrm{e}$.


## Flèche du temps : Dyson et Wick

Jusqu'ici, le simplexe $\Delta\_k$ était une figure géométrique. Il apparaît tout aussi naturellement dès qu'un phénomène se construit **par étapes successives dans le temps**&nbsp;: la contrainte «&nbsp;chaque étape a lieu après la précédente&nbsp;» découpe exactement un simplexe dans l'hypercube de tous les instants possibles. C'est ce mécanisme qui fait surgir les $\frac{1}{n!}$ de la **série de Dyson** en mécanique quantique.

Nous allons y arriver en quatre temps&nbsp;: une histoire de croissance (l'intuition), le même calcul en équations (l'itération de Picard), sa version quantique (la série de Dyson), et enfin la subtilité propre au quantique (l'ordre des opérateurs).

### Une croissance racontée génération par génération

Imaginons une population (de bactéries, ou un capital placé à intérêts continus) qui croît au taux de $100\\,\\%$ par unité de temps&nbsp;: chaque unité de matière en produit de la nouvelle au rythme de $1$ par unité de temps, et cette matière nouvelle se met **immédiatement** à produire à son tour. En équation, $L'(t) = L(t)$ avec $L(0) = 1$, et l'on sait que $L(1) = \mathrm{e}$.

Trions la matière présente à l'instant $t = 1$ selon sa **génération**&nbsp;:
<ul>
<li><b>Génération 0</b>&nbsp;: la matière initiale, de quantité $1$.</li>
<li><b>Génération 1</b>&nbsp;: produite directement par la matière initiale. Entre $s_1$ et $s_1 + \mathrm{d}s_1$, celle-ci en produit $\mathrm{d}s_1$&nbsp;; au total, $\int_0^1 \mathrm{d}s_1 = 1$.</li>
<li><b>Génération 2</b>&nbsp;: produite par de la matière de génération 1. Un morceau de génération 1 né à l'instant $s_1$ produit à son tour à tout instant <i>ultérieur</i> $s_2 \ge s_1$. Chaque morceau de génération 2 est donc repéré par un couple d'instants $0 \le s_1 \le s_2 \le 1$, c'est-à-dire par un point du triangle $\Delta_2$&nbsp;: la quantité totale est l'aire de $\Delta_2$, soit $\frac{1}{2}$.</li>
<li><b>Génération $k$</b>&nbsp;: elle est issue d'une lignée de $k$ naissances successives aux instants $0 \le s_1 \le s_2 \le \dots \le s_k \le 1$&nbsp;; sa quantité est le volume de $\Delta_k$, soit $\frac{1}{k!}$.</li>
</ul>

<div class="svg-container">
<svg viewBox="0 0 470 245" role="img" aria-label="Arbre des générations : chaque génération naît après la précédente" style="width:100%;max-width:470px;height:auto;">
<text x="106.0" y="45.0" text-anchor="end" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >génération 0</text>
<line x1="120.0" y1="40.0" x2="420.0" y2="40.0" stroke="#bfd2df" stroke-width="7" stroke-linecap="round"/>
<text x="106.0" y="90.0" text-anchor="end" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >génération 1</text>
<line x1="186.0" y1="85.0" x2="420.0" y2="85.0" stroke="#8cafc6" stroke-width="7" stroke-linecap="round"/>
<path d="M186.0,40 C186.0,65 186.0,65 187.0,85" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
<circle cx="186.0" cy="40" r="4.5" fill="#970E53"/>
<line x1="186.0" y1="91.0" x2="186.0" y2="205.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
<text x="186.0" y="226.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >s<tspan dy='3' font-size='10'>1</tspan></text>
<text x="106.0" y="135.0" text-anchor="end" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >génération 2</text>
<line x1="264.0" y1="130.0" x2="420.0" y2="130.0" stroke="#5286a9" stroke-width="7" stroke-linecap="round"/>
<path d="M264.0,85 C264.0,110 264.0,110 265.0,130" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
<circle cx="264.0" cy="85" r="4.5" fill="#970E53"/>
<line x1="264.0" y1="136.0" x2="264.0" y2="205.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
<text x="264.0" y="226.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >s<tspan dy='3' font-size='10'>2</tspan></text>
<text x="106.0" y="180.0" text-anchor="end" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >génération 3</text>
<line x1="333.0" y1="175.0" x2="420.0" y2="175.0" stroke="#0d5686" stroke-width="7" stroke-linecap="round"/>
<path d="M333.0,130 C333.0,155 333.0,155 334.0,175" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
<circle cx="333.0" cy="130" r="4.5" fill="#970E53"/>
<line x1="333.0" y1="181.0" x2="333.0" y2="205.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
<text x="333.0" y="226.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >s<tspan dy='3' font-size='10'>3</tspan></text>
<line x1="120.0" y1="205.0" x2="420.0" y2="205.0" stroke="#94a3b8" stroke-width="1" />
<line x1="120.0" y1="201.0" x2="120.0" y2="209.0" stroke="#94a3b8" stroke-width="1" />
<text x="120.0" y="226.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="420.0" y1="201.0" x2="420.0" y2="209.0" stroke="#94a3b8" stroke-width="1" />
<text x="420.0" y="226.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="432.0" y="209.0" text-anchor="start" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >temps</text>
</svg>
</div>
<p class="legende">Une lignée de génération 3 est repérée par trois instants de naissance forcément ordonnés, $s_1 \le s_2 \le s_3$&nbsp;: c'est un point de $\Delta_3$.</p>

En additionnant toutes les générations&nbsp;: $L(1) = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots = \mathrm{e}$. Les factorielles ne sortent pas d'un dénombrement artificiel&nbsp;: **$\frac{1}{k!}$ est la part des $k$-uplets d'instants qui respectent l'ordre chronologique**.

### Itération de Picard

Refaisons ce calcul en équations. L'équation $L' = L$ avec $L(0) = 1$ équivaut à

$$
L(t) = 1 + \int\_0^t L(t\_1)\\,\mathrm{d}t\_1,
$$

ce qui se lit&nbsp;: «&nbsp;la quantité à l'instant $t$ est la quantité initiale plus tout ce qui a été produit entre $0$ et $t$&nbsp;». On ne connaît pas $L$ sous l'intégrale... alors **remplaçons-la par sa propre expression**, et recommençons&nbsp;:

$$
L(t) = 1 + \int\_0^t \mathrm{d}t\_1 + \int\_0^t \mathrm{d}t\_1 \int\_0^{t\_1} \mathrm{d}t\_2 + \int\_0^t \mathrm{d}t\_1 \int\_0^{t\_1} \mathrm{d}t\_2 \int\_0^{t\_2} \mathrm{d}t\_3 + \cdots
$$

Chaque réinjection fait descendre d'une génération. Le terme d'ordre $k$ est une intégrale sur le domaine $\\{t \ge t\_1 \ge t\_2 \ge \dots \ge t\_k \ge 0\\}$&nbsp;: c'est le simplexe $\Delta\_k$ agrandi d'un facteur $t$, de volume $\frac{t^k}{k!}$. On retrouve ainsi

$$
L(t) = \sum\_{k=0}^{+\infty} \frac{t^k}{k!} = \mathrm{e}^t.
$$

Remarquez que les instants sont ici numérotés **en remontant le temps**&nbsp;: $t\_1$ est le plus récent, $t\_k$ le plus ancien. C'est la convention des physiciens, que nous garderons. Ce procédé, réinjecter l'équation dans elle-même, s'appelle l'**itération de Picard**&nbsp;; c'est aussi le cœur de la démonstration du théorème de Cauchy-Lipschitz.

### Version quantique : la série de Dyson

En mécanique quantique, l'état d'un système passe de l'instant $t'$ à l'instant $t$ sous l'action d'un **opérateur d'évolution** $\hat U\_I(t, t')$. En représentation d'interaction (et avec $\hbar = 1$), il obéit à

<p style="text-align:center;">
$\displaystyle \mathrm{i}\,\partial_t \hat U_I(t, t') = \hat H_I(t)\,\hat U_I(t, t'),$ $\displaystyle \qquad \text{avec} \quad \hat U_I(t', t') = \hat{\mathbb{1}}.$
</p>

C'est la même équation que $L' = L$, à deux différences près&nbsp;: un facteur $-\mathrm{i}$, et surtout le fait que $\hat H\_I(t)$ est un **opérateur** (penser à une matrice) qui dépend du temps. On l'écrit sous forme intégrale, $\hat U\_I(t, t') = \hat{\mathbb{1}} - \mathrm{i}\int\_{t'}^{t} \mathrm{d}t\_1 \\, \hat H\_I(t\_1)\\,\hat U\_I(t\_1, t')$, puis on itère exactement comme Picard (voir les notes de lecture [TQC 6](/physique/tqc/gifted_amateur/tqc6/#théorie-des-perturbations-et-équation-de-dyson) et [TQC 7](/physique/tqc/gifted_amateur/tqc7/#la-série-de-dyson))&nbsp;:

<div id="def">

La **série de Dyson** est le développement de l'opérateur d'évolution en puissances de l'interaction $\hat{H}\_I$&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\hat U_I(t, t') = \hat{\mathbb{1}} + \sum_{n=1}^{+\infty} (-\mathrm{i})^n \int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2 \cdots \int_{t'}^{t_{n-1}}\mathrm{d}t_n \\; \hat H_I(t_1)\hat H_I(t_2)\cdots\hat H_I(t_n)
$$

</div>

</div>

<br>

Le terme d'ordre $n$ décrit les histoires où le système subit **$n$ interactions** aux instants $t' \le t\_n \le \dots \le t\_2 \le t\_1 \le t$. Le domaine d'intégration est, comme pour Picard, un simplexe&nbsp;: parmi les $n!$ simplexes qui pavent l'hypercube des temps $[t', t]^n$, la causalité n'en retient **qu'un seul**, celui où les interactions se succèdent dans l'ordre chronologique.

Un détail compte désormais&nbsp;: **l'ordre d'écriture des opérateurs**. Dans le produit $\hat H\_I(t\_1)\hat H\_I(t\_2)\cdots\hat H\_I(t\_n)$, le plus récent est à gauche et le plus ancien à droite, car c'est l'opérateur de droite qui agit en premier sur l'état, comme $f$ dans la composée $g \circ f$.

<div class="svg-container">
<svg viewBox="0 0 420 205" role="img" aria-label="Les opérateurs de la série de Dyson sont rangés du plus récent au plus ancien" style="width:100%;max-width:420px;height:auto;">
<line x1="40.0" y1="60.0" x2="380.0" y2="60.0" stroke="#94a3b8" stroke-width="1.2" />
<path d="M372,55 L380,60 L372,65" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
<text x="40.0" y="46.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t′</text>
<line x1="40.0" y1="55.0" x2="40.0" y2="65.0" stroke="#94a3b8" stroke-width="1.2" />
<text x="376.0" y="46.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t</text>
<text x="210.0" y="30.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >temps →</text>
<circle cx="312.0" cy="60" r="5" fill="#970E53"/>
<text x="312.0" y="84.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t<tspan dy='3' font-size='10'>1</tspan></text>
<line x1="312.0" y1="94.0" x2="125.0" y2="136.0" stroke="#dbabc3" stroke-width="1.3" />
<text x="125.0" y="160.0" text-anchor="middle" font-size="17" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >H(t<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'>)</tspan></text>
<circle cx="216.8" cy="60" r="5" fill="#970E53"/>
<text x="216.8" y="84.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t<tspan dy='3' font-size='10'>2</tspan></text>
<line x1="216.8" y1="94.0" x2="210.0" y2="136.0" stroke="#dbabc3" stroke-width="1.3" />
<text x="210.0" y="160.0" text-anchor="middle" font-size="17" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >H(t<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'>)</tspan></text>
<circle cx="114.8" cy="60" r="5" fill="#970E53"/>
<text x="114.8" y="84.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t<tspan dy='3' font-size='10'>3</tspan></text>
<line x1="114.8" y1="94.0" x2="295.0" y2="136.0" stroke="#dbabc3" stroke-width="1.3" />
<text x="295.0" y="160.0" text-anchor="middle" font-size="17" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >H(t<tspan dy='3' font-size='10'>3</tspan><tspan dy='-3'>)</tspan></text>
<text x="210.0" y="190.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >← ordre d'action sur l'état</text>
</svg>
</div>
<p class="legende">Les interactions se succèdent de gauche à droite sur l'axe du temps, mais les opérateurs s'écrivent dans l'ordre inverse&nbsp;: le plus ancien, $\hat H_I(t_3)$, agit en premier.</p>

### Pourquoi l'ordre compte : le produit chronologique $T$

Avec des nombres, tout était simple&nbsp;: l'intégrande $1$ est symétrique, les $n!$ simplexes de l'hypercube donnent la même contribution (c'est l'approche 2&nbsp;!), et l'intégrale sur le simplexe vaut $\frac{1}{n!}$ fois l'intégrale sur l'hypercube. De même, si les $\hat H\_I(t)$ à des instants différents commutaient entre eux, on obtiendrait simplement $\hat U\_I = \exp\left(-\mathrm{i}\int \hat H\_I\right)$.

Mais en général ils **ne commutent pas**&nbsp;:

<p style="text-align:center;">
$\displaystyle \left[\hat H_I(t_1),\, \hat H_I(t_2)\right] = \hat H_I(t_1)\hat H_I(t_2) - \hat H_I(t_2)\hat H_I(t_1) \neq 0.$
</p>

C'est comme pour les rotations d'un livre&nbsp;: tourner d'un quart de tour autour d'un axe vertical puis autour d'un axe horizontal ne donne pas le même résultat que l'inverse. **L'ordre des interactions importe**, et l'on ne peut plus échanger librement les simplexes.

Regardons ce qui se passe à l'ordre $n = 2$, sur le carré des temps $[t', t]^2$. Dyson n'intègre que sur le triangle causal $t\_1 \ge t\_2$, avec l'intégrande $\hat H\_I(t\_1)\hat H\_I(t\_2)$ (le plus récent à gauche). Pour étendre l'intégrale à tout le carré, il faut que l'autre triangle, où $t\_2 > t\_1$, contienne lui aussi le produit **rangé chronologiquement**, soit $\hat H\_I(t\_2)\hat H\_I(t\_1)$. C'est exactement ce que fait l'opérateur d'ordonnancement chronologique introduit par Freeman Dyson (1949) et Gian-Carlo Wick (1950)&nbsp;:

<div id="def">

Pour deux instants $t\_1$ et $t\_2$, le <b>produit chronologique $T$</b> est défini par&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
T\big[\hat H_I(t_1)\hat H_I(t_2)\big] = \begin{cases}
\hat H_I(t_1)\hat H_I(t_2) & \text{si } t_1 \ge t_2, \\\\
\hat H_I(t_2)\hat H_I(t_1) & \text{si } t_2 > t_1.
\end{cases}
$$

</div>

Plus généralement, si $\sigma \in \mathfrak{S}\_n$ est la permutation qui range les instants dans l'ordre décroissant, $t\_{\sigma(1)} \ge t\_{\sigma(2)} \ge \dots \ge t\_{\sigma(n)}$, alors $\displaystyle T\big[\hat H\_I(t\_1)\cdots\hat H\_I(t\_n)\big] = \hat H\_I\big(t\_{\sigma(1)}\big)\cdots\hat H\_I\big(t\_{\sigma(n)}\big)$.

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 270 245" role="img" aria-label="Le carré des temps : sous T, chaque moitié contient le produit rangé chronologiquement" style="width:100%;max-width:270px;height:auto;">
<defs><marker id="ft" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="60.0,200.0 220.0,200.0 220.0,40.0" fill="#eed8e3" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
<polygon points="60.0,200.0 60.0,40.0 220.0,40.0" fill="#e0eaf0" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
<line x1="60.0" y1="200.0" x2="220.0" y2="40.0" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="60.0" y1="200.0" x2="242.0" y2="200.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#ft)"/>
<line x1="60.0" y1="200.0" x2="60.0" y2="18.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#ft)"/>
<text x="244.0" y="218.0" text-anchor="end" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t<tspan dy='3' font-size='11'>1</tspan></text>
<text x="70.0" y="28.0" text-anchor="start" font-size="16" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t<tspan dy='3' font-size='11'>2</tspan></text>
<text x="54.0" y="217.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t′</text>
<text x="220.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t</text>
<text x="52.0" y="45.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >t</text>
<text x="165.6" y="160.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >H(t<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'>) H(t</tspan><tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'>)</tspan></text>
<text x="114.4" y="76.8" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >H(t<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'>) H(t</tspan><tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'>)</tspan></text>
</svg>
</div>
<p class="legende">Sous $T$, chaque moitié du carré contient le produit rangé chronologiquement (le plus récent à gauche)&nbsp;: les deux moitiés donnent la même intégrale.</p>

Le produit $T[\cdots]$ ne dépend plus de l'ordre dans lequel on écrit ses arguments&nbsp;: il est **symétrique**. La symétrie de l'approche 2 est restaurée, les $n!$ simplexes de l'hypercube $[t', t]^n$ donnent tous la même contribution, et le facteur $\frac{1}{n!}$ réapparaît&nbsp;:

<div id="theo">

<b>Théorème (Exponentielle ordonnée dans le temps).</b> Pour tout $n \ge 1$, l'intégrale sur le simplexe causal vaut $\frac{1}{n!}$ fois l'intégrale sur l'hypercube complet $[t', t]^n$ du produit chronologique&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2 \cdots \int_{t'}^{t_{n-1}}\mathrm{d}t_n \\; \hat H_I(t_1)\cdots\hat H_I(t_n) = \frac{1}{n!} \int_{t'}^{t}\mathrm{d}t_1 \cdots \int_{t'}^{t}\mathrm{d}t_n \\; T\big[\hat H_I(t_1)\cdots\hat H_I(t_n)\big]
$$

</div>

En sommant sur $n \ge 0$, l'opérateur d'évolution et la matrice de diffusion $\hat S = \hat U\_I(+\infty, -\infty)$ s'écrivent comme des **exponentielles ordonnées dans le temps**&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\hat U_I(t, t') = T\exp\left(-\mathrm{i}\int_{t'}^{t}\mathrm{d}t_1\\,\hat H_I(t_1)\right) \quad \Longrightarrow \quad \hat{S} = T\exp\left(-\mathrm{i}\int \mathrm{d}^4x\\,\hat{\mathcal H}_I(x)\right)
$$

</div>

</div>

<br>

En résumé, la physique quantique suit pas à pas le modèle de la croissance exponentielle, et ne s'en écarte que sur un point&nbsp;:

<div class="tableau-large">

| | Croissance (nombres) | Évolution quantique (opérateurs) |
| :--- | :--- | :--- |
| Équation | $L' = L$ | $\mathrm{i}\\,\partial\_t \hat U\_I = \hat H\_I(t)\\,\hat U\_I$ |
| Terme d'ordre $n$ | intégrale sur un simplexe | intégrale sur un simplexe |
| Ordre des facteurs | indifférent | essentiel (non-commutativité) |
| Passage à l'hypercube | facteur $\frac{1}{n!}$ directement | facteur $\frac{1}{n!}$ grâce à $T$ |
| Résultat | $L(t) = \mathrm{e}^t$ | $\hat U\_I = T\exp\left(-\mathrm{i}\int \hat H\_I\right)$ |

</div>

### Les $\frac{1}{n!}$ dans les diagrammes de Feynman

Ce facteur $\frac{1}{n!}$ a une conséquence très concrète en théorie quantique des champs. En développant $\hat S = T\exp\left(-\mathrm{i}\int \hat{\mathcal H}\_I\right)$, le terme d'ordre $n$ est une intégrale sur $n$ points d'espace-temps $x\_1, \dots, x\_n$ du produit $T\big[\hat{\mathcal H}\_I(x\_1)\cdots\hat{\mathcal H}\_I(x\_n)\big]$, précédée de $\frac{1}{n!}$. Le [théorème de Wick](/physique/tqc/gifted_amateur/tqc7/#le-théorème-de-wick) transforme ce produit en une somme de termes, que l'on dessine comme des **diagrammes de Feynman** à $n$ sommets.

Or les étiquettes $x\_1, \dots, x\_n$ des sommets sont des variables d'intégration muettes&nbsp;: **renuméroter les sommets** d'un diagramme (il y a $n!$ façons de le faire) donne un terme de même valeur. Ces $n!$ copies compensent exactement le $\frac{1}{n!}$ venu du volume du simplexe de Dyson, si bien qu'on peut dessiner chaque diagramme une seule fois, sans facteur $\frac{1}{n!}$ (voir [TQC 7](/physique/tqc/gifted_amateur/tqc7/#moudre-avec-wick) et [TQC 12](/physique/tqc/gifted_amateur/tqc12/)). Lorsque le diagramme possède lui-même des symétries, certaines renumérotations ne produisent pas de terme nouveau&nbsp;: la compensation est alors incomplète, et c'est l'une des origines des fameux **facteurs de symétrie**.


<hr style="margin:2em 0;border:none;border-top:1px solid #cbd5e1;">

<div style="background:#f8fafc;border:1px solid #cbd5e1;border-left:6px solid #970E53;border-radius:10px;padding:14px 18px;font-size:0.95em;">
<b>Que donne la géométrie du simplexe en probabilités&nbsp;?</b><br>
Puisque le volume du simplexe canonique $\Delta_k = \{0 \le t_1 \le \dots \le t_k \le 1\}$ vaut $\frac{1}{k!}$, tout événement aléatoire qui revient à imposer un ordre croissant entre $k$ tirages indépendants a automatiquement une probabilité égale à $\frac{1}{k!}$&nbsp;!

👉 <b><a href="../../proba/simplexes_proba/">Simplexes et probabilités</a>&nbsp;:</b> découvrez comment le simplexe $\Delta_k$ résout presque sans calcul la rupture de monotonie ($\mathbb{E}[N] = \mathrm{e}$), le problème du seuil de Gnedenko ($\mathbb{E}[M] = \mathrm{e}$) et le problème des chapeaux de Montmort ($\lim p_n = \mathrm{e}^{-1}$).</li>
</div>
