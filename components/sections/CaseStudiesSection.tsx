"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, TrendingUp, Award, Zap, Monitor, Plane } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Winning a Major National Infrastructure Bid",
    client: "Infrastructure Project",
    industry: "GOVERNMENT",
    icon: Award,
    metrics: [
      { label: "Contract Value", value: "$2.4M" },
      { label: "Success Rate", value: "98%" },
    ],
    description: "Navigating government bids is tough. We stepped in to handle the complex documentation and strategic pricing, helping our client secure a massive infrastructure contract smoothly.",
    tags: ["Procurement", "Strategy", "Documentation"],
    result: "Won against 12 competing firms",
  },
  {
    id: 2,
    title: "Large-scale Commercial Solar Panel Installation",
    client: "National Manufacturing Plant",
    industry: "SOLAR ENERGY",
    icon: Zap,
    metrics: [
      { label: "Energy Offset", value: "85%" },
      { label: "Cost Saved", value: "$400K+" },
    ],
    description: "When a major manufacturing plant needed to reduce energy costs and meet sustainability goals, we installed a high-efficiency solar grid ahead of schedule.",
    tags: ["Solar Grid", "Green Energy", "Efficiency"],
    result: "Delivered 2 weeks early",
  },
  {
    id: 3,
    title: "Scaling Revenue with a Modern E-Commerce Build",
    client: "Scaling Tech Brand",
    industry: "DIGITAL",
    icon: Monitor,
    metrics: [
      { label: "Traffic Growth", value: "320%" },
      { label: "Revenue Boost", value: "185%" },
    ],
    description: "We didn’t just build a fast website; we built a revenue engine. With advanced SEO and a modern tech stack, we helped this brand triple their traffic and double their sales in just six months.",
    tags: ["Web Dev", "SEO", "E-Commerce"],
    result: "ROI in under 4 months",
  },
  {
    id: 4,
    title: "Flawless Visa Processing for 200+ Professionals",
    client: "Corporate Delegation",
    industry: "TRAVEL",
    icon: Plane,
    metrics: [
      { label: "Applications", value: "200+" },
      { label: "Approval Rate", value: "99%" },
    ],
    description: "Corporate travel to Europe can be a logistical nightmare. We managed the entire visa and relocation process for Portugal, Spain, and Denmark with a near-perfect success rate.",
    tags: ["Visa", "Relocation", "EU"],
    result: "99% first-attempt approval",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative z-10 py-24 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.04),transparent_60%)] pointer-events-none blur-[80px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
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

        {/* STICKY SCROLLING DECK */}
        <div className="relative pb-[10vh]">
          {caseStudies.map((study, i) => {
            const Icon = study.icon;
            // Calculate dynamic top positioning for the stacked effect
            const topPosition = `calc(10vh + ${i * 30}px)`;
            
            return (
              <div
                key={study.id}
                className="sticky mb-12 sm:mb-24 last:mb-0"
                style={{ top: topPosition }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-[2rem] bg-card/60 backdrop-blur-2xl border border-border/50 overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_50px_rgba(0,0,0,0.5)] w-full"
                >
                  {/* Subtle Glowing Hover Edge */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
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

                    {/* Right Column: Big Metrics & Results */}
                    <div className="w-full md:w-[320px] shrink-0 flex flex-col justify-center gap-6">
                      <div className="bg-background/40 backdrop-blur-md border border-border/40 rounded-2xl p-6 flex flex-col gap-8 group-hover:border-primary/30 transition-all duration-500">
                        {study.metrics.map((metric, idx) => (
                          <div key={metric.label} className={idx !== 0 ? "pt-6 border-t border-border/30" : ""}>
                            <div
                              className="text-4xl sm:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tighter mb-2"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* ROI Result Highlight */}
                      <div className="flex items-center gap-3 text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 rounded-2xl">
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
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
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
