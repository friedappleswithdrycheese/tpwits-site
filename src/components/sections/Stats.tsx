"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clientLogos } from "@/components/ui/ClientLogos";

/* ══════════════════════════════════════════════════════════════
   TPWITS Stats — Premium Client Trust Section
   Features: Dual-direction marquee, enhanced hover states,
   subtle gradient overlay, improved spacing
   ══════════════════════════════════════════════════════════════ */

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-semibold uppercase tracking-[0.15em] text-foreground-muted mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Trusted Globally
          </span>
          <p className="text-sm text-foreground-subtle max-w-md mx-auto">
            Partnering with industry leaders to deliver transformative technology solutions
          </p>
        </motion.div>
      </div>

      {/* Client Logos Marquee — Primary direction */}
      <div className="relative">
        {/* Fade edges with gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-10 sm:gap-14 md:gap-16 min-w-max animate-marquee whitespace-nowrap"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center gap-10 sm:gap-14 md:gap-16 min-w-max"
            >
              {clientLogos.map(({ name, Logo }) => (
                <div
                  key={`${setIndex}-${name}`}
                  className="group flex items-center justify-center h-10 md:h-12 shrink-0 px-4"
                >
                  <Logo
                    className="h-7 md:h-9 w-auto text-gray-400 opacity-40 transition-all duration-500 group-hover:opacity-80 group-hover:text-gray-600 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Secondary marquee — reverse direction for visual interest */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-10 sm:gap-14 md:gap-16 min-w-max animate-marquee-reverse whitespace-nowrap mt-8"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center gap-10 sm:gap-14 md:gap-16 min-w-max"
            >
              {[...clientLogos].reverse().map(({ name, Logo }) => (
                <div
                  key={`${setIndex}-${name}-rev`}
                  className="group flex items-center justify-center h-10 md:h-12 shrink-0 px-4"
                >
                  <Logo
                    className="h-7 md:h-9 w-auto text-gray-400 opacity-30 transition-all duration-500 group-hover:opacity-70 group-hover:text-gray-600 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
