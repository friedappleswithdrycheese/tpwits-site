"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Video, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

type InsightType = "whitepaper" | "webinar" | "article";

interface Insight {
  type: InsightType;
  title: string;
  description: string;
}

const insights: Insight[] = [
  {
    type: "whitepaper",
    title: "The CTO's Playbook for Enterprise AI Adoption in 2026",
    description:
      "A decision framework drawn from 40+ enterprise AI deployments — covering model selection, governance, ROI measurement, and the organizational changes that separate pilot projects from production impact.",
  },
  {
    type: "webinar",
    title: "Agentic AI in the Enterprise: From Experimentation to Production",
    description:
      "Our AI architects break down how three Fortune 500 companies moved autonomous AI agents from proof-of-concept to full-scale operations — and the governance models that made it possible.",
  },
  {
    type: "article",
    title: "Why 73% of Cloud Migrations Overshoot Budget — And How to Fix It",
    description:
      "An analysis of the most common cloud cost traps across AWS, Azure, and GCP, with a FinOps framework that has helped our clients reclaim an average of 35% in wasted cloud spend.",
  },
  {
    type: "whitepaper",
    title: "Digital Transformation Maturity: A Benchmarking Framework for 2026",
    description:
      "Benchmark your organization against industry leaders across five dimensions of digital maturity. Includes diagnostic tools, capability scorecards, and a prioritized transformation roadmap.",
  },
  {
    type: "webinar",
    title: "Legacy Modernization Without the Business Disruption",
    description:
      "A technical deep dive into the strangler fig pattern, domain-driven decomposition, and incremental migration strategies that enabled a Fortune 500 retailer to modernize with zero downtime.",
  },
  {
    type: "article",
    title:
      "Building High-Performance Offshore Engineering Teams: Lessons from 800+ Engineers",
    description:
      "What 17 years of scaling distributed teams across four global offices taught us about hiring, retention, code quality governance, and maintaining engineering velocity at scale.",
  },
];

const typeLabels: Record<InsightType, string> = {
  whitepaper: "Whitepaper",
  webinar: "Webinar",
  article: "Article",
};

const typeIcons: Record<InsightType, React.ReactNode> = {
  whitepaper: <FileText className="w-4 h-4" />,
  webinar: <Video className="w-4 h-4" />,
  article: <BookOpen className="w-4 h-4" />,
};

const typeCTA: Record<InsightType, string> = {
  whitepaper: "Download",
  webinar: "Watch now",
  article: "Read article",
};

const filters = ["all", "whitepaper", "webinar", "article"] as const;
type FilterType = (typeof filters)[number];

const filterLabels: Record<FilterType, string> = {
  all: "All",
  whitepaper: "Whitepapers",
  webinar: "Webinars",
  article: "Articles",
};

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredInsights =
    activeFilter === "all"
      ? insights
      : insights.filter((i) => i.type === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Insights &amp; Resources
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Research, frameworks, and field-tested strategies from our work
              with Fortune 500 enterprises and high-growth technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-background-alt text-foreground-muted hover:bg-gray-200 hover:text-foreground"
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Header with type icon */}
                <div className="flex items-center gap-2 px-6 pt-6 pb-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/8 px-3 py-1.5 rounded-full">
                    {typeIcons[insight.type]}
                    {typeLabels[insight.type]}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                    {insight.title}
                  </h3>

                  <p className="text-sm text-foreground-muted leading-relaxed mb-6 flex-1">
                    {insight.description}
                  </p>

                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover hover:underline underline-offset-4 transition-colors group/link"
                  >
                    {typeCTA[insight.type]}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty state */}
          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <p className="text-foreground-muted text-lg">
                No resources found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom text-center">
          <SectionHeading
            label="Stay Updated"
            title="Subscribe to our newsletter."
            description="Get the latest insights on AI, cloud, cybersecurity, and digital transformation delivered to your inbox."
            align="center"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <button className="w-full sm:w-auto px-7 py-3.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
