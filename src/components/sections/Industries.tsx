"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
  ArrowUpRight,
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

export default function Industries() {
  return (
    <section className="section-padding bg-navy dot-pattern-dark">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            label="Industries"
            title="Deep domain expertise across industries."
            description="We bring specialized knowledge to every engagement, building solutions that address the unique challenges and regulatory requirements of your industry."
            className="mb-0"
            dark
          />
          <Link
            href="/industries"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors flex-shrink-0"
          >
            All industries <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block bg-white/[0.05] border border-white/[0.08] rounded-xl p-6 text-center hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/[0.08] border border-primary/[0.1] flex items-center justify-center mx-auto mb-4">
                    {Icon && (
                      <Icon className="w-6 h-6 text-primary/60" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {industry.title}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
