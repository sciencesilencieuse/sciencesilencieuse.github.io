+++
title = "Cercle et Trigo"
date = 2021-03-06T14:20:50+01:00
weight = 2
chapter = false
hidden = false
+++

<style>
mjx-container[display="true"] { max-width:100%; overflow-x:auto; overflow-y:hidden; }
h2
{
color:#970E53 !important;
}
h3
{
color:#004D80 !important;
}
.bloc
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid;
    border-radius: 12px;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.bloc-titre
{
    font-weight: bold;
    margin-bottom: 0.3em;
}
.bloc-def { border-color: #004D80; background: #EEF4FA; }
.bloc-prop { border-color: #C2770B; background: #FDF6EC; }
.bloc-theo { border-color: #970E53; background: #FBF1F5; }
.bloc-preuve { border-color: #64748B; background: #F1F5F9; }
.bloc-def > .bloc-titre { color: #004D80; }
.bloc-prop > .bloc-titre { color: #C2770B; }
.bloc-theo > .bloc-titre { color: #970E53; }
.bloc-preuve > .bloc-titre { color: #475569; }
.encadre
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #006C65;
    border-radius: 12px;
    background: #F3F8F7;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.encadre-titre
{
    font-weight: bold;
    color: #006C65;
    margin-bottom: 0.3em;
}
details.encadre > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.encadre > summary::-webkit-details-marker
{
    display: none;
}
details.encadre > summary::before
{
    content: "\25B8\00A0";
}
details.encadre[open] > summary::before
{
    content: "\25BE\00A0";
}
.exercice
{
    max-width: 40rem;
    margin: 1.4em auto;
    border: 2px solid #6B4FA0;
    border-radius: 12px;
    background: #F6F3FA;
    padding: 0.6em 1.3em 0.4em 1.3em;
}
.exercice-titre
{
    font-weight: bold;
    color: #6B4FA0;
    margin-bottom: 0.3em;
}
details.exercice > summary
{
    display: block;
    cursor: pointer;
    list-style: none;
}
details.exercice > summary::-webkit-details-marker
{
    display: none;
}
details.exercice > summary::before
{
    content: "\25B8\00A0";
}
details.exercice[open] > summary::before
{
    content: "\25BE\00A0";
}
details.solution > summary
{
    cursor: pointer;
    color: #6B4FA0;
    font-style: italic;
}
.fig
{
    max-width: 40rem;
    margin: 1.4em auto;
    text-align: center;
}
.fig > svg
{
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 440px;
    height: auto;
}
#ia-svg
{
    touch-action: none;
}
.fig-ctl
{
    margin: 0.4em 0 0.2em;
    text-align: center;
}
.fig-ctl label
{
    display: block;
}
.fig-ctl input[type="range"]
{
    display: block;
    margin: 0.3em auto;
    width: min(16em, 100%);
    accent-color: #004D80;
}
.fig-ctl button
{
    font-size: 0.9em;
    padding: 0.1em 0.6em;
    margin: 0.15em 0.1em;
    border: 2px solid #004D80;
    border-radius: 8px;
    background: #EEF4FA;
    color: #004D80;
    cursor: pointer;
}
.fig-val
{
    font-size: 0.95em;
    color: #334155;
    margin: 0.2em 0;
}
.photo
{
    max-width: 100%;
    margin: 1em auto;
    border-radius: 10px;
}
.photo img
{
    border-radius: 10px;
}
</style>

# Cercle et triangle

Un triangle et un cercle se rencontrent par les angles. Le cercle donne ses définitions au cosinus et au sinus, ce qui permet de calculer dans un triangle quelconque (lois des cosinus et des sinus). Et lorsqu'un triangle est inscrit dans un cercle, les angles du triangle et ceux du cercle sont liés par le théorème de l'angle inscrit.

## Trigonométrie

### Du radian au cercle trigonométrique

<div class="bloc bloc-def">
<div class="bloc-titre">Radian</div>

La mesure en **radians** d'un angle au centre d'un cercle est le rapport de la longueur $\ell$ de l'arc intercepté au rayon $R$&nbsp;:
$$\theta = \frac{\ell}{R}.$$
Ce rapport ne dépend pas du rayon. Un tour complet vaut $2\pi$ radians, soit $360°$, et $180° = \pi$ rad.

</div>

Un radian est donc l'angle pour lequel l'arc a la même longueur que le rayon. Pour le voir, on déroule un cercle de rayon $1$ sur une droite graduée&nbsp;: le point de contact avance exactement de la longueur de l'arc qui vient de toucher la droite.

![](/deroule.gif)

<div class="bloc bloc-def">
<div class="bloc-titre">Cosinus, sinus et tangente</div>

Dans un plan muni d'un repère orthonormé d'origine $O$, soit $M$ le point du **cercle trigonométrique** (le cercle de centre $O$ et de rayon $1$) tel que l'angle orienté entre l'axe des abscisses et la demi-droite $[OM)$ vaut $\theta$. Le **cosinus** et le **sinus** de $\theta$ sont les coordonnées de $M$&nbsp;:
$$M = (\cos\theta,\ \sin\theta).$$
La **tangente** est $\tan\theta = \frac{\sin\theta}{\cos\theta}$ (pour $\cos\theta \neq 0$). C'est l'ordonnée du point où la droite $(OM)$ coupe la tangente au cercle en $(1, 0)$.

</div>

Dans la figure suivante, on fait tourner le point $M$.

<div class="fig">
<p class="fig-ctl"><label for="tr-a">Angle&nbsp;: <span id="tr-ang"></span></label><input type="range" id="tr-a" min="0" max="360" step="1" value="30"></p>
<p class="fig-ctl"><button type="button" data-d="0">0</button><button type="button" data-d="30">π/6</button><button type="button" data-d="45">π/4</button><button type="button" data-d="60">π/3</button><button type="button" data-d="90">π/2</button><button type="button" data-d="135">3π/4</button><button type="button" data-d="180">π</button><button type="button" data-d="270">3π/2</button></p>
<svg id="tr-svg" viewBox="0 0 420 300" role="img" aria-label="Le cercle trigonométrique, un point M, son cosinus, son sinus et sa tangente"></svg>
<p class="fig-val" id="tr-val"></p>
</div>
<script>
(function () {
  var sl = document.getElementById('tr-a'), svg = document.getElementById('tr-svg'), val = document.getElementById('tr-val'), ang = document.getElementById('tr-ang');
  var cx = 160, cy = 150, R = 110, TX = cx + R;
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function fr(x) { return x.toFixed(3).replace('.', ',').replace('-', '−'); }
  function rad(d) {
    if (d === 0) { return '0'; }
    var g = gcd(d, 180), p = d / g, q = 180 / g;
    if (q > 12) { return fr(d * Math.PI / 180); }
    return (p === 1 ? '' : p) + 'π' + (q === 1 ? '' : '/' + q);
  }
  function L(x1, y1, x2, y2, col, w, dash) { return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + col + '" stroke-width="' + w + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : '') + ' stroke-linecap="round"/>'; }
  function dessiner() {
    var d = parseInt(sl.value, 10), t = d * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
    var px = cx + R * c, py = cy - R * s, h = '';
    h += L(cx - R - 20, cy, cx + R + 20, cy, '#94A3B8', 1.2) + L(cx, cy - R - 20, cx, cy + R + 20, '#94A3B8', 1.2);
    h += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#F8FAFC" stroke="#334155" stroke-width="1.6"/>';
    h += L(TX, cy - R - 25, TX, cy + R + 25, '#B7D6D3', 1.2, '4 3');
    if (d > 0 && d < 360) { h += '<path d="M ' + (cx + 26) + ' ' + cy + ' A 26 26 0 ' + (d > 180 ? 1 : 0) + ' 0 ' + (cx + 26 * c).toFixed(1) + ' ' + (cy - 26 * s).toFixed(1) + '" fill="none" stroke="#C2770B" stroke-width="2.2"/>'; }
    if (Math.abs(c) > 0.02) {
      var ty = -R * s / c;
      if (Math.abs(ty) <= 135) {
        h += L(cx, cy, TX, cy + ty, '#B7D6D3', 1.2, '4 3') + L(TX, cy, TX, cy + ty, '#006C65', 3.2);
      }
    }
    h += L(cx, cy, px, cy, '#004D80', 3.2) + L(px, cy, px, py, '#970E53', 3.2) + L(cx, cy, px, py, '#334155', 1.8);
    h += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5" fill="#334155"/>';
    h += '<text x="' + (cx + R + 6) + '" y="' + (cy + 15) + '" font-size="13" fill="#334155" font-family="Georgia,serif">1</text>';
    svg.innerHTML = h;
    ang.textContent = d + '° = ' + rad(d) + ' rad';
    val.innerHTML = '<span style="color:#004D80">cos θ = ' + fr(c) + '</span> &nbsp; <span style="color:#970E53">sin θ = ' + fr(s) + '</span> &nbsp; <span style="color:#006C65">tan θ = ' + (Math.abs(c) < 0.02 ? 'non définie' : fr(s / c)) + '</span>';
  }
  sl.addEventListener('input', dessiner);
  Array.prototype.forEach.call(document.querySelectorAll('button[data-d]'), function (b) {
    b.addEventListener('click', function () { sl.value = b.getAttribute('data-d'); dessiner(); });
  });
  dessiner();
})();
</script>

<div class="bloc bloc-prop">
<div class="bloc-titre">Relation fondamentale</div>

Pour tout angle $\theta$, $\cos^2\theta + \sin^2\theta = 1$.

</div>

C'est le théorème de Pythagore appliqué au triangle rectangle $O$, $(\cos\theta, 0)$, $M$, dont l'hypoténuse $OM$ vaut $1$. Les valeurs à retenir sont celles des angles remarquables&nbsp;:

| $\theta$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| $\sin\theta$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |

Le sinus de ces cinq angles s'écrit $\frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$, et le cosinus s'obtient en lisant la ligne dans l'autre sens. Les symétries du cercle donnent ensuite les valeurs dans les autres quadrants&nbsp;:

![](/cercleder.png?width=1000)

L'animation suivante fait apparaître les courbes du cosinus, du sinus et de la tangente en déroulant le cercle.

![](/cerclecos.gif)

<details class="encadre">
<summary class="encadre-titre">Pourquoi des radians&nbsp;?</summary>
<p>Un radian est un rapport de deux longueurs, donc un nombre sans dimension. C'est ce qui rend les formules du calcul différentiel simples. Pour $\theta$ en radians, $\sin\theta \approx \theta$ quand $\theta$ est petit&nbsp;: pour $\theta = 0{,}1$ rad, $\sin\theta = 0{,}0998$, soit $0{,}17\ \%$ d'écart. Les dérivées valent $(\sin)' = \cos$ et $(\cos)' = -\sin$. En degrés, ces formules traîneraient un facteur $\frac{\pi}{180}$ parasite. Le radian est l'unité naturelle des angles, comme l'exponentielle est la fonction naturelle de la croissance.</p>
</details>

<details class="encadre">
<summary class="encadre-titre">Formules d'addition&nbsp;: composer deux rotations</summary>
<p>La rotation d'angle $\theta$ envoie le point $(1, 0)$ sur $(\cos\theta, \sin\theta)$ et le point $(0, 1)$ sur $(-\sin\theta, \cos\theta)$. Elle a donc pour matrice
$$R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}.$$
Tourner de $a$ puis de $b$ revient à tourner de $a + b$, soit $R(a + b) = R(b)\,R(a)$. En développant le produit et en comparant la première colonne des deux membres, on obtient
$$\cos(a + b) = \cos a\cos b - \sin a\sin b, \qquad \sin(a + b) = \sin a\cos b + \cos a\sin b.$$
Avec $a = b$, on en déduit $\cos 2a = \cos^2 a - \sin^2 a$ et $\sin 2a = 2\sin a\cos a$.</p>
</details>

## Loi des cosinus et loi des sinus

Le théorème de Pythagore ne vaut que pour un triangle rectangle. Les lois des cosinus et des sinus valent pour tous les triangles. On note $a$, $b$, $c$ les longueurs des côtés et $\alpha$, $\beta$, $\gamma$ les angles opposés, c'est-à-dire que $\alpha$ est l'angle en $A$, face au côté $BC = a$, et ainsi de suite.

### Loi des cosinus

<div class="bloc bloc-theo">
<div class="bloc-titre">Loi des cosinus (Al-Kashi)</div>

Dans un triangle $ABC$,
$$c^2 = a^2 + b^2 - 2ab\cos\gamma.$$

</div>

Pour $\gamma = 90°$, $\cos\gamma = 0$ et l'on retrouve $c^2 = a^2 + b^2$&nbsp;: c'est le théorème de Pythagore, auquel la loi des cosinus ajoute une correction, le terme $-2ab\cos\gamma$. Cette correction dit même plus que la réciproque et la contraposée de Pythagore&nbsp;: si $\gamma$ est aigu, $\cos\gamma > 0$ et $c^2 < a^2 + b^2$&nbsp;; si $\gamma$ est obtus, $\cos\gamma < 0$ et $c^2 > a^2 + b^2$. Dans la figure suivante, les côtés $a = 3$ et $b = 4$ sont fixés et l'on fait varier l'angle $\gamma$ entre eux.

<div class="fig">
<p class="fig-ctl"><label for="lc-g">Angle $\gamma$&nbsp;: <span id="lc-ang"></span></label><input type="range" id="lc-g" min="15" max="165" step="1" value="90"></p>
<svg id="lc-svg" viewBox="0 0 420 220" role="img" aria-label="Un triangle de côtés 3 et 4 dont on fait varier l'angle compris, et le troisième côté"></svg>
<p class="fig-val" id="lc-val"></p>
</div>
<script>
(function () {
  var sl = document.getElementById('lc-g'), svg = document.getElementById('lc-svg'), out = document.getElementById('lc-val'), ang = document.getElementById('lc-ang');
  var sc = 40, a = 3, b = 4, C = [150, 190];
  function fr(x) { if (Math.abs(x) < 0.005) { x = 0; } return x.toFixed(2).replace('.', ',').replace('-', '−'); }
  function lab(x, y, t, col, anc) { return '<text x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" font-size="16" fill="' + col + '" font-family="Georgia,serif" font-style="italic" text-anchor="' + (anc || 'middle') + '">' + t + '</text>'; }
  function dessiner() {
    var d = parseInt(sl.value, 10), g = d * Math.PI / 180;
    var A = [C[0] + b * sc, C[1]], B = [C[0] + a * sc * Math.cos(g), C[1] - a * sc * Math.sin(g)];
    var h = '<polygon points="' + C + ' ' + A + ' ' + B + '" fill="#EEF4FA" stroke="none"/>';
    h += '<line x1="' + C[0] + '" y1="' + C[1] + '" x2="' + A[0] + '" y2="' + A[1] + '" stroke="#004D80" stroke-width="2.4"/>';
    h += '<line x1="' + C[0] + '" y1="' + C[1] + '" x2="' + B[0].toFixed(1) + '" y2="' + B[1].toFixed(1) + '" stroke="#C2770B" stroke-width="2.4"/>';
    h += '<line x1="' + A[0] + '" y1="' + A[1] + '" x2="' + B[0].toFixed(1) + '" y2="' + B[1].toFixed(1) + '" stroke="#970E53" stroke-width="3"/>';
    h += '<path d="M ' + (C[0] + 28) + ' ' + C[1] + ' A 28 28 0 0 0 ' + (C[0] + 28 * Math.cos(g)).toFixed(1) + ' ' + (C[1] - 28 * Math.sin(g)).toFixed(1) + '" fill="none" stroke="#334155" stroke-width="1.6"/>';
    if (Math.abs(d - 90) < 1) { h += '<path d="M ' + (C[0] + 14) + ' ' + C[1] + ' l 0 -14 l -14 0" fill="none" stroke="#334155" stroke-width="1.4" transform="translate(0,0)"/>'; }
    [[C, 'C', -14, 16], [A, 'A', 14, 16], [B, 'B', 0, -10]].forEach(function (p) { h += '<circle cx="' + p[0][0].toFixed(1) + '" cy="' + p[0][1].toFixed(1) + '" r="3.6" fill="#334155"/>' + lab(p[0][0] + p[2], p[0][1] + p[3], p[1], '#334155'); });
    h += lab((C[0] + A[0]) / 2, C[1] + 20, 'b = 4', '#004D80');
    h += lab((C[0] + B[0]) / 2 - 24 * Math.sin(g), (C[1] + B[1]) / 2 - 24 * Math.cos(g) + 5, 'a = 3', '#C2770B');
    h += lab((A[0] + B[0]) / 2 + 20, (A[1] + B[1]) / 2, 'c', '#970E53');
    svg.innerHTML = h;
    var c2 = a * a + b * b - 2 * a * b * Math.cos(g);
    ang.textContent = d + '°';
    out.innerHTML = 'c² = ' + fr(c2) + ' &nbsp; c = ' + fr(Math.sqrt(c2)) + '<br>a² + b² = 25 &nbsp; −2ab cos γ = ' + fr(-2 * a * b * Math.cos(g)) + '<br>' + (Math.abs(d - 90) < 1 ? 'angle droit : Pythagore (3, 4, 5)' : d < 90 ? 'γ aigu : c² < a² + b²' : 'γ obtus : c² > a² + b²');
  }
  sl.addEventListener('input', dessiner);
  dessiner();
})();
</script>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration de la loi des cosinus</div>

Plaçons $C$ à l'origine, $A$ en $(b, 0)$ et $B$ en $(a\cos\gamma, a\sin\gamma)$. Alors
$$c^2 = AB^2 = (a\cos\gamma - b)^2 + (a\sin\gamma)^2 = a^2(\cos^2\gamma + \sin^2\gamma) - 2ab\cos\gamma + b^2.$$
Comme $\cos^2\gamma + \sin^2\gamma = 1$, on obtient $c^2 = a^2 + b^2 - 2ab\cos\gamma$.

</div>

On l'appelle aussi théorème d'Al-Kashi, du nom du mathématicien et astronome persan du XV<sup>e</sup> siècle qui l'a utilisé pour ses calculs trigonométriques. Elle sert à trouver le troisième côté quand on connaît deux côtés et l'angle compris, et à trouver les angles quand on connaît les trois côtés, par $\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab}$.

### Loi des sinus

<div class="bloc bloc-theo">
<div class="bloc-titre">Loi des sinus</div>

Dans un triangle $ABC$ dont le cercle circonscrit a pour rayon $R$,
$$\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2R.$$

</div>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration de la loi des sinus</div>

L'aire $\mathcal{S}$ du triangle s'écrit de trois façons, en prenant chaque fois deux côtés et l'angle compris&nbsp;: $\mathcal{S} = \frac{1}{2}ab\sin\gamma = \frac{1}{2}bc\sin\alpha = \frac{1}{2}ca\sin\beta$. En divisant par $\frac{1}{2}abc$, on obtient $\frac{\sin\gamma}{c} = \frac{\sin\alpha}{a} = \frac{\sin\beta}{b}$, c'est-à-dire l'égalité des trois rapports. Leur valeur commune est $2R$&nbsp;: le théorème de l'angle inscrit (voir plus bas) dit que l'angle au centre $\widehat{BOC}$ vaut $2\alpha$, et dans le triangle isocèle $OBC$, de côtés $R$, $R$ et $a$, la base vaut $a = 2R\sin\alpha$.

</div>

La loi des sinus sert à trouver les côtés quand on connaît un côté et deux angles (le troisième angle s'en déduit par $\alpha + \beta + \gamma = \pi$). C'est la situation de la triangulation, décrite ci-dessous. Une vidéo sur le sujet&nbsp;:

{{< youtube-plus id="4-EClV7U8nM" ratio="16x9" width="800px" rounded=true shadow=true >}}

### Triangulation&nbsp;: la distance d'un navire et la mesure du mètre

La **loi des sinus** a contribué à la définition du **mètre**, la première unité «&nbsp;universelle&nbsp;» lors de la Révolution française. Delambre et Méchain furent missionnés pour mesurer le plus précisément possible un bout de méridien entre Dunkerque et Barcelone, la toute neuve définition du **mètre** étant&nbsp;:

> **un mètre est la dix-millionième partie d'un quart de méridien terrestre**

Le cercle répétiteur de Borda fut leur arme secrète. Il permettait alors de mesurer des angles avec une incertitude de quelques secondes seulement. Mesurer des distances avec cette précision est beaucoup plus difficile&nbsp;! L'idée fut alors de réaliser des triangulations&nbsp;: on vise des sommets faciles à repérer et on note les angles entre eux. Ils réalisèrent des dizaines de visées tout le long du bout de méridien étudié et le recouvrirent de triangles.

![](/metremeridien.png)

Une seule distance mesurée avec une grande précision permit alors de déterminer toutes les autres. En effet, grâce à la **loi des sinus**, la connaissance de la longueur d'un côté et de deux angles dans un triangle permet de déterminer les longueurs des deux autres côtés. Chaque triangle partage un côté avec le suivant, et le réseau se propage de proche en proche.

Thalès l'avait semble-t-il déjà réalisé puisqu'il aurait mis au point la méthode suivante pour connaître la distance entre un navire et la côte&nbsp;: deux observateurs $A$ et $C$ s'éloignent en direction opposée le long du trait de côte et mesurent les angles $\alpha = \widehat{CAB}$ et $\gamma = \widehat{ACB}$ entre la direction du bateau et la côte ainsi que la distance $AC$ qui les sépare l'un de l'autre. On a alors $d=AC\times\frac{\sin\left(\gamma\right)\sin\left(\alpha\right)}{\sin\left(\pi-(\alpha+\gamma)\right)}$&nbsp;!

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration de la formule de la distance</div>

<div class="photo" style="width:600px;"><img src="/trigula.png" alt="Deux observateurs A et C sur la côte mesurent les angles sous lesquels ils voient un navire B"></div>

$$\beta=180^\circ - (\alpha+\gamma)$$
$$AB = AC\times\frac{\sin\gamma}{\sin\beta}$$
$$d=AB\sin\alpha$$

</div>

La première ligne vient de la somme des angles du triangle, la deuxième de la loi des sinus ($\frac{AB}{\sin\gamma} = \frac{AC}{\sin\beta}$), et la troisième du triangle rectangle formé par $A$, $B$ et le pied de la perpendiculaire à la côte menée de $B$. Par exemple, avec $AC = 100$ m, $\alpha = 60°$ et $\gamma = 70°$, on trouve $\beta = 50°$, $AB = 100 \times \frac{\sin 70°}{\sin 50°} \approx 122{,}7$ m, puis $d = 122{,}7 \times \sin 60° \approx 106{,}2$ m.

<details class="encadre">
<summary class="encadre-titre">Le mètre et la méridienne de Delambre et Méchain</summary>
<p>Entre 1792 et 1798, Jean-Baptiste Delambre (de Dunkerque vers Rodez) et Pierre Méchain (de Barcelone vers Rodez) ont mesuré l'arc de méridien de Dunkerque à Barcelone. Seules deux longueurs ont été mesurées directement sur le terrain, deux «&nbsp;bases&nbsp;» d'une dizaine de kilomètres (près de Melun et près de Perpignan)&nbsp;; tout le reste de la longueur de l'arc a été déduit de visées d'angles, de triangle en triangle. Un arc de $9{,}7°$ de latitude a servi à extrapoler la longueur du quart de méridien, d'où la définition du mètre.</p>
<p>Le mètre obtenu est trop court d'environ $0{,}2$ mm par rapport à un dix-millionième du quart de méridien réel (près de $10\,002$ km). En 1799, un étalon en platine, le «&nbsp;mètre des Archives&nbsp;», a été déposé et est devenu la référence légale.</p>
</details>

## Théorème de l'angle inscrit et de l'angle au centre

<div class="bloc bloc-theo">
<div class="bloc-titre">Angle inscrit et angle au centre</div>

Soit $A$ et $B$ deux points d'un cercle de centre $O$ et $M$ un point du cercle distinct de $A$ et de $B$. Si $M$ est sur le grand arc $AB$, alors l'angle au centre $\widehat{AOB}$ est le double de l'angle inscrit $\widehat{AMB}$&nbsp;:
$$\widehat{AOB} = 2\widehat{AMB}.$$
Si $M$ est sur le petit arc, $\widehat{AMB} = 180° - \frac{1}{2}\widehat{AOB}$.

</div>

Dans la figure suivante, on peut déplacer les points $A$, $B$ et $M$ le long du cercle. L'angle inscrit ne change pas quand $M$ se déplace sur un même arc.

<div class="fig">
<svg id="ia-svg" viewBox="0 0 420 300" role="img" aria-label="Un cercle avec trois points A, B et M que l'on peut déplacer, et les angles au centre et inscrit"></svg>
<p class="fig-val" id="ia-val"></p>
</div>
<script>
(function () {
  var svg = document.getElementById('ia-svg'), out = document.getElementById('ia-val');
  var NS = 'http://www.w3.org/2000/svg', cx = 210, cy = 150, R = 120;
  var ang = { A: 200, B: 340, M: 80 }, order = ['A', 'B', 'M'];
  var dyn = document.createElementNS(NS, 'g'), hdl = document.createElementNS(NS, 'g'), circ = {};
  svg.appendChild(dyn); svg.appendChild(hdl);
  function pos(k) { var t = ang[k] * Math.PI / 180; return [cx + R * Math.cos(t), cy - R * Math.sin(t)]; }
  order.forEach(function (k) {
    var c = document.createElementNS(NS, 'circle');
    c.setAttribute('r', 12); c.setAttribute('fill', '#fff'); c.setAttribute('fill-opacity', '0.01'); c.setAttribute('stroke', '#334155'); c.setAttribute('stroke-width', '2'); c.style.cursor = 'grab'; c.style.touchAction = 'none';
    hdl.appendChild(c); circ[k] = c;
    c.addEventListener('pointerdown', function (e) { c.setPointerCapture(e.pointerId); c._drag = true; e.preventDefault(); });
    c.addEventListener('pointerup', function () { c._drag = false; });
    c.addEventListener('pointermove', function (e) {
      if (!c._drag) { return; }
      var q = svg.createSVGPoint(); q.x = e.clientX; q.y = e.clientY;
      var m = q.matrixTransform(svg.getScreenCTM().inverse());
      ang[k] = Math.atan2(-(m.y - cy), m.x - cx) * 180 / Math.PI;
      dessiner();
    });
  });
  function fr(x) { return x.toFixed(1).replace('.', ','); }
  function vang(P, Q, S) {
    var u = [Q[0] - P[0], Q[1] - P[1]], v = [S[0] - P[0], S[1] - P[1]];
    var c = (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(u[0], u[1]) * Math.hypot(v[0], v[1]));
    return Math.acos(Math.max(-1, Math.min(1, c))) * 180 / Math.PI;
  }
  function lab(P, d, t, col) {
    var v = [P[0] - cx, P[1] - cy], l = Math.hypot(v[0], v[1]) || 1;
    return '<text x="' + (P[0] + d * v[0] / l).toFixed(1) + '" y="' + (P[1] + d * v[1] / l + 5).toFixed(1) + '" font-size="16" font-style="italic" font-family="Georgia,serif" fill="' + col + '" text-anchor="middle">' + t + '</text>';
  }
  function dessiner() {
    var A = pos('A'), B = pos('B'), M = pos('M'), O = [cx, cy];
    order.forEach(function (k) { var p = pos(k); circ[k].setAttribute('cx', p[0]); circ[k].setAttribute('cy', p[1]); });
    var h = '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#F8FAFC" stroke="#334155" stroke-width="1.6"/>';
    h += '<polygon points="' + O + ' ' + A + ' ' + B + '" fill="#970E53" fill-opacity="0.12" stroke="#970E53" stroke-width="1.6" stroke-dasharray="5 4" stroke-linejoin="round"/>';
    h += '<polygon points="' + A + ' ' + M + ' ' + B + '" fill="none" stroke="#004D80" stroke-width="2.2" stroke-linejoin="round"/>';
    h += '<circle cx="' + cx + '" cy="' + cy + '" r="3.4" fill="#970E53"/>' + lab(O, 0, '', '#000');
    h += '<text x="' + (cx + 12) + '" y="' + (cy - 6) + '" font-size="16" font-style="italic" font-family="Georgia,serif" fill="#970E53">O</text>';
    h += lab(A, 24, 'A', '#334155') + lab(B, 24, 'B', '#334155') + lab(M, 24, 'M', '#334155');
    dyn.innerHTML = h;
    var cen = vang(O, A, B), ins = vang(M, A, B);
    var grand = Math.abs(ins - cen / 2) < 0.05;
    out.innerHTML = '<span style="color:#970E53">∠AOB = ' + fr(cen) + '°</span> &nbsp; <span style="color:#004D80">∠AMB = ' + fr(ins) + '°</span><br>' + (grand ? 'M est sur le grand arc : ∠AOB = 2 × ∠AMB' : 'M est sur le petit arc : ∠AMB = 180° − ∠AOB / 2');
  }
  dessiner();
})();
</script>

<div class="bloc bloc-preuve">
<div class="bloc-titre">Démonstration du théorème de l'angle inscrit</div>

Plaçons-nous dans le cas où le centre $O$ est à l'intérieur de l'angle $\widehat{AMB}$ et notons $D$ le point diamétralement opposé à $M$. Le triangle $OMA$ est isocèle ($OM = OA = R$), donc $\widehat{OMA} = \widehat{OAM} = x$. L'angle $\widehat{AOD}$ est un angle extérieur de ce triangle, donc il vaut la somme des deux angles intérieurs non adjacents&nbsp;: $\widehat{AOD} = 2x$. De même, avec $y = \widehat{OMB}$, $\widehat{BOD} = 2y$. Ainsi $\widehat{AOB} = \widehat{AOD} + \widehat{DOB} = 2(x + y) = 2\widehat{AMB}$. Les autres positions de $O$ s'obtiennent par différence.

</div>

<div class="bloc bloc-prop">
<div class="bloc-titre">Conséquences</div>

- Deux angles inscrits qui interceptent le même arc sont égaux.
- Un angle inscrit qui intercepte un demi-cercle (c'est-à-dire dont le côté $AB$ est un diamètre) est droit, puisque l'angle au centre vaut $180°$. Réciproquement, le cercle circonscrit à un triangle rectangle a pour diamètre son hypoténuse.

</div>

{{< youtube-plus id="IO6ZVNXkk4U" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">Pourquoi deux théorèmes portent-ils le nom de Thalès&nbsp;?</summary>
<p>Les noms des théorèmes dépendent des systèmes éducatifs&nbsp;!</p>
<blockquote>L'éducation secondaire se démocratise au cours du XIX<sup>e</sup> siècle. La géométrie, qui a souvent pour but d'exercer à la logique, en est un élément important. Les manuels se répandent, et leurs auteurs se mettent à introduire plus ou moins systématiquement des éléments historiques, en particulier en attribuant des noms de mathématicien aux théorèmes. L'époque est également au renouveau des recherches historiques sur les mathématiques de la Grèce antique. C'est dans ce contexte qu'à partir de la fin du XIX<sup>e</sup> siècle le nom de Thalès est attribué à deux théorèmes distincts. En France puis en Italie c'est à un théorème du livre VI des Éléments d'Euclide, soit celui sur la proportionnalité des segments découpés par une ligne parallèle à un côté dans un triangle, soit sa généralisation pour deux sécantes. En Allemagne c'est au théorème de l'angle inscrit dans un demi-cercle. Ces dénominations sont bien établies dans les années 1920, époque à laquelle d'autres pays adoptent l'une ou l'autre (mais pas l'Angleterre ni les États-Unis).<br><br>
Ces choix correspondent à des traditions différentes d'enseignement de la géométrie, plutôt fidèle à Euclide et à l'ordre d'exposition des Éléments en Allemagne, alors qu'une tradition plus anti-euclidienne s'est développée en France depuis La Ramée. Le choix s'est porté en France et en Italie, sur un théorème qui met en évidence un invariant de la géométrie affine, le rapport de mesures algébriques sur une droite, ce qui correspond au développement en Europe de la géométrie projective et affine au XIX<sup>e</sup> siècle. Ce théorème est mis en avant dans les débuts de l'apprentissage de la géométrie, alors que l'Allemagne privilégie le théorème de Pythagore, et choisit de donner le nom de Thalès à un théorème lié au triangle rectangle.<br><br>
Dans un cas comme dans l'autre, le choix du nom n'a finalement pas obéi à des considérations strictement historiques. L'histoire est instrumentalisée au service d'un choix didactique&nbsp;: il s'agit de mettre un théorème en avant, en lui attribuant le nom d'un mathématicien célèbre, d'où des choix différents dans des traditions d'enseignement différentes.</blockquote>
<p style="text-align:right"><i>Source : <a href="https://fr.wikipedia.org/wiki/Angle_inscrit_dans_un_demi-cercle#Appellation">Wikipédia</a></i></p>
</details>

{{< youtube-plus id="tFel-c8dKH0" ratio="16x9" width="800px" rounded=true shadow=true >}}

<details class="encadre">
<summary class="encadre-titre">Un cercle qui roule dans un cercle&nbsp;: le théorème de La Hire</summary>
<p>Faisons rouler sans glisser un cercle de rayon $r$ à l'intérieur d'un cercle de rayon $2r$. Chaque point du petit cercle décrit alors un <b>diamètre</b> du grand cercle&nbsp;: un mouvement de rotation produit un mouvement rectiligne (on l'appelle aussi le couple de Tusi, ou la trajectoire d'une hypocycloïde dégénérée).</p>
<div class="photo" style="width:400px;"><img src="/delahire.gif" alt="Un petit cercle roule à l'intérieur d'un cercle de rayon double, et ses points décrivent des diamètres"></div>
<p>La démonstration est une application directe de l'angle inscrit. Soit $O$ le centre du grand cercle, $T$ le point de contact, $S$ sa position de départ, et $\varphi = \widehat{SOT}$. Le petit cercle a pour diamètre $[OT]$, donc $O$ est sur ce cercle. Soit $P$ le point du petit cercle qui coïncidait avec $S$ au départ. Le roulement sans glissement impose que l'arc $PT$ du petit cercle ait la même longueur que l'arc $ST$ du grand cercle, soit $2r\varphi$&nbsp;: l'angle au centre du petit cercle vaut donc $\frac{2r\varphi}{r} = 2\varphi$. Par le théorème de l'angle inscrit, $\widehat{POT} = \varphi$. La demi-droite $[OP)$ fait donc avec $[OT)$ le même angle que $[OS)$ fait avec $[OT)$&nbsp;: $P$ reste sur la demi-droite $[OS)$, c'est-à-dire sur le diamètre issu de $S$.</p>
</details>

<details class="exercice">
<summary class="exercice-titre">Trois exercices</summary>
<p><b>1.</b> Un triangle a pour côtés $a = 7$, $b = 5$ et $c = 8$. Calculer l'angle $\gamma$ opposé à $c$, puis le rayon du cercle circonscrit.</p>
<details class="solution">
<summary>Solution</summary>
<p>Par la loi des cosinus, $\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = \frac{49 + 25 - 64}{70} = \frac{1}{7}$, donc $\gamma \approx 81{,}8°$. Par la loi des sinus, $2R = \frac{c}{\sin\gamma}$, avec $\sin\gamma = \sqrt{1 - \frac{1}{49}} = \frac{4\sqrt{3}}{7} \approx 0{,}990$, d'où $2R \approx 8{,}08$ et $R \approx 4{,}04$.</p>
</details>
<p><b>2.</b> Montrer que la somme des angles d'un triangle vaut $180°$ à l'aide de l'angle inscrit, en supposant le triangle inscrit dans un cercle de centre $O$ à l'intérieur du triangle.</p>
<details class="solution">
<summary>Solution</summary>
<p>Les angles au centre associés aux trois côtés sont $2\alpha$, $2\beta$ et $2\gamma$ (angle inscrit et angle au centre), et ils font un tour complet autour de $O$&nbsp;: $2\alpha + 2\beta + 2\gamma = 360°$, d'où $\alpha + \beta + \gamma = 180°$.</p>
</details>
<p><b>3.</b> Deux observateurs distants de $200$ m le long d'une côte voient un navire sous les angles $\alpha = 50°$ et $\gamma = 40°$ avec la côte. À quelle distance de la côte est-il&nbsp;?</p>
<details class="solution">
<summary>Solution</summary>
<p>Ici $\alpha + \gamma = 90°$ donc $\beta = 90°$, et la formule donne $d = 200 \times \frac{\sin 40°\sin 50°}{\sin 90°} = 200\sin 40°\cos 40° = 100\sin 80° \approx 98{,}5$ m. Le triangle est rectangle en $B$, et $d$ est la hauteur issue de $B$.</p>
</details>
</details>
