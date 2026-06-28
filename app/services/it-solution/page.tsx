"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import PortfolioGallery from "@/components/PortfolioGallery";
import { CheckCircle2, Code2, MonitorSmartphone, PenTool, Server, TrendingUp } from "lucide-react";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";

const ITSolution = () => (
  <ServicePageLayout
    title="IT Solution"
    subtitle="Technology Consulting"
    description="Empowering enterprises with high-performance web applications, advanced SEO strategies, and robust digital infrastructure tailored for global scalability."
    icon={MonitorSmartphone}
    primaryCtaText="Discuss Your IT Project with Us"
    secondaryCtaText="Request a Tech Audit"
    features={[
      {
        title: "Enterprise Web & Software Development",
        description: "We build secure, blazing-fast, and highly scalable digital platforms tailored to your specific business architecture.",
        image: "/services/it-solution/feature-1.jpg"
      },
      {
        title: "High-End UI/UX Design",
        description: "First impressions matter. Our design philosophy revolves around user-centric aesthetics and seamless interactivity.",
        image: "/services/it-solution/feature-2.jpg"
      },
      {
        title: "Advanced Search Engine Optimization (SEO)",
        description: "We don't just aim for traffic; we aim for digital dominance. Our specialized SEO strategies ensure your brand is discovered by the right audience.",
        image: "/services/it-solution/feature-3.jpg"
      },
      {
        title: "IT Sourcing & Infrastructure Consultation",
        description: "Leveraging our strength as a global sourcing center, we provide hardware and software infrastructure support.",
        image: "/services/it-solution/feature-4.jpg"
      }
    ]}
    highlights={[
      "Future-Ready Tech Stack: We utilize the most advanced frameworks and tools to ensure your software remains relevant and scalable for years to come.",
      "Security & Performance: Every line of code and every digital campaign is optimized for maximum security and lightning-fast performance.",
      "Dedicated Support: We provide ongoing technical support and continuous monitoring, ensuring zero downtime for your business operations."
    ]}
  >
    {/* Additional Content Section 1: Overview */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Driving Digital <span className="text-gradient-cyan">Excellence</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        In today’s fast-paced digital economy, having a standard online presence is no longer enough. At RH International Sourcing Center, our IT Solutions division acts as your dedicated technology partner. We bridge the gap between complex business challenges and cutting-edge digital innovations. From developing ultra-modern, high-speed web platforms to executing data-driven digital marketing strategies, we provide scalable solutions that accelerate growth and maximize operational efficiency.
      </p>
    </div>

    {/* Additional Content Section 2: Detailed Capabilities */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <MonitorSmartphone className="w-8 h-8 text-primary" />
        Detailed Technical Capabilities
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Capability 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Code2 className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Enterprise Web Development</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom Corporate Websites & Web Applications (React, Next.js, Node.js).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Comprehensive E-commerce platforms with secure gateways.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom CRM and ERP solutions.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <PenTool className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. High-End UI/UX Design</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Wireframing and rapid prototyping for web and mobile.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Ultra-modern interfaces utilizing global design trends (Glassmorphism).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Conversion Rate Optimization (CRO) focused aesthetics.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Advanced SEO Strategies</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Technical SEO:</strong> Auditing architecture, schema, and web vitals.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>AEO & GEO:</strong> Preparing your brand for AI-driven search engines.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Local and International SEO to expand your global footprint.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Server className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. IT Infrastructure Consultation</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>IT hardware sourcing for corporate offices.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Cloud server setup and database architecture consulting.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Digital workflow automation to reduce manual workload.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio Showcase Section */}
    <PortfolioGallery 
      projects={portfolioProjects} 
      categories={portfolioCategories} 
    />

  </ServicePageLayout>
);

export default ITSolution;