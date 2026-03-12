export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: boolean;
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
    children: [
      {
        label: "AI & Data Innovation",
        href: "/services/ai-data-innovation",
        description: "AI agents, ML, data science & analytics",
        icon: "Brain",
      },
      {
        label: "Digital Product Engineering",
        href: "/services/digital-product-engineering",
        description: "UX/UI, product dev & modernization",
        icon: "Code2",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services/cloud-infrastructure",
        description: "Cloud strategy, migration & DevOps",
        icon: "Cloud",
      },
      {
        label: "Web3 & Blockchain",
        href: "/services/web3-blockchain",
        description: "Smart contracts, DeFi & dApps",
        icon: "Blocks",
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Security consulting, GRC & red teaming",
        icon: "Shield",
      },
      {
        label: "Advisory & Strategy",
        href: "/services/advisory-strategy",
        description: "Workshops, feasibility & transformation",
        icon: "Compass",
      },
      {
        label: "Optimization & Quality",
        href: "/services/optimization-quality",
        description: "Audits, QA & performance optimization",
        icon: "Gauge",
      },
      {
        label: "Solution Implementation",
        href: "/services/solution-implementation",
        description: "Salesforce, Dynamics 365 & AWS",
        icon: "Puzzle",
      },
      {
        label: "Business Enablement",
        href: "/services/business-enablement",
        description: "Outsourcing, marketing & automation",
        icon: "Rocket",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { label: "Financial Services & Fintech", href: "/industries/fintech" },
      { label: "Retail & E-Commerce", href: "/industries/retail" },
      { label: "Education & EdTech", href: "/industries/education" },
      { label: "Real Estate & PropTech", href: "/industries/real-estate" },
      { label: "Logistics & Supply Chain", href: "/industries/logistics" },
      { label: "Energy & Utilities", href: "/industries/energy" },
      { label: "Media & Entertainment", href: "/industries/media" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Life at TPWITS", href: "/about#culture" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Whitepapers", href: "/resources#whitepapers" },
      { label: "Webinars", href: "/resources#webinars" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
