"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Here we define the paths for the partner logos.
// The user needs to place the actual image files inside the "public/images/partners" folder.
const partners = [
  { name: "Construction Investment CMC", logo: "/images/partners/cmc.png" },
  { name: "ZTE Corporation", logo: "/images/partners/zte.png" },
  { name: "Huawei", logo: "/images/partners/huawei.png" },
  { name: "Bangladesh BCC", logo: "/images/partners/bcc.png" },
  { name: "Bangladesh ICT", logo: "/images/partners/ict.png" },
  { name: "Dubai Real Estate", logo: "/images/partners/dubai.png" },
  { name: "Real Estate Investors", logo: "/images/partners/investors.png" },
  { name: "Manpower Exchange", logo: "/images/partners/manpower.png" },
];

const PartnersSection = () => (
  <section className="relative z-10 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 
          className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Trusted By <span className="text-gradient-cyan">Leading Organizations</span>
        </h2>
        <div className="w-16 h-[3px] bg-primary/80 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
      </motion.div>

      {/* Infinite scroll marquee — two rows */}
      <div className="space-y-6 overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-6 px-3">
                {partners.slice(0, 4).map((partner) => (
                  <div
                    key={`${rep}-${partner.name}`}
                    className="group flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-border/15 bg-card/20 backdrop-blur-sm hover:border-primary/25 hover:bg-card/40 transition-all duration-500 cursor-default"
                  >
                    <div className="relative w-full h-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Using standard img tag to avoid Next.js Image strict domain/path requirements during development */}
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain drop-shadow-md"
                        onError={(e) => {
                          // Fallback to text if image is missing
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-sm font-semibold text-center whitespace-normal text-muted-foreground group-hover:text-foreground">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[marquee-reverse_45s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-6 px-3">
                {partners.slice(4).map((partner) => (
                  <div
                    key={`${rep}-${partner.name}`}
                    className="group flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-border/15 bg-card/20 backdrop-blur-sm hover:border-primary/25 hover:bg-card/40 transition-all duration-500 cursor-default"
                  >
                    <div className="relative w-full h-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain drop-shadow-md"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-sm font-semibold text-center whitespace-normal text-muted-foreground group-hover:text-foreground">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
