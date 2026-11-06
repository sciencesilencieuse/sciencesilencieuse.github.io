+++
title = "La déviation du filet d'eau"
date = 2021-03-06T14:20:50+01:00
weight = 2
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


# La déviation du filet d'eau

C'est l'une des expériences les plus célèbres des cours de physique-chimie au lycée&nbsp;: on frotte une règle en plastique ou un ballon de baudruche contre un pull en laine, on l'approche d'un mince filet d'eau s'écoulant d'un robinet, et (magie de l'électrostatique) le filet d'eau s'incurve franchement vers la règle, parfois de plusieurs centimètres&nbsp;!

Dans la quasi-totalité des manuels scolaires, cette expérience (réalisée pour la première fois en 1741 par Jean-Théophile Desaguliers) est présentée comme la preuve expérimentale directe du **caractère polaire de la molécule d'eau** ($\text{H}_2\text{O}$). L'histoire racontée est séduisante&nbsp;: les molécules d'eau étant de petits dipôles électriques permanents, elles s'orienteraient dans le champ électrique créé par la règle et seraient attirées vers les zones de champ fort.

Il n'y a qu'un seul problème avec cette explication&nbsp;: **elle est physiquement fausse** (de plus de deux ordres de grandeur)&nbsp;!

Comment le vérifier par un calcul d'ordres de grandeur à partir des lois de l'électrostatique et de la physique statistique, et quel est le véritable mécanisme à l'œuvre&nbsp;? Nous procéderons en trois temps&nbsp;: estimer d'abord l'effet des dipôles (il est minuscule), puis celui des ions dissous dans l'eau (il explique tout), et enfin examiner l'expérience qui permet de trancher&nbsp;: la charge des gouttes.


## Le mythe des dipôles face à l'agitation thermique

Que vaut le champ électrique $E$ créé par une règle en plastique frottée à une distance typique de quelques centimètres&nbsp;?

On sait que le champ produit à proximité immédiate de la règle est proche du champ disruptif de l'air $E_{\text{max}} \approx \pu{3e6 V/m}$ ($\pu{30 kV/cm}$ dans l'air sec, et plutôt $10$ à $\pu{20 kV/cm}$ dans l'air humide au voisinage d'un évier) puisqu'on peut parfois obtenir de petites étincelles en approchant le doigt. Un champ $E \sim \pu{10^5 V/m}$ (soit $\pu{1 kV/cm}$) à une distance $r \approx \pu{2 cm}$ de la règle constitue donc une estimation généreuse... On verra d'ailleurs plus loin que la valeur exacte de $E$ s'élimine lorsqu'on compare les mécanismes entre eux.

Testons l'hypothèse des manuels scolaires. Une molécule d'eau isolée possède un moment dipolaire électrique permanent $p_0 \approx \pu{1,85 D} \approx \pu{6,2e-30 C.m}$.

Que font nos molécules d'eau dans ce champ&nbsp;? Dans les schémas des livres de lycée, on voit toutes les molécules d'eau s'aligner bien sagement le long du champ électrique comme des aiguilles de boussole. C'est oublier l'ennemi juré de l'ordre microscopique à température ambiante ($T = \pu{293 K}$)&nbsp;: **l'agitation thermique**&nbsp;!

L'énergie potentielle d'orientation d'un dipôle $\vec{p}\_0$ dans le champ $\vec{E}$ vaut $U = -\vec{p}\_0\cdot\vec{E} = -p\_0 E \cos\theta$, d'amplitude maximale $p\_0 E$. Comparons-la à l'énergie d'agitation thermique $k\_B T$&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\begin{aligned}
\frac{p_0 E}{k_B T} &= \frac{\pu{6,2e-30 C.m} \times \pu{1e5 V/m}}{\pu{1,38e-23 J/K} \times \pu{293 K}}\\\\
&\approx \pu{1,5e-4} \ll 1
\end{aligned}
$$

</div>

</div>

L'énergie d'alignement électrostatique est près de **dix mille fois plus faible** que l'agitation thermique&nbsp;! Les molécules d'eau sont bousculées en permanence par les chocs thermiques&nbsp;: d'après la statistique de Boltzmann-Langevin, le degré d'alignement moyen d'un dipôle avec le champ vaut $\langle \cos\theta \rangle = \mathcal{L}\left(\frac{p\_0 E}{k\_B T}\right) \approx \frac{p\_0 E}{3 k\_B T} \approx \pu{5e-5}$. Autrement dit, tout se passe comme si une molécule sur vingt mille environ était alignée sur le champ, toutes les autres restant orientées au hasard.

<div class="svg-container">
<svg viewBox="0 0 270 215" role="img" aria-label="Molécules d'eau toutes alignées sur le champ, comme dans les manuels" style="width:100%;max-width:270px;height:auto;">
<defs><marker id="fd0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#970E53" stroke-width="1.6"/></marker></defs>
<style></style>
<text x="135.0" y="18.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Vision des manuels</text>
<line x1="40.0" y1="38.0" x2="225.0" y2="38.0" stroke="#970E53" stroke-width="1.4" marker-end="url(#fd0)"/>
<text x="230.0" y="42.0" text-anchor="start" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >E</text>
<g transform="translate(48,78)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,78)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,78)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,78)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(48,130)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,130)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,130)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,130)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(48,182)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,182)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,182)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,182)"><g transform="rotate(0)"><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
</svg>
<svg viewBox="0 0 270 215" role="img" aria-label="À température ambiante, les molécules d'eau tournent en tous sens" style="width:100%;max-width:270px;height:auto;">
<defs><marker id="fd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#970E53" stroke-width="1.6"/></marker></defs>
<style>.ag00{transform:rotate(-95deg)}@keyframes ag00-k{from{transform:rotate(-95deg)}to{transform:rotate(-259deg)}}@media (prefers-reduced-motion:no-preference){.ag00{animation:ag00-k 1.52s ease-in-out infinite alternate}}.ag01{transform:rotate(-148deg)}@keyframes ag01-k{from{transform:rotate(-148deg)}to{transform:rotate(-270deg)}}@media (prefers-reduced-motion:no-preference){.ag01{animation:ag01-k 2.09s ease-in-out infinite alternate}}.ag02{transform:rotate(108deg)}@keyframes ag02-k{from{transform:rotate(108deg)}to{transform:rotate(9deg)}}@media (prefers-reduced-motion:no-preference){.ag02{animation:ag02-k 1.60s ease-in-out infinite alternate}}.ag03{transform:rotate(-80deg)}@keyframes ag03-k{from{transform:rotate(-80deg)}to{transform:rotate(-258deg)}}@media (prefers-reduced-motion:no-preference){.ag03{animation:ag03-k 1.24s ease-in-out infinite alternate}}.ag10{transform:rotate(159deg)}@keyframes ag10-k{from{transform:rotate(159deg)}to{transform:rotate(-18deg)}}@media (prefers-reduced-motion:no-preference){.ag10{animation:ag10-k 1.95s ease-in-out infinite alternate}}.ag11{transform:rotate(108deg)}@keyframes ag11-k{from{transform:rotate(108deg)}to{transform:rotate(17deg)}}@media (prefers-reduced-motion:no-preference){.ag11{animation:ag11-k 1.28s ease-in-out infinite alternate}}.ag12{transform:rotate(132deg)}@keyframes ag12-k{from{transform:rotate(132deg)}to{transform:rotate(214deg)}}@media (prefers-reduced-motion:no-preference){.ag12{animation:ag12-k 1.69s ease-in-out infinite alternate}}.ag13{transform:rotate(62deg)}@keyframes ag13-k{from{transform:rotate(62deg)}to{transform:rotate(-31deg)}}@media (prefers-reduced-motion:no-preference){.ag13{animation:ag13-k 1.52s ease-in-out infinite alternate}}.ag20{transform:rotate(-148deg)}@keyframes ag20-k{from{transform:rotate(-148deg)}to{transform:rotate(-77deg)}}@media (prefers-reduced-motion:no-preference){.ag20{animation:ag20-k 1.28s ease-in-out infinite alternate}}.ag21{transform:rotate(74deg)}@keyframes ag21-k{from{transform:rotate(74deg)}to{transform:rotate(254deg)}}@media (prefers-reduced-motion:no-preference){.ag21{animation:ag21-k 1.56s ease-in-out infinite alternate}}.ag22{transform:rotate(-31deg)}@keyframes ag22-k{from{transform:rotate(-31deg)}to{transform:rotate(95deg)}}@media (prefers-reduced-motion:no-preference){.ag22{animation:ag22-k 1.11s ease-in-out infinite alternate}}.ag23{transform:rotate(-70deg)}@keyframes ag23-k{from{transform:rotate(-70deg)}to{transform:rotate(-151deg)}}@media (prefers-reduced-motion:no-preference){.ag23{animation:ag23-k 1.50s ease-in-out infinite alternate}}</style>
<text x="135.0" y="18.0" text-anchor="middle" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" >À température ambiante</text>
<line x1="40.0" y1="38.0" x2="225.0" y2="38.0" stroke="#970E53" stroke-width="1.4" marker-end="url(#fd1)"/>
<text x="230.0" y="42.0" text-anchor="start" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >E</text>
<g transform="translate(48,78)"><g class="ag00" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,78)"><g class="ag01" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,78)"><g class="ag02" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,78)"><g class="ag03" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(48,130)"><g class="ag10" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,130)"><g class="ag11" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,130)"><g class="ag12" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,130)"><g class="ag13" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(48,182)"><g class="ag20" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(105,182)"><g class="ag21" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(162,182)"><g class="ag22" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
<g transform="translate(219,182)"><g class="ag23" style=""><line x1="-5" y1="0" x2="7" y2="-9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><line x1="-5" y1="0" x2="7" y2="9" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/><circle cx="-5" cy="0" r="7.5" fill="#004D80"/><circle cx="7" cy="-9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/><circle cx="7" cy="9" r="4.2" fill="#bfd2df" stroke="#004D80" stroke-width="0.8"/></g></g>
</svg>
</div>
<p class="legende">Dans les manuels, les molécules d'eau s'alignent sur le champ comme des aiguilles de boussole. À température ambiante, l'agitation thermique les fait tourner en tous sens&nbsp;: en moyenne, une sur vingt mille environ penche dans le sens du champ.</p>

Ce faible alignement suffit-il à attirer le filet&nbsp;? Passons à l'échelle macroscopique&nbsp;: l'eau est un liquide polaire mais **électriquement neutre**, placé dans le champ non uniforme $\vec{E}(\vec{r})$ de la règle.

En sommant les moments dipolaires moyens sur les $n \approx \pu{3,3e28 molécules/m3}$ de l'eau liquide (et en tenant compte des fortes corrélations d'orientation entre molécules voisines liées par liaisons hydrogène), le milieu acquiert un moment dipolaire par unité de volume, le **vecteur polarisation** $\vec{P}$. Toute cette physique microscopique se résume en un seul nombre, la permittivité relative de l'eau&nbsp;:

<div id="def">

Dans un diélectrique linéaire, homogène et isotrope de **permittivité diélectrique relative** $\varepsilon\_r$ ($\varepsilon\_r \approx 80$ pour l'eau liquide à $\pu{20 ^\circ C}$), le vecteur polarisation $\vec{P}$ est proportionnel au champ électrique $\vec{E}\_{\text{int}}$ qui règne *à l'intérieur* du milieu&nbsp;:

<div id="grosseformule">

$$
\vec{P} = \varepsilon_0 (\varepsilon_r - 1)\vec{E}_{\text{int}}
$$

</div>

</div>

<br>

Quelle force le champ électrique extérieur $\vec{E}(\vec{r})$ exerce-t-il alors sur cette eau polarisée&nbsp;?

Un dipôle $\vec{p}$ plongé dans un champ électrique uniforme subit un couple qui tend à l'orienter, mais **aucune force résultante** puisque la force exercée sur la charge $+q$ compense exactement celle exercée sur la charge $-q$. Pour attirer un dipôle, il faut impérativement un **gradient de champ électrique**&nbsp;:

<div id="def">

La force résultante sur un dipôle élémentaire $\vec{p}$ placé dans un champ électrique inhomogène $\vec{E}(\vec{r})$ vaut $\vec{f} = (\vec{p}\cdot\vec{\nabla})\vec{E}$. Par sommation par unité de volume, la densité volumique de force dipolaire (appelée **force de Kelvin** ou force diélectrophorétique) qui s'exerce sur le liquide s'écrit&nbsp;:

<div id="grosseformule">

$$
\vec{f}_{\text{dip}} = (\vec{P}\cdot\vec{\nabla})\vec{E}
$$

</div>

</div>

<br>

<div id="preuve">

C'est d'ailleurs le premier argument expérimental développé par Ziaei-Moayyed *et al.* dans l'article du *Journal of Chemical Education* référencé en fin de page&nbsp;: en faisant passer le filet d'eau entre les deux plaques parallèles d'un condensateur plan où règne un **champ électrique uniforme** ($\vec{\nabla} E = \vec{0}$), un jet purement dipolaire ne devrait subir strictement aucune force ($\vec{f}\_{\text{dip}} = \vec{0}$). Or l'expérience montre au contraire une déviation spectaculaire vers la plaque de signe opposé&nbsp;!

</div>

### Un premier calcul

Dans le cas d'une règle électrisée, le champ électrique varie avec la distance $r$ à l'axe de la règle (approximativement comme le champ d'un fil chargé, $E(r) \propto 1/r$), ce qui crée un gradient de champ dirigé vers la règle.

Supposons dans un premier temps que le champ électrique à l'intérieur du filet d'eau soit directement égal au champ extérieur créé par la règle&nbsp;: $\vec{E}\_{\text{int}} \approx \vec{E}$. La densité volumique de force dipolaire vaut alors&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
f_{\text{dip, naïf}} = \frac{\varepsilon_0(\varepsilon_r - 1)E^2}{r}
$$

</div>

</div>

<br>

<div id="preuve">

En remplaçant $\vec{P} \approx \varepsilon\_0(\varepsilon\_r - 1)\vec{E}$ dans l'expression de la force de Kelvin, il vient&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\vec{f}_{\text{dip, naïf}} &= (\vec{P}\cdot\vec{\nabla})\vec{E}\\\\
&= \varepsilon_0 (\varepsilon_r - 1) (\vec{E}\cdot\vec{\nabla})\vec{E}\\\\
&= \frac{1}{2}\varepsilon_0 (\varepsilon_r - 1)\vec{\nabla}\left(E^2\right)
\end{aligned}
$$

</div>

où l'on a utilisé l'identité d'analyse vectorielle $\vec{\nabla}(E^2) = 2(\vec{E}\cdot\vec{\nabla})\vec{E} + 2\vec{E}\wedge(\vec{\nabla}\wedge\vec{E})$, qui se simplifie en électrostatique car le champ est à circulation conservative ($\vec{\nabla}\wedge\vec{E} = \vec{0}$).

Puisque le champ radial créé par la règle varie en $E(r) \propto 1/r$ à la distance $r$ de son axe, on a $\frac{\mathrm{d}E}{\mathrm{d}r} = -\frac{E}{r}$, d'où la norme du gradient de $E^2$&nbsp;:

<div id="grosseformule">

$$
\left\\|\vec{\nabla}\left(E^2\right)\right\\| = \left|\frac{\mathrm{d}}{\mathrm{d}r}\left(E^2\right)\right| = 2 E \left|\frac{\mathrm{d}E}{\mathrm{d}r}\right| = \frac{2 E^2}{r}
$$

</div>

En multipliant par $\frac{1}{2}\varepsilon\_0(\varepsilon\_r - 1)$, on obtient bien $f\_{\text{dip, naïf}} = \frac{\varepsilon\_0(\varepsilon\_r - 1)E^2}{r}$.

</div>

<br>

En divisant cette force volumique par la masse volumique de l'eau ($\rho = \pu{1000 kg/m3}$), on obtient une première estimation (très généreuse) de l'accélération transversale à $r = \pu{2 cm}$ de la règle&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\begin{aligned}
a_{\text{dip, naïf}} &= \frac{f_{\text{dip, naïf}}}{\rho} = \frac{\varepsilon_0 (\varepsilon_r - 1) E^2}{\rho \\, r}\\\\
&= \frac{\pu{8,85e-12 F/m} \times 79 \times (\pu{1e5 V/m})^2}{\pu{1000 kg/m3} \times \pu{0,02 m}}\\\\
&\approx \pu{0,35 m/s2}
\end{aligned}
$$

</div>

</div>

<br>

Quelle déviation latérale une telle accélération transversale $a$ produit-elle sur le filet d'eau&nbsp;?

Le filet ne tombe pas à vitesse constante. On ouvre à peine le robinet pour obtenir un filet fin et régulier ($v\_0 \approx \pu{0,3 à 0,4 m/s}$ à la sortie, en $z = 0$), puis l'eau accélère en chute libre selon la loi de Torricelli&nbsp;:

$$v\_z(z) = \sqrt{v\_0^2 + 2 g z}.$$

(C'est d'ailleurs pourquoi le filet s'affine en tombant&nbsp;: le débit $Q = \pi a(z)^2 v\_z(z)$ se conserve, donc son rayon diminue quand sa vitesse augmente.)

Les mouvements horizontal et vertical étant indépendants, cette accélération verticale ne modifie pas la déviation latérale elle-même&nbsp;: elle fixe seulement la durée des **deux étapes** de la déviation, comme pour un faisceau d'électrons qui traverse puis quitte les plaques déviatrices d'un oscilloscope&nbsp;:

<div id="def">
<ul style="margin-top:1em; margin-bottom:0em;">
<li><b>Étape 1 — Traversée de la zone d'interaction face à la règle ($h \approx \pu{5 cm}$)</b>&nbsp;: lorsque l'eau arrive à la hauteur de la règle (placée dans la partie haute continue du jet, vers $z \approx \pu{6 à 9 cm}$ sous le robinet), sa vitesse verticale vaut déjà $v_{z,1} = \sqrt{v_0^2 + 2gz} \approx \pu{1,2 m/s}$. Elle traverse donc la zone de champ intense ($h \approx \pu{5 cm}$) en une durée $\Delta t_1 \approx \frac{h}{v_{z,1}} \approx \pu{0,04 s}$, pendant laquelle elle subit l'accélération transversale $a$&nbsp;:
<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>elle est déviée latéralement de $\Delta x_1 = \frac{1}{2} a (\Delta t_1)^2$&nbsp;;</li>
<li>surtout, elle acquiert en sortie de zone une <b>vitesse horizontale</b> $v_x = a \, \Delta t_1$.</li>
</ul>
   </li>
<li><b>Étape 2 — Poursuite de la chute libre hors de la zone de champ ($D \approx \pu{20 cm}$)</b>&nbsp;: une fois sorti de la zone d'influence de la règle, le filet (puis les gouttes) poursuit sa chute sur une hauteur $D \approx \pu{20 cm}$ jusqu'au bas de l'évier ou au bécher. Sous l'effet de la pesanteur $g$, sa vitesse verticale continue d'augmenter (passant d'environ $\pu{1,4 m/s}$ en sortie de zone à $\pu{2,5 m/s}$ en bas, soit une vitesse verticale moyenne $v_{z,2} \approx \pu{2,0 m/s}$ sur cette seconde portion&nbsp;!). Cette seconde phase ne dure donc que $\Delta t_2 \approx \frac{D}{v_{z,2}} \approx \pu{0,10 s}$, pendant lesquels l'eau conserve sa vitesse latérale acquise $v_x$ et dérive horizontalement de $\Delta x_2 = v_x \, \Delta t_2 = a \, \Delta t_1 \, \Delta t_2$.</li>
</ul>

La déviation latérale totale $\Delta x\_{\text{tot}}$ au bas du jet s'écrit donc exactement&nbsp;:

<div id="grosseformule">
$$
\Delta x_{\text{tot}} = \underbrace{\frac{1}{2} a (\Delta t_1)^2}_{\Delta x_1 \text{ (interaction)}} + \underbrace{(a \, \Delta t_1)\Delta t_2}_{\Delta x_2 \text{ (vol libre)}} = a \, \Delta t_1 \left(\frac{1}{2}\Delta t_1 + \Delta t_2\right)
$$
</div>

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 340 395" role="img" aria-label="Le filet s'incurve dans la zone d'interaction de hauteur h, puis continue de s'écarter pendant la chute libre sur la hauteur D" style="width:100%;max-width:340px;height:auto;">
<rect x="111" y="12" width="28" height="14" rx="3" fill="#cbd5e1"/>
<rect x="40" y="85.0" width="260" height="50.0" fill="#f7ecf1"/>
<rect x="195" y="103.0" width="70" height="14" rx="4" fill="#c67aa0"/>
<text x="230.0" y="114.0" text-anchor="middle" font-size="11.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >règle</text>
<text x="230.0" y="77.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >zone d'interaction</text>
<line x1="125.0" y1="30.0" x2="125.0" y2="335.0" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<polyline points="125.0,30.0 125.0,31.0 125.0,32.0 125.0,33.0 125.0,34.0 125.0,35.0 125.0,36.0 125.0,37.0 125.0,38.0 125.0,39.0 125.0,40.0 125.0,41.0 125.0,42.0 125.0,43.0 125.0,44.0 125.0,45.0 125.0,46.0 125.0,47.0 125.0,48.0 125.0,49.0 125.0,50.0 125.0,51.0 125.0,52.0 125.0,53.0 125.0,54.0 125.0,55.0 125.0,56.0 125.0,57.0 125.0,58.0 125.0,59.0 125.0,60.0 125.0,61.0 125.0,62.0 125.0,63.0 125.0,64.0 125.0,65.0 125.0,66.0 125.0,67.0 125.0,68.0 125.0,69.0 125.0,70.0 125.0,71.0 125.0,72.0 125.0,73.0 125.0,74.0 125.0,75.0 125.0,76.0 125.0,77.0 125.0,78.0 125.0,79.0 125.0,80.0 125.0,81.0 125.0,82.0 125.0,83.0 125.0,84.0 125.0,85.0 125.0,86.0 125.0,87.0 125.0,88.0 125.1,89.0 125.1,90.0 125.2,91.0 125.2,92.0 125.3,93.0 125.3,94.0 125.4,95.0 125.5,96.0 125.6,97.0 125.7,98.0 125.8,99.0 125.9,100.0 126.0,101.0 126.1,102.0 126.2,103.0 126.4,104.0 126.5,105.0 126.7,106.0 126.8,107.0 127.0,108.0 127.1,109.0 127.3,110.0 127.5,111.0 127.6,112.0 127.8,113.0 128.0,114.0 128.2,115.0 128.4,116.0 128.6,117.0 128.8,118.0 129.0,119.0 129.2,120.0 129.4,121.0 129.7,122.0 129.9,123.0 130.1,124.0 130.4,125.0 130.6,126.0 130.8,127.0 131.1,128.0 131.3,129.0 131.6,130.0 131.9,131.0 132.1,132.0 132.4,133.0 132.7,134.0 132.9,135.0 133.2,136.0 133.5,137.0 133.7,138.0 134.0,139.0 134.3,140.0 134.6,141.0 134.8,142.0 135.1,143.0 135.4,144.0 135.6,145.0 135.9,146.0 136.2,147.0 136.4,148.0 136.7,149.0 136.9,150.0 137.2,151.0 137.5,152.0 137.7,153.0 138.0,154.0 138.2,155.0 138.5,156.0 138.7,157.0 139.0,158.0 139.2,159.0 139.5,160.0 139.7,161.0 140.0,162.0 140.2,163.0 140.5,164.0 140.7,165.0 141.0,166.0 141.2,167.0 141.4,168.0 141.7,169.0 141.9,170.0 142.2,171.0 142.4,172.0 142.7,173.0 142.9,174.0 143.1,175.0 143.4,176.0 143.6,177.0 143.8,178.0 144.1,179.0 144.3,180.0 144.5,181.0 144.8,182.0 145.0,183.0 145.2,184.0 145.5,185.0 145.7,186.0 145.9,187.0 146.1,188.0 146.4,189.0 146.6,190.0 146.8,191.0 147.0,192.0 147.3,193.0 147.5,194.0 147.7,195.0 147.9,196.0 148.2,197.0 148.4,198.0 148.6,199.0 148.8,200.0 149.0,201.0 149.3,202.0 149.5,203.0 149.7,204.0 149.9,205.0 150.1,206.0 150.3,207.0 150.6,208.0 150.8,209.0 151.0,210.0 151.2,211.0 151.4,212.0 151.6,213.0 151.8,214.0 152.0,215.0 152.3,216.0 152.5,217.0 152.7,218.0 152.9,219.0 153.1,220.0 153.3,221.0 153.5,222.0 153.7,223.0 153.9,224.0 154.1,225.0 154.3,226.0 154.5,227.0 154.7,228.0 154.9,229.0 155.1,230.0 155.3,231.0 155.6,232.0 155.8,233.0 156.0,234.0 156.2,235.0 156.4,236.0 156.6,237.0 156.8,238.0 157.0,239.0 157.1,240.0 157.3,241.0 157.5,242.0 157.7,243.0 157.9,244.0 158.1,245.0 158.3,246.0 158.5,247.0 158.7,248.0 158.9,249.0 159.1,250.0 159.3,251.0 159.5,252.0 159.7,253.0 159.9,254.0 160.1,255.0 160.3,256.0 160.5,257.0 160.6,258.0 160.8,259.0 161.0,260.0 161.2,261.0 161.4,262.0 161.6,263.0 161.8,264.0 162.0,265.0 162.2,266.0 162.3,267.0 162.5,268.0 162.7,269.0 162.9,270.0 163.1,271.0 163.3,272.0 163.5,273.0 163.6,274.0 163.8,275.0 164.0,276.0 164.2,277.0 164.4,278.0 164.6,279.0 164.7,280.0 164.9,281.0 165.1,282.0 165.3,283.0 165.5,284.0 165.6,285.0 165.8,286.0 166.0,287.0 166.2,288.0 166.4,289.0 166.5,290.0 166.7,291.0 166.9,292.0 167.1,293.0 167.3,294.0 167.4,295.0 167.6,296.0 167.8,297.0 168.0,298.0 168.1,299.0 168.3,300.0 168.5,301.0 168.7,302.0 168.8,303.0 169.0,304.0 169.2,305.0 169.4,306.0 169.5,307.0 169.7,308.0 169.9,309.0 170.0,310.0 170.2,311.0 170.4,312.0 170.6,313.0 170.7,314.0 170.9,315.0 171.1,316.0 171.2,317.0 171.4,318.0 171.6,319.0 171.8,320.0 171.9,321.0 172.1,322.0 172.3,323.0 172.4,324.0 172.6,325.0 172.8,326.0 172.9,327.0 173.1,328.0 173.3,329.0 173.4,330.0 173.6,331.0 173.8,332.0 173.9,333.0 174.1,334.0 174.3,335.0" fill="none" stroke="#004D80" stroke-width="3" stroke-linecap="round"/>
<line x1="51.0" y1="85.0" x2="59.0" y2="85.0" stroke="#64748b" stroke-width="1" />
<line x1="51.0" y1="135.0" x2="59.0" y2="135.0" stroke="#64748b" stroke-width="1" />
<line x1="55.0" y1="85.0" x2="55.0" y2="135.0" stroke="#64748b" stroke-width="1" />
<text x="47.0" y="115.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >h</text>
<line x1="51.0" y1="135.0" x2="59.0" y2="135.0" stroke="#64748b" stroke-width="1" />
<line x1="51.0" y1="335.0" x2="59.0" y2="335.0" stroke="#64748b" stroke-width="1" />
<line x1="55.0" y1="135.0" x2="55.0" y2="335.0" stroke="#64748b" stroke-width="1" />
<text x="47.0" y="240.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >D</text>
<line x1="125.0" y1="135.0" x2="132.9" y2="135.0" stroke="#970E53" stroke-width="1.4" />
<line x1="125.0" y1="346.0" x2="125.0" y2="356.0" stroke="#970E53" stroke-width="1" />
<line x1="132.9" y1="346.0" x2="132.9" y2="356.0" stroke="#970E53" stroke-width="1" />
<line x1="174.3" y1="346.0" x2="174.3" y2="356.0" stroke="#970E53" stroke-width="1" />
<line x1="125.0" y1="351.0" x2="174.3" y2="351.0" stroke="#970E53" stroke-width="1.2" />
<text x="129.9" y="369.0" text-anchor="end" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δx<tspan dy='3' font-size='10'>1</tspan><tspan dy='-3'></tspan></text>
<text x="157.6" y="369.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δx<tspan dy='3' font-size='10'>2</tspan><tspan dy='-3'></tspan></text>
<text x="184.3" y="250.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >chute libre :</text>
<text x="184.3" y="265.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >vitesse latérale</text>
<text x="184.3" y="280.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >constante</text>
</svg>
</div>
<p class="legende">La déviation en deux temps (échelle horizontale très dilatée). Dans la zone d'interaction, le filet s'incurve de $\Delta x_1$ et acquiert une vitesse latérale. Pendant la chute libre qui suit, cette vitesse latérale reste constante et le filet s'écarte encore de $\Delta x_2$, bien plus grand.</p>

Avec l'accélération surestimée $a\_{\text{dip, naïf}} \approx \pu{0,35 m/s2}$, la déviation vaut à peine $\Delta x\_1 \approx \pu{0,28 mm}$ à la sortie de la zone d'interaction, et n'atteint au bas de la chute que&nbsp;:

<div id="grosseformule">

$$
\Delta x_{\text{dip, naïf}} \approx \pu{0,35 m/s2} \times \pu{0,04 s} \times (\pu{0,02 s} + \pu{0,10 s}) \approx \pu{0,28 mm} + \pu{1,4 mm} \approx \pu{1,7 mm}
$$

</div>

Mais la réalité est encore **quarante fois pire** pour l'hypothèse des dipôles&nbsp;!

### Prise en compte du champ dépolarisant

Pourquoi l'hypothèse $\vec{E}\_{\text{int}} \approx \vec{E}$ est-elle beaucoup trop optimiste&nbsp;? Parce qu'elle oublie **le champ dépolarisant** créé par le filet d'eau lui-même&nbsp;!

Dès que les dipôles moléculaires s'orientent légèrement perpendiculairement à l'axe du cylindre d'eau, les charges positives et négatives se compensent au cœur du liquide, mais **des charges liées de polarisation non compensées apparaissent sur les deux flancs opposés du cylindre** (négatives du côté de la règle si celle-ci est positive, et positives sur la face opposée). Ces deux nappes de charges de surface engendrent à l'intérieur de l'eau un champ électrique secondaire $\vec{E}\_{\text{dép}}$ dirigé en sens inverse de $\vec{P}$, qui tend à écranter le champ extérieur $\vec{E}$&nbsp;!

<div id="def">

À l'intérieur d'un cylindre diélectrique polarisé uniformément selon une direction perpendiculaire à son axe, les charges de polarisation créent un **champ dépolarisant** uniforme&nbsp;:

<div id="grosseformule">

$$
\vec{E}\_{\text{dép}} = -\frac{\vec{P}}{2\varepsilon\_0} \qquad \Longrightarrow \qquad \vec{E}\_{\text{int}} = \vec{E} + \vec{E}\_{\text{dép}} = \vec{E} - \frac{\vec{P}}{2\varepsilon\_0}
$$

</div>

</div>

<br>

<div class="svg-container">
<svg viewBox="0 0 380 230" role="img" aria-label="Coupe du filet d'eau : la polarisation fait apparaître des charges sur ses flancs, qui créent à l'intérieur un champ opposé au champ extérieur" style="width:100%;max-width:380px;height:auto;">
<defs><marker id="fp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#970E53" stroke-width="1.6"/></marker></defs>
<defs><marker id="fpb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#004D80" stroke-width="1.6"/></marker></defs>
<line x1="30.0" y1="32.5" x2="350.0" y2="32.5" stroke="#c67aa0" stroke-width="1.2" marker-end="url(#fp)"/>
<line x1="30.0" y1="68.5" x2="350.0" y2="68.5" stroke="#c67aa0" stroke-width="1.2" marker-end="url(#fp)"/>
<line x1="30.0" y1="167.5" x2="350.0" y2="167.5" stroke="#c67aa0" stroke-width="1.2" marker-end="url(#fp)"/>
<line x1="30.0" y1="203.5" x2="350.0" y2="203.5" stroke="#c67aa0" stroke-width="1.2" marker-end="url(#fp)"/>
<circle cx="190" cy="118" r="70" fill="#e0eaf0" stroke="#004D80" stroke-width="1.6"/>
<text x="220.1" y="69.9" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="159.9" y="69.9" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="232.6" y="79.4" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="147.4" y="79.4" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="242.1" y="91.9" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="137.9" y="91.9" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="248.1" y="106.4" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="131.9" y="106.4" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="250.2" y="122.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="129.8" y="122.0" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="248.1" y="137.6" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="131.9" y="137.6" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="242.1" y="152.1" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="137.9" y="152.1" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="232.6" y="164.6" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="147.4" y="164.6" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<text x="220.1" y="174.1" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="159.9" y="174.1" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >−</text>
<line x1="218.0" y1="104.0" x2="162.0" y2="104.0" stroke="#004D80" stroke-width="1.8" marker-end="url(#fpb)"/>
<text x="190.0" y="96.0" text-anchor="middle" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >E<tspan dy='3' font-size='10'>dép</tspan><tspan dy='-3'></tspan></text>
<line x1="181.0" y1="136.0" x2="199.0" y2="136.0" stroke="#970E53" stroke-width="1.8" marker-end="url(#fp)"/>
<text x="190.0" y="156.0" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >E<tspan dy='3' font-size='10'>int</tspan><tspan dy='-3'></tspan> ≈ E/40</text>
<text x="22.0" y="35.5" text-anchor="start" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >E</text>
<text x="190.0" y="225.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >coupe horizontale du filet d'eau</text>
</svg>
</div>
<p class="legende">Coupe du filet d'eau. La polarisation fait apparaître des charges liées sur ses flancs&nbsp;: négatives du côté d'où vient le champ, positives de l'autre. Elles créent à l'intérieur un champ dépolarisant opposé au champ extérieur, si bien que le champ intérieur n'en vaut plus que le quarantième.</p>

<br>

<div id="preuve">

**D'où vient la formule $\vec{E}\_{\text{dép}} = -\frac{\vec{P}}{2\varepsilon\_0}$&nbsp;?** On la retrouve très simplement par **superposition**&nbsp;:

1. **Champ interne d'un cylindre uniformément chargé en volume**&nbsp;: considérons d'abord un cylindre infini d'axe $Oz$ et de rayon $a$ portant une densité volumique de charge uniforme $+\rho\_0$. Par symétrie, le champ électrostatique en un point intérieur $M$ situé à la distance $r < a$ de l'axe est radial&nbsp;: $\vec{E}\_+(M) = E\_+(r)\vec{u}\_r$. Le théorème de Gauss appliqué à un cylindre coaxial de rayon $r$ et de hauteur $h$ donne&nbsp;:<br>
   $\displaystyle 2\pi r h \\, E\_+(r) = \frac{Q\_{\text{int}}}{\varepsilon\_0} = \frac{\rho\_0 (\pi r^2 h)}{\varepsilon\_0} \quad \Longrightarrow \quad \vec{E}\_+(M) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{OM}$<br>
   (où $O$ est le projeté de $M$ sur l'axe. On voit que le facteur $\frac{1}{2}$ provient directement du rapport entre l'aire du disque $\pi r^2$ et le périmètre $2\pi r$ en géométrie cylindrique 2D, là où la géométrie sphérique 3D aurait donné $\frac{\frac{4}{3}\pi r^3}{4\pi r^2} = \frac{1}{3}$).
   
2. **Superposition de deux cylindres décalés**&nbsp;: un cylindre d'eau polarisé transversalement avec une polarisation $\vec{P}$ s'obtient en superposant un cylindre d'ions/noyaux positifs ($+\rho\_0$, d'axe passant par $O\_+$) et un cylindre de nuages électroniques négatifs ($-\rho\_0$, d'axe passant par $O\_-$) légèrement décalés l'un par rapport à l'autre d'un vecteur microscopique $\overrightarrow{O\_- O\_+} = \vec{\delta}$ tel que $\vec{P} = \rho\_0 \vec{\delta}$.

3. Par théorème de superposition, le champ électrique créé en tout point intérieur $M$ par l'ensemble de ces charges liées est alors **parfaitement uniforme** et vaut&nbsp;:<br>
   $\displaystyle\vec{E}\_{\text{dép}}(M) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_+ M} - \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_- M} = \frac{\rho\_0}{2\varepsilon\_0}\left(\overrightarrow{O\_+ M} + \overrightarrow{M O\_-}\right) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_+ O\_-} = -\frac{\rho\_0 \vec{\delta}}{2\varepsilon\_0} = -\frac{\vec{P}}{2\varepsilon\_0}$

</div>

<br>

En combinant $\vec{E}\_{\text{int}} = \vec{E} - \frac{\vec{P}}{2\varepsilon\_0}$ avec la loi constitutive du diélectrique $\vec{P} = \varepsilon\_0(\varepsilon\_r - 1)\vec{E}\_{\text{int}}$, on élimine $\vec{P}$ en une ligne&nbsp;:

$$\vec{E}\_{\text{int}} + \frac{\varepsilon\_r - 1}{2}\vec{E}\_{\text{int}} = \vec{E} \quad \Longleftrightarrow \quad \frac{\varepsilon\_r + 1}{2}\vec{E}\_{\text{int}} = \vec{E}$$

ce qui donne le champ électrique réellement ressenti par les molécules d'eau à l'intérieur du filet ainsi que le vecteur polarisation effectif&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\vec{E}_{\text{int}} = \frac{2}{\varepsilon_r + 1}\vec{E} \approx \frac{\vec{E}}{40} \qquad \text{et} \qquad \vec{P} = 2\varepsilon_0 \frac{\varepsilon_r - 1}{\varepsilon_r + 1}\vec{E}
$$

</div>

</div>

<br>

À cause du champ dépolarisant, le champ électrique à l'intérieur du filet d'eau est **quarante fois plus faible** que le champ extérieur dans l'air&nbsp;!

Il n'y a même pas besoin de refaire le calcul vectoriel de $(\vec{P}\cdot\vec{\nabla})\vec{E}$&nbsp;: en comparant $\vec{P} = 2\varepsilon\_0\frac{\varepsilon\_r - 1}{\varepsilon\_r + 1}\vec{E}$ à l'expression naïve $\vec{P}\_{\text{naïf}} = \varepsilon\_0(\varepsilon\_r - 1)\vec{E}$, on voit qu'il suffit de diviser la force et l'accélération naïves par $\frac{\varepsilon\_r + 1}{2} = \frac{81}{2} = 40,5$&nbsp;!

<div id="preuve">

On remarque au passage une conséquence physique frappante&nbsp;: puisque le facteur $\frac{\varepsilon\_r - 1}{\varepsilon\_r + 1} = \frac{79}{81} \approx 0,975 \approx 1$ sature dès que $\varepsilon\_r \gg 1$, la très forte permittivité diélectrique de l'eau ($\varepsilon\_r \approx 80$) est presque entièrement neutralisée par le champ dépolarisant&nbsp;! Un liquide très polaire comme l'eau subit ainsi à peine trois fois plus de force dipolaire qu'un alcane totalement apolaire comme l'hexane ($\varepsilon\_r \approx 1,9$, pour lequel $\frac{\varepsilon\_r - 1}{\varepsilon\_r + 1} \approx 0,31$).

</div>

<br>

La véritable force volumique dipolaire $f\_{\text{dip}}$ et l'accélération transversale $a\_{\text{dip}} = \frac{f\_{\text{dip}}}{\rho}$ communiquée au filet d'eau par ses dipôles moléculaires plafonnent donc à&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\begin{aligned}
f_{\text{dip}} &= \frac{2\varepsilon_0}{r}\frac{\varepsilon_r - 1}{\varepsilon_r + 1} E^2 \quad \Longrightarrow \quad a_{\text{dip}} = \frac{2\varepsilon_0}{\rho \\, r}\frac{\varepsilon_r - 1}{\varepsilon_r + 1} E^2\\\\
a_{\text{dip}} &= \frac{a_{\text{dip, naïf}}}{40,5} \approx \pu{8,6e-3 m/s2} \approx \pu{0,009 m/s2}
\end{aligned}
$$

</div>

</div>

En reprenant exactement la même cinématique de chute libre en deux temps ($\Delta t\_1 \approx \pu{0,04 s}$ sur la hauteur d'interaction $h = \pu{5 cm}$ face à la règle, suivis de $\Delta t\_2 \approx \pu{0,10 s}$ de vol libre sur $D = \pu{20 cm}$ jusqu'au bas du jet), la déviation latérale $\Delta x\_{\text{dip}}$ produite par la polarité des molécules d'eau vaut simplement $\frac{\Delta x\_{\text{dip, naïf}}}{40,5}$ et plafonne à&nbsp;:

<div id="grosseformule">

$$
\Delta x_{\text{dip}} = a_{\text{dip}} \\, \Delta t_1 \left(\frac{1}{2}\Delta t_1 + \Delta t_2\right) = \frac{\Delta x_{\text{dip, naïf}}}{40,5} \approx \pu{0,04 mm} = \pu{40 \mu m}
$$

</div>

Quarante micromètres au fond de l'évier (et à peine $\pu{7 \mu m}$ à la sortie de la zone d'interaction)&nbsp;: c'est totalement imperceptible à l'œil nu, et pourtant...


<div style="text-align: center; margin: 24px auto;">
  <video src="/filetdeau_boomerang.mp4" autoplay loop muted playsinline style="width: 200px; max-width: 100%; border-radius: 8px; display: inline-block;"></video>
</div>

Or, comme le montre la vidéo ci-dessus, la déviation réellement observée atteint facilement le centimètre, soit des centaines de fois plus. D'où vient-elle&nbsp;?


## Le vrai coupable : la conduction ionique

Ce que l'explication «&nbsp;chimiste&nbsp;» oublie complètement, c'est que l'eau qui sort du robinet (et même l'eau distillée ou ultra-pure) **n'est pas un isolant parfait, mais un conducteur électrolytique** relié à la terre par la tuyauterie métallique (ou le réservoir)&nbsp;!

Dans l'eau du robinet, on trouve quantité d'ions dissous ($\text{Ca}^{2+}, \text{Mg}^{2+}, \text{Na}^+, \text{Cl}^-, \text{HCO}\_3^-\dots$) qui lui confèrent une conductivité électrique $\sigma \approx \pu{5e-2 S/m}$. Et même dans une eau théoriquement pure à $100\\,\\%$, l'autoprotolyse de l'eau ($\ce{2 H2O <=> H3O+ + HO-}$) maintient en permanence une concentration de $\pu{10^{-7} mol/L}$ d'ions hydronium et hydroxyde, assurant une conductivité minimale $\sigma_{\text{pure}} \approx \pu{5,5e-6 S/m}$ (qui grimpe très vite à $\pu{10^{-4} S/m}$ dès que le dioxyde de carbone de l'air s'y dissout).

Que se passe-t-il lorsqu'on approche la règle chargée (disons négativement, $Q < 0$) de ce conducteur relié à la terre&nbsp;? C'est le phénomène classique d'**électrisation par influence**&nbsp;:

<ol style="margin-top:-0.5em; margin-bottom:1em;">
<li>Tant que le filet d'eau est <b>continu</b> depuis le bec du robinet, le champ électrique de la règle attire les ions positifs (cations) vers la surface du filet d'eau qui lui fait face, et repousse les ions négatifs (anions) vers le robinet (la terre).</li>
<li>Le filet d'eau acquiert donc une <b>charge électrique nette non nulle</b> (ici positive, de signe opposé à celle de la règle) par unité de longueur&nbsp;!</li>
<li>Au lieu de subir une minuscule force en gradient de champ sur des dipôles neutres, cette portion chargée du filet d'eau subit directement la <b>force de Coulomb</b> $\vec{F} = q\vec{E}$&nbsp;!</li>
</ol>


<div class="svg-container">
<svg viewBox="0 0 460 440" role="img" aria-label="Influence : la règle chargée négativement attire des ions positifs dans le filet relié à la terre et repousse les ions négatifs vers la terre ; le filet chargé est attiré et ses gouttes emportent leur charge" style="width:100%;max-width:460px;height:auto;">
<defs><marker id="fr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#004D80" stroke-width="1.6"/></marker></defs>
<path d="M60,40 L190,40 Q210,40 210,60 L210,120 L176,120 L176,74 L60,74 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.4" stroke-linejoin="round"/>
<rect x="170" y="120" width="46" height="14" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.2"/>
<line x1="60.0" y1="57.0" x2="30.0" y2="57.0" stroke="#334155" stroke-width="1.4" />
<line x1="30.0" y1="57.0" x2="30.0" y2="95.0" stroke="#334155" stroke-width="1.4" />
<line x1="17.0" y1="95.0" x2="43.0" y2="95.0" stroke="#334155" stroke-width="1.4" />
<line x1="21.5" y1="101.0" x2="38.5" y2="101.0" stroke="#334155" stroke-width="1.4" />
<line x1="26.0" y1="107.0" x2="34.0" y2="107.0" stroke="#334155" stroke-width="1.4" />
<text x="30.0" y="132.0" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >terre</text>
<circle cx="193.0" cy="108.0" r="7.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="189.2" y1="108.0" x2="196.8" y2="108.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="193.0" cy="84.0" r="7.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="189.2" y1="84.0" x2="196.8" y2="84.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="150.0" cy="57.0" r="7.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="146.2" y1="57.0" x2="153.8" y2="57.0" stroke="#004D80" stroke-width="1.8" />
<path d="M193,72 Q188,52 160,50 L118,52" fill="none" stroke="#004D80" stroke-width="1.6" marker-end="url(#fr)"/>
<text x="100.0" y="26.0" text-anchor="start" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" >ions − repoussés vers la terre</text>
<polyline points="193.0,134.0 193.1,139.5 193.3,144.9 193.5,150.3 193.7,155.6 193.9,160.8 194.2,166.0 194.6,171.1 194.9,176.1 195.3,181.1 195.8,186.0 196.2,190.8 196.7,195.6 197.3,200.3 197.8,204.9 198.4,209.4 199.1,213.9 199.8,218.4 200.5,222.7 201.2,227.0 202.0,231.2 202.8,235.4 203.7,239.5 204.6,243.5 205.5,247.4 206.4,251.3 207.4,255.1 208.5,258.9 209.5,262.6 210.6,266.2 211.8,269.8 212.9,273.2 214.1,276.6 215.4,280.0 216.6,283.3 217.9,286.5 219.3,289.6 220.7,292.7 222.1,295.7 223.5,298.7 225.0,301.6 226.5,304.4 228.1,307.1 229.7,309.8 231.3,312.4 232.9,314.9 234.6,317.4 236.4,319.8 238.1,322.2 239.9,324.4 241.8,326.6 243.6,328.8 245.5,330.8 247.5,332.9 249.4,334.8 251.4,336.7 253.5,338.5 255.6,340.2 257.7,341.9 259.8,343.5 262.0,345.0" fill="none" stroke="#a6c1d3" stroke-width="12" stroke-linecap="round"/>
<circle cx="212.3" cy="235.8" r="6.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="208.5" y1="235.8" x2="216.1" y2="235.8" stroke="#970E53" stroke-width="1.8" /><line x1="212.3" y1="232.0" x2="212.3" y2="239.6" stroke="#970E53" stroke-width="1.8" />
<circle cx="219.4" cy="263.5" r="6.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="215.6" y1="263.5" x2="223.2" y2="263.5" stroke="#970E53" stroke-width="1.8" /><line x1="219.4" y1="259.7" x2="219.4" y2="267.3" stroke="#970E53" stroke-width="1.8" />
<circle cx="228.3" cy="287.6" r="6.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="224.5" y1="287.6" x2="232.1" y2="287.6" stroke="#970E53" stroke-width="1.8" /><line x1="228.3" y1="283.8" x2="228.3" y2="291.4" stroke="#970E53" stroke-width="1.8" />
<circle cx="239.0" cy="308.3" r="6.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="235.2" y1="308.3" x2="242.8" y2="308.3" stroke="#970E53" stroke-width="1.8" /><line x1="239.0" y1="304.5" x2="239.0" y2="312.1" stroke="#970E53" stroke-width="1.8" />
<circle cx="251.5" cy="325.5" r="6.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="247.7" y1="325.5" x2="255.3" y2="325.5" stroke="#970E53" stroke-width="1.8" /><line x1="251.5" y1="321.7" x2="251.5" y2="329.3" stroke="#970E53" stroke-width="1.8" />
<circle cx="281.8" cy="360.5" r="8.5" fill="#a6c1d3"/>
<circle cx="281.8" cy="360.5" r="5.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="278.0" y1="360.5" x2="285.6" y2="360.5" stroke="#970E53" stroke-width="1.8" /><line x1="281.8" y1="356.7" x2="281.8" y2="364.3" stroke="#970E53" stroke-width="1.8" />
<circle cx="301.7" cy="380.0" r="8.5" fill="#a6c1d3"/>
<circle cx="301.7" cy="380.0" r="5.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="297.9" y1="380.0" x2="305.5" y2="380.0" stroke="#970E53" stroke-width="1.8" /><line x1="301.7" y1="376.2" x2="301.7" y2="383.8" stroke="#970E53" stroke-width="1.8" />
<circle cx="321.5" cy="403.6" r="8.5" fill="#a6c1d3"/>
<circle cx="321.5" cy="403.6" r="5.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="317.7" y1="403.6" x2="325.3" y2="403.6" stroke="#970E53" stroke-width="1.8" /><line x1="321.5" y1="399.8" x2="321.5" y2="407.4" stroke="#970E53" stroke-width="1.8" />
<circle cx="341.3" cy="431.1" r="8.5" fill="#a6c1d3"/>
<circle cx="341.3" cy="431.1" r="5.5" fill="#fff" stroke="#970E53" stroke-width="1.5"/><line x1="337.5" y1="431.1" x2="345.1" y2="431.1" stroke="#970E53" stroke-width="1.8" /><line x1="341.3" y1="427.3" x2="341.3" y2="434.9" stroke="#970E53" stroke-width="1.8" />
<rect x="300" y="226" width="140" height="30" rx="8" fill="#e6edf2" stroke="#004D80" stroke-width="1.4"/>
<circle cx="316.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="312.2" y1="241.0" x2="319.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="338.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="334.2" y1="241.0" x2="341.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="360.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="356.2" y1="241.0" x2="363.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="382.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="378.2" y1="241.0" x2="385.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="404.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="400.2" y1="241.0" x2="407.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<circle cx="426.0" cy="241.0" r="6.5" fill="#fff" stroke="#004D80" stroke-width="1.5"/><line x1="422.2" y1="241.0" x2="429.8" y2="241.0" stroke="#004D80" stroke-width="1.8" />
<text x="370.0" y="214.0" text-anchor="middle" font-size="12.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >règle chargée</text>
<text x="222.0" y="196.0" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >ions + attirés :</text>
<text x="222.0" y="211.0" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >le filet se charge</text>
<text x="372.0" y="404.0" text-anchor="start" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >gouttes chargées</text>
</svg>
</div>
<p class="legende">Électrisation par influence. La règle, chargée négativement, attire les ions positifs de l'eau sur le flanc du filet qui lui fait face, et repousse les ions négatifs dans la tuyauterie, jusqu'à la terre. Le filet, désormais chargé, est attiré par la règle, et ses gouttes emportent leur charge.</p>

<br>

Vérifions par le calcul que les ions ont le temps de migrer et évaluons l'accélération de Coulomb correspondante&nbsp;:

### Le temps de relaxation électrique $\tau_e$

Dans un milieu de conductivité $\sigma$ et de permittivité $\varepsilon = \varepsilon_r \varepsilon_0$, la combinaison de la loi d'Ohm locale ($\vec{j} = \sigma \vec{E}$), de la conservation de la charge ($\vec{\nabla}\cdot\vec{j} + \frac{\partial \rho_e}{\partial t} = 0$) et de l'équation de Maxwell-Gauss ($\vec{\nabla}\cdot\vec{E} = \frac{\rho_e}{\varepsilon}$) donne l'évolution temporelle de la densité de charge libre&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\frac{\partial \rho_e}{\partial t} + \frac{\sigma}{\varepsilon_r \varepsilon_0}\rho_e = 0 \quad \Longrightarrow \quad \rho_e(t) = \rho_e(0)\\,\mathrm{e}^{-t/\tau_e}
$$

</div>
</div>

<br>

<div id="def">

Le temps caractéristique $\displaystyle \tau_e = \frac{\varepsilon_r \varepsilon_0}{\sigma}$ est appelé <b>temps de relaxation de Maxwell</b>.<br>
 Il mesure la durée nécessaire aux porteurs de charge pour migrer vers la surface et annuler le champ électrique à l'intérieur du conducteur.

</div>

<br>

* Pour **l'eau du robinet** ($\sigma \approx \pu{5e-2 S/m}$)&nbsp;:
  $$\tau_e = \frac{80 \times \pu{8,85e-12}}{\pu{5e-2}} \approx \pu{1,4e-8 s} = \pu{14 ns}$$
* Pour **l'eau ultra-pure** ($\sigma \approx \pu{5,5e-6 S/m}$)&nbsp;:
  $$\tau_e = \frac{80 \times \pu{8,85e-12}}{\pu{5,5e-6}} \approx \pu{1,3e-4 s} = \pu{0,13 ms}$$

Dans tous les cas, ce temps de relaxation $\tau\_e$ est **beaucoup plus court que le temps de passage dans la zone d'interaction** ($\Delta t\_1 \approx \pu{40 ms}$)&nbsp;! Même l'eau déminéralisée se comporte donc, à l'échelle de l'expérience, comme un **conducteur parfait équipotentiel** au potentiel de la terre ($V = 0$).


### Calcul de la force de Coulomb sur la charge induite

Modélisons le filet d'eau continu, de rayon $a \approx \pu{1 mm}$, comme un cylindre conducteur relié à la terre ($V = 0$), placé à la distance $r \approx \pu{2 cm}$ ($r \gg a$) de la règle électrisée. Celle-ci est portée à un potentiel $V\_0$ de quelques kilovolts et crée, à la distance $r$, le champ électrique $E$.

**Quelle charge le filet accumule-t-il&nbsp;?** Au départ, le filet est neutre. Les ions affluent depuis le robinet tant qu'il règne un champ électrique dans l'eau, et s'arrêtent dès que le filet est revenu au potentiel de la terre&nbsp;: la charge induite par unité de longueur, $\lambda\_q$, prend juste la valeur qu'il faut pour que son propre champ compense celui de la règle à l'intérieur de l'eau. Le filet et la règle se comportent donc comme les deux armatures d'un **condensateur**&nbsp;: la charge du filet est proportionnelle à la tension $|V\_0|$ entre eux, $|\lambda\_q| = C\_\ell |V\_0|$, où $C\_\ell$ est la capacité par unité de longueur d'un fin cylindre de rayon $a$ vu depuis la distance $r$&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
C_\ell \approx \frac{2\pi\varepsilon_0}{\ln(r/a)}, \qquad E \sim \frac{|V_0|}{r \ln(r/a)} \qquad \text{et} \qquad |\lambda_q| \approx C_\ell |V_0| \approx 2\pi\varepsilon_0 E \\, r
$$

</div>

</div>

<br>

<div id="preuve">

**Détail du raisonnement donnant $C\_\ell$, $E$ et $|\lambda\_q|$&nbsp;:**

1. **Champ propre créé par le cylindre d'eau chargé (théorème de Gauss)**&nbsp;: une fois que la règle a induit la charge linéique $\lambda\_q$ sur le filet d'eau de rayon $a$, les lignes de champ au voisinage du fin filet ($\rho \ge a$) convergent vers ce cylindre conducteur. Le théorème de Gauss appliqué à un cylindre coaxial de rayon $\rho$ et de hauteur $h$ donne l'expression radiale du champ au voisinage du filet&nbsp;:<br>
   $\displaystyle 2\pi \rho h \\, E(\rho) = \frac{Q\_{\text{int}}}{\varepsilon\_0} = \frac{|\lambda\_q| h}{\varepsilon\_0} \quad \Longrightarrow \quad E(\rho) = \frac{|\lambda\_q|}{2\pi\varepsilon\_0 \rho}$
   
2. **Calcul du potentiel par intégration radiale du champ ($E(\rho) = -\frac{\mathrm{d}V}{\mathrm{d}\rho}$)**&nbsp;: pour que le filet d'eau reste au potentiel de la terre ($V = 0$ en $\rho = a$) alors que la règle impose un potentiel de l'ordre de $|V\_0|$ à la distance $\rho = r$, l'intégrale radiale du champ entre $\rho = a$ et $\rho = r$ doit compenser exactement la tension $|V\_0|$&nbsp;:<br>
   $\displaystyle |V\_0| \approx \int\_a^r E(\rho)\\,\mathrm{d}\rho = \frac{|\lambda\_q|}{2\pi\varepsilon\_0}\int\_a^r \frac{\mathrm{d}\rho}{\rho} = \frac{|\lambda\_q|}{2\pi\varepsilon\_0}\ln\left(\frac{r}{a}\right)$
   
3. **Capacité linéique et charge induite par le champ $E$**&nbsp;:
   * En identifiant $|\lambda\_q| = C\_\ell |V\_0|$ dans la relation précédente, on obtient la capacité linéique du système&nbsp;:
     $$C\_\ell = \frac{|\lambda\_q|}{|V\_0|} \approx \frac{2\pi\varepsilon\_0}{\ln(r/a)}$$
   * Enfin, à la distance $\rho \sim r$, le champ propre du filet chargé, $\frac{|\lambda\_q|}{2\pi\varepsilon\_0 r}$, est du même ordre que le champ $E$ de la règle, puisque c'est lui qui le compense&nbsp;; d'où&nbsp;:<br>
     $\displaystyle E \sim \frac{|\lambda\_q|}{2\pi\varepsilon\_0 r} \approx \frac{|V\_0|}{r \ln(r/a)} \quad \Longleftrightarrow \quad |\lambda\_q| \approx 2\pi\varepsilon\_0 E \\, r$<br>
     (Numériquement, avec $r = \pu{2 cm}$ et $a = \pu{1 mm}$, le facteur logarithmique vaut $\ln(r/a) = \ln(20) \approx 3,0$ : un potentiel $|V\_0| \approx \pu{6 kV}$ permet de retrouver la bonne valeur du champ $E \approx \frac{\pu{6000 V}}{\pu{0,02 m} \times 3} = \pu{1e5 V/m}$).

</div>

<br>

La force électrostatique de Coulomb par unité de longueur de filet vaut alors $F\_\ell = |\lambda\_q| E \approx 2\pi\varepsilon\_0 r E^2$. En divisant par la masse linéique du filet d'eau ($\mu = \rho \pi a^2$), on obtient l'accélération transversale $a\_{\text{ion}}$ due aux charges libres induites&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\begin{aligned}
a_{\text{ion}} &= \frac{F_\ell}{\mu} = \frac{2\pi\varepsilon_0 r E^2}{\rho \pi a^2} = \frac{2\varepsilon_0 r E^2}{\rho \\, a^2}\\\\
&= \frac{2 \times \pu{8,85e-12 F/m} \times \pu{0,02 m} \times (\pu{1e5 V/m})^2}{\pu{1000 kg/m3} \times (\pu{1e-3 m})^2}\\\\
&\approx \pu{3,5 m/s2}
\end{aligned}
$$

</div>
</div>

<br>

<div id="preuve">

On remarque d'ailleurs que le rapport entre l'accélération ionique $a\_{\text{ion}}$ et l'accélération dipolaire $a\_{\text{dip}}$ ne dépend ni de l'intensité du champ électrique $E$, ni de la masse volumique $\rho$&nbsp;:

<div id="grosseformule">

$$
\frac{a_{\text{ion}}}{a_{\text{dip}}} = \frac{\varepsilon_r + 1}{\varepsilon_r - 1}\left(\frac{r}{a}\right)^2 \approx \left(\frac{r}{a}\right)^2 \approx \left(\frac{\pu{20 mm}}{\pu{1 mm}}\right)^2 = 400
$$

</div>

Pour un filet d'eau millimétrique situé à $1$ ou $\pu{2 cm}$ de la règle, la force de Coulomb sur les ions libres induits l'emporte donc systématiquement d'un facteur $100$ à $1000$ (**deux à trois ordres de grandeur**) sur la force dipolaire&nbsp;!

</div>

<br>

Appliquons maintenant notre cinématique de chute libre en deux temps (voir le schéma plus haut) avec cette accélération $a\_{\text{ion}} \approx \pu{3,5 m/s2}$ (pour la règle placée à $r = \pu{2 cm}$)&nbsp;:

* **Pendant la traversée de la zone d'interaction** ($h = \pu{5 cm}$, durée $\Delta t\_1 \approx \pu{0,04 s}$ à la vitesse verticale moyenne $v\_{z,1} \approx \pu{1,2 m/s}$)&nbsp;: le filet s'incurve de $\Delta x\_1 = \frac{1}{2} a\_{\text{ion}} (\Delta t\_1)^2 \approx \pu{0,28 cm} \approx \pu{3 mm}$ et acquiert une vitesse latérale $v\_x = a\_{\text{ion}} \\, \Delta t\_1 \approx \pu{14 cm/s}$&nbsp;;
* **Pendant la poursuite de la chute libre hors de la zone de champ** ($D = \pu{20 cm}$, durée $\Delta t\_2 \approx \pu{0,10 s}$ à la vitesse verticale moyenne $v\_{z,2} \approx \pu{2,0 m/s}$)&nbsp;: l'eau dérive latéralement à la vitesse $v\_x$ de $\Delta x\_2 = v\_x \\, \Delta t\_2 \approx \pu{1,4 cm}$.

Au bas du jet, la déviation latérale totale atteint alors&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
\Delta x\_{\text{ion}} = \underbrace{\frac{1}{2} a\_{\text{ion}} (\Delta t\_1)^2}\_{\approx \\, \pu{0,28 cm}} + \underbrace{(a\_{\text{ion}} \\, \Delta t\_1)\Delta t\_2}\_{\approx \\, \pu{1,4 cm}} = a\_{\text{ion}} \\, \Delta t\_1 \left(\frac{1}{2}\Delta t\_1 + \Delta t\_2\right) \approx \pu{1,7 cm} 
$$

</div>
</div>

<br>

<div id="preuve">

**Et si l'on approche la règle à $r = \pu{1 cm}$ du filet&nbsp;?** À potentiel $|V\_0| \approx \pu{6 kV}$ fixé sur la règle, rapprocher celle-ci de $r = \pu{2 cm}$ à $r = \pu{1 cm}$ fait grimper le champ électrique à $E \approx \frac{|V\_0|}{r\ln(r/a)} \approx \frac{\pu{6000 V}}{\pu{0,01 m}\times \ln(10)} \approx \pu{2,6e5 V/m}$. Comme $a\_{\text{ion}} = \frac{2\varepsilon\_0 r E^2}{\rho a^2} \propto \frac{V\_0^2}{r[\ln(r/a)]^2}$, l'accélération ionique triple pour atteindre $a\_{\text{ion}} \approx \pu{12 m/s2}$ (supérieure à $g$&nbsp;!), ce qui produit en bas de la chute une déviation $\Delta x\_{\text{ion}} \approx \pu{5 à 6 cm}$, tandis que la déviation dipolaire reste de l'ordre du demi-millimètre ($\Delta x\_{\text{dip}} = \frac{\Delta x\_{\text{ion}}}{(r/a)^2} = \frac{\Delta x\_{\text{ion}}}{100} \approx \pu{0,5 mm}$).

</div>

<br>

**Bilan.** Pour la règle placée à $\pu{2 cm}$ du filet&nbsp;:

| Mécanisme | Accélération latérale | Déviation au bas du jet |
| :--- | :---: | :---: |
| dipôles, calcul naïf | $\pu{0,35 m/s2}$ | $\pu{1,7 mm}$ |
| dipôles, avec le champ dépolarisant | $\pu{0,009 m/s2}$ | $\pu{0,04 mm}$ |
| ions (charge induite) | $\pu{3,5 m/s2}$ | $\pu{1,7 cm}$ |

Seule la conduction ionique rend compte des déviations observées.


## Coup de grâce : la charge des gouttelettes

Lorsqu'un fin filet d'eau s'écoule d'un robinet ou d'une burette, il ne reste pas cylindrique indéfiniment&nbsp;: au bout de quelques centimètres (typiquement $10$ à $\pu{15 cm}$), la tension superficielle amplifie les petites perturbations de surface et fragmente la colonne continue en un train de gouttelettes isolées. C'est l'**instabilité de Plateau-Rayleigh**.

Cette rupture du jet fournit le test expérimental ultime pour départager les deux théories&nbsp;:

* **Si l'on place la règle en haut, face à la partie continue du jet**&nbsp;: les ions migrent depuis le robinet, chargent le bas de la colonne continue, et lorsque les gouttes se détachent à la hauteur de rupture, **chaque goutte emporte avec elle une charge électrique nette piégée** ($q\_{\text{goutte}} \neq 0$)&nbsp;! Si l'on recueille l'eau déviée dans un bécher relié à un électromètre (cylindre de Faraday), l'électromètre s'affole et mesure une charge électrique considérable (c'est d'ailleurs le principe exact du [générateur électrostatique à gouttes d'eau](https://fr.wikipedia.org/wiki/Générateur_électrostatique_de_Kelvin) de **Lord Kelvin**).
* **Si l'on approche la règle uniquement en bas, face aux gouttes déjà formées**, en prenant soin de blinder la partie haute continue par un tube métallique relié à la terre&nbsp;: chaque gouttelette étant désormais isolée dans l'air, elle ne peut plus échanger d'ions avec le robinet et sa charge nette reste strictement nulle ($q\_{\text{goutte}} = 0$). Or ces gouttes sont toujours faites de molécules d'eau polaires&nbsp;: si c'était la polarité des molécules qui déviait le jet, elles devraient être déviées tout autant. En pratique, **on n'observe aucune déviation**.

<div class="svg-container">
<svg viewBox="0 0 205 410" role="img" aria-label="Selon les manuels, le jet ne serait pratiquement pas dévié" style="width:100%;max-width:205px;height:auto;">
<style>.gt0{offset-path:path('M0.03,0.00 L0.03,2.25 L0.03,4.50 L0.03,6.75 L0.03,9.00 L0.03,11.25 L0.03,13.50 L0.03,15.75 L0.03,18.00 L0.03,20.25 L0.04,22.50 L0.04,24.75 L0.04,27.00 L0.04,29.25 L0.04,31.50 L0.04,33.75 L0.04,36.00 L0.04,38.25 L0.04,40.50 L0.04,42.75 L0.04,45.00 L0.04,47.25 L0.04,49.50 L0.05,51.75 L0.05,54.00 L0.05,56.25 L0.05,58.50 L0.05,60.75 L0.05,63.00 L0.05,65.25 L0.05,67.50 L0.05,69.75 L0.05,72.00 L0.05,74.25 L0.05,76.50 L0.05,78.75 L0.06,81.00 L0.06,83.25 L0.06,85.50 L0.06,87.75 L0.06,90.00 L0.06,92.25 L0.06,94.50 L0.06,96.75 L0.06,99.00 L0.06,101.25 L0.06,103.50 L0.06,105.75 L0.06,108.00 L0.06,110.25 L0.07,112.50 L0.07,114.75 L0.07,117.00 L0.07,119.25 L0.07,121.50 L0.07,123.75 L0.07,126.00 L0.07,128.25 L0.07,130.50 L0.07,132.75 L0.07,135.00 L0.07,137.25 L0.07,139.50 L0.07,141.75 L0.07,144.00 L0.08,146.25 L0.08,148.50');offset-distance:40%;offset-rotate:0deg}@keyframes gt0-k{from{offset-distance:0%}to{offset-distance:100%}}@media (prefers-reduced-motion:no-preference){.gt0{animation:gt0-k 0.9s cubic-bezier(0.35,0,0.9,0.7) infinite}}</style>
<text x="102.5" y="18.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Manuels : dipôles seuls</text>
<rect x="57" y="36" width="26" height="14" rx="3" fill="#cbd5e1"/>
<polyline points="70.0,52.0 70.0,54.2 70.0,56.5 70.0,58.8 70.0,61.0 70.0,63.2 70.0,65.5 70.0,67.8 70.0,70.0 70.0,72.2 70.0,74.5 70.0,76.8 70.0,79.0 70.0,81.2 70.0,83.5 70.0,85.8 70.0,88.0 70.0,90.2 70.0,92.5 70.0,94.8 70.0,97.0 70.0,99.2 70.0,101.5 70.0,103.8 70.0,106.0 70.0,108.2 70.0,110.5 70.0,112.8 70.0,115.0 70.0,117.2 70.0,119.5 70.0,121.8 70.0,124.0 70.0,126.2 70.0,128.5 70.0,130.8 70.0,133.0 70.0,135.2 70.0,137.5 70.0,139.8 70.0,142.0 70.0,144.2 70.0,146.5 70.0,148.8 70.0,151.0 70.0,153.2 70.0,155.5 70.0,157.8 70.0,160.0 70.0,162.2 70.0,164.5 70.0,166.8 70.0,169.0 70.0,171.2 70.0,173.5 70.0,175.8 70.0,178.0" fill="none" stroke="#004D80" stroke-width="3.2" stroke-linecap="round"/>
<line x1="70.0" y1="52.0" x2="70.0" y2="326.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<rect x="94.0" y="118.0" width="62" height="12" rx="4" fill="#c67aa0"/>
<text x="125.0" y="128.0" text-anchor="middle" font-size="10.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >− − −</text>
<rect x="92.0" y="101.5" width="2" height="45.0" fill="none"/>
<line x1="40.0" y1="178.0" x2="110.0" y2="178.0" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 3"/>
<g transform="translate(70,178.0)">
<circle class="gt0" r="3" fill="#004D80" style="animation-delay:0.00s;offset-distance:0%"/>
<circle class="gt0" r="3" fill="#004D80" style="animation-delay:-0.18s;offset-distance:20%"/>
<circle class="gt0" r="3" fill="#004D80" style="animation-delay:-0.36s;offset-distance:40%"/>
<circle class="gt0" r="3" fill="#004D80" style="animation-delay:-0.54s;offset-distance:60%"/>
<circle class="gt0" r="3" fill="#004D80" style="animation-delay:-0.72s;offset-distance:80%"/>
</g>
<path d="M46.075999069801654,330.5 L46.075999069801654,356.5 L94.07599906980165,356.5 L94.07599906980165,330.5" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="70.1" y="376.5" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >charge recueillie : 0</text>
<text x="102.5" y="396.5" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δx ≈ 0,04 mm</text>
</svg>
<svg viewBox="0 0 205 410" role="img" aria-label="L'eau réelle est déviée d'environ 1,7 cm et ses gouttes emportent une charge" style="width:100%;max-width:205px;height:auto;">
<style>.gt1{offset-path:path('M10.16,0.00 L10.52,2.25 L10.88,4.50 L11.23,6.75 L11.58,9.00 L11.93,11.25 L12.27,13.50 L12.62,15.75 L12.96,18.00 L13.29,20.25 L13.63,22.50 L13.96,24.75 L14.29,27.00 L14.62,29.25 L14.95,31.50 L15.27,33.75 L15.59,36.00 L15.91,38.25 L16.23,40.50 L16.54,42.75 L16.86,45.00 L17.17,47.25 L17.48,49.50 L17.78,51.75 L18.09,54.00 L18.39,56.25 L18.69,58.50 L18.99,60.75 L19.29,63.00 L19.59,65.25 L19.88,67.50 L20.17,69.75 L20.46,72.00 L20.75,74.25 L21.04,76.50 L21.33,78.75 L21.61,81.00 L21.90,83.25 L22.18,85.50 L22.46,87.75 L22.74,90.00 L23.02,92.25 L23.29,94.50 L23.57,96.75 L23.84,99.00 L24.11,101.25 L24.39,103.50 L24.66,105.75 L24.92,108.00 L25.19,110.25 L25.46,112.50 L25.72,114.75 L25.98,117.00 L26.25,119.25 L26.51,121.50 L26.77,123.75 L27.03,126.00 L27.28,128.25 L27.54,130.50 L27.80,132.75 L28.05,135.00 L28.30,137.25 L28.56,139.50 L28.81,141.75 L29.06,144.00 L29.31,146.25 L29.56,148.50');offset-distance:40%;offset-rotate:0deg}@keyframes gt1-k{from{offset-distance:0%}to{offset-distance:100%}}@media (prefers-reduced-motion:no-preference){.gt1{animation:gt1-k 0.9s cubic-bezier(0.35,0,0.9,0.7) infinite}}</style>
<text x="102.5" y="18.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Eau réelle : ions</text>
<rect x="57" y="36" width="26" height="14" rx="3" fill="#cbd5e1"/>
<polyline points="70.0,52.0 70.0,54.2 70.0,56.5 70.0,58.8 70.0,61.0 70.0,63.2 70.0,65.5 70.0,67.8 70.0,70.0 70.0,72.2 70.0,74.5 70.0,76.8 70.0,79.0 70.0,81.2 70.0,83.5 70.0,85.8 70.0,88.0 70.0,90.2 70.0,92.5 70.0,94.8 70.0,97.0 70.0,99.2 70.0,101.5 70.0,103.8 70.1,106.0 70.1,108.2 70.2,110.5 70.4,112.8 70.5,115.0 70.7,117.2 70.9,119.5 71.1,121.8 71.4,124.0 71.6,126.2 71.9,128.5 72.2,130.8 72.5,133.0 72.9,135.2 73.2,137.5 73.6,139.8 74.0,142.0 74.3,144.2 74.8,146.5 75.2,148.8 75.6,151.0 76.0,153.2 76.4,155.5 76.8,157.8 77.2,160.0 77.5,162.2 77.9,164.5 78.3,166.8 78.7,169.0 79.1,171.2 79.4,173.5 79.8,175.8 80.2,178.0" fill="none" stroke="#004D80" stroke-width="3.2" stroke-linecap="round"/>
<line x1="70.0" y1="52.0" x2="70.0" y2="326.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<text x="79.1" y="110.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="80.4" y="128.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="83.0" y="146.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<text x="86.2" y="164.0" text-anchor="middle" font-size="12" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >+</text>
<rect x="94.0" y="118.0" width="62" height="12" rx="4" fill="#c67aa0"/>
<text x="125.0" y="128.0" text-anchor="middle" font-size="10.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >− − −</text>
<rect x="92.0" y="101.5" width="2" height="45.0" fill="none"/>
<line x1="40.0" y1="178.0" x2="110.0" y2="178.0" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 3"/>
<g transform="translate(70,178.0)">
<circle class="gt1" r="3" fill="#970E53" style="animation-delay:0.00s;offset-distance:0%"/>
<circle class="gt1" r="3" fill="#970E53" style="animation-delay:-0.18s;offset-distance:20%"/>
<circle class="gt1" r="3" fill="#970E53" style="animation-delay:-0.36s;offset-distance:40%"/>
<circle class="gt1" r="3" fill="#970E53" style="animation-delay:-0.54s;offset-distance:60%"/>
<circle class="gt1" r="3" fill="#970E53" style="animation-delay:-0.72s;offset-distance:80%"/>
</g>
<path d="M75.55519381175247,330.5 L75.55519381175247,356.5 L123.55519381175247,356.5 L123.55519381175247,330.5" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="99.6" y="376.5" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >charge recueillie : +</text>
<text x="102.5" y="396.5" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δx ≈ 1,7 cm</text>
</svg>
<svg viewBox="0 0 205 410" role="img" aria-label="Haut du jet blindé, règle face aux gouttes : aucune déviation" style="width:100%;max-width:205px;height:auto;">
<style>.gt2{offset-path:path('M0.00,0.00 L0.00,2.25 L0.00,4.50 L0.00,6.75 L0.00,9.00 L0.00,11.25 L0.00,13.50 L0.00,15.75 L0.00,18.00 L0.00,20.25 L0.00,22.50 L0.00,24.75 L0.00,27.00 L0.00,29.25 L0.00,31.50 L0.00,33.75 L0.00,36.00 L0.00,38.25 L0.00,40.50 L0.00,42.75 L0.00,45.00 L0.00,47.25 L0.00,49.50 L0.00,51.75 L0.00,54.00 L0.00,56.25 L0.00,58.50 L0.00,60.75 L0.00,63.00 L0.00,65.25 L0.00,67.50 L0.00,69.75 L0.00,72.00 L0.00,74.25 L0.00,76.50 L0.00,78.75 L0.00,81.00 L0.00,83.25 L0.00,85.50 L0.00,87.75 L0.00,90.00 L0.00,92.25 L0.00,94.50 L0.00,96.75 L0.00,99.00 L0.00,101.25 L0.00,103.50 L0.00,105.75 L0.00,108.00 L0.00,110.25 L0.00,112.50 L0.00,114.75 L0.00,117.00 L0.00,119.25 L0.00,121.50 L0.00,123.75 L0.00,126.00 L0.00,128.25 L0.00,130.50 L0.00,132.75 L0.00,135.00 L0.00,137.25 L0.00,139.50 L0.00,141.75 L0.00,144.00 L0.00,146.25 L0.00,148.50');offset-distance:40%;offset-rotate:0deg}@keyframes gt2-k{from{offset-distance:0%}to{offset-distance:100%}}@media (prefers-reduced-motion:no-preference){.gt2{animation:gt2-k 0.9s cubic-bezier(0.35,0,0.9,0.7) infinite}}</style>
<text x="102.5" y="18.0" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" >Jet blindé, règle en bas</text>
<rect x="57" y="36" width="26" height="14" rx="3" fill="#cbd5e1"/>
<polyline points="70.0,52.0 70.0,54.2 70.0,56.5 70.0,58.8 70.0,61.0 70.0,63.2 70.0,65.5 70.0,67.8 70.0,70.0 70.0,72.2 70.0,74.5 70.0,76.8 70.0,79.0 70.0,81.2 70.0,83.5 70.0,85.8 70.0,88.0 70.0,90.2 70.0,92.5 70.0,94.8 70.0,97.0 70.0,99.2 70.0,101.5 70.0,103.8 70.0,106.0 70.0,108.2 70.0,110.5 70.0,112.8 70.0,115.0 70.0,117.2 70.0,119.5 70.0,121.8 70.0,124.0 70.0,126.2 70.0,128.5 70.0,130.8 70.0,133.0 70.0,135.2 70.0,137.5 70.0,139.8 70.0,142.0 70.0,144.2 70.0,146.5 70.0,148.8 70.0,151.0 70.0,153.2 70.0,155.5 70.0,157.8 70.0,160.0 70.0,162.2 70.0,164.5 70.0,166.8 70.0,169.0 70.0,171.2 70.0,173.5 70.0,175.8 70.0,178.0" fill="none" stroke="#004D80" stroke-width="3.2" stroke-linecap="round"/>
<line x1="70.0" y1="52.0" x2="70.0" y2="326.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
<rect x="61" y="56.5" width="18" height="112.5" rx="3" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="56.0" y="115.0" text-anchor="end" font-size="11" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >tube relié</text>
<text x="56.0" y="128.0" text-anchor="end" font-size="11" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >à la terre</text>
<rect x="94.0" y="244.0" width="62" height="12" rx="4" fill="#c67aa0"/>
<text x="125.0" y="254.0" text-anchor="middle" font-size="10.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >− − −</text>
<rect x="92.0" y="227.5" width="2" height="45.0" fill="none"/>
<line x1="40.0" y1="178.0" x2="110.0" y2="178.0" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2 3"/>
<g transform="translate(70,178.0)">
<circle class="gt2" r="3" fill="#004D80" style="animation-delay:0.00s;offset-distance:0%"/>
<circle class="gt2" r="3" fill="#004D80" style="animation-delay:-0.18s;offset-distance:20%"/>
<circle class="gt2" r="3" fill="#004D80" style="animation-delay:-0.36s;offset-distance:40%"/>
<circle class="gt2" r="3" fill="#004D80" style="animation-delay:-0.54s;offset-distance:60%"/>
<circle class="gt2" r="3" fill="#004D80" style="animation-delay:-0.72s;offset-distance:80%"/>
</g>
<path d="M46.0,330.5 L46.0,356.5 L94.0,356.5 L94.0,330.5" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="70.0" y="376.5" text-anchor="middle" font-size="11.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >charge recueillie : 0</text>
<text x="102.5" y="396.5" text-anchor="middle" font-size="13.5" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >Δx ≈ 0</text>
</svg>
</div>
<p class="legende">Trois expériences (échelle horizontale doublée). Si seuls les dipôles agissaient (à gauche), la déviation serait invisible. Dans l'eau réelle (au centre), la règle attire des ions qui chargent le jet&nbsp;: il s'incurve, et ses gouttes emportent leur charge dans le bécher. Si le haut du jet est blindé et que la règle fait face aux gouttes (à droite), celles-ci restent neutres et ne sont pas déviées.</p>

La présence d'ions dans l'eau étant grandement favorisée par le caractère polaire et dissociant de l'eau (de permittivité $\varepsilon\_r \approx 80$), on peut en partie sauver la face de l'interprétation classique&nbsp;: l'expérience de la règle électrisée ne met pas directement en évidence l'attraction des dipôles $\text{H}\_2\text{O}$ par un gradient de champ, mais elle illustre bel et bien la **conduction électrolytique** de l'eau, qui est l'une des conséquences indirectes de sa polarité&nbsp;!

La même erreur d'interprétation touche une autre expérience célèbre d'introduction à l'électrostatique&nbsp;: **l'attraction de petits bouts de papier par une règle frottée**&nbsp;! Là encore, ce n'est pas la polarisation diélectrique de la cellulose du papier qui permet de soulever les confettis contre la gravité, mais la légère conductivité électrique du papier (due à son humidité résiduelle au contact de la table) qui permet de les charger par influence avant qu'ils ne décollent.

<br>

> **Bruno Jech**, «&nbsp;Sur l'expérience de Desaguliers de la déviation d'un filet d'eau par une tige électrisée&nbsp;», *Le Bup*, vol. 106, n<sup>o</sup> 946, juillet-août-septembre 2012, p.&nbsp;737-760.[🌐](https://ampere-archives.fr/histoire-electricite/files/original/7a632593c24a1c1497117cc4b44a40e2.pdf)
><br><br>
> **M. Ziaei-Moayyed, E. Goodman & P. Williams**, «&nbsp;Electrical Deflection of Polar Liquid Streams: A Misunderstood Demonstration&nbsp;», *Journal of Chemical Education*, vol. 77, n<sup>o</sup> 11, 2000, p.&nbsp;1520. [🌐](https://instructional-resources.physics.uiowa.edu/sites/instructional-resources.physics.uiowa.edu/files/field/demos/documents/Electrical%20Deflection%20of%20Polar%20Liquid%20Streams.pdf)
