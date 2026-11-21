/* Recherche du doublon par l'algorithme du lièvre et de la tortue (Floyd).
   Le tableau t (n+1 cases, valeurs entre 1 et n) est lu comme une fonction
   i -> t[i] : en partant de la case 0, on suit un chemin qui finit par boucler.
   Le chemin a la forme d'un ρ, et l'entrée de la boucle est le doublon.
   Conteneur attendu : <div class="anim" data-anim="floyd"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="floyd"]');
  if (!root) return;

  const N = 11;                                   // valeurs de 1 à N, tableau de N+1 cases

  root.innerHTML = `
<div class="fl-tete">
  <div class="fl-phases"><span data-ph="1">Phase 1 : le lièvre rattrape la tortue</span><span data-ph="2">Phase 2 : même allure, rendez-vous</span></div>
  <div class="fl-leg"><span class="fl-jt">🐢 tortue : 1 pas</span><span class="fl-jl">🐇 lièvre : <b data-o="vit">2 pas</b></span></div>
</div>
<div class="fl-cadre"><svg class="fl-svg" role="img" aria-label="Le tableau, puis le chemin 0, t[0], t[t[0]]… dessiné comme un graphe en forme de lettre grecque rhô ; la tortue avance d'un pas, le lièvre de deux"></svg></div>
<p class="fl-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Pas suivant</button>
  <button type="button" class="sec" data-k="auto">Lecture</button>
  <button type="button" class="sec" data-k="neuf">Nouveau tableau</button>
</div>`;

  const $ = s => root.querySelector(s);
  const svg = $('svg'), info = $('.fl-info'), btnPas = $('[data-k="pas"]'), btnAuto = $('[data-k="auto"]'), btnNeuf = $('[data-k="neuf"]');
  let t, chemin, mu, lambda, st, timer = 0;

  // ---------------------------------------------------------------- tableau aléatoire au ρ bien visible
  function tirage() {
    for (;;) {
      const p = Array.from({ length: N }, (_, i) => i + 1);
      for (let i = p.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
      const d = 1 + Math.floor(Math.random() * N);
      const tab = [...p]; tab.splice(Math.floor(Math.random() * (N + 1)), 0, d);
      const vus = new Map(), ch = []; let i = 0;
      while (!vus.has(i)) { vus.set(i, ch.length); ch.push(i); i = tab[i]; }
      const m = vus.get(i), l = ch.length - m;
      if (m >= 3 && m <= 6 && l >= 4 && l <= 8) return { tab, ch, m, l };
    }
  }
  function nouveau() {
    const r = tirage(); t = r.tab; chemin = r.ch; mu = r.m; lambda = r.l;
    st = { phase: 1, tortue: 0, lievre: 0, pas: 0, fini: false, traceT: [], traceL: [] };
    message(); draw();
  }

  // ---------------------------------------------------------------- un pas de l'algorithme
  function pas() {
    if (st.fini) return;
    st.traceT = []; st.traceL = [];
    if (st.phase === 1) {
      st.traceT = [st.tortue]; st.traceL = [st.lievre, t[st.lievre]];
      st.tortue = t[st.tortue]; st.lievre = t[t[st.lievre]]; st.pas++;
      if (st.tortue === st.lievre) { st.phase = 1.5; st.rencontre = st.tortue; }
    } else if (st.phase === 1.5) {
      st.phase = 2; st.tortue = 0; st.pas2 = 0;
    } else {
      st.traceT = [st.tortue]; st.traceL = [st.lievre];
      st.tortue = t[st.tortue]; st.lievre = t[st.lievre]; st.pas2++;
      if (st.tortue === st.lievre) { st.fini = true; arreter(); }
    }
    message(); draw();
  }
  function message() {
    if (st.phase === 1 && st.pas === 0)
      info.innerHTML = `Phase 1 : la <b class="fl-ct">tortue</b> avance d'un pas (i → t[i]), le <b class="fl-cl">lièvre</b> de deux. Tous deux partent de la case 0.`;
    else if (st.phase === 1)
      info.innerHTML = `Phase 1, pas ${st.pas}&nbsp;: <b class="fl-ct">tortue en ${st.tortue}</b>, <b class="fl-cl">lièvre en ${st.lievre}</b>. Une fois dans la boucle, le lièvre rattrape la tortue d'une case à chaque pas.`;
    else if (st.phase === 1.5)
      info.innerHTML = `<b>Rencontre en ${st.rencontre}</b>, dans la boucle, après ${st.pas} pas. Phase 2 : on renvoie la tortue au départ, et chacun avance désormais d'un seul pas.`;
    else if (!st.fini)
      info.innerHTML = `Phase 2, pas ${st.pas2}&nbsp;: <b class="fl-ct">tortue en ${st.tortue}</b>, <b class="fl-cl">lièvre en ${st.lievre}</b>. Ils se retrouveront exactement à l'entrée de la boucle.`;
    else
      info.innerHTML = `Ils se retrouvent en <b class="fl-co">${st.tortue}</b>&nbsp;: c'est l'entrée de la boucle, donc une valeur que deux cases du tableau désignent. Le doublon est <b class="fl-co">${st.tortue}</b>, trouvé sans modifier le tableau ni mémoriser autre chose que deux indices.`;
  }

  // ---------------------------------------------------------------- dessin
  function draw() {
    root.querySelectorAll('[data-ph]').forEach(x => x.classList.toggle('fl-on', st.phase === 1 ? x.dataset.ph === '1' : x.dataset.ph === '2'));
    $('[data-o="vit"]').textContent = st.phase === 1 ? '2 pas' : '1 pas';
    const W = Math.max(340, Math.min(760, root.clientWidth || 640)), petit = W < 520;
    // --- le tableau
    const cw = Math.min(48, (W - 24) / (N + 1)), ch = cw * 0.82, x0 = (W - cw * (N + 1)) / 2, y0 = 22;
    const fin = st.fini ? st.tortue : null;
    let h = `<defs><marker id="fl-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#94a3b8"/></marker>` +
            `<marker id="fl-flt" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0D9488"/></marker>` +
            `<marker id="fl-fll" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#DB2777"/></marker></defs>`;
    for (let i = 0; i <= N; i++) {
      const x = x0 + i * cw, sur = chemin.includes(i), dbl = fin !== null && t[i] === fin;
      h += `<text x="${x + cw / 2}" y="${y0 - 6}" class="fl-idx">${i}</text>` +
           `<rect x="${x + 1}" y="${y0}" width="${cw - 2}" height="${ch}" rx="6" class="fl-case${sur ? ' fl-sur' : ''}${dbl ? ' fl-dbl' : ''}"/>` +
           `<text x="${x + cw / 2}" y="${y0 + ch * 0.66}" class="fl-val" style="font-size:${Math.round(cw * 0.38)}px">${t[i]}</text>`;
    }
    const jeton = (i, e, dy) => `<text x="${x0 + i * cw + cw / 2}" y="${y0 + ch + dy}" class="fl-jeton">${e}</text>`;
    h += jeton(st.tortue, '🐢', 19) + jeton(st.lievre, '🐇', st.lievre === st.tortue ? 37 : 19);
    if (fin !== null) h += `<text x="${W / 2}" y="${y0 + ch + 58}" class="fl-note">les deux cases encadrées contiennent ${fin}&nbsp;: c'est le doublon</text>`;
    // --- le ρ : la queue sur une ligne, la boucle sur un cercle
    const top = y0 + ch + (fin !== null ? 76 : 56);
    let R, cy, cx, pasQ, H;
    const pos = new Map(), entree = chemin[mu];
    if (petit) {                                         // écran étroit : la queue descend vers le haut de la boucle
      R = Math.min(92, 34 + lambda * 7); pasQ = 40; cx = W / 2;
      cy = top + 14 + mu * pasQ + R; H = cy + R + 66;
      for (let k = 0; k < lambda; k++) { const a = Math.PI / 2 + 2 * Math.PI * k / lambda; pos.set(chemin[mu + k], { x: cx + R * Math.cos(a), y: cy - R * Math.sin(a) }); }
      const E0 = pos.get(entree);
      for (let k = 0; k < mu; k++) pos.set(chemin[k], { x: E0.x, y: E0.y - (mu - k) * pasQ });
    } else {
      R = Math.min(100, 30 + lambda * 10); cy = top + R + 46; H = cy + R + 62;
      pasQ = Math.min(64, (W - 2 * R - 130) / Math.max(1, mu)); cx = W / 2 + mu * pasQ / 2;
      for (let k = 0; k < lambda; k++) { const a = Math.PI + 2 * Math.PI * k / lambda; pos.set(chemin[mu + k], { x: cx + R * Math.cos(a), y: cy - R * Math.sin(a) }); }
      const E0 = pos.get(entree);
      for (let k = 0; k < mu; k++) pos.set(chemin[k], { x: E0.x - (mu - k) * pasQ, y: cy });
    }
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const E = pos.get(entree);
    const rn = Math.max(10, Math.min(16, pasQ * 0.38, R * Math.sin(Math.PI / lambda) * 0.75));
    // fond : l'anneau de la boucle et la queue
    const D = pos.get(chemin[0]);
    h += `<circle cx="${cx}" cy="${cy}" r="${R}" class="fl-anneau"/><line x1="${D.x}" y1="${D.y}" x2="${E.x}" y2="${E.y}" class="fl-qfond"/>`;
    h += (petit ? `<text x="${D.x - rn - 6}" y="${D.y + 4}" class="fl-lab" text-anchor="end" style="text-anchor:end">départ</text>` : `<text x="${D.x}" y="${D.y - rn - 8}" class="fl-lab">départ</text>`) + `<text x="${petit ? cx : cx + R * 0.15}" y="${petit ? cy + R * 0.3 : cy + R * 0.45}" class="fl-rho">boucle de ${lambda}</text>`;
    // arêtes i -> t[i], suivant l'anneau pour la boucle
    const arete = (i, cls, mk) => {
      const j = t[i], p = pos.get(i), q = pos.get(j);
      const ki = chemin.indexOf(i);
      if (ki >= mu) {                                    // arc de cercle entre deux nœuds de la boucle
        const a1 = Math.atan2(cy - p.y, p.x - cx), a2 = Math.atan2(cy - q.y, q.x - cx), d = rn / R;
        const b1 = a1 + d, b2 = a2 - d;
        const P1 = [cx + R * Math.cos(b1), cy - R * Math.sin(b1)], P2 = [cx + R * Math.cos(b2), cy - R * Math.sin(b2)];
        return `<path d="M${P1[0]} ${P1[1]}A${R} ${R} 0 0 0 ${P2[0]} ${P2[1]}" class="${cls}" marker-end="url(#${mk})"/>`;
      }
      const a = Math.atan2(q.y - p.y, q.x - p.x);
      return `<line x1="${p.x + rn * Math.cos(a)}" y1="${p.y + rn * Math.sin(a)}" x2="${q.x - (rn + 1) * Math.cos(a)}" y2="${q.y - (rn + 1) * Math.sin(a)}" class="${cls}" marker-end="url(#${mk})"/>`;
    };
    for (const i of chemin) h += arete(i, 'fl-arete', 'fl-fl');
    for (const i of st.traceT || []) h += arete(i, 'fl-arete fl-at', 'fl-flt');
    for (const i of st.traceL || []) h += arete(i, 'fl-arete fl-al', 'fl-fll');
    for (const [i, p] of pos) {
      const e = i === entree;
      h += `<circle cx="${p.x}" cy="${p.y}" r="${rn}" class="fl-noeud${e ? ' fl-entree' : ''}${e && st.fini ? ' fl-trouve' : ''}"/><text x="${p.x}" y="${p.y + rn * 0.36}" class="fl-n" style="font-size:${Math.round(rn * 1.0)}px">${i}</text>`;
    }
    // direction « vers l'extérieur » d'un nœud : radiale pour la boucle, perpendiculaire à la queue sinon ;
    // à l'entrée, la queue arrive par l'extérieur : on tourne d'un huitième de tour pour l'éviter
    const dirNoeud = (i, tourne) => {
      if (chemin.indexOf(i) < mu) return petit ? [1, 0] : [0, 1];
      const p = pos.get(i), a = Math.atan2(cy - p.y, p.x - cx) + (i === entree ? tourne : 0);
      return [Math.cos(a), -Math.sin(a)];
    };
    const [lx, ly] = dirNoeud(entree, Math.PI / 4), dl = rn + 14;
    h += `<text x="${E.x + lx * dl}" y="${E.y + ly * dl + 4}" class="fl-lab fl-lent" style="text-anchor:${lx < -0.3 ? 'end' : lx > 0.3 ? 'start' : 'middle'}">entrée</text>`;
    // les deux coureurs, à l'extérieur de leur nœud ; côte à côte s'ils sont sur le même
    const pion = (i, e, cote) => {
      const p = pos.get(i); if (!p) return '';
      // à l'entrée, flèches et étiquette occupent l'extérieur : les jetons se placent à l'intérieur de l'anneau
      const [ux, uy] = dirNoeud(i, 0), [vx, vy] = i === entree ? [-ux, -uy] : [ux, uy], d = rn + 15, x = p.x + vx * d - vy * 13 * cote, y = p.y + vy * d + vx * 13 * cote;
      return `<g class="fl-pion" style="transform:translate(${x}px, ${y}px)"><circle r="12" class="${e === '🐢' ? 'fl-pt' : 'fl-pl'}"/><text y="5" class="fl-em">${e}</text></g>`;
    };
    const meme = st.tortue === st.lievre;
    h += pion(st.tortue, '🐢', meme ? -1 : 0) + pion(st.lievre, '🐇', meme ? 1 : 0);
    if (st.fini) h += `<text x="${W - 10}" y="${H - 8}" class="fl-badge" style="text-anchor:end">doublon : ${st.tortue}</text>`;
    h += `<text x="10" y="${H - 8}" class="fl-bas">${petit ? `queue ${mu} · boucle ${lambda}` : `queue : ${mu} cases · boucle : ${lambda} cases · ${st.phase === 1 ? `pas ${st.pas}` : `phase 2, pas ${st.pas2 || 0}`}`}</text>`;
    svg.innerHTML = h;
  }

  function arreter() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Lecture'; }
  btnPas.addEventListener('click', () => { arreter(); pas(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { arreter(); return; }
    if (st.fini) nouveau();
    btnAuto.textContent = 'Pause'; timer = setInterval(pas, 900);
  });
  btnNeuf.addEventListener('click', () => { arreter(); nouveau(); });
  let larg = 0; window.addEventListener('resize', () => { if (Math.abs(root.clientWidth - larg) > 8) { larg = root.clientWidth; draw(); } });
  nouveau();
})();
