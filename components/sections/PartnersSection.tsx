"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Here we define the paths for the partner logos.
// The user needs to place the actual image files inside the "public/images/partners" folder.
const partners = [
  { name: "China National Machinery Import & Export Corporation (CMC)", logo: "/images/partners/cmc.png", href: "https://www.cmc.cn/", hasLogo: true },
  { name: "Huawei", logo: "/images/partners/huawei.svg", href: "https://www.huawei.com/en/", hasLogo: true },
  { name: "BCC", logo: "/images/partners/bcc.svg", href: "http://bcc.gov.bd/", hasLogo: true },
  { name: "ICT", logo: "/images/partners/ict.svg", href: "https://ictd.gov.bd/", hasLogo: true },
  { name: "Dubai Real Estate", logo: "/images/partners/dubai.png", href: "/services/dubai-real-estate", hasLogo: false },
  { name: "Real Estate Investors", logo: "/images/partners/investors.png", href: "/portfolio", hasLogo: true },
  { name: "Manpower Exchange", logo: "/images/partners/manpower.png", href: "/services/manpower", hasLogo: false },
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
                  <Link
                    href={partner.href}
                    target={partner.href.startsWith("http") ? "_blank" : undefined}
                    key={`${rep}-${partner.name}`}
                    className="group flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-border/15 bg-card/20 backdrop-blur-sm hover:border-primary/25 hover:bg-card/40 transition-all duration-500 cursor-pointer"
                  >
                    {partner.hasLogo ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={partner.logo} 
                          alt={partner.name} 
                          fill 
                          className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                        <span className={`font-bold text-center whitespace-normal text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all duration-300 ${partner.name.length > 20 ? 'text-xs leading-snug' : 'text-lg'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </Link>
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
                  <Link
                    href={partner.href}
                    target={partner.href.startsWith("http") ? "_blank" : undefined}
                    key={`${rep}-${partner.name}`}
                    className="group flex items-center justify-center w-48 h-24 px-6 py-4 rounded-xl border border-border/15 bg-card/20 backdrop-blur-sm hover:border-primary/25 hover:bg-card/40 transition-all duration-500 cursor-pointer"
                  >
                    {partner.hasLogo ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image 
                          src={partner.logo} 
                          alt={partner.name} 
                          fill 
                          className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                        />
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                        <span className={`font-bold text-center whitespace-normal text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all duration-300 ${partner.name.length > 20 ? 'text-xs leading-snug' : 'text-lg'}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {partner.name}
                        </span>
                      </div>
                    )}
                  </Link>
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
