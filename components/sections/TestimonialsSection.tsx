"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, Gulf Trading Corp.",
    text: "We were struggling to navigate the complexities of government bidding. The team at RH International didn't just help us understand the process—they completely handled the documentation and helped us win a massive contract. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Müller",
    role: "Operations Director, EuroTech GmbH",
    text: "Honestly, their IT team exceeded all our expectations. They built our entire e-commerce platform from scratch and even got it delivered ahead of schedule. Since launch, our online traffic has more than tripled. Incredible work.",
    rating: 5,
  },
  {
    name: "Dr. Kamal Hossain",
    role: "Managing Director, Dhaka Exports Ltd.",
    text: "Whether it’s handling large-scale packaging for our exports, they manage everything perfectly. It’s rare to find a partner who takes quality control as seriously as we do. They are our go-to team.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Global Trends",
    text: "Their digital marketing and branding strategies completely transformed our online presence. The ROI we've seen in just six months is staggering. They truly understand how to engage a modern audience.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director, Apex Solutions",
    text: "Navigating the European business visa process used to be a nightmare for our executives. Their travel consultation team made the Schengen visa process incredibly smooth and stress-free.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="relative z-10 py-12 md:py-16 px-6 overflow-hidden">
    {/* Animated Background Orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-1000" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-primary font-bold tracking-widest uppercase">Client Success</span>
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Don't just take <br className="hidden md:block" />
          <span className="text-gradient-cyan">our word for it.</span>
        </h2>
      </motion.div>
    </div>

    {/* Infinite Marquee Rows */}
    <div className="relative max-w-[100vw] overflow-hidden flex flex-col gap-8 -mx-6 px-6">
      
      {/* Left/Right Fade Gradients for Marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

      {/* Row 1: Moving Left */}
      <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, rep) => (
          <div key={rep} className="flex gap-6 px-3 pt-4">
            {testimonials.map((t, i) => (
              <div
                key={`${rep}-${i}`}
                className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl hover:bg-card/80 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:border-primary/50 transition-all duration-500 whitespace-normal group"
              >
                <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/50 transition-colors duration-500 mb-6" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-base text-foreground/80 leading-relaxed mb-8 min-h-[100px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/40 group-hover:border-primary/20 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-primary font-medium tracking-wide uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Row 2: Moving Right */}
      <div className="flex animate-[marquee-reverse_45s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, rep) => (
          <div key={rep} className="flex gap-6 px-3">
            {[...testimonials].reverse().map((t, i) => (
              <div
                key={`${rep}-rev-${i}`}
                className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl hover:bg-card/80 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:border-primary/50 transition-all duration-500 whitespace-normal group"
              >
                <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/50 transition-colors duration-500 mb-6" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-base text-foreground/80 leading-relaxed mb-8 min-h-[100px]">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/40 group-hover:border-primary/20 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-primary font-medium tracking-wide uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;
