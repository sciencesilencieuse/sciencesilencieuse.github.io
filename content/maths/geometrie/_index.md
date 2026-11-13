+++
title = "Géométrie"
date = 2021-03-06T14:20:50+01:00
weight = 2
chapter = false
+++

# Géométrie

La géométrie est avec l'arithmétique une des plus vieilles branches des mathématiques (l'arithmétique pour tenir les comptes et la géométrie pour mesurer les terres).

Géométrie et physique sont intimement liées. Le développement de la géométrie a en partie été poussé par les questionnements des astronomes (sur la position des astres, leur mouvement, leur taille, leur distance, etc.) et des ingénieurs (pour construire des trucs qui tiennent debout). Et une explication géométrique des lois fondamentales de l'univers attire toujours certains chercheurs, plus de 2000 ans après Platon.

<div class="math-container">
<div class="math-grid">

<div class="math-card c-bleu">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/prestriangle.png" alt=""></span>
<h3><a href="./geo1/">Triangle</a></h3>
</div>
<div class="carte-texte">Les grands classiques du triangle.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./geo1/#pythagore" class="math-btn">Pythagore</a>
  <a href="./geo1/#escargot-de-pythagore" class="math-btn">Escargot de Pythagore</a>
  <a href="./geo1/#thalès" class="math-btn">Thalès</a>
  <a href="./geo1/#droite-deuler" class="math-btn">Droite d'Euler</a>
</div>
</div>
</div>

<div class="math-card c-canard">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/prescercle.png" alt=""></span>
<h3><a href="./geo2/">Cercle et triangle</a></h3>
</div>
<div class="carte-texte">Trigonométrie, loi des sinus et mesure du méridien, angles inscrits.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./geo2/#trigonométrie" class="math-btn">Trigonométrie</a>
  <a href="./geo2/#théorème-de-langle-inscrit-et-de-langle-au-centre" class="math-btn">Angle inscrit et angle au centre</a>
</div>
</div>
</div>

<div class="math-card c-vert">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/presaire.png" alt=""></span>
<h3><a href="./geo3/">Aires et volumes</a></h3>
</div>
<div class="carte-texte">Calculer des aires et des volumes, jusqu'au triangle tracé sur une sphère.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./geo3/#calculs-daires" class="math-btn">Calculs d'aires</a>
  <a href="./geo3/#aires-et-identités-remarquables" class="math-btn">Identités remarquables</a>
  <a href="./geo3/#aire-du-triangle-sphérique" class="math-btn">Triangle sphérique</a>
  <a href="./geo3/#calculs-de-volumes" class="math-btn">Calculs de volumes</a>
</div>
</div>
</div>

<div class="math-card c-orange">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/presdim.png" alt=""></span>
<h3><a href="./geo4/">Curse of dimensionality</a></h3>
</div>
<div class="carte-texte">Le fléau de la dimension&nbsp;: en grande dimension, presque tout le volume se trouve près des bords.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./geo4/#petite-énigme" class="math-btn">Petite énigme</a>
  <a href="./geo4/#the-average-man" class="math-btn">The «&nbsp;Average man&nbsp;»</a>
</div>
</div>
</div>

<div class="math-card c-rouge">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/prespoursuite.png" alt=""></span>
<h3><a href="./geo5/">Poursuites</a></h3>
</div>
<div class="carte-texte">Courbes de poursuite, interceptions et nuées d'oiseaux.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./geo5/#paradoxe-dachille-et-de-la-tortue" class="math-btn">Achille et la tortue</a>
  <a href="./geo5/#courbe-de-poursuite" class="math-btn">Courbe de poursuite</a>
  <a href="./geo5/#interception" class="math-btn">Interception</a>
  <a href="./geo5/#manœuvre-dévitement-de-lenola-gay" class="math-btn">Enola Gay</a>
  <a href="./geo5/#poursuite-cyclique" class="math-btn">Poursuite cyclique</a>
  <a href="./geo5/#murmurations" class="math-btn">Murmurations</a>
</div>
</div>
</div>

<div class="math-card c-magenta">
<div class="math-card-head">
<span class="math-illus" aria-hidden="true"><img src="/simplices.png" alt=""></span>
<h3><a href="./simplexes/">Simplexes et flèche du temps</a></h3>
</div>
<div class="carte-texte">Le volume d'un simplexe, $\frac{1}{k!}$, et ce qu'il dit de l'irréversibilité.</div>
<div class="theme-subgroup">
<div class="link-list">
  <a href="./simplexes/#le-volume-dun-simplexe" class="math-btn">Volume d'un simplexe</a>
  <a href="./simplexes/#lhypercube-dilaté" class="math-btn">L'hypercube dilaté</a>
</div>
</div>
</div>

</div>
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
