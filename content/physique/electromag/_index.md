+++
title = "Électromagnétisme"
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

<h1 style="overflow-x:auto;">Électromagnétisme</h1>

## Rayonnement

> Source&nbsp;: Magnetism, Radiation, and Relativity
Supplementary notes for a calculus-based introductory physics course
Daniel V. Schroeder [🌐](https://physics.weber.edu/schroeder/mrr/MRRnotes.pdf)

Formule de Larmor et Diffusion Rayleigh sans douleur jusqu'au bleu du ciel et au rougeoiement du soleil couchant. 

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube jqwOif-TwrM>}}
</div>

<br>

Trois animations montrant le champ rayonné (densité et lignes) pour diverses accélérations (rebond, arrêt brutal, osccillation).

<video width="640" controls poster="/posterem1.png" style="display:block;max-width:100%;position:relative;margin-left:auto;margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/allerretour.mp4" type="video/mp4">
</video>

<br>

<video width="640" poster="/posterem2.png" controls style="display:block;max-width:100%;position:relative;margin-left:auto;margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/gostop.mp4" type="video/mp4">
</video>

<br>

<video width="640" controls loop poster="/posterem3.png" style="display:block;max-width:100%;position:relative;margin-left:auto;margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="/oscill2.mp4" type="video/mp4">
</video>

<br>

{{< rawhtml >}}
<details>
<summary><a>▶︎&nbsp;Code Python pour cette dernière vidéo</a></summary>
<pre><code class="language-python">import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import fsolve
import os

x0 = 0.2

def beta_function(t):
    return np.array([0.,-x0*c*np.sin(np.pi*t),0]) 
def beta_dot_function(t):
    return np.array([0,-x0*c*np.pi*np.cos(np.pi*t),0])

c = 1

def r_0(t):
    return np.array([float(0.),float(x0*c/np.pi*np.cos(np.pi*t)),0]) 

def determinetprime(r,r_0,t):
    """
    r_0(t_prime) est la fonction donnant la position au cours du temps
    r est le point où on cherche la valeur du champ
    """
    def func(t_prime):
        return t - t_prime - np.linalg.norm(r - r_0(t_prime)) / c
    t_prime_initial_guess = t - 1
    t_prime_solution = fsolve(func, t_prime_initial_guess)
    return t_prime_solution[0]

def champ_vectorized(x_grid, y_grid, r_0_func, beta_function, beta_dot_function, t):
    q = 1
    E_field = np.zeros(x_grid.shape + (3,))  # Initialisation d'un tableau 3D pour le champ électrique
    for i in range(x_grid.shape[0]):
        for j in range(x_grid.shape[1]):
            r = np.array([x_grid[i, j], y_grid[i, j], 0])
            tprime = determinetprime(r, r_0_func, t)
            beta = beta_function(tprime)
            beta_dot = beta_dot_function(tprime)
            r0 = r_0_func(tprime)
            R = r - r0
            R_norm = np.linalg.norm(R)
            R_hat = R / R_norm
            gamma = 1 / np.sqrt(1 - np.dot(beta, beta))
            term1_numerator = R_hat - beta
            term1_denominator = gamma**2 * R_norm**2 * (1 - np.dot(R_hat, beta))**3
            term1 = term1_numerator / term1_denominator
            term2_numerator = np.cross(R_hat, np.cross(R_hat - beta, beta_dot))
            term2_denominator = c * R_norm * (1 - np.dot(R_hat, beta))**3
            term2 = term2_numerator / term2_denominator
            E = q * (term1 + term2)
            E_field[i, j, :] = E
    return E_field

def calculate_field_line_point(r0, beta, n_hat, t, t_prime):
    gamma = 1 / np.sqrt(1 - np.dot(beta, beta))  # Facteur de Lorentz
    if np.linalg.norm(beta) != 0:
        beta_hat = beta/np.linalg.norm(beta)
    else:
        beta_hat = np.array([0.0,0.0,0.0])
    term_inside_brackets = beta + ((1/gamma - 1) * np.dot(n_hat, beta_hat) * beta_hat + n_hat) / (gamma * (1 + np.dot(n_hat, beta)))
    return r0 + c * (t - t_prime) * term_inside_brackets

# Fonction pour tracer les lignes de champ à partir d'une position donnée à l'instant t
def plot_field_lines(r0_func, beta_func, t, num_lines=24, num_points=500, step=0.05):
    for i in range(num_lines):
        n_hat = np.array([np.cos(i/num_lines*2*np.pi),np.sin(i/num_lines*2*np.pi),0])
        line_points = []
        t_prime = t  # Initialisation de t' à la valeur de t pour le début de la ligne de champ
        for _ in range(num_points):
            r0 = r0_func(t_prime)
            beta = beta_func(t_prime)
            point = calculate_field_line_point(r0, beta, n_hat, t, t_prime)
            line_points.append(point)
            t_prime -= step  # Décrémentation de t' pour suivre la ligne de champ vers le passé

        line_points = np.array(line_points)
        plt.plot(line_points[:, 0], line_points[:, 1], 'r-')  # Trace la ligne en rouge

# Set up grid for field calculation
x_range = np.linspace(-12, 12, 1200)
y_range = np.linspace(-6, 6, 600)
x_grid, y_grid = np.meshgrid(x_range, y_range)

# Créer le répertoire pour les images si nécessaire
output_dir = "animation"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Définir la plage de temps et le nombre d'images
time_values = np.linspace(0, 2, num=51)  # 401 images pour t de 0 à 4
for i, t in enumerate(time_values):
    plt.figure(figsize=(15, 10), dpi=150)
    plot_field_lines(r_0, beta_function, t)
    
    E_field_grid = champ_vectorized(x_grid, y_grid, r_0, beta_function, beta_dot_function, t)
    E_field_magnitude = np.linalg.norm(E_field_grid, axis=2)
    
    plt.imshow(np.log10(E_field_magnitude), extent=(x_range.min(), x_range.max(), y_range.min(), y_range.max()), cmap='Spectral_r', aspect='equal')
    plt.axis('off')
    
    # Construire le nom de fichier avec un remplissage de zéros
    filename = f"image{str(i).zfill(4)}.png"
    filepath = os.path.join(output_dir, filename)
    
    # Sauvegarder l'image
    plt.savefig(filepath, bbox_inches='tight', pad_inches=0, transparent=True)
    
    # Fermer la figure pour libérer de la mémoire
    plt.close()
</code></pre>

Ce code a été obtenu à partir de <a href="https://www.semanticscholar.org/reader/a191a033a804675960f62d8554ab8475b2d35501">cet article</a> et de <a href="https://physics.stackexchange.com/questions/296904/electric-field-associated-with-moving-charge">cette page de forum</a>.

</details>
{{< /rawhtml >}}

<br>

## [Arcs électriques](./arcs)

Où on essaye de retrouver l'ordre de grandeur de la valeur du champ électrique qui rend l'air conducteur.


