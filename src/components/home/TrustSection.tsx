import React from "react";
import { Shield, Zap, TrendingUp, Layers } from "lucide-react";

export function TrustSection() {
  const pillars = [
    {
      title: "Business-First Architecture",
      description:
        "Technology should serve your commercial strategy, not dictate it. We engineer systems around how your people actually collaborate and deliver value.",
      icon: TrendingUp,
    },
    {
      title: "Proactive Incident Prevention",
      description:
        "Rather than reacting after productivity stops, we identify network degradation, outdated firmware, and disk exhaustion before they become outages.",
      icon: Shield,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "From fifteen workstations to multiple branch offices, our architectures adapt cleanly without needing costly structural teardowns.",
      icon: Layers,
    },
    {
      title: "Clear, Jargon-Free Counsel",
      description:
        "Direct communication with technical experts who understand P&L implications, security liabilities, and practical daily operations.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 border-y border-white/[0.08] bg-[#0A101C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Context Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/60 text-blue-400 border border-blue-800/60">
              The Enterprise Reality
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
              Why growing businesses need an accountable technology partner
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Modern companies rely on complex software suites, hybrid cloud workspaces, distributed
              devices, and confidential client data. When IT is handled reactively, small technical
              stumbles compound into operational paralysis, security exposure, and staff frustration.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Redifff steps in as an embedded, strategic technology department—bringing enterprise-level
              stewardship, disciplined maintenance, and unbiased advisory to forward-thinking organizations.
            </p>
          </div>

          {/* Right 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl border border-white/[0.08] bg-[#0F182A] hover:border-blue-500/30 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
