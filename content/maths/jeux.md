+++
title = "Théorie des jeux"
date = 2021-03-06T14:20:50+01:00
weight = 7
chapter = false
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
</style>


# Un peu de théorie des jeux

<br>

{{%notice note%}}
Cette page est *très* inspirée du livre *Chases and Escapes The Mathematics of Pursuit and Evasion* de Paul Nahin.
{{%/notice%}}


<br>


## Attaque - Défense

Un petit problème mathématique qui fleure bon la Guerre Froide&nbsp;: 

> Deux bombardiers bleus sont en mission. L'un transporte une bombe H et l'autre des équipements pour brouiller les radars. Leur plan de vol est tel qu'un des deux bombardiers est mieux protégé par les mitrailleuses de l'autre. Pour éviter qu'un avion de chasse rouge abatte l'avion bleu transportant la bombe, que vaut-il mieux&nbsp;: le placer dans la position la mieux ou la moins bien protégée&nbsp;?

La réponse semble de prime abord évidente et pourtant...

Listons les stratégies possibles pour les Bleus et les Rouges&nbsp;:
- B1 : placer la bombe dans le bombardier le mieux protégé
- B2 : placer la bombe dans le bombardier le moins bien protégé
- R1 : attaquer le bombardier le mieux protégé
- R2 : attaquer le bombardier le moins bien protégé

![](/poursuitematrice.png?width=500px)
La matrice de gains ci-dessus peut s'interpréter ainsi&nbsp;: les chances de survie du bombardier le mieux protégé sont de 80% s'il est attaqué (et de 100% s'il ne l'est pas...) alors que le moins bien protégé n'a que 60% de chance de s'en sortir (et 100% si on le laisse tranquille).

On a imaginé ainsi un "**jeu**"  **à somme nulle** (les gains d'un joueur sont les pertes de l'autre). Dans la nomenclature de la théorie des jeux, il s'agit d'un jeu **injuste** puisque toutes les entrée sont positives $\Rightarrow$ bleu repart forcément "gagnant" (même si ça n'a pas vraiment de sens ici).

La stratégie optimale pour deux joueurs rationnels va consister à minimiser le "score" maximum que l'autre joueur peut faire en suivant ainsi un principe du moindre mal. En effet, chaque joueur sait que l'autre va chercher à maximiser ses gains et va donc s'évertuer à rendre cette maximisation la plus faible possible.

Si une stratégie unique permet d'arriver à cette fin, sans que le joueur soit jamais motivé à changer de stratégie lors d'un prochain tour, on dit qu'il joue une **stratégie pure**.

C'est le cas dans l'exemple suivant&nbsp;:

![](/poursuitematrice2.png?width=500px)

Bleu est incité à choisir la stratégie B1 pour maximiser ses gains minimums réalisables&nbsp;: dans le pire des cas, il recevra 5 alors qu'avec la stratégie B2, il recevrait au pire 3...<br>
Si Rouge joue sa première stratégie, il perd au pire 6 alors qu'avec la seconde, il perd au pire 5. Donc Rouge va joueur la seconde stratégie.

En résumé, Bleu choisi la ligne contenant le plus grand des gains minimums et Rouge choisit la colonne contenant le plus petit gain maximum possible. 

Le résultat de la partie est ici un gain de 5 pour Bleu.

Lorsque, comme dans cet exemple, le gain minimal sur la ligne comportant le plus grand minimum possible est égal au gain maximal sur la colonne contenant le plus petit maximum possible, on dit que le jeu est **stable**. Aucun des joueurs ne sera inciter à changer de stratégie. Le jeu possède alors un **point col** (ou point-selle en référence à une selle de cheval). On a en effet, un minimum local dans une direction et un maximum local dans l'autre.


<script src="https://cdn.plot.ly/plotly-3.1.0.min.js"></script>

<style>
  /* Conteneur centré, borné, et réactif */
  .plot-wrap{
    position: relative;
    width: 800px;
    max-width:100%;
    margin: 0 auto;
  }
  /* Le div Plotly occupe 100% du conteneur */
</style>

<div class="plot-wrap">
  <div id="monGraphique" style="width:100%; height:800px;"></div>
</div>

<script>
(async ()=>{
  const resp = await fetch('/selledecheval.json');
  const data = await resp.json();

  // Layout : pas de width/height figées, autosize activé
  const layout = { ...(data.layout || {}) };
  delete layout.width; delete layout.height;
  layout.autosize = true;

  // Config : responsive ICI (3e argument)
  const config = { ...(data.config || {}), responsive: true };

  const el = document.getElementById('monGraphique');
  await Plotly.newPlot(el, data.data, layout, config);

  // Robuste : resize aussi quand le conteneur change (iframe/Reveal, etc.)
  const wrap = document.querySelector('.plot-wrap');
  if ('ResizeObserver' in window){
    new ResizeObserver(()=>Plotly.Plots.resize(el)).observe(wrap);
  }
  // Sécurité : resize sur fenêtre
  window.addEventListener('resize', ()=>Plotly.Plots.resize(el), {passive:true});
})();
</script>


Changeons de matrice de gain&nbsp;:

![](/poursuitematrice3.png?width=500px)

Pour maximiser le gain mimal, Bleu choisit la stratégie B2 ($4>3$) alors que pour minimiser le gain maximal pour Bleu, Rouge choisit la stratégie R1 ($5<6$). On remarque que le plus grand gain minimal sur une rangée ($4$) est maintenant différent du plus petit gain maximal sur une colonne ($5$). La conséquence est que maintenant, chacun des deux joueurs est incité à changer sa stratégie. Si Rouge passe de la stratégie R1 à R2 par exemple, il réduit le gain de Bleu de $5$ à $4$ (en imaginant que Bleu ait bien choisi la stratégie B2). Mais alors, Bleu est tenté de passer de la stratégie B2 à B1 pour passer d'un gain de $4$ à un un gain de $6$. Et ainsi de suite... 

Jouer une stratégie pure est donc optimal pour aucun des joueurs. Le mieux qu'ils puissent faire est jouer une **stratégie mixte** composée d'un mélange aléatoire (pour que l'autre joueur ne puisse pas anticiper) des stratégies 1 et 2.

Ce fut l'un des tours de force de John von Neumann de démontrer en 1928 qu'il existe pour tout jeu à deux opposants à somme nulle une stratégie mixte optimale pour les deux joueurs telle qu'ils puissent espérer le même gain moyen $V$, $V$ étant le meilleur possible. C'est le **théorème du minimax**. 
 
 Débusquons cette stratégie optimale pour le dernier exemple. On va supposer que Bleu joue la stratégie B1 avec une probabilité $p$ et B2 avec donc une probabilité $1-p$. Et Rouge joue R1 avec la probabilité $q$ et R2 avec la probabilité $1-q$.
 
 Si bleu joue B1, il gagne $3q + 6(1-q)$. Et s'il joue B2, il gagne $5q+4(1-q)$. L'espérance de gain de Bleu est donc $V(p,q)=p[3q+6(1-q)]+(1-p)[5q+4(1-q)]=4+2p+q-4pq$.
 
 Du point de vue de Rouge, on obtient une espérance de gain valant $q[3p+5(1-p)]+(1-q)[6p+4(1-p)]=4+2p+q-4pq$. On obtient donc à nouveau $V(q,p)$. 
 
Tracer $V(p,q)$ fait apparaître une selle de cheval. La stratégie optimale pour Bleu et Rouge va donc consister à placer leurs stratégies sur le point col &nbsp;; le point minimax.
 
<div class="plot-wrap">
 <div id="monGraphique2"  style="width:100%; height:800px;"></div>
 </div>
 
<script>
  (async ()=>{
  const resp = await fetch('/selledecheval2.json');
  const data = await resp.json();

  // Layout : pas de width/height figées, autosize activé
  const layout = { ...(data.layout || {}) };
  delete layout.width; delete layout.height;
  layout.autosize = true;

  // Config : responsive ICI (3e argument)
  const config = { ...(data.config || {}), responsive: true };

  const el = document.getElementById('monGraphique2');
  await Plotly.newPlot(el, data.data, layout, config);

  // Robuste : resize aussi quand le conteneur change (iframe/Reveal, etc.)
  const wrap = document.querySelector('.plot-wrap');
  if ('ResizeObserver' in window){
    new ResizeObserver(()=>Plotly.Plots.resize(el)).observe(wrap);
  }
  // Sécurité : resize sur fenêtre
  window.addEventListener('resize', ()=>Plotly.Plots.resize(el), {passive:true});
})();
</script>
 
 Bleu veut choisir $p$ tel que $\displaystyle \frac{\partial V}{\partial q} = 0$. Cela donne $1-4p=0$ et donc $p=1/4$. La distribution de probabilité optimale pour Bleu est donc $(1/4\\,;3/4)$.
 
 Rouge veut choisir $q$ tel que $\displaystyle \frac{\partial V}{\partial p} = 0$. Cela donne $2-4q=0$ et donc $q=1/2$. La distribution de probabilité optimale pour Rouge est donc $(1/2\\,;1/2)$.
 
 Le gain pour les deux au point minimax est alors $V(p=1/4,q=1/2) = 4,5$.
 
 Revenons maintenant à notre problème de guerre froide.

![](/poursuitematrice.png?width=500px)

Il n'y a clairement pas de point col pour des stratégies pures puisque le plus grand minimum pour les lignes est $80$ alors que le plus petit maximum pour les colonnes est $100$. Il faut donc jouer des stratégies mixtes. 

Supposons, comme dans l'exemple précédent, que la stratégie mixte de Bleu soit $(p\\,;1-p)$ et que celle de rouge soit $(q\\,;1-q)$.

- Pour Bleu : $V(p,q)= p[80q+100(1-q)]+(1-p)[100q+60(1-q)]$
- Pour Rouge : $V(p,q)=q[80p+100(1-p)]+(1-q)[100p+60(1-p)]$

Dans les deux cas, $V(p,q)=60+40p+40q-60pq$. On obtient bien à nouveau une selle de cheval. Cherchons son point col.


<div class="plot-wrap">
 <div id="monGraphique3"  style="width:100%; height:800px;"></div>
 </div>
 
<script>
  (async ()=>{
  const resp = await fetch('/selledecheval3.json');
  const data = await resp.json();

  // Layout : pas de width/height figées, autosize activé
  const layout = { ...(data.layout || {}) };
  delete layout.width; delete layout.height;
  layout.autosize = true;

  // Config : responsive ICI (3e argument)
  const config = { ...(data.config || {}), responsive: true };

  const el = document.getElementById('monGraphique3');
  await Plotly.newPlot(el, data.data, layout, config);

  // Robuste : resize aussi quand le conteneur change (iframe/Reveal, etc.)
  const wrap = document.querySelector('.plot-wrap');
  if ('ResizeObserver' in window){
    new ResizeObserver(()=>Plotly.Plots.resize(el)).observe(wrap);
  }
  // Sécurité : resize sur fenêtre
  window.addEventListener('resize', ()=>Plotly.Plots.resize(el), {passive:true});
})();
</script>

Le point minimax est tel que $\displaystyle \frac{\partial V}{\partial p} = \frac{\partial V}{\partial q}  = 0$. Cela donne $40-60q=0$ et $40-60p=0$, d'où $p=q=2/3$. Les stratégies mixtes optimales pour Bleu et Rouge ont le même distribution de probabilités&nbsp;: $(2/3\\,;1/3)$.

Contrairement à l'intuition, Bleu doit donc placer la bombe dans l'avion le moins protégé dans 1/3 des cas. Et toujours dans 1/3 des cas, Rouge doit attaquer ce bombardier (le moins protégé).

La valeur du gain au point minimax vaut $\displaystyle V\left(\frac{1}{3},\frac{2}{3}\right)=60+40\left(\frac{2}{3}\right)+40\left(\frac{2}{3}\right)-60\left(\frac{2}{3}\right)\left(\frac{2}{3}\right)=\frac{260}{3}\approx 86,7$. Le porteur de la bombe va donc survivre avec une probabilité de $86,7\\%$ qui est supérieure aux $80\\%$ correspondant à la stratégie évidente, mais finalement naïve, de toujours placer la bombe dans le bombardier le mieux protégé.

Et que se passe-t-il si Bleu applique la stratégie mais pas Rouge&nbsp;?<br>
On a alors $\displaystyle V\left(\frac{1}{3},\frac{2}{3}\right) = 60+40\left(\frac{2}{3}\right)+40q-60\left(\frac{2}{3}\right)q=\frac{260}{3}+40q-40q=\frac{260}{3}$. Le résultat est indépendant de $q$&nbsp;! Quelle que soit la stratégie de Rouge, le gain est assuré par Bleu. Et à l'inverse, si Rouge applique la stratégie mais pas Bleu, on obtient à nouveau le même résultat, independant de $p$.





