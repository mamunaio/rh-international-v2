export const portfolioCategories = ["All", "FinTech / Web", "Internal Tools", "SaaS Platform", "Business OS", "SaaS / DevTools"];

export const portfolioProjects = [
  {
    id: 1,
    slug: "traders-sme-platform",
    title: "Traders SME - Trading Analytics Dashboard",
    category: "FinTech / Web",
    image: "/portfolio/projects/traders-sme.png",
    client: "Traders SME",
    duration: "5 Months",
    location: "Global",
    overview: "Designed and engineered a comprehensive, real-time trading journal and analytics dashboard for Traders SME. The platform allows professional forex and crypto traders to track their portfolios, analyze profitable assets, log trades, and consume real-time market news from a single unified interface.",
    challenge: "Professional traders often struggle to maintain organized trading journals and accurately track their risk-to-reward ratios across multiple assets (Forex, Crypto, Indices). Existing tools lacked seamless integration with live market news and real-time asset performance metrics.",
    solution: "We developed a high-performance web application featuring a highly interactive dashboard. It includes a custom trade logging system with automatic net profit calculations, an integrated crypto/forex news feed, and dynamic trend charts for tracking the most profitable assets like EUR/USD, GBPUSD, and NAS100.",
    result: "The Traders SME platform quickly became a daily driver for thousands of active traders. By providing instant visibility into their trading psychology and asset performance, users reported a 30% improvement in maintaining their risk management strategies and consistent profitability.",
    features: [
      "Comprehensive Trading Journal & Trade Logger",
      "Real-time Asset Performance & Trend Charts",
      "Automated Risk/Reward & Net Profit Calculations",
      "Integrated Blockchain & Forex Market News Feed",
      "Advanced Portfolio Analytics (Holding, Win Rate)"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets"]
  },
  {
    id: 2,
    slug: "luxury-ecommerce-platform",
    title: "Aegis: Financial Infrastructure API Platform",
    category: "FinTech / Web",
    image: "/portfolio/projects/luxury-ecommerce.png",
    client: "Aegis Tech",
    duration: "6 Months",
    location: "Global",
    overview: "Designed and developed Aegis, a robust financial infrastructure platform that enables millions of companies—from startups to Fortune 500s—to accept payments, send payouts, and manage online businesses seamlessly.",
    challenge: "Businesses needed a unified, developer-friendly API to handle complex multi-currency transactions and treasury management without the massive overhead of building compliance and banking integrations from scratch.",
    solution: "We built a highly scalable API architecture using Node.js alongside a beautifully designed Next.js dashboard. The platform features real-time treasury balances, secure multi-currency payouts, and an elegant developer portal with comprehensive documentation.",
    result: "Aegis is now the secure backbone for modern internet businesses, efficiently processing millions in transactions daily while maintaining 99.99% uptime and providing an exceptional, frictionless developer experience.",
    features: [
      "Treasury API v2.0 Integration",
      "Secure Multi-currency Payouts",
      "Real-time Treasury Balance Dashboard",
      "Developer-first API Documentation",
      "Enterprise-grade Security & Compliance"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 3,
    slug: "codenext-agency-os",
    title: "CodeNext IT HQ - Agency OS",
    category: "Internal Tools",
    image: "/portfolio/projects/agency-os.png", 
    client: "CodeNext IT HQ",
    duration: "6 Months",
    location: "Dhaka, Bangladesh",
    overview: "Developed an all-in-one internal Agency Operating System (Agency OS) for CodeNext IT HQ. This Command Center centralizes everything from employee attendance and project tracking to revenue analytics and daily religious reminders, drastically streamlining agency operations.",
    challenge: "CodeNext IT HQ needed a unified platform to manage their rapidly growing agency operations. Relying on fragmented tools for attendance, project management, client pipelines, and financial tracking was causing severe operational inefficiencies.",
    solution: "We engineered a highly customized Agency OS using a modern tech stack. The 'Command Center' dashboard features real-time revenue metrics, staff working hour logs, an integrated Vault, and Domain Tracker. We also seamlessly incorporated local contexts, such as an English-Bangla dual calendar and daily Islamic inspirations (Ayat & Hadith).",
    result: "The deployment of the Agency OS resulted in a 40% reduction in administrative overhead. Team productivity soared due to the centralized workspace, and management gained instant, real-time visibility into the agency's financial health and employee performance.",
    features: [
      "Real-time Revenue & Client Analytics Dashboard",
      "Integrated Employee Attendance & Working Hours Tracking",
      "Built-in Vault, Notes, and Domain Tracking System",
      "Dual Calendar (English/Bangla) & Daily Inspirations",
      "Centralized Leads Pipeline & Client Management"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 4,
    slug: "odyssey-infrastructure-dashboard",
    title: "Odyssey - Cloud Infrastructure & Workspace Dashboard",
    category: "SaaS Platform",
    image: "/portfolio/projects/odyssey.png",
    client: "Odyssey Cloud",
    duration: "4 Months",
    location: "Global",
    overview: "Designed and engineered the central dashboard for Odyssey, a cutting-edge cloud infrastructure platform. The dashboard provides enterprise users with real-time workspace health telemetry, comprehensive audit trails, and streamlined project management.",
    challenge: "Enterprise teams were struggling to monitor complex infrastructure deployments. They needed a unified, high-performance command center that could instantly display live workspace health, manage team permissions, and track critical billing thresholds without any latency.",
    solution: "We developed a highly responsive, dark-mode optimized web application using Next.js. We integrated WebSocket connections to stream live infrastructure telemetry directly to the 'Workspace Health' module. The 'Audit Trail' feature was built to securely log and display all workspace events, from billing alerts to member access revocations.",
    result: "The new Odyssey dashboard drastically improved system observability for end-users. The sleek, distraction-free interface reduced incident response times by 50% and provided management with absolute clarity on their active projects, uptime (99.9%), and overall resource utilization.",
    features: [
      "Live Infrastructure Telemetry Streaming",
      "Real-time Security & Billing Audit Trail",
      "Dynamic Workspace & Team Management",
      "Instant Uptime & Performance Monitoring",
      "Seamless Dark/Light Mode Integration"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Prisma"]
  },
  {
    id: 5,
    slug: "injaazh-global-dashboard",
    title: "Injaazh Global - Business Management Dashboard",
    category: "Business OS",
    image: "/portfolio/projects/injaazh-global.png",
    client: "Injaazh Global",
    duration: "5 Months",
    location: "Global",
    overview: "Developed an all-in-one Business Operating System for Injaazh Global. The platform unifies lead generation, project pipelines, financial tracking, and team management into a highly intuitive, centralized dashboard infused with unique daily Islamic insights.",
    challenge: "Managing multiple business pipelines, from outreach and sales to project completion and finances, was becoming chaotic for Injaazh Global. The team needed a single source of truth that not only tracked revenue and active projects but also aligned with their cultural and spiritual values.",
    solution: "We engineered a robust web application featuring a dark-themed, data-rich dashboard. It includes real-time income trend analytics, a comprehensive project status tracker, and an integrated CRM for prospects and leads. We also integrated a unique 'Today's Insight' feature to display daily Islamic verses.",
    result: "The centralized dashboard drastically improved operational efficiency. The Injaazh Global team now has instant visibility into their financial health ($2,388 Total Income, Active Pipelines) and upcoming deadlines, leading to a 35% increase in lead conversion rates and smoother project delivery.",
    features: [
      "Real-time Income & Revenue Trend Analytics",
      "Integrated CRM for Sales Leads & Outreach",
      "Dynamic Project & Proposal Pipelines",
      "Custom Daily Islamic Insights Widget",
      "Upcoming Deadlines & Team Activity Logs"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    id: 6,
    slug: "devapi-infrastructure",
    title: "DevAPI - High-Performance API Infrastructure",
    category: "SaaS / DevTools",
    image: "/portfolio/projects/devapi.png",
    client: "DevAPI Inc.",
    duration: "3 Months",
    location: "Global",
    overview: "Engineered DevAPI, a robust production-ready API infrastructure platform designed for developers. The platform empowers teams to ship APIs 10x faster by providing built-in authentication, rate limiting, and automated SDK generation out of the box.",
    challenge: "Developers spend countless hours building boilerplate infrastructure for their APIs, such as auth, billing, and rate limiting, instead of focusing on core business logic. DevAPI needed a high-converting, lightning-fast landing page and dashboard to onboard users to their new Public Beta v2.0 seamlessly.",
    solution: "We developed a striking, dark-mode focused landing page with 3D wireframe visuals to resonate with the developer target audience. We integrated an interactive terminal UI showing the simplicity of their SDK installation (`npm install @devapi/sdk`). The backend was built to handle massive scale, auto-generating documentation and SDKs on the fly.",
    result: "The launch of Public Beta v2.0 was a massive success. The modern, developer-centric design led to a 40% increase in sign-ups from the landing page. Developers praised the 'Idea to production in minutes' promise, resulting in over 12,000 active API projects created within the first month.",
    features: [
      "Built-in Authentication & Rate Limiting",
      "Auto-generated SDKs & Documentation",
      "Real-time API Analytics Dashboard",
      "Interactive Developer-focused Landing Page",
      "Production-ready Infrastructure in Minutes"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"]
  },
];
