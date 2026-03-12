"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "We evaluated six firms for our CRM overhaul — TPWITS was the only one that mapped the solution to our revenue targets. Team productivity is up 42%, and we closed the integration in half the projected timeline.",
    name: "Pam Chitwood",
    title: "Product Manager, ABB",
  },
  {
    quote:
      "Their AI engineers didn't just build a document processing system — they embedded it into our compliance workflow. We're processing 12,000 documents daily at 99.2% accuracy, and we eliminated $1.8M in annual manual review costs.",
    name: "Nick Drogo",
    title: "Global Director IT, Knowles",
  },
  {
    quote:
      "Most cloud migration partners talk about cost savings. TPWITS actually delivered them — 38% infrastructure reduction, 3x deployment velocity, and zero downtime during cutover. That's rare at our scale.",
    name: "Robert K Burger",
    title: "COO, Sterne Kessler",
  },
  {
    quote:
      "We needed to scale from 50K to 500K concurrent users in under six months. TPWITS architected the platform, embedded a 14-person squad, and hit every milestone. They operate like a strategic partner, not a vendor.",
    name: "Umair Bashir",
    title: "Director, Groupon",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Testimonials
            </p>
          </div>

          {/* Decorative quote mark */}
          <div className="text-center mb-2">
            <span className="text-8xl font-serif text-white/[0.06] leading-none select-none">&ldquo;</span>
          </div>

          {/* Testimonial content */}
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
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Avatar + info */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center">
                    <span className="text-white/60 font-bold text-base">
                      {testimonials[current].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-white/50">
                      {testimonials[current].title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:border-white/30 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
