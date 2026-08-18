"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

export const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Parse the number out of the value (e.g. "100+" -> { target: 100, suffix: "+" })
  // Handles values starting with numbers like "98% Success", "99.9% Uptime", etc.
  const parsed = (() => {
    const numMatch = value.match(/^(\d+)(.*)$/);
    if (numMatch) {
      return {
        target: parseInt(numMatch[1], 10),
        suffix: numMatch[2],
        isNumeric: true,
      };
    }
    return {
      target: 0,
      suffix: value,
      isNumeric: false,
    };
  })();

  useEffect(() => {
    if (!isInView || !parsed.isNumeric) {
      if (!isInView) {
        setDisplayValue("0");
      } else {
        setDisplayValue(value);
      }
      return;
    }

    let start = 0;
    const end = parsed.target;
    if (start === end) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200; // 1.2 seconds for animation
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);

      setDisplayValue(`${current}${parsed.suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, parsed.isNumeric, parsed.target, parsed.suffix]);

  return <span ref={ref}>{displayValue}</span>;
};
