+++
title = "L'expérience de Faroux"
date = 2026-11-01T15:00:00+01:00
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
  display: list-item;
  cursor: pointer;
}
details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
.fx-btn {
  background:#ffffff; color:#004D80; border:1px solid #B3CAD9; border-radius:20px;
  padding:6px 14px; font-size:0.85em; font-weight:600; cursor:pointer;
}
.fx-btn:hover { background:#f1f6fa; }
.fx-btn.fx-on { background:#004D80; color:#ffffff; border-color:#004D80; }
.fx-num { font-family:ui-monospace, Menlo, monospace; font-weight:700; white-space:nowrap; }
/* Remarques : un aparté discret, sans changer la couleur du texte */
.fx-note {
  background:#f5f7fa;
  border-radius:10px;
  padding:4px 20px;
  margin:20px 0;
  font-size:0.94em;
}
.fx-note > p:first-child::before {
  content:"Remarque";
  display:block;
  font-size:0.78em;
  font-weight:700;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:#64748b;
  margin-bottom:2px;
}
/* Résultats à retenir */
.fx-key {
  background-color:#FBE1DE;
  border-radius:10px;
  padding:4px 20px;
  margin:20px 0;
}
.fx-key > p:first-child {
  font-size:0.78em;
  font-weight:700;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:#970E53;
  margin-bottom:0;
}
</style>


# L'expérience de Faroux

Ou comment bien angoisser des agrégatifs de physique quelques jours avant le concours...

<div style="position:relative;margin-left:auto;margin-right:auto;width:480px;max-width:100%;">
<img src="/faroux_montage.jpg" alt="Le montage : une bobine sur un U de fer doux fermé par un barreau, alimentée par un générateur à travers un interrupteur ; un moteur en série avec une diode est branché aux bornes de la bobine et soulève une masse" style="box-shadow:none;background:none;">
</div>

Interrupteur fermé, on alimente la bobine. Puis on ouvre. Le moteur se met alors en route et remonte la masse.

Jusque-là, ça va&nbsp;: l'énergie stockée dans la bobine est restituée. Rien d'étrange (enfin si... fondamentalement, c'est étrange, mais on ne va pas s'en occuper).

C'est maintenant que la sorcellerie arrive&nbsp;: J.-P.&nbsp;Faroux, ou un semblable distributeur d'humilité, glisse un petit LU dans l'entrefer, entre le barreau et le U qui étaient jusque-là en contact (attention, le choix de l'objet magique est un révélateur de personnalité... et, on le verra, il n'est pas anodin).

Que se passe-t-il si on refait la manip précédente&nbsp;? La masse monte bien plus haut&nbsp;!

Suivent les fanfaronnades du démonstrateur, «&nbsp;c'est fou l'énergie que contiennent ces petits gâteaux&nbsp;», et la perplexité coupable, nerveuse et bientôt résignée de l'assistance.

«&nbsp;Pas de réponse, c'est à vous de chercher...&nbsp;»

Avec un peu d'obstination et beaucoup de feignantise, on finit par trouver la solution... sur internet (une fiche de Cachan sur les bobines). Je vais délayer un peu pour être sûr d'avoir compris.

Mais avant cela, un résumé pour les pressés (attention, *spoiler*)&nbsp;:

<div class="fx-key">

En bref

L'énergie stockée dans la bobine (et restituée au moteur) vaut $W = \int I\\,\mathrm{d}\Phi$, où $I$ est l'intensité et $\Phi$ le flux magnétique à travers la bobine. Le fer **plafonne** le flux (il sature), mais l'entrefer **repousse** la saturation vers les grands courants. À flux final quasi identique, il faut donc «&nbsp;payer&nbsp;» chaque $\mathrm{d}\Phi$ avec un courant plus grand&nbsp;: l'intégrale augmente.

Autrement dit, ce n'est pas le fer qui stocke l'énergie, c'est **l'air de l'entrefer**. Le fer se contente d'y canaliser le champ.

</div>

Place au délayage.

## Le circuit

Voici le montage, redessiné en schéma électrique. Ferme puis ouvre l'interrupteur&nbsp;: les points matérialisent le courant, la jauge l'énergie magnétique stockée dans la bobine.

<div id="faroux-circuit" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:14px 16px 16px; margin:20px auto; max-width:680px; font-family:system-ui,-apple-system,sans-serif; color:#1e293b;">
<svg id="fcSvg" viewBox="0 0 640 285" role="img" aria-label="Schéma électrique animé : alimentation, interrupteur, bobine à noyau de fer, diode et moteur qui soulève une masse" style="width:100%;height:auto;display:block;">
<g stroke="#334155" stroke-width="2" fill="none" stroke-linecap="round">
<path d="M60,128 V50 H130"/><path d="M180,50 H335"/><path d="M365,50 H450 V116"/><path d="M450,164 V230 H60 V140"/>
<path d="M260,50 V95 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 V230"/>
</g>
<line x1="278" y1="92" x2="278" y2="188" stroke="#c9a227" stroke-width="2"/><line x1="283" y1="92" x2="283" y2="188" stroke="#c9a227" stroke-width="2"/>
<path id="fcLoop1" d="M60,128 V50 H260 V95 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 V230 H60 V140" fill="none" stroke="#970E53" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1 16" opacity="0"/>
<path id="fcLoop2" d="M260,50 V95 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 a9,7.5 0 0 1 0,15 V230 H450 V50 H260" fill="none" stroke="#970E53" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.1 16" opacity="0"/>
<line x1="42" y1="128" x2="78" y2="128" stroke="#334155" stroke-width="2.4"/><line x1="51" y1="140" x2="69" y2="140" stroke="#334155" stroke-width="4.5"/>
<text x="84" y="124" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif">+</text>
<text x="30" y="139" text-anchor="end" font-size="15" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">U</text>
<circle cx="130" cy="50" r="3.5" fill="#334155"/><circle cx="180" cy="50" r="3.5" fill="#334155"/>
<line id="fcLever" x1="130" y1="50" x2="175" y2="26" stroke="#334155" stroke-width="2.4" stroke-linecap="round"/>
<text x="155" y="78" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">interrupteur</text>
<circle cx="260" cy="50" r="3.5" fill="#334155"/><circle cx="260" cy="230" r="3.5" fill="#334155"/>
<text x="246" y="145" text-anchor="end" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">bobine</text>
<text x="246" y="160" text-anchor="end" font-size="11" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif" font-style="italic">(N, r)</text>
<polygon points="337,50 363,36 363,64" fill="#ffffff" stroke="#334155" stroke-width="2" stroke-linejoin="round"/><line x1="337" y1="36" x2="337" y2="64" stroke="#334155" stroke-width="2.4"/>
<text x="350" y="26" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">diode</text>
<rect x="302" y="95" width="13" height="90" rx="3" fill="#ffffff" stroke="#cbd5e1"/>
<rect id="fcGauge" x="303" y="184" width="11" height="0" rx="2" fill="#e9b949"/>
<text x="308.5" y="200" text-anchor="middle" font-size="10.5" fill="#b7791f" font-family="Georgia,'Times New Roman',serif" font-style="italic">énergie</text>
<circle cx="450" cy="140" r="24" fill="#ffffff" stroke="#334155" stroke-width="2"/>
<text x="450" y="146" text-anchor="middle" font-size="17" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">M</text>
<text x="418" y="102" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">moteur</text>
<line x1="474" y1="140" x2="500" y2="140" stroke="#94a3b8" stroke-width="3"/>
<g id="fcDrum"><circle cx="510" cy="140" r="10" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/><line x1="510" y1="131" x2="510" y2="149" stroke="#334155" stroke-width="1.4"/></g>
<line id="fcString" x1="520" y1="140" x2="520" y2="236" stroke="#b7791f" stroke-width="1.4"/>
<g id="fcMass"><rect x="506" y="236" width="28" height="24" rx="3" fill="#64748b"/><text x="520" y="253" text-anchor="middle" font-size="12" fill="#ffffff" font-family="Georgia,'Times New Roman',serif" font-style="italic">m</text></g>
<line x1="550" y1="260" x2="550" y2="160" stroke="#cbd5e1" stroke-width="1"/>
<g font-size="9.5" fill="#94a3b8" font-family="Georgia,'Times New Roman',serif"><text x="555" y="263">0</text><text x="555" y="223">20 cm</text><text x="555" y="191">40 cm</text><text x="555" y="159">60 cm</text></g>
<g stroke="#cbd5e1" stroke-width="1"><line x1="547" y1="260" x2="553" y2="260"/><line x1="547" y1="228" x2="553" y2="228"/><line x1="547" y1="196" x2="553" y2="196"/><line x1="547" y1="164" x2="553" y2="164"/></g>
</svg>
<div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:8px;">
<button type="button" id="fcSwitch" class="fx-btn fx-on">Fermer l'interrupteur</button>
<button type="button" class="fx-btn fc-core fx-on" data-e="0">Fer au contact</button>
<button type="button" class="fx-btn fc-core" data-e="5">Petit-beurre (e ≈ 5 mm)</button>
<button type="button" class="fx-btn fc-core" data-e="2">20 copies de chaque côté (e ≈ 2 mm)</button>
</div>
<div style="display:flex; flex-wrap:wrap; gap:6px 18px; justify-content:center; margin-top:10px; font-size:0.85em; color:#475569;">
<span>courant&nbsp;: <span id="fcI" class="fx-num" style="color:#970E53;">0,00 A</span></span>
<span>énergie dans la bobine&nbsp;: <span id="fcW" class="fx-num" style="color:#b7791f;">0,00 J</span></span>
<span>énergie reçue par le moteur&nbsp;: <span id="fcE" class="fx-num" style="color:#004D80;">0,00 J</span></span>
</div>
<div style="text-align:center; font-size:0.75em; color:#94a3b8; margin-top:6px;">Simulation ralentie vingt fois&nbsp;: bobine de 500 spires (2,4 Ω), alimentation 12 V (I<sub>max</sub> = 5 A), moteur assimilé à une résistance de 7,5 Ω, diode de seuil 0,7 V, masse de 300 g.</div>
</div>

Pendant la charge, la diode est bloquée&nbsp;: sa cathode est reliée au «&nbsp;+&nbsp;» de l'alimentation, aucun courant ne traverse le moteur. À l'ouverture de l'interrupteur, la bobine refuse que son courant s'arrête net&nbsp;: il continue dans le même sens à travers la bobine, et la seule issue est la boucle bobine → moteur → diode, cette fois dans le sens passant. Sans diode, ce courant n'aurait nulle part où aller et la bobine se déchargerait dans une belle étincelle aux bornes de l'interrupteur.

## Oublions un temps le fer...

On allume l'alimentation, qui délivre une tension $U$. Le courant dans la bobine augmente jusqu'à atteindre une valeur maximale $I\_\text{max} = U/r$, où $r$ est la résistance de la bobine.

Mais ce courant crée un champ magnétique, et la variation du flux $\Phi$ de ce champ à travers les spires induit une force électromotrice (loi de Faraday, le signe moins traduisant la loi de Lenz)&nbsp;:

$$
e = -\frac{\mathrm{d}\Phi}{\mathrm{d}t}
$$

Elle s'oppose à l'augmentation du courant. Ici $\Phi$ désigne le flux total à travers la bobine, c'est-à-dire la somme des flux à travers chacune de ses $N$ spires.

Sans fer, le flux est proportionnel au courant, et le coefficient de proportionnalité est l'inductance propre $L$ (ou coefficient d'auto-induction)&nbsp;: $\Phi = L I$.

Électriquement, on a donc&nbsp;:

$$
U = rI + \frac{\mathrm{d}\Phi}{\mathrm{d}t} = rI + L\frac{\mathrm{d}I}{\mathrm{d}t}
$$

C'est l'équation du mouvement d'une bille qui tombe dans un liquide visqueux, $mg = fv + m\frac{\mathrm{d}v}{\mathrm{d}t}$, avec $L$ dans le rôle de la masse. L'alimentation doit lutter contre l'**inertie électrique** de la bobine, qui rend difficile la variation du courant, tout comme la masse rend difficile la variation de vitesse.

Multiplions par $I$ pour passer aux puissances&nbsp;:

$$
UI = rI^2 + I\\,\frac{\mathrm{d}\Phi}{\mathrm{d}t}
$$

La puissance fournie par l'alimentation, $UI$, se partage entre l'effet Joule $rI^2$, perdu en chaleur, et un terme $I\\,\mathrm{d}\Phi/\mathrm{d}t$ stocké dans la bobine. En mécanique, c'est pareil&nbsp;: $mgv = fv^2 + v\\,\frac{\mathrm{d}p}{\mathrm{d}t}$, une partie s'envole en frottements, l'autre est stockée dans le mouvement ($p$ étant la quantité de mouvement de la bille).

L'énergie stockée dans la bobine vaut alors&nbsp;:

<div class="fx-key">

Énergie stockée dans une bobine

<div id="grosseformule">

$$
W = \int I\\,\mathrm{d}\Phi \qquad\text{et, sans fer,}\qquad W = \int\_0^{I\_\text{max}} L I\\,\mathrm{d}I = \frac{1}{2}LI\_\text{max}^2
$$

</div>

</div>

C'est l'analogue de l'énergie cinétique de la bille, $\int v\\,\mathrm{d}p = \frac{1}{2}mv^2$. Arrêter le courant revient à arrêter la bille&nbsp;: l'énergie est restituée et peut être récupérée.

Mais sans fer, point de petit LU.

## Retour du fer

Reprenons l'analogie mécanique. Le fer a une action bien étrange&nbsp;: il commence par augmenter énormément la masse de la bille, tant que sa vitesse est faible, puis, pouf, il fait disparaître ce gain de masse. Au final, l'énergie stockée est bien plus importante (on a dû beaucoup plus lutter pour faire avancer la bille), alors que la vitesse atteinte est la même&nbsp;: on garde toujours le même $I\_\text{max} = U/r$.

<div class="svg-container">
<svg viewBox="0 0 600 150" role="img" aria-label="Analogie mécanique : sans fer, la bille garde la même masse ; avec le fer, sa masse enfle aux faibles vitesses puis redevient normale" style="width:100%;max-width:600px;height:auto;">
<defs><marker id="fbl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#b9a7d9" stroke-width="1.8"/></marker></defs>
<line x1="120" y1="40" x2="585" y2="40" stroke="#d9cdee" stroke-width="5" stroke-linecap="round" marker-end="url(#fbl)"/>
<text x="10" y="44" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">sans fer</text>
<circle cx="130.0" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="127.2" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="177.8" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="175.0" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="225.6" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="222.8" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="273.3" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="270.5" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="321.1" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="318.3" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="368.9" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="366.1" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="416.7" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="413.9" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="464.4" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="461.6" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="512.2" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="509.4" cy="37.2" r="2.2" fill="#ffffff"/>
<circle cx="560.0" cy="40" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="557.2" cy="37.2" r="2.2" fill="#ffffff"/>
<line x1="120" y1="108" x2="585" y2="108" stroke="#d9cdee" stroke-width="5" stroke-linecap="round" marker-end="url(#fbl)"/>
<text x="10" y="112" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">avec fer</text>
<circle cx="130.0" cy="108" r="9" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="126.8" cy="104.8" r="2.5" fill="#ffffff"/>
<circle cx="177.8" cy="108" r="14" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="172.9" cy="103.1" r="3.9" fill="#ffffff"/>
<circle cx="225.6" cy="108" r="19" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="218.9" cy="101.3" r="5.3" fill="#ffffff"/>
<circle cx="273.3" cy="108" r="24" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="264.9" cy="99.6" r="6.7" fill="#ffffff"/>
<circle cx="321.1" cy="108" r="28" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="311.3" cy="98.2" r="7.8" fill="#ffffff"/>
<circle cx="368.9" cy="108" r="13" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="364.3" cy="103.5" r="3.6" fill="#ffffff"/>
<circle cx="416.7" cy="108" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="413.9" cy="105.2" r="2.2" fill="#ffffff"/>
<circle cx="464.4" cy="108" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="461.6" cy="105.2" r="2.2" fill="#ffffff"/>
<circle cx="512.2" cy="108" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="509.4" cy="105.2" r="2.2" fill="#ffffff"/>
<circle cx="560.0" cy="108" r="8" fill="#eef2f7" stroke="#334155" stroke-width="1.6"/><circle cx="557.2" cy="105.2" r="2.2" fill="#ffffff"/>
<text x="560" y="145" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">vitesse croissante (courant croissant) →</text>
</svg>
</div>

Le matériau ferromagnétique démultiplie le flux à travers la bobine, et donc sa variation. Le champ créé par la bobine oriente les moments magnétiques des atomes du fer (en pratique, en déplaçant les parois entre domaines magnétiques). Le matériau produit alors à son tour un champ de même sens, mais bien plus grand que celui de la bobine&nbsp;: les spins «&nbsp;coopèrent&nbsp;», c'est ce qui permet le gain.

La perméabilité relative $\mu\_r$ mesure ce gain&nbsp;: dans le fer, $B = \mu\_0\mu\_r H$, où $H$ est l'excitation magnétique imposée par les courants. Pour un fer doux, $\mu\_r$ atteint plusieurs milliers&nbsp;!

L'inertie de la bobine devient donc énorme (la variation de flux joue le rôle de la variation de quantité de mouvement), et l'énergie stockée aussi. On a désormais une inductance qui dépend du courant, $\mathrm{d}\Phi/\mathrm{d}I$, comme une masse qui dépendrait de la vitesse.

Mais n'oublions pas qu'un matériau ferromagnétique **sature**&nbsp;! Une fois que tous les moments magnétiques sont alignés, on ne peut pas les aligner davantage, autour de $B\_\text{sat} \approx \pu{1,6 T}$ pour le fer. L'apport du fer cesse alors de croître, et la pente $\mathrm{d}\Phi/\mathrm{d}I$ retombe à peu près à celle de la bobine sans fer&nbsp;: la bille retrouve sa masse d'origine.

Le flux à travers la bobine a ainsi l'allure suivante, et l'énergie stockée $W = \int I\\,\mathrm{d}\Phi$ est l'aire comprise entre la courbe et l'axe des flux&nbsp;: on découpe cet axe en petites tranches $\mathrm{d}\Phi$, chacune «&nbsp;payée&nbsp;» au prix du courant $I$ qui la produit.

<div class="svg-container">
<svg viewBox="0 0 480 290" role="img" aria-label="Courbe du flux Φ en fonction du courant I pour une bobine à noyau de fer : l’énergie stockée est l’aire comprise entre la courbe et l’axe des flux, découpée en tranches I dΦ" style="width:100%;max-width:480px;height:auto;">
<defs><marker id="fphi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker><marker id="fphr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#970E53" stroke-width="1.6"/></marker></defs>
<polygon points="55.0,250.0 56.7,246.5 58.3,243.0 60.0,239.6 61.7,236.1 63.4,232.6 65.0,229.2 66.7,225.8 68.4,222.4 70.0,219.0 71.7,215.6 73.4,212.3 75.1,209.0 76.7,205.7 78.4,202.4 80.1,199.2 81.7,196.0 83.4,192.9 85.1,189.8 86.7,186.7 88.4,183.7 90.1,180.7 91.8,177.8 93.4,174.9 95.1,172.0 96.8,169.2 98.4,166.5 100.1,163.8 101.8,161.1 103.5,158.5 105.1,156.0 106.8,153.5 108.5,151.0 110.1,148.6 111.8,146.3 113.5,144.0 115.2,141.8 116.8,139.6 118.5,137.4 120.2,135.3 121.8,133.3 123.5,131.3 125.2,129.4 126.8,127.5 128.5,125.7 130.2,123.9 131.9,122.1 133.5,120.5 135.2,118.8 136.9,117.2 138.5,115.7 140.2,114.1 141.9,112.7 143.6,111.2 145.2,109.9 146.9,108.5 148.6,107.2 150.2,105.9 151.9,104.7 153.6,103.5 155.3,102.4 156.9,101.3 158.6,100.2 160.3,99.1 161.9,98.1 163.6,97.1 165.3,96.2 166.9,95.2 168.6,94.3 170.3,93.5 172.0,92.6 173.6,91.8 175.3,91.1 177.0,90.3 178.6,89.6 180.3,88.8 182.0,88.2 183.7,87.5 185.3,86.9 187.0,86.2 188.7,85.6 190.3,85.0 192.0,84.5 193.7,83.9 195.4,83.4 197.0,82.9 198.7,82.4 200.4,81.9 202.0,81.5 203.7,81.0 205.4,80.6 207.0,80.2 208.7,79.8 210.4,79.4 212.1,79.0 213.7,78.7 215.4,78.3 217.1,78.0 218.7,77.7 220.4,77.3 222.1,77.0 223.8,76.7 225.4,76.4 227.1,76.2 228.8,75.9 230.4,75.6 232.1,75.4 233.8,75.1 235.5,74.9 237.1,74.7 238.8,74.5 240.5,74.2 242.1,74.0 243.8,73.8 245.5,73.6 247.1,73.4 248.8,73.3 250.5,73.1 252.2,72.9 253.8,72.7 255.5,72.6 257.2,72.4 258.8,72.3 260.5,72.1 262.2,72.0 263.9,71.8 265.5,71.7 267.2,71.6 268.9,71.4 270.5,71.3 272.2,71.2 273.9,71.1 275.6,71.0 277.2,70.8 278.9,70.7 280.6,70.6 282.2,70.5 283.9,70.4 285.6,70.3 287.2,70.2 288.9,70.1 290.6,70.0 292.3,69.9 293.9,69.9 295.6,69.8 297.3,69.7 298.9,69.6 300.6,69.5 302.3,69.4 304.0,69.4 305.6,69.3 307.3,69.2 309.0,69.1 310.6,69.1 312.3,69.0 314.0,68.9 315.7,68.9 317.3,68.8 319.0,68.7 320.7,68.7 322.3,68.6 324.0,68.5 325.7,68.5 327.3,68.4 329.0,68.4 330.7,68.3 332.4,68.3 334.0,68.2 335.7,68.1 337.4,68.1 339.0,68.0 340.7,68.0 342.4,67.9 344.1,67.9 345.7,67.8 347.4,67.8 349.1,67.7 350.7,67.7 352.4,67.6 354.1,67.6 355.8,67.5 357.4,67.5 359.1,67.4 360.8,67.4 362.4,67.3 364.1,67.3 365.8,67.2 367.4,67.2 369.1,67.1 370.8,67.1 372.5,67.1 374.1,67.0 375.8,67.0 377.5,66.9 379.1,66.9 380.8,66.8 382.5,66.8 384.2,66.8 385.8,66.7 387.5,66.7 55.0,66.7" fill="#fbe7a8" fill-opacity="0.75"/>
<polygon points="55.0,147.5 110.9,147.5 111.7,146.5 112.4,145.5 113.1,144.5 113.8,143.5 114.5,142.6 115.3,141.6 116.0,140.7 116.7,139.7 117.4,138.8 118.1,137.9 118.8,137.0 119.6,136.1 120.3,135.2 121.0,134.3 121.7,133.5 122.4,132.6 123.1,131.7 123.9,130.9 124.6,130.1 55.0,130.1" fill="#970E53" fill-opacity="0.22"/>
<text x="85.0" y="143.3" text-anchor="middle" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">I dΦ</text>
<polyline points="55.0,250.0 56.8,246.3 58.6,242.6 60.3,238.9 62.1,235.2 63.9,231.5 65.7,227.9 67.4,224.2 69.2,220.6 71.0,217.0 72.8,213.5 74.6,209.9 76.3,206.4 78.1,203.0 79.9,199.5 81.7,196.1 83.5,192.8 85.2,189.5 87.0,186.2 88.8,183.0 90.6,179.8 92.3,176.7 94.1,173.7 95.9,170.7 97.7,167.7 99.5,164.8 101.2,162.0 103.0,159.2 104.8,156.5 106.6,153.8 108.4,151.2 110.1,148.6 111.9,146.1 113.7,143.7 115.5,141.3 117.2,139.0 119.0,136.8 120.8,134.6 122.6,132.4 124.4,130.3 126.1,128.3 127.9,126.3 129.7,124.4 131.5,122.5 133.3,120.7 135.0,119.0 136.8,117.3 138.6,115.6 140.4,114.0 142.1,112.4 143.9,110.9 145.7,109.5 147.5,108.1 149.3,106.7 151.0,105.4 152.8,104.1 154.6,102.8 156.4,101.6 158.2,100.5 159.9,99.3 161.7,98.2 163.5,97.2 165.3,96.2 167.0,95.2 168.8,94.2 170.6,93.3 172.4,92.4 174.2,91.6 175.9,90.8 177.7,90.0 179.5,89.2 181.3,88.4 183.1,87.7 184.8,87.0 186.6,86.4 188.4,85.7 190.2,85.1 191.9,84.5 193.7,83.9 195.5,83.4 197.3,82.8 199.1,82.3 200.8,81.8 202.6,81.3 204.4,80.9 206.2,80.4 208.0,80.0 209.7,79.6 211.5,79.2 213.3,78.8 215.1,78.4 216.8,78.0 218.6,77.7 220.4,77.3 222.2,77.0 224.0,76.7 225.7,76.4 227.5,76.1 229.3,75.8 231.1,75.5 232.9,75.3 234.6,75.0 236.4,74.8 238.2,74.5 240.0,74.3 241.7,74.1 243.5,73.9 245.3,73.7 247.1,73.5 248.9,73.3 250.6,73.1 252.4,72.9 254.2,72.7 256.0,72.5 257.8,72.4 259.5,72.2 261.3,72.1 263.1,71.9 264.9,71.8 266.6,71.6 268.4,71.5 270.2,71.3 272.0,71.2 273.8,71.1 275.5,71.0 277.3,70.8 279.1,70.7 280.9,70.6 282.7,70.5 284.4,70.4 286.2,70.3 288.0,70.2 289.8,70.1 291.5,70.0 293.3,69.9 295.1,69.8 296.9,69.7 298.7,69.6 300.4,69.5 302.2,69.4 304.0,69.4 305.8,69.3 307.6,69.2 309.3,69.1 311.1,69.1 312.9,69.0 314.7,68.9 316.4,68.8 318.2,68.8 320.0,68.7 321.8,68.6 323.6,68.6 325.3,68.5 327.1,68.4 328.9,68.4 330.7,68.3 332.5,68.2 334.2,68.2 336.0,68.1 337.8,68.1 339.6,68.0 341.3,68.0 343.1,67.9 344.9,67.8 346.7,67.8 348.5,67.7 350.2,67.7 352.0,67.6 353.8,67.6 355.6,67.5 357.4,67.5 359.1,67.4 360.9,67.4 362.7,67.3 364.5,67.3 366.2,67.2 368.0,67.2 369.8,67.1 371.6,67.1 373.4,67.0 375.1,67.0 376.9,66.9 378.7,66.9 380.5,66.9 382.3,66.8 384.0,66.8 385.8,66.7 387.6,66.7 389.4,66.6 391.1,66.6 392.9,66.5 394.7,66.5 396.5,66.5 398.3,66.4 400.0,66.4 401.8,66.3 403.6,66.3 405.4,66.2 407.2,66.2 408.9,66.2 410.7,66.1 412.5,66.1 414.3,66.0 416.0,66.0 417.8,65.9 419.6,65.9 421.4,65.9 423.2,65.8 424.9,65.8 426.7,65.7 428.5,65.7 430.3,65.7 432.1,65.6 433.8,65.6 435.6,65.5 437.4,65.5 439.2,65.5 440.9,65.4 442.7,65.4 444.5,65.3" fill="none" stroke="#004D80" stroke-width="2.2"/>
<line x1="387.5" y1="250" x2="387.5" y2="72.7" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
<text x="387.5" y="267" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">I<tspan font-size="9" dy="3">max</tspan></text>
<line x1="40" y1="250" x2="465" y2="250" stroke="#94a3b8" stroke-width="1" marker-end="url(#fphi)"/>
<line x1="55" y1="260" x2="55" y2="14" stroke="#94a3b8" stroke-width="1" marker-end="url(#fphi)"/>
<text x="467" y="254" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">I</text>
<text x="63" y="22" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">Φ(I)</text>
<text x="225" y="150" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">énergie stockée</text>
<text x="225" y="167" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">= aire jaune = ∫ I dΦ</text>
<path d="M 219,144 C 185,120 150,114 114,98" fill="none" stroke="#970E53" stroke-width="1.2" marker-end="url(#fphr)"/>
<text x="444.5" y="55.3" text-anchor="end" font-size="12" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">saturation</text>
</svg>
</div>

Deux sources contribuent au flux&nbsp;: l'une, propre à la bobine, croît en $LI$&nbsp;; l'autre, créée par le fer, écrase totalement la première (des milliers de fois plus grande tant que le fer n'est pas saturé).

Le flux n'a plus de formule analytique simple, mais peu importe&nbsp;: on va pouvoir résoudre notre problème graphiquement.

<div class="fx-note">

Pas d'histoire d'hystérésis ici&nbsp;: le cycle d'un fer doux est très étroit, et on le néglige. La restitution d'énergie suit donc, à peu de chose près, le même chemin que la charge. Le noyau est d'ailleurs feuilleté pour limiter les courants de Foucault.

</div>

## Comment le petit LU se débrouille-t-il&nbsp;?

Avec le petit LU, la masse monte plus haut&nbsp;: une plus grande quantité d'énergie a été stockée, donc l'aire jaune est plus grande.

Or, en négligeant l'apport de la bobine seule, le flux est contraint verticalement&nbsp;: le fer sature à un certain flux $\Phi\_\text{sat}$ et ça, le gâteau n'y peut rien. Il ne peut donc jouer que sur l'**allure** de la courbe $\Phi(I)$&nbsp;!

Il suffit que le fer arrive à saturation pour un courant plus grand. C'est là que le gâteau joue son rôle&nbsp;: en agrandissant l'entrefer, il diminue la perméabilité apparente du circuit vue par la bobine. Le flux grandit moins vite pour un même courant et n'atteint la saturation que pour un courant plus grand, pile-poil ce qu'on souhaite.

À toi de jouer avec l'épaisseur de la cale&nbsp;:

<div id="faroux-gap" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:14px 16px 16px; margin:20px auto; max-width:720px; font-family:system-ui,-apple-system,sans-serif; color:#1e293b;">
<div style="display:flex; flex-wrap:wrap; gap:10px; align-items:center; justify-content:center;">
<svg id="fgCore" viewBox="0 0 190 220" role="img" aria-label="Le circuit magnétique, entrefer exagéré ; la couleur du fer indique le champ atteint" style="flex:0 1 170px; width:170px; max-width:40%; height:auto;"></svg>
<svg id="fgPhi" viewBox="0 0 380 260" role="img" aria-label="Flux Φ en fonction du courant I pour l'entrefer choisi, comparé au fer au contact ; l'aire jaune est l'énergie stockée" style="flex:1 1 320px; max-width:440px; height:auto;"></svg>
</div>
<div style="max-width:560px; margin:10px auto 0;">
<div style="display:flex; justify-content:space-between; align-items:baseline; font-size:0.9em;">
<span style="font-weight:600; color:#334155;">Épaisseur de chaque entrefer</span>
<span id="fgEval" class="fx-num" style="color:#970E53;">e = 0 mm</span>
</div>
<input type="range" id="fgSlider" min="0" max="1000" step="1" value="0" style="width:100%; accent-color:#970E53; cursor:pointer;">
<div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:6px;">
<button type="button" class="fx-btn fg-preset" data-e="0">Au contact</button>
<button type="button" class="fx-btn fg-preset" data-e="opt">Entrefer optimal</button>
<button type="button" class="fx-btn fg-preset" data-e="2">Copies (e ≈ 2 mm)</button>
<button type="button" class="fx-btn fg-preset" data-e="5">Un petit-beurre (e ≈ 5 mm)</button>
</div>
</div>
<div style="display:flex; flex-wrap:wrap; gap:10px 20px; align-items:center; justify-content:center; margin-top:12px;">
<svg id="fgW" viewBox="0 0 380 200" role="img" aria-label="Énergie stockée en fonction de l'épaisseur de l'entrefer : elle passe par un maximum" style="flex:1 1 320px; max-width:440px; height:auto;"></svg>
<div style="flex:0 1 220px; font-size:0.86em; color:#475569; line-height:1.7;">
<div>énergie stockée&nbsp;: <span id="fgWval" class="fx-num" style="color:#b7791f;"></span></div>
<div>champ atteint&nbsp;: <span id="fgBval" class="fx-num" style="color:#004D80;"></span></div>
<div>hauteur (300 g, sans pertes)&nbsp;: <span id="fgHval" class="fx-num" style="color:#334155;"></span></div>
<div style="margin-top:6px;">où est l'énergie&nbsp;?</div>
<div style="display:flex; height:14px; border-radius:7px; overflow:hidden; border:1px solid #e2e8f0;"><div id="fgBarFer" style="background:#d4b45a;"></div><div id="fgBarAir" style="background:#80a6c0;"></div></div>
<div style="display:flex; justify-content:space-between; font-size:0.85em;"><span style="color:#a8892f;">fer <span id="fgFer" class="fx-num"></span></span><span style="color:#4c82a6;">entrefer <span id="fgAir" class="fx-num"></span></span></div>
</div>
</div>
<div style="text-align:center; font-size:0.75em; color:#94a3b8; margin-top:8px;">Modèle&nbsp;: 500 spires, I<sub>max</sub> = 5 A, section 16 cm², 40 cm de fer, μ<sub>r</sub> = 3000, saturation douce vers 1,6 T. L'échelle des épaisseurs est dilatée près de zéro.</div>
</div>

On constate qu'il existe un **entrefer optimal**&nbsp;: trop mince, la saturation arrive trop tôt&nbsp;; trop épais, elle n'arrive plus du tout avant $I\_\text{max}$, et l'énergie retombe en $\frac{1}{2}LI\_\text{max}^2$ avec une inductance $L$ de plus en plus faible.

## Le calcul&nbsp;: théorème d'Ampère

Détaillons un peu plus.

Le matériau ferromagnétique concentre et canalise les lignes de champ. En réalité, le champ créé par la bobine n'y est pas emprisonné et va où sa géométrie l'envoie, mais le champ est tellement plus intense dans le fer que tout se passe comme si celui-ci cannibalisait les lignes de champ.

Le champ se calcule avec le théorème d'Ampère, version milieux magnétiques&nbsp;: la circulation de l'excitation $\vec{H}$ le long d'un contour fermé est égale au courant enlacé.

Prenons la ligne de champ moyenne, en pointillés&nbsp;: elle parcourt une longueur $\ell$ dans le fer et traverse deux entrefers d'épaisseur $e$.

<div class="svg-container">
<svg viewBox="0 0 430 300" role="img" aria-label="Circuit magnétique : un U de fer et un barreau séparés par deux entrefers d'épaisseur e ; la ligne de champ moyenne, en pointillés, traverse la bobine, le fer et les deux entrefers" style="width:100%;max-width:430px;height:auto;">
<defs>
<marker id="fmA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#7a1f3d" stroke-width="1.6"/></marker>
<marker id="fmB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#004D80" stroke-width="1.6"/></marker>
</defs>
<rect x="55" y="28" width="320" height="40" rx="4" fill="#f6e7b8" stroke="#d4b45a" stroke-width="1.4"/>
<path d="M55,82 H105 V228 H325 V82 H375 V278 H55 Z" fill="#f6e7b8" stroke="#d4b45a" stroke-width="1.4" stroke-linejoin="round"/>
<rect x="37" y="118" width="86" height="6" rx="2" fill="#cbd5e1"/>
<rect x="37" y="202" width="86" height="6" rx="2" fill="#cbd5e1"/>
<rect x="43" y="124" width="74" height="78" fill="#f3d6cb"/>
<g stroke="#c8745a" stroke-width="1.3">
<line x1="43" y1="128" x2="117" y2="128"/><line x1="43" y1="133" x2="117" y2="133"/><line x1="43" y1="138" x2="117" y2="138"/><line x1="43" y1="143" x2="117" y2="143"/><line x1="43" y1="148" x2="117" y2="148"/><line x1="43" y1="153" x2="117" y2="153"/><line x1="43" y1="158" x2="117" y2="158"/><line x1="43" y1="163" x2="117" y2="163"/><line x1="43" y1="168" x2="117" y2="168"/><line x1="43" y1="173" x2="117" y2="173"/><line x1="43" y1="178" x2="117" y2="178"/><line x1="43" y1="183" x2="117" y2="183"/><line x1="43" y1="188" x2="117" y2="188"/><line x1="43" y1="193" x2="117" y2="193"/><line x1="43" y1="198" x2="117" y2="198"/>
</g>
<path d="M80,48 H350 V253 H80 Z" fill="none" stroke="#970E53" stroke-width="1.7" stroke-dasharray="6 4"/>
<path d="M205,48 l-7,-4 v8 z M350,150 l-4,-7 h8 z M225,253 l7,-4 v8 z M80,100 l-4,7 h8 z" fill="#970E53"/>
<line x1="38" y1="66" x2="38" y2="84" stroke="#7a1f3d" stroke-width="1.2" marker-start="url(#fmA)" marker-end="url(#fmA)"/>
<text x="28" y="80" text-anchor="end" font-size="14" fill="#7a1f3d" font-family="Georgia,'Times New Roman',serif" font-style="italic">e</text>
<line x1="392" y1="66" x2="392" y2="84" stroke="#7a1f3d" stroke-width="1.2" marker-start="url(#fmA)" marker-end="url(#fmA)"/>
<text x="402" y="80" font-size="14" fill="#7a1f3d" font-family="Georgia,'Times New Roman',serif" font-style="italic">e</text>
<text x="113" y="80" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">μ<tspan font-size="9" dy="3">0</tspan></text>
<text x="300" y="80" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">μ<tspan font-size="9" dy="3">0</tspan></text>
<text x="275" y="42" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">μ<tspan font-size="9" dy="3">r</tspan></text>
<text x="275" y="273" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic">μ<tspan font-size="9" dy="3">r</tspan></text>
<line x1="55" y1="100" x2="105" y2="100" stroke="#004D80" stroke-width="1.2" marker-start="url(#fmB)" marker-end="url(#fmB)"/>
<text x="113" y="104" font-size="12.5" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic">section s</text>
<text x="132" y="160" font-size="12.5" fill="#c0603e" font-family="Georgia,'Times New Roman',serif" font-style="italic">N spires</text>
<text x="132" y="176" font-size="12.5" fill="#c0603e" font-family="Georgia,'Times New Roman',serif" font-style="italic">parcourues par I</text>
<text x="215" y="212" text-anchor="middle" font-size="12.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">ligne de champ moyenne</text>
<text x="215" y="226" text-anchor="middle" font-size="11.5" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic">(longueur ℓ dans le fer)</text>
</svg>
</div>

Sur cette ligne, la bobine de $N$ spires parcourues par $I$ est enlacée une fois&nbsp;:

$$
H\_\text{fer}\\,\ell + H\_\text{air}\\,2e = NI
$$

Si le noyau a partout la même section $s$, et en négligeant les fuites, le flux $\varphi = Bs$ à travers une section se conserve le long du circuit (le champ $\vec{B}$ est à flux conservatif). Le champ $B$ est donc le même dans le fer et dans l'entrefer, alors que l'excitation $H$, elle, est très différente&nbsp;:

$$
H\_\text{fer} = \frac{B}{\mu\_0\mu\_r} \qquad\qquad H\_\text{air} = \frac{B}{\mu\_0}
$$

D'où, tant que le fer ne sature pas&nbsp;:

<div class="fx-key">

Champ et inductance avec entrefer

<div id="grosseformule">

$$
B = \frac{\mu\_0 N I}{\dfrac{\ell}{\mu\_r} + 2e}
\qquad\text{et}\qquad
\Phi = N s B = \underbrace{\frac{\mu\_0 N^2 s}{\dfrac{\ell}{\mu\_r} + 2e}}\_{L}\\,I
$$

</div>

</div>

Tout se joue dans le dénominateur. Pour $\ell = \pu{40 cm}$ et $\mu\_r = 3000$, on a $\ell/\mu\_r \approx \pu{0,13 mm}$&nbsp;: **un entrefer d'un dixième de millimètre pèse autant que tout le fer du circuit**. Pour un même courant, l'entrefer diminue fortement le champ atteint&nbsp;; la saturation, qui survient quand $B$ atteint $B\_\text{sat}$, recule jusqu'à

$$
I\_\text{sat} = \frac{B\_\text{sat}}{\mu\_0 N}\left(\frac{\ell}{\mu\_r} + 2e\right)
$$

<div class="fx-note">

On a supposé les lignes de champ parallèles dans l'entrefer. En réalité, elles s'épanouissent sur les bords, et la section effective est un peu plus grande que $s$. Pour un entrefer mince devant la largeur des pièces polaires, l'approximation est très raisonnable.

</div>

<div class="svg-container">
<svg viewBox="0 0 460 190" role="img" aria-label="Dans l'entrefer, les lignes de champ réelles s'épanouissent sur les bords ; on les approxime par des lignes parallèles" style="width:100%;max-width:460px;height:auto;">
<g fill="#f6e7b8" stroke="#d4b45a" stroke-width="1.3">
<rect x="30" y="10" width="140" height="62" rx="3"/><rect x="30" y="100" width="140" height="62" rx="3"/>
<rect x="290" y="10" width="140" height="62" rx="3"/><rect x="290" y="100" width="140" height="62" rx="3"/>
</g>
<g stroke="#80a6c0" stroke-width="1" fill="none">
<path d="M48,14 V72 M74,14 V72 M100,14 V72 M126,14 V72 M152,14 V72 M48,100 V158 M74,100 V158 M100,100 V158 M126,100 V158 M152,100 V158"/>
<path d="M308,14 V72 M334,14 V72 M360,14 V72 M386,14 V72 M412,14 V72 M308,100 V158 M334,100 V158 M360,100 V158 M386,100 V158 M412,100 V158"/>
</g>
<g stroke="#004D80" stroke-width="1.8" fill="none">
<path d="M48,72 C30,80 30,92 48,100"/><path d="M74,72 C68,80 68,92 74,100"/><path d="M100,72 V100"/><path d="M126,72 C132,80 132,92 126,100"/><path d="M152,72 C170,80 170,92 152,100"/>
<path d="M308,72 V100 M334,72 V100 M360,72 V100 M386,72 V100 M412,72 V100"/>
</g>
<text x="230" y="98" text-anchor="middle" font-size="30" fill="#334155" font-family="Georgia,'Times New Roman',serif">≈</text>
<text x="100" y="182" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">en réalité : les bords s'épanouissent</text>
<text x="360" y="182" text-anchor="middle" font-size="12.5" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">modèle : champ uniforme</text>
</svg>
</div>

## Où est stockée l'énergie&nbsp;?

On peut aussi raisonner directement sur le champ. L'énergie magnétique est répartie dans l'espace avec une densité $\int H\\,\mathrm{d}B$, qui vaut dans le domaine linéaire&nbsp;:

<div class="fx-key">

Densité d'énergie magnétique

$$
w\_\text{fer} = \frac{B^2}{2\mu\_0\mu\_r} \qquad\qquad w\_\text{air} = \frac{B^2}{2\mu\_0}
$$

</div>

À champ égal, un centimètre cube d'air stocke **$\mu\_r$ fois plus** d'énergie qu'un centimètre cube de fer. Avec un entrefer, presque toute l'énergie se loge dans ces quelques fractions de millimètre d'air (c'est la répartition affichée sous le graphique interactif).

Le fer, lui, impose le champ&nbsp;: tant qu'il sature à $I\_\text{max}$, $B \approx B\_\text{sat}$ et l'énergie de l'entrefer vaut à peu près $\frac{B\_\text{sat}^2}{2\mu\_0} \times 2es$, proportionnelle à son épaisseur. Plus on l'élargit, mieux c'est... jusqu'au moment où le courant $I\_\text{max}$ ne suffit plus à saturer le fer. L'optimum correspond à $I\_\text{sat} = I\_\text{max}$&nbsp;:

<div class="fx-key">

Entrefer optimal

<div id="grosseformule">

$$
2e\_\text{opt} \approx \frac{\mu\_0 N I\_\text{max}}{B\_\text{sat}} - \frac{\ell}{\mu\_r}
\qquad\qquad
W\_\text{max} \approx \frac{1}{2}\\,N s B\_\text{sat}\\,I\_\text{max} = \frac{1}{2}\\,\Phi\_\text{sat}\\,I\_\text{max}
$$

</div>

</div>

Dans ce modèle simple (fer linéaire puis brutalement saturé), la courbe $\Phi(I)$ optimale est une droite qui atteint $\Phi\_\text{sat}$ exactement en $I\_\text{max}$&nbsp;: l'aire jaune est alors un triangle de base $\Phi\_\text{sat}$ et de hauteur $I\_\text{max}$, le plus grand possible.

**Ordres de grandeur.** On ne connaît pas le matériel exact de la démonstration. Prenons une bobine de 500&nbsp;spires parcourue par $I\_\text{max} = \pu{5 A}$, soit $\pu{2500}$&nbsp;ampères-tours, un noyau de section $\pu{16 cm2}$ et $B\_\text{sat} \approx \pu{1,6 T}$. Le graphique interactif donne&nbsp;:

* fer au contact&nbsp;: $W \approx \pu{0,3 J}$&nbsp;;
* un petit-beurre de chaque côté ($e \approx \pu{5 mm}$)&nbsp;: $W \approx \pu{0,6 J}$, **deux fois plus**, c'est bien ce que constate l'assistance&nbsp;;
* l'entrefer optimal&nbsp;: $2e\_\text{opt} \approx \pu{1,8 mm}$, soit un peu moins d'un millimètre de chaque côté, et $W\_\text{max} \approx \pu{3 J}$, **dix fois plus** qu'au contact.

Le petit-beurre fait donc mieux que le contact, mais il est loin d'être l'entrefer idéal&nbsp;: il est trop épais.

<div class="fx-note">

On peut faire beaucoup mieux qu'un biscuit avec un objet plus fin, et tout aussi disponible&nbsp;: les copies de la classe. Une feuille de papier mesure environ un dixième de millimètre. Une vingtaine de copies de chaque côté ($e \approx \pu{2 mm}$) stockent déjà $\pu{1,5 J}$, plus du double du petit-beurre. Avec une dizaine de chaque côté, on frôle l'optimum.

Pour qu'un biscuit de $\pu{5 mm}$ soit lui-même optimal, il faudrait $NI\_\text{max} \approx 2eB\_\text{sat}/\mu\_0$, soit plus de dix mille ampères-tours. À l'inverse, en dessous d'environ $\pu{1800}$&nbsp;ampères-tours, le petit-beurre ferait *moins bien* que le contact&nbsp;: le tour de magie dépend aussi de l'alimentation.

</div>

## En conclusion

Pour stocker un maximum d'énergie dans la bobine, il faut que le flux ne puisse pas être obtenu avec une trop faible variation d'intensité, comme c'est le cas sans entrefer.

Si on repense à notre bille, une variation de quantité de mouvement à petite vitesse «&nbsp;coûte&nbsp;» moins qu'à grande vitesse ($\mathrm{d}W = v\\,\mathrm{d}p$). Donc si l'essentiel de la variation de quantité de mouvement (due à la variation de masse) se fait à faible vitesse, on y perd...

<script>
(function() {
  // Modèle commun : bobine de N spires sur un circuit de fer doux (saturation douce)
  // et deux entrefers d'épaisseur totale g = 2e.
  const mu0 = 4e-7 * Math.PI, N = 500, s = 16e-4, ell = 0.40, mur = 3000, Js = 1.6;
  const U = 12, r = 2.4, Imax = U / r;
  const NS = 'http://www.w3.org/2000/svg';
  const fr = (x, d) => x.toFixed(d).replace('.', ',');
  const Bof = H => mu0 * H + Js * Math.tanh(mu0 * mur * H / Js);
  const dBdH = H => { const c = Math.cosh(mu0 * mur * H / Js); return mu0 + mu0 * mur / (c * c); };
  const Iof = (H, g) => (H * ell + g * Bof(H) / mu0) / N;
  function HforI(I, g) {
    let lo = 0, hi = N * I / ell + 1;
    for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; if (Iof(m, g) < I) lo = m; else hi = m; }
    return lo;
  }
  function curve(g, Iend, n) {
    const He = HforI(Iend, g), pts = [];
    for (let k = 0; k <= n; k++) {
      const H = He * Math.pow(k / n, 3), B = Bof(H);
      pts.push({ H: H, B: B, I: Iof(H, g), P: N * s * B });
    }
    return pts;
  }
  function energy(g) {
    const pts = curve(g, Imax, 400);
    let W = 0, Wf = 0;
    for (let k = 1; k < pts.length; k++) {
      const a = pts[k - 1], b = pts[k];
      W += 0.5 * (a.I + b.I) * (b.P - a.P);
      Wf += s * ell * 0.5 * (a.H + b.H) * (b.B - a.B);
    }
    const Bend = pts[pts.length - 1].B;
    return { W: W, Wf: Wf, Wa: g * s * Bend * Bend / (2 * mu0), B: Bend };
  }
  function el(parent, tag, attrs, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text !== undefined) e.textContent = text;
    parent.appendChild(e);
    return e;
  }
  const serif = "Georgia,'Times New Roman',serif";
  function arrowDefs(svg, id) {
    const defs = el(svg, 'defs', {});
    const m = el(defs, 'marker', { id: id, viewBox: '0 0 10 10', refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' });
    el(m, 'path', { d: 'M0,1 L9,5 L0,9', fill: 'none', stroke: '#94a3b8', 'stroke-width': 1.6 });
  }

  // ===================== Animation du circuit =====================
  (function() {
    const root = document.getElementById('faroux-circuit');
    if (!root) return;
    const loop1 = document.getElementById('fcLoop1'), loop2 = document.getElementById('fcLoop2');
    const lever = document.getElementById('fcLever'), gauge = document.getElementById('fcGauge');
    const drum = document.getElementById('fcDrum'), mass = document.getElementById('fcMass'), string = document.getElementById('fcString');
    const btn = document.getElementById('fcSwitch'), cores = root.querySelectorAll('.fc-core');
    const outI = document.getElementById('fcI'), outW = document.getElementById('fcW'), outE = document.getElementById('fcE');
    const Rm = 7.5, Vd = 0.7, m = 0.3, g0 = 9.81, slow = 20, dt = 2e-5;
    let g = 0, closed = false, H = 0, Wc = 0, Em = 0, hDisp = 0, off1 = 0, off2 = 0, last = null;

    function reset() { H = 0; Wc = 0; Em = 0; }
    function setCore(gap) {
      g = gap; closed = false; reset();
      cores.forEach(b => b.classList.toggle('fx-on', 2e-3 * parseFloat(b.dataset.e) === gap));
      render();
    }
    function render() {
      btn.textContent = closed ? "Ouvrir l'interrupteur" : "Fermer l'interrupteur";
      lever.setAttribute('x2', closed ? 178 : 175); lever.setAttribute('y2', closed ? 50 : 26);
    }
    btn.addEventListener('click', function() {
      closed = !closed;
      if (closed) Em = 0;
      render();
    });
    cores.forEach(b => b.addEventListener('click', () => setCore(2e-3 * parseFloat(b.dataset.e))));

    function frame(t) {
      const dtReal = last === null ? 0 : Math.min(0.05, (t - last) / 1000);
      last = t;
      let steps = Math.round(dtReal / slow / dt);
      while (steps-- > 0) {
        const i = Iof(H, g);
        let dP;
        if (closed) dP = U - r * i;
        else if (H > 0) dP = -((r + Rm) * i + Vd);
        else break;
        let Hn = H + dP * dt / (N * s * dBdH(H));
        if (Hn < 0) Hn = 0;
        const Pold = N * s * Bof(H), Pnew = N * s * Bof(Hn);
        Wc += i * (Pnew - Pold);
        if (!closed) Em += Rm * i * i * dt;
        H = Hn;
      }
      if (H === 0) Wc = 0;
      const i = Iof(H, g);
      off1 -= (closed ? i : 0) * 40 * dtReal;
      off2 -= (!closed ? i : 0) * 40 * dtReal;
      loop1.setAttribute('stroke-dashoffset', off1);
      loop2.setAttribute('stroke-dashoffset', off2);
      loop1.setAttribute('opacity', closed && i > 0.002 ? 0.9 : 0);
      loop2.setAttribute('opacity', !closed && i > 0.002 ? 0.9 : 0);
      gauge.setAttribute('height', Math.min(1, Math.max(0, Wc) / 1.6) * 88);
      gauge.setAttribute('y', 184 - Math.min(1, Math.max(0, Wc) / 1.6) * 88);
      const hcm = 100 * Em / (m * g0);
      hDisp += (hcm - hDisp) * Math.min(1, dtReal * 5);
      const y = Math.max(150, 236 - hDisp * 1.6);
      mass.setAttribute('transform', 'translate(0,' + (y - 236).toFixed(2) + ')');
      string.setAttribute('y2', y);
      drum.setAttribute('transform', 'rotate(' + (-hDisp * 12).toFixed(1) + ' 510 140)');
      outI.textContent = fr(i, 2) + ' A';
      outW.textContent = fr(Math.max(0, Wc), 2) + ' J';
      outE.textContent = fr(Em, 2) + ' J (' + Math.round(hcm) + ' cm)';
      requestAnimationFrame(frame);
    }
    render();
    requestAnimationFrame(frame);
  })();

  // ===================== Influence de l'entrefer =====================
  (function() {
    const root = document.getElementById('faroux-gap');
    if (!root) return;
    const svgCore = document.getElementById('fgCore'), svgPhi = document.getElementById('fgPhi'), svgW = document.getElementById('fgW');
    const slider = document.getElementById('fgSlider');
    const EMAX = 5e-3;                              // e maximal (par entrefer), en m
    const eOfU = u => EMAX * u * u, uOfE = e => Math.sqrt(e / EMAX);

    // --- W(e), calculé une fois ---
    const Wtab = [];
    for (let k = 0; k <= 150; k++) { const u = k / 150; Wtab.push({ u: u, W: energy(2 * eOfU(u)).W }); }
    let a = 0, b = 1;                               // maximum par section dorée
    for (let k = 0; k < 40; k++) {
      const m1 = b - (b - a) * 0.618, m2 = a + (b - a) * 0.618;
      if (energy(2 * eOfU(m1)).W < energy(2 * eOfU(m2)).W) a = m1; else b = m2;
    }
    const uOpt = (a + b) / 2;

    // --- Graphique Φ(I) ---
    const XI = I => 50 + I / 6 * 310, YP = P => 225 - P / 1.4 * 200;
    arrowDefs(svgPhi, 'fgArr1');
    const area = el(svgPhi, 'polygon', { fill: '#fbe7a8', 'fill-opacity': 0.75 });
    const ref = curve(0, 6, 300);
    el(svgPhi, 'polyline', { points: ref.map(p => XI(p.I).toFixed(1) + ',' + YP(p.P).toFixed(1)).join(' '), fill: 'none', stroke: '#94a3b8', 'stroke-width': 1.3, 'stroke-dasharray': '5 4' });
    const cur = el(svgPhi, 'polyline', { fill: 'none', stroke: '#004D80', 'stroke-width': 2.4 });
    el(svgPhi, 'line', { x1: XI(Imax), y1: YP(0), x2: XI(Imax), y2: 30, stroke: '#64748b', 'stroke-width': 1, 'stroke-dasharray': '3 3' });
    el(svgPhi, 'text', { x: XI(Imax) + 4, y: 36, 'font-size': 12, fill: '#64748b', 'font-family': serif, 'font-style': 'italic' }, 'I max');
    el(svgPhi, 'line', { x1: 40, y1: YP(0), x2: 372, y2: YP(0), stroke: '#94a3b8', 'stroke-width': 1, 'marker-end': 'url(#fgArr1)' });
    el(svgPhi, 'line', { x1: XI(0), y1: YP(0) + 8, x2: XI(0), y2: 12, stroke: '#94a3b8', 'stroke-width': 1, 'marker-end': 'url(#fgArr1)' });
    [1, 2, 3, 4, 5].forEach(I => {
      el(svgPhi, 'line', { x1: XI(I), y1: YP(0), x2: XI(I), y2: YP(0) + 4, stroke: '#94a3b8' });
      el(svgPhi, 'text', { x: XI(I), y: YP(0) + 16, 'text-anchor': 'middle', 'font-size': 11, fill: '#64748b', 'font-family': serif }, fr(I, I % 1 ? 1 : 0));
    });
    [0.5, 1].forEach(P => {
      el(svgPhi, 'line', { x1: XI(0) - 4, y1: YP(P), x2: XI(0), y2: YP(P), stroke: '#94a3b8' });
      el(svgPhi, 'text', { x: XI(0) - 7, y: YP(P) + 4, 'text-anchor': 'end', 'font-size': 11, fill: '#64748b', 'font-family': serif }, fr(P, P % 1 ? 1 : 0));
    });
    el(svgPhi, 'text', { x: 366, y: YP(0) + 16, 'text-anchor': 'end', 'font-size': 12, fill: '#334155', 'font-family': serif, 'font-style': 'italic' }, 'I (A)');
    el(svgPhi, 'text', { x: XI(0) + 8, y: 20, 'font-size': 12, fill: '#334155', 'font-family': serif, 'font-style': 'italic' }, 'Φ (Wb)');
    el(svgPhi, 'text', { x: 372, y: 9, 'text-anchor': 'end', 'font-size': 11, fill: '#94a3b8', 'font-family': serif, 'font-style': 'italic' }, 'pointillés : fer au contact');
    el(svgPhi, 'text', { x: 372, y: 22, 'text-anchor': 'end', 'font-size': 11, fill: '#b7791f', 'font-family': serif, 'font-style': 'italic' }, 'aire jaune : énergie stockée');

    // --- Graphique W(e) ---
    const XU = u => 50 + u * 310, YW = W => 170 - W / 3.3 * 150;
    arrowDefs(svgW, 'fgArr2');
    el(svgW, 'line', { x1: 40, y1: YW(0), x2: 372, y2: YW(0), stroke: '#94a3b8', 'stroke-width': 1, 'marker-end': 'url(#fgArr2)' });
    el(svgW, 'line', { x1: XU(0), y1: YW(0) + 8, x2: XU(0), y2: 8, stroke: '#94a3b8', 'stroke-width': 1, 'marker-end': 'url(#fgArr2)' });
    [[0, '0'], [0.1, '0,1'], [0.5, '0,5'], [1, '1'], [2, '2'], [5, '5']].forEach(t => {
      const x = XU(uOfE(t[0] * 1e-3));
      el(svgW, 'line', { x1: x, y1: YW(0), x2: x, y2: YW(0) + 4, stroke: '#94a3b8' });
      el(svgW, 'text', { x: x, y: YW(0) + 16, 'text-anchor': 'middle', 'font-size': 11, fill: '#64748b', 'font-family': serif }, t[1]);
    });
    [1, 2, 3].forEach(W => {
      el(svgW, 'line', { x1: XU(0) - 4, y1: YW(W), x2: XU(0), y2: YW(W), stroke: '#94a3b8' });
      el(svgW, 'text', { x: XU(0) - 7, y: YW(W) + 4, 'text-anchor': 'end', 'font-size': 11, fill: '#64748b', 'font-family': serif }, fr(W, 0));
    });
    el(svgW, 'text', { x: 366, y: YW(0) - 6, 'text-anchor': 'end', 'font-size': 12, fill: '#334155', 'font-family': serif, 'font-style': 'italic' }, 'e (mm)');
    el(svgW, 'text', { x: XU(0) + 8, y: 16, 'font-size': 12, fill: '#334155', 'font-family': serif, 'font-style': 'italic' }, 'W (J)');
    el(svgW, 'polyline', { points: Wtab.map(p => XU(p.u).toFixed(1) + ',' + YW(p.W).toFixed(1)).join(' '), fill: 'none', stroke: '#b7791f', 'stroke-width': 2.2 });
    const vline = el(svgW, 'line', { stroke: '#970E53', 'stroke-width': 1, 'stroke-dasharray': '3 3' });
    const dot = el(svgW, 'circle', { r: 5, fill: '#970E53' });
    // repères : contact, optimum, copies, petit-beurre
    [[0, 'contact', 8, 14, 'start'], [eOfU(uOpt) * 1e3, 'optimum', 0, -10, 'middle'], [2, 'copies', 6, -8, 'start'], [5, 'petit-beurre', 2, 18, 'end']].forEach(m => {
      const u = uOfE(m[0] * 1e-3), W = energy(2 * m[0] * 1e-3).W;
      el(svgW, 'circle', { cx: XU(u), cy: YW(W), r: 3, fill: '#b7791f' });
      el(svgW, 'text', { x: XU(u) + m[2], y: YW(W) + m[3], 'text-anchor': m[4], 'font-size': 11, fill: '#b7791f', 'font-family': serif, 'font-style': 'italic' }, m[1]);
    });

    // --- Petit dessin du circuit magnétique ---
    const ironFill = el(svgCore, 'g', { stroke: '#d4b45a', 'stroke-width': 1.3 });
    const bar = el(ironFill, 'rect', { x: 15, width: 160, height: 30, rx: 3 });
    const U_ = el(ironFill, 'path', { d: 'M15,85 H53 V172 H137 V85 H175 V208 H15 Z', 'stroke-linejoin': 'round' });
    const cales = [el(svgCore, 'rect', { x: 15, width: 38, fill: '#efe2c4', stroke: '#d9c39a' }), el(svgCore, 'rect', { x: 137, width: 38, fill: '#efe2c4', stroke: '#d9c39a' })];
    const lines = el(svgCore, 'g', { stroke: '#004D80', 'stroke-width': 1.4 });
    el(svgCore, 'rect', { x: 6, y: 108, width: 56, height: 50, fill: '#f3d6cb', stroke: '#c8745a', 'stroke-width': 1 });
    for (let y = 112; y < 158; y += 5) el(svgCore, 'line', { x1: 6, y1: y, x2: 62, y2: y, stroke: '#c8745a', 'stroke-width': 1 });
    const caleTxt = el(svgCore, 'text', { x: 95, 'text-anchor': 'middle', 'font-size': 12, fill: '#a8892f', 'font-family': serif, 'font-style': 'italic' }, 'cales');

    function mix(c1, c2, t) {
      const p = c => [1, 3, 5].map(k => parseInt(c.substr(k, 2), 16));
      const A = p(c1), B = p(c2);
      return 'rgb(' + A.map((v, k) => Math.round(v + (B[k] - v) * t)).join(',') + ')';
    }

    function update() {
      const u = slider.value / 1000, e = eOfU(u), g = 2 * e;
      const res = energy(g);
      // Φ(I)
      const pts = curve(g, 6, 300);
      cur.setAttribute('points', pts.map(p => XI(p.I).toFixed(1) + ',' + YP(p.P).toFixed(1)).join(' '));
      const inside = curve(g, Imax, 300), Pend = inside[inside.length - 1].P;
      area.setAttribute('points', inside.map(p => XI(p.I).toFixed(1) + ',' + YP(p.P).toFixed(1)).join(' ') + ' ' + XI(0) + ',' + YP(Pend).toFixed(1));
      // W(e)
      vline.setAttribute('x1', XU(u)); vline.setAttribute('x2', XU(u));
      vline.setAttribute('y1', YW(0)); vline.setAttribute('y2', YW(res.W));
      dot.setAttribute('cx', XU(u)); dot.setAttribute('cy', YW(res.W));
      // dessin
      const gp = e > 0 ? 2 + 24 * u : 0;
      const yb = 85 - gp - 30;
      bar.setAttribute('y', yb);
      const col = mix('#fbf3dc', '#e0a526', Math.min(1, res.B / Js));
      bar.setAttribute('fill', col); U_.setAttribute('fill', col);
      cales.forEach(c => { c.setAttribute('y', 85 - gp); c.setAttribute('height', gp); c.style.display = gp > 0 ? '' : 'none'; });
      caleTxt.setAttribute('y', 85 - gp / 2 + 4); caleTxt.style.display = gp > 6 ? '' : 'none';
      while (lines.firstChild) lines.removeChild(lines.firstChild);
      if (gp > 0) [24, 34, 44, 146, 156, 166].forEach(x => el(lines, 'line', { x1: x, y1: 85 - gp, x2: x, y2: 85, opacity: Math.min(1, res.B / Js) }));
      // valeurs
      document.getElementById('fgEval').textContent = 'e = ' + (e < 1e-3 ? fr(e * 1e3, 2) : fr(e * 1e3, 1)) + ' mm';
      document.getElementById('fgWval').textContent = fr(res.W, 2) + ' J';
      document.getElementById('fgBval').textContent = fr(res.B, 2) + ' T';
      document.getElementById('fgHval').textContent = Math.round(100 * res.W / (0.3 * 9.81)) + ' cm';
      const pf = Math.max(0, Math.min(1, res.Wf / (res.Wf + res.Wa)));
      document.getElementById('fgBarFer').style.width = (100 * pf) + '%';
      document.getElementById('fgBarAir').style.width = (100 * (1 - pf)) + '%';
      document.getElementById('fgFer').textContent = Math.round(100 * pf) + ' %';
      document.getElementById('fgAir').textContent = Math.round(100 * (1 - pf)) + ' %';
      root.querySelectorAll('.fg-preset').forEach(btn => {
        const v = btn.dataset.e === 'opt' ? uOpt : uOfE(parseFloat(btn.dataset.e) * 1e-3);
        btn.classList.toggle('fx-on', Math.abs(v - u) < 0.002);
      });
    }
    slider.addEventListener('input', update);
    root.querySelectorAll('.fg-preset').forEach(btn => btn.addEventListener('click', function() {
      const v = btn.dataset.e === 'opt' ? uOpt : uOfE(parseFloat(btn.dataset.e) * 1e-3);
      slider.value = Math.round(v * 1000);
      update();
    }));
    update();
  })();
})();
</script>
