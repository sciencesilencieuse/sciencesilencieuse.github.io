+++
title = "Arcs électriques"
date = 2021-03-06T14:20:50+01:00
weight = 2
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
</style>


# Arcs électriques

Le champ disruptif d'un isolant, ou plutôt sa rigidité diélectrique, désigne la valeur de champ électrique maximale que le milieu peut supporter avant le déclenchement d’un arc électrique, ou claquage.

Pour l'air, la valeur fréquemment admise est de $\pu{36 kV/cm}$ dans l'air sec et tombe à $\pu{10 kV/cm}$ pour un air saturé en humidité. Cela signifie qu'il faut, dans l'air sec, une tension d'au moins $\pu{36 kV}$ entre deux électrodes séparées d'un centimètre pour qu'une étincelle se crée entre elles.

Comment retrouver cet ordre de grandeur à partir de considérations physiques simples&nbsp;?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:640px;max-width:100%;margin-bottom:-40px;margin-top:-40px;border-radius:10px;">
<img src="/eclairredon.png" style="box-shadow:none;background:none;border-radius:10px;">
</div>

<br>

Un arc électrique est un conduit d'air ionisé, du plasma (le 4<sup>e</sup> état de la matière). Son origine&nbsp;? 

Un champ électrique suffisamment costaud.

Imaginons qu'un électron soit arraché à une molécule d'air. Il est alors accéléré par le champ électrique ambiant et gagne ainsi de l'énergie cinétique. Si au moment de rencontrer une nouvelle molécule, l'électron a atteint une énergie suffisante pour la ioniser, on peut se retrouver avec une cascade d'ionisations successives&nbsp;!

Le secret est donc d'avoir un champ suffisant pour donner à un électron une énergie cinétique de l'ordre de grandeur de l'énergie de ionisation d'une molécule (autour de la dizaine d'électronvolts) sur une distance correspondant à son **libre parcours moyen** dans l'air.

<br>

<div id="preuve">

Faisons le point sur le libre parcours moyen dans un gaz de particules identiques de rayon $d$ et de densité $n$&nbsp;:

La **section efficace de collision** $\sigma$ vaut $\pi d^2$.
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/seceff.png" style="box-shadow:none;background:none;">
</div>
La valeur de la vitesse relative entre deux particules vaut&nbsp;:
<div id="grosseformule">

$$
\begin{aligned}
v_{rel}&=\sqrt{\vec{v}\_{rel}\cdot \vec{v}\_{rel}}\\\\
&=\sqrt{\left(\vec{v}\_2-\vec{v}\_1\right)\cdot\left(\vec{v}\_2-\vec{v}\_1\right)}\\\\
&=\sqrt{\vec{v}\_2\cdot\vec{v}\_2+\vec{v}\_1\cdot\vec{v}\_1-2\vec{v}\_2\cdot\vec{v}\_1}
\end{aligned}
$$

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:410px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/vreleclair.png" style="box-shadow:none;background:none;">
</div>

Pour obtenir la vitesse relative moyenne, on va supposer que les vitesses des particules se répartissent aléatoirement selon une certaine distribution de probabilité.

<div id="grosseformule">

$$
\begin{aligned}
\overline{v_{rel}}&=\sqrt{\overline{\vec{v}\_2\cdot\vec{v}\_2}+\overline{\vec{v}\_1\cdot\vec{v}\_1}-2\\,{\cancel{\overline{\vec{v}\_2\cdot\vec{v}\_1}}}}\\\\
&= \sqrt{\overline{\vec{v}\_2^2}+\overline{\vec{v}\_1^2}}\\\\
&= \sqrt{2}\overline{v}
\end{aligned}
$$

</div>

On suppose en effet que les vitesses des particules 1 et 2 ne sont pas corrélées (${\vec{v}\_2\cdot\vec{v}\_1}=0$) et que leurs valeurs moyennes sont les mêmes ($\overline{\vec{v}\_2^2}=\overline{\vec{v}\_2^2}=\overline{v}^2$).

Le nombre de collisions d'une particule pendant un laps de temps $\Delta t$ peut être estimé comme le nombre moyen de fois que le centre de masse d'une particule se trouve dans le volume balayé par la section efficace $\sigma$ pendant $\Delta t$, c'est-à-dire sur une distance $\overline{v\_{rel}}\Delta t$.
<div style="position:relative;margin-left:auto;margin-right:auto;width:480px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/volcross.png" style="box-shadow:none;background:none;">
</div>

Le volume en question vaut $V=\sigma \\,\overline{v\_{rel}}\\,\Delta t$.

Et le nombre de particules rencontrées vaut donc $nV=n\\,\sigma\\, \overline{v\_{rel}}\\,\Delta t= \sqrt{2}\\,n\\,\sigma\\, \overline{v}\\,\Delta t= \sqrt{2} \\,n\\,\pi \\,d^2  \\,\overline{v}\\,\Delta t$.

Le **libre parcours moyen** $\lambda$ va alors correspondre à la distance parcourue pendant $\Delta t$ divisée par le nombre de collisions ayant eu lieu pendant ce laps de temps.<br>
D'où&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\lambda &= \frac{\cancel{\overline{v}\Delta t}}{\sqrt{2}n\sigma {\cancel{\overline{v}\Delta t}}}\\\\
&=\frac{1}{\sqrt{2}n\sigma}\\\\
&=\frac{1}{\sqrt{2}n\pi d^2}
\end{aligned}
$$

</div>

Le libre parcours moyen ne dépend donc que de la taille des particules et de leur densité, pas de leur vitesse relative&nbsp;!

Pour un gaz à pression $P$ et température $T$, on peut utiliser en première approximation la relation des gaz parfaits pour obtenir la densité de particules&nbsp;:<br>
$n=P/k_B T$. 

En remplaçant dans $\lambda$, on obtient&nbsp;:

<div id="grosseformule">

$$
\lambda = \frac{k_B T}{\sqrt{2}P\pi d^2}
$$

</div>

Une molécule de diazote a un diamètre $d=\pu{0,37 nm}$ et pour une pression $P=\pu{1 bar}$ et une température $T = \pu{293 K}$, on obtient un libre parcours moyen $\lambda\approx \pu{66 nm}$. 

On peut remarquer que c'est près de 200 fois plus grand que la distance moyenne entre particules donnée par $1/n^{\frac{1}{3}}=\left(\frac{k_B T}{P}\right)^{\frac{1}{3}}\approx \pu{3,4 nm}$&nbsp;!

Pour vérifier, on simule un gaz idéal dans un cube de 100&nbsp;nm de côté avec des conditions aux limites périodiques contenant environ 24&thinsp;000 molécules considérées comme des sphères dures de diamètre 0,37&nbsp;nm et dont la vitesse est tirée dans la distribution de Maxwell-Boltzmann pour une température de 300&nbsp;K. On suit la trajectoire d'une molécule particulière tracée en rouge. Après 30 collisions, la moyenne des libres parcours est de 68&nbsp;nm.


<iframe src="/plotly/snapshot.html"
        style="width:100%; height:650px;  border:none; border-radius:30px;"
        loading="lazy"
        title="Trajectoire moléculaire interactive">
</iframe>

</div>

<br>

Pour un électron, on peut reprendre la formule du libre parcours moyen en modifiant seulement un peu la section efficace puisque $\sigma=\pi\left(r\_\text{molécule}+r\_\text{électron}\right)^2\approx \pi \left(r\_\text{molécule}\right)^2 = \pi d^2 /4$. 

Et donc $\lambda= \frac{2\sqrt{2}k_B T}{P\pi d^2}\approx 0,27 \text{ μm}$.

Notre électron devant récupérer une énergie d'environ $\pu{20 eV}$ sur la distance $\lambda$ pour réussir à ioniser la prochaine molécule de diazote rencontrée, le champ doit donc être de $\pu{20 V}/\lambda$, soit à peu près $\pu{20 V}$ pour $0,27 \text{ μm}$ $\rightarrow$ $0,74\text{ MV/cm.}$ C'est plus d'un ordre de grandeur au-dessus de ce qu'on aurait aimé obtenir 😢.

Une des raisons possibles de cet écart est notre trop grand optimisme quant à l'efficacité des collisions&nbsp;; il est en effet fort peu probable qu'un électron parvienne à ioniser systématiquement chaque molécule qu'il rencontre, en particulier avec une énergie à peine suffisante. 

Cela revient au final à surestimer la section efficace de collision. Penchons-nous alors sur la littérature pour trouver une valeur plus réaliste...

Le graphique suivant rapporte un tas de sections efficaces différentes pour des collisions électron-diazote donnant lieu à des rotations, des vibrations, ou (et c'est ce qui nous intéresse ici) des ionisations&nbsp;:


<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/crosssec.png" style="box-shadow:none;background:none;">
</div>

<p style="font-size:0.9em;text-align:center;">
Y. Itikawa et al. <a href="https://srd.nist.gov/jpcrdreprint/1.555762.pdf">Cross Sections for Collisions of Electrons and Photons with Nitrogen Molecules</a>, <i>Journal of Physical and Chemical Reference Data</i> <b>15</b>, 985 (1986)
</p>

<br>

D'après le graphique, l'énergie minimale que doit atteindre l'électron pour obtenir la ionisation du diazote semble être un peu supérieure à $\pu{20 eV}$, et la section efficace associée vaut approximativement $\pu{4e-17 cm2}$. 

Cela nous donne un libre parcours moyen de $\frac{1}{\sqrt{2}n\sigma}=7\text{ μm}$, largement supérieur à notre prédiction initiale&nbsp;!<br>
Le champ électrique correspondant vaut, roulement de tambour... $20\text{ eV}/7 \text{ μm}\approx\pu{30 kV/cm}$. Youpi&nbsp;!


