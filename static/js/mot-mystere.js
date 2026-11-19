/* Mot mystère (à la manière de Wordle) : trouver un mot de cinq lettres en six
   essais. Après chaque essai, chaque lettre est colorée : vert, bien placée ;
   jaune, présente ailleurs ; gris, absente. Le panneau suit l'incertitude
   restante (en bits) et classe les coups selon l'information qu'ils apportent
   en moyenne (entropie de la répartition des réponses possibles).
   Conteneur attendu : <div class="anim" data-anim="mot-mystere"></div>          */
(function () {
  'use strict';
  const root = document.querySelector('.anim[data-anim="mot-mystere"]');
  if (!root) return;

  const MOTS = 'acier adieu agent aider aimer album aller amour angle annee appel arbre atome autre avion bague balle bande barbe baton beton biere bijou bilan blanc blond boire boite bosse boule brave breve bruit cable cadre calme canal canot carre carte cause chair champ chant chaud chien choix chose cible cidre clair clown coeur comte conte corde corne corps coton coude coupe cours court crabe craie crane creme crime croix cuire cycle cygne danse datte debut delta digue diner doigt douze drame droit duvet echec ecole ecran effet eleve enfin ennui entre epice epine essai etage fable faute femme ferme fibre fiche fille final flanc fleur flute folie force foret forme fouet foule frais frere frite fruit fumee fusee gamme garde gazon gelee genou geste glace globe gomme gorge grade grain grand grave guepe guide hache hamac haute herbe heron heure hiver homme honte hotel huile ideal image index jambe jaune jeton jeudi jouer jouet juger juste kayak koala lacet laine lampe lance lapin large laser lever libre ligne linge liste litre livre local loger lotus loupe lourd lundi lutin lycee magie maire malle mardi marge masse match matin meche media melon merci merle metal metre mieux mince moine moins momie monde motif moule moyen mulet musee nager nappe navet neige neveu niche noble noeud noire notre noyau nuage nuque objet ocean odeur olive ombre oncle ongle opera orage ordre orgue ouest outil paire palme panda panne parti patte paume pause pavot peche peine pelle pente perdu perle peste petit phare photo piano piece piege pince piste pivot pixel pizza place plage plant plein pluie plume poche poele poete poids poing point poire pomme pompe porte poste pouce poule prise prune puits quart radio rampe rayon recit refus regle reine renne repas reste rever revue rhume riche robot roche roman ronde rosee rouge route ruban ruche rugby sable saint salle salon sapin sauce saule savon scene seize selle serre seuil signe singe sirop soeur somme sonde songe sorte souci soupe sourd sport stade stage stock store stylo sucre suite sujet table tache talon tango tante tapis tarte tasse taupe temps tente tenue terre texte theme tiede tigre tissu titre toile tombe tonne torse total totem trace train trait trame treve tribu trois tronc tuile usage usine vache vague valet valse veine venir vente verbe verre verte veste video ville virus vison vital vitre vivre vocal voile voler wagon yacht zebre'.split(' ');

  root.innerHTML = `
<div class="mm-grille">
  <div class="mm-plateau" role="img" aria-label="Grille des essais, lettres colorées selon la réponse"></div>
  <div class="mm-panneau">
    <p class="mm-incertitude"></p>
    <p class="mm-titre">Meilleurs coups maintenant <span>(information moyenne)</span></p>
    <ol class="mm-meilleurs"></ol>
    <p class="mm-restants"></p>
  </div>
</div>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <label>Essai <input type="text" data-k="essai" size="7" maxlength="5" spellcheck="false" autocomplete="off"></label>
  <button type="button" data-k="jouer">Proposer</button>
  <button type="button" class="sec" data-k="ordi">Coup de l'ordinateur</button>
  <button type="button" class="sec" data-k="seul">Résoudre seul</button>
  <button type="button" class="sec" data-k="neuf">Nouveau mot</button>
</div>`;

  const $ = s => root.querySelector(s);
  const plateau = $('.mm-plateau'), outI = $('.mm-incertitude'), outB = $('.mm-meilleurs'), outR = $('.mm-restants'), info = $('.anim-info');
  const inE = $('[data-k="essai"]');
  let secret, possibles, essais, fini, premierCoup = null;

  // motif : 2 = vert, 1 = jaune, 0 = gris (les lettres en double sont comptées correctement)
  function motif(essai, sol) {
    const r = [0, 0, 0, 0, 0], reste = {};
    for (let i = 0; i < 5; i++) if (essai[i] === sol[i]) r[i] = 2; else reste[sol[i]] = (reste[sol[i]] || 0) + 1;
    for (let i = 0; i < 5; i++) if (r[i] === 0 && reste[essai[i]]) { r[i] = 1; reste[essai[i]]--; }
    return r[0] + 3 * r[1] + 9 * r[2] + 27 * r[3] + 81 * r[4];
  }
  function entropie(essai, cand) {
    const compte = new Map();
    for (const s of cand) { const k = motif(essai, s); compte.set(k, (compte.get(k) || 0) + 1); }
    let H = 0; for (const c of compte.values()) { const p = c / cand.length; H -= p * Math.log2(p); }
    return H;
  }
  function classement(cand) {
    if (cand.length === MOTS.length && premierCoup) return premierCoup;
    const res = MOTS.map(w => ({ w, H: entropie(w, cand) + (cand.includes(w) ? 1e-3 : 0) }));
    res.sort((a, b) => b.H - a.H);
    const top = res.slice(0, 5);
    if (cand.length === MOTS.length) premierCoup = top;
    return top;
  }
  const bits = x => x.toFixed(2).replace('.', ',');

  function nouvelle() {
    secret = MOTS[Math.floor(Math.random() * MOTS.length)];
    possibles = MOTS.slice(); essais = []; fini = false;
    info.textContent = 'Un mot de cinq lettres a été choisi parmi les ' + MOTS.length + ' mots de la liste. À vous, ou à l\'ordinateur.';
    afficher();
  }
  function jouer(mot) {
    if (fini) return;
    mot = (mot || '').trim().toLowerCase();
    if (!MOTS.includes(mot)) { info.textContent = `« ${mot} » n'est pas dans la liste des mots acceptés.`; return; }
    const avant = possibles.length, attendu = entropie(mot, possibles), k = motif(mot, secret);
    possibles = possibles.filter(s => motif(mot, s) === k);
    const gain = Math.log2(avant / possibles.length);
    essais.push({ mot, k, gain, attendu, reste: possibles.length });
    if (mot === secret) { fini = true; info.innerHTML = `Trouvé en <b>${essais.length}</b> essai${essais.length > 1 ? 's' : ''}.`; }
    else if (essais.length >= 6) { fini = true; info.innerHTML = `Perdu : le mot était <b>${secret}</b>.`; }
    else info.innerHTML = `« ${mot} » : <b>${bits(gain)}</b> bits obtenus (${bits(attendu)} attendus en moyenne), il reste ${possibles.length} mot${possibles.length > 1 ? 's' : ''} possible${possibles.length > 1 ? 's' : ''}.`;
    inE.value = ''; afficher();
  }
  function afficher() {
    let html = '';
    for (let r = 0; r < 6; r++) {
      const e = essais[r];
      html += '<div class="mm-ligne">';
      for (let i = 0; i < 5; i++) {
        const c = e ? Math.floor(e.k / 3 ** i) % 3 : -1;
        html += `<span class="mm-case${c === 2 ? ' mm-v' : c === 1 ? ' mm-j' : c === 0 ? ' mm-g' : ''}">${e ? e.mot[i] : ''}</span>`;
      }
      html += e ? `<span class="mm-gain">${bits(e.gain)} bits</span>` : '';
      html += '</div>';
    }
    plateau.innerHTML = html;
    const H = Math.log2(possibles.length);
    outI.innerHTML = `Mots encore possibles : <b>${possibles.length}</b><br>Incertitude : <b>${bits(H)}</b> bits`;
    if (fini || possibles.length === 1) { outB.innerHTML = possibles.length === 1 && !fini ? `<li><b>${possibles[0]}</b> : c'est forcément lui</li>` : ''; }
    else outB.innerHTML = classement(possibles).map(x => `<li><b>${x.w}</b> ${bits(x.H)} bits</li>`).join('');
    outR.innerHTML = possibles.length <= 12 && !fini ? 'Restent : ' + possibles.join(', ') : '';
  }
  $('[data-k="jouer"]').addEventListener('click', () => jouer(inE.value));
  inE.addEventListener('keydown', e => { if (e.key === 'Enter') jouer(inE.value); });
  $('[data-k="ordi"]').addEventListener('click', () => { if (!fini) jouer(possibles.length === 1 ? possibles[0] : classement(possibles)[0].w); });
  $('[data-k="seul"]').addEventListener('click', () => {
    const f = () => { if (fini) return; jouer(possibles.length === 1 ? possibles[0] : classement(possibles)[0].w); setTimeout(f, 700); };
    f();
  });
  $('[data-k="neuf"]').addEventListener('click', nouvelle);
  nouvelle();
})();
