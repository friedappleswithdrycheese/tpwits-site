"use client";

import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/Visuals";

const convictions = [
  {
    thesis: "Most transformations fail because they start with technology.",
    support:
      "We start with the business outcome and work backward. Technology is the last decision, not the first.",
  },
  {
    thesis: "Speed without architecture is just technical debt on a deadline.",
    support:
      "We don't ship fast. We ship right — then we ship fast. Every system we build is designed to outlive the roadmap.",
  },
  {
    thesis: "The best engineering is invisible.",
    support:
      "When our work is done, your teams move faster, your costs drop, and nobody talks about the infrastructure. That's the point.",
  },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <GridPattern className="opacity-10" />
      <div className="container-custom section-padding relative z-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-6"
        >
          What We Believe
        </motion.p>

        {/* Section intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] max-w-2xl mb-12 sm:mb-16 md:mb-28"
        >
          We don&apos;t sell services.{" "}
          <span className="text-white/40">We sell conviction.</span>
        </motion.h2>

        {/* Three conviction cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {convictions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-navy p-6 sm:p-8 md:p-12 flex flex-col border-t-2 border-t-primary/20"
            >
              {/* Number */}
              <span className="text-sm font-extrabold tracking-[0.2em] text-primary/30 mb-8">
                0{i + 1}
              </span>

              {/* Thesis — the bold statement */}
              <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-extrabold text-white leading-snug mb-6">
                &ldquo;{item.thesis}&rdquo;
              </h3>

              {/* Supporting line */}
              <p className="text-[15px] text-white/50 leading-relaxed mt-auto">
                {item.support}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
