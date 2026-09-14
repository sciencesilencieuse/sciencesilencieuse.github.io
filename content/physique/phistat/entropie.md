+++
title = "Entropie"
date = 2021-03-06T14:20:50+01:00
weight = 7
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

ul
{
margin-top:-0.5em;
}
</style>


# Entropie et information

Qu'est-ce que l'entropie&nbsp;?

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube rtgSC2Bw70c>}}
</div>


{{%notice note%}}

PW Atkins a écrit un livre merveilleux sur l'entropie&nbsp;: *The Second Law*.<br>
Il fait partie de la vieille collection [*Scientific American Library*](https://en.wikipedia.org/wiki/Scientific_American_Library) qui est bourrée de pépites.

{{%/notice%}}


L'**entropie** est une notion passionnante qui ramifie dans différents champs. 


<div id="def">

En théorie de l'information, Claude **Shannon** a appelé entropie la mesure de la quantité d'**information** contenu dans un message. Ramenée à la physique, l'entropie de Shannon mesure le nombre de questions binaires (dont la réponse est oui ou non) auxquelles il faudrait répondre pour spécifier le microétat du système pour un macroétat donné.

</div>

Cherchant une réponse au paradoxe de Maxwell, Leó Szilárd a formulé en 1929 une équivalence entre l'énergie et l'information grâce à une version simplifiée du **démon de Maxwell**. Il en a déduit l'énergie nécessaire au démon pour faire varier l'information d'un bit. **Landauer** en a fait un principe (en 1961) qui stipule que l'énergie dissipée lors de l'effacement d'un bit d'information vaut au minimum $k_BT \ln(2)$.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube XY-mbr-aAZE>}}
</div>

<br>

<div id="preuve">

<b>Lien entre l'entropie de Shannon et l'entropie thermodynamique</b> dans le cas d'un gaz parfait à l'équilibre (composé de $N$ particules) dans une enceinte de volume $V$ à la température $T$&nbsp;:<br><br>
L'information sur une particule consiste à connaître sa position et sa vitesse. L'additivité de l'entropie permet de distinguer ces deux contributions.<br><br>
Appelons $H_p(V)$ l'entropie de Shannon liée la position d'une particule du gaz.<br>
Après avoir doublé le volume de l'enceinte, on peut revenir à la situtation de départ (en terme d'information) en posant à la particule la question binaire  "es-tu dans l'enceinte de gauche ou celle de droite ?". <br>
On a par conséquent $H_p(2V) = H_p(V) + 1$ (il faut 1 bit d'information en plus). La seule fonction ayant cette propriété est le logarithme en base deux&nbsp;: $\log_2$. D'où $H_p(V) = \log_2(V)+cste$.<br><br>
À l'équilibre thermique, l'énergie cinétique pour chacun des degrés de liberté possibles (3 pour une particule monatomique, et 5 ou 7 pour une particule diatomique en ajoutant les rotations et vibrations) est proportionnelle à la température. Mais notre information porte sur la vitesse. La vitesse pour chaque réservoir d'énergie cinétique est donc proportionnelle à la racine carrée de la température. En quadruplant la température, on double donc la vitesse dans chacun des réservoirs. Il faudra alors autant de questions binaires que de réservoirs (3 pour une particule monoatomique) pour revenir à la situation informationnelle de départ.<br>
En appelant $H_v(T)$ l'entropie de Shannon liée à la vitesse d'une particule, on a&nbsp;: $H_v(4T) = H_v(T)+3$. La fonction ayant cette propriété est $3\log_4$ ou $\frac{3}{2}\log_2$.<br>
D'où $\displaystyle H_v(T)=\frac{3}{2}\log_2(T) + cste$.<br><br>
L'entropie de Shannon totale de la particule vaut donc $\displaystyle  H(V,T)=H_v(V)+H_p(T) = \frac{3}{2}\log_2(T)+\log_2(V)+cste$<br><br>
Et pour $N$ particules&nbsp;? Si les particules sont supposées indiscernables, multiplier $H$ par $N$ nous ferait tomber dans le paradoxe de Gibbs. Comme toutes les permutations de particules amènent à la même quantité d'infomation, il faut retirer $\log_2(N!)$ à l'entropie obtenue&nbsp;: $\displaystyle H_{gaz}(V,T) = N H(V,T) - \log_2(N!) \approx \frac{3N}{2}\log_2(T) + N\log_2(V) + Ncste - N\log_2(N) + N$.<br><br>
En utilisant le principe de Landauer, on peut convertir ces bits en énergie par unité de température en multipliant par $k_B \ln_2$. On passe alors de $H$ à $S$, l'entropie thermodynamique&nbsp;:<br>
$\displaystyle  S(V,T) = \frac{3Nk_B}{2}\ln(T) + Nk_B\ln(V) - Nk_B\ln(N)+CNk_B$ (où $C$ est une constante).<br><br>
Source : [vidéo de Lê Nguyên Hoang sur l'entropie](https://www.youtube.com/watch?v=H71WR50stm4)

</div>

<br>

## Information et thermodynamique dans la physique théorique contemporaine

On observe depuis quelques temps une convergence de la recherche en informatique et en physique théorique sur les questions de l'**entropie** et de la **complexité**.

John Wheeler est un des premiers à militer pour qu'on s'oriente vers [une explication de l'univers basée sur son contenu en information](https://philpapers.org/archive/WHEIPQ.pdf), le bit élémentaire, ce qu'il résume par la formule "**it from bit**" (Wheeler a un certain talent pour les formules, en plus du reste...).

Le fait qu'un trou noir ait une entropie proportionnelle à son aire et non à sa masse, comme l'ont montré Stephen Hawking et Jacob Bekenstein, semble donner corps à cette idée que le bit est l'atome de notre compréhension de l'univers. Tout horizon se présenterait en effet comme une sorte d'écran sur lequel s'écrit l'information qu'il contient. C'est le **principe holographique**.

<br>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube RIqVnFtOSr4>}}
</div>

<br>

Et plus récemment, Leonard Suskind a jeté un nouveau pont entre physique et information en [liant le volume d'un trou noir et sa complexité](https://www.quantamagazine.org/in-new-paradox-black-holes-appear-to-evade-heat-death-20230606/).




