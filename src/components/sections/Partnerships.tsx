"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { partnerLogos } from "@/components/ui/PartnerLogos";

const certifications = [
  "AWS Advanced Partner",
  "Microsoft Gold",
  "Google Cloud Partner",
  "Salesforce Partner",
];

export default function Partnerships() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our partnerships with industry leaders"
          align="center"
        />

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto mb-14"
        >
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <div className="group flex items-center justify-center max-w-[140px] md:max-w-[160px] mx-auto px-4 py-3 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default text-foreground-muted">
                <partner.Logo className="h-10 w-auto" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certification Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {certifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-border bg-background-alt px-4 py-1.5 text-xs font-medium text-gray-500"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
