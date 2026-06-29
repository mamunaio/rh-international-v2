"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, LayoutGrid, LayoutList } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { portfolioCategories, portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-12 md:pb-16 px-6 overflow-hidden min-h-[40vh] flex flex-col justify-center text-center">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-10 bg-primary"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">Our Global Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Showcasing Our <span className="text-gradient-cyan">Best Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Explore how we transform complex challenges into innovative digital solutions for enterprises across the globe.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-20 py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  : "bg-card/20 text-muted-foreground border-border/40 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Compact Projects Grid */}
      <section className="relative z-10 py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl bg-card/20 border border-border/40 overflow-hidden hover:border-primary/40 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] flex flex-col"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block h-full flex flex-col cursor-pointer">
                    {/* Image Container */}
                    <div className="relative w-full h-56 bg-background overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6">
                          {project.overview}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
