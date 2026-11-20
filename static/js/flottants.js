/* Les nombres à virgule flottante.
   data-anim="droite-flottants" : tous les nombres positifs d'un format jouet,
     1,f × 2^e avec t chiffres binaires après la virgule, placés sur une droite.
     Chaque intervalle [2^e, 2^(e+1)] en contient autant, de plus en plus espacés.
     On peut placer un nombre et voir le flottant le plus proche.
   data-anim="ieee754" : le mot de 64 (ou 32) bits d'un nombre en double (ou
     simple) précision, bit par bit, avec la valeur exacte réellement stockée.   */
(function () {
  'use strict';
  const fmt = x => x.toLocaleString('fr-FR', { maximumFractionDigits: 6 });

  // ------------------------------------------------------------ format jouet
  document.querySelectorAll('.anim[data-anim="droite-flottants"]').forEach(root => {
    root.innerHTML = `
<canvas class="anim-scene df-toile" role="img" aria-label="Les nombres d'un petit format flottant placés sur une droite"></canvas>
<p class="df-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Chiffres après la virgule <select data-k="t"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option></select></label>
  <label>Exposants de −2 à <select data-k="e"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></label>
  <label>Placer x = <input type="number" data-k="x" value="2.7" step="0.1" min="0"></label>
  <label><input type="checkbox" data-k="log"> échelle logarithmique</label>
</div>`;
    const $ = s => root.querySelector(s);
    const cv = $('canvas'), info = $('.df-info');
    let dim;
    const EMIN = -2;
    function nombres() {
      const t = +$('[data-k="t"]').value, emax = +$('[data-k="e"]').value, L = [];
      for (let e = EMIN; e <= emax; e++) for (let f = 0; f < 2 ** t; f++) L.push({ v: (1 + f / 2 ** t) * 2 ** e, e, f });
      L.push({ v: 2 ** (emax + 1), e: emax + 1, f: 0, horsFormat: true });
      return { L, t, emax };
    }
    function fit() {
      const dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, h = 190;
      cv.style.height = h + 'px'; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      cv.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); dim = { w, h }; dessiner();
    }
    const COUL = ['#2563EB', '#DB2777', '#0D9488', '#D97706', '#7C3AED', '#0891B2'];
    const FOND = ['#EFF6FF', '#FDF2F8', '#F0FDFA', '#FFFBEB', '#F5F3FF', '#ECFEFF'];
    function bulle(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
    function dessiner() {
      if (!dim) return;
      const { L, t, emax } = nombres(), log = $('[data-k="log"]').checked, g = cv.getContext('2d'), { w, h } = dim;
      const vmin = 2 ** EMIN, vmax = 2 ** (emax + 1), G = 18, D = 18, Y = 92;
      const X = log ? v => G + (w - G - D) * (Math.log2(v) - Math.log2(vmin)) / (Math.log2(vmax) - Math.log2(vmin)) : v => G + (w - G - D) * v / vmax;
      g.clearRect(0, 0, w, h);
      g.font = '12px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      // bandes [2^e, 2^(e+1)[ : fond, intitulé, écart entre voisins
      for (let e = EMIN; e <= emax; e++) {
        const x1 = X(2 ** e), x2 = X(2 ** (e + 1)), c = COUL[(e - EMIN) % COUL.length];
        g.fillStyle = FOND[(e - EMIN) % FOND.length]; bulle(g, x1 + 1, Y - 30, x2 - x1 - 2, 60, 8); g.fill();
        g.fillStyle = c; g.font = '600 12px system-ui, sans-serif';
        if (x2 - x1 > 34) g.fillText(`[${fmt(2 ** e)} ; ${fmt(2 ** (e + 1))}[`, (x1 + x2) / 2, Y - 40);
        // accolade de l'écart entre deux voisins
        const pas = 2 ** (e - t), a1 = X(2 ** e), a2 = X(2 ** e + pas);
        if (a2 - a1 > 14) {
          g.strokeStyle = c; g.lineWidth = 1.2; g.beginPath(); g.moveTo(a1, Y + 22); g.lineTo(a1, Y + 26); g.lineTo(a2, Y + 26); g.lineTo(a2, Y + 22); g.stroke();
          if (a2 - a1 > 26) { g.font = '11px system-ui, sans-serif'; g.fillText(fmt(pas), (a1 + a2) / 2, Y + 39); }
        }
      }
      // l'axe
      g.strokeStyle = '#94a3b8'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(G - 8, Y); g.lineTo(w - D + 8, Y); g.stroke();
      if (!log) { g.fillStyle = '#64748b'; g.font = '12px system-ui, sans-serif'; if (X(vmin) - X(0) > 22) g.fillText('0', X(0), Y + 58); g.beginPath(); g.moveTo(X(0), Y - 6); g.lineTo(X(0), Y + 6); g.stroke(); }
      // les flottants : des points, plus gros pour les puissances de 2
      for (const p of L) {
        const x = X(p.v), c = p.horsFormat ? '#cbd5e1' : COUL[(p.e - EMIN) % COUL.length];
        g.fillStyle = '#fff'; g.strokeStyle = c; g.lineWidth = 2;
        g.beginPath(); g.arc(x, Y, p.f === 0 ? 5.5 : 3.6, 0, 7); g.fill(); g.stroke();
        if (p.f === 0) { g.fillStyle = c; g.beginPath(); g.arc(x, Y, 2.5, 0, 7); g.fill(); }
        if (p.f === 0 && !p.horsFormat && (x - X(p.v / 2) > 30 || (p.e === EMIN && X(2 * p.v) - x > 30))) { g.fillStyle = '#334155'; g.font = '12px system-ui, sans-serif'; g.fillText(fmt(p.v), x, Y + 58); }
      }
      // le nombre placé et son flottant le plus proche
      const x = Math.max(0, +$('[data-k="x"]').value || 0);
      const vals = L.filter(p => !p.horsFormat).map(p => p.v);
      let msgX = '';
      if (x > 0 && x < vmax) {
        let best = vals[0]; for (const v of vals) if (Math.abs(v - x) < Math.abs(best - x)) best = v;
        if (x < vmin) best = vmin;
        const xx = X(x), xb = X(best);
        g.strokeStyle = '#D97706'; g.lineWidth = 1.5; g.setLineDash([4, 3]); g.beginPath(); g.moveTo(xx, Y - 62); g.lineTo(xx, Y - 8); g.stroke(); g.setLineDash([]);
        g.fillStyle = '#D97706'; bulle(g, xx - 22, Y - 80, 44, 18, 9); g.fill();
        g.fillStyle = '#fff'; g.font = '600 11px system-ui, sans-serif'; g.fillText('x = ' + fmt(x), xx, Y - 67);
        g.strokeStyle = '#D97706'; g.lineWidth = 3; g.beginPath(); g.arc(xb, Y, 9, 0, 7); g.stroke();
        if (Math.abs(xb - xx) > 3) { g.lineWidth = 2; g.beginPath(); g.moveTo(xx, Y - 8); g.quadraticCurveTo((xx + xb) / 2, Y - 22, xb, Y - 10); g.stroke(); }
        const p = L.find(q => q.v === best), mant = '1,' + p.f.toString(2).padStart(t, '0');
        msgX = ` Le nombre ${fmt(x)} n'existe pas dans ce format&nbsp;: il est arrondi au plus proche, <b>${fmt(best)}</b> = ${mant} × 2${sup(p.e)} (en binaire), avec une erreur de ${fmt(Math.abs(best - x))}.`;
        if (best === x) msgX = ` Le nombre ${fmt(x)} = ${mant} × 2${sup(p.e)} est exactement représentable.`;
      } else if (x >= vmax) msgX = ` Le nombre ${fmt(x)} dépasse le plus grand nombre du format&nbsp;: c'est un dépassement de capacité.`;
      const nb = vals.length;
      info.innerHTML = `${nb} nombres positifs, de la forme 1,${'f'.repeat(t)} × 2<sup>e</sup>. Chaque intervalle [2<sup>e</sup>&nbsp;; 2<sup>e+1</sup>[ en contient ${2 ** t}, régulièrement espacés de 2<sup>e−${t}</sup> (l'accolade sous chaque intervalle)&nbsp;: l'écart double d'un intervalle au suivant. L'<b>erreur relative</b> d'arrondi reste donc à peu près la même partout.` + msgX;
    }
    const sup = e => String.fromCharCode(...String(e).split('').map(c => c === '-' ? 0x207B : [0x2070, 0xB9, 0xB2, 0xB3, 0x2074, 0x2075, 0x2076, 0x2077, 0x2078, 0x2079][+c]));
    root.querySelectorAll('select, input').forEach(x => x.addEventListener(x.type === 'number' ? 'input' : 'change', dessiner));
    window.addEventListener('resize', fit);
    fit();
  });

  // ------------------------------------------------------------ IEEE 754
  document.querySelectorAll('.anim[data-anim="ieee754"]').forEach(root => {
    root.innerHTML = `
<div class="anim-ctrl">
  <label>Nombre <input type="text" data-k="x" value="0.1" size="16" spellcheck="false"></label>
  <label>Format <select data-k="f"><option value="64">double précision (64 bits)</option><option value="32">simple précision (32 bits)</option></select></label>
  <button type="button" class="sec" data-k="prec">flottant précédent</button>
  <button type="button" class="sec" data-k="suiv">flottant suivant</button>
</div>
<div class="ie-mot"></div>
<p class="ie-astuce">Cliquer sur un bit pour le changer.</p>
<div class="ie-detail" aria-live="polite"></div>`;
    const $ = s => root.querySelector(s);
    const inX = $('[data-k="x"]'), selF = $('[data-k="f"]'), motEl = $('.ie-mot'), det = $('.ie-detail');
    let bits = 0n, tape = '0.1';
    const F = () => +selF.value === 64 ? { n: 64, e: 11, m: 52, biais: 1023 } : { n: 32, e: 8, m: 23, biais: 127 };

    function depuisNombre(x) {
      const f = F(), dv = new DataView(new ArrayBuffer(8));
      if (f.n === 64) { dv.setFloat64(0, x); return dv.getBigUint64(0); }
      dv.setFloat32(0, x); return BigInt(dv.getUint32(0));
    }
    function versNombre(b) {
      const f = F(), dv = new DataView(new ArrayBuffer(8));
      if (f.n === 64) { dv.setBigUint64(0, b); return dv.getFloat64(0); }
      dv.setUint32(0, Number(b)); return dv.getFloat32(0);
    }
    // valeur exacte d'un mot : (−1)^s × M × 2^E, écrite en décimal sans aucun arrondi
    function exact(b) {
      const f = F(), s = (b >> BigInt(f.n - 1)) & 1n, E = Number((b >> BigInt(f.m)) & ((1n << BigInt(f.e)) - 1n)), frac = b & ((1n << BigInt(f.m)) - 1n);
      if (E === 2 ** f.e - 1) return null;
      let M = E === 0 ? frac : frac | (1n << BigInt(f.m)), p = (E === 0 ? 1 : E) - f.biais - f.m;
      let txt;
      if (M === 0n) txt = '0';
      else if (p >= 0) txt = (M << BigInt(p)).toString();
      else {
        const q = -p, num = (M * 5n ** BigInt(q)).toString().padStart(q + 1, '0');
        txt = (num.slice(0, num.length - q) + ',' + num.slice(num.length - q)).replace(/0+$/, '').replace(/,$/, '');
      }
      return { s, txt: (s ? '−' : '') + txt, M, p };
    }
    function grouper(t) {                           // espaces fines tous les trois chiffres de la partie entière
      const [ent, dec] = t.replace('−', '').split(',');
      return (t.startsWith('−') ? '−' : '') + ent.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (dec !== undefined ? ',' + dec : '');
    }
    const sci = v => v.toExponential(3).replace('.', ',').replace(/e([+-]\d+)/, (_, k) => ` × 10<sup>${(+k).toString().replace('-', '−')}</sup>`);
    const moins = v => String(v).replace('-', '−');
    function dessiner() {
      const f = F();
      const s = Number((bits >> BigInt(f.n - 1)) & 1n), E = Number((bits >> BigInt(f.m)) & ((1n << BigInt(f.e)) - 1n)), frac = bits & ((1n << BigInt(f.m)) - 1n);
      const fracBin = frac.toString(2).padStart(f.m, '0'), x = versNombre(bits), special = E === 2 ** f.e - 1;
      const e = E === 0 ? 1 - f.biais : E - f.biais, cache = E === 0 ? '0' : '1', mant = `${cache},${fracBin.replace(/0+$/, '') || '0'}`;
      const cases = (k1, k0, zone) => { let h = ''; for (let k = k1; k >= k0; k--) { const v = (bits >> BigInt(k)) & 1n; h += `<button type="button" class="ie-b ie-${zone}${v ? ' ie-1' : ''}" data-b="${k}" title="bit ${k}">${v}</button>`; } return h; };
      motEl.innerHTML =
        `<div class="ie-champ ie-cs"><div class="ie-tete">signe</div><div class="ie-bits">${cases(f.n - 1, f.n - 1, 's')}</div><div class="ie-pied">${s ? '−' : '+'}</div></div>` +
        `<div class="ie-champ ie-ce"><div class="ie-tete">exposant · ${f.e} bits</div><div class="ie-bits">${cases(f.n - 2, f.m, 'e')}</div><div class="ie-pied">${special ? 'valeur spéciale' : E === 0 ? `0 → e = ${moins(e)}` : `${E} − ${f.biais} = <b>${moins(e)}</b>`}</div></div>` +
        `<div class="ie-champ ie-cm"><div class="ie-tete">mantisse · ${f.m} bits</div><div class="ie-bits">${cases(f.m - 1, 0, 'm')}</div><div class="ie-pied">${special ? '' : `${cache}, suivi de ces bits`}</div></div>`;
      if (special) {
        det.innerHTML = `<div class="ie-carte ie-formule-carte">${frac === 0n ? `<span class="ie-gros">${s ? '−' : '+'}∞</span> L'exposant n'a que des 1 et la mantisse est nulle&nbsp;: c'est l'infini, résultat d'un dépassement de capacité ou d'une division par zéro.` : `<span class="ie-gros">NaN</span> L'exposant n'a que des 1 et la mantisse n'est pas nulle&nbsp;: <i>not a number</i>, le résultat d'une opération impossible comme ∞ − ∞.`}</div>`;
        return;
      }
      let h = `<div class="ie-carte ie-formule-carte"><span class="ie-fs">${s ? '−' : '+'}</span><span class="ie-fm">${mant}</span><sub>2</sub> × 2<sup class="ie-fe">${moins(e)}</sup>` +
        (E === 0 && frac !== 0n ? `<span class="ie-note">nombre dénormalisé&nbsp;: pas de bit caché</span>` : '') + `</div>`;
      const ex = exact(bits);
      h += `<div class="ie-carte"><div class="ie-titre">Valeur exacte stockée</div><div class="ie-exact">${grouper(ex.txt)}</div>`;
      const t = tape.trim().replace(',', '.');
      const m = t.match(/^-?(\d*)(?:\.(\d*))?(?:e([+-]?\d+))?$/i);
      if (m && (m[1] || m[2]) && depuisNombre(parseFloat(t)) === bits && x !== 0) {
        const D = BigInt((m[1] || '') + (m[2] || '') || '0'), k = (m[2] || '').length - (+m[3] || 0);
        let n1 = D, d1 = 1n; if (k >= 0) d1 = 10n ** BigInt(k); else n1 = D * 10n ** BigInt(-k);
        let n2 = ex.M, d2 = 1n; if (ex.p >= 0) n2 = ex.M << BigInt(ex.p); else d2 = 1n << BigInt(-ex.p);
        const aff = t.replace('.', ',');
        h += n1 * d2 === n2 * d1 ? `<p class="ie-verdict ie-ok">${aff} est <b>exactement représentable</b>&nbsp;: c'est une somme de puissances de 2 qui tient dans la mantisse.</p>`
          : `<p class="ie-verdict ie-ko">${aff} n'a pas d'écriture binaire finie assez courte&nbsp;: c'est le flottant le plus proche qui est stocké. Python l'affiche <code>${String(x)}</code>, la plus courte écriture décimale qui redonne ce flottant.</p>`;
      }
      h += `</div>`;
      if (E < 2 ** f.e - 2 || frac < (1n << BigInt(f.m)) - 1n) {
        const ulp = Math.abs(versNombre(bits + 1n) - x);
        h += `<div class="ie-carte ie-ecart"><div class="ie-titre">Écart avec le flottant suivant</div>2<sup>${moins(e - f.m)}</sup> ≈ ${sci(ulp)}` + (x !== 0 ? `<span class="ie-note">soit environ ${sci(ulp / Math.abs(x)).replace(/,\d+/, '')} en valeur relative</span>` : '') + `</div>`;
      }
      det.innerHTML = h;
    }
    function depuisSaisie() {
      tape = inX.value;
      const t = tape.trim().replace(',', '.').toLowerCase();
      const x = t === 'inf' || t === '∞' ? Infinity : t === '-inf' ? -Infinity : t === 'nan' ? NaN : parseFloat(t);
      bits = depuisNombre(isNaN(x) && t !== 'nan' ? 0 : x);
      dessiner();
    }
    motEl.addEventListener('click', e => { const b = e.target.closest('[data-b]'); if (!b) return; bits ^= 1n << BigInt(b.dataset.b); tape = ''; inX.value = String(versNombre(bits)); dessiner(); });
    inX.addEventListener('change', depuisSaisie);
    selF.addEventListener('change', depuisSaisie);
    $('[data-k="suiv"]').addEventListener('click', () => { const x = versNombre(bits); bits = x < 0 ? bits - 1n : bits + 1n; if (Object.is(x, -0)) bits = depuisNombre(0) + 1n; tape = ''; inX.value = String(versNombre(bits)); dessiner(); });
    $('[data-k="prec"]').addEventListener('click', () => { const x = versNombre(bits); bits = x > 0 ? bits - 1n : x === 0 ? (1n << BigInt(F().n - 1)) + 1n : bits + 1n; tape = ''; inX.value = String(versNombre(bits)); dessiner(); });
    depuisSaisie();
  });
})();
