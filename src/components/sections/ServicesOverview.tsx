"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   TPWITS Services Overview — Corporate Card Carousel
   Features: Bold generative SVG patterns with navy backgrounds,
   professional cards, smooth scroll, clean typography
   ══════════════════════════════════════════════════════════════ */

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ── Bold SVG Pattern Components with Navy Backgrounds ── */

// Pattern 1: Concentric Rings
function ConcentricRings() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {[70, 52, 36, 20].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#E8713A"
          strokeWidth={3 - i * 0.5}
          opacity={1 - i * 0.2}
        />
      ))}
      <circle cx="100" cy="100" r="8" fill="#E8713A" />
      {/* Corner accents */}
      <circle cx="30" cy="30" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="170" cy="30" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="30" cy="170" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="170" cy="170" r="3" fill="#E8713A" opacity="0.4" />
    </svg>
  );
}

// Pattern 2: Grid Network
function GridNetwork() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Grid lines */}
      {[50, 100, 150].map((pos, i) => (
        <g key={i}>
          <line x1={pos} y1="30" x2={pos} y2="170" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
          <line x1="30" y1={pos} x2="170" y2={pos} stroke="#E8713A" strokeWidth="1" opacity="0.3" />
        </g>
      ))}
      {/* Intersection nodes */}
      {[50, 100, 150].map((x, i) =>
        [50, 100, 150].map((y, j) => (
          <circle
            key={`${i}-${j}`}
            cx={x}
            cy={y}
            r={x === 100 && y === 100 ? 8 : 4}
            fill="#E8713A"
            opacity={x === 100 && y === 100 ? 1 : 0.6}
          />
        ))
      )}
      {/* Connecting diagonals */}
      <line x1="50" y1="50" x2="100" y2="100" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
      <line x1="150" y1="50" x2="100" y2="100" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
      <line x1="50" y1="150" x2="100" y2="100" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
      <line x1="150" y1="150" x2="100" y2="100" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

// Pattern 3: Hexagon Core
function HexagonCore() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Outer hexagon */}
      <polygon 
        points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="2"
        opacity="0.5"
      />
      {/* Middle hexagon */}
      <polygon 
        points="100,45 150,75 150,125 100,155 50,125 50,75" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="2.5"
        opacity="0.7"
      />
      {/* Inner hexagon - filled */}
      <polygon 
        points="100,70 125,85 125,115 100,130 75,115 75,85" 
        fill="#E8713A" 
        opacity="0.3"
      />
      <polygon 
        points="100,70 125,85 125,115 100,130 75,115 75,85" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="2"
      />
      {/* Center dot */}
      <circle cx="100" cy="100" r="6" fill="#E8713A" />
      {/* Vertex dots */}
      <circle cx="100" cy="25" r="4" fill="#E8713A" opacity="0.6" />
      <circle cx="165" cy="62.5" r="4" fill="#E8713A" opacity="0.6" />
      <circle cx="165" cy="137.5" r="4" fill="#E8713A" opacity="0.6" />
      <circle cx="100" cy="175" r="4" fill="#E8713A" opacity="0.6" />
      <circle cx="35" cy="137.5" r="4" fill="#E8713A" opacity="0.6" />
      <circle cx="35" cy="62.5" r="4" fill="#E8713A" opacity="0.6" />
    </svg>
  );
}

// Pattern 4: Radial Burst
function RadialBurst() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Radial lines */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x2 = 100 + Math.cos(angle) * 75;
        const y2 = 100 + Math.sin(angle) * 75;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="#E8713A"
            strokeWidth={i % 4 === 0 ? 2.5 : 1}
            opacity={i % 4 === 0 ? 0.9 : 0.4}
          />
        );
      })}
      {/* Concentric rings */}
      <circle cx="100" cy="100" r="75" fill="none" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="100" r="25" fill="none" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      {/* Center */}
      <circle cx="100" cy="100" r="10" fill="#E8713A" />
    </svg>
  );
}

// Pattern 5: Wave Layers
function WaveLayers() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Stacked wave paths */}
      <path
        d="M 0 70 Q 50 50 100 70 T 200 70"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2"
        opacity="0.4"
      />
      <path
        d="M 0 90 Q 50 65 100 90 T 200 90"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <path
        d="M 0 110 Q 50 80 100 110 T 200 110"
        fill="none"
        stroke="#E8713A"
        strokeWidth="3"
        opacity="0.9"
      />
      <path
        d="M 0 130 Q 50 105 100 130 T 200 130"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2.5"
        opacity="0.6"
      />
      <path
        d="M 0 150 Q 50 130 100 150 T 200 150"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Accent dots */}
      <circle cx="100" cy="110" r="6" fill="#E8713A" />
      <circle cx="50" cy="90" r="3" fill="#E8713A" opacity="0.7" />
      <circle cx="150" cy="130" r="3" fill="#E8713A" opacity="0.7" />
    </svg>
  );
}

// Pattern 6: Dot Matrix Gradient
function DotMatrixGradient() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: 9 }).map((_, col) => {
          const x = 24 + col * 19;
          const y = 24 + row * 19;
          const distFromCenter = Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2));
          const size = Math.max(2.5, 7 - distFromCenter / 20);
          const opacity = Math.max(0.3, 1 - distFromCenter / 100);
          return (
            <circle
              key={`${row}-${col}`}
              cx={x}
              cy={y}
              r={size}
              fill="#E8713A"
              opacity={opacity}
            />
          );
        })
      )}
    </svg>
  );
}

// Pattern 7: Rotating Squares
function RotatingSquares() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Rotated squares */}
      <rect
        x="40" y="40" width="120" height="120"
        fill="none"
        stroke="#E8713A"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <rect
        x="40" y="40" width="120" height="120"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2"
        opacity="0.5"
        transform="rotate(15 100 100)"
      />
      <rect
        x="40" y="40" width="120" height="120"
        fill="none"
        stroke="#E8713A"
        strokeWidth="2.5"
        opacity="0.7"
        transform="rotate(30 100 100)"
      />
      <rect
        x="40" y="40" width="120" height="120"
        fill="none"
        stroke="#E8713A"
        strokeWidth="3"
        opacity="0.9"
        transform="rotate(45 100 100)"
      />
      {/* Inner square filled */}
      <rect
        x="70" y="70" width="60" height="60"
        fill="#E8713A"
        opacity="0.2"
        transform="rotate(45 100 100)"
      />
      {/* Center dot */}
      <circle cx="100" cy="100" r="8" fill="#E8713A" />
    </svg>
  );
}

// Pattern 8: Triangle Prism
function TrianglePrism() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Outer triangle */}
      <polygon 
        points="100,20 175,160 25,160" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Middle triangle */}
      <polygon 
        points="100,45 155,145 45,145" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="2.5"
        opacity="0.6"
      />
      {/* Inner triangle filled */}
      <polygon 
        points="100,70 135,130 65,130" 
        fill="#E8713A"
        opacity="0.25"
      />
      <polygon 
        points="100,70 135,130 65,130" 
        fill="none" 
        stroke="#E8713A" 
        strokeWidth="3"
        opacity="0.9"
      />
      {/* Vertex dots */}
      <circle cx="100" cy="20" r="5" fill="#E8713A" opacity="0.7" />
      <circle cx="175" cy="160" r="5" fill="#E8713A" opacity="0.7" />
      <circle cx="25" cy="160" r="5" fill="#E8713A" opacity="0.7" />
      {/* Center dot */}
      <circle cx="100" cy="110" r="6" fill="#E8713A" />
    </svg>
  );
}

// Pattern 9: Network Constellation
function NetworkConstellation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="#0B1628" />
      {/* Connection lines */}
      <line x1="100" y1="100" x2="40" y2="40" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="160" y2="40" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="40" y2="160" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="160" y2="160" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="100" y2="30" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="100" y2="170" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="30" y2="100" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="170" y2="100" stroke="#E8713A" strokeWidth="2" opacity="0.6" />
      {/* Secondary connections */}
      <line x1="40" y1="40" x2="100" y2="30" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
      <line x1="160" y1="40" x2="100" y2="30" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="160" x2="100" y2="170" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
      <line x1="160" y1="160" x2="100" y2="170" stroke="#E8713A" strokeWidth="1" opacity="0.3" />
      {/* Outer nodes */}
      <circle cx="40" cy="40" r="6" fill="#E8713A" opacity="0.8" />
      <circle cx="160" cy="40" r="6" fill="#E8713A" opacity="0.8" />
      <circle cx="40" cy="160" r="6" fill="#E8713A" opacity="0.8" />
      <circle cx="160" cy="160" r="6" fill="#E8713A" opacity="0.8" />
      <circle cx="100" cy="30" r="5" fill="#E8713A" opacity="0.7" />
      <circle cx="100" cy="170" r="5" fill="#E8713A" opacity="0.7" />
      <circle cx="30" cy="100" r="5" fill="#E8713A" opacity="0.7" />
      <circle cx="170" cy="100" r="5" fill="#E8713A" opacity="0.7" />
      {/* Center node */}
      <circle cx="100" cy="100" r="12" fill="#E8713A" />
      <circle cx="100" cy="100" r="6" fill="#0B1628" />
    </svg>
  );
}

// Pattern mapping by service index
const patternComponents = [
  ConcentricRings,
  GridNetwork,
  HexagonCore,
  RadialBurst,
  WaveLayers,
  DotMatrixGradient,
  RotatingSquares,
  TrianglePrism,
  NetworkConstellation,
];

export default function ServicesOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <SectionHeading
            label="Our Services"
            title="Services that power growth."
            description="End-to-end technology solutions designed to transform your business and accelerate innovation."
            className="mb-0"
          />

          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex-shrink-0"
            >
              View all services
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Navigation arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-11 h-11 rounded-full border border-border bg-background flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative">
        {/* Fade edges */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        )}

        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
        >
          {services.map((service, index) => {
            const PatternComponent = patternComponents[index % patternComponents.length];

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                custom={index}
                className="group flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] snap-start"
              >
                <div className="relative rounded-xl border border-border bg-background h-full min-h-[440px] flex flex-col overflow-hidden shadow-sm transition-all duration-400 hover:shadow-xl hover:shadow-black/[0.08] hover:border-gray-300">
                  {/* Pattern visual container - now with navy background */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <PatternComponent />
                    </div>
                    {/* Service number badge */}
                    <div className="absolute top-4 left-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                      <span className="text-xs font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 p-6 flex flex-col flex-1 bg-background">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight mb-3">
                      {service.title}
                    </h3>

                    {/* Description snippet */}
                    <p className="text-sm text-foreground-muted leading-relaxed mb-4 line-clamp-2">
                      {service.subServices.slice(0, 3).map(s => s.title).join(", ")}
                      {service.subServices.length > 3 && " and more..."}
                    </p>

                    {/* Sub-services pills */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-4">
                      {service.subServices.slice(0, 3).map((sub) => (
                        <span
                          key={sub.slug}
                          className="inline-flex items-center px-3 py-1.5 rounded-md border border-border bg-background-alt text-xs font-medium text-foreground-muted"
                        >
                          {sub.title}
                        </span>
                      ))}
                      {service.subServices.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-dashed border-border bg-background text-xs text-foreground-subtle">
                          +{service.subServices.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/cta"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="md:hidden flex justify-center mt-6 gap-1.5">
        {services.slice(0, 5).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-300 transition-colors"
          />
        ))}
      </div>
    </section>
  );
}
