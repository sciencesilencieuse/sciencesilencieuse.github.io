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
  // Chaque intervalle [2^e ; 2^(e+1)[ est dessiné comme une règle de même longueur,
  // portant les 2^t nombres 1,f × 2^e ; en dessous, la vraie droite des réels, où
  // les mêmes règles se tassent vers 0 et s'étirent vers les grands nombres.
  document.querySelectorAll('.anim[data-anim="droite-flottants"]').forEach(root => {
    root.innerHTML = `
<div class="df-cadre"><svg class="df-svg" role="img" aria-label="Les nombres d'un petit format flottant : chaque intervalle entre deux puissances de 2 en contient autant"></svg></div>
<div class="df-lecture" aria-live="polite"></div>
<div class="anim-ctrl">
  <label>Chiffres après la virgule <select data-k="t"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></label>
  <label>Placer x = <input type="number" data-k="x" value="2.7" step="0.1" min="0"></label>
</div>`;
    const $ = s => root.querySelector(s);
    const svg = $('svg'), lect = $('.df-lecture');
    const COUL = ['#2563EB', '#DB2777', '#0D9488', '#D97706', '#7C3AED'], FOND = ['#EFF6FF', '#FDF2F8', '#F0FDFA', '#FFFBEB', '#F5F3FF'];
    const EMIN = -2, EMAX = 2;
    let choix = null;
    const supe = e => String(e).replace('-', '−');
    const binF = (f, t) => f.toString(2).padStart(t, '0');
    function dessiner() {
      const t = +$('[data-k="t"]').value, W = Math.max(340, Math.min(720, root.clientWidth || 640)), petit = W < 480;
      const G = petit ? 98 : 108, D = petit ? 10 : 74, L = W - G - D, RH = 26, GAP = 22, Y0 = 34;
      const nR = EMAX - EMIN + 1, yLigne = Y0 + nR * (RH + GAP) + 64, H = yLigne + 46;
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      const vmax = 2 ** (EMAX + 1), Xr = v => G + L * v / vmax;
      let h = `<text x="${G}" y="14" class="df-titre">chaque intervalle, agrandi</text>`;
      const tous = [];
      // l'intervalle actif : celui du point choisi ou du nombre x
      const xv = Math.max(0, +$('[data-k="x"]').value || 0);
      const eActif = choix ? choix.e : xv > 0 ? Math.max(EMIN, Math.min(EMAX, Math.floor(Math.log2(xv)))) : null;
      for (let e = EMIN; e <= EMAX; e++) {
        const r = e - EMIN, y = Y0 + r * (RH + GAP), c = COUL[r], pas = 2 ** (e - t);
        // projection de la règle sur la vraie droite
        if (e === eActif) h += `<polygon points="${G},${y + RH} ${G + L},${y + RH} ${Xr(2 ** (e + 1))},${yLigne - 6} ${Xr(2 ** e)},${yLigne - 6}" fill="${c}" stroke="${c}" class="df-proj"/>`;
        h += `<rect x="${G}" y="${y}" width="${L}" height="${RH}" rx="7" fill="${FOND[r]}" stroke="${c}" class="df-regle"/>`;
        h += `<text x="${G - 8}" y="${y + RH / 2 + 4}" class="df-int${petit ? ' df-petit' : ''}" fill="${c}">[${fmt(2 ** e)} ; ${fmt(2 ** (e + 1))}[</text>`;
        if (!petit) h += `<text x="${G + L + 8}" y="${y + RH / 2 + 4}" class="df-pas">écart ${fmt(pas)}</text>`;
        for (let f = 0; f < 2 ** t; f++) {
          const v = (1 + f / 2 ** t) * 2 ** e, x = G + L * f / 2 ** t, sel = choix && choix.e === e && choix.f === f;
          tous.push({ v, e, f, x, y });
          h += `<g class="df-pt${sel ? ' df-sel' : ''}" data-e="${e}" data-f="${f}"><circle cx="${x + (f === 0 ? 7 : 0)}" cy="${y + RH / 2}" r="${f === 0 ? 6 : 4.5}" fill="${f === 0 ? c : '#fff'}" stroke="${c}"/>` +
               `<text x="${x + (f === 0 ? 7 : 0)}" y="${y - 3}" class="df-val">${fmt(v)}</text></g>`;
        }
      }
      // la vraie droite
      h += `<text x="${G}" y="${yLigne - 46 + 12}" class="df-titre">la vraie droite des réels</text>`;
      h += `<line x1="${G - 6}" y1="${yLigne}" x2="${G + L + 6}" y2="${yLigne}" class="df-axe"/>`;
      for (const p of tous) { const r = p.e - EMIN; h += `<circle cx="${Xr(p.v)}" cy="${yLigne}" r="${p.f === 0 ? 4 : 2.6}" fill="${COUL[r]}"/>`; }
      for (const v of [0, 1, 2, 4, 8]) if (v <= vmax) h += `<line x1="${Xr(v)}" y1="${yLigne + 4}" x2="${Xr(v)}" y2="${yLigne + 10}" class="df-axe"/><text x="${Xr(v)}" y="${yLigne + 24}" class="df-grad">${fmt(v)}</text>`;
      // le nombre x et son arrondi
      const x = Math.max(0, +$('[data-k="x"]').value || 0);
      let lecture = '';
      if (x > 0 && x < vmax) {
        let best = tous[0]; for (const p of tous) if (Math.abs(p.v - x) < Math.abs(best.v - x)) best = p;
        if (Math.abs(vmax - x) < Math.abs(best.v - x)) best = null;              // le plus proche serait 2^(EMAX+1), hors format
        const xx = Xr(x);
        h += `<path d="M${xx} ${yLigne - 9}l-6 -10h12z" class="df-x"/><text x="${xx}" y="${yLigne - 23}" class="df-xt">x</text>`;
        if (best) {
          const r = best.e - EMIN, yb = Y0 + r * (RH + GAP) + RH / 2, xs = best.x + (best.f === 0 ? 7 : 0);
          h += `<circle cx="${xs}" cy="${yb}" r="10" class="df-arr"/><circle cx="${Xr(best.v)}" cy="${yLigne}" r="8" class="df-arr"/>`;
          // x placé sur sa règle
          const e = Math.floor(Math.log2(x));
          if (e >= EMIN && e <= EMAX) { const rr = e - EMIN, xr = G + L * (x / 2 ** e - 1), yr = Y0 + rr * (RH + GAP); h += `<path d="M${xr} ${yr + RH + 1}l-5 9h10z" class="df-x"/>`; }
          const err = Math.abs(best.v - x);
          lecture = `<span class="df-q">x = ${fmt(x)}</span> n'est pas dans le format&nbsp;: il est arrondi au plus proche, ` + carte(best, t) + (err ? ` <span class="df-err">erreur ${fmt(err)}, soit ${fmt(Math.round(err / x * 1000) / 10)}&nbsp;% de x</span>` : ' <span class="df-ok">exactement représentable</span>');
        }
      } else if (x >= vmax) lecture = `<span class="df-q">x = ${fmt(x)}</span> dépasse le plus grand nombre du format&nbsp;: c'est un dépassement de capacité.`;
      if (choix && !lecture) lecture = carte(choix, t);
      svg.innerHTML = h;
      lect.innerHTML = (lecture || `Cliquer sur un point pour lire son écriture.`) +
        `<p class="df-note">${(EMAX - EMIN + 1) * 2 ** t} nombres positifs, ${2 ** t} par intervalle. D'un intervalle au suivant, l'écart entre voisins double, mais l'<b>écart relatif</b> reste du même ordre&nbsp;: au plus 2<sup>−${t}</sup>, soit ${fmt(100 / 2 ** t)}&nbsp;%.</p>`;
    }
    function carte(p, t) {
      return `<span class="df-carte"><span class="df-m">1,${binF(p.f, t)}</span><sub>2</sub> × 2<sup class="df-e">${supe(p.e)}</sup> = <b>${fmt(p.v)}</b></span>`;
    }
    svg.addEventListener('click', e => { const g = e.target.closest('.df-pt'); if (!g) return; choix = { e: +g.dataset.e, f: +g.dataset.f }; choix.v = (1 + choix.f / 2 ** +$('[data-k="t"]').value) * 2 ** choix.e; $('[data-k="x"]').value = ''; dessiner(); });
    $('[data-k="t"]').addEventListener('change', () => { choix = null; dessiner(); });
    $('[data-k="x"]').addEventListener('input', () => { choix = null; dessiner(); });
    let larg = 0; window.addEventListener('resize', () => { if (Math.abs(root.clientWidth - larg) > 8) { larg = root.clientWidth; dessiner(); } });
    dessiner();
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
