"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
}

/* ─── 1. AI & Data — Neural Constellation ──────────────────────────── */
export const AIDataIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="ai-core" cx="50%" cy="50%" r="40%">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="ai-ambient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0.05" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Ambient background */}
    <ellipse cx="200" cy="60" rx="180" ry="55" fill="url(#ai-ambient)" />
    {/* Concentric rings */}
    <circle cx="200" cy="60" r="18" stroke="white" strokeWidth="1" opacity="0.3" />
    <circle cx="200" cy="60" r="38" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <circle cx="200" cy="60" r="55" stroke="white" strokeWidth="0.5" opacity="0.08" />
    {/* Network lines — inner ring */}
    <line x1="200" y1="60" x2="145" y2="30" stroke="white" strokeWidth="1.2" opacity="0.3" />
    <line x1="200" y1="60" x2="258" y2="26" stroke="white" strokeWidth="1.2" opacity="0.3" />
    <line x1="200" y1="60" x2="148" y2="90" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <line x1="200" y1="60" x2="255" y2="92" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <line x1="200" y1="60" x2="115" y2="56" stroke="white" strokeWidth="1" opacity="0.2" />
    <line x1="200" y1="60" x2="288" y2="54" stroke="white" strokeWidth="1" opacity="0.2" />
    {/* Network lines — outer ring */}
    <line x1="145" y1="30" x2="88" y2="46" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="258" y1="26" x2="320" y2="40" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="148" y1="90" x2="95" y2="85" stroke="white" strokeWidth="0.8" opacity="0.12" />
    <line x1="255" y1="92" x2="315" y2="90" stroke="white" strokeWidth="0.8" opacity="0.12" />
    {/* Cross connections */}
    <line x1="145" y1="30" x2="258" y2="26" stroke="white" strokeWidth="0.5" opacity="0.1" />
    <line x1="148" y1="90" x2="255" y2="92" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="88" y1="46" x2="50" y2="60" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="320" y1="40" x2="355" y2="55" stroke="white" strokeWidth="0.5" opacity="0.08" />
    {/* Core glow */}
    <circle cx="200" cy="60" r="22" fill="url(#ai-core)" />
    {/* Nodes — central */}
    <circle cx="200" cy="60" r="5" fill="#E8713A" opacity="0.8" />
    <circle cx="200" cy="60" r="2.5" fill="white" opacity="0.9" />
    {/* Nodes — inner */}
    <circle cx="145" cy="30" r="3.5" fill="white" opacity="0.5" />
    <circle cx="258" cy="26" r="3.5" fill="white" opacity="0.5" />
    <circle cx="148" cy="90" r="3" fill="white" opacity="0.4" />
    <circle cx="255" cy="92" r="3" fill="white" opacity="0.4" />
    <circle cx="115" cy="56" r="2.5" fill="white" opacity="0.35" />
    <circle cx="288" cy="54" r="2.5" fill="white" opacity="0.35" />
    {/* Nodes — outer */}
    <circle cx="88" cy="46" r="2" fill="white" opacity="0.2" />
    <circle cx="320" cy="40" r="2" fill="white" opacity="0.2" />
    <circle cx="95" cy="85" r="1.5" fill="white" opacity="0.15" />
    <circle cx="315" cy="90" r="1.5" fill="white" opacity="0.15" />
    <circle cx="50" cy="60" r="1.2" fill="white" opacity="0.1" />
    <circle cx="355" cy="55" r="1.2" fill="white" opacity="0.1" />
  </svg>
);

/* ─── 2. Digital Product Engineering — Code Editor ─────────────────── */
export const EngineeringIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="eng-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="0.35" />
        <stop offset="100%" stopColor="white" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    {/* Background grid dots */}
    {[70, 110, 150, 190, 230, 270, 310, 350].map((x) =>
      [15, 35, 55, 75, 95, 115].map((y) => (
        <circle key={`eg-${x}-${y}`} cx={x} cy={y} r="0.6" fill="white" opacity="0.08" />
      ))
    )}
    {/* Main editor frame */}
    <rect x="100" y="10" width="200" height="100" rx="4" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <rect x="100" y="10" width="200" height="100" rx="4" fill="white" opacity="0.02" />
    {/* Title bar */}
    <line x1="100" y1="26" x2="300" y2="26" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <circle cx="112" cy="18" r="2.5" fill="#E8713A" opacity="0.6" />
    <circle cx="122" cy="18" r="2.5" fill="white" opacity="0.2" />
    <circle cx="132" cy="18" r="2.5" fill="white" opacity="0.15" />
    {/* Code lines */}
    <rect x="112" y="34" width="75" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="112" y="43" width="110" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="124" y="52" width="65" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="124" y="61" width="90" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="124" y="70" width="45" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="112" y="79" width="80" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="112" y="88" width="55" height="3" rx="1.5" fill="url(#eng-line)" />
    <rect x="112" y="97" width="70" height="3" rx="1.5" fill="url(#eng-line)" />
    {/* Orange accent markers */}
    <rect x="112" y="52" width="4" height="3" rx="1" fill="#E8713A" opacity="0.6" />
    <rect x="112" y="70" width="4" height="3" rx="1" fill="#E8713A" opacity="0.4" />
    {/* Floating component panel — right */}
    <rect x="315" y="20" width="70" height="40" rx="3" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <rect x="315" y="20" width="70" height="40" rx="3" fill="white" opacity="0.02" />
    <rect x="324" y="30" width="28" height="3" rx="1.5" fill="white" opacity="0.12" />
    <rect x="324" y="38" width="42" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="324" y="46" width="20" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="310" y="72" width="65" height="35" rx="3" stroke="white" strokeWidth="0.6" opacity="0.1" />
    <rect x="319" y="82" width="30" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="319" y="90" width="40" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Dashed connections */}
    <path d="M300 40 Q308 40 315 38" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
    <path d="M300 85 Q306 86 310 88" stroke="white" strokeWidth="0.6" opacity="0.1" strokeDasharray="3 3" />
  </svg>
);

/* ─── 3. Cloud & Infrastructure — Multi-Region Topology ────────────── */
export const CloudIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="cld-a" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0.08" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cld-b" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Zone regions */}
    <circle cx="120" cy="52" r="38" fill="url(#cld-a)" />
    <circle cx="200" cy="60" r="42" fill="url(#cld-b)" />
    <circle cx="285" cy="48" r="38" fill="url(#cld-a)" />
    {/* Zone outlines */}
    <circle cx="120" cy="52" r="38" stroke="white" strokeWidth="0.6" opacity="0.12" strokeDasharray="5 5" />
    <circle cx="200" cy="60" r="42" stroke="#E8713A" strokeWidth="0.8" opacity="0.2" strokeDasharray="5 5" />
    <circle cx="285" cy="48" r="38" stroke="white" strokeWidth="0.6" opacity="0.12" strokeDasharray="5 5" />
    {/* Inter-zone connections */}
    <path d="M155 45 Q175 35 190 50" stroke="white" strokeWidth="1.5" opacity="0.25" />
    <path d="M220 50 Q245 38 275 44" stroke="white" strokeWidth="1.5" opacity="0.25" />
    <path d="M148 70 Q200 100 260 68" stroke="white" strokeWidth="0.8" opacity="0.1" />
    {/* Zone A nodes */}
    <circle cx="120" cy="52" r="5" fill="white" opacity="0.35" />
    <circle cx="120" cy="52" r="2" fill="white" opacity="0.6" />
    <circle cx="102" cy="38" r="2.5" fill="white" opacity="0.25" />
    <circle cx="140" cy="38" r="2.5" fill="white" opacity="0.25" />
    <circle cx="108" cy="68" r="2" fill="white" opacity="0.2" />
    <circle cx="135" cy="66" r="2" fill="white" opacity="0.2" />
    <line x1="120" y1="52" x2="102" y2="38" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="120" y1="52" x2="140" y2="38" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="120" y1="52" x2="108" y2="68" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="120" y1="52" x2="135" y2="66" stroke="white" strokeWidth="0.8" opacity="0.15" />
    {/* Zone B — primary */}
    <circle cx="200" cy="60" r="6" fill="#E8713A" opacity="0.5" />
    <circle cx="200" cy="60" r="3" fill="white" opacity="0.7" />
    <circle cx="182" cy="46" r="2.5" fill="white" opacity="0.3" />
    <circle cx="220" cy="48" r="2.5" fill="white" opacity="0.3" />
    <circle cx="188" cy="76" r="2" fill="white" opacity="0.2" />
    <circle cx="215" cy="74" r="2" fill="white" opacity="0.2" />
    <line x1="200" y1="60" x2="182" y2="46" stroke="white" strokeWidth="1" opacity="0.25" />
    <line x1="200" y1="60" x2="220" y2="48" stroke="white" strokeWidth="1" opacity="0.25" />
    <line x1="200" y1="60" x2="188" y2="76" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="200" y1="60" x2="215" y2="74" stroke="white" strokeWidth="0.8" opacity="0.2" />
    {/* Zone C nodes */}
    <circle cx="285" cy="48" r="5" fill="white" opacity="0.35" />
    <circle cx="285" cy="48" r="2" fill="white" opacity="0.6" />
    <circle cx="268" cy="36" r="2.5" fill="white" opacity="0.25" />
    <circle cx="302" cy="38" r="2.5" fill="white" opacity="0.25" />
    <circle cx="275" cy="62" r="2" fill="white" opacity="0.2" />
    <circle cx="298" cy="58" r="2" fill="white" opacity="0.2" />
    <line x1="285" y1="48" x2="268" y2="36" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="285" y1="48" x2="302" y2="38" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="285" y1="48" x2="275" y2="62" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="285" y1="48" x2="298" y2="58" stroke="white" strokeWidth="0.8" opacity="0.15" />
    {/* Far edge nodes */}
    <circle cx="58" cy="58" r="1.2" fill="white" opacity="0.08" />
    <circle cx="348" cy="52" r="1.2" fill="white" opacity="0.08" />
    <line x1="85" y1="55" x2="58" y2="58" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="318" y1="48" x2="348" y2="52" stroke="white" strokeWidth="0.4" opacity="0.06" />
  </svg>
);

/* ─── 4. Web3 & Blockchain — Block Chain ───────────────────────────── */
export const Web3Illustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="w3-active" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0.03" />
      </linearGradient>
    </defs>
    {/* Block 1 — faded */}
    <rect x="22" y="38" width="44" height="44" rx="3" stroke="white" strokeWidth="0.8" opacity="0.12" />
    <rect x="30" y="48" width="28" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="30" y="55" width="20" height="3" rx="1.5" fill="white" opacity="0.06" />
    <rect x="30" y="62" width="24" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Link 1→2 */}
    <line x1="66" y1="60" x2="96" y2="60" stroke="white" strokeWidth="1.2" opacity="0.2" />
    <circle cx="81" cy="60" r="2" fill="white" opacity="0.15" />
    {/* Block 2 */}
    <rect x="96" y="36" width="48" height="48" rx="3" stroke="white" strokeWidth="1" opacity="0.2" />
    <rect x="96" y="36" width="48" height="48" rx="3" fill="white" opacity="0.02" />
    <rect x="105" y="47" width="30" height="3" rx="1.5" fill="white" opacity="0.12" />
    <rect x="105" y="54" width="22" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="105" y="61" width="26" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="105" y="68" width="18" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Link 2→3 */}
    <line x1="144" y1="60" x2="178" y2="60" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <circle cx="161" cy="60" r="2.5" fill="white" opacity="0.2" />
    {/* Block 3 — ACTIVE */}
    <rect x="178" y="33" width="54" height="54" rx="3" stroke="#E8713A" strokeWidth="1.5" opacity="0.6" />
    <rect x="178" y="33" width="54" height="54" rx="3" fill="url(#w3-active)" />
    <rect x="188" y="45" width="34" height="3" rx="1.5" fill="white" opacity="0.25" />
    <rect x="188" y="52" width="24" height="3" rx="1.5" fill="white" opacity="0.2" />
    <rect x="188" y="59" width="30" height="3" rx="1.5" fill="#E8713A" opacity="0.35" />
    <rect x="188" y="66" width="18" height="3" rx="1.5" fill="white" opacity="0.15" />
    <rect x="188" y="73" width="28" height="3" rx="1.5" fill="white" opacity="0.1" />
    {/* Link 3→4 */}
    <line x1="232" y1="60" x2="266" y2="60" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <circle cx="249" cy="60" r="2.5" fill="white" opacity="0.2" />
    {/* Block 4 */}
    <rect x="266" y="36" width="48" height="48" rx="3" stroke="white" strokeWidth="1" opacity="0.2" />
    <rect x="266" y="36" width="48" height="48" rx="3" fill="white" opacity="0.02" />
    <rect x="275" y="47" width="26" height="3" rx="1.5" fill="white" opacity="0.12" />
    <rect x="275" y="54" width="30" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="275" y="61" width="20" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="275" y="68" width="24" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Link 4→5 */}
    <line x1="314" y1="60" x2="340" y2="60" stroke="white" strokeWidth="1" opacity="0.15" />
    <circle cx="327" cy="60" r="1.5" fill="white" opacity="0.12" />
    {/* Block 5 — faded */}
    <rect x="340" y="40" width="40" height="40" rx="3" stroke="white" strokeWidth="0.6" opacity="0.08" />
    <rect x="348" y="50" width="24" height="3" rx="1.5" fill="white" opacity="0.05" />
    <rect x="348" y="57" width="18" height="3" rx="1.5" fill="white" opacity="0.04" />
    {/* Fork branch from block 2 */}
    <path d="M120 36 Q125 18 148 14" stroke="white" strokeWidth="0.6" opacity="0.1" />
    <rect x="148" y="4" width="36" height="22" rx="2" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <rect x="155" y="11" width="22" height="2.5" rx="1" fill="white" opacity="0.06" />
    <rect x="155" y="17" width="16" height="2.5" rx="1" fill="white" opacity="0.04" />
  </svg>
);

/* ─── 5. Cybersecurity — Radar Shield ──────────────────────────────── */
export const CybersecurityIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="sec-glow" cx="50%" cy="50%" r="45%">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Ambient glow */}
    <circle cx="200" cy="60" r="55" fill="url(#sec-glow)" />
    {/* Concentric circles */}
    <circle cx="200" cy="60" r="50" stroke="white" strokeWidth="0.5" opacity="0.1" />
    <circle cx="200" cy="60" r="38" stroke="white" strokeWidth="0.8" opacity="0.18" />
    <circle cx="200" cy="60" r="25" stroke="white" strokeWidth="1" opacity="0.25" />
    <circle cx="200" cy="60" r="12" stroke="white" strokeWidth="1" opacity="0.3" />
    {/* Cross axes */}
    <line x1="145" y1="60" x2="255" y2="60" stroke="white" strokeWidth="0.6" opacity="0.12" />
    <line x1="200" y1="5" x2="200" y2="115" stroke="white" strokeWidth="0.6" opacity="0.12" />
    <line x1="165" y1="25" x2="235" y2="95" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="235" y1="25" x2="165" y2="95" stroke="white" strokeWidth="0.4" opacity="0.06" />
    {/* Sweep arc */}
    <path d="M200 60 L232 24 A40 40 0 0 0 200 20 Z" fill="#E8713A" opacity="0.12" />
    <line x1="200" y1="60" x2="232" y2="24" stroke="#E8713A" strokeWidth="1" opacity="0.4" />
    {/* Center */}
    <circle cx="200" cy="60" r="3.5" fill="#E8713A" opacity="0.7" />
    <circle cx="200" cy="60" r="1.5" fill="white" opacity="0.9" />
    {/* Blips */}
    <circle cx="220" cy="42" r="3" fill="#E8713A" opacity="0.5" />
    <circle cx="220" cy="42" r="1.5" fill="white" opacity="0.4" />
    <circle cx="180" cy="76" r="2.5" fill="white" opacity="0.2" />
    <circle cx="230" cy="70" r="2" fill="white" opacity="0.15" />
    <circle cx="175" cy="42" r="1.5" fill="white" opacity="0.12" />
    <circle cx="215" cy="82" r="1.5" fill="white" opacity="0.1" />
    {/* Tick marks — cardinal */}
    <line x1="200" y1="8" x2="200" y2="14" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="200" y1="106" x2="200" y2="112" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="148" y1="60" x2="154" y2="60" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="246" y1="60" x2="252" y2="60" stroke="white" strokeWidth="0.8" opacity="0.15" />
    {/* Tick marks — intercardinal */}
    <line x1="164" y1="24" x2="167" y2="27" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="236" y1="24" x2="233" y2="27" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="164" y1="96" x2="167" y2="93" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="236" y1="96" x2="233" y2="93" stroke="white" strokeWidth="0.5" opacity="0.08" />
  </svg>
);

/* ─── 6. Advisory & Strategy — Compass Rose ────────────────────────── */
export const AdvisoryIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer rings */}
    <circle cx="200" cy="60" r="50" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <circle cx="200" cy="60" r="35" stroke="white" strokeWidth="0.6" opacity="0.12" />
    {/* Cardinal lines */}
    <line x1="200" y1="6" x2="200" y2="114" stroke="white" strokeWidth="0.8" opacity="0.2" />
    <line x1="146" y1="60" x2="254" y2="60" stroke="white" strokeWidth="0.8" opacity="0.2" />
    {/* Intercardinal lines */}
    <line x1="164" y1="24" x2="236" y2="96" stroke="white" strokeWidth="0.5" opacity="0.1" />
    <line x1="236" y1="24" x2="164" y2="96" stroke="white" strokeWidth="0.5" opacity="0.1" />
    {/* Compass diamond */}
    <path d="M200 38 L215 60 L200 82 L185 60 Z" stroke="white" strokeWidth="1.2" opacity="0.25" fill="none" />
    {/* North pointer — orange */}
    <path d="M200 38 L208 56 L200 52 Z" fill="#E8713A" opacity="0.6" />
    <path d="M200 38 L192 56 L200 52 Z" fill="white" opacity="0.2" />
    {/* South pointer */}
    <path d="M200 82 L208 64 L200 68 Z" fill="white" opacity="0.08" />
    <path d="M200 82 L192 64 L200 68 Z" fill="white" opacity="0.06" />
    {/* Cardinal labels */}
    <text x="200" y="5" textAnchor="middle" fill="white" opacity="0.25" fontSize="7" fontFamily="sans-serif" fontWeight="700">N</text>
    <text x="200" y="119" textAnchor="middle" fill="white" opacity="0.15" fontSize="7" fontFamily="sans-serif" fontWeight="700">S</text>
    <text x="142" y="63" textAnchor="middle" fill="white" opacity="0.15" fontSize="7" fontFamily="sans-serif" fontWeight="700">W</text>
    <text x="258" y="63" textAnchor="middle" fill="white" opacity="0.15" fontSize="7" fontFamily="sans-serif" fontWeight="700">E</text>
    {/* Center point */}
    <circle cx="200" cy="60" r="3" fill="#E8713A" opacity="0.6" />
    <circle cx="200" cy="60" r="1.5" fill="white" opacity="0.8" />
    {/* Strategy path — dotted route east */}
    <path d="M200 60 Q235 42 268 48 Q300 54 325 38" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    <circle cx="268" cy="48" r="2.5" fill="white" opacity="0.25" />
    <circle cx="325" cy="38" r="2.5" fill="white" opacity="0.15" />
    {/* Strategy path — dotted route west */}
    <path d="M200 60 Q170 78 140 74 Q110 68 82 80" stroke="white" strokeWidth="0.8" opacity="0.12" strokeDasharray="4 4" />
    <circle cx="140" cy="74" r="2" fill="white" opacity="0.12" />
    <circle cx="82" cy="80" r="1.5" fill="white" opacity="0.08" />
    {/* Tick marks on outer ring */}
    <line x1="200" y1="10" x2="200" y2="14" stroke="white" strokeWidth="0.6" opacity="0.12" />
    <line x1="200" y1="106" x2="200" y2="110" stroke="white" strokeWidth="0.6" opacity="0.12" />
    <line x1="150" y1="60" x2="154" y2="60" stroke="white" strokeWidth="0.6" opacity="0.12" />
    <line x1="246" y1="60" x2="250" y2="60" stroke="white" strokeWidth="0.6" opacity="0.12" />
  </svg>
);

/* ─── 7. Optimization & Quality — Performance Chart ────────────────── */
export const OptimizationIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="opt-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid — horizontal */}
    <line x1="70" y1="25" x2="340" y2="25" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="70" y1="45" x2="340" y2="45" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="70" y1="65" x2="340" y2="65" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="70" y1="85" x2="340" y2="85" stroke="white" strokeWidth="0.4" opacity="0.06" />
    <line x1="70" y1="100" x2="340" y2="100" stroke="white" strokeWidth="0.8" opacity="0.15" />
    {/* Grid — vertical */}
    <line x1="70" y1="20" x2="70" y2="105" stroke="white" strokeWidth="0.8" opacity="0.15" />
    <line x1="124" y1="25" x2="124" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="178" y1="25" x2="178" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="232" y1="25" x2="232" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="286" y1="25" x2="286" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="340" y1="25" x2="340" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    {/* Area fill */}
    <path d="M70 96 Q100 92 124 84 Q155 70 178 60 Q210 48 232 38 Q260 30 286 26 Q310 24 340 22 L340 100 L70 100 Z" fill="url(#opt-fill)" />
    {/* Main curve */}
    <path d="M70 96 Q100 92 124 84 Q155 70 178 60 Q210 48 232 38 Q260 30 286 26 Q310 24 340 22" stroke="#E8713A" strokeWidth="2" opacity="0.6" fill="none" />
    {/* Data points */}
    <circle cx="70" cy="96" r="3" fill="white" opacity="0.25" />
    <circle cx="124" cy="84" r="3" fill="white" opacity="0.3" />
    <circle cx="178" cy="60" r="3.5" fill="white" opacity="0.35" />
    <circle cx="232" cy="38" r="4" fill="#E8713A" opacity="0.5" />
    <circle cx="232" cy="38" r="2" fill="white" opacity="0.6" />
    <circle cx="286" cy="26" r="3" fill="white" opacity="0.3" />
    <circle cx="340" cy="22" r="3" fill="white" opacity="0.25" />
    {/* Threshold line */}
    <line x1="70" y1="52" x2="340" y2="52" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="5 5" />
    {/* Y-axis label hint */}
    <rect x="50" y="49" width="16" height="6" rx="1.5" fill="white" opacity="0.06" />
  </svg>
);

/* ─── 8. Solution Implementation — Modular Hub ────────────────────── */
export const ImplementationIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="imp-hub" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Central hub */}
    <rect x="172" y="32" width="56" height="56" rx="4" stroke="white" strokeWidth="1.2" opacity="0.3" />
    <rect x="172" y="32" width="56" height="56" rx="4" fill="url(#imp-hub)" />
    <circle cx="200" cy="60" r="10" stroke="#E8713A" strokeWidth="1.2" opacity="0.5" />
    <circle cx="200" cy="60" r="3" fill="#E8713A" opacity="0.6" />
    <circle cx="200" cy="60" r="1.5" fill="white" opacity="0.8" />
    {/* Top module */}
    <rect x="180" y="2" width="40" height="22" rx="3" stroke="white" strokeWidth="0.8" opacity="0.18" />
    <rect x="188" y="8" width="24" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="188" y="14" width="16" height="3" rx="1.5" fill="white" opacity="0.08" />
    {/* Bottom module */}
    <rect x="180" y="96" width="40" height="22" rx="3" stroke="white" strokeWidth="0.8" opacity="0.18" />
    <rect x="188" y="102" width="20" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="188" y="108" width="26" height="3" rx="1.5" fill="white" opacity="0.08" />
    {/* Left module */}
    <rect x="78" y="38" width="58" height="44" rx="3" stroke="white" strokeWidth="0.8" opacity="0.18" />
    <rect x="86" y="48" width="28" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="86" y="55" width="36" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="86" y="62" width="20" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Right module */}
    <rect x="264" y="38" width="58" height="44" rx="3" stroke="white" strokeWidth="0.8" opacity="0.18" />
    <rect x="272" y="48" width="32" height="3" rx="1.5" fill="white" opacity="0.1" />
    <rect x="272" y="55" width="22" height="3" rx="1.5" fill="white" opacity="0.08" />
    <rect x="272" y="62" width="28" height="3" rx="1.5" fill="white" opacity="0.06" />
    {/* Connection lines */}
    <line x1="200" y1="32" x2="200" y2="24" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <line x1="200" y1="88" x2="200" y2="96" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <line x1="172" y1="60" x2="136" y2="60" stroke="white" strokeWidth="1.2" opacity="0.25" />
    <line x1="228" y1="60" x2="264" y2="60" stroke="white" strokeWidth="1.2" opacity="0.25" />
    {/* Connection dots */}
    <circle cx="200" cy="28" r="2.5" fill="white" opacity="0.25" />
    <circle cx="200" cy="92" r="2.5" fill="white" opacity="0.25" />
    <circle cx="154" cy="60" r="2.5" fill="white" opacity="0.25" />
    <circle cx="246" cy="60" r="2.5" fill="white" opacity="0.25" />
    {/* Distant modules — faded */}
    <rect x="30" y="48" width="32" height="24" rx="2" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <rect x="338" y="48" width="32" height="24" rx="2" stroke="white" strokeWidth="0.5" opacity="0.08" />
    <line x1="78" y1="60" x2="62" y2="60" stroke="white" strokeWidth="0.5" opacity="0.06" strokeDasharray="3 3" />
    <line x1="322" y1="60" x2="338" y2="60" stroke="white" strokeWidth="0.5" opacity="0.06" strokeDasharray="3 3" />
  </svg>
);

/* ─── 9. Business Enablement — Growth Trajectory ───────────────────── */
export const EnablementIllustration: React.FC<IllustrationProps> = ({ className }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ena-trail" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="0.05" />
        <stop offset="50%" stopColor="white" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="ena-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E8713A" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Grid */}
    <line x1="60" y1="100" x2="350" y2="100" stroke="white" strokeWidth="0.8" opacity="0.12" />
    <line x1="60" y1="20" x2="60" y2="100" stroke="white" strokeWidth="0.8" opacity="0.12" />
    <line x1="60" y1="40" x2="350" y2="40" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="60" y1="60" x2="350" y2="60" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="60" y1="80" x2="350" y2="80" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="118" y1="20" x2="118" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="176" y1="20" x2="176" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="234" y1="20" x2="234" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="292" y1="20" x2="292" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    <line x1="350" y1="20" x2="350" y2="100" stroke="white" strokeWidth="0.3" opacity="0.05" />
    {/* Area fill */}
    <path d="M70 96 Q110 93 140 86 Q170 76 200 60 Q235 42 265 30 Q295 22 335 14 L335 100 L70 100 Z" fill="url(#ena-area)" />
    {/* Growth curve */}
    <path d="M70 96 Q110 93 140 86 Q170 76 200 60 Q235 42 265 30 Q295 22 335 14" stroke="url(#ena-trail)" strokeWidth="2.5" fill="none" />
    {/* Milestone markers */}
    <circle cx="70" cy="96" r="3" stroke="white" strokeWidth="0.8" opacity="0.2" fill="none" />
    <circle cx="140" cy="86" r="3" stroke="white" strokeWidth="0.8" opacity="0.25" fill="none" />
    <circle cx="200" cy="60" r="3.5" stroke="white" strokeWidth="1" opacity="0.35" fill="none" />
    <circle cx="265" cy="30" r="4.5" stroke="#E8713A" strokeWidth="1.2" opacity="0.5" fill="none" />
    <circle cx="265" cy="30" r="2" fill="#E8713A" opacity="0.5" />
    <circle cx="335" cy="14" r="3.5" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
    {/* Milestone vertical lines */}
    <line x1="140" y1="86" x2="140" y2="100" stroke="white" strokeWidth="0.5" opacity="0.1" strokeDasharray="3 3" />
    <line x1="200" y1="60" x2="200" y2="100" stroke="white" strokeWidth="0.5" opacity="0.12" strokeDasharray="3 3" />
    <line x1="265" y1="30" x2="265" y2="100" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="3 3" />
    {/* Acceleration arrow */}
    <path d="M328 18 L340 10 L335 22" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinejoin="round" />
    {/* Bar chart overlay */}
    <rect x="108" y="90" width="18" height="10" rx="1.5" fill="white" opacity="0.06" />
    <rect x="166" y="80" width="18" height="20" rx="1.5" fill="white" opacity="0.08" />
    <rect x="224" y="62" width="18" height="38" rx="1.5" fill="white" opacity="0.1" />
    <rect x="282" y="44" width="18" height="56" rx="1.5" fill="white" opacity="0.08" />
  </svg>
);

/* ─── Export Map ────────────────────────────────────────────────────── */
export const serviceIllustrationMap: Record<string, React.FC<IllustrationProps>> = {
  Brain: AIDataIllustration,
  Code2: EngineeringIllustration,
  Cloud: CloudIllustration,
  Blocks: Web3Illustration,
  Shield: CybersecurityIllustration,
  Compass: AdvisoryIllustration,
  Gauge: OptimizationIllustration,
  Puzzle: ImplementationIllustration,
  Rocket: EnablementIllustration,
};
