"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════════
   TPWITS Hero — Corporate Enterprise Design
   Features: Clean layout, professional typography,
   restrained animations, business-focused messaging
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

/* ── Subtle Grid Pattern ── */
function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

/* ── Stats Data ── */
const stats = [
  { value: 17, suffix: "+", label: "Years" },
  { value: 800, suffix: "+", label: "Engineers" },
  { value: 94, suffix: "%", label: "Retention" },
  { value: 4, suffix: "", label: "Offices" },
];

/* ── Animation Variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        {/* Subtle gradient accent */}
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%] opacity-40"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, rgba(232,113,58,0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      <GridPattern />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: smoothY, opacity }}
        className="container-custom relative z-10 py-32 lg:py-40"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/40 uppercase tracking-[0.2em]">
              Enterprise Technology Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-white leading-[1.1] tracking-[-0.02em]"
          >
            Engineering excellence
            <br />
            <span className="text-white/40">for the world&apos;s leading enterprises.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl"
          >
            We design, build, and operate mission-critical technology systems
            for Fortune 500 companies and high-growth organizations worldwide.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 md:gap-12 mt-12 pt-8 border-t border-white/[0.08]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[80px]">
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={stat.value > 100 ? 2 : 1.5}
                  />
                </span>
                <p className="mt-1 text-sm text-white/35 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-12"
          >
            <Button href="/contact" variant="primary" size="lg" className="group">
              Schedule a consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-base text-white/50 hover:text-white transition-colors duration-300"
            >
              View case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
