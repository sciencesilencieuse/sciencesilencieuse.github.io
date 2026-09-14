+++
title = "TQC-13"
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




# Théorie quantique des champs -- Partie 13

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


L'électron entre en scène&nbsp;!

Jusqu'ici, nos champs étaient des scalaires (une composante, spin 0) ou des vecteurs (quatre composantes, spin 1). Or la matière ordinaire est faite de fermions de spin $\frac{1}{2}$, et aucun des objets que nous connaissons ne sait les décrire. Cette partie construit le troisième type de champ, le <b>champ de spineurs</b>.

Elle reste tout entière au stade de l'<b>équation d'onde à une particule</b>&nbsp;: pas encore de champ quantifié, pas encore d'interaction. Deux chapitres, et une question qui les relie.

<ul>
<li><b>Quelle équation&nbsp;?</b> On suit le chemin historique de Dirac&nbsp;: chercher une équation du <b>premier ordre en temps</b>, pour guérir les probabilités négatives de Klein--Gordon. La contrainte est si forte qu'elle ne laisse qu'une issue, prendre la <b>racine carrée</b> de l'opérateur de Klein--Gordon, et la récompense dépasse toutes les espérances&nbsp;: le spin apparaît sans avoir été demandé, les antiparticules aussi, et le moment magnétique de l'électron sort avec la bonne valeur $g = 2$.</li>
<li><b>Quel objet&nbsp;?</b> L'équation impose quatre composantes, mais ne dit pas ce qu'elles sont. Le second chapitre les identifie en établissant la <b>loi de transformation des spineurs</b> sous le groupe de Lorentz. On y trouve deux espèces, gauche et droite, qui tournent de la même façon mais se boostent en sens opposés&nbsp;; et l'on comprend enfin le décompte&nbsp;: quatre composantes, c'est le spin ($\times 2$) multiplié par la <b>parité</b> ($\times 2$).</li>
</ul>

Ces outils permettront aussi de démontrer proprement deux formules que le premier chapitre doit se contenter d'annoncer&nbsp;: l'expression des spineurs $u(p)$ et $v(p)$ à impulsion quelconque, et l'équation de Dirac elle-même, redémontrée comme simple énoncé covariant de «&nbsp;au repos, gauche $=$ droite&nbsp;».

<br>

## L'équation de Dirac

### L'idée de Dirac&nbsp;: prendre la racine carrée d'un opérateur

#### Ce qu'on attend d'une équation d'onde

Une équation d'onde à une particule doit fournir une **densité de probabilité** $\rho$ et un courant $\boldsymbol j$ satisfaisant une équation de continuité $\partial_t\rho + \boldsymbol\nabla\cdot\boldsymbol j = 0$, qui garantit que la probabilité totale ne se perd pas. Et $\rho$ doit être **positive**, faute de quoi le mot «&nbsp;probabilité&nbsp;» perd son sens.

Grâce au fait qu'elle soit du **premier ordre en temps**, l'équation de Schrödinger $\mathrm i\partial_t\psi = \hat H\psi$ s'en acquitte parfaitement. En découle en effet naturellement une densité de probabilité définie par&nbsp;:

<p style="text-align:center;">
$\displaystyle \rho = \psi^*\psi = |\psi|^2 \;\geq\; 0$
</p>

qui est positive par construction, puisque c'est un module carré. Rien à vérifier, rien à espérer&nbsp;: c'est **automatique**.

<div id="preuve">

<details>
<summary>Obtention de l'équation de continuité</summary>

Multiplions à gauche l'équation de Schrödinger par $\psi^*$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi^*(\mathrm i \partial_t \psi = \hat H \psi)
$
</p>

Et sa conjuguée par $\psi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi(-\mathrm i \partial_t \psi^* = (\hat H \psi)^*)
$
</p>

En soustrayant la seconde équation à la première, on obtient&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm i (\psi^* \partial_t \psi + \psi \partial_t \psi^*) = \psi^* \hat H \psi - \psi (\hat H \psi)^*
$
</p>

Or d'une part $\psi^* \partial_t \psi + \psi \partial_t \psi^\*=\partial_t(\psi^*\psi)$.

Et d'autre part, avec $\hat H = -\frac{1}{2m}\nabla^2 + V$ (où l'énergie potentielle $V$ est un nombre réel, $V^*=V$), le premier terme du membre de droite donne&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi^* \hat H \psi = \psi^* \left( -\frac{1}{2m}\nabla^2 \psi + V\psi \right) = -\frac{1}{2m}\psi^*\nabla^2\psi + V\psi^*\psi
$
</p>

Et le second terme&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi (\hat H \psi)^* = \psi\left( -\frac{1}{2m}\nabla^2 \psi + V\psi \right)^{\!*} = -\frac{1}{2m}\psi\nabla^2\psi^* + V\psi\psi^*
$
</p>

D'où le terme de droite complet&nbsp;:

<p style="text-align:center;">
$\displaystyle
\left( -\frac{1}{2m}\psi^*\nabla^2\psi + \cancel{V\psi^*\psi } \right) - \left( -\frac{1}{2m}\psi\nabla^2\psi^* + \cancel{V\psi\psi^* }\right) = -\frac{1}{2m} \big( \psi^*\nabla^2\psi - \psi\nabla^2\psi^* \big) = -\frac{1}{2m} \nabla \cdot \big( \psi^*\nabla\psi - \psi\nabla\psi^* \big)
$
</p>  

On peut donc réécrire l'équation globale comme&nbsp;:

<p style="text-align:center;">
  $\displaystyle
\partial_t (\psi^* \psi) + \nabla \cdot \left[ \frac{1}{2m\mathrm i} \big( \psi^*\nabla\psi - \psi\nabla\psi^* \big) \right] = 0
  $
  </p> 

Soit encore&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_t (\psi^* \psi) + \nabla \cdot \mathbf{j} = 0
$
</p>

en posant  $\mathbf{j} = \frac{1}{2m\mathrm i} (\psi^* \nabla \psi - \psi \nabla \psi^*)$.

On reconnaît une équation de continuité qui nous dit que la variation d'une "densité" dans le temps est compensée par un "courant" qui s'échappe. Cette fameuse densité, notée $\rho$, s'identifie donc formellement et obligatoirement au terme dans la parenthèse&nbsp;:

<p style="text-align:center;">
$\displaystyle
\rho = \psi^* \psi
$
</p>

</details>
</div>

#### Ce que donne Klein--Gordon, et pourquoi cela échoue

Refaisons exactement la même manipulation sur l'équation de Klein--Gordon.

<div id="preuve">
<details>
<summary>Le courant conservé de Klein&ndash;Gordon</summary>

Partons de $(\partial^2 + m^2)\phi = 0$. Multiplions par $\phi^*$, puis retranchons l'équation conjuguée multipliée par $\phi$&nbsp;; le terme de masse disparaît&nbsp;:

<p style="text-align:center;">
$\displaystyle \phi^*\,\partial^2\phi - \phi\,\partial^2\phi^* = 0$
</p>

On reconnaît à nouveau une divergence exacte, car les termes croisés $\partial_\mu\phi^*\partial^\mu\phi$ se compensent&nbsp;:

<p style="text-align:center;">
$\displaystyle \partial_\mu\big(\phi^*\partial^\mu\phi - \phi\,\partial^\mu\phi^*\big) = 0$
</p>

On a donc bien une équation de continuité $\partial_\mu j^\mu = 0$, avec (en normalisant pour retrouver Schrödinger à la limite non relativiste)

<p style="text-align:center;">
$\displaystyle j^\mu = \frac{\mathrm i}{2m}\big(\phi^*\partial^\mu\phi - \phi\,\partial^\mu\phi^*\big)$
</p>

<b>Regardons maintenant la composante temporelle</b>, celle qui joue le rôle de densité&nbsp;:

<p style="text-align:center;">
$\displaystyle \rho = j^0 = \frac{\mathrm i}{2m}\left(\phi^*\frac{\partial\phi}{\partial t} - \phi\,\frac{\partial\phi^*}{\partial t}\right)$
</p>

<b>Elle contient $\partial\phi/\partial t$</b>, et c'est là toute la différence avec Schrödinger. Ce n'est plus un module carré, et rien n'impose son signe.

</details>
</div>

Le désastre se voit sur l'exemple le plus simple. Prenons une onde plane $\phi = N\\,\mathrm e^{-\mathrm i(Et - \boldsymbol p\cdot\boldsymbol x)}$, de sorte que $\partial_t\phi = -\mathrm iE\phi$&nbsp;:

<div id="theo">
<p style="text-align:center;">
$\displaystyle \rho = \frac{\mathrm i}{2m}\big(-\mathrm iE|\phi|^2 - \mathrm iE|\phi|^2\big) = \frac{E}{m}\,|N|^2$
</p>
</div>

La densité est **proportionnelle à l'énergie**. Or l'équation de Klein--Gordon, étant du second ordre en temps, impose $E^2 = \boldsymbol p^2 + m^2$ et accepte donc les <b>deux</b> racines&nbsp;:

<p style="text-align:center;">
$\displaystyle E = \pm\sqrt{\boldsymbol p^2 + m^2}$
</p>

Les solutions d'énergie négative, que rien ne permet d'écarter puisqu'elles font partie de la base des solutions, donnent une densité négative.


<b>Les deux maladies n'en font qu'une.</b> On les cite souvent séparément, énergies négatives d'un côté et probabilités négatives de l'autre, mais on vient de voir qu'elles sont le même symptôme&nbsp;: $\rho \propto E$, donc les secondes découlent des premières.<br><br>
Et leur cause commune est identifiable&nbsp;: l'équation est du <b>second ordre en temps</b>. C'est cela qui autorise deux racines pour $E$, et c'est encore cela qui fait apparaître $\partial_t\phi$ dans la densité. Autrement dit, $\phi$ et $\dot\phi$ peuvent être choisis <i>indépendamment</i> comme conditions initiales, et l'on peut donc fabriquer une densité négative à volonté.



#### Le raisonnement de Dirac

De ce diagnostic découle une exigence, et elle est contraignante.

<ul style="margin-top:0.5em;">
<li>Pour que $\rho$ soit un module carré, comme chez Schrödinger, il faut que l'équation soit du <b>premier ordre en temps</b>&nbsp;: c'est la seule façon d'obtenir une continuité où $\partial_t$ ne porte que sur $\psi^*\psi$.</li>
<li>Mais la relativité exige que <b>l'espace et le temps soient sur le même pied</b>. Une équation du premier ordre en temps et du second en espace serait non covariante (c'est d'ailleurs le défaut de Schrödinger).</li>
<li>Donc l'équation cherchée doit être du <b>premier ordre en espace aussi</b>, c'est-à-dire linéaire en toutes les dérivées.</li>
</ul>

Reste une contrainte que l'on ne peut pas abandonner&nbsp;: la relation de dispersion relativiste $E^2 = \boldsymbol p^2 + m^2$ est un fait physique, pas un défaut. La nouvelle équation devra donc, une fois élevée au carré, redonner Klein--Gordon.

<div id="theo">

Le programme de Dirac tient ainsi en une phrase&nbsp;: trouver un opérateur linéaire dans les dérivées dont le carré vaut $\partial^2 + m^2$. C'est très exactement chercher une <b>racine carrée de l'opérateur de Klein&ndash;Gordon</b>.

</div>

L'idée lui vint, dit-on, en fixant la cheminée du salon de St John's College.


Mise en garde. L'équation de Dirac guérira le problème des probabilités négatives&nbsp;: sa densité sera bien $\psi^\dagger\psi \geq 0$. Mais elle <b>ne guérira pas</b> celui des énergies négatives, qui subsistent dans son spectre. Dirac tentera d'abord de les neutraliser par l'hypothèse de la «&nbsp;mer&nbsp;» remplie, et la solution définitive ne viendra qu'avec la théorie quantique des champs, qui les réinterprète en <b>antiparticules</b> d'énergie positive.<br><br>
Avec le recul, le vrai diagnostic est ailleurs&nbsp;: c'est l'interprétation à <i>une particule</i> qui est intenable en régime relativiste, puisque l'énergie disponible permet toujours de créer des paires. Ce que Klein--Gordon fournissait n'était pas une densité de probabilité mais une densité de <b>charge</b>, laquelle a parfaitement le droit d'être négative.


#### Prendre la racine carrée

Naïvement, on aimerait factoriser comme avec des nombres&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\partial^2 + m^2) = (\sqrt{\partial^2} + \mathrm{i} m)(\sqrt{\partial^2} - \mathrm{i} m)
$
</p>

mais $\sqrt{\partial^2}$ n'a aucun sens. L'analogie utile est celle de $\sqrt{-1}$&nbsp;: quand une opération est impossible avec les objets disponibles, on invente de nouveaux objets qui la rendent possible. Ici, les nouveaux objets sont quatre quantités $\gamma^\mu$ qui <b>anticommutent</b>.

<div id="def">

Les quatre matrices gamma $\gamma^\mu = (\gamma^0, \gamma^1, \gamma^2, \gamma^3)$ sont définies par la relation d'anticommutation

<p style="text-align:center;">
$\displaystyle
\{\gamma^\mu, \gamma^\nu\} \equiv \gamma^\mu\gamma^\nu + \gamma^\nu\gamma^\mu = 2g^{\mu\nu}
$
</p>

qui condense $(\gamma^0)^2 = 1$, $(\gamma^i)^2 = -1$ et $\gamma^\mu\gamma^\nu = -\gamma^\nu\gamma^\mu$ pour $\mu \neq \nu$. Une telle structure s'appelle une <b>algèbre de Clifford</b>.

</div>

Le miracle algébrique tient en une ligne. Posons $\not{\\!\\!\partial} \equiv \gamma^\mu \partial_\mu$ et développons son carré&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\not{\!\!\partial})^2 = \gamma^\mu\gamma^\nu \partial_\mu\partial_\nu = \frac{1}{2}\{\gamma^\mu, \gamma^\nu\}\partial_\mu\partial_\nu = g^{\mu\nu}\partial_\mu\partial_\nu = \partial^2
$
</p>

où la deuxième égalité vient de la symétrie de $\partial_\mu\partial_\nu$ en $\mu \leftrightarrow \nu$ (seule la partie symétrique de $\gamma^\mu\gamma^\nu$ survit) et l'anticommutateur fait le reste. La factorisation devient légitime&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\partial^2 + m^2) = (\not{\!\!\partial} - \mathrm{i} m)(\not{\!\!\partial} + \mathrm{i} m)
$
</p>

On garde le facteur avec le signe plus, on l'applique à une fonction d'onde $\psi(x)$, on multiplie par $\mathrm{i}$, et voici l'équation célèbre.

<div id="theo">

<b>Équation de Dirac</b>

<p style="text-align:center;">
$\displaystyle
(\mathrm{i}\gamma^\mu\partial_\mu - m)\,\psi(x) = 0
$
</p>

<p style="text-align:center;">
soit encore $(\gamma^\mu \hat p_\mu - m)\psi = 0$ avec $\hat p_\mu = \mathrm{i}\partial_\mu$
</p>

La relation de dispersion reste $E_{\boldsymbol p}^2 = \boldsymbol p^2 + m^2$&nbsp;: les énergies négatives subsistent (on les réinterprétera comme antiparticules, à la Feynman), mais le problème des probabilités négatives est guéri.

</div>

<br>

### La représentation chirale et le découpage gauche/droite

Il n'y a pas de choix unique des $\gamma^\mu$&nbsp;: toute famille de matrices satisfaisant l'algèbre de Clifford convient. 

<div id="def">

On adopte la <b>représentation chirale</b> (ou de Weyl), écrite en blocs $2\times 2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0 = \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
\boldsymbol\gamma = \begin{pmatrix} 0 & \boldsymbol\sigma \\ -\boldsymbol\sigma & 0 \end{pmatrix}
$
</p>

où $\boldsymbol\sigma$ regroupe les matrices de Pauli.


 Pour compacter encore, on définit&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sigma^\mu = (I, \boldsymbol\sigma)
$
</p>

<p style="text-align:center;">
$\displaystyle
\bar\sigma^\mu = (I, -\boldsymbol\sigma)
$
</p>

<p style="text-align:center;">
d'où $\displaystyle
\gamma^\mu = \begin{pmatrix} 0 & \sigma^\mu \\ \bar\sigma^\mu & 0 \end{pmatrix}
$
</p>

</div>

<br>

<div id="theo">

On découpe la fonction d'onde en deux blocs de deux composantes, $\psi = \begin{pmatrix} \psi_L \\\\ \psi_R \end{pmatrix}$, et l'équation de Dirac devient un système couplé&nbsp;:
<p style="text-align:center;">
$\displaystyle
(\hat p^0 - \boldsymbol\sigma \cdot \hat{\boldsymbol p})\,\psi_R = m\,\psi_L
$
</p>
<p style="text-align:center;">
$\displaystyle
(\hat p^0 + \boldsymbol\sigma \cdot \hat{\boldsymbol p})\,\psi_L = m\,\psi_R
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>
Détails&nbsp;:
</summary>

On part de l'équation de Dirac $\gamma^\mu \hat{p}_\mu \psi = m \psi$.

Comme $\gamma^\mu \hat{p}_\mu = \gamma^0 \hat{p}^0 - \boldsymbol{\gamma} \cdot \hat{\boldsymbol{p}}$, et que $\gamma^0 \hat{p}^0 = \begin{pmatrix} 0 & I \\\\ I & 0 \end{pmatrix} \hat{p}^0 = \begin{pmatrix} 0 & \hat{p}^0 \\\\ \hat{p}^0 & 0 \end{pmatrix}$, alors que $\boldsymbol{\gamma} \cdot \hat{\boldsymbol{p}} = \begin{pmatrix} 0 & \boldsymbol{\sigma} \\\\ -\boldsymbol{\sigma} & 0 \end{pmatrix} \cdot \hat{\boldsymbol{p}} = \begin{pmatrix} 0 & \boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} \\\\ -\boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} & 0 \end{pmatrix}$, on a finalement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^\mu \hat{p}_\mu = \gamma^0 \hat{p}^0 - \boldsymbol{\gamma} \cdot \hat{\boldsymbol{p}} = \begin{pmatrix} 0 & \hat{p}^0 \\ \hat{p}^0 & 0 \end{pmatrix} - \begin{pmatrix} 0 & \boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} \\ -\boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} & 0 \end{pmatrix} = \begin{pmatrix} 0 & \hat{p}^0 - \boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} \\ \hat{p}^0 + \boldsymbol{\sigma} \cdot \hat{\boldsymbol{p}} & 0 \end{pmatrix}
$
</p>

</details>
</div>

Lisons cette structure avant de calculer, parce qu'elle contient toute la physique du chapitre&nbsp;: <b>c'est la masse qui couple $\psi_L$ et $\psi_R$</b>. Sans masse, les deux blocs vivent leur vie indépendamment&nbsp;; avec masse, la particule oscille sans cesse entre les deux, à un rythme fixé par $m$. 

Pour une particule au repos, les équations se réduisent à $\mathrm{i}\partial_0\psi_R = m\psi_L$ et $\mathrm{i}\partial_0\psi_L = m\psi_R$&nbsp;: un système de deux oscillateurs couplés, le contenu «&nbsp;gauche&nbsp;» se déversant dans le contenu «&nbsp;droite&nbsp;» et réciproquement, comme deux pendules reliés par un ressort de raideur $m$.

<br>

### Cas sans masse&nbsp;: chiralité et hélicité

Posons $m = 0$. Les équations se découplent et la nature semble contenir deux espèces indépendantes&nbsp;: des particules «&nbsp;gauches&nbsp;» décrites par $\psi_L$ (les deux composantes du haut) et des particules «&nbsp;droites&nbsp;» décrites par $\psi_R$ (les deux du bas). Pour rendre ce vocabulaire précis, on introduit un cinquième larron.

<div id="def">

L'opérateur de **chiralité** est

<p style="text-align:center;">
$\displaystyle
\gamma^5 = \mathrm{i}\gamma^0\gamma^1\gamma^2\gamma^3 = \begin{pmatrix} -I & 0 \\ 0 & I \end{pmatrix}
$<br>
(en représentation chirale)
</p>

Un état purement gauche $\begin{pmatrix} \psi_L \\\\ 0 \end{pmatrix}$ est état propre de $\gamma^5$ avec la valeur propre $-1$, un état purement droit avec $+1$. 

Les projecteurs

<p style="text-align:center;">
$\displaystyle
\hat P_L = \frac{1 - \gamma^5}{2}
$
</p>
<p style="text-align:center;">
$\displaystyle
\hat P_R = \frac{1 + \gamma^5}{2}
$
</p>

extraient la partie gauche ou droite de n'importe quelle fonction d'onde.
</div>

Pour un état sans masse d'énergie $\hat p^0=E_{\boldsymbol p} = |\boldsymbol p|$, les équations découplées donnent

<p style="text-align:center;">
$\displaystyle
\frac{\boldsymbol\sigma \cdot \hat{\boldsymbol p}}{|\boldsymbol p|}\,\psi_R = +\psi_R
$
</p>
<p style="text-align:center;">
$\displaystyle
\frac{\boldsymbol\sigma \cdot \hat{\boldsymbol p}}{|\boldsymbol p|}\,\psi_L = -\psi_L
$
</p>

<div id="def">

L'opérateur qui apparaît mesure la projection du spin sur la direction du mouvement&nbsp;: c'est l'<b>hélicité</b> $\hat h = \boldsymbol\sigma\cdot\hat{\boldsymbol p}/|\boldsymbol p|$. 

Donc pour une particule sans masse, chiralité et hélicité coïncident&nbsp;: droite $\Leftrightarrow$ spin parallèle à l'impulsion ($h = +1$), gauche $\Leftrightarrow$ antiparallèle ($h = -1$).

</div>

Il faut absolument distinguer les deux notions dans le cas massif.

<ul>
<li><b>La chiralité</b> est une propriété algébrique (valeur propre de $\gamma^5$), invariante de Lorentz, mais qui n'est pas conservée par l'évolution d'une particule massive (la masse mélange $L$ et $R$).</li>
<br>
<li><b>L'hélicité</b> est une propriété cinématique (spin vs impulsion), conservée pour une particule libre, mais qui dépend du référentiel&nbsp;: pour une particule massive, je peux la dépasser en boostant, son impulsion se renverse dans mon nouveau référentiel, pas son spin, et l'hélicité change de signe. Pour une particule sans masse, qui va à la vitesse de la lumière, ce dépassement est impossible&nbsp;: l'hélicité devient invariante et se confond avec la chiralité.</li>
</ul>

Pour les <b>antiparticules</b> (les solutions d'énergie négative, réinterprétées), les mêmes équations donnent le résultat inversé&nbsp;: une antiparticule droite a l'hélicité $-1$, une antiparticule gauche l'hélicité $+1$.

<!-- FIGURE à redessiner (d'après fig. 36.1 de L&B) : quatre vignettes horizontales. Chacune montre une flèche horizontale épaisse (l'impulsion p, vers la droite, le long de z) et une flèche hélicoïdale ou un gros vecteur vertical figurant le spin. (a) électron e-, spin vers le haut aligné avec p : h = +1. (b) électron e-, spin vers le bas : h = -1. (c) positron e+, spin physique vers le haut : h = -1 (le souligner en rouge : c'est l'inversion particule/antiparticule). (d) positron e+, spin vers le bas : h = +1. Légende : « Hélicités des états ultra-relativistes ; noter l'inversion pour les antiparticules ». -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:400px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/helchir.png" style="box-shadow:none;background:none;">
</div>



<div id="preuve">

<details>
<summary>Aparté&nbsp;: pourquoi l'interaction faible rend tout cela vital</summary>

Imaginons une interaction qui ne se couple qu'aux états de chiralité gauche. Dans la limite ultra-relativiste, où chiralité $=$ hélicité, seuls les particules d'hélicité $-1$ et les antiparticules d'hélicité $+1$ interagiraient. C'est <b>exactement</b> ce que fait l'interaction faible&nbsp;: le champ $W^\mu$ ne se couple qu'aux fermions gauches. Conséquences concrètes&nbsp;:

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>seuls des neutrinos gauches (hélicité $-1$) et des antineutrinos droits (hélicité $+1$) ont jamais été observés&nbsp;;</li>
<li>un électron massif, qui oscille en permanence entre gauche et droite, ne peut émettre un $W^-$ que pendant ses «&nbsp;phases gauches&nbsp;». La parité est violée de façon maximale.</li>
</ul>

<!-- FIGURE à redessiner (d'après fig. 36.2 de L&B) : une ligne de temps verticale représentant un électron qui se propage ; la ligne alterne des segments étiquetés L et R (oscillation de chiralité due à la masse). Sur un segment L uniquement, une ligne ondulée part vers la droite, étiquetée W-. Légende : « L'électron n'émet un W- que lorsqu'il est gauche ». -->
<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/symfaible.png" style="box-shadow:none;background:none;">
</div>

</details>

</div>

<br>


### Spineurs de Dirac et de Weyl

Fixons d'abord le vocabulaire, maintenant que la structure en blocs est claire.

<div id="def">

<p style="text-align:center;">
$\displaystyle
\psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}
$
</p>

L'objet à quatre composantes $\psi$ est un <b>spineur de Dirac</b>.

Chacun des blocs à deux composantes, $\psi_L$ et $\psi_R$, est un <b>spineur de Weyl</b>.

Ce ne sont ni des scalaires ni des vecteurs&nbsp;: leur définition rigoureuse passe par leurs propriétés de transformation, objet du prochain chapitre.

</div>

<br>

#### Pourquoi deux familles de solutions&nbsp;?

L'équation de Dirac est une équation aux dérivées partielles <b>linéaire à coefficients constants</b>. Comme toujours dans ce cas, on la résout en cherchant des <b>ondes planes</b>, puis on superpose. Pour un objet à quatre composantes, une onde plane s'écrit nécessairement

<p style="text-align:center;">
$\displaystyle
\underbrace{(\text{spineur constant})}_{4 \text{ composantes}} \times \underbrace{(\text{phase scalaire})}_{\mathrm{e}^{\mp\mathrm{i}p\cdot x}}
$
</p>

Or la relation de dispersion $E_{\boldsymbol p}^2 = \boldsymbol p^2 + m^2$ admet **deux racines**, $E = \pm\sqrt{\boldsymbol p^2 + m^2}$. Il y a donc deux familles de phases possibles, et c'est là qu'un choix de présentation s'impose.

<div id="theo">

Plutôt que de traîner des énergies négatives, on garde <b>$p^0 = E_{\boldsymbol p} > 0$ dans tous les cas</b> et l'on reporte la différence sur le <b>signe de l'exposant</b>&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li><b>particules</b>&nbsp;: $u(p)\,\mathrm{e}^{-\mathrm{i} p\cdot x}$&nbsp;;</li>
<li><b>antiparticules</b>&nbsp;: $v(p)\,\mathrm{e}^{+\mathrm{i} p\cdot x}$.</li>
</ul>

Les spineurs constants $u(p)$ et $v(p)$ sont les <b>spineurs d'impulsion</b>. Ce sont eux, et non $\psi$, qu'on manipule dans tous les calculs de diffusion.

</div>

C'est l'interprétation de Feynman&nbsp;: ce qui portait un signe moins n'est pas l'énergie d'un état, c'est la fréquence d'une exponentielle. Rien de négatif ne subsiste dans le spectre.

Reportons maintenant ces deux formes dans l'équation de Dirac. Le calcul est immédiat et livre les deux équations que $u$ et $v$ doivent satisfaire.

<div id="def">

<b>Équations de Dirac en impulsion</b>

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p} - m)\,u(p) = 0
$
</p>

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p} + m)\,v(p) = 0
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>D'où vient le signe qui distingue les deux équations&nbsp;?</summary>

Il ne vient de rien d'autre que du signe de l'exposant.

<b>Pour une particule</b>, $\psi = u(p)\\,\mathrm{e}^{-\mathrm{i}p\cdot x}$. Dériver une exponentielle revient à multiplier par son exposant&nbsp;:

<p style="text-align:center;">
$\displaystyle
\partial_\mu\psi = -\mathrm{i}\,p_\mu\,\psi
$
</p>

d'où, en reportant dans $\mathrm{i}\gamma^\mu\partial_\mu\psi = m\psi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\gamma^\mu(-\mathrm{i}p_\mu)\,u = m\,u
\quad\Longrightarrow\quad
\gamma^\mu p_\mu\,u = m\,u
\quad\Longrightarrow\quad
(\not{\!\!p} - m)\,u = 0
$
</p>

les deux facteurs $\mathrm{i}$ se combinant en $+1$.

<b>Pour une antiparticule</b>, $\psi = v(p)\\,\mathrm{e}^{+\mathrm{i}p\cdot x}$, la dérivation donne cette fois $\partial_\mu\psi = +\mathrm{i}p_\mu\psi$, et les deux facteurs $\mathrm{i}$ se combinent en $-1$&nbsp;:

<p style="text-align:center;">
$\displaystyle
-\gamma^\mu p_\mu\,v = m\,v
\quad\Longrightarrow\quad
(\not{\!\!p} + m)\,v = 0
$
</p>

<b>Attention à ne pas surinterpréter ce signe.</b> Il ne dit pas que l'antiparticule a une masse négative, ni une énergie négative&nbsp;: $p^0 = E_{\boldsymbol p} > 0$ dans les deux équations. Il enregistre seulement que l'antiparticule est décrite par la <i>seconde</i> famille d'ondes planes.

</details>

</div>

<br>

#### Le cas le plus simple&nbsp;: au repos

Résolvons ces équations dans le référentiel propre, $p^\mu = (m, \boldsymbol 0)$. Le résultat est aussi simple que parlant.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
u(p_0) = \sqrt{m}\begin{pmatrix} \xi \\ \xi \end{pmatrix}
\qquad\qquad
v(p_0) = \sqrt{m}\begin{pmatrix} \eta \\ -\eta \end{pmatrix}
$
</p>

où $\xi$ et $\eta$ sont des vecteurs colonnes à deux composantes normalisés, $\xi^\dagger\xi = 1$.

Pour la particule, <b>les deux chiralités sont égales</b>&nbsp;; pour l'antiparticule, <b>elles sont opposées</b>.

</div>

<br>

<div id="preuve">

<details>
<summary>Le calcul, et l'origine du signe moins de $v$</summary>

Au repos, $p^\mu = (m, \boldsymbol 0)$, donc $\not{\\!\\!p} = \gamma^\mu p_\mu = m\gamma^0$. Les deux équations deviennent

<p style="text-align:center;">
$\displaystyle
m\,(\gamma^0 - 1)\,u(p_0) = 0\quad$
et
$\displaystyle
\quad m\,(\gamma^0 + 1)\,v(p_0) = 0
$
</p>

<b>Pour la particule&nbsp;:</b> 

En représentation chirale, la matrice s'écrit en blocs $2\times 2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0 - 1 = \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix} - \begin{pmatrix} I & 0 \\ 0 & I \end{pmatrix} = \begin{pmatrix} -I & I \\ I & -I \end{pmatrix}
$
</p>

d'où le système

<p style="text-align:center;">
$\displaystyle
m\begin{pmatrix} -I & I \\ I & -I \end{pmatrix}\begin{pmatrix} u_L \\ u_R \end{pmatrix} = 0
\quad\Longleftrightarrow\quad
\begin{cases} -u_L + u_R = 0 \\ u_L - u_R = 0 \end{cases}
$
</p>

Les deux lignes disent la même chose, $u_L = u_R$&nbsp;: le système est dégénéré, et il reste donc <b>deux</b> composantes libres, celles de $\xi \equiv u_L = u_R$.

<b>Pour l'antiparticule</b>, le seul changement est le signe&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0 + 1 = \begin{pmatrix} I & I \\ I & I \end{pmatrix}
\quad\Longrightarrow\quad
v_L + v_R = 0
\quad\Longrightarrow\quad
v_R = -v_L
$
</p>

Voilà d'où sort le signe moins de $v(p_0)$&nbsp;: il n'est pas conventionnel, il est imposé par le signe de l'équation.

<b>Le facteur $\sqrt m$</b>, lui, est une pure convention de normalisation. On le choisit ainsi parce qu'il donnera $\bar u u = 2m$ un peu plus loin, ce qui est la normalisation standard.

</details>

</div>

Deux lectures physiques de ce résultat.

**Le décompte des degrés de liberté.** Les quatre composantes du spineur ne portent que <b>deux informations indépendantes</b>, les deux composantes de $\xi$ (ou de $\eta$), qui codent le spin.<br>
Une particule de spin up selon $z$ a $\xi = \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}$, de spin down $\xi = \begin{pmatrix} 0 \\\\ 1 \end{pmatrix}$.<br>
Les deux composantes restantes ne sont pas de l'information nouvelle&nbsp;: elles sont recopiées de la contrainte $u_L = u_R$.

**Pourquoi gauche et droite coïncident au repos.** Deux raisons se rejoignent, et elles reviendront toutes deux au chapitre suivant. Sans impulsion, il n'existe aucun axe pour définir une hélicité, donc rien qui puisse distinguer les deux blocs. Et surtout, nous verrons que ce qui sépare $\psi_L$ de $\psi_R$ est leur comportement sous les <b>boosts</b>&nbsp;: au repos, aucun boost n'est à l'œuvre.

<div id="preuve">

<details>
<summary>Attention&nbsp;: pour les antiparticules, la lecture du spin s'inverse</summary>

Une antiparticule de <b>spin physique up</b> selon $z$ est décrite par $\eta = \begin{pmatrix} 0 \\\\ 1 \end{pmatrix}$ de sorte que $\hat S_z\\,\eta = -\tfrac{1}{2}\\,\eta$ et une antiparticule de spin physique down par $\eta = \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}$.<br>
Le signe de la valeur propre est <b>opposé</b> au spin physique.

<b>La raison profonde</b> n'apparaîtra qu'au chapitre sur le champ de Dirac quantique&nbsp;: dans le champ quantifié, le terme $v(p)\\,\mathrm{e}^{\mathrm{i}p\cdot x}$ accompagne un opérateur de <b>création</b> d'antiparticule, et non d'annihilation. Tous les nombres quantiques se lisent donc «&nbsp;à l'envers&nbsp;»&nbsp;: créer une antiparticule de spin $+\frac{1}{2}$ revient, du point de vue du champ, à retirer une particule de spin $-\frac{1}{2}$.

</details>

</div>

<br>

#### Le cas général&nbsp;: impulsion quelconque

Il ne reste qu'à booster le spineur au repos. Le résultat est le suivant.

<div id="theo">

<b>Spineurs d'impulsion quelconque</b>

<p style="text-align:center;">
$\displaystyle
u(p) = \begin{pmatrix} \sqrt{p\cdot\sigma}\;\xi \\ \sqrt{p\cdot\bar\sigma}\;\xi \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
v(p) = \begin{pmatrix} \sqrt{p\cdot\sigma}\;\eta \\ -\sqrt{p\cdot\bar\sigma}\;\eta \end{pmatrix}
$
</p>

où $p\cdot\sigma = p_\mu\sigma^\mu$ est une matrice $2\times 2$, et où sa racine carrée s'entend comme la racine positive de chacune de ses valeurs propres.

</div>

La démonstration complète est donnée au chapitre suivant, une fois la loi de transformation des spineurs établie.

Deux contrôles immédiats, avant même de savoir d'où sort cette formule. Au repos, $\boldsymbol p = \boldsymbol 0$ donne $p\cdot\sigma = p\cdot\bar\sigma = m\\,I$, et l'on retrouve bien les spineurs de la section précédente. Et le signe moins du bloc inférieur de $v$ a survécu au boost, comme il se doit puisque les boosts n'échangent pas les blocs.


<div id="preuve">

<details>
<summary>
Exemple pour rendre tout ça un peu plus concret
</summary>

Pour un mouvement selon l'axe $z$&nbsp;:

<p style="text-align:center;">
$\displaystyle
p^\mu = \begin{pmatrix} E_p \\ 0 \\ 0 \\ |\boldsymbol p| \end{pmatrix}
$
</p>

Par conséquent,

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma = p_\mu\sigma^\mu = E_p\sigma^0 - |\boldsymbol p|\sigma^3 = E_{\boldsymbol p}\begin{pmatrix}1&0\\0&1\end{pmatrix} - |\boldsymbol p| \begin{pmatrix}1&0\\0&-1\end{pmatrix}
$
</p>

D'où

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma=\begin{pmatrix}E_{\boldsymbol p} - |\boldsymbol p| &0\\0&E_{\boldsymbol p}+|\boldsymbol p|\end{pmatrix}
$
</p>

Prenons le spin up, $\xi = \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}$ (hélicité $+1$)&nbsp;:

<p style="text-align:center;">
$\displaystyle
u(p) = \begin{pmatrix} \sqrt{E_{\boldsymbol p} - |\boldsymbol p|}\begin{pmatrix} 1 \\ 0 \end{pmatrix} \\ \sqrt{E_{\boldsymbol p} + |\boldsymbol p|}\begin{pmatrix} 1 \\ 0 \end{pmatrix} \end{pmatrix}
$
</p>

Que devient le spineur dans la limite ultra-relativiste&nbsp;? Cela revient à lui appliquer un boost infini qui lui procure une impulsion infini ($|\boldsymbol p|\to\infty$).

$E_{\boldsymbol p} = \sqrt{m^2+|\boldsymbol p|^2}  \xrightarrow{\\;|\boldsymbol p|\to\infty\\;} |\boldsymbol p|$, ce qui entraîne $\sqrt{E_{\boldsymbol p} + |\boldsymbol p|}  \xrightarrow{\\;|\boldsymbol p|\to\infty\\;} \sqrt{2 E_{\boldsymbol p}}$. 

Pour $E_{\boldsymbol p}-|\boldsymbol p|$, on écrit&nbsp;

<p style="text-align:center;">
$\displaystyle
E_{\boldsymbol p}-|\boldsymbol p|
=\frac{(E_{\boldsymbol p}-|\boldsymbol p|)(E_{\boldsymbol p}+|\boldsymbol p|)}{E_{\boldsymbol p}+|\boldsymbol p|}
=\frac{E_{\boldsymbol p}^2-|\boldsymbol p|^2}{E_{\boldsymbol p}+|\boldsymbol p|}
=\frac{m^2}{E_{\boldsymbol p}+|\boldsymbol p|}
$
</p>

$m^2$ restant constante pendant le boost, $E_{\boldsymbol p}-|\boldsymbol p| \xrightarrow{\\;|\boldsymbol p|\to\infty\\;}0$.

On obtient au final&nbsp;:

<p style="text-align:center;">
$\displaystyle
u(p) \xrightarrow{\;\text{boost infini}\;} \sqrt{2E_{\boldsymbol p}}\begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix}.
$
</p>

Dans la limite ultra-relativiste, la composante gauche s'éteint&nbsp;: une particule d'hélicité $+1$ devient purement droite, comme annoncé. Le calcul analogue pour les trois autres cas (spin down, et les deux antiparticules) confirme le tableau de la figure des hélicités ci-dessus.

</details>
</div>

<br>


### Base orthonormée et sommes de spin

Pour utiliser les spineurs comme base de développement, il faut une notion de produit scalaire. Deux candidats se présentent, et il faut les <b>garder tous les deux</b>&nbsp;: chacun servira dans un contexte différent.

Le premier est le produit hermitien naïf $u^\dagger u$. Il a le défaut de ne pas être invariant de Lorentz, puisqu'on montrera qu'il vaut $2E_{\boldsymbol p}$, donc qu'il dépend du référentiel. Mais c'est précisément lui qui apparaîtra dans les calculs de <b>densités</b>, comme le hamiltonien et la charge, puisque celles-ci ne sont pas des scalaires non plus.

Le second utilise le <b>spineur adjoint</b>, et c'est celui qui produit les invariants.

<div id="def">

<b>Adjoint de Dirac</b> 

<p style="text-align:center;">
$\displaystyle
\bar u(p) \equiv u^\dagger(p)\,\gamma^0
$
</p>

</div>

Avant de calculer quoi que ce soit, posons l'outil algébrique qui va servir dans <b>toute</b> la partie, et que nous ne redémontrerons plus ensuite.

<div id="def">

<b>Identité de Pauli</b>

<p style="text-align:center;">
$\displaystyle
\sigma^i\sigma^j = \delta^{ij}\,I + \mathrm{i}\,\epsilon^{ijk}\sigma^k
$
</p>

Trois formes dérivées, qu'on rencontrera tour à tour et qui ne sont que cette relation lue autrement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\{\sigma^i, \sigma^j\} = 2\delta^{ij}\,I
\quad$ (partie symétrique)
</p>

<p style="text-align:center;">
$\displaystyle
[\sigma^i, \sigma^j] = 2\mathrm{i}\,\epsilon^{ijk}\sigma^k
\quad$ (partie antisymétrique)
</p>

<p style="text-align:center;">
$\displaystyle
(\boldsymbol\sigma\cdot\boldsymbol a)(\boldsymbol\sigma\cdot\boldsymbol b) = (\boldsymbol a\cdot\boldsymbol b)\,I + \mathrm{i}\,\boldsymbol\sigma\cdot(\boldsymbol a \times \boldsymbol b)
\quad$ (forme vectorielle)
</p>

</div>

Les deux premières s'obtiennent en séparant la relation maîtresse en ses parties symétrique et antisymétrique en $ij$&nbsp;; la troisième en la contractant avec $a_i b_j$.

<div id="preuve">

Deux mises en garde sur la forme vectorielle (celle qui servira le plus).

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li><b>L'ordre des facteurs compte.</b> La démonstration ne suppose jamais que $\boldsymbol a$ et $\boldsymbol b$ commutent&nbsp;: elle reste donc valable pour des <b>opérateurs</b>, à condition de garder $\boldsymbol a$ à gauche de $\boldsymbol b$ dans les deux membres.</li>
<li>Corollaire surprenant&nbsp;: si $\boldsymbol a = \boldsymbol b$ est un vecteur ordinaire, le produit vectoriel s'annule et l'on retrouve le cas familier $(\boldsymbol\sigma\cdot\boldsymbol a)^2 = |\boldsymbol a|^2$. Mais si $\boldsymbol a$ est un <b>opérateur vectoriel dont les composantes ne commutent pas entre elles</b>, alors $\boldsymbol a \times \boldsymbol a \neq \boldsymbol 0$ et le second terme survit. Nous en ferons un usage spectaculaire à la fin du chapitre, pour faire apparaître le champ magnétique.</li>

</ul>

</div>


La combinaison qui produit des invariants de Lorentz&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar u(p)u(p) = 2m\,\xi^\dagger\xi
$
</p>


<div id="preuve">
<details>
<summary>
Preuve
</summary>

Pour obtenir l'adjoint, on doit d'abord transposer et conjuguer $u(p)$. Les matrices $(E \pm \boldsymbol{p} \cdot \boldsymbol{\sigma})$ sont hermitiennes, ce qui signifie que leurs racines carrées le sont aussi. En appliquant l'opération $^\dagger$, on transforme le vecteur colonne en vecteur ligne&nbsp;:

<p style="text-align:center;">
$\displaystyle
u^\dagger(p) = \left( \xi^\dagger \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \xi^\dagger \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right)
$
</p>
Par conséquent&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\bar{u}(p) = u^\dagger (p)\gamma^0 = \left( \xi^\dagger \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \xi^\dagger \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix} = \left( \xi^\dagger \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \xi^\dagger \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right)
$
</p>

Opérons maintenant le produit scalaire&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\bar{u}(p)u(p) = \left( \xi^\dagger \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \xi^\dagger \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \begin{pmatrix} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \xi \\ \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \xi \end{pmatrix} = \xi^\dagger \left( \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \xi + \xi^\dagger \left( \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \xi
$
</p>

Le produit des racines donne&nbsp;:

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} = \sqrt{(E + \boldsymbol{p} \cdot \boldsymbol{\sigma})(E - \boldsymbol{p} \cdot \boldsymbol{\sigma})} = \sqrt{E^2 - (\boldsymbol{p} \cdot \boldsymbol{\sigma})^2}=\sqrt{E^2 - \vert{}\boldsymbol{p}\vert{}^2} =\sqrt{m^2}=m
$
</p>


Où l'on a utilisé la <b>forme vectorielle</b> de l'identité de Pauli, posée en tête de section, avec $\boldsymbol a = \boldsymbol b = \boldsymbol p$. Le produit vectoriel s'annule ici, puisque les composantes de $\boldsymbol p$ sont de simples nombres qui commutent, et il reste&nbsp;:

<p style="text-align:center;">
$\displaystyle
 (\boldsymbol p\cdot \boldsymbol \sigma)^2 = |\boldsymbol p|^2
$
</p>

On obtient finalement&nbsp;:

<p style="text-align:center;">
$\displaystyle
\bar{u}(p)u(p) = \xi^\dagger \, m \, \xi + \xi^\dagger\, m\, \xi = 2m\,\xi^\dagger\xi
$
</p>

</details>

</div>


En choisissant la base de spin $\xi^1 = \begin{pmatrix} 1 \\\\ 0 \end{pmatrix}$, $\xi^2 = \begin{pmatrix} 0 \\\\ 1 \end{pmatrix}$ avec $\xi^{s\dagger}\xi^r = \delta^{sr}$, on obtient le jeu complet de relations, qu'on rassemble ici parce qu'il servira sans arrêt aux chapitres suivants&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\bar u^s(p)\,u^r(p) = 2m\,\delta^{sr}
$
</p>

<p style="text-align:center;">
$\displaystyle
\bar v^s(p)\,v^r(p) = -2m\,\delta^{sr}
$
</p>

<p style="text-align:center;">
$\displaystyle
\bar u^r(p)\,v^s(p) = \bar v^r(p)\,u^s(p) = 0
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>
Démonstration des deuxième et troisième relations
</summary>

<ul style="margin-top:1em; margin-bottom:1em;">
<li>
$\displaystyle
\bar v^s(p)\,v^r(p) = -2m\,\delta^{sr}
$
</li>
</ul>

<p style="text-align:center;">
$\displaystyle
v^s(p) = \begin{pmatrix} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \eta^s \\ -\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \eta^s \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
v^{s\dagger}(p) = \left( \eta^{s\dagger} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; -\eta^{s\dagger} \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right)
$
</p>

<p style="text-align:center;">
$\displaystyle
\bar{v}^s(p) =  v^{s\dagger}(p)\gamma^0 = \left( -\eta^{s\dagger} \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \eta^{s\dagger} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right)
$
</p>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\Rightarrow \bar{v}^s(p)v^r(p) 
= \left( -\eta^{s\dagger} \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \; , \; \eta^{s\dagger} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \begin{pmatrix} \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \eta^r \\ -\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \, \eta^r \end{pmatrix}
= -\eta^{s\dagger} \left( \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \eta^r - \eta^{s\dagger} \left( \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \eta^r
= -\eta^{s\dagger} (m) \eta^r - \eta^{s\dagger} (m) \eta^r
= -2m \, (\eta^{s\dagger} \eta^r)
= -2m\,\delta^{sr}
$
</p>

<ul style="margin-top:1em; margin-bottom:1em;">
<li>
$\displaystyle
\bar u^r(p)\,v^s(p) = 0
$
</li>
</ul>

<p style="text-align:center;overflow-x:auto;">
$\displaystyle
\bar{u}^r(p) v^s(p) = \xi^{r\dagger} \left( \sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \eta^s - \xi^{r\dagger} \left( \sqrt{E - \boldsymbol{p} \cdot \boldsymbol{\sigma}}\sqrt{E + \boldsymbol{p} \cdot \boldsymbol{\sigma}} \right) \eta^s
= \xi^{r\dagger} (m) \eta^s - \xi^{r\dagger} (m) \eta^s
= m (\xi^{r\dagger} \eta^s) - m (\xi^{r\dagger} \eta^s) 
= 0
$
</p>

Cette relation prouve que les états de particules et d'antiparticules sont orthogonaux au sens de Dirac.

</details>
</div>

<br>

#### L'autre jeu de relations&nbsp;: avec la dague

Les relations précédentes sont les invariantes, et ce sont elles qui serviront dans les amplitudes. Mais dès qu'on calculera une <b>densité</b>, l'énergie ou la charge, c'est le produit hermitien nu qui apparaîtra, parce que ces quantités sont des composantes temporelles de quadrivecteurs et non des scalaires.

Établissons-les donc maintenant, une bonne fois, pour pouvoir y renvoyer sans les recalculer.

<div id="theo">

<b>Relations d'orthonormalité hermitiennes</b>

<p style="text-align:center;">
$\displaystyle
u^{r\dagger}(p)\,u^s(p) = 2E_{\boldsymbol p}\,\delta^{rs}
$
</p>

<p style="text-align:center;">
$\displaystyle
v^{r\dagger}(p)\,v^s(p) = 2E_{\boldsymbol p}\,\delta^{rs}
$
</p>

<p style="text-align:center;">
$\displaystyle
u^{r\dagger}(\tilde p)\,v^s(p) = v^{r\dagger}(\tilde p)\,u^s(p) = 0\quad$
avec
$\displaystyle
\quad \tilde p^\mu \equiv (E_{\boldsymbol p},\, -\boldsymbol p)
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Démonstration des trois relations</summary>

Le calcul est plus court que celui des relations barrées, puisqu'il n'y a pas de $\gamma^0$ pour échanger les blocs.

<b>Première relation</b><br>
On empile simplement la ligne sur la colonne&nbsp;:

<p style="text-align:center;">
$\displaystyle
u^{r\dagger}u^s = \left(\xi^{r\dagger}\sqrt{p\cdot\sigma}\;,\;\xi^{r\dagger}\sqrt{p\cdot\bar\sigma}\right)\begin{pmatrix} \sqrt{p\cdot\sigma}\,\xi^s \\ \sqrt{p\cdot\bar\sigma}\,\xi^s\end{pmatrix}
= \xi^{r\dagger}\big(p\cdot\sigma + p\cdot\bar\sigma\big)\xi^s
$
</p>

Chaque racine est ici multipliée par <b>elle-même</b>, ce qui la fait disparaître sans qu'on ait besoin de l'identité de Pauli. Et la somme des deux matrices est immédiate&nbsp;:

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma + p\cdot\bar\sigma = (E_{\boldsymbol p}\, I - \boldsymbol p\cdot\boldsymbol\sigma) + (E_{\boldsymbol p}\, I + \boldsymbol p\cdot\boldsymbol\sigma) = 2E_{\boldsymbol p}\,I
$
</p>

<b>les termes en $\boldsymbol\sigma$ se compensant exactement</b>. D'où $u^{r\dagger}u^s = 2E_{\boldsymbol p}\,\xi^{r\dagger}\xi^s = 2E_{\boldsymbol p}\delta^{rs}$.

<b>Deuxième relation</b><br>
Le spineur $v$ porte un signe moins sur son bloc inférieur. Dans le produit $v^\dagger v$, ce bloc est multiplié par lui-même, donc <b>le signe moins apparaît deux fois et disparaît</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
v^{r\dagger}v^s = \eta^{r\dagger}(p\cdot\sigma)\eta^s + (-1)(-1)\,\eta^{r\dagger}(p\cdot\bar\sigma)\eta^s = 2E_{\boldsymbol p}\,\delta^{rs}
$
</p>

<b>Comparons avec le cas barré.</b> Là, le $\gamma^0$ échangeait les blocs, si bien que le signe moins n'apparaissait qu'<i>une</i> fois et survivait&nbsp;: d'où $\bar v v = -2m$. Ici il apparaît deux fois et s'évanouit. <b>Toute la différence de signe entre les deux jeux de relations tient à ce $\gamma^0$.</b>

<b>Troisième relation</b><br>
Il faut d'abord voir ce que devient $u$ quand on renverse l'impulsion spatiale. Avec $\tilde p^\mu = (E_{\boldsymbol p}, -\boldsymbol p)$, les deux matrices s'échangent&nbsp;:

<p style="text-align:center;">
$\displaystyle
\tilde p\cdot\sigma = E_{\boldsymbol p} + \boldsymbol p\cdot\boldsymbol\sigma = p\cdot\bar\sigma\quad$
et
$\displaystyle
\quad \tilde p\cdot\bar\sigma = p\cdot\sigma
$
</p>

d'où $u^r(\tilde p) = \begin{pmatrix}\sqrt{p\cdot\bar\sigma}\,\xi^r \\ \sqrt{p\cdot\sigma}\,\xi^r\end{pmatrix}$, c'est-à-dire le spineur d'origine avec ses deux blocs permutés. En contractant avec $v^s(p)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
u^{r\dagger}(\tilde p)\,v^s(p) = \xi^{r\dagger}\sqrt{p\cdot\bar\sigma}\sqrt{p\cdot\sigma}\,\eta^s \;-\; \xi^{r\dagger}\sqrt{p\cdot\sigma}\sqrt{p\cdot\bar\sigma}\,\eta^s
$
</p>

Les deux termes contiennent le même produit de racines, lequel vaut $m$ d'après l'identité de Pauli établie plus haut pour $\bar u u$. Ils se retranchent donc exactement&nbsp;:

<p style="text-align:center;">
$\displaystyle
u^{r\dagger}(\tilde p)\,v^s(p) = m\,\xi^{r\dagger}\eta^s - m\,\xi^{r\dagger}\eta^s = 0
$
</p>

<b>C'est cette relation qui tuera les termes croisés</b> du hamiltonien et de la charge au chapitre suivant.

</details>

</div>

<b>Trois différences avec le jeu précédent</b> méritent d'être soulignées, car ce sont elles qui feront tout le travail au chapitre suivant.

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>D'abord, la normalisation vaut $2E_{\boldsymbol p}$ et non $2m$&nbsp;: elle dépend du référentiel, comme annoncé.</li>
<li>Ensuite, et c'est le point crucial, <b>le signe de la relation pour $v$ a changé</b>. On avait $\bar v v = -2m$, on obtient ici $v^\dagger v = +2E_{\boldsymbol p}$. Ce basculement de signe est la clé du calcul du hamiltonien.</li>
<li>Enfin, l'orthogonalité croisée ne vaut pas entre $u(p)$ et $v(p)$, mais entre $u(\tilde p)$ et $v(p)$, c'est-à-dire pour des impulsions <b>spatialement opposées</b>. C'est exactement la configuration que produiront les termes croisés du développement en modes.</li>
</ul>

<br>

#### De la base au développement en modes

Ces relations ne sont pas une simple collection de formules&nbsp;: elles disent que nous tenons une <b>base</b>, et c'est ce qui va nous autoriser à développer.

<div id="theo">

Pour chaque impulsion $\boldsymbol p$, on dispose de <b>quatre</b> spineurs&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>$u^1(p)$ et $u^2(p)$, les deux états de spin de la <b>particule</b>&nbsp;;</li>
<li>$v^1(p)$ et $v^2(p)$, les deux états de spin de l'<b>antiparticule</b>.</li>
</ul>

Ils sont deux à deux orthogonaux au sens du produit $\bar\psi\chi$, et normalisés. <b>Quatre vecteurs indépendants dans un espace de dimension quatre&nbsp;: c'est une base complète.</b>

</div>

L'équation de Dirac étant linéaire, toute solution est une superposition d'ondes planes. Et puisque les quatre spineurs ci-dessus engendrent tout l'espace à chaque $\boldsymbol p$, la superposition la plus générale s'obtient en sommant sur les deux états de spin et en intégrant sur toutes les impulsions, avec des coefficients arbitraires.

<div id="theo">

<b>Développement d'une solution «&nbsp;particule&nbsp;»</b>

<p style="text-align:center;">
$\displaystyle
\psi_-(x) = \int \frac{\mathrm{d}^3 p}{(2\pi)^{3/2}}\,\frac{1}{(2E_{\boldsymbol p})^{1/2}} \sum_{s=1}^{2} a_{s\boldsymbol p}\, u^s(p)\,\mathrm{e}^{-\mathrm{i} p\cdot x}
$
</p>

et de même pour les antiparticules, avec $b^*_{s\boldsymbol p}\\,v^s(p)\\,\mathrm{e}^{+\mathrm{i} p\cdot x}$.

</div>

Décortiquons cette écriture, dont chaque morceau a sa raison d'être&nbsp;:

<ul style="margin-top:0.5em; margin-bottom:1em;">
<li>l'<b>intégrale sur $\boldsymbol p$</b> superpose toutes les ondes planes possibles, comme pour n'importe quelle équation linéaire&nbsp;;</li>
<li>la <b>somme sur $s$</b> parcourt la base à impulsion fixée&nbsp;: c'est elle que les relations d'orthonormalité viennent de légitimer&nbsp;;</li>
<li>les <b>coefficients $a_{s\boldsymbol p}$</b> sont arbitraires&nbsp;: ils encodent la solution particulière, c'est-à-dire les conditions initiales&nbsp;;</li>
<li>les facteurs $(2\pi)^{-3/2}$ et $(2E_{\boldsymbol p})^{-1/2}$ sont les <b>mêmes conventions de normalisation</b> que pour le champ scalaire, choisies pour que la mesure soit invariante de Lorentz.</li>
</ul>

<div id="theo">

Cette écriture n'est pour l'instant qu'une <b>solution classique</b>. Au chapitre sur le <a href="./#le-champ-de-dirac-quantique">champ de Dirac quantique</a>, les coefficients $a_{s\boldsymbol p}$ et $b^*_{s\boldsymbol p}$ seront promus <b>opérateurs</b> d'annihilation et de création, et cette formule deviendra le développement en modes du champ quantifié.

</div>

<br>

#### Les sommes de spin

Reste l'outil de calcul le plus utilisé de toute la suite.

Quand on mesure une section efficace, on ne connaît généralement pas les polarisations&nbsp;: les faisceaux ne sont pas polarisés et les détecteurs sont aveugles au spin. On doit donc <b>moyenner</b> sur les spins entrants et <b>sommer</b> sur les spins sortants. Ces opérations font apparaître partout la même somme, et le théorème suivant la calcule une fois pour toutes.

<div id="theo">

<b>Sommes de spin</b>

<p style="text-align:center;">
$\displaystyle
\sum_{s=1}^{2} u^s(p)\,\bar u^s(p) = \; \not{\!\!p} + m
$
</p>
<p style="text-align:center;">
$\displaystyle
\sum_{s=1}^{2} v^s(p)\,\bar v^s(p) = \; \not{\!\!p} - m
$
</p>

Ce sont des matrices $4\times 4$ (produit d'une colonne par une ligne), et non des nombres.

</div>

Le gain est considérable&nbsp;: une somme sur des spineurs, objets encombrants, se replie sur une simple matrice construite sur $\not{\\!\\!p}$. C'est ce qui rendra possible l'algorithme des traces du dernier chapitre.

<div id="preuve">

<details>
<summary>Démonstration pour $u$ (le cas $v$ est identique au signe de $m$ près)</summary>

On écrit le produit colonne $\times$ ligne en blocs $2\times 2$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum_s u^s\bar u^s = \sum_s \begin{pmatrix} \sqrt{p\cdot\sigma}\,\xi^s \\ \sqrt{p\cdot\bar\sigma}\,\xi^s \end{pmatrix}\begin{pmatrix} \xi^{s\dagger}\sqrt{p\cdot\bar\sigma} & \xi^{s\dagger}\sqrt{p\cdot\sigma} \end{pmatrix}
$
</p>

L'ordre $(\bar\sigma, \sigma)$ de la ligne mérite attention&nbsp;: il vient du $\gamma^0$ de l'adjoint, qui <b>échange les blocs</b>. C'est exactement pour cela que la matrice obtenue ne sera pas diagonale.

La relation de fermeture $\sum_s \xi^s\xi^{s\dagger} = I$ élimine alors les $\xi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\sum_s u^s\bar u^s = \begin{pmatrix} \sqrt{p\cdot\sigma}\sqrt{p\cdot\bar\sigma} & \sqrt{p\cdot\sigma}\sqrt{p\cdot\sigma} \\ \sqrt{p\cdot\bar\sigma}\sqrt{p\cdot\bar\sigma} & \sqrt{p\cdot\bar\sigma}\sqrt{p\cdot\sigma} \end{pmatrix}
$
</p>

Les blocs <b>diagonaux</b> se simplifient par le mécanisme déjà employé pour $\bar u u$&nbsp;: la forme vectorielle de l'identité de Pauli avec $\boldsymbol a = \boldsymbol b = \boldsymbol p$, les signes croisés de $\sigma$ et $\bar\sigma$ produisant la différence de carrés&nbsp;:

<p style="text-align:center;">
$\displaystyle
(p\cdot\sigma)(p\cdot\bar\sigma) = (E_p - \boldsymbol p\cdot\boldsymbol\sigma)(E_p + \boldsymbol p\cdot\boldsymbol\sigma) = E_p^2 - (\boldsymbol p\cdot\boldsymbol\sigma)^2 =  E_p^2 - |p|^2 = m^2
\quad
$
</p>

<p style="text-align:center;">
$\displaystyle
\Longrightarrow\quad
\sqrt{p\cdot\sigma}\sqrt{p\cdot\bar\sigma} = m
$
</p>

Les blocs <b>hors diagonale</b>, eux, sont des racines multipliées par elles-mêmes, donc simplement $p\cdot\sigma$ et $p\cdot\bar\sigma$. Il reste

<p style="text-align:center;">
$\displaystyle
\sum_s u^s\bar u^s = \begin{pmatrix} m & p\cdot\sigma \\ p\cdot\bar\sigma & m \end{pmatrix} = \; \not{\!\!p} + m
$
</p>

la dernière égalité venant de $\not{\\!\\!p} = \begin{pmatrix} 0 & p\cdot\sigma \\\\ p\cdot\bar\sigma & 0\end{pmatrix}$ et de $m$ fois l'identité.

<b>À noter pour la suite</b>&nbsp;: cette matrice a exactement la structure que nous retrouverons dans le propagateur du fermion, avec la masse sur la diagonale et le terme cinétique hors diagonale. Ce n'est pas un hasard&nbsp;: le numérateur du propagateur <i>est</i> cette somme de spin.

</details>

</div>

<br>


### La limite non relativiste&nbsp;: l'équation de Pauli et $g = 2$

On entend souvent que l'équation de Dirac est «&nbsp;nécessaire pour décrire le spin&nbsp;». Formulation trompeuse&nbsp;: à basse énergie, l'équation de Pauli fait très bien l'affaire. Le vrai énoncé, plus beau&nbsp;: <b>l'équation de Pauli, avec le bon facteur gyromagnétique, émerge automatiquement de la limite non relativiste de Dirac</b>.

Même méthode que lorsqu'on a pris la [limite non relativiste](https://sciencesilencieuse.github.io/physique/tqc/gifted_amateur/tqc4/#limite-non-relativiste-le-prix-de-la-covariance) du champ scalaire complexe&nbsp;: on factorise l'énergie de masse, qui domine tout à basse vitesse, en posant $\psi_{L,R}(t, \boldsymbol x) = \phi_{L,R}(t, \boldsymbol x)\\,\mathrm{e}^{-\mathrm{i} mt}$. En notant $\hat E = \mathrm{i}\partial_0$ (qui, agissant sur $\phi$, mesure l'énergie <b>au-dessus</b> de $m$, donc petite), les équations couplées deviennent

<div id="theo">

<p style="text-align:center;">
$\displaystyle
-m\phi_L + (m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_R = 0 \\
(m + \hat E + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_L - m\phi_R = 0
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Détails&nbsp;:</summary>

$(\mathrm{i}\gamma^\mu \partial_\mu - m)\psi = 0$ devient en représentation chirale&nbsp;:

<p style="text-align:center;">
$\displaystyle
\begin{pmatrix} 0 & \mathrm{i}\partial_0 + \mathrm{i}\sigma^i\partial_i \\ \mathrm{i}\partial_0 - \mathrm{i}\sigma^i\partial_i & 0 \end{pmatrix} \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} - m \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$
</p>

Sachant que $\hat{\boldsymbol p} = -\mathrm{i}\boldsymbol{\nabla}$ (donc $\mathrm{i}\partial_i = -\hat{p}_i$), $\mathrm{i}\partial_0 + \mathrm{i}\boldsymbol{\sigma}\cdot\boldsymbol{\nabla} = \mathrm{i}\partial_0 - \boldsymbol\sigma\cdot\hat{\boldsymbol p}$ et $\mathrm{i}\partial_0 - \mathrm{i}\boldsymbol{\sigma}\cdot\boldsymbol{\nabla} = \mathrm{i}\partial_0 + \boldsymbol\sigma\cdot\hat{\boldsymbol p}$.

Cela nous donne les deux équations couplées suivantes&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\mathrm{i}\partial_0 - \boldsymbol\sigma\cdot\hat{\boldsymbol p})\psi_R = m\psi_L\\
(\mathrm{i}\partial_0 + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\psi_L = m\psi_R
$
</p>

À basse vitesse, l'énergie de masse écrase complètement l'énergie cinétique.<br>
Pour isoler la "petite" dynamique intéressante (l'énergie cinétique non relativiste), on factorise mathématiquement cette oscillation de masse monstrueuse très rapide $\mathrm{e}^{-\mathrm{i} mt}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi_{L,R}(t, \boldsymbol x) = \phi_{L,R}(t, \boldsymbol x)\,\mathrm{e}^{-\mathrm{i} mt}
$
</p>

Regardons comment se comporte l'opérateur dérivée temporelle $\mathrm{i}\partial_0$ (l'énergie totale) sur cette nouvelle expression&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\partial_0 \psi_{L,R} = \mathrm{i}\partial_0 \left( \phi_{L,R} \mathrm{e}^{-\mathrm{i} mt} \right)
 = \mathrm{e}^{-\mathrm{i} mt} (\mathrm{i}\partial_0 \phi_{L,R}) + \phi_{L,R} (\mathrm{i})(-\mathrm{i} m) \, \mathrm{e}^{-\mathrm{i} mt}
$
</p>

En notant $\hat E = \mathrm{i}\partial_0$ l'opérateur agissant uniquement sur l'enveloppe lente $\phi_{L,R}$, on remplace $\mathrm{i}\partial_0 \phi_{L,R}$ par $\hat E \phi_{L,R}$ :

<p style="text-align:center;">
$\displaystyle
\mathrm{i}\partial_0 \psi_{L,R} = \mathrm{e}^{-\mathrm{i} mt} (\hat E \phi_{L,R} + m\phi_{L,R}) = (m + \hat E)\phi_{L,R}\, \mathrm{e}^{-\mathrm{i} mt}
$
</p>

Quant à la partie spatiale (le gradient), elle ne touche pas l'exponentielle temporelle, donc&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat{\boldsymbol p} \psi_{L,R} = (\hat{\boldsymbol p} \phi_{L,R}) \,\mathrm{e}^{-\mathrm{i} mt}
$
</p>

Il ne reste plus qu'à réinjecter dans les équations couplées&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\mathrm{i}\partial_0 - \boldsymbol\sigma\cdot\hat{\boldsymbol p})\psi_R = m\psi_L \to (m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_R\,\mathrm{e}^{-\mathrm{i} mt} = m\phi_L\,\mathrm{e}^{-\mathrm{i} mt}\\
(\mathrm{i}\partial_0 + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\psi_L = m\psi_R \to (m + \hat E + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_L\,\mathrm{e}^{-\mathrm{i} mt} = m\phi_R\,\mathrm{e}^{-\mathrm{i} mt}
$
</p>

Et après simplification&nbsp;:

<p style="text-align:center;">
$\displaystyle
-m\phi_L + (m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_R = 0\\
(m + \hat E + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_L - m\phi_R = 0
$
</p>
</details>

</div>

À partir de ces équations et dans la limite non relativiste ($E\ll m$), on retrouve l'**équation de Pauli**&nbsp;:

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\hat E\,\phi_L = \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{2m}\,\phi_L
$
</p>

</div>

<br>

<div id="preuve">

<details>
<summary>Détails&nbsp;:</summary>

On cherche d'abord à exprimer $\phi_R$ à l'aide de la seconde équation.<br>
On isole $m\phi_R$ puis on divise tout par $m$ :

<p style="text-align:center;">
$\displaystyle
\phi_R = \frac{1}{m}(m + \hat E + \boldsymbol\sigma\cdot\hat{\boldsymbol p})\phi_L =  \left(1 + \frac{\hat E}{m} + \frac{\boldsymbol\sigma\cdot\hat{\boldsymbol p}}{m}\right)\phi_L
$
</p>

Maintenant, on injecte cette grosse expression à la place de $\phi_R$ dans la première équation&nbsp;:

<p style="text-align:center;">
$\displaystyle
-m\phi_L + (m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p}) \left(1 + \frac{\hat E}{m} + \frac{\boldsymbol\sigma\cdot\hat{\boldsymbol p}}{m}\right)\phi_L = 0
$
</p>

Développons le produit des deux parenthèses terme en distribuant $(m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p})$&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Fois $1$ : $m + \hat E - \boldsymbol\sigma\cdot\hat{\boldsymbol p}$</li>
<li>Fois $\frac{\hat E}{m}$ : $\hat E + \frac{\hat E^2}{m} - \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})\hat E}{m}$</li>
<li>Fois $\frac{\boldsymbol\sigma\cdot\hat{\boldsymbol p}}{m}$ : $\boldsymbol\sigma\cdot\hat{\boldsymbol p} + \frac{\hat E(\boldsymbol\sigma\cdot\hat{\boldsymbol p})}{m} - \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{m}$</li>
</ul>

Dans ce vide libre, l<b>'énergie</b> $\hat E$ (dérivée temporelle) <b>et l'impulsion</b> $\hat{\boldsymbol p}$ (dérivée spatiale) <b>commutent</b>. Les termes croisés avec un signe opposé s'annulent parfaitement. Il nous reste&nbsp;:

<p style="text-align:center;">
$\displaystyle
(m + 2\hat E + \frac{\hat E^2}{m} - \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{m})
$
</p>

Replaçons cela cela dans l'équation globale&nbsp;:

<p style="text-align:center;">
$\displaystyle
-m\phi_L + m\phi_L + \left(2\hat E + \frac{\hat E^2}{m} - \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{m}\right)\phi_L = 0
$
</p>

**Les masses s'annulent !**

Puisque l'on est à la limite non relativiste (basse énergie), l'énergie cinétique $\hat E$ est minuscule devant l'énergie de masse $m$ ($\hat E \ll m$). Le terme $\hat E^2/m$ est donc infime comparé à $2\hat E$&nbsp;:

<p style="text-align:center;">
$\displaystyle
2\hat E\,\phi_L - \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{m}\,\phi_L = 0
$
</p>

En divisant par 2 et en isolant l'énergie, on retrouve bien <b>l'équation de Pauli libre</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
\hat E\,\phi_L = \frac{(\boldsymbol\sigma\cdot\hat{\boldsymbol p})^2}{2m}\,\phi_L
$
</p>

</details>

</div>

Branchons maintenant l'**électromagnétisme** par couplage minimal, $\hat{\boldsymbol p} \to \hat{\boldsymbol p} - q\boldsymbol A$ et $\hat E \to \hat E - qA^0$. L'équation devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\hat E - qA^0)\,\phi = \left[\frac{(\hat{\boldsymbol p} - q\boldsymbol A)^2}{2m} - \frac{q}{2m}\,\boldsymbol\sigma\cdot\boldsymbol B\right]\phi
$
</p>

<div id="preuve">

<details>
<summary>Détails&nbsp;:</summary>

Appelons $\boldsymbol\pi = \hat{\boldsymbol p} - q\boldsymbol A$ l'<b>impulsion cinétique</b>. Le terme cinétique de l'équation devient proportionnel à $(\boldsymbol\sigma\cdot\boldsymbol\pi)^2$, et c'est ici que l'identité de Pauli posée au début du chapitre va donner tout son rendement, sous sa <b>forme vectorielle</b>.

Pas 1&nbsp;: <b>appliquer l'identité</b><br>
Avec $\boldsymbol a = \boldsymbol b = \boldsymbol\pi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\boldsymbol\sigma\cdot\boldsymbol\pi)^2 = \boldsymbol\pi^2 + \mathrm{i}\,\boldsymbol\sigma\cdot(\boldsymbol\pi \times \boldsymbol\pi)
$
</p>

Le premier terme redonne le $(\hat{\boldsymbol p} - q\boldsymbol A)^2$ habituel de Schrödinger. Tout l'intérêt est dans le second.


<b>Le point remarquable</b>&nbsp;: pour un vecteur ordinaire, $\boldsymbol\pi \times \boldsymbol\pi = \boldsymbol 0$ et il n'y aurait rien de plus. Mais $\boldsymbol\pi$ est un <b>opérateur</b> dont les composantes ne commutent pas entre elles, précisément parce que $\hat{\boldsymbol p}$ et $\boldsymbol A(\boldsymbol x)$ ne commutent pas. Ce produit vectoriel d'un vecteur avec lui-même est donc non nul, et nous allons voir que c'est <b>le champ magnétique</b>.


Pas 2&nbsp;: <b>calculer $\boldsymbol\pi \times \boldsymbol\pi$</b><br>
En développant, deux des quatre termes s'annulent d'eux-mêmes&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol\pi \times \boldsymbol\pi = \underbrace{\hat{\boldsymbol p} \times \hat{\boldsymbol p}}_{=\;\boldsymbol 0} - q\big(\hat{\boldsymbol p} \times \boldsymbol A + \boldsymbol A \times \hat{\boldsymbol p}\big) + q^2\underbrace{\boldsymbol A \times \boldsymbol A}_{=\;\boldsymbol 0}
$
</p>

Les composantes de $\hat{\boldsymbol p}$ commutent entre elles, et celles de $\boldsymbol A$ aussi (c'est une simple multiplication). Seuls survivent les <b>termes croisés</b>, et c'est là que se joue toute la physique.

Pas 3&nbsp;: <b>faire agir sur une fonction test</b><br>
Les deux termes croisés ne se compensent pas, car $\hat{\boldsymbol p} = -\mathrm{i}\boldsymbol\nabla$ dérive ce qui est à sa droite. Appliquons-les à une fonction $\psi$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big(\hat{\boldsymbol p} \times \boldsymbol A\big)\psi = -\mathrm{i}\,\boldsymbol\nabla \times (\boldsymbol A\psi)
\qquad\text{et}\qquad
\big(\boldsymbol A \times \hat{\boldsymbol p}\big)\psi = -\mathrm{i}\,\boldsymbol A \times (\boldsymbol\nabla\psi)
$
</p>

La règle du produit pour le rotationnel donne $\boldsymbol\nabla \times (\boldsymbol A\psi) = (\boldsymbol\nabla \times \boldsymbol A)\psi - \boldsymbol A \times \boldsymbol\nabla\psi$. En sommant, <b>les deux termes en $\boldsymbol A \times \boldsymbol\nabla\psi$ se retranchent</b> et il ne reste que le rotationnel de $\boldsymbol A$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\big(\hat{\boldsymbol p} \times \boldsymbol A + \boldsymbol A \times \hat{\boldsymbol p}\big)\psi = -\mathrm{i}\,(\boldsymbol\nabla \times \boldsymbol A)\,\psi = -\mathrm{i}\,\boldsymbol B\,\psi
$
</p>

<b>Le champ magnétique est apparu directement comme un rotationnel</b>, sans passer par les indices, puisque $\boldsymbol B = \boldsymbol\nabla \times \boldsymbol A$ par définition. D'où

<p style="text-align:center;">
$\displaystyle
\boldsymbol\pi \times \boldsymbol\pi = -q\,(-\mathrm{i}\boldsymbol B) = \mathrm{i}q\,\boldsymbol B
$
</p>

Pas 4&nbsp;: <b>reporter</b><br>
Les deux facteurs $\mathrm{i}$ se combinent en $-1$&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\boldsymbol\sigma\cdot\boldsymbol\pi)^2 = \boldsymbol\pi^2 + \mathrm{i}\,\boldsymbol\sigma\cdot(\mathrm{i}q\boldsymbol B) = \boldsymbol\pi^2 - q\,\boldsymbol\sigma\cdot\boldsymbol B
$
</p>

En divisant par le $2m$ de l'équation de Pauli, on tombe sur l'équation finale :

<p style="text-align:center;">
$\displaystyle
(\hat E - qA^0)\,\phi_L = \left[\frac{(\hat{\boldsymbol p} - q\boldsymbol A)^2}{2m} - \frac{q}{2m}\,\boldsymbol\sigma\cdot\boldsymbol B\right]\phi_L
$
</p>

</details>

</div>

Regardons le nouveau terme généré par ce calcul&nbsp;: $H_{\text{mag}} = - \frac{q}{2m}\\,\boldsymbol\sigma\cdot\boldsymbol B$.

En physique classique/phénoménologique, l'énergie d'un moment magnétique $\boldsymbol\mu$ dans un champ $\boldsymbol B$ s'écrit : 

<div id="def">

<p style="text-align:center;">
$\displaystyle
H_{\text{mag}} = -\boldsymbol\mu \cdot \boldsymbol B
$
</p>

</div>

On sait par ailleurs que le moment magnétique d'une particule est lié à son spin $\hat{\boldsymbol S}$ par la formule&nbsp;:

<div id="def">

<p style="text-align:center;">
$\displaystyle
\boldsymbol\mu = g \frac{q}{2m} \hat{\boldsymbol S}
$
</p>

</div>

où $g$ est le fameux **facteur gyromagnétique** (qui vaut classiquement $1$ pour une boucle de courant).

Pour un électron, l'opérateur de spin s'exprime à l'aide des matrices de Pauli&nbsp;: 

<div id="def">
<p style="text-align:center;">
$\displaystyle
\hat{\boldsymbol S} = \frac{1}{2}\boldsymbol\sigma
$
</p>

</div>

Injectons cela dans l'expression de $H_{\text{mag}}$ attendue&nbsp;:

<p style="text-align:center;">
$\displaystyle
H_{\text{mag}} = -g \frac{q}{2m} \left(\frac{1}{2}\boldsymbol\sigma\right) \cdot \boldsymbol B = -g \frac{q}{4m} \boldsymbol\sigma\cdot\boldsymbol B
$
</p>

Comparons maintenant cette forme phénoménologique avec ce que notre calcul de Dirac a dicté&nbsp;:
<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>Théorie attendue : $-g \frac{q}{4m} \boldsymbol\sigma\cdot\boldsymbol B$</li>
<li>Résultat de Dirac : $- \frac{q}{2m} \boldsymbol\sigma\cdot\boldsymbol B$</li>
</ul>

Pour que les deux correspondent, on doit obligatoirement poser&nbsp;:

<p style="text-align:center;">
$\displaystyle
\frac{g}{4m} = \frac{1}{2m}
$
</p>


<div id="theo">

<p style="text-align:center;">
$\displaystyle
\Rightarrow g = 2
$
</p>

</div>

Sans avoir rien demandé, la structure matricielle imposée par la relativité restreinte a généré ce terme magnétique, prouvant que l'électron se comporte (presque) comme s'il tournait sur lui-même deux fois plus efficacement qu'un objet classique. C'est le moment où la mécanique quantique et la relativité se serrent formellement la main !


Historiquement, ce résultat fut décisif pour asseoir l'équation de Dirac&nbsp;: le facteur 2, mystérieux dans la théorie de Pauli où on le mettait à la main, sort ici du formalisme sans qu'on lui demande rien. L'expérience donne $g = 2{,}002\,319\,304\ldots$&nbsp;; l'écart n'est pas une imperfection de Dirac mais le signal que $\psi$ n'est pas une fonction d'onde à une particule&nbsp;: c'est un champ, dont les fluctuations quantiques corrigent $g$. La [partie 14](https://sciencesilencieuse.github.io/physique/tqc/gifted_amateur/tqc14/) calculera la première correction et retrouvera les décimales.

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\text{1er ordre en } \partial_t \;\Rightarrow\; \{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu} \;\Rightarrow\; (\mathrm{i}\not{\!\!\partial} - m)\psi = 0 \;\Rightarrow\; \psi = \begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} \text{ couplés par } m \;\Rightarrow\; \gamma^5,\ \hat h \;\Rightarrow\; u, v,\ \textstyle\sum_s u\bar u = \;\, \not{\!\!p} + m \;\Rightarrow\; \text{Pauli et } g = 2
$
</p>

### Pièges

<ul>
<li>Chiralité $\neq$ hélicité en général&nbsp;: elles coïncident uniquement pour $m = 0$ (ou en pratique dans la limite ultra-relativiste). La chiralité est Lorentz-invariante mais non conservée si $m \neq 0$&nbsp;; l'hélicité est conservée mais dépend du référentiel.</li>
<li>Les antiparticules inversent tout&nbsp;: hélicité opposée à celle de la particule pour une même chiralité, et spin physique codé «&nbsp;à l'envers&nbsp;» dans $\eta$.</li>
<li>$\psi$ a quatre composantes mais seulement <b>deux</b> degrés de liberté physiques (le spin)&nbsp;: les quatre composantes sont contraintes par l'équation de Dirac elle-même.</li>
<li>La représentation chirale n'est qu'un choix&nbsp;: la forme explicite de $\gamma^5$ comme matrice diagonale par blocs, et la localisation de $\psi_L$ «&nbsp;en haut&nbsp;», ne valent que dans cette représentation. L'algèbre de Clifford, elle, est universelle.</li>
<li>Ce chapitre traite Dirac comme une équation à une particule&nbsp;: c'est un échafaudage provisoire, utile pour construire l'intuition, mais les énergies négatives ne se soignent vraiment qu'en passant au champ quantifié (dans deux chapitres).</li>
</ul>

<br>


## Comment transformer un spineur&nbsp;?

### Les spineurs ne sont pas des vecteurs

Les différents types de champs se classent par leurs propriétés de transformation sous les rotations et les boosts. La transformation générale s'écrit

<p style="text-align:center;">
$\displaystyle
D(\boldsymbol\theta, \boldsymbol\phi) = \mathrm{e}^{-\mathrm{i}\boldsymbol J\cdot\boldsymbol\theta + \mathrm{i}\boldsymbol K\cdot\boldsymbol\phi}
$
</p>

où $\boldsymbol J$ engendre les rotations (angle $\boldsymbol\theta$), $\boldsymbol K$ les boosts (rapidité $\boldsymbol\phi$, avec $\tanh\phi^i = \beta^i$), et le choix des matrices $\boldsymbol J$, $\boldsymbol K$ dépend de l'objet transformé, sous la seule contrainte des relations de commutation du groupe de Lorentz&nbsp;:

<p style="text-align:center;">
$\displaystyle
[J^i, J^j] = \mathrm{i}\epsilon^{ijk}J^k\\
[J^i, K^j] = \mathrm{i}\epsilon^{ijk}K^k\\
[K^i, K^j] = -\mathrm{i}\epsilon^{ijk}J^k
$
</p>

Pour les scalaires, $\boldsymbol J = \boldsymbol K = 0$. Pour les vecteurs, ce sont les matrices $4\times 4$ familières. Pour les spineurs, il faut autre chose&nbsp;: les rotations d'objets à deux composantes de spin $\frac{1}{2}$ sont engendrées, comme le prouva Wigner, par le groupe $SU(2)$ et ses générateurs $\boldsymbol J = \frac{1}{2}\boldsymbol\sigma$. La matrice de rotation d'un spineur de Weyl est donc

<p style="text-align:center;">
$\displaystyle
D(\boldsymbol\theta) = \mathrm{e}^{-\frac{\mathrm{i}}{2}\boldsymbol\sigma\cdot\boldsymbol\theta}
$
</p>

<b>la même</b> pour $\psi_L$ et $\psi_R$&nbsp;: gauche et droite tournent identiquement. 


<div id="preuve">

<details>
<summary>
Exemple de la rotation d'angle $\theta^3$ autour de $z$&nbsp;:
</summary>

En géométrie, une rotation est définie par <b>un axe et un angle</b>. Le vecteur $\boldsymbol\theta$ pointe dans la direction de l'axe de rotation, et sa longueur (sa norme) correspond à l'angle de rotation. Ici, $\boldsymbol\theta = (0, 0, \theta^3)$.

Le produit scalaire se simplifie donc en&nbsp;:

<p style="text-align:center;">
$\displaystyle
\boldsymbol\sigma\cdot\boldsymbol\theta = \sigma^1(0) + \sigma^2(0) + \sigma^3(\theta^3) = \sigma^3\theta^3
$
</p>

Et l'équation devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
D(\theta^3) = \mathrm{e}^{-\frac{\mathrm{i}}{2}\sigma^3\theta^3}
$
</p>

Or $\sigma^3 = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix}$ est sympatiquement <b>diagonale</b>.

Et comme $\mathrm{e}^{\begin{pmatrix} a & 0 \\\\ 0 & b \end{pmatrix}} = \begin{pmatrix} \mathrm{e}^a & 0 \\\\ 0 & \mathrm{e}^b \end{pmatrix}$,

<p style="text-align:center;">
$\displaystyle
D(\theta^3) = \begin{pmatrix} \mathrm{e}^{-\frac{\mathrm{i}}{2}\theta^3 (1)} & 0 \\ 0 & \mathrm{e}^{-\frac{\mathrm{i}}{2}\theta^3 (-1)} \end{pmatrix} = \begin{pmatrix} \mathrm{e}^{-\mathrm{i}\theta^3/2} & 0 \\ 0 & \mathrm{e}^{\mathrm{i}\theta^3/2} \end{pmatrix}
$
</p>

<b>Appliquons maintenant cette matrice à un spineur</b> en lui faisant faire un tour géométrique complet sur lui-même, c'est-à-dire en choisissant un angle de rotation $\theta^3 = 2\pi$.

<b>Grâce au facteur $1/2$</b> apparu dans l'exponentielle, la matrice de rotation pour un tour complet devient&nbsp;:

<p style="text-align:center;">
$\displaystyle
D(2\pi) = \begin{pmatrix} \mathrm{e}^{-\mathrm{i}\pi} & 0 \\ 0 & \mathrm{e}^{\mathrm{i}\pi} \end{pmatrix}=\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I
$
</p>

La conclusion physique&nbsp;:<br>
Si vous prenez un spineur $\psi$ (qui décrit un électron) et que vous lui faites subir une rotation spatiale classique de <b>360°</b> ($2\pi$), l'opérateur de rotation agit ainsi&nbsp;:

<p style="text-align:center;">
$\displaystyle
\psi \xrightarrow{\;360^\circ\;} -I \psi = -\psi
$
</p>

<b>La fonction d'onde</b> ne revient pas à elle-même, elle <b>est inversée</b> (multipliée par un signe moins global)&nbsp;!<br>
Pour que le signe moins s'annule et que l'électron retrouve son état quantique strict de départ, il faut tourner d'un angle total de $\theta^3 = 4\pi$ (soit <b>deux tours complets</b>). C'est la signature mathématique des particules de spin 1/2.

</details>

</div>

<br>

### Booster un spineur&nbsp;: deux choix de signe, deux espèces

Les rotations étant fixées par $\boldsymbol J = \frac{1}{2}\boldsymbol\sigma$, il reste à trouver les générateurs de boost $\boldsymbol K$ compatibles avec l'algèbre de Lorentz. Le résultat est court, et surprenant.

<div id="theo">

<p style="text-align:center;">
$\displaystyle
\boldsymbol K = \pm\frac{\mathrm{i}\boldsymbol\sigma}{2}
$
</p>

Les <b>deux</b> signes conviennent, et ils donnent deux représentations <b>inéquivalentes</b>&nbsp;: on ne passe pas de l'une à l'autre par un changement de base.

</div>

<br>

<div id="preuve">

<details>
<summary>Vérification, et pourquoi le signe reste libre</summary>

Trois relations de commutation définissent l'algèbre de Lorentz&nbsp;:

<p style="text-align:center;">
$\displaystyle
[J^i, J^j] = \mathrm{i}\epsilon^{ijk}J^k
$
</p>

<p style="text-align:center;">
$\displaystyle
[J^i, K^j] = \mathrm{i}\epsilon^{ijk}K^k
$
</p>

<p style="text-align:center;">
$\displaystyle
[K^i, K^j] = -\mathrm{i}\epsilon^{ijk}J^k
$
</p>

Posons $\boldsymbol J = \frac{1}{2}\boldsymbol\sigma$ et $\boldsymbol K = \lambda\boldsymbol\sigma$, avec $\lambda$ un nombre à déterminer. Tout repose sur la <b>partie antisymétrique</b> de l'identité de Pauli, $[\sigma^i, \sigma^j] = 2\mathrm{i}\epsilon^{ijk}\sigma^k$, établie au chapitre précédent.

<b>La deuxième relation</b> ne contraint rien&nbsp;:

<p style="text-align:center;">
$\displaystyle
[J^i, K^j] = \tfrac{1}{2}\lambda\,[\sigma^i, \sigma^j] = \tfrac{1}{2}\lambda\cdot 2\mathrm{i}\epsilon^{ijk}\sigma^k = \mathrm{i}\epsilon^{ijk}(\lambda\sigma^k) = \mathrm{i}\epsilon^{ijk}K^k
$
</p>

L'égalité est satisfaite quel que soit $\lambda$. C'est normal&nbsp;: cette relation dit seulement que $\boldsymbol K$ est un vecteur sous les rotations, ce qui ne fixe pas sa taille.

<b>La troisième relation</b>, elle, est décisive&nbsp;:

<p style="text-align:center;">
$\displaystyle
[K^i, K^j] = \lambda^2[\sigma^i, \sigma^j] = 2\mathrm{i}\lambda^2\epsilon^{ijk}\sigma^k = 4\mathrm{i}\lambda^2\epsilon^{ijk}J^k
$
</p>

En comparant avec le membre de droite exigé, $-\mathrm{i}\epsilon^{ijk}J^k$, il vient

<p style="text-align:center;">
$\displaystyle
4\lambda^2 = -1
\qquad\Longrightarrow\qquad
\lambda^2 = -\tfrac{1}{4}
\qquad\Longrightarrow\qquad
\lambda = \pm\tfrac{\mathrm{i}}{2}
$
</p>

<b>Le signe moins du membre de droite est ce qui force $\lambda$ à être imaginaire</b>, et l'équation étant quadratique, les deux racines sont recevables. Voilà l'origine des deux espèces.

Un mot sur ce que signifie «&nbsp;inéquivalentes&nbsp;». Un changement de base $\boldsymbol\sigma \to U\boldsymbol\sigma U^{-1}$ transforme $\boldsymbol J$ et $\boldsymbol K$ de la même façon, donc conserve le rapport $\boldsymbol K/\boldsymbol J$. Comme ce rapport vaut $+\mathrm{i}$ dans un cas et $-\mathrm{i}$ dans l'autre, aucune conjugaison ne peut échanger les deux représentations.

</details>

</div>

Il existe donc deux espèces de spineurs, qui <b>tournent de la même façon</b> et se <b>boostent en sens opposés</b>. Au repos, aucun boost n'est à l'œuvre et rien ne les distingue&nbsp;: ce sont exactement les $\psi_L$ et $\psi_R$ tombés de l'équation de Dirac au chapitre précédent, et l'on comprend enfin pourquoi ils y étaient indiscernables au repos.

{{%notice note "Aparté : la classification $(\frac{1}{2}, 0) \oplus (0, \frac{1}{2})$, pour cartographier"%}}

La manière propre de voir les deux espèces&nbsp;: définir $\boldsymbol J_\pm = \frac{1}{2}(\boldsymbol J \pm \mathrm{i}\boldsymbol K)$. Un calcul direct montre que les $\boldsymbol J_+$ commutent avec les $\boldsymbol J_-$ et que chacun satisfait séparément l'algèbre de $SU(2)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
[J_+^i, J_+^j] = \mathrm{i}\epsilon^{ijk}J_+^k, \quad [J_-^i, J_-^j] = \mathrm{i}\epsilon^{ijk}J_-^k, \quad [J_+^i, J_-^j] = 0
$
</p>

L'algèbre de Lorentz est donc «&nbsp;deux $SU(2)$ indépendants&nbsp;», et ses représentations se cataloguent par un couple de spins $(j_-, j_+)$.

Les cas les plus simples&nbsp;:

<ul style="margin-top:-0.5em; margin-bottom:1em;">
<li>$(0, 0)$&nbsp;: le scalaire&nbsp;;</li>
<li>$(\frac{1}{2}, 0)$&nbsp;: $J_+ = 0$, d'où $\boldsymbol J = -\mathrm{i}\boldsymbol K$, soit $\boldsymbol K = +\frac{\mathrm{i}\boldsymbol\sigma}{2}$&nbsp;: le spineur de Weyl gauche&nbsp;;</li>
<li>$(0, \frac{1}{2})$&nbsp;: $J_- = 0$, d'où $\boldsymbol K = -\frac{\mathrm{i}\boldsymbol\sigma}{2}$&nbsp;: le spineur de Weyl droit&nbsp;;</li>
<li>$(\frac{1}{2}, \frac{1}{2})$&nbsp;: quatre composantes qui se transforment comme... un quadrivecteur.</li>
</ul>

Le spineur de Dirac est la somme directe $(\frac{1}{2}, 0) \oplus (0, \frac{1}{2})$&nbsp;: une représentation <b>réductible</b> du groupe de Lorentz, mais irréductible dès qu'on exige en plus la parité (voir plus bas).

{{%/notice%}}

Le résultat opérationnel, celui qu'on utilisera dans tous les calculs&nbsp;:

<div id="theo">

<b>Transformation d'un spineur de Dirac</b>

<p style="text-align:center;">
$\displaystyle
\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix} \to \begin{pmatrix} D_L & 0 \\ 0 & D_R \end{pmatrix}\begin{pmatrix} \psi_L \\ \psi_R \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
D_L = \mathrm{e}^{\frac{\boldsymbol\sigma}{2}\cdot(-\mathrm{i}\boldsymbol\theta - \boldsymbol\phi)}
$
</p>

<p style="text-align:center;">
$\displaystyle
D_R = \mathrm{e}^{\frac{\boldsymbol\sigma}{2}\cdot(-\mathrm{i}\boldsymbol\theta + \boldsymbol\phi)}
$
</p>

où $\boldsymbol\theta$ est l'angle de rotation et $\boldsymbol\phi$ la <b>rapidité</b> du boost. Rotations identiques, boosts opposés&nbsp;: pour un boost pur,

<p style="text-align:center;">
$\displaystyle
\psi_L \to \mathrm{e}^{-\frac{1}{2}\boldsymbol\sigma\cdot\boldsymbol\phi}\,\psi_L
\qquad\text{et}\qquad
\psi_R \to \mathrm{e}^{+\frac{1}{2}\boldsymbol\sigma\cdot\boldsymbol\phi}\,\psi_R
$
</p>

</div>

<br>

#### La formule de $u(p)$, enfin démontrée

Le chapitre précédent avait <i>annoncé</i> l'expression des spineurs d'impulsion quelconque sans la justifier. Nous avons maintenant tout ce qu'il faut&nbsp;: il suffit de booster le spineur au repos.

<div id="theo">

En boostant $u(p_0) = \sqrt m \begin{pmatrix} \xi \\\\ \xi \end{pmatrix}$, on obtient exactement

<p style="text-align:center;">
$\displaystyle
u(p) = \begin{pmatrix} \sqrt{p\cdot\sigma}\;\xi \\ \sqrt{p\cdot\bar\sigma}\;\xi \end{pmatrix}
$
</p>

La formule admise au chapitre précédent n'était donc pas un postulat, mais une conséquence de la loi de transformation des spineurs.

</div>

<br>

<div id="preuve">

<details>
<summary>Démonstration, sur un boost selon $z$</summary>

Le raisonnement tient en cinq pas. On se place dans le cas d'un boost selon $z$, ce qui ne coûte aucune généralité&nbsp;: une rotation ramène toujours à cette configuration.

<b>Écrire l'exponentielle de matrices</b><br>
Pour un boost selon $z$, $\boldsymbol\sigma\cdot\boldsymbol\phi = \sigma^3\phi^3$. Comme $(\sigma^3)^2 = I$, le développement en série se replie sur les fonctions hyperboliques, exactement comme $\mathrm e^{\sigma^3 x}$ se replierait sur $\cosh$ et $\sinh$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{e}^{\pm\frac{1}{2}\sigma^3\phi^3} = I\cosh\frac{\phi^3}{2} \pm \sigma^3\sinh\frac{\phi^3}{2}
$
</p>

<b>Rendre ces matrices explicites</b><br>
Puisque $\sigma^3 = \begin{pmatrix} 1 & 0 \\\\ 0 & -1\end{pmatrix}$ est diagonale, l'exponentielle l'est aussi, et chaque entrée est une exponentielle ordinaire&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{e}^{-\frac{1}{2}\sigma^3\phi^3} = \begin{pmatrix} \mathrm{e}^{-\phi^3/2} & 0 \\ 0 & \mathrm{e}^{+\phi^3/2} \end{pmatrix}
\qquad
\mathrm{e}^{+\frac{1}{2}\sigma^3\phi^3} = \begin{pmatrix} \mathrm{e}^{+\phi^3/2} & 0 \\ 0 & \mathrm{e}^{-\phi^3/2} \end{pmatrix}
$
</p>

<b>Traduire la rapidité en énergie et impulsion</b><br>
Un boost de rapidité $\phi^3$ appliqué à une particule au repos lui donne l'impulsion $p^\mu = (E_{\boldsymbol p}, 0, 0, |\boldsymbol p|)$ avec

<p style="text-align:center;">
$\displaystyle
\cosh\phi^3 = \frac{E_{\boldsymbol p}}{m}\quad$
et
$\displaystyle\quad
\sinh\phi^3 = \frac{|\boldsymbol p|}{m}
$
</p>

d'où, en additionnant ou soustrayant ces deux relations,

<p style="text-align:center;">
$\displaystyle
\mathrm{e}^{\pm\phi^3} = \cosh\phi^3 \pm \sinh\phi^3 = \frac{E_{\boldsymbol p} \pm |\boldsymbol p|}{m}
\;\Longrightarrow\;
\mathrm{e}^{\pm\phi^3/2} = \sqrt{\frac{E_{\boldsymbol p} \pm |\boldsymbol p|}{m}}
$
</p>

<b>Assembler la matrice $4\times 4$</b><br>
En empilant le bloc $D_L$ puis le bloc $D_R$&nbsp;:

<p style="text-align:center;">
$\displaystyle
S = \frac{1}{\sqrt m}
\begin{pmatrix}
\sqrt{E_{\boldsymbol p} - |\boldsymbol p|} & 0 & 0 & 0\\
0 & \sqrt{E_{\boldsymbol p} + |\boldsymbol p|} & 0 & 0\\
0 & 0 & \sqrt{E_{\boldsymbol p} + |\boldsymbol p|} & 0\\
0 & 0 & 0 & \sqrt{E_{\boldsymbol p} - |\boldsymbol p|}
\end{pmatrix}
$
</p>

En l'appliquant au spineur au repos, le facteur $\sqrt m$ se simplifie contre le $1/\sqrt m$&nbsp;:

<p style="text-align:center;">
$\displaystyle
u(p) = S\,u(p_0) =
\begin{pmatrix}
\begin{pmatrix} \sqrt{E_{\boldsymbol p} - |\boldsymbol p|} & 0 \\ 0 & \sqrt{E_{\boldsymbol p} + |\boldsymbol p|}\end{pmatrix}\xi
\\
\begin{pmatrix} \sqrt{E_{\boldsymbol p} + |\boldsymbol p|} & 0 \\ 0 & \sqrt{E_{\boldsymbol p} - |\boldsymbol p|}\end{pmatrix}\xi
\end{pmatrix}
$
</p>

<b>Reconnaître $\sqrt{p\cdot\sigma}$ et $\sqrt{p\cdot\bar\sigma}$.</b><br>
C'est l'étape qui referme la boucle. Avec $\sigma^\mu = (I, \boldsymbol\sigma)$, $\bar\sigma^\mu = (I, -\boldsymbol\sigma)$ et $p_\mu = (E_{\boldsymbol p}, -\boldsymbol p)$ en métrique $(+,-,-,-)$&nbsp;:

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma = p_\mu\sigma^\mu = E_{\boldsymbol p}\,I - \boldsymbol p\cdot\boldsymbol\sigma
\qquad
p\cdot\bar\sigma = p_\mu\bar\sigma^\mu = E_{\boldsymbol p}\,I + \boldsymbol p\cdot\boldsymbol\sigma
$
</p>

Pour notre impulsion selon $z$, $\boldsymbol p\cdot\boldsymbol\sigma = |\boldsymbol p|\sigma^3$, donc ces deux matrices sont diagonales&nbsp;:

<p style="text-align:center;">
$\displaystyle
p\cdot\sigma = \begin{pmatrix} E_{\boldsymbol p} - |\boldsymbol p| & 0 \\ 0 & E_{\boldsymbol p} + |\boldsymbol p| \end{pmatrix}
\qquad
p\cdot\bar\sigma = \begin{pmatrix} E_{\boldsymbol p} + |\boldsymbol p| & 0 \\ 0 & E_{\boldsymbol p} - |\boldsymbol p| \end{pmatrix}
$
</p>

Une matrice diagonale ayant pour racine la matrice des racines, on lit immédiatement que le bloc supérieur de $u(p)$ est $\sqrt{p\cdot\sigma}\\,\xi$ et le bloc inférieur $\sqrt{p\cdot\bar\sigma}\\,\xi$. C'est la formule annoncée.

<b>Contrôle.</b> Faisons $|\boldsymbol p| \to 0$&nbsp;: les deux matrices tendent vers $m\\,I$, donc $u(p) \to \sqrt m\begin{pmatrix}\xi \\\\ \xi\end{pmatrix}$, le spineur au repos. Et à la limite ultra-relativiste $E_{\boldsymbol p} \to |\boldsymbol p|$, l'entrée $\sqrt{E_{\boldsymbol p} - |\boldsymbol p|}$ s'annule&nbsp;: une des deux chiralités disparaît, comme le veut la coïncidence entre chiralité et hélicité à haute énergie.

</details>

</div>

<br>

#### L'équation de Dirac, redémontrée

Ces outils permettent de retrouver l'équation de Dirac par un chemin entièrement différent de celui du chapitre précédent, et bien plus révélateur de sa nature.

<div id="theo">

L'équation de Dirac est la <b>version covariante</b> d'un énoncé trivial&nbsp;: «&nbsp;au repos, les deux chiralités coïncident&nbsp;». Toute sa dynamique est contenue dans la cinématique du groupe de Lorentz.

</div>

<br>

<div id="preuve">

<details>
<summary>La démonstration en trois pas</summary>

Pas 1&nbsp;: <b>écrire la condition de repos sous forme matricielle</b><br>
Nous savons qu'au repos $u_L(p_0) = u_R(p_0)$. Or la matrice $\gamma^0$ échange précisément les deux blocs&nbsp;:

<p style="text-align:center;">
$\displaystyle
\gamma^0 \begin{pmatrix} u_L \\ u_R \end{pmatrix}
= \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}\begin{pmatrix} u_L \\ u_R \end{pmatrix}
= \begin{pmatrix} u_R \\ u_L \end{pmatrix}
$
</p>

Dire que $u_L = u_R$ revient donc à dire que $\gamma^0$ laisse le spineur inchangé, c'est-à-dire

<p style="text-align:center;">
$\displaystyle
(\gamma^0 - 1)\,u(p_0) = 0
$
</p>

Cette équation ne contient aucune physique&nbsp;: elle traduit une observation faite au repos.

Pas 2&nbsp;: <b>booster la matrice $\gamma^0$</b><br>
C'est le cœur du calcul. Notons $S$ la matrice de boost écrite plus haut, en blocs $\mathrm{diag}(D_L, D_R)$, et calculons $S\\,\gamma^0\\,S^{-1}$ par blocs&nbsp;:

<p style="text-align:center;">
$\displaystyle
S\gamma^0 S^{-1}
= \begin{pmatrix} D_L & 0 \\ 0 & D_R \end{pmatrix}
\begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}
\begin{pmatrix} D_L^{-1} & 0 \\ 0 & D_R^{-1} \end{pmatrix}
= \begin{pmatrix} 0 & D_L D_R^{-1} \\ D_R D_L^{-1} & 0 \end{pmatrix}
$
</p>

Les deux blocs se calculent sans peine, puisque $D_L = \mathrm{e}^{-\frac{1}{2}\boldsymbol\sigma\cdot\boldsymbol\phi}$ et $D_R = \mathrm{e}^{+\frac{1}{2}\boldsymbol\sigma\cdot\boldsymbol\phi}$ sont inverses l'une de l'autre&nbsp;:

<p style="text-align:center;">
$\displaystyle
D_L D_R^{-1} = \mathrm{e}^{-\boldsymbol\sigma\cdot\boldsymbol\phi}\quad$
et
$\displaystyle
\quad D_R D_L^{-1} = \mathrm{e}^{+\boldsymbol\sigma\cdot\boldsymbol\phi}
$
</p>

<b>Les demi-rapidités se sont additionnées en rapidité entière</b>, et c'est ce qui va faire apparaître $E_{\boldsymbol p}$ et $|\boldsymbol p|$ plutôt que leurs racines. En développant comme dans la première étape de la démonstration précédente, mais sans le facteur $\frac{1}{2}$&nbsp;:

<p style="text-align:center;">
$\displaystyle
\mathrm{e}^{\mp\boldsymbol\sigma\cdot\boldsymbol\phi} = I\cosh\phi \mp (\hat{\boldsymbol p}\cdot\boldsymbol\sigma)\sinh\phi
= \frac{1}{m}\left(E_{\boldsymbol p}\,I \mp \boldsymbol p\cdot\boldsymbol\sigma\right)
$
</p>

où l'on a réutilisé $\cosh\phi = E_{\boldsymbol p}/m$ et $\sinh\phi = |\boldsymbol p|/m$. On reconnaît alors exactement $p\cdot\sigma$ et $p\cdot\bar\sigma$&nbsp;:

<p style="text-align:center;">
$\displaystyle
S\gamma^0 S^{-1} = \frac{1}{m}\begin{pmatrix} 0 & p\cdot\sigma \\ p\cdot\bar\sigma & 0 \end{pmatrix} = \frac{\not{\!\!p}}{m}
$
</p>

la dernière égalité venant de $\not{\\!\\!p} = \gamma^\mu p_\mu = \begin{pmatrix} 0 & \sigma^\mu \\\\ \bar\sigma^\mu & 0\end{pmatrix}p_\mu$.

Pas 3&nbsp;: <b>transporter l'équation du repos</b><br>
Il ne reste qu'à multiplier la condition du pas 1 par $S$, en glissant $S^{-1}S = I$ au bon endroit&nbsp;:

<p style="text-align:center;">
$\displaystyle
0 = S\,(\gamma^0 - 1)\,u(p_0) = S(\gamma^0 - 1)S^{-1}\,\underbrace{S\,u(p_0)}_{u(p)} = \left(\frac{\not{\!\!p}}{m} - 1\right)u(p)
$
</p>

et en multipliant par $m$&nbsp;:

<p style="text-align:center;">
$\displaystyle
(\not{\!\!p} - m)\,u(p) = 0
$
</p>

<b>Morale</b><br>
Nous n'avons introduit aucun principe dynamique&nbsp;: seulement une observation au repos et la façon dont les spineurs se transforment. L'équation de Dirac est donc, littéralement, la condition «&nbsp;gauche $=$ droite au repos&nbsp;» rendue valable dans tous les référentiels.

</details>

</div>

<br>

### Pourquoi quatre composantes&nbsp;? La parité

Reste la question laissée en suspens&nbsp;: puisque le spin ne demande que deux degrés de liberté, et qu'un spineur de Weyl suffit à les porter, pourquoi la nature utilise-t-elle les <b>deux</b> espèces à la fois&nbsp;?

La réponse est la <b>parité</b>. L'opération $P$ renverse $\boldsymbol x \to -\boldsymbol x$, donc aussi les vitesses $\boldsymbol v \to -\boldsymbol v$. Sur les générateurs, cela donne

<p style="text-align:center;">
$\displaystyle
P^{-1}\boldsymbol K P = -\boldsymbol K\quad$
et
$\displaystyle
\quad P^{-1}\boldsymbol J P = +\boldsymbol J
$
</p>

$\boldsymbol K$ change de signe parce qu'il engendre les boosts, donc les vitesses&nbsp;; $\boldsymbol J$ n'en change pas parce que c'est un <b>pseudovecteur</b>, à l'image du moment cinétique $\boldsymbol x \times \boldsymbol p$ qui ramasse deux signes moins.

Or les deux espèces de spineurs se distinguent précisément par le signe de $\boldsymbol K$. <b>La parité échange donc les deux représentations</b>&nbsp;:

<p style="text-align:center;">
$\displaystyle
P\,\psi_L \to \psi_R\quad$
et
$\displaystyle
\quad P\,\psi_R \to \psi_L
$
</p>

<div id="theo">

Une théorie bâtie sur un seul spineur de Weyl <b>viole nécessairement la parité</b>, puisque l'opération $P$ l'envoie sur un objet qui n'existe pas dans la théorie.

</div>

C'est le cas de l'interaction faible, et le neutrino s'accommode très bien d'un spineur gauche seul. Mais l'électromagnétisme et l'interaction forte respectent la parité&nbsp;: pour les décrire, il faut embarquer $\psi_L$ <b>et</b> $\psi_R$ dans un même objet. D'où les quatre composantes du spineur de Dirac, et l'opérateur de parité explicite

<p style="text-align:center;">
$\displaystyle
P \equiv \gamma^0 = \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}
$
</p>

qui échange bien les blocs haut et bas, comme nous venons de l'utiliser dans la redémonstration de l'équation de Dirac.

<div id="theo">

<b>Le décompte final</b>

<p style="text-align:center;">
$\displaystyle
4 \text{ composantes} = \underbrace{2}_{\text{spin}} \times \underbrace{2}_{\text{parité}}
$
</p>

</div>

<br>

### Bilan

<p style="text-align:center;">
$\displaystyle
\boldsymbol J = \tfrac{1}{2}\boldsymbol\sigma
\;\xrightarrow{\ [K^i,K^j] = -\mathrm{i}\epsilon^{ijk}J^k\ }\;
\boldsymbol K = \pm\tfrac{\mathrm{i}\boldsymbol\sigma}{2}
\;\xrightarrow{\ \text{deux signes}\ }\;
\psi_L\ (\tfrac{1}{2}, 0)\ \text{ et }\ \psi_R\ (0, \tfrac{1}{2})
$
</p>

<p style="text-align:center;">
$\displaystyle
u(p_0) = \sqrt m \begin{pmatrix} \xi \\ \xi\end{pmatrix}
\;\xrightarrow{\ \text{boost}\ }\;
u(p) = \begin{pmatrix} \sqrt{p\cdot\sigma}\,\xi \\ \sqrt{p\cdot\bar\sigma}\,\xi \end{pmatrix}
$
</p>

<p style="text-align:center;">
$\displaystyle
(\gamma^0 - 1)u(p_0) = 0
\;\xrightarrow{\ \text{boost}\ }\;
(\not{\!\!p} - m)u(p) = 0
\;\xrightarrow{\ P : L \leftrightarrow R\ }\;
4 \text{ composantes}
$
</p>

### Pièges

<ul>
<li>Un spineur n'est pas un vecteur à quatre composantes&nbsp;: il ne se transforme pas avec les matrices de Lorentz habituelles, mais avec les $D_{L,R}$, exponentielles de matrices de Pauli. En particulier, une rotation de $2\pi$ le multiplie par $-1$.</li>
<li>Les rotations agissent <b>identiquement</b> sur $\psi_L$ et $\psi_R$&nbsp;; seuls les <b>boosts</b> les distinguent. C'est pour cela qu'au repos les deux chiralités sont indiscernables, et c'est exactement ce qui rend la redémonstration de l'équation de Dirac possible.</li>
<li>$\boldsymbol K = \pm\frac{\mathrm{i}\boldsymbol\sigma}{2}$ n'est pas hermitien&nbsp;: les boosts de spineurs ne sont pas unitaires. Aucun drame (les représentations de dimension finie d'un groupe non compact ne peuvent pas être unitaires), mais c'est la raison pour laquelle $u^\dagger u$ n'est pas invariant alors que $\bar u u$ l'est.</li>
<li>Ne pas confondre chiralité et hélicité&nbsp;: «&nbsp;gauche&nbsp;» désigne ici la représentation $(\frac{1}{2}, 0)$, une étiquette de <b>transformation</b>, et non la projection du spin sur l'impulsion.</li>
<li>Les demi-rapidités des $D_{L,R}$ s'additionnent en rapidité entière dans le produit $D_L D_R^{-1}$&nbsp;: c'est ce qui fait apparaître $E_{\boldsymbol p}$ et non $\sqrt{E_{\boldsymbol p}}$ dans $\not{\!\!p}$.</li>
<li>La parité est le vrai patron du chapitre&nbsp;: retenir «&nbsp;quatre composantes $=$ spin ($\times 2$) $\times$ parité ($\times 2$)&nbsp;».</li>
</ul>

<br>



{{%notice note%}}
Et maintenant&nbsp;? Nous possédons l'équation, ses solutions et la nature exacte de l'objet sur lequel elle porte. Mais tout cela reste une théorie à <b>une particule</b>, et nous savons depuis le premier chapitre que cet échafaudage est intenable en régime relativiste&nbsp;: l'énergie disponible permet toujours de créer des paires, et les états d'énergie négative n'ont pas été guéris, seulement contournés.<br><br>
La partie suivante franchit le pas&nbsp;: elle <b>quantifie</b> le champ de Dirac, ce qui exigera de remplacer les commutateurs par des <b>anticommutateurs</b> sous peine d'univers instable, et livre au passage le principe de Pauli. Puis, en exigeant l'invariance de jauge locale, elle fabrique l'<b>électrodynamique quantique</b> et ses premières sections efficaces calculables.
{{%/notice%}}


<br>

<div style="overflow-x: auto;text-align:center;">
<table>
  <tr>
    <th style="text-align:center;"><a href="../">Sommaire</a></th><td><a href="../tqc12">Chapitre précédent</a></td><td><a href="../tqc14">Chapitre suivant</a></td>
    </tr>
</table>
</div>
