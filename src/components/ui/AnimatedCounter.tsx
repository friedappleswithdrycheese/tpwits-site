"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  dark?: boolean;
}

export default function AnimatedCounter({
  value,
  label,
  dark = false,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9]/g, "");
    const target = parseInt(numericPart);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setDisplayValue(current + suffix);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center lg:text-left"
    >
      <div
        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {displayValue}
      </div>
      <div className="w-10 h-0.5 bg-primary/40 rounded-full mt-3 mb-2 mx-auto lg:mx-0" />
      <div
        className={`text-xs font-semibold uppercase tracking-[0.15em] ${
          dark ? "text-gray-400" : "text-foreground-muted"
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
}
