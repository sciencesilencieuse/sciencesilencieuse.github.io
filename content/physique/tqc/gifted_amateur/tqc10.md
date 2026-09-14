+++
title = "TQC-10"
date = 2026-07-28T10:00:00+01:00
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


# Théorie quantique des champs -- Partie 10

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


Changement de regard. Jusqu'ici, presque tous nos calculs consistaient à intégrer sur l'espace-temps, et la géométrie précise de celui-ci comptait&nbsp;: elle est encodée dans la métrique $g_{\mu\nu}$, le manuel d'instruction qui dit ce que mesurent les montres et les règles. Cette partie s'intéresse aux questions qui sont totalement aveugles à la métrique. La réponse ne peut alors dépendre que de propriétés globales, insensibles aux déformations continues&nbsp;: c'est le domaine de la topologie.

<ul style="margin-top:1em;">
<li><b>L'idée</b>&nbsp;: quand une symétrie est spontanément brisée (partie précédente), le champ peut la briser <i>différemment en différentes régions de l'espace</i>. Les configurations qui recollent ces régions sont des <b>défauts topologiques</b>, protégés non par une loi de conservation à la Noether mais par l'impossibilité de les déformer continûment vers le vide.</li>
<li><b>Le fil rouge</b>&nbsp;: l'effet <b>Aharonov–Bohm</b>, où des électrons qui ne rencontrent jamais le moindre champ magnétique voient pourtant leur figure d'interférence se décaler. On le rencontre d'abord comme un avant-goût, puis il resurgit deux fois&nbsp;: pour donner son flux au vortex, puis pour donner sa statistique à l'anyon.</li>
<li><b>Les objets</b>&nbsp;: les deux défauts les plus simples, le <b>kink</b> en une dimension d'espace et le <b>vortex</b> en deux. Le kink vit très bien tout seul&nbsp;; le vortex, lui, exige un champ de jauge pour exister, et cette association a une conséquence&nbsp;: la <b>quantification du flux magnétique</b>.</li>
<li><b>La théorie</b>&nbsp;: on construit un lagrangien qui est <i>lui-même</i> topologique, la théorie de <b>Chern–Simons</b>, où le symbole antisymétrique $\epsilon^{\mu\nu\lambda}$ remplace la métrique. En (2+1) dimensions, elle attache du flux aux charges et fabrique des particules qui ne sont ni bosons ni fermions&nbsp;: les <b>anyons</b>.</li>
</ul>
<br>


## Les objets topologiques

### Un cours éclair de topologie

Deux objets sont topologiquement équivalents si l'on peut déformer continûment l'un en l'autre, comme si tout était fait de pâte à modeler&nbsp;: on a le droit d'étirer et d'écraser, mais pas de percer, de recoller, d'ajouter ou de supprimer un trou. Des points voisins doivent rester voisins. C'est en ce sens que la tasse à café et le doughnut sont le même objet&nbsp;: chacun possède exactement un trou.

Donnons des noms aux espaces de base.

<div id="def">

La <b>droite réelle</b> est notée $\mathbb R$, le plan $\mathbb R^2$, et $\mathbb R^n$ en dimension $n$.

Un <b>segment</b> de $\mathbb R$ recollé bout à bout donne le cercle $S^1$. La sphère est $S^2$&nbsp;: attention, il s'agit de la <i>surface</i> de la boule, pas de son intérieur, c'est donc un espace de dimension 2.

On fabrique un <b>espace produit</b> en attachant une copie d'un espace à chaque point d'un autre&nbsp;: $\mathbb R \times \mathbb R = \mathbb R^2$, et le tore $T^2 = S^1 \times S^1$ (on retrouve le doughnut&nbsp;: un petit cercle attaché à chaque point d'un grand cercle).

</div>

<!-- Figure à redessiner (L&B fig. 29.2) : deux panneaux. (a) une droite R horizontale, une droite R verticale, le symbole ×, puis le plan R² quadrillé ; (b) deux cercles S¹ avec le symbole ×, puis le tore T², avec un grand cercle et un petit cercle dessinés dessus. Légende : un espace produit attache une copie d'un espace à chaque point de l'autre -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/espacesproduits.png" style="box-shadow:none;background:none;">
</div>

Un mot sur les plongements, parce qu'il resservira&nbsp;: $S^1$ ne peut pas être plongé dans $\mathbb R$, et $S^2$ ne peut pas être plongé dans $\mathbb R^2$. C'est pour cela que toute carte plane de la Terre exige une coupure quelque part, en général au milieu d'un océan.

Une fois qu'on a un espace, on peut s'y promener. Un <b>chemin</b> est une application $f$ d'un segment $[a,b]$ vers l'espace. Si $f(a) = f(b)$, le chemin se referme et devient un <b>lacet</b>. Deux lacets sont équivalents si on peut déformer continûment l'un en l'autre. La question centrale de tout ce chapitre est alors&nbsp;: combien y a-t-il de classes de lacets non équivalents&nbsp;?

<div id="def">

L'ensemble des classes de lacets d'un espace forme un groupe, le <b>groupe fondamental</b>, noté $\pi_1$.

<ul style="margin-top:0.5em;margin-bottom:1em">
<li>Dans $\mathbb R^n$, tout lacet est <b>contractile</b> (déformable en un point)&nbsp;: une seule classe, $\pi_1$ est le groupe trivial.</li>
<li>Si l'espace a un trou, un lacet est caractérisé par le nombre (algébrique) de tours qu'il fait autour&nbsp;: c'est le <b>nombre d'enroulement</b> (<i>winding number</i>). D'où $\pi_1(S^1) = \mathbb Z$.</li>
<li>Sur le tore, un lacet peut s'enrouler de deux façons indépendantes (par le trou, ou autour du boudin)&nbsp;: $\pi_1(T^2) = \mathbb Z \times \mathbb Z$.</li>
</ul>

</div>


Point crucial&nbsp;: un argument topologique ne fait appel à aucune structure géométrique. Il ne mesure rien, il compte.

<br>

### L'effet Aharonov–Bohm, un avant-goût

Avant de fabriquer des objets topologiques, voici un phénomène quantique dont le caractère topologique saute aux yeux. On réaffiche $\hbar$ dans ce paragraphe, parce que la phase $q\Phi/\hbar$ va avoir son importance.

On glisse un solénoïde très fin (rayon $R$, axe selon $\hat{\mathbf e}_z$) entre les deux fentes d'une expérience d'Young avec des électrons. Le champ magnétique vaut $(0,0,B)$ à l'intérieur du solénoïde et il est <b>rigoureusement nul partout à l'extérieur</b>, là où passent les électrons. Le potentiel vecteur, lui, ne s'annule pas dehors&nbsp;: $A^\theta = BR^2/2r$.

<!-- Figure à redessiner (L&B fig. 29.4) : dispositif des fentes d'Young vu de dessus. À gauche une source d'électrons, au centre un écran percé de deux fentes, entre les deux chemins un petit cercle marqué B (le solénoïde vu en coupe), à droite l'écran de détection. Les deux chemins d'électrons contournent le solénoïde de part et d'autre. Légende : les électrons ne traversent que des régions où B = 0, mais leurs chemins enlacent le flux -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/aharonovbohm.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

En présence de $\mathbf A$, l'impulsion se décale, $\mathbf p \to \mathbf p - q\mathbf A$, et une onde plane $\psi \propto e^{i\mathbf p\cdot\mathbf r/\hbar}$ accumule le long d'une trajectoire une phase supplémentaire $e^{i\Delta\alpha}$ avec

<p style="text-align:center;">
$\displaystyle
\Delta\alpha = -\frac{q}{\hbar}\int \mathbf A\cdot\mathrm d\mathbf r
$
</p>

Prise isolément, cette phase ne veut rien dire&nbsp;: une transformation de jauge $\mathbf A \to \mathbf A + \boldsymbol\nabla\chi$ la modifie arbitrairement. Mais l'interférence ne dépend que de la <i>différence</i> entre les deux chemins, et cette différence referme la boucle&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta\delta = \Delta\alpha_1 - \Delta\alpha_2 = \frac{q}{\hbar}\oint \mathbf A\cdot\mathrm d\mathbf r
$
</p>

Sur une boucle fermée, la contribution de jauge $\oint \boldsymbol\nabla\chi\cdot\mathrm d\mathbf r = 0$ disparaît, et le théorème de Stokes traduit l'intégrale en flux&nbsp;:

<p style="text-align:center;">
$\displaystyle
\Delta\delta = \frac{q}{\hbar}\int \boldsymbol\nabla\times\mathbf A\cdot\mathrm d\mathbf S = \frac{q}{\hbar}\int \mathbf B\cdot\mathrm d\mathbf S = \frac{q}{\hbar}\,\Phi
$
</p>

</div>

<br>

<div id="theo">

<b>Effet Aharonov–Bohm</b>

La figure d'interférence se décale d'une phase $\displaystyle \Delta\delta = \frac{q\\,\Phi}{\hbar}$.

où $\Phi$ est le flux enfermé dans le solénoïde, alors même que les électrons ne rencontrent jamais le moindre champ magnétique.<br>
L'effet est observé expérimentalement&nbsp;!

</div>

Pourquoi dit-on que l'effet est topologique&nbsp;?<br>
La fonction d'onde électronique vit sur le plan privé de l'origine (là où on a planté le flux)&nbsp;: une feuille avec un trou. L'électromagnétisme a la symétrie $U(1)$, et une phase se lit sur un cercle du plan complexe&nbsp;: la topologie de $U(1)$ est celle de $S^1$.<br>
Définir la phase partout sur la feuille trouée, c'est donc envoyer $S^1$ sur un lacet autour du trou. Ces applications tombent dans des classes disjointes étiquetées par un entier, précisément parce que $\pi_1(S^1) = \mathbb Z$, et deux classes différentes ne peuvent pas être déformées l'une dans l'autre. Le décalage des franges ne mesure pas une distance&nbsp;; il compte un enlacement.

<br>

### Les kinks

Passons à la fabrication d'objets. On se place en (1+1) dimensions d'espace-temps avec le lagrangien de brisure de symétrie de la théorie $\phi^4$&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\mathcal L = \tfrac12(\partial_\mu\phi)^2 - U(\phi)
$
 avec 
 $\displaystyle
 U(\phi) = \frac{\lambda}{4}\,(v^2 - \phi^2)^2
 $
</p>

C'est bien notre lagrangien à symétrie brisée&nbsp;: en développant le carré et en posant $v^2 = m^2/\lambda$, on retrouve le terme de masse $+\tfrac12 m^2\phi^2$ et l'interaction $-\tfrac{\lambda}{4}\phi^4$. 

Le potentiel est un double puits, avec $U = 0$ aux deux minima $\phi = \pm v$. En développant autour de l'un des deux vides, les excitations sont des particules de masse $m_{\text{phys}} = (2\lambda v^2)^{1/2}$.

</div>

<!-- Figure à redessiner (d'après L&B fig. 29.5) : le potentiel U(φ) tracé en fonction de φ, en double puits symétrique, avec les deux minima marqués en φ = -v et φ = +v, la bosse centrale en φ = 0, et U = 0 au niveau des minima. Légende : le potentiel à symétrie brisée, deux vides dégénérés -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:440px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/doublepuitskink1.png" style="box-shadow:none;background:none;">
</div>

La leçon de ce chapitre tient en une phrase&nbsp;: <b>les particules ne sont pas les seuls habitants de ce potentiel</b>.<br>
Cherchons les configurations statiques dont la densité d'énergie $\tfrac12(\partial_x\phi)^2 + U(\phi)$ s'annule en $x = \pm\infty$. Cela impose au champ d'être constant et de siéger dans un zéro du potentiel aux deux extrémités. La solution ennuyeuse est $\phi(x) = v$ partout (ou $-v$ partout)&nbsp;: c'est le vide ordinaire de la symétrie brisée. La solution intéressante prend $\phi(-\infty) = -v$ et $\phi(+\infty) = +v$&nbsp;: le champ doit alors traverser la bosse quelque part.

<!-- Figure à redessiner (d'après L&B fig. 29.7) : le profil du kink φ(x) tracé en fonction de x, courbe en S montant de -v (asymptote à gauche) vers +v (asymptote à droite), traversant l'axe en x = 0 ; coter la largeur l de la zone de transition autour du croisement. Légende : le kink interpole entre les deux vides sur une région de taille finie -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:440px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/doublepuitskink2.png" style="box-shadow:none;background:none;">
</div>

<div id="def">

Cette configuration est le <b>kink</b>&nbsp;: une moitié du champ vit dans un vide, l'autre moitié dans l'autre, et le champ interpole entre les deux sur une région finie. Le champ brise la symétrie de deux façons différentes selon la région d'espace&nbsp;: les extrémités $x = \pm\infty$ vivent dans des vides différents.

</div>

Pour savoir si cet objet a le droit d'exister, il faut vérifier que son énergie totale est finie. Le calcul contient une jolie astuce.

<div id="preuve">

Le kink est statique, donc $\partial_0\phi = 0$ et l'énergie vaut $E = \int\mathrm dx\left[\tfrac12(\partial_x\phi)^2 + U(\phi)\right]$.

L'astuce (dite de Bogomolny) consiste à intégrer une fois l'équation du mouvement statique $\dfrac{\partial^2\phi}{\partial x^2} = \dfrac{\partial U}{\partial\phi}$. On multiplie par $\partial_x\phi$ et on intègre&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac12\left(\frac{\partial\phi}{\partial x}\right)^2 = U(\phi)
$
</p>

L'intégration produit en principe une constante. Elle est nulle ici parce que les deux membres tendent vers zéro en $x\to\pm\infty$ (le champ devient constant et atteint un zéro du potentiel), et c'est précisément notre condition aux limites.<br>
L'égalité dit que la densité d'énergie cinétique (au sens du gradient) et la densité potentielle contribuent à parts exactement égales.

L'énergie devient alors une intégrale <i>sur les valeurs du champ</i>, sans plus aucune référence au profil précis&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = \int\mathrm dx\, 2\,U(\phi) = \int_{-v}^{v}\mathrm d\phi\,\frac{\mathrm dx}{\mathrm d\phi}\,2\,U(\phi) = \int_{-v}^{v}\mathrm d\phi\,\big[2U(\phi)\big]^{1/2}
$
</p>

On injecte $[2U(\phi)]^{1/2} = (\lambda/2)^{1/2}(v^2 - \phi^2)$. Et comme $\int_{-v}^{v}(v^2-\phi^2)\\,\mathrm d\phi = \tfrac43 v^3$&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = \frac{2\sqrt2}{3}\,\sqrt\lambda\; v^3 = \frac{1}{\sqrt2}\,\frac{4m^3}{3\lambda}
$
</p>

où $m$ est le <i>paramètre du lagrangien</i> ($v^2 = m^2/\lambda$).<br>
Exprimée avec la masse physique $m_{\text{phys}} = \sqrt2\\, m$, la même énergie s'écrit plus joliment $E = m_{\text{phys}}^3/3\lambda$.

</div>

L'énergie est finie&nbsp;: le kink existe. Et la formule cache un message profond&nbsp;: <b>l'énergie est inversement proportionnelle à la constante de couplage</b>. Un développement en puissances de $\lambda$, comme ceux de la théorie des perturbations, ne verra jamais un objet en $1/\lambda$&nbsp;: les objets topologiques sont fondamentalement <b>non perturbatifs</b>. Aucune somme de diagrammes de Feynman ne les fabrique.

Le kink a aussi une taille finie $l$, fixée par un bras de fer&nbsp;: le terme de gradient $\int\mathrm dx\\,\tfrac12(\partial_x\phi)^2 \approx l\\,(v/l)^2$ voudrait étaler le kink (grand $l$), tandis que le terme potentiel $\int\mathrm dx\\, U \approx \lambda v^4 l$ voudrait le comprimer (petit $l$, pour minimiser la région où le champ traîne hors des vides). L'équilibre donne $l \approx (\lambda v^2)^{-1/2} \sim 1/m$&nbsp;: la taille du kink est la longueur Compton des particules ordinaires de la théorie.

Faisons l'inventaire des propriétés&nbsp;: énergie finie et localisée dans une région de taille $l$, la théorie est invariante par translation (le centre du kink peut être n'importe où) et par Lorentz (on peut le booster à toute vitesse). Le kink se comporte donc <b>très exactement comme une particule</b>, alors que rien dans la quantification canonique ne l'annonçait.

Et il est <b>stable</b>. Pour effacer un kink, il faudrait soulever une demi-droite entière de champ d'un minimum du potentiel vers l'autre, ce qui coûte une énergie infinie. En langage plus mathématique&nbsp;: en tenant fermement les deux extrémités (l'une en $-v$, l'autre en $+v$), il est impossible de déformer le profil pour supprimer la traversée de l'axe. La seule façon de tuer un kink est de lui présenter un <b>antikink</b>, le profil qui descend de $+v$ vers $-v$. La paire kink-antikink, elle, a ses deux extrémités dans le <i>même</i> vide&nbsp;: en tenant les bouts, on peut aplatir continûment tout ce qui se passe au milieu et retomber sur le vide $\phi = -v$.

<!-- Figure à redessiner (L&B fig. 29.9) : profil φ(x) montrant un kink suivi d'un antikink : la courbe part de -v, monte en S vers +v (kink), reste en plateau, puis redescend en S vers -v (antikink). Annoter « kink » et « antikink ». Légende : les deux extrémités vivent dans le même vide, la paire est déformable vers le vide -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/kinkantikink.png" style="box-shadow:none;background:none;">
</div>

{{%notice note%}}
Le jumeau expérimental du kink est la <b>paroi de domaine</b> d'un aimant. Les deux vides sont «&nbsp;tous les spins vers le haut&nbsp;» et «&nbsp;tous les spins vers le bas&nbsp;», un domaine est une région où la symétrie est brisée d'une façon donnée, et la paroi est la zone de largeur finie où les spins basculent. Les parois de domaines sont bien réelles et détectables. Nambu a proposé l'idée vertigineuse que l'Univers, en brisant ses symétries au refroidissement, aurait pu se découper de la même façon en domaines cosmiques aux vides différents.
{{%/notice%}}

<br>

### La charge topologique

La stabilité du kink mérite d'être encodée dans une grandeur conservée, une charge. On la construit à la main.

<div id="def">

Le <b>courant topologique</b> (ou courant de kink) est défini par

<p style="text-align:center;">
$\displaystyle
J^\mu_{\mathrm T} = \frac{1}{2v}\,\epsilon^{\mu\nu}\,\partial_\nu\phi
$
</p>

où $\epsilon^{\mu\nu}$ est le symbole antisymétrique, fixé par $\epsilon^{01} = 1$.<br>
 Rq&nbsp;: il n'est pas ici considéré comme un tenseur, et donc $\epsilon^{\mu\nu} = \epsilon_{\mu\nu}$ (on ne monte pas ses indices avec la métrique).

</div>

<br>

<div id="preuve">

Ce courant est conservé <i>identiquement</i>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu J^\mu_{\mathrm T} = \frac{1}{2v}\,\epsilon^{\mu\nu}\,\partial_\mu\partial_\nu\phi = 0
$
</p>

En effet, on contracte un objet antisymétrique ($\epsilon^{\mu\nu}$) avec un objet symétrique ($\partial_\mu\partial_\nu$). Aucune équation du mouvement n'a servi, aucune symétrie du lagrangien non plus&nbsp;: ce n'est <b>pas</b> un courant de Noether. La conservation est une identité de structure.

</div>

La charge associée compte alors exactement ce qu'on veut&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
Q_{\mathrm T} = \int_{-\infty}^{\infty}\mathrm dx\, J^0_{\mathrm T} = \frac{1}{2v}\int_{-\infty}^{\infty}\mathrm dx\,\frac{\partial\phi}{\partial x} = \frac{1}{2v}\big[\phi(\infty) - \phi(-\infty)\big]
$
</p>

Le kink porte $Q_{\mathrm T} = 1$, l'antikink $Q_{\mathrm T} = -1$, et les particules ordinaires de la théorie (les «&nbsp;phions&nbsp;»), qui ont leurs deux extrémités dans le même vide, portent $Q_{\mathrm T} = 0$. On appelle $Q_{\mathrm T}$ la <b>charge topologique</b>.

</div>

La charge ne dépend que des valeurs du champ <i>au bord</i>&nbsp;: elle ignore tout de ce qui se passe entre les deux. Et remarquez la signature dans la définition&nbsp;: les indices sont sommés avec $\epsilon^{\mu\nu}$ et non avec $g^{\mu\nu}$. La métrique dit ce que mesurent les montres et les règles&nbsp;; la charge topologique n'en a pas besoin, elle compte. Cette dépendance en $\epsilon$ plutôt qu'en $g$ est la signature générale des objets topologiques, et elle deviendra un principe de construction au chapitre suivant.

<br>

### Les vortex

Montons d'une dimension&nbsp;: espace-temps (2+1), même lagrangien, mais le champ est maintenant complexe et le potentiel devient un chapeau mexicain dont les minima décrivent un <i>cercle</i> dans le plan $\phi_1$-$\phi_2$. On adopte des coordonnées polaires internes en écrivant $\phi(x) = \phi_1(x) + \mathrm i\phi_2(x) \equiv \rho(x)\\,\mathrm e^{\mathrm i\theta(x)}$.

La question du kink se transpose mot pour mot&nbsp;: à quoi ressemble un champ continu dont les éléments vivent dans des vides différents dans l'infini spatial&nbsp;? La frontière de l'espace est maintenant un cercle (le cercle à l'infini du plan), et l'espace des vides est aussi un cercle (le fond du chapeau). Une configuration de bord est donc une application d'un cercle sur un cercle, et l'on sait depuis le début du chapitre que ces applications sont classées par $\pi_1(S^1) = \mathbb Z$.

<div id="def">

Un <b>vortex</b> est une configuration dont la forme à l'infini est

<p style="text-align:center;">
$\displaystyle
\phi(\mathbf x) = K\,e^{\mathrm i[n\,\theta(\mathbf x) + \varphi]} \; (|\mathbf x|\to\infty)
$
</p>

où $\theta(\mathbf x) = \tan^{-1}(x^2/x^1)$ est l'angle qui repère la position dans le plan, $\varphi$ une phase constante arbitraire, et $n \in \mathbb Z$ le <b>nombre d'enroulement</b>&nbsp;: le nombre de tours que fait la direction du champ dans le plan complexe interne quand on parcourt une fois le cercle à l'infini. L'équation attache la direction interne du champ à l'angle de l'espace réel.

</div>

<!-- Figure à redessiner (L&B fig. 29.10) : quatre panneaux carrés (a)-(d), chacun montrant un champ de flèches dans le plan. (a) n = 1 : flèches radiales sortantes (hérisson) ; (b) n = 1 avec φ = π/2 : flèches tangentes, tourbillon circulaire ; (c) n = -1 : configuration hyperbolique (flèches convergeant selon un axe, divergeant selon l'autre) ; (d) n = 2 : configuration dipolaire à double enroulement. Légende : le nombre d'enroulement compte les tours du champ interne le long d'un tour dans l'espace -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/vortexenroulements.png" style="box-shadow:none;background:none;">
</div>

<div id="preuve">

(a) **Le Hérisson** ($n=1, \varphi=0$ )<br>
Ici, la relation est $\alpha = 1\times\theta + 0$. La flèche pointe exactement dans la même direction que la position. Quand on fait un tour complet anti-horaire, la flèche fait exactement 1 tour complet dans le sens anti-horaire. Donc $n=1$.

(b) **Le Tourbillon** ($n=1, \varphi=\pi/2$ )<br>
Ici, la relation est $\alpha = 1\times\theta + \pi/2$.<br>
C'est exactement la même image que (a), sauf que toutes les flèches ont été tournées de 90 degrés vers la gauche (c'est le rôle de la phase arbitraire $\varphi$).<br>
Résultat&nbsp;: si on marche autour du centre, la flèche tourne toujours dans le même sens que nous, à la même vitesse. Elle fait 1 tour complet anti-horaire. Donc $n=1$.

(c) **La Selle** ($n=-1$)<br>
Ici, la relation est $\alpha = -1\times\theta$ (en supposant $\varphi=0$). L'angle de la flèche tourne dans le sens inverse du déplacement&nbsp;!<br>
Pendant qu'on fait 1 tour anti-horaire, la flèche fait 1 tour dans le sens horaire (sens des aiguilles d'une montre). Le signe moins indique cette rotation inversée. Donc $n=-1$.

(d) **Le Double Tour** ($n=2$)<br>
Ici, la relation est $\alpha = 2\times\theta$. La flèche tourne deux fois plus vite que nous&nbsp;!<br>
En faisant un seul tour autour du centre, on voit la flèche faire 2 tours complets sur elle-même. Donc $n=2$.

</div>

Le vortex est-il viable&nbsp;? Calculons son énergie.

<div id="preuve">

Pour une configuration statique, la densité d'énergie est $\mathcal H = \tfrac12\boldsymbol\nabla\phi^\dagger\cdot\boldsymbol\nabla\phi + U(\phi)$, avec le même chapeau mexicain qu'au début du chapitre, transposé au champ complexe&nbsp;: $U(\phi) = \frac{\lambda}{4}\big(|K|^2 - \phi^\dagger\phi\big)^2$, où $|K|$ joue le rôle que $v$ jouait pour le kink. Il s'annule sur tout le cercle des vides $|\phi| = |K|$, donc le terme potentiel ne coûte rien à l'infini.

Le danger vient du gradient. À grande distance, seule la phase varie, et son gradient en coordonnées cylindriques vaut&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol\nabla\phi = \frac1r\,\big(\mathrm i\,n\,K e^{\mathrm i n\theta}\big)\,\hat{\mathbf e}_\theta
\;\Longrightarrow\;
|\boldsymbol\nabla\phi|^2 = \frac{n^2|K|^2}{r^2}
$
</p>

Le cœur du vortex ($r\to0$) a l'air affreusement singulier, mais en réalité l'amplitude $\rho$ s'annule au centre et régularise tout&nbsp;; on range donc le cœur dans une énergie finie $E_{\text{cœur}}(a)$, où $a$ est sa taille, et on n'intègre qu'à l'extérieur. Ce découpage est sans danger précisément parce que le problème qu'on va trouver vient des <i>grandes</i> distances, pas du cœur&nbsp;:

<p style="text-align:center;">
$\displaystyle
E = E_{\text{cœur}} + \int_a^{\infty}\mathrm dr\,\mathrm d\theta\; r\,\mathcal H = E_{\text{cœur}} + \pi n^2|K|^2\int_a^{\infty}\frac{\mathrm dr}{r}
$
</p>

L'intégrale diverge logarithmiquement.

</div>

Verdict&nbsp;: <b>un vortex isolé n'est pas un objet stable</b>. On le voit à l'œil nu sur les figures&nbsp;: même très loin du centre, le champ continue de tourbillonner, et ce tourbillonnement à l'infini coûte sans fin. Ce n'est pas un accident de notre modèle&nbsp;: un théorème dû à Derrick interdit les objets topologiques statiques dans les théories scalaires en plus d'une dimension spatiale.

<div id="preuve">

<details>
<summary>
L'argument de Derrick (version simplifiée)
</summary>

On prend une configuration statique candidate $\phi(\mathbf x)$ en dimension spatiale $d$, d'énergie $E = E_{\text{grad}} + E_{\text{pot}}$, et on la comprime ou on la dilate&nbsp;: $\phi_\mu(\mathbf x) = \phi(\mu\mathbf x)$. Un changement de variable donne les lois d'échelle

<p style="text-align:center;">
$\displaystyle
E(\mu) = \mu^{2-d}\,E_{\text{grad}} + \mu^{-d}\,E_{\text{pot}}
$
</p>

Pour $d = 1$, les deux exposants ont des signes opposés&nbsp;: le bras de fer a un équilibre, et c'est exactement celui qui fixait la taille $l$ du kink. Pour $d \geq 2$, les deux exposants sont négatifs ou nuls, et le bras de fer disparaît&nbsp;: les deux termes décroissent ensemble quand $\mu$ grandit. Or $\mu > 1$ <b>comprime</b> la configuration. Rien n'arrête donc son <b>effondrement</b> vers une taille nulle, où l'énergie tend vers $0$ (pour $d > 2$) ou vers $E_{\text{grad}}$ seul (pour $d = 2$). Dans l'autre sens, $\mu \to 0$ dilate et fait au contraire diverger l'énergie. Aucun minimum à taille finie, donc aucune solution statique stable.

Avec des scalaires seuls, l'histoire du kink ne se généralise pas, et il faut enrichir la théorie.

</details>

</div>

Le remède consiste à <b>jauger la théorie</b>&nbsp;: on introduit une dérivée covariante

$$
D_\mu\phi = \partial_\mu\phi + \mathrm i q A_\mu\phi
$$

et l'on va choisir le champ de jauge pour qu'il annule précisément la partie divergente de l'énergie, celle qui venait du gradient de la phase. Il faut donc que $D_\mu\phi$ s'annule à l'infini. Le bon candidat est un champ de jauge dont la limite à grande distance est $\mathbf A(r,\theta) \to \frac1q\boldsymbol\nabla(n\theta)$.

<div id="preuve">

Vérifions&nbsp;:<br>
Les composantes du champ proposé à l'infini sont $A_r \to 0$ et $A_\theta \to -\dfrac{n}{qr}$ (attention aux signes&nbsp;: avec la métrique $(+,-,-,-)$, on a $A^i = -A_i$). La composante orthoradiale de la dérivée covariante devient

<p style="text-align:center;">
$\displaystyle
D_\theta\phi = \frac1r\,\frac{\partial\phi}{\partial\theta} + \mathrm i q A_\theta\,\phi
\;\longrightarrow\;
\frac{\mathrm i n}{r}\,\phi - \frac{\mathrm i n}{r}\,\phi = 0
\qquad (r\to\infty)
$
</p>

et $D_r\phi \to 0$ trivialement. Le terme cinétique du champ, celui-là même qui divergeait, s'éteint à l'infini&nbsp;: le champ de jauge a sauvé le vortex.

</div>

On pourrait craindre que le champ de jauge apporte sa propre facture via le terme $-\tfrac14 F_{\mu\nu}F^{\mu\nu}$. Il n'en est rien, et la raison est élégante&nbsp;: à l'infini, $\mathbf A = \boldsymbol\nabla\chi$ avec $\chi = \frac{n\theta}{q}$. Notre champ de jauge est <i>entièrement</i> une transformation de jauge, une <b>jauge pure</b> (déjà rencontrée au chapitre sur la brisure de symétrie). Donc $F_{\mu\nu} = 0$ à grande distance et le terme $F^2$ ne menace rien.

Mais alors, si $F = 0$ dehors, le champ de jauge fait-il quoi que ce soit&nbsp;? Oui, et c'est un déjà-vu&nbsp;: la situation est exactement celle d'Aharonov–Bohm, une jauge pure à l'extérieur et du flux caché au centre. Calculons ce flux par le théorème de Stokes, en intégrant sur un cercle à l'infini&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\Phi = \oint\mathbf A\cdot\mathrm d\mathbf l = \int_0^{2\pi} A^\theta\, r\,\mathrm d\theta = \int_0^{2\pi}\mathrm d\theta\,\frac nq = \frac{2\pi n}{q}
$
</p>

<b>Le vortex porte un flux magnétique quantifié</b>, en unités de $2\pi/q$, et le nombre de quanta est le nombre d'enroulement $n$. La quantification n'est pas dynamique&nbsp;: elle est topologique, imposée par le fait que $n$ est un entier.

</div>

{{%notice note%}}
Ce vortex jaugé n'est pas une curiosité de théoricien&nbsp;: c'est le vortex d'Abrikosov des supraconducteurs de type II, où le paramètre d'ordre joue le rôle de $\phi$ et où le flux traverse le matériau en tubes portant chacun un quantum $2\pi/q$ (avec $q = 2e$, la charge des paires de Cooper). L'étape suivante de cette logique, un objet topologique en (3+1) dimensions, existe aussi&nbsp;: c'est le <b>monopôle magnétique</b>, étudié plus tard.
{{%/notice%}}

<br>

### Bilan

<div id="grosseformule">

<p style="text-align:center;">
$\displaystyle
\text{symétrie brisée}
\;\xrightarrow{\ \text{bords dans des vides différents}\ }\;
\text{kink / vortex}
\;\xrightarrow{\ \epsilon^{\mu\nu},\ \text{pas } g^{\mu\nu}\ }\;
Q_{\mathrm T}\ \text{conservée sans Noether}
\;\xrightarrow{\ E \sim \ln,\ \text{Derrick}\ }\;
\text{jauger : } D_\mu\phi
\;\xrightarrow{\ \mathbf A \to \frac1q\boldsymbol\nabla(n\theta)\ }\;
\Phi = \frac{2\pi n}{q}
$
</p>

</div>

### Pièges

<ul>
<li>$E \propto 1/\lambda$&nbsp;: aucune série perturbative ne voit un kink. «&nbsp;Non perturbatif&nbsp;» n'est pas une figure de style, c'est un théorème sur les développements en puissances de $\lambda$.</li>
<li>La conservation de $J^\mu_{\mathrm T}$ est une <b>identité</b> (antisymétrique contre symétrique), pas un théorème de Noether&nbsp;: elle ne doit rien à une symétrie du lagrangien et vaut hors équations du mouvement.</li>
<li>La phase d'Aharonov–Bohm d'un <i>seul</i> chemin dépend de la jauge et n'a aucun sens physique&nbsp;; seule la différence, c'est-à-dire l'intégrale sur la boucle fermée, est invariante.</li>
<li>Hiérarchie de stabilité à retenir&nbsp;: le kink scalaire est stable en $d=1$&nbsp;; le vortex scalaire (dit «&nbsp;global&nbsp;») diverge logarithmiquement en $d=2$ (Derrick)&nbsp;; le vortex ne devient un objet qu'une fois la théorie <b>jaugée</b>.</li>
<li>À l'infini du vortex, $\mathbf A$ est une jauge pure, donc $F_{\mu\nu} = 0$&nbsp;: le flux $\Phi = 2\pi n/q$ n'est pas en contradiction avec cela, il est concentré dans le cœur, exactement comme le flux du solénoïde d'Aharonov–Bohm.</li>
</ul>

<br>

## La théorie topologique des champs

Le chapitre précédent a montré des objets topologiques vivant dans des théories ordinaires. On franchit maintenant un cran&nbsp;: construire une théorie qui est <i>elle-même</i> topologique, c'est-à-dire dont le lagrangien ignore la métrique. Le terrain de jeu est l'espace-temps (2+1)-dimensionnel, le «&nbsp;flatland&nbsp;», et il faut commencer par une surprise sur les statistiques quantiques.

{{%notice note%}}
<b>Deux notations à ne pas confondre dans ce chapitre.</b><br><br>
$\Phi$ reste réservé au <b>flux magnétique</b>, comme dans tout le chapitre précédent&nbsp;: c'est lui qui vaut $2\pi n/q$ pour le vortex, et c'est lui qui reviendra à la toute fin, attaché aux charges par la théorie de Chern–Simons.<br><br>
L'<b>angle d'enroulement</b> d'une particule autour d'une autre sera noté $\vartheta$, et le <b>facteur de phase</b> qu'un processus fait acquérir à la fonction d'onde sera noté $W(\vartheta)$. Le symbole $\phi$, lui, garde son sens habituel de champ scalaire.
{{%/notice%}}

### Les anyons de Wilczek

En dimension 3, le catalogue des particules identiques tient en un signe&nbsp;: l'échange de deux particules multiplie la fonction d'onde par $+1$ (bosons) ou $-1$ (fermions),

<p style="text-align:center;">
$\displaystyle
\psi(x_1, x_2) = \pm\,\psi(x_2, x_1)
$
</p>

En dimension 2, cette définition abstraite de l'échange est trop naïve. Un échange n'est pas un tour de magie où les particules disparaissent et réapparaissent&nbsp;: c'est un <b>processus physique</b> où on les déplace réellement l'une autour de l'autre. Classons donc les processus de déplacement. 

<ul>
<li>Dans un processus de <b>type A</b>, chaque particule revient à sa position de départ ($x_1 \to x_1$, $x_2 \to x_2$), éventuellement après avoir tourné autour de l'autre.</li> 
<li>Dans un processus de <b>type B</b>, les particules échangent leurs positions ($x_1 \to x_2$, $x_2 \to x_1$), là encore avec un nombre quelconque de tours en chemin.</li>
</ul>

<!-- Figure à redessiner (L&B fig. 30.1) : quatre panneaux (a)-(d) montrant deux particules numérotées 1 et 2 et leurs trajectoires. (a) type A trivial : chaque particule fait une petite boucle sur elle-même ; (b) type A avec enroulement : la particule 2 fait une grande boucle qui entoure la particule 1 ; (c) type B : les deux particules échangent leurs positions le long d'un grand ovale ; (d) type B avec enroulement : échange avec une boucle supplémentaire de l'une autour de l'autre. Légende : les processus se classent par l'angle total d'enroulement -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:460px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/echab.png" style="box-shadow:none;background:none;">
</div>

Voilà où la topologie entre en scène&nbsp;: on peut déformer continûment les trajectoires, mais on ne peut pas changer le <b>nombre de tours</b> qu'une particule fait autour de l'autre sans que les trajectoires se coupent. Le paramètre pertinent est l'angle dont une particule tourne autour de l'autre, que l'on notera $\vartheta$&nbsp;: les processus de type A réalisent $\vartheta = 2\pi p$ et ceux de type B réalisent $\vartheta = \pi(2p+1)$, avec $p$ entier, et chaque valeur de $p$ est une classe topologique distincte.

<div id="preuve">

Quelle phase quantique attacher à chaque classe&nbsp;?<br>
On suppose que chaque processus contribue à la fonction d'onde (ou, en théorie des champs, à l'intégrale de chemin) un facteur multiplicatif $W(\vartheta)$ de module 1. Si l'on enchaîne deux processus, les angles s'additionnent et les facteurs se multiplient&nbsp;:

<p style="text-align:center;">
$\displaystyle
W(\vartheta_1 + \vartheta_2) = W(\vartheta_1)\,W(\vartheta_2)
\;\Longrightarrow\;
\displaystyle W(\vartheta) = \mathrm e^{\mathrm i\eta\vartheta}
$
</p>


Le point crucial est que rien n'oblige le paramètre $\eta$ à être entier.

Le traitement complet passe par la quantification sur l'espace des configurations à points coïncidents exclus, où les classes de trajectoires forment le <i>groupe de tresses</i>. Notre argument par phases multiplicatives en capture tout le contenu utile ici, parce que la seule donnée topologique d'une tresse à deux brins est justement l'angle d'enroulement total.

</div>

Confrontons maintenant ce résultat à la vieille définition. Un échange simple est un processus de type B minimal, $\vartheta = \pi$, donc un facteur $W = \mathrm e^{\mathrm i\eta\pi}$. On retrouve les bosons quand $\eta$ est un entier pair et les fermions quand il est impair. Mais tous les $\eta$ intermédiaires sont permis&nbsp;: en dimension 2, il existe des particules à statistique quelconque, baptisées <b>anyons</b> par Frank Wilczek (le nom est un jeu de mots&nbsp;: <i>any</i>-ons, les particules à statistique <i>quelconque</i>).

Pourquoi est-ce réservé au flatland&nbsp;? En dimension 3, la troisième direction permet de faire passer les trajectoires l'une derrière l'autre&nbsp;: toutes les boucles se contractent, tous les processus de type A deviennent équivalents au processus trivial, tous les processus de type B se réduisent à l'échange simple. Il ne reste que $\vartheta = 0$ ou $\pi$ à un multiple trivial près, et le monde retombe sur bosons et fermions. L'existence des anyons est une propriété de $\pi_1$ de l'espace des configurations, pas une propriété des particules.

<br>

### La théorie de Chern–Simons

Il faut maintenant un lagrangien qui héberge naturellement cette physique. Qu'est-ce qu'un lagrangien «&nbsp;topologique&nbsp;»&nbsp;? Nos lagrangiens habituels contractent leurs indices avec la métrique $g_{\mu\nu}$&nbsp;; un lagrangien topologique les contracte avec le symbole antisymétrique, ici $\epsilon^{\mu\nu\lambda}$ en (2+1) dimensions. Il est donc aveugle aux montres et aux règles, et son contenu ne dépend que de la topologie de la variété[^1] où l'on travaille.

[^1]: Une variété (manifold en anglais) est un espace topologique qui ressemble localement à un espace euclidien (un espace plat).

Première conséquence, spectaculaire&nbsp;: le hamiltonien d'une théorie topologique est nul.

<div id="preuve">

La méthode générale pour obtenir le tenseur énergie-impulsion est de varier l'action par rapport à la métrique&nbsp;:

<p style="text-align:center;">
$\displaystyle
T^{\mu\nu} = \frac{-2}{\sqrt{-\det g}}\,\frac{\delta S_{\text{top}}}{\delta g_{\mu\nu}}
$
</p>

Or une action topologique ne contient pas $g_{\mu\nu}$ du tout, donc $T^{\mu\nu} = 0$, et le hamiltonien, qui en est la composante 00, est nul&nbsp;: $H = 0$. Tous les états sont d'énergie nulle.

Ce qu'on met sous le tapis&nbsp;: cette définition «&nbsp;métrique&nbsp;» de $T^{\mu\nu}$ est admise ici (c'est celle de la relativité générale). Il faut aussi résister à une fausse conclusion&nbsp;: $H = 0$ ne signifie pas que la théorie est vide. Il signifie que le fondamental est massivement <b>dégénéré</b>, et le nombre d'états dégénérés dépend, précisément, de la topologie de la variété. C'est cette dégénérescence robuste qui fait rêver au calcul quantique topologique.

</div>

<br>

<div id="def">

Le <b>lagrangien de Chern–Simons</b>, pour un champ de jauge $U(1)$ noté $a_\mu$ et une constante $\kappa$, s'écrit en (2+1) dimensions&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathcal L = -\frac{\kappa}{2}\,\epsilon^{\mu\nu\lambda}\,a_\mu\,\partial_\nu\,a_\lambda
$
</p>

Un terme de Chern–Simons se repère au premier coup d'œil&nbsp;: il a la structure $\epsilon\\, a\\,\partial a$. Le compte d'indices ne tombe juste qu'en dimension impaire d'espace-temps&nbsp;: en (3+1), $\epsilon^{\mu\nu\lambda\rho}$ a quatre indices et $a\\,\partial a$ n'en fournit que trois, la construction échoue.

</div>

On note $a_\mu$ en minuscule, et c'est une vraie précaution&nbsp;: ce champ de jauge n'est <b>pas</b> le photon. Dans les applications (effet Hall quantique fractionnaire), $a_\mu$ est un champ <i>émergent</i>, fabriqué par le système lui-même.

L'invariance de jauge demande un examen, car elle est plus subtile qu'en électromagnétisme.

<div id="preuve">

Sous $a_\mu \to a_\mu + \partial_\mu\chi$, le lagrangien reçoit deux termes. Le premier, $\epsilon^{\mu\nu\lambda}\\,a_\mu\\,\partial_\nu\partial_\lambda\chi$, est nul par antisymétrie (le réflexe du chapitre précédent). Le second ne l'est pas, mais s'écrit comme une dérivée totale&nbsp;:

<p style="text-align:center;">
$\displaystyle
\delta S = \int\mathrm d^3x\;\epsilon^{\mu\nu\lambda}\,\partial_\mu\big(\chi\,\partial_\nu a_\lambda\big)
$
</p>

L'action n'est donc invariante de jauge <b>qu'à un terme de bord près</b>, qu'on jette en supposant que rien ne vit au bord.

Sur une variété <i>avec</i> bord, on n'a pas le droit de jeter ce terme, et l'invariance de jauge du volume doit être réparée par des degrés de liberté vivant sur le bord. Ce sont les fameux <b>états de bord</b> de l'effet Hall quantique, qui portent le courant. Ici, on travaille sans bord et on n'en dit pas plus.

</div>

Cherchons la dynamique&nbsp;:

Les équations d'Euler–Lagrange donnent $\kappa\\,\epsilon^{\mu\nu\lambda}\\,\partial_\nu a_\lambda = 0$, soit, en définissant le tenseur de champ $f_{\mu\nu} = \partial_\mu a_\nu - \partial_\nu a_\mu$&nbsp;:

<p style="text-align:center;">
$\displaystyle
f_{\mu\nu} = 0
$
</p>

La déception semble totale&nbsp;: là où l'électromagnétisme libre ($\partial_\mu F^{\mu\nu} = 0$) supporte des ondes planes, la théorie de Chern–Simons seule n'a <b>aucune dynamique propre</b>. Mais c'est une fausse déception&nbsp;: une théorie topologique ne devient intéressante que couplée à autre chose. Elle ne propage rien, elle <b>contraint</b>. 

Couplons donc $a_\mu$ au courant conservé $J^\mu$ d'un autre champ&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\mathcal L = -\frac{\kappa}{2}\,\epsilon^{\mu\nu\lambda}\,a_\mu\,\partial_\nu a_\lambda + a_\mu J^\mu
$
</p>

Euler-Lagrange permet d'obtenir l'équation du mouvement&nbsp;:

<p style="text-align:center;">
$\displaystyle
J^\mu = \kappa\,\epsilon^{\mu\nu\lambda}\,\partial_\nu a_\lambda = \frac{\kappa}{2}\,\epsilon^{\mu\nu\lambda}f_{\nu\lambda}
$
</p>

Cette équation n'est pas un théorème de Noether&nbsp;: c'est une <b>contrainte</b> que le terme de Chern–Simons impose au courant du champ source.

</div>

Pour décoder la contrainte, il faut d'abord une bizarrerie de la dimension 2&nbsp;: le produit vectoriel y produit un pseudo<i>scalaire</i> et non un pseudovecteur (en composantes, $S = \epsilon^{ij}A_iB_j$&nbsp;: il ne reste plus d'indice libre). Le «&nbsp;champ magnétique&nbsp;» du champ $a_\mu$ est donc un simple nombre pseudoscalaire, $b = \partial_2 a_1 - \partial_1 a_2$, tandis que son «&nbsp;champ électrique&nbsp;» garde deux composantes, $e_i = \partial_0 a_i - \partial_i a_0$.<br>
En écrivant les composantes $J^\mu = (\rho, \mathbf J)$ de la contrainte&nbsp;:

<p style="text-align:center;">
$\displaystyle
\rho = -\kappa\, b\\
\displaystyle J_i = -\kappa\,\epsilon^{ij}\, e_j
$
</p>

La seconde équation dit qu'un champ $e$ selon $y$ engendre un courant source selon $x$&nbsp;: c'est une relation de type Hall, courant perpendiculaire au champ. La première livre le message central du chapitre&nbsp;: en l'intégrant sur tout l'espace,

<div id="theo">

<p style="text-align:center;">
$\displaystyle
Q = -\kappa\int\mathrm d^2x\; b
$
</p>

c'est-à-dire 

<p style="text-align:center;">
$\displaystyle
\begin{pmatrix}\text{charge du}\\ \text{champ source}\end{pmatrix}
\;\propto\;
\begin{pmatrix}\text{flux du}\\ \text{champ } a_\mu\end{pmatrix}
$
</p>


<b>La théorie de Chern–Simons attache du flux à la charge.</b> Toute particule chargée du champ source se promène avec son petit tube de flux de $a_\mu$ accroché sur le dos.

</div>

<br>

### La statistique fractionnaire, ou la boucle bouclée

Il reste à assembler les pièces, et elles s'emboîtent d'elles-mêmes. On travaille avec $\hbar = 1$.

Prenons deux particules du champ source, de charge $q$. Grâce au chapitre précédent, on sait ce qui se passe quand une charge fait un tour complet autour d'un flux&nbsp;: elle ramasse la phase d'Aharonov–Bohm $e^{\mathrm i q\Phi}$. Mais grâce à Chern–Simons, chaque particule <i>est</i> un flux, avec $\Phi = -q/\kappa$. Un tour complet d'une particule autour de l'autre produit donc la phase

<p style="text-align:center;">
$\displaystyle
\mathrm e^{\mathrm i q\Phi} = \mathrm e^{-\mathrm i q^2/\kappa}
$
</p>


Or un tour complet, dans le langage du début de chapitre, c'est un angle $2\pi$, soit <b>deux</b> échanges, soit une phase $\mathrm e^{\mathrm i\eta\cdot 2\pi}$. En identifiant les deux expressions&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
2\pi\eta = -\frac{q^2}{\kappa}
\;\Longrightarrow\;
\eta = -\frac{q^2}{2\pi\kappa}
$
</p>

Rien n'oblige ce nombre à être entier&nbsp;: les excitations chargées d'une théorie de Chern–Simons sont génériquement des <b>anyons</b>. Le mécanisme du composite charge-flux réalise concrètement la statistique fractionnaire promise par l'argument topologique.

</div>

Le programme du chapitre est accompli&nbsp;: un lagrangien construit sur $\epsilon^{\mu\nu\lambda}$ au lieu de $g_{\mu\nu}$, sans dynamique propre, qui contraint les champs auxquels on le couple, attache du flux aux charges et produit des excitations fractionnaires. Une phase de la matière est décrite exactement par cette théorie&nbsp;: le fluide de Hall quantique fractionnaire (étudié beaucoup plus loin) dont les quasi-particules portent des charges et des statistiques fractionnaires mesurées expérimentalement.

<br>

### Bilan


<p style="text-align:center;">
$\displaystyle
\text{échange en 2D} = \text{enroulement}
\;\xrightarrow{\ W(\vartheta)=\mathrm e^{\mathrm i\eta\vartheta}\ }\;
\text{anyons } (\eta \notin \mathbb Z)
\;\xrightarrow{\ \mathcal L = -\frac\kappa2\epsilon\, a\,\partial a\ }\;
f_{\mu\nu}=0,\ H=0
\;\xrightarrow{\ +\,a_\mu J^\mu\ }\;
Q = -\kappa\Phi
\;\xrightarrow{\ \text{Aharonov–Bohm}\ }\;
\eta = -\frac{q^2}{2\pi\kappa}
$
</p>

<br>

### Pièges

<ul>
<li><b>Échange contre tour complet</b>&nbsp;: un échange est une rotation d'angle $\pi$ (phase $e^{\mathrm i\eta\pi}$), un tour complet vaut $2\pi$, soit deux échanges.</li>
<li>Les anyons sont strictement bidimensionnels&nbsp;: en dimension 3, la direction supplémentaire contracte toutes les boucles et il ne reste que $\pm 1$. L'argument est topologique, pas dynamique.</li>
<li>$H = 0$ ne signifie pas «&nbsp;théorie triviale&nbsp;» mais «&nbsp;fondamental dégénéré&nbsp;», avec une dégénérescence qui dépend de la topologie de la variété[^1].
</li>
<li>L'invariance de jauge de Chern–Simons ne vaut <b>qu'à un terme de bord près</b>&nbsp;: sur une variété à bord, elle exige des degrés de liberté de bord (les états de bord de l'effet Hall).</li>
<li>$f_{\mu\nu} = 0$ sans source&nbsp;: la théorie n'a aucune onde, aucune dynamique propre. Chern–Simons ne propage pas, elle contraint. Comparer mentalement avec $\partial_\mu F^{\mu\nu} = 0$ qui, lui, supporte des ondes planes.</li>
<li>$J^\mu = \kappa\,\epsilon^{\mu\nu\lambda}\partial_\nu a_\lambda$ n'est pas un courant de Noether&nbsp;: c'est une contrainte issue du couplage, écrite à la main. Même piège de vocabulaire qu'avec le courant topologique du kink.</li>
<li>Le champ $a_\mu$ n'est pas le photon&nbsp;: c'est un champ de jauge émergent (d'où la minuscule), et son «&nbsp;champ magnétique&nbsp;» $b$ est un pseudoscalaire, particularité de la dimension 2 où le produit vectoriel perd un indice.</li>
<li>Le terme de Chern–Simons n'existe qu'en dimension impaire d'espace-temps&nbsp;: en (3+1), le compte d'indices de $\epsilon^{\mu\nu\lambda\rho}$ contre $a\,\partial a$ échoue.</li>
</ul>


{{%notice note%}}
Et maintenant&nbsp;? Après cette parenthèse où les intégrales ne dépendaient pas de la métrique, retour aux intégrales qui en dépendent trop&nbsp;: celles qui divergent. La partie suivante affronte la <b>renormalisation</b>, l'art d'apprivoiser les infinis, et découvrira que les «&nbsp;constantes&nbsp;» de couplage n'en sont pas&nbsp;: elles varient avec l'échelle d'observation.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc9">Chapitre précédent</a></td><td><a href="../tqc11">Chapitre suivant</a></td>
    </tr>
</table>
</div>
