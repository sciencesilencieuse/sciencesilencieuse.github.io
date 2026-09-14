+++
title = "TQC-15"
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




# Théorie quantique des champs -- Partie 15

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

**Trois processus historiques**, et une technique qui les gouverne tous.

Les parties précédentes ont fourni les règles de Feynman de l'électrodynamique quantique. Il reste à les faire tourner jusqu'au bout, c'est-à-dire jusqu'à un nombre qu'un expérimentateur puisse comparer à ses mesures. C'est l'objet de cette partie, entièrement consacrée à la pratique.

<ul>
<li><b>La boîte à outils.</b> Un obstacle se dresse dès qu'on veut un résultat réaliste&nbsp;: les faisceaux ne sont pas polarisés et les détecteurs sont aveugles au spin, si bien qu'il faut moyenner et sommer sur des spins qu'on ne connaît pas. Le premier chapitre rassemble la technique qui rend ces sommes mécaniques, et qu'on appelle l'algorithme des traces.</li>
<li><b>Rutherford.</b> La diffusion d'un électron sur un noyau lourd, celle qui fit découvrir le noyau en 1911. On la traite en remplaçant le noyau par un potentiel classique, ce qui donne le calcul le plus court de toute la partie.</li>
<li><b>Mott.</b> Le même processus, mais sans aucune approximation. La technique des traces y est déployée en entier, et le résultat révèle un effet de spin invisible chez Rutherford&nbsp;: la rétrodiffusion s'éteint à haute énergie.</li>
<li><b>Compton.</b> La diffusion d'un photon sur un électron, avec ses <b>deux</b> diagrammes. On y récolte les variables de Mandelstam et la symétrie de croisement, qui permet de déduire plusieurs processus d'un seul calcul.</li>
</ul>




## La boîte à outils des traces

Avant tout calcul, réglons une difficulté de principe qui va se présenter dans les trois chapitres suivants.

### Pourquoi il faut moyenner et sommer

Quand un expérimentateur mesure une section efficace, il ne connaît généralement pas les polarisations. Les faisceaux ne sont pas polarisés, et les détecteurs ne distinguent pas les états de spin.

<div id="theo">

Il faut donc <b>moyenner</b> sur les états de spin <b>initiaux</b>, dont on ignore la valeur, et <b>sommer</b> sur les états <b>finaux</b>, que le détecteur confond&nbsp;:

<p style="text-align:center;">
$\displaystyle
\overline{|\mathcal M|^2} \;=\; \frac{1}{N_{\mathrm{init}}}\sum_{\text{spins init.}}\;\sum_{\text{spins fin.}} |\mathcal M|^2
$
</p>

avec $N_{\mathrm{init}} = 2$ par fermion entrant non polarisé et $2$ par photon entrant.

</div>

La différence entre les deux opérations n'est pas cosmétique. On <b>moyenne</b> à l'entrée parce que chaque configuration initiale est également probable et qu'une seule se réalise&nbsp;; on <b>somme</b> à la sortie parce que toutes les configurations finales contribuent au même comptage dans le détecteur. Intervertir les deux change les facteurs numériques et fausse le résultat.

Ces sommes portent sur des spineurs, objets encombrants. Toute la technique qui suit consiste à les faire disparaître.

### Les quatre outils

<div id="def">

<b>Boîte à outils&nbsp;: astuces de spineurs, de traces et de polarisation</b>

<ul style="margin-top:0.5em;margin-bottom:1em;">
<li><b>Spineurs 1</b> (conjugaison)&nbsp;:<br>
$\big[\bar u(f)\,\Gamma\,u(i)\big]^{*} = \bar u(i)\,\gamma^0\Gamma^\dagger\gamma^0\,u(f)$. Comme $\gamma^0\gamma^{\mu\dagger}\gamma^0 = \gamma^\mu$, conjuguer revient simplement à <b>échanger les deux spineurs</b> lorsque $\Gamma = \gamma^\mu$.</li>
<li><b>Spineurs 2</b> (sommes de spin)&nbsp;:<br>
$\displaystyle\sum_s u^s(p)\,\bar u^s(p) = \not{\!\!p} + m$ et $\displaystyle\sum_s v^s(p)\,\bar v^s(p) = \not{\!\!p} - m$, démontrées à la partie&nbsp;13.</li>
<li><b>Traces</b>&nbsp;:
<ul style="margin-bottom:0.5em;">
<li>$\mathrm{Tr}(I) = 4$&nbsp;;</li>
<li>la trace d'un nombre <b>impair</b> de matrices $\gamma$ est <b>nulle</b>&nbsp;;</li>
<li>$\mathrm{Tr}(\gamma^\mu\gamma^\nu) = 4g^{\mu\nu}$&nbsp;;</li>
<li>$\mathrm{Tr}(\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma) = 4\big(g^{\mu\nu}g^{\rho\sigma} - g^{\mu\rho}g^{\nu\sigma} + g^{\mu\sigma}g^{\nu\rho}\big)$&nbsp;;</li>
<li> et la contraction $\gamma^\mu\,\not{\!\!a}\,\gamma_\mu = -2\,\not{\!\!a}$.</li>
</ul>
</li>
<li><b>Photon</b>&nbsp;: $\displaystyle\sum_{\mathrm{polar.}}\epsilon_\mu(p)\,\epsilon^*_\nu(p) \longrightarrow -g_{\mu\nu}$, établie à la partie précédente à partir de la relation de fermeture des polarisations et de l'identité de Ward.</li>
</ul>

</div>

Le premier de ces outils a déjà servi&nbsp;: c'est lui qui permettait, dans le calcul en amplitudes d'hélicité de la partie précédente, d'obtenir le courant sortant des muons sans refaire le calcul du courant entrant.

<div id="preuve">

<details>
<summary>D'où viennent ces identités&nbsp;?</summary>

<b>Spineurs 1</b><br>
Un produit $\bar u\\,\Gamma\\,u$ est un <b>nombre</b> (ligne fois matrice fois colonne), donc le conjuguer revient à en prendre l'adjoint. L'adjoint renverse l'ordre des facteurs et fait apparaître les $\gamma^0$ cachés dans les deux barres, d'où la forme donnée. Et pour $\Gamma = \gamma^\mu$, l'identité $\gamma^0\gamma^{\mu\dagger}\gamma^0 = \gamma^\mu$ ramène la matrice à elle-même.

<b>Traces</b><br>
Les deux premières sortent de l'algèbre de Clifford. Pour $\mathrm{Tr}(\gamma^\mu\gamma^\nu)$, on utilise la cyclicité de la trace pour symétriser&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{Tr}(\gamma^\mu\gamma^\nu) = \tfrac{1}{2}\,\mathrm{Tr}\big(\{\gamma^\mu, \gamma^\nu\}\big) = \tfrac{1}{2}\cdot 2g^{\mu\nu}\,\mathrm{Tr}(I) = 4g^{\mu\nu}
$
</p>

Pour quatre matrices, on fait migrer la première vers la droite en l'anticommutant successivement avec les trois autres, chaque échange produisant un $2g$ et un signe moins&nbsp;; la cyclicité ramène alors la trace de départ au premier membre, et l'on résout. Les trois termes alternés du résultat sont les trois façons d'apparier quatre indices deux à deux, avec le signe de la permutation.

<b>La règle du nombre impair</b> est la plus rentable de toutes, car elle élimine la moitié des termes avant tout calcul. Elle vient de $\gamma^5$&nbsp;: cette matrice vérifie $(\gamma^5)^2 = I$ et anticommute avec tous les $\gamma^\mu$. En insérant $I = \gamma^5\gamma^5$ dans la trace et en faisant traverser $n$ matrices à l'un des deux facteurs, on ramasse $(-1)^n$&nbsp;; pour $n$ impair, la trace est égale à son opposée, donc nulle.

<b>Contraction</b><br>
$\gamma^\mu\gamma^\alpha\gamma_\mu = -2\gamma^\alpha$ s'obtient en anticommutant $\gamma^\alpha$ à travers $\gamma_\mu$&nbsp;: il vient $\gamma^\mu\gamma^\alpha\gamma_\mu = 2\gamma^\alpha - \gamma^\alpha\gamma^\mu\gamma_\mu$, et $\gamma^\mu\gamma_\mu = 4I$ en dimension 4.

</details>

</div>

### L'algorithme, en cinq pas

<div id="theo">

<ol style="margin-top:1em;margin-bottom:1em;">
<li>Écrire $|\mathcal M|^2 = \mathcal M\,\mathcal M^*$ et conjuguer le second facteur avec l'astuce <b>Spineurs 1</b>.</li>
<li>Écrire <b>tous</b> les indices spinoriels explicitement. Chaque facteur devient alors un <i>nombre</i>, et l'on peut les réordonner librement.</li>
<li>Effectuer les sommes de spin avec l'astuce <b>Spineurs 2</b>&nbsp;: les spineurs se <b>soudent</b> en matrices $\not{\!\!p} + m$.</li>
<li>Constater que la chaîne d'indices s'est refermée sur elle-même&nbsp;: c'est une <b>trace</b>.</li>
<li>Évaluer la trace avec les identités.</li>
</ol>

</div>

Dans le pas 2, écrire les indices transforme des matrices, qui ne commutent pas, en un produit de <b>nombres</b>, qui commutent&nbsp;: on gagne le droit de déplacer les facteurs pour rapprocher les spineurs à sommer. Une fois la somme faite, on regroupe et la structure matricielle se reforme, mais refermée en boucle.

<div id="theo">

<b>L'idée en une phrase&nbsp;:</b> une somme sur des spineurs se replie sur une <b>trace de matrices</b>, laquelle s'évalue avec quelques identités. On échange un objet à quatre composantes contre une opération purement algébrique.

</div>

<br>

## Rutherford&nbsp;: la découverte du noyau

Un électron diffuse sur un noyau de charge $Z|e|$, si lourd qu'il ne recule pas. C'est la célèbre expérience de Rutherford (article de 1911) faite en bombardant des particules alpha sur une feuille d'or.

### Le noyau comme potentiel classique

Puisque le noyau ne recule pas, inutile de le décrire comme un champ quantifié&nbsp;: on le remplace par un <b>potentiel classique statique</b> $A^\mu_{\mathrm{cl}}(x)$.

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagrutherford.png" style="box-shadow:none;background:none;">
</div>

<div id="def">

La règle de Feynman correspondante s'obtient en remplaçant la ligne de photon et son vertex par

<p style="text-align:center;">
$\displaystyle
-\mathrm{i}\,Q|e|\;\gamma_\mu\;\tilde A^\mu_{\mathrm{cl}}(q)
$
</p>

L'électron interagit donc avec la <b>transformée de Fourier</b> du potentiel, évaluée au transfert d'impulsion $q = p' - p$, et non avec le potentiel lui-même.

</div>

Ce point mérite qu'on s'y arrête, car il éclaire toute la physique de la diffusion. Une particule d'impulsion transférée $q$ ne «&nbsp;voit&nbsp;» du potentiel que sa composante de Fourier à cette échelle. Sonder les petites distances demande donc de grands transferts, c'est-à-dire de grands angles, et c'est précisément ce que Rutherford exploitera pour conclure à l'existence d'un noyau compact.

<div id="theo">

<b>Formule de Rutherford</b>

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{Z^2\alpha^2}{4m^2 v^4\,\sin^4(\theta/2)}
$
</p>

où $\alpha=\frac{e^2}{4\pi}$ est la constante de structure fine

</div>

<br>

<div id="preuve">

<details>
<summary>Le calcul, en quatre pas</summary>

<b>La transformée du potentiel</b><br>
Pour le Coulomb $A^0_{\mathrm{cl}}(\boldsymbol r) = \dfrac{Z|e|}{4\pi|\boldsymbol r|}$ (et $\boldsymbol A_\mathrm{cl}(\boldsymbol r)=0$), il faut la transformée de Fourier de $1/r$. C'est celle-là même que nous avions calculée dans la partie sur les propagateurs, en établissant le potentiel de Yukawa&nbsp;: la transformée de $\mathrm e^{-mr}/r$ vaut $1/(\boldsymbol q^2 + m^2)$, et il suffit d'y poser $m = 0$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde A^0_{\mathrm{cl}}(\boldsymbol q) = \frac{Z|e|}{\boldsymbol q^2}
$
</p>

<b>L'amplitude</b><br>
Avec $Q = -1$ pour l'électron, une seule règle de Feynman suffit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M = \mathrm{i}\,\frac{Z e^2}{\boldsymbol q^2}\;\bar u(p')\,\gamma^0\,u(p)
$
</p>

<b>La cinématique</b><br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/rutherfordangle.png" style="box-shadow:none;background:none;">
</div>

La diffusion est élastique sur un centre infiniment lourd, donc $|\boldsymbol p'| = |\boldsymbol p|$. Le transfert se lit alors sur un triangle isocèle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol q^2 = |\boldsymbol p' - \boldsymbol p|^2 = 2\boldsymbol p^2\,(1 - \cos\theta) = 4\boldsymbol p^2\sin^2\frac{\theta}{2}
$
</p>

en utilisant $1 - \cos\theta = 2\sin^2(\theta/2)$. <b>C'est ce $\sin^2(\theta/2)$, élevé au carré par le module de l'amplitude, qui produira le fameux $\sin^{-4}$.</b>

<b>Le facteur spinoriel, dans la limite non relativiste</b><br>
Ici $\bar u(p')\gamma^0 u(p) = 2m\\,\xi'^\dagger\xi = 2m$ pour des spins alignés.

Il reste à convertir l'amplitude en section efficace. La relation générale a été établie dans la partie sur la théorie de la diffusion&nbsp;; pour une diffusion élastique sur un centre fixe, elle se réduit à $\dfrac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \dfrac{|\mathcal M|^2}{(4\pi)^2}$. En y reportant ce qui précède et en posant $|\boldsymbol p| = m v$, on obtient la formule annoncée.

</details>

</div>

<br>

### Ce que la formule raconte

Deux traits méritent d'être relevés, et ce sont eux qui firent l'histoire.

<b>La divergence en $\theta \to 0$</b> est la signature de la <b>portée infinie</b> du potentiel de Coulomb. Une particule passant arbitrairement loin est tout de même déviée, si peu que ce soit, et il y a donc une infinité de particules faiblement déviées. Un potentiel de portée finie, comme celui de Yukawa, donnerait au contraire une section efficace finie à angle nul.

<b>Le $\sin^{-4}$ autorise des rétrodiffusions</b> rares, mais réelles. C'est exactement ce que Rutherford observa, et qui lui parut si extraordinaire&nbsp;: dans le modèle atomique de l'époque, où la charge positive était diluée dans tout l'atome, un tel rebroussement était impossible. Il fallait une charge <b>compacte</b>, capable de fournir de très grands transferts d'impulsion.

<div id="theo">

Fait remarquable&nbsp;: le calcul quantique redonne <b>exactement</b> le résultat classique de Rutherford, sans le moindre $\hbar$ résiduel. Cette coïncidence tient à la forme particulière du potentiel en $1/r$, et ne se reproduit pour aucun autre potentiel.

</div>

<br>

## Mott&nbsp;: le même calcul, sans approximation

Refaisons le calcul en gardant toute la structure spinorielle. C'est ici que la boîte à outils entre en action.

### Le terme à évaluer

La difficulté est le facteur $\big|\bar u^{s'}(p')\\,\gamma^0\\,u^s(p)\big|^2$, qu'il faut moyenner sur $s$ et sommer sur $s'$.

<div id="preuve">

<details>
<summary>L'algorithme à l'œuvre</summary>

<b>Les pas 1 à 4</b><br>
On conjugue avec l'astuce Spineurs 1, on explicite les indices, on somme les spins&nbsp;: les spineurs se soudent en deux matrices, et la chaîne se referme sur elle-même.

<p style="text-align:center;">
$\displaystyle
\frac{1}{2}\sum_{s,s'}\Big|\bar u^{s'}(p')\,\gamma^0\, u^s(p)\Big|^2
= \frac{1}{2}\,\mathrm{Tr}\Big[\gamma^0\big(\not{\!\!p} + m\big)\,\gamma^0\big(\not{\!\!p}' + m\big)\Big]
$
</p>

<b>Le pas 5</b><br>
En développant le produit, quatre termes apparaissent, mais <b>deux disparaissent immédiatement</b>&nbsp;: ils contiennent trois matrices $\gamma$, donc un nombre impair, et leur trace est nulle.

Il reste&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{Tr}\Big[\gamma^0\not{\!\!p}\,\gamma^0\not{\!\!p}'\Big] = 4\big(E_{\boldsymbol p}E_{\boldsymbol p'} + \boldsymbol p\cdot\boldsymbol p'\big) \quad$
et
$\displaystyle
\quad m^2\,\mathrm{Tr}\big[(\gamma^0)^2\big] = 4m^2
$
</p>

la première venant de l'identité à quatre matrices. D'où

<p style="text-align:center;">
$\displaystyle
\frac{1}{2}\sum_{s,s'}\Big|\bar u^{s'}\gamma^0 u^s\Big|^2 = 2\big(E_{\boldsymbol p}^2 + \boldsymbol p\cdot\boldsymbol p' + m^2\big)
$
</p>

en utilisant $E_{\boldsymbol p'} = E_{\boldsymbol p}$, la diffusion étant élastique.

<b>Réécriture cinématique</b><br>
Avec $\boldsymbol p\cdot\boldsymbol p' = \boldsymbol p^2\cos\theta$, $E^2 = \boldsymbol p^2 + m^2$ et $\beta = |\boldsymbol p|/E$, un peu d'algèbre transforme cette expression en

<p style="text-align:center;">
$\displaystyle
4E_{\boldsymbol p}^2\left(1 - \beta^2\sin^2\frac{\theta}{2}\right)
$
</p>

C'est cette forme, comparée au $4m^2$ du calcul non relativiste, qui produit le facteur correctif de Mott.

</details>

</div>

<br>

<div id="theo">

<b>Formule de Mott</b>

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm{d}\sigma}{\mathrm{d}\Omega} = \frac{Z^2\alpha^2}{4\boldsymbol p^2\beta^2\sin^4(\theta/2)}\left(1 - \beta^2\sin^2\frac{\theta}{2}\right)
$
</p>

C'est Rutherford, multiplié par un facteur correctif qui vaut 1 à basse vitesse et qui devient décisif à haute énergie.

</div>

### Le facteur de Mott est un effet de spin

Le facteur $\big(1 - \beta^2\sin^2\frac{\theta}{2}\big)$ n'est pas un ornement relativiste. Regardons ce qu'il fait à $\theta = \pi$, c'est-à-dire en rétrodiffusion, dans la limite ultra-relativiste $\beta \to 1$&nbsp;:

<p style="text-align:center;">
$\displaystyle
1 - \beta^2\sin^2\frac{\pi}{2} \;\xrightarrow[\ \beta \to 1\ ]{}\; 0
$
</p>

<b>La rétrodiffusion s'éteint complètement.</b> Voilà un effet que la formule de Rutherford ne pouvait pas contenir, et il s'explique entièrement par l'hélicité.

<div id="theo">

À haute énergie, la chiralité est conservée par le vertex vectoriel, et elle coïncide avec l'hélicité&nbsp;: <b>l'hélicité est donc quasi conservée</b>.

Or une rétrodiffusion à $180°$ renverse l'impulsion. Pour conserver l'hélicité, il faudrait donc renverser aussi le spin. Mais le potentiel coulombien se couple par $\gamma^0$, qui ne sait pas faire basculer un spin.

Le processus est donc <b>interdit</b>, et la formule le sait.

</div>

<!-- FIGURE à redessiner (nouvelle, pas dans le livre) : la suppression de la rétrodiffusion. Deux vignettes côte à côte.
À gauche, titrée « avant » : un électron représenté par une flèche d'impulsion horizontale vers la droite, surmontée d'une petite flèche tournante (ou d'une flèche de spin) indiquant l'hélicité h = +1, avec le spin parallèle à l'impulsion.
À droite, titrée « après, à 180° » : la même particule, impulsion renversée vers la gauche. Dessiner DEUX possibilités superposées en pointillés : (a) le spin est resté dans le même sens absolu, donc l'hélicité est devenue -1, avec une croix rouge et la mention « hélicité renversée : interdit » ; (b) le spin s'est retourné pour garder h = +1, avec une croix rouge et la mention « le vertex gamma^0 ne retourne pas le spin ».
Sous les deux vignettes, une accolade et la conclusion : « aucune issue : la rétrodiffusion est supprimée ». Légende : « Pourquoi le facteur de Mott annule la rétrodiffusion à haute énergie. » -->

Notons enfin que ce facteur n'apparaît qu'avec le spin $\frac{1}{2}$&nbsp;: une particule scalaire diffusée par le même potentiel obéirait à Rutherford sans correction, à toute vitesse. <b>La formule de Mott est donc une mesure du spin de l'électron</b>, et c'est à ce titre qu'elle fut historiquement importante.

<br>

## Compton&nbsp;: deux diagrammes et le croisement

La diffusion d'un photon sur un électron, $e^- + \gamma \to e^- + \gamma$, introduit une difficulté nouvelle&nbsp;: elle reçoit <b>deux</b> diagrammes au plus bas ordre, et c'est leur coexistence qui fait tout l'intérêt du calcul.

### Les deux canaux

Le photon entrant et le photon sortant s'accrochent tous deux à la <b>même</b> ligne fermionique, celle qui relie l'électron entrant à l'électron sortant. Il y a donc deux topologies possibles, selon l'ordre dans lequel on les rencontre en <b>suivant cette ligne</b> (on ne parle pas ici d'ordre chronologique).

<div id="def">

<ul style="margin-top:1em;margin-bottom:1em;">
<li><b>Canal $s$</b>&nbsp;: en suivant la ligne fermionique depuis l'électron entrant, on rencontre <b>d'abord</b> le vertex du photon <b>entrant</b> ($p_2$), puis celui du photon sortant. Entre les deux, la ligne interne porte $p_1 + p_2$.</li>
<li><b>Canal $u$</b>&nbsp;: c'est l'inverse. On rencontre <b>d'abord</b> le vertex du photon <b>sortant</b> ($p_4$), puis celui du photon entrant. La ligne interne porte $p_1 - p_4$.</li>
</ul>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/compton1.png" style="box-shadow:none;background:none;">
</div>

<b>Ce qui distingue les deux canaux est donc l'impulsion de la ligne interne</b>, et rien d'autre&nbsp;: $p_1 + p_2$ d'un côté, $p_1 - p_4$ de l'autre. Les noms des deux canaux viendront de là, comme la section suivante va le montrer.

Les règles de Feynman donnent, pour le canal $s$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\mathcal M_s = \bar u(p_3)\,(\mathrm{i}|e|\gamma^\nu)\,\epsilon^*_{\nu}(p_4)\;\frac{\mathrm{i}}{\not{\!\!p}_1 + \not{\!\!p}_2 - m + \mathrm{i}\epsilon}\;\epsilon_{\mu}(p_2)\,(\mathrm{i}|e|\gamma^\mu)\,u(p_1)
$
</p>

et l'expression analogue en canal $u$, avec $\not{\\!\\!p}_1 - \not{\\!\\!p}_4$ dans le propagateur.

<!-- FIGURE à redessiner (d'après fig. 40.3 de L&B), temps vers le haut : deux diagrammes côte à côte.
(a) canal s : ligne fermionique globalement MONTANTE et rectiligne. En bas l'électron entrant (p_1) ; premier vertex, où s'accroche le photon ondulé ENTRANT (p_2) arrivant de la gauche ; segment interne VERTICAL portant (p_1+p_2), encadré ; second vertex, d'où part vers la droite le photon ondulé SORTANT (p_4) ; en haut l'électron sortant (p_3).
(b) canal u : ligne fermionique en Z. En bas à gauche l'électron entrant (p_1) monte ; premier vertex, d'où part vers la gauche le photon ondulé SORTANT (p_4) ; puis la ligne interne part HORIZONTALEMENT vers la droite, portant (p_1-p_4), encadrée ; second vertex, où arrive de la droite le photon ondulé ENTRANT (p_2) ; puis la ligne remonte vers l'électron sortant (p_3).
Dans les deux cas, marquer les flèches du flux fermionique et numéroter les deux vertex « 1 » et « 2 » dans l'ordre où on les rencontre en suivant la ligne : c'est cet ordre, et lui seul, qui distingue les deux canaux.
Encadrer les deux impulsions internes. Annoter (a) « ligne interne de genre temps, carré = s > 0 » et (b) « ligne interne de genre espace, carré = u < 0 ».
Légende : « Les deux topologies de Compton. Ce qui les distingue est l'ordre des deux vertex le long de la ligne fermionique, donc l'impulsion portée par la ligne interne, et non un ordre temporel. L'orientation du segment interne, verticale ou horizontale, traduit son genre. » -->


### Les variables de Mandelstam

Pour un processus à quatre pattes, il n'existe que <b>trois</b> façons d'apparier les particules deux à deux. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/compton2.png" style="box-shadow:none;background:none;">
</div>

D'où trois invariants de Lorentz, qui suffisent à décrire toute la cinématique.

<div id="def">

<p style="text-align:center;">
$\displaystyle
s = (p_1 + p_2)^2
\qquad
t = (p_1 - p_3)^2
\qquad
u = (p_1 - p_4)^2
$
</p>

</div>



<b>Un canal est nommé d'après la variable que porte sa ligne interne.</b>


Notons l'<b>asymétrie de construction</b>, tout en découle&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>$s$ est bâti sur une <b>somme</b> de deux impulsions <b>entrantes</b>&nbsp;;</li>
<li>$t$ et $u$ sont bâtis sur des <b>différences</b> entre une entrante et une sortante.</li>
</ul>

Cette remarque, apparemment formelle, répond immédiatement à la question des signes.

### Signes de $s$, $t$ et $u$

Toutes les impulsions physiques, entrantes comme sortantes, sont des quadrivecteurs <b>orientés vers le futur</b>&nbsp;: leur composante temporelle est positive, et leur carré vaut $m^2 \geq 0$.

Or la somme de deux tels vecteurs est <b>de genre temps</b>, alors que leur différence est en général <b>de genre espace</b>.

<div id="preuve">

Faisons le calcul dans le référentiel du centre de masse pour un processus de diffusion élastique (où les particules 1 et 3 ont une masse $m_1$, et les particules 2 et 4 une masse $m_2$).
Posons l'axe $z$ selon les particules entrantes, avec une impulsion de module $p$. Notons $\theta$ l'angle de diffusion&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_1 = (E_1,\, 0,\, 0,\, p) \\ 
p_2 = (E_2,\, 0,\, 0,\, -p) \\ 
p_3 = (E_1,\, p\sin\theta,\, 0,\, p\cos\theta) \\ 
p_4 = (E_2,\, -p\sin\theta,\, 0,\, -p\cos\theta)
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/compton3.png" style="box-shadow:none;background:none;">
</div>
Pour $s$, la somme des deux entrantes a ses parties spatiales qui s'annulent&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_1 + p_2 = (E_1 + E_2,\, \boldsymbol 0) \quad\Longrightarrow\quad s = (E_1 + E_2)^2 > 0
$
</p>

C'est le carré de l'énergie totale disponible, et ce quadrivecteur est purement temporel dans ce référentiel.

Pour $t$, la différence entre $p_1$ et $p_3$ a sa partie temporelle qui s'annule (les deux particules ayant la même masse, elles ont la même énergie $E_1$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_1 - p_3 = \big(0,\; -p\sin\theta,\; 0,\; p(1 - \cos\theta)\big)
$
</p>

Purement spatial&nbsp;! Son carré est donc négatif ou nul&nbsp;:

<p style="text-align:center;">
$\displaystyle
t = -p^2\big[\sin^2\theta + (1-\cos\theta)^2\big] = -2p^2(1 - \cos\theta) \;\leq\; 0
$
</p>
Pour $u$, le calcul croisé avec $p_4$ donne cette fois une partie temporelle non nulle si les masses $m_1$ et $m_2$ sont différentes&nbsp;:

<p style="text-align:center;">
$\displaystyle
p_1 - p_4 = \big(E_1 - E_2,\; p\sin\theta,\; 0,\; p(1 + \cos\theta)\big)
$
</p>

Son carré se calcule de la même manière&nbsp;:

<p style="text-align:center;">
$\displaystyle
u = (E_1 - E_2)^2 - p^2\big[\sin^2\theta + (1+\cos\theta)^2\big] = (E_1 - E_2)^2 - 2p^2(1 + \cos\theta)
$
</p>

Conclusion<br>
Le quadrivecteur définissant $s$ est purement temporel, garantissant une valeur strictement positive. Celui définissant $t$ est purement spatial en diffusion élastique, ce qui garantit $t \leq 0$ sur tout le domaine physique (puisque $1 - \cos\theta \geq 0$).

L'approche générale montre en revanche que $u$ n'est pas obligatoirement négatif&nbsp;! Il est majoré par $(E_1 - E_2)^2$, lui- même majoré par $(m_1 - m_2)^2$. L'affirmation selon laquelle $u \leq 0$ n'est absolument vraie que si les masses incidentes sont égales, ou si l'on se place dans la limite ultra-relativiste ($p \gg m$, rendant la différence de masse négligeable devant l'impulsion).
</div>

<br>

<div id="theo">

Ces trois quantités ne sont donc pas indépendantes&nbsp;:

<p style="text-align:center;">
$\displaystyle
s + t + u = \sum_{i=1}^{4} m_i^2
$
</p>

Deux variables suffisent, et l'on choisit d'ordinaire $s$ et $t$.

</div>

<br>

<div id="preuve">

Dans notre cas, on a bien&nbsp;:

<p style="text-align:center;">
$\displaystyle
s + t + u = (E_1+E_2)^2 +-2p^2(1-\cos\theta)+(E_1-E_2)^2-2p^2(1+\cos\theta) = 2(E_1^2-p^2) + 2(E_2^2-p^2) = 2m_1^2 + 2m_2^2
$
</p>

</div>



### Le calcul

<div id="theo">

<b>Compton dans la limite ultra-relativiste</b>

<p style="text-align:center;">
$\displaystyle
\frac{1}{4}\sum_{\mathrm{spins,\;polar.}}|\mathcal M|^2 = -2e^4\left(\frac{u}{s} + \frac{s}{u}\right)
$
</p>

Cette quantité est bien positive, puisque on a $u < 0$ dans ce domaine.

</div>

Pour la démonstration, on va faire tourner l'algorithme des cinq pas, sans raccourci pour une fois.

<div id="preuve">

<details>
<summary>Le canal $s$, déroulé en entier</summary>

Dans la limite où on néglige la masse de l'électron devant sont énergie (limite ultrarelativiste), toutes les pattes sont sur le cône&nbsp;: $p_i^2 = 0$ pour $i = 1, \ldots, 4$. Le dénominateur du propagateur vaut alors $(p_1+p_2)^2 = s$, et l'amplitude se réduit à

<p style="text-align:center;">
$\displaystyle
\mathcal M_s = -\frac{e^2}{s}\;\epsilon^*_\nu(p_4)\,\epsilon_\mu(p_2)\;\bar u(p_3)\,\underbrace{\gamma^\nu\big(\not{\!\!p}_1 + \not{\!\!p}_2\big)\gamma^\mu}_{\textstyle \Gamma^{\nu\mu}}\,u(p_1)
$
</p>

<b>Pas 1&nbsp;: conjuguer</b>, avec l'astuce Spineurs 1.<br>
Pour $\Gamma^{\nu\mu} = \gamma^\nu\not{\\!\\!q}\gamma^\mu$ avec $\not{\\!\\!q} = \not{\\!\\!p}_1 + \not{\\!\\!p}_2$, l'adjoint renverse l'ordre des trois facteurs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0\big(\Gamma^{\nu\mu}\big)^\dagger\gamma^0 = \gamma^\mu\,\not{\!\!q}\,\gamma^\nu
$
</p>

<b>Pas 2 et 3&nbsp;: sommer sur les spins</b> avec l'astuce Spineurs 2, qui donne simplement $\not{\\!\\!p}_1$ et $\not{\\!\\!p}_3$ puisque les masses sont nulles.

<b>Pas 4&nbsp;: sommer sur les polarisations</b> avec l'astuce photon. Chacune des deux sommes apporte un $-g$, et les deux signes moins se compensent&nbsp;: on peut donc simplement <b>contracter les indices $\mu$ et $\nu$ entre eux</b>.

La chaîne s'est refermée, et c'est une trace&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum|\mathcal M_s|^2 = \frac{e^4}{s^2}\;\mathrm{Tr}\Big[\gamma^\nu\,\not{\!\!q}\,\gamma^\mu\,\not{\!\!p}_1\;\gamma_\mu\,\not{\!\!q}\,\gamma_\nu\,\not{\!\!p}_3\Big]
$
</p>

<b>Pas 5&nbsp;: évaluer, en trois simplifications</b>

<i>La contraction intérieure</i><br>
L'identité $\gamma^\mu \not{\\!\\!a}\\,\gamma_\mu = -2\not{\\!\\!a}$ s'applique au groupe central $\gamma^\mu\not{\\!\\!p}\_1\gamma_\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum|\mathcal M_s|^2 = -\frac{2e^4}{s^2}\;\mathrm{Tr}\Big[\gamma^\nu\,\not{\!\!q}\,\not{\!\!p}_1\,\not{\!\!q}\,\gamma_\nu\,\not{\!\!p}_3\Big]
$
</p>

<i>Le sandwich $\not{\\!\\!q}\not{\\!\\!p}_1\not{\\!\\!q}$</i><br>
On anticommute avec $\not{\\!\\!q}\not{\\!\\!p}_1 = 2\,q\cdot p_1 - \not{\\!\\!p}_1\not{\\!\\!q}$, puis on utilise $(\not{\\!\\!q})^2 = q^2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\not{\!\!q}\,\not{\!\!p}_1\,\not{\!\!q} = 2(q\cdot p_1)\,\not{\!\!q} - \not{\!\!p}_1\;q^2
$
</p>

Avec $q = p_1 + p_2$, on a $q^2 = 2\\,p_1\cdot p_2 = s$ et $q\cdot p_1 = p_1^2 + p_1\cdot p_2 = s/2$. D'où une simplification spectaculaire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\not{\!\!q}\,\not{\!\!p}_1\,\not{\!\!q} = s\,\not{\!\!q} - s\,\not{\!\!p}_1 = s\,\big(\not{\!\!q} - \not{\!\!p}_1\big) = s\,\not{\!\!p}_2
$
</p>

$\not{\\!\\!p}_2$ est le résidu de ce sandwich.

<i>La seconde contraction</i><br>
Il reste $\gamma^\nu\not{\\!\\!p}\_2\gamma_\nu = -2\not{\\!\\!p}_2$, puis la trace la plus simple de la boîte à outils&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum|\mathcal M_s|^2 = -\frac{2e^4}{s^2}\cdot s\cdot(-2)\;\mathrm{Tr}\big[\not{\!\!p}_2\,\not{\!\!p}_3\big] = \frac{4e^4}{s}\cdot 4\,(p_2\cdot p_3)
$
</p>

<b>La traduction en Mandelstam</b><br>
La conservation $p_1 + p_2 = p_3 + p_4$ donne $p_1 - p_4 = p_3 - p_2$, donc

<p style="text-align:center;">
$\displaystyle
u = (p_1 - p_4)^2 = (p_3 - p_2)^2 = -2\,p_2\cdot p_3
\quad\Longrightarrow\quad
p_2\cdot p_3 = -\frac{u}{2}
$
</p>

et par conséquent

<p style="text-align:center;">
$\displaystyle
\sum|\mathcal M_s|^2 = -\frac{8e^4\,u}{s}
\qquad\Longrightarrow\qquad
\frac{1}{4}\sum|\mathcal M_s|^2 = -\frac{2e^4\,u}{s}
$
</p>

le facteur $\frac{1}{4}$ étant la moyenne sur les deux spins de l'électron entrant et les deux polarisations du photon entrant.

</details>

</div>

<br>

<div id="preuve">

<details>
<summary>Le canal $u$, et une absence remarquable</summary>

<b>Aucun calcul nouveau n'est nécessaire.</b> Les deux topologies diffèrent seulement par l'échange du photon entrant et du photon sortant, c'est-à-dire $p_2 \leftrightarrow -p_4$. Or cet échange transforme précisément $s$ en $u$&nbsp;:

<p style="text-align:center;">
$\displaystyle
s = (p_1 + p_2)^2 \;\longleftrightarrow\; (p_1 - p_4)^2 = u
$
</p>

Il suffit donc d'échanger $s$ et $u$ dans le résultat précédent&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{1}{4}\sum|\mathcal M_u|^2 = -\frac{2e^4\,s}{u}
$
</p>

<b>Le point qui surprend</b>&nbsp;: en additionnant les deux, on obtient le résultat annoncé, <b>sans aucun terme d'interférence</b>. Or les amplitudes s'additionnent avant d'être élevées au carré&nbsp;: un terme croisé $2\\,\mathrm{Re}(\mathcal M_s\mathcal M_u^*)$ devrait exister.

Il existe bien, mais il est <b>proportionnel à $m$</b> et s'éteint donc avec elle. La raison est la conservation de la chiralité, établie à la partie précédente&nbsp;: dans la limite sans masse, les deux canaux ne peuvent contribuer qu'à des configurations d'hélicité <b>différentes</b>, donc à des états finals orthogonaux, qui n'interfèrent pas.

Ce n'est donc pas une règle générale mais un accident de la limite sans masse. Le calcul complet, qui donne la formule de <b>Klein–Nishina</b>, contient bien les interférences.

</details>

</div>


### La symétrie de croisement

Cadeau final du formalisme&nbsp;: l'interprétation de Feynman des antiparticules comme particules remontant le temps autorise à «&nbsp;plier&nbsp;» les pattes d'un diagramme&nbsp;: une particule <b>entrante</b> d'impulsion $p$ devient une antiparticule <b>sortante</b> d'impulsion $-p$ et de charge opposée. Et l'amplitude est <b>la même fonction</b>.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal M\big(\phi(p) + \ldots \to \ldots\big) = \mathcal M\big(\ldots \to \ldots + \bar\phi(k)\big)\quad$
avec
$\displaystyle
\quad p = -k
$
</p>

</div>

### Plier change le canal

La <b>topologie</b> du diagramme ne change pas, et la ligne interne porte toujours la même impulsion. Ce qui change, c'est <b>lesquelles</b> des pattes sont entrantes. Or les variables de Mandelstam sont définies par référence aux pattes entrantes&nbsp;: la même impulsion interne change donc de nom.


<div id="preuve">

Partons de l'annihilation $e^-e^+ \to \mu^-\mu^+$ calculée à la partie précédente, en canal $s$. Numérotons&nbsp;:

<p style="text-align:center;">
$\displaystyle
1 = e^-\ \text{entrant}
\quad
2 = e^+\ \text{entrant}
\quad
3 = \mu^-\ \text{sortant}
\quad
4 = \mu^+\ \text{sortant}
$
</p>

Le photon virtuel porte l'impulsion $p_1 + p_2$, donc $q^2 = s$&nbsp;: c'est bien le canal $s$.

<b>Plions deux pattes.</b> On fait passer le $e^+$ entrant du côté sortant, où il devient un $e^-$ d'impulsion $-p_2$&nbsp;; et le $\mu^+$ sortant du côté entrant, où il devient un $\mu^-$ d'impulsion $-p_4$. Le nouveau processus est

<p style="text-align:center;">
$\displaystyle
e^-(p_1) + \mu^-(-p_4) \;\longrightarrow\; e^-(-p_2) + \mu^-(p_3)
$
</p>

c'est-à-dire une diffusion $e^-\mu^- \to e^-\mu^-$.

<b>Renumérotons</b> selon la convention (deux entrantes d'abord)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde p_1 = p_1
\quad
\tilde p_2 = -p_4
\quad
\tilde p_3 = -p_2
\quad
\tilde p_4 = p_3
$
</p>

<b>Et calculons les nouvelles variables.</b>

<p style="text-align:center;">
$\displaystyle
\tilde s = (\tilde p_1 + \tilde p_2)^2 = (p_1 - p_4)^2 = u
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde t = (\tilde p_1 - \tilde p_3)^2 = (p_1 + p_2)^2 = s
$
</p>

<b>Voilà le résultat&nbsp;: l'ancien $s$ est devenu le nouveau $t$.</b>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcroisement.png" style="box-shadow:none;background:none;">
</div>

<b>Et voici pourquoi c'est inévitable.</b> Le photon virtuel n'a pas bougé&nbsp;: il porte toujours $p_1 + p_2$. Mais $p_1$ et $p_2$ ne sont plus deux impulsions <b>entrantes</b>&nbsp;: $p_1$ est entrante et $-p_2 = \tilde p_3$ est sortante. La combinaison «&nbsp;entrante moins sortante&nbsp;» est précisément la définition de $t$.

<b>Le contrôle des signes.</b> Nous savons que $\tilde t \leq 0$ dans le domaine physique du nouveau processus. Et de fait $\tilde t = s$, où $s$ est ici évalué <b>hors</b> du domaine physique de l'ancien processus. C'est tout le sens de la mise en garde qui suit&nbsp;: le croisement échange les variables, mais chacune se retrouve dans une plage de valeurs différente.

</div>

<!-- FIGURE à redessiner (nouvelle, pas dans le livre) : le repliement, en trois panneaux alignés horizontalement, temps vers le haut dans chacun.
PANNEAU (a), titré « canal s : e-e+ -> mu-mu+ ». En bas, deux lignes fermioniques convergent vers un vertex : à gauche l'électron e- (flèche montante, impulsion p1), à droite le positron e+ (flèche DESCENDANTE, impulsion p2, la flèche descendante marquant l'antiparticule). Du vertex part vers le haut une ligne ondulée VERTICALE étiquetée q = p1+p2, encadrée et annotée « genre temps, q^2 = s > 0 ». Au sommet, un second vertex d'où divergent le mu- (flèche montante, p3) et le mu+ (flèche descendante, p4).
PANNEAU (b), titré « le repliement ». Reprendre le dessin (a) en gris pâle, et superposer deux grosses flèches courbes : l'une part de la patte e+ du bas et la fait pivoter vers le haut à droite, annotée « e+ entrant (p2) devient e- sortant (-p2) » ; l'autre part de la patte mu+ du haut et la fait pivoter vers le bas à droite, annotée « mu+ sortant (p4) devient mu- entrant (-p4) ». Ajouter au centre la mention « la ligne interne ne bouge pas ».
PANNEAU (c), titré « canal t : e-mu- -> e-mu- ». Deux lignes fermioniques VERTICALES parallèles, montantes : à gauche l'électron (e- en bas, e- en haut), à droite le muon (mu- en bas, mu- en haut). Entre elles, une ligne ondulée HORIZONTALE étiquetée q = p1+p2 (le MEME q qu'en (a), à souligner), encadrée et annotée « genre espace, q^2 = t < 0 ».
Sous les trois panneaux, une accolade et la conclusion : « Même diagramme, même ligne interne. Seul le statut entrant/sortant des pattes a changé, et avec lui le nom de la variable. »
Légende : « Le croisement vu comme une rotation du diagramme : le propagateur vertical (genre temps) devient horizontal (genre espace). C'est le meilleur aide-mémoire du mécanisme. » -->


Aide-mémoire visuel&nbsp;: le croisement fait <b>pivoter le diagramme d'un quart de tour</b>. Le propagateur qui était vertical, donc de genre temps, devient horizontal, donc de genre espace. Et c'est cohérent avec les signes&nbsp;: $s > 0$ d'un côté, $t < 0$ de l'autre.



<div id="preuve">

Un second exemple&nbsp;: Møller et Bhabha

La diffusion $e^-e^- \to e^-e^-$ (Møller) se croise en $e^-e^+ \to e^-e^+$ (Bhabha), en pliant une patte électronique de chaque côté. Deux expériences très différentes, une seule fonction analytique.

Précautions&nbsp;: le croisement échange les variables, mais aussi leurs <b>domaines</b>. Trois conséquences pratiques&nbsp;:

<ul style="margin-top:-0.5em;margin-bottom:1em;">
<li>les <b>singularités</b> de l'amplitude (pôles de résonance, seuils de production de paires) vivent dans des régions différentes selon le processus. Un pôle en $s = M^2$, visible comme une résonance dans le canal $s$, devient un pôle en $t = M^2$ inaccessible dans le canal $t$, puisque $t \leq 0$&nbsp;: la résonance disparaît de l'expérience&nbsp;;</li>
<li>les <b>facteurs de flux</b> et les facteurs d'espace de phase ne se croisent pas&nbsp;: ils dépendent des masses et des énergies des particules réellement entrantes. Seule l'amplitude $\mathcal M$ se croise, pas la section efficace&nbsp;;</li>
<li>les <b>facteurs de moyenne sur les spins</b> changent si le nombre de pattes fermioniques entrantes change.</li>
</ul>

</div>

En pratique&nbsp;: le croisement est un outil de calcul très puissant, mais il faut recalculer tout ce qui n'est pas $\mathcal M$.


### Le plan de Mandelstam

Les trois canaux ne sont pas trois calculs, mais trois <b>régions</b> d'un même objet. Il existe une représentation graphique remarquable de cette situation.


<b>La construction&nbsp;:</b><br>
la contrainte $s + t + u = \sum m_i^2$ dit que la somme des trois variables est <b>constante</b>. Or il existe une propriété classique du triangle équilatéral&nbsp;: pour tout point du plan, la somme de ses <b>distances signées</b> aux trois côtés est constante.

On peut donc utiliser $(s, t, u)$ comme coordonnées d'un point dans un plan, chaque variable étant lue comme la distance à l'un des trois côtés d'un triangle équilatéral.

<div style="text-align:center;margin:0.8em 0;">
<img src="/planmandelstam.png" style="box-shadow:none;background:none;max-width:100%;">
</div>

<div id="preuve">

Détaillons la lecture du diagramme, car chaque élément a un sens précis.

<b>Les trois côtés du triangle</b> sont les droites $s = 0$, $t = 0$ et $u = 0$. Une variable est positive du côté intérieur de son côté, négative de l'autre.

<b>L'intérieur du triangle</b> est la région où les trois variables sont positives simultanément. <b>Aucun processus de diffusion n'y vit</b>, puisque nous avons montré que deux des trois variables sont toujours négatives.

<b>Les trois régions physiques</b> sont donc trois secteurs <b>extérieurs</b> au triangle, un par canal, et ils sont disjoints&nbsp;:

<ul style="margin-top:0.5em;">
<li>le secteur où $s > 0$, $t \leq 0$, $u \leq 0$&nbsp;: c'est le canal $s$, celui du processus $1 + 2 \to 3 + 4$&nbsp;;</li>
<li>le secteur où $t > 0$, $s \leq 0$, $u \leq 0$&nbsp;: c'est le canal $t$, celui du processus croisé $1 + \bar 3 \to \bar 2 + 4$&nbsp;;</li>
<li>le secteur où $u > 0$, $s \leq 0$, $t \leq 0$&nbsp;: c'est le canal $u$, celui du processus $1 + \bar 4 \to 3 + \bar 2$.</li>
</ul>

<b>Les droites en tirets</b> sont les <b>seuils</b>. Pour des particules de masse $m$, produire une paire dans le canal $s$ demande au moins $2m$ d'énergie, soit $s \geq 4m^2$. La région physique du canal $s$ ne commence donc pas au côté $s = 0$, mais au-delà de la droite $s = 4m^2$&nbsp;; de même pour les deux autres canaux.

</div>


<b>La morale&nbsp;:</b><br>
l'amplitude $\mathcal M(s, t)$ est <b>une seule fonction analytique</b> définie sur tout le plan. Chaque processus physique n'en observe qu'un secteur. Le croisement consiste à <b>prolonger analytiquement</b> cette fonction d'un secteur à l'autre.

C'est pour cela qu'un seul calcul suffit pour trois processus, et c'est aussi pour cela qu'il faut recalculer les facteurs de flux&nbsp;: eux ne sont pas cette fonction.



<!-- FIGURE à redessiner (nouvelle, d'après les représentations classiques du plan de Mandelstam) : deux panneaux côte à côte.
PANNEAU DE GAUCHE, titré « le plan de Mandelstam ». Tracer un grand triangle équilatéral pointe en haut. Étiqueter ses trois côtés, en écrivant les étiquettes le long des côtés : le côté oblique gauche « s = 0 », le côté oblique droit « u = 0 », le côté horizontal du bas « t = 0 ». Au centre du triangle, marquer un point et tracer les trois segments perpendiculaires aux trois côtés, étiquetés s, t, u avec des flèches, pour illustrer la lecture en coordonnées (la somme des trois distances est constante).
Tracer ensuite trois droites en TIRETS, chacune parallèle à un côté et située à l'extérieur : « s = 4m^2 » parallèle au côté s=0, « t = 4m^2 » parallèle au côté t=0 (donc au-dessus de la pointe), « u = 4m^2 » parallèle au côté u=0.
Griser trois secteurs, chacun au-delà de sa droite en tirets, et les étiqueter : le secteur en bas à droite « 1+2 -> 3+4 (canal s) », le secteur en haut « 1+3bar -> 2bar+4 (canal t) », le secteur en bas à gauche « 1+4bar -> 3+2bar (canal u) ». Annoter l'intérieur du triangle « aucun processus physique ici ».
PANNEAU DE DROITE, titré « un seul diagramme, trois processus ». Deux blobs circulaires avec quatre pattes chacun, reliés par une grosse flèche en tirets étiquetée « croisement ».
Blob de gauche : deux pattes entrantes en bas (p1 en bas à gauche, p2 en bas à droite, flèches vers le blob) et deux sortantes en haut (p3 en haut à gauche, p4 en haut à droite, flèches sortantes) ; annoter « s » près du côté entrant et « t » au sommet du blob.
Blob de droite : les pattes réarrangées, p3 et p1 entrantes, p4 et p2 sortantes ; annoter « s » et « t » aux positions échangées par rapport au premier.
Légende : « Les trois canaux sont trois secteurs disjoints du même plan, séparés par les seuils de production. L'amplitude est une unique fonction analytique que chaque expérience explore dans son secteur. » -->


<br>

## Bilan

<p style="text-align:center;">
$\displaystyle
\text{faisceaux non polarisés}
\;\xrightarrow{\ \text{moyenne + somme}\ }\;
\sum_s u^s\bar u^s = \not{\!\!p} + m
\;\xrightarrow{\ \text{la chaîne se referme}\ }\;
\text{trace}
\;\xrightarrow{\ \text{identités}\ }\;
\text{nombre}
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde A^0_{\mathrm{cl}} = \frac{Z|e|}{\boldsymbol q^2},\quad \boldsymbol q^2 = 4\boldsymbol p^2\sin^2\tfrac{\theta}{2}
\;\xrightarrow{\ \text{limite non relativiste}\ }\;
\text{Rutherford}\ \propto \frac{1}{\sin^4(\theta/2)}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{sans approximation}
\;\xrightarrow{\ \text{traces}\ }\;
\text{Mott} = \text{Rutherford} \times \left(1 - \beta^2\sin^2\tfrac{\theta}{2}\right)
\;\xrightarrow{\ \beta \to 1,\ \theta = \pi\ }\;
\text{rétrodiffusion éteinte}
$
</p>

<p style="text-align:center;">
$\displaystyle
\text{deux canaux}
\;\xrightarrow{\ \text{Mandelstam}\ }\;
-2e^4\!\left(\tfrac{u}{s} + \tfrac{s}{u}\right)
\;\xrightarrow{\ \text{croisement}\ }\;
s \leftrightarrow t\ :\ \text{un calcul, plusieurs processus}
$
</p>

## Pièges

<ul>
<li>On <b>moyenne</b> sur les états initiaux et l'on <b>somme</b> sur les finaux&nbsp;: facteur $\frac{1}{2}$ par fermion entrant non polarisé, $\frac{1}{2}$ par photon entrant.</li>
<li>Une trace d'un nombre <b>impair</b> de matrices $\gamma$ est nulle. Ça élimine la moitié des termes.</li>
<li>L'astuce photon $\sum\epsilon_\mu\epsilon^*_\nu \to -g_{\mu\nu}$ n'est licite que dans une somme sur les polarisations d'un <b>carré</b> d'amplitude, contractée avec des <b>courants conservés</b>. Ce n'est pas une identité vraie terme à terme.</li>
<li>Le $\sin^{-4}$ de Rutherford ne sort pas de la dynamique mais de la <b>cinématique</b>&nbsp;: c'est le triangle isocèle du transfert d'impulsion qui le produit, et le propagateur en $1/\boldsymbol q^2$ qui l'élève au carré.</li>
<li>Le facteur de Mott n'est pas une correction cosmétique&nbsp;: il encode la <b>quasi-conservation de l'hélicité</b> à haute énergie, et une particule scalaire ne l'aurait pas.</li>
<li>Dans Compton, l'absence d'interférence entre canaux $s$ et $u$ est un <b>accident de la limite sans masse</b>, pas une règle générale.</li>
<li>Le croisement échange les variables de Mandelstam mais aussi leurs <b>signes et leurs domaines</b>&nbsp;: les singularités d'une amplitude vivent dans des régions différentes selon le processus considéré, et les facteurs de flux ne se croisent pas.</li>
</ul>

{{%notice note%}}
Et maintenant&nbsp;? Nous savons calculer une section efficace et la comparer à une mesure. Mais tous ces calculs se sont arrêtés à l'<b>ordre le plus bas</b>, et pour une bonne raison&nbsp;: dès qu'un diagramme contient une <b>boucle</b>, l'intégrale sur l'impulsion interne <b>diverge</b>.<br><br>
La partie suivante lève l'obstacle en <b>renormalisant</b> QED, et en tire les deux résultats qui ont fait sa réputation&nbsp;: la charge électrique qui dépend de l'échelle à laquelle on la mesure, et le <b>moment magnétique anormal</b> de l'électron, vérifié aujourd'hui sur une dizaine de chiffres significatifs.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc14">Chapitre précédent</a></td><td><a href="../tqc16">Chapitre suivant</a></td>
    </tr>
</table>
</div>
