+++
title = "Monte Carlo"
date = 2021-03-06T14:20:50+01:00
weight = 2
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
</style>




# Monte Carlo

Si l'on cherche à calculer une quantité déterministe (comme la valeur d'une intégrale complexe ou l'espérance d'une variable aléatoire), on peut reformuler le problème sous la forme de l'espérance mathématique d'une fonction $f(X)$ d'une variable aléatoire $X$.
En générant un très grand nombre $N$ de réalisations indépendantes et identiquement distribuées $(x_1, x_2, \dots, x_N)$ de la variable $X$, la moyenne empirique converge presque sûrement vers la valeur théorique recherchée grâce à la **Loi des Grands Nombres**&nbsp;:
$$\lim_{N \to \infty} \frac{1}{N} \sum_{i=1}^N f(x_i) = \mathbb{E}[f(X)]$$


{{< youtube-plus id="t1X1Agp1CWA" ratio="16x9" width="800px" rounded=true shadow=true >}}


Dans la deuxième partie de la vidéo, on cherche à répondre à la grande question suivante&nbsp;: comment s'assurer d'avoir suffisamment d'échantillons pour obtenir des statistiques fiables&nbsp;? Ou plus prosaïquement&nbsp;: à partir de combien est-ce suffisant&nbsp;? 

Grâce au **Théorème Central Limite**, on sait que la distribution de la moyenne empirique $\bar{X}_N = \frac{1}{N} \sum f(x_i)$ se répartit selon une courbe en cloche autour de la cible $\mathbb{E}[f(X)]$. On va donc pouvoir quantifier les fluctuations autour de la cible. On construit pour cela un estimateur à partir de l'**inégalité de Bienaymé-Tchebychev**.

## Monte Carlo pour l'estimation d'incertitudes-types en science expérimentale

La méthode de Monte Carlo permet d'obtenir empiriquement une incertitude-type composée (sans en passer par une formule de propagation.

Prenons l'exemple de la détermination de l'incertitude-type sur la concentration d'une solution obtenue par un titrage.<br>
Supposons que la concentration mystère $C_A$ soit donnée par la formule&nbsp;: $C_A = C_B\times\frac{V_E}{V_A}$

<ul>
<li>Volume $V_A$&nbsp;: il est mesuré à l'aide d'une pipette jaugée de $\pu{10,000 mL}$ de classe A. Le fabricant indique une tolérance $a = 0,020 \text{ mL}$. On considère que la distribution des erreurs suit une loi uniforme sur l'intervalle $[V_A - a \, ; \, V_A + a]$. L'incertitude-type associée est donc :

$$\mathrm{u}(V_A) = \frac{a}{\sqrt{3}} \approx 0{,}012 \text{ mL}$$

</li>
<li>Volume à l'équivalence $V_E$&nbsp;: lu sur une burette graduée de $\pu{25 mL}$, il est de $\pu{12,50 mL}$. Compte tenu de la tolérance de la burette et des erreurs de lecture (double lecture du zéro et de la graduation), l'incertitude-type globale estimée expérimentalement est $\mathrm{u}(V_E) = 0{,}05 \text{ mL}$.</li>
<li>Concentration $C_B$&nbsp;: la solution titrante a une concentration de $C_B = \pu{1,00e-2mol*L-1}$ avec une incertitude-type $\mathrm{u}(C_B) = \pu{5e-5 mol*L-1}$.</li>
</ul>

> Écrire le résultat de $C_A$ (avec son incertitude-type).

On obtient $C_A=\pu{1,250e-2 mol*L-1}$.

La formule de propagation des incertitudes donne alors&nbsp;:

<div id="grosseformule">

$$
\begin{aligned}
\mathrm{u}(C_A) &= C_A\cdot \sqrt{\left(\frac{\mathrm{u}(V_A) }{V_A}\right)^2+\left(\frac{\mathrm{u}(V_E) }{V_E}\right)^2+\left(\frac{\mathrm{u}(C_B) }{C_B}\right)^2}\\\\
&=1,25\cdot 10^{-2}\sqrt{\left(\frac{0{,}0115}{10{,}00}\right)^2 + \left(\frac{0{,}05}{12{,}50}\right)^2 + \left(\frac{5\times 10^{-5}}{1{,}00\times 10^{-2}}\right)^2}\\\\
&\approx 8,131968\ldots \cdot 10^{-5}\\,  \pu{mol\*L-1} \\\\
&\approx 9 \cdot 10^{-5}\\,  \pu{mol*L-1}
\end{aligned}
$$

</div>

Finalement, en ne gardant qu'un seul chiffre significatif pour l'incertitude-type&nbsp;:

<div id="grosseformule" style="border:solid red 2px;width:fit-content;margin:auto;padding:0 10px; border-radius: 5px;">
$$C_A=(1,250 \pm 0,009)\cdot 10^{-2}\; \pu{mol*L-1}$$
</div>

Voyons maintenant comment obtenir la même chose avec le petit programme ci-dessous implémentant la méthode de Monte Carlo :


{{< runpython lang="python" mode="toggle" default="code" height="400" width="800" >}}
import random
import math

N = 100000 

# Liste pour stocker toutes les valeurs de CA simulées
liste_CA = []

# --- BOUCLE DE MONTE-CARLO ---
for i in range(N):
    # Tirage pour VA (loi uniforme entre 10.00 - a et 10.00 + a)
    a = 0.02
    VA = random.uniform(10.00 - a, 10.00 + a)
    
    # Tirage pour VE (loi normale : moyenne=12.50, ecart-type=0.05)
    VE = random.gauss(12.50, 0.05)
    
    # Tirage pour CB (loi normale : moyenne=1.00e-2, ecart-type=5e-5)
    CB = random.gauss(1.00e-2, 5e-5)
    
    # Calcul de CA pour cette simulation et ajout à la liste
    CA = CB * VE / VA
    liste_CA.append(CA)

# Calcul de la moyenne de CA
CA_moyen = sum(liste_CA) / N

# Calcul de l'incertitude-type (écart-type expérimental)
somme_carres = 0
for CA in liste_CA:
    somme_carres += (CA - CA_moyen) ** 2

u_CA = math.sqrt(somme_carres / (N - 1))

# Fonction d'écriture du résultat
def ecriture_resultat(valeur, incertitude):
    # Trouver l'ordre de grandeur initial de l'incertitude
    rang_u = math.floor(math.log10(incertitude))
    # On décale la virgule pour isoler le premier chiffre significatif (ex: 8.12)
    u_normalise = incertitude / (10**rang_u)
    # Arrondi par excès à l'entier supérieur (ex: math.ceil(8.12) -> 9)
    u_arrondi = math.ceil(u_normalise) * (10**rang_u)
    # Sécurité : recalculer l'exposant si l'arrondi change l'ordre de grandeur (ex: 0.095 -> 0.10)
    rang_u = math.floor(math.log10(u_arrondi))
    
    # Arrondir le résultat au même niveau de précision
    valeur_arrondie = round(valeur, -rang_u)
    
    # Déterminer l'exposant pour la notation scientifique (basé sur la valeur)
    rang_val = math.floor(math.log10(abs(valeur_arrondie)))
    
    # Normaliser les deux valeurs pour la notation scientifique
    val_norm = valeur_arrondie / (10**rang_val)
    u_norm = u_arrondi / (10**rang_val)
    
    # Calculer le nombre de décimales à afficher après la virgule
    decimales = rang_val - rang_u
    if decimales < 0:
        decimales = 0
        
    return f"({val_norm:.{decimales}f} +/- {u_norm:.{decimales}f}) x 10^{rang_val}"
    
# Affichage des résultats
print(f"Concentration moyenne CA : {CA_moyen} mol/L")
print(f"Incertitude-type u(CA)   : {u_CA} mol/L")
print("--------------------------------------------------")
print(f"CA = {ecriture_resultat(CA_moyen, u_CA)} mol/L")
{{< /runpython >}}
