"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import GlobalPresenceSection from "@/components/sections/GlobalPresenceSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import { Suspense } from "react";
import dynamic from "next/dynamic";

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
