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

On a besoin de deux formules de géométrie élémentaires&nbsp;:
<ul>
<li>L'aire d'un triangle ($k = 2$) vaut $\displaystyle \mathcal{A} = \mathbf{\frac{1}{2}} \times \text{Base} \times \text{Hauteur}$.</li>
<li>Le volume d'une pyramide ou d'un tétraèdre ($k = 3$) vaut $\displaystyle \mathcal{V} = \mathbf{\frac{1}{3}} \times \text{Aire(Base)} \times \text{Hauteur}$.</li>
</ul>

D'où viennent ce facteur $\frac{1}{2}$ en dimension $2$, ce facteur $\frac{1}{3}$ en dimension $3$, et plus généralement le facteur $\mathbf{\frac{1}{k}}$ pour une hyperpyramide de dimension $k$&nbsp;? Et quel est le lien avec la factorielle $k! = 1 \times 2 \times 3 \times \cdots \times k$&nbsp;?

Regardons comment le simplexe $\Delta\_k$ est construit **par récurrence d'une dimension sur la suivante**&nbsp;:
<ul>
<li><b>En dimension $k = 1$&nbsp;:</b> $\Delta_1 = \{0 \le t_1 \le 1\}$ est simplement le segment $[0, 1]$ de longueur $\operatorname{Vol}_1(\Delta_1) = \mathbf{1}$.</li>
<li><b>En dimension $k = 2$&nbsp;:</b> $\Delta_2 = \{0 \le t_1 \le t_2 \le 1\}$ est un triangle rectangle dont la base (en $t_2 = 1$) est le segment $0 \le t_1 \le 1$ (c'est-à-dire $\Delta_1$, de longueur $1$) et dont la hauteur le long de l'axe $t_2$ vaut $1$.<br>
Si l'on coupe ce triangle à une hauteur intermédiaire $t_2 = z \in [0, 1]$, la tranche horizontale est le segment $\{0 \le t_1 \le z\}$, de longueur $z = z^1 \times \operatorname{Vol}_1(\Delta_1)$. En empilant ces tranches de $z = 0$ à $z = 1$, l'aire vaut&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle \operatorname{Vol}_2(\Delta_2) = \frac{1}{2} \times \operatorname{Vol}_1(\Delta_1) \times 1 = \frac{1}{2} \times 1 = \mathbf{\frac{1}{1 \times 2}} = \mathbf{\frac{1}{2!}}$</span>
</li>
<li><b>En dimension $k = 3$&nbsp;:</b> $\Delta_3 = \{0 \le t_1 \le t_2 \le t_3 \le 1\}$ est une pyramide (un tétraèdre) dont le sommet est à l'origine $(0,0,0)$ et dont la base au plafond $t_3 = 1$ est exactement le triangle $\{0 \le t_1 \le t_2 \le 1\} = \Delta_2$, d'aire $\frac{1}{2!}$&nbsp;!<br>
Si l'on coupe ce tétraèdre à une hauteur $t_3 = z \in [0, 1]$, la section horizontale est le triangle $\{0 \le t_1 \le t_2 \le z\}$&nbsp;: par le théorème de Thalès (homothétie de rapport $z$ dans les $2$ directions $t_1$ et $t_2$), son aire est multipliée par $z^2$, soit $z^2 \operatorname{Vol}_2(\Delta_2)$. Comme la valeur moyenne de $z^2$ entre $0$ et $1$ est $\int_0^1 z^2\,\mathrm{d}z = \frac{1}{3}$, le volume de la pyramide 3D vaut le tiers de sa base fois sa hauteur&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle \operatorname{Vol}_3(\Delta_3) = \frac{1}{3} \times \operatorname{Vol}_2(\Delta_2) \times 1 = \frac{1}{3} \times \frac{1}{2!} = \mathbf{\frac{1}{1 \times 2 \times 3}} = \mathbf{\frac{1}{3!}}$</span>
</li>
<li><b>En dimension quelconque $k$&nbsp;:</b> $\Delta_k$ est une hyperpyramide de hauteur $1$ (selon $t_k$) érigée au-dessus de la base $(k-1)$-dimensionnelle $\Delta_{k-1}$ (située en $t_k = 1$). À la hauteur $t_k = z \in [0, 1]$, la tranche $\{0 \le t_1 \le \dots \le t_{k-1} \le z\}$ est une copie de $\Delta_{k-1}$ réduite d'un facteur $z$ dans chacune de ses $k-1$ directions, donc de volume $z^{k-1}\,\operatorname{Vol}_{k-1}(\Delta_{k-1})$. En intégrant de $z = 0$ à $z = 1$ ($\int_0^1 z^{k-1}\,\mathrm{d}z = \frac{1}{k}$), chaque nouvelle dimension apporte un facteur $\frac{1}{k}$ supplémentaire&nbsp;:</li>
</ul>

<div id="grosseformule">

$$
\operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k} \times \operatorname{Vol}\_{k-1}(\Delta\_{k-1}) = \frac{1}{k} \times \frac{1}{k-1} \times \cdots \times \frac{1}{3} \times \frac{1}{2} \times 1 = \mathbf{\frac{1}{k!}}
$$

</div>

**La factorielle $k!$ n'est donc rien d'autre que le produit des facteurs pyramidaux successifs** : $\frac{1}{2}$ (triangle en 2D) $\times \frac{1}{3}$ (pyramide en 3D) $\times \frac{1}{4}$ (hyperpyramide en 4D) $\times \cdots \times \frac{1}{k}$&nbsp;!

<div class="svg-container">
<svg viewBox="0 0 780 265" style="max-width:780px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<text x="390" y="23" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">Construction géométrique de Δₖ dimension par dimension : de 1 à 1/2! puis 1/3!</text>
<!-- Panel 1: 1D -->
<rect x="16" y="38" width="195" height="212" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="113" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Dimension k = 1 (Segment)</text>
<line x1="40" y1="135" x2="186" y2="135" stroke="#004D80" stroke-width="6" stroke-linecap="round"/>
<circle cx="40" cy="135" r="5" fill="#970E53"/>
<circle cx="186" cy="135" r="5" fill="#970E53"/>
<text x="40" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">0</text>
<text x="186" y="156" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">1</text>
<text x="113" y="118" text-anchor="middle" font-size="11.5" font-weight="700" fill="#004D80">Δ₁ : 0 ≤ t₁ ≤ 1</text>
<text x="113" y="195" text-anchor="middle" font-size="11.5" fill="#334155">1 seul ordre possible</text>
<text x="113" y="222" text-anchor="middle" font-size="12.5" font-weight="700" fill="#970E53">Vol₁(Δ₁) = 1 = 1 / 1!</text>
<!-- Panel 2: 2D -->
<rect x="226" y="38" width="245" height="212" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="348" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Dimension k = 2 (Carré coupé en 2!)</text>
<!-- Square [0,1]^2 -->
<polygon points="278,180 398,180 398,70" fill="rgba(0, 77, 128, 0.12)" stroke="#004D80" stroke-width="1.5"/>
<polygon points="278,180 278,70 398,70" fill="rgba(151, 14, 83, 0.25)" stroke="#970E53" stroke-width="2"/>
<line x1="278" y1="180" x2="398" y2="70" stroke="#970E53" stroke-width="2.2" stroke-dasharray="4,2"/>
<text x="315" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#970E53">Δ₂ (t₁ ≤ t₂)</text>
<text x="364" y="154" text-anchor="middle" font-size="11" font-weight="600" fill="#004D80">t₂ ≤ t₁</text>
<text x="338" y="196" text-anchor="middle" font-size="10.5" fill="#334155">t₁ ∈ [0, 1]</text>
<text x="262" y="128" text-anchor="middle" font-size="10.5" fill="#334155" transform="rotate(-90 262 128)">t₂ ∈ [0, 1]</text>
<text x="348" y="216" text-anchor="middle" font-size="11" fill="#334155">Base Δ₁ (1) × Hauteur (1) / 2</text>
<text x="348" y="236" text-anchor="middle" font-size="12.5" font-weight="700" fill="#970E53">Vol₂(Δ₂) = 1/2 = 1 / 2!</text>
<!-- Panel 3: 3D -->
<rect x="486" y="38" width="278" height="212" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="625" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Dimension k = 3 (Pyramide / 6 simplexes)</text>
<!-- 3D Cube wireframe & Tetrahedron Delta_3 -->
<!-- V0=(0,0,0) at (545,172), X=(1,0,0) at (635,182), Y=(1,1,0) at (685,152), (0,1,0) at (595,142) -->
<!-- Top Z=1 shifted up by 76px: (0,0,1)=(545,96), (0,1,1)=(595,66), (1,1,1)=(685,76), (1,0,1)=(635,106) -->
<polygon points="545,172 635,182 685,152 595,142" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<polygon points="545,96 635,106 685,76 595,66" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="545" y1="172" x2="545" y2="96" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="635" y1="182" x2="635" y2="106" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="685" y1="152" x2="685" y2="76" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<line x1="595" y1="142" x2="595" y2="66" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
<!-- Tetrahedron Delta_3: V0(545,172), V1(0,0,1)=(545,96), V2(0,1,1)=(595,66), V3(1,1,1)=(685,76) -->
<polygon points="545,96 595,66 685,76" fill="rgba(0, 108, 101, 0.28)" stroke="#006C65" stroke-width="1.8"/>
<polygon points="545,172 545,96 685,76" fill="rgba(151, 14, 83, 0.26)" stroke="#970E53" stroke-width="1.8"/>
<polygon points="545,172 595,66 685,76" fill="rgba(151, 14, 83, 0.16)" stroke="#970E53" stroke-width="1.5"/>
<line x1="545" y1="172" x2="685" y2="76" stroke="#0f172a" stroke-width="2.2"/>
<text x="612" y="80" text-anchor="middle" font-size="10" font-weight="700" fill="#006C65">Base Δ₂ (1/2!)</text>
<text x="526" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="#970E53">h=1</text>
<text x="625" y="216" text-anchor="middle" font-size="11" fill="#334155">Pyramide : (1/3) × Aire(Δ₂) × 1</text>
<text x="625" y="236" text-anchor="middle" font-size="12.5" font-weight="700" fill="#970E53">Vol₃(Δ₃) = (1/3)·(1/2!) = 1 / 3!</text>
</svg>
</div>

### Approche 2 : Pavage du cube par les $k!$ permutations

Il existe une seconde manière, encore plus directe et sans le moindre calcul d'intégrale, de comprendre pourquoi $\operatorname{Vol}\_k(\Delta\_k) = \frac{1}{k!}$&nbsp;: par **symétrie de permutation** dans l'hypercube unité $[0, 1]^k$ (dont le volume total vaut $1^k = 1$).

Prenons un point $(t\_1, t\_2, \dots, t\_k)$ dans $[0, 1]^k$ dont les $k$ coordonnées sont deux à deux distinctes. De combien de façons peut-on ranger ces $k$ nombres du plus petit au plus grand&nbsp;?
<ul>
<li>Il y a $k$ choix pour la coordonnée la plus petite&nbsp;;</li>
<li>$k - 1$ choix parmi les coordonnées restantes pour la deuxième plus petite&nbsp;;</li>
<li>et ainsi de suite jusqu'à la plus grande, soit exactement <b>$k(k-1)\cdots 2 \times 1 = k!$ ordres possibles</b>, chacun associé à une permutation $\sigma \in \mathfrak{S}_k$&nbsp;!</li>
</ul>

En dimension $k = 3$ par exemple, les $3! = 6$ ordres possibles des trois coordonnées $(t\_1, t\_2, t\_3)$ sont&nbsp;:

<p style="text-align:center;">
$\displaystyle t_1 \le t_2 \le t_3 \;\; (\Delta_3), \quad t_1 \le t_3 \le t_2, \quad t_2 \le t_1 \le t_3,$ $\displaystyle \quad t_2 \le t_3 \le t_1, \quad t_3 \le t_1 \le t_2, \quad t_3 \le t_2 \le t_1.$
</p>

Géométriquement, les trois plans bissecteurs $t\_1 = t\_2$, $t\_2 = t\_3$ et $t\_1 = t\_3$ passent tous par la grande diagonale du cube joignant $(0,0,0)$ à $(1,1,1)$ et découpent le cube unité en **$6$ tétraèdres trirectangles isométriques** (appelés *orthoschémas de Schläfli*), disposés autour de la grande diagonale exactement comme les $6$ quartiers d'une orange&nbsp;!

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

Pour toute permutation $\sigma \in \mathfrak{S}\_k$, l'application linéaire $\Phi\_\sigma : (t\_1, \dots, t\_k) \mapsto (t\_{\sigma(1)}, \dots, t\_{\sigma(k)})$ ne fait qu'échanger les noms des axes de coordonnées orthogonaux du cube. C'est une isométrie (réflexion ou rotation) qui conserve les distances et les volumes, et qui envoie bijectivement le secteur $D\_\sigma$ sur le simplexe canonique $\Delta\_k = D\_{\mathrm{id}}$.

Comme les $k!$ secteurs $D\_\sigma$ ont tous le même volume $\operatorname{Vol}\_k(\Delta\_k)$ et que leur réunion forme l'hypercube $[0, 1]^k$ de volume $1$, on a immédiatement&nbsp;:

<p style="text-align:center;">
$\displaystyle 1 = \operatorname{Vol}_k\left([0, 1]^k\right) = \sum_{\sigma \in \mathfrak{S}_k} \operatorname{Vol}_k(D_\sigma) = k! \, \operatorname{Vol}_k(\Delta_k)$ $\displaystyle \quad \Longrightarrow \quad \operatorname{Vol}_k(\Delta_k) = \frac{1}{k!} \qquad \blacksquare$
</p>

</div>

<br>


## L'hypercube dilaté

### Découpage en couches combinatoires (2D, 3D et dimension $n$)

Maintenant que nous savons que $\frac{1}{k!}$ est le volume d'un simplexe de dimension $k$, regardons ce que représente géométriquement la suite de Bernoulli $u\_n = \left(1 + \frac{1}{n}\right)^n$&nbsp;: c'est le **volume d'un hypercube de dimension $n$** dont chaque arête de longueur initiale $1$ a été allongée d'une petite épaisseur $\varepsilon = \frac{1}{n}$.

Pour bien visualiser les **morceaux supplémentaires** créés par cette dilatation avant de passer à la dimension $n$, observons ce qui se passe en dimension $2$ (un carré dilaté) et en dimension $3$ (un cube dilaté)&nbsp;:
<ul>
<li><b>En 2D, le carré $\left[0, 1 + \frac{1}{n}\right]^2$ se découpe en $2^2 = 4$ morceaux&nbsp;:</b>
  <ul>
  <li>$k = 0$&nbsp;: <b>$1$ carré central</b> $1 \times 1$ (aire $1$)&nbsp;;</li>
  <li>$k = 1$&nbsp;: <b>$2$ bandes latérales</b> de dimensions $1 \times \frac{1}{n}$ (aire $2 \times \frac{1}{n}$)&nbsp;;</li>
  <li>$k = 2$&nbsp;: <b>$1$ petit carré de coin</b> $\frac{1}{n} \times \frac{1}{n}$ (aire $\frac{1}{n^2}$).</li>
  </ul>
</li>
<li><b>En 3D, le cube $\left[0, 1 + \frac{1}{n}\right]^3$ se découpe en $2^3 = 8$ morceaux&nbsp;:</b>
  <ul>
  <li>$k = 0$&nbsp;: <b>$1$ cube central (le cœur)</b> $1 \times 1 \times 1$, de volume $1$&nbsp;;</li>
  <li>$k = 1$&nbsp;: <b>$3$ plaques de faces</b> de dimensions $1 \times 1 \times \frac{1}{n}$ plaquées sur les trois faces du cube (volume $3 \times \frac{1}{n}$)&nbsp;;</li>
  <li>$k = 2$&nbsp;: <b>$3$ baguettes d'arêtes</b> de dimensions $1 \times \frac{1}{n} \times \frac{1}{n}$ le long des trois arêtes d'intersection des plaques (volume $3 \times \frac{1}{n^2}$)&nbsp;;</li>
  <li>$k = 3$&nbsp;: <b>$1$ minuscule dé de coin</b> de dimensions $\frac{1}{n} \times \frac{1}{n} \times \frac{1}{n}$ au sommet extérieur (volume $\frac{1}{n^3}$).</li>
  </ul>
</li>
</ul>

En **dimension $n$**, l'hypercube dilaté $\left[0, 1 + \frac{1}{n}\right]^n$ se partitionne exactement de la même manière en $2^n$ pavés orthogonaux, classés selon leur **ordre d'extension $k$** (le nombre de coordonnées qui débordent dans la tranche $\left[1, 1 + \frac{1}{n}\right]$)&nbsp;:

<ul>
<li><b>Couche $k = 0$ (le cœur)&nbsp;:</b> $\binom{n}{0} = 1$ hypercube unité $[0,1]^n$, de volume <b>$V_{n,0} = 1 = \frac{1}{0!}$</b>.</li>
<li><b>Couche $k = 1$ (les $n$ plaques de faces)&nbsp;:</b> une seule coordonnée $x_i$ déborde dans $\left[1, 1+\frac{1}{n}\right]$. Il y a $\binom{n}{1} = n$ plaques d'épaisseur $\frac{1}{n}$, dont le volume total vaut toujours <b>$V_{n,1} = n \times \frac{1}{n} = 1 = \frac{1}{1!}$</b>.</li>
<li><b>Couche $k = 2$ (les $\binom{n}{2}$ baguettes d'arêtes)&nbsp;:</b> deux coordonnées $x_i, x_j$ débordent simultanément. Chaque baguette a pour volume $\frac{1}{n^2}$ et il y en a $\binom{n}{2} = \frac{n(n-1)}{2!}$, soit un volume total $\displaystyle V_{n,2} = \binom{n}{2}\frac{1}{n^2} = \frac{1}{2!}\left(1 - \frac{1}{n}\right) \xrightarrow[n \to +\infty]{} \mathbf{\frac{1}{2!}}$.</li>
<li><b>Couche générale d'ordre $k$&nbsp;:</b> $k$ coordonnées débordent simultanément. Il y a $\binom{n}{k}$ pavés d'ordre $k$, chacun de volume $\frac{1}{n^k}$, soit un volume cumulé qui converge vers le volume du simplexe $\Delta_k$&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle V_{n,k} = \binom{n}{k}\frac{1}{n^k} = \frac{\overbrace{n(n-1)\cdots(n-k+1)}^{\sim\,n^k}}{k!} \cdot \frac{1}{n^k}$ $\displaystyle \xrightarrow[n \to +\infty]{} \mathbf{\frac{1}{k!}} = \operatorname{Vol}_k(\Delta_k)$</span>
</li>
</ul>

**Pourquoi le volume de la couche d'ordre $k$ converge-t-il vers le volume du simplexe $\Delta\_k$&nbsp;?**
Parce que choisir un pavé d'ordre $k$ parmi les $n$ dimensions revient à choisir un sous-ensemble de $k$ indices d'axes $\\{i\_1, \dots, i\_k\\} \subset \\{1, \dots, n\\}$. Pour ne compter chaque sous-ensemble qu'une seule fois, on range ses indices par ordre strictement croissant $1 \le i\_1 < i\_2 < \dots < i\_k \le n$. En divisant ces indices par $n$, les coordonnées réduites $t\_m = \frac{i\_m}{n} \in [0, 1]$ forment un quadrillage discret de pas $\frac{1}{n}$ qui remplit exactement le **simplexe continu $\Delta\_k = \\{0 \le t\_1 \le t\_2 \le \dots \le t\_k \le 1\\}$** lorsque $n \to +\infty$&nbsp;!

### Invariance d'aire sous l'hyperbole

Une troisième figure géométrique classique relie la suite de Bernoulli à $\mathrm{e}$&nbsp;: l'aire sous l'hyperbole $y = \frac{1}{x}$.
Si l'on étire les abscisses d'un facteur $c > 0$ ($X = c\\,x$) tout en comprimant les ordonnées du même facteur ($Y = \frac{y}{c}$), l'hyperbole $Y = \frac{1}{X}$ reste globalement invariante, et les aires sont conservées ($c \times \frac{1}{c} = 1$).

En prenant $c = 1 + \frac{1}{n}$, les $n$ tranches successives entre $x = 1$ et $x = u\_n = \left(1 + \frac{1}{n}\right)^n$ ont **toutes exactement la même aire**&nbsp;:

<p style="text-align:center;">
$\displaystyle \mathcal{A}\left(1,\, 1 + \tfrac{1}{n}\right) = \mathcal{A}\left(1 + \tfrac{1}{n},\, \left(1 + \tfrac{1}{n}\right)^2\right)$ $\displaystyle = \cdots = \mathcal{A}\left(\left(1 + \tfrac{1}{n}\right)^{n-1},\, \left(1 + \tfrac{1}{n}\right)^n\right)$
</p>

Or, sur la première tranche $\left[1, 1 + \frac{1}{n}\right]$ de largeur $\frac{1}{n}$, l'hyperbole $y = \frac{1}{x}$ est comprise entre $\frac{n}{n+1}$ et $1$. En multipliant par $n$, l'aire totale $\mathcal{A}(1, u\_n)$ est pincée entre $\frac{n}{n+1}$ et $1$&nbsp;: lorsque $n \to +\infty$, $\mathcal{A}(1, u\_n) \to 1 = \mathcal{A}(1, \mathrm{e})$, donc $u\_n \to \mathrm{e}$.

### Explorateur géométrique interactif (2D & 3D)

L'explorateur interactif ci-dessous réunit ces **trois visions géométriques**&nbsp;:
<ol>
<li><b>Mode 1 — Dilatation 2D &amp; 3D $(1+1/n)^n$&nbsp;:</b> observez simultanément le <b>carré 2D dilaté</b> (à gauche) et le <b>cube 3D dilaté éclaté en ses $8$ morceaux</b> (au centre, que vous pouvez faire tourner à la souris&nbsp;: $1$ cœur $k=0$, $3$ plaques de faces $k=1$, $3$ baguettes d'arêtes $k=2$ et $1$ dé de coin $k=3$), ainsi que le diagramme de convergence vers $\sum \frac{1}{k!}$ (à droite).</li>
<li><b>Mode 2 — Cube $[0,1]^3$ &amp; $3!=6$ Simplexes $\Delta_3$&nbsp;:</b> faites pivoter le cube unité et éclatez-le le long des plans diagonaux $t_i = t_j$ pour voir les $6$ tétraèdres de Schläfli isométriques de volume $\frac{1}{6}$.</li>
<li><b>Mode 3 — Hyperbole $y = 1/x$&nbsp;:</b> visualisez les $n$ tranches d'aires invariantes qui convergent vers $x = \mathrm{e}$.</li>
</ol>

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px; margin: 25px auto; max-width: 860px; box-shadow: 0 4px 10px -2px rgba(0,0,0,0.07); font-family: system-ui, -apple-system, sans-serif;">
<div style="text-align: center; margin-bottom: 12px;">
<span style="font-size: 1.08em; font-weight: 700; color: #004D80;">Explorateur Géométrique 2D &amp; 3D&nbsp;: Dilatation $(1+1/n)^n$, Simplexes $\Delta_k$ et Hyperbole $1/x$</span>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 12px;">
<button id="geomMode1Btn" style="padding: 8px 14px; border-radius: 8px; border: 2px solid #004D80; background: #004D80; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.87em; transition: all 0.15s;">
1. Dilatation 2D &amp; 3D $(1 + 1/n)^n$
</button>
<button id="geomMode2Btn" style="padding: 8px 14px; border-radius: 8px; border: 2px solid #970E53; background: #fff; color: #970E53; font-weight: 600; cursor: pointer; font-size: 0.87em; transition: all 0.15s;">
2. Cube $[0,1]^3$ &amp; $3!=6$ Simplexes $\Delta_3$
</button>
<button id="geomMode3Btn" style="padding: 8px 14px; border-radius: 8px; border: 2px solid #006C65; background: #fff; color: #006C65; font-weight: 600; cursor: pointer; font-size: 0.87em; transition: all 0.15s;">
3. Hyperbole $y = 1/x$ ($n$ tranches)
</button>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-between; background: #f1f5f9; padding: 10px 14px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 10px;">
<div style="flex: 1; min-width: 200px;">
<div style="display: flex; justify-content: space-between; font-size: 0.85em; font-weight: 600; color: #1e293b; margin-bottom: 4px;">
<span id="geomSlider1Label">Éclatement 3D des pièces (k=1, 2, 3)&nbsp;:</span>
<span id="geomSlider1Val" style="color: #970E53; font-family: monospace;">45 %</span>
</div>
<input type="range" id="geomSlider1" min="0" max="100" value="45" style="width: 100%; accent-color: #970E53; cursor: pointer;">
</div>
<div style="flex: 1; min-width: 200px;">
<div style="display: flex; justify-content: space-between; font-size: 0.85em; font-weight: 600; color: #1e293b; margin-bottom: 4px;">
<span>Paramètre entier $n$ (finesse $1/n$)&nbsp;:</span>
<span id="geomNVal" style="color: #004D80; font-family: monospace;">n = 4</span>
</div>
<input type="range" id="geomNSlider" min="1" max="15" value="4" step="1" style="width: 100%; accent-color: #004D80; cursor: pointer;">
</div>
<div id="geomLayerFilterBox" style="display: flex; gap: 4px; flex-wrap: wrap; align-items: center;">
<span style="font-size: 0.8em; font-weight: 700; color: #334155; margin-right: 2px;">Couche&nbsp;:</span>
<button class="geomLayerBtn" data-layer="-1" style="padding: 4px 8px; border-radius: 5px; border: 1px solid #004D80; background: #004D80; color: #fff; font-size: 0.78em; font-weight: 700; cursor: pointer;">Toutes</button>
<button class="geomLayerBtn" data-layer="0" style="padding: 4px 8px; border-radius: 5px; border: 1px solid #004D80; background: #fff; color: #004D80; font-size: 0.78em; font-weight: 600; cursor: pointer;">k=0 (Cœur)</button>
<button class="geomLayerBtn" data-layer="1" style="padding: 4px 8px; border-radius: 5px; border: 1px solid #006C65; background: #fff; color: #006C65; font-size: 0.78em; font-weight: 600; cursor: pointer;">k=1 (Faces)</button>
<button class="geomLayerBtn" data-layer="2" style="padding: 4px 8px; border-radius: 5px; border: 1px solid #970E53; background: #fff; color: #970E53; font-size: 0.78em; font-weight: 600; cursor: pointer;">k=2 (Arêtes)</button>
<button class="geomLayerBtn" data-layer="3" style="padding: 4px 8px; border-radius: 5px; border: 1px solid #d97706; background: #fff; color: #d97706; font-size: 0.78em; font-weight: 600; cursor: pointer;">k=3 (Coin)</button>
</div>
</div>
<div style="position: relative; width: 100%; background: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden;">
<canvas id="geomSimplexCanvas" style="width: 100%; height: 435px; display: block; cursor: grab;"></canvas>
</div>
<div id="geomReadout" style="margin-top: 10px; padding: 10px 14px; background: #fff; border-radius: 8px; border-left: 5px solid #004D80; font-size: 0.86em; color: #334155; line-height: 1.5;">
</div>
</div>
<script>
(function() {
const canvas = document.getElementById('geomSimplexCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const btn1 = document.getElementById('geomMode1Btn');
const btn2 = document.getElementById('geomMode2Btn');
const btn3 = document.getElementById('geomMode3Btn');
const slider1 = document.getElementById('geomSlider1');
const slider1Label = document.getElementById('geomSlider1Label');
const slider1Val = document.getElementById('geomSlider1Val');
const nSlider = document.getElementById('geomNSlider');
const nVal = document.getElementById('geomNVal');
const layerBox = document.getElementById('geomLayerFilterBox');
const layerBtns = document.querySelectorAll('.geomLayerBtn');
const readout = document.getElementById('geomReadout');
let mode = 1; // 1: 2D & 3D Dilation, 2: 3D Cube & 6 Simplices, 3: Hyperbola 1/x
let explode = 0.45;
let nParam = 4;
let activeLayer = -1; // -1 = all, 0, 1, 2, 3
let selectedSlice = 1;
let rotYaw = -0.62;
let rotPitch = 0.44;
let isDragging = false;
let lastX = 0, lastY = 0;
const E_CONST = Math.E;
const FACT = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
function factorial(k) {
if (k < FACT.length) return FACT[k];
let r = 1;
for (let i = 2; i <= k; i++) r *= i;
return r;
}
const SUB_MAP = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','n':'ₙ','k':'ₖ','j':'ⱼ'};
const SUP_MAP = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','n':'ⁿ','k':'ᵏ','j':'ʲ','+':'⁺'};
function toSub(str) { return String(str).split('').map(c => SUB_MAP[c] || c).join(''); }
function toSup(str) { return String(str).split('').map(c => SUP_MAP[c] || c).join(''); }
const PERMS_S3 = [
{ perm: [0, 1, 2], label: '0 ≤ t₁ ≤ t₂ ≤ t₃ ≤ 1 (Δ₃ canonique)', short: 't₁ ≤ t₂ ≤ t₃', color: '#970E53', fill: 'rgba(151, 14, 83, 0.78)' },
{ perm: [0, 2, 1], label: '0 ≤ t₁ ≤ t₃ ≤ t₂ ≤ 1', short: 't₁ ≤ t₃ ≤ t₂', color: '#004D80', fill: 'rgba(0, 77, 128, 0.42)' },
{ perm: [1, 0, 2], label: '0 ≤ t₂ ≤ t₁ ≤ t₃ ≤ 1', short: 't₂ ≤ t₁ ≤ t₃', color: '#006C65', fill: 'rgba(0, 108, 101, 0.42)' },
{ perm: [1, 2, 0], label: '0 ≤ t₂ ≤ t₃ ≤ t₁ ≤ 1', short: 't₂ ≤ t₃ ≤ t₁', color: '#d97706', fill: 'rgba(217, 119, 6, 0.42)' },
{ perm: [2, 0, 1], label: '0 ≤ t₃ ≤ t₁ ≤ t₂ ≤ 1', short: 't₃ ≤ t₁ ≤ t₂', color: '#7c3aed', fill: 'rgba(124, 58, 237, 0.42)' },
{ perm: [2, 1, 0], label: '0 ≤ t₃ ≤ t₂ ≤ t₁ ≤ 1', short: 't₃ ≤ t₂ ≤ t₁', color: '#2563eb', fill: 'rgba(37, 99, 235, 0.42)' }
];
function getTetraVertices(perm) {
const v0 = [0, 0, 0];
const v1 = [0, 0, 0]; v1[perm[2]] = 1;
const v2 = [v1[0], v1[1], v1[2]]; v2[perm[1]] = 1;
const v3 = [1, 1, 1];
return [v0, v1, v2, v3];
}
function project3D(pt, cx, cy, scale, centerOffset = 0.5) {
const x0 = pt[0] - centerOffset;
const y0 = pt[1] - centerOffset;
const z0 = pt[2] - centerOffset;
const cosY = Math.cos(rotYaw), sinY = Math.sin(rotYaw);
const x1 = x0 * cosY - y0 * sinY;
const y1 = x0 * sinY + y0 * cosY;
const z1 = z0;
const cosP = Math.cos(rotPitch), sinP = Math.sin(rotPitch);
const x2 = x1;
const y2 = y1 * cosP - z1 * sinP;
const z2 = y1 * sinP + z1 * cosP;
return {
x: cx + x2 * scale,
y: cy - z2 * scale,
depth: y2
};
}
function updateModeUI() {
const styles = [
{ btn: btn1, active: mode === 1, color: '#004D80' },
{ btn: btn2, active: mode === 2, color: '#970E53' },
{ btn: btn3, active: mode === 3, color: '#006C65' }
];
styles.forEach(s => {
s.btn.style.background = s.active ? s.color : '#ffffff';
s.btn.style.color = s.active ? '#ffffff' : s.color;
});
layerBox.style.display = mode === 1 ? 'flex' : 'none';
if (mode === 1) {
slider1Label.innerHTML = 'Éclatement 3D des pièces (k=1, 2, 3)&nbsp;:';
slider1.min = 0; slider1.max = 100;
slider1.value = Math.round(explode * 100);
slider1Val.textContent = Math.round(explode * 100) + ' %';
canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
} else if (mode === 2) {
slider1Label.innerHTML = 'Éclatement des 6 tétraèdres (groupe 𝔖₃)&nbsp;:';
slider1.min = 0; slider1.max = 100;
slider1.value = Math.round(explode * 100);
slider1Val.textContent = Math.round(explode * 100) + ' %';
canvas.style.cursor = isDragging ? 'grabbing' : 'grab';
} else {
slider1Label.innerHTML = 'Tranche hyperbolique mise en évidence&nbsp;:';
slider1.min = 1; slider1.max = nParam;
if (selectedSlice < 1 || selectedSlice > nParam) selectedSlice = 1;
slider1.value = selectedSlice;
slider1Val.textContent = 'Tranche #' + selectedSlice + ' / ' + nParam;
canvas.style.cursor = 'default';
}
nVal.textContent = 'n = ' + nParam;
const lColors = { '-1': '#004D80', '0': '#004D80', '1': '#006C65', '2': '#970E53', '3': '#d97706' };
layerBtns.forEach(b => {
const lv = parseInt(b.getAttribute('data-layer'), 10);
const col = lColors[String(lv)];
if (lv === activeLayer) {
b.style.background = col;
b.style.color = '#ffffff';
b.style.fontWeight = '700';
} else {
b.style.background = '#ffffff';
b.style.color = col;
b.style.fontWeight = '600';
}
});
}
function computeUnTerms(n) {
const terms = [];
for (let k = 0; k <= n; k++) {
let prod = 1;
for (let j = 1; j <= k - 1; j++) prod *= (1 - j / n);
terms.push(prod / factorial(k));
}
return terms;
}
function drawComparisonPanel(x0, y0, w, h) {
ctx.save();
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.roundRect(x0, y0, w, h, 8);
ctx.fill();
ctx.stroke();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText(`Couches n-dim vs Simplexes (n = ${nParam})`, x0 + 12, y0 + 18, w - 24);
const unTerms = computeUnTerms(nParam);
const unTotal = unTerms.reduce((a, b) => a + b, 0);
let snTotal = 0;
for (let k = 0; k <= nParam; k++) snTotal += 1 / factorial(k);
const layerColors = ['#004D80', '#006C65', '#970E53', '#d97706', '#7c3aed', '#2563eb', '#64748b'];
const barLeft = x0 + 12;
const barW = Math.max(w - 24, 60);
const maxVal = 3.0;
const yBar1 = y0 + 40;
ctx.fillStyle = '#334155';
ctx.font = '600 10.5px system-ui, sans-serif';
const sText = w < 270 ? `S${toSub(nParam)} = Σ 1/k! = ${snTotal.toFixed(4)}` : `Somme des simplexes S${toSub(nParam)} = Σ 1/k! = ${snTotal.toFixed(5)}`;
ctx.fillText(sText, barLeft, yBar1 - 5, barW);
let curX = barLeft;
for (let k = 0; k <= Math.min(nParam, 7); k++) {
const val = 1 / factorial(k);
const segW = (val / maxVal) * barW;
ctx.fillStyle = layerColors[k % layerColors.length];
ctx.globalAlpha = (activeLayer === -1 || activeLayer === k) ? 1.0 : 0.25;
ctx.fillRect(curX, yBar1, Math.max(segW - 1, 1), 22);
if (segW > 20) {
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(k <= 1 ? '1' : `1/${k}!`, curX + segW / 2, yBar1 + 14, Math.max(segW - 2, 8));
}
curX += segW;
}
ctx.globalAlpha = 1.0;
const yBar2 = y0 + 90;
ctx.textAlign = 'left';
ctx.fillStyle = '#334155';
ctx.font = '600 10.5px system-ui, sans-serif';
const uText = w < 270 ? `u${toSub(nParam)} = (1+1/${nParam})${toSup(nParam)} = ${unTotal.toFixed(4)}` : `Hypercube u${toSub(nParam)} = (1 + 1/${nParam})${toSup(nParam)} = ${unTotal.toFixed(5)}`;
ctx.fillText(uText, barLeft, yBar2 - 5, barW);
curX = barLeft;
for (let k = 0; k <= Math.min(nParam, 7); k++) {
const val = unTerms[k];
const segW = (val / maxVal) * barW;
ctx.fillStyle = layerColors[k % layerColors.length];
ctx.globalAlpha = (activeLayer === -1 || activeLayer === k) ? 0.85 : 0.22;
ctx.fillRect(curX, yBar2, Math.max(segW - 1, 1), 22);
if (segW > 20) {
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`V${toSub(k)}`, curX + segW / 2, yBar2 + 14, Math.max(segW - 2, 8));
}
curX += segW;
}
ctx.globalAlpha = 1.0;
const eX = barLeft + (E_CONST / maxVal) * barW;
ctx.strokeStyle = '#dc2626';
ctx.lineWidth = 1.8;
ctx.setLineDash([4, 3]);
ctx.beginPath();
ctx.moveTo(eX, yBar1 - 8);
ctx.lineTo(eX, yBar2 + 28);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = '#dc2626';
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('e ≈ 2,718', eX, yBar2 + 40);
const tableTop = y0 + 152;
const col0 = barLeft;
const col1 = barLeft + Math.floor(barW * 0.23);
const col2 = barLeft + Math.floor(barW * 0.52);
const col3 = barLeft + Math.floor(barW * 0.78);
const colW = Math.floor(barW * 0.24);
ctx.textAlign = 'left';
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 10.5px system-ui, sans-serif';
ctx.fillText('Couche', col0, tableTop, colW);
ctx.fillText(w < 260 ? '3D' : '3D (d=3)', col1, tableTop, colW);
ctx.fillText(w < 260 ? 'Vₙ,ₖ' : `V${toSub(nParam)},ₖ`, col2, tableTop, colW);
ctx.fillText('Vol(Δₖ)', col3, tableTop, colW);
ctx.strokeStyle = '#cbd5e1';
ctx.beginPath();
ctx.moveTo(barLeft, tableTop + 4);
ctx.lineTo(barLeft + barW, tableTop + 4);
ctx.stroke();
const cube3DCounts = ['1×1', '3×(1/n)', '3×(1/n²)', '1×(1/n³)', '—', '—'];
const maxRows = Math.min(nParam, 5);
for (let k = 0; k <= maxRows; k++) {
const ry = tableTop + 20 + k * 21;
const vk = unTerms[k];
const sk = 1 / factorial(k);
const isHi = activeLayer === k;
if (isHi) {
ctx.fillStyle = 'rgba(0, 77, 128, 0.08)';
ctx.fillRect(barLeft - 4, ry - 13, barW + 8, 18);
}
ctx.fillStyle = layerColors[k % layerColors.length];
ctx.beginPath();
ctx.arc(col0 + 4, ry - 4, 3.5, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#1e293b';
ctx.font = isHi ? 'bold 10px monospace' : '600 10px monospace';
ctx.fillText(`k=${k}`, col0 + 12, ry, colW);
ctx.fillStyle = '#475569';
ctx.fillText(cube3DCounts[k] || '—', col1, ry, colW);
ctx.fillStyle = '#0f172a';
ctx.fillText(vk.toFixed(4), col2, ry, colW);
ctx.fillStyle = '#970E53';
ctx.fillText(`1/${k}!=${sk.toFixed(3)}`, col3, ry, colW);
}
const cube3DVol = Math.pow(1 + 1 / nParam, 3);
ctx.fillStyle = '#334155';
ctx.font = '600 10.5px system-ui, sans-serif';
const sum3DTxt = w < 280
? `(1 + 1/${nParam})³ = ${cube3DVol.toFixed(4)}`
: `En 3D : (1 + 1/${nParam})³ = 1 + 3/${nParam} + 3/${nParam}² + 1/${nParam}³ = ${cube3DVol.toFixed(4)}`;
ctx.fillText(sum3DTxt, barLeft, y0 + h - 10, barW);
ctx.restore();
}
function createBox3D(bx0, bx1, by0, by1, bz0, bz1, orderK, label) {
const verts = [
[bx0, by0, bz0], [bx1, by0, bz0], [bx1, by1, bz0], [bx0, by1, bz0],
[bx0, by0, bz1], [bx1, by0, bz1], [bx1, by1, bz1], [bx0, by1, bz1]
];
const faces = [
[0, 1, 2, 3], [4, 5, 6, 7],
[0, 1, 5, 4], [2, 3, 7, 6],
[1, 2, 6, 5], [0, 3, 7, 4]
];
return { verts, faces, orderK, label };
}
function draw2DSquare(x0, y0, w, h) {
ctx.save();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`1. Carré 2D (1 + 1/${nParam})²`, x0 + w * 0.5, y0 + 18, w - 16);
ctx.fillStyle = '#64748b';
ctx.font = '10.5px system-ui, sans-serif';
ctx.fillText('1 cœur + 2 bandes + 1 coin', x0 + w * 0.5, y0 + 33, w - 16);
const pad2D = 16;
const avail2D = Math.max(Math.min(w - 2 * pad2D, h - 130, 180), 70);
const totalSide = 1 + 1 / nParam;
const unitPx = avail2D / totalSide;
const extPx = unitPx / nParam;
const gap2D = explode * 8;
const sx = Math.floor(x0 + (w - avail2D - gap2D) / 2);
const sy = y0 + 44;
ctx.globalAlpha = (activeLayer === -1 || activeLayer === 0) ? 1.0 : 0.2;
ctx.fillStyle = 'rgba(0, 77, 128, 0.22)';
ctx.strokeStyle = '#004D80';
ctx.lineWidth = 2;
ctx.fillRect(sx, sy + extPx + gap2D, unitPx, unitPx);
ctx.strokeRect(sx, sy + extPx + gap2D, unitPx, unitPx);
ctx.fillStyle = '#004D80';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('k = 0 (Cœur)', sx + unitPx / 2, sy + extPx + gap2D + unitPx / 2 - 4, unitPx - 4);
ctx.font = '10px system-ui, sans-serif';
ctx.fillText('Aire = 1', sx + unitPx / 2, sy + extPx + gap2D + unitPx / 2 + 10, unitPx - 4);
ctx.globalAlpha = (activeLayer === -1 || activeLayer === 1) ? 1.0 : 0.2;
ctx.fillStyle = 'rgba(0, 108, 101, 0.42)';
ctx.strokeStyle = '#006C65';
ctx.lineWidth = 1.6;
ctx.fillRect(sx + unitPx + gap2D, sy + extPx + gap2D, extPx, unitPx);
ctx.strokeRect(sx + unitPx + gap2D, sy + extPx + gap2D, extPx, unitPx);
ctx.fillRect(sx, sy, unitPx, extPx);
ctx.strokeRect(sx, sy, unitPx, extPx);
ctx.globalAlpha = (activeLayer === -1 || activeLayer === 2) ? 1.0 : 0.2;
ctx.fillStyle = 'rgba(151, 14, 83, 0.72)';
ctx.strokeStyle = '#970E53';
ctx.lineWidth = 1.8;
ctx.fillRect(sx + unitPx + gap2D, sy, extPx, extPx);
ctx.strokeRect(sx + unitPx + gap2D, sy, extPx, extPx);
ctx.globalAlpha = 1.0;
const legY = sy + avail2D + gap2D + 18;
ctx.textAlign = 'left';
ctx.font = '600 10px system-ui, sans-serif';
ctx.fillStyle = '#004D80';
ctx.fillText(`• Cœur (k=0) : 1 × 1 = 1`, x0 + 12, legY, w - 24);
ctx.fillStyle = '#006C65';
ctx.fillText(`• 2 bandes (k=1) : 2 × (1/${nParam}) = ${(2/nParam).toFixed(3)}`, x0 + 12, legY + 15, w - 24);
ctx.fillStyle = '#970E53';
ctx.fillText(`• 1 coin (k=2) : 1/${nParam}² = ${(1/(nParam*nParam)).toFixed(4)}`, x0 + 12, legY + 30, w - 24);
ctx.fillStyle = '#1e293b';
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.fillText(`Total 2D = (1 + 1/${nParam})² = ${Math.pow(1+1/nParam, 2).toFixed(3)}`, x0 + 12, legY + 47, w - 24);
ctx.restore();
}
function draw3DExpandedCube(x0, y0, w, h) {
ctx.save();
const cx3 = x0 + w * 0.5;
const cy3 = y0 + (h - 40) * 0.52;
const eps = 1 / nParam;
const gap3 = explode * 0.36;
const scale3 = Math.min(w, h - 50) * (0.37 / (1 + eps + gap3 * 0.7));
const centerOff = (1 + eps + gap3) * 0.5;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`2. Cube 3D dilaté (1 + 1/${nParam})³ : 8 morceaux`, cx3, y0 + 18, w - 16);
ctx.fillStyle = '#64748b';
ctx.font = '10.5px system-ui, sans-serif';
ctx.fillText('(Glisser pour tourner — 1 cœur, 3 faces, 3 arêtes, 1 coin)', cx3, y0 + 33, w - 16);
const boxes = [];
for (let ix = 0; ix < 2; ix++) {
for (let iy = 0; iy < 2; iy++) {
for (let iz = 0; iz < 2; iz++) {
const k = ix + iy + iz;
const bx0 = ix === 0 ? 0 : 1 + gap3;
const bx1 = ix === 0 ? 1 : 1 + gap3 + eps;
const by0 = iy === 0 ? 0 : 1 + gap3;
const by1 = iy === 0 ? 1 : 1 + gap3 + eps;
const bz0 = iz === 0 ? 0 : 1 + gap3;
const bz1 = iz === 0 ? 1 : 1 + gap3 + eps;
boxes.push(createBox3D(bx0, bx1, by0, by1, bz0, bz1, k));
}
}
}
const kFill = [
'rgba(0, 77, 128, 0.52)',
'rgba(0, 108, 101, 0.68)',
'rgba(151, 14, 83, 0.82)',
'rgba(217, 119, 6, 0.92)'
];
const kStroke = ['#004D80', '#006C65', '#970E53', '#b45309'];
const allPolys = [];
boxes.forEach(box => {
const projV = box.verts.map(v => project3D(v, cx3, cy3, scale3, centerOff));
box.faces.forEach(f => {
const d = (projV[f[0]].depth + projV[f[1]].depth + projV[f[2]].depth + projV[f[3]].depth) / 4;
allPolys.push({
pts: [projV[f[0]], projV[f[1]], projV[f[2]], projV[f[3]]],
depth: d,
k: box.orderK
});
});
});
allPolys.sort((a, b) => b.depth - a.depth);
allPolys.forEach(poly => {
const isVis = activeLayer === -1 || activeLayer === poly.k;
ctx.globalAlpha = isVis ? 1.0 : 0.12;
ctx.beginPath();
ctx.moveTo(poly.pts[0].x, poly.pts[0].y);
ctx.lineTo(poly.pts[1].x, poly.pts[1].y);
ctx.lineTo(poly.pts[2].x, poly.pts[2].y);
ctx.lineTo(poly.pts[3].x, poly.pts[3].y);
ctx.closePath();
ctx.fillStyle = kFill[poly.k];
ctx.fill();
ctx.strokeStyle = kStroke[poly.k];
ctx.lineWidth = poly.k >= 2 ? 1.4 : 1.0;
ctx.stroke();
});
ctx.globalAlpha = 1.0;
const botY = y0 + h - 30;
const legW3D = Math.min(w * 0.46, 120);
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#004D80';
ctx.fillText(`k=0 : 1 cœur (1)`, cx3 - legW3D * 0.5, botY, legW3D);
ctx.fillStyle = '#006C65';
ctx.fillText(`k=1 : 3 plaques (3/${nParam})`, cx3 + legW3D * 0.5, botY, legW3D);
ctx.fillStyle = '#970E53';
ctx.fillText(`k=2 : 3 arêtes (3/${nParam}²)`, cx3 - legW3D * 0.5, botY + 15, legW3D);
ctx.fillStyle = '#d97706';
ctx.fillText(`k=3 : 1 coin (1/${nParam}³)`, cx3 + legW3D * 0.5, botY + 15, legW3D);
ctx.restore();
}
function drawMode1(W, H) {
if (W >= 780) {
const w2D = Math.floor(W * 0.26);
const w3D = Math.floor(W * 0.38);
const x3D = w2D;
const xRight = w2D + w3D;
draw2DSquare(0, 0, w2D, H);
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(x3D, 14);
ctx.lineTo(x3D, H - 14);
ctx.stroke();
draw3DExpandedCube(x3D, 0, w3D, H);
drawComparisonPanel(xRight + 6, 12, W - xRight - 14, H - 24);
} else if (W >= 520) {
const hRow1 = 330;
const w2D = Math.floor(W * 0.44);
const w3D = W - w2D;
draw2DSquare(0, 0, w2D, hRow1);
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(w2D, 14);
ctx.lineTo(w2D, hRow1 - 14);
ctx.stroke();
draw3DExpandedCube(w2D, 0, w3D, hRow1);
drawComparisonPanel(8, hRow1 + 10, W - 16, H - hRow1 - 20);
} else {
const hRow1 = 260;
const hRow2 = 320;
draw2DSquare(0, 0, W, hRow1);
draw3DExpandedCube(0, hRow1 + 10, W, hRow2);
drawComparisonPanel(6, hRow1 + hRow2 + 20, W - 12, H - (hRow1 + hRow2 + 30));
}
const v2 = (nParam * (nParam - 1) / 2) / (nParam * nParam);
const v3 = nParam >= 3 ? (nParam * (nParam - 1) * (nParam - 2) / 6) / (nParam * nParam * nParam) : 0;
readout.innerHTML = `<b>Morceaux supplémentaires de la dilatation ($n = ${nParam}$)&nbsp;:</b> en 3D, le cube dilaté $\left(1+\frac{1}{${nParam}}\right)^3$ ajoute au cœur $1$ (bleu) <b>3 plaques de faces</b> d'épaisseur $\frac{1}{${nParam}}$ (vert), <b>3 baguettes d'arêtes</b> de section $\frac{1}{${nParam}^2}$ (grenat) et <b>1 petit cube de coin</b> de volume $\frac{1}{${nParam}^3}$ (ambre). En dimension $n = ${nParam}$, la couche d'ordre $k=2$ vaut $V_{${nParam},2} = \binom{${nParam}}{2}\frac{1}{${nParam}^2} = ${v2.toFixed(4)} \to \frac{1}{2!} = 0,5$, et la couche $k=3$ vaut $V_{${nParam},3} = ${v3.toFixed(4)} \to \frac{1}{3!} \approx 0,1667$.`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
function drawMode2(W, H) {
const isNarrow = W < 640;
const leftW = isNarrow ? W : Math.floor(W * 0.54);
const panelH = isNarrow ? 370 : H;
const cx = leftW * 0.5;
const cy = panelH * 0.53;
const scale = Math.min(leftW, panelH) * 0.44;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Pavage du cube [0,1]³ en 3! = 6 simplexes isométriques (Vol = 1/6)', cx, 22, leftW - 16);
ctx.fillStyle = '#64748b';
ctx.font = '10.5px system-ui, sans-serif';
ctx.fillText('(Glisser pour tourner en 3D — La diagonale noire est t₁ = t₂ = t₃)', cx, 38, leftW - 16);
const cubeCorners = [
[0,0,0],[1,0,0],[1,1,0],[0,1,0],
[0,0,1],[1,0,1],[1,1,1],[0,1,1]
];
const cubeEdges = [
[0,1],[1,2],[2,3],[3,0],
[4,5],[5,6],[6,7],[7,4],
[0,4],[1,5],[2,6],[3,7]
];
ctx.strokeStyle = 'rgba(148, 163, 184, 0.45)';
ctx.lineWidth = 1;
ctx.setLineDash([3, 3]);
cubeEdges.forEach(([i, j]) => {
const p1 = project3D(cubeCorners[i], cx, cy, scale);
const p2 = project3D(cubeCorners[j], cx, cy, scale);
ctx.beginPath();
ctx.moveTo(p1.x, p1.y);
ctx.lineTo(p2.x, p2.y);
ctx.stroke();
});
ctx.setLineDash([]);
const tetraDrawList = [];
PERMS_S3.forEach((info, idx) => {
const verts = getTetraVertices(info.perm);
const centroid = [0, 0, 0];
verts.forEach(v => {
centroid[0] += v[0] / 4;
centroid[1] += v[1] / 4;
centroid[2] += v[2] / 4;
});
const diagProj = (centroid[0] + centroid[1] + centroid[2]) / 3;
const dir = [
centroid[0] - diagProj,
centroid[1] - diagProj,
centroid[2] - diagProj
];
const disp = explode * 0.85;
const shiftedVerts = verts.map(v => [
v[0] + dir[0] * disp,
v[1] + dir[1] * disp,
v[2] + dir[2] * disp
]);
const projVerts = shiftedVerts.map(v => project3D(v, cx, cy, scale));
const avgDepth = projVerts.reduce((acc, p) => acc + p.depth, 0) / 4;
tetraDrawList.push({ idx, info, projVerts, avgDepth });
});
tetraDrawList.sort((a, b) => b.avgDepth - a.avgDepth);
const faces = [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]];
tetraDrawList.forEach(item => {
const { idx, info, projVerts } = item;
const isCanonical = idx === 0;
const sortedFaces = faces.map(f => ({
f,
d: (projVerts[f[0]].depth + projVerts[f[1]].depth + projVerts[f[2]].depth) / 3
})).sort((a, b) => b.d - a.d);
sortedFaces.forEach(({ f }) => {
ctx.beginPath();
ctx.moveTo(projVerts[f[0]].x, projVerts[f[0]].y);
ctx.lineTo(projVerts[f[1]].x, projVerts[f[1]].y);
ctx.lineTo(projVerts[f[2]].x, projVerts[f[2]].y);
ctx.closePath();
ctx.fillStyle = info.fill;
ctx.fill();
ctx.strokeStyle = isCanonical ? '#970E53' : info.color;
ctx.lineWidth = isCanonical ? 1.8 : 1.0;
ctx.stroke();
});
const lx = (projVerts[0].x + projVerts[1].x + projVerts[2].x + projVerts[3].x) / 4;
const ly = (projVerts[0].y + projVerts[1].y + projVerts[2].y + projVerts[3].y) / 4;
if (explode > 0.22 || isCanonical) {
ctx.strokeStyle = isCanonical ? '#970E53' : 'rgba(255,255,255,0.85)';
ctx.lineWidth = 3;
ctx.font = isCanonical ? 'bold 11px system-ui, sans-serif' : '600 10px system-ui, sans-serif';
ctx.textAlign = 'center';
const txt = isCanonical ? 'Δ₃ (t₁≤t₂≤t₃)' : info.short;
ctx.strokeText(txt, lx, ly);
ctx.fillStyle = isCanonical ? '#ffffff' : info.color;
ctx.fillText(txt, lx, ly);
}
});
const pOrigin = project3D([0, 0, 0], cx, cy, scale);
const pDiag = project3D([1, 1, 1], cx, cy, scale);
ctx.strokeStyle = '#0f172a';
ctx.lineWidth = 2.4;
ctx.beginPath();
ctx.moveTo(pOrigin.x, pOrigin.y);
ctx.lineTo(pDiag.x, pDiag.y);
ctx.stroke();
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.fillText('(0,0,0)', pOrigin.x - 16, pOrigin.y + 14);
ctx.fillText('(1,1,1)', pDiag.x + 16, pDiag.y - 8);
const pT1 = project3D([1.08, 0, 0], cx, cy, scale);
const pT2 = project3D([0, 1.08, 0], cx, cy, scale);
const pT3 = project3D([0, 0, 1.08], cx, cy, scale);
ctx.fillStyle = '#475569';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.fillText('t₁', pT1.x, pT1.y);
ctx.fillText('t₂', pT2.x, pT2.y);
ctx.fillText('t₃', pT3.x, pT3.y);
if (isNarrow) {
drawComparisonPanel(8, panelH + 10, W - 16, H - panelH - 20);
} else {
drawComparisonPanel(leftW + 8, 12, W - leftW - 18, H - 24);
}
readout.innerHTML = `<b>Pavage du cube $[0,1]^3$ par le groupe symétrique $\mathfrak{S}_3$&nbsp;:</b> les $3! = 6$ tétraèdres partagent tous la grande diagonale $t_1 = t_2 = t_3$ joignant $(0,0,0)$ à $(1,1,1)$. Le simplexe canonique <b style="color:#970E53;">$\Delta_3 = \{0 \le t_1 \le t_2 \le t_3 \le 1\}$</b> (en grenat) est une pyramide de base $\Delta_2$ (aire $\frac{1}{2!}$) et de hauteur $1$, son volume vaut donc $\frac{1}{3}\times\frac{1}{2!} = \frac{1}{3!} = \frac{1}{6}$.`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
function drawMode3(W, H) {
const isNarrow = W < 640;
const leftW = isNarrow ? W : Math.floor(W * 0.54);
const panelH = isNarrow ? 370 : H;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`Aire sous l'hyperbole y = 1/x : ${nParam} tranches d'aires égales`, leftW * 0.5, 22, leftW - 16);
ctx.fillStyle = '#64748b';
ctx.font = '10.5px system-ui, sans-serif';
ctx.fillText(`Chaque tranche [(1+1/n)ʲ, (1+1/n)ʲ⁺¹] a la même aire par affinité`, leftW * 0.5, 38, leftW - 16);
const padL = 40, padR = 16, padT = 58, padB = 42;
const plotW = leftW - padL - padR;
const plotH = panelH - padT - padB;
const xMin = 0.8, xMax = 3.15;
const yMin = 0, yMax = 1.18;
const toX = x => padL + ((x - xMin) / (xMax - xMin)) * plotW;
const toY = y => padT + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
ctx.strokeStyle = '#64748b';
ctx.lineWidth = 1.4;
ctx.beginPath();
ctx.moveTo(padL, padT);
ctx.lineTo(padL, padT + plotH);
ctx.lineTo(padL + plotW, padT + plotH);
ctx.stroke();
const c = 1 + 1 / nParam;
const highlightIdx = Math.min(Math.max(1, selectedSlice), nParam) - 1;
for (let j = 0; j < nParam; j++) {
const a = Math.pow(c, j);
const b = Math.pow(c, j + 1);
const isHi = j === highlightIdx;
ctx.beginPath();
ctx.moveTo(toX(a), toY(0));
const steps = 20;
for (let s = 0; s <= steps; s++) {
const x = a + (b - a) * (s / steps);
ctx.lineTo(toX(x), toY(1 / x));
}
ctx.lineTo(toX(b), toY(0));
ctx.closePath();
ctx.fillStyle = isHi ? 'rgba(151, 14, 83, 0.45)' : (j % 2 === 0 ? 'rgba(0, 108, 101, 0.24)' : 'rgba(0, 77, 128, 0.18)');
ctx.fill();
ctx.strokeStyle = isHi ? '#970E53' : '#006C65';
ctx.lineWidth = isHi ? 2 : 1;
ctx.stroke();
}
ctx.strokeStyle = '#004D80';
ctx.lineWidth = 2.5;
ctx.beginPath();
for (let px = 0; px <= plotW; px += 2) {
const x = xMin + (px / plotW) * (xMax - xMin);
const y = 1 / x;
if (px === 0) ctx.moveTo(padL + px, toY(y));
else ctx.lineTo(padL + px, toY(y));
}
ctx.stroke();
const un = Math.pow(c, nParam);
const x1Px = toX(1);
const unPx = toX(un);
const ePx = toX(E_CONST);
ctx.strokeStyle = '#dc2626';
ctx.lineWidth = 2;
ctx.setLineDash([5, 3]);
ctx.beginPath();
ctx.moveTo(ePx, padT + 10);
ctx.lineTo(ePx, toY(0));
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = '#dc2626';
ctx.font = 'bold 11px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('e ≈ 2,718', ePx + 14, padT + 22);
ctx.fillStyle = '#0f172a';
ctx.fillText('x = 1', x1Px, toY(0) + 16);
ctx.fillStyle = '#006C65';
ctx.fillText(`u${toSub(nParam)} = ${un.toFixed(3)}`, unPx - 10, toY(0) + 30);
if (isNarrow) {
drawComparisonPanel(8, panelH + 10, W - 16, H - panelH - 20);
} else {
drawComparisonPanel(leftW + 8, 12, W - leftW - 18, H - 24);
}
const sliceArea = Math.log(c);
const totalArea = nParam * sliceArea;
readout.innerHTML = `<b>Invariance d'échelle sous $y = 1/x$ ($n = ${nParam}$)&nbsp;:</b> chacune des ${nParam} tranches $\left[(1+1/${nParam})^j,\,(1+1/${nParam})^{j+1}\right]$ a exactement la même aire $\mathcal{A}_1 = \ln(1 + 1/${nParam}) \approx ${sliceArea.toFixed(4)}$. L'aire totale sous l'hyperbole sur $[1, u_{${nParam}}]$ vaut $${totalArea.toFixed(4)} \to 1 = \mathcal{A}(1, \mathrm{e})$.`;
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
function render() {
const dpr = window.devicePixelRatio || 1;
const W = canvas.clientWidth || 820;
let targetH = 435;
if (mode === 1) {
if (W < 520) targetH = 880;
else if (W < 780) targetH = 620;
else targetH = 435;
} else {
if (W < 640) targetH = 670;
else targetH = 435;
}
if (canvas.style.height !== targetH + 'px') {
canvas.style.height = targetH + 'px';
}
const H = targetH;
if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
canvas.width = Math.round(W * dpr);
canvas.height = Math.round(H * dpr);
}
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
ctx.clearRect(0, 0, W, H);
if (mode === 1) drawMode1(W, H);
else if (mode === 2) drawMode2(W, H);
else drawMode3(W, H);
}
btn1.addEventListener('click', () => { mode = 1; updateModeUI(); render(); });
btn2.addEventListener('click', () => { mode = 2; updateModeUI(); render(); });
btn3.addEventListener('click', () => { mode = 3; updateModeUI(); render(); });
slider1.addEventListener('input', () => {
if (mode === 1 || mode === 2) {
explode = parseFloat(slider1.value) / 100;
slider1Val.textContent = Math.round(explode * 100) + ' %';
} else {
selectedSlice = parseInt(slider1.value, 10);
slider1Val.textContent = 'Tranche #' + selectedSlice + ' / ' + nParam;
}
render();
});
nSlider.addEventListener('input', () => {
nParam = parseInt(nSlider.value, 10);
updateModeUI();
render();
});
layerBtns.forEach(b => {
b.addEventListener('click', () => {
activeLayer = parseInt(b.getAttribute('data-layer'), 10);
updateModeUI();
render();
});
});
canvas.addEventListener('mousedown', e => {
if (mode === 3) return;
isDragging = true;
lastX = e.clientX;
lastY = e.clientY;
canvas.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', e => {
if (!isDragging) return;
const dx = e.clientX - lastX;
const dy = e.clientY - lastY;
lastX = e.clientX;
lastY = e.clientY;
rotYaw += dx * 0.01;
rotPitch = Math.max(-1.2, Math.min(1.2, rotPitch + dy * 0.01));
render();
});
window.addEventListener('mouseup', () => {
if (isDragging) {
isDragging = false;
if (mode !== 3) canvas.style.cursor = 'grab';
}
});
canvas.addEventListener('touchstart', e => {
if (mode === 3 || e.touches.length !== 1) return;
isDragging = true;
lastX = e.touches[0].clientX;
lastY = e.touches[0].clientY;
}, { passive: true });
window.addEventListener('touchmove', e => {
if (!isDragging || e.touches.length !== 1) return;
const dx = e.touches[0].clientX - lastX;
const dy = e.touches[0].clientY - lastY;
lastX = e.touches[0].clientX;
lastY = e.touches[0].clientY;
rotYaw += dx * 0.01;
rotPitch = Math.max(-1.2, Math.min(1.2, rotPitch + dy * 0.01));
render();
}, { passive: true });
window.addEventListener('touchend', () => { isDragging = false; });
window.addEventListener('resize', render);
updateModeUI();
render();
})();
</script>


## Flèche du temps : Dyson et Wick

### Généalogie de la croissance continue

Comment la somme des volumes des simplexes $\Delta\_k$ de toutes les dimensions engendre-t-elle $\mathrm{e}$ dans le monde physique&nbsp;?
Imaginons une tige biologique (ou un capital continu) de longueur initiale $L(0) = 1$ à l'instant $t = 0$, dont chaque portion s'allonge uniformément à un taux de $100\\,\\%$ par unité de temps ($\frac{\mathrm{d}L}{\mathrm{d}t} = L(t)$). **Suivons l'arbre généalogique de la matière créée entre $t = 0$ et $t = 1$** en classant chaque fragment par sa *génération* $k$&nbsp;:

<ol>
<li><b>Génération $k = 0$ (la tige ancêtre)&nbsp;:</b> le segment initial présent dès $t = 0$ conserve sa longueur propre égale à <b>$1 = \frac{1}{0!}$</b>.</li>
<li><b>Génération $k = 1$ (les enfants directs)&nbsp;:</b> à chaque instant $t_1 \in [0, 1]$, la tige ancêtre bourgeonne et crée pendant $\mathrm{d}t_1$ un fragment de génération $1$ de longueur $1 \times \mathrm{d}t_1$. Au bout de l'intervalle $[0, 1]$, la longueur totale de génération $1$ vaut $\displaystyle L_1 = \int_0^1 \mathrm{d}t_1 = \operatorname{Vol}_1(\Delta_1) = \mathbf{1}$.</li>
<li><b>Génération $k = 2$ (les petits-enfants)&nbsp;:</b> un fragment de génération $1$ né à l'instant $t_1$ ne reste pas inerte&nbsp;! Dès qu'il est né, il se met lui-même à bourgeonner à tout instant <i>ultérieur</i> $t_2 \in [t_1, 1]$ en créant de la matière de génération $2$ de mesure $\mathrm{d}t_1\,\mathrm{d}t_2$. L'ensemble des couples d'instants de naissance $(t_1, t_2)$ possibles obéit donc à la contrainte causale $0 \le t_1 \le t_2 \le 1$&nbsp;: c'est exactement le triangle $\Delta_2$&nbsp;! La longueur totale de génération $2$ vaut ainsi $\displaystyle L_2 = \iint_{0 \le t_1 \le t_2 \le 1} \mathrm{d}t_1\,\mathrm{d}t_2 = \operatorname{Vol}_2(\Delta_2) = \mathbf{\frac{1}{2!}}$.</li>
<li><b>Génération quelconque $k$&nbsp;:</b> un fragment de génération $k$ est issu d'une cascade causale de $k$ naissances successives aux instants ordonnés $0 \le t_1 \le t_2 \le \dots \le t_k \le 1$. Sa longueur totale à $t = 1$ est le volume du simplexe canonique $\Delta_k$, soit <b>$\operatorname{Vol}_k(\Delta_k) = \frac{1}{k!}$</b>.</li>
</ol>

En additionnant toutes les générations présentes à $t = 1$, la longueur totale est la somme des volumes des simplexes de toutes les dimensions&nbsp;: $\displaystyle L(1) = \sum\_{k=0}^{+\infty} \operatorname{Vol}\_k(\Delta\_k) = \sum\_{k=0}^{+\infty} \frac{1}{k!} = \mathrm{e}$.

### Itération de Picard-Dyson et causalité

Cette généalogie met en lumière un principe physique profond&nbsp;: **si l'exponentielle fait surgir des factorielles $\frac{1}{k!}$, c'est à cause de la brisure de symétrie par la flèche du temps** (l'enfant ne peut bourgeonner qu'*après* la naissance de son parent, $t\_1 \le t\_2 \le \dots \le t\_k$).

Ce mécanisme gouverne toute la mécanique quantique et la **théorie quantique des champs (TQC)** via la **série de Dyson** et l'**ordonnancement chronologique de Wick $T$** (voir les notes de lecture [TQC 6](/physique/tqc/gifted_amateur/tqc6/#théorie-des-perturbations-et-équation-de-dyson) et [TQC 7](/physique/tqc/gifted_amateur/tqc7/#la-série-de-dyson)).

Considérons un système quantique dont l'opérateur d'évolution $\hat{U}\_I(t, t')$ (de l'instant $t'$ à l'instant $t \ge t'$) obéit à l'équation de Schrödinger en représentation d'interaction ($\hbar = 1$)&nbsp;:

<p style="text-align:center;">
$\displaystyle \mathrm{i}\,\partial_t \hat U_I(t, t') = \hat H_I(t)\,\hat U_I(t, t'),$ $\displaystyle \qquad \text{avec} \quad \hat U_I(t', t') = \hat{\mathbb{1}}$
</p>

En intégrant entre $t'$ et $t$, on obtient l'équation intégrale exacte $\displaystyle \hat U\_I(t, t') = \hat{\mathbb{1}} + (-\mathrm{i})\int\_{t'}^{t} \mathrm{d}t\_1 \\, \hat H\_I(t\_1)\\,\hat U\_I(t\_1, t')$. En réinjectant $\hat U\_I(t\_1, t')$ dans le membre de droite et en répétant l'opération indéfiniment, on engendre la **série de Dyson**&nbsp;:

<div id="def">

Le développement perturbatif de l'opérateur d'évolution $\hat{U}\_I(t, t')$ en puissances de l'interaction $\hat{H}\_I$ s'écrit&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\hat U_I(t, t') = \hat{\mathbb{1}} + \sum_{n=1}^{+\infty} (-\mathrm{i})^n \int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2 \cdots \int_{t'}^{t_{n-1}}\mathrm{d}t_n \\; \hat H_I(t_1)\hat H_I(t_2)\cdots\hat H_I(t_n)
$$

</div>

</div>

<br>

**Pourquoi les bornes d'intégration sont-elles emboîtées ($t \ge t\_1 \ge t\_2 \ge \dots \ge t\_n \ge t'$)&nbsp;?**
C'est l'expression géométrique du **principe de causalité**&nbsp;: pour aller de $t'$ à $t$ via $n$ interactions ponctuelles, la première interaction (en $t\_n$) doit avoir lieu *avant* la deuxième (en $t\_{n-1}$), et ainsi de suite jusqu'à la dernière (en $t\_1$). Parmi les $n!$ simplexes de l'hypercube des temps $[t', t]^n$, la causalité ne retient **qu'un seul simplexe chronologique**&nbsp;!

### Non-commutativité et opérateur chronologique $T$ de Wick

Pourquoi ne peut-on pas écrire naïvement que cette intégrale sur le simplexe vaut $\frac{1}{n!}\left(\int\_{t'}^t \hat H\_I(t\_1)\\,\mathrm{d}t\_1\right)^n$&nbsp;?
Parce qu'en mécanique quantique, **les hamiltoniens d'interaction à deux instants distincts ne commutent pas en général**&nbsp;:

<p style="text-align:center;">
$\displaystyle \left[\hat H_I(t_1),\, \hat H_I(t_2)\right] = \hat H_I(t_1)\hat H_I(t_2) - \hat H_I(t_2)\hat H_I(t_1) \neq 0$
</p>

Regardons dès l'ordre $n = 2$ sur le carré des temps $[t', t]^2$ pourquoi cette non-commutativité brise la symétrie entre les deux triangles séparés par la diagonale $t\_1 = t\_2$&nbsp;:
<ul>
<li>Dans le triangle supérieur $t' \le t_2 \le t_1 \le t$ (notre simplexe causal $\Delta_2$), l'intégrande de Dyson est $\hat H_I(t_1)\hat H_I(t_2)$, où l'opérateur le plus récent ($t_1$) est bien placé à gauche.</li>
<li>Si l'on passe au triangle miroir $t' \le t_1 \le t_2 \le t$ en échangeant les noms des variables muettes ($t_1 \leftrightarrow t_2$), l'intégrale de Dyson devient $\iint_{t_1 \le t_2} \mathrm{d}t_1\,\mathrm{d}t_2\,\color{#970E53}{\hat H_I(t_2)\hat H_I(t_1)}$. Comme $t_2$ est maintenant l'instant le plus récent, c'est $\hat H_I(t_2)$ qui doit se trouver à gauche&nbsp;!</li>
</ul>

Pour restaurer la symétrie de permutation $\mathfrak{S}\_n$ entre les $n!$ simplexes de l'hypercube $[t', t]^n$, Freeman Dyson (1949) et Gian-Carlo Wick (1950) ont introduit l'**opérateur d'ordonnancement chronologique $T$**, qui range automatiquement les opérateurs du plus récent (à gauche) au plus ancien (à droite)&nbsp;:

<div id="def">

Pour deux instants $(t\_1, t\_2)$, le <b>produit chronologique $T$</b> est défini par&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
T\big[\hat H_I(t_1)\hat H_I(t_2)\big] = \begin{cases}
\hat H_I(t_1)\hat H_I(t_2) & \text{si } t_1 \ge t_2, \\\\
\hat H_I(t_2)\hat H_I(t_1) & \text{si } t_2 > t_1.
\end{cases}
$$

</div>

Plus généralement, si $\sigma \in \mathfrak{S}\_n$ est la permutation telle que $t\_{\sigma(1)} \ge t\_{\sigma(2)} \ge \dots \ge t\_{\sigma(n)}$, alors $\displaystyle T\big[\hat H\_I(t\_1)\cdots\hat H\_I(t\_n)\big] = \hat H\_I\big(t\_{\sigma(1)}\big)\cdots\hat H\_I\big(t\_{\sigma(n)}\big)$.

</div>

<div class="svg-container">
<svg viewBox="0 0 760 250" style="max-width:760px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<text x="380" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">La ruse géométrique de Dyson-Wick sur le carré des temps [t', t]² : restaurer la symétrie S₂ grâce à T</text>
<!-- Left square: Causal simplex only -->
<rect x="65" y="52" width="165" height="165" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
<polygon points="65,217 230,217 230,52" fill="rgba(151, 14, 83, 0.24)" stroke="#970E53" stroke-width="2"/>
<line x1="65" y1="217" x2="230" y2="52" stroke="#970E53" stroke-width="2" stroke-dasharray="4,2"/>
<text x="175" y="165" text-anchor="middle" font-size="11.5" font-weight="700" fill="#970E53">Simplexe causal</text>
<text x="175" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="#970E53">t₁ ≥ t₂ : H(t₁)H(t₂)</text>
<text x="115" y="105" text-anchor="middle" font-size="10.5" fill="#94a3b8">Secteur t₂ &gt; t₁</text>
<text x="115" y="120" text-anchor="middle" font-size="10.5" fill="#94a3b8">(interdit par</text>
<text x="115" y="135" text-anchor="middle" font-size="10.5" fill="#94a3b8">la causalité)</text>
<text x="147" y="236" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">t₁ ∈ [t', t]</text>
<text x="45" y="135" text-anchor="middle" font-size="11" font-weight="600" fill="#334155" transform="rotate(-90 45 135)">t₂ ∈ [t', t]</text>
<!-- Arrow in middle -->
<text x="345" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#004D80">Symétrisation par T</text>
<path d="M 265 132 L 425 132" stroke="#004D80" stroke-width="2.5"/>
<polygon points="425,132 415,126 415,138" fill="#004D80"/>
<text x="345" y="154" text-anchor="middle" font-size="11" fill="#334155">T[H(t₁)H(t₂)] = T[H(t₂)H(t₁)]</text>
<text x="345" y="174" text-anchor="middle" font-size="11.5" font-weight="700" fill="#970E53">⇒ Intégrale = (1 / 2!) × Carré</text>
<!-- Right square: Full symmetric square under T -->
<rect x="465" y="52" width="165" height="165" fill="#f8fafc" stroke="#004D80" stroke-width="2"/>
<polygon points="465,217 630,217 630,52" fill="rgba(151, 14, 83, 0.22)" stroke="#970E53" stroke-width="1.5"/>
<polygon points="465,217 465,52 630,52" fill="rgba(0, 108, 101, 0.22)" stroke="#006C65" stroke-width="1.5"/>
<line x1="465" y1="217" x2="630" y2="52" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,2"/>
<text x="575" y="165" text-anchor="middle" font-size="11" font-weight="700" fill="#970E53">t₁ ≥ t₂ :</text>
<text x="575" y="182" text-anchor="middle" font-size="11" font-weight="700" fill="#970E53">T = H(t₁)H(t₂)</text>
<text x="518" y="98" text-anchor="middle" font-size="11" font-weight="700" fill="#006C65">t₂ &gt; t₁ :</text>
<text x="518" y="115" text-anchor="middle" font-size="11" font-weight="700" fill="#006C65">T = H(t₂)H(t₁)</text>
<text x="547" y="236" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">Variables indépendantes (t₁, t₂) ∈ [t', t]²</text>
<text x="692" y="125" text-anchor="middle" font-size="11.5" font-weight="700" fill="#004D80">Les 2! triangles</text>
<text x="692" y="143" text-anchor="middle" font-size="11.5" font-weight="700" fill="#004D80">valent pareil !</text>
</svg>
</div>

Grâce à l'opérateur $T$, la quantité $T\big[\hat H\_I(t\_1)\cdots\hat H\_I(t\_n)\big]$ devient **totalement symétrique par toute permutation $\pi \in \mathfrak{S}\_n$ de ses arguments**. Les $n!$ simplexes $D\_\sigma$ qui pavent l'hypercube $[t', t]^n$ donnent alors tous exactement la même intégrale, ce qui fait apparaître le volume du simplexe $\mathbf{\frac{1}{n!}}$ devant l'intégrale libre sur $[t', t]^n$&nbsp;:

<div id="theo">

<b>Théorème (Exponentielle ordonnée dans le temps de Dyson).</b> Pour tout $n \ge 1$, l'intégrale causale sur le simplexe temporel est égale à $\frac{1}{n!}$ fois l'intégrale sur l'hypercube complet $[t', t]^n$ sous le produit chronologique $T$&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\int_{t'}^{t}\mathrm{d}t_1 \int_{t'}^{t_1}\mathrm{d}t_2 \cdots \int_{t'}^{t_{n-1}}\mathrm{d}t_n \\; \hat H_I(t_1)\cdots\hat H_I(t_n) = \frac{1}{n!} \int_{t'}^{t}\mathrm{d}t_1 \cdots \int_{t'}^{t}\mathrm{d}t_n \\; T\big[\hat H_I(t_1)\cdots\hat H_I(t_n)\big]
$$

</div>

En sommant sur $n \ge 0$, l'opérateur d'évolution et la matrice de diffusion $\hat S = \hat U\_I(+\infty, -\infty)$ s'écrivent&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\hat U_I(t, t') = T\exp\left(-\mathrm{i}\int_{t'}^{t}\mathrm{d}t_1\\,\hat H_I(t_1)\right) \quad \Longrightarrow \quad \hat{S} = T\exp\left(-\mathrm{i}\int \mathrm{d}^4x\\,\hat{\mathcal H}_I(x)\right)
$$

</div>

</div>

<br>

### Propriété de Markov et diagrammes de Feynman

Terminons par deux conséquences fondamentales de cette géométrie pour les notes de lecture de TQC&nbsp;:
<ol>
<li><b>Absence de mémoire (Markov) et découplage des intégrales&nbsp;:</b> Pourquoi le générateur $\hat H_I(t)$ dépend-il d'un seul instant $t$&nbsp;? Parce que l'évolution quantique est locale dans le temps (sans mémoire du passé antérieur, $\hat U_I(t, t') = \hat U_I(t, t_1)\hat U_I(t_1, t')$). Une fois que l'opérateur $T$ a levé l'emboîtement des bornes du simplexe pour intégrer sur l'hypercube $[t', t]^n$ tout entier, les $n$ intégrales se découplent en une mesure produit $\int \mathrm{d}^4x_1 \cdots \int \mathrm{d}^4x_n$. C'est ce découplage qui permet, dans <a href="/physique/tqc/gifted_amateur/tqc7/#le-théorème-de-wick"><b>TQC 7</b></a>, d'appliquer le <b>théorème de Wick</b> pour contracter les champs libres en propagateurs de Feynman $\Delta_F(x_i - x_j)$.</li>
<li style="margin-top:0.5em;"><b>Élimination du facteur $\frac{1}{n!}$ par la permutation des vertex de Feynman&nbsp;:</b> Dans <a href="/physique/tqc/gifted_amateur/tqc7/#moudre-avec-wick"><b>TQC 7</b></a> et <a href="/physique/tqc/gifted_amateur/tqc12/"><b>TQC 12</b></a>, lorsqu'on développe une amplitude à $n$ vertex $x_1, \dots, x_n$, permuter les $n!$ numérotations des vertex entre eux dans un câblage de Wick engendre $n!$ fois le <b>même diagramme de Feynman</b>. Le facteur géométrique $\frac{1}{n!}$ issu du volume du simplexe de Dyson compense alors exactement cette redondance combinatoire&nbsp;!</li>
</ol>

<hr style="margin:2em 0;border:none;border-top:1px solid #cbd5e1;">

<div style="background:#f8fafc;border:1px solid #cbd5e1;border-left:6px solid #970E53;border-radius:10px;padding:14px 18px;font-size:0.95em;">
<b>Que donne la géométrie du simplexe en probabilités&nbsp;?</b><br>
Puisque le volume du simplexe canonique $\Delta_k = \{0 \le t_1 \le \dots \le t_k \le 1\}$ vaut $\frac{1}{k!}$, tout événement aléatoire qui revient à imposer un ordre croissant entre $k$ tirages indépendants a automatiquement une probabilité égale à $\frac{1}{k!}$&nbsp;!

👉 <b><a href="../../proba/simplexes_proba/">Simplexes et probabilités</a>&nbsp;:</b> découvrez comment le simplexe $\Delta_k$ résout presque sans calcul la rupture de monotonie ($\mathbb{E}[N] = \mathrm{e}$), le problème du seuil de Gnedenko ($\mathbb{E}[M] = \mathrm{e}$) et le problème des chapeaux de Montmort ($\lim p_n = \mathrm{e}^{-1}$).</li>
</div>
