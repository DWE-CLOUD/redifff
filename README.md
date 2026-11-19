# REDIFFF — Enterprise IT Support & Technology Consulting Website

A complete, production-ready, highly credible B2B website built for **REDIFFF**, an IT Support and Technology Consulting business.

Positioning: *"Your technology partner for smarter business operations."*  
Headline: *"Technology that moves your business forward."*

---

## 1. Project Overview & Architecture

The website is engineered using **Next.js 16 (App Router)** with **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**, following the principles of Anthropic's **frontend-design**, **ui-ux-pro-max**, Vercel's **web-design-guidelines**, and **vercel-react-best-practices**.

### Key Architectural Highlights
- **Server Components by Default**: Zero unnecessary client bundle overhead. Pages are pre-rendered statically for maximum SEO performance and instant TTFB.
- **Strict Visual Restraint**: No generic purple/pink gradients, cartoon illustrations, or SaaS-card clichés. Built with a bespoke enterprise palette: Deep navy (`#0B111E`), Midnight blue (`#101827`), Electric blue (`#3978F6`), and Slate grey (`#64748B`).
- **Original Vector Brand Identity**: Bespoke geometric "C" precision monogram and wordmark built as scalable SVGs, with dynamic browser favicon and touch icons.
- **Bespoke Hero Topology Graphic**: Dynamic, interactive enterprise node topology representing connected cloud, network core, cyber defense, and backup systems.
- **Server-Side Validated Contact Engine**: Next.js API route (`/api/contact`) with email regex validation, unique reference ID generation (`CAL-XXXX-XXXX`), anti-spam sanitization, loading states, error handling, and configurable webhook/Resend/SMTP integration with direct mailto fallback.
- **Complete On-Page SEO**: Unique metadata for every page, Open Graph, Twitter cards, XML sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org `ProfessionalService` JSON-LD structured data.
- **Full Accessibility (WCAG 2.1 AA)**: Skip to main content link, visible keyboard focus rings, semantic form associations (`htmlFor`/`id`), and `aria-live` error states.

---

## 2. Directory Structure

```
redifff-website/
├── .agents/skills/                    # Installed Agent Skills
│   ├── frontend-design/              # Anthropic design guidance
│   ├── ui-ux-pro-max/                # Design intelligence & UI tokens
│   ├── web-design-guidelines/        # Vercel accessibility & UI standards
│   └── vercel-react-best-practices/  # React performance & optimization rules
├── public/
│   └── favicon.svg                   # Scalable vector favicon
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Contact form API endpoint with validation
│   │   ├── about/page.tsx            # About Redifff (Mission, Vision, Values, Philosophy)
│   │   ├── contact/page.tsx          # Contact & Consultation portal
│   │   ├── industries/page.tsx       # 7 Key Industry Sectors breakdown
│   │   ├── privacy-policy/page.tsx   # Comprehensive starter privacy policy
│   │   ├── services/
│   │   │   ├── page.tsx              # All 8 services comprehensive overview
│   │   │   └── [slug]/page.tsx       # 8 individual pre-rendered service detail pages
│   │   ├── terms-and-conditions/page.tsx # Commercial terms & pre-launch notices
│   │   ├── globals.css               # Tailwind v4 theme, tokens, accessibility focus rings
│   │   ├── icon.svg                  # Next.js dynamic SVG icon
│   │   ├── layout.tsx                # Root layout with fonts, JSON-LD, Navbar, and Footer
│   │   ├── not-found.tsx             # Polished 404 page with navigation recovery
│   │   ├── page.tsx                  # High-conversion Homepage
│   │   ├── robots.ts                 # Dynamic robots.txt
│   │   └── sitemap.ts                # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── common/
│   │   │   ├── Breadcrumbs.tsx       # Accessible breadcrumb trail
│   │   │   ├── Button.tsx            # Reusable button with variants & loading state
│   │   │   ├── Footer.tsx            # Enterprise footer with contact & service links
│   │   │   ├── Logo.tsx              # Scalable SVG geometric Redifff logo
│   │   │   ├── Navbar.tsx            # Sticky responsive header with mega menu & mobile drawer
│   │   │   └── SectionHeader.tsx     # Standardized section headings
│   │   ├── contact/
│   │   │   └── ContactForm.tsx       # Interactive business enquiry form with validation
│   │   └── home/
│   │       ├── ApproachSection.tsx   # 5-stage disciplined methodology
│   │       ├── FinalCtaSection.tsx   # High-conversion closing banner
│   │       ├── HeroNetworkGraphic.tsx # Bespoke interactive network topology
│   │       ├── IndustriesSection.tsx # Preview of target sectors
│   │       ├── ServicesOverview.tsx  # Differentiated visual service layouts
│   │       └── TrustSection.tsx      # Strategic business positioning
│   └── config/
│       └── site.ts                   # Central source of truth for company & service data
└── package.json
```

---

## 3. All Completed Pages

1. **Homepage (`/`)**:
   - Hero section with headline, supporting copy, primary CTA, and interactive SVG topology graphic.
   - Trust and positioning section highlighting business-first stability and proactive stewardship.
   - Services spectrum overview with flagship card (Managed IT), spotlight cards (Security & Cloud), and compact capability cards.
   - Why Redifff (6 foundational pillars: Business-First, Proactive, Clear Communication, Scalability, Vendor Neutrality, Long-Term Partnership).
   - Target industries served preview.
   - 5-stage delivery methodology (01 Discover → 02 Assess → 03 Architect → 04 Implement → 05 Partner).
   - Direct consultation call to action.

2. **Services Overview Page (`/services`)**:
   - Full-spectrum technology capability matrix.
   - Deep dive into all 8 core services with key challenges solved, scope of deliverables, and business benefits.
   - Dual engagement models guide (Fully Outsourced IT Partner vs Co-Managed IT & Strategic Escalation).

3. **8 Dedicated Service Detail Pages (`/services/[slug]`)**:
   - `/services/managed-it-services`
   - `/services/it-support-and-helpdesk`
   - `/services/infrastructure-network-management`
   - `/services/cloud-solutions-management`
   - `/services/cybersecurity-consulting`
   - `/services/it-strategy-consulting`
   - `/services/software-implementation-integration`
   - `/services/business-automation-digital-transformation`
   *(Each page includes unique problems solved, scope of work, business benefits, 3-step rollout methodology, ideal customer criteria, and customized service enquiry links).*

4. **Industries Page (`/industries`)**:
   - Detailed analysis for 7 core sectors:
     - Small & Medium-Sized Businesses (SMEs)
     - Startups & Growing Companies
     - Professional & Financial Services
     - Healthcare & Clinical Practices
     - Retail & E-commerce Operations
     - Manufacturing & Logistics
     - Education & Training Providers
   - Detailed comparison of prevalent sector challenges against tailored Redifff solutions.

5. **About Page (`/about`)**:
   - Company introduction, Mission, Vision, and Operating Philosophy.
   - 4 Guiding Values (Business Impact, Transparency, Proactive Discipline, Respectful Communication).
   - Tangible Service Commitments (zero proprietary lock-in, client documentation ownership, predictable billing, senior oversight).

6. **Contact & Consultation Portal (`/contact`)**:
   - Interactive business enquiry form with client and server-side validation.
   - Service and industry auto-selection via query strings (`?service=...`, `?industry=...`).
   - Loading states, prevention of duplicate submissions, and reference ID confirmation screen.
   - Complete direct contact channels (email, phone, address, operating hours, emergency SLA note).
   - Transparent 3-step advisory process explainer.

7. **Legal Governance Pages**:
   - `/privacy-policy`: Comprehensive privacy notice drafted specifically for IT services and infrastructure custodianship.
   - `/terms-and-conditions`: Website usage terms, limitation of liability, intellectual property, and pre-contractual advisory terms under England & Wales law.

8. **System & SEO Routes**:
   - `/not-found`: Custom 404 page with clean navigation recovery.
   - `/sitemap.xml`: XML sitemap containing all 23 routes.
   - `/robots.txt`: Search crawler instructions.
   - `/icon.svg`: Dynamic vector favicon.

---

## 4. How to Run the Website

### Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000`.

### Production Build & Serve
```bash
npm run build
npm run start -- -p 3005
```
Navigate to `http://localhost:3005`.

---

## 5. Pre-Launch Configuration Checklist

Before publicly deploying the website, review and customize the following settings in `src/config/site.ts` and your environment variables:

1. **Company Legal Name & Registration**:
   - Update `legalName` in `src/config/site.ts` with your registered company number and jurisdiction.
2. **Contact Coordinates**:
   - Update `email`, `phone`, and `address` in `src/config/site.ts`.
3. **Domain URL**:
   - Change `url` from `https://www.redifff.com` to your live domain in `src/config/site.ts`.
4. **Form Integration**:
   - By default, form submissions return a confirmed reference ID and offer a direct mailto fallback.
   - To route submissions directly into your CRM, Slack, or ticketing system, set:
     ```env
     CONTACT_FORM_WEBHOOK_URL="https://your-crm-webhook-endpoint.com/redifff"
     ```
   - Or configure Resend/SendGrid/SMTP credentials in `src/app/api/contact/route.ts`.
5. **Legal Review**:
   - Have company counsel inspect `/privacy-policy` and `/terms-and-conditions` to confirm company-specific data protection officer details.
