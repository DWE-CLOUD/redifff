import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B111E",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "REDIFFF | IT Support & Technology Consulting",
    template: "%s | REDIFFF",
  },
  description: siteConfig.supportingMessage,
  applicationName: "REDIFFF",
  keywords: [
    "IT Support",
    "Managed IT Services",
    "Technology Consulting",
    "IT Infrastructure",
    "Network Management",
    "Cloud Solutions",
    "Cybersecurity Consulting",
    "IT Strategy",
    "Business Automation",
    "B2B Technology Partner",
  ],
  authors: [{ name: "REDIFFF", url: siteConfig.url }],
  creator: "REDIFFF",
  publisher: "Redifff Technology Consulting Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "REDIFFF | Technology That Moves Your Business Forward",
    description: siteConfig.supportingMessage,
  },
  twitter: {
    card: "summary_large_image",
    title: "REDIFFF | Technology That Moves Your Business Forward",
    description: siteConfig.supportingMessage,
    creator: "@rediffftech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for B2B Technology Consulting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    description: siteConfig.supportingMessage,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suite}`,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Support and Technology Consulting Services",
      itemListElement: siteConfig.services.map((s, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} ${interSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B111E] font-sans text-slate-100 antialiased selection:bg-blue-600 selection:text-white flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
