"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, CheckCircle2, Globe, TrendingUp, Users, Target, ShieldCheck, Zap, BookOpen, Handshake, Plane, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useState, useEffect } from "react";

// Mock data for country case studies
const countriesData: Record<string, any> = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    role: "Corporate Office & Tech Hub",
    headline: "Driving Corporate Strategy and Tech Innovation",
    bgImage: "/portfolio/countries/usa.png",
    overview: "In the USA, RH International focuses on custom software solutions, enterprise web development, and digital marketing. Our Austin office serves as the central node for delivering cutting-edge tech to North American enterprises.",
    stats: [
      { label: "Completed Projects", value: "25+", icon: Briefcase },
      { label: "Client Satisfaction", value: "98%", icon: Target },
      { label: "Tech Experts", value: "30+", icon: Users }
    ],
    jobsCompleted: [
      {
        title: "Enterprise Web Development",
        category: "Web & E-Commerce",
        description: "Built scalable custom websites and e-commerce platforms using modern tech stacks for high-traffic retail brands.",
        icon: Globe
      },
      {
        title: "Software Solutions (HRM/CRM)",
        category: "Management Apps",
        description: "Developed customized HR and Customer Relationship Management systems to streamline corporate operations.",
        icon: Building2
      },
      {
        title: "SEO & Digital Marketing",
        category: "Digital Growth",
        description: "Executed comprehensive SEO strategies and digital ad campaigns that doubled online revenue for our clients.",
        icon: TrendingUp
      }
    ],
    portfolioProjects: [
      {
        title: "Enterprise HRM System",
        category: "Software Solutions",
        image: "/portfolio/projects/hrm.png",
        challenge: "Managing a decentralized workforce of 5000+ employees required a unified platform.",
        solution: "We built a custom HRM system with automated payroll, performance tracking, and advanced analytics."
      },
      {
        title: "Global E-Commerce Platform",
        category: "Web Development",
        image: "/portfolio/projects/webdev.png",
        challenge: "Scaling sales internationally required a robust, multi-currency platform.",
        solution: "Deployed a high-performance custom web app integrating seamless payment gateways and dynamic localization."
      }
    ]
  },
  bangladesh: {
    name: "Bangladesh",
    flag: "🇧🇩",
    role: "Headquarters & Operations",
    headline: "Powering Operations, IT, and Government Initiatives",
    bgImage: "/portfolio/countries/bangladesh.png",
    overview: "Our Dhaka headquarters is the operational heart of RH International. We manage large-scale government tenders, drive digital transformation through our IT division, and oversee massive logistics operations from our Gazipur zone office.",
    stats: [
      { label: "Completed Projects", value: "80+", icon: Briefcase },
      { label: "Govt Tenders", value: "15+", icon: Award },
      { label: "Team Members", value: "200+", icon: Users }
    ],
    jobsCompleted: [
      {
        title: "Large-Scale Govt Procurement",
        category: "Tender & Supply",
        description: "Successfully executed multi-million dollar government tenders, supplying technical equipment and infrastructure materials.",
        icon: Award
      },
      {
        title: "Commercial Solar Panels",
        category: "Solar Energy",
        description: "Successfully installed and maintained large-scale solar energy systems for factories and warehouses, reducing grid dependence.",
        icon: Zap
      },
      {
        title: "Digital Transformation & IT",
        category: "Software Development",
        description: "Provided custom digital solutions, from smart HR tools to web portals, enhancing corporate efficiency.",
        icon: Target
      }
    ],
    portfolioProjects: [
      {
        title: "National Infrastructure Portal",
        category: "Web Development",
        image: "/portfolio/projects/webdev.png",
        challenge: "The client needed a secure, high-traffic portal to manage procurement data.",
        solution: "Engineered a scalable web application with role-based access control and real-time reporting."
      },
      {
        title: "Automated Staff Management App",
        category: "Mobile Application",
        image: "/portfolio/projects/hrm.png",
        challenge: "Tracking field staff across 20+ locations was inefficient.",
        solution: "Developed a cross-platform mobile app with GPS tracking, task assignments, and offline sync."
      }
    ]
  },
  uae: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    role: "Middle East Tech Hub",
    headline: "Connecting Markets through Advanced Digital Solutions",
    bgImage: "/portfolio/countries/uae.png",
    overview: "Located in the bustling Business Bay of Dubai, our UAE branch acts as the critical bridge for software solutions, mobile apps, and digital marketing in the Middle East.",
    stats: [
      { label: "Completed Projects", value: "30+", icon: Briefcase },
      { label: "Mobile Apps Built", value: "12+", icon: Target },
      { label: "Satisfied Clients", value: "95%", icon: CheckCircle2 }
    ],
    jobsCompleted: [
      {
        title: "Mobile Application Development",
        category: "Mobile Apps",
        description: "Engineered intuitive iOS and Android applications tailored for the luxury real estate and retail sectors.",
        icon: Globe
      },
      {
        title: "Cloud & AI Integration",
        category: "Tech Infrastructure",
        description: "Migrated legacy systems to scalable cloud architectures with integrated AI analytics.",
        icon: Zap
      },
      {
        title: "SEO & Brand Marketing",
        category: "Digital Strategy",
        description: "Boosted visibility for Middle Eastern startups through targeted digital marketing and brand positioning.",
        icon: TrendingUp
      }
    ],
    portfolioProjects: [
      {
        title: "Luxury Real Estate App",
        category: "Mobile Application",
        image: "/portfolio/projects/webdev.png",
        challenge: "High-net-worth clients needed a seamless way to browse premium properties securely.",
        solution: "Designed an elegant, fast mobile app featuring virtual tours, secure messaging, and AI-driven recommendations."
      },
      {
        title: "Cloud-Based Retail ERP",
        category: "Management Software",
        image: "/portfolio/projects/hrm.png",
        challenge: "A retail chain was struggling with disjointed inventory systems across multiple branches.",
        solution: "Deployed a centralized cloud ERP that synchronized inventory, sales, and HR data in real-time."
      }
    ]
  },
  portugal: {
    name: "Portugal",
    flag: "🇵🇹",
    role: "European IT Expansion Hub",
    headline: "Your Gateway to European Tech and Software Solutions",
    bgImage: "/portfolio/countries/portugal.png",
    overview: "Our Portugal operations specialize in establishing tech presence in Europe. We provide complete custom web development, CRM software, and comprehensive digital solutions for companies tapping into the EU market.",
    stats: [
      { label: "IT Setups", value: "20+", icon: Building2 },
      { label: "Web Portals", value: "15+", icon: Globe },
      { label: "Client Retention", value: "100%", icon: CheckCircle2 }
    ],
    jobsCompleted: [
      {
        title: "Custom Web Solutions",
        category: "Web Development",
        description: "Developed localized, highly optimized corporate websites ensuring compliance with EU standards.",
        icon: Globe
      },
      {
        title: "CRM Implementation",
        category: "Software Solutions",
        description: "Deployed robust Customer Relationship Management systems tailored for European client engagement.",
        icon: Target
      },
      {
        title: "Digital Marketing Strategy",
        category: "SEO & Marketing",
        description: "Executed data-driven digital marketing campaigns to build brand authority in the Iberian Peninsula.",
        icon: TrendingUp
      }
    ],
    portfolioProjects: [
      {
        title: "Pan-European Logistics Dashboard",
        category: "Custom Software",
        image: "/portfolio/projects/hrm.png",
        challenge: "A logistics provider needed real-time tracking across European borders.",
        solution: "Built a customized web dashboard with advanced API integrations for fleet tracking and customs compliance."
      },
      {
        title: "EU E-Commerce Expansion",
        category: "Web & SEO",
        image: "/portfolio/projects/webdev.png",
        challenge: "An Asian brand struggled to gain traction in European search engines.",
        solution: "Created a fully localized, GDPR-compliant e-commerce platform backed by aggressive regional SEO."
      }
    ]
  },
  spain: {
    name: "Spain",
    flag: "🇪🇸",
    role: "Digital & Management Hub",
    headline: "Strategic Digital Growth and App Development",
    bgImage: "/portfolio/countries/spain.png",
    overview: "Our Spain division focuses heavily on digital transformation. From cutting-edge management apps to full-scale digital marketing, we offer personalized strategies for corporate expansion.",
    stats: [
      { label: "Apps Deployed", value: "10+", icon: ShieldCheck },
      { label: "SEO Growth", value: "250%", icon: TrendingUp },
      { label: "Consultations", value: "200+", icon: Users }
    ],
    jobsCompleted: [
      {
        title: "Management Applications",
        category: "Software Development",
        description: "Built scalable management tools for the hospitality and real estate sectors in Madrid and Barcelona.",
        icon: Building2
      },
      {
        title: "Custom E-Commerce",
        category: "Web Development",
        description: "Designed high-converting online stores integrating European payment gateways seamlessly.",
        icon: Globe
      },
      {
        title: "Cybersecurity Solutions",
        category: "IT Security",
        description: "Implemented comprehensive security audits and data protection frameworks for growing startups.",
        icon: Target
      }
    ],
    portfolioProjects: [
      {
        title: "Hospitality Management App",
        category: "Mobile Application",
        image: "/portfolio/projects/webdev.png",
        challenge: "Boutique hotels needed a unified tool to manage bookings, staff, and guest services.",
        solution: "Developed an all-in-one mobile management app that increased operational efficiency by 40%."
      },
      {
        title: "Corporate Data Security Overhaul",
        category: "Cybersecurity",
        image: "/portfolio/projects/hrm.png",
        challenge: "A financial startup needed to ensure strict compliance with European data laws.",
        solution: "Deployed end-to-end encryption, regular penetration testing, and secure cloud backups."
      }
    ]
  },
  denmark: {
    name: "Denmark",
    flag: "🇩🇰",
    role: "Scandinavian Tech Partner",
    headline: "Bridging the Gap to Scandinavian Innovation",
    bgImage: "/portfolio/countries/denmark.png",
    overview: "Our Denmark hub is dedicated to software development, sustainable tech solutions, and B2B digital integrations. We connect rapidly growing enterprises with the innovative Scandinavian ecosystem.",
    stats: [
      { label: "Digital Integrations", value: "30+", icon: Users },
      { label: "B2B Tech Matches", value: "25+", icon: Handshake },
      { label: "Client Retention", value: "95%", icon: ShieldCheck }
    ],
    jobsCompleted: [
      {
        title: "Sustainable Tech Portals",
        category: "Web Development",
        description: "Developed comprehensive web portals for green-energy producers to manage supply chains.",
        icon: Globe
      },
      {
        title: "B2B API Integrations",
        category: "Software Engineering",
        description: "Built secure API layers connecting South Asian manufacturers directly with Danish retail systems.",
        icon: Zap
      },
      {
        title: "Enterprise SEO",
        category: "Digital Marketing",
        description: "Dominating search rankings for specialized B2B industrial services in the Nordic region.",
        icon: Target
      }
    ],
    portfolioProjects: [
      {
        title: "Green Energy Supply Chain Portal",
        category: "Web Development",
        image: "/portfolio/projects/webdev.png",
        challenge: "Tracking renewable energy components from Asia to Denmark was opaque and slow.",
        solution: "Engineered a transparent web portal with real-time tracking, automated documentation, and analytics."
      },
      {
        title: "Nordic B2B Integration System",
        category: "Software Solutions",
        image: "/portfolio/projects/hrm.png",
        challenge: "Disjointed software systems were causing delays in B2B orders.",
        solution: "Built a customized middleware API that synchronized inventory and order data across continents instantly."
      }
    ]
  }
};

const HeroParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{ 
            left: `${p.x}%`, 
            top: `${p.y}%`, 
            width: p.size, 
            height: p.size,
          }}
          animate={{ y: [0, -100, -200], opacity: [0, 0.3, 0], scale: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default function CountryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Default to a generic presentation if specific data isn't found
  const defaultData = {
    name: slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Global Hub",
    flag: "🌍",
    role: "Strategic Hub",
    headline: "Expanding Global Operations and Delivering Excellence",
    overview: "Our operations in this region focus on delivering high-quality services, establishing strong local partnerships, and driving business growth across borders.",
    stats: [
      { label: "Completed Projects", value: "10+", icon: Briefcase },
      { label: "Client Satisfaction", value: "99%", icon: Target },
      { label: "Team Members", value: "Local Experts", icon: Users }
    ],
    jobsCompleted: [
      {
        title: "Strategic Advisory",
        category: "Consulting",
        description: "Providing localized strategic advice to ensure smooth market entry and sustained operational success.",
        icon: Target
      },
      {
        title: "Project Management",
        category: "Operations",
        description: "End-to-end management of complex projects, ensuring timely delivery and strict quality control.",
        icon: Zap
      }
    ],
    caseStudy: {
      challenge: "Navigating new markets presents unique operational and cultural challenges for growing enterprises.",
      solution: "We implement tailored strategies, leveraging local insights and our global network to overcome barriers.",
      result: "Consistent delivery of project goals, resulting in sustainable growth and long-term client success."
    }
  };

  const data = countriesData[slug.toLowerCase()] || defaultData;

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-12 md:pb-16 px-6 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        <div className="absolute inset-0">
          {data.bgImage && (
            <>
              <Image 
                src={data.bgImage} 
                alt={`${data.name} Background`}
                fill
                priority
                className="object-cover opacity-25 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none" />
            </>
          )}
          <motion.div
            animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-20 pointer-events-none bg-primary"
          />
          <HeroParticles />
        </div>

        <div className="max-w-full relative z-10">
          <Link href="/global-presence" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Global Presence
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl drop-shadow-2xl">{data.flag}</span>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {data.name}
                </h1>
                <span className="inline-block mt-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                  {data.role}
                </span>
              </div>
            </div>

            <p className="text-base text-muted-foreground max-w-3xl leading-relaxed mt-8 font-light">
              <strong className="text-foreground font-semibold block mb-2">{data.headline}</strong>
              {data.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="relative z-20 -mt-10 py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 shadow-xl flex items-center gap-6 group hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}><AnimatedCounter value={stat.value} /></h4>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Completed Section (Detailed Case Study Style) */}
      <section className="py-12 md:py-16 px-6 relative z-10 bg-background/50 backdrop-blur-md border-y border-border/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Work <span className="text-gradient-cyan">Delivered</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              A detailed look at the specific types of professional jobs and projects we have successfully executed in this region.
            </p>
          </div>

          <div className="space-y-6">
            {data.jobsCompleted.map((job: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] bg-card/20 border border-border/40 hover:border-primary/40 hover:bg-card/40 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <job.icon className="w-8 h-8 text-primary group-hover:text-cyan-500 transition-colors" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                      {job.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Projects Section */}
      <section className="py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Featured <span className="text-gradient-cyan">Case Studies</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl">
              Explore our recent projects and discover how our solutions solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {data.portfolioProjects && data.portfolioProjects.map((project: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden bg-card/20 border border-border/40 hover:border-primary/40 transition-colors"
              >
                {/* Project Image */}
                <div className="relative w-full h-[300px] overflow-hidden bg-background">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                      <h4 className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                      <h4 className="text-cyan-500 font-bold uppercase tracking-widest text-[10px] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Solution
                      </h4>
                      <p className="text-foreground text-sm leading-relaxed font-medium">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/30 text-foreground font-semibold hover:bg-primary/5 hover:border-primary transition-all duration-300 group"
            >
              View More Portfolios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-card/30 border border-border/50 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to expand into {data.name}?
          </h2>
          <p className="text-muted-foreground mb-10 relative z-10 text-base">
            Leverage our established presence and operational expertise to accelerate your growth.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
