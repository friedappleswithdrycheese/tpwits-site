"use client";

import { motion } from "framer-motion";

/* ============================================================
   TPWITS Visual Component System
   Modern abstract visuals — monochrome + orange (#E8713A) accent
   ============================================================ */

// ── MetricRing ──────────────────────────────────────────────
interface MetricRingProps {
  value: number;
  label: string;
  size?: number;
}

export function MetricRing({ value, label, size = 80 }: MetricRingProps) {
  const strokeWidth = size * 0.08;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        {/* Progress ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8713A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        />
      </svg>
      <span className="text-[11px] font-medium text-white/50 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

// ── GridPattern ─────────────────────────────────────────────
interface GridPatternProps {
  className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      {/* Fade edges */}
      <defs>
        <linearGradient id="grid-fade-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="1" />
          <stop offset="15%" stopColor="#0A0A0A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grid-fade-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="85%" stopColor="#0A0A0A" stopOpacity="0" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="grid-fade-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="1" />
          <stop offset="15%" stopColor="#0A0A0A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grid-fade-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="85%" stopColor="#0A0A0A" stopOpacity="0" />
          <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-fade-top)" />
      <rect width="100%" height="100%" fill="url(#grid-fade-bottom)" />
      <rect width="100%" height="100%" fill="url(#grid-fade-left)" />
      <rect width="100%" height="100%" fill="url(#grid-fade-right)" />
    </svg>
  );
}

// ── GlowOrb ─────────────────────────────────────────────────
interface GlowOrbProps {
  color?: string;
  position?: string;
  size?: string;
  className?: string;
}

export function GlowOrb({
  color = "rgba(232,113,58,0.06)",
  position = "50% 50%",
  size = "600px",
  className,
}: GlowOrbProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        left: position.split(" ")[0],
        top: position.split(" ")[1],
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
    />
  );
}

// ── AbstractLines ───────────────────────────────────────────
interface AbstractLinesProps {
  className?: string;
}

export function AbstractLines({ className }: AbstractLinesProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
    >
      <style>
        {`
          @keyframes dash-flow-1 {
            from { stroke-dashoffset: 1200; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes dash-flow-2 {
            from { stroke-dashoffset: 1000; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes dash-flow-3 {
            from { stroke-dashoffset: 900; }
            to   { stroke-dashoffset: 0; }
          }
          .line-1 {
            stroke-dasharray: 8 16;
            animation: dash-flow-1 25s linear infinite;
          }
          .line-2 {
            stroke-dasharray: 12 20;
            animation: dash-flow-2 30s linear infinite;
          }
          .line-3 {
            stroke-dasharray: 6 24;
            animation: dash-flow-3 22s linear infinite;
          }
        `}
      </style>
      <path
        className="line-1"
        d="M 0 200 Q 200 180, 400 250 T 800 200"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      <path
        className="line-2"
        d="M 0 350 Q 250 300, 500 380 T 800 340"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
      />
      <path
        className="line-3"
        d="M 0 500 Q 300 460, 550 520 T 800 480"
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}

// ── HeroVisual ──────────────────────────────────────────────
// Morphing node system — 17 nodes transition between 3 formations
// State 0: Neural Constellation (AI/Engineering)
// State 1: Before→After Transformation
// State 2: Global Scale Network

import { AnimatePresence } from "framer-motion";

interface NodeState {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  isAccent?: boolean;
}

// 17 nodes × 3 states — positions within viewBox 500×500
const nodeFormations: NodeState[][] = [
  // ── State 0: Neural Constellation ──
  [
    { cx: 250, cy: 240, r: 8, opacity: 0.9, isAccent: true },
    { cx: 250, cy: 170, r: 4, opacity: 0.5 },
    { cx: 310, cy: 205, r: 4, opacity: 0.5 },
    { cx: 310, cy: 275, r: 4, opacity: 0.5 },
    { cx: 250, cy: 310, r: 4, opacity: 0.5 },
    { cx: 190, cy: 275, r: 4, opacity: 0.5 },
    { cx: 190, cy: 205, r: 4, opacity: 0.5 },
    { cx: 250, cy: 105, r: 3, opacity: 0.3 },
    { cx: 365, cy: 160, r: 3, opacity: 0.3 },
    { cx: 365, cy: 320, r: 3, opacity: 0.3 },
    { cx: 250, cy: 375, r: 3, opacity: 0.3 },
    { cx: 135, cy: 320, r: 3, opacity: 0.3 },
    { cx: 135, cy: 160, r: 3, opacity: 0.3 },
    { cx: 410, cy: 95, r: 2, opacity: 0.15 },
    { cx: 420, cy: 380, r: 2, opacity: 0.15 },
    { cx: 80, cy: 390, r: 2, opacity: 0.15 },
    { cx: 70, cy: 110, r: 2, opacity: 0.15 },
  ],
  // ── State 1: Transformation (legacy left → modern right) ──
  [
    { cx: 250, cy: 240, r: 8, opacity: 0.9, isAccent: true },
    { cx: 75, cy: 100, r: 3, opacity: 0.18 },
    { cx: 130, cy: 165, r: 3, opacity: 0.18 },
    { cx: 60, cy: 230, r: 2.5, opacity: 0.14 },
    { cx: 140, cy: 310, r: 3, opacity: 0.18 },
    { cx: 85, cy: 380, r: 2.5, opacity: 0.14 },
    { cx: 120, cy: 430, r: 2.5, opacity: 0.12 },
    { cx: 360, cy: 110, r: 4, opacity: 0.6 },
    { cx: 425, cy: 110, r: 4, opacity: 0.6 },
    { cx: 360, cy: 200, r: 4, opacity: 0.6 },
    { cx: 425, cy: 200, r: 4, opacity: 0.6 },
    { cx: 360, cy: 290, r: 4, opacity: 0.6 },
    { cx: 425, cy: 290, r: 4, opacity: 0.6 },
    { cx: 360, cy: 380, r: 3.5, opacity: 0.45 },
    { cx: 425, cy: 380, r: 3.5, opacity: 0.45 },
    { cx: 50, cy: 145, r: 2, opacity: 0.1 },
    { cx: 100, cy: 60, r: 2, opacity: 0.1 },
  ],
  // ── State 2: Global Scale (hub + 4 clusters) ──
  [
    { cx: 250, cy: 240, r: 8, opacity: 0.9, isAccent: true },
    { cx: 380, cy: 90, r: 4.5, opacity: 0.5 },
    { cx: 415, cy: 125, r: 3, opacity: 0.35 },
    { cx: 385, cy: 145, r: 3, opacity: 0.35 },
    { cx: 100, cy: 85, r: 4.5, opacity: 0.5 },
    { cx: 70, cy: 118, r: 3, opacity: 0.35 },
    { cx: 108, cy: 140, r: 3, opacity: 0.35 },
    { cx: 390, cy: 370, r: 4.5, opacity: 0.5 },
    { cx: 418, cy: 400, r: 3, opacity: 0.35 },
    { cx: 380, cy: 415, r: 3, opacity: 0.35 },
    { cx: 105, cy: 380, r: 4.5, opacity: 0.5 },
    { cx: 75, cy: 410, r: 3, opacity: 0.35 },
    { cx: 112, cy: 425, r: 3, opacity: 0.35 },
    { cx: 320, cy: 165, r: 2.5, opacity: 0.2 },
    { cx: 175, cy: 160, r: 2.5, opacity: 0.2 },
    { cx: 325, cy: 335, r: 2.5, opacity: 0.2 },
    { cx: 170, cy: 340, r: 2.5, opacity: 0.2 },
  ],
];

// Connection pairs per state: [fromIndex, toIndex]
const connectionSets: [number, number][][] = [
  // State 0: Neural — core to ring, ring to ring, ring to outer
  [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
    [1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12],
    [7, 13], [9, 14], [10, 15], [12, 16],
  ],
  // State 1: Transform — modern grid + catalyst arrows
  [
    [7, 8], [9, 10], [11, 12], [13, 14],
    [7, 9], [9, 11], [11, 13], [8, 10], [10, 12], [12, 14],
    [0, 7], [0, 9], [0, 11],
  ],
  // State 2: Scale — hub to clusters, intra-cluster
  [
    [0, 1], [0, 4], [0, 7], [0, 10],
    [0, 13], [0, 14], [0, 15], [0, 16],
    [1, 2], [1, 3], [4, 5], [4, 6],
    [7, 8], [7, 9], [10, 11], [10, 12],
  ],
];

// Floating card data per state
const cardData = [
  { label: "Models Deployed", value: "47", unit: "", badge: "AI Active", top: "16px", right: "0" },
  { label: "Delivery Acceleration", value: "60", unit: "%", badge: "Faster", top: "16px", right: "0" },
  { label: "Global Engineers", value: "800", unit: "+", badge: "4 Offices", top: "16px", right: "0" },
];

const secondCardData = [
  { label: "Prediction Accuracy", value: "98.6%", bottom: "70px", left: "0" },
  { label: "Timeline Compression", value: "18→6mo", bottom: "70px", left: "0" },
  { label: "Client Retention", value: "94%", bottom: "70px", left: "0" },
];

// Glow positions per state
const glowConfig = [
  { x: "55%", y: "48%", color: "rgba(232,113,58,0.1)" },
  { x: "65%", y: "45%", color: "rgba(232,113,58,0.08)" },
  { x: "50%", y: "50%", color: "rgba(232,113,58,0.06)" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroVisual({ slideIndex }: { slideIndex: number }) {
  const nodes = nodeFormations[slideIndex];
  const connections = connectionSets[slideIndex];
  const card = cardData[slideIndex];
  const card2 = secondCardData[slideIndex];
  const glow = glowConfig[slideIndex];

  return (
    <div className="relative w-full h-[480px] lg:h-[540px]">
      {/* ── Background glow ── */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          left: glow.x,
          top: glow.y,
        }}
        transition={{ duration: 1.2, ease }}
        style={{
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${glow.color} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      {/* ── Main SVG — morphing nodes + connections ── */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8713A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
          </radialGradient>
          <style>
            {`
              @keyframes hero-dash { from { stroke-dashoffset: 16; } to { stroke-dashoffset: 0; } }
              .hero-flow { stroke-dasharray: 4 12; animation: hero-dash 3s linear infinite; }
            `}
          </style>
        </defs>

        {/* Core glow */}
        <motion.circle
          animate={{ cx: nodes[0].cx, cy: nodes[0].cy }}
          transition={{ duration: 0.9, ease }}
          r="40"
          fill="url(#hero-core-glow)"
        />

        {/* Pulsing ring at core */}
        <motion.circle
          animate={{ cx: nodes[0].cx, cy: nodes[0].cy }}
          transition={{ duration: 0.9, ease }}
          r="20"
          stroke="#E8713A"
          strokeWidth="0.8"
          fill="none"
          opacity="0.2"
        />
        <motion.circle
          animate={{ cx: nodes[0].cx, cy: nodes[0].cy }}
          transition={{ duration: 0.9, ease }}
          r="32"
          stroke="#E8713A"
          strokeWidth="0.5"
          fill="none"
          opacity="0.1"
        />

        {/* ── Connections — crossfade per state ── */}
        <AnimatePresence mode="wait">
          <motion.g
            key={`conn-${slideIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {connections.map(([from, to], i) => {
              const a = nodes[from];
              const b = nodes[to];
              const isFromCore = from === 0;
              return (
                <line
                  key={`${from}-${to}-${i}`}
                  x1={a.cx}
                  y1={a.cy}
                  x2={b.cx}
                  y2={b.cy}
                  stroke={isFromCore ? "#E8713A" : "white"}
                  strokeWidth={isFromCore ? 1 : 0.6}
                  opacity={isFromCore ? 0.2 : 0.1}
                  className="hero-flow"
                />
              );
            })}
          </motion.g>
        </AnimatePresence>

        {/* ── Morphing nodes ── */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            animate={{
              cx: node.cx,
              cy: node.cy,
              r: node.r,
              opacity: node.opacity,
            }}
            transition={{ duration: 0.9, ease, delay: i * 0.02 }}
            fill={node.isAccent ? "#E8713A" : "white"}
          />
        ))}

        {/* White dot at core center */}
        <motion.circle
          animate={{ cx: nodes[0].cx, cy: nodes[0].cy }}
          transition={{ duration: 0.9, ease }}
          r="3"
          fill="white"
          opacity="0.9"
        />
      </svg>

      {/* ── Floating card — top right ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`card1-${slideIndex}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease }}
          className="absolute rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-md p-5 w-[180px]"
          style={{ top: card.top, right: card.right }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-white/50">{card.badge}</span>
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">
              {card.label}
            </p>
            <p className="text-3xl font-bold text-white tracking-tight">
              {card.value}
              <span className="text-sm font-medium text-white/40 ml-0.5">{card.unit}</span>
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── Floating card — bottom left ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`card2-${slideIndex}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="absolute rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-md px-5 py-4"
          style={{ bottom: card2.bottom, left: card2.left }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-1">
              {card2.label}
            </p>
            <p className="text-2xl font-bold text-white tracking-tight">
              {card2.value}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
