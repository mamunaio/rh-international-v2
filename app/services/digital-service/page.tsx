"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import PortfolioGallery from "@/components/PortfolioGallery";
import { CheckCircle2, Layers, Package, Search, ShoppingCart, Target } from "lucide-react";

const digitalProjects = [
  {
    id: "p1",
    title: "Global Reach Marketing Campaign",
    category: ["Campaigns", "Branding"],
    image: "/images/portfolio/campaign.png",
    techStack: ["Social Media", "Video Production", "Copywriting"]
  },
  {
    id: "p2",
    title: "D2C Brand Growth Strategy",
    category: ["E-Commerce", "Strategy"],
    image: "/images/portfolio/ecommerce.png",
    techStack: ["Shopify Plus", "Klaviyo", "Meta Ads"]
  },
  {
    id: "p3",
    title: "Organic Traffic Scaling (10x)",
    category: ["SEO", "Content"],
    image: "/images/portfolio/seo.png",
    techStack: ["Ahrefs", "Google Analytics", "Content Strategy"]
  },
  {
    id: "p4",
    title: "B2B Lead Generation Automation",
    category: ["Automation", "Strategy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    techStack: ["HubSpot", "Zapier", "LinkedIn Ads"]
  }
];

const DigitalService = () => (
  <ServicePageLayout
    title="Digital Service & E-commerce"
    subtitle="Service Consultation"
    description="End-to-end digital consultation and highly scalable e-commerce infrastructures. We build, optimize, and manage digital platforms designed for maximum conversion and seamless user experiences."
    icon={ShoppingCart}
    primaryCtaText="Book a Digital Strategy Session"
    primaryCtaLink="/booking"
    secondaryCtaText="Launch Your E-Commerce Platform"
    secondaryCtaLink="/contact"
    features={[
      {
        title: "Enterprise E-Commerce Architecture",
        description: "We build lightning-fast, secure, and visually stunning online stores utilizing ultra-modern web technologies (like Next.js and React)."
      },
      {
        title: "Comprehensive Digital Strategy & Consultation",
        description: "Navigating the digital landscape requires a clear roadmap. Our strategic consultants help you align technology with your business goals."
      },
      {
        title: "Digital Product Sourcing & Merchandising",
        description: "Leveraging our core strength as a sourcing center, we assist e-commerce businesses in optimizing their product pipelines."
      },
      {
        title: "Advanced Digital Growth & SEO",
        description: "A beautiful store is useless without targeted traffic. We deploy aggressive digital growth strategies to dominate search results."
      }
    ]}
    highlights={[
      "Performance-First Approach: Our platforms are engineered for speed, ensuring zero friction from the landing page to the checkout cart.",
      "Scalability: As your transaction volume grows, our robust digital infrastructures scale seamlessly with your business.",
      "Holistic Ecosystem: From sourcing the physical product to selling it on a high-end digital platform, we provide a complete, 360-degree business solution."
    ]}
  >
    {/* Additional Content Section 1: Overview */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Empowering Your <span className="text-gradient-cyan">Digital Footprint</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        In the modern marketplace, a successful business requires more than just a standard website; it demands a strategic digital ecosystem. At RH International Sourcing Center, our Digital Service & E-commerce division bridges the gap between traditional business models and cutting-edge digital commerce. Whether you are launching a D2C brand, scaling a B2B wholesale platform, or seeking expert digital transformation consultancy, we provide robust, future-proof solutions.
      </p>
    </div>

    {/* Additional Content Section 2: Detailed Capabilities */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <ShoppingCart className="w-8 h-8 text-primary" />
        Our Core Digital Services
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Capability 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Layers className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Enterprise E-Commerce Architecture</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom storefront development with high-end UI/UX.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Seamless integration of local and international payment gateways.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Advanced inventory and secure multi-vendor architectures.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>B2B bulk-ordering portals with dynamic pricing tiers.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Strategy & Consultation</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Business model validation and digital transformation planning.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Data-driven Conversion Rate Optimization (CRO).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Automation of digital workflows to reduce operational overhead.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Package className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Product Sourcing & Merchandising</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Dropshipping and bulk product sourcing integration.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>E-commerce catalog management and product descriptions.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Digital supply chain consultation to streamline fulfillment.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Search className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. Advanced Digital Growth</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Technical SEO:</strong> Optimizing site architecture and core web vitals.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>GEO & AEO:</strong> Preparing your brand for AI search engines.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Omni-channel digital marketing and data analytics tracking.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio Showcase Section */}
    <PortfolioGallery 
      projects={digitalProjects} 
      categories={["E-Commerce", "Strategy", "Campaigns", "Branding", "SEO", "Automation"]} 
    />

  </ServicePageLayout>
);

export default DigitalService;