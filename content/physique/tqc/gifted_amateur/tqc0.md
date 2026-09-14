+++
title = "TQC-0"
date = 2021-03-06T14:20:50+01:00
weight = 1
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


# Théorie quantique des champs -- Partie 0

{{%notice note%}}
Notes de lecture du livre *Quantum field theory for the gifted amateur* de Thomas Lancaster et Stephen Blundell. 
{{%/notice%}}

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Retour sommaire</a></th>
    </tr>
</table>
</div>
<br>

En théorie quantique des champs (TQC), le langage est celui des lagrangiens plutôt que celui des forces. Pourquoi&nbsp;? Cette partie liminaire tente de répondre avant de commencer. 

La deuxième loi de Newton exige de suivre la particule instant par instant, précisément ce que la mécanique quantique interdit&nbsp;; le principe de moindre action, lui, ne compare que des trajectoires globales entre deux évènements mesurés. 

Trois étapes&nbsp;:

<ul>
<li><b>L'outil.</b> Les fonctionnelles et leur dérivée&nbsp;: comment un nombre construit sur toute une trajectoire varie quand on déforme la trajectoire.</li>
<li><b>La découverte.</b> Autour de la trajectoire classique, les énergies cinétique et potentielle moyennes varient de concert&nbsp;: leur différence est stationnaire. Cette différence reçoit un nom, le <b>lagrangien</b>, son intégrale s'appelle l'<b>action</b>, et la condition de stationnarité accouche des équations d'Euler-Lagrange, y compris en version champs.</li>
<li><b>La justification.</b> En mécanique quantique, chaque chemin porte une phase $\mathrm{e}^{\mathrm{i}S/\hbar}$, et seuls les chemins d'action stationnaire interfèrent constructivement. Ce raisonnement a un ancêtre classique inattendu&nbsp;: l'optique de Fermat et Huygens.</li>
</ul>

## Lagrangien et principe de moindre action

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/tqctraj.png" style="box-shadow:none;background:none;">
</div>

La détermination de la trajectoire $x(t)$ d'une particule entre A et B par intégration de la 2<sup>e</sup> loi de Newton, $F=m\ddot{x}$, ne cadre pas avec les enseignements de la mécanique quantique. Car si on peut bien mesurer la particule en A à $t=0$ et en B à $t=\tau$, un voile impénétrable nous empêche de savoir précisément ce qui s'est passé entre les deux. En effet, $x(t+\mathrm{d}t) \approx x(t) + v(t)\\,\mathrm{d}t$, donc la détermination précise de $x(t+\mathrm{d}t)$ dépend de celle de $x(t)$ et $v(t)$. Or la relation d'incertitude de Heisenberg nous interdit justement de connaître précisément à la fois la position et la vitesse à un instant quelconque. Une équation différentielle ne semble donc pas un point de départ prometteur pour calculer $x(t)$...

Concentrons-nous sur les variations de l'énergie cinétique $T$ et l'énergie potentielle $V$ le long de la trajectoire. L'énergie totale $E=T+V$ doit être une constante du mouvement de la particule mais l'équilibre entre les deux types d'énergie peut varier.<br>
Notons $\displaystyle\bar{T}[x]=\frac{1}{\tau}\int_0^\tau\frac{1}{2}m\\,\dot{x}(s)^2\\,\mathrm{d}s$ l'énergie cinétique moyenne sur la trajectoire et $\displaystyle\bar{V}[x]=\frac{1}{\tau}\int_0^\tau V\big(x(s)\big)\\,\mathrm{d}s$, l'énergie potentielle moyenne. On a bien sûr $E=\bar{E}=\bar{T}+\bar{V}$.

Mathématiquement, $\bar{T}$ et $\bar{V}$ sont des **fonctionnelles**. Là où des fonctions se nourrissent de nombres pour produire des nombres, les fonctionnelles produisent des nombres à partir de fonctions.

<div id="def">
<p style="text-align:center;">
nombre $\xrightarrow{\text{fonction}}$ nombre
</p>
<p style="text-align:center;">
fonction $\xrightarrow{\text{fonctionnelle}}$ nombre
</p>
</div>

<br>

Toutes deux se nourrissent de la **même** fonction, la trajectoire $x$&nbsp;; mais pas de la même manière&nbsp;: $\bar{V}$ ne regarde que la *valeur* de $x$ à chaque instant, tandis que $\bar{T}$ ne regarde que sa *pente*. Cette distinction, anodine pour l'instant, va organiser tout ce qui suit.

{{%notice piege%}}
Les crochets ne sont pas décoratifs&nbsp;: $\bar{V}[x]$ dépend de la trajectoire **entière**, alors que $V(x)$ est une fonction ordinaire d'un nombre. Dans toute cette page, crochets $=$ fonctionnelle, parenthèses $=$ fonction. Attention aussi à ne pas confondre le $F$ générique d'une fonctionnelle $F[f]$ avec le $F$ de la force&nbsp;: le second n'apparaît plus au-delà de cette introduction.
{{%/notice%}}

<br>

### Dérivée fonctionnelle


La dérivée fonctionnelle de $F[f]$ nous dit comment le nombre produit par la fonctionnelle varie lorsqu'on change légèrement la fonction $f$ qu'elle mâchouille. On déforme $f$ en lui ajoutant un pic infiniment fin placé en $x$, et on regarde la réponse de $F$ au premier ordre en $\epsilon$.<br>

<div id="def">
<p style="text-align:center;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}
=\lim_{\epsilon \to 0}\frac{1}{\epsilon}\Big(F\big[f+\epsilon\,\delta_{x}\big]-F[f]\Big)$<br>
avec $\displaystyle \delta_{x}(y)=\delta(y-x)$
</p>
</div>

<br>

Cette définition ne changera plus. Ce qui change d'un cas à l'autre, c'est uniquement **la façon dont l'intégrande dépend de $f$**. Les fonctionnelles qui nous occupent ont un intégrande de la forme $g\big(f(y),f'(y)\big)$&nbsp;; comme la dérivée fonctionnelle est linéaire, il suffit de savoir traiter deux briques élémentaires&nbsp;: celle qui ne voit que la valeur de $f$, et celle qui ne voit que sa pente. Dans les deux cas, $g$ est une fonction ordinaire d'une variable réelle et $g'$ désigne sa dérivée par rapport à son argument.

#### Première brique&nbsp;: l'intégrande dépend de la valeur de $f$

<p style="text-align:center;">
$\displaystyle
F[f]=\int_a^b g\big(f(y)\big)\,\mathrm{d}y
$
</p>

On a alors&nbsp;:


<div id="def">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)} = g'\big(f(x)\big)
$
</p>
</div>

<br>

<div id="preuve">

Le développement de $g$ au premier ordre donne $g\big(f(y)+\epsilon\\,\delta(y-x)\big)\simeq g\big(f(y)\big)+\epsilon\\,\delta(y-x)\\,g'\big(f(y)\big)$, d'où&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\frac{\delta F[f]}{\delta f(x)}
&=\lim_{\epsilon \to 0}\frac{1}{\epsilon}\left[\int g\big(f(y)+\epsilon \delta(y-x)\big)\mathrm{d}y-\int g\big(f(y)\big)\mathrm{d}y\right]\\
&=\lim_{\epsilon \to 0}\frac{1}{\epsilon}\left[\int \Big(g\big(f(y)\big)+\epsilon\,\delta(y-x)\,g'\big(f(y)\big)\Big)\mathrm{d}y - \int g\big(f(y)\big)\mathrm{d}y\right]\\
&=\int \delta(y-x)\, g'\big(f(y)\big)\, \mathrm{d}y\\
&= g'\big(f(x)\big)
\end{aligned}
$
</p>
</div>

Le résultat est purement local&nbsp;: la fonctionnelle ne «&nbsp;voit&nbsp;» que la valeur de $f$ en $x$, et la dérivée fonctionnelle se réduit à la dérivée ordinaire de $g$ évaluée en ce point.


#### Seconde brique&nbsp;: l'intégrande dépend de la pente de $f$


<p style="text-align:center;">
$\displaystyle F[f]=\int_a^b g\big(f'(y)\big) \, \mathrm{d}y$ avec $\displaystyle f'=\mathrm{d}f/\mathrm{d}y$
</p>

On a alors&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}=-\frac{\mathrm{d}}{\mathrm{d} x}\Big(g'\big(f'(x)\big)\Big)
$
</p>
</div>

<br>

<div id="preuve">

Cette fois la déformation atteint $f$ à travers sa dérivée&nbsp;:
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}=\lim_{\epsilon \to 0}\frac{1}{\epsilon}\left[\int \mathrm{d}y \,g\!\left( \frac{\partial}{\partial y}\big[f(y)+\epsilon \delta(y-x)\big]\right) - \int \mathrm{d}y \,g\big(f'(y)\big)\right]
$
</p>

Le pic devient un <em>doublet</em> $\delta'(y-x)$, et le développement de Taylor au premier
ordre s'écrit&nbsp;:
<p style="text-align:center;">
$\displaystyle
g\!\left(\frac{\partial}{\partial y}\big[f(y)+\epsilon\delta(y-x)\big]\right)=g\big(f'+\epsilon\delta'(y-x)\big)\simeq g(f')+\epsilon\,\delta'(y-x)\,g'(f')
$
</p>

Il reste donc&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}=\int \mathrm{d}y\,\delta'(y-x)\,g'\big(f'(y)\big)
$
</p>

La dérivée porte sur la distribution, pas sur $g'$&nbsp;: on la fait basculer par intégration par parties&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\int \mathrm{d}y\, \delta'(y-x)\,g'\big(f'(y)\big)=\Big[\delta(y-x)\,g'\big(f'(y)\big)\Big]_{y=a}^{y=b}-\int \mathrm{d}y \,\delta(y-x)\,\frac{\mathrm{d}}{\mathrm{d} y}\Big(g'\big(f'(y)\big)\Big)
$
</p>

Si $x$ est strictement à l'intérieur de l'intervalle d'intégration, le pic de la distribution $\delta$ n'atteint pas les bornes&nbsp;: le terme entre crochets s'annule et il vient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}=-\frac{\mathrm{d}}{\mathrm{d} x}\Big(g'\big(f'(x)\big)\Big)
$
</p>
</div>

Le résultat n'est plus local&nbsp;: déplacer $f$ en un point modifie sa pente <em>de part et d'autre</em> de ce point, d'où l'apparition d'une dérivée supplémentaire, et du signe moins.


{{%notice info "D'où viennent vraiment le signe moins et la dérivée ? Une lecture géométrique"%}}

L'intégration par parties donne le résultat mais escamote sa raison d'être. Discrétisons la fonction pour voir ce qui se passe réellement.

Découpons l'intervalle en nœuds régulièrement espacés, $y_n=a+nh$, et notons $f_n=f(y_n)$. Une pente ne vit pas sur un nœud mais sur un **segment**&nbsp;: notons $f'_{n+1/2}$ celle du segment joignant les nœuds $n$ et $n+1$.

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
f'_{n+1/2}=\frac{f_{n+1}-f_n}{h}$
</p>
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F\simeq\sum_n h\;g\big(f_n,\,f'_{n+1/2}\big)
$
</p>

Pinçons maintenant un seul nœud intérieur&nbsp;: $f_n\to f_n+\delta f$, tous les autres inchangés. Le nœud $n$ appartient à trois choses seulement&nbsp;: lui-même, le segment à sa gauche, le segment à sa droite. Trois contributions, donc.

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/lagrhist.png" style="box-shadow:none;background:none;">
</div>

<b>Contribution 1&nbsp;: la valeur.</b> Le terme d'indice $n$ voit son premier argument changer de $\delta f$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\delta F_1=h\,\frac{\partial g}{\partial f}\bigg|_{n}\,\delta f
$
</p>

<b>Contribution 2&nbsp;: les deux pentes.</b> C'est ici que tout se joue. Le segment de gauche voit son extrémité droite remonter&nbsp;: il se redresse, sa pente augmente de $\delta f/h$. Le segment de droite voit son extrémité gauche remonter&nbsp;: il se couche, sa pente diminue de $\delta f/h$. Les deux variations sont <b>opposées</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta f'_{n-1/2}=+\frac{\delta f}{h}
$
</p>
<p style="text-align:center;">
$\displaystyle
\Delta f'_{n+1/2}=-\frac{\delta f}{h}
$
</p>

D'où, en sommant les deux termes concernés (celui d'indice $n-1$, qui porte la pente de gauche, et celui d'indice $n$, qui porte celle de droite)&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\delta F_2&=h\,\frac{\partial g}{\partial f'}\bigg|_{n-1/2}\!\!\cdot\frac{\delta f}{h}\;+\;h\,\frac{\partial g}{\partial f'}\bigg|_{n+1/2}\!\!\cdot\left(-\frac{\delta f}{h}\right)\\[2mm]
&=-\left(\frac{\partial g}{\partial f'}\bigg|_{n+1/2}-\frac{\partial g}{\partial f'}\bigg|_{n-1/2}\right)\delta f\\[2mm]
&\simeq -h\,\frac{\mathrm{d}}{\mathrm{d}y}\left(\frac{\partial g}{\partial f'}\right)\bigg|_{y_n}\delta f
\end{aligned}
$
</p>

Tout est là. Le <b>signe moins</b> vient de ce que les deux pentes bougent en sens contraire&nbsp;; la <b>dérivée</b> vient de ce qu'il reste une différence entre deux valeurs voisines de $\partial g/\partial f'$, séparées de $h$. Aucune intégration par parties n'a été nécessaire&nbsp;: le résultat est local, et l'argument l'est aussi.

<b>Retour au continu.</b> Le pic discret a une hauteur $\delta f$ sur une largeur $h$&nbsp;: son aire vaut $h\\,\delta f$, c'est-à-dire exactement le $\epsilon$ de la définition, puisque $\int\epsilon\\,\delta(y-x)\\,\mathrm{d}y=\epsilon$. En divisant, les deux facteurs disparaissent ensemble&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta F[f]}{\delta f(x)}=\lim_{h\to 0}\frac{\delta F_1+\delta F_2}{h\,\delta f}=\frac{\partial g}{\partial f}\bigg|_{x}-\frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{\partial g}{\partial f'}\bigg|_{x}\right)
$
</p>

On retrouve les deux briques d'un coup&nbsp;: le premier terme est la première brique, le second est la seconde. Et l'on comprend au passage pourquoi la normalisation du $\delta$ de Dirac est la bonne comptabilité&nbsp;; c'est elle qui rend la réponse indépendante de la finesse du pincement.

<b>Et les bords&nbsp;?</b> Pinçons cette fois le <b>dernier</b> nœud. Il n'a pas de segment à sa droite&nbsp;: la compensation ne peut pas avoir lieu, et il subsiste un terme isolé $\partial g/\partial f'$ évalué au bord. C'est, vu du côté discret, l'exact terme entre crochets de l'intégration par parties.

<br>
<i>D'après la dérivation géométrique de Preetum Nakkiran, <a href="https://preetum.nakkiran.org/lagrange.html">Geometric Derivation of Euler-Lagrange Equation</a>.</i>

{{%/notice%}}


<br>

### Application à $\bar T$ et $\bar V$

On peut maintenant vérifier comment $\bar{T}$ et $\bar{V}$ varient lorsque la trajectoire $x(t)$ est un peu modifiée. Chacune relève de l'une des deux briques.


<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta \bar{V}[x]}{\delta x(t)}=\frac{V'\big(x(t)\big)}{\tau}
$
</p>
</div>

<br>

<div id="preuve">
<p style="text-align:center;">
$\displaystyle
\bar V[x]=\frac{1}{\tau}\int_0^\tau V\big(x(s)\big)\,\mathrm{d}s
$
</p>

L'intégrande ne dépend que de la valeur de la trajectoire&nbsp;: c'est la **première brique**, avec le dictionnaire $f\leftrightarrow x$, $y\leftrightarrow s$, $x\leftrightarrow t$ et $g\leftrightarrow V$ (le facteur $1/\tau$ sort par linéarité). Comme $g'=V'=\mathrm{d}V/\mathrm{d}x$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle \frac{\delta \bar{V}[x]}{\delta x(t)}=\frac{1}{\tau}V'\big(x(t)\big)
$
</p>

c'est-à-dire, au facteur $1/\tau$ près, l'opposé de la force ressentie à l'instant $t$.
</div>

<br>

<div id="theo">
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta \bar{T}[x]}{\delta x(t)}=-\frac{m\ddot{x}(t)}{\tau}
$
</p>
</div>

<br>

<div id="preuve">
<p style="text-align:center;">
$\displaystyle
\bar T[x]=\frac{1}{\tau}\int_0^\tau \frac{1}{2}m\,\dot x(s)^2\,\mathrm{d}s
$
</p>

L'intégrande ne dépend que de la pente&nbsp;: c'est la **seconde brique**, avec le même dictionnaire et $g(u)=\frac{1}{2}mu^2$, donc $g'(u)=mu$.

Évaluée sur la trajectoire, la quantité qu'il faut dériver est $g'\big(\dot x(s)\big)=m\dot x(s)=p(s)$, la quantité de mouvement&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle \frac{\delta \bar{T}[x]}{\delta x(t)}=-\frac{1}{\tau}\frac{\mathrm{d}}{\mathrm{d} t}\Big(m\dot x(t)\Big)=-\frac{m\ddot{x}(t)}{\tau}
$
</p>

L'annulation du terme de bord traduit ici une hypothèse physique familière&nbsp;: on ne déforme la trajectoire qu'à des instants $t$ strictement compris entre $0$ et $\tau$, les extrémités A et B restant fixées.
</div>

<br>

Or d'après la 2<sup>e</sup> loi de Newton, la trajectoire classique correspond à $m\ddot{x}=-V'(x)$, et d'après ce qui précède, cela entraîne que&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\frac{\delta \bar{V}[x]}{\delta x(t)}=\frac{\delta \bar{T}[x]}{\delta x(t)}
$
</p>
</div>

On en conclut que pour une légère déviation autour de la trajectoire classique, l'énergie potentielle moyenne et l'énergie cinétique moyenne vont varier ensemble et de la même valeur (dans le même sens, quel que soit ce sens)&nbsp;! 

Cela peut se réécrire&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\frac{\delta }{\delta x(t)}(\bar{T}[x]- \bar{V}[x])=0
$
</p>
</div>

La **différence** entre les deux énergies moyennes est *stationnaire* près de la trajectoire classique. 

<br>

### Lagrangien, action et équations d'Euler-Lagrange

On décide alors de donner un nom à cette différence entre énergie cinétique et potentielle&nbsp;: le **lagrangien** $L$.

<div id="def">
<p style="text-align:center;">
$\displaystyle
L=T-V
$
</p>
</div>

L'intégrale du lagrangien sur le temps définit l'**action** $S$.

<div id="def">
<p style="text-align:center;">
$\displaystyle
S=\int_0^\tau L\,\mathrm{d}t
$
</p>
</div>

Ces deux nouvelles grandeurs vont nous permettre de réécrire de manière synthétique ce qu'on a découvert jusque-là.<br>
$\displaystyle S=\int_0^\tau(T-V)\\,\mathrm{d}t = \tau\big(\bar{T}[x]-\bar{V}[x]\big)$, et donc

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\frac{\delta S}{\delta x(t)} = 0
$
</p>

<p style="text-align:center;">C'est le <b>principe de moindre action</b> de Hamilton.</p>
</div>

<br>

<div id="theo">

<b>Équations d'Euler-Lagrange</b>&nbsp;:

Le lagrangien $L$ peut s'écrire comme une fonction à la fois de la position et de la vitesse, $L\big(x(t),\dot{x}(t)\big)$. Le principe de moindre action donne alors&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\partial L}{\partial x}-\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial\dot{x}} = 0
$
</p>

</div>

<br>

<div id="preuve">

Aucun calcul nouveau n'est nécessaire&nbsp;: l'intégrande de $\displaystyle S=\int_0^\tau L\big(x(u),\dot{x}(u)\big)\,\mathrm{d}u$ dépend de la trajectoire à la fois par sa valeur et par sa pente. Par linéarité de $\delta/\delta x(t)$, il suffit d'**additionner les deux briques**&nbsp;: la première appliquée à la dépendance en $x$ (elle fournit $\partial L/\partial x$), la seconde appliquée à la dépendance en $\dot{x}$ (elle fournit $-\frac{\mathrm{d}}{\mathrm{d}t}\,\partial L/\partial\dot{x}$).

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{\delta S}{\delta x(t)}=\frac{\partial L}{\partial x}\bigg|_{t}-\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial\dot{x}}\bigg|_{t}\right)
$
</p>

<details>
<summary>Le même calcul, écrit en entier&nbsp;:</summary>
<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
\frac{\delta S}{\delta x(t)} & = \int_0^\tau \mathrm{d}u\left[\frac{\partial L}{\partial x(u)}\frac{\delta x(u)}{\delta x(t)}+\frac{\partial L}{\partial \dot{x}(u)}\frac{\delta \dot{x}(u)}{\delta x(t)}\right]\\
& = \int_0^\tau \mathrm{d}u\left[\frac{\partial L}{\partial x(u)}\delta(u-t)+\frac{\partial L}{\partial \dot{x}(u)}\frac{\mathrm{d}}{\mathrm{d}u}\delta(u-t)\right]\\
&=\frac{\partial L}{\partial x(t)}+\left[\delta(u-t)\frac{\partial L}{\partial \dot{x}(u)}\right]_{u=0}^{u=\tau}-\int_0^\tau \mathrm{d}u\,\delta(u-t)\frac{\mathrm{d}}{\mathrm{d}u}\frac{\partial L}{\partial\dot{x}(u)}\\
&=\frac{\partial L}{\partial x(t)}-\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial\dot{x}(t)}
\end{aligned}
$
</p>
</details>
</div>

<br>

On introduit aussi la densité lagrangienne $\mathcal{L}$&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle
L=\int \mathrm{d}^3x\,\mathcal{L}
$
</p>

<p style="text-align:center;">
$\displaystyle
S=\int \mathrm{d}t\,\mathrm{d}^3x\,\mathcal{L}
$
</p>
</div>

Plaçons-nous désormais dans un cadre relativiste&nbsp;: le lagrangien dépend maintenant d'une fonction $\phi(x)$ où $x$ est un point de l'espace-temps, et le gradient de $\phi$ est le quadrivecteur $\partial_\mu\phi$. 

L'action devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
S=\int \mathrm{d}^4 x\,\mathcal{L}(\phi,\partial_\mu\phi)
$
</p>

Le principe de moindre action fournit dès lors une version quadrivectorielle des équations d'Euler-Lagrange&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\frac{\delta S}{\delta \phi} = \frac{\partial\mathcal{L}}{\partial \phi}-\partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right) = 0
$
</p>
</div>

<br>

### Pourquoi ça marche&nbsp;: les chemins quantiques

Le principe de moindre action tire sa justification de la mécanique quantique où les particules ne sont plus des particules mais des ondes. La particule allant d'un point A à un point B en empruntant toutes les trajectoires possibles (jusqu'aux plus saugrenues) devient donc une onde affublée d'un facteur de phase $\mathrm{e}^{\mathrm{i}S/\hbar}$ où $S$ est l'action. Une action stationnaire correspond alors à une phase stationnaire.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/tqcchemsuiv.png">
</div>

Lorsqu'on se retrouve à sommer sur toutes les trajectoires possibles, les différents termes vont interférer. L'interférence sera destructive dans l'immense majorité des cas, là où la phase fluctuera fortement d'une trajectoire à l'autre. Au contraire, la trajectoire rendant l'action stationnaire va émerger car toutes les trajectoires voisines auront des phases proches et interféreront constructivement.


{{%notice info "Aparté : la mécanique est une optique (Hamilton, 1834)"%}}

**Deux principes, un seul énoncé**<br>
L'optique géométrique a son principe variationnel, antérieur de deux siècles à celui de Hamilton&nbsp;: un rayon traversant un milieu d'indice $n(x)$ rend stationnaire le **chemin optique** $\int n\\,\mathrm{d}\ell$. C'est le principe de Fermat.

La mécanique a le sien, dû à Maupertuis. Il faut pour l'énoncer changer de contrainte&nbsp;: au lieu de fixer la durée $\tau$, on fixe l'énergie $E$, et l'on ne cherche plus que la **forme** de l'orbite, sans son horaire. La quantité stationnaire est l'**action réduite** $\int p\\,\mathrm{d}\ell$, avec $p=\sqrt{2m(E-V)}$.

Les deux énoncés sont le même énoncé. Il suffit de lire&nbsp;:

<div style="border:solid 3px #E7B586;width:fit-content;margin:auto;padding:0 10px;border-radius:5px;">
<p style="text-align:center;">
$\displaystyle
n(x)=\sqrt{2m\big(E-V(x)\big)}
$
</p>
</div>

Une particule dans un potentiel se comporte exactement comme un rayon dans un milieu dont le potentiel fixe l'indice.

L'indice est purement cinétique  ($n=p=\sqrt{2mT}$). Mais en optique, un indice uniforme ne dévie rien&nbsp;; seul son gradient réfracte, et ce gradient $\boldsymbol{\nabla}n=-m\boldsymbol{\nabla}V/p$ est purement potentiel. L'échelle locale du rayon est fixée par $T$, sa courbure par $V$&nbsp;: les deux se partagent le travail. À $E$ fixé, $T=E-V$ n'est plus une fonctionnelle libre du chemin mais une fonction de la position, et les deux fonctionnelles de Hamilton se réduisent à un seul champ $n(x)$. La stationnarité devient alors géométrique&nbsp;: le chemin optique est une *longueur*, mesurée avec une règle que le potentiel dilate ou contracte, et la trajectoire classique en est la géodésique.

Cette lecture de l'action comme une longueur reviendra telle quelle en partie&nbsp;2, sous la forme relativiste $S=-mc\int\mathrm{d}s$&nbsp;: la particule libre suit une géodésique de l'espace-temps.

**Le pas non franchi**<br>
L'optique géométrique n'est pas fondamentale&nbsp;: c'est l'approximation de l'optique ondulatoire aux courtes longueurs d'onde. Si la mécanique classique est une optique géométrique, elle doit donc être elle aussi l'approximation d'une **mécanique ondulatoire**, et il doit exister une longueur d'onde.

Hamilton n'avait, en 1834, aucune raison de la prendre au sérieux&nbsp;: aucune expérience ne réclamait une ondulation de la matière, et $h$ n'apparaîtrait que soixante-dix ans plus tard. Il a construit l'analogie, l'a jugée profonde, et s'est arrêté là. De&nbsp;Broglie en 1923, puis Schrödinger en 1926 (qui cite Hamilton explicitement) ont franchi le pas dans l'autre sens&nbsp;: partant de l'optique géométrique, remonter à l'équation d'onde dont elle est la limite.

{{%/notice%}}

{{%notice note%}}
Toute cette histoire (Fermat, Huygens, Fresnel, Bernoulli, Maupertuis, Hamilton, Jacobi, de&nbsp;Broglie, Schrödinger, Feynman) est racontée en détail sur la page [Principe de moindre action](../../../meca/action/).
{{%/notice%}}

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\frac{\delta\bar{V}}{\delta x(t)} = \frac{V'}{\tau},
\quad
\frac{\delta\bar{T}}{\delta x(t)} = -\frac{m\ddot{x}}{\tau}
\;\xrightarrow{\ m\ddot{x}\, =\, -V'\ }\;
\frac{\delta}{\delta x(t)}\big(\bar{T} - \bar{V}\big) = 0
$
</p>

<p style="text-align:center;">
$\displaystyle
L = T - V
\;\longrightarrow\;
S = \int_0^\tau L\,\mathrm{d}t
\;\xrightarrow{\ \delta S = 0\ }\;
\frac{\partial L}{\partial x} - \frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial L}{\partial\dot{x}} = 0
$
</p>

<p style="text-align:center;">
$\displaystyle
S = \int\mathrm{d}^4x\,\mathcal{L}(\phi, \partial_\mu\phi)
\;\xrightarrow{\ \delta S = 0\ }\;
\frac{\partial\mathcal{L}}{\partial\phi} - \partial_\mu\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right) = 0
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{chaque chemin} \to \mathrm{e}^{\mathrm{i}S/\hbar}
\;\xrightarrow{\ \text{interférences}\ }\;
\text{seuls les chemins à } S \text{ stationnaire survivent}
$
</p>

<br>

### Pièges

<ul>
<li>«&nbsp;Moindre action&nbsp;» est un abus de langage&nbsp;: l'action est <b>stationnaire</b> le long de la trajectoire classique, pas nécessairement minimale.</li>
<li>Le lagrangien $L = T - V$ n'est pas l'énergie&nbsp;: ne pas le confondre avec $H = T + V$, qui entrera en scène à la partie&nbsp;2 via la transformation de Legendre.</li>
<li>Une dérivée fonctionnelle dérive par rapport à une <b>fonction entière</b>, pas par rapport à un nombre&nbsp;: le résultat dépend du point $t$ où l'on pince la trajectoire.</li>
<li>Le développement de Taylor de $g$ en $\epsilon\,\delta'(y-x)$ est <b>formel</b>&nbsp;: on développe une fonction ordinaire autour d'une distribution, ce qui n'a de sens qu'une fois l'intégration effectuée. La justification propre consiste à déformer $f$ par une fonction test régulière $h$, à écrire $\displaystyle \delta F=\int \frac{\delta F}{\delta f(y)}\,h(y)\,\mathrm{d}y$, puis à resserrer $h$ vers un pic. Le $\delta$ de Dirac n'est que la limite commode de ce procédé — commodité qu'on paiera plus tard, quand les produits de distributions au même point deviendront les divergences à renormaliser.</li>
<li>Les termes de bord des intégrations par parties ne disparaissent pas par magie, et ne disparaissent pas toujours&nbsp;: ici ils s'annulent parce qu'on ne pince la trajectoire qu'à l'<b>intérieur</b> de l'intervalle, les extrémités A et B étant fixées. Si au contraire une extrémité est laissée libre, le terme de bord survit et impose une <b>condition aux limites naturelle</b>, $\partial g/\partial f'=0$ à cette borne&nbsp;: la condition n'est plus choisie, elle est <i>produite</i> par le principe variationnel lui-même.</li>
<li>Hamilton et Maupertuis ne fixent pas la même chose. Le principe de Hamilton fixe la <b>durée</b> $\tau$ et détermine la trajectoire complète, horaire compris&nbsp;; celui de Maupertuis fixe l'<b>énergie</b> $E$ et ne détermine que la forme géométrique de l'orbite. Les deux sont conjugués par une transformation de Legendre, $W=S+E\tau$ (voir partie&nbsp;2), et ne sont pas interchangeables&nbsp;: comparer des chemins à $E$ constant impose de laisser varier leur durée.</li>
<li>Le principe de moindre action n'est pas un axiome tombé du ciel&nbsp;: il hérite sa légitimité des interférences quantiques entre chemins, et c'est cette lecture qui reviendra avec les intégrales de chemin.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Le langage est en place&nbsp;: lagrangien, action, stationnarité. La partie suivante entre dans le vif en posant la brique élémentaire de toute la théorie quantique des champs&nbsp;: l'oscillateur harmonique, ses opérateurs d'échelle, et la découverte que créer un quantum d'énergie, c'est déjà créer une particule.
{{%/notice%}}


<br>
<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc1">Chapitre suivant</a></td>
    </tr>
</table>
</div>
