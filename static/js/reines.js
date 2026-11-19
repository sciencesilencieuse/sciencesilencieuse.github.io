/* Les huit reines : poser N reines sur un échiquier N×N sans qu'aucune n'en
   menace une autre. Le retour sur trace pose une reine par ligne, essaie les
   colonnes de gauche à droite, et revient sur la ligne précédente dès qu'une
   ligne n'offre plus aucune case libre.
   Avant le lancement, on peut poser soi-même des reines d'un clic.
   Conteneur attendu : <div class="anim" data-anim="reines"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="reines"]');
  if (!root) return;

  const VIT = [1, 2, 4, 8, 20, 60, 250, 2000];
  root.innerHTML = `
<div class="rn-grille">
  <svg class="rn-plateau" role="img" aria-label="Échiquier sur lequel l'algorithme pose des reines ligne par ligne"></svg>
  <div class="rn-panneau">
    <p class="rn-message" aria-live="polite"></p>
    <p class="rn-stats"></p>
    <p class="rn-compare"></p>
  </div>
</div>
<div class="anim-ctrl">
  <label>Taille <select data-k="n">${[4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => `<option value="${n}"${n === 8 ? ' selected' : ''}>${n} × ${n}</option>`).join('')}</select></label>
  <label>Chercher <select data-k="m"><option value="1">une solution</option><option value="t">toutes les solutions</option></select></label>
  <button type="button" data-k="pas">Une étape</button>
  <button type="button" class="sec" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <label>Vitesse <input type="range" min="0" max="7" step="1" value="2" data-k="v"></label>
</div>`;
  const $ = s => root.querySelector(s);
  const svg = $('svg'), msg = $('.rn-message'), stats = $('.rn-stats'), compare = $('.rn-compare');
  const selN = $('[data-k="n"]'), selM = $('[data-k="m"]'), btnGo = $('[data-k="go"]'), inV = $('[data-k="v"]');
  const fmt = x => x.toLocaleString('fr-FR');

  let N, col, mains, gen, ev, st, timer = 0, dernierT = 0, acc = 0;

  const enPrise = (r1, c1, r2, c2) => c1 === c2 || Math.abs(c1 - c2) === Math.abs(r1 - r2) || r1 === r2;

  function* resoudre(toutes) {
    function* placer(r) {
      if (r === N) { st.sol++; yield { t: 'sol' }; return !toutes; }
      for (let c = 0; c < N; c++) {
        st.essais++;
        let att = -1;
        for (let q = 0; q < r; q++) if (enPrise(q, col[q], r, c)) { att = q; break; }
        if (att >= 0) { yield { t: 'conflit', r, c, att }; continue; }
        col[r] = c; st.poses++; yield { t: 'pose', r, c };
        if (yield* placer(r + 1)) return true;
        col.length = r; st.retours++; yield { t: 'retire', r, c };
      }
      yield { t: 'impasse', r };
      return false;
    }
    yield* placer(0);
    yield { t: 'fin' };
  }

  function preparer() {
    timer = 0; btnGo.textContent = 'Lancer';
    N = +selN.value; col = []; mains = new Set(); gen = null; ev = null;
    st = { essais: 0, poses: 0, retours: 0, sol: 0 };
    msg.innerHTML = `Cliquez sur l'échiquier pour poser vos propres reines, ou lancez l'algorithme&nbsp;: une reine par ligne, de haut en bas, en essayant les colonnes de gauche à droite.`;
    stats.innerHTML = '';
    let b = 1n; const n2 = BigInt(N * N);
    for (let k = 0n; k < BigInt(N); k++) b = b * (n2 - k) / (k + 1n);
    let f = 1; for (let k = 2; k <= N; k++) f *= k;
    compare.innerHTML = `Sans réfléchir, il y a <b>${b.toLocaleString('fr-FR')}</b> façons de poser ${N} reines sur ${N * N} cases. ` +
      `Une seule par ligne&nbsp;: ${fmt(N ** N)}. Une seule par ligne et par colonne&nbsp;: ${N}! = ${fmt(f)}.`;
    dessiner();
  }

  function demarrer() {
    if (gen) return;
    mains.clear(); col = []; st = { essais: 0, poses: 0, retours: 0, sol: 0 };
    gen = resoudre(selM.value === 't');
  }
  function avancer() {
    if (!gen) return false;
    const r = gen.next();
    if (r.done) { gen = null; return false; }
    ev = r.value;
    if (ev.t === 'fin' || (ev.t === 'sol' && selM.value !== 't')) { gen = null; return false; }
    return true;
  }

  function decrire() {
    if (!ev) return;
    const L = r => r + 1;
    if (ev.t === 'conflit') msg.innerHTML = `Ligne ${L(ev.r)}, colonne ${L(ev.c)}&nbsp;: en prise par la reine de la ligne ${L(ev.att)}. On essaie la colonne suivante.`;
    else if (ev.t === 'pose') msg.innerHTML = `Ligne ${L(ev.r)}&nbsp;: la colonne ${L(ev.c)} est libre. On y pose une reine et l'on passe à la ligne ${ev.r + 2 <= N ? ev.r + 2 : 'suivante'}.`;
    else if (ev.t === 'retire') msg.innerHTML = `Retour sur la ligne ${L(ev.r)}&nbsp;: tout ce qui suivait la reine de la colonne ${L(ev.c)} a été exploré. On la retire et l'on essaie plus à droite.`;
    else if (ev.t === 'impasse') msg.innerHTML = ev.r === 0 ? `Toutes les colonnes de la première ligne ont été essayées.`
      : `Ligne ${L(ev.r)}&nbsp;: aucune case libre. <b>Impasse</b>&nbsp;: on revient sur la ligne ${ev.r}.`;
    else if (ev.t === 'sol') msg.innerHTML = selM.value === 't' ? `Solution n<sup>o</sup>&nbsp;${st.sol}. On continue l'exploration comme s'il s'agissait d'une impasse.`
      : `<b>Une solution</b>, trouvée après ${fmt(st.essais)} cases essayées.`;
    else if (ev.t === 'fin') msg.innerHTML = `Exploration terminée&nbsp;: <b>${fmt(st.sol)}</b> solution${st.sol > 1 ? 's' : ''} pour un échiquier ${N}&nbsp;×&nbsp;${N}.`;
    stats.innerHTML = `Cases essayées&nbsp;: <b>${fmt(st.essais)}</b> · reines posées&nbsp;: ${fmt(st.poses)} · retours en arrière&nbsp;: ${fmt(st.retours)}` +
      (selM.value === 't' ? ` · solutions&nbsp;: <b>${fmt(st.sol)}</b>` : '');
  }

  function dessiner() {
    const T = 60, W = N * T;
    svg.setAttribute('viewBox', `-4 -4 ${W + 8} ${W + 8}`);
    let h = '';
    const reines = gen || ev ? col.map((c, r) => [r, c]) : [...mains].map(k => [Math.floor(k / N), k % N]);
    const menacees = new Set();
    if (!gen && !ev) for (const [r, c] of reines) for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if ((i !== r || j !== c) && enPrise(r, c, i, j)) menacees.add(i * N + j);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const k = i * N + j, en = menacees.has(k);
      h += `<rect x="${j * T}" y="${i * T}" width="${T}" height="${T}" class="rn-c ${(i + j) % 2 ? 'rn-f' : 'rn-cl'}${en ? ' rn-menace' : ''}" data-k="${k}"/>`;
    }
    if (ev && (ev.t === 'conflit' || ev.t === 'pose')) {
      h += `<rect x="${ev.c * T + 3}" y="${ev.r * T + 3}" width="${T - 6}" height="${T - 6}" class="${ev.t === 'conflit' ? 'rn-rouge' : 'rn-vert'}"/>`;
      if (ev.t === 'conflit') h += `<line x1="${col[ev.att] * T + T / 2}" y1="${ev.att * T + T / 2}" x2="${ev.c * T + T / 2}" y2="${ev.r * T + T / 2}" class="rn-trait"/>`;
    }
    if (ev && ev.t === 'impasse' && ev.r < N) h += `<rect x="1" y="${ev.r * T + 1}" width="${W - 2}" height="${T - 2}" class="rn-impasse"/>`;
    if (ev && ev.t === 'retire') h += `<text x="${ev.c * T + T / 2}" y="${ev.r * T + T / 2 + 14}" class="rn-fantome">♛</text>`;
    const conflitMain = new Set();
    if (!gen && !ev) for (const [r, c] of reines) for (const [r2, c2] of reines) if ((r !== r2 || c !== c2) && enPrise(r, c, r2, c2)) conflitMain.add(r * N + c);
    for (const [r, c] of reines) {
      const cls = ev && (ev.t === 'sol' || (ev.t === 'fin' && st.sol)) && col.length === N ? 'rn-q rn-gagne' : conflitMain.has(r * N + c) ? 'rn-q rn-attaquee' : 'rn-q';
      h += `<text x="${c * T + T / 2}" y="${r * T + T / 2 + 14}" class="${cls}">♛</text>`;
    }
    svg.innerHTML = h;
    if (!gen && !ev) {
      const n = reines.length, att = conflitMain.size;
      if (n) msg.innerHTML = `${n} reine${n > 1 ? 's' : ''} posée${n > 1 ? 's' : ''}` + (att ? `, dont <b>${att}</b> en prise (en rouge).` : n === N ? `&nbsp;: <b>bravo, c'est une solution&nbsp;!</b>` : `, aucune en prise. Les cases teintées de rouge sont menacées.`);
    }
  }

  function etape() { demarrer(); const encore = avancer(); decrire(); dessiner(); return encore; }

  function boucle(t) {
    if (!timer) return;
    const dt = dernierT ? Math.min(0.1, (t - dernierT) / 1000) : 1 / 60; dernierT = t;
    acc += dt * VIT[+inV.value];
    let n = 0, encore = true;
    while (acc >= 1 && encore && n < 5000) { acc -= 1; n++; encore = avancer(); }
    if (n) { decrire(); dessiner(); }
    if (!encore) { timer = 0; btnGo.textContent = 'Lancer'; return; }
    requestAnimationFrame(boucle);
  }

  btnGo.addEventListener('click', () => {
    if (timer) { timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (!gen && ev) preparer();
    demarrer();
    timer = 1; dernierT = 0; acc = 1; btnGo.textContent = 'Pause';
    requestAnimationFrame(boucle);
  });
  $('[data-k="pas"]').addEventListener('click', () => { timer = 0; btnGo.textContent = 'Lancer'; if (!gen && ev) preparer(); etape(); });
  $('[data-k="reset"]').addEventListener('click', preparer);
  selN.addEventListener('change', preparer);
  selM.addEventListener('change', preparer);
  svg.addEventListener('click', e => {
    if (gen || ev) return;
    const c = e.target.closest('[data-k]') || null;
    let k;
    if (c) k = +c.dataset.k;
    else {
      const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
      const q = p.matrixTransform(svg.getScreenCTM().inverse());
      const i = Math.floor(q.y / 60), j = Math.floor(q.x / 60);
      if (i < 0 || j < 0 || i >= N || j >= N) return;
      k = i * N + j;
    }
    if (mains.has(k)) mains.delete(k); else mains.add(k);
    dessiner();
  });
  preparer();
})();
