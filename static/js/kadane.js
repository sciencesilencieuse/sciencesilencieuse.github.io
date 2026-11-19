/* Algorithme de Kadane : un seul passage sur le tableau suffit pour trouver le
   sous-tableau (contigu) de somme maximale. On maintient la meilleure somme
   d'un sous-tableau qui se termine à la case courante ; dès qu'elle devient
   négative, elle ne peut plus aider personne, et l'on repart de zéro.
   Conteneur attendu : <div class="anim" data-anim="kadane"></div>              */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="kadane"]');
  if (!root) return;

  const COL = { pos: '#004D80', neg: '#970E53', sarc: '#006C65', ard: '#475569', or: '#B45309', texte: '#334155', grille: '#e2e8f0' };
  const N = 16;

  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Les valeurs du tableau en barres ; la fenêtre courante et la meilleure fenêtre trouvée sont surlignées pendant le parcours"></canvas>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Pas suivant</button>
  <button type="button" class="sec" data-k="auto">Lecture</button>
  <button type="button" class="sec" data-k="neuf">Nouveau tableau</button>
</div>
<p class="anim-info" aria-live="polite"></p>`;

  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), btnPas = $('[data-k="pas"]'), btnAuto = $('[data-k="auto"]'), btnNeuf = $('[data-k="neuf"]');
  let t, st, dim, timer = 0;

  function nouveau() {
    do {
      t = Array.from({ length: N }, () => Math.round((Math.random() * 2 - 1) * 9 + 1.2));
    } while (t.filter(x => x > 0).length < 6 || t.filter(x => x < 0).length < 5);
    st = { i: -1, courant: 0, debut: 0, meilleur: 0, mDebut: 0, mFin: -1, remise: false };
    message(); draw();
  }
  function pas() {
    if (st.i >= N - 1) return;
    st.i++;
    const x = t[st.i];
    st.avant = st.courant;
    st.remise = st.courant + x <= 0;
    if (st.remise) { st.courant = 0; st.debut = st.i + 1; }
    else st.courant += x;
    if (st.courant > st.meilleur) { st.meilleur = st.courant; st.mDebut = st.debut; st.mFin = st.i; }
    message(); draw();
    if (st.i >= N - 1) arreter();
  }
  function message() {
    if (st.i < 0) { info.innerHTML = 'On parcourt le tableau une seule fois, de gauche à droite, en tenant à jour deux nombres seulement.'; return; }
    const x = t[st.i], fen = st.mFin >= 0 ? `cases ${st.mDebut} à ${st.mFin}` : 'vide';
    let s = `Case ${st.i} (valeur ${x}) : `;
    s += st.remise ? `la somme courante tomberait à ${st.avant} + (${x}) = ${st.avant + x} ≤ 0 ; un tel début ne peut plus aider personne, on <b>repart de zéro</b>. `
                   : `somme courante = <b style="color:${COL.sarc}">${st.courant}</b>. `;
    s += `Meilleure somme : <b style="color:${COL.or}">${st.meilleur}</b> (${fen}).`;
    if (st.i === N - 1) s += ` Fin du parcours : ${N} cases lues, une seule fois chacune.`;
    info.innerHTML = s;
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 640, h = Math.round(Math.max(260, Math.min(330, w * 0.45)));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; draw();
  }
  function draw() {
    if (!dim) return;
    const c = cv.getContext('2d'), { w, h } = dim;
    const g = 16, bw = (w - 2 * g) / N, y0 = h * 0.5, k = (h * 0.5 - 52) / 10;   // 10 unités = demi-hauteur utile
    c.clearRect(0, 0, w, h);
    // meilleure fenêtre (cadre doré) et fenêtre courante (fond sarcelle)
    if (st.mFin >= 0) {
      c.fillStyle = 'rgba(180,83,9,0.10)'; c.strokeStyle = COL.or; c.lineWidth = 2;
      c.fillRect(g + st.mDebut * bw + 1, 26, (st.mFin - st.mDebut + 1) * bw - 2, h - 52);
      c.strokeRect(g + st.mDebut * bw + 1, 26, (st.mFin - st.mDebut + 1) * bw - 2, h - 52);
    }
    if (st.i >= 0 && st.debut <= st.i) {
      c.fillStyle = 'rgba(0,108,101,0.12)';
      c.fillRect(g + st.debut * bw + 4, 32, (st.i - st.debut + 1) * bw - 8, h - 64);
    }
    // axe et barres
    c.strokeStyle = COL.grille; c.lineWidth = 1; c.beginPath(); c.moveTo(g, y0); c.lineTo(w - g, y0); c.stroke();
    for (let j = 0; j < N; j++) {
      const x = g + j * bw, v = t[j], lu = j <= st.i;
      c.globalAlpha = lu ? 1 : 0.35;
      c.fillStyle = v >= 0 ? COL.pos : COL.neg;
      const hb = Math.max(2, Math.abs(v) * k);
      c.fillRect(x + bw * 0.2, v >= 0 ? y0 - hb : y0, bw * 0.6, hb);
      c.globalAlpha = 1;
      c.fillStyle = COL.texte; c.font = '11px sans-serif'; c.textAlign = 'center';
      c.fillText(v, x + bw / 2, v >= 0 ? y0 - hb - 4 : y0 + hb + 12);
      c.fillStyle = '#94a3b8'; c.font = '10px sans-serif'; c.fillText(j, x + bw / 2, h - 8);
    }
    // curseur
    if (st.i >= 0) {
      const x = g + st.i * bw + bw / 2;
      c.fillStyle = COL.ard; c.beginPath(); c.moveTo(x, 22); c.lineTo(x - 6, 12); c.lineTo(x + 6, 12); c.closePath(); c.fill();
    }
    // compteurs
    c.textAlign = 'left'; c.font = '600 12px sans-serif';
    c.fillStyle = COL.sarc; c.fillText(`somme courante : ${st.courant}`, g, 14);
    c.fillStyle = COL.or; c.textAlign = 'right'; c.fillText(`meilleure somme : ${st.meilleur}`, w - g, 14);
  }

  function arreter() { clearInterval(timer); timer = 0; btnAuto.textContent = 'Lecture'; }
  btnPas.addEventListener('click', () => { arreter(); pas(); });
  btnAuto.addEventListener('click', () => {
    if (timer) { arreter(); return; }
    if (st.i >= N - 1) nouveau();
    btnAuto.textContent = 'Pause'; timer = setInterval(pas, 700);
  });
  btnNeuf.addEventListener('click', () => { arreter(); nouveau(); });
  window.addEventListener('resize', fit);
  nouveau(); fit();
})();
