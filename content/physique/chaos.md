+++
title = "Chaos"
date = 2021-03-06T14:20:50+01:00
weight = 7
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


# Chaos

Au confin des maths et de la physique, une des plus belle chose qui soit&nbsp;: le **chaos** (avec son cheptel de fractales et d'attracteurs étranges). Le chaos n'a pas grand chose à voir avec son image "grand public" puisqu'il est finalement très organisé. Mais timide, il le cache bien...


{{< youtube-plus id="wkYMWw_NKoQ" ratio="16x9" width="800" shadow=true rounded=true >}}


L'intégration du système d'équations différentielles suivant donne le fameux attracteur de Lorenz avec sa forme caractéristique de papillon&nbsp;:
$$\begin{cases}x'=\sigma(y-x)\\\\y'=\rho x-y-xz\\\\z'=xy-\beta \end{cases}$$
Avec les valeurs de paramètres suivantes&nbsp;:
$$\begin{cases}\sigma = 3\\\\\rho = 26.5\\\\\beta = 1\end{cases}$$
et le point de départ $(x_0;y_0;z_0)=(0;1;1,05)$, cela donne&nbsp;:<br>

<script src="https://cdn.plot.ly/plotly-3.1.0.min.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<div id="lorenz-graph" class="plotly-graph-div" style="height:1000px; width:100%;"></div>

<script type="text/javascript">
  window.PlotlyConfig = {MathJaxConfig: 'local'};
  
  d3.csv("/data/lorenz.csv").then(function(data) {
      // Extraction des colonnes de données
      var x_data = data.map(row => parseFloat(row.x));
      var y_data = data.map(row => parseFloat(row.y));
      var z_data = data.map(row => parseFloat(row.z));

      var trace = {
          x: x_data,
          y: y_data,
          z: z_data,
          mode: 'lines',
          type: 'scatter3d',
          line: {
              color: 'darkblue',
              width: 2
          }
      };

      var layout = {
          scene: {
              xaxis: {showbackground: false, showticklabels: false, title: ''},
              yaxis: {showbackground: false, showticklabels: false, title: ''},
              zaxis: {showbackground: false, showticklabels: false, title: ''}
          },
          margin: {
              l: 0, r: 0, b: 0, t: 0
          }
      };

      Plotly.newPlot("lorenz-graph", [trace], layout);
  }).catch(function(error){
      console.error("Erreur lors du chargement des données CSV :", error);
  });
</script>


[Cet article](https://www.quantamagazine.org/the-hidden-heroines-of-chaos-20190520/) relate l'histore du chaos en tant qu'objet de recherche et insiste en particulier sur le rôle fondamental de deux programmeuses&nbsp;: Ellen Fetter et Margaret Hamilton. 

[![](https://www.quantamagazine.org/wp-content/uploads/2019/05/Women-of-Chaos-Timeline-REVISED-FINAL.jpg)](https://www.quantamagazine.org/the-hidden-heroines-of-chaos-20190520/)

<br>

Le livre <i>Nonlinear Dynamics and Chaos</i> de Steven Strogatz introduit le domaine de manière passionnante.

![](/strogatz.png?width=300px)

