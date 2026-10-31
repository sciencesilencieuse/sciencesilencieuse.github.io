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
</style>


# Simplexes et probabilités
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Rupture de monotonie, seuil de Gnedenko et dérangements de Montmort</i></p>


Dans [cette partie géométrique](../../geometrie/simplexes/), nous avons vu que le **simplexe canonique $\Delta\_k$** (l'ensemble des points de l'hypercube unité $[0, 1]^k$ dont les coordonnées sont rangées par ordre croissant $0 \le t\_1 \le t\_2 \le \dots \le t\_k \le 1$) possède un volume exactement égal à $\mathbf{\frac{1}{k!}}$, car les $k!$ permutations de ses axes découpent l'hypercube $[0, 1]^k$ en $k!$ simplexes isométriques.

En probabilités, cette propriété géométrique produit un effet spectaculaire&nbsp;: dès que l'on tire des nombres aléatoires indépendants et uniformes sur $[0, 1]$ ou que l'on permute des objets au hasard, le point aléatoire $(U\_1, \dots, U\_k)$ tombe uniformément dans l'hypercube $[0, 1]^k$. Toute condition qui sélectionne un simplexe a donc une probabilité égale à son volume **$\frac{1}{k!}$**, faisant surgir le nombre [$\mathrm{e} = \sum \frac{1}{k!}$](../../arithmetique/exponentielle/) (ou son inverse $\mathrm{e}^{-1}$) là où rien ne semblait l'annoncer&nbsp;!

Étudions trois problèmes célèbres qui s'illuminent grâce à cette vision géométrique.


## Rupture de monotonie ($\mathbb{E}[N] = \mathrm{e}$)

### 1. Le jeu des tirages croissants

<div id="def">

<b>Énoncé du problème.</b> On tire successivement des nombres aléatoires $U\_1, U\_2, U\_3, \dots$ de manière indépendante et uniforme sur l'intervalle $[0, 1]$. On continue les tirages tant que les nombres tirés forment une suite croissante ($U\_1 \le U\_2 \le U\_3 \le \dots$), et l'on s'arrête dès qu'un tirage est strictement inférieur au précédent.<br>
Notons $N$ le nombre total de tirages effectués au moment de l'arrêt&nbsp;: $\displaystyle N = \min\left\\{ k \ge 2 \\;\middle|\\; U\_k < U\_{k-1} \right\\}$.

<b>Question&nbsp;:</b> En moyenne, combien de nombres doit-on tirer avant que la croissance ne se brise&nbsp;? Autrement dit, que vaut l'espérance $\mathbb{E}[N]$&nbsp;?

</div>

<br>

### 2. Somme des probabilités de survie

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

### 3. Le simplexe $\Delta\_k$ donne la réponse sans calcul

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


## Seuil de Gnedenko ($\mathbb{E}[M] = \mathrm{e}$)

### 1. Dépasser $1$ en additionnant des tirages

Changeons maintenant complètement la règle d'arrêt, tout en conservant la même suite de tirages uniformes $U\_1, U\_2, \dots \in [0, 1]$.

<div id="def">

<b>Énoncé du problème (Gnedenko / Forsythe).</b> On tire des variables aléatoires $U\_1, U\_2, U\_3, \dots$ indépendantes et uniformes sur $[0, 1]$ et on les additionne au fur et à mesure. On s'arrête dès que la **somme cumulée dépasse strictement $1$**.<br>
Notons $M$ le nombre de tirages nécessaires pour franchir le seuil $1$&nbsp;: $\displaystyle M = \min\left\\{ k \ge 1 \\;\middle|\\; U\_1 + U\_2 + \dots + U\_k > 1 \right\\}$.

<b>Question&nbsp;:</b> Que vaut le nombre moyen de tirages $\mathbb{E}[M]$&nbsp;?

</div>

<br>

À première vue, additionner des nombres jusqu'à dépasser $1$ semble très différent de les comparer l'un à l'autre ($U\_1 \le U\_2 \le \dots \le U\_k$). Et pourtant, un simple cisaillement géométrique montre que **les deux problèmes sont isomorphes**&nbsp;!

### 2. Preuve géométrique par cisaillement ($\det J = 1$)

Examinons l'événement de survie $\\{M > k\\}$ (pour $k \ge 1$). Dire qu'il faut *strictement plus* de $k$ tirages pour que la somme dépasse $1$ équivaut à dire que la somme des $k$ premiers tirages est restée **inférieure ou égale à $1$**, soit $\displaystyle \\{M > k\\} = \left\\{ U\_1 + U\_2 + \dots + U\_k \le 1 \right\\}$.

Dans l'hypercube $[0, 1]^k$, cet événement correspond au domaine appelé *simplexe orthogonal* (ou coin de l'hypercube)&nbsp;:

<p style="text-align:center;">
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
<svg viewBox="0 0 760 245" style="max-width:760px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<text x="380" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">Isomorphisme entre Gnedenko et la monotonie : le cisaillement Ψ conserve la base, la hauteur et le volume (det J = 1)</text>
<!-- Left: Orthogonal simplex Omega_2 -->
<rect x="65" y="48" width="165" height="165" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
<polygon points="65,213 230,213 65,48" fill="rgba(0, 108, 101, 0.24)" stroke="#006C65" stroke-width="2.2"/>
<!-- Horizontal slices to show Cavalieri principle -->
<line x1="65" y1="172" x2="189" y2="172" stroke="#006C65" stroke-width="1.2" stroke-dasharray="3,2"/>
<line x1="65" y1="130" x2="147" y2="130" stroke="#006C65" stroke-width="1.2" stroke-dasharray="3,2"/>
<line x1="65" y1="89" x2="106" y2="89" stroke="#006C65" stroke-width="1.2" stroke-dasharray="3,2"/>
<text x="118" y="162" text-anchor="middle" font-size="11.5" font-weight="700" fill="#006C65">Coin Ω₂ :</text>
<text x="118" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#006C65">u₁ + u₂ ≤ 1</text>
<text x="147" y="233" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">u₁ ∈ [0, 1]</text>
<text x="45" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 45 130)">u₂ ∈ [0, 1]</text>
<!-- Center arrow: Shear transformation -->
<text x="360" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#004D80">Cisaillement vertical Ψ</text>
<text x="360" y="116" text-anchor="middle" font-size="11.5" fill="#1e293b">t₁ = u₁ ,   t₂ = u₁ + u₂</text>
<path d="M 255 130 L 465 130" stroke="#004D80" stroke-width="2.5"/>
<polygon points="465,130 455,124 455,136" fill="#004D80"/>
<text x="360" y="152" text-anchor="middle" font-size="11" fill="#334155">Glissement vertical de +u₁</text>
<text x="360" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="#970E53">det(J) = 1 ⇒ Vol(Ω_k) = Vol(Δ_k) = 1/k!</text>
<!-- Right: Canonical simplex Delta_2 -->
<rect x="495" y="48" width="165" height="165" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
<polygon points="495,213 495,48 660,48" fill="rgba(151, 14, 83, 0.24)" stroke="#970E53" stroke-width="2.2"/>
<!-- Vertical/slanted slices showing preservation -->
<line x1="536" y1="172" x2="536" y2="48" stroke="#970E53" stroke-width="1.2" stroke-dasharray="3,2"/>
<line x1="577" y1="130" x2="577" y2="48" stroke="#970E53" stroke-width="1.2" stroke-dasharray="3,2"/>
<line x1="618" y1="89" x2="618" y2="48" stroke="#970E53" stroke-width="1.2" stroke-dasharray="3,2"/>
<text x="552" y="102" text-anchor="middle" font-size="11.5" font-weight="700" fill="#970E53">Simplexe Δ₂ :</text>
<text x="552" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#970E53">0 ≤ t₁ ≤ t₂ ≤ 1</text>
<text x="577" y="233" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">t₁ = u₁ ∈ [0, 1]</text>
<text x="682" y="130" text-anchor="middle" font-size="11" font-weight="600" fill="#334155" transform="rotate(90 682 130)">t₂ = u₁ + u₂ ∈ [0, 1]</text>
</svg>
</div>

<div id="preuve">

Analysons cette transformation linéaire $\Psi : (u\_1, \dots, u\_k) \mapsto (t\_1, \dots, t\_k)$&nbsp;:
<ol>
<li><b>Image géométrique&nbsp;:</b> Comme chaque incrément est positif ou nul ($u_i = t_i - t_{i-1} \ge 0$), la suite des sommes partielles $(t_i)$ est croissante ($0 \le t_1 \le t_2 \le \dots \le t_k$). Et la condition finale $u_1 + \dots + u_k \le 1$ s'écrit tout simplement $t_k \le 1$. L'application $\Psi$ envoie donc bijectivement le coin de sommation $\Omega_k$ sur le <b>simplexe canonique ordonné $\Delta_k$</b>&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle \Psi(\Omega_k) = \left\{ (t_1, \dots, t_k) \in \mathbb{R}^k \;\middle|\; 0 \le t_1 \le t_2 \le \dots \le t_k \le 1 \right\}$ $\displaystyle = \Delta_k$</span>
</li>
<li style="margin-top:0.5em;"><b>Conservation exacte des volumes&nbsp;:</b> La matrice jacobienne $J$ de cette transformation linéaire est une matrice <b>triangulaire inférieure</b> dont tous les coefficients diagonaux valent $1$. Son déterminant vaut donc $\det(J) = 1 \times 1 \times \cdots \times 1 = 1$. Géométriquement, ajouter $u_1$ à $u_2$ est un simple <i>cisaillement</i> (transvection) parallèlement aux axes, qui fait glisser les tranches sans modifier leur longueur (principe de Cavalieri)&nbsp;: <b>$\Psi$ conserve rigoureusement les volumes</b>&nbsp;!
</li>
</ol>

On en déduit sans aucun calcul d'intégrale que pour tout $k \ge 0$, $\displaystyle \mathbb{P}(M > k) = \operatorname{Vol}\_k(\Omega\_k) = \operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k!}$.

D'où à nouveau, par sommation des probabilités de survie&nbsp;: $\displaystyle \mathbb{E}[M] = \sum\_{k=0}^{+\infty} \mathbb{P}(M > k) = \sum\_{k=0}^{+\infty} \frac{1}{k!} = \mathrm{e} \approx 2,71828$. $\blacksquare$

</div>

<br>

### 3. Preuve analytique par absence de mémoire

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

### 4. Laboratoire Monte-Carlo interactif

Le laboratoire interactif ci-dessous vous permet de simuler ces deux problèmes (**Problème 1 : Rupture de monotonie** et **Problème 2 : Somme $> 1$ de Gnedenko**), de visualiser où tombent les couples $(U\_1, U\_2)$ dans le carré unité $[0,1]^2$ ($\Delta\_2$ contre $\Omega\_2$), et de vérifier que les probabilités empiriques de survie épousent les volumes des simplexes $\frac{1}{k!}$.

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px; margin: 25px auto; max-width: 820px; box-shadow: 0 4px 10px -2px rgba(0,0,0,0.07); font-family: system-ui, -apple-system, sans-serif;">
<div style="text-align: center; margin-bottom: 12px;">
<span style="font-size: 1.08em; font-weight: 700; color: #004D80;">Laboratoire Monte-Carlo&nbsp;: Monotonie ($U_1 \le \dots \le U_k$) &amp; Seuil de Gnedenko ($\sum U_i > 1$)</span>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #f1f5f9; padding: 10px 14px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div style="display: flex; gap: 6px; flex-wrap: wrap;">
<button id="mcModeABtn" style="padding: 7px 12px; border-radius: 7px; border: 2px solid #970E53; background: #970E53; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.85em;">
Problème 1 : Monotonie ($U_k < U_{k-1}$)
</button>
<button id="mcModeBBtn" style="padding: 7px 12px; border-radius: 7px; border: 2px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.85em;">
Problème 2 : Somme $> 1$ (Gnedenko)
</button>
</div>
<div style="display: flex; gap: 6px; flex-wrap: wrap;">
<button id="mcStep1Btn" style="padding: 7px 12px; border-radius: 7px; border: 1px solid #006C65; background: #006C65; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.84em;">
+1 Tirage détaillé
</button>
<button id="mcBatchBtn" style="padding: 7px 12px; border-radius: 7px; border: 1px solid #004D80; background: #004D80; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.84em;">
+1 000 Tirages
</button>
<button id="mcResetBtn" style="padding: 7px 11px; border-radius: 7px; border: 1px solid #94a3b8; background: #fff; color: #475569; font-weight: 600; cursor: pointer; font-size: 0.84em;">
Réinitialiser
</button>
</div>
</div>
<div style="position: relative; width: 100%; background: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden;">
<canvas id="probSimplexCanvas" style="width: 100%; height: 410px; display: block;"></canvas>
</div>
<div id="mcStatsReadout" style="margin-top: 10px; padding: 10px 14px; background: #fff; border-radius: 8px; border-left: 5px solid #006C65; font-size: 0.86em; color: #334155; line-height: 1.5;">
</div>
</div>
<script>
(function() {
const canvas = document.getElementById('probSimplexCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const modeABtn = document.getElementById('mcModeABtn');
const modeBBtn = document.getElementById('mcModeBBtn');
const step1Btn = document.getElementById('mcStep1Btn');
const batchBtn = document.getElementById('mcBatchBtn');
const resetBtn = document.getElementById('mcResetBtn');
const statsReadout = document.getElementById('mcStatsReadout');
let mode = 'A';
const MAX_K = 8;
const FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
let totalTrials = 0;
let sumStop = 0;
let stopCounts = new Array(MAX_K + 2).fill(0);
let lastSequence = [];
let recentPoints2D = [];
function runSingleTrial() {
const seq = [];
if (mode === 'A') {
let prev = -1;
while (true) {
const u = Math.random();
seq.push(u);
if (seq.length >= 2 && u < prev) break;
prev = u;
if (seq.length > 20) break;
}
} else {
let s = 0;
while (true) {
const u = Math.random();
seq.push(u);
s += u;
if (s > 1.0) break;
if (seq.length > 20) break;
}
}
const kStop = seq.length;
totalTrials++;
sumStop += kStop;
const bucket = Math.min(kStop, MAX_K + 1);
stopCounts[bucket]++;
lastSequence = seq;
if (seq.length >= 2) {
const survived2 = kStop > 2;
recentPoints2D.push({ u1: seq[0], u2: seq[1], survived2 });
if (recentPoints2D.length > 240) recentPoints2D.shift();
}
}
function resetSimulation(initialCount = 500) {
totalTrials = 0;
sumStop = 0;
stopCounts.fill(0);
lastSequence = [];
recentPoints2D = [];
for (let i = 0; i < initialCount; i++) runSingleTrial();
render();
}
function updateButtonsUI() {
if (mode === 'A') {
modeABtn.style.background = '#970E53';
modeABtn.style.color = '#ffffff';
modeBBtn.style.background = '#ffffff';
modeBBtn.style.color = '#004D80';
} else {
modeABtn.style.background = '#ffffff';
modeABtn.style.color = '#970E53';
modeBBtn.style.background = '#004D80';
modeBBtn.style.color = '#ffffff';
}
}
function render() {
const dpr = window.devicePixelRatio || 1;
const W = canvas.clientWidth || 780;
const H = canvas.clientHeight || 410;
if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
canvas.width = Math.round(W * dpr);
canvas.height = Math.round(H * dpr);
}
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
ctx.clearRect(0, 0, W, H);
const leftW = Math.floor(W * 0.45);
ctx.save();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12.5px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText(
mode === 'A'
? `Dernier tirage (arrêt à N = ${lastSequence.length} dès que U_k < U_{k-1})`
: `Dernier tirage (arrêt à M = ${lastSequence.length} dès que Σ U_i > 1)`,
16, 22
);
if (mode === 'A') {
const gx = 36, gy = 34, gw = leftW - 52, gh = 115;
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#cbd5e1';
ctx.fillRect(gx, gy, gw, gh);
ctx.strokeRect(gx, gy, gw, gh);
ctx.fillStyle = '#64748b';
ctx.font = '10px monospace';
ctx.textAlign = 'right';
ctx.fillText('1.0', gx - 5, gy + 9);
ctx.fillText('0.0', gx - 5, gy + gh);
const len = lastSequence.length;
const stepX = gw / Math.max(len, 5);
ctx.beginPath();
lastSequence.forEach((u, i) => {
const px = gx + (i + 0.5) * stepX;
const py = gy + gh - u * (gh - 12) - 6;
if (i === 0) ctx.moveTo(px, py);
else ctx.lineTo(px, py);
});
ctx.strokeStyle = '#004D80';
ctx.lineWidth = 2;
ctx.stroke();
lastSequence.forEach((u, i) => {
const px = gx + (i + 0.5) * stepX;
const py = gy + gh - u * (gh - 12) - 6;
const isLast = i === len - 1;
ctx.beginPath();
ctx.arc(px, py, isLast ? 5.5 : 4.2, 0, Math.PI * 2);
ctx.fillStyle = isLast ? '#dc2626' : '#006C65';
ctx.fill();
ctx.fillStyle = isLast ? '#dc2626' : '#1e293b';
ctx.font = 'bold 10px monospace';
ctx.textAlign = 'center';
ctx.fillText(u.toFixed(2), px, py - 8);
ctx.fillStyle = '#475569';
ctx.fillText(`U${i + 1}`, px, gy + gh + 12);
});
} else {
const gx = 20, gy = 50, gw = leftW - 36, gh = 42;
const maxScale = 1.65;
const threshX = gx + (1.0 / maxScale) * gw;
ctx.fillStyle = '#f1f5f9';
ctx.strokeStyle = '#cbd5e1';
ctx.fillRect(gx, gy, gw, gh);
ctx.strokeRect(gx, gy, gw, gh);
const segColors = ['#004D80', '#006C65', '#d97706', '#7c3aed', '#2563eb', '#059669'];
let acc = 0;
lastSequence.forEach((u, i) => {
const xStart = gx + (acc / maxScale) * gw;
const wSeg = (u / maxScale) * gw;
const isLast = i === lastSequence.length - 1;
ctx.fillStyle = isLast ? 'rgba(220, 38, 38, 0.82)' : segColors[i % segColors.length];
ctx.fillRect(xStart, gy, Math.max(wSeg - 1, 1), gh);
if (wSeg > 28) {
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 10px monospace';
ctx.textAlign = 'center';
ctx.fillText(`U${i+1}=${u.toFixed(2)}`, xStart + wSeg / 2, gy + gh / 2 + 4);
}
acc += u;
});
ctx.strokeStyle = '#970E53';
ctx.lineWidth = 2.5;
ctx.setLineDash([4, 3]);
ctx.beginPath();
ctx.moveTo(threshX, gy - 12);
ctx.lineTo(threshX, gy + gh + 14);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = '#970E53';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Seuil = 1,00', threshX, gy - 15);
ctx.fillStyle = '#1e293b';
ctx.fillText(`Somme finale = ${acc.toFixed(3)} (> 1 en M = ${lastSequence.length} tirages)`, gx + gw / 2, gy + gh + 28);
}
const sqSize = 175;
const sqX = 48;
const sqY = H - sqSize - 32;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText(
mode === 'A'
? 'Couples (U₁, U₂) dans [0,1]² : survie k=2 ⇔ U₁ ≤ U₂ (Δ₂)'
: 'Couples (U₁, U₂) dans [0,1]² : survie k=2 ⇔ U₁+U₂ ≤ 1 (Ω₂)',
16, sqY - 12
);
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#64748b';
ctx.lineWidth = 1.5;
ctx.fillRect(sqX, sqY, sqSize, sqSize);
ctx.strokeRect(sqX, sqY, sqSize, sqSize);
ctx.beginPath();
if (mode === 'A') {
ctx.moveTo(sqX, sqY + sqSize);
ctx.lineTo(sqX, sqY);
ctx.lineTo(sqX + sqSize, sqY);
} else {
ctx.moveTo(sqX, sqY + sqSize);
ctx.lineTo(sqX + sqSize, sqY + sqSize);
ctx.lineTo(sqX, sqY);
}
ctx.closePath();
ctx.fillStyle = 'rgba(0, 108, 101, 0.18)';
ctx.fill();
ctx.strokeStyle = '#006C65';
ctx.lineWidth = 1.8;
ctx.stroke();
recentPoints2D.forEach((pt, idx) => {
const px = sqX + pt.u1 * sqSize;
const py = sqY + sqSize - pt.u2 * sqSize;
const isNewest = idx === recentPoints2D.length - 1;
ctx.beginPath();
ctx.arc(px, py, isNewest ? 4.5 : 2.3, 0, Math.PI * 2);
ctx.fillStyle = pt.survived2 ? '#006C65' : 'rgba(220, 38, 38, 0.65)';
ctx.fill();
if (isNewest) {
ctx.strokeStyle = '#0f172a';
ctx.lineWidth = 1.2;
ctx.stroke();
}
});
ctx.fillStyle = '#006C65';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText('Aire du triangle = 1/2! = 0,5', sqX + sqSize + 12, sqY + 45);
ctx.fillStyle = '#dc2626';
ctx.fillText('Rouge : arrêt dès k = 2', sqX + sqSize + 12, sqY + 68);
ctx.fillStyle = '#006C65';
ctx.fillText('Vert : survie (N > 2)', sqX + sqSize + 12, sqY + 88);
ctx.fillStyle = '#475569';
ctx.font = '10.5px monospace';
ctx.textAlign = 'center';
ctx.fillText('U₁ ∈ [0,1]', sqX + sqSize / 2, sqY + sqSize + 16);
ctx.save();
ctx.translate(sqX - 14, sqY + sqSize / 2);
ctx.rotate(-Math.PI / 2);
ctx.fillText('U₂ ∈ [0,1]', 0, 0);
ctx.restore();
const rx = leftW + 14, ry = 14, rw = W - leftW - 26, rh = H - 28;
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.roundRect(rx, ry, rw, rh, 8);
ctx.fill();
ctx.stroke();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 13px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText('Probabilités de survie P(Arrêt > k) vs Vol(Δ_k) = 1/k!', rx + 16, ry + 24);
const survEmp = [];
let cumStopped = 0;
for (let k = 0; k <= 6; k++) {
if (k > 0) cumStopped += stopCounts[k];
survEmp.push((totalTrials - cumStopped) / Math.max(totalTrials, 1));
}
const chartX = rx + 44, chartY = ry + 48, chartW = rw - 62, chartH = 225;
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.2;
ctx.beginPath();
ctx.moveTo(chartX, chartY);
ctx.lineTo(chartX, chartY + chartH);
ctx.lineTo(chartX + chartW, chartY + chartH);
ctx.stroke();
[0, 0.25, 0.5, 0.75, 1.0].forEach(val => {
const py = chartY + chartH - val * chartH;
ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
ctx.beginPath();
ctx.moveTo(chartX, py);
ctx.lineTo(chartX + chartW, py);
ctx.stroke();
ctx.fillStyle = '#64748b';
ctx.font = '10px monospace';
ctx.textAlign = 'right';
ctx.fillText(val.toFixed(2), chartX - 6, py + 3);
});
const colW = chartW / 7;
for (let k = 0; k <= 6; k++) {
const theo = 1 / FACT[k];
const emp = survEmp[k];
const bx = chartX + k * colW + 8;
const bw = (colW - 18) / 2;
const hEmp = emp * chartH;
ctx.fillStyle = '#006C65';
ctx.fillRect(bx, chartY + chartH - hEmp, bw, hEmp);
const hTheo = theo * chartH;
ctx.fillStyle = '#970E53';
ctx.fillRect(bx + bw + 2, chartY + chartH - hTheo, bw, hTheo);
ctx.fillStyle = '#1e293b';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`k=${k}`, bx + bw, chartY + chartH + 15);
ctx.fillStyle = '#970E53';
ctx.font = '10px monospace';
ctx.fillText(`1/${k}!`, bx + bw, chartY + chartH + 28);
}
ctx.fillStyle = '#006C65';
ctx.fillRect(chartX + 12, chartY + 6, 12, 12);
ctx.fillStyle = '#1e293b';
ctx.font = '11px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText('Fréquence empirique P(Arrêt > k)', chartX + 28, chartY + 16);
ctx.fillStyle = '#970E53';
ctx.fillRect(chartX + 12, chartY + 24, 12, 12);
ctx.fillStyle = '#1e293b';
ctx.fillText('Volume exact du simplexe 1/k!', chartX + 28, chartY + 34);
const empMean = sumStop / Math.max(totalTrials, 1);
const boxY = chartY + chartH + 42;
ctx.fillStyle = '#ffffff';
ctx.strokeStyle = '#cbd5e1';
ctx.beginPath();
ctx.roundRect(rx + 16, boxY, rw - 32, rh - (boxY - ry) - 12, 6);
ctx.fill();
ctx.stroke();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.fillText(`Convergence vers e sur ${totalTrials.toLocaleString('fr-FR')} expériences :`, rx + 28, boxY + 22);
ctx.font = 'bold 13px monospace';
ctx.fillStyle = '#006C65';
ctx.fillText(`Moyenne empirique = ${empMean.toFixed(5)}`, rx + 28, boxY + 44);
ctx.fillStyle = '#970E53';
ctx.fillText(`Valeur exacte e   = ${Math.E.toFixed(5)} (écart : ${Math.abs(empMean - Math.E).toFixed(5)})`, rx + 28, boxY + 64);
ctx.restore();
statsReadout.innerHTML = `<b>Bilan sur ${totalTrials.toLocaleString('fr-FR')} tirages (${mode === 'A' ? 'Rupture de monotonie $N$' : 'Somme de Gnedenko $M$'})&nbsp;:</b> P(Survie $&gt; 2$) empirique = <b>${survEmp[2].toFixed(4)}</b> (théorique $\\frac{1}{2!} = 0,5000$), P(Survie $&gt; 3$) = <b>${survEmp[3].toFixed(4)}</b> (théorique $\\frac{1}{3!} \\approx 0,1667$), P(Survie $&gt; 4$) = <b>${survEmp[4].toFixed(4)}</b> (théorique $\\frac{1}{4!} \\approx 0,0417$). La somme des colonnes reconstitue $\\mathbb{E} = \\sum_{k=0}^\\infty \\frac{1}{k!} = \\mathrm{e} \\approx 2,71828$.`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([statsReadout]).catch(() => {});
}
}
modeABtn.addEventListener('click', () => { mode = 'A'; updateButtonsUI(); resetSimulation(500); });
modeBBtn.addEventListener('click', () => { mode = 'B'; updateButtonsUI(); resetSimulation(500); });
step1Btn.addEventListener('click', () => { runSingleTrial(); render(); });
batchBtn.addEventListener('click', () => { for (let i = 0; i < 1000; i++) runSingleTrial(); render(); });
resetBtn.addEventListener('click', () => { resetSimulation(1); });
window.addEventListener('resize', render);
updateButtonsUI();
resetSimulation(600);
})();
</script>


## Dérangements de Montmort ($\mathrm{e}^{-1}$)

### 1. Le problème des chapeaux (1708)

<div id="def">

<b>Énoncé du problème.</b> À l'entrée d'une soirée, $n$ convives numérotés de $1$ à $n$ déposent chacun leur chapeau au vestiaire. En repartant, ils récupèrent chacun un chapeau **totalement au hasard** (ce qui revient à tirer uniformément une permutation $\sigma$ dans le groupe symétrique $\mathfrak{S}\_n$, de cardinal $n!$).<br>
On appelle **dérangement** une permutation qui ne laisse aucun élément à sa place initiale (aucun convive ne récupère son propre chapeau)&nbsp;:

<p style="text-align:center;">
$\displaystyle D_n = \left\{ \sigma \in \mathfrak{S}_n \;\middle|\; \forall i \in \{1, \dots, n\},\; \sigma(i) \neq i \right\}$
</p>

<b>Question&nbsp;:</b> Quelle est la probabilité $p\_n = \frac{|D\_n|}{n!}$ qu'aucun convive ne récupère son chapeau, et comment évolue cette probabilité lorsque le nombre de convives $n$ tend vers $+\infty$&nbsp;?

</div>

<br>

Quand le nombre de convives $n$ grandit, deux effets opposés s'affrontent&nbsp;: il y a de plus en plus d'individus susceptibles de tomber sur leur propre chapeau, mais chacun n'a plus qu'une chance $\frac{1}{n}$ de tomber sur le sien. Ces deux effets se compensent avec une précision stupéfiante&nbsp;: dès $n = 6$ convives, la probabilité $p\_n$ vaut déjà **$\frac{1}{\mathrm{e}} \approx 36,788\\,\\%$** à moins d'un dix-millième près&nbsp;!

### 2. Crible de Poincaré et simplexe discret

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

<div class="svg-container">
<svg viewBox="0 0 760 205" style="max-width:760px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<text x="380" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">Pourquoi chaque couche k du crible de Poincaré vaut exactement 1/k! quel que soit le nombre de chapeaux n ≥ k</text>
<!-- Box 1: Choice of k fixed points -->
<rect x="22" y="42" width="225" height="145" rx="8" fill="#f8fafc" stroke="#004D80" stroke-width="1.5"/>
<text x="134" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#004D80">1. Simplexe discret des k élus</text>
<text x="134" y="88" text-anchor="middle" font-size="11.5" fill="#1e293b">1 ≤ i₁ &lt; i₂ &lt; … &lt; i_k ≤ n</text>
<text x="134" y="114" text-anchor="middle" font-size="11" fill="#475569">L'ordre croissant brise la</text>
<text x="134" y="130" text-anchor="middle" font-size="11" fill="#475569">symétrie S_k des k points fixes :</text>
<text x="134" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#004D80">C(n, k) = n! / ( k! · (n−k)! )</text>
<!-- Multiply sign -->
<text x="265" y="122" text-anchor="middle" font-size="22" font-weight="700" fill="#334155">×</text>
<!-- Box 2: Probability of those k fixed points -->
<rect x="284" y="42" width="225" height="145" rx="8" fill="#f8fafc" stroke="#006C65" stroke-width="1.5"/>
<text x="396" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#006C65">2. Probabilité que ces k soient fixes</text>
<text x="396" y="88" text-anchor="middle" font-size="11" fill="#1e293b">k chapeaux bloqués (1 choix)</text>
<text x="396" y="108" text-anchor="middle" font-size="11" fill="#1e293b">(n − k) chapeaux libres : (n−k)! choix</text>
<text x="396" y="130" text-anchor="middle" font-size="11" fill="#475569">sur n! permutations totales :</text>
<text x="396" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#006C65">P = (n − k)! / n!</text>
<!-- Equals sign -->
<text x="528" y="122" text-anchor="middle" font-size="22" font-weight="700" fill="#334155">=</text>
<!-- Box 3: Universal result 1/k! -->
<rect x="548" y="42" width="190" height="145" rx="8" fill="#FBE1DE" stroke="#970E53" stroke-width="2"/>
<text x="643" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#970E53">3. Annulation exacte de n</text>
<text x="643" y="92" text-anchor="middle" font-size="11" fill="#1e293b">n! et (n−k)! se simplifient !</text>
<text x="643" y="126" text-anchor="middle" font-size="18" font-weight="700" fill="#970E53">1 / k!</text>
<text x="643" y="158" text-anchor="middle" font-size="11" font-weight="600" fill="#970E53">= Vol_k(Δ_k)</text>
</svg>
</div>

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

### 3. Dualité $\mathrm{e} \cdot \mathrm{e}^{-1} = 1$ et loi de Poisson $\mathcal{P}(1)$

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

En passant à la limite $n \to +\infty$ dans $1 = \sum\_{k=0}^n \frac{1}{k!} p\_{n-k}$, on obtient immédiatement $1 = \mathrm{e} \times p\_\infty$, soit $p\_\infty = \mathrm{e}^{-1}$, et le nombre de points fixes $X\_n$ converge en loi vers la **loi de Poisson $\mathcal{P}(1)$**.

</div>

<br>

### 4. Explorateur interactif des dérangements

L'explorateur ci-dessous vous permet de faire varier le nombre de chapeaux $n$ pour observer les oscillations du crible de Poincaré autour de $\mathrm{e}^{-1}$ (**Mode 1**) et la superposition de la loi exacte des points fixes $X\_n$ avec la loi de Poisson $\mathcal{P}(1)$ (**Mode 2**).

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px; margin: 25px auto; max-width: 820px; box-shadow: 0 4px 10px -2px rgba(0,0,0,0.07); font-family: system-ui, -apple-system, sans-serif;">
<div style="text-align: center; margin-bottom: 12px;">
<span style="font-size: 1.08em; font-weight: 700; color: #004D80;">Explorateur des Dérangements&nbsp;: Crible d'Inclusion-Exclusion ($\mathrm{e}^{-1}$) &amp; Loi de Poisson $\mathcal{P}(1)$</span>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #f1f5f9; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div style="display: flex; gap: 6px; flex-wrap: wrap;">
<button id="derMode1Btn" style="padding: 7px 13px; border-radius: 7px; border: 2px solid #970E53; background: #970E53; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.85em;">
1. Oscillations du crible vers $1/\mathrm{e}$
</button>
<button id="derMode2Btn" style="padding: 7px 13px; border-radius: 7px; border: 2px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.85em;">
2. Loi des points fixes $X_n$ vs Poisson $\mathcal{P}(1)$
</button>
</div>
<div style="flex: 1; min-width: 210px; max-width: 300px;">
<div style="display: flex; justify-content: space-between; font-size: 0.86em; font-weight: 600; color: #1e293b; margin-bottom: 4px;">
<span>Nombre de chapeaux $n$&nbsp;:</span>
<span id="derNVal" style="color: #970E53; font-family: monospace;">n = 6</span>
</div>
<input type="range" id="derNSlider" min="1" max="10" value="6" step="1" style="width: 100%; accent-color: #970E53; cursor: pointer;">
</div>
</div>
<div id="derMetricsBar" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); gap: 8px; margin-bottom: 12px;">
</div>
<div style="position: relative; width: 100%; background: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden;">
<canvas id="derangementCanvas" style="width: 100%; height: 350px; display: block;"></canvas>
</div>
<div id="derReadout" style="margin-top: 10px; padding: 10px 14px; background: #fff; border-radius: 8px; border-left: 5px solid #970E53; font-size: 0.86em; color: #334155; line-height: 1.5;">
</div>
</div>
<script>
(function() {
const canvas = document.getElementById('derangementCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const btn1 = document.getElementById('derMode1Btn');
const btn2 = document.getElementById('derMode2Btn');
const nSlider = document.getElementById('derNSlider');
const nVal = document.getElementById('derNVal');
const metricsBar = document.getElementById('derMetricsBar');
const readout = document.getElementById('derReadout');
let mode = 1;
let n = 6;
const INV_E = 1 / Math.E;
const FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
const DERANGEMENTS = [1, 0, 1, 2, 9, 44, 265, 1854, 14833, 133496, 1334961];
function updateUI() {
btn1.style.background = mode === 1 ? '#970E53' : '#ffffff';
btn1.style.color = mode === 1 ? '#ffffff' : '#970E53';
btn2.style.background = mode === 2 ? '#004D80' : '#ffffff';
btn2.style.color = mode === 2 ? '#ffffff' : '#004D80';
nVal.textContent = 'n = ' + n;
const nFact = FACT[n];
const dn = DERANGEMENTS[n];
const ratio = dn / nFact;
const nFactOverE = nFact * INV_E;
const err = Math.abs(ratio - INV_E);
metricsBar.innerHTML = `
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Permutations totales $n!$</div>
<div style="font-size:1.05em;font-weight:700;color:#0f172a;font-family:monospace;">${nFact.toLocaleString('fr-FR')}</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Dérangements exacts $|D_${n}|$</div>
<div style="font-size:1.05em;font-weight:700;color:#970E53;font-family:monospace;">${dn.toLocaleString('fr-FR')}</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Valeur réelle $n! / \\mathrm{e}$</div>
<div style="font-size:1.05em;font-weight:700;color:#004D80;font-family:monospace;">${nFactOverE.toFixed(4)}</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Probabilité $p_${n}$ vs $1/\\mathrm{e}$</div>
<div style="font-size:0.98em;font-weight:700;color:#006C65;font-family:monospace;">${ratio.toFixed(6)} (écart ${err.toExponential(1)})</div>
</div>
`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([metricsBar]).catch(() => {});
}
}
function drawMode1(W, H) {
const padL = 56, padR = 30, padT = 44, padB = 50;
const plotW = W - padL - padR;
const plotH = H - padT - padB;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 13px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`Oscillations de la somme du crible S_m = Σ_{k=0}^m (-1)^k / k! autour de 1/e (pour m = 0 … ${n})`, W / 2, 24);
const yMin = -0.05, yMax = 1.08;
const toX = m => padL + (m / Math.max(n, 1)) * plotW;
const toY = y => padT + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.3;
ctx.beginPath();
ctx.moveTo(padL, padT);
ctx.lineTo(padL, padT + plotH);
ctx.lineTo(padL + plotW, padT + plotH);
ctx.stroke();
[0, 0.2, 0.4, 0.6, 0.8, 1.0].forEach(val => {
const py = toY(val);
ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
ctx.beginPath();
ctx.moveTo(padL, py);
ctx.lineTo(padL + plotW, py);
ctx.stroke();
ctx.fillStyle = '#64748b';
ctx.font = '10.5px monospace';
ctx.textAlign = 'right';
ctx.fillText(val.toFixed(1), padL - 8, py + 4);
});
const yInvE = toY(INV_E);
ctx.strokeStyle = '#006C65';
ctx.lineWidth = 2.2;
ctx.setLineDash([6, 4]);
ctx.beginPath();
ctx.moveTo(padL, yInvE);
ctx.lineTo(padL + plotW, yInvE);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = '#006C65';
ctx.font = 'bold 11.5px system-ui, sans-serif';
ctx.textAlign = 'right';
ctx.fillText('Asymptote 1/e ≈ 0,367879', padL + plotW - 6, yInvE - 8);
const pts = [];
let s = 0;
for (let m = 0; m <= n; m++) {
const term = (m % 2 === 0 ? 1 : -1) / FACT[m];
s += term;
pts.push({ m, s, term });
}
ctx.strokeStyle = '#970E53';
ctx.lineWidth = 2.4;
ctx.beginPath();
pts.forEach((p, idx) => {
const px = toX(p.m), py = toY(p.s);
if (idx === 0) ctx.moveTo(px, py);
else ctx.lineTo(px, py);
});
ctx.stroke();
pts.forEach(p => {
const px = toX(p.m), py = toY(p.s);
ctx.beginPath();
ctx.arc(px, py, 5.5, 0, Math.PI * 2);
ctx.fillStyle = p.m % 2 === 0 ? '#970E53' : '#004D80';
ctx.fill();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 1.5;
ctx.stroke();
ctx.fillStyle = '#1e293b';
ctx.font = 'bold 10.5px monospace';
ctx.textAlign = 'center';
const offsetY = p.m % 2 === 0 ? -11 : 18;
ctx.fillText(p.s.toFixed(4), px, py + offsetY);
ctx.fillStyle = '#334155';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.fillText(`k=${p.m}`, px, padT + plotH + 18);
ctx.font = '10px monospace';
ctx.fillStyle = p.m % 2 === 0 ? '#970E53' : '#004D80';
ctx.fillText(p.m === 0 ? '+1' : (p.m % 2 === 0 ? `+1/${p.m}!` : `-1/${p.m}!`), px, padT + plotH + 33);
});
readout.innerHTML = `<b>Alternance du crible de Poincaré ($n = ${n}$)&nbsp;:</b> les sommes d'ordre pair ($k$ pair, points grenat) encadrent $\\mathrm{e}^{-1}$ par valeurs <i>supérieures</i>, tandis que les sommes d'ordre impair ($k$ impair, points bleus) l'encadrent par valeurs <i>inférieures</i>. Dès $n = ${n}$, l'écart $|p_{${n}} - \\mathrm{e}^{-1}|$ est inférieur à $\\frac{1}{(${n}+1)!} \\approx ${(1/(FACT[n]*(n+1))).toExponential(2)}$.`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
function drawMode2(W, H) {
const padL = 56, padR = 30, padT = 44, padB = 48;
const plotW = W - padL - padR;
const plotH = H - padT - padB;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 13px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`Loi exacte du nombre de points fixes P(X_${n} = k) comparée à la loi de Poisson P(1) = e⁻¹/k!`, W / 2, 24);
const yMax = 0.55;
const toY = y => padT + plotH - (y / yMax) * plotH;
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.3;
ctx.beginPath();
ctx.moveTo(padL, padT);
ctx.lineTo(padL, padT + plotH);
ctx.lineTo(padL + plotW, padT + plotH);
ctx.stroke();
[0, 0.1, 0.2, 0.3, 0.4, 0.5].forEach(val => {
const py = toY(val);
ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
ctx.beginPath();
ctx.moveTo(padL, py);
ctx.lineTo(padL + plotW, py);
ctx.stroke();
ctx.fillStyle = '#64748b';
ctx.font = '10.5px monospace';
ctx.textAlign = 'right';
ctx.fillText(val.toFixed(2), padL - 8, py + 4);
});
const maxKShow = Math.max(n, 6);
const colW = plotW / (maxKShow + 1);
for (let k = 0; k <= maxKShow; k++) {
const exactP = k <= n ? (DERANGEMENTS[n - k] / (FACT[k] * FACT[n - k])) : 0;
const poissonP = INV_E / FACT[k];
const bx = padL + k * colW + 10;
const bw = Math.min((colW - 22) / 2, 28);
const hEx = (exactP / yMax) * plotH;
ctx.fillStyle = '#004D80';
ctx.fillRect(bx, padT + plotH - hEx, bw, hEx);
const hPois = (poissonP / yMax) * plotH;
ctx.fillStyle = '#970E53';
ctx.fillRect(bx + bw + 3, padT + plotH - hPois, bw, hPois);
if (k <= 5) {
ctx.fillStyle = '#004D80';
ctx.font = 'bold 9.5px monospace';
ctx.textAlign = 'center';
ctx.fillText(exactP.toFixed(3), bx + bw / 2, padT + plotH - hEx - 5);
}
ctx.fillStyle = '#1e293b';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`k = ${k}`, bx + bw, padT + plotH + 18);
if (k === n - 1) {
ctx.fillStyle = '#dc2626';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.fillText('(impossible : D₁=0)', bx + bw, padT + plotH + 32);
}
}
ctx.fillStyle = '#004D80';
ctx.fillRect(padL + plotW - 260, padT + 10, 13, 13);
ctx.fillStyle = '#1e293b';
ctx.font = '11.5px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText(`Loi exacte P(X_${n} = k) = p_{${n}-k} / k!`, padL + plotW - 242, padT + 21);
ctx.fillStyle = '#970E53';
ctx.fillRect(padL + plotW - 260, padT + 30, 13, 13);
ctx.fillStyle = '#1e293b';
ctx.fillText('Loi de Poisson P(1) = e⁻¹ / k!', padL + plotW - 242, padT + 41);
readout.innerHTML = `<b>Convergence vers la loi de Poisson $\\mathcal{P}(1)$ ($n = ${n}$)&nbsp;:</b> remarquez que $\\mathbb{P}(X_${n} = ${n-1}) = 0$ (il est impossible que exactement ${n-1} convives aient leur bon chapeau sans que le dernier ait aussi le sien, $|D_1| = 0$), tandis que pour tous les petits entiers $k$, la loi exacte $\\mathbb{P}(X_${n} = k) = \\frac{1}{k!}p_{${n}-k}$ est déjà quasi indiscernable de la loi de Poisson $\\frac{\\mathrm{e}^{-1}}{k!}$&nbsp;!`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
function render() {
const dpr = window.devicePixelRatio || 1;
const W = canvas.clientWidth || 780;
const H = canvas.clientHeight || 350;
if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
canvas.width = Math.round(W * dpr);
canvas.height = Math.round(H * dpr);
}
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
ctx.clearRect(0, 0, W, H);
if (mode === 1) drawMode1(W, H);
else drawMode2(W, H);
}
btn1.addEventListener('click', () => { mode = 1; updateUI(); render(); });
btn2.addEventListener('click', () => { mode = 2; updateUI(); render(); });
nSlider.addEventListener('input', () => {
n = parseInt(nSlider.value, 10);
updateUI();
render();
});
window.addEventListener('resize', render);
updateUI();
render();
})();
</script>


<br>

> Pour retrouver une autre apparition célèbre du seuil $\frac{1}{\mathrm{e}} \approx 36,8\\,\\%$ en probabilités, voir aussi le [problème du secrétaire](../curiosites/#problème-du-secrétaire) dans la page Curiosités&nbsp;!)
