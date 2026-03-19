"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { caseStudies } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function CaseStudies() {
  const sectionAnim = useScrollAnimation("caseStudies");
  const featuredStudies = caseStudies.filter((s: any) => s.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + featuredStudies.length) % featuredStudies.length
    );
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % featuredStudies.length);

  const study = featuredStudies[activeIndex];
  const testimonial = study.testimonial;

  return (
    <section className="section-padding bg-navy bg-ruled-lines">
      <motion.div {...sectionAnim} className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            label="Case Studies"
            title="Featured success stories."
            description="Measurable outcomes from enterprise engagements across healthcare, fintech, retail, and legal tech."
            className="mb-0"
            dark
          />
          <Link
            href="/case-studies"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors flex-shrink-0"
          >
            All case studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-center text-sm text-white/30 -mt-4 mb-8">Representative engagements — client details anonymized under NDA</p>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:border-primary/20 transition-all duration-500 shadow-lg shadow-black/20">
                {/* Left: Dark panel */}
                <div
                  className="relative p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-[380px]"
                  style={{ background: "linear-gradient(135deg, #141414 0%, #0F0F0F 50%, #111111 100%)" }}
                >
                  {/* Large watermark metric */}
                  <div className="absolute bottom-6 right-6 text-[60px] md:text-[90px] font-extrabold text-white/[0.04] leading-none select-none pointer-events-none">
                    {study.results[0]?.split(' ')[0] || ''}
                  </div>

                  <div className="relative z-10">
                    {/* Industry tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-extrabold text-white leading-tight mb-4">
                      {study.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm text-white/50 font-semibold uppercase tracking-widest">
                      {study.client}
                    </p>
                  </div>

                  {/* Results row */}
                  <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                    {study.results.map((result) => (
                      <div
                        key={result}
                        className="text-xs font-semibold text-white/90 bg-white/[0.06] border border-white/[0.1] px-4 py-2.5 rounded-lg backdrop-blur-sm"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Testimonial & CTA */}
                <div className="border-t lg:border-t-0 lg:border-l border-white/[0.08] p-8 md:p-10 lg:p-14 flex flex-col justify-between" style={{ background: "linear-gradient(180deg, #0F0F0F 0%, #0C0C0C 100%)" }}>
                  {testimonial && (
                    <div className="mb-8">
                      <div className="text-white/20 text-5xl font-serif leading-none mb-4">
                        &ldquo;
                      </div>
                      <blockquote className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-white/50">
                          {testimonial.title}, {study.client}
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
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
                className="w-11 h-11 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center hover:border-primary/40 hover:bg-white/[0.06] text-white/60 hover:text-white transition-all duration-300"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center hover:border-primary/40 hover:bg-white/[0.06] text-white/60 hover:text-white transition-all duration-300"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {featuredStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    index === activeIndex
                      ? "w-10 bg-white"
                      : "w-2.5 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
