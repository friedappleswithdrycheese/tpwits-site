"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const valuePropositions = [
  {
    quote:
      "We don't hide behind vague promises. Every engagement starts with a clear scope, timeline, and success criteria — agreed before a single line of code is written.",
    label: "Transparent Process",
  },
  {
    quote:
      "Our engineers work as an extension of your team, not as outsiders handing off code. Daily standups, shared repos, your tools, your workflow.",
    label: "Embedded Teams",
  },
  {
    quote:
      "We measure success by business outcomes, not billable hours. If the project isn't delivering value, we course-correct — not upsell.",
    label: "Outcome-Focused",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % valuePropositions.length);
  const prev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + valuePropositions.length) % valuePropositions.length
    );

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              How We Work
            </p>
          </div>

          {/* Decorative quote mark */}
          <div className="text-center mb-2">
            <span className="text-8xl font-serif text-primary/[0.12] leading-none select-none">
              &ldquo;
            </span>
          </div>

          {/* Value proposition content */}
          <div className="relative min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <blockquote className="text-lg md:text-xl lg:text-[1.75rem] font-medium text-white/90 leading-relaxed mb-10">
                  &ldquo;{valuePropositions[current].quote}&rdquo;
                </blockquote>

                {/* Label */}
                <div className="flex flex-col items-center gap-3">
                  <p className="text-base font-bold text-white">
                    {valuePropositions[current].label}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {valuePropositions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
