import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle2,
  Compass,
  ArrowRight,
  TrendingUp,
  Cpu,
  Users,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Button";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "About Us | Strategic IT Partner for Business Operations",
  description:
    "Learn about Redifff's mission, values, and operating philosophy. We partner with businesses to build, manage, and optimize reliable technology systems.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Business Impact Over Technical Novelty",
      description:
        "We never recommend technology for the sake of novelty. Every piece of hardware, software subscription, and cloud architecture must have a clear justification in risk reduction, cost efficiency, or operational velocity.",
      icon: TrendingUp,
    },
    {
      title: "Uncompromising Integrity & Transparency",
      description:
        "We are strictly vendor-neutral. We do not accept vendor kickbacks, push proprietary lock-in hardware, or conceal our configurations behind proprietary walls. You retain full ownership and administrative control over your digital estate.",
      icon: ShieldCheck,
    },
    {
      title: "Proactive Discipline",
      description:
        "The standard break-fix IT model relies on things going wrong for IT providers to bill hours. We operate on the exact opposite principle: our goal is total operational stability where technical failures are anticipated and mitigated before staff notice.",
      icon: Target,
    },
    {
      title: "Human, Respectful Communication",
      description:
        "Technical depth should not come with condescension. Whether assisting an executive with high-level technology roadmaps or helping a new staff member configure their laptop, we communicate with patience, clarity, and zero jargon.",
      icon: Users,
    },
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} className="mb-8" />

        {/* Hero Section */}
        <div className="max-w-4xl mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
            About REDIFFF
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Your technology partner for smarter, more dependable business operations
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans">
            Redifff was established to bridge the gap between complex enterprise technology and practical
            business execution. We serve as an accountable, senior-led technology department for
            ambitious companies that need reliable IT infrastructure without administrative complexity.
          </p>
        </div>

        {/* Mission & Vision Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0E1627] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-3">
                Our Mission
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                To liberate businesses from the friction, anxiety, and unpredictable costs of IT failures
                by delivering proactive, secure, and commercially grounded technology management. We
                enable leadership teams to pursue their growth objectives with complete confidence in
                their digital foundations.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0E1627] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-3">
                Our Vision
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                A business landscape where technology is never a roadblock or an opaque cost center,
                but rather an invisible, resilient engine that empowers teams to collaborate securely,
                serve their customers seamlessly, and adapt rapidly to new market opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Philosophy & Approach */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0C1322] p-8 sm:p-12 mb-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 font-display">
              Operating Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              Technology that serves business outcomes, not technology for its own sake
            </h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Too many IT providers focus exclusively on technical minutiae while failing to
                understand how the business actually functions. They implement complex tools that staff
                dislike, lock clients into rigid contracts, and fail to translate technical risk into
                executive decision-making terms.
              </p>
              <p>
                At Redifff, we take a different stance. We begin by understanding your team's workflow,
                compliance obligations, customer expectations, and commercial trajectory. We then
                engineer the minimum necessary technical architecture to deliver maximum stability,
                speed, and data protection.
              </p>
              <p>
                The outcome is an IT environment that feels effortless to your team, defensible to
                regulators and insurers, and transparent to your financial directors.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 font-display">
              Guiding Principles
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The values that govern every client engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-xl border border-white/[0.08] bg-[#0E1729] hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment to Transparency & Accountability */}
        <div className="p-8 sm:p-10 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-[#0C1527] to-[#121E36]">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
              Our Service Commitment
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              When you entrust your technology operations to Redifff, you receive documented service
              expectations, proactive communication, and complete administrative transparency:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero proprietary hardware lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full client documentation ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent, predictable monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated senior technical oversight</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCtaSection
        title="Explore how Redifff can support your business"
        subtitle="Schedule an introductory call with our advisory team to discuss your goals, operational priorities, and technology challenges."
        buttonText="Get in Touch"
      />
    </div>
  );
}
