"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark, Printer, Monitor, Plane, Building2, Lightbulb,
  ArrowRight, Globe, Target, CheckCircle2, Rocket, Search, Zap, Users, ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const services = [
  {
    title: "Govt Tender",
    desc: "Professional support and consultancy for government procurement and tenders across multiple sectors. We handle the complex documentation and strategy so you can focus on execution.",
    icon: Landmark,
    path: "/services/govt-tender",
    tag: "Procurement",
    stats: "98% Win Rate",
    span: "lg:col-span-2",
    image: "/portfolio/services/govt.png"
  },
  {
    title: "IT Solution",
    desc: "Full-stack web development, cloud infrastructure, and cybersecurity.",
    icon: Monitor,
    path: "/services/it-solution",
    tag: "Technology",
    stats: "99.9% Uptime",
    span: "lg:col-span-1",
    image: "/portfolio/services/it.png"
  },
  {
    title: "Travel Consultation",
    desc: "Expert visa guidance and immigration advisory for Portugal, Spain, and Denmark. Seamless corporate delegation management.",
    icon: Plane,
    path: "/services/travel-consultation",
    tag: "Immigration",
    stats: "200+ Visas Approved",
    span: "lg:col-span-1",
    image: "/portfolio/services/travel.png"
  },
  {
    title: "Dubai Office",
    desc: "Company formation, trade facilitation, and market entry support for the UAE and GCC region.",
    icon: Building2,
    path: "/services/dubai-office",
    tag: "UAE Operations",
    stats: "Fast-track Setup",
    span: "lg:col-span-2",
    image: "/portfolio/services/dubai.png"
  },
  {
    title: "Digital Service",
    desc: "Strategic digital transformation and e-commerce growth.",
    icon: Lightbulb,
    path: "/services/digital-service",
    tag: "Digital",
    stats: "320% ROI",
    span: "lg:col-span-1",
    image: "/portfolio/services/digital.png"
  },
  {
    title: "Solar Panel Service",
    desc: "Installation, repair, and supply of high-efficiency solar panel systems for a greener future.",
    icon: Zap,
    path: "/services/solar-panel",
    tag: "Energy",
    stats: "Cost Efficient",
    span: "lg:col-span-2",
    image: "/portfolio/solar/commercial.png"
  },
  {
    title: "Global Manpower",
    desc: "Specialized recruitment for Denmark, Spain, and Portugal. We ensure transparent processing and flawless visa documentation.",
    icon: Users,
    path: "/services/manpower",
    tag: "Recruitment",
    stats: "98% Success",
    span: "lg:col-span-2",
    image: "/images/services/manpower.png"
  },
  {
    title: "Cyber Security & Auditing",
    desc: "Protect your digital assets with enterprise-grade penetration testing and website auditing.",
    icon: ShieldCheck,
    path: "/services/cyber-security",
    tag: "Security",
    stats: "OWASP Compliant",
    span: "lg:col-span-1",
    image: "/images/services/cyber_dashboard.png"
  },
];

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery & Strategy",
    desc: "We analyze your business needs and craft a tailored roadmap."
  },
  {
    icon: Target,
    title: "2. Precision Execution",
    desc: "Our expert teams deploy solutions with flawless accuracy."
  },
  {
    icon: Rocket,
    title: "3. Global Growth",
    desc: "Scale your operations seamlessly across international borders."
  }
];

const ServicesIndex = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <div className="fixed inset-0 mesh-gradient pointer-events-none" />
    <Navbar />

    {/* Cinematic Hero */}
    <section className="relative z-10 pt-40 pb-28 px-6 overflow-hidden">
      {/* Background Animated Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.08),transparent_60%)] blur-[100px] animate-pulse pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8 backdrop-blur-md">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary font-bold tracking-widest uppercase">Global Expertise</span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What We <br className="md:hidden" />
            <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">Deliver.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive B2B & B2C solutions spanning procurement, manufacturing,
            technology, immigration, and digital transformation across 5+ countries.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Premium Bento Grid */}
    <section className="relative z-10 pb-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.path}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border/40 overflow-hidden flex flex-col shadow-lg ${service.span}`}
          >
            {/* Background Image */}
            {service.image && (
              <>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30 pointer-events-none" />
              </>
            )}

            {/* Glowing Neon Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <Link href={service.path} className="relative z-10 p-8 md:p-10 flex flex-col h-full cursor-pointer">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-card/50 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-500 backdrop-blur-md">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-primary/80 uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                  {service.tag}
                </div>
              </div>

              {/* Spacer for bento feel */}
              <div className="mt-auto" />

              {/* Title & Desc */}
              <div className="mb-8">
                <h3
                  className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-6 border-t border-border/40">
                <span className="text-xs font-bold text-foreground/80">{service.stats}</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Workflow Section */}
    <section className="relative z-10 py-32 px-6 border-y border-border/20 bg-background/50 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How We <span className="text-gradient-cyan">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A seamless approach to turning complex challenges into streamlined solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-card border border-border/50 flex items-center justify-center mb-8 shadow-xl relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              
              {/* Connection Line */}
              {index !== processSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Interactive Massive CTA */}
    <section className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto text-center bg-card/30 backdrop-blur-2xl border border-border/50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to <span className="text-gradient-cyan">Elevate Your Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get in touch with our experts today and discover how our global solutions can drive your success.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-2xl text-base font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(0_0%_100%/0.25)] to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <span className="relative">Get a Custom Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform relative" />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServicesIndex;
