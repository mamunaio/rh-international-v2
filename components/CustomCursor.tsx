"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [waves, setWaves] = useState<{ id: number; x: number; y: number }[]>([]);
  const { resolvedTheme } = useTheme();

  // Determine if we are in dark mode
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleClick = (e: MouseEvent) => {
      const newWave = { id: Date.now(), x: e.clientX, y: e.clientY };
      setWaves((prev) => [...prev, newWave]);
      setTimeout(() => {
        setWaves((prev) => prev.filter((w) => w.id !== newWave.id));
      }, 600);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Colors based on theme
  const coreColor = isDark ? "bg-cyan-400" : "bg-blue-600";
  const coreShadow = isDark ? "shadow-[0_0_10px_rgba(34,211,238,1)]" : "shadow-[0_0_10px_rgba(37,99,235,0.6)]";
  
  const solidRingBorder = isDark ? "border-cyan-400/80" : "border-blue-600/80";
  const dashedRingBorder = isDark ? "border-cyan-400/60" : "border-blue-600/60";
  const glowRingBorder = isDark ? "border-cyan-400/20" : "border-blue-600/20";
  const glowRingShadow = isDark ? "shadow-[inset_0_0_15px_rgba(34,211,238,0.2)]" : "shadow-[inset_0_0_15px_rgba(37,99,235,0.1)]";

  const waveBorder = isDark ? "border-cyan-400" : "border-blue-600";
  const waveShadow = isDark ? "0 0 20px rgba(34,211,238,0.6)" : "0 0 20px rgba(37,99,235,0.4)";

  return (
    <>
      {/* Click Waves */}
      <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block">
        <AnimatePresence>
          {waves.map((wave) => (
            <motion.div
              key={wave.id}
              initial={{ width: 10, height: 10, opacity: 1, borderWidth: 3 }}
              animate={{ width: 160, height: 160, opacity: 0, borderWidth: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`absolute rounded-full border-solid ${waveBorder}`}
              style={{
                left: wave.x,
                top: wave.y,
                x: "-50%",
                y: "-50%",
                boxShadow: waveShadow,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Main Cursor */}
      <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
        <motion.div
          className="absolute left-0 top-0"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.div
            animate={{ scale: isHovering ? 1.4 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex items-center justify-center"
          >
            {/* Glassmorphism Backdrop Ring (makes it visible over busy backgrounds) */}
            <motion.div 
              className="absolute w-12 h-12 rounded-full backdrop-blur-[2px] bg-foreground/5"
              animate={{ scale: isHovering ? 1 : 0 }}
            />

            {/* Inner Core Dot */}
            <motion.div className={`absolute w-1.5 h-1.5 rounded-full ${coreColor} ${coreShadow}`} />

            {/* First Solid Ring */}
            <motion.div className={`absolute w-5 h-5 border-[1.5px] rounded-full ${solidRingBorder}`} />

            {/* Second Dashed Rotating Ring */}
            <motion.div
              className={`absolute w-9 h-9 rounded-full border ${dashedRingBorder}`}
              style={{ borderStyle: "dashed", borderWidth: "1.5px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Reverse Rotating Dashed Ring (Hover Only) */}
            <motion.div
              className={`absolute w-14 h-14 rounded-full border ${dashedRingBorder}`}
              style={{ borderStyle: "dotted", borderWidth: "2px" }}
              animate={{ 
                rotate: -360, 
                opacity: isHovering ? 1 : 0,
                scale: isHovering ? 1 : 0.8
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
            />

            {/* Third Outer Faint Glow Ring */}
            <motion.div
              className={`absolute w-14 h-14 rounded-full border ${glowRingBorder} ${glowRingShadow}`}
              animate={{ 
                scale: isHovering ? 1.15 : 1,
                opacity: isHovering ? 0 : 1
              }}
              transition={{ scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            />
            
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
