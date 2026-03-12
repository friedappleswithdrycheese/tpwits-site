"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services, engagementModels } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import {
  Brain,
  Code2,
  Cloud,
  Blocks,
  Shield,
  Compass,
  Gauge,
  Puzzle,
  Rocket,
  ArrowRight,
  Users,
  Building2,
  FileCheck,
  GitMerge,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Cloud,
  Blocks,
  Shield,
  Compass,
  Gauge,
  Puzzle,
  Rocket,
  Users,
  Building2,
  FileCheck,
  GitMerge,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              End-to-end technology services that scale.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              From AI strategy to cloud infrastructure, cybersecurity to Web3
              innovation — we deliver the full spectrum of technology services
              your business needs to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Service Header */}
                    <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        {Icon && (
                          <Icon
                            className="w-7 h-7"
                            style={{ color: service.color }}
                          />
                        )}
                      </div>
                      <h2 className="text-3xl font-extrabold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-foreground-muted leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                      >
                        Explore {service.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Sub-services */}
                    <div className="lg:w-2/3">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.subServices.map((sub, subIndex) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${service.slug}#${sub.slug}`}
                            className="group p-5 rounded-xl border border-border hover:border-transparent hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                              {sub.title}
                            </h4>
                            <p className="text-xs text-foreground-subtle leading-relaxed">
                              {sub.description.slice(0, 100)}...
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < services.length - 1 && (
                    <hr className="mt-24 border-border" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <SectionHeading
            label="Engagement Models"
            title="Flexible ways to work together."
            description="Choose the engagement model that best fits your project requirements and organizational needs."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {engagementModels.map((model, index) => {
              const Icon = iconMap[model.icon];
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-7 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {model.description.slice(0, 80)}...
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
