"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Zap, Monitor, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Winning Complex Government & Corporate Tenders",
    client: "Infrastructure Project",
    industry: "GOVERNMENT PROCUREMENT",
    icon: Award,
    image: "/images/case-studies/tender_success.png",
    description: "Navigating government procurement can feel like walking through a maze. We stepped in to take that burden off our client's shoulders. From discovering the right tenders and crafting a winning pricing strategy to perfectly handling the e-GP documentation, we managed it all. In the end, they secured a massive national contract without any of the usual stress.",
    tags: ["Tender Sourcing", "Bidding Strategy", "Compliance"],
    result: "Won against 12 competing firms",
  },
  {
    id: 2,
    title: "Powering Sustainable Manufacturing",
    client: "National Manufacturing Plant",
    industry: "GREEN ENERGY",
    icon: Zap,
    image: "/images/case-studies/solar_panel.png",
    description: "When a major local factory wanted to cut down their skyrocketing energy bills and do something good for the planet, they reached out to us. We designed and installed a beautiful, high-efficiency solar grid right across their facility. The result was instant—a dramatic drop in electricity costs from day one, and a huge leap toward a greener future.",
    tags: ["Solar Grid", "Green Energy", "Efficiency"],
    result: "Delivered 2 weeks early",
  },
  {
    id: 3,
    title: "Scaling Revenue with a Seamless Digital Platform",
    client: "Scaling Tech Brand",
    industry: "DIGITAL ECOSYSTEM",
    icon: Monitor,
    image: "/images/case-studies/digital_ecommerce.png",
    description: "We didn't just want to build another website for this amazing brand; we wanted to build them a true revenue engine. By setting up a robust IT foundation and a buttery-smooth checkout experience, we helped them welcome thousands of new customers. They expanded their market reach effortlessly and handled massive traffic spikes like it was nothing.",
    tags: ["Web Dev", "SEO", "E-Commerce"],
    result: "ROI in under 4 months",
  },
  {
    id: 4,
    title: "Flawless Visa Processing & Team Relocation",
    client: "Corporate Delegation",
    industry: "CORPORATE RELOCATION",
    icon: Plane,
    image: "/images/case-studies/corporate_travel.png",
    description: "Moving an entire corporate team across borders is usually a logistical nightmare, but it doesn't have to be. We took over the entire visa and relocation process for a wonderful team traveling to Europe. By handling all the frustrating red tape behind the scenes, we made sure every single person arrived on time, completely stress-free, and ready to get to work.",
    tags: ["Visa", "Relocation", "EU"],
    result: "99% first-attempt approval",
  },
];

// Reusable Card Component for the Premium 3D Stacking Effect
const Card = ({ study, i, progress, range, targetScale }: any) => {
  const container = useRef(null);
  
  // Advanced Animation Transforms
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.6]); 
  // Push the card slightly up and tilt it backward
  const yOffset = useTransform(progress, range, [0, -30]);
  const rotateX = useTransform(progress, range, [0, -8]); // 3D tilt
  
  const Icon = study.icon;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky" style={{ top: `calc(10vh + ${i * 25}px)` }}>
      <motion.div 
        style={{ 
          scale, 
          opacity, 
          y: yOffset,
          rotateX,
          transformPerspective: 1200,
          transformOrigin: "top"
        }}
        className="group relative rounded-[2.5rem] bg-card/80 backdrop-blur-3xl border border-border/40 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.7)] w-full max-w-5xl"
      >
        {/* Subtle Glowing Hover Edge */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* Left Column: Context & Tags */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-500">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest block mb-1">{study.industry}</span>
                  <span className="text-xs text-muted-foreground font-medium">{study.client}</span>
                </div>
              </div>

              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {study.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                {study.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-auto pt-6 border-t border-border/30">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Image & Results */}
          <div className="w-full md:w-[320px] shrink-0 flex flex-col justify-center gap-4">
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-border/40 group-hover:border-primary/40 shadow-lg transition-all duration-500">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* ROI Result Highlight */}
            <div className="flex items-center gap-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 rounded-2xl mt-2">
              <TrendingUp className="w-5 h-5 shrink-0" />
              {study.result}
            </div>
          </div>
        </div>
        
        {/* Subtle top glare effect for 3D realism */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      </motion.div>
    </div>
  );
};

const CaseStudiesSection = () => {
  const container = useRef(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    // Note: removed overflow-hidden to ensure sticky works perfectly across all browsers
    <section ref={container} className="relative z-10 py-24 px-6 bg-background">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.04),transparent_60%)] pointer-events-none blur-[80px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-semibold tracking-wider uppercase">Success Stories</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-foreground tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Real Impact,{" "}
              <span className="text-gradient-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] block">Proven Results.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base leading-relaxed max-w-sm lg:text-right pb-4"
          >
           Don't just take our word for it. See how we’ve helped businesses win big, scale faster, and solve complex challenges.
          </motion.p>
        </div>

        {/* STICKY SCROLLING DECK (Premium Parallax Stacking) */}
        <div className="relative w-full">
          {caseStudies.map((study, i) => {
            // Target scale decreases noticeably for each card behind
            const targetScale = 1 - ((caseStudies.length - i) * 0.08);
            return (
              <Card 
                key={study.id} 
                i={i} 
                study={study} 
                progress={scrollYProgress} 
                // Each card animates relative to its position in the array
                range={[i * (1 / caseStudies.length), 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pb-[10vh]"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.25)] to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <span className="relative">Start Your Success Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform relative" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
