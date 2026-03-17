"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS CTA Section — Premium Conversion Block
   Features: Animated gradient background, floating particles,
   glass morphism elements, compelling copy
   ══════════════════════════════════════════════════════════════ */

/* Floating Particles Background */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Larger glowing orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          right: "15%",
          bottom: "30%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #E8713A 0%, #D4612A 30%, #0A0A0A 100%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 50% at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white/90">
              Ready to transform your business?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Power your next
            <br />
            <span className="relative">
              <span className="relative z-10">digital move.</span>
              {/* Underline decoration */}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Whether you need AI expertise, cloud infrastructure, or a full
            digital transformation, our team is ready to help you build
            what&apos;s next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" variant="white" size="lg" className="group shadow-xl shadow-black/20">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="/case-studies"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white backdrop-blur-sm"
            >
              View Case Studies
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Expert consultation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
