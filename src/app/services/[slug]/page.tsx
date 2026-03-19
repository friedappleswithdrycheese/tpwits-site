"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import CTASection from "@/components/sections/CTASection";
import {
  Brain,
  Code2,
  Blocks,
  Shield,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Blocks,
  Shield,
  Compass,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{ backgroundColor: `${service.color}10` }}
          />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${service.color}20` }}
            >
              {Icon && (
                <Icon className="w-8 h-8" style={{ color: service.color }} />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-10">
              What we offer
            </h2>

            <div className="space-y-6">
              {service.subServices.map((sub, index) => (
                <motion.div
                  key={sub.slug}
                  id={sub.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group p-8 rounded-2xl border border-border hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-500 scroll-mt-24"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ backgroundColor: `${service.color}10` }}
                    >
                      <CheckCircle2
                        className="w-5 h-5"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {sub.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why TPWITS */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground mb-4 text-center">
              Why choose TPWITS for {service.title}?
            </h2>
            <p className="text-foreground-muted text-center mb-12 max-w-2xl mx-auto">
              We bring deep domain expertise, proven methodologies, and a relentless focus on outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Deep Expertise",
                  description: `Our team of certified experts has delivered 100+ ${service.title.toLowerCase()} projects across industries.`,
                },
                {
                  title: "Proven Process",
                  description:
                    "Agile delivery with transparent communication, regular demos, and iterative refinement.",
                },
                {
                  title: "Measurable Results",
                  description:
                    "We define success metrics upfront and hold ourselves accountable to delivering real business impact.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {prevService.title}
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                {nextService.title}
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
