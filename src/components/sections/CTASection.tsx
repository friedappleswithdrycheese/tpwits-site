"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS CTA Section — Corporate Conversion Block
   Features: Clean gradient background, professional typography,
   understated design, business-focused messaging
   ══════════════════════════════════════════════════════════════ */

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle gradient accent */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[80%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(232,113,58,0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6"
          >
            Ready to discuss your
            <br />
            <span className="text-white/40">next technology initiative?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl"
          >
            Our leadership team is available to discuss your requirements and
            outline how TPWITS can support your technology objectives.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg" className="group">
              Schedule a meeting
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="/case-studies"
              variant="ghost"
              size="lg"
              className="text-white/60 border border-white/10 hover:bg-white/[0.04] hover:border-white/20 hover:text-white"
            >
              View case studies
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/[0.08]"
          >
            <div className="text-sm">
              <span className="text-white/30 block mb-1">Email</span>
              <a href="mailto:info@tpwits.com" className="text-white/70 hover:text-white transition-colors">
                info@tpwits.com
              </a>
            </div>
            <div className="text-sm">
              <span className="text-white/30 block mb-1">Response time</span>
              <span className="text-white/70">Within 24 business hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
