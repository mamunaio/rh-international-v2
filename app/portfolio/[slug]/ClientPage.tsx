"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Code2, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ClientPage({ project }: { project: any }) {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                {project.category}
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              {project.overview}
            </p>

            <div className="flex flex-wrap items-center gap-6 lg:gap-10 border-t border-border/40 pt-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary">Duration</p>
                  <p className="text-sm font-medium text-foreground">{project.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary">Location</p>
                  <p className="text-sm font-medium text-foreground">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-primary">Client</p>
                  <p className="text-sm font-medium text-foreground">{project.client}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative px-6 pb-24 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-5xl mt-12 group"
            style={{ perspective: "1000px" }}
          >
            {/* Glowing background blob */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700 rounded-[3rem]" />
            
            {/* Glass container / Browser mockup */}
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-4 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transform transition-transform duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2">
              {/* Fake Browser header */}
              <div className="flex items-center gap-2 px-4 pb-4 pt-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-inner ring-1 ring-white/10 bg-zinc-900/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="relative px-6 pb-32 z-10">
        <div className="max-w-4xl mx-auto grid gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_2fr] gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                </span>
                The Challenge
              </h3>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_2fr] gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                </span>
                Our Solution
              </h3>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>

          {/* Key Features List */}
          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-[1fr_2fr] gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </span>
                  Key Features
                </h3>
              </div>
              <div className="grid gap-4">
                {project.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-card/40 border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_2fr] gap-8 p-10 rounded-[3rem] bg-emerald-500/5 border border-emerald-500/20"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </span>
                The Impact
              </h3>
            </div>
            <div>
              <p className="text-xl text-emerald-500/90 font-semibold leading-relaxed">{project.result}</p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-border/40 pt-16"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Technologies Used
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.techStack.map((tech: string, idx: number) => (
                <span key={idx} className="px-4 py-2 rounded-full border border-border/50 bg-secondary/30 text-foreground font-medium text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
