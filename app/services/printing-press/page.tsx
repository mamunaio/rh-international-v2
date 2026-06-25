"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle2, Layers, Package, Printer, ShoppingBag, Box, Image as ImageIcon, FileText } from "lucide-react";

const PrintingPress = () => (
  <ServicePageLayout
    title="Printing Press"
    subtitle="PVC & Bag Printing"
    description="From high-quality PVC materials to custom bag manufacturing, RH International delivers precision, vibrant colors, and scalable commercial printing solutions."
    icon={Printer}
    primaryCtaText="Request a Bulk Printing Quote"
    secondaryCtaText="Consult with Our Print Experts"
    features={[
      {
        title: "Advanced PVC Printing Solutions",
        description: "We utilize state-of-the-art large format printers to deliver durable, weather-resistant, and high-resolution PVC products."
      },
      {
        title: "Custom Bag Printing & Manufacturing",
        description: "Eco-friendly and reusable packaging is a powerful marketing tool. We offer bulk manufacturing and custom branding on a variety of materials."
      },
      {
        title: "Corporate Identity & Marketing Collaterals",
        description: "We produce sharp, professional marketing materials that help your sales team close deals."
      },
      {
        title: "Industrial Packaging & Labels",
        description: "Secure and attractive packaging that makes your products stand out on the shelves."
      }
    ]}
    highlights={[
      "High-volume Capacity: We are equipped to handle massive commercial print runs without ever compromising on color accuracy or material quality.",
      "Premium Sourcing: Leveraging our expertise as a Sourcing Center, we procure the finest grade raw materials directly from top suppliers.",
      "End-to-End Quality Control: From color calibration to final binding, every batch undergoes rigorous quality inspection before dispatch.",
      "Cost-Effective B2B Pricing: We offer highly competitive wholesale pricing tailored for corporate clients and long-term contracts."
    ]}
  >
    {/* Additional Content Section 1: Overview */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Making Lasting Impressions <span className="text-gradient-cyan">with Print</span>
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        In the corporate world, the quality of your printed materials directly reflects your brand's standard. At RH International Sourcing Center, we provide top-tier commercial printing and packaging services designed to meet the high-volume demands of businesses, agencies, and government entities. Whether you need durable PVC signages for a nationwide campaign or custom-branded bags for your retail chain, we ensure flawless execution, strict quality control, and on-time delivery.
      </p>
    </div>

    {/* Additional Content Section 2: Detailed Capabilities */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <Layers className="w-8 h-8 text-primary" />
        Our Specialized Printing Capabilities
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Capability 1 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <ImageIcon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">1. Advanced PVC Printing Solutions</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Large-scale Billboards & Corporate Signages</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>X-Banners, Roll-up Banners & Festoons</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>High-quality PVC ID Cards & Lanyards</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Frosted & Clear Window Vinyl Stickers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 2 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">2. Custom Bag Manufacturing</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Non-Woven Tissue Bags:</strong> Cost-effective and highly popular for retail.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Premium Paper Bags:</strong> Kraft and art paper bags with custom finishes (UV, foil) for luxury retail.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong>Jute & Canvas Bags:</strong> Sustainable, heavy-duty export-quality bags.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 3 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">3. Corporate Identity & Collaterals</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Premium Business Cards (Spot UV, Embossed).</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Corporate Brochures, Company Profiles, and Annual Reports.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom Envelopes, Letterheads, and Presentation Folders.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Capability 4 */}
        <div className="relative group p-8 rounded-3xl bg-card/20 backdrop-blur-3xl border border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.2)] group-hover:scale-110 transition-transform duration-500">
              <Package className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-foreground">4. Industrial Packaging & Labels</h4>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom Die-Cut Product Boxes and Master Cartons.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>High-tack Product Labels and Barcode Stickers.</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Security Seals and Warranty Void labels.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ServicePageLayout>
);

export default PrintingPress;