"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clientLogos } from "@/components/ui/ClientLogos";

const stats = [
  { value: "200+", label: "Engineers" },
  { value: "18", label: "Industries Served" },
  { value: "150+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
];

export default function Stats() {
  const sectionAnim = useScrollAnimation("stats");

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <motion.div {...sectionAnim} className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#E8713A] to-[#D4612A] leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-border mx-auto mb-12 md:mb-16" />

        {/* TODO: Verify client logos represent real clients — currently SVG illustrations used as visual elements */}
        <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-10 font-semibold">
          Trusted by industry leaders worldwide
        </p>

        {/* Client Logos Marquee */}
        <div className="relative py-4">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-12 sm:gap-16 md:gap-20 min-w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center gap-12 sm:gap-16 md:gap-20 min-w-max"
              >
                {clientLogos.map(({ name, Logo }) => (
                  <div
                    key={`${setIndex}-${name}`}
                    className="flex items-center justify-center h-10 md:h-12 shrink-0 opacity-25 hover:opacity-60 transition-opacity duration-500 text-neutral-400"
                  >
                    <Logo className="h-7 md:h-9 w-auto" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
