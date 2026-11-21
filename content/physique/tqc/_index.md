+++
title = "Théorie quantique des champs"
date = 2021-03-06T14:20:50+01:00
weight = 5
chapter = true
hidden = false
+++

<style>
h2{
text-align:center;
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
  #cadre
{
    background-color:#FCF8E3;
    border-radius:10px;
    border: solid 5px #DED6C6;
    padding:5px 20px 5px 20px;
}
p {
font-size:1em !important;
}
</style>



# Théorie quantique des champs


<p style="font-size:1.2em !important;color:grey;">
<i>"Particules et ondes ne sont que les excitations d'un champ quantique s'étendant dans l'espace-temps."</i>
</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;margin-bottom:-0em;margin-top:0em;">
<img src="/vanfeynman.png" style="box-shadow:none;background:none;border-radius:15px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
</div>

La théorie quantique des champs (TQC) est considérée à ce jour comme la meilleure (à défaut d'être l'ultime) théorie explicative de l'univers qui nous entoure.<br>C'est à la fois la théorie testée avec la plus grande précision 😎, mais aussi celle qui a produit le plus grand écart entre théorie et expérience 😱 (catastrophe du vide).

<br>


<div class="math-container">

<div class="math-grid">

<div class="math-card c-bleu">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv66" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><path d="M17 35h14M12 27h24M9 19h30M7 11h34" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g mask="url(#pv66)"><path d="M5 4c2 24 9 38 19 38S41 28 43 4z"/></g></svg></span>
<h3><a href="./oh/">Oscillateur harmonique</a></h3>
</div>
<div class="carte-texte">L'objet central de la théorie&nbsp;: quantification, opérateurs d'échelle, et l'intuition d'une rotation dans l'espace des phases.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./oh/#point-de-départ" class="math-btn">Point de départ</a>
  <a href="./oh/#le-flot-classique-est-une-rotation-rigide" class="math-btn">Une rotation rigide</a>
  <a href="./oh/#a-et-adagger-sont-les-modes-propres-de-la-rotation" class="math-btn">Opérateurs a et a†</a>
  <a href="./oh/#le-spectre" class="math-btn">Le spectre</a>
  <a href="./oh/#lhorloge-interne" class="math-btn">L'horloge interne</a>
  <a href="./oh/#la-représentation-de-bargmann" class="math-btn">Représentation de Bargmann</a>
  <a href="./oh/#bilan" class="math-btn">Bilan</a>
</div>
</div>
</div>

<div class="math-card c-canard">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv67" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><path d="M24 12v31" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 17c4-1 8-1 11 1M8 24c4-1 8-1 11 1M29 18c3-2 7-2 11-1M29 25c3-2 7-2 11-1" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g mask="url(#pv67)"><path d="M3 9c7-3 14-2 21 3 7-5 14-6 21-3v31c-7-3-14-2-21 3-7-5-14-6-21-3z"/></g></svg></span>
<h3><a href="./gifted_amateur/">Notes de lecture</a></h3>
</div>
<div class="carte-texte">Le livre de Lancaster et Blundell, <i>Quantum Field Theory for the Gifted Amateur</i>, parcouru partie par partie.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./gifted_amateur/tqc0/#lagrangien-et-principe-de-moindre-action" class="math-btn">Lagrangien</a>
  <a href="./gifted_amateur/tqc1/#seconde-quantification" class="math-btn">Seconde quantification</a>
  <a href="./gifted_amateur/tqc3/#symétrie" class="math-btn">Théorème de Noether</a>
  <a href="./gifted_amateur/tqc7/#les-diagrammes-de-feynman" class="math-btn">Diagrammes de Feynman</a>
  <a href="./gifted_amateur/tqc9/#lintégrale-de-chemin-toutes-les-histoires-à-la-fois" class="math-btn">Intégrales de chemin</a>
  <a href="./gifted_amateur/tqc11/#le-groupe-de-renormalisation" class="math-btn">Renormalisation</a>
  <a href="./gifted_amateur/tqc13/#léquation-de-dirac" class="math-btn">Équation de Dirac</a>
  <a href="./gifted_amateur/tqc17/#le-modèle-de-weinbergsalam" class="math-btn">Weinberg-Salam</a>
</div>
</div>
</div>

<div class="math-card c-vert">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv68" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><circle cx="16" cy="24" r="5.6" fill="none" stroke="#000" stroke-width="2"/><circle cx="32" cy="24" r="5.6" fill="none" stroke="#000" stroke-width="2"/></mask></defs><g mask="url(#pv68)"><path d="M4 8l12 16L4 40M44 8L32 24l12 16" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 11.5l1.2 6-5.6-2.4zM39.5 11.5l-1.2 6 5.6-2.4z"/><path d="M16 24q2-5.5 4 0t4 0 4 0 4 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="24" r="4.2"/><circle cx="32" cy="24" r="4.2"/></g></svg></span>
<h3><a href="./qed-light/">La lumière selon Feynman</a></h3>
</div>
<div class="carte-texte">D'après son petit livre <i>QED</i>&nbsp;: l'électrodynamique quantique racontée avec des flèches qui tournent.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./qed-light/#long-préalable--des-flèches-qui-tournent" class="math-btn">Des flèches qui tournent</a>
  <a href="./qed-light/#propagation-rectiligne-de-la-lumière" class="math-btn">Propagation rectiligne</a>
  <a href="./qed-light/#diffraction" class="math-btn">Diffraction</a>
  <a href="./qed-light/#ralentissement-de-la-lumière-dans-le-verre" class="math-btn">Ralentissement dans le verre</a>
  <a href="./qed-light/#réflexion-vitreuse-1" class="math-btn">Réflexion vitreuse</a>
</div>
</div>
</div>

</div>

</div>

## Pour aller plus loin

- Un [chouette article](https://www.quantamagazine.org/a-new-map-of-the-standard-model-of-particle-physics-20201022/) de *Quanta Magazine* qui résume et illustre le **modèle standard** des particules, dont la structure repose sur la théorie quantique des champs&nbsp;: l'état actuel de notre compréhension du monde.
- Un [génial article](https://arxiv.org/pdf/1410.6753) de Maldacena qui explique les **théories de jauge** par analogie avec l'arbitrage de devises.

[![](https://www.quantamagazine.org/wp-content/uploads/2020/10/SM_graphic-FINAL_T02.svg)](https://www.quantamagazine.org/a-new-map-of-the-standard-model-of-particle-physics-20201022/)
