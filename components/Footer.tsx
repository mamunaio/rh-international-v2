"use client";

import Link from "next/link";
import { Mail, Send, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const serviceLinks = [
  { label: "Government Tenders", path: "/services/govt-tender" },
  { label: "IT & Web Solutions", path: "/services/it-solution" },
  { label: "European Visa Advisory", path: "/services/travel-consultation" },
  { label: "Digital & E-Commerce", path: "/services/digital-service" },
  { label: "Solar Panel Service", path: "/services/solar-panel" },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "E-commerce Shop", path: "https://shop.rhinternationalsc.com/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Global Presence", path: "/global-presence" },
  { label: "Contact Us", path: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "#" },
  { label: "Terms & Conditions", path: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", color: "hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
  { icon: Twitter, href: "#", color: "hover:text-sky-400 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]" },
  { icon: Facebook, href: "#", color: "hover:text-blue-600 hover:border-blue-600 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative z-10 bg-background overflow-hidden">
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Description (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <p className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="text-gradient-cyan">RH</span> International
            </p>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-6">Sourcing Center</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              A multi-service global business group delivering excellence across government tenders, technology, travel consultation, and digital solutions.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-10 h-10 rounded-full bg-card/50 border border-border/40 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-sm font-bold text-foreground mb-6 tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Spans 3 cols) */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-sm font-bold text-foreground mb-6 tracking-widest uppercase">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.path}>
                  <Link href={s.path} className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-primary" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-foreground mb-6 tracking-widest uppercase">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Stay ahead of the curve. Get exclusive global business insights and tender updates.
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center bg-card/40 backdrop-blur-md border border-border/40 rounded-2xl p-1 transition-colors group-hover:border-primary/40">
                <div className="pl-4 pr-2 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none py-3"
                />
                <button className="w-10 h-10 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- SISTER CONCERN BADGE --- */}
        <div className="flex justify-center mt-12 mb-6 relative z-20">
          <motion.a 
            href="http://netbanglaltd.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-4 px-6 md:px-10 py-4 md:py-5 rounded-full bg-card/30 backdrop-blur-xl border border-border/30 shadow-lg hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 cursor-pointer overflow-hidden"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <p className="text-xs md:text-sm font-bold text-muted-foreground tracking-widest uppercase">
                  Our Sister Concern
                </p>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-border/50" />
              <p className="text-lg md:text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="text-gradient-cyan">Net Bangla</span> Limited
              </p>
            </div>
          </motion.a>
        </div>

        {/* Massive Brand Text Background - Scrolling Marquee */}
        <div className="relative flex w-full overflow-hidden select-none pointer-events-none mt-4 border-t border-border/10 pt-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <h1
                key={i}
                className="text-[12vw] font-black text-foreground/[0.02] dark:text-foreground/[0.02] tracking-tighter leading-none px-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                RH INTERNATIONAL
              </h1>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[-4vw] relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} RH International Sourcing Center. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.path} className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
