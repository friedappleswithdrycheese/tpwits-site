"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Deep domain expertise across industries.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              We bring industry-specific knowledge and proven frameworks to every
              engagement, ensuring solutions that address your unique challenges
              and regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon];
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="group p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      {Icon && (
                        <Icon className="w-7 h-7 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
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
