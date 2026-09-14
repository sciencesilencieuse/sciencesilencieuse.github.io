// --- Paramètres fixes de la simulation (réfraction) ---
const baseWidthRefract  = 800;
const baseHeightRefract = 600;
const canvasRefract     = document.getElementById("refract");
const ctxRefract        = canvasRefract.getContext("2d");

// --- Paramètres de simulation (réfraction) ---
const dtRefract                = 0.08;     // Intervalle de temps (frame)
const v1Refract                = 8;        // Vitesse milieu 1
const v2Refract                = 4;        // Vitesse milieu 2
const fadeRateRefract          = 0.004;    // Disparition ondelettes inactives
const frontUpdateIntervalRefract = 2;      // Intervalle entre fronts

// Front initial et normale
const initialAngleDegRefract = 70;
const initialAngleRefract    = initialAngleDegRefract * Math.PI/180;
const normalAngleRefract     = initialAngleRefract - Math.PI/2;

// Sources initiales
const nbSourcesRefract  = 10;
const frontLengthRefract = 400;
const startXRefract     = 100;
const startYRefract     = 250;

// Position de l'interface
const interfaceXRefract = baseWidthRefract * 3/5;

class Wavelet {
constructor(center, propDir) {
  this.center  = { x:center.x, y:center.y };
  this.propDir = propDir!==undefined ? propDir : normalAngleRefract;
  this.opacity = 1;
  this.isActive= true;
  this.nParticles = 50;
  this.particles  = [];
  for (let i=0; i<this.nParticles; i++){
    let angle = 2*Math.PI*i/this.nParticles;
    this.particles.push({ angle, x:center.x, y:center.y });
  }
}
update(dt){
  for (let p of this.particles){
    let localSpeed = (p.x >= interfaceXRefract) ? v2Refract : v1Refract;
    p.x += localSpeed*Math.cos(p.angle)*dt;
    p.y += localSpeed*Math.sin(p.angle)*dt;
  }
  if (!this.isActive){
    this.opacity = Math.max(0, this.opacity - fadeRateRefract);
  }
}
draw(ctx){
  if (this.opacity<=0) return;
  ctx.save();
  ctx.globalAlpha = this.opacity;
  ctx.strokeStyle = "#D75595";
  ctx.beginPath();
  ctx.moveTo(this.particles[0].x, this.particles[0].y);
  for (let i=1; i<this.particles.length; i++){
    ctx.lineTo(this.particles[i].x, this.particles[i].y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
getFurthestPoint(){
  let maxProj=-Infinity, chosen=null;
  const ux = Math.cos(this.propDir), uy = Math.sin(this.propDir);
  for (let p of this.particles){
    const proj = (p.x-this.center.x)*ux + (p.y-this.center.y)*uy;
    if (proj>maxProj){ maxProj=proj; chosen=p; }
  }
  return chosen && { x:chosen.x, y:chosen.y };
}
}

function initWaveletsRefract(){
let arr=[];
for (let i=0; i<nbSourcesRefract; i++){
  const t = i/(nbSourcesRefract-1);
  const x = startXRefract + t*frontLengthRefract*Math.cos(initialAngleRefract);
  const y = startYRefract + t*frontLengthRefract*Math.sin(initialAngleRefract);
  arr.push(new Wavelet({x,y}, normalAngleRefract));
}
return arr;
}

let waveletsRefract = initWaveletsRefract();
let timeSinceLastFrontRefract = 0;

function isWaveletVisibleRefract(w){
return w.particles.some(p=>
  p.x>=0 && p.x<=baseWidthRefract && p.y>=0 && p.y<=baseHeightRefract
);
}

function updateRefract(){
timeSinceLastFrontRefract += dtRefract;
waveletsRefract.forEach(w => w.update(dtRefract));

if (timeSinceLastFrontRefract > frontUpdateIntervalRefract){
  const active = waveletsRefract.filter(w=>w.isActive);
  const newPts = active.map(w=>{
    const pt = w.getFurthestPoint();
    w.isActive=false;
    return pt;
  }).filter(pt=>pt);

  // Tri selon front initial
  const fd = { x:Math.cos(initialAngleRefract), y:Math.sin(initialAngleRefract) };
  newPts.sort((A,B)=>
    (A.x*fd.x + A.y*fd.y) - (B.x*fd.x + B.y*fd.y)
  );

  // Normale locale et nouvelle ondelette
  const orig = { x:Math.cos(normalAngleRefract), y:Math.sin(normalAngleRefract) };
  for (let i=0; i<newPts.length; i++){
    let tx, ty;
    if (i===0){
      tx = newPts[1].x - newPts[0].x;
      ty = newPts[1].y - newPts[0].y;
    } else if (i===newPts.length-1){
      const n=newPts.length;
      tx = newPts[n-1].x - newPts[n-2].x;
      ty = newPts[n-1].y - newPts[n-2].y;
    } else {
      const prev=newPts[i-1], next=newPts[i+1];
      tx = next.x - prev.x;
      ty = next.y - prev.y;
    }
    const L = Math.hypot(tx,ty)||1;
    tx/=L; ty/=L;
    const n1 = { x:-ty, y:tx };
    const dot = n1.x*orig.x + n1.y*orig.y;
    const chosen = dot>=0 ? n1 : { x:ty, y:-tx };
    const newDir = Math.atan2(chosen.y, chosen.x);
    waveletsRefract.push(new Wavelet({ x:newPts[i].x, y:newPts[i].y }, newDir));
  }

  timeSinceLastFrontRefract = 0;
}

// Nettoyage & reset
waveletsRefract = waveletsRefract.filter(w=>w.opacity>0);
if (!waveletsRefract.some(isWaveletVisibleRefract)){
  waveletsRefract = initWaveletsRefract();
  timeSinceLastFrontRefract = 0;
}

// Dessin
ctxRefract.clearRect(0,0,baseWidthRefract,baseHeightRefract);
ctxRefract.fillStyle = "#FFF36A";
ctxRefract.fillRect(0,0,interfaceXRefract,baseHeightRefract);
ctxRefract.fillStyle = "#DEF6FE";
ctxRefract.fillRect(interfaceXRefract,0,baseWidthRefract-interfaceXRefract,baseHeightRefract);
ctxRefract.strokeStyle = "black";
ctxRefract.beginPath();
ctxRefract.moveTo(interfaceXRefract,0);
ctxRefract.lineTo(interfaceXRefract,baseHeightRefract);
ctxRefract.stroke();
waveletsRefract.forEach(w=>w.draw(ctxRefract));

requestAnimationFrame(updateRefract);
}

updateRefract();