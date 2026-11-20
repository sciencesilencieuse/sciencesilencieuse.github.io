/* Le dilemme du prisonnier répété et le tournoi d'Axelrod (1980).
   À chaque tour, chacun coopère (C) ou trahit (T) ; gains : 3 chacun si les
   deux coopèrent, 1 chacun si les deux trahissent, 5 pour le traître et 0 pour
   la victime sinon. Trois vues : un match entre deux stratégies, le tournoi où
   chacune rencontre toutes les autres (et elle-même) sur 200 tours, et
   l'évolution d'une population où chaque stratégie prolifère à proportion de
   ses gains.
   Conteneur attendu : <div class="anim" data-anim="axelrod"></div>            */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="axelrod"]');
  if (!root) return;

  const r = Math.random, TOURS = 200;
  const S = [
    ['Donnant-donnant', '#2563EB', 'coopère au premier tour, puis rejoue le dernier coup de l\'autre', (m, o, t) => t ? o[t - 1] : 'C'],
    ['Gentil', '#16a34a', 'coopère toujours', () => 'C'],
    ['Méchant', '#DC2626', 'trahit toujours', () => 'T'],
    ['Hasard', '#94a3b8', 'joue à pile ou face', () => r() < 0.5 ? 'C' : 'T'],
    ['Rancunier', '#7c2d12', 'coopère jusqu\'à la première trahison de l\'autre, puis trahit toujours', (m, o) => o.includes('T') ? 'T' : 'C'],
    ['Joss', '#db2777', 'comme donnant-donnant, mais trahit par surprise une fois sur dix', (m, o, t) => !t ? 'C' : o[t - 1] === 'T' || r() < 0.1 ? 'T' : 'C'],
    ['Indulgent', '#0d9488', 'ne trahit qu\'après deux trahisons de suite de l\'autre', (m, o, t) => t > 1 && o[t - 1] === 'T' && o[t - 2] === 'T' ? 'T' : 'C'],
    ['Vindicatif', '#9333ea', 'répond à chaque trahison par deux trahisons', (m, o, t) => o[t - 1] === 'T' || o[t - 2] === 'T' ? 'T' : 'C'],
    ['Testeur', '#ca8a04', 'trahit d\'entrée ; si l\'autre riposte, s\'excuse et joue donnant-donnant, sinon alterne', (m, o, t) => t === 0 ? 'T' : t === 1 ? 'C' : o[1] === 'T' ? o[t - 1] : (t % 2 ? 'C' : 'T')],
    ['Eatherly', '#0891b2', 'après une trahison, trahit avec la probabilité que l\'autre a de trahir', (m, o, t) => !t || o[t - 1] === 'C' ? 'C' : r() < o.filter(x => x === 'T').length / t ? 'T' : 'C'],
    ['Tullock', '#65a30d', 'coopère 11 tours, puis un peu moins souvent que l\'autre sur les 10 derniers tours', (m, o, t) => t < 11 ? 'C' : r() < o.slice(t - 10).filter(x => x === 'C').length / 10 - 0.1 ? 'C' : 'T'],
    ['Pavlov', '#ea580c', 'garde son coup si l\'autre a coopéré, en change sinon', (m, o, t) => !t ? 'C' : o[t - 1] === 'C' ? m[t - 1] : (m[t - 1] === 'C' ? 'T' : 'C')],
    ['Alterné', '#475569', 'coopère et trahit un tour sur deux', (m, o, t) => t % 2 ? 'T' : 'C'],
    ['Grofman', '#be185d', 'si les deux ont joué différemment, trahit avec probabilité 5/7, sinon coopère', (m, o, t) => !t || m[t - 1] === o[t - 1] ? 'C' : r() < 5 / 7 ? 'T' : 'C']
  ];
  const GENTILS = new Set([0, 1, 4, 6, 7, 9, 11, 13]);
  const GAIN = { CC: [3, 3], CT: [0, 5], TC: [5, 0], TT: [1, 1] };

  function match(i, j, n) {
    const a = [], b = []; let sa = 0, sb = 0;
    for (let t = 0; t < n; t++) {
      const x = S[i][3](a, b, t), y = S[j][3](b, a, t);
      a.push(x); b.push(y);
      const [ga, gb] = GAIN[x + y]; sa += ga; sb += gb;
    }
    return { a, b, sa, sb };
  }

  root.innerHTML = `
<div class="ax-onglets" role="tablist">
  <button type="button" role="tab" data-v="match" class="ax-on">Un match</button>
  <button type="button" role="tab" data-v="tournoi">Le tournoi</button>
  <button type="button" role="tab" data-v="evol">L'évolution</button>
</div>
<div class="ax-vue" data-vue="match">
  <div class="ax-affiche">
    <div class="ax-joueur" data-j="a"><select data-k="a" aria-label="Première stratégie">${S.map((s, i) => `<option value="${i}"${i === 0 ? ' selected' : ''}>${s[0]}</option>`).join('')}</select><p class="ax-jdesc"></p><div class="ax-jscore"></div></div>
    <div class="ax-vs">contre</div>
    <div class="ax-joueur" data-j="b"><select data-k="b" aria-label="Seconde stratégie">${S.map((s, i) => `<option value="${i}"${i === 8 ? ' selected' : ''}>${s[0]}</option>`).join('')}</select><p class="ax-jdesc"></p><div class="ax-jscore"></div></div>
  </div>
  <div class="ax-frise"></div>
  <div class="ax-bas">
    <table class="ax-gains" aria-label="Table des gains"><tr><th></th><th>l'autre coopère</th><th>l'autre trahit</th></tr><tr><th>je coopère</th><td>3</td><td class="ax-g0">0</td></tr><tr><th>je trahis</th><td class="ax-g5">5</td><td>1</td></tr></table>
    <button type="button" class="sec" data-k="rejouer">Rejouer le match</button>
  </div>
</div>
<div class="ax-vue" data-vue="tournoi" hidden>
  <p class="ax-aide">Choisir les participants&nbsp;:</p>
  <div class="ax-choix">${S.map((s, i) => `<button type="button" class="ax-puce ax-actif" data-s="${i}" aria-pressed="true" title="${s[2]}" style="--c:${s[1]}">${s[0]}</button>`).join('')}</div>
  <div class="anim-ctrl"><button type="button" data-k="tournoi">Lancer le tournoi</button><button type="button" class="sec" data-k="tous">Tout sélectionner</button></div>
  <div class="ax-barres"></div>
  <p class="ax-note"></p>
</div>
<div class="ax-vue" data-vue="evol" hidden>
  <svg class="ax-courbes" viewBox="0 0 640 300" role="img" aria-label="Part de chaque stratégie dans la population, génération après génération"></svg>
  <div class="ax-legende"></div>
  <div class="anim-ctrl"><label>Au départ <select data-k="dep"><option value="naif">70 % de gentils</option><option value="egal">parts égales</option></select></label><button type="button" data-k="evol">Lancer l'évolution</button></div>
  <p class="ax-note ax-note-evol"></p>
</div>`;
  const $ = s => root.querySelector(s);
  const fmt2 = x => x.toFixed(2).replace('.', ',');

  // --- onglets
  root.querySelectorAll('[role="tab"]').forEach(bt => bt.addEventListener('click', () => {
    root.querySelectorAll('[role="tab"]').forEach(x => x.classList.toggle('ax-on', x === bt));
    root.querySelectorAll('.ax-vue').forEach(v => { v.hidden = v.dataset.vue !== bt.dataset.v; });
  }));

  // --- un match : une colonne par tour, les deux coups face à face
  let compteur = 0;
  function afficherMatch() {
    const i = +$('[data-k="a"]').value, j = +$('[data-k="b"]').value, n = 30, m = match(i, j, n);
    [['a', i], ['b', j]].forEach(([k, x]) => { const c = $(`[data-j="${k}"]`); c.style.setProperty('--c', S[x][1]); c.querySelector('.ax-jdesc').textContent = S[x][2]; });
    let h = '<div class="ax-cols">';
    for (let t = 0; t < n; t++) {
      const [ga, gb] = GAIN[m.a[t] + m.b[t]];
      h += `<div class="ax-col" style="animation-delay:${t * 45}ms"><span class="ax-coup ax-${m.a[t]}" title="${m.a[t] === 'C' ? 'coopère' : 'trahit'} : ${ga} pt">${m.a[t]}</span><span class="ax-t">${t + 1}</span><span class="ax-coup ax-${m.b[t]}" title="${m.b[t] === 'C' ? 'coopère' : 'trahit'} : ${gb} pt">${m.b[t]}</span></div>`;
    }
    h += '</div>';
    $('.ax-frise').innerHTML = h;
    // les scores défilent jusqu'au total
    const id = ++compteur, t0 = performance.now(), duree = n * 45 + 300;
    (function f(t) {
      if (id !== compteur) return;
      const x = Math.min(1, (t - t0) / duree), k = Math.round(x * n);
      let sa = 0, sb = 0; for (let u = 0; u < k; u++) { const [ga, gb] = GAIN[m.a[u] + m.b[u]]; sa += ga; sb += gb; }
      $('[data-j="a"] .ax-jscore').innerHTML = `<b>${sa}</b> points`;
      $('[data-j="b"] .ax-jscore').innerHTML = `<b>${sb}</b> points`;
      [['a', sa, sb], ['b', sb, sa]].forEach(([q, p1, p2]) => $(`[data-j="${q}"]`).classList.toggle('ax-gagne', x === 1 && p1 > p2));
      if (x < 1) requestAnimationFrame(f);
    })(t0);
  }
  ['a', 'b'].forEach(k => $(`[data-k="${k}"]`).addEventListener('change', afficherMatch));
  $('[data-k="rejouer"]').addEventListener('click', afficherMatch);

  // --- le tournoi
  let M = null, actifs = null;
  root.querySelectorAll('.ax-puce').forEach(b => b.addEventListener('click', () => { const on = !b.classList.contains('ax-actif'); b.classList.toggle('ax-actif', on); b.setAttribute('aria-pressed', on); }));
  function tournoi() {
    actifs = [...root.querySelectorAll('.ax-puce.ax-actif')].map(c => +c.dataset.s);
    if (actifs.length < 2) { $('.ax-barres').innerHTML = '<p class="ax-note">Choisir au moins deux stratégies.</p>'; return null; }
    M = actifs.map(i => actifs.map(j => match(i, j, TOURS).sa / TOURS));      // M[a][b] : gain moyen par tour de a contre b
    return actifs.map((i, a) => ({ i, moy: M[a].reduce((s, x) => s + x, 0) / actifs.length }));
  }
  $('[data-k="tournoi"]').addEventListener('click', () => {
    const res = tournoi(); if (!res) return;
    res.sort((x, y) => y.moy - x.moy);
    const lo = Math.max(0, Math.floor(Math.min(...res.map(x => x.moy)) * 2) / 2 - 0.5), hi = Math.max(...res.map(x => x.moy));
    $('.ax-barres').innerHTML = res.map((x, k) => `<div class="ax-barre" style="--c:${S[x.i][1]};animation-delay:${k * 60}ms"><span class="ax-rang${k < 3 ? ' ax-r' + (k + 1) : ''}">${k + 1}</span>` +
      `<span class="ax-bf"><span class="ax-bp" style="--w:0%" data-w="${(x.moy - lo) / (hi - lo) * 100}%"><span class="ax-bn">${S[x.i][0]}</span></span></span>` +
      `<span class="ax-bv">${fmt2(x.moy)}${GENTILS.has(x.i) ? '<span class="ax-bienv" title="bienveillante : ne trahit jamais la première">♥</span>' : '<span class="ax-bienv ax-vide"></span>'}</span></div>`).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => root.querySelectorAll('.ax-bp').forEach(s => s.style.setProperty('--w', s.dataset.w))));
    const k = res.filter(x => GENTILS.has(x.i)).length, c = res.slice(0, k).filter(x => GENTILS.has(x.i)).length;
    $('.ax-note').innerHTML = `Points gagnés en moyenne par tour, sur des matchs de ${TOURS} tours contre chaque stratégie, elle-même comprise (les barres partent de ${fmt2(lo)}). ` +
      (k ? `Les stratégies marquées <span class="ax-bienv">♥</span> sont bienveillantes&nbsp;: elles ne trahissent jamais les premières. ${c === k ? `Elles occupent les ${k} premières places.` : `Elles occupent ${c} des ${k} premières places.`} ` : '') +
      `Les stratégies aléatoires font varier le classement d'un tournoi à l'autre&nbsp;: relancez.`;
  });
  $('[data-k="tous"]').addEventListener('click', () => root.querySelectorAll('.ax-puce').forEach(c => { c.classList.add('ax-actif'); c.setAttribute('aria-pressed', 'true'); }));

  // --- l'évolution : parts de la population, empilées
  let anim = 0;
  $('[data-k="evol"]').addEventListener('click', () => {
    cancelAnimationFrame(anim);
    if (!tournoi()) { $('.ax-courbes').innerHTML = ''; return; }
    const k = actifs.length, G = 60, naif = $('[data-k="dep"]').value === 'naif' && actifs.includes(1);
    let x = naif ? actifs.map(i => i === 1 ? 0.7 : 0.3 / (k - 1)) : Array(k).fill(1 / k);
    const hist = [x];
    for (let g = 0; g < G; g++) {
      const f = M.map(row => row.reduce((s, v, b) => s + v * x[b], 0)), fm = f.reduce((s, v, a) => s + v * x[a], 0);
      x = x.map((v, a) => v * f[a] / fm); hist.push(x);
    }
    const W = 640, H = 300, gx = 40, gy = 10, larg = W - gx - 14, haut = H - gy - 30;
    const X = g => gx + larg * g / G, Y = v => gy + haut * (1 - v);
    let fond = '';
    for (let v = 0; v <= 1.0001; v += 0.25) fond += `<line x1="${gx}" y1="${Y(v)}" x2="${gx + larg}" y2="${Y(v)}" class="ax-grille"/><text x="${gx - 6}" y="${Y(v) + 4}" class="ax-grad" text-anchor="end">${Math.round(v * 100)}&nbsp;%</text>`;
    for (let g = 0; g <= G; g += 10) fond += `<text x="${X(g)}" y="${H - 10}" class="ax-grad" text-anchor="middle">${g}</text>`;
    fond += `<text x="${gx + larg}" y="${H - 10}" class="ax-grad" text-anchor="end" dx="-24">générations</text>`;
    // ordre d'empilement : les stratégies les plus présentes à la fin en bas
    const ordre = actifs.map((i, a) => a).sort((p, q) => hist[G][q] - hist[G][p]);
    $('.ax-legende').innerHTML = ordre.map(a => `<span style="--c:${S[actifs[a]][1]}">${S[actifs[a]][0]}</span>`).join('');
    const t0 = performance.now(), act = actifs.slice();
    (function frame(t) {
      const g = Math.max(0, Math.min(G, Math.floor((t - t0) / 50)));
      let h = fond, bas = Array(g + 1).fill(0);
      for (const a of ordre) {
        const haut1 = bas.map((b, gg) => b + hist[gg][a]);
        const pts = haut1.map((v, gg) => `${X(gg).toFixed(1)},${Y(v).toFixed(1)}`).concat(bas.map((v, gg) => `${X(gg).toFixed(1)},${Y(v).toFixed(1)}`).reverse());
        h += `<polygon points="${pts.join(' ')}" class="ax-aire" style="fill:${S[act[a]][1]}"/>`;
        const part = hist[g][a];
        if (part > 0.07 && g > 4) h += `<text x="${X(g) - 6}" y="${Y(bas[g] + part / 2) + 4}" class="ax-etiq" text-anchor="end">${S[act[a]][0]} ${Math.round(part * 100)}&nbsp;%</text>`;
        bas = haut1;
      }
      $('.ax-courbes').innerHTML = h;
      if (g < G) { anim = requestAnimationFrame(frame); return; }
      const fin = act.map((i, a) => ({ i, v: hist[G][a] })).sort((p, q) => q.v - p.v);
      $('.ax-note-evol').innerHTML = `Génération ${G}&nbsp;: ${fin.filter(p => p.v > 0.01).map(p => `${S[p.i][0]} ${Math.round(p.v * 100)}&nbsp;%`).join(', ')}. Une stratégie qui ne prospère qu'en exploitant les autres élimine ses proies, et disparaît avec elles.`;
    })(t0);
  });
  const noteEvol = () => { $('.ax-note-evol').innerHTML = `Chaque stratégie choisie dans l'onglet du tournoi reçoit une part de la population&nbsp;: ${$('[data-k="dep"]').value === 'naif' ? '70&nbsp;% pour Gentil, le reste à parts égales' : 'la même pour toutes'}. À chaque génération, la part de chacune est multipliée par ses gains moyens contre la population du moment, rapportés à la moyenne générale.`; };
  $('[data-k="dep"]').addEventListener('change', noteEvol);
  noteEvol();
  afficherMatch();
})();
