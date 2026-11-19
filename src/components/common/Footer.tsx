import React from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/[0.08] bg-[#080D17] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full" theme="dark" size="md" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mt-3">
              {siteConfig.supportingMessage}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                <span>Enterprise B2B Technology Consulting</span>
              </div>
              <p className="text-slate-500 text-[11px] pl-6">
                Independent, proactive, and commercially focused.
              </p>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-display mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Industries (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-display mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.industries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/about"
                  className="text-blue-400 hover:text-blue-300 font-medium text-xs block"
                >
                  About Redifff →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider font-display mb-4">
              Contact & Enquiries
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-200 hover:text-white hover:underline font-medium block"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <span className="text-[11px] text-slate-400">Business enquiries & consultations</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-slate-300 text-xs leading-relaxed">
                  <p className="text-slate-200 font-medium">{siteConfig.contact.address.street}</p>
                  <p>{siteConfig.contact.address.suite}</p>
                  <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.postalCode}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{siteConfig.contact.address.note}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-slate-400">
                  <p className="text-slate-200">{siteConfig.contact.businessHours}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{siteConfig.contact.emergencyResponseNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Sub-footer */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {currentYear} {siteConfig.name}. {siteConfig.tagline}.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Enquiry Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
