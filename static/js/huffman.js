/* Codage de Huffman : on part d'un arbre par caractère, pesant son nombre
   d'apparitions, et l'on fusionne à chaque étape les deux arbres les plus légers.
   Le code d'un caractère est le chemin de la racine à sa feuille (0 à gauche,
   1 à droite) : les caractères fréquents reçoivent des codes courts.
   Conteneur attendu : <div class="anim" data-anim="huffman"></div>               */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="huffman"]');
  if (!root) return;

  root.innerHTML = `
<svg class="hu-svg" role="img" aria-label="Forêt d'arbres fusionnés deux à deux jusqu'à l'arbre de Huffman"></svg>
<div class="hu-codes"></div>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Texte <input type="text" data-k="t" size="30" spellcheck="false" value="les chaussettes de l'archiduchesse"></label>
  <button type="button" data-k="pas">Fusionner</button>
  <button type="button" class="sec" data-k="tout">Tout fusionner</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), codes = $('.hu-codes'), info = $('.anim-info'), inT = $('[data-k="t"]');
  const NS = 'http://www.w3.org/2000/svg';
  let foret, texte, dernier = null, timer = 0, id = 0;
  const vis = c => c === ' ' ? '␣' : c;

  function reset() {
    clearInterval(timer); timer = 0;
    texte = inT.value || 'abracadabra';
    const f = {}; for (const c of texte) f[c] = (f[c] || 0) + 1;
    foret = Object.entries(f).map(([c, n]) => ({ id: id++, c, n })).sort((a, b) => a.n - b.n || a.c.localeCompare(b.c));
    dernier = null;
    info.innerHTML = `${texte.length} caractères, dont ${foret.length} distincts. Chaque caractère est un arbre réduit à une feuille, qui pèse son nombre d'apparitions.`;
    dessiner();
  }
  function fusionner() {
    if (foret.length < 2) return false;
    foret.sort((a, b) => a.n - b.n);
    const [a, b] = foret.splice(0, 2), n = { id: id++, n: a.n + b.n, g: a, d: b };
    foret.push(n); dernier = n;
    info.innerHTML = foret.length > 1 ? `Les deux arbres les plus légers (${a.n} et ${b.n}) fusionnent en un arbre de poids ${n.n}. Il reste ${foret.length} arbres.`
      : `Un seul arbre : c'est l'arbre de Huffman. Chaque code se lit de la racine à la feuille, 0 à gauche, 1 à droite.`;
    dessiner(); return foret.length > 1;
  }
  function dessiner() {
    // placement : feuilles côte à côte, de gauche à droite, arbre par arbre
    const ordre = [...foret].sort((a, b) => b.n - a.n || a.id - b.id);
    let x = 0; const pos = new Map(); let prof = 0;
    (function placerForet() {
      for (const t of ordre) {
        (function placer(nd, p) {
          prof = Math.max(prof, p);
          if (!nd.g) { pos.set(nd, [x++, p]); return; }
          placer(nd.g, p + 1); placer(nd.d, p + 1);
          pos.set(nd, [(pos.get(nd.g)[0] + pos.get(nd.d)[0]) / 2, p]);
        })(t, 0);
        x += 0.6;
      }
    })();
    const W = 640, larg = Math.max(1, x - 0.6), ex = Math.min(46, (W - 30) / larg), dy = Math.min(46, 260 / Math.max(1, prof)), H = 40 + prof * dy + 40;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const ox = (W - (larg - 1) * ex) / 2;
    const P = nd => [ox + pos.get(nd)[0] * ex, 24 + pos.get(nd)[1] * dy];
    let h = '';
    for (const t of ordre) (function liens(nd) {
      if (!nd.g) return;
      for (const [e, bit] of [[nd.g, 0], [nd.d, 1]]) {
        const [x1, y1] = P(nd), [x2, y2] = P(e);
        h += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="hu-l${dernier === nd ? ' hu-neuf' : ''}"/>`;
        h += `<text x="${(x1 + x2) / 2 + (bit ? 6 : -6)}" y="${(y1 + y2) / 2}" class="hu-bit">${bit}</text>`;
        liens(e);
      }
    })(t);
    for (const [nd] of pos) {
      const [cx, cy] = P(nd);
      if (nd.g) h += `<circle cx="${cx}" cy="${cy}" r="11" class="hu-n${dernier === nd ? ' hu-neuf' : ''}"/><text x="${cx}" y="${cy + 4}" class="hu-poids">${nd.n}</text>`;
      else h += `<rect x="${cx - 13}" y="${cy - 12}" width="26" height="24" rx="5" class="hu-f"/><text x="${cx}" y="${cy + 5}" class="hu-car">${vis(nd.c)}</text><text x="${cx}" y="${cy + 26}" class="hu-poids">${nd.n}</text>`;
    }
    svg.innerHTML = h;
    // codes, une fois l'arbre terminé
    if (foret.length === 1) {
      const table = [];
      (function lire(nd, code) { if (!nd.g) table.push([nd.c, nd.n, code || '0']); else { lire(nd.g, code + '0'); lire(nd.d, code + '1'); } })(foret[0], '');
      table.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      const bits = table.reduce((s, [, n, c]) => s + n * c.length, 0), fixe = Math.max(1, Math.ceil(Math.log2(table.length)));
      codes.innerHTML = '<div class="hu-table">' + table.map(([c, n, code]) => `<span><b>${vis(c)}</b> ×${n} <code>${code}</code></span>`).join('') + '</div>' +
        `<p>Texte codé&nbsp;: <b>${bits}</b> bits, au lieu de ${texte.length * 8} en ASCII (8 bits par caractère) et de ${texte.length * fixe} avec un code de longueur fixe (${fixe} bits pour ${table.length} caractères), soit <b>${(bits / texte.length).toFixed(2).replace('.', ',')}</b> bits par caractère.</p>`;
    } else codes.innerHTML = '';
  }
  $('[data-k="pas"]').addEventListener('click', () => { clearInterval(timer); timer = 0; fusionner(); });
  $('[data-k="tout"]').addEventListener('click', () => { clearInterval(timer); timer = setInterval(() => { if (!fusionner()) { clearInterval(timer); timer = 0; } }, 500); });
  $('[data-k="reset"]').addEventListener('click', reset);
  inT.addEventListener('change', reset);
  reset();
})();
