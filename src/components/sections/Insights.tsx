"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
      "A decision framework drawn from 40+ enterprise AI deployments — covering model selection, governance, ROI measurement, and the organizational changes that separate pilot projects from production impact.",
  },
  {
    type: "webinar",
    title: "Agentic AI in the Enterprise: From Experimentation to Production",
    description:
      "Our AI architects break down how three Fortune 500 companies moved autonomous AI agents from proof-of-concept to full-scale operations — and the governance models that made it possible.",
  },
  {
    type: "article",
    title: "Why 73% of Cloud Migrations Overshoot Budget — And How to Fix It",
    description:
      "An analysis of the most common cloud cost traps across AWS, Azure, and GCP, with a FinOps framework that has helped our clients reclaim an average of 35% in wasted cloud spend.",
  },
  {
    type: "whitepaper",
    title: "Digital Transformation Maturity: A Benchmarking Framework for 2026",
    description:
      "Benchmark your organization against industry leaders across five dimensions of digital maturity. Includes diagnostic tools, capability scorecards, and a prioritized transformation roadmap.",
  },
  {
    type: "webinar",
    title: "Legacy Modernization Without the Business Disruption",
    description:
      "A technical deep dive into the strangler fig pattern, domain-driven decomposition, and incremental migration strategies that enabled a Fortune 500 retailer to modernize with zero downtime.",
  },
  {
    type: "article",
    title: "Building High-Performance Offshore Engineering Teams: Lessons from 800+ Engineers",
    description:
      "What 17 years of scaling distributed teams across four global offices taught us about hiring, retention, code quality governance, and maintaining engineering velocity at scale.",
  },
];

const typeLabels: Record<InsightType, string> = {
  whitepaper: "Whitepaper",
  webinar: "Webinar",
  article: "Article",
};

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
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
    const cardWidth =
      el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 380;
    const gap = 24;
    const distance = cardWidth + gap;
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-background-alt dot-pattern">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-16">
          <SectionHeading
            label="Resources"
            title="Latest Insights & Resources"
            description="Research, frameworks, and field-tested strategies from our work with Fortune 500 enterprises and high-growth technology companies."
            className="mb-0"
          />
          <Link
            href="/insights"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex-shrink-0"
          >
            All insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {insights.map((insight, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[320px] sm:w-[360px] lg:w-[380px]"
              >
                <div className="group h-full flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Type label */}
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground-subtle mb-4">
                      {typeLabels[insight.type]}
                    </span>

                    <h3 className="text-base font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                      {insight.title}
                    </h3>

                    <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-1">
                      {insight.description}
                    </p>

                    <Link
                      href="/insights"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover hover:underline underline-offset-4 transition-colors group/link"
                    >
                      {insight.type === "whitepaper" ? "Download" : insight.type === "webinar" ? "Watch now" : "Read article"}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left fade overlay */}
          <div
            className={`hidden md:block absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-background-alt to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Right fade overlay */}
          <div
            className={`hidden md:block absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-background-alt to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors bg-white ${
                canScrollLeft
                  ? "border-border hover:border-gray-400 cursor-pointer"
                  : "border-border-light text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors bg-white ${
                canScrollRight
                  ? "border-border hover:border-gray-400 cursor-pointer"
                  : "border-border-light text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Card position indicators */}
          <div className="hidden sm:flex items-center gap-1.5">
            {insights.map((_, index) => (
              <div
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
