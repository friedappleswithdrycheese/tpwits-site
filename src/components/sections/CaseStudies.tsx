"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Case Studies — Premium Showcase Section
   Features: Magazine-style layout, animated transitions,
   glass morphism, metrics highlight, smooth carousel
   ══════════════════════════════════════════════════════════════ */

/* Generative background pattern */
function NetworkPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="case-grid"
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
      <rect width="100%" height="100%" fill="url(#case-grid)" />
    </svg>
  );
}

export default function CaseStudies() {
  const featuredStudies = caseStudies.filter((s: unknown) => (s as { featured?: boolean }).featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + featuredStudies.length) % featuredStudies.length
    );
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % featuredStudies.length);

  const study = featuredStudies[activeIndex];
  const testimonial = study.testimonial;

  return (
    <section ref={sectionRef} className="section-padding bg-navy relative overflow-hidden">
      {/* Background elements */}
      <NetworkPattern />

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,113,58,0.06) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <SectionHeading
            label="Case Studies"
            title="Featured success stories."
            description="Measurable outcomes from enterprise engagements across healthcare, fintech, retail, and legal tech."
            className="mb-0"
            dark
          />
          <Link
            href="/case-studies"
            className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors flex-shrink-0"
          >
            All case studies
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/[0.08]">
                {/* Left: Dark panel with metrics */}
                <div className="lg:col-span-7 relative p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-[400px] lg:min-h-[480px] bg-[#0C0C0C]">
                  {/* Large watermark metric */}
                  <div className="absolute bottom-6 right-6 text-[60px] md:text-[100px] lg:text-[140px] font-extrabold text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                    {study.results[0]?.split(" ")[0] || ""}
                  </div>

                  {/* Decorative accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
                  />

                  <div className="relative z-10">
                    {/* Industry tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/70 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.15] mb-5 max-w-lg">
                      {study.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm text-white/40 font-semibold uppercase tracking-[0.1em]">
                      {study.client}
                    </p>
                  </div>

                  {/* Results row */}
                  <div className="relative z-10 flex flex-wrap gap-3 mt-10">
                    {study.results.map((result, i) => (
                      <motion.div
                        key={result}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="group relative text-sm font-semibold text-white bg-white/[0.04] border border-white/[0.08] px-5 py-3 rounded-xl hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                      >
                        <span className="relative z-10">{result}</span>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Testimonial & CTA */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] p-8 md:p-10 lg:p-14 flex flex-col justify-between bg-[#080808]">
                  {testimonial && (
                    <div className="mb-10">
                      {/* Quote icon */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>

                      <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 font-medium">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      <div className="flex items-center gap-4">
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {testimonial.name.split(" ").map((n: string) => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/50">
                            {testimonial.title}, {study.client}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm font-semibold text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      Read full case study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/[0.1] bg-white/[0.02] flex items-center justify-center hover:border-white/30 hover:bg-white/[0.05] text-white/60 hover:text-white transition-all duration-300"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/[0.1] bg-white/[0.02] flex items-center justify-center hover:border-white/30 hover:bg-white/[0.05] text-white/60 hover:text-white transition-all duration-300"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white/40">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-24 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activeIndex + 1) / featuredStudies.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-sm font-medium text-white/40">
                {String(featuredStudies.length).padStart(2, "0")}
              </span>
            </div>

            {/* Dot indicators */}
            <div className="hidden md:flex gap-2">
              {featuredStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
