+++
title = "Le nombre e"
date = 2026-10-31T14:00:00+01:00
weight = 4
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


# Le nombre $\mathrm{e}$
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Des intérêts composés de Bernoulli à la série des factorielles et à l'irrationalité de Fourier</i></p>

Pourquoi la constante d'Euler $\mathrm{e} \approx 2,7182818\dots$, découverte par Jacob Bernoulli en 1683 en cherchant le plafond d'un placement financier à intérêts composés, $\displaystyle \mathrm{e} = \lim\_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n$, est-elle rigoureusement égale à la somme infinie des inverses de factorielles&nbsp;?

<div id="grosseformule">

$$
\mathrm{e} = \sum_{k=0}^{+\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \cdots
$$

</div>

On pourrait simplement invoquer le développement en série de Taylor de la fonction $\exp(x)$ en $x = 1$. Mais ça ne serait pas super satisfaisant...


## L'histoire des intérêts composés

### Le problème de l'usure

Contrairement à $\pi$, qui est né de la géométrie grecque dès l'Antiquité, le nombre $\mathrm{e}$ est né d'une question financière très concrète posée à Bâle en 1683 par **Jacob Bernoulli** dans son mémoire *Quaestiones nonnullae de usuris* («&nbsp;Quelques questions sur les intérêts&nbsp;»).

Imaginons un banquier exceptionnellement généreux qui propose un taux d'intérêt nominal de **$100\\,\\%$ par an**, et que nous déposions un capital initial de **$1$ écu** au $1^{\text{er}}$ janvier&nbsp;:

<ul>
<li><b>Capitalisation annuelle ($n = 1$)&nbsp;:</b> La banque attend la fin de l'année pour verser les intérêts ($100\,\%$ de $1$ écu). Au $31$ décembre, le capital vaut&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.25em 0;">$\displaystyle u_1 = 1 + 1 = \mathbf{2}\text{ écus.}$</span>
</li>
<li><b>Capitalisation semestrielle ($n = 2$)&nbsp;:</b> Au lieu d'attendre un an, on découpe l'année en $2$ semestres, chacun rapportant la moitié du taux annuel, soit $\frac{100\,\%}{2} = 50\,\% = \frac{1}{2}$.<br>
Au bout de $6$ mois, le capital est devenu $1 + \frac{1}{2} = 1,50$ écu. Mais durant le second semestre, <i>les intérêts du premier semestre produisent eux-mêmes des intérêts</i>&nbsp;: le nouveau capital de $1,50$ écu est à son tour multiplié par $\left(1 + \frac{1}{2}\right)$&nbsp;!<br>
<span style="display:block;text-align:center;margin:0.25em 0;">$\displaystyle u_2 = \left(1 + \frac{1}{2}\right)^2 = 1 + 2\left(\frac{1}{2}\right) + \frac{1}{4} = \mathbf{2,25}\text{ écus.}$</span>
</li>
<li><b>Capitalisation trimestrielle ($n = 4$)&nbsp;:</b> L'année est découpée en $4$ trimestres à $\frac{100\,\%}{4} = 25\,\%$ chacun&nbsp;: $\displaystyle u_4 = \left(1 + \frac{1}{4}\right)^4 = \frac{625}{256} \approx \mathbf{2,4414}\text{ écus}$.</li>
<li><b>Capitalisation mensuelle ($n = 12$)&nbsp;:</b> Chaque mois rapporte $\frac{1}{12}$ du capital accumulé&nbsp;: $\displaystyle u_{12} = \left(1 + \frac{1}{12}\right)^{12} \approx \mathbf{2,6130}\text{ écus}$.</li>
<li><b>Capitalisation quotidienne ($n = 365$)&nbsp;:</b> Chaque jour rapporte $\frac{1}{365}$ du capital de la veille&nbsp;: $\displaystyle u_{365} = \left(1 + \frac{1}{365}\right)^{365} \approx \mathbf{2,714567}\text{ écus}$.</li>
<li><b>Capitalisation à chaque seconde ($n = 31\,536\,000$)&nbsp;:</b> $\displaystyle u_{31\,536\,000} \approx \mathbf{2,71828178}\text{ écus}$.</li>
</ul>

<div class="svg-container">
<svg viewBox="0 0 760 280" style="max-width:760px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<defs>
<marker id="arr1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 1 L 10 5 L 0 9 z" fill="#475569"/>
</marker>
</defs>
<text x="380" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">Mécanisme des intérêts composés sur 1 an : pourquoi diviser le temps multiplie les générations d'intérêts</text>
<!-- Panel 1: n=1 -->
<rect x="20" y="40" width="225" height="225" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="132" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">1. Annuel (n = 1, taux 100 %)</text>
<line x1="35" y1="69" x2="230" y2="69" stroke="#e2e8f0" stroke-width="1"/>
<rect x="45" y="182" width="70" height="48" rx="4" fill="#004D80"/>
<text x="80" y="210" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">Capital 1</text>
<rect x="135" y="182" width="70" height="48" rx="4" fill="#004D80"/>
<rect x="135" y="134" width="70" height="48" rx="4" fill="#006C65"/>
<text x="170" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Capital 1</text>
<text x="170" y="162" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">+ Intérêt 1</text>
<path d="M 118 206 L 131 206" stroke="#475569" stroke-width="2" marker-end="url(#arr1)"/>
<text x="80" y="250" text-anchor="middle" font-size="10.5" fill="#475569">t = 0</text>
<text x="170" y="250" text-anchor="middle" font-size="10.5" font-weight="700" fill="#006C65">t = 1 an : u₁ = 2,00</text>
<!-- Panel 2: n=2 -->
<rect x="267" y="40" width="225" height="225" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="380" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">2. Semestriel (n = 2, 2 × 50 %)</text>
<line x1="282" y1="69" x2="477" y2="69" stroke="#e2e8f0" stroke-width="1"/>
<rect x="284" y="182" width="46" height="48" rx="4" fill="#004D80"/>
<text x="307" y="210" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">1</text>
<rect x="355" y="182" width="46" height="48" rx="4" fill="#004D80"/>
<rect x="355" y="158" width="46" height="24" rx="3" fill="#006C65"/>
<text x="378" y="210" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">1</text>
<text x="378" y="174" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">+1/2</text>
<rect x="426" y="182" width="48" height="48" rx="4" fill="#004D80"/>
<rect x="426" y="134" width="48" height="48" rx="3" fill="#006C65"/>
<rect x="426" y="122" width="48" height="12" rx="2" fill="#970E53"/>
<text x="450" y="210" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">1</text>
<text x="450" y="162" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">+2×(1/2)</text>
<text x="450" y="116" text-anchor="middle" font-size="9.5" font-weight="700" fill="#970E53">+1/4</text>
<text x="307" y="250" text-anchor="middle" font-size="10" fill="#475569">t = 0</text>
<text x="378" y="250" text-anchor="middle" font-size="10" fill="#475569">6 mois (1,5)</text>
<text x="450" y="250" text-anchor="middle" font-size="10.5" font-weight="700" fill="#970E53">u₂ = 2,25</text>
<!-- Panel 3: Continuous n -> inf -->
<rect x="515" y="40" width="225" height="225" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="627" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">3. Continu (n → ∞ : couches 1/k!)</text>
<line x1="530" y1="69" x2="725" y2="69" stroke="#e2e8f0" stroke-width="1"/>
<!-- Stack starting at y=230 going up: k=0 (48px), k=1 (48px), k=2 (24px), k=3 (10px), k>=4 (4px) -> top at y=96 -->
<rect x="536" y="182" width="142" height="48" rx="3" fill="#004D80"/>
<text x="607" y="210" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">k = 0 : Capital initial = 1</text>
<rect x="536" y="134" width="142" height="48" rx="3" fill="#006C65"/>
<text x="607" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">k = 1 : Intérêts directs = 1</text>
<rect x="536" y="110" width="142" height="24" rx="2" fill="#970E53"/>
<text x="607" y="126" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">k = 2 : Int. 2nd ordre = 1/2!</text>
<rect x="536" y="100" width="142" height="10" rx="1.5" fill="#d97706"/>
<rect x="536" y="95" width="142" height="5" rx="1" fill="#7c3aed"/>
<!-- Callout for k=3 and k>=4 on the right & above -->
<line x1="680" y1="105" x2="692" y2="105" stroke="#d97706" stroke-width="1.5"/>
<text x="695" y="108" text-anchor="start" font-size="9" font-weight="700" fill="#b45309">1/3!</text>
<text x="607" y="87" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7c3aed">k ≥ 3 : + 1/3! + 1/4! + …</text>
<text x="627" y="250" text-anchor="middle" font-size="10.5" font-weight="700" fill="#970E53">e = 1 + 1 + 1/2! + 1/3! + … ≈ 2,718</text>
</svg>
</div>

### Pourquoi ça plafonne&nbsp;?

On pourrait croire naïvement qu'en capitalisant un million de fois par seconde, notre capital va devenir infiniment grand. Jacob Bernoulli découvre en 1683 qu'il n'en est rien&nbsp;: le capital final plafonne inexorablement sous un mur situé entre $2,5$ et $3$ écus (qu'Euler baptisera $\mathrm{e}$ en 1727).

**Comment expliquer intuitivement ce plafond grâce aux générations d'intérêts&nbsp;?**<br>
Lorsque l'année est découpée en $n$ sous-périodes, chaque sous-période multiplie le capital par $\left(1 + \frac{1}{n}\right)$. Développer le produit $\left(1 + \frac{1}{n}\right)^n$, c'est classer chaque centime présent au $31$ décembre selon son **degré de filiation $k$**&nbsp;:

<ol style="margin-top:-1em;">
<li><b>Génération $k = 0$ (le capital initial)&nbsp;:</b> C'est l'écu déposé au $1^{\text{er}}$ janvier. Il vaut toujours $\mathbf{1}$.</li>
<li><b>Génération $k = 1$ (les intérêts de premier ordre)&nbsp;:</b> Ce sont les intérêts produits directement par l'écu initial au cours de chacune des $n$ périodes. Il y a $n$ périodes et chacune verse $\frac{1}{n}$ écu&nbsp;: leur somme vaut toujours exactement $\displaystyle n \times \frac{1}{n} = \mathbf{1}$, que l'on capitalise une fois par an ou un milliard de fois par seconde&nbsp;!</li>
<li><b>Génération $k = 2$ (les intérêts sur les intérêts)&nbsp;:</b> Un intérêt de $\frac{1}{n}$ écu versé à une période $i_1$ produit à son tour, lors d'une période <i>ultérieure</i> $i_2 > i_1$, un intérêt de second ordre égal à $\frac{1}{n} \times \frac{1}{n} = \frac{1}{n^2}$ écu. Combien y a-t-il de tels couples de périodes ordonnées $1 \le i_1 < i_2 \le n$&nbsp;? Exactement $\binom{n}{2} = \frac{n(n-1)}{2!}$ couples&nbsp;! Leur contribution totale vaut donc&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle \binom{n}{2}\frac{1}{n^2} = \frac{n(n-1)}{2!\,n^2} = \frac{1}{2!}\left(1 - \frac{1}{n}\right) \xrightarrow[n \to +\infty]{} \mathbf{\frac{1}{2!}} = 0,50\text{ écu.}$</span>
</li>
<li><b>Génération quelconque $k$ (les intérêts de $k$-ième génération)&nbsp;:</b> Un centime de génération $k$ est né d'une chaîne chronologique de $k$ versements successifs aux périodes $1 \le i_1 < i_2 < \dots < i_k \le n$. Il y a $\binom{n}{k}$ telles chaînes, chacune rapportant $\frac{1}{n^k}$ écu, soit un gain de génération $k$ plafonné par $\displaystyle \mathbf{\frac{1}{k!}}$&nbsp;!</li>
</ol>


<div id="preuve">

Remarque&nbsp;: si le taux annuel nominal est $r$ au lieu de $100\\,\\% = 1$, chaque période rapporte $\frac{r}{n}$ et la $k$-ième génération d'intérêts tend vers $\frac{r^k}{k!}$, ce qui donne $\displaystyle \lim\_{n \to +\infty}\left(1 + \frac{r}{n}\right)^n = \sum\_{k=0}^{+\infty} \frac{r^k}{k!} = \mathrm{e}^r$.

</div>

L'animation interactive ci-dessous vous permet de faire varier la fréquence de capitalisation $n$ (d'annuelle à continue) pour visualiser les marches d'escalier du capital sur l'année $[0, 1]$, la décomposition par générations d'intérêts $k = 0, 1, 2, 3\dots$ et le pincement de $\mathrm{e}$ entre les suites $u\_n$, $S\_n$ et $v\_n = \left(1+\frac{1}{n}\right)^{n+1}$.

<div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; padding: 16px; margin: 25px auto; max-width: 820px; box-shadow: 0 4px 10px -2px rgba(0,0,0,0.07); font-family: system-ui, -apple-system, sans-serif;">
<div style="text-align: center; margin-bottom: 12px;">
<span style="font-size: 1.06em; font-weight: 700; color: #004D80;">Simulateur d'Intérêts Composés de Bernoulli &amp; Convergence vers $\mathrm{e}$</span>
</div>
<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #f1f5f9; padding: 10px 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
<div style="display: flex; gap: 5px; flex-wrap: wrap;">
<button class="bernPresetBtn" data-idx="0" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.8em;">Annuel (n=1)</button>
<button class="bernPresetBtn" data-idx="1" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.8em;">Semestriel (n=2)</button>
<button class="bernPresetBtn" data-idx="3" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #004D80; background: #004D80; color: #fff; font-weight: 700; cursor: pointer; font-size: 0.8em;">Trimestriel (n=4)</button>
<button class="bernPresetBtn" data-idx="8" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.8em;">Mensuel (n=12)</button>
<button class="bernPresetBtn" data-idx="16" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #004D80; background: #fff; color: #004D80; font-weight: 600; cursor: pointer; font-size: 0.8em;">Quotidien (n=365)</button>
<button class="bernPresetBtn" data-idx="20" style="padding: 5px 9px; border-radius: 6px; border: 1px solid #970E53; background: #fff; color: #970E53; font-weight: 600; cursor: pointer; font-size: 0.8em;">Continu (n→∞)</button>
</div>
<div style="flex: 1; min-width: 200px;">
<div style="display: flex; justify-content: space-between; font-size: 0.84em; font-weight: 600; color: #1e293b; margin-bottom: 4px; gap: 6px; flex-wrap: wrap;">
<span>Fréquence de capitalisation&nbsp;:</span>
<span id="bernNLabel" style="color: #970E53; font-family: monospace;">n = 4 (+25,00 % / période)</span>
</div>
<input type="range" id="bernNSlider" min="0" max="20" value="3" step="1" style="width: 100%; accent-color: #970E53; cursor: pointer;">
</div>
</div>
<div id="bernMetricsCards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(155px, 1fr)); gap: 8px; margin-bottom: 12px;">
</div>
<div style="position: relative; width: 100%; background: #ffffff; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden;">
<canvas id="bernoulliInterestCanvas" style="width: 100%; height: 400px; display: block;"></canvas>
</div>
<div id="bernReadout" style="margin-top: 10px; padding: 10px 14px; background: #fff; border-radius: 8px; border-left: 5px solid #006C65; font-size: 0.86em; color: #334155; line-height: 1.5;">
</div>
</div>
<script>
(function() {
const canvas = document.getElementById('bernoulliInterestCanvas');
if (!canvas) return;
const ctx = canvas.getContext('2d');
const slider = document.getElementById('bernNSlider');
const nLabel = document.getElementById('bernNLabel');
const cards = document.getElementById('bernMetricsCards');
const readout = document.getElementById('bernReadout');
const presetBtns = document.querySelectorAll('.bernPresetBtn');
const N_STEPS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 30, 52, 100, 180, 365, 1000, 5000, 10000, Infinity];
let stepIdx = 3; // n = 4 by default
const E_VAL = Math.E;
const SUB_MAP = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','n':'ₙ','k':'ₖ','∞':'∞' };
const SUP_MAP = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','n':'ⁿ','j':'ʲ','k':'ᵏ','t':'ᵗ','∞':'∞' };
function toSub(val) {
if (!isFinite(val)) return '∞';
return String(val).split('').map(c => SUB_MAP[c] || c).join('');
}
function toSup(val) {
if (!isFinite(val)) return '∞';
return String(val).split('').map(c => SUP_MAP[c] || c).join('');
}
function fact(k) {
let r = 1;
for (let i = 2; i <= k; i++) r *= i;
return r;
}
function computeGenerations(nVal) {
const gens = [];
const maxK = isFinite(nVal) ? Math.min(nVal, 8) : 8;
for (let k = 0; k <= maxK; k++) {
if (!isFinite(nVal)) {
gens.push(1 / fact(k));
} else {
let prod = 1;
for (let j = 1; j < k; j++) prod *= (1 - j / nVal);
gens.push(prod / fact(k));
}
}
return gens;
}
function computeSn(nVal) {
if (!isFinite(nVal)) return E_VAL;
let s = 0;
for (let k = 0; k <= Math.min(nVal, 18); k++) s += 1 / fact(k);
return s;
}
function updateUI() {
const n = N_STEPS[stepIdx];
const isInf = !isFinite(n);
if (isInf) {
nLabel.textContent = 'n → ∞ (capitalisation continue)';
} else {
const ratePct = 100 / n;
const rateStr = ratePct >= 0.1 ? ratePct.toFixed(2) : ratePct.toExponential(2);
nLabel.textContent = `n = ${n.toLocaleString('fr-FR')} (+${rateStr} % / période)`;
}
presetBtns.forEach(btn => {
const bIdx = parseInt(btn.getAttribute('data-idx'), 10);
const isContBtn = bIdx === 20;
const baseCol = isContBtn ? '#970E53' : '#004D80';
if (bIdx === stepIdx) {
btn.style.background = baseCol;
btn.style.color = '#ffffff';
btn.style.fontWeight = '700';
} else {
btn.style.background = '#ffffff';
btn.style.color = baseCol;
btn.style.fontWeight = '600';
}
});
const un = isInf ? E_VAL : Math.pow(1 + 1 / n, n);
const vn = isInf ? E_VAL : Math.pow(1 + 1 / n, n + 1);
const sn = computeSn(n);
const nDisp = isInf ? '∞' : n.toLocaleString('fr-FR');
const np1Disp = isInf ? '∞' : (n + 1).toLocaleString('fr-FR');
cards.innerHTML = `
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Capital composé <i>u</i><sub>${nDisp}</sub> = (1 + 1/${nDisp})<sup>${nDisp}</sup></div>
<div style="font-size:1.04em;font-weight:700;color:#004D80;font-family:monospace;margin-top:2px;">${un.toFixed(6)} €</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Somme factorielle <i>S</i><sub>${nDisp}</sub> = &Sigma;<sub><i>k</i>=0..${nDisp}</sub> 1/<i>k</i>!</div>
<div style="font-size:1.04em;font-weight:700;color:#006C65;font-family:monospace;margin-top:2px;">${sn.toFixed(6)} €</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Plafond continu e</div>
<div style="font-size:1.04em;font-weight:700;color:#970E53;font-family:monospace;margin-top:2px;">${E_VAL.toFixed(6)} €</div>
</div>
<div style="background:#fff;border:1px solid #cbd5e1;border-radius:7px;padding:8px 10px;text-align:center;">
<div style="font-size:0.76em;color:#64748b;font-weight:600;">Suite majorante <i>v</i><sub>${nDisp}</sub> = (1 + 1/${nDisp})<sup>${np1Disp}</sup></div>
<div style="font-size:1.04em;font-weight:700;color:#d97706;font-family:monospace;margin-top:2px;">${vn.toFixed(6)} €</div>
</div>
`;
}
function drawGrowthChart(x0, y0, w, h, n) {
const isInf = !isFinite(n);
const padL = 46, padR = 16, padT = 44, padB = 38;
const plotW = w - padL - padR;
const plotH = h - padT - padB;
const cxTitle = x0 + w / 2;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'center';
const titleTxt = isInf
? 'Croissance continue du capital sur 1 an (n → ∞)'
: `Croissance du capital sur 1 an (n = ${n.toLocaleString('fr-FR')})`;
ctx.fillText(titleTxt, cxTitle, y0 + 20, w - 16);
ctx.fillStyle = '#64748b';
ctx.font = '10.5px system-ui, sans-serif';
ctx.fillText('Escalier bleu : (1 + 1/n)ʲ — Pointillés rouges : exp(t) — Gris : 1 + t', cxTitle, y0 + 36, w - 16);
const yMin = 0.85, yMax = 2.95;
const toX = t => x0 + padL + t * plotW;
const toY = y => y0 + padT + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
ctx.strokeStyle = '#94a3b8';
ctx.lineWidth = 1.3;
ctx.beginPath();
ctx.moveTo(x0 + padL, y0 + padT);
ctx.lineTo(x0 + padL, y0 + padT + plotH);
ctx.lineTo(x0 + padL + plotW, y0 + padT + plotH);
ctx.stroke();
[1.0, 1.5, 2.0, 2.5, E_VAL].forEach(val => {
const py = toY(val);
const isE = Math.abs(val - E_VAL) < 0.001;
ctx.strokeStyle = isE ? 'rgba(151, 14, 83, 0.5)' : 'rgba(148, 163, 184, 0.25)';
ctx.setLineDash(isE ? [5, 3] : []);
ctx.beginPath();
ctx.moveTo(x0 + padL, py);
ctx.lineTo(x0 + padL + plotW, py);
ctx.stroke();
ctx.setLineDash([]);
ctx.fillStyle = isE ? '#970E53' : '#64748b';
ctx.font = isE ? 'bold 10px monospace' : '9.5px monospace';
ctx.textAlign = 'right';
ctx.fillText(isE ? 'e≈2,72' : val.toFixed(2), x0 + padL - 5, py + 3);
});
[0, 0.25, 0.5, 0.75, 1.0].forEach(t => {
const px = toX(t);
ctx.fillStyle = '#475569';
ctx.font = '10px monospace';
ctx.textAlign = 'center';
ctx.fillText(t === 0 ? 't=0' : t === 1 ? '1 an' : `${t}`, px, y0 + padT + plotH + 15);
});
// Simple interest line 1 + t
ctx.strokeStyle = '#64748b';
ctx.lineWidth = 1.2;
ctx.setLineDash([2, 3]);
ctx.beginPath();
ctx.moveTo(toX(0), toY(1));
ctx.lineTo(toX(1), toY(2));
ctx.stroke();
ctx.setLineDash([]);
// Discrete staircase (1 + 1/n)^j or smooth curve when n is large / Infinity
ctx.strokeStyle = '#004D80';
ctx.lineWidth = 2.2;
ctx.beginPath();
if (isInf || n > 120) {
const steps = 120;
for (let i = 0; i <= steps; i++) {
const t = i / steps;
const val = isInf ? Math.exp(t) : Math.pow(1 + 1 / n, Math.floor(t * n));
const px = toX(t), py = toY(val);
if (i === 0) ctx.moveTo(px, py);
else ctx.lineTo(px, py);
}
} else {
for (let j = 0; j < n; j++) {
const t0 = j / n;
const t1 = (j + 1) / n;
const cap = Math.pow(1 + 1 / n, j);
const capNext = Math.pow(1 + 1 / n, j + 1);
const px0 = toX(t0), px1 = toX(t1);
const py0 = toY(cap), py1 = toY(capNext);
if (j === 0) ctx.moveTo(px0, py0);
ctx.lineTo(px1, py0);
ctx.lineTo(px1, py1);
}
}
ctx.stroke();
// Continuous curve y = e^t drawn on top in dashed burgundy
ctx.strokeStyle = '#970E53';
ctx.lineWidth = 2.0;
ctx.setLineDash([5, 3]);
ctx.beginPath();
for (let i = 0; i <= 100; i++) {
const t = i / 100;
const px = toX(t), py = toY(Math.exp(t));
if (i === 0) ctx.moveTo(px, py);
else ctx.lineTo(px, py);
}
ctx.stroke();
ctx.setLineDash([]);
if (!isInf && n <= 16) {
for (let j = 0; j <= n; j++) {
const px = toX(j / n);
const py = toY(Math.pow(1 + 1 / n, j));
ctx.beginPath();
ctx.arc(px, py, 3.5, 0, Math.PI * 2);
ctx.fillStyle = j === n ? '#006C65' : '#004D80';
ctx.fill();
}
}
}
function drawGenerationPanel(rx, ry, rw, rh, n) {
const isInf = !isFinite(n);
const nSub = toSub(n);
const nSup = toSup(n);
ctx.fillStyle = '#f8fafc';
ctx.strokeStyle = '#e2e8f0';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.roundRect(rx, ry, rw, rh, 8);
ctx.fill();
ctx.stroke();
const bx = rx + 12, bw = rw - 24;
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 12px system-ui, sans-serif';
ctx.textAlign = 'left';
ctx.fillText(
isInf ? 'Décomposition continue par génération (n → ∞)' : `Décomposition par génération d'intérêts (n = ${n.toLocaleString('fr-FR')})`,
bx, ry + 20, bw
);
const gens = computeGenerations(n);
const colors = ['#004D80', '#006C65', '#970E53', '#d97706', '#7c3aed', '#2563eb'];
const maxScale = 2.85;
// Bar 1: u_n
const y1 = ry + 44;
const un = isInf ? E_VAL : Math.pow(1 + 1 / n, n);
ctx.fillStyle = '#334155';
ctx.font = '600 10.5px system-ui, sans-serif';
ctx.fillText(`Capital composé u${nSub} = ${un.toFixed(5)} €`, bx, y1 - 5, bw);
let cx = bx;
gens.forEach((val, k) => {
const sw = (val / maxScale) * bw;
ctx.fillStyle = colors[k % colors.length];
ctx.fillRect(cx, y1, Math.max(sw - 1, 1), 22);
if (sw > 24) {
ctx.fillStyle = '#fff';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(`k=${k}`, cx + sw / 2, y1 + 14);
}
cx += sw;
});
// Bar 2: S_n
const y2 = ry + 94;
const sn = computeSn(n);
ctx.textAlign = 'left';
ctx.fillStyle = '#334155';
ctx.font = '600 10.5px system-ui, sans-serif';
ctx.fillText(`Plafond factoriel S${nSub} = Σ 1/k! = ${sn.toFixed(5)} €`, bx, y2 - 5, bw);
cx = bx;
const maxKBar = isInf ? 7 : Math.min(n, 7);
for (let k = 0; k <= maxKBar; k++) {
const val = 1 / fact(k);
const sw = (val / maxScale) * bw;
ctx.fillStyle = colors[k % colors.length];
ctx.globalAlpha = 0.85;
ctx.fillRect(cx, y2, Math.max(sw - 1, 1), 22);
ctx.globalAlpha = 1.0;
if (sw > 26) {
ctx.fillStyle = '#fff';
ctx.font = 'bold 9.5px system-ui, sans-serif';
ctx.textAlign = 'center';
ctx.fillText(k <= 1 ? '1' : `1/${k}!`, cx + sw / 2, y2 + 14);
}
cx += sw;
}
// Responsive 3-column table of generations
const tTop = ry + 142;
const col2X = bx + Math.floor(bw * 0.42);
const col3X = bx + Math.floor(bw * 0.72);
ctx.textAlign = 'left';
ctx.fillStyle = '#0f172a';
ctx.font = 'bold 10.5px system-ui, sans-serif';
ctx.fillText('Génération k', bx, tTop, col2X - bx - 4);
ctx.fillText(isInf ? 'Gain continu' : 'Gain C(n,k)/nᵏ', col2X, tTop, col3X - col2X - 4);
ctx.fillText('Plafond 1/k!', col3X, tTop, bx + bw - col3X);
ctx.strokeStyle = '#cbd5e1';
ctx.beginPath();
ctx.moveTo(bx, tTop + 5);
ctx.lineTo(bx + bw, tTop + 5);
ctx.stroke();
const titles = ['k=0 (Capital)', 'k=1 (Int. 1er)', 'k=2 (Int. 2nd)', 'k=3 (Int. 3e)', 'k=4 (Int. 4e)', 'k=5 (Int. 5e)'];
const maxRowK = isInf ? 5 : Math.min(5, n);
for (let k = 0; k <= maxRowK; k++) {
const rowY = tTop + 21 + k * 23;
const gk = gens[k] || 0;
const fk = 1 / fact(k);
ctx.fillStyle = colors[k % colors.length];
ctx.beginPath();
ctx.arc(bx + 4, rowY - 3.5, 3.8, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#1e293b';
ctx.font = '600 10px system-ui, sans-serif';
ctx.fillText(titles[k], bx + 12, rowY, col2X - bx - 16);
ctx.font = '600 10px monospace';
ctx.fillText(gk.toFixed(5) + ' €', col2X, rowY, col3X - col2X - 6);
ctx.fillStyle = '#970E53';
ctx.fillText(`${fk.toFixed(4)} (1/${k}!)`, col3X, rowY, bx + bw - col3X);
}
}
function render() {
const n = N_STEPS[stepIdx];
const isInf = !isFinite(n);
const dpr = window.devicePixelRatio || 1;
const W = canvas.clientWidth || 780;
const isNarrow = W < 620;
const desiredH = isNarrow ? 690 : 390;
if (canvas.style.height !== desiredH + 'px') {
canvas.style.height = desiredH + 'px';
}
const H = desiredH;
if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
canvas.width = Math.round(W * dpr);
canvas.height = Math.round(H * dpr);
}
ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
ctx.clearRect(0, 0, W, H);
if (isNarrow) {
// Stack vertically on narrow screens so nothing is ever cramped or truncated
drawGrowthChart(0, 4, W, 315, n);
drawGenerationPanel(8, 326, W - 16, H - 334, n);
} else {
const leftW = Math.floor(W * 0.52);
drawGrowthChart(0, 0, leftW, H, n);
drawGenerationPanel(leftW + 8, 12, W - leftW - 18, H - 24, n);
}
const g2 = isInf ? 0.5 : (n >= 2 ? (n * (n - 1) / (2 * n * n)) : 0);
const g3 = isInf ? (1 / 6) : (n >= 3 ? (n * (n - 1) * (n - 2) / (6 * n * n * n)) : 0);
if (isInf) {
readout.innerHTML = `<b>Capitalisation continue ($n \\to \\infty$)&nbsp;:</b> l'escalier bleu coïncide désormais avec l'exponentielle continue $\\mathrm{e}^t$, et chaque génération $k$ d'intérêts atteint exactement son plafond factoriel $\\frac{1}{k!}$ ($1$ € pour $k=0$, $1$ € pour $k=1$, $0,50$ € pour $k=2$, $\\frac{1}{6} \\approx 0,1667$ € pour $k=3$, etc.), pour un total égal à $\\mathrm{e} \\approx 2,718282$ €.`;
} else {
readout.innerHTML = `<b>Analyse financière pour $n = ${n.toLocaleString('fr-FR')}$ période${n>1?'s':''}&nbsp;:</b> le capital initial ($k=0$) vaut $1$ €, les intérêts directs ($k=1$) rapportent toujours $n \\times \\frac{1}{n} = 1$ €, les intérêts d'intérêts ($k=2$) rapportent $\\binom{${n}}{2}\\frac{1}{${n}^2} = ${g2.toFixed(4)}$ € (plafond $\\frac{1}{2!} = 0,50$ €), et le $3^{\\text{e}}$ ordre ($k=3$) rapporte $\\binom{${n}}{3}\\frac{1}{${n}^3} = ${g3.toFixed(4)}$ € (plafond $\\frac{1}{3!} \\approx 0,1667$ €).`;
}
if (window.MathJax && window.MathJax.typesetPromise) {
window.MathJax.typesetPromise([readout]).catch(() => {});
}
}
slider.addEventListener('input', () => {
stepIdx = parseInt(slider.value, 10);
updateUI();
render();
});
presetBtns.forEach(btn => {
btn.addEventListener('click', () => {
stepIdx = parseInt(btn.getAttribute('data-idx'), 10);
slider.value = stepIdx;
updateUI();
render();
});
});
window.addEventListener('resize', render);
updateUI();
render();
})();
</script>


## Convergence des deux suites

Démontrons maintenant rigoureusement que la série des factorielles et la suite de Bernoulli convergent chacune de leur côté, puis qu'elles partagent exactement la même limite, en utilisant uniquement des outils d'algèbre élémentaire.

<div id="def">

On pose, pour tout entier $n \ge 1$&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
u_n = \left(1 + \frac{1}{n}\right)^n \qquad \text{et} \qquad S_n = \sum_{k=0}^n \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \cdots + \frac{1}{n!}
$$

</div>

*(Par convention, la factorielle de $0$ vaut $0! = 1$, ce qui correspond au produit vide.)*

</div>

<br>

### La série des factorielles $S\_n = \sum \frac{1}{k!}$

La suite des sommes partielles $(S\_n)$ est manifestement **strictement croissante**, puisqu'on lui ajoute à chaque étape le terme strictement positif $\frac{1}{(n+1)!}$. Pour prouver qu'elle converge, il suffit donc de montrer qu'elle est **majorée**.

Or, dans la factorielle $k! = 1 \times 2 \times 3 \times \cdots \times k$, dès que $k \ge 2$, chacun des $k-1$ facteurs à partir de $2$ est supérieur ou égal à $2$&nbsp;:

<p style="text-align:center;">
$\displaystyle \underbrace{2 \times 3 \times 4 \times \cdots \times k}_{k-1 \text{ facteurs } \ge\, 2}$ $\displaystyle \ge \underbrace{2 \times 2 \times 2 \times \cdots \times 2}_{k-1 \text{ facteurs}} = 2^{k-1}$
</p>

En passant aux inverses, le terme général est écrasé par une progression géométrique de raison $1/2$&nbsp;:

<div id="preuve">

Pour tout $k \ge 1$, on a $\frac{1}{k!} \le \frac{1}{2^{k-1}}$ (avec inégalité stricte dès que $k \ge 3$). En sommant de $k = 1$ à $n$ et en isolant le terme initial $\frac{1}{0!} = 1$&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
S_n = 1 + \sum_{k=1}^n \frac{1}{k!} \le 1 + \sum_{k=1}^n \frac{1}{2^{k-1}} = 1 + \sum_{j=0}^{n-1} \left(\frac{1}{2}\right)^j = 1 + 2\left(1 - \frac{1}{2^n}\right) < 3
$$

</div>

Croissante et majorée par $3$, la suite $(S\_n)$ converge vers une limite finie $L \in \\,]2, 3[$.

</div>

<br>

### La suite de Bernoulli $u\_n = \left(1 + \frac{1}{n}\right)^n$

Lorsque $n$ augmente, une compétition s'installe dans $\left(1 + \frac{1}{n}\right)^n$&nbsp;: la base $1 + \frac{1}{n}$ se rapproche de $1$ (ce qui tend à faire baisser le résultat), tandis que l'exposant $n$ tend vers $+\infty$ (ce qui tend à le faire exploser).

Pour trancher ce duel sans utiliser le logarithme $\ln(1+1/n)$, nous disposons de deux méthodes élémentaires remarquables&nbsp;: l'une révèle directement les factorielles, l'autre n'utilise pas le moindre symbole de sommation.

#### Méthode A : Par le binôme de Newton

Développons $u\_n = \left(1 + \frac{1}{n}\right)^n$ à l'aide de la formule du binôme de Newton&nbsp;:

<p style="text-align:center;">
$\displaystyle u_n = \sum_{k=0}^n \binom{n}{k} \frac{1}{n^k}$ $\displaystyle = 1 + n\left(\frac{1}{n}\right) + \sum_{k=2}^n \frac{n(n-1)(n-2)\cdots(n-k+1)}{k!\,n^k}$
</p>

Idée clé&nbsp;: au lieu de laisser le facteur $n^k$ groupé au dénominateur, **distribuons chacun des $k$ facteurs $n$ sous chacun des $k$ facteurs du numérateur** $n(n-1)\cdots(n-k+1)$&nbsp;:

<div id="grosseformule">

$$
\frac{n(n-1)(n-2)\cdots(n-k+1)}{k!\\,n^k} = \frac{1}{k!} \cdot \frac{n}{n} \cdot \frac{n-1}{n} \cdot \frac{n-2}{n} \cdots \frac{n-(k-1)}{n} = \frac{1}{k!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right)
$$

</div>

On obtient ainsi une écriture lumineuse de $u\_n$&nbsp;:

<div id="theo">

Pour tout entier $n \ge 1$, le développement binomial de la suite de Bernoulli s'écrit&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
u_n = 1 + 1 + \sum_{k=2}^n \frac{1}{k!} \prod_{j=1}^{k-1} \left(1 - \frac{j}{n}\right)
$$

</div>

</div>

<br>

Cette seule formule livre simultanément la **croissance** et la **majoration** de $(u\_n)$&nbsp;:

<div id="preuve">

<ol>
<li><b>Croissance stricte ($u_n < u_{n+1}$)&nbsp;:</b><br>
Comparons terme à terme l'expression de $u_n$ et celle de $u_{n+1} = 1 + 1 + \displaystyle\sum_{k=2}^{n+1} \frac{1}{k!} \prod_{j=1}^{k-1} \left(1 - \frac{j}{n+1}\right)$.<br>
Fixons un rang $k \in \{2, \dots, n\}$ et comparons le coefficient devant $\frac{1}{k!}$ dans $u_n$ et dans $u_{n+1}$ (ces deux produits comportent <b>exactement le même nombre $k-1$ de facteurs</b>)&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.35em 0;">$\displaystyle \Pi_k(n) = \prod_{j=1}^{k-1}\left(1 - \frac{j}{n}\right) \qquad \text{et} \qquad \Pi_k(n+1) = \prod_{j=1}^{k-1}\left(1 - \frac{j}{n+1}\right)$</span>
Pour chaque indice $j \in \{1, \dots, k-1\}$, lorsque $n$ passe à $n+1$, la fraction retranchée diminue ($\frac{j}{n+1} < \frac{j}{n}$), donc <b>chacun des $k-1$ facteurs positifs augmente</b>&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.3em 0;">$\displaystyle 0 < 1 - \frac{j}{n} < 1 - \frac{j}{n+1}$</span>
En remplaçant chacun des $k-1$ facteurs positifs de $\Pi_k(n)$ par un facteur strictement plus grand dans $\Pi_k(n+1)$ (sans changer le nombre de facteurs), le produit augmente strictement&nbsp;: $\Pi_k(n) < \Pi_k(n+1)$.<br>
Ainsi, chacun des termes d'indice $k \in \{2, \dots, n\}$ est plus grand dans $u_{n+1}$ que dans $u_n$, et la somme définissant $u_{n+1}$ possède en plus un dernier terme strictement positif (pour $k = n+1$, égal à $\frac{1}{(n+1)^{n+1}} > 0$). On a donc bien $u_n < u_{n+1}$ pour tout $n \ge 1$.
</li>
<li style="margin-top:0.5em;"><b>Majoration par $S_n$ (et donc par $3$)&nbsp;:</b><br>
Pour tout $j \in \{1, \dots, k-1\}$, on a $0 < 1 - \frac{j}{n} < 1$. Le produit $\displaystyle\prod_{j=1}^{k-1}\left(1 - \frac{j}{n}\right)$ est donc un produit de nombres positifs tous strictement inférieurs à $1$&nbsp;: il est lui-même inférieur à $1$. En majorant chaque parenthèse par $1$, il vient immédiatement $\displaystyle u_n \le 1 + 1 + \sum_{k=2}^n \frac{1}{k!} = S_n < 3$.
</li>
</ol>

La suite $(u\_n)$ étant strictement croissante et majorée par $3$, le théorème de la limite monotone assure qu'elle converge vers une limite finie, que l'on note $\mathrm{e} = \lim\_{n \to +\infty} u\_n$.

</div>

<br>

#### Méthode B : Par l'inégalité de Bernoulli

Peut-on prouver la convergence de $u\_n$ sans même développer de somme binomiale&nbsp;? Oui, grâce à la seule **inégalité de Bernoulli**&nbsp;: pour tout réel $x > -1$ non nul et tout entier $m \ge 2$, on a $\displaystyle (1 + x)^m > 1 + mx$ *(qui se vérifie par une récurrence immédiate, car $(1+mx)(1+x) = 1 + (m+1)x + mx^2 > 1 + (m+1)x$ puisque $mx^2 > 0$)*.

<details style="background-color:#F4F4F4;border-radius:8px;padding:8px 15px;margin-bottom:1em;">
<summary>Démonstration détaillée par l'inégalité de Bernoulli</summary>

<div style="margin-top:0.5em;">

**1. Croissance de $(u\_n)$ par étude du quotient $\frac{u\_{n+1}}{u\_n}$&nbsp;:**

Pour pouvoir regrouper les puissances sous un même exposant $n+1$, écrivons $\displaystyle\left(1 + \frac{1}{n}\right)^n = \frac{\left(1 + \frac{1}{n}\right)^{n+1}}{1 + \frac{1}{n}}$. Le quotient devient $\displaystyle \frac{u\_{n+1}}{u\_n} = \left(1 + \frac{1}{n}\right) \left(\frac{1 + \frac{1}{n+1}}{1 + \frac{1}{n}}\right)^{n+1}$.

Simplifions la fraction interne en réduisant au même dénominateur&nbsp;:

<p style="text-align:center;">
$\displaystyle \frac{1 + \frac{1}{n+1}}{1 + \frac{1}{n}} = \frac{\frac{n+2}{n+1}}{\frac{n+1}{n}}$ $\displaystyle = \frac{n(n+2)}{(n+1)^2} = \frac{n^2 + 2n}{n^2 + 2n + 1}$ $\displaystyle = 1 - \frac{1}{(n+1)^2}$
</p>

Appliquons alors l'inégalité de Bernoulli $(1+x)^m > 1 + mx$ avec $x = -\frac{1}{(n+1)^2} > -1$ et l'exposant $m = n+1 \ge 2$&nbsp;:

<p style="text-align:center;">
$\displaystyle \left(1 - \frac{1}{(n+1)^2}\right)^{n+1} > 1 - (n+1)\frac{1}{(n+1)^2}$ $\displaystyle = 1 - \frac{1}{n+1} = \frac{n}{n+1}$
</p>

En multipliant par le préfacteur $1 + \frac{1}{n} = \frac{n+1}{n} > 0$, les deux fractions se télescopent exactement&nbsp;: $\displaystyle \frac{u\_{n+1}}{u\_n} > \frac{n+1}{n} \times \frac{n}{n+1} = 1$, d'où $u\_{n+1} > u\_n$.

**2. Majoration via la suite jumelle décroissante $v\_n = \left(1 + \frac{1}{n}\right)^{n+1}$&nbsp;:**

Introduisons $v\_n = u\_n\left(1 + \frac{1}{n}\right) = \left(1 + \frac{1}{n}\right)^{n+1}$. Pour tout $n \ge 2$, formons de même le quotient $\frac{v\_{n-1}}{v\_n}$ en mettant l'exposant $n$ en facteur&nbsp;:

<p style="text-align:center;">
$\displaystyle \frac{v_{n-1}}{v_n} = \frac{\left(1 + \frac{1}{n-1}\right)^n}{\left(1 + \frac{1}{n}\right)^{n+1}}$ $\displaystyle = \frac{1}{1 + \frac{1}{n}} \left(\frac{1 + \frac{1}{n-1}}{1 + \frac{1}{n}}\right)^n$
</p>

La fraction interne se simplifie en $\displaystyle \frac{\frac{n}{n-1}}{\frac{n+1}{n}} = \frac{n^2}{n^2 - 1} = 1 + \frac{1}{n^2 - 1}$. Par l'inégalité de Bernoulli avec $x = \frac{1}{n^2-1} > 0$ et $m = n \ge 2$&nbsp;:

<p style="text-align:center;">
$\displaystyle \left(1 + \frac{1}{n^2 - 1}\right)^n > 1 + \frac{n}{n^2 - 1}$ $\displaystyle > 1 + \frac{n}{n^2} = 1 + \frac{1}{n}$
</p>

*(où l'on a utilisé que remplacer le dénominateur $n^2-1$ par un dénominateur plus grand $n^2$ diminue la fraction).* En divisant par $1 + \frac{1}{n}$, il vient $\frac{v\_{n-1}}{v\_n} > 1$, soit $v\_{n-1} > v\_n$.

Ainsi, $(u\_n)$ est croissante, $(v\_n)$ est décroissante, $u\_n < v\_n \le v\_1 = 4$, et leur écart $v\_n - u\_n = \frac{u\_n}{n} < \frac{4}{n}$ tend vers $0$&nbsp;: les suites $(u\_n)$ et $(v\_n)$ sont **adjacentes** et convergent vers la même limite $\mathrm{e}$.
</div>
</details>


### Pourquoi convergent-elles vers la même limite&nbsp;?

Revenons à notre formule binomiale&nbsp;:

<p style="text-align:center;">
$\displaystyle u_n = 1 + 1 + \sum_{k=2}^n \frac{1}{k!} \left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right)$
</p>

Pourquoi ne suffit-il pas de dire&nbsp;: *«&nbsp;quand $n \to +\infty$, chaque parenthèse $\left(1 - \frac{j}{n}\right)$ tend vers $1$, donc $u\_n$ tend vers $\sum\_{k=0}^{+\infty} \frac{1}{k!}$&nbsp;»*&nbsp;?

Parce qu'il y a un piège classique d'analyse&nbsp;: dans cette somme, l'entier $n$ joue **deux rôles simultanés**. Il apparaît à l'intérieur des termes $\left(1 - \frac{j}{n}\right)$, mais il est aussi la **borne supérieure** de la somme $\sum\_{k=2}^n$&nbsp;! Or, le théorème sur la limite d'une somme ne s'applique qu'à un nombre **fixe** de termes (par exemple, la somme des $n$ termes $\frac{1}{n} + \frac{1}{n} + \dots + \frac{1}{n}$ vaut $1$ alors que chaque terme tend vers $0$). Lorsque $k$ est proche de $n$, le produit $\prod\_{j=1}^{k-1}\left(1 - \frac{j}{n}\right)$ vaut d'ailleurs $\frac{n!}{n^n}$, qui est très loin de $1$ puisqu'il tend vers $0$&nbsp;!

On peut contourner cet obstacle par une astuce&nbsp;: **découpler la taille de la somme (notée $m$) et le paramètre $n$**, puis procéder par double inégalité.

<div id="theo">

<b>Théorème (Égalité de Bernoulli-Euler)</b> 

La suite de Bernoulli et la série des inverses de factorielles convergent vers la même limite&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
\lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{+\infty} \frac{1}{k!} = \mathrm{e}
$$

</div>

</div>

<br>

<div id="preuve">

Notons $\mathrm{e} = \lim\_{n \to +\infty} u\_n$ et $L = \lim\_{n \to +\infty} S\_n = \sum\_{k=0}^{+\infty} \frac{1}{k!}$. Montrons successivement que $\mathrm{e} \le L$ puis que $L \le \mathrm{e}$.

<ol>
<li><b>Première inégalité ($\mathrm{e} \le L$)&nbsp;:</b><br>
Nous avons déjà constaté que pour tout $n \ge 2$, chaque facteur $1 - \frac{j}{n}$ appartient à $]0, 1[$, ce qui majore chaque terme de $u_n$ par $\frac{1}{k!}$, soit $u_n \le S_n$ pour tout $n \ge 1$. En passant à la limite quand $n \to +\infty$ dans cette inégalité entre deux suites convergentes, on obtient immédiatement $\mathrm{e} \le L$.
</li>

<li style="margin-top:0.6em;"><b>Seconde inégalité ($L \le \mathrm{e}$) par troncature à un rang $m$ fixé&nbsp;:</b><br>
Fixons un entier $m \ge 2$ arbitraire (par exemple $m = 10$), et considérons un entier $n$ plus grand que $m$ ($n \ge m$).<br>
Dans la somme définissant $u_n$ (qui va de $k = 0$ jusqu'à $n$), tous les termes sont strictement positifs. Si nous jetons tous les termes au-delà du rang $m$ (c'est-à-dire ceux pour $k \in \{m+1, \dots, n\}$), nous diminuons la somme&nbsp;:<br>
<span style="display:block;text-align:center;margin:0.4em 0;">$\displaystyle \forall n \ge m, \quad u_n \ge 1 + 1$ $\displaystyle + \sum_{k=2}^m \frac{1}{k!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right)$</span>
Regardons bien le membre de droite&nbsp;: l'entier $m$ étant <b>maintenu fixe</b>, il s'agit d'une somme comportant un nombre <b>fini et constant</b> de termes ($m+1$ termes), dont chacun est un produit fini de $k-1$ facteurs qui tendent tous vers $1$ lorsque $n \to +\infty$.<br>
Faisons alors tendre $n \to +\infty$ <i>à $m$ fixé</i>&nbsp;: à gauche, $u_n \to \mathrm{e}$&nbsp;; à droite, chaque produit fini tend vers $1$. Par passage à la limite dans une somme finie, on obtient $\displaystyle \mathrm{e} \ge 1 + 1 + \sum_{k=2}^m \frac{1}{k!} \times 1 = S_m$.<br>
Cette inégalité $S_m \le \mathrm{e}$ étant désormais acquise pour tout entier $m \ge 2$, il ne reste plus qu'à faire tendre $m \to +\infty$ pour conclure que $\displaystyle L = \lim_{m \to +\infty} S_m \le \mathrm{e}$.
</li>
</ol>

Par double inégalité ($\mathrm{e} \le L$ et $L \le \mathrm{e}$), on a bien $\mathrm{e} = L$. $\blacksquare$

</div>

<br>


## Irrationalité de $\mathrm{e}$ (Fourier, 1815)

### Encadrement géométrique du reste

Non seulement la série $\sum\_{k=0}^{+\infty} \frac{1}{k!}$ converge vers $\mathrm{e}$, mais la décroissance fulgurante des factorielles permet d'encadrer l'erreur commise en s'arrêtant au rang $n$ et de prouver en quelques lignes que $\mathrm{e}$ ne peut être le quotient de deux entiers.

Factorisons le premier terme négligé $\frac{1}{(n+1)!}$ dans le reste $R\_n = \mathrm{e} - S\_n = \sum\_{k=n+1}^{+\infty} \frac{1}{k!}$&nbsp;:

<p style="text-align:center;">
$\displaystyle \mathrm{e} - S_n = \frac{1}{(n+1)!}\Big(1 + \frac{1}{n+2} + \frac{1}{(n+2)(n+3)}$ $\displaystyle + \frac{1}{(n+2)(n+3)(n+4)} + \cdots\Big)$
</p>

Chacun des dénominateurs $(n+2)$, $(n+3)$, $(n+4)\dots$ étant strictement supérieur à $n+1$, on majore la parenthèse par une série géométrique de raison $\frac{1}{n+1}$&nbsp;:

<p style="text-align:center;">
$\displaystyle \mathrm{e} - S_n < \frac{1}{(n+1)!} \sum_{j=0}^{+\infty} \frac{1}{(n+1)^j}$ $\displaystyle = \frac{1}{(n+1)!} \cdot \frac{1}{1 - \frac{1}{n+1}}$ $\displaystyle = \frac{1}{(n+1)\,n!} \cdot \frac{n+1}{n} = \frac{1}{n \cdot n!}$
</p>

<div id="theo">

Pour tout entier $n \ge 1$, la distance entre $\mathrm{e}$ et la somme partielle $S\_n = \sum\_{k=0}^n \frac{1}{k!}$ vérifie&nbsp;:

<div id="grosseformule" style="margin-top:-0.5em;margin-bottom:-0.5em;">

$$
0 < \mathrm{e} - \sum_{k=0}^n \frac{1}{k!} < \frac{1}{n \cdot n!}
$$

</div>

</div>

<br>

### Preuve par l'absurde et «&nbsp;loupe factorielle&nbsp;»

<div id="theo">
<p style="text-align:center;">
$\mathrm{e}$ est un <b>nombre irrationnel</b> ($\mathrm{e} \notin \mathbb{Q}$).
</p>
</div>

<br>

<div id="preuve">

Supposons par l'absurde que $\mathrm{e}$ soit rationnel&nbsp;: il existerait deux entiers strictement positifs $p$ et $q$ tels que $\mathrm{e} = \frac{p}{q}$ (avec $q \ge 2$ puisque $2 < \mathrm{e} < 3$).

Appliquons l'encadrement ci-dessus au rang particulier $n = q$&nbsp;: $\displaystyle 0 < \frac{p}{q} - \sum\_{k=0}^q \frac{1}{k!} < \frac{1}{q \cdot q!}$.

Multiplions toute cette double inégalité par $q! > 0$ pour chasser tous les dénominateurs d'un seul coup&nbsp;:

<p style="text-align:center;">
$\displaystyle 0 < \underbrace{q!\,\frac{p}{q}}_{=\,(q-1)!\,p\,\in\,\mathbb{Z}} - \underbrace{\sum_{k=0}^q \frac{q!}{k!}}_{\in\,\mathbb{Z}}$ $\displaystyle < \frac{1}{q} \le \frac{1}{2} < 1$
</p>

Pourquoi la somme $\sum\_{k=0}^q \frac{q!}{k!}$ est-elle un entier&nbsp;? Parce que pour tout $k \le q$, la factorielle $k!$ divise exactement $q!$ ($\frac{q!}{k!} = (k+1)(k+2)\cdots q \in \mathbb{N}$). Le membre central $N = (q-1)!\\,p - \sum\_{k=0}^q \frac{q!}{k!}$ serait donc un **nombre entier strictement compris entre $0$ et $1$**, ce qui est impossible&nbsp;! $\blacksquare$

</div>

<div class="svg-container">
<svg viewBox="0 0 760 195" style="max-width:760px;width:100%;height:auto;background:#ffffff;border:1px solid #cbd5e1;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.04);font-family:system-ui,-apple-system,sans-serif;">
<text x="380" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="#004D80">La « loupe factorielle » de Joseph Fourier : multiplier par q! fait tomber q!·e dans le désert entre deux entiers</text>
<!-- Desert zone between M and M+1 (drawn behind the axis, with text in a clean pill ABOVE the axis) -->
<rect x="144" y="96" width="472" height="24" fill="rgba(220, 38, 38, 0.08)" rx="4"/>
<!-- Allowed window [M, M + 1/q] -->
<rect x="140" y="94" width="135" height="28" fill="rgba(0, 108, 101, 0.20)" stroke="#006C65" stroke-width="1.5" stroke-dasharray="4,2" rx="4"/>
<!-- Number line after multiplying by q! -->
<line x1="50" y1="108" x2="710" y2="108" stroke="#334155" stroke-width="2.5"/>
<!-- Red badge above the axis in the desert zone -->
<rect x="302" y="66" width="296" height="24" rx="5" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.2"/>
<text x="450" y="82" text-anchor="middle" font-size="10.8" font-weight="700" fill="#dc2626">AUCUN ENTIER DANS L'INTERVALLE ]M , M + 1[</text>
<!-- Left integer: q! S_q -->
<line x1="140" y1="92" x2="140" y2="124" stroke="#004D80" stroke-width="3"/>
<circle cx="140" cy="108" r="6" fill="#004D80"/>
<text x="125" y="82" text-anchor="middle" font-size="12.5" font-weight="700" fill="#004D80">Entier M = q! · S<tspan dy="3" font-size="9.5">q</tspan><tspan dy="-3"> ∈ ℤ</tspan></text>
<text x="140" y="145" text-anchor="middle" font-size="11" fill="#475569">(somme d'entiers q! / k!)</text>
<!-- Right integer: M + 1 -->
<line x1="620" y1="92" x2="620" y2="124" stroke="#004D80" stroke-width="3"/>
<circle cx="620" cy="108" r="6" fill="#004D80"/>
<text x="645" y="82" text-anchor="middle" font-size="12.5" font-weight="700" fill="#004D80">Entier M + 1 ∈ ℤ</text>
<!-- Right bound of [M, M + 1/q] -->
<line x1="275" y1="90" x2="275" y2="126" stroke="#006C65" stroke-width="2" stroke-dasharray="3,3"/>
<text x="275" y="145" text-anchor="middle" font-size="11" font-weight="700" fill="#006C65">M + 1/q ≤ M + 1/2</text>
<!-- Point q! e -->
<circle cx="215" cy="108" r="6.5" fill="#970E53" stroke="#ffffff" stroke-width="2"/>
<text x="215" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#970E53">q! · e = M + q! · R<tspan dy="3" font-size="9.5">q</tspan></text>
<path d="M 215 61 L 215 97" stroke="#970E53" stroke-width="2"/>
<text x="380" y="176" text-anchor="middle" font-size="11.5" fill="#1e293b">Si e = p/q était rationnel, alors q!·e = (q−1)!·p serait un ENTIER tombant dans ]M, M + 1/q[ ⊂ ]M, M+1[ : contradiction !</text>
</svg>
</div>


<hr style="margin:2em 0;border:none;border-top:1px solid #cbd5e1;">

<div style="background:#f8fafc;border:1px solid #cbd5e1;border-left:6px solid #006C65;border-radius:10px;padding:14px 18px;font-size:0.95em;">
<b>Suite de l'exploration&nbsp;: d'où viennent géométriquement les factorielles $\frac{1}{k!}$&nbsp;?</b><br>
La preuve algébrique ci-dessus nous a convaincus <i>que</i> $\left(1+\frac{1}{n}\right)^n$ et $\sum \frac{1}{k!}$ convergent vers la même limite, mais que représente géométriquement la fraction $\frac{1}{k!}$ dans un espace de dimension $k$&nbsp;?
<ul style="margin:0.5em 0 0 0;">
<li>👉 <b><a href="../../geometrie/simplexes/">Simplexes et flèche du temps</a>&nbsp;:</b> découvrez pourquoi $\frac{1}{k!}$ est le volume du simplexe canonique $\Delta_k$, comment l'hypercube dilaté se découpe en 2D et en 3D, et pourquoi la causalité impose ce même facteur dans la série de Dyson en physique quantique.</li>
<li>👉 <b><a href="../../proba/simplexes_proba/">Simplexes et probabilités</a>&nbsp;:</b> résolvez sans calcul trois problèmes célèbres de probabilités (rupture de monotonie, seuil de Gnedenko et dérangements de Montmort) grâce au volume du simplexe.</li>
</ul>
</div>
