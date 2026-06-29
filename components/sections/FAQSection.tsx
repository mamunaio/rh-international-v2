"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquareQuote, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What exactly does RH International do?",
    a: "Think of us as your all-in-one business growth partner. We handle everything from winning government tenders and solar panel installations, to building ultra-modern IT & e-commerce platforms, and even managing European travel visas.",
    category: "General",
  },
  {
    q: "Where are you located, and which countries do you serve?",
    a: "Our main corporate hubs are in Dhaka, Bangladesh, and Dubai, UAE. However, through our strong global network, we actively serve clients worldwide, with a specialized focus on Europe (Portugal, Spain, Denmark) and the Middle East.",
    category: "General",
  },
  {
    q: "I'm interested. How do we start working together?",
    a: "It’s super easy! Just hit the 'Get a Quote' or 'Contact' button. We’ll jump on a quick consultation call to understand your needs and give you a clear, tailored action plan within 48 hours.",
    category: "Getting Started",
  },
  {
    q: "Do you only manage government tenders locally?",
    a: "While we have deep expertise in the Bangladeshi e-GP system, our sourcing and procurement capabilities extend globally. We help businesses prepare documents, bid strategically, and win high-value contracts seamlessly.",
    category: "Services",
  },
  {
    q: "How fast can you deliver bulk packaging orders?",
    a: "We move fast! Standard items like PVC cards are usually ready within 5-7 business days. For massive bulk orders or custom bags, we’ll give you a precise and realistic timeline upfront so your business never faces delays.",
    category: "Services",
  },
  {
    q: "What happens after our project is finished? Do you still provide support?",
    a: "Absolutely. We don't just deliver and disappear. Whether it's IT maintenance, digital marketing, or future sourcing needs, your dedicated account manager will be available 24/7 to support your ongoing growth.",
    category: "Support",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-10 py-12 md:py-16 px-6 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.04),transparent_60%)] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Sidebar - Spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-8">
              <MessageSquareQuote className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-bold tracking-widest uppercase">Answers</span>
            </div>
            
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Frequently <br />
              <span className="text-gradient-cyan">Asked Questions.</span>
            </h2>
            
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Everything you need to know about our services and how we can help your business scale globally. Can't find the answer? We're here to help.
            </p>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-500"
            >
              <span className="text-base font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ask a Question
              </span>
              <div className="w-10 h-10 rounded-full border border-primary/30 bg-background/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Right — FAQ items (Spans 7 columns) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "border-primary/40 bg-card/60 backdrop-blur-md shadow-[0_0_40px_hsl(var(--primary)/0.08)]"
                      : "border-border/30 bg-card/20 backdrop-blur-sm hover:border-border/60 hover:bg-card/40"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <div className="flex items-center gap-6 pr-4">
                      {/* Number */}
                      <span
                        className={`text-sm font-bold font-mono transition-colors duration-500 ${
                          isOpen ? "text-primary" : "text-muted-foreground/40"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      {/* Question */}
                      <span
                        className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 ${
                          isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {faq.q}
                      </span>
                    </div>

                    {/* Plus/Minus Icon */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                        isOpen
                          ? "bg-primary text-background border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                          : "bg-background/50 border-border/40 text-muted-foreground group-hover:border-border/80 group-hover:text-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 ml-[44px]">
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
