"use client";

import { motion } from "framer-motion";
import { clientLogos } from "@/components/ui/ClientLogos";

export default function Stats() {
  return (
    <section className="py-14 md:py-18 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-8 font-semibold"
        >
          Trusted by industry leaders worldwide
        </motion.p>

        {/* Client Logos Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-8 sm:gap-12 md:gap-14 min-w-max animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center gap-8 sm:gap-12 md:gap-14 min-w-max"
              >
                {clientLogos.map(({ name, Logo }) => (
                  <div
                    key={`${setIndex}-${name}`}
                    className="flex items-center justify-center h-8 md:h-10 shrink-0 opacity-30 hover:opacity-70 transition-opacity duration-500 text-gray-500"
                  >
                    <Logo className="h-6 md:h-8 w-auto" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
