import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

/*
 * PRECISE STYLE MATCHING against the 4 original tkxel shapes.
 *
 * Original bounding boxes (229×229, alpha>20 threshold):
 *   shape-star:    86%x87%  center(118,112)
 *   shape-ring:    80%x82%  center(111,119)
 *   shape-spheres: 81%x81%  center(107,123)
 *   shape-arc:     77%x82%  center(104,122)
 *   → Target: ~80% fill, center slightly left and below mid (offset ~-5,-5 to +5,+10)
 *
 * Original pixel analysis:
 *   Solid(a>200): 14–36%  Edge(10<a<200): 17–29%  RGB(43-73, 112-133, 222-225)
 */

const HR = 800;
const FINAL = 229;
const OUT = join(import.meta.dirname, '..', 'public', 'images', 'services');

function addNoise(ctx, intensity = 0.11) {
  const imgData = ctx.getImageData(0, 0, FINAL, FINAL);
  const d = imgData.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 8) continue;
    const n = (Math.random() - 0.5) * 255 * intensity;
    d[i]     = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(imgData, 0, 0);
}

function asymmetricFade(ctx, w) {
  ctx.globalCompositeOperation = 'destination-out';
  const fade1 = ctx.createLinearGradient(0, 0, w, w);
  fade1.addColorStop(0, 'rgba(0,0,0,0)');
  fade1.addColorStop(0.5, 'rgba(0,0,0,0)');
  fade1.addColorStop(0.8, 'rgba(0,0,0,0.06)');
  fade1.addColorStop(1, 'rgba(0,0,0,0.18)');
  ctx.fillStyle = fade1;
  ctx.fillRect(0, 0, w, w);
  const fade2 = ctx.createLinearGradient(0, w * 0.75, 0, w);
  fade2.addColorStop(0, 'rgba(0,0,0,0)');
  fade2.addColorStop(1, 'rgba(0,0,0,0.08)');
  ctx.fillStyle = fade2;
  ctx.fillRect(0, 0, w, w);
  ctx.globalCompositeOperation = 'source-over';
}

function addGlow(shapeCanvas, strength = 'normal') {
  const glow = createCanvas(HR, HR);
  const gc = glow.getContext('2d');

  const layers = strength === 'light' ? [
    { scale: 1.12, alpha: 0.12 },
    { scale: 1.07, alpha: 0.22 },
    { scale: 1.03, alpha: 0.38 },
  ] : [
    { scale: 1.25, alpha: 0.06 },
    { scale: 1.20, alpha: 0.10 },
    { scale: 1.16, alpha: 0.14 },
    { scale: 1.12, alpha: 0.20 },
    { scale: 1.08, alpha: 0.30 },
    { scale: 1.04, alpha: 0.42 },
  ];

  for (const { scale, alpha } of layers) {
    const offset = (HR * (1 - scale)) / 2;
    gc.globalAlpha = alpha;
    gc.drawImage(shapeCanvas, offset, offset, HR * scale, HR * scale);
  }
  gc.globalAlpha = 1;
  gc.drawImage(shapeCanvas, 0, 0);
  return glow;
}

function finalize(name, canvas, glowStrength = 'normal') {
  const glowed = addGlow(canvas, glowStrength);
  const ctx = glowed.getContext('2d');
  asymmetricFade(ctx, HR);

  const out = createCanvas(FINAL, FINAL);
  const oc = out.getContext('2d');
  oc.drawImage(glowed, 0, 0, FINAL, FINAL);
  addNoise(oc);

  const buf = out.toBuffer('image/png');
  writeFileSync(join(OUT, name + '.png'), buf);
  console.log(`  ✓ ${name}.png (${(buf.length / 1024).toFixed(1)} KB)`);
}

/* ══════════════════════════════════════════════
 * COLOR PALETTE — calibrated to originals
 * ══════════════════════════════════════════════ */

/* Helper: draw a filled ellipse donut (outer - inner) with gradient */
function fillDonut(ctx, cx, cy, outerRx, outerRy, innerRx, innerRy, gradient) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, outerRx, outerRy, 0, 0, Math.PI * 2);
  ctx.ellipse(cx, cy, innerRx, innerRy, 0, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill('evenodd');
}

/* ── 1. TORUS — hyperloop: ring with visible hole and small ball inside ──
 * Ring rendered and glowed separately. After glow, the hole center is
 * cut out so glow doesn't fill it. Ball composited on top last. */
function drawTorus() {
  const cx = 385, cy = 410;
  const outerRx = 280, outerRy = 245;
  const innerRx = 175, innerRy = 150;

  // --- Step 1: Render ONLY the ring on its own canvas ---
  const ringCanvas = createCanvas(HR, HR);
  const rc = ringCanvas.getContext('2d');

  const g = rc.createRadialGradient(cx - 70, cy - 50, 20, cx + 15, cy + 20, outerRx);
  g.addColorStop(0, '#72A8F2');
  g.addColorStop(0.2, '#5E98EC');
  g.addColorStop(0.4, '#4C8AE4');
  g.addColorStop(0.65, '#3B78DE');
  g.addColorStop(0.85, '#2E6BD0');
  g.addColorStop(1, '#1E55B8');
  fillDonut(rc, cx, cy, outerRx, outerRy, innerRx, innerRy, g);

  // Specular highlight on ring body only
  const hl = rc.createRadialGradient(cx - 55, cy - 45, 8, cx, cy, outerRx * 0.55);
  hl.addColorStop(0, 'rgba(150,200,255,0.2)');
  hl.addColorStop(0.3, 'rgba(120,175,248,0.06)');
  hl.addColorStop(1, 'transparent');
  fillDonut(rc, cx, cy, outerRx, outerRy, innerRx, innerRy, hl);

  // --- Step 2: Apply glow to ring ---
  const glowed = addGlow(ringCanvas);
  const gc = glowed.getContext('2d');

  // --- Step 3: Cut out the hole center so glow doesn't fill it ---
  // Use a slightly smaller ellipse than innerR to preserve glow on inner edge
  gc.globalCompositeOperation = 'destination-out';
  const holeFade = gc.createRadialGradient(cx, cy, innerRx * 0.45, cx, cy, innerRx * 0.85);
  holeFade.addColorStop(0, 'rgba(0,0,0,1)');
  holeFade.addColorStop(0.7, 'rgba(0,0,0,1)');
  holeFade.addColorStop(1, 'rgba(0,0,0,0)');
  gc.fillStyle = holeFade;
  gc.beginPath();
  gc.ellipse(cx, cy, innerRx * 0.85, innerRy * 0.85, 0, 0, Math.PI * 2);
  gc.fill();
  gc.globalCompositeOperation = 'source-over';

  asymmetricFade(gc, HR);

  // --- Step 4: Draw ball inside the hole ---
  const ballR = 48;
  const bx = cx, by = cy;
  const bg = gc.createRadialGradient(bx - 12, by - 10, 2, bx, by, ballR);
  bg.addColorStop(0, '#8EBCF8');
  bg.addColorStop(0.2, '#72A8F2');
  bg.addColorStop(0.5, '#5E98EC');
  bg.addColorStop(0.8, '#3B78DE');
  bg.addColorStop(1, 'rgba(46,107,208,0.15)');
  gc.fillStyle = bg;
  gc.beginPath();
  gc.arc(bx, by, ballR, 0, Math.PI * 2);
  gc.fill();

  // Specular on ball
  const bs = gc.createRadialGradient(bx - 10, by - 10, 1, bx, by, ballR * 0.6);
  bs.addColorStop(0, 'rgba(180,215,255,0.4)');
  bs.addColorStop(1, 'transparent');
  gc.fillStyle = bs;
  gc.beginPath();
  gc.arc(bx, by, ballR * 0.6, 0, Math.PI * 2);
  gc.fill();

  // --- Step 5: Downscale + noise ---
  const out = createCanvas(FINAL, FINAL);
  const oc = out.getContext('2d');
  oc.drawImage(glowed, 0, 0, FINAL, FINAL);
  addNoise(oc);

  const buf = out.toBuffer('image/png');
  writeFileSync(join(OUT, 'shape-torus.png'), buf);
  console.log(`  ✓ shape-torus.png (${(buf.length / 1024).toFixed(1)} KB)`);
}

/* ── 2. DOME — clean hemisphere, the style the user loved ──
 * Original working version: cx=400, cy=490, r=330, clean Math.PI→0 clip */
function drawDome() {
  const canvas = createCanvas(HR, HR);
  const ctx = canvas.getContext('2d');
  const cx = 400, cy = 490, r = 330;

  // Clean hemisphere clip (top half of circle)
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy, r, r, 0, Math.PI, 0);
  ctx.closePath();
  ctx.clip();

  // Radial gradient: bright top-left → dark bottom-right
  const g = ctx.createRadialGradient(cx - r * 0.22, cy - r * 0.5, 15, cx + r * 0.12, cy, r);
  g.addColorStop(0, '#72A8F2');
  g.addColorStop(0.15, '#5E98EC');
  g.addColorStop(0.35, '#4C8AE4');
  g.addColorStop(0.55, '#3B78DE');
  g.addColorStop(0.78, '#2E6BD0');
  g.addColorStop(0.92, '#1E55B8');
  g.addColorStop(1, 'rgba(30,85,184,0.4)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, HR, HR);
  ctx.restore();

  // Base rim (thin ellipse at equator)
  ctx.beginPath();
  ctx.ellipse(cx, cy, r, 14, 0, 0, Math.PI * 2);
  const bg = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
  bg.addColorStop(0, '#1E55B8');
  bg.addColorStop(0.35, '#2E6BD0');
  bg.addColorStop(0.55, '#4C8AE4');
  bg.addColorStop(1, '#1E55B8');
  ctx.fillStyle = bg;
  ctx.fill();

  finalize('shape-dome', canvas);
}

/* ── 3. CHAIN — 3 interlocking circular rings on a horizontal line ──
 * Circular donut rings overlap like Olympic rings in a line.
 * Curved walls create wide, visible crossing areas.
 * Multi-step compositing: middle ring behind, outer rings on top,
 * then middle ring re-drawn at bottom crossings for interlock. */
function drawChain() {
  const canvas = createCanvas(HR, HR);
  const ctx = canvas.getContext('2d');

  const cy = 400;
  const outerR = 155, innerR = 100; // ring thickness = 55
  const spacing = 185; // generous overlap: 310-185=125px
  const centers = [400 - spacing, 400, 400 + spacing]; // 215, 400, 585

  function drawRing(i) {
    const cx = centers[i];

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
    ctx.closePath();

    const g = ctx.createRadialGradient(cx - 25, cy - 25, innerR * 0.5, cx + 10, cy + 10, outerR);
    if (i === 1) {
      // Middle ring — darker for contrast
      g.addColorStop(0, '#5E98EC');
      g.addColorStop(0.3, '#4C8AE4');
      g.addColorStop(0.6, '#3B78DE');
      g.addColorStop(0.85, '#2E6BD0');
      g.addColorStop(1, '#1E55B8');
    } else {
      // Outer rings — brighter
      g.addColorStop(0, '#7EB0F4');
      g.addColorStop(0.3, '#6AA0EE');
      g.addColorStop(0.6, '#5690E6');
      g.addColorStop(0.85, '#3F7EDE');
      g.addColorStop(1, '#2A68C8');
    }
    ctx.fillStyle = g;
    ctx.fill('evenodd');
  }

  // Step 1: Draw middle ring (will be behind at top crossings)
  drawRing(1);

  // Step 2: Draw outer rings on top (in front everywhere initially)
  drawRing(0);
  drawRing(2);

  // Step 3: Redraw middle ring at the BOTTOM half of each overlap
  // → middle ring comes to front below center at each crossing
  for (const other of [0, 2]) {
    const midX = (centers[1] + centers[other]) / 2;
    const overlapHalf = outerR; // generous clip width
    ctx.save();
    ctx.beginPath();
    ctx.rect(midX - overlapHalf, cy, overlapHalf * 2, outerR + 50);
    ctx.clip();
    drawRing(1);
    ctx.restore();
  }

  finalize('shape-chain', canvas);
}

/* ── 4. RIPPLE — concentric rings + center orb, fills ~82% ──
 * Reduce outer radius to keep ~82% fill with glow */
function drawRipple() {
  const canvas = createCanvas(HR, HR);
  const ctx = canvas.getContext('2d');
  const cx = 395, cy = 405;

  // 6 rings (down from 8) fitting within ~320px radius
  for (let i = 5; i >= 0; i--) {
    const outerR = 55 + i * 52;
    const innerR = outerR - 24 + i * 1.5;

    ctx.beginPath();
    ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
    ctx.arc(cx, cy, Math.max(0, innerR), 0, Math.PI * 2, true);
    ctx.closePath();

    const g = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, outerR);
    g.addColorStop(0, '#5E98EC');
    g.addColorStop(0.4, '#4C8AE4');
    g.addColorStop(0.7, '#3B78DE');
    g.addColorStop(1, '#2E6BD0');
    ctx.fillStyle = g;
    ctx.fill('evenodd');
  }

  // Center solid orb
  const cg = ctx.createRadialGradient(cx - 12, cy - 12, 2, cx, cy, 55);
  cg.addColorStop(0, '#72A8F2');
  cg.addColorStop(0.3, '#4C8AE4');
  cg.addColorStop(0.65, '#2E6BD0');
  cg.addColorStop(1, 'rgba(30,85,184,0.2)');
  ctx.fillStyle = cg;
  ctx.beginPath(); ctx.arc(cx, cy, 55, 0, Math.PI * 2); ctx.fill();

  finalize('shape-ripple', canvas, 'light');
}

/* ── 5. CUBE — isometric with rounded corners, fills ~80% ──
 * Use quadratic curves for rounded corners instead of sharp lineTo.
 * Scale up to fill ~80% of canvas. */
function drawCube() {
  const canvas = createCanvas(HR, HR);
  const ctx = canvas.getContext('2d');
  const cx = 395, cy = 400, s = 280;
  const cr = 14; // corner radius for rounded edges

  // Helper: draw a rounded polygon face
  function roundedFace(points, gradient) {
    ctx.beginPath();
    const n = points.length;
    for (let i = 0; i < n; i++) {
      const curr = points[i];
      const next = points[(i + 1) % n];
      const prev = points[(i - 1 + n) % n];

      // Vector from current to prev/next
      const toPrevX = prev[0] - curr[0], toPrevY = prev[1] - curr[1];
      const toNextX = next[0] - curr[0], toNextY = next[1] - curr[1];
      const dPrev = Math.sqrt(toPrevX * toPrevX + toPrevY * toPrevY);
      const dNext = Math.sqrt(toNextX * toNextX + toNextY * toNextY);

      // Points offset from corner by cr
      const startX = curr[0] + (toPrevX / dPrev) * cr;
      const startY = curr[1] + (toPrevY / dPrev) * cr;
      const endX = curr[0] + (toNextX / dNext) * cr;
      const endY = curr[1] + (toNextY / dNext) * cr;

      if (i === 0) ctx.moveTo(startX, startY);
      else ctx.lineTo(startX, startY);
      ctx.quadraticCurveTo(curr[0], curr[1], endX, endY);
    }
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  // Top face — brightest
  const top = [
    [cx, cy - s * 0.9],
    [cx + s, cy - s * 0.35],
    [cx, cy + s * 0.2],
    [cx - s, cy - s * 0.35],
  ];
  const tg = ctx.createLinearGradient(cx - s * 0.6, cy - s, cx + s * 0.4, cy + s * 0.2);
  tg.addColorStop(0, '#72A8F2');
  tg.addColorStop(0.3, '#5E98EC');
  tg.addColorStop(0.6, '#4C8AE4');
  tg.addColorStop(1, '#3B78DE');
  roundedFace(top, tg);

  // Left face — medium shade
  const left = [
    [cx - s, cy - s * 0.35],
    [cx, cy + s * 0.2],
    [cx, cy + s * 0.9],
    [cx - s, cy + s * 0.35],
  ];
  const lfg = ctx.createLinearGradient(cx - s, cy - s * 0.2, cx, cy + s);
  lfg.addColorStop(0, '#4C8AE4');
  lfg.addColorStop(0.35, '#3B78DE');
  lfg.addColorStop(0.7, '#2E6BD0');
  lfg.addColorStop(1, '#1E55B8');
  roundedFace(left, lfg);

  // Right face — darkest
  const right = [
    [cx + s, cy - s * 0.35],
    [cx, cy + s * 0.2],
    [cx, cy + s * 0.9],
    [cx + s, cy + s * 0.35],
  ];
  const rfg = ctx.createLinearGradient(cx, cy, cx + s, cy + s * 0.4);
  rfg.addColorStop(0, '#3B78DE');
  rfg.addColorStop(0.3, '#2E6BD0');
  rfg.addColorStop(0.65, '#1E55B8');
  rfg.addColorStop(1, '#153F8E');
  roundedFace(right, rfg);

  finalize('shape-cube', canvas);
}

console.log('Generating 5 shapes (800→229, calibrated blue, coarse grain)...\n');
drawTorus();
drawDome();
drawChain();
drawRipple();
drawCube();
console.log('\nDone!');
