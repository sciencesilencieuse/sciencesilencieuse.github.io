+++
title = "TQC-2"
date = 2021-03-06T14:20:50+01:00
weight = 2
hidden = true
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
  #grosseformule 
{
    overflow-x: auto; 
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



# Théorie quantique des champs -- Partie 2

{{%notice note%}}
Notes de lecture du livre *Quantum field theory for the gifted amateur* de Thomas Lancaster et Stephen Blundell.<br>
Le premier encadré gris est issu de *No-Nonsense Classical Mechanics* de Jakob Schwichtenberg.
{{%/notice%}}

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Retour sommaire</a></th></td>
    </tr>
</table>
</div>
<br>

Avant de quantifier des champs, encore faut-il en avoir. Cette partie construit la **théorie classique des champs**, et le détour commence au 19<sup>e</sup> siècle&nbsp;: la mécanique hamiltonienne, avec ses crochets de Poisson, ressemble déjà tellement à la mécanique quantique qu'un simple «&nbsp;pont&nbsp;» les relie.

<ul>
<li><b>Le socle.</b> Du lagrangien au hamiltonien par transformation de Legendre, les équations de Hamilton, les crochets de Poisson, puis la version relativiste&nbsp;: l'action $S=-mc\int\mathrm{d}s$, la particule chargée et le tenseur $F_{\mu\nu}$.</li>
<li><b>Le passage aux champs.</b> Densités lagrangienne et hamiltonienne, équations d'Euler-Lagrange quadridimensionnelles, avec l'électromagnétisme de Maxwell comme banc d'essai.</li>
<li><b>La première tentative relativiste.</b> L'équation de Klein-Gordon, obtenue en quantifiant la relation de dispersion relativiste, et ses deux scandales&nbsp;: des énergies négatives et des densités de probabilité négatives. L'interprétation de Feynman transforme le premier en prédiction&nbsp;: les antiparticules.</li>
<li><b>Le catalogue.</b> Une collection de lagrangiens de champs (sans masse, massif, avec source, en $\phi^4$, à deux champs, complexe) qui servira de réservoir dans la suite&nbsp;: la masse y est un terme en $\phi^2$, l'interaction une non-linéarité, et les symétries internes y font leur première apparition.</li>
</ul>

## Théorie classique des champs


### Du lagrangien à l'hamiltonien

Le taux de variation du lagrangien est donné par&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm{d}L}{\mathrm{d}t} = \frac{\partial L}{\partial q_i} \dot{q}_i + \frac{\partial L}{\partial \dot{q}_i} \ddot{q}_i
$
</p>

Et en utilisant les équations d'Euler-Lagrange, on obtient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\mathrm{d}L}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}_i} \right) \dot{q}_i + \frac{\partial L}{\partial \dot{q}_i} \ddot{q}_i = \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial L}{\partial \dot{q}_i} \dot{q}_i \right)
$
</p>

On définit le moment canonique conjugué $p\_i$&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
p_i = \frac{\partial L}{\partial \dot{q}_i}
$
</p>
</div>

Cela permet de réécrire l'équation précédente en lui donnant la forme d'une équation de conservation&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\mathrm{d}}{\mathrm{d}t} (p_i \dot{q}_i - L) = 0
$
</p>

On appelle **hamiltonien $H$** la quantité conservée et on montrera plus loin qu'elle correspond à l'énergie du système&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
H = p_i \dot{q}_i - L
$
</p>

</div>

<br>

<div id="preuve">

Le passage de $L$ à $H$ correspond mathématiquement à une transformation de Legendre. 

La transformation de Legendre permet d'encoder différemment l'information d'une fonction. En particulier, elle permet de changer la dépendance en une coordonnée en sa coordonnée conjuguée. Ici, elle va nous permettre de passer de $\dot{q}$ à $p$.

Imaginons une fonction $L(v)$ convexe et calculons la pente $p(v)=\frac{\partial L(v)}{\partial v}$ (une fonction convexe voit sa pente croître de manière monotone ce qui implique que $p$ et $v$ sont en bijection (si la fonction est concave, il suffit de considérer son opposée)).

On peut aussi écrire que la fonction de départ est la primitive de sa pente&nbsp;: $L(v)=\int\_0^vp(v')\mathrm{d}v'$. $L(v)$ devient ainsi l'aire sous la courbe définie par la pente $p(v)$. 

Mais comme on s'est assuré grâce à la convexité de $L$ qu'à chaque $v$ corresponde un et un unique $p$, on peut aussi considérer la fonction $v(p)$.

Appelons $H(p)$ l'aire sous la courbe de $v(p)$&nbsp;: $H(p)\equiv\int\_0^p v(p')\mathrm{d}p'$.

On peut voir sur le schéma suivant que ces deux aires ont un lien très simple&nbsp;: leur somme vaut $p\times v$&nbsp;!

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqclegendre.png">
</div>

On a ainsi $H(p) = pv - L(v)$.

Par conséquent, la transformée de Legendre du lagrangien $L(q,\dot{q})$ par rapport à $\dot{q}$ est donnée par $H(q,p)=p\dot{q}(p)-L(q,\dot{q})$ en appelant $p$ la pente $\frac{\partial L}{\partial\dot{q}}$.


</div>


Faisons varier $H$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\delta H &= p_i \delta \dot{q}_i + \delta p_i \dot{q}_i - \frac{\partial L}{\partial q_i} \delta q_i - \frac{\partial L}{\partial \dot{q}_i} \delta \dot{q}_i\\
&= \delta\dot{q}_i\left(\cancel{p_i - \frac{\partial L}{\partial \dot{q}_i}}\right)+ \delta p_i \dot{q}_i - \frac{\partial L}{\partial q_i} \delta q_i \\
&=\delta p_i \dot{q}_i -\frac{\partial L}{\partial q_i}\delta q_i \\
&=\delta p_i {\color{#D41876}\dot{q}_i} - {\color{#0076BA}\dot{p}_i}\delta q_i
\end{aligned}
$
</p>

Et comme $H$ ne dépend que de $q\_i$ et $p\_i$, on a&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\delta H = {\color{#0076BA}\frac{\partial H}{\partial q_i}} \delta q_i + {\color{#D41876}\frac{\partial H}{\partial p_i}} \delta p_i
$
</p>

Par identification, on obtient les équations de Hamilton qui permettent de déterminer les équations du mouvement du système d'une nouvelle façon&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
{\color{#D41876} \frac{\partial H}{\partial p_i} = \dot{q}_i} \qquad {\color{#0076BA}\frac{\partial H}{\partial q_i} = -\dot{p}_i}
$
</p>
</div>

Définissons maintenant le **crochet de Poisson $\\{A,B\\}$**&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\{A, B\} = \frac{\partial A}{\partial q_i} \frac{\partial B}{\partial p_i} - \frac{\partial A}{\partial p_i} \frac{\partial B}{\partial q_i}
$
</p>
</div>

Puis considérons une fonction $F$ des coordonnées généralisées $q\_i$ et $p\_i$. Le taux de variation de $F$ est donné par&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\frac{\mathrm{d}F}{\mathrm{d}t} &= \frac{\partial F}{\partial t} + \frac{\partial F}{\partial q_i}{\color{#0076BA}\dot{q}_i} +  \frac{\partial F}{\partial p_i}{\color{#D41876}\dot{p}_i}\\
 &= \frac{\partial F}{\partial t} + \frac{\partial F}{\partial q_i}\left({\color{#0076BA}-\frac{\partial H}{\partial p_i}}\right) +  \frac{\partial F}{\partial p_i}{\color{#D41876}\frac{\partial H}{\partial q_i}}\\
 &=\frac{\partial F}{\partial t} + \{F, H\}
\end{aligned}
$
</p>

Et si $F$ n'est pas une fonction du temps&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\mathrm{d}F}{\mathrm{d}t} = \{F, H\}
$
</p>
</div>

Donc si $\\{F, H\\}=0$, alors $F$ est une constante du mouvement&nbsp;!



<div id="preuve">

Il y a une interprétation géométrique à cette relation.

<div style="position:relative;margin:auto;width:400px;max-width:100%;">
<img src="/tqcpoisson.png">
</div>

Si $F=F(\boldsymbol{q},\boldsymbol{p})$, alors le vecteur $(\dot{\boldsymbol{q}},\dot{\boldsymbol{p}})=\left(\frac{\partial H}{\partial\boldsymbol{p}},-\frac{\partial H}{\partial \boldsymbol{q}}\right)$ est tangent à la surface $F(\boldsymbol{q},\boldsymbol{p})=$ constante. En effet 

<p style="text-align:center;">
$\displaystyle
\boldsymbol{\nabla} F \cdot (\dot{\boldsymbol{q}}, \dot{\boldsymbol{p}}) = \left(\frac{\partial F}{\partial \boldsymbol{q}},\frac{\partial F}{\partial \boldsymbol{p}}\right)\cdot (\dot{\boldsymbol{q}},\dot{\boldsymbol{p}})= \frac{\partial F}{\partial q_i} \frac{\partial H}{\partial p_i} - \frac{\partial F}{\partial p_i} \frac{\partial H}{\partial q_i}=\{F,H\}=0
$
</p>


Et de même, $(\dot{\boldsymbol{q}},\dot{\boldsymbol{p}})$ est tangent à la surface $H(\boldsymbol{q},\boldsymbol{p})=$ constante puisque 

<p style="text-align:center;">
$\displaystyle
\boldsymbol{\nabla} H \cdot (\dot{\boldsymbol{q}}, \dot{\boldsymbol{p}}) = \left(\frac{\partial H}{\partial \boldsymbol{q}},\frac{\partial H}{\partial \boldsymbol{p}}\right)\cdot (\dot{\boldsymbol{q}},\dot{\boldsymbol{p}})= -\dot{\boldsymbol{p}}\cdot\dot{\boldsymbol{q}}+\dot{\boldsymbol{q}}\cdot\dot{\boldsymbol{p}}=0
$
</p>


</div>


Le lien entre crochets de Poisson et loi de conservation rappelle bien sûr le rôle du commutateur en mécanique quantique.<br>
Le taux de variation de l'espérance quantique de l'opérateur $\hat{F}$ est en effet donné par&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\mathrm{d}\langle \hat{F} \rangle}{\mathrm{d}t} = \frac{1}{\mathrm{i}\hbar} \langle [\hat{F}, \hat{H}] \rangle
$
</p>

Le parallélisme entre mécanique quantique et formalisme hamiltonien pousse à jeter un pont entre les deux&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\{ A, B \} \rightarrow \frac{1}{\mathrm{i} \hbar} \langle [\hat{A}, \hat{B}] \rangle
$
</p>
</div>

<br>

<div id="preuve">


Vérifions le parallèle pour le couple (position, moment conjugué)&nbsp;:

 <div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\{ q_j, p_k \} &= \frac{\partial q_j}{\partial q_i}\frac{\partial p_k}{\partial p_i}-\frac{\partial p_k}{\partial q_i}\frac{\partial q_j}{\partial p_i}\\
&= \delta_{ij}\delta_{ik}-0\times 0\\
&= \delta_{jk}\\
\end{aligned}
$
</p>

Ce qui donnerait avec le pont $[\hat{q}\_j,\hat{p}\_k]=\mathrm{i}\hbar\delta\_{jk}$ qui est bien le commutateur quantique entre position et impulsion.

</div>

</div>

<br>

### En relativité restreinte

Cherchons le lagrangien d'une particule libre de masse $m$ dans le cadre de la relativité restreinte.

L'action $S=\int\_{t\_1}^{t\_2} L \mathrm{d}t$ de la particule se doit d'être invariante de Lorentz. L'introduction du temps propre $\mathrm{d}\tau=\frac{\mathrm{d}t}{\gamma}$ (le seul véritable invariant) semble s'imposer&nbsp;: $S = \int\_{\tau\_1}^{\tau\_2}L\gamma\mathrm{d}\tau$.

$L\gamma$ doit alors à son tour être invariant de Lorentz et on ne voit pas vraiment d'autre possibilité que d'être constant. On pose donc $L=\frac{K}{\gamma}$ où $K$ est une constante. Or on sait qu'aux petites vitesses, on doit retrouver $L=\frac{1}{2}mv^2\\, (+\text{cste})$, et comme $\gamma^{-1} \approx 1 - \frac{1}{2} \frac{v^2}{c^2} $ lorsque $v\ll c$, on obtient $K\left(1-\frac{1}{2}\left(\frac{v^2}{c^2}\right)\right)=\frac{1}{2}mv^2+\text{cste}$. Cela impose $K=-mc^2$. Et finalement&nbsp;:


<div id="theo">
 <div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
S=-mc^2\int_{\tau_1}^{\tau_2}\mathrm{d}\tau=-mc\int_a^b \mathrm{d}s
$
</p>

<p style="text-align:center;">avec $\mathrm{d}s=\sqrt{c^2\mathrm{d}t^2-\mathrm{d}x^2-\mathrm{d}y^2-\mathrm{d}z^2}$</p>
</div>
</div>

Par principe de moindre action, $\delta S = 0$. Et comme $S=-mc\int\_a^b\mathrm{d}s$, minimiser l'action revient à <b>maximiser</b> le temps propre écoulé&nbsp;; or $\int\_a^b \mathrm{d}s$ est maximal le long d'une ligne droite. On retrouve donc que la trajectoire d'une particule libre est une ligne droite.

<div id="preuve">

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqclgchem.png">
</div>

Il est par exemple facile de se convaincre mathématiquement que le chemin purement temporel joignant A à B est le plus long possible puisque $c\mathrm{d}t>\sqrt{c^2\mathrm{d}t^2-\mathrm{d}x^2}$ (c'est la magie de la métrique minkowskienne que de rendre plus long un chemin sans détour).

</div>

On en déduit l'expression du moment conjugué d'une particule libre (sa quantité de mouvement)&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\boldsymbol{p}=\frac{\partial L}{\partial \boldsymbol{v}}=\frac{\partial }{\partial \boldsymbol{v}}\left( -mc^2\sqrt{1-v^2/c^2}\right)=\gamma m  \boldsymbol{v}
$
</p>

Et son énergie&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
E=H=\boldsymbol{p}\cdot\boldsymbol{v}-L=\gamma m v^2 +\frac{mc^2}{\gamma}=\gamma m c^2\left[\frac{v^2}{c^2}+\left(1-\frac{v^2}{c^2}\right)\right]=\gamma m c^2
$
</p>

En relativité restreinte, on assemble l'énergie et le moment en un quadrivecteur $p^\mu=(\frac{E}{c},\boldsymbol{p})$ (ou $p\_\mu=(\frac{E}{c},-\boldsymbol{p})$).

<br>

### Particule chargée dans un champ électromagnétique

Donnons une charge $q$ à notre particule et couplons-la à un champ électromagnétique. Ce dernier peut être décrit par un champ quadrivectoriel $A^\mu(x)=\left(\frac{V(x)}{c},\boldsymbol{A}(x)\right)$ où $V(x)$ est le potentiel électrique (scalaire) et $\boldsymbol{A}(x)$ est le potentiel magnétique (vectoriel). L'interaction avec le champ correspond à une énergie $-qA\_\mu\mathrm{d}x^\mu$ et donc l'action s'écrit&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
S = \int_{t_1}^{t_2} \left( - \frac{mc^2}{\gamma} + q\boldsymbol{A} \cdot \boldsymbol{v} - qV \right) dt
$
</p>

Le lagrangien est l'intégrande et donc le moment canonique conjugué est donné par&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\boldsymbol{p} = \frac{\partial L}{\partial \boldsymbol{v}} = \gamma m \boldsymbol{v} + q\boldsymbol{A}
$
</p>


<div id="preuve">

Systèmes d'unités utilisés en TQC&nbsp;:

- <b>unités de Lorentz-Heaviside</b><br>
Elles simplifient l'écriture des équations de l'électromagnétisme en posant&nbsp;:
<br>
<p style="text-align:center;">
$\displaystyle
\mu_0=\epsilon_0=1
$
</p>
<br>
Les équations de Maxwell deviennent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{array}{ll}
\boldsymbol{\nabla} \cdot \boldsymbol{E} = \rho &\boldsymbol{\nabla} \times \boldsymbol{E} = -\frac{1}{c}\frac{\partial \boldsymbol{B}}{\partial t}\\ \boldsymbol{\nabla} \cdot \boldsymbol{B} = 0 &\boldsymbol{\nabla} \times \boldsymbol{B} = \frac{1}{c}\left( \boldsymbol{J} + \frac{\partial \boldsymbol{E}}{\partial t}\right)
\end{array}
$
</p>

- <b>unités naturelles</b><br>
Comme les vitesses s'expriment en fraction de $c$ et les spins en unités de $\hbar$, il est plus commode de les utiliser comme étalon de mesure en posant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hbar=c=1
$
</p>


</div>

On définit le tenseur antisymétrique de second rang $F\_{\mu\nu}$ comme&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
F_{\mu \nu} = \partial_{\mu} A_{\nu} - \partial_{\nu} A_{\mu}
$
</p>
</div>

C'est le **tenseur du champ électromagnétique**  (il ressemble à un rotationnel à 4 dimensions). Ses éléments contiennent les composantes des champs $\boldsymbol{E}$ et $\boldsymbol{B}$. 

En notant que $\partial^\mu=\left(\frac{\partial}{\partial t},-\nabla\right)$ et $\partial\_\mu=\left(\frac{\partial}{\partial t},\nabla\right)$, on obtient les composantes du champ à partir de&nbsp;:
- $\boldsymbol{B}=\boldsymbol{\nabla} \times \boldsymbol{A}$, qui donne ${\color{#0076BA}B^i}=-\varepsilon^{ijk}\partial\_jA\_k=-\frac{1}{2}\varepsilon^{ijk}F^{jk}$ où $\varepsilon^{ijk}$ est le symbole de Levi-Civita, 
- $\boldsymbol{E}=-\frac{\partial \boldsymbol{A}}{\partial t}-\boldsymbol{\nabla} V$, qui donne ${\color{#D41876}E^i}=-\partial^0 A^i+\partial^i A^0=-F^{0i}=F^{i0}$.

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_{\mu \nu} = \begin{pmatrix} 
0 &\color{#D41876} E_1 & \color{#D41876}E_2 & \color{#D41876}E_3 \\
\color{#D41876}-E_1 & 0 & \color{#0076BA}-B_3 & \color{#0076BA}B_2 \\
\color{#D41876}-E_2 &\color{#0076BA} B_3 & 0 &\color{#0076BA} -B_1 \\
\color{#D41876}-E_3 &\color{#0076BA} -B_2 &\color{#0076BA} B_1 & 0 
\end{pmatrix}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F^{\mu \nu} = \begin{pmatrix} 
0 & \color{#D41876}{-E^1} & \color{#D41876}-E^2 & \color{#D41876}-E^3 \\
\color{#D41876}E^1 & 0 &\color{#0076BA} -B^3 & \color{#0076BA}B^2 \\
\color{#D41876}E^2 &\color{#0076BA} B^3 & 0 &\color{#0076BA} -B^1 \\
\color{#D41876}E^3 &\color{#0076BA} -B^2 & \color{#0076BA}B^1 & 0 
\end{pmatrix}
$
</p>



On cherche à nouveau un invariant de Lorentz pour le lagrangien du champ, ce qui nous amène logiquement au produit scalaire du tenseur champ&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_{\mu \nu} F^{\mu \nu} = 2({\color{#0076BA}\boldsymbol{B}}^2 - {\color{#D41876}\boldsymbol{E}}^2)
$
</p>

Et le lagrangien peut s'écrire ainsi&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
L = -\frac{1}{4} \int \mathrm{d}^3 x \, F_{\mu \nu} F^{\mu \nu}
$
</p>
</div>

Le facteur $1/4$ se justifiera par la suite.

Enfin, la conservation *locale* de la charge s'exprime par l'**équation de continuité**&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\partial \rho}{\partial t} + \boldsymbol{\nabla} \cdot \boldsymbol{J} = \partial_{\mu} J^{\mu} = 0
$
</p>
</div>

<br>

### Champs classiques

Un champ classique est une bestiole qui se nourrit d'une position dans l'espace-temps et qui pond l'amplitude du champ en ce point. La sortie peut être un scalaire (ex&nbsp;: température), un nombre complexe, un vecteur (ex&nbsp;: champ magnétique), un tenseur (ex&nbsp;: $F\_{\mu\nu}(x)$) ou tout objet plus complexe. On obtient alors respectivement un **champ scalaire**, un **champ scalaire complexe**, un **champ vectoriel**, un **champ tensoriel**, etc.

Les champs sont définis *localement*.

Les valeurs du champ vivent dans un espace supplémentaire «&nbsp;au-dessus&nbsp;» de l'espace-temps. Pour un champ scalaire, par exemple, l'amplitude pouvant prendre une valeur réelle en chaque point de l'espace-temps, c'est comme si passait en ce point un axe réel supplémentaire. Et pour un champ dont l'amplitude s'ébat dans un espace plus complexe, c'est comme si on avait collé une copie de cet espace en tout point de l'espace-temps. L'espace total obtenu (espace de base + copies en tout point de l'espace des amplitudes) s'appelle un **fibré**.

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcfibre.png">
</div>

<br>

### Densité lagrangienne et hamiltonienne

Le but ici est de formuler des lagrangiens et hamiltoniens dans le langage des champs classiques.

<div id="preuve">

Dans le cas d'un réseau linéaire discret de ressorts de constante de raideur $K$ et de masselottes de masses $m$ séparées d'une longueur $\ell$, on avait écrit le hamiltonien suivant&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
H = \sum_j \frac{p_j^2}{2m} + \frac{1}{2} K(q_{j+1} - q_j)^2
$
</p>

Et le lagrangien&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
L = \sum_j \frac{p_j^2}{2m} - \frac{1}{2} K(q_{j+1} - q_j)^2
$
</p>

On passe à la limite continue&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\ell &\rightarrow 0\\
q_j &\rightarrow \phi(x,t)\\
\sum_j &\rightarrow \frac{1}{\ell}\int\mathrm{d}x\\
\frac{q_{j+1}-q_j}{\ell} &\rightarrow \frac{\partial \phi(x,t)}{\partial x}
\end{aligned}
$
</p>

On obtient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
H = \int \mathrm{d}^3x \left[\frac{1}{2} \rho \left( \frac{\partial \phi}{\partial t} \right)^2 + \frac{1}{2} \mathcal{T} \left(\boldsymbol{\nabla}\phi \right)^2 \right]
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
L = \int \mathrm{d}^3x \left[\frac{1}{2} \rho \left( \frac{\partial \phi}{\partial t} \right)^2 - \frac{1}{2} \mathcal{T} \left( \boldsymbol{\nabla} \phi \right)^2 \right]
$
</p>

On a introduit la masse linéique $\rho=m/\ell$ et la tension du ressort $\mathcal{T}=K\ell$.

</div>

Définissons les densités hamiltonienne et lagrangienne comme&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
H = \int \mathrm{d}^3x \, \mathcal{H}
$
</p>
</div>

<br>

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
L = \int \mathrm{d}^3x \, \mathcal{L}
$
</p>
</div>

L'intérêt du passage à cette densité devient plus clair si on regarde ce que devient la formule de l'action&nbsp;: $S=\int\mathrm{d}^4x\\,\mathcal{L}$. Le temps et l'espace sont maintenant traités sur un pied d'égalité, ce qui sied beaucoup mieux à une théorie relativiste.

$\mathcal{H}$ et $\mathcal{L}$ sont généralement fonction de $\phi$, $\dot{\phi}$ et $\phi'$. 

Définissons le moment conjugué $\pi(x)$ à partir de la dérivée fonctionnelle&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\pi(x) = \frac{\delta L}{\delta \dot{\phi}} = \frac{\partial \mathcal{L}}{\partial \dot{\phi}}
$
</p>
</div>

<br>

<div id="preuve">

Remarque&nbsp;: le lagrangien $L$ étant une fonctionnelle, on utilise la dérivée fonctionnelle $\delta/\delta \dot \phi$. Mais sa densité $\mathcal L$ ne fait qu'observer un point précis de l'espace-temps, c'est une simple fonction locale&nbsp;; d'où l'utilisation de la dérivée partielle $\partial/\partial\dot \phi$.

</div>

Cela permet de relier $\mathcal{H}$ et $\mathcal{L}$&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{H} = \pi \dot{\phi} - \mathcal{L}
$
</p>
</div>

<br>

<div id="preuve">

Dans le cas de l'exemple masselottes-ressorts, on obtient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2}\rho\left(\frac{\partial\phi}{\partial t}\right)^2-\frac{1}{2}\mathcal{T}(\boldsymbol{\nabla}\phi)^2
$
</p>
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{H}=\frac{1}{2}\rho\left(\frac{\partial\phi}{\partial t}\right)^2+\frac{1}{2}\mathcal{T}(\boldsymbol{\nabla}\phi)^2
$
</p>
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\pi=\rho\frac{\partial\phi}{\partial t}
$
</p>
</div>

Le principe de moindre action $\delta S = 0$ sur $S=\int\mathrm{d}^4x\\,\mathcal{L}(\phi,\partial\_\mu\phi)$ donne la version quadridimensionnelle des équations d'Euler-Lagrange&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\partial \mathcal{L}}{\partial \phi} - \partial_\mu \left( \frac{\partial \mathcal{L}}{\partial (\partial_\mu \phi)} \right) = 0
$
</p>
</div>

<br>

<div id="preuve">

Regardons ce que cela donne pour le champ électromagnétique.

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}=\frac{1}{2}  (\boldsymbol{E}^2 -  \boldsymbol{B}^2)
$
</p>

En l'absence de potentiel électrique ($V=0$), on a $A^\mu=(0,\boldsymbol{A})$ et donc $E^i=F^{i0}=\partial^iA^0-\partial^0 A^i=-\partial^0 A^i$.<br>
Par conséquent $\mathcal{L} =\frac{1}{2}  (\boldsymbol{E}^2 -  \boldsymbol{B}^2)=\frac{1}{2}(\dot{\boldsymbol{A}}^2 -  \boldsymbol{B}^2)$.<br>
Et le moment conjugué est $\pi^i=\partial\mathcal{L}/\partial(\partial\_0A\_i)$ (puisqu'ici $\phi=A$) et donc $\boldsymbol{\pi}=-\dot{\boldsymbol{A}}=\boldsymbol{E}$, ce qui donne&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{H} = \pi^i\dot{A}_i-\mathcal{L} =  \frac{1}{2} \left( \boldsymbol{E}^2 + \boldsymbol{B}^2 \right)
$
</p>

Et les équations d'Euler-Lagrange donnent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\partial \mathcal{L}}{\partial A_\mu} - \partial_\lambda \left( \frac{\partial \mathcal{L}}{\partial (\partial_\lambda A_\mu)} \right) = 0
$
</p>

Le premier terme est nul puisque $\mathcal{L}=-\frac{1}{4}F\_{\mu\nu}F^{\mu\nu}$ ne contient que des dérivées de $A\_\mu$. Et en réécrivant le second terme comme $\partial\_\lambda F^{\lambda\mu}$, on obtient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\partial_\lambda F^{\lambda\mu} = 0
$
</p>

Écriture compacte des deux équations de Maxwell inhomogènes dans le vide ($\boldsymbol{\nabla}\cdot\boldsymbol{E}=0$ et $\boldsymbol{\nabla}\times\boldsymbol{B}=\dot{\boldsymbol{E}}$).

En couplant linéairement le quadrivecteur densité de courant $J^\mu=(\rho,\boldsymbol{J})$ au champ électromagnétique, on obtient un nouveau lagrangien&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L} = -\frac{1}{4} F_{\mu\nu}F^{\mu\nu} - J^\mu A_\mu
$
</p>

On a maintenant

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\partial \mathcal{L}}{\partial A_\mu} = - J^\mu
$
</p>

Et donc

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\partial_\lambda F^{\lambda\mu} = J^\mu
$
</p>

On retrouve les deux équations de Maxwell inhomogènes avec charges ($\boldsymbol{\nabla}\cdot\boldsymbol{E}=\rho$ et $\boldsymbol{\nabla}\times\boldsymbol{B}=\boldsymbol{J}+\dot{\boldsymbol{E}}$).

Le facteur $1/4$ dans le lagrangien se justifie donc a posteriori par le fait qu'il nous a donné les bonnes équations.	

</div>

Dans la suite, lorsqu'on parlera de lagrangien, il s'agira le plus souvent en réalité de la densité lagrangienne.

La résolution des équations d'Euler-Lagrange va produire tous les *modes d'oscillations* et donc les vecteurs d'onde autorisés, c'est-à-dire les valeurs particulières $k\_n$ qui survivent à la dissipation. Par principe de superposition, l'onde la plus générale est faite de la somme pondérée des différents modes possibles&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\phi(x, t) = \sum_{\boldsymbol{k}_n} a_{\boldsymbol{k}_n} \mathrm{e}^{-\mathrm{i}(\omega t - \boldsymbol{k}_n \cdot \boldsymbol{x})}
$
</p>

Or on sait maintenant interpréter ces modes normaux comme des oscillateurs harmoniques qui peuvent donc être quantifiés, aboutissant à des solutions sous forme de particules.

<br>


## Mécanique quantique relativiste, première tentative

### Equation de Klein-Gordon

Rappelons le raisonnement permettant d'aboutir à l'équation de Schrödinger (cadre&nbsp;: particule libre en mécanique quantique non-relativiste)&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>on part de la relation de dispersion qui lie énergie et impulsion de la particule&nbsp;: $E=\frac{\boldsymbol{p}^2}{2m}$&nbsp;;</li>
<li>on transforme $E$ et $\boldsymbol{p}$ en opérateurs&nbsp;: $E\rightarrow\hat{E}$ et $\boldsymbol{p}\rightarrow \hat{\boldsymbol{p}}$&nbsp;;</li>
<li>on substitue $\hat{E}=\mathrm{i}\hbar\frac{\partial}{\partial t}$ et $\hat{\boldsymbol{p}}=-\mathrm{i}\hbar\boldsymbol{\nabla}$&nbsp;;</li>
<li>on obtient l'équation de Schrödinger&nbsp;:</li>
</ul>

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathrm{i} \hbar \frac{\partial \phi(x,t)}{\partial t} = - \frac{\hbar^2}{2m} \boldsymbol{\nabla}^2 \phi(\boldsymbol{x},t)
$
</p>
</div>

$\phi(\boldsymbol{x},t)$ est la fonction d'onde et les solutions de l'équation sont des ondes planes $\phi(\boldsymbol{x},t)=N\mathrm{e}^{-\mathrm{i}(\omega t-\boldsymbol{k}\cdot\boldsymbol{x})}$ où $N$ est une constante de normalisation (il s'agit ici d'une **onde incidente**). On peut réécrire la solution sous forme quadrivectorielle $\phi(x)=\mathrm{e}^{-\mathrm{i} p\cdot x}$.

Appliquons les opérateurs impulsion et énergie sur la solution&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\hat{\boldsymbol{p}}\,\phi(\boldsymbol{x},t)=\hbar\boldsymbol{k}\,\phi(\boldsymbol{x},t)\\
\hat{E}\,\phi(\boldsymbol{x},t)=\hbar\omega\,\phi(\boldsymbol{x},t)
\end{aligned}
$
</p>
</div>

Une onde incidente a donc une impulsion et une énergie positives.

Pour obtenir une équation d'onde relativiste, on va tenter le même cheminement.<br>
L'équation de dispersion d'une particule relativiste est donnée par&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = \left( \boldsymbol{p}^2 c^2 + m^2 c^4 \right)^{\frac{1}{2}}
$
</p>

Et avec les mêmes substitutions ($E\rightarrow\hat{E}=\mathrm{i}\hbar\frac{\partial}{\partial t}$ et $\boldsymbol{p}\rightarrow \hat{\boldsymbol{p}}=-\mathrm{i}\hbar\boldsymbol{\nabla}$), on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i} \hbar \frac{\partial \phi}{\partial t} = \left( -\hbar^2 c^2 \boldsymbol{\nabla}^2 + m^2 c^4 \right)^{\frac{1}{2}} \phi
$
</p>

Deux problèmes&nbsp;:

- l'équation n'a pas l'air covariante,
- que faire avec la racine carrée&nbsp;? Comment prend-on la racine carrée d'un opérateur différentiel&nbsp;?

Esquivons les deux problèmes en partant du carré de la relation de dispersion. On obtient maintenant&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\hbar^2 \frac{\partial^2 \phi}{\partial t^2} = \left( -\hbar^2 c^2 \boldsymbol{\nabla}^2 + m^2 c^4 \right) \phi
$
</p>

Il s'agit de l'**équation de Klein-Gordon**. Par souci de clarté, on repart en unités naturelles ($\hbar=c=1$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\frac{\partial^2 \phi(x, t)}{\partial t^2} = \left( -\boldsymbol{\nabla}^2 + m^2 \right) \phi(\boldsymbol{x}, t)
$
</p>

Tout semble maintenant parfaitement covariant. En notant $\partial^2=\partial\_\mu\partial^\mu=\frac{\partial^2}{\partial t^2}-\boldsymbol{\nabla}^2$, on peut réécrire joliment l'équation de Klein-Gordon&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
(\partial^2 + m^2)\phi(x)=0
$
</p>
</div>

C'est Schrödinger qui découvrit le premier l'équation de Klein-Gordon... mais il l'a vite rejetée car elle ne donnait pas la bonne structure fine pour l'atome d'hydrogène. Il n'a finalement gardé que sa limite non-relativiste, l'équation de Schrödinger (on [verra plus loin](../tqc4/#limite-non-relativiste) comment on passe de l'une à l'autre).

Pour résoudre l'équation, tentons la solution $\phi(\boldsymbol{x},t)=N\mathrm{e}^{-\mathrm{i}Et+\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}=N\mathrm{e}^{-\mathrm{i}p\cdot x}$ (en unités naturelles, $\boldsymbol{k}=\boldsymbol{p}$ et $\omega=E$ et comme on est plus intéressé par l'énergie et l'impulsion des particules, ce sont eux qu'on utilise).

En substituant dans l'équation, on retrouve la relation de dispersion $E^2=\boldsymbol{p}^2+m^2$. $\phi$ est donc bien une solution et tout semble parfait jusqu'au moment où on constate que pour obtenir l'énergie de la particule, il faut prendre la racine carrée de l'équation de dispersion... Deux solutions coexistent&nbsp;: $E=\pm(\boldsymbol{p}^2+m^2)^{\frac{1}{2}}$. Peut-on juste ignorer la solution négative en arguant qu'elle est non physique&nbsp;?

<br>

### Courants de probabilité et densités


Les énergies négatives, c'est déjà pas mal incommodant... mais elles engendrent quelque chose de peut-être encore plus dur à avaler&nbsp;: des densités de probabilité négatives&nbsp;!

La densité de probabilité $\rho$ et le courant de probabilité $\boldsymbol{j}$ obéissent à l'équation de continuité&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\partial \rho}{\partial t} +\boldsymbol{\nabla} \cdot \boldsymbol{j}  = 0
$
</p>
</div>

<br>

<div id="preuve">

<details>
<summary>
Démonstration&nbsp;:
</summary>

On multiplie l'équation de Klein-Gordon pour $\phi$ par $\phi^*$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\phi^*\left(-\hbar^2 \frac{\partial^2 \phi}{\partial t^2}\right) &= \phi^*\left( -\hbar^2 c^2 \boldsymbol{\nabla}^2 + m^2 c^4 \right) \phi\\
& =  -\hbar^2 c^2 \phi^*\boldsymbol{\nabla}^2 \phi+ m^2 c^4 |\phi|^2
\end{aligned}
$
</p>

Puis on multiplie l'équation de Klein-Gordon pour $\phi^*$ par $\phi$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
-\hbar^2 \phi\frac{\partial^2 \phi^*}{\partial t^2} =  -\hbar^2 c^2 \phi\boldsymbol{\nabla}^2 \phi^*+ m^2 c^4 |\phi|^2
$
</p>

En soustrayant membre à membre les deux équations, on obtient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\left( \phi^*\frac{\partial^2 \phi}{\partial t^2}- \phi\frac{\partial^2 \phi^*}{\partial t^2}\right)=c^2\left( \phi^*\boldsymbol{\nabla}^2 \phi- \phi\boldsymbol{\nabla}^2 \phi^*\right)
$
</p>

Qu'on peut réécrire&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathrm{i}\hbar\frac{\partial}{\partial t}\left( \phi^*\frac{\partial \phi}{\partial t}- \phi\frac{\partial \phi^*}{\partial t}\right)=-\mathrm{i}\hbar c^2\boldsymbol{\nabla}\cdot\left( \phi^*\boldsymbol{\nabla} \phi- \phi\boldsymbol{\nabla}\phi^*\right)
$
</p>

En effet, $\frac{\partial \phi^\*}{\partial t}\frac{\partial \phi}{\partial t}-\frac{\partial \phi}{\partial t}\frac{\partial \phi^\*}{\partial t}=0$, et de même $\boldsymbol{\nabla} \phi^\*\cdot\boldsymbol{\nabla} \phi-\boldsymbol{\nabla} \phi\cdot\boldsymbol{\nabla} \phi^\*=0$.

On retrouve bien l'équation de continuité en posant&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\rho=\mathrm{i}\hbar\left(\phi^* \frac{\partial \phi}{\partial t}-\phi \frac{\partial \phi^*}{\partial t}\right)
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\boldsymbol{J}=- \mathrm{i}\hbar c^2\left(\phi^* \boldsymbol{\nabla} \phi-\phi \boldsymbol{\nabla} \phi^*\right)
$
</p>

</details>

</div>



qui devient en notation quadrivectorielle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu j^\mu = 0
$
</p>

Et le courant de probabilité quadrivectoriel s'écrit&nbsp;:


<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
j^\mu(x) = \mathrm{i} \left[ \phi^*(x) \partial^\mu \phi(x) - \phi(x) \partial^\mu \phi^*(x) \right]
$
</p>
</div>

En substituant la solution $\phi(x)=N\mathrm{e}^{-\mathrm{i}p\cdot x}$, on obtient une composante temporelle de la probabilité de courant, la densité de probabilité, à l'allure inquiétante&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
j^0 = \rho = 2|N|^2 E
$
</p>

Comme $E$ peut être négative, $\rho$ aussi, et il faudrait alors donner un sens à des probabilités négatives...

<br>

### L'interprétation de Feynman des énergies négatives

Feynman a proposé une interprétation audacieuse des états à énergie négative solutions de l'équation de Klein-Gordon&nbsp;: il s'agirait de particules remontant le temps, des **antiparticules**&nbsp;!

Considérons l'équation classique gouvernant le mouvement d'une particule chargée dans un champ électromagnétique&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
m \frac{\mathrm{d}^2 x^\mu}{\mathrm{d}\tau^2} = q F^{\mu\nu} \frac{\mathrm{d}x_\nu}{\mathrm{d}\tau}​
$
</p>

Changer le signe du temps propre $\tau$ dans l'équation a la même conséquence que changer le signe de la charge $q$. Donc une particule remontant le temps est équivalente a une particule de charge opposée avec un temps s'écoulant normalement.

Pour nos solutions de la forme $\mathrm{e}^{-\mathrm{i}(Et-\boldsymbol{p}\cdot\boldsymbol{x})}$ (avec $E<0$), changer $t\rightarrow -t$ doit être compensé par $E\rightarrow -E$ pour rétablir le sens normal d'écoulement du temps. Mais le reversement du temps touche aussi l'impulsion $\boldsymbol{p}\rightarrow\boldsymbol{-p}$. Cela donne au final $\mathrm{e}^{-\mathrm{i}(Et+\boldsymbol{p}\cdot\boldsymbol{x})}$ avec $E>0$. La particule incidente d'énergie négative devient une particule émise d'énergie positive.

On sait maintenant gérer les énergies négatives&nbsp;: une particule d'énergie négative se transforme en antiparticule d'énergie positive en changeant le signe de la charge et de l'impulsion tridimensionnelle.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcantipart.png">
</div>

Une solution générale de l'équation de Klein-Gordon pour une énergie positive particulière est donnée par la superposition de deux états&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\phi(x) = \left[
\begin{array}{c}
\text{Particule reçue} \\
\text{d'énergie positive} \\
\propto \mathrm{e}^{-\mathrm{i}(Et - \boldsymbol{p} \cdot \boldsymbol{x})}
\end{array}
\right]
+ 
\left[
\begin{array}{c}
\text{Antiparticule émise} \\
\text{d'énergie positive} \\
\propto \mathrm{e}^{+\mathrm{i}(Et - \boldsymbol{p} \cdot \boldsymbol{x})}
\end{array}
\right]
$
</p>

<br>

## Quelques lagrangiens de champs classiques

### Champ scalaire sans masse

Un champ scalaire $\phi(x)$ assigne une amplitude scalaire à toute position $x$ de l'espace-temps. Le lagrangien ne dépend que du taux de variation temporel $\partial\_t\phi$ et spatial $\boldsymbol{\nabla}\phi$ du champ. Et pour que $\mathcal{L}$ respecte les canons relativistes, on choisit&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2} \partial^\mu \phi \partial_\mu \phi=\frac{1}{2}\left(\partial_\mu \phi\right)^2
$
</p>
</div>

Il se développe en $\mathcal{L}=\frac{1}{2}\left(\partial\_0 \phi\right)^2-\frac{1}{2} (\boldsymbol{\nabla} \phi)^2$ pour lui donner un air de $\mathcal{L}=$ (énergie cinétique)- (énergie potentielle). Comme d'habitude, le facteur ($\frac{1}{2}$, ici) est là pour faire coller les prédictions du lagrangien à ce qu'on connaît.

Comme $\frac{\partial \mathcal{L}}{\partial \phi}=0$ et $\frac{\partial \mathcal{L}}{\partial\left(\partial\_\mu \phi\right)}=\partial^\mu \phi$, l'équation d'Euler-Lagrange implique l'équation de mouvement suivante&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\partial_\mu\partial^\mu\phi =0
$
</p>
</div>

Ce n'est autre que l'équation des ondes (équation de d'Alembert) $\partial^2\phi=0$ ou $\frac{\partial^2 \phi}{\partial t^2}-\boldsymbol{\nabla}^2 \phi=0$.

Et les solutions ondulent sous la forme&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\phi(x, t)=\sum_{\boldsymbol{p}} a_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\left(E_{\boldsymbol{p}} t-\boldsymbol{p} \cdot \boldsymbol{x}\right)}
$
</p>
</div>

avec une équation de dispersion donnée par&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
E_{\boldsymbol{p}}=c|\boldsymbol{p}|
$
</p>
</div>

(ou $E\_{\boldsymbol{p}}=|\boldsymbol{p}|$ avec $c=1$).

Comme $E\_{\boldsymbol{p}}=0$ en $|\boldsymbol{p}|=0$, on dit que la relation de dispersion est sans gap.

Cette équation décrira plus loin l'énergie des excitations quantiques du système et puisque c'est la version $m=0$ de la relation de dispersion relativiste $E\_p=\sqrt{p^2+m^2}$, on parle de particules non massives ainsi que d'un champ scalaire sans masse.

L'équation d'onde étant linéaire, les ondes solutions obéissent au principe de superposition. Les particules correspondantes sont alors dites libres ou sans interaction. Si on les envoie les unes contres les autres, elles se traversent sans se voir.

<br>

### Champ scalaire avec masse

Pour inclure une masse, on fait dépendre $\mathcal{L}$ non plus seulement de $\partial\_\mu\phi$ mais aussi du champ $\phi$ lui-même en introduisant un terme d'énergie potentielle $U(\phi)\propto\phi^2$ qui va traduire le coût d'avoir un champ plutôt que du vide à cet endroit. 

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2}\left(\partial_\mu \phi\right)^2-\frac{1}{2} m^2 \phi^2,
$
</p>
</div>

Montrons à partir des équations d'Euler-Lagrange que le paramètre $m$ est bien une masse.<br>
Comme on a $\frac{\partial \mathcal{L}}{\partial \phi}=-m^2 \phi$ et $\frac{\partial \mathcal{L}}{\partial\left(\partial\_\mu \phi\right)}=\partial^\mu \phi$, on obtient&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\left(\partial_\mu \partial^\mu+m^2\right) \phi=0
$
</p>
</div>

L'équation du mouvement de ce champ est donc l'équation de Klein-Gordon&nbsp;!

Ses solutions sont à nouveau&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\phi(x, t)=\sum_{\boldsymbol{p}} a_{\boldsymbol{p}} \mathrm{e}^{-\mathrm{i}\left(E_{\boldsymbol{p}} t-\boldsymbol{p} \cdot \boldsymbol{x}\right)}
$
</p>
</div>

avec la relation de dispersion&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
E^2_{\boldsymbol{p}} = \boldsymbol{p}^2 + m^2
$
</p>
</div>

Avoir $m\neq 0$ crée un gap dans la relation de dispersion (à $\boldsymbol{p}=0$, $E\_{\boldsymbol{p}}=\pm m$) correspondant à la masse de la particule.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcdispmasse.png">
</div>

À nouveau, les équations du mouvement sont linéaires et donc les particules ainsi décrites n'interagissent pas.

<br>

### Source externe

On veut maintenant introduire des interactions. Le plus simple est de faire interagir un champ scalaire avec un potentiel externe. On décrit le potentiel par une fonction $J(x)$ (**source externe**) qui interagit avec le champ via le terme $-J(x)\phi(x)$ dans le potentiel. Cela donne le lagrangien&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2}\left[\partial_\mu \phi(x)\right]^2-\frac{1}{2} m^2[\phi(x)]^2+J(x) \phi(x)
$
</p>
</div>

L'équation du mouvement devient&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\left(\partial_\mu \partial^\mu+m^2\right) \phi(x)=J(x) .
$
</p>
</div>

On a ainsi maintenant une équation différentielle inhomogène.

<br>

### La théorie $\phi^4$

Comment faire interagir des particules les unes avec les autres (ou des champs avec des champs)&nbsp;? La recette la plus simple consiste à ajouter un terme d'énergie potentielle $U(\phi)$ proportionnel à $\phi^4$ au lagrangien scalaire. S'il crée bien des interactions, ce terme empêche dans le même temps de trouver des solutions aux équations autrement que par une théorie des perturbations...

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2} \partial^\mu \phi \partial_\mu \phi-\frac{1}{2} m^2 \phi^2-\frac{1}{4!} \lambda \phi^4,
$
</p>
</div>

Et cela donne une équation du mouvement pas très jolie&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\left(\partial^2+m^2\right) \phi=-\frac{\lambda}{3!} \phi^3 .
$
</p>
</div>

<br>

### Deux champs scalaires

Pour faire interagir des particules, on peut aussi décrire deux types de particules via deux champs différents $\phi\_1(x)$ et $\phi\_2(x)$ et les faire interagir grâce au potentiel $U(\phi\_1,\phi\_2)=g(\phi\_1^2+\phi\_2^2)^2$ où $g$ paramétrise la force de l'interaction.

Développer le carré donne des termes d'interaction propre en $\phi^4$ mais aussi un terme d'interaction mutuelle $2g\\,\phi\_1^2\phi\_2^2$.

La densité lagrangienne est donnée par&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\frac{1}{2}\left(\partial_\mu \phi_1\right)^2-\frac{1}{2} m^2 \phi_1^2+\frac{1}{2}\left(\partial_\mu \phi_2\right)^2-\frac{1}{2} m^2 \phi_2^2-g\left(\phi_1^2+\phi_2^2\right)^2
$
</p>
</div>

On remarque que certaines transformations des champs gardent invariant le lagrangien. On peut ainsi opérer une rotation des champs dans l'espace abstrait $\phi\_1$-$\phi\_2$. On a alors $\phi\_1 \rightarrow \phi\_1^{\prime}$ et $\phi\_2 \rightarrow \phi\_2^{\prime}$ avec&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\binom{\phi_1^{\prime}}{\phi_2^{\prime}}=\left(\begin{array}{cc}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{array}\right)\binom{\phi_1}{\phi_2}
$
</p>

On dit que les particules décrites par ce lagrangien ont un **degré de liberté interne**. L'invariance de la physique par rapport aux rotations d'un angle $\theta$ dans l'espace $\phi\_1$-$\phi\_2$ exprime une symétrie $SO(2)$ de la théorie.

<div id="preuve">

$SO(2)$ est le groupe spécial orthogonal à 2 dimensions. Il correspond aux matrices $2\times2$ orthogonales avec un déterminant égal à 1.<br>
C'est une symétrie continue et on va voir plus loin que les symétries continues conduisent à des quantités conservées.

</div>

<br>

### Champ scalaire complexe

On peut simplifier le lagrangien à deux champs scalaires précédent en passant à des champs scalaires complexes $\psi$ et $\psi^\dagger$ définis par&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\psi & =\frac{1}{\sqrt{2}}\left[\phi_1+\mathrm{i} \phi_2\right] \\
\psi^{\dagger} & =\frac{1}{\sqrt{2}}\left[\phi_1-\mathrm{i} \phi_2\right]
\end{aligned}
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcargand.png">
</div>

On obtient&nbsp;:

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}=\partial^\mu \psi^{\dagger} \partial_\mu \psi-m^2 \psi^{\dagger} \psi-g\left(\psi^{\dagger} \psi\right)^2
$
</p>
</div>

Le nouveau champ scalaire complexe $\psi$ contient, comme avant, deux degrés de liberté. Le nouveau lagrangien se retrouve maintenant invariant par rapport aux rotations dans le plan complexe $\psi \rightarrow \psi \mathrm{e}^{\mathrm{i} \alpha}$ et $\psi^{\dagger} \rightarrow \mathrm{e}^{-\mathrm{i} \alpha} \psi^{\dagger}$ qui expriment une symétrie $U(1)$.

<div id="preuve">

$U(1)$ est le groupe des transformations unitaires à 1 dimension.

L'équivalence entre les deux descriptions précédentes découle de l'isomorphisme entre $SO(2)$ et $U(1)$ noté $SO(2)\simeq U(1)$.

</div>

<br>

### Théorie $\psi^\dagger\psi\phi$

Terminons par une théorie décrivant 3 types de particules. On additionne les lagrangiens de champ scalaire complexe (avec une masse $m$) et de champ scalaire réel (avec une masse $\mu$) et on ajoute un terme d'interaction entre les deux $g\psi^\dagger\psi\phi$&nbsp;:

<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{L}= \partial^\mu \psi^{\dagger} \partial_\mu \psi-m^2 \psi^{\dagger} \psi+\frac{1}{2}\left(\partial_\mu \phi\right)^2-\frac{1}{2} \mu^2 \phi^2-g \psi^{\dagger} \psi \phi
$
</p>
</div>

Comme on le verra plus tard, cette théorie ressemble beaucoup à l'électrodynamique quantique.

<br>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
H = p_i\dot{q}_i - L
\;\xrightarrow{\ \text{Legendre}\ }\;
\dot{q}_i = \frac{\partial H}{\partial p_i},\ \ \dot{p}_i = -\frac{\partial H}{\partial q_i}
\;\xrightarrow{\ \text{pont}\ }\;
\{A,B\} \to \frac{1}{\mathrm{i}\hbar}[\hat{A},\hat{B}]
$
</p>

<p style="text-align:center;">
$\displaystyle
S = -mc\int\mathrm{d}s
\;\longrightarrow\;
\boldsymbol{p} = \gamma m\boldsymbol{v},\ \ E = \gamma mc^2
\;\xrightarrow{\ \mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} - J^\mu A_\mu\ }\;
\partial_\lambda F^{\lambda\mu} = J^\mu
$
</p>

<p style="text-align:center;">
$\displaystyle
E^2 = \boldsymbol{p}^2 + m^2
\;\longrightarrow\;
(\partial^2 + m^2)\,\phi = 0
\;\longrightarrow\;
\rho = 2|N|^2 E \lessgtr 0
\;\xrightarrow{\ \text{Feynman}\ }\;
\text{antiparticules}
$
</p>

<p style="text-align:center;">
$\displaystyle
\frac{1}{2}(\partial_\mu\phi)^2
\;\xrightarrow{\ -\frac{1}{2}m^2\phi^2\ }\;
\text{masse}
\;\xrightarrow{\ +J\phi,\ -\frac{\lambda}{4!}\phi^4,\ \ldots\ }\;
\text{interactions}
\;\xrightarrow{\ \psi = \frac{\phi_1 + \mathrm{i}\phi_2}{\sqrt{2}}\ }\;
\text{symétrie } U(1)
$
</p>

<br>

### Pièges

<ul>
<li>La transformation de Legendre exige la convexité&nbsp;: c'est elle qui met $p$ et $\dot{q}$ en bijection et rend le changement de variables inversible.</li>
<li>Le facteur $-\frac{1}{4}$ devant $F_{\mu\nu}F^{\mu\nu}$ n'est pas esthétique&nbsp;: c'est le seul qui redonne les équations de Maxwell.</li>
<li>La masse est un terme <b>quadratique</b> du lagrangien, lisible comme un gap dans la relation de dispersion&nbsp;; l'interaction est tout ce qui rend les équations <b>non linéaires</b>. Des équations linéaires décrivent des particules qui se traversent sans se voir.</li>
<li>L'équation de Klein-Gordon n'est pas «&nbsp;fausse&nbsp;»&nbsp;: elle est mal interprétée comme équation d'une fonction d'onde à une particule. Ses densités négatives signalent que ce cadre-là est mort, pas l'équation.</li>
<li>Une énergie négative n'est pas une pathologie&nbsp;: relue à la Feynman, c'est une antiparticule d'énergie positive dans le bon sens du temps.</li>
<li>$\hbar = c = 1$ n'est pas une approximation&nbsp;: c'est un choix d'unités, et tout facteur manquant se restaure par analyse dimensionnelle.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Nous avons des champs classiques et un catalogue de lagrangiens, mais pas encore de quoi les quantifier proprement. La partie suivante rassemble l'outillage&nbsp;: la représentation d'Heisenberg, où les opérateurs portent la dynamique, taillée sur mesure pour des champs d'opérateurs&nbsp;; les transformations continues et leurs générateurs&nbsp;; et le théorème de Noether, qui convertit chaque symétrie continue en loi de conservation. Les particules émergeront ensuite comme excitations des champs quantifiés.
{{%/notice%}}



<br>



<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc1">Chapitre précédent</a></td><td><a href="../tqc3">Chapitre suivant</a></td>
    </tr>
</table>
</div>