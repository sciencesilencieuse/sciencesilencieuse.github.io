+++
title = "TQC-12"
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


# Théorie quantique des champs -- Partie 12

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


## Le ferromagnétisme, un tutoriel de renormalisation

### Une expérience de paillasse, d'abord

Prenons un barreau de fer et un thermomètre. À température ambiante, il est aimanté&nbsp;: il colle au réfrigérateur, une boussole approchée s'affole. Chauffons-le. À <b>1043&nbsp;K</b> (770&nbsp;°C), l'aimantation disparaît d'un coup, et le barreau devient un morceau de métal ordinaire. C'est la <b>température de Curie</b>. Laissons-le refroidir&nbsp;: l'aimantation revient.

Rien d'extraordinaire jusqu'ici. Ce qui l'est, c'est ce qui se passe <i>juste</i> au voisinage de 1043&nbsp;K, dans une fenêtre de quelques degrés.

<ul style="margin-top:0.5em;">
<li>La <b>capacité thermique</b> s'envole. Il faut fournir une énergie démesurée pour gagner un degré, comme si le métal engloutissait la chaleur sans chauffer.</li>
<li>Le fer devient <b>anormalement facile à aimanter</b>&nbsp;: un champ extérieur minuscule produit une réponse macroscopique.</li>
<li>Les domaines magnétiques, ces régions où les spins pointent ensemble, cessent d'avoir une taille caractéristique. Il en existe de toutes les tailles simultanément, du nanomètre à l'échantillon entier.</li>
</ul>

Ce troisième point est le cœur de l'affaire, et il a un équivalent qu'on peut voir à l'œil nu. Au point critique liquide-gaz d'un fluide, les fluctuations de densité atteignent la longueur d'onde de la lumière visible et le fluide, jusque-là transparent, devient laiteux&nbsp;: c'est l'<b>opalescence critique</b>. On <i>voit</i> la longueur de corrélation diverger.

Question concrète&nbsp;: <b>de combien</b> la capacité thermique s'envole-t-elle&nbsp;? À quelle vitesse l'aimantation s'éteint-elle quand on approche de 1043&nbsp;K par en dessous&nbsp;? Ce sont des nombres mesurables, mesurés depuis les années 1960, et le champ moyen se trompe sur leurs valeurs. C'est cet écart que la renormalisation va combler.



### Six nombres à mesurer&nbsp;: les exposants critiques

L'expérience montre que chacune de ces grandeurs suit une <b>loi de puissance</b> près de $T_c$. Introduisons la <b>température réduite</b>, qui mesure l'écart relatif au point critique&nbsp;:

$$
t = \frac{T - T_c}{T_c}
$$


<div id="def">

<ul style="margin-top:1em; margin-bottom:1em;">
<li>$\alpha$, la <b>chaleur spécifique</b>. $C$ est l'énergie qu'il faut fournir pour élever la température d'un degré.

<p style="text-align:center;">$\displaystyle C \sim |t|^{-\alpha}$</p>

Elle <b>diverge</b> en $T_c$ parce que l'énergie apportée ne sert pas à agiter les atomes mais à réorganiser les domaines, à toutes les échelles à la fois.</li>

<li>$\beta$, l'<b>aimantation</b>. $M$ est ce que mesure la boussole&nbsp;: le <b>paramètre d'ordre</b>, nul dans la phase désordonnée, non nul dans la phase ordonnée.

<p style="text-align:center;">$\displaystyle M \sim (-t)^{\beta}$</p>

Elle <b>s'annule</b> en $T_c$, en arrivant avec une tangente verticale.</li>

<li>$\gamma$, la <b>susceptibilité</b>. $\chi = \partial M/\partial B$ mesure l'aimantation obtenue par unité de champ appliqué&nbsp;: la docilité du matériau.

<p style="text-align:center;">$\displaystyle \chi \sim |t|^{-\gamma}$</p>

Elle <b>diverge</b>&nbsp;: au point critique, le système est infiniment influençable.</li>

<li>$\delta$, la <b>réponse au champ à $T_c$ exactement</b>. Là, $\chi$ étant infinie, la réponse cesse d'être linéaire et il faut la caractériser autrement&nbsp;:

<p style="text-align:center;">$\displaystyle M \sim |B|^{1/\delta} \quad\text{à } T = T_c$</p></li>

<li>$\nu$, la <b>longueur de corrélation</b>. $\xi$ est la taille du plus grand domaine cohérent, la distance au-delà de laquelle deux spins s'ignorent.

<p style="text-align:center;">$\displaystyle \xi \sim |t|^{-\nu}$</p>

Elle <b>diverge</b>&nbsp;: c'est elle qu'on voit dans l'opalescence critique, et c'est la grandeur maîtresse dont tout le reste découle.</li>

<li>$\eta$, la <b>dimension anomale</b>. Exactement à $T_c$, la corrélation entre deux spins distants décroît en loi de puissance. L'analyse dimensionnelle naïve prédirait $1/|r|^{d-2}$&nbsp;; l'exposant réel s'en écarte de $\eta$, et cet écart <b>définit</b> $\eta$&nbsp;:

<p style="text-align:center;">$\displaystyle \langle\phi(0)\phi(r)\rangle \sim \frac{1}{|r|^{d-2+\eta}}$</p>

<i>D'où vient la puissance naïve&nbsp;?</i> Dans la théorie libre, le propagateur vaut $1/p^2$ à $T_c$ (masse nulle), et sa transformée de Fourier en dimension $d$ est exactement $\propto 1/r^{d-2}$, c'est-à-dire la fonction de Green du laplacien, celle qui donne $1/4\pi r$ en dimension 3. Autrement dit, $\eta$ mesure de combien les interactions font dévier la corrélation de son comportement de champ libre. Il vaut donc $0$ en champ moyen, par construction.</li>
</ul>

</div>

La théorie de Landau prédit $\beta = 1/2$&nbsp;: l'aimantation s'annulerait comme $\sqrt{T_c - T}$. L'expérience, sur le fer comme sur le nickel, donne plutôt $0{,}33$. L'écart n'est pas une broutille de troisième décimale, c'est une courbe visiblement différente. Et le champ moyen prédit $\alpha = 0$, donc pas de divergence de la chaleur spécifique, alors qu'on la mesure. Il y a bien quelque chose à réparer. Nous établirons ces prédictions en bonne et due forme un peu plus loin, une fois le modèle posé.


<br>

### L'hypothèse de Widom&nbsp;: six exposants, deux nombres

Bien avant le groupe de renormalisation, Widom a remarqué que tous les exposants découlent d'une seule hypothèse sur l'énergie libre réduite $f(t, h)$ (par unité de volume et de température, avec $h$ le champ réduit)&nbsp;:

<div id="theo">

<b>Hypothèse d'échelle de Widom</b>&nbsp;: 

Sous un changement de longueur $L \to bL$,

<p style="text-align:center;">
$\displaystyle
f(t, h) = b^{-d}\, f\big(b^{y_t}\,t,\ b^{y_h}\,h\big)
$
</p>

pour deux exposants $y_t$ et $y_h$ à déterminer. Le facteur $b^{-d}$ vient du $1/L^d$ de la densité d'énergie libre.

</div>

Ce que dit cette hypothèse en français&nbsp;: <i>changer l'échelle d'observation revient à changer la température et le champ</i>. Regarder un aimant critique à travers un objectif deux fois moins puissant donne la même image qu'un aimant observé normalement mais un peu plus loin de $T_c$. C'est cette équivalence qui contraint tout.

#### Le mécanisme&nbsp;: choisir $b$ pour tuer une variable

Toute la force de l'hypothèse tient dans le fait que **$b$ est arbitraire**. La relation vaut pour <i>toute</i> valeur du facteur d'échelle&nbsp;; on a donc le droit de choisir celle qui nous arrange, et le bon choix fait disparaître une variable.

Pour tout ce qui se passe **à champ nul**, on choisit $b$ tel que $b^{y_t}|t| = 1$, c'est-à-dire

$$b = |t|^{-1/y_t}$$

En reportant, l'énergie libre prend la forme

<div id="theo">

<p style="text-align:center;">
$\displaystyle
f(t,h) = |t|^{d/y_t}\;\Phi\!\left(\frac{h}{|t|^{\,y_h/y_t}}\right)
$
</p>

</div>

où $\Phi$ est une fonction inconnue, mais **universelle**, dont nous n'aurons jamais besoin de connaître la forme. Toute la dépendance singulière en température est passée dans le préfacteur $|t|^{d/y_t}$, et il ne reste plus qu'à dériver.

Les cinq premiers exposants suivent alors mécaniquement&nbsp;; le sixième, $\eta$, est d'une autre nature et demandera un objet différent.

<div id="preuve">
<details>
<summary>$\alpha$, $\beta$, $\gamma$&nbsp;: trois dérivations de l'énergie libre&nbsp;:</summary>

Les trois grandeurs sont des dérivées de $f$, et l'on se place à $h = 0$, donc à argument nul dans $\Phi$. Chaque dérivation par rapport à $h$ fera sortir un facteur $|t|^{-y_h/y_t}$, par simple dérivation en chaîne.

$\alpha$, la <b>chaleur spécifique</b>. Elle est la dérivée seconde de l'énergie libre par rapport à la température, donc par rapport à $t$&nbsp;:

<p style="text-align:center;">
$\displaystyle
C \sim \frac{\partial^2 f}{\partial t^2} \sim \frac{\partial^2}{\partial t^2}|t|^{\,d/y_t} \sim |t|^{\,d/y_t - 2}
$
</p>

En comparant avec la définition $C \sim |t|^{-\alpha}$, on identifie $-\alpha = d/y_t - 2$, soit

<p style="text-align:center;">
$\displaystyle \boxed{\ \alpha = 2 - \frac{d}{y_t}\ }$
</p>

$\beta$, l'<b>aimantation</b>. C'est la dérivée première par rapport au champ, prise ensuite en $h = 0$&nbsp;:

<p style="text-align:center;">
$\displaystyle
M = -\frac{\partial f}{\partial h}\bigg|_{h=0}
= -|t|^{\,d/y_t}\;\Phi'(0)\;|t|^{-y_h/y_t}
\sim |t|^{\,(d-y_h)/y_t}
$
</p>

En comparant avec $M \sim (-t)^\beta$&nbsp;:

<p style="text-align:center;">
$\displaystyle \boxed{\ \beta = \frac{d-y_h}{y_t}\ }$
</p>

$\gamma$, la <b>susceptibilité</b>. Une dérivation de plus par rapport à $h$, donc un facteur $|t|^{-y_h/y_t}$ de plus&nbsp;:

<p style="text-align:center;">
$\displaystyle
\chi = \frac{\partial M}{\partial h} \sim |t|^{\,d/y_t}\;|t|^{-2y_h/y_t} = |t|^{\,(d-2y_h)/y_t}
$
</p>

En comparant avec $\chi \sim |t|^{-\gamma}$&nbsp;:

<p style="text-align:center;">
$\displaystyle \boxed{\ \gamma = \frac{2y_h-d}{y_t}\ }$
</p>

</details>

<details>
<summary>$\nu$&nbsp;: la longueur de corrélation, sans passer par $f$&nbsp;:</summary>

Celle-ci ne demande aucune dérivation, seulement la remarque que $\xi$ est une <b>longueur</b>. Sous le changement d'échelle, toutes les longueurs sont divisées par $b$, donc

<p style="text-align:center;">
$\displaystyle \xi(t') = \frac{\xi(t)}{b} \;\text{avec}\; t' = b^{y_t}t$
</p>

Reprenons le même choix, $b = |t|^{-1/y_t}$, qui amène $t'$ à la valeur fixe $\pm 1$&nbsp;:

<p style="text-align:center;">
$\displaystyle \xi(\pm 1) = \xi(t)\,|t|^{1/y_t} \;\Longrightarrow\; \xi(t) = \xi(\pm 1)\;|t|^{-1/y_t}$
</p>

Le facteur $\xi(\pm1)$ est un simple nombre, et on lit

<p style="text-align:center;">
$\displaystyle \boxed{\ \nu = \frac{1}{y_t}\ }$
</p>

Notons au passage que cette dérivation dit quelque chose de fort&nbsp;: <b>$y_t$ n'est rien d'autre que l'inverse de $\nu$</b>. Puisque $y_t$ sera une valeur propre du flot, la longueur de corrélation est directement lue sur la linéarisation autour du point fixe.

</details>

<details>
<summary>$\delta$&nbsp;: un autre choix de $b$&nbsp;:</summary>

Ici la situation change, car on se place <b>exactement à $T_c$</b>, donc $t = 0$. Le choix précédent, $b = |t|^{-1/y_t}$, n'a plus de sens (il divergerait). Mais $b$ étant arbitraire, rien n'empêche de le choisir autrement&nbsp;: cette fois on tue le <i>champ</i> plutôt que la température, en posant $b^{y_h}h = 1$, soit

<p style="text-align:center;">
$\displaystyle b = h^{-1/y_h}$
</p>

L'hypothèse d'échelle donne alors directement

<p style="text-align:center;">
$\displaystyle f(0,h) = h^{\,d/y_h}\,f(0,1)$
</p>

et l'aimantation s'obtient par une dérivation&nbsp;:

<p style="text-align:center;">
$\displaystyle
M = -\frac{\partial f}{\partial h} \sim h^{\,d/y_h - 1} = h^{\,(d-y_h)/y_h}
$
</p>

En comparant avec la définition $M \sim |B|^{1/\delta}$ à $T = T_c$, on identifie $1/\delta = (d-y_h)/y_h$, soit

<p style="text-align:center;">
$\displaystyle \boxed{\ \delta = \frac{y_h}{d-y_h}\ }$
</p>

<b>C'est ici que se voit pourquoi $\delta$ était défini avec un exposant inverse</b>&nbsp;: la grandeur naturelle sortant du calcul est $1/\delta$, et la convention a simplement retourné la fraction pour obtenir un nombre supérieur à 1.

</details>

<details>
<summary>$\eta$&nbsp;: le seul qui demande un ingrédient de plus&nbsp;:</summary>

Cet exposant décrit la <b>fonction de corrélation</b> et non une grandeur thermodynamique. L'hypothèse de Widom, qui ne porte que sur l'énergie libre, ne suffit donc pas à elle seule&nbsp;: il faut un pont entre les deux mondes. Ce pont existe, et c'est un résultat classique de physique statistique.

<b>Le pont&nbsp;: la susceptibilité est l'intégrale des corrélations.</b>

<p style="text-align:center;">
$\displaystyle \chi = \int \mathrm d^dr\;G(r)$
</p>

L'énoncé est intuitif&nbsp;: plus les spins sont corrélés sur de grandes distances, plus le matériau répond en bloc à un champ appliqué. (C'est le théorème de fluctuation-dissipation, sous sa forme la plus simple.)

Rappelons que par définition de $\eta$, la corrélation suit la loi de puissanec $G(r) \sim r^{-(d-2+\eta)}$. Cette même loi vaut encore <i>au voisinage</i> de $T_c$ et non seulement dessus, tant qu'on regarde à des distances $r \ll \xi$&nbsp;; au-delà de $\xi$, la corrélation meurt exponentiellement et ne contribue plus. Autrement dit, on suppose la forme d'échelle

<p style="text-align:center;">
$\displaystyle G(r) = \frac{1}{r^{\,d-2+\eta}}\;g\!\left(\frac{r}{\xi}\right)$
</p>

avec $g(0)$ fini et $g$ qui s'effondre au-delà de 1. C'est là que se cache l'ingrédient supplémentaire annoncé.

L'intégrale est alors coupée à $\xi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\chi \sim \int_0^{\xi}\! r^{\,d-1}\,\mathrm dr\;\; r^{-(d-2+\eta)}
= \int_0^{\xi}\! r^{\,1-\eta}\,\mathrm dr
\;\sim\; \xi^{\,2-\eta}
$
</p>

où le $r^{d-1}$ est le jacobien de l'intégration radiale en dimension $d$. 

En reportant $\xi \sim |t|^{-\nu}$&nbsp;:

<p style="text-align:center;">
$\displaystyle \chi \sim |t|^{-\nu(2-\eta)} \;\Longrightarrow\; \gamma = \nu\,(2-\eta)$
</p>

<b>C'est la relation de Fisher</b>, et elle nous donne $\eta$ gratuitement, puisque $\gamma$ et $\nu$ sont déjà connus&nbsp;:

<p style="text-align:center;">
$\displaystyle
\eta = 2 - \frac{\gamma}{\nu} = 2 - \frac{2y_h-d}{y_t}\times y_t = 2 - (2y_h - d)
$
</p>

<p style="text-align:center;">
$\displaystyle \boxed{\ \eta = 2 + d - 2y_h\ }$
</p>

<b>À retenir&nbsp;: $\eta$ n'est pas au même rang que les cinq autres.</b> Les cinq premiers découlent de la seule hypothèse d'échelle sur $f$&nbsp;; celui-ci a exigé en plus <i>une hypothèse d'échelle sur la fonction de corrélation elle-même</i>, à savoir que la loi de puissance survit au voisinage de $T_c$ avec une coupure en $\xi$. C'est ce supplément qui fait le pont entre corrélations et thermodynamique, et le théorème de fluctuation-dissipation sert de passerelle. Les manuels postulent souvent directement cette forme d'échelle pour $G$&nbsp;; cela revient au même, et fait apparaître $\eta$ comme la <b>dimension anomale</b> du champ, l'écart entre la façon dont $\phi$ se rééchelonne réellement et ce que prédirait l'analyse dimensionnelle.

</details>
</div>

Rassemblons les six formules&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\alpha &= 2 - \frac{d}{y_t}\\
\beta &= \frac{d - y_h}{y_t}\\
\gamma &= \frac{2y_h - d}{y_t}\\
\delta &= \frac{y_h}{d - y_h}\\
\nu &= \frac1{y_t}\\
\eta &= 2 + d - 2y_h
\end{aligned}
$
</p>

</div>

<br>

<div id="preuve">
<details>
<summary>Contrôle&nbsp;: le champ moyen doit correspondre à $y_t = 2$ et $y_h = 3$ en $d = 4$</summary>

<p style="text-align:center;">
$\displaystyle
\alpha = 2-\tfrac42 = 0,\quad
\beta = \tfrac{4-3}{2} = \tfrac12,\quad
\gamma = \tfrac{6-4}{2} = 1,\quad
\delta = \tfrac{3}{4-3} = 3,\quad
\nu = \tfrac12,\quad
\eta = 2+4-6 = 0
$
</p>

C'est exactement le tableau du champ moyen que nous établirons plus loin. Le contrôle est rassurant, et il annonce un résultat de fond&nbsp;: le champ moyen correspondra au <b>point fixe gaussien vu en dimension 4</b>.

</details>
</div>

#### Quatre relations, et un test gratuit

Deux nombres commandent six exposants&nbsp;: il doit donc exister **quatre relations** entre eux, obtenues en éliminant $y_t$ et $y_h$. Elles portent des noms, et l'expérience les vérifie.



| Nom | Relation |
|:---:|:---:|
| Rushbrooke | $\alpha + 2\beta + \gamma = 2$ |
| Widom–Griffith | $\gamma = \beta(\delta - 1)$ |
| Fisher | $\gamma = \nu\\,(2-\eta)$ |
| Josephson (hyperéchelle) | $\nu\\,d = 2 - \alpha$ |

<br>

<div id="preuve">
<details>
<summary>Vérification des quatre&nbsp;:</summary>

<b>Rushbrooke</b>

 Les trois exposants ont le même dénominateur&nbsp;:

<p style="text-align:center;">
$\displaystyle
\alpha + 2\beta + \gamma = 2 - \frac{d}{y_t} + \frac{2(d-y_h) + (2y_h-d)}{y_t} = 2 - \frac{d}{y_t} + \frac{d}{y_t} = 2
$
</p>

<b>Widom–Griffith</b>

<p style="text-align:center;">
$\displaystyle
\beta(\delta-1) = \frac{d-y_h}{y_t}\left(\frac{y_h}{d-y_h}-1\right) = \frac{d-y_h}{y_t}\cdot\frac{2y_h-d}{d-y_h} = \frac{2y_h-d}{y_t} = \gamma
$
</p>

<b>Fisher</b> 

Déjà obtenue plus haut&nbsp;: c'est elle qui nous a livré $\eta$, par l'intégration de la fonction de corrélation. On la retrouve bien sûr en reportant les formules&nbsp;:

<p style="text-align:center;">
$\displaystyle
\nu(2-\eta) = \frac{1}{y_t}\big(2 - 2 - d + 2y_h\big) = \frac{2y_h-d}{y_t} = \gamma
$
</p>

<b>Josephson</b> 

C'est la plus immédiate, puisque $\nu d = d/y_t$ et $2-\alpha = d/y_t$ par définition.

</details>
</div>


<b>Ces quatre relations sont un test remarquablement bon marché.</b> Elles ne demandent <i>aucune théorie</i>&nbsp;: on mesure six exposants sur un matériau, on vérifie qu'ils satisfont les quatre égalités. Si l'hypothèse d'échelle est fausse, cela se voit sans avoir rien calculé. Elle passe l'examen.<br><br>
Une mise en garde, cependant, sur la dernière. La relation de Josephson est la seule où la <b>dimension $d$ apparaît explicitement</b>&nbsp;: on l'appelle pour cela relation d'<b>hyperéchelle</b>. Elle repose sur l'idée que l'énergie libre singulière vaut environ $k_{\mathrm B}T$ par volume de corrélation $\xi^d$, ce qui cesse d'être vrai au-dessus de quatre dimensions. De fait, en champ moyen ($\alpha = 0$, $\nu = 1/2$), elle donnerait $d = 4$&nbsp;: elle n'est satisfaite qu'à la dimension critique supérieure, et échoue au-delà. Les trois autres relations, elles, restent valables en toute dimension.

<br>

Le programme du chapitre est fixé&nbsp;: la machine de Wilson doit produire $y_t$ et $y_h$, en lisant comment $t$ et $h$ évoluent sous le flot.

<br>

### Le modèle, et pourquoi $\phi^4$ convient

Le modèle continu du ferromagnète est le modèle de Landau–Ginzburg, qui n'est autre que la théorie $\phi^4$ euclidienne en dimension $d$&nbsp;:

<p style="text-align:center;">
$\displaystyle
S_{\mathrm E} = \int\mathrm d^dx\left[\frac12(\nabla\phi)^2 + \frac{m^2}{2}\phi^2 + \frac{\lambda}{4!}\phi^4\right]
$<br>
avec $\displaystyle m^2 = a\,(T - T_c)$
</p>


<div id="preuve">

<details>

<summary>Motivation du modèle utilisé</summary>

$\phi$ n'est pas le spin d'un atome. C'est l'<b>aimantation locale moyennée</b> sur un petit bloc contenant beaucoup d'atomes&nbsp;: on a déjà fait une première moyenne, ce qui rend légitime de traiter $\phi(x)$ comme une variable continue plutôt que comme un $\pm1$. C'est le paramètre d'ordre du chapitre, promu au rang de champ.

<b>Pourquoi seulement des puissances paires&nbsp;?</b> Sans champ extérieur, rien ne distingue le haut du bas&nbsp;: retourner tous les spins doit laisser l'énergie inchangée. L'action doit donc être invariante sous $\phi \to -\phi$, symétrie $\mathbb Z_2$. Cela <b>interdit</b> $\phi$, $\phi^3$, $\phi^5$, et ne laisse que les puissances paires.

<b>Pourquoi le terme de gradient&nbsp;?</b> Deux blocs voisins qui pointent dans des directions opposées coûtent de l'énergie d'échange&nbsp;: c'est ce qui donne aux parois de domaines un prix. Le terme $(\nabla\phi)^2$ est le plus simple qui pénalise les variations spatiales, et il est pair comme il se doit.

<b>Pourquoi s'arrêter à $\phi^4$&nbsp;?</b> Trois raisons qui se renforcent. D'abord, il faut au moins $\phi^4$&nbsp;: si $m^2 < 0$ et qu'on s'arrête à $\phi^2$, l'énergie n'a pas de minimum et le modèle s'effondre. C'est $\lambda\phi^4$ qui redresse le potentiel et fabrique les deux puits de la brisure de symétrie. Ensuite, on n'a pas besoin de plus&nbsp;: $\phi^4$ suffit à produire la transition. Enfin, et c'est le plus élégant, <b>le groupe de renormalisation justifie lui-même la troncature</b>&nbsp;: $\phi^6$ et au-delà se révéleront <i>non pertinents</i> au voisinage de la dimension 4, c'est-à-dire qu'ils rétrécissent sous le flot et n'affectent pas les exposants. Ce n'est donc pas une approximation qu'on subit, c'est un résultat, et nous le vérifierons sur un nombre dans quelques pages.

<b>Pourquoi $m^2 = a(T-T_c)$&nbsp;?</b> Les paramètres microscopiques (intégrales d'échange, distances interatomiques) dépendent de la température de façon parfaitement <b>régulière</b>&nbsp;: rien ne devient singulier à l'échelle atomique quand on traverse le point de Curie. On écrit donc le développement de Taylor le plus simple qui change de signe en $T_c$. Toute la singularité de la transition doit émerger du <i>traitement collectif</i>, pas des ingrédients. C'est un point de méthode important&nbsp;: <b>on n'a pas mis la transition dans le modèle</b>.

</details>

</div>

La température entre par le terme de masse&nbsp;: $m^2 > 0$ au-dessus de $T_c$, $m^2 < 0$ en dessous.

<br>

### Ce que prédit le champ moyen

Avant de lancer la machinerie, il faut poser noir sur blanc la thèse que nous allons renverser. Sans cela, aucun des résultats du chapitre ne pourra surprendre.

L'**approximation de champ moyen** consiste à négliger purement et simplement les fluctuations&nbsp;: on suppose que $\phi$ prend une valeur **uniforme** dans tout l'échantillon, et l'on cherche laquelle minimise l'énergie. Le terme de gradient s'annule alors, et il ne reste qu'un potentiel à une variable&nbsp;:

<div id="def">

$$
V(\phi) = \frac{m^2}{2}\phi^2 + \frac{\lambda}{4!}\phi^4
$$

</div>

C'est la théorie de Landau, et tout s'y lit à vue selon le signe de $m^2$.

<div id="theo">
<ul style="margin-top:1em; margin-bottom:1em;">
<li>Si $m^2 > 0$ (donc $T > T_c$), les deux termes sont positifs&nbsp;: le potentiel a un <b>minimum unique en $\phi = 0$</b>. Aucune aimantation, phase <b>paramagnétique</b>.</li>
<br>
<li>Si $m^2 < 0$ (donc $T < T_c$), l'origine devient un maximum local et deux minima symétriques apparaissent en $\phi = \pm\sqrt{-6m^2/\lambda}$. Le système doit en choisir un&nbsp;: aimantation non nulle, phase <b>ferromagnétique</b>, symétrie $\mathbb Z_2$ brisée.</li>
</ul>
</div>

<br>

<div id="preuve">

<details>
<summary>Les minima, et l'exposant $\beta$&nbsp;:</summary>

On annule la dérivée&nbsp;:

<p style="text-align:center;">
$\displaystyle
V'(\phi) = m^2\phi + \frac{\lambda}{6}\phi^3 = \phi\left(m^2 + \frac{\lambda}{6}\phi^2\right) = 0
$
</p>

La solution $\phi = 0$ existe toujours.<br>
Les deux autres, $\phi^2 = -6m^2/\lambda$, n'ont de sens que si $m^2 < 0$ (avec $\lambda > 0$ pour la stabilité). 

En reportant $m^2 = a(T-T_c)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
M = |\phi| = \sqrt{\frac{6a}{\lambda}}\,(T_c - T)^{1/2}
\;\Longrightarrow\;
\boxed{\beta = \tfrac12}
$
</p>

Le même petit calcul livre donc deux choses que le chapitre va contester&nbsp;: <b>la frontière est exactement en $m^2 = 0$</b>, et <b>l'aimantation s'éteint en racine carrée</b>.

</details>

</div>

<br>


<div id="preuve">

<details>
<summary>Les cinq autres exposants&nbsp;:</summary>

$\gamma$, la <b>susceptibilité</b>&nbsp;:<br>
On ajoute un champ, $V \to V - h\phi$, et la condition de minimum devient $m^2\phi + \lambda\phi^3/6 = h$. Au-dessus de $T_c$, $\phi$ est petit et le terme cubique négligeable&nbsp;: $\chi = \partial\phi/\partial h = 1/m^2 \propto t^{-1}$. En dessous, on dérive la condition autour du minimum et l'on trouve $\chi = -1/(2m^2)$. Dans les deux cas $\gamma = 1$&nbsp;; on notera au passage que les amplitudes diffèrent d'un facteur 2 de part et d'autre, alors que l'exposant, lui, est le même&nbsp;: exactement la situation annoncée plus haut à propos des valeurs absolues.

$\delta$, à $T_c$ exactement&nbsp;:<br>
Là $m^2 = 0$, et la condition se réduit à $\lambda\phi^3/6 = h$, soit $M \propto h^{1/3}$, donc $\delta = 3$.

$\nu$ et $\eta$, les <b>corrélations</b>&nbsp;:<br>
Le propagateur de la théorie quadratique est $1/(p^2+m^2)$, dont la transformée décroît en $\mathrm e^{-|m||r|}$&nbsp;: la longueur de corrélation vaut $\xi = 1/|m| \propto |t|^{-1/2}$, d'où $\nu = 1/2$. À $T_c$, $m = 0$ et le propagateur devient $1/p^2$, dont la transformée est exactement $1/|r|^{d-2}$&nbsp;: aucune correction, donc $\eta = 0$.

$\alpha$, la <b>chaleur spécifique</b>&nbsp;:<br>
En reportant le minimum dans $V$, on obtient $V_{\min} = -3m^4/(2\lambda) \propto -t^2$ en dessous de $T_c$, et $V_{\min} = 0$ au-dessus. Une énergie libre quadratique en $t$ donne une chaleur spécifique <b>constante</b>&nbsp;: il y a un saut fini à la traversée, mais aucune divergence. C'est ce qu'on note $\alpha = 0$.

</details>

</div>

Rassemblons les prédictions du champ moyen&nbsp;:


| $\alpha$ | $\beta$ | $\gamma$ | $\delta$ | $\nu$ | $\eta$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 1/2 | 1 | 3 | 1/2 | 0 |


Voilà donc ce que le champ moyen affirme, et que la suite du chapitre va mettre à mal sur deux fronts distincts.



Les deux thèses à retenir, car ce sont elles que la renormalisation va renverser&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li><b>Thèse 1, sur la frontière</b>. Le signe de $m^2$ <i>est</i> la phase. La transition se produit exactement en $m^2 = 0$, c'est-à-dire à $T = T_c$. Il n'y a rien à discuter&nbsp;: on regarde le signe, on lit la phase.</li>
<li><b>Thèse 2, sur les exposants</b>. Les six nombres du tableau ci-dessus sont des fractions simples, universelles, et indépendantes de la dimension de l'espace.</li>
</ul>

La <b>thèse 2 est fausse</b> en dessous de quatre dimensions&nbsp;: on mesure $\beta \approx 0{,}33$ et non $1/2$, et c'était l'énigme ouverte depuis 1945.<br><br>
La <b>thèse 1 est fausse aussi</b>, et c'est plus inattendu&nbsp;: nous verrons que la vraie frontière entre les phases n'est pas la ligne $m^2 = 0$, mais une séparatrice passant par un point situé à $m^2 < 0$. Autrement dit, il existe des systèmes à masse carrée négative qui restent pourtant désordonnés&nbsp;: <b>les fluctuations peuvent voler la transition au champ moyen</b>.


<br>


### L'échauffement gaussien

Avant d'affronter le cas général, faisons tourner la machine sur le seul cas où elle marche **exactement**&nbsp;: la théorie libre $\lambda = 0$, dite **modèle gaussien**. Deux raisons à ce détour. D'abord il ne coûte rien, tous les pas s'y font sans approximation. Ensuite le résultat servira de référence permanente&nbsp;: le modèle gaussien est un point fixe, et c'est celui autour duquel tout le reste s'organisera.

<div id="preuve">
<details>
<summary>Rappel de la recette</summary>

On se donne un facteur de dilatation $b > 1$ et une coupure $\Lambda$ sur les impulsions. Les modes se séparent alors en <b>lents</b> ($|p| < \Lambda/b$) et <b>rapides</b> ($\Lambda/b \le |p| \le \Lambda$), ces derniers occupant ce qu'on appelle la <b>coquille</b>.
<ul style="margin-top:0.5em;">
<li><b>Pas I</b>&nbsp;: éliminer les modes rapides en intégrant sur toutes leurs configurations. Leur influence ne disparaît pas, elle se dépose dans une correction $\delta\mathcal L$ aux couplages des modes lents.</li>
<li><b>Pas II</b>&nbsp;: contracter les longueurs, $x' = x/b$, ce qui ramène la coupure de $\Lambda/b$ à $\Lambda$ et rend la nouvelle théorie comparable à l'ancienne.</li>
<li><b>Pas III</b>&nbsp;: rééchelonner le champ pour fixer la normalisation.</li>
</ul>
Au bout des trois pas, on retrouve une théorie de la même forme, mais avec des couplages différents. Comparer les anciens aux nouveaux, c'est lire le <b>flot</b>.

</details>
</div>



**Pas I&nbsp;: il ne se passe rien.**

<div id="preuve">

<details>
<summary>Pourquoi l'élimination des modes rapides ne produit aucun effet&nbsp;?</summary>

En espace de Fourier, l'action libre s'écrit

<p style="text-align:center;">
$\displaystyle
S = \frac12\int_{|p|<\Lambda}\frac{\mathrm d^dp}{(2\pi)^d}\;\tilde\phi(-p)\,(p^2+m^2)\,\tilde\phi(p)
$
</p>

Elle est <b>diagonale en $p$</b>&nbsp;: chaque mode n'y apparaît qu'avec lui-même, jamais couplé à un autre. Ce n'est pas un hasard, c'est la conséquence de deux propriétés. L'action est <b>quadratique</b> (aucun produit de trois champs ou plus qui mélangerait les impulsions) et <b>invariante par translation</b> (d'où la conservation de l'impulsion, qui apparie $p$ avec $-p$ et rien d'autre).

Conséquence immédiate&nbsp;: en séparant $\phi = \phi_{\mathrm s} + \phi_{\mathrm f}$, il n'y a <b>aucun terme croisé</b>, et l'action se scinde exactement&nbsp;:

<p style="text-align:center;">
$\displaystyle
S[\phi] = S[\phi_{\mathrm s}] + S[\phi_{\mathrm f}]
$
</p>

L'intégrale fonctionnelle se factorise donc&nbsp;:

<p style="text-align:center;">
$\displaystyle
Z = \int\mathcal D\phi_{\mathrm s}\,\mathrm e^{-S[\phi_{\mathrm s}]}\times\underbrace{\int\mathcal D\phi_{\mathrm f}\,\mathrm e^{-S[\phi_{\mathrm f}]}}_{\text{un nombre}}
$
</p>

Le second facteur ne dépend pas de $\phi_{\mathrm s}$&nbsp;: c'est une constante multiplicative. Or une constante dans $Z$ ne fait que décaler l'énergie libre d'un terme fixe&nbsp;; elle ne modifie aucune fonction de corrélation, et ne contribue à aucun comportement singulier. <b>Le pas I ne produit donc strictement aucun $\delta\mathcal L$.</b>

C'est exactement ce qui cessera d'être vrai dès que $\lambda \neq 0$&nbsp;: le terme $\phi^4$ contient des produits du type $\phi_{\mathrm s}\phi_{\mathrm s}\phi_{\mathrm f}\phi_{\mathrm f}$, qui couplent les deux familles et empêchent la factorisation. Tout le flot du chapitre naîtra de ces termes croisés.

</details>

</div>

**Pas II et III&nbsp;: tout se joue là.** Puisque le pas I n'apporte rien, le flot gaussien est un pur effet de changement d'échelle, c'est-à-dire une affaire d'analyse dimensionnelle.

Le **pas II** ramène la coupure de $\Lambda/b$ à $\Lambda$ en contractant les longueurs&nbsp;:

<p style="text-align:center;">
$\displaystyle x' = \frac{x}{b}$
</p>

Le **pas III** rééchelonne le champ. Mais de combien&nbsp;? Écrivons l'opération avec un exposant encore inconnu, que l'on appellera **dimension d'échelle du champ**&nbsp;:

<div id="def">
<p style="text-align:center;">
$\displaystyle \phi'(x') = b^{\,d_\phi}\,\phi(x)$
</p>
</div>

Il faut maintenant fixer $d_\phi$, et cela demande une **convention**&nbsp;: sans elle, deux théories ne seraient jamais comparables, puisqu'on pourrait toujours absorber une différence dans un rééchelonnement du champ. On choisit de maintenir le coefficient du terme de gradient à sa valeur $\tfrac12$. Ce choix n'est pas «&nbsp;indifférent&nbsp;»&nbsp;: c'est le terme de gradient qui définit ce qu'on appelle «&nbsp;le champ&nbsp;», et le garder fixe revient à décider que l'unité de mesure de $\phi$ ne bouge pas d'un tour de manivelle à l'autre.

<div id="preuve">

<details>
<summary>La convention fixe $d_\phi = (d-2)/2$&nbsp;</summary>

Sous $x = bx'$, deux choses changent dans l'intégrale&nbsp;: la mesure, $\mathrm d^dx = b^d\\,\mathrm d^dx'$, et le gradient, $\nabla_x = b^{-1}\nabla_{x'}$. Comme le gradient est au carré, le terme devient

<p style="text-align:center;">
$\displaystyle
\int\mathrm d^dx\,\frac12(\nabla_x\phi)^2 = b^{\,d}\times b^{-2}\int\mathrm d^dx'\,\frac12(\nabla_{x'}\phi)^2 = b^{\,d-2}\int\mathrm d^dx'\,\frac12(\nabla_{x'}\phi)^2
$
</p>

On remplace ensuite $\phi$ par $b^{-d_\phi}\phi'$, ce qui apporte $b^{-2d_\phi}$ puisque le champ apparaît deux fois. Pour que le coefficient revienne à $\tfrac12$, il faut que le produit des deux facteurs vaille 1&nbsp;:

<p style="text-align:center;">
$\displaystyle
b^{\,d-2}\times b^{-2d_\phi} = 1
\;\Longrightarrow\;
d - 2 - 2d_\phi = 0
\;\Longrightarrow\;
d_\phi = \frac{d-2}{2}
$
</p>

<b>Ce nombre n'est autre que la dimension de masse[^1] du champ</b> en dimension $d$&nbsp;: c'est ce que donne l'analyse dimensionnelle appliquée à $\int\mathrm d^dx\\,(\nabla\phi)^2$, qui doit être sans dimension. Le pas III est donc, au point fixe gaussien, de l'analyse dimensionnelle et rien d'autre.

</details>

</div>

[^1]: On parle de dimension de masse car toutes les dimensions peuvent se ramener à la masse en TQC (avec $c=\hbar=1$). L'énergie est de la masse alors que la distance et le temps sont des inverses de masse. Dans le cas qui nous intéresse, on veut $[\mathrm d^d x][(\nabla \phi)^2]=1$. Et comme $[\mathrm d^d x]=1/M^d$ et $[(\nabla \phi)^2]=[\phi]^2\times M^2$, on retrouve bien que $[\phi]=M^{\frac{d-2}{2}}$.

<br>

<div id="preuve">

<details>
<summary>Les deux couplages suivent&nbsp;: obtention de $m'^2$ et de $h'$</summary>

$d_\phi$ étant fixé, il n'y a plus qu'à faire subir aux autres termes le même traitement&nbsp;: la mesure apporte $b^d$, et chaque facteur $\phi$ apporte $b^{-d_\phi}$.

<b>Le terme de masse</b> contient <i>deux</i> champs, donc $b^{-2d_\phi} = b^{-(d-2)}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm d^dx\,\frac{m^2}{2}\phi^2
= b^{\,d}\times b^{-(d-2)}\int\mathrm d^dx'\,\frac{m^2}{2}\phi'^2
= \int\mathrm d^dx'\,\frac{\overbrace{b^{2}m^2}^{m'^2}}{2}\,\phi'^2
$
</p>

L'exposant se calcule sans peine&nbsp;: $d - (d-2) = 2$. D'où&nbsp;:

<p style="text-align:center;">
$\displaystyle m'^2 = b^{2}\,m^2$
</p>

<b>Le terme de champ extérieur</b>, lui, ne contient qu'<i>un seul</i> champ, donc un seul facteur $b^{-d_\phi}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm d^dx\,(-h\phi)
= b^{\,d}\times b^{-\frac{d-2}{2}}\int\mathrm d^dx'\,(-h\,\phi')
= \int\mathrm d^dx'\,(-\underbrace{b^{\frac{d+2}{2}}h}_{h'}\,\phi')
$
</p>

avec $d - \dfrac{d-2}{2} = \dfrac{2d-d+2}{2} = \dfrac{d+2}{2}$. D'où&nbsp;:

<p style="text-align:center;">
 $\displaystyle h' = b^{\frac{d+2}{2}}\,h$
</p>

<b>Toute la différence entre les deux vient donc du nombre de champs</b> présents dans le terme&nbsp;: deux pour la masse, un pour le champ extérieur. C'est cette remarque qui va se généraliser à la section suivante.

</details>

</div>

On obtient donc, sans la moindre approximation&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
m'^2 = b^2\,m^2\;\Longrightarrow\;
y_t = 2
$
</p>

<p style="text-align:center;">
$\displaystyle
h' = b^{\frac{d+2}{2}}\,h
\;\Longrightarrow\;
y_h = \frac{d+2}{2}
$
</p>

</div>


Les deux exposants sont **positifs**, et $b > 1$ puisqu'on regarde de plus en plus grand. Chaque tour de manivelle, c'est-à-dire chaque application de la transformation, multiplie donc $m^2$ par $b^2 > 1$ et $h$ par $b^{(d+2)/2} > 1$. Après $n$ tours, les facteurs sont $b^{2n}$ et $b^{n(d+2)/2}$&nbsp;: les deux couplages **s'échappent** vers l'infini.

<div id="theo">

<ul style="margin-top:1em; margin-bottom:1em;">
<li>Un couplage dont l'exposant est <b>positif</b> grandit sous le flot&nbsp;: on le dit <b>pertinent</b></li>
<li>S'il est <b>négatif</b>, le couplage rétrécit et finit par disparaître&nbsp;: il est <b>non pertinent</b>.</li>
<li>S'il est <b>nul</b>, le couplage ne bouge pas à cet ordre et l'on doit regarder plus finement&nbsp;: il est <b>marginal</b>.</li>
</ul>

</div>

Le contenu physique mérite qu'on s'y arrête, car ces mots ne sont pas du jargon.

Prenons $m^2 \propto (T - T_c)$, et supposons-le petit mais non nul&nbsp;: nous sommes tout près du point critique, sans y être. Le flot dit qu'en regardant à des échelles de plus en plus grandes, le système paraît de **plus en plus loin** de sa température critique. C'est cohérent avec ce que nous savons déjà&nbsp;: $\xi' = \xi/b$, la longueur de corrélation rétrécit en unités de la maille, et comme $\xi \sim 1/m$, cela redonne exactement $m' = bm$.

<b>La conséquence est la définition même de la criticité</b>. Puisque toute valeur non nulle de $m^2$ s'échappe, la seule façon de rester au point fixe est de partir <b>exactement</b> de $m^2 = 0$, c'est-à-dire de régler la température à $T_c$ à la perfection. Et comme $h$ est pertinent lui aussi, il faut de même annuler le champ extérieur.<br><br>
Deux directions pertinentes, donc <b>deux paramètres à régler</b> pour atteindre la criticité&nbsp;: c'est pourquoi le point critique est un <i>point</i> dans le plan $(T, h)$, et non une ligne ou une région. Un expérimentateur qui cherche la criticité doit ajuster deux boutons, et tout écart, si petit soit-il, finit par le chasser du point fixe.

<br>

#### Le comptage de puissances, en une formule

La seule chose qui distinguait le terme de masse du terme de champ était le nombre de champs qu'ils contiennent, deux contre un. Rien d'autre n'est intervenu. On peut donc faire le calcul une bonne fois pour toutes, pour un terme comportant $n$ champs.

<div id="preuve">

<details>
<summary>Le calcul général, pour un terme à $n$ champs</summary>

Considérons un terme quelconque de l'action, de couplage $g_n$&nbsp;:

<p style="text-align:center;">
$\displaystyle \int\mathrm d^dx\;g_n\,\big[\phi(x)\big]^n$
</p>

Deux substitutions, et deux seulement&nbsp;:

<ul style="margin-top:0.5em;">
<li>la mesure&nbsp;: $\mathrm d^dx = b^{\,d}\,\mathrm d^dx'$, ce qui apporte un facteur $b^{\,d}$&nbsp;;</li>
<li>les champs&nbsp;: $\phi(x) = b^{-d_\phi}\phi'(x')$, et comme il y en a $n$, cela apporte $b^{-n\,d_\phi}$.</li>
</ul>

En reportant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int\mathrm d^dx\;g_n\,\phi^n
= b^{\,d}\times b^{-n\,d_\phi}\int\mathrm d^dx'\;g_n\,\phi'^n
= \int\mathrm d^dx'\;\underbrace{\Big(b^{\,d - n\,d_\phi}\,g_n\Big)}_{\textstyle g_n'}\;\phi'^n
$
</p>

Le terme a donc gardé exactement la même <i>forme</i>&nbsp;; seul son coefficient a changé. En lisant le facteur et en y injectant $d_\phi = (d-2)/2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
g_n' = b^{\,y_n}\,g_n\;$
avec
$\displaystyle
\;y_n = d - n\,d_\phi = d - n\,\frac{d-2}{2}
$
</p>

<b>Contrôle sur les deux cas déjà connus.</b> Pour $n = 2$ (la masse)&nbsp;: $y_2 = d - (d-2) = 2$, c'est bien $y_t$. Pour $n = 1$ (le champ extérieur)&nbsp;: $y_1 = d - \frac{d-2}{2} = \frac{d+2}{2}$, c'est bien $y_h$. Les deux résultats obtenus séparément plus haut sont les deux premiers cas d'une même formule.

</details>

</div>

<br>

<div id="theo">

<p style="text-align:center;">
$\displaystyle
g_n' = b^{\,y_n}\,g_n\;
$ avec
$\displaystyle
\; y_n = d - n\,\frac{d-2}{2}
$
</p>

</div>


$y_n$ n'est donc rien d'autre que la <b>dimension de masse du couplage $g_n$</b>. En effet l'action est sans dimension, donc $[g_n] = d - n\,[\phi] = d - n\\,\frac{d-2}{2}$, ce qui est exactement $y_n$. Au point fixe gaussien, «&nbsp;pertinent&nbsp;» signifie donc simplement <b>de dimension de masse positive</b>. C'est cela qu'on appelle le <b>comptage de puissances</b>, et c'est le même outil qui servait à décider quels diagrammes divergent au chapitre "[Le problème et sa solution](../tqc11/#le-problème-divergences-et-sa-solution-contretermes)".


Cette unique formule répond d'un coup à plusieurs questions laissées en suspens&nbsp;:

| $n$ | terme | $y_n$ général | en $d = 4$ | verdict |
|:---:|:---:|:---:|:---:|:---:|
| 1 | $h\phi$ | $(d+2)/2$ | 3 | pertinent |
| 2 | $m^2\phi^2$ | 2 | 2 | pertinent |
| 4 | $\lambda\phi^4$ | $4-d$ | **0** | **marginal** |
| 6 | $\phi^6$ | $6-2d$ | $-2$ | non pertinent |

Trois lectures, toutes utiles pour la suite&nbsp;:
<ul style="margin-top:0em; margin-bottom:1em;">
<li><b>La ligne $n=4$ justifie enfin le rôle de la dimension 4.</b> Le couplage $\lambda$ y est exactement marginal&nbsp;: ni croissant ni décroissant. C'est le cas limite, et c'est pourquoi le terme de boucle, qui est la première correction à cette immobilité, y devient décisif. En dessous de 4, $y_4 = 4-d > 0$ et $\lambda$ devient pertinent&nbsp;: c'est le terme $\varepsilon\lambda$ que nous retrouverons dans l'équation de flot.</li>
<br>
<li><b>La ligne $n=6$ justifie la troncature du modèle.</b> Nous avions affirmé plus haut que $\phi^6$ et au-delà sont non pertinents près de la dimension 4&nbsp;; on le lit maintenant sur un nombre. Ces termes rétrécissent sous le flot, s'évanouissent aux grandes échelles, et n'affectent aucun exposant. Il était donc légitime de les omettre, et ce n'est pas une approximation subie mais un résultat.</li>
<br>
<li><b>Les deux premières lignes sont $y_t$ et $y_h$</b>, c'est-à-dire précisément les deux nombres réclamés par l'hypothèse de Widom.</li>
</ul>


Injectées dans les formules de Widom avec $d=4$, ces valeurs gaussiennes redonnent <b>exactement</b> le tableau du champ moyen établi plus haut ($\alpha=0$, $\beta=\tfrac12$, $\gamma=1$, $\delta=3$, $\nu=\tfrac12$, $\eta=0$). Ce n'est pas une coïncidence&nbsp;: <b>le champ moyen <i>est</i> le point fixe gaussien vu en dimension 4</b>, et c'est pourquoi il devient exact au-dessus de quatre dimensions, là où $\lambda$ est non pertinent et s'évanouit tout seul.

<br>

Tout le chapitre tient désormais dans une question&nbsp;: que devient ce tableau quand on allume $\lambda$ en dessous de quatre dimensions, là où il refuse de s'évanouir&nbsp;?


<br>

### Une boucle, et le point fixe de Wilson–Fisher

Allumons $\lambda$. Le pas I cesse alors d'être faisable exactement, et la raison est celle-là même qui rendait le cas gaussien si facile, prise à l'envers.

<div id="preuve">

<details>
<summary>Pourquoi le pas I devient impossible, et pourquoi la perturbation est le recours naturel&nbsp;?</summary>

En séparant $\phi = \phi_{\mathrm s} + \phi_{\mathrm f}$ dans le terme quartique, le binôme produit cinq familles de termes&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\phi_{\mathrm s}+\phi_{\mathrm f})^4 = \phi_{\mathrm s}^4 + 4\phi_{\mathrm s}^3\phi_{\mathrm f} + 6\phi_{\mathrm s}^2\phi_{\mathrm f}^2 + 4\phi_{\mathrm s}\phi_{\mathrm f}^3 + \phi_{\mathrm f}^4
$
</p>

Les termes du milieu sont <b>croisés</b>&nbsp;: ils font intervenir simultanément les deux familles de modes. L'action ne se scinde donc plus en $S[\phi_{\mathrm s}] + S[\phi_{\mathrm f}]$, l'intégrale fonctionnelle ne se factorise plus, et le facteur rapide cesse d'être une constante. C'est exactement la panne annoncée à l'échauffement.

Pis, l'intégrale sur $\phi_{\mathrm f}$ n'est plus gaussienne&nbsp;: elle contient $\phi_{\mathrm f}^4$, et personne ne sait faire une intégrale fonctionnelle quartique en forme close. Nous n'avons donc <b>aucun espoir de résultat exact</b>.

Le recours est celui de toute la théorie des champs&nbsp;: on <b>développe l'exponentielle</b> en puissances du couplage,

<p style="text-align:center;">
$\displaystyle
\mathrm e^{-\delta S[\phi_{\mathrm s}]} = \Big\langle \mathrm e^{-S_{\text{int}}[\phi_{\mathrm s},\phi_{\mathrm f}]}\Big\rangle_{\mathrm f}
= 1 - \langle S_{\text{int}}\rangle_{\mathrm f} + \frac12\langle S_{\text{int}}^2\rangle_{\mathrm f} - \cdots
$
</p>

où $\langle\cdot\rangle_{\mathrm f}$ désigne la moyenne gaussienne sur les seuls modes rapides. Chaque terme du développement est alors une moyenne de <i>produits</i> de champs dans une théorie libre&nbsp;: le théorème de Wick s'applique, chaque appariement est un propagateur, et <b>les diagrammes de Feynman réapparaissent</b>. S'arrêter au premier terme non trivial, c'est s'arrêter à une boucle.

</details>

</div>

On traite donc le pas I en perturbation, par des diagrammes de Feynman. Mais plutôt que d'intégrer les impulsions internes jusqu'à $\Lambda$, la méthode de Wilson nous dicte de les restreindre à la <b>coquille rapide</b>, de $\Lambda/b$ à $\Lambda$. Rien d'étonnant à cela&nbsp;: le pas I ne consiste précisément qu'à éliminer les modes de cette coquille, et ce sont eux, et eux seuls, qui circulent dans les boucles. Les pattes externes, elles, portent des impulsions lentes.

À une boucle, ce travail se réduit à **deux diagrammes**&nbsp;: la **boucle simple** refermée sur un vertex posé sur la ligne, qui corrigera $m^2$&nbsp;; et la **bulle**, deux vertex reliés par deux propagateurs, qui corrigera $\lambda$. Ce sont eux que nous allons calculer, et le flot du chapitre tout entier sortira de ces deux intégrales. Encore faut-il savoir pourquoi il n'y en a que deux.

<!-- Figure à redessiner (L&B fig. 35.2) : deux diagrammes. En haut, la « boucle simple » : une ligne horizontale avec un vertex portant une boucle fermée au-dessus (correction de m²) ; en bas, la « bulle » : quatre pattes externes reliées à deux vertex joints par deux propagateurs formant une lentille (correction de λ). Légende : les deux diagrammes à une boucle ; les impulsions internes ne parcourent que la coquille Λ/b ≤ |p| ≤ Λ -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/uneboucle.png" style="box-shadow:none;background:none;">
</div>

#### Pourquoi ces deux diagrammes&nbsp;?

Quelles fonctions faut-il corriger&nbsp;? Le comptage de puissances du chapitre "[Le problème et sa solution](../tqc11/#le-problème-divergences-et-sa-solution-contretermes)" a établi que le degré de divergence superficiel d'un diagramme de $\phi^4$ en dimension 4 vaut $D = 4 - B_E$, où $B_E$ est le nombre de pattes externes. Seules la fonction à <b>deux</b> pattes ($D = 2$) et celle à <b>quatre</b> pattes ($D = 0$) sont donc sensibles à la coupure&nbsp;; à six pattes et au-delà, $D < 0$ et la contribution est négligeable aux grandes échelles. Il n'y a donc <b>que deux fonctions à surveiller</b>, et c'est pour cela qu'il n'y a que deux couplages dans le flot.

{{%notice note%}}
<b>Ce comptage-là et celui de tout à l'heure n'en font qu'un.</b><br><br>
Nous avons rencontré deux fois l'expression «&nbsp;comptage de puissances&nbsp;», sur deux objets apparemment sans rapport&nbsp;: la dimension d'un couplage, $y_n = d - n\frac{d-2}{2}$, et le degré de divergence d'un diagramme, $D = 4 - B_E$. Évaluons la première en dimension 4&nbsp;: il vient $y_n = 4 - n$, à comparer à $D = 4 - B_E$.<br><br>
<b>C'est la même formule.</b> Et ce n'est pas une coïncidence de notation&nbsp;: un couplage $g_n$ porte $n$ champs, et un diagramme corrigeant la fonction à $n$ points a exactement $n$ pattes externes. Le même entier joue les deux rôles.<br><br>
La traduction est alors limpide&nbsp;: <b>un couplage pertinent correspond à une fonction divergente</b>, et un couplage non pertinent à une fonction convergente. Ce que le langage de la renormalisation appelait «&nbsp;il faut un contreterme&nbsp;» et ce que le langage du groupe de renormalisation appelle «&nbsp;cette direction est pertinente&nbsp;» sont deux façons de dire la même chose. La marginalité de $\lambda$ en dimension 4 ($y_4 = 0$) est le pendant exact de la divergence logarithmique de la fonction à quatre points ($D = 0$).
{{%/notice%}}

<b>Quelle correction va où&nbsp;?</b>

<ul style="margin-top:0.5em;">
<li>Corriger la fonction à <b>deux</b> pattes, c'est corriger la partie <b>quadratique</b> de l'action, donc $m^2$. C'est exactement ce que faisait la self-énergie&nbsp;: déplacer la masse.</li>
<li>Corriger la fonction à <b>quatre</b> pattes, c'est corriger la partie <b>quartique</b>, donc $\lambda$. C'est exactement ce que faisait la fonction de vertex $\tilde\Gamma$&nbsp;: déplacer le couplage.</li>
</ul>

<b>Et les topologies&nbsp;?</b> À une boucle, chaque cas n'en admet qu'une. Pour deux pattes externes, il faut un seul vertex&nbsp;: deux de ses quatre jambes partent vers l'extérieur, les deux autres se contractent entre elles et referment la boucle. Ce diagramme est unique. Pour quatre pattes externes, il faut deux vertex&nbsp;: quatre jambes sortent, les quatre restantes s'apparient en deux propagateurs. C'est la bulle, et elle existe en <b>trois versions</b> selon la façon d'apparier les pattes externes deux à deux&nbsp;: les canaux $s$, $t$ et $u$ qu'on commence à bien connaître. Le facteur 3 du terme $-3\lambda^2$ n'est rien d'autre que ce comptage de canaux.

<br>

#### Le calcul de la coquille

<div id="preuve">

Deux conventions d'écriture avant de lire les formules. On pose $\Lambda = 1$, c'est-à-dire qu'on prend la coupure pour unité d'impulsion. Et l'on note $\Omega_d$ le <b>facteur angulaire</b> en dimension $d$, le $(2\pi)^{-d}$ inclus, de sorte qu'une intégrale sur une fonction de $|p|$ seul se réduise à une intégrale radiale&nbsp;:

<p style="text-align:center;">
$\displaystyle \int\frac{\mathrm d^dp}{(2\pi)^d} = \Omega_d\int p^{d-1}\,\mathrm dp
\;$
avec
$\displaystyle \;\Omega_4 = \frac{1}{8\pi^2}$
</p>

Les intégrales de coquille effectuées, puis les deuxième et troisième pas appliqués, les couplages se décalent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
m^{\prime 2}=b^2\left[m^2+\frac{\lambda \Omega_d}{2(d-2)}\left(1-b^{2-d}\right)-\frac{m^2 \lambda \Omega_d}{2(d-4)}\left(1-b^{4-d}\right)\right]
$
</p>
<p style="text-align:center;">
$\displaystyle
\lambda^{\prime}=b^{4-d}\left[\lambda-\frac{3 \lambda^2 \Omega_d}{2(d-4)}\left(1-b^{4-d}\right)\right]
$
</p>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px 5px 0 5px;">
<summary>Déroulé des deux intégrales&nbsp;:</summary>

On utilise les <b>règles de Feynman</b>, avec trois adaptations dues au cadre euclidien et à la coquille&nbsp;:

<ul style="margin-top:0.5em;">
<li>le propagateur est $1/(p^2+m^2)$, sans $\mathrm i$ ni $\mathrm i\epsilon$&nbsp;: nous sommes en signature euclidienne, il n'y a pas de pôle sur le contour et donc aucune prescription à choisir&nbsp;;</li>
<li>le vertex vaut $-\lambda$, et les facteurs de symétrie se comptent comme d'habitude&nbsp;;</li>
<li>l'intégrale sur l'impulsion interne ne court que sur la coquille $\Lambda/b \le |p| \le \Lambda$.</li>
</ul>

On travaille avec les conventions posées ci-dessus&nbsp;: $\Lambda = 1$ et $\int\frac{\mathrm d^dp}{(2\pi)^d} = \Omega_d\int p^{d-1}\\,\mathrm dp$.

<b>La boucle sur la ligne&nbsp;:</b> 

Un vertex, un propagateur qui se referme, facteur de symétrie $1/2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\delta m^2 = \frac{\lambda}{2}\,\Omega_d\int_{1/b}^{1}\frac{p^{d-1}\,\mathrm dp}{p^2+m^2}
$
</p>

L'impulsion externe n'apparaît nulle part dans cette intégrale, puisque la boucle se referme sur un seul vertex. <b>La correction est donc indépendante de l'impulsion externe</b>, ce qui a une conséquence immédiate&nbsp;: elle décale $m^2$ mais ne touche pas au terme de gradient. Aucune renormalisation du champ n'est engendrée à cet ordre, et c'est la raison pour laquelle $\eta = 0$ dans la colonne d'ordre $\varepsilon$ du tableau final.

Comme on travaille près du point critique, $m^2$ est petit devant $\Lambda^2 = 1$&nbsp;; on développe donc le dénominateur&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{1}{p^2+m^2} = \frac{1}{p^2} - \frac{m^2}{p^4} + \cdots
$
</p>

Chacun des deux morceaux est une intégrale de puissance élémentaire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_{1/b}^{1} p^{d-3}\,\mathrm dp = \frac{1 - b^{2-d}}{d-2}\;$
et
$\displaystyle
\;\int_{1/b}^{1} p^{d-5}\,\mathrm dp = \frac{1 - b^{4-d}}{d-4}
$
</p>

Les deux dénominateurs $(d-2)$ et $(d-4)$ ne sont donc rien d'autre que ceux qui sortent de $\int p^{n}\mathrm dp = p^{n+1}/(n+1)$. En multipliant par $\lambda\Omega_d/2$ et $-m^2\lambda\Omega_d/2$ respectivement, on obtient les deux termes correctifs du crochet.

<b>La bulle&nbsp;:</b> 

Deux vertex, deux propagateurs internes, facteur de symétrie $1/2$, et le facteur 3 des trois canaux&nbsp;:

<p style="text-align:center;">
$\displaystyle
\delta\lambda = -\,3\,\frac{\lambda^2}{2}\,\Omega_d\int_{1/b}^{1}\frac{p^{d-1}\,\mathrm dp}{(p^2+m^2)^2}
\;\simeq\;
-\frac{3\lambda^2\Omega_d}{2}\int_{1/b}^{1}p^{d-5}\,\mathrm dp
= -\frac{3\lambda^2\Omega_d}{2}\cdot\frac{1-b^{4-d}}{d-4}
$
</p>

où l'on a négligé $m^2$ devant $p^2$, licite puisque le terme correctif est déjà d'ordre $\lambda^2$.

<b>Les deuxième et troisième pas&nbsp;:</b> 

Restent les préfacteurs $b^2$ et $b^{4-d}$ devant les crochets. Ils ne viennent pas des boucles mais du rééchelonnement, et l'échauffement gaussien les a déjà produits&nbsp;: avec $d_\phi = (d-2)/2$, le terme de masse ressort multiplié par $b^2$, et le couplage $\lambda$, de dimension de masse $4-d$, ressort multiplié par $b^{4-d}$. On notera au passage qu'en dimension 4 ce facteur vaut 1&nbsp;: $\lambda$ y est <b>marginal</b>, ni pertinent ni non pertinent, et c'est exactement pourquoi la dimension 4 est le point de bascule de toute l'histoire.

</details>

</div>

<br>

#### Du pas fini au flot continu

Les deux relations ci-dessus comparent la théorie avant et après **une** transformation de facteur $b$. C'est un pas fini, malcommode&nbsp;: pour suivre une trajectoire, on préférerait une équation différentielle. Le passage se fait en deux temps.

<ul>
 <li><b>Premier temps</b>, on rend le pas infinitésimal, ce qui ne demande aucune approximation sur la dimension.</li>
 <li><b>Second temps seulement</b>, on se place au voisinage de la dimension 4 pour obtenir des nombres.
</li>
</ul>

Commençons par le premier, en posant

$$
b = \mathrm e^{\ell}
$$

Ce choix n'est pas cosmétique. Les transformations de renormalisation se **composent en multipliant** les facteurs d'échelle&nbsp;: appliquer $b_1$ puis $b_2$ revient à appliquer $b_1b_2$. Le paramètre naturel du groupe n'est donc pas $b$ mais $\ln b$, qui lui s'**additionne**. En posant $\ell = \ln b$, les étapes successives se cumulent comme des durées, «&nbsp;ne rien faire&nbsp;» ($b=1$) devient l'origine $\ell = 0$, et l'on peut enfin écrire des équations différentielles en $\mathrm d/\mathrm d\ell$&nbsp;: $\ell$ joue le rôle du temps le long de la trajectoire de renormalisation. C'est la même raison qui faisait écrire $\mu\\,\mathrm d/\mathrm d\mu = \mathrm d/\mathrm d\ln\mu$ au chapitre précédent.

Il ne reste qu'à développer les deux relations au premier ordre en $\ell$. Un mécanisme agréable s'y produit&nbsp;: les développements font apparaître au numérateur les facteurs $(d-2)$ et $(d-4)$ qui figuraient au dénominateur des crochets, et ils se simplifient.

<div id="preuve">

<details>
<summary>Le développement en $\ell$ en détails&nbsp;:</summary>

<b>Les trois développements dont on a besoin</b>, tous obtenus de $b^\alpha = \mathrm e^{\alpha\ell} \simeq 1 + \alpha\ell$&nbsp;:

<p style="text-align:center;">
$\displaystyle
b^2 \simeq 1 + 2\ell,
\;
1 - b^{2-d} \simeq (d-2)\,\ell,
\;
1 - b^{4-d} \simeq (d-4)\,\ell
$
</p>

<b>La masse.</b> On injecte dans le crochet, et les deux simplifications annoncées se produisent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
m'^2 \simeq (1+2\ell)\left[m^2 + \frac{\lambda\Omega_d}{2\,\cancel{(d-2)}}\,\cancel{(d-2)}\ell - \frac{m^2\lambda\Omega_d}{2\,\cancel{(d-4)}}\,\cancel{(d-4)}\ell\right]
= (1+2\ell)\left[m^2 + \frac{\lambda\Omega_d}{2}(1-m^2)\,\ell\right]
$
</p>

En développant et en ne gardant que le premier ordre en $\ell$ (le produit $2\ell \times \lambda\Omega_d\ell/2$ est en $\ell^2$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
m'^2 - m^2 \simeq \left[2m^2 + \frac{\lambda\Omega_d}{2}(1-m^2)\right]\ell
$
</p>

<b>Le couplage.</b> Même mécanique, avec $b^{4-d} \simeq 1 + (4-d)\ell$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lambda' \simeq \big(1+(4-d)\ell\big)\left[\lambda - \frac{3\lambda^2\Omega_d}{2}\,\ell\right]
\;\Longrightarrow\;
\lambda' - \lambda \simeq \left[(4-d)\lambda - \frac{3\lambda^2\Omega_d}{2}\right]\ell
$
</p>

</details>

</div>

On obtient ainsi les équations de flot **en dimension quelconque**, sans avoir rien approché d'autre que la petitesse du pas&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm dm^2}{\mathrm d\ell} = 2m^2 + \frac{\lambda\Omega_d}{2}\,(1-m^2)
$
</p>
<p style="text-align:center;">
$\displaystyle
\frac{\mathrm d\lambda}{\mathrm d\ell} = (4-d)\,\lambda - \frac{3\lambda^2\Omega_d}{2}
$
</p>

</div>

La seconde équation contient déjà l'essentiel. Deux termes s'y opposent&nbsp;: $(4-d)\lambda$, pur effet de dimension qui pousse le couplage vers le haut dès que $d < 4$, et $-3\lambda^2\Omega_d/2$, effet de boucle qui le freine. Comme l'un est linéaire et l'autre quadratique, ils s'équilibrent nécessairement quelque part, et cet équilibre sera un point fixe non trivial. On voit aussi pourquoi la dimension 4 est spéciale&nbsp;: c'est là, et seulement là, que le premier terme disparaît.

<br>

#### Quatre dimensions, moins epsilon

Nous voici au second temps, celui qui produit des nombres. Mais avant de calculer, il faut régler une question de légitimité.

**Le problème.** Nous venons de faire un calcul à **une boucle**, et rien ne dit pour l'instant que s'arrêter là soit permis. Encore faudrait-il savoir en quoi l'on développe. Or la question «&nbsp;$\lambda$ est-il petit&nbsp;?&nbsp;» n'a même pas de sens telle quelle&nbsp;: le couplage a une **dimension de masse** $4-d$, ce n'est donc pas un nombre pur, et il n'y a rien à quoi le comparer tant qu'on n'a pas fixé d'échelle.

Pire, l'équation de flot que nous venons d'obtenir dit que le terme $(4-d)\lambda$ est **positif** dès que $d < 4$&nbsp;: le couplage est pertinent, il enfle quand on va vers les grandes échelles. Or la criticité est justement un phénomène de très grande échelle, puisque $\xi \to \infty$. La théorie des perturbations naïve y est donc condamnée, non parce que le couplage microscopique serait grand, mais parce que le couplage **effectif** grandit en chemin.

**La dimension 4 est un seuil.** La même équation de flot dit cependant autre chose. En dimension 4 exactement, le terme $(4-d)\lambda$ **disparaît** : le couplage cesse d'enfler, il devient marginal, et l'obstacle s'évanouit. La dimension 4 sépare donc deux régimes, celui où les fluctuations finissent toujours par dominer et celui où elles s'éteignent.

Ce seuil est assez important pour qu'on le vérifie autrement qu'en se fiant à notre calcul.

<div id="preuve">

<details>
<summary>Une seconde route vers la dimension 4, sans écrire un seul diagramme&nbsp;: le critère de Ginzburg</summary>

La première route est celle que nous venons de suivre&nbsp;: lire le signe de $(4-d)$ dans l'équation de flot. En voici une autre, entièrement indépendante, qui ne suppose aucune théorie des perturbations.

L'idée est de comparer directement l'amplitude des <b>fluctuations</b> du paramètre d'ordre à celle du paramètre d'ordre lui-même, à l'intérieur d'un volume de corrélation. Le champ moyen, qui néglige les premières, n'est cohérent que si

<p style="text-align:center;">
$\displaystyle \big\langle(\delta\phi)^2\big\rangle \ll \phi^2\;$
dans un volume $\xi^d$
</p>

En estimant chaque membre au voisinage de $T_c$, on trouve que le rapport se comporte comme

<p style="text-align:center;">
$\displaystyle
\frac{\langle(\delta\phi)^2\rangle}{\phi^2} \sim \xi^{\,4-d}
$
</p>

<details style="background-color:#F4F4F4;border-radius:5px;padding:5px;">
<summary>Dans le détail</summary>

Dans le cadre du champ moyen, $\phi\sim t^\beta$ avec $\beta=1/2$. Et donc $\phi^2\sim t$.

Mais ici, nous voulons tout exprimer en fonction de la longueur de corrélation $\xi$, or en champ moyen, la longueur de corrélation diverge avec l'exposant $\nu = 1/2$&nbsp;: $\xi \sim t^{-1/2}$.

Par conséquent, $t\sim \xi^{-2}$, ce qui donne $\phi^2\sim\xi^{-2}$.

On l'a vu, en physique statistique, le théorème de fluctuation-dissipation nous dit que l'intégrale spatiale de la fonction de corrélation des fluctuations est directement égale à la susceptibilité du système $\chi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\int_V \mathrm d^dr \, \langle\delta\phi(0)\delta\phi(r)\rangle \sim \chi
$
</p>

Si l'on veut la fluctuation moyenne dans ce volume $V$, on divise cette intégrale par le volume&nbsp;:

<p style="text-align:center;">
$\displaystyle
\langle(\delta\phi)^2\rangle_V \sim \frac{\chi}{V} = \frac{\chi}{\xi^d}
$
</p>

Il nous faut donc le comportement de la susceptibilité $\chi$ en champ moyen. Elle diverge avec l'exposant $\gamma = 1$&nbsp;: $\chi \sim t^{-1}$

En utilisant notre traduction $t \sim \xi^{-2}$, la susceptibilité devient&nbsp;: $\chi \sim (\xi^{-2})^{-1} = \xi^2$

Injectons cela dans notre formule de fluctuation&nbsp;: $\langle(\delta\phi)^2\rangle \sim \frac{\xi^2}{\xi^d} = \xi^{2-d}$

Finalement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{\langle(\delta\phi)^2\rangle}{\phi^2} \sim \frac{\xi^{2-d}}{\xi^{-2}} = \xi^{2-d} \times \xi^2
$
</p>
<p style="text-align:center;">
$\displaystyle
\frac{\langle(\delta\phi)^2\rangle}{\phi^2} \sim \xi^{4-d}
$
</p>

</details>

<b>Tout se joue dans le signe de l'exposant</b>, et l'on retrouve exactement le même $4-d$. Si $d > 4$, le rapport s'évanouit quand $\xi \to \infty$&nbsp;: les fluctuations deviennent négligeables au point critique, et le champ moyen y est exact. Si $d < 4$, il diverge&nbsp;: les fluctuations finissent toujours par dominer, aussi faible soit le couplage.

Deux routes très différentes, un même seuil. C'est ce qui donne confiance dans le fait que la dimension 4 n'est pas un artefact de notre troncature à une boucle.

C'est aussi ce critère qui dit <b>dans quelle fenêtre de température</b> les fluctuations dominent, et l'on verra plus loin que cette fenêtre vaut $10^{-12}$&nbsp;K dans un supraconducteur conventionnel et plusieurs kelvins dans un cuprate.

</details>

</div>

<br>

**L'astuce de Wilson et Fisher&nbsp;:** <br>
Puisque tout est simple en dimension 4 et compliqué en dimension 3, autant ne pas y aller d'un coup. L'idée consiste à **traiter la dimension elle-même comme un paramètre continu**, et à s'écarter de 4 d'un petit montant&nbsp;:

<div id="def">

$$
d = 4 - \varepsilon
$$

</div>

L'opération est acrobatique, une dimension fractionnaire n'ayant aucun sens géométrique évident, mais elle est purement formelle&nbsp;: $d$ n'apparaît dans nos formules qu'à travers des exposants et le facteur angulaire $\Omega_d$, qui se prolongent analytiquement sans difficulté. On calculera donc en dimension $4-\varepsilon$, en supposant $\varepsilon$ petit, puis on posera bravement $\varepsilon = 1$ pour redescendre en dimension 3.

Reste que nous n'avons toujours pas répondu à la question de départ.

{{%notice note%}}
<b>En quoi développe-t-on, au juste&nbsp;?</b><br><br>
Nous avons maintenant deux petites quantités en jeu, $\lambda$ et $\varepsilon$, et il serait inquiétant qu'elles soient indépendantes&nbsp;: rien ne garantirait alors qu'une troncature à une boucle ait un sens. La réponse rassurante est qu'<b>elles n'en font qu'une</b>, mais on ne peut la donner qu'après coup.<br><br>
Ce qui gouverne le comportement critique n'est pas la valeur initiale du couplage, mais sa valeur <b>au point fixe</b>, puisque toutes les trajectoires y aboutissent. Or nous trouverons $\lambda^\*/16\pi^2 = \varepsilon/3$. Comme chaque boucle supplémentaire coûte un facteur $\lambda\Omega$, il vient que <b>le développement en boucles et le développement en $\varepsilon$ sont le même développement</b>. En dimension 4 exactement, $\lambda^* = 0$&nbsp;: la théorie critique est libre et le champ moyen est exact. En dimension 3, $\varepsilon = 1$, et rien n'est petit.<br><br>
Le raisonnement est donc circulaire, au sens où l'on parie sur la petitesse de $\varepsilon$, on calcule, et l'on vérifie ensuite que le couplage au point fixe est bien d'ordre $\varepsilon$. Ce n'est pas vicieux, mais il faut savoir que c'est un pari.<br><br>
<b>Et il l'est doublement&nbsp;:</b> la série en $\varepsilon$ n'est pas convergente, elle est <b>asymptotique</b>. Poser $\varepsilon = 1$ est un acte de foi que seul le succès justifie. Il se trouve que le paramètre effectif vaut $\varepsilon/3 \approx 0{,}33$ et non 1, ce qui explique que les premiers ordres se comportent honorablement&nbsp;; mais les valeurs vraiment précises ne s'obtiennent qu'en resommant la série au sens de Borel.
{{%/notice%}}

**Ce que cela change dans nos deux équations.** Peu de choses, en réalité. Le terme $(4-d)\lambda$ devient $\varepsilon\lambda$, par définition. Et il reste à évaluer le facteur angulaire $\Omega_d$, qui dépend lui aussi de la dimension&nbsp;: comme il ne multiplie que des termes de boucle, on peut se contenter de sa valeur en dimension 4.

<div id="preuve">

<details>
<summary>Pourquoi l'on peut remplacer $\Omega_d$ par $\Omega_4$</summary>

Le facteur $\Omega_d$ n'apparaît que devant les termes de boucle, déjà d'ordre $\lambda$ ou $\lambda^2$. Or nous venons de dire que le point fixe se trouvera en $\lambda^* \propto \varepsilon$. Écrire $\Omega_d = \Omega_4 + O(\varepsilon)$ n'introduit donc, dans ces termes, qu'une erreur d'ordre $\varepsilon^2$&nbsp;: invisible à l'ordre où nous travaillons.

Avec $\Omega_4 = 1/8\pi^2$, il vient

<p style="text-align:center;">
$\displaystyle
\frac{\lambda\Omega_4}{2} = \frac{\lambda}{16\pi^2}\;
$
et
$\displaystyle
\;\frac{3\lambda^2\Omega_4}{2} = \frac{3\lambda^2}{16\pi^2}
$
</p>

Garder $\Omega_d$ exact serait donc du zèle inutile&nbsp;: la correction se situe au-delà de la précision de tout le calcul.

</details>

</div>

Les deux équations prennent alors leur forme définitive&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\frac{\mathrm dm^2}{\mathrm d\ell} = 2m^2 + \frac{\lambda}{16\pi^2}\,(1 - m^2)
$
</p>
<p style="text-align:center;">
$\displaystyle
\frac{\mathrm d\lambda}{\mathrm d\ell} = \varepsilon\,\lambda - \frac{3\lambda^2}{16\pi^2}
$
</p>

</div>

Ce sont les **équations de Gell-Mann–Low du ferromagnète**. Tout ce qui suit n'est plus que l'étude d'un système dynamique à deux variables&nbsp;: on cherche ses points fixes, on linéarise autour d'eux, on lit les valeurs propres. Les exposants critiques sont au bout.

<br>

#### Les deux points fixes

<div id="theo">

<p style="text-align:center;">
$\displaystyle
(m^2, \lambda)^* = (0, 0)\;
$ (gaussien)<br><br>
et $\displaystyle
(m^2, \lambda)^* = \Big({-\frac{\varepsilon}{6}},\ \frac{16\pi^2\varepsilon}{3}\Big)\;
$ (Wilson–Fisher)
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Résolution&nbsp;:</summary>

Un point fixe annule les deux dérivées. 

Commençons par l'équation du couplage, qui a le bon goût de ne pas contenir $m^2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\lambda\left(\varepsilon - \frac{3\lambda}{16\pi^2}\right) = 0
\;\Longrightarrow\;
\lambda^* = 0\;$ ou
$\displaystyle
\;\lambda^* = \frac{16\pi^2\varepsilon}{3}
$
</p>

Puis celle de la masse, où l'on reporte chaque valeur&nbsp;:

<p style="text-align:center;">
$\displaystyle
2m^2 + \frac{\lambda^*}{16\pi^2}\left(1-m^2\right) = 0
$
</p>

Pour $\lambda^* = 0$, il reste $2m^2 = 0$, donc $m^{2*} = 0$&nbsp;: c'est le <b>point gaussien</b>, la théorie libre.

Pour $\lambda^* = 16\pi^2\varepsilon/3$, on a $\lambda^*/16\pi^2 = \varepsilon/3$, d'où

<p style="text-align:center;">
$\displaystyle
2m^2 + \frac{\varepsilon}{3}(1-m^2) = 0
\;\Longrightarrow\;
m^{2*}\left(2 - \frac{\varepsilon}{3}\right) = -\frac{\varepsilon}{3}
\;\Longrightarrow\;
m^{2*} = -\frac{\varepsilon}{6-\varepsilon} \simeq -\frac{\varepsilon}{6}
$
</p>

</details>

</div>

Deux remarques, avant même d'étudier la stabilité&nbsp;:

<ul>

<li>Le point de Wilson–Fisher <b>n'existe séparément du point gaussien que si $\varepsilon \neq 0$</b>&nbsp;: en dimension 4 exactement, les deux se confondent. Et pour $\varepsilon < 0$, c'est-à-dire au-dessus de quatre dimensions, il se retrouve à couplage négatif, donc hors du domaine physique (le ressort repousse, l'énergie minimum est en $-\infty$, le vide est instable). C'est en dessous de quatre dimensions, et là seulement, qu'il entre en scène.</li>
<li>Ensuite, il se trouve à $m^{2*} < 0$. Retenons-le, car ce détail apparemment technique aura une conséquence physique considérable une fois le diagramme de flot dessiné.</li>

</ul>

<br>

#### Qui attire, qui repousse&nbsp;?

Un point fixe ne dit rien à lui seul&nbsp;: tout dépend de la façon dont les trajectoires voisines se comportent. On linéarise donc le flot autour de chacun, ce qui revient à évaluer la matrice jacobienne au point fixe et à en chercher les valeurs propres. 

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Une valeur propre <b>positive</b> signale une direction <b>pertinente</b>, dont on s'écarte&nbsp;;</li>
<li>une valeur propre <b>négative</b>, une direction <b>non pertinente</b>, vers laquelle on retombe.</li>
</ul>

<div id="preuve">

<details>
<summary>Linéarisation et valeurs propres&nbsp;:</summary>

En notant $u = m^2$ et $v = \lambda$, le flot s'écrit $\mathrm du/\mathrm d\ell = f(u,v)$ et $\mathrm dv/\mathrm d\ell = g(u,v)$ avec

<p style="text-align:center;">
$\displaystyle
f = 2u + \frac{v}{16\pi^2}(1-u),
$
</p>
<p style="text-align:center;">
$\displaystyle
g = \varepsilon v - \frac{3v^2}{16\pi^2}
$
</p>

Au voisinage d'un point fixe, un écart $\delta$ évolue selon $\mathrm d\delta/\mathrm d\ell = J\delta$ avec

<p style="text-align:center;">
$\displaystyle
J = \begin{pmatrix}
\partial_u f & \partial_v f\\
\partial_u g & \partial_v g
\end{pmatrix}
= \begin{pmatrix}
2 - \dfrac{v}{16\pi^2} & \dfrac{1-u}{16\pi^2}\\
0 & \varepsilon - \dfrac{6v}{16\pi^2}
\end{pmatrix}
$
</p>

<b>Le zéro en bas à gauche est un cadeau.</b> Il traduit le fait que l'équation du couplage ignore la masse&nbsp;: à cet ordre, $\lambda$ évolue sans se soucier de $m^2$, alors que l'inverse est faux. La matrice est donc <b>triangulaire</b>, et ses valeurs propres se lisent directement sur la diagonale, sans passer par un polynôme caractéristique.

<b>Au point gaussien</b> $(0,0)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
J = \begin{pmatrix} 2 & \frac{1}{16\pi^2}\\ 0 & \varepsilon\end{pmatrix}
\;\Longrightarrow\;
y_t = 2, \; y_\lambda = \varepsilon
$
</p>

<b>Au point de Wilson–Fisher</b>, avec $v^\*/16\pi^2 = \varepsilon/3$ et $u^* \simeq -\varepsilon/6$&nbsp;:

<p style="text-align:center;">
$\displaystyle
J = \begin{pmatrix} 2 - \frac{\varepsilon}{3} & \frac{1}{16\pi^2}\\ 0 & -\varepsilon\end{pmatrix}
\;\Longrightarrow\;
y_t = 2 - \frac{\varepsilon}{3}, \; y_\lambda = -\varepsilon
$
</p>

</details>

</div>

Le résultat tient en un tableau, et il est très parlant&nbsp;:

| Point fixe | direction $m^2$ | direction $\lambda$ | verdict |
|:---:|:---:|:---:|:---:|
| gaussien | $y_t = 2 > 0$ | $y_\lambda = \varepsilon > 0$ | entièrement répulsif |
| Wilson–Fisher | $y_t = 2 - \varepsilon/3 > 0$ | $y_\lambda = -\varepsilon < 0$ | mixte |

**Le point gaussien est entièrement répulsif** dès que $\varepsilon > 0$. C'est la mort du champ moyen énoncée en une ligne&nbsp;: en dessous de quatre dimensions, le couplage est pertinent et le système fuit la théorie libre. Au-dessus de quatre dimensions, en revanche, $y_\lambda = \varepsilon < 0$&nbsp;: le couplage devient non pertinent, s'évanouit sous le flot, et le champ moyen redevient exact. **La dimension 4 est la dimension critique supérieure**, et c'est ce changement de signe qui le dit.

**Le point de Wilson–Fisher est mixte**, et c'est exactement le profil qu'on attend d'un point critique. Sa direction attractive explique l'universalité&nbsp;: peu importe la valeur initiale du couplage, on aboutit au même point fixe. Son unique direction répulsive explique qu'un seul paramètre, la température, doive être réglé pour atteindre la criticité.


{{%notice note%}}
<b>L'échange de stabilité</b><br>
Les deux valeurs propres dans la direction $\lambda$ ($+\varepsilon$ au point gaussien, $-\varepsilon$ à Wilson–Fisher) sont opposées, et changent de signe ensemble quand $\varepsilon$ traverse zéro. Les deux points fixes <b>échangent leurs rôles</b> en dimension 4, en se croisant. C'est le mécanisme même de la naissance du point de Wilson–Fisher, et l'on comprend du même coup pourquoi il n'a rien à dire au-dessus de quatre dimensions.
{{%/notice%}}

<br>

#### La récolte&nbsp;: $y_t$ et $y_h$

Le programme fixé au début du chapitre était de produire les deux nombres de Widom. Le premier est là&nbsp;:

<div id="theo">

$$
y_t = 2 - \frac{\varepsilon}{3}
$$

</div>

Encore faut-il justifier qu'il s'agit bien du $y_t$ de Widom, et non d'une valeur propre qui lui ressemblerait. C'est le cas par construction. Widom définissait $y_t$ par $t' = b^{y_t}t$, c'est-à-dire par la façon dont la température réduite se dilate sous un changement d'échelle. Or $t$ et $m^2$ sont proportionnels ($m^2 = a(T-T_c)$), et la direction propre associée est justement celle qui s'écarte du point fixe. La valeur propre de la jacobienne dans cette direction **est** $y_t$. On en tire immédiatement

$$
\nu = \frac{1}{y_t} = \frac{1}{2-\varepsilon/3} = \frac12\left(1-\frac{\varepsilon}{6}\right)^{-1} \simeq \frac12 + \frac{\varepsilon}{12}
$$

Le second nombre, $y_h = (d+2)/2$, garde sa valeur naïve&nbsp;: il n'est **pas corrigé** à une boucle. Ce n'est pas un oubli, et la raison relie ce chapitre au calcul de coquille mené plus haut.

<div id="preuve">

<details>
<summary>Pourquoi $y_h$ échappe à la correction&nbsp;:</summary>

La formule de Widom donne $\eta = 2 + d - 2y_h$, c'est-à-dire

<p style="text-align:center;">
$\displaystyle
y_h = \frac{d+2-\eta}{2}
$
</p>

Dire que $y_h$ garde sa valeur naïve revient donc exactement à dire que $\eta = 0$. Or $\eta$, la dimension anomale, mesure la correction au terme de gradient $(\nabla\phi)^2$, autrement dit la renormalisation du champ lui-même.

Et à une boucle, la seule correction à deux pattes est le diagramme à une boucle sur la ligne, dont nous avons noté en calculant l'intégrale que <b>l'impulsion externe n'y apparaît nulle part</b>&nbsp;: la boucle se referme sur un unique vertex, donc rien de ce qui entre par les pattes externes ne circule dedans. Une self-énergie indépendante de l'impulsion peut décaler le coefficient de $\phi^2$, jamais celui de $p^2\phi^2$. <b>Il n'y a donc aucune renormalisation du champ à cet ordre</b>, d'où $\eta = 0$ et $y_h$ intact.

Ce n'est plus vrai à deux boucles. Le premier diagramme à deux pattes dont l'impulsion externe traverse réellement les propagateurs internes est le sunset (trois propagateurs internes entre deux vertex), et c'est lui qui produit $\eta = \varepsilon^2/54$. La dimension anomale commence donc à l'ordre $\varepsilon^2$&nbsp;: c'est pourquoi $\eta$ sera le seul exposant du tableau final à ne pas bouger à l'ordre $\varepsilon$.

</details>

</div>

Avec $y_t$ et $y_h$ en main, les formules de Widom livrent les six exposants. Mais avant de récolter, il faut regarder le diagramme de flot dans son ensemble, car il réserve une surprise que les nombres seuls ne montreraient pas.

<!-- Figure à redessiner (L&B fig. 35.4) : plan (m² en abscisse, λ en ordonnée). Deux points fixes marqués : W1 à l'origine, W2 en (-ε/6, 16π²ε/3). Trajectoires de flot : à droite elles filent vers m² → +∞ (annoter « PM », paramagnétique) ; à gauche vers m² → -∞ (annoter « FM », ferromagnétique) ; une séparatrice passe par W2. Dessiner une trajectoire B partant de m² légèrement négatif mais λ grand qui finit côté PM, et une trajectoire C partant de m² négatif et λ petit qui finit côté FM. Légende : les fluctuations peuvent voler la transition : m² < 0 ne garantit plus le ferromagnétisme -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/flotferro.png" style="box-shadow:none;background:none;">
</div>

Les trajectoires partant de $m^2 > 0$ filent toutes vers les grands $m^2$ positifs&nbsp;: paramagnétisme, en accord avec le champ moyen. 

Mais côté $m^2 < 0$, la surprise&nbsp;: <b>partir avec une masse carrée négative ne garantit plus le ferromagnétisme</b>. La vraie frontière entre les phases n'est pas la ligne $m^2 = 0$ du champ moyen, c'est la <b>séparatrice</b>, qui passe par le point de Wilson–Fisher, lequel se trouve en $m^{2*} = -\varepsilon/6 < 0$. Si le couplage $\lambda$ (l'intensité des fluctuations) est assez fort, le flot ramène le système côté paramagnétique&nbsp;: les fluctuations peuvent voler la transition au champ moyen.

<br>

#### Ce que cela veut dire sur la paillasse

L'énoncé ci-dessus n'est pas directement testable, car on ne règle pas $m^2$ et $\lambda$ avec des boutons. Traduisons-le. Comme $m^2 = a(T - T_c^{\text{CM}})$, dire que la frontière se situe à $m^2 < 0$ revient à dire qu'il existe des températures <b>inférieures</b> à la prédiction du champ moyen où le système reste pourtant désordonné. L'énoncé mesurable est donc&nbsp;:

<div id="theo">

Les fluctuations abaissent la température critique réelle en dessous de la valeur du champ moyen, et l'écart se creuse quand les fluctuations gagnent en importance.

</div>

C'est massivement vérifié, et de la façon la plus nette sur le modèle d'Ising, où la comparaison est sans échappatoire puisqu'on connaît la réponse exacte. En unités $k_{\mathrm B}T_c/J$&nbsp;:

| Dimension | Champ moyen | Valeur exacte ou numérique | Rapport |
|:---:|:---:|:---:|:---:|
| $d = 1$ | 2 | **0** | transition abolie |
| $d = 2$ (carré) | 4 | 2,269 (Onsager) | 0,57 |
| $d = 3$ (cubique) | 6 | 4,51 | 0,75 |
| $d \to \infty$ | exact | exact | 1 |

La gradation dit tout&nbsp;: le champ moyen surestime toujours $T_c$, et l'écart croît quand la dimension diminue, c'est-à-dire quand les fluctuations pèsent davantage. En dimension 1, le vol est total&nbsp;: le champ moyen annonce une transition, il n'y en a aucune.

<b>Côté matériaux</b>, les aimants de basse dimensionnalité effective sont les témoins les plus parlants. Un composé quasi unidimensionnel, où l'échange le long des chaînes est énorme mais le couplage entre chaînes minuscule, s'ordonne à une température très inférieure à ce que l'échange laisserait prévoir&nbsp;; sans le faible couplage tridimensionnel résiduel, il ne s'ordonnerait pas du tout. Même chose pour les plans cuivre-oxygène des cuprates. Le théorème de Mermin–Wagner en donne la version rigoureuse&nbsp;: à symétrie continue et $d \le 2$, aucun ordre à longue portée à température non nulle, quelle que soit la force de l'interaction.

{{%notice note%}}
Ce que la renormalisation a résolu, c'est d'abord l'énigme des <b>exposants</b>. Guggenheim avait montré dès 1945 que les courbes de coexistence de huit fluides différents se superposaient sur une même courbe d'exposant $\beta \approx 1/3$, et non $1/2$&nbsp;: un fait mesuré, reproductible, universel, et sans explication pendant vingt-six ans. La solution exacte d'Onsager en 1944 avait par ailleurs <i>prouvé</i> que le champ moyen se trompait en deux dimensions. On savait donc depuis longtemps que quelque chose clochait, sans savoir quoi.<br><br>
La suppression de $T_c$ était, elle, connue et attribuée aux fluctuations de façon qualitative bien avant Wilson. Ce que le groupe de renormalisation apporte est le <b>critère quantitatif</b>&nbsp;: le critère de Ginzburg dit dans quelle fenêtre de température les fluctuations dominent, et cette fenêtre dépend violemment du système. Dans un supraconducteur conventionnel, où la longueur de cohérence est immense devant la distance interatomique, elle vaut de l'ordre de $10^{-12}$&nbsp;K et reste inobservable&nbsp;: c'est exactement pourquoi la théorie de Landau–Ginzburg y fonctionne si magnifiquement. Dans les cuprates, où la longueur de cohérence ne fait que quelques distances interatomiques, elle s'élargit à plusieurs kelvins et les effets de fluctuation sont bel et bien mesurés au-dessus de $T_c$.
{{%/notice%}}


Version extrême du phénomène, enfin&nbsp;: quand le flot ne possède <i>aucun</i> point fixe stable accessible, la transition ne se contente pas de se déplacer, elle <b>change de nature</b> et devient du premier ordre. C'est le mécanisme de Halperin, Lubensky et Ma, difficile à observer dans les supraconducteurs mais bien établi à la transition nématique–smectique A des cristaux liquides, qui en est l'analogue formel.

<br>

### Les exposants, et le miracle de l'universalité

Il ne reste qu'à récolter. Avec $y_t = 2 - \varepsilon/3$ et $y_h = (6-\varepsilon)/2$, les formules de Widom donnent, à l'ordre $\varepsilon$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{aligned}
\alpha &= \frac{\varepsilon}{6}\\
\beta &= \frac12 - \frac{\varepsilon}{6}\\
\gamma &= 1 + \frac{\varepsilon}{6}\\
\delta &= 3 + \varepsilon\\
\nu &= \frac12 + \frac{\varepsilon}{12}\\
\eta &= 0
\end{aligned}
$
</p>

Puis vient le geste particulièrement effronté&nbsp;: pour décrire le monde réel à trois dimensions, on pose $\varepsilon = 1$, très au-delà du domaine où le développement est censé valoir. Et cela marche remarquablement bien&nbsp;:

| | $\alpha$ | $\beta$ | $\gamma$ | $\delta$ | $\nu$ | $\eta$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\varepsilon = 0$ (champ moyen, $d=4$) | 0 | 0.5 | 1 | 3 | 0.5 | 0 |
| $\varepsilon = 1$, ordre $\varepsilon$ | 0.167 | 0.333 | 1.167 | 4 | 0.583 | 0 |
| $\varepsilon = 1$, ordre $\varepsilon^2$ | 0.077 | 0.340 | 1.244 | 4.462 | 0.626 | 0.019 |
| Ising 3D (valeurs acceptées) | 0.110 | 0.327 | 1.237 | 4.789 | 0.630 | 0.036 |

L'ordre $\varepsilon^2$ s'approche des valeurs acceptées pour le modèle d'Ising tridimensionnel, elles-mêmes en bon accord avec l'expérience.

{{%notice note%}}
<b>Une vérification à ne pas mener trop naïvement.</b> On pourrait vouloir tester les quatre relations d'échelle sur les colonnes de ce tableau. Trois d'entre elles passent (Rushbrooke donne $0{,}167 + 0{,}667 + 1{,}167 = 2$ à l'ordre $\varepsilon$), mais celle de Josephson échoue en apparence&nbsp;: $\nu d = 0{,}583 \times 3 = 1{,}75$ alors que $2 - \alpha = 1{,}83$.<br><br>
Ce n'est pas une erreur. Les relations sont <b>exactes</b> en fonction de $y_t$ et $y_h$, mais leurs <i>développements tronqués</i> ne le sont qu'à l'ordre calculé&nbsp;: l'écart observé est d'ordre $\varepsilon^2$, donc hors de portée d'un calcul à l'ordre $\varepsilon$. La colonne d'ordre $\varepsilon^2$ resserre d'ailleurs l'écart, et la colonne des valeurs acceptées satisfait les quatre relations à la troisième décimale.
{{%/notice%}}

<br>

#### Ce que nous avons gagné, en termes mesurables

Revenons au barreau de fer, car c'est là que se mesure le progrès.

Le champ moyen prédisait que l'aimantation s'éteint comme $\sqrt{T_c - T}$. La renormalisation prédit $(T_c-T)^{0{,}33}$, et c'est ce que donne la mesure. Ce n'est pas un raffinement décoratif&nbsp;: à un degré sous le point de Curie, l'écart entre les deux prédictions est visible sur la courbe expérimentale, et il l'était depuis les années 1960 sans qu'on sache l'expliquer.

Le champ moyen prédisait $\alpha = 0$, c'est-à-dire aucune divergence de la chaleur spécifique. On en mesure une. La renormalisation la produit.

Et surtout, nous savons désormais <b>pourquoi</b> ces nombres sont ce qu'ils sont&nbsp;: ce sont des valeurs propres de la linéarisation du flot au voisinage d'un point fixe. Un exposant critique n'est plus un paramètre ajusté sur des données, c'est une <i>propriété géométrique</i> d'une transformation dans l'espace des théories.

<br>

#### L'universalité, incarnée

La leçon dépasse largement l'aimant, et il faut la formuler en objets réels pour en mesurer l'étrangeté. Considérons trois expériences n'ayant apparemment rien de commun&nbsp;:

<ul style="margin-top:0.5em;">
<li>un <b>barreau de fer</b> chauffé vers 1043&nbsp;K, dont on suit l'aimantation&nbsp;;</li>
<li>du <b>dioxyde de carbone</b> porté à son point critique liquide-gaz (304&nbsp;K, 74&nbsp;bar), dont on suit l'écart de densité entre les deux phases&nbsp;;</li>
<li>un <b>mélange binaire</b> de deux liquides, méthanol et hexane par exemple, approchant sa température de démixtion, dont on suit l'écart de concentration.</li>
</ul>

Les trois systèmes n'ont rien à voir&nbsp;: des spins d'électrons dans un métal, des molécules dans un fluide, deux espèces chimiques qui se séparent. Leurs constituants, leurs interactions, leurs échelles d'énergie diffèrent de plusieurs ordres de grandeur.

<b>Les trois donnent le même $\beta \approx 0{,}33$</b>, le même $\gamma$, le même $\nu$.

Dans tout notre calcul, en effet, aucun détail microscopique n'est entré&nbsp;: les exposants ne dépendent que de la <b>dimension</b> de l'espace et de la <b>symétrie</b> du paramètre d'ordre. Or les trois systèmes partagent la dimension 3 et la même symétrie $\mathbb Z_2$ (spins hauts contre bas, phase dense contre diluée, riche en méthanol contre riche en hexane), et cela suffit à leur imposer les mêmes nombres.

C'est l'<b>universalité</b>, et c'est le semi-groupe qui l'explique&nbsp;: le flot vers les grandes échelles efface les détails microscopiques (variables non pertinentes) et toutes les théories d'une même classe convergent vers le même point fixe. Le point fixe ne se souvient de rien, sauf de la dimension et de la symétrie. C'est la raison profonde pour laquelle un modèle aussi grossier que $\phi^4$, quelques termes choisis par simple argument de symétrie et sans un seul atome dedans, peut prédire une décimale mesurée sur du fer réel.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
C, M, \chi, \xi \sim |t|^{-\text{exposants}}
\;\xrightarrow{\ \text{Widom}\ }\;
f(t,h) = b^{-d}f(b^{y_t}t,\, b^{y_h}h)
\;\xrightarrow{\ \text{gaussien}\ }\;
y_t = 2,\ y_h = \tfrac{d+2}{2}
\;\xrightarrow{\ \text{1 boucle},\ d = 4-\varepsilon\ }\;
\text{point fixe de Wilson–Fisher}
\;\xrightarrow{\ \text{linéarisation}\ }\;
y_t = 2 - \tfrac{\varepsilon}{3},\ y_h \text{ intact}
\;\xrightarrow{\ \varepsilon = 1\ }\;
\text{exposants d'Ising 3D, universalité}
$
</p>


<br>

### Pièges

<ul>
<li>L'identification $m^2 = a(T - T_c)$ est le pont entre le champ et la thermodynamique&nbsp;: la température entre dans la théorie par le terme de masse, et c'est pour cela que $y_t$ se lit sur le flot de $m^2$.</li>
<li>Le champ moyen est <i>aveugle aux fluctuations</i>&nbsp;: le résultat le plus contre-intuitif du flot est qu'un $m^2 < 0$ initial peut aboutir à un paramagnétique si $\lambda$ est grand. La transition n'appartient pas au lagrangien, elle appartient au flot.</li>
<li>Dans le calcul à une boucle du groupe de renormalisation, les intégrales internes ne courent que <b>sur la coquille</b> $\Lambda/b \leq |p| \leq \Lambda$.</li>
<li>Le développement en $\varepsilon = 4 - d$ est utilisé à $\varepsilon = 1$, hors de tout domaine de validité contrôlé, et la série est de surcroît asymptotique&nbsp;: son succès est un fait d'expérience (et un petit miracle), pas un théorème.</li>
<li>$\eta = 0$ à une boucle&nbsp;: l'exposant de la fonction de corrélation n'apparaît qu'à deux boucles. Un $\eta$ non nul mesure l'écart du champ à sa dimension naïve, d'où le nom de dimension anormale.</li>
<li>Vocabulaire à verrouiller&nbsp;: <b>pertinent</b> (grandit sous le flot, gouverne la physique aux grandes échelles), <b>non pertinent</b> (rétrécit, oubliable), <b>marginal</b> (immobile au premier ordre, tout se joue aux ordres suivants). En dimension $4-\varepsilon$, $\lambda$ est pertinent près du point gaussien&nbsp;; en dimension $> 4$, il devient non pertinent et le champ moyen dit vrai.</li>
<li>Les <b>facteurs de symétrie</b> des diagrammes sont la source d'erreur la plus fréquente de tout le chapitre, et ils ne s'improvisent pas&nbsp;: ils se comptent, en dénombrant les appariements de Wick équivalents et en les divisant par les factorielles du vertex. Ici, la boucle simple porte $1/2$, et la bulle porte $1/2$ multiplié par les 3 canaux. Une erreur d'un facteur 2 à cet endroit déplace le point fixe et fausse tous les exposants.</li>
<li>L'universalité n'affirme pas que tout est pareil&nbsp;: $T_c$, les amplitudes, les détails hors du régime critique restent propres à chaque matériau. Seuls les <i>exposants</i> (et certains rapports d'amplitudes) sont universels.</li>
</ul>

<br>

{{%notice note%}}
Et maintenant&nbsp;? La machine est complète pour les champs scalaires&nbsp;: quasiparticules, contretermes, self-énergie, flot. Mais les électrons ne sont pas des scalaires. La partie suivante donne un spin à la théorie des champs&nbsp;: l'équation de Dirac, les spineurs, et la découverte que l'antimatière est une conséquence de la relativité jointe à la mécanique quantique.
{{%/notice%}}



<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc11">Chapitre précédent</a></td><td><a href="../tqc13">Chapitre suivant</a></td>
    </tr>
</table>
</div>
