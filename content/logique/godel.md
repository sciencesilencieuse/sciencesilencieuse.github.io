+++
title = "Logique modale"
date = 2021-03-06T14:20:50+01:00
weight = 3
hidden = true
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
  td, th {
  text-align: center;
  vertical-align: middle;
  min-width: 3em;
}
#grosseformule 
{
    overflow-x: auto; 
  }
</style>



Il y a différentes logiques de la prouvabilité dont celle de Gödel-Löb. $\Box\phi$ y est interprétée comme "la formule $\phi$ est prouvable".<br>

Toute formule peut être codée par un entier (il suffit par exemple de regarder le code binaire du fichier de traitement de texte où cette formule est écrite et d'ajouter "1" à gauche du code pour éviter la perte éventuelle de zéros non significatifs). De même, on peut coder un arbre de preuve (puisqu'il peut lui-même s'écrire avec un logiciel de traitement de texte). Dès lors, une formule peut très bien parler du fait qu'une autre formule est démontrable puisqu'il s'agit de dire qu'il existe un entier possédant les propriétés qui le caractérisent comme étant le code d'une preuve de cette formule. C'est ce que fait la formule $\Box\phi$.

L'arithmétique de Peano $\text{PA}$ est une théorie - ensemble d'axiomes - en logique du premier ordre dont l'arithmétique des entiers est un modèle. 
L'idée d'associer un nombre entier à une formule ou à une preuve a permis à Gödel d'injecter dans la théorie de l'arithmétique des déclarations sur la théorie elle-même. Les nombres gagnent ainsi la capacité méta de parler d'eux-mêmes. 

<div style="position:relative;width:500px;max-width:100%;margin-right:auto;margin-left:auto;border-radius:10px">
<img src="/godprouve.png" style="border-radius:10px;">
</div>

Le **premier théorème d'incomplétude de Gödel** s'appuie sur une formule affirmant sa propre non prouvabilité $\neg\Box\phi\leftrightarrow \phi$. Si on peut démontrer la formule $\neg\Box\phi\leftrightarrow \phi$ dans un système donné, alors on prouve qu'il existe une formule non démontrable et pourtant vraie, ce qui impose l'incomplétude du système.

La démonstration de Gödel est un impresssionnant tour de force de 30 pages, mais elle devient bien plus triviale avec la notion de machine de Turing. La plupart des langages de programmation (comme Python) sont Turing-complet, ce qui signifie qu'ils sont équivalents à une machine de Turing universelle capable de calculer tout ce qui est calculable. Or Turing a aussi découvert ce qu'une telle machine ne sait pas faire&nbsp;: déterminer (en un temps fini) si un programme (une suite d'instructions) va tourner à l'infini ou finir par s'arrêter. C'est le **problème de l'arrêt**.

<div id="preuve">
Pour prouver qu'aucun programme ne peut résoudre le problème de l'arrêt, Turing a raisonné par l'absurde&nbsp;:<br>
supposons qu'un tel programme $\text{P}$ existe. <br>
On peut alors construire un programme $\text{P'}$ à partir de $\text{P}$ qui, lorsqu'on lui fournit le code d'un programme $\text{Q}$ en entrée
</div>

<div id="theo">

Le <b>théorème de Löb</b> stipule que les formules dont on peut prouver que $\Box\phi\rightarrow\phi$ sont les formules prouvables&nbsp;: 
<div style="position:relative;width:fit-content;margin-right:auto;margin-left:auto">
$\Box(\Box\phi\rightarrow\phi)\rightarrow\Box\phi$.
</div>
<br>
</div>

La logique de la prouvabilité de Gödel-Löb consiste à partir du système $\text{\bf K}$ (d'ailleurs la formule $\text{K}$ ne décrit ici rien d'autre que le *modus ponens*&nbsp;; si j'ai une preuve de $\phi\rightarrow\psi$ et une preuve de $\phi$, alors j'ai une preuve de $\psi$) auquel on ajoute l'axiome $\text{(4)}=\Box P\rightarrow \Box\Box P$ (si j'ai une preuve de $P$, alors j'ai une preuve du fait que j'ai une preuve de $P$) ainsi que le théorème de Löb ($\text{L}$).


<div id="theo">

En appelant $\mathscr{C}_{tr.,b.d.}$ la classe des modèles de Kripke à la fois transitifs et bornés à droite (sans suite infinie de mondes), alors on a le résultat suivant&nbsp;:
<div style="position:relative;width:fit-content;margin-right:auto;margin-left:auto">
$ \Gamma\vdash_\text{\bf GL} \phi$ si et seulement si $\Gamma\Vdash_{\mathscr{C}_{tr.,b.d.}}\phi$
</div>
<br>
</div>