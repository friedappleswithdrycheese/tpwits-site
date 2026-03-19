"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCursorGlow } from "@/hooks/useCursorGlow";

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
  { value: 10, suffix: "+", label: "Years Building Software" },
  { value: 100, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "+", label: "Products Shipped" },
  { value: 3, suffix: "", label: "Sub-brands" },
];

export default function Hero() {
  const { ref: glowRef, onMouseMove } = useCursorGlow();

  return (
    <section
      ref={glowRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden cursor-glow"
    >
      {/* ── Background base ── */}
      <div className="absolute inset-0 bg-navy" />

      {/* ── Animated conic gradient — slowly rotates via CSS ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 hero-gradient-rotate"
        style={{
          background:
            "conic-gradient(from 180deg at 70% 30%, rgba(232,113,58,0.08) 0deg, transparent 120deg, rgba(232,113,58,0.04) 240deg, transparent 360deg)",
        }}
      />

      {/* ── Atmospheric gradient mesh — warmest, most dramatic ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 75% 25%, rgba(232,113,58,0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 50% at 70% 35%, rgba(232,113,58,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 60% at 20% 80%, rgba(232,113,58,0.03) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(232,113,58,0.02) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      {/* ── Subtle floating grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ambient top-edge glow ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(232,113,58,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content — CSS-only entrance animations for LCP ── */}
      <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* ── Left column — messaging ── */}
          <div className="lg:col-span-7">
            {/* Orange accent line */}
            <div className="h-[3px] w-14 bg-primary mb-8 lg:mb-10 origin-left hero-accent" />

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,5vw,4.75rem)] font-extrabold text-white leading-[1.08] tracking-tight hero-headline">
              We study the problem
              <br />
              <span className="text-white/35">before we sell the solution.</span>
            </h1>

            {/* Decorative gradient line between headline and subtitle */}
            <div className="flex items-center gap-4 mt-8 mb-2 hero-subtitle">
              <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            {/* Subtitle */}
            <p className="mt-4 lg:mt-5 text-[17px] md:text-lg text-white/45 leading-relaxed max-w-lg hero-subtitle">
              4 founding partners. 100+ engineers. A decade of building
              software under multiple brands. We do the research, find the
              gaps, and build technology that works long after the engagement
              ends.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mt-9 lg:mt-10 hero-ctas">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="btn-glow text-lg !px-10 !py-4 group"
              >
                Talk to our team
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-base text-white/45 hover:text-white"
              >
                Explore capabilities &rarr;
              </Link>
            </div>
          </div>

          {/* ── Right column — stats with glass cards ── */}
          <div className="lg:col-span-5 lg:pb-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="hero-stat group relative rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-l-2 hover:border-l-primary overflow-hidden"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/[0.04] to-transparent" />

                  <span className="relative text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={stat.value > 100 ? 2.2 : 1.5}
                    />
                  </span>
                  <p className="relative mt-2.5 text-[13px] text-white/30 font-medium tracking-wide group-hover:text-white/45 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom gradient divider ── */}
        <div className="mt-16 lg:mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
