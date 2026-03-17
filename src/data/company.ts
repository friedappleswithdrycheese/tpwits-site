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
];
