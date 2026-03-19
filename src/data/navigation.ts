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
        label: "Research & Strategy",
        href: "/services/research-strategy",
        description: "Market analysis, feasibility & product roadmapping",
        icon: "Compass",
      },
      {
        label: "AI & Data",
        href: "/services/ai-data",
        description: "AI systems, ML models, data engineering & analytics",
        icon: "Brain",
      },
      {
        label: "Product Engineering",
        href: "/services/product-engineering",
        description: "Design, development, modernization & support",
        icon: "Code2",
      },
      {
        label: "Cloud & Security",
        href: "/services/cloud-security",
        description: "Cloud infrastructure, DevOps & compliance",
        icon: "Shield",
      },
      {
        label: "Blockchain & Enterprise Solutions",
        href: "/services/blockchain-enterprise",
        description: "Smart contracts, dApps & platform implementation",
        icon: "Blocks",
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
    href: "/insights",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Whitepapers", href: "/insights" },
      { label: "Webinars", href: "/insights" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
