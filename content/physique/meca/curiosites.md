+++
title = "Curiosités en mécanique terrestre"
date = 2026-11-18T10:00:00+01:00
weight = 6
css = "meca.css"
+++

# Curiosités en mécanique terrestre

Quelques questions simples en apparence sur la Terre, la Lune et le Soleil, et des réponses qui surprennent&nbsp;: traverser la Terre par un tunnel, comparer les marées dues à la Lune et au Soleil, et voir tourner la Terre avec un pendule.

## Tunnels traversant la Terre

Petits exercices de niveau licence/prépa traitant de voyages autour ou à travers la Terre.

{{< youtube-plus id="QVibTnN4rpY" ratio="16x9" width="800" shadow=true rounded=true >}}

## Forces de marée

De manière "amusante", le ratio des contributions de la Lune et du Soleil aux forces de marée sur Terre est donné par le ratio de leurs masses volumiques respectives&nbsp;:

$$\frac{F_\text{marée,Lune}}{F_\text{marée,Soleil}}\approx\frac{\rho_\text{Lune}}{\rho_\text{Soleil}}$$

En effet, les forces de marée exercées par un astre sur la Terre sont proportionnelles au gradient de son champ gravitationnel, donc à $\displaystyle\frac{M_\text{Astre}}{d_\text{Astre-Terre}^3}$ .

Mais on sait aussi que la Lune et le Soleil sont à peu près vus sous le même diamètre apparent de 30' depuis la Terre (un indice parmi d'autres : les éclipses solaires parfois annulaires, parfois totales). Par conséquent, les distances des deux astres sont dans le rapport de leurs rayons (Thalès)&nbsp;:

$$\frac{d_\text{Terre-Lune}}{d_\text{Terre-Soleil}}\approx\frac{r_\text{Lune}}{r_\text{Soleil}}$$

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/solterrelune.png" style="box-shadow:none;background:none;">
</div>


On a donc bien au final&nbsp;:

$$
\begin{aligned}
\frac{F_\text{marée,Lune}}{F_\text{marée,Soleil}} &=\frac{M_\text{Lune}}{d_\text{Lune-Terre}^3}\left/\frac{M_\text{Soleil}}{d_\text{Soleil-Terre}^3}\right.\\\\
&=\frac{M_\text{Lune}}{M_\text{Soleil}}\times \frac{d_\text{Soleil-Terre}^3}{d_\text{Lune-Terre}^3}\\\\
&\approx \frac{M_\text{Lune}}{M_\text{Soleil}}\times \frac{r_\text{Soleil}^3}{r_\text{Lune}^3}\\\\
&=\frac{M_\text{Lune}}{r_\text{Lune}^3}\left/\frac{M_\text{Soleil}}{r_\text{Soleil}^3}\right.\\\\
&=\frac{\rho_\text{Lune}}{\rho_\text{Soleil}}
\end{aligned}
$$

Et avec $\rho_\text{Lune} = \pu{3,3 g\*cm-3}$ et $\rho_\text{Soleil} = \pu{1,4 g*cm-3}$, on retrouve que la contribution du Soleil aux forces de marée représente environ 42% (comme par hasard) de celle de la Lune.

## Le pendule de Foucault

En 1851, Léon Foucault suspend sous la coupole du Panthéon une sphère de 28&nbsp;kg au bout d'un fil de 67&nbsp;m. Le pendule oscille dans un plan, et au fil des heures ce plan tourne lentement par rapport au sol. C'est en réalité le sol qui tourne sous le pendule&nbsp;: pour la première fois, on voit tourner la Terre sans regarder le ciel.

Au pôle Nord, l'explication est immédiate. Le plan d'oscillation reste fixe par rapport aux étoiles, et le sol tourne sous lui en un jour sidéral, 23&nbsp;h&nbsp;56. Mais à Paris le plan met environ 31&nbsp;h&nbsp;47 à faire un tour, et à l'équateur il ne tourne pas du tout. D'où vient ce ralentissement&nbsp;?

La rotation de la Terre est décrite par un vecteur $\vec\Omega$, dirigé selon l'axe des pôles. Au lieu du pendule, à la latitude $\lambda$, on le décompose en deux composantes&nbsp;:

- une composante **verticale** $\Omega\sin\lambda$&nbsp;: elle fait pivoter le sol autour de la verticale du lieu, comme un manège&nbsp;;
- une composante **horizontale** $\Omega\cos\lambda$, dirigée vers le nord&nbsp;: elle fait basculer le sol autour d'un axe horizontal, sans le faire pivoter autour de la verticale.

Seule la première fait tourner le sol sous le pendule. Le plan d'oscillation tourne donc par rapport au sol à la vitesse $\Omega\sin\lambda$, et fait un tour complet en

$$T=\frac{23\text{ h }56}{\sin\lambda}.$$

Faites varier la latitude&nbsp;: au pôle, la composante verticale est maximale et $T$ vaut un jour sidéral&nbsp;; à l'équateur, la rotation terrestre est entièrement horizontale et le plan ne tourne plus. Dans l'hémisphère sud, $\sin\lambda$ est négatif et le plan tourne dans l'autre sens.

<div class="anim" data-anim="foucault"></div>
{{< script "js/foucault.js" >}}

On retrouve le même facteur dans la [force de Coriolis](../coriolis/)&nbsp;: c'est sa partie horizontale, proportionnelle à $\Omega\sin\lambda$, qui dévie peu à peu la masse du pendule à chaque oscillation.

<div class="encadre">
<div class="encadre-titre">«&nbsp;Vous êtes invités à venir voir tourner la Terre&nbsp;»</div>

Foucault fait sa première expérience en janvier 1851, dans la cave de sa maison, avec un fil de 2&nbsp;m. Le 3 février, il invite les savants parisiens par ce carton&nbsp;: «&nbsp;Vous êtes invités à venir voir tourner la Terre, dans la salle méridienne de l'Observatoire de Paris&nbsp;». Le pendule du Panthéon, présenté au public en mars, en est la version monumentale&nbsp;: avec son fil de 67&nbsp;m, il bat en 16 secondes, et une pointe fixée sous la sphère trace un sillon dans un lit de sable qui se décale à chaque passage.

</div>

