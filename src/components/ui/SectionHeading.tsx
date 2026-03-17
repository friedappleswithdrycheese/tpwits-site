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
  size?: "default" | "large" | "small";
}

const labelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
  }
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
  className,
  size = "default",
}: SectionHeadingProps) {
  const titleSizeClasses = {
    small: "text-2xl md:text-3xl lg:text-4xl",
    default: "text-3xl md:text-4xl lg:text-5xl",
    large: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <motion.span
          variants={labelVariants}
          className={clsx(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] mb-5",
            dark 
              ? "bg-white/[0.06] text-primary/90 border border-white/[0.08]" 
              : "bg-primary/[0.08] text-primary border border-primary/10",
            align === "center" && "mx-auto"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={titleVariants}
        className={clsx(
          titleSizeClasses[size],
          "font-extrabold leading-[1.1] tracking-tight text-balance",
          dark ? "text-white" : "text-foreground",
          align === "center" && "max-w-4xl mx-auto"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={descriptionVariants}
          className={clsx(
            "mt-5 md:mt-6 text-lg md:text-xl leading-relaxed max-w-2xl text-pretty",
            dark ? "text-white/55" : "text-foreground-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
