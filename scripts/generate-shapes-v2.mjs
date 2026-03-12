import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

const S = 600;
const OUT = join(import.meta.dirname, '..', 'public', 'images', 'services');

function save(name, canvas) {
  const buf = canvas.toBuffer('image/png');
  writeFileSync(join(OUT, name + '.png'), buf);
  console.log(`  ✓ ${name}.png (${(buf.length / 1024).toFixed(1)} KB)`);
}

/* ── Soft blur (3-pass box blur with controlled alpha) ── */
function blur(canvas, ctx, radius) {
  const tmp = createCanvas(S, S);
  const tc = tmp.getContext('2d');
  const r = Math.round(radius * 0.6);
  const passes = [
    [canvas, ctx, tmp, tc],
    [tmp, tc, canvas, ctx],
    [canvas, ctx, tmp, tc],
  ];
  for (const [src, , dst, dc] of passes) {
    dc.clearRect(0, 0, S, S);
    dc.globalAlpha = 1 / 9;
    for (let dx = -r; dx <= r; dx += r) {
      for (let dy = -r; dy <= r; dy += r) {
        dc.drawImage(src, dx, dy);
      }
    }
    dc.globalAlpha = 1;
  }
  // Copy result back to original canvas
  ctx.clearRect(0, 0, S, S);
  ctx.drawImage(tmp, 0, 0);
}

/* ── Shared helpers ── */
function orb(ctx, x, y, r) {
  // Shadow
  const sh = ctx.createRadialGradient(x + r * 0.05, y + r * 0.12, r * 0.5, x + r * 0.05, y + r * 0.12, r * 1.4);
  sh.addColorStop(0, 'rgba(160,70,25,0.13)');
  sh.addColorStop(1, 'transparent');
  ctx.fillStyle = sh;
  ctx.beginPath(); ctx.arc(x + r * 0.05, y + r * 0.12, r * 1.4, 0, Math.PI * 2); ctx.fill();
  // Body
  const g = ctx.createRadialGradient(x - r * 0.28, y - r * 0.28, r * 0.02, x, y, r);
  g.addColorStop(0, '#ffead6');
  g.addColorStop(0.2, '#f5a66a');
  g.addColorStop(0.5, '#e8713a');
  g.addColorStop(0.78, '#c45a28');
  g.addColorStop(1, '#8b3a12');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  // Specular
  const hl = ctx.createRadialGradient(x - r * 0.32, y - r * 0.32, 0, x - r * 0.2, y - r * 0.2, r * 0.55);
  hl.addColorStop(0, 'rgba(255,255,255,0.7)');
  hl.addColorStop(0.35, 'rgba(255,240,225,0.2)');
  hl.addColorStop(1, 'transparent');
  ctx.fillStyle = hl;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
}

function torusRing(ctx, cx, cy, R, t, squish) {
  for (let pass = 0; pass < 2; pass++) {
    const startA = pass === 0 ? Math.PI : 0;
    const endA = pass === 0 ? Math.PI * 2 : Math.PI;
    for (let a = startA; a < endA; a += 0.012) {
      const x = cx + Math.cos(a) * R;
      const y = cy + Math.sin(a) * R * squish;
      const z = Math.sin(a);
      const lit = pass === 0 ? 0.38 + z * 0.3 : 0.5 + z * 0.5;
      const tr = t * (0.82 + z * 0.18);
      const g = ctx.createRadialGradient(x - tr * 0.22, y - tr * 0.22, 0, x, y, tr);
      g.addColorStop(0, `rgba(255,236,218,${lit})`);
      g.addColorStop(0.35, `rgba(245,168,108,${lit})`);
      g.addColorStop(0.7, `rgba(232,113,58,${lit * 0.85})`);
      g.addColorStop(1, `rgba(139,58,18,${lit * 0.45})`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, tr, 0, Math.PI * 2); ctx.fill();
    }
  }
}

/* ── 1. Ripple (Brain — AI & Data Innovation) ── */
function drawRipple() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 285, cy = 295;
  for (let i = 6; i >= 0; i--) {
    const r = 40 + i * 25;
    const alpha = 0.55 - i * 0.06;
    const w = 12 - i * 0.8;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(232,113,58,${alpha})`;
    ctx.lineWidth = w;
    ctx.stroke();
  }
  orb(ctx, cx, cy, 28);
  blur(canvas, ctx, 6);
  save('shape-ripple', canvas);
}

/* ── 2. Cube (Code2 — Digital Product Engineering) ── */
function drawCube() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 280, cy = 290, s = 120;
  // Top face
  ctx.beginPath();
  ctx.moveTo(cx, cy - s * 0.9);
  ctx.lineTo(cx + s, cy - s * 0.35);
  ctx.lineTo(cx, cy + s * 0.2);
  ctx.lineTo(cx - s, cy - s * 0.35);
  ctx.closePath();
  const tg = ctx.createLinearGradient(cx - s, cy - s * 0.9, cx + s, cy + s * 0.2);
  tg.addColorStop(0, '#ffead6'); tg.addColorStop(0.5, '#f5a66a'); tg.addColorStop(1, '#e8713a');
  ctx.fillStyle = tg; ctx.fill();
  // Left face
  ctx.beginPath();
  ctx.moveTo(cx - s, cy - s * 0.35);
  ctx.lineTo(cx, cy + s * 0.2);
  ctx.lineTo(cx, cy + s * 0.9);
  ctx.lineTo(cx - s, cy + s * 0.35);
  ctx.closePath();
  const lfg = ctx.createLinearGradient(cx - s, cy, cx, cy);
  lfg.addColorStop(0, '#8b3a12'); lfg.addColorStop(0.5, '#c45a28'); lfg.addColorStop(1, '#e8713a');
  ctx.fillStyle = lfg; ctx.fill();
  // Right face
  ctx.beginPath();
  ctx.moveTo(cx + s, cy - s * 0.35);
  ctx.lineTo(cx, cy + s * 0.2);
  ctx.lineTo(cx, cy + s * 0.9);
  ctx.lineTo(cx + s, cy + s * 0.35);
  ctx.closePath();
  const rfg = ctx.createLinearGradient(cx, cy, cx + s, cy);
  rfg.addColorStop(0, '#e8713a'); rfg.addColorStop(0.5, '#c45a28'); rfg.addColorStop(1, '#9b4218');
  ctx.fillStyle = rfg; ctx.fill();
  // Edge highlights
  ctx.strokeStyle = 'rgba(255,235,215,0.2)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, cy - s * 0.9); ctx.lineTo(cx, cy + s * 0.2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx - s, cy - s * 0.35); ctx.lineTo(cx, cy + s * 0.2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + s, cy - s * 0.35); ctx.lineTo(cx, cy + s * 0.2); ctx.stroke();
  blur(canvas, ctx, 6);
  save('shape-cube', canvas);
}

/* ── 3. Dome (Cloud — Cloud & Infrastructure) ── */
function drawDome() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 280, cy = 345, r = 160;
  // Shadow
  const sh = ctx.createRadialGradient(cx, cy + 12, 15, cx, cy + 12, r * 1.15);
  sh.addColorStop(0, 'rgba(140,55,18,0.1)'); sh.addColorStop(1, 'transparent');
  ctx.fillStyle = sh;
  ctx.beginPath(); ctx.ellipse(cx, cy + 12, r * 1.1, 25, 0, 0, Math.PI * 2); ctx.fill();
  // Dome body
  ctx.save();
  ctx.beginPath(); ctx.ellipse(cx, cy, r, r, 0, Math.PI, 0); ctx.closePath(); ctx.clip();
  const g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.55, r * 0.03, cx, cy, r);
  g.addColorStop(0, '#fff'); g.addColorStop(0.12, '#ffead6'); g.addColorStop(0.32, '#f5a66a');
  g.addColorStop(0.58, '#e8713a'); g.addColorStop(0.8, '#c45a28'); g.addColorStop(1, '#8b3a12');
  ctx.fillStyle = g; ctx.fillRect(0, 0, S, S);
  ctx.restore();
  // Base rim
  ctx.beginPath(); ctx.ellipse(cx, cy, r, 7, 0, 0, Math.PI * 2);
  const bg = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
  bg.addColorStop(0, '#8b3a12'); bg.addColorStop(0.4, '#e8713a'); bg.addColorStop(0.6, '#f5a66a'); bg.addColorStop(1, '#8b3a12');
  ctx.fillStyle = bg; ctx.fill();
  blur(canvas, ctx, 6);
  save('shape-dome', canvas);
}

/* ── 4. Chain (Blocks — Web3 & Blockchain) ── */
function drawChain() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  [[210, 280], [300, 290], [390, 275]].forEach(([cx, cy]) => {
    torusRing(ctx, cx, cy, 75, 22, 0.4);
  });
  blur(canvas, ctx, 5);
  save('shape-chain', canvas);
}

/* ── 5. Torus (Shield — Cybersecurity) ── */
function drawTorus() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  torusRing(ctx, 285, 295, 128, 48, 0.38);
  blur(canvas, ctx, 6);
  save('shape-torus', canvas);
}

/* ── 6. Shell (Compass — Advisory & Strategy) ── */
function drawShell() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 295, cy = 300;
  const segments = [];
  for (let t = 0; t < Math.PI * 4.5; t += 0.02) {
    const r = 170 * Math.exp(-t * 0.12);
    const x = cx + Math.cos(t + 0.5) * r * 0.9;
    const y = cy + Math.sin(t + 0.5) * r * 0.7;
    const sz = r * 0.18;
    if (sz < 3) continue;
    segments.push({ x, y, sz, t });
  }
  segments.reverse().forEach(p => {
    const lit = 0.4 + Math.sin(p.t) * 0.3 + (1 - p.sz / 30) * 0.2;
    const g = ctx.createRadialGradient(p.x - p.sz * 0.25, p.y - p.sz * 0.25, 0, p.x, p.y, p.sz);
    g.addColorStop(0, `rgba(255,236,218,${Math.min(1, lit + 0.3)})`);
    g.addColorStop(0.3, `rgba(245,166,106,${lit})`);
    g.addColorStop(0.65, `rgba(232,113,58,${lit * 0.8})`);
    g.addColorStop(1, `rgba(139,58,18,${lit * 0.35})`);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2); ctx.fill();
  });
  // Center highlight
  const ch = ctx.createRadialGradient(cx + 8, cy + 2, 0, cx + 8, cy + 2, 22);
  ch.addColorStop(0, 'rgba(255,255,255,0.6)'); ch.addColorStop(1, 'transparent');
  ctx.fillStyle = ch; ctx.fillRect(cx - 25, cy - 25, 60, 60);
  blur(canvas, ctx, 5);
  save('shape-shell', canvas);
}

/* ── 7. Lens (Gauge — Optimization & Quality) ── */
function drawLens() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 285, cy = 295;
  // Shadow
  const sh = ctx.createRadialGradient(cx + 5, cy + 10, 20, cx + 5, cy + 10, 200);
  sh.addColorStop(0, 'rgba(140,55,18,0.1)'); sh.addColorStop(1, 'transparent');
  ctx.fillStyle = sh;
  ctx.beginPath(); ctx.ellipse(cx + 5, cy + 10, 190, 30, 0, 0, Math.PI * 2); ctx.fill();
  // Lens body
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(cx, cy - 45, 155, 130, 0, 0.15, Math.PI - 0.15);
  ctx.ellipse(cx, cy + 45, 155, 130, 0, Math.PI + 0.15, -0.15);
  ctx.closePath();
  ctx.clip();
  const g = ctx.createRadialGradient(cx - 55, cy - 40, 5, cx, cy, 165);
  g.addColorStop(0, '#ffead6'); g.addColorStop(0.18, '#f5a66a'); g.addColorStop(0.45, '#e8713a');
  g.addColorStop(0.72, '#c45a28'); g.addColorStop(1, '#8b3a12');
  ctx.fillStyle = g; ctx.fillRect(0, 0, S, S);
  // Specular
  const hl = ctx.createRadialGradient(cx - 50, cy - 30, 0, cx - 35, cy - 20, 80);
  hl.addColorStop(0, 'rgba(255,255,255,0.65)'); hl.addColorStop(0.4, 'rgba(255,240,225,0.15)'); hl.addColorStop(1, 'transparent');
  ctx.fillStyle = hl; ctx.fillRect(0, 0, S, S);
  ctx.restore();
  blur(canvas, ctx, 6);
  save('shape-lens', canvas);
}

/* ── 8. Saturn (Puzzle — Solution Implementation) ── */
function drawSaturn() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 285, cy = 295;
  // Back half of ring
  for (let a = Math.PI; a < Math.PI * 2; a += 0.01) {
    const x = cx + Math.cos(a) * 180;
    const y = cy + Math.sin(a) * 45;
    const alpha = 0.3 + Math.sin(a) * 0.15;
    const g = ctx.createRadialGradient(x, y - 3, 0, x, y, 10);
    g.addColorStop(0, `rgba(245,166,106,${alpha})`);
    g.addColorStop(0.6, `rgba(232,113,58,${alpha * 0.6})`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.fill();
  }
  // Central sphere
  orb(ctx, cx, cy, 82);
  // Front half of ring
  for (let a = 0; a < Math.PI; a += 0.01) {
    const x = cx + Math.cos(a) * 180;
    const y = cy + Math.sin(a) * 45;
    const alpha = 0.45 + Math.sin(a) * 0.35;
    const g = ctx.createRadialGradient(x, y - 3, 0, x, y, 12);
    g.addColorStop(0, `rgba(255,236,218,${alpha})`);
    g.addColorStop(0.4, `rgba(245,166,106,${alpha * 0.8})`);
    g.addColorStop(0.7, `rgba(232,113,58,${alpha * 0.5})`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.fill();
  }
  blur(canvas, ctx, 4);
  save('shape-saturn', canvas);
}

/* ── 9. Cone (Rocket — Business Enablement) ── */
function drawCone() {
  const canvas = createCanvas(S, S);
  const ctx = canvas.getContext('2d');
  const cx = 280, tip = 120, base = 430;
  // Shadow
  const sh = ctx.createRadialGradient(cx + 5, base + 8, 10, cx + 5, base + 8, 160);
  sh.addColorStop(0, 'rgba(140,55,18,0.1)'); sh.addColorStop(1, 'transparent');
  ctx.fillStyle = sh;
  ctx.beginPath(); ctx.ellipse(cx + 5, base + 8, 145, 18, 0, 0, Math.PI * 2); ctx.fill();
  // Body
  ctx.beginPath();
  ctx.moveTo(cx, tip);
  ctx.lineTo(cx + 135, base);
  ctx.ellipse(cx, base, 135, 22, 0, 0, Math.PI);
  ctx.closePath();
  const g = ctx.createLinearGradient(cx - 140, 0, cx + 140, 0);
  g.addColorStop(0, '#8b3a12'); g.addColorStop(0.25, '#c45a28'); g.addColorStop(0.42, '#e8713a');
  g.addColorStop(0.48, '#f5a66a'); g.addColorStop(0.53, '#ffead6');
  g.addColorStop(0.58, '#f5a66a'); g.addColorStop(0.7, '#e8713a');
  g.addColorStop(0.85, '#c45a28'); g.addColorStop(1, '#8b3a12');
  ctx.fillStyle = g; ctx.fill();
  // Tip highlight
  const th = ctx.createRadialGradient(cx - 8, tip + 30, 0, cx, tip + 50, 60);
  th.addColorStop(0, 'rgba(255,255,255,0.45)'); th.addColorStop(0.4, 'rgba(255,240,225,0.1)'); th.addColorStop(1, 'transparent');
  ctx.fillStyle = th; ctx.fill();
  // Base ellipse
  ctx.beginPath(); ctx.ellipse(cx, base, 135, 22, 0, 0, Math.PI * 2);
  const bg = ctx.createLinearGradient(cx - 135, base, cx + 135, base);
  bg.addColorStop(0, '#8b3a12'); bg.addColorStop(0.3, '#c45a28'); bg.addColorStop(0.5, '#e8713a'); bg.addColorStop(0.7, '#c45a28'); bg.addColorStop(1, '#8b3a12');
  ctx.fillStyle = bg; ctx.fill();
  blur(canvas, ctx, 6);
  save('shape-cone', canvas);
}

console.log('Generating 9 shapes (600×600, orange palette)...\n');
drawRipple();
drawCube();
drawDome();
drawChain();
drawTorus();
drawShell();
drawLens();
drawSaturn();
drawCone();
console.log('\nDone! All shapes saved to public/images/services/');
