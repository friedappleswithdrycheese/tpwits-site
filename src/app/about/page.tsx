"use client";

import { motion } from "framer-motion";
import { companyInfo, companyStats } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";
import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  MessageSquare,
  Heart,
  TrendingUp,
  MapPin,
} from "lucide-react";

const valueIcons: Record<string, React.ElementType> = {
  "Engineering Excellence": Award,
  "Client Partnership": Users,
  "Innovation First": Lightbulb,
  "Radical Transparency": MessageSquare,
  "People-Centric Culture": Heart,
  "Impactful Outcomes": TrendingUp,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
              About TPWITS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Engineering tomorrow&apos;s digital reality.
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-custom">
          <div className="stats-grid max-w-4xl mx-auto">
            {companyStats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl bg-background-alt"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground-muted leading-relaxed">{companyInfo.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-2xl bg-navy"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">{companyInfo.vision}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background-alt">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="What drives us forward."
            description="The principles that guide every decision, every engagement, and every line of code."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {companyInfo.values.map((value, index) => {
              const Icon = valueIcons[value.title] || Award;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-8 rounded-2xl"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Global Presence"
            title="Where we operate."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyInfo.offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {office.city}
                </h3>
                <p className="text-sm text-foreground-muted">{office.country}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {office.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-background-alt">
        <div className="container-custom">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted mb-8">
            Our partnerships with industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {companyInfo.partners.map((partner) => (
              <div
                key={partner}
                className="text-sm font-bold text-gray-300 hover:text-primary transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
