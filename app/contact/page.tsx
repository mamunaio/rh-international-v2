"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@rhinternationalsc.com", href: "mailto:info@rhinternationalsc.com", accent: "213 55% 50%" },
  { icon: Phone, label: "Call Us", value: "+880 1319-855960", href: "tel:+8801319855960", accent: "200 55% 48%" },
  { icon: Clock, label: "Working Hours", value: "Sat - Thu, 9:00 AM - 6:00 PM (GMT+6)", href: undefined, accent: "35 80% 55%" },
];

const globalOffices = [
  {
    city: "Austin, USA",
    label: "Global Headquarters",
    address: "815 Brazos St, Austin, TX 78701, USA",
    phone: "+1 (555) 123-4567",
    email: "usa@rhinternationalsc.com",
    timezone: "CST / GMT-6",
    image: "/images/offices/austin.png",
  },
  {
    city: "Dubai, UAE",
    label: "MENA Regional Hub",
    address: "57QQ+MJX - Business Bay - Dubai - UAE",
    phone: "+971 4 345 6789",
    email: "dubai@rhinternationalsc.com",
    timezone: "GMT+4",
    image: "/images/offices/dubai.png",
  },
  {
    city: "Dhaka, Bangladesh",
    label: "Head Office (Asia)",
    address: "Banani, 66 Rd No-9, Dhaka 1213",
    phone: "+880 1319-855960",
    email: "info@rhinternationalsc.com",
    timezone: "GMT+6",
    image: "/images/offices/dhaka.png",
  },
  {
    city: "Gazipur, Bangladesh",
    label: "Operations & Print",
    address: "Mirer Bazar, Tongi - Kaliganj Rd.",
    phone: "+880 1319-855960",
    email: "print@rhinternationalsc.com",
    timezone: "GMT+6",
    image: "/images/offices/gazipur.png",
  },
];

// Particles
const HeroParticles = () => {
  const particles = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2.5 + 1, duration: Math.random() * 12 + 8, delay: Math.random() * 4,
    })),
    []
  );
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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const inputClass = (name: string) =>
    `w-full px-5 py-4 text-sm rounded-2xl bg-secondary/30 border text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-300 ${
      focusedField === name
        ? "border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.15)] bg-secondary/60"
        : errors[name]
        ? "border-destructive/40"
        : "border-border/25 hover:border-border/50"
    }`;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 mesh-gradient pointer-events-none opacity-60" />
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.9, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08),transparent_60%)] blur-3xl pointer-events-none"
          />
          <HeroParticles />
        </div>

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold tracking-[0.2em] uppercase">Let's Connect</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-8 leading-[1.05]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {"Let's Talk".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-gradient-cyan inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Business
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-none md:pl-0"
            >
              Got a major project in mind, or need expert consultancy? Drop us a line. Our team is ready to help you build and scale something extraordinary.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 relative group"
          >
            <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
            <div className="relative rounded-[2.5rem] border border-border/20 bg-card/30 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="p-10 md:p-14">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Send a Message
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">Fill out the form below, and our team will get back to you.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs text-foreground font-bold uppercase tracking-widest mb-3 ml-1">Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                        onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}
                        className={inputClass("name")}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-2 ml-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-foreground font-bold uppercase tracking-widest mb-3 ml-1">Email</label>
                      <input
                        name="email" value={form.email} onChange={handleChange} placeholder="john@company.com"
                        onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
                        className={inputClass("email")}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-2 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-foreground font-bold uppercase tracking-widest mb-3 ml-1">Subject</label>
                    <input
                      name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help your business grow?"
                      onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)}
                      className={inputClass("subject")}
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-2 ml-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-foreground font-bold uppercase tracking-widest mb-3 ml-1">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project or requirements..."
                      rows={6}
                      onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-2 ml-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative px-8 py-5 bg-primary text-primary-foreground rounded-2xl text-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {sending ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] border border-border/20 bg-card/40 backdrop-blur-xl shadow-xl h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Contact Info
              </h3>
              
              <div className="space-y-8 flex-1">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-5 group/info"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/info:bg-primary group-hover/info:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover/info:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-base text-foreground font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                href={`https://wa.me/8801319855960?text=${encodeURIComponent("Hi, I'm interested in your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 flex items-center gap-4 p-6 rounded-2xl border border-[hsl(142_70%_40%/0.3)] bg-[hsl(142_70%_20%/0.15)] backdrop-blur-md hover:bg-[hsl(142_70%_20%/0.3)] transition-all group/wa relative overflow-hidden shadow-[0_0_30px_hsl(142,70%,40%,0.1)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-[#25D366] uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                  <p className="text-sm text-foreground font-medium">Chat with our team instantly.</p>
                </div>
              </motion.a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- MULTIPLE LOCATIONS SECTION --- */}
      <section className="relative z-10 pt-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our <span className="text-gradient-cyan">Global Offices</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With a strategic presence across continents, our local experts are ready to provide world-class solutions wherever you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalOffices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-border/20 shadow-2xl bg-card"
              >
                {/* Background Image */}
                <img
                  src={office.image}
                  alt={office.city}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                      {office.label}
                    </span>
                    
                    {/* Live Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-border/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-wider text-muted-foreground">{office.timezone}</span>
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-md" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {office.city}
                  </h3>

                  <div className="space-y-3 translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-start gap-3 text-sm text-gray-200">
                      <MapPin className="w-5 h-5 text-primary shrink-0" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-200">
                      <Phone className="w-4 h-4 text-primary shrink-0 ml-0.5" />
                      {office.phone}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-200">
                      <Mail className="w-4 h-4 text-primary shrink-0 ml-0.5" />
                      {office.email}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
