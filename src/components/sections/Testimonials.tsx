"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Users, Target } from "lucide-react";

const valuePropositions = [
  {
    quote:
      "We don't hide behind vague promises. Every engagement starts with a clear scope, timeline, and success criteria — agreed before a single line of code is written.",
    label: "Transparent Process",
    icon: Eye,
  },
  {
    quote:
      "Our engineers work as an extension of your team, not as outsiders handing off code. Daily standups, shared repos, your tools, your workflow.",
    label: "Embedded Teams",
    icon: Users,
  },
  {
    quote:
      "We measure success by business outcomes, not billable hours. If the project isn't delivering value, we course-correct — not upsell.",
    label: "Outcome-Focused",
    icon: Target,
  },
];

export default function Testimonials() {
  const sectionAnim = useScrollAnimation("testimonials");

  return (
    <section className="section-padding bg-navy">
      <motion.div {...sectionAnim} className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.1]">
              Principles, not platitudes.
            </h2>
          </div>

          {/* Three value prop cards in a row */}
          <div className="grid md:grid-cols-3 gap-6 mt-14 md:mt-20">
            {valuePropositions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 md:p-10 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-500"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-4xl font-extrabold text-white/[0.08] leading-none">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/[0.08] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary/70" />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-extrabold text-white mb-4">
                    {item.label}
                  </h3>

                  {/* Quote text */}
                  <p className="text-[15px] text-white/55 leading-relaxed">
                    {item.quote}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
