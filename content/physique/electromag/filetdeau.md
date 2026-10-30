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
</style>


# La déviation du filet d'eau

C'est l'une des expériences les plus célèbres des cours de physique-chimie au lycée&nbsp;: on frotte une règle en plastique ou un ballon de baudruche contre un pull en laine, on l'approche d'un mince filet d'eau s'écoulant d'un robinet, et (magie de l'électrostatique) le filet d'eau s'incurve franchement vers la règle, parfois de plusieurs centimètres&nbsp;!

Dans la quasi-totalité des manuels scolaires, cette expérience (réalisée pour la première fois en 1741 par Jean-Théophile Desaguliers) est présentée comme la preuve expérimentale directe du **caractère polaire de la molécule d'eau** ($\text{H}_2\text{O}$). L'histoire racontée est séduisante&nbsp;: les molécules d'eau étant de petits dipôles électriques permanents, elles s'orienteraient dans le champ électrique créé par la tige et seraient attirées vers les zones de champ fort.

Il n'y a qu'un seul problème avec cette explication&nbsp;: **elle est physiquement fausse** (de plus de deux ordres de grandeur)&nbsp;!

Comment le vérifier par un calcul d'ordres de grandeur à partir des lois de l'électrostatique et de la physique statistique, et quel est le véritable mécanisme à l'œuvre&nbsp;?


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

L'énergie d'alignement électrostatique est près de **dix mille fois plus faible** que l'agitation thermique&nbsp;! Les molécules d'eau sont bousculées en permanence par les chocs thermiques&nbsp;: d'après la statistique de Boltzmann-Langevin, le degré d'alignement moyen d'un dipôle avec le champ vaut $\langle \cos\theta \rangle = \mathcal{L}\left(\frac{p\_0 E}{k\_B T}\right) \approx \frac{p\_0 E}{3 k\_B T} \approx \pu{5e-5}$. Autrement dit, seule une infime fraction statistique (environ une molécule sur vingt mille) présente en moyenne une orientation préférentielle dans le sens du champ.

<div id="thermal-sim" style="background:linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); border-radius:18px; padding:20px; margin-top:20px; margin-bottom:24px; box-shadow: 0 10px 30px -5px rgba(15,23,42,0.08), 0 4px 12px -2px rgba(15,23,42,0.04); border:1px solid #e2e8f0; font-family: system-ui, -apple-system, sans-serif; color:#1e293b;">
<div style="display:flex; flex-wrap:wrap; gap:20px; align-items:stretch;">
<div style="flex: 1 1 390px; display:flex; flex-direction:column; align-items:center;">
<canvas id="dipoleCanvas" width="480" height="320" style="width:100%; max-width:480px; height:auto; aspect-ratio: 480 / 320; background:#ffffff; border-radius:14px; border:1px solid #cbd5e1; box-shadow: inset 0 2px 6px rgba(15,23,42,0.04);"></canvas>
<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:12px;">
<button type="button" class="temp-preset" data-slider="0" style="background:#eff6ff; color:#1d4ed8; border:1px solid #bfdbfe; border-radius:20px; padding:6px 13px; font-size:0.8em; font-weight:600; cursor:pointer; transition:all 0.15s;">❄️ Manuels ($T \to \pu{0 K}$)</button>
<button type="button" class="temp-preset" data-slider="43" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a; border-radius:20px; padding:6px 13px; font-size:0.8em; font-weight:600; cursor:pointer; transition:all 0.15s;">🔬 Cryogénique ($T \approx \pu{0,05 K}$)</button>
<button type="button" class="temp-preset" data-slider="100" style="background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; border-radius:20px; padding:6px 13px; font-size:0.8em; font-weight:600; cursor:pointer; transition:all 0.15s;">🌡️ Eau ambiante ($T = \pu{293 K}$)</button>
</div>
</div>
<div style="flex: 1 1 260px; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
<div style="background:#ffffff; padding:14px 16px; border-radius:12px; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px;">
<span style="font-weight:700; font-size:0.9em; color:#334155;">Température $T$ :</span>
<span id="tempReadout" style="font-family:ui-monospace, monospace; font-weight:800; font-size:1.08em; color:#0284c7;">293 K (+20 °C)</span>
</div>
<input type="range" id="tempSlider" min="0" max="100" step="0.5" value="100" style="width:100%; accent-color:#0284c7; cursor:pointer;">
<div style="display:flex; justify-content:space-between; font-size:0.74em; color:#64748b; margin-top:4px;">
<span>0 K (Ordre figé)</span>
<span>Échelle log</span>
<span>293 K (Ambiante)</span>
</div>
</div>

<div style="background:#ffffff; color:#1e293b; padding:14px 16px; border-radius:12px; font-size:0.85em; line-height:1.5; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<div style="font-weight:700; color:#0369a1; margin-bottom:8px; border-bottom:1px solid #e2e8f0; padding-bottom:5px; display:flex; justify-content:space-between; align-items:center;">
<span>📈 Loi de Langevin $\mathcal{L}(x)$</span>
<span style="background:#f1f5f9; color:#475569; font-weight:600; font-size:0.85em; padding:2px 7px; border-radius:6px;">$E = \pu{10^5 V/m}$</span>
</div>
<div style="display:flex; justify-content:space-between; margin-bottom:4px;">
<span style="color:#475569;">Paramètre $x = p_0 E / (k_B T)$ :</span>
<span id="ratioReadout" style="font-family:ui-monospace, monospace; font-weight:700; color:#b45309;">1.53 × 10⁻⁴</span>
</div>
<div style="display:flex; justify-content:space-between; margin-bottom:6px;">
<span style="color:#475569;">Alignement $\langle \cos\theta \rangle$ :</span>
<span id="polReadout" style="font-family:ui-monospace, monospace; font-weight:700; color:#15803d;">0.0051 %</span>
</div>
<canvas id="langevinCurveCanvas" width="280" height="145" style="width:100%; height:145px; display:block; margin:8px 0; background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;"></canvas>
<div id="regimeComment" style="font-size:0.82em; color:#b91c1c; font-style:italic; text-align:center; font-weight:600; margin-top:4px;">
Chaos thermique : seulement ~1 molécule sur 20 000 alignée !
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
const curveCanvas = document.getElementById('langevinCurveCanvas');
const cctx = curveCanvas ? curveCanvas.getContext('2d') : null;

// Support haute résolution Retina / HiDPI
const dpr = Math.min(window.devicePixelRatio || 1, 3);
const W = 480, H = 320;
canvas.width = W * dpr;
canvas.height = H * dpr;
ctx.scale(dpr, dpr);

const slider = document.getElementById('tempSlider');
const tempReadout = document.getElementById('tempReadout');
const ratioReadout = document.getElementById('ratioReadout');
const polReadout = document.getElementById('polReadout');
const regimeComment = document.getElementById('regimeComment');
const presetBtns = document.querySelectorAll('.temp-preset');

// Grille 4 x 3 de molécules d'eau H2O
const cols = 4, rows = 3;
const dipoles = [];
for (let r = 0; r < rows; r++) {
for (let c = 0; c < cols; c++) {
dipoles.push({
baseX: 88 + c * 102,
baseY: 78 + r * 68,
theta: (Math.random() - 0.5) * Math.PI * 2,
omega: (Math.random() - 0.5) * 0.18,
vx: 0,
vy: 0
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

function drawWaterMolecule(x, y, angle, thermalNoise) {
ctx.save();
ctx.translate(x, y);
ctx.rotate(angle);

// Halo subtil d'agitation ou d'alignement
if (thermalNoise > 0.35) {
ctx.beginPath();
ctx.arc(0, 0, 26, 0, Math.PI * 2);
ctx.strokeStyle = `rgba(245, 158, 11, ${0.14 * thermalNoise})`;
ctx.lineWidth = 1.2;
ctx.setLineDash([3, 3]);
ctx.stroke();
ctx.setLineDash([]);
}

// Géométrie H2O : dipôle p0 dirigé de O(delta-) à gauche vers le milieu des deux H(delta+) à droite
const ox = -10, oy = 0;
const hx1 = 11, hy1 = -11.5;
const hx2 = 11, hy2 = 11.5;

// Liaisons covalentes O-H
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 4.5;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(ox, oy);
ctx.lineTo(hx1, hy1);
ctx.moveTo(ox, oy);
ctx.lineTo(hx2, hy2);
ctx.stroke();

ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(ox, oy);
ctx.lineTo(hx1, hy1);
ctx.moveTo(ox, oy);
ctx.lineTo(hx2, hy2);
ctx.stroke();

// Atome d'Oxygène (pôle négatif delta-, bleu profond)
const oGrad = ctx.createRadialGradient(ox - 3, oy - 3, 2, ox, oy, 12.5);
oGrad.addColorStop(0, '#60a5fa');
oGrad.addColorStop(0.55, '#2563eb');
oGrad.addColorStop(1, '#1e3a8a');
ctx.beginPath();
ctx.arc(ox, oy, 12, 0, Math.PI * 2);
ctx.fillStyle = oGrad;
ctx.fill();
ctx.strokeStyle = '#1e40af';
ctx.lineWidth = 1;
ctx.stroke();

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('δ−', ox, oy + 0.5);

// Atomes d'Hydrogène (pôles positifs delta+, rouge corail)
[ [hx1, hy1], [hx2, hy2] ].forEach(([hx, hy]) => {
const hGrad = ctx.createRadialGradient(hx - 2, hy - 2, 1, hx, hy, 7.5);
hGrad.addColorStop(0, '#fca5a5');
hGrad.addColorStop(0.5, '#ef4444');
hGrad.addColorStop(1, '#991b1b');
ctx.beginPath();
ctx.arc(hx, hy, 7.2, 0, Math.PI * 2);
ctx.fillStyle = hGrad;
ctx.fill();
ctx.strokeStyle = '#991b1b';
ctx.lineWidth = 0.8;
ctx.stroke();

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 8.5px system-ui, sans-serif';
ctx.fillText('+', hx, hy + 0.5);
});

// Vecteur dipolaire p0 au centre de la molécule
ctx.strokeStyle = 'rgba(15, 23, 42, 0.55)';
ctx.fillStyle = 'rgba(15, 23, 42, 0.65)';
ctx.lineWidth = 1.4;
ctx.beginPath();
ctx.moveTo(-2, 0);
ctx.lineTo(14, 0);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(18, 0);
ctx.lineTo(13, -3);
ctx.lineTo(13, 3);
ctx.closePath();
ctx.fill();

ctx.restore();
}

function drawLangevinMiniCurve(xParam, Lval) {
if (!cctx || !curveCanvas) return;
// Adaptation 1:1 exacte aux dimensions CSS réelles du canvas (zéro déformation d'aspect)
const w = Math.round(curveCanvas.clientWidth) || 280;
const h = Math.round(curveCanvas.clientHeight) || 145;
if (curveCanvas.width !== Math.round(w * dpr) || curveCanvas.height !== Math.round(h * dpr)) {
curveCanvas.width = Math.round(w * dpr);
curveCanvas.height = Math.round(h * dpr);
}
cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
cctx.clearRect(0, 0, w, h);

const padL = 34, padR = 16, padT = 16, padB = 34;
const pw = w - padL - padR, ph = h - padT - padB;
const xMaxPlot = 12.0;

// Grille horizontale et verticale légère
cctx.strokeStyle = '#e2e8f0';
cctx.lineWidth = 1;
cctx.setLineDash([2, 2]);
cctx.beginPath();
cctx.moveTo(padL, padT);
cctx.lineTo(padL + pw, padT);
cctx.moveTo(padL, padT + ph * 0.5);
cctx.lineTo(padL + pw, padT + ph * 0.5);
[3, 6, 9, 12].forEach(xv => {
const gx = padL + (xv / xMaxPlot) * pw;
cctx.moveTo(gx, padT);
cctx.lineTo(gx, padT + ph);
});
cctx.stroke();
cctx.setLineDash([]);

// Tangente linéaire à l'origine L(x) ≈ x/3 (pour x de 0 à 3)
cctx.strokeStyle = '#94a3b8';
cctx.lineWidth = 1.2;
cctx.setLineDash([4, 3]);
cctx.beginPath();
cctx.moveTo(padL, padT + ph);
cctx.lineTo(padL + (3.0 / xMaxPlot) * pw, padT);
cctx.stroke();
cctx.setLineDash([]);
cctx.fillStyle = '#64748b';
cctx.font = 'italic 9.5px system-ui, sans-serif';
cctx.textAlign = 'left';
cctx.fillText('≈ x/3', padL + (2.35 / xMaxPlot) * pw, padT + 12);

// Remplissage léger sous la courbe L(x)
const areaGrad = cctx.createLinearGradient(0, padT, 0, padT + ph);
areaGrad.addColorStop(0, 'rgba(2, 132, 199, 0.16)');
areaGrad.addColorStop(1, 'rgba(2, 132, 199, 0.01)');
cctx.fillStyle = areaGrad;
cctx.beginPath();
cctx.moveTo(padL, padT + ph);
for (let i = 0; i <= 100; i++) {
const xv = (i / 100) * xMaxPlot;
const lv = langevin(xv);
const px = padL + (xv / xMaxPlot) * pw;
const py = padT + ph - lv * ph;
cctx.lineTo(px, py);
}
cctx.lineTo(padL + pw, padT + ph);
cctx.closePath();
cctx.fill();

// Axes
cctx.strokeStyle = '#64748b';
cctx.lineWidth = 1.3;
cctx.beginPath();
cctx.moveTo(padL, padT);
cctx.lineTo(padL, padT + ph);
cctx.lineTo(padL + pw, padT + ph);
cctx.stroke();

// Graduations Y
cctx.fillStyle = '#475569';
cctx.font = '600 10px system-ui, sans-serif';
cctx.textAlign = 'right';
cctx.textBaseline = 'middle';
cctx.fillText('1.0', padL - 6, padT);
cctx.fillText('0.5', padL - 6, padT + ph * 0.5);
cctx.fillText('0', padL - 6, padT + ph);

// Graduations X et légende de l'axe horizontal
cctx.textAlign = 'center';
cctx.textBaseline = 'top';
[0, 3, 6, 9, 12].forEach(xv => {
const gx = padL + (xv / xMaxPlot) * pw;
cctx.fillText(String(xv), gx, padT + ph + 4);
});
cctx.fillStyle = '#334155';
cctx.font = '600 10.5px system-ui, sans-serif';
cctx.fillText('x = p₀E / (kB·T)', padL + pw / 2, h - 14);

// Courbe L(x) pour x de 0 à 12
cctx.strokeStyle = '#0284c7';
cctx.lineWidth = 2.3;
cctx.beginPath();
for (let i = 0; i <= 100; i++) {
const xv = (i / 100) * xMaxPlot;
const lv = langevin(xv);
const px = padL + (xv / xMaxPlot) * pw;
const py = padT + ph - lv * ph;
if (i === 0) cctx.moveTo(px, py);
else cctx.lineTo(px, py);
}
cctx.stroke();

// Point de fonctionnement actuel (parfaitement circulaire grâce au ratio 1:1)
const xClamped = Math.min(xMaxPlot, Math.max(0, xParam));
const lClamped = langevin(xClamped);
const dotX = padL + (xClamped / xMaxPlot) * pw;
const dotY = padT + ph - lClamped * ph;

cctx.fillStyle = Lval > 0.1 ? '#16a34a' : '#dc2626';
cctx.beginPath();
cctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
cctx.fill();
cctx.strokeStyle = '#ffffff';
cctx.lineWidth = 1.6;
cctx.stroke();
}

function animateDipoles() {
const s = parseFloat(slider.value);
const T = sliderToTemp(s);

const T_char = 0.0449; // p0*E / k_B en K
const x = T === 0 ? 1e9 : T_char / T;
const L = langevin(x);

if (T === 0) {
tempReadout.textContent = '0 K (−273 °C)';
ratioReadout.textContent = '∞';
polReadout.textContent = '100.0 %';
regimeComment.textContent = 'Vision des manuels : alignement parfait sans agitation thermique.';
regimeComment.style.color = '#0369a1';
} else if (T < 0.01) {
tempReadout.textContent = (T * 1000).toFixed(1) + ' mK';
ratioReadout.textContent = x.toFixed(1);
polReadout.textContent = (L * 100).toFixed(1) + ' %';
regimeComment.textContent = 'Froid cryogénique (mK) : le couple électrique domine enfin k_B T.';
regimeComment.style.color = '#15803d';
} else if (T < 2) {
tempReadout.textContent = T.toFixed(2) + ' K';
ratioReadout.textContent = x.toFixed(2);
polReadout.textContent = (L * 100).toFixed(2) + ' %';
regimeComment.textContent = 'Compétition entre couple électrique et agitation thermique.';
regimeComment.style.color = '#b45309';
} else {
const celsius = Math.round(T - 273.15);
tempReadout.textContent = Math.round(T) + ' K (' + (celsius >= 0 ? '+' : '') + celsius + ' °C)';
ratioReadout.textContent = (x * 1e4).toFixed(2) + ' × 10⁻⁴';
polReadout.textContent = (L * 100).toFixed(4) + ' %';
regimeComment.textContent = 'Chaos thermique : seulement ~1 molécule sur 20 000 alignée !';
regimeComment.style.color = '#b91c1c';
}

drawLangevinMiniCurve(x, L);

ctx.clearRect(0, 0, W, H);

// Fond quadrillé subtil de laboratoire
ctx.save();
ctx.strokeStyle = 'rgba(226, 232, 240, 0.55)';
ctx.lineWidth = 1;
for (let gx = 40; gx < W; gx += 40) {
ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, 255); ctx.stroke();
}
for (let gy = 40; gy < 255; gy += 40) {
ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
}
ctx.restore();

// Lignes de champ électrique E en arrière-plan
ctx.save();
const fieldGrad = ctx.createLinearGradient(20, 0, 460, 0);
fieldGrad.addColorStop(0, 'rgba(239, 68, 68, 0.22)');
fieldGrad.addColorStop(1, 'rgba(37, 99, 235, 0.22)');
ctx.strokeStyle = fieldGrad;
ctx.fillStyle = 'rgba(220, 38, 38, 0.35)';
ctx.lineWidth = 1.6;
for (let yLine = 46; yLine <= 236; yLine += 47.5) {
ctx.beginPath();
ctx.moveTo(22, yLine);
ctx.lineTo(452, yLine);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(458, yLine);
ctx.lineTo(448, yLine - 4);
ctx.lineTo(448, yLine + 4);
ctx.closePath();
ctx.fill();
}
ctx.font = 'bold 11.5px system-ui, sans-serif';
ctx.fillStyle = '#dc2626';
ctx.fillText('Champ électrique externe E = 10⁵ V/m  ⟶', 24, 24);
ctx.restore();

const thermalNoise = 1 - L;
let sumCos = 0;

dipoles.forEach((d) => {
// Repliement de l'angle dans [-pi, pi] pour éviter tout moulinet lors du refroidissement à 0 K
d.theta = Math.atan2(Math.sin(d.theta), Math.cos(d.theta));
if (T === 0) {
d.theta *= 0.80;
d.omega = 0;
} else {
// Couple de rappel proportionnel à L(x) et bruit thermique
const torque = -Math.sin(d.theta) * (0.38 * L);
const kick = (Math.random() - 0.5) * 0.92 * Math.pow(thermalNoise, 0.6);
d.omega = 0.74 * d.omega + torque + kick;
d.theta += d.omega;
}
sumCos += Math.cos(d.theta);

const jitterAmp = 3.0 * thermalNoise;
d.vx = 0.6 * d.vx + (Math.random() - 0.5) * jitterAmp;
d.vy = 0.6 * d.vy + (Math.random() - 0.5) * jitterAmp;

drawWaterMolecule(d.baseX + d.vx, d.baseY + d.vy, d.theta, thermalNoise);
});

// Bandeau inférieur : Vecteur Polarisation Moyenne <p> / p0 sans aucun chevauchement
ctx.save();
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#cbd5e1';
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.roundRect(16, 266, 448, 40, 10);
ctx.fill();
ctx.stroke();

ctx.textAlign = 'left';
ctx.textBaseline = 'middle';
const labelStr = 'Polarisation ⟨p⟩ / p₀ = ';
ctx.fillStyle = '#334155';
ctx.font = 'bold 11.5px system-ui, sans-serif';
ctx.fillText(labelStr, 26, 286);
const labelW = ctx.measureText(labelStr).width;

ctx.font = 'bold 11.5px ui-monospace, monospace';
ctx.fillStyle = L > 0.05 ? '#15803d' : '#b91c1c';
const lText = L > 0.01 ? (L * 100).toFixed(1) + ' %' : (L * 100).toFixed(4) + ' %';
ctx.fillText(lText, 26 + labelW + 2, 286);

const vecStartX = 270;
const vecMaxLen = 172;
const vecY = 286;
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 7;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(vecStartX, vecY);
ctx.lineTo(vecStartX + vecMaxLen, vecY);
ctx.stroke();

const activeLen = Math.max(2, L * vecMaxLen);
ctx.strokeStyle = L > 0.05 ? '#16a34a' : '#dc2626';
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(vecStartX, vecY);
ctx.lineTo(vecStartX + activeLen, vecY);
ctx.stroke();

if (L > 0.06) {
ctx.fillStyle = '#16a34a';
ctx.beginPath();
ctx.moveTo(vecStartX + activeLen + 7, vecY);
ctx.lineTo(vecStartX + activeLen - 4, vecY - 5.5);
ctx.lineTo(vecStartX + activeLen - 4, vecY + 5.5);
ctx.closePath();
ctx.fill();
}
ctx.restore();

requestAnimationFrame(animateDipoles);
}

animateDipoles();
})();
</script>

Comment ce très faible alignement statistique individuel se traduit-il à l'échelle macroscopique dans un fluide diélectrique polaire mais **électriquement neutre** placé dans un champ électrique inhomogène $\vec{E}(\vec{r})$&nbsp;?

En sommant les moments dipolaires moyens sur les $n \approx \pu{3,3e28 molécules/m3}$ de l'eau liquide (et en tenant compte des fortes corrélations d'orientation entre molécules voisines liées par liaisons hydrogène), le milieu acquiert un moment dipolaire par unité de volume décrit par le **vecteur polarisation macroscopique** $\vec{P}$&nbsp;:

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

En divisant cette force volumique par la masse volumique de l'eau ($\rho = \pu{1000 kg/m3}$), on obtient une première estimation (très généreuse) de l'accélération transversale à $r = \pu{2 cm}$ de la tige&nbsp;:

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

Pour être tout à fait juste physiquement, remarquons que la vitesse verticale $v\_z$ de l'eau **n'est pas constante** le long de la chute&nbsp;: pour obtenir un fin filet laminaire, on ouvre à peine le robinet ($v\_0 \approx \pu{0,3 à 0,4 m/s}$ en $z = 0$), puis l'eau **accélère verticalement en chute libre sous l'effet de la pesanteur** ($g \approx \pu{9,8 m/s2}$) selon la loi de Torricelli&nbsp;:

$$v\_z(z) = \sqrt{v\_0^2 + 2 g z}$$

(c'est d'ailleurs cette accélération verticale qui explique pourquoi le filet d'eau s'affine progressivement en tombant, par conservation du débit volumique $Q = \pi a(z)^2 v\_z(z) = \text{cte}$&nbsp;!).

Comme les mouvements horizontal $x(t)$ et vertical $z(t)$ sont découplés dans le temps, l'accélération verticale de la pesanteur $g$ ne change rien aux lois horaires horizontales. Elle fixe simplement les durées $\Delta t\_1$ et $\Delta t\_2$ des **deux étapes successives** de la déviation (analogues à la traversée puis à la sortie des plaques d'un oscillographe)&nbsp;:

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

<div id="preuve">

**D'où vient la formule $\vec{E}\_{\text{dép}} = -\frac{\vec{P}}{2\varepsilon\_0}$&nbsp;?** On la retrouve très simplement par **superposition**&nbsp;:

1. **Champ interne d'un cylindre uniformément chargé en volume**&nbsp;: considérons d'abord un cylindre infini d'axe $Oz$ et de rayon $a$ portant une densité volumique de charge uniforme $+\rho\_0$. Par symétrie, le champ électrostatique en un point intérieur $M$ situé à la distance $r < a$ de l'axe est radial&nbsp;: $\vec{E}\_+(M) = E\_+(r)\vec{u}\_r$. Le théorème de Gauss appliqué à un cylindre coaxial de rayon $r$ et de hauteur $h$ donne&nbsp;:
   $$2\pi r h \\, E\_+(r) = \frac{Q\_{\text{int}}}{\varepsilon\_0} = \frac{\rho\_0 (\pi r^2 h)}{\varepsilon\_0} \quad \Longrightarrow \quad \vec{E}\_+(M) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{OM}$$
   (où $O$ est le projeté de $M$ sur l'axe. On voit que le facteur $\frac{1}{2}$ provient directement du rapport entre l'aire du disque $\pi r^2$ et le périmètre $2\pi r$ en géométrie cylindrique 2D, là où la géométrie sphérique 3D aurait donné $\frac{\frac{4}{3}\pi r^3}{4\pi r^2} = \frac{1}{3}$).
2. **Superposition de deux cylindres décalés**&nbsp;: un cylindre d'eau polarisé transversalement avec une polarisation $\vec{P}$ s'obtient en superposant un cylindre d'ions/noyaux positifs ($+\rho\_0$, d'axe passant par $O\_+$) et un cylindre de nuages électroniques négatifs ($-\rho\_0$, d'axe passant par $O\_-$) légèrement décalés l'un par rapport à l'autre d'un vecteur microscopique $\overrightarrow{O\_- O\_+} = \vec{\delta}$ tel que $\vec{P} = \rho\_0 \vec{\delta}$.
3. Par théorème de superposition, le champ électrique créé en tout point intérieur $M$ par l'ensemble de ces charges liées est alors **parfaitement uniforme** et vaut&nbsp;:
   $$\vec{E}\_{\text{dép}}(M) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_+ M} - \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_- M} = \frac{\rho\_0}{2\varepsilon\_0}\left(\overrightarrow{O\_+ M} + \overrightarrow{M O\_-}\right) = \frac{\rho\_0}{2\varepsilon\_0}\overrightarrow{O\_+ O\_-} = -\frac{\rho\_0 \vec{\delta}}{2\varepsilon\_0} = -\frac{\vec{P}}{2\varepsilon\_0}$$

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
  <video src="/filetdeau_boomerang.mp4" autoplay loop muted playsinline style="width: 200px; max-width: 100%; border-radius: 14px; box-shadow: 0 6px 20px rgba(15,23,42,0.12); display: inline-block;"></video>
</div>

D'où vient alors la déviation observée&nbsp;?


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

Dans tous les cas, ce temps de relaxation $\tau\_e$ est **beaucoup plus court que le temps de passage dans la zone d'interaction** ($\Delta t\_1 \approx \pu{40 ms}$)&nbsp;! Même l'eau déminéralisée se comporte donc, à l'échelle de l'expérience, comme un **conducteur parfait équipotentiel** au potentiel de la terre ($V = 0$).


### Calcul de la force de Coulomb sur la charge induite

Modélisons le filet d'eau continu de rayon $a \approx \pu{1 mm}$ comme un cylindre conducteur relié à la terre ($V = 0$), placé à la distance $r \approx \pu{2 cm}$ ($r \gg a$) de la règle électrisée (portée à un potentiel $V\_0$ de quelques kilovolts et créant à la distance $r$ le champ électrique $E$).

Attention ici au sens physique de la causalité dans ce phénomène d'électrisation par influence&nbsp;:

<div id="def">
<ul style="margin-top:1em;margin-bottom:1em;">
<li> <b>La cause et l'effet</b>&nbsp;: au départ, le filet d'eau est neutre. C'est le champ électrique de la règle qui <b>«&nbsp;fabrique&nbsp;» le cylindre d'eau chargé</b> en attirant des ions depuis le robinet. Mais jusqu'où cette accumulation d'ions se poursuit-elle&nbsp;?</li></li>
<li><b>La condition d'équilibre du conducteur</b>&nbsp;: les ions s'accumulent à la surface de l'eau jusqu'à ce que la charge linéique induite $\lambda_q$ crée en retour <b>son propre champ électrique capable de contrebalancer celui de la règle</b>, de façon à annuler le champ à l'intérieur de l'eau et à maintenir le filet au potentiel $V = 0$ de la terre malgré le potentiel $V_0$ imposé par la règle à la distance $r$.</li>
<li> <b>L'astuce du calcul (analogue à la méthode des images électrostatiques)</b>&nbsp;: même si $\lambda_q$ est physiquement la <i>conséquence</i> du champ de la règle, le <b>théorème d'unicité</b> de l'électrostatique garantit qu'il existe une unique distribution de champ extérieur compatible avec les conditions aux limites ($V = 0$ sur le cylindre d'eau de rayon $a$ et potentiel $V_0$ imposé à la distance $r$). Exactement comme lorsqu'on détermine une <b>charge image</b> face à un conducteur relié à la terre, on peut donc trouver l'inconnue $\lambda_q$ «&nbsp;à l'envers&nbsp;», en se demandant <b>quelle charge linéique $\lambda_q$ un cylindre conducteur de rayon $a$ doit porter</b> pour rétablir l'équipotentielle $V = 0$ en $\rho = a$ (c'est-à-dire assurer l'écart de potentiel $|V_0|$ entre $\rho = a$ et $\rho = r$ et produire à la distance $r$ un champ de réaction d'ordre de grandeur $E$).</li>
</ul>
</div>

<br>

Ce problème d'influence se ramène ainsi à celui d'un **condensateur cylindrique** de capacité linéique $C\_\ell$&nbsp;:

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

1. **Champ propre créé par le cylindre d'eau chargé (théorème de Gauss)**&nbsp;: une fois que la règle a induit la charge linéique $\lambda\_q$ sur le filet d'eau de rayon $a$, les lignes de champ au voisinage du fin filet ($\rho \ge a$) convergent vers ce cylindre conducteur. Le théorème de Gauss appliqué à un cylindre coaxial de rayon $\rho$ et de hauteur $h$ donne l'expression radiale du champ au voisinage du filet&nbsp;:
   $$2\pi \rho h \\, E(\rho) = \frac{Q\_{\text{int}}}{\varepsilon\_0} = \frac{|\lambda\_q| h}{\varepsilon\_0} \quad \Longrightarrow \quad E(\rho) = \frac{|\lambda\_q|}{2\pi\varepsilon\_0 \rho}$$
2. **Calcul du potentiel par intégration radiale du champ ($E(\rho) = -\frac{\mathrm{d}V}{\mathrm{d}\rho}$)**&nbsp;: pour que le filet d'eau reste au potentiel de la terre ($V = 0$ en $\rho = a$) alors que la règle impose un potentiel de l'ordre de $|V\_0|$ à la distance $\rho = r$, l'intégrale radiale du champ entre $\rho = a$ et $\rho = r$ doit compenser exactement la tension $|V\_0|$&nbsp;:
   $$|V\_0| \approx \int\_a^r E(\rho)\\,\mathrm{d}\rho = \frac{|\lambda\_q|}{2\pi\varepsilon\_0}\int\_a^r \frac{\mathrm{d}\rho}{\rho} = \frac{|\lambda\_q|}{2\pi\varepsilon\_0}\ln\left(\frac{r}{a}\right)$$
3. **Capacité linéique et charge induite par le champ $E$**&nbsp;:
   * En identifiant $|\lambda\_q| = C\_\ell |V\_0|$ dans la relation précédente, on obtient la capacité linéique du système&nbsp;:
     $$C\_\ell = \frac{|\lambda\_q|}{|V\_0|} \approx \frac{2\pi\varepsilon\_0}{\ln(r/a)}$$
   * De même, pour que ce cylindre d'eau chargé raccorde son champ propre $E(\rho) = \frac{|\lambda\_q|}{2\pi\varepsilon\_0 \rho}$ à l'ordre de grandeur du champ extérieur $E$ imposé par la règle à l'échelle de distance $\rho \sim r$, la charge linéique $\lambda\_q$ fabriquée par influence doit vérifier&nbsp;:
     $$E \sim \frac{|\lambda\_q|}{2\pi\varepsilon\_0 r} \approx \frac{|V\_0|}{r \ln(r/a)} \quad \Longleftrightarrow \quad |\lambda\_q| \approx 2\pi\varepsilon\_0 E \\, r$$
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

Pour un filet d'eau millimétrique situé à $1$ ou $\pu{2 cm}$ de la tige, la force de Coulomb sur les ions libres induits l'emporte donc systématiquement d'un facteur $100$ à $1000$ (**deux à trois ordres de grandeur**) sur la force dipolaire&nbsp;!

</div>

<br>

Appliquons maintenant notre cinématique de chute libre en deux temps avec cette accélération $a\_{\text{ion}} \approx \pu{3,5 m/s2}$ (pour la règle placée à $r = \pu{2 cm}$)&nbsp;:

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

**Et si l'on approche la règle à $r = \pu{1 cm}$ du filet&nbsp;?** À potentiel $|V\_0| \approx \pu{6 kV}$ fixé sur la règle, rapprocher celle-ci de $r = \pu{2 cm}$ à $r = \pu{1 cm}$ fait grimper le champ électrique à $E \approx \frac{|V\_0|}{r\ln(r/a)} \approx \frac{\pu{6000 V}}{\pu{0,01 m}\times \ln(10)} \approx \pu{2,6e5 V/m}$. Comme $a\_{\text{ion}} = \frac{2\varepsilon\_0 r E^2}{\rho a^2} \propto \frac{V\_0^2}{r[\ln(r/a)]^2}$, l'accélération ionique triple pour atteindre $a\_{\text{ion}} \approx \pu{12 m/s2}$ (supérieure à $g$&nbsp;!), ce qui produit en bas de la chute une déviation $\Delta x\_{\text{ion}} \approx \pu{5 à 6 cm}$, tandis que la déviation dipolaire reste inférieure au demi-millimètre ($\Delta x\_{\text{dip}} = \frac{\Delta x\_{\text{ion}}}{(r/a)^2} = \frac{\Delta x\_{\text{ion}}}{100} \approx \pu{0,5 mm}$).

</div>

<br>

## Coup de grâce : la charge des gouttelettes

Lorsqu'un fin filet d'eau s'écoule d'un robinet ou d'une burette, il ne reste pas cylindrique indéfiniment&nbsp;: au bout de quelques centimètres (typiquement $10$ à $\pu{15 cm}$), la tension superficielle amplifie les petites perturbations de surface et fragmente la colonne continue en un train de gouttelettes isolées. C'est l'**instabilité de Plateau-Rayleigh**.

Cette rupture du jet fournit le test expérimental ultime pour départager les deux théories&nbsp;:

* **Si l'on place la tige chargée en haut (face à la partie continue du jet)**&nbsp;: les ions migrent depuis le robinet, chargent le bas de la colonne continue, et lorsque les gouttes se détachent à la hauteur de rupture, **chaque goutte emporte avec elle une charge électrique nette piégée** ($q\_{\text{goutte}} \neq 0$)&nbsp;! Si l'on recueille l'eau déviée dans un bécher relié à un électromètre (cylindre de Faraday), l'électromètre s'affole et mesure une charge électrique considérable (c'est d'ailleurs le principe exact du [générateur électrostatique à gouttes d'eau](https://fr.wikipedia.org/wiki/Générateur_électrostatique_de_Kelvin) de **Lord Kelvin**).
* **Si l'on approche la tige uniquement en bas (face aux gouttes déjà formées)**, en prenant soin de blinder la partie haute continue par un tube métallique relié à la terre&nbsp;: chaque gouttelette étant désormais isolée dans l'air, elle ne peut plus échanger d'ions avec le robinet et sa charge nette reste strictement nulle ($q\_{\text{goutte}} = 0$). Or, chaque gouttelette contient toujours autant de molécules d'eau polaires&nbsp;! Si la théorie des manuels scolaires était vraie, les gouttes devraient être tout autant déviées. En pratique, **on n'observe aucune déviation**.

<div id="sim-container" style="background:linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); border-radius:18px; padding:20px; margin-top:18px; margin-bottom:18px; box-shadow: 0 10px 30px -5px rgba(15,23,42,0.08), 0 4px 12px -2px rgba(15,23,42,0.04); border:1px solid #e2e8f0; font-family: system-ui, -apple-system, sans-serif; color:#1e293b;">
<div style="display:flex; flex-wrap:wrap; gap:20px; align-items:flex-start;">
<div style="flex: 1 1 390px; text-align:center;">
<canvas id="waterCanvas" width="460" height="540" style="width:100%; max-width:460px; height:auto; aspect-ratio: 460 / 540; background:#ffffff; border-radius:14px; border:1px solid #cbd5e1; cursor:ns-resize; box-shadow:inset 0 2px 6px rgba(15,23,42,0.04);"></canvas>
<div style="font-size:0.82em; color:#64748b; margin-top:8px;">💡 <i>Glissez directement la règle verticalement sur le schéma ou utilisez les contrôles.</i></div>
</div>
<div style="flex: 1 1 270px; display:flex; flex-direction:column; gap:13px;">
<div style="background:#ffffff; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<label style="font-weight:700; font-size:0.88em; color:#334155; display:block; margin-bottom:6px;">Modèle physique / Configuration :</label>
<select id="modeSelect" style="width:100%; padding:8px 10px; border-radius:8px; border:1px solid #94a3b8; font-size:0.88em; background:#f8fafc; font-weight:600; cursor:pointer; color:#1e293b;">
<option value="ionic">⚡ Eau réelle (conduction ionique + dipôles)</option>
<option value="dipole">📘 Mythe des manuels (dipôles H₂O seuls)</option>
<option value="shielded">🛡️ Jet blindé en haut (tige face aux gouttes)</option>
</select>
</div>
<div style="background:#ffffff; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<div style="display:flex; justify-content:space-between; font-size:0.88em; font-weight:700; color:#334155; margin-bottom:4px;">
<span>Hauteur de la règle ($z_{\text{tige}}$) :</span>
<span id="zRodVal" style="color:#0284c7; font-family:ui-monospace, monospace; font-weight:800;">8.0 cm</span>
</div>
<input type="range" id="zRodSlider" min="3" max="26" step="0.5" value="8" style="width:100%; accent-color:#0284c7; cursor:pointer;">
<div style="font-size:0.76em; color:#64748b; margin-top:3px;">Rupture de Plateau-Rayleigh située à $z = \pu{14 cm}$.</div>
</div>
<div style="background:#ffffff; padding:13px 15px; border-radius:12px; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<div style="display:flex; justify-content:space-between; font-size:0.88em; font-weight:700; color:#334155; margin-bottom:4px;">
<span>Potentiel de la règle ($V_0$) :</span>
<span id="vRodVal" style="color:#2563eb; font-family:ui-monospace, monospace; font-weight:800;">−10 kV</span>
</div>
<input type="range" id="vRodSlider" min="-10" max="10" step="1" value="-10" style="width:100%; accent-color:#2563eb; cursor:pointer;">
<div style="display:flex; justify-content:space-between; font-size:0.74em; color:#64748b; margin-top:3px;">
<span>−10 kV (Négative)</span>
<span>0 V</span>
<span>+10 kV (Positive)</span>
</div>
</div>
<div style="background:#ffffff; color:#1e293b; padding:14px 16px; border-radius:12px; font-size:0.86em; line-height:1.55; border:1px solid #cbd5e1; box-shadow:0 2px 6px rgba(15,23,42,0.02);">
<div style="font-weight:700; color:#0369a1; margin-bottom:8px; border-bottom:1px solid #e2e8f0; padding-bottom:5px;">📊 Mesures physiques en direct</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Accélération ionique ($a_{\text{ion}}$) :</span>
<span id="aIonReadout" style="font-family:ui-monospace, monospace; font-weight:700; color:#15803d;">3.50 m/s²</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Accélération dipolaire ($a_{\text{dip}}$) :</span>
<span id="aDipReadout" style="font-family:ui-monospace, monospace; font-weight:700; color:#b45309;">0.009 m/s²</span>
</div>
<div style="display:flex; justify-content:space-between; margin-top:6px; padding-top:6px; border-top:1px dashed #cbd5e1;">
<span style="color:#475569;">Sortie zone $h=\pu{5 cm}$ ($\Delta x_1$) :</span>
<span id="dx1Readout" style="font-family:ui-monospace, monospace; font-weight:700; color:#0369a1;">0.28 cm</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Déviation dans le bécher ($\Delta x_{\text{tot}}$) :</span>
<span id="dxReadout" style="font-family:ui-monospace, monospace; font-weight:800; font-size:1.04em; color:#0284c7;">1.72 cm</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Charge par goutte ($q_{\text{goutte}}$) :</span>
<span id="qDropReadout" style="font-family:ui-monospace, monospace; font-weight:700; color:#6366f1;">+70 pC</span>
</div>
<div style="display:flex; justify-content:space-between;">
<span style="color:#475569;">Charge accumulée ($Q_{\text{tot}}$) :</span>
<span id="qReadout" style="font-family:ui-monospace, monospace; font-weight:800; color:#be185d;">+0.00 nC</span>
</div>
<div style="margin-top:10px; text-align:right;">
<button type="button" id="resetChargeBtn" style="background:#f8fafc; color:#334155; border:1px solid #cbd5e1; border-radius:8px; padding:5px 12px; font-size:0.8em; font-weight:600; cursor:pointer;">🔄 Vider le cylindre de Faraday</button>
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

// Support haute résolution Retina / HiDPI
const dpr = Math.min(window.devicePixelRatio || 1, 3);
const W = 460, H = 540;
canvas.width = W * dpr;
canvas.height = H * dpr;
ctx.scale(dpr, dpr);

const modeSelect = document.getElementById('modeSelect');
const zRodSlider = document.getElementById('zRodSlider');
const vRodSlider = document.getElementById('vRodSlider');
const zRodVal = document.getElementById('zRodVal');
const vRodVal = document.getElementById('vRodVal');
const aIonReadout = document.getElementById('aIonReadout');
const aDipReadout = document.getElementById('aDipReadout');
const dx1Readout = document.getElementById('dx1Readout');
const dxReadout = document.getElementById('dxReadout');
const qDropReadout = document.getElementById('qDropReadout');
const qReadout = document.getElementById('qReadout');
const resetBtn = document.getElementById('resetChargeBtn');

const zBreakCm = 14.0;  // Hauteur de rupture de Plateau-Rayleigh (cm)
const topY = 54;        // Ordonnée Y de sortie du bec du robinet (px)
const pxPerCm = 14.0;   // Échelle verticale (px/cm) : zImpact = 31.5 cm dans le bécher
const pxPerCmX = 24.0;  // Échelle horizontale de déviation (px/cm)
const jetStartX = 88;   // Axe initial du jet sous le robinet (px)

// Géométrie du bécher (Cylindre de Faraday) décalé vers la droite pour recueillir toutes les gouttes déviées
const beakerX = 68;
const beakerY = 447;
const beakerW = 212;
const beakerH = 70;

let accumulatedCharge_nC = 0;
let displayedCharge_nC = 0;
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

// Facteur d'induction sur la colonne continue (z <= zBreakCm)
let inductionFactor = 0;
if (mode === 'ionic') {
if (zRod <= zBreakCm) {
inductionFactor = 1.0;
} else {
// Si la règle est sous le point de rupture, l'influence sur l'extrémité de la colonne décroît vite avec la distance
inductionFactor = Math.exp(-(zRod - zBreakCm) / 1.4);
}
} else {
inductionFactor = 0;
}

const aIon = 3.50 * (vNorm * vNorm) * inductionFactor;
const aTotal = aIon + aDip;

// Cinématique en deux temps exactement identique au texte (h = 5 cm face à la règle, puis vol libre jusqu'au bécher)
const zEndZone = Math.min(zBreakCm + 2.5, zRod + 2.5);
const dx1Cm = evaluateDeflectionCm(zEndZone, zRod, aIon, aDip);
const zImpactCm = (beakerY + beakerH - waterLevel - topY) / pxPerCm;
const dxCm = evaluateDeflectionCm(zImpactCm, zRod, aIon, aDip);
const dxPx = dxCm * pxPerCmX;

aIonReadout.textContent = aIon.toFixed(2) + ' m/s²';
aDipReadout.textContent = aDip.toFixed(3) + ' m/s²';
if (dx1Readout) {
dx1Readout.textContent = (dx1Cm < 0.01 && dx1Cm > 0 ? '< 0.01' : dx1Cm.toFixed(2)) + ' cm';
}
dxReadout.textContent = (dxCm < 0.02 && dxCm > 0 ? '< 0.01' : dxCm.toFixed(2)) + ' cm';

const dropChargeSign = V_kV === 0 ? 0 : (V_kV < 0 ? 1 : -1);
const dropChargeMag = Math.abs(vNorm) * inductionFactor * 0.07; // nC par goutte (70 pC max)

const pC = Math.round(dropChargeMag * 1000);
const qDropSignStr = pC === 0 ? '' : (dropChargeSign > 0 ? '+' : '−');
qDropReadout.textContent = qDropSignStr + pC + ' pC';

return { mode, zRod, V_kV, vNorm, aIon, aDip, aTotal, dx1Cm, dxCm, dxPx, inductionFactor, dropChargeSign, dropChargeMag, zImpactCm };
}

// Temps de chute libre verticale t(z) depuis la sortie du robinet (v_z(z) = sqrt(v_0^2 + 2 g z), avec v_0 = 0.35 m/s)
function timeAtDepthSec(zCm) {
const z_m = Math.max(0, zCm) / 100.0;
const v0 = 0.35; // m/s en sortie de robinet
const g = 9.81;  // m/s²
return (Math.sqrt(v0 * v0 + 2.0 * g * z_m) - v0) / g;
}

// Cinématique exacte en 2 temps avec chute libre verticale sous l'effet de la pesanteur g :
// 1) Zone d'interaction h = 5 cm [zRod - 2.5, zRod + 2.5] : Δx₁(t) = 1/2 * a * (t(z) - t(zStart))²
// 2) Chute libre hors du champ (z > zEnd) avec vitesse latérale acquise v_x = a * Δt₁ : Δx(t) = Δx₁ + v_x * (t(z) - t(zEnd))
function evaluateDeflectionCm(zCm, zRod, aIon, aDip) {
if (zCm <= 0) return 0;
const aEff_cm = (aIon + aDip) * 100.0; // accélération en cm/s²
if (aEff_cm <= 1e-4) return 0;

const halfWin = 2.5; // demi-hauteur d'interaction : h = 2 * 2.5 = 5.0 cm
const zStart = Math.max(0.2, zRod - halfWin);
if (zCm <= zStart) return 0;

const zEnd = Math.min(zBreakCm + 2.5, zRod + halfWin);
const tStart = timeAtDepthSec(zStart);
const tZ = timeAtDepthSec(zCm);

if (zCm <= zEnd) {
const dt = Math.max(0, tZ - tStart);
return 0.5 * aEff_cm * dt * dt;
} else {
const tEnd = timeAtDepthSec(zEnd);
const dt1 = Math.max(0, tEnd - tStart);
const dt2 = Math.max(0, tZ - tEnd);
const dx1 = 0.5 * aEff_cm * dt1 * dt1;
const vx = aEff_cm * dt1;
return dx1 + vx * dt2;
}
}

function evaluateTrajectoryX(zCm, zRod, aIon, aDip) {
return jetStartX + evaluateDeflectionCm(zCm, zRod, aIon, aDip) * pxPerCmX;
}

resetBtn.addEventListener('click', () => {
accumulatedCharge_nC = 0;
waterLevel = 22;
});

modeSelect.addEventListener('change', () => {
accumulatedCharge_nC = 0;
drops = [];
if (modeSelect.value === 'shielded' && parseFloat(zRodSlider.value) <= zBreakCm + 2) {
zRodSlider.value = 19;
}
});

function updateRodFromPointer(clientY) {
const rect = canvas.getBoundingClientRect();
const scaleY = H / rect.height;
const yPx = (clientY - rect.top) * scaleY;
let cm = (yPx - topY) / pxPerCm;
cm = Math.max(3, Math.min(26, Math.round(cm * 2) / 2));
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

function drawChargeBadge(x, y, sign, radius) {
ctx.save();
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = sign > 0 ? 'rgba(239, 68, 68, 0.92)' : 'rgba(37, 99, 235, 0.92)';
ctx.fill();
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = '#ffffff';
ctx.font = `bold ${Math.round(radius * 1.5)}px ui-monospace, monospace`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(sign > 0 ? '+' : '−', x, y + 0.5);
ctx.restore();
}

function animate() {
frameCount++;
const phys = computePhysics();
displayedCharge_nC += (accumulatedCharge_nC - displayedCharge_nC) * 0.14;

ctx.clearRect(0, 0, W, H);

const breakY = topY + zBreakCm * pxPerCm;
const rodY = topY + phys.zRod * pxPerCm;
const rodX = 252;

// 0. Fond quadrillé subtil de laboratoire + règle verticale graduée à gauche
ctx.save();
ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
ctx.lineWidth = 1;
for (let gx = 45; gx < W; gx += 45) {
ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
}
for (let gy = topY; gy < H; gy += 3 * pxPerCm) {
ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
}

ctx.strokeStyle = '#94a3b8';
ctx.fillStyle = '#64748b';
ctx.font = '10px ui-monospace, monospace';
ctx.lineWidth = 1.2;
ctx.beginPath();
ctx.moveTo(14, topY);
ctx.lineTo(14, topY + 31.5 * pxPerCm);
ctx.stroke();
for (let z = 0; z <= 30; z += 5) {
const y = topY + z * pxPerCm;
ctx.beginPath();
ctx.moveTo(11, y);
ctx.lineTo(19, y);
ctx.stroke();
ctx.fillText(z + ' cm', 22, y + 3);
}
ctx.restore();

// 1. Ligne de rupture de Plateau-Rayleigh
ctx.save();
ctx.setLineDash([5, 4]);
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.2;
ctx.beginPath();
ctx.moveTo(52, breakY);
ctx.lineTo(435, breakY);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = '#f1f5f9';
ctx.strokeStyle = '#cbd5e1';
ctx.beginPath();
ctx.roundRect(245, breakY - 19, 195, 16, 4);
ctx.fill();
ctx.stroke();
ctx.fillStyle = '#475569';
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.fillText('Rupture Plateau-Rayleigh (z = 14 cm)', 252, breakY - 8);
ctx.restore();

// 2. Zone d'interaction h = 5 cm [zRod - 2.5 cm, zRod + 2.5 cm] et lignes de champ électrique
if (Math.abs(phys.V_kV) > 0) {
ctx.save();
const alpha = Math.min(0.42, Math.abs(phys.vNorm) * 0.34 + 0.06);
const colorRGB = phys.V_kV < 0 ? '37, 99, 235' : '220, 38, 38';

// Accolade / repère visuel de la hauteur d'interaction h = 5 cm
const z1 = Math.max(0.2, phys.zRod - 2.5);
const z2 = Math.min(26.5, phys.zRod + 2.5);
const y1 = topY + z1 * pxPerCm;
const y2 = topY + z2 * pxPerCm;
ctx.fillStyle = `rgba(${colorRGB}, 0.045)`;
ctx.fillRect(54, y1, rodX - 54, y2 - y1);
ctx.strokeStyle = `rgba(${colorRGB}, 0.35)`;
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(60, y1); ctx.lineTo(54, y1); ctx.lineTo(54, y2); ctx.lineTo(60, y2);
ctx.stroke();
ctx.fillStyle = `rgba(${colorRGB}, 0.85)`;
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.fillText('h = 5 cm', 56, y1 + 11);

ctx.strokeStyle = `rgba(${colorRGB}, ${alpha})`;
ctx.fillStyle = `rgba(${colorRGB}, ${Math.min(0.65, alpha * 1.4)})`;
ctx.lineWidth = 1.4;
ctx.setLineDash([4, 3]);

for (let dy = -35; dy <= 35; dy += 17.5) {
const zTarget = Math.max(0.6, Math.min(26, phys.zRod + dy / pxPerCm));
let targetX = evaluateTrajectoryX(Math.min(zTarget, zBreakCm), phys.zRod, phys.aIon, phys.aDip) + 5;
if (phys.mode === 'shielded' && zTarget <= zBreakCm + 0.5) {
targetX = jetStartX + 24; // Les lignes de champ s'arrêtent sur le blindage métallique !
}
const startX = rodX;
const startY = rodY + dy * 0.32;
const targetY = rodY + dy * 0.95;
const ctrlX = (startX + targetX) * 0.52;
const ctrlY = rodY + dy * 0.65;

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.quadraticCurveTo(ctrlX, ctrlY, targetX, targetY);
ctx.stroke();

// Flèche orientée dans le sens de E (de + vers -)
const t = 0.55;
const mx = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * ctrlX + t * t * targetX;
const my = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * ctrlY + t * t * targetY;
const dtx = 2 * (1 - t) * (ctrlX - startX) + 2 * t * (targetX - ctrlX);
const dty = 2 * (1 - t) * (ctrlY - startY) + 2 * t * (targetY - ctrlY);
const dirAngle = Math.atan2(dty, dtx) + (phys.V_kV > 0 ? 0 : Math.PI);

ctx.save();
ctx.setLineDash([]);
ctx.translate(mx, my);
ctx.rotate(dirAngle);
ctx.beginPath();
ctx.moveTo(4, 0);
ctx.lineTo(-3, -3);
ctx.lineTo(-3, 3);
ctx.closePath();
ctx.fill();
ctx.restore();
}
ctx.restore();
}

// 3. Dessin du filet d'eau continu avec instabilité de Plateau-Rayleigh progressive
ctx.save();
ctx.beginPath();
ctx.moveTo(jetStartX - 5.8, topY - 5);
const phasePR = frameCount * 0.38;
for (let z = 0; z <= zBreakCm; z += 0.25) {
const x = evaluateTrajectoryX(z, phys.zRod, phys.aIon, phys.aDip);
const y = topY + z * pxPerCm;
const baseR = Math.max(2.5, 5.8 / Math.pow(1 + z * 0.16, 0.28));
const prAmp = z > 9.5 ? 1.15 * Math.pow((z - 9.5) / (zBreakCm - 9.5), 2.1) : 0;
const r = Math.max(1.1, baseR + prAmp * Math.sin(z * 3.6 - phasePR));
ctx.lineTo(x - r, y);
}
for (let z = zBreakCm; z >= 0; z -= 0.25) {
const x = evaluateTrajectoryX(z, phys.zRod, phys.aIon, phys.aDip);
const y = topY + z * pxPerCm;
const baseR = Math.max(2.5, 5.8 / Math.pow(1 + z * 0.16, 0.28));
const prAmp = z > 9.5 ? 1.15 * Math.pow((z - 9.5) / (zBreakCm - 9.5), 2.1) : 0;
const r = Math.max(1.1, baseR + prAmp * Math.sin(z * 3.6 - phasePR));
ctx.lineTo(x + r, y);
}
ctx.lineTo(jetStartX + 5.8, topY - 5);
ctx.closePath();

const jetGrad = ctx.createLinearGradient(jetStartX - 8, 0, jetStartX + 55, 0);
jetGrad.addColorStop(0, '#0369a1');
jetGrad.addColorStop(0.35, '#38bdf8');
jetGrad.addColorStop(0.7, '#e0f2fe');
jetGrad.addColorStop(1, '#0284c7');
ctx.fillStyle = jetGrad;
ctx.fill();
ctx.strokeStyle = '#0284c7';
ctx.lineWidth = 1;
ctx.stroke();
ctx.restore();

// Affichage des charges ioniques induites (ou dipôles neutres) dans la colonne continue
if (phys.inductionFactor > 0.1 && Math.abs(phys.V_kV) >= 1) {
for (let k = 0; k < 5; k++) {
const zAnim = 1.6 + ((k * 2.45 + frameCount * 0.065) % (zBreakCm - 2.0));
const x = evaluateTrajectoryX(zAnim, phys.zRod, phys.aIon, phys.aDip);
const y = topY + zAnim * pxPerCm;
drawChargeBadge(x + 6, y, phys.dropChargeSign, 5.2);
}
// Co-ions repoussés vers le robinet (la terre) en haut
const zUp = 2.8 - ((frameCount * 0.05) % 2.1);
const xUp = evaluateTrajectoryX(zUp, phys.zRod, phys.aIon, phys.aDip);
drawChargeBadge(xUp - 6, topY + zUp * pxPerCm, -phys.dropChargeSign, 4.5);
} else if (phys.mode === 'dipole' && Math.abs(phys.V_kV) >= 1) {
// Paires dipolaires liées neutres (q_net = 0)
for (let z = 3.0; z < zBreakCm - 1; z += 3.5) {
const x = evaluateTrajectoryX(z, phys.zRod, phys.aIon, phys.aDip);
const y = topY + z * pxPerCm;
drawChargeBadge(x - 4.5, y, - (phys.V_kV < 0 ? 1 : -1), 3.6);
drawChargeBadge(x + 4.5, y, + (phys.V_kV < 0 ? 1 : -1), 3.6);
}
}

// Blindage cylindrique de Faraday en haut si mode "shielded"
if (phys.mode === 'shielded') {
ctx.save();
const shieldGrad = ctx.createLinearGradient(jetStartX - 24, 0, jetStartX + 24, 0);
shieldGrad.addColorStop(0, 'rgba(71, 85, 105, 0.32)');
shieldGrad.addColorStop(0.5, 'rgba(226, 232, 240, 0.38)');
shieldGrad.addColorStop(1, 'rgba(71, 85, 105, 0.32)');
ctx.fillStyle = shieldGrad;
ctx.strokeStyle = '#334155';
ctx.lineWidth = 2.2;
ctx.beginPath();
ctx.roundRect(jetStartX - 24, topY + 2, 48, (zBreakCm + 0.4) * pxPerCm, 6);
ctx.fill();
ctx.stroke();

// Maillage cage de Faraday
ctx.strokeStyle = 'rgba(51, 65, 85, 0.22)';
ctx.lineWidth = 1;
for (let sy = topY + 16; sy < breakY; sy += 16) {
ctx.beginPath();
ctx.moveTo(jetStartX - 24, sy);
ctx.lineTo(jetStartX + 24, sy);
ctx.stroke();
}

ctx.fillStyle = '#1e293b';
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.fillText('Cylindre métallique', jetStartX + 29, topY + 42);
ctx.fillText('relié à la terre (⏚)', jetStartX + 29, topY + 55);
ctx.fillStyle = '#0369a1';
ctx.fillText('Champ écranté (q = 0)', jetStartX + 29, topY + 70);
ctx.restore();
}

// 4. Génération et dynamique des gouttes (z > zBreakCm) suivant exactement evaluateTrajectoryX
if (frameCount % 6 === 0) {
drops.push({
zCm: zBreakCm,
vzCm: 0.32, // vitesse verticale en cm/frame
qSign: phys.dropChargeSign,
qMag: phys.dropChargeMag,
aIonSnap: phys.aIon,
aDipSnap: phys.aDip,
zRodSnap: phys.zRod
});
}

const waterSurfaceY = beakerY + beakerH - waterLevel;

for (let i = drops.length - 1; i >= 0; i--) {
const d = drops[i];
d.zCm += d.vzCm;
d.vzCm += 0.0045; // accélération gravitationnelle

const dY = topY + d.zCm * pxPerCm;
const dX = evaluateTrajectoryX(d.zCm, d.zRodSnap, d.aIonSnap, d.aDipSnap);

// Dessin de la gouttelette avec reflet 3D
ctx.save();
const dGrad = ctx.createRadialGradient(dX - 1.5, dY - 1.5, 0.8, dX, dY, 4.8);
dGrad.addColorStop(0, '#bae6fd');
dGrad.addColorStop(0.5, '#0ea5e9');
dGrad.addColorStop(1, '#0369a1');
ctx.beginPath();
ctx.arc(dX, dY, 4.6, 0, Math.PI * 2);
ctx.fillStyle = dGrad;
ctx.fill();
ctx.strokeStyle = '#0369a1';
ctx.lineWidth = 0.9;
ctx.stroke();

if (d.qMag > 0.005 && d.qSign !== 0) {
drawChargeBadge(dX + 7.5, dY, d.qSign, 4.6);
}
ctx.restore();

// Réception dans le bécher
if (dY >= waterSurfaceY) {
if (dX >= beakerX && dX <= beakerX + beakerW) {
accumulatedCharge_nC += d.qSign * d.qMag;
waterLevel = Math.min(44, waterLevel + 0.07);
ripples.push({ x: dX, y: waterSurfaceY, r: 2, alpha: 0.85 });
}
drops.splice(i, 1);
}
}

// Ondulations capillaires à la surface de l'eau du bécher
for (let i = ripples.length - 1; i >= 0; i--) {
const rp = ripples[i];
rp.r += 0.85;
rp.alpha -= 0.038;
if (rp.alpha <= 0) {
ripples.splice(i, 1);
} else {
ctx.save();
ctx.strokeStyle = `rgba(255, 255, 255, ${rp.alpha})`;
ctx.lineWidth = 1.3;
ctx.beginPath();
ctx.ellipse(rp.x, rp.y, rp.r, rp.r * 0.25, 0, 0, Math.PI * 2);
ctx.stroke();
ctx.restore();
}
}

const qSignStr = accumulatedCharge_nC > 0.005 ? '+' : (accumulatedCharge_nC < -0.005 ? '−' : '');
qReadout.textContent = qSignStr + Math.abs(accumulatedCharge_nC).toFixed(2) + ' nC';

// 5. Dessin du robinet en laiton/chrome (par-dessus l'origine du filet)
ctx.save();
const pipeGrad = ctx.createLinearGradient(0, 14, 0, 36);
pipeGrad.addColorStop(0, '#334155');
pipeGrad.addColorStop(0.45, '#94a3b8');
pipeGrad.addColorStop(1, '#1e293b');
ctx.fillStyle = pipeGrad;
ctx.beginPath();
ctx.roundRect(14, 16, jetStartX - 2, 18, 4);
ctx.fill();
ctx.beginPath();
ctx.roundRect(jetStartX - 11, 16, 22, 35, 4);
ctx.fill();
// Bague du brise-jet à y = topY
ctx.fillStyle = '#0f172a';
ctx.fillRect(jetStartX - 9, topY - 5, 18, 5);
// Vanne au-dessus
ctx.fillStyle = '#334155';
ctx.fillRect(jetStartX - 4, 8, 8, 8);
ctx.fillStyle = '#dc2626';
ctx.beginPath();
ctx.roundRect(jetStartX - 17, 4, 34, 6, 3);
ctx.fill();

ctx.fillStyle = '#f8fafc';
ctx.font = 'bold 10px system-ui, sans-serif';
ctx.fillText('Terre ⏚ (V = 0)', 20, 29);
ctx.restore();

// 6. Dessin de la règle électrisée déplaçable
ctx.save();
const rodGrad = ctx.createLinearGradient(rodX, rodY - 15, rodX, rodY + 15);
if (phys.V_kV < 0) {
rodGrad.addColorStop(0, '#60a5fa');
rodGrad.addColorStop(0.45, '#2563eb');
rodGrad.addColorStop(1, '#1e3a8a');
} else if (phys.V_kV > 0) {
rodGrad.addColorStop(0, '#f87171');
rodGrad.addColorStop(0.45, '#dc2626');
rodGrad.addColorStop(1, '#7f1d1d');
} else {
rodGrad.addColorStop(0, '#94a3b8');
rodGrad.addColorStop(1, '#475569');
}
ctx.fillStyle = rodGrad;
ctx.shadowColor = 'rgba(15, 23, 42, 0.2)';
ctx.shadowBlur = 10;
ctx.shadowOffsetY = 3;
ctx.beginPath();
ctx.roundRect(rodX, rodY - 15, 190, 30, 15);
ctx.fill();
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

// Reflet spéculaire sur la règle
ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
ctx.beginPath();
ctx.roundRect(rodX + 10, rodY - 11, 170, 7, 4);
ctx.fill();

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 12px system-ui, sans-serif';
const chargeSymbol = phys.V_kV < 0 ? '− − − − − −' : (phys.V_kV > 0 ? '+ + + + + +' : 'Neutre (0 V)');
ctx.fillText('Règle : ' + chargeSymbol, rodX + 16, rodY + 4);
ctx.fillStyle = 'rgba(255,255,255,0.85)';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.fillText('↕', rodX + 170, rodY + 4);
ctx.restore();

// 7. Échelle horizontale de déviation Δx au-dessus du bécher + Bécher de Faraday + Électromètre
ctx.save();
// Règle horizontale Δx (de 0 à 6 cm à partir de jetStartX)
const scaleY = beakerY - 12;
ctx.strokeStyle = '#94a3b8';
ctx.fillStyle = '#64748b';
ctx.lineWidth = 1;
ctx.font = '9.5px ui-monospace, monospace';
ctx.textAlign = 'center';
ctx.beginPath();
ctx.moveTo(jetStartX, scaleY);
ctx.lineTo(jetStartX + 6 * pxPerCmX, scaleY);
ctx.stroke();
for (let cx = 0; cx <= 6; cx += 2) {
const tx = jetStartX + cx * pxPerCmX;
ctx.beginPath();
ctx.moveTo(tx, scaleY - 3);
ctx.lineTo(tx, scaleY + 3);
ctx.stroke();
ctx.fillText(cx + 'cm', tx, scaleY - 5);
}
// Curseur d'impact Δx
const impactX = Math.min(beakerX + beakerW - 6, jetStartX + phys.dxPx);
ctx.fillStyle = '#0284c7';
ctx.beginPath();
ctx.moveTo(impactX, scaleY + 6);
ctx.lineTo(impactX - 4, scaleY + 1);
ctx.lineTo(impactX + 4, scaleY + 1);
ctx.closePath();
ctx.fill();

// Eau dans le bécher
const waterGrad = ctx.createLinearGradient(0, waterSurfaceY, 0, beakerY + beakerH);
waterGrad.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
waterGrad.addColorStop(1, 'rgba(2, 132, 199, 0.72)');
ctx.fillStyle = waterGrad;
ctx.fillRect(beakerX + 3, waterSurfaceY, beakerW - 6, waterLevel - 2);

if (Math.abs(accumulatedCharge_nC) > 0.12) {
const sSign = accumulatedCharge_nC > 0 ? 1 : -1;
const count = Math.min(8, Math.floor(Math.abs(accumulatedCharge_nC) / 0.35) + 1);
for (let k = 0; k < count; k++) {
drawChargeBadge(beakerX + 22 + k * 22, beakerY + beakerH - 11, sSign, 5.0);
}
}

// Parois du bécher (Cylindre de Faraday)
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

// Câble coaxial reliant le cylindre de Faraday à l'électromètre
ctx.strokeStyle = '#475569';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.moveTo(beakerX + beakerW, beakerY + 42);
ctx.lineTo(316, beakerY + 42);
ctx.stroke();

// Boîtier de l'électromètre
ctx.fillStyle = '#ffffff';
ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
ctx.shadowBlur = 8;
ctx.beginPath();
ctx.roundRect(316, beakerY - 6, 130, 78, 12);
ctx.fill();
ctx.shadowBlur = 0;
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.8;
ctx.stroke();

// Cadran analogique à aiguille amortie
const dialX = 381, dialY = beakerY + 35, dialR = 22;
ctx.fillStyle = '#f8fafc';
ctx.beginPath();
ctx.arc(dialX, dialY, dialR, Math.PI, 0);
ctx.fill();
ctx.strokeStyle = '#cbd5e1';
ctx.lineWidth = 1.2;
ctx.stroke();

// Graduations du cadran
for (let a = -3; a <= 3; a++) {
const ang = -Math.PI / 2 + (a / 3) * (Math.PI / 2.3);
ctx.beginPath();
ctx.moveTo(dialX + Math.sin(ang) * (dialR - 4), dialY - Math.cos(ang) * (dialR - 4));
ctx.lineTo(dialX + Math.sin(ang) * dialR, dialY - Math.cos(ang) * dialR);
ctx.stroke();
}

const maxQ = 6.0;
const clampedQ = Math.max(-maxQ, Math.min(maxQ, displayedCharge_nC));
const needleAngle = -Math.PI / 2 + (clampedQ / maxQ) * (Math.PI / 2.3);
ctx.strokeStyle = '#be185d';
ctx.lineWidth = 2.2;
ctx.beginPath();
ctx.moveTo(dialX, dialY);
ctx.lineTo(dialX + Math.sin(needleAngle) * (dialR - 3), dialY - Math.cos(needleAngle) * (dialR - 3));
ctx.stroke();
ctx.fillStyle = '#be185d';
ctx.beginPath();
ctx.arc(dialX, dialY, 2.5, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#334155';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('ÉLECTROMÈTRE', dialX, beakerY + 9);

ctx.fillStyle = '#be185d';
ctx.font = 'bold 13px ui-monospace, monospace';
ctx.fillText(qSignStr + Math.abs(accumulatedCharge_nC).toFixed(2) + ' nC', dialX, beakerY + 60);
ctx.restore();

requestAnimationFrame(animate);
}

animate();
})();
</script>

La présence d'ions dans l'eau étant grandement favorisée par le caractère polaire et dissociant de l'eau (de permittivité $\varepsilon\_r \approx 80$), on peut en partie sauver la face de l'interprétation classique&nbsp;: l'expérience de la règle électrisée ne met pas directement en évidence l'attraction des dipôles $\text{H}\_2\text{O}$ par un gradient de champ, mais elle illustre bel et bien la **conduction électrolytique** de l'eau, qui est l'une des conséquences indirectes de sa polarité&nbsp;!

La même erreur d'interprétation touche une autre expérience célèbre d'introduction à l'électrostatique&nbsp;: **l'attraction de petits bouts de papier par une règle frottée**&nbsp;! Là encore, ce n'est pas la polarisation diélectrique de la cellulose du papier qui permet de soulever les confettis contre la gravité, mais la légère conductivité électrique du papier (due à son humidité résiduelle au contact de la table) qui permet de les charger par influence avant qu'ils ne décollent.

<br>

> **Bruno Jech**, «&nbsp;Sur l'expérience de Desaguliers de la déviation d'un filet d'eau par une tige électrisée&nbsp;», *Le Bup*, vol. 106, n<sup>o</sup> 946, juillet-août-septembre 2012, p.&nbsp;737-760.[🌐](https://ampere-archives.fr/histoire-electricite/files/original/7a632593c24a1c1497117cc4b44a40e2.pdf)
><br><br>
> **M. Ziaei-Moayyed, E. Goodman & P. Williams**, «&nbsp;Electrical Deflection of Polar Liquid Streams: A Misunderstood Demonstration&nbsp;», *Journal of Chemical Education*, vol. 77, n<sup>o</sup> 11, 2000, p.&nbsp;1520. [🌐](https://instructional-resources.physics.uiowa.edu/sites/instructional-resources.physics.uiowa.edu/files/field/demos/documents/Electrical%20Deflection%20of%20Polar%20Liquid%20Streams.pdf)
