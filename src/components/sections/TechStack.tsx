"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TechStack() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label text-primary uppercase tracking-wide font-bold">
              ABOUT US
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white">
              Built on engineering excellence.{" "}
              <span className="text-white/40">Driven by outcomes.</span>
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
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
          </motion.div>

          {/* Right Column — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <Image
              src="/team-photo.png"
              alt="TPWITS team at a technology conference"
              width={746}
              height={540}
              className="rounded-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
