/* Le graphe des acteurs et des films : 187 films à succès, 8 264 acteurs, chaque
   acteur relié aux films où il joue (données IMDb préparées par R. Sedgewick et
   K. Wayne pour leur cours d'algorithmique de Princeton). Disposition calculée
   d'avance par simulation de forces (d3-force). Choisir un acteur trace son plus
   court chemin vers Kevin Bacon, trouvé par un parcours en largeur.
   Conteneur attendu : <div class="anim" data-anim="bacon"></div>                  */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="bacon"]');
  if (!root) return;
  const BASE = (document.currentScript && document.currentScript.src || '').replace(/js\/bacon\.js.*$/, '');

  const COUL = ['#FDE047', '#FB923C', '#F472B6', '#A78BFA', '#60A5FA', '#22D3EE', '#94A3B8'];   // nombre de Bacon 0, 1, 2…
  const HORS = '#475569';
  root.innerHTML = `
<div class="bc-cadre">
  <canvas class="bc-toile" role="img" aria-label="Graphe de plusieurs milliers d'acteurs et de films ; un acteur choisi est relié à Kevin Bacon par son plus court chemin"></canvas>
  <div class="bc-zoom"><button type="button" data-k="plus" aria-label="Zoomer">+</button><button type="button" data-k="moins" aria-label="Dézoomer">−</button><button type="button" data-k="tout" aria-label="Vue d'ensemble">⤢</button></div>
  <div class="bc-bulle" hidden></div>
  <p class="bc-attente">Chargement du graphe…</p>
</div>
<div class="bc-legende"></div>
<p class="bc-chemin" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Acteur <input type="text" data-k="acteur" list="bc-noms" size="22" spellcheck="false" autocomplete="off" placeholder="ex. Tom Hanks"></label>
  <datalist id="bc-noms"></datalist>
  <button type="button" data-k="go">Chemin vers Kevin Bacon</button>
  <button type="button" class="sec" data-k="hasard">Acteur au hasard</button>
  <span class="anim-astuce">Glisser pour se déplacer ; Ctrl + molette, pincement ou boutons pour zoomer ; cliquer un point pour le choisir.</span>
</div>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), bulle = $('.bc-bulle'), attente = $('.bc-attente'), leg = $('.bc-legende'), outC = $('.bc-chemin');
  const inA = $('[data-k="acteur"]');

  let D, F, A, N, X, Y, voisins, dist, pred, chemin = [], anim = 0, prog = 1, filtre = -1, dim, vue = { s: 1, ox: 0, oy: 0 };

  // ---------------------------------------------------------------- données
  function preparer(d) {
    D = d; F = d.films.length; A = d.acteurs.length; N = F + A;
    X = new Float32Array(N); Y = new Float32Array(N);
    for (let i = 0; i < N; i++) { X[i] = d.pos[2 * i]; Y[i] = d.pos[2 * i + 1]; }
    voisins = Array.from({ length: N }, () => []);
    d.casting.forEach((c, f) => c.forEach(a => { voisins[f].push(F + a); voisins[F + a].push(f); }));
    // parcours en largeur depuis Kevin Bacon
    const b = F + d.bacon; dist = new Int16Array(N).fill(-1); pred = new Int32Array(N).fill(-1);
    dist[b] = 0; const file = [b];
    for (let t = 0; t < file.length; t++) { const s = file[t]; for (const v of voisins[s]) if (dist[v] < 0) { dist[v] = dist[s] + 1; pred[v] = s; file.push(v); } }
    const compte = {};
    for (let j = 0; j < A; j++) { const k = dist[F + j] < 0 ? 'x' : dist[F + j] / 2; compte[k] = (compte[k] || 0) + 1; }
    leg.innerHTML = '<span class="bc-titre">Nombre de Bacon&nbsp;:</span>' + Object.keys(compte).sort().map(k => `<button type="button" data-n="${k}" title="Isoler ces acteurs"><i style="background:${k === 'x' ? HORS : COUL[k]}"></i>${k === 'x' ? 'hors d\'atteinte' : k} <small>(${compte[k].toLocaleString('fr-FR')})</small></button>`).join('') +
      `<span><i class="bc-film"></i>film</span>`;
    leg.querySelectorAll('button').forEach(bt => bt.addEventListener('click', () => {
      const k = bt.dataset.n === 'x' ? -2 : +bt.dataset.n;
      filtre = filtre === k ? -1 : k; leg.querySelectorAll('button').forEach(x => x.classList.toggle('bc-actif', x === bt && filtre !== -1)); dessiner();
    }));
    $('#bc-noms').innerHTML = D.acteurs.slice().sort((a, b) => a.localeCompare(b)).map(n => `<option value="${n.replace(/"/g, '&quot;')}">`).join('');
    attente.hidden = true;
    fit(); choisir(F + D.acteurs.indexOf('Tom Hanks'), false);
  }

  // ---------------------------------------------------------------- vue
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 700, h = Math.round(Math.min(w * 0.78, 640));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h };
    if (D) { vue = cadrage(0, 0, 1000, 1000); dessiner(); }
  }
  function cadrage(x0, y0, x1, y1, marge = 0.06) {
    const s = Math.min(dim.w / ((x1 - x0) * (1 + 2 * marge) || 1), dim.h / ((y1 - y0) * (1 + 2 * marge) || 1));
    return { s, ox: dim.w / 2 - s * (x0 + x1) / 2, oy: dim.h / 2 - s * (y0 + y1) / 2 };
  }
  function allerA(cible, ensuite) {
    cancelAnimationFrame(anim);
    const v0 = { ...vue }, t0 = performance.now();
    const f = t => {
      const u = Math.min(1, (t - t0) / 900), e = u * u * (3 - 2 * u);
      const s = v0.s * Math.pow(cible.s / v0.s, e);
      // interpole le centre de la vue, puis recalcule les décalages pour cette échelle
      const cx0 = (dim.w / 2 - v0.ox) / v0.s, cy0 = (dim.h / 2 - v0.oy) / v0.s, cx1 = (dim.w / 2 - cible.ox) / cible.s, cy1 = (dim.h / 2 - cible.oy) / cible.s;
      const cx = cx0 + (cx1 - cx0) * e, cy = cy0 + (cy1 - cy0) * e;
      vue = { s, ox: dim.w / 2 - s * cx, oy: dim.h / 2 - s * cy }; dessiner();
      if (u < 1) anim = requestAnimationFrame(f); else if (ensuite) ensuite();
    };
    anim = requestAnimationFrame(f);
  }

  // ---------------------------------------------------------------- dessin
  function dessiner() {
    if (!D || !dim) return;
    const g = cv.getContext('2d'), { w, h } = dim, { s, ox, oy } = vue;
    g.fillStyle = '#0B1020'; g.fillRect(0, 0, w, h);
    const sx = i => ox + s * X[i], sy = i => oy + s * Y[i];
    const visible = i => { const x = sx(i), y = sy(i); return x > -20 && x < w + 20 && y > -20 && y < h + 20; };
    const garde = i => filtre === -1 || (filtre === -2 ? dist[i] < 0 : dist[i] === 2 * filtre);
    // liens
    g.lineWidth = Math.min(1.2, 0.35 + s * 0.12);
    g.strokeStyle = `rgba(148, 170, 255, ${Math.min(0.22, 0.06 + s * 0.02)})`;
    g.beginPath();
    for (let f = 0; f < F; f++) for (const v of voisins[f]) {
      if (!visible(f) && !visible(v)) continue;
      if (filtre !== -1 && !garde(v)) continue;
      g.moveTo(sx(f), sy(f)); g.lineTo(sx(v), sy(v));
    }
    g.stroke();
    // acteurs, par couleur
    const r = Math.min(3.2, 0.9 + s * 0.35);
    for (let k = -1; k < COUL.length; k++) {
      g.fillStyle = k < 0 ? HORS : COUL[k]; g.beginPath();
      for (let j = 0; j < A; j++) {
        const i = F + j, d = dist[i]; if ((k < 0 ? d >= 0 : d !== 2 * k) || !visible(i)) continue;
        if (filtre !== -1 && !garde(i)) continue;
        g.moveTo(sx(i) + r, sy(i)); g.arc(sx(i), sy(i), r, 0, 2 * Math.PI);
      }
      g.globalAlpha = filtre === -1 ? 0.85 : 1; g.fill(); g.globalAlpha = 1;
    }
    // films
    const rf = Math.min(7, 2.2 + s * 0.6);
    g.fillStyle = '#F8FAFC'; g.shadowColor = 'rgba(255,255,255,0.8)'; g.shadowBlur = 8;
    g.beginPath(); for (let f = 0; f < F; f++) if (visible(f)) { g.moveTo(sx(f) + rf, sy(f)); g.arc(sx(f), sy(f), rf, 0, 2 * Math.PI); } g.fill();
    g.shadowBlur = 0;
    if (s > 2.2) {                                          // titres des films, de près
      g.font = '600 11px system-ui, sans-serif'; g.textAlign = 'center'; g.fillStyle = 'rgba(226,232,240,0.85)';
      for (let f = 0; f < F; f++) if (visible(f)) g.fillText(D.films[f], sx(f), sy(f) - rf - 4);
    }
    // Kevin Bacon
    const b = F + D.bacon;
    g.fillStyle = COUL[0]; g.shadowColor = COUL[0]; g.shadowBlur = 18;
    g.beginPath(); g.arc(sx(b), sy(b), 7, 0, 2 * Math.PI); g.fill(); g.shadowBlur = 0;
    etiquette(g, 'Kevin Bacon', sx(b), sy(b) - 12, COUL[0]);
    // le chemin
    if (chemin.length > 1) {
      const n = chemin.length - 1, fait = prog * n;
      g.lineWidth = 3.5; g.strokeStyle = '#FDE047'; g.shadowColor = '#FDE047'; g.shadowBlur = 12; g.lineCap = 'round';
      g.beginPath(); g.moveTo(sx(chemin[0]), sy(chemin[0]));
      for (let k = 1; k <= n; k++) {
        const a = chemin[k - 1], c = chemin[k], u = Math.max(0, Math.min(1, fait - (k - 1)));
        if (u <= 0) break;
        g.lineTo(sx(a) + (sx(c) - sx(a)) * u, sy(a) + (sy(c) - sy(a)) * u);
      }
      g.stroke(); g.shadowBlur = 0;
      chemin.forEach((i, k) => {
        if (k > fait + 0.001) return;
        const film = i < F;
        g.fillStyle = film ? '#F8FAFC' : (dist[i] >= 0 ? COUL[dist[i] / 2] : HORS);
        g.beginPath(); g.arc(sx(i), sy(i), film ? 6 : 5.5, 0, 2 * Math.PI); g.fill();
        g.strokeStyle = '#0B1020'; g.lineWidth = 1.5; g.stroke();
        etiquette(g, film ? D.films[i] : D.acteurs[i - F], sx(i), sy(i) + (k % 2 ? 20 : -12), film ? '#E2E8F0' : '#FDE68A');
      });
    }
  }
  function etiquette(g, t, x, y, c) {
    g.font = '600 12.5px system-ui, sans-serif'; g.textAlign = 'center';
    const L = Math.min(Math.max(x, g.measureText(t).width / 2 + 4), dim.w - g.measureText(t).width / 2 - 4);
    g.lineWidth = 4; g.strokeStyle = 'rgba(11,16,32,0.9)'; g.lineJoin = 'round'; g.strokeText(t, L, y);
    g.fillStyle = c; g.fillText(t, L, y);
  }

  // ---------------------------------------------------------------- choisir un acteur
  function choisir(i, animer = true) {
    if (i < 0 || i === undefined) return;
    chemin = [];
    if (dist[i] < 0) {
      outC.innerHTML = `<b>${i < F ? D.films[i] : D.acteurs[i - F]}</b> n'est relié à Kevin Bacon par aucun chemin : il appartient à un autre morceau du graphe.`;
      chemin = [i]; prog = 1; dessiner(); return;
    }
    for (let k = i; k >= 0; k = pred[k]) chemin.push(k);
    const noms = chemin.map(k => k < F ? `<span class="bc-f">${D.films[k]}</span>` : `<b>${D.acteurs[k - F]}</b>`);
    const nb = dist[i] / 2;
    outC.innerHTML = (i < F ? `Film à distance ${dist[i]} de Kevin Bacon : ` : `Nombre de Bacon de ${D.acteurs[i - F]} : <b class="bc-nb">${nb}</b>${nb ? ' — ' : ''}`) + (chemin.length > 1 ? noms.join(' → ') : '');
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const k of chemin) { x0 = Math.min(x0, X[k]); x1 = Math.max(x1, X[k]); y0 = Math.min(y0, Y[k]); y1 = Math.max(y1, Y[k]); }
    const m = Math.max(40, (x1 - x0) * 0.15, (y1 - y0) * 0.15);
    const cible = cadrage(x0 - m, y0 - m, x1 + m, y1 + m, 0.05);
    if (!animer) { prog = 1; dessiner(); return; }
    prog = 0;
    allerA(cible, () => {
      const t0 = performance.now(), duree = 500 * (chemin.length - 1);
      const f = t => { prog = Math.min(1, (t - t0) / duree); dessiner(); if (prog < 1) anim = requestAnimationFrame(f); };
      anim = requestAnimationFrame(f);
    });
  }
  function chercher() {
    const q = inA.value.trim().toLowerCase(); if (!q) return;
    let j = D.acteurs.findIndex(n => n.toLowerCase() === q);
    if (j < 0) j = D.acteurs.findIndex(n => n.toLowerCase().includes(q));
    if (j < 0) { outC.textContent = `Aucun acteur ne correspond à « ${inA.value} » dans ces ${F} films.`; return; }
    inA.value = D.acteurs[j]; choisir(F + j);
  }

  // ---------------------------------------------------------------- interactions
  // gestes : un doigt (ou la souris) déplace ; deux doigts zooment en gardant sous leur milieu
  // le point du graphe qui s'y trouvait, ce qui permet aussi de se déplacer en pinçant
  const pointeurs = new Map(); let glisse = false, depart = null, pince = null;
  function nouveauDepart() { const p = [...pointeurs.values()][0]; depart = p ? [p[0], p[1], vue.ox, vue.oy] : null; }
  function nouvellePince() {
    const [a, b] = [...pointeurs.values()], cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
    pince = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) || 1, s: vue.s, wx: (cx - vue.ox) / vue.s, wy: (cy - vue.oy) / vue.s };
  }
  cv.addEventListener('pointerdown', e => {
    try { cv.setPointerCapture(e.pointerId); } catch (_) {}
    pointeurs.set(e.pointerId, [e.offsetX, e.offsetY]);
    cancelAnimationFrame(anim); prog = 1;
    if (pointeurs.size === 1) { glisse = false; nouveauDepart(); }
    else if (pointeurs.size === 2) { glisse = true; nouvellePince(); }
  });
  cv.addEventListener('pointermove', e => {
    if (!D) return;
    if (pointeurs.has(e.pointerId)) {
      pointeurs.set(e.pointerId, [e.offsetX, e.offsetY]);
      if (pointeurs.size >= 2 && pince) {
        const [a, b] = [...pointeurs.values()], cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
        const s = Math.max(0.3, Math.min(60, pince.s * Math.hypot(a[0] - b[0], a[1] - b[1]) / pince.d));
        vue = { s, ox: cx - pince.wx * s, oy: cy - pince.wy * s }; dessiner(); return;
      }
      if (!depart) return;
      if (Math.hypot(e.offsetX - depart[0], e.offsetY - depart[1]) > 4) glisse = true;
      if (glisse) { vue.ox = depart[2] + e.offsetX - depart[0]; vue.oy = depart[3] + e.offsetY - depart[1]; dessiner(); }
      return;
    }
    const i = proche(e.offsetX, e.offsetY);
    if (i >= 0) { bulle.hidden = false; bulle.textContent = i < F ? D.films[i] : `${D.acteurs[i - F]}${dist[i] >= 0 ? ' · ' + dist[i] / 2 : ''}`; bulle.style.left = e.offsetX + 12 + 'px'; bulle.style.top = e.offsetY + 12 + 'px'; cv.style.cursor = 'pointer'; }
    else { bulle.hidden = true; cv.style.cursor = 'grab'; }
  });
  function lacher(e, choisirSiClic) {
    if (!pointeurs.has(e.pointerId)) return;
    pointeurs.delete(e.pointerId);
    if (pointeurs.size >= 2) nouvellePince();
    else { pince = null; nouveauDepart(); }            // le doigt restant repart d'ici, sans saut
    if (choisirSiClic && !glisse && D && pointeurs.size === 0) { const i = proche(e.offsetX, e.offsetY); if (i >= 0) { if (i >= F) inA.value = D.acteurs[i - F]; choisir(i); } }
  }
  cv.addEventListener('pointerup', e => lacher(e, true));
  cv.addEventListener('pointercancel', e => lacher(e, false));
  cv.addEventListener('pointerleave', () => { bulle.hidden = true; });
  cv.addEventListener('wheel', e => { if (!(e.ctrlKey || e.metaKey) || !D) return; e.preventDefault(); zoomer(Math.exp(-e.deltaY * 0.0015), e.offsetX, e.offsetY); }, { passive: false });
  function zoomer(k, cx, cy) {
    const s = Math.max(0.3, Math.min(60, vue.s * k)); k = s / vue.s;
    vue = { s, ox: cx - (cx - vue.ox) * k, oy: cy - (cy - vue.oy) * k }; prog = 1; cancelAnimationFrame(anim); dessiner();
  }
  function proche(x, y) {
    let best = -1, bd = 10 * 10;
    for (let i = 0; i < N; i++) { const dx = vue.ox + vue.s * X[i] - x, dy = vue.oy + vue.s * Y[i] - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  $('[data-k="plus"]').addEventListener('click', () => zoomer(1.6, dim.w / 2, dim.h / 2));
  $('[data-k="moins"]').addEventListener('click', () => zoomer(1 / 1.6, dim.w / 2, dim.h / 2));
  $('[data-k="tout"]').addEventListener('click', () => allerA(cadrage(0, 0, 1000, 1000)));
  $('[data-k="go"]').addEventListener('click', chercher);
  inA.addEventListener('keydown', e => { if (e.key === 'Enter') chercher(); });
  inA.addEventListener('change', chercher);
  $('[data-k="hasard"]').addEventListener('click', () => { if (!D) return; let j; do { j = Math.floor(Math.random() * A); } while (dist[F + j] < 4); inA.value = D.acteurs[j]; choisir(F + j); });
  window.addEventListener('resize', () => { fit(); });

  // ---------------------------------------------------------------- chargement à l'approche
  fit();
  const io = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return; io.disconnect();
    fetch(BASE + 'data/bacon.json').then(r => r.json()).then(preparer).catch(() => { attente.textContent = 'Le graphe n\'a pas pu être chargé.'; });
  }, { rootMargin: '400px' });
  io.observe(root);
})();
