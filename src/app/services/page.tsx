import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Headphones,
  Network,
  Cloud,
  Lock,
  Compass,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "IT Services & Technology Capabilities",
  description:
    "Explore Redifff's full spectrum of B2B technology services: Managed IT, Helpdesk Support, Network Management, Cloud Solutions, Cybersecurity, IT Strategy, and Business Automation.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Headphones,
    Network,
    Cloud,
    Lock,
    Compass,
    Cpu,
    Zap,
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} className="mb-8" />

        {/* Hero Banner */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60 mb-4">
            Full-Spectrum Technology Delivery
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Strategic IT services designed for operational reliability and business growth
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Whether you need comprehensive day-to-day management of your workstation and server fleet,
            hardening against cyber threats, or high-level strategic advisory for your leadership team,
            Redifff provides accountable, transparent, and senior-led technical capabilities.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mb-16 p-4 rounded-xl border border-white/[0.08] bg-[#0E1627] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold px-2">Jump to Service:</span>
          {siteConfig.services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 border border-transparent transition-all"
            >
              {service.title}
            </a>
          ))}
        </div>

        {/* 8 Detailed Service Sections */}
        <div className="space-y-16">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-2xl border border-white/[0.08] bg-[#0C1322] p-6 sm:p-10 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Overview & Problems (6 cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                          Capability 0{index + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-200 text-base leading-relaxed font-sans">
                      {service.fullDescription}
                    </p>

                    {/* Problems Solved */}
                    <div className="pt-2 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                        <span>Core Operational Challenges Resolved</span>
                      </div>
                      <ul className="space-y-2">
                        {service.challengesSolved.slice(0, 3).map((challenge) => (
                          <li
                            key={challenge}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Deep Dive: {service.title}
                      </Button>
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="secondary"
                        size="md"
                      >
                        Enquire About This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: What's Included & Benefits (6 cols) */}
                  <div className="lg:col-span-6 space-y-6 bg-[#090E18] rounded-xl border border-white/[0.06] p-6">
                    {/* What's Included */}
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 border-b border-white/[0.08] pb-2 font-display">
                        Key Deliverables & Scope
                      </h3>
                      <ul className="space-y-2.5">
                        {service.whatsIncluded.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Benefits */}
                    <div className="pt-4 border-t border-white/[0.08]">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 font-display">
                        Commercial & Strategic Impact
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.businessBenefits.slice(0, 2).map((benefit) => (
                          <div
                            key={benefit.title}
                            className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                          >
                            <div className="text-xs font-semibold text-white mb-1">
                              {benefit.title}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-relaxed">
                              {benefit.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Engagement Models Guidance Section */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-[#0E172A] to-[#111C33]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-800 mb-3">
              Flexible Engagement Framework
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              How businesses engage with Redifff
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              We understand that every company has different existing technical capacity. We offer two
              clear operational models tailored to your internal resources:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#090E18] border border-white/10">
                <div className="text-base font-bold text-white font-display mb-2">
                  1. Fully Outsourced IT Department
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Redifff handles your entire technology lifecycle—from helpdesk and device setup to
                  network topology, cloud backups, and executive IT strategy. Ideal for companies with 15
                  to 200 staff without dedicated in-house IT.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#090E18] border border-white/10">
                <div className="text-base font-bold text-white font-display mb-2">
                  2. Co-Managed IT & Strategic Escalation
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We collaborate with your internal IT manager or engineering team, providing specialized
                  escalation for network architecture, cybersecurity reviews, after-hours monitoring, or
                  high-level CIO roadmapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaSection
        title="Not sure which service scope fits your business?"
        subtitle="Schedule a free technical assessment. We'll review your existing systems and give you honest, unbiased guidance on what will deliver the greatest operational impact."
        buttonText="Discuss Your Requirements"
      />
    </div>
  );
}
