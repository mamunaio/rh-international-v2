"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Briefcase, Building, CheckCircle2, FileText, Landmark, ShieldCheck, FileSignature, HandCoins, Building2 } from "lucide-react";

const GovtTender = () => (
  <ServicePageLayout
    title="Government Tenders"
    subtitle="Precision & Expertise"
    description="Navigating government tenders can be highly complex and time-consuming. We simplify the entire public procurement process for you. From initial e-GP registration to strategic bidding and contract awarding, our specialized team ensures your business stays compliant, competitive, and ready to win high-value government contracts across major ministries in Bangladesh."
    icon={Landmark}
    features={[
      {
        title: "Comprehensive e-GP Management",
        description: "Complete e-GP profile creation, regular maintenance, and rapid renewal services. We handle the technicalities so you can focus on execution.",
        image: "/services/govt-tender/feature-1.jpg"
      },
      {
        title: "Strategic Bidding (DPM, LTM, OTM)",
        description: "Expert consultancy on selecting the right procurement method. Whether it’s Direct Procurement (DPM), Limited Tendering (LTM), or Open Tendering (OTM).",
        image: "/services/govt-tender/feature-2.jpg"
      },
      {
        title: "Specialized Ministry Focus",
        description: "Deep expertise in processing and submitting bids for heavy-budget sectors, including the Ministry of Road Transport, Railways, and Agriculture.",
        image: "/services/govt-tender/feature-3.jpg"
      },
      {
        title: "Flawless Document Preparation",
        description: "Accurate preparation of Tender Document Setup (TDS), Bill of Quantities (BOQ), and compliance paperwork (TIN, BIN, Trade License).",
        image: "/services/govt-tender/feature-4.jpg"
      },
      {
        title: "Financial & JV Support",
        description: "Professional assistance in organizing Liquid Asset certificates, Credit Line formats, and establishing solid Joint Venture Consortium agreements.",
        image: "/services/govt-tender/feature-5.jpg"
      }
    ]}
    highlights={[
      "Zero-Error Policy: We double-check every clause of the tender document to ensure 100% responsiveness.",
      "Time-Critical Execution: Government deadlines are absolute. We ensure your bids are encrypted and submitted well before the closing time.",
      "Confidentiality: Your commercial rates, strategies, and financial data are handled with strict corporate non-disclosure protocols."
    ]}
  >
    {/* Additional Content Section 1: Introduction */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Winning Government Contracts <span className="text-gradient-cyan">Made Simple</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Participating in government tenders requires more than just meeting the baseline criteria; it demands a strategic approach, a profound understanding of the Public Procurement Rules (PPR), and zero margin for error documentation. We are RH International, and we act as your dedicated public procurement partner. From handling the complexities of the National e-GP portal to securing banking compliance and preparing winning financial propositions, our expert team ensures your business is always positioned at the forefront of government contracting.
      </p>
    </div>

    {/* Additional Content Section 2: Comprehensive Services */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <FileText className="w-8 h-8 text-primary" />
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
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Complete e-GP Portal Management</h4>
            <p className="text-muted-foreground leading-relaxed">
              We eliminate the technical friction of the e-GP system. Our services include new profile registration, regular Maker/Checker ID management, timely renewals, and constant monitoring of relevant tender notices so you never miss an opportunity.
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
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Strategic Bidding Methods</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Not every tender requires the same approach. We advise on the most viable bidding strategy:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>OTM:</strong> Competitive national and international bidding for large-scale projects.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>LTM:</strong> Routine government works with optimized pricing strategies.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>DPM:</strong> Consultation for proprietary or emergency government supplies.</span>
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
                <span>Mandatory compliance papers (TIN, BIN, Tax Clearance).</span>
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

    {/* Additional Content Section 3: Specialized Ministries */}
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Building2 className="w-8 h-8 text-primary" />
        Ministries We Specialize In
      </h3>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        Government procurement varies heavily by sector. We have deep operational insights into the bidding structures of top-tier ministries:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">Ministry of Road Transport & Railways</h4>
            <p className="text-muted-foreground leading-relaxed">Heavy infrastructure projects, road/bridge construction, railway sleeper supply, and maintenance works.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">Ministry of Shipping</h4>
            <p className="text-muted-foreground leading-relaxed">Specialized procurement involving river dredging, port equipment supply, and vessel maintenance.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <h4 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">Ministry of Agriculture</h4>
            <p className="text-muted-foreground leading-relaxed">Supply of advanced agricultural machinery (tractors, harvesters), bulk fertilizer procurement, and irrigation development projects.</p>
          </div>
        </div>
      </div>
    </div>
  </ServicePageLayout>
);

export default GovtTender;