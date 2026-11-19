import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  ShoppingBag,
  Factory,
  Rocket,
  Briefcase,
  GraduationCap,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Button";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Industries Served & Sector Solutions",
  description:
    "Tailored technology solutions and IT consulting for small businesses, startups, professional services, healthcare, retail, manufacturing, and education.",
};

export default function IndustriesPage() {
  const iconMap: Record<string, React.ElementType> = {
    "small-medium-business": Briefcase,
    "startups-scaleups": Rocket,
    "professional-services": Building2,
    "healthcare-clinical": Stethoscope,
    "retail-ecommerce": ShoppingBag,
    "manufacturing-logistics": Factory,
    "education-training": GraduationCap,
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Industries" }]} className="mb-8" />

        {/* Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60 mb-4">
            Vertical Technology Alignment
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Technology foundations tailored to sector-specific operational realities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Every industry operates under distinct commercial pressures, compliance rules, and
            operational tempos. Rather than offering one-size-fits-all IT packages, Redifff adapts
            infrastructure architecture, cybersecurity controls, and support workflows to the specific
            demands of your sector.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200 leading-relaxed">
            <strong>Advisory Note:</strong> The sectors below represent potential client environments
            and typical technical problem spaces we are equipped to support through our core service
            frameworks.
          </div>
        </div>

        {/* Sector Cards */}
        <div className="space-y-12">
          {siteConfig.industries.map((ind, index) => {
            const Icon = iconMap[ind.id] || Briefcase;
            return (
              <section
                key={ind.id}
                id={ind.id}
                className="scroll-mt-28 rounded-2xl border border-white/[0.08] bg-[#0C1322] p-6 sm:p-10 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Sector Overview (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                          Sector Profile 0{index + 1}
                        </span>
                        <h2 className="text-2xl font-bold text-white font-display">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                      {ind.summary}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-display">
                        Relevant Core Capabilities:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {ind.relevantServices.map((serviceName) => (
                          <span
                            key={serviceName}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-950/70 text-blue-300 border border-blue-800/40"
                          >
                            {serviceName}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        href={`/contact?industry=${encodeURIComponent(ind.name)}`}
                        variant="primary"
                        size="sm"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Enquire for {ind.name}
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Challenges vs Solutions (7 cols) */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#090E18] rounded-xl border border-white/[0.06] p-6">
                    {/* Challenges */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 border-b border-white/[0.08] pb-2 font-display">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Prevalent Tech Challenges</span>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.keyChallenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How Redifff Helps */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 border-b border-white/[0.08] pb-2 font-display">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>How Redifff Helps</span>
                      </div>
                      <ul className="space-y-2.5">
                        {ind.redifffSolutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <FinalCtaSection
        title="Don't see your specific sector listed?"
        subtitle="Our core infrastructure, security, and support frameworks apply across any organization relying on digital continuity. Contact our senior team to discuss your operational environment."
        buttonText="Discuss Your Industry Requirements"
      />
    </div>
  );
}
