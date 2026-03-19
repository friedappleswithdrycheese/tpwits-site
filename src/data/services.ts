export interface SubService {
  title: string;
  description: string;
  slug: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
  {
    title: "Research & Strategy",
    slug: "research-strategy",
    description:
      "We study your market, your competitors, and the solutions currently available. We find the gaps. Then we tell you exactly what to build and why.",
    icon: "Compass",
    color: "#E8713A",
    subServices: [
      {
        title: "Industry & Gap Analysis",
        description:
          "We study your market, competitors, and the solutions currently available. We find the gaps everyone else missed.",
        slug: "industry-gap-analysis",
      },
      {
        title: "Technical Feasibility & Architecture",
        description:
          "Before you spend six figures on development, we'll tell you if it's possible, how long it'll take, and what can go wrong.",
        slug: "technical-feasibility",
      },
      {
        title: "Product Strategy & Roadmapping",
        description:
          "A prioritized plan based on research, not assumptions. What to build first, what to defer, what to kill.",
        slug: "product-strategy",
      },
      {
        title: "Discovery Workshops",
        description:
          "A structured engagement to align stakeholders, validate assumptions, and define scope before a single line of code is written.",
        slug: "discovery-workshops",
      },
    ],
  },
  {
    title: "AI & Data",
    slug: "ai-data",
    description:
      "We build AI systems that do real work — not chatbots that answer FAQs. Predictive models, automation pipelines, decision engines. Trained on your data, integrated into your workflows, monitored in production.",
    icon: "Brain",
    color: "#3B82F6",
    subServices: [
      {
        title: "AI System Development",
        description:
          "AI agents, GenAI integration, ML models, AI-powered products. Built for production, not notebooks.",
        slug: "ai-system-development",
      },
      {
        title: "Data Engineering & Analytics",
        description:
          "Clean data in, useful insights out. Pipelines, integration, BI dashboards, predictive analytics.",
        slug: "data-engineering-analytics",
      },
      {
        title: "AI Strategy & Proof of Concept",
        description:
          "Not sure if AI applies to your problem? We'll tell you honestly — and prove it with a working prototype.",
        slug: "ai-strategy-poc",
      },
      {
        title: "MLOps & Production AI",
        description:
          "Getting a model to work in a notebook is the easy part. We get it working in production, reliably.",
        slug: "mlops-production-ai",
      },
    ],
  },
  {
    title: "Product Engineering",
    slug: "product-engineering",
    description:
      "We design and build digital products. Research-driven UX, clean architecture, production-ready code. From concept to launch to ongoing support.",
    icon: "Code2",
    color: "#10B981",
    subServices: [
      {
        title: "Product Design & Development",
        description:
          "UX/UI design, web and mobile development, enterprise applications. From concept to launch.",
        slug: "product-design-development",
      },
      {
        title: "Application Modernization",
        description:
          "Legacy system slowing you down? We migrate, re-architect, or rebuild — whichever actually solves the problem.",
        slug: "application-modernization",
      },
      {
        title: "Quality Engineering & DevOps",
        description:
          "Automated testing, CI/CD, DevSecOps. Because shipping fast means nothing if it breaks.",
        slug: "quality-engineering-devops",
      },
      {
        title: "Ongoing Support & Optimization",
        description:
          "We keep your systems healthy after launch. Performance monitoring, security patches, honest assessments of technical debt.",
        slug: "ongoing-support-optimization",
      },
      {
        title: "White-Label Solutions",
        description:
          "Production-ready platforms you can brand as your own. Healthcare, e-commerce, marketplace — built once, deployed many times.",
        slug: "white-label-solutions",
      },
    ],
  },
  {
    title: "Cloud & Security",
    slug: "cloud-security",
    description:
      "We design cloud infrastructure and secure it. AWS, Azure, GCP — chosen based on your actual needs, not our partnership status.",
    icon: "Shield",
    color: "#8B5CF6",
    subServices: [
      {
        title: "Cloud Architecture & Migration",
        description:
          "Infrastructure design and workload migration. Multi-cloud strategy based on your actual needs.",
        slug: "cloud-architecture-migration",
      },
      {
        title: "Platform Engineering & DevOps",
        description:
          "Infrastructure as code, container orchestration, CI/CD pipelines. The platform your developers ship on.",
        slug: "platform-engineering-devops",
      },
      {
        title: "Security Assessment & Compliance",
        description:
          "Penetration testing, vulnerability assessments, compliance readiness for SOC 2, ISO 27001, HIPAA.",
        slug: "security-assessment-compliance",
      },
      {
        title: "Managed Cloud Operations",
        description:
          "Monitoring, incident response, cost optimization. Your cloud, managed by engineers who know it.",
        slug: "managed-cloud-operations",
      },
    ],
  },
  {
    title: "Blockchain & Enterprise Solutions",
    slug: "blockchain-enterprise",
    description:
      "Smart contract development, dApp architecture, and enterprise platform implementation. For companies with a real use case, not a hype cycle.",
    icon: "Blocks",
    color: "#EF4444",
    subServices: [
      {
        title: "Blockchain Development",
        description:
          "Smart contracts, dApps, DeFi protocols, NFT platforms. Ethereum, Hyperledger, multi-chain.",
        slug: "blockchain-development",
      },
      {
        title: "Web3 Consulting & Tokenization",
        description:
          "Blockchain strategy, token economics, regulatory compliance. We'll tell you if blockchain is actually the right solution.",
        slug: "web3-consulting-tokenization",
      },
      {
        title: "Platform Implementation",
        description:
          "Salesforce, Dynamics 365, AWS — implemented by engineers with real project history.",
        slug: "platform-implementation",
      },
      {
        title: "Operations & Process Automation",
        description:
          "Back-office automation, workflow optimization. We handle operational workstreams so your core team can focus on the product.",
        slug: "operations-process-automation",
      },
    ],
  },
];

export const engagementModels = [
  {
    title: "Dedicated Team",
    description:
      "A full engineering team — developers, QA, tech lead — embedded in your workflow. They attend your standups, know your codebase, and stay on the project. Not contractors. Your team, managed by us.",
    icon: "Users",
  },
  {
    title: "Offshore Development Center",
    description:
      "A captive development center dedicated to your product roadmap. Your processes, your tools, managed by our operations team.",
    icon: "Building2",
  },
  {
    title: "Fixed-Price Project",
    description:
      "Defined scope, fixed budget, predictable delivery. Best for well-specified projects where the requirements are clear.",
    icon: "FileCheck",
  },
];
