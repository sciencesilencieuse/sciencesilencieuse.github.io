+++
title = "Simplexes et probabilités"
date = 2026-10-31T16:00:00+01:00
weight = 3
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
</style>


# Simplexes et probabilités
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Rupture de monotonie, seuil de Gnedenko et dérangements de Montmort</i></p>


Dans [cette partie géométrique](../../geometrie/simplexes/), nous avons vu que le **simplexe canonique $\Delta\_k$** (l'ensemble des points de l'hypercube unité $[0, 1]^k$ dont les coordonnées sont rangées par ordre croissant $0 \le t\_1 \le t\_2 \le \dots \le t\_k \le 1$) possède un volume exactement égal à $\mathbf{\frac{1}{k!}}$, car les $k!$ permutations de ses axes découpent l'hypercube $[0, 1]^k$ en $k!$ simplexes isométriques.

En probabilités, cette propriété produit un effet spectaculaire. Tirons $k$ nombres $U\_1, \dots, U\_k$ indépendants et uniformes sur $[0, 1]$&nbsp;: le point $(U\_1, \dots, U\_k)$ tombe **uniformément dans l'hypercube** $[0, 1]^k$, si bien que la probabilité qu'il tombe dans une région est tout simplement le **volume** de cette région. Toute condition qui revient à imposer un ordre aux tirages a donc pour probabilité le volume d'un simplexe, $\frac{1}{k!}$, et le nombre [$\mathrm{e} = \sum \frac{1}{k!}$](../../arithmetique/exponentielle/) (ou son inverse $\mathrm{e}^{-1}$) surgit là où rien ne semblait l'annoncer. Le même $\frac{1}{k!}$ apparaît aussi, dans un cadre discret, quand on permute des objets au hasard.

Étudions trois problèmes célèbres qui s'illuminent grâce à cette vision géométrique.


## Rupture de monotonie

### Le jeu des tirages croissants

<div id="def">

<b>Énoncé du problème.</b> On tire successivement des nombres aléatoires $U\_1, U\_2, U\_3, \dots$ de manière indépendante et uniforme sur l'intervalle $[0, 1]$. On continue les tirages tant que les nombres tirés forment une suite croissante ($U\_1 \le U\_2 \le U\_3 \le \dots$), et l'on s'arrête dès qu'un tirage est strictement inférieur au précédent.<br>
Notons $N$ le nombre total de tirages effectués au moment de l'arrêt&nbsp;: $\displaystyle N = \min\left\\{ k \ge 2 \\;\middle|\\; U\_k < U\_{k-1} \right\\}$.

<b>Question&nbsp;:</b> En moyenne, combien de nombres doit-on tirer avant que la croissance ne se brise&nbsp;? Autrement dit, que vaut l'espérance $\mathbb{E}[N]$&nbsp;?

</div>

<br>

<div class="svg-container">
<svg viewBox="0 -10 390 225" role="img" aria-label="Exemple de partie : trois tirages croissants puis une baisse au quatrième, donc N = 4" style="width:100%;max-width:390px;height:auto;">
<line x1="50.0" y1="170.0" x2="330.0" y2="170.0" stroke="#94a3b8" stroke-width="1" />
<line x1="50.0" y1="40.0" x2="330.0" y2="40.0" stroke="#eef2f6" stroke-width="1" />
<text x="44.0" y="174.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="44.0" y="44.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<rect x="60" y="142.7" width="26" height="27.3" rx="3" fill="#739db9"><title>U1 = 0,21</title></rect>
<text x="73.0" y="188.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan></text>
<text x="73.0" y="135.7" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,21</text>
<rect x="130" y="107.6" width="26" height="62.4" rx="3" fill="#5488aa"><title>U2 = 0,48</title></rect>
<text x="143.0" y="188.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan></text>
<text x="143.0" y="100.6" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,48</text>
<rect x="200" y="62.1" width="26" height="107.9" rx="3" fill="#36729b"><title>U3 = 0,83</title></rect>
<text x="213.0" y="188.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>3</tspan><tspan dy='-3'></tspan></text>
<text x="213.0" y="55.1" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,83</text>
<rect x="270" y="121.9" width="26" height="48.1" rx="3" fill="#970E53"><title>U4 = 0,37</title></rect>
<text x="283.0" y="188.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>4</tspan><tspan dy='-3'></tspan></text>
<text x="283.0" y="114.9" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,37</text>
<path d="M221.0,38.10000000000001 Q256.0,28.10000000000001 283.0,95.9" fill="none" stroke="#970E53" stroke-width="1.3"/>
<text x="256.0" y="20.1" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >baisse : arrêt, N = 4</text>
</svg>
</div>
<p class="legende">Une partie typique&nbsp;: trois tirages croissants, puis une baisse au quatrième. Ici $N = 4$.</p>


### Somme des probabilités de survie

Avant même de calculer les probabilités liées aux $U\_i$, rappelons une identité très générale et extrêmement commode pour toute variable aléatoire $N$ à valeurs dans les entiers naturels ($\mathbb{N}$)&nbsp;: au lieu de calculer $\mathbb{E}[N] = \sum\_{k=1}^{+\infty} k\\,\mathbb{P}(N = k)$, on peut exprimer l'espérance comme la **somme des probabilités de survie** $\mathbb{P}(N > k)$.

<div id="preuve">

Pourquoi a-t-on $\mathbb{E}[N] = \sum\_{k=0}^{+\infty} \mathbb{P}(N > k)$&nbsp;? Parce que tout entier $m \ge 1$ est la somme de $m$ fois le nombre $1$ ($m = \sum\_{k=0}^{m-1} 1$). Écrivons les termes de la somme $\sum\_{m=1}^{+\infty} m\\,\mathbb{P}(N = m)$ sous forme d'un tableau triangulaire et sommons colonne par colonne plutôt que ligne par ligne&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\begin{aligned}
\mathbb{E}[N] &= 1\\,\mathbb{P}(N=1) + 2\\,\mathbb{P}(N=2) + 3\\,\mathbb{P}(N=3) + 4\\,\mathbb{P}(N=4) + \cdots \\\\
&= \begin{array}{ccccccccc}
\mathbb{P}(N=1) & + & \mathbb{P}(N=2) & + & \mathbb{P}(N=3) & + & \mathbb{P}(N=4) & + \cdots & = \mathbb{P}(N > 0) \\\\
& & \mathbb{P}(N=2) & + & \mathbb{P}(N=3) & + & \mathbb{P}(N=4) & + \cdots & = \mathbb{P}(N > 1) \\\\
& & & & \mathbb{P}(N=3) & + & \mathbb{P}(N=4) & + \cdots & = \mathbb{P}(N > 2) \\\\
& & & & & & \vdots & & \vdots
\end{array} \\\\
&= \sum_{k=0}^{+\infty} \mathbb{P}(N > k)
\end{aligned}
$$

</div>

</div>

<br>

### Le simplexe $\Delta\_k$ donne la réponse sans calcul

Que signifie l'événement de survie $\\{N > k\\}$ pour un entier $k \ge 1$&nbsp;?
Dire que l'on ne s'est **pas encore arrêté** à l'issue du $k$-ième tirage signifie exactement que les $k$ premiers nombres tirés n'ont subi aucune baisse, autrement dit qu'ils sont **rangés par ordre croissant**&nbsp;:

<p style="text-align:center;">
$\displaystyle \{N > k\} = \left\{ 0 \le U_1 \le U_2 \le \dots \le U_k \le 1 \right\}$ $\displaystyle \quad \Longleftrightarrow \quad (U_1, U_2, \dots, U_k) \in \Delta_k$
</p>

Or, comme les variables $U\_1, \dots, U\_k$ sont indépendantes et uniformément distribuées sur $[0, 1]$, le point aléatoire $M = (U\_1, \dots, U\_k)$ tombe de manière **uniforme dans l'hypercube unité $[0, 1]^k$** (la probabilité qu'il tombe dans un sous-domaine de $[0, 1]^k$ est égale au volume $k$-dimensionnel de ce sous-domaine).

La probabilité que l'expérience survive au-delà du tirage $k$ est donc tout simplement le **volume du simplexe canonique $\Delta\_k$**&nbsp;!

<div id="theo">

Pour tout entier $k \ge 0$, la probabilité que les $k$ premiers tirages uniformes soient croissants vaut $\displaystyle \mathbb{P}(N > k) = \operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k!}$.

Le nombre moyen de tirages avant la première baisse vaut donc exactement $\mathrm{e}$&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\mathbb{E}[N] = \sum_{k=0}^{+\infty} \mathbb{P}(N > k) = \sum_{k=0}^{+\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots = \mathrm{e} \approx 2,71828
$$

</div>

Et la probabilité de s'arrêter exactement au $k$-ième tirage ($k \ge 2$) vaut $\displaystyle \mathbb{P}(N = k) = \mathbb{P}(N > k-1) - \mathbb{P}(N > k) = \frac{1}{(k-1)!} - \frac{1}{k!} = \frac{k - 1}{k!}$.

</div>


## Seuil de Gnedenko

### Dépasser $1$ en additionnant des tirages

Changeons maintenant complètement la règle d'arrêt, tout en conservant la même suite de tirages uniformes $U\_1, U\_2, \dots \in [0, 1]$.

<div id="def">

<b>Énoncé du problème (Gnedenko / Forsythe).</b> On tire des variables aléatoires $U\_1, U\_2, U\_3, \dots$ indépendantes et uniformes sur $[0, 1]$ et on les additionne au fur et à mesure. On s'arrête dès que la **somme cumulée dépasse strictement $1$**.<br>
Notons $M$ le nombre de tirages nécessaires pour franchir le seuil $1$&nbsp;: $\displaystyle M = \min\left\\{ k \ge 1 \\;\middle|\\; U\_1 + U\_2 + \dots + U\_k > 1 \right\\}$.

<b>Question&nbsp;:</b> Que vaut le nombre moyen de tirages $\mathbb{E}[M]$&nbsp;?

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 470 140" role="img" aria-label="Exemple de partie : la somme 0,42 + 0,31 + 0,45 dépasse 1 au troisième tirage, donc M = 3" style="width:100%;max-width:470px;height:auto;">
<rect x="40.0" y="70" width="103.0" height="26" rx="3" fill="#8cafc6"><title>U1 = 0,42</title></rect>
<text x="92.5" y="88.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan> = 0,42</text>
<rect x="145.0" y="70" width="75.5" height="26" rx="3" fill="#598bac"><title>U2 = 0,31</title></rect>
<text x="183.8" y="88.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan> = 0,31</text>
<rect x="222.5" y="70" width="110.5" height="26" rx="3" fill="#970E53"><title>U3 = 0,45</title></rect>
<text x="278.8" y="88.0" text-anchor="middle" font-size="13" fill="#fff" font-family="Georgia,'Times New Roman',serif" font-style="italic" >U<tspan dy='3' font-size='10'>3</tspan><tspan dy='-3'></tspan> = 0,45</text>
<line x1="40.0" y1="104.0" x2="352.5" y2="104.0" stroke="#94a3b8" stroke-width="1" />
<line x1="40.0" y1="100.0" x2="40.0" y2="108.0" stroke="#94a3b8" stroke-width="1" />
<text x="40.0" y="123.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="290.0" y1="100.0" x2="290.0" y2="108.0" stroke="#94a3b8" stroke-width="1" />
<text x="290.0" y="123.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="290.0" y1="48.0" x2="290.0" y2="100.0" stroke="#970E53" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="296.0" y="44.0" text-anchor="start" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >seuil 1</text>
<text x="345.0" y="88.0" text-anchor="start" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >dépassé : M = 3</text>
</svg>
</div>
<p class="legende">Une partie typique&nbsp;: la somme dépasse $1$ au troisième tirage. Ici $M = 3$.</p>


À première vue, additionner des nombres jusqu'à dépasser $1$ semble très différent de les comparer l'un à l'autre ($U\_1 \le U\_2 \le \dots \le U\_k$). Et pourtant, un simple cisaillement géométrique montre que **les deux problèmes sont isomorphes**&nbsp;!

### Preuve géométrique par cisaillement

Examinons l'événement de survie $\\{M > k\\}$ (pour $k \ge 1$). Dire qu'il faut *strictement plus* de $k$ tirages pour que la somme dépasse $1$ équivaut à dire que la somme des $k$ premiers tirages est restée **inférieure ou égale à $1$**, soit $\displaystyle \\{M > k\\} = \left\\{ U\_1 + U\_2 + \dots + U\_k \le 1 \right\\}$.

Dans l'hypercube $[0, 1]^k$, cet événement correspond au domaine appelé *simplexe orthogonal* (ou coin de l'hypercube)&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle \Omega_k = \left\{ (u_1, u_2, \dots, u_k) \in \mathbb{R}^k \;\middle|\; u_1 \ge 0,\; \dots,\; u_k \ge 0 \text{ et } u_1 + \dots + u_k \le 1 \right\}$
</p>

Pourquoi ce coin $\Omega\_k$ a-t-il exactement le même volume $\frac{1}{k!}$ que notre simplexe ordonné $\Delta\_k = \\{0 \le t\_1 \le t\_2 \le \dots \le t\_k \le 1\\}$&nbsp;?
Associons à tout $k$-uplet d'incréments $(u\_1, u\_2, \dots, u\_k)$ la suite de ses **sommes cumulées** $(t\_1, t\_2, \dots, t\_k)$&nbsp;:

<div id="grosseformule">

$$
\begin{cases}
t_1 = u_1 \\\\
t_2 = u_1 + u_2 \\\\
\\;\vdots \\\\
t_k = u_1 + u_2 + \dots + u_k
\end{cases}
\qquad \Longleftrightarrow \qquad
\begin{pmatrix} t_1 \\\\ t_2 \\\\ \vdots \\\\ t_k \end{pmatrix} =
\underbrace{\begin{pmatrix}
1 & 0 & \cdots & 0 \\\\
1 & 1 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots \\\\
1 & 1 & \cdots & 1
\end{pmatrix}}\_{=\\,J}
\begin{pmatrix} u_1 \\\\ u_2 \\\\ \vdots \\\\ u_k \end{pmatrix}
$$

</div>

<div class="svg-container">
<svg viewBox="0 0 340 250" role="img" aria-label="Le cisaillement fait glisser verticalement chaque tranche du coin Ω₂ pour former le triangle Δ₂, sans changer sa longueur" style="width:100%;max-width:340px;height:auto;">
<defs><marker id="fc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<style>.cis{transform:translate(60px,200px) skewY(-45deg) translate(-60px,-200px)}@keyframes cis-k{0%,18%{transform:translate(60px,200px) skewY(0deg) translate(-60px,-200px)}82%,100%{transform:translate(60px,200px) skewY(-45deg) translate(-60px,-200px)}}@media (prefers-reduced-motion:no-preference){.cis{animation:cis-k 7s ease-in-out infinite alternate}}</style>
<rect x="60" y="40" width="160" height="160" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4"/>
<polygon points="60.0,200.0 220.0,200.0 60.0,40.0" fill="none" stroke="#004D80" stroke-opacity="0.45" stroke-dasharray="3 3"/>
<polygon points="60.0,200.0 220.0,40.0 60.0,40.0" fill="none" stroke="#970E53" stroke-opacity="0.55" stroke-dasharray="3 3"/>
<g class="cis"><rect x="61.0" y="48.0" width="14.0" height="152.0" fill="#d6e2eb" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="77.0" y="64.0" width="14.0" height="136.0" fill="#cbdbe5" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="93.0" y="80.0" width="14.0" height="120.0" fill="#c1d3e0" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="109.0" y="96.0" width="14.0" height="104.0" fill="#b6ccdb" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="125.0" y="112.0" width="14.0" height="88.0" fill="#abc4d5" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="141.0" y="128.0" width="14.0" height="72.0" fill="#a0bdd0" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="157.0" y="144.0" width="14.0" height="56.0" fill="#96b5cb" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="173.0" y="160.0" width="14.0" height="40.0" fill="#8baec5" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="189.0" y="176.0" width="14.0" height="24.0" fill="#80a7c0" fill-opacity="0.9" vector-effect="non-scaling-stroke"/><rect x="205.0" y="192.0" width="14.0" height="8.0" fill="#769fbb" fill-opacity="0.9" vector-effect="non-scaling-stroke"/></g>
<line x1="60.0" y1="200.0" x2="242.0" y2="200.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fc)"/>
<line x1="60.0" y1="200.0" x2="60.0" y2="18.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fc)"/>
<text x="246.0" y="205.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >u<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan> = t<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan></text>
<text x="70.0" y="22.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >u<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan>  puis  t<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan> = u<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan> + u<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan></text>
<text x="52.0" y="216.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<text x="220.0" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="52.0" y="45.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="230.0" y="180.8" text-anchor="start" font-size="16" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >Ω₂</text>
<text x="230.0" y="56.0" text-anchor="start" font-size="16" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >Δ₂</text>
</svg>
</div>
<p class="legende">Le cisaillement $t_1 = u_1$, $t_2 = u_1 + u_2$ fait glisser chaque tranche verticale du coin $\Omega_2$ vers le haut, d'autant plus qu'elle est à droite&nbsp;: les tranches gardent leur longueur, et le coin devient le triangle $\Delta_2$.</p>

<div id="preuve">

Analysons cette transformation linéaire $\Psi : (u\_1, \dots, u\_k) \mapsto (t\_1, \dots, t\_k)$&nbsp;:
<ol>
<li><b>Image géométrique&nbsp;:</b> Comme chaque incrément est positif ou nul ($u_i = t_i - t_{i-1} \ge 0$), la suite des sommes partielles $(t_i)$ est croissante ($0 \le t_1 \le t_2 \le \dots \le t_k$). Et la condition finale $u_1 + \dots + u_k \le 1$ s'écrit tout simplement $t_k \le 1$. L'application $\Psi$ envoie donc bijectivement le coin de sommation $\Omega_k$ sur le <b>simplexe canonique ordonné $\Delta_k$</b>&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;overflow-x:auto;">$\displaystyle \Psi(\Omega_k) = \left\{ (t_1, \dots, t_k) \in \mathbb{R}^k \;\middle|\; 0 \le t_1 \le t_2 \le \dots \le t_k \le 1 \right\}$ $\displaystyle = \Delta_k$</span>
</li>
<li style="margin-top:0.5em;"><b>Conservation exacte des volumes&nbsp;:</b> La matrice jacobienne $J$ de cette transformation linéaire est une matrice <b>triangulaire inférieure</b> dont tous les coefficients diagonaux valent $1$. Son déterminant vaut donc $\det(J) = 1 \times 1 \times \cdots \times 1 = 1$. Géométriquement, ajouter $u_1$ à $u_2$ est un simple <i>cisaillement</i> (transvection) parallèlement aux axes, qui fait glisser les tranches sans modifier leur longueur (principe de Cavalieri)&nbsp;: <b>$\Psi$ conserve rigoureusement les volumes</b>&nbsp;!
</li>
</ol>

On en déduit sans aucun calcul d'intégrale que pour tout $k \ge 0$, $\displaystyle \mathbb{P}(M > k) = \operatorname{Vol}\_k(\Omega\_k) = \operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k!}$.

D'où à nouveau, par sommation des probabilités de survie&nbsp;: $\displaystyle \mathbb{E}[M] = \sum\_{k=0}^{+\infty} \mathbb{P}(M > k) = \sum\_{k=0}^{+\infty} \frac{1}{k!} = \mathrm{e} \approx 2,71828$. $\blacksquare$

</div>

<br>

### Preuve analytique par absence de mémoire

Peut-on retrouver $\mathbb{E}[M] = \mathrm{e}$ directement à partir de l'équation différentielle de l'exponentielle ($f' = f$), sans même passer par la série $\sum \frac{1}{k!}$&nbsp;?

Oui, grâce à l'**absence de mémoire** des incréments indépendants&nbsp;! Généralisons le problème en notant $m(x)$ le nombre moyen de tirages uniformes sur $[0, 1]$ nécessaires pour que leur somme dépasse un seuil réel quelconque $x \in [0, 1]$&nbsp;:

<p style="text-align:center;">
$\displaystyle m(x) = \mathbb{E}[M_x], \qquad \text{où}$ $\displaystyle \quad M_x = \min\left\{ k \ge 1 \;\middle|\; U_1 + \dots + U_k > x \right\}$
</p>

<div id="preuve">

Suivons ce qui se passe lors du **tout premier tirage** $U\_1 = u \in [0, 1]$&nbsp;:
<ul>
<li><b>Cas 1 ($u > x$)&nbsp;:</b> Dès le premier tirage, on a dépassé le seuil $x$. Le jeu s'arrête immédiatement en <b>$1$</b> tirage.</li>
<li><b>Cas 2 ($0 \le u \le x$)&nbsp;:</b> Le premier tirage nous a fait avancer de $u$ sans franchir $x$. Comme les tirages suivants $U_2, U_3, \dots$ sont indépendants de $U_1$, franchir la distance restante $x - u$ demande en moyenne $m(x - u)$ tirages supplémentaires, soit un total moyen de <b>$1 + m(x - u)$</b> tirages.</li>
</ul>

En intégrant sur toutes les valeurs possibles $u \in [0, 1]$ du premier tirage uniforme, l'espérance conditionnelle donne&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
m(x) = \int_0^x \big(1 + m(x - u)\big)\\,\mathrm{d}u + \int_x^1 1\\,\mathrm{d}u = \underbrace{\int_0^1 1\\,\mathrm{d}u}\_{=\\,1} + \int_0^x m(x - u)\\,\mathrm{d}u
$$

</div>

En posant $t = x - u$ dans l'intégrale, on obtient l'**équation intégrale de renouvellement** (identique à l'équation de Picard-Dyson vue [ici](../../geometrie/simplexes/#itération-de-picard))&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\forall x \in [0, 1], \qquad m(x) = 1 + \int_0^x m(t)\\,\mathrm{d}t
$$

</div>

D'où $m(0) = 1$ et, par dérivation, $m'(x) = m(x)$, ce qui implique $m(x) = \mathrm{e}^x$. En particulier, pour le seuil $x = 1$, on a $\mathbb{E}[M] = m(1) = \mathrm{e}^1 = \mathrm{e}$. $\blacksquare$

</div>

<br>

**Et au-delà de $1$&nbsp;?** L'argument repose sur le fait que, tant que $x \le 1$, le premier tirage peut tomber n'importe où dans $[0, x]$ avec la même densité&nbsp;: le jeu est alors «&nbsp;sans mémoire&nbsp;», et l'on retrouve l'équation de l'exponentielle. Pour un seuil $x > 1$, ce n'est plus vrai (un tirage ne dépasse jamais $1$), et l'équation devient $m'(x) = m(x) - m(x - 1)$&nbsp;: la valeur en $x$ dépend de ce qui s'est passé une unité plus tôt. La mémoire réapparaît, et l'exponentielle disparaît&nbsp;: on trouve par exemple $m(2) = \mathrm{e}^2 - \mathrm{e} \approx 4,67$, puis $m(x) \approx 2x + \frac{2}{3}$ pour les grands seuils. Ce lien entre $\frac{1}{k!}$ et absence de mémoire est détaillé [dans la partie géométrique](../../geometrie/simplexes/#le-k-signature-de-labsence-de-mémoire).

### Vérification par simulation

Simulons $100\\,000$ parties de chacun des deux jeux, et comptons dans quelle proportion de parties on a survécu au-delà du $k$-ième tirage&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 470 260" role="img" aria-label="Fréquences de survie observées sur 100 000 parties, comparées à 1/k!" style="width:100%;max-width:470px;height:auto;">
<line x1="50.0" y1="130.0" x2="418.0" y2="130.0" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="134.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,5</text>
<line x1="50.0" y1="50.0" x2="418.0" y2="50.0" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="54.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1,0</text>
<text x="46.0" y="214.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<rect x="60" y="50.0" width="18" height="160.0" rx="2" fill="#266893"><title>monotonie, k = 0 : 1,0000</title></rect>
<rect x="80" y="50.0" width="18" height="160.0" rx="2" fill="#99b8cc"><title>Gnedenko, k = 0 : 1,0000</title></rect>
<line x1="55.0" y1="50.0" x2="103.0" y2="50.0" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="79.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >0</text>
<rect x="122" y="50.0" width="18" height="160.0" rx="2" fill="#266893"><title>monotonie, k = 1 : 1,0000</title></rect>
<rect x="142" y="50.0" width="18" height="160.0" rx="2" fill="#99b8cc"><title>Gnedenko, k = 1 : 1,0000</title></rect>
<line x1="117.0" y1="50.0" x2="165.0" y2="50.0" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="141.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1</text>
<rect x="184" y="130.0" width="18" height="80.0" rx="2" fill="#266893"><title>monotonie, k = 2 : 0,5002</title></rect>
<rect x="204" y="130.0" width="18" height="80.0" rx="2" fill="#99b8cc"><title>Gnedenko, k = 2 : 0,4999</title></rect>
<line x1="179.0" y1="130.0" x2="227.0" y2="130.0" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="203.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >2</text>
<text x="203.0" y="122.0" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >1/2!</text>
<rect x="246" y="183.6" width="18" height="26.4" rx="2" fill="#266893"><title>monotonie, k = 3 : 0,1649</title></rect>
<rect x="266" y="183.2" width="18" height="26.8" rx="2" fill="#99b8cc"><title>Gnedenko, k = 3 : 0,1677</title></rect>
<line x1="241.0" y1="183.3" x2="289.0" y2="183.3" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="265.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >3</text>
<text x="265.0" y="175.3" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >1/3!</text>
<rect x="308" y="203.5" width="18" height="6.5" rx="2" fill="#266893"><title>monotonie, k = 4 : 0,0409</title></rect>
<rect x="328" y="203.1" width="18" height="6.9" rx="2" fill="#99b8cc"><title>Gnedenko, k = 4 : 0,0434</title></rect>
<line x1="303.0" y1="203.3" x2="351.0" y2="203.3" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="327.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >4</text>
<text x="327.0" y="195.3" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >1/4!</text>
<rect x="370" y="208.7" width="18" height="1.3" rx="2" fill="#266893"><title>monotonie, k = 5 : 0,0082</title></rect>
<rect x="390" y="208.6" width="18" height="1.4" rx="2" fill="#99b8cc"><title>Gnedenko, k = 5 : 0,0088</title></rect>
<line x1="365.0" y1="208.7" x2="413.0" y2="208.7" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="389.0" y="228.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >5</text>
<text x="389.0" y="200.7" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >1/5!</text>
<line x1="50.0" y1="210.0" x2="418.0" y2="210.0" stroke="#94a3b8" stroke-width="1" />
<text x="424.0" y="228.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >k</text>
<rect x="214" y="30" width="14" height="14" rx="3" fill="#266893"/>
<text x="234.0" y="42.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >P(N > k), monotonie</text>
<rect x="214" y="52" width="14" height="14" rx="3" fill="#99b8cc"/>
<text x="234.0" y="64.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >P(M > k), Gnedenko</text>
<line x1="214.0" y1="103.0" x2="228.0" y2="103.0" stroke="#970E53" stroke-width="2.2" stroke-linecap="round"/>
<text x="234.0" y="108.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >volume 1/k!</text>
</svg>
</div>
<p class="legende">Fréquences de survie observées sur $100\,000$ parties de chaque jeu. Elles collent aux volumes $\frac{1}{k!}$ des simplexes (traits magenta), et sont presque identiques d'un jeu à l'autre&nbsp;: le cisaillement l'avait prédit.</p>

Les nombres moyens de tirages observés valent $2,716$ pour la rupture de monotonie et $2,722$ pour le seuil de Gnedenko, pour une valeur exacte $\mathrm{e} \approx 2,718$. Les écarts, de l'ordre de $0,003$, sont conformes aux fluctuations attendues&nbsp;: l'écart-type de $N$ (ou de $M$) vaut $\sqrt{3\mathrm{e} - \mathrm{e}^2} \approx 0,88$, donc celui d'une moyenne sur $100\\,000$ parties est d'environ $\frac{0,88}{\sqrt{100\,000}} \approx 0,003$.


<i>Programme python rupture de monotonie&nbsp;:</i>

{{< runpython lang="pyodide" mode="toggle" height="auto">}}
from random import random

N = 100000
M = 0
	
for i in range(N):
	k = 1
	Uavant = 0
	while (Uapres := random()) > Uavant:
		k += 1
		Uavant = Uapres
	M += k

print(M/N)
{{< /runpython  >}}

<i>Programme python Gnedenko&nbsp;:</i>

{{< runpython lang="python" mode="toggle" height="auto">}}
from random import random

N = 100000
M = 0
	
for i in range(N):
	k = 0
	S = 0
	while S < 1:
		k += 1
		S += random()
	M += k

print(M/N)
{{< /runpython  >}}



## Dérangements de Montmort

### Le problème des chapeaux (1708)

<div id="def">

<b>Énoncé du problème.</b> À l'entrée d'une soirée, $n$ convives numérotés de $1$ à $n$ déposent chacun leur chapeau au vestiaire. En repartant, ils récupèrent chacun un chapeau **totalement au hasard** (ce qui revient à tirer uniformément une permutation $\sigma$ dans le groupe symétrique $\mathfrak{S}\_n$, de cardinal $n!$).<br>
On appelle **dérangement** une permutation qui ne laisse aucun élément à sa place initiale (aucun convive ne récupère son propre chapeau)&nbsp;:

<p style="text-align:center;">
$\displaystyle D_n = \left\{ \sigma \in \mathfrak{S}_n \;\middle|\; \forall i \in \{1, \dots, n\},\; \sigma(i) \neq i \right\}$
</p>

<b>Question&nbsp;:</b> Quelle est la probabilité $p\_n = \frac{|D\_n|}{n!}$ qu'aucun convive ne récupère son chapeau, et comment évolue cette probabilité lorsque le nombre de convives $n$ tend vers $+\infty$&nbsp;?

</div>

<br>

Quand le nombre de convives $n$ grandit, deux effets opposés s'affrontent&nbsp;: il y a de plus en plus d'individus susceptibles de tomber sur leur propre chapeau, mais chacun n'a plus qu'une chance $\frac{1}{n}$ de tomber sur le sien. Ces deux effets se compensent avec une précision stupéfiante&nbsp;: dès $n = 7$ convives, la probabilité $p\_n$ vaut déjà **$\frac{1}{\mathrm{e}} \approx 36,788\\,\\%$** à moins de trois cent-millièmes près&nbsp;!

### Crible de Poincaré et simplexe discret

Passons par l'événement complémentaire&nbsp;: «&nbsp;**au moins un** convive récupère son propre chapeau&nbsp;», c'est-à-dire la réunion $\bigcup\_{i=1}^n A\_i$, où $A\_i = \\{\sigma \in \mathfrak{S}\_n \mid \sigma(i) = i\\}$.

Par la **formule du crible de Poincaré** (principe d'inclusion-exclusion), on alterne la somme des probabilités des intersections de $k$ événements indexées par les $k$-uplets strictement croissants $1 \le i\_1 < i\_2 < \dots < i\_k \le n$ (le **simplexe discret**)&nbsp;:

<div id="grosseformule">

$$
\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{k=1}^n (-1)^{k-1} \sum_{1 \le i_1 < i_2 < \dots < i_k \le n} \mathbb{P}\left(A_{i_1} \cap A_{i_2} \cap \dots \cap A_{i_k}\right)
$$

</div>

Or, imposer que $k$ convives précis $i\_1 < \dots < i\_k$ récupèrent chacun leur propre chapeau fige ces $k$ chapeaux et laisse **$(n - k)!$** permutations possibles pour les $n - k$ autres convives, soit une probabilité $\frac{(n - k)!}{n!}$.

Comme le simplexe discret $1 \le i\_1 < \dots < i\_k \le n$ contient exactement $\binom{n}{k} = \frac{n!}{k!\\,(n-k)!}$ termes tous égaux à $\frac{(n-k)!}{n!}$, **la dépendance en $n$ s'élimine algébriquement et laisse exactement le volume du simplexe $\frac{1}{k!}$**&nbsp;:

<div id="grosseformule">

$$
\sum_{1 \le i_1 < i_2 < \dots < i_k \le n} \mathbb{P}\left(A_{i_1} \cap \dots \cap A_{i_k}\right) = \binom{n}{k} \times \frac{(n - k)!}{n!} = \frac{\cancel{n!}}{k!\\,\cancel{(n - k)!}} \times \frac{\cancel{(n - k)!}}{\cancel{n!}} = \mathbf{\frac{1}{k!}}
$$

</div>

Par exemple, avec $n = 4$ convives et $k = 2$&nbsp;: il y a $\binom{4}{2} = 6$ paires de convives, et chaque paire a une probabilité $\frac{2!}{4!} = \frac{1}{12}$ de récupérer ses deux chapeaux (les deux autres chapeaux se répartissent de $2!$ façons parmi les $4!$ possibles). Au total&nbsp;: $6 \times \frac{1}{12} = \frac{1}{2} = \frac{1}{2!}$. Avec $n = 10$ convives, on aurait $45$ paires de probabilité $\frac{1}{90}$ chacune&nbsp;: toujours $\frac{1}{2}$&nbsp;!

<div id="theo">

<b>Théorème (Formule de Montmort et convergence vers $\mathrm{e}^{-1}$).</b> Pour tout entier $n \ge 1$, la probabilité $p\_n = \frac{|D\_n|}{n!}$ qu'une permutation aléatoire uniforme de $\mathfrak{S}\_n$ soit un dérangement est exactement égale à la $n$-ième somme partielle de la série alternée des inverses de factorielles&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
p_n = \frac{|D_n|}{n!} = 1 - \mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{k=0}^n \frac{(-1)^k}{k!} = 1 - 1 + \frac{1}{2!} - \frac{1}{3!} + \cdots + \frac{(-1)^n}{n!} \xrightarrow[n \to +\infty]{} \mathrm{e}^{-1} \approx 0,367879
$$

</div>

De plus, dès $n = 1$, le nombre entier de dérangements $|D\_n|$ est **l'entier le plus proche de $\frac{n!}{\mathrm{e}}$**, soit $\displaystyle |D\_n| = \left\lfloor \frac{n!}{\mathrm{e}} + \frac{1}{2} \right\rfloor$.

</div>

<br>

<div id="preuve">

D'après le critère des séries alternées, le reste de $\mathrm{e}^{-1} = \sum\_{k=0}^{+\infty} \frac{(-1)^k}{k!}$ au-delà du rang $n$ est strictement majoré en valeur absolue par le premier terme négligé $\frac{1}{(n+1)!}$&nbsp;:

<p style="text-align:center;">
$\displaystyle \left| \mathrm{e}^{-1} - \frac{|D_n|}{n!} \right| < \frac{1}{(n+1)!}$ $\displaystyle \quad \Longrightarrow \quad \left| |D_n| - \frac{n!}{\mathrm{e}} \right| < \frac{n!}{(n+1)!} = \frac{1}{n + 1} \le \frac{1}{2}$
</p>

La distance entre l'entier $|D\_n|$ et le réel $\frac{n!}{\mathrm{e}}$ étant strictement inférieure à $\frac{1}{2}$, $|D\_n|$ est toujours l'unique entier le plus proche de $\frac{n!}{\mathrm{e}}$&nbsp;! $\blacksquare$

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 450 240" role="img" aria-label="La probabilité de dérangement p_n oscille autour de 1/e et s'en approche très vite" style="width:100%;max-width:450px;height:auto;">
<line x1="60.0" y1="86.3" x2="398.0" y2="86.3" stroke="#970E53" stroke-width="1.2" stroke-dasharray="4 4"/>
<text x="402.0" y="90.3" text-anchor="start" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1/e</text>
<polyline points="60.0,200.0 107.1,45.5 154.3,97.0 201.4,84.1 248.6,86.7 295.7,86.2 342.9,86.3 390.0,86.3" fill="none" stroke="#80a6c0" stroke-width="1.5"/>
<circle cx="60.0" cy="200.0" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p1 = 0,00000</title></circle>
<circle cx="107.1" cy="45.5" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p2 = 0,50000</title></circle>
<circle cx="154.3" cy="97.0" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p3 = 0,33333</title></circle>
<circle cx="201.4" cy="84.1" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p4 = 0,37500</title></circle>
<circle cx="248.6" cy="86.7" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p5 = 0,36667</title></circle>
<circle cx="295.7" cy="86.2" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p6 = 0,36806</title></circle>
<circle cx="342.9" cy="86.3" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p7 = 0,36786</title></circle>
<circle cx="390.0" cy="86.3" r="4" fill="#004D80" stroke="#fff" stroke-width="1.2"><title>p8 = 0,36788</title></circle>
<text x="107.1" y="35.5" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1/2</text>
<text x="154.3" y="115.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1/3</text>
<line x1="50.0" y1="200.0" x2="400.0" y2="200.0" stroke="#94a3b8" stroke-width="1" />
<text x="60.0" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="107.1" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<text x="154.3" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >3</text>
<text x="201.4" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >4</text>
<text x="248.6" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >5</text>
<text x="295.7" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >6</text>
<text x="342.9" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >7</text>
<text x="390.0" y="218.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8</text>
<text x="406.0" y="218.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >n</text>
<text x="46.0" y="126.7" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,25</text>
<line x1="50.0" y1="122.7" x2="54.0" y2="122.7" stroke="#94a3b8" stroke-width="1" />
<text x="46.0" y="49.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,50</text>
<line x1="50.0" y1="45.5" x2="54.0" y2="45.5" stroke="#94a3b8" stroke-width="1" />
</svg>
</div>
<p class="legende">La probabilité $p_n$ qu'aucun convive ne récupère son chapeau oscille autour de $\frac{1}{\mathrm{e}}$ et s'en rapproche très vite&nbsp;: l'écart est inférieur à $\frac{1}{(n+1)!}$.</p>


### Dualité $\mathrm{e} \cdot \mathrm{e}^{-1} = 1$ et loi de Poisson $\mathcal{P}(1)$

On peut également retrouver $\lim p\_n = \frac{1}{\mathrm{e}}$ **sans aucun signe alterné**, en classant les $n!$ permutations de $\mathfrak{S}\_n$ selon leur **nombre exact $k$ de points fixes** ($k \in \\{0, \dots, n\\}$)&nbsp;:
<ul>
<li>Choisir les $k$ points fixes parmi $n$ donne $\binom{n}{k}$ possibilités&nbsp;;</li>
<li>Déranger les $n - k$ éléments restants (pour qu'aucun d'eux ne soit fixe) donne $|D_{n-k}|$ possibilités.</li>
</ul>

En sommant sur $k$ et en divisant par $n!$, on obtient la décomposition exacte de la loi du nombre $X\_n$ de points fixes&nbsp;:

<div id="theo">

Pour tout entier $n \ge 0$, les probabilités de dérangement $(p\_m)\_{m \ge 0}$ vérifient $\displaystyle 1 = \sum\_{k=0}^n \frac{1}{k!} \\, p\_{n-k}$, et le nombre $X\_n$ de points fixes d'une permutation uniforme de $\mathfrak{S}\_n$ suit la loi&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\forall k \in \\{0, \dots, n\\}, \qquad \mathbb{P}(X_n = k) = \frac{1}{k!}\\,p_{n-k} = \frac{1}{k!} \sum_{j=0}^{n-k} \frac{(-1)^j}{j!} \xrightarrow[n \to +\infty]{} \frac{\mathrm{e}^{-1}}{k!}
$$

</div>

En passant à la limite $n \to +\infty$ dans $1 = \sum\_{k=0}^n \frac{1}{k!} p\_{n-k}$ (l'échange de la limite et de la somme se justifie par le théorème de Tannery, car $0 \le p\_{n-k} \le 1$), on obtient $1 = \mathrm{e} \times p\_\infty$, soit $p\_\infty = \mathrm{e}^{-1}$, et le nombre de points fixes $X\_n$ converge en loi vers la **loi de Poisson $\mathcal{P}(1)$**.

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 440 240" role="img" aria-label="Loi exacte du nombre de points fixes pour 6 chapeaux, comparée à la loi de Poisson de paramètre 1" style="width:100%;max-width:440px;height:auto;">
<line x1="50.0" y1="159.5" x2="408.0" y2="159.5" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="163.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,1</text>
<line x1="50.0" y1="119.0" x2="408.0" y2="119.0" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="123.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,2</text>
<line x1="50.0" y1="78.6" x2="408.0" y2="78.6" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="82.6" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,3</text>
<line x1="50.0" y1="38.1" x2="408.0" y2="38.1" stroke="#eef2f6" stroke-width="1" />
<text x="46.0" y="42.1" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0,4</text>
<rect x="60" y="51.0" width="26" height="149.0" rx="3" fill="#739db9"><title>P(X6 = 0) = 0,3681</title></rect>
<circle cx="73.0" cy="51.1" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/0! = 0,3679</title></circle>
<text x="73.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >0</text>
<rect x="112" y="51.6" width="26" height="148.4" rx="3" fill="#739db9"><title>P(X6 = 1) = 0,3667</title></rect>
<circle cx="125.0" cy="51.1" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/1! = 0,3679</title></circle>
<text x="125.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1</text>
<rect x="164" y="124.1" width="26" height="75.9" rx="3" fill="#739db9"><title>P(X6 = 2) = 0,1875</title></rect>
<circle cx="177.0" cy="125.5" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/2! = 0,1839</title></circle>
<text x="177.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >2</text>
<rect x="216" y="177.5" width="26" height="22.5" rx="3" fill="#739db9"><title>P(X6 = 3) = 0,0556</title></rect>
<circle cx="229.0" cy="175.2" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/3! = 0,0613</title></circle>
<text x="229.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >3</text>
<rect x="268" y="191.6" width="26" height="8.4" rx="3" fill="#739db9"><title>P(X6 = 4) = 0,0208</title></rect>
<circle cx="281.0" cy="193.8" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/4! = 0,0153</title></circle>
<text x="281.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >4</text>
<rect x="320" y="200.0" width="26" height="0.0" rx="3" fill="#739db9"><title>P(X6 = 5) = 0,0000</title></rect>
<circle cx="333.0" cy="198.8" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/5! = 0,0031</title></circle>
<text x="333.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >5</text>
<rect x="372" y="199.4" width="26" height="0.6" rx="3" fill="#739db9"><title>P(X6 = 6) = 0,0014</title></rect>
<circle cx="385.0" cy="199.8" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"><title>Poisson : e⁻¹/6! = 0,0005</title></circle>
<text x="385.0" y="218.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >6</text>
<line x1="50.0" y1="200.0" x2="408.0" y2="200.0" stroke="#94a3b8" stroke-width="1" />
<text x="414.0" y="218.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >k</text>
<rect x="226" y="30" width="14" height="14" rx="3" fill="#739db9"/>
<text x="246.0" y="42.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >loi exacte, n = 6</text>
<circle cx="233" cy="62" r="4.5" fill="#fff" stroke="#970E53" stroke-width="2"/>
<text x="246.0" y="66.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Poisson : e⁻¹/k!</text>
</svg>
</div>
<p class="legende">Pour $n = 6$ chapeaux, la loi exacte du nombre $X_6$ de convives qui récupèrent leur chapeau (barres) est déjà presque indiscernable de la loi de Poisson $\mathcal{P}(1)$ (cercles).</p>

La loi de Poisson n'est pas une coïncidence&nbsp;: c'est la loi du nombre d'événements dans un processus sans mémoire, et son $\frac{1}{k!}$ a la même origine géométrique que tous ceux de cette page (voir [la partie géométrique](../../geometrie/simplexes/#le-k-signature-de-labsence-de-mémoire)).



<br>

> Pour retrouver une autre apparition célèbre du seuil $\frac{1}{\mathrm{e}} \approx 36,8\\,\\%$ en probabilités, voir aussi le [problème du secrétaire](../curiosites/#problème-du-secrétaire) dans la page Curiosités&nbsp;!
