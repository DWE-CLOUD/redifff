import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Stethoscope, ShoppingBag, Factory, Rocket, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../common/Button";

export function IndustriesSection() {
  const iconList = [Briefcase, Rocket, Building2, Stethoscope, ShoppingBag, Factory];

  return (
    <section className="py-24 bg-[#0B111E] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="Sector Alignment"
            title="Tailored technology foundations for key industry verticals"
            subtitle="Different sectors face vastly different regulatory pressures, operational tempos, and security realities. We adapt our frameworks to your industry's specific challenges."
          />
          <Button href="/industries" variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore Industry Solutions
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.industries.slice(0, 6).map((industry, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <div
                key={industry.id}
                className="p-7 rounded-xl border border-white/[0.08] bg-[#0E1729] hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2.5">
                    {industry.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {industry.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href={`/industries#${industry.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>View sector challenge profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          Vertical alignment based on technical requirements and regulatory compliance standards.
        </div>
      </div>
    </section>
  );
}
