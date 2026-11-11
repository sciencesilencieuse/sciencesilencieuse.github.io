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
  /* Cartes de largeur fixe qui passent à la ligne ; chaque ligne est centrée,
     y compris la dernière quand elle est incomplète. */
  .math-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px;
    margin-bottom: 40px;
  }

  /* Chaque carte porte sa couleur d'accent --c.
     Pour changer la couleur d'un domaine, modifier seulement cette valeur. */
  .math-card         { --c: #1864ab; }
  .card-fondements   { --c: #5f3dc4; }
  .card-arithmetique { --c: #c9400c; }
  .card-algebre      { --c: #1864ab; }
  .card-geometrie    { --c: #2b8a3e; }
  .card-proba        { --c: #c2255c; }
  .card-stat         { --c: #0b7285; }
  .card-jeux         { --c: #b35c00; }

  .math-card {
    flex: 0 1 350px;
    box-sizing: border-box;
    min-width: 0;
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 10px;
    padding: 28px 22px 14px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .math-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(16, 24, 40, 0.12);
    border-color: var(--c);
  }

  /* --- EN-TÊTE DE CARTE : pictogramme, titre, trait d'accent --- */
  .math-card-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    margin-bottom: 22px;
  }

  .math-icon {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--c);
    color: #ffffff;
    transition: transform 0.25s ease;
  }

  .math-icon svg {
    width: 36px;
    height: 36px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .math-icon .plein  { fill: currentColor; stroke: none; }
  .math-icon .teinte { fill: currentColor; fill-opacity: 0.28; }
  .math-icon .leger  { stroke-opacity: 0.6; }
  .math-icon .creux  { fill: var(--c); }

  .math-card:hover .math-icon { transform: scale(1.08); }

  .math-card h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.45rem;
    font-weight: 400;
    text-align: center;
  }

  .math-card h3::after {
    content: "";
    display: block;
    width: 34px;
    height: 3px;
    margin: 12px auto 0;
    border-radius: 2px;
    background: var(--c);
    transition: width 0.25s ease;
  }
  .math-card:hover h3::after { width: 64px; }

  .math-card h3 a,
  .math-card h3 a:hover {
    color: #1f2933 !important;
    text-decoration: none !important;
  }

  /* --- STYLE DES CONTENEURS DE BOUTONS --- */
  .link-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;            /* Gère l'espace horizontal et vertical entre les boutons */
    margin-bottom: 16px;
  }

  /* --- STYLE DES SOUS-TITRES (ex: Nombres & Propriétés) : centrés entre deux filets --- */
  .theme-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 0.72rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b7280;
    margin-top: 4px;
    margin-bottom: 12px;
    width: 100%;
  }
  .theme-title::before,
  .theme-title::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e2e5ea;
  }

  /* --- STYLE DES BOUTONS (Centrage mathématique absolu) --- */
  .math-btn {
    display: inline-block;
    box-sizing: border-box !important; /* Force le navigateur à inclure la bordure dans le calcul */

    height: 32px !important;           /* Hauteur totale du bouton */
    line-height: 30px !important;      /* 32px moins les 2px de bordures (haut+bas) */
    padding: 0 12px !important;        /* Strictement AUCUN padding vertical pour ne rien fausser */

    vertical-align: middle;
    background: #ffffff;
    border: 1px solid #d3d8df !important;
    border-radius: 7px;
    font-size: 0.88rem;
    color: #1f2933 !important;
    text-decoration: none !important;
    box-shadow: none !important;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease !important;
    position: relative;
  }

  /* Suppression des barres animées des thèmes Hugo (pseudo-éléments) */
  .math-btn::after, .math-btn::before {
    display: none !important;
    content: none !important;
  }

  .math-btn:hover,
  .math-btn:focus-visible {
    background: var(--c) !important;
    border-color: var(--c) !important;
    color: #ffffff !important;
    text-decoration: none !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .math-card, .math-icon, .math-btn, .math-card h3::after { transition: none !important; }
    .math-card:hover, .math-card:hover .math-icon { transform: none; }
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

<div class="math-card card-fondements">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle class="teinte" cx="18" cy="24" r="12"/><circle class="teinte" cx="30" cy="24" r="12"/></svg></span>
<h3><a href="./fondements/">Fondements</a></h3>
</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./fondements/boole/" class="math-btn">Algèbre de Boole</a>
  <a href="./fondements/ensembles/" class="math-btn">Échafaudage des nombres</a>
  <a href="./fondements/infinis/" class="math-btn">Les Infinis (Cantor)</a>

</div>
</div>
</div>

<div class="math-card card-arithmetique">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle class="leger" cx="12" cy="12" r="4.2"/><circle class="plein" cx="24" cy="12" r="4.6"/><circle class="plein" cx="36" cy="12" r="4.6"/><circle class="leger" cx="12" cy="24" r="4.2"/><circle class="plein" cx="24" cy="24" r="4.6"/><circle class="leger" cx="36" cy="24" r="4.2"/><circle class="plein" cx="12" cy="36" r="4.6"/><circle class="leger" cx="24" cy="36" r="4.2"/><circle class="leger" cx="36" cy="36" r="4.2"/></svg></span>
<h3><a href="./arithmetique/">Arithmétique</a></h3>
</div>
<div class="theme-subgroup">
<span class="theme-title">Nombres & Propriétés</span>
<div class="link-list">
  <a href="./arithmetique/numeration" class="math-btn">Numération</a>
    <a href="./arithmetique/complexes/" class="math-btn">Nombres complexes</a>
  <a href="./arithmetique/complexes/#entiers-algébriques" class="math-btn">Nombres algébriques</a>
  <a href="./arithmetique/nombresapart/#divisibilité-et-nombres-premiers" class="math-btn">Nombres premiers</a>
  <a href="./arithmetique/complexes/#triplets-pythagoriciens" class="math-btn">Triplets pythagoriciens</a>
    <a href="./arithmetique/nombresapart/#nombre-dor" class="math-btn">Nombre d'or</a>
    <a href="./arithmetique/exponentielle/" class="math-btn">Le nombre e</a>
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

<div class="math-card card-algebre">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M14 8H8v32h6"/><path d="M34 8h6v32h-6"/><circle class="plein" cx="18" cy="18" r="3.2"/><circle class="leger" cx="30" cy="18" r="2.6"/><circle class="leger" cx="18" cy="30" r="2.6"/><circle class="plein" cx="30" cy="30" r="3.2"/></svg></span>
<h3><a href="./algebre/">Algèbre</a></h3>
</div>
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

<div class="math-card card-geometrie">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="17"/><path class="teinte" d="M7 24h34L15.5 9.3z"/></svg></span>
<h3><a href="./geometrie/">Géométrie</a></h3>
</div>
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
  <a href="./geometrie/simplexes/" class="math-btn">Simplexes</a>
  <a href="./geometrie/geo5" class="math-btn">Poursuites</a>
</div>
</div>
</div>

<div class="math-card card-proba">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path class="teinte" stroke="none" d="M5 37c11 0 12-27 19-27s8 27 19 27z"/><path d="M5 37c11 0 12-27 19-27s8 27 19 27"/><path class="leger" d="M4 41h40"/></svg></span>
<h3><a href="./proba/">Probabilités</a></h3>
</div>
<div class="theme-subgroup">
<span class="theme-title">Lois & Modèles</span>
<div class="link-list">
  <a href="./proba/lois/#loi-binomiale" class="math-btn">Binomiale</a>
  <a href="./proba/lois/#loi-normale" class="math-btn">Normale</a>
  <a href="./proba/lois/#densité-de-probabilités" class="math-btn">Densité</a>
  <a href="./proba/markov" class="math-btn">Markov</a>
</div>
</div>
<div class="theme-subgroup">
<span class="theme-title">Curiosités</span>
<div class="link-list">
  <a href="./proba/curiosites/#spaghetti-et-inégalité-triangulaire" class="math-btn">Spaghetti</a>
  <a href="./proba/curiosites/#anniversaires-simultanés" class="math-btn">Anniversaires</a>
  <a href="./proba/curiosites/#paradoxe-des-deux-enfants" class="math-btn">2 Enfants</a>
  <a href="./proba/curiosites/#paradoxe-de-cover" class="math-btn">Cover</a>
  <a href="./proba/simplexes_proba/" class="math-btn">Simplexes &amp; e</a>
</div>
</div>
</div>

<div class="math-card card-stat">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><rect class="teinte" x="7" y="25" width="8" height="15" rx="1.5"/><rect class="teinte" x="20" y="11" width="8" height="29" rx="1.5"/><rect class="teinte" x="33" y="19" width="8" height="21" rx="1.5"/><path class="leger" d="M4 40h40"/></svg></span>
<h3><a href="./stat/">Statistiques</a></h3>
</div>
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

<div class="math-card card-jeux">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg viewBox="0 0 48 48"><path class="leger" d="M24 10L13 24M24 10l11 14M13 24L7 38M13 24l6 14M35 24v14"/><circle class="plein" cx="24" cy="10" r="4.2"/><circle cx="13" cy="24" class="creux" r="3.8"/><circle cx="35" cy="24" class="creux" r="3.8"/><circle class="plein" cx="7" cy="38" r="3.6"/><circle class="plein" cx="19" cy="38" r="3.6"/><circle class="plein" cx="35" cy="38" r="3.6"/></svg></span>
<h3><a href="./jeux/">Théorie des jeux</a></h3>
</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./jeux/" class="math-btn">Attaque / Défense</a>
</div>
</div>
</div>

</div>



