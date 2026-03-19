"use client";
import { useRef, useCallback, useState, useEffect } from "react";

export function useMagneticHover(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouch || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [isTouch, strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition = "transform 0.3s ease-out";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 300);
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
