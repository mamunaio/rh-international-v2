export const portfolioCategories = ["All", "Web Dev", "Software", "Mobile App", "Marketing", "Govt & Logistics"];

export const portfolioProjects = [
  {
    id: 1,
    slug: "enterprise-hrm-system",
    title: "Enterprise Human Resource Management System",
    category: "Software",
    image: "/portfolio/projects/hrm.png",
    client: "Global Tech Corp",
    duration: "6 Months",
    location: "USA",
    overview: "We built a custom Human Resource Management (HRM) system with automated payroll, real-time performance tracking, and advanced AI analytics to manage a massive decentralized workforce. This robust solution was designed to scale, offering uncompromised security and enterprise-grade performance.",
    challenge: "Managing a decentralized workforce of 5000+ employees across multiple timezones required a unified platform. Existing off-the-shelf software couldn't handle their complex commission structures, local tax compliance in over 15 states, and varied PTO policies. Furthermore, the client faced massive data silos, where HR metrics were entirely disconnected from financial performance, making strategic decision-making incredibly difficult.",
    solution: "We engineered a highly scalable, custom cloud-based HRM system leveraging a microservices architecture. It included automated payroll pipelines that dynamically adjusted to local tax laws, multi-currency support, a dedicated employee self-service portal, and AI-driven performance analytics. The system was seamlessly integrated with their existing legacy accounting software via custom APIs, ensuring real-time data synchronization.",
    result: "The implementation reduced HR processing time by 60%, eliminated payroll calculation errors, and significantly increased overall employee engagement and transparency. By breaking down data silos, executives now have access to real-time dashboards that correlate workforce performance with company revenue, enabling proactive business strategy.",
    features: [
      "Automated Multi-State Payroll Processing",
      "AI-Driven Employee Performance Analytics",
      "Customizable Leave & PTO Management",
      "Secure Employee Self-Service Portal",
      "Real-Time Corporate Financial Integration"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Python (AI)"]
  },
  {
    id: 2,
    slug: "luxury-ecommerce-platform",
    title: "High-Performance Luxury E-Commerce Platform",
    category: "Web Dev",
    image: "/portfolio/projects/webdev.png",
    client: "European Fashion Brand",
    duration: "4 Months",
    location: "Spain",
    overview: "Deployed a high-performance custom web application integrating seamless payment gateways and dynamic localization for a rapidly scaling European luxury fashion brand. The focus was on delivering an ultra-premium visual experience without sacrificing page load speeds.",
    challenge: "Scaling sales internationally required a robust, multi-currency platform with ultra-fast load times. Their legacy Shopify setup was struggling with custom high-end video animations, complex inventory syncing across multiple European warehouses, and provided a subpar mobile experience that was hurting conversion rates in key demographics.",
    solution: "We rebuilt the platform from the ground up using a modern headless commerce architecture. We utilized Next.js for lightning-fast server-side rendering (SSR) and integrated Stripe for seamless multi-currency checkout. The frontend was highly optimized to deliver cinematic video assets without render-blocking, and we implemented a robust Sanity CMS backend for effortless content management by the marketing team.",
    result: "The brand doubled its online revenue within the first quarter post-launch. We achieved sub-second page loads globally, dramatically improving the user experience and SEO rankings. Mobile conversion rates spiked by 140%, establishing a solid foundation for their continued expansion across Europe and North America.",
    features: [
      "Headless Commerce Architecture",
      "Sub-second Global Page Load Speeds",
      "Multi-Currency & Multi-Lingual Support",
      "Cinematic Video Integration without Lag",
      "Real-time Multi-Warehouse Inventory Sync"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS", "Vercel"]
  },
  {
    id: 3,
    slug: "luxury-real-estate-app",
    title: "AI-Powered Luxury Real Estate Mobile App",
    category: "Mobile App",
    image: "/portfolio/projects/webdev.png", 
    client: "UAE Realty Group",
    duration: "5 Months",
    location: "Dubai, UAE",
    overview: "Designed an elegant, blazing-fast iOS and Android application featuring 3D virtual tours, secure end-to-end encrypted messaging, and AI-driven property recommendations exclusively for high-net-worth investors.",
    challenge: "High-net-worth clients needed a seamless, secure, and visually stunning way to browse premium properties on mobile without dealing with clunky web interfaces. The existing process of sharing luxury listings via email and PDF was highly inefficient and lacked the exclusivity expected by ultra-wealthy buyers.",
    solution: "Developed a native-feel mobile application using React Native, ensuring a unified and premium experience across both iOS and Android. We integrated high-definition Matterport 3D virtual tours directly into the app and established end-to-end encrypted messaging between dedicated agents and buyers to ensure absolute privacy.",
    result: "Achieved over 10,000 downloads among verified high-net-worth investors in month one. The app directly contributed to over $100M+ in property sales initiated through the platform, streamlining the sales funnel and solidifying the client's position as a tech-forward leader in Dubai's real estate market.",
    features: [
      "Native-feel iOS and Android Experience",
      "Integrated 3D Virtual Property Tours",
      "End-to-End Encrypted Agent Messaging",
      "AI-Driven Personalized Property Feeds",
      "Secure Digital Document Signing"
    ],
    techStack: ["React Native", "Firebase", "Node.js", "Matterport 3D", "WebSockets"]
  },
  {
    id: 4,
    slug: "cloud-based-retail-erp",
    title: "Centralized Cloud Retail ERP System",
    category: "Software",
    image: "/portfolio/projects/hrm.png", 
    client: "Retail Chain Group",
    duration: "8 Months",
    location: "Portugal",
    overview: "Engineered and deployed a centralized cloud Enterprise Resource Planning (ERP) system that synchronized inventory, sales, supply chain, and HR data in real-time across multiple European retail branches.",
    challenge: "A rapidly expanding retail chain was struggling with disjointed legacy systems. Their lack of synchronized inventory data led to frequent stockouts in high-demand areas and overstock in others, resulting in significant revenue loss and inaccurate quarterly financial reporting.",
    solution: "We built a fully bespoke cloud ERP tailored exactly to their operational workflow. The system provided a single source of truth, integrating point-of-sale (POS) systems across 50+ stores, dynamic warehouse management, and corporate accounting into one seamless web application hosted on Google Cloud.",
    result: "The deployment eliminated stockouts entirely through predictive inventory alerts, reduced operational overhead costs by 25%, and provided executives with real-time financial dashboards. The system's scalability allows them to open new branches and integrate them into the network instantly.",
    features: [
      "Real-Time Multi-Branch Inventory Tracking",
      "Integrated Point-of-Sale (POS) API",
      "Predictive Supply Chain Analytics",
      "Automated Financial Reporting",
      "Scalable Microservices Backend"
    ],
    techStack: ["Vue.js", "Django", "PostgreSQL", "Docker", "Google Cloud"]
  },
  {
    id: 5,
    slug: "national-infrastructure-portal",
    title: "Secure National Infrastructure Web Portal",
    category: "Govt & Logistics",
    image: "/portfolio/projects/webdev.png", 
    client: "Ministry of Infrastructure",
    duration: "12 Months",
    location: "Bangladesh",
    overview: "Engineered a highly secure, scalable web application featuring strict role-based access control and real-time cryptographic auditing for the management of massive government procurement and infrastructure data.",
    challenge: "The client needed an ultra-secure, high-traffic portal to manage and audit massive procurement contracts. The existing paper-based and legacy digital systems were prone to bureaucratic delays, lacked transparency, and suffered from severe performance bottlenecks during peak submission periods.",
    solution: "Designed a resilient microservices architecture specifically to handle high concurrent traffic without downtime. We implemented strict cryptographic data logging for absolute transparency and immutable audit trails. A complex Role-Based Access Control (RBAC) system was integrated to ensure data integrity among varying levels of government officials.",
    result: "The system processed over $50M in procurement seamlessly in its first year. It drastically reduced bureaucratic delays by digitizing the approval workflow and increased public trust through verifiable transparency and robust security measures.",
    features: [
      "Cryptographic Immutable Audit Trails",
      "High-Concurrency Microservices Architecture",
      "Advanced Role-Based Access Control (RBAC)",
      "Automated Approval Workflows",
      "Real-Time National Analytics Dashboard"
    ],
    techStack: ["Angular", "Spring Boot", "Oracle DB", "Kubernetes", "Redis"]
  },
  {
    id: 6,
    slug: "pan-european-seo-expansion",
    title: "Pan-European B2B SEO & Digital Expansion",
    category: "Marketing",
    image: "/portfolio/projects/hrm.png", 
    client: "Asian Export Hub",
    duration: "Ongoing",
    location: "Denmark & Spain",
    overview: "Executed a fully localized, highly technical data-driven SEO strategy targeting specific B2B industrial keywords across 5 European languages, establishing absolute search dominance in the Nordic and Iberian regions.",
    challenge: "The client, a major Asian industrial exporter, struggled to gain organic traction in competitive European search engines. Their primary issues stemmed from poor website localization, weak regional backlink profiles, and a lack of technical SEO foundation required for multi-regional targeting.",
    solution: "We conducted a complete technical SEO overhaul, implementing correct hreflang tags and schema markup. We localized content natively for 5 different languages rather than relying on direct translation, and executed a highly targeted B2B outreach link-building campaign focusing on high-authority European industrial publications.",
    result: "The campaign increased organic European traffic by 400% in 8 months, resulting in a massive, sustained spike in high-ticket B2B leads from Scandinavia and Spain. The client now outranks legacy local competitors for their most critical product keywords.",
    features: [
      "Multi-Regional Technical SEO Overhaul",
      "Native Content Localization Strategy",
      "High-Authority B2B Link Building",
      "Advanced Schema Markup Implementation",
      "Continuous Conversion Rate Optimization (CRO)"
    ],
    techStack: ["Ahrefs", "Google Analytics 4", "SEMrush", "Next.js (SEO)", "Screaming Frog"]
  },
];
