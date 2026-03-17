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
   Features: Consistent generative SVG patterns, professional cards,
   smooth scroll, clean typography
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

/* ── Consistent SVG Pattern Components ── */

// Pattern 1: Concentric Circles
function ConcentricCircles() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[80, 60, 40, 20].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#circleGrad)"
          strokeWidth={2 - i * 0.3}
          opacity={1 - i * 0.15}
        />
      ))}
      <circle cx="100" cy="100" r="6" fill="#E8713A" opacity="0.6" />
    </svg>
  );
}

// Pattern 2: Grid Network
function GridNetwork() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[40, 80, 120, 160].map((pos, i) => (
        <g key={i}>
          <line x1={pos} y1="20" x2={pos} y2="180" stroke="url(#gridGrad)" strokeWidth="1" />
          <line x1="20" y1={pos} x2="180" y2={pos} stroke="url(#gridGrad)" strokeWidth="1" />
        </g>
      ))}
      {/* Nodes */}
      {[40, 80, 120, 160].map((x, i) =>
        [40, 80, 120, 160].map((y, j) => (
          <circle
            key={`${i}-${j}`}
            cx={x}
            cy={y}
            r={(i + j) % 3 === 0 ? 4 : 2}
            fill="#E8713A"
            opacity={(i + j) % 3 === 0 ? 0.5 : 0.2}
          />
        ))
      )}
    </svg>
  );
}

// Pattern 3: Hexagon Mesh
function HexagonMesh() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Hexagon paths */}
      <path d="M100 30 L150 60 L150 120 L100 150 L50 120 L50 60 Z" fill="none" stroke="url(#hexGrad)" strokeWidth="2" />
      <path d="M100 50 L135 72 L135 108 L100 130 L65 108 L65 72 Z" fill="none" stroke="url(#hexGrad)" strokeWidth="1.5" />
      <path d="M100 70 L120 84 L120 96 L100 110 L80 96 L80 84 Z" fill="none" stroke="url(#hexGrad)" strokeWidth="1" />
      <circle cx="100" cy="90" r="5" fill="#E8713A" opacity="0.5" />
      {/* Corner accents */}
      <circle cx="100" cy="30" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="150" cy="60" r="3" fill="#E8713A" opacity="0.3" />
      <circle cx="150" cy="120" r="3" fill="#E8713A" opacity="0.3" />
      <circle cx="100" cy="150" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="50" cy="120" r="3" fill="#E8713A" opacity="0.3" />
      <circle cx="50" cy="60" r="3" fill="#E8713A" opacity="0.3" />
    </svg>
  );
}

// Pattern 4: Radial Lines
function RadialLines() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="radialGrad" x1="50%" y1="50%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x2 = 100 + Math.cos(angle) * 80;
        const y2 = 100 + Math.sin(angle) * 80;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="url(#radialGrad)"
            strokeWidth={i % 3 === 0 ? 2 : 1}
            opacity={i % 3 === 0 ? 0.6 : 0.3}
          />
        );
      })}
      <circle cx="100" cy="100" r="8" fill="none" stroke="#E8713A" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="100" r="4" fill="#E8713A" opacity="0.6" />
    </svg>
  );
}

// Pattern 5: Wave Lines
function WaveLines() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.02" />
          <stop offset="50%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[60, 80, 100, 120, 140].map((y, i) => (
        <path
          key={i}
          d={`M 20 ${y} Q 60 ${y - 15 + i * 3} 100 ${y} T 180 ${y}`}
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth={2 - i * 0.2}
          opacity={1 - i * 0.12}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="#E8713A" opacity="0.5" />
    </svg>
  );
}

// Pattern 6: Dot Matrix
function DotMatrix() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const x = 35 + col * 22;
          const y = 35 + row * 22;
          const distFromCenter = Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2));
          const size = Math.max(2, 5 - distFromCenter / 30);
          const opacity = Math.max(0.15, 0.6 - distFromCenter / 120);
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

// Pattern 7: Nested Squares
function NestedSquares() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="squareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[70, 50, 30, 15].map((size, i) => (
        <rect
          key={i}
          x={100 - size}
          y={100 - size}
          width={size * 2}
          height={size * 2}
          fill="none"
          stroke="url(#squareGrad)"
          strokeWidth={2 - i * 0.3}
          opacity={1 - i * 0.15}
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="#E8713A" opacity="0.5" />
    </svg>
  );
}

// Pattern 8: Triangle Mesh
function TriangleMesh() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <polygon points="100,30 160,140 40,140" fill="none" stroke="url(#triGrad)" strokeWidth="2" />
      <polygon points="100,50 145,130 55,130" fill="none" stroke="url(#triGrad)" strokeWidth="1.5" />
      <polygon points="100,70 130,120 70,120" fill="none" stroke="url(#triGrad)" strokeWidth="1" />
      <circle cx="100" cy="30" r="3" fill="#E8713A" opacity="0.4" />
      <circle cx="160" cy="140" r="3" fill="#E8713A" opacity="0.3" />
      <circle cx="40" cy="140" r="3" fill="#E8713A" opacity="0.3" />
      <circle cx="100" cy="95" r="5" fill="#E8713A" opacity="0.5" />
    </svg>
  );
}

// Pattern 9: Connection Nodes
function ConnectionNodes() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Connection lines */}
      <line x1="100" y1="100" x2="50" y2="50" stroke="url(#connGrad)" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="150" y2="50" stroke="url(#connGrad)" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="50" y2="150" stroke="url(#connGrad)" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="150" y2="150" stroke="url(#connGrad)" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="100" y2="35" stroke="url(#connGrad)" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="100" y2="165" stroke="url(#connGrad)" strokeWidth="1.5" />
      {/* Nodes */}
      <circle cx="100" cy="100" r="8" fill="#E8713A" opacity="0.5" />
      <circle cx="50" cy="50" r="4" fill="#E8713A" opacity="0.4" />
      <circle cx="150" cy="50" r="4" fill="#E8713A" opacity="0.4" />
      <circle cx="50" cy="150" r="4" fill="#E8713A" opacity="0.4" />
      <circle cx="150" cy="150" r="4" fill="#E8713A" opacity="0.4" />
      <circle cx="100" cy="35" r="4" fill="#E8713A" opacity="0.4" />
      <circle cx="100" cy="165" r="4" fill="#E8713A" opacity="0.4" />
    </svg>
  );
}

// Pattern mapping by service index
const patternComponents = [
  ConcentricCircles,
  GridNetwork,
  HexagonMesh,
  RadialLines,
  WaveLines,
  DotMatrix,
  NestedSquares,
  TriangleMesh,
  ConnectionNodes,
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
    <section ref={sectionRef} className="section-padding bg-background-alt relative overflow-hidden">
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
                className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
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
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background-alt to-transparent" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background-alt to-transparent" />
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
                <div className="relative rounded-xl border border-gray-200 bg-white h-full min-h-[420px] flex flex-col overflow-hidden transition-all duration-400 hover:shadow-lg hover:shadow-black/[0.04] hover:border-gray-300">
                  {/* Pattern visual container */}
                  <div className="relative h-40 bg-gray-50 overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-700 group-hover:scale-110">
                      <div className="w-32 h-32">
                        <PatternComponent />
                      </div>
                    </div>
                    {/* Service number */}
                    <span className="absolute top-4 left-4 text-xs font-bold text-primary/50 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="relative z-10 p-6 flex flex-col flex-1">
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
                          className="inline-flex items-center px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-xs font-medium text-foreground-muted"
                        >
                          {sub.title}
                        </span>
                      ))}
                      {service.subServices.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-dashed border-gray-200 bg-white text-xs text-foreground-subtle">
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
