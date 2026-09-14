+++
title = "TQC-11"
date = 2026-07-28T14:00:00+01:00
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


# Théorie quantique des champs -- Partie 11

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


Heure des comptes. Depuis le début, un cadavre traîne dans le placard&nbsp;: presque toutes les intégrales de boucles que nous avons écrites <b>divergent</b>, et nous nous sommes soigneusement abstenus de les calculer jusqu'au bout. Cette partie affronte le problème, et la résolution est l'une des plus belles histoires de la physique du vingtième siècle&nbsp;: les infinis ne sont pas une maladie de la théorie, ils sont le symptôme d'une erreur de variables. Nous faisions de la théorie des perturbations autour des <i>mauvais</i> paramètres.

<ul style="margin-top:1em;">
<li><b><a href="./#quasiparticules-et-surface-de-fermi">Le vrai sujet</a></b>&nbsp;: avant même de parler d'infinis, les interactions changent ce qu'est une particule. Une particule en interaction s'habille d'un nuage de fluctuations et devient une <b>quasiparticule</b>, de masse et de charge modifiées. Ce phénomène s'appelle la renormalisation, et il existerait même si aucune intégrale ne divergeait.</li>
<li><b><a href="./#le-problème-divergences-et-sa-solution-contretermes">Le problème et sa solution</a></b>&nbsp;: les boucles divergent, on coupe les intégrales à une impulsion $\Lambda$, et on ajoute des <b>contretermes</b> qui effacent toute dépendance en $\Lambda$. On découvre alors que ces contretermes ne sont rien d'autre que le changement de variables des paramètres nus vers les paramètres physiques.</li>
<li><b><a href="./#la-renormalisation-en-action-self-énergie-et-vertex">La machinerie en action</a></b>&nbsp;: deux fonctions de Green concentrent tout l'habillage, la <b>self-énergie</b> $\tilde\Sigma$ (qui déplace la masse) et la <b>fonction de vertex</b> $\tilde\Gamma$ (qui écrante le couplage), reliées au propagateur exact par une resommation géométrique.</li>
<li><b><a href="./#le-groupe-de-renormalisation">Le changement de regard</a></b>&nbsp;: Wilson propose de ne plus cacher $\Lambda$ mais de vivre avec, et de regarder comment les «&nbsp;constantes&nbsp;» de couplage <b>varient</b> quand on change l'échelle d'observation. C'est le <b>groupe de renormalisation</b>, avec trois applications spectaculaires&nbsp;: la liberté asymptotique, la localisation d'Anderson, et la transition de Kosterlitz–Thouless (où l'on retrouve nos vortex de la partie précédente).</li>
</ul>

La machine sera alors complète, mais nous ne l'aurons encore fait tourner sur aucun cas réel. C'est l'objet de la <b><a href="../tqc12">partie suivante</a></b>, entièrement consacrée à un seul exemple mené jusqu'aux nombres&nbsp;: la transition ferromagnétique, le point fixe de Wilson–Fisher, et le miracle de l'<b>universalité</b>.
<br>


## Quasiparticules et surface de Fermi

### L'habillage, une idée d'abord classique

Avant tout formalisme, une image. Poussons une balle de ping-pong immergée dans l'eau&nbsp;: pour l'accélérer, il faut aussi accélérer l'eau qu'elle déplace, et tout se passe comme si la balle avait une masse effective $m^* = m + \tfrac12\rho V$, où $\rho V$ est la masse d'eau déplacée (le résultat est exact en fluide parfait). La balle ne peut pas se déplacer sans traîner son environnement avec elle&nbsp;: l'objet qui se propage n'est plus «&nbsp;la balle&nbsp;», c'est «&nbsp;la balle plus sa déformation du fluide&nbsp;», et ses paramètres sont modifiés. Voilà exactement ce que les interactions font aux particules d'une théorie quantique des champs.

Deux exemples de matière condensée dans le même esprit&nbsp;: une charge positive plongée dans un métal s'entoure d'un nuage électronique qui <b>écrante</b> sa charge apparente, et un électron dans un cristal acquiert une masse effective $m^*$ différente de sa masse dans le vide. La différence avec une théorie «&nbsp;fondamentale&nbsp;» comme l'électrodynamique quantique est seulement épistémique&nbsp;: en matière condensée, on peut sortir l'électron du cristal et comparer, tandis qu'on ne peut pas sortir l'électron du vide quantique. Le cadre conceptuel, lui, est identique.

<div id="def">

Une <b>quasiparticule</b> (ou particule habillée, ou particule renormalisée, selon le contexte) est l'excitation d'un système en interaction. Elle ressemble à une particule libre mais possède une masse et des couplages modifiés.

<p style="text-align:center;">
$\displaystyle
(\text{quasiparticule}) = (\text{particule nue}) + (\text{interactions})
$
</p>


Le processus d'habillage s'appelle la <b>renormalisation</b>.

</div>

<br>

### L'allumage adiabatique et le poids de quasiparticule

Reprenons la théorie libre&nbsp;: un vide $|0\rangle$, des opérateurs $\hat a^\dagger_{\mathbf p}$ qui créent des particules une par une, et un propagateur $\tilde G_0(p) = \mathrm i/(p^2 - m^2 + \mathrm i\epsilon)$ dont le pôle donne la masse. Branchons maintenant, très lentement, une interaction&nbsp;: $\hat H = \hat H_0 + \lambda(T)\\,\hat H'$, avec $\lambda$ qui monte de 0 à 1. Le fondamental devient $|\Omega\rangle$, les états propres deviennent $|{\mathbf p}_\lambda\rangle$, et le système est un chaudron bouillonnant de paires virtuelles. Une question angoissante se pose&nbsp;: dans ce chaos, <b>existe-t-il encore des excitations à une particule</b>&nbsp;? Toute notre théorie des champs repose sur la création et l'annihilation de particules individuelles&nbsp;; si la réponse est non, tout s'effondre.

Le nœud du problème est que nous n'avons pas les bons outils. Pour créer une excitation propre du système en interaction, il faudrait un opérateur $\hat q^\dagger_{\mathbf p}$ tel que $|{\mathbf p}\_\lambda\rangle = \hat q^\dagger_{\mathbf p}|\Omega\rangle$, mais nous ne le connaissons pas. Tout ce que nous possédons, ce sont les opérateurs <i>libres</i> $\hat a^\dagger_{\mathbf p}$. Et un opérateur libre appliqué au vide en interaction se comporte comme un éléphant dans un magasin de porcelaine&nbsp;: rien ne l'empêche de créer plusieurs excitations à la fois. Le résultat est une superposition&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat a^\dagger_{\mathbf p}|\Omega\rangle
= |{\mathbf p}_\lambda\rangle\,\langle{\mathbf p}_\lambda|\hat a^\dagger_{\mathbf p}|\Omega\rangle
+ \sum(\text{états multiparticules d'impulsion totale } \mathbf p)
$
</p>

$\hat a^\dagger_{\mathbf p}|\Omega\rangle$ peut par exemple contenir un état avec deux particules et une antiparticule comme $\hat{q}\_{\boldsymbol{p}_1}^{\dagger} \hat{q}\_{\boldsymbol{p}_2}^{\dagger} \hat{q}\_{\boldsymbol{p}_1+\boldsymbol{p}_2-\boldsymbol{p}}|\Omega\rangle$[^1].

[^1]: Dans un métal, ces multiparticules peuvent être décrites comme des émissions de paires électrons-trous.

<div id="def">

L'amplitude de la composante à une seule particule s'appelle le <b>poids de quasiparticule</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z_{\mathbf p}^{1/2} = \langle{\mathbf p}_\lambda|\,\hat a^\dagger_{\mathbf p}\,|\Omega\rangle
$
</p>

On dit qu'une quasiparticule existe si $Z_{\mathbf p} \neq 0$. 

Deux complications s'ajoutent&nbsp;:

<ul>
<li>la masse de l'état $|{\mathbf p}_\lambda\rangle$ n'est plus la masse nue $m$ mais la <b>masse physique</b> $m_{\mathrm P}$ (celle que mesurent les expériences),</li> 
<li>et l'état créé n'est en général qu'un paquet d'ondes étroit, une <b>résonance</b>, d'énergie complexe $E_{\mathbf p} + \mathrm i\Gamma_{\mathbf p}$&nbsp;: la quasiparticule est instable, de durée de vie $(2\Gamma_{\mathbf p})^{-1}$.</li>
</ul>

 Pour mériter le nom de quasiparticule, il faut $E_{\mathbf p} > \Gamma_{\mathbf p}$&nbsp;: vivre plus longtemps qu'on n'oscille.

</div>

Le tableau de correspondance&nbsp;:

| | État | Amplitude de création | Masse |
|---|---|---|---|
| Théorie libre | $\|{\mathbf p}\rangle = \hat a^\dagger_{\mathbf p}\|0\rangle$ | $\langle{\mathbf p}\|\hat\phi(x)\|0\rangle = e^{\mathrm i p\cdot x}$ | $m$ |
| Théorie en interaction | $\|{\mathbf p}\_\lambda\rangle = \hat q^\dagger_{\mathbf p}\|\Omega\rangle$ | $\langle{\mathbf p}\_\lambda\|\hat\phi(x)\|\Omega\rangle = Z_{\mathbf p}^{1/2}\\, e^{\mathrm i p\cdot x}\\, e^{-\Gamma_{\mathbf p} t}$ | $m_{\mathrm P}$ |

<br>

### Le propagateur habillé

<div id="theo">

Sans aucune théorie des perturbations, le propagateur en interaction prend la forme générale

<p style="text-align:center;">
$\displaystyle
\tilde G(p) = \frac{\mathrm i\, Z_{\mathbf p}}{p^2 - m_{\mathrm P}^2 + \mathrm i\Gamma_{\mathbf p}}
+ \begin{pmatrix}\text{parties}\\ \text{multiparticules}\end{pmatrix}
$
</p>

Tout s'y lit&nbsp;: la <b>position du pôle</b> donne la masse physique $m_{\mathrm P}$, le <b>résidu</b> au pôle donne $\mathrm i Z_{\mathbf p}$, et la largeur $\Gamma_{\mathbf p}$ donne l'inverse de la durée de vie, en lieu et place de l'infinitésimal $\epsilon$ habituel.

</div>

<br>

<div id="preuve">

<details>
<summary>Pourquoi cette forme est exacte, et non perturbative&nbsp;?</summary>

L'argument tient en deux ingrédients, et aucun des deux ne suppose que le couplage soit petit.

<b>Premier ingrédient, la complétude.</b> Les états propres exacts du système en interaction forment une base&nbsp;: le fondamental $|\Omega\rangle$, les états à une quasiparticule $|\mathbf p_\lambda\rangle$, et tous les états multiparticules. On insère donc cette décomposition de l'identité entre les deux champs de $G = \langle\Omega|T\hat\phi(x)\hat\phi^\dagger(y)|\Omega\rangle$. Chaque état intermédiaire apporte un terme, pondéré par le module carré de l'élément de matrice qui le relie au vide par un champ.

<b>Second ingrédient, l'invariance de Lorentz.</b> Chaque famille d'états intermédiaires possède une masse invariante bien définie, et se propage exactement comme une particule libre de cette masse. La somme est donc une <b>superposition de propagateurs libres</b>, ce qui est précisément la représentation en fonction spectrale évoquée ci-dessous.

L'état à une quasiparticule, isolé en masse, donne un pôle unique dont le poids est par définition $Z_{\mathbf p}$&nbsp;: c'est le même $Z$ que celui du paragraphe précédent, ce qui n'est pas une coïncidence mais la même quantité vue deux fois. Les états multiparticules, eux, forment un continuum de masses invariantes et ne peuvent produire aucun pôle isolé&nbsp;: ils donnent une contribution régulière.

Le prix de cette généralité est qu'on ne sait rien de $Z_{\mathbf p}$, $m_{\mathrm P}$ ni $\Gamma_{\mathbf p}$&nbsp;: la forme est garantie, les valeurs restent à calculer. Ce sera l'affaire du chapitre "[la renormalisation en action](./#la-renormalisation-en-action-self-énergie-et-vertex)".

</details>

</div>

Une reformulation fait le pont avec l'expérience&nbsp;:<br>
On écrit le propagateur comme une superposition de propagateurs libres de masses variables, pondérés par la <b>fonction spectrale</b> $\rho(M^2)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
G(x,y) = \int_0^{\infty}\frac{\mathrm dM^2}{2\pi}\,\rho(M^2)\,\Delta(x,y,M^2)
$
</p>

Pour une particule stable, $\rho$ contient un pic de Dirac de poids $Z$ en $M^2 = m_{\mathrm P}^2$, puis un continuum multiparticule qui démarre vers $4m_{\mathrm P}^2$ (le seuil de création de deux particules réelles). 

Pour une quasiparticule de durée de vie finie, le pic de Dirac s'élargit en une bosse de largeur $2\Gamma_{\mathbf p}$. La condition $E_{\mathbf p} > \Gamma_{\mathbf p}$ se lit alors à l'œil&nbsp;: le pic doit être étroit devant sa distance à l'origine. Les parties multiparticules subissent en général des interférences destructives et s'éteignent bien avant $\Gamma_{\mathbf p}^{-1}$, laissant la quasiparticule seule au milieu des ruines.

<!-- Figure à redessiner (L&B fig. 31.2) : deux panneaux montrant ρ(M²) en fonction de M². (a) un pic de Dirac (flèche verticale) en M² = m_P², puis un continuum multiparticule qui démarre vers 4m_P² ; (b) même chose mais le pic est élargi en une lorentzienne étroite de largeur 2Γ. Légende : particule stable contre quasiparticule de durée de vie finie -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:420px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/fonctionspectrale.png" style="box-shadow:none;background:none;">
</div>

<br>

### Les quasiparticules d'un métal, et une prédiction mesurable

En matière condensée, le renversement de point de vue est spectaculaire&nbsp;: un métal réel contient $N \approx 10^{23}$ électrons en interaction forte, et la renormalisation consiste à le décrire comme un <i>vide</i> (le fondamental, sans excitation) peuplé d'un <i>petit nombre</i> d'excitations élémentaires faiblement couplées. 

Deux familles d'excitations élémentaires existent&nbsp;: 

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>les <b>excitations collectives</b> (phonons, plasmons), qui mobilisent tous les constituants et disparaissent si l'on coupe les interactions,</li>
<li>et les <b>quasiparticules</b>, qui sont des excitations à une particule habillées.</li>
</ul>

<div id="preuve">

Le gaz de Fermi sans interaction à $T = 0$&nbsp;: 

$N$ électrons (que l'on prend sans spin pour simplifier) empilés dans les états $|\mathbf p\rangle$ jusqu'au niveau de Fermi $p_{\mathrm F}$. Près de la surface de Fermi, la dispersion se linéarise&nbsp;:

<p style="text-align:center;">
$\displaystyle
E^{(0)}_{\mathbf p} = v_{\mathrm F}\,(|\mathbf p| - p_{\mathrm F})\;$
avec 
$\; \displaystyle v_{\mathrm F} = \frac{p_{\mathrm F}}{m_e}$
</p>

On allume les interactions&nbsp;: la forme de la dispersion survit mais la pente change, $v_{\mathrm F} = p_{\mathrm F}/m^\*$, où $m^*$ est la <b>masse effective</b>. 

</div>

<br>

#### Le propagateur d'un métal, construit pas à pas

Nous allons extraire de ce propagateur une prédiction mesurable, mais l'objet lui-même n'est plus celui des chapitres précédents. Trois écarts sont à poser noir sur blanc avant tout calcul.

<b>Premier écart&nbsp;: le fondamental n'est plus vide.</b> Dans le vide relativiste, $\hat a_{\mathbf p}|0\rangle = 0$ pour <i>toute</i> impulsion&nbsp;: il n'y a rien à détruire. Dans un métal à $T = 0$, le fondamental $|\Omega\rangle$ est la mer de Fermi remplie jusqu'à $p_{\mathrm F}$, et le comportement dépend maintenant de l'impulsion considérée&nbsp;:

<ul style="margin-top:0.5em;">
<li>si $|\mathbf p| > p_{\mathrm F}$, l'état est libre&nbsp;: $\hat a_{\mathbf p}|\Omega\rangle = 0$, et seul $\hat a^\dagger_{\mathbf p}$ fait quelque chose (il ajoute un électron au-dessus de la mer)&nbsp;;</li>
<li>si $|\mathbf p| < p_{\mathrm F}$, l'état est occupé&nbsp;: c'est $\hat a^\dagger_{\mathbf p}|\Omega\rangle = 0$ qui s'annule, par le principe de Pauli, et seul $\hat a_{\mathbf p}$ fait quelque chose (il creuse un <b>trou</b> dans la mer).</li>
</ul>

<b>Deuxième écart&nbsp;: ce sont des fermions.</b> Le produit ordonné dans le temps change de signe quand on échange deux opérateurs fermioniques. Ce signe, purement mécanique, sera l'origine du signe moins qui nous attend plus bas.

<b>Troisième écart&nbsp;: on travaille en temps, à impulsion fixée.</b> L'objet est $G(\mathbf p, t)$ et non $\tilde G(p)$&nbsp;: on suit une impulsion donnée au cours du temps, ce qui est le langage naturel de la matière condensée.

<div id="def">

Le <b>propagateur à une particule</b> du métal, dans la convention sans facteur $-\mathrm i$ devant la moyenne&nbsp;:

<p style="text-align:center;">
$\displaystyle
G(\mathbf p, t) = \langle\Omega|\,T\,\hat a_{\mathbf p}(t)\,\hat a^\dagger_{\mathbf p}(0)\,|\Omega\rangle
= \begin{cases}
\;\;\;\langle \hat a_{\mathbf p}(t)\,\hat a^\dagger_{\mathbf p}(0)\rangle & \text{si } t>0\\[2mm]
-\langle \hat a^\dagger_{\mathbf p}(0)\,\hat a_{\mathbf p}(t)\rangle & \text{si } t<0
\end{cases}
$
</p>

</div>

Les deux lignes ne sont pas deux écritures d'une même chose&nbsp;: ce sont <b>deux histoires physiques différentes</b>, et c'est là que tout se joue.

<ul style="margin-top:0.5em;">
<li>Pour $t>0$, on lit de droite à gauche&nbsp;: on ajoute un électron à l'instant 0, on le retire à l'instant $t$. Cela n'a de sens que si la place était libre, donc si $|\mathbf p| > p_{\mathrm F}$. C'est la <b>propagation d'un électron</b>.</li>
<li>Pour $t<0$, l'opérateur le plus ancien est celui de gauche dans la moyenne, $\hat a_{\mathbf p}(t)$&nbsp;: on retire un électron à l'instant $t$, on le remet à l'instant 0. Cela n'a de sens que si la place était occupée, donc si $|\mathbf p| < p_{\mathrm F}$. C'est la <b>propagation d'un trou</b>.</li>
</ul>

Voilà l'origine des «&nbsp;deux termes&nbsp;» du propagateur d'un métal&nbsp;: chacun n'existe que d'un côté de la surface de Fermi, et les deux histoires se déroulent dans des sens du temps opposés. Cette opposition se traduit, après transformation de Fourier, par des prescriptions de contour opposées.

<div id="preuve">

<details>
<summary>Transformation de Fourier des deux morceaux&nbsp;:</summary>

En représentation de Heisenberg avec les énergies comptées depuis le potentiel chimique, $\hat a_{\mathbf p}(t) = \mathrm  e^{-\mathrm iE^{(0)}\_{\mathbf p}t}\\,\hat a_{\mathbf p}$.

Au-dessus de la surface, l'état est vide, donc $\langle \hat a_{\mathbf p}\hat a^\dagger_{\mathbf p}\rangle = 1$ et $G(\mathbf p,t) = \mathrm e^{- \mathrm iE^{(0)}_{\mathbf p}t}\\,\theta(t)$. La transformée de Fourier d'une exponentielle tronquée par un échelon ne converge qu'en donnant à $\omega$ une petite partie imaginaire, ici positive&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_0^{\infty}\!\mathrm dt\ \mathrm e^{\mathrm i\omega t}\,\mathrm e^{-\mathrm iE^{(0)}_{\mathbf p}t}
= \frac{\mathrm i}{\omega - E^{(0)}_{\mathbf p} + \mathrm i\epsilon}
$
</p>

En dessous de la surface, l'état est plein, donc $\langle \hat a^\dagger_{\mathbf p}\hat a_{\mathbf p}\rangle = 1$ et $G(\mathbf p,t) = -\mathrm e^{-\mathrm iE^{(0)}_{\mathbf p}t}\\,\theta(-t)$&nbsp;; l'intégrale porte cette fois sur les temps négatifs et exige une partie imaginaire de signe opposé&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\int_{-\infty}^{0}\!\mathrm dt\ \mathrm e^{\mathrm i\omega t}\,\mathrm e^{-\mathrm iE^{(0)}_{\mathbf p}t}
= \frac{\mathrm i}{\omega - E^{(0)}_{\mathbf p} - \mathrm i\epsilon}
$
</p>

Le $\pm\mathrm i\epsilon$ n'est donc pas un ornement&nbsp;: c'est la trace du sens du temps dans lequel chaque histoire se déroule. Le pôle de l'électron est sous l'axe réel, celui du trou est au-dessus.

</details>

</div>

<br>

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\tilde G_0(\mathbf p, \omega) =
\frac{\mathrm i\;\theta(|\mathbf p| - p_{\mathrm F})}{\omega - E^{(0)}_{\mathbf p} + \mathrm i\epsilon}
+ \frac{\mathrm i\;\theta(p_{\mathrm F} - |\mathbf p|)}{\omega - E^{(0)}_{\mathbf p} - \mathrm i\epsilon}
$
</p>

La version <b>habillée</b> s'obtient par la substitution désormais familière&nbsp;: un facteur $Z_{\mathbf p}$ au numérateur, l'énergie renormalisée $E_{\mathbf p}$ au dénominateur, et $\Gamma_{\mathbf p}$ à la place de $\epsilon$&nbsp;; s'ajoute la partie multiparticule, qui est un continuum sans pôle isolé.

</div>

<br>

#### Lire l'occupation sur le propagateur

La quantité que nous voulons prédire est la <b>distribution d'impulsion</b> du fondamental, $n_{\mathbf p} = \langle\hat a^\dagger_{\mathbf p}\hat a_{\mathbf p}\rangle$&nbsp;: le nombre moyen d'électrons d'impulsion $\mathbf p$.

Or regardons la deuxième ligne de la définition du propagateur, celle qui vaut pour $t<0$&nbsp;: elle contient déjà $\langle\hat a^\dagger_{\mathbf p}(0)\\,\hat a_{\mathbf p}(t)\rangle$, c'est-à-dire presque exactement $n_{\mathbf p}$. Il ne manque qu'à ramener les deux opérateurs au même instant, ce qui s'obtient en faisant tendre $t$ vers zéro <i>par valeurs négatives</i>&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
n_{\mathbf p} = -\lim_{t\to0^-} G(\mathbf p, t)
$
</p>

</div>

Trois remarques&nbsp;:

<ul style="margin-top:0.5em;">
<li>Le signe moins&nbsp;: c'est le signe fermionique du produit ordonné, celui que nous avons pris soin d'écrire dans la définition. Pour des bosons, il n'y serait pas.</li>
<li>La limite par la gauche&nbsp;: à $t = 0$ exactement, l'ordre des deux opérateurs est ambigu, et les deux ordres ne donnent pas la même chose puisque $\hat a\hat a^\dagger + \hat a^\dagger\hat a = 1$. Approcher par les temps négatifs est le seul moyen de sélectionner l'ordre $\hat a^\dagger\hat a$, celui qui compte les <i>électrons présents</i>. En approchant par $t\to0^+$, on obtiendrait $1 - n_{\mathbf p}$, c'est-à-dire le nombre de <i>places libres</i>. La limite est un choix d'ordre déguisé en question de continuité.</li>
<li>Le facteur global dépend de la convention. Si le propagateur est défini  avec un $-\mathrm i$ devant la moyenne, cela donne $n_{\mathbf p} = -\mathrm i\lim_{t\to0^-}G$.</li>
</ul>

<br>

#### Le calcul du saut

Il ne reste qu'à mettre le propagateur habillé dans cette formule. Repassons en fréquence&nbsp;:

<p style="text-align:center;">
$\displaystyle
n_{\mathbf p} = -\lim_{t\to0^-}\int\frac{\mathrm d\omega}{2\pi}\,\mathrm e^{-\mathrm i\omega t}\,\tilde G(\mathbf p,\omega)
$
</p>

Pour $t < 0$, le facteur $\mathrm e^{-\mathrm i\omega t} = \mathrm e^{\mathrm i\omega|t|}$ décroît quand $\omega$ a une partie imaginaire <i>positive</i>&nbsp;: on referme donc le contour d'intégration par le haut, et le théorème des résidus ne ramasse que les pôles du demi-plan supérieur.

Et quels sont-ils&nbsp;? Ceux qui portent $-\mathrm i\epsilon$, c'est-à-dire, d'après ce que nous venons d'établir, exactement les pôles de <b>trous</b>, ceux qui n'existent que pour $|\mathbf p| < p_{\mathrm F}$. Le calcul se referme donc tout seul&nbsp;:

<div id="preuve">

<details>
<summary>Le résidu&nbsp;:</summary>

Pour $|\mathbf p| < p_{\mathrm F}$, le terme de quasiparticule du propagateur habillé est $\mathrm iZ_{\mathbf p}/(\omega - E_{\mathbf p} - \mathrm i\Gamma_{\mathbf p})$, de pôle $\omega = E_{\mathbf p} + \mathrm i\Gamma_{\mathbf p}$, situé dans le demi-plan supérieur. En fermant par le haut (donc dans le sens direct)&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\frac{\mathrm d\omega}{2\pi}\,\mathrm e^{-\mathrm i\omega t}\,\frac{\mathrm iZ_{\mathbf p}}{\omega - E_{\mathbf p}-\mathrm i\Gamma_{\mathbf p}}
= \frac{1}{2\pi}\,(2\pi\mathrm i)\,(\mathrm iZ_{\mathbf p})\,\mathrm e^{-\mathrm i(E_{\mathbf p}+\mathrm i\Gamma_{\mathbf p}) t}
\;\xrightarrow[t\to0^-]{}\; -Z_{\mathbf p}
$
</p>

Le moins de la formule de lecture remet le résultat à l'endroit, et il reste $Z_{\mathbf p}$. Pour $|\mathbf p| > p_{\mathrm F}$, le pôle est dans l'autre demi-plan, le contour ne l'attrape pas, et la contribution de quasiparticule est nulle.

</details>

</div>

<p style="text-align:center;">
$\displaystyle
n_{\mathbf p} = Z_{\mathbf p}\,\theta(p_{\mathrm F} - |\mathbf p|) + \big(\text{fond multiparticule, régulier}\big)
$
</p>

Dernière étape, la lecture. Le fond multiparticule est une fonction <b>continue</b> de $|\mathbf p|$&nbsp;: c'est un continuum, sans pôle isolé, donc sans saut. Toute la discontinuité de $n_{\mathbf p}$ est portée par le premier terme, et l'échelon $\theta$ en fixe la position, la surface de Fermi, tandis que $Z_{\mathbf p}$ en fixe la hauteur.

<br>

<div id="theo">

<b>Prédiction</b>&nbsp;: la distribution d'impulsion d'un métal en interaction conserve une <b>discontinuité à la surface de Fermi</b>, mais sa hauteur n'est plus 1&nbsp;: elle vaut $Z_{p_{\mathrm F}}$, le poids de quasiparticule. La marche du gaz de Fermi survit aux interactions, simplement rabotée.

Cette prédiction se teste par diffusion Compton sur les métaux, et l'accord est bon. Le poids de quasiparticule n'est pas une fiction de théoricien&nbsp;: c'est un nombre qu'on mesure.

</div>

<!-- Figure à redessiner (L&B fig. 31.4) : deux panneaux montrant n_p en fonction de |p|. (a) gaz de Fermi : marche parfaite, n_p = 1 jusqu'à p_F puis 0 ; (b) système en interaction : la courbe est arrondie de part et d'autre mais conserve un saut vertical de hauteur Z_{p_F} exactement en p_F. Légende : la discontinuité survit, rabotée à la hauteur Z -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:420px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/distributionimpulsion.png" style="box-shadow:none;background:none;">
</div>

<br>

### Le liquide de Fermi de Landau

Landau propose une autre façon, phénoménologique, de penser les métaux&nbsp;: décrire un métal <i>fortement</i> en interaction comme presque identique au gaz de Fermi libre. L'idée paraît saugrenue&nbsp;: comment des électrons interagissant fortement au sein du métal, comme dans un liquide, pourraient être modélisés par un gaz&nbsp;? Mais c'est pourtant devenu le modèle standard du métal.<br>
Attention&nbsp;: les quasiparticules de Landau ne sont pas celles de la théorie des champs vues plus haut. Nous verrons la différence dans un instant.

L'idée maîtresse est la <b>continuité adiabatique</b>. On allume l'interaction très lentement, et on postule que chaque état propre à une particule du gaz évolue continûment vers un état propre à une particule du liquide. Chaque électron du gaz, y compris ceux enfouis au fond de la mer de Fermi, devient une quasiparticule de Landau&nbsp;: la correspondance est <b>un pour un</b>, et la distribution d'impulsion du fondamental est inchangée. Chaque électron finit habillé par son nuage d'interaction.

<div id="preuve">

Pourquoi la correspondance un pour un tient-elle&nbsp;? Parce que les niveaux d'énergie ne se croisent pas pendant l'allumage. L'argument est le théorème de non-croisement de la mécanique quantique ordinaire&nbsp;: si deux niveaux dégénérés d'énergie $E$ sont couplés par un élément de matrice $\delta$, le hamiltonien $2\times2$

<p style="text-align:center;">
$\displaystyle
H = \begin{pmatrix} E & \delta\\ \delta & E\end{pmatrix}
$
</p>    

a des valeurs propres $E \pm \delta$&nbsp;: les niveaux se <i>repoussent</i> dès qu'un élément de matrice existe entre eux, et ne se croisent jamais. 

La seule exception se produit quand l'élément de matrice est nul par symétrie, et c'est précisément ce qui arrive à une transition de phase (le système trouve un fondamental de symétrie plus basse). 

Donc, <b>en l'absence de transition de phase</b>, l'identité de chaque état est préservée tout au long de l'allumage.

</div>

<!-- Figure à redessiner (L&B fig. 31.7) : niveaux d'énergie en fonction du paramètre d'allumage λ (de 0 à 1). Cinq ou six courbes horizontales qui se déforment ; deux d'entre elles se rapprochent au milieu puis se repoussent visiblement sans se croiser. Annoter « sans interaction » à gauche, « en interaction » à droite. Légende : les niveaux se repoussent et ne se croisent jamais, chaque état garde son identité -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:320px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/repulsionniveaux.png" style="box-shadow:none;background:none;">
</div>

Mesurons l'écart avec les quasiparticules de la théorie des champs.<br>
En théorie des champs, le fondamental $|\Omega\rangle$ ne contient <i>aucune</i> quasiparticule, et l'existence d'une quasiparticule est suspendue à $Z_{\mathbf p} \neq 0$. Chez Landau, le fondamental contient autant de quasiparticules qu'il y avait d'électrons, elles portent la même charge que l'électron (ce qui garantit la conservation de la charge), et leur existence ne doit rien à $Z$.

Où les deux images se rejoignent-elles&nbsp;?<br>
Sur les états faiblement excités. Ajoutons un électron d'impulsion $|\mathbf p'| > p_{\mathrm F}$ et allumons&nbsp;: contrairement aux électrons de la mer, cet électron excité a de l'espace de phase pour diffuser, et il acquiert une durée de vie finie.

Encore cet espace de phase est-il sévèrement restreint par le principe de Pauli&nbsp;: il faut deux états finals au-dessus de $p_{\mathrm F}$ et un partenaire pris juste sous $p_{\mathrm F}$, et la fenêtre d'énergie disponible se referme quadratiquement quand on s'approche de la surface. Le taux de désintégration en découle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Gamma_{\mathbf p} \propto (|\mathbf p| - p_{\mathrm F})^2
$
</p>
<div id="preuve">

<details>
<summary>Détails</summary>

Pour diffuser, l'électron de départ (particule 1, d'énergie $E_1>0$ en plaçant le niveau zéro à l'énergie de Fermi) doit cogner un électron du liquide (particule 2, d'énergie $E_2 < 0$) pour donner naissance à deux électrons déviés (particules 3 et 4). Le principe de Pauli interdit à un électron d'aller sur une place déjà occupée. Or, toute la mer de Fermi (sous le niveau zéro) est complètement pleine&nbsp;! Les particules 3 et 4 sont donc obligées de finir leur course au-dessus de la mer de Fermi&nbsp;: leurs énergies finales doivent être $E_3 > 0$ et $E_4 > 0$.

Et par conservation de l'énergie, $E_1+E_2=E_3+E_4$.<br>
Puisque $E_3$ et $E_4$ sont strictement positifs, leur somme est positive. Cela implique obligatoirement que $(E_1 + E_2) > 0$, et donc que $E_2 > -E_1$.<br>

C'est une grosse contrainte&nbsp;!

<ul style="margin-top:-0em; margin-bottom:-0em;">
<li>Le partenaire de collision (particule 2) ne peut pas être pris n'importe où au fond du liquide : il doit être pris dans une minuscule tranche juste sous la surface de Fermi, d'une épaisseur maximale $E_1$. (C'est le premier facteur limitant, proportionnel à $E_1$).</li>
<li>Une fois la particule 2 choisie, les particules 3 et 4 doivent se partager la petite énergie restante ($E_1 + E_2$). Le nombre de configurations finales possibles est lui aussi proportionnel à cette petite énergie $E_1$. (C'est le second facteur limitant, proportionnel à $E_1$).</li>
</ul>

En multipliant ces deux probabilités (choix du partenaire $\times$ choix de l'état final), on trouve que la probabilité totale de faire une collision (le taux de désintégration $\Gamma$) est proportionnelle à $(E_1)^2$.
Puisque l'énergie $E_1$ est proportionnelle à la distance à la surface $(\vert \mathbf p\vert  - p_{\mathrm F})$, on obtient&nbsp;:
<p style="text-align:center;">
$\displaystyle
\Gamma_{\mathbf p} \propto (\vert{}\mathbf p\vert{} - p_{\mathrm F})^2
$
</p>

</details>

</div>

L'énergie, elle, vaut $E_{\mathbf p} \approx v_{\mathrm F}(|\mathbf p| - p_{\mathrm F})$, linéaire. Près de la surface de Fermi, le linéaire bat toujours le quadratique&nbsp;: $E_{\mathbf p} > \Gamma_{\mathbf p}$, et la quasiparticule est bien définie. Loin de la surface, elle ne l'est plus. <b>La notion de quasiparticule dans un métal n'a de sens qu'au voisinage de la surface de Fermi</b>, et c'est exactement là que vit la physique de basse température.

Le dernier étage de la construction de Landau est un développement de l'énergie d'un état faiblement excité en puissances des écarts d'occupation $\delta n_{\mathbf p} = n_{\mathbf p} - n^{(0)}_{\mathbf p}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = E_g + \sum_{\mathbf p}\,(E^{(0)}_{\mathbf p} - \mu)\,\delta n_{\mathbf p}
+ \frac12\sum_{\mathbf p\mathbf p'} f_{\mathbf p\mathbf p'}\,\delta n_{\mathbf p}\,\delta n_{\mathbf p'} + \cdots
$
</p>

On développe ainsi en une quantité que l'on <i>connaît</i> ($\delta n_{\mathbf p}$, le nombre d'excitations) plutôt qu'en des quantités inaccessibles. Le terme quadratique $f_{\mathbf p\mathbf p'}$ encode toutes les interactions entre quasiparticules&nbsp;; décomposé en polynômes de Legendre (après restauration du spin), il livre les <b>paramètres de Landau</b> $F^{\mathrm s}\_\ell, F^{\mathrm a}_\ell$, un petit jeu de nombres qui fixe les observables&nbsp;: par exemple $m^* = m\\,(1 + F^{\mathrm s}_1)$ pour la masse effective, et la susceptibilité de spin en $1/(1+F^{\mathrm a}_0)$. Une théorie complète du métal tient dans une poignée de constantes phénoménologiques, et les traitements diagrammatiques lourds confirment ses prédictions.

<br>

### Bilan

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
|0\rangle,\ \hat a^\dagger_{\mathbf p},\ m
\;\xrightarrow{\ \text{allumage adiabatique}\ }\;
\hat a^\dagger_{\mathbf p}|\Omega\rangle = Z_{\mathbf p}^{1/2}|{\mathbf p}_\lambda\rangle + \text{multip.}
\;\xrightarrow{\ \tilde G\ }\;
\text{pôle } m_{\mathrm P},\ \text{résidu } \mathrm iZ,\ \text{largeur } \Gamma
\;\xrightarrow{\ \text{métal}\ }\;
\text{saut } Z_{p_{\mathrm F}}\ \text{à la surface de Fermi}
\;\xrightarrow{\ \text{Landau}\ }\;
\Gamma \propto (|\mathbf p|-p_{\mathrm F})^2,\ m^* = m(1+F^{\mathrm s}_1)
$
</p>

</div>

### Pièges

<ul>
<li><b>Deux notions de quasiparticule cohabitent</b> dans ce chapitre et il ne faut pas les confondre&nbsp;: celle de la théorie des champs (le fondamental est vide, l'existence exige $Z_{\mathbf p} \neq 0$) et celle de Landau (le fondamental est plein, correspondance un pour un, aucun besoin de $Z$). Elles ne coïncident que pour les états faiblement excités près de $p_{\mathrm F}$.</li>
<li>La durée de vie est $(2\Gamma_{\mathbf p})^{-1}$ et non $\Gamma_{\mathbf p}^{-1}$&nbsp;: le facteur 2 vient du module carré de la fonction d'onde ($e^{-\Gamma t}$ en amplitude, $e^{-2\Gamma t}$ en probabilité).</li>
<li>Dans le propagateur habillé, $\Gamma_{\mathbf p}$ occupe la place de l'infinitésimal $\epsilon$&nbsp;: la prescription de contour devient une physique (durée de vie finie), ce n'est plus un artifice de calcul.</li>
<li>Une quasiparticule n'a de sens que si $E_{\mathbf p} > \Gamma_{\mathbf p}$&nbsp;: dans un métal, cela restreint la notion au voisinage de la surface de Fermi, puisque $E$ est linéaire et $\Gamma$ quadratique en $(|\mathbf p| - p_{\mathrm F})$.</li>
<li>Le renversement de vocabulaire de la matière condensée&nbsp;: le «&nbsp;vide&nbsp;» d'un métal contient $10^{23}$ particules. Vide signifie «&nbsp;sans excitation&nbsp;», pas «&nbsp;sans rien&nbsp;».</li>
<li>$Z^{1/2}$ est une amplitude, $Z$ un poids (une probabilité)&nbsp;: le saut de $n_{\mathbf p}$ vaut $Z$, l'élément de matrice vaut $Z^{1/2}$.</li>
<li>Dans $n_{\mathbf p} = -\lim_{t\to0^-}G(\mathbf p,t)$, <b>le sens de la limite est le contenu de la formule</b>, pas une précaution&nbsp;: par la gauche on compte les électrons présents, par la droite on compterait les places libres, $1 - n_{\mathbf p}$. Et le signe moins est le signe fermionique du produit ordonné, pas une convention.</li>
<li>Le propagateur d'un métal a <b>deux termes</b> parce que le fondamental est plein&nbsp;: électrons au-dessus de $p_{\mathrm F}$, trous en dessous, avec des prescriptions $\pm\mathrm i\epsilon$ opposées puisque les deux histoires se déroulent dans des sens du temps opposés. Rien de tel dans le vide relativiste, où le même opérateur agit pour toutes les impulsions.</li>
<li>Le facteur global des relations propagateur-observable dépend de la convention adoptée pour le $\mathrm i$&nbsp;: les textes qui posent $G = -\mathrm i\langle T\cdots\rangle$ écrivent $n_{\mathbf p} = -\mathrm i\lim_{t\to0^-}G$. Vérifier la convention avant de comparer deux formules.</li>
<li><b>La renormalisation n'est pas une machine à effacer les infinis</b>. Elle est nécessaire pour toute théorie en interaction, avec ou sans divergences (le gaz d'électrons en a peu, l'électrodynamique quantique en a beaucoup, la physique de l'habillage est la même).</li>
</ul>

<br>

## Le problème (divergences) et sa solution (contretermes)

### Le problème

Le diagnostic tient en trois intégrales, avec $a$ fini et positif&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_a^{\infty}\mathrm dx\, x^n \ \text{diverge pour } n \geq 0
$
</p>

<p style="text-align:center;">
$\displaystyle
\int_a^{\infty}\frac{\mathrm dx}{x} = [\ln x]_a^{\infty} \ \text{diverge}
$
</p>

<p style="text-align:center;">
$\displaystyle
\int_a^{\infty}\frac{\mathrm dx}{x^m} = \frac{a^{-m+1}}{m-1} \ \text{converge pour } m>1
$
</p>

Le deuxième cas, où numérateur et dénominateur portent autant de puissances, s'appelle une divergence <b>logarithmique</b>. 

Reprenons la théorie $\phi^4$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac12(\partial_\mu\phi)^2 - \frac{m^2}{2}\phi^2 - \frac{\lambda}{4!}\phi^4
$
</p>

Et calculons enfin, jusqu'au bout, l'amplitude de diffusion à deux particules au deuxième ordre. Quatre diagrammes contribuent&nbsp;: le vertex nu, et trois boucles (une par canal $s$, $t$, $u$).

<!-- Figure à redessiner (L&B fig. 32.1) : quatre diagrammes de Feynman à quatre pattes externes p1, p2 entrantes et p3, p4 sortantes. (a) le vertex ponctuel -iλ ; (b) la boucle du canal s : deux vertex reliés par deux propagateurs internes q et p1+p2-q ; (c) la boucle du canal t ; (d) la boucle du canal u. Légende : au deuxième ordre, chaque canal apporte une boucle logarithmiquement divergente -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:480px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/quatrepattes.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

Le vertex nu donne $\mathrm i\mathcal M_a = -\mathrm i\lambda$. 

Chaque boucle demande l'intégrale

<p style="text-align:center;">
$\displaystyle
\int_0^{\Lambda}\frac{\mathrm d^4q}{(2\pi)^4}\,
\frac{\mathrm i}{q^2 - m^2 + \mathrm i\epsilon}\,
\frac{\mathrm i}{(p-q)^2 - m^2 + \mathrm i\epsilon}
= -4\mathrm i a \ln\!\Big(\frac{\Lambda}{p}\Big)
$
</p>

où $a$ est une constante numérique dont la valeur exacte ne nous servira pas, et où l'on a coupé l'intégrale à une grande impulsion $\Lambda$. 

Le comptage des puissances annonce le résultat&nbsp;: quatre puissances d'impulsion en haut, quatre en bas, l'intégrale se comporte comme $\int\mathrm d^4q/q^4$, logarithmiquement divergente quand $\Lambda \to \infty$. 

Pour les diagrammes (b) à (d), on obtient ainsi&nbsp;:

<ul style="margin-top:-0em; margin-bottom:-0em;">
<li>$\mathrm{i} \mathcal{M}_{\mathrm{b}}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln \left[\left(p_1+p_2\right)^2\right]\right\}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln s\right\}$</li>
<li>$\mathrm{i} \mathcal{M}_{\mathrm{c}}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln \left[\left(p_1-p_3\right)^2\right]\right\}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln t\right\}$</li>
<li>$\mathrm{i} \mathcal{M}_{\mathrm{d}}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln \left[\left(p_1-p_4\right)^2\right]\right\}=\mathrm{i} a \lambda^2\left\{\ln \Lambda^2-\ln u\right\}$</li>
</ul>

En sommant les quatre diagrammes&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda + \mathrm i a\lambda^2\,\big(3\ln\Lambda^2 - \ln s - \ln t - \ln u\big)
$
</p>

Le terme $3\mathrm i a\lambda^2\ln\Lambda^2 \propto \ln\Lambda$ explose quand $\Lambda\to\infty$. Une prédiction infinie n'est pas une prédiction&nbsp;: c'est un désastre.

</div>

Couper l'intégrale à $\Lambda$ fini est un geste pragmatique parfaitement honorable&nbsp;: cela revient à renoncer délibérément aux détails du champ plus fins que $1/\Lambda$. En matière condensée c'est même la routine (on ignore ce qui est plus petit que l'atome). Pour les particules fondamentales, la justification est moins claire, mais vivons avec, inconfortablement. Le vrai problème est ailleurs&nbsp;: les amplitudes calculées <b>dépendent de $\Lambda$</b>, une constante arbitraire. Il faut l'évacuer.

<br>

### La solution

<div id="def">

Un <b>contreterme</b> est un terme ajouté au lagrangien, choisi pour annuler la dépendance en $\Lambda$ des amplitudes à un ordre donné de la théorie des perturbations. Pour tuer le $3\mathrm ia\lambda^2\ln\Lambda^2 = 6\mathrm ia\lambda^2\ln\Lambda$ ci-dessus, on ajoute

<p style="text-align:center;">
$\displaystyle
\mathcal L \;\to\; \mathcal L + \frac{C^{(2)}}{4!}\phi^4\;
$
avec
$\displaystyle
C^{(2)} = -6a\lambda^2\ln\Lambda
$
</p>

L'exposant $(2)$ rappelle que ce coefficient nettoie le deuxième ordre. Comme le contreterme est en $\phi^4$, il se comporte comme le terme d'interaction et fournit un nouveau vertex de règle de Feynman $\mathrm iC^{(2)}$.

</div>

On recommence alors tout le programme (quantification canonique, développement de Dyson, diagrammes) avec le lagrangien complété, et au deuxième ordre il suffit d'ajouter un diagramme de contreterme&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:180px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagcontreterme.png" style="box-shadow:none;background:none;">
</div>

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M^{(2)} = -\mathrm i\lambda + \mathrm ia\lambda^2\big(3\ln\Lambda^2 - \ln s - \ln t - \ln u\big) + \mathrm iC^{(2)}
= -\mathrm i\lambda - \mathrm ia\lambda^2\,\big(\ln s + \ln t + \ln u\big)
$
</p>

L'amplitude dépend des impulsions (c'est normal, c'est de la physique) mais plus du tout de $\Lambda$. Mission accomplie, au deuxième ordre.

<br>

### Apprivoiser une intégrale quelconque

On pourrait craindre une fuite en avant&nbsp;: et si le troisième ordre exigeait un contreterme en $\phi^6$, puis le vingt-septième ordre 513 contretermes inédits&nbsp;? Une théorie pourrait ne jamais cesser d'absorber de nouveaux types de contretermes. Le miracle de la renormalisation est que, pour une large classe de théories, <b>un petit nombre fixe de types de contretermes suffit à tous les ordres</b> (trois pour l'électrodynamique quantique). Seuls les coefficients $C^{(n)}$ changent d'ordre en ordre, et ils se calculent. Ces théories sont dites <b>renormalisables</b>.

<div id="preuve">

La méthode systématique s'illustre sur le diagramme sunset (une self-énergie à deux boucles).

<!-- Figure à redessiner (L&B fig. 32.3) : le diagramme sunset : une ligne horizontale portant l'impulsion p entre et sort, interrompue par deux vertex reliés par trois propagateurs internes q, k et p-q-k formant un anneau double autour de la ligne. Légende : deux boucles, huit puissances d'impulsion en haut, six en bas, divergence quadratique -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:220px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagsaturne.png" style="box-shadow:none;background:none;">
</div>

L'amplitude correspondante est &nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\mathrm{i} \mathcal{M}=\frac{(-\mathrm{i} \lambda)^2}{6} \int_0^{\Lambda} \frac{\mathrm{d}^4 q}{(2 \pi)^4} \frac{\mathrm{~d}^4 k}{(2 \pi)^4} \frac{\mathrm{i}}{q^2-m^2+\mathrm{i} \epsilon} \frac{\mathrm{i}}{k^2-m^2+\mathrm{i} \epsilon} \frac{\mathrm{i}}{(p-q-k)^2-m^2+\mathrm{i} \epsilon}
$
</p>

Appelons $I$ cette intégrale.

L'idée clé, qui rend tout systématique&nbsp;: <b>un diagramme de Feynman se développe en série de Taylor de l'impulsion externe</b>. 

Pour sunset, la symétrie $\phi \to -\phi$ du lagrangien interdit les puissances impaires, donc

<p style="text-align:center;">
$\displaystyle
I = \alpha + \beta\,p^2 + \gamma\,p^4 + \cdots
$
</p>


Toute la divergence est concentrée dans les <i>coefficients</i> de ce polynôme, et on la localise en dérivant&nbsp;:

<ul style="margin-top:0.5em;">
<li>À $p = 0$, $I = \alpha$. Le comptage de puissances (huit en haut, six en bas) dit que $\alpha$ diverge <b>quadratiquement</b> en $\Lambda$.</li>
<li>Deux dérivations en $p$ retirent deux puissances au numérateur&nbsp;: $I'' = 2\beta$ diverge <b>logarithmiquement</b>.</li>
<li>Deux dérivations de plus rendent l'intégrale convergente&nbsp;: $\gamma$ et la suite sont finis, on s'arrête là.</li>
</ul>

La série de Taylor permet donc d'isoler toute la « maladie » de l'infini dans les tous premiers termes de la série (qui sont de simples constantes), tandis que la queue infinie de la série est totalement saine.

Il faut donc deux contretermes&nbsp;: un coefficient $A$ (quadratique en $\Lambda$) sans facteur cinématique, et un coefficient $B$ (logarithmique) accompagné d'un facteur $p^2$. 

Comment obtenir un facteur $p^2$ depuis le lagrangien&nbsp;? Par un terme de gradient, puisqu'en espace des impulsions $(\partial_\mu\phi)^2 \to p^2$. D'où les contretermes

<p style="text-align:center;">
$\displaystyle
\mathcal L_{\text{ct}} = \frac{A}{2}\phi^2 + \frac{B}{2}(\partial_\mu\phi)^2
$
</p>

Leur règle de Feynman combinée est $\mathrm i\\,(B^{(n)}p^2 + A^{(n)})$ sur une ligne de propagateur.

</div>

<br>

<div id="theo">

Le lagrangien complet de la théorie $\phi^4$ <b>renormalisée</b> s'écrit

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac12(\partial_\mu\phi)^2 - \frac{m^2}{2}\phi^2 - \frac{\lambda}{4!}\phi^4
+ \frac{A}{2}\phi^2 + \frac{B}{2}(\partial_\mu\phi)^2 + \frac{C}{4!}\phi^4
$
</p>    

Observation capitale&nbsp;: <b>chaque contreterme a exactement la même forme qu'un terme déjà présent</b>. Seuls les coefficients diffèrent. Cette coïncidence n'en est pas une, et le paragraphe suivant en révèle le sens.

</div>

<br>

### Ce que les contretermes veulent dire

Nous avons ajouté trois termes au lagrangien&nbsp;: n'avons-nous pas changé la physique&nbsp;? La réponse est le cœur conceptuel du chapitre.

#### Un précédent entièrement classique

Avant toute théorie des champs, un détour par l'oscillateur anharmonique classique&nbsp;:

<p style="text-align:center;">
$\displaystyle
\ddot x + \omega_0^2\,x + \varepsilon\,x^3 = 0
$
</p>

Cherchons sa solution en perturbation, en développant $x = x_0 + \varepsilon x_1 + \cdots$ autour de la solution libre $x_0 = A\cos\omega_0 t$. 

À l'ordre $\varepsilon$, l'équation pour $x_1$ est celle d'un oscillateur de fréquence $\omega_0$ <b>forcé à sa propre fréquence de résonance</b>, puisque $x_0^3$ contient un terme en $\cos\omega_0 t$. La réponse résonnante croît linéairement en temps&nbsp;: on obtient un terme dit <b>séculaire</b>, proportionnel à $t\sin\omega_0 t$, qui diverge quand $t\to\infty$. Le développement perturbatif s'effondre aux grands temps, alors que le mouvement réel est parfaitement borné et périodique.

Le diagnostic n'est pas que la perturbation serait trop forte. C'est que <b>l'anharmonicité change la période de l'oscillateur</b>, et qu'en insistant pour tout écrire en fonction de $\omega_0$, on demande à la série de reproduire un décalage de fréquence en empilant des termes qui divergent. Le remède, dû à Lindstedt et Poincaré, consiste à introduire la vraie fréquence $\omega$ et à écrire l'ancienne en fonction d'elle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\omega_0^2 = \omega^2 - \varepsilon\,\delta\omega^2 + O(\varepsilon^2)
\;\Longrightarrow\;
\ddot x + \omega^2 x + \varepsilon\big(x^3 - \delta\omega^2\,x\big) = 0
$
</p>

Un terme supplémentaire est apparu, $-\varepsilon\\,\delta\omega^2 x$, dont le coefficient est ensuite ajusté ordre par ordre pour annuler les termes séculaires. Et ce terme a la <i>même forme</i> que le terme $\omega^2 x$ déjà présent&nbsp;: c'est un contreterme, au sens plein.

Tout y est déjà, sans une once de théorie quantique des champs&nbsp;: les divergences viennent d'un mauvais choix de paramètre de développement, le remède est un changement de variables vers le paramètre physique, ce changement engendre <i>mécaniquement</i> un terme supplémentaire de forme déjà connue, et son coefficient se fixe ordre par ordre en exigeant un comportement correct. La renormalisation en théorie des champs est le même geste, dans un décor plus intimidant.

#### Le changement de variables, déroulé

Reprenons donc au commencement. Notons désormais $\phi_0$, $m_0$ et $\lambda_0$ les ingrédients du lagrangien de départ, l'indice zéro rappelant qu'aucun des trois n'est mesurable&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac12(\partial_\mu\phi_0)^2 - \frac{m_0^2}{2}\phi_0^2 - \frac{\lambda_0}{4!}\phi_0^4
$
</p>

<b>Premier changement de variables&nbsp;: le champ.</b> Le chapitre précédent nous a appris que le propagateur exact a pour résidu $Z$ au pôle, et non 1&nbsp;: le champ nu ne crée une quasiparticule qu'avec l'amplitude $Z^{1/2}$. Or toutes nos règles de lecture des diagrammes supposent un champ qui crée une particule avec l'amplitude 1. Définissons donc un champ <b>renormalisé</b> $\phi_r$ qui possède cette propriété&nbsp;:

<p style="text-align:center;">
$\displaystyle
\phi_0 = \sqrt Z\,\phi_r
$
</p>

Ce n'est pas une approximation, c'est un choix d'unité pour le champ, aussi anodin que de mesurer une longueur en mètres plutôt qu'en pieds. Substituons, en notant que le facteur $\sqrt Z$ sort de chaque champ&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = \frac{Z}{2}(\partial_\mu\phi_r)^2 - \frac{Z\,m_0^2}{2}\phi_r^2 - \frac{Z^2\lambda_0}{4!}\phi_r^4
$
</p>

<b>Deuxième changement de variables&nbsp;: les paramètres.</b> Les trois coefficients obtenus, $Z$, $Zm_0^2$ et $Z^2\lambda_0$, restent des inconnues non mesurables. Introduisons alors les quantités que l'on mesure vraiment, la masse physique $m_{\mathrm P}$ et le couplage physique $\lambda_{\mathrm P}$, et écrivons chaque coefficient sous la forme «&nbsp;valeur physique, plus un écart&nbsp;»&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
Z = 1 + \delta Z,
\quad
Z\,m_0^2 = m_{\mathrm P}^2 + \delta m^2,
\quad
Z^2\lambda_0 = \lambda_{\mathrm P} + \delta\lambda
$
</p>

</div>

Insistons sur le statut de ces trois lignes&nbsp;: ce sont des <b>définitions</b> de $\delta Z$, $\delta m^2$ et $\delta\lambda$, et non des hypothèses. Quelles que soient les valeurs des quantités nues, les écarts existent et valent, par construction, ce qu'il faut pour que les égalités soient vraies. Aucune information n'a encore été introduite.

<b>Substituons une dernière fois</b>, et regroupons les termes selon qu'ils portent une quantité physique ou un écart&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle
\mathcal L =
\underbrace{\frac12(\partial_\mu\phi_r)^2 - \frac{m_{\mathrm P}^2}{2}\phi_r^2 - \frac{\lambda_{\mathrm P}}{4!}\phi_r^4}_{\text{lagrangien de départ, en variables physiques}}
\;+\;
\underbrace{\frac{\delta Z}{2}(\partial_\mu\phi_r)^2 - \frac{\delta m^2}{2}\phi_r^2 - \frac{\delta\lambda}{4!}\phi_r^4}_{\text{les trois contretermes}}
$
</p>
</div>

Il n'y a rien de plus, et c'est tout le propos. La comparaison terme à terme avec le lagrangien renormalisé écrit plus haut donne l'identification&nbsp;: $B = \delta Z$, $A = -\delta m^2$ et $C = -\delta\lambda$, ou de façon équivalente, en résolvant pour les quantités nues,

<div id="theo">
<p style="text-align:center;">
$\displaystyle
m_0^2 = \frac{m_{\mathrm P}^2 + \delta m^2}{Z},
\qquad
\lambda_0 = \frac{\lambda_{\mathrm P} + \delta\lambda}{Z^2}
$
</p>
</div>

#### Trois moralités

<b>Rien n'a été ajouté.</b> Les deux accolades, réunies, <i>sont</i> le lagrangien nu du départ, identiquement. Nous n'avons pas modifié la théorie&nbsp;: nous avons réécrit la même chose dans d'autres variables, puis rangé les morceaux en deux tas. Le premier tas ressemble à la théorie familière et sera traité comme tel&nbsp;; le second fournit les nouveaux vertex qui annulent les divergences. Ajouter des contretermes et changer de variables sont deux descriptions du même geste.

<b>La forme des contretermes n'est pas une coïncidence.</b> La question était posée à la fin du bloc précédent&nbsp;: pourquoi chaque contreterme a-t-il exactement la forme d'un terme déjà présent&nbsp;? Parce que le changement de variables est <i>linéaire</i> sur le champ et <i>affine</i> sur les coefficients. Une telle opération ne peut que multiplier chaque monôme existant par un facteur&nbsp;: elle est structurellement incapable de fabriquer un monôme d'une forme nouvelle. C'est aussi pourquoi l'apparition d'un contreterme en $\phi^6$ serait un événement grave&nbsp;: elle signifierait que le problème n'est <i>pas</i> réductible à un changement de variables, c'est-à-dire que la théorie n'est pas renormalisable.

<b>Où est passée la physique&nbsp;?</b> Nulle part dans ce qui précède, et c'est normal&nbsp;: un changement de variables ne contient aucune information. La physique entre à l'étape suivante, quand on <i>fixe numériquement</i> les trois écarts en imposant des <b>conditions de renormalisation</b>&nbsp;: que le pôle du propagateur soit bien en $m_{\mathrm P}^2$, que son résidu vaille bien 1, que l'amplitude de diffusion vaille bien $\lambda_{\mathrm P}$ au point de mesure choisi. C'est en résolvant ces conditions, ordre par ordre, que les $\delta$ acquièrent des valeurs, et ces valeurs contiennent précisément les $\ln\Lambda$ qu'il faut pour annuler ceux des boucles. Le chapitre suivant met ce programme en œuvre.

Un mot sur ce «&nbsp;ordre par ordre&nbsp;». Les trois écarts s'annulent quand l'interaction est éteinte&nbsp;: sans interaction, le champ nu crée déjà une particule avec l'amplitude 1 et la masse nue est la masse physique. Ils commencent donc à l'ordre $\lambda$ au moins, ce qui autorise à les traiter comme des quantités perturbatives et explique les exposants des coefficients $C^{(2)}$, $C^{(3)}$, etc. rencontrés plus haut&nbsp;: le <i>type</i> de contreterme est fixé une fois pour toutes par le changement de variables, seule sa valeur numérique se recalcule à chaque ordre.

<b>La renormalisation n'est pas un exercice de dissimulation d'infinis, c'est un exercice de mise en correspondance de la théorie avec le monde réel.</b> Depuis le début, nous développions la théorie des perturbations en puissances de la masse nue $m_0$ et du couplage nu $\lambda_0$, qui ne sont les paramètres d'aucune particule observable. La question posée était absurde, la réponse était infinie&nbsp;: tout est cohérent. En développant autour de $m_{\mathrm P}$ et $\lambda_{\mathrm P}$, les réponses deviennent finies.

Et quelles valeurs prendre pour $m_{\mathrm P}$ et $\lambda_{\mathrm P}$&nbsp;? Celles que la Nature nous donne&nbsp;: on les mesure. Le prix à payer est que les paramètres nus, eux, divergent quand $\Lambda\to\infty$&nbsp;: la charge nue de l'électron est infinie, écrantée par les paires électron-positron virtuelles jusqu'à la valeur finie que nous mesurons. Cela ne dérange personne, car les paramètres nus ne sont pas observables.

<br>

### Le détecteur de divergences, et la question de la renormalisabilité

Reste à savoir, une fois pour toutes, quels diagrammes divergent. La réponse tient dans une analyse dimensionnelle.

<div id="def">

Le <b>degré superficiel de divergence</b> d'un diagramme est

<p style="text-align:center;">
$\displaystyle
D = \big(\text{puissances d'impulsion au numérateur}\big) - \big(\text{puissances au dénominateur}\big)
$
</p>

Si $D > 0$ le diagramme diverge, si $D = 0$ il diverge logarithmiquement, si $D < 0$ il converge (superficiellement&nbsp;: le mot est là parce que des sous-diagrammes peuvent encore faire des misères, notamment dans les théories de jauge).

</div>

<br>

<div id="preuve">

Pour $\phi^4$ en dimension 4, comptons avec $L$ boucles, $B_I$ lignes internes, $B_E$ pattes externes et $V$ vertex. Chaque boucle apporte $\mathrm d^4q$, soit $+4$&nbsp;; chaque propagateur interne apporte $-2$&nbsp;:

$$
D = 4L - 2B_I
$$

Le nombre de boucles est le nombre d'impulsions libres&nbsp;: $B_I$ impulsions internes, moins $V$ fonctions delta de conservation, dont une seule sert à la conservation globale et ne mange pas d'intégrale, d'où $L = B_I - (V - 1)$. Enfin chaque vertex émet quatre lignes, chaque ligne externe touche un vertex et chaque interne en touche deux&nbsp;: $4V = B_E + 2B_I$. En combinant les trois relations, $V$ et $B_I$ s'éliminent et il reste

$$
D = 4 - B_E
$$

</div>

Le résultat est spectaculaire par ce qu'il ne contient <b>pas</b>&nbsp;: ni $V$, ni le nombre de boucles. La divergence d'un diagramme de $\phi^4$ ne dépend que de son nombre de pattes externes. Seuls les diagrammes à $B_E \leq 4$ pattes divergent, les pattes impaires sont interdites par la symétrie $\phi\to-\phi$, et les cas $B_E = 2$ (nos $A$, $B$) et $B_E = 4$ (notre $C$) sont déjà traités&nbsp;: <b>les trois contretermes identifiés sont les seuls qui apparaîtront jamais</b>. La théorie $\phi^4$ est renormalisable, et c'est démontré.

La généralisation tient dans la dimension du couplage. Dans nos unités, l'action est sans dimension, donc $\mathcal L$ a la dimension $[\text{masse}]^4$, d'où $[\phi] = [\text{masse}]$ et $[\lambda] = [\text{masse}]^0$. La règle générale&nbsp;:

<div id="theo">

<ul style="margin-top:1em;">
<li>Couplage de dimension de masse <b>positive</b>&nbsp;: théorie <b>super-renormalisable</b> (un nombre fini de diagrammes divergents en tout).</li>
<li>Couplage <b>sans dimension</b>&nbsp;: théorie <b>renormalisable</b> (divergences à tous les ordres, mais un nombre fini de <i>types</i> de contretermes).</li>
<li>Couplage de dimension <b>négative</b>&nbsp;: théorie <b>non renormalisable</b> (à un ordre assez élevé, tout diverge, et il faut sans cesse de nouveaux contretermes).</li>
</ul>

Exemple emblématique&nbsp;: la théorie de Fermi de l'interaction faible, $\mathcal L = \bar\psi(\mathrm i\gamma^\mu\partial_\mu - m)\psi + G(\bar\psi\psi)^2$. Le terme de masse impose $[\psi] = [\text{masse}]^{3/2}$, donc $[G] = [\text{masse}]^{-2}$&nbsp;: non renormalisable. Son degré superficiel, $D = 4 - \tfrac32 F_E + 2V$, dépend de $V$ ($F_E$ sont les pattes externes de fermions)&nbsp;: chaque ordre de perturbation est plus divergent que le précédent.

</div>

Le mécanisme se comprend par cohérence dimensionnelle&nbsp;: si $\mathcal M_1 \sim G$, le terme suivant $\mathcal M_2 \sim G^2$ doit être compensé par deux puissances d'impulsion, $\mathcal M_2 \sim G^2\Lambda^2$, et ainsi de suite en pire. Mais retournons l'argument&nbsp;: la correction relative $\mathcal M_2 / \mathcal M_1$ est d'ordre $G\Lambda^2$, donc la théorie de Fermi ne pose problème que pour $\Lambda \gtrsim G^{-1/2}$ (petit contrôle dimensionnel au passage&nbsp;: $[G] = [\text{masse}]^{-2}$, l'échelle d'énergie naturelle est bien $G^{-1/2}$, et pour la vraie constante de Fermi cela donne quelques centaines de GeV, précisément l'échelle électrofaible où la théorie de Fermi cède la place à la théorie complète). En dessous de cette échelle, un terme non renormalisable est inoffensif, ses effets sont simplement petits. D'où une lecture moderne vertigineuse&nbsp;: nos théories «&nbsp;renormalisables&nbsp;» de la Nature contiennent peut-être toutes des termes non renormalisables aux coefficients minuscules, invisibles à nos énergies. Nos théories seraient des <b>théories effectives</b> de basse énergie, vouées à céder à haute énergie, et la théorie ultime pourrait ne pas être une théorie des champs du tout.

<br>

### Bilan

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\text{boucles}
\;\xrightarrow{\ \int^{\Lambda}\ }\;
\ln\Lambda,\ \Lambda^2
\;\xrightarrow{\ +\frac A2\phi^2 + \frac B2(\partial\phi)^2 + \frac C{4!}\phi^4\ }\;
\text{amplitudes indépendantes de }\Lambda
\;\xrightarrow{\ \text{lecture}\ }\;
(m,\lambda)\to(m_{\mathrm P},\lambda_{\mathrm P}),\ \phi = \sqrt Z\phi_r
\;\xrightarrow{\ D = 4 - B_E\ }\;
3\ \text{contretermes suffisent}
\;\xrightarrow{\ [g]<0\ }\;
\text{théories effectives}
$
</p>

</div>

### Pièges

<ul>
<li>Que les contretermes aient <b>la même forme</b> que les termes du lagrangien de départ est la condition de tout l'édifice&nbsp;: c'est ce qui permet de les lire comme un simple décalage des paramètres. Un contreterme d'une forme nouvelle (un $\phi^6$) signerait la non-renormalisabilité.</li>
<li>Les coefficients dépendent de l'ordre&nbsp;: $C^{(2)}$, $C^{(3)}$, ... Le <i>type</i> de contreterme est fixe, sa valeur se recalcule ordre par ordre.</li>
<li>«&nbsp;Superficiel&nbsp;» n'est pas un mot décoratif&nbsp;: $D < 0$ ne garantit la convergence qu'en l'absence de sous-diagrammes divergents, et les théories de jauge offrent des contre-exemples.</li>
<li>Le développement de Taylor en l'impulsion externe est le geste qui rend tout fini-dimensionnel&nbsp;: la divergence, objet infini, se range dans un nombre <i>fini</i> de coefficients ($\alpha$, $\beta$), et la symétrie $\phi\to-\phi$ élimine les puissances impaires.</li>
<li>Des paramètres nus infinis ne sont pas un scandale&nbsp;: ils ne sont pas observables. Le scandale serait une <i>prédiction</i> infinie.</li>
<li>Contrôle dimensionnel sur la théorie de Fermi&nbsp;: $[G] = [\text{masse}]^{-2}$, donc l'échelle de rupture est $G^{-1/2}$ (et non $G^{-1}$, qui n'a pas la dimension d'une énergie).</li>
<li>Ne pas oublier la leçon du chapitre précédent&nbsp;: même sans divergences, il faudrait renormaliser. Les infinis rendent le changement de variables obligatoire, ils ne le motivent pas seuls.</li>
</ul>

<br>

## La renormalisation en action&nbsp;: self-énergie et vertex

### La self-énergie et la resommation de Dyson

Le premier chapitre de la partie a donné la forme <i>exacte</i> du propagateur habillé (pôle en $m_{\mathrm P}^2$, résidu $\mathrm iZ$). Et le deuxième chapitre a donné des contretermes. Ce chapitre relie les deux à travers les diagrammes de Feynman, et le mécanisme central est une resommation.

En théorie des perturbations, le propagateur est la somme de tous les diagrammes connexes à deux pattes externes. Pour organiser cette somme, on isole la brique élémentaire&nbsp;:

<div id="def">

Un diagramme est <b>une-particule-irréductible</b> (1PI) s'il reste connexe quand on coupe n'importe laquelle de ses lignes internes, une seule à la fois. Un diagramme non 1PI possède au contraire une «&nbsp;ligne de coupe&nbsp;»&nbsp;: un coup de ciseaux au bon endroit le sépare en deux morceaux. Les diagrammes 1PI sont les plus petits diagrammes non triviaux, les tripes de l'habillage.

</div>

Exemples de diagrammes 1PI dans la théorie $\phi^4$&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:440px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diag1pi.png" style="box-shadow:none;background:none;">
</div>

Et voilà des diagrammes non 1PI&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:440px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/diagnon1pi.png" style="box-shadow:none;background:none;">
</div>

Tous les diagrammes non 1PI peuvent être transformés en des 1PI légitimes avec des coupures aux bons endroits.

<div id="def">

La <b>self-énergie 1PI</b> est la somme de tous les diagrammes 1PI à deux pattes, <i>amputés</i> (on ne compte pas les propagateurs des pattes externes) et sans delta global&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\tilde\Sigma(p) = \sum\begin{pmatrix}\text{diagrammes 1PI amputés}\\ \text{à deux pattes externes}\end{pmatrix}
$
</p>

</div>

Quelques contributions à la self-énergie 1PI dans $\phi^4$&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:440px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/1piself.png" style="box-shadow:none;background:none;">
</div>

Rq&nbsp;: on a représenté des pattes externes sur le 1PI (et sur les diagrammes qui le composent) mais elles sont bien amputées (c'est juste pour rappeler qu'on doit le connecter). On distingue ces moignons en rose.

<div id="preuve">

Voici l'un des plus jolis tours de passe-passe de la théorie des perturbations. Tout diagramme à deux pattes se décompose de façon <i>unique</i> en une chaîne&nbsp;: propagateur libre, puis un bloc 1PI, puis un propagateur libre, puis un autre bloc 1PI, et ainsi de suite (c'est précisément la définition du 1PI qui garantit l'unicité du découpage&nbsp;: on coupe sur toutes les lignes de coupe). Sommer <i>tous</i> les diagrammes revient donc à sommer sur le nombre de blocs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde G(p) = \frac{\mathrm i}{p^2-m^2}
+ \frac{\mathrm i}{p^2-m^2}\big[-\mathrm i\tilde\Sigma\big]\frac{\mathrm i}{p^2-m^2}
+ \frac{\mathrm i}{p^2-m^2}\big[-\mathrm i\tilde\Sigma\big]\frac{\mathrm i}{p^2-m^2}\big[-\mathrm i\tilde\Sigma\big]\frac{\mathrm i}{p^2-m^2}
+ \cdots
$
</p>

C'est une série géométrique de raison $\tilde\Sigma/(p^2-m^2)$, et elle se somme en bloc&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde G(p) = \frac{\mathrm i}{p^2-m^2}\cdot\frac{1}{1 - \dfrac{\tilde\Sigma(p)}{p^2-m^2}}
= \frac{\mathrm i}{p^2 - m^2 - \tilde\Sigma(p) + \mathrm i\epsilon}
$
</p>

On a réinséré à la fin le $\mathrm i\epsilon$ du propagateur libre.

Version graphique&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:340px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/demdyson1pi.png" style="box-shadow:none;background:none;">
</div>


C'est une nouvelle incarnation de l'équation de Dyson. Le propagateur habillé ressemble au propagateur libre, avec la self-énergie logée au dénominateur.

La sommation d'une série géométrique suppose sa convergence, que rien ne garantit ici&nbsp;; on somme formellement, et le résultat se justifie a posteriori par sa cohérence avec la forme exacte du premier chapitre. Et il vaut la peine de savourer le gain&nbsp;: <b>déplacer un pôle est un effet invisible à tout ordre fini</b> (chaque terme de la série a son pôle obstinément en $p^2 = m^2$), mais la resommation de la série entière le produit. La resommation est la porte par laquelle la théorie des perturbations accède à de l'information non perturbative, le pendant constructif du $E \propto 1/\lambda$ des kinks de la partie précédente.

</div>

<br>

### Les conditions de renormalisation

La règle d'or établie au premier chapitre s'applique maintenant au résultat de la resommation&nbsp;: <b>la masse physique est la position du pôle, le poids de quasiparticule est le résidu</b>. 

La position du pôle de $\tilde G$ résout&nbsp;:

<p style="text-align:center;">
$\displaystyle
p^2 - m^2 - \operatorname{Re}\tilde\Sigma(p) = 0
\;\Longrightarrow\;
m_{\mathrm P}^2 = m^2 + \operatorname{Re}\tilde\Sigma(p^2 = m_{\mathrm P}^2)
$
</p>

La partie réelle de la self-énergie est le déplacement de masse dû aux interactions, et sa partie imaginaire donne le taux de désintégration, $\Gamma$ se lisant sur $\operatorname{Im}\tilde\Sigma(m_{\mathrm P}^2)$. Le poids de quasiparticule, lui, se lit sur la <i>pente</i> de la self-énergie au pôle&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z = \frac{1}{1 - \dfrac{\mathrm d\tilde\Sigma}{\mathrm dp^2}\Big|_{p^2=m_{\mathrm P}^2}}
\approx 1 + \frac{\mathrm d\tilde\Sigma}{\mathrm dp^2}\Big|_{p^2=m_{\mathrm P}^2}
$
</p>


<div id="preuve">

<details>
<summary>D'où vient ce résultat&nbsp;?</summary>

Le résidu se lit en approchant le pôle, donc en développant $\tilde\Sigma$ à l'ordre 1 autour de $p^2 = m_{\mathrm P}^2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\Sigma(p^2) \simeq \tilde\Sigma(m_{\mathrm P}^2) + (p^2 - m_{\mathrm P}^2)\,\frac{\mathrm d\tilde\Sigma}{\mathrm dp^2}\Big|_{m_{\mathrm P}^2}
$
</p>

Injectons dans le dénominateur du propagateur resommé&nbsp;:

<p style="text-align:center;">
$\displaystyle
p^2 - m^2 - \tilde\Sigma(p^2)
\simeq
\underbrace{p^2 - m^2 - \tilde\Sigma(m_{\mathrm P}^2)}_{\text{voir ci-dessous}}
- (p^2 - m_{\mathrm P}^2)\,\frac{\mathrm d\tilde\Sigma}{\mathrm dp^2}
$
</p>

L'étape qui fait tout le travail est la suivante&nbsp;: la condition du pôle établie juste au-dessus dit exactement que $m^2 + \tilde\Sigma(m_{\mathrm P}^2) = m_{\mathrm P}^2$. La masse nue et la valeur de la self-énergie au pôle disparaissent donc <i>ensemble</i>, remplacées par la seule masse physique, et le dénominateur se factorise&nbsp;:

<p style="text-align:center;">
$\displaystyle
p^2 - m^2 - \tilde\Sigma(p^2)
\simeq
(p^2 - m_{\mathrm P}^2)\left(1 - \frac{\mathrm d\tilde\Sigma}{\mathrm dp^2}\right)
$
</p>

Le propagateur prend alors la forme exacte annoncée au chapitre sur les [quasiparticules](./#quasiparticules-et-surface-de-fermi), $\tilde G \simeq \mathrm iZ/(p^2 - m_{\mathrm P}^2)$, et l'identification du résidu se lit à vue.

</details>

</div>

La self-énergie ne se contente pas de déplacer la masse par sa <i>valeur</i> au pôle, elle mange aussi une fraction du champ par sa <i>pente</i>. Deux informations distinctes, extraites du même objet à deux ordres du développement.

<div id="theo">

Il y a deux manières de mener les affaires, et les deux se rencontrent dans la littérature&nbsp;:

<ul style="margin-top:0.5em;">
<li><b>Sans contretermes</b>&nbsp;: on garde le lagrangien nu, et la condition $m_{\mathrm P}^2 = m^2 + \operatorname{Re}\tilde\Sigma(m_{\mathrm P}^2)$ dit que la self-énergie <i>déplace</i> la masse, d'un décalage potentiellement infini (le choix logique pour le gaz d'électrons, où les divergences sont bénignes).</li>
<li><b>Avec contretermes</b>&nbsp;: on écrit le lagrangien directement en fonction de $m_{\mathrm P}$, les contretermes entrent dans $\tilde\Sigma$, et la <b>condition de renormalisation</b> devient

<p style="text-align:center;">
$\displaystyle
\operatorname{Re}\tilde\Sigma(p^2 = m_{\mathrm P}^2) = 0
$
</p>

La masse part de la bonne valeur et l'on exige qu'elle n'en bouge plus (le choix de l'électrodynamique quantique).</li>
</ul>

</div>

<br>

### La fonction de vertex et la naissance du point de renormalisation

Le même traitement s'applique au couplage. Physiquement, le couplage change parce que les fluctuations du vide <b>écrantent</b> l'interaction entre deux particules, exactement comme le nuage électronique écrantait la charge test du premier chapitre.

Le plan est calqué sur celui de la self-énergie&nbsp;: isoler un objet qui concentre tout l'habillage du vertex, puis lui imposer une condition qui le relie à une mesure. Mais la deuxième étape va réserver une surprise, et c'est elle qui ouvre le chapitre suivant.

Considérons la fonction de Green à quatre points de la théorie en interaction, celle qui décrit la diffusion de deux particules. Elle contient deux sortes d'information mélangées&nbsp;: ce qui arrive aux particules <i>pendant</i> qu'elles interagissent, et ce qui leur arrive <i>avant et après</i>, c'est-à-dire l'habillage de chacune des quatre pattes, déjà entièrement décrit par la self-énergie de la section précédente.

Compter deux fois la même physique n'aurait aucun sens. On ampute donc les quatre propagateurs complets des pattes externes&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:520px;max-width:100%;">
<img src="/vertexampute.png" style="box-shadow:none;background:none;">
</div>

<div id="def">

La <b>fonction de vertex</b> de la théorie $\phi^4$ est la somme de tous les diagrammes connexes à quatre pattes, amputés&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\tilde\Gamma = \sum\begin{pmatrix}\text{diagrammes connexes à 4 points,}\\ \text{pattes externes amputées}\end{pmatrix}
$
</p>

Autrement dit, la fonction de Green complète à quatre points se reconstruit en rebranchant les propagateurs habillés&nbsp;: $\tilde G(p_1)\tilde G(p_2)\big[-\mathrm i\tilde\Gamma\big]\tilde G(p_3)\tilde G(p_4)$.

</div>

Deux conventions accompagnent cette définition, et les oublier désaccorde tous les facteurs&nbsp;:

<ul style="margin-top:0.5em;">
<li>$-\mathrm i\tilde\Gamma$ <b>n'inclut pas</b> la fonction delta globale de conservation de l'énergie-impulsion, contrairement à la règle de Feynman du vertex nu, qui s'écrit $(2\pi)^4\delta^{(4)}(p_4+p_3-p_2-p_1)\,(-\mathrm i\lambda)$&nbsp;;</li>
<li>le signe est choisi pour qu'<b>au premier ordre</b> on retrouve exactement le vertex nu, $-\mathrm i\tilde\Gamma = -\mathrm i\lambda$. C'est ce choix qui rend légitime de parler de $\tilde\Gamma$ comme d'un «&nbsp;couplage effectif&nbsp;».</li>
</ul>

La fonction de vertex est donc un vertex <i>effectif</i>&nbsp;: elle se branche entre quatre propagateurs comme le vertex nu, mais elle raconte comment les particules <b>réelles</b> interagissent une fois toutes les particules virtuelles prises en compte. Les premières contributions&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:760px;max-width:100%;">
<img src="/vertexcontributions.png" style="box-shadow:none;background:none;">
</div>

Au deuxième ordre, avec le contreterme du chapitre précédent, c'est le calcul que nous avons déjà mené&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\tilde\Gamma(p_1,p_2,p_3) = -\mathrm i\lambda - \mathrm ia\lambda^2\,(\ln s + \ln t + \ln u)
$
</p>


Pour la masse, la marche à suivre était claire&nbsp;: la masse physique est la position du pôle du propagateur, un point remarquable que la fonction porte en elle, sans qu'aucun choix ne soit demandé.

Pour le couplage, rien de tel. La fonction de vertex est une <b>fonction des impulsions</b>, sans pôle ni aucun autre point distingué. Pour en extraire un nombre unique qui mériterait le nom de couplage physique, il faut décider en quelles impulsions on la lit, et rien dans la théorie ne dicte ce choix&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
-\mathrm i\lambda_{\mathrm P} = -\mathrm i\tilde\Gamma(p_1,p_2,p_3)\Big|_{s_0,\,t_0,\,u_0}
$
</p>

Le triplet $(s_0, t_0, u_0)$, librement choisi, s'appelle le <b>point de renormalisation</b>.

</div>

Cette liberté n'est pas un aveu de faiblesse&nbsp;: c'est la situation de tout physicien qui mesure une grandeur relative. On ne mesure jamais une altitude dans l'absolu, mais toujours par rapport à un niveau de référence, et deux cartes qui prennent des références différentes restent parfaitement cohérentes entre elles. Le point de renormalisation est le niveau de la mer du couplage.

Voyons ce choix payer immédiatement sur un calcul en perturbation <i>non</i> renormalisée, c'est-à-dire sans contretermes, en traînant explicitement la coupure $\Lambda$.

<div id="preuve">

Deux expressions sont disponibles, toutes deux au deuxième ordre, et toutes deux divergentes. D'abord la définition du couplage physique, obtenue en lisant $\tilde\Gamma$ au point de renormalisation&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\lambda_{\mathrm P} = -\mathrm i\lambda + \mathrm ia\lambda^2\big(3\ln\Lambda^2 - \ln s_0 - \ln t_0 - \ln u_0\big)
$
</p>

Ensuite l'amplitude que l'on veut prédire, aux impulsions $s$, $t$, $u$ de l'expérience&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda + \mathrm ia\lambda^2\big(3\ln\Lambda^2 - \ln s - \ln t - \ln u\big)
$
</p>

Premier pas, inverser&nbsp;:

On extrait $\lambda$ de la première relation&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\mathrm i\lambda = -\mathrm i\lambda_{\mathrm P} - \mathrm ia\lambda_{\mathrm P}^2\big(3\ln\Lambda^2 - \ln s_0 - \ln t_0 - \ln u_0\big) + O(\lambda^3)
$
</p>

Le remplacement de $\lambda^2$ par $\lambda_{\mathrm P}^2$ dans le terme correctif est légitime&nbsp;: les deux quantités $\lambda$ et $\lambda_p$ ne diffèrent que d'un terme d'ordre $\lambda^2$ d'après la première équation.

Deuxième pas, injecter&nbsp;: 

On reporte dans l'amplitude&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda_{\mathrm P}
+ \mathrm ia\lambda_{\mathrm P}^2\Big[\big(3\ln\Lambda^2 - \ln s - \ln t - \ln u\big) - \big(3\ln\Lambda^2 - \ln s_0 - \ln t_0 - \ln u_0\big)\Big]
$
</p>

Troisième pas, regarder ce qui s'annule&nbsp;: 

Les deux crochets portent <i>le même</i> $3\ln\Lambda^2$, avec le même coefficient, et la soustraction l'élimine. Les logarithmes des impulsions, eux, survivent en se regroupant en rapports&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda_{\mathrm P}
- \mathrm ia\lambda_{\mathrm P}^2\left[\ln\frac{s}{s_0} + \ln\frac{t}{t_0} + \ln\frac{u}{u_0}\right] + O(\lambda^3)
$
</p>

</div>

Le troisième pas mérite qu'on s'y arrête, car c'est lui qui explique <i>pourquoi</i> la manœuvre pouvait réussir. Le terme divergent $3\ln\Lambda^2$ <b>ne dépend pas des impulsions externes</b>&nbsp;: il est le même quelle que soit l'énergie de la collision. Il figure donc à l'identique dans l'amplitude et dans sa valeur au point de référence, et disparaît dès qu'on soustrait l'une de l'autre. Une divergence qui aurait dépendu de $s$, $t$ ou $u$ n'aurait pas pu être absorbée dans la définition d'une constante, et la théorie n'aurait pas été renormalisable. Toute la renormalisabilité tient dans cette indépendance.

Le résultat s'énonce alors simplement&nbsp;: l'amplitude s'exprime en fonction du couplage physique, et les impulsions ne sont mesurées que <i>relativement au point de renormalisation</i>. La version avec contretermes donne le même résultat, sans jamais avoir à transporter de $\ln\Lambda$.

Reste la conclusion, plus grosse qu'elle n'en a l'air. La valeur de $\lambda_{\mathrm P}$ dépend du point $(s_0,t_0,u_0)$ où on l'a définie&nbsp;: le couplage physique n'est pas un nombre, c'est la <b>valeur d'une fonction en un point qu'on a choisi</b>. Deux physiciens ayant choisi des points différents mesurent des couplages différents et décrivent pourtant la même physique, puisque la courbe entière est la même. La question «&nbsp;comment $\lambda_{\mathrm P}$ dépend-il de l'échelle&nbsp;?&nbsp;» est la porte du chapitre suivant.

<div style="position:relative;margin-left:auto;margin-right:auto;width:460px;max-width:100%;">
<img src="/courberen.png" style="box-shadow:none;background:none;">
</div>

<br>

### Bilan

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\text{diagrammes à 2 pattes}
\;\xrightarrow{\ \text{blocs 1PI}\ }\;
\tilde\Sigma(p)
\;\xrightarrow{\ \text{série géométrique (Dyson)}\ }\;
\tilde G = \frac{\mathrm i}{p^2 - m^2 - \tilde\Sigma + \mathrm i\epsilon}
\;\xrightarrow{\ \text{pôle, résidu, Im}\ }\;
m_{\mathrm P},\ Z,\ \Gamma
\;\xrightarrow{\ \text{4 pattes amputées}\ }\;
\tilde\Gamma
\;\xrightarrow{\ (s_0,t_0,u_0)\ }\;
\lambda_{\mathrm P}\ \text{définie à une échelle}
$
</p>
</div>

<br>

### Pièges

<ul>
<li><b>Collision de notations</b>&nbsp;: $\tilde\Gamma$ est la fonction de vertex, $\Gamma_{\mathbf p}$ le taux de désintégration du premier chapitre. Aucun rapport entre les deux.</li>
<li>$\tilde\Sigma$ est définie <b>amputée</b> et <b>sans delta global</b> de conservation&nbsp;: oublier l'une de ces conventions désaccorde tous les facteurs de la resommation.</li>
<li>1PI signifie «&nbsp;survit à la coupure d'<i>une</i> ligne interne&nbsp;»&nbsp;: un diagramme connexe n'est pas forcément 1PI, et c'est l'unicité du découpage en blocs 1PI qui autorise la série géométrique sans double comptage.</li>
<li>La resommation est une somme formelle&nbsp;: sa convergence n'est pas établie, mais elle accomplit ce qu'aucun ordre fini ne peut faire, déplacer le pôle. Tronquer la série après quelques termes redonnerait un pôle en $m$, pas en $m_{\mathrm P}$.</li>
<li>Deux conditions de renormalisation cohabitent&nbsp;: $m_{\mathrm P}^2 = m^2 + \operatorname{Re}\tilde\Sigma$ (sans contretermes, décalage infini assumé) et $\operatorname{Re}\tilde\Sigma(m_{\mathrm P}^2) = 0$ (avec contretermes, masse verrouillée). Savoir laquelle un texte utilise avant de comparer des formules.</li>
<li>La masse est définie par un pôle (sans ambiguïté), le couplage par un <b>choix</b> de point de renormalisation (arbitraire)&nbsp;: cette asymétrie n'est pas un défaut, c'est la graine du groupe de renormalisation.</li>
<li>Le poids se calcule par $Z \approx 1 + \mathrm d\tilde\Sigma/\mathrm dp^2$ au pôle&nbsp;: la self-énergie ne déplace pas seulement la masse, sa <i>pente</i> mange une fraction du champ.</li>
</ul>

<br>

## Le groupe de renormalisation

### Le renversement de Wilson

Notre stratégie jusqu'ici consistait à cacher $\Lambda$&nbsp;: l'introduire pour régulariser, puis l'éliminer des prédictions. Kenneth Wilson propose l'inverse&nbsp;: <b>vivre avec la coupure</b>. Pour définir proprement une théorie, on admet qu'on intègre jusqu'à un $\Lambda$ librement choisi, et le bon choix dépend de la physique visée&nbsp;: pour des ondes sonores dans un gaz (échelle du centimètre), $\Lambda^{-1}$ de quelques microns convient&nbsp;; pour le nuage électronique d'un atome, on prendra $\Lambda^{-1}$ de la taille d'un noyau. La coupure n'est pas une honte, c'est une déclaration d'échelle d'intérêt. La question devient alors&nbsp;: <b>comment les prédictions, et donc les couplages, changent-ils quand on change l'échelle&nbsp;?</b> Répondre à cette question est tout le programme du groupe de renormalisation.

Le chapitre précédent a préparé le terrain sans le dire. Reprenons l'amplitude à deux particules exprimée au point de renormalisation $s_0 = t_0 = u_0 = \mu^2$&nbsp;:

<div id="preuve">

Deux physiciens choisissent deux points de renormalisation $\mu$ et $\mu'$. Chacun écrit la même amplitude physique&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda_{\mathrm P}(\mu) + \mathrm ia\,[\lambda_{\mathrm P}(\mu)]^2\left[\ln\frac{\mu^2}{s} + \ln\frac{\mu^2}{t} + \ln\frac{\mu^2}{u}\right]
$
</p>

<p style="text-align:center;">
$\displaystyle
\mathrm i\mathcal M = -\mathrm i\lambda_{\mathrm P}(\mu') + \mathrm ia\,[\lambda_{\mathrm P}(\mu')]^2\left[\ln\frac{\mu'^2}{s} + \ln\frac{\mu'^2}{t} + \ln\frac{\mu'^2}{u}\right]
$
</p>

En soustrayant les deux expressions (l'amplitude, elle, est unique), les termes en $s,t,u$ s'éliminent et il reste une relation entre les deux couplages&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lambda_{\mathrm P}(\mu') = \lambda_{\mathrm P}(\mu) + 6a\,[\lambda_{\mathrm P}(\mu)]^2\,\ln\frac{\mu'}{\mu} + O(\lambda_{\mathrm P}^3)
$
</p>

soit, sous forme différentielle,


<p style="text-align:center;">
$\displaystyle
\mu\,\frac{\mathrm d\lambda_{\mathrm P}}{\mathrm d\mu} = 6a\,\lambda_{\mathrm P}^2 + O(\lambda_{\mathrm P}^3)
$
</p>


<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>Le passage à la forme différentielle&nbsp;:</summary>

Il suffit de rapprocher les deux points de renormalisation. Posons $\mu' = \mu + \mathrm d\mu$&nbsp;; alors $\ln(\mu'/\mu) = \ln(1 + \mathrm d\mu/\mu) \simeq \mathrm d\mu/\mu$, et la relation entre les deux couplages devient

<p style="text-align:center;">
$\displaystyle
\lambda_{\mathrm P}(\mu + \mathrm d\mu) - \lambda_{\mathrm P}(\mu) = 6a\,\lambda_{\mathrm P}^2\,\frac{\mathrm d\mu}{\mu}
$
</p>
</details>


L'écriture $\mu\\,\mathrm d\lambda_{\mathrm P}/\mathrm d\mu$ n'est donc rien d'autre que $\mathrm d\lambda_{\mathrm P}/\mathrm d\ln\mu$&nbsp;: c'est la variation du couplage par <i>facteur multiplicatif</i> d'échelle, et non par incrément additif. C'est la bonne question à poser, puisque changer d'échelle signifie multiplier une énergie, jamais lui ajouter quelque chose.

Le couplage <b>suit un flot</b> quand l'échelle varie, et l'équation qui le gouverne s'appelle équation de Gell-Mann–Low, ou équation de flot. La limite $\mu\to\infty$ interroge le comportement <b>ultraviolet</b> (hautes énergies, courtes distances), la limite $\mu\to0$ le comportement <b>infrarouge</b> (basses énergies, grandes distances).

</div>

<br>

<div id="def">

Une théorie est un point $(g_1, g_2, \ldots)$ dans l'espace de ses constantes de couplage (pour $\phi^4$&nbsp;: $m$ et $\lambda$). Changer l'échelle déplace ce point le long d'une <b>trajectoire de renormalisation</b>&nbsp;: c'est le <b>flot de renormalisation</b>. 

Pour un seul couplage, on visualise le flot par la <b>fonction $\beta$</b>,

<p style="text-align:center;">
$\displaystyle
\beta(g) = \frac{\mathrm dg}{\mathrm d\ln b}
$<br>
où $b$ est le facteur de changement d'échelle. 
</p>



Les zéros de $\beta$ sont les <b>points fixes</b>&nbsp;: des théories invariantes d'échelle, où le flot s'arrête. Un point fixe est <b>attractif</b> si les trajectoires voisines convergent vers lui, <b>répulsif</b> si elles s'en écartent&nbsp;; et un même point peut être attractif d'un côté, répulsif de l'autre.

</div>

<!-- Figure à redessiner (L&B fig. 34.2) : quatre petits graphes de β(g) en fonction de g, avec des flèches sur l'axe g indiquant le sens du flot. (a) β > 0 partout : flèches vers la droite, g file à l'infini ; (b) β < 0 partout : flèches vers la gauche, g retombe à 0 ; (c) β s'annule en g* en montant : flèches divergeant de g* (point fixe répulsif) ; (d) β s'annule en g* en descendant : flèches convergeant vers g* (point fixe attractif) -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:540px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/gscale.png" style="box-shadow:none;background:none;">
</div>

### La méthode de Wilson en trois pas

La dérivation ci-dessus était un raccourci. La méthode systématique part de l'intégrale fonctionnelle euclidienne $Z(\Lambda) = \int_\Lambda\mathcal D\phi\\,e^{-\int\mathrm d^dx\\,\mathcal L[\phi]}$, où l'indice $\Lambda$ ordonne d'intégrer sur les configurations dont les composantes de Fourier vont jusqu'à $\Lambda$. On découpe le champ en composantes <b>lentes</b> et <b>rapides</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde\phi(p) = \tilde\phi_{\mathrm s}(p)\ \text{pour } 0 \leq |p| \leq \Lambda/b
$
</p>

<p style="text-align:center;">
$\displaystyle
\tilde\phi(p) = \tilde\phi_{\mathrm f}(p)\ \text{pour } \Lambda/b \leq |p| \leq \Lambda
$
</p>

<p style="text-align:center;">
avec $b > 1$.
</p>

Puis trois pas&nbsp;:

<ul style="margin-top:0.5em;">
<li>Pas I&nbsp;: <b>Intégrer les modes rapides.</b> On effectue la partie de l'intégrale fonctionnelle qui porte sur $\phi_{\mathrm f}$. L'effet est celui d'une paire de lunettes qu'on retire&nbsp;: les détails fins disparaissent, le champ a l'air plus lisse. Le résultat se range dans une correction $\delta\mathcal L[\phi_{\mathrm s}]$ à l'action des modes lents. C'est le pas difficile, en général impossible exactement&nbsp;: on le fait en perturbation.</li>
</ul>

<div style="position:relative;margin-left:auto;margin-right:auto;width:240px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/wilson1.png" style="box-shadow:none;background:none;">
</div>

{{%notice note%}}
L'intégrale du pas I n'est pas une intégrale sur les impulsions&nbsp;: c'est l'<b>intégrale fonctionnelle</b>
$\int\mathcal D\phi_{\mathrm f}$, c'est-à-dire une somme sur toutes les<i>configurations possibles</i> du champ rapide. C'est très exactement une marginalisation au sens des probabilités&nbsp;: de même qu'on passe d'une loi jointe à une loi marginale par $P(x)=\int P(x,y)\\,\mathrm dy$, on passe ici de $Z=\int\mathcal D\phi_{\mathrm s}\mathcal D\phi_{\mathrm f}\\,\mathrm e^{-S}$ à $Z=\int\mathcal D\phi_{\mathrm s}\\,\mathrm e^{-S_{\text{eff}}[\phi_{\mathrm s}]}$.<br>
L'anglais dit <i>integrate out</i>, «&nbsp;éliminer par intégration&nbsp;», et le
français perd le <i>out</i> en route.<br><br>
<b>On ne jette pas les modes rapides, on les moyenne</b>. Leur influence survit, encodée dans le $\delta\mathcal L$ qui modifie les couplages des modes lents. Une simple troncature ne produirait aucun flot.
{{%/notice%}}

<ul>
<li>Pas II&nbsp;: <b>Rééchelonner les impulsions</b>. Le champ lissé vit sur $[0, \Lambda/b]$&nbsp;: pour le comparer loyalement à la théorie de départ, on pose $p' = b\,p$, ce qui redéploie l'espace des impulsions sur $[0, \Lambda]$.</li>
</ul>

<div style="position:relative;margin-left:auto;margin-right:auto;width:220px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/wilson2.png" style="box-shadow:none;background:none;">
</div>

<ul>
<li>Pas III&nbsp;: <b>Rééchelonner les champs.</b> On pose $\tilde\phi(p'/b) = b^{\,d - d_\phi}\,\tilde\phi'(p')$, en choisissant l'exposant $d_\phi$ (baptisé, dans le jargon volontiers ésotérique du domaine, <b>dimension anormale</b>) pour laisser invariant le terme jugé dominant, en pratique le terme de gradient.</li>
</ul>

Si tout se passe bien, le lagrangien final a <b>la même forme</b> que le lagrangien initial, avec des couplages modifiés&nbsp;: on a fabriqué la transformation $g_i \to g_i'$, et il suffit de l'itérer en pensée pour engendrer le flot complet. En posant $b = e^\ell$ et en envoyant $\ell\to\infty$, on suit la physique aux grandes longueurs d'onde.


{{%notice note%}}
Le «&nbsp;groupe&nbsp;» de renormalisation n'est pas un groupe, et il vaut la peine de comprendre pourquoi. Les changements d'échelle purs forment bien un groupe, mais l'opération complète (intégrer une coquille de modes rapides, <i>puis</i> rééchelonner) détruit de l'information&nbsp;: les détails fins sont perdus et rien ne permet de les reconstruire. La transformation n'a pas d'inverse&nbsp;: c'est un <b>semi-groupe</b>, au sens des normes académiques françaises (loi de composition interne associative, sans inverses). Cette irréversibilité n'est pas un défaut technique, c'est le contenu physique de la méthode&nbsp;: la physique de basse énergie oublie les détails microscopiques, et c'est précisément ce qui rendra l'universalité possible au chapitre suivant.
{{%/notice%}}

Illustration schématique des trois pas, sur une réalisation d'un champ représenté le long d'une direction&nbsp;:

<div style="position:relative;margin-left:auto;margin-right:auto;width:620px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/signalrenorm.png" style="box-shadow:none;background:none;">
</div>

Comment lire la figure&nbsp;? Après le pas I, le champ (b) est plus lisse que (a), mais c'est trivial&nbsp;: on vient de lui retirer ses hautes fréquences. Surtout, (a) et (b) n'ont pas la même coupure et <b>ne sont pas comparables</b>.<br>
C'est le rétrécissement des pas II et III qui ramène la coupure à $\Lambda$ et rend enfin la comparaison légitime. La comparaison qui porte toute l'information est donc <b>(a) contre (c)</b>, et elle se lit ainsi&nbsp;:
<ul>
<li>(c) statistiquement indiscernable de (a)&nbsp;: on est au <b>point fixe</b>, le système est invariant d'échelle&nbsp;;</li>
<li>(c) plus lisse, tendant vers une valeur uniforme non nulle&nbsp;: le flot va vers la phase <b>ordonnée</b>, la fenêtre finit dans un seul domaine&nbsp;;</li>
<li>(c) plus haché, tendant vers du bruit décorrélé&nbsp;: le flot va vers la phase <b>désordonnée</b>.</li>
</ul>
Dans les deux cas non critiques, la raison est la même&nbsp;: $\xi' = \xi/b$, la longueur de corrélation rétrécit à chaque étape mesurée en unités de la maille. Seul $\xi = \infty$ y résiste, et c'est la définition du point critique.

{{%notice note%}}
<b>Deux limites du dessin, à garder en tête.</b><br><br>
La transformation porte en réalité sur l'<b>action</b>, non sur une configuration particulière&nbsp;: ce que l'on voit ici est une réalisation tirée au sort, pas l'objet sur lequel le groupe de renormalisation agit.<br><br>
Et le passage de (a) à (b) apparaît comme une simple <b>troncature</b>, alors que l'élimination des modes rapides engendre aussi une correction $\delta\mathcal L$ aux couplages des modes lents. Cette moitié-là de l'opération est invisible sur le tracé, et c'est pourtant elle qui porte toute la physique du procédé.
{{%/notice%}}

<br>

### Application 1&nbsp;: la liberté asymptotique

La théorie des perturbations est un développement en puissances des couplages&nbsp;: elle marche là où ils sont petits. Or ils varient avec l'échelle. En électrodynamique quantique, la fonction $\beta$ de la charge est <b>positive</b> ($\mu\\,\mathrm de/\mathrm d\mu = |e|^3/12\pi^2$ au premier ordre, dérivée dans un chapitre ultérieure)&nbsp;: la charge effective croît vers l'ultraviolet et décroît vers l'infrarouge. L'image physique est l'<b>écrantage</b>&nbsp;: le vide, peuplé de paires virtuelles polarisables, se comporte comme un diélectrique, et plus on s'approche de la charge (hautes impulsions), moins elle est masquée, donc plus elle paraît grande. La théorie des perturbations de l'électrodynamique est excellente à basse énergie et se dégrade en montant.

Pour une classe de théories, dont les théories de jauge non abéliennes de Yang–Mills (chapitre ultérieur), la surprise est totale&nbsp;: $\beta$ est <b>négative</b>. Le couplage fond vers l'ultraviolet et enfle vers l'infrarouge. C'est la <b>liberté asymptotique</b>&nbsp;: la théorie est presque libre à haute énergie et férocement couplée à basse énergie. Le vide non abélien <i>anti-écrante</i>, les gluons virtuels portant eux-mêmes la charge de couleur et renforçant le champ au lieu de le masquer. Le phénomène explique d'un coup les deux visages de l'interaction forte&nbsp;: dans les expériences de diffusion profondément inélastique, les quarks frappés à très haute énergie se comportent comme des particules quasi libres, tandis qu'à basse énergie le couplage devient si fort qu'aucun quark ne peut être isolé (on ne les trouve qu'en états liés, mésons et baryons). Une image mécanique aide&nbsp;: des masses reliées par des ressorts interagissent faiblement à courte distance et de plus en plus fort à mesure qu'on les écarte.

<br>

### Application 2&nbsp;: la localisation d'Anderson

Question de matière condensée&nbsp;: un métal cristallin conduit, mais que se passe-t-il quand on le salit de plus en plus&nbsp;? Anderson a compris en 1958 qu'au-delà d'un désordre critique, la diffusion sur les impuretés cesse d'être diffusive&nbsp;: les électrons se <b>localisent</b> dans des états liés et le métal devient isolant. Le point de bascule s'appelle le seuil de mobilité. Le groupe de renormalisation transforme cette intuition en théorème, et Thouless a identifié le bon couplage&nbsp;: la conductance sans dimension $g = \hbar G(L)/e^2$ d'un échantillon de taille $L$, avec pour fonction de flot

<p style="text-align:center;">
$\displaystyle
\beta(g) = \frac{\mathrm d\ln g}{\mathrm d\ln L}
$
</p>

Les deux régimes limites se calculent par analyse dimensionnelle&nbsp;: un métal a $G(L) \propto L^{d-2}$ ($G = \sigma L$ en dimension 3), donc $\beta \approx d-2$ à grand $g$&nbsp;; un isolant a $G \propto e^{-L/\xi}$, donc $\beta \approx \ln g$ à petit $g$, très négatif. En raccordant les deux limites, tout se lit sur le graphe. 


<div style="position:relative;margin-left:auto;margin-right:auto;width:420px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/anderson.png" style="box-shadow:none;background:none;">
</div>


En dimension 3, la courbe $\beta(g)$ traverse zéro en un point fixe répulsif $g_c$&nbsp;: c'est le seuil de mobilité, plus propre que $g_c$le flot emporte vers le métal, plus sale il emporte vers l'isolant. En dimensions 1 et 2, la courbe reste sous zéro&nbsp;: <b>aucun point fixe, aucun seuil</b>. La moindre poussière suffit, à taille assez grande, à rendre le système isolant. Un énoncé profond obtenu en raccordant deux asymptotes.

<br>

### Application 3&nbsp;: la transition de Kosterlitz–Thouless

Voici le plus beau retour sur investissement de la partie précédente. Le théorème de Coleman–Mermin–Wagner interdit toute brisure spontanée d'une symétrie continue en deux dimensions spatiales&nbsp;: pas de transition magnétique ordinaire pour un aimant plan. Et pourtant une transition existe, d'un type entièrement nouveau&nbsp;: une <b>transition de phase topologique</b>, qui sépare deux régimes des <i>vortex</i> (découverts au chapitre sur les objets topologiques).

Le modèle est le champ complexe de module 1, $\phi(\mathbf x) = e^{\mathrm i\theta(\mathbf x)}$, appelé modèle $XY$ bidimensionnel&nbsp;: une flèche plane en chaque point. Nous connaissons déjà l'objet central&nbsp;: le vortex <i>global</i> (non jaugé), dont on avait établi que l'énergie diverge logarithmiquement. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:340px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vortexantivortex.png" style="box-shadow:none;background:none;">
</div>


Ce qui était une pathologie devient ici le moteur de toute la physique. L'action euclidienne d'un vortex vaut

<p style="text-align:center;">
$\displaystyle
S = S^{\text{cœur}}(a) + \pi K\,\ln(L/a)$<br>
avec  $\displaystyle K = \frac{J}{T}$
</p>


où $J$ est la <b>raideur</b> du champ de spins (le coût de ses déformations, la rigidité générique des phases ordonnées), $a$ la taille du cœur et $L$ celle du système.

<div id="preuve">

L'argument d'équilibre énergie-entropie, dû à Kosterlitz et Thouless, tient en quelques lignes et donne déjà la température de transition. 

À température finie, on minimise l'énergie libre $F = U - TS_{\text{ent}}$ et non l'énergie. Un vortex coûte $U = \pi J\ln(L/a)$, mais il rapporte de l'entropie&nbsp;: son cœur peut se placer en $(L/a)^2$ endroits, d'où $S_{\text{ent}} = 2k_{\mathrm B}\ln(L/a)$. 

Le bilan&nbsp;:

<p style="text-align:center;">
$\displaystyle
F = \big(\pi J - 2k_{\mathrm B}T\big)\,\ln(L/a)
$
</p>

Les deux termes croissent avec le <i>même</i> logarithme&nbsp;: la compétition ne dépend pas de la taille, seulement du signe du préfacteur. En dessous de $k_{\mathrm B}T = \pi J/2$, l'énergie gagne et les vortex libres sont interdits&nbsp;; au-dessus, l'entropie gagne et les vortex prolifèrent. 

Ce raisonnement à un seul vortex ignore les interactions entre vortex et l'écrantage mutuel des paires&nbsp;; le traitement complet passe par le flot de renormalisation ci-dessous, et il confirme le seuil.

</div>

L'analyse de renormalisation suit deux couplages en fonction de l'échelle&nbsp;: $K^{-1} = T/J$ (l'inverse de la raideur réduite) et la <b>fugacité</b> $y = e^{-S^{\text{cœur}}(a)}$, qui mesure à quel point le système sent la présence des vortex (petit $y$&nbsp;: cœurs coûteux et rares&nbsp;; grand $y&nbsp;$&nbsp;: vortex libres bon marché).

<!-- Figure à redessiner (L&B fig. 34.9) : plan (K⁻¹ en abscisse, y en ordonnée). Des trajectoires de flot : dans la région de droite, elles montent vers K⁻¹, y → ∞ (annoter « phase haute température ») ; dans le coin inférieur gauche, elles plongent vers l'axe y = 0 et s'y arrêtent (annoter « phase basse température ») ; la séparatrice aboutit au point K⁻¹ = π/2 sur l'axe. Légende : le flot de Kosterlitz–Thouless ; la ligne de points fixes y = 0 se termine en K⁻¹ = π/2 -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:380px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/flowkt.png" style="box-shadow:none;background:none;">
</div>

Le diagramme de flot raconte deux destins. La plupart des trajectoires filent vers $K^{-1}, y \to\infty$ (en haut à droite)&nbsp;: c'est la phase de haute température, où les vortex libres prolifèrent, brouillent le champ à l'infini, et où la raideur cesse de compter. 

Mais en bas à gauche, des trajectoires aboutissent sur des points fixes de l'axe $y = 0$, à $K$ fini&nbsp;: c'est la phase de basse température. La fugacité nulle signifie que les vortex n'y survivent qu'en <b>paires liées vortex-antivortex</b>, des dipôles topologiques&nbsp;: vu de loin, le tourbillon horaire de l'un annule le tourbillon antihoraire de l'autre, le champ redevient uniforme à l'infini, et la paire ne coûte qu'une énergie <i>finie</i>. Le système garde une raideur non nulle, la signature d'un ordre (exotique), sans jamais violer Mermin–Wagner puisque l'aimantation moyenne reste nulle. 

<div style="position:relative;margin-left:auto;margin-right:auto;width:540px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/dipolesvortex.png" style="box-shadow:none;background:none;">
</div>

La transition, à $K^{-1} = \pi/2$ (on retrouve le $k_{\mathrm B}T = \pi J/2$ de l'argument entropique), est le <b>déliement des vortex</b>&nbsp;: en chauffant, les dipôles se dissocient et les charges topologiques se libèrent. Kosterlitz et Thouless ont reçu le prix Nobel 2016 pour cette physique (avec Haldane, et Berezinskii l'avait découverte indépendamment en Union soviétique).

<!-- Figure à redessiner (d'après L&B fig. 34.11 et 34.12) : à gauche, un nuage de symboles + et - appariés deux à deux par de petites ellipses en pointillés (gaz de dipôles, phase basse température) ; à droite, un zoom sur une paire vortex-antivortex avec le champ de flèches : tourbillon antihoraire autour du +, horaire autour du -, et des flèches quasi uniformes loin de la paire. Légende : en dessous de T_KT, les vortex n'existent qu'en dipôles liés dont les tourbillons s'annulent à grande distance -->


<br>

### Bilan

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\lambda_{\mathrm P}(\mu)\ \text{dépend du point choisi}
\;\xrightarrow{\ \text{comparer deux choix}\ }\;
\mu\frac{\mathrm d\lambda_{\mathrm P}}{\mathrm d\mu} = \beta(\lambda_{\mathrm P})
\;\xrightarrow{\ \text{Wilson : intégrer la coquille, redilater}\ }\;
\text{flot des } \{g_i\}
\;\xrightarrow{\ \beta(g^*) = 0\ }\;
\text{points fixes}
\;\xrightarrow{\ \text{applications}\ }\;
\text{liberté asymptotique, localisation, déliement des vortex}
$
</p>
</div>

<br>

### Pièges

<ul>
<li>Le groupe de renormalisation est un <b>semi-groupe</b>&nbsp;: intégrer les modes rapides détruit de l'information, la transformation n'a pas d'inverse. Le nom est un vestige historique.</li>
<li>La fonction $\beta$ se définit différemment selon les problèmes ($\mathrm dg/\mathrm d\ln b$, $\mu\,\mathrm dg/\mathrm d\mu$, $\mathrm d\ln g/\mathrm d\ln L$...). L'idée est toujours la même.</li>
<li>Surveiller le <b>sens du flot</b>&nbsp;: $b > 1$ et $\ell\to\infty$ suivent l'infrarouge (grandes distances, convention de la matière condensée), $\mu\to\infty$ suit l'ultraviolet.</li>
<li>«&nbsp;Constante&nbsp;» de couplage est un abus de langage désormais officiel&nbsp;: tout couplage dépend de l'échelle.</li>
<li>Un point fixe n'est pas une destination garantie&nbsp;: répulsif, il sépare des bassins&nbsp;; attractif, il ne capture que son bassin. Et un flot $g\to\infty$ ne prédit pas une mesure infinie&nbsp;: une physique absente du lagrangien finit toujours par couper le flot.</li>
<li>Électrodynamique et chromodynamique tirent en sens opposés&nbsp;: écrantage ($\beta > 0$, la charge croît vers l'ultraviolet) contre anti-écrantage ($\beta < 0$, liberté asymptotique)&nbsp;; la différence vient de ce que les gluons portent eux-mêmes la charge de couleur.</li>
<li>Kosterlitz–Thouless ne contredit pas Coleman–Mermin–Wagner&nbsp;: aucune symétrie n'est brisée, aucune aimantation n'apparaît. La transition est topologique (déliement de vortex), et le paramètre qui la détecte est la raideur, pas l'ordre.</li>
<li>Les vortex de ce chapitre sont les vortex <b>globaux</b> (non jaugés) du chapitre sur les objets topologiques&nbsp;: leur énergie en $\pi K\ln(L/a)$ est exactement la divergence logarithmique qui les rendait instables à $T = 0$. La température recycle le défaut en physique.</li>
<li>Dans l'argument entropique, tout repose sur le fait que énergie et entropie portent le <i>même</i> $\ln(L/a)$&nbsp;: c'est cette coïncidence de forme qui produit une température de transition finie et indépendante de la taille.</li>
</ul>



{{%notice note%}}
Et maintenant&nbsp;? Nous possédons la méthode complète&nbsp;: éliminer les modes rapides, redilater, lire comment les couplages varient d'une échelle à l'autre. Mais nous ne l'avons encore fait tourner sur aucun système réel, et aucun nombre comparable à une mesure n'en est sorti.<br><br>
La partie suivante y est entièrement consacrée&nbsp;: la transition ferromagnétique du fer passée dans la machine, le point fixe de Wilson–Fisher, les exposants critiques calculés à l'ordre $\varepsilon$, et le miracle de l'<b>universalité</b>, qui veut qu'un barreau de fer, du dioxyde de carbone et un mélange de deux liquides obéissent aux mêmes nombres.
{{%/notice%}}

<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc10">Chapitre précédent</a></td><td><a href="../tqc12">Chapitre suivant</a></td>
    </tr>
</table>
</div>
