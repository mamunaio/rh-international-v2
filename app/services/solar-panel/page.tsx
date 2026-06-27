"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Zap, ShieldCheck, CheckCircle2, Battery, Settings, HandCoins, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const SolarPanelService = () => (
  <ServicePageLayout
    title="Solar Panel Installation, Repair, and Supply"
    subtitle="Sustainable Energy Solutions"
    description="Transition to clean, renewable energy with our comprehensive solar solutions. We provide end-to-end services from high-quality solar panel supply to professional installation and reliable repair. Whether for residential, commercial, or industrial applications, our expert team ensures maximum efficiency, lower energy costs, and a greener future."
    icon={Zap}
    features={[
      {
        title: "Expert Installation",
        description: "Professional and safe installation of solar panel systems customized to your property's energy needs and structural design."
      },
      {
        title: "Quality Supply",
        description: "We source and supply high-efficiency, durable solar panels and inverters from leading global manufacturers."
      },
      {
        title: "Maintenance & Repair",
        description: "Comprehensive maintenance packages and rapid-response repair services to ensure your system operates at peak performance."
      },
      {
        title: "System Design & Consultation",
        description: "Tailored energy audits and system designs to maximize your return on investment and energy savings."
      },
      {
        title: "Battery Storage Solutions",
        description: "Integration of advanced battery storage systems to keep your property powered even during grid outages."
      }
    ]}
    highlights={[
      "Turnkey Solutions: From initial consultation to final commissioning, we handle the entire process.",
      "Certified Professionals: Our technicians are highly trained and certified in renewable energy systems.",
      "Cost Efficiency: Reduce your carbon footprint while significantly lowering your monthly utility bills."
    ]}
  >
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Powering Your Future with <span className="text-gradient-cyan">Solar Energy</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        As energy demands grow and environmental concerns take center stage, solar power offers a reliable and sustainable alternative. Our dedicated team is committed to delivering state-of-the-art solar technologies that empower businesses and homeowners alike. By choosing our services, you are investing in a robust energy infrastructure that pays for itself over time.
      </p>
    </div>

    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Zap className="w-8 h-8 text-primary" />
        Our Comprehensive Solar Services
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Service 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Premium Equipment Supply</h4>
            <p className="text-muted-foreground leading-relaxed">
              We provide Tier-1 solar panels, high-efficiency inverters, and robust mounting hardware. Our procurement network ensures you receive the best technology available on the market with solid manufacturer warranties.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Professional Installation</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our installation process is thorough and compliant with all safety standards:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Site assessment and structural analysis.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Secure mounting and optimal angling for maximum sun exposure.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Safe electrical integration and grid connection.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Settings className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Maintenance & Repair</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Keep your system running optimally with our ongoing support:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Routine cleaning and performance diagnostics.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Rapid troubleshooting and component replacement.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>System upgrades and expansions.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Battery className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. Battery Storage & Backup</h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Enhance your energy independence:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Seamless integration of high-capacity solar batteries.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Uninterrupted power supply during grid failures.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Smart energy management systems to optimize usage.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Content Section: Portfolio Gallery */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <ImageIcon className="w-8 h-8 text-primary" />
        Our Solar Portfolio
      </h3>
      <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
        Take a look at some of our recent solar installations, ranging from residential rooftops to expansive commercial solar farms.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group rounded-3xl overflow-hidden aspect-[4/3]">
          <Image 
            src="/portfolio/solar/residential.png" 
            alt="Residential Solar Installation"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h4 className="text-xl font-bold text-white mb-2">Residential Excellence</h4>
            <p className="text-white/80 text-sm">Modern home installations maximizing roof efficiency.</p>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden aspect-[4/3]">
          <Image 
            src="/portfolio/solar/commercial.png" 
            alt="Commercial Solar Farm"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h4 className="text-xl font-bold text-white mb-2">Commercial Scale</h4>
            <p className="text-white/80 text-sm">High-yield industrial and commercial solar farms.</p>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden aspect-[4/3]">
          <Image 
            src="/portfolio/solar/maintenance.png" 
            alt="Solar Maintenance"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h4 className="text-xl font-bold text-white mb-2">Professional Maintenance</h4>
            <p className="text-white/80 text-sm">Ongoing support and high-tech diagnostics.</p>
          </div>
        </div>
      </div>
    </div>
  </ServicePageLayout>
);

export default SolarPanelService;
