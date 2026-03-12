"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "17+", label: "Years on Market" },
  { value: "800+", label: "Engineers" },
  { value: "94%", label: "Client Retention" },
  { value: "4", label: "Global Offices" },
];

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
              17 years of engineering excellence. Built for what&apos;s next.
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
              Enterprise leaders trust TPWITS to architect mission-critical
              systems&nbsp;&mdash; from production-grade AI and cloud-native
              platforms to digital products that scale across industries. We
              don&apos;t just write code. We engineer outcomes.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl md:text-4xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <p className="text-sm text-white/50 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

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
