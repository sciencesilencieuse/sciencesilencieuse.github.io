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
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Rupture de monotonie et seuil de Gnedenko</i></p>


Dans [cette partie géométrique](../../geometrie/simplexes/), nous avons vu que le **simplexe canonique $\Delta\_k$** (l'ensemble des points de l'hypercube unité $[0, 1]^k$ dont les coordonnées sont rangées par ordre croissant $0 \le t\_1 \le t\_2 \le \dots \le t\_k \le 1$) possède un volume exactement égal à $\mathbf{\frac{1}{k!}}$, car les $k!$ permutations de ses axes découpent l'hypercube $[0, 1]^k$ en $k!$ simplexes isométriques.

En probabilités, cette propriété produit un effet spectaculaire. Tirons $k$ nombres $U\_1, \dots, U\_k$ indépendants et uniformes sur $[0, 1]$&nbsp;: le point $(U\_1, \dots, U\_k)$ tombe **uniformément dans l'hypercube** $[0, 1]^k$, si bien que la probabilité qu'il tombe dans une région est tout simplement le **volume** de cette région. Toute condition qui revient à imposer un ordre aux tirages a donc pour probabilité le volume d'un simplexe, $\frac{1}{k!}$, et le nombre [$\mathrm{e} = \sum \frac{1}{k!}$](../../arithmetique/exponentielle/) surgit là où rien ne semblait l'annoncer.

Étudions deux problèmes célèbres qui s'illuminent grâce à cette vision géométrique.


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

### Et au-delà du seuil $1$&nbsp;?

Que se passe-t-il si l'on vise un seuil $x$ plus grand que $1$&nbsp;? Le jeu lui-même ne change pas&nbsp;: les tirages restent indépendants, et après chaque tirage, tout recommence à l'identique avec un seuil réduit. Ce qui change, c'est la façon dont $m(x)$ **varie avec le seuil $x$**. Pour le voir, reprenons le raisonnement sur le premier tirage, mais sans supposer $x \le 1$.

**Une seule formule pour tous les seuils.** Après le premier tirage $u$, il reste à parcourir la distance $r = x - u$. Comme $u$ est uniforme sur $[0, 1]$, cette distance restante est uniforme sur la **fenêtre $[x - 1, x]$**, de longueur $1$&nbsp;:
<ul>
<li>si $r &lt; 0$, le seuil est déjà dépassé&nbsp;: plus aucun tirage n'est nécessaire&nbsp;;</li>
<li>si $r \ge 0$, il faut encore $m(r)$ tirages en moyenne.</li>
</ul>

Convenons que $m(r) = 0$ pour $r &lt; 0$ (aucun tirage n'est nécessaire pour dépasser un seuil négatif). On obtient alors, pour tout seuil $x \ge 0$&nbsp;:

$$
m(x) = 1 + \int\_{x-1}^{x} m(r)\\,\mathrm{d}r.
$$

Autrement dit, $m(x)$ vaut un tirage, plus l'aire sous la courbe de $m$ sur la fenêtre $[x - 1, x]$. Pour $x \le 1$, la partie négative de la fenêtre ne compte pas, et l'on retrouve l'équation $m(x) = 1 + \int\_0^x m(r)\\,\mathrm{d}r$ obtenue plus haut.

**L'équation différentielle.** Faisons avancer le seuil de $x$ à $x + \mathrm{d}x$. La fenêtre se décale d'autant&nbsp;: elle **gagne** une fine tranche à droite, d'aire $m(x)\\,\mathrm{d}x$, et **perd** une fine tranche à gauche, d'aire $m(x - 1)\\,\mathrm{d}x$. D'où&nbsp;:

$$
m'(x) = m(x) - m(x - 1).
$$

(C'est la règle de dérivation d'une intégrale dont les bornes dépendent de $x$&nbsp;: $\frac{\mathrm{d}}{\mathrm{d}x}\int\_{a(x)}^{b(x)} f = f(b(x))\\,b'(x) - f(a(x))\\,a'(x)$, avec ici $b(x) = x$ et $a(x) = x - 1$.)

<div class="svg-container">
<svg viewBox="0 0 640 270" role="img" aria-label="La fenêtre [x−1, x] sous la courbe de m : quand x avance, elle gagne une tranche à droite et en perd une à gauche" style="width:100%;max-width:640px;height:auto;">
<defs><marker id="fw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="97.2,222.0 97.2,187.1 98.1,186.7 98.9,186.4 99.8,186.0 100.6,185.3 101.5,184.9 102.4,184.6 103.2,184.2 104.1,183.8 104.9,183.4 105.8,182.6 106.6,182.2 107.5,181.8 108.4,181.4 109.2,181.0 110.1,180.2 110.9,179.8 111.8,179.4 112.6,178.9 113.5,178.5 114.4,178.1 115.2,177.6 116.1,176.7 116.9,176.3 117.8,175.8 118.7,175.4 119.5,174.9 120.4,173.9 121.2,173.4 122.1,173.0 122.9,172.5 123.8,172.0 124.7,171.5 125.5,171.0 126.4,169.9 127.2,169.4 128.1,168.9 128.9,168.3 129.8,167.8 130.7,167.3 131.5,166.2 132.4,165.6 133.2,165.0 134.1,164.5 135.0,163.9 135.8,163.3 136.7,162.1 137.5,161.5 138.4,160.9 139.2,160.3 140.1,159.7 141.0,158.4 141.8,157.8 142.7,157.1 143.5,156.5 144.4,155.8 145.2,155.1 146.1,154.5 147.0,153.1 147.8,152.4 148.7,151.7 148.7,222.0" fill="#d6e3eb"/>
<rect x="148.7" y="151.7" width="6.6" height="70.3" fill="#970E53" fill-opacity="0.75"/>
<line x1="20.0" y1="222.0" x2="97.2" y2="222.0" stroke="#004D80" stroke-width="2" />
<polyline points="97.2,187.1 97.9,186.7 98.7,186.4 99.4,186.0 100.1,185.7 100.9,185.3 101.6,184.9 102.4,184.6 103.1,184.2 103.8,183.8 104.6,183.4 105.3,183.0 106.0,182.6 106.8,182.2 107.5,181.8 108.2,181.4 109.0,181.0 109.7,180.6 110.4,180.2 111.2,179.8 111.9,179.4 112.6,178.9 113.4,178.5 114.1,178.1 114.9,177.6 115.6,177.2 116.3,176.7 117.1,176.3 117.8,175.8 118.5,175.4 119.3,174.9 120.0,174.4 120.7,173.9 121.5,173.4 122.2,173.0 122.9,172.5 123.7,172.0 124.4,171.5 125.1,171.0 125.9,170.4 126.6,169.9 127.4,169.4 128.1,168.9 128.8,168.3 129.6,167.8 130.3,167.3 131.0,166.7 131.8,166.2 132.5,165.6 133.2,165.0 134.0,164.5 134.7,163.9 135.4,163.3 136.2,162.7 136.9,162.1 137.6,161.5 138.4,160.9 139.1,160.3 139.9,159.7 140.6,159.0 141.3,158.4 142.1,157.8 142.8,157.1 143.5,156.5 144.3,155.8 145.0,155.1 145.7,154.5 146.5,153.8 147.2,153.1 147.9,152.4 148.7,151.7" fill="none" stroke="#004D80" stroke-width="2"/>
<polyline points="148.7,151.7 149.4,151.0 150.1,150.3 150.9,149.6 151.6,148.8 152.4,148.1 153.1,147.4 153.8,146.6 154.6,145.9 155.3,145.1 156.0,144.3 156.8,143.5 157.5,142.7 158.2,142.0 159.0,141.1 159.7,140.3 160.4,139.5 161.2,138.7 161.9,137.8 162.6,137.0 163.4,136.1 164.1,135.3 164.9,134.4 165.6,133.5 166.3,132.6 167.1,131.7 167.8,130.8 168.5,129.9 169.3,129.0 170.0,128.1 170.7,127.1 171.5,126.5 172.2,125.9 172.9,125.3 173.7,124.7 174.4,124.1 175.1,123.5 175.9,122.9 176.6,122.2 177.4,121.6 178.1,121.0 178.8,120.4 179.6,119.7 180.3,119.1 181.0,118.5 181.8,117.8 182.5,117.2 183.2,116.6 184.0,115.9 184.7,115.3 185.4,114.6 186.2,114.0 186.9,113.3 187.6,112.7 188.4,112.0 189.1,111.4 189.9,110.7 190.6,110.1 191.3,109.4 192.1,108.7 192.8,108.1 193.5,107.4 194.3,106.7 195.0,106.0 195.7,105.4 196.5,104.7 197.2,104.0 197.9,103.3 198.7,102.6 199.4,102.0 200.1,101.3 200.9,100.6 201.6,99.9 202.4,99.2 203.1,98.5 203.8,97.8 204.6,97.1 205.3,96.4 206.0,95.7 206.8,95.0 207.5,94.3 208.2,93.6 209.0,92.9 209.7,92.2 210.4,91.5 211.2,90.8 211.9,90.1 212.6,89.4 213.4,88.7 214.1,88.0 214.9,87.3 215.6,86.6 216.3,85.8 217.1,85.1 217.8,84.4 218.5,83.7 219.3,83.0 220.0,82.3 220.7,81.6 221.5,80.8 222.2,80.1 222.9,79.4 223.7,78.7 224.4,78.0 225.1,77.3 225.9,76.6 226.6,75.8 227.4,75.1 228.1,74.4 228.8,73.7 229.6,73.0 230.3,72.3 231.0,71.6 231.8,70.8 232.5,70.1 233.2,69.4 234.0,68.7 234.7,68.0 235.4,67.3 236.2,66.6 236.9,65.9 237.6,65.2 238.4,64.5 239.1,63.8 239.9,63.1 240.6,62.4 241.3,61.7 242.1,61.0 242.8,60.3 243.5,59.6 244.3,59.0 245.0,58.3 245.7,57.6 246.5,56.9 247.2,56.2 247.9,55.5 248.7,54.9 249.4,54.2 250.1,53.5 250.9,52.8 251.6,52.1 252.4,51.4 253.1,50.7 253.8,50.0 254.6,49.4 255.3,48.7 256.0,48.0 256.8,47.3 257.5,46.6 258.2,45.9 259.0,45.2 259.7,44.5 260.4,43.8 261.2,43.1 261.9,42.4 262.6,41.7 263.4,41.0 264.1,40.3 264.9,39.6 265.6,38.9 266.3,38.2 267.1,37.5 267.8,36.8 268.5,36.1 269.3,35.4 270.0,34.7" fill="none" stroke="#b2cad9" stroke-width="2"/>
<line x1="97.2" y1="222.0" x2="97.2" y2="187.1" stroke="#004D80" stroke-width="1" stroke-dasharray="2 2"/>
<line x1="20.0" y1="222.0" x2="278.0" y2="222.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fw)"/>
<line x1="97.2" y1="226.0" x2="97.2" y2="31.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fw)"/>
<text x="103.2" y="41.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >m</text>
<text x="97.2" y="239.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="75.1" y1="247.0" x2="75.1" y2="252.0" stroke="#64748b" stroke-width="1" />
<line x1="148.7" y1="247.0" x2="148.7" y2="252.0" stroke="#64748b" stroke-width="1" />
<line x1="75.1" y1="252.0" x2="148.7" y2="252.0" stroke="#64748b" stroke-width="1" />
<text x="75.1" y="267.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x − 1</text>
<text x="148.7" y="267.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x</text>
<text x="160.3" y="165.7" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >+ m(x) dx</text>
<text x="77.1" y="214.0" text-anchor="start" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >− 0</text>
<text x="145.0" y="18.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >x = 0,7 : fenêtre qui grandit</text>
<polygon points="485.7,222.0 485.7,127.1 487.0,125.9 488.2,125.3 489.4,124.1 490.6,122.9 491.9,122.2 493.1,121.0 494.3,119.7 495.5,119.1 496.8,117.8 498.0,116.6 499.2,115.9 500.4,114.6 501.7,113.3 502.9,112.7 504.1,111.4 505.3,110.1 506.6,109.4 507.8,108.1 509.0,106.7 510.2,106.0 511.5,104.7 512.7,103.3 513.9,102.6 515.1,101.3 516.4,99.9 517.6,99.2 518.8,97.8 520.0,96.4 521.3,95.7 522.5,94.3 523.7,92.9 525.0,92.2 526.2,90.8 527.4,89.4 528.6,88.7 529.9,87.3 531.1,85.8 532.3,85.1 533.5,83.7 534.8,82.3 536.0,81.6 537.2,80.1 538.4,78.7 539.7,78.0 540.9,76.6 542.1,75.1 543.3,74.4 544.6,73.0 545.8,71.6 547.0,70.8 548.2,69.4 549.5,68.0 550.7,67.3 551.9,65.9 553.1,64.5 554.4,63.8 555.6,62.4 556.8,61.0 558.0,60.3 559.3,59.0 559.3,222.0" fill="#d6e3eb"/>
<rect x="559.3" y="59.0" width="6.6" height="163.0" fill="#970E53" fill-opacity="0.75"/>
<rect x="485.7" y="127.1" width="6.6" height="94.9" fill="#fff" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"/>
<line x1="335.0" y1="222.0" x2="412.2" y2="222.0" stroke="#004D80" stroke-width="2" />
<polyline points="412.2,187.1 412.9,186.7 413.7,186.4 414.4,186.0 415.1,185.7 415.9,185.3 416.6,184.9 417.4,184.6 418.1,184.2 418.8,183.8 419.6,183.4 420.3,183.0 421.0,182.6 421.8,182.2 422.5,181.8 423.2,181.4 424.0,181.0 424.7,180.6 425.4,180.2 426.2,179.8 426.9,179.4 427.6,178.9 428.4,178.5 429.1,178.1 429.9,177.6 430.6,177.2 431.3,176.7 432.1,176.3 432.8,175.8 433.5,175.4 434.3,174.9 435.0,174.4 435.7,173.9 436.5,173.4 437.2,173.0 437.9,172.5 438.7,172.0 439.4,171.5 440.1,171.0 440.9,170.4 441.6,169.9 442.4,169.4 443.1,168.9 443.8,168.3 444.6,167.8 445.3,167.3 446.0,166.7 446.8,166.2 447.5,165.6 448.2,165.0 449.0,164.5 449.7,163.9 450.4,163.3 451.2,162.7 451.9,162.1 452.6,161.5 453.4,160.9 454.1,160.3 454.9,159.7 455.6,159.0 456.3,158.4 457.1,157.8 457.8,157.1 458.5,156.5 459.3,155.8 460.0,155.1 460.7,154.5 461.5,153.8 462.2,153.1 462.9,152.4 463.7,151.7 464.4,151.0 465.1,150.3 465.9,149.6 466.6,148.8 467.4,148.1 468.1,147.4 468.8,146.6 469.6,145.9 470.3,145.1 471.0,144.3 471.8,143.5 472.5,142.7 473.2,142.0 474.0,141.1 474.7,140.3 475.4,139.5 476.2,138.7 476.9,137.8 477.6,137.0 478.4,136.1 479.1,135.3 479.9,134.4 480.6,133.5 481.3,132.6 482.1,131.7 482.8,130.8 483.5,129.9 484.3,129.0 485.0,128.1 485.7,127.1 486.5,126.5 487.2,125.9 487.9,125.3 488.7,124.7 489.4,124.1 490.1,123.5 490.9,122.9 491.6,122.2 492.4,121.6 493.1,121.0 493.8,120.4 494.6,119.7 495.3,119.1 496.0,118.5 496.8,117.8 497.5,117.2 498.2,116.6 499.0,115.9 499.7,115.3 500.4,114.6 501.2,114.0 501.9,113.3 502.6,112.7 503.4,112.0 504.1,111.4 504.9,110.7 505.6,110.1 506.3,109.4 507.1,108.7 507.8,108.1 508.5,107.4 509.3,106.7 510.0,106.0 510.7,105.4 511.5,104.7 512.2,104.0 512.9,103.3 513.7,102.6 514.4,102.0 515.1,101.3 515.9,100.6 516.6,99.9 517.4,99.2 518.1,98.5 518.8,97.8 519.6,97.1 520.3,96.4 521.0,95.7 521.8,95.0 522.5,94.3 523.2,93.6 524.0,92.9 524.7,92.2 525.4,91.5 526.2,90.8 526.9,90.1 527.6,89.4 528.4,88.7 529.1,88.0 529.9,87.3 530.6,86.6 531.3,85.8 532.1,85.1 532.8,84.4 533.5,83.7 534.3,83.0 535.0,82.3 535.7,81.6 536.5,80.8 537.2,80.1 537.9,79.4 538.7,78.7 539.4,78.0 540.1,77.3 540.9,76.6 541.6,75.8 542.4,75.1 543.1,74.4 543.8,73.7 544.6,73.0 545.3,72.3 546.0,71.6 546.8,70.8 547.5,70.1 548.2,69.4 549.0,68.7 549.7,68.0 550.4,67.3 551.2,66.6 551.9,65.9 552.6,65.2 553.4,64.5 554.1,63.8 554.9,63.1 555.6,62.4 556.3,61.7 557.1,61.0 557.8,60.3 558.5,59.6 559.3,59.0" fill="none" stroke="#004D80" stroke-width="2"/>
<polyline points="559.3,59.0 560.0,58.3 560.7,57.6 561.5,56.9 562.2,56.2 562.9,55.5 563.7,54.9 564.4,54.2 565.1,53.5 565.9,52.8 566.6,52.1 567.4,51.4 568.1,50.7 568.8,50.0 569.6,49.4 570.3,48.7 571.0,48.0 571.8,47.3 572.5,46.6 573.2,45.9 574.0,45.2 574.7,44.5 575.4,43.8 576.2,43.1 576.9,42.4 577.6,41.7 578.4,41.0 579.1,40.3 579.9,39.6 580.6,38.9 581.3,38.2 582.1,37.5 582.8,36.8 583.5,36.1 584.3,35.4 585.0,34.7" fill="none" stroke="#b2cad9" stroke-width="2"/>
<line x1="412.2" y1="222.0" x2="412.2" y2="187.1" stroke="#004D80" stroke-width="1" stroke-dasharray="2 2"/>
<line x1="335.0" y1="222.0" x2="593.0" y2="222.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fw)"/>
<line x1="412.2" y1="226.0" x2="412.2" y2="31.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fw)"/>
<text x="418.2" y="41.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >m</text>
<text x="412.2" y="239.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="485.7" y1="247.0" x2="485.7" y2="252.0" stroke="#64748b" stroke-width="1" />
<line x1="559.3" y1="247.0" x2="559.3" y2="252.0" stroke="#64748b" stroke-width="1" />
<line x1="485.7" y1="252.0" x2="559.3" y2="252.0" stroke="#64748b" stroke-width="1" />
<text x="485.7" y="267.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x − 1</text>
<text x="559.3" y="267.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x</text>
<text x="570.9" y="73.0" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >+ m(x) dx</text>
<line x1="489.0" y1="124.1" x2="489.0" y2="97.1" stroke="#6694b3" stroke-width="1" />
<text x="489.0" y="91.1" text-anchor="middle" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >− m(x − 1) dx</text>
<text x="460.0" y="18.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >x = 2 : fenêtre qui glisse</text>
</svg>
</div>
<p class="legende">Le nombre moyen de tirages $m(x)$ vaut $1$ plus l'aire sous la courbe de $m$ sur la fenêtre $[x-1, x]$. Quand $x$ avance, la fenêtre gagne une tranche à droite et en perd une à gauche. Tant que $x \le 1$ (à gauche), la tranche perdue est dans la zone où $m = 0$&nbsp;: elle ne coûte rien.</p>

**Pourquoi l'exponentielle s'arrête au seuil $1$.** Tant que $x \le 1$, le bord gauche de la fenêtre est dans la zone négative, où $m = 0$&nbsp;: la tranche perdue est nulle, et l'équation se réduit à $m' = m$, celle de l'exponentielle. Au-delà de $1$, la tranche perdue ne l'est plus&nbsp;: la variation de $m$ en $x$ dépend de sa valeur **une unité plus tôt**, en $x - 1$. C'est exactement la situation de la population avec temps de maturation, vue [dans la partie géométrique](../../geometrie/simplexes/#le-k-signature-de-labsence-de-mémoire)&nbsp;: si l'on regarde le seuil $x$ comme un temps, l'équation a maintenant de la **mémoire**. La cause en est simple&nbsp;: un tirage ne dépasse jamais $1$, si bien que la distance restante ne peut jamais «&nbsp;sauter&nbsp;» de plus d'une unité. Tant que $x \le 1$, cette limite est invisible (on peut toujours finir d'un seul coup)&nbsp;; au-delà, elle se fait sentir.

Conséquence&nbsp;: $m$ cesse d'être une exponentielle. Entre $1$ et $2$, on vérifie que $m(x) = \mathrm{e}^x - (x - 1)\\,\mathrm{e}^{x-1}$, d'où $m(2) = \mathrm{e}^2 - \mathrm{e} \approx 4,67$. Et pour les grands seuils, $m(x) \approx 2x + \frac{2}{3}$&nbsp;: chaque tirage fait avancer de $\frac{1}{2}$ en moyenne, d'où environ $2x$ tirages, plus une petite correction due au dépassement final.


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



> Pour une apparition célèbre de l'inverse $\frac{1}{\mathrm{e}} \approx 36,8\\,\\%$ en probabilités, voir le [problème du secrétaire](../curiosites/#problème-du-secrétaire) dans la page Curiosités&nbsp;!
