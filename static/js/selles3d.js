/* Surfaces z = f(x, y) en 3D (three.js, socle scene3d.js) pour la page de théorie des jeux.
   Elles remplacent les graphiques Plotly : mêmes surfaces (selle x² − y², puis les gains
   espérés V(p, q) des deux exemples), même palette « Spectral », même point repéré en
   rouge, auxquels s'ajoutent les deux coupes qui passent par le point (ligne bleue et
   ligne rouge) et un laboratoire où l'on entre sa propre matrice de gains 2 × 2.
   Conteneurs attendus : <div class="anim" data-anim="selle1"></div> (selle x² − y²)
                         <div class="anim" data-anim="selle2"></div> (V = 4 + 2p + q − 4pq)
                         <div class="anim" data-anim="selle3"></div> (V = 60 + 40p + 40q − 60pq)
                         <div class="anim" data-anim="labo-jeu"></div> (matrice au choix)  */
import { THREE, creerScene } from './scene3d.js?manip=2';   // version dans l'URL : le navigateur ne ressert pas un ancien socle sans rotation tactile

const L = 4;                                     // côté du cube dans lequel la surface est inscrite
const BLEU = '#1D4ED8', ROUGE = '#DC2626';
const SPECTRAL = [[94, 79, 162], [50, 136, 189], [102, 194, 165], [171, 221, 164], [230, 245, 152], [255, 255, 191],
  [254, 224, 139], [253, 174, 97], [244, 109, 67], [213, 62, 79], [158, 1, 66]];
const tmp = new THREE.Color();

function spectral(t, sortie) {
  t = Math.max(0, Math.min(1, t));
  const x = t * 10, i = Math.min(9, Math.floor(x)), u = x - i, a = SPECTRAL[i], b = SPECTRAL[i + 1];
  tmp.setRGB((a[0] + (b[0] - a[0]) * u) / 255, (a[1] + (b[1] - a[1]) * u) / 255, (a[2] + (b[2] - a[2]) * u) / 255, THREE.SRGBColorSpace);
  sortie.push(tmp.r, tmp.g, tmp.b);
}
const fr = (v, d) => { if (Math.abs(v) < 1e-9) v = 0; return v.toFixed(d).replace('.', ',').replace('-', '−'); };
const decimales = r => (r >= 20 ? 0 : r >= 2 ? 1 : 2);

/* Étiquette de texte toujours tournée vers l'écran */
function etiquette(texte, taille, couleur, italique) {
  const px = 72, cv = document.createElement('canvas'), ctx = cv.getContext('2d');
  const police = `${italique ? 'italic ' : ''}${px}px Georgia, "Times New Roman", serif`;
  ctx.font = police;
  const w = Math.ceil(ctx.measureText(texte).width) + 20, h = px + 24;
  cv.width = w; cv.height = h;
  ctx.font = police; ctx.fillStyle = couleur; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(texte, w / 2, h / 2 + 4);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
  sp.scale.set(taille * w / h, taille, 1);
  sp.renderOrder = 10;
  return sp;
}

function creerSurface(hote, { label, elev = 24, azim = 28, ratio = 0.8 }) {
  const S = creerScene(hote, { ratio, hMax: 540, label, manip: true });
  if (!S) return null;
  const groupe = new THREE.Group();
  S.scene.add(groupe);
  const boite = new THREE.Box3(new THREE.Vector3(-L / 2 - 0.75, -L / 2 - 0.5, -L / 2 - 0.75), new THREE.Vector3(L / 2 + 0.75, L / 2 + 0.75, L / 2 + 0.75));
  const cible = new THREE.Vector3(0, 0, 0);
  let e = elev, a = azim, premiere = true;

  function vider() {
    while (groupe.children.length) {
      const c = groupe.children.pop();
      if (c.geometry) c.geometry.dispose();
      if (c.material) { if (c.material.map) c.material.map.dispose(); c.material.dispose(); }
    }
  }

  function dessiner({ f, x0, x1, y0, y1, noms, points = [], coupes = [] }) {
    vider();
    const N = 60, V = [];
    let zmin = Infinity, zmax = -Infinity;
    for (let j = 0; j <= N; j++) {
      V.push([]);
      for (let i = 0; i <= N; i++) {
        const v = f(x0 + (x1 - x0) * i / N, y0 + (y1 - y0) * j / N);
        V[j].push(v); zmin = Math.min(zmin, v); zmax = Math.max(zmax, v);
      }
    }
    if (zmax - zmin < 1e-9) zmax = zmin + 1;
    const zr = zmax - zmin;
    const X = x => (x - x0) / (x1 - x0) * L - L / 2;
    const Z = y => -((y - y0) / (y1 - y0) * L - L / 2);
    const Y = v => (v - zmin) / zr * L - L / 2;

    // la surface, colorée par la hauteur
    const pos = [], coul = [], idx = [];
    for (let j = 0; j <= N; j++) {
      for (let i = 0; i <= N; i++) {
        pos.push(X(x0 + (x1 - x0) * i / N), Y(V[j][i]), Z(y0 + (y1 - y0) * j / N));
        spectral((V[j][i] - zmin) / zr, coul);
      }
    }
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const p = j * (N + 1) + i, q = p + 1, r = p + N + 1, s = r + 1;
        idx.push(p, r, q, q, r, s);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(coul, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    // ombrage léger « cuit » dans les couleurs (la teinte reste celle de l'échelle Spectral, sans éclairage qui la délave)
    const nor = g.attributes.normal.array, cc = g.attributes.color.array, lum = new THREE.Vector3(-0.4, 0.85, 0.5).normalize();
    for (let k = 0; k < nor.length; k += 3) {
      const f = 0.9 + 0.13 * Math.abs(nor[k] * lum.x + nor[k + 1] * lum.y + nor[k + 2] * lum.z);
      cc[k] = Math.min(1, cc[k] * f); cc[k + 1] = Math.min(1, cc[k + 1] * f); cc[k + 2] = Math.min(1, cc[k + 2] * f);
    }
    const surf = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }));
    groupe.add(surf);

    // quadrillage fin
    const seg = [], pas = 5;
    const P = (j, i) => [pos[3 * (j * (N + 1) + i)], pos[3 * (j * (N + 1) + i) + 1] + 0.006, pos[3 * (j * (N + 1) + i) + 2]];
    for (let j = 0; j <= N; j += pas) for (let i = 0; i < N; i++) seg.push(...P(j, i), ...P(j, i + 1));
    for (let i = 0; i <= N; i += pas) for (let j = 0; j < N; j++) seg.push(...P(j, i), ...P(j + 1, i));
    const gl = new THREE.BufferGeometry();
    gl.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
    groupe.add(new THREE.LineSegments(gl, new THREE.LineBasicMaterial({ color: 0x1f2937, transparent: true, opacity: 0.22 })));

    // cube et graduations
    const h = L / 2, C = [];
    for (const x of [-h, h]) for (const y of [-h, h]) for (const z of [-h, h]) C.push([x, y, z]);
    const aretes = [];
    for (let m = 0; m < 8; m++) for (const bit of [1, 2, 4]) if (!(m & bit)) aretes.push(...C[m], ...C[m | bit]);
    const gb = new THREE.BufferGeometry();
    gb.setAttribute('position', new THREE.Float32BufferAttribute(aretes, 3));
    groupe.add(new THREE.LineSegments(gb, new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.8 })));
    function mettre(texte, taille, couleur, italique, x, y, z) {
      const s = etiquette(texte, taille, couleur, italique);
      s.position.set(x, y, z); groupe.add(s);
    }
    const dx = decimales(Math.abs(x1 - x0)), dy = decimales(Math.abs(y1 - y0)), dz = decimales(zr);
    for (const t of [0, 0.5, 1]) {
      mettre(fr(x0 + (x1 - x0) * t, dx), 0.36, '#475569', false, X(x0 + (x1 - x0) * t), -h - 0.2, h + 0.35);
      mettre(fr(y0 + (y1 - y0) * t, dy), 0.36, '#475569', false, h + 0.4, -h - 0.2, Z(y0 + (y1 - y0) * t));
      mettre(fr(zmin + zr * t, dz), 0.36, '#475569', false, -h - 0.4, -h + L * t, h + 0.2);
    }
    mettre(noms[0], 0.6, '#0f172a', true, 0, -h - 0.25, h + 0.9);
    mettre(noms[1], 0.6, '#0f172a', true, h + 0.9, -h - 0.25, 0);
    mettre(noms[2], 0.6, '#0f172a', true, -h - 0.9, 0, h + 0.2);

    // coupes (lignes épaisses collées à la surface)
    for (const c of coupes) {
      const pts = c.pts.map(([x, y]) => new THREE.Vector3(X(x), Y(f(x, y)) + 0.05, Z(y)));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.045, 8, false), new THREE.MeshStandardMaterial({ color: c.couleur, roughness: 0.4 }));
      groupe.add(tube);
    }
    // points repérés en rouge, avec leur projection sur le plancher
    for (const p of points) {
      const v = f(p.x, p.y), px = X(p.x), py = Y(v), pz = Z(p.y);
      const bille = new THREE.Mesh(new THREE.SphereGeometry(0.13, 28, 18), new THREE.MeshStandardMaterial({ color: p.couleur || '#DC2626', roughness: 0.35 }));
      bille.position.set(px, py + 0.05, pz);
      groupe.add(bille);
      const guide = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(px, py, pz), new THREE.Vector3(px, -h, pz)]), new THREE.LineDashedMaterial({ color: 0x475569, dashSize: 0.09, gapSize: 0.07 }));
      guide.computeLineDistances();
      groupe.add(guide);
      if (p.texte) mettre(p.texte, 0.42, '#7F1D1D', false, px, py + 0.55, pz);
    }
    if (premiere) { S.cadrer(boite, cible, e, a); premiere = false; }
  }

  function vue(elevation, azimut) { e = elevation; a = azimut; S.orienter(e, a); }
  return { S, dessiner, vue, elev, azim };
}

/* Mode d'emploi et bouton de retour à la vue de départ.
   Souris : glisser tourne, molette zoome, double-clic revient à la vue de départ.
   Doigt : un doigt tourne la surface, deux doigts zooment (la figure capte les gestes ; pour
   faire défiler la page, on touche en dehors d'elle). */
function commandesTactiles(root, surface) {
  const ctrl = root.querySelector('.anim-ctrl');
  ctrl.insertAdjacentHTML('beforeend', '<button type="button" class="sec" data-k="reset">Vue de départ</button>');
  ctrl.querySelector('[data-k="reset"]').addEventListener('click', () => surface.S.vueInitiale());
  const astuce = document.createElement('span');
  astuce.className = 'anim-astuce';
  astuce.textContent = surface.S.tactile
    ? 'Un doigt : tourner. Deux doigts : zoomer. Pour faire défiler la page, touchez en dehors de la figure.'
    : 'Glisser : tourner. Molette : zoomer. Double-clic : vue de départ.';
  ctrl.appendChild(astuce);
}

const GRILLE = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + (b - a) * i / n);

/* ---------- les trois graphiques de la page ---------- */
function monter(root, cfg) {
  root.innerHTML = '<div class="scene3d"></div><div class="anim-ctrl"></div><p class="selle-legende">' + cfg.legende + '</p>';
  const s = creerSurface(root.querySelector('.scene3d'), { label: cfg.label });
  if (!s) return;
  s.dessiner(cfg.surface);
  commandesTactiles(root, s);
}

const sel = n => document.querySelector('.anim[data-anim="' + n + '"]');

if (sel('selle1')) {
  monter(sel('selle1'), {
    label: 'La surface z = x² − y², une selle de cheval, avec son point col à l\'origine et les deux coupes qui passent par ce point.',
    legende: '<span style="color:' + BLEU + '"><b>Ligne bleue</b></span> (coupe y = 0) : la surface y a un minimum en O. <span style="color:' + ROUGE + '"><b>Ligne rouge</b></span> (coupe x = 0) : elle y a un maximum. Le point col (en rouge) est un minimum dans une direction et un maximum dans l\'autre.',
    surface: {
      f: (x, y) => x * x - y * y, x0: -5, x1: 5, y0: -5, y1: 5, noms: ['x', 'y', 'z'],
      points: [{ x: 0, y: 0, texte: 'point col' }],
      coupes: [{ pts: GRILLE(-5, 5, 60).map(x => [x, 0]), couleur: BLEU }, { pts: GRILLE(-5, 5, 60).map(y => [0, y]), couleur: ROUGE }]
    }
  });
}
if (sel('selle2')) {
  monter(sel('selle2'), {
    label: 'La surface V(p, q) = 4 + 2p + q − 4pq, avec le point minimax en (1/4, 1/2).',
    legende: 'Gain espéré de Bleu en fonction de <i>p</i> (la probabilité que Bleu joue B1) et de <i>q</i> (celle que Rouge joue R1). <span style="color:' + BLEU + '"><b>Ligne bleue</b></span> : Bleu fait varier <i>p</i> alors que Rouge joue <i>q</i> = 1/2. <span style="color:' + ROUGE + '"><b>Ligne rouge</b></span> : Rouge fait varier <i>q</i> alors que Bleu joue <i>p</i> = 1/4. Les deux lignes sont <b>horizontales</b>, à la hauteur V = 4,5.',
    surface: {
      f: (p, q) => 4 + 2 * p + q - 4 * p * q, x0: 0, x1: 1, y0: 0, y1: 1, noms: ['p', 'q', 'V'],
      points: [{ x: 0.25, y: 0.5, texte: 'minimax : V = 4,5' }],
      coupes: [{ pts: GRILLE(0, 1, 60).map(p => [p, 0.5]), couleur: BLEU }, { pts: GRILLE(0, 1, 60).map(q => [0.25, q]), couleur: ROUGE }]
    }
  });
}
if (sel('selle3')) {
  monter(sel('selle3'), {
    label: 'La surface V(p, q) = 60 + 40p + 40q − 60pq, avec le point minimax en (2/3, 2/3).',
    legende: '<span style="color:' + BLEU + '"><b>Ligne bleue</b></span> : Bleu fait varier <i>p</i> alors que Rouge joue <i>q</i> = 2/3. <span style="color:' + ROUGE + '"><b>Ligne rouge</b></span> : Rouge fait varier <i>q</i> alors que Bleu joue <i>p</i> = 2/3. Les deux lignes sont horizontales, à la hauteur V = 260/3 ≈ 86,7.',
    surface: {
      f: (p, q) => 60 + 40 * p + 40 * q - 60 * p * q, x0: 0, x1: 1, y0: 0, y1: 1, noms: ['p', 'q', 'V'],
      points: [{ x: 2 / 3, y: 2 / 3, texte: 'minimax : V ≈ 86,7' }],
      coupes: [{ pts: GRILLE(0, 1, 60).map(p => [p, 2 / 3]), couleur: BLEU }, { pts: GRILLE(0, 1, 60).map(q => [2 / 3, q]), couleur: ROUGE }]
    }
  });
}

/* ---------- laboratoire : sa propre matrice 2 × 2 ---------- */
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
function frac(n, d) {
  if (!Number.isInteger(n) || !Number.isInteger(d) || d === 0) return null;
  const g = gcd(Math.abs(n), Math.abs(d)) || 1;
  let N = n / g, D = d / g;
  if (D < 0) { N = -N; D = -D; }
  return D === 1 ? String(N).replace('-', '−') : String(N).replace('-', '−') + '/' + D;
}
function analyser(a, b, c, d) {
  const M = [[a, b], [c, d]], mins = [Math.min(a, b), Math.min(c, d)], maxs = [Math.max(a, c), Math.max(b, d)];
  const maximin = Math.max(...mins), minimax = Math.min(...maxs);
  let col = null;
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) if (!col && M[i][j] === mins[i] && M[i][j] === maxs[j]) col = [i, j];
  const den = a - b - c + d;
  return { mins, maxs, maximin, minimax, col, den, p: (d - c) / den, q: (d - b) / den, V: (a * d - b * c) / den };
}

const labo = sel('labo-jeu');
if (labo) {
  labo.innerHTML = `
<table class="jeu-matrice">
<tr><th></th><th class="jr">R1</th><th class="jr">R2</th><th class="jm" title="plus petit gain de la ligne">min</th></tr>
<tr><th class="jb">B1</th><td><input type="number" step="1" value="80" data-k="a" aria-label="Gain si Bleu joue B1 et Rouge R1"></td><td><input type="number" step="1" value="100" data-k="b" aria-label="Gain si Bleu joue B1 et Rouge R2"></td><td data-o="m0"></td></tr>
<tr><th class="jb">B2</th><td><input type="number" step="1" value="100" data-k="c" aria-label="Gain si Bleu joue B2 et Rouge R1"></td><td><input type="number" step="1" value="60" data-k="d" aria-label="Gain si Bleu joue B2 et Rouge R2"></td><td data-o="m1"></td></tr>
<tr><th class="jm" title="plus grand gain de la colonne">max</th><td data-o="M0"></td><td data-o="M1"></td><td></td></tr>
</table>
<div class="anim-ctrl">
  <button type="button" class="sec" data-pre="80,100,100,60">Guerre froide</button>
  <button type="button" class="sec" data-pre="6,5,3,4">Avec point col</button>
  <button type="button" class="sec" data-pre="3,6,5,4">Sans point col</button>
  <button type="button" class="sec" data-pre="1,-1,-1,1">Pile ou face</button>
</div>
<div class="scene3d"></div>
<p class="jeu-resultat" data-o="res"></p>`;
  const $ = s => labo.querySelector(s);
  const ent = { a: $('[data-k="a"]'), b: $('[data-k="b"]'), c: $('[data-k="c"]'), d: $('[data-k="d"]') };
  const S3 = creerSurface($('.scene3d'), { label: 'Surface du gain espéré V(p, q) de Bleu pour la matrice de gains saisie, avec son point col ou son point minimax.' });
  if (S3) commandesTactiles(labo, S3);
  function maj() {
    const [a, b, c, d] = ['a', 'b', 'c', 'd'].map(k => { const v = parseFloat(ent[k].value); return Number.isFinite(v) ? v : 0; });
    const A = analyser(a, b, c, d), M = [[a, b], [c, d]];
    ['m0', 'm1'].forEach((k, i) => { $('[data-o="' + k + '"]').textContent = fr(A.mins[i], 2).replace(',00', ''); });
    ['M0', 'M1'].forEach((k, j) => { $('[data-o="' + k + '"]').textContent = fr(A.maxs[j], 2).replace(',00', ''); });
    labo.querySelectorAll('.jeu-matrice td input').forEach(el => el.parentElement.classList.remove('jeu-col'));
    let p, q, V, html;
    const lib = i => 'B' + (i + 1), libr = j => 'R' + (j + 1);
    if (A.col) {
      p = A.col[0] === 0 ? 1 : 0; q = A.col[1] === 0 ? 1 : 0; V = M[A.col[0]][A.col[1]];
      ent[['a', 'b', 'c', 'd'][2 * A.col[0] + A.col[1]]].parentElement.classList.add('jeu-col');
      html = '<b>Point col</b> en (' + lib(A.col[0]) + ', ' + libr(A.col[1]) + ') : le plus grand des gains minimaux (' + fr(A.maximin, 2).replace(',00', '') + ') est égal au plus petit des gains maximaux (' + fr(A.minimax, 2).replace(',00', '') + '). Les <b>stratégies pures</b> ' + lib(A.col[0]) + ' pour Bleu et ' + libr(A.col[1]) + ' pour Rouge sont optimales, et la valeur du jeu est <b>V = ' + fr(V, 2).replace(',00', '') + '</b>.';
    } else {
      p = A.p; q = A.q; V = A.V;
      const fp = frac(d - c, A.den), fq = frac(d - b, A.den), fv = frac(a * d - b * c, A.den);
      html = '<b>Pas de point col</b> : le plus grand des gains minimaux (' + fr(A.maximin, 2).replace(',00', '') + ') est strictement inférieur au plus petit des gains maximaux (' + fr(A.minimax, 2).replace(',00', '') + '). Les stratégies pures ne conviennent pas, il faut des <b>stratégies mixtes</b> : Bleu joue B1 avec la probabilité <b>p = ' + (fp ? fp + ' ≈ ' : '') + fr(p, 3) + '</b>, Rouge joue R1 avec la probabilité <b>q = ' + (fq ? fq + ' ≈ ' : '') + fr(q, 3) + '</b>, et la valeur du jeu est <b>V = ' + (fv ? fv + ' ≈ ' : '') + fr(V, 2) + '</b>.';
    }
    $('[data-o="res"]').innerHTML = html;
    if (S3) {
      const f = (x, y) => x * y * a + x * (1 - y) * b + (1 - x) * y * c + (1 - x) * (1 - y) * d;
      S3.dessiner({
        f, x0: 0, x1: 1, y0: 0, y1: 1, noms: ['p', 'q', 'V'],
        points: [{ x: Math.min(1, Math.max(0, p)), y: Math.min(1, Math.max(0, q)), texte: (A.col ? 'point col' : 'minimax') + ' : V = ' + fr(V, 2).replace(',00', '') }],
        coupes: [{ pts: GRILLE(0, 1, 60).map(x => [x, q]), couleur: BLEU }, { pts: GRILLE(0, 1, 60).map(y => [p, y]), couleur: ROUGE }]
      });
    }
  }
  Object.values(ent).forEach(el => el.addEventListener('input', maj));
  labo.querySelectorAll('[data-pre]').forEach(b => b.addEventListener('click', () => {
    const v = b.getAttribute('data-pre').split(',');
    ['a', 'b', 'c', 'd'].forEach((k, i) => { ent[k].value = v[i]; });
    maj();
  }));
  maj();
}
