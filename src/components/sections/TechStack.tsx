"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TechStack() {
  const sectionAnim = useScrollAnimation("techStack");

  return (
    <section className="section-padding bg-navy bg-diagonal-grid">
      <motion.div {...sectionAnim} className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Text */}
          <div>
            <span className="section-label text-primary/80">
              About Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              Built on engineering excellence.{" "}
              <span className="text-white/40">Driven by outcomes.</span>
            </h2>

            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-xl">
              Enterprise leaders trust TPWITS to architect mission-critical
              systems&nbsp;&mdash; from production-grade AI and cloud-native
              platforms to digital products that scale across industries. We
              don&apos;t just write code. We engineer outcomes.
            </p>

            {/* CTA Link */}
            <Link
              href="/about"
              className="inline-block mt-10 text-primary hover:text-primary-hover font-semibold transition-colors"
            >
              Learn more about us &rarr;
            </Link>
          </div>

          {/* Right Column — Photo */}
          <div className="border border-white/[0.08] rounded-2xl overflow-hidden">
            <Image
              src="/team-photo.png"
              alt="TPWITS team at a technology conference"
              width={746}
              height={540}
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
