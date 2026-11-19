/* Réserver une salle : parmi des demandes de réservation (des intervalles de
   temps), en satisfaire le plus possible sans chevauchement. Plusieurs critères
   gloutons semblent raisonnables ; un seul est toujours optimal : prendre la
   demande qui se termine le plus tôt.
   Conteneur attendu : <div class="anim" data-anim="intervalles"></div>           */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="intervalles"]');
  if (!root) return;

  const CRITERES = {
    fin: { nom: 'celle qui finit le plus tôt', cle: (I) => I.b },
    debut: { nom: 'celle qui commence le plus tôt', cle: (I) => I.a },
    courte: { nom: 'la plus courte', cle: (I) => I.b - I.a },
    conflits: { nom: 'celle qui a le moins de conflits', cle: null }
  };
  root.innerHTML = `
<canvas class="anim-scene" role="img" aria-label="Des réservations sur une journée, acceptées une à une par un critère glouton"></canvas>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Prendre d'abord <select data-k="c">${Object.entries(CRITERES).map(([k, c]) => `<option value="${k}">${c.nom}</option>`).join('')}</select></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="neuf">Autres demandes</button>
  <button type="button" class="sec" data-k="piege">Un cas piège</button>
</div>`;
  const $ = s => root.querySelector(s);
  const cv = $('canvas'), info = $('.anim-info'), selC = $('[data-k="c"]');
  let I = [], ordre = [], k = 0, acc = [], timer = 0, dim, optimum = 0;

  function demandes() {
    I = [];
    const n = 15;
    for (let i = 0; i < n; i++) { const a = 8 + Math.random() * 11, d = 0.6 + Math.random() * Math.random() * 5; I.push({ a, b: Math.min(20.5, a + d) }); }
    preparer();
  }
  function piege() {                                  // un cas où « le plus court » et « le plus tôt » échouent
    const c = selC.value;
    I = c === 'courte' ? [{ a: 8, b: 12 }, { a: 11.3, b: 13 }, { a: 12.3, b: 16 }, { a: 15.4, b: 17 }, { a: 16.5, b: 20 }]
      : c === 'debut' ? [{ a: 8, b: 20 }, { a: 9, b: 10.5 }, { a: 11, b: 12.5 }, { a: 13, b: 14.5 }, { a: 15, b: 16.5 }, { a: 17, b: 18.5 }]
      : c === 'conflits' ? [{ a: 8, b: 9.8 }, { a: 10, b: 11.8 }, { a: 12, b: 13.8 }, { a: 14, b: 15.8 }, { a: 9.3, b: 10.4 }, { a: 9.4, b: 10.5 }, { a: 9.5, b: 10.6 }, { a: 13.3, b: 14.4 }, { a: 13.4, b: 14.5 }, { a: 13.5, b: 14.6 }, { a: 11.4, b: 12.4 }]
      : [{ a: 8, b: 20 }, { a: 9, b: 10.5 }, { a: 11, b: 12.5 }, { a: 13, b: 14.5 }, { a: 15, b: 16.5 }];
    preparer();
    info.innerHTML = c === 'fin' ? 'Avec le bon critère, il n\'y a pas de piège : essayez ce cas avec les autres critères.' : 'Un cas construit pour mettre ce critère en défaut. Lancez.';
  }
  const chevauche = (x, y) => x.a < y.b && y.a < x.b;
  function preparer() {
    clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Lancer';
    I.sort((x, y) => x.a - y.a);
    const c = CRITERES[selC.value];
    const conflits = I.map(x => I.filter(y => y !== x && chevauche(x, y)).length);
    ordre = I.map((_, i) => i).sort((p, q) => c.cle ? c.cle(I[p]) - c.cle(I[q]) : conflits[p] - conflits[q] || I[p].b - I[q].b);
    k = 0; acc = [];
    // optimum : le glouton « finit le plus tôt »
    let fin = -1; optimum = 0;
    for (const x of [...I].sort((x, y) => x.b - y.b)) if (x.a >= fin) { optimum++; fin = x.b; }
    info.innerHTML = `${I.length} demandes. Critère : prendre d'abord ${c.nom}, si elle ne chevauche aucune demande déjà acceptée.`;
    dessiner();
  }
  function pas() {
    if (k >= ordre.length) return false;
    const i = ordre[k++], ok = acc.every(j => !chevauche(I[i], I[j]));
    if (ok) acc.push(i);
    I[i].etat = ok ? 'oui' : 'non'; I.forEach((x, j) => { x.vu = j === i; });
    if (k === ordre.length) {
      info.innerHTML = `Terminé : <b>${acc.length}</b> demande${acc.length > 1 ? 's' : ''} satisfaite${acc.length > 1 ? 's' : ''}, pour un maximum possible de <b>${optimum}</b>.` + (acc.length === optimum ? ' Optimal.' : ' Ce critère n\'est pas optimal.');
      I.forEach(x => { x.vu = false; });
    } else info.innerHTML = `${ok ? 'Acceptée' : 'Refusée (elle chevauche une demande acceptée)'} : ${heure(I[i].a)} – ${heure(I[i].b)}. ${acc.length} acceptée${acc.length > 1 ? 's' : ''} pour l'instant.`;
    dessiner(); return k < ordre.length;
  }
  const heure = t => `${Math.floor(t)} h ${String(Math.round((t % 1) * 60)).padStart(2, '0')}`;
  function fit() {
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = Math.max(160, Math.min(26 * 15 + 40, w * 0.62));
    cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
  }
  function dessiner() {
    if (!dim) return;
    const g = cv.getContext('2d'), { w, h } = dim, X = t => 12 + (w - 24) * (t - 8) / 12.5, rh = Math.min(24, (h - 30) / I.length);
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#94a3b8'; g.font = '11px system-ui, sans-serif'; g.textAlign = 'center';
    for (let t = 8; t <= 20; t += 2) { g.fillText(t + ' h', X(t), h - 6); g.strokeStyle = '#eef2f6'; g.beginPath(); g.moveTo(X(t), 4); g.lineTo(X(t), h - 18); g.stroke(); }
    // demandes acceptées projetées sur la ligne de la salle
    I.forEach((x, i) => {
      const y = 6 + i * rh;
      g.fillStyle = x.etat === 'oui' ? '#16a34a' : x.etat === 'non' ? '#e2e8f0' : '#BFD7EA';
      g.fillRect(X(x.a), y, X(x.b) - X(x.a), rh - 5);
      if (x.etat === 'non') { g.strokeStyle = '#cbd5e1'; g.strokeRect(X(x.a) + 0.5, y + 0.5, X(x.b) - X(x.a) - 1, rh - 6); }
      if (x.vu) { g.strokeStyle = x.etat === 'oui' ? '#14532d' : '#DC2626'; g.lineWidth = 2.5; g.strokeRect(X(x.a), y, X(x.b) - X(x.a), rh - 5); g.lineWidth = 1; }
    });
  }
  $('[data-k="go"]').addEventListener('click', e => {
    if (timer) { clearInterval(timer); timer = 0; e.target.textContent = 'Reprendre'; return; }
    if (k >= ordre.length) { I.forEach(x => { delete x.etat; }); preparer(); }
    e.target.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; $('[data-k="go"]').textContent = 'Relancer'; } }, 700);
  });
  $('[data-k="neuf"]').addEventListener('click', demandes);
  $('[data-k="piege"]').addEventListener('click', piege);
  selC.addEventListener('change', () => { I.forEach(x => { delete x.etat; }); preparer(); });
  window.addEventListener('resize', fit);
  demandes(); fit();
})();
