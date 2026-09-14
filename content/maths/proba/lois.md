+++
title = "Lois et variables aléatoires"
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
  /* 1. Rétablir la déclaration que votre reset a écrasée */
details > summary:first-of-type {
  display: list-item;     /* remet le triangle + l’accessibilité */
  cursor: pointer;        /* optionnel : feedback visuel */
}

/* 2. Si vous aviez aussi supprimé le list-style */
details > summary:first-of-type {
  list-style: disclosure-closed inside;
}
details[open] > summary:first-of-type {
  list-style-type: disclosure-open;
}
</style>


# Lois et variables aléatoires


## Loi Binomiale

D'une épreuve de Bernoulli à la loi binomiale :


{{< youtube-plus id="zkfa9uAy1yM" ratio="16x9" width="800px" rounded=true shadow=true >}}


<br>

Le programme ci-dessous permet de déterminer l'intervalle de fluctuation pour un seuil donné&nbsp;:

{{< runpython lang="python" mode="toggle" default="code" width="800">}}
from fractions import Fraction

def binom(n, k):
    if k > n - k:  
        k = n - k
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) // i
    return result

def loibinom(n, p, k):
    assert 0 <= p <= 1, "La probabilité p doit être comprise entre 0 et 1."
    assert 0 <= k <= n, "k doit être compris entre 0 et n."
    return p**k * (1-p)**(n-k) * binom(n, k)
  
def bino_repart(n, p, k):
    F = 0
    for i in range(k + 1):
        F += loibinom(n, p, i)
    return F

def intervalle(n, p, seuil=0.05):
    F_old = 0
    borne_inf = seuil / 2
    test_inf = True
    borne_sup = 1 - seuil / 2
    test_sup = True
    k = 0    
    ia, ib = 0, n    
    while test_sup and k <= n:
        F_new = F_old + loibinom(n, p, k)        
        if test_inf and F_new > borne_inf:
            ia = k
            test_inf = False            
        if test_sup and F_new >= borne_sup:
            ib = k
            test_sup = False      
        k += 1
        F_old = F_new       
    return (ia, ib)

n = int(input("Taille de la population ? "))
while True:
    try:
        # On récupère l'entrée en nettoyant la virgule et le symbole % au cas où
        saisie = input("Proportion ? ").replace(",", ".").replace("%", "")        
        p = float(Fraction(saisie))        
        # Si supérieur à 1, on considère que c'est un pourcentage
        if p > 1:
            p /= 100           
        if 0 < p < 1:
            break      
        print("La probabilité doit être strictement comprise entre 0 et 1 (ou 0 et 100 %).")     
    except (ValueError, ZeroDivisionError):
        print("Veuillez entrer une valeur numérique, une fraction ou un pourcentage valide.")

seuil = 0.05

rep = input("Voulez-vous un autre seuil de risque alpha que 5 % (correspondant à un intervalle de probabilité de 95%) ? (taper O ou N) : \n").strip().lower()

while rep not in ("o", "n"):
    rep = input("Veuillez taper O pour Oui, ou N pour Non : \n").strip().lower()

if rep == "o":
    while True:
        try:
            saisie = input("Quel seuil de risque alpha souhaitez-vous ? ").replace(",", ".").replace("%", "")
            seuil = float(Fraction(saisie))   
            if seuil > 1:
                seuil = seuil / 100
            if 0 < seuil < 1:
                break
            else:
                print("Le seuil doit être strictement compris entre 0 et 1 (ou 0 et 100 %).")
        except ValueError:
            print("Veuillez entrer une valeur numérique valide.")

proba_intervalle = 1 - seuil
ia, ib = intervalle(n, p, seuil)

print(f"\nL'intervalle de fluctuation au seuil de {seuil * 100:.1f} % (probabilité de {proba_intervalle * 100:.1f} %) pour une proportion p = {p * 100:.1f} % dans un échantillon de taille {n} est :\n[{(ia / n) * 100:.1f} % ; {(ib / n) * 100:.1f} %]\n(soit entre {ia} et {ib} individus)")
{{< /runpython >}}

On pourra vérifier l'intervalle graphiquement avec l'applet geogebra suivant.

<div style="max-width: 800px; margin: 0 auto;">
  <iframe
    src="https://www.geogebra.org/material/iframe/id/w8q2tjvn/width/800/height/700/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false"
    title="Intervalle de fluctuation et loi binomiale"
    style="width: 100%; aspect-ratio: 8 / 7; border: 0;"
    scrolling="no">
  </iframe>
</div>

Ça permet de répondre à des questions du type :

> Sur 40 lancers d’un dé à 6 faces 13 ont donné 6. Le dé est-il pipé&nbsp;?


<details>
<summary id="correcsum">
Correction (cliquer pour afficher)</summary>
<blockquote id="correc">
L'intervalle de fluctuation à 95 % $[a ; b]$ pour le nombre de succès est $I=[\frac{2}{40} ; \frac{12}{40}] = [0,05 ; 0,30]$ .<br>
La fréquence observée dans l'échantillon est $f = \frac{13}{40} = 0,325$. On constate que $f \notin I$ (ou que $13 > 12$).<br>
La fréquence observée étant en dehors de l'intervalle de fluctuation associé à une probabilité de 95&nbsp;%, on conclut que le dé est pipé avec un risque d'erreur de 5&nbsp;%.
</blockquote>
</details>

## Densité de probabilités

Une énigme permettant d'évoquer les densités de probabilité&nbsp;:

> Quelle est la distance moyenne entre deux points pris au hasard sur un segment&nbsp;?


{{< youtube-plus id="XLYXqpl9Z0s" ratio="16x9" width="800px" rounded=true shadow=true >}}

<br>

On peut vérifier la solution statistiquement avec un petit programme simplissime&nbsp;:


{{< runpython lang="python" mode="toggle" default="code" height="300" width="800" >}}
from random import random

N = 500000
d_moy = 0

for i in range(N):
    A = random()
    B = random()
    d = abs(A-B)
    d_moy += d

d_moy /= N

print("Distance moyenne : {}".format(d_moy))
{{< /runpython >}}


## Loi normale

La célèbre gaussienne (ou courbe en cloche)&nbsp;:


{{< youtube-plus id="H_r7iDhANl0" ratio="16x9" width="800px" rounded=true shadow=true >}}

<br>

On peut à nouveau tirer profit de l'applet géogebra qui précède pour obtenir des intervalles de fluctuation.








