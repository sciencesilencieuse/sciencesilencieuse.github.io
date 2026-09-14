+++
title = "Maths"
date = 2021-03-06T14:20:50+01:00
weight = 3
chapter = true
+++

<style>
h2 {
  text-align: center;
}
table {
  border-collapse: collapse;
  border: 0;
}
td, th {
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
}
 #gris {
     border: 0;
  }
</style>


# Un peu de maths

<br>

<style>
  /* --- CONTENEUR GLOBAL --- */
  .math-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: #2c3e50;
    line-height: 1.5;
    max-width: 1200px;
    margin: 20px auto;
    -webkit-font-smoothing: antialiased;
  }

  /* --- GRILLE DE CARTES --- */
  .math-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .math-card {
    background: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
  }

  .math-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border-color: #3498db;
  }

  /* --- STYLE DES TITRES (Respecte le thème) --- */
  .math-card h3 {
    margin-top: 0;
    margin-bottom: 18px;
    font-size: 1.3rem;
    border-bottom: 2px solid #f0f2f5;
    padding-bottom: 10px;
  }

  .math-card h3 a {
    color: inherit;
    text-decoration: none;
  }

  /* --- STYLE DES CONTENEURS DE BOUTONS --- */
  .link-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;            /* Gère l'espace horizontal et vertical entre les boutons */
    margin-bottom: 15px;
  }

  /* --- STYLE DES SOUS-TITRES (ex: Nombres & Propriétés) --- */
  .theme-title {
    display: block;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #95a5a6;
    margin-top: 12px;    /* Crée une coupure visuelle propre sous le premier groupe de boutons */
    margin-bottom: 6px;
    width: 100%;
  }

  /* --- STYLE DES BOUTONS (Centrage mathématique absolu) --- */
  .math-btn {
    display: inline-block;
    box-sizing: border-box !important; /* Force le navigateur à inclure la bordure dans le calcul */
    
    height: 32px !important;           /* Hauteur totale du bouton */
    line-height: 30px !important;      /* 32px moins les 2px de bordures (haut+bas) */
    padding: 0 12px !important;        /* Strictement AUCUN padding vertical pour ne rien fausser */
    
    vertical-align: middle;      
    background: #f8f9fa;
    border: 1px solid #dcdde1;
    border-radius: 6px;
    font-size: 0.88rem;
    color: #34495e !important;
    text-decoration: none !important;
    border-bottom: none !important;   
    box-shadow: none !important;      
    transition: all 0.2s ease-in-out !important;
    position: relative;
  }
  
  
  /* Suppression des barres animées des thèmes Hugo (pseudo-éléments) */
  .math-btn::after, .math-btn::before {
    display: none !important;
    content: none !important;
  }

  .math-btn:hover {
    background: #3498db !important;
    color: #ffffff !important;
    border-color: #2980b9 !important;
    text-decoration: none !important;
  }

  /* --- SOMMAIRE COMPACT --- */
  .math-footer-list {
    background: #fdfdfd;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 25px;
    margin-top: 40px;
  }

  .math-footer-list h2 { margin-top: 0; font-size: 1.4rem; color: #7f8c8d; }

  .dl-math dt {
    font-weight: bold;
    color: #2c3e50;
    margin-top: 15px;
    font-size: 1.05rem;
  }

  .dl-math dd {
    margin-left: 0;
    margin-top: 5px;
    border-left: 3px solid #3498db;
    padding-left: 15px;
    line-height: 1.8;
  }

  .dl-math a {
    color: #34495e;
    text-decoration: underline;
    margin-right: 8px;
    font-size: 0.95rem;
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 600px) {
    .math-grid { grid-template-columns: 1fr; }
    .math-container { padding: 10px; }
  }
</style>

<div class="math-container">

<div class="math-grid">

<div class="math-card">
<h3><a href="./fondements/">Fondements</a></h3>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./fondements/boole/" class="math-btn">Algèbre de Boole</a>
  <a href="./fondements/ensembles/" class="math-btn">Échafaudage des nombres</a>
  <a href="./fondements/infinis/" class="math-btn">Les Infinis (Cantor)</a>

</div>
</div>
</div>

<div class="math-card">
<h3><a href="./arithmetique/">Arithmétique</a></h3>
<div class="theme-subgroup">
<span class="theme-title">Nombres & Propriétés</span>
<div class="link-list">
  <a href="./arithmetique/numeration" class="math-btn">Numération</a>
    <a href="./arithmetique/complexes/" class="math-btn">Nombres complexes</a>
  <a href="./arithmetique/complexes/#nombre-algébriques" class="math-btn">Nombres algébriques</a>
  <a href="./arithmetique/nombresapart/#divisibilité-et-nombres-premiers" class="math-btn">Nombres premiers</a>
  <a href="./arithmetique/complexes/#triplets-pythagoriciens" class="math-btn">Triplets pythagoriciens</a>
    <a href="./arithmetique/nombresapart/#nombre-dor" class="math-btn">Nombre d'or</a>
</div>
</div>
<div class="theme-subgroup">
<span class="theme-title">Algorithmes</span>
<div class="link-list">
  <a href="./arithmetique/nombresapart/#algorithme-deuclide" class="math-btn">Euclide</a>
  <a href="./arithmetique/nombresapart/#fractions-continues" class="math-btn">Fractions continues</a>
</div>
</div>
</div>

<div class="math-card">
<h3><a href="./algebre/">Algèbre</a></h3>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./algebre/equations" class="math-btn">Équations</a>
  <a href="./algebre/lineaire" class="math-btn">Algèbre linéaire</a>
  <a href="./algebre/groupes/" class="math-btn">Théorie des groupes</a>
  <a href="./algebre/graphes" class="math-btn">Graphes</a>
  <a href="./algebre/fft" class="math-btn">FFT & Polynômes</a>
</div>
</div>
</div>

<div class="math-card">
<h3><a href="./geometrie/">Géométrie</a></h3>
<div class="theme-subgroup">
<span class="theme-title">Le Triangle & Cercle</span>
<div class="link-list">
  <a href="./geometrie/geo1/#pythagore" class="math-btn">Pythagore</a>
  <a href="./geometrie/geo1/#thalès" class="math-btn">Thalès</a>
  <a href="./geometrie/geo1/#droite-deuler" class="math-btn">Euler</a>
  <a href="./geometrie/geo2/#trigonométrie" class="math-btn">Trigonométrie</a>
  <a href="./geometrie/geo2/#théorème-de-langle-inscrit-et-de-langle-au-centre" class="math-btn">Angle inscrit</a>
</div>
</div>
<div class="theme-subgroup">
<span class="theme-title">Espace & Analyse</span>
<div class="link-list">
  <a href="./geometrie/geo3" class="math-btn">Aires & Volumes</a>
  <a href="./geometrie/geo4" class="math-btn">Dimensions</a>
  <a href="./geometrie/geo5" class="math-btn">Poursuites</a>
</div>
</div>
</div>

<div class="math-card">
<h3><a href="./proba/">Probabilités</a></h3>
<div class="theme-subgroup">
<span class="theme-title">Lois & Modèles</span>
<div class="link-list">
  <a href="./proba/#loi-binomiale" class="math-btn">Binomiale</a>
  <a href="./proba/#loi-normale" class="math-btn">Normale</a>
  <a href="./proba/#densité-de-probabilités" class="math-btn">Densité</a>
  <a href="./proba/#probabilités-conditionnelles-et-bayes" class="math-btn">Bayes</a>
  <a href="./proba/#chaînes-de-markov" class="math-btn">Markov</a>
</div>
</div>
<div class="theme-subgroup">
<span class="theme-title">Curiosités</span>
<div class="link-list">
  <a href="./proba/#spaghetti-et-inégalité-triangulaire" class="math-btn">Spaghetti</a>
  <a href="./proba/#anniversaires-simultanés" class="math-btn">Anniversaires</a>
  <a href="./proba/#paradoxe-des-deux-enfants" class="math-btn">2 Enfants</a>
  <a href="./proba/#paradoxe-de-cover" class="math-btn">Cover</a>
</div>
</div>
</div>

<div class="math-card">
<h3><a href="./stat/">Statistiques</a></h3>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./stat/moyennes" class="math-btn">Moyennes</a>
  <a href="./stat/ecarttype" class="math-btn">Écart-type</a>
  <a href="./stat/testhyp" class="math-btn">Test d'hypothèse</a>
  <a href="./stat/montecarlo" class="math-btn">Monte Carlo</a>
  <a href="./stat/simpson" class="math-btn">Simpson</a>
  <a href="./stat/acp/" class="math-btn">ACP</a>
  <a href="./stat/bayes" class="math-btn">Inférence bayésienne</a>
</div>
</div>
</div>

<div class="math-card">
<h3><a href="./jeux/">Théorie des jeux</a></h3>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./jeux/" class="math-btn">Attaque / Défense</a>
</div>
</div>
</div>

</div>



