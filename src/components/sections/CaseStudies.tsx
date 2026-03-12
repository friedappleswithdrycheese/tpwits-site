"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const clientTestimonials: Record<
  string,
  { quote: string; name: string; title: string }
> = {
  "ai-diagnostic-platform": {
    quote:
      "We evaluated four vendors over six months. TPWITS was the only team that understood both the clinical workflow and the ML engineering required. Diagnostic accuracy improved to 94.7%, and our clinicians adopted the tool within weeks — not months.",
    name: "Dr. Sarah Mitchell",
    title: "Chief Medical Officer",
  },
  "defi-lending-protocol": {
    quote:
      "TPWITS took us from whitepaper to $50M in processed volume in 90 days — with zero security incidents and sub-200ms decisioning. Their engineers operated at a level I've rarely seen, even from top-tier Silicon Valley firms.",
    name: "David Park",
    title: "Founder & CEO",
  },
  "cloud-migration-retailer": {
    quote:
      "We migrated 340 workloads with zero unplanned downtime during our highest-traffic quarter. Infrastructure costs dropped 40%, and our engineering teams now deploy 3x faster. TPWITS didn't just migrate our systems — they modernized our entire delivery culture.",
    name: "Amanda Rodriguez",
    title: "Director of IT",
  },
  "intelligent-automation-fintech": {
    quote:
      "Their AI platform processes 10,000+ legal documents a day and cut our manual review time by 85%. We saved $3.2M in the first year alone. The ROI case wrote itself after the first quarter.",
    name: "James Chen",
    title: "CTO",
  },
};

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);

  const study = caseStudies[activeIndex];
  const testimonial = clientTestimonials[study.slug];

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            label="Case Studies"
            title="Featured success stories."
            description="Measurable outcomes from enterprise engagements across healthcare, fintech, retail, and legal tech. Every metric is real. Every result is client-verified."
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
              <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-gray-800">
                {/* Left: Dark panel */}
                <div
                  className="relative p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-[340px]"
                  style={{ background: "#111111" }}
                >
                  {/* Large watermark metric */}
                  <div className="absolute bottom-4 right-4 text-[50px] md:text-[80px] font-extrabold text-white/[0.04] leading-none select-none pointer-events-none">
                    {study.results[0]?.split(' ')[0] || ''}
                  </div>

                  <div className="relative z-10">
                    {/* Industry tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                      {study.title}
                    </h3>

                    {/* Client */}
                    <p className="text-sm text-white/50 font-medium uppercase tracking-wide">
                      {study.client}
                    </p>
                  </div>

                  {/* Results row */}
                  <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                    {study.results.map((result) => (
                      <div
                        key={result}
                        className="text-xs font-semibold text-white/80 bg-white/[0.06] border border-white/[0.08] px-4 py-2 rounded-lg"
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Testimonial & CTA */}
                <div className="border-t lg:border-t-0 lg:border-l border-gray-800 p-6 md:p-8 lg:p-12 flex flex-col justify-between" style={{ background: "#0F0F0F" }}>
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
          <div className="flex items-center justify-between mt-8">
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center hover:border-white/40 text-white/60 hover:text-white transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center hover:border-white/40 text-white/60 hover:text-white transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
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
      </div>
    </section>
  );
}
