/* Réduire une image de 24 bits (un octet par couleur) à 6 bits (deux bits par
   couleur, soit 4 niveaux au lieu de 256). Trois façons de choisir les niveaux :
   - tronquer : on garde les deux bits de poids fort, v & 0b11000000 ; l'image
     s'assombrit, car chaque valeur descend au bas de son intervalle ;
   - arrondir au plus proche multiple de 64, en ajoutant 32 avant de tronquer :
     sur un octet, v + 32 déborde dès que v ≥ 224, et les tons les plus clairs
     deviennent les plus sombres ;
   - prendre le milieu de l'intervalle, (v & 0b11000000) + 32 : aucun débordement.
   À gauche du curseur, l'image d'origine ; à droite, l'image convertie. Cliquer
   sur un pixel montre le calcul en binaire.
   Conteneur attendu : <div class="anim" data-anim="image6bits" data-src="/larochelle.jpg"></div> */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="image6bits"]');
  if (!root) return;

  const METHODES = {
    tronquer: { nom: 'Tronquer', f: v => v & 0xC0, expr: 'v // 64 * 64' },
    arrondir: { nom: 'Arrondir (déborde)', f: v => ((v + 32) & 0xFF) & 0xC0, expr: '(v + 32) // 64 * 64', deb: v => v + 32 > 255 },
    milieu: { nom: 'Milieu de l\'intervalle', f: v => (v & 0xC0) + 32, expr: 'v // 64 * 64 + 32' }
  };
  root.innerHTML = `
<div class="i6-onglets ax-onglets" role="tablist">${Object.entries(METHODES).map(([k, m], i) => `<button type="button" role="tab" data-m="${k}"${i === 0 ? ' class="ax-on"' : ''}>${m.nom}</button>`).join('')}</div>
<div class="i6-grille">
  <div class="i6-cadre">
    <canvas class="i6-toile" role="img" aria-label="Photographie du port de La Rochelle, à gauche en 24 bits, à droite en 6 bits"></canvas>
    <span class="i6-etiq i6-g">24 bits</span><span class="i6-etiq i6-d">6 bits</span>
    <div class="i6-curseur" role="slider" aria-label="Séparation avant / après" tabindex="0"><span></span></div>
  </div>
  <div class="i6-cote">
    <svg class="i6-schema" viewBox="0 0 290 326" role="img" aria-label="Correspondance entre les 256 valeurs d'un octet et les 4 niveaux conservés"></svg>
  </div>
</div>
<div class="i6-pixel"></div>
<p class="i6-info" aria-live="polite"></p>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), cadre = $('.i6-cadre'), curseur = $('.i6-curseur'), schema = $('svg'), panPix = $('.i6-pixel'), info = $('.i6-info');
  let methode = 'tronquer', W = 0, H = 0, orig = null, conv = null, sep = 0.5, px = [470, 213];
  const img = new Image();
  img.onload = () => {
    W = img.naturalWidth; H = img.naturalHeight;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'); g.drawImage(img, 0, 0);
    orig = g.getImageData(0, 0, W, H);
    cv.width = W; cv.height = H;
    convertir();
  };
  img.src = root.dataset.src || '/larochelle.jpg';

  function convertir() {
    const f = METHODES[methode].f, d = orig.data;
    conv = new ImageData(W, H);
    const o = conv.data;
    for (let k = 0; k < d.length; k += 4) { o[k] = f(d[k]); o[k + 1] = f(d[k + 1]); o[k + 2] = f(d[k + 2]); o[k + 3] = 255; }
    dessiner(); schemaDessiner(); pixel(); texte();
  }
  function dessiner() {
    const g = cv.getContext('2d'), xs = Math.round(sep * W);
    g.putImageData(conv, 0, 0);
    if (xs > 0) g.putImageData(orig, 0, 0, 0, 0, xs, H);
    // le pixel inspecté
    g.strokeStyle = '#fff'; g.lineWidth = 3; g.beginPath(); g.arc(px[0], px[1], 9, 0, 7); g.stroke();
    g.strokeStyle = '#0f172a'; g.lineWidth = 1.5; g.beginPath(); g.arc(px[0], px[1], 9, 0, 7); g.stroke();
    curseur.style.left = (sep * 100) + '%';
  }
  // ---------------------------------------------------------------- le schéma des niveaux
  function schemaDessiner() {
    const m = METHODES[methode], deb = methode === 'arrondir';
    const Y = v => 318 - v / 256 * 270, xa = 74, la = 30, xb = 176, rw = 74, rh = 26;
    const COUL = ['#DBEAFE', '#93C5FD', '#60A5FA', '#2563EB'];
    // centre vertical du rectangle de chaque niveau : au milieu de l'intervalle qui y mène
    const centre = s2 => methode === 'tronquer' ? Y(s2 + 32) : methode === 'milieu' ? Y(s2) : Y(Math.max(18, s2));
    let h = `<defs><marker id="i6-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#DC2626"/></marker></defs>`;
    h += `<text x="${xa + la / 2}" y="16" class="i6-axe">8 bits</text><text x="${xb + rw / 2}" y="16" class="i6-axe">2 bits</text>`;
    const k0 = orig ? (px[1] * W + px[0]) * 4 : 0, vals = orig ? [orig.data[k0], orig.data[k0 + 1], orig.data[k0 + 2]] : [];
    const bandes = deb ? [[0, 32, 0], [32, 96, 1], [96, 160, 2], [160, 224, 3], [224, 256, -1]] : [[0, 64, 0], [64, 128, 1], [128, 192, 2], [192, 256, 3]];
    for (const [a1, b1, n] of bandes) {
      const s2 = m.f(a1), yc = centre(s2);
      h += `<rect x="${xa}" y="${Y(b1)}" width="${la}" height="${Y(a1) - Y(b1)}" fill="${n < 0 ? 'url(#i6-hach)' : COUL[n]}" class="i6-bande"/>`;
      const utilise = vals.some(v => v >= a1 && v < b1);
      if (n >= 0) h += `<path d="M${xa + la} ${Y(b1)}C${xa + la + 50} ${Y(b1)}, ${xb - 50} ${yc - rh / 2}, ${xb} ${yc - rh / 2}L${xb} ${yc + rh / 2}C${xb - 50} ${yc + rh / 2}, ${xa + la + 50} ${Y(a1)}, ${xa + la} ${Y(a1)}z" fill="${COUL[n]}" class="i6-flux${utilise ? ' i6-actif' : ''}"/>`;
    }
    if (deb) h = h.replace('<defs>', `<defs><pattern id="i6-hach" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#FEE2E2"/><rect width="2.5" height="6" fill="#F87171"/></pattern>`);
    for (const v of deb ? [0, 32, 96, 160, 224, 256] : [0, 64, 128, 192, 256]) if (!vals.some(w => Math.abs(Y(w) - (v === 0 ? Y(v) - 6 : v === 256 ? Y(v) + 7 : Y(v))) < 8)) h += `<text x="${xa + la / 2}" y="${v === 0 ? Y(v) - 3 : v === 256 ? Y(v) + 10 : Y(v) + 3.5}" class="i6-grad i6-dans">${v}</text>`;
    // niveaux de sortie : le gris obtenu, sa valeur à droite, les trois canaux à gauche
    [0, 64, 128, 192].forEach(v => {
      const s2 = m.f(v), yc = centre(s2);
      h += `<rect x="${xb}" y="${yc - rh / 2}" width="${rw}" height="${rh}" rx="6" fill="rgb(${s2},${s2},${s2})" class="i6-niveau"/>` +
           `<text x="${xb + rw - 8}" y="${yc + 4.5}" class="i6-nval" fill="${s2 < 128 ? '#fff' : '#0f172a'}">${s2}</text>`;
    });
    // dépassement : la bande du haut repart à 0, par un chemin qui contourne les niveaux
    if (deb) {
      const y1 = Y(240), y0 = centre(0), xr = xb + rw + 18;
      h += `<path d="M${xa + la} ${y1}H${xr - 10}Q${xr} ${y1} ${xr} ${y1 + 10}V${y0 - 10}Q${xr} ${y0} ${xr - 10} ${y0}H${xb + rw + 4}" class="i6-deb${vals.some(v => v >= 224) ? ' i6-actif' : ''}" marker-end="url(#i6-pointe)"/>` +
           `<text x="${xr + 4}" y="34" class="i6-debt">v + 32 &gt; 255 : on repart de 0</text>`;
    }
    // le pixel inspecté : une étiquette par canal à gauche, une courbe jusqu'à un point dans le niveau atteint
    if (orig) {
      const k = (px[1] * W + px[0]) * 4, d = orig.data;
      const can = [['R', '#DC2626', 0], ['V', '#16a34a', 1], ['B', '#2563EB', 2]].map(([nom, c, i]) => ({ nom, c, v: d[k + i] }));
      // étiquettes : par ordre de hauteur, sans chevauchement
      const tri = can.map((x, j) => ({ ...x, j, y: Y(x.v) })).sort((p, q) => p.y - q.y);
      for (let u = 1; u < tri.length; u++) if (tri[u].y - tri[u - 1].y < 15) tri[u].y = tri[u - 1].y + 15;
      for (const x of tri) {
        const yv = Y(x.v), s2 = m.f(x.v), yc = centre(s2), dx = xb + 12 + x.j * 13;
        h += `<line x1="${xa - 3}" y1="${yv}" x2="${xa + la + 3}" y2="${yv}" stroke="${x.c}" class="i6-trait"/>` +
             `<path d="M${xa - 20} ${x.y}H${xa - 12}L${xa - 4} ${yv}" class="i6-fil" stroke="${x.c}"/>` +
             `<rect x="${xa - 54}" y="${x.y - 7.5}" width="34" height="15" rx="7.5" fill="${x.c}"/><text x="${xa - 37}" y="${x.y + 4}" class="i6-tag">${x.nom} ${x.v}</text>` +
             `<circle cx="${dx}" cy="${yc}" r="5" fill="${x.c}" class="i6-pt"/>`;
      }
    }
    schema.innerHTML = h;
  }
  // ---------------------------------------------------------------- le pixel en binaire
  const bin = v => v.toString(2).padStart(8, '0');
  function pixel() {
    if (!orig) return;
    const m = METHODES[methode], k = (px[1] * W + px[0]) * 4, d = orig.data;
    const ligne = (nom, c, v) => {
      const s = m.f(v), deb = m.deb && m.deb(v);
      const avant = methode === 'arrondir' ? `${bin(v)} + 00100000 = ${deb ? '<span class="i6-perdu">1</span>' : ''}${bin((v + 32) & 255)}` : bin(v);
      const garde = bin(s).slice(0, 2), reste = bin(s).slice(2);
      return `<tr><th style="color:${c}">${nom}</th><td>${v}</td><td class="i6-b">${avant}</td><td>→</td><td class="i6-b"><span class="i6-garde">${garde}</span>${reste}</td><td>${s}${deb ? ' <span class="i6-alerte">débordement</span>' : ''}</td></tr>`;
    };
    const avantC = `rgb(${d[k]},${d[k + 1]},${d[k + 2]})`, apresC = `rgb(${m.f(d[k])},${m.f(d[k + 1])},${m.f(d[k + 2])})`;
    panPix.innerHTML = `<div class="i6-pastilles"><span style="background:${avantC}"></span><span class="i6-fl">→</span><span style="background:${apresC}"></span><span class="i6-pos">pixel (${px[0]}, ${px[1]})</span></div>` +
      `<div class="i6-defile"><table class="i6-table">${ligne('R', '#DC2626', d[k])}${ligne('V', '#16a34a', d[k + 1])}${ligne('B', '#2563EB', d[k + 2])}</table></div>`;
  }
  function texte() {
    info.innerHTML = methode === 'tronquer'
      ? `Chaque couleur ne garde que ses deux premiers bits&nbsp;: <code>v // 64 * 64</code>. Il reste 4 niveaux par couleur, soit 4<sup>3</sup> = 64 couleurs, mais chaque valeur tombe au <b>bas</b> de son intervalle&nbsp;: elle perd en moyenne 32, et l'image s'assombrit.`
      : methode === 'arrondir'
      ? `Pour arrondir au plus proche, on ajoute 32 avant de tronquer&nbsp;: <code>(v + 32) // 64 * 64</code>. Sur un octet, comme dans un tableau numpy <code>uint8</code>, v + 32 dépasse 255 dès que v ≥ 224&nbsp;: le bit qui déborde est perdu, et le résultat repart de 0. Les tons les plus clairs, façades blanches et reflets, deviennent les plus sombres. Cliquez sur un pixel clair pour voir le calcul.`
      : `On prend le milieu de chaque intervalle&nbsp;: <code>v // 64 * 64 + 32</code>, soit 32, 96, 160 ou 224. Le plus grand résultat, 224, tient dans un octet&nbsp;: pas de dépassement, et la luminosité d'ensemble est conservée.`;
  }
  // ---------------------------------------------------------------- interactions
  root.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => {
    methode = b.dataset.m; root.querySelectorAll('[data-m]').forEach(x => x.classList.toggle('ax-on', x === b));
    if (orig) convertir();
  }));
  let tire = false;
  const pos = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
  curseur.addEventListener('pointerdown', e => { tire = true; curseur.setPointerCapture(e.pointerId); e.preventDefault(); });
  curseur.addEventListener('pointermove', e => { if (!tire) return; sep = Math.max(0, Math.min(1, pos(e)[0])); dessiner(); });
  curseur.addEventListener('pointerup', () => { tire = false; });
  curseur.addEventListener('keydown', e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { sep = Math.max(0, Math.min(1, sep + (e.key === 'ArrowLeft' ? -0.05 : 0.05))); dessiner(); e.preventDefault(); } });
  cv.addEventListener('click', e => {
    if (!orig) return;
    const [u, v] = pos(e); px = [Math.max(0, Math.min(W - 1, Math.round(u * W))), Math.max(0, Math.min(H - 1, Math.round(v * H)))];
    dessiner(); schemaDessiner(); pixel();
  });
})();
