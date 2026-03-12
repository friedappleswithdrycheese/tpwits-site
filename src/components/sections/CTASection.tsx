"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background: orange -> darker orange -> dark navy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #E8713A 0%, #C85A28 40%, #0A0A0A 100%)",
        }}
      />
      {/* Subtle radial highlights */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Power your next digital move.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/70 leading-relaxed mb-10"
          >
            Whether you need AI expertise, cloud infrastructure, or a full
            digital transformation, our team is ready to help you build
            what&apos;s next.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact" variant="white" size="lg">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/case-studies"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/20 hover:bg-white/10 hover:text-white"
            >
              View Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
