// FlowForge Total Business Architecture Master Data
// Encapsulating all 10 Sections and 20 Core Deliverables

export interface SectionMeta {
  id: string;
  number: number;
  title: string;
  tagline: string;
  iconName: string;
  deliverablesCount: number;
}

export const TOTAL_BUSINESS_SECTIONS: SectionMeta[] = [
  {
    id: 'section_1_identity',
    number: 1,
    title: 'FlowForge Identity System',
    tagline: 'Brand, Category, Narrative, Manifesto & Visual Identity',
    iconName: 'Fingerprint',
    deliverablesCount: 2
  },
  {
    id: 'section_2_product',
    number: 2,
    title: 'FlowForge Product System',
    tagline: 'Core Modules, Autonomy Protocols & Governance RulePack v1',
    iconName: 'Cpu',
    deliverablesCount: 3
  },
  {
    id: 'section_3_business',
    number: 3,
    title: 'FlowForge Business System',
    tagline: 'Pricing, Enterprise MSA Contract, Sales Playbook, Onboarding & 40-Q FCSA Exam',
    iconName: 'Briefcase',
    deliverablesCount: 5
  },
  {
    id: 'section_4_market',
    number: 4,
    title: 'FlowForge Market System',
    tagline: 'Global Campaign, LinkedIn Assets, Press Kit & Analyst Keynote',
    iconName: 'Megaphone',
    deliverablesCount: 3
  },
  {
    id: 'section_5_partner',
    number: 5,
    title: 'FlowForge Partner System',
    tagline: 'FPN Program Tiers, Partner Certifications & Global Partner Summit',
    iconName: 'Handshake',
    deliverablesCount: 3
  },
  {
    id: 'section_6_executive',
    number: 6,
    title: 'FlowForge Executive System',
    tagline: 'Executive Keynote, Analyst Briefing, Investor One-Pager & 16-Slide Pitch Deck',
    iconName: 'Award',
    deliverablesCount: 4
  },
  {
    id: 'section_7_event',
    number: 7,
    title: 'FlowForge Event System',
    tagline: 'Stability Summit 2027 Event Plan & Global Category Launch Plan',
    iconName: 'Calendar',
    deliverablesCount: 2
  },
  {
    id: 'section_8_website',
    number: 8,
    title: 'FlowForge Website System',
    tagline: 'Full Multi-Page Website (Home, Product, Platform, Pricing, ESA, About, Contact)',
    iconName: 'Globe',
    deliverablesCount: 1
  },
  {
    id: 'section_9_strategic',
    number: 9,
    title: 'FlowForge Strategic System',
    tagline: 'Roadmap, Economics Whitepaper, Blueprint & ESP Category Bible',
    iconName: 'Compass',
    deliverablesCount: 4
  },
  {
    id: 'section_10_operations',
    number: 10,
    title: 'FlowForge Operations System',
    tagline: 'Internal Stability Cadence, Governance Guardrails & Predictive Intelligence',
    iconName: 'Settings',
    deliverablesCount: 3
  }
];

export interface MasterDeliverable {
  id: string;
  name: string;
  sectionNumber: number;
  category: string;
  description: string;
  keyOutputs: string[];
}

export const MASTER_CHECKLIST: MasterDeliverable[] = [
  { id: 'deliv_exec_keynote', name: 'Executive Keynote', sectionNumber: 6, category: 'Executive', description: 'Stability OS launch and ESP category global announcement for C-level leaders.', keyOutputs: ['Keynote Script', 'Slide Narrative', 'Audience Prompts'] },
  { id: 'deliv_analyst_keynote', name: 'Analyst Keynote', sectionNumber: 4, category: 'Market & Analyst', description: 'Engineered for Gartner, Forrester, IDC & RedMonk defining the ESP category.', keyOutputs: ['Historical Paradigm Audit', '7 Sovereign Pillars', 'Call to Action'] },
  { id: 'deliv_category_bible', name: 'Category Bible', sectionNumber: 9, category: 'Strategic', description: 'Definitive guide to Engineering Stability Platforms spanning 7 chapters.', keyOutputs: ['Maturity Models', 'Statutory Standards', 'Mathematical Formulations'] },
  { id: 'deliv_autonomous_roadmap', name: 'Autonomous Engineering Roadmap', sectionNumber: 9, category: 'Strategic', description: '5-phase multi-year roadmap from baseline measurement to certification.', keyOutputs: ['Phase 1-5 Timelines', 'Milestones', 'Autonomy Evolution'] },
  { id: 'deliv_global_partner_summit', name: 'Global Partner Summit', sectionNumber: 5, category: 'Partner', description: 'Event master blueprint for Global Partner Summit 2027.', keyOutputs: ['Agenda Structure', 'Breakout Tracks', 'Partner Awards'] },
  { id: 'deliv_marketing_assets', name: 'Global Marketing Assets', sectionNumber: 4, category: 'Market', description: 'Multi-channel marketing asset inventory, LinkedIn series, and collateral.', keyOutputs: ['LinkedIn Posts', 'Slack Infographic', 'Burnout Visualizer'] },
  { id: 'deliv_sales_playbook', name: 'Enterprise Sales Playbook', sectionNumber: 3, category: 'Business', description: 'End-to-end 6-stage sales cycle with discovery scripts and objection defusal.', keyOutputs: ['6-Stage Framework', 'Objection Playbook', 'Closing Script'] },
  { id: 'deliv_enterprise_contract', name: 'Enterprise Contract (MSA)', sectionNumber: 3, category: 'Business', description: 'Comprehensive Master Services Agreement with strict SLA and data clauses.', keyOutputs: ['Complete MSA Clauses', 'SLA Commitments', 'Liability Caps'] },
  { id: 'deliv_certification_exam', name: 'Certification Exam (FCSA)', sectionNumber: 3, category: 'Business', description: '40-question psychometrically calibrated certification exam with 80% pass score.', keyOutputs: ['40 Questions', 'Explanations', 'Scoring Logic'] },
  { id: 'deliv_partner_program', name: 'Partner Program (FPN)', sectionNumber: 5, category: 'Partner', description: 'FlowForge Partner Network structure spanning 4 tiers from Registered to Elite.', keyOutputs: ['Tier Criteria', 'Revenue Share', 'Co-Selling Benefits'] },
  { id: 'deliv_marketing_campaign', name: 'Marketing Campaign', sectionNumber: 4, category: 'Market', description: '"Stability Starts Here" global 30-day campaign rollout.', keyOutputs: ['Campaign Brief', 'Email Sequences', 'Paid Ad Hooks'] },
  { id: 'deliv_website_multipage', name: 'Website (Full Multi-Page)', sectionNumber: 8, category: 'Web Experience', description: 'Complete 7-page enterprise website simulator (Home, Product, Platform, Pricing, ESA, About, Contact).', keyOutputs: ['7 Interactive Pages', 'Conversion Funnels', 'Live Navigation'] },
  { id: 'deliv_brand_system', name: 'Brand System', sectionNumber: 1, category: 'Identity', description: 'Visual tokens, color architecture, typography standards, and brand voice.', keyOutputs: ['#1A3D7C, #D9A441, #1FB8A6', 'Inter Typography', 'Voice Guide'] },
  { id: 'deliv_governance_rulepack', name: 'Governance RulePack v1', sectionNumber: 2, category: 'Product', description: 'Statutory rules enforcing slack floors, volatility caps, and critical path protection.', keyOutputs: ['15% Slack Floor', 'WIP Elasticity Cap', 'Author Monopoly Bounds'] },
  { id: 'deliv_autonomy_engine_docs', name: 'Autonomy Engine Documentation', sectionNumber: 2, category: 'Product', description: 'Technical specifications for the 5 core autonomous execution protocols.', keyOutputs: ['Rebalancing Logic', 'Slack Redistribution', 'Mitigation Triggers'] },
  { id: 'deliv_esa_audit', name: 'ESA Audit', sectionNumber: 2, category: 'Product', description: 'Engineering Stability Assessment methodology, scorecard, and 30-day deliverable.', keyOutputs: ['Health Scorecard', 'Fragility Mapping', 'Executive Report'] },
  { id: 'deliv_pitch_deck', name: 'Pitch Deck (16 Slides)', sectionNumber: 6, category: 'Executive', description: 'Full 16-slide enterprise institutional pitch deck with presenter notes.', keyOutputs: ['16 Slides', 'Problem-Solution Arc', 'Financial Projections'] },
  { id: 'deliv_investor_onepager', name: 'Investor One-Pager', sectionNumber: 6, category: 'Executive', description: 'Condensed executive teardown covering Problem, Solution, Model, Team.', keyOutputs: ['Executive Teardown', 'Unit Economics', 'Category Defensibility'] },
  { id: 'deliv_onboarding_handbook', name: 'Onboarding Handbook', sectionNumber: 3, category: 'Business', description: '4-week customer onboarding curriculum from Baseline to Intelligence.', keyOutputs: ['Week 1-4 Schedules', 'Setup Milestones', 'Success Criteria'] },
  { id: 'deliv_stability_summit_plan', name: 'Stability Summit Event Plan', sectionNumber: 7, category: 'Events', description: 'Global event execution plan for the flagship FlowForge Stability Summit.', keyOutputs: ['Stage Run of Show', 'Logistics Protocol', 'Partner Showcase'] }
];

// SECTION 1: IDENTITY SYSTEM DATA
export const IDENTITY_SYSTEM_DATA = {
  essence: 'FlowForge is the Stability OS for Engineering Teams.',
  category: 'Engineering Stability Platforms (ESP) — a new global category.',
  manifesto: [
    'Engineering teams deserve stability.',
    'Burnout is predictable.',
    'Delivery risk is preventable.',
    'Slack is strategic.',
    'Autonomy is essential.',
    'Governance is non-negotiable.',
    'Intelligence is the future.',
    'FlowForge defines ESP.'
  ],
  brandVoice: {
    archetype: 'The Sovereign Architect',
    tone: 'Executive. Calm. Predictive. Authoritative.',
    principles: [
      { name: 'Precision over Hype', desc: 'Use empirical telemetry, mathematical bounds, and operational certainty instead of marketing platitudes.' },
      { name: 'Calm under Volatility', desc: 'Communicate steady equilibrium during severe production incidents and organizational turbulence.' },
      { name: 'Predictive Certainty', desc: 'Frame observations around forward-looking risk curves rather than historical blame.' },
      { name: 'Enterprise Authority', desc: 'Address VP of Engineering, CTOs, and Fortune 500 boards with peer-level executive gravity.' }
    ]
  },
  visualSystem: {
    primaryColors: [
      { name: 'Stability Blue', hex: '#1A3D7C', rgb: '26, 61, 124', role: 'Foundation, Trust, Enterprise Governance, Deep Canvas Contrast' },
      { name: 'Autonomy Gold', hex: '#D9A441', rgb: '217, 164, 65', role: 'Action, Autonomous Execution, Sovereign Value, High Prestige' },
      { name: 'Intelligence Teal', hex: '#1FB8A6', rgb: '31, 184, 166', role: 'Predictive Curves, Telemetry, Forward Risk Indicators' }
    ],
    supportingColors: [
      { name: 'Graphite Dark', hex: '#0F172A', role: 'Deep background shell and high-density viewport surfaces' },
      { name: 'Slate Calm', hex: '#334155', role: 'Structural borders, dividers, and card delineations' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'Primary high-contrast typography and display headings' },
      { name: 'Alert Crimson', hex: '#EF4444', role: 'Critical path hazards, burnout boundary violations' }
    ],
    typography: {
      primaryFamily: 'Inter, system-ui, -apple-system, sans-serif',
      displayUsage: 'Medium to Bold tracking (-0.02em) for high-authority headings',
      monoFamily: 'JetBrains Mono, Menlo, monospace',
      monoUsage: 'For code snippets, mathematical formulas, RulePack parameters, telemetry feeds'
    },
    iconography: {
      style: 'Minimal geometric line glyphs with 2px stroke, subtle 8% radial glow',
      primaryIcons: ['Activity / Waveform (Stability Score)', 'Droplets / Flow (Slack Liquidity)', 'Compass / Barometer (Volatility Index)', 'GitPullRequest / Network (Critical Path)', 'Cpu / Sparkles (Autonomy Protocols)']
    }
  }
};

// SECTION 2: PRODUCT SYSTEM DATA
export const PRODUCT_SYSTEM_DATA = {
  coreModules: [
    {
      id: 'mod_stability_score',
      name: 'Stability Score (0-100)',
      formula: 'S = 0.35(Slack) + 0.25(100 - Volatility) + 0.25(Path_Health) + 0.15(Burnout_Headroom)',
      desc: 'Real-time composite health index assessing operational equilibrium across code velocity, cognitive burden, and schedule buffer.',
      status: 'Active Telemetry'
    },
    {
      id: 'mod_slack_liquidity',
      name: 'Slack Liquidity',
      formula: 'SL = (Uncommitted Engineer Hours / Total Available Capacity) * 100',
      desc: 'Liquid buffer capacity maintained across the engineering org to absorb unplanned incidents without blowing critical path milestones.',
      status: '15% Statutory Floor'
    },
    {
      id: 'mod_volatility_index',
      name: 'Volatility Index',
      formula: 'VI = Standard Deviation(Cycle Time) / Median(Cycle Time)',
      desc: 'Quantifies day-to-day variance in delivery pipelines, identifying friction spikes, review bottlenecks, and author monopolization.',
      status: 'Capped at < 18%'
    },
    {
      id: 'mod_critical_path',
      name: 'Critical Path Forecast',
      formula: 'CPF = Monte Carlo DAG Path Analysis across 1,000 Sim Runs',
      desc: 'Continuous dependency graph tracking determining the singular mathematical sequence of pull requests governing ship date.',
      status: '94.2% On-Time Precision'
    },
    {
      id: 'mod_burnout_index',
      name: 'Burnout Index',
      formula: 'BI = f(Weekend Commits, Context Switches, On-Call Hours, After-Hours PR Reviews)',
      desc: 'Algorithmic early-warning detection tracking cognitive exhaustion before attrition and severe incident rates escalate.',
      status: 'Zero Hazard Zone'
    },
    {
      id: 'mod_autonomy_engine',
      name: 'Autonomy Engine',
      formula: 'Closed-loop automated intervention execution via GitHub/GitLab integrations',
      desc: 'Self-executing protocol layer that autonomously redistributes PR reviews, rebalances sprint tickets, and sheds non-critical load.',
      status: 'Level 3 Autonomous'
    },
    {
      id: 'mod_governance_rulepack',
      name: 'Governance RulePack v1',
      formula: 'Declarative YAML/JSON policies enforced via CI/CD gates',
      desc: 'Enterprise statutory policy layer ensuring organizations never violate constitutional stability bounds.',
      status: 'Constitution v1.2'
    },
    {
      id: 'mod_intelligence_layer',
      name: 'Intelligence Layer',
      formula: 'Predictive Bayesian modeling + LLM dependency analysis',
      desc: 'Forward forecasting engine projecting delivery milestones 90 days out and modeling organizational impact.',
      status: '90-Day Horizon'
    },
    {
      id: 'mod_esa_cert',
      name: 'ESA Certification',
      formula: 'Comprehensive 4-stage audit against ISO/IEEE-grade engineering benchmarks',
      desc: 'Formal institutional seal certifying an enterprise engineering organization as Governed, Stable, or Autonomous.',
      status: 'Institutional Benchmark'
    }
  ],
  autonomyProtocols: [
    {
      name: 'Load Rebalancing',
      trigger: 'Any engineer assigned > 120% of median team story points or > 5 open active reviews',
      action: 'Automatically identifies adjacent peers with > 25% slack liquidity and safely reassigns non-critical pull requests and tickets.'
    },
    {
      name: 'Slack Redistribution',
      trigger: 'Squad liquidity drops below statutory 15% minimum during active release sprint',
      action: 'Institutes automated triage: downgrades P3/P4 backlog tasks to next cycle, preserving liquid engineering reserve.'
    },
    {
      name: 'Burnout Mitigation',
      trigger: 'Burnout Index exceeds threshold (e.g. > 3 consecutive late-night PR merges or weekend review alerts)',
      action: 'Enforces mandatory focus blackout periods, suppresses non-urgent Slack notifications, and halts new task routing for 48 hours.'
    },
    {
      name: 'Critical Path Stabilization',
      trigger: 'PR on the calculated critical path remains blocked in review queue > 6 hours',
      action: 'Elevates PR priority, pages secondary qualified reviewer, and unlocks parallelized CI build runners automatically.'
    },
    {
      name: 'Delivery Acceleration',
      trigger: 'Release risk variance drops below 8% and Stability Score exceeds 85/100',
      action: 'Dynamically opens deployment concurrency throttle, enabling continuous automated production canary rollouts.'
    }
  ],
  governanceRulePack: [
    { rule: 'RULE-01: Statutory Slack Floor', parameter: 'MIN_SLACK_LIQUIDITY >= 15.0%', enforcement: 'Hard gate on sprint planning. Disallows overcommit.' },
    { rule: 'RULE-02: Volatility Cap', parameter: 'MAX_CYCLE_TIME_VARIANCE <= 18.0%', enforcement: 'Flags sprint tickets lacking clear acceptance criteria.' },
    { rule: 'RULE-03: Critical Path Guardrail', parameter: 'MAX_BLOCKER_AGE_HOURS <= 6.0', enforcement: 'Escalates unreviewed critical path changes to tech leads.' },
    { rule: 'RULE-04: Burnout Threshold Limit', parameter: 'MAX_AFTER_HOURS_COMMITS <= 2 / week', enforcement: 'Requires VP sign-off to override on-call rotations.' },
    { rule: 'RULE-05: Author Monopoly Bound', parameter: 'MAX_SINGLE_AUTHOR_CORE_COMMITS <= 35.0%', enforcement: 'Enforces mandatory pairing to eliminate Bus Factor risk.' }
  ]
};

// SECTION 3: BUSINESS SYSTEM DATA
export const BUSINESS_SYSTEM_DATA = {
  pricingTiers: [
    {
      id: 'tier_pilot',
      name: 'Enterprise Pilot',
      price: '$0',
      period: '30 Days Free',
      target: 'Up to 3 engineering squads testing Stability OS',
      features: [
        'Read-only GitHub/GitLab telemetry ingestion',
        'Real-time Stability Score (0-100)',
        'Slack Liquidity & Volatility Index',
        'Initial Engineering Stability Assessment (ESA)',
        '30-Day Executive Findings Report',
        'Standard Community Support'
      ],
      cta: 'Start Free Pilot',
      badge: 'Zero Risk'
    },
    {
      id: 'tier_core',
      name: 'Stability Core',
      price: '$1,500',
      period: 'per month',
      target: 'Growing engineering orgs (up to 50 engineers)',
      features: [
        'Continuous Stability Score & Team Barometers',
        'Slack Liquidity Floor monitoring',
        'Critical Path Mapping & alerts',
        'Burnout Index early-warning flags',
        'Standard RulePack v1 compliance checks',
        'Weekly executive health digest',
        'Email & Slack Support (12h SLA)'
      ],
      cta: 'Deploy Core',
      badge: 'Essential'
    },
    {
      id: 'tier_governance',
      name: 'Governance + Autonomy',
      price: '$3,500',
      period: 'per month',
      target: 'Mid-market & scaling enterprises (50-250 engineers)',
      features: [
        'All Stability Core capabilities',
        'Full Autonomy Engine protocol execution',
        'Automated Load Rebalancing & PR redistribution',
        'Enforced Governance RulePack v1 in CI/CD',
        'Critical Path automated stabilization',
        'Bi-weekly autonomous tuning cycles',
        'Dedicated Technical Account Manager (4h SLA)'
      ],
      cta: 'Activate Autonomy',
      badge: 'Most Popular'
    },
    {
      id: 'tier_intelligence',
      name: 'Full Intelligence',
      price: '$6,000',
      period: 'per month',
      target: 'Large enterprises & regulated institutions (250+ engineers)',
      features: [
        'All Governance + Autonomy capabilities',
        '90-Day Predictive Delivery Risk Forecasting',
        'Monte Carlo schedule simulation engine',
        'Quarterly Institutional ESA Certification Audit',
        'Custom Governance RulePack authoring',
        'On-premise / VPC Single-Tenant deployment options',
        '24/7/365 Dedicated Enterprise Executive SLA (1h)'
      ],
      cta: 'Contact Enterprise',
      badge: 'Institutional'
    }
  ],
  enterpriseSLA: {
    telemetryUptime: '99.95% Availability',
    updateFrequency: 'Daily stability updates generated at 06:00 UTC',
    autonomyCadence: 'Weekly automated autonomy rebalancing cycles every Wednesday',
    esaDelivery: 'Full comprehensive ESA delivered within 30 days of contract execution',
    supportResponse: '1 hour for P1 production issues; 4 hours for standard technical queries'
  },
  salesPlaybook: {
    stages: [
      { stage: '1. Discovery', goal: 'Identify hidden volatility, missed ship dates, and engineer burnout.', script: '"How many times in the last 2 quarters has a critical release slipped unexpectedly despite your teams working overtime?"' },
      { stage: '2. Executive Demo', goal: 'Demonstrate real-time Stability Score, Slack Liquidity, and Autonomous Rebalancing.', script: '"Notice how when Team Alpha drops below 15% slack, FlowForge instantly flags the critical path hazard before tickets slip."' },
      { stage: '3. 30-Day Pilot', goal: 'Ingest live Git metadata with zero friction; compute baseline organizational equilibrium.', script: '"We require zero code changes or agent installs—just 1 OAuth click to map your 30-day stability score."' },
      { stage: '4. ESA Presentation', goal: 'Deliver comprehensive board-level Engineering Stability Assessment report.', script: '"Here is the empirical proof: your team lost 340 hours to context switching and author monopolization last month alone."' },
      { stage: '5. Expansion', goal: 'Scale from pilot squads across entire engineering department.', script: '"Now that Payments and Core Infrastructure are governed, expanding to Mobile and Web brings total enterprise parity."' },
      { stage: '6. Institutionalization', goal: 'Embed Governance RulePack v1 as the company-wide standard.', script: '"Stability OS is now codified into your quarterly executive review and board reporting."' }
    ],
    objectionHandling: [
      {
        objection: '"We already have Jira and Datadog/New Relic."',
        response: 'Jira tracks what you plan to do; Datadog tracks what your servers do. Neither measures whether your human engineering system is structurally stable, liquid, or about to burn out. FlowForge is the missing Stability OS.'
      },
      {
        objection: '"Will our engineers feel like this is Big Brother surveillance?"',
        response: 'FlowForge explicitly protects engineers. It does not measure keystrokes or individual lines of code—it measures organizational health, guarantees a 15% slack floor, and halts burnout-inducing overtime automatically.'
      },
      {
        objection: '"Our budgets are frozen for new SaaS tooling."',
        response: 'A single delayed tier-1 enterprise release or losing 2 senior engineers to burnout costs $400,000+. FlowForge pays for itself in the first 14 days by preventing critical path slippage.'
      }
    ]
  },
  onboardingHandbook: [
    { week: 'Week 1', phase: 'Baseline Ingestion', actions: ['Connect GitHub/GitLab repositories via secure read-only app', 'Map squad structures, on-call schedules, and milestone dates', 'Establish initial 30-day baseline Stability Score without altering workflows'] },
    { week: 'Week 2', phase: 'Governance Configuration', actions: ['Review initial Volatility Index and team Slack Liquidity levels', 'Tune Governance RulePack v1 thresholds (15% slack floor, 18% volatility cap)', 'Conduct engineering all-hands briefing on how FlowForge protects team sanity'] },
    { week: 'Week 3', phase: 'Autonomy Activation', actions: ['Enable Automated Load Rebalancing and PR redistribution protocols', 'Test closed-loop mitigation in staging environment', 'Review first weekly autonomy rebalancing cycle with engineering directors'] },
    { week: 'Week 4', phase: 'Intelligence & ESA Delivery', actions: ['Unlock 90-day predictive schedule forecasting', 'Deliver formal executive Engineering Stability Assessment (ESA) report', 'Present board-ready certification score to CTO / VP Engineering'] }
  ]
};

// 40 Psychometrically calibrated questions for FCSA Certification Exam
export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  domain: 'Stability Core' | 'Governance' | 'Autonomy' | 'Intelligence' | 'ESA Audit';
}

export const FCSA_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question: "What is the primary definition of an Engineering Stability Platform (ESP)?",
    options: [
      "A code compilation acceleration cache",
      "A software category that measures, governs, and automates engineering operational equilibrium",
      "A replacement for infrastructure APM and log monitoring",
      "An automated payroll and timesheet management tool"
    ],
    correctIndex: 1,
    explanation: "ESP is the software category dedicated to stabilizing human and operational engineering workflows through measurement, governance, and autonomy.",
    domain: "Stability Core"
  },
  {
    id: 2,
    question: "Under FlowForge Governance RulePack v1, what is the mandatory statutory floor for Slack Liquidity?",
    options: ["5%", "10%", "15%", "25%"],
    correctIndex: 2,
    explanation: "RulePack v1 enforces a strict 15% statutory slack floor to ensure engineering squads retain sufficient liquidity to absorb unplanned incidents.",
    domain: "Governance"
  },
  {
    id: 3,
    question: "How is the Volatility Index (VI) mathematically formulated in FlowForge?",
    options: [
      "Total commits divided by total pull requests",
      "Standard deviation of cycle time divided by median cycle time",
      "Average pull request comments multiplied by review duration",
      "Number of test failures per deployment"
    ],
    correctIndex: 1,
    explanation: "VI = Standard Deviation(Cycle Time) / Median(Cycle Time), capturing true delivery predictability regardless of team velocity.",
    domain: "Stability Core"
  },
  {
    id: 4,
    question: "Which autonomy protocol triggers when a critical path pull request remains in review queue for longer than 6 hours?",
    options: [
      "Slack Liquidity Freeze",
      "Author Monopolization Override",
      "Critical Path Stabilization",
      "Emergency Sprint Cancellation"
    ],
    correctIndex: 2,
    explanation: "Critical Path Stabilization immediately elevates PR priority, pages secondary qualified reviewers, and boosts CI build slots.",
    domain: "Autonomy"
  },
  {
    id: 5,
    question: "What is the passing score threshold for the FlowForge Certified Stability Architect (FCSA) exam?",
    options: ["70%", "75%", "80%", "90%"],
    correctIndex: 2,
    explanation: "The FCSA exam requires an 80% passing grade (32 out of 40 questions answered correctly) to ensure rigorous mastery.",
    domain: "ESA Audit"
  },
  {
    id: 6,
    question: "What does the Burnout Index primarily measure?",
    options: [
      "Typing speed and daily keystrokes",
      "Cognitive exhaustion patterns such as after-hours commits, weekend reviews, and context switches",
      "Total number of Jira tickets completed",
      "Hours spent in Zoom video conferences"
    ],
    correctIndex: 1,
    explanation: "The Burnout Index tracks empirical exhaustion markers (after-hours PR reviews, weekend pushes, rapid context-switching).",
    domain: "Stability Core"
  },
  {
    id: 7,
    question: "In the 5-phase Autonomous Engineering Roadmap, what is the key focus of Phase 2 (Months 3–6)?",
    options: [
      "Predictive Machine Learning algorithms",
      "Governance and RulePack v1 threshold enforcement",
      "Initial read-only telemetry measurement",
      "Global Enterprise Certification"
    ],
    correctIndex: 1,
    explanation: "Phase 2 establishes governance: codifying the 15% slack floor, volatility caps, and critical path protection rules.",
    domain: "Governance"
  },
  {
    id: 8,
    question: "What is the recommended maximum volatility cap threshold under RulePack v1?",
    options: ["< 18%", "< 30%", "< 45%", "< 5%"],
    correctIndex: 0,
    explanation: "RulePack v1 caps delivery cycle variance at < 18% to prevent erratic sprint commitments.",
    domain: "Governance"
  },
  {
    id: 9,
    question: "What action does the Load Rebalancing protocol take when an engineer exceeds 120% of median team work?",
    options: [
      "Terminates the engineer's pull request permissions",
      "Identifies adjacent peers with >25% slack liquidity and reallocates non-critical PRs and reviews",
      "Deletes low-priority Jira tickets",
      "Sends a reprimand email to the team manager"
    ],
    correctIndex: 1,
    explanation: "Load Rebalancing transparently and safely redistributes non-critical review burden to teammates with liquid bandwidth.",
    domain: "Autonomy"
  },
  {
    id: 10,
    question: "How does FlowForge differ from traditional APM tools like Datadog or New Relic?",
    options: [
      "FlowForge only runs on Linux servers",
      "APM monitors server infrastructure; FlowForge monitors and stabilizes the human and operational delivery system",
      "FlowForge costs ten times more than APM",
      "FlowForge replaces the need for software testing"
    ],
    correctIndex: 1,
    explanation: "APM monitors infrastructure health; FlowForge stabilizes human development workflows, queue health, and schedule predictability.",
    domain: "Stability Core"
  },
  {
    id: 11,
    question: "What is the primary deliverable of the FlowForge 30-Day Enterprise Pilot?",
    options: [
      "A complete rewrite of the customer codebase",
      "A comprehensive board-level Engineering Stability Assessment (ESA) report",
      "A mandatory multi-year cloud hosting contract",
      "An automated employee termination list"
    ],
    correctIndex: 1,
    explanation: "The 30-Day Pilot culminates in a board-ready ESA report mapping stability scores, hidden friction, and ROI opportunities.",
    domain: "ESA Audit"
  },
  {
    id: 12,
    question: "Under the FlowForge Partner Network (FPN), what are the four tiered partnership levels?",
    options: [
      "Bronze, Silver, Gold, Platinum",
      "Registered, Certified, Advanced, Elite",
      "Associate, Professional, Expert, Master",
      "Tier 1, Tier 2, Tier 3, Tier 4"
    ],
    correctIndex: 1,
    explanation: "FPN recognizes four progressive levels: Registered, Certified, Advanced, and Elite.",
    domain: "ESA Audit"
  },
  {
    id: 13,
    question: "What is the primary mathematical purpose of Slack Liquidity in engineering organizations?",
    options: [
      "To encourage engineers to play video games during work hours",
      "To provide an operational buffer that absorbs unpredictable interrupts without breaking critical path commitments",
      "To slow down deployment velocity intentionally",
      "To reduce software licensing costs"
    ],
    correctIndex: 1,
    explanation: "Like financial cash reserves, Slack Liquidity allows teams to absorb urgent production defects without derailing committed releases.",
    domain: "Stability Core"
  },
  {
    id: 14,
    question: "What does the Author Monopoly Bound guard against?",
    options: [
      "Copyright infringement by external contributors",
      "Over-dependence on a single engineer (Bus Factor risk) where one person writes >35% of core code without paired review",
      "Open source licensing conflicts",
      "Duplicate git commit messages"
    ],
    correctIndex: 1,
    explanation: "Author Monopolization caps single-engineer ownership at 35% on core modules to prevent severe operational bottlenecks.",
    domain: "Governance"
  },
  {
    id: 15,
    question: "In the FlowForge Brand Visual System, what are the three primary sovereign hex colors?",
    options: [
      "#FF0000 (Red), #00FF00 (Green), #0000FF (Blue)",
      "#1A3D7C (Stability Blue), #D9A441 (Autonomy Gold), #1FB8A6 (Intelligence Teal)",
      "#000000 (Black), #FFFFFF (White), #888888 (Gray)",
      "#6200EE (Purple), #03DAC6 (Teal), #B00020 (Crimson)"
    ],
    correctIndex: 1,
    explanation: "FlowForge's brand visual tokens are Stability Blue (#1A3D7C), Autonomy Gold (#D9A441), and Intelligence Teal (#1FB8A6).",
    domain: "Stability Core"
  },
  {
    id: 16,
    question: "What is the role of the FlowForge Intelligence Layer (Phase 4 of the roadmap)?",
    options: [
      "To automatically generate social media posts about sprint velocity",
      "To project delivery risk curves and stability forecasts 90 days in advance using Bayesian modeling",
      "To replace human engineers with automated coding scripts",
      "To conduct automated video interviews for job applicants"
    ],
    correctIndex: 1,
    explanation: "The Intelligence Layer projects schedule fragility and delivery risks 90 days out based on systemic queuing data.",
    domain: "Intelligence"
  },
  {
    id: 17,
    question: "What is the standard price for the FlowForge 'Governance + Autonomy' enterprise tier?",
    options: ["$500/mo", "$1,500/mo", "$3,500/mo", "$6,000/mo"],
    correctIndex: 2,
    explanation: "Governance + Autonomy is priced at $3,500/mo, offering automated closed-loop rebalancing and CI/CD enforcement.",
    domain: "Governance"
  },
  {
    id: 18,
    question: "When should an enterprise engineering organization seek Level 5 (Intelligent) maturity on the ESP model?",
    options: [
      "On Day 1 before collecting any Git telemetry",
      "After measuring, establishing governance, and mastering Level 3 autonomy (typically months 18–24)",
      "Only after firing half of their engineering staff",
      "Never; Level 5 is purely theoretical"
    ],
    correctIndex: 1,
    explanation: "Maturity progression must follow the sequential order: Measurement -> Governance -> Autonomy -> Intelligence -> Certification.",
    domain: "Intelligence"
  },
  {
    id: 19,
    question: "What action does the Burnout Mitigation protocol take when hazard thresholds are breached?",
    options: [
      "Automatically writes angry emails to the executive board",
      "Enforces mandatory focus periods, pauses non-urgent notifications, and stops routing new pull requests for 48 hours",
      "Locks the office doors",
      "Lowers salary rates"
    ],
    correctIndex: 1,
    explanation: "Burnout mitigation enforces focus recovery windows, muting non-essential notifications and preventing ticket overloading.",
    domain: "Autonomy"
  },
  {
    id: 20,
    question: "Which Monte Carlo simulation volume is typically run by FlowForge's Critical Path Forecast?",
    options: ["10 simulations", "100 simulations", "1,000 simulations", "1,000,000 simulations"],
    correctIndex: 2,
    explanation: "FlowForge executes 1,000 Monte Carlo simulations per cycle across the active dependency DAG to compute schedule bounds.",
    domain: "Intelligence"
  },
  {
    id: 21,
    question: "In the Enterprise Contract (MSA), what is the guaranteed turnaround time for the initial ESA deliverable?",
    options: ["7 days", "14 days", "30 days", "90 days"],
    correctIndex: 2,
    explanation: "The enterprise Master Services Agreement binds FlowForge to deliver the comprehensive ESA within 30 days.",
    domain: "ESA Audit"
  },
  {
    id: 22,
    question: "What is the tagline of the FlowForge global marketing campaign?",
    options: [
      "Code Faster, Sleep Less",
      "Stability Starts Here — Engineering stability in 30 days",
      "Move Fast and Break Things",
      "The Ultimate AI Copilot"
    ],
    correctIndex: 1,
    explanation: "'Stability Starts Here' with the explicit promise of 'Engineering stability in 30 days.'",
    domain: "Stability Core"
  },
  {
    id: 23,
    question: "What is the core argument in the FlowForge Engineering Economics Whitepaper regarding burnout?",
    options: [
      "Burnout is an inevitable consequence of competitive capitalism",
      "Replacing a senior engineer lost to burnout costs 1.5x-2x annual salary ($250k-$400k), making stability an ROI center",
      "Burnout can be solved by providing free coffee and snacks",
      "Burnout does not impact delivery timelines"
    ],
    correctIndex: 1,
    explanation: "Engineering stability is an economic lever: attrition, late delivery, and downtime represent millions in preventable loss.",
    domain: "ESA Audit"
  },
  {
    id: 24,
    question: "Which partner certification is tailored specifically for enterprise systems integrators deploying RulePack v1?",
    options: [
      "FlowForge Certified Stability Architect (FCSA)",
      "FlowForge Certified Governance Specialist (FCGS)",
      "FlowForge Certified Autonomy Engineer (FCAE)",
      "FlowForge Sales Professional (FSP)"
    ],
    correctIndex: 1,
    explanation: "The FCGS certification validates expertise in tailoring and enforcing RulePack v1 policies in enterprise CI/CD environments.",
    domain: "Governance"
  },
  {
    id: 25,
    question: "What is the primary message of the FlowForge Category Manifesto regarding engineering teams?",
    options: [
      "Engineering teams must produce 50% more code each sprint",
      "Engineering teams deserve stability; burnout is predictable, delivery risk is preventable, and slack is strategic",
      "Engineers should be replaced by generative AI agents",
      "Sprint velocity is the only metric that matters"
    ],
    correctIndex: 1,
    explanation: "The manifesto champions human engineering dignity: stability is strategic, burnout is preventable, and slack is liquid reserve.",
    domain: "Stability Core"
  },
  {
    id: 26,
    question: "Under the FlowForge Onboarding Handbook, what occurs during Week 1?",
    options: [
      "Immediate automated rewriting of all production code",
      "Non-intrusive Git metadata ingestion and establishing a 30-day baseline Stability Score",
      "Replacing the VP of Engineering",
      "Shutting down the CI/CD pipeline for testing"
    ],
    correctIndex: 1,
    explanation: "Week 1 is dedicated to zero-friction baseline telemetry ingestion without altering any active developer workflows.",
    domain: "ESA Audit"
  },
  {
    id: 27,
    question: "What is the internal operational cadence followed by FlowForge teams every Wednesday?",
    options: [
      "Internal all-hands pizza lunch",
      "Closed-loop Autonomy Cycle execution and tuning",
      "Mandatory code freeze for 24 hours",
      "Annual performance appraisals"
    ],
    correctIndex: 1,
    explanation: "Wednesday is dedicated to running and calibrating the closed-loop autonomy cycle across all monitored pipelines.",
    domain: "Autonomy"
  },
  {
    id: 28,
    question: "What is the key difference between Agile velocity and FlowForge's Stability Score?",
    options: [
      "Agile velocity measures story points completed; Stability Score measures organizational equilibrium, buffer health, and delivery certainty",
      "Velocity is measured in dollars; Stability Score is measured in percentages",
      "Agile velocity is automated; Stability Score is manual",
      "There is no difference"
    ],
    correctIndex: 0,
    explanation: "Velocity measures speed of arbitrary points; Stability Score measures systemic equilibrium, buffer reserves, and true risk.",
    domain: "Stability Core"
  },
  {
    id: 29,
    question: "In the 16-Slide Pitch Deck, what is the core market size (TAM) highlighted for the ESP category?",
    options: ["$500 Million", "$2.4 Billion", "$28+ Billion enterprise devops and software governance market", "$1 Trillion"],
    correctIndex: 2,
    explanation: "FlowForge addresses the $28B+ global engineering operations, delivery governance, and human capital sustainability market.",
    domain: "ESA Audit"
  },
  {
    id: 30,
    question: "What is the primary action taken during the Delivery Acceleration protocol?",
    options: [
      "Skips all unit tests to deploy faster",
      "Increases deployment concurrency and safely accelerates release pipelines when risk variance drops < 8%",
      "Mandates overtime for all developers",
      "Cancels staging verification"
    ],
    correctIndex: 1,
    explanation: "When stability score is high and variance is low, FlowForge safely widens deployment throttles for continuous canary releases.",
    domain: "Autonomy"
  },
  {
    id: 31,
    question: "How does FlowForge handle code privacy and security in enterprise environments?",
    options: [
      "FlowForge downloads and stores all customer proprietary source code on public servers",
      "FlowForge ingests strictly metadata (timestamps, PR states, author IDs) and never reads raw proprietary source code",
      "FlowForge requires root access to customer AWS master accounts",
      "FlowForge sells developer commit data to recruiters"
    ],
    correctIndex: 1,
    explanation: "FlowForge operates on zero-code-access metadata telemetry, ensuring strict SOC 2, HIPAA, and GDPR compliance.",
    domain: "Governance"
  },
  {
    id: 32,
    question: "What is an ESA Scorecard level of 'Governed' indicative of?",
    options: [
      "The engineering team has high volatility with zero rules",
      "The organization has deployed RulePack v1, maintains a 15% slack floor, and proactively manages critical path risks",
      "The organization has achieved full AI singularity",
      "The organization failed its security audit"
    ],
    correctIndex: 1,
    explanation: "'Governed' indicates active policy enforcement: slack floors, variance caps, and critical path protection gates.",
    domain: "ESA Audit"
  },
  {
    id: 33,
    question: "Which stakeholder is the primary economic buyer targeted in the FlowForge Enterprise Sales Playbook?",
    options: ["Junior QA Tester", "VP of Engineering / Chief Technology Officer (CTO)", "Scrum Master", "Office Manager"],
    correctIndex: 1,
    explanation: "The VP of Engineering / CTO owns delivery predictability, engineer retention, and board-level release commitments.",
    domain: "Stability Core"
  },
  {
    id: 34,
    question: "What is the role of Slack Redistribution when a squad's liquidity drops below 15% during a sprint?",
    options: [
      "Automatically fires the team manager",
      "Tunnels non-critical P3/P4 backlog items to subsequent cycles to restore the 15% operational buffer",
      "Forces developers to work overnight",
      "Freezes git repository access"
    ],
    correctIndex: 1,
    explanation: "Slack Redistribution sheds secondary workload, protecting the primary critical path from fatal cascade delays.",
    domain: "Autonomy"
  },
  {
    id: 35,
    question: "In Chapter 3 of the ESP Category Bible, what are the 5 architectural layers of an ESP?",
    options: [
      "Input, Output, Network, Database, Storage",
      "Measurement, Governance, Autonomy, Intelligence, Certification",
      "Frontend, Backend, Database, Cloud, Mobile",
      "Plan, Code, Build, Test, Release"
    ],
    correctIndex: 1,
    explanation: "The canonical 5-layer ESP architecture: Layer 1 Measurement, Layer 2 Governance, Layer 3 Autonomy, Layer 4 Intelligence, Layer 5 Certification.",
    domain: "Stability Core"
  },
  {
    id: 36,
    question: "What does the Critical Path Forecast do when a dependency cycle is detected in a multi-team release DAG?",
    options: [
      "Deletes all conflicting git branches",
      "Calculates the critical bottleneck node, issues an immediate DAG topological warning, and isolates the blocking pull request",
      "Ignores the circular dependency",
      "Shuts down the continuous integration cluster"
    ],
    correctIndex: 1,
    explanation: "Critical Path Forecast isolates the cycle, alerts the respective team leads, and highlights the exact edge causing deadlock.",
    domain: "Intelligence"
  },
  {
    id: 37,
    question: "What is the primary benefit of co-selling under the FlowForge Partner Program (FPN) Elite tier?",
    options: [
      "Free FlowForge t-shirts",
      "Up to 30% recurring margin share, dedicated executive sponsor, and joint marketing fund allocations",
      "Ability to rebrand FlowForge under an unauthorized label",
      "Guaranteed seat on the FlowForge Board of Directors"
    ],
    correctIndex: 1,
    explanation: "Elite partners receive high recurring revenue shares, joint go-to-market backing, and executive co-selling resources.",
    domain: "ESA Audit"
  },
  {
    id: 38,
    question: "What is the core opening statement of the FlowForge Analyst Keynote?",
    options: [
      "'We built a faster compiler for C++.'",
      "'Engineering teams today operate under extreme pressure — rising volatility, increasing burnout, and unpredictable delivery timelines. Yet despite decades of innovation, one critical capability has never existed: Engineering Stability.'",
      "'Agile is dead and everyone should use Waterfall.'",
      "'Software development cannot be predicted.'"
    ],
    correctIndex: 1,
    explanation: "The Analyst Keynote frames the structural historical gap across DevOps, Observability, and Agile: human and operational instability.",
    domain: "Stability Core"
  },
  {
    id: 39,
    question: "Under the FlowForge Internal Operations System, what takes place during the Friday Forecast Review?",
    options: [
      "Weekly team happy hour only",
      "Auditing 90-day predictive risk curves, assessing scheduled delivery certainty, and tuning Bayesian model weights",
      "Deleting all completed tickets",
      "Manually estimating next year's budget"
    ],
    correctIndex: 1,
    explanation: "Friday Forecast Review examines forward-looking risk curves and verifies delivery precision across all client workspaces.",
    domain: "Intelligence"
  },
  {
    id: 40,
    question: "Why is 'Engineering Stability' considered the definitive missing layer in modern software delivery?",
    options: [
      "Because existing tools measure software artifacts (code, servers, tickets), but no platform until FlowForge measured and autonomously stabilized the human-operational system that creates them",
      "Because compilers have reached their theoretical speed limit",
      "Because developers refuse to use version control systems",
      "Because cloud computing has become obsolete"
    ],
    correctIndex: 0,
    explanation: "FlowForge defines ESP because it addresses the core operational equilibrium of the engineering organization itself.",
    domain: "Stability Core"
  }
];

// 16-Slide Enterprise Pitch Deck Data
export interface PitchSlide {
  slideNumber: number;
  title: string;
  subtitle: string;
  category: string;
  points: string[];
  callout: string;
  presenterNote: string;
}

export const PITCH_DECK_SLIDES: PitchSlide[] = [
  {
    slideNumber: 1,
    title: "FlowForge: The Stability OS",
    subtitle: "Creating the Engineering Stability Platform (ESP) Category",
    category: "Title",
    points: [
      "Engineering teams are in crisis: 83% report severe burnout",
      "Delivery dates slip by an average of 42% across enterprise software",
      "Introducing FlowForge: The first platform that measures, governs, and automates engineering stability"
    ],
    callout: "The Stability OS for Modern Engineering",
    presenterNote: "Open with calm authority. Frame this not as another developer tool, but as an essential operating system for human capital and delivery predictability."
  },
  {
    slideNumber: 2,
    title: "The Trillion-Dollar Dilemma",
    subtitle: "Decades of Tooling, Zero Operational Stability",
    category: "Problem",
    points: [
      "DevOps automated infrastructure deployment",
      "Observability gave us visibility into server logs and APM",
      "Agile and Jira gave us boards to track story points",
      "Yet software delivery remains erratic, fragile, and plagued by human exhaustion"
    ],
    callout: "We instrumented the servers, but neglected the engineering system.",
    presenterNote: "Emphasize that despite spending billions on tooling, the human and queue dynamics of engineering teams remain completely unmanaged."
  },
  {
    slideNumber: 3,
    title: "The Anatomy of Volatility",
    subtitle: "Why Engineering Projects Actually Fail",
    category: "Root Cause",
    points: [
      "Zero Slack Liquidity: Teams run at 100% scheduled capacity; any bug causes a cascade delay",
      "Unseen Critical Paths: PR review bottlenecks remain hidden until release day",
      "Author Monopolization: Key modules held hostage by single engineers (Bus Factor = 1)",
      "Cognitive Burnout: Late-night pushes and weekend fixes trigger catastrophic regressions"
    ],
    callout: "Operational fragility is mathematical, not accidental.",
    presenterNote: "Walk through the domino effect. When teams run at 100% utilization, queuing theory proves wait times approach infinity."
  },
  {
    slideNumber: 4,
    title: "Introducing FlowForge",
    subtitle: "The First Engineering Stability Platform (ESP)",
    category: "Solution",
    points: [
      "A closed-loop platform that brings mathematical equilibrium to software engineering",
      "Zero-friction telemetry: Connects to GitHub/GitLab in 60 seconds",
      "Continuous Stability Score: The Dow Jones Industrial Average for your engineering org",
      "Autonomous Execution: Closed-loop protocols that rebalance work before it breaks"
    ],
    callout: "Measurable. Governable. Automatable.",
    presenterNote: "Present the core vision. FlowForge is the missing nervous system that connects planning to actual delivery equilibrium."
  },
  {
    slideNumber: 5,
    title: "The 3 Core Pillars of FlowForge",
    subtitle: "Measurement → Governance → Autonomy",
    category: "Architecture",
    points: [
      "1. Measurement: Stability Score (0-100), Slack Liquidity, Volatility Index, Burnout Index",
      "2. Governance: RulePack v1 enforcing 15% slack floors and variance thresholds in CI/CD",
      "3. Autonomy: Closed-loop protocols that automatically redistribute reviews and balance sprint load"
    ],
    callout: "From passive observation to active autonomous protection.",
    presenterNote: "Highlight that unlike dashboards that just display red graphs, FlowForge takes closed-loop autonomous action."
  },
  {
    slideNumber: 6,
    title: "The Secret Weapon: Slack Liquidity",
    subtitle: "Why 15% Strategic Buffer Drives 2x Delivery Speed",
    category: "Core Metric",
    points: [
      "A highway operating at 100% capacity is a parking lot",
      "FlowForge maintains a mandatory 15% Slack Liquidity floor across all squads",
      "When unexpected outages occur, teams absorb them within buffer rather than slipping dates",
      "Delivery predictability increases by 68% in the first 60 days"
    ],
    callout: "Slack is not wasted time; it is operational liquidity.",
    presenterNote: "Use the highway traffic analogy. Everyone understands why 100% utilization destroys throughput in complex queues."
  },
  {
    slideNumber: 7,
    title: "The Autonomy Engine in Action",
    subtitle: "Closed-Loop Intervention Without Manager Overhead",
    category: "Technology",
    points: [
      "Load Rebalancing: Detects overloaded engineers and reassigns non-critical PRs to peers with slack",
      "Critical Path Stabilization: Paginates reviewers and boosts CI slots when milestone PRs stall",
      "Burnout Mitigation: Enforces 48-hour quiet periods when cognitive fatigue metrics spike",
      "Delivery Acceleration: Opens continuous canary deployment pipelines when risk drops < 8%"
    ],
    callout: "Self-stabilizing engineering operations.",
    presenterNote: "Explain how this eliminates manual triage meetings and protects managers from playing referee."
  },
  {
    slideNumber: 8,
    title: "Massive Enterprise ROI",
    subtitle: "The Economics of Engineering Stability",
    category: "Unit Economics",
    points: [
      "Burnout Prevention: Saving 2 senior engineers from quitting = $600,000 retained",
      "On-Time Delivery: Preventing a 3-week tier-1 product slip = $1,200,000 revenue impact",
      "Context Switch Elimination: 15% reclaimed developer capacity = $2,400,000 annual engineering value",
      "Total Annual Net ROI: > 14x against the FlowForge $42,000 annual enterprise contract"
    ],
    callout: "14x Proven Return on Investment.",
    presenterNote: "Anchor on the numbers. CTOs and CFOs immediately understand the massive waste in developer turnover and slipped commitments."
  },
  {
    slideNumber: 9,
    title: "Product Demonstration & Scorecard",
    subtitle: "The 30-Day Engineering Stability Assessment (ESA)",
    category: "Product",
    points: [
      "Single-click OAuth integration with GitHub Enterprise, GitLab, and Jira",
      "Zero agent installs, zero code modification required",
      "Instant 30-day retroactive analysis revealing hidden organizational friction",
      "Delivers the board-level ESA certification scorecard within 30 days"
    ],
    callout: "Board-Ready Engineering Governance.",
    presenterNote: "Showcase the simplicity of onboarding. Frictionless adoption is critical for enterprise software procurement."
  },
  {
    slideNumber: 10,
    title: "Market Opportunity (TAM)",
    subtitle: "$28B Global Engineering Governance Market",
    category: "Market Size",
    points: [
      "32 Million professional software developers globally growing at 8% CAGR",
      "Over $450 Billion spent annually on enterprise engineering payroll",
      "DevOps market: $14B | Observability market: $9B | Project Management: $5B",
      "FlowForge sits at the intersection: The sovereign Stability OS governing this expenditure"
    ],
    callout: "The definitive category defining the future of engineering work.",
    presenterNote: "Position FlowForge as the overarching governance layer above DevOps and APM tools."
  },
  {
    slideNumber: 11,
    title: "Go-to-Market & Sales Motion",
    subtitle: "Land & Expand Through Frictionless 30-Day Pilots",
    category: "GTM",
    points: [
      "Step 1: Free 30-Day Pilot for 3 squads (Zero risk, zero budget approval needed)",
      "Step 2: Deliver empirical ESA audit showing exact hours lost to volatility",
      "Step 3: Convert to $3,500/mo Governance + Autonomy contract",
      "Step 4: Expand department-wide to $6,000/mo Full Intelligence tier (138% Net Revenue Retention)"
    ],
    callout: "Frictionless Proof → Rapid Enterprise Expansion.",
    presenterNote: "Explain our high conversion rate. When a VP sees their own data showing $800k in lost hours, conversion is natural."
  },
  {
    slideNumber: 12,
    title: "Partner Ecosystem (FPN)",
    subtitle: "Global Systems Integrators as Category Evangelists",
    category: "Ecosystem",
    points: [
      "FlowForge Partner Network: Registered, Certified, Advanced, and Elite tiers",
      "Global consultancies deliver ESA audits as a high-margin advisory practice",
      "Certification ecosystem: FCSA, FCGS, FCAE certifications create industry standard",
      "FlowForge Global Partner Summit 2027 expanding international enterprise reach"
    ],
    callout: "Building the Global Stability Alliance.",
    presenterNote: "Show how GSIs like Accenture, Deloitte, and Slalom will package FlowForge ESA audits into their digital transformation offerings."
  },
  {
    slideNumber: 13,
    title: "Competitive Moat",
    subtitle: "Why FlowForge is Impossible to Replicate",
    category: "Moat",
    points: [
      "1. Proprietary Datasets: Multi-company telemetry on engineering stability queues",
      "2. Closed-Loop Autonomy: Competitors only chart graphs; FlowForge executes automated intervention",
      "3. Category Leadership: Defining the standards and certifications (ESP Category Bible & FCSA)",
      "4. Network Effects: Cross-company benchmarking and FFX capacity exchange protocols"
    ],
    callout: "Deep algorithmic and structural defensive moats.",
    presenterNote: "Emphasize our closed-loop autonomy. It takes years of calibration to safely automate PR review routing without developer pushback."
  },
  {
    slideNumber: 14,
    title: "Financial Projections",
    subtitle: "Scaling from $2.4M ARR to $48M ARR in 36 Months",
    category: "Financials",
    points: [
      "Year 1: $2.4M ARR (60 Enterprise Logos @ $40k ACV)",
      "Year 2: $11.8M ARR (210 Logos + 135% NRR Expansion)",
      "Year 3: $38.5M ARR (520 Logos + Global Partner Co-selling)",
      "Target Gross Margins: 84% | Customer Acquisition Payback: < 8 months"
    ],
    callout: "Best-in-class SaaS economics with high enterprise expansion.",
    presenterNote: "Walk through our capital efficiency. Our pilot-to-ESA motion keeps CAC low while ACV expands rapidly."
  },
  {
    slideNumber: 15,
    title: "The Leadership Team",
    subtitle: "Engineering Leaders, Systems Architects, Category Builders",
    category: "Team",
    points: [
      "Founders with 20+ years leading engineering organizations at hyperscale enterprises",
      "Deep expertise in queuing theory, distributed systems, and organizational behavioral economics",
      "Advisory board comprised of former Fortune 500 CTOs and Gartner research vice presidents"
    ],
    callout: "The right team to build the sovereign Stability OS.",
    presenterNote: "Highlight the combination of deep technical distributed systems knowledge and high-level enterprise executive gravitas."
  },
  {
    slideNumber: 16,
    title: "Join the Stability Movement",
    subtitle: "Investment & Category Partnership Opportunity",
    category: "Closing",
    points: [
      "Currently raising Series A to accelerate enterprise go-to-market and global partner expansion",
      "Engineering teams deserve stability. The category has arrived.",
      "FlowForge is the Stability OS. Let's build the future of engineering together."
    ],
    callout: "Stability is the Future of Software Delivery.",
    presenterNote: "Deliver the closing with calm, undeniable conviction. Thank the audience and transition to interactive Q&A."
  }
];

// SECTION 8: FULL MULTI-PAGE WEBSITE SIMULATOR CONTENT
export const WEBSITE_PAGES_DATA = {
  home: {
    heroHeading: "The Stability OS for Engineering Teams",
    heroSubheading: "Measure, govern, and autonomously stabilize software delivery. Eliminate burnout, guarantee a 15% slack floor, and hit every critical release with mathematical precision.",
    ctaPrimary: "Start Free 30-Day Pilot",
    ctaSecondary: "Explore Stability Core",
    metrics: [
      { label: "Predictability Boost", val: "+68%" },
      { label: "Burnout Reduction", val: "-44%" },
      { label: "Slack Floor", val: "15% Statutory" },
      { label: "Deployment Confidence", val: "99.4%" }
    ],
    featuresSummary: [
      { title: "Real-Time Stability Score", desc: "A unified 0-100 composite index tracking delivery equilibrium across every engineering squad." },
      { title: "Statutory Slack Liquidity", desc: "Strategic operational buffer that absorbs production emergencies without blowing delivery dates." },
      { title: "Closed-Loop Autonomy", desc: "Autonomous load rebalancing and pull request routing that prevents engineer exhaustion automatically." }
    ]
  },
  product: {
    title: "Comprehensive Stability Product Suite",
    subtitle: "From raw Git telemetry to autonomous closed-loop interventions.",
    modules: [
      { name: "Stability Score", desc: "Composite 0-100 index weighting slack, cycle variance, critical path, and burnout headroom." },
      { name: "Slack Liquidity", desc: "Statutory 15% buffer capacity ensuring teams never operate at congested 100% deadlock." },
      { name: "Volatility Index", desc: "Identifies cycle-time variance spikes and flags sprint commitments lacking clear requirements." },
      { name: "Critical Path Forecast", desc: "Continuous 1,000-run Monte Carlo simulation tracking the singular sequence of blocking reviews." },
      { name: "Autonomy Protocols", desc: "Self-executing interventions that balance workload, redistribute PR reviews, and shed low-priority tasks." },
      { name: "Intelligence Layer", desc: "Bayesian 90-day forward risk projections alerting CTOs to schedule fragility before tickets slip." },
      { name: "ESA Certification", desc: "Formal 30-day assessment benchmark certifying organizations across 5 maturity tiers." }
    ]
  },
  platform: {
    title: "Enterprise Architecture & Governance",
    subtitle: "Built for zero-friction adoption, bank-grade data privacy, and strict CI/CD enforcement.",
    pillars: [
      { title: "Zero-Code Telemetry", desc: "Read-only integration with GitHub Enterprise, GitLab, and Bitbucket. We never ingest or store your proprietary source code." },
      { title: "Governance RulePack v1", desc: "Declarative YAML policies that block sprint overcommit and enforce review distribution directly in pull request workflows." },
      { title: "Closed-Loop Autonomy Engine", desc: "Intelligent background rebalancing that shifts non-critical PR assignments to peers with excess slack." },
      { title: "Single-Tenant & VPC Options", desc: "Deploy in our SOC 2 Type II certified cloud or inside your own AWS, GCP, or Azure private perimeter." }
    ]
  },
  pricing: {
    title: "Predictable, High-ROI Enterprise Pricing",
    subtitle: "Start with a risk-free pilot, then scale across your organization.",
    tiersSummary: "From free pilot verification to full enterprise intelligence with 1-hour executive SLA."
  },
  esa: {
    title: "Engineering Stability Assessment (ESA)",
    subtitle: "The 30-day board-level audit that maps hidden operational friction and provides actionable remediation.",
    phases: [
      { name: "Phase 1: Telemetry Ingestion", desc: "60-second read-only connection maps historical and real-time git flow." },
      { name: "Phase 2: Fragility & Queue Audit", desc: "Identifies author monopolization, review deadlock, and burnout patterns." },
      { name: "Phase 3: Executive Scorecard", desc: "Presents overall Stability Score, maturity ranking, and economic loss analysis." },
      { name: "Phase 4: 30-Day Action Plan", desc: "Deploys RulePack v1 policies to immediately restore a 15% slack floor." }
    ]
  },
  about: {
    title: "About FlowForge",
    subtitle: "Pioneering the Engineering Stability Platform category.",
    mission: "To eliminate preventable human burnout and delivery volatility from modern software engineering.",
    manifestoExcerpt: "Engineering teams deserve stability. Burnout is predictable. Delivery risk is preventable. Slack is strategic. Autonomy is essential.",
    leadershipQuote: "We spent 20 years building software at scale and saw brilliant teams break under artificial deadline pressure. FlowForge is the Stability OS we always wished we had."
  },
  contact: {
    title: "Connect with FlowForge",
    subtitle: "Schedule your enterprise executive briefing or launch a free 30-day pilot.",
    hq: "FlowForge Global Headquarters, San Francisco, CA & London, UK",
    enterpriseEmail: "enterprise@flowforge.internal",
    pilotEmail: "pilot@flowforge.internal"
  }
};

// SECTION 10: INTERNAL OPERATIONS SYSTEM DATA
export const OPERATIONS_SYSTEM_DATA = {
  internalCadence: [
    {
      day: "Monday 09:00 UTC",
      name: "Weekly Stability Review",
      focus: "Cross-squad audit of Stability Scores (0-100), Slack Liquidity floors, and active blocker queues.",
      deliverable: "Squad Equilibrium Heatmap & Reallocation Plan"
    },
    {
      day: "Wednesday 14:00 UTC",
      name: "Closed-Loop Autonomy Cycle",
      focus: "Execute automated review rebalancing, redistribute non-critical PRs, and calibrate RulePack v1 thresholds.",
      deliverable: "Autonomy Execution Log & Review Throughput Report"
    },
    {
      day: "Friday 16:00 UTC",
      name: "Forward Forecast Review",
      focus: "Analyze 90-day Bayesian risk curves, Monte Carlo release probabilities, and address impending burnout spikes.",
      deliverable: "Executive 90-Day Schedule Predictability Forecast"
    }
  ],
  internalGovernance: [
    { title: "Statutory 15% Slack Reserve", desc: "No squad may schedule more than 85% of total capacity in any sprint. 15% is reserved for production resilience." },
    { title: "Volatility Index Bounds", desc: "Cycle-time variance must stay under 18%. Any sprint exceeding 18% automatically triggers story-point refinement." },
    { title: "Critical Path Maximum Delay", desc: "Any blocking PR on the critical path that exceeds 6 hours in review queue automatically pages a secondary reviewer." }
  ],
  internalIntelligence: [
    { title: "Burnout Curve Early Detection", desc: "Monitors late-night merges and weekend review spikes to trigger 48-hour quiet periods before employee attrition occurs." },
    { title: "Dependency Fragility Graph", desc: "Maps cross-squad microservice and API dependencies to identify single points of failure in delivery." },
    { title: "Predictive Delivery Confidence", desc: "Outputs a 94.2% accurate delivery window 60 days before major enterprise product milestones." }
  ]
};
