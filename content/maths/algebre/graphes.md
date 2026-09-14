+++
title = "Graphes"
date = 2021-03-06T14:20:50+01:00
weight = 3
chapter = false
+++

<style>
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



# Graphes

{{%notice tip%}}
[**Cours sur les graphes**](https://info-tsi-vieljeux.github.io/semestre_2/graphes/) donné à des élèves de TSI1 en informatique.
{{%/notice%}}

## Jeu de Nim

Utilisation des graphes dans la théorie des jeux de Nim.

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube 2jahbr5wMHk>}}
</div>

<br>

## Combinatoire

Graphes et combinatoire

<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube U2ClKgKEoyo>}}
</div>

<br>


## Chemin hamiltonien

Petit jeu sur un graphe inventé par Hamilton. Le but est de trouver un <i>chemin hamiltonien</i> consistant à ne visiter qu'une seule fois chaque sommet avant de retourner au sommet initial. Il appela le jeu "The Icosian Game" car les 20 sommets forment un icosaèdre régulier. Si le challenge n'est pas suffisant, ajoutez à la ville de départ un, deux ou trois sommets avant de commencer à chercher le chemin.

<div style="position:relative; width:fit-content; max-width:100%; width:800px; margin:auto; text-align:center; aspect-ratio: 1.625;">

  <button id="resetButton" style="font-size:2em;margin-bottom:0.5em;">
    <i class="fa-solid fa-rotate-right"></i>
  </button>
  
  <br>

  <iframe id="monProgramme"
          src="/programmes/cheminhamiltonien.html"
          width="100%" height="100%"
          frameborder="0"
          allowfullscreen></iframe>

</div>

<style>
#resetButton {
  background: linear-gradient(135deg, #1C90F3, #167ad0);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 2px 12px 0px 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#resetButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

#resetButton:active {
  transform: scale(0.92);
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
}
</style>

<script>
document.getElementById("resetButton").onclick = function() {
    let iframe = document.getElementById("monProgramme");
    iframe.src = iframe.src;
};
</script>



