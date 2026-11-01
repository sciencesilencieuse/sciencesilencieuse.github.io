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
    -webkit-overflow-scrolling: touch;
}
.tableau-large table
{
    width: auto;
    margin: 0 auto;
}
</style>


# Le nombre $\mathrm{e}$
<p style="font-size:1.15em;color:#475569;margin-top:-0.6em;margin-bottom:1.2em;"><i>Des intérêts composés de Bernoulli à la série des factorielles et à l'irrationalité de Fourier</i></p>

Pourquoi le nombre $\mathrm{e} \approx 2,718\\,281\\,8\dots$, découvert par Jacob Bernoulli en 1683 en cherchant le plafond d'un placement à intérêts composés, $\displaystyle \mathrm{e} = \lim\_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n$, est-il exactement égal à la somme infinie des inverses des factorielles&nbsp;?

<div id="grosseformule">

$$
\mathrm{e} = \sum_{k=0}^{+\infty} \frac{1}{k!} = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \cdots
$$

</div>

On pourrait simplement invoquer le développement en série de Taylor de la fonction $\exp$ en $x = 1$. Mais ça ne serait pas super satisfaisant... Nous allons plutôt suivre le fil de l'histoire&nbsp;: **comprendre** d'où sortent les factorielles en triant l'argent par «&nbsp;générations&nbsp;» d'intérêts, puis le **démontrer** avec des outils élémentaires, et enfin en tirer une pépite&nbsp;: l'**irrationalité** de $\mathrm{e}$.


## L'histoire des intérêts composés

### Le problème de l'usure

Contrairement à $\pi$, né de la géométrie grecque dès l'Antiquité, le nombre $\mathrm{e}$ est issu d'une question financière très concrète, posée à Bâle en 1683 par **Jacob Bernoulli** dans son mémoire *Quaestiones nonnullae de usuris* («&nbsp;Quelques questions sur les intérêts&nbsp;»).

Imaginons un banquier exceptionnellement généreux qui propose un taux d'intérêt de **$100\\,\\%$ par an**, et déposons chez lui **$1$ écu** au $1^{\text{er}}$ janvier&nbsp;:

<ul>
<li><b>Capitalisation annuelle ($n = 1$)&nbsp;:</b> la banque verse les intérêts ($100\,\%$ de $1$ écu) à la fin de l'année. Au $31$ décembre, on a $u_1 = 1 + 1 = \mathbf{2}$ écus.</li>
<li><b>Capitalisation semestrielle ($n = 2$)&nbsp;:</b> chaque semestre rapporte la moitié du taux annuel, soit $50\,\%$. Au bout de six mois, on a $1 + \frac{1}{2} = 1,5$ écu. Mais au second semestre, <i>les intérêts du premier semestre produisent eux-mêmes des intérêts</i>&nbsp;: c'est tout le capital de $1,5$ écu qui est multiplié par $1 + \frac{1}{2}$, d'où $u_2 = \left(1 + \frac{1}{2}\right)^2 = \mathbf{2,25}$ écus.</li>
</ul>

Et ainsi de suite&nbsp;: en découpant l'année en $n$ périodes, chacune rapportant $\frac{1}{n}$ du capital du moment, on obtient au $31$ décembre $u\_n = \left(1 + \frac{1}{n}\right)^n$ écus.

<div class="tableau-large">

| Capitalisation | $n$ | Capital au $31$ décembre |
| :--- | ---: | ---: |
| annuelle | $1$ | $2$ |
| semestrielle | $2$ | $2{,}25$ |
| trimestrielle | $4$ | $\approx 2{,}4414$ |
| mensuelle | $12$ | $\approx 2{,}6130$ |
| quotidienne | $365$ | $\approx 2{,}714\\,567$ |
| à chaque seconde | $31\\,536\\,000$ | $\approx 2{,}718\\,281\\,78$ |

</div>

<div class="svg-container">
<svg viewBox="0 0 470 270" role="img" aria-label="Capital au fil de l'année pour une capitalisation annuelle, semestrielle, trimestrielle et continue" style="width:100%;max-width:470px;height:auto;">
<defs><marker id="fe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#94a3b8" stroke-width="1.6"/></marker></defs>
<line x1="55.0" y1="224.7" x2="385.0" y2="224.7" stroke="#eef2f6" stroke-width="1" />
<line x1="55.0" y1="122.2" x2="385.0" y2="122.2" stroke="#eef2f6" stroke-width="1" />
<line x1="55.0" y1="48.5" x2="385.0" y2="48.5" stroke="#dbabc3" stroke-width="1" stroke-dasharray="3 4"/>
<polyline points="55.0,224.7 385.0,224.7 385.0,122.2" fill="none" stroke="#99b8cc" stroke-width="2" stroke-linejoin="round"><title>n = 1 : 2,0000 écus au 31 décembre</title></polyline>
<polyline points="55.0,224.7 220.0,224.7 220.0,173.5 385.0,173.5 385.0,96.5" fill="none" stroke="#598bac" stroke-width="2" stroke-linejoin="round"><title>n = 2 : 2,2500 écus au 31 décembre</title></polyline>
<polyline points="55.0,224.7 137.5,224.7 137.5,199.1 220.0,199.1 220.0,167.1 302.5,167.1 302.5,127.0 385.0,127.0 385.0,76.9" fill="none" stroke="#004D80" stroke-width="2" stroke-linejoin="round"><title>n = 4 : 2,4414 écus au 31 décembre</title></polyline>
<polyline points="55.0,224.7 56.6,224.2 58.3,223.7 60.0,223.2 61.6,222.7 63.2,222.1 64.9,221.6 66.5,221.1 68.2,220.6 69.8,220.0 71.5,219.5 73.2,218.9 74.8,218.4 76.5,217.9 78.1,217.3 79.8,216.8 81.4,216.2 83.0,215.6 84.7,215.1 86.3,214.5 88.0,214.0 89.7,213.4 91.3,212.8 93.0,212.2 94.6,211.7 96.2,211.1 97.9,210.5 99.6,209.9 101.2,209.3 102.8,208.7 104.5,208.1 106.2,207.5 107.8,206.9 109.5,206.3 111.1,205.7 112.8,205.1 114.4,204.5 116.0,203.9 117.7,203.3 119.4,202.7 121.0,202.0 122.6,201.4 124.3,200.8 126.0,200.1 127.6,199.5 129.2,198.9 130.9,198.2 132.6,197.6 134.2,196.9 135.8,196.3 137.5,195.6 139.2,195.0 140.8,194.3 142.4,193.6 144.1,193.0 145.8,192.3 147.4,191.6 149.1,190.9 150.7,190.2 152.3,189.6 154.0,188.9 155.6,188.2 157.3,187.5 158.9,186.8 160.6,186.1 162.2,185.4 163.9,184.6 165.6,183.9 167.2,183.2 168.8,182.5 170.5,181.8 172.1,181.0 173.8,180.3 175.4,179.6 177.1,178.8 178.8,178.1 180.4,177.3 182.1,176.6 183.7,175.8 185.3,175.1 187.0,174.3 188.7,173.5 190.3,172.8 191.9,172.0 193.6,171.2 195.2,170.4 196.9,169.6 198.6,168.8 200.2,168.1 201.8,167.3 203.5,166.5 205.2,165.6 206.8,164.8 208.5,164.0 210.1,163.2 211.8,162.4 213.4,161.6 215.0,160.7 216.7,159.9 218.3,159.1 220.0,158.2 221.7,157.4 223.3,156.5 225.0,155.7 226.6,154.8 228.2,153.9 229.9,153.1 231.6,152.2 233.2,151.3 234.9,150.4 236.5,149.5 238.2,148.6 239.8,147.8 241.4,146.9 243.1,145.9 244.7,145.0 246.4,144.1 248.0,143.2 249.7,142.3 251.3,141.4 253.0,140.4 254.7,139.5 256.3,138.5 257.9,137.6 259.6,136.6 261.2,135.7 262.9,134.7 264.6,133.8 266.2,132.8 267.9,131.8 269.5,130.8 271.1,129.9 272.8,128.9 274.5,127.9 276.1,126.9 277.8,125.9 279.4,124.9 281.1,123.8 282.7,122.8 284.4,121.8 286.0,120.8 287.6,119.7 289.3,118.7 290.9,117.6 292.6,116.6 294.2,115.5 295.9,114.5 297.5,113.4 299.2,112.3 300.9,111.3 302.5,110.2 304.1,109.1 305.8,108.0 307.5,106.9 309.1,105.8 310.8,104.7 312.4,103.6 314.1,102.4 315.7,101.3 317.4,100.2 319.0,99.0 320.7,97.9 322.3,96.8 323.9,95.6 325.6,94.4 327.2,93.3 328.9,92.1 330.6,90.9 332.2,89.7 333.8,88.5 335.5,87.3 337.1,86.1 338.8,84.9 340.4,83.7 342.1,82.5 343.8,81.3 345.4,80.0 347.1,78.8 348.7,77.6 350.4,76.3 352.0,75.0 353.7,73.8 355.3,72.5 356.9,71.2 358.6,69.9 360.2,68.7 361.9,67.4 363.6,66.1 365.2,64.7 366.8,63.4 368.5,62.1 370.1,60.8 371.8,59.4 373.4,58.1 375.1,56.7 376.8,55.4 378.4,54.0 380.1,52.7 381.7,51.3 383.4,49.9 385.0,48.5" fill="none" stroke="#970E53" stroke-width="2"><title>Capitalisation continue : e ≈ 2,7183 écus</title></polyline>
<circle cx="385.0" cy="122.2" r="3" fill="#99b8cc"/>
<text x="395.0" y="126.2" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 1 : 2,00</text>
<circle cx="385.0" cy="96.5" r="3" fill="#598bac"/>
<text x="395.0" y="100.5" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 2 : 2,25</text>
<circle cx="385.0" cy="76.9" r="3" fill="#004D80"/>
<text x="395.0" y="80.9" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 4 : 2,44</text>
<circle cx="385.0" cy="48.5" r="3" fill="#970E53"/>
<text x="395.0" y="52.5" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >continu : 2,72</text>
<line x1="55.0" y1="235.0" x2="399.0" y2="235.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fe)"/>
<line x1="55.0" y1="235.0" x2="55.0" y2="29.0" stroke="#94a3b8" stroke-width="1" marker-end="url(#fe)"/>
<line x1="55.0" y1="235.0" x2="55.0" y2="239.0" stroke="#94a3b8" stroke-width="1" />
<text x="55.0" y="253.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1ᵉʳ janv.</text>
<line x1="220.0" y1="235.0" x2="220.0" y2="239.0" stroke="#94a3b8" stroke-width="1" />
<text x="220.0" y="253.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1ᵉʳ juil.</text>
<line x1="385.0" y1="235.0" x2="385.0" y2="239.0" stroke="#94a3b8" stroke-width="1" />
<text x="385.0" y="253.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >31 déc.</text>
<text x="47.0" y="228.7" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<text x="47.0" y="126.2" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<text x="47.0" y="52.5" text-anchor="end" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >e</text>
<text x="61.0" y="37.0" text-anchor="start" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >capital (écus)</text>
</svg>
</div>
<p class="legende">Le capital au fil de l'année. Plus on capitalise souvent, plus les marches sont nombreuses et petites&nbsp;: l'escalier se rapproche d'une courbe lisse (l'exponentielle $t \mapsto \mathrm{e}^t$) et le capital final plafonne vers $\mathrm{e}$.</p>

### Pourquoi ça plafonne&nbsp;?

On pourrait croire qu'en capitalisant un million de fois par seconde, on finirait par devenir infiniment riche. Bernoulli découvre qu'il n'en est rien&nbsp;: le capital final plafonne sous un mur situé entre $2,5$ et $3$ écus, qu'Euler notera $\mathrm{e}$ quelques décennies plus tard.

**L'idée&nbsp;: trier l'argent par «&nbsp;générations&nbsp;».** Au $31$ décembre, chaque centime de notre compte a une histoire&nbsp;: soit il était là dès le départ, soit c'est un intérêt, soit un intérêt d'intérêt, etc. Classons-les selon ce **degré de filiation $k$**&nbsp;:

<ol>
<li><b>Génération $k = 0$, le capital initial&nbsp;:</b> l'écu déposé au $1^{\text{er}}$ janvier. Il vaut toujours $\mathbf{1}$.</li>
<li><b>Génération $k = 1$, les intérêts directs&nbsp;:</b> ceux que l'écu initial produit à chacune des $n$ périodes. Chaque période en verse $\frac{1}{n}$, soit au total $n \times \frac{1}{n} = \mathbf{1}$, quelle que soit la fréquence de capitalisation&nbsp;!</li>
<li><b>Génération $k = 2$, les intérêts sur les intérêts&nbsp;:</b> un intérêt de $\frac{1}{n}$ versé à une période $i_1$ produit à son tour, à toute période <i>ultérieure</i> $i_2 &gt; i_1$, un intérêt de $\frac{1}{n} \times \frac{1}{n} = \frac{1}{n^2}$. Il y a $\binom{n}{2} = \frac{n(n-1)}{2}$ couples de périodes $i_1 &lt; i_2$, d'où une contribution totale $\displaystyle \binom{n}{2}\frac{1}{n^2} = \frac{1}{2!}\left(1 - \frac{1}{n}\right)$, qui tend vers $\mathbf{\frac{1}{2!}}$.</li>
<li><b>Génération $k$&nbsp;:</b> un centime de génération $k$ est né d'une chaîne de $k$ versements successifs, aux périodes $i_1 &lt; i_2 &lt; \dots &lt; i_k$. Il y a $\binom{n}{k}$ telles chaînes, chacune rapportant $\frac{1}{n^k}$, et leur total, $\binom{n}{k}\frac{1}{n^k}$, reste toujours inférieur à $\mathbf{\frac{1}{k!}}$ (dont il se rapproche quand $n$ grandit).</li>
</ol>

<div class="svg-container">
<svg viewBox="0 0 580 275" role="img" aria-label="Capital au 31 décembre décomposé par génération d'intérêts, pour n = 1, 2, 4, 12 et à la limite" style="width:100%;max-width:580px;height:auto;">
<text x="83.0" y="70.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 1</text>
<rect x="95.0" y="52" width="148.0" height="26" rx="2" fill="#e0eaf0"><title>n = 1, k = 0 : 1,0000</title></rect>
<rect x="245.0" y="52" width="148.0" height="26" rx="2" fill="#adc6d6"><title>n = 1, k = 1 : 1,0000</title></rect>
<text x="403.0" y="70.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >2,000</text>
<text x="83.0" y="110.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 2</text>
<rect x="95.0" y="92" width="148.0" height="26" rx="2" fill="#e0eaf0"><title>n = 2, k = 0 : 1,0000</title></rect>
<rect x="245.0" y="92" width="148.0" height="26" rx="2" fill="#adc6d6"><title>n = 2, k = 1 : 1,0000</title></rect>
<rect x="395.0" y="92" width="35.5" height="26" rx="2" fill="#739db9"><title>n = 2, k = 2 : 0,2500</title></rect>
<text x="440.5" y="110.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >2,250</text>
<text x="83.0" y="150.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 4</text>
<rect x="95.0" y="132" width="148.0" height="26" rx="2" fill="#e0eaf0"><title>n = 4, k = 0 : 1,0000</title></rect>
<rect x="245.0" y="132" width="148.0" height="26" rx="2" fill="#adc6d6"><title>n = 4, k = 1 : 1,0000</title></rect>
<rect x="395.0" y="132" width="54.2" height="26" rx="2" fill="#739db9"><title>n = 4, k = 2 : 0,3750</title></rect>
<text x="423.1" y="150.0" text-anchor="middle" font-size="11.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >0,375</text>
<rect x="451.2" y="132" width="7.4" height="26" rx="2" fill="#38749c"><title>n = 4, k = 3 : 0,0625</title></rect>
<rect x="460.6" y="132" width="0.8" height="26" rx="2" fill="#004d80"><title>n = 4, k ≥ 4 : 0,0039</title></rect>
<text x="469.2" y="150.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >2,441</text>
<text x="83.0" y="190.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >n = 12</text>
<rect x="95.0" y="172" width="148.0" height="26" rx="2" fill="#e0eaf0"><title>n = 12, k = 0 : 1,0000</title></rect>
<rect x="245.0" y="172" width="148.0" height="26" rx="2" fill="#adc6d6"><title>n = 12, k = 1 : 1,0000</title></rect>
<rect x="395.0" y="172" width="66.8" height="26" rx="2" fill="#739db9"><title>n = 12, k = 2 : 0,4583</title></rect>
<text x="429.4" y="190.0" text-anchor="middle" font-size="11.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >0,458</text>
<rect x="463.8" y="172" width="17.1" height="26" rx="2" fill="#38749c"><title>n = 12, k = 3 : 0,1273</title></rect>
<rect x="482.8" y="172" width="2.1" height="26" rx="2" fill="#004d80"><title>n = 12, k ≥ 4 : 0,0274</title></rect>
<text x="495.0" y="190.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >2,613</text>
<text x="83.0" y="230.0" text-anchor="end" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >n → ∞</text>
<rect x="95.0" y="212" width="148.0" height="26" rx="2" fill="#e0eaf0"><title>limite, k = 0 : 1,0000</title></rect>
<rect x="245.0" y="212" width="148.0" height="26" rx="2" fill="#adc6d6"><title>limite, k = 1 : 1,0000</title></rect>
<rect x="395.0" y="212" width="73.0" height="26" rx="2" fill="#739db9"><title>limite, k = 2 : 0,5000</title></rect>
<text x="432.5" y="230.0" text-anchor="middle" font-size="11.5" fill="#fff" font-family="Georgia,'Times New Roman',serif" >0,500</text>
<rect x="470.0" y="212" width="23.0" height="26" rx="2" fill="#38749c"><title>limite, k = 3 : 0,1667</title></rect>
<rect x="495.0" y="212" width="5.7" height="26" rx="2" fill="#004d80"><title>limite, k ≥ 4 : 0,0516</title></rect>
<text x="510.7" y="230.0" text-anchor="start" font-size="13" fill="#970E53" font-family="Georgia,'Times New Roman',serif" >e ≈ 2,718</text>
<line x1="95.0" y1="46.0" x2="95.0" y2="246.0" stroke="#e2e8f0" stroke-width="1" />
<text x="95.0" y="260.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >0</text>
<line x1="245.0" y1="46.0" x2="245.0" y2="246.0" stroke="#e2e8f0" stroke-width="1" />
<text x="245.0" y="260.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="395.0" y1="46.0" x2="395.0" y2="246.0" stroke="#e2e8f0" stroke-width="1" />
<text x="395.0" y="260.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<rect x="95" y="14" width="14" height="14" rx="3" fill="#e0eaf0"/>
<text x="115.0" y="26.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 0</text>
<rect x="187" y="14" width="14" height="14" rx="3" fill="#adc6d6"/>
<text x="207.0" y="26.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 1</text>
<rect x="279" y="14" width="14" height="14" rx="3" fill="#739db9"/>
<text x="299.0" y="26.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 2</text>
<rect x="371" y="14" width="14" height="14" rx="3" fill="#38749c"/>
<text x="391.0" y="26.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k = 3</text>
<rect x="463" y="14" width="14" height="14" rx="3" fill="#004d80"/>
<text x="483.0" y="26.0" text-anchor="start" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" >k ≥ 4</text>
</svg>
</div>
<p class="legende">Le capital au $31$ décembre, découpé par générations d'intérêts. Les générations $0$ et $1$ valent toujours $1$&nbsp;; les suivantes grossissent avec $n$ mais restent plafonnées par $\frac{1}{k!}$ (la génération $2$ tend vers $0,5$).</p>

Chaque génération étant plafonnée, le capital ne peut pas dépasser $1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \cdots$&nbsp;: **voilà le mur de Bernoulli, et voilà d'où sortent les factorielles.** Pourquoi exactement $\frac{1}{k!}$&nbsp;? Parce que choisir $k$ périodes rangées dans l'ordre chronologique revient à choisir un point d'un simplexe, dont le volume vaut $\frac{1}{k!}$&nbsp;: c'est l'objet de la page [Simplexes et flèche du temps](../../geometrie/simplexes/).

<div id="preuve">

**Remarque.** Si le taux annuel est $r$ au lieu de $100\\,\\% = 1$, chaque période rapporte $\frac{r}{n}$ et la $k$-ième génération d'intérêts tend vers $\frac{r^k}{k!}$, ce qui donne $\displaystyle \lim\_{n \to +\infty}\left(1 + \frac{r}{n}\right)^n = \sum\_{k=0}^{+\infty} \frac{r^k}{k!} = \mathrm{e}^r$.

</div>

<br>


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

En passant aux inverses, le terme général est écrasé par une progression géométrique de raison $\frac{1}{2}$&nbsp;:

<div class="svg-container">
<svg viewBox="0 0 440 220" role="img" aria-label="Comparaison des termes 1/k! et 1/2 puissance k-1" style="width:100%;max-width:440px;height:auto;">
<rect x="50" y="35.0" width="26" height="140.0" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^0 = 1,0000</title></rect>
<rect x="50" y="35.0" width="26" height="140.0" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/1! = 1,0000</title></rect>
<text x="63.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1</text>
<rect x="102" y="105.0" width="26" height="70.0" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^1 = 0,5000</title></rect>
<rect x="102" y="105.0" width="26" height="70.0" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/2! = 0,5000</title></rect>
<text x="115.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >2</text>
<rect x="154" y="140.0" width="26" height="35.0" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^2 = 0,2500</title></rect>
<rect x="154" y="151.7" width="26" height="23.3" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/3! = 0,1667</title></rect>
<text x="167.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >3</text>
<rect x="206" y="157.5" width="26" height="17.5" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^3 = 0,1250</title></rect>
<rect x="206" y="169.2" width="26" height="5.8" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/4! = 0,0417</title></rect>
<text x="219.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >4</text>
<rect x="258" y="166.2" width="26" height="8.8" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^4 = 0,0625</title></rect>
<rect x="258" y="173.8" width="26" height="1.2" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/5! = 0,0083</title></rect>
<text x="271.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >5</text>
<rect x="310" y="170.6" width="26" height="4.4" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^5 = 0,0312</title></rect>
<rect x="310" y="174.8" width="26" height="0.2" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/6! = 0,0014</title></rect>
<text x="323.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >6</text>
<rect x="362" y="172.8" width="26" height="2.2" rx="2" fill="none" stroke="#004D80" stroke-width="1.2" stroke-dasharray="3 2"><title>1/2^6 = 0,0156</title></rect>
<rect x="362" y="175.0" width="26" height="0.0" rx="2" fill="#970E53" fill-opacity="0.75"><title>1/7! = 0,0002</title></rect>
<text x="375.0" y="193.0" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >7</text>
<line x1="42.0" y1="175.0" x2="404.0" y2="175.0" stroke="#94a3b8" stroke-width="1" />
<text x="408.0" y="193.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >k</text>
<rect x="212" y="40" width="14" height="14" rx="2" fill="#970E53" fill-opacity="0.75"/>
<text x="232.0" y="52.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1/k!</text>
<rect x="212" y="66" width="14" height="14" rx="2" fill="none" stroke="#004D80" stroke-dasharray="3 2"/>
<text x="232.0" y="78.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >1/2<tspan dy='-6' font-size='10'>k−1</tspan></text>
</svg>
</div>
<p class="legende">Les termes $\frac{1}{k!}$ (en magenta) décroissent bien plus vite que ceux de la suite géométrique $\frac{1}{2^{k-1}}$ (en pointillés), dont la somme vaut $2$.</p>

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

**Même limite, mais pas même vitesse.** La série $S\_n$ atteint $\mathrm{e}$ à une vitesse fulgurante&nbsp;: nous verrons plus bas que $0 < \mathrm{e} - S\_n < \frac{1}{n \cdot n!}$, soit déjà moins de $3 \times 10^{-8}$ pour $n = 10$. La suite de Bernoulli, elle, s'en approche paresseusement&nbsp;: l'écart $\mathrm{e} - u\_n$ est de l'ordre de $\frac{\mathrm{e}}{2n}$ (plus précisément, $\mathrm{e} - u\_n \sim \frac{\mathrm{e}}{2n}$ quand $n \to +\infty$), soit encore $0,12$ pour $n = 10$. Quant à la suite jumelle $v\_n = \left(1 + \frac{1}{n}\right)^{n+1}$ de la méthode B, elle descend vers $\mathrm{e}$ par au-dessus.

<div class="svg-container">
<svg viewBox="0 0 480 280" role="img" aria-label="Les suites u_n et v_n encadrent e et s'en approchent lentement ; la série S_n l'atteint très vite" style="width:100%;max-width:480px;height:auto;">
<line x1="50.0" y1="161.9" x2="410.0" y2="161.9" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
<text x="418.0" y="165.9" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >e</text>
<polyline points="50.0,230.5 82.7,206.6 115.5,195.1 148.2,188.3 180.9,183.8 213.6,180.7 246.4,178.3 279.1,176.4 311.8,175.0 344.5,173.8 377.3,172.8 410.0,171.9" fill="none" stroke="#004D80" stroke-width="2" />
<circle cx="50.0" cy="230.5" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u1 = 2,00000</title></circle>
<circle cx="82.7" cy="206.6" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u2 = 2,25000</title></circle>
<circle cx="115.5" cy="195.1" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u3 = 2,37037</title></circle>
<circle cx="148.2" cy="188.3" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u4 = 2,44141</title></circle>
<circle cx="180.9" cy="183.8" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u5 = 2,48832</title></circle>
<circle cx="213.6" cy="180.7" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u6 = 2,52163</title></circle>
<circle cx="246.4" cy="178.3" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u7 = 2,54650</title></circle>
<circle cx="279.1" cy="176.4" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u8 = 2,56578</title></circle>
<circle cx="311.8" cy="175.0" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u9 = 2,58117</title></circle>
<circle cx="344.5" cy="173.8" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u10 = 2,59374</title></circle>
<circle cx="377.3" cy="172.8" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u11 = 2,60420</title></circle>
<circle cx="410.0" cy="171.9" r="3.2" fill="#004D80" stroke="#fff" stroke-width="1"><title>u12 = 2,61304</title></circle>
<polyline points="50.0,39.5 82.7,99.2 115.5,119.7 148.2,130.1 180.9,136.3 213.6,140.5 246.4,143.6 279.1,145.8 311.8,147.6 344.5,149.0 377.3,150.2 410.0,151.2" fill="none" stroke="#739db9" stroke-width="2" stroke-dasharray="5 3"/>
<circle cx="50.0" cy="39.5" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v1 = 4,00000</title></circle>
<circle cx="82.7" cy="99.2" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v2 = 3,37500</title></circle>
<circle cx="115.5" cy="119.7" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v3 = 3,16049</title></circle>
<circle cx="148.2" cy="130.1" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v4 = 3,05176</title></circle>
<circle cx="180.9" cy="136.3" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v5 = 2,98598</title></circle>
<circle cx="213.6" cy="140.5" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v6 = 2,94190</title></circle>
<circle cx="246.4" cy="143.6" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v7 = 2,91029</title></circle>
<circle cx="279.1" cy="145.8" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v8 = 2,88651</title></circle>
<circle cx="311.8" cy="147.6" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v9 = 2,86797</title></circle>
<circle cx="344.5" cy="149.0" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v10 = 2,85312</title></circle>
<circle cx="377.3" cy="150.2" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v11 = 2,84094</title></circle>
<circle cx="410.0" cy="151.2" r="3.2" fill="#739db9" stroke="#fff" stroke-width="1"><title>v12 = 2,83079</title></circle>
<polyline points="50.0,230.5 82.7,182.7 115.5,166.8 148.2,162.8 180.9,162.0 213.6,161.9 246.4,161.9 279.1,161.9 311.8,161.9 344.5,161.9 377.3,161.9 410.0,161.9" fill="none" stroke="#970E53" stroke-width="2" />
<circle cx="50.0" cy="230.5" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S1 = 2,00000</title></circle>
<circle cx="82.7" cy="182.7" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S2 = 2,50000</title></circle>
<circle cx="115.5" cy="166.8" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S3 = 2,66667</title></circle>
<circle cx="148.2" cy="162.8" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S4 = 2,70833</title></circle>
<circle cx="180.9" cy="162.0" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S5 = 2,71667</title></circle>
<circle cx="213.6" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S6 = 2,71806</title></circle>
<circle cx="246.4" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S7 = 2,71825</title></circle>
<circle cx="279.1" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S8 = 2,71828</title></circle>
<circle cx="311.8" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S9 = 2,71828</title></circle>
<circle cx="344.5" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S10 = 2,71828</title></circle>
<circle cx="377.3" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S11 = 2,71828</title></circle>
<circle cx="410.0" cy="161.9" r="3.2" fill="#970E53" stroke="#fff" stroke-width="1"><title>S12 = 2,71828</title></circle>
<text x="92.7" y="95.2" text-anchor="start" font-size="13" fill="#407aa0" font-family="Georgia,'Times New Roman',serif" font-style="italic" >v<tspan dy='3' font-size='10'>n</tspan><tspan dy='-3'></tspan> = (1 + 1/n)<tspan dy='-6' font-size='10'>n+1</tspan></text>
<text x="121.5" y="217.1" text-anchor="start" font-size="13" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >u<tspan dy='3' font-size='10'>n</tspan><tspan dy='-3'></tspan> = (1 + 1/n)<tspan dy='-6' font-size='10'>n</tspan></text>
<text x="74.7" y="180.7" text-anchor="end" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >S<tspan dy='3' font-size='10'>n</tspan><tspan dy='-3'></tspan></text>
<line x1="40.0" y1="240.0" x2="420.0" y2="240.0" stroke="#94a3b8" stroke-width="1" />
<line x1="50.0" y1="240.0" x2="50.0" y2="244.0" stroke="#94a3b8" stroke-width="1" />
<text x="50.0" y="258.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >1</text>
<line x1="148.2" y1="240.0" x2="148.2" y2="244.0" stroke="#94a3b8" stroke-width="1" />
<text x="148.2" y="258.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >4</text>
<line x1="279.1" y1="240.0" x2="279.1" y2="244.0" stroke="#94a3b8" stroke-width="1" />
<text x="279.1" y="258.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >8</text>
<line x1="410.0" y1="240.0" x2="410.0" y2="244.0" stroke="#94a3b8" stroke-width="1" />
<text x="410.0" y="258.0" text-anchor="middle" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >12</text>
<text x="424.0" y="258.0" text-anchor="start" font-size="14" fill="#334155" font-family="Georgia,'Times New Roman',serif" font-style="italic" >n</text>
<line x1="36.0" y1="230.5" x2="40.0" y2="230.5" stroke="#94a3b8" stroke-width="1" />
<text x="32.0" y="234.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >2</text>
<line x1="36.0" y1="135.0" x2="40.0" y2="135.0" stroke="#94a3b8" stroke-width="1" />
<text x="32.0" y="139.0" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >3</text>
<line x1="36.0" y1="39.5" x2="40.0" y2="39.5" stroke="#94a3b8" stroke-width="1" />
<text x="32.0" y="43.5" text-anchor="end" font-size="12" fill="#64748b" font-family="Georgia,'Times New Roman',serif" >4</text>
</svg>
</div>
<p class="legende">Les suites $u_n = \left(1+\frac{1}{n}\right)^n$ et $v_n = \left(1+\frac{1}{n}\right)^{n+1}$ encadrent $\mathrm{e}$ et s'en approchent lentement&nbsp;; la série $S_n = \sum_{k=0}^{n} \frac{1}{k!}$ l'atteint presque immédiatement.</p>



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
<svg viewBox="0 0 460 130" role="img" aria-label="Si e = p/q, le nombre q!·e serait un entier coincé strictement entre M et M + 1/q" style="width:100%;max-width:460px;height:auto;">
<rect x="60.0" y="59" width="113.3" height="22" rx="3" fill="#f0dde7"/>
<line x1="32.8" y1="70.0" x2="427.2" y2="70.0" stroke="#94a3b8" stroke-width="1.5" />
<circle cx="60.0" cy="70" r="5" fill="#004D80"/>
<text x="60.0" y="100.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >M</text>
<circle cx="400.0" cy="70" r="5" fill="#004D80"/>
<text x="400.0" y="100.0" text-anchor="middle" font-size="15" fill="#004D80" font-family="Georgia,'Times New Roman',serif" font-style="italic" >M + 1</text>
<line x1="173.3" y1="57.0" x2="173.3" y2="83.0" stroke="#970E53" stroke-width="1.4" stroke-dasharray="3 2"/>
<text x="173.3" y="100.0" text-anchor="middle" font-size="14" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >M + 1/q</text>
<circle cx="121.2" cy="70" r="5" fill="#fff" stroke="#970E53" stroke-width="2"/>
<text x="121.2" y="50.0" text-anchor="middle" font-size="15" fill="#970E53" font-family="Georgia,'Times New Roman',serif" font-style="italic" >q! · e</text>
<text x="284.4" y="50.0" text-anchor="middle" font-size="13" fill="#64748b" font-family="Georgia,'Times New Roman',serif" font-style="italic">aucun entier ici</text>
</svg>
</div>
<p class="legende">La «&nbsp;loupe factorielle&nbsp;»&nbsp;: si $\mathrm{e} = \frac{p}{q}$, le nombre $q!\,\mathrm{e} = (q-1)!\,p$ serait un entier&nbsp;; or il tombe strictement entre l'entier $M = q!\,S_q$ et $M + \frac{1}{q}$, où aucun entier ne peut se trouver.</p>


<hr style="margin:2em 0;border:none;border-top:1px solid #cbd5e1;">

<div style="background:#f8fafc;border:1px solid #cbd5e1;border-left:6px solid #006C65;border-radius:10px;padding:14px 18px;font-size:0.95em;">
<b>Suite de l'exploration&nbsp;: d'où viennent géométriquement les factorielles $\frac{1}{k!}$&nbsp;?</b><br>
La preuve algébrique ci-dessus nous a convaincus <i>que</i> $\left(1+\frac{1}{n}\right)^n$ et $\sum \frac{1}{k!}$ convergent vers la même limite, mais que représente géométriquement la fraction $\frac{1}{k!}$ dans un espace de dimension $k$&nbsp;?
<ul style="margin:0.5em 0 0 0;">
<li>👉 <b><a href="../../geometrie/simplexes/">Simplexes et flèche du temps</a>&nbsp;:</b> découvrez pourquoi $\frac{1}{k!}$ est le volume du simplexe canonique $\Delta_k$, comment l'hypercube dilaté se découpe en 2D et en 3D, pourquoi la causalité impose ce même facteur dans la série de Dyson en physique quantique, et en quoi le $k!$ est la signature des processus sans mémoire.</li>
<li>👉 <b><a href="../../proba/simplexes_proba/">Simplexes et probabilités</a>&nbsp;:</b> résolvez sans calcul deux problèmes célèbres de probabilités (rupture de monotonie et seuil de Gnedenko) grâce au volume du simplexe.</li>
</ul>
</div>
