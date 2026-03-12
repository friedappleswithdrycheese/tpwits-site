"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { companyStats } from "@/data/company";
import { ArrowRight } from "lucide-react";
import { clientLogos } from "@/components/ui/ClientLogos";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Stats() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Two-column layout: text left, stats right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left — Heading + CTA */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight"
            >
              The operating metrics behind 17 years of engineering excellence.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-foreground-muted text-lg leading-relaxed"
            >
              Delivering mission-critical systems across healthcare, financial
              services, retail, energy, and manufacturing — with a 94% client
              retention rate.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Start a conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Stats 2x2 grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="grid grid-cols-2 gap-8 lg:gap-10"
          >
            {companyStats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>

        {/* Client Logos Marquee */}
        <div className="overflow-hidden">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-foreground-subtle mb-8 font-semibold">
            Trusted by industry leaders worldwide
          </p>
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
      </div>
    </section>
  );
}
