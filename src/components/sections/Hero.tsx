"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════════
   TPWITS Hero — Premium World-Class Design
   Features: Animated gradient mesh, floating geometric elements,
   staggered text reveals, scroll-linked parallax, premium stats
   ══════════════════════════════════════════════════════════════ */

/* ── Animated Counter Component ── */
function CountUp({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ── Floating Geometric Elements ── */
function FloatingGeometry() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - top right */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-16 h-16 border border-white/[0.06] rounded-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[8%] w-8 h-8 border border-primary/20 rounded-md"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating circles */}
      <motion.div
        className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-primary/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[5%] w-2 h-2 bg-white/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Decorative lines */}
      <svg
        className="absolute top-[25%] right-[25%] w-48 h-48 opacity-10"
        viewBox="0 0 200 200"
      >
        <motion.path
          d="M 20 100 Q 100 20, 180 100"
          fill="none"
          stroke="url(#heroLineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        />
        <motion.path
          d="M 20 120 Q 100 40, 180 120"
          fill="none"
          stroke="url(#heroLineGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8713A" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8713A" stopOpacity="1" />
            <stop offset="100%" stopColor="#E8713A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

/* ── Animated Gradient Mesh Background ── */
function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.07) 0%, transparent 60%)",
          filter: "blur(80px)",
          top: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
          bottom: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,113,58,0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ── Stats Data ── */
const stats = [
  { value: 17, suffix: "+", label: "Years in Operation" },
  { value: 800, suffix: "+", label: "Engineers Worldwide" },
  { value: 94, suffix: "%", label: "Client Retention" },
  { value: 4, suffix: "", label: "Global Offices" },
];

const recognitionBadges = [
  "AWS Advanced Partner",
  "Microsoft Gold",
  "Google Cloud Partner",
  "ISO 27001",
  "CMMI Level 3",
];

/* ── Animation Variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <GradientMesh />
      <FloatingGeometry />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: smoothY, opacity }}
        className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* ── Left Column — Primary Messaging ── */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Animated badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/60">
                Engineering Tomorrow&apos;s Digital Reality
              </span>
            </motion.div>

            {/* Headline with animated reveal */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold text-white leading-[1.05] tracking-[-0.02em]"
            >
              We engineer{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#F59E6B]">
                  what&apos;s next
                </span>
                {/* Underline decoration */}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br />
              <span className="text-white/30">You deploy it today.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-7 text-lg md:text-xl text-white/45 leading-relaxed max-w-xl"
            >
              AI systems. Cloud platforms. Enterprise products.
              We architect and deliver the technology that global
              enterprises rely on — on time, at scale, across industries.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              <Button href="/contact" variant="primary" size="lg" className="group">
                Talk to our team
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-base text-white/50 hover:text-white transition-colors duration-300 group"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* ── Right Column — Stats Grid ── */}
          <div className="lg:col-span-5 xl:col-span-6 lg:pl-8">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 lg:gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  custom={i}
                  className="relative group"
                >
                  {/* Stat card with glass effect */}
                  <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/[0.1]">
                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <span className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-none">
                        <CountUp
                          target={stat.value}
                          suffix={stat.suffix}
                          duration={stat.value > 100 ? 2.2 : 1.5}
                        />
                      </span>
                      <p className="mt-3 text-sm text-white/35 font-medium tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Recognition Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-white/[0.06]"
        >
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs font-semibold text-white/20 uppercase tracking-wider mr-4">
              Trusted by
            </span>
            {recognitionBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-white/30 tracking-wide whitespace-nowrap hover:bg-white/[0.05] hover:text-white/50 transition-all duration-300 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
