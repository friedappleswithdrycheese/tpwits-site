"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { engagementModels } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, Building2, FileCheck, GitMerge, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Building2,
  FileCheck,
  GitMerge,
};

const descriptionOverrides: Record<string, string> = {
  "Dedicated Team":
    "A hand-picked squad of 5-50 engineers, embedded in your workflows with a dedicated tech lead, weekly sprint reviews, and shared Jira/Confluence governance. Average ramp-up: 2 weeks. 95%+ retention rate across engagements.",
  "Offshore Development Center":
    "Your own engineering hub with dedicated workspace, infrastructure, and hand-selected senior talent. Full HR, IT, and facilities management included. Teams of 15-100+ with ISO 27001-certified operations and sub-4-hour response SLAs.",
  "Fixed Price Projects":
    "Defined scope, milestone-based delivery, and guaranteed budget with no overruns. Includes architecture review, QA, and UAT sign-off at each gate. Ideal for 8-24 week initiatives with clear requirements and compliance mandates.",
};

export default function EngagementModels() {
  const sectionAnim = useScrollAnimation("engagement");

  return (
    <section className="section-padding bg-white dot-pattern">
      <motion.div {...sectionAnim} className="container-custom">
        <SectionHeading
          label="Engagement Models"
          title="How can we engage?"
          description="Three proven delivery models — each with defined governance, escalation paths, and SLAs. Choose the structure that fits your project scope, compliance requirements, and speed-to-market targets."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {engagementModels.slice(0, 3).map((model, index) => {
            const Icon = iconMap[model.icon];
            const isPopular = model.title === "Dedicated Team";
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-8 sm:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-primary/40 shadow-lg shadow-primary/[0.06] ring-1 ring-primary/10"
                    : "border border-border hover:border-neutral-300 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary text-white shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                  isPopular
                    ? "bg-primary/10 border border-primary/20"
                    : "bg-neutral-100 border border-neutral-200"
                }`}>
                  {Icon && (
                    <Icon className={`w-6 h-6 ${isPopular ? "text-primary" : "text-neutral-500"}`} />
                  )}
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed mb-8">
                  {descriptionOverrides[model.title] || model.description}
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                    isPopular
                      ? "text-primary hover:text-primary-hover"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {model.title === "Dedicated Team" ? "Partner with Specialists" :
                   model.title === "Offshore Development Center" ? "Build Your ODC" :
                   model.title === "Fixed Price Projects" ? "Get a Fixed Estimate" :
                   "Get Started"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
