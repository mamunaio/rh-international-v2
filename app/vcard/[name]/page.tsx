"use client";

import Image from "next/image";
import { Briefcase, Linkedin, Mail, Globe, Phone } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef, useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import { vCardsData } from "@/data/vcards";

// Particles Component
const HeroParticles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 4,
    })),
    []
  );

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -60, -120], opacity: [0, 0.2, 0], scale: [0, 1, 0.5] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default function VcardPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params);
  const profile = vCardsData[resolvedParams.name as keyof typeof vCardsData];

  if (!profile) {
    notFound();
  }

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // 3D Tilt calculations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  
  const handleLeave = () => { 
    x.set(0); 
    y.set(0); 
  };

  const accentColor = "213 55% 50%"; // Deep blue/cyan variant

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex items-center justify-center py-12 px-4 font-sans relative overflow-hidden">
      
      {/* Background Mesh & Particles */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <HeroParticles />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-sm w-full relative z-10 flex flex-col items-center">

        {/* 3D Tilt Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMouse}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="w-full group relative"
        >
          {/* Gradient border hover effect */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative rounded-3xl border border-border/20 bg-card/30 backdrop-blur-md overflow-hidden pb-12 pt-12 px-6 sm:px-10 text-center">
            
            {/* Top accent line */}
            <motion.div
              className="absolute top-0 left-0 h-1 w-full"
              style={{ background: `linear-gradient(90deg, transparent, hsl(${accentColor}), transparent)` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Background radial glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: `radial-gradient(circle, hsl(${accentColor} / 0.08), transparent 70%)` }}
            />

            {/* Avatar Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mx-auto mb-8 relative w-40 h-40"
            >
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-primary/20"
              />
              
              {/* Image Container */}
              <div 
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                style={{ boxShadow: `0 0 40px hsl(${accentColor} / 0.1)` }}
              >
                <Image 
                  src={profile.image}
                  alt={profile.name}
                  width={160}
                  height={160}
                  className={`w-full h-full object-cover ${resolvedParams.name === 'kias' ? 'object-[center_12%]' : 'object-top'}`}
                />
              </div>
              
              {/* Online indicator */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-background shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              />
            </motion.div>

            {/* Name */}
            <h1 
              className="text-3xl font-bold text-foreground mb-3 tracking-tight" 
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {profile.name}
            </h1>

            {/* Title Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">{profile.title}</span>
            </div>

            {/* Social / Contact Links */}
            <div className="flex justify-center gap-4">
              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              
              {/* Email */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>

              {/* Website */}
              <motion.a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <Globe className="w-5 h-5" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-border/50 bg-background/50 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors"
                style={{ backdropFilter: "blur(4px)" }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
