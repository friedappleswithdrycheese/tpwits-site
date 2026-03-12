import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

const SIZE = 600;
const OUT = join(import.meta.dirname, '..', 'public', 'images', 'services');

function save(name, canvas) {
  const buf = canvas.toBuffer('image/png');
  writeFileSync(join(OUT, name + '.png'), buf);
  console.log(`  ✓ ${name}.png (${(buf.length / 1024).toFixed(1)} KB)`);
}

/*
 * Orange palette based on TPWITS brand #E8713A
 * Bright:  rgba(232, 113, 58, A)
 * Medium:  rgba(200, 90, 40, A)
 * Deep:    rgba(160, 60, 20, A)
 * Light:   rgba(255, 180, 120, A)
 * White:   rgba(255, 220, 190, A)
 */

// 1. Star — 4-pointed soft sparkle
function drawStar() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  const cx = SIZE / 2, cy = SIZE / 2;

  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 250);
  grad.addColorStop(0, 'rgba(232, 113, 58, 0.9)');
  grad.addColorStop(0.3, 'rgba(200, 90, 40, 0.5)');
  grad.addColorStop(1, 'rgba(160, 60, 20, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, SIZE, SIZE);

  for (let angle = 0; angle < 4; angle++) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((angle * Math.PI) / 2);
    const pGrad = ctx.createRadialGradient(0, 0, 10, 0, -180, 60);
    pGrad.addColorStop(0, 'rgba(255, 160, 90, 0.95)');
    pGrad.addColorStop(0.5, 'rgba(232, 113, 58, 0.5)');
    pGrad.addColorStop(1, 'rgba(180, 70, 30, 0)');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.ellipse(0, -120, 35, 140, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
  cGrad.addColorStop(0, 'rgba(255, 220, 190, 1)');
  cGrad.addColorStop(1, 'rgba(255, 160, 90, 0)');
  ctx.fillStyle = cGrad;
  ctx.fillRect(cx - 60, cy - 60, 120, 120);

  blur(canvas, ctx, 18);
  save('shape-star', canvas);
}

// 2. Ring — soft donut/torus
function drawRing() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  const cx = SIZE / 2, cy = SIZE / 2;

  for (let r = 200; r > 60; r -= 2) {
    const alpha = r > 140 ? Math.max(0, (200 - r) / 60 * 0.7) : r < 100 ? Math.max(0, (r - 60) / 40 * 0.7) : 0.7;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(232, 113, 58, ${alpha})`;
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  const grad = ctx.createRadialGradient(cx, cy, 80, cx, cy, 180);
  grad.addColorStop(0, 'rgba(180, 70, 30, 0)');
  grad.addColorStop(0.3, 'rgba(200, 90, 40, 0.3)');
  grad.addColorStop(0.6, 'rgba(232, 113, 58, 0.6)');
  grad.addColorStop(0.8, 'rgba(200, 90, 40, 0.3)');
  grad.addColorStop(1, 'rgba(160, 60, 20, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, SIZE, SIZE);

  blur(canvas, ctx, 14);
  save('shape-ring', canvas);
}

// 3. Spheres — cluster of 4 soft orbs
function drawSpheres() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');

  const positions = [[220, 220], [380, 220], [220, 380], [380, 380]];
  positions.forEach(([x, y]) => {
    const radius = 110;
    const glow = ctx.createRadialGradient(x - 15, y - 15, 0, x, y, radius);
    glow.addColorStop(0, 'rgba(255, 200, 150, 0.95)');
    glow.addColorStop(0.4, 'rgba(232, 113, 58, 0.7)');
    glow.addColorStop(0.7, 'rgba(200, 80, 35, 0.4)');
    glow.addColorStop(1, 'rgba(160, 60, 20, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  });

  blur(canvas, ctx, 10);
  save('shape-spheres', canvas);
}

// 4. Arc — crescent shape
function drawArc() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  const cx = SIZE / 2 + 40, cy = SIZE / 2;

  const grad = ctx.createRadialGradient(cx - 60, cy, 80, cx, cy, 260);
  grad.addColorStop(0, 'rgba(255, 180, 120, 0.95)');
  grad.addColorStop(0.4, 'rgba(232, 113, 58, 0.7)');
  grad.addColorStop(0.7, 'rgba(200, 80, 35, 0.4)');
  grad.addColorStop(1, 'rgba(160, 60, 20, 0)');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, 230, -0.8, 1.2, false);
  ctx.arc(cx - 80, cy + 20, 180, 1.2, -0.8, true);
  ctx.closePath();
  ctx.fill();

  const hGrad = ctx.createLinearGradient(cx - 200, cy - 200, cx + 100, cy + 100);
  hGrad.addColorStop(0, 'rgba(255, 220, 190, 0.6)');
  hGrad.addColorStop(1, 'rgba(200, 80, 35, 0)');
  ctx.fillStyle = hGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 230, -0.8, 0.2, false);
  ctx.arc(cx - 80, cy + 20, 180, 0.2, -0.8, true);
  ctx.closePath();
  ctx.fill();

  blur(canvas, ctx, 16);
  save('shape-arc', canvas);
}

// 5. Nebula — diffuse cloud
function drawNebula() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');

  const blobs = [[280, 260, 140], [340, 320, 120], [240, 350, 100], [360, 240, 90], [300, 290, 160]];
  blobs.forEach(([x, y, r]) => {
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(255, 160, 90, 0.8)');
    grad.addColorStop(0.4, 'rgba(232, 113, 58, 0.5)');
    grad.addColorStop(0.7, 'rgba(200, 80, 35, 0.2)');
    grad.addColorStop(1, 'rgba(160, 60, 20, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalAlpha = 0.4;
  const tendrils = [
    [200, 220, 350, 280, 400, 400],
    [180, 260, 320, 300, 380, 380],
    [220, 200, 360, 260, 420, 360],
    [240, 300, 300, 340, 360, 420],
    [190, 280, 330, 310, 390, 390],
    [210, 240, 340, 270, 410, 380],
  ];
  tendrils.forEach(([sx, sy, cx1, cy1, ex, ey], i) => {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(cx1, cy1, ex, ey);
    ctx.strokeStyle = 'rgba(232, 113, 58, 0.3)';
    ctx.lineWidth = 22 + i * 4;
    ctx.lineCap = 'round';
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  blur(canvas, ctx, 22);
  save('shape-nebula', canvas);
}

// 6. Spiral — soft helix swirl
function drawSpiral() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  const cx = SIZE / 2, cy = SIZE / 2;

  for (let t = 0; t < Math.PI * 6; t += 0.04) {
    const r = 20 + t * 30;
    const x = cx + Math.cos(t) * r;
    const y = cy + Math.sin(t) * r;
    const alpha = Math.max(0, 1 - t / (Math.PI * 6));
    const width = 8 + (t / (Math.PI * 6)) * 30;

    const grad = ctx.createRadialGradient(x, y, 0, x, y, width);
    grad.addColorStop(0, `rgba(255, 150, 80, ${alpha * 0.8})`);
    grad.addColorStop(1, 'rgba(200, 80, 35, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, width / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
  cGrad.addColorStop(0, 'rgba(255, 220, 190, 0.9)');
  cGrad.addColorStop(1, 'rgba(232, 113, 58, 0)');
  ctx.fillStyle = cGrad;
  ctx.fillRect(cx - 70, cy - 70, 140, 140);

  blur(canvas, ctx, 12);
  save('shape-spiral', canvas);
}

// 7. Wave — flowing wave form
function drawWave() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');

  for (let layer = 0; layer < 5; layer++) {
    const yOff = 180 + layer * 55;
    const alpha = 0.7 - layer * 0.1;

    ctx.beginPath();
    ctx.moveTo(0, yOff);
    for (let x = 0; x <= SIZE; x += 2) {
      const y = yOff + Math.sin(x / 60 + layer * 0.8) * (40 + layer * 10) + Math.sin(x / 30 + layer * 1.5) * 15;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(SIZE, SIZE);
    ctx.lineTo(0, SIZE);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, yOff - 60, 0, yOff + 120);
    grad.addColorStop(0, `rgba(232, 113, 58, ${alpha})`);
    grad.addColorStop(0.5, `rgba(200, 90, 40, ${alpha * 0.6})`);
    grad.addColorStop(1, 'rgba(160, 60, 20, 0)');
    ctx.fillStyle = grad;
    ctx.fill();
  }

  blur(canvas, ctx, 14);
  save('shape-wave', canvas);
}

// 8. Bloom — flower-like radial petals
function drawBloom() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');
  const cx = SIZE / 2, cy = SIZE / 2;

  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    const grad = ctx.createRadialGradient(0, -100, 10, 0, -100, 130);
    grad.addColorStop(0, 'rgba(255, 170, 100, 0.85)');
    grad.addColorStop(0.5, 'rgba(232, 113, 58, 0.4)');
    grad.addColorStop(1, 'rgba(180, 70, 30, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, -110, 55, 130, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
  cGrad.addColorStop(0, 'rgba(255, 230, 200, 1)');
  cGrad.addColorStop(0.5, 'rgba(255, 170, 100, 0.6)');
  cGrad.addColorStop(1, 'rgba(200, 90, 40, 0)');
  ctx.fillStyle = cGrad;
  ctx.fillRect(cx - 80, cy - 80, 160, 160);

  blur(canvas, ctx, 16);
  save('shape-bloom', canvas);
}

// 9. Lens — overlapping translucent discs
function drawLens() {
  const canvas = createCanvas(SIZE, SIZE);
  const ctx = canvas.getContext('2d');

  const discs = [[230, 270, 160, 0.7], [370, 270, 160, 0.6], [300, 370, 140, 0.5]];
  discs.forEach(([x, y, r, a]) => {
    const grad = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, 0, x, y, r);
    grad.addColorStop(0, `rgba(255, 190, 130, ${a})`);
    grad.addColorStop(0.4, `rgba(232, 113, 58, ${a * 0.7})`);
    grad.addColorStop(0.7, `rgba(200, 80, 35, ${a * 0.3})`);
    grad.addColorStop(1, 'rgba(160, 60, 20, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  });

  const iGrad = ctx.createRadialGradient(300, 300, 0, 300, 300, 80);
  iGrad.addColorStop(0, 'rgba(255, 220, 190, 0.6)');
  iGrad.addColorStop(1, 'rgba(255, 160, 90, 0)');
  ctx.fillStyle = iGrad;
  ctx.fillRect(220, 220, 160, 160);

  blur(canvas, ctx, 12);
  save('shape-lens', canvas);
}

// Gentle blur — single pass with smaller offsets to avoid washing out
function blur(canvas, ctx, radius) {
  const tmpCanvas = createCanvas(SIZE, SIZE);
  const tmpCtx = tmpCanvas.getContext('2d');
  const r = radius * 0.5; // use half radius for gentler blur

  // Pass 1: canvas -> tmp
  tmpCtx.clearRect(0, 0, SIZE, SIZE);
  tmpCtx.globalAlpha = 0.2;
  for (let dx = -r; dx <= r; dx += r) {
    for (let dy = -r; dy <= r; dy += r) {
      tmpCtx.drawImage(canvas, dx, dy);
    }
  }
  tmpCtx.globalAlpha = 1;

  // Pass 2: tmp -> canvas (double-blur for smoothness)
  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.globalAlpha = 0.2;
  for (let dx = -r; dx <= r; dx += r) {
    for (let dy = -r; dy <= r; dy += r) {
      ctx.drawImage(tmpCanvas, dx, dy);
    }
  }
  ctx.globalAlpha = 1;
}

console.log('Generating 9 abstract shapes (600x600, orange palette)...');
drawStar();
drawRing();
drawSpheres();
drawArc();
drawNebula();
drawSpiral();
drawWave();
drawBloom();
drawLens();
console.log('Done!');
