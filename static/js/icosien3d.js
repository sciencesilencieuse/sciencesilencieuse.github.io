/* Le jeu icosien de Hamilton (1857) : passer une et une seule fois par chacune
   des vingt villes, en suivant les routes, et revenir au point de départ.
   Les villes portent les consonnes de Hamilton (B, C, D… Z). Le plateau plan de
   Hamilton n'est autre que le dodécaèdre vu en perspective à travers une face :
   un bouton le « gonfle » en vrai dodécaèdre, et inversement.
   Version three.js du programme VPython cheminhamiltonien.py.
   Conteneur attendu : <div class="anim" data-anim="icosien"></div>              */
import { THREE, creerScene } from './scene3d.js';

const DONNEES = {"B":[[11.0,11.0],[0.61803,0.85065,-1.37638],"CGM"],"C":[[9.0,11.0],[-0.61803,0.85065,-1.37638],"BDK"],"D":[[8.0,8.0],[-1.0,-0.32492,-1.37638],"FHC"],"F":[[10.0,6.0],[-0.0,-1.05146,-1.37638],"DGR"],"G":[[12.0,8.0],[1.0,-0.32492,-1.37638],"FBP"],"H":[[4.0,6.0],[-1.61803,-0.52573,-0.32492],"SDJ"],"J":[[4.0,10.0],[-1.61803,0.52573,0.32492],"HKX"],"K":[[6.0,13.0],[-1.0,1.37638,-0.32492],"CJL"],"L":[[10.0,15.0],[0.0,1.7013,0.32492],"WKM"],"M":[[15.0,13.0],[1.0,1.37638,-0.32492],"BLN"],"N":[[16.0,10.0],[1.61803,0.52573,0.32492],"ZPM"],"P":[[16.0,6.0],[1.61803,-0.52573,-0.32492],"QGN"],"Q":[[14.0,3.0],[1.0,-1.37638,0.32492],"VPR"],"R":[[10.0,2.0],[-0.0,-1.7013,-0.32492],"QFS"],"S":[[6.0,3.0],[-1.0,-1.37638,0.32492],"THR"],"T":[[4.0,0.0],[-0.61803,-0.85065,1.37638],"XVS"],"V":[[16.0,0.0],[0.61803,-0.85065,1.37638],"TZQ"],"W":[[10.0,20.0],[0.0,1.05146,1.37638],"XLZ"],"X":[[0.0,12.0],[-1.0,0.32492,1.37638],"TJW"],"Z":[[20.0,12.0],[1.0,0.32492,1.37638],"NVW"]};   // lettre : [position sur le plateau, position sur le dodécaèdre, voisins]

document.querySelectorAll('.anim[data-anim="icosien"]').forEach(init);

function init(root) {
  root.innerHTML = `
<div class="scene3d"></div>
<p class="ic-chemin" aria-live="polite"></p>
<p class="anim-info" aria-live="polite"></p>
<div class="anim-ctrl">
  <button type="button" data-k="forme">Gonfler en dodécaèdre</button>
  <button type="button" class="sec" data-k="annuler">Annuler le dernier coup</button>
  <button type="button" class="sec" data-k="reset">Recommencer</button>
  <button type="button" class="sec" data-k="defi">Défi : 5 villes imposées</button>
  <button type="button" class="sec" data-k="aide">Compléter (retour arrière)</button>
</div>`;
  const $ = s => root.querySelector(s);
  const info = $('.anim-info'), outC = $('.ic-chemin'), btnForme = $('[data-k="forme"]');
  const S = creerScene($('.scene3d'), { ratio: window.innerWidth < 600 ? 0.95 : 0.72, hMax: 500,
    label: 'Vingt villes reliées par trente routes, sur un plateau plan ou sur un dodécaèdre ; on clique de ville en ville pour tracer un circuit' });
  if (!S) return;
  const { scene, camera, renderer } = S;
  const cv = renderer.domElement;

  const L = Object.keys(DONNEES);
  const VOIS = Object.fromEntries(L.map(l => [l, DONNEES[l][2].split('')]));
  const ECH = 0.205, C2 = [10, 8.8];                       // plateau : même taille apparente que la face avant
  const P2 = Object.fromEntries(L.map(l => [l, new THREE.Vector3((DONNEES[l][0][0] - C2[0]) * ECH, (DONNEES[l][0][1] - C2[1]) * ECH, 0)]));
  const P3 = Object.fromEntries(L.map(l => [l, new THREE.Vector3(...DONNEES[l][1])]));
  const ARETES = [];
  L.forEach(a => VOIS[a].forEach(b => { if (a < b) ARETES.push([a, b]); }));

  const groupe = new THREE.Group(); scene.add(groupe);
  const coulVille = new THREE.Color('#9CC3DE'), coulVue = new THREE.Color('#F59E0B'), coulDepart = new THREE.Color('#970E53');
  const villes = {}, etiquettes = {};
  const geoS = new THREE.SphereGeometry(0.12, 32, 16);
  for (const l of L) {
    const m = new THREE.Mesh(geoS, new THREE.MeshStandardMaterial({ color: coulVille.clone(), roughness: 0.35 }));
    m.userData.lettre = l; villes[l] = m; groupe.add(m);
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'); g.font = '600 40px system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = '#1e293b'; g.fillText(l, 32, 34);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }));
    sp.scale.set(0.2, 0.2, 1); etiquettes[l] = sp; groupe.add(sp);
  }
  const geoC = new THREE.CylinderGeometry(1, 1, 1, 12);
  const matRoute = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.6 });
  const matChemin = new THREE.MeshStandardMaterial({ color: 0xB45309, roughness: 0.4 });
  const routes = ARETES.map(([a, b]) => { const m = new THREE.Mesh(geoC, matRoute); m.userData = { a, b }; groupe.add(m); return m; });
  const chemins = [];                                          // tronçons du circuit

  // ---------------------------------------------------------------- géométrie : t = 0 plateau, t = 1 dodécaèdre
  let t = 0, cible = 0, anim = 0;
  const pos = l => P2[l].clone().lerp(P3[l], t);
  const Y = new THREE.Vector3(0, 1, 0);
  function poser(m, a, b, r) {
    const pa = pos(a), pb = pos(b), d = pb.clone().sub(pa), lg = d.length();
    m.position.copy(pa).addScaledVector(d, 0.5);
    m.quaternion.setFromUnitVectors(Y, d.normalize());
    m.scale.set(r, lg, r);
  }
  function geometrie() {
    groupe.rotation.set(0.38 * t, -0.62 * t, 0);              // en volume, on tourne un peu le solide pour montrer sa profondeur
    for (const l of L) {
      const p = pos(l); villes[l].position.copy(p);
      const dehors = p.clone().setZ(p.z * t); const n = dehors.length() || 1;
      etiquettes[l].position.copy(p).addScaledVector(dehors, 0.2 / n).add(new THREE.Vector3(0, 0, 0.12 * (1 - t)));
    }
    routes.forEach(m => poser(m, m.userData.a, m.userData.b, 0.022));
    chemins.forEach(m => poser(m, m.userData.a, m.userData.b, 0.05));
  }
  function morphe() {
    cancelAnimationFrame(anim);
    const t0 = performance.now(), depart = t;
    const f = now => {
      const u = Math.min(1, (now - t0) / 1400), e = u * u * (3 - 2 * u);
      t = depart + (cible - depart) * e; geometrie();
      if (u < 1) anim = requestAnimationFrame(f);
    };
    anim = requestAnimationFrame(f);
  }
  const boite = new THREE.Box3(new THREE.Vector3(-2.15, -1.85, -1.4), new THREE.Vector3(2.15, 2.4, 1.4));
  S.cadrer(boite, new THREE.Vector3(0, 0.2, 0), 0, 0);

  // ---------------------------------------------------------------- le jeu
  let chemin = [], fini = false;
  function colorer() {
    for (const l of L) {
      const m = villes[l];
      m.material.color.copy(l === chemin[0] ? coulDepart : chemin.includes(l) ? coulVue : coulVille);
      m.scale.setScalar(l === chemin[chemin.length - 1] && !fini ? 1.35 : 1);
    }
    chemins.forEach(m => groupe.remove(m)); chemins.length = 0;
    for (let i = 1; i < chemin.length; i++) { const m = new THREE.Mesh(geoC, matChemin); m.userData = { a: chemin[i - 1], b: chemin[i] }; groupe.add(m); chemins.push(m); }
    if (fini) { const m = new THREE.Mesh(geoC, matChemin); m.userData = { a: chemin[19], b: chemin[0] }; groupe.add(m); chemins.push(m); }
    geometrie();
    outC.innerHTML = chemin.length ? `Circuit : <b>${chemin.join(' → ')}${fini ? ' → ' + chemin[0] : ''}</b> · ${chemin.length} ville${chemin.length > 1 ? 's' : ''} sur 20` : '';
  }
  const libres = l => VOIS[l].filter(w => !chemin.includes(w));
  function bilan() {
    const der = chemin[chemin.length - 1];
    if (chemin.length === 20) {
      if (VOIS[der].includes(chemin[0])) { fini = true; info.innerHTML = '<b>Gagné : un cycle hamiltonien !</b> Chaque ville est visitée une fois, et la dernière est voisine de la première. Le dodécaèdre en compte trente.'; }
      else info.innerHTML = 'Les vingt villes sont visitées, mais la dernière n\'est pas voisine de la première : c\'est un <b>chemin</b> hamiltonien, pas un cycle. Annulez quelques coups pour boucler la boucle.';
    } else if (!libres(der).length) info.innerHTML = '<b>Bloqué</b> : toutes les villes voisines de ' + der + ' sont déjà visitées. Annulez des coups, ou demandez à l\'ordinateur de compléter s\'il le peut.';
    else info.innerHTML = `Prochaine ville : une voisine de <b>${der}</b> encore libre (${libres(der).join(', ')}).`;
  }
  function jouer(l) {
    if (fini) return;
    if (!chemin.length) { chemin = [l]; }
    else {
      const der = chemin[chemin.length - 1];
      if (!VOIS[der].includes(l)) { info.innerHTML = `${l} n'est pas reliée à ${der} par une route.`; return; }
      if (chemin.includes(l)) { info.innerHTML = `${l} est déjà visitée.`; return; }
      chemin.push(l);
    }
    colorer(); bilan();
  }
  function completer(ch) {                                     // retour arrière : cherche un cycle prolongeant ch
    let essais = 0;
    const vus = new Set(ch);
    function bt(c) {
      essais++;
      if (c.length === 20) return VOIS[c[19]].includes(c[0]) ? c.slice() : null;
      for (const w of VOIS[c[c.length - 1]]) if (!vus.has(w)) {
        vus.add(w); c.push(w);
        const r = bt(c); if (r) return r;
        c.pop(); vus.delete(w);
      }
      return null;
    }
    const r = bt(ch.slice());
    return { r, essais };
  }
  let lecture = 0;
  function aide() {
    clearInterval(lecture);
    if (fini) return;
    if (!chemin.length) chemin = ['B'];
    const { r, essais } = completer(chemin);
    if (!r) { info.innerHTML = `Aucun cycle hamiltonien ne prolonge ce début : l'ordinateur a exploré ${essais} débuts de chemin sans issue. Il faut revenir en arrière.`; colorer(); return; }
    const suite = r.slice(chemin.length);
    info.innerHTML = `Solution trouvée par retour arrière, après ${essais} essais.`;
    lecture = setInterval(() => { if (!suite.length) { clearInterval(lecture); bilan(); return; } chemin.push(suite.shift()); colorer(); }, 280);
  }
  function defi() {
    clearInterval(lecture); fini = false;
    chemin = [L[Math.floor(Math.random() * 20)]];               // cinq villes voisines de proche en proche
    while (chemin.length < 5) { const c = libres(chemin[chemin.length - 1]); chemin.push(c[Math.floor(Math.random() * c.length)]); }
    colorer();
    info.innerHTML = `Le défi de Hamilton : les cinq premières villes sont imposées (${chemin.join(', ')}). À vous de compléter le circuit… s'il existe.`;
  }

  // ---------------------------------------------------------------- clics
  const ray = new THREE.Raycaster(), souris = new THREE.Vector2();
  let x0 = 0, y0 = 0;
  cv.addEventListener('pointerdown', e => { x0 = e.clientX; y0 = e.clientY; });
  cv.addEventListener('pointerup', e => {
    if (Math.hypot(e.clientX - x0, e.clientY - y0) > 6) return;     // c'était une rotation
    const r = cv.getBoundingClientRect();
    souris.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
    ray.setFromCamera(souris, camera);
    const touche = ray.intersectObjects(Object.values(villes))[0];
    if (touche) { clearInterval(lecture); jouer(touche.object.userData.lettre); }
  });
  cv.style.cursor = 'pointer';

  btnForme.addEventListener('click', () => {
    cible = cible ? 0 : 1; morphe();
    Object.values(villes).forEach(m => { m.castShadow = cible === 1; });   // des ombres seulement pour le solide
    btnForme.textContent = cible ? 'Aplatir en plateau' : 'Gonfler en dodécaèdre';
  });
  $('[data-k="annuler"]').addEventListener('click', () => { clearInterval(lecture); if (fini) fini = false; else chemin.pop(); colorer(); if (chemin.length) bilan(); else info.textContent = 'Cliquez sur une ville pour choisir le départ.'; });
  $('[data-k="reset"]').addEventListener('click', () => { clearInterval(lecture); chemin = []; fini = false; colorer(); info.textContent = 'Cliquez sur une ville pour choisir le départ.'; });
  $('[data-k="defi"]').addEventListener('click', defi);
  $('[data-k="aide"]').addEventListener('click', aide);
  colorer(); info.textContent = 'Cliquez sur une ville pour choisir le départ, puis de ville voisine en ville voisine.';
}
