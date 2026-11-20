/* Annonce de fin de partie, commune à tous les jeux des pages.
   finPartie(cible, { type, titre, texte, rejouer, duree })
     cible   : l'élément au-dessus duquel s'affiche l'annonce (plateau, grille…)
     type    : 'victoire' (confettis), 'defaite' (secousse), 'nul', 'bloque'
     rejouer : fonction appelée par le bouton « Rejouer » (facultatif)
     duree   : en ms, ferme l'annonce automatiquement (facultatif)
   finPartie.effacer(element) retire les annonces du widget qui contient l'élément.
   Un clic sur l'annonce la ferme : le plateau final reste visible dessous.       */
(function () {
  'use strict';
  if (window.finPartie) return;
  const ICONES = { victoire: '🏆', defaite: '✗', nul: '=', bloque: '!' };
  const COUL = ['#F59E0B', '#22C55E', '#3B82F6', '#EC4899', '#A855F7', '#EF4444', '#14B8A6'];
  const calme = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function hote(el) { const r = el.closest('.anim') || el.parentElement; if (getComputedStyle(r).position === 'static') r.style.position = 'relative'; return r; }

  function effacer(el) {
    const r = el && (el.closest('.anim') || el);
    if (r) r.querySelectorAll('.fp-annonce, .fp-confetti').forEach(x => x.remove());
  }

  function finPartie(cible, o) {
    if (!cible) return;
    o = o || {};
    const r = hote(cible), type = o.type || 'victoire';
    effacer(r);
    const rc = cible.getBoundingClientRect(), rr = r.getBoundingClientRect();
    const cx = rc.left - rr.left + rc.width / 2, cy = rc.top - rr.top + rc.height / 2;
    const a = document.createElement('div');
    a.className = `fp-annonce fp-${type}`;
    a.setAttribute('role', 'status');
    a.style.left = cx + 'px'; a.style.top = cy + 'px';
    a.innerHTML = `<div class="fp-icone">${ICONES[type] || ''}</div><div class="fp-titre">${o.titre || ''}</div>` +
      (o.texte ? `<div class="fp-texte">${o.texte}</div>` : '') +
      `<div class="fp-actions">${o.rejouer ? '<button type="button" class="fp-rejouer">Rejouer</button>' : ''}<button type="button" class="fp-fermer sec">${o.rejouer ? 'Voir le plateau' : 'Fermer'}</button></div>`;
    r.appendChild(a);
    const fermer = () => { a.classList.add('fp-sort'); setTimeout(() => a.remove(), 250); };
    a.addEventListener('click', e => { if (e.target.closest('.fp-rejouer')) { a.remove(); o.rejouer(); } else fermer(); });
    if (o.duree) setTimeout(() => a.isConnected && fermer(), o.duree);
    if (type === 'defaite' && !calme()) { cible.classList.remove('fp-secousse'); void cible.offsetWidth; cible.classList.add('fp-secousse'); }
    if (type === 'victoire' && !calme() && a.animate) {
      for (let k = 0; k < 70; k++) {
        const p = document.createElement('span');
        p.className = 'fp-confetti';
        p.style.left = cx + 'px'; p.style.top = cy + 'px';
        p.style.background = COUL[k % COUL.length];
        if (k % 3 === 0) p.style.borderRadius = '50%';
        r.appendChild(p);
        const ang = Math.random() * 2 * Math.PI, v = 90 + Math.random() * 190, dx = Math.cos(ang) * v, dy = Math.sin(ang) * v - 60;
        p.animate([
          { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)', opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random() * 540}deg) scale(1)`, opacity: 1, offset: 0.55 },
          { transform: `translate(calc(-50% + ${dx * 1.2}px), calc(-50% + ${dy + 160}px)) rotate(${Math.random() * 900}deg) scale(0.6)`, opacity: 0 }
        ], { duration: 1300 + Math.random() * 900, easing: 'cubic-bezier(.15,.7,.3,1)' }).onfinish = () => p.remove();
      }
    }
  }
  finPartie.effacer = effacer;
  window.finPartie = finPartie;
})();
