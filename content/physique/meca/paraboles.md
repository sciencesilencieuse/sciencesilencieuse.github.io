+++
title = "Paraboles"
date = 2021-03-06T14:20:50+01:00
weight = 2
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


# Chutes libres et paraboles


<div style="position:relative; width:800px; max-width: 100%; margin-left: auto;margin-right: auto;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
{{<youtube Un5roSKDusQ>}}
</div>

<br>


<div style="position:relative; width:fit-content; max-width:100%; width:800px; margin:auto; text-align:center;aspect-ratio: 4/3;">

  <button id="resetButton">
    <i class="fa-solid fa-rotate-right"></i>
  </button>

  <iframe id="monProgramme"
          src="/programmes/parabolesurete.html"
          width="100%" height="100%"
          frameborder="0"
          allowfullscreen
          tabindex="0"></iframe>

</div>

<style>
#resetButton {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  background: #333363;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px 12px;
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

/* Supprime le liseré bleu par défaut quand l'iframe prend le focus */
#monProgramme:focus {
  outline: none;
}
</style>


<script>
document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("monProgramme");
    const btn = document.getElementById("resetButton");

    btn.onclick = function() {
        iframe.src = iframe.src;
    };

    iframe.addEventListener("mouseenter", function() {
        iframe.focus();
    });
});
</script>

<br>

<div style="position:relative; width:fit-content; max-width:100%; width:800px; margin:auto; text-align:center;aspect-ratio: 4/3;">

  <button id="resetButton2">
    <i class="fa-solid fa-rotate-right"></i>
  </button>

  <iframe id="monProgramme2"
          src="/programmes/parabolecercle.html"
          width="100%" height="100%"
          frameborder="0"
          allowfullscreen></iframe>

</div>

<style>
#resetButton2 {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  background: #193E5E;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#resetButton2:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

#resetButton2:active {
  transform: scale(0.92);
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("monProgramme2");
    const btn = document.getElementById("resetButton2");

    btn.onclick = function() {
        iframe.src = iframe.src;
    };

    iframe.addEventListener("mouseenter", function() {
        iframe.focus();
    });
});
</script>

<br>

<div style="position:relative; width:fit-content; max-width:100%; width:800px; margin:auto; text-align:center;aspect-ratio: 4/3;">

  <button id="resetButton3">
    <i class="fa-solid fa-rotate-right"></i>
  </button>

  <iframe id="monProgramme3"
          src="/programmes/projectionroue.html"
          width="100%" height="100%"
          frameborder="0"
          allowfullscreen></iframe>

</div>

<style>
#resetButton3 {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 10;
  background: #D06C80;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#resetButton3:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

#resetButton3:active {
  transform: scale(0.92);
  box-shadow: 0 2px 4px rgba(0,0,0,0.25);
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("monProgramme3");
    const btn = document.getElementById("resetButton3");

    btn.onclick = function() {
        iframe.src = iframe.src;
    };

    iframe.addEventListener("mouseenter", function() {
        iframe.focus();
    });
});
</script>


