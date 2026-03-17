"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { partnerLogos } from "@/components/ui/PartnerLogos";

/* ══════════════════════════════════════════════════════════════
   TPWITS Partnerships — Clean Corporate Logo Grid
   Features: Logos only, minimal hover effects, professional layout
   ══════════════════════════════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Partnerships() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-background relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-custom">
        {/* Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center"
        >
          {partnerLogos.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-10 opacity-40 grayscale transition-all duration-400 hover:opacity-70 hover:grayscale-0 text-foreground-muted">
                <partner.Logo className="h-8 w-auto max-w-[100px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
