"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* Heading */}
        <SectionHeading
          label="Recognition"
          title="We've been recognized by the best, year after year"
          align="center"
          className="mb-16 md:mb-20"
        />

        {/* Award Badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-start text-center p-6 rounded-2xl bg-background hover:bg-background-alt border border-transparent hover:border-border/50 transition-all duration-300"
            >
              {/* Badge container with glow effect */}
              <div className="relative w-full max-w-[140px] mb-4">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badge SVG */}
                <div className="relative text-foreground opacity-30 group-hover:opacity-70 transition-all duration-500 group-hover:scale-105 transform">
                  {badge.svg}
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-xs text-foreground-muted font-medium leading-relaxed max-w-[130px] group-hover:text-foreground transition-colors duration-300">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
