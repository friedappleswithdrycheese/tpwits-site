"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS About/Tech Stack — Premium Company Showcase
   Features: Parallax image, animated stats, gradient text,
   scroll-linked effects
   ══════════════════════════════════════════════════════════════ */

const stats = [
  { value: "800+", label: "Engineers" },
  { value: "17+", label: "Years" },
  { value: "4", label: "Global Offices" },
  { value: "94%", label: "Retention" },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="section-padding bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(232,113,58,0.05) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-white tracking-tight mb-6">
              Built on engineering excellence.{" "}
              <span className="text-white/35">Driven by outcomes.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/55 leading-relaxed max-w-xl mb-10">
              Enterprise leaders trust TPWITS to architect mission-critical
              systems — from production-grade AI and cloud-native
              platforms to digital products that scale across industries. We
              don&apos;t just write code. We engineer outcomes.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-sm font-semibold text-white hover:bg-primary hover:border-primary transition-all duration-300"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column — Photo with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl border border-white/[0.04] -z-10" />
            <div className="absolute -inset-8 rounded-3xl border border-white/[0.02] -z-10" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent z-10 pointer-events-none" />

              <motion.div style={{ y: imageY }}>
                <Image
                  src="/team-photo.png"
                  alt="TPWITS team at a technology conference"
                  width={746}
                  height={540}
                  className="w-full h-auto scale-110"
                />
              </motion.div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 z-20">
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 px-6 py-4 rounded-xl bg-white/[0.06] backdrop-blur-md border border-white/[0.1] z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">17</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Years of Excellence</div>
                  <div className="text-xs text-white/50">Since 2008</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
