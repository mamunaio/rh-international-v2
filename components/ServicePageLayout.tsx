"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Feature {
  title: string;
  description: string;
  image?: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  highlights?: string[];
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  children?: React.ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  highlights,
  primaryCtaText = "Get a Custom Quote",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Explore All Services",
  secondaryCtaLink = "/services",
  children,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary overflow-hidden">
      {/* --- PREMIUM MESH BACKGROUND --- */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.08),transparent_60%)] pointer-events-none blur-[120px]" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.05),transparent_60%)] pointer-events-none blur-[100px]" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
            >
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-foreground font-medium">{title}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
                  {subtitle}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-foreground mb-8 tracking-tight leading-[1.05]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {title.split(' ').map((word, i, arr) => (
                  <span key={i} className={i === arr.length - 1 ? "text-gradient-cyan drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-primary/30 pl-6">
                {description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- ZIG-ZAG ALTERNATING FEATURES --- */}
        {features.length > 0 && (
          <section className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-32">
              {features.map((feature, i) => {
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col gap-10 md:gap-16 items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Glassmorphic Artwork / Number Block */}
                    <div className="w-full md:w-1/2 shrink-0">
                      <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] bg-card/20 backdrop-blur-3xl border border-primary/20 shadow-[0_0_50px_rgba(34,211,238,0.05)] overflow-hidden flex items-center justify-center group">
                        {/* Dynamic Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                        
                        {/* Optional Feature Image */}
                        {feature.image && (
                          <div className="absolute inset-0 z-0">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                          </div>
                        )}
                        
                        {/* Giant Number */}
                        <div 
                          className="relative z-20 text-[12rem] md:text-[18rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-primary/5 select-none"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        
                        {/* Overlay Icon */}
                        <div className="absolute z-30 w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-md border border-primary/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                          <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs text-primary font-bold tracking-widest uppercase">Feature {String(i + 1).padStart(2, "0")}</span>
                      </div>
                      
                      <h3 
                        className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* --- DEEP DIVE CONTENT (Children) --- */}
        {children && (
          <section className="py-24 px-6 border-t border-border/20 mt-20">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:font-['Space_Grotesk'] prose-a:text-primary hover:prose-a:text-primary/80"
              >
                {children}
              </motion.div>
            </div>
          </section>
        )}

        {/* --- HIGHLIGHTS SECTION --- */}
        {highlights && (
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[3rem] bg-gradient-to-br from-card/40 to-background/20 backdrop-blur-2xl border border-primary/20 p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.05)]"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none" />

                <h3
                  className="text-3xl md:text-5xl font-bold text-foreground mb-16 tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Why <span className="text-gradient-cyan">Partner With Us?</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
                  {highlights.map((h, i) => {
                    const hasColon = h.includes(":");
                    const [titlePart, descPart] = hasColon ? h.split(/:(.+)/) : [h, ""];
                    
                    return (
                      <div key={h} className="flex gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-card border border-primary/20 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary/10 transition-colors">
                          <CheckCircle2 className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <span className={hasColon ? "font-bold text-foreground text-2xl block mb-3" : "text-xl text-foreground font-medium"}>
                            {titlePart}
                          </span>
                          {hasColon && (
                            <p className="text-lg text-muted-foreground leading-relaxed">{descPart.trim()}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* --- PREMIUM CTA --- */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to <span className="text-gradient-cyan">Elevate Your Business?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Get in touch with our experts today and discover how our global solutions can drive your success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href={primaryCtaLink}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-2xl text-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] overflow-hidden w-full sm:w-auto"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.25)] to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                  <span className="relative">{primaryCtaText}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform relative" />
                </Link>
                
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-lg font-bold text-foreground hover:text-primary transition-colors bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/30 w-full sm:w-auto"
                >
                  {secondaryCtaText}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;