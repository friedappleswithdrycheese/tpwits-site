"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Industries — Premium Domain Expertise Grid
   Features: Interactive hover cards, animated icons, gradient
   overlays, staggered reveals
   ══════════════════════════════════════════════════════════════ */

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
};

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(ellipse, rgba(232,113,58,0.05) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <SectionHeading
            label="Industries"
            title="Deep domain expertise across industries."
            description="Specialized knowledge for unique challenges and regulatory requirements."
            className="mb-0"
            dark
          />
          <Link
            href="/industries"
            className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors flex-shrink-0"
          >
            All industries
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
        >
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div key={industry.slug} variants={cardVariants}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 lg:p-8 text-center overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon container */}
                  <div className="relative w-16 h-16 rounded-2xl bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:bg-primary/[0.15] group-hover:border-primary/[0.25] group-hover:scale-110">
                    {Icon && (
                      <Icon className="w-7 h-7 text-primary/70 transition-colors duration-500 group-hover:text-primary" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-base lg:text-lg font-semibold text-white mb-3 transition-colors duration-300">
                    {industry.title}
                  </h3>

                  {/* CTA */}
                  <div className="relative flex items-center justify-center gap-1 text-sm text-white/40 group-hover:text-primary transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
