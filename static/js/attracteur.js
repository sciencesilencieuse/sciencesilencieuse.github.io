/* Attracteur sur le graphe d'un jeu : la variante de Nim où l'on ne peut pas
   prendre plus du double de ce que l'adversaire vient de prendre (au premier
   coup, tout sauf la totalité). Un sommet est un couple (allumettes restantes,
   maximum prenable) et appartient à Eve (ronds) ou à Adam (carrés). On calcule
   pas à pas Attr_0(F) = F, Attr_1(F), … jusqu'à stabilisation, puis on montre
   la stratégie gagnante qui s'en déduit.
   Conteneur attendu : <div class="anim" data-anim="attracteur"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="attracteur"]');
  if (!root) return;

  root.innerHTML = `
<svg class="at-graphe" role="img" aria-label="Graphe du jeu : les positions d'Eve et d'Adam, colorées au fur et à mesure qu'elles rejoignent l'attracteur"></svg>
<p class="at-legende"><span class="at-l-eve">position d'Eve</span> <span class="at-l-adam">position d'Adam</span> <span class="at-l-attr">dans l'attracteur</span> <span class="at-l-strat">coup de la stratégie gagnante</span> <span class="at-l-txt"></span></p>
<p class="at-message" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Allumettes au départ <select data-k="n">${Array.from({ length: 12 }, (_, i) => i + 2).map(n => `<option value="${n}"${n === 5 ? ' selected' : ''}>${n}</option>`).join('')}</select></label>
  <button type="button" data-k="pas">Étape suivante</button>
  <button type="button" class="sec" data-k="tout">Jusqu'au bout</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.at-message'), selN = $('[data-k="n"]');
  let n, G, cles, Attr, etape, nouveaux, stable, timer = 0, P, vert = false, W = 720, H = 380;
  const cle = s => s.join(',');

  function construire() {
    n = +selN.value; G = new Map();
    const pile = [[n, n - 1, 0]];
    while (pile.length) {
      const s = pile.pop(), k = cle(s);
      if (G.has(k)) continue;
      const [a, m, j] = s, succ = [];
      for (let i = 1; i <= Math.min(m, a); i++) succ.push([a - i, Math.min(2 * i, a - i), 1 - j]);
      G.set(k, { s, succ: succ.map(cle) });
      pile.push(...succ);
    }
    cles = [...G.keys()];
    placer();
  }
  // placement : un rang par nombre d'allumettes restantes, de n à 0 ; en colonnes de gauche
  // à droite sur grand écran, en lignes de haut en bas sur petit écran
  function placer() {
    vert = (root.clientWidth || 720) < 520;
    const rangs = new Map();
    for (const k of cles) { const a = G.get(k).s[0]; if (!rangs.has(a)) rangs.set(a, []); rangs.get(a).push(k); }
    const larg = vert ? 360 : 380, prof = vert ? 50 + n * Math.max(44, 560 / n) + 30 : 720;   // largeur d'un rang, longueur de l'axe
    W = vert ? 360 : 720; H = vert ? prof : 380;
    const axe = a => vert ? 50 + (H - 80) * (n - a) / n : 40 + (W - 80) * (n - a) / n;
    P = new Map();
    for (const [a, ks] of rangs) {
      ks.sort((x, y) => G.get(x).s[2] - G.get(y).s[2] || G.get(y).s[1] - G.get(x).s[1]);
      const plein = Math.min(1, ks.length / 7), deb = vert ? 44 : 50, l = vert ? W - 64 : H - 80;
      ks.forEach((k, i) => {
        const t = deb + l * (ks.length === 1 ? 0.5 : i / (ks.length - 1)) * plein + l * (1 - plein) / 2;
        P.set(k, vert ? [t, axe(a)] : [axe(a), t]);
      });
    }
    P.axe = axe;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    root.querySelector('.at-l-txt').innerHTML = `${vert ? 'à gauche' : 'en haut'}&nbsp;: allumettes restantes · dans le sommet&nbsp;: maximum prenable`;
  }
  function preparer() {
    clearInterval(timer); timer = 0;
    construire();
    Attr = new Set(['0,0,1']); nouveaux = new Set(['0,0,1']); etape = 0; stable = false;
    msg.innerHTML = `Eve gagne si elle prend la dernière allumette, c'est-à-dire si la partie arrive en (0,&nbsp;0) avec Adam au trait&nbsp;: ce carré forme à lui seul l'ensemble <i>F</i>, et Attr<sub>0</sub>(<i>F</i>) = <i>F</i>. ${G.size} positions sont atteignables depuis le départ (${n},&nbsp;${n - 1}).`;
    dessiner();
  }
  function pas() {
    if (stable) return false;
    const add = new Set();
    for (const k of cles) {
      if (Attr.has(k)) continue;
      const { s, succ } = G.get(k);
      if (s[2] === 0 ? succ.some(t => Attr.has(t)) : succ.length > 0 && succ.every(t => Attr.has(t))) add.add(k);
    }
    nouveaux = add;
    if (!add.size) {
      stable = true;
      const dep = cle([n, n - 1, 0]), gagne = Attr.has(dep);
      msg.innerHTML = `Plus rien ne s'ajoute&nbsp;: la suite est stationnaire, l'attracteur compte ${Attr.size} positions. ` +
        (gagne ? `Le départ (${n},&nbsp;${n - 1}) en fait partie&nbsp;: <b>Eve a une stratégie gagnante</b>. Il lui suffit de toujours jouer vers l'attracteur (flèches orange)&nbsp;; Adam ne peut jamais en sortir.`
               : `Le départ (${n},&nbsp;${n - 1}) n'en fait pas partie&nbsp;: <b>Eve perd</b> si Adam joue bien, quoi qu'elle fasse. C'est Adam qui a une stratégie gagnante.`);
      dessiner(); return false;
    }
    for (const k of add) Attr.add(k);
    etape++;
    const noms = [...add].map(k => { const [a, m, j] = G.get(k).s; return `(${a},&nbsp;${m})${j ? ' d\'Adam' : ' d\'Eve'}`; });
    msg.innerHTML = `Attr<sub>${etape}</sub>(<i>F</i>)&nbsp;: on ajoute ${noms.join(', ')}. Un sommet d'Eve entre dès qu'<b>un</b> de ses coups mène dans l'attracteur, un sommet d'Adam seulement quand <b>tous</b> ses coups y mènent.`;
    dessiner(); return true;
  }

  function dessiner() {
    let h = '';
    // axe
    for (let a = n; a >= 0; a--) h += vert ? `<text x="14" y="${P.axe(a) + 5}" class="at-axe">${a}</text>` : `<text x="${P.axe(a)}" y="20" class="at-axe">${a}</text>`;
    // arêtes
    for (const k of cles) {
      const [x1, y1] = P.get(k), { s, succ } = G.get(k);
      for (const t of succ) {
        const [x2, y2] = P.get(t), d = vert ? y2 - y1 : x2 - x1, cx = (x1 + x2) / 2 + (vert ? Math.min(60, d * 0.18) : 0), cy = (y1 + y2) / 2 - (vert ? 0 : Math.min(60, d * 0.18));
        const strat = stable && s[2] === 0 && Attr.has(k) && Attr.has(t);
        const dansA = Attr.has(k) && Attr.has(t);
        h += `<path d="M${x1} ${y1}Q${cx} ${cy} ${x2} ${y2}" class="at-arc ${s[2] ? 'at-arc-adam' : 'at-arc-eve'}${dansA ? ' at-arc-attr' : ''}${strat ? ' at-arc-strat' : ''}"/>`;
      }
    }
    // sommets
    for (const k of cles) {
      const [x, y] = P.get(k), [a, m, j] = G.get(k).s;
      const cls = `at-s ${j ? 'at-adam' : 'at-eve'}${Attr.has(k) ? ' at-attr' : ''}${nouveaux.has(k) ? ' at-neuf' : ''}${a === n && j === 0 && m === n - 1 ? ' at-depart' : ''}`;
      const forme = j ? `<rect x="${x - 12}" y="${y - 12}" width="24" height="24" rx="3"/>` : `<circle cx="${x}" cy="${y}" r="13"/>`;
      h += `<g class="${cls}"><title>${a} allumette${a > 1 ? 's' : ''}, au plus ${m} à prendre, ${j ? 'Adam' : 'Eve'} au trait</title>${forme}<text x="${x}" y="${y + 4.5}">${m}</text></g>`;
    }
    svg.innerHTML = h;
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; if (stable) preparer(); else pas(); });
  $('[data-k="tout"]').addEventListener('click', () => { clearInterval(timer); if (stable) preparer(); timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; } }, 700); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selN.addEventListener('change', preparer);
  let largeur = root.clientWidth;
  window.addEventListener('resize', () => { if (Math.abs(root.clientWidth - largeur) < 2) return; largeur = root.clientWidth; placer(); dessiner(); });
  preparer();
})();
