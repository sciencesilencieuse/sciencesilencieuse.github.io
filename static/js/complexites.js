/* Ce que coûte une classe de complexité : pour une taille d'entrée n choisie,
   nombre d'opérations de chaque classe (échelle logarithmique) et durée
   correspondante sur une machine qui fait un milliard d'opérations par seconde.
   Conteneur attendu : <div class="anim" data-anim="complexites"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="complexites"]');
  if (!root) return;

  const DECADES = 30;                           // l'axe va de 10^0 à 10^30 opérations
  const OPS_S = 9;                              // 10^9 opérations par seconde
  const CLASSES = [
    ['log n', '#006C65', n => Math.log10(Math.max(1, Math.log2(n)))],
    ['n', '#004D80', n => Math.log10(n)],
    ['n log n', '#5B6CB0', n => Math.log10(n * Math.max(1, Math.log2(n)))],
    ['n²', '#C2410C', n => 2 * Math.log10(n)],
    ['n³', '#B91C1C', n => 3 * Math.log10(n)],
    ['2ⁿ', '#970E53', n => n * Math.LOG10E * Math.LN2]
  ];
  const REPERES = [[OPS_S, '1 s'], [OPS_S + Math.log10(3.156e7), '1 an'], [OPS_S + Math.log10(4.35e17), 'âge de l\'Univers']];

  const fr = (x, d = 0) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d });
  function puissance(l) {                       // 10^l écrit lisiblement
    if (l < 6) return fr(Math.round(10 ** l));
    const e = Math.floor(l), m = 10 ** (l - e);
    return `${fr(m, 1)}·10<sup>${e}</sup>`;
  }
  function duree(l) {                           // l = log10(opérations)
    const s = 10 ** (l - OPS_S);
    if (l - OPS_S > 40) return 'inimaginable';
    const u = [[3.156e7 * 1.38e10, null], [3.156e7, 'an'], [86400, 'jour'], [3600, 'h'], [60, 'min'], [1, 's'], [1e-3, 'ms'], [1e-6, 'µs'], [1e-9, 'ns']];
    if (s >= u[0][0]) return `${puissance(Math.log10(s / u[0][0]))} × l'âge de l'Univers`;
    for (const [v, nom] of u.slice(1)) if (s >= v) {
      const q = s / v, pl = (nom === 'an' || nom === 'jour') && q >= 2 ? 's' : '';
      return q >= 1e6 ? `${puissance(Math.log10(q))} ${nom}${pl}` : `${fr(q, q < 10 ? 1 : 0)} ${nom}${pl}`;
    }
    return '< 1 ns';
  }

  root.innerHTML = `
<div class="anim-ctrl">
  <label>Taille de l'entrée <input type="range" min="1" max="9" step="0.05" value="3" data-k="n"><output data-o="n"></output></label>
</div>
<div class="cx-graphe" role="img" aria-label="Nombre d'opérations de chaque classe de complexité, sur une échelle logarithmique"></div>
<p class="anim-info">Durées pour une machine qui effectue un milliard d'opérations par seconde. L'échelle est logarithmique : chaque graduation multiplie le nombre d'opérations par 10<sup>5</sup>.</p>`;

  const graphe = root.querySelector('.cx-graphe'), inN = root.querySelector('[data-k="n"]'), outN = root.querySelector('[data-o="n"]');
  graphe.innerHTML = `<div class="cx-axe">${Array.from({ length: DECADES / 5 + 1 }, (_, i) => `<span class="${i % 2 ? 'cx-impair' : ''}" style="left:${(i * 5 / DECADES) * 100}%">10<sup>${i * 5}</sup></span>`).join('')}</div>` +
    REPERES.map(([l, nom]) => `<div class="cx-repere" style="left:calc(64px + (100% - 184px) * ${l / DECADES})"><span>${nom}</span></div>`).join('') +
    CLASSES.map(([nom, col]) => `<div class="cx-ligne"><span class="cx-nom">${nom}</span><div class="cx-piste"><div class="cx-barre" style="background:${col}"></div></div><span class="cx-duree"></span></div>`).join('');
  const lignes = [...graphe.querySelectorAll('.cx-ligne')];

  function maj() {
    const n = Math.round(10 ** +inN.value);
    outN.innerHTML = `n = ${n < 1e6 ? fr(n) : puissance(Math.log10(n))}`;
    CLASSES.forEach(([, , f], i) => {
      const l = Math.max(0, f(n)), b = lignes[i].querySelector('.cx-barre');
      b.style.width = Math.min(100, l / DECADES * 100) + '%';
      b.classList.toggle('cx-hors', l > DECADES);
      lignes[i].querySelector('.cx-duree').innerHTML = duree(l);
    });
  }
  inN.addEventListener('input', maj);
  maj();
})();
