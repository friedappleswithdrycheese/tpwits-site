"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/company";
import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import {
  Heart,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
  Zap,
  Film,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
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

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Industry not found
          </h1>
          <p className="text-foreground-muted mb-8">
            The industry you are looking for does not exist or has been moved.
          </p>
          <Button href="/industries" variant="primary">
            View all industries
          </Button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[industry.icon];

  const currentIndex = industries.findIndex((i) => i.slug === slug);
  const prevIndustry = currentIndex > 0 ? industries[currentIndex - 1] : null;
  const nextIndustry =
    currentIndex < industries.length - 1 ? industries[currentIndex + 1] : null;

  const relatedServiceData = industry.relatedServices
    .map((serviceSlug) => services.find((s) => s.slug === serviceSlug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Industries
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              {Icon && <Icon className="w-8 h-8 text-primary" />}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {industry.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Industry Challenges
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                The problems holding this industry back
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                We understand the unique pressures and constraints that define{" "}
                {industry.title.toLowerCase()}. These are the challenges we help
                our clients overcome.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {industry.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl border border-border hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Our Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                How TPWITS delivers for {industry.title.toLowerCase()}
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                Purpose-built solutions combining deep domain expertise with
                cutting-edge technology to address your most critical challenges.
              </p>
            </motion.div>

            <div className="space-y-6">
              {industry.solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results We Deliver */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Results We Deliver
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Measurable impact, proven outcomes
              </h2>
              <p className="text-foreground-muted max-w-2xl mx-auto">
                We define success metrics upfront and hold ourselves accountable
                to delivering real business impact for every engagement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {industry.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bg-navy p-8 rounded-2xl text-center overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-[60px]" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                      {result.metric}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  Related Services
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Services that power our {industry.title.toLowerCase()}{" "}
                  solutions
                </h2>
                <p className="text-foreground-muted max-w-2xl mx-auto">
                  Our industry solutions draw on deep capabilities across these
                  core service areas.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServiceData.map((service, index) => {
                  if (!service) return null;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="group block bg-white p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 h-full"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <CheckCircle2
                            className="w-6 h-6"
                            style={{ color: service.color }}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore service
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation between industries */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {prevIndustry ? (
              <Link
                href={`/industries/${prevIndustry.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {prevIndustry.title}
              </Link>
            ) : (
              <div />
            )}
            {nextIndustry ? (
              <Link
                href={`/industries/${nextIndustry.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                {nextIndustry.title}
                <ArrowRight className="w-4 h-4" />
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
