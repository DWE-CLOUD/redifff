export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tagline: string;
  iconName: string;
  challengesSolved: string[];
  whatsIncluded: string[];
  businessBenefits: {
    title: string;
    description: string;
  }[];
  idealFor: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  summary: string;
  keyChallenges: string[];
  redifffSolutions: string[];
  relevantServices: string[];
}

export const siteConfig = {
  name: "REDIFFF",
  legalName: "Redifff Technology Consulting Ltd.",
  tagline: "Technology that moves your business forward",
  positioning: "Your technology partner for smarter business operations.",
  supportingMessage:
    "From dependable IT support to strategic technology consulting, Redifff helps businesses build, manage and improve the technology they rely on.",
  url: "https://www.redifff.com",
  contact: {
    email: "support@redifff.in",
    phone: "",
    supportEmail: "support@redifff.in",
    address: {
      street: "100 Bishopsgate",
      suite: "Level 19",
      city: "London",
      postalCode: "EC2N 4AG",
      country: "United Kingdom",
      note: "Business meetings by appointment only.",
    },
    businessHours: "Monday – Friday: 08:30 – 18:00 (GMT)",
    emergencyResponseNote: "Priority coverage available under active service agreements.",
  },
  social: {
    linkedin: "https://linkedin.com/company/redifff-tech",
    x: "https://x.com/rediffftech",
    github: "https://github.com/rediffftech",
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Managed IT Services", href: "/services/managed-it-services" },
        { label: "IT Support & Helpdesk", href: "/services/it-support-and-helpdesk" },
        { label: "Infrastructure & Networks", href: "/services/infrastructure-network-management" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions-management" },
        { label: "Cybersecurity Consulting", href: "/services/cybersecurity-consulting" },
        { label: "IT Strategy & Consulting", href: "/services/it-strategy-consulting" },
        { label: "Software Implementation", href: "/services/software-implementation-integration" },
        { label: "Business Automation", href: "/services/business-automation-digital-transformation" },
      ],
    },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "managed-it-services",
      slug: "managed-it-services",
      title: "Managed IT Services",
      tagline: "Continuous, proactive oversight of your entire technology ecosystem.",
      shortDescription:
        "Comprehensive management of your workstations, servers, networks and cloud environments so your team stays productive without technology disruptions.",
      fullDescription:
        "Redifff Managed IT Services provides complete, accountable stewardship of your organization's IT infrastructure. Rather than waiting for systems to fail, we employ proactive monitoring, automated patch management, security hygiene, and vendor coordination to maintain continuous operating health.",
      iconName: "ShieldCheck",
      challengesSolved: [
        "Unpredictable IT outages disrupting customer operations and staff productivity",
        "Lack of internal IT leadership and technical depth for critical systems",
        "Security patches and critical system updates continually deferred",
        "Scattered software licenses, rising technology costs, and unmanaged vendor sprawl",
        "Staff wasting hours troubleshooting routine workstation and application errors",
      ],
      whatsIncluded: [
        "Continuous 24/5 infrastructure health monitoring and automated alerts",
        "Workstation and server lifecycle maintenance, updates, and firmware patching",
        "Backup management, automated recovery verification, and storage audits",
        "Vendor management: single point of contact for ISPs, software, and hardware providers",
        "Quarterly technology reviews and IT roadmap planning with leadership",
        "User provisioning, role-based access management, and offboarding workflows",
      ],
      businessBenefits: [
        {
          title: "Predictable Operational Costs",
          description: "Eliminate sudden emergency repair invoices with transparent, predictable monthly IT budgets.",
        },
        {
          title: "Reduced Downtime",
          description: "Identify and resolve system anomalies before they cascade into team-wide work stoppages.",
        },
        {
          title: "Executive Peace of Mind",
          description: "Leadership focuses entirely on core commercial goals, knowing IT operations are managed responsibly.",
        },
      ],
      idealFor: [
        "Growing businesses (15–250 staff) lacking a dedicated internal IT department",
        "Companies looking to offload routine maintenance from internal engineering teams",
        "Multi-site organizations needing unified technology standards and centralized control",
      ],
    },
    {
      id: "it-support-and-helpdesk",
      slug: "it-support-and-helpdesk",
      title: "IT Support and Helpdesk",
      tagline: "Rapid, friendly technical problem resolution for your daily operations.",
      shortDescription:
        "Structured technical assistance for your team. From hardware troubleshooting and software errors to access control and connectivity problems.",
      fullDescription:
        "Technical hitches cost time, frustrate employees, and slow business momentum. Redifff delivers responsive, empathetic, and technically rigorous IT support. Every ticket is logged, tracked, and resolved with clear communication, eliminating jargon and providing permanent fixes rather than temporary band-aids.",
      iconName: "Headphones",
      challengesSolved: [
        "Employees blocked by recurring software crashes, printer failures, and VPN dropouts",
        "Frustrating communication with technical providers who speak in opaque jargon",
        "No centralized ticketing system, leading to forgotten requests and lost accountability",
        "Slow onboarding of new hires, delaying employee ramp-up time by days or weeks",
        "Inconsistent device setups creating security liabilities and support headaches",
      ],
      whatsIncluded: [
        "Multi-channel support ticketing via email, web portal, and scheduled phone assistance",
        "Remote desktop diagnostics and rapid hands-on troubleshooting",
        "Operating system troubleshooting for Windows, macOS, and Linux workstations",
        "Standardized employee hardware staging, provisioning, and secure decommissioning",
        "Peripheral, network printer, video conference, and office hardware support",
        "Clear ticket SLA tracking, status updates, and transparent resolution documentation",
      ],
      businessBenefits: [
        {
          title: "Immediate Productivity Recovery",
          description: "Staff receive swift, professional resolution so their workday is not consumed by technical friction.",
        },
        {
          title: "Transparent Service Metrics",
          description: "Clear visibility into ticket volumes, resolution categories, and recurring system pain points.",
        },
        {
          title: "Consistent Onboarding Experience",
          description: "New team members receive secure, fully configured hardware and accounts from day one.",
        },
      ],
      idealFor: [
        "Businesses with hybrid or distributed staff requiring reliable remote support",
        "Companies experiencing friction with unresponsive or impersonal IT providers",
        "Organizations needing structured ticketing and SLA transparency",
      ],
    },
    {
      id: "infrastructure-network-management",
      slug: "infrastructure-network-management",
      title: "IT Infrastructure & Network Management",
      tagline: "Resilient, high-performance network architecture built for business continuity.",
      shortDescription:
        "Design, deployment, and active optimization of business networks, firewalls, switches, Wi-Fi systems, and on-premises server environments.",
      fullDescription:
        "A business is only as dependable as the network connecting its people and applications. Redifff engineers enterprise-grade network architectures engineered for speed, redundancy, and zero-trust segmentation. We ensure your switches, routers, VLANs, and wireless access points deliver uninterrupted throughput.",
      iconName: "Network",
      challengesSolved: [
        "Spotty office Wi-Fi, dropped video conferences, and sluggish file transfers",
        "Unsegmented network setups where guest devices share the same network as financial records",
        "Aging switchboards and server racks with undocumented cable spaghetti and zero failover",
        "Unreliable site-to-site connectivity between branch offices and headquarters",
        "Vulnerability to physical equipment failures with no redundant internet links (failover ISP)",
      ],
      whatsIncluded: [
        "Enterprise network design, structured cabling audits, and equipment rack organization",
        "Next-generation firewall deployment (Palo Alto, Fortinet, SonicWall, UniFi Enterprise)",
        "Secure VLAN segmentation for corporate data, VoIP phones, IoT devices, and guests",
        "High-density commercial Wi-Fi planning, coverage heatmaps, and controller optimization",
        "Dual-WAN automatic failover configuration for uninterrupted internet continuity",
        "Managed switch administration, port security, QoS bandwidth prioritization, and VPN tunnels",
      ],
      businessBenefits: [
        {
          title: "Rock-Solid Connectivity",
          description: "Fast, reliable data transmission across all workstations, conference rooms, and branch offices.",
        },
        {
          title: "Defensible Network Boundaries",
          description: "Isolate sensitive internal databases and administrative tools from unauthorized local access.",
        },
        {
          title: "Business Continuity Assurance",
          description: "Automated internet failover keeps credit card processing, voice calls, and cloud work online.",
        },
      ],
      idealFor: [
        "Offices with 20+ workstations experiencing network congestion or dropped calls",
        "Companies expanding into new facilities or retrofitting commercial floor space",
        "Firms handling confidential client data requiring strict internal network segregation",
      ],
    },
    {
      id: "cloud-solutions-management",
      slug: "cloud-solutions-management",
      title: "Cloud Solutions and Management",
      tagline: "Secure, scalable cloud infrastructure tailored to modern business agility.",
      shortDescription:
        "Architecture, migration, and management across Microsoft 365, Google Workspace, Microsoft Azure, and AWS to empower flexible, secure collaboration.",
      fullDescription:
        "Moving to or operating in the cloud shouldn't mean runaway subscription costs or loose security permissions. Redifff designs and stewards cloud architectures that match your operational cadence. Whether migrating from legacy on-premises servers or optimizing existing SaaS fleets, we establish secure, cost-conscious, and resilient cloud foundations.",
      iconName: "Cloud",
      challengesSolved: [
        "Fragmented file storage across personal hard drives, legacy file servers, and multiple cloud drives",
        "Runaway cloud infrastructure billing due to unmonitored compute resources and orphaned storage",
        "Inadequate multi-factor authentication and loose file sharing permissions risking data exposure",
        "Complex legacy server migrations causing fear of downtime or business disruption",
        "Difficulty enabling secure remote collaboration for distributed workforces",
      ],
      whatsIncluded: [
        "Microsoft 365 and Google Workspace tenant architecture, administration, and hardening",
        "Cloud file migration (SharePoint, OneDrive, Google Drive) with granular permission taxonomies",
        "Azure and AWS virtual machine, storage bucket, and serverless workload management",
        "Identity and Access Management (IAM), Conditional Access policies, and single sign-on (SSO)",
        "Cloud cost optimization audits and monthly consumption rightsizing",
        "Automated cloud-to-cloud backup, immutable retention rules, and disaster recovery orchestration",
      ],
      businessBenefits: [
        {
          title: "Frictionless Anywhere-Work",
          description: "Empower staff to collaborate safely from any approved device without complex VPN hurdles.",
        },
        {
          title: "Optimized Cloud Spend",
          description: "Identify and eliminate idle resources, over-provisioned licenses, and redundant storage tiers.",
        },
        {
          title: "Resilient Data Protection",
          description: "Guard against cloud account takeover and ransomware with immutable secondary backups.",
        },
      ],
      idealFor: [
        "Organizations transitioning away from aging on-premises physical file servers",
        "Businesses needing to consolidate divergent cloud tools into a coherent, compliant environment",
        "Companies needing professional governance over Microsoft 365 or Google Workspace",
      ],
    },
    {
      id: "cybersecurity-consulting",
      slug: "cybersecurity-consulting",
      title: "Cybersecurity Solutions & Consulting",
      tagline: "Pragmatic, defense-in-depth protection against modern cyber threats.",
      shortDescription:
        "Comprehensive security posture assessments, endpoint defense, vulnerability management, and employee security awareness to safeguard critical business data.",
      fullDescription:
        "Cyber threats target businesses of all sizes. Redifff delivers realistic, layered security frameworks that harden your defenses without paralyzing everyday workflow. From Endpoint Detection and Response (EDR) and email security to access governance and incident response planning, we protect your reputation and commercial assets.",
      iconName: "Lock",
      challengesSolved: [
        "Sophisticated phishing and executive impersonation emails attempting wire fraud",
        "Ransomware risks threatening total operational paralysis and catastrophic data loss",
        "Employees using weak or reused passwords without centralized credential management",
        "Uncertainty about whether current security controls meet supplier or insurance requirements",
        "Lack of formal incident response procedures in the event of a suspected breach",
      ],
      whatsIncluded: [
        "Comprehensive Cybersecurity Risk Assessment & gap analysis against recognized standards",
        "Next-generation Endpoint Detection & Response (EDR / XDR) deployment and behavioral monitoring",
        "Advanced cloud email protection: anti-phishing, SPF/DKIM/DMARC alignment, and attachment sandboxing",
        "Enterprise password manager deployment (1Password, Bitwarden) with master policy enforcement",
        "Vulnerability scanning for public IPs, network perimeters, and internal hosts",
        "Simulated phishing exercises and interactive employee cyber hygiene training",
      ],
      businessBenefits: [
        {
          title: "Substantially Reduced Breach Risk",
          description: "Layered perimeter, endpoint, and identity defenses stop malicious actors early.",
        },
        {
          title: "Insurance & Client Compliance",
          description: "Satisfy rigorous cybersecurity questionnaires required by enterprise clients and underwriters.",
        },
        {
          title: "Cultivated Security Culture",
          description: "Transform staff from vulnerable targets into your organization's most alert first line of defense.",
        },
      ],
      idealFor: [
        "Firms handling sensitive intellectual property, client financials, or personal customer data",
        "Businesses needing to satisfy Cyber Essentials, SOC 2 readiness, or insurer requirements",
        "Companies seeking to eliminate single-point-of-failure vulnerabilities in their digital perimeter",
      ],
    },
    {
      id: "it-strategy-consulting",
      slug: "it-strategy-consulting",
      title: "IT Strategy & Technology Consulting",
      tagline: "Aligning technology investments directly with commercial business objectives.",
      shortDescription:
        "Fractional CIO leadership, technology roadmapping, software selection guidance, and IT budgeting to transform technology from an expense into an asset.",
      fullDescription:
        "Technology should serve your business strategy, not dictate it. Many organizations invest in tools that duplicate functionality, confuse staff, or fail to deliver return on investment. Redifff acts as your trusted technology advisor, translating executive goals into concrete, phased, and financially responsible technical initiatives.",
      iconName: "Compass",
      challengesSolved: [
        "Making high-stakes software or infrastructure purchasing decisions without neutral technical expertise",
        "Technology investments stalling because vendors over-promise and under-deliver",
        "IT budgets spiraling out of control with no clear correlation to business performance",
        "Disjointed systems holding back corporate expansion, acquisitions, or new service launches",
        "Executive teams lacking clear insight into technological risks and digital opportunities",
      ],
      whatsIncluded: [
        "Virtual CIO (vCIO) advisory sessions with executive leadership and boards",
        "Multi-year Technology Roadmaps outlining timelines, budgets, and priority dependencies",
        "Independent vendor evaluation, RFP creation, and contract negotiation guidance",
        "Total Cost of Ownership (TCO) analysis and technology budget planning",
        "Disaster Recovery & Business Continuity Plan (BCP) formulation and stress testing",
        "IT governance frameworks, policy development, and asset lifecycle schedules",
      ],
      businessBenefits: [
        {
          title: "Informed Strategic Decisions",
          description: "Make confident capital allocations backed by seasoned technical scrutiny and objective analysis.",
        },
        {
          title: "Elimination of Redundant Spend",
          description: "Consolidate duplicative tools, renegotiate unfavorable vendor terms, and reduce license waste.",
        },
        {
          title: "Scalable Infrastructure Roadmap",
          description: "Build an architectural foundation that supports doubling your team without breaking your systems.",
        },
      ],
      idealFor: [
        "Founders, Managing Directors, and CFOs seeking unbiased technical leadership without a full-time CIO salary",
        "Companies undergoing rapid headcount growth, relocation, or structural reorganization",
        "Enterprises seeking to modernize legacy tech debt holding back commercial opportunities",
      ],
    },
    {
      id: "software-implementation-integration",
      slug: "software-implementation-integration",
      title: "Software Implementation & Integration",
      tagline: "Connecting your business applications into a coherent, high-velocity workflow.",
      shortDescription:
        "Expert deployment, configuration, and API-level data integration of core enterprise applications, CRM, ERP, and operational toolsets.",
      fullDescription:
        "When business applications operate in silos, teams waste hours copying and pasting data, tracking updates across multiple spreadsheets, and creating data discrepancies. Redifff ensures your enterprise software—from CRM platforms to ERP systems—is correctly configured, integrated, and embraced by your workforce.",
      iconName: "Cpu",
      challengesSolved: [
        "Fragmented data isolated in separate tools with no unified source of commercial truth",
        "Employees spending hours daily on manual data re-entry between disconnected software",
        "Expensive enterprise software subscriptions abandoned because implementation was too complex",
        "Sync errors and data corruption between sales, inventory, and accounting platforms",
        "Poor user adoption because staff were never properly trained on new software tools",
      ],
      whatsIncluded: [
        "Requirement scoping, workflow mapping, and application data schema planning",
        "Clean data extraction, cleansing, deduplication, and migration into target platforms",
        "API integrations and automated middleware connections between core platforms",
        "Role-based permission architecture, custom fields, and business rule configurations",
        "Comprehensive user acceptance testing (UAT) and rollback safety mechanisms",
        "Tailored staff training workshops, quick-reference guides, and post-launch hypercare",
      ],
      businessBenefits: [
        {
          title: "Single Source of Commercial Truth",
          description: "Reliable, synchronized customer and operational records across every team touchpoint.",
        },
        {
          title: "Drastically Reduced Administrative Overhead",
          description: "Automate cross-platform handoffs so employees focus on customer engagement and high-value work.",
        },
        {
          title: "High Staff Adoption Rates",
          description: "Thoughtfully configured systems and thorough user training ensure high engagement from day one.",
        },
      ],
      idealFor: [
        "Organizations replacing legacy on-prem software with modern cloud-native platforms",
        "Businesses struggling with isolated data between sales, billing, and project management",
        "Firms looking to maximize the return on high-value software investments",
      ],
    },
    {
      id: "business-automation-digital-transformation",
      slug: "business-automation-digital-transformation",
      title: "Business Automation & Digital Transformation",
      tagline: "Streamlining repetitive manual processes into dependable, automated pipelines.",
      shortDescription:
        "Practical automation of time-consuming business processes, document workflows, customer notifications, and internal approvals to amplify operating capacity.",
      fullDescription:
        "True digital transformation isn't about chasing buzzwords—it is about systematically eliminating manual operational bottlenecks so your business can do more with its existing resources. Redifff designs reliable automations that connect databases, triggers, documents, and notifications into seamless operational workflows.",
      iconName: "Zap",
      challengesSolved: [
        "Bottlenecks where operational steps stall waiting for manual email approvals",
        "Costly human transcription errors in invoice processing, contract generation, and customer onboarding",
        "Difficulty scaling operations without continually hiring additional administrative staff",
        "Slow turnaround times on client requests caused by fragmented internal handoffs",
        "Lack of real-time operational visibility for managers and business owners",
      ],
      whatsIncluded: [
        "Operational process audit to identify high-friction, repetitive manual tasks",
        "Design of custom automated pipelines (Power Automate, Zapier, Make, custom scripts/APIs)",
        "Document generation automation: automated contracts, invoices, and compliance reports",
        "Customer onboarding workflows: automated welcome sequences, document collection, and provisioning",
        "Internal approval routing via Microsoft Teams, Slack, or automated email triggers",
        "Real-time operational dashboards and alert systems for process monitoring and exception handling",
      ],
      businessBenefits: [
        {
          title: "Exponential Operational Throughput",
          description: "Process 5x the volume of client transactions and onboarding without linear headcount growth.",
        },
        {
          title: "Near-Zero Error Rates",
          description: "Eliminate manual data transfer errors, missed customer emails, and lost contract attachments.",
        },
        {
          title: "Faster Customer Service Delivery",
          description: "Deliver instant confirmations, immediate automated proposals, and rapid client fulfillment.",
        },
      ],
      idealFor: [
        "Fast-moving operations teams burdened by manual paperwork and multi-tab copy-pasting",
        "Professional service firms wanting automated client intake, conflict checks, and file generation",
        "Companies preparing to scale revenue rapidly without proportionally increasing overhead",
      ],
    },
  ] as ServiceItem[],
  industries: [
    {
      id: "small-medium-business",
      slug: "small-medium-businesses",
      name: "Small & Medium-Sized Businesses",
      summary:
        "Comprehensive technology stewardship for established companies seeking stability, predictable IT budgeting, and enterprise-grade support without the cost of an internal IT department.",
      keyChallenges: [
        "Balancing limited internal IT resources with increasing operational demands",
        "Unpredictable technology expenses resulting from reactive emergency repairs",
        "Securing company data against rising automated cyber threats targeting smaller firms",
        "Fragmented tools and inconsistent computer setups slowing staff onboarding",
      ],
      redifffSolutions: [
        "Fully managed IT support with transparent monthly operational fees",
        "Proactive system maintenance and automated security patching",
        "Cloud workplace standardization (Microsoft 365 or Google Workspace)",
        "Dedicated virtual IT manager providing regular roadmap updates and budgeting advice",
      ],
      relevantServices: ["Managed IT Services", "IT Support and Helpdesk", "Cybersecurity Solutions"],
    },
    {
      id: "startups-scaleups",
      slug: "startups-growing-companies",
      name: "Startups & Growing Companies",
      summary:
        "Agile, secure technology foundations engineered to scale rapidly from founding teams to multi-market operations without accumulating crippling tech debt.",
      keyChallenges: [
        "Scaling team size rapidly without unified device management and security policies",
        "Passing strict enterprise vendor security questionnaires from prospective customers",
        "Juggling dozens of disparate SaaS subscriptions with no central access governance",
        "Need for immediate technical flexibility without long-term hardware lock-in",
      ],
      redifffSolutions: [
        "Zero-touch laptop provisioning and centralized identity management (SSO / MDM)",
        "Cloud-native security configurations that satisfy customer security audits",
        "SaaS fleet auditing and spend optimization",
        "Scalable network and remote access architecture supporting hybrid global teams",
      ],
      relevantServices: ["Cloud Solutions and Management", "Cybersecurity Solutions", "IT Strategy & Consulting"],
    },
    {
      id: "professional-services",
      slug: "professional-services",
      name: "Professional & Financial Services",
      summary:
        "Rigorous data confidentiality, zero-downtime infrastructure, and compliant communication systems for law firms, accountancies, consultancies, and financial practices.",
      keyChallenges: [
        "Strict regulatory requirements for client confidentiality and financial data custody",
        "Zero tolerance for email downtime, video conference glitches, or lost billing records",
        "Risk of targeted spear-phishing and wire-fraud attempts aimed at staff",
        "Complex document management and version control across remote teams",
      ],
      redifffSolutions: [
        "Advanced email security with anti-impersonation and cryptographic verification",
        "Encrypted document storage architectures with strict role-based access permissions",
        "Dual-WAN network redundancy ensuring continuous partner-level communication",
        "Secure remote work portals with enforced multi-factor authentication",
      ],
      relevantServices: ["Cybersecurity Solutions", "IT Infrastructure & Network Management", "Managed IT Services"],
    },
    {
      id: "healthcare-clinical",
      slug: "healthcare-clinical-practices",
      name: "Healthcare & Clinical Practices",
      summary:
        "High-reliability technology systems designed to safeguard sensitive patient records, ensure medical hardware connectivity, and maintain uninterrupted practice operations.",
      keyChallenges: [
        "Strict compliance standards regarding electronic health records and privacy",
        "Integration requirements between practice management software and clinical imaging/devices",
        "Need for absolute reliability during active clinical consultations and patient appointments",
        "Non-technical medical staff requiring patient, responsive technical support",
      ],
      redifffSolutions: [
        "Secure local and cloud data architectures with immutable backup snapshots",
        "Isolated patient Wi-Fi networks separated from clinical management workstations",
        "Priority helpdesk support tailored for medical reception and practice managers",
        "Hardware redundancy planning to eliminate downtime in consultation rooms",
      ],
      relevantServices: ["IT Infrastructure & Network Management", "Cybersecurity Solutions", "IT Support and Helpdesk"],
    },
    {
      id: "retail-ecommerce",
      slug: "retail-and-ecommerce",
      name: "Retail & E-commerce Operations",
      summary:
        "Continuous point-of-sale connectivity, secure payment handling, and synchronized inventory data flows for multi-channel merchants and retail operations.",
      keyChallenges: [
        "Point-of-Sale (POS) and credit card payment interruptions during peak shopping hours",
        "Disconnected inventory data between brick-and-mortar storefronts and online stores",
        "PCI-DSS compliance requirements for handling cardholder data",
        "Rapid seasonal staffing requiring fast, secure system credentialing and revocation",
      ],
      redifffSolutions: [
        "Automatic cellular/dual-broadband internet failover for uninterrupted POS operations",
        "PCI-compliant network segmentation separating payment terminals from general traffic",
        "Integration pipelines synchronizing inventory between e-commerce and retail systems",
        "Rapid device deployment kits for seasonal pop-up locations and new store openings",
      ],
      relevantServices: ["IT Infrastructure & Network Management", "Software Implementation & Integration", "Managed IT Services"],
    },
    {
      id: "manufacturing-logistics",
      slug: "manufacturing-and-logistics",
      name: "Manufacturing & Logistics",
      summary:
        "Hardened shop-floor network infrastructure, warehouse connectivity, and automated operational data pipelines for industrial and distribution businesses.",
      keyChallenges: [
        "Harsh industrial environments requiring durable Wi-Fi coverage across large warehouses",
        "Connecting legacy machinery and barcode scanners to modern ERP databases",
        "Costly supply-chain delays caused by dispatch computer or printer failures",
        "Maintaining security across both Information Technology (IT) and Operational Technology (OT)",
      ],
      redifffSolutions: [
        "High-density industrial Wi-Fi deployment for reliable barcode scanner roaming",
        "Ruggedized network switchgear and environmental monitoring for server closets",
        "Automated shipping document pipelines and ERP integration bridges",
        "Segmented industrial networks shielding shop-floor controllers from internet vulnerabilities",
      ],
      relevantServices: ["IT Infrastructure & Network Management", "Business Automation", "IT Strategy & Consulting"],
    },
    {
      id: "education-training",
      slug: "education-and-training",
      name: "Education & Training Providers",
      summary:
        "Scalable, content-filtered, and secure digital learning environments for schools, academies, corporate training institutes, and vocational centers.",
      keyChallenges: [
        "Managing large fleets of shared student laptops, tablets, and lab workstations",
        "Enforcing safe internet filtering and safeguarding compliance across campus networks",
        "High-density Wi-Fi demands when hundreds of students connect simultaneously",
        "Strict budget boundaries requiring maximum longevity from hardware investments",
      ],
      redifffSolutions: [
        "Centralized fleet management (Google Workspace for Education, Microsoft Intune)",
        "Next-generation web content filtering and campus-wide bandwidth management",
        "High-capacity wireless infrastructure supporting simultaneous lecture streaming",
        "Preventive hardware maintenance schedules extending device operational lifecycles",
      ],
      relevantServices: ["Managed IT Services", "Cloud Solutions and Management", "IT Infrastructure & Network Management"],
    },
  ] as IndustryItem[],
  approach: [
    {
      step: "01",
      title: "Discover & Understand",
      subtitle: "Gaining clear sight of your business objectives",
      description:
        "We begin by listening. Before touching any hardware or recommending software, we understand how your business operates, how your people work, where operational friction exists, and where you plan to grow.",
    },
    {
      step: "02",
      title: "Assess & Audit",
      subtitle: "Uncompromising technical evaluation",
      description:
        "We inspect your existing workstations, network topology, cloud configurations, security controls, and vendor agreements. We uncover hidden risks, single points of failure, and licensing waste.",
    },
    {
      step: "03",
      title: "Architect & Recommend",
      subtitle: "Clear, phased, business-first solutions",
      description:
        "We deliver an actionable, transparent roadmap. No unnecessary gadgets or confusing jargon—just practical recommendations prioritizing immediate stability, enhanced security, and predictable costs.",
    },
    {
      step: "04",
      title: "Implement & Optimize",
      subtitle: "Disciplined execution with zero disruption",
      description:
        "We execute upgrades, migrations, and deployments methodically. Critical transitions are scheduled out of hours to protect your team's workflow, accompanied by hands-on testing and clear documentation.",
    },
    {
      step: "05",
      title: "Maintain & Partner",
      subtitle: "Continuous stewardship and strategic alignment",
      description:
        "Technology isn't a one-off project. We provide proactive monitoring, responsive daily helpdesk assistance, regular security reviews, and strategic leadership to keep your systems moving forward.",
    },
  ],
  whyRedifff: [
    {
      title: "Business-First Thinking",
      description:
        "We view technology as an operational enabler, not an end in itself. Every recommendation is evaluated against its tangible commercial value, risk reduction, and operational impact.",
      icon: "TrendingUp",
    },
    {
      title: "Proactive Management",
      description:
        "We resolve potential system failures before they impact your team. Automated patch management, backup verification, and continuous monitoring keep disruptions at bay.",
      icon: "ShieldAlert",
    },
    {
      title: "Plain, Honest Communication",
      description:
        "We speak the language of business, not technical acronyms. You receive clear explanations, transparent options, and honest counsel on what you genuinely need—and what you can skip.",
      icon: "MessageSquare",
    },
    {
      title: "Scalable Architecture",
      description:
        "We design technology foundations that grow with you. Onboard twenty new team members or open a new office without replacing your core infrastructure.",
      icon: "Layers",
    },
    {
      title: "Independent & Vendor-Neutral",
      description:
        "We do not push proprietary hardware lock-ins or kickback software. Our recommendations are driven solely by what delivers the highest dependability and security for your business.",
      icon: "CheckCircle2",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We measure our success by the multi-year stability and growth of our clients. We function as your dedicated technology team, fully invested in your operational success.",
      icon: "Users",
    },
  ],
};
