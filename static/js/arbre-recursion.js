/* L'arbre de récursion d'un algorithme « diviser pour régner » : a sous-problèmes
   de taille n/2, et un travail de combinaison proportionnel à la taille.
   Le niveau k compte a^k nœuds de taille n/2^k, soit un travail n·(a/2)^k.
   Selon que a est inférieur, égal ou supérieur à 2, c'est la racine, chaque
   niveau, ou les feuilles qui dominent.
   Conteneur attendu : <div class="anim" data-anim="arbre-recursion"></div>      */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="arbre-recursion"]');
  if (!root) return;

  const N = 16, NIV = 5;                         // niveaux 0 à 4 : tailles 16, 8, 4, 2, 1
  const COL = { racine: '#006C65', egal: '#004D80', feuilles: '#970E53', ard: '#475569', texte: '#334155', grille: '#e2e8f0' };
  const CAS = {
    1: ['racine', 'Le travail fond de moitié à chaque niveau : la racine domine, et le total reste proportionnel à n. Exemple : la sélection rapide (trouver la médiane), qui ne garde qu\'une moitié.', 'O(n)'],
    2: ['egal', 'Chaque niveau coûte exactement n, et il y a log₂ n niveaux : O(n log n). Exemples : le tri fusion, le plus grand sous-tableau.', 'O(n log n)'],
    3: ['feuilles', 'Le travail est multiplié par 3/2 à chaque niveau : ce sont les feuilles qui dominent, au nombre de 3^(log₂ n) = n^1,585. Exemple : Karatsuba.', 'O(n^1,585)'],
    4: ['feuilles', 'Le travail double à chaque niveau, et les n² feuilles dominent : on n\'a rien gagné sur la multiplication de l\'école ! C\'est l\'astuce de Gauss, quatre produits ramenés à trois, qui fait tout le gain de Karatsuba.', 'O(n²)']
  };

  root.innerHTML = `
<div class="anim-ctrl">
  <span>Nombre de sous-problèmes&nbsp;:</span>
  ${[1, 2, 3, 4].map(a => `<button type="button" class="sec" data-a="${a}">a = ${a}</button>`).join('')}
</div>
<canvas class="anim-scene" role="img" aria-label="Arbre de récursion : chaque niveau est une barre dont la longueur représente le travail total effectué à ce niveau"></canvas>
<p class="anim-info" aria-live="polite"></p>`;

  const cv = root.querySelector('canvas'), info = root.querySelector('.anim-info');
  let a = 2, dim;

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 640, h = Math.round(Math.max(270, Math.min(330, w * 0.46)));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; draw();
  }
  function draw() {
    if (!dim) return;
    const c = cv.getContext('2d'), { w, h } = dim, etroit = w < 520;
    const [regime, texte, total] = CAS[a], col = COL[regime];
    const g = etroit ? 8 : 16, colTxt = etroit ? 112 : 190, xl = g + 54, larg = w - xl - colTxt - g;
    const travaux = Array.from({ length: NIV }, (_, k) => N * (a / 2) ** k), max = Math.max(...travaux);
    const hl = (h - 66) / NIV;
    c.clearRect(0, 0, w, h); c.textBaseline = 'middle';
    c.font = '11px sans-serif'; c.fillStyle = COL.ard; c.textAlign = 'left';
    c.fillText('niveau', g, 14); c.fillText('travail du niveau', xl, 14);
    c.textAlign = 'right'; c.fillText(etroit ? 'nœuds × taille' : 'nœuds × taille = travail', w - g, 14);
    let somme = 0;
    for (let k = 0; k < NIV; k++) {
      const y = 30 + k * hl, nb = a ** k, taille = N / 2 ** k, t = travaux[k], L = Math.max(3, larg * t / max);
      somme += t;
      const x0 = xl + (larg - L) / 2;
      c.fillStyle = COL.grille; c.fillRect(xl, y + hl * 0.18, larg, hl * 0.64);
      c.fillStyle = col; c.globalAlpha = 0.85; c.fillRect(x0, y + hl * 0.18, L, hl * 0.64); c.globalAlpha = 1;
      if (nb > 1 && L / nb >= 3) {                       // une séparation par nœud, tant que c'est lisible
        c.strokeStyle = '#fff'; c.lineWidth = Math.min(2, L / nb / 3);
        for (let i = 1; i < nb; i++) { const x = x0 + L * i / nb; c.beginPath(); c.moveTo(x, y + hl * 0.18); c.lineTo(x, y + hl * 0.82); c.stroke(); }
      }
      c.fillStyle = COL.texte; c.textAlign = 'left'; c.font = '12px sans-serif';
      c.fillText(k, g + 14, y + hl / 2);
      c.textAlign = 'right'; c.font = '12px sans-serif';
      c.fillText(etroit ? `${nb} × ${taille}` : `${nb} × ${taille} = ${t}`, w - g, y + hl / 2);
    }
    c.textAlign = 'left'; c.font = '600 13px sans-serif'; c.fillStyle = col;
    c.fillText(`total : ${somme} (n = ${N})  →  ${total}`, xl, h - 16);
    info.textContent = texte;
    root.querySelectorAll('[data-a]').forEach(b => b.classList.toggle('sec', +b.dataset.a !== a));
  }
  root.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => { a = +b.dataset.a; draw(); }));
  window.addEventListener('resize', fit);
  fit();
})();
