import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Redifff's Privacy Policy explains how we collect, handle, and protect personal and operational information when you use our website or engage our consulting services.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "18 November 2026";

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-8" />

        <div className="space-y-4 border-b border-white/[0.08] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/70 text-blue-300 border border-blue-800/60">
            Legal & Data Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: {lastUpdated} | Redifff Technology Consulting Ltd.
          </p>
        </div>

        {/* Launch Readiness Notice */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200 leading-relaxed mb-10">
          <strong className="font-semibold block text-amber-300 mb-1">Pre-Launch Notice for Company Counsel:</strong>
          This document serves as an operational starter privacy notice for Redifff Technology Consulting Ltd.
          Specific data controller registration details, appointed Data Protection Officer (DPO) contacts,
          and any third-party telemetry tools must be reviewed and customized prior to final public deployment.
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">1. Introduction</h2>
            <p>
              Redifff Technology Consulting Ltd. (&quot;Redifff&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to
              protecting the confidentiality and integrity of personal information entrusted to us.
              This Privacy Policy explains how we collect, process, and safeguard information collected
              through our website ({siteConfig.url}) and in the course of evaluating and delivering our IT
              support, infrastructure, and consulting services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">2. Information We Collect</h2>
            <p>We may collect and process the following categories of information:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong>Contact Information:</strong> Your full name, business email address, company name,
                business telephone number, and job title when submitted through our enquiry form.
              </li>
              <li>
                <strong>Technical Enquiry Details:</strong> Information you choose to provide regarding your
                organization&apos;s existing technology infrastructure, user counts, application suites, and
                operational pain points.
              </li>
              <li>
                <strong>Website Usage Data:</strong> Standard server log information, including your IP
                address, browser type, referring URLs, device characteristics, and pages accessed, used
                strictly for security monitoring and operational troubleshooting.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">3. Legal Basis and Purposes of Processing</h2>
            <p>We process your personal information strictly for legitimate commercial purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Responding to and evaluating your business consultation and service inquiries;</li>
              <li>Preparing commercial proposals and formal Service Level Agreements (SLAs);</li>
              <li>Fulfilling contractual obligations under active technology service contracts;</li>
              <li>Protecting our digital assets against malicious access, spam, and cyber threats;</li>
              <li>Complying with applicable legal, accounting, and regulatory obligations in the United Kingdom.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">4. Client Infrastructure Data Handling</h2>
            <p>
              Under active service engagements, Redifff personnel may access client systems, administrative
              consoles, and networks. All such access is governed by separate, legally binding Non-Disclosure
              Agreements (NDAs) and Master Services Agreements (MSAs). We operate under the principle of least
              privilege, and we do not use, copy, or retain client proprietary data for any purpose outside
              the explicit scope of agreed technical services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">5. Data Sharing and Third Parties</h2>
            <p>
              We do not sell, rent, or trade your contact or business information. We only share information
              with vetted service providers who support our core operations (such as secure email routing
              and hosting infrastructure) under strict contractual data protection terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">6. Data Retention</h2>
            <p>
              We retain commercial enquiry records only for as long as necessary to fulfill the business
              inquiry or maintain an active client relationship, unless a longer retention period is mandated
              by statutory tax or legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">7. Your Rights</h2>
            <p>
              Under applicable data protection legislation (including the UK General Data Protection
              Regulation), you have the right to request access to, rectification of, or erasure of your
              personal data, as well as the right to restrict or object to certain processing activities.
            </p>
            <p>
              To exercise any of these rights, please contact our Data Governance team at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-400 hover:underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white font-display">8. Contact Us</h2>
            <p>
              If you have questions or concerns regarding this policy or our data practices, please write to:
            </p>
            <div className="p-4 rounded-xl bg-[#0E1627] border border-white/[0.08] text-xs sm:text-sm text-slate-300 space-y-1 font-mono">
              <p className="font-bold text-white">{siteConfig.legalName}</p>
              <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.suite}</p>
              <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}</p>
              <p className="pt-1">Email: {siteConfig.contact.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
