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
  <div class="anim-ctrl">
    <label><select data-k="a">${S.map((s, i) => `<option value="${i}"${i === 0 ? ' selected' : ''}>${s[0]}</option>`).join('')}</select></label>
    <span>contre</span>
    <label><select data-k="b">${S.map((s, i) => `<option value="${i}"${i === 8 ? ' selected' : ''}>${s[0]}</option>`).join('')}</select></label>
    <button type="button" class="sec" data-k="rejouer">Rejouer</button>
  </div>
  <div class="ax-match"></div>
</div>
<div class="ax-vue" data-vue="tournoi" hidden>
  <div class="ax-choix">${S.map((s, i) => `<label title="${s[2]}"><input type="checkbox" data-s="${i}" checked> <span style="--c:${s[1]}">${s[0]}</span></label>`).join('')}</div>
  <div class="anim-ctrl"><button type="button" data-k="tournoi">Lancer le tournoi</button><button type="button" class="sec" data-k="tous">Tout cocher</button></div>
  <div class="ax-barres"></div>
  <p class="ax-note"></p>
</div>
<div class="ax-vue" data-vue="evol" hidden>
  <svg class="ax-courbes" viewBox="0 0 640 300" role="img" aria-label="Évolution de la part de chaque stratégie dans la population, génération après génération"></svg>
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

  // --- un match
  function afficherMatch() {
    const i = +$('[data-k="a"]').value, j = +$('[data-k="b"]').value, n = 30, m = match(i, j, n);
    const rangee = (c, s) => `<div class="ax-rangee">${c.map(x => `<span class="ax-${x}">${x}</span>`).join('')}</div>`;
    $('.ax-match').innerHTML = `
<p class="ax-desc"><b style="color:${S[i][1]}">${S[i][0]}</b>&nbsp;: ${S[i][2]}.<br><b style="color:${S[j][1]}">${S[j][0]}</b>&nbsp;: ${S[j][2]}.</p>
<div class="ax-duel"><div class="ax-nom">${S[i][0]}</div>${rangee(m.a)}<div class="ax-nom">${S[j][0]}</div>${rangee(m.b)}</div>
<p class="ax-score">Sur ${n} tours&nbsp;: <b style="color:${S[i][1]}">${m.sa}</b> points contre <b style="color:${S[j][1]}">${m.sb}</b>. <span class="ax-gris">(C&nbsp;: coopère, T&nbsp;: trahit. Deux coopérations rapportent 3 à chacun, deux trahisons 1, une trahison contre une coopération 5 au traître et 0 à l'autre.)</span></p>`;
  }
  ['a', 'b'].forEach(k => $(`[data-k="${k}"]`).addEventListener('change', afficherMatch));
  $('[data-k="rejouer"]').addEventListener('click', afficherMatch);

  // --- le tournoi
  let M = null, actifs = null;
  function tournoi() {
    actifs = [...root.querySelectorAll('[data-s]')].filter(c => c.checked).map(c => +c.dataset.s);
    if (actifs.length < 2) { $('.ax-barres').innerHTML = '<p>Cochez au moins deux stratégies.</p>'; return null; }
    M = actifs.map(i => actifs.map(j => match(i, j, TOURS).sa / TOURS));      // M[a][b] : gain moyen par tour de a contre b
    return actifs.map((i, a) => ({ i, moy: M[a].reduce((s, x) => s + x, 0) / actifs.length }));
  }
  $('[data-k="tournoi"]').addEventListener('click', () => {
    const res = tournoi(); if (!res) return;
    res.sort((x, y) => y.moy - x.moy);
    $('.ax-barres').innerHTML = res.map((x, k) => `<div class="ax-barre"><span class="ax-rang">${k + 1}</span><span class="ax-bn">${S[x.i][0]}${GENTILS.has(x.i) ? ' ●' : ''}</span><span class="ax-bf"><span style="--c:${S[x.i][1]};--w:0%" data-w="${x.moy / 5 * 100}%"></span></span><span class="ax-bv">${fmt2(x.moy)}</span></div>`).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => root.querySelectorAll('.ax-bf > span').forEach(s => s.style.setProperty('--w', s.dataset.w))));
    const k = res.filter(x => GENTILS.has(x.i)).length, c = res.slice(0, k).filter(x => GENTILS.has(x.i)).length;
    $('.ax-note').innerHTML = `Points gagnés en moyenne par tour, sur des matchs de ${TOURS} tours contre chaque stratégie, elle-même comprise. ` +
      (k ? `Les stratégies marquées ● sont bienveillantes&nbsp;: elles ne trahissent jamais les premières. ${c === k ? `Elles occupent les ${k} premières places.` : `Elles occupent ${c} des ${k} premières places.`} ` : '') +
      `Les stratégies aléatoires font varier le classement d'un tournoi à l'autre&nbsp;: relancez.`;
  });
  $('[data-k="tous"]').addEventListener('click', () => root.querySelectorAll('[data-s]').forEach(c => { c.checked = true; }));

  // --- l'évolution
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
    const W = 640, H = 300, gx = 34, gy = 12, larg = W - gx - 120, haut = H - gy - 28;
    const ymax = Math.min(1, Math.max(0.2, Math.ceil(Math.max(...hist.flat()) * 10) / 10));
    const X = g => gx + larg * g / G, Y = v => gy + haut * (1 - v / ymax);
    let fond = `<line x1="${gx}" y1="${gy + haut}" x2="${gx + larg}" y2="${gy + haut}" class="ax-axe"/><line x1="${gx}" y1="${gy}" x2="${gx}" y2="${gy + haut}" class="ax-axe"/>`;
    for (let v = 0; v <= ymax + 1e-9; v += 0.1) fond += `<text x="${gx - 5}" y="${Y(v) + 4}" class="ax-grad" text-anchor="end">${Math.round(v * 100)}&nbsp;%</text>`;
    for (let g = 0; g <= G; g += 10) fond += `<text x="${X(g)}" y="${H - 8}" class="ax-grad" text-anchor="middle">${g}</text>`;
    fond += `<text x="${gx + larg + 6}" y="${H - 8}" class="ax-grad">générations</text>`;
    const t0 = performance.now(), act = actifs.slice();
    (function frame(t) {
      const g = Math.max(0, Math.min(G, Math.floor((t - t0) / 50)));
      let h = fond;
      const fin = act.map((i, a) => ({ i, a, v: hist[g][a] })).sort((p, q) => q.v - p.v);
      for (const { i, a } of fin.slice().reverse()) h += `<polyline points="${hist.slice(0, g + 1).map((x, gg) => `${X(gg).toFixed(1)},${Y(x[a]).toFixed(1)}`).join(' ')}" class="ax-ligne" style="stroke:${S[i][1]}"/>`;
      let dernierY = -99;
      for (const { i, v } of fin.slice(0, 6)) { if (v < 0.02) break; let y = Y(v) + 4; if (y - dernierY < 13) y = dernierY + 13; dernierY = y; h += `<text x="${X(g) + 6}" y="${y}" class="ax-etiq" style="fill:${S[i][1]}">${S[i][0]}</text>`; }
      $('.ax-courbes').innerHTML = h;
      if (g < G) anim = requestAnimationFrame(frame);
      else $('.ax-note-evol').innerHTML = `Génération ${G}&nbsp;: ${fin.filter(p => p.v > 0.01).map(p => `${S[p.i][0]} ${Math.round(p.v * 100)}&nbsp;%`).join(', ')}. ` +
        `Une stratégie qui ne prospère qu'en exploitant les autres élimine ses proies, et disparaît avec elles.`;
    })(t0);
  });

  const noteEvol = () => { $('.ax-note-evol').innerHTML = `Chaque stratégie cochée dans l'onglet du tournoi reçoit une part de la population&nbsp;: ${$('[data-k="dep"]').value === 'naif' ? '70&nbsp;% pour Gentil, le reste à parts égales' : 'la même pour toutes'}. À chaque génération, la part de chacune est multipliée par ses gains moyens contre la population du moment, rapportés à la moyenne générale.`; };
  $('[data-k="dep"]').addEventListener('change', noteEvol);
  noteEvol();
  afficherMatch();
})();
