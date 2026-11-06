+++
title = "Épistémique vs. ontique"
date = 2021-03-06T14:20:50+01:00
weight = 3
chapter = false
hidden = false
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
#grosseformule
{
    overflow-x: auto;
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
.legende
{
    text-align: center;
    font-size: 0.9em;
    color: #64748b;
    font-style: italic;
    margin-top: -0.6em;
}
.tableau-large
{
    overflow-x: auto;
}
.tableau-large table
{
    width: auto;
    margin: 0 auto;
}
#screen
{
    display: block;
    margin: 20px auto;
    width: min(800px, 100%);
    height: auto;
}
</style>


# Épistémique vs. ontique

En mécanique quantique, l'évolution d'un système isolé est **unitaire**&nbsp;: elle est décrite par un opérateur qui conserve la norme du vecteur d'état, c'est-à-dire la probabilité totale. Cette dynamique, gouvernée par l'**équation de Schrödinger**, est continue, réversible et entièrement **déterministe**.

Dès qu'une **mesure** intervient, pourtant, deux autres règles prennent le relais. La **règle de Born** donne les probabilités des différents résultats possibles, et le **postulat de réduction** (ou de projection) dit ce que devient l'état&nbsp;: il «&nbsp;s'effondre&nbsp;», de façon aléatoire et irréversible, sur l'état correspondant au résultat obtenu, si bien qu'une mesure répétée immédiatement redonne le même résultat.

Malgré ce clivage, ce cadre théorique a révolutionné notre compréhension du monde et propulsé des avancées technologiques spectaculaires[^1].

[^1]: Description succincte des principes de la mécanique quantique dans son interprétation «&nbsp;classique&nbsp;» [**ici**](../fondations).

<canvas id="screen" width="800" height="300"></canvas>
<script src="/js/interf.js"></script>
<p class="legende">Des particules envoyées une à une à travers deux fentes&nbsp;: chaque impact sur l'écran est aléatoire (règle de Born), mais leur accumulation dessine les franges d'interférence prévues par l'évolution continue de l'onde (équation de Schrödinger).</p>

Réconcilier ces deux modes d'évolution, l'un continu et réversible, l'autre discontinu, irréversible et intrinsèquement aléatoire, reste l'un des défis conceptuels majeurs de la physique moderne&nbsp;: c'est le **problème de la mesure**. La simple question «&nbsp;qu'est-ce que mesurer un système&nbsp;?&nbsp;» n'a d'ailleurs, à ce jour, pas de réponse claire, loin de là.

Au cœur de ce problème se trouve une question en apparence simple&nbsp;: **que représente l'état quantique $\psi$&nbsp;?** Est-ce un objet physique, aussi réel qu'un champ électrique, ou seulement l'expression de ce que nous savons du système&nbsp;?


## Ontique ou épistémique&nbsp;?

### Deux grandes familles

Une partie de la communauté scientifique a choisi d'esquiver la question en décrétant que l'appareil théorique n'est qu'une machinerie performante pour prédire les résultats des expériences, et rien de plus&nbsp;: le reste ne serait que spéculation philosophique. Cette approche **instrumentaliste** n'attribue aucune réalité à l'état quantique, qui n'est qu'un outil de calcul. Elle a longtemps servi de canon à l'enseignement, dans le sillage de l'«&nbsp;école de Copenhague&nbsp;», et on la résume souvent, un peu caricaturalement, par le célèbre «&nbsp;*shut up and calculate*&nbsp;».

Pour les tenants de cette approche, et plus généralement pour le camp **ψ-épistémique**, l'état quantique $\psi$ représente une **information**&nbsp;: ce que nous savons du système. À l'opposé, pour les interprétations **ψ-ontiques**, l'état quantique décrit directement une **réalité physique**.

L'analogie classique est éclairante. Une particule classique a, à chaque instant, une position $x$ et une impulsion $p$ bien définies&nbsp;: son état réel est un point de l'espace des phases. Mais si nous connaissons mal ce point, nous le décrivons par une distribution de probabilité, plus ou moins étalée&nbsp;: c'est un état de connaissance.

<div class="svg-container">
<svg viewBox="0 0 260 220" role="img" aria-label="Dans l'espace des phases, un état ontique est un point" style="width:100%;max-width:260px;height:auto;">
<defs><marker id="fa0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<line x1="40.0" y1="180.0" x2="240.0" y2="180.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa0)"/>
<line x1="60.0" y1="195.0" x2="60.0" y2="20.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa0)"/>
<text x="243.0" y="185.0" text-anchor="start" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x</text>
<text x="52.0" y="30.0" text-anchor="end" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >p</text>
<circle cx="150" cy="95" r="5" fill="#004D80"/>
<text x="162.0" y="85.0" text-anchor="start" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >(x, p)</text>
<text x="130.0" y="20.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >état ontique</text>
</svg>
<svg viewBox="0 0 260 220" role="img" aria-label="Dans l'espace des phases, un état épistémique est une distribution de probabilité" style="width:100%;max-width:260px;height:auto;">
<defs><marker id="fa1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<line x1="40.0" y1="180.0" x2="240.0" y2="180.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa1)"/>
<line x1="60.0" y1="195.0" x2="60.0" y2="20.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fa1)"/>
<text x="243.0" y="185.0" text-anchor="start" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >x</text>
<text x="52.0" y="30.0" text-anchor="end" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >p</text>
<ellipse cx="150" cy="95" rx="70" ry="34" transform="rotate(-25 150 95)" fill="#004D80" fill-opacity="0.1"/>
<ellipse cx="150" cy="95" rx="52" ry="25" transform="rotate(-25 150 95)" fill="#004D80" fill-opacity="0.16"/>
<ellipse cx="150" cy="95" rx="36" ry="17" transform="rotate(-25 150 95)" fill="#004D80" fill-opacity="0.24"/>
<ellipse cx="150" cy="95" rx="21" ry="10" transform="rotate(-25 150 95)" fill="#004D80" fill-opacity="0.36"/>
<ellipse cx="150" cy="95" rx="8" ry="4" transform="rotate(-25 150 95)" fill="#004D80" fill-opacity="0.6"/>
<text x="130.0" y="20.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >état épistémique</text>
</svg>
</div>
<p class="legende">En physique classique, l'état ontique d'une particule (à gauche) est un point de l'espace des phases&nbsp;; un état épistémique (à droite) est une distribution de probabilité qui traduit notre connaissance imparfaite de ce point.</p>

Parmi les ψ-épistémiques, certains sont d'ailleurs **réalistes**&nbsp;: ils imaginent une réalité cachée derrière l'état quantique, que celui-ci ne décrirait qu'imparfaitement. L'état quantique jouerait alors le rôle de la distribution de probabilité de la figure de droite, et la réalité sous-jacente celui du point de la figure de gauche[^2]. Einstein faisait partie de ces ψ-épistémiques réalistes&nbsp;: il considérait la théorie quantique comme incomplète et cherchait à la compléter par des **variables cachées**, éléments de réalité sous-jacents.

[^2]: Le [**modèle jouet de Spekkens**](../spekkens) illustre très bien ce point de vue.

### La distinction de Harrigan et Spekkens

Pour rendre cette distinction précise, il faut supposer qu'il existe une réalité sous-jacente. On parle alors de **modèle ontologique**&nbsp;:
<ul>
<li>le système possède un <b>état physique</b> $\lambda$ (la «&nbsp;réalité&nbsp;», la variable cachée d'Einstein), qui détermine les probabilités des résultats de mesure&nbsp;;</li>
<li>une préparation qui produit l'état quantique $|\psi\rangle$ ne fixe pas forcément $\lambda$&nbsp;: elle le produit au hasard, selon une distribution de probabilité $\mu_\psi(\lambda)$.</li>
</ul>

Prenons alors deux états quantiques distincts, $|\psi\_1\rangle$ et $|\psi\_2\rangle$, et comparons leurs distributions $\mu\_1(\lambda)$ et $\mu\_2(\lambda)$&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 200 200" role="img" aria-label="Deux états quantiques non orthogonaux ψ1 et ψ2" style="width:100%;max-width:200px;height:auto;">
<defs><marker id="vb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#004D80" stroke-width="1.6"/></marker></defs>
<defs><marker id="vm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#970E53" stroke-width="1.6"/></marker></defs>
<circle cx="100" cy="105" r="75" fill="none" stroke="#cbd5e1" stroke-width="1.2"/>
<line x1="100.0" y1="105.0" x2="165.0" y2="67.5" stroke="#004D80" stroke-width="2.2" marker-end="url(#vb)"/>
<text x="173.0" y="63.5" text-anchor="start" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >ψ₁</text>
<line x1="100.0" y1="105.0" x2="165.0" y2="142.5" stroke="#970E53" stroke-width="2.2" marker-end="url(#vm)"/>
<text x="173.0" y="156.5" text-anchor="start" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >ψ₂</text>
<circle cx="100" cy="105" r="2.5" fill="#334155"/>
</svg>
<svg viewBox="0 0 280 200" role="img" aria-label="Distributions de λ qui se recouvrent : cas ψ-épistémique" style="width:100%;max-width:280px;height:auto;">
<defs><marker id="fm1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="51.2,160.0 52.8,152.8 54.4,145.8 56.0,139.1 57.6,132.6 59.2,126.4 60.8,120.4 62.4,114.7 64.0,109.2 65.6,103.9 67.2,98.9 68.8,94.1 70.4,89.6 72.0,85.3 73.6,81.3 75.2,77.5 76.8,74.0 78.4,70.7 80.0,67.6 81.6,64.8 83.2,62.2 84.8,59.9 86.4,57.8 88.0,56.0 89.6,54.4 91.2,53.1 92.8,52.0 94.4,51.1 96.0,50.5 97.6,50.1 99.2,50.0 100.8,50.1 102.4,50.5 104.0,51.1 105.6,52.0 107.2,53.1 108.8,54.4 110.4,56.0 112.0,57.8 113.6,59.9 115.2,62.2 116.8,64.8 118.4,67.6 120.0,70.7 121.6,74.0 123.2,77.5 124.8,81.3 126.4,85.3 128.0,89.6 129.6,94.1 131.2,98.9 132.8,103.9 134.4,109.2 136.0,114.7 137.6,120.4 139.2,126.4 140.8,132.6 142.4,139.1 144.0,145.8 145.6,152.8 147.2,160.0" fill="#004D80" fill-opacity="0.18" stroke="#004D80" stroke-width="1.6"/>
<polygon points="120.8,160.0 122.4,154.6 124.0,149.4 125.6,144.3 127.2,139.5 128.8,134.8 130.4,130.3 132.0,126.0 133.6,121.9 135.2,117.9 136.8,114.2 138.4,110.6 140.0,107.2 141.6,104.0 143.2,101.0 144.8,98.1 146.4,95.5 148.0,93.0 149.6,90.7 151.2,88.6 152.8,86.7 154.4,84.9 156.0,83.4 157.6,82.0 159.2,80.8 160.8,79.8 162.4,79.0 164.0,78.3 165.6,77.9 167.2,77.6 168.8,77.5 170.4,77.6 172.0,77.9 173.6,78.3 175.2,79.0 176.8,79.8 178.4,80.8 180.0,82.0 181.6,83.4 183.2,84.9 184.8,86.7 186.4,88.6 188.0,90.7 189.6,93.0 191.2,95.5 192.8,98.1 194.4,101.0 196.0,104.0 197.6,107.2 199.2,110.6 200.8,114.2 202.4,117.9 204.0,121.9 205.6,126.0 207.2,130.3 208.8,134.8 210.4,139.5 212.0,144.3 213.6,149.4 215.2,154.6 216.8,160.0" fill="#970E53" fill-opacity="0.18" stroke="#970E53" stroke-width="1.6"/>
<text x="99.2" y="42.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >μ₁(λ)</text>
<text x="180.8" y="69.5" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >μ₂(λ)</text>
<line x1="20.0" y1="160.0" x2="266.0" y2="160.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fm1)"/>
<text x="270.0" y="165.0" text-anchor="start" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >λ</text>
<line x1="120.8" y1="170.0" x2="147.2" y2="170.0" stroke="#334155" stroke-width="1.2" />
<line x1="120.8" y1="166.0" x2="120.8" y2="174.0" stroke="#334155" stroke-width="1.2" />
<line x1="147.2" y1="166.0" x2="147.2" y2="174.0" stroke="#334155" stroke-width="1.2" />
<text x="134.0" y="188.0" text-anchor="middle" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δ</text>
<text x="140.0" y="20.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >ψ-épistémique : recouvrement</text>
</svg>
<svg viewBox="0 0 280 200" role="img" aria-label="Distributions de λ disjointes : cas ψ-ontique" style="width:100%;max-width:280px;height:auto;">
<defs><marker id="fm0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<polygon points="34.4,160.0 35.7,152.8 37.0,145.8 38.2,139.1 39.5,132.6 40.8,126.4 42.1,120.4 43.4,114.7 44.6,109.2 45.9,103.9 47.2,98.9 48.5,94.1 49.8,89.6 51.0,85.3 52.3,81.3 53.6,77.5 54.9,74.0 56.2,70.7 57.4,67.6 58.7,64.8 60.0,62.2 61.3,59.9 62.6,57.8 63.8,56.0 65.1,54.4 66.4,53.1 67.7,52.0 69.0,51.1 70.2,50.5 71.5,50.1 72.8,50.0 74.1,50.1 75.4,50.5 76.6,51.1 77.9,52.0 79.2,53.1 80.5,54.4 81.8,56.0 83.0,57.8 84.3,59.9 85.6,62.2 86.9,64.8 88.2,67.6 89.4,70.7 90.7,74.0 92.0,77.5 93.3,81.3 94.6,85.3 95.8,89.6 97.1,94.1 98.4,98.9 99.7,103.9 101.0,109.2 102.2,114.7 103.5,120.4 104.8,126.4 106.1,132.6 107.4,139.1 108.6,145.8 109.9,152.8 111.2,160.0" fill="#004D80" fill-opacity="0.18" stroke="#004D80" stroke-width="1.6"/>
<polygon points="161.6,160.0 162.9,154.6 164.2,149.4 165.4,144.3 166.7,139.5 168.0,134.8 169.3,130.3 170.6,126.0 171.8,121.9 173.1,117.9 174.4,114.2 175.7,110.6 177.0,107.2 178.2,104.0 179.5,101.0 180.8,98.1 182.1,95.5 183.4,93.0 184.6,90.7 185.9,88.6 187.2,86.7 188.5,84.9 189.8,83.4 191.0,82.0 192.3,80.8 193.6,79.8 194.9,79.0 196.2,78.3 197.4,77.9 198.7,77.6 200.0,77.5 201.3,77.6 202.6,77.9 203.8,78.3 205.1,79.0 206.4,79.8 207.7,80.8 209.0,82.0 210.2,83.4 211.5,84.9 212.8,86.7 214.1,88.6 215.4,90.7 216.6,93.0 217.9,95.5 219.2,98.1 220.5,101.0 221.8,104.0 223.0,107.2 224.3,110.6 225.6,114.2 226.9,117.9 228.2,121.9 229.4,126.0 230.7,130.3 232.0,134.8 233.3,139.5 234.6,144.3 235.8,149.4 237.1,154.6 238.4,160.0" fill="#970E53" fill-opacity="0.18" stroke="#970E53" stroke-width="1.6"/>
<text x="72.8" y="42.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >μ₁(λ)</text>
<text x="212.0" y="69.5" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >μ₂(λ)</text>
<line x1="20.0" y1="160.0" x2="266.0" y2="160.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fm0)"/>
<text x="270.0" y="165.0" text-anchor="start" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >λ</text>
<text x="140.0" y="20.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >ψ-ontique : pas de recouvrement</text>
</svg>
</div>
<p class="legende">Deux états quantiques $\psi_1$ et $\psi_2$ (à gauche). Dans un modèle ψ-épistémique (au centre), leurs distributions de $\lambda$ se recouvrent sur une région $\Delta$&nbsp;; dans un modèle ψ-ontique (à droite), elles sont disjointes.</p>

<ul>
<li>Si, pour <b>toute</b> paire d'états quantiques distincts, les distributions ne se recouvrent jamais, alors l'état physique $\lambda$ détermine sans ambiguïté l'état quantique&nbsp;: connaître la réalité, c'est connaître $\psi$. L'état quantique est alors une propriété physique du système&nbsp;: le modèle est <b>ψ-ontique</b>.</li>
<li>Si, au contraire, au moins une paire d'états a des distributions qui se recouvrent, un même état physique $\lambda$ peut se cacher derrière deux états quantiques différents. L'état quantique ne peut alors pas être une propriété physique&nbsp;: il ne décrit que notre connaissance. Le modèle est <b>ψ-épistémique</b>. C'est d'ailleurs la possibilité même du recouvrement qui fait d'un modèle un modèle épistémique&nbsp;: sans elle, où serait l'incertitude&nbsp;?</li>
</ul>

<div id="def">

**Définition (Harrigan et Spekkens, 2010).** Un modèle ontologique est **ψ-ontique** si, pour tous états quantiques distincts $|\psi\_1\rangle$ et $|\psi\_2\rangle$, les distributions $\mu\_1$ et $\mu\_2$ ne se recouvrent pas (leur recouvrement a une probabilité nulle). Il est **ψ-épistémique** sinon.

</div>

<br>

Attention&nbsp;: cette distinction ne concerne que les modèles qui admettent une réalité sous-jacente $\lambda$. Les instrumentalistes, qui refusent de parler d'une telle réalité, se situent en dehors de ce cadre.

> Harrigan, N. & Spekkens, R. W. «&nbsp;Einstein, Incompleteness, and the Epistemic View of Quantum States&nbsp;», *Foundations of Physics* 40 (2), 125–157 (février 2010) [🌐](https://philsci-archive.pitt.edu/9059/1/Einstein_epistemic_PhilSciArchive.pdf)


### Les attraits de la vision ψ-épistémique

Tous les ψ-épistémiques s'accordent sur le statut probabiliste de la fonction d'onde. Ce point de vue permet de démystifier certaines bizarreries quantiques, et c'est une approche de ce type que j'utilise dans la vidéo ci-dessous pour tenter de rendre l'état quantique plus accessible.

<div style="position:relative; width:600px; max-width: 100%; margin-left: auto; margin-right: auto;">
{{<youtube reIcNs4Ul-c>}}
</div>

<br>

Plusieurs arguments plaident pour cette vision&nbsp;:
<ul>
<li><b>La structure de la théorie.</b> La théorie quantique peut être vue comme une généralisation <i>non commutative</i> de la théorie classique des probabilités, comme l'a montré von Neumann.</li>
<li><b>La mise à jour de l'état.</b> Une mesure «&nbsp;reprépare&nbsp;» le système dans un nouvel état, exactement comme un état de connaissance est mis à jour chaque fois que l'observateur obtient une nouvelle information.</li>
<li><b>L'indiscernabilité des états non orthogonaux.</b> Deux états quantiques non orthogonaux ne peuvent jamais être distingués avec certitude par une mesure. Le recouvrement de leurs distributions $\mu_\psi$ l'expliquerait naturellement&nbsp;: si un même état physique peut provenir des deux préparations, aucune mesure ne peut toujours les départager.</li>
<li><b>La dissolution du problème de la mesure.</b> C'est l'argument le plus fort.</li>
</ul>

Rappelons-nous que la tension naît de la double règle d'évolution du formalisme quantique&nbsp;: l'une douce et continue lorsque le système est isolé, l'autre instantanée et discontinue lors d'une mesure. Comme une mesure n'est, en principe, qu'une interaction physique comme une autre, on peut se demander pourquoi l'équation de Schrödinger ne suffirait pas à la décrire. Mais c'est en suivant cette voie qu'on se retrouve avec des situations apparemment absurdes, comme celle du chat à la fois mort *et* vivant.

<div style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/memeschro.jpg" style="box-shadow:none;background:none;border-radius:10px">
</div>

Le problème ne se pose en fait que si l'état quantique est ontique&nbsp;: c'est seulement alors que le chat est *réellement* dans une superposition de deux états. Pour un ψ-épistémique, la fonction d'onde n'a jamais représenté que l'étendue de nos connaissances&nbsp;: le chat peut très bien être mort *ou* vivant avant qu'on regarde, et la superposition ne traduit que notre ignorance de la possibilité qui s'est réalisée. La «&nbsp;réduction&nbsp;» de l'état lors de la mesure n'est alors qu'une mise à jour de notre information, comme lorsqu'on découvre le résultat d'un tirage au sort.


## Le théorème PBR

### Les ψ-ontiques, des masochistes&nbsp;?

Les ψ-ontiques, eux, associent une réalité à la fonction d'onde. On peut les classer en deux catégories&nbsp;:
<ul>
<li>ceux pour qui la fonction d'onde <b>est</b> la réalité fondamentale ($\lambda \equiv \psi$), comme dans l'interprétation d'Everett ou les théories d'effondrement spontané&nbsp;;</li>
<li>ceux qui complètent $\psi$ par des variables additionnelles $\xi$ ($\lambda = (\psi, \xi)$), comme la mécanique bohmienne, où les particules ont en plus une position bien définie.</li>
</ul>

*A priori*, les ψ-ontiques n'ont pas grand-chose pour eux&nbsp;: le problème de la mesure redevient un problème sérieux, et la fonction d'onde, objet réel, vit dans un espace de très grande dimension (l'espace des configurations, à $3N$ dimensions pour $N$ particules). Par ailleurs, les inégalités de Bell imposent à tout modèle à variables cachées d'être non local, et le théorème de Kochen-Specker de dépendre du contexte de mesure. Pour les ψ-ontiques purs et durs, c'est moins dur à avaler puisqu'ils ont signé en connaissance de cause&nbsp;; mais pour ceux qui espéraient cacher dans $\xi$ des propriétés plus sympathiques, c'est râpé.

Les ψ-ontiques devaient passer pour de sacrés masochistes aux yeux des ψ-épistémiques... jusqu'au jour où le théorème PBR leur est tombé dessus.

> Pusey, M. F., Barrett, J. & Rudolph, T. «&nbsp;On the reality of the quantum state&nbsp;», *Nature Physics* 8 (6), 475–478 (2012) [🌐](https://arxiv.org/pdf/1111.3328)

### L'énoncé

<div id="theo">

**Théorème (Pusey, Barrett et Rudolph, 2012).** Considérons un modèle ontologique qui vérifie les trois hypothèses suivantes&nbsp;:
<ol>
<li>tout système possède un état physique $\lambda$ (il existe une réalité sous-jacente)&nbsp;;</li>
<li>deux systèmes préparés séparément ont des états physiques $\lambda_1$ et $\lambda_2$ statistiquement indépendants&nbsp;;</li>
<li>le modèle reproduit les prédictions de la mécanique quantique.</li>
</ol>

Alors ce modèle est ψ-ontique&nbsp;: les distributions $\mu_\psi$ de deux états quantiques distincts ne se recouvrent jamais.

</div>

<br>

Autrement dit, sous ces hypothèses somme toute assez raisonnables, l'état quantique est **réel**&nbsp;: quelle que soit la nature de l'état physique fondamental $\lambda$, celui-ci détermine $|\psi\rangle$ de manière unique. PBR est un théorème d'impossibilité (*no-go theorem*), comme ceux de Bell ou de Kochen-Specker&nbsp;: il ferme la porte aux modèles ψ-épistémiques réalistes[^3].

[^3]: Et c'est maintenant au tour des ψ-épistémiques de se lancer dans des circonvolutions à base de recherche de failles (*loopholes*) pour échapper aux conclusions du théorème&nbsp;!

Remarquons l'asymétrie de la tâche&nbsp;: pour prouver que $\psi$ est épistémique, il aurait suffi de trouver **une seule** paire d'états dont les distributions se recouvrent&nbsp;; pour prouver qu'il est ontique, il faut s'assurer qu'**aucune** paire ne se recouvre. C'est pourtant ce que PBR ont réussi à faire.

### Pourquoi c'est surprenant

Que deux états **orthogonaux** aient des distributions disjointes n'a rien d'étonnant&nbsp;: une mesure peut les distinguer à coup sûr, donc aucun état physique $\lambda$ ne peut être compatible avec les deux. Pour des états **non orthogonaux**, c'est beaucoup plus troublant, car leurs distributions de résultats de mesure, elles, se recouvrent toujours.

<div id="preuve">

En effet, si $\langle\psi\_1|\psi\_2\rangle \neq 0$, insérons la relation de fermeture d'une base quelconque, $\mathbb{1} = \int \mathrm{d}a\\,|a\rangle\langle a|$&nbsp;: on obtient $\int \mathrm{d}a\\,\langle\psi\_1|a\rangle\langle a|\psi\_2\rangle \neq 0$. Le produit $\langle\psi\_1|a\rangle\langle a|\psi\_2\rangle$ est donc non nul pour au moins un $a$, et comme la probabilité d'obtenir le résultat $a$ vaut $\rho\_i(a) = |\langle a|\psi\_i\rangle|^2$, on a $\rho\_1(a)\\,\rho\_2(a) \neq 0$&nbsp;: quelle que soit la mesure, au moins un résultat est possible pour les deux états.

</div>

<br>

Moralité&nbsp;: les distributions des **résultats de mesure** de deux états non orthogonaux se recouvrent toujours, mais d'après PBR, les distributions des **états physiques** $\lambda$ ne se recouvrent jamais. L'explication «&nbsp;naturelle&nbsp;» de l'indiscernabilité des états non orthogonaux, par le recouvrement, n'est donc pas la bonne.


## La preuve de PBR, pas à pas

Le cœur de la preuve tient sur un exemple, que nous allons suivre en détail&nbsp;: une paire d'états non orthogonaux d'un système à deux niveaux (un *qubit*). PBR généralisent ensuite l'argument à une paire quelconque.

### Étape 1 : supposer un recouvrement

Dans un espace de Hilbert de dimension 2, prenons la base orthonormée $\\{|0\rangle, |1\rangle\\}$ et la base «&nbsp;tournée&nbsp;» $\\{|+\rangle, |-\rangle\\}$, avec

$$
|\pm\rangle = \frac{|0\rangle \pm |1\rangle}{\sqrt{2}}.
$$

Les deux états $|0\rangle$ et $|+\rangle$ ne sont pas orthogonaux&nbsp;: $\langle 0|+\rangle = \frac{1}{\sqrt{2}}$. Raisonnons **par l'absurde**, en supposant que leurs distributions se recouvrent&nbsp;: il existe une région $\Delta$ d'états physiques compatibles avec les deux préparations, dans laquelle $\lambda$ tombe avec une probabilité $q > 0$, que l'on ait préparé $|0\rangle$ ou $|+\rangle$.

### Étape 2 : deux copies indépendantes

Prenons maintenant **deux** dispositifs de préparation identiques et indépendants, chacun réglé sur $|0\rangle$ ou sur $|+\rangle$. On peut ainsi préparer l'un des quatre états à deux systèmes&nbsp;:

$$
|0\rangle|0\rangle, \qquad |0\rangle|+\rangle, \qquad |+\rangle|0\rangle, \qquad |+\rangle|+\rangle,
$$

que l'on notera $|00\rangle$, $|0{+}\rangle$, $|{+}0\rangle$ et $|{+}{+}\rangle$.

D'après l'hypothèse d'indépendance, les deux états physiques $\lambda\_1$ et $\lambda\_2$ tombent **tous les deux** dans la région de recouvrement $\Delta$ avec la probabilité $q \times q = q^2 > 0$, quelle que soit la préparation choisie. Et dans ce cas, le couple $(\lambda\_1, \lambda\_2)$ est compatible avec **les quatre** préparations à la fois&nbsp;: rien, dans la réalité physique des deux systèmes, ne permet de savoir laquelle a été utilisée.

### Étape 3 : une mesure bien choisie

Les deux systèmes sont ensuite réunis et mesurés **ensemble**, dans la base orthonormée suivante, formée d'états intriqués&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
|\varphi\_1\rangle &= \tfrac{1}{\sqrt{2}}\left(|0\rangle|1\rangle + |1\rangle|0\rangle\right), &
|\varphi\_2\rangle &= \tfrac{1}{\sqrt{2}}\left(|0\rangle|-\rangle + |1\rangle|+\rangle\right),\\\\
|\varphi\_3\rangle &= \tfrac{1}{\sqrt{2}}\left(|+\rangle|1\rangle + |-\rangle|0\rangle\right), &
|\varphi\_4\rangle &= \tfrac{1}{\sqrt{2}}\left(|+\rangle|-\rangle + |-\rangle|+\rangle\right).
\end{aligned}
$$

</div>

Cette base a été construite avec astuce&nbsp;: **chacun de ses vecteurs est orthogonal à l'une des quatre préparations**. On vérifie en effet que $\langle\varphi\_1|00\rangle = 0$, $\langle\varphi\_2|0{+}\rangle = 0$, $\langle\varphi\_3|{+}0\rangle = 0$ et $\langle\varphi\_4|{+}{+}\rangle = 0$. D'après la règle de Born, chaque résultat est donc **impossible** pour l'une des préparations&nbsp;:

<div class="tableau-large">

| Préparation | $\varphi\_1$ | $\varphi\_2$ | $\varphi\_3$ | $\varphi\_4$ |
| :---: | :---: | :---: | :---: | :---: |
| $\|00\rangle$ | **0** | $\frac{1}{4}$ | $\frac{1}{4}$ | $\frac{1}{2}$ |
| $\|0{+}\rangle$ | $\frac{1}{4}$ | **0** | $\frac{1}{2}$ | $\frac{1}{4}$ |
| $\|{+}0\rangle$ | $\frac{1}{4}$ | $\frac{1}{2}$ | **0** | $\frac{1}{4}$ |
| $\|{+}{+}\rangle$ | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{4}$ | **0** |

</div>

Le résultat $\varphi\_1$ signifie donc «&nbsp;ce n'était pas $|00\rangle$&nbsp;», le résultat $\varphi\_2$ «&nbsp;ce n'était pas $|0{+}\rangle$&nbsp;», et ainsi de suite.

<div class="svg-container">
<svg viewBox="0 0 520 300" role="img" aria-label="Deux préparations indépendantes, chacune réglée sur 0 ou +, envoient leurs systèmes vers une mesure conjointe à quatre résultats ; chaque résultat exclut une des quatre préparations" style="width:100%;max-width:520px;height:auto;">
<defs><marker id="pa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<rect x="20" y="210" width="120" height="62" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.4"/>
<text x="80.0" y="232.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >préparation 1</text>
<circle cx="58" cy="255" r="12" fill="#fff" stroke="#004D80" stroke-width="1.4"/>
<text x="58.0" y="260.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >0</text>
<circle cx="102" cy="255" r="12" fill="#fff" stroke="#004D80" stroke-width="1.4"/>
<text x="102.0" y="260.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >+</text>
<rect x="380" y="210" width="120" height="62" rx="10" fill="#ebf1f5" stroke="#004D80" stroke-width="1.4"/>
<text x="440.0" y="232.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >préparation 2</text>
<circle cx="418" cy="255" r="12" fill="#fff" stroke="#004D80" stroke-width="1.4"/>
<text x="418.0" y="260.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >0</text>
<circle cx="462" cy="255" r="12" fill="#fff" stroke="#004D80" stroke-width="1.4"/>
<text x="462.0" y="260.0" text-anchor="middle" font-size="14" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >+</text>
<circle cx="150" cy="160" r="16" fill="#d9e4ec" stroke="#004D80" stroke-width="1.3"/>
<text x="150.0" y="165.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >λ₁</text>
<circle cx="370" cy="160" r="16" fill="#efdbe5" stroke="#970E53" stroke-width="1.3"/>
<text x="370.0" y="165.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >λ₂</text>
<line x1="100.0" y1="208.0" x2="138.0" y2="174.0" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#pa)"/>
<line x1="420.0" y1="208.0" x2="382.0" y2="174.0" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#pa)"/>
<line x1="162.0" y1="146.0" x2="195.0" y2="122.0" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#pa)"/>
<line x1="358.0" y1="146.0" x2="325.0" y2="122.0" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#pa)"/>
<rect x="110" y="10" width="300" height="108" rx="10" fill="#dbe6ed" stroke="#004D80" stroke-width="1.4"/>
<text x="260.0" y="32.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >mesure conjointe</text>
<rect x="124" y="44" width="62" height="60" rx="7" fill="#fff" stroke="#004D80" stroke-width="1.2"/>
<text x="155.0" y="68.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >φ<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan></text>
<text x="155.0" y="92.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non 00</text>
<rect x="194" y="44" width="62" height="60" rx="7" fill="#fff" stroke="#004D80" stroke-width="1.2"/>
<text x="225.0" y="68.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >φ<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan></text>
<text x="225.0" y="92.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non 0+</text>
<rect x="264" y="44" width="62" height="60" rx="7" fill="#fff" stroke="#004D80" stroke-width="1.2"/>
<text x="295.0" y="68.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >φ<tspan dy='3' font-size='10'>3</tspan><tspan dy='-3'></tspan></text>
<text x="295.0" y="92.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non +0</text>
<rect x="334" y="44" width="62" height="60" rx="7" fill="#fff" stroke="#004D80" stroke-width="1.2"/>
<text x="365.0" y="68.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >φ<tspan dy='3' font-size='10'>4</tspan><tspan dy='-3'></tspan></text>
<text x="365.0" y="92.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >non ++</text>
</svg>
</div>
<p class="legende">Le dispositif de la preuve. Deux préparations indépendantes, chacune réglée sur $|0\rangle$ ou $|+\rangle$, produisent les états physiques $\lambda_1$ et $\lambda_2$. La mesure conjointe a quatre résultats possibles, et chacun exclut l'une des quatre préparations.</p>

### Étape 4 : la contradiction

L'appareil de mesure n'a accès qu'aux états physiques $\lambda\_1$ et $\lambda\_2$ des deux systèmes&nbsp;: c'est d'eux seuls que dépendent les probabilités de ses réponses. Voyons ce qu'il peut répondre lorsque le couple $(\lambda\_1, \lambda\_2)$ tombe dans la région de recouvrement, ce qui arrive avec la probabilité $q^2 > 0$&nbsp;:
<ul>
<li>il ne peut pas répondre $\varphi_1$, car ce couple a pu être produit par la préparation $|00\rangle$, pour laquelle $\varphi_1$ est impossible&nbsp;;</li>
<li>il ne peut pas répondre $\varphi_2$, car ce couple a pu être produit par la préparation $|0{+}\rangle$, pour laquelle $\varphi_2$ est impossible&nbsp;;</li>
<li>de même, il ne peut répondre ni $\varphi_3$ (à cause de $|{+}0\rangle$), ni $\varphi_4$ (à cause de $|{+}{+}\rangle$).</li>
</ul>

Or l'appareil doit bien donner l'un des quatre résultats&nbsp;! **Contradiction.** L'hypothèse de départ est donc fausse&nbsp;: les distributions de $|0\rangle$ et de $|+\rangle$ ne peuvent pas se recouvrir.

On peut aussi le dire ainsi&nbsp;: si le recouvrement existait, l'appareil serait, dans une fraction $q^2$ des cas, incapable de «&nbsp;savoir&nbsp;» quelle préparation a été utilisée, et il prendrait alors forcément le risque de produire un résultat que la mécanique quantique interdit.

<div id="preuve">

**Pour aller plus loin&nbsp;: le cas général.** Pour deux états quelconques $|\psi\_1\rangle$ et $|\psi\_2\rangle$, d'autant plus difficiles à distinguer qu'ils sont proches, deux copies ne suffisent plus. PBR utilisent alors $n$ copies indépendantes, qui donnent $2^n$ préparations possibles, et construisent une mesure conjointe à $2^n$ résultats dont chacun exclut l'une de ces préparations. Plus les états sont proches, plus il faut de copies, mais l'argument reste le même&nbsp;: dans la fraction $q^n$ des cas où tous les $\lambda\_i$ tombent dans la région de recouvrement, aucun résultat n'est permis.

</div>

<br>


## Que conclure&nbsp;?

Sous ses hypothèses, le théorème PBR établit que l'état quantique est **réel**&nbsp;: c'est l'un des résultats les plus importants sur les fondements de la mécanique quantique depuis les inégalités de Bell. Mais comme pour tout théorème d'impossibilité, sa portée dépend de ses hypothèses, et chacune offre une échappatoire&nbsp;:
<ul>
<li><b>Refuser l'existence d'une réalité sous-jacente $\lambda$</b>&nbsp;: c'est la position des approches instrumentalistes ou «&nbsp;néo-copenhaguistes&nbsp;», comme le QBism, pour lesquelles l'état quantique ne décrit que l'information ou les croyances de l'observateur. PBR ne les atteint pas.</li>
<li><b>Refuser l'indépendance des préparations</b>&nbsp;: deux systèmes préparés séparément pourraient avoir des états physiques corrélés, une hypothèse coûteuse mais logiquement possible.</li>
<li><b>Contester les prédictions quantiques</b>&nbsp;: une option peu attrayante, puisqu'elles ont été vérifiées dans toutes les expériences réalisées à ce jour.</li>
</ul>

Pour qui veut à la fois une réalité sous-jacente et une description fidèle de la quantique, la conclusion s'impose&nbsp;: $\psi$ n'est pas qu'un état de connaissance, c'est un élément de la réalité.

{{%notice type="note" round="true"%}}
Parmi les ψ-ontiques purs et durs ($\lambda \equiv |\psi\rangle$), certains vont plus loin et acceptent de prendre au sérieux l'espace de grande dimension dans lequel évolue la fonction d'onde, pour regagner la localité et la séparabilité des états. En admettant que notre espace à trois dimensions n'est que l'ombre d'un espace multidimensionnel dans lequel évolue la fonction d'onde, on évacue en effet toutes les difficultés (dimensions supplémentaires mises à part), du moins jusqu'à la mesure...<br>
[**Cette petite page**](./3ndimensions) explique l'attrait de ce compromis.
{{%/notice%}}
