+++
title = "Ecart-type expérimental"
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
</style>




# Écart-type expérimental

Définition de l'écart-type expérimental, ou écart-type non biaisé, ou écart-type échantillon :

<div id="def">

$$S_{n-1}=\sqrt{\frac{1}{n-1}\sum_{i=1}^n\left(X_i-\overline{X}\right)^2}$$

</div>


Pourquoi "non biaisé"&nbsp;? Et pourquoi passer de "$n$" à  "$n-1$"&nbsp;?

Notre problème est qu'on ne connaît plus la valeur vraie de la moyenne $\mu$ mais seulement son estimation $m=\frac{1}{n}\sum_{i=1}^n x_i$.

Et en substituant $m$ à $\mu$ dans la variance, on biaise son espérance...<br>
En effet :
<div id="grosseformule">
$$
\begin{aligned}
E\left(\frac{1}{n}\sum_{i=1}^n (x_i-m)^2\right) &= E \left( \frac{1}{n}\sum_{i=1}^n x_i^2 - m^2 \right) &&\text{car } -2 \frac{1}{n}\sum_{i=1}^n x_i\times m = -2  m^2\\
& = \frac{1}{n}\sum_{i=1}^n E(x_i^2)-E(m^2)\\
& = E(x^2)-E(m^2) &&\text{car }E(x_i)=E(x)\text{ ne dépend pas de }i\\
&= \left(V(x)+E(x)^2\right)-\left(V(m)+E(m)^2\right)&&\text{car }V(x)=E(x^2)-E(x)^2\\
&= \left(V(x)+E(x)^2\right)-\left(\frac{1}{n}V(x)+E(x)^2\right)&&\text{car }V(m)=\frac{1}{n}V(x)\\
&= \frac{n-1}{n}V(x)
\end{aligned}
$$
</div>

Par conséquent, on multiplie par $\frac{n}{n-1}$ pour se débarrasser du biais...

<br>


{{< youtube-plus id="bEDXykqj6o4" ratio="16x9" width="800px" rounded=true shadow=true >}}

