"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { HeroVisual, GridPattern } from "@/components/ui/Visuals";
import { ArrowRight, ChevronRight } from "lucide-react";

interface Slide {
  tagline: string;
  headlineParts: { before: string; highlight: string; after: string };
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    tagline: "Enterprise AI & Engineering",
    headlineParts: {
      before: "Engineer the future. ",
      highlight: "Deploy it today.",
      after: "",
    },
    subtitle:
      "We build production-grade AI systems, cloud-native platforms, and digital products that deliver measurable ROI \u2014 from intelligent automation to predictive analytics, architected for enterprise scale.",
    primaryCta: { label: "Schedule a strategy call", href: "/contact" },
    secondaryCta: { label: "See our impact", href: "/case-studies" },
  },
  {
    tagline: "Transformation at Scale",
    headlineParts: {
      before: "Turn legacy into ",
      highlight: "competitive advantage.",
      after: "",
    },
    subtitle:
      "Cloud migration. Intelligent automation. Product engineering. We compress 18-month transformation roadmaps into 6-month delivery cycles \u2014 accelerating time-to-market by up to 60%.",
    primaryCta: { label: "Explore capabilities", href: "/services" },
    secondaryCta: { label: "Read case studies", href: "/case-studies" },
  },
  {
    tagline: "Global Engineering Excellence",
    headlineParts: {
      before: "800+ engineers. ",
      highlight: "17 years. One standard.",
      after: "",
    },
    subtitle:
      "Fortune 500 enterprises and high-growth startups trust our global team across 4 offices to deliver mission-critical software in healthcare, finance, retail, energy, and beyond.",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: { label: "Why TPWITS", href: "/about" },
  },
];

const recognitionBadges = [
  "AWS Advanced Partner",
  "Microsoft Gold",
  "Google Cloud Partner",
  "ISO 27001",
  "CMMI Level 3",
];

const SLIDE_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoAdvance = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 400);
    }, SLIDE_INTERVAL);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return;
      setIsVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setIsVisible(true);
      }, 400);
      startAutoAdvance();
    },
    [current, startAutoAdvance]
  );

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoAdvance]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
      {/* ── Clean dark background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0A0A0A 0%, #141414 100%)",
        }}
      />

      <GridPattern className="opacity-20" />

      {/* ── Subtle warm gradient orb ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(232,113,58,0.08) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* ── Main content ── */}
      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text content */}
          <div>
            <div
              className="max-w-3xl transition-all duration-500 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {/* Tagline */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2.5 px-3 py-2 text-xs sm:px-5 sm:py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] sm:text-sm text-white/60 font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {slide.tagline}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-7">
                {slide.headlineParts.before}
                <span className="gradient-text">{slide.headlineParts.highlight}</span>
                {slide.headlineParts.after && (
                  <>
                    <br />
                    {slide.headlineParts.after}
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-12">
                {slide.subtitle}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8 sm:mb-14">
                <Button href={slide.primaryCta.href} variant="primary" size="lg">
                  {slide.primaryCta.label}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 py-3 text-base sm:px-9 sm:py-[18px] sm:text-lg border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
                >
                  {slide.secondaryCta.label}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Recognition badges — persistent across slides */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/50 mb-6 font-semibold">
                Recognized by
              </p>
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-3">
                {recognitionBadges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[13px] font-semibold text-white/60 tracking-wide whitespace-nowrap px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.05]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — abstract visual (hidden on mobile) */}
          <div className="hidden lg:block">
            <HeroVisual slideIndex={current} />
          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-10 bg-primary"
                : "w-6 bg-white/20 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
