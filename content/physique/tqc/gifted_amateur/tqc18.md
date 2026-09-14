+++
title = "TQC-18"
date = 2021-03-06T14:20:50+01:00
weight = 18
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



# Théorie quantique des champs -- Partie 18

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

La théorie quantique des champs n'est pas réservée aux particules relativistes des accélérateurs. Un morceau de cuivre contient environ $10^{23}$ électrons par centimètre cube, tous identiques, tous en interaction, tous soumis au principe de Pauli&nbsp;: c'est un problème de champs quantiques, et il porte un nom, le **problème à $N$ corps**.

Ce chapitre traite le cas d'école&nbsp;: un grand nombre de fermions non relativistes enfermés dans une boîte, ce qui est le modèle de base des électrons dans un solide. On n'aura pas besoin de l'artillerie des spineurs de Dirac, car les énergies en jeu dans un métal (quelques électronvolts) sont ridicules devant l'énergie de masse de l'électron (511&nbsp;keV)&nbsp;: les électrons se contenteront d'interagir via un potentiel coulombien instantané.

{{%notice note "L'itinéraire du chapitre"%}}
Cinq stations&nbsp;:

<ol>
<li>Poser le problème&nbsp;: un hamiltonien à quatre opérateurs, impossible à diagonaliser, et un «&nbsp;vide&nbsp;» qui n'est pas vide.</li>
<li>La <b>théorie de champ moyen</b>&nbsp;: remplacer des paires d'opérateurs par leurs moyennes, ce qui fait apparaître trois termes, dont ceux de Hartree et de Fock.</li>
<li>Calculer l'énergie de l'état fondamental d'un métal, et obtenir un vrai nombre.</li>
<li>Recommencer proprement avec des propagateurs et des règles de Feynman, ce qui donnera le même résultat, mais aussi une masse effective absurde.</li>
<li>Réparer les dégâts avec la <b>RPA</b>, et récolter au passage l'écrantage, les oscillations de Friedel et les plasmons.</li>
</ol>

Le fil conducteur&nbsp;: à chaque étape, une approximation grossière est traduite en <b>diagrammes</b>, et les diagrammes indiquent eux-mêmes ce qu'il faudrait sommer pour faire mieux.
{{%/notice%}}

## Le cadre&nbsp;: des électrons dans une boîte

### L'hamiltonien du problème à $N$ corps

On part de fermions non relativistes de masse $m$ dans une boîte de volume $\mathcal{V}$, interagissant deux à deux par un potentiel instantané. L'hamiltonien se scinde en une partie libre et une perturbation&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\hat{H} = \hat{H}_0 + \hat{V}\quad$
avec
$\displaystyle
\quad \hat{H}_0 = \sum_{\boldsymbol{p}} \frac{\boldsymbol{p}^2}{2m}\,\hat{a}^\dagger_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} = \frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}} \tilde{V}_{\boldsymbol{q}}\,\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\hat{a}_{\boldsymbol{p}}
$
</p>

Les opérateurs $\hat{a}^\dagger$ et $\hat{a}$ créent et détruisent des fermions&nbsp;; ils <b>anticommutent</b>.

</div>


<b>D'où vient $\hat{V}$&nbsp;?</b> C'est la version seconde quantification d'un potentiel à deux corps, écrite dans l'espace des impulsions. Le calcul tient en quelques lignes.

<div id="preuve">

<details>
<summary>Du potentiel en position au potentiel en impulsion&nbsp;:</summary>

Un opérateur à deux corps s'écrit, en termes d'opérateurs de champ,

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} = \frac{1}{2}\int\mathrm{d}^3x\,\mathrm{d}^3y\;\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}^\dagger(\boldsymbol{y})\,V(\boldsymbol{x}-\boldsymbol{y})\,\hat{\psi}(\boldsymbol{y})\hat{\psi}(\boldsymbol{x})
$
</p>

Le facteur $1/2$ corrige le double comptage des paires, et l'ordre des opérateurs (deux créations à gauche, deux annihilations à droite, avec les arguments en miroir) est l'<b>ordre normal</b>, celui qui garantit qu'il ne se passe rien dans le vide.

On développe les champs en modes, $\hat{\psi}(\boldsymbol{x}) = \frac{1}{\sqrt{\mathcal{V}}}\sum\_{\boldsymbol{p}}\hat{a}\_{\boldsymbol{p}}\mathrm{e}^{\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}$, et le potentiel en série de Fourier, $V(\boldsymbol{x}-\boldsymbol{y}) = \sum\_{\boldsymbol{q}}\mathrm{e}^{\mathrm{i}\boldsymbol{q}\cdot(\boldsymbol{x}-\boldsymbol{y})}\tilde{V}\_{\boldsymbol{q}}$. Les deux intégrales d'espace donnent alors des symboles de Kronecker&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\int\mathrm{d}^3x\;\mathrm{e}^{\mathrm{i}(-\boldsymbol{p}_1+\boldsymbol{p}_4+\boldsymbol{q})\cdot\boldsymbol{x}} = \mathcal{V}\,\delta_{\boldsymbol{p}_1,\,\boldsymbol{p}_4+\boldsymbol{q}}\\
\displaystyle
\int\mathrm{d}^3y\;\mathrm{e}^{\mathrm{i}(-\boldsymbol{p}_2+\boldsymbol{p}_3-\boldsymbol{q})\cdot\boldsymbol{y}} = \mathcal{V}\,\delta_{\boldsymbol{p}_2,\,\boldsymbol{p}_3-\boldsymbol{q}}
$
</p>

Ils mangent deux des quatre sommes d'impulsion et fixent la structure annoncée, au signe de $\boldsymbol{q}$ près (sans importance, puisque $\tilde{V}\_{-\boldsymbol{q}} = \tilde{V}\_{\boldsymbol{q}}$ pour un potentiel réel et pair).

</details>

</div>

<b>Comment le lire&nbsp;?</b> Le terme d'interaction décrit un processus unique&nbsp;: deux fermions arrivent avec les impulsions $\boldsymbol{p}$ et $\boldsymbol{k}$, s'échangent une impulsion $\boldsymbol{q}$, et repartent avec $\boldsymbol{p}-\boldsymbol{q}$ et $\boldsymbol{k}+\boldsymbol{q}$. C'est le **vertex de Coulomb**.

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/vertcoulomb.png" style="box-shadow:none;background:none;">
</div>

Attention à une convention propre à ce chapitre&nbsp;: l'impulsion transférée circule de la gauche vers la droite sur les diagrammes. Le trait ondulé qui porte $\boldsymbol{q}$ n'est pas un photon dynamique&nbsp;: le potentiel est <b>instantané</b>, il ne se propage pas. Ce détail, anodin pour l'instant, imposera plus loin une règle de Feynman supplémentaire.

L'impulsion totale est manifestement conservée à chaque vertex&nbsp;: $(\boldsymbol{p}-\boldsymbol{q})+(\boldsymbol{k}+\boldsymbol{q}) = \boldsymbol{p}+\boldsymbol{k}$.

### Le vide qui n'est pas vide

On appelle $|0\rangle$ l'état fondamental de $\hat{H}\_0$, d'énergie $E\_0$, et $|\Omega\rangle$ celui de l'hamiltonien complet, d'énergie $E$. Toute la stratégie consiste à traiter $\hat{V}$ en perturbation autour de $|0\rangle$.

<div id="def">

En matière condensée, $|0\rangle$ ne veut <b>pas</b> dire «&nbsp;pas de particules&nbsp;». On étudie des systèmes de densité finie à température nulle&nbsp;: l'état fondamental non interagissant d'un métal est une **mer de Fermi**, des électrons empilés en énergie jusqu'au **niveau de Fermi** $p\_{\mathrm{F}}$, deux par état d'impulsion à cause du spin&nbsp;:

<p style="text-align:center;">
$\displaystyle
|0\rangle = \prod_{|\boldsymbol{p}| < p_{\mathrm{F}}} \hat{a}^\dagger_{\boldsymbol{p}\uparrow}\hat{a}^\dagger_{\boldsymbol{p}\downarrow}\,|\text{boîte vide}\rangle
$
</p>

</div>

Cette remarque n'est pas cosmétique. Beaucoup de résultats de ce chapitre, à commencer par le fait que certains diagrammes ne s'annulent pas, tiennent entièrement au fait que le vide de référence est <b>peuplé</b>.

Le problème est maintenant limpide et désespérant&nbsp;: $\hat{V}$ contient quatre opérateurs, donc il ne peut pas être diagonalisé par un simple changement de base d'impulsion. Il faut approximer. Plutôt que de dégainer tout de suite les propagateurs et les intégrales de chemin, on va commencer par une approximation rustique mais éclairante.

<br>

## La théorie de champ moyen

### L'idée

La théorie de **champ moyen** est un réflexe qui traverse toute la physique&nbsp;: on prend un système de $N$ particules et on demande comment <b>une</b> particule réagit au comportement <b>moyen</b> de toutes les autres. Chaque électron cesse de voir $N-1$ partenaires individuels et ne voit plus qu'un potentiel effectif, celui du nuage moyen.

Dans le langage des opérateurs, cela se traduit ainsi&nbsp;: on remplace des <b>paires d'opérateurs par leur valeur moyenne dans l'état fondamental</b>, $\langle 0|\hat{O}|0\rangle$, qu'on abrégera $\langle\hat{O}\rangle$.

Pour l'énergie de l'état fondamental, la démarche n'a d'ailleurs rien de nouveau&nbsp;: le décalage $\Delta E$ au premier ordre de la théorie des perturbations est exactement la valeur moyenne de la perturbation dans l'état non perturbé,

<p style="text-align:center;">
$\displaystyle
\Delta E = \langle 0|\hat{V}|0\rangle\quad$
soit
$\displaystyle
\quad \frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}}\tilde{V}_{\boldsymbol{q}}\,\langle 0|\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\hat{a}_{\boldsymbol{p}}|0\rangle
$
</p>

La nouveauté est dans l'étape suivante&nbsp;: réduire cette moyenne de quatre opérateurs à des produits de moyennes de <b>paires</b>. C'est précisément le métier du théorème de Wick.

### Le théorème de Wick à l'œuvre

<div id="def">

Le **théorème de Wick** exprime un produit d'opérateurs comme la somme du produit normalement ordonné et de tous les termes obtenus en <b>contractant</b> une, deux, ... paires d'opérateurs, les opérateurs non contractés restant sous l'ordre normal $N[\ldots]$.

Deux conséquences immédiates pour nous&nbsp;: la moyenne dans le vide d'un produit normalement ordonné est nulle, donc seuls les termes <b>complètement contractés</b> survivent dans $\langle 0|\hat{V}|0\rangle$&nbsp;; et comme on manipule des fermions, chaque transposition nécessaire pour rapprocher deux opérateurs à contracter coûte un signe $-1$.

</div>

Appliqué à notre chaîne de quatre opérateurs, le théorème produit dix termes&nbsp;: un terme sans contraction, six termes à une contraction, trois termes complètement contractés.

<div style="position:relative;margin-left:auto;margin-right:auto;margin-top:-2em;margin-bottom:-1em;width:700px;max-width:100%;">
<img src="/wick18.svg" style="box-shadow:none;background:none;">
</div>

Comme tout ce qui se trouve à l'intérieur des symboles $N[\ldots]$ est déjà écrit dans l'ordre normal, on peut d'ailleurs laisser tomber ces symboles.

<div id="preuve">

<details>
<summary>D'où viennent les trois signes moins&nbsp;?</summary>

Les six contractions possibles se répartissent selon la géométrie des liens. Numérotons les opérateurs de $1$ à $4$ dans l'ordre où ils apparaissent&nbsp;:

<ul>
<li>les paires <b>adjacentes</b> $(1,2)$ et $(3,4)$ ne demandent aucun déplacement&nbsp;: signe $+$&nbsp;;</li>
<li>la paire <b>emboîtante</b> $(1,4)$, avec $(2,3)$ à l'intérieur, demande un nombre pair de transpositions&nbsp;: signe $+$&nbsp;;</li>
<li>les paires <b>croisées</b> $(1,3)$ et $(2,4)$ demandent un nombre impair de transpositions&nbsp;: signe $-$.</li>
</ul>

Le terme complètement contracté croisé, qui combine $(1,3)$ et $(2,4)$, hérite du même signe moins. C'est lui qui deviendra le terme d'échange, et ce signe moins est, en dernière analyse, le principe de Pauli déguisé.

</details>

</div>

Les termes qui conservent des opérateurs non contractés décrivent des <b>excitations</b>&nbsp;: ils feront naître, plus loin, la dispersion des quasiparticules. Pour l'énergie de l'état fondamental, on ne garde que les trois termes complètement contractés&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle\hat{V}\rangle = \frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}}\tilde{V}_{\boldsymbol{q}}\Big[\underbrace{\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\rangle\langle\hat{a}_{\boldsymbol{k}}\hat{a}_{\boldsymbol{p}}\rangle}_{\textstyle C_0} + \underbrace{\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle}_{\textstyle D_0} - \underbrace{\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle}_{\textstyle F_0}\Big]
$
</p>

$C\_0$ est le **terme de Cooper**, $D\_0$ le **terme direct de Hartree**, $F\_0$ le **terme d'échange de Fock**.

</div>

<br>

Le terme de Cooper se règle vite&nbsp;: il contient $\langle 0|\hat{a}^\dagger\_n\hat{a}^\dagger\_m|0\rangle$, la moyenne d'un opérateur qui <b>change le nombre de particules de deux unités</b>. Entre deux fois le même état, cela donne zéro. Dans des circonstances normales, $C\_0$ ne contribue donc pas.

{{%notice note "Aparté&nbsp;: le terme qu'on a tort de jeter"%}}
«&nbsp;Dans des circonstances normales&nbsp;»&nbsp;: la formule est prudente à dessein. Il existe un état de la matière où $\langle\hat{a}^\dagger\hat{a}^\dagger\rangle \neq 0$, parce que l'état fondamental n'a plus un nombre de particules bien défini et devient une superposition cohérente de paires. C'est l'état supraconducteur, et $C\_0$ y devient la vedette. Le jeter ici est une décision, pas une évidence.
{{%/notice%}}

### Le terme de Hartree

Restent $D\_0$ et $F\_0$. Commençons par le direct&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D_0 = \frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}}\tilde{V}_{\boldsymbol{q}}\,\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle
$
</p>

Une moyenne $\langle 0|\hat{a}^\dagger\_{\boldsymbol{r}}\hat{a}\_{\boldsymbol{s}}|0\rangle$ est nulle sauf si $\boldsymbol{r} = \boldsymbol{s}$&nbsp;: sinon, l'opérateur déplace une particule d'un état vers un autre et produit un état orthogonal à $|0\rangle$. Les deux facteurs imposent donc $\boldsymbol{q} = \boldsymbol{0}$, et les moyennes se réduisent à des <b>opérateurs nombre</b>&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
D_0 = \frac{1}{2}\tilde{V}_{\boldsymbol{q}=0}\left(\sum_{\boldsymbol{p}}\langle 0|\hat{N}_{\boldsymbol{p}}|0\rangle\right)^{2} = \frac{1}{2}\tilde{V}_{\boldsymbol{q}=0}\,N^2
$
</p>

</div>

<br>

La lecture physique est directe. Les $\tilde{V}\_{\boldsymbol{q}}$ sont les composantes de Fourier du potentiel réel&nbsp;; une onde de vecteur $\boldsymbol{q} = \boldsymbol{0}$ est une constante, de longueur d'onde infinie. Le terme de Hartree évalue donc l'énergie due à la <b>partie constante</b> du potentiel, c'est-à-dire l'énergie électrostatique moyenne du nuage électronique pris comme une distribution de charge uniforme. C'est exactement ce qu'aurait deviné un physicien classique avant tout calcul quantique.

<b>Traduction diagrammatique.</b> Le traitement de champ moyen a une lecture graphique très parlante&nbsp;: on part du diagramme d'interaction, et on <b>referme entre elles les pattes des opérateurs qu'on moyenne</b>. Chaque moyenne $\langle\hat{a}^\dagger\hat{a}\rangle$ recolle une patte entrante sur une patte sortante et forme une boucle.

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/diaghartree.png" style="box-shadow:none;background:none;">
</div>

Le terme de Hartree devient ainsi le **têtard à deux têtes**&nbsp;: chaque tête est une boucle refermée sur elle-même, reliée à l'autre par le trait d'interaction qui porte $\boldsymbol{q} = \boldsymbol{0}$. On peut vérifier que ce mode d'obtention des diagrammes est équivalent aux méthodes usuelles par matrice $S$ ou intégrale de chemin.

Et voici le point qui distingue radicalement la matière condensée du vide&nbsp;: dans une théorie où l'état fondamental ne contient <b>aucune</b> particule, la tête du têtard, qui vaut $\langle 0|\hat{a}^\dagger\_{\boldsymbol{p}}\hat{a}\_{\boldsymbol{p}}|0\rangle$, s'annule et le diagramme disparaît. Dans un métal ou dans la matière nucléaire, la mer de Fermi est peuplée, et le têtard survit.

<div id="preuve">

<details>
<summary>Le terme de Hartree en représentation position&nbsp;:</summary>

Repassons en espace réel pour vérifier l'interprétation classique. Avec $\hat{a}\_{\boldsymbol{p}} = \frac{1}{\sqrt{\mathcal{V}}}\int\mathrm{d}^3x\\,\hat{\psi}(\boldsymbol{x})\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}$, on écrit d'abord

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle = \frac{1}{\mathcal{V}}\int\mathrm{d}^3x\,\mathrm{d}^3x'\;\langle\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{x}')\rangle\,\mathrm{e}^{\mathrm{i}(\boldsymbol{p}-\boldsymbol{q})\cdot\boldsymbol{x}}\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}'}
$
</p>

En reportant dans $D\_0$, les sommes sur $\boldsymbol{p}$ et sur $\boldsymbol{k}$ produisent $\mathcal{V}\delta^{(3)}(\boldsymbol{x}-\boldsymbol{x}')$ et $\mathcal{V}\delta^{(3)}(\boldsymbol{y}-\boldsymbol{y}')$, qui dévorent deux des quatre intégrales d'espace. Il reste

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D_0 = \frac{1}{2}\sum_{\boldsymbol{q}}\int\mathrm{d}^3x\,\mathrm{d}^3y\;\tilde{V}_{\boldsymbol{q}}\,\langle\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{x})\rangle\langle\hat{\psi}^\dagger(\boldsymbol{y})\hat{\psi}(\boldsymbol{y})\rangle\,\mathrm{e}^{-\mathrm{i}\boldsymbol{q}\cdot(\boldsymbol{x}-\boldsymbol{y})}
$
</p>

La somme sur $\boldsymbol{q}$ est alors une transformée de Fourier inverse, qui reconstitue le potentiel en espace réel&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D_0 = \frac{1}{2}\int\mathrm{d}^3x\,\mathrm{d}^3y\;V(\boldsymbol{x}-\boldsymbol{y})\,\langle\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{x})\rangle\langle\hat{\psi}^\dagger(\boldsymbol{y})\hat{\psi}(\boldsymbol{y})\rangle
$
</p>

C'est mot pour mot ce qu'on aurait écrit classiquement pour l'énergie d'interaction de deux distributions de charge $\rho(\boldsymbol{x})$ et $\rho(\boldsymbol{y})$ via le potentiel $V(\boldsymbol{x}-\boldsymbol{y})$.

</details>

</div>

Un dernier mot sur les densités qui apparaissent ici. En décompressant la notation,

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{x})\rangle = -\lim_{\substack{t'\to 0^-\\ \boldsymbol{x}'\to\boldsymbol{x}}}\langle 0|T\hat{\psi}(t',\boldsymbol{x}')\hat{\psi}^\dagger(0,\boldsymbol{x})|0\rangle
$
</p>

on reconnaît un <b>propagateur</b> pris en deux points confondus. Les lignes internes qui forment les deux têtes du têtard sont donc bien des propagateurs, comme il sied à un diagramme de Feynman respectable. Cette remarque, anodine ici, sera le point d'appui de la reformulation systématique de la fin du chapitre.

### Le terme de Fock

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/diagfock.png" style="box-shadow:none;background:none;">
</div>

Passons à l'échange, représenté par le diagramme en **huître**&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_0 = -\frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}}\tilde{V}_{\boldsymbol{q}}\,\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle
$
</p>

Même règle qu'avant, mais elle ne mord plus au même endroit&nbsp;: pour que les moyennes soient non nulles il faut cette fois $\boldsymbol{p}-\boldsymbol{q} = \boldsymbol{k}$, c'est-à-dire $\boldsymbol{q} = \boldsymbol{p}-\boldsymbol{k}$. L'impulsion transférée n'est plus figée à zéro, elle est asservie aux deux impulsions des particules&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_0 = -\frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}}\,\langle 0|\hat{N}_{\boldsymbol{k}}|0\rangle\langle 0|\hat{N}_{\boldsymbol{p}}|0\rangle
$
</p>

</div>

<br>

Le résultat reste <b>diagonal</b>, au sens où il ne contient que des opérateurs nombre&nbsp;: c'est ce qui le rend calculable. Mais il est nettement moins docile que le terme de Hartree, puisque le potentiel y est évalué à toutes les valeurs de $\boldsymbol{p}-\boldsymbol{k}$ et pas seulement en zéro.

En représentation position, la structure des sommes mélange cette fois les $\boldsymbol{x}$ et les $\boldsymbol{y}$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_0 = -\frac{1}{2}\int\mathrm{d}^3x\,\mathrm{d}^3y\;V(\boldsymbol{x}-\boldsymbol{y})\,\langle\hat{\psi}^\dagger(\boldsymbol{x})\hat{\psi}(\boldsymbol{y})\rangle\langle\hat{\psi}^\dagger(\boldsymbol{y})\hat{\psi}(\boldsymbol{x})\rangle
$
</p>

Comparons avec le terme de Hartree&nbsp;: là-bas, chaque moyenne ramenait le champ au <b>même</b> point, et l'on retrouvait deux densités de charge. Ici, chaque moyenne relie <b>deux points différents</b>&nbsp;: ce n'est plus une densité, c'est une amplitude de propagation entre $\boldsymbol{x}$ et $\boldsymbol{y}$. Aucune image classique ne correspond&nbsp;; ce terme est un pur effet d'indiscernabilité, avec son signe moins hérité de l'antisymétrisation.

Il y a beaucoup de physique cachée dans ce terme d'échange, à commencer par l'ordre magnétique dans les métaux, sur lequel on reviendra en fin de chapitre.

{{%notice note "Deux noms sur les termes"%}}
Douglas Hartree (1897–1956) et Vladimir Fock (1898–1974) ont introduit ces approximations dans le contexte du calcul des atomes à plusieurs électrons, bien avant qu'on sache les dessiner sous forme de diagrammes. Le vocabulaire du chapitre est donc celui de la chimie quantique des années 1930, relu en langage de théorie des champs des années 1950.
{{%/notice%}}

<br>

## L'énergie Hartree-Fock d'un métal

On dispose maintenant d'une recette pour l'énergie potentielle. Ajoutons-y l'énergie cinétique, et on obtiendra un vrai nombre pour un vrai métal&nbsp;: c'est l'**énergie Hartree-Fock** de l'état fondamental.

### L'énergie cinétique du gaz d'électrons

Repartons du gaz sans interaction&nbsp;: des électrons dans une boîte, un état de spin haut et un état de spin bas par état d'impulsion, empilés en énergie jusqu'au niveau de Fermi. Comme les états sont extraordinairement resserrés, on remplace les sommes discrètes par des intégrales, $\sum\_{|\boldsymbol{p}|<p\_{\mathrm{F}}} \to \mathcal{V}\int\_{|\boldsymbol{p}|<p\_{\mathrm{F}}}\frac{\mathrm{d}^3p}{(2\pi)^3}$.

<div id="preuve">

Le nombre d'états d'impulsion occupés vaut

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\sum_{|\boldsymbol{p}| < p_{\mathrm{F}}} \to \mathcal{V}\int_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3p}{(2\pi)^3} = \frac{\mathcal{V}}{(2\pi)^3}\int_0^{p_{\mathrm{F}}}(4\pi)\,|\boldsymbol{p}|^2\,\mathrm{d}|\boldsymbol{p}| = \frac{\mathcal{V}p_{\mathrm{F}}^3}{6\pi^2}
$
</p>

Avec deux états de spin par niveau, le nombre total d'états électroniques est $N = \mathcal{V}p\_{\mathrm{F}}^3/3\pi^2$. La densité $n = N/\mathcal{V}$ fixe donc l'impulsion de Fermi, $p\_{\mathrm{F}} = (3\pi^2 n)^{1/3}$, et l'énergie de Fermi vaut $E\_{\mathrm{F}} = p\_{\mathrm{F}}^2/(2m)$.

L'énergie cinétique totale s'obtient de la même façon, en intégrant $\boldsymbol{p}^2/2m$ sur la mer de Fermi&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
W_0 = 2\sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}E^{(0)}_{\boldsymbol{p}} = 2\mathcal{V}\int_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3p}{(2\pi)^3}\,\frac{\boldsymbol{p}^2}{2m} = \frac{\mathcal{V}p_{\mathrm{F}}^5}{10\pi^2 m} = \frac{3}{5}NE_{\mathrm{F}}
$
</p>

L'énergie cinétique par électron est donc $W\_0/N = \frac{3}{5}E\_{\mathrm{F}}$&nbsp;: la moyenne sur une mer de Fermi remplie n'est pas $E\_{\mathrm{F}}$, mais les trois cinquièmes, parce que la densité d'états croît en $|\boldsymbol{p}|^2$ et que les niveaux profonds sont nombreux.

</div>

Il reste à choisir des unités humaines. Les théoriciens aiment le **rydberg**, $\mathrm{Ry} = \hbar^2/(2m\_{\mathrm{e}}a\_0^2)$ où $a\_0$ est le rayon de Bohr, et un paramètre de densité sans dimension.

<div id="def">

On écrit le volume disponible par électron comme $1/n = \frac{4}{3}\pi r^3$, ce qui définit une <b>distance moyenne entre électrons</b> $r$, et l'on pose

<p style="text-align:center;">
$\displaystyle
r_{\mathrm{s}} = \frac{r}{a_0}
$
</p>

Un petit $r\_{\mathrm{s}}$ signifie un métal <b>dense</b>, un grand $r\_{\mathrm{s}}$ un métal dilué. Les métaux réels vivent typiquement entre $r\_{\mathrm{s}} \simeq 2$ et $r\_{\mathrm{s}} \simeq 6$.

</div>

<br>

<div id="preuve">

<details>
<summary>L'énergie cinétique en unités de $r_{\mathrm{s}}$&nbsp;:</summary>

De $1/n = \frac{4}{3}\pi r^3$ on tire $3\pi^2 n = 9\pi/(4r^3)$, donc $p\_{\mathrm{F}} = (9\pi/4)^{1/3}/r$ et

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
E_{\mathrm{F}} = \frac{\hbar^2 p_{\mathrm{F}}^2}{2m} = \frac{\hbar^2}{2m r^2}\left(\frac{9\pi}{4}\right)^{2/3} = \left(\frac{9\pi}{4}\right)^{2/3}\frac{1\,\mathrm{Ry}}{r_{\mathrm{s}}^2}
$
</p>

où la dernière égalité utilise $\hbar^2/(2mr^2) = (a\_0^2/r^2)\\,\mathrm{Ry}$. D'où

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{W_0}{N} = \frac{3}{5}E_{\mathrm{F}} = \frac{3}{5}\left(\frac{9\pi}{4}\right)^{2/3}\frac{1\,\mathrm{Ry}}{r_{\mathrm{s}}^2} \simeq \frac{2{,}21}{r_{\mathrm{s}}^2}\ \frac{\text{rydbergs}}{\text{électron}}
$
</p>

</details>

</div>

### Le jellium, ou comment se débarrasser du terme de Hartree

Pour l'énergie potentielle, on devrait ajouter $D\_0$ et $F\_0$. Une simplification radicale est heureusement possible.

Un métal réel contient des ions positifs et des électrons mobiles, mais ce niveau de détail n'est pas toujours nécessaire. On adopte donc le modèle du **jellium**&nbsp;: les électrons sont plongés dans une boîte remplie d'une gelée positive <b>homogène</b>, qui assure la neutralité électrique globale.

<div id="theo">

Dans le jellium, la charge positive uniforme du fond compense <b>exactement</b> la contribution de Hartree, qui provenait justement de la distribution électronique uniforme. Il ne reste que le terme de Fock à évaluer.

</div>

<br>

C'est un soulagement mathématique autant que physique&nbsp;: $\tilde{V}\_{\boldsymbol{q}=0}$ diverge pour un potentiel coulombien, et cette divergence était le symptôme d'un système chargé. Un métal ne l'est pas.

{{%notice note "Aparté&nbsp;: qui a baptisé la gelée&nbsp;?"%}}
Le nom de <i>jellium</i> est dû à John Bardeen. C'est l'un de ces modèles caricaturaux dont la caricature est précisément la vertu&nbsp;: en gommant les ions, il isole ce qui, dans un métal, relève des électrons seuls.
{{%/notice%}}

### La self-énergie de Fock

Il reste donc à calculer, avec $\langle\hat{N}\_{\boldsymbol{p}}\rangle$ valant $1$ sous la surface de Fermi et $0$ au-dessus&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\langle\hat{N}_{\boldsymbol{p}}\rangle = \begin{cases} 1 & |\boldsymbol{p}| \leq p_{\mathrm{F}} \\ 0 & |\boldsymbol{p}| > p_{\mathrm{F}}\end{cases}
$
</p>

et la transformée de Fourier du potentiel coulombien. Cette dernière demande une petite ruse.

<div id="preuve">

<details>
<summary>La transformée de Fourier du potentiel de Coulomb&nbsp;:</summary>

L'énergie électrostatique entre deux électrons est $V(\boldsymbol{x}-\boldsymbol{y}) = \frac{e^2}{4\pi\epsilon\_0|\boldsymbol{x}-\boldsymbol{y}|}$ (on repasse ici en unités SI, usuelles dans la littérature du problème à $N$ corps). Sa transformée de Fourier s'évalue le plus commodément en passant par un potentiel <b>écranté</b>, $V(r) = \frac{e^2}{4\pi\epsilon\_0}\frac{\mathrm{e}^{-\lambda r}}{r}$, dont l'intégrale converge sans discussion, puis en envoyant $\lambda\to 0$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{V}_{\boldsymbol{q}} = \lim_{\lambda\to 0}\frac{1}{\mathcal{V}}\frac{e^2}{4\pi\epsilon_0}\int\mathrm{d}^3r\;\frac{\mathrm{e}^{-\mathrm{i}\boldsymbol{q}\cdot\boldsymbol{r}}\mathrm{e}^{-\lambda r}}{r} = \lim_{\lambda\to 0}\frac{e^2}{\mathcal{V}\epsilon_0(\boldsymbol{q}^2+\lambda^2)} = \frac{e^2}{\mathcal{V}\epsilon_0 \boldsymbol{q}^2}
$
</p>

Notons dès maintenant l'ironie de la manœuvre&nbsp;: on introduit un écrantage fictif pour régulariser un calcul, et l'on découvrira à la fin du chapitre que le métal produit spontanément un écrantage bien réel, de la même forme.

</details>

</div>

Organisons maintenant le terme de Fock de la façon qui servira pour la suite, en incluant un facteur $2$ pour le spin&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_0 = 2\sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{1}{2}\left[-\sum_{|\boldsymbol{k}| < p_{\mathrm{F}}}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}}\right] = 2\sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{1}{2}\left[-\sum_{|\boldsymbol{k}| < p_{\mathrm{F}}}\frac{e^2}{\mathcal{V}\epsilon_0}\frac{1}{|\boldsymbol{p}-\boldsymbol{k}|^2}\right]
$
</p>

Le contenu du crochet ne dépend que de $\boldsymbol{p}$&nbsp;: c'est une quantité attachée à <b>une</b> particule d'impulsion $\boldsymbol{p}$, la correction que le reste du gaz apporte à son énergie.

<div id="def">

Le crochet correspond à la partie huître du diagramme&nbsp;; on l'appelle la **self-énergie de Fock** $\tilde{\Sigma}^{(\mathrm{F})}\_{\boldsymbol{p}}$.

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/tqc18selffock.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

<details>
<summary>Évaluation de la self-énergie de Fock&nbsp;:</summary>

Il faut calculer $\int\_{|\boldsymbol{k}|<p\_{\mathrm{F}}}\frac{\mathrm{d}^3k}{|\boldsymbol{p}-\boldsymbol{k}|^2}$. En coordonnées sphériques d'axe $\boldsymbol{p}$, l'intégrale angulaire se fait par le changement de variable $u=\cos\theta$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\int_0^\pi\frac{\sin\theta\,\mathrm{d}\theta}{k^2+p^2-2kp\cos\theta} = \int_{-1}^{1}\frac{\mathrm{d}u}{k^2+p^2-2kpu} = \frac{1}{kp}\ln\left|\frac{k+p}{k-p}\right|
$
</p>

d'où

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\int_{|\boldsymbol{k}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3k}{|\boldsymbol{p}-\boldsymbol{k}|^2} = \int_0^{p_{\mathrm{F}}}2\pi k^2\,\mathrm{d}k\;\frac{1}{kp}\ln\left|\frac{k+p}{k-p}\right| = \frac{2\pi}{p}\int_0^{p_{\mathrm{F}}}k\,\mathrm{d}k\,\ln\left|\frac{k+p}{k-p}\right| = 2\pi p_{\mathrm{F}}\,F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right)
$
</p>

En rétablissant les préfacteurs&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{\Sigma}^{(\mathrm{F})}_{\boldsymbol{p}} = -\frac{e^2}{\epsilon_0}\int_{|\boldsymbol{k}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3k}{(2\pi)^3}\frac{1}{|\boldsymbol{p}-\boldsymbol{k}|^2} = -\frac{p_{\mathrm{F}}}{\pi}\left(\frac{e^2}{4\pi\epsilon_0}\right)F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right)
$
</p>

</details>

</div>

La fonction sans dimension qui a surgi de l'intégrale angulaire va nous poursuivre jusqu'à la fin du chapitre.

<div id="def">

<p style="text-align:center;">
$\displaystyle
F(x) = 1 + \frac{1-x^2}{2x}\ln\left|\frac{1+x}{1-x}\right|
$
</p>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/tqc18fonctionf.png" style="box-shadow:none;background:none;">
</div>

Deux propriétés à retenir dès maintenant. D'abord $F(0) = 2$&nbsp;: le développement $\ln\frac{1+x}{1-x}\simeq 2x$ compense exactement le $1/2x$. Ensuite, et c'est le point crucial, $F$ a une <b>pente infinie en $x=1$</b>, c'est-à-dire précisément à l'impulsion de Fermi. La fonction elle-même reste continue et finie, mais sa dérivée explose&nbsp;: le logarithme diverge quand $x\to 1$. Cette singularité est la signature mathématique de la netteté de la surface de Fermi, et elle nous causera bientôt de sérieux ennuis.

### Le résultat, et ce qui lui manque

Il ne reste plus qu'à sommer la self-énergie sur la mer de Fermi&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F_0 = 2\sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{1}{2}\tilde{\Sigma}^{(\mathrm{F})}_{\boldsymbol{p}} = -\mathcal{V}\frac{p_{\mathrm{F}}}{\pi}\left(\frac{e^2}{4\pi\epsilon_0}\right)\int_{|\boldsymbol{p}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3p}{(2\pi)^3}F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right) = -\frac{3Np_{\mathrm{F}}}{2\pi}\left(\frac{e^2}{4\pi\epsilon_0}\right)\int_0^1\mathrm{d}x\;x^2F(x)
$
</p>

L'intégrale $\int\_0^1 x^2F(x)\\,\mathrm{d}x$ vaut $1/2$, et l'énergie potentielle par électron devient

<p style="text-align:center;">
$\displaystyle
\frac{F_0}{N} = -\frac{3p_{\mathrm{F}}}{4\pi}\frac{e^2}{4\pi\epsilon_0} = -\frac{0{,}916}{r_{\mathrm{s}}}\ \frac{\text{rydbergs}}{\text{électron}}
$
</p>

En rassemblant les deux morceaux&nbsp;:

<div id="theo">

L'**énergie Hartree-Fock par électron** d'un métal de jellium&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{E_{\mathrm{HF}}}{N} = \left(\frac{2{,}21}{r_{\mathrm{s}}^2} - \frac{0{,}916}{r_{\mathrm{s}}}\right)\ \frac{\text{rydbergs}}{\text{électron}}
$
</p>

</div>

<br>

Deux termes, deux physiques opposées&nbsp;: l'énergie cinétique, positive, en $1/r\_{\mathrm{s}}^2$, qui pousse à diluer&nbsp;; l'échange, négatif, en $1/r\_{\mathrm{s}}$, qui pousse à comprimer. Leur compétition fixe une densité d'équilibre, et l'on tient là, en deux nombres, l'essentiel de la cohésion métallique.

Mais l'allure même de cette expression est un aveu&nbsp;: elle ressemble au <b>début d'une série</b> en puissances de $r\_{\mathrm{s}}$, et l'on s'attend donc à des termes supplémentaires. Ces termes ont reçu un nom, l'**énergie de corrélation**, donné par Eugene Wigner et Frederick Seitz. Les deux suivants ont été calculés par Murray Gell-Mann et Keith Brueckner en 1957&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{E}{N} = \left(\frac{2{,}21}{r_{\mathrm{s}}^2} - \frac{0{,}916}{r_{\mathrm{s}}} - 0{,}094 + 0{,}0622\ln r_{\mathrm{s}}\right)\ \frac{\text{rydbergs}}{\text{électron}}
$
</p>

{{%notice note "Stupidity energy"%}}
«&nbsp;Énergie de corrélation&nbsp;» est une appellation un peu flatteuse pour ce qui est, après tout, la mesure de notre ignorance&nbsp;: tout ce que l'approximation de champ moyen a raté. Feynman suggérait de l'appeler plutôt l'<b>énergie de stupidité</b>.
{{%/notice%}}

{{%notice note %}}
Eugene Wigner (1902–1995) a laissé son empreinte sur des pans entiers de la physique et des mathématiques&nbsp;; sa sœur avait épousé Dirac, lequel la présentait volontiers comme «&nbsp;la sœur de Wigner&nbsp;».<br>
Frederick Seitz (1911–2008) est sans doute le meilleur candidat au titre de père fondateur de la physique du solide.
{{%/notice%}}

<br>

## Les excitations en champ moyen

L'énergie du fondamental est une chose, les <b>excitations</b> en sont une autre, et c'est d'elles que dépendent toutes les propriétés mesurables. Les excitations d'une théorie quantique des champs sont des particules, caractérisées par leur relation de dispersion $E\_{\boldsymbol{p}}$&nbsp;; pour les lire, il faut amener l'hamiltonien sous la forme diagonale $\hat{H} = \sum\_{\boldsymbol{p}}E\_{\boldsymbol{p}}\hat{a}^\dagger\_{\boldsymbol{p}}\hat{a}\_{\boldsymbol{p}}$.

L'objectif est donc de transformer l'interaction à quatre opérateurs en quelque chose qui ressemble à <b>une particule dans un potentiel extérieur</b>, objet décrit par un opérateur du type $\tilde{V}\_{\boldsymbol{q}}\hat{a}^\dagger\_{\boldsymbol{p}+\boldsymbol{q}}\hat{a}\_{\boldsymbol{p}}$. Et l'on veut même aller plus loin&nbsp;: obtenir des électrons entrants et sortants <b>dans le même état d'impulsion</b>, soit $\sum\_{\boldsymbol{p}}\tilde{V}^{\mathrm{MF}}\_{\boldsymbol{p}}\hat{a}^\dagger\_{\boldsymbol{p}}\hat{a}\_{\boldsymbol{p}}$, où $\tilde{V}^{\mathrm{MF}}\_{\boldsymbol{p}}$ serait le potentiel moyen que traverse la particule.

C'est ici que le nom de la méthode prend enfin tout son sens&nbsp;: le champ extérieur est celui que créent toutes les autres particules.

La recette est fournie par les termes de l'expansion de Wick qu'on avait laissés de côté&nbsp;: ceux qui portent <b>une</b> contraction et gardent deux opérateurs libres. La contraction fournira le potentiel effectif, les deux opérateurs restants décriront la particule qui le traverse.

<div id="preuve">

En reprenant l'expansion de Wick et en collectant les termes à une contraction, on obtient trois familles&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\begin{aligned}
D &= \langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\,\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}} + \langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle\,\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\\
F &= -\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\rangle\,\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}} - \langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\,\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\\
C &= \langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\rangle\,\hat{a}_{\boldsymbol{p}}\hat{a}_{\boldsymbol{k}} + \langle\hat{a}_{\boldsymbol{p}}\hat{a}_{\boldsymbol{k}}\rangle\,\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}
\end{aligned}
$
</p>

On continue d'ignorer les termes de Cooper. Les deux termes de la somme $D$ sont identiques après réindexation des sommes, et de même pour $F$&nbsp;; il reste donc, avec un facteur $2$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
D = 2\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\,\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}\\
\displaystyle
F = -2\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\,\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}
$
</p>

Ce facteur $2$ annule le $\frac{1}{2}$ de l'hamiltonien.

</div>

L'hamiltonien de champ moyen prend donc la forme

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H} = \sum_{\boldsymbol{p}}\frac{\boldsymbol{p}^2}{2m}\hat{a}^\dagger_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}} + \sum_{\boldsymbol{q}\boldsymbol{p}\boldsymbol{k}}\tilde{V}_{\boldsymbol{q}}\langle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{p}} - \sum_{\boldsymbol{q}\boldsymbol{p}\boldsymbol{k}}\tilde{V}_{\boldsymbol{q}}\langle\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}_{\boldsymbol{k}}\rangle\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}}\hat{a}_{\boldsymbol{p}}
$
</p>

Les deux termes se traitent exactement comme les $D\_0$ et $F\_0$ précédents, avec les mêmes contraintes sur $\boldsymbol{q}$.

<b>Terme direct.</b> La partie moyennée impose $\boldsymbol{q}=\boldsymbol{0}$ et laisse un opérateur nombre&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V}_{\text{direct}} = \sum_{\boldsymbol{p}\boldsymbol{k}}\tilde{V}_{\boldsymbol{q}=0}\langle\hat{a}^\dagger_{\boldsymbol{k}}\hat{a}_{\boldsymbol{k}}\rangle\hat{a}^\dagger_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}} = \sum_{\boldsymbol{p}}\left[\tilde{V}_{\boldsymbol{q}=0}\sum_{\boldsymbol{k}}\langle\hat{a}^\dagger_{\boldsymbol{k}}\hat{a}_{\boldsymbol{k}}\rangle\right]\hat{a}^\dagger_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}}
$
</p>

C'est exactement la forme visée&nbsp;: chaque particule navigue dans un potentiel effectif $\tilde{V}^{\mathrm{MF}}\_{\boldsymbol{p}} = \tilde{V}\_{\boldsymbol{q}=0}\sum\_{\boldsymbol{k}}\langle\hat{N}\_{\boldsymbol{k}}\rangle$.

<b>Terme d'échange.</b> La moyenne $\langle\hat{a}^\dagger\_{\boldsymbol{p}-\boldsymbol{q}}\hat{a}\_{\boldsymbol{k}}\rangle$ impose cette fois $\boldsymbol{p} = \boldsymbol{k}+\boldsymbol{q}$, et l'on obtient

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V}_{\text{échange}} = -\sum_{\boldsymbol{p}}\left[\sum_{\boldsymbol{k}}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}}\langle\hat{a}^\dagger_{\boldsymbol{k}}\hat{a}_{\boldsymbol{k}}\rangle\right]\hat{a}^\dagger_{\boldsymbol{p}}\hat{a}_{\boldsymbol{p}}
$
</p>

Diagrammatiquement, ces deux potentiels effectifs s'obtiennent en refermant deux des quatre pattes du vertex&nbsp;: en recollant deux pattes du même côté on fabrique le <b>têtard</b>, en recollant deux pattes opposées on fabrique l'<b>huître</b>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/tqc18champmoyen.png" style="box-shadow:none;background:none;">
</div>

On remarquera qu'il y a <b>deux façons</b> de former le têtard, ce qui recrée le facteur $2$ obtenu par l'expansion de Wick&nbsp;: le comptage combinatoire des diagrammes et l'algèbre des contractions racontent la même histoire.

<div id="theo">

Ces potentiels effectifs sont exactement les contributions du premier ordre à la **self-énergie** $\tilde{\Sigma}\_{\boldsymbol{p}}$&nbsp;: ce sont des morceaux de diagrammes qu'on peut insérer entre deux pattes externes. L'énergie d'une particule s'écrit donc comme la somme d'un terme cinétique et de self-énergies&nbsp;:

<p style="text-align:center;">
$\displaystyle
E_{\boldsymbol{p}} = \frac{\boldsymbol{p}^2}{2m} + \tilde{\Sigma}^{(\mathrm{D})}_{\boldsymbol{p}} + \tilde{\Sigma}^{(\mathrm{F})}_{\boldsymbol{p}}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{\Sigma}^{(\mathrm{D})}_{\boldsymbol{p}} = \tilde{V}_{\boldsymbol{q}=0}\sum_{\boldsymbol{k}}\langle\hat{N}_{\boldsymbol{k}}\rangle\\
\displaystyle
\tilde{\Sigma}^{(\mathrm{F})}_{\boldsymbol{p}} = -\sum_{\boldsymbol{k}}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}}\langle\hat{N}_{\boldsymbol{k}}\rangle
$
</p>

</div>

<br>

Dans le jellium, la self-énergie de Hartree est encore annulée par le fond positif, et la self-énergie de Fock est celle qu'on a calculée plus haut, ce qui justifie rétrospectivement le nom qu'on lui avait donné. La dispersion des électrons dans l'approximation Hartree-Fock est donc&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
E_{\boldsymbol{p}} = \frac{\boldsymbol{p}^2}{2m} - \frac{p_{\mathrm{F}}}{\pi}\left(\frac{e^2}{4\pi\epsilon_0}\right)F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right)
$
</p>

</div>

<br>

Cette courbe est tracée sur la figure de la fonction $F$ (partie basse)&nbsp;: la parabole libre y est déformée, et la déformation devient brutale au voisinage de $p\_{\mathrm{F}}$, là où la pente de $F$ diverge.

Il faut insister lourdement sur un point&nbsp;: **ce n'est pas ce qu'on mesure dans un vrai métal**. L'approximation Hartree-Fock capture mal la physique, et des corrections d'ordre supérieur sont indispensables. Pour les organiser, il va falloir sortir la machinerie complète&nbsp;: propagateurs et règles de Feynman.

<br>

## Électrons et trous

Avant cela, un aménagement de vocabulaire s'impose. Jusqu'ici, le métal était une boîte d'électrons. Pour des calculs sérieux, il est utile de distinguer <b>deux sortes d'excitations</b>, et la raison en est justement que le vide du métal n'est pas vide&nbsp;: les états sont remplis jusqu'à $p\_{\mathrm{F}}$.

Au-dessus de la surface de Fermi, exciter le système consiste à ajouter un électron. En dessous, cela consiste à en <b>retirer</b> un, c'est-à-dire à créer un <b>trou</b>. Ces deux opérations sont physiquement différentes et méritent des opérateurs différents.

<div id="def">

On définit, à l'aide de la fonction de Heaviside $\theta$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{a}_{\boldsymbol{p}} = \theta(|\boldsymbol{p}|-p_{\mathrm{F}})\,\hat{c}_{\boldsymbol{p}} + \theta(p_{\mathrm{F}}-|\boldsymbol{p}|)\,\hat{b}^\dagger_{\boldsymbol{p}}
\qquad
\hat{a}^\dagger_{\boldsymbol{p}} = \theta(|\boldsymbol{p}|-p_{\mathrm{F}})\,\hat{c}^\dagger_{\boldsymbol{p}} + \theta(p_{\mathrm{F}}-|\boldsymbol{p}|)\,\hat{b}_{\boldsymbol{p}}
$
</p>

avec les anticommutateurs $\\{\hat{c}\_{\boldsymbol{p}},\hat{c}^\dagger\_{\boldsymbol{q}}\\} = \delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$ et $\\{\hat{b}\_{\boldsymbol{p}},\hat{b}^\dagger\_{\boldsymbol{q}}\\} = \delta^{(3)}(\boldsymbol{p}-\boldsymbol{q})$, tous les autres étant nuls.

Les $\hat{c}\_{\boldsymbol{p}}$ décrivent les **électrons**, les $\hat{b}\_{\boldsymbol{p}}$ les **trous**.

</div>

Le sens des fonctions $\theta$ est le suivant&nbsp;: les opérateurs électroniques n'agissent que <b>au-dessus</b> de la surface de Fermi, les opérateurs de trou uniquement <b>en dessous</b>. Détruire un électron sous la mer de Fermi, c'est créer un trou&nbsp;; d'où le $\hat{b}^\dagger$ qui apparaît dans la définition de $\hat{a}$.

Réécrivons l'énergie cinétique dans ce langage&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H}_0 = \sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}E_{\boldsymbol{p}} + \sum_{|\boldsymbol{p}|>p_{\mathrm{F}}}E_{\boldsymbol{p}}\,\hat{c}^\dagger_{\boldsymbol{p}}\hat{c}_{\boldsymbol{p}} - \sum_{|\boldsymbol{p}| < p_{\mathrm{F}}}E_{\boldsymbol{p}}\,\hat{b}^\dagger_{\boldsymbol{p}}\hat{b}_{\boldsymbol{p}}
$
</p>

Trois morceaux qui se lisent séparément&nbsp;: le premier est l'énergie du fondamental, tous les états remplis jusqu'au niveau de Fermi&nbsp;; le deuxième compte les excitations électroniques&nbsp;; le troisième les excitations de trou. Ce dernier vient avec un signe moins, parce que retirer un électron d'un niveau d'énergie $E\_{\boldsymbol{p}}$ diminue l'énergie totale d'autant.

<div id="theo">

Il y a bien un sens dans lequel les trous sont des <b>antiparticules</b>. Mais ils ne s'identifient pas aux positrons&nbsp;: la contribution d'un positron à l'énergie totale est toujours <b>positive</b>, celle d'un trou est négative.

</div>

<br>

Pour calculer, il faut enfin un opérateur de champ mixte électron-trou&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{\psi}(\boldsymbol{x}) = \frac{1}{\sqrt{\mathcal{V}}}\sum_{\boldsymbol{p}}\left[\theta(|\boldsymbol{p}|-p_{\mathrm{F}})\,\hat{c}_{\boldsymbol{p}} + \theta(p_{\mathrm{F}}-|\boldsymbol{p}|)\,\hat{b}^\dagger_{\boldsymbol{p}}\right]\mathrm{e}^{-\mathrm{i}\boldsymbol{p}\cdot\boldsymbol{x}}
$
</p>

<br>

## Propagateurs et règles de Feynman du métal

La procédure de champ moyen était <i>ad hoc</i> et ne mènera pas beaucoup plus loin. On peut heureusement la formaliser avec des propagateurs, ce qui la transforme en <b>série de perturbations</b> en bonne et due forme&nbsp;: on saura alors non seulement retrouver tous les résultats précédents, mais aussi voir clairement ce qu'il faudrait ajouter.

Puisque la théorie est en interaction, il faut désormais penser aux électrons et aux trous comme à des **quasiparticules**.

### Le propagateur libre

<div id="preuve">

L'hamiltonien d'interaction en espace réel, avec la fonction $\delta$ qui impose le caractère instantané du potentiel, s'écrit

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
H_I(x-y) = \frac{1}{2}\hat{\psi}^\dagger(x)\hat{\psi}^\dagger(y)V(x-y)\hat{\psi}(y)\hat{\psi}(x)\,\delta(x^0-y^0)
$
</p>

d'où l'opérateur $\hat{S}$&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{S} = \mathrm{e}^{-\frac{\mathrm{i}}{2}\int\mathrm{d}^4x\,\mathrm{d}^4y\;\hat{\psi}^\dagger(x)\hat{\psi}^\dagger(y)V(x-y)\hat{\psi}(y)\hat{\psi}(x)\delta(x^0-y^0)}
$
</p>

La brique de base du développement est le propagateur de Feynman, qu'on obtient comme fonction de Green de l'équation du mouvement. Ici, l'équation du mouvement des électrons non relativistes est l'équation de Schrödinger&nbsp;; on cherche donc

<p style="text-align:center;">
$\displaystyle
\left(E_{\boldsymbol{p}} - \mathrm{i}\frac{\mathrm{d}}{\mathrm{d}t}\right)\tilde{G}_0(p) = -\mathrm{i}\delta(t)\quad$
avec
$\displaystyle
\quad E_{\boldsymbol{p}} = \frac{\boldsymbol{p}^2}{2m}
$
</p>

En passant en Fourier sur le temps, $-\mathrm{i}\\,\mathrm{d}/\mathrm{d}t \to -E$, d'où $(E\_{\boldsymbol{p}}-E)\tilde{G}\_0 = -\mathrm{i}$ et

<p style="text-align:center;">
$\displaystyle
\tilde{G}_0(p) = \frac{\mathrm{i}}{E - E_{\boldsymbol{p}} + \mathrm{i}\varepsilon}
$
</p>

où le $\mathrm{i}\varepsilon$ écarte le pôle du contour d'intégration.

</div>

Mais dans un métal, il faut tenir compte des trous, et ceux-ci imposent un choix de pôle <b>opposé</b>&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{G}_0(p) = \frac{\mathrm{i}\theta(|\boldsymbol{p}|-p_{\mathrm{F}})}{E-E_{\boldsymbol{p}}+\mathrm{i}\varepsilon} + \frac{\mathrm{i}\theta(p_{\mathrm{F}}-|\boldsymbol{p}|)}{E-E_{\boldsymbol{p}}-\mathrm{i}\varepsilon}
$
</p>

C'est la même structure que pour des particules scalaires, au signe près. Comme pour un $\boldsymbol{p}$ donné un seul des deux termes contribue, on préfère l'écriture compacte&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\tilde{G}\_0(p) = \frac{\mathrm{i}}{E-E_{\boldsymbol{p}}+\mathrm{i}\delta_{\boldsymbol{p}}} \quad$
avec
$\displaystyle
\quad \delta_{\boldsymbol{p}} = \begin{cases}+\varepsilon & |\boldsymbol{p}| > p_{\mathrm{F}}\\ -\varepsilon & |\boldsymbol{p}| < p_{\mathrm{F}}\end{cases}
$
</p>

</div>

Toute la physique de la mer de Fermi est encapsulée dans ce signe&nbsp;: il dit de quel côté de l'axe réel se trouve le pôle, donc dans quel demi-plan il faudra fermer les contours, donc quels états contribuent.

### Les règles de Feynman

<div id="theo">

**Les règles de Feynman pour un métal**

<ul>
<li>un facteur $\tilde{G}_0(p) = \frac{\mathrm{i}}{E-E_{\boldsymbol{p}}+\mathrm{i}\delta_{\boldsymbol{p}}}$ pour chaque ligne interne&nbsp;;</li>
<li>un facteur $-\mathrm{i}\tilde{V}_{\boldsymbol{q}}$ pour chaque vertex d'interaction&nbsp;;</li>
<li>un facteur $-1$ pour chaque boucle fermionique fermée&nbsp;;</li>
<li>conservation de l'énergie-impulsion à chaque vertex&nbsp;;</li>
<li>intégration sur les énergies et impulsions non contraintes, avec la mesure $\mathcal{V}\int\frac{\mathrm{d}^4p}{(2\pi)^4}$&nbsp;;</li>
<li>un facteur de convergence $\mathrm{e}^{\mathrm{i}E0^+}$ pour les lignes qui ne propagent pas.</li>
</ul>

</div>

<br>

La dernière règle est la seule qui soit propre à ce problème, et elle mérite qu'on s'y arrête. Elle est nécessaire pour les deux morceaux de diagrammes suivants&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;">
<img src="/tqc18lignesinstant.png" style="box-shadow:none;background:none;">
</div>

Ces lignes reviennent à leur point de départ&nbsp;: elles semblent se propager <b>instantanément</b>, ce qui est la conséquence directe du caractère instantané de l'interaction. Le facteur $\mathrm{e}^{\mathrm{i}E0^+}$ nous force alors à fermer le contour d'intégration dans un demi-plan bien précis, ce qui garantit un résultat sensé. On va le voir à l'œuvre tout de suite.

### États fondamentaux et excitations

L'énergie de l'état fondamental s'évalue en sommant des diagrammes. L'amplitude $\langle 0|\hat{S}|0\rangle = \mathrm{e}^{\sum(\text{diagrammes de vide connexes})}$ donne en effet

<p style="text-align:center;">
$\displaystyle
-\mathrm{i}\frac{E}{\mathcal{V}} = \frac{\sum\left(\begin{array}{c}\text{diagrammes de vide}\\ \text{connexes}\end{array}\right)}{\mathcal{V}T}
$
</p>

Les diagrammes de vide d'ordre le plus bas sont précisément le double têtard et l'huître&nbsp;: la ruse de champ moyen, qui nous avait donné l'approximation Hartree-Fock, correspond donc exactement aux termes du <b>premier ordre</b> du développement perturbatif de l'énergie de l'état fondamental. Les ordres suivants fournissent les diagrammes plus élaborés ci-dessous.

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/tqc18diagvide.png" style="box-shadow:none;background:none;">
</div>

Quant aux énergies des particules, elles se lisent sur le **propagateur complet**, celui qui inclut toutes les self-énergies. On sait qu'il a la forme

<p style="text-align:center;">
$\displaystyle
\tilde{G}(p) = \frac{\mathrm{i}Z_{\boldsymbol{p}}}{E-E_{\boldsymbol{p}}+\mathrm{i}\Gamma_{\boldsymbol{p}}} + \left(\begin{array}{c}\text{parties}\\ \text{multiparticules}\end{array}\right)
$
</p>

de sorte que la dispersion se lit à la position du pôle. Pour l'obtenir, on somme tous les diagrammes connexes à deux pattes externes, et l'on définit la self-énergie 1PI de la manière habituelle&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm{i}\tilde{\Sigma}(p) = \sum\left(\begin{array}{c}\text{diagrammes 1PI amputés}\\ \text{à deux pattes externes}\end{array}\right)
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:550px;max-width:100%;">
<img src="/tqc181pi.png" style="box-shadow:none;background:none;">
</div>

La sommation à l'infini de ces insertions est l'**équation de Dyson**&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\tilde{G}(p) = \frac{1}{\tilde{G}_0(p)^{-1}+\mathrm{i}\tilde{\Sigma}(p)} = \frac{\mathrm{i}}{E-E_{\boldsymbol{p}}-\tilde{\Sigma}(p)+\mathrm{i}\delta_{\boldsymbol{p}}}
$
</p>

d'où l'énergie des excitations&nbsp;: $E = E\_{\boldsymbol{p}} + \mathrm{Re}\left[\tilde{\Sigma}(E,\boldsymbol{p})\right]$.

</div>

<br>

<div id="preuve">

<details>
<summary>Retrouver Hartree-Fock avec les règles de Feynman&nbsp;:</summary>

Les seuls termes de self-énergie contenant une unique ondulation d'interaction sont le têtard et l'huître. En appliquant les règles&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
-\mathrm{i}\tilde{\Sigma}^{(\text{têtard})}_{\boldsymbol{p}} = (-1)\sum_{\boldsymbol{k}}\int\frac{\mathrm{d}E}{2\pi}\,(-\mathrm{i}\tilde{V}_{\boldsymbol{q}=0})\,\tilde{G}_0(k)\,\mathrm{e}^{\mathrm{i}E0^+}
\qquad
-\mathrm{i}\tilde{\Sigma}^{(\text{huître})}_{\boldsymbol{p}} = \sum_{\boldsymbol{k}}\int\frac{\mathrm{d}E}{2\pi}\,(-\mathrm{i}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}})\,\tilde{G}_0(k)\,\mathrm{e}^{\mathrm{i}E0^+}
$
</p>

Le facteur $(-1)$ n'apparaît que dans le têtard&nbsp;: c'est lui, et lui seul, qui contient une <b>boucle fermionique fermée</b>.

Tout repose alors sur l'intégrale

<p style="text-align:center;">
$\displaystyle
\int\frac{\mathrm{d}E}{2\pi}\,\tilde{G}_0(k)\,\mathrm{e}^{\mathrm{i}E0^+}
$
</p>

dont la structure de pôles est celle décrite plus haut. Fermer le contour dans le demi-plan supérieur capture tous les pôles des états $|\boldsymbol{k}|<p\_{\mathrm{F}}$&nbsp;; le fermer dans le demi-plan inférieur capturerait ceux des états $|\boldsymbol{k}|>p\_{\mathrm{F}}$. Le facteur de convergence choisit pour nous&nbsp;: dans le demi-plan inférieur, où la partie imaginaire de $E$ devient grande et négative, $\mathrm{e}^{\mathrm{i}E0^+}$ diverge&nbsp;; dans le demi-plan supérieur, il s'annule quand le contour devient très grand. On ferme donc par le haut, et l'on récolte les pôles de la mer de Fermi, chacun de résidu $\mathrm{i}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\frac{\mathrm{d}E}{2\pi}\,\tilde{G}_0(k)\,\mathrm{e}^{\mathrm{i}E0^+} = \frac{1}{2\pi}\times(2\pi\mathrm{i})\,\mathrm{i}N_{\boldsymbol{k}} = -N_{\boldsymbol{k}}
$
</p>

où $N\_{\boldsymbol{k}}$ vaut $1$ sous la surface de Fermi et $0$ au-dessus. On obtient alors

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
-\mathrm{i}\tilde{\Sigma}^{(\text{têtard})}_{\boldsymbol{p}} = (-1)\sum_{\boldsymbol{k}}(-\mathrm{i}\tilde{V}_{\boldsymbol{q}=0})(-N_{\boldsymbol{k}})\\
\displaystyle
-\mathrm{i}\tilde{\Sigma}^{(\text{huître})}_{\boldsymbol{p}} = \sum_{\boldsymbol{k}}(-\mathrm{i}\tilde{V}_{\boldsymbol{p}-\boldsymbol{k}})(-N_{\boldsymbol{k}})
$
</p>

soit exactement $\tilde{\Sigma}^{(\mathrm{D})}\_{\boldsymbol{p}} = \tilde{V}\_{\boldsymbol{q}=0}\sum\_{\boldsymbol{k}}N\_{\boldsymbol{k}}$ et $\tilde{\Sigma}^{(\mathrm{F})}\_{\boldsymbol{p}} = -\sum\_{\boldsymbol{k}}\tilde{V}\_{\boldsymbol{p}-\boldsymbol{k}}N\_{\boldsymbol{k}}$, les résultats du champ moyen.

Pour le jellium, le têtard est annulé par le fond positif et il ne reste que l'huître&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{\Sigma}^{(\text{huître})}_{\boldsymbol{p}} = -\sum_{|\boldsymbol{k}| < p_{\mathrm{F}}}\frac{e^2}{\mathcal{V}\epsilon_0}\frac{1}{|\boldsymbol{p}-\boldsymbol{k}|^2} = -\frac{e^2}{\epsilon_0}\int_{|\boldsymbol{k}| < p_{\mathrm{F}}}\frac{\mathrm{d}^3k}{(2\pi)^3}\frac{1}{|\boldsymbol{p}-\boldsymbol{k}|^2} = -\frac{p_{\mathrm{F}}}{\pi}\frac{e^2}{4\pi\epsilon_0}F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right)
$
</p>

</details>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/tqc18contour.png" style="box-shadow:none;background:none;">
</div>

On n'a, pour l'instant, rien appris de neuf&nbsp;: la théorie des propagateurs redonne exactement Hartree-Fock. Sa supériorité est ailleurs&nbsp;: elle nous dit <b>quoi faire</b> de la self-énergie, à savoir renormaliser le propagateur en sommant à l'infini les insertions d'huîtres.

<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;">
<img src="/tqc18sommefock.png" style="box-shadow:none;background:none;">
</div>

### La catastrophe de la masse effective

Pour comprendre pourquoi il faut aller plus loin, calculons la masse effective de la théorie Hartree-Fock.

<div id="def">

Près du niveau de Fermi, on développe l'énergie d'une excitation&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
E_{\boldsymbol{p}} = E_{\mathrm{F}} + \left.\frac{\partial E_{\boldsymbol{p}}}{\partial |\boldsymbol{p}|}\right|_{|\boldsymbol{p}|=p_{\mathrm{F}}}(|\boldsymbol{p}|-p_{\mathrm{F}}) + \ldots
$
</p>

ce qui, pour un système sans interaction, vaut $E\_{\boldsymbol{p}} = \frac{p\_{\mathrm{F}}^2}{2m}+\frac{p\_{\mathrm{F}}}{m}(|\boldsymbol{p}|-p\_{\mathrm{F}})+\ldots$&nbsp;; on identifie donc la **masse effective**

<p style="text-align:center;">
$\displaystyle
m^{*} = \frac{p_{\mathrm{F}}}{\partial E_{\boldsymbol{p}}/\partial|\boldsymbol{p}|}
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>La masse effective de Hartree-Fock&nbsp;:</summary>

Il faut dériver la fonction $F$. En posant $L = \ln\left|\frac{1+x}{1-x}\right|$, dont la dérivée vaut $L' = \frac{2}{1-x^2}$, on obtient

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
F'(x) = \left(-\frac{1}{2x^2}-\frac{1}{2}\right)L + \frac{1-x^2}{2x}\cdot\frac{2}{1-x^2} = \frac{1}{x}\left[1 - \frac{1+x^2}{2x}L\right]
$
</p>

En dérivant $E\_{\boldsymbol{p}} = \frac{\boldsymbol{p}^2}{2m}-\frac{p\_{\mathrm{F}}}{\pi}\left(\frac{e^2}{4\pi\epsilon\_0}\right)F(x)$ par rapport à $|\boldsymbol{p}| = xp\_{\mathrm{F}}$, il vient

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{m}{m^{*}} = 1 + \frac{m}{2\pi p_{\mathrm{F}}}\left(\frac{e^2}{4\pi\epsilon_0}\right)\frac{1}{x^2}\left[(1+x^2)\ln\left|\frac{1+x}{1-x}\right| - 2x\right]
$
</p>

Le logarithme diverge en $x=1$&nbsp;: $m/m^{\*}\to\infty$, donc $m^{*}\to 0$ à la surface de Fermi.

</details>

</div>

<br>

<div id="theo">

La théorie Hartree-Fock prédit une masse effective **nulle** au voisinage de l'énergie de Fermi. C'est manifestement faux&nbsp;: les électrons d'un métal ont des masses effectives de l'ordre de $m$.

</div>

<br>

Le diagnostic est net. La théorie Hartree-Fock est entièrement **statique**&nbsp;: elle traite un électron comme s'il se propageait dans le champ figé de tous les autres. En réalité, les électrons <b>réarrangent leur configuration</b> au passage de l'intrus, ce qui produit des corrélations dépendant du temps. Il faut donc enrichir la self-énergie de processus supplémentaires.

{{%notice note "Une exception qui confirme la règle"%}}
On ignore ici les matériaux à fermions lourds, dans lesquels $m^{*}$ peut atteindre mille fois $m$. Que la masse effective puisse s'écarter de $m$ par trois ordres de grandeur <b>vers le haut</b> ne console évidemment pas d'une prédiction qui la fait tomber à zéro.
{{%/notice%}}

L'étape logique serait d'évaluer les contributions à la self-énergie contenant <b>deux</b> ondulations d'interaction, dont le diagramme de la **paire-bulle**.

<div style="position:relative;margin-left:auto;margin-right:auto;width:250px;max-width:100%;">
<img src="/tqc18pairbubble.png" style="box-shadow:none;background:none;">
</div>

Mauvaise nouvelle&nbsp;: son amplitude <b>diverge à petit $\boldsymbol{q}$</b>, comme $\int\mathrm{d}q/|\boldsymbol{q}|^4$. On pourrait croire à une impasse. La sortie consiste à faire un pas de côté&nbsp;: plutôt que de corriger la self-énergie de l'électron, on va corriger l'<b>interaction elle-même</b>, ce qui revient à sommer toute une classe de diagrammes du même type et fait disparaître la divergence.

<br>

## L'approximation des phases aléatoires

### Renormaliser l'interaction

Pour un gaz d'électrons de forte densité, la correction la plus importante à Hartree-Fock est la correction d'ordre le plus bas à l'ondulation d'interaction. Pour des raisons historiques, elle s'appelle l'**approximation des phases aléatoires** (RPA, <i>random phase approximation</i>), et elle a été formulée par David Bohm et David Pines.

{{%notice note "Aparté&nbsp;: d'où vient ce nom bizarre&nbsp;?"%}}
Le caractère aléatoire d'une phase n'a aucun rôle dans la présentation adoptée ici. Le nom provient d'un traitement alternatif, dans lequel on montre qu'un terme $\sum\_l \mathrm{e}^{\mathrm{i}\boldsymbol{q}\cdot\boldsymbol{x}\_l}$, où $\boldsymbol{x}\_l$ repère la position d'un électron, est négligeable&nbsp;: si les $\boldsymbol{x}\_l$ sont répartis sur un grand domaine, les phases sont distribuées au hasard et la somme s'annule statistiquement.
{{%/notice%}}

Cette correction au vertex a beaucoup en commun avec la correction de self-énergie du propagateur du photon en QED&nbsp;: dans les deux cas, l'ondulation qui porte l'interaction se met à fabriquer une paire virtuelle. Ici, l'ondulation crée une paire **électron-trou**, qui s'annihile peu après.

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/tqc18polarisation.png" style="box-shadow:none;background:none;">
</div>

Comme en QED, on appelle cela un **processus de polarisation**. C'est un représentant d'une classe entière de processus 1PI insérables dans une ondulation, dont la somme définit une fonction de Green $\mathrm{i}\tilde{\Pi}(q)$&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\tilde{\Pi}(q) = \sum\left(\begin{array}{c}\text{tous les diagrammes 1PI insérables}\\ \text{dans une ondulation d'interaction}\end{array}\right)
$
</p>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:550px;max-width:100%;">
<img src="/tqc18diagpi.png" style="box-shadow:none;background:none;">
</div>

Pour tenir pleinement compte de $\mathrm{i}\tilde{\Pi}(q)$, il faut sommer ses insertions à l'infini. Comme il n'y a pas ici de propagateur de photon, ce sont les <b>potentiels</b> que ces insertions renormalisent&nbsp;: l'interaction passe de $-\mathrm{i}\tilde{V}\_{\boldsymbol{q}}$ à un potentiel effectif $-\mathrm{i}\tilde{V}\_{\text{eff}}(q)$. La sommation est la série géométrique habituelle&nbsp;:

<div id="theo">

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
-\mathrm{i}\tilde{V}_{\text{eff}}(q) = -\mathrm{i}\tilde{V}_{\boldsymbol{q}} + \left[-\mathrm{i}\tilde{V}_{\boldsymbol{q}}\right]\left[\mathrm{i}\tilde{\Pi}(q)\right]\left[-\mathrm{i}\tilde{V}_{\boldsymbol{q}}\right] + \ldots = \frac{-\mathrm{i}\tilde{V}_{\boldsymbol{q}}}{1-\tilde{V}_{\boldsymbol{q}}\tilde{\Pi}(q)}
$
</p>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/tqc18sommebulles.png" style="box-shadow:none;background:none;">
</div>

Le dénominateur porte un nom qui n'a rien d'un hasard.

<div id="def">

<p style="text-align:center;">
$\displaystyle
\tilde{V}_{\text{eff}}(q) = \frac{\tilde{V}_{\boldsymbol{q}}}{\tilde{\epsilon}(q)}\quad$
avec
$\displaystyle
\quad \tilde{\epsilon}(q) = 1 - \tilde{V}_{\boldsymbol{q}}\tilde{\Pi}(q)
$
</p>

$\tilde{\epsilon}(q)$ est la **permittivité** du métal, fonction de l'énergie $q^0$ <b>et</b> du vecteur d'onde $\boldsymbol{q}$.

</div>

Exactement comme en QED, le vide du métal acquiert des propriétés <b>diélectriques</b>, causées par les paires électron-trou qui apparaissent et disparaissent sans cesse. Physiquement, ces paires **écrantent** la charge des électrons les uns vis-à-vis des autres.

Et l'on aperçoit déjà le remède à la masse effective absurde&nbsp;: puisque $\tilde{\epsilon}$ dépend de l'énergie, l'inclusion des diagrammes de polarisation apporte précisément les <b>corrélations dépendant du temps</b> dont l'absence causait la catastrophe.

### La bulle électron-trou et la fonction de Lindhard

Jusqu'ici tout était général. La RPA consiste à ne garder que la contribution d'ordre le plus bas à $\tilde{\Pi}(q)$&nbsp;: la simple bulle électron-trou, dont on note l'amplitude $\tilde{\pi}(q)$.

<div id="preuve">

<details>
<summary>Calcul de l'amplitude de la bulle&nbsp;:</summary>

Avec le signe moins de la boucle fermionique&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathrm{i}\tilde{\pi}(q) = -\mathcal{V}\int\frac{\mathrm{d}^4p}{(2\pi)^4}\,\tilde{G}_0(p+q)\tilde{G}_0(p) = -\mathcal{V}\int\frac{\mathrm{d}^3p}{(2\pi)^3}\int_{-\infty}^{\infty}\frac{\mathrm{d}p^0}{2\pi}\,\frac{\mathrm{i}}{p^0+q^0-E_{\boldsymbol{p}+\boldsymbol{q}}+\mathrm{i}\delta_{\boldsymbol{p}+\boldsymbol{q}}}\,\frac{\mathrm{i}}{p^0-E_{\boldsymbol{p}}+\mathrm{i}\delta_{\boldsymbol{p}}}
$
</p>

On décompose le produit des deux pôles en éléments simples, ce qui met l'intégrale sous une forme directement traitable par un calcul de résidus&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
= \mathcal{V}\int\frac{\mathrm{d}^3p}{(2\pi)^3}\,\frac{1}{(E_{\boldsymbol{p}+\boldsymbol{q}}-\mathrm{i}\delta_{\boldsymbol{p}+\boldsymbol{q}})-(E_{\boldsymbol{p}}-\mathrm{i}\delta_{\boldsymbol{p}})-q^0}\int_{-\infty}^{\infty}\frac{\mathrm{d}p^0}{2\pi}\left(\frac{1}{p^0+q^0-E_{\boldsymbol{p}+\boldsymbol{q}}+\mathrm{i}\delta_{\boldsymbol{p}+\boldsymbol{q}}}-\frac{1}{p^0-E_{\boldsymbol{p}}+\mathrm{i}\delta_{\boldsymbol{p}}}\right)
$
</p>

Les intégrales sur $p^0$ ont des pôles en $p^0 = -q^0+E\_{\boldsymbol{p}+\boldsymbol{q}}-\mathrm{i}\delta\_{\boldsymbol{p}+\boldsymbol{q}}$ et $p^0 = E\_{\boldsymbol{p}}-\mathrm{i}\delta\_{\boldsymbol{p}}$. Comme précédemment, le signe de $\delta$ décide du demi-plan&nbsp;: les résidus ne sont non nuls que pour les états occupés, et l'on récolte des facteurs $2\pi\mathrm{i}N\_{\boldsymbol{p}+\boldsymbol{q}}$ et $2\pi\mathrm{i}N\_{\boldsymbol{p}}$. Les nombres d'occupation sont donc des <b>fonctions de Fermi</b>, et il reste, en laissant tomber les infinitésimaux devenus inutiles&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde{\pi}(q) = \mathcal{V}\int\frac{\mathrm{d}^3p}{(2\pi)^3}\,\frac{N_{\boldsymbol{p}+\boldsymbol{q}}-N_{\boldsymbol{p}}}{E_{\boldsymbol{p}+\boldsymbol{q}}-E_{\boldsymbol{p}}-q^0}
$
</p>

</details>

</div>

<br>

<div id="def">

L'intégrande de cette expression est la **fonction de Lindhard**.

</div>

Sa structure se lit à vue&nbsp;: le numérateur $N\_{\boldsymbol{p}+\boldsymbol{q}}-N\_{\boldsymbol{p}}$ n'est non nul que si l'un des deux états est occupé et l'autre vide, c'est-à-dire précisément quand il est possible de créer une <b>paire électron-trou</b> en transférant $\boldsymbol{q}$&nbsp;; le dénominateur s'annule quand l'énergie transférée $q^0$ coïncide avec le coût énergétique de cette paire, ce qui est la signature d'une résonance.

L'évaluation de l'intégrale est laborieuse. En continuant analytiquement vers des énergies imaginaires, on trouve

<p style="text-align:center;">
$\displaystyle
\tilde{\pi}(\mathrm{i}q^0,\boldsymbol{q}) = -\frac{1}{2}g(E_{\mathrm{F}})\,\mathcal{F}\!\left(\frac{\mathrm{i}q^0}{4E_{\mathrm{F}}},\frac{|\boldsymbol{q}|}{2p_{\mathrm{F}}}\right)
$
</p>

où $g(E\_{\mathrm{F}}) = \left.\frac{\mathrm{d}N\_{\boldsymbol{p}}}{\mathrm{d}E\_{\boldsymbol{p}}}\right|\_{E\_{\mathrm{F}}}$ est la densité d'états au niveau de Fermi et où

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathcal{F}(y,x) = 1 + \frac{1}{4x}\left[1-\left(x-\frac{y}{x}\right)^2\right]\ln\left|\frac{x-\frac{y}{x}+1}{x-\frac{y}{x}-1}\right| + \frac{1}{4x}\left[1-\left(x+\frac{y}{x}\right)^2\right]\ln\left|\frac{x+\frac{y}{x}+1}{x+\frac{y}{x}-1}\right|
$
</p>

C'est une version <b>dynamisée</b> de la fonction $F(x)$ qui gouvernait déjà la self-énergie de Fock&nbsp;: la même structure, dédoublée et décalée par l'énergie transférée. Il faudrait en toute rigueur la continuer analytiquement vers les $q^0$ réels, mais on se limitera à la limite $q^0\to 0$, où $\mathcal{F}(\mathrm{i}q^0/4E\_{\mathrm{F}},|\boldsymbol{q}|/2p\_{\mathrm{F}})$ se réduit à $F(|\boldsymbol{q}|/2p\_{\mathrm{F}})$.

Trois grands résultats vont maintenant tomber, en examinant trois cas particuliers de $\tilde{\epsilon}(q^0,\boldsymbol{q})$.

### Cas I&nbsp;: l'écrantage de Thomas-Fermi

Plaçons-nous dans la limite <b>statique</b> ($q^0\to 0$) puis à petit $\boldsymbol{q}$. Comme $F(0)=2$, on obtient $\lim\_{\boldsymbol{q}\to 0}\tilde{\pi}(0,\boldsymbol{q}) = -g(E\_{\mathrm{F}}) = -\frac{3N}{2E\_{\mathrm{F}}}$, où l'on a inclus un facteur $2$ pour la dégénérescence de spin. La permittivité devient

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\lim_{\boldsymbol{q}\to 0}\tilde{\epsilon}(0,\boldsymbol{q}) = 1 + \left(\frac{3ne^2}{2\epsilon_0E_{\mathrm{F}}}\right)\frac{1}{|\boldsymbol{q}|^2} = 1 + \frac{q_{\mathrm{TF}}^2}{|\boldsymbol{q}|^2}
$
</p>

où $q\_{\mathrm{TF}}$ est le **vecteur d'onde de Thomas-Fermi**.

</div>

<br>

La permittivité <b>diverge</b> quand $|\boldsymbol{q}|\to 0$. Contre toute intuition, c'est une excellente nouvelle&nbsp;: cela signifie qu'un champ électrique uniforme ne peut pas pénétrer un métal, ce à quoi on s'attend fermement.

{{%notice note "L'ordre des limites n'est pas négociable"%}}
On a d'abord pris la limite statique, puis fait tendre $\boldsymbol{q}$ vers zéro. L'ordre inverse (considérer d'emblée un champ uniforme, $\boldsymbol{q}=\boldsymbol{0}$, puis faire tendre $q^0$ vers zéro) décrit une tout autre situation&nbsp;: la réponse du métal à un champ alternatif, donc ses propriétés de <b>transport</b>. Deux limites qui ne commutent pas, deux physiques différentes.
{{%/notice%}}

En reportant dans le potentiel effectif&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lim_{\boldsymbol{q}\to 0}\tilde{V}_{\text{eff}}(0,|\boldsymbol{q}|) = \frac{e^2}{\epsilon_0\mathcal{V}}\frac{1}{|\boldsymbol{q}|^2+q_{\mathrm{TF}}^2}
$
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;">
<img src="/tqc18veffq.png" style="box-shadow:none;background:none;">
</div>

Le contraste avec le potentiel nu est frappant&nbsp;: là où $\tilde{V}\_{\boldsymbol{q}}\propto 1/|\boldsymbol{q}|^2$ explosait à grande longueur d'onde, $\tilde{V}\_{\text{eff}}$ sature. Et l'on reconnaît immédiatement sa transformée de Fourier&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\lim_{|\boldsymbol{x}|\to\infty}V_{\text{eff}}(\boldsymbol{x}) \propto \frac{e^2}{|\boldsymbol{x}|}\,\mathrm{e}^{-q_{\mathrm{TF}}|\boldsymbol{x}|}
$
</p>

C'est le **potentiel de Yukawa**, le plus simple des potentiels coulombiens écrantés.

</div>

<br>

Conclusion&nbsp;: la création et l'annihilation de paires électron-trou écrantent la charge électronique, et dans la RPA cet écrantage remplace le potentiel de Coulomb par un potentiel de Yukawa de portée $1/q\_{\mathrm{TF}}$. La ruse mathématique employée bien plus haut pour calculer $\tilde{V}\_{\boldsymbol{q}}$ était donc, sans qu'on le sache encore, une préfiguration du résultat physique.

### Cas II&nbsp;: les oscillations de Friedel

Restons statiques, mais quittons les petits $\boldsymbol{q}$ pour aller voir ce qui se passe en $|\boldsymbol{q}| = 2p\_{\mathrm{F}}$.

C'est là que la pente infinie de $F$ en $x=1$ vient réclamer son dû&nbsp;: $\tilde{\epsilon}(0,\boldsymbol{q})$ possède une singularité faible en $|\boldsymbol{q}|/2p\_{\mathrm{F}} = 1$, au voisinage de laquelle $\tilde{\pi}(0,\boldsymbol{q})\propto(|\boldsymbol{q}|-2p\_{\mathrm{F}})\ln(|\boldsymbol{q}|-2p\_{\mathrm{F}})$. Une fois insérée dans le potentiel effectif et transformée de Fourier, cette singularité produit

<div id="theo">

<p style="text-align:center;">
$\displaystyle
V_{\text{eff}}(0,|\boldsymbol{x}|) \propto \frac{\cos(2p_{\mathrm{F}}|\boldsymbol{x}|)}{|\boldsymbol{x}|^3}
$
</p>

</div>

<div style="position:relative;margin-left:auto;margin-right:auto;width:350px;max-width:100%;">
<img src="/tqc18friedel.png" style="box-shadow:none;background:none;">
</div>

Un potentiel <b>oscillant et de longue portée</b>, donc, alors même que le cas I nous promettait un écrantage exponentiel. Il n'y a pas de contradiction&nbsp;: les deux comportements décrivent des régions différentes de l'espace des $\boldsymbol{q}$, et c'est la seconde qui domine à grande distance.

La physique est jolie. Le métal réagit <b>dans son ensemble</b> à la présence de chaque charge, et la netteté de la surface de Fermi, qui fournit une échelle d'impulsion privilégiée $2p\_{\mathrm{F}}$, fait «&nbsp;sonner&nbsp;» cette réaction dans l'espace, comme une cloche qui garderait la mémoire d'une fréquence propre. Ce sont les **oscillations de Friedel**, du nom de Jacques Friedel (1921–2014).

### Cas III&nbsp;: les plasmons

Dernier cas&nbsp;: on prend cette fois $q^0\neq 0$, dans la limite $|\boldsymbol{q}|\to 0$.

<div id="preuve">

<details>
<summary>Développement de la fonction de Lindhard à petit $\boldsymbol{q}$&nbsp;:</summary>

À petit $\boldsymbol{q}$, le numérateur et le dénominateur de la fonction de Lindhard se développent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\frac{N_{\boldsymbol{p}+\boldsymbol{q}}-N_{\boldsymbol{p}}}{E_{\boldsymbol{p}+\boldsymbol{q}}-E_{\boldsymbol{p}}-q^0} \approx \frac{\boldsymbol{q}\cdot\boldsymbol{v}_{\boldsymbol{p}}}{\boldsymbol{q}\cdot\boldsymbol{v}_{\boldsymbol{p}}-q^0}\left(\frac{\mathrm{d}N_{\boldsymbol{p}}}{\mathrm{d}E_{\boldsymbol{p}}}\right)
$
</p>

où $\boldsymbol{v}\_{\boldsymbol{p}} = \boldsymbol{\nabla}\_{\boldsymbol{p}}E\_{\boldsymbol{p}}$ est la vitesse de groupe. En développant en puissances de l'impulsion, et avec le facteur $2$ de spin&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\lim_{|\boldsymbol{q}|\to 0}\tilde{\pi}(q^0,\boldsymbol{q}) \approx -2\mathcal{V}\int\frac{\mathrm{d}^3p}{(2\pi)^3}\left[\frac{\boldsymbol{q}\cdot\boldsymbol{v}_{\boldsymbol{p}}}{q^0}+\frac{(\boldsymbol{q}\cdot\boldsymbol{v}_{\boldsymbol{p}})^2}{(q^0)^2}\right]\left(\frac{\mathrm{d}N_{\boldsymbol{p}}}{\mathrm{d}E_{\boldsymbol{p}}}\right)
$
</p>

On utilise ensuite $\frac{\mathrm{d}N\_{\boldsymbol{p}}}{\mathrm{d}E\_{\boldsymbol{p}}} = -\frac{m}{|\boldsymbol{p}|}\delta(|\boldsymbol{p}|-p\_{\mathrm{F}})$, qui n'est autre que la dérivée de la marche d'escalier de l'occupation&nbsp;: toute l'action se passe <b>sur</b> la surface de Fermi. L'intégration angulaire tue le premier terme, car $\cos\theta$ est impair&nbsp;; le second survit et donne

<p style="text-align:center;">
$\displaystyle
\lim_{|\boldsymbol{q}|\to 0}\tilde{\pi}(q^0,\boldsymbol{q}) = g(E_{\mathrm{F}})\frac{|\boldsymbol{v}_{\mathrm{F}}|^2}{3}\frac{|\boldsymbol{q}|^2}{(q^0)^2}
$
</p>

</details>

</div>

Le facteur $|\boldsymbol{q}|^2$ compense exactement le $1/|\boldsymbol{q}|^2$ du potentiel de Coulomb, et la permittivité devient indépendante de $\boldsymbol{q}$&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\lim_{|\boldsymbol{q}|\to 0}\tilde{\epsilon}(q^0,\boldsymbol{q}) = 1 - \frac{\omega_{\mathrm{p}}^2}{(q^0)^2}\quad$
avec
$\displaystyle
\quad\omega_{\mathrm{p}}^2 = \frac{ne^2}{m\epsilon_0}
$
</p>

<p style="text-align:center;">
$\omega_{\mathrm{p}}$ est la <b>fréquence plasma</b>.
</p>

</div>

<br>

Que signifie l'<b>annulation</b> de $\tilde{\epsilon}$ en $q^0 = \omega\_{\mathrm{p}}$&nbsp;? Une permittivité nulle veut dire que le potentiel effectif $\tilde{V}\_{\boldsymbol{q}}/\tilde{\epsilon}$ diverge&nbsp;: le système répond infiniment à une sollicitation infinitésimale. C'est la signature d'un **mode propre**, une excitation qui existe sans qu'on ait besoin de la forcer.

<div id="theo">

Ce mode est l'**oscillation plasma**&nbsp;: le système d'électrons dans son ensemble oscille par rapport au fond positif. C'est une excitation <b>collective</b>, de grande longueur d'onde, et son quantum s'appelle un **plasmon**.

</div>

<br>

Il vaut la peine de mesurer le chemin parcouru&nbsp;: partis d'un hamiltonien à quatre opérateurs décrivant des électrons individuels, nous avons vu émerger une excitation qui n'appartient à aucun électron en particulier.

### La masse effective, enfin sauvée

Rappelons pourquoi on a fait ce détour&nbsp;: corriger l'énergie d'excitation $E\_{\boldsymbol{p}}$. Il suffit maintenant d'insérer l'interaction renormalisée (la bulle grisée des figures précédentes) dans nos diagrammes. L'huître corrigée devient&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:550px;max-width:100%;">
<img src="/tqc18oysterrpa.png" style="box-shadow:none;background:none;">
</div>

L'évaluation des nombres est, comme on peut l'imaginer, passablement laborieuse. On peut montrer que l'énergie de la quasiparticule vaut

<div id="theo">

<p style="text-align:center;">
$\displaystyle
E_{\boldsymbol{p}} = \frac{\boldsymbol{p}^2}{2m} - 0{,}166\,r_{\mathrm{s}}(\ln r_{\mathrm{s}}+0{,}203)\frac{|\boldsymbol{p}|p_{\mathrm{F}}}{2m} + \text{cste}
$
</p>

d'où une masse effective **non nulle**&nbsp;: $\frac{m}{m^{\ast}} = 1 - 0{,}083\\,r\_{\mathrm{s}}(\ln r\_{\mathrm{s}}+0{,}203)$.

</div>

<br>

La différence de nature avec le résultat Hartree-Fock est plus instructive que la valeur numérique&nbsp;: la dispersion est maintenant <b>linéaire</b> en $|\boldsymbol{p}|$ près de la surface de Fermi, sans logarithme divergent. La singularité venait de la portée infinie du potentiel de Coulomb nu&nbsp;; l'écrantage l'a rendue inoffensive.

### Le spectre des excitations d'un métal

Les enseignements de la RPA permettent enfin de dessiner la relation de dispersion complète des excitations du métal.

<div style="position:relative;margin-left:auto;margin-right:auto;width:450px;max-width:100%;">
<img src="/tqc18spectre.png" style="box-shadow:none;background:none;">
</div>

Deux régions bien distinctes. À basse énergie, les excitations sont des paires quasiélectron-quasitrou&nbsp;; à plus haute énergie apparaît la branche collective des plasmons.

Le trait le plus remarquable est que les excitations de basse énergie ne forment pas une courbe mais un **continuum de largeur $2p\_{\mathrm{F}}$**. La raison est purement géométrique&nbsp;: exciter le système consiste à promouvoir un électron depuis l'intérieur d'une sphère de Fermi de <b>diamètre</b> $2p\_{\mathrm{F}}$. Pour une énergie d'excitation donnée, l'impulsion transférée peut donc valoir $|\boldsymbol{p}|$ si l'on part du côté le plus proche de la surface de Fermi, ou environ $|\boldsymbol{p}|+2p\_{\mathrm{F}}$ si l'on part du côté le plus éloigné, et tout ce qui se trouve entre les deux.

<br>

## Quelques prolongements

Trois questions que le chapitre laisse en suspens et qui prolongent naturellement le calcul.

<div id="preuve">

<details>
<summary>1. Le terme d'échange rend-il les métaux ferromagnétiques&nbsp;?</summary>

En tenant compte du spin, l'hamiltonien devient

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{H} = \sum_{\boldsymbol{p}\sigma}\frac{\boldsymbol{p}^2}{2m}\hat{a}^\dagger_{\boldsymbol{p}\sigma}\hat{a}_{\boldsymbol{p}\sigma} + \frac{1}{2}\sum_{\boldsymbol{p}\boldsymbol{k}\boldsymbol{q}\sigma\sigma'}\tilde{V}_{\boldsymbol{q}}\,\hat{a}^\dagger_{\boldsymbol{p}-\boldsymbol{q}\sigma}\hat{a}^\dagger_{\boldsymbol{k}+\boldsymbol{q}\sigma'}\hat{a}_{\boldsymbol{k}\sigma'}\hat{a}_{\boldsymbol{p}\sigma}
$
</p>

Trois observations s'enchaînent. <b>L'énergie cinétique</b> favorise l'égalité des populations&nbsp;: l'énergie d'une mer de Fermi croît comme $n^{5/3}$ pour chaque espèce de spin, donc déséquilibrer coûte plus cher que cela ne rapporte. <b>Le terme de Hartree</b> ne dépend que du nombre <b>total</b> d'électrons, donc il est indifférent à la polarisation. <b>Le terme de Fock</b>, lui, exige $\langle\hat{a}^\dagger\_{\boldsymbol{k}\sigma}\hat{a}\_{\boldsymbol{k}\sigma'}\rangle\neq 0$, donc $\sigma=\sigma'$&nbsp;: il ne contribue qu'entre spins <b>identiques</b>, et négativement.

Polariser le gaz gagne donc de l'énergie d'échange et perd de l'énergie cinétique. Comme le premier terme varie en $1/r\_{\mathrm{s}}$ et le second en $1/r\_{\mathrm{s}}^2$, l'échange l'emporte à <b>faible densité</b> (grand $r\_{\mathrm{s}}$)&nbsp;: c'est le mécanisme du ferromagnétisme itinérant.

</details>

</div>

<br>

<div id="preuve">

<details>
<summary>2. Pourquoi la paire-bulle est-elle le pire diagramme&nbsp;?</summary>

Son amplitude varie comme $\int\mathrm{d}q/|\boldsymbol{q}|^4$, divergente à petit $\boldsymbol{q}$. En comparant aux autres diagrammes à deux ondulations, on constate qu'elle est la <b>plus divergente</b> à cet ordre, et la structure se reproduit à tous les ordres. La RPA correspond donc exactement à la sommation des diagrammes les plus divergents de la self-énergie électronique&nbsp;: une resommation qui, en additionnant une infinité de termes infinis, produit un résultat fini.

</details>

</div>

<br>

<div id="preuve">

<details>
<summary>3. Un gaz d'électrons en dimension $1+1$&nbsp;: le retour de Dirac</summary>

Près du niveau de Fermi, en dimension un, la dispersion se linéarise en deux branches, celle des électrons se déplaçant vers la droite et celle des électrons se déplaçant vers la gauche&nbsp;:

<p style="text-align:center;">
$\displaystyle
\left(\frac{\partial}{\partial t}\pm v_{\mathrm{F}}\frac{\partial}{\partial x}\right)\psi = 0
$
</p>

En rassemblant les deux composantes en un doublet et en utilisant la représentation bidimensionnelle des matrices $\gamma$, le lagrangien s'écrit

<p style="text-align:center;">
$\displaystyle
\mathcal{L} = \mathrm{i}\psi^\dagger\left(\frac{\partial}{\partial t}-v_{\mathrm{F}}\sigma^3\frac{\partial}{\partial x}\right)\psi
$
</p>

et, en posant $v\_{\mathrm{F}}=1$, prend la forme d'un lagrangien de Dirac <b>sans masse</b>. Un gaz d'électrons non relativistes confiné à une dimension imite donc, à basse énergie, une théorie relativiste, la vitesse de Fermi jouant le rôle de la vitesse de la lumière.

</details>

</div>

<br>

### Bilan

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\hat{V} \sim \hat{a}^\dagger\hat{a}^\dagger\hat{a}\hat{a}
\;\xrightarrow{\ \text{Wick}\ }\;
C_0 + D_0 + F_0
\;\xrightarrow{\ \langle\hat{a}^\dagger\hat{a}^\dagger\rangle=0\ }\;
\text{têtard (Hartree)} + \text{huître (Fock)}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\text{jellium}
\;\xrightarrow{\ D_0\ \text{annulé}\ }\;
\tilde{\Sigma}^{(\mathrm{F})}_{\boldsymbol{p}} = -\frac{p_{\mathrm{F}}}{\pi}\frac{e^2}{4\pi\epsilon_0}F\!\left(\frac{|\boldsymbol{p}|}{p_{\mathrm{F}}}\right)
\;\longrightarrow\;
\frac{E_{\mathrm{HF}}}{N} = \frac{2{,}21}{r_{\mathrm{s}}^2}-\frac{0{,}916}{r_{\mathrm{s}}}\ \mathrm{Ry}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\tilde{G}_0(p) = \frac{\mathrm{i}}{E-E_{\boldsymbol{p}}+\mathrm{i}\delta_{\boldsymbol{p}}}
\;\xrightarrow{\ \text{Dyson}\ }\;
E = E_{\boldsymbol{p}}+\mathrm{Re}\,\tilde{\Sigma}
\;\xrightarrow{\ \text{Hartree-Fock statique}\ }\;
m^{*}\to 0\ \text{(absurde)}
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\text{bulle électron-trou}
\;\xrightarrow{\ \text{somme à l'infini}\ }\;
\tilde{\epsilon}(q) = 1-\tilde{V}_{\boldsymbol{q}}\tilde{\Pi}(q)
\;\longrightarrow\;
\begin{cases}\text{Yukawa (Thomas-Fermi)}\\ \text{oscillations de Friedel}\\ \text{plasmons } \omega_{\mathrm{p}}^2 = ne^2/m\epsilon_0\end{cases}
$
</p>

### Pièges

<ul>
<li>Le «&nbsp;vide&nbsp;» $|0\rangle$ d'un métal est une mer de Fermi remplie. Tous les diagrammes qui s'annulent dans le vide de la QED (le têtard, par exemple) survivent ici, et c'est le cœur de la différence.</li>
<li>Le terme de Cooper $\langle\hat{a}^\dagger\hat{a}^\dagger\rangle$ n'est pas nul par principe&nbsp;: il est nul <b>tant que</b> le nombre de particules est bien défini. La supraconductivité vit précisément dans l'exception.</li>
<li>Le terme de Hartree a un analogue classique (deux distributions de charge), pas le terme de Fock&nbsp;: son signe moins vient de l'antisymétrisation, c'est-à-dire du principe de Pauli.</li>
<li>Le facteur $-1$ de boucle fermionique ne s'applique qu'aux boucles <b>fermées</b>&nbsp;: le têtard en a une, l'huître non.</li>
<li>Le facteur de convergence $\mathrm{e}^{\mathrm{i}E0^+}$ n'est pas une décoration&nbsp;: c'est lui qui choisit le demi-plan de fermeture du contour, donc quels états occupés contribuent. Sans lui, l'intégrale sur $E$ est ambiguë.</li>
<li>Les limites $q^0\to 0$ et $|\boldsymbol{q}|\to 0$ ne commutent pas. L'une décrit l'écrantage statique, l'autre la réponse aux champs alternatifs.</li>
<li>La pente infinie de $F$ en $x=1$ n'est pas un accident de calcul&nbsp;: c'est la netteté de la surface de Fermi. Elle provoque la masse effective nulle de Hartree-Fock <b>et</b> les oscillations de Friedel de la RPA.</li>
<li>Une permittivité qui <b>diverge</b> signale qu'un champ ne pénètre pas&nbsp;; une permittivité qui <b>s'annule</b> signale un mode collectif. Deux comportements opposés, deux physiques opposées.</li>
<li>Hartree-Fock n'est pas «&nbsp;une approximation raisonnable qu'on peut affiner&nbsp;»&nbsp;: sur les excitations, elle est qualitativement fausse, et il faut la RPA pour retrouver un résultat sensé.</li>
</ul>

<br><br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc17">Chapitre précédent</a></td><td><a href="../tqc19">Chapitre suivant</a></td>
    </tr>
</table>
</div>
