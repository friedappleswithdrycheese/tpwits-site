"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Testimonials — Premium Social Proof Carousel
   Features: Animated transitions, auto-play, glass cards,
   floating avatars, progress indicators
   ══════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    quote:
      "We evaluated six firms for our CRM overhaul — TPWITS was the only one that mapped the solution to our revenue targets. Team productivity is up 42%, and we closed the integration in half the projected timeline.",
    name: "Pam Chitwood",
    title: "Product Manager",
    company: "ABB",
    metric: "42%",
    metricLabel: "productivity increase",
  },
  {
    quote:
      "Their AI engineers didn't just build a document processing system — they embedded it into our compliance workflow. We're processing 12,000 documents daily at 99.2% accuracy, and we eliminated $1.8M in annual manual review costs.",
    name: "Nick Drogo",
    title: "Global Director IT",
    company: "Knowles",
    metric: "$1.8M",
    metricLabel: "annual savings",
  },
  {
    quote:
      "Most cloud migration partners talk about cost savings. TPWITS actually delivered them — 38% infrastructure reduction in the first quarter, zero downtime during cutover, and our release cycles went from monthly to weekly.",
    name: "Robert K Burger",
    title: "COO",
    company: "Sterne Kessler",
    metric: "38%",
    metricLabel: "cost reduction",
  },
  {
    quote:
      "We needed to scale from 50K to 500K concurrent users in under six months. TPWITS architected the platform, embedded a 14-person squad, and hit every milestone. They operate like a strategic partner, not a vendor.",
    name: "Umair Bashir",
    title: "Director",
    company: "Groupon",
    metric: "10x",
    metricLabel: "scale increase",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section ref={sectionRef} className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large quote watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif text-white/[0.01] select-none">
          &ldquo;
        </div>
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(232,113,58,0.05) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What our clients say
            </h2>
          </motion.div>

          {/* Main testimonial card */}
          <div
            className="relative"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Quote card */}
                  <div className="lg:col-span-8">
                    <div className="relative p-8 lg:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                      {/* Quote icon */}
                      <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                      </div>

                      <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed mb-8">
                        &ldquo;{testimonials[current].quote}&rdquo;
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold text-base">
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
                            {testimonials[current].title}, {testimonials[current].company}
                          </div>
                        </div>
                      </div>

                      {/* Decorative corners */}
                      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                        <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        <div className="absolute top-4 right-4 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Metric card */}
                  <div className="lg:col-span-4">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
                      <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
                        {testimonials[current].metric}
                      </div>
                      <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
                        {testimonials[current].metricLabel}
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-2xl -z-10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              {/* Arrow buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-white/[0.1] bg-white/[0.02] flex items-center justify-center text-white/60 hover:border-white/30 hover:bg-white/[0.05] hover:text-white transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-white/[0.1] bg-white/[0.02] flex items-center justify-center text-white/60 hover:border-white/30 hover:bg-white/[0.05] hover:text-white transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="flex-1 max-w-xs mx-8 hidden md:block">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    key={current}
                  />
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === current
                        ? "w-10 bg-primary"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
