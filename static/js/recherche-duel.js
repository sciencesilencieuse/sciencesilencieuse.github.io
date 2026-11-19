/* Recherche séquentielle contre recherche dichotomique, sur le même tableau trié.
   À chaque instant, les deux ont fait le même nombre de comparaisons.
   Cliquer sur une case la choisit comme cible.
   Conteneur attendu : <div class="anim" data-anim="recherche-duel"></div>     */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="recherche-duel"]');
  if (!root) return;

  root.innerHTML = `
<figure class="rd-piste"><figcaption><b style="color:#B45309">Recherche séquentielle</b> <span>: on examine les cases une à une</span></figcaption>
  <canvas data-c="seq" role="img" aria-label="Tableau trié parcouru case par case"></canvas><p class="rd-compte" data-o="seq"></p></figure>
<figure class="rd-piste"><figcaption><b style="color:#004D80">Recherche dichotomique</b> <span>: on regarde au milieu, on élimine une moitié</span></figcaption>
  <canvas data-c="dic" role="img" aria-label="Tableau trié dont l'intervalle de recherche est divisé par deux à chaque comparaison"></canvas><p class="rd-compte" data-o="dic"></p></figure>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Taille <select data-k="n"><option>31</option><option selected>127</option><option>1023</option></select></label>
  <button type="button" data-k="go">Lancer</button>
  <button type="button" class="sec" data-k="cible">Autre cible</button>
  <label><input type="checkbox" data-k="absent"> cible absente</label>
  <label>Vitesse <input type="range" min="1" max="30" step="1" value="6" data-k="v"></label>
</div>`;

  const $ = s => root.querySelector(s);
  const cvS = $('[data-c="seq"]'), cvD = $('[data-c="dic"]'), outS = $('[data-o="seq"]'), outD = $('[data-o="dic"]'), info = $('.anim-info');
  const selN = $('[data-k="n"]'), btnGo = $('[data-k="go"]'), inAbs = $('[data-k="absent"]'), inV = $('[data-k="v"]');
  let T, N, x, seq, dic, timer = 0, dim;

  function tableau() {
    N = +selN.value; T = []; let v = Math.floor(Math.random() * 5);
    for (let i = 0; i < N; i++) { v += 1 + Math.floor(Math.random() * 3); T.push(v); }
    nouvelleCible();
  }
  function nouvelleCible(i) {
    if (i === undefined) i = Math.floor(Math.random() * N);
    x = T[i];
    if (inAbs.checked) {                     // une valeur qui tombe dans un « trou » du tableau
      x = T[N - 1] + 1;
      for (let k = 0; k < N - 1; k++) { const j = (i + k) % (N - 1); if (T[j + 1] - T[j] > 1) { x = T[j] + 1; break; } }
    }
    reset();
  }
  function reset() {
    clearInterval(timer); timer = 0; btnGo.textContent = 'Lancer';
    seq = { i: 0, comp: 0, fini: false, trouve: -1 };
    dic = { g: 0, d: N - 1, m: -1, comp: 0, fini: false, trouve: -1, vus: [] };
    afficher();
  }
  function pas() {
    if (!seq.fini) {
      seq.comp++;
      if (T[seq.i] === x) { seq.fini = true; seq.trouve = seq.i; }
      else if (seq.i === N - 1) seq.fini = true;
      else seq.i++;
    }
    if (!dic.fini) {
      if (dic.g > dic.d) dic.fini = true;
      else {
        dic.m = (dic.g + dic.d) >> 1; dic.comp++; dic.vus.push(dic.m);
        if (T[dic.m] === x) { dic.fini = true; dic.trouve = dic.m; }
        else if (x < T[dic.m]) dic.d = dic.m - 1; else dic.g = dic.m + 1;
        if (dic.g > dic.d && dic.trouve < 0) dic.fini = true;
      }
    }
    afficher();
    if (seq.fini && dic.fini) { clearInterval(timer); timer = 0; btnGo.textContent = 'Relancer'; }
  }

  function fit() {
    const dpr = window.devicePixelRatio || 1;
    [cvS, cvD].forEach(cv => {
      const w = cv.clientWidth || 600, h = N <= 31 ? (w < 500 ? 62 : 40) : 56;
      cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    dim = { w: cvS.clientWidth || 600 };
    afficher();
  }
  function dessiner(cv, etat, mode) {
    const g = cv.getContext('2d'), w = cv.clientWidth, h = parseFloat(cv.style.height);
    g.clearRect(0, 0, w, h);
    const lignes = N <= 31 && w < 500 ? 2 : 1, parLigne = Math.ceil(N / lignes), cw = w / parLigne, rh = h / lignes;
    const vmax = T[N - 1];
    for (let i = 0; i < N; i++) {
      const l = Math.floor(i / parLigne), c = i % parLigne, x0 = c * cw, y0 = l * rh;
      let fond = '#E2E8F0', bord = null;
      if (mode === 'seq') {
        if (i < etat.i || (etat.fini && i <= etat.i)) fond = '#FCD9B6';
        if (i === etat.i && etat.comp > 0) bord = '#B45309';
      } else {
        const elimine = i < etat.g || i > etat.d;
        fond = elimine ? '#F1F5F9' : '#BFD7EA';
        if (etat.vus.includes(i)) fond = '#7FA8C9';
        if (i === etat.m) bord = '#004D80';
      }
      if (i === etat.trouve) { fond = '#16a34a'; bord = '#15803d'; }
      g.fillStyle = fond;
      if (N <= 31) {
        g.fillRect(x0 + 1, y0 + 1, cw - 2, rh - 2);
        g.fillStyle = mode === 'dic' && (i < etat.g || i > etat.d) && i !== etat.trouve ? '#94a3b8' : '#1e293b';
        if (i === etat.trouve) g.fillStyle = '#fff';
        g.font = `${Math.min(14, cw * 0.42)}px system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(T[i], x0 + cw / 2, y0 + rh / 2 + 0.5);
      } else {
        const hb = 6 + (h - 8) * T[i] / vmax;
        g.fillRect(x0, h - hb, Math.max(0.6, cw - (N > 300 ? 0 : 0.6)), hb);
      }
      if (bord) { g.strokeStyle = bord; g.lineWidth = 2; if (N <= 31) g.strokeRect(x0 + 1.5, y0 + 1.5, cw - 3, rh - 3); else { g.beginPath(); g.moveTo(x0 + cw / 2, 0); g.lineTo(x0 + cw / 2, h); g.stroke(); } }
    }
    const ic = T.indexOf(x);                       // repère de la cible
    if (ic >= 0) {
      const l = Math.floor(ic / parLigne), xc = (ic % parLigne + 0.5) * cw, yc = l * rh;
      g.fillStyle = '#16a34a'; g.beginPath(); g.moveTo(xc - 5, yc); g.lineTo(xc + 5, yc); g.lineTo(xc, yc + 6); g.closePath(); g.fill();
    }
  }
  function afficher() {
    if (!dim) return;
    dessiner(cvS, seq, 'seq'); dessiner(cvD, dic, 'dic');
    const etatTxt = e => e.trouve >= 0 ? ` : trouvé en case ${e.trouve}` : e.fini ? ' : absent, c\'est certain' : '';
    outS.innerHTML = `<b>${seq.comp}</b> comparaison${seq.comp > 1 ? 's' : ''}${etatTxt(seq)}`;
    outD.innerHTML = `<b>${dic.comp}</b> comparaison${dic.comp > 1 ? 's' : ''}${etatTxt(dic)}` + (!dic.fini && dic.comp ? ` · il reste ${Math.max(0, dic.d - dic.g + 1)} cases possibles` : '');
    info.innerHTML = `On cherche <b>${x}</b> dans un tableau trié de ${N} nombres. Au pire, il faut ${N} comparaisons à la recherche séquentielle, et ${Math.ceil(Math.log2(N + 1))} à la dichotomie.`;
  }

  btnGo.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnGo.textContent = 'Reprendre'; return; }
    if (seq.fini && dic.fini) reset();
    btnGo.textContent = 'Pause';
    timer = setInterval(pas, 1000 / +inV.value);
  });
  inV.addEventListener('input', () => { if (timer) { clearInterval(timer); timer = setInterval(pas, 1000 / +inV.value); } });
  $('[data-k="cible"]').addEventListener('click', () => nouvelleCible());
  inAbs.addEventListener('change', () => nouvelleCible());
  selN.addEventListener('change', () => { tableau(); fit(); });
  [cvS, cvD].forEach(cv => cv.addEventListener('click', ev => {
    const r = cv.getBoundingClientRect(), w = r.width, h = r.height;
    const lignes = N <= 31 && w < 500 ? 2 : 1, parLigne = Math.ceil(N / lignes);
    const c = Math.floor((ev.clientX - r.left) / (w / parLigne)), l = Math.floor((ev.clientY - r.top) / (h / lignes));
    const i = Math.min(N - 1, l * parLigne + c);
    inAbs.checked = false; nouvelleCible(i);
  }));
  window.addEventListener('resize', fit);
  tableau(); fit();
})();
