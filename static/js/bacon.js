/* Le graphe des acteurs et des films américains de 1980 à 2023 (listes de films
   de Wikipédia, compilées dans le dépôt wikipedia-movie-data) : chaque acteur est
   relié aux films dont il fait partie de la distribution principale. Disposition
   calculée d'avance par simulation de forces (d3-force) ; rendu WebGL (three.js)
   pour les dizaines de milliers de points et de liens, chemin et noms dessinés
   sur un calque 2D. Choisir un acteur trace son plus court chemin vers Kevin
   Bacon, trouvé par un parcours en largeur.
   Conteneur attendu : <div class="anim" data-anim="bacon"></div>                    */
import * as THREE from './vendor/three.module.min.js';

const root = document.querySelector('.anim[data-anim="bacon"]');
if (root) init(root);

function init(root) {
  const BASE = new URL('../', import.meta.url).href;
  const COUL = ['#FDE047', '#FB923C', '#F472B6', '#A78BFA', '#60A5FA', '#22D3EE', '#34D399', '#94A3B8'];   // nombre de Bacon 0, 1, 2…
  const HORS = '#3B4660', FOND = 0x0B1020;
  root.innerHTML = `
<div class="bc-cadre">
  <canvas class="bc-toile" aria-hidden="true"></canvas>
  <canvas class="bc-calque" role="img" aria-label="Graphe de dizaines de milliers d'acteurs et de films ; un acteur choisi est relié à Kevin Bacon par son plus court chemin"></canvas>
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
  const toile = $('.bc-toile'), cv = $('.bc-calque'), bulle = $('.bc-bulle'), attente = $('.bc-attente'), leg = $('.bc-legende'), outC = $('.bc-chemin');
  const inA = $('[data-k="acteur"]');

  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: toile, antialias: true }); }
  catch (e) { attente.textContent = 'Votre navigateur ne peut pas afficher ce graphe (WebGL indisponible).'; return; }
  renderer.setClearColor(FOND, 1);
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(0, 1, 0, 1, -10, 10);
  let D, F, A, N, X, Y, voisins, dist, pred, points, liens, chemin = [], anim = 0, prog = 1, filtre = -1, dim, vue = { s: 1, ox: 0, oy: 0 }, E = 4000;

  // ---------------------------------------------------------------- données et géométrie
  function preparer(d) {
    D = d; F = d.films.length; A = d.acteurs.length; N = F + A; E = d.echelle || 1000;
    X = new Float32Array(N); Y = new Float32Array(N);
    for (let i = 0; i < N; i++) { X[i] = d.pos[2 * i]; Y[i] = d.pos[2 * i + 1]; }
    voisins = Array.from({ length: N }, () => []);
    d.casting.forEach((c, f) => c.forEach(a => { voisins[f].push(F + a); voisins[F + a].push(f); }));
    const b = F + d.bacon; dist = new Int16Array(N).fill(-1); pred = new Int32Array(N).fill(-1);
    dist[b] = 0; const file = [b];
    for (let t = 0; t < file.length; t++) { const s = file[t]; for (const v of voisins[s]) if (dist[v] < 0) { dist[v] = dist[s] + 1; pred[v] = s; file.push(v); } }

    // liens : un segment par couple (film, acteur), lumière additive
    let nl = 0; d.casting.forEach(c => { nl += c.length; });
    const pl = new Float32Array(nl * 6); let k = 0;
    d.casting.forEach((c, f) => c.forEach(a => { pl[k++] = X[f]; pl[k++] = Y[f]; pl[k++] = 0; pl[k++] = X[F + a]; pl[k++] = Y[F + a]; pl[k++] = 0; }));
    const gl = new THREE.BufferGeometry(); gl.setAttribute('position', new THREE.BufferAttribute(pl, 3));
    liens = new THREE.LineSegments(gl, new THREE.LineBasicMaterial({ color: 0x4F68C8, transparent: true, opacity: 0.05, depthWrite: false }));
    scene.add(liens);
    // points : disques lumineux, films plus gros
    const pp = new Float32Array(N * 3), pc = new Float32Array(N * 3), pt = new Float32Array(N), pa = new Float32Array(N), c = new THREE.Color();
    for (let i = 0; i < N; i++) {
      pp[3 * i] = X[i]; pp[3 * i + 1] = Y[i]; pp[3 * i + 2] = i < F ? 1 : 0.5;
      c.set(i < F ? '#B8C4D9' : dist[i] < 0 ? HORS : COUL[Math.min(dist[i] / 2, COUL.length - 1)]);
      pc[3 * i] = c.r; pc[3 * i + 1] = c.g; pc[3 * i + 2] = c.b;
      pt[i] = i < F ? 2.4 : 2.1; pa[i] = i < F ? 0.75 : 0.95;
    }
    const gp = new THREE.BufferGeometry();
    gp.setAttribute('position', new THREE.BufferAttribute(pp, 3)); gp.setAttribute('couleur', new THREE.BufferAttribute(pc, 3));
    gp.setAttribute('taille', new THREE.BufferAttribute(pt, 1)); gp.setAttribute('alpha', new THREE.BufferAttribute(pa, 1));
    points = new THREE.Points(gp, new THREE.ShaderMaterial({
      uniforms: { uZoom: { value: 1 }, uDpr: { value: 1 } },
      vertexShader: `attribute vec3 couleur; attribute float taille; attribute float alpha; uniform float uZoom; uniform float uDpr;
        varying vec3 vC; varying float vA;
        void main() { vC = couleur; vA = alpha; gl_PointSize = taille * uZoom * uDpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec3 vC; varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(vC, vA * smoothstep(0.5, 0.25, d)); }`,
      transparent: true, depthWrite: false
    }));
    scene.add(points);

    const compte = {};
    for (let j = 0; j < A; j++) { const kk = dist[F + j] < 0 ? 'x' : dist[F + j] / 2; compte[kk] = (compte[kk] || 0) + 1; }
    leg.innerHTML = '<span class="bc-titre">Nombre de Bacon&nbsp;:</span>' + Object.keys(compte).sort().map(kk => `<button type="button" data-n="${kk}" title="Isoler ces acteurs"><i style="background:${kk === 'x' ? HORS : COUL[kk]}"></i>${kk === 'x' ? 'hors d\'atteinte' : kk} <small>(${compte[kk].toLocaleString('fr-FR')})</small></button>`).join('') +
      `<span><i class="bc-film"></i>film</span>`;
    leg.querySelectorAll('button').forEach(bt => bt.addEventListener('click', () => {
      const kk = bt.dataset.n === 'x' ? -2 : +bt.dataset.n;
      filtre = filtre === kk ? -1 : kk; leg.querySelectorAll('button').forEach(x => x.classList.toggle('bc-actif', x === bt && filtre !== -1));
      const al = points.geometry.attributes.alpha;
      for (let i = 0; i < N; i++) al.array[i] = i < F ? (filtre === -1 ? 0.75 : 0.25) : filtre === -1 ? 0.95 : (filtre === -2 ? dist[i] < 0 : dist[i] === 2 * filtre) ? 1 : 0.05;
      al.needsUpdate = true; rendre();
    }));
    // suggestions : les acteurs d'au moins deux films (la recherche, elle, couvre tout le monde)
    $('#bc-noms').innerHTML = D.acteurs.map((n, j) => [n, voisins[F + j].length]).filter(x => x[1] >= 2).map(x => x[0]).sort((a, b) => a.localeCompare(b))
      .map(n => `<option value="${n.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`).join('');
    attente.hidden = true;
    fit();
    const th = D.acteurs.indexOf('Tom Hanks');                       // le graphe entier, puis un premier chemin
    if (th >= 0) setTimeout(() => { if (!chemin.length && !pointeurs.size) { inA.value = 'Tom Hanks'; choisir(F + th); } }, 1400);
  }

  // ---------------------------------------------------------------- vue
  function fit() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), w = cv.clientWidth || 700, h = Math.round(Math.min(w * 0.8, 680));
    [toile, cv].forEach(c => { c.style.height = h + 'px'; });
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); dim = { w, h, dpr };
    if (D) { points.material.uniforms.uDpr.value = dpr; vue = cadrage(0, 0, E, E); rendre(); }
  }
  function cadrage(x0, y0, x1, y1, marge = 0.04) {
    const s = Math.min(dim.w / ((x1 - x0) * (1 + 2 * marge) || 1), dim.h / ((y1 - y0) * (1 + 2 * marge) || 1));
    return { s, ox: dim.w / 2 - s * (x0 + x1) / 2, oy: dim.h / 2 - s * (y0 + y1) / 2 };
  }
  function allerA(cible, ensuite) {
    cancelAnimationFrame(anim);
    const v0 = { ...vue }, t0 = performance.now();
    const f = t => {
      const u = Math.min(1, (t - t0) / 1000), e = u * u * (3 - 2 * u), s = v0.s * Math.pow(cible.s / v0.s, e);
      const cx0 = (dim.w / 2 - v0.ox) / v0.s, cy0 = (dim.h / 2 - v0.oy) / v0.s, cx1 = (dim.w / 2 - cible.ox) / cible.s, cy1 = (dim.h / 2 - cible.oy) / cible.s;
      const cx = cx0 + (cx1 - cx0) * e, cy = cy0 + (cy1 - cy0) * e;
      vue = { s, ox: dim.w / 2 - s * cx, oy: dim.h / 2 - s * cy }; rendre();
      if (u < 1) anim = requestAnimationFrame(f); else if (ensuite) ensuite();
    };
    anim = requestAnimationFrame(f);
  }

  // ---------------------------------------------------------------- rendu
  function rendre() {
    if (!D || !dim) return;
    const { s, ox, oy } = vue, { w, h } = dim;
    camera.left = -ox / s; camera.right = (w - ox) / s; camera.top = -oy / s; camera.bottom = (h - oy) / s;   // y vers le bas, comme à l'écran
    camera.updateProjectionMatrix();
    const z = s * E / Math.min(w, h);                                  // grossissement par rapport à la vue d'ensemble
    points.material.uniforms.uZoom.value = Math.min(2.8, 0.8 + 0.1 * z);
    liens.material.opacity = (filtre === -1 ? 1 : 0.4) * Math.min(0.16, 0.035 + 0.006 * z);
    renderer.render(scene, camera);
    calque();
  }
  function calque() {
    const g = cv.getContext('2d'), { w, h } = dim, { s, ox, oy } = vue;
    g.clearRect(0, 0, w, h);
    const sx = i => ox + s * X[i], sy = i => oy + s * Y[i];
    const z = s * E / Math.min(w, h);
    if (z > 12) {                                                      // titres des films, de près, sans chevauchement
      g.font = '600 11px system-ui, sans-serif'; g.textAlign = 'center'; g.fillStyle = 'rgba(203,213,225,0.85)';
      const pris = [];
      for (let f = 0; f < F && pris.length < 70; f++) {
        const x = sx(f), y = sy(f) - 9; if (x < 0 || x > w || y < 10 || y > h) continue;
        const lw = g.measureText(D.films[f]).width / 2 + 3;
        if (pris.some(r => Math.abs(r[0] - x) < r[2] + lw && Math.abs(r[1] - y) < 14)) continue;
        pris.push([x, y, lw]); g.fillText(D.films[f], x, y);
      }
    }
    const b = F + D.bacon;
    g.fillStyle = COUL[0]; g.shadowColor = COUL[0]; g.shadowBlur = 18;
    g.beginPath(); g.arc(sx(b), sy(b), 7, 0, 2 * Math.PI); g.fill(); g.shadowBlur = 0;
    etiquette(g, 'Kevin Bacon', sx(b), sy(b) - 13, COUL[0]);
    if (chemin.length > 1) {
      const n = chemin.length - 1, fait = prog * n;
      g.lineWidth = 3.5; g.strokeStyle = '#FDE047'; g.shadowColor = '#FDE047'; g.shadowBlur = 14; g.lineCap = 'round'; g.lineJoin = 'round';
      g.beginPath(); g.moveTo(sx(chemin[0]), sy(chemin[0]));
      for (let k = 1; k <= n; k++) {
        const a = chemin[k - 1], c = chemin[k], u = Math.max(0, Math.min(1, fait - (k - 1)));
        if (u <= 0) break;
        g.lineTo(sx(a) + (sx(c) - sx(a)) * u, sy(a) + (sy(c) - sy(a)) * u);
      }
      g.stroke(); g.shadowBlur = 0;
    }
    chemin.forEach((i, k) => {
      if (chemin.length > 1 && k > prog * (chemin.length - 1) + 0.001) return;
      const film = i < F;
      g.fillStyle = film ? '#F8FAFC' : (dist[i] >= 0 ? COUL[dist[i] / 2] : HORS);
      g.beginPath(); g.arc(sx(i), sy(i), film ? 6 : 5.5, 0, 2 * Math.PI); g.fill();
      g.strokeStyle = '#0B1020'; g.lineWidth = 1.5; g.stroke();
      etiquette(g, film ? D.films[i] : D.acteurs[i - F], sx(i), sy(i) + (k % 2 ? 21 : -12), film ? '#E2E8F0' : '#FDE68A');
    });
  }
  function etiquette(g, t, x, y, c) {
    g.font = '600 12.5px system-ui, sans-serif'; g.textAlign = 'center';
    const L = g.measureText(t).width / 2 + 4, xx = Math.min(Math.max(x, L), dim.w - L);
    g.lineWidth = 4; g.strokeStyle = 'rgba(11,16,32,0.92)'; g.lineJoin = 'round'; g.strokeText(t, xx, y);
    g.fillStyle = c; g.fillText(t, xx, y);
  }

  // ---------------------------------------------------------------- choisir un acteur
  function choisir(i, animer = true) {
    if (i === undefined || i < 0) return;
    chemin = [];
    const nomDe = k => k < F ? D.films[k] : D.acteurs[k - F];
    if (dist[i] < 0) {
      outC.innerHTML = `<b>${nomDe(i)}</b> n'est relié à Kevin Bacon par aucun chemin : il appartient à un autre morceau du graphe.`;
      chemin = [i]; prog = 1; rendre(); return;
    }
    for (let k = i; k >= 0; k = pred[k]) chemin.push(k);
    const noms = chemin.map(k => k < F ? `<span class="bc-f">${D.films[k]}</span>` : `<b>${D.acteurs[k - F]}</b>`);
    const nb = dist[i] / 2;
    outC.innerHTML = (i < F ? `Film à distance ${dist[i]} de Kevin Bacon : ` : `Nombre de Bacon de ${D.acteurs[i - F]} : <b class="bc-nb">${nb}</b>${nb ? ' — ' : ''}`) + (chemin.length > 1 ? noms.join(' → ') : '');
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const k of chemin) { x0 = Math.min(x0, X[k]); x1 = Math.max(x1, X[k]); y0 = Math.min(y0, Y[k]); y1 = Math.max(y1, Y[k]); }
    const m = Math.max(E * 0.04, (x1 - x0) * 0.15, (y1 - y0) * 0.15);
    const cible = cadrage(x0 - m, y0 - m, x1 + m, y1 + m, 0.05);
    if (!animer) { prog = 1; rendre(); return; }
    prog = 0;
    allerA(cible, () => {
      const t0 = performance.now(), duree = 500 * (chemin.length - 1);
      const f = t => { prog = Math.min(1, (t - t0) / duree); rendre(); if (prog < 1) anim = requestAnimationFrame(f); };
      anim = requestAnimationFrame(f);
    });
  }
  function chercher() {
    const q = inA.value.trim().toLowerCase(); if (!q || !D) return;
    let j = D.acteurs.findIndex(n => n.toLowerCase() === q);
    if (j < 0) j = D.acteurs.findIndex(n => n.toLowerCase().includes(q));
    if (j < 0) { outC.textContent = `Aucun acteur ne correspond à « ${inA.value} » dans ces ${F.toLocaleString('fr-FR')} films.`; return; }
    inA.value = D.acteurs[j]; choisir(F + j);
  }

  // ---------------------------------------------------------------- gestes
  // un doigt (ou la souris) déplace ; deux doigts zooment en gardant sous leur milieu
  // le point du graphe qui s'y trouvait, ce qui permet aussi de se déplacer en pinçant
  const pointeurs = new Map(); let glisse = false, depart = null, pince = null;
  function nouveauDepart() { const p = [...pointeurs.values()][0]; depart = p ? [p[0], p[1], vue.ox, vue.oy] : null; }
  function nouvellePince() {
    const [a, b] = [...pointeurs.values()], cx = (a[0] + b[0]) / 2, cy = (a[1] + b[1]) / 2;
    pince = { d: Math.hypot(a[0] - b[0], a[1] - b[1]) || 1, s: vue.s, wx: (cx - vue.ox) / vue.s, wy: (cy - vue.oy) / vue.s };
  }
  const limiteS = s => Math.max(0.4 * Math.min(dim.w, dim.h) / E, Math.min(60 * Math.min(dim.w, dim.h) / E, s));
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
        const s = limiteS(pince.s * Math.hypot(a[0] - b[0], a[1] - b[1]) / pince.d);
        vue = { s, ox: cx - pince.wx * s, oy: cy - pince.wy * s }; rendre(); return;
      }
      if (!depart) return;
      if (Math.hypot(e.offsetX - depart[0], e.offsetY - depart[1]) > 4) glisse = true;
      if (glisse) { vue.ox = depart[2] + e.offsetX - depart[0]; vue.oy = depart[3] + e.offsetY - depart[1]; rendre(); }
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
    const s = limiteS(vue.s * k); k = s / vue.s;
    vue = { s, ox: cx - (cx - vue.ox) * k, oy: cy - (cy - vue.oy) * k }; prog = 1; cancelAnimationFrame(anim); rendre();
  }
  function proche(x, y) {
    let best = -1, bd = 10 * 10;
    for (let i = 0; i < N; i++) { const dx = vue.ox + vue.s * X[i] - x, dy = vue.oy + vue.s * Y[i] - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  $('[data-k="plus"]').addEventListener('click', () => zoomer(1.6, dim.w / 2, dim.h / 2));
  $('[data-k="moins"]').addEventListener('click', () => zoomer(1 / 1.6, dim.w / 2, dim.h / 2));
  $('[data-k="tout"]').addEventListener('click', () => allerA(cadrage(0, 0, E, E)));
  $('[data-k="go"]').addEventListener('click', chercher);
  inA.addEventListener('keydown', e => { if (e.key === 'Enter') chercher(); });
  inA.addEventListener('change', chercher);
  $('[data-k="hasard"]').addEventListener('click', () => {
    if (!D) return; let j;
    do { j = Math.floor(Math.random() * A); } while (dist[F + j] < 4 || voisins[F + j].length < 2);
    inA.value = D.acteurs[j]; choisir(F + j);
  });
  window.addEventListener('resize', fit);

  // ---------------------------------------------------------------- chargement à l'approche
  fit();
  const io = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return; io.disconnect();
    fetch(BASE + 'data/bacon.json').then(r => r.json()).then(preparer).catch(() => { attente.textContent = 'Le graphe n\'a pas pu être chargé.'; });
  }, { rootMargin: '400px' });
  io.observe(root);
}
