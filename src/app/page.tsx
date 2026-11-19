import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/common/Button";
import { HeroNetworkGraphic } from "@/components/home/HeroNetworkGraphic";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyRedifffSection } from "@/components/home/WhyRedifffSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-blue-600/[0.08] rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[400px] h-[300px] bg-cyan-600/[0.06] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60 shadow-inner">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Enterprise IT Support & Technology Consulting</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
                Technology that moves your business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                  forward.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
                {siteConfig.supportingMessage}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get a Consultation
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Credibility markers */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Proactive System Stewardship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Independent & Vendor-Neutral</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Commercially Grounded Advice</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual (5 cols) */}
            <div className="lg:col-span-5">
              <HeroNetworkGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Strategic Positioning */}
      <TrustSection />

      {/* Services Spectrum Overview */}
      <ServicesOverview />

      {/* Why Redifff */}
      <WhyRedifffSection />

      {/* Industries Served */}
      <IndustriesSection />

      {/* Our 5-Step Methodology */}
      <ApproachSection />

      {/* Final Conversion Action */}
      <FinalCtaSection />
    </div>
  );
}
