+++
title = "Calcul des propositions"
date = 2021-03-06T14:20:50+01:00
weight = 1
chapter = true
+++

# Calcul des propositions

Le calcul des propositions est la plus simple des logiques&nbsp;: des affirmations élémentaires, vraies ou fausses, reliées entre elles par *non*, *et*, *ou*, *implique*. Son pouvoir expressif est limité, mais c'est sur ses fondations que se construisent toutes les logiques plus évoluées.

On le parcourt en trois temps&nbsp;: comment on **écrit** une formule, ce qu'elle **veut dire**, et comment on la **démontre** sans jamais regarder ce qu'elle veut dire. Tout l'enjeu est de faire coïncider ces deux derniers points&nbsp;: que ce qui est démontrable soit vrai, et que ce qui est vrai soit démontrable.

<br>

<div class="math-container">

<div class="math-grid">

<div class="math-card c-bleu">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><path d="M24 7L13 22" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M24 7L35 22" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M13 22L7 39" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M13 22L19 39" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><circle cx="24" cy="7" r="4.4" style="fill:var(--acc);stroke:#fff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><circle cx="13" cy="22" r="4" style="fill:var(--acc2);stroke:#fff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><circle cx="35" cy="22" r="4" style="fill:var(--acc2);stroke:#fff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><circle cx="7" cy="39" r="3.6" style="fill:#C9CFD7;stroke:#fff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/><circle cx="19" cy="39" r="3.6" style="fill:#C9CFD7;stroke:#fff;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round"/></svg></span>
<h3><a href="./syntaxe/">Syntaxe</a></h3>
</div>
<div class="carte-texte">L'alphabet et la grammaire&nbsp;: quels assemblages de symboles forment une formule&nbsp;?</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./syntaxe/#langage" class="math-btn">Langage</a>
  <a href="./syntaxe/#formules" class="math-btn">Formules</a>
  <a href="./syntaxe/#linéarisation-dune-formule" class="math-btn">Linéarisation</a>
</div>
</div>
</div>

<div class="math-card c-vert">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><rect x="5.0" y="5.0" width="11.5" height="7.5" rx="1.5" style="fill:#C9CFD7"/><rect x="5.0" y="14.5" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="5.0" y="24.0" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="5.0" y="33.5" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="18.5" y="5.0" width="11.5" height="7.5" rx="1.5" style="fill:#C9CFD7"/><rect x="18.5" y="14.5" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="18.5" y="24.0" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="18.5" y="33.5" width="11.5" height="7.5" rx="1.5" style="fill:#E3E7EC"/><rect x="32.0" y="5.0" width="11.5" height="7.5" rx="1.5" style="fill:#C9CFD7"/><rect x="32.0" y="14.5" width="11.5" height="7.5" rx="1.5" style="fill:var(--acc2)"/><rect x="32.0" y="24.0" width="11.5" height="7.5" rx="1.5" style="fill:var(--acc2)"/><rect x="32.0" y="33.5" width="11.5" height="7.5" rx="1.5" style="fill:var(--acc)"/></svg></span>
<h3><a href="./semantique/">Sémantique</a></h3>
</div>
<div class="carte-texte">Le sens&nbsp;: dans quels modèles une formule est-elle vraie&nbsp;?</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./semantique/#modèle" class="math-btn">Modèles</a>
  <a href="./semantique/#évaluation-des-formules" class="math-btn">Évaluation</a>
  <a href="./semantique/#formules-logiquement-équivalentes" class="math-btn">Équivalences</a>
  <a href="./semantique/#théorie-et-conséquence-sémantique" class="math-btn">Conséquence sémantique</a>
  <a href="./semantique/#jeux-dévaluation" class="math-btn">Jeux d'évaluation</a>
  <a href="./semantique/#table-de-vérité" class="math-btn">Tables de vérité</a>
  <a href="./semantique/#tautologies-et-contradictions" class="math-btn">Tautologies</a>
  <a href="./semantique/#formes-normales" class="math-btn">Formes normales</a>
  <a href="./semantique/#connecteurs-binaires-et-systèmes-complets-de-connecteurs" class="math-btn">Systèmes de connecteurs</a>
</div>
</div>
</div>

<div class="math-card c-orange">
<div class="math-card-head">
<span class="math-icon" aria-hidden="true"><svg class="il" viewBox="0 0 48 48"><path d="M4 14h18M26 14h18M9 28h30" style="fill:none;stroke:#4B5563;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M15 42h18" style="fill:none;stroke:var(--acc);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round"/><path d="M7 9h12" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M29 9h12" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><path d="M15 23h18" style="fill:none;stroke:#9AA3AE;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round"/><rect x="17" y="33" width="14" height="4" rx="2" style="fill:var(--acc)"/></svg></span>
<h3><a href="./preuve/">Preuve</a></h3>
</div>
<div class="carte-texte">Le calcul&nbsp;: démontrer en appliquant des règles, en logique classique, intuitionniste ou minimale.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./preuve/#les-systèmes-axiomatiques" class="math-btn">Systèmes axiomatiques</a>
  <a href="./preuve/#la-déduction-naturelle" class="math-btn">Déduction naturelle</a>
  <a href="./preuve/#les-modèles-de-kripke-du-calcul-des-propositions-intuitionniste" class="math-btn">Modèles de Kripke</a>
  <a href="./preuve/#le-calcul-des-séquents" class="math-btn">Calcul des séquents</a>
</div>
</div>
</div>

</div>

</div>

{{%notice type="info" round="true"%}}

<p style="font-size:1em;">Ces trois chapitres sont des notes de lecture du livre <i>La logique pas à pas</i> de Jacques Duparc.</p>

{{%/notice%}}
