"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  const sectionAnim = useScrollAnimation("techStack");

  return (
    <section className="relative section-padding bg-navy bg-diagonal-grid">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <motion.div {...sectionAnim} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Text */}
          <div>
            <span className="section-label text-primary">
              About Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.08] text-white">
              Built on engineering excellence.{" "}
              <span className="text-white/40">Driven by outcomes.</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
              Enterprise leaders trust TPWITS to architect mission-critical
              systems&nbsp;&mdash; from production-grade AI and cloud-native
              platforms to digital products that scale across industries. We
              don&apos;t just write code. We engineer outcomes.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["ISO 27001", "AWS Partner", "Azure Partner", "SOC 2"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              href="/about"
              className="inline-block mt-10 text-primary hover:text-primary-hover font-semibold transition-colors text-lg"
            >
              Learn more about us &rarr;
            </Link>
          </div>

          {/* Right Column — Photo with glassmorphic frame */}
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-2 hover:border-white/[0.14] transition-colors duration-500">
            <Image
              src="/team-photo.png"
              alt="TPWITS team at a technology conference"
              width={746}
              height={540}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
