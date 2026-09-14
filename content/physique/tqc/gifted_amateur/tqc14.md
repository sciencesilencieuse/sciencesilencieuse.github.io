+++
title = "TQC-14"
date = 2026-07-30T10:00:00+01:00
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
</style>




# Théorie quantique des champs -- Partie 14

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


Fin de l'échafaudage «&nbsp;une particule&nbsp;».

La partie précédente a construit le spineur et son équation, mais en restant au niveau d'une fonction d'onde. Or les électrons ne sont pas des fonctions d'onde&nbsp;: ce sont des excitations d'un champ, et c'est le seul cadre où les énergies négatives cessent d'être une maladie. Trois chapitres, qui mènent du champ libre à un nombre mesurable.

<ul>
<li><b>Quantifier.</b> On applique la recette canonique au champ de Dirac, et l'on rencontre la surprise la plus lourde de conséquences de toute la partie&nbsp;: il faut des <b>anticommutateurs</b>, sous peine d'un vide sans état fondamental. Le principe de Pauli en découle gratuitement. Puis, en exigeant l'invariance de jauge <b>locale</b>, l'interaction électromagnétique n'est plus choisie mais <b>dictée</b>&nbsp;: c'est la naissance de QED.</li>
<li><b>Calculer.</b> Le propagateur du photon, les règles de Feynman, et l'<b>identité de Ward</b> qui garantit que l'invariance de jauge survit aux diagrammes. Un premier processus est mené jusqu'au bout, l'annihilation $e^+e^- \to \mu^+\mu^-$, par la méthode des amplitudes d'hélicité.</li>
<li><b>Confronter.</b> Trois sections efficaces historiques&nbsp;: <b>Rutherford</b>, qui fit découvrir le noyau, sa version relativiste de <b>Mott</b>, et <b>Compton</b>. On y récolte l'algorithme des traces, qui sert dans toute application sérieuse de la théorie, et la <b>symétrie de croisement</b>, qui permet de déduire plusieurs processus d'un seul calcul.</li>
</ul>

Un avertissement, cependant. Tous les calculs de cette partie sont menés à l'ordre le plus bas. Dès qu'on voudra les affiner, les intégrales divergeront&nbsp;: c'est l'affaire de la partie suivante.

<br>

## Le champ de Dirac quantique

Fin de l'échafaudage «&nbsp;une particule&nbsp;». Les électrons ne sont pas des fonctions d'onde mais des excitations d'un champ, et il faut donc quantifier. Le chapitre suit la recette canonique, et rencontre en chemin la surprise la plus lourde de conséquences de toute la partie.

### Le lagrangien et la quantification canonique

La recette démarre d'un lagrangien classique. L'idée qu'un champ de fermions ait une limite classique est déroutante, aucun système de masses et de ressorts ne fabriquant un fermion, mais on procède sans état d'âme&nbsp;: on cherche la densité lagrangienne dont les équations d'Euler--Lagrange redonnent l'équation de Dirac.

<div id="def">

<b>Lagrangien de Dirac</b>

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\psi\,(\mathrm{i}\gamma^\mu\partial_\mu - m)\,\psi \quad$
avec
$\displaystyle
\quad \bar\psi = \psi^\dagger\gamma^0
$
</p>

</div>

Le choix de $\bar\psi = \psi^\dagger\gamma^0$ plutôt que $\psi^\dagger$ n'est pas cosmétique&nbsp;: c'est la seule façon de fabriquer un scalaire de Lorentz, comme l'a montré la partie précédente, au chapitre sur la transformation des spineurs&nbsp;: les boosts de spineurs ne sont pas unitaires, donc $\psi^\dagger\psi$ n'est pas invariant.

<div id="preuve">

<details>
<summary>Retrouver l'équation de Dirac, et calculer le hamiltonien</summary>

<b>L'équation du mouvement</b><br>
On traite $\psi$ et $\bar\psi$ comme deux champs indépendants. La beauté du procédé est que $\bar\psi$ <b>n'apparaît jamais dérivé</b> dans $\mathcal L$&nbsp;: l'équation d'Euler--Lagrange pour $\bar\psi$ se réduit donc à

<p style="text-align:center;">
$\displaystyle
\frac{\partial\mathcal L}{\partial\bar\psi} = 0
\quad\Longrightarrow\quad
(\mathrm{i}\gamma^\mu\partial_\mu - m)\psi = 0
$
</p>

L'équation de Dirac tombe sans le moindre calcul. Varier par rapport à $\psi$ donnerait l'équation conjuguée, $\bar\psi(\mathrm{i}\overleftarrow{\not{\\!\\!\partial}} + m) = 0$, la flèche indiquant que la dérivée agit vers la gauche.

<b>Le moment conjugué</b><br>
Seul $\partial_0\psi$ apparaît dans $\mathcal L$, à travers le terme $\mathrm{i}\bar\psi\gamma^0\partial_0\psi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Pi^0_\psi = \frac{\partial\mathcal L}{\partial(\partial_0\psi)} = \mathrm{i}\bar\psi\gamma^0 = \mathrm{i}\psi^\dagger\gamma^0\gamma^0 = \mathrm{i}\psi^\dagger
$
</p>

en utilisant $(\gamma^0)^2 = I$. Et $\Pi^0_{\bar\psi} = 0$, puisque $\partial_0\bar\psi$ est absent.

<b>Le hamiltonien</b><br>
La transformation de Legendre donne

<p style="text-align:center;">
$\displaystyle
\mathcal H = \Pi^0_\psi\,\partial_0\psi - \mathcal L = \mathrm{i}\psi^\dagger\partial_0\psi - \bar\psi(\mathrm{i}\gamma^\mu\partial_\mu - m)\psi
$
</p>

En séparant l'indice temporel de l'indice spatial dans $\gamma^\mu\partial_\mu$, les deux termes en $\partial_0$ se compensent et il reste

<p style="text-align:center;">
$\displaystyle
\mathcal H = \bar\psi\,(-\mathrm{i}\gamma^i\partial_i + m)\,\psi = \psi^\dagger(-\mathrm{i}\gamma^0\gamma^i\partial_i + m\gamma^0)\psi
$
</p>

<b>La forme compacte</b><br>
Si l'on accepte d'utiliser l'équation du mouvement elle-même, laquelle donne $(-\mathrm{i}\gamma^i\partial_i + m)\psi = \mathrm{i}\gamma^0\partial_0\psi$, on obtient l'écriture élégante

<p style="text-align:center;">
$\displaystyle
\mathcal H = \psi^\dagger\,\mathrm{i}\partial_0\,\psi
$
</p>

Attention&nbsp;: ce n'est pas une définition générale, mais une simplification valable <b>sur couche</b>, c'est-à-dire pour les champs qui satisfont l'équation du mouvement.

</details>

</div>

Vient le moment décisif du chapitre. Pour les champs scalaires, on imposait des <b>commutateurs</b>. Ici, il faut des <b>anticommutateurs</b>.

<div id="def">

<b>Quantification canonique du champ de Dirac</b>

<p style="text-align:center;">
$\displaystyle
\{\hat\psi_a(t, \boldsymbol x),\, \hat\psi_b^\dagger(t, \boldsymbol y)\} = \delta^{(3)}(\boldsymbol x - \boldsymbol y)\,\delta_{ab}
$
</p>

<p style="text-align:center;">
$\displaystyle
\{\hat\psi_a, \hat\psi_b\} = \{\hat\psi_a^\dagger, \hat\psi_b^\dagger\} = 0
$
</p>

où $a, b$ étiquettent les quatre composantes spinorielles.

</div>

Le développement en modes reprend celui du champ scalaire, avec deux familles d'opérateurs (particules et antiparticules) et une somme sur les deux états de spin&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat\psi(x) = \int\frac{\mathrm{d}^3 p}{(2\pi)^{3/2}}\frac{1}{(2E_{\boldsymbol p})^{1/2}}\sum_{s=1}^{2}\left[u^s(p)\,\hat a_{s\boldsymbol p}\,\mathrm{e}^{-\mathrm{i} p\cdot x} + v^s(p)\,\hat b^\dagger_{s\boldsymbol p}\,\mathrm{e}^{\mathrm{i} p\cdot x}\right]
$
</p>

avec $\\{\hat a_{s\boldsymbol p}, \hat a^\dagger_{r\boldsymbol q}\\} = \\{\hat b_{s\boldsymbol p}, \hat b^\dagger_{r\boldsymbol q}\\} = \delta^{(3)}(\boldsymbol p - \boldsymbol q)\\,\delta_{sr}$, tous les autres anticommutateurs étant nuls.

<div id="theo">

En insérant ce développement dans le hamiltonien et en passant à l'ordre normal&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat H = \int\mathrm{d}^3 p\,\sum_{s=1}^{2} E_{\boldsymbol p}\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} + \hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}\right)
$
</p>

Les deux signes sont <b>positifs</b>&nbsp;: l'énergie est la somme des énergies des particules et des antiparticules. Le champ quantifié guérit définitivement la maladie des énergies négatives, laissée ouverte depuis l'équation de Dirac de la partie précédente.

</div>

<br>

<div id="preuve">
<details>
<summary>
Détails
</summary>

<p style="text-align:center;">
$\displaystyle
\hat H = \int \mathrm{d}^3x \, \mathcal H = \int \mathrm{d}^3x \, \hat\psi^\dagger(x) \, \mathrm{i}\partial_0 \hat\psi(x)
$
</p>

<b>Préparation des champs (dérivée temporelle et conjugué)</b><br>
Appliquons $\partial_0$ au développement en modes de $\hat\psi(x)$ en se rappelant que $\mathrm{i}\partial_0 (\mathrm{e}^{-\mathrm{i} p\cdot x}) = \mathrm{i}(-\mathrm{i}E_{\boldsymbol p})\mathrm{e}^{-\mathrm{i} p\cdot x} = +E_{\boldsymbol p}\mathrm{e}^{-\mathrm{i} p\cdot x}$ et $\mathrm{i}\partial_0 (\mathrm{e}^{\mathrm{i} p\cdot x}) = \mathrm{i}(+\mathrm{i}E_{\boldsymbol p})\mathrm{e}^{\mathrm{i} p\cdot x} = -E_{\boldsymbol p}\mathrm{e}^{\mathrm{i} p\cdot x}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\partial_0 \hat\psi(x) = \int\frac{\mathrm{d}^3 p}{(2\pi)^{3/2}}\frac{1}{\sqrt{2E_{\boldsymbol p}}}\sum_{s=1}^{2} E_{\boldsymbol p} \left[u^s(p)\,\hat a_{s\boldsymbol p}\,\mathrm{e}^{-\mathrm{i} p\cdot x} - v^s(p)\,\hat b^\dagger_{s\boldsymbol p}\,\mathrm{e}^{\mathrm{i} p\cdot x}\right]
$
</p>

Pour construire l'équation, nous avons aussi besoin du champ conjugué $\hat\psi^\dagger(x)$ (en utilisant une impulsion muette $\boldsymbol q$ et un spin $r$ pour ne pas les confondre avec $\boldsymbol p$ et $s$ lors de la multiplication)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat\psi^\dagger(x) = \int\frac{\mathrm{d}^3 q}{(2\pi)^{3/2}}\frac{1}{\sqrt{2E_{\boldsymbol q}}}\sum_{r=1}^{2}\left[u^{r\dagger}(q)\,\hat a^\dagger_{r\boldsymbol q}\,\mathrm{e}^{\mathrm{i} q\cdot x} + v^{r\dagger}(q)\,\hat b_{r\boldsymbol q}\,\mathrm{e}^{-\mathrm{i} q\cdot x}\right]
$
</p>

<b>L'intégration spatial</b><br>
Nous devons maintenant multiplier $\hat\psi^\dagger$ par $\mathrm{i}\partial_0 \hat\psi$ et intégrer sur le volume $\mathrm{d}^3x$. Ce produit génère 4 termes (deux directs et deux croisés).<br>
L'intégrale spatiale n'agit que sur les parties spatiales des exponentielles complexes, $\mathrm{e}^{\pm\mathrm{i}\boldsymbol p \cdot \boldsymbol x}$. En utilisant l'identité de Fourier $\int \mathrm{d}^3x \\, \mathrm{e}^{\mathrm{i}(\boldsymbol p - \boldsymbol q)\cdot\boldsymbol x} = (2\pi)^3\delta^{(3)}(\boldsymbol p - \boldsymbol q)$, cette intégrale s'effondre de façon très propre. Les $(2\pi)^3$ de la fonction delta annulent exactement les facteurs $(2\pi)^{3/2}$ aux dénominateurs de nos deux intégrales de départ.

Regardons les termes&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Terme $\hat a^\dagger \hat a$ : Produit les exponentielles $\mathrm{e}^{\mathrm{i}\boldsymbol q\cdot\boldsymbol x}\mathrm{e}^{-\mathrm{i}\boldsymbol p\cdot\boldsymbol x}$. L'intégrale donne $\delta^{(3)}(\boldsymbol p - \boldsymbol q)$. Cela force $\boldsymbol q = \boldsymbol p$.</li>
<li>Terme $\hat b \hat b^\dagger$ : Produit les exponentielles $\mathrm{e}^{-\mathrm{i}\boldsymbol q\cdot\boldsymbol x}\mathrm{e}^{\mathrm{i}\boldsymbol p\cdot\boldsymbol x}$. L'intégrale donne aussi $\delta^{(3)}(\boldsymbol p - \boldsymbol q)$. Force $\boldsymbol q = \boldsymbol p$.</li>
<li>Termes croisés ($\hat a^\dagger \hat b^\dagger$ et $\hat b \hat a$) : Ils produisent respectivement $\delta^{(3)}(\boldsymbol p + \boldsymbol q)$. Ils forcent $\boldsymbol q = -\boldsymbol p$.</li>
</ul>

<b>L'application de l'orthogonalité des spineurs</b><br>
Grâce aux fonctions delta, l'intégrale sur $\mathrm{d}^3q$ disparaît (puisqu'on évalue tout en $\boldsymbol q = \pm\boldsymbol p$). L'énergie devient $E_{\boldsymbol q} = E_{\boldsymbol p}$, et les racines carrées au dénominateur se combinent : $\sqrt{2E_{\boldsymbol p}}\sqrt{2E_{\boldsymbol p}} = 2E_{\boldsymbol p}$.

Voyons ce qu'il reste de nos 4 termes. Comme l'objet manipulé est $\hat\psi^\dagger \ldots \hat\psi$ et non $\hat{\bar\psi}\ldots\hat\psi$, ce sont les <b>relations hermitiennes</b> du chapitre précédent qui s'appliquent, et non les relations barrées&nbsp;: $u^{r\dagger}u^s = v^{r\dagger}v^s = 2E_{\boldsymbol p}\delta^{rs}$, et $u^{r\dagger}(\tilde p)v^s(p) = 0$ pour des impulsions spatialement opposées.
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Termes croisés ($\hat a^\dagger \hat b^\dagger$ et $\hat b \hat a$) : Puisque $\boldsymbol q = -\boldsymbol p$, ils font intervenir $u^{r\dagger}(\tilde p)\,v^s(p)$ (et son symétrique), qui est <b>nul</b> par la troisième relation hermitienne. Les termes croisés disparaissent&nbsp;! C'est précisément le cas de figure pour lequel cette relation avait été établie.</li>
<li>Terme $\hat a^\dagger \hat a$ : Le temps s'annule des exponentielles ($\mathrm{e}^{\mathrm{i}E_{\boldsymbol p}t}\mathrm{e}^{-\mathrm{i}E_{\boldsymbol p}t} = 1$). Il reste $u^{r\dagger}(p) u^s(p) = 2E_{\boldsymbol p}\delta_{rs}$.</li>
<li>Terme $\hat b \hat b^\dagger$ : Là encore, le temps s'annule, et il reste $v^{r\dagger}(p) v^s(p) = 2E_{\boldsymbol p}\delta_{rs}$, <b>positif lui aussi</b>, et c'est ici que le basculement de signe entre $\bar v v = -2m$ et $v^\dagger v = +2E_{\boldsymbol p}$ prend toute son importance. Attention en revanche à ne pas oublier le signe moins gardé depuis la dérivée temporelle&nbsp;!</li>
</ul>

En insérant cela, le facteur $2E_{\boldsymbol p}$ du numérateur s'annule avec celui du dénominateur. Le $\delta_{rs}$ écrase la double somme sur les spins $r, s$  en une somme simple sur $s$. Il nous reste cette expression brute pour l'énergie&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat H = \int\mathrm{d}^3 p\,\sum_{s=1}^{2} E_{\boldsymbol p} \left( \hat a^\dagger_{s\boldsymbol p} \hat a_{s\boldsymbol p} - \hat b_{s\boldsymbol p} \hat b^\dagger_{s\boldsymbol p} \right)
$
</p>

<b>L'ordre normal (le retournement du signe)</b><br>
Si l'on s'arrête ici, la théorie a un problème gigantesque : le terme $-\hat b\hat b^\dagger$ signifie que les antiparticules contribuent à l'énergie globale avec un signe négatif. Plus on créerait d'antiparticules, plus l'énergie du système s'effondrerait vers l'infini négatif&nbsp;!

C'est ici qu'intervient l'ordre normal fermionique (noté $: \dots :$ ). La prescription de l'ordre normal dicte que pour extraire la partie physiquement mesurable d'un opérateur, il faut déplacer tous les opérateurs de création ($\dagger$) à gauche des opérateurs d'annihilation.<br>
Cependant, comme nos opérateurs obéissent à des règles d'anticommutation $\\{\hat b, \hat b^\dagger\\} = \delta$ , échanger l'ordre de deux opérateurs fermioniques génère un signe moins&nbsp;:

<p style="text-align:center;">
$\displaystyle
: \hat b_{s\boldsymbol p} \hat b^\dagger_{s\boldsymbol p} : \; = - \hat b^\dagger_{s\boldsymbol p} \hat b_{s\boldsymbol p}
$
</p>

Ce signe moins d'anticommutation percute parfaitement le signe moins provenant de notre dérivée temporelle, transformant le tout en signe plus&nbsp;:

<p style="text-align:center;">
$\displaystyle
- ( - \hat b^\dagger_{s\boldsymbol p} \hat b_{s\boldsymbol p} ) = + \hat b^\dagger_{s\boldsymbol p} \hat b_{s\boldsymbol p}
$
</p>

(En réalité, on jette à la poubelle la constante infinie générée par la fonction delta lors de l'échange, qui correspond précisément à l'énergie infinie de la mer de Dirac).

<b>La comptabilité des signes, à retenir</b>&nbsp;: l'énergie ressort positive parce que <b>deux</b> signes moins se rencontrent et se compensent, celui de la dérivée temporelle sur $\mathrm{e}^{+\mathrm{i}p\cdot x}$ et celui de l'anticommutation. Ce décompte reviendra deux fois&nbsp;: dans l'aparté sur la catastrophe du vide, où l'on supprimera le second, et dans le calcul de la charge, où le premier sera absent.

On tombe alors, triomphalement, sur la formule finale désirée&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat H = \int\mathrm{d}^3 p\,\sum_{s=1}^{2} E_{\boldsymbol p}\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} + \hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}\right)
$
</p>

L'énergie de toute particule comme de toute antiparticule est désormais strictement positive !

</details>

</div>


{{%notice note "Aparté : pourquoi des anticommutateurs ? La catastrophe du vide"%}}

Ce choix n'est pas une préférence esthétique&nbsp;: il est <b>forcé</b>, sous peine d'univers instable. Refaisons le calcul en imposant des commutateurs, comme pour un boson, et regardons où cela mène.

<b>Le point technique.</b> Reprenons la comptabilité des signes établie dans la démonstration ci-dessus. Le terme d'antiparticules y ressort positif parce que <b>deux</b> signes moins se rencontrent&nbsp;:

<ul style="margin-top:0.5em;">
<li>celui de la <b>dérivée temporelle</b>, puisque $\mathrm{i}\partial_0$ appliqué à $\mathrm{e}^{+\mathrm{i}p\cdot x}$ donne $-E_{\boldsymbol p}$&nbsp;;</li>
<li>celui de l'<b>anticommutation</b>, lors du réordonnement $\hat b\hat b^\dagger = -\hat b^\dagger\hat b + \text{constante}$.</li>
</ul>

Leur produit est positif, et c'est ce qui sauve la théorie.

<b>Avec des commutateurs</b>, le <i>second</i> signe moins disparaît (on aurait $\hat b\hat b^\dagger = +\hat b^\dagger\hat b + \text{constante}$), le premier subsiste, et rien ne se compense&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat H_{\text{faux}} = \int\mathrm{d}^3 p\,\sum_s E_{\boldsymbol p}\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} - \hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}\right)
$
</p>

<b>Lisons ce qui se passerait.</b> Chaque antiparticule créée <b>abaisse</b> l'énergie de $E_{\boldsymbol p}$. Le vide n'est alors plus l'état de plus basse énergie&nbsp;: on peut toujours descendre en créant une antiparticule de plus, puis une autre, indéfiniment. Il n'existe aucun état fondamental, et donc aucun monde stable.

<b>La quantification par anticommutateurs est la seule issue</b>, et elle apporte en prime le principe de Pauli&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\hat a^\dagger_{s\boldsymbol p})^2 = \tfrac{1}{2}\{\hat a^\dagger_{s\boldsymbol p}, \hat a^\dagger_{s\boldsymbol p}\} = 0
$
</p>

Impossible d'empiler deux fermions dans le même état&nbsp;: l'exclusion n'est pas un postulat surajouté, c'est une conséquence algébrique de l'anticommutation.

Voilà un aperçu du <b>théorème spin-statistique</b>&nbsp;: spin demi-entier $\Rightarrow$ anticommutateurs, sous peine d'instabilité du vide. Le mécanisme est toujours celui-là&nbsp;: un signe de la dérivée temporelle qui attend un partenaire, et seule l'anticommutation le lui fournit.

{{%/notice%}}


### Le courant de Noether et la charge conservée

Le lagrangien est invariant sous la transformation globale $U(1)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi \to \psi\,\mathrm{e}^{\mathrm{i}\alpha}
\qquad
\bar\psi \to \bar\psi\,\mathrm{e}^{-\mathrm{i}\alpha}
$
</p>

les deux exponentielles se compensant terme à terme puisque $\mathcal L$ ne contient que des produits $\bar\psi \ldots \psi$. La machinerie de Noether, identique à celle du champ scalaire complexe, livre alors&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\hat J^\mu_{\mathrm{Nc}} = \hat{\bar\psi}\,\gamma^\mu\,\hat\psi
$
</p>

<p style="text-align:center;">
$\displaystyle
\hat Q_{\mathrm{Nc}} = \int\mathrm{d}^3 p\,\sum_s\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} - \hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}\right)
$
</p>

La charge conservée compte les particules <b>moins</b> les antiparticules.

</div>

<br>

<div id="preuve">
<details>
<summary>
Détails
</summary>

<b>Première partie&nbsp;: le courant</b>

Le théorème de Noether associe à toute symétrie continue du lagrangien un quadricourant conservé, $\partial_\mu J^\mu = 0$. Pour une transformation infinitésimale, en développant $\mathrm{e}^{\mathrm{i}\alpha} \simeq 1 + \mathrm{i}\alpha$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\delta\psi = \mathrm{i}\alpha\,\psi\quad$
et
$\displaystyle
\quad\delta\bar\psi = -\mathrm{i}\alpha\,\bar\psi
$
</p>

La formule générale du courant fait intervenir les moments conjugués&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^\mu = \frac{\partial \mathcal L}{\partial (\partial_\mu \psi)}\,\delta\psi + \frac{\partial \mathcal L}{\partial (\partial_\mu \bar\psi)}\,\delta\bar\psi
$
</p>

<b>Le second terme est nul</b>, et pour la raison déjà exploitée lors de la dérivation de l'équation de Dirac&nbsp;: $\partial_\mu\bar\psi$ n'apparaît nulle part dans $\mathcal L$. C'est la même asymétrie qui rendait l'équation du mouvement immédiate, et qui avait donné $\Pi^0_{\bar\psi} = 0$.

Le premier terme se lit directement sur $\mathcal L = \bar\psi(\mathrm{i}\gamma^\mu\partial_\mu - m)\psi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\partial \mathcal L}{\partial (\partial_\mu \psi)} = \mathrm{i}\,\bar\psi\gamma^\mu
\;\Longrightarrow\;
J^\mu = (\mathrm{i}\bar\psi\gamma^\mu)(\mathrm{i}\alpha\psi) = -\alpha\,\bar\psi\gamma^\mu\psi
$
</p>

Le paramètre $\alpha$ étant une constante globale arbitraire, on l'absorbe (ainsi que le signe, selon la convention de charge) pour définir le courant canonique, promu opérateur&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat J^\mu_{\mathrm{Nc}} = \hat{\bar\psi}\,\gamma^\mu\,\hat\psi
$
</p>

<b>Seconde partie&nbsp;: la charge</b>

La charge est l'intégrale spatiale de la densité $J^0$. Or, grâce à $(\gamma^0)^2 = I$ et $\bar\psi = \psi^\dagger\gamma^0$, cette densité se simplifie remarquablement&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^0 = \bar\psi\,\gamma^0\,\psi = \psi^\dagger\gamma^0\gamma^0\psi = \psi^\dagger\psi
\;\Longrightarrow\;
\hat Q_{\text{brute}} = \int\mathrm{d}^3x\;\hat\psi^\dagger(x)\,\hat\psi(x)
$
</p>


<b>Comparons avec le hamiltonien</b>. Nous avions $\hat H = \int\mathrm d^3x\\;\hat\psi^\dagger\\,\mathrm{i}\partial_0\\,\hat\psi$. L'intégrande est <b>le même</b>, à ceci près qu'il manque ici le facteur $\mathrm{i}\partial_0$. Tout le calcul mené pour l'énergie se transpose donc mot pour mot&nbsp;: intégration spatiale produisant les $\delta^{(3)}$, disparition des termes croisés par orthogonalité hermitienne, simplification des $2E_{\boldsymbol p}$, réduction de la double somme sur les spins.


Inutile donc de le refaire. Reprenons-le tel quel, en ne surveillant que le seul endroit où l'absence de $\mathrm{i}\partial_0$ change quelque chose.

<b>La seule différence, et elle est décisive</b><br>
Dans le calcul de l'énergie, la dérivée temporelle apportait un facteur $+E_{\boldsymbol p}$ sur le terme de particules et $-E_{\boldsymbol p}$ sur celui d'antiparticules. Ici, <b>il n'y a pas de dérivée temporelle</b>&nbsp;: pas de facteur $E_{\boldsymbol p}$, et surtout <b>pas de signe moins</b>. Les deux termes ressortent avec le même signe&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat Q_{\text{brute}} = \int\mathrm{d}^3 p\,\sum_s\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} + \hat b_{s\boldsymbol p}\hat b^\dagger_{s\boldsymbol p}\right)
$
</p>

<b>L'ordre normal, et le déséquilibre</b><br>
Comme pour l'énergie, le second terme n'est pas ordonné, et le réordonner coûte un signe moins d'anticommutation&nbsp;:

<p style="text-align:center;">
$\displaystyle
: \hat b_{s\boldsymbol p}\hat b^\dagger_{s\boldsymbol p} : \; = -\,\hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}
$
</p>

Mais cette fois <b>ce signe moins n'a pas de partenaire</b> pour l'annuler, puisqu'aucun signe n'est venu de la dérivée temporelle. Il survit donc, et donne&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat Q_{\mathrm{Nc}} = \int\mathrm{d}^3 p\,\sum_s\left(\hat a^\dagger_{s\boldsymbol p}\hat a_{s\boldsymbol p} - \hat b^\dagger_{s\boldsymbol p}\hat b_{s\boldsymbol p}\right)
$
</p>

<b>La comptabilité, en une ligne</b><br>
L'énergie recevait <b>deux</b> signes moins qui se compensaient, d'où un résultat additif. La charge n'en reçoit qu'<b>un seul</b>, celui de l'anticommutation, d'où un résultat soustractif. <b>C'est la même anticommutation qui rend l'énergie positive et la charge signée.</b>

La conclusion physique est alors limpide&nbsp;: le premier terme compte les particules, le second les antiparticules, et pour que la symétrie $U(1)$, celle qui engendrera l'électromagnétisme, soit conservée, l'antimatière <b>doit</b> porter une charge de signe opposé à la matière.

</details>

</div>

Notons bien la différence de signe avec le hamiltonien&nbsp;: l'énergie <i>additionne</i> les deux espèces, la charge les <i>soustrait</i>. C'est exactement ce qu'on attend, et c'est ce qui permettra plus loin de distinguer un électron d'un positron.

Ce courant jouera un rôle vedette dans la suite du chapitre&nbsp;: c'est lui qui deviendra le courant électromagnétique.

<br>

### Le propagateur du fermion

Pour calculer des diffusions, il faut le propagateur. On peut l'obtenir par le calcul direct de $\langle 0|T\\,\hat\psi(x)\hat{\bar\psi}(y)|0\rangle$, ou par l'intégrale de chemin, qui recycle les nombres de Grassmann rencontrés dans la partie sur les intégrales fonctionnelles. Le résultat est le même.

<div id="theo">

<b>Propagateur du fermion libre</b>

<p style="text-align:center;">
$\displaystyle
\tilde G_0(p) = \frac{\mathrm{i}}{\not{\!\!p} - m + \mathrm{i}\epsilon} = \frac{\mathrm{i}\,(\not{\!\!p} + m)}{p^2 - m^2 + \mathrm{i}\epsilon}
$
</p>

où l'écriture $1/(\not{\\!\\!p} - m)$ désigne l'<b>inverse d'une matrice $4\times 4$</b>.

</div>

<br>

<div id="preuve">

<details>
<summary>D'où sortent les deux écritures&nbsp;?</summary>

<b>Première écriture&nbsp;: le propagateur est un inverse</b>

Le principe est celui de toutes les fonctions de Green rencontrées dans la partie qui leur était consacrée&nbsp;: le propagateur est la <b>réponse impulsionnelle</b> de l'opérateur qui gouverne le champ. Ici, cet opérateur est celui de Dirac, et la définition s'écrit

<p style="text-align:center;">
$\displaystyle
(\mathrm{i}\not{\!\!\partial} - m)\,S(x - y) = \delta^{(4)}(x - y)
$
</p>

Pour <b>passer en Fourier</b>, on développe les deux membres sur les ondes planes,

<p style="text-align:center;">
$\displaystyle
S(x) = \int\!\frac{\mathrm{d}^4 p}{(2\pi)^4}\,\tilde S(p)\,\mathrm{e}^{-\mathrm{i}p\cdot x}
\qquad
\delta^{(4)}(x) = \int\!\frac{\mathrm{d}^4 p}{(2\pi)^4}\,\mathrm{e}^{-\mathrm{i}p\cdot x}
$
</p>

Puis on <b>convertit la dérivée en multiplication</b>. C'est le mécanisme déjà utilisé dans la partie précédente pour établir les équations de Dirac en impulsion&nbsp;: dériver une exponentielle revient à multiplier par son exposant, $\partial_\mu \to -\mathrm{i}p_\mu$, donc

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\not{\!\!\partial} = \mathrm{i}\gamma^\mu\partial_\mu \;\longrightarrow\; \mathrm{i}\gamma^\mu(-\mathrm{i}p_\mu) = \gamma^\mu p_\mu = \; \not{\!\!p}
$
</p>

Enfin, on <b>identifie les intégrandes</b>. L'équation différentielle devient une équation <b>algébrique</b> entre matrices $4\times 4$&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p} - m)\,\tilde S(p) = I_{4\times 4}
\quad\Longrightarrow\quad
\tilde S(p) = \big(\not{\!\!p} - m\big)^{-1}
$
</p>

En rétablissant la normalisation usuelle du propagateur de Feynman, avec son $\mathrm{i}$ au numérateur et sa prescription causale $\mathrm{i}\epsilon$ la même que pour le champ scalaire et pour la même raison,

<p style="text-align:center;">
$\displaystyle
\tilde G_0(p) = \frac{\mathrm{i}}{\not{\!\!p} - m + \mathrm{i}\epsilon}
$
</p>

Il faut lire cette barre de fraction comme un <b>inverse matriciel</b>, et non comme une division. Écrire $1/(\not{\\!\\!p} - m)$ est un abus de notation commode, mais l'objet est bien la matrice qui, multipliée par $\not{\\!\\!p} - m$, redonne l'identité.

<b>Seconde écriture&nbsp;: rationaliser le dénominateur</b>

Un inverse de matrice est malcommode. L'astuce consiste à faire exactement ce qu'on fait avec un nombre complexe&nbsp;: multiplier haut et bas par le conjugué, ici $(\not{\\!\\!p} + m)$.

On utilise l'identité qui avait permis, à l'ouverture de la partie précédente, de prendre la racine carrée de l'opérateur de Klein--Gordon&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p})^2 = \gamma^\mu\gamma^\nu\,p_\mu p_\nu
= \tfrac{1}{2}\{\gamma^\mu, \gamma^\nu\}\,p_\mu p_\nu
= g^{\mu\nu}p_\mu p_\nu = p^2
$
</p>

la deuxième égalité venant de ce que $p_\mu p_\nu$ est <b>symétrique</b> en $\mu\nu$&nbsp;: seule la partie symétrique du produit de matrices survit, c'est-à-dire l'anticommutateur, lequel vaut $2g^{\mu\nu}$ par l'algèbre de Clifford.

Puis on développe le produit. Les deux termes croisés en $m\not{\\!\\!p}$ se retranchent&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p} - m)(\not{\!\!p} + m) = (\not{\!\!p})^2 + m\not{\!\!p} - m\not{\!\!p} - m^2 = p^2 - m^2
$
</p>

<b>Le résultat est un scalaire</b>, et non une matrice&nbsp;: c'est tout l'intérêt de la manœuvre.

L'inverse s'écrit donc explicitement

<p style="text-align:center;">
$\displaystyle
\big(\not{\!\!p} - m\big)^{-1} = \frac{\not{\!\!p} + m}{p^2 - m^2}
\quad\Longrightarrow\quad
\tilde G_0(p) = \frac{\mathrm{i}\,(\not{\!\!p} + m)}{p^2 - m^2 + \mathrm{i}\epsilon}
$
</p>

</details>
</div>

<br>

<div id="preuve">
<details>
<summary>
Pourquoi préférer la seconde forme&nbsp;?
</summary>

Trois raisons, dont la dernière n'est pas la moindre.

Elle <b>sépare les deux natures</b>&nbsp;: le dénominateur est un scalaire, qui porte le pôle donc la propagation&nbsp;; le numérateur est une matrice, qui porte la structure spinorielle.

Elle rend <b>le pôle visible</b>&nbsp;: il est en $p^2 = m^2$, exactement comme pour un champ scalaire. La particule de Dirac se propage donc sur sa couche de masse comme n'importe quelle autre.

Et surtout, <b>on reconnaît son numérateur</b>. La matrice $\not{\\!\\!p} + m$ n'est autre que la <b>somme de spin</b> établie dans la partie précédente&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum_{s=1}^{2} u^s(p)\,\bar u^s(p) = \; \not{\!\!p} + m
$
</p>

Ce n'est pas une coïncidence, et cela se comprend physiquement&nbsp;: propager une particule d'impulsion $p$, c'est la créer dans un état de spin quelconque puis l'annihiler, donc sommer sur les deux polarisations intermédiaires. <b>Le numérateur du propagateur est le projecteur sur les états physiques.</b> C'est ce qui rendra les calculs de traces du dernier chapitre si mécaniques&nbsp;: les sommes de spin des lignes externes et les numérateurs des lignes internes sont le même objet.

</details>

</div>


Insistons sur le point qui déroute le plus&nbsp;: <b>le propagateur du fermion est une matrice $4\times 4$</b>, et cette matrice raconte une histoire. Écrivons-la en représentation chirale&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde G_0(p) = \frac{\mathrm{i}}{p^2 - m^2 + \mathrm{i}\epsilon}\begin{pmatrix} m & p^0 - \boldsymbol p\cdot\boldsymbol\sigma \\ p^0 + \boldsymbol p\cdot\boldsymbol\sigma & m \end{pmatrix}
$
</p>

<div id="theo">

<b>Lecture par blocs</b> 

Le propagateur est formé de $\hat\psi(x)\hat{\bar\psi}(y)$, donc chaque bloc répond à la question «&nbsp;quelle chiralité entre, quelle chiralité sort&nbsp;?&nbsp;»&nbsp;:

<ul style="margin-top:0.5em;margin-bottom:1em;">
<li>les blocs <b>hors diagonale</b>, qui conservent la chiralité, portent le terme cinétique $p^0 \mp \boldsymbol p\cdot\boldsymbol\sigma$&nbsp;;</li>
<li>les blocs <b>diagonaux</b>, qui renversent la chiralité, portent la <b>masse</b> $m$.</li>
</ul>

</div>

<br>

<div id="preuve">

**Pourquoi les termes diagonaux renversent la chiralité alors que les hors-diagonale la conservent&nbsp;?**

En représentation chirale, le spineur de Dirac se décompose en $\psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}$.

Or le propagateur calcule le produit $\psi(x)\bar\psi(y)$. Par bloc, cela donne&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi\bar\, \psi =  \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}\begin{pmatrix} \psi_L^\dagger & \psi_R^\dagger \end{pmatrix}   \gamma^0 =  \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}  \begin{pmatrix} \psi_L^\dagger & \psi_R^\dagger \end{pmatrix}  \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix} =  \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}  \begin{pmatrix} \psi_R^\dagger & \psi_L^\dagger \end{pmatrix}  =  \begin{pmatrix} \psi_L \psi_R^\dagger & \psi_L \psi_L^\dagger \\ \psi_R \psi_R^\dagger & \psi_R \psi_L^\dagger \end{pmatrix}
$
</p>

</div>

C'est très exactement ce que les équations couplées de l'équation de Dirac annonçaient, dans la partie précédente&nbsp;: <b>c'est la masse qui couple gauche et droite</b>. En resommant la série $G = G_0 + G_0 V G_0 + \cdots$, chaque bloc devient une superposition de toutes les histoires d'oscillation $L \to R \to L \to \cdots$ compatibles avec les chiralités d'entrée et de sortie.

<!-- FIGURE à redessiner (d'après fig. 38.1 de L&B) : une grande matrice 2x2 dessinée entre parenthèses. Chaque case contient une somme de petits diagrammes : une ligne fermionique verticale (temps vers le haut) ponctuée de croix (insertions de masse), avec un nombre pair de croix pour les blocs hors diagonale (chiralité conservée) et impair pour les blocs diagonaux (chiralité renversée). Étiqueter les extrémités d'entrée et de sortie par L ou R. Légende : « Le propagateur 4x4 lu comme un catalogue d'oscillations de chiralité ; chaque croix est une insertion de masse m ». -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/propfermions.png" style="box-shadow:none;background:none;">
</div>

Autrement dit, <b>une particule de Dirac massive se propage en clignotant entre gauche et droite</b>, et chaque clignotement coûte une insertion de masse. Une particule sans masse, elle, ne clignote pas&nbsp;: sa chiralité est conservée, ce qui redonne les deux équations de Weyl découplées.

<br>

### Les règles de Feynman fermioniques

<div id="def">

<b>Règles de Feynman pour les fermions</b> (en espace des impulsions)

<ul style="margin-top:0.5em;">
<li>ligne fermionique interne&nbsp;: $\frac{\mathrm{i}(\not{p} + m)}{p^2 - m^2 + \mathrm{i}\epsilon}$&nbsp;;</li>
<li>fermion entrant&nbsp;: $u^s(p)$&nbsp;; antifermion entrant&nbsp;: $\bar v^s(p)$&nbsp;;</li>
<li>fermion sortant&nbsp;: $\bar u^s(p)$&nbsp;; antifermion sortant&nbsp;: $v^s(p)$&nbsp;;</li>
<li>boucle fermionique&nbsp;: trace sur le produit de matrices, et un facteur $-1$&nbsp;;</li>
<li>signes moins supplémentaires lors de l'échange de deux lignes externes identiques.</li>
</ul>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/reglesfeynmanfermions.png" style="box-shadow:none;background:none;">
</div>

<br>

<div id="theo">

<b>Le sens de lecture.</b> On lit une ligne fermionique <b>à rebours de sa flèche</b>&nbsp;: d'abord le spineur barré de sortie, puis les vertex et propagateurs rencontrés en remontant, puis le spineur d'entrée. La ligne complète forme alors le produit

<p style="text-align:center;">
$\displaystyle
\underbrace{\bar u(p')}_{\text{ligne}} \times \underbrace{\text{matrices } 4\times 4}_{\text{vertex, propagateurs}} \times \underbrace{u(p)}_{\text{colonne}}
$
</p>

c'est-à-dire un <b>nombre</b>, et non une matrice. Se tromper de sens laisse un objet matriciel dont on ne sait que faire.

</div>

**Mise en jambes**, avec la théorie de Yukawa $\mathcal L_{\mathrm I} = -g\\,\bar\psi\psi\\,\phi$, c'est-à-dire des électrons échangeant des scalaires massifs. C'est la version spinorielle du calcul mené dans la partie sur les propagateurs, et elle sert de contrôle&nbsp;: le formalisme doit redonner les résultats scalaires quand le spin ne fait que passer.

<div id="preuve">

<details>
<summary>Diffusion électron&ndash;électron par échange de Yukawa</summary>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/canaltfermions.png" style="box-shadow:none;background:none;">
</div>

<b>Le canal $t$</b> (l'électron $p$ ressort en $p'$) donne directement, en appliquant les règles&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M_1 = (-\mathrm{i} g)^2\,\bar u^{s'}(p')\,u^s(p)\,\frac{\mathrm{i}}{(p' - p)^2 - m_\phi^2}\,\bar u^{r'}(k')\,u^r(k)
$
</p>

On y reconnaît la structure attendue&nbsp;: deux vertex, un propagateur scalaire, et deux courants $\bar u u$ contractés.

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/canalufermions.png" style="box-shadow:none;background:none;">
</div>

<b>Le canal $u$</b> (les deux électrons sortants sont échangés) porte un <b>signe moins global</b>. Ce signe n'est pas une convention&nbsp;: il vient de l'anticommutation des opérateurs de création dans l'élément de matrice $S$. C'est la première manifestation concrète de la statistique de Fermi dans un calcul, et elle survivra à toutes les théories fermioniques.

<b>La limite non relativiste</b><br>
Pour des particules discernables, seul le canal $t$ contribue. On utilise alors l'orthonormalisation des spineurs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u^{s'}(p)\,u^s(p) = 2m_{\mathrm e}\,\delta^{s's}
$
</p>

<b>Le $\delta^{s's}$ est le résultat physique&nbsp;:</b> la diffusion <b>ne peut pas retourner le spin</b>. C'est cohérent avec le fait que le couplage $\bar\psi\psi$ est un scalaire, donc aveugle au spin.

En reportant, avec $(p'-p)^2 \to -(\boldsymbol p - \boldsymbol p')^2$ dans la limite statique&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M = \frac{4\mathrm{i} g^2 m_{\mathrm e}^2}{(\boldsymbol p - \boldsymbol p')^2 + m_\phi^2}\,\delta^{s's}\,\delta^{r'r}
$
</p>

C'est le potentiel de Yukawa attractif obtenu dans la partie sur les propagateurs, augmenté des deltas de conservation du spin. Le contrôle est concluant.

</details>

</div>

<br>

### Le principe de jauge et la naissance de QED

Dernier acte, et le plus important. L'invariance <b>globale</b> $\psi \to \psi\\,\mathrm{e}^{\mathrm{i}\alpha}$ nous a donné un courant conservé. Que se passe-t-il si l'on exige l'invariance <b>locale</b>, c'est-à-dire avec une phase $\alpha(x)$ différente en chaque point&nbsp;?

<div id="theo">

<b>Le principe de jauge</b> 

Exiger l'invariance locale <b>dicte</b> l'interaction&nbsp;: on ne la choisit pas, on la subit.

</div>


#### Le problème&nbsp;: la dérivée trahit la phase locale

Le terme de masse $\bar\psi\psi$ ne pose aucun problème&nbsp;: les deux phases, l'une en $\mathrm e^{+\mathrm i\alpha}$ et l'autre en $\mathrm e^{-\mathrm i\alpha}$, se compensent point par point, même si $\alpha$ varie. C'est la <b>dérivée</b> qui trahit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu\left(\psi\,\mathrm{e}^{\mathrm{i}\alpha(x)}\right) = \mathrm{e}^{\mathrm{i}\alpha(x)}\left(\partial_\mu\psi + \mathrm{i}\,\psi\,\partial_\mu\alpha\right)
$
</p>

Le premier terme est celui qu'on voulait&nbsp;; le second est un <b>parasite</b>, et il n'existe que parce que $\alpha$ dépend du point. Comprenons bien d'où il vient, car c'est le cœur de l'affaire.

<div id="theo">

Une dérivée <b>compare</b> le champ en deux points voisins. Or si la convention de phase change d'un point à l'autre, cette comparaison mélange deux choses&nbsp;: la variation <i>réelle</i> du champ, et le simple changement de convention. La dérivée ordinaire est donc devenue un mauvais instrument de mesure.

</div>

#### Le remède&nbsp;: une dérivée qui sait comparer

Il faut un objet qui <b>défalque</b> le changement de convention avant de comparer. Cela demande d'introduire un nouveau champ, $A_\mu(x)$, dont le seul rôle sera de dire de combien la convention tourne quand on se déplace.

<div id="def">

<b>Dérivée covariante</b>

<p style="text-align:center;">
$\displaystyle
D_\mu = \partial_\mu + \mathrm{i}\,q\,A_\mu(x)
\qquad\text{avec}\qquad
A_\mu \to A_\mu - \frac{1}{q}\,\partial_\mu\alpha
$
</p>

Le remplacement de $\partial_\mu$ par $D_\mu$ dans un lagrangien s'appelle le <b>couplage minimal</b>. C'est la même recette que celle appliquée au champ scalaire complexe à la partie&nbsp;5, et celle qui avait servi à brancher l'électromagnétisme dans l'équation de Pauli à la partie&nbsp;13, sous la forme $\hat{\boldsymbol p} \to \hat{\boldsymbol p} - q\boldsymbol A$.

</div>

Le mot «&nbsp;minimal&nbsp;» mérite d'être justifié&nbsp;: on n'ajoute <b>rien d'autre</b> que ce que la symétrie exige. Aucun terme supplémentaire, aucun paramètre libre en dehors de $q$. C'est le couplage le plus économe qui fasse le travail, et nous verrons à la section suivante que tous les autres candidats sont interdits.

<div id="preuve">

<details>
<summary>Vérifions que la compensation est exacte</summary>

Appliquons $D_\mu$ au champ transformé, en faisant subir à $A_\mu$ sa propre transformation&nbsp;:

<p style="text-align:center;">
$\displaystyle
D_\mu\big(\psi\,\mathrm{e}^{\mathrm{i}\alpha}\big) = \left[\partial_\mu + \mathrm{i}q\left(A_\mu - \tfrac{1}{q}\partial_\mu\alpha\right)\right]\psi\,\mathrm{e}^{\mathrm{i}\alpha}
$
</p>

La dérivée ordinaire produit le parasite $+\mathrm{i}\\,\psi\\,\partial_\mu\alpha$, comme plus haut. Et le terme nouveau produit $-\mathrm{i}\\,\psi\\,\partial_\mu\alpha$, puisque le $q$ se simplifie. <b>Les deux s'annulent exactement</b>, et il reste

<p style="text-align:center;">
$\displaystyle
D_\mu\big(\psi\,\mathrm{e}^{\mathrm{i}\alpha}\big) = \mathrm{e}^{\mathrm{i}\alpha}\,\big(D_\mu\psi\big)
$
</p>

C'est-à-dire que $D_\mu\psi$ se transforme <b>exactement comme $\psi$ lui-même</b>&nbsp;: il ramasse la même phase et rien de plus. D'où le nom de dérivée «&nbsp;covariante&nbsp;», qui signifie littéralement «&nbsp;qui varie de la même façon&nbsp;».

Et par conséquent, tout produit du type $\bar\psi\\,\Gamma\\,D_\mu\psi$ est invariant, les deux phases se compensant comme dans le terme de masse. <b>L'invariance locale est restaurée.</b>

</details>

</div>

#### Le résultat&nbsp;: l'interaction n'était pas invitée

Développons maintenant le lagrangien de Dirac muni de sa dérivée covariante&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\psi\,(\mathrm{i}\gamma^\mu D_\mu - m)\,\psi = \underbrace{\bar\psi(\mathrm{i}\not{\!\!\partial} - m)\psi}_{\text{électron libre}} \;\underbrace{-\; q\,\bar\psi\gamma^\mu\psi\,A_\mu}_{\text{apparu tout seul}}
$
</p>

<b>Un terme d'interaction est apparu, et nous ne l'avons pas demandé.</b> Il est le sous-produit mécanique d'une exigence de symétrie.

Mieux encore, ce terme n'est pas quelconque. Écrivons-le sous la forme qui parle&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\mathrm I} = -\,J^\mu_{\mathrm{em}}\,A_\mu \quad$
avec
$\displaystyle
\quad J^\mu_{\mathrm{em}} = q\,\bar\psi\gamma^\mu\psi
$
</p>

</div>

Prenons le temps de lire cette écriture, car elle referme une boucle ouverte deux sections plus haut.

<b>La forme $-J^\mu A_\mu$ est celle de l'électromagnétisme classique</b>, où l'énergie d'interaction d'un courant avec un potentiel s'écrit exactement ainsi. Le terme que la symétrie a fabriqué est donc, littéralement, un couplage courant-potentiel.

<b>Et ce courant, nous le connaissons déjà.</b> Au début du chapitre, le théorème de Noether appliqué à la symétrie $U(1)$ <i>globale</i> nous avait donné le courant conservé $\bar\psi\gamma^\mu\psi$. C'est le même, à un facteur $q$ près. Autrement dit&nbsp;:

<div id="theo">

Le courant qui <b>source</b> le champ électromagnétique est le courant qui est <b>conservé</b> par la symétrie de phase. Ce sont deux rôles très différents, et rien n'obligeait a priori le même objet à les jouer tous les deux.

</div>

Cette coïncidence n'en est pas une, et elle a une conséquence de poids.

<b>Elle n'est pas postulée.</b> Dans un cours d'électromagnétisme, on <i>déclare</i> que le champ est engendré par les charges et les courants. Ici, personne ne l'a déclaré&nbsp;: le couplage minimal a produit $-J^\mu A_\mu$ tout seul, avec le courant de Noether dedans.

<b>Et elle garantit la cohérence de la théorie.</b> Puisque le courant qui source le champ est un courant de Noether, il est <b>automatiquement conservé</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu J^\mu_{\mathrm{em}} = 0
$
</p>

Ce n'est pas une contrainte qu'on impose, c'est une conséquence. Et c'est heureux, car nous verrons plus loin qu'un photon <b>ne peut se coupler qu'à un courant conservé</b> sous peine d'incohérence, ce qui est tout le contenu de l'identité de Ward. La symétrie de jauge fournit donc dans le même élan l'interaction et la condition qui la rend admissible.

<!-- FIGURE à redessiner (d'après fig. 38.2 de L&B) : diagramme de flux à quatre boîtes reliées par des flèches épaisses, dessinées à main levée.
En haut à gauche, une boîte ronde étiquetée « Symétrie GLOBALE ». En haut à droite, une boîte rectangulaire étiquetée « Charge CONSERVÉE » ; une grosse flèche horizontale les relie, portant le mot « NOETHER » écrit dedans.
En bas à gauche, une boîte rectangulaire en pointillés étiquetée « Symétrie LOCALE » ; une flèche verticale descend vers elle depuis la boîte ronde, annotée sur sa gauche « on promeut, en ajoutant un champ de jauge $A_\mu$ ».
En bas à droite, une boîte étiquetée « INTERACTION ». DEUX flèches convergent vers elle, et c'est le point clé du schéma : l'une vient de « Symétrie locale », l'autre vient de « Charge conservée ». Annoter la confluence par « dérivée covariante, couplage minimal ».
Amélioration par rapport à l'original : ajouter sur la flèche venant de « Charge conservée » l'étiquette $J^\mu_{\mathrm{em}} = q\bar\psi\gamma^\mu\psi$, et sur celle venant de « Symétrie locale » l'étiquette $-J^\mu A_\mu$ ; puis, sous la boîte « INTERACTION », une accolade ramenant vers « Charge conservée » avec la mention « $\partial_\mu J^\mu = 0$ : la conservation revient garantir la cohérence », de façon à fermer le cycle. L'original laisse le schéma ouvert alors que la boucle se referme.
Légende : « La symétrie ne donne pas seulement une charge conservée : promue en symétrie locale, elle fabrique l'interaction, et le courant conservé est celui qui la source. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/orgaqed.png" style="box-shadow:none;background:none;">
</div>

Le schéma résume la situation, et sa forme importe autant que son contenu. Deux chemins partent de la même boîte, «&nbsp;symétrie globale&nbsp;»&nbsp;: l'un horizontal, celui de Noether, qui mène à la charge conservée&nbsp;; l'autre vertical, celui de la promotion en symétrie locale. **Et les deux se rejoignent sur la boîte «&nbsp;interaction&nbsp;»**, parce qu'il faut les deux pour l'obtenir : la symétrie locale fournit la <i>forme</i> du couplage, $-J^\mu A_\mu$, et le courant de Noether fournit l'<i>objet</i> qu'on y branche.

C'est cette confluence qui fait la force du principe de jauge, et c'est elle qu'il faut retenir du chapitre.


En ajoutant le terme de Maxwell pour donner une dynamique au champ de jauge, on obtient l'équation-monument.

<div id="theo">

<b>Lagrangien de l'électrodynamique quantique</b>

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\mathrm{QED}} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} + \bar\psi\,(\mathrm{i}\gamma^\mu\partial_\mu - m)\,\psi - q\,\bar\psi\gamma^\mu\psi\,A_\mu
$
</p>

Trois termes&nbsp;: le photon libre, l'électron libre, et leur interaction, cette dernière étant entièrement fixée par la symétrie de jauge $U(1)$.

</div>

{{%notice note%}}

Pour une motivation du terme de Maxwell en lien avec la symétrie de jauge et la géométrie différentielle&nbsp;:  [**C'est ici** (partie 5)](../tqc5/#théorie-de-jauge-la-plus-simple-lélectromagnétisme).

{{%/notice%}}


### Bilan

<p style="text-align:center;">
$\displaystyle
\mathcal L = \bar\psi(\mathrm{i}\not{\!\!\partial} - m)\psi
\;\xrightarrow{\ \text{Euler--Lagrange}\ }\;
\text{équation de Dirac}
\;\xrightarrow{\ \text{Legendre}\ }\;
\mathcal H = \psi^\dagger\,\mathrm{i}\partial_0\psi
$
</p>

<p style="text-align:center;">
$\displaystyle
\{\hat\psi, \hat\psi^\dagger\} = \delta
\;\xrightarrow{\ \text{modes}\ }\;
\hat H = \int\!\mathrm{d}^3p\sum_s E_{\boldsymbol p}\big(\hat n^{(a)} + \hat n^{(b)}\big) > 0
\;\xrightarrow{\ \text{Noether}\ }\;
\hat Q \propto \hat n^{(a)} - \hat n^{(b)}
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde G_0 = \frac{\mathrm{i}(\not{\!\!p} + m)}{p^2 - m^2}
\;\xrightarrow{\ \text{règles de Feynman}\ }\;
U(1)\ \text{locale}
\;\xrightarrow{\ D_\mu = \partial_\mu + \mathrm{i}qA_\mu\ }\;
\mathcal L_{\mathrm{QED}}
$
</p>

### Pièges

<ul>
<li>Commutateurs pour Dirac $=$ vide instable. Le signe du terme en $\hat b^\dagger\hat b$ dans $\hat H$ est le juge de paix&nbsp;: les anticommutateurs sont une <b>nécessité dynamique</b>, pas une convention.</li>
<li>Le propagateur fermionique est une matrice $4\times 4$. Écrire $1/(\not{\!\!p} - m)$ sans y penser fait oublier qu'un ordre de facteurs se cache partout&nbsp;: toujours lire les lignes fermioniques à rebours de la flèche, pour que le résultat soit un nombre.</li>
<li>Signe relatif entre canaux $t$ et $u$, et facteur $-1$ par boucle fermionique.</li>
<li>$\bar\psi = \psi^\dagger\gamma^0$, et non $\psi^\dagger$&nbsp;: les invariants de Lorentz se construisent avec la barre, parce que les boosts de spineurs ne sont pas unitaires.</li>
<li>La forme compacte $\mathcal H = \psi^\dagger\mathrm{i}\partial_0\psi$ utilise l'équation du mouvement&nbsp;: elle ne vaut que <b>sur couche</b>, et n'est pas une définition générale du hamiltonien.</li>
<li>Il existe un signe de différence entre les définitions du propagateur scalaire et du propagateur fermionique en termes de fonctions de Green.</li>
<li>Le courant électromagnétique n'est pas postulé&nbsp;: le <b>couplage minimal</b> (remplacer $\partial_\mu$ par $D_\mu$) le fabrique tout seul, et il se trouve être le courant de Noether de la symétrie de phase. Deux rôles très différents joués par le même objet&nbsp;: <b>sourcer</b> le champ et être <b>conservé</b>. C'est cette coïncidence qui garantit $\partial_\mu J^\mu_{\mathrm{em}} = 0$ sans qu'on l'impose, et donc qui rend le couplage au photon admissible.</li>
</ul>

<br>


## Petit guide de l'électrodynamique quantique

QED n'est pas soluble exactement&nbsp;: le programme est donc de rassembler tout ce qu'il faut pour la théorie des perturbations. Trois pièces manquent&nbsp;: le propagateur du photon, les règles de Feynman, et la garantie que l'invariance de jauge survit aux diagrammes.

### Le propagateur du photon, et le fantôme $k^\mu k^\nu/m^2$

La route la plus naturelle consiste à prendre la limite sans masse du propagateur du <b>champ vectoriel massif</b>, celui dont la partie sur la quantification canonique avait établi l'équation de Proca et compté les trois polarisations. Nous n'en avions cependant jamais calculé le propagateur&nbsp;: faisons-le maintenant, car ce calcul contient déjà l'explication de la difficulté qui va suivre.

<div id="theo">

**Le propagateur de Proca**

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}(k) = \frac{\mathrm{i}\left(-g_{\mu\nu} + k_\mu k_\nu/m^2\right)}{k^2 - m^2 + \mathrm{i}\epsilon}
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Calcul et origine du terme en $1/m^2$</summary>

<b>Écrire l'équation du mouvement en impulsion</b><br>
L'équation de Proca s'écrit $\partial_\mu F^{\mu\nu} + m^2A^\nu = 0$. En y développant $F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial^2 A^\nu - \partial^\nu(\partial_\mu A^\mu) + m^2 A^\nu = 0
$
</p>

En Fourier, avec $\partial_\mu \to -\mathrm{i}k_\mu$, tout devient algébrique&nbsp;:

<p style="text-align:center;">
$\displaystyle
\underbrace{\Big[(m^2 - k^2)\,g^{\nu\mu} + k^\nu k^\mu\Big]}_{\textstyle M^{\nu\mu}}\,A_\mu = 0
$
</p>

<b>Le propagateur est l'inverse de $M$</b><br>
C'est le principe déjà employé pour le fermion&nbsp;: la fonction de Green d'un opérateur est son inverse. Et comme $M$ ne peut être construit qu'avec les deux seuls tenseurs disponibles, $g_{\mu\nu}$ et $k_\mu k_\nu$, son inverse l'est aussi. On postule donc

<p style="text-align:center;">
$\displaystyle
(M^{-1})_{\mu\rho} = a\,g_{\mu\rho} + b\,k_\mu k_\rho
$
</p>

et l'on détermine $a$ et $b$ en exigeant $M^{\nu\mu}(M^{-1})\_{\mu\rho} = \delta^\nu_\rho$. Le produit se développe en

<p style="text-align:center;">
$\displaystyle
a(m^2-k^2)\,\delta^\nu_\rho + \Big[a + b(m^2 - k^2) + b\,k^2\Big]\,k^\nu k_\rho
$
</p>

<b>Identifier les deux structures</b><br>
Le coefficient de $\delta^\nu_\rho$ doit valoir 1, celui de $k^\nu k_\rho$ doit s'annuler&nbsp;:

<p style="text-align:center;">
$\displaystyle
a = \frac{1}{m^2 - k^2}\quad$
et
$\displaystyle
\quad a + b\,m^2 = 0
\;\Longrightarrow\;
b = -\frac{a}{m^2}
$
</p>

Dans la seconde équation, les deux termes en $k^2$ se sont compensés, et il n'est resté que $m^2$. Pour en tirer $b$, il a donc fallu <b>diviser par $m^2$</b>. C'est là, et nulle part ailleurs, que naît le $1/m^2$ du propagateur.

<b>Conclure</b><br>
En rétablissant le facteur $\mathrm{i}$ et la prescription causale&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}(k) = \frac{\mathrm{i}\left(-g_{\mu\nu} + k_\mu k_\nu/m^2\right)}{k^2 - m^2 + \mathrm{i}\epsilon}
$
</p>

<b>Morale</b><br>
L'opérateur $M$ n'est inversible <b>que parce que la masse est non nulle</b>. Vérifions-le en le contractant avec $k_\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
M^{\nu\mu}k_\mu = (m^2 - k^2)k^\nu + k^\nu k^2 = m^2\,k^\nu
$
</p>

Si $m \neq 0$, le résultat est non nul et $M$ est régulier. Mais si $m = 0$, alors $M^{\nu\mu}k_\mu = 0$&nbsp;: l'opérateur <b>annihile $k_\mu$</b>, il devient un projecteur, et un projecteur n'a pas d'inverse.

Ce n'est pas un accident de calcul, c'est <b>l'invariance de jauge qui se manifeste</b>&nbsp;: ajouter $k_\mu\chi$ à $A_\mu$ ne change rien à la physique, donc l'équation du mouvement ne peut pas déterminer $A_\mu$ de façon unique, donc l'opérateur est nécessairement singulier. La masse, en brisant l'invariance de jauge, rendait le problème bien posé.

<b>D'où la difficulté qui nous attend.</b> Le terme $k_\mu k_\nu/m^2$ est le prix payé pour cette inversibilité, et il explose exactement quand on retire ce qui la garantissait. L'identité de Ward le rendra inoffensif en fin de chapitre&nbsp;; mais nous savons déjà que sa disparition ne sera pas gratuite, puisqu'il faudra en échange <b>fixer la jauge</b>.

</details>

</div>

Faisons tendre la masse vers zéro&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}(k) = \lim_{m\to 0}\frac{\mathrm{i}\left(-g_{\mu\nu} + k_\mu k_\nu/m^2\right)}{k^2 - m^2 + \mathrm{i}\epsilon}
$
</p>

Comme annoncé, le terme $k_\mu k_\nu/m^2$ explose. Nous contractons ici une <b>dette</b>, que la fin du chapitre remboursera&nbsp;: l'invariance de jauge rendra ce terme inoffensif, car il ne contribue à aucune amplitude physique. Admettons-le et jetons-le.

<div id="theo">

<b>Propagateur du photon</b> (jauge de Feynman)

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}(k) = \frac{-\mathrm{i}\,g_{\mu\nu}}{k^2 + \mathrm{i}\epsilon}
$
</p>

</div>

Avant d'accepter un objet aussi simple, vérifions qu'il contient bien la physique attendue. Le test&nbsp;: faire interagir deux courants électriques par échange d'un photon, et regarder ce qui sort.

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/echphot.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

<details>
<summary>Un seul propagateur, deux physiques&nbsp;: Coulomb et la lumière</summary>

L'amplitude d'interaction entre deux courants $J^\mu_a$ et $J^\nu_b$ s'écrit

<p style="text-align:center;">
$\displaystyle
\mathcal A = J^\mu_a\left(\frac{-\mathrm{i} g_{\mu\nu}}{k^2}\right)J^\nu_b
= \frac{-\mathrm{i}}{k^2}\left(J^0_aJ^0_b - J^1_aJ^1_b - J^2_aJ^2_b - J^3_aJ^3_b\right)
$
</p>

<b>Choisissons un référentiel commode</b>, où le photon échangé se propage selon $z$&nbsp;: $k^\mu = (k^0, 0, 0, k^3)$.

<b>Utilisons la conservation du courant</b>, $k_\mu J^\mu = 0$, qui donne ici $k^0J^0 = k^3J^3$, soit $J^3 = (k^0/k^3)J^0$. Cela permet d'éliminer $J^3$ au profit de $J^0$&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^0_aJ^0_b - J^3_aJ^3_b = J^0_aJ^0_b\left(1 - \frac{(k^0)^2}{(k^3)^2}\right) = -\,J^0_aJ^0_b\,\frac{k^2}{(k^3)^2}
$
</p>

en reconnaissant $k^2 = (k^0)^2 - (k^3)^2$. Le facteur $k^2$ ainsi produit se simplifie contre le dénominateur du propagateur, et il reste

<p style="text-align:center;">
$\displaystyle
\mathcal A = \mathrm{i}\,\frac{J^0_a J^0_b}{(k^3)^2} + \mathrm{i}\,\frac{J^1_a J^1_b + J^2_a J^2_b}{(k^0)^2 - (k^3)^2}
$
</p>

<b>Deux morceaux, deux physiques</b>

Le premier, en $J^0J^0/\boldsymbol k^2$, n'a <b>plus de pôle</b>&nbsp;: ce n'est pas une particule qui se propage, c'est la transformée de Fourier du <b>potentiel de Coulomb instantané</b>, répulsif entre charges de même signe. Son instantanéité n'est qu'un artefact du découpage non covariant que nous venons de faire&nbsp;; c'est le terme dominant du régime non relativiste, et le fondement de toute la matière condensée.

Le second garde le pôle en $k^2 = 0$&nbsp;: c'est le photon <b>rayonné</b>. Et il ne couple que $J^1$ et $J^2$, c'est-à-dire les directions <b>transverses</b> à la propagation. On lit donc directement qu'il n'existe que <b>deux polarisations</b> physiques, alors que le propagateur en transportait apparemment quatre.

Moralité&nbsp;: un seul objet, $-\mathrm{i}g_{\mu\nu}/k^2$, contient à la fois l'électrostatique et la lumière. Les deux composantes «&nbsp;en trop&nbsp;» ne créent pas de particules parasites&nbsp;; elles conspirent pour fabriquer le Coulomb instantané, et rien d'autre.

</details>

</div>

<br>

### Les règles de Feynman de QED

L'interaction, héritée du chapitre précédent, est

<p style="text-align:center;">
$\displaystyle
\hat{\mathcal H}_{\mathrm I} = q\,\hat{\bar\psi}\,\gamma^\mu\,\hat\psi\,\hat A_\mu \quad$
avec
$\displaystyle
\quad q = Q|e|
$
</p>

où $Q$ est la charge de la particule en unités de $|e|$ ($Q = -1$ pour l'électron).


#### Un seul vertex

Ce terme d'interaction ne contient que <b>trois</b> champs, $\hat{\bar\psi}$, $\hat\psi$ et $\hat A_\mu$. Or dans la série de Dyson, chaque ordre apporte un facteur $\hat{\mathcal H}_{\mathrm I}$, et chacun de ces facteurs doit voir ses trois champs contractés avec le reste du diagramme. **Chaque point d'interaction porte donc exactement trois lignes** : une ligne fermionique qui entre, une qui sort, une ligne de photon. Il n'y a pas d'autre possibilité, parce qu'il n'y a pas d'autre terme.

Et il n'y a pas d'autre terme parce que nous ne l'avons pas choisi&nbsp;: le principe de jauge l'a <b>dicté</b>. Reste à vérifier que rien d'autre ne pouvait s'y glisser.

<div id="preuve">

<details>
<summary>Les couplages qu'on aurait pu imaginer, et pourquoi ils sont tous interdits</summary>

Cherchons tous les termes qu'on pourrait écrire avec un champ de Dirac et un champ de jauge, et voyons chacun tomber.

<ul style="margin-top:1em; margin-bottom:0.5em;">
<li style="margin-bottom:-0.5em;"><b>$\bar\psi\psi\,A_\mu A^\mu$</b><br>
Lorentz-invariant, pourtant interdit&nbsp;: sous une transformation de jauge $A_\mu \to A_\mu - \frac{1}{q}\partial_\mu\alpha$, le produit $A_\mu A^\mu$ n'est pas invariant. <b>La symétrie de jauge l'exclut.</b>
</li>
<br>
<li style="margin-bottom:-0.5em;"><b>$\bar\psi\gamma^\mu\gamma^5\psi\,A_\mu$</b>, le couplage <b>axial</b><br>
Celui-là passe l'épreuve de la jauge et celle de Lorentz. Mais $\gamma^5$ change de signe sous la parité&nbsp;: ce couplage <b>violerait $\mathrm P$</b>. Or l'électromagnétisme la respecte, comme la partie sur les symétries discrètes l'a établi. C'est en revanche exactement le couplage dont l'interaction faible aura besoin.</li>
<br>
<li><b>$\bar\psi\,\sigma^{\mu\nu}\psi\,F_{\mu\nu}$</b>, le <b>terme de Pauli</b><br>Et celui-là est le plus intéressant, car il franchit tous les obstacles précédents&nbsp;: invariant de jauge (il est bâti sur $F_{\mu\nu}$, lui-même invariant), invariant de Lorentz, et pair sous la parité. Rien ne l'interdit... sauf le comptage de dimensions. Cet opérateur est de dimension 5, donc son couplage aurait une dimension de masse négative&nbsp;: la théorie ne serait pas <b>renormalisable</b>.</li>
</ul>

Le terme de Pauli est précisément celui qui donnerait à l'électron un moment magnétique anormal <b>dès l'arbre</b>, avec un coefficient arbitraire. S'il était permis, $g$ serait un <b>paramètre libre</b> qu'on ajusterait sur l'expérience, et il n'y aurait rien à prédire.<br><br>
Parce qu'il est interdit, le vertex reste $\gamma^\mu$ pur, la valeur $g = 2$ est une <b>prédiction</b> de l'arbre, et l'écart $g - 2$ devient entièrement <b>calculable</b> comme effet de boucle. Toute la précision de QED, celle qui donne dix chiffres significatifs à la partie suivante, repose sur cette absence.

</details>

</div>

<br>

<div id="theo">

<b>Le vertex de QED</b>

<p style="text-align:center;">
$\displaystyle
-\mathrm{i}\,q\,\gamma^\mu
$
</p>

Trois pattes, un couplage <b>vectoriel</b>, et rien d'autre. Toute la phénoménologie de l'électrodynamique quantique sort de cet unique objet.

</div>

#### Comment le traduire&nbsp;?

Le vertex se lit en interrogeant chacun de ses trois champs, dont nous connaissons l'action depuis la quantification&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>$\hat\psi$ <b>annihile un fermion</b> ou <b>crée un antifermion</b>&nbsp;;</li>
<li>$\hat{\bar\psi}$ <b>crée un fermion</b> ou <b>annihile un antifermion</b>&nbsp;;</li>
<li>$\hat A_\mu$ <b>crée ou annihile un photon</b>.</li>
</ul>

Chaque champ offrant deux lectures, le même objet algébrique décrit $2 \times 2 \times 2 = \boldsymbol 8$ processus élémentaires&nbsp;:

<div id="def">

<ul style="margin-top:1em; margin-bottom:1em;">
<li>$e^- \to e^- + \gamma$&nbsp;: un électron <b>émet</b> un photon (c'est le rayonnement de freinage)&nbsp;;</li>
<li>$e^- + \gamma \to e^-$&nbsp;: un électron <b>absorbe</b> un photon (c'est Compton)&nbsp;;</li>
<li>$e^+ \to e^+ + \gamma$ et $e^+ + \gamma \to e^+$&nbsp;: les mêmes, pour le positron&nbsp;;</li>
<li>$e^- + e^+ \to \gamma$&nbsp;: <b>annihilation</b> d'une paire en photon&nbsp;;</li>
<li>$\gamma \to e^- + e^+$&nbsp;: <b>création</b> de paire&nbsp;;</li>
<li>et les deux configurations où les trois lignes sont toutes entrantes ou toutes sortantes, qui n'existent qu'à l'<b>intérieur</b> des diagrammes, hors couche de masse.</li>
</ul>

</div>

Voilà en quel sens un seul vertex gouverne toute la théorie&nbsp;: Compton, Bhabha, Møller, création de paires, rayonnement de freinage, annihilation, tout cela n'est que des <b>assemblages</b> de cet objet unique. Ce qui distingue les processus n'est pas la physique du vertex mais la <b>topologie</b> du diagramme.

Deux remarques pour finir, car elles resserviront.

<b>Le couplage est vectoriel</b>, en $\gamma^\mu$, et c'est exactement la même matrice que dans le courant de Noether du chapitre précédent. Ce n'est pas un détail de notation&nbsp;: deux conséquences en découlent, et toutes deux se démontrent en quelques lignes.

#### Première conséquence&nbsp;: le photon se couple à la charge, et à rien d'autre

Le terme d'interaction s'écrit $-J^\mu_{\mathrm{em}}A_\mu$ avec $J^\mu_{\mathrm{em}} = q\,\bar\psi\gamma^\mu\psi$, c'est-à-dire <b>$q$ fois le courant de Noether</b> de la symétrie $U(1)$. Or nous avons calculé la charge associée à ce courant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat Q_{\mathrm{Nc}} = \int\mathrm{d}^3 p\,\sum_s\left(\hat n^{(a)}_{s\boldsymbol p} - \hat n^{(b)}_{s\boldsymbol p}\right)
$
</p>

Autrement dit, l'intensité avec laquelle une particule se couple au photon <b>est</b> sa charge de Noether, par construction. Pas sa masse, pas son spin, pas son énergie. Trois faits expérimentaux en découlent immédiatement.

<div id="theo">

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li><b>Une particule neutre ne se couple pas au photon</b>, quelles que soient sa masse et son spin. Si $Q = 0$, le vertex est nul, un point c'est tout.</li>
<li><b>Particule et antiparticule se couplent avec des signes opposés</b>, puisque la charge compte $n_a - n_b$. C'est pourquoi $e^-$ et $e^+$ sont déviés en sens contraires dans un même champ.</li>
<li><b>Le couplage ne dépend pas de l'état de mouvement</b>&nbsp;: le même $q$ vaut au repos et à énergie arbitraire.</li>
</ul>

</div>

Le troisième point paraît anodin et ne l'est pas du tout.

<div id="preuve">

<details>
<summary>Pourquoi la charge est un invariant de Lorentz, alors que $J^0$ n'en est pas un</summary>

La charge est définie par $Q = \int\mathrm{d}^3x\;J^0(x)$, et l'on pourrait croire l'affaire mal engagée&nbsp;: $J^0$ est la <b>composante temporelle</b> d'un quadrivecteur, elle change donc sous un boost. Et l'élément de volume $\mathrm{d}^3x$ change aussi, par contraction des longueurs. Rien ne semble garantir que le produit soit invariant.

Or les deux effets se compensent <b>exactement</b>, et ce n'est pas une coïncidence&nbsp;: c'est une conséquence de la <b>conservation</b> du courant, $\partial_\mu J^\mu = 0$. Le théorème de la divergence appliqué à un quadrivolume montre que l'intégrale de $J^0$ sur une hypersurface de genre espace ne dépend pas du choix de cette hypersurface, donc ne dépend pas du référentiel qui la définit.

<b>Voilà pourquoi la charge est quantifiée de la même façon pour tous les observateurs</b>, et pourquoi l'on peut parler de «&nbsp;la&nbsp;» charge de l'électron sans préciser dans quel référentiel on la mesure.

<b>Le contraste avec Yukawa est instructif.</b> Si le couplage avait été scalaire, $-g\,\bar\psi\psi\,\phi$, il n'y aurait aucun courant conservé associé, donc aucune charge, donc aucune raison pour que $g$ soit relié à quoi que ce soit d'universel. De fait, les couplages de Yukawa du modèle standard sont des paramètres <b>libres et tous différents</b>, un par fermion. La différence entre les deux situations tient entièrement à ce que $\gamma^\mu$ fabrique un courant conservé et que $1$ n'en fabrique pas.

</details>

</div>

#### Seconde conséquence&nbsp;: le vertex conserve la chiralité

Celle-ci se lit directement sur la structure en blocs, et elle est le pendant exact de ce que nous avons vu sur le propagateur.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\bar\psi\,\gamma^\mu\,\psi = \psi_R^\dagger\,\sigma^\mu\,\psi_R \;+\; \psi_L^\dagger\,\bar\sigma^\mu\,\psi_L
$
</p>

Le courant se scinde en <b>deux morceaux indépendants</b>, l'un purement droit, l'autre purement gauche. <b>Aucun terme croisé.</b> C'est cela, conserver la chiralité.

</div>

<br>

<div id="preuve">

<details>
<summary>Le calcul, et la comparaison avec le terme de masse</summary>

Deux ingrédients, tous deux déjà établis. D'abord, en représentation chirale, $\gamma^\mu$ est <b>purement hors diagonale</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^\mu = \begin{pmatrix} 0 & \sigma^\mu \\ \bar\sigma^\mu & 0 \end{pmatrix}
$
</p>

Ensuite, le $\gamma^0$ caché dans la barre <b>échange les blocs</b> du spineur adjoint&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar\psi = \big(\psi_L^\dagger,\ \psi_R^\dagger\big)\begin{pmatrix} 0 & I \\ I & 0\end{pmatrix} = \big(\psi_R^\dagger,\ \psi_L^\dagger\big)
$
</p>

Il ne reste qu'à multiplier&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar\psi\gamma^\mu\psi = \big(\psi_R^\dagger,\ \psi_L^\dagger\big)\begin{pmatrix} 0 & \sigma^\mu \\ \bar\sigma^\mu & 0 \end{pmatrix}\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} = \big(\psi_R^\dagger,\ \psi_L^\dagger\big)\begin{pmatrix} \sigma^\mu\psi_R \\ \bar\sigma^\mu\psi_L \end{pmatrix}
$
</p>

d'où le résultat annoncé. <b>Les deux échanges de blocs se sont compensés</b>&nbsp;: celui du $\gamma^0$ de la barre et celui de $\gamma^\mu$. C'est leur conjonction qui produit un résultat diagonal en chiralité.

<b>Comparons maintenant avec le terme de masse.</b> Le même calcul, mais sans $\gamma^\mu$, ne bénéficie que d'un seul échange&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar\psi\psi = \big(\psi_R^\dagger,\ \psi_L^\dagger\big)\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} = \psi_R^\dagger\psi_L + \psi_L^\dagger\psi_R
$
</p>

<b>Purement croisé&nbsp;!</b> C'est l'exact opposé du courant. On retrouve donc, sous une autre forme, ce que la lecture par blocs du propagateur avait révélé&nbsp;: <b>la masse renverse la chiralité, le couplage vectoriel la conserve</b>. Le propagateur portait $m$ sur sa diagonale et $p\cdot\sigma$ hors diagonale&nbsp;; ici, la masse est hors diagonale en chiralité et le courant diagonal. Ce sont deux façons de dire la même chose.

</details>

</div>

Trois retombées de cette conservation, dont deux serviront très vite.

<b>Dans le calcul d'hélicités qui suit</b>, les amplitudes où un électron entrant d'une chiralité ressortirait avec l'autre sont <b>rigoureusement nulles</b> dans la limite sans masse. Cela videra la moitié du tableau, et les zéros ne seront pas des accidents de calcul mais une interdiction de structure.

<b>Dans le facteur de Mott</b>, plus loin, la suppression de la rétrodiffusion à haute énergie viendra de là aussi&nbsp;: renverser l'impulsion sans pouvoir renverser le spin renverserait l'hélicité, ce que le vertex interdit.

<b>Et rétrospectivement, cela explique pourquoi QED respecte la parité.</b> Les deux morceaux du courant, gauche et droit, apparaissent avec le <b>même coefficient</b>. S'ils en avaient de différents, on pourrait former la combinaison antisymétrique, c'est-à-dire précisément le couplage axial en $\gamma^\mu\gamma^5$ que nous avons écarté quelques lignes plus haut. C'est ce que fait l'interaction faible, et c'est pour cela qu'elle viole $\mathrm P$.

<b>Le couplage est universel.</b> Le même $|e|$ apparaît pour toutes les particules chargées, et ce n'est pas une coïncidence expérimentale&nbsp;: comme la partie sur les champs de jauge l'a montré, le paramètre $q$ figure à la fois dans la dérivée covariante et dans la loi de transformation de $A_\mu$. C'est cette double occurrence qui force tous les champs couplés au même $A_\mu$ à porter des charges multiples d'une unique unité.

<div id="def">

<b>Règles de Feynman de QED</b>

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>toutes les règles fermioniques du chapitre précédent&nbsp;;</li>
<li>vertex&nbsp;: $-\mathrm{i} q\,\gamma^\mu$&nbsp;;</li>
<li>ligne de photon interne&nbsp;: $-\mathrm{i} g_{\mu\nu}/(k^2 + \mathrm{i}\epsilon)$&nbsp;;</li>
<li>photon externe entrant&nbsp;: $\epsilon_{\mu\lambda}(p)$&nbsp;; sortant&nbsp;: $\epsilon^*_{\mu\lambda}(p)$.</li>
</ul>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/reglesqed.png" style="box-shadow:none;background:none;">
</div>

<br>

### Un premier processus&nbsp;: $e^+e^- \to \mu^+\mu^-$

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diffeemumu.png" style="box-shadow:none;background:none;">
</div>

L'annihilation d'une paire électron--positron en paire de muons se fait par le <b>canal $s$</b>&nbsp;: les particules entrantes s'annihilent en un photon virtuel, lequel rematérialise la paire sortante. Les règles donnent directement

<div style="position:relative;margin-left:auto;margin-right:auto;width:150px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/eemumu.png" style="box-shadow:none;background:none;">
</div>

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M = \bar v^{s'}(p')\,(-\mathrm{i}|e|\gamma^\mu)\,u^s(p)\;\frac{-\mathrm{i} g_{\mu\nu}}{q^2}\;\bar u^r(k)\,(-\mathrm{i}|e|\gamma^\nu)\,v^{r'}(k')
$
</p>

<!-- FIGURE à redessiner (d'après fig. 39.3-39.4 de L&B), temps vers le haut : en bas, e- (impulsion p) et e+ (p') convergent vers un vertex ; ligne de photon ondulée verticale (impulsion q) ; en haut, mu- (k) et mu+ (k') divergent avec un angle theta par rapport à l'axe vertical. Ajouter à côté un petit schéma cinématique montrant les spins des particules entrantes par des flèches hélicoïdales. -->

Plutôt qu'un calcul de traces, réservé au chapitre suivant, faisons ici quelque chose de plus instructif&nbsp;: le calcul en <b>amplitudes d'hélicité</b>, dans la limite ultra-relativiste où chiralité et hélicité coïncident. Le résultat est d'une simplicité frappante.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal M(e^-_R e^+_L \to \mu^-_R \mu^+_L) = -e^2\,(1 + \cos\theta)
$
</p>

et, après moyenne sur les spins entrants et somme sur les sortants,

<p style="text-align:center;">
$\displaystyle
\frac{1}{4}\sum_{\mathrm{spins}}|\mathcal M|^2 = e^4\,(1 + \cos^2\theta)
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Le calcul en amplitudes d'hélicité</summary>

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Deux sortes d'indices</b></li>
</ul>

Avant de calculer, séparons ce qui va se mélanger. Dans l'expression $\bar v(p')\\,\gamma^\mu\\,u(p)$, deux indices vivent côte à côte sans rien avoir en commun.

L'<b>indice de spineur</b>, qui court de 1 à 4, est celui que porte la structure ligne–colonne. Il est <b>sommé</b> dans le produit&nbsp;: $\bar v$ est une <b>ligne</b> à 4 entrées, $\gamma^\mu$ une <b>matrice</b> $4\times4$, $u$ une <b>colonne</b> à 4 entrées. Leur produit est donc un <b>nombre</b>.

L'indice de <b>Lorentz</b> $\mu$, qui court de 0 à 3, n'est au contraire <b>pas sommé</b>&nbsp;: il étiquette quatre matrices $\gamma^\mu$ différentes, donc quatre nombres différents.

$\bar v(p')\\,\gamma^\mu\\,u(p)$ est, pour chaque $\mu$ fixé, un <b>nombre</b>. Les quatre nombres obtenus, rassemblés, forment un <b>quadrivecteur</b>. Et c'est cela qui nous autorisera plus loin à le faire <i>tourner</i>.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Choisir les hélicités</b></li>
</ul>

Prenons un $e^-$ <b>droit</b> d'impulsion selon $+z$. Un électron relativiste droit a l'hélicité $h = +1$, donc un spin physique vers le haut selon $z$&nbsp;: $\xi = \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}$.

Faisons-le collisionner avec un $e^+$ <b>gauche</b> d'impulsion selon $-z$. Souvenons-nous que pour une antiparticule, les conventions s'inversent. Un positron gauche et relativiste a lui aussi $h = +1$, et son spineur à deux composantes est $\eta = \begin{pmatrix} 0 \\\\ 1 \end{pmatrix}$, ce qui correspond bien à un spin physique vers le haut selon $z$.

<b>Les deux spins pointent donc dans le même sens</b>, et la paire entrante porte un moment cinétique total $J_z = +1$. Retenons-le&nbsp;: ce sera la clé de la lecture finale.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Les spineurs dans la limite ultra-relativiste</b></li>
</ul>

Reprenons les expressions établies à la partie&nbsp;13 et faisons $|\boldsymbol p| \to E$. Pour $\boldsymbol p = E\hat{\boldsymbol z}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma = E\,(I - \sigma^3) = 2E\begin{pmatrix} 0 & 0 \\ 0 & 1\end{pmatrix}\\
p\cdot\bar\sigma = E\,(I + \sigma^3) = 2E\begin{pmatrix} 1 & 0 \\ 0 & 0\end{pmatrix}
$
</p>

<b>Chacune de ces matrices a une entrée nulle</b>, et c'est tout le mécanisme&nbsp;: une des deux chiralités va s'éteindre. En prenant les racines et en appliquant à $\xi = \begin{pmatrix} 1 \\\\ 0\end{pmatrix}$, le bloc supérieur (gauche) s'annule et il reste la <b>colonne</b>

<p style="text-align:center;">
$\displaystyle
u(p) = \sqrt{2E}\begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix}
$
</p>

Le spineur est <b>purement droit</b>, comme il se doit. Le même calcul pour le positron, avec $\boldsymbol p' = -E\hat{\boldsymbol z}$ et $\eta = \begin{pmatrix} 0 \\\\ 1\end{pmatrix}$, échange les rôles des deux matrices et donne

<p style="text-align:center;">
$\displaystyle
v(p') = \sqrt{2E}\begin{pmatrix} 0 \\ 0 \\ 0 \\ -1 \end{pmatrix}
$
</p>

le signe moins venant du bloc inférieur de $v$, établi au repos à la partie&nbsp;13.

<b>Chaque colonne n'a plus qu'une seule entrée non nulle</b>, et toutes deux se trouvent dans le <b>bloc inférieur</b>&nbsp;: c'est ce qui rend le calcul faisable à la main.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>L'outil de contraction</b></li>
</ul>

L'amplitude fait intervenir $\bar v\\,\gamma^\mu\\,u$, où la barre cache un $\gamma^0$. Regroupons-le avec $\gamma^\mu$ pour n'avoir qu'une matrice à manipuler&nbsp;:

<p style="text-align:center;">
$\displaystyle
\underbrace{\bar v(p')}_{\text{ligne}}\,\gamma^\mu\,\underbrace{u(p)}_{\text{colonne}} = \underbrace{v^\dagger(p')}_{\text{ligne}}\;\underbrace{\big(\gamma^0\gamma^\mu\big)}_{\text{matrice }4\times4}\;\underbrace{u(p)}_{\text{colonne}}
$
</p>

Calculons une fois pour toutes ce produit de matrices&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0\gamma^\mu = \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}\begin{pmatrix} 0 & \sigma^\mu \\ \bar\sigma^\mu & 0 \end{pmatrix} = \begin{pmatrix} \bar\sigma^\mu & 0 \\ 0 & \sigma^\mu \end{pmatrix}
$
</p>

<b>Cette matrice est diagonale par blocs</b>, alors que $\gamma^\mu$ seule était hors diagonale. Le $\gamma^0$ de la barre a remis les blocs en place, et l'on retrouve exactement le résultat de la section précédente&nbsp;: le courant ne mélange pas les chiralités.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Le courant entrant</b></li>
</ul>

Nos deux spineurs n'ayant de support que dans le bloc inférieur, seul le bloc $\sigma^\mu$ va travailler.

<p style="text-align:center;">
$\displaystyle
\bar v(p')\,\gamma^\mu\,u(p) = 2E\;\underbrace{\big(\,0\;\;0\;\;0\;\;-1\,\big)}_{v^\dagger(p')/\sqrt{2E}}\;\begin{pmatrix} \bar\sigma^\mu & 0 \\ 0 & \sigma^\mu \end{pmatrix}\;\underbrace{\begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix}}_{u(p)/\sqrt{2E}}
$
</p>

Les deux racines se sont multipliées en $2E$. En ne gardant que le bloc inférieur, la ligne se réduit à $(0\\;\\;-1)$ et la colonne à $\begin{pmatrix}1\\\\0\end{pmatrix}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar v(p')\,\gamma^\mu\,u(p) = 2E\;\big(\,0\;\;-1\,\big)\,\sigma^\mu\,\begin{pmatrix} 1 \\ 0\end{pmatrix} = -\,2E\;\big(\sigma^\mu\big)_{21}
$
</p>

La ligne sélectionne la <b>deuxième ligne</b> de $\sigma^\mu$ et la colonne sa <b>première colonne</b>&nbsp;: il ne reste que l'entrée $(2,1)$, avec le signe moins de la ligne.

Il suffit alors de lire cette entrée dans les quatre matrices de la famille $\sigma^\mu = (I,\\,\sigma^1,\\,\sigma^2,\\,\sigma^3)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big(I\big)_{21} = 0,
\quad
\big(\sigma^1\big)_{21} = 1,
\quad
\big(\sigma^2\big)_{21} = \mathrm i,
\quad
\big(\sigma^3\big)_{21} = 0
$
</p>

d'où le <b>quadrivecteur</b> annoncé, dont les quatre entrées sont indexées par $\mu$ et non par un indice de spineur&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar v(p')\,\gamma^\mu\,u(p) = -2E\,\big(\,0,\;1,\;\mathrm i,\;0\,\big)
$
</p>

Sa composante temporelle est nulle&nbsp;: aucune partie scalaire. Et sa partie spatiale est $\hat{\boldsymbol x} + \mathrm i\hat{\boldsymbol y}$, qui est le vecteur de base sphérique de moment cinétique $J_z = +1$. <b>Le courant décrit donc exactement le spin total de la paire entrante</b>, celui que nous avions repéré en choisissant les hélicités.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Le courant sortant, sans refaire le calcul</b></li>
</ul>

Le courant des muons, $\bar u(k)\\,\gamma^\mu\\,v(k')$, est presque le même objet. Deux différences seulement&nbsp;:

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li style="margin-bottom:0.5em;">les rôles de la ligne et de la colonne sont <b>échangés</b> ($\bar u$ en ligne, $v$ en colonne). Or échanger les deux spineurs revient simplement à <b>conjuguer</b>&nbsp;: un produit $\bar v\,\gamma^\mu u$ est un <i>nombre</i>, donc le conjuguer revient à en prendre l'adjoint, ce qui renverse l'ordre des facteurs et fait apparaître les $\gamma^0$ des deux barres&nbsp;; et comme $\gamma^0\gamma^{\mu\dagger}\gamma^0 = \gamma^\mu$, la matrice ressort inchangée. Il reste donc $\big[\bar v(k')\gamma^\mu u(k)\big]^* = \bar u(k)\gamma^\mu v(k')$&nbsp;;</li>
<li>et les impulsions des muons sont celles des électrons <b>tournées</b> de l'angle $\theta$ dans le plan de la réaction. C'est ici que l'on récolte la remarque du début&nbsp;: puisque ces quatre nombres forment un quadrivecteur, on sait les faire tourner.</li>
</ul>

Une rotation d'angle $\theta$ autour de $y$ envoie $\hat{\boldsymbol x} \to \hat{\boldsymbol x}\cos\theta - \hat{\boldsymbol z}\sin\theta$ et laisse $\hat{\boldsymbol y}$ inchangé, donc transforme la partie spatiale $(1,\\;\mathrm i,\\;0)$ en $(\cos\theta,\\;\mathrm i,\\;-\sin\theta)$. En conjuguant ensuite&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u(k)\,\gamma^\mu\,v(k') = \Big[-2E\,\big(0,\;\cos\theta,\;\mathrm i,\;-\sin\theta\big)\Big]^{*} = -2E\,\big(\,0,\;\cos\theta,\;-\mathrm i,\;-\sin\theta\,\big)
$
</p>

<b>Seule la composante $y$ a changé de signe</b>, puisque c'est la seule imaginaire.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Contracter, et récolter</b></li>
</ul>

L'amplitude est le produit scalaire des deux quadrivecteurs, relié par le propagateur du photon. Ici l'indice $\mu$ est enfin <b>sommé</b>, avec la métrique $(+,-,-,-)$, et la composante temporelle étant nulle des deux côtés, seules les trois spatiales contribuent&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big(\bar v\gamma^\mu u\big)\,g_{\mu\nu}\,\big(\bar u\gamma^\nu v\big) = -\,4E^2\Big[\underbrace{(1)(\cos\theta)}_{x} + \underbrace{(\mathrm i)(-\mathrm i)}_{y} + \underbrace{(0)(-\sin\theta)}_{z}\Big] = -4E^2\,(1 + \cos\theta)
$
</p>

<b>Le terme en $y$ vaut $+1$</b>, les deux facteurs imaginaires se multipliant en $-\mathrm i^2$&nbsp;: c'est lui qui fabrique le $1$ à côté du $\cos\theta$. En insérant le propagateur et les deux vertex&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\,\frac{4e^2E^2}{q^2}\,(1 + \cos\theta)
$
</p>

et comme l'énergie disponible dans le centre de masse vaut $q^2 = (2E)^2 = 4E^2$, les facteurs se simplifient complètement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal M\big(e^-_{\mathrm R}e^+_{\mathrm L} \to \mu^-_{\mathrm R}\mu^+_{\mathrm L}\big) = -e^2\,(1 + \cos\theta)
$
</p>

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>Les autres combinaisons, et les zéros</b></li>
</ul>

En répétant l'opération, on trouve quatre amplitudes non nulles, deux à deux égales&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal M\big(e^-_{\mathrm R}e^+_{\mathrm L} \to \mu^-_{\mathrm R}\mu^+_{\mathrm L}\big) = \mathcal M\big(e^-_{\mathrm L}e^+_{\mathrm R} \to \mu^-_{\mathrm L}\mu^+_{\mathrm R}\big) = -e^2\,(1+\cos\theta)
$
</p>

<p style="text-align:center;">
$\displaystyle
\mathcal M\big(e^-_{\mathrm R}e^+_{\mathrm L} \to \mu^-_{\mathrm L}\mu^+_{\mathrm R}\big) = \mathcal M\big(e^-_{\mathrm L}e^+_{\mathrm R} \to \mu^-_{\mathrm R}\mu^+_{\mathrm L}\big) = -e^2\,(1-\cos\theta)
$
</p>

<b>et toutes les autres sont rigoureusement nulles.</b> Ces zéros ne sont pas des accidents de calcul&nbsp;: ils viennent de ce que $\gamma^0\gamma^\mu$ est diagonale par blocs. Si la ligne et la colonne n'ont pas leur support dans le <i>même</i> bloc, le produit s'annule identiquement, quelle que soit la matrice. <b>C'est la conservation de la chiralité par le vertex vectoriel</b>, établie à la section précédente, vue ici à l'œuvre.

<ul style="margin-top:1em; margin-bottom:-0.5em;">
<li><b>La moyenne</b></li>
</ul>

Les faisceaux ne sont pas polarisés&nbsp;: on moyenne sur les quatre configurations initiales et l'on somme sur les finales.

<p style="text-align:center;">
$\displaystyle
\frac{1}{4}\sum_{\text{spins}}|\mathcal M|^2 = \frac{e^4}{2}\Big[(1+\cos\theta)^2 + (1-\cos\theta)^2\Big] = e^4\,\big(1 + \cos^2\theta\big)
$
</p>

les termes croisés en $\cos\theta$ se compensant entre les deux familles.

<b>Une dernière lecture, qui dispense du calcul.</b> Le facteur $(1+\cos\theta)$ vaut $2\cos^2(\theta/2)$&nbsp;: c'est l'<b>amplitude de recouvrement</b> entre un état de moment cinétique $J_z = +1$ le long de l'axe des électrons et le même état le long de l'axe des muons. Autrement dit, la matrice de rotation $d^{\,1}_{11}(\theta) = \tfrac{1}{2}(1+\cos\theta)$ du moment cinétique 1. Toute la dépendance angulaire du processus est un pur effet géométrique de composition de spins.

</details>

</div>


Cette distribution en $1 + \cos^2\theta$ est un classique absolu des collisionneurs. Elle a été vérifiée avec une grande précision, et sa <b>déformation</b> à haute énergie fut l'une des signatures du $Z^0$&nbsp;: l'échange d'un boson faible s'ajoute à celui du photon et brise la symétrie avant--arrière.

<br>

### L'identité de Ward, ou le remboursement de la dette

Reste à honorer la promesse du début&nbsp;: pourquoi a-t-on le droit de jeter $k_\mu k_\nu$&nbsp;? La réponse tient dans un triangle de concepts&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/equivward.png" style="box-shadow:none;background:none;">
</div>

L'identité de Ward est la version «&nbsp;diagrammes de Feynman&nbsp;» des deux autres.

<div id="theo">

<b>Identité de Ward</b> (forme simplifiée)

Soit $\mathcal M^\mu(k, p_1, p_2, \ldots)$ la somme des morceaux de diagrammes contribuant à un élément de matrice $S$, où $\mu$ étiquette le vertex d'attache d'une ligne de photon d'impulsion $k$. Si toutes les lignes externes sont sur couche de masse, alors

<p style="text-align:center;">
$\displaystyle
k_\mu\,\mathcal M^\mu(k, p_1, p_2, \ldots) = 0
$
</p>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/contrward.png" style="box-shadow:none;background:none;">
</div>

La conséquence est immédiate&nbsp;: dans le propagateur, tout terme proportionnel à $k_\mu k_\nu$ finit contracté avec un $\mathcal M^\mu$ de ce type, donc donne zéro. **Le fantôme était inoffensif.**

#### La relation de fermeture des polarisations

Une pièce nous manque encore, et elle servira dans toute la suite&nbsp;: comment sommer sur les polarisations d'un boson vectoriel.

<div id="theo">

<b>Relation de fermeture des polarisations</b>

Pour un boson vectoriel <b>massif</b> d'impulsion $k$ sur sa couche de masse&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum_{\lambda=1}^{3}\epsilon_{\lambda\mu}(k)\,\epsilon^*_{\lambda\nu}(k) = -g_{\mu\nu} + \frac{k_\mu k_\nu}{m^2} \;\equiv\; -P^{\mathrm T}_{\mu\nu}
$
</p>

où $P^{\mathrm T}\_{\mu\nu} = g_{\mu\nu} - k_\mu k_\nu/m^2$ est le <b>projecteur transverse</b>, celui qui projette sur le sous-espace orthogonal à $k$.

</div>

<br>

<div id="preuve">

Deux contrôles suffisent à établir cette relation, sans avoir à écrire les trois vecteurs explicitement. Rappelons pour cela ce que la partie sur la quantification canonique avait établi&nbsp;: les trois polarisations sont contraintes par $k_\mu\epsilon^\mu_\lambda = 0$ et normalisées par $\epsilon_\lambda\cdot\epsilon_{\lambda'} = -\delta_{\lambda\lambda'}$.

<b>Contraction avec $k^\mu$</b><br>
À gauche, chaque terme contient $k^\mu\epsilon_{\lambda\mu} = 0$&nbsp;: le résultat est nul.<br>
À droite&nbsp;:

<p style="text-align:center;">
$\displaystyle
-k_\nu + \frac{k^2\,k_\nu}{m^2} = -k_\nu + k_\nu = 0
$
</p>

en utilisant $k^2 = m^2$. Les deux membres s'annulent ensemble.

<b>Trace</b><br>
À gauche, on somme trois fois $\epsilon_\lambda\cdot\epsilon_\lambda = -1$, soit $-3$.<br>
À droite, $-4 + m^2/m^2 = -3$. Les deux membres coïncident.

<b>Le nom de $P^{\mathrm T}$ est mérité</b>&nbsp;: cet objet annule $k^\nu$, et il est idempotent. C'est bien un projecteur sur le sous-espace orthogonal à $k$, celui où vivent les polarisations physiques.

</div>

<br>

<div id="theo">

<b>Le numérateur d'un propagateur est une somme sur les états physiques.</b>

Comparez cette relation de fermeture au numérateur du propagateur de Proca calculé en ouverture de chapitre&nbsp;: c'est <b>exactement la même combinaison</b>, $-g_{\mu\nu} + k_\mu k_\nu/m^2$.

Ce n'est pas une coïncidence, et nous l'avions déjà rencontrée pour le fermion, dont le numérateur $\not{\\!\\!p} + m$ était la somme de spin $\sum_s u^s\bar u^s$. Propager une particule, c'est la créer puis l'annihiler en sommant sur tous les états intermédiaires&nbsp;: le numérateur enregistre cette somme.

Et cela unifie les deux divergences en $1/m^2$ de ce chapitre&nbsp;: celle du propagateur et celle qui va apparaître dans la probabilité ci-dessous sont <b>la même</b>, vue à deux endroits.

</div>

<br>

#### L'argument physique&nbsp;: une source qui émet un boson vectoriel

Voici l'identité de Ward sous une forme plus concrète, qui montre <i>où</i> la divergence apparaîtrait et <i>ce qui</i> l'annule.

<b>Le dispositif</b><br>
Couplons naïvement à un champ vectoriel <b>massif</b> $A_\mu$ une source $J^\mu$ <b>quelconque</b>, c'est-à-dire pas nécessairement le courant conservé de l'électromagnétisme. Et demandons l'amplitude du processus le plus simple imaginable&nbsp;: partir sans aucun boson vectoriel, et finir avec un seul. On obtient  le «&nbsp;demi-haltère&nbsp;» (une source crée un boson vectoriel à partir de rien). C'est le processus le plus simple où la question de la limite sans masse se pose.

<!-- FIGURE à redessiner (d'après fig. 39.7 de L&B), le « demi-haltère », temps vers le haut : en bas, un blob hachuré représentant la source J^mu, sans aucune patte entrante ; de ce blob part vers le haut une unique ligne ondulée de boson vectoriel, étiquetée par son impulsion k et son indice de polarisation lambda. Rien d'autre. Légende : « Le demi-haltère : une source crée un boson vectoriel à partir de rien. C'est le processus le plus simple où la question de la limite sans masse se pose. » -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:60px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/demihaltere.png" style="box-shadow:none;background:none;">
</div>

<b>L'amplitude</b><br>
Une patte externe de boson vectoriel apporte son vecteur de polarisation, et il faut sommer sur les polarisations possibles&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal A \;\propto\; \sum_\lambda \epsilon^*_{\lambda\mu}(k)\,\tilde J^\mu(k)
$
</p>

<b>La probabilité</b><br>
C'est le module carré, et en choisissant une base de polarisations <b>linéaires</b> (de sorte que $\epsilon^*\_{\lambda\mu} = \epsilon_{\lambda\mu}$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
P = |\mathcal A|^2 \;\propto\; \sum_\lambda \tilde J^\mu(k)\,\tilde J^{\nu\dagger}(k)\,\epsilon_{\lambda\mu}(k)\,\epsilon_{\lambda\nu}(k)
$
</p>

La relation de fermeture établie ci-dessus s'applique directement, et il vient

<p style="text-align:center;">
$\displaystyle
P \;\propto\; \left(-g_{\mu\nu} + \frac{k_\mu k_\nu}{m^2}\right)\tilde J^\mu(k)\,\tilde J^{\nu\dagger}(k)
$
</p>

Et voilà le problème, en pleine lumière. Faisons tendre $m$ vers zéro pour passer au photon&nbsp;: le terme $k_\mu k_\nu/m^2$ explose. C'est exactement la difficulté rencontrée avec le propagateur, mais cette fois elle porte sur une <b>probabilité</b>, c'est-à-dire sur une quantité mesurable. Impossible de la balayer sous le tapis.

<b>Sauf si le courant est conservé.</b> Ce terme est contracté avec $\tilde J^\mu$ d'un côté et $\tilde J^{\nu\dagger}$ de l'autre&nbsp;: il ne pose aucun problème dès lors que

<p style="text-align:center;">
$\displaystyle
k_\mu\,\tilde J^\mu(k) = 0
$
</p>

Or cette condition n'est autre que $\partial_\mu J^\mu = 0$ écrite en espace des impulsions&nbsp;! C'est-à-dire la <b>conservation du courant</b>, laquelle est elle-même une conséquence de l'invariance de jauge, comme la section sur le principe de jauge l'a établi.

<div id="theo">

<b>La chaîne complète</b>

<p style="text-align:center;">
invariance de jauge $\Longrightarrow$ courant conservé $\Longrightarrow$ $k_\mu\tilde J^\mu = 0$ $\Longrightarrow$ le terme dangereux disparaît
</p>

Un photon <b>ne peut se coupler qu'à un courant conservé</b>. Ce n'est pas une commodité de calcul&nbsp;: si l'on essayait de le coupler à autre chose, la théorie prédirait des probabilités infinies.

</div>

<b>Le cas sans masse en découle.</b> Une fois la conservation du courant acquise, le terme en $k_\mu k_\nu$ ne contribue jamais, et la relation de fermeture se réduit à la substitution que nous réutiliserons sans cesse dans les calculs de sections efficaces&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\sum_{\mathrm{polar.}}\epsilon_\mu(k)\,\epsilon^*_\nu(k) \;\longrightarrow\; -g_{\mu\nu}
$
</p>

Substitution licite <b>uniquement</b> à l'intérieur d'un carré d'amplitude sommé sur les polarisations, et contracté avec des courants conservés.

</div>

<br>

#### Le retournement élégant&nbsp;: on peut aussi en ajouter

Puisque les termes en $k_\mu k_\nu$ ne contribuent jamais, on peut non seulement les retirer, mais aussi en <b>rajouter</b> à volonté. D'où toute une famille de propagateurs, tous physiquement équivalents&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}(k) = \frac{-\mathrm{i}\left(g_{\mu\nu} + (1 - \xi)\,k_\mu k_\nu/k^2\right)}{k^2 + \mathrm{i}\epsilon}
$
</p>

paramétrée par un $\xi$ arbitraire&nbsp;: $\xi = 1$ est la <b>jauge de Feynman</b>, la plus simple&nbsp;; $\xi = 0$ la <b>jauge de Landau</b>.

<b>D'où vient ce paramètre&nbsp;?</b> Du lagrangien lui-même, muni d'un terme de <b>fixation de jauge</b> $-\frac{1}{2\xi}(\partial_\mu A^\mu)^2$. Ce terme est indispensable, et nous savons désormais exactement pourquoi&nbsp;: c'est la singularité constatée en ouverture de chapitre, quand nous avons vu que l'opérateur de Proca privé de sa masse annihile $k_\mu$ et dégénère en projecteur. <b>Fixer la jauge, c'est lui rendre son inversibilité</b>, et $\xi$ mesure la liberté résiduelle.

<b>Un test de cohérence redoutable.</b> Qu'aucune quantité mesurable ne dépende de $\xi$ est une contrainte forte, et on l'utilise en pratique pour vérifier les calculs&nbsp;: si un résultat final garde la trace de $\xi$, il y a une erreur, ou bien l'objet calculé n'est pas physique (une fonction de Green hors couche, par exemple).

<br>


### Bilan

<p style="text-align:center;">
$\displaystyle
\lim_{m\to 0}\frac{k_\mu k_\nu}{m^2}\ \text{menace}
\;\xrightarrow{\ \text{Ward}\ :\ k_\mu\mathcal M^\mu = 0\ }\;
\tilde D_{0\mu\nu} = \frac{-\mathrm{i}\,g_{\mu\nu}}{k^2}
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde D_{0\mu\nu}
\;\xrightarrow{\ \text{décomposition}\ }\;
\underbrace{\text{Coulomb instantané}}_{\text{sans pôle}} + \underbrace{2\ \text{polarisations transverses}}_{\text{pôle en } k^2 = 0}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{vertex } -\mathrm{i}q\gamma^\mu
\;\xrightarrow{\ \text{hélicités}\ }\;
\mathcal M(e^+e^- \to \mu^+\mu^-) = -e^2(1 \pm \cos\theta)
\;\xrightarrow{\ \text{moyenne}\ }\;
e^4(1 + \cos^2\theta)
$
</p>

### Pièges

<ul>
<li>«&nbsp;Jeter $k_\mu k_\nu/m^2$&nbsp;» n'est pas un passage en force&nbsp;: c'est un théorème (Ward), lui-même équivalent à la conservation du courant. Sans courant conservé, pas de photon sans masse cohérent.</li>
<li>Le photon n'a que <b>deux</b> polarisations physiques, mais son propagateur en transporte apparemment quatre. Les deux en trop conspirent pour donner le Coulomb instantané et rien d'autre. Cette instantanéité n'est qu'un artefact de découpage non covariant.</li>
<li>Dans le calcul d'hélicités, l'antiparticule <b>gauche</b> a l'hélicité $+1$.</li>
<li>Le vertex $\gamma^\mu$ conserve la chiralité, donc les amplitudes «&nbsp;interdites&nbsp;» sont rigoureusement nulles dans la limite sans masse. Ce sont les termes en $m/E$ qui les rallument à basse énergie.</li>
<li>La dépendance en $\xi$ doit disparaître de toute quantité physique. Si un résultat final en garde la trace, il y a une erreur, ou bien l'objet calculé n'est pas physique (une fonction de Green hors couche, par exemple).</li>
</ul>

<br>

{{%notice note%}}
Et maintenant&nbsp;? Nous disposons de la théorie complète&nbsp;: le champ de Dirac quantifié, le principe de jauge qui dicte l'interaction, le propagateur du photon et les règles de Feynman de QED. Un premier processus a même été mené jusqu'à une distribution angulaire.<br><br>
La partie suivante fait tourner cette machine sur trois processus <b>historiques</b>&nbsp;: <b>Rutherford</b>, qui fit découvrir le noyau, sa version relativiste de <b>Mott</b>, et <b>Compton</b>. On y acquiert surtout un savoir-faire, l'algorithme des traces, sans lequel aucun calcul réaliste de QED n'est praticable.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc13">Chapitre précédent</a></td><td><a href="../tqc15">Chapitre suivant</a></td>
    </tr>
</table>
</div>
