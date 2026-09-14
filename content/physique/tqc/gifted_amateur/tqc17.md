+++
title = "TQC-17"
date = 2026-08-02T10:00:00+01:00
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
margin-top:0em;
margin-bottom:0.5em;
}
/* Pour rétablir le comportement de details */
details > summary:first-of-type {
  display: list-item;     /* remet le triangle + l'accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}

/* Style spécifique pour le cadre de l'animation */
#animation-container {
    width: 100%;
    height: 450px; 
    background-color: #f4f4f4; /* Fond gris très clair */
    border-radius: 12px;
    overflow: hidden;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Ombre adoucie pour mieux coller au fond clair */
    cursor: pointer; 
}

</style>




# Théorie quantique des champs -- Partie 17

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

Le principe de jauge a produit l'électrodynamique quantique&nbsp;: une symétrie interne $U(1)$ globale, promue en symétrie locale, exige un champ de jauge, et ce champ est le photon. Le résultat est si beau qu'on aimerait le rejouer pour les autres interactions. Mais ni la force faible ni la force forte ne reposent sur $U(1)$&nbsp;: la première est bâtie sur $SU(2) \otimes U(1)$, la seconde sur $SU(3)$. Et ces groupes ont une propriété que $U(1)$ n'avait pas, ils sont **non abéliens**.

<ul>
<li><b>La machinerie.</b> Le premier chapitre reprend le principe de jauge pour un groupe dont les éléments <b>ne commutent pas</b>. Tout se passe comme avant, à un détail près qui change tout&nbsp;: un terme supplémentaire survit dans la transformation du champ de jauge, et il rend la théorie <b>non linéaire même en l'absence de matière</b>. Le champ de jauge devient sa propre source. C'est la théorie de <b>Yang–Mills</b>, et c'est de là que sort la liberté asymptotique.</li>
<li><b>L'application.</b> Le second chapitre construit le <b>modèle de Weinberg–Salam</b>, qui unifie l'électromagnétisme et l'interaction faible. On y écrit le lagrangien d'un Univers <b>plus symétrique que le nôtre</b>, celui des premiers $10^{-12}$ secondes, où électrons et neutrinos sont sans masse et indiscernables&nbsp;; puis on laisse le champ de Higgs briser la symétrie, et l'on regarde ce qui en sort.</li>
</ul>

Ce qui en sort est le monde que nous habitons&nbsp;: un électron massif, un photon sans masse, et trois bosons lourds $W^+$, $W^-$ et $Z^0$ dont les masses furent <b>prédites avant d'être mesurées</b>. C'est l'une des plus grandes réussites de la physique du vingtième siècle.

Notation&nbsp;: les matrices de Pauli sont notées $\boldsymbol\tau$ et non $\boldsymbol\sigma$, pour souligner qu'elles agissent désormais sur un <b>espace interne</b> (l'isospin) et non sur le spin.


## Théorie de jauge non abélienne

### Ce que signifie «&nbsp;non abélien&nbsp;»

<div id="def">

Un groupe est <b>non abélien</b> lorsque ses éléments ne commutent pas&nbsp;: appliquer la transformation $a$ puis $b$ ne donne pas le même résultat que $b$ puis $a$.

</div>

L'exemple le plus familier est le groupe des rotations $SO(3)$. Prenez un livre posé sur une table, tournez-le d'un quart de tour autour de $x$ puis d'un quart de tour autour de $z$&nbsp;; recommencez dans l'ordre inverse. Les deux orientations finales sont différentes.

<!-- FIGURE à redessiner (d'après fig. 46.1 de L&B) : deux rangées de trois vignettes, montrant un livre en perspective avec ses axes x, y, z.
Rangée (a) : le livre dans sa position initiale ; une flèche courbe R1 indique une rotation de pi/2 autour de x ; le livre après R1 ; une flèche courbe R2 indique une rotation de pi/2 autour de z ; le livre final.
Rangée (b) : même départ, mais R2 d'abord puis R1, et le livre final dans une orientation VISIBLEMENT différente.
Encadrer les deux résultats finaux et les relier par un signe « different de » barré. Légende : « Les rotations ne commutent pas : SO(3) est non abélien. C'est cette non-commutativité qui va rendre la théorie de jauge non linéaire. »
<div style="text-align:center;margin:0.8em 0;">
<img src="/livrerotations.png" style="box-shadow:none;background:none;max-width:100%;">
</div>
 -->
 
<div id="animation-container" title="Cliquez pour relancer l'animation">
</div>
 
  <script type="module" src="/js/rotnonabel.js"></script>

$U(1)$, au contraire, est <b>abélien</b>&nbsp;: deux multiplications par une phase donnent toujours le même résultat, quel que soit l'ordre. C'est cette commutativité qui rendait la construction de QED aussi simple. Nous allons voir ce qu'il en coûte de s'en passer.

### Rappel&nbsp;: la théorie de jauge abélienne, en infinitésimal

Reprenons le lagrangien du champ scalaire complexe de la partie&nbsp;5&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = (D^\mu\phi)^\dagger(D_\mu\phi) - m^2\phi^\dagger\phi - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}\quad$
avec
$\displaystyle
\quad D_\mu\phi = (\partial_\mu + \mathrm{i}qA_\mu)\phi
$
</p>

invariant sous les transformations simultanées

<p style="text-align:center;">
$\displaystyle
\phi \to \phi\,\mathrm{e}^{\mathrm{i}\alpha(x)}\quad$
et
$\displaystyle
\quad A_\mu \to A_\mu - \frac{1}{q}\partial_\mu\alpha(x)
$
</p>

Pour préparer le saut vers des groupes plus compliqués, il est commode de tout réécrire en <b>infinitésimal</b>. C'est un simple changement de présentation, mais il rendra la généralisation lisible.

<div id="preuve">

<details>
<summary>L'invariance rejouée en infinitésimal</summary>

En développant $\mathrm e^{\mathrm i\alpha} \simeq 1 + \mathrm i\alpha$ et en ne gardant que le premier ordre&nbsp;:

<p style="text-align:center;">
$\displaystyle
\phi \to (1 + \mathrm{i}\alpha)\phi
\qquad
\partial_\mu\phi \to \partial_\mu\phi + \mathrm{i}(\partial_\mu\alpha)\phi + \mathrm{i}\alpha(\partial_\mu\phi)
\qquad
A_\mu \to A_\mu - \frac{1}{q}\partial_\mu\alpha
$
</p>

<b>Le terme de masse est invariant</b>, les deux phases se compensant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\phi^\dagger\phi \to (\phi^\dagger - \mathrm{i}\alpha\phi^\dagger)(\phi + \mathrm{i}\alpha\phi) = \phi^\dagger\phi + O(\alpha^2)
$
</p>

<b>Et la dérivée covariante se transforme comme $\phi$ lui-même.</b> En reportant les trois lignes ci-dessus&nbsp;:

<p style="text-align:center;">
$\displaystyle
D_\mu\phi \to \partial_\mu\phi + \mathrm{i}(\partial_\mu\alpha)\phi + \mathrm{i}\alpha(\partial_\mu\phi) + \mathrm{i}q\left(A_\mu - \frac{1}{q}\partial_\mu\alpha\right)(\phi + \mathrm{i}\alpha\phi)
$
</p>

Les deux termes en $\partial_\mu\alpha$ se retranchent, et il reste

<p style="text-align:center;">
$\displaystyle
D_\mu\phi \to (1 + \mathrm{i}\alpha)\,D_\mu\phi + O(\alpha^2)
$
</p>

Donc $(D_\mu\phi)^\dagger(D_\mu\phi)$ est invariant, et tout le lagrangien avec lui.

</details>

</div>

<br>

### Yang–Mills&nbsp;: passer à $SU(2)$

En 1954, Chen-Ning Yang et Robert Mills posent la question&nbsp;: peut-on faire la même chose avec un groupe non abélien&nbsp;? La stratégie sera rigoureusement la même, à savoir imposer la symétrie locale, constater le désordre, puis ajouter un champ qui le répare. Mais le résultat sera différent.

Prenons le lagrangien de Dirac pour <b>deux</b> espèces de fermions de même masse, rangées dans un doublet&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\Psi\,(\mathrm{i}\gamma^\mu\partial_\mu - m)\,\Psi$<br>
avec
$\displaystyle
\Psi = \begin{pmatrix} f \\ g \end{pmatrix}$
et
$\displaystyle
\bar\Psi = \begin{pmatrix} \bar f & \bar g \end{pmatrix}
$
</p>

</div>

L'égalité des deux masses est essentielle&nbsp;: c'est elle qui rend le lagrangien insensible aux rotations dans l'espace interne $(f, g)$. C'est le même mécanisme qu'à la partie&nbsp;4, où l'égalité des masses de $\phi_1$ et $\phi_2$ ouvrait la symétrie $U(1)$.

<div id="theo">

<b>Symétrie $SU(2)$ globale</b>

<p style="text-align:center;">
$\displaystyle
\Psi \to \mathrm{e}^{\frac{\mathrm{i}}{2}\boldsymbol\tau\cdot\boldsymbol\alpha}\,\Psi
\qquad
\bar\Psi \to \bar\Psi\,\mathrm{e}^{-\frac{\mathrm{i}}{2}\boldsymbol\tau\cdot\boldsymbol\alpha}
$
</p>

soit, en infinitésimal, $\Psi \to \left(1 + \frac{\mathrm{i}}{2}\boldsymbol\tau\cdot\boldsymbol\alpha\right)\Psi$.

Le paramètre $\boldsymbol\alpha$ a désormais <b>trois</b> composantes, une par générateur du groupe. La charge conservée associée est l'<b>isospin</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{\boldsymbol I} = \int\mathrm{d}^3x\;\hat\Psi^\dagger\,\frac{\boldsymbol\tau}{2}\,\hat\Psi
$
</p>

</div>

C'est l'isospin déjà rencontré à la partie&nbsp;4, avec le champ $\boldsymbol\Phi$ à trois composantes&nbsp;: le champ $\Psi$ porte $I = 1/2$, les particules de type $f$ correspondant à $I_3 = +1/2$ et celles de type $g$ à $I_3 = -1/2$.

L'invariance globale ne pose aucun problème&nbsp;: le terme $\bar\Psi\Psi$ voit les deux exponentielles se compenser, et la dérivée se transforme comme $\Psi$ puisque $\boldsymbol\alpha$ ne dépend pas du point.

**Passons maintenant au local**, en laissant $\boldsymbol\alpha$ dépendre de $x$. Le terme de masse survit, mais la dérivée trahit, exactement comme en $U(1)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu\Psi \to \partial_\mu\Psi + \frac{\mathrm{i}}{2}\big[\boldsymbol\tau\cdot\boldsymbol\alpha(x)\big]\partial_\mu\Psi + \frac{\mathrm{i}}{2}\big[\boldsymbol\tau\cdot\partial_\mu\boldsymbol\alpha(x)\big]\Psi
$
</p>

C'est le dernier terme qui gâche tout. Il faut donc un champ de jauge pour l'absorber.

<div id="def">

<b>Le champ de jauge $\boldsymbol W_\mu$ et la dérivée covariante</b>

<p style="text-align:center;">
$\displaystyle
D_\mu = \partial_\mu - \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol W_\mu(x)
$
</p>

Le champ $\boldsymbol W_\mu$ a <b>trois composantes internes</b>, $(W^1_\mu, W^2_\mu, W^3_\mu)$, une par générateur du groupe&nbsp;; et chacune est un quadrivecteur de Minkowski, avec ses quatre composantes indexées par $\mu$.

</div>

<br>

<div id="theo">

Voilà la première différence de fond avec $U(1)$&nbsp;: la symétrie ne réclame plus <b>un</b> champ de jauge, mais <b>autant qu'il y a de générateurs</b>&nbsp;: trois pour $SU(2)$, huit pour $SU(3)$, d'où les huit gluons de la chromodynamique.

</div>

Reste à déterminer comment $\boldsymbol W_\mu$ doit se transformer pour que la compensation soit exacte. Et c'est là qu'apparaît la vraie nouveauté.

<div id="theo">

<b>Transformation du champ de jauge non abélien</b>

<p style="text-align:center;">
$\displaystyle
\boldsymbol\tau\cdot\boldsymbol W_\mu \;\to\; \boldsymbol\tau\cdot\boldsymbol W_\mu + \frac{1}{g}\,\boldsymbol\tau\cdot(\partial_\mu\boldsymbol\alpha) \;-\; \boldsymbol\tau\cdot(\boldsymbol\alpha \times \boldsymbol W_\mu)
$
</p>

Les deux premiers termes sont l'analogue exact du cas abélien, $A_\mu \to A_\mu - \frac{1}{q}\partial_\mu\alpha$. <b>Le troisième est nouveau, et il ne survit que parce que le groupe est non abélien.</b>

</div>

<br>

<div id="preuve">

<details>
<summary>D'où vient le terme en produit vectoriel&nbsp;?</summary>

<b>Ce qu'on exige</b><br>
Il faut que $D_\mu\Psi$ se transforme comme $\Psi$, c'est-à-dire

<p style="text-align:center;">
$\displaystyle
D_\mu\Psi \to \left(1 + \frac{\mathrm{i}}{2}\boldsymbol\tau\cdot\boldsymbol\alpha(x)\right)D_\mu\Psi
$
</p>

En développant le membre de droite&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu\Psi - \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol W_\mu\Psi + \frac{\mathrm{i}}{2}\boldsymbol\tau\cdot\boldsymbol\alpha\,\partial_\mu\Psi - \left(\frac{\mathrm{i}}{2}\right)^2 g\,[\boldsymbol\tau\cdot\boldsymbol\alpha][\boldsymbol\tau\cdot\boldsymbol W_\mu]\Psi
$
</p>

<b>Ce qu'on obtient</b><br>
Supposons que le champ se transforme en $\boldsymbol W_\mu + \delta\boldsymbol W_\mu$, et calculons directement $D_\mu\Psi$ après transformation. Le résultat contient les mêmes termes, mais le dernier apparaît avec les deux matrices dans l'<b>ordre inverse</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\left(\frac{\mathrm{i}}{2}\right)^2 g\,[\boldsymbol\tau\cdot\boldsymbol W_\mu][\boldsymbol\tau\cdot\boldsymbol\alpha]\Psi
$
</p>

<b>C'est tout le nœud de l'affaire.</b> En $U(1)$, ces deux produits seraient identiques et se compenseraient sans laisser de trace. Ici, $[\boldsymbol\tau\cdot\boldsymbol\alpha]$ et $[\boldsymbol\tau\cdot\boldsymbol W_\mu]$ ne commutent pas, et leur différence subsiste.

<b>La comparaison</b> des deux expressions donne alors la condition sur $\delta\boldsymbol W_\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol\tau\cdot\delta\boldsymbol W_\mu = \frac{1}{g}\boldsymbol\tau\cdot(\partial_\mu\boldsymbol\alpha) + \frac{\mathrm{i}}{2}\Big\{[\boldsymbol\tau\cdot\boldsymbol\alpha][\boldsymbol\tau\cdot\boldsymbol W_\mu] - [\boldsymbol\tau\cdot\boldsymbol W_\mu][\boldsymbol\tau\cdot\boldsymbol\alpha]\Big\}
$
</p>

L'accolade est un <b>commutateur</b>, et il ne s'annule que dans le cas abélien.

<b>La conclusion</b> vient de l'identité de Pauli, déjà établie à la partie&nbsp;13 sous sa forme vectorielle&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\boldsymbol\tau\cdot\boldsymbol a)(\boldsymbol\tau\cdot\boldsymbol b) = (\boldsymbol a\cdot\boldsymbol b) + \mathrm{i}\,\boldsymbol\tau\cdot(\boldsymbol a\times\boldsymbol b)
$
</p>

Le produit scalaire, symétrique, disparaît dans le commutateur&nbsp;; il ne reste que le produit vectoriel, antisymétrique, en double. D'où

<p style="text-align:center;">
$\displaystyle
\boldsymbol\tau\cdot\delta\boldsymbol W_\mu = \frac{1}{g}\boldsymbol\tau\cdot(\partial_\mu\boldsymbol\alpha) - \boldsymbol\tau\cdot(\boldsymbol\alpha\times\boldsymbol W_\mu)
$
</p>

<b>Le produit vectoriel est donc la signature de la non-commutativité</b>, et l'identité de Pauli est exactement l'outil qui la traduit.

</details>

</div>

<br>

### Le champ $\boldsymbol W_\mu$&nbsp;: interactions et dynamique

Comment le champ de jauge se couple-t-il aux fermions&nbsp;? Par couplage minimal, comme toujours&nbsp;: il suffit de développer le terme en dérivée covariante.

<p style="text-align:center;">
$\displaystyle
\bar\Psi\,\mathrm{i}\gamma^\mu D_\mu\,\Psi = \bar\Psi\,\mathrm{i}\gamma^\mu\partial_\mu\,\Psi + \frac{g}{2}\,\bar\Psi\gamma^\mu\,\boldsymbol\tau\cdot\boldsymbol W_\mu\,\Psi
$
</p>

à comparer avec la version $U(1)$, $\bar\phi\\,\mathrm{i}\gamma^\mu D_\mu\phi = \bar\phi\\,\mathrm{i}\gamma^\mu\partial_\mu\phi - q\\,\bar\phi\gamma^\mu A_\mu\phi$. La structure est identique&nbsp;: là où le photon se couplait à la charge $q$, les excitations de $\boldsymbol W_\mu$ se couplent à l'<b>isospin</b> avec une intensité fixée par $g$.

<div id="theo">

Par analogie avec le vertex de QED, qui valait $-\mathrm{i}q\gamma^\mu$, le vertex $\bar\Psi\Psi W_\mu$ contribue un facteur proportionnel à $\mathrm{i}g\boldsymbol\tau\gamma^\mu$.

On attend donc trois particules $W^1$, $W^2$, $W^3$ <b>sans masse</b>, analogues au photon, chacune avec deux polarisations transverses.

</div>

Reste à donner une dynamique au champ de jauge lui-même. En $U(1)$, c'était le terme $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$ qui donnait l'électromagnétisme. Le candidat évident serait $-\frac{1}{4}\boldsymbol G_{\mu\nu}\cdot\boldsymbol G^{\mu\nu}$ avec $\boldsymbol G_{\mu\nu} = \partial_\mu\boldsymbol W_\nu - \partial_\nu\boldsymbol W_\mu$.

**Mais ce candidat ne convient pas.** Pour que $\boldsymbol G_{\mu\nu}$ se transforme correctement, il faut un terme de plus.

<div id="theo">

<b>Tenseur de champ non abélien</b>

<p style="text-align:center;">
$\displaystyle
\boldsymbol G_{\mu\nu} = \partial_\mu\boldsymbol W_\nu - \partial_\nu\boldsymbol W_\mu + g\,(\boldsymbol W_\mu \times \boldsymbol W_\nu)
$
</p>

Le tenseur de champ est une fonction <b>non linéaire</b> du champ de jauge. Nous voici donc en présence d'une <b>théorie en interaction, même en l'absence de matière</b>.

</div>

<br>

<div id="theo">

<b>Lagrangien de Yang–Mills</b>

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\Psi\,(\mathrm{i}\gamma^\mu D_\mu - m)\,\Psi - \frac{1}{4}\,\boldsymbol G_{\mu\nu}\cdot\boldsymbol G^{\mu\nu}
$
</p>

</div>

<br>

<div id="preuve">

Une jolie façon d'obtenir ce tenseur, plus rapide que la vérification directe, consiste à calculer le <b>commutateur des dérivées covariantes</b>.

En $U(1)$, on trouve $[D_\mu, D_\nu] = \mathrm{i}q(\partial_\mu A_\nu - \partial_\nu A_\mu) = \mathrm{i}q\,F_{\mu\nu}$&nbsp;: le tenseur de champ est là, tout entier.

En $SU(2)$, le même calcul donne

<p style="text-align:center;">
$\displaystyle
[D_\mu, D_\nu] = \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\big(\partial_\mu\boldsymbol W_\nu - \partial_\nu\boldsymbol W_\mu + g\,\boldsymbol W_\mu\times\boldsymbol W_\nu\big) = \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol G_{\mu\nu}
$
</p>

et le terme en produit vectoriel apparaît tout seul, produit par la non-commutativité des matrices $\boldsymbol\tau$. <b>Le tenseur de champ est la courbure de la dérivée covariante</b>, et c'est cette lecture qui se généralise à tous les groupes.

</div>

### Le champ de jauge devient sa propre source

C'est la conséquence la plus spectaculaire de la non-linéarité.

En développant $\boldsymbol G_{\mu\nu}\cdot\boldsymbol G^{\mu\nu}$, le produit vectoriel engendre des termes à <b>trois</b> et à <b>quatre</b> champs $\boldsymbol W$. Autrement dit, des vertex où les bosons de jauge interagissent <b>entre eux</b>, sans aucun fermion.

<!-- FIGURE à redessiner (d'après fig. 46.2 de L&B) : le vertex à trois bosons de jauge. Un point central d'où partent trois lignes ondulées, disposées en Y (une vers le bas, deux vers le haut en V). Étiqueter chaque ligne par W et son indice interne. Ajouter à côté, plus petit, le vertex à quatre bosons : un point central d'où partent quatre lignes ondulées en croix. Légende : « Les bosons de jauge non abéliens interagissent entre eux : le champ est sa propre source. Rien de tel pour le photon, qui ne porte pas de charge électrique. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/autointbos.png" style="box-shadow:none;background:none;">
</div>

<div id="theo">

<b>La raison est une question de charge.</b> Le photon ne porte <b>aucune</b> charge électrique&nbsp;: il ne peut donc pas se coupler à lui-même, et les interactions photon–photon n'existent pas en électromagnétisme abélien.

Le champ $\boldsymbol W_\mu$, au contraire, porte une unité d'isospin ($I = 1$). Comme c'est précisément l'isospin qui joue le rôle de charge dans cette théorie, <b>le champ de jauge est chargé sous sa propre interaction</b>. Il peut donc agir comme sa propre source.

</div>

<br>

<div id="preuve">

<details>
<summary>L'isospin des trois bosons, et pourquoi $W^\pm$ apparaîtra plus loin</summary>

L'algèbre de l'isospin étant celle du moment cinétique ordinaire, on classe les excitations du champ $\boldsymbol W_\mu$ (de $I = 1$) par leur troisième composante $I_z$, exactement comme on classerait les états d'un spin 1.

<ul style="margin-top:0.5em;">
<li>$I_z = 0$&nbsp;: créé et détruit par $\hat W^3_\mu$&nbsp;;</li>
<li>$I_z = +1$&nbsp;: créé par $\frac{1}{\sqrt 2}(\hat W^1_\mu + \mathrm{i}\hat W^2_\mu)$, détruit par $\frac{1}{\sqrt 2}(\hat W^1_\mu - \mathrm{i}\hat W^2_\mu)$&nbsp;;</li>
<li>$I_z = -1$&nbsp;: créé par $\frac{1}{\sqrt 2}(\hat W^1_\mu - \mathrm{i}\hat W^2_\mu)$, détruit par $\frac{1}{\sqrt 2}(\hat W^1_\mu + \mathrm{i}\hat W^2_\mu)$.</li>
</ul>

<b>Ce sont ces combinaisons qui deviendront les $W^\pm$ du modèle électrofaible</b>, au chapitre suivant. Le passage de la base «&nbsp;cartésienne&nbsp;» $(W^1, W^2)$ à la base «&nbsp;sphérique&nbsp;» $(W^+, W^-)$ n'est rien d'autre que le changement de base habituel du moment cinétique.

</details>

</div>

### La liberté asymptotique, enfin expliquée

L'auto-interaction du champ de jauge donne la clé d'un phénomène rencontré à la partie sur la renormalisation, mais dont le mécanisme était resté sans explication.

Rappelons le cas abélien. Autour d'une charge électrique, le vide se polarise en paires électron–positron virtuelles, qui l'<b>écrantent</b>&nbsp;: vue de loin, la charge paraît plus petite. C'est ce que dit le signe positif de la fonction $\beta$ de QED.

<div id="theo">

<b>Dans le cas non abélien, un second mécanisme s'ajoute, et il l'emporte.</b>

L'écrantage par paires de quarks existe toujours. Mais l'auto-interaction permet en plus à un <b>gluon de se scinder en deux gluons</b>. Or les gluons portent eux-mêmes de la charge de couleur&nbsp;: cette cascade <b>répand</b> donc de la charge de même signe autour du quark, au lieu de la neutraliser.

Le résultat est un <b>anti-écrantage</b>&nbsp;: la charge de couleur effective <b>augmente</b> avec la distance. L'interaction devient plus forte quand on s'éloigne, et plus faible quand on s'approche.

</div>

C'est la <b>liberté asymptotique</b>, et l'on comprend enfin d'où vient le signe opposé de la fonction $\beta$ de QCD. Le changement de signe ne tombe pas du ciel&nbsp;: il vient de ce que le médiateur est chargé sous sa propre interaction, ce qui n'arrive jamais dans une théorie abélienne.

<br>

### Briser la symétrie d'une théorie de jauge non abélienne

Dernier acte du chapitre, et répétition générale pour le suivant. Reprenons le mécanisme de Higgs, mais avec un champ de jauge non abélien.

Prenons la théorie de jauge $SO(3)$ d'un champ scalaire réel à trois composantes $\boldsymbol\Phi = (\phi_1, \phi_2, \phi_3)$, munie d'une interaction en $\Phi^4$ et, c'est le point crucial, d'un terme de masse de signe **positif**, donc brisant la symétrie&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac{1}{2}D^\mu\boldsymbol\Phi\cdot D_\mu\boldsymbol\Phi + \frac{m^2}{2}\boldsymbol\Phi\cdot\boldsymbol\Phi - \lambda(\boldsymbol\Phi\cdot\boldsymbol\Phi)^2 - \frac{1}{4}\boldsymbol G_{\mu\nu}\cdot\boldsymbol G^{\mu\nu}
$<br>
avec $D_\mu\boldsymbol\Phi = \partial_\mu\boldsymbol\Phi - g\,\boldsymbol\Phi\times\boldsymbol W_\mu$.
</p>

</div>

Le potentiel possède une <b>sphère</b> de minima, de rayon $|\boldsymbol\Phi_0| = \left(\frac{m^2}{4\lambda}\right)^{1/2}$ dans l'espace interne. Briser la symétrie, c'est choisir un point sur cette sphère&nbsp;; prenons la direction 3, soit $\boldsymbol\Phi_0 = |\boldsymbol\Phi_0|\\,\hat{\boldsymbol e}_3$.

<div id="theo">

<b>La jauge unitaire</b> 

Les termes croisés entre composantes de $\boldsymbol\Phi$ et de $\boldsymbol W_\mu$ rendent le lagrangien illisible. Mais nous sommes libres de faire une transformation de jauge <b>différente en chaque point</b>&nbsp;: choisissons celle qui aligne $\boldsymbol\Phi$ sur la direction 3 partout.

<p style="text-align:center;">
$\displaystyle
\boldsymbol\Phi(x) = \big[|\boldsymbol\Phi_0| + \chi(x)\big]\,\hat{\boldsymbol e}_3
$
</p>

Les composantes $\Phi_1$ et $\Phi_2$ ont <b>disparu de la description</b>, et avec elles tous les termes croisés.

</div>

<br>

<div id="preuve">

Voyons ce que devient la dérivée covariante dans cette jauge. 

Le produit vectoriel $\boldsymbol\Phi\times\boldsymbol W_\mu$ mélange les composantes, et comme $\boldsymbol\Phi$ ne pointe plus que selon $\hat{\boldsymbol e}_3$&nbsp;:

<p style="text-align:center;">
$\displaystyle
D_\mu\Phi_1 = g\,W^2_\mu\big(|\boldsymbol\Phi_0| + \chi\big)
\qquad
D_\mu\Phi_2 = -g\,W^1_\mu\big(|\boldsymbol\Phi_0| + \chi\big)
\qquad
D_\mu\Phi_3 = \partial_\mu\chi
$
</p>

d'où, en élevant au carré et en ne gardant que les termes quadratiques&nbsp;:

<p style="text-align:center;">
$\displaystyle
(D_\mu\boldsymbol\Phi)^2 = (\partial_\mu\chi)^2 + g^2|\boldsymbol\Phi_0|^2\Big[(W^1_\mu)^2 + (W^2_\mu)^2\Big] + \ldots
$
</p>

<b>Deux des trois champs de jauge ont acquis un terme quadratique</b>, c'est-à-dire une masse. Le troisième, $W^3_\mu$, n'apparaît pas&nbsp;: c'est celui qui pointe dans la direction du vide choisi, donc celui dont la transformation laisse $\boldsymbol\Phi_0$ invariant.

</div>

Le lagrangien brisé s'écrit alors

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac{1}{2}(\partial_\mu\chi)^2 - 4|\boldsymbol\Phi_0|\lambda\chi^2 + \frac{g^2|\boldsymbol\Phi_0|^2}{2}\Big[(W^1_\mu)^2 + (W^2_\mu)^2\Big] - \frac{1}{4}\boldsymbol G_{\mu\nu}\cdot\boldsymbol G^{\mu\nu} + \ldots
$
</p>

<div id="theo">

<b>Le bilan de la brisure</b>

<p style="text-align:center;overflow-x:auto,">
$\displaystyle
\begin{pmatrix} 3\ \text{champs scalaires massifs } \boldsymbol\Phi \\ 3\ \text{champs de jauge sans masse } \boldsymbol W_\mu \end{pmatrix}
\;\longrightarrow\;
\begin{pmatrix} 1\ \text{champ scalaire massif } \chi \\ 2\ \text{champs vectoriels massifs } W^1_\mu, W^2_\mu \\ 1\ \text{champ sans masse } W^3_\mu \end{pmatrix}
$
</p>

Les champs $W^1_\mu$ et $W^2_\mu$ ont <b>mangé</b> les modes de Goldstone $\Phi_1$ et $\Phi_2$, et ont pris la masse $g|\boldsymbol\Phi_0|$.

</div>

<br>

<div id="theo">

<b>Le comptage des degrés de liberté est conservé</b>, et c'est le meilleur contrôle du mécanisme.

À gauche&nbsp;: 3 scalaires massifs ($1$ degré chacun) et 3 champs sans masse de type photon ($2$ degrés chacun), soit $3 + 6 = 9$.

À droite&nbsp;: 1 scalaire massif ($1$), 2 champs vectoriels massifs ($3$ degrés chacun, la polarisation longitudinale s'étant ajoutée) et 1 champ sans masse ($2$), soit $1 + 6 + 2 = 9$.

<b>Rien n'a été créé ni perdu&nbsp;:</b> le degré de liberté du mode de Goldstone est devenu la polarisation longitudinale du boson massif.

</div>

Une dernière remarque, et elle est troublante. Rien n'empêche d'identifier le champ sans masse restant au champ électromagnétique, $W^3_\mu(x) = A_\mu(x)$. Cela pose immédiatement la question&nbsp;: **l'électromagnétisme de notre Univers serait-il le résidu sans masse d'une théorie non abélienne brisée&nbsp;?** Le chapitre suivant répond oui, avec un groupe un peu plus compliqué que $SO(3)$.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
SU(2)\ \text{globale}
\;\xrightarrow{\ \boldsymbol\alpha \to \boldsymbol\alpha(x)\ }\;
\text{3 champs de jauge } \boldsymbol W_\mu
\;\xrightarrow{\ \text{non-commutativité}\ }\;
\boldsymbol W_\mu \to \boldsymbol W_\mu + \tfrac{1}{g}\partial_\mu\boldsymbol\alpha - \boldsymbol\alpha\times\boldsymbol W_\mu
$
</p>

<p style="text-align:center;">
$\displaystyle
[D_\mu, D_\nu] = \tfrac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol G_{\mu\nu}
\;\Longrightarrow\;
\boldsymbol G_{\mu\nu} = \partial_\mu\boldsymbol W_\nu - \partial_\nu\boldsymbol W_\mu + g\,\boldsymbol W_\mu\times\boldsymbol W_\nu
\;\xrightarrow{\ \text{non linéaire}\ }\;
\text{vertex } WWW,\ WWWW
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{le médiateur porte la charge}
\;\Longrightarrow\;
\text{gluon} \to \text{deux gluons}
\;\Longrightarrow\;
\text{anti-écrantage}
\;\Longrightarrow\;
\text{liberté asymptotique}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{brisure de } SO(3)
\;\xrightarrow{\ \text{jauge unitaire}\ }\;
2\ \text{bosons massifs} + 1\ \text{sans masse}
\;\xrightarrow{\ 9 = 9\ }\;
\text{degrés de liberté conservés}
$
</p>

### Pièges

<ul>
<li>Le nombre de champs de jauge n'est pas 1 mais égal au <b>nombre de générateurs</b> du groupe&nbsp;: 3 pour $SU(2)$, 8 pour $SU(3)$. Chacun est un quadrivecteur de Minkowski, d'où deux indices à ne pas confondre, l'interne et le spatio-temporel.</li>
<li>Le terme $-\boldsymbol\alpha\times\boldsymbol W_\mu$ dans la transformation du champ de jauge ne survit que parce que le groupe est non abélien&nbsp;: il est le commutateur $[\boldsymbol\tau\cdot\boldsymbol\alpha, \boldsymbol\tau\cdot\boldsymbol W_\mu]$ déguisé, via l'identité de Pauli.</li>
<li>Le tenseur de champ n'est <b>pas</b> $\partial_\mu\boldsymbol W_\nu - \partial_\nu\boldsymbol W_\mu$. L'oubli du terme $g\,\boldsymbol W_\mu\times\boldsymbol W_\nu$ fait perdre toute la physique du chapitre, à commencer par l'auto-interaction.</li>
<li>Une théorie de Yang–Mills est en <b>interaction même sans matière</b>&nbsp;: le champ de jauge libre n'existe pas. Rien de tel en électromagnétisme, où le lagrangien de Maxwell est quadratique.</li>
<li>L'auto-interaction n'est pas une curiosité&nbsp;: c'est elle qui retourne le signe de la fonction $\beta$ et produit la liberté asymptotique. Le médiateur est chargé sous sa propre interaction, ce qu'un photon ne peut pas être.</li>
<li>Le champ de jauge qui <b>reste sans masse</b> après la brisure est celui qui pointe dans la direction du vide choisi&nbsp;: c'est la direction que la transformation laisse invariante, donc la symétrie non brisée.</li>
<li>La jauge unitaire n'escamote rien&nbsp;: les modes de Goldstone ne sont pas supprimés, ils sont <b>redistribués</b> en polarisations longitudinales. Le comptage des degrés de liberté le vérifie.</li>
</ul>

<br>

## Le modèle de Weinberg–Salam

Nous allons expliquer trois faits qui structurent notre Univers, et que rien dans ce qui précède n'imposait&nbsp;:

<ul>
<li>l'électron a une masse, le neutrino non&nbsp;;</li>
<li>l'électron existe en versions gauche et droite, le neutrino ne s'observe qu'en version gauche&nbsp;;</li>
<li>le photon est sans masse.</li>
</ul>

La réponse d'Abdus Salam et Steven Weinberg repose sur une proposition&nbsp;: **nous vivons dans un Univers à symétrie brisée**, et les particules que nous observons sont le résidu de cette brisure. La méthode sera donc d'écrire le lagrangien de l'Univers **avant** la transition, de poser ses symétries locales, puis de regarder ce que la brisure en fait.

### L'Univers avant la brisure

Imaginons l'Univers un instant après le Big Bang. Il est **plus symétrique** que le nôtre&nbsp;: les champs de leptons y jouissent d'une symétrie interne $SU(2)\otimes U(1)$. Vers $10^{-12}$ seconde, il refroidira sous $10^{16}$&nbsp;K et subira une transition de phase brisant cette symétrie.

Avant cela, électrons et neutrinos sont **sans masse**, l'électron existe en deux chiralités et le neutrino seulement en gauche. Leur lagrangien est donc un simple lagrangien de Dirac sans terme de masse&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\nu_e\,\mathrm{i}\not{\!\!\partial}\,\nu_e + \bar e_{\mathrm L}\,\mathrm{i}\not{\!\!\partial}\,e_{\mathrm L} + \bar e_{\mathrm R}\,\mathrm{i}\not{\!\!\partial}\,e_{\mathrm R}
$
</p>

### Deux charges tombées du ciel, et leur justification

Pour poser les symétries, il faut décider quelles charges chaque champ porte. Le modèle en introduit deux, apparemment arbitraires.

<div id="def">

<b>L'hypercharge faible $Y$</b> est la charge de la symétrie $U(1)$, avec un couplage $g'$.

<b>L'isospin faible $I$</b> est la charge de la symétrie $SU(2)$, avec un couplage $g$. Il obéit aux règles ordinaires du moment cinétique, si bien qu'un champ de $I = 1/2$ a $I_3 = \pm 1/2$.

Ces deux charges sont reliées à la charge électrique par la <b>relation de Gell-Mann–Nishijima</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
Q = I_3 + \frac{Y}{2}
$
</p>

</div>

<br>

<div style="overflow-x:auto;">

| champ | $\nu_e$ | $e_{\mathrm L}$ | $e_{\mathrm R}$ |
|:---:|:---:|:---:|:---:|
| $I$ | $1/2$ | $1/2$ | $0$ |
| $I_3$ | $+1/2$ | $-1/2$ | $0$ |
| $Y$ | $-1$ | $-1$ | $-2$ |
| $Q = I_3 + Y/2$ | $0$ | $-1$ | $-1$ |

</div>

La dernière ligne est le contrôle&nbsp;: on retrouve bien un neutrino neutre et un électron de charge $-1$ dans les deux chiralités.

<div id="preuve">

<details>
<summary>Ces charges ne sont pas arbitraires&nbsp;: elles sont forcées</summary>

On peut motiver physiquement l'attribution, plutôt que de la subir. Le raisonnement part d'une exigence&nbsp;: la théorie doit contenir <b>à la fois</b> l'interaction faible et l'électromagnétisme, correctement enchâssés.

<b>Les deux courants en présence</b><br>
Le courant d'isospin faible ne concerne que la partie gauche&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol J^\mu = \frac{1}{2}\,\bar L\,\gamma^\mu\,\boldsymbol\tau\,L
$
</p>

alors que le courant électromagnétique concerne les deux chiralités&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^\mu_{\mathrm{em}} = Q\,\big(\bar e_{\mathrm L}\gamma^\mu e_{\mathrm L} + \bar e_{\mathrm R}\gamma^\mu e_{\mathrm R}\big)
$
</p>

<b>Le problème</b><br>
En termes de transfert de charge, $J^\mu_{\mathrm{em}}$ et $J^\mu_3$ sont tous deux <b>neutres</b>, alors que $J^\mu_{1,2}$ sont <b>chargés</b>. Mais $J^\mu_3$ ne contient pas $e_{\mathrm R}$, tandis que $J^\mu_{\mathrm{em}}$ le contient. Le courant d'isospin ne peut donc pas, à lui seul, engendrer l'électromagnétisme.

<b>La solution la plus simple</b> consiste à ajouter un courant supplémentaire, l'hypercourant $J^\mu_Y$, et à poser

<p style="text-align:center;">
$\displaystyle
J^\mu_{\mathrm{em}} = J^\mu_3 + \frac{1}{2}J^\mu_Y
$
</p>

le facteur $1/2$ étant conventionnel. <b>Cette égalité entre courants implique immédiatement la relation de Gell-Mann–Nishijima</b> entre les charges correspondantes.

<b>Et les valeurs se lisent alors.</b> En développant les deux courants&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^\mu_3 = \frac{1}{2}\big(\bar\nu_e\gamma^\mu\nu_e - \bar e_{\mathrm L}\gamma^\mu e_{\mathrm L}\big)
\qquad
J^\mu_Y = -\bar\nu_e\gamma^\mu\nu_e - \bar e_{\mathrm L}\gamma^\mu e_{\mathrm L} - 2\,\bar e_{\mathrm R}\gamma^\mu e_{\mathrm R}
$
</p>

Les valeurs de $Q$, $I_3$ et $Y$ sont les <b>coefficients</b> devant chaque terme, et l'on retrouve exactement le tableau ci-dessus.

</details>

</div>

### Les champs de jauge, et pourquoi aucune masse n'est permise

Il faut deux champs de jauge, un par symétrie&nbsp;: $B_\mu$ pour $U(1)$ et $\boldsymbol W_\mu$ pour $SU(2)$. On regroupe alors les champs de matière selon leur comportement, les deux composantes gauches formant un <b>doublet</b> et la composante droite un <b>singlet</b>&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
L = \begin{pmatrix} \nu_e \\ e_{\mathrm L}\end{pmatrix}
\qquad\qquad
R = e_{\mathrm R}
$
</p>

<p style="text-align:center;">
$\displaystyle
D_\mu L = \partial_\mu L - \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol W_\mu L + \frac{\mathrm{i}}{2}g' B_\mu L
\qquad
D_\mu R = \partial_\mu R + \mathrm{i}g' B_\mu R
$
</p>

</div>

<br>

<div id="theo">

<b>Aucun terme de masse n'est admissible</b>, et c'est un point capital.

Une masse de fermion s'écrit $-m(\bar e_{\mathrm L}e_{\mathrm R} + \bar e_{\mathrm R}e_{\mathrm L})$, comme la partie&nbsp;13 l'a établi&nbsp;: elle <b>relie</b> les parties gauche et droite. Or la transformation $SU(2)$ agit sur $L$ et pas du tout sur $R$&nbsp;: un tel terme ne peut donc pas être invariant.

<b>La symétrie interdit la masse.</b> Il faudra la briser pour en obtenir une, et c'est tout le programme du chapitre.

</div>

### Le champ de Higgs

On introduit maintenant un champ scalaire complexe massif, le **champ de Higgs**, à quatre composantes réelles qu'on range en un vecteur à deux composantes complexes&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix} = \frac{1}{\sqrt 2}\begin{pmatrix} \phi_3 + \mathrm{i}\phi_4 \\ \phi_1 + \mathrm{i}\phi_2 \end{pmatrix}
$
</p>

Ce rangement fonctionne car $\phi^\dagger\phi = \frac{1}{2}(\phi_1^2 + \phi_2^2 + \phi_3^2 + \phi_4^2)$ ressemble à un module.

Le champ de Higgs porte $Y = +1$ et $I = 1/2$, d'où une dérivée covariante

<p style="text-align:center;">
$\displaystyle
D_\mu\phi = \partial_\mu\phi - \frac{\mathrm{i}}{2}g\,\boldsymbol\tau\cdot\boldsymbol W_\mu\,\phi - \frac{\mathrm{i}}{2}g' B_\mu\,\phi
$
</p>

et une contribution au lagrangien

<p style="text-align:center;">
$\displaystyle
\mathcal L_\phi = (D^\mu\phi)^\dagger(D_\mu\phi) + \frac{m_{\mathrm h}^2}{2}\phi^\dagger\phi - \frac{\lambda}{4}(\phi^\dagger\phi)^2
$
</p>

</div>

<br>

<div id="theo">

<b>Notez le signe du terme de masse&nbsp;: il est positif.</b>

Un champ scalaire ordinaire, à terme de masse négatif, a son minimum en $\phi = 0$ et vaut donc zéro dans le vide. Ici, avec son potentiel en chapeau mexicain, le fondamental est en $\langle\phi\rangle_0 \neq 0$&nbsp;: <b>le vide est imprégné d'un champ uniforme non nul</b>.

Le champ de Higgs est donc, dès son écriture, <b>instable à la brisure de symétrie</b>. C'est délibéré.

</div>

<!-- FIGURE à redessiner (d'après fig. 47.1 de L&B) : le potentiel du champ de Higgs. Surface de révolution en chapeau mexicain, tracée en perspective avec un maillage. Axe vertical U(phi), les deux axes horizontaux étiquetés Re phi et Im phi. Marquer la bosse centrale instable en phi = 0 par un petit point creux, et le cercle de minima au fond de la gouttière par un trait plus épais. Ajouter une petite bille posée sur la bosse centrale avec une flèche indiquant qu'elle va tomber. Légende : « Le potentiel du champ de Higgs. Le terme de masse positif rend l'origine instable : le vide choisira un point du cercle de minima, et brisera la symétrie. » -->

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/chapeauhiggs.png" style="box-shadow:none;background:none;">
</div>

Tout cela resterait sans effet sur les leptons s'il n'existait pas de couplage entre le Higgs et le champ électron–neutrino. On l'ajoute donc, sous la forme d'un couplage de Yukawa&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\mathrm I} = -G_e\big(\bar L\,\phi\,R + \bar R\,\phi^\dagger\,L\big)
$
</p>

En rassemblant, le lagrangien du modèle de Weinberg–Salam s'écrit&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar L\,\mathrm{i}\gamma^\mu D_\mu L + \bar R\,\mathrm{i}\gamma^\mu D_\mu R + (D^\mu\phi)^\dagger(D_\mu\phi) + \frac{m_{\mathrm h}^2}{2}\phi^\dagger\phi - \frac{\lambda}{4}(\phi^\dagger\phi)^2 - G_e\big(\bar L\phi R + \bar R\phi^\dagger L\big) - \frac{1}{4}\boldsymbol G^{(W)}_{\mu\nu}\cdot\boldsymbol G^{(W)\mu\nu} - \frac{1}{4}F^{(B)}_{\mu\nu}F^{(B)\mu\nu}
$
</p>

Tous les champs y sont <b>sans masse</b>&nbsp;: les deux chiralités de l'électron, le neutrino gauche, les trois $\boldsymbol W_\mu$ et le $B_\mu$.

</div>

### La brisure, et le cadeau qu'elle réserve

Après $10^{-12}$ seconde, le fondamental brise la symétrie. Le minimum du potentiel n'est pas en zéro mais en $(\phi^\dagger\phi)\_0 = v = \left(\frac{m_{\mathrm h}^2}{\lambda}\right)^{1/2}$, et l'on choisit de briser dans la direction

<p style="text-align:center;">
$\displaystyle
\langle\phi\rangle_0 = \begin{pmatrix} 0 \\ v \end{pmatrix}
$
</p>

<div id="theo">

<b>Le cadeau</b> 

Quand on brise une symétrie non abélienne, le vide choisi peut rester invariant sous un <b>sous-groupe</b> des transformations d'origine&nbsp;: ces symétries-là ne sont pas brisées du tout.

Le vide ci-dessus est encore invariant sous la transformation locale

<p style="text-align:center;">
$\displaystyle
\hat U = \mathrm{e}^{\mathrm{i}\left(\frac{Y}{2} + I_3\tau^3\right)\beta(x)} = \mathrm{e}^{\mathrm{i}Q\beta(x)}
$
</p>

la seconde égalité venant de la relation de Gell-Mann–Nishijima. <b>Or une invariance locale sous $\mathrm e^{\mathrm iQ\beta(x)}$ n'est rien d'autre que l'électromagnétisme.</b>

La brisure de $SU(2)\otimes U(1)$ laisse donc intact un $U(1)$ résiduel, celui de la charge électrique. C'est de là que viendra le photon sans masse.

</div>

Pour chercher les excitations au-dessus de ce fondamental, on utilise la même astuce qu'au chapitre précédent&nbsp;: la **jauge unitaire**, qui réduit le champ excité à sa forme la plus simple.

<p style="text-align:center;">
$\displaystyle
\phi(x) = \begin{pmatrix} 0 \\ v + \dfrac{h(x)}{\sqrt 2} \end{pmatrix}
$
</p>

Trois des quatre composantes ont disparu de la description&nbsp;: ce sont les **trois modes de Goldstone**, et nous allons les retrouver ailleurs.

### L'origine de la masse de l'électron

Où chercher une masse de fermion&nbsp;? La partie&nbsp;13 nous l'a dit&nbsp;: dans un terme qui **relie** les chiralités.

<div id="preuve">

Repartons du lagrangien de Dirac écrit en chiralités. En posant $\psi = \psi_{\mathrm L} + \psi_{\mathrm R}$ dans $\mathcal L = \bar\psi(\not{\\!\\!p} - m)\psi$, on obtient huit termes, dont la moitié s'annulent&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\psi_{\mathrm L}\not{\!\!p}\,\psi_{\mathrm L} + \bar\psi_{\mathrm R}\not{\!\!p}\,\psi_{\mathrm R} - m\big(\bar\psi_{\mathrm L}\psi_{\mathrm R} + \bar\psi_{\mathrm R}\psi_{\mathrm L}\big)
$
</p>

Les annulations viennent des projecteurs&nbsp;: $\psi_{\mathrm L} = \frac{1-\gamma^5}{2}\psi$ et $\psi_{\mathrm R} = \frac{1+\gamma^5}{2}\psi$. En commutant les matrices pour rassembler les projecteurs, les termes mixtes contenant l'impulsion font apparaître $(1-\gamma^5)(1+\gamma^5) = 1 - (\gamma^5)^2 = 0$. Les termes purement gauches ou purement droits du terme de masse tombent pour la même raison.

<b>Le terme de masse est donc celui qui contient la combinaison $\bar\psi_{\mathrm L}\psi_{\mathrm R} + \bar\psi_{\mathrm R}\psi_{\mathrm L}$</b>, multipliée par un scalaire. Voilà ce qu'il faut chercher.

</div>

Or un tel terme existe déjà dans notre lagrangien&nbsp;: c'est le couplage de Yukawa avec le Higgs. Insérons-y le champ brisé.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\mathrm{int}} = -G_e\big(\bar e_{\mathrm L}\,v\,e_{\mathrm R} + \bar e_{\mathrm R}\,v\,e_{\mathrm L}\big) - G_e\left(\bar e_{\mathrm L}\frac{h(x)}{\sqrt 2}e_{\mathrm R} + \bar e_{\mathrm R}\frac{h(x)}{\sqrt 2}e_{\mathrm L}\right)
$
</p>

Le premier terme a exactement la forme attendue, un scalaire multipliant $\bar\psi_{\mathrm L}\psi_{\mathrm R} + \bar\psi_{\mathrm R}\psi_{\mathrm L}$. Il prédit donc

<p style="text-align:center;">
$\displaystyle
m_e = G_e\,v
$
</p>

</div>

<b>Et le neutrino&nbsp;?</b> Il a disparu du calcul. Le doublet $\bar L$ contracté avec $\phi = (0, v + h/\sqrt2)$ ne retient que sa composante inférieure, c'est-à-dire $\bar e_{\mathrm L}$. Le neutrino reste donc **sans masse**, exactement comme on l'espérait.

<div id="theo">

La masse de l'électron n'est pas une propriété intrinsèque&nbsp;: c'est la <b>mesure de son couplage au champ de Higgs</b>, lequel remplit le vide. L'électron est massif parce qu'il se déplace dans cette mélasse et interagit avec elle.

</div>

<!-- FIGURE à redessiner (d'après fig. 47.2 de L&B) : l'interaction du champ de Higgs avec les électrons. Une ligne fermionique verticale, temps vers le haut, alternant les étiquettes e_L et e_R à chaque segment. À chaque changement, un petit vertex plein d'où part vers la droite une ligne hachurée courte étiquetée v (la valeur moyenne du Higgs dans le vide). Répéter le motif quatre ou cinq fois en montant. Légende : « La masse de l'électron : sa propagation est une succession de basculements entre chiralités, chacun payé par une interaction avec le Higgs du vide. » On pourra rapprocher cette figure de celle du propagateur du fermion à la partie 14, où chaque croix était une insertion de masse : c'est ici la même chose, l'insertion étant explicitée comme un couplage au Higgs. -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/couplagefermionhiggs.png" style="box-shadow:none;background:none;">
</div>

<div id="theo">

Rapprochez cette figure de celle du propagateur du fermion, à la partie&nbsp;14&nbsp;: chaque rebond y était une <b>insertion de masse</b> qui renversait la chiralité. Nous savons maintenant ce que ce rebond <i>est</i>&nbsp;: un couplage au champ de Higgs du vide.

</div>

### Le photon et les bosons de jauge

Il reste à montrer que la théorie prédit un photon sans masse. Cherchons donc là où les champs de jauge rencontrent le Higgs&nbsp;: le couplage minimal nous dit que c'est le terme $(D_\mu\phi)^\dagger(D^\mu\phi)$.

<div id="preuve">

<details>
<summary>Le calcul, et l'apparition des trois masses</summary>

En insérant le champ brisé dans la dérivée covariante, écrite en matrices $2\times2$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D_\mu\phi = \begin{pmatrix} 0 \\ \frac{1}{\sqrt2}\partial_\mu h \end{pmatrix} - \left[\frac{\mathrm{i}g}{2}\begin{pmatrix} W^3_\mu & W^1_\mu - \mathrm{i}W^2_\mu \\ W^1_\mu + \mathrm{i}W^2_\mu & -W^3_\mu\end{pmatrix} + \frac{\mathrm{i}g'}{2}B_\mu\right]\begin{pmatrix} 0 \\ v + \frac{h}{\sqrt2}\end{pmatrix}
$
</p>

Comme la colonne de droite n'a que sa composante <b>inférieure</b> non nulle, seule la seconde colonne de la matrice travaille&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D_\mu\phi = -\frac{\mathrm{i}}{2}\begin{pmatrix} g\,v\,(W^1_\mu - \mathrm{i}W^2_\mu) + \frac{g h}{\sqrt2}(W^1_\mu - \mathrm{i}W^2_\mu) \\ \mathrm{i}\sqrt2\,\partial_\mu h + v\,(-gW^3_\mu + g'B_\mu) + \frac{h}{\sqrt2}(-gW^3_\mu + g'B_\mu)\end{pmatrix}
$
</p>

En multipliant par l'adjoint et en ne gardant que les termes quadratiques&nbsp;:

<p style="text-align:center;">
$\displaystyle
(D_\mu\phi)^\dagger(D^\mu\phi) = \frac{1}{2}(\partial_\mu h)^2 + \frac{g^2v^2}{4}(W^1_\mu)^2 + \frac{g^2v^2}{4}(W^2_\mu)^2 + \frac{v^2}{4}\big(gW^3_\mu - g'B_\mu\big)^2 + \ldots
$
</p>

<b>Trois combinaisons ont acquis un terme quadratique</b>, donc une masse&nbsp;: $W^1$, $W^2$, et la combinaison linéaire $(gW^3_\mu - g'B_\mu)$.

Une masse de boson entre toujours dans le lagrangien sous la forme $\frac{1}{2}(\text{masse})^2 \times (\text{champ})^2$. On lit donc $M_W^2 = g^2v^2/2$.

</details>

</div>

<br>

<div id="theo">

<b>Trois modes de Goldstone consommés, trois champs de jauge devenus massifs.</b> Le compte est exact, et c'est la même comptabilité qu'au chapitre précédent.

Mais quatre champs de jauge étaient en jeu ($W^1$, $W^2$, $W^3$, $B$). <b>Il en reste donc un sans masse</b>, et c'est précisément la combinaison orthogonale, $(g'W^3_\mu + gB_\mu)$, qui n'apparaît nulle part dans le calcul.

</div>

C'est elle que nous allons identifier au photon.

<div id="def">

<b>L'angle de Weinberg</b>

Nos particules dépendant du rapport de $g'$ et $g$, il est commode de tracer un triangle rectangle dont ces deux couplages sont les côtés, et de définir

<p style="text-align:center;">
$\displaystyle
\tan\theta_{\mathrm W} = \frac{g'}{g}
$
</p>

On définit alors deux nouveaux champs par une simple <b>rotation</b> d'angle $\theta_{\mathrm W}$ dans le plan $(W^3, B)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{pmatrix} Z_\mu \\ A_\mu \end{pmatrix} = \begin{pmatrix} \cos\theta_{\mathrm W} & -\sin\theta_{\mathrm W} \\ \sin\theta_{\mathrm W} & \cos\theta_{\mathrm W}\end{pmatrix}\begin{pmatrix} W^3_\mu \\ B_\mu\end{pmatrix}
$
</p>

</div>

<!-- FIGURE à redessiner (d'après fig. 47.3 de L&B, améliorée) : deux panneaux côte à côte.
Panneau de gauche : le triangle rectangle définissant l'angle de Weinberg. Côté horizontal étiqueté g, côté vertical (à droite) étiqueté g', angle theta_W au sommet gauche, marque d'angle droit au coin inférieur droit.
Panneau de droite (AJOUT, pas dans le livre) : le mélange vu comme une rotation. Tracer un repère orthonormé dont les axes sont étiquetés W^3 et B, puis un second repère tourné de l'angle theta_W dont les axes sont étiquetés Z et A. Colorier en gras l'axe A et l'annoter « reste sans masse », et l'axe Z « devient massif ».
Légende : « L'angle de Weinberg n'est pas un paramètre de plus : c'est l'angle de la rotation qui diagonalise les masses dans le plan (W^3, B). Le photon est la direction qui échappe à la masse. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/angleweinberg.png" style="box-shadow:none;background:none;">
</div>

En termes de ces nouveaux champs, le résultat du calcul se réécrit

<p style="text-align:center;">
$\displaystyle
(D_\mu\phi)^\dagger(D^\mu\phi) = \frac{1}{2}(\partial_\mu h)^2 + \frac{g^2v^2}{4}\big[(W^1_\mu)^2 + (W^2_\mu)^2\big] + \frac{g^2v^2}{4\cos^2\theta_{\mathrm W}}Z_\mu^2 + \ldots
$
</p>

<div id="theo">

<b>Le spectre après brisure</b>

<p style="text-align:center;">
$\displaystyle
M_W^2 = \frac{g^2v^2}{2}
\qquad
M_Z = \frac{M_W}{\cos\theta_{\mathrm W}}
\qquad
M_A = 0
$
</p>

Le champ $A_\mu$ <b>n'apparaît pas</b> dans le terme de masse&nbsp;: le photon reste sans masse, comme la symétrie résiduelle $U(1)_Q$ l'exigeait.

</div>

Et puisque les $W$ et le $Z$ sont massifs, leurs propagateurs sont de la forme $G_{\mu\nu}/(p^2 - M^2 + \mathrm{i}\epsilon)$. Or la partie sur les propagateurs nous a appris ce que cela signifie&nbsp;: un potentiel en $\mathrm e^{-M|\boldsymbol r|}$, donc une **portée finie**, de l'ordre de $1/M$. **L'interaction faible est faible parce qu'elle est courte**, et elle est courte parce que ses médiateurs ont mangé des modes de Goldstone.

<br>

### Ce que la théorie prédit

Reste à lire les interactions. Comme pour QED, le couplage minimal les donne toutes&nbsp;: il suffit de développer les dérivées covariantes et d'éliminer $B_\mu$, $W^3_\mu$ et $g'$ au profit de $A_\mu$, $Z_\mu$ et $\theta_{\mathrm W}$.

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal L \supset -g\sin\theta_{\mathrm W}\;\bar e\gamma^\mu e\,A_\mu + \frac{g}{\cos\theta_{\mathrm W}}\left(\sin^2\theta_{\mathrm W}\,\bar e_{\mathrm R}\gamma^\mu e_{\mathrm R} - \frac{1}{2}\cos 2\theta_{\mathrm W}\,\bar e_{\mathrm L}\gamma^\mu e_{\mathrm L} + \frac{1}{2}\bar\nu_e\gamma^\mu\nu_e\right)Z_\mu + \frac{g}{\sqrt 2}\left[\bar\nu_e\gamma^\mu e_{\mathrm L}\,W^\dagger_\mu + \bar e_{\mathrm L}\gamma^\mu\nu_e\,W_\mu\right]$<br>
avec 
$\displaystyle
\quad W_\mu = \frac{W^1_\mu + \mathrm{i}W^2_\mu}{\sqrt 2}
$
</p>

</div>

Quatre lectures s'imposent, et chacune est un fait expérimental retrouvé.

<b>Le photon ne se couple qu'aux électrons, pas aux neutrinos.</b> C'est ce qu'on observe, et cela découle du fait que $A_\mu$ apparaît multiplié par $\bar e\gamma^\mu e$ seulement.

<b>La charge électrique est prédite</b> comme le coefficient devant ce terme, exactement comme en QED&nbsp;:

<p style="text-align:center;">
$\displaystyle
|e| = g\,\sin\theta_{\mathrm W}
$
</p>

<b>Le champ $W_\mu$ ne couple que les électrons gauches aux neutrinos</b>, et ne touche pas aux droits. Le champ $Z_\mu$ couple les deux chiralités, mais avec des intensités <b>différentes</b>.

<div id="theo">

<b>D'où la violation de la parité.</b> L'opération $\mathrm P$ échange les champs gauches et droits. Comme les termes en $W_\mu$ et $Z_\mu$ traitent les deux chiralités différemment, $\mathrm P^{-1}\mathcal H_{\mathrm I}\mathrm P \neq \mathcal H_{\mathrm I}$.

C'est en ce sens précis que l'interaction faible «&nbsp;viole la parité&nbsp;», et l'on voit que ce n'est pas une bizarrerie ajoutée à la main&nbsp;: c'est une conséquence de la structure du doublet, qui ne contient que des champs gauches.

</div>

Le plus spectaculaire de ces vertex est celui du $W$&nbsp;: l'émission ou l'absorption d'un $W^\pm$ **transforme un électron en neutrino**, et réciproquement. Aucune interaction rencontrée jusqu'ici ne changeait la nature d'une particule.

<!-- FIGURE à redessiner (d'après fig. 47.4 de L&B) : les vertex de l'interaction électrofaible, cinq petits diagrammes empilés verticalement, temps vers le haut.
1. e entrant, e sortant, ligne ondulée A_mu : le vertex de QED.
2. e_R entrant, e_R sortant, ligne tiretée Z_mu.
3. e_L entrant, e_L sortant, ligne tiretée Z_mu.
4. nu_e entrant, nu_e sortant, ligne tiretée Z_mu.
5. e_L entrant, nu_e sortant, ligne pointillée W_mu : LE vertex remarquable, où la nature de la particule change.
Distinguer clairement les trois types de lignes de médiateur (ondulée pour le photon, tiretée pour le Z, pointillée pour le W) et donner une légende de ces conventions. Encadrer le cinquième diagramme. Légende : « Les vertex électrofaibles. Le dernier est le plus étonnant : l'absorption d'un W transforme un électron en neutrino. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vertexelectrofaibles.png" style="box-shadow:none;background:none;">
</div>

### La confrontation, en un tableau

<div style="overflow-x:auto;">

| grandeur | prédiction du modèle | mesure |
|:---:|:---:|:---:|
| masse du $Z^0$ | $M_W/\cos\theta_{\mathrm W}$ | $91{,}19$ GeV |
| masse du $W^\pm$ | $g^2v^2/2$ | $80{,}40$ GeV |
| angle de Weinberg | $\cos\theta_{\mathrm W} = M_W/M_Z$ | $\theta_{\mathrm W} \simeq 28°$ |
| masse du neutrino | exactement $0$ | très petite, mais non nulle |
| masse du photon | exactement $0$ | $0$ |
| boson de Higgs | existe | $\simeq 125$ GeV |

</div>

<br>

<div id="theo">

<b>Ce tableau doit se lire dans le bon ordre chronologique</b>, car c'est ce qui en fait la force. L'angle de Weinberg avait été <b>estimé</b> par des mesures de sections efficaces de diffusion de leptons, bien avant qu'on ne dispose des énergies nécessaires. Il fournissait donc une <b>prédiction</b> des masses du $W$ et du $Z$, et ces particules furent découvertes aux énergies prédites.

Le boson de Higgs fut la dernière prédiction à tomber, en 2012.

</div>

Deux lignes de ce tableau méritent de s'y attarder&nbsp;: la seule case en défaut, celle du neutrino&nbsp;; et ce que le Higgs donne réellement, et ne donne pas.

### L'énigme de la masse du neutrino

La prédiction $m_\nu = 0$ n'est pas un accident numérique du modèle&nbsp;: c'est une conséquence de structure. Une masse de fermion exige un terme reliant les deux chiralités, or le neutrino droit n'existe pas dans la théorie. Il n'y a littéralement <b>rien</b> à quoi coupler $\nu_e$ pour le rendre massif. Et pourtant il l'est. C'est à ce jour le seul désaccord établi entre le modèle standard et une expérience de laboratoire, ce qui en fait une énigme précieuse.

<b>Les preuves expérimentales.</b> L'histoire commence par un déficit. Dès la fin des années 1960, l'expérience de Homestake, au fond d'une mine du Dakota du Sud, ne compte qu'environ un tiers des neutrinos électroniques attendus du Soleil. Pendant trente ans, on soupçonne tour à tour l'expérience puis le modèle solaire. La réponse vient d'ailleurs&nbsp;:

<ul>
<li>en 1998, <b>Super-Kamiokande</b> observe que les neutrinos muoniques créés dans l'atmosphère disparaissent d'autant plus qu'ils ont voyagé loin&nbsp;: ceux qui tombent du ciel arrivent au complet, ceux qui ont traversé la Terre manquent à l'appel. Le déficit dépend de la distance parcourue, signature d'un phénomène qui se développe <b>en vol</b>&nbsp;;</li>
<li>en 2002, <b>SNO</b> mesure séparément, sur les neutrinos solaires, le flux des seuls $\nu_e$ et le flux <b>total</b> des trois saveurs. Le total est exactement celui que prédit le modèle solaire&nbsp;: les $\nu_e$ manquants ne se sont pas perdus, ils sont arrivés sous une autre saveur.</li>
</ul>

Les neutrinos <b>oscillent</b> donc entre saveurs pendant leur propagation. Ces deux résultats valurent le prix Nobel 2015 à Takaaki Kajita et Arthur McDonald.

<b>Pourquoi une oscillation prouve-t-elle une masse&nbsp;?</b> L'argument le plus court tient en une phrase&nbsp;: une particule sans masse voyage à la vitesse de la lumière, donc son temps propre est gelé&nbsp;; or une oscillation est une horloge interne, et une horloge gelée ne bat pas. Voici la version précise. Les états de saveur, ceux que produit un vertex du $W$, ne coïncident pas avec les états de masse, ceux qui se propagent avec une énergie bien définie&nbsp;: les premiers sont des superpositions des seconds. Si les masses diffèrent, les phases des composantes évoluent à des rythmes différents, et la superposition se déforme en chemin.

<div id="preuve">

<details>
<summary>Le calcul, à deux saveurs</summary>

Notons $\theta$ l'angle de mélange entre les états de saveur $(\nu_e, \nu_\mu)$ et les états de masse $(\nu_1, \nu_2)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
|\nu_e\rangle = \cos\theta\,|\nu_1\rangle + \sin\theta\,|\nu_2\rangle
\qquad
|\nu_\mu\rangle = -\sin\theta\,|\nu_1\rangle + \cos\theta\,|\nu_2\rangle
$
</p>

Un neutrino produit comme $\nu_e$ à $t = 0$ évolue, en unités naturelles, selon

<p style="text-align:center;">
$\displaystyle
|\nu(t)\rangle = \cos\theta\;\mathrm{e}^{-\mathrm{i}E_1 t}\,|\nu_1\rangle + \sin\theta\;\mathrm{e}^{-\mathrm{i}E_2 t}\,|\nu_2\rangle
$
</p>

Les neutrinos étant ultrarelativistes, on développe les énergies à impulsion $p$ commune&nbsp;:

<p style="text-align:center;">
$\displaystyle
E_i = \sqrt{p^2 + m_i^2} \simeq p + \frac{m_i^2}{2p}
\qquad\Longrightarrow\qquad
E_2 - E_1 \simeq \frac{\Delta m^2}{2E}
\quad\text{avec}\quad
\Delta m^2 = m_2^2 - m_1^2
$
</p>

L'amplitude d'être détecté comme $\nu_\mu$ après un temps $t \simeq L$ vaut alors

<p style="text-align:center;">
$\displaystyle
\langle\nu_\mu|\nu(t)\rangle = \sin\theta\cos\theta\,\big(\mathrm{e}^{-\mathrm{i}E_2 t} - \mathrm{e}^{-\mathrm{i}E_1 t}\big)
$
</p>

d'où, en prenant le module au carré, la probabilité d'oscillation

<p style="text-align:center;">
$\displaystyle
P(\nu_e \to \nu_\mu) = \sin^2(2\theta)\,\sin^2\!\left(\frac{\Delta m^2\,L}{4E}\right)
$
</p>

Deux lectures. <b>Si $\Delta m^2 = 0$, la probabilité est nulle</b>&nbsp;: observer une oscillation, c'est prouver que les masses ne sont pas toutes égales, donc pas toutes nulles. Et <b>la mesure ne donne que $\Delta m^2$</b>&nbsp;: une différence de carrés, jamais une masse absolue.

</details>

</div>

<br>

<div id="theo">

<b>Ce que l'on sait, et ce que l'on ignore.</b> Les oscillations mesurent deux écarts, $\Delta m^2_{21} \simeq 7{,}5\times 10^{-5}\ \text{eV}^2$ et $|\Delta m^2_{32}| \simeq 2{,}4\times 10^{-3}\ \text{eV}^2$&nbsp;: au moins deux des trois états sont donc massifs. L'échelle absolue, elle, reste inconnue&nbsp;: la mesure directe (expérience KATRIN) borne la masse effective sous $0{,}45$ eV, et la cosmologie borne la somme des trois masses autour de $0{,}1$ eV. Même l'ordre des trois états, hiérarchie dite normale ou inversée, n'est pas tranché.

Retenons l'échelle&nbsp;: au moins six ordres de grandeur sous la masse de l'électron ($0{,}511$ MeV), qui était déjà la plus légère des particules chargées.

</div>

<b>Les tentatives d'explication.</b> La plus sage consiste à compléter le modèle par le chaînon manquant&nbsp;: un neutrino droit $\nu_{\mathrm R}$. Ses charges sont forcées&nbsp;: $I = 0$, puisqu'il ne participe pas à l'interaction faible, comme $e_{\mathrm R}$&nbsp;; et pour que $Q = I_3 + Y/2$ donne zéro, $Y = 0$. Il ne se couple donc à <b>aucun</b> champ de jauge&nbsp;: on le dit <b>stérile</b>, invisible autrement que par la masse qu'il permet. On peut alors écrire un couplage de Yukawa exactement comme pour l'électron, à ceci près qu'il faut utiliser le doublet conjugué $\tilde\phi$, dont la valeur dans le vide occupe la composante <b>haute</b>, celle qui regarde le neutrino&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\phi = \mathrm{i}\tau^2\phi^*
\qquad
\langle\tilde\phi\rangle_0 = \begin{pmatrix} v \\ 0 \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
\mathcal L_\nu = -G_\nu\big(\bar L\,\tilde\phi\,\nu_{\mathrm R} + \bar\nu_{\mathrm R}\,\tilde\phi^\dagger L\big)
\;\xrightarrow{\ \phi \to \langle\phi\rangle_0\ }\;
m_\nu = G_\nu\,v
$
</p>

Rien ne l'interdit. Mais pour $m_\nu \sim 0{,}05$ eV, il faut $G_\nu \sim 3\times 10^{-13}$, soit sept ordres de grandeur sous le couplage de l'électron ($G_e \simeq 3\times 10^{-6}$), qui était déjà minuscule. La question n'est pas résolue, elle est déplacée&nbsp;: pourquoi ce couplage-là serait-il si absurdement faible&nbsp;?

La seconde idée est propre au neutrino. Parmi les fermions élémentaires, il est le seul à être électriquement <b>neutre</b>&nbsp;: pour lui, et pour lui seul, on peut envisager qu'il soit <b>sa propre antiparticule</b>. Un fermion de ce type, dit <b>de Majorana</b>, admet un terme de masse d'un genre nouveau, construit avec le champ conjugué de charge $\nu^{\mathrm c}$ au lieu d'une seconde chiralité indépendante&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\mathrm M} = -\frac{M}{2}\big(\bar\nu_{\mathrm R}^{\,\mathrm c}\,\nu_{\mathrm R} + \bar\nu_{\mathrm R}\,\nu_{\mathrm R}^{\,\mathrm c}\big)
$
</p>

Pour un $\nu_{\mathrm R}$ stérile, ce terme est invariant sous <b>toutes</b> les symétries de jauge&nbsp;: il n'a pas besoin de la brisure pour exister, et rien ne protège $M$, qui peut être aussi grande que la physique le permet. Le prix à payer&nbsp;: ce terme viole la conservation du nombre leptonique, de deux unités.

<div id="theo">

<b>La balançoire («&nbsp;see-saw&nbsp;»).</b> Combinons les deux&nbsp;: un terme de Dirac $m_{\mathrm D} = G_\nu v$ d'échelle électrofaible ordinaire, et un terme de Majorana $M$ énorme pour le neutrino stérile. La diagonalisation donne deux états&nbsp;: un très lourd, de masse $\simeq M$, et un très léger, de masse

<p style="text-align:center;">
$\displaystyle
m_\nu \simeq \frac{m_{\mathrm D}^2}{M}
$
</p>

Plus le partenaire est lourd, plus le neutrino observé est léger&nbsp;: les deux masses jouent aux extrémités d'une balançoire. Avec $m_{\mathrm D} \sim 100$ GeV et $m_\nu \sim 0{,}05$ eV, on trouve $M \sim 10^{14}$ GeV, l'échelle des théories de grande unification. La petitesse de la masse du neutrino ne serait alors pas une bizarrerie, mais un <b>message</b>&nbsp;: l'ombre portée, à notre échelle, d'une physique de très haute énergie.

</div>

<br>

<div id="preuve">

<details>
<summary>La diagonalisation de la balançoire</summary>

Dans la base des deux champs neutres, la matrice de masse s'écrit

<p style="text-align:center;">
$\displaystyle
\mathcal M = \begin{pmatrix} 0 & m_{\mathrm D} \\ m_{\mathrm D} & M \end{pmatrix}
$
</p>

Ses valeurs propres sont les racines de $\lambda^2 - M\lambda - m_{\mathrm D}^2 = 0$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lambda_\pm = \frac{M \pm \sqrt{M^2 + 4m_{\mathrm D}^2}}{2}
\;\simeq\;
M + \frac{m_{\mathrm D}^2}{M}
\quad\text{et}\quad
-\frac{m_{\mathrm D}^2}{M}
\qquad (m_{\mathrm D} \ll M)
$
</p>

Le signe de la petite valeur propre s'absorbe dans une redéfinition de phase du champ&nbsp;: les masses physiques sont $\simeq M$ et $\simeq m_{\mathrm D}^2/M$. Leur produit vaut $m_{\mathrm D}^2$ au signe près, c'est le déterminant de la matrice&nbsp;: quand l'une monte, l'autre descend, d'où l'image de la balançoire.

</details>

</div>

Comment trancher&nbsp;? Si le neutrino est de Majorana, une désintégration aujourd'hui jamais observée devient possible&nbsp;: la <b>double désintégration bêta sans neutrinos</b>, où un noyau convertit deux neutrons en n'émettant que deux électrons, le neutrino émis par l'un étant réabsorbé par l'autre, ce qui n'est permis que s'il est sa propre antiparticule. Plusieurs expériences la traquent, aucune ne l'a vue à ce jour. C'est probablement là que se joue la suite de l'énigme.

### D'où vient la masse&nbsp;? Un bilan

Ce chapitre a livré <b>deux</b> mécanismes de masse, et ils ne se ressemblent pas. Posons-les côte à côte, puis demandons ce qu'ils pèsent réellement dans un objet quotidien. La réponse est une surprise&nbsp;: presque rien.

<div id="theo">

<b>Mécanisme 1, pour les bosons de jauge&nbsp;: avaler une polarisation longitudinale.</b>

Un boson vecteur sans masse file à la vitesse de la lumière et n'a que <b>deux</b> polarisations, transverses. Un boson massif peut être mis au repos, et en possède <b>trois</b>. Devenir massif exige donc un degré de liberté supplémentaire, et c'est le condensat de Higgs qui le fournit&nbsp;: chaque mode de Goldstone mangé devient la polarisation longitudinale d'un boson. Techniquement, le terme $(D_\mu\phi)^\dagger(D^\mu\phi)$, évalué sur le vide $\langle\phi\rangle_0$, dépose dans le lagrangien des termes quadratiques sans dérivée pour trois combinaisons de champs de jauge&nbsp;: des masses.

</div>

<br>

<div id="theo">

<b>Mécanisme 2, pour les fermions&nbsp;: coupler les chiralités.</b>

Une masse de fermion est un terme en $\bar\psi_{\mathrm L}\psi_{\mathrm R} + \bar\psi_{\mathrm R}\psi_{\mathrm L}$&nbsp;: elle <b>bascule</b> la chiralité à chaque insertion. La symétrie l'interdisait&nbsp;; le couplage de Yukawa au condensat la restaure. La propagation d'un électron est un zigzag entre $e_{\mathrm L}$ et $e_{\mathrm R}$, chaque bascule payée d'une interaction avec le Higgs du vide, et $m_e = G_e v$&nbsp;: la masse mesure ce couplage.

</div>

<b>Pourquoi appeler cela des masses&nbsp;?</b> Dans les deux cas, la brisure fait apparaître dans le lagrangien un terme quadratique <b>sans dérivée</b>. Or c'est exactement ce qui, dans les équations du mouvement, produit la relation de dispersion $E^2 = p^2c^2 + m^2c^4$&nbsp;: une énergie non nulle à impulsion nulle, la possibilité d'exister au repos, une inertie. C'est la définition opératoire de la masse, et les deux mécanismes la satisfont.

<b>Faisons maintenant les comptes.</b> Un proton contient deux quarks $u$ et un quark $d$. Les masses que leur donne le mécanisme de Yukawa valent environ $m_u \simeq 2{,}2$ MeV et $m_d \simeq 4{,}7$ MeV, soit au total à peine $9$ MeV. Or le proton pèse $938$ MeV.

<div id="theo">

<b>Le Higgs ne fournit qu'environ 1&nbsp;% de la masse du proton.</b> Les 99&nbsp;% restants, c'est-à-dire l'essentiel de la masse de toute la matière ordinaire ont une autre origine&nbsp;: l'<b>énergie piégée</b> dans le nucléon, celle du mouvement des quarks et du champ de gluons confinés. Et le fait qu'une énergie piégée pèse est un effet de <b>relativité pure</b>, qui n'a besoin ni du Higgs, ni même de la théorie quantique. Le voici sur l'exemple le plus simple qui soit.

</div>

<b>Le photon dans la boîte.</b> Prenons une boîte aux parois intérieures parfaitement réfléchissantes, dans laquelle on enferme de la lumière d'énergie totale $E$. Chaque photon est rigoureusement sans masse. La boîte, pourtant, sera plus difficile à accélérer que la même boîte vide&nbsp;: la lumière piégée résiste.

<div id="preuve">

Modélisons la lumière par deux paquets d'énergie $E/2$ filant en sens opposés le long de l'axe $x$ et rebondissant entre les deux parois. Pour un photon, impulsion et énergie sont liées par $p = E/c$.

<b>Boîte au repos&nbsp;:</b> les deux impulsions se compensent,

<p style="text-align:center;">
$\displaystyle
p_{\mathrm{tot}} = \frac{E/2}{c} - \frac{E/2}{c} = 0
$
</p>

<b>Boîte en mouvement</b> à la vitesse $v \ll c$ le long de $x$, autrement dit&nbsp;: regardons la même boîte depuis un référentiel où elle défile à la vitesse $v$. L'effet Doppler, au premier ordre en $v/c$, décale les deux paquets en sens contraires&nbsp;:

<p style="text-align:center;">
$\displaystyle
E_\rightarrow = \frac{E}{2}\left(1 + \frac{v}{c}\right)
\qquad
E_\leftarrow = \frac{E}{2}\left(1 - \frac{v}{c}\right)
$
</p>

et l'impulsion totale de la lumière ne se compense plus&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_{\mathrm{tot}} = \frac{E_\rightarrow}{c} - \frac{E_\leftarrow}{c} = \frac{E}{2c}\left(1 + \frac{v}{c}\right) - \frac{E}{2c}\left(1 - \frac{v}{c}\right) = \frac{E}{c^2}\,v
$
</p>

<b>C'est l'impulsion qu'aurait une masse $m = E/c^2$ animée de la vitesse $v$.</b> Et ce n'est pas une simple analogie&nbsp;: par conservation de l'impulsion, toute force qui accélère la boîte doit fournir cette impulsion en plus de celle des parois. La lumière enfermée résiste donc à l'accélération exactement comme le ferait une masse inerte

<p style="text-align:center;">
$\displaystyle
m = \frac{E}{c^2}
$
</p>

<b>Le calcul exact, en prime.</b> Avec le facteur Doppler relativiste $D = \sqrt{\frac{1+\beta}{1-\beta}}$ où $\beta = v/c$, les deux paquets deviennent $\frac{E}{2}D$ et $\frac{E}{2}D^{-1}$, d'où

<p style="text-align:center;">
$\displaystyle
E_{\mathrm{tot}} = \frac{E}{2}\big(D + D^{-1}\big) = \frac{E}{\sqrt{1-\beta^2}} = \gamma E
\qquad
p_{\mathrm{tot}} = \frac{E}{2c}\big(D - D^{-1}\big) = \gamma\,\frac{E}{c^2}\,v
$
</p>

Énergie et impulsion de la lumière piégée se transforment donc <b>exactement</b>, à toute vitesse, comme celles d'une particule de masse $E/c^2$. En développant au second ordre, $E_{\mathrm{tot}} \simeq E + \frac{1}{2}\frac{E}{c^2}v^2$&nbsp;: le supplément est l'énergie cinétique de cette masse.

<b>Et l'isotropie&nbsp;?</b> Pour un paquet transverse, filant selon $y$, c'est l'aberration qui incline l'impulsion sous le changement de référentiel, et l'on retrouve la même composante $p_x = \gamma\frac{E}{c^2}v$. L'inertie de l'énergie piégée ne dépend pas de la direction de la poussée.

</div>

D'où vient la résistance, mécaniquement&nbsp;? Pendant qu'on pousse la boîte vers l'avant, la paroi arrière rattrape la lumière qu'elle réfléchit et la décale vers le bleu&nbsp;; la paroi avant la fuit et la décale vers le rouge. La pression de radiation est donc plus forte sur la paroi arrière que sur l'avant, et ce déséquilibre s'oppose à la poussée. L'inertie de la lumière piégée <b>est</b> une pression de radiation déséquilibrée. Notez que rien dans tout cela n'exige que le contenu soit de la lumière&nbsp;: n'importe quelle énergie confinée, cinétique ou de champ, pèse de la même façon.

<b>Le nucléon est cette boîte.</b> Remplacez les miroirs par le confinement. À l'intérieur d'un proton, les quarks $u$ et $d$ sont presque sans masse et les gluons le sont rigoureusement&nbsp;: tout ce petit monde est ultrarelativiste, et la paroi est l'interaction forte elle-même, dont nous avons vu plus haut qu'elle <b>croît</b> avec la distance. L'ordre de grandeur se devine à la Heisenberg&nbsp;: confiner un quark dans un rayon $r \simeq 1$ fm lui impose une impulsion $p \gtrsim \hbar/r$, donc une énergie

<p style="text-align:center;">
$\displaystyle
E \simeq p\,c \simeq \frac{\hbar c}{r} \simeq \frac{197\ \text{MeV}\cdot\text{fm}}{1\ \text{fm}} \simeq 200\ \text{MeV}
$
</p>

par quark. Trois quarks, plus l'énergie du champ de gluons&nbsp;: quelques centaines de MeV, l'ordre de grandeur de $m_p c^2 = 938$ MeV est atteint <b>sans avoir invoqué le Higgs une seule fois</b>. Le calcul complet existe&nbsp;: la chromodynamique sur réseau reproduit les masses des hadrons au pour-cent près, à partir du seul lagrangien de QCD.

<div id="theo">

<b>La masse, en trois lignes.</b>

<ul style="margin-top:0.5em;">
<li>Les bosons $W^\pm$ et $Z^0$ pèsent parce qu'ils ont avalé un mode de Goldstone du condensat de Higgs&nbsp;: leur masse est une polarisation longitudinale acquise.</li>
<li>Les fermions élémentaires pèsent parce que leur propagation bascule de chiralité dans ce même condensat&nbsp;: leur masse est un couplage de Yukawa, $m = G\,v$.</li>
<li>Mais l'essentiel de la masse de la matière, la notre à 99&nbsp;%, est de l'énergie de mouvement et d'interaction <b>emprisonnée</b> dans les nucléons&nbsp;: $m = E/c^2$, un effet purement relativiste, sans Higgs.</li>
</ul>

</div>

Une dernière justice à rendre au Higgs&nbsp;: son petit pour-cent décide de tout. La taille des atomes est fixée par la masse de l'électron, le rayon de Bohr variant comme $1/m_e$&nbsp;: sans couplage de Yukawa, pas d'atomes stables à notre échelle, pas de chimie, pas de lecteur pour ces lignes. Le Higgs pèse peu, mais il pèse au bon endroit. Quant à la masse du neutrino, elle attend toujours son mécanisme, et c'est l'un des chantiers ouverts du modèle.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
SU(2)\otimes U(1)\ \text{locale}
\;\xrightarrow{\ \text{aucune masse permise}\ }\;
\text{Higgs de } Y = +1,\ I = 1/2
\;\xrightarrow{\ m_{\mathrm h}^2 > 0\ }\;
\langle\phi\rangle_0 = \begin{pmatrix} 0 \\ v\end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat U = \mathrm{e}^{\mathrm{i}(\frac{Y}{2} + I_3\tau^3)\beta} = \mathrm{e}^{\mathrm{i}Q\beta}
\;\Longrightarrow\;
U(1)_Q\ \text{non brisée}
\;\Longrightarrow\;
\text{photon sans masse}
$
</p>

<p style="text-align:center;">
$\displaystyle
-G_e\big(\bar L\phi R + \bar R\phi^\dagger L\big)
\;\xrightarrow{\ \phi \to \langle\phi\rangle_0\ }\;
m_e = G_e v
\qquad\text{et}\qquad
m_\nu = 0
$
</p>

<p style="text-align:center;">
$\displaystyle
3\ \text{modes de Goldstone}
\;\longrightarrow\;
W^\pm,\ Z^0\ \text{massifs}
\qquad
M_Z = \frac{M_W}{\cos\theta_{\mathrm W}}
\qquad
|e| = g\sin\theta_{\mathrm W}
$
</p>

<p style="text-align:center;">
$\displaystyle
m_{W,Z} \;\longleftarrow\; \text{Goldstone avalé}
\qquad
m_e = G_e v \;\longleftarrow\; \text{Yukawa}
\qquad
m_p \simeq \frac{E_{\text{confinement}}}{c^2} \;\longleftarrow\; \text{relativité}
$
</p>

### Pièges

<ul>
<li>L'hypercharge $Y$ n'est <b>pas</b> la charge électrique. C'est la charge de la symétrie $U(1)$ d'avant la brisure, et $Q = I_3 + Y/2$ les relie.</li>
<li>Le $U(1)$ d'avant la brisure n'est pas celui de l'électromagnétisme. Celui de l'électromagnétisme est le $U(1)_Q$ <b>résiduel</b>, une combinaison de l'ancien $U(1)_Y$ et d'une partie de $SU(2)$. C'est pourquoi le photon est un mélange de $W^3$ et de $B$.</li>
<li>Les termes de masse sont interdits <b>avant</b> la brisure, et pour une raison structurelle&nbsp;: une masse relie les chiralités, or $SU(2)$ agit sur $L$ et pas sur $R$.</li>
<li>Le signe du terme de masse du Higgs est <b>positif</b> dans le lagrangien, à l'inverse d'un scalaire ordinaire. C'est ce signe qui rend l'origine instable et provoque la brisure.</li>
<li>La jauge unitaire ne fait pas disparaître les trois composantes du Higgs&nbsp;: elles deviennent les <b>polarisations longitudinales</b> des trois bosons massifs. Trois modes consommés, trois bosons massifs.</li>
<li>L'angle de Weinberg n'est pas un paramètre supplémentaire du modèle&nbsp;: c'est l'angle de la rotation qui diagonalise les masses dans le plan $(W^3, B)$, et il est entièrement fixé par le rapport $g'/g$.</li>
<li>L'interaction faible est «&nbsp;faible&nbsp;» surtout parce qu'elle est <b>courte</b>&nbsp;: le facteur $1/M_W^2$ du propagateur écrase l'amplitude à basse énergie. À énergie comparable à $M_W$, elle n'est plus faible du tout.</li>
<li>Le Higgs ne donne pas sa masse à «&nbsp;tout&nbsp;»&nbsp;: l'essentiel de la masse de la matière ordinaire vient de l'énergie de confinement des quarks, pas du couplage au Higgs.</li>
<li>Les oscillations de neutrinos ne mesurent que des <b>différences de masses au carré</b>, $\Delta m^2$&nbsp;: elles prouvent que les masses ne sont pas toutes nulles, mais ne fixent ni l'échelle absolue ni l'ordre des trois états.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Le modèle électrofaible referme la boucle ouverte au tout début de ce cours&nbsp;: partis d'une symétrie interne et du principe de jauge, nous voici en possession d'une théorie qui prédit le spectre des particules observées et la valeur de leurs masses.<br><br>
Restent des questions que ce modèle ne tranche pas. Pourquoi le neutrino n'existe-t-il qu'en version gauche&nbsp;? D'où viennent les trois générations de leptons et de quarks&nbsp;? Et comment quantifier proprement une théorie de Yang–Mills, ce qui exige des techniques que nous avons contournées&nbsp;?
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc16">Chapitre précédent</a></td><td><a href="../tqc18">Chapitre suivant</a></td>
    </tr>
</table>
</div>
