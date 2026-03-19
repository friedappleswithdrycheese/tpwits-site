export const companyStats = [
  { value: "17+", label: "Years in Operation" }, // TODO: Verify — replace with real number based on actual founding year
  { value: "800+", label: "Engineers Worldwide" }, // TODO: Verify — replace with real headcount
  { value: "94%", label: "Client Retention" }, // TODO: Verify — replace with real number or remove if unverifiable
  { value: "4", label: "Global Offices" }, // TODO: Verify — replace with real number of offices
];

export const companyInfo = {
  name: "TPWITS",
  fullName: "TPWITS Technologies",
  tagline: "Engineering Tomorrow's Digital Reality",
  description:
    "We are a global technology services company specializing in AI-driven solutions, digital product engineering, cloud infrastructure, Web3 innovation, and cybersecurity. We partner with forward-thinking organizations to build, scale, and secure their digital future.",
  mission:
    "To empower businesses with transformative technology solutions that drive innovation, efficiency, and sustainable growth in an increasingly digital world.",
  vision:
    "To be the most trusted technology partner for enterprises navigating digital transformation—known for engineering excellence, deep domain expertise, and an unwavering commitment to client success.",
  values: [
    {
      title: "Engineering Excellence",
      description: "We hold ourselves to the highest standards of technical craftsmanship, delivering solutions that are robust, scalable, and elegant.",
    },
    {
      title: "Client Partnership",
      description: "We don't just deliver projects—we build lasting partnerships, aligning our success with the success of our clients.",
    },
    {
      title: "Innovation First",
      description: "We continuously explore emerging technologies and methodologies, ensuring our clients stay ahead of the curve.",
    },
    {
      title: "Radical Transparency",
      description: "We believe in open communication, honest assessments, and full visibility into every engagement.",
    },
    {
      title: "People-Centric Culture",
      description: "Our greatest asset is our team. We invest in growth, foster creativity, and celebrate diversity.",
    },
    {
      title: "Impactful Outcomes",
      description: "We measure our work by the real-world impact it creates—revenue growth, efficiency gains, and competitive advantage.",
    },
  ],
  offices: [
    { city: "San Francisco", country: "USA", type: "Headquarters" },
    { city: "Lahore", country: "Pakistan", type: "Engineering Hub" },
    { city: "Dubai", country: "UAE", type: "Regional Office" },
    { city: "London", country: "UK", type: "Regional Office" },
  ],
  partners: [
    "Amazon Web Services",
    "Microsoft Azure",
    "Google Cloud",
    "Salesforce",
    "MuleSoft",
    "ServiceNow",
    "Ethereum Foundation",
    "Polygon",
  ],
};

export interface IndustryData {
  title: string;
  slug: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  results: { metric: string; description: string }[];
  relatedServices: string[];
}

export const industries: IndustryData[] = [
  {
    title: "Healthcare & Life Sciences",
    slug: "healthcare",
    description:
      "HIPAA-compliant digital health platforms, AI-powered diagnostics, telemedicine solutions, and clinical data analytics that improve patient outcomes.",
    icon: "Heart",
    challenges: [
      "Fragmented patient data across disparate EHR systems makes it nearly impossible to deliver coordinated, whole-person care at scale.",
      "Strict regulatory requirements (HIPAA, HITECH, FDA) create complex compliance burdens that slow down technology adoption and innovation cycles.",
      "Clinician burnout and staffing shortages demand intelligent automation to reduce administrative overhead without compromising care quality.",
      "Rising patient expectations for digital-first experiences — telehealth, self-scheduling, real-time results — require platforms that legacy systems cannot support.",
    ],
    solutions: [
      {
        title: "AI-Powered Clinical Decision Support",
        description:
          "Machine learning models trained on de-identified clinical datasets that surface real-time diagnostic recommendations, flag drug interactions, and predict patient deterioration — integrated directly into EHR workflows.",
      },
      {
        title: "Interoperable Health Data Platform",
        description:
          "FHIR-compliant data integration layer that unifies patient records across Epic, Cerner, and other EHR systems, enabling a single longitudinal patient view for care teams and analytics.",
      },
      {
        title: "HIPAA-Compliant Telemedicine Platform",
        description:
          "End-to-end virtual care solution with HD video, secure messaging, e-prescriptions, and remote patient monitoring — built on zero-trust architecture with full audit trails.",
      },
      {
        title: "Intelligent Revenue Cycle Automation",
        description:
          "AI-driven claims processing, coding optimization, and denial management that reduces administrative burden and accelerates reimbursement cycles.",
      },
      {
        title: "Clinical Trial Data Management",
        description:
          "Cloud-native platform for managing clinical trial data collection, patient recruitment, adverse event reporting, and regulatory submissions with built-in compliance controls.",
      },
    ],
    results: [
      {
        metric: "Significantly faster diagnostics",
        description:
          "AI diagnostic engines reduce turnaround time from hours to minutes, enabling earlier interventions and better patient outcomes.",
      },
      {
        metric: "Measurable reduction in admin costs",
        description:
          "Intelligent automation of scheduling, billing, and documentation frees clinical staff to focus on patient care.",
      },
      {
        metric: "Robust HIPAA compliance",
        description:
          "Zero-trust architecture and continuous compliance monitoring ensure patient data protection across all touchpoints.",
      },
    ],
    relatedServices: [
      "ai-data-innovation",
      "cybersecurity",
      "cloud-infrastructure",
    ],
  },
  {
    title: "Financial Services & Fintech",
    slug: "fintech",
    description:
      "Secure banking platforms, payment gateways, algorithmic trading systems, and regulatory compliance solutions for the modern financial ecosystem.",
    icon: "Landmark",
    challenges: [
      "Legacy core banking systems with monolithic architectures cannot keep pace with the speed, personalization, and API-driven integrations that modern customers and fintech competitors demand.",
      "Evolving regulatory landscapes (PSD2, SOX, AML/KYC, Basel III) require continuous compliance adaptation that strains internal teams and slows product releases.",
      "Sophisticated cyber threats — account takeovers, synthetic identity fraud, real-time payment fraud — demand AI-driven detection systems that operate at millisecond latency.",
      "Customer expectations for instant, seamless digital experiences across mobile, web, and embedded finance channels are reshaping the competitive landscape.",
    ],
    solutions: [
      {
        title: "Core Banking Modernization",
        description:
          "Migrate monolithic banking systems to event-driven microservices architectures with API-first design, enabling rapid product launches and seamless third-party integrations.",
      },
      {
        title: "Real-Time Fraud Detection & AML",
        description:
          "Machine learning models analyzing transaction patterns, behavioral biometrics, and network graphs to detect fraudulent activity in real time — reducing false positives by up to 70%.",
      },
      {
        title: "Regulatory Compliance Automation",
        description:
          "Automated KYC/AML screening, regulatory reporting, and compliance monitoring platform that adapts to evolving regulations across jurisdictions.",
      },
      {
        title: "Digital Payment Infrastructure",
        description:
          "High-throughput payment processing systems supporting real-time payments, cross-border transfers, and multi-currency settlement with sub-200ms latency.",
      },
      {
        title: "Embedded Finance & Open Banking APIs",
        description:
          "PSD2-compliant open banking platform with developer-friendly APIs that enable BaaS partnerships, account aggregation, and embedded lending products.",
      },
    ],
    results: [
      {
        metric: "Ultra-low transaction latency",
        description:
          "High-performance payment infrastructure processes thousands of transactions per second with real-time settlement and reconciliation.",
      },
      {
        metric: "Dramatically fewer fraud false positives",
        description:
          "ML-driven fraud detection models dramatically reduce legitimate transaction blocks while catching more actual fraud.",
      },
      {
        metric: "Substantial annual compliance savings",
        description:
          "Automated regulatory reporting and KYC workflows eliminate manual processes and reduce compliance team overhead.",
      },
    ],
    relatedServices: [
      "cybersecurity",
      "ai-data-innovation",
      "digital-product-engineering",
    ],
  },
  {
    title: "Retail & E-Commerce",
    slug: "retail",
    description:
      "Personalized shopping experiences, inventory optimization, omnichannel platforms, and AI-driven demand forecasting for retail leaders.",
    icon: "ShoppingCart",
    challenges: [
      "Siloed customer data across POS, e-commerce, mobile, and loyalty systems prevents the unified view needed to deliver truly personalized omnichannel experiences.",
      "Inventory mismanagement — overstocking slow movers while fast sellers go out of stock — erodes margins and frustrates customers, especially during peak seasons.",
      "Rising customer acquisition costs and declining brand loyalty demand smarter retention strategies powered by real-time behavioral insights.",
      "Supply chain volatility and last-mile delivery expectations require predictive systems that traditional retail ERP platforms cannot provide.",
    ],
    solutions: [
      {
        title: "Unified Commerce Platform",
        description:
          "Headless commerce architecture that unifies online, in-store, and mobile channels into a single platform with shared inventory, pricing, and customer profiles.",
      },
      {
        title: "AI-Driven Demand Forecasting",
        description:
          "Machine learning models that analyze historical sales, weather patterns, social trends, and macroeconomic signals to predict demand with 95%+ accuracy across SKUs and locations.",
      },
      {
        title: "Personalization & Recommendation Engine",
        description:
          "Real-time recommendation system powered by collaborative filtering and contextual AI, delivering personalized product suggestions, dynamic pricing, and targeted promotions.",
      },
      {
        title: "Smart Inventory & Supply Chain Optimization",
        description:
          "Automated inventory replenishment, warehouse allocation optimization, and supplier performance analytics that reduce carrying costs while maintaining optimal stock levels.",
      },
      {
        title: "Customer Data Platform & Loyalty",
        description:
          "Unified CDP that consolidates customer touchpoints into actionable segments, powering personalized marketing automation and next-generation loyalty programs.",
      },
    ],
    results: [
      {
        metric: "Meaningful increase in conversion",
        description:
          "AI-powered personalization and recommendation engines drive higher engagement, larger basket sizes, and improved conversion rates.",
      },
      {
        metric: "Notable reduction in inventory costs",
        description:
          "Demand forecasting and smart replenishment eliminate overstock while significantly reducing out-of-stock incidents.",
      },
      {
        metric: "Significant improvement in customer LTV",
        description:
          "Unified customer data and personalized loyalty programs significantly increase repeat purchase rates and lifetime value.",
      },
    ],
    relatedServices: [
      "ai-data-innovation",
      "digital-product-engineering",
      "cloud-infrastructure",
    ],
  },
  {
    title: "Education & EdTech",
    slug: "education",
    description:
      "Learning management systems, adaptive learning platforms, virtual classrooms, and student analytics that transform education delivery.",
    icon: "GraduationCap",
    challenges: [
      "One-size-fits-all curriculum delivery fails to account for diverse learning paces, styles, and accessibility needs — leaving many students behind.",
      "Institutions struggle to measure learning outcomes beyond test scores, lacking data-driven insights into engagement, comprehension, and at-risk student identification.",
      "Faculty and administrators face overwhelming manual processes for grading, attendance tracking, credential management, and compliance reporting.",
      "The shift to hybrid and fully remote learning requires robust, scalable infrastructure that most institutional IT teams are not equipped to build or maintain.",
    ],
    solutions: [
      {
        title: "Adaptive Learning Platform",
        description:
          "AI-powered learning system that continuously assesses student comprehension and dynamically adjusts content difficulty, pacing, and modality to optimize individual learning outcomes.",
      },
      {
        title: "Intelligent Learning Management System",
        description:
          "Modern, cloud-native LMS with mobile-first design, SCORM/xAPI compliance, automated grading, plagiarism detection, and seamless integration with SIS and ERP systems.",
      },
      {
        title: "Student Analytics & Early Warning System",
        description:
          "Predictive analytics dashboard that identifies at-risk students based on engagement patterns, assignment completion, and behavioral signals — enabling proactive intervention.",
      },
      {
        title: "Virtual Classroom & Collaboration Hub",
        description:
          "Real-time virtual classroom with HD video, breakout rooms, interactive whiteboards, screen sharing, and AI-generated session summaries and transcriptions.",
      },
      {
        title: "Digital Credentialing & Blockchain Verification",
        description:
          "Tamper-proof digital credential issuance and verification platform using blockchain technology, enabling instant employer verification and reducing credential fraud.",
      },
    ],
    results: [
      {
        metric: "Improved completion rates",
        description:
          "Adaptive learning paths and early intervention systems keep students engaged and on track to complete their programs.",
      },
      {
        metric: "Measurable reduction in admin workload",
        description:
          "Automated grading, attendance, and compliance reporting free educators to focus on teaching and mentorship.",
      },
      {
        metric: "High student satisfaction",
        description:
          "Intuitive, accessible, mobile-first learning experiences consistently earn top marks from students across demographics.",
      },
    ],
    relatedServices: [
      "digital-product-engineering",
      "ai-data-innovation",
      "cloud-infrastructure",
    ],
  },
  {
    title: "Real Estate & PropTech",
    slug: "real-estate",
    description:
      "Property management platforms, virtual tour systems, smart building solutions, and real estate analytics for the modern property market.",
    icon: "Building",
    challenges: [
      "Manual, paper-heavy property management processes — lease administration, maintenance requests, tenant communications — drain operational efficiency and increase error rates.",
      "Lack of real-time market data and predictive analytics makes investment decisions reactive rather than strategic, leading to missed opportunities and higher risk exposure.",
      "Tenant expectations for digital-first experiences — self-service portals, smart home features, contactless access — are rising faster than most property managers can deliver.",
      "Building energy consumption and sustainability compliance (ESG reporting, green certifications) require IoT-driven monitoring that legacy building systems cannot provide.",
    ],
    solutions: [
      {
        title: "Intelligent Property Management Platform",
        description:
          "Cloud-based platform automating lease lifecycle management, maintenance workflows, tenant communications, and financial reporting with real-time portfolio dashboards.",
      },
      {
        title: "AI-Powered Real Estate Analytics",
        description:
          "Predictive market analytics combining transaction data, demographic trends, zoning changes, and macroeconomic indicators to generate investment scoring and valuation models.",
      },
      {
        title: "Smart Building IoT Platform",
        description:
          "IoT sensor network with edge computing for real-time monitoring and automated control of HVAC, lighting, occupancy, and energy systems — reducing operating costs and carbon footprint.",
      },
      {
        title: "Immersive Virtual Tour & Staging",
        description:
          "3D virtual tours, augmented reality floor plan visualization, and AI-powered virtual staging that enable remote property viewing and accelerate lease-up timelines.",
      },
      {
        title: "Tenant Experience App",
        description:
          "Mobile-first tenant portal with maintenance requests, package notifications, amenity booking, community messaging, smart access, and integrated digital payments.",
      },
    ],
    results: [
      {
        metric: "Faster lease-up cycles",
        description:
          "Virtual tours and digital marketing automation dramatically shorten vacancy periods and accelerate tenant acquisition.",
      },
      {
        metric: "Measurable reduction in operating costs",
        description:
          "IoT-driven building automation and predictive maintenance reduce energy waste, equipment failures, and manual overhead.",
      },
      {
        metric: "Strong tenant retention",
        description:
          "Digital-first tenant experience and responsive property management drive satisfaction and long-term lease renewals.",
      },
    ],
    relatedServices: [
      "digital-product-engineering",
      "cloud-infrastructure",
      "ai-data-innovation",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    slug: "logistics",
    description:
      "Route optimization, warehouse automation, supply chain visibility platforms, and predictive logistics powered by AI and IoT.",
    icon: "Truck",
    challenges: [
      "Limited end-to-end supply chain visibility across suppliers, carriers, and distribution centers makes it impossible to proactively identify disruptions before they impact delivery commitments.",
      "Manual warehouse operations — picking, packing, inventory counts — create bottlenecks that limit throughput and increase labor costs as order volumes scale.",
      "Last-mile delivery costs continue to rise while customers demand faster, more flexible delivery options with real-time tracking and narrow delivery windows.",
      "Fragmented transportation management across multiple carriers, modes, and regions leads to suboptimal routing, empty backhauls, and inflated freight spend.",
    ],
    solutions: [
      {
        title: "End-to-End Supply Chain Visibility Platform",
        description:
          "Real-time tracking and event monitoring across the entire supply chain — from raw material sourcing through final delivery — with predictive disruption alerts and automated exception handling.",
      },
      {
        title: "AI-Optimized Route & Fleet Management",
        description:
          "Machine learning algorithms that optimize delivery routes in real time, accounting for traffic, weather, vehicle capacity, driver hours, and customer time windows to minimize cost and maximize on-time delivery.",
      },
      {
        title: "Smart Warehouse Automation",
        description:
          "IoT-connected warehouse management with automated pick-path optimization, robotic picking assistance, real-time inventory tracking, and demand-driven replenishment.",
      },
      {
        title: "Predictive Demand & Inventory Planning",
        description:
          "AI-powered demand sensing that combines POS data, market signals, and seasonal patterns to optimize safety stock levels and reduce both stockouts and excess inventory.",
      },
      {
        title: "Digital Freight & Carrier Management",
        description:
          "Unified platform for carrier procurement, rate management, load optimization, and performance analytics across all transportation modes and geographies.",
      },
    ],
    results: [
      {
        metric: "Significant reduction in freight costs",
        description:
          "AI-optimized routing, load consolidation, and carrier management significantly reduce per-shipment transportation spend.",
      },
      {
        metric: "Consistently high on-time delivery",
        description:
          "Predictive logistics and real-time route optimization ensure consistent delivery performance even during peak periods.",
      },
      {
        metric: "Major improvement in warehouse throughput",
        description:
          "Smart automation and optimized pick paths dramatically increase order processing capacity without proportional labor increases.",
      },
    ],
    relatedServices: [
      "ai-data-innovation",
      "cloud-infrastructure",
      "optimization-quality",
    ],
  },
  {
    title: "Energy & Utilities",
    slug: "energy",
    description:
      "Smart grid management, renewable energy monitoring, predictive maintenance, and utility billing systems for sustainable energy providers.",
    icon: "Zap",
    challenges: [
      "Aging grid infrastructure was never designed for bidirectional power flow from distributed renewable sources, creating stability and reliability risks as clean energy adoption accelerates.",
      "Unplanned equipment failures — transformer blowouts, turbine shutdowns, pipeline leaks — cause costly outages and safety incidents that reactive maintenance strategies cannot prevent.",
      "Complex, evolving regulatory requirements around emissions reporting, renewable portfolio standards, and rate structures demand automated compliance systems.",
      "Consumers expect real-time usage visibility, time-of-use rate optimization, and seamless digital billing — capabilities that legacy utility CIS platforms cannot deliver.",
    ],
    solutions: [
      {
        title: "Smart Grid Management Platform",
        description:
          "AI-driven grid management system with real-time load balancing, distributed energy resource orchestration, fault detection, and automated demand response for grid stability.",
      },
      {
        title: "Predictive Asset Maintenance",
        description:
          "IoT sensors and machine learning models that analyze vibration, temperature, and performance data to predict equipment failures 2-4 weeks before they occur, enabling planned maintenance.",
      },
      {
        title: "Renewable Energy Monitoring & Optimization",
        description:
          "Real-time monitoring dashboard for solar, wind, and storage assets with weather-adjusted generation forecasting, curtailment optimization, and grid injection management.",
      },
      {
        title: "Digital Utility Customer Platform",
        description:
          "Modern customer portal with real-time usage dashboards, smart meter integration, dynamic rate plan comparison, paperless billing, and outage notification systems.",
      },
      {
        title: "Emissions & Regulatory Compliance Engine",
        description:
          "Automated emissions tracking, carbon accounting, regulatory reporting, and renewable energy certificate management aligned with EPA, FERC, and state-level requirements.",
      },
    ],
    results: [
      {
        metric: "Significant reduction in unplanned downtime",
        description:
          "Predictive maintenance models detect equipment degradation weeks in advance, transforming reactive repair into planned maintenance.",
      },
      {
        metric: "Measurable improvement in grid efficiency",
        description:
          "AI-driven load balancing and demand response optimization reduce transmission losses and improve renewable energy utilization.",
      },
      {
        metric: "Substantial annual operational savings",
        description:
          "Automation of meter reading, billing, compliance reporting, and field service scheduling dramatically reduces operational overhead.",
      },
    ],
    relatedServices: [
      "ai-data-innovation",
      "cloud-infrastructure",
      "solution-implementation",
    ],
  },
  {
    title: "Media & Entertainment",
    slug: "media",
    description:
      "Content management platforms, streaming infrastructure, recommendation engines, and digital rights management for media companies.",
    icon: "Film",
    challenges: [
      "Content discovery is broken — viewers spend more time scrolling than watching, and generic recommendation algorithms fail to surface the right content to the right audience at the right time.",
      "Scaling streaming infrastructure for unpredictable traffic spikes — live events, viral content, season premieres — requires elastic architectures that maintain quality of experience under load.",
      "Content piracy and unauthorized redistribution cost the industry billions annually, while traditional DRM approaches create friction that degrades the legitimate viewer experience.",
      "Monetization complexity across ad-supported, subscription, transactional, and hybrid models demands unified platforms that optimize revenue across every viewer segment.",
    ],
    solutions: [
      {
        title: "AI-Powered Content Recommendation Engine",
        description:
          "Deep learning recommendation system analyzing viewing history, engagement signals, content metadata, and contextual factors to deliver hyper-personalized content discovery that increases watch time.",
      },
      {
        title: "Scalable Streaming Infrastructure",
        description:
          "Cloud-native video processing and delivery platform with adaptive bitrate streaming, global CDN orchestration, and auto-scaling architecture that handles millions of concurrent viewers.",
      },
      {
        title: "Intelligent Content Management System",
        description:
          "AI-enhanced DAM and CMS with automated metadata tagging, content classification, rights management, and multi-platform publishing workflows.",
      },
      {
        title: "Advanced Digital Rights Management",
        description:
          "Multi-DRM solution with forensic watermarking, geo-fencing, device authentication, and real-time piracy detection that protects content without degrading viewer experience.",
      },
      {
        title: "Unified Monetization & Analytics Platform",
        description:
          "Cross-platform analytics and revenue optimization engine supporting SVOD, AVOD, TVOD, and hybrid models with real-time viewer insights and programmatic ad integration.",
      },
    ],
    results: [
      {
        metric: "Significant increase in viewer engagement",
        description:
          "AI-powered personalization and recommendation engines keep viewers watching longer and discovering more content.",
      },
      {
        metric: "Near-perfect streaming uptime",
        description:
          "Auto-scaling cloud infrastructure and global CDN orchestration maintain flawless quality of experience during peak traffic events.",
      },
      {
        metric: "Dramatic reduction in content piracy",
        description:
          "Forensic watermarking and real-time detection systems dramatically reduce unauthorized distribution and protect revenue.",
      },
    ],
    relatedServices: [
      "ai-data-innovation",
      "cloud-infrastructure",
      "digital-product-engineering",
    ],
  },
];

export const caseStudies = [
  {
    title: "Vault — Anomaly Detection in Data Streams for Procter & Gamble",
    client: "Procter & Gamble",
    industry: "Supply Chain / Blockchain",
    description:
      "Built Vault, an anomaly detection system for Procter & Gamble that monitors data streams across a consortium-based private Hyperledger network. The platform was scaled from 4 to 15 nodes, with AI/ML-driven anomaly detection models identifying irregularities in real-time trade and supply chain data. Each node represents a consortium partner, and smart contracts enforce data integrity rules at the transaction level.",
    results: [
      "Scaled from 4 to 15 consortium nodes",
      "Real-time anomaly detection across data streams",
      "Private Hyperledger network in production",
    ],
    tags: ["Blockchain", "AI/ML", "Supply Chain"],
    image: "/images/case-study-1.jpg",
    slug: "vault-procter-gamble-anomaly-detection",
    featured: true,
    challenge:
      "P&G needed to detect anomalies in trade and supply chain data flowing across a consortium of partners. The existing system had only 4 nodes and lacked automated anomaly detection, relying on manual auditing that caught issues well after the fact. The platform needed to scale to 15 consortium partners while maintaining sub-second transaction finality and providing AI-driven detection without compromising the privacy guarantees of the permissioned network.",
    approach: [
      {
        title: "Hyperledger Fabric Network Scaling",
        description:
          "Expanded the consortium-based private Hyperledger Fabric network from 4 to 15 peer nodes, each representing a different partner organization. Designed the channel architecture and endorsement policies to allow selective data sharing while maintaining the immutability guarantees required for auditability.",
      },
      {
        title: "AI/ML Anomaly Detection Pipeline",
        description:
          "Developed machine learning models trained on historical transaction data to identify anomalous patterns in real-time data streams. The models flag deviations in volume, timing, and routing patterns, surfacing potential issues to operations teams before they escalate.",
      },
      {
        title: "Smart Contract Enforcement Layer",
        description:
          "Implemented chaincode (smart contracts) that enforce business rules at the transaction level, ensuring that data submissions conform to consortium-agreed standards. Violations are logged immutably and trigger automated alert workflows.",
      },
      {
        title: "Operations Dashboard & Monitoring",
        description:
          "Built a real-time monitoring dashboard showing network health, transaction throughput, anomaly scores by node, and drill-down audit trails. Consortium partners have scoped views showing only the data they are authorized to see.",
      },
    ],
    techStack: [
      "Hyperledger Fabric",
      "Python",
      "TensorFlow",
      "Kafka",
      "Kubernetes",
      "Docker",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "20 weeks",
    teamSize: "8 engineers",
  },
  {
    title: "Keyless — Privacy-Preserving Biometric Authentication",
    client: "Keyless",
    industry: "Digital Security",
    description:
      "Developed the core biometric authentication platform for Keyless, a privacy-centric identity company. The system uses Secure Multi-Party Computation (MPC) to verify identity without ever storing or transmitting raw biometric data. No centralized biometric storage exists anywhere in the system. Built native mobile SDKs for Android and iOS that handle on-device biometric capture and distributed key generation.",
    results: [
      "Zero centralized biometric data storage",
      "Cross-platform mobile SDK (Android + iOS)",
      "MPC-based authentication in production",
    ],
    tags: ["Cybersecurity", "MPC", "Mobile SDK"],
    image: "/images/case-study-2.jpg",
    slug: "keyless-biometric-authentication",
    featured: true,
    challenge:
      "Keyless needed biometric authentication that could survive regulatory scrutiny under GDPR and BIPA without the liability of storing biometric templates. Existing approaches either stored encrypted templates centrally — still a target for attackers — or used on-device-only matching that could not support cross-device scenarios. The solution needed to prove mathematically that biometric data never exists in complete form anywhere in the system.",
    approach: [
      {
        title: "Secure Multi-Party Computation Protocol",
        description:
          "Designed and implemented an MPC protocol that splits biometric feature vectors into encrypted shares distributed across independent computation nodes. Matching is performed on encrypted shares, and only the match/no-match result is revealed. Raw biometric data is never reconstructed at any point.",
      },
      {
        title: "Mobile SDK Development (Android & iOS)",
        description:
          "Built native SDKs for iOS (Swift) and Android (Kotlin) with on-device biometric capture, liveness detection to prevent spoofing attacks, and secure enrollment flows that split and distribute biometric shares without the complete template ever leaving the device's secure enclave.",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized the MPC engine for low-latency authentication, ensuring that the distributed computation and network round trips complete fast enough for production use in real authentication flows, without compromising the cryptographic guarantees.",
      },
      {
        title: "Security Verification",
        description:
          "Worked with third-party cryptography auditors to verify the MPC protocol's security properties and prepared documentation supporting GDPR and BIPA compliance assessments for Keyless's enterprise customers.",
      },
    ],
    techStack: [
      "Rust",
      "Swift",
      "Kotlin",
      "MPC Libraries",
      "gRPC",
      "AWS",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "22 weeks",
    teamSize: "7 engineers",
  },
  {
    title: "LegacySuite — Digital Estate Planning with Smart Contracts",
    client: "LegacySuite",
    industry: "Fintech / Legal Tech",
    description:
      "Built the LegacySuite digital estate planning platform, enabling users to create on-chain wills via smart contracts, manage self-custody wallets, and store sensitive credentials in the LegacyPass password manager. The platform supports multichain asset management and was founded by a team with backgrounds at Merrill Lynch and Morgan Stanley. Smart contracts handle automated beneficiary transfers triggered by verifiable life events.",
    results: [
      "On-chain wills via smart contracts in production",
      "Multichain wallet and asset management",
      "LegacyPass password manager shipped",
    ],
    tags: ["Web3", "Fintech", "Smart Contracts"],
    image: "/images/case-study-3.jpg",
    slug: "legacysuite-digital-estate-planning",
    featured: true,
    challenge:
      "Billions of dollars in digital assets are lost annually because owners pass away without leaving access instructions. Traditional estate planning tools do not handle cryptocurrency wallets, private keys, or multichain assets. LegacySuite needed a platform that bridged legal estate planning with the technical reality of on-chain asset custody — supporting self-custody wallets, smart-contract-based wills, and a secure password vault, all in a single product.",
    approach: [
      {
        title: "Smart Contract Will System",
        description:
          "Designed and deployed smart contracts that encode estate distribution logic, support multiple beneficiary configurations, and execute transfers based on verified trigger events. Implemented multi-oracle verification requiring consensus before any transfer executes, preventing false triggers.",
      },
      {
        title: "Self-Custody Wallet & Multichain Support",
        description:
          "Built a self-custody wallet supporting multiple blockchains, allowing users to manage Ethereum, Polygon, and other chain assets from a single interface. Key management uses client-side encryption so that private keys never leave the user's device.",
      },
      {
        title: "LegacyPass Password Manager",
        description:
          "Developed LegacyPass, an encrypted credential vault where users store account passwords, seed phrases, and access instructions for digital accounts. The vault uses Shamir's Secret Sharing so that designated beneficiaries can access credentials only under the conditions specified in the estate plan.",
      },
      {
        title: "Security & Smart Contract Audits",
        description:
          "Conducted independent smart contract audits before mainnet deployment. Implemented defense-in-depth security including biometric authentication, anomaly detection on account access patterns, and time-locked transfer windows allowing beneficiaries to contest unauthorized actions.",
      },
    ],
    techStack: [
      "Solidity",
      "React",
      "Node.js",
      "Ethereum",
      "Polygon",
      "IPFS",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "16 weeks",
    teamSize: "8 engineers",
  },
  {
    title: "White-Label Healthcare Platform — Doctor-Patient Bridge",
    client: "Healthcare White-Label Platform",
    industry: "Healthcare",
    description:
      "Developed a full-stack, HIPAA-compliant white-label healthcare platform that serves as a digital bridge between doctors and patients. The platform supports appointment scheduling, video consultations, electronic health records, prescription management, and patient portals. Designed as a white-label solution that healthcare organizations can deploy under their own brand.",
    results: [
      "HIPAA-compliant platform in production",
      "White-label deployable under client brands",
      "Full doctor-patient workflow digitized",
    ],
    tags: ["Healthcare", "Telemedicine", "Full Stack"],
    image: "/images/case-study-4.jpg",
    slug: "healthcare-white-label-platform",
    featured: true,
    challenge:
      "Healthcare providers needed a digital platform to connect with patients, but building from scratch is expensive and slow, and off-the-shelf solutions lack customization. The platform needed to be white-label so different organizations could deploy it under their own brand, while maintaining HIPAA compliance across all deployments.",
    approach: [
      {
        title: "White-Label Architecture",
        description:
          "Designed a multi-tenant architecture where each healthcare organization gets a fully branded deployment with custom domain, colors, and workflows. Shared infrastructure keeps costs low while tenant isolation ensures data privacy and HIPAA compliance.",
      },
      {
        title: "Patient & Provider Workflows",
        description:
          "Built end-to-end clinical workflows covering patient registration, appointment booking, video consultations, charting, prescription management, and follow-up scheduling. Both patients and providers have tailored interfaces for their role.",
      },
      {
        title: "Video Consultation Infrastructure",
        description:
          "Engineered WebRTC-based video consultations with adaptive bitrate, automatic fallback to audio on poor connections, and end-to-end encryption. Consultations include screen sharing, document viewing, and session recording with consent.",
      },
      {
        title: "HIPAA Compliance & Security",
        description:
          "Implemented encryption at rest and in transit, role-based access controls, audit logging for all data access events, and business associate agreement (BAA) support. Conducted security assessments to validate compliance.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "AWS",
      "Docker",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "20 weeks",
    teamSize: "10 engineers",
  },
  {
    title: "Webaverse — Open-Source Metaverse Platform",
    client: "Webaverse",
    industry: "Metaverse / Gaming",
    description:
      "Built Webaverse, an open-source metaverse platform where users create and inhabit 3D virtual worlds directly in the browser. The platform features drag-and-drop world building, NFT-based asset creation and ownership, Discord integration for community coordination, and sidechains for gas-free in-world transactions. No downloads required — everything runs in a browser tab.",
    results: [
      "Open-source engine released and community-contributed",
      "Browser-native 3D worlds with no downloads",
      "Gas-free in-world transactions via sidechains",
    ],
    tags: ["Metaverse", "Web3", "Open Source"],
    image: "/images/case-study-5.jpg",
    slug: "webaverse-open-source-metaverse",
    featured: true,
    challenge:
      "Existing metaverse platforms required native application downloads and high-end hardware, locking out most potential users. Webaverse needed a browser-native 3D engine that could deliver smooth performance, support real-time multiplayer, integrate NFT asset ownership, and remain open-source so the community could contribute and extend the platform.",
    approach: [
      {
        title: "Browser-Native 3D Engine",
        description:
          "Engineered a custom WebGL rendering pipeline with instanced rendering, occlusion culling, and adaptive quality scaling. The engine dynamically adjusts visual fidelity based on device capabilities, achieving playable frame rates on both desktop and mobile browsers.",
      },
      {
        title: "Drag-and-Drop World Builder",
        description:
          "Built a visual world editor supporting 3D model import (glTF/GLB), terrain placement, lighting configuration, and one-click publishing. Users can create and customize worlds without writing any code.",
      },
      {
        title: "NFT Integration & Sidechain Transactions",
        description:
          "Integrated NFT-based asset ownership so creators can mint and sell objects, avatars, and environments. Deployed sidechain infrastructure for gas-free in-world transactions, removing cost friction from the user experience.",
      },
      {
        title: "Discord Integration & Community Tools",
        description:
          "Built Discord bot integration allowing communities to coordinate world-building, launch events, and manage access directly from their existing Discord servers. Open-sourced the core engine with contribution guidelines and automated CI/CD for community pull requests.",
      },
    ],
    techStack: [
      "WebGL",
      "Three.js",
      "Node.js",
      "Ethereum",
      "WebRTC",
      "WebAssembly",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "6 months",
    teamSize: "12 engineers",
  },
  {
    title: "Beaconhouse Student Collaboration Platform",
    client: "Beaconhouse",
    industry: "Education / EdTech",
    description:
      "Built a digital platform for Beaconhouse school system that brings student artwork, projects, and creative work together across campus locations. The platform supports young communities in creating networks of learning and collaboration, with cross-campus galleries, teacher moderation, and student portfolios. Designed to be age-appropriate and accessible to students across different grade levels.",
    results: [
      "Multi-campus student work showcase platform",
      "Cross-location collaboration enabled",
      "Teacher moderation and portfolio management",
    ],
    tags: ["EdTech", "Product Engineering", "Community"],
    image: "/images/case-study-6.jpg",
    slug: "beaconhouse-student-platform",
    featured: true,
    challenge:
      "Beaconhouse has campuses spread across multiple locations, and student creative work was isolated within individual classrooms. There was no way for students to see what peers at other campuses were creating, no mechanism for cross-campus collaboration, and no digital portfolio system to track student creative development over time. The platform needed to be safe for young users, easy for teachers to moderate, and engaging enough for students to use voluntarily.",
    approach: [
      {
        title: "Cross-Campus Gallery & Discovery",
        description:
          "Built a federated gallery system where students can browse and draw inspiration from peers across campuses while maintaining school-level content boundaries. Teachers approve which student work becomes visible beyond the classroom.",
      },
      {
        title: "Age-Appropriate Student Experience",
        description:
          "Designed an adaptive UI that simplifies for younger students with large touch targets and guided upload flows, while offering richer tools for older students including multimedia embedding and peer feedback features.",
      },
      {
        title: "Teacher Moderation & Portfolio Tools",
        description:
          "Built teacher dashboards for reviewing, approving, and curating student submissions. Teachers can track portfolio development over time and highlight exceptional work for cross-campus showcasing.",
      },
      {
        title: "Media Pipeline & Infrastructure",
        description:
          "Developed a media processing pipeline handling image, video, and document uploads with automatic format optimization, thumbnail generation, and CDN-backed delivery. The architecture handles the burst traffic patterns typical of school hours.",
      },
    ],
    techStack: [
      "Next.js",
      "Firebase",
      "Google Cloud",
      "Cloudinary",
      "Algolia",
      "Tailwind CSS",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "12 weeks",
    teamSize: "7 engineers",
  },
  {
    title: "Nosghy — Mental Health Telemedicine Platform",
    client: "Nosghy",
    industry: "Healthcare / Mental Health",
    description:
      "Built Nosghy, a telemedicine platform focused on mental health. The platform supports video and audio consultations between patients and mental health professionals, as well as remote seminars and group sessions. Designed with the sensitivity that mental health care demands, including secure session management, therapist-patient matching, and longitudinal progress tracking.",
    results: [
      "Video and audio consultation platform shipped",
      "Remote seminar and group session support",
      "Secure therapist-patient communication in production",
    ],
    tags: ["Healthcare", "Telemedicine", "Mental Health"],
    image: "/images/case-study-7.jpg",
    slug: "nosghy-mental-health-telemedicine",
    featured: false,
    challenge:
      "Mental health services face unique telemedicine challenges: patients need privacy guarantees, sessions require reliable video and audio quality, and the platform must support both one-on-one consultations and group formats like remote seminars. Nosghy needed a platform that handled all of these while remaining approachable for patients who may be seeking help for the first time.",
    approach: [
      {
        title: "Secure Video & Audio Consultations",
        description:
          "Built a real-time communication system supporting HD video and audio with end-to-end encryption, adaptive bitrate switching, and automatic fallback to audio-only on degraded connections. Session data is never stored unless explicitly enabled with consent.",
      },
      {
        title: "Remote Seminar & Group Session Support",
        description:
          "Developed a group session mode supporting multiple participants with presenter controls, screen sharing, and moderated Q&A. Seminars can be live or recorded for on-demand access.",
      },
      {
        title: "Patient Onboarding & Matching",
        description:
          "Created an intake flow that helps patients describe their needs and preferences, matching them with appropriate mental health professionals based on specialization, availability, and approach.",
      },
      {
        title: "Progress Tracking & Session Management",
        description:
          "Built tools for therapists to track patient progress over time, manage session notes, and schedule follow-ups. Patients have a private dashboard showing their appointment history and any resources shared by their therapist.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "WebRTC",
      "PostgreSQL",
      "AWS",
      "Redis",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "12 weeks",
    teamSize: "7 engineers",
  },
  {
    title: "Dawiyini — Multi-Lingual Telemedicine for Mauritania",
    client: "Dawiyini",
    industry: "Healthcare / International",
    description:
      "Built Dawiyini, a multi-lingual telemedicine platform connecting patients in distant areas of Mauritania with doctors via tele-consultation. Built on top of the white-label healthcare solution, Dawiyini was localized for Arabic and French, optimized for low-bandwidth connectivity common in the region, and designed to bring specialist medical access to communities that previously had none.",
    results: [
      "HIPAA-compliant telemedicine serving patients in Mauritania",
      "Multi-lingual support (Arabic, French)",
      "Low-bandwidth optimized for remote areas",
    ],
    tags: ["Healthcare", "Telemedicine", "International"],
    image: "/images/case-study-8.jpg",
    slug: "dawiyini-telemedicine-mauritania",
    featured: false,
    challenge:
      "Mauritania has vast distances between population centers and a shortage of specialists in remote areas. Internet connectivity is unreliable and bandwidth is limited. The platform needed to work in conditions most software is not designed for — supporting Arabic and French, functioning on low-bandwidth connections, and providing a telemedicine experience that patients and doctors in the region could actually use.",
    approach: [
      {
        title: "White-Label Customization & Localization",
        description:
          "Extended the existing white-label healthcare platform with full Arabic and French localization, including right-to-left UI layout, localized medical terminology, and region-appropriate workflows for patient intake and consultation.",
      },
      {
        title: "Low-Bandwidth Optimization",
        description:
          "Optimized the video consultation system for low-bandwidth environments with aggressive compression, automatic degradation from video to audio to asynchronous messaging based on detected connectivity, and minimal data transfer for UI interactions.",
      },
      {
        title: "Remote Area Connectivity Handling",
        description:
          "Implemented offline-capable features that let patients complete intake forms and upload medical documents when connectivity is available, with sync when the connection resumes. Doctors receive complete patient context before the consultation begins.",
      },
      {
        title: "Regional Deployment & Support",
        description:
          "Deployed infrastructure with regional considerations for data residency and latency. Provided training materials and onboarding support adapted for healthcare workers in the region.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "WebRTC",
      "PostgreSQL",
      "AWS",
      "i18n",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "10 weeks",
    teamSize: "6 engineers",
  },
  {
    title: "AWSt — Web3 Accessibility Platform for Creators and Collectors",
    client: "AWSt",
    industry: "Web3 / NFTs",
    description:
      "Engineered AWSt, a Web3 accessibility platform with three core products: a wallet for collectors, minting tools for creators, and APIs for developers. The platform features gasless transactions so users never pay gas fees, dynamic pricing models, and a streamlined UX that makes NFT creation and collection possible without blockchain expertise.",
    results: [
      "Gasless transactions for all users",
      "Three-product platform shipped (wallet, minting, API)",
      "Dynamic pricing engine in production",
    ],
    tags: ["Web3", "NFTs", "Product Engineering"],
    image: "/images/case-study-9.jpg",
    slug: "awst-web3-accessibility",
    featured: false,
    challenge:
      "Web3 adoption is held back by complexity: wallet setup, gas fee management, and smart contract knowledge exclude most potential users. AWSt needed a platform that let collectors buy and manage NFTs, creators mint without writing code, and developers integrate Web3 features via simple APIs — all without exposing users to the underlying blockchain mechanics.",
    approach: [
      {
        title: "Gasless Transaction Infrastructure",
        description:
          "Implemented a meta-transaction relay system that sponsors gas fees for all users. Transactions are signed client-side and relayed through the platform's infrastructure, so creators and collectors never need to hold cryptocurrency just to interact with the platform.",
      },
      {
        title: "Creator Minting Tools",
        description:
          "Built a no-code minting interface where creators upload media, configure metadata, set pricing and royalties, and publish NFTs without touching a smart contract. Supports single editions, limited series, and collections with lazy minting.",
      },
      {
        title: "Developer APIs",
        description:
          "Designed RESTful APIs that let third-party developers integrate minting, wallet management, and marketplace features into their own applications. Includes SDKs, webhook support, and sandbox environments for testing.",
      },
      {
        title: "Dynamic Pricing Engine",
        description:
          "Built a pricing system that adjusts based on demand signals, collection performance, and market conditions. Creators can set floor prices and let the algorithm optimize within their parameters.",
      },
    ],
    techStack: [
      "Solidity",
      "Next.js",
      "Node.js",
      "Polygon",
      "IPFS",
      "Redis",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "14 weeks",
    teamSize: "9 engineers",
  },
  {
    title: "Bubl Health — Patient Community Platform",
    client: "Bubl Health",
    industry: "Healthcare",
    description:
      "Built the Bubl Health app, connecting patients to condition-based global communities. The platform helps patients find others managing the same condition, share experiences, ask questions, and access curated health resources. Designed so that no patient question goes unanswered — combining peer community support with moderated health information.",
    results: [
      "Condition-based patient communities launched",
      "Peer support and Q&A platform in production",
      "Moderated health information system",
    ],
    tags: ["Healthcare", "Mobile", "Community"],
    image: "/images/case-study-10.jpg",
    slug: "bubl-health-patient-community",
    featured: false,
    challenge:
      "Patients managing chronic or rare conditions often feel isolated and overwhelmed by conflicting information online. Bubl Health needed a platform where patients could find and connect with others who share their specific condition, ask questions and get real answers from peers and moderators, and access trustworthy health resources — all in a safe, moderated environment.",
    approach: [
      {
        title: "Condition-Based Community Architecture",
        description:
          "Designed a flexible community framework where each condition group has its own space with customized content feeds, discussion threads, and resource libraries. Patients join communities relevant to their conditions and can participate in multiple groups.",
      },
      {
        title: "Peer Q&A and Support System",
        description:
          "Built a question-and-answer system where patients can post questions and receive responses from peers and moderators. The system surfaces relevant prior discussions to reduce duplicate questions and ensure no question goes unanswered.",
      },
      {
        title: "Content Moderation & Safety",
        description:
          "Implemented a moderation pipeline combining automated content classification with human moderators to ensure medical accuracy and emotional safety. Flagged content is reviewed before publication in health-sensitive categories.",
      },
      {
        title: "Empathetic UX Design",
        description:
          "Designed interfaces that accommodate the fatigue and stress common among patients managing health conditions. Used calm visual language, large touch targets, high-contrast modes, and clear navigation to make the app accessible to users of all abilities.",
      },
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Node.js",
      "Google Cloud",
      "Algolia",
      "SendGrid",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "10 weeks",
    teamSize: "6 engineers",
  },
  {
    title: "Legal Marketplace & Social Platform for Pakistan",
    client: "Legal Marketplace",
    industry: "Legal Tech",
    description:
      "Developed a combined marketplace and social media platform connecting lawyers and citizens in Pakistan. The platform lets people find and engage lawyers by practice area, location, and reviews, while providing lawyers with a professional social network to share legal insights, build their reputation, and attract clients. Includes case intake, consultation booking, and community features.",
    results: [
      "Marketplace + social platform shipped",
      "Practice-area-based lawyer discovery",
      "Community features for legal professionals",
    ],
    tags: ["Legal Tech", "Marketplace", "Social Platform"],
    image: "/images/case-study-11.jpg",
    slug: "legal-marketplace-pakistan",
    featured: false,
    challenge:
      "In Pakistan, finding a qualified lawyer for a specific legal issue is difficult and opaque. Most people rely on word-of-mouth referrals, and there is no centralized platform for discovering, vetting, and engaging lawyers. Lawyers, in turn, have limited digital presence and no professional platform tailored to the local legal market. The solution needed to serve both sides: helping citizens find legal help and helping lawyers build their practice.",
    approach: [
      {
        title: "Two-Sided Marketplace Design",
        description:
          "Built a marketplace where citizens can search for lawyers by practice area, location, experience, and client ratings. Lawyers create profiles showcasing their credentials, areas of expertise, and availability. The platform handles consultation booking and initial case intake.",
      },
      {
        title: "Professional Social Network",
        description:
          "Developed social features where lawyers can publish articles, share legal updates, comment on cases of public interest, and build a professional following. This content doubles as a reputation signal for potential clients evaluating lawyers.",
      },
      {
        title: "Case Intake & Communication",
        description:
          "Created a structured intake flow that helps citizens describe their legal situation in plain language. The platform suggests relevant practice areas and surfaces matching lawyers. Secure messaging enables client-lawyer communication within the platform.",
      },
      {
        title: "Trust & Verification",
        description:
          "Implemented lawyer verification against bar council registrations, client review moderation to prevent fake reviews, and transparent fee structures to set expectations before engagement.",
      },
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Elasticsearch",
      "Redis",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "16 weeks",
    teamSize: "8 engineers",
  },
  {
    title: "Mipeople — Nonprofit Donation Technology Platform",
    client: "Mipeople",
    industry: "Nonprofit / Social Impact",
    description:
      "Built Mipeople, a technology platform improving the nonprofit industry through innovative donation processes. The platform modernizes how nonprofits accept and manage donations with optimized giving pages, recurring donation management, donor engagement tools, and impact tracking. Designed to give small nonprofits access to donor management capabilities that previously required significant technology budgets.",
    results: [
      "Modernized donation flows for nonprofits",
      "Recurring donation management system",
      "Impact tracking and donor engagement tools",
    ],
    tags: ["Nonprofit", "Social Impact", "Product Engineering"],
    image: "/images/case-study-12.jpg",
    slug: "mipeople-nonprofit-donations",
    featured: false,
    challenge:
      "Most small and mid-sized nonprofits rely on generic payment forms and spreadsheet-based donor tracking, leading to high donor churn and low recurring giving rates. Mipeople needed a platform that gave every nonprofit access to conversion-optimized giving pages, automated donor engagement, and transparent impact reporting — without the cost and complexity of enterprise fundraising software.",
    approach: [
      {
        title: "Optimized Giving Experience",
        description:
          "Designed donation page templates with suggested amounts, recurring giving prompts, and impact messaging optimized for conversion. Built a customizable page builder so nonprofits can match their brand while inheriting proven giving patterns.",
      },
      {
        title: "Recurring Donation & Donor Management",
        description:
          "Engineered a recurring donation system with smart retry logic for failed payments, upgrade prompts based on donor engagement, and automated acknowledgment communications. Donor profiles track giving history and engagement over time.",
      },
      {
        title: "Impact Tracking Dashboard",
        description:
          "Developed tools for nonprofits to log program outcomes linked to donation dollars. Donors can see what their contributions funded, increasing transparency and trust.",
      },
      {
        title: "Nonprofit Onboarding & Platform",
        description:
          "Built a self-service onboarding flow with payment processing setup, branding configuration, and launch — designed to get a nonprofit from signup to live donation page quickly. Payment routing handles compliance and tax receipt generation.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "Stripe",
      "PostgreSQL",
      "SendGrid",
      "AWS",
    ],
    testimonial: {
      quote: "",
      name: "",
      title: "",
    },
    timeline: "10 weeks",
    teamSize: "6 engineers",
  },
];
