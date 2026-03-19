"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/company";
import CTASection from "@/components/sections/CTASection";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Building2,
  Quote,
} from "lucide-react";

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {study.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="font-medium uppercase tracking-wide">
                {study.client}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{study.industry}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Bar */}
      <section className="bg-dark-secondary border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              {
                icon: Building2,
                label: "Industry",
                value: study.industry,
              },
              {
                icon: Clock,
                label: "Timeline",
                value: study.timeline,
              },
              {
                icon: Users,
                label: "Team Size",
                value: study.teamSize,
              },
              {
                icon: Building2,
                label: "Client",
                value: study.client,
              },
            ].map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="py-6 px-6 md:px-8"
              >
                <div className="flex items-center gap-2 mb-1">
                  <detail.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-white/40 uppercase tracking-wide font-medium">
                    {detail.label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white">
                  {detail.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                The Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
                What was at stake
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Our Approach
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                How we delivered
              </h2>
            </motion.div>

            <div className="space-y-6">
              {study.approach.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-border hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-extrabold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Results
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Measurable impact, verified by the client
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {study.results.map((result, index) => {
                const parts = result.match(
                  /^([\d$.%KkMm+]+(?:\s*[%KkMm+]*)?)\s*(.*)$/
                );
                const metric = parts ? parts[1] : result;
                const label = parts ? parts[2] : "";

                return (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center hover:bg-white/[0.06] transition-colors duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-extrabold text-primary mb-3 leading-none">
                      {metric}
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {label || result}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Tech Stack
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
                Technologies we used
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-5 py-2.5 rounded-lg bg-background-alt text-sm font-semibold text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-2 text-primary/15">
                <Quote className="w-20 h-20" />
              </div>
              <div className="relative bg-white rounded-2xl p-10 md:p-14 border border-border">
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {study.testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {study.testimonial.name}
                    </div>
                    <div className="text-sm text-foreground-muted">
                      {study.testimonial.title ? `${study.testimonial.title}, ${study.client}` : study.client}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation between case studies */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {prevStudy ? (
              <Link
                href={`/case-studies/${prevStudy.slug}`}
                className="group flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors max-w-[45%]"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <span className="truncate">{prevStudy.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextStudy ? (
              <Link
                href={`/case-studies/${nextStudy.slug}`}
                className="group flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors text-right max-w-[45%]"
              >
                <span className="truncate">{nextStudy.title}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
