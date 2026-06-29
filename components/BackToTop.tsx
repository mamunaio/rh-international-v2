"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll distance (show after 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle stroke parameters (r = 20, circumference = ~125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-shadow duration-300 group focus:outline-none"
          aria-label="Back to top"
        >
          {/* Progress Circular Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-muted/30 fill-none"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-primary fill-none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </svg>

          {/* Up Arrow Icon */}
          <ArrowUp className="w-5 h-5 text-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
