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
   TPWITS Services Overview — Premium Card Carousel
   Features: Glass-morphism cards, animated shapes, smooth scroll,
   hover reveals, gradient overlays
   ══════════════════════════════════════════════════════════════ */

/* Shape filter for orange color conversion */
const FILTER = "sepia(1) saturate(2.5) hue-rotate(-10deg) brightness(1.05)";

const shapeConfig: Record<string, string> = {
  Brain: "/images/services/shape-star.webp",
  Code2: "/images/services/shape-ring.webp",
  Cloud: "/images/services/shape-spheres.webp",
  Blocks: "/images/services/shape-arc.webp",
  Shield: "/images/services/shape-torus.png",
  Compass: "/images/services/shape-dome.png",
  Gauge: "/images/services/shape-chain.png",
  Puzzle: "/images/services/shape-ripple.png",
  Rocket: "/images/services/shape-cube.png",
};

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
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(232,113,58,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

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
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))]"
        >
          {services.map((service, index) => {
            const shapeSrc = shapeConfig[service.icon];

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                custom={index}
                className="group flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] lg:w-[420px] snap-start"
              >
                <div className="relative rounded-2xl border border-gray-200/80 bg-white h-full min-h-[480px] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.04] hover:border-gray-300/80 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Abstract shape image */}
                  {shapeSrc && (
                    <div className="absolute -left-[30px] top-[50px] w-[280px] h-[280px] pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-left-[10px] group-hover:top-[35px] group-hover:rotate-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={shapeSrc}
                        alt=""
                        width={302}
                        height={302}
                        className="w-full h-full object-contain"
                        style={{ filter: FILTER }}
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* Card content */}
                  <div className="relative z-10 p-8 pb-0 flex flex-col flex-1">
                    {/* Service number */}
                    <span className="text-xs font-bold text-primary/40 tracking-wider mb-4">
                      0{index + 1}
                    </span>

                    {/* Title with text shadow for readability */}
                    <h3
                      className="text-[clamp(26px,1.8vw,34px)] font-extrabold text-foreground leading-[1.15] tracking-tight mb-auto"
                      style={{ textShadow: "0 0 16px #fff, 0 0 32px #fff" }}
                    >
                      {service.title}
                    </h3>

                    {/* Sub-services pills — animate in on hover */}
                    <div className="relative flex flex-wrap gap-2.5 mt-6 max-h-[500px] sm:max-h-0 sm:opacity-0 sm:invisible sm:translate-y-6 sm:group-hover:max-h-[500px] sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:translate-y-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {service.subServices.slice(0, 6).map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-200 bg-white/95 backdrop-blur-sm text-sm text-foreground-muted hover:border-primary/50 hover:text-primary hover:bg-primary-light transition-all duration-300"
                        >
                          {sub.title}
                        </Link>
                      ))}
                      {service.subServices.length > 6 && (
                        <span className="inline-flex items-center px-4 py-2 rounded-full border border-dashed border-gray-200 bg-white/95 text-sm text-foreground-subtle">
                          +{service.subServices.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="relative z-10 px-8 py-6 mt-auto bg-gradient-to-t from-white via-white/98 to-white/0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/cta"
                    >
                      Explore {service.title}
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
