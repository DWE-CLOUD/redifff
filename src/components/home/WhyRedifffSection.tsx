import React from "react";
import {
  TrendingUp,
  ShieldAlert,
  MessageSquare,
  Layers,
  CheckCircle2,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "../common/SectionHeader";

export function WhyRedifffSection() {
  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    ShieldAlert,
    MessageSquare,
    Layers,
    CheckCircle2,
    Users,
  };

  return (
    <section className="py-24 bg-[#090F1A] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Redifff Standard"
          title="Engineered around accountability, clarity, and long-term business value"
          subtitle="We reject the reactive 'break-fix' model. Our operating principles ensure your technology drives operational momentum rather than administrative headaches."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyRedifff.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-white/[0.08] bg-[#0E1627] hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
