"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Briefcase, Building2, CheckCircle2, FileText, Globe, MapPin, Plane, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const ManpowerSolutions = () => (
  <ServicePageLayout
     title="Global Manpower Solutions"
    subtitle="Denmark · Spain · Portugal"
    description="Specialized manpower and recruitment solutions connecting skilled professionals with top-tier opportunities in Denmark, Spain, and Portugal. We ensure transparent processing and full compliance."
    icon={Users}
    primaryCtaText="Submit Your CV"
    secondaryCtaText="Consult with Our Experts"
    features={[
      {
        title: "Rigorous Screening Process",
        description: "We don't just forward resumes. We conduct thorough background checks and skill assessments to match candidates perfectly with European employer requirements.",
        image: "/images/manpower/feat-1.jpg"
      },
      {
        title: "Flawless Visa Documentation",
        description: "Navigating European work permits is complex. Our dedicated team handles all paperwork, ensuring zero-error submissions for maximum approval chances.",
        image: "/images/manpower/feat-2.jpg"
      },
      {
        title: "Employer Partnerships",
        description: "We work directly with established companies in Denmark, Spain, and Portugal to secure authentic demand letters and reliable employment contracts.",
        image: "/images/manpower/feat-3.jpg"
      },
      {
        title: "Post-Arrival Support",
        description: "Our responsibility doesn't end at visa approval. We assist with initial settlement, accommodation guidance, and compliance with local labor laws.",
        image: "/images/manpower/feat-4.jpg"
      }
    ]}
    highlights={[
      "98% Visa Success Rate: Thanks to our meticulous screening and flawless documentation process, we maintain an industry-leading success rate.",
      "Transparent Processing: Zero hidden fees. We provide clear, honest assessments and progress tracking throughout your application.",
      "Direct European Focus: By specializing exclusively in Denmark, Spain, and Portugal, we maintain direct relationships with employers and understand their exact immigration policies."
    ]}
  >
    {/* Additional Content Section 1: Demand Letter Alert */}
    <div className="mb-16">
      <div className="relative group p-8 rounded-3xl bg-red-500/10 border border-red-500/20 shadow-lg overflow-hidden flex items-start gap-6">
        <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
          <FileText className="w-7 h-7 text-red-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-red-400 mb-2">Demand Letter Status: Fully Booked</h3>
          <p className="text-muted-foreground leading-relaxed">
            Currently, there are <strong className="text-foreground">no new demand letters available</strong>. Our last successful delivery and placement cycle was completed on <strong className="text-foreground">March 27</strong>. 
            Please stay connected or submit your CV to our database so we can notify you immediately when the next batch of opportunities opens up.
          </p>
        </div>
      </div>
    </div>

    {/* Additional Content Section 2: How We Progress */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Globe className="w-8 h-8 text-primary" />
        Our <span className="text-gradient-cyan">Processing Steps</span>
      </h3>
      
      <div className="space-y-6">
        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0">1</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Profile Assessment & Registration</h4>
              <p className="text-muted-foreground">We review your skills, experience, and educational background to determine your eligibility for available European roles.</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0">2</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Employer Matching & Interview</h4>
              <p className="text-muted-foreground">Once matched with a demand letter, we prepare you for employer interviews and skill tests to ensure a successful placement.</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0">3</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Work Permit & Visa Processing</h4>
              <p className="text-muted-foreground">Upon selection, our legal team initiates the work permit application and guides you through the embassy visa procedures with flawless documentation.</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0">4</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Deployment & Onboarding</h4>
              <p className="text-muted-foreground">After visa approval, we assist with flight arrangements, initial accommodation, and reporting to the employer in the destination country.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Content Section 3: Available Offers / Categories */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Briefcase className="w-8 h-8 text-primary" />
        Core <span className="text-gradient-cyan">Job Sectors</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-card/40 border border-border/40 hover:bg-card/60 transition-all duration-300">
          <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Denmark
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Agriculture & Farming</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Factory & Manufacturing</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Hospitality Services</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-card/40 border border-border/40 hover:bg-card/60 transition-all duration-300">
          <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Spain
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Construction & Engineering</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> IT & Software Professionals</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Tourism & Hospitality</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-card/40 border border-border/40 hover:bg-card/60 transition-all duration-300">
          <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Portugal
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Delivery & Logistics</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Agriculture Workers</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Factory Operatives</li>
          </ul>
        </div>
      </div>
    </div>

  </ServicePageLayout>
);

export default ManpowerSolutions;
