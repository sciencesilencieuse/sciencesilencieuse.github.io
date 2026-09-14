+++
title = "TQC-6"
date = 2021-03-06T14:20:50+01:00
weight = 1
hidden = true
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
margin-top:-0.5em;
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


# Théorie quantique des champs -- Partie 6

{{%notice note%}}
Notes de lecture du livre *Quantum field theory for the gifted amateur* de Thomas Lancaster et Stephen Blundell.
{{%/notice%}}

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Retour sommaire</a></th></td>
    </tr>
</table>
</div>
<br>


Les parties précédentes ont quantifié des champs et exploité leurs symétries. Il manque encore l'objet qui relie tout cela à un calcul&nbsp;: le <b>propagateur</b>, c'est-à-dire l'amplitude pour qu'un quantum aille d'un point à un autre. Cette partie le construit en deux temps.

<ul>
<li><b>D'abord en mécanique quantique</b>, où le propagateur se révèle être une <b>fonction de Green</b> ordinaire, celle de l'équation de Schrödinger. Ce détour installe les trois idées qui resserviront intactes, à savoir que les <b>pôles portent le spectre</b>, que la <b>prescription $\mathrm i\varepsilon$ encode la causalité</b>, et que l'<b>équation de Dyson</b> transforme une interaction en série de propagations libres entrecoupées de chocs ponctuels.</li>
<li><b>Puis pour un champ relativiste</b>, où deux difficultés nouvelles apparaissent&nbsp;: l'amplitude élémentaire $D(x-y)$ ne s'annule pas hors du cône de lumière, et le spectre contient des fréquences des deux signes. La réponse aux deux est le même objet, le <b>propagateur de Feynman</b> $\Delta_F$, qui propage les particules vers le futur et les antiparticules vers le passé.</li>
</ul>

Une récompense à la fin&nbsp;: le potentiel de <b>Yukawa</b>, c'est-à-dire l'explication des forces par échange de particules virtuelles, et la première brique des diagrammes de Feynman.

<br>


## Fonction de Green et propagateur


### Fonction de Green

Soit $\hat L$ un opérateur différentiel linéaire. On cherche à résoudre (pour une source $f$ quelconque)&nbsp;:


<div id="def">

$$\hat L\phi = f$$

</div>

Stratégie&nbsp;:

<div id="theo">

<ul style="margin-top:1em;margin-bottom:-0.5em;">
<li>Résoudre d'abord le problème pour la source la plus simple possible = une <b>impulsion</b> ponctuelle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat L_x G(x, x') = \delta(x - x')
$
</p>

</li>
<li>Puis invoquer la <b>linéarité</b>. La source $f$ étant une superposition d'impulsions, $f(x) = \int \delta(x-x') f(x') \mathrm{d}x'$, la solution est la superposition des réponses&nbsp;:

<p style="text-align:center;">
$\displaystyle
\phi(x) = \int G(x, x')f(x') \mathrm{d}x'.
$
</p>

</li>
</ul>
</div>

$G(x,x')$ est ce que « ressent » le système en $x$ quand on le frappe en $x'$. On retrouve la réponse impulsionnelle du traitement du signal.


Au sens des distributions&nbsp;:

<div id="def">

$G$ est une **solution élémentaire** de l'opérateur $\hat L$&nbsp;: 

<div style="margin-bottom:-0.5em;">

$$\hat L\\, G = \delta$$

</div>

</div>

<br>

#### Invariance par translation et produit de convolution

<div id="theo">


Si $\hat L$ est à <b>coefficients constants</b> alors on a <b>invariance par translation</b>.

</div>

<br>

<div id="preuve">

Si l'opérateur $\hat{L}$ est à coefficients constants, il commute alors avec tous les opérateurs de translation $T_a$ (tels que $(T_a f)(x) = f(x-a))$&nbsp;:

<ul>
<li>La dérivation commute avec $T_a$&nbsp;: $\frac{\mathrm{d}}{\mathrm{d}x}[f(x-a)] = f'(x-a)\Rightarrow \frac{\mathrm{d}}{\mathrm{d}x} T_a f = T_a \frac{\mathrm{d}f}{\mathrm{d}x}$.</li>
<li>La multiplication par une constante commute trivialement avec $T_a$​.</li>
</ul>

Toute somme $\sum_j a_j\\, \mathrm{d}^j/\mathrm{d}x^j$ à $a_j$ constants commute donc avec $T_a$.

Contre-exemple à coefficients variables&nbsp;:<br>
$\hat L = x\frac{\mathrm{d}}{\mathrm{d}x}$ donne $\hat L(T_a f)(x) = x f'(x-a)$ mais $T_a(\hat L f)(x) = (x-a) f'(x-a)$. Le coefficient $x$ «&nbsp;voit&nbsp;» la position absolue. 


</div>

Normal puisque des coefficients constants correspondent à un milieu homogène&nbsp;! 


Si on a invariance spatiale, alors translater la source translate la réponse d'autant&nbsp;: $G(x+a, x'+a) = G(x, x')$ pour tout $a$.

  Géométriquement&nbsp;: dans le plan des couples $(x,x')$, $G$ est constante le long de chaque diagonale $x - x' = \text{cste}$ (translater les deux arguments de $a$ = glisser le long d'une diagonale).
  
  L'identité valant pour tout $a$, choisissons celui qui ramène la source à l'origine&nbsp;: $a = -x'$.

<div id="def">

<p style="text-align:center;">
$\displaystyle
G(x, x') = G(x - x', 0) \;\equiv\; G(x - x')
$
</p>
   
</div>
   
   La formule de superposition devient le **produit de convolution** entre $G$ et $f$&nbsp;!
   
   <div id="theo">
   
   <p style="text-align:center;">
   $\displaystyle
     \phi(x) = \int G(x - x')f(x')\, \mathrm{d}x' = (G * f)(x)
   $
   </p>
   
   </div>
   
   <br>
   
   <div id="preuve">
   
Vérifions que $\phi = G*f$ résout bien $\hat L \phi = f$. 

On passe l'opérateur différentiel sous l'intégrale (possible car $\hat L$ ne « voit » que la variable $x$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat L_x \phi(x) = \int \underbrace{\hat L_x G(x - x')}_{=\ \delta(x - x')} f(x')\, \mathrm{d}x' = f(x)
$
</p>


   </div>
   
En traitement du signal, la sortie d'un système *linéaire et invariant dans le temps* est toujours $s_{\text{sortie}} = h * s_{\text{entrée}}$, où $h$ est la réponse impulsionnelle. La fonction de Green incarne bien cette réponse impulsionnelle, et l'hypothèse «&nbsp;coefficients constants&nbsp;» correspond à l'invariance du système.
   
Avec un hamiltonien indépendant du temps (et donc invariant par translation temporelle), reconstruire $\psi(t)$ à partir de $\psi(t')$ revient à une convolution temporelle. Et si de plus $\hat H = \hat p^2/2m$ (particule libre), il est aussi invariant par translation spatiale...


<div id="preuve">

Exemple de détermination et d'utilisation d'une fonction de Green&nbsp;:

Montrons que la loi de Coulomb intégrale est la résolution de l'équation de Poisson par fonction de Green.

En effet, $\nabla^2 \phi = -\rho/\varepsilon_0$ a pour fonction de Green $G(\mathbf r, \mathbf r') = \dfrac{1}{4\pi |\mathbf r - \mathbf r'|}$.

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>
Pourquoi donc&nbsp;?
</summary>

Le laplacien radial en dimension 3 s'écrit&nbsp;:


$$
\nabla^2 f(r) = \frac{1}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{\mathrm{d}f}{\mathrm{d}r}\right)
$$

Avec $f = 1/r$, $\dfrac{\mathrm{d}f}{\mathrm{d}r} = -\dfrac{1}{r^2}$, donc $r^2 f' = -1 \rightarrow (r^2 f')'=0$ d'où&nbsp;:

$$
\nabla^2\left(\frac 1r\right) = 0 \quad \text{pour } r \neq 0
$$

Donc si $\nabla^2(1/r)$ est «&nbsp;quelque chose&nbsp;», ce quelque chose est entièrement concentré en $0$. Candidat naturel&nbsp;: un multiple de $\delta^{(3)}$.

Intégrons $\nabla^2(1/r) = \boldsymbol\nabla \cdot \boldsymbol\nabla (1/r)$ sur une boule $B_\varepsilon$ de rayon $\varepsilon$ centrée en $0$, et transformons en flux (théorème de Green–Ostrogradski)&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em; margin-top:-1em;">

$$
\begin{aligned}
\int_{B_\varepsilon} \nabla^2\left(\frac1r\right) \mathrm{d}V
&= \oint_{S_\varepsilon} \boldsymbol\nabla\left(\frac1r\right)\cdot \\,\mathrm{d}\mathbf S\\\\
&= \oint_{S_\varepsilon} \left(-\frac{1}{r^2}\hat{\mathbf r}\right)\cdot \hat{\mathbf r} \\,r^2 \mathrm{d}\Omega\\\\
&= -\int \mathrm{d}\Omega \\\\
&= -4\pi
\end{aligned}
$$

</div>

Les $r^2$ se compensent exactement, le résultat est $-4\pi$ quel que soit $\varepsilon$. Une «&nbsp;fonction&nbsp;» nulle partout sauf en un point, mais d'intégrale $-4\pi$ sur tout voisinage de ce point&nbsp;: c'est la définition opérationnelle de $-4\pi\delta^{(3)}(\mathbf r)$. D'où

<div id="grosseformule" style="margin-bottom:-1em; margin-top:-1em;">

$$
\nabla^2\left(\frac{1}{r}\right) = -4\pi\delta^{(3)}(\mathbf r)
$$


</div>

Pour Poisson, on adopte la convention de signe $\nabla^2 G = -\delta^{(3)}$ (et non $+\delta^{(3)}$ comme dans la définition générale), de sorte que $G$ soit directement le **potentiel d'une charge unité**&nbsp;; c'est ce signe qui fera convoler $G$ avec $+\rho/\varepsilon_0$ ci-dessous. Par invariance par translation selon $\mathbf{r}$, $G(\mathbf{r},\mathbf{r'})=G(\mathbf{r-r'})$. Donc


$$
G(\mathbf r, \mathbf r') = \frac{1}{4\pi |\mathbf r - \mathbf r'|}
$$

</details>

La formule de superposition redonne alors bien la loi de Coulomb intégrale&nbsp;: 


<p style="text-align:center;">
$\displaystyle
\phi(\mathbf r) =  \int G(\mathbf{r}-\mathbf{r'})\,\frac{\rho(\mathbf{r'})}{\varepsilon_0} \,\mathrm{d}^3 r' = \dfrac{1}{4\pi\varepsilon_0}\displaystyle\int \dfrac{\rho(\mathbf r')}{|\mathbf r - \mathbf r'|}\mathrm{d}^3 r'
$
</p>

<p>
Le potentiel total est la somme des potentiels de charges ponctuelles. Toute la théorie des fonctions de Green est la généralisation de ce raisonnement.
</p>

</div>

<br>

#### Transformée de Fourier

Si $\hat L$ est à coefficients constants, la transformée de Fourier le tourne en multiplication par un polynôme $L(k)$, d'où&nbsp;:

<div id="theo">
  $$
  \tilde G(k) = \frac{1}{L(k)}.
  $$
</div>

<br>

<div id="preuve">

Les ondes planes $e^{ikx}$ sont des fonctions propres de la dérivation, donc de *tout* opérateur construit à coefficients constants à partir de dérivations.

En base de Fourier, un tel opérateur est diagonal, et appliquer $\hat L$ revient à multiplier par la valeur propre $L(k)$.

Plaçons-nous à 1D (le cas général est identique)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat L = \sum_{j=0}^{m} a_j\, \frac{\mathrm{d}^j}{\mathrm{d}x^j}, \; a_j \in \mathbb C \text{ constants}
$
</p>

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm{d}^j}{\mathrm{d}x^j} \mathrm e^{\mathrm ikx} = (ik)^j\, \mathrm e^{\mathrm ikx}
\Longrightarrow
\hat L \mathrm e^{\mathrm ikx} = \underbrace{\left(\sum_j a_j (ik)^j\right)}_{\displaystyle L(k)} \mathrm e^{\mathrm ikx}
$
</p>

Chaque onde plane est vecteur propre de $\hat L$, de valeur propre le polynôme $L(k)$. 

Maintenant, décomposons une fonction quelconque sur cette base (transformée de Fourier inverse) et appliquons $\hat L$ en dérivant sous l'intégrale&nbsp;:

<p style="text-align:center;">
$\displaystyle
\phi(x) = \int \frac{\mathrm{d}k}{2\pi} \tilde\phi(k) \mathrm e^{\mathrm ikx}
\Longrightarrow
\hat L\phi(x) = \int \frac{\mathrm{d}k}{2\pi} \underbrace{L(k) \tilde\phi(k)}_{\widetilde{L\phi}(k)} \mathrm e^{\mathrm ikx}
$
</p>


Autrement dit, **dans l'espace de Fourier, $\hat L$ agit par simple multiplication**&nbsp;: $\widetilde{\hat L \phi}(k) = L(k) \tilde\phi(k)$. L'équation différentielle $\hat L \phi = f$ devient une équation algébrique&nbsp;:

<p style="text-align:center;">
$\displaystyle
L(k) \tilde\phi(k) = \tilde f(k)
\Longrightarrow
\tilde\phi(k) = \frac{\tilde f(k)}{L(k)}
\Longrightarrow
\tilde G(k) = \frac{1}{L(k)}
$
</p>

<p>
La dernière égalité vient de la transformée de $\hat L G = \delta$ sachant $\tilde\delta = 1$.
</p>

</div>

<br>

<div id="preuve">

Que se passe-t-il si les coefficients $a_j$ de $L$ ne sont pas constants&nbsp;?

Si $a_j = a_j(x)$, le produit $a_j(x)\\,\partial^j\phi$ devient, en Fourier, une convolution $\tilde a_j * \big((ik)^j\tilde\phi\big)$. L'opérateur n'est alors plus diagonal, les modes $k$ se mélangent.

</div>

Moralité&nbsp;: 

<div id="theo">

coefficients constants = invariance par translation = les ondes planes diagonalisent = Fourier transforme en simple multiplication

</div>

<br>

<div id="theo">

  **Les zéros de $L(k)$** (c'est-à-dire les modes propres du système libre) deviennent **les pôles de $\tilde G$**.<br>
  **Le spectre du système est encodé dans les pôles de sa fonction de Green**.

</div>
  
Deux exemples.&nbsp;:

<div id="preuve">

<b>Klein--Gordon statique</b>&nbsp;:<br>
$\hat L = -\nabla^2 + m^2$ $\Rightarrow$ $L(\mathbf k) = \mathbf k^2 + m^2$<br>
On en déduit $\tilde G(\mathbf k) = \dfrac{1}{\mathbf k^2 + m^2}$, dont la transformée inverse en 3D est le potentiel de Yukawa $\dfrac{\mathrm e^{-mr}}{4\pi r}$.

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;margin-top:0.5em;">
<summary>
Preuve&nbsp;:
</summary>

On cherche&nbsp;:

<p style="text-align:center;">
$\displaystyle
V(\mathbf r)=\int_{\mathbb{R}^3} \frac{\mathrm d^3k}{(2\pi)^3} \frac{1}{\mathbf k^2 + m^2} \mathrm e^{\mathrm i \mathbf{k} \cdot \mathbf{r}}
$
</p>

Pour évaluer cette intégrale sur l'espace des moments, on choisit un système de coordonnées sphériques $(k, \theta, \phi)$   dans lequel l'axe $z$ est aligné avec le vecteur position $\mathbf{r}$.<br>
Dans ce repère, le produit scalaire s'écrit $\mathbf{k} \cdot \mathbf{r} = kr \cos\theta$, et l'élément de volume est $\mathrm d^3k = k^2 \sin\theta \\, \mathrm dk \\, \mathrm d\theta \\, \mathrm d\phi$. L'intégrale devient&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
V(\mathbf{r}) = \frac{1}{(2\pi)^3} \int_0^\infty \!\! \mathrm dk \int_0^\pi \!\! \mathrm d\theta \int_0^{2\pi} \!\! \mathrm d\phi \frac{k^2 \sin\theta}{k^2 + m^2} \mathrm e^{\mathrm i k r \cos\theta}
$
</p>

L'intégration sur l'angle azimutal $\phi$ donne immédiatement un facteur $2\pi$. L'intégrale se réduit à&nbsp;:

<p style="text-align:center;">
$\displaystyle
V(\mathbf{r}) = \frac{1}{(2\pi)^2} \int_0^\infty \!\! \mathrm dk \frac{k^2}{k^2 + m^2} \int_0^\pi \sin\theta \, \mathrm e^{\mathrm i k r \cos\theta} \mathrm d\theta
$
</p>

Pour intégrer sur $\theta$, on effectue le changement de variable $u = \cos\theta$, ce qui donne $\mathrm du = -\sin\theta \\, \mathrm d\theta$. Les bornes d'intégration passent de $1$ à $-1$ (ou de $-1$ à $1$ en absorbant le signe moins)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_0^\pi \sin\theta \, \mathrm e^{\mathrm i k r \cos\theta} \mathrm d\theta = \int_{-1}^1 \mathrm e^{\mathrm i k r u} \mathrm du = \left[ \frac{\mathrm e^{\mathrm i k r u}}{i k r} \right]_{-1}^1 = \frac{\mathrm e^{\mathrm i k r} - \mathrm e^{-\mathrm i k r}}{\mathrm i k r}
$
</p>

En réinjectant ce résultat dans l'expression de $V(\mathbf{r})$, on obtient&nbsp;:
<p style="text-align:center;">
$\displaystyle
V(\mathbf{r}) = \frac{1}{(2\pi)^2} \int_0^\infty \!\! \mathrm dk \, \frac{k^2}{k^2 + m^2} \frac{\mathrm e^{\mathrm i k r} - \mathrm e^{-\mathrm i k r}}{\mathrm i k r} = \frac{1}{(2\pi)^2 \mathrm i r} \int_0^\infty \frac{k}{k^2 + m^2} \left( \mathrm e^{\mathrm i k r} - \mathrm e^{-\mathrm i k r} \right) \mathrm dk
$
</p>
Pour utiliser le théorème des résidus, il est plus commode d'avoir une intégrale de $-\infty$ à $+\infty$. Séparons l'intégrale en deux termes&nbsp;:
<p style="text-align:center;">
$\displaystyle
\int_0^\infty \frac{k \mathrm e^{\mathrm i k r}}{k^2 + m^2} \mathrm dk - \int_0^\infty \frac{k \mathrm e^{-\mathrm i k r}}{k^2 + m^2} \mathrm dk
$
</p>

Dans le second terme, on pose $k' = -k$. Il devient&nbsp;:
<p style="text-align:center;">
$\displaystyle
- \int_0^{-\infty} \frac{-k' \mathrm e^{\mathrm i k' r}}{k'^2 + m^2} (-\mathrm dk') = \int_{-\infty}^0 \frac{k' \mathrm e^{\mathrm i k' r}}{k'^2 + m^2} \mathrm dk'
$
</p>
En rassemblant les deux termes, l'intégrale sur $[0, +\infty[$  et l'intégrale sur $]-\infty, 0]$  se combinent parfaitement pour former une seule intégrale sur $\mathbb{R}$&nbsp;:
<p style="text-align:center;">
$\displaystyle
V(\mathbf{r}) = \frac{1}{(2\pi)^2 \mathrm i r} \int_{-\infty}^\infty \frac{k\, \mathrm e^{\mathrm i k r}}{k^2 + m^2} \mathrm dk
$
</p>

Considérons l'intégrale complexe&nbsp;:
<p style="text-align:center;">
$\displaystyle
I = \int_{-\infty}^\infty \frac{z \, \mathrm e^{\mathrm i z r}}{z^2 + m^2} \mathrm dz
$
</p>
Puisque $r > 0$, l'exponentielle $\mathrm e^{\mathrm i z r}$ décroît de façon exponentielle dans le demi-plan supérieur complexe (où $\text{Im}(z) > 0$). On peut donc fermer le contour d'intégration par un grand demi-cercle dans ce demi-plan supérieur. La contribution de ce demi-cercle tend vers 0 (lemme de Jordan).<br>
L'intégrande possède deux pôles simples là où $z^2 + m^2 = 0$, c'est-à-dire en $z = \mathrm im$ et $z = -\mathrm im$.<br>
Seul le pôle $z = \mathrm im$ se trouve à l'intérieur de notre contour fermé.<br>
Le résidu en $z = \mathrm im$ est&nbsp;:
<p style="text-align:center;">
$\displaystyle
\text{Res}(\mathrm im) = \lim_{z \to \mathrm im} (z - \mathrm im) \frac{z \, \mathrm e^{\mathrm i z r}}{(z - \mathrm im)(z + \mathrm im)} = \frac{\mathrm im \, \mathrm e^{\mathrm i (im) r}}{\mathrm im + \mathrm im} = \frac{\mathrm im \, \mathrm e^{-mr}}{2\mathrm im} = \frac{1}{2} \mathrm e^{-mr}
$
</p>

D'après le théorème des résidus&nbsp;:
<p style="text-align:center;">
$\displaystyle
I = 2\mathrm i\pi \times \text{Res}(\mathrm im) = 2\mathrm i\pi \left( \frac{1}{2} \mathrm e^{-mr} \right) = \mathrm i\pi \, \mathrm e^{-mr}
$
</p>

Il ne reste plus qu'à substituer $I$ dans l'expression de $V(\mathbf{r})$&nbsp;:
<p style="text-align:center;">
$\displaystyle
V(\mathbf{r}) = \frac{1}{(2\pi)^2 \mathrm i r} \times \mathrm i\pi \mathrm e^{-mr} = \frac{\mathrm e^{-mr}}{4\pi r}
$
</p>

On retrouve bien l'expression spatiale du potentiel de Yukawa.

</details>

Aucun zéro réel de $L$&nbsp;: pas de mode propagatif, pas de subtilité de contour.

<b>Schrödinger</b>&nbsp;:<br>
$\hat L = \mathrm i\partial_t - \hat H_0$ $\Rightarrow$ $L(E) = E - \dfrac{p^2}{2m}$<br>
Ici $L$ s'annule sur la relation de dispersion. $\tilde G = 1/L$ n'est donc pas défini tel quel (les modes propres du système libre sont des obstructions à l'inversion). Toute la prescription $i\varepsilon$ (voir la suite) est la réponse à ce problème&nbsp;: comment diviser par quelque chose qui s'annule.</li>
</ul>

</div>

<br>

### Le propagateur quantique

La particule est en $x'$ à l'instant $t'$, quelle est l'amplitude de probabilité de la trouver en $x$ à l'instant $t$&nbsp;?<br>


<div id="def">

On définit le **propagateur retardé**&nbsp;:

<p style="text-align:center;">
$\displaystyle
G^+(x, t\,;\, x', t') = -\mathrm i \, \theta(t - t') \big\langle x \big|  e^{-i\hat H (t - t')} \big| x' \big\rangle
$
</p>

où $\theta$ est la fonction de Heaviside (on n'autorise la propagation que **vers le futur**, le $+$ en exposant signifie « retardé »).

</div>

<br>

<div id="theo">

Le propagateur est *la* **solution élémentaire de l'équation de Schrödinger**, avec la condition aux limites «&nbsp;causale&nbsp;» ($G^+ = 0$ pour $t < t'$).

</div>

<br>

<div id="preuve">

Calculons $(\mathrm i\partial_t - \hat H_x)\\,G^+$&nbsp;:

Posons $\tau = t - t'$ et $G^+ = -\mathrm i\\,\theta(\tau) K(\tau)$ avec $K(\tau) \equiv \langle x| \mathrm e^{-\mathrm i\hat H \tau} |x'\rangle$, en notant que $\partial_t = \partial_\tau$ à $t'$ fixé. 

<ul>
<li>$\theta'(\tau) = \delta(\tau)$ au sens des distributions.</li>
<li>$\delta(\tau) K(\tau) = \delta(\tau) K(0)$ (le Dirac ne « voit » que $\tau = 0$), et $K(0) = \langle x | \mathrm e^{0} | x'\rangle = \langle x | x' \rangle = \delta(x - x')$.</li>
<li> $\partial_\tau K(\tau) = \langle x| (-i\hat H)\, \mathrm e^{-\mathrm i\hat H\tau} |x'\rangle = -\,\mathrm i\, \hat H_x\, K(\tau)$
   où $\hat H_x$ est l'opérateur différentiel agissant sur la variable $x$ (c'est la définition même de la représentation position&nbsp;: $\langle x|\hat H \hat A|x'\rangle = \hat H_x \langle x|\hat A|x'\rangle$).</li>
</ul>

On a donc&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_t G^+ = -\,\mathrm i\Big[\underbrace{\delta(\tau)\, K(\tau)}_{=\ \delta(\tau)\,\delta(x-x')} + \theta(\tau)\, \partial_\tau K(\tau)\Big]
= -\,\mathrm i\,\delta(\tau)\,\delta(x-x') \;-\; \mathrm i\,\theta(\tau)\,\big(-\mathrm i\hat H_x K\big)
$
</p>


Multiplions par $\mathrm i$ et regroupons&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\,\partial_t G^+
= \underbrace{\mathrm i\cdot(- \mathrm i)}_{=\,1}\,\delta(\tau)\,\delta(x-x')
\;+\; \hat H_x \underbrace{\big[-\mathrm i\,\theta(\tau) K(\tau)\big]}_{=\ G^+}
= \delta(t-t')\,\delta(x-x') + \hat H_x\, G^+
$
</p>


C'est-à-dire

<p style="text-align:center;">
$\displaystyle
\big(\mathrm i\partial_t - \hat H_x\big)\, G^+ = \delta(t-t')\,\delta(x-x')
$
</p>


</div>



Cela fait du propagateur une **fonction de Green**.


Le propagateur contient donc **toute la dynamique** puisque&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi(x, t) = \mathrm i \int G^+(x, t\,;\, x', t') \psi(x', t')\, \mathrm{d}x' \quad (t > t')
$
</p>

De $\mathrm e^{-\mathrm i\hat H(t-t')} = \mathrm e^{-\mathrm i\hat H(t-t'')} \mathrm e^{-\mathrm i\hat H(t''-t')}$ et de la relation de fermeture $\int |x''\rangle\langle x''|\mathrm{d}x'' = \mathbb 1$, on tire la **loi de composition** ($t > t'' > t'$) :

<div id="theo">

<p style="text-align:center;">
$\displaystyle
G^+(x,t\,;\,x',t') = \mathrm i\int \mathrm{d}x''\; G^+(x,t\,;\,x'',t'')\, G^+(x'',t''\,;\,x',t')
$
</p>

</div>


L'amplitude d'aller de $x'$ à $x$ est la **somme sur tous les points intermédiaires** des amplitudes des trajets en deux étapes[^1]. On obtient là un équivalent du **principe de Huygens** pour l'amplitude quantique&nbsp;: chaque point $x''$ atteint à l'instant $t''$ se comporte comme une source secondaire d'amplitude. C'est ce mécanisme qui rend possibles à la fois l'intégrale de chemin et la lecture «&nbsp;diagrammatique&nbsp;» de la théorie des perturbations que l'on va découvrir dans la suite.


[^1]: On retrouve les deux règles de composition des amplitudes de Feynman&nbsp;:<ul><li>événements **successifs** → les amplitudes se **multiplient**&nbsp;;</li><li>alternatives **indiscernables** (par où est-elle passée ?) → les amplitudes s'**additionnent** (ici, s'intègrent).</li></ul>

<u>Rq</u>&nbsp;: si $t''$ sort de l'intervalle, l'un des $\theta$ s'annule et le membre de droite est nul alors que le gauche ne l'est pas. Les propagateurs *retardés* ne composent que dans l'ordre chronologique.


<br>



### Représentation spectrale

Insérons une base propre de $\hat H$, $\hat H |n\rangle = E_n |n\rangle$, $\phi_n(x) = \langle x | n\rangle$, et posons $\tau = t - t'$. Le propagateur devient&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
G^+(x, x'\,;\, \tau) = -\mathrm i \theta(\tau) \sum_n \phi_n(x) \phi_n^*(x') \mathrm e^{-\mathrm i E_n \tau}
$
</p>

</div>

<br>

<div id="preuve">

Il suffit d'insérer la relation de fermeture pour s'en assurer&nbsp;:

<div id="grosseformule" style="margin-top:-1em;margin-bottom:-0.5em;">

$$
\begin{aligned}
\langle x|\mathrm e^{-\mathrm i\hat H\tau}|x'\rangle &= \sum_n \langle x| \mathrm e^{-\mathrm i\hat H\tau}|n\rangle \langle n|x'\rangle \\\\
&= \sum_n \mathrm e^{-\mathrm iE_n\tau} \langle x|n\rangle\langle n|x'\rangle\\\\
&= \sum_n \mathrm e^{-\mathrm iE_n\tau} \phi_n(x)\phi_n^*(x')
\end{aligned}
$$

</div>
</div>

Pour propager de $x'$ à $x$ pendant $\tau$, on **décompose** l'état initial localisé $|x'\rangle$ sur les modes stationnaires (le poids du mode $n$ est $\phi_n^*(x')$). Chaque mode **tourne** dans le plan complexe à sa fréquence propre (les états stationnaires ne font qu'accumuler une phase), puis on **recompose** en $x$ (facteur $\phi_n(x)$). Décomposer–faire tourner–recomposer&nbsp;: c'est le mode d'emploi universel des problèmes linéaires, et le propagateur en est la forme condensée.

Passons en « espace des énergies » par transformée de Fourier en temps.

<div id="def">

<p style="text-align:center;">
$\displaystyle
\tilde G^+(x, x'\,;\, E) \;=\; \int_{-\infty}^{+\infty} \mathrm{d}\tau\; \mathrm e^{\mathrm iE\tau}\, G^+(x, x'\,;\, \tau)
$
</p>

</div>

$\int_{-\infty}^{+\infty}$ se réduit à $\int_0^{\infty}$ à cause du $\theta(\tau)$.

<u>Problème</u>&nbsp;: l'intégrale $\int_0^{\infty} \mathrm e^{\mathrm i(E - E_n)\tau}\\,\mathrm{d}\tau$ ne converge pas (l'intégrande oscille sans s'amortir). 

<u>Remède</u>&nbsp;: donner à l'énergie une partie imaginaire infinitésimale, $E \to E + \mathrm i\varepsilon$ avec $\varepsilon \to 0^+$ *à la fin du calcul*, ce qui amortit l'oscillation&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_0^{\infty} \mathrm e^{\mathrm i(E - E_n + i\varepsilon)\tau} \,\mathrm{d}\tau = \frac{\mathrm i}{E - E_n + \mathrm i\varepsilon}
$
</p>


On obtient la **représentation spectrale**&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\tilde{G}^+(x, x'\,;\, E) = \sum_n \frac{\phi_n(x) \phi_n^*(x')}{E - E_n + i\varepsilon}
$
</p>

</div>

Finalement, on n'a pas calculé la transformée de $G^+$, mais celle de $G^+(\tau) \\,\mathrm e^{-\varepsilon\tau}$ en décrétant que cela donnera bien $\tilde{G}^+$ dans la limite $\varepsilon \to 0^+$. La section suivante vérifie que cette expression est bien la bonne.

- les **pôles** de $\tilde{G}^+(E)$ (situés en $E_n - \mathrm i\varepsilon$, juste sous l'axe réel) sont les **énergies propres**&nbsp;;
- les **résidus** sont les produits de fonctions d'onde $\phi_n(x)\phi_n^*(x')$.

Autrement dit&nbsp;: *mesurer le propagateur, c'est mesurer le spectre.*<br>
En théorie des champs, ça va devenir&nbsp;: *le pôle du propagateur exact définit la masse physique de la particule* (c'est ce qui donnera un sens à la renormalisation de la masse).

{{%notice note%}}
Point notation&nbsp;: on ne distingue pas toujours la transformée de Fourier du propagateur par un ~ étant donné que l'argument nous informe sur la nature de l'objet&nbsp;: temps → propagateur, énergie → transformée du propagateur.
{{%/notice%}}

<br>

### Les pôles encodent la causalité

Vérifions la cohérence de la formule obtenue pour $\tilde{G}^+(E)$ en inversant la transformée de Fourier par le théorème des résidus&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
G^+(\tau) \;\stackrel{?}{=}\; \int_{-\infty}^{+\infty} \frac{\mathrm{d}E}{2\pi}\, \mathrm e^{-\mathrm iE\tau}\, \tilde G^+(E)
$
</p>

</div>

Rien ne garantit a priori que la mémoire de la causalité (le $\theta$) ait survécu au passage en énergie, où il ne reste que des fractions rationnelles. Le calcul par résidus va montrer qu'elle a survécu, et où elle s'est cachée&nbsp;: dans la position des pôles.

Avec $E = x + \mathrm iy$, on a $|\mathrm e^{-\mathrm iE\tau}| = \mathrm e^{y\tau}$. Le lemme de Jordan[^2] impose alors&nbsp;:

- **$\tau > 0$**&nbsp;: pour que ça converge, il faut fermer le contour dans le **demi-plan inférieur** ($y < 0$). On y attrape tous les pôles $E_n - \mathrm i\varepsilon$ ; la somme des résidus redonne $-\mathrm i\sum_n \phi_n \phi_n^*\\, \mathrm e^{-\mathrm iE_n\tau}$ (signe $-$ car on tourne dans le sens négatif).
- **$\tau < 0$**&nbsp;: on ferme dans le **demi-plan supérieur**. Aucun pôle → intégrale nulle. 

C'est la fonction $\theta(\tau)$ qui réapparaît&nbsp;!

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/contoursch6.png" style="box-shadow:none;background:none;">
</div>

Moralité&nbsp;: **le déplacement infinitésimal des pôles** n'est donc pas un détail technique, il **encode les conditions aux limites temporelles**.

<div id="tableau">

| Prescription | Position des pôles | Fonction de Green | Physique |
|---|---|---|---|
| $E_n - \mathrm i\varepsilon$ | tous sous l'axe réel | retardée $G^+$ | tout se propage vers le futur |
| $E_n + \mathrm i\varepsilon$ | tous au-dessus | avancée $G^-$ | tout se propage vers le passé |
| panachée | fréquences $+$ dessous, $-$ dessus | Feynman $\Delta_F$ | particules vers le futur, antiparticules vers le passé |

</div>

La troisième ligne tease chapitre suivant&nbsp;: en théorie relativiste, le spectre en fréquences contient des solutions d'énergie négative réinterprétées comme des antiparticules remontant le temps.

[^2]: Soit $g(E)$ tendant vers $0$ uniformément quand $|E| \to \infty$ dans le demi-plan inférieur. Alors, pour $\tau > 0$, l'intégrale de $g(E) \\, \mathrm e^{-\mathrm iE\tau}$ sur le demi-cercle inférieur de rayon $R$ tend vers $0$ quand $R \to \infty$ (énoncé miroir en haut pour $\tau < 0$). Ici $g(E) = \frac{1}{E - E_n + \mathrm i\varepsilon} \sim \frac 1E \to 0$. L'hypothèse est satisfaite. Donc $$\int_{-\infty}^{+\infty} = \oint_{\mathcal C} - \underbrace{\int_{\text{arc}}}_{\to\\, 0}
$$ où $\mathcal C$ est le contour fermé (droite réelle + arc).



<br>

<div id="preuve">

Exemple&nbsp;: 

Particule libre&nbsp;: $\hat H_0 = \hat p^2/2m$

En Fourier spatial ET temporel, la représentation spectrale se réduit à un seul terme par mode&nbsp;:

$$
\tilde{G}_0^+(\mathbf p\\,;\\, E) = \frac{1}{E - \dfrac{p^2}{2m} + \mathrm i\varepsilon}.
$$

Un pôle unique sur la relation de dispersion&nbsp;: «&nbsp;une particule libre, c'est un pôle qui se promène&nbsp;».

</div>

<br>

### Théorie des perturbations et équation de Dyson

Faisons maintenant intervenir une interaction $V$ dans le système. Écrivons $\hat H = \hat H_0 + \hat V$ et appelons $G_0$ le propagateur libre (connu) et $G$ le propagateur exact (cherché). 

En représentation énergie&nbsp;:

<div id="def">

$$
G = \frac{1}{E - \hat H_0 - \hat V + \mathrm i\varepsilon}
$$

$$
G_0 = \frac{1}{E - \hat H_0 +\mathrm i\varepsilon}
$$


</div>

Il s'agit en réalité de $G^+$ et $G_0^+$ comme l'atteste la présence de $+i\varepsilon$ (en l'absence d'ambigüité, on se passe du $+$ pour alléger l'écriture).

L'identité matricielle $\dfrac{1}{A - B} = \dfrac{1}{A} + \dfrac{1}{A} B \dfrac{1}{A - B}$ (à vérifier en multipliant par $A - B$) donne l'**équation de Dyson**&nbsp;:

<div id="theo">
<div id="grosseformule">

$$
G = G_0 + G_0\\, \hat V\\, G
\Longleftrightarrow
G = G_0 + G_0 \hat V G_0 + G_0 \hat V G_0 \hat V G_0 + \cdots
$$

</div>
</div>

<br>

<div id="preuve">

Suffit de poser $A=E - \hat H_0 + i\varepsilon$ et $B=\hat V$ et de réutiliser l'identité matricielle récursivement sur le nouveau $\frac{1}{A-B}$ obtenu.

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/decomprop.png" style="box-shadow:none;background:none;">
</div>

**Lecture diagrammatique**&nbsp;:

- une ligne = un propagateur libre $G_0$ (la particule vole librement)&nbsp;;
- un vertex = un facteur $\hat V$ (elle diffuse une fois sur le potentiel)&nbsp;;
- on **somme sur toutes les positions et instants intermédiaires** (en représentation position, chaque terme est une intégrale sur les points d'interaction).

La série dit : *amplitude exacte = (jamais diffusé) + (diffusé une fois, n'importe où) + (diffusé deux fois, n'importe où) + …* Ce sont déjà des diagrammes de Feynman (il ne manque que la seconde quantification pour que les vertex deviennent des créations/annihilations de particules).

<u>Remarque</u>&nbsp;: la forme fermée $G = (G_0^{-1} - \hat V)^{-1}$ montre qu'une série infinie de diagrammes peut se resommer en déplaçant le pôle. C'est le prototype de la **self-énergie** $\Sigma$ et de la masse renormalisée qu'on rencontrera plus loin ($G^{-1} = G_0^{-1} - \Sigma$).

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/formuledyson.png" style="box-shadow:none;background:none;">
</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\text{opérateur linéaire } \hat L
\;\xrightarrow{\ \hat L\,G = \delta\ }\;
\text{réponse impulsionnelle } G
\;\xrightarrow{\ \text{superposition}\ }\;
\text{solution avec source quelconque}
$
</p>

<p style="text-align:center;">
$\displaystyle
\langle x,t\,|\,x',t'\rangle
\;\xrightarrow{\ \times\,\theta(t-t')\ }\;
G^+
\;\xrightarrow{\ \text{Fourier}\ }\;
\tilde G^+(E) = \sum_n \frac{\lvert n\rangle\langle n\rvert}{E - E_n + \mathrm i\varepsilon}
\;\xrightarrow{\ \text{pôles}\ }\;
\text{spectre}
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat H = \hat H_0 + \hat V
\;\xrightarrow{\ \text{Dyson}\ }\;
G = G_0 + G_0 V G_0 + G_0 V G_0 V G_0 + \cdots
\;\xrightarrow{\ \text{dessin}\ }\;
\text{diagrammes}
$
</p>

### Pièges

<ul>
<li>Une fonction de Green n'est pas <i>la</i> solution&nbsp;: c'est la réponse à une source ponctuelle, dont toutes les autres se déduisent par superposition. Elle n'est définie qu'à une solution de l'équation homogène près, et ce sont les <b>conditions aux limites</b> qui la fixent.</li>
<li>Le $\mathrm i\varepsilon$ n'est pas une commodité de calcul&nbsp;: c'est <b>la causalité</b>. Le déplacer d'un côté ou de l'autre de l'axe réel échange fonction de Green retardée et avancée, donc échange passé et futur.</li>
<li>Les pôles sont en $E_n - \mathrm i\varepsilon$, donc <b>tous</b> dans le demi-plan inférieur pour $G^+$. C'est ce qui permet de fermer le contour par le haut pour $t < t'$ et d'obtenir zéro, autrement dit de ne rien propager vers le passé.</li>
<li>Dans la série de Dyson, chaque $V$ est une interaction <b>ponctuelle</b> et chaque $G_0$ une propagation <b>libre</b>. Ce découpage est un artefact du développement, pas une chronologie observable&nbsp;: on ne peut pas dater les chocs.</li>
<li>Convolution et produit s'échangent par transformée de Fourier, et c'est tout l'intérêt du passage en $E$&nbsp;: la série de Dyson y devient une série <b>géométrique</b>, sommable en $\tilde G = (\tilde G_0^{-1} - \tilde V)^{-1}$.</li>
</ul>

<br>

## Propagateurs et champs

Le chapitre précédent a établi le programme&nbsp;: le propagateur est une fonction de Green, ses pôles portent le spectre, et la position infinitésimale des pôles code les conditions aux limites temporelles. Ce chapitre exécute ce programme pour un champ relativiste, où trois nouveautés surgissent&nbsp;:

<ul>
<li>L'objet élémentaire n'est plus $\langle x|\mathrm e^{-\mathrm i\hat H\tau}|x'\rangle$ mais $\langle 0|\hat\phi(x)\hat\phi(y)|0\rangle$&nbsp;: <b>créer</b> une particule du vide en $y$, la <b>détruire</b> en $x$ (en théorie des champs, le nombre de particules n'est pas conservé et l'opérateur de champ est précisément l'objet qui crée et détruit).</li>
<li><b>Les antiparticules</b>&nbsp;: le spectre relativiste contient des fréquences des deux signes. Il faut pouvoir propager les fréquences positives vers le futur et les négatives vers le passé. C'est l'<b>ordre chronologique</b> $T$ qui accomplit cela. Il correspond au contour « panaché » du <a href="./#tableau">tableau</a> du chapitre précédent.</li>
<li>La récompense&nbsp;: $\Delta_F(p) = \dfrac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}$, une première brique des diagrammes de Feynman. Et déjà, en régime statique, l'explication des forces par échange de particules virtuelles (Yukawa).</li>
</ul>
<br>

### L'amplitude élémentaire $D(x-y)$

<u>Rappels</u>&nbsp;:

<ul>
<li><b>Champ scalaire réel</b>&nbsp;: $\hat\phi(x) = \int \frac{\mathrm{d}^3p}{(2\pi)^{3/2}} \frac{1}{\sqrt{2E_{\mathbf p}}}
  \Big( \hat a_{\mathbf p}\, \mathrm e^{-\mathrm ip\cdot x} + \hat a^\dagger_{\mathbf p} \, \mathrm e^{+\mathrm ip\cdot x} \Big)\Big|_{p^0 = E_{\mathbf p}}  $</li>
  
<li>$ [\hat a_{\mathbf p}, \hat a^\dagger_{\mathbf q}] = \delta^{(3)}(\mathbf p - \mathbf q)$,  tous les autres commutateurs sont nuls.</li>

<li>La mesure $
  \int \widetilde{\mathrm{d}p} \;\equiv\; \int \frac{\mathrm{d}^3 p}{(2\pi)^3\, 2E_{\mathbf p}}$ est invariante de Lorentz (le $(2\pi)^3$ vient de la fusion des deux $(2\pi)^{3/2}$ des développements en modes).</li>
</ul>

<div id="def">

On définit l'amplitude «&nbsp;créer une particule du vide en $y$, la détruire en $x$&nbsp;»&nbsp;:

$$
D(x-y) = \langle 0|\hat\phi(x)\\,\hat\phi(y)|0\rangle
$$

</div>

<br>

<div id="theo">

$$
D(x-y) = \int \widetilde{\mathrm{d}p}\\;\\; \mathrm e^{-\mathrm ip\cdot(x-y)}\Big|\_{p^0 = E_{\mathbf p}}
$$

</div>

<br>

<div id="preuve">

En développant sur les modes (variables muettes $\mathbf p$ pour $\hat\phi(x)$, $\mathbf q$ pour $\hat\phi(y)$), quatre valeurs moyennes apparaissent&nbsp;:

<ul>
<li>$\langle 0|\hat a_{\mathbf p}\hat a_{\mathbf q}|0\rangle = 0$ (l'opérateur de droite annihile le vide)&nbsp;;</li>
<li>$\langle 0|\hat a^\dagger_{\mathbf p}\hat a_{\mathbf q}|0\rangle = 0$ (doublement mort&nbsp;: $\hat a_{\mathbf q}|0\rangle = 0$ <i>et</i> $\langle 0|\hat a^\dagger_{\mathbf p} = 0$)&nbsp;;</li>
<li>$\langle 0|\hat a^\dagger_{\mathbf p}\hat a^\dagger_{\mathbf q}|0\rangle = 0$ (l'opérateur de gauche crée sur le bra)&nbsp;;</li>
<li>$\langle 0|\hat a_{\mathbf p}\hat a^\dagger_{\mathbf q}|0\rangle$&nbsp;: le seul terme non trivial. On le normal-ordonne à la main via le commutateur&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
\hat a_{\mathbf p}\hat a^\dagger_{\mathbf q} = \hat a^\dagger_{\mathbf q}\hat a_{\mathbf p} + [\hat a_{\mathbf p}, \hat a^\dagger_{\mathbf q}]
\Longrightarrow
\langle 0|\hat a_{\mathbf p}\hat a^\dagger_{\mathbf q}|0\rangle = \delta^{(3)}(\mathbf p - \mathbf q)
$$

</div>
</li>
</ul>

En recollant, seul le terme 4 survit, avec ses exponentielles $e^{-ip\cdot x} e^{+iq\cdot y}$&nbsp;:

<div id="grosseformule" style="margin-bottom:-1em;margin-top:-1em;">

$$
D(x-y) = \int \frac{\mathrm{d}^3p\\,\mathrm{d}^3q}{(2\pi)^3}
\frac{\mathrm e^{-\mathrm ip\cdot x + \mathrm iq\cdot y}}{\sqrt{4E_{\mathbf p}E_{\mathbf q}}}\\,
\delta^{(3)}(\mathbf p - \mathbf q)
= \int \widetilde{\mathrm{d}p}\\;\\; \mathrm e^{-\mathrm ip\cdot(x-y)}
$$

</div>

(le $\delta^{(3)}$ a absorbé l'intégrale sur $\mathbf q$ et fusionné les deux $1/\sqrt{2E}$ en $1/2E_{\mathbf p}$).

</div>

**L'amplitude de propagation est un pur effet de non-commutation**. Si les $\hat a$ commutaient avec les $\hat a^\dagger$, $D$ serait nul&nbsp;: rien ne se propagerait.


Deux remarques importantes sur $D$&nbsp;:

<ul>
<li>$D$ est une solution de Klein–Gordon <b>homogène</b>&nbsp;: $(\partial^2 + m^2)D = 0$ (chaque onde plane du paquet est sur la couche de masse). Ce n'est donc <b>pas</b> une fonction de Green (il manque le $\theta$, exactement comme à la section précédente où c'était la dérivée de $\theta$ qui produisait le $\delta$).</li>
<li>$D$ <b>ne s'annule pas hors du cône de lumière</b>&nbsp;: pour une séparation de genre espace, $D(0, \mathbf r) \sim \mathrm e^{-mr}$ (petite, mais non nulle, sur une longueur de Compton $1/m$). Faut-il s'inquiéter pour la causalité&nbsp;? Non, et la suite dit pourquoi.</li>
</ul>

<br>

### Causalité

<div id="theo">

Pour $z = x - y$ de genre <b>espace</b> ($z^2 < 0$)&nbsp;:

$$
[\hat\phi(x), \hat\phi(y)] = 0
$$

</div>

<br>

<div id="preuve">

<b>Étape 1&nbsp;: calcul du commutateur.</b> Mêmes claculs que pour $D$, mais seuls les crochets croisés survivent&nbsp;:

<p style="text-align:center;">
$\displaystyle
[\hat\phi(x), \hat\phi(y)]
= \int \frac{\mathrm{d}^3p\,\mathrm{d}^3q}{(2\pi)^3\sqrt{4E_{\mathbf p}E_{\mathbf q}}}
\Big\{ \mathrm e^{-\mathrm ip\cdot x + \mathrm iq\cdot y}\underbrace{[\hat a_{\mathbf p}, \hat a^\dagger_{\mathbf q}]}_{+\delta^{(3)}} +\, \mathrm e^{+\mathrm ip\cdot x - \mathrm iq\cdot y}\underbrace{[\hat a^\dagger_{\mathbf p}, \hat a_{\mathbf q}]}_{-\delta^{(3)}} \Big\}
= \int \widetilde{\mathrm{d}p}\, \big( \mathrm e^{-\mathrm ip\cdot z} - \mathrm e^{+\mathrm ip\cdot z} \big) = D(z) - D(-z)
$
</p>

Remarque&nbsp;: il ne reste aucun opérateur. Le commutateur est un simple nombre, un multiple de l'identité (ce que Dirac appellait un «&nbsp;<i>c</i>-nombre&nbsp;»), le même dans tous les états. La causalité du champ libre est cinématique, pas dynamique.

<b>Étape 2&nbsp;: réduction au cas purement spatial.</b> Si $z^2 < 0$, alors $|z^0| < |\mathbf z|$, et le boost le long de $\mathbf z$ de vitesse $\beta = z^0/|\mathbf z|$ (licite car $|\beta| < 1$ <i>précisément parce que</i> $z$ est de genre espace) amène $z$ sur la forme $z = (0, \mathbf r)$. Par l'invariance de Lorentz de $D$, il suffit de traiter ce cas.

<b>Étape 3&nbsp;: parité en $\mathbf p$.</b> Pour $z = (0, \mathbf r)$, $p\cdot z = -\mathbf p\cdot\mathbf r$, donc

<p style="text-align:center;">
$\displaystyle
D(z) - D(-z) = \int \widetilde{\mathrm{d}p}\, \big( \mathrm e^{+\mathrm i\mathbf p\cdot\mathbf r} - \mathrm e^{-\mathrm i\mathbf p\cdot\mathbf r} \big)
\;\overset{\mathbf p \to -\mathbf p}{=}\; 0
$
</p>

le changement de variable étant licite car la mesure est paire ($E_{-\mathbf p} = E_{\mathbf p}$).

</div>

Pour un intervalle de genre temps, par contre, le commutateur n'est pas nul&nbsp;: pour $z^2 > 0$, on peut amener $z$ sur $(t, \mathbf 0)$, et alors $D(z) - D(-z) = -2\mathrm i\int \widetilde{\mathrm{d}p}\\,\sin(E_{\mathbf p}t) \neq 0$. Le renversement $z \to -z$ exigerait de renverser le temps, ce qui n'appartient pas au groupe propre orthochrone. L'asymétrie est exactement la bonne&nbsp;: l'influence causale vit <i>dans</i> le cône, et seulement là.

#### Pourquoi le commutateur est le bon critère de causalité

<ul style="margin-top:1em;">
<li><b>Corrélation ≠ signal.</b> $D(z) \neq 0$ hors du cône dit que le vide contient des <i>corrélations</i> à distance de genre espace. Mais des corrélations ne transportent pas d'information (c'est la situation EPR&nbsp;: deux photons intriqués sont parfaitement corrélés hors du cône sans qu'Alice puisse envoyer un message à Bob). </li>
</ul>

Ce qui violerait la relativité, c'est qu'une intervention en $y$ modifie une probabilité mesurable en $x$.

<ul style="margin-top:0.5em;">
<li><b>Non-signalisation.</b> Toute intervention en $y$ s'exprime par des opérateurs construits sur les champs au voisinage de $y$. Si tous les opérateurs locaux en $x$ commutent avec tous ceux en $y$ (ce que garantit $[\hat\phi(x), \hat\phi(y)] = 0$ qui s'étend au cas des polynômes de champs), les statistiques de mesure en $x$ sont rigoureusement insensibles à ce qui a été fait en $y$. C'est l'axiome de <b>micro-causalité</b>.</li>
</ul>

{{%notice note%}}
Pour le champ complexe, $[\hat\psi(x), \hat\psi^\dagger(y)] = D_a(z) - D_b(-z)$, où $D_a$ est construit sur les modes de particules et $D_b$ sur ceux d'antiparticules. L'annulation hors du cône exige que les deux intégrales se compensent identiquement, ce qui force l'existence du second jeu de modes <b>et</b> l'égalité des masses. Autrement dit&nbsp;: la causalité <i>impose</i> les antiparticules, de même masse que les particules (c'est le cœur de la conférence de Feynman «&nbsp;[The reason for antiparticles](https://scispace.com/pdf/elementary-particles-and-the-laws-of-physics-the-reason-for-qvzqjmen7f.pdf)&nbsp;»).
{{%/notice%}}

<br>

### Le propagateur de Feynman

<div id="def">

<div id="grosseformule" style="margin-bottom:-1em;">

$$
\Delta(x, y) = \big\langle 0 \big|\\, T\\, \hat\phi(x)\\, \hat\phi^\dagger(y)\\, \big| 0 \big\rangle
= \theta(x^0 - y^0)\\, D(x - y) + \theta(y^0 - x^0)\\, D(y - x)
$$

</div>

où $T$ range les opérateurs <b>du plus ancien (à droite) au plus récent (à gauche)</b>.<br>
Pour le champ réel, $\hat\phi^\dagger = \hat\phi$.

</div>

Le $T$ généralise le $\theta(\tau)$ retardé du chapitre précédent&nbsp;: au lieu d'imposer un seul sens du temps, il dit «&nbsp;quel que soit l'ordre des dates, on crée d'abord, on détruit ensuite&nbsp;».


Seul le **champ complexe** permet de comprendre le bien-fondé physique de cette définition.

<u>Rappels sur le champ complexe</u>&nbsp;:

<ul style="margin-bottom:1em;">
<li>Le champ complexe porte deux jeux de modes indépendants ($\hat a$&nbsp;: particules, $\hat b$&nbsp;: antiparticules)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat\psi(x) = \int \frac{\mathrm{d}^3p}{(2\pi)^{3/2}\sqrt{2E_{\mathbf p}}}
\Big( \hat a_{\mathbf p} \, \mathrm e^{-\mathrm ip\cdot x} + \hat b^\dagger_{\mathbf p} \, \mathrm e^{+\mathrm ip\cdot x} \Big)
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat\psi^\dagger(x) = \int \frac{\mathrm{d}^3p}{(2\pi)^{3/2}\sqrt{2E_{\mathbf p}}}
\Big( \hat b_{\mathbf p} \, \mathrm e^{-\mathrm ip\cdot x} + \hat a^\dagger_{\mathbf p} \, \mathrm e^{+\mathrm ip\cdot x} \Big)
$
</p>

</li>

<li>et il porte aussi une symétrie $U(1)$, $\hat\psi \to \mathrm e^{\mathrm i\alpha}\hat\psi$, de charge conservée $\hat Q = \int \mathrm{d}^3p\, \big( \hat a^\dagger_{\mathbf p}\hat a_{\mathbf p} - \hat b^\dagger_{\mathbf p}\hat b_{\mathbf p} \big)$. On vérifie sur les modes que $[\hat Q, \hat\psi^\dagger] = +\hat\psi^\dagger$&nbsp;: $\hat\psi^\dagger(y)$ dépose une unité de charge en $y$ (en créant une particule <i>ou</i> en détruisant une antiparticule), et $\hat\psi(x)$ en retire une.
</li>

</ul>

<div id="preuve">

Calculons les deux ordres chronologiques de $\Delta(x,y) = \langle 0|T\hat\psi(x)\hat\psi^\dagger(y)|0\rangle$.

<b>Cas $x^0 > y^0$</b>&nbsp;: l'ordre est $\hat\psi(x)\hat\psi^\dagger(y)$.<br>
Dans $\hat\psi^\dagger(y)|0\rangle$, seul $\hat a^\dagger$ agit. Une particule est créée en $y$.<br>
Dans $\langle 0|\hat\psi(x)$, seule la partie $\hat a$ peut la détruire.<br>
Seul survit $\langle 0|\hat a_{\mathbf p}\hat a^\dagger_{\mathbf q}|0\rangle = \delta^{(3)}(\mathbf p - \mathbf q)$, d'où

$$
\langle 0|\hat\psi(x)\hat\psi^\dagger(y)|0\rangle = \int \widetilde{\mathrm{d}p}\\, \mathrm e^{-\mathrm ip\cdot(x-y)} = D(x-y)
$$

<b>Une particule, créée en $y$, se propage vers le futur et meurt en $x$.</b>

<b>Cas $y^0 > x^0$</b>&nbsp;: l'ordre est $\hat\psi^\dagger(y)\hat\psi(x)$.<br>
Cette fois, dans $\hat\psi(x)|0\rangle$, la partie $\hat a$ tue le vide. C'est $\hat b^\dagger$ qui agit&nbsp;: une antiparticule est créée en $x$.<br>
Et c'est la partie $\hat b$ de $\hat\psi^\dagger(y)$ qui la détruit.<br>
Seul survit $\langle 0|\hat b_{\mathbf q}\hat b^\dagger_{\mathbf p}|0\rangle$, d'où

$$
\langle 0|\hat\psi^\dagger(y)\hat\psi(x)|0\rangle = \int \widetilde{\mathrm{d}p}\\, \mathrm e^{-\mathrm ip\cdot(y-x)} = D(y-x)
$$

<b>Une antiparticule, créée en $x$, se propage vers le futur et meurt en $y$.</b>

</div>

La lecture par la **charge** unifie les deux histoires&nbsp;: dans la première, une charge $+1$ voyage de $y$ vers $x$&nbsp;; dans la seconde, une charge $-1$ voyage de $x$ vers $y$. C'est le même courant de charge, de $y$ vers $x$, dans les deux cas. Un seul objet, $\Delta$, raconte un unique transport de charge, et l'ordre des dates décide seulement <i>qui</i> le transporte.

C'est l'énoncé précis de l'interprétation de Feynman des énergies négatives&nbsp;: une solution d'énergie négative se propageant vers le passé <i>est</i> une antiparticule d'énergie positive se propageant vers le futur.

Sur les diagrammes, la flèche d'une ligne suit **le flot de charge**, pas le sens du mouvement, d'où les flèches «&nbsp;à rebours&nbsp;» des lignes d'antiparticules.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/propfeynman.png" style="box-shadow:none;background:none;">
</div>

<u>Rq</u>&nbsp;: pour le champ réel, $\hat b = \hat a$. La particule est sa propre antiparticule, la charge est nulle, et les deux histoires deviennent indiscernables. L'interprétation reste vraie, mais dégénérée&nbsp;: la lecture antiparticule n'est limpide que pour le champ complexe.

$T$ n'est <b>covariant</b> que grâce à la <b>micro-causalité</b>.<br>
Le $\theta(x^0 - y^0)$ caché dans $T$ a l'air de trahir la relativité&nbsp;: pour une séparation de genre <b>espace</b>, l'ordre chronologique de $x$ et $y$ dépend du référentiel&nbsp;! Le produit $T\hat\psi(x)\hat\psi^\dagger(y)$ semble mal défini… <i>sauf</i> si, précisément dans cette zone dangereuse, les deux ordres donnent le même opérateur, c'est-à-dire si $[\hat\psi(x), \hat\psi^\dagger(y)] = 0$ hors du cône. La micro-causalité est exactement la condition qui rend le produit chronologique sans ambiguïté, donc Lorentz-invariant, donc la théorie des perturbations covariante.


<br>

### Anatomie du propagateur

<div id="theo">
<div id="grosseformule">

$$
\Delta(x - y) = \int \frac{\mathrm{d}^4 p}{(2\pi)^4}\\; \frac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}\\; \mathrm e^{-\mathrm ip\cdot(x-y)}
$$

</div>
</div>

où **$p^0$ est une variable d'intégration indépendante de $\mathbf p$** (on intègre sur tout $\mathbb R^4$, pas seulement sur la couche de masse).

<div id="preuve">

$p^2 = (p^0)^2 - |\mathbf{p}|^2$ et $E_{\mathbf{p}}^2 = |\mathbf{p}|^2 + m^2$, doù $p^2 - m^2 = (p^0)^2 - |\mathbf{p}|^2 - m^2 = (p^0)^2 - E_{\mathbf{p}}^2$.

En posant $\varepsilon' = \frac{\varepsilon}{2E_{\mathbf p}}$, on a au premier ordre&nbsp;:

<div id="grosseformule" style="margin-bottom:-0.5em;margin-top:-0.5em;">

$$
p^2 - m^2 + \mathrm i\varepsilon = \big(p^0 - (E_{\mathbf p} - \mathrm i\varepsilon')\big)\big(p^0 + (E_{\mathbf p} - \mathrm i\varepsilon')\big),
$$

</div>

</div>

Les deux pôles sont en $p^0 = +E_{\mathbf p} - \mathrm i\varepsilon'$ (fréquence positive, sous l'axe) et $p^0 = -E_{\mathbf p} + \mathrm i\varepsilon'$ (fréquence négative, au-dessus).

<!-- Figure à créer : plan complexe de p⁰, pôle +E_p − iε' en bas à droite, pôle −E_p + iε' en haut à gauche, fermeture en bas pour x⁰>y⁰ (sens horaire), en haut pour x⁰<y⁰ -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/contourfeynman.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

Vérifions que la formule encadrée redonne $\theta(x^0-y^0)D(x-y) + \theta(y^0-x^0)D(y-x)$. Faisons l'intégrale sur $p^0$ à $\mathbf p$ fixé, avec $t = x^0 - y^0$ (mêmes gestes que l'inversion par résidus du chapitre précédent).

<b>Cas $t > 0$</b>&nbsp;: $|e^{-\mathrm ip^0 t}| = e^{\mathrm{Im}(p^0)t}$ décroît pour $\mathrm{Im}\\, p^0 < 0$&nbsp;: on referme <b>en bas</b> (lemme de Jordan pour l'arc). Le contour horaire ($-2\pi \mathrm i \sum \text{Rés}$) attrape le seul pôle du bas, $p^0 = E_{\mathbf p} - \mathrm i\varepsilon'$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int \frac{\mathrm{d}p^0}{2\pi} \frac{\mathrm i\, e^{-\mathrm ip^0 t}}{(p^0 - E_{\mathbf p} +\mathrm i\varepsilon')(p^0 + E_{\mathbf p} - \mathrm i\varepsilon')}
= \frac{-2\pi \mathrm i}{2\pi}\cdot \frac{\mathrm i\, e^{-iE_{\mathbf p} t}}{2E_{\mathbf p}}
= \frac{\mathrm e^{-\mathrm iE_{\mathbf p} t}}{2E_{\mathbf p}}
$
</p>

L'amortissement $e^{-\varepsilon' t}$, qui a justifié toute la manœuvre, s'évapore (comme toujours) à la fin quand on prend $\lim_{\varepsilon \to 0^+}$.

En recollant l'intégrale sur $\mathbf p$&nbsp;: $\Delta(t>0) = \int \widetilde{\mathrm{d}p}\\, e^{-ip\cdot(x-y)} = D(x-y)$. Fréquences <b>positives</b> propagées <b>vers le futur</b>.

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>
Le recollement en détail
</summary>

Avec $\mathbf r = \mathbf x - \mathbf y$, la métrique $(+,-,-,-)$ scinde l'exponentielle&nbsp;: $\mathrm e^{-\mathrm i p\cdot(x-y)} = e^{-ip^0t}\\,e^{+i\mathbf p\cdot\mathbf r}$, et $(2\pi)^4 = (2\pi)(2\pi)^3$ répartit les facteurs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta(x-y) = \int \frac{\mathrm{d}^3 p}{(2\pi)^3}\, \mathrm e^{+\mathrm i\mathbf p\cdot\mathbf r}
\underbrace{\left[\int \frac{\mathrm{d}p^0}{2\pi} \frac{\mathrm i\, \mathrm e^{-\mathrm ip^0 t}}{p^2 - m^2 + \mathrm i\varepsilon}\right]}_{=\; \mathrm e^{-\mathrm iE_{\mathbf p}t}/2E_{\mathbf p} \text{ pour } t>0}
= \int \frac{\mathrm{d}^3 p}{(2\pi)^3\, 2E_{\mathbf p}}\, \mathrm e^{-\mathrm iE_{\mathbf p}t + \mathrm i\mathbf p\cdot\mathbf r}
$
</p>


Reconnaissance en deux morceaux&nbsp;:

<ul>
<li><i>L'exposant</i>&nbsp;: $E_{\mathbf p}t - \mathbf p\cdot\mathbf r = p\cdot(x-y)$ évalué <b>sur la couche de masse</b> $p^0 = E_{\mathbf p}$. Le résidu a fait le travail d'une fonction delta&nbsp;: il a épinglé le $p^0$ libre sur la couche de masse.</li>
<li><i>La mesure</i>&nbsp;: le $1/2E_{\mathbf p}$ sorti du résidu reconstitue exactement $\widetilde{\mathrm{d}p}$, et c'est le <i>même</i> $1/2E_{\mathbf p}$ que celui de $\delta\big((p^0)^2 - E_{\mathbf p}^2\big) = [\delta(p^0 - E_{\mathbf p}) + \delta(p^0 + E_{\mathbf p})]/2E_{\mathbf p}$ de la mesure invariante.</li>
</ul>

D'où $\Delta(t>0) = \int \widetilde{\mathrm{d}p}\\, \mathrm e^{-\mathrm ip\cdot(x-y)}\big|\_{p^0 = E_{\mathbf p}} = D(x-y)$.

<u>Piège du cas $t<0$</u>&nbsp;: le même recollement donne $\int \widetilde{\mathrm{d}p}\\, \mathrm e^{+\mathrm iE_{\mathbf p}t + \mathrm i\mathbf p\cdot\mathbf r}$, alors que la cible est $D(y-x) = \int \widetilde{\mathrm{d}p}\\, \mathrm e^{+\mathrm iE_{\mathbf p}t - \mathrm i\mathbf p\cdot\mathbf r}$&nbsp;: il faut un dernier changement de variable $\mathbf p \to -\mathbf p$ (licite car la mesure est paire) pour conclure.

</details>

<b>Cas $t < 0$</b>&nbsp;: on referme <b>en haut</b>, le contour antihoraire attrape le pôle $p^0 = -E_{\mathbf p} + i\varepsilon'$, et le même calcul donne $D(y-x)$&nbsp;: fréquences <b>négatives</b> propagées <b>vers le passé</b> (antiparticule de Feynman).

</div>

Retenir la logique&nbsp;: on n'a rien «&nbsp;choisi&nbsp;» avec le $i\varepsilon$, on a traduit l'exigence physique (particules vers le futur, antiparticules vers le passé) en une position de pôles.

<div id="theo">

$\Delta$ est une <b>fonction de Green de Klein–Gordon</b>&nbsp;:

$$
(\partial^2 + m^2)\\, \Delta(x - y) = -\mathrm i\\,\delta^{(4)}(x - y)
$$

</div>

<br>

<div id="preuve">

En Fourier, $\partial^2 \mathrm e^{-\mathrm ip\cdot x} = -p^2 \mathrm e^{-\mathrm ip\cdot x}$, donc

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
(\partial^2 + m^2)\Delta(x-y)
&= \int \frac{\mathrm{d}^4p}{(2\pi)^4} \frac{\mathrm i(-p^2 + m^2)}{p^2 - m^2 + \mathrm i\varepsilon} \mathrm e^{-\mathrm ip\cdot(x-y)}\\
&= -\mathrm i \int \frac{\mathrm{d}^4p}{(2\pi)^4} \mathrm e^{-\mathrm ip\cdot(x-y)} \\\
&= -\mathrm i\,\delta^{(4)}(x-y)
\end{aligned}
$
</p>


</div>

Même structure qu'au chapitre précédent&nbsp;: solution élémentaire de l'opérateur libre, avec les conditions aux limites (ici celles de Feynman) codées par le $+i\varepsilon$.

<br>

### Yukawa&nbsp;: les forces comme échange de particules

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/intyuk.png" style="box-shadow:none;background:none;">
</div>

La figure montre la version <b>dynamique</b> du processus&nbsp;: deux particules entrent, s'échangent un quantum du champ médiateur (la ligne en tirets), et repartent déviées (l'amplitude du processus contient le facteur $\frac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}$ porté par la ligne interne). Le calcul de cette section en est la <b>limite statique</b>&nbsp;: des sources lourdes qui ne reculent pas, pour lesquelles le quantum échangé ne transporte pas d'énergie ($p^0 = 0$)&nbsp;; le facteur devient $\frac{-\mathrm i}{\mathbf q^2 + m^2}$, et c'est sa transformée de Fourier qui va donner le potentiel. 

<u>Rq</u>&nbsp;: la ligne en tirets est le dessin d'un terme de calcul, pas la photographie d'un projectile (cf. la section «&nbsp;particules réelles, particules virtuelles&nbsp;» plus bas).


Couplons le champ à une source statique ponctuelle de «&nbsp;charge&nbsp;» $g$ en $\mathbf r_1$. En régime statique ($p^0 = 0$), Klein–Gordon avec source devient un pur problème de fonction de Green au sens du chapitre précédent&nbsp;:

<div id="def">

$$
\big(-\nabla^2 + m^2\big)\\, \phi(\mathbf r) = g\\, \delta^{(3)}(\mathbf r - \mathbf r_1)
$$

</div>

Opérateur à coefficients constants&nbsp;: son <b>symbole</b> (le nom savant du polynôme $L(\mathbf q)$ du chapitre précédent), c'est-à-dire sa valeur propre sur les ondes planes, $\hat L\\, \mathrm e^{\mathrm i\mathbf q\cdot\mathbf r} = L(\mathbf q)\\, \mathrm e^{\mathrm i\mathbf q\cdot\mathbf r}$) vaut ici $L(\mathbf q) = \mathbf q^2 + m^2$.<br>
<i>Aucun zéro réel</i> ($L \geq m^2 > 0$)&nbsp;: pas de mode propagatif en statique, donc aucune subtilité de contour ni de $\mathrm i\varepsilon$&nbsp;; les seuls zéros sont en $\mathbf q$ complexe, $q = \pm im$. D'où&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\phi(\mathbf r) = g \int \frac{\mathrm{d}^3 q}{(2\pi)^3} \frac{\mathrm e^{\mathrm i\mathbf q\cdot(\mathbf r - \mathbf r_1)}}{\mathbf q^2 + m^2}
= \frac{g}{4\pi} \frac{\mathrm e^{-m|\mathbf r - \mathbf r_1|}}{|\mathbf r - \mathbf r_1|}
$
</p>

</div>

$g \int \frac{\mathrm{d}^3 q}{(2\pi)^3} \frac{\mathrm e^{\mathrm i\mathbf q\cdot(\mathbf r - \mathbf r_1)}}{\mathbf q^2 + m^2}$, c'est $\phi = G * \text{source}$ avec $\tilde G(\mathbf q) = 1/L(\mathbf q)$.<br>
La source étant $g\\,\delta^{(3)}$ posée en $\mathbf r_1$, la convolution se réduit à $\phi(\mathbf r) = g\\, G(\mathbf r - \mathbf r_1)$&nbsp;: la fonction de Green translatée au point de frappe (invariance par translation, encore elle).<br>
La maxime «&nbsp;décomposer – faire tourner – recomposer&nbsp;» a ici sa version statique&nbsp;: décomposer – <b>diviser par le symbole</b> – recomposer.


<div id="preuve">

<details>
<summary>
L'intégrale pas à pas
</summary>

On veut $I(r) = \int \frac{\mathrm{d}^3 q}{(2\pi)^3} \frac{\mathrm e^{\mathrm i\mathbf q\cdot\mathbf r}}{\mathbf q^2 + m^2}$ pour $r = |\mathbf r| > 0$.

<b>On se place en coordonnées sphériques</b> avec un axe polaire selon $\mathbf r$&nbsp;: $\mathbf q\cdot\mathbf r = qr\cos\theta$ et $\mathrm{d}^3q = q^2\sin(\theta)\mathrm{d}q\\,\mathrm{d}\theta\\,\mathrm{d}\phi$. 

L'intégrale sur $\phi$ donne $2\pi$.

On pose $u = \cos\theta$&nbsp;:

$$
\int_0^{\pi} \mathrm e^{\mathrm iqr\cos\theta}\sin\theta\\,\mathrm{d}\theta = \int_{-1}^{1} \mathrm e^{\mathrm iqru}\mathrm{d}u = \frac{2\sin(qr)}{qr}
$$

d'où $I(r) = \dfrac{1}{2\pi^2 r}\displaystyle \int_0^\infty \dfrac{q\sin(qr)}{q^2 + m^2}\mathrm{d}q$.

L'intégrande est pair en $q$ (deux fonctions impaires au numérateur, une paire au dénominateur), donc

$$
I(r) = \frac{1}{4\pi^2 r} \int_{-\infty}^{+\infty} \frac{q\sin(qr)}{q^2 + m^2}\mathrm{d}q
= \frac{1}{4\pi^2 r}\\, \mathrm{Im} \int_{-\infty}^{+\infty} \frac{q\\, \mathrm e^{\mathrm iqr}}{q^2 + m^2}\mathrm{d}q
$$

$q^2 + m^2 = (q - \mathrm im)(q + \mathrm im)$, pôles simples en $q = \pm \mathrm im$, sur l'axe <i>imaginaire</i>.

Contour&nbsp;: pour $r > 0$, $|\mathrm e^{\mathrm iqr}| = \mathrm e^{-r\\,\mathrm{Im}\\, q}$ décroît dans le demi-plan supérieur&nbsp;: on referme en haut (Jordan tue l'arc). Le contour n'enferme que $q = +\mathrm im$.

Résidu (contour antihoraire&nbsp;: $+2\pi \mathrm i \sum \text{Rés}$)&nbsp;:

$$
\mathrm{Rés}\_{q = \mathrm im} \frac{q\\, \mathrm e^{\mathrm iqr}}{(q-\mathrm im)(q+\mathrm im)} = \frac{\mathrm im\\, \mathrm e^{-mr}}{2\mathrm im} = \frac{\mathrm e^{-mr}}{2}
\Longrightarrow
\int_{-\infty}^{+\infty} = \mathrm i\pi\\, \mathrm e^{-mr}
$$

On recolle&nbsp;: $\mathrm{Im}(\mathrm i\pi \mathrm e^{-mr}) = \pi \mathrm e^{-mr}$, d'où $I(r) = \dfrac{\mathrm e^{-mr}}{4\pi r}$

</details>

</div>

L'énergie d'une seconde source $g$ placée en $\mathbf r_2$ dans ce champ est le **potentiel de Yukawa**&nbsp;:

<div id="theo">

$$
V(r) = -\frac{g^2}{4\pi} \frac{e^{-mr}}{r}, \qquad r = |\mathbf r_1 - \mathbf r_2|
$$

</div>

Ce potentiel est **attractif** entre charges de même signe (fait remarquable de l'échange scalaire).

{{%notice note%}}
Le caractère attractif/répulsif vient du <b>spin du médiateur</b>&nbsp;: l'échange de spin pair (scalaire, graviton) fait s'<i>attirer</i> les charges identiques, l'échange de spin impair (photon) les fait se <i>repousser</i>. D'où «&nbsp;la gravitation attire tout&nbsp;» (spin 2) et «&nbsp;les charges semblables se repoussent&nbsp;» (spin 1).
{{%/notice%}}

Trois lectures de ce résultat&nbsp;:

<ul>
<li><b>C'est la limite statique du propagateur de Feynman</b>&nbsp;: $\Delta$ à $p^0 = 0$ vaut $\dfrac{-\mathrm i}{\mathbf q^2 + m^2}$&nbsp;; le calcul complet par échange d'un quantum entre les deux sources (chapitres suivants) redonne $V(r)$. <i>Une force = l'échange de quanta virtuels du champ médiateur.</i></li>
<li><b>La portée est littéralement la distance du pôle à l'axe réel</b>&nbsp;: le résidu apporte $\mathrm e^{\mathrm iqr}|_{q=\mathrm im} = \mathrm e^{-mr}$. Unités restaurées&nbsp;: portée $= \hbar/mc$, la longueur d'onde de Compton réduite. Conversion pratique ($\hbar c \simeq 197$ MeV·fm)&nbsp;: portée nucléaire $\sim 1{,}4$ fm $\Rightarrow$ médiateur de $\sim 140$ MeV. Yukawa prédit l'existence de ce méson (le nom méson vient de sa masse intermédiaire entre l'électron et le proton) en 1935, et le pion (méson pi) est découvert en 1947 (prix Nobel en 1949).</li>
<li><b>La limite $m \to 0$ redonne Coulomb</b>&nbsp;: le pôle glisse vers l'origine, $V \to -g^2/4\pi r$, portée infinie (cohérent avec un médiateur sans masse), et l'on retrouve la fonction de Green du laplacien du chapitre précédent.<br>
Mêmes mathématiques en matière condensée&nbsp;: l'écrantage de Thomas–Fermi donne un potentiel identique $\mathrm e^{-k_{TF}r}/r$ (le photon y acquiert une masse effective par le milieu).</li>
</ul>

<br>

### Particules réelles, particules virtuelles

Ce que dit, morceau par morceau, $\Delta(p) = \dfrac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}$&nbsp;:

<ul>
<li><b>Particule réelle</b> = quantum d'excitation d'un mode&nbsp;: l'état $\hat a^\dagger_{\mathbf p}|0\rangle$, <b>sur la couche de masse</b> $p^2 = m^2$ par construction. Vrai vecteur de l'espace de Hilbert&nbsp;: existe indépendamment de tout processus, se propage arbitrairement loin (le pôle domine la propagation à longue distance), fait <i>clic</i> dans un détecteur.</li>
<li><b>Particule virtuelle</b> = <b>ligne interne</b> d'un diagramme&nbsp;: un domaine d'intégration ($p^0$ délié de $\mathbf p$, donc $p^2 \neq m^2$ génériquement), pas un état. Elle n'appartient pas à l'espace de Hilbert, n'a ni trajectoire ni durée de vie propre.</li>
<li><b>Le pôle $p^2 = m^2$</b> = <b>la masse physique</b>&nbsp;: traduction relativiste du slogan «&nbsp;les pôles portent le spectre&nbsp;». Avec les interactions, le pôle du propagateur exact se déplacera&nbsp;: sa position définira la masse renormalisée, son résidu la constante $Z$ de renormalisation du champ. Et si le pôle s'enfonce franchement sous l'axe ($p^0 \simeq m - \mathrm i\Gamma/2$)&nbsp;: particule instable, de durée de vie $1/\Gamma$.</li>
</ul>

#### Paradoxe de «&nbsp;l'énergie empruntée&nbsp;»

L'image populaire («&nbsp;le quantum emprunte $\Delta E \sim mc^2$ pendant $\Delta t \lesssim \hbar/\Delta E$, donc parcourt $\lesssim \hbar/mc$&nbsp;») donne la bonne portée, mais semble violer la conservation de l'énergie. Le nœud du paradoxe&nbsp;: entre l'état initial et l'état final (les seuls qu'on mesure) l'énergie est rigoureusement conservée. La question ne se pose que pour l'étape <i>intermédiaire</i>, celle où le quantum «&nbsp;vole&nbsp;» d'une source à l'autre. Or cette étape n'est jamais observée&nbsp;: c'est un terme dans une somme (la série de perturbations), et on est libre de découper cette somme de deux façons.

<ul>
<li>Première comptabilité (celle de l'image populaire). On raconte le processus comme un film horodaté&nbsp;: à $t_1$, la source 1 émet le quantum&nbsp;; entre $t_1$ et $t_2$, il vole&nbsp;; à $t_2$, la source 2 l'absorbe. Dans ce récit, on exige que le quantum intermédiaire soit une <i>vraie</i> particule, d'énergie $E_{\mathbf p} = \sqrt{\mathbf p^2 + m^2}$ (sur couche). Mais alors le bilan ne tombe pas juste&nbsp;: pendant $[t_1, t_2]$, l'énergie de l'état intermédiaire dépasse l'énergie initiale (il a fallu fabriquer le quantum d'au moins $mc^2$). La théorie ne s'en émeut pas&nbsp;: cet état n'est jamais mesuré, et son poids dans la somme est <i>pénalisé</i> par l'écart (ce sont exactement les dénominateurs en $1/(E - E_{\text{interm}})$ de la série de Dyson du chapitre précédent). Et un écart $\Delta E$ ne pèse que sur des durées $\lesssim \hbar/\Delta E$&nbsp;: simple fait de transformée de Fourier (une composante dont la fréquence est décalée de $\Delta E/\hbar$ se brouille par interférence au-delà de $\hbar/\Delta E$). L'heuristique «&nbsp;$\Delta E \cdot \Delta t$&nbsp;» n'est donc pas un droit de tirage sur une banque d'énergie&nbsp;: c'est la mesure du prix payé par un terme dont le bilan intermédiaire ne tombe pas juste.</li>
<li style="margin-top:0.5em;">Seconde comptabilité (celle des diagrammes de Feynman). On renonce à dater les étapes (prix de la covariance&nbsp;: pour deux événements séparés d'un intervalle de genre espace, l'ordre chronologique dépend du référentiel), et on impose à la place la conservation <i>exacte</i> de la quadri-impulsion à chaque vertex. Le bilan tombe juste partout, à tout instant… mais l'écart a changé de colonne&nbsp;: la ligne interne porte maintenant un $p$ qui ne vérifie pas $p^2 = m^2$ (il est hors couche). Ce n'est plus une vraie particule&nbsp;: c'est une variable d'intégration.</li>
</ul>

Bilan. Même amplitude totale, deux découpages du même calcul&nbsp;: soit de <i>vraies particules</i> intermédiaires avec un bilan d'énergie provisoirement faux (et pénalisé), soit un bilan d'énergie exact avec des objets intermédiaires qui ne sont <i>pas de vraies particules</i>. Ce qui n'existe dans aucune des deux colonnes&nbsp;: une vraie particule <b>et</b> une vraie violation. Rien n'est emprunté, on choisit seulement dans quelle colonne inscrire l'écart, et la physique mesurable (l'amplitude, la portée $\mathrm e^{-mr}$) est identique dans les deux.


#### Gamme des portées

<br>

<div style="overflow-x:auto;">

| Médiateur | Masse | Portée $\hbar/mc$ | Interaction |
|---|---|---|---|
| photon | $0$ | infinie ($V \propto 1/r$) | électromagnétique |
| pion (Yukawa) | $\simeq 140$ MeV | $\simeq 1{,}4$ fm | nucléaire (résiduelle) |
| $W^\pm, Z^0$ | $\simeq 80$–$91$ GeV | $\simeq 2\times 10^{-3}$ fm | faible («&nbsp;faible&nbsp;» surtout parce que <i>courte</i>) |
| gluons | $0$ | <b>pas</b> $1/r$ à grande distance | forte (confinement) |

La dernière ligne est le garde-fou&nbsp;: le raisonnement de Yukawa est <i>perturbatif</i>&nbsp;; pour la QCD à grande distance, le couplage devient fort et la portée effective est gouvernée par le confinement, pas par la masse du médiateur.

</div>

<br>

### Dictionnaire&nbsp;: mécanique quantique ↔ champ scalaire

<div : style="overflow-x:auto;">

| Chapitre précédent (MQ) | Ce chapitre (champ scalaire) |
|---|---|
| $\theta(t-t')$&nbsp;: propagation retardée | $T$&nbsp;: ordre chronologique (deux sens du temps) |
| $(i\partial_t - \hat H)G^+ = \delta\\,\delta$ | $(\partial^2 + m^2)\Delta = -\mathrm i\\,\delta^{(4)}$ |
| Pôles tous en $E_n - \mathrm i\varepsilon$ | Pôles panachés&nbsp;: $+E_{\mathbf p}$ dessous, $-E_{\mathbf p}$ dessus |
| Pôle = niveau d'énergie | Pôle $p^2 = m^2$ = masse physique (résidu → $Z$) |
| $\tilde G_0^+ = \dfrac{1}{E - \mathbf p^2/2m + \mathrm i\varepsilon}$ | $\Delta = \dfrac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}$ |
| Fermeture sur les états propres $\sum_n \lvert n\rangle\langle n\rvert$ | Développement en modes $\hat a_{\mathbf p}, \hat a^\dagger_{\mathbf p}$ |
| Série de Dyson $G_0 + G_0 V G_0 + \cdots$ | Lignes internes des diagrammes de Feynman |

</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\langle 0|\hat\phi(x)\hat\phi(y)|0\rangle = D(x-y)
\;\xrightarrow{\ \text{ne s'annule pas hors du cône}\ }\;
\text{crise de causalité}
$
</p>

<p style="text-align:center;">
$\displaystyle
[\hat\phi(x),\hat\phi(y)] = D(x-y) - D(y-x) = 0 \ \text{hors du cône}
\;\xrightarrow{\ \text{les deux ordres se compensent}\ }\;
\text{causalité sauvée}
$
</p>

<p style="text-align:center;">
$\displaystyle
\Delta_F = \langle 0|T\,\hat\phi(x)\hat\phi(y)|0\rangle
\;\xrightarrow{\ \text{Fourier}\ }\;
\frac{\mathrm i}{p^2 - m^2 + \mathrm i\varepsilon}
\;\xrightarrow{\ \text{statique}\ }\;
V(r) = -\frac{g^2}{4\pi}\frac{\mathrm e^{-mr}}{r}
$
</p>

### Pièges

<ul>
<li>$D(x-y)$ et $\Delta_F(x-y)$ sont <b>deux objets différents</b>. Le premier est une amplitude nue, qui survit hors du cône de lumière&nbsp;; le second est ordonné dans le temps, et c'est lui qui apparaît dans les diagrammes.</li>
<li>Ce n'est pas $D$ qui s'annule hors du cône, c'est le <b>commutateur</b>. La causalité n'exige pas qu'aucune amplitude ne franchisse le cône, mais qu'aucune <b>mesure</b> ne puisse en révéler le franchissement&nbsp;: les deux ordres temporels se compensent exactement.</li>
<li>Le $\mathrm i\varepsilon$ de $\Delta_F$ ne déplace pas les deux pôles du même côté, contrairement au cas non relativiste&nbsp;: $+E_{\mathbf p}$ passe <b>en dessous</b> de l'axe et $-E_{\mathbf p}$ <b>au-dessus</b>. C'est cette disposition panachée qui propage les particules vers le futur et les antiparticules vers le passé.</li>
<li>Une particule <b>virtuelle</b> n'est pas une particule&nbsp;: c'est une variable d'intégration. Elle n'est pas sur sa couche de masse, elle n'est pas observable, et lui prêter une trajectoire ou une durée de vie n'a pas de sens.</li>
<li>L'image de «&nbsp;l'énergie empruntée pendant $\Delta t \sim \hbar/\Delta E$&nbsp;» donne le bon ordre de grandeur pour la portée, mais par un raisonnement faux&nbsp;: l'énergie est conservée exactement à chaque vertex. La portée $\hbar/mc$ sort du <b>pôle</b> du propagateur, pas d'une violation temporaire.</li>
<li>Le signe du potentiel de Yukawa dépend de la nature du médiateur. L'échange d'un <b>scalaire</b> entre sources identiques est toujours <b>attractif</b>&nbsp;; il faudra un champ vectoriel pour que des charges de même signe se repoussent.</li>
</ul>

<br>

{{%notice note%}}
Et maintenant&nbsp;? Nous disposons de l'amplitude élémentaire, $\Delta_F$, et nous avons vu avec la série de Dyson qu'une interaction se décompose en propagations libres entrecoupées de chocs ponctuels. Deux ingrédients, donc, mais aucune méthode systématique pour les combiner.<br><br>
La partie suivante fournit cette méthode&nbsp;: la <b>matrice $S$</b>, qui n'enregistre que ce qu'on sait mesurer, le théorème de <b>Wick</b>, qui convertit mécaniquement les produits chronologiques en produits de propagateurs, et enfin les <b>diagrammes de Feynman</b>, où chaque terme du développement devient un dessin dont on lit l'intégrale directement.
{{%/notice%}}

<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc5">Chapitre précédent</a></td><td><a href="../tqc7">Chapitre suivant</a></td>
    </tr>
</table>
</div>