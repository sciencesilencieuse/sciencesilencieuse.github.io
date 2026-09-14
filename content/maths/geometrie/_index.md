+++
title = "Géométrie"
date = 2021-03-06T14:20:50+01:00
weight = 2
chapter = false
+++

<style>
h2{
text-align:center;
}
</style>


# Géométrie

La géométrie est avec l'arithmétique une des plus vieilles branches des mathématiques (l'arithmétique pour tenir les comptes et la géométrie pour mesurer les terres).

Géométrie et physique sont intimement liées. Le développement de la géométrie a en partie été poussé par les questionnements des astronomes (sur la position des astres, leur mouvement, leur taille, leur distance, etc.) et des ingénieurs (pour construire des trucs qui tiennent debout). Et une explication géométrique des lois fondamentales de l'univers attire toujours certains chercheurs, plus de 2000 ans après Platon.

<div style="overflow-x: auto;font-size:1.2em;">
<table>
  <tr>
    <th style="text-align:center;"><a href="./geo1/" style="color:#00A2FF;">Triangle</a><br>
<ul style="font-size:1em;color:#00A2FF;text-align:left;font-weight:normal;display:inline-block;">
    <li>Pythagore</li>
    <li>Thalès</li>
    <li>Droite d'Euler</li>
    </ul>
    </th>
    <td style="width:40%;"> <a href="./geo1/"><img src="/prestriangle.png"  style="box-shadow:none;background:none;max-width:100%;margin:auto;max-height:6.5lh; object-fit:contain;"></a></td>
  </tr>
    <tr>
    <th style="text-align:center;"><a href="./geo2/" style="color:#FEAE00;">Cercle et triangle</a><br>
    <ul style="font-size:1em;color:#FEAE00;text-align:left;font-weight:normal;display:inline-block;">
    <li>Trigonométrie </li>
    <li>Angles inscrits</li>
    <li>Théorème de La Hire</li>
    </ul></th>
    <td style="width:40%;"> <a href="./geo2/"><img src="/prescercle.png" style="box-shadow:none;background:none;max-width100%;margin:auto;max-height:6.5lh; object-fit:contain;"></a></td>
  </tr>
    <tr>
    <th style="text-align:center;"><a href="./geo3/" style="color:#1DB100;">Aires et Volumes</a><br></th>
    <td style="width:40%;"> <a href="./geo3/"><img src="/presaire.png" style="box-shadow:none;background:none;max-width:100%;margin:auto;max-height:6.5lh; object-fit:contain;"></a></td>
  </tr>
      <tr>
    <th style="text-align:center;"><a href="./geo4/" style="color:#D41876;">Curse of dimensionality</a></th>
    <td style="width:40%;"> <a href="./geo4/"><img src="/presdim.png" style="box-shadow:none;background:none;max-width:100%;margin:auto;max-height:6.5lh; object-fit:contain;"></a></td>
  </tr>
        <tr>
    <th style="text-align:center;"><a href="./geo5/" style="color:#FF644E;"> Poursuites </a></th>
    <td style="width:40%;"> <a href="./geo5/"><img src="/prespoursuite.png" style="box-shadow:none;background:none;max-width:100%;margin:auto;max-height:6.5lh; object-fit:contain;"></a></td>
  </tr>
</table>
</div>



<!--
<div id="canvasContainer" style="width: 100%; max-width: 1000px; margin: auto;">
    <canvas id="myCanvas"></canvas>
</div>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var v = 3;
var dt = 2;
var colors = ['#FF0000', '#0000FF'];
var colorIndex = 0;
var delay = 0, delayMax = 3;
var maxIterations = 100;
var reversing = false;
var states = [];
var initialPositions = [];
var animationFrameId = null;

function resizeCanvas() {
    // Annuler l'animation en cours pour éviter les doubles appels
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
    }

    canvas.width = document.getElementById('canvasContainer').clientWidth;
    canvas.height = canvas.width * 0.75;
    initialPositions = [
        [canvas.width * 0.0, canvas.height * 0.0],
        [canvas.width * 1.0, canvas.height * 0.0],
        [canvas.width * 0.5, canvas.height * 1.0]
    ];
    resetAnimation();
    draw();
}

function resetAnimation() {
    states = [];
    reversing = false;
    colorIndex = 0;
    delay = 0;
    points = initialPositions.map(p => [...p]);
}

function updatePositions(points) {
    return points.map((point, i, arr) => {
        var direction = [arr[(i + 1) % arr.length][0] - point[0], arr[(i + 1) % arr.length][1] - point[1]];
        var distance = Math.sqrt(direction[0] ** 2 + direction[1] ** 2);
        direction = [direction[0] / distance, direction[1] / distance];
        return [point[0] + direction[0] * v * dt, point[1] + direction[1] * v * dt];
    });
}

function draw() {
    delay++;
    if (delay < delayMax) {
        animationFrameId = requestAnimationFrame(draw);
        return;
    }
    delay = 0;
    
    if (!reversing && states.length < maxIterations) {
        if (states.length > 0) {
            states[states.length - 1].color = colors[colorIndex % colors.length];
            colorIndex++;
        }
        states.push({points: points.map(p => [...p]), color: "#FFF"});
        points = updatePositions(points);
    } else if (states.length >= maxIterations && !reversing) {
        reversing = true;
    } else if (states.length > 0 && reversing) {
        if (states.length === 1) {
            states.pop();
        } else {
            states[states.length - 1].color = "#FFF";
            setTimeout(() => states.pop(), delayMax * 10);
        }
    } else if (states.length === 0 && reversing) {
        resetAnimation();
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    states.forEach(state => {
        ctx.beginPath();
        state.points.forEach((point, index) => {
            if (index === 0) ctx.moveTo(point[0], point[1]);
            else ctx.lineTo(point[0], point[1]);
        });
        ctx.closePath();
        ctx.fillStyle = state.color;
        ctx.fill();
        ctx.strokeStyle = state.color;
        ctx.stroke();
    });
    
    animationFrameId = requestAnimationFrame(draw);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
</script>
-->