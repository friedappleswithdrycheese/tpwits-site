"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ── Animated counter — counts up from 0 to target ── */
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
      // ease-out cubic
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

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* ── Subtle warm glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 40%, rgba(232,113,58,0.045) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* ── Left column — messaging ── */}
          <div className="lg:col-span-7">
            {/* Orange accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="h-[3px] w-14 bg-primary mb-8 lg:mb-10 origin-left"
            />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold text-white leading-[1.08] tracking-tight"
            >
              We engineer what&apos;s next.
              <br />
              <span className="text-white/35">You deploy it today.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-6 lg:mt-7 text-[17px] md:text-lg text-white/45 leading-relaxed max-w-lg"
            >
              AI systems. Cloud platforms. Enterprise products.
              We architect and deliver the technology that global
              enterprises rely on &mdash; on time, at scale, across industries.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="flex flex-wrap items-center gap-5 mt-9 lg:mt-10"
            >
              <Button href="/contact" variant="primary" size="lg">
                Talk to our team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-base text-white/45 hover:text-white"
              >
                Explore capabilities &rarr;
              </Link>
            </motion.div>
          </div>

          {/* ── Right column — stats with count-up ── */}
          <div className="lg:col-span-5 lg:pb-2">
            <div className="grid grid-cols-2 gap-x-10 gap-y-9 lg:gap-y-11">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.1,
                    ease,
                  }}
                >
                  <span className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-none">
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={stat.value > 100 ? 2.2 : 1.5}
                    />
                  </span>
                  <p className="mt-2 text-[13px] text-white/30 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recognition badges — full width bottom ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 lg:mt-18 pt-7 border-t border-white/[0.06]"
        >
          <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 md:gap-x-10 gap-y-2">
            {recognitionBadges.map((badge, i) => (
              <span
                key={badge}
                className={`text-[12px] font-medium text-white/25 tracking-wide whitespace-nowrap ${
                  i > 0
                    ? "sm:border-l sm:border-white/[0.06] sm:pl-7 md:pl-10"
                    : ""
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
