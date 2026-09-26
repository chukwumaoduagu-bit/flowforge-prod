// FlowForge Enterprise Expansion Suite - Part III Data
// Marketing Campaign, Enterprise Contract (MSA & SLA), FCSA Certification Exam, and Partner Network (FPN)

export interface EmailCampaignStep {
  step: number;
  subject: string;
  previewText: string;
  targetAudience: string;
  timing: string;
  headline: string;
  bodyParagraphs: string[];
  bulletPoints: string[];
  ctaText: string;
  ctaSubtext: string;
}

export interface LinkedInAsset {
  id: string;
  title: string;
  type: 'explainer' | 'infographic' | 'animation' | 'announcement';
  headline: string;
  postCopy: string;
  hashtags: string[];
  visualPrompt: string;
  metricsHighlight: string;
}

export interface PaidAdCreative {
  platform: string;
  format: string;
  headline: string;
  subHeadline: string;
  bodyText: string;
  callToAction: string;
  targeting: string[];
}

export interface LegalContractClause {
  clauseNumber: number;
  title: string;
  summary: string;
  legalText: string;
  governanceBinding: string;
}

export interface SLAMetricItem {
  metric: string;
  cadence: string;
  standard: string;
  remedy: string;
}

export interface ExamQuestion {
  id: number;
  section: 'Stability Fundamentals' | 'Governance' | 'Autonomy' | 'Intelligence' | 'ESA';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  statutoryReference?: string;
}

export interface PartnerTier {
  id: string;
  name: string;
  badge: string;
  accentColor: string;
  revShare: string;
  description: string;
  requirements: string[];
  benefits: string[];
  idealFor: string;
}

export interface PartnerCertificationStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
  milestoneBadge: string;
  durationEstimate: string;
}

// ================= 1. MARKETING CAMPAIGN DATA =================
export const FLOWFORGE_MARKETING_CAMPAIGN = {
  campaignName: 'Stability Starts Here',
  coreMessage: 'FlowForge is the Stability OS for engineering teams — measure load, predict burnout, stabilize delivery.',
  tagline: 'Stability is the new velocity.',
  slogan: 'Protect your team. Accelerate your delivery.',
  pillars: [
    {
      name: 'Stability',
      icon: 'ActivityIcon',
      tagline: 'Deterministic Load & Flow',
      description: 'Replace subjective sprint retros with mathematically verifiable Load Stability Scores (LSS).'
    },
    {
      name: 'Autonomy',
      icon: 'CpuIcon',
      tagline: 'Self-Balancing Protocols',
      description: 'Autonomous weekly intervention scripts that rebalance capacity before burnout occurs.'
    },
    {
      name: 'Governance',
      icon: 'ShieldCheckIcon',
      tagline: 'Enforced Slack Floors',
      description: 'RulePack v1 institutional guardrails that protect 15%+ liquidity on all critical paths.'
    },
    {
      name: 'Intelligence',
      icon: 'SparklesIcon',
      tagline: 'Predictive Burnout Curves',
      description: 'Algorithmic forecasting that detects systemic exhaustion 14 to 21 days before delivery slips.'
    },
    {
      name: 'Certification',
      icon: 'AwardIcon',
      tagline: 'Standardized Architecture',
      description: 'Accredited FlowForge Certified Stability Architects (FCSA) verifying enterprise resilience.'
    }
  ],
  emails: [
    {
      step: 1,
      subject: 'Your engineering team is unstable — here’s why.',
      previewText: 'Velocity charts lie. Here is what your commit telemetry actually reveals about burnout risk.',
      targetAudience: 'CTOs, VP of Engineering, Heads of Infrastructure',
      timing: 'Day 0 (Initial Outreach)',
      headline: 'The Velocity Illusion is Costing You Your Best Engineers.',
      bodyParagraphs: [
        'Every engineering leader is shown the same vanity metrics: story points completed, sprint burndown velocity, and pull request volume. Yet projects slip by quarters, senior engineers quit without warning, and crunch cycles repeat every release.',
        'Here is the truth traditional dashboards hide: Your team’s Slack Liquidity has dropped below 8%, and 3 core seniors are carrying 78% of the critical-path load.',
        'FlowForge introduces the Load Stability Score (LSS) — the first real-time operating system that measures systemic strain, calculates team liquidity, and proves delivery predictability before you commit to product roadmaps.'
      ],
      bulletPoints: [
        'Deterministic calculation of human capacity and work-in-progress volatility',
        'Mathematical proof that velocity without slack accelerates systemic failure',
        'Zero code-read telemetry: 100% metadata-only connection to GitHub, Jira, and Linear in 15 minutes'
      ],
      ctaText: 'Calculate Your Team’s Stability Score',
      ctaSubtext: 'Free 30-Day Read-Only Audit • No Credit Card Required'
    },
    {
      step: 2,
      subject: 'Burnout is predictable — FlowForge proves it.',
      previewText: 'How our algorithmic Burnout Index forecasts developer exhaustion 14 days before delivery slips.',
      targetAudience: 'Engineering Directors, Staff Plus Engineers, People & Talent Leaders',
      timing: 'Day 3 (Insight & Evidence)',
      headline: 'Burnout Is Not an HR Problem. It Is an Architectural Invariant.',
      bodyParagraphs: [
        'When an engineer burns out, organizations treat it as individual fatigue. But our empirical research across 50,000+ engineering hours proves burnout is a structural failure caused by critical path monopolization.',
        'When an engineer remains above 85% allocated capacity for more than 14 consecutive days with sub-10% slack liquidity, resignation probability jumps by 4.2x.',
        'FlowForge’s Autonomy Engine continuously monitors load vectors. When our Burnout Index crosses 0.40, our automated protocols immediately generate rebalancing proposals, shifting non-critical dependencies to liquid team members.'
      ],
      bulletPoints: [
        'Burnout Index (0.00 – 1.00) updated daily on all core pods',
        'Autonomous rebalancing proposals delivered directly to engineering managers',
        'Statutory 15% slack liquidity buffer mathematically enforced by RulePack v1'
      ],
      ctaText: 'Review the Burnout Curve Whitepaper',
      ctaSubtext: 'Includes real-world enterprise telemetry case studies'
    },
    {
      step: 3,
      subject: 'Stabilize your team in 30 days — free pilot.',
      previewText: 'Get a full Enterprise Stability Audit (ESA) delivered to your executive board at zero cost.',
      targetAudience: 'VPs of Engineering, CIOs, Technical Founders',
      timing: 'Day 7 (Conversion & Pilot Activation)',
      headline: 'Get an Institutional Enterprise Stability Audit (ESA) in 30 Days.',
      bodyParagraphs: [
        'You do not need another agile ceremony or Jira plugin. You need an audited operating system that guarantees stability and gives your board board-grade delivery certainty.',
        'We are currently onboarding 15 select enterprise engineering organizations into our 30-Day Stability Pilot. We will connect read-only metadata to your repos, monitor team liquidity, and deliver an official Enterprise Stability Audit (ESA) signed by a FlowForge Certified Stability Architect.',
        'If we do not improve your Load Stability Score by at least 15 points in 30 days, you walk away with the full audit artifacts and recommendations at zero obligation.'
      ],
      bulletPoints: [
        'Full Enterprise Stability Audit (ESA) report ready for your Board of Directors',
        'Active deployment of RulePack v1 governance policies',
        'Weekly executive briefing with an accredited FlowForge Stability Architect'
      ],
      ctaText: 'Start Free Pilot → Generate ESA in 30 Days',
      ctaSubtext: '15 pilot slots available for Q3 • Setup completes in under 20 minutes'
    }
  ] as EmailCampaignStep[],
  linkedInAssets: [
    {
      id: 'li-1',
      title: 'Stability Score Explainer',
      type: 'explainer',
      headline: 'Why "Sprint Velocity" is Dead and Load Stability Score (LSS) is the Future',
      postCopy: 'Velocity measures how fast your team is running. But what if they are running straight off a cliff? 📉\n\nMost enterprise tech debt isn\'t bad code—it\'s overloaded architects, zero slack liquidity, and hidden single-point-of-failure bottlenecks.\n\nFlowForge measures Load Stability Score (0-100):\n✅ <75: High Volatility, immediate burnout threat\n✅ 75-84: Standard Operative Capacity\n✅ 85+: Sovereign Deterministic Stability\n\nStop optimizing for speed. Optimize for stability. Because stability is the new velocity.',
      hashtags: ['#EngineeringLeadership', '#DevOps', '#DeveloperProductivity', '#CTO', '#TechDebt'],
      visualPrompt: 'Clean high-contrast dark diagram contrasting jagged erratic velocity charts with smooth stabilized LSS trajectories.',
      metricsHighlight: '88% of teams with LSS > 85 ship quarterly releases on target date.'
    },
    {
      id: 'li-2',
      title: 'Slack Liquidity Infographic',
      type: 'infographic',
      headline: 'The 15% Rule: Why 100% Resource Utilization is an Engineering Death Sentence',
      postCopy: 'Highway traffic comes to a complete standstill at 85% vehicle density. Telecommunications networks drop packets when bandwidth hits 90%.\n\nYet tech companies regularly push engineering teams to 100% sprint capacity and wonder why emergency bugs take 3 weeks to triage.\n\nAt FlowForge, our statutory RulePack enforces a minimum 15% Slack Liquidity Floor. Teams with 15%+ liquidity resolve critical outages 3.4x faster and suffer 62% less voluntary attrition.\n\nProtect your buffer. Protect your delivery.',
      hashtags: ['#SoftwareEngineering', '#EngineeringManagement', '#CapacityPlanning', '#AgileIsDead'],
      visualPrompt: 'Infographic showing Queuing Theory curve: exponential lead-time spike as utilization approaches 100%.',
      metricsHighlight: '3.4x faster incident MTTR with 15% guaranteed slack liquidity.'
    },
    {
      id: 'li-3',
      title: 'Burnout Curve Animation',
      type: 'animation',
      headline: 'Predicting Senior Developer Resignations 14 Days Before They Happen',
      postCopy: 'Nobody burns out overnight. It takes 3 continuous weeks of critical-path overloading, sustained off-hours PR reviews, and chronic slack depletion.\n\nFlowForge tracks this algorithmic curve in real time without invading privacy. Zero code reads, zero keystroke trackers—pure mathematical load analysis from pull request topologies.\n\nCatch the curve before the two-week notice lands in your inbox.',
      hashtags: ['#DeveloperRetention', '#TechTalent', '#EngineeringCulture', '#CTOLife'],
      visualPrompt: 'Animated radar graph showing load distribution shifting autonomously from red overloaded node to green liquid nodes.',
      metricsHighlight: '0.40 Burnout Index threshold triggers autonomous load mitigation.'
    },
    {
      id: 'li-4',
      title: 'ESA Certification Announcement',
      type: 'announcement',
      headline: 'Announcing the Enterprise Stability Audit (ESA): Board-Grade Engineering Governance',
      postCopy: 'Financial audits are standard. Security SOC2 audits are required. Why have engineering delivery audits been nonexistent?\n\nToday we are announcing the official FlowForge Enterprise Stability Audit (ESA)—the first standardized certification that validates whether an enterprise engineering organization has the operational stability to execute its roadmap.\n\nAudited by accredited FlowForge Certified Stability Architects (FCSA). Ready for boards, investors, and enterprise procurement.',
      hashtags: ['#EnterpriseGovernance', '#BoardOfDirectors', '#TechDueDiligence', '#FCSA'],
      visualPrompt: 'Crisp gold-seal certificate mock-up displaying Enterprise Stability Audit with 30-day compliance stamp.',
      metricsHighlight: 'Official audit artifact delivered within 30 days of telemetry connection.'
    }
  ] as LinkedInAsset[],
  paidAds: [
    {
      platform: 'Google Search & Display',
      format: 'Responsive Search Ad',
      headline: 'Engineering Stability in 30 Days | FlowForge',
      subHeadline: 'FlowForge — The Stability OS for Enterprise Engineering',
      bodyText: 'Measure true load, predict burnout, and stabilize delivery with deterministic telemetry. Get an audited Enterprise Stability Audit in 30 days.',
      callToAction: 'Start Free Pilot →',
      targeting: ['CTO', 'VP of Engineering', 'Director of DevOps', 'Software Engineering Management']
    },
    {
      platform: 'LinkedIn Sponsored Content',
      format: 'Single Image Carousel / Lead Form',
      headline: 'Predict Burnout Before Your Best Developers Resign',
      subHeadline: 'FlowForge — The Stability OS',
      bodyText: '100% capacity utilization causes project paralysis. Enforce a 15% slack liquidity floor with autonomous load rebalancing. Read-only metadata.',
      callToAction: 'Request Free 30-Day Pilot',
      targeting: ['Companies 50-5000 engineers', 'Engineering Leadership', 'Enterprise Software', 'DevOps Specialists']
    },
    {
      platform: 'Tech Publication Sponsored Newsletter',
      format: 'Primary Sponsor Feature',
      headline: 'Stability is the New Velocity',
      subHeadline: 'Stop measuring story points. Start measuring systemic stability.',
      bodyText: 'FlowForge replaces subjective agile estimation with Load Stability Scores (LSS) and automated governance. Free 30-day enterprise trial.',
      callToAction: 'Generate Your ESA Audit',
      targeting: ['The Pragmatic Engineer readers', 'Hacker News front page', 'Software Lead Weekly']
    }
  ] as PaidAdCreative[],
  landingPageCTA: {
    primaryTitle: 'Start Free Pilot → Generate ESA in 30 Days',
    subtitle: 'Deploy FlowForge Stability Core across your engineering organization in 15 minutes. 100% read-only metadata. Zero code access.',
    guarantee: 'Board-Grade Enterprise Stability Audit delivered within 30 days or cancel with zero obligation.',
    buttonText: 'Start Free Pilot Now'
  }
};

// ================= 2. ENTERPRISE CONTRACT (MSA & SLA) =================
export const FLOWFORGE_MASTER_SERVICE_AGREEMENT = {
  contractTitle: 'MASTER SERVICES AGREEMENT (MSA)',
  entityName: 'CFO TAX PRO LLC (dba FlowForge)',
  effectiveDate: 'Upon Electronic Acceptance / SOW Execution',
  jurisdiction: 'State of Texas, United States',
  summary: 'Full institutional enterprise-ready Master Services Agreement establishing legal terms for FlowForge Stability OS, governance enforcement, and autonomous stability orchestration.',
  clauses: [
    {
      clauseNumber: 1,
      title: 'Definitions',
      summary: 'Establishes legal definitions for FlowForge Stability OS, Customer organization, and core service modules.',
      legalText: `1.1 "FlowForge" means CFO TAX PRO LLC, doing business as FlowForge, a Texas limited liability company having its principal office located in Texas, USA.\n\n1.2 "Customer" means the enterprise entity executing an Order Form, Statement of Work (SOW), or electronically consenting to these terms for enterprise engineering stability services.\n\n1.3 "Services" means FlowForge's proprietary software-as-a-service platform and telemetry engine, comprising (a) the Stability Measurement Core (calculating Load Stability Scores), (b) Governance Policy Enforcement (RulePack v1), (c) Autonomous Workload Rebalancing Protocols, (d) Predictive Burnout Intelligence, and (e) the Enterprise Stability Audit (ESA) certification artifact.\n\n1.4 "Metadata" means high-level telemetry data extracted from Customer's repository management systems (e.g., commit timestamps, pull request reviews, dependency topology, issue assignments, and work-in-progress sizing) excluding source code contents.`,
      governanceBinding: 'Statutory binding across all FlowForge platform modules.'
    },
    {
      clauseNumber: 2,
      title: 'Scope of Services',
      summary: 'Details the 5 core capabilities provided by FlowForge to the enterprise customer.',
      legalText: `2.1 Provision of Stability OS. FlowForge grants to Customer a non-exclusive, non-transferable, worldwide right to access and utilize the Services during the Subscription Term solely for Customer's internal engineering operations.\n\n2.2 Capabilities Included. The Services shall encompass:\n  (a) Continuous daily calculation of Pod Load Stability Scores (LSS) and Slack Liquidity;\n  (b) RulePack v1 automated governance monitoring and statutory alert dispatches;\n  (c) Weekly autonomous load redistribution and burnout mitigation protocols;\n  (d) Predictive delivery intelligence, burnout risk indexing, and velocity forecasts; and\n  (e) Delivery of an accredited Enterprise Stability Audit (ESA) within thirty (30) days of telemetry ingestion.\n\n2.3 No Code Access Warranty. FlowForge warrants that the Services operate exclusively via read-only repository metadata and do not download, store, index, or analyze proprietary source code files or confidential intellectual property.`,
      governanceBinding: 'Guarantees read-only telemetry architecture.'
    },
    {
      clauseNumber: 3,
      title: 'Customer Responsibilities',
      summary: 'Outlines requirements for customer onboarding, metadata access, and critical path designation.',
      legalText: `3.1 Telemetry Provision. Customer shall provide FlowForge with read-only API access tokens to designated version control and project tracking systems (e.g., GitHub, GitLab, Jira, Linear) limited strictly to metadata scopes.\n\n3.2 Organizational Topology. Customer shall designate a Primary Engineering Administrator responsible for configuring pod structures, critical-path project mappings, and notification endpoints for automated governance alerts.\n\n3.3 Security Compliance. Customer shall maintain the security of its account credentials and shall promptly notify FlowForge of any unauthorized access or suspected credential compromise.`,
      governanceBinding: 'Requires read-only OAuth/API credentials only.'
    },
    {
      clauseNumber: 4,
      title: 'Fees & Payment Terms',
      summary: 'Subscription fee schedule ranging from $1,500 to $6,000/month based on enterprise scale and tier.',
      legalText: `4.1 Subscription Tiers. Fees for the Services are structured on a monthly subscription model based on active engineering seats and telemetry ingestion volume:\n  (a) Foundation Tier (up to 25 engineers): $1,500 USD per month;\n  (b) Growth Tier (up to 75 engineers): $3,000 USD per month; and\n  (c) Sovereign Enterprise Tier (unlimited engineers, custom SLAs, RulePack v1 custom rules): $6,000 USD per month.\n\n4.2 Invoicing and Payment. Invoices are issued monthly in advance and are due within thirty (30) calendar days of invoice date (Net 30). Undisputed overdue amounts shall accrue interest at the rate of 1.0% per month or the legal statutory maximum.`,
      governanceBinding: 'Transparent tier schedule ($1,500 - $6,000/mo).'
    },
    {
      clauseNumber: 5,
      title: 'Term & Termination',
      summary: 'Monthly commitment with 30-day written cancellation notice for standard tiers.',
      legalText: `5.1 Term. This Agreement commences on the Effective Date and shall continue on a month-to-month basis (or the term specified in an Order Form) until terminated.\n\n5.2 Termination for Convenience. Either party may terminate this Agreement or any applicable Order Form by providing thirty (30) days' prior written notice to the other party.\n\n5.3 Termination for Cause. Either party may terminate this Agreement immediately upon written notice if the other party breaches any material term of this Agreement and fails to cure such breach within fifteen (15) days of receipt of notice.\n\n5.4 Effect of Termination. Upon termination, FlowForge shall terminate telemetry polling and permanently purge all stored customer metadata within thirty (30) days, certifying such deletion upon written request.`,
      governanceBinding: '30-day notice for flexible enterprise scale.'
    },
    {
      clauseNumber: 6,
      title: 'Confidentiality',
      summary: 'Mutual non-disclosure obligations protecting proprietary data and algorithms.',
      legalText: `6.1 Definition of Confidential Information. "Confidential Information" means all non-public information disclosed by one party ("Disclosing Party") to the other party ("Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information.\n\n6.2 Protection Obligations. The Receiving Party agrees to: (a) protect the Disclosing Party's Confidential Information with the same degree of care it uses for its own confidential information (and not less than reasonable care); (b) not disclose Confidential Information to any third party except to employees, contractors, and legal advisors with a strict need to know; and (c) not use Confidential Information for any purpose outside the scope of this Agreement.`,
      governanceBinding: 'Mutual protection with strict need-to-know standard.'
    },
    {
      clauseNumber: 7,
      title: 'Data Protection & Security',
      summary: 'Explicit metadata boundary: zero code content accessed, encryption at rest and in transit.',
      legalText: `7.1 Metadata Boundary Guarantee. FlowForge explicitly affirms that the Services process telemetry metadata exclusively (commit SHA hashes, author pseudonyms, branch activity, merge cycle times). FlowForge shall never inspect, parse, copy, or train machine learning models on Customer's raw source code files.\n\n7.2 Encryption Standards. All Customer metadata in transit is encrypted using TLS 1.3 or higher. All stored analytical aggregations are encrypted at rest using AES-256 encryption with automated key rotation.\n\n7.3 Regulatory Compliance. FlowForge complies with applicable US and international data privacy regulations, including GDPR (as a Data Processor) and CCPA/CPRA where applicable.`,
      governanceBinding: 'SOC2-ready metadata-only architectural guarantee.'
    },
    {
      clauseNumber: 8,
      title: 'Limitation of Liability',
      summary: 'Mutual cap limited to fees paid in the prior twelve (12) months; exclusion of consequential damages.',
      legalText: `8.1 Damages Waiver. EXCEPT FOR BREACHES OF CONFIDENTIALITY OR WILLFUL MISCONDUCT, IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, DATA LOSS, BUSINESS INTERRUPTION, OR PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n\n8.2 Monetary Liability Cap. EXCEPT FOR INDEMNIFICATION OBLIGATIONS UNDER SECTION 10, EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL BE STRICTLY LIMITED TO THE TOTAL FEES PAID OR PAYABLE BY CUSTOMER TO FLOWFORGE IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO LIABILITY.`,
      governanceBinding: 'Fair 12-month trailing fee liability cap.'
    },
    {
      clauseNumber: 9,
      title: 'Governing Law & Dispute Resolution',
      summary: 'Governed by the laws of the State of Texas; binding arbitration in Dallas County.',
      legalText: `9.1 Governing Law. This Agreement and any disputes arising out of or related hereto shall be governed by and construed in accordance with the substantive laws of the State of Texas, United States, without regard to its conflict of law principles.\n\n9.2 Arbitration. Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules, held in Dallas County, Texas, before a single neutral arbitrator.\n\n9.3 Entire Agreement. This Agreement, together with any applicable Order Forms, constitutes the complete and exclusive understanding between the parties regarding its subject matter and supersedes all prior agreements, proposals, or communications.`,
      governanceBinding: 'Jurisdiction: State of Texas, USA.'
    }
  ] as LegalContractClause[]
};

export const FLOWFORGE_ENTERPRISE_SLA = {
  slaTitle: 'ENTERPRISE SERVICE LEVEL AGREEMENT (SLA)',
  overview: 'Institutional operational commitments governing telemetry accuracy, metric refresh cadences, autonomous execution cycles, and support responsiveness.',
  sections: [
    {
      title: 'Stability Metrics SLA',
      description: 'Daily deterministic refresh of core engineering indicators.',
      metrics: [
        {
          metric: 'Load Stability Score (LSS)',
          cadence: 'Daily at 06:00 UTC',
          standard: 'Calculated across all pods with >99.5% uptime',
          remedy: 'Service credit applied if pipeline delays exceed 12 hours'
        },
        {
          metric: 'Slack Liquidity Index',
          cadence: 'Daily at 06:00 UTC',
          standard: 'Real-time buffer calculation with 15% floor tracking',
          remedy: 'Instant critical alert dispatch upon floor breach (<15%)'
        },
        {
          metric: 'Work-in-Progress Volatility',
          cadence: 'Daily at 06:00 UTC',
          standard: 'Standard deviation of sprint load tracked over 30 rolling days',
          remedy: 'Automated dampening protocol generation'
        }
      ]
    },
    {
      title: 'Autonomy SLA',
      description: 'Automated intervention cycles and critical path protections.',
      metrics: [
        {
          metric: 'Weekly Autonomy Execution Cycle',
          cadence: 'Weekly every Monday at 00:00 UTC',
          standard: 'Autonomous workload rebalancing proposals generated without human latency',
          remedy: 'Manual engineer review within 4 business hours if pipeline fails'
        },
        {
          metric: 'Critical Path Protection',
          cadence: 'Continuous (Real-time polling)',
          standard: 'Single-point-of-failure alerts dispatched within 15 minutes of threshold breach',
          remedy: 'Automated fallback assignment mapping'
        },
        {
          metric: 'Zero Code Modification Guarantee',
          cadence: '100% Invariant',
          standard: 'Engine operates strictly via task assignment suggestions and metadata',
          remedy: '$100,000 breach guarantee warranty'
        }
      ]
    },
    {
      title: 'Enterprise Support & Audit SLA',
      description: 'Human architect availability and certified deliverable commitments.',
      metrics: [
        {
          metric: 'Technical Support Response',
          cadence: '24x7 Coverage',
          standard: 'Initial response within 24 hours for standard, 2 hours for Sev-1 incidents',
          remedy: '10% monthly fee credit per missed SLA window'
        },
        {
          metric: 'Enterprise Stability Audit (ESA) Delivery',
          cadence: 'Within 30 Calendar Days',
          standard: 'Complete executive artifact signed by accredited FCSA architect',
          remedy: '100% pilot fee refund if audit is not delivered within 30 days'
        }
      ]
    }
  ]
};

// ================= 3. FCSA CERTIFICATION EXAM DATA =================
export const FCSA_EXAM_METADATA = {
  certificationName: 'FlowForge Certified Stability Architect (FCSA)',
  code: 'FCSA-101',
  totalQuestions: 40,
  passingScorePercent: 80,
  passingQuestionsCount: 32,
  durationMinutes: 60,
  targetAudience: 'Enterprise Engineering Leaders, DevOps Architects, Technical PMs, and Systems Consultants',
  examSections: [
    { name: 'Section 1 — Stability Fundamentals', count: 8, weight: '20%' },
    { name: 'Section 2 — Governance', count: 8, weight: '20%' },
    { name: 'Section 3 — Autonomy', count: 8, weight: '20%' },
    { name: 'Section 4 — Intelligence', count: 8, weight: '20%' },
    { name: 'Section 5 — ESA Delivery & Artifacts', count: 8, weight: '20%' }
  ]
};

export const FCSA_QUESTION_BANK: ExamQuestion[] = [
  // SECTION 1: STABILITY FUNDAMENTALS
  {
    id: 1,
    section: 'Stability Fundamentals',
    question: 'What is the statutory minimum Slack Liquidity floor mathematically enforced by the FlowForge Stability Core?',
    options: ['5%', '10%', '15%', '25%'],
    correctIndex: 2,
    explanation: 'FlowForge mandates a statutory Slack Liquidity floor of 15%. Research demonstrates that systems operating with sub-15% slack experience exponential queue delays and 4.2x higher burnout probability.',
    statutoryReference: 'RulePack v1 Rule-02'
  },
  {
    id: 2,
    section: 'Stability Fundamentals',
    question: 'What is the primary architectural purpose of the Load Stability Score (LSS)?',
    options: [
      'To benchmark developer coding speed and lines of code committed',
      'To provide a deterministic measurement of workload strain and delivery predictability',
      'To automate annual compensation reviews for engineering pods',
      'To replace automated unit testing with sprint retrospectives'
    ],
    correctIndex: 1,
    explanation: 'The Load Stability Score (LSS) is a composite index (0-100) that deterministically quantifies workload strain, slack liquidity, and delivery predictability across engineering pods.',
    statutoryReference: 'Stability Core Architecture Spec'
  },
  {
    id: 3,
    section: 'Stability Fundamentals',
    question: 'In the FlowForge model, what occurs to task lead times when team resource utilization approaches 100%?',
    options: [
      'Lead times drop to zero as developers achieve peak flow state',
      'Lead times increase exponentially according to Kingman’s queueing formula',
      'Task throughput increases linearly without impacting quality',
      'Systemic volatility drops by 50%'
    ],
    correctIndex: 1,
    explanation: 'According to queuing theory (Kingman’s formula), as resource utilization approaches 100%, wait times in the queue spike exponentially toward infinity, resulting in delivery paralysis.',
    statutoryReference: 'Slack Liquidity Theorem'
  },
  {
    id: 4,
    section: 'Stability Fundamentals',
    question: 'What does a Volatility Index score of > 2.50 indicate within an engineering pod?',
    options: [
      'High unpredictability in sprint scope and irregular work-in-progress distribution',
      'Optimal rapid prototyping conditions',
      'Surplus engineering capacity ready for immediate reallocation',
      'Excessive automated test execution times'
    ],
    correctIndex: 0,
    explanation: 'A Volatility Index greater than 2.50 signals erratic workload swings and irregular work distribution, making release commitments statistically unreliable.',
    statutoryReference: 'RulePack v1 Rule-05'
  },
  {
    id: 5,
    section: 'Stability Fundamentals',
    question: 'How is a "Critical Path Task" defined in FlowForge dependency graph analysis?',
    options: [
      'Any pull request authored by a Staff or Principal Engineer',
      'A task with zero total float whose completion date directly governs project milestone delivery',
      'Any Jira ticket tagged with highest priority',
      'Tasks that involve modifying database schema files'
    ],
    correctIndex: 1,
    explanation: 'A Critical Path Task has zero float in the dependency DAG; any delay in this task pushes back the entire project delivery date day-for-day.',
    statutoryReference: 'DAG Orchestration Engine'
  },
  {
    id: 6,
    section: 'Stability Fundamentals',
    question: 'What is the minimum recommended observation window before generating a baseline Load Stability Score?',
    options: ['24 hours', '7 consecutive days', '14 to 30 consecutive days', '6 months'],
    correctIndex: 2,
    explanation: 'FlowForge requires 14 to 30 consecutive days of metadata ingestion to eliminate single-sprint anomalies and establish a statistically valid baseline.',
    statutoryReference: 'Audit Invariant 1.3'
  },
  {
    id: 7,
    section: 'Stability Fundamentals',
    question: 'Which of the following data sources is strictly EXCLUDED from FlowForge telemetry collection?',
    options: [
      'Commit timestamps and author hashes',
      'Pull request approval and review latency',
      'Source code AST syntax trees and raw file contents',
      'Issue assignment metadata and sprint status changes'
    ],
    correctIndex: 2,
    explanation: 'FlowForge operates with a strict read-only metadata boundary. Proprietary source code files and file contents are never read, indexed, or stored.',
    statutoryReference: 'MSA Section 7.1'
  },
  {
    id: 8,
    section: 'Stability Fundamentals',
    question: 'What represents the ideal target range for an enterprise pod Load Stability Score (LSS)?',
    options: ['40 – 60', '60 – 74', '85 – 100', '100 exclusively with zero slack'],
    correctIndex: 2,
    explanation: 'An LSS of 85 to 100 represents sovereign deterministic stability, where delivery commitments are met with 95%+ predictability and low burnout risk.',
    statutoryReference: 'LSS Metric Benchmark'
  },

  // SECTION 2: GOVERNANCE (RULEPACK V1)
  {
    id: 9,
    section: 'Governance',
    question: 'What is the primary function of FlowForge RulePack v1?',
    options: [
      'To enforce automated code linting and style guides in Git pre-commit hooks',
      'To establish statutory algorithmic thresholds for slack, burnout, and critical-path protection',
      'To replace engineering managers with AI decision models',
      'To calculate hourly billing rates for freelance engineers'
    ],
    correctIndex: 1,
    explanation: 'RulePack v1 is the institutional governance engine that codifies statutory operational boundaries (slack floors, burnout limits, volatility thresholds) into enforced rules.',
    statutoryReference: 'RulePack v1 Specification'
  },
  {
    id: 10,
    section: 'Governance',
    question: 'Under Rule-03 (Critical Path Monopolization), what maximum percentage of critical path tasks may be assigned to a single engineer?',
    options: ['15%', '35%', '50%', '75%'],
    correctIndex: 1,
    explanation: 'Rule-03 restricts single-engineer critical path ownership to a statutory ceiling of 35% to prevent single-point-of-failure fragility.',
    statutoryReference: 'RulePack v1 Rule-03'
  },
  {
    id: 11,
    section: 'Governance',
    question: 'What mandatory action is triggered when an engineering pod breaches the 15% Slack Liquidity floor for two consecutive sprint cycles?',
    options: [
      'Automatic termination of all junior engineering accounts',
      'Immediate executive governance notification and automated rebalancing freeze on non-essential work',
      'Permanent cancellation of the quarterly product release',
      'Automatic rollback of all database migrations'
    ],
    correctIndex: 1,
    explanation: 'Breaching the slack floor triggers an automated governance notification to leadership and invokes autonomous load redistribution to freeze non-essential work.',
    statutoryReference: 'RulePack v1 Rule-02 Enforcement'
  },
  {
    id: 12,
    section: 'Governance',
    question: 'Who possesses the statutory authority to approve a temporary waiver of a RulePack v1 governance violation?',
    options: [
      'Any individual developer on the team',
      'A FlowForge Certified Stability Architect (FCSA) or designated VP of Engineering',
      'The automated Slackbot bot account',
      'Waivers are strictly impossible under any circumstances'
    ],
    correctIndex: 1,
    explanation: 'Governance overrides require formal audit sign-off by a certified FCSA or an authorized VP of Engineering, accompanied by an explicit mitigation plan.',
    statutoryReference: 'Governance Override Protocol'
  },
  {
    id: 13,
    section: 'Governance',
    question: 'How does RulePack v1 protect cross-pod dependency handoffs?',
    options: [
      'By requiring daily standup meetings across both teams',
      'By mandating synchronized sprint cycles and verifying that downstream pods maintain ≥18% slack',
      'By merging both teams into a single monolithic organization',
      'By disabling Git branching on upstream repositories'
    ],
    correctIndex: 1,
    explanation: 'Cross-pod dependencies require synchronized sprint cadence and verified downstream slack buffer (≥18%) to absorb upstream integration delays.',
    statutoryReference: 'RulePack v1 Rule-06'
  },
  {
    id: 14,
    section: 'Governance',
    question: 'Under institutional compliance requirements, how often must an Enterprise Stability Review be held?',
    options: ['Annually', 'Bi-weekly during sprint planning', 'Monthly / Quarterly audit cadence', 'Every 5 years'],
    correctIndex: 2,
    explanation: 'Enterprise governance mandates monthly pod stability audits and quarterly executive board delivery reviews signed by an FCSA.',
    statutoryReference: 'Compliance Matrix Section 3'
  },
  {
    id: 15,
    section: 'Governance',
    question: 'What governance metric measures the percentage of sprint capacity consumed by unplanned interruptive work?',
    options: ['Unplanned Work Ratio (UWR)', 'Velocity Tax', 'Bug Density Index', 'Hotfix Velocity'],
    correctIndex: 0,
    explanation: 'The Unplanned Work Ratio (UWR) quantifies the capacity consumed by emergent, non-planned requests; RulePack v1 flags UWR > 20% as critical.',
    statutoryReference: 'RulePack v1 Rule-07'
  },
  {
    id: 16,
    section: 'Governance',
    question: 'What cryptographic guarantee does FlowForge provide for governance audit logs?',
    options: [
      'Audit entries are encrypted with rot13',
      'Logs are hashed into an immutable SHA-256 Merkle audit trail for non-repudiation',
      'Logs are stored in clear text for easy manual editing',
      'Logs are deleted every 24 hours to conserve disk space'
    ],
    correctIndex: 1,
    explanation: 'All governance events, threshold breaches, and overrides are recorded in an immutable SHA-256 hashed ledger to ensure board-grade non-repudiation.',
    statutoryReference: 'Audit Invariant 2.4'
  },

  // SECTION 3: AUTONOMY ENGINE
  {
    id: 17,
    section: 'Autonomy',
    question: 'What Load Stability Score (LSS) threshold automatically triggers the FlowForge Autonomy Engine to initiate workload intervention?',
    options: ['LSS < 95', 'LSS < 75', 'LSS < 50', 'LSS < 20'],
    correctIndex: 1,
    explanation: 'When a pod\'s Load Stability Score drops below 75 (LSS < 75), the Autonomy Engine automatically initiates intervention analysis to prevent failure.',
    statutoryReference: 'Autonomy Engine PROTO-01'
  },
  {
    id: 18,
    section: 'Autonomy',
    question: 'On what standardized schedule does the FlowForge Autonomy Engine execute its primary rebalancing cycle?',
    options: [
      'Every minute continuously',
      'Every Monday at 00:00 UTC prior to sprint planning',
      'Once per fiscal quarter',
      'Only when manually triggered by a user'
    ],
    correctIndex: 1,
    explanation: 'The primary autonomy cycle runs weekly every Monday at 00:00 UTC, providing engineering managers with optimized workload distributions before sprint kickoff.',
    statutoryReference: 'Autonomy Engine Cadence Spec'
  },
  {
    id: 19,
    section: 'Autonomy',
    question: 'What is the primary action taken by PROTO-01 (Burnout Shield)?',
    options: [
      'Revokes the developer\'s Slack and GitHub access immediately',
      'Identifies engineers with Burnout Index > 0.40 and generates automated rebalancing proposals to offload non-critical tasks',
      'Emails the CEO demanding an immediate salary bonus',
      'Deletes overdue tickets from the backlog'
    ],
    correctIndex: 1,
    explanation: 'PROTO-01 isolates engineers exhibiting high burnout indicators (>0.40) and automatically synthesizes rebalancing actions to transfer low-leverage tasks to liquid team members.',
    statutoryReference: 'Autonomy Protocol PROTO-01'
  },
  {
    id: 20,
    section: 'Autonomy',
    question: 'What is the fundamental safety invariant enforced across ALL FlowForge autonomy protocols?',
    options: [
      'The engine can autonomously rewrite, commit, and deploy production code',
      'Zero Code Modification: The engine strictly operates on task allocations and metadata, never executing code changes',
      'The engine requires all developers to use the same IDE',
      'The engine automatically cancels client demos'
    ],
    correctIndex: 1,
    explanation: 'FlowForge autonomy operates under a strict Zero Code Modification invariant. It redistributes task assignments and provides recommendations without touching source code.',
    statutoryReference: 'Autonomy Safety Invariant 1'
  },
  {
    id: 21,
    section: 'Autonomy',
    question: 'In PROTO-02 (Slack Rebalancer), how does the engine restore a pod that has fallen below the 15% slack floor?',
    options: [
      'Forces all engineers to work 20 hours of overtime',
      'Recommends deferring non-critical discretionary backlog tasks to subsequent sprint iterations',
      'Hires temporary contractors through automated API calls',
      'Removes code quality checks from CI/CD pipelines'
    ],
    correctIndex: 1,
    explanation: 'PROTO-02 identifies discretionary P3/P4 work-in-progress and proposes deferrals until pod slack liquidity recovers to ≥15%.',
    statutoryReference: 'Autonomy Protocol PROTO-02'
  },
  {
    id: 22,
    section: 'Autonomy',
    question: 'What mechanism allows engineering managers to accept or reject autonomous rebalancing proposals?',
    options: [
      'One-click approval via interactive Slack notifications and the FlowForge Stability Core dashboard',
      'Paper authorization forms mailed to FlowForge headquarters',
      'Proposals are mandatory and cannot be rejected',
      'Voting via secret ballot among all engineers'
    ],
    correctIndex: 0,
    explanation: 'Managers retain final decision authority and can accept, adjust, or reject proposed rebalancing actions via the dashboard or integrated Slack actions.',
    statutoryReference: 'Human-in-the-Loop Governance'
  },
  {
    id: 23,
    section: 'Autonomy',
    question: 'What happens if a proposed autonomy action is rejected by an engineering leader?',
    options: [
      'The system locks the manager out of the platform',
      'The rejection reason is logged in the audit trail, and the engine recalibrates its recommendation model',
      'The system executes the change regardless',
      'All automated alerts are permanently disabled'
    ],
    correctIndex: 1,
    explanation: 'Rejections are logged into the governance history with manager feedback, enabling the underlying optimization engine to adapt to team-specific constraints.',
    statutoryReference: 'Autonomy Protocol Feedback Loop'
  },
  {
    id: 24,
    section: 'Autonomy',
    question: 'Under PROTO-05 (Cross-Pod Workload Arbitrage), when can capacity be shared between distinct pods?',
    options: [
      'At any time without restrictions',
      'Only when the donating pod maintains >20% slack liquidity and skill profile compatibility exceeds 80%',
      'Only when both pods report to the same tech lead',
      'Only on weekends'
    ],
    correctIndex: 1,
    explanation: 'Cross-pod arbitrage requires the donating team to maintain a healthy slack reserve (>20%) and ensures high skill alignment before proposing resource sharing.',
    statutoryReference: 'Autonomy Protocol PROTO-05'
  },

  // SECTION 4: INTELLIGENCE & FORECASTING
  {
    id: 25,
    section: 'Intelligence',
    question: 'What is the statutory threshold for the FlowForge Burnout Index that flags high risk of engineer attrition?',
    options: ['0.10', '0.25', '0.40', '0.85'],
    correctIndex: 2,
    explanation: 'A Burnout Index score of 0.40 or higher indicates severe workload concentration, chronic overtime PR reviews, and depleted recovery buffers, triggering intervention.',
    statutoryReference: 'Burnout Index Specification'
  },
  {
    id: 26,
    section: 'Intelligence',
    question: 'How far in advance can the FlowForge Intelligence Engine predict a release milestone delivery slip?',
    options: ['1 hour', '24 to 48 hours', '14 to 21 days', '1 year'],
    correctIndex: 2,
    explanation: 'By analyzing critical path drift, WIP volatility, and slack degradation, FlowForge accurately forecasts delivery slips 14 to 21 days before traditional milestones fail.',
    statutoryReference: 'Predictive Forecast Model'
  },
  {
    id: 27,
    section: 'Intelligence',
    question: 'Which machine learning and statistical techniques are leveraged by the FlowForge Forecast Engine?',
    options: [
      'Pure random number generation',
      'Monte Carlo simulation coupled with Bayesian drift modeling on PR dependency topologies',
      'Astrological calendar tracking',
      'Manual rule of thumb guessing'
    ],
    correctIndex: 1,
    explanation: 'FlowForge uses Monte Carlo milestone simulations (10,000 runs) and Bayesian state-space modeling over metadata graphs to generate deterministic confidence intervals.',
    statutoryReference: 'Forecast Methodology Paper'
  },
  {
    id: 28,
    section: 'Intelligence',
    question: 'What is the "Burnout Curve" in FlowForge intelligence visualizers?',
    options: [
      'A chart showing server CPU temperature',
      'A predictive trajectory mapping sustained capacity utilization against recovery time over rolling 60-day windows',
      'A financial chart of monthly cloud hosting costs',
      'A list of developers with the most Git commits'
    ],
    correctIndex: 1,
    explanation: 'The Burnout Curve charts cumulative load density against physiological recovery thresholds over 60 rolling days, visualizing systemic human fatigue.',
    statutoryReference: 'Burnout Curve Model'
  },
  {
    id: 29,
    section: 'Intelligence',
    question: 'What metric represents Delivery Risk Probability in executive dashboards?',
    options: [
      'The percentage likelihood that an active milestone will miss its contractual target date based on current drift rates',
      'The probability of a cloud data center hurricane outage',
      'The average number of comments per pull request',
      'The time taken to run unit tests'
    ],
    correctIndex: 0,
    explanation: 'Delivery Risk Probability calculates the empirical likelihood that the active release scope cannot be completed by the target date under current velocity and slack parameters.',
    statutoryReference: 'Executive Metric 4.1'
  },
  {
    id: 30,
    section: 'Intelligence',
    question: 'How does the Intelligence Engine differentiate between high-output productivity and impending burnout?',
    options: [
      'It cannot differentiate them',
      'By analyzing off-hours PR activity, response latency decay, review bottlenecks, and absence of recovery cycles',
      'By asking developers to fill out daily satisfaction questionnaires',
      'By measuring lines of code per minute'
    ],
    correctIndex: 1,
    explanation: 'High productivity includes rhythmic recovery dips; impending burnout exhibits unremitting off-hours PR activity, review backlog growth, and zero slack liquidity.',
    statutoryReference: 'Fatigue Telemetry Baseline'
  },
  {
    id: 31,
    section: 'Intelligence',
    question: 'What does a "Confidence Band" of 90% indicate in a FlowForge release completion forecast?',
    options: [
      'There is a 90% probability that the project will complete on or before the indicated date',
      '90% of engineers agree on the estimate',
      '90% of the project budget has been spent',
      'The estimate was reviewed by 90 architects'
    ],
    correctIndex: 0,
    explanation: 'A 90% confidence band (P90) means that across 10,000 Monte Carlo simulations, 90% completed on or before the specified date under historical volatility conditions.',
    statutoryReference: 'Statistical Modeling Reference'
  },
  {
    id: 32,
    section: 'Intelligence',
    question: 'What action does the Intelligence Engine recommend when Delivery Risk exceeds 65%?',
    options: [
      'Mandate weekend work for all engineers',
      'Execute Scope Shedding Protocol to trim non-critical P3 backlog items and safeguard P90 release date',
      'Cancel all customer contracts',
      'Re-estimate all tickets with higher story points'
    ],
    correctIndex: 1,
    explanation: 'When risk surpasses 65%, the engine suggests mathematically optimal scope shedding (deferring lowest-leverage user stories) to preserve the hard release deadline.',
    statutoryReference: 'Delivery Risk Protocol'
  },

  // SECTION 5: ENTERPRISE STABILITY AUDIT (ESA)
  {
    id: 33,
    section: 'ESA',
    question: 'What is the standard delivery timeline for an official FlowForge Enterprise Stability Audit (ESA)?',
    options: ['24 hours', '7 days', '30 calendar days', '90 days'],
    correctIndex: 2,
    explanation: 'An Enterprise Stability Audit (ESA) is delivered within 30 calendar days following the initial connection of read-only telemetry and baselining.',
    statutoryReference: 'SLA Section 3 & Pilot Contract'
  },
  {
    id: 34,
    section: 'ESA',
    question: 'Which four core components make up the official Enterprise Stability Audit (ESA) deliverable?',
    options: [
      'Invoice, Terms of Service, Privacy Policy, and Sales Brochure',
      'Executive Scorecard, Structural Findings, Statutory Recommendations, and 30-Day Remediation Plan',
      'Git repository clone, AWS billing export, Slack export, and HR files',
      'Unit test results, linter reports, Docker containers, and database backups'
    ],
    correctIndex: 1,
    explanation: 'The official ESA artifact consists of: (1) Executive Scorecard, (2) Deep Structural Findings, (3) Statutory Recommendations, and (4) 30-Day Tactical Remediation Plan.',
    statutoryReference: 'ESA Standard Specification v1'
  },
  {
    id: 35,
    section: 'ESA',
    question: 'Who is authorized to sign and certify an official Enterprise Stability Audit (ESA)?',
    options: [
      'Any software engineer who creates a free trial account',
      'An accredited FlowForge Certified Stability Architect (FCSA)',
      'The company\'s external marketing agency',
      'The third-party payment processor'
    ],
    correctIndex: 1,
    explanation: 'Official ESA audits must be reviewed, verified, and signed by an accredited FlowForge Certified Stability Architect (FCSA) with a registered credential ID.',
    statutoryReference: 'FCSA Accreditation By-Laws'
  },
  {
    id: 36,
    section: 'ESA',
    question: 'In an ESA Executive Scorecard, what does an "Overall Organization Health Grade: B+" signify?',
    options: [
      'The team has excellent code formatting',
      'The organization maintains adequate stability (LSS ~80), but exhibits localized critical-path vulnerabilities',
      'The team needs to be replaced immediately',
      'All projects are 100% bug free'
    ],
    correctIndex: 1,
    explanation: 'A grade of B+ reflects functional core operations with identifiable single-point-of-failure risks or borderline slack liquidity that require targeted remediation.',
    statutoryReference: 'ESA Scoring Rubric'
  },
  {
    id: 37,
    section: 'ESA',
    question: 'What role does the 30-Day Remediation Plan play in the ESA deliverable?',
    options: [
      'It lists marketing steps for selling the software product',
      'It provides a week-by-week tactical roadmap to elevate team LSS by ≥15 points and enforce RulePack v1',
      'It provides a schedule for hiring new executives',
      'It mandates complete replacement of the tech stack'
    ],
    correctIndex: 1,
    explanation: 'The 30-Day Plan lays out four sequential weekly milestones to eliminate critical path bottlenecks, restore 15% slack floors, and institutionalize stability.',
    statutoryReference: 'ESA Remediation Protocol'
  },
  {
    id: 38,
    section: 'ESA',
    question: 'How does an ESA provide value during enterprise M&A technical due diligence or investor review?',
    options: [
      'It provides subjective employee satisfaction gossip',
      'It provides an objective, mathematically validated audit of delivery certainty, key-person risk, and organizational scalability',
      'It acts as an insurance policy against stock market drops',
      'It replaces formal financial balance sheet audits'
    ],
    correctIndex: 1,
    explanation: 'Investors and acquirers use the ESA as an objective diligence standard to verify that target engineering teams can predictably ship without critical-person collapse.',
    statutoryReference: 'M&A Technical Diligence Guide'
  },
  {
    id: 39,
    section: 'ESA',
    question: 'Under what condition does the FlowForge Enterprise Pilot guarantee a 100% refund or zero obligation?',
    options: [
      'If the customer decides to switch to a competitor',
      'If FlowForge fails to deliver the completed ESA within 30 days or fail to identify verifiable stability improvements',
      'If the customer experiences a cloud provider outage',
      'Only if approved by the customer\'s legal counsel'
    ],
    correctIndex: 1,
    explanation: 'The enterprise pilot features a statutory performance guarantee: if the certified ESA is not delivered within 30 days, all fees are refunded with zero obligation.',
    statutoryReference: 'Pilot Performance Guarantee'
  },
  {
    id: 40,
    section: 'ESA',
    question: 'What is the minimum passing score on the official FCSA examination to earn certification?',
    options: ['60%', '70%', '80% (32 out of 40 questions)', '100% without error'],
    correctIndex: 2,
    explanation: 'Candidates must achieve a minimum score of 80% (32 out of 40 questions correct) within the 60-minute examination period to become certified.',
    statutoryReference: 'FCSA Exam By-Laws'
  }
];

// ================= 4. PARTNER PROGRAM DATA =================
export const FLOWFORGE_PARTNER_PROGRAM = {
  programName: 'FlowForge Partner Network (FPN)',
  tagline: 'Scale Engineering Stability. Monetize Enterprise Transformation.',
  mission: 'The FlowForge Partner Network empowers elite DevOps consultancies, system integrators, and cloud advisory firms to deploy the Stability OS across global engineering enterprises.',
  benefitsOverview: [
    { title: 'Co-Selling & Lead Sharing', description: 'Collaborate directly with FlowForge enterprise sales teams on high-value Fortune 500 accounts.' },
    { title: 'Joint Marketing', description: 'Co-authored whitepapers, joint webinars, featured listings on the FlowForge partner portal, and co-branded case studies.' },
    { title: 'Marketplace Revenue Share', description: 'Earn recurring revenue shares up to 35% on all software subscriptions and certified audit engagements.' },
    { title: 'Access to FlowForge Academy', description: 'Comprehensive training courses, official exam vouchers, and technical lab sandboxes.' },
    { title: 'Priority Onboarding', description: 'Fast-track onboarding and dedicated Partner Solutions Architect support for client deployments.' },
    { title: 'Early Access to Autonomy Features', description: 'Preview and influence upcoming Autonomy Engine protocols, beta algorithms, and rulepack releases.' }
  ],
  tiers: [
    {
      id: 'registered',
      name: 'Registered Partner',
      badge: 'FPN Registered',
      accentColor: '#38bdf8', // Cyan
      revShare: '15% Recurring',
      description: 'The entry point for independent consultants and boutique technical advisory firms looking to introduce stability metrics to their clients.',
      idealFor: 'Boutique dev shops, solo agile coaches, independent DevOps contractors.',
      requirements: [
        'Complete Stability Fundamentals online training module',
        'Submit 1 qualified enterprise pilot referral per year',
        'Maintain active status on the FlowForge Partner Portal'
      ],
      benefits: [
        '15% recurring software subscription revenue share (12 months)',
        'Standard co-branded pitch collateral and marketing one-pagers',
        'Access to FlowForge Partner Portal and sales enablement assets',
        'FlowForge Academy foundation training access'
      ]
    },
    {
      id: 'certified',
      name: 'Certified Partner',
      badge: 'FPN Certified',
      accentColor: '#a855f7', // Purple
      revShare: '20% Recurring',
      description: 'Accredited advisory practices with verified FlowForge Certified Stability Architects (FCSA) authorized to deliver and sign pilot ESAs.',
      idealFor: 'Regional systems integrators, digital transformation consultancies, managed DevOps firms.',
      requirements: [
        'At least 1 full-time FlowForge Certified Stability Architect (FCSA)',
        '3 qualified pilot referrals delivered annually',
        'Successfully complete and deliver 1 verified Enterprise Stability Audit (ESA)'
      ],
      benefits: [
        '20% recurring software subscription revenue share',
        'Authorized delivery rights for official Enterprise Stability Audits ($15k fee retention)',
        'Joint sales support from FlowForge Regional Partner Managers',
        'Listing in the FlowForge Verified Partner Directory',
        '2 annual FCSA exam vouchers included'
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Partner',
      badge: 'FPN Advanced',
      accentColor: '#f59e0b', // Amber
      revShare: '25% Recurring',
      description: 'Proven enterprise consulting firms delivering large-scale engineering transformations with active governance and autonomy implementations.',
      idealFor: 'Mid-sized consulting practices, cloud transformation partners, technology due diligence teams.',
      requirements: [
        'At least 3 certified FCSA architects on staff',
        '5 successful Enterprise Stability Audit (ESA) deliveries',
        'Active implementation of RulePack v1 governance across client accounts',
        'Autonomous protocol activation across at least 3 enterprise client pods'
      ],
      benefits: [
        '25% recurring software subscription revenue share',
        'Dedicated Partner Solutions Architect (PSA) for proposal co-authoring',
        'Featured co-marketing webinar and co-authored case study annually',
        'Priority technical support SLA (4-hour response window)',
        'Early access to beta autonomy protocols and custom RulePack tooling',
        'Invitation to annual FlowForge Partner Advisory Council'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Partner',
      badge: 'FPN Elite',
      accentColor: '#10b981', // Emerald
      revShare: '35% Recurring',
      description: 'Premier tier for global system integrators and tier-1 advisory firms driving full Stability OS category adoption across Fortune 500 enterprises.',
      idealFor: 'Global System Integrators (GSIs), Big 4 consultancies, premier cloud service providers.',
      requirements: [
        'At least 8 certified FCSA architects across global practices',
        '10+ successful Enterprise Stability Audit (ESA) deliveries',
        'Full Stability OS enterprise deployment (Stability, Governance, Autonomy, Intelligence)',
        'Category evangelism: Keynote presentations, whitepaper contributions, and joint enterprise press releases'
      ],
      benefits: [
        '35% recurring software subscription revenue share (lifetime of account)',
        'Direct co-selling with FlowForge Executive Leadership on multi-million dollar contracts',
        'Design partner status: Direct input into product roadmap and core algorithm evolution',
        'Dedicated 24/7 VIP partner support channel with 1-hour SLA',
        'Unlimited FlowForge Academy licenses and certification exam vouchers',
        'Exclusive executive sponsorship at the annual Stability World Congress'
      ]
    }
  ] as PartnerTier[],
  certificationPath: [
    {
      stepNumber: '01',
      title: 'Complete Stability Fundamentals Training',
      description: 'Partners begin by learning FlowForge’s core concepts including Load Stability Score (LSS), Slack Liquidity, Volatility Index, and Critical Path DAG analysis.',
      deliverable: 'Course Completion Certificate & Lab Sandbox Access',
      milestoneBadge: 'Fundamentals Verified',
      durationEstimate: 'Approx. 8-12 hours self-paced'
    },
    {
      stepNumber: '02',
      title: 'Pass the FCSA Certification Exam',
      description: 'Demonstrate mastery of governance, autonomy, intelligence, and ESA delivery by scoring 80% or higher on the official 40-question proctored examination.',
      deliverable: 'Official FlowForge Certified Stability Architect (FCSA) Credential',
      milestoneBadge: 'FCSA Certified',
      durationEstimate: '60 minutes proctored exam'
    },
    {
      stepNumber: '03',
      title: 'Deliver a Pilot ESA',
      description: 'Successfully complete a 30-day enterprise pilot and produce a comprehensive Enterprise Stability Audit for a customer engineering organization.',
      deliverable: 'Certified ESA Audit Artifact signed by FCSA Lead',
      milestoneBadge: 'Audit Delivery Verified',
      durationEstimate: '30-day pilot cycle'
    },
    {
      stepNumber: '04',
      title: 'Implement Governance RulePack',
      description: 'Apply FlowForge’s governance framework (RulePack v1) to stabilize a customer’s engineering operations, configure telemetry, and enforce 15% slack floors.',
      deliverable: 'RulePack v1 Deployment Verification & Alert Configuration',
      milestoneBadge: 'Governance Institutionalized',
      durationEstimate: 'Week 2-3 of onboarding'
    },
    {
      stepNumber: '05',
      title: 'Activate Autonomy Protocols',
      description: 'Enable weekly autonomy cycles including PROTO-01 load rebalancing, PROTO-02 slack redistribution, and burnout mitigation across production pods.',
      deliverable: 'Automated Monday 00:00 UTC Rebalancing Pipeline Active',
      milestoneBadge: 'Autonomy Live',
      durationEstimate: 'Week 3-4 of onboarding'
    },
    {
      stepNumber: '06',
      title: 'Deploy Full Stability OS',
      description: 'Complete a full enterprise-grade deployment including Stability Core, RulePack Governance, Autonomy Engine, Predictive Intelligence, and Board-ready ESA certifications.',
      deliverable: 'Enterprise Sovereign Stability Certification (Level 4)',
      milestoneBadge: 'Stability OS Sovereign',
      durationEstimate: 'Ongoing enterprise engagement'
    }
  ] as PartnerCertificationStep[]
};
