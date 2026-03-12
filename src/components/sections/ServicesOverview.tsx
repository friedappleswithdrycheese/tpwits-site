"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/*
 * 4 original tkxel shapes (webp) + 5 new custom shapes (png).
 * All are blue and get recolored to orange via the same CSS filter.
 */
const FILTER = "sepia(1) saturate(2.5) hue-rotate(-10deg) brightness(1.05)";

const shapeConfig: Record<string, string> = {
  Brain:   "/images/services/shape-star.webp",    // 4-pointed sparkle
  Code2:   "/images/services/shape-ring.webp",    // donut ring
  Cloud:   "/images/services/shape-spheres.webp", // 4 spheres
  Blocks:  "/images/services/shape-arc.webp",     // crescent arc
  Shield:  "/images/services/shape-torus.png",    // torus
  Compass: "/images/services/shape-dome.png",     // hemisphere
  Gauge:   "/images/services/shape-chain.png",    // linked rings
  Puzzle:  "/images/services/shape-ripple.png",   // concentric ripple
  Rocket:  "/images/services/shape-cube.png",     // isometric cube
};

export default function ServicesOverview() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
    <section className="section-padding bg-background-alt">
      <div className="container-custom">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <SectionHeading
            label="Our Services"
            title="Services that power growth."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex-shrink-0"
            >
              View all services
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Navigation arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative">
        {/* Fade edges */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background-alt to-transparent" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background-alt to-transparent" />
        )}

        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))]"
        >
          {services.map((service) => {
            const shapeSrc = shapeConfig[service.icon];

            return (
              <div
                key={service.slug}
                className="group flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] lg:w-[420px] snap-start"
              >
                <div className="relative border border-[#1B232E1A] bg-white h-full min-h-[460px] flex flex-col overflow-hidden transition-all duration-300 -ml-px first:ml-0">
                  {/* Abstract shape image */}
                  {shapeSrc && (
                    <div className="absolute -left-[30px] top-[52px] w-[280px] h-[280px] pointer-events-none transition-all duration-[900ms] ease-in-out group-hover:scale-110 group-hover:-left-[10px] group-hover:top-[35px]">
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
                  <div className="relative z-10 p-7 sm:p-8 pb-0 flex flex-col flex-1">
                    {/* Title with white text-shadow for readability */}
                    <h3
                      className="text-[clamp(24px,1.66vw,32px)] font-extrabold text-foreground leading-[1.2] mb-auto"
                      style={{ textShadow: "0 0 12px #fff, 0 0 24px #fff" }}
                    >
                      {service.title}
                    </h3>

                    {/* Sub-services as pills — hidden by default, animate in on hover */}
                    <div className="relative flex flex-wrap gap-[10px] mt-6 max-h-[500px] sm:max-h-0 sm:opacity-0 sm:invisible sm:translate-y-5 sm:group-hover:max-h-[500px] sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:translate-y-0 overflow-hidden transition-all duration-700 ease-in-out">
                      {service.subServices.slice(0, 7).map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-[20px] border border-[#1B232E33] bg-white/90 backdrop-blur-sm text-[1rem] text-foreground-muted hover:border-primary hover:text-primary hover:bg-white transition-all duration-200"
                        >
                          {sub.title}
                        </Link>
                      ))}
                      {service.subServices.length > 7 && (
                        <span className="inline-flex items-center px-4 py-2 rounded-[20px] border border-dashed border-[#1B232E33] bg-white/90 backdrop-blur-sm text-[1rem] text-foreground-subtle">
                          +{service.subServices.length - 7} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA with white fade backdrop */}
                  <div className="relative z-10 px-7 sm:px-8 py-6 bg-gradient-to-t from-white via-white/95 to-white/0">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/cta"
                    >
                      Go to {service.title}
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
