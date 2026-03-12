"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={clsx(
            "section-label",
            dark ? "text-primary/80" : "text-primary",
            align === "center" && "justify-center"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight",
          dark ? "text-white" : "text-foreground",
          align === "center" && "max-w-3xl mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-lg leading-relaxed max-w-2xl",
            dark ? "text-white/60" : "text-foreground-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
