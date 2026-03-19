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

// TODO: Verify with real numbers
const stats = [
  { value: 17, suffix: "+", label: "Years in Operation" },
  { value: 800, suffix: "+", label: "Engineers Worldwide" },
  { value: 94, suffix: "%", label: "Client Retention" },
  { value: 4, suffix: "", label: "Global Offices" },
];

export default function Hero() {
  const { ref: glowRef, onMouseMove } = useCursorGlow();

  return (
    <section
      ref={glowRef}
      onMouseMove={onMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden cursor-glow"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-navy" />

      {/* ── Atmospheric gradient mesh — warmest, most dramatic ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 70% 35%, rgba(232,113,58,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 60% at 20% 80%, rgba(232,113,58,0.03) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
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
              We engineer what&apos;s next.
              <br />
              <span className="text-white/35">You deploy it today.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 lg:mt-7 text-[17px] md:text-lg text-white/45 leading-relaxed max-w-lg hero-subtitle">
              AI systems. Cloud platforms. Enterprise products.
              We architect and deliver the technology that global
              enterprises rely on &mdash; on time, at scale, across industries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mt-9 lg:mt-10 hero-ctas">
              <Button href="/contact" variant="primary" size="lg" className="btn-glow">
                Talk to our team
                <ArrowRight className="w-5 h-5 ml-2" />
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
                  className="hero-stat rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-5"
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recognition badges — hidden until verified ── */}
        {/* TODO: Add only verified partnerships and certifications */}
      </div>
    </section>
  );
}
