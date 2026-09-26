// FlowForge Complete Enterprise Expansion Suite
// 1. Brand System, 2. Category Manifesto, 3. Executive Briefing, 4. Sales Deck (Full Text), 5. Website Copy (Full Multi-Page)

export interface BrandSystemSpec {
  essence: string;
  pillars: Array<{ title: string; desc: string }>;
  voice: string[];
  tone: Array<{ trait: string; contrast: string }>;
  vocabulary: string[];
  positioningStatement: string;
  visualSystem: {
    primaryColor: { name: string; hex: string; desc: string };
    secondaryColor: { name: string; hex: string; desc: string };
    accentColor: { name: string; hex: string; desc: string };
    typography: { headings: string; body: string };
    iconography: string[];
  };
}

export interface CategoryManifestoSpec {
  title: string;
  premise: string;
  beliefs: Array<{ principle: string; detail: string }>;
  declaration: string;
  flowforgeRole: string;
  callToAction: string;
}

export interface ExecutiveBriefingSpec {
  executiveSummary: string;
  keyProblems: Array<{ title: string; desc: string }>;
  solution: Array<{ title: string; desc: string }>;
  businessImpact: Array<{ title: string; metric: string }>;
  whyNow: string;
  nextStep: string;
}

export interface SalesDeckSlideText {
  slideNumber: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  content?: string;
  quote?: string;
}

export interface ExpansionWebsitePage {
  id: string;
  navLabel: string;
  title: string;
  tagline: string;
  sections: Array<{
    heading: string;
    subheading?: string;
    body?: string;
    bullets?: string[];
    cta?: { label: string; action: string };
  }>;
}

export const FLOWFORGE_BRAND_SYSTEM: BrandSystemSpec = {
  essence: 'FlowForge is the Stability OS for engineering teams.',
  pillars: [
    { title: 'Stability', desc: 'Predictable engineering delivery through empirical load balancing' },
    { title: 'Autonomy', desc: 'AI-driven load orchestration and closed-loop rebalancing protocols' },
    { title: 'Governance', desc: 'Policy-as-code rules (RulePack v1) that protect contributors and deadlines' },
    { title: 'Intelligence', desc: 'Multi-horizon forecasts (7/14/30d), volatility modeling, and burnout curves' },
    { title: 'Certification', desc: 'Enterprise trust credentials through Enterprise Stability Audits (ESA)' }
  ],
  voice: [
    'Executive',
    'Calm',
    'Authoritative',
    'Predictive',
    'Outcome-driven',
    'Category-defining'
  ],
  tone: [
    { trait: 'Confident', contrast: 'not loud' },
    { trait: 'Precise', contrast: 'not verbose' },
    { trait: 'Strategic', contrast: 'not tactical' },
    { trait: 'Visionary', contrast: 'not hype' }
  ],
  vocabulary: [
    'Stability',
    'Slack Liquidity',
    'Volatility',
    'Critical Path',
    'Autonomy',
    'Intelligence',
    'ESA',
    'Governance',
    'Load orchestration'
  ],
  positioningStatement:
    'FlowForge is the Stability OS that measures load, predicts burnout, stabilizes delivery, and autonomously rebalances engineering teams.',
  visualSystem: {
    primaryColor: {
      name: 'Stability Blue',
      hex: '#1A3D7C',
      desc: 'Grounding authority, corporate governance, and operational predictability'
    },
    secondaryColor: {
      name: 'Autonomy Gold',
      hex: '#D9A441',
      desc: 'High-value orchestration, autonomous interventions, and executive prestige'
    },
    accentColor: {
      name: 'Intelligence Teal',
      hex: '#1FB8A6',
      desc: 'Predictive signals, Monte Carlo forecasting, and real-time telemetry'
    },
    typography: {
      headings: 'Inter Bold / Plus Jakarta Display',
      body: 'Inter Regular / JetBrains Mono (for telemetry values)'
    },
    iconography: [
      'Stability Score (LSS Gauge)',
      'Slack Liquidity (Buffer Reserve)',
      'Volatility (Variance Band)',
      'Critical Path (DAG Chain)',
      'Autonomy (Orchestration Bot)',
      'Intelligence (Predictive Curve)'
    ]
  }
};

export const FLOWFORGE_CATEGORY_MANIFESTO: CategoryManifestoSpec = {
  title: 'The Engineering Stability Manifesto',
  premise: 'Engineering teams are the backbone of modern companies, yet they operate without stability systems.',
  beliefs: [
    { principle: 'Stability is measurable', detail: 'Intuition and heroic guesswork are obsolete; engineering load can and must be quantified mathematically.' },
    { principle: 'Burnout is predictable', detail: 'Fatigue is an observable consequence of sustained cognitive load without slack, detectable weeks before attrition occurs.' },
    { principle: 'Delivery risk is preventable', detail: 'Critical path bottlenecks and single points of failure can be decoupled before deadlines break.' },
    { principle: 'Slack is strategic', detail: 'A team running at 100% capacity has 0% liquidity; slack is not waste, it is the shock absorber that preserves velocity.' },
    { principle: 'Autonomy is essential', detail: 'Human managers cannot calculate real-time permutation DAGs continuously; AI load orchestration must execute rebalancing closed-loop.' },
    { principle: 'Governance is non-negotiable', detail: 'Policy-as-code must safeguard statutory slack floors and prevent localized developer over-allocation.' }
  ],
  declaration:
    'Engineering Stability Platforms (ESP) are the next evolution of engineering operations — systems that measure, govern, and autonomously stabilize engineering teams.',
  flowforgeRole:
    'FlowForge is the Stability OS that defines, leads, and scales the ESP category globally.',
  callToAction:
    'Engineering leaders must adopt stability systems to protect teams, accelerate delivery, and reduce burnout.'
};

export const FLOWFORGE_EXECUTIVE_BRIEFING: ExecutiveBriefingSpec = {
  executiveSummary:
    'Engineering volatility is rising. Burnout is increasing. Delivery pressure is intensifying. FlowForge introduces the Stability OS — a platform that stabilizes engineering teams automatically.',
  keyProblems: [
    { title: 'Load concentration', desc: 'Critical path reliance on 1-2 hero contributors creates fragile single points of failure (SPOF).' },
    { title: 'Burnout risk', desc: 'Overburdened developers hit cognitive saturation, precipitating quiet quitting and catastrophic project delays.' },
    { title: 'Critical path fragility', desc: 'Coupled sequential dependencies cause minor individual slips to blow out entire quarterly releases.' },
    { title: 'Volatility', desc: 'Sprint-over-sprint cycle time swings (±25%+) destroy predictable quarterly executive planning.' },
    { title: 'Delivery unpredictability', desc: 'Engineering forecasts rely on subjective standup status updates rather than empirical Monte Carlo models.' }
  ],
  solution: [
    { title: 'Stability Score (LSS)', desc: 'Holistic 0-100 index quantifying team equilibrium and health.' },
    { title: 'Slack Liquidity', desc: 'Statutory 15% reserve buffer preventing friction and gridlock.' },
    { title: 'Volatility Index', desc: 'Continuous statistical measurement of delivery variance.' },
    { title: 'Critical Path Forecast', desc: 'Algorithmic DAG tracking with early slip warnings.' },
    { title: 'Autonomy Protocols', desc: 'Closed-loop PROTO-01 load rebalancing and ticket reassignment.' },
    { title: 'Intelligence Layer', desc: 'Multi-horizon 7/14/30-day predictive forecasts.' },
    { title: 'ESA Certification', desc: 'Boardroom-ready Enterprise Stability Audit credentials.' }
  ],
  businessImpact: [
    { title: 'Reduced Burnout', metric: '-48% cognitive fatigue saturation' },
    { title: 'Faster Delivery', metric: '+22% on-time milestone arrival' },
    { title: 'Lower Volatility', metric: '< ±3.0% sprint cycle variance' },
    { title: 'Protected Critical Paths', metric: '2.6 days recovered schedule slack' },
    { title: 'Higher Engineering Morale', metric: '91% retention of senior contributors' }
  ],
  whyNow: 'Engineering teams need stability systems. FlowForge is the first.',
  nextStep: 'Activate a 30-day pilot and receive your Enterprise Stability Audit (ESA).'
};

export const FLOWFORGE_SALES_DECK_TEXT: SalesDeckSlideText[] = [
  {
    slideNumber: 1,
    title: 'FlowForge',
    subtitle: 'The Stability OS for Engineering Teams',
    content: 'CFO TAX PRO LLC (dba FlowForge) • Sachse, TX • SOS #08051239'
  },
  {
    slideNumber: 2,
    title: 'Problem',
    subtitle: 'Engineering teams operate without stability systems.',
    bullets: [
      'Observability monitors servers (Datadog)',
      'CI/CD automates pipelines (GitHub)',
      'Agile boards track tickets (Jira)',
      'Yet NO system measures or protects engineering stability'
    ]
  },
  {
    slideNumber: 3,
    title: 'Consequence',
    subtitle: 'Burnout, volatility, delivery risk, fragility.',
    bullets: [
      'Engineers face chronic cognitive overload',
      'Delivery cycles oscillate unpredictably',
      'Hero developers become single points of failure',
      'Boardroom commitments are consistently missed'
    ]
  },
  {
    slideNumber: 4,
    title: 'Solution',
    subtitle: 'FlowForge stabilizes engineering teams automatically.',
    content: 'An intelligent operating system that continuously balances load, maintains reserve slack, and automates rebalancing before bottlenecks occur.'
  },
  {
    slideNumber: 5,
    title: 'Product',
    subtitle: 'Seven Core Pillars of Stability OS',
    bullets: [
      'Stability Score (LSS)',
      'Slack Liquidity',
      'Volatility Index',
      'Critical Path DAG',
      'Autonomy Engine',
      'Intelligence Layer',
      'ESA Certification'
    ]
  },
  {
    slideNumber: 6,
    title: 'Demo',
    subtitle: '5-minute Stability OS demo.',
    bullets: [
      'Ingest telemetry → detect overloaded lead (Sarah / T9)',
      'Verify slack deficit (9.2% vs. 15% statutory floor)',
      'Trigger PROTO-01 autonomous load rebalance',
      'Observe instantaneous LSS recovery (78 → 92)'
    ]
  },
  {
    slideNumber: 7,
    title: 'Outcomes',
    subtitle: 'Empirically proven results within 30 days',
    bullets: [
      'Reduced burnout (-48% cognitive saturation)',
      'Faster delivery (2.6 days recovered)',
      'Lower volatility (< ±3.0% sprint variance)',
      'Protected critical paths (0 unresolved SPOFs)'
    ]
  },
  {
    slideNumber: 8,
    title: 'Pricing',
    subtitle: 'Simple, transparent subscription tiers',
    bullets: [
      'Pilot: Free (30 Days with ESA Audit)',
      'Stability Core: $1,500/mo',
      'Governance + Autonomy: $3,500/mo',
      'Full Intelligence: $6,000/mo'
    ]
  },
  {
    slideNumber: 9,
    title: 'Pilot',
    subtitle: 'Free 30-day pilot + ESA.',
    bullets: [
      'Read-only GitHub metadata connection (< 1 hour)',
      'Zero source code accessed or analyzed',
      'Weekly automated stability health reports',
      'Certified Enterprise Stability Audit delivered at Day 30'
    ]
  },
  {
    slideNumber: 10,
    title: 'Close',
    quote: '“Let’s stabilize your engineering team.”',
    content: 'Schedule your onboarding call • contact: pilot@flowforge.ai'
  }
];

export const FLOWFORGE_WEBSITE_EXPANSION_PAGES: ExpansionWebsitePage[] = [
  {
    id: 'homepage',
    navLabel: 'Homepage',
    title: 'FlowForge — The Stability OS for Engineering Teams',
    tagline: 'Measure load. Predict burnout. Stabilize delivery.',
    sections: [
      {
        heading: 'Hero Section',
        subheading: 'Engineering teams are the backbone of modern companies, yet they operate without stability systems.',
        body: 'FlowForge measures load, predicts burnout, stabilizes delivery, and autonomously rebalances engineering teams.',
        cta: { label: 'Start Free Pilot → Generate ESA in 30 Days', action: 'start_pilot' }
      },
      {
        heading: 'Three Non-Negotiables of Engineering Delivery',
        bullets: [
          'Measure Load: Live 0-100 Stability Score calibrating equilibrium across pods',
          'Predict Burnout: Fatigue curves that flag cognitive saturation before attrition strikes',
          'Stabilize Delivery: Algorithmic DAG decoupling that protects critical milestones'
        ]
      }
    ]
  },
  {
    id: 'product',
    navLabel: 'Product',
    title: 'Product — Seven Pillars of Engineering Stability',
    tagline: 'A comprehensive operating system engineered for predictability.',
    sections: [
      {
        heading: 'Stability Score',
        subheading: 'Your engineering baseline',
        body: 'Real-time 0-100 index synthesized from commit velocity, PR cycle time, review friction, and sprint completion consistency.'
      },
      {
        heading: 'Slack Liquidity',
        subheading: 'Your operational buffer',
        body: 'Guarantees the statutory 15% reserve buffer. Eliminates zero-slack gridlock so emergencies do not derail planned releases.'
      },
      {
        heading: 'Volatility',
        subheading: 'Detect instability early',
        body: 'Statistical standard deviation tracking of delivery cadence to damp out wild sprint-over-sprint oscillations.'
      },
      {
        heading: 'Critical Path',
        subheading: 'Forecast delivery risk',
        body: 'Algorithmic dependency DAG mapping identifying sequential blockers and single-contributor bottlenecks.'
      },
      {
        heading: 'Autonomy',
        subheading: 'Automatic load rebalancing',
        body: 'Policy-governed PROTO-01 and PROTO-02 intervention agents that redistribute tickets and decouple dependencies.'
      },
      {
        heading: 'Intelligence',
        subheading: '7/14/30-day forecasts',
        body: 'Multi-horizon Monte Carlo simulations forecasting delivery completion windows and cognitive fatigue curves.'
      },
      {
        heading: 'ESA Certification',
        subheading: 'Your enterprise audit',
        body: 'Verifiable, board-certified stability audit credential demonstrating organizational rigor.'
      }
    ]
  },
  {
    id: 'platform',
    navLabel: 'Platform',
    title: 'Platform Architecture — Governance, Autonomy & Intelligence',
    tagline: 'Enterprise-grade policy enforcement paired with autonomous orchestration.',
    sections: [
      {
        heading: 'Governance Layer',
        subheading: 'RulePack v1 Policy Suite',
        bullets: [
          'Statutory Slack Floor: Enforces minimum 15% reserve capacity per pod',
          'Volatility Thresholds: Triggers warnings when cycle variance exceeds ±3.0%',
          'Critical Path Protection: Prohibits over-allocation on sequential dependencies'
        ]
      },
      {
        heading: 'Autonomy Engine',
        subheading: 'Closed-Loop Stability Orchestration',
        bullets: [
          'Load Rebalancing: Dynamic ticket shifting between overloaded and idle contributors',
          'Slack Redistribution: Balancing reserves across adjacent feature pods',
          'Burnout Mitigation: Automated cooling protocols for high-stress engineers'
        ]
      },
      {
        heading: 'Intelligence Engine',
        subheading: 'Predictive Analytics & Forecasting',
        bullets: [
          'Forecast Engine: Probabilistic Monte Carlo milestone delivery curves',
          'Burnout Curve: Individual and pod cognitive load decay modeling',
          'Delivery Risk: Real-time risk scoring across cross-functional DAGs'
        ]
      }
    ]
  },
  {
    id: 'pricing',
    navLabel: 'Pricing',
    title: 'Pricing — Scalable Tiers for High-Performance Teams',
    tagline: 'Transparent pricing with a guaranteed free 30-day pilot.',
    sections: [
      {
        heading: 'Pilot Tier',
        subheading: 'Free for 30 Days',
        body: 'Complete telemetry ingestion, baseline calibration, and a certified Enterprise Stability Audit (ESA).'
      },
      {
        heading: 'Stability Core',
        subheading: '$1,500 / month per pod',
        body: 'Real-time Stability Score, Slack Liquidity monitoring, Volatility tracking, and basic dashboards.'
      },
      {
        heading: 'Governance + Autonomy',
        subheading: '$3,500 / month per pod',
        body: 'RulePack v1 policy enforcement, closed-loop PROTO-01 load rebalancing, and team protection.'
      },
      {
        heading: 'Full Intelligence',
        subheading: '$6,000 / month per pod',
        body: 'Multi-horizon Monte Carlo forecasts, burnout curve projections, and custom ESA boardroom deliverables.'
      }
    ]
  },
  {
    id: 'esa_certification',
    navLabel: 'ESA Certification',
    title: 'Enterprise Stability Audit (ESA)',
    tagline: 'The gold standard benchmark for engineering predictability.',
    sections: [
      {
        heading: 'What You Receive in the ESA',
        bullets: [
          'Executive Scorecard: Rigorous 0-100 Stability Score breakdown across all pods',
          'Empirical Findings: Concrete diagnosis of load concentration and hidden SPOFs',
          'Prescriptive Recommendations: Policy rules to lock in 15% slack liquidity',
          '30-Day Transition Plan: Roadmap to transition from pilot into autonomous stability'
        ]
      },
      {
        heading: 'Why Executives Trust ESA',
        body: 'Venture investors, board directors, and CTOs rely on the ESA credential to validate delivery predictability before major product launches or enterprise audit reviews.'
      }
    ]
  },
  {
    id: 'about',
    navLabel: 'About',
    title: 'About FlowForge',
    tagline: 'Defining the Engineering Stability Platform (ESP) category.',
    sections: [
      {
        heading: 'Our Mission',
        body: 'To stabilize engineering teams worldwide — replacing heroic firefighting with predictable, autonomous stability.'
      },
      {
        heading: 'Leadership & Incorporation',
        body: 'Founded by Chuck Oduagu. FlowForge is operated under CFO TAX PRO LLC (dba FlowForge), incorporated in Sachse, TX (SOS File #08051239).'
      }
    ]
  },
  {
    id: 'contact',
    navLabel: 'Contact',
    title: 'Contact & Pilot Ingestion',
    tagline: 'Deploy the Stability OS in under one hour.',
    sections: [
      {
        heading: 'Pilot Signup',
        body: 'Start your free 30-day pilot today. Ingest GitHub metadata in minutes with zero code exposure.',
        cta: { label: 'Register Pilot Pod', action: 'register' }
      },
      {
        heading: 'Enterprise Inquiries',
        body: 'Contact our enterprise advisory desk at enterprise@flowforge.ai or pilot@flowforge.ai for multi-pod organization deployments.'
      }
    ]
  }
];
