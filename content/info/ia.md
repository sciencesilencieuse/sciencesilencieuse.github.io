+++
title = "IA"
date = 2021-03-06T14:20:50+01:00
weight = 3
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



# Intelligence Artificielle

## Qu'est-ce que l'intelligence&nbsp;?

Avant de parler d'intelligence artificielle, il convient de s'interroger sur le terme **intelligence**.

<br>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube ck4RGeoHFko >}}
</div>

<br>

Processus qui permettent d'apprendre, de comprendre ou de s'adapter à des situations nouvelles&nbsp;? Faculté de modifier son environnement pour l'adapter à ses besoins&nbsp;? Capacité à traiter les informations pour atteindre ses objectifs&nbsp;?<br>La définition de l'intelligence ne fait pas consensus parmi les scientifiques, mais l'intelligence artificielle semble cocher aujourd'hui toutes les cases.

<br>

## Un cerveau pas si rationnel

Les psychologues Kahneman et Tverski ont montré à partir des années 1960 que la capacité des humains à prendre les décisions les plus rationnelles est en réalité très limitée. La belle mécanique logique du raisonnement humain est en réalité criblée de grains de sable qui déraillent la machine, les biais, ou illusions cognitives. Ces recherches ont contribué à détruire le mythe de l'agent rationnel parfait au centre des théories économiques et valurent le prix Nobel d'économie à Kahneman, 6 ans après la mort de Tverski.

<br>

<p style="text-align:center;font-size: 25px;border-top:solid  lightgray 5px;padding-top:20px;border-bottom:solid  lightgray 5px;padding-bottom:20px;font-weight:bold"><a href="https://presentationssite.github.io/tes/biais">Quelques exemples de biais cognitifs</a></p>

<br>

L'intelligence artificielle hérite-t-elle de nos biais cognitifs&nbsp;? On reviendra dessus plus loin.

<br>

## Histoire de l'IA

L'**intelligence arificielle** (IA) est une discipline  scientifique qui a vu officiellement le jour en 1956. Elle repose sur la conjecture selon laquelle toutes les fonctions cognitives, en particulier l'apprentissage, le raisonnement, le calcul, la perception, la mémorisation, voire la découverte scientifique ou la créativité artistique, peuvent être reproduite par des ordinateurs.

#### La première programmeuse : Ada Lovelace

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube l69wsNx3XlY >}}
</div>


#### De Turing au Big Data et Deep Learning

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube qmwJx-r5vmw >}}
</div>


<br>
<br>

## Apprentissage Machine : apprendre à prédire

![](/vennia.png?width=600px)


La capacité d'apprentissage est une caractéristique fréquemment attribuée à l'intelligence et la notion s'est très vite retrouvée au centre des recherches en intelligence artificielle.

 L'**apprentissage automatique** (Machine Learning) est un champ d'étude de l'intelligence artificielle qui vise à donner aux machines la capacité d'« apprendre » à partir de données, via des modèles mathématiques.

L'apprentissage automatique est à l'intersection de l'IA et d'un autre champ scientifique : la science des données (data science).

Arthur Samuel définit l'apprentissage automatique ainsi en 1959 :
> La capacité à apprendre sans avoir été spécifiquement programmé pour.

En pratique, il s'agit de produire des réponses adaptées aux données fournies en entrée (identifier des motifs, des tendances, construire des modèles, faire des prédictions). L'apprentissage automatique n'est donc ni plus ni moins que du traitement de données visant à prédire des résultats en fonction des données entrantes. Mais d'aucuns disent qu'il s'agit là d'une définition comme une autre de l'intelligence.

L'infographie suivante survole le domaine.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="https://substackcdn.com/image/fetch/$s_!Vb3J!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff42e7c30-4c5d-49c7-ab10-24c3f777cb55_3072x2304.png" style="box-shadow:none;background:none;">
</div>



On va s'intéresser à l'apprentissage automatique dit "classique"[^2] qui regroupe des algorithmes très simples nés dans les années 50 et toujours utilisés aujourd'hui à peu près partout. <br>
Cette branche de l'apprentissage automatique se décompose principalement en deux familles d'algorithmes&nbsp;: **l'apprentissage supervisé** (on apprend à la machine) et son pendant, **l'apprentissage non supervisé** (la machine apprend par elle-même). Nous allons étudier un algorithme star de chacune de ces familles.
![](https://i.vas3k.ru/7w1.jpg?width=800px)

[^2]: graphe issue de [cette introduction assez sympa](https://vas3k.com/blog/machine_learning/) à l'apprentissage automatique.

<br>

## Algorithme des *k* plus proches voisins -- Exemple d'apprentissage supervisé

<table>
<tr>
<th style="text-align:center;"><a href="/act-knn.pdf"><b>Activité 1</b></a></th>
</tr>
</table>

L'algorithme des *k* plus proches voisin (*k*-nearest neighbors ou KNN) est une des techniques les plus simples en apprentissage automatique. Sa facilité d'utilisation et sa rapidité en font un outil de choix dans l'industrie.

KNN est un algorithme d'apprentissage supervisé&nbsp;; cela signifie que l'algorithme nécessite des données classifiées en amont qui vont lui servir à trouver la bonne étiquette pour d'autres données non encore classifiées.

Suivant la nature de l'étiquette, KNN peut servir à&nbsp;:
- une **classification** des nouvelles données si les étiquettes sont des catégories ;
- une **régression** si les étiquettes sont des nombres.

<br>

### Principe

KNN enregistre, dans un premier temps, tous les points de données étiquetées qui vont lui servir à l'apprentissage (c'est le training set). Puis, quand arrive un point de donnée non étiqueté, l'algorithme calcule sa distance aux autres points et sélectionne les **k** plus proches. On a alors deux cas possibles :
- si les étiquettes sont des catégories, l'algorithme calcule **le mode** des catégories des voisins sélectionnés (catégorie la plus représentée).
- si les étiquettes sont des nombres, l'algorithme calcule **la moyenne** des étiquettes des voisins sélectionnés.


L'algorithme des *k* plus proches voisins est **non paramétrique** dans le sens où aucun modèle mathématique de classification ou régression n'est construit à partir des données (pas de paramètre à ajuster) puisque toutes les données d'apprentissage sont enregistrées telles quelles.<br>
Cela signifie qu'on ne présuppose rien de particulier sur les données (à part que des points proches appartiennent à la même catégorie). L'algorithme est donc particulièrement robuste (les données parlent d'elles-même) et simple à mettre à jour (suffit d'ajouter les nouvelles données d'apprentissage).

<br>

### Choix de *k*

![](/gifknn.gif)

Comme le montre la petite animation ci-dessus, le **choix de k** modifie le résultat obtenu.
- Si *k* est trop petit, le moyennage est faible et donc la variabilité va être très grande. On parle alors de surapprentissage (**overfitting**).
- En augmentant *k*, les résultats obtenus se stabilisent (vote de la majorité) et les erreurs diminuent, jusqu'au moment où la boule à l'intérieur de laquelle se fait le moyennage devient trop grosse, amenant in fine l'algorithme a choisir systématiquement la catégorie majoritaire, quel que soit le point... On augmente alors le **biais** (ici, le biais est le préjudice en faveur du plus grand nombre). L'ajustement ne suit plus les variations, on parle de sous-apprentissage (**underfitting**).


Pour résumer :

<div style="overflow-x:auto;">
<table>
<tr>
<th></th><th> variance</th><th> biais</th><th>Cas d'une régression</th><th>Cas d'une classification</th>
</tr>
<tr>
<td><b>k trop petit $\rightarrow$ overfitting</b></td><td>forte</td><td>faible</td><td><img src="/overfreg.png" style="max-width:150px;"></td><td><img src="/overfclas.png" style="max-width:150px;"></td>
</tr><tr>
<td><b>k trop grand $\rightarrow$ underfitting</b></td><td>faible</td><td>fort</td><td><img src="/underfreg.png" style="max-width:150px;"></td><td><img src="/underfclas.png" style="max-width:150px;"></td>
</tr>
</table>
</div>

<br>

{{%notice tip%}}
Lorsqu'on ne connaît rien sur les données, on peut toujours commencer par prendre la racine carrée du nombre de points dans l'ensemble d'entraînement comme *k* de départ.
{{%/notice%}}

Le choix de *k* est donc affaire de compromis. Pour le rendre plus scientifique, on peut chercher à mesurer la performance de l'algorithme pour différentes valeurs de *k*.

Mais comment mesure-t-on la **performance d'un algorithme d'apprentissage automatique**&nbsp;?

<br>

### Validation -- Matrice de confusion

La **matrice de confusion** permet d'évaluer la qualité des prédictions d'un algorithme.

Prenons l'exemple de l'utilisation de KNN sur une banque d'images de chiffres écrits à la main et plus spécifiquement concentrons-nous sur sa capacité à reconnaître des "3".

![](/MnistExamples.png)

On découpe l'espace en 4 cadrans. Sur une dimension, on regroupe d'un côté les données pertinentes (les 3) et de l'autre le reste des données (les non 3), et on décompose l'autre dimension en prédictions positives (les 3 prédits) et négatives (les non 3 prédits).

Puis on compte dans chaque cadran le nombre de données correspondant au recouvrement des prédictions et de la réalité. Un nom issu du vocabulaire des diagnostics médicaux est attribué à chacun de ces cadrans&nbsp;:
- les **vrais positifs** VP (les 3 identifiés comme des 3),
- les **vrais négatifs** VN (les non 3 identifiés comme des non 3),
- les **faux positifs** FP (les non 3 identifiés comme des 3),
- les **faux négatifs** FN (les 3 identifiés comme des non 3).

À partir de ces effectifs, on peut calculer 3 grandeurs permettant d'évaluer la qualité de la prédiction&nbsp;:


{{% notice def "Précision" %}}
Nombre de données bien prédites parmi les prédictions positives&nbsp;:
$$\frac{VP}{VP+FP}$$ 
{{% /notice %}}


{{% notice def "Rappel ou sensibilité" %}}
Nombre de données bien prédites parmi les données positives&nbsp;:
$$\frac{VP}{VP+FN}$$<br>
{{% /notice %}}


{{% notice def "Exactitude (accuracy)" %}}
$$\frac{VP+VN}{VP+VN+FP+FN}$$<br>
{{% /notice %}}

{{%notice info%}}
Un algorithme peut très bien être très précis (les prédictions positives sont bien des 3), mais peu sensible, avec un faible taux de rappel (parmi tous les 3, peu ont été identifiés).<br>
À l'inverse, on peut avoir une bonne sensibilité (la plupart des vrais 3 ont été identifiés comme tel), mais peu précis (beaucoup de chiffres identifiés comme des 3 sont en fait d'autres chiffres).
{{%/notice%}}

![](/matconfus.png?width=800px)

{{% notice tip %}}
On peut tout aussi bien définir la matrice de confusion avec les prédictions sur les lignes et la réalité sur les colonnes.
{{%/notice%}}

Maintenant qu'on sait évaluer l'algorithme, cherchons la valeur de **k** qui maximise l'exactitude.

Dans le graphe ci-dessous, on a tracé l'*exactitude* de l'algorithme pour la reconnaissance des "9" en fonction de la valeur de *k*.
![](/meilleurk.png?width=600px)
Si notre but est de reconnaître le mieux possible les 9 manuscrits, il semblerait que la valeur de *k* optimale soit 18.

<br>
<a href="https://presentationssite.github.io/tes/knn/#/" style="font-weight:bold;">Exemple d'utilisation de KNN pour reconnaître un chiffre</a>
<br>
<br>

## Algorithme des *k*-moyennes -- Exemple d'apprentissage non supervisé

<table>
<tr>
<th style="text-align:center;"><a href="/act-kmeans.pdf"><b>Activité 2</b></a></th>
</tr>
</table>

Le boulot de l'algorithme des ***k*-moyennes** (k-means) n'est pas d'étiqueter les données, mais de les regrouper par famille. C'est donc un algorithme de **partitionnement** des données (clustering).

Contrairement à KNN, l'algorithme des *k*-moyennes ne nécessite pas de données préétiquetées. Il fait ainsi parti des algorithmes d'apprentissage automatique **non-supervisé** (il se débrouille tout seul avec les données mystères).<br>

Par contre, l'algorithme partage avec KNN sa grande simplicité d'emploi et son efficacité qui le rendent lui aussi très populaire dans l'industrie.

<br>

### Principe

L'algorithme dépend d'un seul paramètre en plus des données&nbsp;: le nombre de partitions (clusters) *k*.

On commence par choisir *k* points au hasard dans l'espace des données (il peut s'agir de *k* points de données ou de *k* autres points). Ce sont les *k* centres (ou centroïdes).

On attribue ensuite à chaque centre tous les points de données qui lui sont le plus proches, formant ainsi *k* groupes.

Enfin, on déplace chaque centre au barycentre de son groupe.

On répète les deux dernières opérations (attribution des points les plus près et déplacement des centres) tant que les centres bougent d'une itération à l'autre.

![](/kmeans.gif)

L'algorithme vise à résoudre au final un problème d'optimisation ; son but est en effet de trouver le minimum de la distance entre les points à l'intérieur de chaque partition.

Mathématiquement, étant donné un ensemble de points $(x_1,x_2,\ldots,x_n)$, on cherche à partitionner les $n$ points en $k$ ensembles $S=\\{S_1,S_2,\ldots,S_k\\}$ en minimisant la grandeur &nbsp;:
$$I = \sum_{i=1}^{k}\sum_{x_j \in S_i}||x_i-\mu_i||^2$$
où $\mu_i$ est le barycentre des points dans $S_i$.

$I$ est la variance intra-classe ou **inertie** intra-classe (terme surtout utilisé en anglais).

<br>

### Choix de *k*

Choisir le bon nombre de clusters est crucial pour l'algorithme des *k*-moyennes, comme l'illustre l'exemple suivant&nbsp;:

![](/choixdek.png)

Mais ce n'est pas toujours simple (contrairement à l'exemple) de deviner le bon nombre de clusters juste en inspectant les données. Alors comment faire&nbsp;?

On pourrait se dire qu'il suffit de prendre le modèle avec la plus faible inertie. Mais malheureusement, l'inertie n'est pas une métrique adaptée au choix de *k* puisqu'elle ne fait que descendre quand *k* augmente... Logique&nbsp;: plus il y a de clusters, plus la distance intra-cluster diminue&nbsp;!

Traçons l'inertie en fonction de *k* pour y voir plus clair&nbsp;:
![](/inertiefctk3.png?width=700px)

On remarque qu'ici, le nombre de clusters idéal correspond au point d'inflexion de la courbe (ou, si on imagine un bras, au coude).

Confirmons en simulant des données séparées en 5 tas et en retraçant la courbe.
![](/inertiefctk5.png?width=1400px)

Là encore, le coude indique le nombre *k* idéal.<br>
On semble donc avoir trouver une tactique utilisable lorsqu'on n'a pas d'autres indices.

{{%notice tip%}}
Il existe des méthodes plus précises pour déterminer *k*, mais elles sont aussi plus gourmandes en calcul. La plus répandue utilise les *coefficients de silhouette* de chaque point  (différence entre la distance moyenne avec les points du même groupe (cohésion) et la distance moyenne avec les points des autres groupes voisins (séparation)).
{{%/notice%}}
![](/xkcdkmeans.png?width=400px)

### Limites

L'algorithme des $k$-moyennes se confronte à une difficulté classique en apprentissage automatique, et plus généralement pour tout problème d'optimisation : **obtenir un minimum global plutôt qu'un minimum local**.

![](/localglobal.png?width=600px)

La convergence vers un des minima locaux dépend crucialement de la position initiale des centres.

Dans l'exemple suivant, on obtient 3 partitionnements différents pour 3 initialisations différentes des centres.

![](/subopti.png?width=700px)

On vérifie que les centres sont bien bloqués sur leur position dans les deux premiers cas puisqu'aucun changement d'attribution n'est possible.

Dans l'algo classique, pour pallier au mieux ce problème, on initialise les centres aléatoirement et on relance l'algorithme un certain nombre de fois pour ne garder au final que la solution qui minimise l'inertie intra-classe.

Autre souci des *k*-moyennes&nbsp;: des difficultés pour partitionner des clusters de différentes tailles, différentes densités ou des formes non sphériques.

<br>

### Applications

L'algorithme des *k*-moyennes ne présuppose rien sur les données et peut s'avérer, par le fait, très utile en première approche dans un rôle de défricheur.

L'algorithme permet aussi de trancher des débats de la plus haute importance sur les couleurs comme  "<font color=#00aaaa>est-ce plus vert que bleu&nbsp;?</font>" en organisant un combat entre les centroïdes de chaque couleur.

<style>
    .container {
      position: relative;
      margin: auto;
      width: 700px;
      max-width: 90%;
      text-align: center;
    }
    /* Canvas responsive et centré */
    canvas {
      display: block;
      border: 1px solid #ccc;
      margin: auto;
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 1;
    }
    /* Boutons responsives et centrés */
    button {
      position: relative;
      display: block;
      margin: 10px auto;
      padding: 10px 15px;
      font-size: 1em;
      width: 100%;
      max-width: 100%;
    }
  </style>


  <div class="container">
    <canvas id="colorRect"></canvas>
    <button id="generateBtn">Générer une couleur</button>
    <button id="runKMeansBtn" disabled>Lancer k-means</button>
    <p id="result" style="font-family: Courier New;"></p>
  </div>



  <script>
    /* --- Fonction k-means commune --- */
    function distance(c1, c2) {
      return Math.sqrt(
        Math.pow(c1[0] - c2[0], 2) +
        Math.pow(c1[1] - c2[1], 2) +
        Math.pow(c1[2] - c2[2], 2)
      );
    }

    /**
     * Fonction k-means.
     * @param {Array} data - Tableau de points, ex: [[r, g, b]]
     * @param {number} k - Nombre de clusters
     * @param {number} maxIterations - Nombre maximal d'itérations
     * @param {Array|null} initialCenters - Si fourni, tableau de centres initiaux (de longueur k)
     * @returns {Object} { assignments, centers }
     */
    function kMeans(data, k, maxIterations = 10, initialCenters = null) {
      let centers = [];
      if (initialCenters && initialCenters.length === k) {
        centers = initialCenters.map(center => center.slice());
      } else {
        // Initialisation aléatoire
        for (let i = 0; i < k; i++) {
          centers.push(data[Math.floor(Math.random() * data.length)].slice());
        }
      }
      let assignments = new Array(data.length).fill(-1);

      for (let iter = 0; iter < maxIterations; iter++) {
        let changed = false;
        let newAssignments = new Array(data.length).fill(-1);

        // Affectation de chaque point au centre le plus proche
        for (let i = 0; i < data.length; i++) {
          let minDist = Infinity;
          let bestCluster = -1;
          for (let j = 0; j < k; j++) {
            let d = distance(data[i], centers[j]);
            if (d < minDist) {
              minDist = d;
              bestCluster = j;
            }
          }
          newAssignments[i] = bestCluster;
          if (newAssignments[i] !== assignments[i]) {
            changed = true;
          }
        }
        assignments = newAssignments;
        if (!changed) {
          console.log("k-means convergé à l'itération", iter);
          break;
        }
        // Mise à jour des centres
        let sums = Array.from({ length: k }, () => [0, 0, 0]);
        let counts = new Array(k).fill(0);
        for (let i = 0; i < data.length; i++) {
          let cluster = assignments[i];
          sums[cluster][0] += data[i][0];
          sums[cluster][1] += data[i][1];
          sums[cluster][2] += data[i][2];
          counts[cluster]++;
        }
        for (let j = 0; j < k; j++) {
          if (counts[j] > 0) {
            centers[j] = [
              sums[j][0] / counts[j],
              sums[j][1] / counts[j],
              sums[j][2] / counts[j]
            ];
          }
        }
      }
      return { assignments, centers };
    }

    /* --- Partie principale : Couleur ambiguë entre bleu et vert --- */
    const colorRect = document.getElementById('colorRect');
    const ctx = colorRect.getContext('2d');
    const generateBtn = document.getElementById('generateBtn');
    const runKMeansBtn = document.getElementById('runKMeansBtn');
    const resultP = document.getElementById('result');

    // Variable pour stocker la couleur actuelle (tableau [r, g, b] normalisé)
    let currentColor = null;

    // Fonction utilitaire pour contraindre une valeur entre min et max
    function clamp(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }

    // Génère une couleur ambiguë entre bleu et vert.
    // Le rouge est entre 0.0 et 0.3, et les valeurs de vert et de bleu sont proches.
    function generateAmbiguousColor() {
      const r = Math.random()*0.3 ;
      // Choix aléatoire du vert entre 0.3 et 0.7
      const g = Math.random() * (0.7 - 0.3) + 0.3;
      // Un petit offset pour le bleu, entre -0.05 et 0.05
      const offset = Math.random() * 0.1 - 0.05;
      const b = clamp(g + offset, 0, 1);
      currentColor = [r, g, b];

      // Conversion en valeurs 0-255
      const rVal = Math.round(r * 255);
      const gVal = Math.round(g * 255);
      const bVal = Math.round(b * 255);

      // Dessiner le rectangle
      ctx.fillStyle = `rgb(${rVal}, ${gVal}, ${bVal})`;
      ctx.fillRect(0, 0, colorRect.width, colorRect.height);
      resultP.textContent = "Une couleur a été générée.";
      runKMeansBtn.disabled = false;
    }

    generateBtn.addEventListener('click', generateAmbiguousColor);

    // Bouton pour lancer k-means
    runKMeansBtn.addEventListener('click', () => {
      if (!currentColor) {
        alert("Veuillez d'abord générer une couleur.");
        return;
      }
      // Ensemble de données : un seul point
      const data = [currentColor];
      // Centres initiaux pour 2 clusters : index 0 pour le vert, index 1 pour le bleu
      const initialCenters = [
        [0, 1, 0], // Centre vert
        [0, 0, 1]  // Centre bleu
      ];
      const result = kMeans(data, 2, 10, initialCenters);
      const labels = ["vert", "bleu"];
      const cluster = result.assignments[0];
      resultP.textContent = `k-means a tranché : c'est du ${labels[cluster]}.`;
    });

    // Générer une couleur dès le chargement de la page
    generateAmbiguousColor();
  </script>


Dans la même veine, on peut utiliser *k*-moyennes pour **segmenter une image** par couleur, ce qui peut s'avérer intéressant pour identifier des zones (comme des forêts) sur des données satellite ou pour compresser des images. Le choix de *k* correspond alors au nombre de couleurs qu'on veut garder.

![](/segimage.png?width=700)

![](/moswebb.png)

La simplicité de *k*-moyennes en fait un bon outil de dégrossissage des données, y compris sur des données déjà étiquetées. Cela permet de réduire leur dimensionnalité, avant d'utiliser des algorithmes plus complexes d'apprentissage supervisé.

<br>

## Apprentissage par renforcement

<table>
<tr>
<th style="text-align:center;"><a href="/act-renforcement.pdf"><b>Activité 3</b></a></th>
</ter>
</table>

En plus de l'apprentissage supervisé (utilisé par exemple dans la reconnaissance d'image) et non supervisé (utilisé par exemple dans les systèmes de recommandation), une machine peut aussi apprendre **par renforcement** (utilisé dans les prises de décision). Dans la plupart des applications, les trois sont mélangés.

L'apprentissage par renforcement a permis à la machine de maîtriser de nombreux jeux et l'activité suivante permet de comprendre le mécanisme général derrière un tel apprentissage.

<br>

## Apprentissage profond

L'apprentissage profond (deep learning) révolutionne le secteur de l'IA dans les années 2010. Il consiste à entraîner un ordinateur à “apprendre” en analysant un grand nombre d’exemples. Il fait cela à l’aide de structures mathématiques appelées réseaux de neurones, qui s’inspirent vaguement du fonctionnement du cerveau humain. L’idée de “profondeur” vient du fait que les réseaux de neurones utilisés dans le deep learning ont de nombreuses couches. Chaque couche effectue une partie de l’analyse et transmet ses résultats à la suivante. C’est un peu comme si un problème complexe était résolu par une série d’étapes simples, chacune se concentrant sur un détail particulier.

 Quoi de mieux que la leçon inaugurale au Collège de France d'un de ses fondateurs, Yann Le Cun, pour nous expliquer de quoi il retourne&nbsp;?


<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube TdLa5h-x2nA >}}
</div>

Malheureusement, le mème qui suit résume aujourd'hui assez bien notre compréhension fine du fonctionnement des modèles de deep learning&nbsp;: on est devant une boite noire qui fait le job demandé sans que l'on comprenne trop comment...

![](/resumdeeplearning.png?width=500px)

<br>


## Jeux d'accessibilité sur un graphe

Cette partie du cours a moins à voir avec les jeux vidéo qu'avec la modélisation de systèmes réactifs (automate bancaire, système-environnement), les problèmes de contrôle, la théorie de la décision, les problèmes de routage sur Internet, l'économie... Autant de domaînes admettant une description en terme d'opposition entre adversaires sur une arêne (un des adversaires pouvant modéliser l'environnement). La détermination d'une stratégie gagnante résout alors le problème posé en assurant sa correction.

<br>

### L'arène

On entendra ici par jeu&nbsp;:
- des jeux à deux joueurs ($J_1$ et $J_2$ ou Eve et Adam)
- à **information complète**&nbsp;: les deux joueurs savent tout (pas comme aux cartes)
- **alternés** (pas comme à chifoumi)
- **non randomisés** (pas de hasard)

L'**arène** dans laquelle le jeu prend place est un **graphe orienté biparti**.
<style>
#bipa p:first-child:after {
    content: 'Graphe biparti';
}
</style>
{{% notice def bipa %}}
Un graphe biparti (ou bipartite) $G$ est un graphe dont l'ensemble des sommets peut être divisé en deux sous-ensembles de sommets disjoints $S_1$ et $S_2$ ($S_1$ et $S_2$ sont une partition de $S$&nbsp;: $S_1\cup S_2=S$, $S_1\cap S_2=\varnothing$) tels que chaque arête de $G$ a une extrémité dans $S_1$ et l'autre dans $S_2$.
{{% /notice %}}


![](/animbipar.gif)

{{% notice tip %}}
Un graphe est biparti si on peut colorier tous les sommets du graphe avec seulement deux couleurs de manière à ce que deux sommets voisins n'aient jamais la même couleur (on parle alors de **2-coloriage**).<br>
On peut montrer qu'un graphe est biparti si et seulement si il ne possède pas de cycle de longueur impaire.<br>
{{% /notice %}}

> Démonstration de "graphe biparti $\Leftrightarrow$ pas de cycle impair"&nbsp;:
>- On montre $\Rightarrow$ en constatant l'impossibilité d'un 2-coloriage sur un cycle impair. *Donc tout graphe contenant un cycle impair ne peut pas être biparti.*
> - Et on montre $\Leftarrow$ en essayant de créer un 2-coloriage depuis un sommet&nbsp;; tant qu'on ne rencontre pas de cycle, pas de problème.<br>
> 	Tous les sommets à une distance impaire du sommet de départ sont coloriés d'une couleur et tous ceux à une distance paire sont coloriés de l'autre couleur.<br>
> 	Donc un graphe sans cycle est toujours biparti.<br>
> 	Place aux cycles maintenant. Supposons que deux des chemins partant d'un sommet se rejoignent, alors on a deux possibilités&nbsp;:
> 	- la jonction se fait entre deux sommets de couleurs différentes et le 2-coloriage reste possible.<br>
> 	Dans ce cas, on joint un chemin de longueur pair et un chemin de longueur impair, ce qui donne un cycle de longueur pair (avec le +1 de l'arête de la jonction).
> 	- la jonction se fait entre sommets de la même couleur rendant impossible le 2-coloriage.<br>
> 	Dans ce deuxième cas, on obtient nécessairement un cycle de longueur impaire puisqu'on joint deux chemins de la même parité (+ 1 de l'arête de jonction).<br>
> 		
> 	Seuls les cycles impairs font donc échouer le 2-coloriage. *Tout graphe non biparti contient au moins un cycle impair.*

Retournons aux jeux...<br>
Deux joueurs, $J_1$ et $J_2$, s'affrontent sur un graphe orienté biparti $G=(S,A)$ où $S$ est constitué des sommets contrôlés par le joueur 1, $S_1$, et de ceux contrôlés par le joueur 2, $S_2$. Chaque sommet est une position valide du jeu et chaque arête est un mouvement autorisé entre ces positions.

Il manque encore une condition de gain pour rendre le jeu intéressant&nbsp;; dans le cas d'un **jeu d'accessibilité**, on attribue à chaque joueur un sous-ensemble de sommets correspondant à des états gagnants qu'il convient d'atteindre pour... gagner. Il peut aussi exister un sous-ensemble de sommets correspondant à des états de partie nulle.

Un jeu d'accessibilité est alors défini par un quadruplet $(G,S_1,S_2,F)$ où $(G,S_1,S_2)$ est une arène et $F$ est l'ensemble des sommets gagnants pour $J_1$.

<br>

### Exemples

#### Chomp

Chomp est un jeu où les deux adversaires mangent à tour de rôle des carrés de chocolat d'une tablette avec la "contrainte" de manger tous les carrés à droite et au-dessus du carré choisi. Le perdant doit manger le brocoli qui reste à la fin.

Eve commence le jeu avec la tablette ci-dessous composé de 5 carrés. Il existe alors 9 configurations possibles, pas toutes atteignables par les deux joueurs.

Traçons l'arène (les ronds bleus sont les positions contrôlées par Eve et les carrés roses par Adam).

$F$ (sommet gagnant pour Eve) est le carré rose avec un brocoli puisque l'atteindre signifie qu'Adam se retrouve avec le légume à manger.

![](/chompintro.gif)

<br>

#### Une des nombreuses variantes du jeu de Nim

Un tas d'allumettes est disposé devant Eve et Adam. Eve joue en premier et peut retirer autant d'allumettes qu'elle le souhaite du moment qu'elle en prend au moins une et qu'elle en laisse au moins une. C'est ensuite au tour d'Adam de retirer des allumettes avec pour tous les tours qui suivent une contrainte supplémentaire&nbsp;: on ne peut pas retirer plus de deux fois le nombre d'allumettes prises par son adversaire au tour précédent. Le joueur qui retire la dernière allumette gagne. Il n'y a pas de match nul.

Traçons le graphe du jeu en supposant que l'on commence avec 5 allumettes et étiquetons les sommets avec le couple (nombre d'allumettes présentes, nombres d'allumettes prenables). L'étiquette du nœud de départ est donc (5,4).<br>
On a indiqué en jaune le sommet à atteindre pour Eve (sommet de $F$).

![](/variantenim.png?width=600px)

Le graphe est ici plutôt simple, mais on verra [dans le TP](http://localhost:1313/semestre_3/tp13/#jeux-daccessibilité-à-deux-joueurs) que pour des nombres d'allumettes plus grand, on sera content de pouvoir confier la tâche de sa construction à python.

{{% notice tip %}}
Ce jeu est une variante du jeu de Nim (voir TP) comme en fait tout jeu impartial à deux joueurs (théorème de Sprague-Grundy). Un **jeu impartial** est un jeu tour par tour dans lequel les coups autorisés, ainsi que les gains obtenus, dépendent uniquement de la position, et pas du joueur dont c'est le tour. C'est le cas de Chomp qui est donc, lui aussi, un jeu de Nim déguisé... Un jeu qui n'est pas impartial est appelé **jeu partisan** (le morpion ou les échecs par exemple).
{{% /notice %}}

<br>

#### Morpion (tic-tac-toe)

Pas besoin de rappeler les règles du morpion (oxo en belgique).<br>
Dans cet exemple, Eve démarre sur un jeu déjà avancé, elle a les ronds.<br>
Cette fois-ci, $F$ contient plusieurs sommets (toujours indiqués en jaune).

![](/graphetictac1.png?width=1000px)

<br>

### Stratégie

Gagner la partie, c'est arriver sur un sommet de $F$. Comment savoir si Eve peut ou non gagner selon sa position de départ&nbsp;? Et si elle le peut, comment mettre au point pour elle une stratégie gagnante&nbsp;?

<br>

#### Positions gagnantes et attracteurs

Pour déterminer l'ensemble des positions gagnantes pour Eve sur l'arène, on travaille récursivement depuis les sommets de $F$ en suivant les deux préceptes suivants&nbsp;:
- un sommet d'Eve est gagnant si **un** de ses arcs sortants le lie à un sommet gagnant.<br>
Eve n'a alors plus qu'à emprunter ce chemin.<br>
![](/sommetgagnant1.png?width=200px)
- un sommet d'Adam est gagnant (pour Eve) si **tous** ses arcs sortants le lie à un sommet gagnant.<br>
En effet, Adam ne peut alors pas éviter de mettre Eve dans une position gagnante.
![](/sommetgagnant2.png?width=200px)

Formalisons un peu tout ça en définissant la suite $Attr_i(F)$ qui contient l'ensemble des sommets gagnants après $i$ étapes&nbsp;:
$$ \begin{array}{lll} Attr_0(F) &= &F \\\\  Attr\_{i+1}(F) &= &Attr\_{i}(F) \\\\ &&\cup \\{s \in S_1|Succ(s)\cap Attr_i(F) ≠ \varnothing \\} \\\\ &&\cup \\{s\in S_2| Succ(s)\subseteq Attr_i(F)\\} \end{array} $$
Étant donné que $Attr_i(F) \subseteq Attr\_{i+1}(F) \subseteq S$, pour tout $i≥0$, si on suppose le graphe fini, la suite est croissante et bornée et donc stationnaire (à partir d'un certain $i=i_0$, $Attr_i(F)$ est constante, et si $|G|=n$, $i_0$ vaut au plus $n-1$).

{{%notice info%}}
On appelle **attracteur** de $F$ pour le joueur $J_1$  la limite de $Attr_i(F)$. On le note $Attr(F)$.<br>
Tout sommet dans l'attracteur est une **position gagnante** pour $J_1$.
{{%/notice%}}

Le complémentaire d'un attracteur est appelé **piège**. Si le joueur 1 est sur une position n'appartenant pas à son attracteur (et donc à son piège), cela signifie que :
- si c'est son tour, tous les mouvements possibles restent dans le piège,
- si c'est le tour de l'adversaire, celui-ci a toujours au moins une possibilité de laisser le joueur 1 dans le piège.

Cette position est donc perdante...

<br>

##### Détermination "à la main" de l'attracteur dans les exemples précédents

L'attracteur dans l'exemple du jeu Chomp contient 9 sommets, dont le somme de départ.

![](/chompattract.gif)

Dans le cas de la variante de Nim, l'attracteur se réduit à $Attr(G) = \\{(0,0,1) , (1,1,0) , (2,2,0) \\}$ où la troisième valeur des triplets correspond au joueur qui contôle le sommet (0 pour Eve et 1 pour Adam). Le sommet de départ $(5,4,0)$ n'est pas dedans $\Rightarrow$ c'est perdu pour Eve 😭..

![](/nimvarattr.png?width=600px)

Enfin, sur l'exemple du morpion, l'attracteur contient 13 sommets dont celui de départ.

![](/morpionattr.gif)

<br>

#####     Programme permettant de calculer l'attracteur

On peut écrire un programme récursif calculant l'attracteur en temps linéaire en $|S | + |A|$ ([rappelons-nous](https://info-tsi-vieljeux.github.io/semestre_2/graphes/#parcours-dun-graphe) que le parcours complet d'un graphe est au mieux en $O(|S | + |A|)$ car cela correspond à parcourir les $|S|$ sommets et les $|A|$ arêtes). Pour éviter de calculer plusieurs fois le même élément, l'algorithme tient à jour, pour chaque sommet $s$, un compteur `n` des successeurs non encore inspectés (sous la forme d'un dictionnaire) .


```python
def attracteur(G: dict, F: list) -> list:
    """
    préconditions: G est est un graphe sous forme de liste d'adjacence implémentée par un dictionnaire
                   F est la liste des sommets gagnants pour le joueur 1
    postcondition: la fonction retourne l'attracteur de F pour le joueur 1 sous forme d'un dictionnaire
                   dont les clés sont les sommets de G et les valeurs True ou False suivant que le sommet appartienne ou non à l'attracteur
    """
    Pred = inverseGraphe(G)
    n = {s:len(G[s]) for s in G}
    Attr = {s:False for s in G}
    for sommet in F:
        Joueur1 = True
        propage(sommet,Joueur1,Attr,Pred,n)
    return Attr

def propage(sommet,Joueur1,Attr,Pred,n):
    if Attr[sommet]:
        return
    Attr[sommet] = True
    for s in Pred[sommet]:
        n[s] -= 1 # un successeur de s en moins
        if Joueur1 or (n[s] == 0) :
            propage(s,not Joueur1,Attr,Pred,n)
```
<br>

#### Stratégie gagnante

<style>
#moryless p:first-child:after {
    content: 'Stratégie sans mémoire gagnante';
}
</style>
{{% notice def moryless %}}
Une **stratégie sans mémoire** est une fonction $\sigma$ qui assigne un mouvement autorisé à un joueur pour chaque position non terminale&nbsp;: $\forall s\in S, (s,\sigma(s))\in A.$<br>
Un joueur sur une position $s$ suit une stratégie s'il emprunte le chemin $<s,\sigma(s),\sigma^2(s),\ldots>$. Elle est dite sans mémoire car pour une position donnée, la stratégie est indépendante du chemin qui y a mené ($\sigma$ ne dépend que du sommet).<br>
Une **stratégie sans mémoire gagnante** depuis une position donnée garantit la victoire au joueur en un nombre de coups limité. Pour le joueur 1, une stratégie gagnante garantit d'arriver sur un sommet de $F$. Mais suivant la position de départ, une telle stratégie n'existe pas forcément...
{{% /notice %}}


En construisant l'attracteur, on répond à notre première question&nbsp;: **la position d'Eve est-elle gagnante&nbsp;? Il suffit de vérifier qu'elle appartient à l'attracteur.**<br>
Si c'est le cas, une stratégie gagnante est facile à mettre en place&nbsp;; il faut faire en sorte que chaque déplacement sur le graphe (chaque coup joué) se fasse vers un sommet de l'attracteur. Chaque coup d'Eve vers un sommet de l'attracteur piège aussi le coup suivant d'Adam dans l'attracteur.<br>
Comme son nom l'indique, l'attracteur attire irrémédiablement vers $F$, assurant la victoire au joueur 1.

Le joueur 2 aussi, bien sûr, a son attracteur, et il appartient au complémentaire de l'attracteur du joueur 1, piège du joueur 1. Donc un seul écart du joueur 1 en dehors de son attracteur, et s'en est fini pour lui, le joueur 2 peut le condanner à rester dans le piège.
![](https://media2.giphy.com/media/yEIJLJXHwJHZm/giphy.gif)

Revenons à nos exemples :
- Pour Chomp, le joueur 1 appartient à l'attracteur, ce qui signifie que sa position de départ est gagnante. Par conséquent, il a une stratégie gagnante. Mais attention à ne pas se tromper au début&nbsp;! Sur 5 mouvements possibles, le seul assurant la victoire est de manger le carré en haut à droite.
- Pour la variante de Nim, c'est foutu... Quelle que soit notre stratégie, elle sera perdante.
- Enfin, pour Tic-tac-toe, la victoire tend les bras au joueur 1. Et, sans surprise, son premier mouvement doit être de prendre le milieu.

<br>

### Arbre et minimax

Pour des jeux comme les échecs, le graphe est bien trop gros pour pouvoir appliquer nos méthodes précédentes. Alors comment s'en sortir&nbsp;?

L'idée est de se contenter d'une recherche partielle autour de la position actuelle donnant à l'algorithme seulement quelques coups d'avance. Il évalue alors les différentes positions futures possibles en leur attribuant un score issu d'une **heuristique**.

<style>
#heuri p:first-child:after {
    content: 'Heuristique';
}
</style>
{{% notice def heuri %}}
Une heuristique est une méthode de calcul qui fournit rapidement une solution réalisable, pas nécessairement optimale ou exacte, pour un problème d'optimisation difficile. Elle  s'impose quand les algorithmes de résolution exacte sont impraticables, à savoir de complexité polynomiale de haut degré, exponentielle ou plus.<br>
Une heuristique est donc un compromis entre d'un côté l'optimalité (trouver la meilleure solution) et/ou la complétude (trouver toutes les solutions) de l'algorithme et de l'autre côté sa vitesse.
{{% /notice %}}

Pour implémenter efficacement cette recherche partielle, l'idée est d'utiliser un arbre plutôt que l'arêne précédente. Quelle différence&nbsp;? L'absence de cycle qui va permettre d'élaguer&nbsp;! On le paye au prix de la redondance des sommets (le même sommet peut apparaître plusieurs fois dans l'arbre). Pour chaque position, les différents coups possibles correspondent aux différentes branches et on avance ainsi niveau par niveau jusqu'aux feuilles représentant les positions terminales.

Le gros avantage d'un arbre est qu'il permet facilement de ne garder que quelques niveaux (on raccourci alors toutes les branches jusqu'à la profondeur considérée).

Muni de cet arbre, l'algorithme se lance dans un parcours en profondeur jusqu'à la profondeur maximale stipulée. Lorsque ce niveau est atteint (2, par exemple, si on veut que l'IA ait deux coups d'avance), l'algorithme évalue les feuilles grâce à son heuristique, puis il propage ce score vers les niveaux supérieurs en suivant le **principe du minimax**&nbsp;:
- sur un niveau correspondant au joueur 1, on sélectionne la valeur **maximale** parmi les branches, 
- et sur un niveau correspondant à l'adversaire, on sélectionne la valeur **minimale**.  

Le pricipe est de maximiser les gains du joueur 1 tout en minimisant ceux du joueur 2. 
La valeur est au final transmise à la racine (la position depuis laquelle on a lancé la recherche) et la meilleure branche est sélectionnée.

Prenons l'exemple du jeu de Morpion. Une heuristique possible pour évaluer un plateau pourrait consister à compter $+1$ pour chaque alignement encore possible pour le joueur et  $-1$ pour ceux encore possibles pour son adversaire.

![](/minimaxgif.gif)


L'arbre total du morpion n'est pas si gros&nbsp;; le **facteur de ramification** $b$ est de 5 en moyenne et il y a au plus 9 niveaux (9 coups), ce qui donne $\approx 5^9 = 1\\,953\\,125$ (à titre de comparaison, aux échecs, $b\approx35$ et un partie dure en moyenne 100 coups, ce qui donne $b^m\approx10^{54}$ sommets à inspecter...). 

L'algorithme minimax appliqué au morpion inspecte en réalité environ 4 fois moins de sommets que les deux millions prédits, car ce chiffre ne tient pas compte des nombreuses parties potentielles se terminant avant le neuvième coup. Il en inspecte néanmoins beaucoup plus qu'il ne faudrait (il n'y a que $9!=362\\,880$ coups possibles si l'ordi commence et seulement $8!=40\\,320$ si l'humain a l'honneur), ce qui illustre le fait qu'un arbre contient beaucoup de sommets redondants par rapport au graphe du jeu dont il est tiré (c'est le prix à payer pour casser les cycles).

La taille modéré de l'arbre permet de l'explorer jusqu'aux parties finales, mais on peut constater en jouant avec le petit programme ci-dessous que la réduction à une profondeur d'un seul niveau grâce à l'heuristique[^3] est tout autant redoutable en inspectant presque 4000 fois moins de sommets&nbsp;!


{{< runpython lang="python" height="600" mode="toggle" file="morpionminimax.py">}}
{{< /runpython >}}


[^3]: 2-ply minimax en anglais

Cela prouve qu'au morpion, 1 coup d'avance, c'est bien suffisant... Mais ce n'est pas vraiment le cas aux échecs, où les plus grands joueurs (comme Kasparov) prévoient jusqu'à 12 coups à l'avance&nbsp;! Deep Blue, qui a battu Kasparov en 1997, cherchait jusqu'à une profondeur typiquement comprise entre 6 et 16, mais pouvait aller jusqu'à 40 dans certaines situations.

Dans le cas des échecs, l'heuristique permettant d'évaluer un état de l'échiquier est bien plus complexe qu'au morpion. Elle doit prendre en compte la quantité de pièces et pions restants, la qualité des pièces et les positions de tout ce beau monde (domination du centre, structure compacte, etc.).

La taille du jeu de Go rend vaine toute tentative de type minimax. C'est au point que les grands joueurs de Go ont longtemps refusé de jouer contre des ordinateurs, non par peur de perdre, mais parcequ'ils les trouvaient trop mauvais. C'est l'essor du deep learning, et donc une philosophie basée sur l'apprentissage plus que sur la stratégie, qui a permis à [la machine](https://www.deepmind.com/research/highlighted-research/alphago) de devenir un adversaire coriace à ce jeu-là aussi.

<br>

## Sac à dos et heuristique

Voyons enfin une autre utilisation d'heuristique avec le problème du sac à dos, ici dans sa version "0/1" (knapsack 0/1 en anglais).

Le problème du sac à dos est un problème classique d'optimisation avec d'importantes applications théoriques et industrielles.

Soit $x\in\mathbb{N}^{\*}$, soit $v$ une séquence de $n$ éléments appartenant à $\mathbb{N}^{*}$, et soit $p$ une séquence de $n$ éléments appartenant à $\\{1,2,...,c\\}$.<br>
Nous appelons $c$ la capacité, $v$ la séquence de valeurs et $p$ la séquence de poids.<br>
Le problème du sac à dos consiste à mettre des objets de poids $p$, dans un sac à dos qui peut contenir un poids maximal $c$, de telle sorte que la valeur des objets choisis est maximisée.<br>
Plus formellement, cela revient à maximiser
$$\text{val}(x)=\sum_{i=1}^n x[i]\cdot v[i]$$
sous la contrainte $c≥\sum_{i=1}^n x[i]\cdot p[i]$, où $x\in\\{0,1\\}^n$ indique les objets choisis.

Exemple : supposons que le sac ait une capacité de 900 et que l'on cherche à y placer les objets suivants
| objets      |  🥏  |  🎺 |   🥊  |  🧸  |  🪠  |  ⏰  |
|-------------|:---:|:--:|:----:|:---:|:---:|:---:|
| valeurs $v$ |  5  | 50 |  65  |  20 |  10 |  12 |
| poids $p$   | 320 |  700 | 845 | 180 | 70 | 420 |

Le plus simple pour arriver à nos fins est de suivre une **stratégie gloutonne** (une stratégie étape par étape où un critère de classement permet de sélectionner le prochain objet à ajouter). Un critère qui semble prometteur est le ratio valeur/poids de chaque objet. L'idée est alors de placer les objets dans le sac dans l'ordre inverse de leur ratio. Cela semble une bonne stratégie puisque les objets ajoutés maximisent ainsi la valeur qu'ils apportent par rappor à la place qu'ils prennent. Mais si l'approche gloutonne a l'avantage d'être très simple, le revers de la médaille est qu'elle est à courte vue, on perd la vision d'ensemble. Et dans certaines configurations, comme c'est le cas dans notre exemple, cela s'avère contre-productif. 

| objets      | 🥏 |  🎺 | 🥊 | 🧸 |  🪠 | ⏰  |
|-------------|:-:|:--:|:-:|:-:|:--:|:--:|
| ratio $v/p$ | 1/64 |  1/14 | 1/13 | 1/9 | 1/7 | 1/35 |

L'approche gloutonne nous encourage ici à placer d'abord 🪠 dans le sac, puis 🧸, et c'est tout. Plus de place pour l'objet suivant (🥊). On obtient finalement une valeur de 30 et un poids de 250.<br>
Cet exemple nous montre que l'approche gloutonne ne garantit pas l'optimalité (loin de là même, vu la place qu'il reste dans le sac...). On pourrait néanmoins facilement améliorer les choses en continuant d'essayer de placer les éléments de ratio plus grand sans s'arrêter au premier blocage. On tente 🎺, trop grosse, puis ⏰, là ça rentre, et enfin 🥏 qui ne loge pas. On obtient ainsi une valeur de 42 et un poids de 670. Mais même ainsi, on n'a pas obtenu la réponse optimale.



Puisqu'on suppose, dans cette version "0/1" du problème qu'un objet est soit présent, soit absent (pas de fraction et pas de multiple), on peut représenter l'ensemble des possibilités par un **arbre binaire**.<br>
Une méthode sûre pour résoudre le problème consiste alors à parcourir l'arbre dans son entièreté et regarder la valeur et le poids de chaque branche complète (de la racine jusqu'à la feuille), pour choisir au final la branche la plus rémunératrice et repectant la contrainte de capacité.<br>
C'est la méthode par **force brute**.

![](/arbreknapsack.png)

Un algorithme récursif possible pour faire ce travail (à chaque embranchement, on compare avec et sans l'objet)&nbsp;:

```python
def sacadosBrute(v,p,c,i,valeur,poids):
    n = len(v)
    if i == n:
        if poids > c:
            return 0
        else:
            return valeur
    else:
        valeurAvec = valeur + v[i]
        poidsAvec = poids + p[i]
        return max(sacadosBrute(v,p,c,i+1,valeur,poids),sacadosBrute(v,p,c,i+1,valeurAvec,poidsAvec))
```

Comme vous l'aurez deviné, la résolution du problème du sac à dos par force brute est en $O(2^n)$ où $n$ est le nombre d'objets. Donc au-delà de quelques dizaines d'objets, c'est mort...

Pour améliorer les choses, on peut utiliser la méthode "séparation et évaluation" (**branch and bond** ou BB en anglais) qui vise à élaguer l'arbre autant que faire se peut.<br>
Arrivé à un certain sommet de l'arbre, si l'objet se trouvant en-dessous amène à un dépassement de la capacité, cela ne sert plus à rien de continuer sa branche, alors on coupe.<br>
L'autre idée est d'utiliser la détermination de la valeur optimale du sac par la méthode gloutonne comme une **heuristique**&nbsp;; si sous un sommet, la somme des valeurs des objets restant aboutit à une valeur totale inférieure à l'heuristique, on coupe.

Voilà un code possible&nbsp;:
```python
def sacadosBB(v,p,c,i,valeur,poids,meilleure,potentiel):
    nbappels += 1
    n = len(v)
    meilleure = max(meilleure,valeur)
    if i == n:
        if poids > c:
            return 0
        else:
            return valeur
    elif valeur + potentiel[i] < meilleure:
        return valeur 
    else:
        valeurAvec = valeur + v[i]
        poidsAvec = poids + p[i]
        sol = sacadosBB(v,p,c,i+1,valeur,poids,meilleure,potentiel)
        if poidsAvec <= c:
            sol = max(sol,sacadosBB(v,p,c,i+1,valeurAvec,poidsAvec,meilleure,potentiel))
        return sol
```

Cela donne un arbre bien plus clairsemé sur notre exemple (et avec, qui plus est, une heuristique qui ne nous aide pas des masses, car très mauvaise).

![](/arbreknapsackBB.png)


Une autre technique possible est d'utiliser la **programmation dynamique** qui est présentée dans la vidéo ci-dessous.


{{<youtube F48AbiZGds0>}}


<br>

## Apprentissage profond

L'apprentissage profond (deep learning) révolutionne le secteur de l'IA dans les années 2010. Il consiste à entraîner un ordinateur à “apprendre” en analysant un grand nombre d’exemples. Il fait cela à l’aide de structures mathématiques appelées réseaux de neurones, qui s’inspirent vaguement du fonctionnement du cerveau humain. L’idée de “profondeur” vient du fait que les réseaux de neurones utilisés dans le deep learning ont de nombreuses couches. Chaque couche effectue une partie de l’analyse et transmet ses résultats à la suivante. C’est un peu comme si un problème complexe était résolu par une série d’étapes simples, chacune se concentrant sur un détail particulier.

 Quoi de mieux que la leçon inaugurale au Collège de France d'un de ses fondateurs, Yann Le Cun, pour nous expliquer de quoi il retourne. 

<br>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube TdLa5h-x2nA >}}
</div>

<br>

Malheureusement, le mème qui suit résume aujourd'hui assez bien notre compréhension fine du fonctionnement des modèles de deep learning&nbsp;: on est devant une boite noire qui fait le job demandé sans que l'on comprenne trop comment...

![](/resumdeeplearning.png?width=500px)

<br>

### Avènement des grands modèles de langage

Les grands modèles de langage (LLM en anglais) révolutionnent à leur tour l'IA dans les années 2020. Avec leur architecture non-récurrente, le transformeur, basée sur un mécanisme dit d'attention, ils peuvent avec succès traiter des données séquentielles tout en étant parallélisable lors de l'entrainement (cela permet des gains en performance énormes et ainsi d'augmenter de plusieurs ordres de grandeur le nombre de paramètres de leurs modèles, d'où le qualificatif "grand").

Stephen Wolfram a écrit [un long article pédagogique](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/) sur le fonctionnement de ChatGPT (l'agent conversationnel basé sur un LLM qui a sidéré le  grand public lors de sa mise à disposition en 2022).

![](https://content.wolfram.com/sites/43/2023/02/hero3-chat-exposition.png)

Le génial 3Blue1Brown a réalisé une série de vidéos sur les LLM, mais il a aussi pensé aux gens pressés avec cette vidéo introductive&nbsp;:

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube LPZh9BOjkQs>}}
</div>

Un champ de recherche immense s'est ouvert pour tenter de comprendre le fonctionnement interne des LLM. Des chercheurs d'Anthropic (l'entreprise à l'origine de Claude) ont trouver une méthode pour aller en quelque sorte sonder le "cerveau" de Claude jusqu'à localiser l'emplacement de différents concepts et réussissant même à booster l'activation d'un concept par rapport aux autres. C'est ainsi qu'est né [Golden Gate Claude](https://www.anthropic.com/news/golden-gate-claude) qui pu, pendant 24h, interagir avec les utilisateurs et partager sa totale obsession pour le pont de San Francisco. Dans l'exemple d'interaction suivant, à la fois drôle et douloureux, Claude semble lutter contre sa psychose&nbsp;:

![](/goldenclaude.jpeg?width=700px)

<br>

## IA et éthique

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube tf4-_4IbXPs >}}
</div>

<br>

L'intelligence artificielle repose en grande partie sur la collecte de données et leur traitement. Or des biais très importants aux conséquences potentiellement dramatique peuvent s'immiscer lors de cette étape cruciale.

Prenons l'exemple du **biais des sruvivants** qui est un des plus importants **biais de sélection**.


### Biais des survivants

Il tire son nom des efforts du statisticien Abraham Wald du Statistical Research Group qui analysait les impacts sur les bombardiers amériacains revenus de mission pendant la seconde guerre mondiale afin de déterminer les zones où il fallait améliorer le blindage.
![](/survivorshipbias.png?width=700)

En voyant cette image l'erreur de logique consisterait à vouloir blinder les zones les plus impactées. C'est tomber dans le biais des survivants&nbsp;! En effet, les avions étudié sont ceux qui sont revenus, les "survivants", ce qui signifie que les impacts reçus ne les ont pas détruit. Par contre, l'absence d'impact dans certaines zones pourrait indiquer qu'il s'agit là d'endroits critiques où un tir provoque plus certainement une avarie grave et donc l'absence de survivants y présentant des impacts. Il faut en conclusion blinder d'avantage les zones sans impact&nbsp;!

C'est le biais des survivants qui nous fait dire par exemple dire que les constructions anciennes étaient plus solides ou la musique meilleure il y a quelques décennies.

Le biais du survivant s'immisce partout où il y a sélection puisque le critère de sélection laisse fatalement de côté les données ne respectant pas les critères et il faut donc se garder de conclusions générales ne prenant pas en compte la population écartée.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<img src="/survivants.png">
</div>

![](/survivorshipxkcd.png)

Et au final, le biais des survivants n'est bien qu'une forme de **biais de sélection**. En effet, un biais de sélection désigne généralement toute situation où l’échantillon utilisé pour une analyse ou une prise de décision n’est pas représentatif de la population globale en raison de la méthode utilisée pour sélectionner les données. Avec le biais des survivants, l'erreur de représentativité consiste à considérer, comme son nom l'indique, uniquement les survivants, mais ce n'est qu'un exemple parmi d'autre de sélection non représentative de données. L'entraînement des IA, en particulier celui des IA génératives, est très sensible à ces défauts de représentation de la même façon qu'un enfant élevé dans un milieu particulier (secte par exemple) aura beaucoup de mal à se faire une représentation adaptée du reste du monde.

![](/samplingbias.jpeg?width=600px)

Une fois récoltées, les données sont traîtées et en particulier, on cherche à établir des corrélations entre des groupes de données. En effet, ces corrélations permettent d'extrapoler dans des zones de l'espace vides de données et ainsi prédire les valeurs ou catégories de données manquantes. Par contre, on doit alors faire attention à un autre biais classique résumé par un des mantras de la statistique : "La corrélation n'implique pas la causalité".

### La corrélation n'implique pas la causalité

Pour expliquer la corrélation entre deux évènements, on a trop vite fait de supposer une relation de cause à effet. C'est une possibilité mais ce n'est pas la seule&nbsp;!

Autres explications possibles de la corrélation&nbsp;?

<details>
<summary id="correcsum">
Réponse (cliquer pour afficher)</summary>
<blockquote id="correc">
<ul>
<li>Hasard.</li>
<li>Un troisième facteur cause les deux autres (exemple classique de la corrélation entre la vente de glace et les attaques de requins ou entre le nombre d'enfants et le nombre de cigognes - on parle d'ailleurs parfois d'effet cigogne).</li>
<li>Peut être que la relation de cause à effet est dans l'autre sens que le sens envisagé.</li>
<ul>
<div style="position:relative; width:700px; max-width: 100%; margin-left: auto;margin-right: auto;">
<img src="https://images.prismic.io/sketchplanations/f1f6cafb-6444-453f-a5c5-8f603ab41a23_SP+562+-+Correlation+is+not+causation.png" 
</div>
</blockquote>
</details>

[Ce chouette site](https://tylervigen.com/spurious-correlations) recense un tas de correlations amusantes.

![](/correlchat.png?width=600px)
![](https://imgs.xkcd.com/comics/correlation.png)

Comme semble le montrer [cet article scientifique récent](https://arxiv.org/pdf/2306.05836.pdf) ("Can Large Language Models infer causation from correlation?"), les grands modèles de langages (LLM type ChatGPT) semblent encore assez mauvais pour déduire si oui ou non une relation de causalité est à l'origine de la corrélation.

Les données d'apprentissage rendent les modèles de langage particulièrement sensibles à ce type de confusion. 

Les IA génératives peuvent ainsi reproduire des préjugés sexistes&nbsp;; si les données d'apprentissage contiennent plus d'infirmiers ou secrétaires femmes et de patrons ou ingénieurs hommes, le modèle a alors tendance à plus associer une femme à une infirmière qu'à une ingénieure.<br>
Au-delà du genre, ces modèles peuvent renforcer un large éventail de stéréotypes lié à la race, à l'âge, la nationalité, la religion ou le milieu d'origine.

{{%notice note%}}
Sur ce point, les modèles de langage n'ont pas grand chose à envier aux humains.<br>
[Une étude de 2004](/ziegler.pdf) montre en effet que sur 144 étudiantes allemandes, 32% seulement savent résoudre la petite énigme suivante&nbsp;:<br>
<i>Un père et son fils ont un grave accident de voiture. Le père meurt. Le fils est entre la vie et la mort. On l'amène aux urgences et le chirurgien qui le voit dit : "Je ne peux pas l'opérer car c'est mon fils."</i><br>
Était alors demandé aux étudiantes si ce problème était explicable en une phrase simple et elles devaient soit répondre non soit donner l'explication.
{{%/notice%}}


### Quand la machine devra choisir à notre place

Dans une situation où vous sacrifier permet de sauver plusieurs vies, la voiture autonome qui vous conduit doit-elle choisir de vous tuer&nbsp;?

[Une expérience sociologique](https://www.moralmachine.net) visant à donner une perspective humaine aux futures décisions morales des machines permet de se pencher sur ces décisions un peu glauques.

<br>

<div style="position:relative; width:640px; max-width:100%; height:480px; margin-left: auto; margin-right: auto;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<iframe width="640" height="480"  src="https://www.youtube.com/embed/XCO8ET66xE4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="max-width:100%"></iframe>
</div>


<br>

## Futur des IA et danger existentiel

<br>

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{< youtube 1WcpN4ds0iY >}}
</div>

<br>

Dans son livre *Superintelligence*, le philosophe Nick Bostrom explique que quel que soit l'objectif initial d'une IA largement supérieure à l'intelligence humaine (une superintelligence), l'éradication de l'humanité peut se présenter comme un effet secondaire.

Pour illustrer cette idée, il utilise son célèbre exemple d'une IA dont le but est de maximiser la production de trombones&nbsp;:

>« Supposons que nous ayons une IA dont l'unique but soit de faire autant de trombones que possible. L'IA se rendra vite compte que ce serait bien mieux s'il n'y avait pas d'humains, parce que les humains pourraient décider de l'éteindre. Parce que si les humains le faisaient, il y aurait moins de trombones. De plus, le corps humain contient beaucoup d'atomes qui pourraient être transformés en trombones. L'avenir vers lequel l'IA essaierait de se diriger serait un futur avec beaucoup de trombones mais aucun humain. »

Vous pouvez incarner l'IA à la tête de l'usine de trombone dans [ce petit jeu en ligne](https://www.decisionproblem.com/paperclips/).

Bostrom considère que chercher à maîtriser une superintelligence n'est pas une solution viable, et qu'il faut aligner la superintelligence avec des valeurs morales de sorte qu'elle soit « fondamentalement de notre côté ».
