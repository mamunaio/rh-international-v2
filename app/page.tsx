"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const CaseStudiesSection = dynamic(() => import("@/components/sections/CaseStudiesSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const GlobalPresenceSection = dynamic(() => import("@/components/sections/GlobalPresenceSection"));
const PartnersSection = dynamic(() => import("@/components/sections/PartnersSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection"));

const GlobeBackground = dynamic(() => import("@/components/GlobeBackground"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Suspense fallback={null}>
        <GlobeBackground />
      </Suspense>
      <div className="fixed inset-0 mesh-gradient pointer-events-none z-[1]" />
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
