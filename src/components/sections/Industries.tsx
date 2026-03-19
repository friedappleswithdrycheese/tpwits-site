"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  const sectionAnim = useScrollAnimation("industries");

  return (
    <section className="relative section-padding bg-navy">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,113,58,0.03)_0%,_transparent_70%)] pointer-events-none" />
      <motion.div {...sectionAnim} className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
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
                  className="group relative block bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-7 md:p-8 text-center hover:bg-white/[0.07] hover:border-primary/20 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-primary/[0.12] border border-primary/[0.15] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.18] group-hover:border-primary/[0.25] transition-colors duration-300">
                      {Icon && (
                        <Icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
