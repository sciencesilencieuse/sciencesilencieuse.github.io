+++
title = "Science en vrac"
date = 2021-03-06T14:20:50+01:00
weight = 0
chapter = true
+++

<style>
h1 {
    color:#fff;
    }
body {
    background-color:#101010;   
    }
/* Les quatre entrées du site : boutons noirs au halo bleu (le bleu des liens),
   qui s'enfoncent légèrement au survol, et davantage à l'appui. */
.accueil-nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 1.6em 0;
    }
#body .accueil-nav a.accueil-btn {
    display: block !important;
    box-sizing: border-box;
    width: 100%;
    padding: 0.75em 1em;
    border: 1px solid rgba(28, 144, 243, 0.35);
    border-radius: 14px;
    background: linear-gradient(180deg, #1a1a1a, #0b0b0b) !important;
    color: var(--MAIN-LINK-color, #1C90F3);
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    text-decoration: none !important;
    box-shadow: 0 0 18px rgba(28, 144, 243, 0.45), 0 5px 0 #000, inset 0 1px 0 rgba(255, 255, 255, 0.07);
    transform: translateY(0);
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    }
#body .accueil-nav a.accueil-btn:hover {
    color: var(--MAIN-LINK-color, #1C90F3);
    transform: translateY(3px);
    box-shadow: 0 0 22px rgba(28, 144, 243, 0.55), 0 2px 0 #000, inset 0 2px 6px rgba(0, 0, 0, 0.55);
    }
#body .accueil-nav a.accueil-btn:active {
    transform: translateY(5px);
    box-shadow: 0 0 12px rgba(28, 144, 243, 0.45), 0 0 0 #000, inset 0 3px 10px rgba(0, 0, 0, 0.8);
    background: linear-gradient(180deg, #0b0b0b, #141414) !important;
    }
#body .accueil-nav a.accueil-btn:focus-visible {
    outline: 2px solid #1C90F3;
    outline-offset: 3px;
    }
/* pas de soulignement animé (celui du thème) sur ces boutons */
#body .accueil-nav a.accueil-btn,
#body .accueil-nav a.accueil-btn:hover {
    background-size: 100% 100% !important;
    }
#body .accueil-nav a.accueil-btn::after { display: none !important; }
@media (prefers-reduced-motion: reduce) {
    #body .accueil-nav a.accueil-btn { transition: none; }
    }
</style>



# En vrac

![](/accueiljup.jpg)



<br>

<nav class="accueil-nav" aria-label="Rubriques">
  <a class="accueil-btn" href="./logique/">Logique</a>
  <a class="accueil-btn" href="./info/">Informatique</a>
  <a class="accueil-btn" href="./maths/">Mathématiques</a>
  <a class="accueil-btn" href="./physique/">Physique</a>
</nav>


<br><br>

<p style="color:#929292">Pour toute question : 
    <a id="email-link" href="mailto:" style="font-size:1em";></a>
</p>

<script type="text/javascript">
    var part1 = "cordier.sc.phy";
    var part2 = "gmail";
    var part3 = "com";
    var email = part1 + "@" + part2 + "." + part3;

    // Mettre à jour le lien
    var link = document.getElementById("email-link");
    link.href = "mailto:" + email;
    link.textContent = email;
</script>