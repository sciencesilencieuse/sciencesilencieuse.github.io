/* Écrire en base 2.
   data-anim="bits"    : un mot de 8 ou 16 bits dont on bascule les bits d'un
                         clic ; valeur décimale, somme des puissances de 2 et
                         écriture hexadécimale (un chiffre par paquet de 4 bits).
   data-anim="couleur" : une couleur codée sur trois octets (rouge, vert, bleu),
                         en décimal, en binaire et en hexadécimal.               */
(function () {
  'use strict';
  const HEX = '0123456789ABCDEF';
  const fmt = x => x.toLocaleString('fr-FR');

  document.querySelectorAll('.anim[data-anim="bits"]').forEach(root => {
    root.innerHTML = `
<div class="bt-mot"></div>
<p class="bt-valeur" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Taille <select data-k="n"><option value="8">8 bits (un octet)</option><option value="16">16 bits</option></select></label>
  <label>Valeur <input type="number" data-k="v" min="0" step="1" value="45"></label>
  <button type="button" data-k="plus">+ 1</button>
  <button type="button" class="sec" data-k="g">× 2 (décaler à gauche)</button>
  <button type="button" class="sec" data-k="d">÷ 2 (décaler à droite)</button>
</div>`;
    const $ = s => root.querySelector(s);
    const mot = $('.bt-mot'), val = $('.bt-valeur'), selN = $('[data-k="n"]'), inV = $('[data-k="v"]');
    let n = 8, v = 45, note = '';

    function dessiner() {
      const max = 2 ** n;
      let h = '<div class="bt-poids">';
      for (let k = n - 1; k >= 0; k--) h += `<span>${2 ** k}</span>`;
      h += '</div><div class="bt-cases">';
      for (let k = n - 1; k >= 0; k--) h += `<button type="button" class="bt-bit${(v >> k) & 1 ? ' bt-un' : ''}${k % 4 === 0 && k ? ' bt-sep' : ''}" data-b="${k}" aria-label="bit de poids ${2 ** k}">${(v >> k) & 1}</button>`;
      h += '</div><div class="bt-hex">';
      for (let q = n / 4 - 1; q >= 0; q--) h += `<span>${HEX[(v >> (4 * q)) & 15]}</span>`;
      h += '</div>';
      mot.innerHTML = h;
      mot.style.setProperty('--n', n);
      const termes = []; for (let k = n - 1; k >= 0; k--) if ((v >> k) & 1) termes.push(2 ** k);
      val.innerHTML = `<b>${fmt(v)}</b> = ${termes.length ? termes.join(' + ') : '0'}` +
        `<span class="bt-ecr">binaire&nbsp;: <code>${v.toString(2).padStart(n, '0').replace(/(\d{4})(?=\d)/g, '$1 ')}</code> · hexadécimal&nbsp;: <code>${v.toString(16).toUpperCase().padStart(n / 4, '0')}</code> · de 0 à ${fmt(max - 1)} sur ${n} bits</span>` +
        (note ? `<span class="bt-note">${note}</span>` : '');
      inV.value = v; inV.max = max - 1;
      note = '';
    }
    mot.addEventListener('click', e => { const b = e.target.closest('[data-b]'); if (!b) return; v ^= 1 << +b.dataset.b; dessiner(); });
    selN.addEventListener('change', () => { n = +selN.value; v &= 2 ** n - 1; dessiner(); });
    inV.addEventListener('change', () => { const x = Math.floor(+inV.value || 0); v = ((x % 2 ** n) + 2 ** n) % 2 ** n; if (x !== v) note = `${fmt(x)} ne tient pas sur ${n} bits&nbsp;: seuls les ${n} derniers chiffres binaires sont gardés.`; dessiner(); });
    $('[data-k="plus"]').addEventListener('click', () => { v++; if (v === 2 ** n) { v = 0; note = `Dépassement&nbsp;: ${fmt(2 ** n - 1)} + 1 = ${fmt(2 ** n)} demanderait un ${n + 1}<sup>e</sup> bit. Il est perdu, et le compteur revient à 0, comme un compteur kilométrique.`; } dessiner(); });
    $('[data-k="g"]').addEventListener('click', () => { const perdu = (v >> (n - 1)) & 1; v = (v << 1) & (2 ** n - 1); note = perdu ? `Le bit de gauche est sorti du mot&nbsp;: le résultat n'est plus le double.` : `Décaler tous les bits d'un cran vers la gauche multiplie par 2, comme ajouter un zéro à droite multiplie par 10 en décimal.`; dessiner(); });
    $('[data-k="d"]').addEventListener('click', () => { const r = v & 1; v >>= 1; note = `Décaler vers la droite divise par 2 en jetant le dernier bit, qui était le reste (${r}).`; dessiner(); });
    dessiner();
  });

  document.querySelectorAll('.anim[data-anim="couleur"]').forEach(root => {
    const C = [['rouge', 'R', 255], ['vert', 'G', 128], ['bleu', 'B', 0]];
    root.innerHTML = `
<div class="cl-grille">
  <div class="cl-carre"></div>
  <div class="cl-canaux">${C.map(([nom, k, x]) => `<div class="cl-canal"><label>${nom} <input type="range" min="0" max="255" value="${x}" data-c="${k}"></label><code data-o="${k}"></code></div>`).join('')}</div>
</div>
<p class="cl-code"></p>
<div class="anim-ctrl"><label>Choisir une couleur <input type="color" data-k="pick" value="#ff8000"></label></div>`;
    const $ = s => root.querySelector(s);
    const hex2 = x => x.toString(16).toUpperCase().padStart(2, '0');
    function maj() {
      const v = C.map(([, k]) => +$(`[data-c="${k}"]`).value);
      C.forEach(([, k], i) => { $(`[data-o="${k}"]`).innerHTML = `${String(v[i]).padStart(3, ' ')} = <span>${v[i].toString(2).padStart(8, '0')}</span> = ${hex2(v[i])}`; });
      const code = '#' + v.map(hex2).join('');
      $('.cl-carre').style.background = code;
      $('.cl-code').innerHTML = `Code de la couleur&nbsp;: <code class="cl-hex"><span class="cl-r">${hex2(v[0])}</span><span class="cl-g">${hex2(v[1])}</span><span class="cl-b">${hex2(v[2])}</span></code>, trois octets écrits chacun avec deux chiffres hexadécimaux. Il y a $256^3$, soit ${fmt(256 ** 3)} couleurs possibles.`.replace('$256^3$', '256<sup>3</sup>');
      $('[data-k="pick"]').value = code.toLowerCase();
    }
    root.querySelectorAll('input[type="range"]').forEach(x => x.addEventListener('input', maj));
    $('[data-k="pick"]').addEventListener('input', e => { const h = e.target.value; C.forEach(([, k], i) => { $(`[data-c="${k}"]`).value = parseInt(h.slice(1 + 2 * i, 3 + 2 * i), 16); }); maj(); });
    maj();
  });
})();
