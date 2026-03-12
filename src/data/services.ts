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
    title: "AI & Data Innovation",
    slug: "ai-data-innovation",
    description: "Harness the power of artificial intelligence and data science to transform your business operations, unlock insights, and drive intelligent automation at scale.",
    icon: "Brain",
    color: "#E8713A",
    subServices: [
      { title: "AI Agents", description: "Deploy intelligent agents to automate complex workflows, make real-time decisions, and enhance operational efficiency across your organization.", slug: "ai-agents" },
      { title: "GenAI Consulting & Workshops", description: "Build actionable AI roadmaps with expert strategy sessions, ROI analysis, and hands-on workshops tailored to your industry.", slug: "genai-consulting" },
      { title: "Intelligent Automation", description: "Streamline operations with AI-driven process automation that reduces manual effort, minimizes errors, and accelerates throughput.", slug: "intelligent-automation" },
      { title: "AI PoC & MVP Development", description: "Validate your AI ideas rapidly with proof-of-concept builds and minimum viable products that demonstrate tangible business value.", slug: "ai-poc-mvp" },
      { title: "Machine Learning Solutions", description: "Custom ML models for prediction, classification, and recommendation systems built on your unique data and business requirements.", slug: "machine-learning" },
      { title: "MLOps & AI Infrastructure", description: "Operationalize AI models with production-grade infrastructure, monitoring, and continuous improvement pipelines.", slug: "mlops-infrastructure" },
      { title: "Data Science & Predictive Analytics", description: "Advanced analytics that transform raw data into actionable business intelligence, forecasts, and strategic insights.", slug: "data-science" },
      { title: "Data Engineering & Integration", description: "Build scalable data pipelines and integrate disparate systems into a unified, analytics-ready data ecosystem.", slug: "data-engineering" },
      { title: "Data Governance & Business Intelligence", description: "Establish robust data governance frameworks and deliver intuitive BI dashboards that drive data-driven decisions.", slug: "data-governance" },
    ],
  },
  {
    title: "Digital Product Engineering",
    slug: "digital-product-engineering",
    description: "Design and build world-class digital products that delight users, scale effortlessly, and drive measurable business outcomes.",
    icon: "Code2",
    color: "#3B82F6",
    subServices: [
      { title: "UX/UI Design", description: "Create intuitive, beautiful user experiences that reduce friction, increase engagement, and convert users into loyal customers.", slug: "ux-ui-design" },
      { title: "POC Development", description: "Validate technical feasibility and market fit with rapid proof-of-concept development that de-risks your investment.", slug: "poc-development" },
      { title: "Product Development", description: "End-to-end web, mobile, and enterprise product development from ideation through launch and continuous iteration.", slug: "product-development" },
      { title: "Application Development", description: "Build scalable, cloud-native applications with modern architectures, AI-powered features, and seamless integrations.", slug: "application-development" },
      { title: "Application Modernization", description: "Transform legacy applications into modern, cloud-native systems that are secure, scalable, and future-proof.", slug: "application-modernization" },
      { title: "AI Software Development", description: "Build intelligent software products with embedded AI/ML capabilities, from natural language processing to computer vision.", slug: "ai-software-development" },
      { title: "Quality Assurance & Continuous Delivery", description: "Deliver reliable software faster with automated testing, CI/CD pipelines, and rigorous quality engineering practices.", slug: "qa-continuous-delivery" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    description: "Architect, migrate, and manage cloud infrastructure that is secure, scalable, cost-optimized, and built for the demands of modern enterprise.",
    icon: "Cloud",
    color: "#10B981",
    subServices: [
      { title: "Cloud Strategy & Architecture", description: "Design cloud architectures aligned with your business objectives, compliance requirements, and growth trajectory.", slug: "cloud-strategy" },
      { title: "Cloud Migration", description: "Migrate workloads seamlessly to the cloud with minimal disruption, comprehensive testing, and zero data loss.", slug: "cloud-migration" },
      { title: "Infrastructure Modernization", description: "Modernize legacy infrastructure with containerization, microservices, and infrastructure-as-code for agility and resilience.", slug: "infrastructure-modernization" },
      { title: "Cloud Engineering", description: "Build secure, automated, cloud-native systems using best practices in DevOps, IaC, and platform engineering.", slug: "cloud-engineering" },
      { title: "CloudOps & DevOps", description: "Automate delivery pipelines and strengthen cloud operations with monitoring, incident response, and continuous optimization.", slug: "cloudops-devops" },
      { title: "Managed Cloud Services", description: "24/7 cloud monitoring, optimization, and managed services that keep your infrastructure healthy and performant.", slug: "managed-cloud" },
      { title: "Cloud Cost Optimization", description: "Reduce cloud spend with rightsizing, reserved instances, FinOps practices, and intelligent resource management.", slug: "cloud-cost-optimization" },
      { title: "Multi-Cloud Security & Compliance", description: "Unified security posture across multi-cloud environments with threat detection, compliance automation, and governance.", slug: "multi-cloud-security" },
    ],
  },
  {
    title: "Web3 & Blockchain",
    slug: "web3-blockchain",
    description: "Pioneer the decentralized future with cutting-edge blockchain solutions, smart contracts, DeFi platforms, and Web3 applications.",
    icon: "Blocks",
    color: "#8B5CF6",
    subServices: [
      { title: "Blockchain Consulting & Strategy", description: "Define your Web3 roadmap with expert guidance on blockchain adoption, tokenomics design, and decentralized architecture.", slug: "blockchain-consulting" },
      { title: "Smart Contract Development", description: "Design, develop, and audit secure smart contracts on Ethereum, Solana, Polygon, and other leading protocols.", slug: "smart-contracts" },
      { title: "DeFi Platform Development", description: "Build decentralized finance platforms including DEXs, lending protocols, yield aggregators, and liquidity solutions.", slug: "defi-development" },
      { title: "NFT & Digital Asset Solutions", description: "Create NFT marketplaces, tokenization platforms, and digital asset management systems for enterprises and creators.", slug: "nft-solutions" },
      { title: "dApp Development", description: "Build decentralized applications with seamless UX, cross-chain compatibility, and robust smart contract backends.", slug: "dapp-development" },
      { title: "Tokenization & Asset Management", description: "Digitize real-world assets through tokenization, enabling fractional ownership, improved liquidity, and transparent trading.", slug: "tokenization" },
      { title: "Blockchain Integration & APIs", description: "Integrate blockchain capabilities into existing systems with enterprise-grade APIs, oracles, and middleware solutions.", slug: "blockchain-integration" },
      { title: "Web3 Security & Auditing", description: "Comprehensive security audits, penetration testing, and ongoing monitoring for smart contracts and blockchain applications.", slug: "web3-security" },
    ],
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Protect your digital assets, ensure compliance, and build resilient security postures with our comprehensive cybersecurity services.",
    icon: "Shield",
    color: "#EF4444",
    subServices: [
      { title: "Cybersecurity Consulting & Risk Assessment", description: "Comprehensive security assessments that identify vulnerabilities, quantify risks, and deliver actionable remediation roadmaps.", slug: "security-consulting" },
      { title: "Governance, Risk & Compliance", description: "Achieve and maintain compliance with ISO 27001, SOC 2, GDPR, HIPAA, and other regulatory frameworks.", slug: "grc" },
      { title: "Application Security & Penetration Testing", description: "Identify and remediate vulnerabilities in your applications through rigorous security testing and code review.", slug: "appsec-pentesting" },
      { title: "Data Security & Encryption", description: "Protect sensitive data with enterprise-grade encryption, access controls, DLP, and data classification strategies.", slug: "data-security" },
      { title: "Cloud Security", description: "Secure your cloud environments with CSPM, CWPP, and zero-trust architectures across AWS, Azure, and GCP.", slug: "cloud-security" },
      { title: "Defensive Security", description: "Build robust defensive capabilities with SIEM, SOAR, threat intelligence, and 24/7 security operations.", slug: "defensive-security" },
      { title: "Red Teaming", description: "Expose weaknesses through realistic attack simulations that test your people, processes, and technology defenses.", slug: "red-teaming" },
      { title: "DevSecOps", description: "Embed security into every stage of your development lifecycle with automated scanning, policy enforcement, and secure CI/CD.", slug: "devsecops" },
    ],
  },
  {
    title: "Advisory & Strategy",
    slug: "advisory-strategy",
    description: "Navigate digital transformation with confidence through expert advisory, strategic workshops, and technology roadmapping.",
    icon: "Compass",
    color: "#F59E0B",
    subServices: [
      { title: "Discovery Workshops", description: "Align stakeholders, validate assumptions, and define project scope through structured collaborative workshops.", slug: "discovery-workshops" },
      { title: "Technical Feasibility Study", description: "Evaluate architecture options, scalability limits, and technology risks before committing resources to development.", slug: "technical-feasibility" },
      { title: "Product Strategy", description: "Create shared product visions with user research, competitive analysis, and prioritized roadmaps that drive growth.", slug: "product-strategy" },
      { title: "UI/UX Design Workshops", description: "Apply design thinking methodologies to refine requirements, prototype solutions, and validate user experience decisions.", slug: "ux-workshops" },
      { title: "Digital Transformation Consulting", description: "Modernize workflows, optimize processes, and prepare your organization for AI-ready growth and innovation.", slug: "digital-transformation" },
      { title: "Innovation & Emerging Tech Advisory", description: "Evaluate emerging technologies—AI, blockchain, IoT, AR/VR—and identify opportunities for competitive advantage.", slug: "innovation-advisory" },
    ],
  },
  {
    title: "Optimization & Quality",
    slug: "optimization-quality",
    description: "Maximize performance, minimize waste, and ensure software excellence through audits, optimization, and rigorous quality engineering.",
    icon: "Gauge",
    color: "#06B6D4",
    subServices: [
      { title: "Software Audit", description: "Comprehensive code and architecture audits that uncover bottlenecks, technical debt, and security vulnerabilities.", slug: "software-audit" },
      { title: "UX Audit", description: "Identify usability gaps, friction points, and conversion killers with data-driven UX audits and recommendations.", slug: "ux-audit" },
      { title: "Process Optimization", description: "Optimize development workflows, reduce cycle times, and improve team velocity through lean process engineering.", slug: "process-optimization" },
      { title: "Performance Optimization", description: "Diagnose and resolve performance issues—slow queries, memory leaks, rendering bottlenecks—for lightning-fast applications.", slug: "performance-optimization" },
      { title: "FinOps", description: "Gain visibility into cloud costs, implement rightsizing strategies, and build a culture of financial accountability.", slug: "finops" },
      { title: "Quality Assurance & Testing", description: "End-to-end QA with automated testing, load testing, accessibility testing, and continuous quality monitoring.", slug: "qa-testing" },
      { title: "Support & Maintenance", description: "Ongoing application support, bug fixes, security patches, and proactive monitoring to keep your systems running smoothly.", slug: "support-maintenance" },
    ],
  },
  {
    title: "Solution Implementation",
    slug: "solution-implementation",
    description: "Deploy and customize enterprise platforms—Salesforce, Microsoft Dynamics, AWS, MuleSoft—with deep implementation expertise.",
    icon: "Puzzle",
    color: "#EC4899",
    subServices: [
      { title: "Salesforce Implementation & Integration", description: "Implement, customize, and integrate Salesforce solutions that streamline sales, service, and marketing operations.", slug: "salesforce" },
      { title: "Microsoft Dynamics 365", description: "Tailor Dynamics 365 with custom workflows, integrations, and analytics that align with your business processes.", slug: "dynamics-365" },
      { title: "MuleSoft & ServiceNow Integrations", description: "Connect enterprise systems with MuleSoft APIs and ServiceNow workflows for seamless data flow and automation.", slug: "mulesoft-servicenow" },
      { title: "AWS Cloud Solutions", description: "Design, migrate, and optimize AWS environments with certified architects and proven deployment methodologies.", slug: "aws-solutions" },
    ],
  },
  {
    title: "Business Enablement",
    slug: "business-enablement",
    description: "Accelerate growth with outsourced operations, digital marketing, and process automation that let you focus on what matters most.",
    icon: "Rocket",
    color: "#14B8A6",
    subServices: [
      { title: "Accounts & Finance Outsourcing", description: "Streamline financial operations with expert bookkeeping, reporting, compliance, and strategic financial advisory.", slug: "finance-outsourcing" },
      { title: "HR & Recruitment Process Outsourcing", description: "Accelerate hiring, improve retention, and build high-performing teams with end-to-end HR process management.", slug: "hr-outsourcing" },
      { title: "Digital Marketing & Branding", description: "Strengthen your market presence with data-driven marketing strategies, content creation, and brand development.", slug: "digital-marketing" },
      { title: "Back-Office Process Automation", description: "Automate repetitive back-office tasks to reduce costs, improve accuracy, and free your team for strategic work.", slug: "back-office-automation" },
    ],
  },
];

export const engagementModels = [
  {
    title: "Dedicated Team",
    description: "Scale your capabilities with dedicated, fully-managed teams that integrate seamlessly with your organization and culture.",
    icon: "Users",
  },
  {
    title: "Offshore Development Center",
    description: "Establish your own offshore development hub with dedicated workspace, infrastructure, and hand-picked engineering talent.",
    icon: "Building2",
  },
  {
    title: "Fixed Price Projects",
    description: "Deliver well-defined projects with fixed scope, timeline, and budget—ideal for projects with clear requirements.",
    icon: "FileCheck",
  },
  {
    title: "Hybrid Delivery Model",
    description: "Combine onshore leadership with offshore execution for optimal cost efficiency, communication, and delivery speed.",
    icon: "GitMerge",
  },
];
