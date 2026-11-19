import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  Layers,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Button";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Redifff Technology Consulting`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Redifff`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

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

  const Icon = iconMap[service.iconName] || ShieldCheck;

  // Other related services for exploration
  const otherServices = siteConfig.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          className="mb-8"
        />

        {/* Hero Header */}
        <div className="max-w-4xl mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
            <Icon className="w-4 h-4 text-blue-400" />
            <span>Specialized IT Capability</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            {service.title}
          </h1>

          <p className="text-xl sm:text-2xl text-blue-300 font-medium font-sans">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl">
            {service.fullDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Enquire About {service.title}
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
            >
              Back to All Services
            </Button>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Problems Solved */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4 font-display">
                <AlertCircle className="w-4 h-4" />
                <span>The Commercial Friction We Eliminate</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-4">
                Why businesses struggle with {service.title.toLowerCase()}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Without disciplined technical governance, organizations frequently suffer from
                unplanned interruptions, rising hidden overheads, and security blind spots. Here are
                the common challenges this capability addresses directly:
              </p>
              <div className="space-y-3">
                {service.challengesSolved.map((challenge) => (
                  <div
                    key={challenge}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0A101C] border border-white/[0.04]"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2" />
                    <span className="text-sm text-slate-200 leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What is Included (Deliverables) */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 font-display">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Standard Deliverables & Scope</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-4">
                What is included in this service
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Redifff provides clearly defined scopes of work with zero hidden exclusions. When you
                partner with us for {service.title.toLowerCase()}, your agreement encompasses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatsIncluded.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#090E18] border border-white/[0.04]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Business Benefits */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 font-display">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Business Value</span>
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-4">
                Measurable operational impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.businessBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-5 rounded-xl bg-[#0A101C] border border-white/[0.04] flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-white font-display mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Implementation Methodology */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-8">
              <h2 className="text-2xl font-bold text-white font-display mb-4">
                How we onboard and deploy this capability
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Initial Baseline Assessment</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      We document your current environment, configurations, active user seats, and
                      immediate risk areas with zero disruption to active daily operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Phased Remediation & Configuration</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Critical vulnerabilities, network bottlenecks, or license misconfigurations are
                      resolved systematically during scheduled maintenance windows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 font-mono text-sm font-bold flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Ongoing Proactive Stewardship</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Your systems transition to active monitoring, automated hygiene schedules, and
                      regular strategic review sessions with your dedicated Redifff team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Ideal Candidate Profile */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1424] p-6 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-display">
                Ideal For
              </h3>
              <ul className="space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Consultation Card */}
            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-[#111C33] to-[#0A101D] p-6 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white font-display">
                Discuss Your Requirements
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with an experienced technology advisor to review your specific needs,
                explore potential solutions, and receive a transparent proposal.
              </p>
              <Button
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Consultation
              </Button>
              <div className="text-[11px] text-center text-slate-400">
                Direct advisory: {siteConfig.contact.email}
              </div>
            </div>

            {/* Other Services */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1424] p-6 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-display">
                Other Technology Services
              </h3>
              <div className="space-y-2">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="block p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] text-xs font-medium text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    {other.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaSection
        title={`Ready to optimize your ${service.title.toLowerCase()}?`}
        subtitle="Schedule a consultation with our technology team to discuss your current infrastructure and outline a practical path forward."
        buttonText={`Enquire About ${service.title}`}
      />
    </div>
  );
}
