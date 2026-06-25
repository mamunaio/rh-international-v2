"use client";

import { Building2, Handshake, Network, Globe } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const DubaiOffice = () => (
  <ServicePageLayout
    title="Dubai Office"
    subtitle="UAE Operations"
    description="Strategic business presence in Dubai providing corporate services, trade facilitation, and market entry support for companies looking to establish operations in the UAE."
    icon={Building2}
    primaryCtaText="Schedule a Consultation"
    secondaryCtaText="Explore UAE Markets"
    features={[
      { title: "Company Formation", description: "End-to-end company registration and licensing in Dubai free zones and mainland jurisdictions." },
      { title: "Trade Facilitation", description: "Import/export facilitation, trade documentation, and logistics coordination through Dubai's strategic hub." },
      { title: "Business Services", description: "Virtual office, PRO services, visa processing, and corporate banking setup for seamless operations." },
      { title: "Market Advisory", description: "Local market intelligence, partnership identification, and business development support in the GCC region." },
    ]}
    highlights={[
      "Established presence in Dubai with localized expertise.",
      "Deep knowledge of UAE business regulations and compliance.",
      "Strong local network and strategic GCC partnerships.",
      "Dedicated multi-lingual support team."
    ]}
  >
    {/* Additional Content Section: Overview */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Your Gateway to the <span className="text-gradient-cyan">Middle East</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Dubai serves as the perfect bridge between Eastern and Western markets. Our dedicated Dubai office acts as your on-ground strategic partner, empowering your business to expand seamlessly into the UAE and broader GCC regions. From navigating complex regulatory frameworks to establishing a robust operational presence, we provide the localized expertise necessary to thrive in one of the world's most dynamic economic hubs.
      </p>
    </div>

    {/* Additional Content Section: Capabilities */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Building2 className="w-8 h-8 text-primary" />
        Corporate Solutions
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Handshake className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Market Entry</h4>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive support for establishing your corporate entity, obtaining trade licenses, and securing necessary free zone approvals.
            </p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Network className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">PRO Services</h4>
            <p className="text-muted-foreground leading-relaxed">
              Streamlined processing for investor visas, employment visas, and all interactions with UAE government departments.
            </p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">Trade & Logistics</h4>
            <p className="text-muted-foreground leading-relaxed">
              Utilize Dubai's unparalleled port and airport infrastructure for optimized global sourcing, warehousing, and rapid distribution.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </ServicePageLayout>
);

export default DubaiOffice;
