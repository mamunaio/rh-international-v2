"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle2, ShieldCheck, Terminal, Server, Lock, Search } from "lucide-react";

const CyberSecurity = () => (
  <ServicePageLayout
     title="Cyber Security & Auditing"
    subtitle="Penetration Testing & Vulnerability Assessment"
    description="Protect your digital assets with enterprise-grade cyber security solutions. We offer comprehensive penetration testing, website auditing, and infrastructure vulnerability assessments."
    icon={ShieldCheck}
    primaryCtaText="Request Security Audit"
    secondaryCtaText="Consult with an Expert"
    features={[
      {
        title: "Penetration Testing (Pentest)",
        description: "We simulate real-world cyber attacks on your web applications, networks, and APIs to identify exploitable vulnerabilities before malicious hackers do."
      },
      {
        title: "Website & Code Auditing",
        description: "Deep-dive analysis of your source code and website architecture to ensure compliance with global security standards (OWASP Top 10) and best practices."
      },
      {
        title: "Vulnerability Assessment",
        description: "Automated and manual scanning of your digital infrastructure to detect misconfigurations, outdated software, and potential security loopholes."
      },
      {
        title: "Incident Response & Mitigation",
        description: "Rapid response strategies and actionable remediation plans to patch vulnerabilities, secure data, and prevent future breaches."
      }
    ]}
    highlights={[
      "OWASP Compliant: Our testing methodologies strictly adhere to OWASP and industry best practices.",
      "Actionable Reports: We don't just find bugs; we provide detailed, developer-friendly reports with step-by-step mitigation guidance.",
      "Zero Downtime Testing: Our non-disruptive testing approach ensures your business operations remain unaffected during the audit."
    ]}
  >
    {/* Additional Content Section 1: Core Services */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Lock className="w-8 h-8 text-primary" />
        Security <span className="text-gradient-cyan">Audit Vectors</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" /> Web Application Security
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> SQL Injection (SQLi) & XSS Testing</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Authentication Bypass Analysis</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> API Endpoint Vulnerability Scans</li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
          <h4 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Server className="w-5 h-5 text-primary" /> Network & Infrastructure
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Cloud Server Configuration Audit</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Port Scanning & Firewall Rules</li>
            <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Malware & Backdoor Detection</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Additional Content Section 2: Mockups / Visuals */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Terminal className="w-8 h-8 text-primary" />
        Advanced <span className="text-gradient-cyan">Threat Analysis</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large Main Image */}
        <div className="group relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] border border-border/30 bg-card/20 shadow-lg md:col-span-2 lg:col-span-2">
          <img 
            src="/images/services/Penetration-Testing-Execution.png" 
            alt="Penetration Testing Execution" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6 md:p-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md border border-cyan-500/20">
                Primary Phase
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Penetration Testing Execution</h4>
              <p className="text-white/80 text-sm md:text-base max-w-lg">Simulated attacks identifying complex codebase vulnerabilities before they can be exploited.</p>
            </div>
          </div>
        </div>

        {/* Top Right Square Image */}
        <div className="group relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] border border-border/30 bg-card/20 shadow-lg">
          <img 
            src="/images/services/Vulnerability-Dashboard.png" 
            alt="Vulnerability Dashboard" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Vulnerability Dashboard</h4>
              <p className="text-white/70 text-sm">Real-time threat monitoring metrics.</p>
            </div>
          </div>
        </div>

        {/* 3 Bottom Images */}
        <div className="group relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] border border-border/30 bg-card/20 shadow-lg">
          <img 
            src="/images/services/Website-and-Code-Auditing.png" 
            alt="Website and Code Auditing" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-1">Website & Code Audit</h4>
            </div>
          </div>
        </div>

        <div className="group relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] border border-border/30 bg-card/20 shadow-lg">
          <img 
            src="/images/services/Networ-Infrastructure-Audit.png" 
            alt="Network Infrastructure Audit" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-1">Network Infrastructure</h4>
            </div>
          </div>
        </div>

        <div className="group relative rounded-3xl overflow-hidden h-[250px] md:h-[300px] border border-border/30 bg-card/20 shadow-lg md:col-span-2 lg:col-span-1">
          <img 
            src="/images/services/Incident-Response.png" 
            alt="Incident Response" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-1">Incident Response</h4>
            </div>
          </div>
        </div>

      </div>
    </div>

  </ServicePageLayout>
);

export default CyberSecurity;
