"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

/* ══════════════════════════════════════════════════════════════
   TPWITS Insights — Premium Resources Carousel
   Features: Type-based icons, glass cards, animated reveals,
   smooth scroll with progress indicators
   ══════════════════════════════════════════════════════════════ */

type InsightType = "whitepaper" | "webinar" | "article";

interface Insight {
  type: InsightType;
  title: string;
  description: string;
}

const insights: Insight[] = [
  {
    type: "whitepaper",
    title: "The CTO's Playbook for Enterprise AI Adoption in 2026",
    description:
      "A decision framework drawn from 40+ enterprise AI deployments — covering model selection, governance, ROI measurement, and organizational changes.",
  },
  {
    type: "webinar",
    title: "Agentic AI in the Enterprise: From Experimentation to Production",
    description:
      "Our AI architects break down how three Fortune 500 companies moved autonomous AI agents from proof-of-concept to full-scale operations.",
  },
  {
    type: "article",
    title: "Why 73% of Cloud Migrations Overshoot Budget — And How to Fix It",
    description:
      "An analysis of the most common cloud cost traps across AWS, Azure, and GCP, with a FinOps framework that has helped clients reclaim 35% in wasted spend.",
  },
  {
    type: "whitepaper",
    title: "Digital Transformation Maturity: A Benchmarking Framework for 2026",
    description:
      "Benchmark your organization against industry leaders across five dimensions of digital maturity. Includes diagnostic tools and capability scorecards.",
  },
  {
    type: "webinar",
    title: "Legacy Modernization Without the Business Disruption",
    description:
      "A technical deep dive into the strangler fig pattern and incremental migration strategies that enabled a Fortune 500 retailer to modernize with zero downtime.",
  },
  {
    type: "article",
    title: "Building High-Performance Offshore Engineering Teams",
    description:
      "What 17 years of scaling distributed teams across four global offices taught us about hiring, retention, and maintaining engineering velocity at scale.",
  },
];

const typeConfig: Record<InsightType, { label: string; icon: React.ElementType; color: string }> = {
  whitepaper: { label: "Whitepaper", icon: FileText, color: "text-blue-500" },
  webinar: { label: "Webinar", icon: Video, color: "text-purple-500" },
  article: { label: "Article", icon: BookOpen, color: "text-emerald-500" },
};

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);

    // Calculate active index based on scroll position
    const cardWidth = 380 + 24; // card width + gap
    const newIndex = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, insights.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 380 + 24;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="section-padding bg-background-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16"
        >
          <SectionHeading
            label="Resources"
            title="Latest Insights & Resources"
            description="Research, frameworks, and field-tested strategies from our work with Fortune 500 enterprises."
            className="mb-0"
          />
          <Link
            href="/insights"
            className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex-shrink-0"
          >
            All insights
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Fade overlays */}
          <div
            className={`hidden md:block absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-background-alt to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`hidden md:block absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background-alt to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Scroll container */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide"
          >
            {insights.map((insight, index) => {
              const config = typeConfig[insight.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] lg:w-[380px]"
                >
                  <div className="group h-full flex flex-col bg-white border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.04] hover:border-gray-300/80 hover:-translate-y-1">
                    {/* Card top accent */}
                    <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-6 lg:p-8">
                      {/* Type badge */}
                      <div className="flex items-center gap-2 mb-5">
                        <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${config.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                          {config.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                        {insight.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-1">
                        {insight.description}
                      </p>

                      {/* CTA */}
                      <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/link"
                      >
                        {insight.type === "whitepaper"
                          ? "Download"
                          : insight.type === "webinar"
                          ? "Watch now"
                          : "Read article"}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          {/* Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 bg-white ${
                canScrollLeft
                  ? "border-gray-200 hover:border-primary/50 hover:shadow-md cursor-pointer"
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 bg-white ${
                canScrollRight
                  ? "border-gray-200 hover:border-primary/50 hover:shadow-md cursor-pointer"
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="hidden sm:flex items-center gap-2">
            {insights.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const el = scrollRef.current;
                  if (el) {
                    el.scrollTo({
                      left: index * (380 + 24),
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to insight ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
