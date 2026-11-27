/* Petit socle commun aux animations 3D (three.js) : rendu WebGL sur fond blanc,
   éclairage de studio (environnement + lumière principale qui porte les ombres),
   caméra cadrée automatiquement sur une boîte, rotation à la souris comme dans
   VPython (pas sur écran tactile, pour ne pas bloquer le défilement de la page),
   rendu suspendu quand la scène sort de l'écran.                               */
import * as THREE from './vendor/three.module.min.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

export { THREE };

/* « while cond : rate(r) ; corps » : au plus r passages par seconde, comme en VPython.
   attente() peut renvoyer une promesse (bouton Pause).                             */
let dernier = 0;
const image = () => new Promise(res => requestAnimationFrame(t => {
  const dt = dernier && t - dernier < 200 ? (t - dernier) / 1000 : 1 / 60;
  dernier = t; res(Math.min(dt, 0.05));
}));
export async function boucle(cond, r, corps, attente) {
  let credit = 0;
  while (cond()) {
    const p = attente && attente();
    if (p) await p;
    credit += r * await image();
    let k = Math.max(1, Math.floor(credit)); credit -= k;
    while (k-- > 0 && cond()) corps();
  }
}

export const couleur = c => new THREE.Color(`rgb(${c.join(',')})`);

/* hote : élément qui reçoit le canevas ; ratio : hauteur / largeur ; hMax : hauteur maximale ;
   manip : rotation ET zoom à la souris (molette) comme au doigt (un doigt glissé horizontalement
   tourne la scène, la page défile toujours verticalement ; deux doigts zooment et inclinent) */
export function creerScene(hote, { ratio = 0.62, hMax = 480, label = '', manip = false } = {}) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true }); }
  catch (e) {
    hote.innerHTML = '<p class="scene3d-erreur">Votre navigateur n\'a pas pu ouvrir de contexte WebGL : la scène 3D ne peut pas s\'afficher.</p>';
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0xffffff, 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const cv = renderer.domElement;
  cv.className = 'anim-scene';
  cv.setAttribute('role', 'img');
  cv.setAttribute('aria-label', label);
  hote.appendChild(cv);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  pmrem.dispose();

  // lumière douce du ciel, et une lumière principale venue d'en haut à gauche, qui porte les ombres
  scene.add(new THREE.HemisphereLight(0xffffff, 0xe8e2d8, 0.35));
  const soleil = new THREE.DirectionalLight(0xffffff, 1.35);
  soleil.castShadow = true;
  soleil.shadow.mapSize.set(2048, 2048);
  soleil.shadow.radius = 4;
  scene.add(soleil, soleil.target);

  const camera = new THREE.PerspectiveCamera(30, 1.6, 0.1, 2000);

  // sol invisible qui ne garde que les ombres : la scène « flotte » sur le blanc de la page
  const sol = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.ShadowMaterial({ opacity: 0.16 }));
  sol.rotation.x = -Math.PI / 2;
  sol.receiveShadow = true;
  scene.add(sol);

  // ---------------------------------------------------------------- cadrage
  let vue = null;                       // { boite, cible, dir } : la vue initiale
  function distance(boite, cible, dir) {
    const f = dir.clone().negate(), droite = new THREE.Vector3().crossVectors(f, camera.up).normalize();
    const haut = new THREE.Vector3().crossVectors(droite, f);
    const tv = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), th = tv * camera.aspect;
    let d = 0;
    for (const x of [boite.min.x, boite.max.x]) for (const y of [boite.min.y, boite.max.y]) for (const z of [boite.min.z, boite.max.z]) {
      const v = new THREE.Vector3(x, y, z).sub(cible);
      const px = v.dot(droite), py = v.dot(haut), pz = v.dot(f);
      d = Math.max(d, Math.abs(px) / th - pz, Math.abs(py) / tv - pz);
    }
    return d * 1.04;
  }
  function placer() {
    if (!vue) return;
    const { boite, cible, dir } = vue;
    const d = distance(boite, cible, dir);
    camera.position.copy(cible).addScaledVector(dir, d);
    camera.lookAt(cible);
    if (controles) {
      controles.target.copy(cible);
      if (manip) { controles.minDistance = d * 0.3; controles.maxDistance = d * 2.2; }
      controles.update();
    }
  }
  /* change l'orientation de la caméra en gardant sa distance (donc le zoom en cours) */
  function orienter(elevation, azimut) {
    if (!vue) return;
    const e = THREE.MathUtils.degToRad(elevation), a = THREE.MathUtils.degToRad(azimut);
    const d = camera.position.distanceTo(vue.cible);
    camera.position.copy(vue.cible).add(new THREE.Vector3(Math.sin(a) * Math.cos(e), Math.sin(e), Math.cos(a) * Math.cos(e)).multiplyScalar(d));
    camera.lookAt(vue.cible);
    if (controles) { controles.target.copy(vue.cible); controles.update(); }
  }
  /* boite : ce qui doit tenir à l'écran ; cible : point visé ; elevation, azimut en degrés
     (azimut 0 : on regarde dans le sens des z décroissants, comme la caméra par défaut de VPython) */
  function cadrer(boite, cible, elevation, azimut) {
    const e = THREE.MathUtils.degToRad(elevation), a = THREE.MathUtils.degToRad(azimut);
    vue = { boite, cible, dir: new THREE.Vector3(Math.sin(a) * Math.cos(e), Math.sin(e), Math.cos(a) * Math.cos(e)) };
    // ombres : la lumière vise le centre de la boîte depuis le haut à gauche, devant
    const c = boite.getCenter(new THREE.Vector3()), t = boite.getSize(new THREE.Vector3()).length() / 2;
    soleil.target.position.copy(c);
    soleil.position.copy(c).add(new THREE.Vector3(-0.45, 1, 0.55).normalize().multiplyScalar(3 * t));
    Object.assign(soleil.shadow.camera, { left: -1.3 * t, right: 1.3 * t, top: 1.3 * t, bottom: -1.3 * t, near: 0.5 * t, far: 5 * t });
    soleil.shadow.camera.updateProjectionMatrix();
    soleil.shadow.bias = -0.0004;
    soleil.shadow.normalBias = 0.02 * t / 10;
    sol.position.set(c.x, boite.min.y, c.z);
    sol.scale.set(8 * t, 8 * t, 1);
    camera.near = t / 50; camera.far = t * 40; camera.updateProjectionMatrix();
    placer();
  }

  // ---------------------------------------------------------------- rotation à la souris
  let controles = null;
  const pointeurFin = !!(window.matchMedia && window.matchMedia('(pointer: fine)').matches);
  if (pointeurFin || manip) {
    controles = new OrbitControls(camera, cv);
    Object.assign(controles, { enableZoom: manip, enablePan: false, enableDamping: true, dampingFactor: 0.12, rotateSpeed: 0.7, maxPolarAngle: manip ? Math.PI * 0.96 : Math.PI * 0.49 });
    if (manip) {
      controles.zoomSpeed = 0.8;
      controles.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };
    }
    cv.style.cursor = 'grab';
    cv.addEventListener('pointerdown', () => { cv.style.cursor = 'grabbing'; });
    window.addEventListener('pointerup', () => { cv.style.cursor = 'grab'; });
    cv.addEventListener('dblclick', placer);
  }

  // ---------------------------------------------------------------- taille et rendu
  let largeur = 0;
  function taille() {
    const w = cv.clientWidth || hote.clientWidth || 600;
    if (w === largeur) return;
    largeur = w;
    const hh = Math.round(Math.min(w * ratio, hMax));
    cv.style.height = hh + 'px';
    renderer.setSize(w, hh, false);
    camera.aspect = w / hh; camera.updateProjectionMatrix();
    placer();
  }
  new ResizeObserver(taille).observe(hote);

  let visible = true, enCours = false;
  function tourner() {
    if (enCours) return;
    enCours = true;
    requestAnimationFrame(function f() {
      if (!visible) { enCours = false; return; }
      if (controles) controles.update();
      renderer.render(scene, camera);
      requestAnimationFrame(f);
    });
  }
  new IntersectionObserver(e => { visible = e[0].isIntersecting; if (visible) tourner(); }, { rootMargin: '100px' }).observe(cv);
  taille(); tourner();

  return { scene, camera, renderer, cadrer, orienter, vueInitiale: placer, tactile: !pointeurFin };
}
