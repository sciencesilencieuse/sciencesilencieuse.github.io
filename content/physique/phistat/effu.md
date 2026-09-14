+++
title = "Effusivité"
date = 2021-03-06T14:20:50+01:00
weight = 9
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

ul
{
margin-top:-0.5em;
}

td
{
text-align:center;
}

th
{
text-align:center;
}
</style>


# Effusivité

Pourquoi du carrelage va nous paraître froid au toucher au contraire d'une moquette&nbsp;?

Car la température de contact ne sera pas la même&nbsp;! Et comment détermine-t-on cette température de contact&nbsp;? Grâce à l'effusivité.

Considérons un seul semi-espace $x>0$ initialement à $T_i$. À $t=0$, la température de la surface $x=0$ est brusquement imposée à $T_s$.<br>
L’équation de la chaleur s'écrit alors 

$$\frac{\partial T}{\partial t}=\alpha\\,\frac{\partial^2 T}{\partial x^2}$$

avec $T(x,0)=T_i$ et $T(0,t)=T_s$.<br>
Elle admet pour solution la fonction erreur ($\operatorname{erf}(x)=\frac{2}{\sqrt{\pi}} \int_0^x \mathrm{e}^{-t^2} \mathrm{~d} t$)&nbsp;:

$$T(x,t)=T_s+(T_i-T_s)\\,\mathrm{erf}\\!\left(\frac{x}{2\sqrt{\alpha t}}\right).$$

Le flux à la surface vaut&nbsp;:

$$q(t)=-\lambda\\,\left.\frac{\partial T}{\partial x}\right|_{x=0}
= \frac{\lambda}{\sqrt{\pi\\,\alpha\\,t}}\\,(T_s-T_i)$$

On voit apparaître le facteur $\lambda/\sqrt{\alpha}$. On définit l’**effusivité** thermique comme&nbsp;:

<div style="position:relative;margin:auto;width:fit-content;border:solid 2px red;padding:0 20px 0 20px;border-radius:10px">

$$ e \\;\equiv\\; \frac{\lambda}{\sqrt{\alpha}} \\;=\\; \sqrt{\lambda\\,\rho\\,c} $$

</div>

Unité&nbsp;: $e$ en $\pu{J m^-2 K^-1 s^{-1/2}}$

Pour un échelon de température à la surface d’un semi-espace, on a alors&nbsp;:

<div style="position:relative;margin:auto;width:fit-content;border:solid 2px blue;padding:0 20px 0 20px;border-radius:10px">

$$ q(t)=\dfrac{e}{\sqrt{\pi\\,t}}\\,(T_s-T_i) $$

</div>

L'effusivité mesure la « capacité à échanger rapidement de la chaleur lors d’un contact transitoire ».<br>

Maintenant, mettons en contact deux semi-espaces 1 (pour $x<0$) et 2 (pour $x>0$), initialement à $T_{1i}$ et $T_{2i}$. On cherche la température d’interface $T_{s}$ après contact.

Pour chacun, la situation locale est équivalente à un semi-espace soumis à une température de surface imposée $T_{s}$, donc les flux (positifs vers l’interface) sont&nbsp;:

$$
\begin{aligned}
q_1(t)&=\frac{e_1}{\sqrt{\pi t}}\\,(T_{s}-T_{1i})\\\\
q_2(t)&=\frac{e_2}{\sqrt{\pi t}}\\,(T_{2i}-T_{s}).
\end{aligned}
$$

La conservation impose $q_1=q_2$ (ce qui vaut pour tout $t>0$ car les deux flux décroissent en $t^{-1/2}$). 

On obtient alors&nbsp;:

$$e_1\\,(T_{s}-T_{1i})=e_2\\,(T_{2i}-T_{s})$$
$$\Downarrow$$

<div style="position:relative;margin:auto;width:fit-content;border:solid 2px red;padding:0 20px 0 20px;border-radius:10px">

$$ T_{s}=\frac{e_1\\,T_{1i}+e_2\\,T_{2i}}{e_1+e_2}$$

</div>

Si $e_2\gg e_1$ (inox vs. peau par exemple), alors $T_{s}\approx T_{2i}$. L’interface reste proche de la température du matériau « effusif », d’où la sensation de froid. 

Dans le cas d'un contact carrelage/peau, on a $e_\mathrm{carrelage}/e_\mathrm{peau}\approx 1,4$, ce qui donne $T_s\approx 25^\circ\mathrm{C}$ pour un carrelage à $20^\circ\mathrm{C}$ et une peau à $33^\circ\mathrm{C}$, alors qu'un parquet caractérisé par $e_\mathrm{parquet}/e_\mathrm{peau}\approx 0,36$ donnerait une température de contact de $30^\circ\mathrm{C}$ dans les mêmes conditions.

<u>Rq</u>&nbsp;: 
- on constate que $T_s$ est indépendant du temps (cela reste valable tant que l'on peut continuer à considérer les demi-espaces comme infinis).
- la division par racine de $t$ peut sembler pathologique puisque $q(t)\to\infty$ quand $t\to0^+$, mais cette divergence est intégrable $Q(t)=\int_0^t q(\tau)\\,\mathrm{d}\tau
=\frac{2e}{\sqrt{\pi}}\\;\Delta T\\,\sqrt{t}\\;\xrightarrow[t\to 0^+]{}\\;0$. L'énergie échangée reste finie et tend vers zéro.

Une résistance de contact $R_c$ (modélisant une éventuelle rugosité, ou une couche d'air ou d'humidité) a pour effet de faire chuter le flux et ainsi décaler la température de contact. On peut traiter ce cas facilement avec des impédances en série.

En effet, on peut introduire les impédances $Z(t)$&nbsp;:

$$q=\frac{e}{\sqrt{\pi t}}\\,(T_{s}-T_i)
\\;\Longleftrightarrow\\;
T_{s}-T_i=\underbrace{\frac{\sqrt{\pi t}}{e}}_{Z(t)}\\,q$$

Cela permet d'écrire un équivalent à la loi d'Ohm où les impédances $Z_1$, $Z_2$ et $R_c$ s'ajouteraient en série&nbsp;:

$$\Delta T_i
= (T_{1i}-T_{2i})
= Z_1\\,q + R_c\\,q + Z_2\\,q
= \big(Z_1+R_c+Z_2\big)\\,q $$

On en déduit&nbsp;:

<div style="position:relative;margin:auto;width:fit-content;border:solid 2px blue;padding:0 20px 0 20px;border-radius:10px">

$$
q(t)=\frac{\Delta T_i}{R_c+\sqrt{\pi t}\Big(\tfrac{1}{e_1}+\tfrac{1}{e_2}\Big)}
$$

</div>

Les températures de surface côté 1 et côté 2 sont alors&nbsp;:

$$\boxed{\\;
\begin{aligned}
T_{s1}(t)&=T_{1i}-Z_1\\,q
= T_{1i}-\frac{\sqrt{\pi t}}{e_1}\\,q(t)\\\\
T_{s2}(t)&=T_{2i}+Z_2\\,q
= T_{2i}+\frac{\sqrt{\pi t}}{e_2}\\,q(t)
\end{aligned}}
$$

Et le saut à travers le contact vaut&nbsp;:

$$
\boxed{\\;T_{s1}(t)-T_{s2}(t)=R_c\\,q(t)\\;}$$

- si $t\to0^+$&nbsp;:<br>$q(0^+)=\dfrac{\Delta T_i}{R_c}$ est fini et $T_{s1} (0^+)\to T_{1i},\\;T_{s2}(0^+)\to T_{2i}$. La quasi-totalité de la chute de température se fait à travers la résistance de contact&nbsp;; les surfaces des deux solides restent proches de leurs températures initiales.
- si $t\to \infty$&nbsp;:<br>
le terme $\propto\sqrt{t}$ domine&nbsp;:
$q(t)\sim \frac{\Delta T_i}{\sqrt{\pi t}\big(\tfrac{1}{e_1}+\tfrac{1}{e_2}\big)}
=\frac{e_1e_2}{e_1+e_2}\\,\frac{\Delta T_i}{\sqrt{\pi t}}$.  $T_1$ et $T_2$ coïncident et tendent vers la “température de contact” sans résistance&nbsp;: $T_s=\frac{e_1T_{1i}+e_2T_{2i}}{e_1+e_2}$.
- on définit un temps charnière $t_c$ en égalant $R_c$ et $Z_1(t_c) +Z_2(t_c)$. Cela donne $
t_c=\frac{R_c^{\\,2}}{\pi}\left(\frac{e_1e_2}{e_1+e_2}\right)^{\\!2}$.

Exemple d'un contact peau sur carrelage&nbsp;:
- peau&nbsp;: $e_1\simeq \pu{1400 J m^-2  K^-1  s^{-1/2}}$, $T_{1i}=33^\circ\mathrm{C}$
- carrelage : $e_2\simeq \pu{2000 J m^-2  K^-1  s^{-1/2}}$, $T_{2i}=20^\circ\mathrm{C}$
- contact sec modérément appuyé&nbsp;: $R_c=\pu{3,0E-3 m^2 K W^-1}$

On a donc&nbsp;: $\Delta T_i=13\ \mathrm{K}$, et $t_c\approx 1,9\ \mathrm{s}$.



<table>
  <thead>
    <tr>
      <th>t</th>
      <th>q(t) <small class="units">[kW·m<sup>−2</sup>]</small></th>
      <th>T<sub>s1</sub> <small class="units">[°C]</small></th>
      <th>T<sub>s2</sub> <small class="units">[°C]</small></th>
      <th>T<sub>s1</sub> − T<sub>s2</sub> <small class="units">[K]</small></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 ms</td>
      <td class="num">4,2</td>
      <td class="num">33</td>
      <td class="num">20</td>
      <td class="num">13</td>
    </tr>
    <tr>
      <td>0,1 s</td>
      <td class="num">3,5</td>
      <td class="num">32</td>
      <td class="num">21</td>
      <td class="num">11</td>
    </tr>
    <tr>
      <td>1 s</td>
      <td class="num">2,5</td>
      <td class="num">30</td>
      <td class="num">22</td>
      <td class="num">7,6</td>
    </tr>
    <tr>
      <td>10 s</td>
      <td class="num">1,3</td>
      <td class="num">28</td>
      <td class="num">24</td>
      <td class="num">4,0</td>
    </tr>
  </tbody>
</table>