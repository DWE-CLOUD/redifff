import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Technology Consultation",
  description:
    "Get in touch with Redifff's technology consulting team. Request a confidential IT assessment, explore managed services, or discuss technical strategy.",
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} className="mb-8" />

        {/* Hero Introduction */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Consultation & Advisory Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Start a confidential technology conversation
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Whether you are evaluating a transition to managed IT services, seeking guidance on a
            critical cloud migration, or auditing your cybersecurity perimeter, our senior advisors are
            ready to assist.
          </p>
        </div>

        {/* Grid: Form (7 cols) + Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-white/[0.08] bg-[#0E1627] p-12 text-center text-slate-400 text-sm">
                  Loading enquiry portal...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar Office & Process Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Official Contact Cards */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1424] p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-white font-display border-b border-white/[0.08] pb-3">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Advisory & Commercial Inquiries</div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-blue-400 font-medium font-mono text-sm transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">London Switchboard</div>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-white hover:text-blue-400 font-medium font-mono text-sm transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Executive Headquarters</div>
                    <div className="text-slate-200 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      <p className="font-semibold text-white">{siteConfig.contact.address.street}</p>
                      <p>{siteConfig.contact.address.suite}</p>
                      <p>
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.postalCode}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {siteConfig.contact.address.note}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-1">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Operating Hours</div>
                    <p className="text-slate-200 font-medium text-xs sm:text-sm">
                      {siteConfig.contact.businessHours}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {siteConfig.contact.emergencyResponseNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect After Submitting */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0C1424] p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-white font-display">
                What happens after you enquire?
              </h3>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Advisory Review</span>
                    <span>
                      A senior technical consultant reviews your submission to identify the relevant
                      specialists.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Introductory Discovery Call</span>
                    <span>
                      A 20-minute focused discussion to understand your operational context and system
                      history.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-white block">Actionable Proposal</span>
                    <span>
                      A clear, transparent proposal detailing deliverables, timelines, and costs with
                      zero obligation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
