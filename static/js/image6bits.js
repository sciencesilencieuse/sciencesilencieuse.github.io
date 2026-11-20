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
    <svg class="i6-schema" viewBox="0 0 250 322" role="img" aria-label="Correspondance entre les 256 valeurs d'un octet et les 4 niveaux conservés"></svg>
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
    const m = METHODES[methode], Y = v => 306 - v / 256 * 262, Yn = v => Y(Math.max(8, Math.min(248, v))), xa = 46, xb = 186, la = 26;
    const COUL = ['#DBEAFE', '#93C5FD', '#60A5FA', '#2563EB'];
    let h = `<text x="${xa + la / 2}" y="12" class="i6-axe">8 bits</text><text x="${xb + la / 2}" y="12" class="i6-axe">2 bits</text>`;
    // intervalles d'entrée qui mènent au même niveau
    const bandes = methode === 'arrondir' ? [[0, 32, 0], [32, 96, 1], [96, 160, 2], [160, 224, 3], [224, 256, -1]] : [[0, 64, 0], [64, 128, 1], [128, 192, 2], [192, 256, 3]];
    for (const [a, b, n] of bandes) {
      const s2 = m.f(a);
      h += `<rect x="${xa}" y="${Y(b)}" width="${la}" height="${Y(a) - Y(b)}" fill="${n < 0 ? '#FCA5A5' : COUL[n]}" class="i6-bande"/>`;
      if (n >= 0) h += `<polygon points="${xa + la},${Y(b) + 1} ${xa + la},${Y(a) - 1} ${xb},${Yn(s2) + 6} ${xb},${Yn(s2) - 6}" class="i6-flux" fill="${COUL[n]}"/>`;
    }
    for (const v of methode === 'arrondir' ? [0, 32, 96, 160, 224, 256] : [0, 64, 128, 192, 256]) h += `<text x="${xa - 6}" y="${Y(v) + 4}" class="i6-grad">${v}</text>`;
    if (methode === 'arrondir') {
      const ya = Y(240), yz = Yn(0);
      h += `<path d="M${xa + la} ${ya}C${xa + 120} ${ya - 40}, ${xb + 70} ${ya - 30}, ${xb + 56} ${(ya + yz) / 2}S${xb + 44} ${yz}, ${xb + la + 8} ${yz}" class="i6-deb"/><path d="M${xb + la + 4} ${yz}l10 -5v10z" class="i6-debf"/>` +
           `<text x="${(xa + xb) / 2 + 14}" y="30" class="i6-debt">v + 32 &gt; 255 : dépassement</text>`;
    }
    // niveaux de sortie
    [0, 64, 128, 192].forEach((v, n) => { const s2 = m.f(v); h += `<rect x="${xb}" y="${Yn(s2) - 7}" width="${la}" height="14" rx="3" fill="rgb(${s2},${s2},${s2})" class="i6-niveau"/><text x="${xb + la + 6}" y="${Yn(s2) + 4}" class="i6-grad i6-gd">${s2}</text>`; });
    // le pixel inspecté : ses trois canaux
    if (orig) {
      const k = (px[1] * W + px[0]) * 4, d = orig.data;
      [['#DC2626', 0], ['#16a34a', 1], ['#2563EB', 2]].forEach(([c, i], j) => {
        const v = d[k + i], s2 = m.f(v), y1 = Y(v), y2 = Yn(s2), dx = j * 7;
        h += `<line x1="${xa - 3}" y1="${y1}" x2="${xa + la + 3}" y2="${y1}" stroke="${c}" stroke-width="2.5"/>` +
             `<line x1="${xa + la + 3}" y1="${y1}" x2="${xb - 3 - dx}" y2="${y2}" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3"/>` +
             `<circle cx="${xb - 3 - dx}" cy="${y2}" r="3.4" fill="${c}" stroke="#fff" stroke-width="1"/>`;
      });
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
