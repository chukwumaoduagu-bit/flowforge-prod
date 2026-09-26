// FlowForge Total Business Architecture — Part VII
// Investor Prospectus, Operational Playbook, AI Governance Charter, Full Company Handbook

export interface ProspectusFinancialYear {
  year: string;
  focus: string;
  targetARR: string;
  grossMargin: string;
  enterpriseCustomers: number;
  engineersProtected: string;
  netMargin: string;
  teamHeadcount: number;
}

export interface UseOfFundsItem {
  category: string;
  percentage: number;
  amountTarget: string;
  allocationDescription: string;
  keyDeliverables: string[];
}

export interface PlaybookCadenceItem {
  period: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Annual';
  timeSchedule: string;
  title: string;
  owner: string;
  inputs: string[];
  actions: string[];
  outputs: string[];
  governanceThreshold?: string;
}

export interface AIGovernanceLayer {
  layerNumber: number;
  name: string;
  scope: string;
  permittedActions: string[];
  prohibitedActions: string[];
  verificationCadence: string;
}

export interface HandbookDepartment {
  name: string;
  leadRole: string;
  mission: string;
  keyResponsibilities: string[];
  coreKPIs: string[];
}

export const FLOWFORGE_INVESTOR_PROSPECTUS = {
  documentId: "FF-PROSPECTUS-2027-V1",
  title: "FlowForge Investor Prospectus",
  subtitle: "The Stability OS for Engineering Teams & Category Leader in Engineering Stability Platforms (ESP)",
  entityDetails: {
    legalEntity: "CFO TAX PRO LLC (dba FlowForge)",
    headquarters: "Sachse, TX 75048, USA",
    founder: "Chuck",
    category: "Engineering Stability Platforms (ESP)",
    flagshipProduct: "Stability OS",
    targetRaise: "$15,000,000 Series A",
    preMoneyValuation: "$60,000,000",
    securityType: "Preferred Equity / SAFEs",
    mission: "Stabilize engineering teams worldwide."
  },
  executiveSummary: {
    lead: "FlowForge is the Stability OS for engineering teams — the first platform that measures load, predicts burnout, stabilizes delivery, and autonomously rebalances engineering operations. FlowForge created and leads the new category: Engineering Stability Platforms (ESP).",
    positioning: "FlowForge is positioned to become the global standard for engineering stability across enterprise technology organizations.",
    callout: "Building the global stability layer for modern software delivery."
  },
  investmentThesis: {
    coreProblem: "FlowForge solves the largest unaddressed problem in modern engineering: systemic operational and human instability.",
    whyFlowForgeWins: [
      {
        factor: "First-Mover Advantage in ESP",
        description: "Created and codified the Engineering Stability Platform category before incumbents realized developer burnout and volatility require an autonomous operating layer."
      },
      {
        factor: "Strong Founder Narrative",
        description: "Founded in Texas by Chuck under CFO TAX PRO LLC, driven by mathematical capacity governance rather than invasive developer surveillance."
      },
      {
        factor: "Clear Enterprise Value",
        description: "Immediate $250k+ hard cost savings per retained senior engineer, combined with guaranteed predictable software delivery schedules for executive leadership."
      },
      {
        factor: "High-Pressure Market Demand",
        description: "Severe macro pressures across enterprise teams facing shorter release windows, cloud complexity, and AI-accelerated pull request deluges."
      },
      {
        factor: "AI-Driven Autonomy Engine",
        description: "Closed-loop workload rebalancing, queue deflection, and capacity transfers that resolve operational bottlenecks automatically without manager intervention."
      },
      {
        factor: "High-Margin Recurring SaaS Revenue",
        description: "84%+ software gross margins structured across $1,500/mo, $3,500/mo, and $6,000/mo enterprise subscription clusters with high net revenue retention."
      },
      {
        factor: "Category Creation Momentum",
        description: "Backed by analyst briefings (Gartner, Forrester), professional partner certifications (FCSA, FCGS, FCAE), and the annual Global Stability Summit."
      }
    ]
  },
  marketOpportunity: {
    tam: { count: "20,000,000", label: "TAM", description: "Global software developers and engineering professionals" },
    sam: { count: "5,000,000", label: "SAM", description: "Enterprise and mid-market engineering teams in multi-squad environments" },
    som: { count: "500,000", label: "SOM", description: "High-pressure, cloud-native, and strictly regulated tech organizations" },
    dynamics: [
      "Engineering volatility is rising globally across distributed and hybrid microservice architectures.",
      "Burnout is increasing rapidly; industry developer turnover averages 13–18% with $250k+ per engineer replacement cost.",
      "Delivery pressure is intensifying as executive boards demand mathematically predictable delivery commitments.",
      "AI is entering engineering operations — AI code generators produce 3–5x more raw code, overwhelming human pull request review capacity.",
      "FlowForge is perfectly timed to serve as the stabilizing control plane for AI-augmented engineering."
    ]
  },
  productOverview: {
    name: "Stability OS",
    description: "The complete 9-primitive operating system that stabilizes engineering teams automatically:",
    primitives: [
      { name: "Stability Score", purpose: "Real-time 0–100 composite delivery health baseline across squads" },
      { name: "Slack Liquidity", purpose: "Quantified operational buffer reserve (15% statutory floor) preventing 100% capacity gridlock" },
      { name: "Volatility Index", purpose: "Cycle-time variance & instability detection constraining erratic sprint swings" },
      { name: "Critical Path Forecast", purpose: "Bayesian DAG delivery risk and bottleneck prediction guarding release milestones" },
      { name: "Burnout Index", purpose: "Leading human cognitive overload metric tracking off-hours strain and context switching" },
      { name: "Autonomy Engine", purpose: "Closed-loop automatic PR workload rebalancing and capacity redistribution" },
      { name: "Governance RulePack", purpose: "Statutory rules (RulePack v1) that enforce non-negotiable team health guardrails" },
      { name: "Intelligence Layer", purpose: "7, 14, and 30-day probabilistic forward forecasts of delivery and burnout risk" },
      { name: "ESA Certification", purpose: "30-day Enterprise Stability Audit and 4-tier board maturity credentials" }
    ]
  },
  businessModel: {
    structure: "Enterprise B2B SaaS Subscriptions with High Expansion Velocity",
    tiers: [
      {
        name: "Pilot Tier",
        price: "Free ($0)",
        duration: "30 Days",
        target: "Enterprise squads (10–30 engineers)",
        features: "Full 30-day onboarding, baseline telemetry, Enterprise Stability Audit (ESA) report"
      },
      {
        name: "Stability Core",
        price: "$1,500 / month",
        duration: "Annual contract ($18,000/yr)",
        target: "Growing engineering departments",
        features: "Stability Score, Slack Liquidity, Volatility Index, Critical Path Forecast"
      },
      {
        name: "Governance + Autonomy",
        price: "$3,500 / month",
        duration: "Annual contract ($42,000/yr)",
        target: "Mid-market & enterprise tech clusters",
        features: "All Core + Governance RulePack v1 + Closed-Loop Autonomy Engine"
      },
      {
        name: "Full Intelligence",
        price: "$6,000 / month",
        duration: "Multi-year enterprise agreement ($72,000/yr)",
        target: "Fortune 500 & high-stakes engineering orgs",
        features: "All Governance + 7/14/30-day Bayesian Forecasting + Burnout Curve + ESA Certification"
      }
    ],
    unitEconomics: {
      ltvCac: "5.8x",
      grossMargin: "84%+",
      paybackPeriod: "6.2 months",
      netRevenueRetention: "138%"
    }
  },
  financialProjections: [
    {
      year: "Year 1",
      focus: "Pilot Penetration & ESA Audits",
      targetARR: "$3,600,000",
      grossMargin: "82%",
      enterpriseCustomers: 85,
      engineersProtected: "15,000",
      netMargin: "-18%",
      teamHeadcount: 24
    },
    {
      year: "Year 2",
      focus: "Governance Adoption (RulePack v1)",
      targetARR: "$12,400,000",
      grossMargin: "84%",
      enterpriseCustomers: 260,
      engineersProtected: "58,000",
      netMargin: "+8%",
      teamHeadcount: 52
    },
    {
      year: "Year 3",
      focus: "Autonomy Rollout & Partner Co-Selling",
      targetARR: "$34,500,000",
      grossMargin: "85%",
      enterpriseCustomers: 640,
      engineersProtected: "185,000",
      netMargin: "+22%",
      teamHeadcount: 98
    },
    {
      year: "Year 4",
      focus: "Intelligence Dominance & Board Standards",
      targetARR: "$78,000,000",
      grossMargin: "86%",
      enterpriseCustomers: 1320,
      engineersProtected: "440,000",
      netMargin: "+28%",
      teamHeadcount: 160
    },
    {
      year: "Year 5",
      focus: "ESP Category Standardization",
      targetARR: "$145,000,000",
      grossMargin: "87%",
      enterpriseCustomers: 2450,
      engineersProtected: "950,000",
      netMargin: "+32%",
      teamHeadcount: 240
    }
  ] as ProspectusFinancialYear[],
  useOfFunds: [
    {
      category: "Engineering & Platform Scale",
      percentage: 35,
      amountTarget: "$5,250,000",
      allocationDescription: "Distributed DAG engine, multi-cloud enterprise VCS integrations, real-time telemetry processing",
      keyDeliverables: ["High-throughput telemetry ingestion pipeline", "Zero-trust SOC2 compliant enterprise connectors", "Sub-100ms autonomy rebalancing algorithms"]
    },
    {
      category: "AI Research & Bayesian Inference",
      percentage: 25,
      amountTarget: "$3,750,000",
      allocationDescription: "Probabilistic forward forecasting, burnout curve modeling, safe autonomy optimization",
      keyDeliverables: ["Statutory safety guardrails runtime", "7/14/30-day Bayesian predictive model", "Workload redistribution optimization solver"]
    },
    {
      category: "Enterprise Sales Expansion",
      percentage: 20,
      amountTarget: "$3,000,000",
      allocationDescription: "Direct enterprise sales reps, solutions engineering architects, customer stability directors",
      keyDeliverables: ["Quota-carrying enterprise sales pods", "Accelerated 30-day ESA audit delivery teams", "Executive customer success directors"]
    },
    {
      category: "Marketing & Category Launch",
      percentage: 10,
      amountTarget: "$1,500,000",
      allocationDescription: "'Stability Starts Here' campaign, analyst briefings, research reports",
      keyDeliverables: ["Gartner/Forrester category codification", "Global media placements and podcasts", "Executive research whitepapers"]
    },
    {
      category: "Partner Ecosystem (FPN)",
      percentage: 10,
      amountTarget: "$1,500,000",
      allocationDescription: "Global Partner Network, certification infrastructure, annual Global Stability Summit",
      keyDeliverables: ["FCSA/FCGS/FCAE examination portal", "System integrator co-selling incentives", "Annual Global Partner Summit event"]
    }
  ] as UseOfFundsItem[],
  risksAndMitigations: [
    {
      risk: "Market Education Required",
      severity: "Medium",
      mitigation: "Analyst Briefings — Ongoing briefings with Gartner, Forrester, and IDC to establish ESP as a distinct, essential operational category alongside Observability and DevOps."
    },
    {
      risk: "Category Creation Inertia",
      severity: "High",
      mitigation: "Stability Summit & Community — Convening enterprise CTOs, VPs of Engineering, and certified architects to establish industry-wide benchmarks and peer validation."
    },
    {
      risk: "Enterprise Adoption Friction",
      severity: "Medium",
      mitigation: "ESA 30-Day Certification — Free 30-day audit removes procurement friction by proving quantifiable risk reduction and ROI before asking for budget."
    },
    {
      risk: "Data Privacy & Compliance",
      severity: "Low",
      mitigation: "Metadata-Only Telemetry — FlowForge inspects operational metadata (timestamps, queue depth, review lag) and never inspects proprietary code or source repositories."
    }
  ],
  conclusion: {
    text: "FlowForge is building the permanent global stability layer for modern software engineering. By unifying measurement, governance, autonomy, and intelligence into a single operating system, FlowForge delivers the highest-conviction opportunity in enterprise developer infrastructure.",
    closingPitch: "This is a category-defining investment."
  }
};

export const FLOWFORGE_OPERATIONAL_PLAYBOOK = {
  documentId: "FF-PLAYBOOK-OPS-2027",
  title: "FlowForge Operational Playbook",
  subtitle: "The Complete Internal Operations Manual for Running FlowForge on the Stability OS",
  purpose: "Practicing what we preach: FlowForge runs internally on the Stability OS with mathematical rigor, statutory capacity floors, and predictive intelligence.",
  cadences: [
    {
      period: "Daily",
      timeSchedule: "08:30 CT (Every Morning)",
      title: "Stability Telemetry Sync & Queue Health",
      owner: "Engineering Squad Leads & On-Call Architect",
      inputs: ["Stability Score (0–100)", "Slack Liquidity gauge", "WIP Queue depth", "PR review latency"],
      actions: [
        "Review daily Stability Score across all development clusters.",
        "Verify Slack Liquidity is strictly above the 15% statutory floor.",
        "Inspect Volatility Index; isolate PRs exceeding 6 hours in queue.",
        "Check Critical Path DAG for upcoming production release milestones."
      ],
      outputs: ["Daily Stability Green/Amber/Red status badge", "Auto-deflected PR rebalancing log"],
      governanceThreshold: "Slack Liquidity must remain ≥ 15% at all times."
    },
    {
      period: "Weekly",
      timeSchedule: "Monday 09:00 CT",
      title: "Monday Stability Review",
      owner: "VP of Engineering & Lead Architects",
      inputs: ["Sprint backlog load", "Individual WIP distribution", "Historical volatility trends"],
      actions: [
        "Audit team-wide Stability Scores.",
        "Ensure no sprint is planned beyond 85% capacity (enforcing 15% slack floor).",
        "Resolve dependency cross-squad DAG bottlenecks before sprint launch.",
        "Review RulePack v1 trigger events from previous week."
      ],
      outputs: ["Approved sprint capacity plan", "Published squad stability ratings"],
      governanceThreshold: "Sprint capacity allocation capped at 85% maximum."
    },
    {
      period: "Weekly",
      timeSchedule: "Wednesday 14:00 CT",
      title: "Wednesday Autonomy Cycle",
      owner: "Autonomy Operations Lead",
      inputs: ["Autonomy Engine execution logs", "PR redistribution audit", "Reviewer workload curves"],
      actions: [
        "Execute automated load rebalancing across engineering pods.",
        "Transfer slack liquidity credits across teams via FFX protocol.",
        "Verify no engineer has more than 3 active critical-path PRs.",
        "Enforce automated off-hours quiet hours for high-burnout candidates."
      ],
      outputs: ["Autonomy execution summary", "Rebalanced pull-request routing matrix"],
      governanceThreshold: "Max review workload capped at 3 critical PRs per reviewer."
    },
    {
      period: "Weekly",
      timeSchedule: "Friday 16:00 CT",
      title: "Friday Forecast Review",
      owner: "Product & Engineering Leadership",
      inputs: ["7/14/30-day Bayesian forward forecasts", "Burnout curve trends", "Release milestone confidence intervals"],
      actions: [
        "Review 30-day predictive delivery trajectories.",
        "Evaluate Burnout Index projections 2–3 sprints forward.",
        "Assess release confidence score (Monte Carlo simulation).",
        "Issue weekend operational safety and quiet-hours lock."
      ],
      outputs: ["Weekly Executive Stability Brief", "Milestone risk forecast report"],
      governanceThreshold: "Release confidence must exceed 88% probability."
    },
    {
      period: "Monthly",
      timeSchedule: "First Business Day of Month",
      title: "ESA Certification & Governance Audit",
      owner: "Head of Governance & Compliance",
      inputs: ["30-day historical telemetry", "RulePack violation logs", "Autonomy success metrics"],
      actions: [
        "Perform comprehensive Enterprise Stability Audit (ESA).",
        "Certify squad maturity levels: Stable → Governed → Autonomous → Intelligent.",
        "Audit statutory RulePack compliance and policy override logs.",
        "Publish monthly institutional governance report to executive board."
      ],
      outputs: ["Certified ESA Audit Scorecard", "Board-level stability certificate"],
      governanceThreshold: "Zero unaddressed statutory RulePack breaches."
    }
  ] as PlaybookCadenceItem[],
  internalGovernance: {
    description: "Statutory operating boundaries hardcoded into internal operations:",
    rules: [
      {
        rule: "Slack Floor Enforcement",
        threshold: "≥ 15% Buffer Reserve",
        enforcement: "Automated CI/CD gate blocks sprint creation or PR assignment if team buffer drops below 15%."
      },
      {
        rule: "Volatility Caps",
        threshold: "≤ 18% Cycle Time Variance",
        enforcement: "Freezes scope creep and triggers workload shedding if variance exceeds 18%."
      },
      {
        rule: "Critical Path Protection",
        threshold: "≤ 6 Hours Review Latency",
        enforcement: "Automatically assigns secondary reviewer and notifies squad lead when critical PR reaches 6h."
      },
      {
        rule: "Burnout Thresholds",
        threshold: "≤ 75% Burnout Index",
        enforcement: "Enforces mandatory 48-hour quiet period and sheds non-essential tasks when threshold is breached."
      },
      {
        rule: "Delivery Risk Limits",
        threshold: "≤ 15% Probability of Slippage",
        enforcement: "Triggers executive escalation and scope descope recommendations if slip risk exceeds 15%."
      }
    ]
  },
  internalIntelligence: {
    description: "Predictive Bayesian modeling monitoring internal health:",
    models: [
      { name: "Forecasting", scope: "Projects 7, 14, and 30-day forward stability trajectories." },
      { name: "Burnout Curve", scope: "Detects cumulative fatigue signals 2–3 sprints before attrition occurs." },
      { name: "Delivery Risk", scope: "Runs 10,000 Monte Carlo iterations on milestone critical path DAG." },
      { name: "Fragility Detection", scope: "Identifies single-points-of-failure (SPOFs) in team expertise and reviewer dependencies." }
    ]
  },
  internalAutonomy: {
    description: "Automated operational mitigation executed without human delay:",
    mechanisms: [
      { name: "Load Rebalancing", action: "Dynamically routes incoming PRs away from overloaded team members." },
      { name: "Slack Redistribution", action: "Transfers capacity credits between high-slack and low-slack squads." },
      { name: "Burnout Mitigation", action: "Auto-suppresses pager non-urgent alerts during scheduled recovery windows." },
      { name: "Critical Path Stabilization", action: "Auto-allocates floating senior engineers to active DAG critical paths." }
    ]
  },
  internalReporting: {
    description: "Standardized operational reporting artifacts:",
    reports: [
      { name: "Stability Reports", audience: "All Engineers & Leads", cadence: "Daily / Weekly" },
      { name: "Governance Reports", audience: "Engineering Leadership", cadence: "Monthly" },
      { name: "Autonomy Reports", audience: "Operations & DevOps", cadence: "Bi-Weekly" },
      { name: "Intelligence Reports", audience: "Executive Staff & Board", cadence: "Monthly / Quarterly" }
    ]
  }
};

export const FLOWFORGE_AI_GOVERNANCE_CHARTER = {
  documentId: "FF-AI-CHARTER-2027",
  title: "FlowForge AI Governance Charter",
  subtitle: "The Official AI Safety, Ethics & Transparency Framework for Stability OS",
  purpose: "Ensure FlowForge's AI systems operate safely, ethically, and transparently, adhering to strict non-invasive operational boundaries.",
  principles: [
    {
      title: "Stability First",
      definition: "AI recommendations and automated rebalancing must always prioritize systemic equilibrium over raw localized throughput."
    },
    {
      title: "Human Protection",
      definition: "AI models exist to protect human engineers from cognitive exhaustion, late-night heroics, and preventable burnout."
    },
    {
      title: "Predictive Transparency",
      definition: "All Bayesian forward forecasts must provide transparent confidence intervals and inspectable parameter weights."
    },
    {
      title: "Governance Enforcement",
      definition: "AI models cannot bypass statutory RulePack v1 guardrails under any circumstance, including executive overrides."
    },
    {
      title: "Autonomy Safety",
      definition: "Automated actions are strictly limited to workload redistribution and routing — never touching source code or deployment pipelines."
    },
    {
      title: "Intelligence Accountability",
      definition: "Every AI prediction, risk flag, and rebalancing decision maintains an immutable, cryptographically verifiable audit trail."
    }
  ],
  governanceLayers: [
    {
      layerNumber: 1,
      name: "Measurement AI",
      scope: "Passive Telemetry Ingestion",
      permittedActions: ["Observe PR review latency", "Calculate WIP queue depth", "Measure Slack Liquidity", "Compute Volatility Index"],
      prohibitedActions: ["Inspect code content", "Parse personal chat logs", "Track keystrokes or camera activity", "Rank individual engineers"],
      verificationCadence: "Continuous (Real-time)"
    },
    {
      layerNumber: 2,
      name: "Governance AI",
      scope: "Statutory RulePack Enforcement",
      permittedActions: ["Flag slack floor violations", "Block sprint overcommitments", "Escalate critical path delays", "Trigger burnout warnings"],
      prohibitedActions: ["Alter company HR records", "Issue disciplinary actions", "Override human security policies"],
      verificationCadence: "Weekly Cadence"
    },
    {
      layerNumber: 3,
      name: "Autonomy AI",
      scope: "Closed-Loop Workload Redistribution",
      permittedActions: ["Reassign pending pull request reviewers", "Deflect incoming review requests", "Trigger quiet-hours notifications", "Transfer capacity credits across squads"],
      prohibitedActions: ["Modify source code", "Rewrite Git commits", "Deploy code to staging or production", "Merge pull requests autonomously"],
      verificationCadence: "Bi-Weekly Autonomy Review"
    },
    {
      layerNumber: 4,
      name: "Intelligence AI",
      scope: "Probabilistic Forward Inference",
      permittedActions: ["Generate 7/14/30-day stability trajectories", "Model Monte Carlo delivery risks", "Predict burnout exhaustion curves", "Simulate scenario interventions"],
      prohibitedActions: ["Produce deterministic guarantees without confidence intervals", "Silently discard outlier risk signals"],
      verificationCadence: "Monthly Executive Review"
    }
  ] as AIGovernanceLayer[],
  safetyControls: {
    lead: "Non-Negotiable Hard Architectural Guardrails",
    rules: [
      { control: "No Code Modification", status: "STRICTLY ENFORCED", description: "FlowForge AI will never edit, patch, refactor, or alter application source code." },
      { control: "No Commit Rewriting", status: "STRICTLY ENFORCED", description: "FlowForge AI will never rewrite Git history, force-push commits, or alter commit hashes." },
      { control: "No Production Changes", status: "STRICTLY ENFORCED", description: "FlowForge AI has zero write access to runtime cloud environments, servers, or production clusters." },
      { control: "Only Workload Redistribution", status: "AUTHORIZED SCOPE", description: "FlowForge AI's execution authority is strictly confined to routing workload, PR reviews, and schedule buffers." }
    ]
  },
  ethics: [
    "Protect engineers from chronic overload and silent exhaustion.",
    "Prevent burnout before it manifests as physical illness or resignation.",
    "Reduce volatility to restore sustainable, predictable engineering pacing.",
    "Improve delivery predictability so engineering promises to business leadership are mathematically sound."
  ],
  compliance: {
    frameworks: [
      { name: "ESA Certification", requirement: "Full 30-day compliance validation across all 9 stability primitives" },
      { name: "Governance Audits", requirement: "Monthly verification of RulePack v1 policy enforcement" },
      { name: "Autonomy Audits", requirement: "Quarterly inspection of automated PR rebalancing logs for algorithmic fairness" },
      { name: "Intelligence Audits", requirement: "Annual calibration of Bayesian predictive accuracy against actual release outcomes" }
    ]
  }
};

export const FLOWFORGE_COMPANY_HANDBOOK = {
  documentId: "FF-HANDBOOK-2027",
  title: "FlowForge Full Company Handbook",
  subtitle: "The Complete Guide for Employees, Partners, and Leadership",
  welcome: {
    message: "Welcome to FlowForge. FlowForge stabilizes engineering teams worldwide.",
    missionStatement: "Our mission is to eliminate burnout, eradicate delivery unpredictability, and establish the Engineering Stability Platform (ESP) as the global operational standard.",
    founderWelcome: "Whether you are writing our core DAG algorithms, auditing enterprise stability, or partnering with global system integrators, your work protects the human minds that build the modern world."
  },
  companyValues: [
    { name: "Stability", meaning: "We prioritize equilibrium over manic speed. Sustainable pace produces unmatched velocity over time." },
    { name: "Autonomy", meaning: "We build systems that self-heal and rebalance automatically, freeing teams from administrative overhead." },
    { name: "Governance", meaning: "We honor statutory rules. Slack floors and volatility caps are sacred boundaries that protect people." },
    { name: "Intelligence", meaning: "We replace guesswork with Bayesian foresight. We project forward with rigorous probabilistic math." },
    { name: "Certification", meaning: "We validate our standards with uncompromising third-party audits and enterprise certifications." },
    { name: "Integrity", meaning: "We handle telemetry with absolute privacy. We never spy on developers; we protect engineering capacity." },
    { name: "Excellence", meaning: "In design, architecture, customer briefings, and code — we set the definitive global benchmark." }
  ],
  culture: {
    philosophy: "Calm. Predictive. Strategic. Outcome-driven.",
    attributes: [
      "No heroics required — Hero culture is a symptom of failed operational stability.",
      "Predictability over chaos — We value steady, mathematically sound delivery commitments.",
      "Generous slack as a feature — High performance requires deliberate operational buffer reserves.",
      "Psychological safety backed by code — Our platform enforces quiet hours and protects personal time."
    ]
  },
  teamStructure: [
    {
      name: "Engineering",
      leadRole: "VP of Engineering",
      mission: "Build and scale the 9 primitives of the Stability OS with zero downtime and sub-100ms latency.",
      keyResponsibilities: ["Stability telemetry ingestion", "DAG engine & topological sorting", "CI/CD VCS integrations"],
      coreKPIs: ["Platform uptime 99.99%", "Telemetry pipeline latency < 80ms", "Zero data loss"]
    },
    {
      name: "AI Research",
      leadRole: "Head of AI & Probabilistic Systems",
      mission: "Design and calibrate safe Bayesian forward forecasting and closed-loop autonomy algorithms.",
      keyResponsibilities: ["7/14/30-day stability trajectory models", "Burnout curve leading indicators", "Autonomy rebalancing solver"],
      coreKPIs: ["Forecast accuracy > 91%", "False positive burnout alert rate < 4%", "Safe guardrail compliance 100%"]
    },
    {
      name: "Product",
      leadRole: "Chief Product Officer",
      mission: "Deliver a transcendent, intuitive experience that transforms complex operational math into clear action.",
      keyResponsibilities: ["Stability OS UI/UX design", "Governance RulePack configuration", "Enterprise reporting dashboards"],
      coreKPIs: ["Monthly active user engagement", "Time-to-first-insight < 5 mins", "NPS > 72"]
    },
    {
      name: "Sales & Solutions",
      leadRole: "Chief Revenue Officer",
      mission: "Guide enterprise VPs of Engineering and CTOs from 30-day free ESA pilots to multi-year contracts.",
      keyResponsibilities: ["Executive briefings", "ESA pilot delivery", "Contract expansions to Full Intelligence"],
      coreKPIs: ["Pilot-to-paid conversion > 85%", "Annual Recurring Revenue targets", "Net Revenue Retention > 135%"]
    },
    {
      name: "Marketing",
      leadRole: "VP of Marketing",
      mission: "Drive the 'Stability Starts Here' global campaign and establish category dominance.",
      keyResponsibilities: ["Analyst relations (Gartner, Forrester)", "Brand and demand generation", "Global content and thought leadership"],
      coreKPIs: ["Inbound enterprise leads", "Analyst category recognition", "Global Partner Summit attendance"]
    },
    {
      name: "Partner Ecosystem",
      leadRole: "Head of Global Alliances",
      mission: "Scale the FlowForge Partner Network (FPN) across global system integrators and consultancies.",
      keyResponsibilities: ["FPN tier administration", "FCSA, FCGS, FCAE certifications", "Co-selling and partner enablement"],
      coreKPIs: ["Certified architects worldwide", "Partner-sourced ARR > 30%", "Partner satisfaction score"]
    },
    {
      name: "Operations & Governance",
      leadRole: "Head of Operations",
      mission: "Run internal operations on the Stability OS and enforce statutory compliance enterprise-wide.",
      keyResponsibilities: ["Internal cadence facilitation", "Compliance & SOC2 audits", "Legal and board reporting"],
      coreKPIs: ["Internal slack floor maintained ≥ 15%", "Zero regulatory violations", "Audit readiness"]
    }
  ] as HandbookDepartment[],
  employeeExpectations: [
    { title: "Protect Stability", detail: "Prioritize personal and team sustainability. Never plan work without preserving required slack reserves." },
    { title: "Enforce Governance", detail: "Respect statutory rules. Speak up immediately if workload allocations or deadlines threaten team well-being." },
    { title: "Support Autonomy", detail: "Embrace automated rebalancing and delegate administrative overhead to the Stability OS." },
    { title: "Maintain Intelligence", detail: "Use data-driven forecasts instead of optimistic speculation when setting milestones." },
    { title: "Deliver Excellence", detail: "Execute every task with craftsmanship, precision, and professional composure." }
  ],
  workCadence: [
    { cycle: "Weekly Stability Cycles", focus: "Monday Stability Review, Wednesday Autonomy Cycle, Friday Forecast Review." },
    { cycle: "Monthly Governance Audits", focus: "Full Enterprise Stability Audit and RulePack v1 policy enforcement verification." },
    { cycle: "Quarterly Autonomy Reviews", focus: "Deep-dive tuning of automated PR rebalancing parameters and partner co-selling." },
    { cycle: "Annual Intelligence Summits", focus: "Global Partner Summit and board-level category roadmap alignment." }
  ],
  performanceMetrics: [
    { metric: "Stability Impact", evaluation: "How effectively your team maintains equilibrium and preserves capacity reserves." },
    { metric: "Governance Compliance", evaluation: "Strict adherence to statutory RulePack guardrails and security standards." },
    { metric: "Autonomy Effectiveness", evaluation: "Utilization of automated routing and reduction of manual administrative toil." },
    { metric: "Intelligence Accuracy", evaluation: "Fidelity of probabilistic forecasts and milestone predictability." },
    { metric: "ESA Delivery", evaluation: "Contribution to delivering frictionless 30-day enterprise audits and client satisfaction." }
  ],
  partnerEngagement: {
    program: "FlowForge Partner Network (FPN)",
    pillars: [
      "FPN Tiers: Registered → Certified → Advanced → Elite",
      "Professional Certifications: FCSA (Stability Architect), FCGS (Governance Specialist), FCAE (Autonomy Engineer)",
      "Co-selling: Joint pursuit of enterprise accounts with 15–35% revenue share",
      "Joint Marketing: Whitepapers, case studies, and keynote presence at Global Stability Summit"
    ]
  },
  securityAndCompliance: {
    pillars: [
      "Data Protection: Zero source-code retention. Metadata-only analysis with end-to-end encryption.",
      "AI Governance: Hard architectural guardrails strictly prohibiting code modification or commit rewrites.",
      "Operational Safety: Automatic circuit breakers for all closed-loop rebalancing actions."
    ]
  },
  closing: {
    creed: "FlowForge is building the global stability layer for engineering.",
    pledge: "Every employee, partner, and leader contributes directly to this sovereign mission."
  }
};
