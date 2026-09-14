+++
title = "Mécanique"
date = 2021-03-06T14:20:50+01:00
weight = 1
chapter = false
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
</style>


# Mécanique

## Énergie cinétique et travail

Une approche historique sur l'émergence du concept d'énergie en mécanique, de Descartes à Einstein.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube ivc3-Tt56Uo>}}
</div>

Sources :

> Bevilacqua, F. (2003). “An Historico-Critical Account of Potential Energy: Is It an Energy of Form or an Energy of Position?”. The Physics Teacher. 41 (8): 466–472<br>
> Karam, R. (2019). “Understanding energy as a subtle concept: A model for teaching and learning energy”. American Journal of Physics. 87 (7): 495–501


<br>

## Pourquoi une énergie cinétique en $v^2$&nbsp;?

Trois démonstrations de la formule de l'énergie cinétique.

Je trouve la deuxième (celle de Johann Bernoulli) fabuleuse d'intuition géométrique (elle utilise l'[escargot de Pythagore](https://youtu.be/2Ea1hh81dds)).
<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube 3a2qOozWpr0>}}
</div>

Sources :

> Prentis, J. J. (2005). “Why is the energy of motion proportional to the square of the velocity?”. American Journal of Physics. 73 (8): 701–707<br>
> Maimon, R. (2011). “Why does kinetic energy increase quadratically, not linearly, with speed?”. Physics Stack Exchange. [🌐](https://physics.stackexchange.com/questions/535/why-does-kinetic-energy-increase-quadratically-not-linearly-with-speed/14752#14752)

<br>

## Lagrange et Hamilton

Les objets de la mécanique classique dans sa formulation newtonienne sont des vecteurs à 3 dimensions qui évoluent dans le bon vieil espace physique euclidien $\mathbb{R}^3$. 

Mais la fin du 18<sup>e</sup> et la première moitié du 19<sup>e</sup> siècle ont vu naître de nouvelles formulations de la mécanique où l'arène même dans laquelle s'ébattent les objets physiques étudiés est chamboulée. On peut littéralement parler de nouvelles façons de voir.

Souhaitant s'affranchir de la géométrie (quel souhait étrange), **Lagrange** vise une approche purement analytique (il ventait l'absence de tout schéma dans son manuel de mécanique...). Son idée centrale fut de basculer de l'étude de $N$ systèmes comme $N$ vecteurs dans $\mathbb{R}^3$ à un seul système composite, un seul vecteur, évoluant dans $\mathbb{R}^{3N}$. Toute configuration des $N$ systèmes devient un unique point dans l'espace $\mathbb{R}^{3N}$ appelé alors **espace des configurations**. Et l'évolution de l'ensemble des $N$ objets dessine un chemin unique dans l'espace des configurations.

**Hamilton** souhaite, lui, retrouver la source géométrique de la mécanique mais tout en conservant une approche analytique. L'arène d'Hamilton ne doit plus seulement décrire la position du système mais son état physique entier, ce qui nécessite de savoir comment le système bouge. On a besoin pour cela de l'**espace des phases** dont chaque point informe à la fois de la position *et* de la quantité de mouvement de chacun des $N$ objets du système. L'espace des phases est donc de dimension $2\times 3N$&nbsp;!

<div style="position:relative;margin-left:auto;margin-right:auto;margin-top:2em;width:fit-content;">
<ul>
<li> <a href="./action"><b style="font-size:1.2em;">Panorama du principe de moindre action</b></a></li>
<br>
<li> <a href="./hamilton"><b style="font-size:1.2em;">De Newton à Hamilton en sautant Lagrange</b></a></li>
</ul>
</div>

<br>

## [Chute libre et paraboles](./paraboles)

Étudier la chute libre, c'est [jouer avec des paraboles](./paraboles).

<br>

## [Force de Coriolis](./coriolis)

La force de Coriolis n'est pas une vraie force... Elle traduit juste la galère d'aller droit dans un référentiel tournant.<br>
Comprendre cet effet permet d'expliquer les rotations des masses d'air cycloniques et anticycloniques ou encore d'en savoir plus sur ces troyens qui peuplent l'orbite de Jupiter.

<br>

## Tunnels traversant la Terre

Petits exercices de niveau licence/prépa traitant de voyages autour ou à travers la Terre.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube QVibTnN4rpY>}}
</div>

<br>

## Forces de marée

De manière "amusante", le ratio des contributions de la Lune et du Soleil aux forces de marée sur Terre est donné par le ratio de leurs masses volumiques respectives&nbsp;:

$$\frac{F_\text{maréee,Lune}}{F_\text{maréee,Soleil}}\approx\frac{\rho_\text{Lune}}{\rho_\text{Soleil}}$$

En effet, les forces de marée exercées par un astre sur la Terre sont proportionnelles au gradient de son champ gravitationnel, donc à $\displaystyle\frac{M_\text{Astre}}{d_\text{Astre-Terre}^3}$ .

Mais on sait aussi que la Lune et le Soleil sont à peu près vu sous le même diamètre apparent de 30' depuis la Terre (un indice parmi d'autres : les éclipses solaires parfois annulaires, parfois totales). Par conséquent, les distances des deux astres sont dans le rapport de leurs rayons (Thalès)&nbsp;:

$$\frac{d_\text{Terre-Lune}}{d_\text{Terre-Soleil}}\approx\frac{r_\text{Lune}}{r_\text{Soleil}}$$

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/solterrelune.png" style="box-shadow:none;background:none;">
</div>


On a donc bien au final&nbsp;:

$$
\begin{aligned}
\frac{F_\text{maréee,Lune}}{F_\text{maréee,Soleil}} &=\frac{M_\text{Lune}}{d_\text{Lune-Terre}^3}\left/\frac{M_\text{Soleil}}{d_\text{Soleil-Terre}^3}\right.\\\\
&=\frac{M_\text{Lune}}{M_\text{Soleil}}\times \frac{d_\text{Soleil-Terre}^3}{d_\text{Lune-Terre}^3}\\\\
&\approx \frac{M_\text{Lune}}{M_\text{Soleil}}\times \frac{r_\text{Soleil}^3}{r_\text{Lune}^3}\\\\
&=\frac{M_\text{Lune}}{r_\text{Lune}^3}\left/\frac{M_\text{Soleil}}{r_\text{Soleil}^3}\right.\\\\
&=\frac{\rho_\text{Lune}}{\rho_\text{Soleil}}
\end{aligned}
$$

Et avec $\rho_\text{Lune} = \pu{3,3 g\*cm-3}$ et $\rho_\text{Soleil} = \pu{1,4 g*cm-3}$, on retrouve que la contribution du Soleil aux forces de marée représente environ 42% (comme par hasard) de celle de la Lune. 

