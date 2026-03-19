"use client";

import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/Visuals";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    thesis: "We don\u2019t ship fast. We ship right \u2014 then we ship fast.",
    support:
      "When our work is done, your teams move faster, your costs drop, and nobody talks about the infrastructure. That's the point.",
  },
];

export default function AISection() {
  const sectionAnim = useScrollAnimation("ai");

  return (
    <section className="relative overflow-hidden bg-navy bg-dot-grid">
      <GridPattern className="opacity-10" />
      {/* Subtle gradient overlay to break up the dark void */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      <motion.div {...sectionAnim} className="container-custom section-padding relative z-10">
        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-6">
          What We Believe
        </p>

        {/* Section intro */}
        <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] max-w-2xl mb-12 sm:mb-16 md:mb-28">
          We don&apos;t sell services.{" "}
          <span className="text-white/40">We sell homework.</span>
        </h2>

        {/* Three conviction cards — orange accent border-left on the container */}
        <div className="border-l-[3px] border-l-primary/60 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-r-2xl overflow-hidden">
            {convictions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/[0.03] backdrop-blur-sm border-t border-t-white/[0.06] p-8 sm:p-10 md:p-14 flex flex-col hover:bg-white/[0.05] transition-colors duration-500"
              >
                {/* Number */}
                <span className="text-base font-extrabold tracking-[0.2em] text-primary/50 mb-8">
                  0{i + 1}
                </span>

                {/* Thesis — the bold statement */}
                <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-extrabold text-white leading-snug mb-6">
                  &ldquo;{item.thesis}&rdquo;
                </h3>

                {/* Supporting line */}
                <p className="text-[15px] text-white/55 leading-relaxed mt-auto">
                  {item.support}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
