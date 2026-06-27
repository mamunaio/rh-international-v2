"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  { icon: Mail, label: "Email Us", value: "info@rhinternationalsc.com", href: "mailto:info@rhinternationalsc.com", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:shadow-[0_0_30px_hsl(210,100%,50%,0.15)]" },
  { icon: Phone, label: "Call Us", value: "+880 1319-855960", href: "tel:+8801319855960", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_30px_hsl(150,100%,50%,0.15)]" },
  { icon: MapPin, label: "Global HQ", value: "NVB Tower, Banani, Dhaka", href: "/global-presence", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "group-hover:shadow-[0_0_30px_hsl(35,100%,50%,0.15)]" },
];

const CTASection = () => (
  <section id="contact" className="relative z-10 py-24 px-6 overflow-hidden">
    
    {/* Ambient Background Glows */}
    <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] border border-border/30 bg-card/20 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]"
      >
        {/* Shimmering Top Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-50" />
        
        {/* Huge Inner Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.1),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 p-10 md:p-16 lg:p-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Left — Main Content (Spans 7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary font-bold tracking-widest uppercase">Take The Next Step</span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Let's Build <br />
                <span className="text-gradient-cyan">Something Together.</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
                Whether you need support with a complex government tender, a solar panel installation, or a highly scalable digital platform—we are ready. Let's discuss your goals and get you a tailored proposal within 48 hours.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mb-14">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 rounded-2xl overflow-hidden font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
                >
                  <div className="absolute inset-0 bg-primary" />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative z-10 text-primary-foreground font-bold tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get a Free Quote</span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-2xl text-base font-bold text-foreground border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust Section */}
              <div className="flex items-center gap-5 pt-8 border-t border-border/30">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-[3px] border-background bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center shadow-lg relative"
                    >
                      {/* Avatar Inner Glow */}
                      <div className="absolute inset-0 rounded-full border border-primary/20" />
                      <span className="text-xs font-black text-muted-foreground/80 font-mono">
                        {["A", "B", "R", "K"][i]}
                      </span>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-[3px] border-background bg-primary/20 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <span className="text-xs font-bold text-primary">+96</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Trusted by 100+ clients</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Across 5+ countries worldwide</p>
                </div>
              </div>
            </div>

            {/* Right — Contact Methods (Spans 5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                const isLink = method.href.startsWith("/");
                const Wrapper = isLink ? Link : "a";
                
                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Wrapper
                      href={method.href}
                      className={`group block p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:-translate-y-1 ${method.glow}`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 ${method.bg} ${method.border}`}>
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                            {method.label}
                          </p>
                          <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
