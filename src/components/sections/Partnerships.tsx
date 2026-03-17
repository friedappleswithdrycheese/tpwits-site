"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { partnerLogos } from "@/components/ui/PartnerLogos";
import { Shield, Award, CheckCircle } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Partnerships — Premium Partner Showcase
   Features: Interactive logo grid, certification badges,
   animated reveals, hover effects
   ══════════════════════════════════════════════════════════════ */

const certifications = [
  { name: "AWS Advanced Partner", icon: Shield },
  { name: "Microsoft Gold", icon: Award },
  { name: "Google Cloud Partner", icon: CheckCircle },
  { name: "Salesforce Partner", icon: Shield },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(232,113,58,0.03) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            label="Partnerships"
            title="Our partnerships with industry leaders"
            description="Strategic alliances with the world's leading technology providers."
            align="center"
          />
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-14"
        >
          {partnerLogos.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:border-gray-200 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1">
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-center justify-center h-12 opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 text-foreground-muted">
                  <partner.Logo className="h-10 w-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 transition-all duration-300 hover:border-primary/30 hover:bg-primary-light cursor-default"
              >
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-foreground transition-colors">
                  {cert.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
