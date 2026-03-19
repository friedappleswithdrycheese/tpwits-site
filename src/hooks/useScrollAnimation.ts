"use client";
import { useReducedMotion } from "framer-motion";

type SectionName =
  | "hero" | "ai" | "services" | "stats" | "caseStudies"
  | "awards" | "techStack" | "engagement" | "industries"
  | "partnerships" | "insights" | "testimonials" | "contact";

// Returns framer-motion props to spread on motion.div: <motion.div {...anim}>
export function useScrollAnimation(section: SectionName) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return {
      initial: undefined,
      whileInView: undefined,
      viewport: undefined,
      transition: undefined,
    };
  }

  const configs: Record<SectionName, object> = {
    hero: {}, // Hero uses CSS-only animation, not this hook
    ai: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    services: {
      initial: { opacity: 0, x: -30 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    stats: {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    caseStudies: {
      initial: { opacity: 0, x: 40 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    awards: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    techStack: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.1 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    engagement: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 },
    },
    industries: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true, amount: 0.1 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    partnerships: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    insights: {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    testimonials: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    contact: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return configs[section] || configs.contact;
}
