import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing the use of the Redifff website and introductory commercial inquiries.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "18 November 2026";

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="mb-8" />

        <div className="space-y-4 border-b border-white/[0.08] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
            Commercial Terms
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: {lastUpdated} | Redifff Technology Consulting Ltd.
          </p>
        </div>

        {/* Launch Readiness Notice */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 leading-relaxed mb-10">
          <strong className="font-semibold block text-amber-300 mb-1">Pre-Launch Notice for Company Counsel:</strong>
          These terms govern website visitation and pre-contractual commercial interactions. Formal technology
          provisioning, response SLAs, warranties, and enterprise liability caps are governed exclusively
          under bespoke Master Services Agreements (MSAs) executed directly between Redifff and authorized
          client signatories.
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Redifff website ({siteConfig.url}), you agree to be bound by these
              Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms,
              you should discontinue use of the website immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">2. Informational Nature of Content</h2>
            <p>
              The content presented on this website is for general informational and marketing purposes
              only. Descriptions of services, architectural diagrams, security approaches, and potential
              technological benefits do not constitute binding engineering warranties, cybersecurity
              guarantees, or formal legal advice.
            </p>
            <p>
              Every corporate technology environment possesses distinct security, compatibility, and
              infrastructure variables. Concrete service obligations and response times are established
              only through signed commercial service contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">3. Commercial Enquiries & Consultations</h2>
            <p>
              Submitting an enquiry via our contact form or requesting an initial consultation does not
              establish an attorney-client, fiduciary, or binding contractor relationship. Redifff reserves
              the right to decline any enquiry or prospective project based on capacity, technical scope,
              or strategic alignment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">4. Intellectual Property</h2>
            <p>
              All materials on this website—including the Redifff brand name, geometric monogram, text,
              graphics, layout architectures, and proprietary service frameworks—are the intellectual
              property of Redifff Technology Consulting Ltd. and are protected by applicable copyright,
              trademark, and trade secret laws. You may not reproduce, distribute, or create derivative
              works without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Redifff Technology Consulting Ltd. shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising
              out of or relating to your access to, inability to access, or reliance upon materials
              published on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">6. Third-Party Links</h2>
            <p>
              This website may reference third-party software vendors, hardware manufacturers, or industry
              frameworks. Redifff does not control, endorse, or accept liability for third-party platforms,
              services, or privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws
              of England and Wales. Any disputes arising under or in connection with these terms shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">8. Questions and Clarifications</h2>
            <p>
              For legal inquiries regarding these terms or commercial service frameworks, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#0E1627] border border-white/[0.08] text-xs sm:text-sm text-slate-300 space-y-1 font-mono">
              <p className="font-bold text-white">{siteConfig.legalName}</p>
              <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
              <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.postalCode}</p>
              <p className="pt-1">Email: {siteConfig.contact.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
