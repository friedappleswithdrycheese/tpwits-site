"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { engagementModels } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, Building2, FileCheck, GitMerge, ArrowRight, CheckCircle2 } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Engagement Models — Premium Pricing/Partnership Cards
   Features: Feature lists, animated reveals, hover effects,
   gradient accents
   ══════════════════════════════════════════════════════════════ */

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  FileCheck,
  GitMerge,
};

const modelDetails: Record<string, { description: string; features: string[] }> = {
  "Dedicated Team": {
    description:
      "A hand-picked squad of 5-50 engineers, embedded in your workflows with a dedicated tech lead and weekly sprint reviews.",
    features: [
      "Dedicated tech lead",
      "2-week ramp-up",
      "95%+ retention rate",
      "Shared Jira/Confluence",
    ],
  },
  "Offshore Development Center": {
    description:
      "Your own engineering hub with dedicated workspace, infrastructure, and senior talent. Full HR, IT, and facilities included.",
    features: [
      "Teams of 15-100+",
      "ISO 27001 certified",
      "Sub-4-hour response SLA",
      "Full infrastructure",
    ],
  },
  "Fixed Price Projects": {
    description:
      "Defined scope, milestone-based delivery, and guaranteed budget. Includes architecture review and QA at each gate.",
    features: [
      "No budget overruns",
      "Milestone-based delivery",
      "Architecture review",
      "UAT sign-off",
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function EngagementModels() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse, rgba(232,113,58,0.04) 0%, transparent 60%)",
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
            label="Engagement Models"
            title="How can we engage?"
            description="Three proven delivery models with defined governance, escalation paths, and SLAs."
            align="center"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {engagementModels.slice(0, 3).map((model, index) => {
            const Icon = iconMap[model.icon];
            const details = modelDetails[model.title];
            const isPopular = index === 0;

            return (
              <motion.div
                key={model.title}
                variants={cardVariants}
                className="group relative"
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full shadow-lg shadow-primary/25">
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full bg-white border rounded-2xl p-8 transition-all duration-500 ${
                    isPopular
                      ? "border-primary/30 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-black/5"
                  } hover:-translate-y-1`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isPopular
                        ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/15"
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-7 h-7 transition-colors duration-500 ${
                          isPopular ? "text-primary" : "text-gray-500 group-hover:text-gray-700"
                        }`}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl font-bold text-foreground mb-3">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="relative text-sm text-foreground-muted leading-relaxed mb-6">
                    {details?.description || model.description}
                  </p>

                  {/* Features list */}
                  {details?.features && (
                    <ul className="relative space-y-3 mb-8">
                      {details.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground-muted">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 ${
                              isPopular ? "text-primary" : "text-gray-400"
                            }`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`relative inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                        : "bg-gray-100 text-foreground hover:bg-gray-200"
                    }`}
                  >
                    {model.title === "Dedicated Team"
                      ? "Partner with Specialists"
                      : model.title === "Offshore Development Center"
                      ? "Build Your ODC"
                      : "Get a Fixed Estimate"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
