"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Shield,
  Headphones,
  Network,
  Cloud,
  Lock,
  Compass,
  Cpu,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const serviceIcons: Record<string, React.ReactNode> = {
    "managed-it-services": <Shield className="w-4 h-4 text-blue-400" />,
    "it-support-and-helpdesk": <Headphones className="w-4 h-4 text-blue-400" />,
    "infrastructure-network-management": <Network className="w-4 h-4 text-blue-400" />,
    "cloud-solutions-management": <Cloud className="w-4 h-4 text-blue-400" />,
    "cybersecurity-consulting": <Lock className="w-4 h-4 text-blue-400" />,
    "it-strategy-consulting": <Compass className="w-4 h-4 text-blue-400" />,
    "software-implementation-integration": <Cpu className="w-4 h-4 text-blue-400" />,
    "business-automation-digital-transformation": <Zap className="w-4 h-4 text-blue-400" />,
  };

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0B111E]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Logo variant="full" theme="dark" size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isCurrent("/") && pathname === "/"
                    ? "text-blue-400 bg-blue-950/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onFocus={() => setServicesDropdownOpen(true)}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isCurrent("/services")
                      ? "text-blue-400 bg-blue-950/40"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[640px] rounded-xl border border-white/10 bg-[#0F172A] p-4 shadow-2xl backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150"
                    role="menu"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] px-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-display">
                        Core Technology Capabilities
                      </span>
                      <Link
                        href="/services"
                        className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        All Services Overview <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {siteConfig.services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.05] transition-colors group"
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-md bg-blue-950/70 border border-blue-800/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-blue-500/50 transition-colors">
                            {serviceIcons[service.slug] || <Shield className="w-4 h-4 text-blue-400" />}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                              {service.title}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-normal">
                              {service.shortDescription}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isCurrent("/industries")
                    ? "text-blue-400 bg-blue-950/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isCurrent("/about")
                    ? "text-blue-400 bg-blue-950/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isCurrent("/contact")
                    ? "text-blue-400 bg-blue-950/40"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Consultation Action */}
            <div className="hidden lg:flex items-center gap-4">
              <Button href="/contact" variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Get a Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/10 bg-[#0B111E] px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  pathname === "/" ? "bg-blue-950/60 text-blue-400" : "text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-white/[0.05]"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-blue-800/60 ml-3 my-1">
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded-md text-sm font-semibold text-blue-400 hover:bg-white/[0.05]"
                    >
                      All Services Overview →
                    </Link>
                    {siteConfig.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  pathname.startsWith("/industries") ? "bg-blue-950/60 text-blue-400" : "text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/about"
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  pathname.startsWith("/about") ? "bg-blue-950/60 text-blue-400" : "text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  pathname.startsWith("/contact") ? "bg-blue-950/60 text-blue-400" : "text-slate-200 hover:bg-white/[0.05]"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Get a Consultation
              </Button>
              <div className="text-center text-xs text-slate-400 pt-1">
                Direct advisory:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
