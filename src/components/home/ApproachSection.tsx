import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "../common/SectionHeader";

export function ApproachSection() {
  return (
    <section className="py-24 bg-[#090E1A] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Methodology"
          title="A disciplined, transparent delivery framework"
          subtitle="We eliminate uncertainty. Our five-stage engagement process ensures that every decision is grounded in business objectives, verified against data, and deployed with zero operational disruption."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteConfig.approach.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#0D1526] flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200"
            >
              <div>
                <div className="text-2xl font-black text-blue-500 font-mono tracking-tight mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white font-display mb-1.5">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-blue-300 mb-3">
                  {step.subtitle}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
