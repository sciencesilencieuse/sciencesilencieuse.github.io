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
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv26" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><circle cx="24" cy="7" r="5.999999999999999" fill="none" stroke="#000" stroke-width="2.2"/><circle cx="13" cy="22" r="5.6000000000000005" fill="none" stroke="#000" stroke-width="2.2"/><circle cx="35" cy="22" r="5.6000000000000005" fill="none" stroke="#000" stroke-width="2.2"/><circle cx="7" cy="39" r="5.2" fill="none" stroke="#000" stroke-width="2.2"/><circle cx="19" cy="39" r="5.2" fill="none" stroke="#000" stroke-width="2.2"/><circle cx="24" cy="7" r="2.3" fill="#000"/><circle cx="13" cy="22" r="1.9000000000000004" fill="#000"/></mask></defs><g mask="url(#pv26)"><path d="M24 7L13 22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 7L35 22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22L7 39" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22L19 39" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="7" r="4.6"/><circle cx="13" cy="22" r="4.2"/><circle cx="35" cy="22" r="4.2"/><circle cx="7" cy="39" r="3.8"/><circle cx="19" cy="39" r="3.8"/></g></svg></span>
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
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv27" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><path d="M16 12v24M16 20h17M16 28h17" fill="none" stroke="#000" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g mask="url(#pv27)"><rect x="4" y="4" width="40" height="40" rx="11"/></g></svg></span>
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
<span class="math-icon" aria-hidden="true"><svg class="pv" viewBox="0 0 48 48"><defs><mask id="pv28" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48"><rect width="48" height="48" fill="#fff"/><path d="M16 12v24M16 24h17" fill="none" stroke="#000" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g mask="url(#pv28)"><rect x="4" y="4" width="40" height="40" rx="11"/></g></svg></span>
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
