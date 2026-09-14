+++
title = "Complexes"
date = 2021-03-06T14:20:50+01:00
weight = 4
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
  #grosseformule 
{
    overflow-x: auto;
    margin-top:-0.5em;
    margin-bottom:-0.5em;
}
</style>


# Nombres complexes

{{% notice note %}}
[Très belle série de vidéos](https://www.youtube.com/playlist?list=PLiaHhY2iBX9g6KIvZ_703G3KJXapKkNaF) présentant les complexes.
{{% /notice %}} 


Comme on l'a vu [ici](../fondements/ensembles), les complexes sont la clôture algébrique des réels, une extension permettant à tout polynôme d'avoir ses racines dans l'ensemble.


Et chez les complexes, ces racines peuvent tracer de jolies figures comme on va le voir dans la suite.


## Entiers algébriques

Un nombre algébrique est un nombre réel ou complexe solution d'une équation polynomiale à coefficients dans le corps $\mathbb{Q}$ des rationnels. Et si les coefficient sont entiers, on parle d'entiers algébriques.

Traçons l'ensemble des racines des $2^{21}$ (≈ 2 millions) polynômes de degré 20 possible si chacun des coefficients vaut soit 1, soit -1.<br>
Exemple d'un de ces polynômes&nbsp;: $-x^{20}+x^{19}+x^{18}+x^{17}-x^{16}-x^{15}-x^{14}-x^{13}+x^{12}-x^{11}+x^{10}-x^{9}+x^{8}+x^{7}+x^{6}-x^{5}-x^{4}-x^{3}-x^{2}+x+1$<br>
Un polynôme de degré 20 a 20 racines complexes. On se retrouve donc avec 40 millions de points (dont beaucoup sont aux mêmes endroits)... Et cela donne ça&nbsp;:

![](/racine0.png)

Sont tracés ci-dessous les racines pour des degrés croissants de ces polynômes à coefficients unitaires.

![](/racdegres.png)

{{% notice note %}}
[Cette page](https://math.ucr.edu/home/baez/roots/) pour en savoir plus. Ça parle même de dragons&nbsp;!
{{% /notice %}}

En représentant dans le plan complexe les racines d'un polynôme de degré 2 dont on fait varier chacun des trois coefficients entiers entre -100 et 100, on obtient la jolie figure suivante (ici dans une zone centrée sur zéro et de rayon 1,7)&nbsp;:

![](/racinarithm.png?width=800px)

Pour avoir des racines ailleurs que sur l'axe des abscisses, il faut un discriminant négatif. On obtient alors des solutions complexes conjuguées&nbsp;: $z_\pm = \frac{-b \pm i\sqrt{4ac - b^2}}{2a}$.

<ul style="margin-bottom: 1em;">
<li>Qu'obtient-on si on fixe $a$ et $b$ et qu'on fait varier $c$&nbsp;?</li>
</ul>

On obtient des droites verticales plantées aux abscisses $-\frac{b}{2a}$.

<ul style="margin-bottom: 0;">
<li>Qu'obtient-on si on fixe $a$ et $c$ et qu'on fait varier $b$&nbsp;?</li>
</ul>

Prenons le module au carré de nos racines complexes&nbsp;:

<div id="grosseformule">

$$|z|^2 = \left(-\frac{b}{2a}\right)^2 + \left(\frac{\sqrt{4ac - b^2}}{2a}\right)^2 = \frac{b^2 + 4ac - b^2}{4a^2} = \frac{c}{a}$$

</div>

Le module est donc $|z| = \sqrt{\frac{c}{a}}$. Cela signifie que pour un couple $(a, c)$ fixé, toutes les racines obtenues en faisant varier $b$ se trouvent sur un cercle centré à l'origine. Les rayons visibles sont donc des racines de fractions rationnelles ($\sqrt{1}$, $\sqrt{2}$, $\sqrt{1/2}$, etc.).

<ul style="margin-bottom: 1em;">
<li>Et si on fixe $b$ et $c$ et qu'on fait varier $a$&nbsp;?</li>
</ul>

En injectant $z = x + iy$ dans $az^2+bz+c=0$, on obtient&nbsp;:

<div id="grosseformule">

$$a(x + iy)^2 + b(x + iy) + c = 0$$

</div>

<div id="grosseformule">

$$a(x^2 - y^2 + 2ixy) + bx + iby + c = 0$$

</div>

En séparant les parties réelle et imaginaire, on aboutit au système suivant&nbsp;:

<div id="grosseformule">

$$
\begin{cases}
a(x^2 - y^2) + bx + c = 0 & \text{(partie réelle)} \\\\
2axy + by = 0 \implies y(2ax + b) = 0 & \text{(partie imaginaire)} 
\end{cases}
$$

</div>

Comme on étudie les racines complexes, $y ≠ 0$, ce qui impose la condition&nbsp;:

$$2ax + b = 0 \implies a = -\frac{b}{2x}$$

Substituons cette expression de $a$ dans l'équation de la partie réelle&nbsp;:

$$\left(-\frac{b}{2x}\right)(x^2 - y^2) + bx + c = 0$$

Multiplions tout l'équation par $-2x$ (pour $x \neq 0$)&nbsp;:

$$b(x^2 - y^2) - 2bx^2 - 2cx = 0$$
$$-bx^2 - by^2 - 2cx = 0$$

En multipliant par $-1/b$ (pour $b ≠ 0$), on obtient une équation de cercle caractéristique&nbsp;:

$$x^2 + y^2 + \frac{2c}{b}x = 0$$
En mettant sous forme canonique (complétion du carré)&nbsp;:

$$\left(x + \frac{c}{b}\right)^2 + y^2 = \left(\frac{c}{b}\right)^2$$

Équation de cercles dont le centre est situé sur l'axe des réels à la coordonnée $\left(-\frac{c}{b}, 0\right)$ et de rayon $R = \left|\frac{c}{b}\right|$.<br>
Puisque la distance du centre à l'origine est égale au rayon, tous ces cercles sont tangents à l'axe imaginaire à l'origine $(0,0)$.


<ul style="margin-bottom: 1em;">
<li>Quid des zones d'exclusion&nbsp;?</li>
</ul>

Calculons la distance au carré entre une racine complexe $z = x + iy$ et un point rationnel quelconque $\frac{p}{q}$ situé sur l'axe des abscisses (où $p \in \mathbb{Z}$ et $q \in \mathbb{N}^*$).

$$\left|z - \frac{p}{q}\right|^2 = \left(x - \frac{p}{q}\right)^2 + y^2$$

Nous savons d'autre part que $x = -\frac{b}{2a}$ et $y^2 = \frac{4ac - b^2}{4a^2}$. Injectons ces expressions&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\left|z - \frac{p}{q}\right|^2 &= \left(-\frac{b}{2a} - \frac{p}{q}\right)^2 + \frac{4ac - b^2}{4a^2}\\\\
& =\frac{(bq + 2ap)^2 + q^2(4ac - b^2)}{4a^2q^2}
\end{aligned}
$$

</div>


Développons le numérateur&nbsp;:

<div id="grosseformule">

$$b^2q^2 + 4abpq + 4a^2p^2 + 4acq^2 - b^2q^2 = 4a^2p^2 + 4abpq + 4acq^2$$

</div>

En simplifiant par $4a^2$ au numérateur et au dénominateur, on obtient&nbsp;:

$$\left|z - \frac{p}{q}\right|^2 = \frac{ap^2 + bpq + cq^2}{aq^2}$$

Posons $I = ap^2 + bpq + cq^2$. Puisque $a, b, c, p, q$     sont tous des entiers, $I$ est obligatoirement un entier.<br>
De plus, si $I = 0$, cela signifierait que le nombre rationnel $\frac{p}{q}$ est une solution exacte de l'équation $at^2 + bt + c = 0$. Or, nous avons posé comme condition initiale que l'équation possède des racines strictement complexes ($\Delta < 0$). Le polynôme n'admet donc aucune racine réelle. Par conséquent, $I$ ne peut pas être nul&nbsp;:

$$I \in \mathbb{Z}^* \implies |I| \ge 1$$ 

On en déduit l'inégalité fondamentale suivante&nbsp;:

$$\left|z - \frac{p}{q}\right|^2 \ge \frac{1}{a q^2}$$

Comme les coefficients de la figure sont bornés par $N = 100$, la valeur maximale de $a$ est $100$. On obtient donc le rayon d'exclusion minimal théorique autour de n'importe quelle fraction $\frac{p}{q}$ :

$$\left|z - \frac{p}{q}\right| \ge \frac{1}{q\sqrt{100}} = \frac{1}{10q}$$

Conclusion :

Autour de $0$ ($\frac{0}{1}$) : Le rayon d'exclusion est de $\frac{1}{10 \times 1} = 0,1$. C'est le grand trou central.<br>
Autour de $1$ et $-1$ ($\frac{1}{1}$ et $\frac{-1}{1}$)&nbsp;: le rayon d'exclusion minimum est également de $\frac{1}{10 \times 1} = 0,1$, mais en pratique, le fait que la partie réelle vale $-\frac{b}{2a}=\pm 1$ impose $|b|=2|a|$ et donc $a$ se ballade jusqu'à 50 seulement rendant le trou $\sqrt{2}$ fois plus gros.<br>

Cette loi en $\frac{1}{10q}$ explique pourquoi la taille des zones d'exclusion décroît de manière fractale à mesure que le dénominateur de la fraction augmente.

<br>

## Ensemble de Mandelbrot

L'ensemble de Mandelbrot est une des fractales les plus célèbres.

Il est défini par une suite récurrente.<br>
Pour chaque point $c$ du plan complexe&nbsp;:<br>
$$z_{0} = 0$$
$$z_{n+1} = z_{n}^2 + c$$

Pour chaque point $c$ (qui correspond à un pixel de l'image)&nbsp;: 
<ol style="margin-top:0;">
<li>Si la suite converge, le point appartient à l'ensemble.</li>
<li>Si la suite diverge, la couleur correspond à la vitesse de divergence (le nombre d'itérations nécessaires pour que le module de $z_n$ dépasse une certaine valeur seuil, 2 ici). Plus la divergence sera rapide, plus le point sera blanc.
</ol>



<video width="1200" poster="/mandelposter.png" controls style="display:block; max-width:100%; position:relative; margin-left:auto; margin-right: auto; border-radius:5px;">
  <source src="/mandelbrot.mp4" type="video/mp4">
</video>


La vidéo montre une zone à la frontière de l'ensemble appelée vallée des hippocampes pour un nombre d'iteration croissant.

<pre><code class="language-python">import numpy as np
import matplotlib.pyplot as plt
    
def mandelbrot(c, max_iter):
    z = complex(0, 0)
    for n in range(max_iter):
        if abs(z) > 2.0:
            # Calcul pour lisser la couleur
            log_zn = np.log(z.real*z.real + z.imag*z.imag) / 2.0
            nu = np.log(log_zn / np.log(2)) / np.log(2) if log_zn > 0 else 0
            n = n + 1 - nu
            break
        z = z*z + c
    return n / max_iter  # Normalisation pour assurer une transition douce

centre = (-0.06783611264225832-0.0025,0.6617460391250546+0.0005)

# Paramètres de l'image
width, height = 2000, 1000
x_min, x_max = centre[0]-0.004, centre[0]+0.004
y_min, y_max = centre[1]-0.002, centre[1]+0.002

# Création de l'image
for i in range(27,301):  # Générer 20 images avec des itérations croissantes
    img = np.zeros((height, width))
    for x in range(width):
        for y in range(height):
            c = complex(x_min + (x / width) * (x_max - x_min),
                        y_min + (y / height) * (y_max - y_min))
            m = mandelbrot(c, i)
            img[y, x] = m
    #img = (img - np.min(img)) / (np.max(img) - np.min(img))  # Normalisation
    plt.imsave(f'mandelbrot/mandelbrot_{i:03d}.png', img, cmap='Blues')
    print(i)
</code></pre>

<br>

## Triplets pythagoriciens

Les nombres complexes vont nous aider à mettre la main sur tous les triplets pythagoriciens, ces triplets d'entiers $(a,b,c)$ tels que $a^2+b^2=c^2$.


{{< youtube-plus id="cQ2N0CX7a-4" ratio="16x9" width="800px" rounded=true shadow=true >}}



