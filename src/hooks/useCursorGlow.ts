"use client";
import { useRef, useCallback, useState, useEffect } from "react";

export function useCursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouch || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--glow-x", `${x}px`);
      ref.current.style.setProperty("--glow-y", `${y}px`);
    },
    [isTouch]
  );

  return {
    ref,
    onMouseMove: handleMouseMove,
    glowStyle: {
      position: "relative" as const,
    },
    // Add this CSS to the element or globals.css:
    // background: radial-gradient(600px circle at var(--glow-x) var(--glow-y), rgba(232,113,58,0.04), transparent 40%)
  };
}
