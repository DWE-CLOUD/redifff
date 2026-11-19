import React from "react";
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
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../common/Button";

export function ServicesOverview() {
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

  const flagshipService = siteConfig.services[0]; // Managed IT Services
  const spotlightServices = [siteConfig.services[4], siteConfig.services[3]]; // Cybersecurity, Cloud Solutions
  const standardServices = siteConfig.services.slice(1, 3).concat(siteConfig.services.slice(5)); // Remaining 5

  return (
    <section className="py-24 bg-[#0B111E] relative" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Comprehensive technology services for modern enterprise operations"
            subtitle="Engineered to eliminate friction, secure your intellectual property, and position your technology as a reliable commercial catalyst."
          />
          <Button href="/services" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All 8 Services
          </Button>
        </div>

        {/* 1. Flagship Feature Card (Managed IT Services) */}
        <div className="mb-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#111C33] via-[#0E172A] to-[#0A101D] p-7 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30">
                Flagship Comprehensive Service
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {flagshipService.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {flagshipService.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {flagshipService.whatsIncluded.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  href={`/services/${flagshipService.slug}`}
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Managed IT Services
                </Button>
              </div>
            </div>

            {/* Visual Operational Snapshot */}
            <div className="lg:col-span-5 bg-[#090E18]/80 rounded-xl border border-white/10 p-5 space-y-4">
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-display border-b border-white/[0.08] pb-3">
                Managed Operations Scope
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03]">
                  <span className="text-slate-300">Continuous Monitoring</span>
                  <span className="text-emerald-400 font-medium font-mono">24/5 Active</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03]">
                  <span className="text-slate-300">Firmware & OS Patching</span>
                  <span className="text-blue-400 font-medium font-mono">Automated Tier</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03]">
                  <span className="text-slate-300">Data Recovery Assurance</span>
                  <span className="text-blue-400 font-medium font-mono">Immutable Backups</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/[0.03]">
                  <span className="text-slate-300">Executive Roadmaps</span>
                  <span className="text-slate-200 font-medium font-mono">Quarterly Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dual Spotlight Cards (Cybersecurity & Cloud) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {spotlightServices.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.slug}
                className="rounded-2xl border border-white/10 bg-[#0E1627] p-7 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                      Target Challenges Resolved:
                    </span>
                    {service.challengesSolved.slice(0, 3).map((challenge) => (
                      <div key={challenge} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 pt-3 border-t border-white/[0.08]"
                >
                  <span>Learn more about {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* 3. Five Compact Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardServices.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.slug}
                className="rounded-xl border border-white/[0.08] bg-[#0D1424] p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4 group-hover:border-blue-500/60 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-3 border-t border-white/[0.06]"
                >
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
