"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail, Globe, ArrowRight, Plane } from "lucide-react";
import Link from "next/link";

const offices = [
  {
    city: "Austin, USA",
    label: "Corporate Office",
    address: "815 Brazos St Ste 500 Austin TX 78701, USA",
    email: "info@rhinternationalsc.com",
    timezone: "CST / GMT-6",
    services: ["Global Strategy", "Corporate Partnerships", "Investments"],
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-[0_0_50px_hsl(220,100%,50%,0.15)]",
    iconColor: "text-blue-500",
    labelColor: "bg-blue-500/20 text-blue-500 border-blue-500/30",
    image: "/images/offices/austin.png",
    span: "lg:col-span-7"
  },
  {
    city: "Dubai, UAE",
    label: "Branch Office",
    address: "57QQ+MJX, Business Bay, Dubai",
    email: "info@rhinternationalsc.com",
    timezone: "GMT+4",
    services: ["Corporate Setup", "Trade Facilitation"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    glowColor: "hover:shadow-[0_0_50px_hsl(35,100%,50%,0.15)]",
    iconColor: "text-amber-500",
    labelColor: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    image: "/images/offices/dubai.png",
    span: "lg:col-span-5"
  },
  {
    city: "Dhaka, Bangladesh",
    label: "Head Office",
    address: "NVB Tower, 66 Rd No-9, Banani, Dhaka 1213",
    phone: "+60 1164327651",
    email: "info@rhinternationalsc.com",
    timezone: "GMT+6",
    services: ["Govt Tenders", "IT & Digital", "Consultation"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    glowColor: "hover:shadow-[0_0_50px_hsl(150,100%,50%,0.15)]",
    iconColor: "text-emerald-500",
    labelColor: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30",
    image: "/images/offices/dhaka.png",
    span: "lg:col-span-7"
  },
  {
    city: "Gazipur, Bangladesh",
    label: "Zone Office",
    address: "Mirer Bazar, Tongi - Kaliganj - Gorashal - Pachdona Rd.",
    phone: "+60 1164327651",
    email: "info@rhinternationalsc.com",
    timezone: "GMT+6",
    services: ["Packaging", "Logistics"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-[0_0_50px_hsl(280,100%,50%,0.15)]",
    iconColor: "text-purple-500",
    labelColor: "bg-purple-500/20 text-purple-500 border-purple-500/30",
    image: "/images/offices/gazipur.png",
    span: "lg:col-span-5"
  },
];

const GlobalPresenceSection = () => {
  return (
    <section id="global-presence" className="relative z-10 py-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-primary font-bold tracking-widest uppercase">Global Presence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Local Expertise. <br className="hidden md:block" />
            <span className="text-gradient-cyan">Global Reach.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From our strategic base in the USA to our Middle East hub in Dubai and operational centers in Bangladesh, our global network accelerates your business growth.
          </motion.p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${office.span} flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-border/20 shadow-2xl relative overflow-hidden group transition-all duration-500 ${office.glowColor}`}
            >
              <img
                src={office.image}
                alt={office.city}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent transition-opacity duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-br ${office.color} mix-blend-overlay opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border mb-4 ${office.labelColor}`}>
                      {office.label}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-md" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {office.city.includes(', USA') ? (
                        <>
                          {office.city.split(', USA')[0]}<span className="text-lg md:text-xl text-white/70 ml-1 font-medium">, USA</span>
                        </>
                      ) : (
                        office.city
                      )}
                    </h3>
                    <p className="text-gray-300 font-mono mt-2 drop-shadow-sm">{office.timezone}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-background/50 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${office.iconColor}`}>
                    <Building2 className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-start gap-3 text-sm text-gray-200">
                    <MapPin className={`w-5 h-5 mt-0.5 shrink-0 ${office.iconColor}`} />
                    {office.address}
                  </div>
                  {office.phone && (
                    <div className="flex items-center gap-3 text-sm text-gray-200">
                      <Phone className={`w-4 h-4 ${office.iconColor}`} />
                      {office.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <Mail className={`w-4 h-4 ${office.iconColor}`} />
                    {office.email}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40">
                  <div className="flex flex-wrap gap-2">
                    {office.services.map(s => (
                      <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border/30 bg-background/50">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
