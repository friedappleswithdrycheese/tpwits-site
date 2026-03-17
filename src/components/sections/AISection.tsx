"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ══════════════════════════════════════════════════════════════
   TPWITS AI/Conviction Section — Premium Philosophy Showcase
   Features: Neural network visualization, animated cards,
   scroll-linked reveals, glassmorphism
   ══════════════════════════════════════════════════════════════ */

const convictions = [
  {
    thesis: "Most transformations fail because they start with technology.",
    support:
      "We start with the business outcome and work backward. Technology is the last decision, not the first.",
    icon: "target",
  },
  {
    thesis: "Speed without architecture is just technical debt on a deadline.",
    support:
      "We don't ship fast. We ship right — then we ship fast. Every system we build is designed to outlive the roadmap.",
    icon: "layers",
  },
  {
    thesis: "The best engineering is invisible.",
    support:
      "When our work is done, your teams move faster, your costs drop, and nobody talks about the infrastructure. That's the point.",
    icon: "sparkles",
  },
];

/* Neural Network Background Visualization */
function NeuralNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Gradient for connection lines */}
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0" />
          <stop offset="50%" stopColor="#E8713A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="neural-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Animated dash pattern */}
        <style>
          {`
            @keyframes neural-flow {
              from { stroke-dashoffset: 100; }
              to { stroke-dashoffset: 0; }
            }
            .neural-line {
              stroke-dasharray: 8 12;
              animation: neural-flow 8s linear infinite;
            }
          `}
        </style>
      </defs>

      {/* Node positions - creates a subtle neural network effect */}
      <g opacity="0.15">
        {/* Connection lines */}
        <path
          className="neural-line"
          d="M 100 200 Q 300 150, 500 250"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
        />
        <path
          className="neural-line"
          d="M 200 400 Q 400 300, 600 350"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          style={{ animationDelay: "-2s" }}
        />
        <path
          className="neural-line"
          d="M 50 300 Q 250 250, 450 320"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="0.5"
          style={{ animationDelay: "-4s" }}
        />
        <path
          className="neural-line"
          d="M 300 100 Q 500 200, 700 150"
          fill="none"
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          style={{ animationDelay: "-6s" }}
        />

        {/* Nodes */}
        <circle cx="100" cy="200" r="4" fill="#E8713A" opacity="0.5" filter="url(#neural-glow)" />
        <circle cx="500" cy="250" r="6" fill="#E8713A" opacity="0.4" filter="url(#neural-glow)" />
        <circle cx="200" cy="400" r="3" fill="#E8713A" opacity="0.3" />
        <circle cx="600" cy="350" r="5" fill="#E8713A" opacity="0.4" filter="url(#neural-glow)" />
        <circle cx="300" cy="100" r="4" fill="#E8713A" opacity="0.3" />
        <circle cx="700" cy="150" r="3" fill="#E8713A" opacity="0.2" />
      </g>
    </svg>
  );
}

/* Grid Pattern */
function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.02]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="ai-grid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ai-grid)" />
    </svg>
  );
}

/* Card Icon Components */
function CardIcon({ type }: { type: string }) {
  const iconClass = "w-6 h-6 text-primary";

  switch (type) {
    case "target":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "layers":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    default:
      return null;
  }
}

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy">
      {/* Background layers */}
      <GridPattern />
      <NeuralNetwork />

      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          {/* Label */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            What We Believe
          </span>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] max-w-3xl tracking-tight">
            We don&apos;t sell services.{" "}
            <span className="text-white/35">We sell conviction.</span>
          </h2>
        </motion.div>

        {/* Conviction cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {convictions.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12]">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-500">
                  <CardIcon type={item.icon} />
                </div>

                {/* Number */}
                <span className="text-sm font-extrabold tracking-[0.2em] text-primary/40 mb-6 block">
                  0{i + 1}
                </span>

                {/* Thesis */}
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-6">
                  &ldquo;{item.thesis}&rdquo;
                </h3>

                {/* Support */}
                <p className="text-[15px] text-white/50 leading-relaxed">
                  {item.support}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
