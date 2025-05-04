(() => {
  // -----------------------------------------------------------------
  // Paramètres de l’animation
  // -----------------------------------------------------------------
  const canvas     = document.getElementById('screen');
  const ctx        = canvas.getContext('2d');
  const W          = canvas.width;
  const H          = canvas.height;

  const dotSize    = 2;        // diamètre en px
  const dotsPerSec = 240;      // cadence d’apparition
  const maxDots    = 5000;    // RAZ après ce nombre d’impacts
  const period_px  = W / 5;    // période des franges
  const k          = 2 * Math.PI / period_px;

  // -----------------------------------------------------------------
  // Distribution de probabilité (cos²) + CDF
  // -----------------------------------------------------------------
  const cdf = new Float32Array(W);
  let sum = 0;
  for (let x = 0; x < W; x++) {
    const I = 0.5 * (1 + Math.cos(k * (x - W/2))); // cos² fringes
    cdf[x] = I;
    sum += I;
  }
  for (let x = 1; x < W; x++) cdf[x] += cdf[x-1];
  for (let x = 0; x < W; x++) cdf[x] /= sum;

  function sampleX() {
    const r = Math.random();
    let lo = 0, hi = W - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (r < cdf[mid]) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  // -----------------------------------------------------------------
  // Animation
  // -----------------------------------------------------------------
  let impactsDrawn = 0;
  let last = performance.now();

  function addDots(n) {
    ctx.fillStyle = '#333393';
    for (let i = 0; i < n; i++) {
      const x = sampleX();
      const y = Math.random() * H;
      ctx.fillRect(x, y, dotSize, dotSize);
    }
    impactsDrawn += n;
  }

  function resetCanvas() {
    ctx.clearRect(0, 0, W, H); // fond devient transparent, CSS le rend blanc
    impactsDrawn = 0;
    last = performance.now();
  }

  function step(now) {
    const dt = (now - last) / 1000;
    const n  = Math.floor(dt * dotsPerSec);
    if (n > 0) {
      addDots(n);
      last = now;
      if (impactsDrawn >= maxDots) resetCanvas();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();