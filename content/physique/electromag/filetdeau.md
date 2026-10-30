+++
title = "La déviation du filet d'eau"
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


# La déviation du filet d'eau

C'est l'une des expériences les plus célèbres des cours de physique-chimie au lycée&nbsp;: on frotte une règle en plastique ou un ballon de bauderuche contre un pull en laine, on l'approche d'un mince filet d'eau s'écoulant d'un robinet, et (magie de l'électrostatique) le filet d'eau s'incurve franchement vers la règle, parfois de plusieurs centimètres&nbsp;!

Dans la quasi-totalité des manuels scolaires, cette expérience est présentée comme la preuve expérimentale directe du **caractère polaire de la molécule d'eau** ($\text{H}_2\text{O}$). L'histoire racontée est séduisante&nbsp;: les molécules d'eau étant de petits dipôles électriques permanents, elles s'orienteraient dans le champ électrique créé par la tige et seraient attirées vers les zones de champ fort.

Il n'y a qu'un seul problème avec cette explication&nbsp;: **elle est physiquement fausse** (d'au moins trois ordres de grandeur)&nbsp;!

Comment le vérifier par un calcul d'ordres de grandeur à partir des lois de l'électrostatique et de la physique statistique, et quel est le véritable mécanisme à l'œuvre&nbsp;?


## Le mythe des dipôles face à l'agitation thermique

Que vaut le champ électrique $E$ crée par une règle en plastique frottée à une distance typique de quelques centimètres&nbsp;?

On sait que le champ produit à proximité immédiate de la règle est proche du champ disruptif de l'air $E_{\text{max}} \approx \pu{3e6 V/m}$ ($\pu{30 kV/cm}$ dans l'air sec, et plutôt $10$ à $\pu{20 kV/cm}$ dans l'air humide au voisinage d'un évier) puisqu'on peut parfois obtenir de petites étincelles en approchant le doigt. Un champ $E \sim \pu{10^5 V/m}$ (soit $\pu{1 kV/cm}$) à quelques centimètres ne semble donc pas une aberration... On verra dans la suite que cela n'a de toute façon pas d'importance pour l'argument.

Testons l'hypothèse des manuels scolaires. Une molécule d'eau possède un moment dipolaire électrique permanent $p_0 \approx \pu{1,85 D} \approx \pu{6,2e-30 C.m}$.

Que font nos molécules d'eau dans ce champ&nbsp;? Dans les schémas des livres de lycée, on voit toutes les molécules d'eau s'aligner bien sagement le long du champ électrique comme des aiguilles de boussole. C'est oublier l'ennemi juré de l'ordre microscopique à température ambiante ($T = \pu{293 K}$)&nbsp;: **l'agitation thermique**&nbsp;!

L'énergie potentielle d'orientation d'un dipôle $\vec{p}_0$ dans le champ $\vec{E}$ vaut $U = -\vec{p}_0\cdot\vec{E}$, d'amplitude maximale $p_0 E$. Comparons-la à l'énergie thermique $k_B T$&nbsp;:

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

L'énergie d'alignement électrostatique est près de **dix mille fois plus faible** que l'agitation thermique&nbsp;! Les molécules d'eau sont bousculées en permanence par les chocs thermiques&nbsp;: seule une infime fraction statistique (environ une molécule sur dix mille) présente en moyenne une orientation préférentielle dans le sens du champ.

<div id="thermal-sim" style="background:#ffffff; border-radius:16px; padding:18px; margin-top:18px; margin-bottom:20px; box-shadow: 0 6px 20px rgba(15,23,42,0.06); border:1px solid #e2e8f0; font-family: system-ui, -apple-system, sans-serif; color:#1e293b;">
<div style="display:flex; flex-wrap:wrap; gap:18px; align-items:stretch;">
<div style="flex: 1 1 380px; display:flex; flex-direction:column; align-items:center;">
<canvas id="dipoleCanvas" width="460" height="300" style="width:100%; max-width:460px; height:auto; background:linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); border-radius:12px; border:1px solid #cbd5e1;"></canvas>
<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:10px;">
<button type="button" class="temp-preset" data-slider="0" style="background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe; border-radius:20px; padding:5px 12px; font-size:0.8em; font-weight:600; cursor:pointer;">❄️ Manuels scolaires ($T \to \pu{0 K}$)</button>
<button type="button" class="temp-preset" data-slider="43" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a; border-radius:20px; padding:5px 12px; font-size:0.8em; font-weight:600; cursor:pointer;">🔬 Cryogénique ($T \approx \pu{0,05 K}$)</button>
<button type="button" class="temp-preset" data-slider="100" style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:20px; padding:5px 12px; font-size:0.8em; font-weight:600; cursor:pointer;">🌡️ Eau ambiante ($T = \pu{293 K}$)</button>
</div>
</div>
<div style="flex: 1 1 250px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
<div style="background:#f8fafc; padding:14px; border-radius:12px; border:1px solid #cbd5e1;">
<div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px;">
<span style="font-weight:700; font-size:0.92em; color:#334155;">Température $T$ :</span>
<span id="tempReadout" style="font-family:monospace; font-weight:800; font-size:1.1em; color:#0284c7;">293 K (20 °C)</span>
</div>
<input type="range" id="tempSlider" min="0" max="100" step="0.5" value="100" style="width:100%; accent-color:#0284c7; cursor:pointer;">
<div style="display:flex; justify-content:space-between; font-size:0.75em; color:#64748b; margin-top:4px;">
<span>0 K (Ordre figé)</span>
<span>Échelle log</span>
<span>293 K (Ambiante)</span>
</div>
</div>

<div style="background:#f8fafc; color:#1e293b; padding:14px 16px; border-radius:12px; font-size:0.86em; line-height:1.55; border:1px solid #cbd5e1;">
<div style="font-weight:700; color:#0369a1; margin-bottom:8px; border-bottom:1px solid #cbd5e1; padding-bottom:4px; display:flex; justify-content:space-between;">
<span>📈 Statistique de Langevin</span>
<span style="color:#64748b; font-weight:600; font-size:0.9em;">E = 10⁵ V/m</span>
</div>
<div style="display:flex; justify-content:space-between; margin-bottom:4px;">
<span style="color:#475569;">Rapport $p_0 E / (k_B T)$ :</span>
<span id="ratioReadout" style="font-family:monospace; font-weight:700; color:#b45309;">1.53 × 10⁻⁴</span>
</div>
<div style="display:flex; justify-content:space-between; margin-bottom:8px;">
<span style="color:#475569;">Polarisation $\langle \cos\theta \rangle$ :</span>
<span id="polReadout" style="font-family:monospace; font-weight:700; color:#15803d;">0.0051 %</span>
</div>
<div style="background:#e2e8f0; height:10px; border-radius:5px; overflow:hidden; border:1px solid #cbd5e1; margin-bottom:6px;">
<div id="polBar" style="width:0.5%; height:100%; background:linear-gradient(90deg, #0284c7, #16a34a); transition:width 0.1s;"></div>
</div>
<div id="regimeComment" style="font-size:0.82em; color:#b91c1c; font-style:italic; text-align:center; font-weight:500;">
Chaos thermique total : alignement imperceptible !
</div>
</div>
</div>
</div>
</div>

<script>
(function() {
const canvas = document.getElementById('dipoleCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const slider = document.getElementById('tempSlider');
const tempReadout = document.getElementById('tempReadout');
const ratioReadout = document.getElementById('ratioReadout');
const polReadout = document.getElementById('polReadout');
const polBar = document.getElementById('polBar');
const regimeComment = document.getElementById('regimeComment');
const presetBtns = document.querySelectorAll('.temp-preset');

// Grille 4 x 3 de dipôles H2O
const cols = 4, rows = 3;
const dipoles = [];
for (let r = 0; r < rows; r++) {
for (let c = 0; c < cols; c++) {
dipoles.push({
baseX: 78 + c * 92,
baseY: 74 + r * 68,
theta: (Math.random() - 0.5) * Math.PI * 2,
omega: (Math.random() - 0.5) * 0.2,
phase: Math.random() * Math.PI * 2
});
}
}

function sliderToTemp(s) {
if (s <= 0.5) return 0;
const minLog = -4.2;
const maxLog = Math.log10(293);
const logT = minLog + (s / 100) * (maxLog - minLog);
return Math.pow(10, logT);
}

function langevin(x) {
if (x > 1e5) return 1.0;
if (x < 0.05) return x / 3.0;
return (1.0 / Math.tanh(x)) - (1.0 / x);
}

presetBtns.forEach(btn => {
btn.addEventListener('click', () => {
slider.value = btn.getAttribute('data-slider');
});
});

function drawDipole(x, y, angle) {
ctx.save();
ctx.translate(x, y);
ctx.rotate(angle);

// Corps de la molécule / dipôle
ctx.beginPath();
ctx.roundRect(-24, -10, 48, 20, 10);
ctx.fillStyle = '#ffffff';
ctx.fill();
ctx.lineWidth = 1.5;
ctx.strokeStyle = '#94a3b8';
ctx.stroke();

// Pôle négatif (-q) à gauche
ctx.beginPath();
ctx.arc(-13, 0, 7.5, 0, Math.PI * 2);
ctx.fillStyle = '#3b82f6';
ctx.fill();
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 11px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('−', -13, 0.5);

// Pôle positif (+q) à droite
ctx.beginPath();
ctx.arc(13, 0, 7.5, 0, Math.PI * 2);
ctx.fillStyle = '#ef4444';
ctx.fill();
ctx.fillStyle = '#ffffff';
ctx.fillText('+', 13, 0.5);

ctx.restore();
}

function animateDipoles() {
const s = parseFloat(slider.value);
const T = sliderToTemp(s);

const T_char = 0.0448;
const x = T === 0 ? 1e9 : T_char / T;
const L = langevin(x);

if (T === 0) {
tempReadout.textContent = '0 K (−273 °C)';
ratioReadout.textContent = '∞';
polReadout.textContent = '100.0 %';
regimeComment.textContent = 'Vision des manuels : alignement parfait sans agitation thermique.';
regimeComment.style.color = '#0369a1';
} else if (T < 0.01) {
tempReadout.textContent = T.toExponential(1) + ' K';
ratioReadout.textContent = x.toFixed(1);
polReadout.textContent = (L * 100).toFixed(1) + ' %';
regimeComment.textContent = 'Froid extrême (mK) : le champ électrique domine enfin k_B T.';
regimeComment.style.color = '#15803d';
} else if (T < 5) {
tempReadout.textContent = T.toFixed(2) + ' K';
ratioReadout.textContent = x.toExponential(2);
polReadout.textContent = (L * 100).toFixed(2) + ' %';
regimeComment.textContent = 'L’agitation thermique commence déjà à brouiller l’alignement.';
regimeComment.style.color = '#b45309';
} else {
const celsius = Math.round(T - 273.15);
tempReadout.textContent = Math.round(T) + ' K (' + (celsius >= 0 ? '+' : '') + celsius + ' °C)';
ratioReadout.textContent = (x * 1e4).toFixed(2) + ' × 10⁻⁴';
polReadout.textContent = (L * 100).toFixed(4) + ' %';
regimeComment.textContent = 'Chaos thermique total : seulement ~1 molécule sur 20 000 alignée !';
regimeComment.style.color = '#b91c1c';
}
polBar.style.width = Math.max(0.5, L * 100) + '%';

ctx.clearRect(0, 0, canvas.width, canvas.height);

// Lignes de champ électrique E en arrière-plan
ctx.save();
ctx.strokeStyle = 'rgba(220, 38, 38, 0.18)';
ctx.fillStyle = 'rgba(220, 38, 38, 0.28)';
ctx.lineWidth = 1.5;
for (let yLine = 42; yLine <= 245; yLine += 50) {
ctx.beginPath();
ctx.moveTo(20, yLine);
ctx.lineTo(435, yLine);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(440, yLine);
ctx.lineTo(430, yLine - 4);
ctx.lineTo(430, yLine + 4);
ctx.closePath();
ctx.fill();
}
ctx.font = 'bold 11px sans-serif';
ctx.fillStyle = '#dc2626';
ctx.fillText('Champ électrique externe E (10⁵ V/m) ⟶', 24, 24);
ctx.restore();

const thermalNoise = 1 - L;
dipoles.forEach((d) => {
if (T === 0) {
d.theta *= 0.82;
d.omega = 0;
} else {
const torque = -Math.sin(d.theta) * Math.min(0.35, 0.02 + 0.33 * L);
const kick = (Math.random() - 0.5) * 0.95 * Math.pow(thermalNoise, 0.65);
d.omega = 0.75 * d.omega + torque + kick;
d.theta += d.omega;
}
const jitterAmp = 3.2 * thermalNoise;
const jx = (Math.random() - 0.5) * jitterAmp;
const jy = (Math.random() - 0.5) * jitterAmp;

drawDipole(d.baseX + jx, d.baseY + jy, d.theta);
});

// Bandeau inférieur sur fond clair : Vecteur Polarisation Moyenne <p>
ctx.save();
ctx.fillStyle = '#ffffff';
ctx.strokeStyle = '#cbd5e1';
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.roundRect(14, 254, 432, 36, 8);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#334155';
ctx.font = 'bold 11.5px sans-serif';
ctx.fillText('Polarisation moyenne macroscopique ⟨p⟩ / p₀ :', 26, 276);

const vecStartX = 295;
const vecMaxLen = 115;
const vecY = 272;
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 6;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(vecStartX, vecY);
ctx.lineTo(vecStartX + vecMaxLen, vecY);
ctx.stroke();

const activeLen = Math.max(2, L * vecMaxLen);
ctx.strokeStyle = L > 0.05 ? '#16a34a' : '#dc2626';
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(vecStartX, vecY);
ctx.lineTo(vecStartX + activeLen, vecY);
ctx.stroke();

if (L > 0.08) {
ctx.fillStyle = '#16a34a';
ctx.beginPath();
ctx.moveTo(vecStartX + activeLen + 6, vecY);
ctx.lineTo(vecStartX + activeLen - 4, vecY - 5);
ctx.lineTo(vecStartX + activeLen - 4, vecY + 5);
ctx.closePath();
ctx.fill();
}
ctx.restore();

requestAnimationFrame(animateDipoles);
}

animateDipoles();
})();
</script>



Calculons rigoureusement la force volumique qui s'exerce sur un fluide diélectrique polaire mais **électriquement neutre** placé dans un champ électrique inhomogène $\vec{E}(\vec{r})$&nbsp;:

Le vecteur polarisation macroscopique $\vec{P}$ (qui représente le moment dipolaire par unité de volume) s'écrit&nbsp;:

<div id="def">

<div id="grosseformule">

$$
\vec{P} = \varepsilon_0 (\varepsilon_r - 1)\vec{E}_{\text{int}}
$$

</div>

</div>

où $\vec{E}_{\text{int}}$ désigne le champ électrique *à l'intérieur* du cylindre d'eau et où la grande **permittivité diélectrique relative** expérimentale de l'eau, $\varepsilon_r \approx 80$ tient compte des fortes corrélations entre molécules voisines via le réseau de liaisons hydrogène dans l'eau liquide.


Un dipôle $\vec{p}$ plongé dans un champ uniforme subit un couple, mais **aucune force résultante** puisque la force sur la charge $+q$ compense exactement celle sur la charge $-q$. Pour attirer un dipôle, il faut un **gradient de champ électrique**&nbsp;: la force sur un dipôle élémentaire vaut $\vec{f} = (\vec{p}\cdot\vec{\nabla})\vec{E}$.

<div id="preuve">

C'est d'ailleurs l'argument expérimental développé dans l'article du Journal of Chemical Education référencé en fin de page&nbsp;: ils obtiennent une déviation du jet avec un champ électrique uniforme&nbsp;! 

</div>

En supposant même dans un premier temps que $\vec{E}_{\text{int}} \approx \vec{E}$, la densité volumique de force par unité de volume de liquide sur un diélectrique linéaire (force de Kelvin) s'écrit&nbsp;:

<div id="theo">

<div id="grosseformule">
$$
\vec{f}_\mathrm{dip} = \frac{\varepsilon_0(\varepsilon_r-1)E^2}{r}
$$
</div>

</div>

 <br>

<div id="preuve">

<div id="grosseformule">

$$
\begin{aligned}
\vec{f}_{\text{dip}} &= (\vec{P}\cdot\vec{\nabla})\vec{E}\\\\
&= \varepsilon_0 (\varepsilon_r - 1) (\vec{E}\cdot\vec{\nabla})\vec{E}\\\\
&= \frac{1}{2}\varepsilon_0 (\varepsilon_r - 1)\vec{\nabla}\left(E^2\right)
\end{aligned}
$$

</div>

(où l'on a utilisé l'identité d'analyse vectorielle $\vec{\nabla}(E^2) = 2(\vec{E}\cdot\vec{\nabla})\vec{E} + 2\vec{E}\wedge(\vec{\nabla}\wedge\vec{E})$ avec $\vec{\nabla}\wedge\vec{E} = \vec{0}$ en électrostatique).

Puisque le champ radial créé par la règle varie approximativement en $E(r) \propto 1/r$ à la distance $r$ de son axe, on a&nbsp;:

<div id="grosseformule">

$$
\left\|\vec{\nabla}\left(E^2\right)\right\| = \left|\frac{\mathrm{d}}{\mathrm{d}r}\left(E^2\right)\right| = \frac{2 E^2}{r}
$$

</div>

</div>

En divisant la force volumique $f_{\text{dip}}$ par la masse volumique de l'eau ($\rho = \pu{1000 kg/m3}$), on obtient la borne supérieure de l'accélération transversale $a_{\text{dip}}$ communiquée au filet d'eau par la polarité de ses molécules&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
\begin{aligned}
a_{\text{dip}} &= \frac{f_{\text{dip}}}{\rho} = \frac{\varepsilon_0 (\varepsilon_r - 1) E^2}{\rho \\, r}\\\\
&= \frac{\pu{8,85e-12 F/m} \times 79 \times (\pu{1e5 V/m})^2}{\pu{1000 kg/m3} \times \pu{0,02 m}}\\\\
&\approx \pu{0,35 m/s2}
\end{aligned}
$$

</div>

</div>

Et encore&nbsp;: ce calcul ignore le **champ dépolarisant** créé par les charges de polarisation sur les flancs du cylindre d'eau&nbsp;! On a donc $E_\mathrm{int}<E$.

Combien de temps l'eau passe-t-elle au voisinage de la tige&nbsp;? Pour un filet tombant en chute libre sur une hauteur d'interaction $h \approx \pu{5 cm}$ avec une vitesse typique $v_z \approx \pu{1 m/s}$, le temps de transit est $\Delta t \approx \pu{0,05 s}$.

Même avec la valeur surestimée $a_{\text{dip}} = \pu{0,35 m/s2}$, la déviation latérale $\Delta x_{\text{dip}}$ au sortir de la zone d'influence plafonne à&nbsp;:

<div id="grosseformule">

$$
\Delta x_{\text{dip}} = \frac{1}{2} a_{\text{dip}} (\Delta t)^2 \approx 0,5 \times 0,35 \times (0,05)^2 \approx \pu{0,4 mm}
$$

</div>

Pas ultra spectaculaire...


Comment expliquer alors que dans la salle de classe, le filet d'eau soit notablement dévié&nbsp;?

<br>

## Le vrai coupable : la conduction ionique

Ce que l'explication «&nbsp;chimiste&nbsp;» oublie complètement, c'est que l'eau qui sort du robinet (et même l'eau distillée ou ultra-pure) **n'est pas un isolant parfait, mais un conducteur électrolytique** relié à la terre par la tuyauterie métallique (ou le réservoir)&nbsp;!

Dans l'eau du robinet, on trouve quantité d'ions dissous ($\text{Ca}^{2+}, \text{Mg}^{2+}, \text{Na}^+, \text{Cl}^-, \text{HCO}\_3^-\dots$) qui lui confèrent une conductivité électrique $\sigma \approx \pu{5e-2 S/m}$. Et même dans une eau théoriquement pure à $100\\,\\%$, l'autoprotolyse de l'eau ($\ce{2 H2O <=> H3O+ + HO-}$) maintient en permanence une concentration de $\pu{10^{-7} mol/L}$ d'ions hydronium et hydroxyde, assurant une conductivité minimale $\sigma_{\text{pure}} \approx \pu{5,5e-6 S/m}$ (qui grimpe très vite à $\pu{10^{-4} S/m}$ dès que le dioxyde de carbone de l'air s'y dissout).

Que se passe-t-il lorsqu'on approche une tige chargée (disons négativement, $Q < 0$) d'un conducteur relié à la terre&nbsp;? C'est le phénomène classique d'**électrisation par influence**&nbsp;:

<ol style="margin-top:-0.5em; margin-bottom:1em;">
<li>Tant que le filet d'eau est <b>continu</b> depuis le bec du robinet, le champ électrique de la tige attire les ions positifs (cations) vers la surface du filet d'eau faisant face à la tige, et repousse les ions négatifs (anions) vers le robinet (la terre).</li>
<li>Le filet d'eau acquiert donc une <b>charge électrique nette non nulle</b> (ici positive, de signe opposé à la tige) par unité de longueur&nbsp;!</li>
<li>Au lieu de subir une minuscule force en gradient de champ sur des dipôles neutres, cette portion chargée du filet d'eau subit directement la <b>force de Coulomb</b> $\vec{F} = q\vec{E}$&nbsp;!</li>
</ol>


<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/chargesrobinet.png" style="box-shadow:none;background:none;">
</div>

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

Dans tous les cas, ce temps de relaxation $\tau_e$ est **beaucoup plus court que le temps de chute** ($\Delta t \approx \pu{50 ms}$)&nbsp;! Même l'eau déminéralisée se comporte donc, à l'échelle de l'expérience, comme un **conducteur parfait équipotentiel** au potentiel de la terre ($V = 0$).


### Calcul de la force de Coulomb sur la charge induite

Modélisons le filet d'eau continu de rayon $a \approx \pu{1 mm}$ comme un cylindre conducteur au potentiel $V = 0$ situé à la distance $r \approx \pu{2 cm}$ de la règle portée à un potentiel $V_0 \approx \pu{10 kV}$ (on a bien ainsi $E \sim \frac{V_0}{r \ln(r/a)} \approx \pu{1e5 V/m}$).

La capacité linéique entre le filet et son environnement vaut approximativement $C_\ell \approx \frac{2\pi\varepsilon_0}{\ln(r/a)}$. La densité linéique de charge libre $\lambda_q$ induite sur le filet d'eau est alors&nbsp;:

<div id="theo">

<div id="grosseformule">

$$
|\lambda_q| \approx C_\ell V_0 \approx 2\pi\varepsilon_0 E \\, r
$$

</div>

</div>

La force électrostatique de Coulomb par unité de longueur de filet vaut $F_\ell = |\lambda_q| E \approx 2\pi\varepsilon_0 r E^2$. En divisant par la masse linéique du filet d'eau ($\mu = \rho \pi a^2$), on obtient l'accélération transversale $a_{\text{ion}}$ due aux charges libres induites&nbsp;:

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

On remarque d'ailleurs que le rapport entre la vraie accélération ionique $a_{\text{ion}}$ et l'accélération dipolaire réelle $a_{\text{dip}}$ ne dépend même pas de l'intensité du champ électrique $E$ puisque les deux sont proportionnelles à $E^2$.

</div>

Sur un temps de vol total de $\pu{0,15 s}$ jusqu'au bas de l'évier, la déviation latérale atteint alors&nbsp;:

<div id="grosseformule">

$$
\Delta x_{\text{ion}} = \frac{1}{2} a_{\text{ion}} t^2 \approx 0,5 \times 3,5 \times (0,15)^2 \approx \pu{4 cm}
$$

</div>

On retrouve enfin quelque chose de compatible avec l'observation&nbsp;!

<br>

## Coup de grâce : la charge des goutelettes

Lorsqu'un fin filet d'eau s'écoule d'un robinet ou d'une burette, il ne reste pas cylindrique indéfiniment&nbsp;: au bout de quelques centimètres (typiquement $10$ à $\pu{15 cm}$), la tension superficielle amplifie les petites perturbations de surface et fragmente la colonne continue en un train de gouttelettes isolées. C'est l'**instabilité de Plateau-Rayleigh**.

Cette rupture du jet fournit le test expérimental ultime pour départager les deux théories&nbsp;:

* **Si l'on place la tige chargée en haut (face à la partie continue du jet)**&nbsp;: les ions migrent depuis le robinet, chargent le bas de la colonne continue, et lorsque les gouttes se détachent à la hauteur de rupture, **chaque goutte emporte avec elle une charge électrique nette piégée** ($q_{\text{goutte}} \neq 0$)&nbsp;! Si l'on recueille l'eau déviée dans un bécher posé sur un électromètre (cylindre de Faraday), l'électromètre s'affole et mesure une charge électrique considérable (c'est d'ailleurs le principe exact du [générateur électrostatique à gouttes d'eau](https://fr.wikipedia.org/wiki/Générateur_électrostatique_de_Kelvin) de **Lord Kelvin**).
* **Si l'on approche la tige uniquement en bas (face aux gouttes déjà formées)**, en prenant soin de blinder la partie haute continue par un tube métallique relié à la terre&nbsp;: chaque gouttelette étant désormais isolée dans l'air, elle ne peut plus échanger d'ions avec le robinet et sa charge nette reste strictement nulle ($q_{\text{goutte}} = 0$). Or, chaque gouttelette contient toujours autant de molécules d'eau polaires&nbsp;! Si la théorie des manuels scolaires était vraie, les gouttes devraient être tout autant déviées. En pratique, **on n'observe aucune déviation**.

<div id="sim-container" style="background:#ffffff; border-radius:18px; padding:20px; margin-top:16px; margin-bottom:14px; box-shadow: 0 8px 25px rgba(15,23,42,0.06); border:1px solid #e2e8f0; font-family: system-ui, -apple-system, sans-serif; color:#1e293b;">
<div style="display:flex; flex-wrap:wrap; gap:20px; align-items:flex-start;">
<div style="flex: 1 1 390px; text-align:center;">
<canvas id="waterCanvas" width="460" height="530" style="width:100%; max-width:460px; height:auto; background:linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); border-radius:14px; border:1px solid #cbd5e1; cursor:ns-resize; box-shadow:inset 0 2px 5px rgba(0,0,0,0.03);"></canvas>
<div style="font-size:0.82em; color:#64748b; margin-top:6px;">💡 <i>Glissez directement la règle verticalement sur le schéma ou utilisez les curseurs.</i></div>
</div>
<div style="flex: 1 1 270px; display:flex; flex-direction:column; gap:14px;">
<div style="background:#f8fafc; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1;">
<label style="font-weight:700; font-size:0.9em; color:#334155; display:block; margin-bottom:6px;">Modèle physique / Configuration :</label>
<select id="modeSelect" style="width:100%; padding:8px 10px; border-radius:8px; border:1px solid #94a3b8; font-size:0.9em; background:#fff; font-weight:500; cursor:pointer; color:#1e293b;">
<option value="ionic">Eau réelle (conduction ionique + dipôles)</option>
<option value="dipole">Mythe des manuels (dipôles H₂O seuls, sans ions)</option>
<option value="shielded">Jet blindé en haut (tige face aux gouttes isolées)</option>
</select>
</div>
<div style="background:#f8fafc; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1;">
<div style="display:flex; justify-content:space-between; font-size:0.9em; font-weight:700; color:#334155; margin-bottom:4px;">
<span>Hauteur de la règle ($z_{\text{tige}}$) :</span>
<span id="zRodVal" style="color:#0284c7; font-family:monospace;">9.0 cm</span>
</div>
<input type="range" id="zRodSlider" min="3" max="27" step="0.5" value="9" style="width:100%; accent-color:#0284c7; cursor:pointer;">
<div style="font-size:0.78em; color:#64748b; margin-top:3px;">Point de rupture en gouttes situé à $z = \pu{14 cm}$ sous le robinet.</div>
</div>
<div style="background:#f8fafc; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1;">
<div style="display:flex; justify-content:space-between; font-size:0.9em; font-weight:700; color:#334155; margin-bottom:4px;">
<span>Potentiel de la règle ($V_0$) :</span>
<span id="vRodVal" style="color:#2563eb; font-family:monospace;">−10 kV</span>
</div>
<input type="range" id="vRodSlider" min="-10" max="10" step="1" value="-10" style="width:100%; accent-color:#2563eb; cursor:pointer;">
<div style="display:flex; justify-content:space-between; font-size:0.75em; color:#64748b; margin-top:3px;">
<span>−10 kV</span>
<span>0 V (Neutre)</span>
<span>+10 kV</span>
</div>
</div>
<div style="background:#f8fafc; color:#1e293b; padding:15px 16px; border-radius:12px; font-size:0.88em; line-height:1.55; border:1px solid #cbd5e1;">
<div style="font-weight:700; color:#0369a1; margin-bottom:8px; border-bottom:1px solid #cbd5e1; padding-bottom:5px;">📊 Mesures physiques en direct</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Accélération ionique ($a_{\text{ion}}$) :</span>
<span id="aIonReadout" style="font-family:monospace; font-weight:bold; color:#15803d;">3.50 m/s²</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Accélération dipolaire ($a_{\text{dip}}$) :</span>
<span id="aDipReadout" style="font-family:monospace; font-weight:bold; color:#b45309;">0.009 m/s²</span>
</div>
<div style="display:flex; justify-content:space-between; margin-top:6px; padding-top:6px; border-top:1px dashed #cbd5e1;">
<span style="color:#475569;">Déviation dans le bécher ($\Delta x$) :</span>
<span id="dxReadout" style="font-family:monospace; font-weight:bold; font-size:1.05em; color:#0284c7;">4.00 cm</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Charge accumulée ($Q_{\text{tot}}$) :</span>
<span id="qReadout" style="font-family:monospace; font-weight:bold; color:#be185d;">+0.00 nC</span>
</div>
<div style="margin-top:10px; text-align:right;">
<button type="button" id="resetChargeBtn" style="background:#ffffff; color:#334155; border:1px solid #94a3b8; border-radius:6px; padding:5px 12px; font-size:0.8em; font-weight:600; cursor:pointer;">Vider l'électromètre</button>
</div>
</div>
</div>
</div>
</div>

<script>
(function() {
const canvas = document.getElementById('waterCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const modeSelect = document.getElementById('modeSelect');
const zRodSlider = document.getElementById('zRodSlider');
const vRodSlider = document.getElementById('vRodSlider');
const zRodVal = document.getElementById('zRodVal');
const vRodVal = document.getElementById('vRodVal');
const aIonReadout = document.getElementById('aIonReadout');
const aDipReadout = document.getElementById('aDipReadout');
const dxReadout = document.getElementById('dxReadout');
const qReadout = document.getElementById('qReadout');
const resetBtn = document.getElementById('resetChargeBtn');

const zBreakCm = 14.0; // Hauteur de rupture de Plateau-Rayleigh (cm)
const topY = 54;       // Ordonnée Y de sortie du bec du robinet (px)
const pxPerCm = 13.0;  // Échelle verticale (px/cm)
const jetStartX = 95;  // Robinet bien à gauche

// Géométrie du bécher (Cylindre de Faraday) placé de x = 58 à x = 258
const beakerX = 58;
const beakerY = 442;
const beakerW = 200;
const beakerH = 68;

let accumulatedCharge_nC = 0;
let waterLevel = 22;
let drops = [];
let ripples = [];
let frameCount = 0;
let dragging = false;

function computePhysics() {
const mode = modeSelect.value;
let zRod = parseFloat(zRodSlider.value);
if (mode === 'shielded' && zRod < zBreakCm + 2) {
zRod = zBreakCm + 4;
zRodSlider.value = zRod;
}
const V_kV = parseFloat(vRodSlider.value);
zRodVal.textContent = zRod.toFixed(1) + ' cm';
const signStr = V_kV > 0 ? '+' : (V_kV < 0 ? '−' : '');
vRodVal.textContent = signStr + Math.abs(V_kV) + ' kV';
vRodVal.style.color = V_kV < 0 ? '#2563eb' : (V_kV > 0 ? '#dc2626' : '#475569');

const vNorm = V_kV / 10.0;
const aDip = 0.009 * vNorm * vNorm;

let inductionFactor = 0;
if (mode === 'ionic') {
if (zRod <= zBreakCm) {
inductionFactor = 1.0;
} else {
inductionFactor = Math.exp(-(zRod - zBreakCm) / 1.5);
}
} else {
inductionFactor = 0;
}

const aIon = 3.50 * (vNorm * vNorm) * inductionFactor;
const aTotal = aIon + aDip;

const remainingCm = Math.max(3, 30 - zRod);
const dxCm = (aTotal / 3.50) * 4.0 * (remainingCm / 21.0);

aIonReadout.textContent = aIon.toFixed(2) + ' m/s²';
aDipReadout.textContent = aDip.toFixed(3) + ' m/s²';
dxReadout.textContent = (dxCm < 0.05 && dxCm > 0 ? '< 0.05' : dxCm.toFixed(2)) + ' cm';

const dropChargeSign = V_kV === 0 ? 0 : (V_kV < 0 ? 1 : -1);
const dropChargeMag = Math.abs(vNorm) * inductionFactor * 0.07; // nC par goutte

return { mode, zRod, V_kV, vNorm, aIon, aDip, aTotal, dxCm, inductionFactor, dropChargeSign, dropChargeMag };
}

resetBtn.addEventListener('click', () => {
accumulatedCharge_nC = 0;
waterLevel = 22;
});

modeSelect.addEventListener('change', () => {
accumulatedCharge_nC = 0;
if (modeSelect.value === 'shielded' && parseFloat(zRodSlider.value) <= zBreakCm + 2) {
zRodSlider.value = 19;
}
});

function updateRodFromPointer(clientY) {
const rect = canvas.getBoundingClientRect();
const scaleY = canvas.height / rect.height;
const yPx = (clientY - rect.top) * scaleY;
let cm = (yPx - topY) / pxPerCm;
cm = Math.max(3, Math.min(27, Math.round(cm * 2) / 2));
zRodSlider.value = cm;
}

canvas.addEventListener('mousedown', (e) => { dragging = true; updateRodFromPointer(e.clientY); });
window.addEventListener('mousemove', (e) => { if (dragging) updateRodFromPointer(e.clientY); });
window.addEventListener('mouseup', () => { dragging = false; });
canvas.addEventListener('touchstart', (e) => {
if (e.touches.length > 0) { dragging = true; updateRodFromPointer(e.touches[0].clientY); e.preventDefault(); }
}, { passive: false });
window.addEventListener('touchmove', (e) => {
if (dragging && e.touches.length > 0) { updateRodFromPointer(e.touches[0].clientY); }
}, { passive: true });
window.addEventListener('touchend', () => { dragging = false; });

function getJetX(zCm, phys) {
// Le champ est localisé autour de zRod : la déviation du filet commence au voisinage de la règle
// tout en restant strictement fixé à jetStartX à la sortie du robinet (zCm = 0)
const zStart = Math.max(0.2, phys.zRod - 4.0);
if (zCm <= zStart) return jetStartX;
const dz = zCm - zStart;
// Coefficient calibré pour que même avec zRod = 3 cm et V = 10 kV, x dans le bécher ne dépasse jamais ~215 px (bien dans [58, 258])
const k = (phys.aTotal / 3.50) * 0.015;
return jetStartX + k * dz * dz * pxPerCm;
}

function animate() {
frameCount++;
const phys = computePhysics();
ctx.clearRect(0, 0, canvas.width, canvas.height);

const breakY = topY + zBreakCm * pxPerCm;
const rodY = topY + phys.zRod * pxPerCm;
const rodX = 250;

// 0. Grille graduée discrète à gauche
ctx.save();
ctx.strokeStyle = '#cbd5e1';
ctx.fillStyle = '#64748b';
ctx.font = '10px monospace';
ctx.lineWidth = 1;
for (let z = 0; z <= 28; z += 5) {
const y = topY + z * pxPerCm;
ctx.beginPath();
ctx.moveTo(10, y);
ctx.lineTo(20, y);
ctx.stroke();
ctx.fillText(z + 'cm', 23, y + 3);
}
ctx.restore();

// 1. Ligne de rupture de Plateau-Rayleigh
ctx.save();
ctx.setLineDash([5, 5]);
ctx.strokeStyle = '#94a3b8';
ctx.beginPath();
ctx.moveTo(50, breakY);
ctx.lineTo(425, breakY);
ctx.stroke();
ctx.fillStyle = '#64748b';
ctx.font = '11px sans-serif';
ctx.fillText('Rupture en gouttes (z = 14 cm)', 255, breakY - 6);
ctx.restore();

// 2. Lignes de champ électrique entre la tige et le jet (si V != 0)
if (Math.abs(phys.V_kV) > 0) {
ctx.save();
const alpha = Math.min(0.35, Math.abs(phys.vNorm) * 0.3);
ctx.strokeStyle = phys.V_kV < 0 ? `rgba(37, 99, 235, ${alpha})` : `rgba(220, 38, 38, ${alpha})`;
ctx.lineWidth = 1.2;
ctx.setLineDash([3, 3]);
for (let dy = -28; dy <= 28; dy += 14) {
const zTarget = Math.max(0.5, Math.min(zBreakCm, phys.zRod + dy / pxPerCm));
const targetX = phys.zRod <= zBreakCm ? getJetX(zTarget, phys) : jetStartX + 15;
const targetY = rodY + dy;
ctx.beginPath();
ctx.moveTo(rodX, rodY + dy * 0.35);
ctx.quadraticCurveTo((rodX + targetX) * 0.5, targetY, targetX + 6, targetY);
ctx.stroke();
}
ctx.restore();
}

// 3. Dessin du filet d'eau continu (de z = -0.3 cm DANS le bec jusqu'à zBreakCm)
ctx.save();
ctx.beginPath();
// Démarrer légèrement à l'intérieur de la buse du robinet (topY - 5) pour qu'il n'y ait aucun vide !
ctx.moveTo(jetStartX - 5.5, topY - 5);
for (let z = 0; z <= zBreakCm; z += 0.4) {
const x = getJetX(z, phys);
const y = topY + z * pxPerCm;
const radius = Math.max(2.3, 5.5 - z * 0.18);
ctx.lineTo(x - radius, y);
}
for (let z = zBreakCm; z >= 0; z -= 0.4) {
const x = getJetX(z, phys);
const y = topY + z * pxPerCm;
const radius = Math.max(2.3, 5.5 - z * 0.18);
ctx.lineTo(x + radius, y);
}
ctx.lineTo(jetStartX + 5.5, topY - 5);
ctx.closePath();
const jetGrad = ctx.createLinearGradient(jetStartX - 6, 0, jetStartX + 45, 0);
jetGrad.addColorStop(0, '#0284c7');
jetGrad.addColorStop(0.4, '#38bdf8');
jetGrad.addColorStop(0.8, '#bae6fd');
jetGrad.addColorStop(1, '#0284c7');
ctx.fillStyle = jetGrad;
ctx.fill();
ctx.strokeStyle = '#0369a1';
ctx.lineWidth = 1;
ctx.stroke();
ctx.restore();

// Affichage des charges ioniques induites dans la colonne continue
if (phys.inductionFactor > 0.1 && Math.abs(phys.V_kV) >= 1) {
ctx.save();
ctx.font = 'bold 12px monospace';
ctx.fillStyle = phys.dropChargeSign > 0 ? '#dc2626' : '#1d4ed8';
const signStr = phys.dropChargeSign > 0 ? '+' : '−';
for (let z = 1.8; z < zBreakCm; z += 2.2) {
const zAnim = ((z + frameCount * 0.07) % (zBreakCm - 1.5)) + 1.5;
const x = getJetX(zAnim, phys);
const y = topY + zAnim * pxPerCm;
ctx.fillText(signStr, x + 7, y + 4);
}
ctx.restore();
}

// Blindage de Faraday en haut si mode "shielded"
if (phys.mode === 'shielded') {
ctx.save();
ctx.fillStyle = 'rgba(148, 163, 184, 0.25)';
ctx.strokeStyle = '#475569';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.roundRect(jetStartX - 24, topY + 2, 48, (zBreakCm + 0.4) * pxPerCm, 6);
ctx.fill();
ctx.stroke();
ctx.fillStyle = '#334155';
ctx.font = 'bold 10px sans-serif';
ctx.fillText('Blindage relié', jetStartX + 28, topY + 45);
ctx.fillText('à la terre (⏚)', jetStartX + 28, topY + 58);
ctx.restore();
}

// 4. Génération et dynamique des gouttes (z > zBreakCm)
if (frameCount % 6 === 0) {
const xBreak = getJetX(zBreakCm, phys);
const xPrev = getJetX(zBreakCm - 0.5, phys);
const vy0 = 4.2;
const vx0 = ((xBreak - xPrev) / (0.5 * pxPerCm)) * vy0;
drops.push({
x: xBreak,
y: breakY,
vx: vx0,
vy: vy0,
qSign: phys.dropChargeSign,
qMag: phys.dropChargeMag
});
}

const waterSurfaceY = beakerY + beakerH - waterLevel;

for (let i = drops.length - 1; i >= 0; i--) {
const d = drops[i];
const dyCm = (d.y - rodY) / pxPerCm;
if (Math.abs(dyCm) < 4.5) {
const fCoulomb = d.qMag * Math.abs(phys.vNorm) * 0.08;
const fDip = phys.aDip * 0.02;
d.vx += fCoulomb + fDip;
}
d.x += d.vx;
d.y += d.vy;
d.vy += 0.065; // gravité

// Dessin de la gouttelette
ctx.save();
ctx.beginPath();
ctx.arc(d.x, d.y, 4.3, 0, Math.PI * 2);
ctx.fillStyle = '#0ea5e9';
ctx.fill();
ctx.strokeStyle = '#0369a1';
ctx.lineWidth = 1;
ctx.stroke();
ctx.beginPath();
ctx.arc(d.x - 1.4, d.y - 1.4, 1.3, 0, Math.PI * 2);
ctx.fillStyle = '#ffffff';
ctx.fill();

if (d.qMag > 0.005 && d.qSign !== 0) {
ctx.font = 'bold 11px monospace';
ctx.fillStyle = d.qSign > 0 ? '#dc2626' : '#1d4ed8';
ctx.fillText(d.qSign > 0 ? '+' : '−', d.x + 7, d.y + 4);
}
ctx.restore();

// Réception dans le bécher
if (d.y >= waterSurfaceY) {
if (d.x >= beakerX && d.x <= beakerX + beakerW) {
accumulatedCharge_nC += d.qSign * d.qMag;
waterLevel = Math.min(44, waterLevel + 0.08);
ripples.push({ x: d.x, y: waterSurfaceY, r: 2, alpha: 0.8 });
}
drops.splice(i, 1);
}
}

// Ondulations à la surface de l'eau du bécher
for (let i = ripples.length - 1; i >= 0; i--) {
const rp = ripples[i];
rp.r += 0.8;
rp.alpha -= 0.04;
if (rp.alpha <= 0) {
ripples.splice(i, 1);
} else {
ctx.save();
ctx.strokeStyle = `rgba(255, 255, 255, ${rp.alpha})`;
ctx.lineWidth = 1.2;
ctx.beginPath();
ctx.ellipse(rp.x, rp.y, rp.r, rp.r * 0.25, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.restore();
}
}

const qSignStr = accumulatedCharge_nC > 0.005 ? '+' : (accumulatedCharge_nC < -0.005 ? '−' : '');
qReadout.textContent = qSignStr + Math.abs(accumulatedCharge_nC).toFixed(2) + ' nC';

// 5. Dessin du robinet (par-dessus l'origine du filet pour une jonction parfaite)
ctx.save();
const pipeGrad = ctx.createLinearGradient(0, 14, 0, 34);
pipeGrad.addColorStop(0, '#475569');
pipeGrad.addColorStop(0.5, '#94a3b8');
pipeGrad.addColorStop(1, '#334155');
ctx.fillStyle = pipeGrad;
ctx.beginPath();
ctx.roundRect(14, 16, jetStartX - 4, 18, 4);
ctx.fill();
ctx.beginPath();
ctx.roundRect(jetStartX - 11, 16, 22, 34, 4);
ctx.fill();
// Bague du brise-jet exactement à y = topY (54 px)
ctx.fillStyle = '#1e293b';
ctx.fillRect(jetStartX - 9, topY - 5, 18, 5);
// Vanne au-dessus
ctx.fillStyle = '#334155';
ctx.fillRect(jetStartX - 4, 8, 8, 8);
ctx.fillStyle = '#dc2626';
ctx.beginPath();
ctx.roundRect(jetStartX - 16, 4, 32, 6, 3);
ctx.fill();

ctx.fillStyle = '#f8fafc';
ctx.font = 'bold 10px sans-serif';
ctx.fillText('Terre ⏚', 22, 29);
ctx.restore();

// 6. Dessin de la règle électrisée
ctx.save();
const rodGrad = ctx.createLinearGradient(rodX, rodY - 15, rodX, rodY + 15);
if (phys.V_kV < 0) {
rodGrad.addColorStop(0, '#3b82f6');
rodGrad.addColorStop(0.5, '#1d4ed8');
rodGrad.addColorStop(1, '#1e3a8a');
} else if (phys.V_kV > 0) {
rodGrad.addColorStop(0, '#ef4444');
rodGrad.addColorStop(0.5, '#b91c1c');
rodGrad.addColorStop(1, '#7f1d1d');
} else {
rodGrad.addColorStop(0, '#94a3b8');
rodGrad.addColorStop(1, '#475569');
}
ctx.fillStyle = rodGrad;
ctx.shadowColor = 'rgba(15, 23, 42, 0.18)';
ctx.shadowBlur = 8;
ctx.shadowOffsetY = 3;
ctx.beginPath();
ctx.roundRect(rodX, rodY - 14, 185, 28, 14);
ctx.fill();
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 12px sans-serif';
const chargeSymbol = phys.V_kV < 0 ? '− − − − − −' : (phys.V_kV > 0 ? '+ + + + + +' : 'Neutre (0 V)');
ctx.fillText('Règle : ' + chargeSymbol, rodX + 16, rodY + 4);
ctx.fillStyle = 'rgba(255,255,255,0.75)';
ctx.font = '12px sans-serif';
ctx.fillText('↕', rodX + 166, rodY + 4);
ctx.restore();

// 7. Dessin du Bécher et de l'Électromètre (sur fond clair)
ctx.save();
const waterGrad = ctx.createLinearGradient(0, waterSurfaceY, 0, beakerY + beakerH);
waterGrad.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
waterGrad.addColorStop(1, 'rgba(2, 132, 199, 0.65)');
ctx.fillStyle = waterGrad;
ctx.fillRect(beakerX + 3, waterSurfaceY, beakerW - 6, waterLevel - 2);

if (Math.abs(accumulatedCharge_nC) > 0.15) {
ctx.font = 'bold 11px monospace';
ctx.fillStyle = accumulatedCharge_nC > 0 ? '#b91c1c' : '#1e3a8a';
const sChar = accumulatedCharge_nC > 0 ? '+' : '−';
const count = Math.min(8, Math.floor(Math.abs(accumulatedCharge_nC) / 0.4) + 1);
for (let k = 0; k < count; k++) {
ctx.fillText(sChar, beakerX + 20 + k * 21, beakerY + beakerH - 8);
}
}

ctx.strokeStyle = '#334155';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.moveTo(beakerX - 4, beakerY);
ctx.lineTo(beakerX, beakerY + 5);
ctx.lineTo(beakerX, beakerY + beakerH);
ctx.lineTo(beakerX + beakerW, beakerY + beakerH);
ctx.lineTo(beakerX + beakerW, beakerY + 5);
ctx.lineTo(beakerX + beakerW + 4, beakerY);
ctx.stroke();

ctx.strokeStyle = 'rgba(71, 85, 105, 0.45)';
ctx.lineWidth = 1;
for (let gy = beakerY + 18; gy < beakerY + beakerH - 8; gy += 14) {
ctx.beginPath();
ctx.moveTo(beakerX + beakerW - 14, gy);
ctx.lineTo(beakerX + beakerW - 4, gy);
ctx.stroke();
}

// Câble reliant le bécher à l'électromètre
ctx.strokeStyle = '#475569';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.moveTo(beakerX + beakerW, beakerY + 42);
ctx.lineTo(316, beakerY + 42);
ctx.stroke();

// Boîtier de l'électromètre sur fond clair
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.roundRect(316, beakerY - 4, 128, 74, 10);
ctx.fill();
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 2;
ctx.stroke();

// Cadran clair à aiguille
const dialX = 380, dialY = beakerY + 34, dialR = 21;
ctx.fillStyle = '#f1f5f9';
ctx.beginPath();
ctx.arc(dialX, dialY, dialR, Math.PI, 0);
ctx.fill();
ctx.strokeStyle = '#cbd5e1';
ctx.lineWidth = 1.2;
ctx.stroke();

const maxQ = 8.0;
const clampedQ = Math.max(-maxQ, Math.min(maxQ, accumulatedCharge_nC));
const needleAngle = -Math.PI / 2 + (clampedQ / maxQ) * (Math.PI / 2.3);
ctx.strokeStyle = '#be185d';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(dialX, dialY);
ctx.lineTo(dialX + Math.sin(needleAngle) * (dialR - 3), dialY - Math.cos(needleAngle) * (dialR - 3));
ctx.stroke();

ctx.fillStyle = '#475569';
ctx.font = 'bold 9.5px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('ÉLECTROMÈTRE', dialX, beakerY + 10);

ctx.fillStyle = '#be185d';
ctx.font = 'bold 13px monospace';
ctx.fillText(qSignStr + Math.abs(accumulatedCharge_nC).toFixed(2) + ' nC', dialX, beakerY + 58);
ctx.restore();

requestAnimationFrame(animate);
}

animate();
})();
</script>

 Le même contresens touche une autre expérience célèbre d'introduction à l'électrostatique&nbsp;: **l'attraction de petits bouts de papier par une règle frottée**&nbsp;! Là encore, ce n'est pas la polarisation diélectrique de la cellulose du papier qui permet de soulever les confettis contre la gravité, mais la légère conductivité électrique du papier (due à son humidité résiduelle au contact de la table) qui permet de les charger par influence avant qu'ils ne décollent.

<br>

> **Bruno Jech**, «&nbsp;Sur l'expérience de Desaguliers de la déviation d'un filet d'eau par une tige électrisée&nbsp;», *Le Bup*, vol. 106, n<sup>o</sup> 946, juillet-août-septembre 2012, p.&nbsp;737-760.[🌐](https://ampere-archives.fr/histoire-electricite/files/original/7a632593c24a1c1497117cc4b44a40e2.pdf)
><br><br>
> **M. Ziaei-Moayyed, E. Goodman & P. Williams**, «&nbsp;Electrical Deflection of Polar Liquid Streams: A Misunderstood Demonstration&nbsp;», *Journal of Chemical Education*, vol. 77, n<sup>o</sup> 11, 2000, p.&nbsp;1520. [🌐](https://instructional-resources.physics.uiowa.edu/sites/instructional-resources.physics.uiowa.edu/files/field/demos/documents/Electrical%20Deflection%20of%20Polar%20Liquid%20Streams.pdf)
