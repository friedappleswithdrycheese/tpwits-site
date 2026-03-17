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
   Features: Elegant generative SVG patterns with higher opacity,
   professional cards, staggered bottom-up animation
   ══════════════════════════════════════════════════════════════ */

/* Animation Variants - Staggered bottom-up reveal */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ── Elegant SVG Pattern Components with higher opacity ── */

// Pattern 1: Concentric Circles
function ConcentricCircles() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="cc-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#cc-grad)" />
      {[80, 60, 40, 20].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="#E8713A"
          strokeWidth={1.5}
          opacity={0.65 - i * 0.1}
        />
      ))}
      <circle cx="100" cy="100" r="6" fill="#E8713A" opacity="0.85" />
    </svg>
  );
}

// Pattern 2: Grid Network
function GridNetwork() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="gn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="160" height="160" fill="url(#gn-grad)" rx="4" />
      {[60, 100, 140].map((pos, i) => (
        <g key={i}>
          <line x1={pos} y1="20" x2={pos} y2="180" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
          <line x1="20" y1={pos} x2="180" y2={pos} stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}
      {[60, 100, 140].map((x, i) =>
        [60, 100, 140].map((y, j) => (
          <circle key={`${i}-${j}`} cx={x} cy={y} r={x === 100 && y === 100 ? 6 : 4} fill="#E8713A" opacity={0.75} />
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
        <linearGradient id="hm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="url(#hm-grad)" />
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.6" />
      <polygon points="100,50 145,75 145,125 100,150 55,125 55,75" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
      <polygon points="100,75 122,88 122,112 100,125 78,112 78,88" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="100" r="5" fill="#E8713A" opacity="0.8" />
    </svg>
  );
}

// Pattern 4: Radial Lines
function RadialLines() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="rl-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#rl-grad)" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x2 = 100 + Math.cos(angle) * 80;
        const y2 = 100 + Math.sin(angle) * 80;
        return (
          <line key={i} x1="100" y1="100" x2={x2} y2={y2} stroke="#E8713A" strokeWidth="1.5" opacity={0.5} />
        );
      })}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="100" r="35" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="6" fill="#E8713A" opacity="0.8" />
    </svg>
  );
}

// Pattern 5: Wave Lines
function WaveLines() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="wl-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#E8713A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#wl-grad)" />
      {[50, 80, 110, 140].map((y, i) => (
        <path
          key={i}
          d={`M 0 ${y} Q 50 ${y - 20 + i * 5} 100 ${y} T 200 ${y}`}
          fill="none"
          stroke="#E8713A"
          strokeWidth={2}
          opacity={0.55 - i * 0.08}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="#E8713A" opacity="0.7" />
    </svg>
  );
}

// Pattern 6: Dot Matrix
function DotMatrix() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="dm-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#dm-grad)" />
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const x = 35 + col * 22;
          const y = 35 + row * 22;
          const distFromCenter = Math.sqrt(Math.pow(x - 100, 2) + Math.pow(y - 100, 2));
          const size = Math.max(3, 5.5 - distFromCenter / 30);
          return (
            <circle
              key={`${row}-${col}`}
              cx={x}
              cy={y}
              r={size}
              fill="#E8713A"
              opacity={0.7 - distFromCenter / 200}
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
        <linearGradient id="ns-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect x="25" y="25" width="150" height="150" fill="url(#ns-grad)" rx="4" />
      {[0, 20, 40, 60].map((offset, i) => (
        <rect
          key={i}
          x={25 + offset}
          y={25 + offset}
          width={150 - offset * 2}
          height={150 - offset * 2}
          fill="none"
          stroke="#E8713A"
          strokeWidth={1.5}
          opacity={0.6 - i * 0.1}
          rx={4 - i}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="#E8713A" opacity="0.75" />
    </svg>
  );
}

// Pattern 8: Triangle Mesh
function TriangleMesh() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="tm-grad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <polygon points="100,15 185,170 15,170" fill="url(#tm-grad)" />
      <polygon points="100,15 185,170 15,170" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <polygon points="100,50 155,145 45,145" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.45" />
      <polygon points="100,80 130,125 70,125" fill="none" stroke="#E8713A" strokeWidth="1.5" opacity="0.35" />
      <circle cx="100" cy="110" r="5" fill="#E8713A" opacity="0.75" />
    </svg>
  );
}

// Pattern 9: Connection Nodes
function ConnectionNodes() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="cn-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8713A" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#E8713A" stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="85" fill="url(#cn-grad)" />
      {/* Connection lines */}
      <line x1="100" y1="100" x2="50" y2="50" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <line x1="100" y1="100" x2="150" y2="50" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <line x1="100" y1="100" x2="50" y2="150" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <line x1="100" y1="100" x2="150" y2="150" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <line x1="100" y1="100" x2="100" y2="35" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      <line x1="100" y1="100" x2="100" y2="165" stroke="#E8713A" strokeWidth="1.5" opacity="0.55" />
      {/* Outer nodes */}
      <circle cx="50" cy="50" r="7" fill="#E8713A" opacity="0.7" />
      <circle cx="150" cy="50" r="7" fill="#E8713A" opacity="0.7" />
      <circle cx="50" cy="150" r="7" fill="#E8713A" opacity="0.7" />
      <circle cx="150" cy="150" r="7" fill="#E8713A" opacity="0.7" />
      <circle cx="100" cy="35" r="6" fill="#E8713A" opacity="0.6" />
      <circle cx="100" cy="165" r="6" fill="#E8713A" opacity="0.6" />
      {/* Center node */}
      <circle cx="100" cy="100" r="9" fill="#E8713A" opacity="0.8" />
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
                className="group flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] snap-start"
              >
                <div className="relative rounded-xl border border-border bg-background h-full min-h-[420px] flex flex-col overflow-hidden shadow-sm transition-all duration-400 hover:shadow-lg hover:shadow-black/[0.06] hover:border-gray-200">
                  {/* Pattern visual container */}
                  <div className="relative h-44 bg-gray-50 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <PatternComponent />
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

                    {/* CTA Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile scroll hint */}
      <div className="md:hidden flex justify-center mt-6">
        <div className="flex items-center gap-1.5 text-xs text-foreground-subtle">
          <span>Scroll to explore</span>
          <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
