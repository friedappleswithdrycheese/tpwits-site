export const companyStats = [
  { value: "17+", label: "Years in Operation" },
  { value: "800+", label: "Engineers Worldwide" },
  { value: "94%", label: "Client Retention" },
  { value: "4", label: "Global Offices" },
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
        metric: "60% faster diagnostics",
        description:
          "AI diagnostic engines reduce turnaround time from hours to minutes, enabling earlier interventions and better patient outcomes.",
      },
      {
        metric: "40% reduction in admin costs",
        description:
          "Intelligent automation of scheduling, billing, and documentation frees clinical staff to focus on patient care.",
      },
      {
        metric: "99.99% HIPAA compliance rate",
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
        metric: "Sub-200ms transaction latency",
        description:
          "High-performance payment infrastructure processes thousands of transactions per second with real-time settlement and reconciliation.",
      },
      {
        metric: "70% fewer fraud false positives",
        description:
          "ML-driven fraud detection models dramatically reduce legitimate transaction blocks while catching more actual fraud.",
      },
      {
        metric: "$12M+ annual compliance savings",
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
        metric: "35% increase in conversion",
        description:
          "AI-powered personalization and recommendation engines drive higher engagement, larger basket sizes, and improved conversion rates.",
      },
      {
        metric: "25% reduction in inventory costs",
        description:
          "Demand forecasting and smart replenishment eliminate overstock while reducing out-of-stock incidents by over 80%.",
      },
      {
        metric: "3x improvement in customer LTV",
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
        metric: "28% improvement in completion rates",
        description:
          "Adaptive learning paths and early intervention systems keep students engaged and on track to complete their programs.",
      },
      {
        metric: "50% reduction in admin workload",
        description:
          "Automated grading, attendance, and compliance reporting free educators to focus on teaching and mentorship.",
      },
      {
        metric: "4.8/5 student satisfaction score",
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
        metric: "45% faster lease-up cycles",
        description:
          "Virtual tours and digital marketing automation dramatically shorten vacancy periods and accelerate tenant acquisition.",
      },
      {
        metric: "30% reduction in operating costs",
        description:
          "IoT-driven building automation and predictive maintenance reduce energy waste, equipment failures, and manual overhead.",
      },
      {
        metric: "92% tenant retention rate",
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
        metric: "22% reduction in freight costs",
        description:
          "AI-optimized routing, load consolidation, and carrier management significantly reduce per-shipment transportation spend.",
      },
      {
        metric: "99.2% on-time delivery rate",
        description:
          "Predictive logistics and real-time route optimization ensure consistent delivery performance even during peak periods.",
      },
      {
        metric: "40% improvement in warehouse throughput",
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
        metric: "35% reduction in unplanned downtime",
        description:
          "Predictive maintenance models detect equipment degradation weeks in advance, transforming reactive repair into planned maintenance.",
      },
      {
        metric: "18% improvement in grid efficiency",
        description:
          "AI-driven load balancing and demand response optimization reduce transmission losses and improve renewable energy utilization.",
      },
      {
        metric: "$8M annual savings in operations",
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
        metric: "40% increase in viewer engagement",
        description:
          "AI-powered personalization and recommendation engines keep viewers watching longer and discovering more content.",
      },
      {
        metric: "99.99% streaming uptime",
        description:
          "Auto-scaling cloud infrastructure and global CDN orchestration maintain flawless quality of experience during peak traffic events.",
      },
      {
        metric: "60% reduction in content piracy",
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
    title: "AI-Driven Clinical Decision Support for a Top-10 U.S. Health System",
    client: "Top-10 U.S. Health System",
    industry: "Healthcare",
    description:
      "Deployed a HIPAA-compliant AI diagnostic engine across 120+ care sites, integrating with Epic EHR to surface real-time clinical recommendations — reducing diagnostic turnaround by 60% and flagging missed diagnoses that improved patient outcomes for 500,000+ individuals annually.",
    results: [
      "60% faster diagnosis",
      "94.7% model accuracy",
      "500K+ patients impacted annually",
    ],
    tags: ["AI & ML", "Healthcare", "Cloud"],
    image: "/images/case-study-1.jpg",
    slug: "ai-diagnostic-platform",
    featured: true,
    challenge:
      "The health system's clinicians were spending an average of 22 minutes per patient on diagnostic review, relying on fragmented data across siloed EHR modules. Missed and delayed diagnoses were contributing to preventable adverse events, and the organization needed a way to surface evidence-based recommendations in real time without disrupting existing clinical workflows.",
    approach: [
      {
        title: "Clinical Workflow Discovery",
        description:
          "Embedded with physicians, nurses, and clinical informaticists across three flagship hospitals to map diagnostic decision points, data dependencies, and EHR interaction patterns — identifying 47 high-impact intervention opportunities.",
      },
      {
        title: "ML Model Development & Validation",
        description:
          "Trained a multi-modal ensemble model on 2.1M de-identified patient records, incorporating lab results, imaging metadata, and clinical notes. Validated against board-certified physician panels achieving 94.7% accuracy with a false-negative rate under 1.2%.",
      },
      {
        title: "Epic EHR Integration",
        description:
          "Built a FHIR-compliant middleware layer that connects to Epic via CDS Hooks, surfacing real-time recommendations directly within the physician's existing workflow — no tab-switching, no separate application.",
      },
      {
        title: "Phased Rollout & Monitoring",
        description:
          "Deployed across 120+ care sites in three phases over 16 weeks, with real-time model performance dashboards, clinician feedback loops, and automated drift detection to maintain accuracy post-launch.",
      },
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Epic FHIR / CDS Hooks",
      "AWS SageMaker",
      "Kubernetes",
      "Snowflake",
    ],
    testimonial: {
      quote:
        "We evaluated four vendors over six months. TPWITS was the only team that understood both the clinical workflow and the ML engineering required. Diagnostic accuracy improved to 94.7%, and our clinicians adopted the tool within weeks — not months.",
      name: "Dr. Sarah Mitchell",
      title: "Chief Medical Officer",
    },
    timeline: "16 weeks",
    teamSize: "14 engineers",
  },
  {
    title: "Next-Gen Digital Lending Platform for a Series B Fintech",
    client: "Series B Fintech",
    industry: "Fintech",
    description:
      "Architected and delivered a high-throughput digital lending platform with real-time credit decisioning, regulatory compliance automation, and multi-currency settlement — scaling to $50M in processed volume within 90 days of launch with zero security incidents.",
    results: [
      "$50M processed in 90 days",
      "Zero security incidents",
      "Sub-200ms decisioning",
    ],
    tags: ["Fintech", "Cloud-Native", "Security"],
    image: "/images/case-study-2.jpg",
    slug: "defi-lending-protocol",
    featured: true,
    challenge:
      "The fintech startup had secured Series B funding and needed to launch a production-grade lending platform within a tight 12-week window to meet investor milestones. Their existing prototype couldn't handle real-time credit decisioning at scale, lacked multi-currency settlement, and had no compliance automation — all critical requirements for their target markets in the U.S. and EU.",
    approach: [
      {
        title: "Platform Architecture & Risk Modeling",
        description:
          "Designed an event-driven microservices architecture with dedicated services for credit scoring, KYC/AML, settlement, and ledger management. Built a real-time risk model incorporating 120+ data signals for sub-200ms credit decisions.",
      },
      {
        title: "Regulatory Compliance Engine",
        description:
          "Implemented an automated compliance layer covering U.S. state lending regulations and EU PSD2 requirements, with configurable rule sets that adapt to jurisdiction-specific constraints without code changes.",
      },
      {
        title: "Multi-Currency Settlement Pipeline",
        description:
          "Engineered a settlement engine supporting USD, EUR, and GBP with real-time FX rate integration, atomic transaction guarantees, and automatic reconciliation against banking partner APIs.",
      },
      {
        title: "Security Hardening & Pen Testing",
        description:
          "Conducted three rounds of third-party penetration testing, implemented end-to-end encryption, hardware security modules for key management, and deployed a real-time fraud detection pipeline that flags anomalous patterns within 50ms.",
      },
    ],
    techStack: [
      "Go",
      "Kafka",
      "PostgreSQL",
      "AWS EKS",
      "Terraform",
      "HashiCorp Vault",
    ],
    testimonial: {
      quote:
        "TPWITS took us from whitepaper to $50M in processed volume in 90 days — with zero security incidents and sub-200ms decisioning. Their engineers operated at a level I've rarely seen, even from top-tier Silicon Valley firms.",
      name: "David Park",
      title: "Founder & CEO",
    },
    timeline: "12 weeks",
    teamSize: "11 engineers",
  },
  {
    title: "Enterprise Cloud Transformation for a Fortune 500 Retailer",
    client: "Fortune 500 Retailer",
    industry: "Retail",
    description:
      "Migrated 340+ workloads from on-premise data centers to a multi-cloud architecture across AWS and Azure, consolidating 12 legacy systems into a unified platform — cutting infrastructure costs by 40% while achieving 99.99% uptime during peak holiday traffic.",
    results: ["40% cost reduction", "99.99% uptime", "3x deployment velocity"],
    tags: ["Cloud", "DevOps", "Retail"],
    image: "/images/case-study-3.jpg",
    slug: "cloud-migration-retailer",
    featured: true,
    challenge:
      "The retailer was running 340+ workloads across two aging on-premise data centers with 12 legacy systems that hadn't been meaningfully updated in over a decade. Infrastructure costs were growing 18% year-over-year, deployments took weeks, and the platform struggled to maintain uptime during Black Friday and holiday surges — costing an estimated $4.2M in lost revenue during the previous peak season.",
    approach: [
      {
        title: "Workload Assessment & Migration Strategy",
        description:
          "Catalogued all 340+ workloads using automated discovery tooling, classifying each as rehost, replatform, refactor, or retire. Developed a risk-scored migration roadmap that prioritized revenue-critical systems and minimized business disruption.",
      },
      {
        title: "Multi-Cloud Architecture Design",
        description:
          "Designed a hybrid AWS + Azure architecture leveraging AWS for compute-heavy e-commerce workloads and Azure for enterprise integrations and Active Directory dependencies. Implemented a cloud-agnostic networking layer with automated failover.",
      },
      {
        title: "CI/CD & Platform Engineering",
        description:
          "Built a unified CI/CD platform using GitOps principles, enabling 150+ developers to deploy independently with automated testing, canary releases, and one-click rollbacks — reducing deployment time from weeks to under 30 minutes.",
      },
      {
        title: "Zero-Downtime Cutover & Optimization",
        description:
          "Executed the final migration cutover during a planned low-traffic window using blue-green deployment patterns, achieving zero unplanned downtime. Post-migration, implemented FinOps practices that identified $1.8M in additional savings through right-sizing and reserved capacity.",
      },
    ],
    techStack: [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "Kubernetes",
      "ArgoCD",
      "Datadog",
    ],
    testimonial: {
      quote:
        "We migrated 340 workloads with zero unplanned downtime during our highest-traffic quarter. Infrastructure costs dropped 40%, and our engineering teams now deploy 3x faster. TPWITS didn't just migrate our systems — they modernized our entire delivery culture.",
      name: "Amanda Rodriguez",
      title: "Director of IT",
    },
    timeline: "6 months",
    teamSize: "22 engineers",
  },
  {
    title: "AI-Powered Contract Intelligence for a Global Legal Enterprise",
    client: "Global Legal Enterprise",
    industry: "Legal Tech",
    description:
      "Built an AI-powered contract analysis platform using NLP and custom LLM fine-tuning that processes 10,000+ legal documents daily — automating clause extraction, risk scoring, and compliance flagging, and reducing manual review time by 85% across 14 practice areas.",
    results: [
      "85% reduction in review time",
      "10K+ documents daily",
      "$3.2M annual savings",
    ],
    tags: ["AI", "Legal Tech", "Automation"],
    image: "/images/case-study-4.jpg",
    slug: "intelligent-automation-fintech",
    featured: true,
    challenge:
      "The legal enterprise employed 600+ attorneys across 14 practice areas, each reviewing contracts manually using inconsistent templates and subjective risk assessments. Average review time was 4.5 hours per contract, backlogs were growing, and the firm was losing competitive bids because of slow turnaround. They needed an AI-driven platform that could handle the nuance and variability of legal language at enterprise scale.",
    approach: [
      {
        title: "Legal Corpus & Taxonomy Development",
        description:
          "Partnered with senior attorneys across all 14 practice areas to build a proprietary taxonomy of 2,400+ clause types, risk categories, and compliance obligations — creating the labeled dataset foundation for model training.",
      },
      {
        title: "Custom LLM Fine-Tuning & NLP Pipeline",
        description:
          "Fine-tuned a large language model on 850,000+ legal documents, building a multi-stage NLP pipeline for document ingestion, clause extraction, semantic classification, and risk scoring with 96.3% extraction accuracy.",
      },
      {
        title: "Review Workflow Integration",
        description:
          "Integrated the AI engine into the firm's existing document management system, building a review dashboard that presents extracted clauses, risk flags, and suggested redlines — allowing attorneys to approve, modify, or override AI recommendations in context.",
      },
      {
        title: "Continuous Learning & Governance",
        description:
          "Implemented a human-in-the-loop feedback system where attorney overrides automatically feed back into model retraining. Established an AI governance committee with quarterly model audits and bias assessments.",
      },
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenAI API",
      "Elasticsearch",
      "Azure OpenAI Service",
      "Redis",
    ],
    testimonial: {
      quote:
        "Their AI platform processes 10,000+ legal documents a day and cut our manual review time by 85%. We saved $3.2M in the first year alone. The ROI case wrote itself after the first quarter.",
      name: "James Chen",
      title: "CTO",
    },
    timeline: "20 weeks",
    teamSize: "9 engineers",
  },
  // --- New case studies ---
  {
    title: "Scalable Telehealth Platform for On-Demand Mental Health Services",
    client: "Venture-Backed Digital Health Startup",
    industry: "Healthcare",
    description:
      "Engineered a full-stack telemedicine platform purpose-built for mental health, featuring real-time video and audio consultations, AI-driven therapist matching, and longitudinal patient progress tracking. The platform supports asynchronous messaging, session note automation, and insurance eligibility verification — all within a HIPAA-compliant architecture.",
    results: [
      "45K+ monthly sessions",
      "4.9/5 patient rating",
      "60% reduction in no-shows",
    ],
    tags: ["Healthcare", "Telemedicine", "AI"],
    image: "/images/case-study-5.jpg",
    slug: "telehealth-mental-health-platform",
    featured: false,
    challenge:
      "The startup had validated demand through a basic MVP but was hitting scalability walls — their monolithic backend couldn't support concurrent video sessions beyond 500 users, therapist matching was entirely manual, and patient no-show rates were hovering at 38%. They needed a platform that could scale to tens of thousands of monthly sessions while delivering the intimacy and reliability that mental health care demands.",
    approach: [
      {
        title: "Real-Time Communication Infrastructure",
        description:
          "Architected a WebRTC-based video and audio pipeline with adaptive bitrate switching, automatic fallback to audio-only on degraded connections, and end-to-end encryption. Built a custom signaling server on Node.js capable of handling 10,000+ concurrent sessions with sub-100ms connection establishment.",
      },
      {
        title: "AI-Powered Therapist Matching Engine",
        description:
          "Developed a matching algorithm that factors in patient intake assessments, therapeutic modality preferences, insurance coverage, availability windows, and historical outcome data. The system continuously learns from session ratings and completion rates to improve match quality over time.",
      },
      {
        title: "Engagement & No-Show Prevention System",
        description:
          "Built a multi-channel reminder and engagement system using push notifications, SMS, and email with intelligent timing based on patient behavior patterns. Integrated a waitlist backfill mechanism that automatically offers cancelled slots to other patients within minutes.",
      },
      {
        title: "Compliance & Clinical Workflow Automation",
        description:
          "Implemented HIPAA-compliant data storage with encryption at rest and in transit, audit logging for every data access event, and automated session note generation using speech-to-text and NLP summarization — reducing post-session documentation time by 70% for therapists.",
      },
    ],
    techStack: [
      "React Native",
      "Node.js",
      "WebRTC",
      "AWS",
      "PostgreSQL",
      "Redis",
    ],
    testimonial: {
      quote:
        "TPWITS transformed our scrappy MVP into a platform that therapists and patients genuinely love. The AI matching alone cut our manual scheduling overhead by 80%, and our no-show rate dropped from 38% to under 15%. They understood the sensitivity of mental health care and built accordingly.",
      name: "Dr. Priya Kapoor",
      title: "Co-Founder & Chief Clinical Officer",
    },
    timeline: "14 weeks",
    teamSize: "12 engineers",
  },
  {
    title: "Predictive B2B Lead Intelligence Platform for Revenue Teams",
    client: "Series A MarTech Startup",
    industry: "SaaS / MarTech",
    description:
      "Built a SaaS platform that identifies high-intent B2B buyers by aggregating and scoring signals from web activity, technographic data, hiring patterns, and funding events. The system delivers prioritized lead lists with predictive scoring, enabling sales teams to focus on accounts most likely to convert.",
    results: [
      "3.2x pipeline growth",
      "40% shorter sales cycles",
      "12K+ active users",
    ],
    tags: ["SaaS", "AI", "Data Analytics"],
    image: "/images/case-study-6.jpg",
    slug: "b2b-lead-intelligence-saas",
    featured: false,
    challenge:
      "The startup's founding team had a strong thesis around buying intent signals but no scalable data pipeline to operationalize it. Their proof-of-concept relied on manual data collection from disparate sources, scores were computed in spreadsheets, and the entire workflow broke down beyond 50 accounts. They needed a production-grade platform that could ingest millions of signals daily and deliver actionable intelligence to revenue teams in real time.",
    approach: [
      {
        title: "Data Ingestion & Signal Enrichment Pipeline",
        description:
          "Designed a high-throughput data pipeline using AWS Lambda and Kafka that ingests signals from 30+ data sources including web analytics providers, job board APIs, funding databases, and technographic crawlers. Built an entity resolution layer to deduplicate and merge signals into unified company profiles.",
      },
      {
        title: "Predictive Scoring Model Development",
        description:
          "Trained gradient-boosted and neural network models on historical conversion data from beta customers, incorporating 180+ intent features. The ensemble model achieves a 3.4x lift over random targeting and auto-recalibrates weekly based on downstream conversion feedback.",
      },
      {
        title: "Real-Time Dashboard & CRM Integration",
        description:
          "Built a React-based dashboard with filterable lead lists, company deep-dives, and trend visualizations. Developed native integrations with Salesforce and HubSpot that push scored leads and intent signals directly into sales workflows without context-switching.",
      },
      {
        title: "Multi-Tenant Architecture & Scalability",
        description:
          "Architected a multi-tenant SaaS platform on Snowflake with row-level security, per-tenant data isolation, and elastic compute that scales query performance linearly as customer data volumes grow. Implemented usage-based billing metering and self-service onboarding.",
      },
    ],
    techStack: [
      "Python",
      "React",
      "Snowflake",
      "dbt",
      "AWS Lambda",
      "Elasticsearch",
    ],
    testimonial: {
      quote:
        "Before TPWITS, our sales team was guessing which accounts to pursue. Now they have a ranked, data-driven list every morning. Pipeline grew 3.2x in the first quarter, and our average sales cycle compressed by 40%. This platform is the backbone of our go-to-market motion.",
      name: "Marcus Rivera",
      title: "VP of Revenue Operations",
    },
    timeline: "16 weeks",
    teamSize: "10 engineers",
  },
  {
    title: "Immersive 3D Virtual Showroom Platform for Global Retail Brands",
    client: "Mid-Market E-Commerce Technology Provider",
    industry: "Retail / E-Commerce",
    description:
      "Developed a WebGL-powered virtual showroom platform that lets retail brands create photorealistic 3D product environments accessible from any browser. The platform includes a drag-and-drop showroom builder, real-time product configurator with color and material swaps, and integrated checkout — bridging the gap between physical and digital retail.",
    results: [
      "28% higher conversion",
      "3.5x session duration",
      "120+ brand showrooms",
    ],
    tags: ["Retail", "3D/WebGL", "Product Engineering"],
    image: "/images/case-study-7.jpg",
    slug: "3d-virtual-showroom",
    featured: false,
    challenge:
      "The client's retail brand customers were losing online conversions because flat product photography couldn't convey the look and feel of premium goods. Existing 3D solutions were either too expensive for mid-market brands, required native app downloads, or delivered frame rates that made the experience unusable on mobile devices. They needed a browser-native platform that delivered console-quality visuals while remaining accessible to non-technical brand teams.",
    approach: [
      {
        title: "WebGL Rendering Engine & Performance Optimization",
        description:
          "Built a custom Three.js rendering pipeline with progressive level-of-detail loading, texture streaming, and GPU-accelerated lighting that achieves 60fps on mid-range mobile devices. Implemented aggressive asset compression using Draco and KTX2 formats, reducing initial load times to under 3 seconds on 4G connections.",
      },
      {
        title: "No-Code Showroom Builder",
        description:
          "Designed a drag-and-drop showroom editor that lets brand merchandisers arrange products, configure lighting, set camera paths, and publish environments without writing code. Included a template library with 40+ pre-built showroom layouts optimized for different product categories.",
      },
      {
        title: "Real-Time Product Configuration System",
        description:
          "Engineered a configuration engine supporting dynamic material, color, and component swaps with instant visual feedback. Connected the configurator to product catalog APIs so that pricing, availability, and SKU selection update in real time as customers customize products.",
      },
      {
        title: "Analytics & Conversion Optimization",
        description:
          "Instrumented the platform with spatial analytics tracking — heatmaps of where users look, which products they interact with, and where they drop off in the showroom journey. Built A/B testing capabilities for showroom layouts that feed directly into conversion optimization workflows.",
      },
    ],
    techStack: [
      "Three.js",
      "React",
      "Node.js",
      "AWS CloudFront",
      "PostgreSQL",
      "Blender Pipeline",
    ],
    testimonial: {
      quote:
        "Our brands were skeptical that a browser-based 3D experience could match what they were used to from native apps. TPWITS proved them wrong — the showrooms look stunning, load fast on mobile, and our brands saw a 28% conversion lift within the first month. The no-code builder means our merchandising teams can update showrooms themselves.",
      name: "Elena Vasquez",
      title: "Chief Product Officer",
    },
    timeline: "20 weeks",
    teamSize: "15 engineers",
  },
  {
    title: "Digital Portfolio & Collaboration Hub for K-12 Education",
    client: "Series A EdTech Startup",
    industry: "EdTech",
    description:
      "Created a digital portfolio and project collaboration platform for K-12 students, enabling them to document creative work, share artwork and projects across campuses, and build a longitudinal learning portfolio. The platform includes teacher moderation tools, cross-campus galleries, and parent access with granular privacy controls.",
    results: [
      "85K+ students onboarded",
      "40+ campuses connected",
      "92% teacher adoption",
    ],
    tags: ["EdTech", "Product Engineering", "Cloud"],
    image: "/images/case-study-8.jpg",
    slug: "student-collaboration-platform",
    featured: false,
    challenge:
      "The startup had a clear vision for transforming how students showcase their creative and academic work, but their initial prototype was limited to single-classroom use with no scalable storage, no content moderation, and no way for administrators to manage portfolios across an entire school district. They needed a platform that could handle the unique challenges of K-12 — child safety regulations (COPPA/FERPA), age-appropriate UX, and adoption by teachers who are not digital natives.",
    approach: [
      {
        title: "Child-Safe Architecture & Compliance",
        description:
          "Designed the platform from the ground up for COPPA and FERPA compliance, implementing parental consent workflows, age-gated features, automated content scanning for inappropriate material, and granular privacy controls that let teachers and parents determine exactly who can see each student's work.",
      },
      {
        title: "Intuitive Student & Teacher Experience",
        description:
          "Built an age-adaptive UI that simplifies for younger students (K-3) with large touch targets, voice-guided upload, and emoji-based tagging, while offering richer tools for older students including markdown editing, multimedia embedding, and peer feedback. Teacher dashboards surface portfolio completion rates and highlight students who may need support.",
      },
      {
        title: "Cross-Campus Gallery & Discovery",
        description:
          "Engineered a federated gallery system using Algolia search that lets students discover and draw inspiration from peers across campuses while maintaining school-level content boundaries. Implemented a moderation queue that gives teachers approval authority before work becomes visible beyond their classroom.",
      },
      {
        title: "Media Pipeline & Scalable Infrastructure",
        description:
          "Built a media processing pipeline on Google Cloud and Cloudinary that handles image, video, audio, and document uploads with automatic format optimization, thumbnail generation, and CDN-backed delivery. The serverless architecture on Firebase auto-scales to handle the burst traffic patterns typical of school hours.",
      },
    ],
    techStack: [
      "Next.js",
      "Firebase",
      "Algolia",
      "Google Cloud",
      "Cloudinary",
      "Tailwind CSS",
    ],
    testimonial: {
      quote:
        "TPWITS understood that building for kids is fundamentally different from building for adults. The platform they delivered is safe, delightful, and — most importantly — teachers actually use it. We went from 3 pilot schools to 40+ campuses in one semester. The COPPA compliance framework alone saved us months of legal work.",
      name: "Rachel Thornton",
      title: "CEO & Co-Founder",
    },
    timeline: "12 weeks",
    teamSize: "8 engineers",
  },
  {
    title: "Enterprise EHR Platform with End-to-End HIPAA Compliance",
    client: "Growth-Stage Health IT Company",
    industry: "Healthcare",
    description:
      "Architected and delivered a cloud-native electronic health records platform with comprehensive patient history journaling, role-based specialist access, integrated billing and claims management, and a patient portal. Built on AWS GovCloud with HL7 FHIR interoperability, the system serves 200+ clinics with 99.97% uptime and SOC 2 Type II certification.",
    results: [
      "99.97% uptime",
      "200+ clinics onboarded",
      "SOC 2 Type II certified",
    ],
    tags: ["Healthcare", "Compliance", "Cloud"],
    image: "/images/case-study-9.jpg",
    slug: "hipaa-compliant-ehr-platform",
    featured: false,
    challenge:
      "The client's existing EHR was a legacy on-premise system that couldn't scale beyond regional deployments, lacked FHIR interoperability, and required manual compliance auditing that consumed entire weeks per quarter. Clinics were abandoning the platform due to slow performance and a clunky interface, and the company was at risk of losing its competitive position to cloud-native entrants. They needed a complete platform rebuild that met the strictest healthcare compliance standards while delivering the modern UX clinicians expect.",
    approach: [
      {
        title: "Compliance-First Architecture Design",
        description:
          "Designed the entire platform on AWS GovCloud with encryption at rest (AES-256) and in transit (TLS 1.3), immutable audit logging, and infrastructure-as-code using Terraform for reproducible, auditable deployments. Implemented role-based access control with 14 distinct clinical roles and break-the-glass emergency override procedures.",
      },
      {
        title: "FHIR-Native Data Model & Interoperability Layer",
        description:
          "Built the core data model on HL7 FHIR R4 resources, enabling native interoperability with labs, pharmacies, imaging centers, and other EHR systems. Developed a bidirectional integration engine that supports FHIR REST APIs, SMART on FHIR app launching, and Consolidated CDA document exchange.",
      },
      {
        title: "Clinical Workflow & Billing Integration",
        description:
          "Engineered end-to-end clinical workflows covering patient intake, charting, ordering, prescriptions, and referrals. Built an integrated billing module with real-time insurance eligibility verification, automated ICD-10/CPT coding suggestions, and electronic claims submission with denial tracking.",
      },
      {
        title: "SOC 2 Certification & Continuous Compliance",
        description:
          "Partnered with the client's compliance team through a 12-week SOC 2 Type II audit preparation process, implementing continuous compliance monitoring with automated evidence collection, vulnerability scanning, and penetration testing. Achieved certification on the first audit attempt with zero critical findings.",
      },
    ],
    techStack: [
      "Java Spring Boot",
      "React",
      "AWS GovCloud",
      "PostgreSQL",
      "HL7 FHIR",
      "Terraform",
    ],
    testimonial: {
      quote:
        "Rebuilding a production EHR used by 200+ clinics is one of the hardest things you can do in health IT. TPWITS delivered a platform that passed SOC 2 on the first try, integrates seamlessly with every lab and pharmacy our clinics use, and — for the first time — our clinicians actually enjoy using the software. Uptime hasn't dipped below 99.97% since launch.",
      name: "Dr. Michael Okoye",
      title: "Chief Technology Officer",
    },
    timeline: "24 weeks",
    teamSize: "18 engineers",
  },
  {
    title: "Global Patient Community App with AI-Powered Health Insights",
    client: "Seed-Stage Digital Health Nonprofit",
    industry: "Healthcare",
    description:
      "Built a mobile-first patient community application that connects individuals managing chronic conditions with peer support networks, licensed health coaches, and condition-specific educational content. The platform features AI-powered symptom tracking, personalized health insights, and a provider matching system that helps patients find specialists experienced with their specific condition.",
    results: [
      "150K+ active users",
      "35 condition communities",
      "4.8/5 App Store rating",
    ],
    tags: ["Healthcare", "Mobile", "AI"],
    image: "/images/case-study-10.jpg",
    slug: "patient-community-app",
    featured: false,
    challenge:
      "Patients managing chronic conditions often feel isolated, overwhelmed by conflicting information online, and struggle to find providers who truly understand their condition. The nonprofit had validated this need through extensive patient interviews but had no technical team and needed to launch quickly to secure continued grant funding. The platform had to be deeply empathetic in its design while scaling to support dozens of condition communities with different informational needs and safety considerations.",
    approach: [
      {
        title: "Condition-Adaptive Community Architecture",
        description:
          "Designed a flexible community framework where each condition group has customized content feeds, symptom trackers, medication logs, and safety guidelines. Built a moderation system combining AI content classification with trained patient moderators to ensure medical accuracy and emotional safety across all communities.",
      },
      {
        title: "AI Symptom Tracking & Insights Engine",
        description:
          "Developed a conversational symptom logging interface using OpenAI API that translates natural language entries into structured health data. The insights engine identifies patterns in symptom frequency, severity, and triggers, generating personalized reports that patients can share with their healthcare providers.",
      },
      {
        title: "Provider Matching & Verification System",
        description:
          "Built a provider directory with condition-specific search and matching, verified credentials via NPI database integration, and patient reviews filtered for authenticity. The matching algorithm prioritizes providers with documented experience treating the patient's specific condition and accepts their insurance.",
      },
      {
        title: "Empathetic UX & Accessibility Design",
        description:
          "Conducted extensive user research with patients across 12 condition groups to design interfaces that accommodate fatigue, brain fog, and motor limitations common in chronic conditions. Implemented large touch targets, high-contrast modes, text-to-speech, and a calm visual language that avoids clinical sterility.",
      },
    ],
    techStack: [
      "Flutter",
      "Firebase",
      "Node.js",
      "OpenAI API",
      "Google Cloud",
      "Algolia",
    ],
    testimonial: {
      quote:
        "TPWITS didn't just build an app — they immersed themselves in our patient community to understand what living with a chronic condition actually feels like. The result is a platform that 150,000 people rely on daily for support, information, and connection. Our App Store rating speaks for itself.",
      name: "Laura Simmons",
      title: "Executive Director",
    },
    timeline: "10 weeks",
    teamSize: "7 engineers",
  },
  {
    title: "Blockchain-Powered Anomaly Detection for Trade Channel Integrity",
    client: "Global CPG Enterprise",
    industry: "Supply Chain / CPG",
    description:
      "Designed and deployed a blockchain-based anomaly detection platform that monitors trade channel transactions across a 15-node distributed ledger network, protecting discount program integrity and identifying fraudulent patterns in real time. The system combines immutable transaction records with machine learning models trained on historical trade data to flag suspicious activity before financial losses materialize.",
    results: [
      "$18M fraud prevented annually",
      "15-node blockchain network",
      "99.8% detection accuracy",
    ],
    tags: ["Blockchain", "AI", "Supply Chain"],
    image: "/images/case-study-11.jpg",
    slug: "blockchain-supply-chain-anomaly-detection",
    featured: true,
    challenge:
      "The CPG enterprise operated a complex network of distributors, wholesalers, and retailers across 40+ markets, with volume-based discount programs totaling hundreds of millions annually. Fraudulent claims — phantom shipments, duplicate invoicing, and collusive pricing between channel partners — were costing the company an estimated $22M per year, and traditional auditing caught issues months after the fact. They needed a system that could detect anomalies in real time across a decentralized partner network where no single party could be fully trusted.",
    approach: [
      {
        title: "Distributed Ledger Network Design",
        description:
          "Architected a permissioned Hyperledger Fabric network with 15 peer nodes representing key channel partners, implementing smart contracts that enforce discount program rules at the transaction level. Designed the consensus mechanism to ensure that no single partner can unilaterally alter transaction records while maintaining sub-second transaction finality.",
      },
      {
        title: "ML-Based Anomaly Detection Models",
        description:
          "Trained ensemble models on 5 years of historical trade data using TensorFlow, incorporating graph neural networks to detect collusive patterns between partner nodes. The system identifies 14 distinct fraud typologies including volume inflation, timing manipulation, and phantom routing — achieving 99.8% detection accuracy with a false positive rate under 0.3%.",
      },
      {
        title: "Real-Time Monitoring & Alert Dashboard",
        description:
          "Built a Grafana-based operations dashboard with real-time transaction visualization, anomaly score heatmaps by region and partner, and automated alert escalation workflows. Compliance teams can drill down from a flagged transaction to the full blockchain audit trail in three clicks.",
      },
      {
        title: "Partner Onboarding & Change Management",
        description:
          "Developed a partner onboarding toolkit including node deployment automation, API integration guides, and training programs. Worked with the client's procurement team to negotiate blockchain participation into partner agreements, achieving 100% adoption across Tier 1 distributors within 8 weeks of launch.",
      },
    ],
    techStack: [
      "Hyperledger Fabric",
      "Python",
      "TensorFlow",
      "Kafka",
      "Kubernetes",
      "Grafana",
    ],
    testimonial: {
      quote:
        "We had been losing over $20M a year to trade channel fraud and couldn't catch it with traditional auditing. TPWITS delivered a blockchain network that our partners actually adopted — and the ML detection layer identified $18M in fraudulent activity in the first year alone. The combination of immutable records and real-time anomaly detection is a game-changer for our industry.",
      name: "Robert Hallman",
      title: "SVP, Global Trade Operations",
    },
    timeline: "18 weeks",
    teamSize: "12 engineers",
  },
  {
    title: "Privacy-Preserving Biometric Authentication SDK",
    client: "Series B Identity & Security Company",
    industry: "Cybersecurity / Identity",
    description:
      "Developed a biometric authentication SDK that uses secure multi-party computation to verify identity without ever storing or transmitting raw biometric data. The system performs face and fingerprint matching across distributed encrypted shares, ensuring that no single server ever holds a complete biometric template — achieving sub-300ms authentication while maintaining zero-knowledge privacy guarantees.",
    results: [
      "Sub-300ms authentication",
      "Zero biometric data breaches",
      "2M+ authentications/month",
    ],
    tags: ["Cybersecurity", "Blockchain", "Mobile"],
    image: "/images/case-study-12.jpg",
    slug: "biometric-authentication-sdk",
    featured: false,
    challenge:
      "The client needed to offer enterprise customers biometric authentication that could survive regulatory scrutiny in the EU (GDPR biometric data rules) and Illinois (BIPA) without the liability of storing biometric templates. Existing solutions either stored encrypted templates centrally — still a honeypot for attackers — or used on-device-only matching that couldn't support cross-device authentication scenarios. They needed a fundamentally new architecture where biometric data provably never exists in complete form anywhere in the system.",
    approach: [
      {
        title: "Secure Multi-Party Computation Protocol Design",
        description:
          "Designed a custom MPC protocol that splits biometric feature vectors into encrypted shares distributed across three independent computation nodes. Matching is performed on encrypted shares using garbled circuits, and the result (match/no-match) is the only information revealed — raw biometric data is never reconstructed at any point in the pipeline.",
      },
      {
        title: "High-Performance Rust Implementation",
        description:
          "Implemented the core MPC engine in Rust for memory safety and performance, leveraging SIMD instructions and zero-copy serialization to achieve sub-300ms end-to-end authentication latency including network round trips. The engine runs inside AWS Nitro Enclaves providing hardware-level attestation that the code has not been tampered with.",
      },
      {
        title: "Cross-Platform Mobile SDK Development",
        description:
          "Built native SDKs for iOS (Swift) and Android (Kotlin) with on-device biometric capture, liveness detection to prevent spoofing, and secure enrollment flows that split and distribute biometric shares without the complete template ever leaving the secure enclave of the mobile device.",
      },
      {
        title: "Formal Security Verification & Compliance Certification",
        description:
          "Engaged third-party cryptography auditors to formally verify the MPC protocol's security properties. Prepared comprehensive documentation for GDPR Article 35 Data Protection Impact Assessments and BIPA compliance, and supported the client through SOC 2 Type II and ISO 27001 certifications.",
      },
    ],
    techStack: [
      "Rust",
      "Swift",
      "Kotlin",
      "MPC Libraries",
      "AWS Nitro Enclaves",
      "gRPC",
    ],
    testimonial: {
      quote:
        "TPWITS solved what we thought was an impossible problem — biometric authentication that is both fast enough for production use and provably privacy-preserving. The Rust-based MPC engine they built authenticates in under 300ms, and we can prove to any regulator that we never store biometric data. Two million authentications a month and zero breaches.",
      name: "Katharina Braun",
      title: "CTO & Co-Founder",
    },
    timeline: "22 weeks",
    teamSize: "9 engineers",
  },
  {
    title: "Digital Estate Planning Platform with Smart Contract Automation",
    client: "Seed-Stage Fintech Startup",
    industry: "Fintech / Web3",
    description:
      "Built a digital estate and asset management platform that enables individuals to create legally-informed digital wills backed by smart contracts, store sensitive documents in encrypted vaults, and configure automated beneficiary transfers triggered by verifiable life events. The platform handles traditional digital assets, cryptocurrency holdings, and online account credentials within a unified estate plan.",
    results: [
      "$120M+ in digital assets secured",
      "25K+ estate plans created",
      "Zero unauthorized transfers",
    ],
    tags: ["Web3", "Fintech", "Security"],
    image: "/images/case-study-13.jpg",
    slug: "digital-estate-planning-platform",
    featured: false,
    challenge:
      "Digital assets — from cryptocurrency wallets to social media accounts to cloud-stored documents — represent an increasingly significant portion of personal estates, yet existing estate planning tools treat them as an afterthought. The startup identified that billions of dollars in digital assets are lost annually because owners die without leaving access instructions, and existing will frameworks are not designed for assets that require private keys or multi-factor authentication. They needed a platform that bridged legal estate planning with the technical reality of digital asset custody.",
    approach: [
      {
        title: "Smart Contract Will Architecture",
        description:
          "Designed a smart contract system on Ethereum that encodes estate distribution logic, supports multiple beneficiary configurations, and executes transfers based on verified trigger events. Implemented a multi-oracle verification system requiring consensus from independent life event verification services before any transfer executes, preventing false triggers.",
      },
      {
        title: "Encrypted Document Vault & Key Management",
        description:
          "Built an encrypted document storage system using IPFS for decentralized storage and AWS KMS for key management, with Shamir's Secret Sharing to split decryption keys across trusted parties. Documents are only accessible when a configurable threshold of key holders cooperate — ensuring security while preventing single points of failure.",
      },
      {
        title: "Cross-Asset Estate Plan Builder",
        description:
          "Developed an intuitive estate plan builder that guides users through cataloging digital assets (crypto wallets, online accounts, digital files, domain names), assigning beneficiaries, specifying transfer conditions, and recording access instructions. The system generates both on-chain smart contract configurations and traditional legal documents for jurisdictional compatibility.",
      },
      {
        title: "Security Architecture & Audit",
        description:
          "Implemented defense-in-depth security including hardware wallet integration for high-value crypto assets, biometric authentication, anomaly detection on account access patterns, and time-locked transfer windows that allow beneficiaries to contest unauthorized actions. Conducted three independent smart contract audits with all critical findings remediated before mainnet deployment.",
      },
    ],
    techStack: [
      "Solidity",
      "React",
      "Node.js",
      "IPFS",
      "AWS KMS",
      "Ethereum",
    ],
    testimonial: {
      quote:
        "Estate planning for digital assets is an unsolved problem that affects millions of people. TPWITS helped us build a platform that $120M in assets now depends on — and not a single unauthorized transfer has occurred. The smart contract architecture they designed gives our users confidence that their digital legacy is protected.",
      name: "Jonathan Reeves",
      title: "Founder & CEO",
    },
    timeline: "16 weeks",
    teamSize: "10 engineers",
  },
  {
    title: "NFT Marketplace & Creator Toolkit with Gasless Minting",
    client: "Web3-Native Creative Platform",
    industry: "Web3",
    description:
      "Engineered a full-featured NFT marketplace and creator toolkit that eliminates the technical barriers to NFT creation through gasless minting on Polygon, customizable smart contract templates, and fiat on-ramp integration. The platform supports lazy minting, collection management, royalty enforcement, and a discovery engine that surfaces emerging creators to collectors.",
    results: [
      "50K+ NFTs minted",
      "$8.5M transaction volume",
      "4K+ creators onboarded",
    ],
    tags: ["Web3", "NFT", "Product Engineering"],
    image: "/images/case-study-14.jpg",
    slug: "nft-marketplace-creator-platform",
    featured: false,
    challenge:
      "The client wanted to make NFT creation accessible to artists and creators who have no blockchain knowledge and no cryptocurrency. Existing marketplaces required wallet setup, gas fee management, and smart contract understanding that excluded 95% of potential creators. Additionally, the marketplace needed to support secondary sales with enforceable royalties — a problem that most platforms had failed to solve — and provide fiat payment options for collectors who were crypto-curious but not crypto-native.",
    approach: [
      {
        title: "Gasless Minting & Lazy Mint Architecture",
        description:
          "Implemented a meta-transaction relay system on Polygon that sponsors gas fees for creators, combined with a lazy minting pattern where NFTs are only committed on-chain at the moment of first purchase. This eliminates upfront costs for creators entirely while maintaining the on-chain provenance guarantees collectors expect.",
      },
      {
        title: "Customizable Smart Contract Templates",
        description:
          "Built a library of audited smart contract templates covering single editions, limited series, generative collections, and dynamic NFTs with upgradeable metadata. Creators configure contracts through a visual builder, and the system deploys verified contracts with built-in royalty enforcement using EIP-2981 and operator filter registries.",
      },
      {
        title: "Fiat On-Ramp & Payment Infrastructure",
        description:
          "Integrated Stripe for fiat payments with automatic crypto settlement, enabling collectors to purchase NFTs with credit cards while creators receive proceeds in their preferred currency. Built custodial wallet infrastructure for non-crypto users with a clear upgrade path to self-custody wallets.",
      },
      {
        title: "Discovery Engine & Creator Growth Tools",
        description:
          "Developed a recommendation engine using TheGraph for on-chain activity indexing and collaborative filtering for taste matching. Built creator analytics dashboards showing collector demographics, secondary market activity, and royalty earnings — alongside promotional tools like featured drops, curated collections, and collector notifications.",
      },
    ],
    techStack: [
      "Solidity",
      "Next.js",
      "Polygon",
      "Stripe",
      "IPFS",
      "TheGraph",
    ],
    testimonial: {
      quote:
        "TPWITS made NFTs accessible to artists who have never touched a crypto wallet. Over 4,000 creators have minted on our platform, and the gasless experience means they can focus on their art instead of gas fees. The fiat on-ramp was the missing piece — it opened up an entirely new collector audience.",
      name: "Aisha Olanrewaju",
      title: "Head of Product",
    },
    timeline: "14 weeks",
    teamSize: "11 engineers",
  },
  {
    title: "Browser-Based Metaverse Engine with Real-Time Multiplayer",
    client: "Venture-Backed Metaverse Infrastructure Company",
    industry: "Media / Web3",
    description:
      "Built an open-source, browser-native metaverse engine that enables anyone to create, customize, and publish persistent 3D virtual worlds without downloading software. The platform features a drag-and-drop world builder, NFT-based asset ownership, real-time multiplayer with voice chat, and a spatial computing layer that maintains 60fps performance with 100+ concurrent users per world instance.",
    results: [
      "100K+ virtual worlds created",
      "500K+ monthly active users",
      "60fps at 100+ concurrent users",
    ],
    tags: ["Web3", "Metaverse", "Product Engineering"],
    image: "/images/case-study-15.jpg",
    slug: "metaverse-engine-platform",
    featured: true,
    challenge:
      "Existing metaverse platforms required either native application downloads, high-end hardware, or both — locking out the vast majority of potential users. The client envisioned a metaverse that was as accessible as a website: type a URL, enter a world, and start interacting. The engineering challenges were immense — delivering console-quality 3D graphics in a browser, supporting real-time multiplayer with spatial audio, and maintaining smooth performance as world complexity and user density scaled. Previous attempts by the client's internal team had achieved only 15fps with more than 20 concurrent users.",
    approach: [
      {
        title: "High-Performance Browser Rendering Engine",
        description:
          "Engineered a custom WebGL rendering pipeline built on Three.js with instanced rendering, occlusion culling, adaptive quality scaling, and WebAssembly-accelerated physics. The engine dynamically adjusts visual fidelity based on device capabilities, achieving 60fps on modern laptops and 30fps on mid-range mobile devices with 100+ concurrent users and thousands of scene objects.",
      },
      {
        title: "Distributed Multiplayer Architecture",
        description:
          "Designed a spatial partitioning system that divides large worlds into interest zones, using WebRTC for peer-to-peer communication within zones and server-authoritative state for cross-zone interactions. Implemented delta compression and predictive interpolation to maintain smooth movement at 50ms update intervals even on cellular connections.",
      },
      {
        title: "Drag-and-Drop World Builder & Asset Pipeline",
        description:
          "Built a visual world editor with real-time collaborative editing, supporting 3D model import (glTF/GLB), terrain sculpting, lighting configuration, scripting (visual and code-based), and one-click publishing. Integrated an NFT-based asset marketplace where creators can sell custom objects, avatars, and environment templates with on-chain ownership verification.",
      },
      {
        title: "Open-Source Architecture & Developer Ecosystem",
        description:
          "Released the core engine under an open-source license with comprehensive documentation, plugin APIs, and a developer SDK. Built a community contribution pipeline with automated testing, code review workflows, and a contributor reward program. Managed the transition from internal codebase to a community-governed project with 200+ external contributors within six months.",
      },
    ],
    techStack: [
      "WebGL",
      "Three.js",
      "Ethereum",
      "Node.js",
      "WebRTC",
      "WebAssembly",
    ],
    testimonial: {
      quote:
        "TPWITS took our vision of a browser-native metaverse and turned it into reality at a scale we didn't think was possible. 100,000 worlds created, half a million monthly users, and the engine runs at 60fps in a browser tab. When we open-sourced the engine, the developer community response was overwhelming — 200 contributors in the first six months. This is the team that builds the impossible.",
      name: "Daniel Koh",
      title: "CEO & Co-Founder",
    },
    timeline: "6 months",
    teamSize: "20 engineers",
  },
  {
    title: "On-Demand Legal Services Marketplace with Case Management",
    client: "Growth-Stage Legal Technology Company",
    industry: "Legal Tech",
    description:
      "Developed a digital marketplace that connects individuals and small businesses with qualified attorneys across 30+ practice areas, featuring AI-powered case intake, real-time video consultations, secure document sharing, and end-to-end case management. The platform handles everything from initial consultation booking through matter resolution, with integrated billing and client communication tools.",
    results: [
      "8K+ lawyers registered",
      "35K+ cases facilitated",
      "4.7/5 client satisfaction",
    ],
    tags: ["Legal Tech", "Product Engineering", "AI"],
    image: "/images/case-study-16.jpg",
    slug: "legal-services-marketplace",
    featured: false,
    challenge:
      "Finding the right lawyer for a specific legal issue is a confusing, opaque process for most people. The client had observed that 80% of legal needs among individuals and small businesses go unaddressed because people don't know where to start, can't assess attorney quality, and are surprised by costs. Existing legal marketplaces were essentially directories with no workflow — clients still had to manage their cases through email and phone calls. The platform needed to be a true two-sided marketplace with network effects, not just a lawyer listing.",
    approach: [
      {
        title: "AI-Powered Case Intake & Attorney Matching",
        description:
          "Built a conversational intake system that asks plain-language questions to classify legal issues, assess urgency, estimate complexity, and match clients with attorneys who have relevant experience and capacity. The matching algorithm considers practice area specialization, bar admissions, client reviews, response time history, and fee structures.",
      },
      {
        title: "Integrated Case Management Workspace",
        description:
          "Developed a shared workspace for each matter that includes document storage with version control, task tracking, deadline management, secure messaging, and video consultation scheduling. Both attorneys and clients have role-appropriate views of case progress, with automated status updates and milestone notifications.",
      },
      {
        title: "Video Consultation & Document Infrastructure",
        description:
          "Engineered a WebRTC-based video consultation system with screen sharing, recording (with consent), and automatic session summaries. Built a document management layer with e-signature integration, automated document assembly for common legal forms, and bank-grade encryption for all stored materials.",
      },
      {
        title: "Marketplace Dynamics & Trust Infrastructure",
        description:
          "Implemented a comprehensive trust system including attorney credential verification (bar standing, malpractice insurance), client review moderation, escrow-based billing that protects both parties, and a dispute resolution workflow. Built dynamic pricing suggestions based on matter complexity and market rates to reduce friction in fee negotiations.",
      },
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "AWS",
      "WebRTC",
    ],
    testimonial: {
      quote:
        "TPWITS built more than a marketplace — they built an operating system for legal services. 8,000 attorneys have registered because the platform actually makes their practice more efficient, and 35,000 cases have been facilitated because clients finally have a way to find, vet, and work with lawyers without the usual confusion. Our 4.7-star satisfaction rating is unprecedented in legal tech.",
      name: "Catherine Liu",
      title: "Chief Operating Officer",
    },
    timeline: "14 weeks",
    teamSize: "9 engineers",
  },
  {
    title: "Multi-Lingual Telemedicine Platform for Emerging Markets",
    client: "International Healthcare NGO",
    industry: "Healthcare",
    description:
      "Engineered a telemedicine platform purpose-built for emerging markets, supporting 12 languages with AI-powered real-time translation, optimized for low-bandwidth and intermittent connectivity, and capable of offline-first consultations that sync when connectivity resumes. The platform connects patients in underserved regions with both local and international specialists, dramatically expanding access to quality healthcare.",
    results: [
      "200K+ consultations delivered",
      "12 languages supported",
      "95% patient satisfaction in low-connectivity regions",
    ],
    tags: ["Healthcare", "AI", "Mobile"],
    image: "/images/case-study-17.jpg",
    slug: "multilingual-telemedicine-emerging-markets",
    featured: false,
    challenge:
      "In the regions the NGO serves, patients often travel hours to reach a clinic, only to find that the available physician doesn't speak their language or specialize in their condition. Internet connectivity is unreliable — 2G in many areas, with frequent dropouts. Existing telemedicine platforms assumed stable broadband connections, were English-only, and had no mechanism for consultations when connectivity was interrupted. The platform needed to work in conditions that most software is not designed for.",
    approach: [
      {
        title: "Offline-First Architecture & Connectivity Optimization",
        description:
          "Built an offline-first mobile application using SQLite for local data persistence and a custom sync engine that batches and reconciles data when connectivity is available. Video consultations automatically degrade to audio-only, then to asynchronous voice messages based on detected bandwidth. Implemented aggressive data compression achieving 80% reduction in bandwidth requirements compared to standard video consultation platforms.",
      },
      {
        title: "AI-Powered Multilingual Communication Layer",
        description:
          "Integrated Whisper AI for speech-to-text across 12 languages and built a real-time translation pipeline that translates between patient and physician languages with medical terminology awareness. The system handles code-switching (patients mixing languages) and provides physicians with both the original transcript and translation to verify context.",
      },
      {
        title: "Community Health Worker Integration",
        description:
          "Designed workflows that leverage community health workers as intermediaries — the health worker's device facilitates the consultation, handles technical setup, and assists with language nuances that AI translation might miss. Built a CHW toolkit with guided assessment protocols, vital sign recording, and triage decision trees that work entirely offline.",
      },
      {
        title: "Clinical Quality & Outcome Tracking",
        description:
          "Implemented a clinical quality framework with consultation outcome tracking, follow-up adherence monitoring, and longitudinal patient health records that persist across providers. Built analytics dashboards for the NGO showing consultation volumes, disease patterns, and health outcomes by region — enabling data-driven decisions about where to deploy resources.",
      },
    ],
    techStack: [
      "React Native",
      "Python",
      "AWS",
      "Whisper AI",
      "SQLite",
      "WebSocket",
    ],
    testimonial: {
      quote:
        "TPWITS built a telemedicine platform that works where others cannot. In regions with barely 2G connectivity, patients are having meaningful consultations with specialists in their own language. 200,000 consultations delivered and a 95% satisfaction rate in the hardest operating environments on earth. This platform is saving lives.",
      name: "Dr. Amara Osei",
      title: "Director of Digital Health Programs",
    },
    timeline: "16 weeks",
    teamSize: "11 engineers",
  },
  {
    title: "Donation Optimization Platform for Nonprofit Organizations",
    client: "Social Impact Technology Collective",
    industry: "Nonprofit / Social Impact",
    description:
      "Built a technology platform that empowers nonprofits to modernize their donation processes with optimized giving pages, recurring donation management, impact tracking dashboards, and donor engagement automation. The platform serves as a centralized hub connecting donors to causes they care about, with transparent impact reporting that builds trust and drives sustained giving.",
    results: [
      "$4.2M+ donations processed",
      "300+ nonprofits onboarded",
      "65% increase in recurring donors",
    ],
    tags: ["Social Impact", "Product Engineering", "Cloud"],
    image: "/images/case-study-18.jpg",
    slug: "nonprofit-donation-platform",
    featured: false,
    challenge:
      "Most small and mid-sized nonprofits rely on generic payment forms, spreadsheet-based donor tracking, and manual thank-you emails — resulting in high donor churn, low recurring giving rates, and no way to demonstrate impact to supporters. The collective wanted to build a platform that gave every nonprofit access to the sophisticated donor management and engagement tools that only large organizations with six-figure technology budgets can typically afford.",
    approach: [
      {
        title: "Conversion-Optimized Giving Experience",
        description:
          "Designed and A/B tested donation page templates across 50+ nonprofits, identifying the optimal layouts, suggested amounts, recurring giving prompts, and impact messaging that maximize conversion. Built a customizable page builder that lets nonprofits match their brand while inheriting proven conversion patterns — resulting in an average 42% improvement in donation completion rates over their previous forms.",
      },
      {
        title: "Recurring Giving & Donor Lifecycle Engine",
        description:
          "Engineered a recurring donation system on Stripe Connect with smart retry logic for failed payments, upgrade prompts based on donor engagement signals, and anniversary/milestone communications. Built donor lifecycle automation that moves supporters through awareness, first gift, repeat giving, and major donor stages with personalized touchpoints at each transition.",
      },
      {
        title: "Impact Tracking & Transparency Dashboard",
        description:
          "Developed an impact reporting framework where nonprofits log program outcomes linked to donation dollars, and donors receive personalized impact reports showing exactly what their contributions funded. Built public-facing transparency dashboards that display financial breakdowns, program metrics, and beneficiary stories — increasing donor trust and repeat giving.",
      },
      {
        title: "Multi-Tenant Platform & Nonprofit Onboarding",
        description:
          "Architected a multi-tenant platform on Vercel with per-organization subdomains, custom branding, and isolated donor data. Built a self-service onboarding flow that gets a nonprofit from signup to live donation page in under 30 minutes, with Stripe Connect for compliant fund routing and automated 1099/tax receipt generation.",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "Stripe Connect",
      "PostgreSQL",
      "SendGrid",
      "Vercel",
    ],
    testimonial: {
      quote:
        "Before TPWITS, our member organizations were losing donors to clunky donation forms and a lack of follow-up. The platform they built transformed giving for 300+ nonprofits — $4.2 million processed, and recurring donors increased by 65%. The impact dashboards are a game-changer for donor retention. Small nonprofits now have tools that rival what the biggest charities use.",
      name: "Maria Santos",
      title: "Director of Technology Partnerships",
    },
    timeline: "10 weeks",
    teamSize: "6 engineers",
  },
];
