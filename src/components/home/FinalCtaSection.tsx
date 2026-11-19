import React from "react";
import { ArrowRight, Mail, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "../common/Button";

interface FinalCtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function FinalCtaSection({
  title = "Ready to elevate your technology operations?",
  subtitle = "Schedule a confidential consultation with a senior Redifff technology advisor. We'll review your existing environment, identify vulnerabilities, and outline practical next steps.",
  buttonText = "Schedule an Introductory Consultation",
}: FinalCtaSectionProps) {
  return (
    <section className="py-24 bg-[#0A101C] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-400 border border-blue-800/60 mb-6">
          <CalendarCheck className="w-3.5 h-3.5" />
          Direct Technical Advisory
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {buttonText}
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="lg"
          >
            Explore All Capabilities
          </Button>
        </div>

        {/* Quick Direct Contacts */}
        <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="text-slate-400">
            Initial review conducted within 1 business day
          </div>
        </div>
      </div>
    </section>
  );
}
