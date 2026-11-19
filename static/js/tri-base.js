/* Tri par base (radix sort), chiffre par chiffre en commençant par les unités,
   comme les trieuses de cartes perforées : on distribue les cartes dans dix
   casiers selon le chiffre courant, puis on les rassemble dans l'ordre des
   casiers, sans changer l'ordre à l'intérieur d'un casier (tri stable).
   Conteneur attendu : <div class="anim" data-anim="tri-base"></div>             */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="tri-base"]');
  if (!root) return;

  const N = 14, CHIFFRES = ['unités', 'dizaines', 'centaines'];
  root.innerHTML = `
<div class="tb-scene"></div>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="pas">Étape suivante</button>
  <button type="button" class="sec" data-k="tout">Tout jouer</button>
  <button type="button" class="sec" data-k="neuf">Nouveaux nombres</button>
</div>`;

  const $ = s => root.querySelector(s);
  const scene = $('.tb-scene'), info = $('.anim-info'), btnPas = $('[data-k="pas"]'), btnTout = $('[data-k="tout"]');
  let cartes, liste, casiers, passe, phase, timer = 0, geo;

  function nouveaux() {
    clearInterval(timer); timer = 0; btnTout.textContent = 'Tout jouer';
    const vals = new Set(); while (vals.size < N) vals.add(100 + Math.floor(Math.random() * 900));
    scene.innerHTML = '<div class="tb-casiers">' + Array.from({ length: 10 }, (_, k) => `<div class="tb-casier"><span>${k}</span></div>`).join('') + '</div>';
    cartes = [...vals].map(v => { const e = document.createElement('div'); e.className = 'tb-carte'; e.dataset.v = v; scene.appendChild(e); return { v, e }; });
    liste = cartes.slice(); casiers = null; passe = 0; phase = 'liste';
    btnPas.disabled = false;
    info.innerHTML = 'Quatorze nombres de trois chiffres, dans le désordre. Première étape : les distribuer selon leur chiffre des <b>unités</b>.';
    mesurer(); placer();
  }
  const chiffre = (v, p) => Math.floor(v / 10 ** p) % 10;
  function etiquette(c) {
    const s = String(c.v);
    const actif = phase !== 'fini' ? 2 - passe : -1;
    c.e.innerHTML = [...s].map((ch, i) => i === actif ? `<b>${ch}</b>` : ch).join('');
  }
  function mesurer() {
    const w = scene.clientWidth || 600, cw = Math.min(54, (w - 8) / 7.2), ch = 26;
    const parLigne = Math.max(1, Math.floor((w + 4) / (cw + 4)));
    const lignes = Math.ceil(N / parLigne);
    const hautListe = lignes * (ch + 4) + 10, casierW = w / 10;
    geo = { w, cw, ch, parLigne, hautListe, casierW, casierY: hautListe + 22 };
    const hautCasiers = 7 * (ch + 3) + 26;
    scene.style.height = (geo.casierY + hautCasiers) + 'px';
    const cas = scene.querySelector('.tb-casiers'); cas.style.top = geo.casierY + 'px'; cas.style.height = hautCasiers + 'px';
    cartes.forEach(c => { c.e.style.width = Math.min(cw, casierW - 4) + 'px'; c.e.style.height = ch + 'px'; });
  }
  function placer() {
    cartes.forEach(etiquette);
    if (casiers) {
      casiers.forEach((cas, k) => cas.forEach((c, r) => {
        const x = k * geo.casierW + (geo.casierW - Math.min(geo.cw, geo.casierW - 4)) / 2, y = geo.casierY + 22 + r * (geo.ch + 3);
        c.e.style.transform = `translate(${x}px, ${y}px)`;
      }));
    } else {
      const largeur = Math.min(geo.parLigne, N) * (geo.cw + 4) - 4, x0 = (geo.w - largeur) / 2;
      liste.forEach((c, i) => {
        const x = x0 + (i % geo.parLigne) * (geo.cw + 4), y = 4 + Math.floor(i / geo.parLigne) * (geo.ch + 4);
        c.e.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
    cartes.forEach(c => c.e.classList.toggle('tb-trie', phase === 'fini'));
  }
  function pas() {
    if (phase === 'fini') return false;
    if (phase === 'liste') {                         // distribuer
      casiers = Array.from({ length: 10 }, () => []);
      for (const c of liste) casiers[chiffre(c.v, passe)].push(c);
      phase = 'casiers';
      info.innerHTML = `Distribution selon le chiffre des <b>${CHIFFRES[passe]}</b> : chaque carte va dans le casier de ce chiffre, à la suite de celles qui y sont déjà.`;
    } else {                                         // rassembler
      liste = casiers.flat(); casiers = null; passe++;
      if (passe === 3) {
        phase = 'fini'; btnPas.disabled = true;
        info.innerHTML = 'Rassemblement : la liste est triée, <b>sans une seule comparaison</b> entre deux nombres. Trois passages de quatorze cartes ont suffi.';
      } else {
        phase = 'liste';
        info.innerHTML = `Rassemblement, casier 0 d'abord, sans changer l'ordre à l'intérieur d'un casier : la liste est maintenant triée selon ses ${passe === 1 ? '<b>unités</b>' : '<b>deux derniers chiffres</b>'}. Prochaine distribution : les <b>${CHIFFRES[passe]}</b>.`;
      }
    }
    placer();
    return phase !== 'fini';
  }
  btnPas.addEventListener('click', () => { clearInterval(timer); timer = 0; btnTout.textContent = 'Tout jouer'; pas(); });
  btnTout.addEventListener('click', () => {
    if (timer) { clearInterval(timer); timer = 0; btnTout.textContent = 'Tout jouer'; return; }
    if (phase === 'fini') nouveaux();
    btnTout.textContent = 'Pause';
    timer = setInterval(() => { if (!pas()) { clearInterval(timer); timer = 0; btnTout.textContent = 'Tout jouer'; } }, 1500);
  });
  $('[data-k="neuf"]').addEventListener('click', nouveaux);
  window.addEventListener('resize', () => { mesurer(); placer(); });
  nouveaux();
})();
