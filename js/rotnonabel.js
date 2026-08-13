import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// --- RÉCUPÉRATION DU CONTENEUR HTML ---
const container = document.getElementById('animation-container');

// --- 1. INITIALISATION DE LA SCÈNE ---
const scene = new THREE.Scene();

// La caméra s'adapte à la taille du conteneur, pas de la fenêtre globale
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
camera.position.set(0, 0, 12); 

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// On injecte le canvas 3D dans notre div
container.appendChild(renderer.domElement);

// --- 2. LUMIÈRES ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// --- 3. CRÉATION DU "F" EN 3D ---
const shape = new THREE.Shape();
shape.moveTo(-1, -2);
shape.lineTo(0, -2);
shape.lineTo(0, 0);
shape.lineTo(1.5, 0);
shape.lineTo(1.5, 1);
shape.lineTo(0, 1);
shape.lineTo(0, 2);
shape.lineTo(2, 2);
shape.lineTo(2, 3);
shape.lineTo(-1, 3);

const extrudeSettings = { depth: 0.5, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 };
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
geometry.center(); 

// --- 4. MATÉRIAUX ET OBJETS ---
const materialLeft = new THREE.MeshStandardMaterial({ color: 0xff8800, roughness: 0.3, metalness: 0.2 });
const materialRight = new THREE.MeshStandardMaterial({ color: 0x0088ff, roughness: 0.3, metalness: 0.2 });

const fLeft = new THREE.Mesh(geometry, materialLeft);
const fRight = new THREE.Mesh(geometry, materialRight);

const groupLeft = new THREE.Group();
groupLeft.position.set(-3.5, 0, 0); 
scene.add(groupLeft);

const groupRight = new THREE.Group();
groupRight.position.set(3.5, 0, 0);
scene.add(groupRight);

groupLeft.add(fLeft);
groupRight.add(fRight);

// Création des axes avec des couleurs plus foncées (Rouge sombre, Vert sombre, Bleu sombre)
const axesLeft = new THREE.AxesHelper(3.5);
axesLeft.setColors(0xaa0000, 0x007700, 0x0000aa); 
groupLeft.add(axesLeft);

const axesRight = new THREE.AxesHelper(3.5);
axesRight.setColors(0xaa0000, 0x007700, 0x0000aa);
groupRight.add(axesRight);

// --- 5. LOGIQUE D'ANIMATION ---
let time = 0;
const xAxis = new THREE.Vector3(1, 0, 0);
const zAxis = new THREE.Vector3(0, 0, 1);

const easeInOut = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

function animate() {
    requestAnimationFrame(animate);

    time += 0.012; 

    let progress1 = Math.max(0, Math.min(1, time));
    let progress2 = Math.max(0, Math.min(1, time - 1.5));

    let angle1 = easeInOut(progress1) * (Math.PI / 2);
    let angle2 = easeInOut(progress2) * (Math.PI / 2);

    // GAUCHE : X puis Z
    let qX_L = new THREE.Quaternion().setFromAxisAngle(xAxis, angle1);
    let qZ_L = new THREE.Quaternion().setFromAxisAngle(zAxis, angle2);
    fLeft.quaternion.copy(qZ_L).multiply(qX_L); 

    // DROITE : Z puis X
    let qZ_R = new THREE.Quaternion().setFromAxisAngle(zAxis, angle1);
    let qX_R = new THREE.Quaternion().setFromAxisAngle(xAxis, angle2);
    fRight.quaternion.copy(qX_R).multiply(qZ_R); 

    renderer.render(scene, camera);
}

animate();

// --- 6. INTERACTIONS ---
// Relancer uniquement si on clique sur le conteneur spécifique
const resetAnimation = () => { time = 0; };
container.addEventListener('click', resetAnimation);
container.addEventListener('touchstart', resetAnimation);

// Utilisation d'un ResizeObserver pour s'adapter si la taille de l'écran ou du texte change
const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// On observe le conteneur pour mettre à jour la 3D s'il change de taille
resizeObserver.observe(container);