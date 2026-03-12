"use client";

import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
    secondary:
      "bg-navy text-white hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-foreground hover:text-primary hover:bg-gray-100",
    white:
      "bg-white text-foreground hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-[18px] text-lg",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
