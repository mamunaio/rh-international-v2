"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark, Monitor, Plane, Lightbulb, ArrowRight, Zap, Users, ShieldCheck
} from "lucide-react";

const services = [
  {
    title: "IT Solutions",
    desc: "Fast, secure, and modern digital platforms. We build advanced web applications and provide cloud infrastructures that drive real business results.",
    icon: Monitor,
    path: "/services/it-solution",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    borderColor: "group-hover:border-emerald-500/50",
  },
  {
    title: "Digital & E-Commerce",
    desc: "Turn your ideas into a global brand. We offer strategic digital marketing, branding, and highly scalable e-commerce solutions to maximize your revenue.",
    icon: Lightbulb,
    path: "/services/digital-service",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400",
    borderColor: "group-hover:border-rose-500/50",
  },
  {
    title: "Solar Panel Service",
    desc: "Installation, repair, and supply of high-efficiency solar panel systems for sustainable and cost-effective energy solutions.",
    icon: Zap,
    path: "/services/solar-panel",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-400",
    borderColor: "group-hover:border-yellow-500/50",
  },
  {
    title: "Government Tenders",
    desc: "We simplify the complex e-GP bidding process. From preparing flawless documents to final submission, we help you win high-value government contracts.",
    icon: Landmark,
    path: "/services/govt-tender",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/50",
  },
  {
    title: "Travel Consultation",
    desc: "Your smooth gateway to Europe. We provide expert visa processing and hassle-free travel support specifically for Portugal, Spain, and Denmark.",
    icon: Plane,
    path: "/services/travel-consultation",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    borderColor: "group-hover:border-orange-500/50",
  },
  {
    title: "Global Manpower Solutions",
    desc: "Specialized recruitment for Denmark, Spain, and Portugal. We ensure transparent processing, flawless visa documentation, and a 98% success rate.",
    icon: Users,
    path: "/services/manpower",
    color: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-400",
    borderColor: "group-hover:border-indigo-500/50",
  },
  {
    title: "Cyber Security & Auditing",
    desc: "Protect your digital assets. We offer comprehensive penetration testing, website auditing, and infrastructure vulnerability assessments.",
    icon: ShieldCheck,
    path: "/services/cyber-security",
    color: "from-blue-500/20 to-emerald-500/20",
    iconColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/50",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        href={service.path}
        className={`group relative flex flex-col h-full p-8 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-md overflow-hidden transition-all duration-500 ${service.borderColor} hover:bg-card/60 hover:-translate-y-1 hover:shadow-2xl`}
      >
        {/* Background Gradient Glow on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
              <Icon className={`w-7 h-7 ${service.iconColor}`} />
            </div>
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {service.desc}
          </p>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between group-hover:border-border/80 transition-colors">
            <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
              Explore Service
            </span>
            <div className="w-8 h-8 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section id="services" className="relative z-10 py-20 px-6">
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary font-bold tracking-widest uppercase">What We Do</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Built for contracts, <br className="hidden md:block" />
          <span className="text-gradient-cyan">commerce & growth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Everything you need to scale your business, under one roof. From winning government tenders to complete digital transformation, we are your strategic partner.
        </motion.p>
      </div>

      {/* Services Grid (Classic 3 Column) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.path} service={service} index={i} />
        ))}
      </div>
      
    </div>
  </section>
);

export default ServicesSection;
