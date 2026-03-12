"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const badges: { svg: React.ReactNode; subtitle: string }[] = [
  {
    subtitle: "America's Fastest Growing Companies",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text
          x="80"
          y="38"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="40"
          fontWeight="700"
          letterSpacing="-1"
        >
          Inc.
        </text>
        <text
          x="80"
          y="68"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="26"
          fontWeight="800"
          letterSpacing="3"
        >
          5000
        </text>
      </svg>
    ),
  },
  {
    subtitle: "2025 Global Recognition",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text
          x="80"
          y="20"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="9"
          fontWeight="700"
          letterSpacing="2"
        >
          TOP
        </text>
        <text
          x="80"
          y="55"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="38"
          fontWeight="900"
          letterSpacing="-1"
        >
          100
        </text>
        <text
          x="80"
          y="72"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="1.5"
        >
          INSPIRING WORKPLACES
        </text>
      </svg>
    ),
  },
  {
    subtitle: "Americas' Fastest Growing",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <text
          x="80"
          y="36"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="2"
        >
          FINANCIAL
        </text>
        <text
          x="80"
          y="60"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="24"
          fontWeight="400"
          fontStyle="italic"
          letterSpacing="1"
        >
          Times
        </text>
        <line x1="20" y1="18" x2="140" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="20" y1="68" x2="140" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    subtitle: "Information Security Certified",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Shield shape */}
        <path
          d="M80 6 L120 18 L120 46 Q120 62 80 76 Q40 62 40 46 L40 18 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <text
          x="80"
          y="36"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="11"
          fontWeight="800"
          letterSpacing="2"
        >
          ISO
        </text>
        <text
          x="80"
          y="56"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="15"
          fontWeight="900"
          letterSpacing="1"
        >
          27001
        </text>
      </svg>
    ),
  },
  {
    subtitle: "Quality Management Certified",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Circle badge */}
        <circle
          cx="80"
          cy="40"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <circle
          cx="80"
          cy="40"
          r="29"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <text
          x="80"
          y="36"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="11"
          fontWeight="800"
          letterSpacing="2"
        >
          ISO
        </text>
        <text
          x="80"
          y="54"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="15"
          fontWeight="900"
          letterSpacing="1"
        >
          9001
        </text>
      </svg>
    ),
  },
  {
    subtitle: "Process Maturity Certified",
    svg: (
      <svg viewBox="0 0 160 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        {/* Rounded rectangle badge */}
        <rect
          x="28"
          y="6"
          width="104"
          height="68"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <rect
          x="34"
          y="12"
          width="92"
          height="56"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <text
          x="80"
          y="36"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="14"
          fontWeight="900"
          letterSpacing="3"
        >
          CMMI
        </text>
        <text
          x="80"
          y="52"
          textAnchor="middle"
          fontFamily="'Arial', 'Helvetica', sans-serif"
          fontSize="9"
          fontWeight="600"
          letterSpacing="1"
        >
          DEV / ML 3
        </text>
      </svg>
    ),
  },
];

export default function Awards() {
  return (
    <section className="section-padding bg-white dot-pattern relative">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="w-6 h-px bg-gray-300" />
            Recognition
            <span className="w-6 h-px bg-gray-300" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            We&apos;ve been recognized by the best,
            <br />
            year after year
          </h2>
        </motion.div>

        {/* Award Badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 max-w-6xl mx-auto"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col items-center justify-start text-center"
            >
              <div className="w-full max-w-[140px] text-gray-700 opacity-40 group-hover:opacity-80 transition-opacity duration-300 mb-3">
                {badge.svg}
              </div>
              <p className="text-[11px] text-foreground-muted font-medium leading-snug max-w-[130px]">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
