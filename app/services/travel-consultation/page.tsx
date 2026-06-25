"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Briefcase, Building, CheckCircle2, FileText, Globe, MapPin, Plane, UserCheck } from "lucide-react";

const TravelConsultation = () => (
  <ServicePageLayout
     title="Travel Consultation"
    subtitle="Portugal · Spain · Denmark"
    description="Specialized consultation and comprehensive travel management for Portugal, Spain, and Denmark. We turn your European aspirations into reality with expert guidance and transparent processing."
    icon={Plane}
    primaryCtaText="Book a Free Profile Assessment"
    secondaryCtaText="Consult with Our Visa Experts"
    features={[
      {
        title: "Comprehensive Profile Assessment",
        description: "We don't just fill out forms; we analyze your profile. Our experts review your background to recommend the most strategic approach for a successful visa application."
      },
      {
        title: "Flawless Document Preparation",
        description: "The secret to Schengen visa approval lies in the paperwork. We audit, fix, and organize all necessary documents tailored to your specific travel purpose."
      },
      {
        title: "Corporate & B2B Travel Management",
        description: "Leveraging our global sourcing network, we organize seamless travel for corporate teams, including trade fairs and B2B meetings."
      },
      {
        title: "Appointment & Interview Guidance",
        description: "We navigate the complexities of VFS and embassy portals to secure timely appointment slots and provide comprehensive interview briefing sessions."
      }
    ]}
    highlights={[
      "Specialized Expertise: By focusing strictly on Portugal, Spain, and Denmark, we maintain an unparalleled, in-depth understanding of their specific immigration and visa policies.",
      "Transparent Processing: No hidden fees, no false promises. We provide an honest assessment of your visa chances before initiating the process.",
      "High Success Rate: Our zero-error documentation policy significantly minimizes the risk of visa refusals."
    ]}
  >
    {/* Additional Content Section 1: Overview */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Navigating <span className="text-gradient-cyan">European Travel</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Securing a visa and planning a trip to the Schengen Area require meticulous preparation, accurate documentation, and up-to-date knowledge of embassy regulations. At RH International Sourcing Center, our Travel Consultation division acts as your dedicated advising partner. Whether you are traveling for corporate trade fairs, seeking business expansion, or planning a personal visit, we bypass bureaucratic hurdles to ensure a seamless and cost-effective journey to Europe's most sought-after destinations.
      </p>
    </div>

    {/* Additional Content Section 2: Detailed Services */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <UserCheck className="w-8 h-8 text-primary" />
        Our Core Travel Services
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Service 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <UserCheck className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Profile Strategy</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">We analyze your financial standing and travel history.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>In-depth financial review to maximize approval chances.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Customized strategy tailored to your exact travel purpose.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Document Preparation</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">The secret to approval lies in flawless paperwork.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Drafting persuasive, highly tailored Cover Letters.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Organizing and authenticating bank statements.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Securing authentic hotel reservations and itineraries.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Building className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Corporate Travel Management</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">Seamless coordination for trade fairs and teams.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Visa assistance for international B2B meetings.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Premium accommodation and transfer sourcing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. Appointment & Interview Prep</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">Securing your slot and ensuring you are ready.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Navigating VFS/embassy portals for fast booking.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Comprehensive briefing sessions before your interview.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Content Section 3: Specialized Destinations */}
    <div>
      <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Globe className="w-8 h-8 text-primary" />
        Our Specialized Destinations
      </h3>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        By focusing on a select few countries, we provide deep, specialized expertise that general agencies cannot match.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Portugal</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">A prime destination for both business ventures and residency pathways. We provide deep insights for tourism, business visits, and long-term settlement programs.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Spain</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">Whether attending a conference in Barcelona or exploring Madrid, we streamline the process to ensure your itinerary aligns with strict Spanish embassy requirements.</p>
          </div>
        </div>
        
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Denmark</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">Known for its strict visa policies, Denmark requires an exact application approach. We assist professionals with precise guidance on documentation for short-stay business visas.</p>
          </div>
        </div>
      </div>
    </div>
  </ServicePageLayout>
);

export default TravelConsultation;
