"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Briefcase, Building, CheckCircle2, FileText, Landmark, ShieldCheck, FileSignature, HandCoins, Building2, TrendingUp } from "lucide-react";

const GovtTender = () => (
  <ServicePageLayout
    title="Government & Corporate Tenders"
    subtitle="Strategic Procurement & Bidding Excellence"
    description="Navigating government and corporate procurement can be highly complex. We simplify the entire bidding process for you. From sourcing the right tenders and crafting winning pricing strategies to flawless documentation and compliance, our specialized team ensures your business is always positioned to win high-value contracts across public and private sectors."
    icon={Landmark}
    features={[
      {
        title: "Tender Sourcing & Strategy",
        description: "Identifying highly relevant government and corporate tenders, and advising on the most viable bidding strategy (OTM, LTM, DPM or Corporate RFPs) to maximize your win rate.",
        image: "/images/case-studies/tender_success.png"
      },
      {
        title: "e-GP & Manual Bid Management",
        description: "Complete management of both electronic and manual submission portals. From e-GP profile creation and renewals to precise physical tender dropping, we handle the logistics.",
        image: "/services/govt-tender/feature-2.jpg"
      },
      {
        title: "Flawless Document Preparation",
        description: "Accurate preparation of Tender Document Setup (TDS), Bill of Quantities (BOQ), and ensuring all mandatory compliance paperwork is flawlessly organized.",
        image: "/services/govt-tender/feature-3.jpg"
      },
      {
        title: "Financial Synergies & Compliance",
        description: "Guiding you through financial requirements, including Liquid Asset Certificates, Credit Line formats, and structuring solid Joint Venture (JV) Consortium agreements.",
        image: "/services/govt-tender/feature-4.jpg"
      },
      {
        title: "End-to-End Contract Support",
        description: "Our support doesn't end at submission. We assist through the evaluation phase, negotiation, and contract signing, ensuring a smooth transition to project execution.",
        image: "/services/govt-tender/feature-5.jpg"
      }
    ]}
    highlights={[
      "Zero-Error Policy: We double-check every clause of the tender document to ensure 100% responsiveness.",
      "Comprehensive Reach: We cover both national e-GP systems and private corporate procurement networks.",
      "Confidentiality: Your commercial rates, strategies, and financial data are handled with strict corporate non-disclosure protocols."
    ]}
  >
    {/* Additional Content Section 1: Introduction */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Winning High-Value Contracts <span className="text-gradient-cyan">Made Simple</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Participating in major tenders requires more than just meeting the baseline criteria; it demands a strategic approach, a profound understanding of procurement rules, and zero margin for error in documentation. We act as your dedicated procurement partner. From handling the complexities of the National e-GP portal and corporate RFPs to securing banking compliance and preparing winning financial propositions, our expert team ensures your business is always positioned at the forefront of the contracting world.
      </p>
    </div>

    {/* Additional Content Section 2: Comprehensive Services */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <span><FileText className="w-8 h-8 text-primary" /></span>
        Our Comprehensive Tender Management Services
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Service 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Hybrid Bid Management</h4>
            <p className="text-muted-foreground leading-relaxed">
              We eliminate the technical friction of bidding platforms. Our services include e-GP profile registration, Maker/Checker management, and seamless execution of physical (manual) corporate tender drops, ensuring you never miss a lucrative opportunity.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Strategic Bidding Advisory</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Not every tender requires the same approach. We advise on the most viable bidding strategy based on the client type:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Government (OTM/LTM):</strong> Competitive national pricing and routine works strategies.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Corporate RFPs:</strong> Value-driven proposals focusing on ROI and enterprise solutions.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>DPM & Proprietary:</strong> Consultation for emergency or specialized supply contracts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <FileSignature className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Flawless Documentation</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Disqualification often happens due to minor documentation errors. We meticulously audit:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Tender Document Setup (TDS) and Bill of Quantities (BOQ).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Mandatory compliance papers (TIN, BIN, Tax Clearance, Audits).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Past performance certificates and ongoing work experience.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <HandCoins className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. Financial Synergies & Compliance</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A strong financial footprint is key to winning mega-projects. We guide you in:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Liquid Asset Certificates and working capital proofs.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Unconditional Credit Line formats from scheduled banks.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Forming compliant Joint Venture (JV) Consortium agreements.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Content Section 3: Specialized Sectors */}
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <TrendingUp className="w-8 h-8 text-primary" />
        Key Sectors We Serve
      </h3>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        Procurement varies heavily by sector. We have deep operational insights into the bidding structures of top-tier industries and ministries:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">National Infrastructure & Tech</h4>
            <p className="text-muted-foreground leading-relaxed">Large-scale government ICT projects, digital platform development, and heavy infrastructure works under major ministries.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">Corporate Supply Chain</h4>
            <p className="text-muted-foreground leading-relaxed">Navigating private sector RFPs for bulk equipment supply, software licensing, and ongoing corporate service agreements.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">Agriculture & Specialized Industries</h4>
            <p className="text-muted-foreground leading-relaxed">Supply of advanced machinery, renewable energy solutions (like Solar Panels), and critical industrial resources.</p>
          </div>
        </div>
      </div>
    </div>
  </ServicePageLayout>
);

export default GovtTender;