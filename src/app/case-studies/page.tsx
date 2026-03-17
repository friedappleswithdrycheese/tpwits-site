"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/company";
import CTASection from "@/components/sections/CTASection";
import { ArrowUpRight } from "lucide-react";

const ACCENT_COLORS = ["#E8713A", "#8B5CF6", "#10B981", "#3B82F6", "#F59E0B", "#EC4899"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const industries = useMemo(() => {
    const unique = Array.from(new Set(caseStudies.map((s: any) => s.industry)));
    return ["All", ...unique];
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeFilter === "All") return caseStudies;
    return caseStudies.filter((s: any) => s.industry === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Real results from real partnerships.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Explore how we&apos;ve helped businesses across industries transform
              with technology. Each story showcases measurable impact and
              lasting partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-12 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`rounded-full text-sm font-semibold px-5 py-2 transition-colors ${
                  activeFilter === industry
                    ? "bg-primary text-white"
                    : "bg-background-alt text-foreground-muted hover:text-foreground"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredStudies.map((study: any, index: number) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              >
                <Link href={`/case-studies/${study.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-transparent hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 h-full block">
                  {/* Image */}
                  <div className="relative h-56 bg-gradient-to-br from-dark to-dark-secondary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 50%, ${ACCENT_COLORS[index % ACCENT_COLORS.length]} 0%, transparent 50%)`,
                      }}
                    />
                    <div className="absolute bottom-4 left-6 z-20 flex gap-2">
                      {study.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      {study.industry} — {study.client}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {study.results.map((result: string) => (
                        <div
                          key={result}
                          className="text-xs font-semibold text-foreground bg-background-alt px-3 py-1.5 rounded-lg"
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
