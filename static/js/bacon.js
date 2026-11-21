/* Le graphe des acteurs et des films américains de 1980 à 2023 (listes de films
   de Wikipédia, compilées dans le dépôt wikipedia-movie-data) : chaque acteur est
   relié aux films dont il fait partie de la distribution principale.
   Disposition calculée d'avance (outils/bacon_disposition.py) : les communautés du
   graphe forment des grappes, reliées par des filaments. Rendu WebGL (three.js) en
   mélange additif ; chemin, noms et halo dessinés sur un calque 2D.
   - choisir un acteur trace son plus court chemin vers Kevin Bacon ;
   - tous les changements de vue sont animés : vols « dézoom puis zoom » (van Wijk
     et Nuij) pour les grands déplacements, zoom lissé à la molette et aux boutons.
   Conteneur attendu : <div class="anim" data-anim="bacon"></div>                    */
import * as THREE from './vendor/three.module.min.js';

const root = document.querySelector('.anim[data-anim="bacon"]');
if (root) init(root);

function init(root) {
  const BASE = new URL('../', import.meta.url).href;
  const COUL = ['#FDE047', '#FB923C', '#F472B6', '#22D3EE', '#34D399', '#A78BFA', '#E2E8F0'];   // nombre de Bacon 0, 1, 2…
  const HORS = '#5B6B8C', FOND = 0x070B18, NIV_HORS = 7.5;
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
  try { renderer = new THREE.WebGLRenderer({ canvas: toile, antialias: true, powerPreference: 'high-performance' }); }
  catch (e) { attente.textContent = 'Votre navigateur ne peut pas afficher ce graphe (WebGL indisponible).'; return; }
  renderer.setClearColor(FOND, 1);
  const scene = new THREE.Scene(), camera = new THREE.OrthographicCamera(0, 1, 0, 1, -10, 10);
  let D, F, A, N, X, Y, voisins, dist, pred, niveau, points, liens, dim, E = 4000;
  let vue = { s: 1, ox: 0, oy: 0 }, chemin = [], prog = 1, filtre = -1, sale = true, visible = false, interagi = false;
  let vol = null, lisse = null, voile = { v: 1, cible: 1 }, ens = [0, 0, 4000, 4000];
  const parNiveau = [], uni = { uZoom: { value: 1 }, uDpr: { value: 1 }, uFiltre: { value: -1 }, uVoile: { value: 1 } };

  // ================================================================ données et géométrie
  function preparer(d) {
    D = d; F = d.films.length; A = d.acteurs.length; N = F + A; E = d.echelle || 4000;
    X = new Float32Array(N); Y = new Float32Array(N);
    for (let i = 0; i < N; i++) { X[i] = d.pos[2 * i]; Y[i] = d.pos[2 * i + 1]; }
    voisins = Array.from({ length: N }, () => []);
    d.casting.forEach((c, f) => c.forEach(a => { voisins[f].push(F + a); voisins[F + a].push(f); }));
    const b = F + d.bacon; dist = new Int16Array(N).fill(-1); pred = new Int32Array(N).fill(-1);
    dist[b] = 0; const file = [b];
    for (let t = 0; t < file.length; t++) { const s = file[t]; for (const v of voisins[s]) if (dist[v] < 0) { dist[v] = dist[s] + 1; pred[v] = s; file.push(v); } }
    niveau = new Float32Array(N);                                     // nombre de Bacon (demi-entier pour un film)
    for (let i = 0; i < N; i++) niveau[i] = dist[i] < 0 ? NIV_HORS : dist[i] / 2;
    for (let j = 0; j < A; j++) { const k = dist[F + j] < 0 ? 'x' : dist[F + j] / 2; parNiveau[k] = (parNiveau[k] || 0) + 1; }
    // cadre de la vue d'ensemble : la composante géante, à 0,5 % près de chaque côté
    const xs = [], ys = []; for (let i = 0; i < N; i++) if (dist[i] >= 0) { xs.push(X[i]); ys.push(Y[i]); }
    xs.sort((a, b) => a - b); ys.sort((a, b) => a - b);
    const q = (t, p) => t[Math.floor(p * (t.length - 1))];
    ens = [q(xs, 0.005), q(ys, 0.005), q(xs, 0.995), q(ys, 0.995)];
    const ETOILE = new THREE.Color('#DCE6FF'), LIEN = new THREE.Color('#5574D6');
    const coul = i => i < F ? new THREE.Color('#BEC8DC') : ETOILE.clone().lerp(new THREE.Color(dist[i] < 0 ? HORS : COUL[Math.min(dist[i] / 2, COUL.length - 1)]), 0.25);
    const grp = d.groupe || [];

    // liens : un segment bleu par couple (film, acteur) ; les liens entre deux grappes
    // (filaments) sont plus discrets que les liens internes
    let nl = 0; d.casting.forEach(c => { nl += c.length; });
    const lp = new Float32Array(nl * 6), lc = new Float32Array(nl * 6), ln = new Float32Array(nl * 2), li = new Float32Array(nl * 2);
    let k = 0;
    d.casting.forEach((c, f) => c.forEach(a => {
      const j = F + a, col = LIEN, nv = Math.max(niveau[f], niveau[j]), inter = grp[f] !== grp[j] ? 1 : 0;
      lp.set([X[f], Y[f], 0, X[j], Y[j], 0], 6 * k); lc.set([col.r, col.g, col.b, col.r, col.g, col.b], 6 * k);
      ln[2 * k] = ln[2 * k + 1] = nv; li[2 * k] = li[2 * k + 1] = inter; k++;
    }));
    const gl = new THREE.BufferGeometry();
    gl.setAttribute('position', new THREE.BufferAttribute(lp, 3)); gl.setAttribute('couleur', new THREE.BufferAttribute(lc, 3));
    gl.setAttribute('niveau', new THREE.BufferAttribute(ln, 1)); gl.setAttribute('inter', new THREE.BufferAttribute(li, 1));
    liens = new THREE.LineSegments(gl, new THREE.ShaderMaterial({
      uniforms: { ...uni, uAlpha: { value: 0.05 } },
      vertexShader: `attribute vec3 couleur; attribute float niveau; attribute float inter; uniform float uFiltre; uniform float uVoile; uniform float uAlpha;
        varying vec4 vC;
        void main() {
          float f = uFiltre < -0.5 ? 1.0 : (abs(niveau - uFiltre) < 0.6 ? 1.0 : 0.08);
          vC = vec4(couleur, uAlpha * f * uVoile * (inter > 0.5 ? 0.7 : 1.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `varying vec4 vC; void main() { gl_FragColor = vec4(vC.rgb * vC.a, vC.a); }`,
      transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending
    }));
    scene.add(liens);

    // points : petites étoiles, plus grosses pour les acteurs prolifiques
    const pp = new Float32Array(N * 3), pc = new Float32Array(N * 3), pt = new Float32Array(N), pn = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pp[3 * i] = X[i]; pp[3 * i + 1] = Y[i]; pp[3 * i + 2] = i < F ? 0.5 : 1;
      const c = coul(i); pc[3 * i] = c.r; pc[3 * i + 1] = c.g; pc[3 * i + 2] = c.b;
      const dg = voisins[i].length;
      pt[i] = i < F ? 3.2 : 3.6 + Math.min(5, Math.sqrt(dg) * 0.55);    // les acteurs prolifiques brillent davantage
      pn[i] = niveau[i];
    }
    const gp = new THREE.BufferGeometry();
    gp.setAttribute('position', new THREE.BufferAttribute(pp, 3)); gp.setAttribute('couleur', new THREE.BufferAttribute(pc, 3));
    gp.setAttribute('taille', new THREE.BufferAttribute(pt, 1)); gp.setAttribute('niveau', new THREE.BufferAttribute(pn, 1));
    points = new THREE.Points(gp, new THREE.ShaderMaterial({
      uniforms: uni,
      vertexShader: `attribute vec3 couleur; attribute float taille; attribute float niveau;
        uniform float uZoom; uniform float uDpr; uniform float uFiltre; uniform float uVoile;
        varying vec3 vC; varying float vA;
        void main() {
          float f = uFiltre < -0.5 ? 1.0 : (abs(niveau - uFiltre) < 0.01 ? 1.3 : (fract(niveau) > 0.25 && fract(niveau) < 0.75 ? 0.18 : 0.05));
          vC = couleur;
          vA = f * (0.55 + 0.45 * uVoile) * (position.z < 0.75 ? 0.55 : 0.85);
          gl_PointSize = taille * uZoom * uDpr;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, 0.0, 1.0);
        }`,
      fragmentShader: `varying vec3 vC; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0; if (d > 1.0) discard;
          float a = vA * (exp(-d * d * 5.0) * 0.75 + smoothstep(0.38, 0.18, d) * 0.6);
          gl_FragColor = vec4(vC * a, a);
        }`,
      transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending
    }));
    scene.add(points);

    leg.innerHTML = '<span class="bc-titre">Nombre de Bacon&nbsp;:</span>' + Object.keys(parNiveau).filter(kk => parNiveau[kk]).sort().map(kk => `<button type="button" data-n="${kk}" title="Isoler ces acteurs"><i style="background:${kk === 'x' ? HORS : COUL[kk]}"></i>${kk === 'x' ? 'hors d\'atteinte' : kk} <small>(${parNiveau[kk].toLocaleString('fr-FR')})</small></button>`).join('') +
      `<span><i class="bc-film"></i>film</span>`;
    leg.querySelectorAll('button').forEach(bt => bt.addEventListener('click', () => {
      const kk = bt.dataset.n === 'x' ? NIV_HORS : +bt.dataset.n;
      filtre = filtre === kk ? -1 : kk; uni.uFiltre.value = filtre;
      leg.querySelectorAll('button').forEach(x => x.classList.toggle('bc-actif', x === bt && filtre !== -1));
      sale = true;
    }));
    // suggestions : les acteurs d'au moins deux films (la recherche, elle, couvre tout le monde)
    $('#bc-noms').innerHTML = D.acteurs.map((n, j) => [n, voisins[F + j].length]).filter(x => x[1] >= 2).map(x => x[0]).sort((a, b) => a.localeCompare(b))
      .map(n => `<option value="${n.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}">`).join('');
    attente.hidden = true;
    fit();
    const th = D.acteurs.indexOf('Tom Hanks');                       // le graphe entier, puis un premier chemin
    if (th >= 0) setTimeout(() => { if (!interagi) { inA.value = 'Tom Hanks'; choisir(F + th); } }, 1800);
  }

  // ================================================================ vue et animations de caméra
  function fit() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), w = cv.clientWidth || 700;
    const h = Math.round(w < 560 ? Math.min(w * 1.15, 560) : Math.min(w * 0.75, 680));
    [toile, cv].forEach(c => { c.style.height = h + 'px'; });
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    const ancien = dim; dim = { w, h, dpr }; uni.uDpr.value = dpr;
    if (D) { if (!ancien || !chemin.length) vue = ensemble(); sale = true; }
  }
  function cadrage(x0, y0, x1, y1, marge = 0.03) {
    const s = Math.min(dim.w / ((x1 - x0) * (1 + 2 * marge) || 1), dim.h / ((y1 - y0) * (1 + 2 * marge) || 1));
    return { s, ox: dim.w / 2 - s * (x0 + x1) / 2, oy: dim.h / 2 - s * (y0 + y1) / 2 };
  }
  const ensemble = () => cadrage(...ens, 0.02);
  const versP = v => [(dim.w / 2 - v.ox) / v.s, (dim.h / 2 - v.oy) / v.s, dim.w / v.s];       // centre et largeur visibles
  const deP = p => { const s = dim.w / p[2]; return { s, ox: dim.w / 2 - s * p[0], oy: dim.h / 2 - s * p[1] }; };
  // interpolation « dézoom puis zoom » de van Wijk et Nuij (Smooth and efficient zooming and panning, 2003)
  function interpZoom(p0, p1) {
    const rho = Math.SQRT2, r2 = 2, r4 = 4, [x0, y0, w0] = p0, [x1, y1, w1] = p1, dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
    let S, f;
    if (d2 < 1e-9) { S = Math.log(w1 / w0) / rho; f = t => [x0 + t * dx, y0 + t * dy, w0 * Math.exp(rho * t * S)]; }
    else {
      const d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + r4 * d2) / (2 * w0 * r2 * d1), b1 = (w1 * w1 - w0 * w0 - r4 * d2) / (2 * w1 * r2 * d1);
      const q0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), q1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (q1 - q0) / rho;
      f = t => { const s = t * S, ch = Math.cosh(q0), u = w0 / (r2 * d1) * (ch * Math.tanh(rho * s + q0) - Math.sinh(q0)); return [x0 + u * dx, y0 + u * dy, w0 * ch / Math.cosh(rho * s + q0)]; };
    }
    f.duree = Math.abs(S) * 1000;
    return f;
  }
  function allerA(cible, ensuite, dureeMin = 600) {
    lisse = null;
    const f = interpZoom(versP(vue), versP(cible));
    vol = { f, t0: performance.now(), duree: Math.max(dureeMin, Math.min(2600, f.duree * 1.1)), ensuite };
  }
  const limiteS = s => Math.max(0.5 * Math.min(dim.w, dim.h) / E, Math.min(70 * Math.min(dim.w, dim.h) / E, s));
  // zoom lissé autour d'un point de l'écran : la cible se déplace, la vue la rejoint en douceur
  function zoomer(k, cx, cy) {
    vol = null; interagi = true;
    const base = lisse ? lisse.s : vue.s, s = limiteS(base * k);
    const wx = (cx - vue.ox) / vue.s, wy = (cy - vue.oy) / vue.s;
    lisse = { s, cx, cy, wx: lisse && lisse.cx === cx && lisse.cy === cy ? lisse.wx : wx, wy: lisse && lisse.cx === cx && lisse.cy === cy ? lisse.wy : wy };
  }

  // ================================================================ boucle d'animation
  function boucle() {
    requestAnimationFrame(boucle);
    const t = performance.now();                                     // même horloge que les départs d'animation
    if (!D || !dim || !visible) return;
    if (vol) {
      const u = Math.min(1, (t - vol.t0) / vol.duree), e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      vue = deP(vol.f(e)); sale = true;
      if (u >= 1) { const fin = vol.ensuite; vol = null; if (fin) fin(); }
    }
    if (lisse) {
      const s = vue.s * Math.pow(lisse.s / vue.s, 0.2);
      vue = { s, ox: lisse.cx - lisse.wx * s, oy: lisse.cy - lisse.wy * s }; sale = true;
      if (Math.abs(Math.log(lisse.s / s)) < 0.002) { vue = { s: lisse.s, ox: lisse.cx - lisse.wx * lisse.s, oy: lisse.cy - lisse.wy * lisse.s }; lisse = null; }
    }
    if (Math.abs(voile.v - voile.cible) > 0.002) { voile.v += (voile.cible - voile.v) * 0.08; uni.uVoile.value = voile.v; sale = true; }
    if (sale) { rendreGL(); sale = false; }
    calque(t);
  }
  function rendreGL() {
    const { s, ox, oy } = vue, { w, h } = dim;
    camera.left = -ox / s; camera.right = (w - ox) / s; camera.top = -oy / s; camera.bottom = (h - oy) / s;   // y vers le bas, comme à l'écran
    camera.updateProjectionMatrix();
    const z = s * E / Math.min(w, h);                                  // grossissement par rapport à la vue d'ensemble
    uni.uZoom.value = Math.min(3.2, 0.75 + 0.16 * z);
    liens.material.uniforms.uAlpha.value = Math.min(0.22, 0.12 + 0.005 * z) * (filtre === -1 ? 1 : 0.7);
    renderer.render(scene, camera);
  }

  // ================================================================ calque 2D : Kevin Bacon, grappes, chemin, noms
  function calque(t) {
    const g = cv.getContext('2d'), { w, h } = dim, { s, ox, oy } = vue;
    g.clearRect(0, 0, w, h);
    const sx = i => ox + s * X[i], sy = i => oy + s * Y[i];
    const z = s * E / Math.min(w, h);
    // noms des grandes grappes, en vue d'ensemble
    if (D.grappes && z < 3.2 && !chemin.length) {
      const a = Math.min(1, (3.2 - z) / 1.2);
      g.textAlign = 'center';
      D.grappes.forEach((q, k) => {
        if (k > (w < 560 ? 5 : 9)) return;
        const x = ox + s * q.x, y = oy + s * q.y;
        g.font = `600 ${k < 4 ? 12 : 11}px system-ui, sans-serif`;
        g.globalAlpha = a * (k < 4 ? 0.85 : 0.6);
        contour(g, D.acteurs[q.star], x, y, '#E0E7FF');
      });
      g.globalAlpha = 1;
    }
    if (z > 14) {                                                      // titres des films, de près, sans chevauchement
      g.font = '600 11px system-ui, sans-serif'; g.textAlign = 'center';
      const pris = [];
      for (let f = 0; f < F && pris.length < 60; f++) {
        const x = sx(f), y = sy(f) - 9; if (x < 0 || x > w || y < 10 || y > h) continue;
        const lw = g.measureText(D.films[f]).width / 2 + 3;
        if (pris.some(r => Math.abs(r[0] - x) < r[2] + lw && Math.abs(r[1] - y) < 14)) continue;
        pris.push([x, y, lw]); g.globalAlpha = 0.8; contour(g, D.films[f], x, y, '#CBD5E1');
      }
      g.globalAlpha = 1;
    }
    // Kevin Bacon : un halo doré
    const b = F + D.bacon, bx = sx(b), by = sy(b);
    const rg = g.createRadialGradient(bx, by, 0, bx, by, 28);
    rg.addColorStop(0, 'rgba(253,224,71,0.9)'); rg.addColorStop(0.25, 'rgba(253,224,71,0.45)'); rg.addColorStop(1, 'rgba(253,224,71,0)');
    g.fillStyle = rg; g.beginPath(); g.arc(bx, by, 28, 0, 2 * Math.PI); g.fill();
    g.fillStyle = '#FFFBEB'; g.beginPath(); g.arc(bx, by, 4.5, 0, 2 * Math.PI); g.fill();
    const boites = [];                                               // étiquettes déjà posées, pour éviter les chevauchements
    boites.push(pastille(g, 'Kevin Bacon', bx, by - 22, COUL[0], true, chemin.length > 1 ? [] : null));
    if (chemin.length > 1) {
      const n = chemin.length - 1, fait = prog * n;
      const trace = (lw, col, flou) => {
        g.lineWidth = lw; g.strokeStyle = col; g.shadowColor = col; g.shadowBlur = flou; g.lineCap = 'round'; g.lineJoin = 'round';
        g.beginPath(); g.moveTo(sx(chemin[0]), sy(chemin[0]));
        for (let k = 1; k <= n; k++) {
          const a = chemin[k - 1], c = chemin[k], u = Math.max(0, Math.min(1, fait - (k - 1)));
          if (u <= 0) break;
          g.lineTo(sx(a) + (sx(c) - sx(a)) * u, sy(a) + (sy(c) - sy(a)) * u);
        }
        g.stroke(); g.shadowBlur = 0;
      };
      trace(9, 'rgba(253,224,71,0.25)', 24); trace(3, '#FDE047', 12); trace(1.2, '#FFFBEB', 0);
    }
    chemin.forEach((i, k) => {
      if (chemin.length > 1 && k > prog * (chemin.length - 1) + 0.001) return;
      const film = i < F, col = film ? '#F8FAFC' : (dist[i] >= 0 ? COUL[dist[i] / 2] : HORS);
      g.fillStyle = col; g.shadowColor = col; g.shadowBlur = 12;
      g.beginPath(); film ? g.rect(sx(i) - 5, sy(i) - 5, 10, 10) : g.arc(sx(i), sy(i), 6, 0, 2 * Math.PI); g.fill(); g.shadowBlur = 0;
      g.strokeStyle = '#070B18'; g.lineWidth = 1.5; g.stroke();
      if (i !== F + D.bacon) boites.push(pastille(g, film ? D.films[i] : D.acteurs[i - F], sx(i), sy(i), col, !film, boites));
    });
  }
  function contour(g, txt, x, y, c) {
    g.lineWidth = 3.5; g.strokeStyle = 'rgba(7,11,24,0.9)'; g.lineJoin = 'round'; g.strokeText(txt, x, y);
    g.fillStyle = c; g.fillText(txt, x, y);
  }
  // pastille de nom ; avec une liste de boîtes, cherche une place libre autour du point (x, y)
  function pastille(g, txt, x, y, c, gras, boites) {
    g.font = `${gras ? 700 : 500} ${gras ? 12.5 : 12}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    const L = g.measureText(txt).width / 2 + 9;
    const essais = boites ? [[0, -20], [0, 22], [L + 12, 0], [-L - 12, 0], [0, -44], [0, 46], [L + 12, -24], [-L - 12, 24]] : [[0, 0]];
    let xx, yy;
    for (const [dx, dy] of essais) {
      xx = Math.min(Math.max(x + dx, L + 4), dim.w - L - 4); yy = Math.min(Math.max(y + dy, 14), dim.h - 14);
      if (!boites || !boites.some(b => b && Math.abs(b[0] - xx) < b[2] + L + 3 && Math.abs(b[1] - yy) < 24)) break;
    }
    g.fillStyle = 'rgba(7,11,24,0.82)'; g.strokeStyle = c; g.lineWidth = 1.2;
    g.beginPath(); g.roundRect ? g.roundRect(xx - L, yy - 11, 2 * L, 22, 11) : g.rect(xx - L, yy - 11, 2 * L, 22); g.fill(); g.stroke();
    g.fillStyle = gras ? c : '#E2E8F0'; g.fillText(txt, xx, yy + 0.5); g.textBaseline = 'alphabetic';
    return [xx, yy, L];
  }

  // ================================================================ choisir un acteur
  function choisir(i) {
    if (i === undefined || i < 0 || !D) return;
    chemin = [];
    const nomDe = k => k < F ? D.films[k] : D.acteurs[k - F];
    if (dist[i] < 0) {
      outC.innerHTML = `<b>${nomDe(i)}</b> n'est relié à Kevin Bacon par aucun chemin : il appartient à un autre morceau du graphe.`;
      chemin = [i]; prog = 1; voile.cible = 0.6;
      const m = E * 0.05; allerA(cadrage(X[i] - m, Y[i] - m, X[i] + m, Y[i] + m)); return;
    }
    for (let k = i; k >= 0; k = pred[k]) chemin.push(k);
    const noms = chemin.map(k => k < F ? `<span class="bc-f">${D.films[k]}</span>` : `<b>${D.acteurs[k - F]}</b>`);
    const nb = dist[i] / 2;
    outC.innerHTML = (i < F ? `Film à distance ${dist[i]} de Kevin Bacon : ` : `Nombre de Bacon de ${D.acteurs[i - F]} : <b class="bc-nb">${nb}</b>${nb ? ' — ' : ''}`) + (chemin.length > 1 ? noms.join(' → ') : '');
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const k of chemin) { x0 = Math.min(x0, X[k]); x1 = Math.max(x1, X[k]); y0 = Math.min(y0, Y[k]); y1 = Math.max(y1, Y[k]); }
    const m = Math.max(E * 0.05, (x1 - x0) * 0.18, (y1 - y0) * 0.18);
    prog = 0; voile.cible = 0.45;
    allerA(cadrage(x0 - m, y0 - m, x1 + m, y1 + m, 0.06), () => {
      const t0 = performance.now(), duree = 550 * (chemin.length - 1);
      const f = t => { prog = Math.min(1, (t - t0) / duree); if (prog < 1 && chemin.length) requestAnimationFrame(f); };
      requestAnimationFrame(f);
    }, 900);
  }
  function chercher() {
    const q = inA.value.trim().toLowerCase(); if (!q || !D) return;
    interagi = true;
    let j = D.acteurs.findIndex(n => n.toLowerCase() === q);
    if (j < 0) j = D.acteurs.findIndex(n => n.toLowerCase().includes(q));
    if (j < 0) { outC.textContent = `Aucun acteur ne correspond à « ${inA.value} » dans ces ${F.toLocaleString('fr-FR')} films.`; return; }
    inA.value = D.acteurs[j]; choisir(F + j);
  }
  function toutVoir() {
    interagi = true; chemin = []; prog = 1; outC.textContent = ''; voile.cible = 1;
    allerA(ensemble(), null, 700);
  }

  // ================================================================ gestes
  // un doigt (ou la souris) déplace ; deux doigts zooment en gardant sous leur milieu
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
    vol = null; lisse = null; prog = 1; interagi = true;
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
        vue = { s, ox: cx - pince.wx * s, oy: cy - pince.wy * s }; sale = true; return;
      }
      if (!depart) return;
      if (Math.hypot(e.offsetX - depart[0], e.offsetY - depart[1]) > 4) glisse = true;
      if (glisse) { vue = { s: vue.s, ox: depart[2] + e.offsetX - depart[0], oy: depart[3] + e.offsetY - depart[1] }; sale = true; }
      return;
    }
    const i = proche(e.offsetX, e.offsetY);
    if (i >= 0) {
      bulle.hidden = false; bulle.textContent = i < F ? D.films[i] : `${D.acteurs[i - F]}${dist[i] >= 0 ? ' · ' + dist[i] / 2 : ''}`;
      bulle.style.left = Math.min(e.offsetX + 12, dim.w - bulle.offsetWidth - 4) + 'px'; bulle.style.top = e.offsetY + 14 + 'px'; cv.style.cursor = 'pointer';
    } else { bulle.hidden = true; cv.style.cursor = 'grab'; }
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
  cv.addEventListener('wheel', e => { if (!(e.ctrlKey || e.metaKey) || !D) return; e.preventDefault(); zoomer(Math.exp(-e.deltaY * 0.0025), e.offsetX, e.offsetY); }, { passive: false });
  cv.addEventListener('dblclick', e => { if (D) zoomer(2.2, e.offsetX, e.offsetY); });
  function proche(x, y) {
    let best = -1, bd = 10 * 10;
    for (let i = 0; i < N; i++) { const dx = vue.ox + vue.s * X[i] - x, dy = vue.oy + vue.s * Y[i] - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  $('[data-k="plus"]').addEventListener('click', () => zoomer(1.8, dim.w / 2, dim.h / 2));
  $('[data-k="moins"]').addEventListener('click', () => zoomer(1 / 1.8, dim.w / 2, dim.h / 2));
  $('[data-k="tout"]').addEventListener('click', toutVoir);
  $('[data-k="go"]').addEventListener('click', chercher);
  inA.addEventListener('keydown', e => { if (e.key === 'Enter') chercher(); });
  inA.addEventListener('change', chercher);
  $('[data-k="hasard"]').addEventListener('click', () => {
    if (!D) return; interagi = true; let j;
    do { j = Math.floor(Math.random() * A); } while (dist[F + j] < 4 || voisins[F + j].length < 2);
    inA.value = D.acteurs[j]; choisir(F + j);
  });
  let largeur = 0;
  window.addEventListener('resize', () => { if (Math.abs((cv.clientWidth || 0) - largeur) > 4) { largeur = cv.clientWidth; fit(); } });

  // ================================================================ chargement à l'approche ; rendu seulement à l'écran
  fit();
  new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) sale = true; }).observe(root);
  requestAnimationFrame(boucle);
  const io = new IntersectionObserver(es => {
    if (!es[0].isIntersecting) return; io.disconnect();
    fetch(BASE + 'data/bacon.json').then(r => r.json()).then(preparer).catch(e => { console.error(e); attente.textContent = 'Le graphe n\'a pas pu être chargé.'; });
  }, { rootMargin: '400px' });
  io.observe(root);
}
