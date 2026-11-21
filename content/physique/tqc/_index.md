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
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><path d="M6 4c2 25 9 39 18 39S40 29 42 4" style="fill:none;stroke:#4B5563;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M15 35h18M11 27h26M8.5 19h31" style="fill:none;stroke:#C9CFD7;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M7 11h34" style="fill:none;stroke:var(--acc);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"/><path d="M13 31c3-4 6 4 11 0s8 4 11 0" style="fill:none;stroke:var(--acc2);stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/></svg></span>
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
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><path d="M3 10c7-3 14-2 21 3 7-5 14-6 21-3v30c-7-3-14-2-21 3-7-5-14-6-21-3z" style="fill:#E3E7EC;stroke:#9AA3AE;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><path d="M24 13v30" style="fill:none;stroke:#9AA3AE;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><path d="M8 18c4-1 8-1 11 1M8 25c4-1 8-1 11 1M29 19c3-2 7-2 11-1M29 26c3-2 7-2 11-1" style="fill:none;stroke:#9AA3AE;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><path d="M33 7h6v14l-3-2.5-3 2.5z" style="fill:var(--acc)"/></svg></span>
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
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><path d="M8 42L13.6 40.5" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M16.7 39.7L14.1 42.2L13.2 38.8z" style="fill:var(--acc2)"/><path d="M16.7 39.7L21.0 35.7" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M23.3 33.5L22.2 37.0L19.8 34.4z" style="fill:var(--acc2)"/><path d="M23.3 33.5L25.2 28.0" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M26.2 25.0L26.8 28.6L23.5 27.5z" style="fill:var(--acc2)"/><path d="M26.2 25.0L25.3 19.3" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M24.8 16.1L27.0 19.0L23.6 19.5z" style="fill:var(--acc2)"/><path d="M24.8 16.1L21.3 11.5" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M19.4 8.9L22.7 10.4L19.9 12.5z" style="fill:var(--acc2)"/><path d="M19.4 8.9L14.1 6.4" style="fill:none;stroke:var(--acc2);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M11.2 5.1L14.8 4.8L13.4 8.0z" style="fill:var(--acc2)"/><path d="M8 42L10.8 10.1" style="fill:none;stroke:var(--acc);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M11.2 5.1L13.5 10.3L8.0 9.8z" style="fill:var(--acc)"/><circle cx="8" cy="42" r="2" style="fill:#4B5563"/></svg></span>
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
