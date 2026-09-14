+++
title = "Moyennes"
date = 2021-03-06T14:20:50+01:00
weight = 1
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
</style>




# Les différentes moyennes


{{< youtube-plus id="v5NTpB6DGbQ" ratio="16x9" width="800px" rounded=true shadow=true >}}

<br>

Dans la vidéo, on a défini la **moyenne généralisée**&nbsp;:

<div id="def">
<div id="grosseformule">


$$
M_p = \left(a_1^p + a_2 \dotsm + a_n^p\right)^\frac1p
$$

</div>
</div>

Et on a vu que&nbsp;:
<ul>
<li>$M_1 = MA$ moyenne arithmétique</li>
<li>$M_{-1} = MH$ moyenne harmonique</li>
<li>$M_{2} = MQ$ moyenne quadratique</li>
<li>$M_{0} = MG$ moyenne géométrique</li>
</ul>

Prouvons le dernier point, un peu plus délicat&nbsp;

<div id="theo">
<div id="grosseformule">


$$
M_0 = \lim_{p \to 0} M_p =  \sqrt[n]{a_1 \cdot a_2 \dotsm a_n} = MG
$$

</div>
</div>

<br>

<div id="preuve">

On passe au logarithme&nbsp;:

<div id="grosseformule">

$$\ln(M_p) = \frac{1}{p} \ln\left( \frac{1}{n} \sum_{i=1}^n a_i^p \right)$$

</div>

On introduit la fonction $f$ définie sur $\mathbb{R}$&nbsp;:

$$f(p) = \ln\left( \frac{1}{n} \sum_{i=1}^n a_i^p \right)$$

Regardons la valeur de cette fonction en $p = 0$ (sachant que $a_i^0 = 1$) :

<div id="grosseformule">

$$f(0) = \ln\left( \frac{1}{n} \sum_{i=1}^n 1 \right) = \ln\left( \frac{1}{n} \cdot n \right) = \ln(1) = 0$$

</div>

Grâce à ce résultat, on peut réécrire $\ln(M_p)$ sous la forme d'un taux d'accroissement :

$$\ln(M_p) = \frac{f(p) - f(0)}{p - 0}$$

La limite de $\ln(M_p)$ lorsque $p \to 0$ est donc exactement la définition du nombre dérivé $f'(0)$.

Or on sait que $\left(\ln(u(p)\right)'=\frac{u'(p)}{u(p)}$ et pour dériver $a_i^p$ par rapport à $p$, on se rappelle que $a_i^p = e^{p \ln(a_i)}\Rightarrow \left(a_i^p\right)' = \ln(a_i) a_i^p$.<br>
On obtient ainsi :

$$f'(p) = \frac{\frac{1}{n} \sum_{i=1}^n \ln(a_i) a_i^p}{\frac{1}{n} \sum_{i=1}^n a_i^p}$$

Évaluons en $p=0$&nbsp;:

<div id="grosseformule">

$$f'(0) = \frac{\frac{1}{n} \sum_{i=1}^n \ln(a_i) \cdot 1}{\frac{1}{n} \sum_{i=1}^n 1} = \frac{\frac{1}{n} \sum_{i=1}^n \ln(a_i)}{1} = \frac{1}{n} \sum_{i=1}^n \ln(a_i)$$

</div>

Et en utilisant les propriétés des logarithmes $\ln(a)+\ln(b)=\ln(a\cdot b)$ et $c\ln(a) = \ln(a^c)$, on peut réécrire&nbsp;:

<div id="grosseformule">

$$f'(0) = \frac{1}{n} \ln\left( \prod_{i=1}^n a_i \right) = \ln \left( \prod_{i=1}^n a_i \right)^{\\!\\!1/n} $$

</div>

La fonction exponentielle étant continue sur $\mathbb{R}$, on peut passer la limite à l'intérieur de l'exponentielle&nbsp;:

<div id="grosseformule">

$$\lim_{p \to 0} M_p = \lim_{p \to 0} \exp\left(\ln(M_p)\right)  = \exp\left( \lim_{p \to 0} \ln(M_p)\right) =\exp\left[ \ln\left( \left( \prod_{i=1}^n a_i \right)^{\\!\\!1/n} \right) \right] = \left( \prod_{i=1}^n a_i \right)^{\\!\\! 1/n} = \sqrt[n]{a_1 \cdot a_2 \dotsm a_n}$$

</div>

On retrouve la définition de la moyenne géométrique.<br>C'est ce qui justifie de poser par prolongement par continuité $M_0 = \sqrt[n]{a_1 \cdot a_2 \dotsm a_n}$.

</div>

## Petite énigme avec la moyenne harmonique

Vous courez deux tours sur une piste d'athlétisme. Supposons que votre vitesse moyenne sur le premier tour soit $v_1$. À quelle vitesse moyenne $v_2$ devrez-vous courir le deuxième tour de piste pour que la vitesse moyenne sur l'ensemble des deux tours soit le double de la vitesse moyenne sur le premier tour ($2v_1$)&nbsp;?

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/piste.jpeg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

En raisonnant sur la moyenne arithmétique, on a un problème&nbsp;:<br>
si $v_{tot} = \frac{v_{1}+v_{2}}{2}$, alors $v_{tot} = 2 v_{1}$ entraîne $v_2=3v_1$.<br>
Prenons un exemple pour constater que ça cloche&nbsp;: si l'athlète fait un tour de piste en $\pu{60 s}$ ($v_1 = \pu{6,7 m\*s-1}$), alors il devra faire le second en $\pu{20 s}$ ($v_2=3v_1 = \pu{20 m\*s-1}$). Que vaut la vitesse moyenne totale&nbsp;? $v_{tot}=\frac{800}{80} = \pu{10 m*s-1}\neq 2v_1$. On ne peut pas utiliser la moyenne arithmétique pour des vitesses lorsque la distance est fixe&nbsp;!

{{%notice note%}}
Il n'y aurait par contre aucun problème à utiliser la moyenne arithmétique des vitesses pour des durées identiques&nbsp;!
{{%/notice%}}

Montrons que la moyenne harmonique donne, elle, un résultat cohérent&nbsp;:

$$v_{tot} = \frac{2}{\frac{1}{v_1}+\frac{1}{v_2}} = 2v_1$$

$$\Rightarrow \frac{2}{v_2}=0$$

Cela donne l'impression que quelque chose est encore de travers, mais non, c'est la bonne réponse&nbsp;!<br>
En effet, le problème est impossible. La seule solution est d'avoir une vitesse $v_2$ infinie&nbsp;: l'athlète devra parcourir son deuxième tour en exactement $\pu{0 s}$...<br>
On aurait plus simplement pu s'en rendre compte en écrivant que $v_{tot} = \frac{2d}{\Delta t_1 + \Delta t_2} = 2 v_1 = 2\frac{d}{\Delta t_1} = \frac{2d}{\Delta t_1}$ qui impose $\Delta t_2 = 0$. Mais au moins, la moyenne harmonique ne nous a pas trahi.




## Estimation de Fermi et moyennes

Les estimations de Fermi sont des calculs de coin de table visant à trouver un ordre de grandeur. Le physicien italien Enrico Fermi brillait dans l'exercice et un de ses faits d'armes légendaires est d'avoir estimé l'énergie de l'explosion du premier essai atomique de l'histoire en mesurant la distance à laquelle furent emportés des petits bouts de papiers qu'il lâcha dans le souffle.

Lorsqu'on fait ce type de calcul, on est amené à estimer plein de valeurs. L'idée est alors d'encadrer grossièrement par différents ordres de grandeurs (un ou deux suivant notre méconnaissance) puis de prendre la moyenne. Mais quelle moyenne&nbsp;?

Lorsqu'on estime, l'erreur est plus naturellement relative qu'absolue. On estime à un facteur près. Si on suppose par exemple que le nombre d'étoiles visibles dans le ciel est d'environ 1000, cela a plus de sens d'encadrer entre 200 (5 fois moins) et 5000 (5 fois plus) qu'entre 200 (800 en moins) et 1800 (800 en plus) ou entre -3000 et 5000... Dit autrement, on a tendance à viser une position sur une échelle logarithmique plutôt que linéaire. C'est bien ça d'ailleurs, par définition, un ordre de grandeur&nbsp;: un barreau sur une échelle en logarithme décimal. Et comment se place-t-on entre deux graduations d'une telle échelle&nbsp;? Grâce à la moyenne géométrique pardi. 


### Exemple de calcul de Fermi

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:0;margin-top:0;">
<img src="/dinopisse.png" style="box-shadow:none;background:none;">
</div>


Cherchons à vérifier l'affirmation suivante&nbsp;:
> Toute l'eau sur Terre a été pissée par les dinosaures

<ul style="margin-bottom:0.5em;">
<li>Commençons par estimer le volume d'eau sur Terre.</li>
</ul>
Disons que les océans font $\pu{3 km}$ de profondeur en moyenne (entre $1$ et $10$ km). La Terre est une sphère d'environ $\pu{10000 km}$ de diamètre recouverte aux deux tiers par les océans. Ça représente un volume d'environ $2/3\times 4\pi \times \left(\frac{10^7}{2}\right)^2\times 3\times 10^3\approx \pu{6E17 m^3}$ d'eau.

Un estimation plus sérieuse donne un volume total d'eau sur Terre de 1,4 milliards de km<sup>3</sup>, soit $\pu{1,4e18 m^3}$. On est arrivé à moins d'un ordre de grandeur, c'est pas mal.

<ul style="margin-bottom:0.5em;">
<li>Voyons maintenant la quantité d'eau passée dans les dinosaures.</li>
</ul>
Estimation de la population de dinosaures&nbsp;: entre $1$ et $10$ dinos par km<sup>2</sup> de terres émergées semble raisonnable pour une espèce dominante. Ça fait environ $1/3\times 4\pi\times (10^7)^2 / 10^6 \times 3 \approx  10^9$ dinos à un moment donné. Disons que le dino moyen pèse entre $1$ et $100$ humains, soit $1$ tonne environ. En supposant une hydratation humaine, notre dino modèle boira entre $10$ et $100$ litres par jour, soit environ $\pu{30 L}$, ce qui représente en une année $10\,000 \text{ L}$ ou $\pu{10 m3}$. <br>
Or les dinosaures ont régné sur Terre très, très longtemps... Une ère de l'ordre de $100$ millions d'année. Ça représente donc en tout environ $(10\; \mathrm{m^3/dino/an})\times (10^9 \text{ dinos})\times (10^8 \text{ ans})\approx  10^{18} \;\mathrm{m^3}$. 

<ul style="margin-bottom:0.5em;">
<li>Conclusion&nbsp;:</li>
</ul>

Les dinos ont bu (et logiquement pissé) à peu de chose près toute l'eau sur Terre durant leur longue existence.<br>
Comme l'eau a une certaine tendance à s'homogénéiser, chaque verre devrait contenir une bonne proportion d'urine de dinosaure même si elle a été depuis un poil diluée par l'eau venue de l'espace[^2].

[^2]: L'apport d'eau par les météorites ne compense pas l'eau qui disparaît&nbsp;! Dans les hautes couches d'atmosphère, les UV peuvent dissocier les molécules d'eau en dihydrogène et dioxygène et le dihydrogène formé est si léger qu'il peut se retrouver avec une vitesse dépassant la vitesse de libération et ainsi s'enfuir de la Terre empêchant la molécule d'eau de se reformer un jour.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1.5em;margin-top:-1em;">
<img src="/eausurterre.png" style="box-shadow:none;background:none;">
</div>

<p style="text-align:center;width:700px;margin:auto;color:#777;">La plus grande sphère bleue représente toute l'eau sur Terre, la plus petite l'eau des rivières et des lacs et l'intermédiaire l'ensemble de l'eau douce (Credit: Howard Perlman, USGS&nbsp;; illustration du globe de Jack Cook, Woods Hole Oceanographic Institution). </p>



