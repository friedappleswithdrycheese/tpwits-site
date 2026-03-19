"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

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
      staggerChildren: 0.08,
    },
  },
};

const commitments = [
  {
    title: "Security First",
    description:
      "Every project follows secure development practices. We pursue industry-standard certifications as we grow.",
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous code review, automated testing, and CI/CD pipelines are standard on every engagement.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We invest in our engineers' growth through training, certifications, and knowledge sharing.",
  },
  {
    title: "Client Accountability",
    description:
      "Regular progress reports, transparent billing, and direct access to your engineering team.",
  },
];

export default function Awards() {
  return (
    <section className="section-padding bg-white dot-pattern relative">
      <div className="container-custom">
        {/* Heading */}
        <SectionHeading
          label="Our Standards"
          title="What we commit to on every engagement"
          align="center"
          className="mb-16"
        />

        {/* Commitment Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {commitments.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors duration-300"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                {item.title}
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
