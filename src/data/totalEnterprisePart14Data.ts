export interface ArchitectureLayer {
  layer: string;
  name: string;
  capabilities: string[];
}

export interface LicenseTier {
  id: string;
  name: string;
  price: string;
  cadence: string;
  features: string[];
  popular?: boolean;
}

export const FESL_LICENSE_TIERS: LicenseTier[] = [
  {
    id: 'tier-1',
    name: 'Tier 1 — Stability Core License',
    price: '$1,500',
    cadence: '/mo',
    features: [
      'Real-time Load Stability Score (LSS)',
      'Slack Liquidity Reserve Tracking (15% Target)',
      'Sprint Volatility Index (<±3%)',
      'Automated Critical Path Velocity Engine'
    ]
  },
  {
    id: 'tier-2',
    name: 'Tier 2 — Governance + Autonomy License',
    price: '$3,500',
    cadence: '/mo',
    popular: true,
    features: [
      'Everything in Stability Core',
      'Statutory RulePack Compliance Enforcement',
      'Autonomous Closed-Loop Autonomy Engine',
      'One-Click Pod Rebalancing & Task Offloading'
    ]
  },
  {
    id: 'tier-3',
    name: 'Tier 3 — Full Intelligence License',
    price: '$6,000',
    cadence: '/mo',
    features: [
      'Everything in Governance + Autonomy',
      '7 / 14 / 30-Day Predictive Delivery Risk Forecasting',
      'Cognitive Burnout Curve & At-Risk Engineer Matrix',
      'Official Engineering Stability Audit (ESA) Certifications'
    ]
  },
  {
    id: 'tier-4',
    name: 'Tier 4 — Partner License',
    price: '$12,000',
    cadence: '/yr',
    features: [
      'Full Commercial Certification Rights',
      'Enterprise Co-Selling & Ecosystem Placement',
      '20% Direct Revenue Share on Managed Accounts',
      'Dedicated Solutions Architect & Unlimited Seats'
    ]
  }
];

export const STABILITY_4_LAYERS: ArchitectureLayer[] = [
  {
    layer: 'Layer 1',
    name: 'Measurement Intelligence',
    capabilities: [
      'Real-time Load Telemetry & Commit Vectors',
      'Slack Telemetry (15% statutory floor monitoring)',
      'Sprint Volatility Telemetry (<±3.0% target)',
      'Critical Path Dependency DAG & Predecessor Health',
      'Cognitive Fatigue & Burnout Micro-Signals',
      'Historical Task Velocity & PR Latency Index'
    ]
  },
  {
    layer: 'Layer 2',
    name: 'Governance Intelligence',
    capabilities: [
      'Statutory RulePack & Safety Boundary Enforcement',
      'Slack Liquidity Floor Protectors (No sub-15% drift)',
      'Volatility Caps (Triggering auto-governance at >0.35)',
      'Critical Path Bottleneck Shields',
      'Cognitive Burnout Ceiling Quarantines',
      'Delivery Variance & Slippage Risk Limits'
    ]
  },
  {
    layer: 'Layer 3',
    name: 'Autonomy Intelligence (v3 Engine)',
    capabilities: [
      'Adaptive Load Balancing (ALB pattern learning)',
      'Dynamic Slack Optimization (DSO reinforcement learning)',
      'Burnout Sentinel (BS-Net neural prediction 14-30d)',
      'Critical Path Guardian (CP-GNN fragility decoupling)',
      'Delivery Acceleration (DA-TSF time-series scheduling)'
    ]
  },
  {
    layer: 'Layer 4',
    name: 'Predictive Intelligence',
    capabilities: [
      '30-90 Day Forward Stability Score Forecasting',
      'Burnout Curve Trajectory & Team Churn Projections',
      'Delivery Deadline Risk & Critical Path Fragility Index',
      'Cross-Pod Dependency Breaking Prediction',
      'Predictive Organizational Volatility & Velocity Shifts'
    ]
  },
  {
    layer: 'Layer 5',
    name: 'Global Stability Network',
    capabilities: [
      'Cross-Company Anonymous Stability Intelligence',
      'Worldwide Multi-Tenant Delivery Risk Telemetry',
      'Global Burnout Prevention Nodes & Anomaly Baselines',
      'Cross-Organization Critical Path Mapping',
      'ESP Category Standardization & Regulatory Benchmarking'
    ]
  }
];

export const CORE_SERVICES = [
  { name: 'stability-service', tech: 'Go / gRPC', desc: 'High-throughput telemetry ingestion & LSS metric computation' },
  { name: 'autonomy-service', tech: 'Python / FastAPI', desc: 'Closed-loop self-optimizing engine & ML action executor' },
  { name: 'intelligence-service', tech: 'PyTorch / Kafka', desc: 'Predictive neural networks, GNN dependency graph analysis' },
  { name: 'governance-service', tech: 'Go / PostgreSQL', desc: 'RulePack policy enforcement, Texas tax & statutory safety gates' },
  { name: 'esa-service', tech: 'Node / Redis', desc: 'Engineering Stability Audit generation & scorecard verification' },
  { name: 'partner-service', tech: 'FastAPI / Stripe Connect', desc: 'Global partner directory, deal registration, & 20% revenue payouts' }
];

export const GLOBAL_NODES = [
  { region: 'North America (NA)', city: 'Dallas / Austin / US-Central1', status: 'Active (Primary)', latency: '12ms' },
  { region: 'Europe, Middle East, Africa (EMEA)', city: 'London / Frankfurt', status: 'Active (Hub)', latency: '28ms' },
  { region: 'Asia-Pacific (APAC)', city: 'Tokyo / Singapore', status: 'Active (Edge)', latency: '42ms' },
  { region: 'Latin America (LATAM)', city: 'São Paulo', status: 'Active (Edge)', latency: '54ms' },
  { region: 'Africa', city: 'Johannesburg / Lagos', status: 'Provisioned (Edge)', latency: '68ms' }
];

export const FIGMA_COLOR_TOKENS = [
  { name: 'FF-Blue-Primary', hex: '#1A3D7C', role: 'Brand & Stability core' },
  { name: 'FF-Gold-Autonomy', hex: '#D9A441', role: 'Autonomous engine triggers' },
  { name: 'FF-Teal-Intelligence', hex: '#1FB8A6', role: 'Predictive signals' },
  { name: 'FF-Red-CriticalPath', hex: '#D64545', role: 'Fragile bottlenecks' },
  { name: 'FF-Gray-900', hex: '#0D1117', role: 'Deep canvas ground' },
  { name: 'FF-Gray-700', hex: '#2E3A45', role: 'Surface boundaries' },
  { name: 'FF-Green-Success', hex: '#2ECC71', role: 'Compliance confirmed' }
];

export const CERTIFICATION_EXAMS = [
  {
    code: 'FCSA',
    name: 'FlowForge Certified Stability Architect',
    focus: 'Architecting engineering stability & Slack Liquidity floors',
    sampleQ: 'What is the minimum Slack Liquidity floor?',
    sampleA: '15% statutory operational buffer'
  },
  {
    code: 'FCGS',
    name: 'FlowForge Certified Governance Specialist',
    focus: 'RulePack policy enforcement and risk boundary governance',
    sampleQ: 'What triggers automatic governance enforcement?',
    sampleA: 'Sprint Volatility Index > 0.35'
  },
  {
    code: 'FCAE',
    name: 'FlowForge Certified Autonomy Engineer',
    focus: 'Closed-loop autonomous remediation and pod load rebalancing',
    sampleQ: 'What triggers automated autonomy execution cycles?',
    sampleA: 'Load Stability Score (LSS) < 75'
  },
  {
    code: 'FCIE',
    name: 'FlowForge Certified Intelligence Engineer',
    focus: 'Burnout neural networks and GNN critical path forecasting',
    sampleQ: 'What is the critical burnout index threshold?',
    sampleA: 'Burnout Index > 0.40'
  }
];

export const MARKETING_CAMPAIGN = {
  theme: 'Stability Starts Here — Engineering stability in 30 days.',
  videoScript: [
    { sec: '0-5s', title: 'The Crisis', text: 'Engineering teams do not miss deadlines because they lack talent. They miss deadlines because of unchecked volatility, invisible cognitive overload, and fragile critical paths.' },
    { sec: '6-15s', title: 'The Solution', text: 'Introducing FlowForge Stability OS 4.0 — the world’s first Engineering Stability Platform powered by closed-loop autonomous intelligence.' },
    { sec: '16-25s', title: 'The Pillars', text: 'Real-time Stability Scores. Enforced 15% Slack Liquidity. Automated load rebalancing with zero meeting overhead.' },
    { sec: '26-30s', title: 'The Call to Action', text: 'Stabilize your engineering team in 30 days. Start your free ESA pilot today at flowforge.fit.' }
  ],
  socialPosts: [
    { platform: 'LinkedIn', headline: 'Why 72% of Engineering Sprints Slip', copy: 'It is not a velocity problem. It is a Slack Liquidity deficit. When teams operate below 15% slack buffer, a single context switch causes cascade failure. FlowForge restores stability automatically.' },
    { platform: 'Twitter / X', headline: 'Engineering Stability Platform (ESP) Category Announcement', copy: 'APM told you when servers broke. Observability told you why. FlowForge Stability OS 4.0 prevents human burnout and critical path failure before it happens.' }
  ],
  emailSeries: [
    { subject: 'Your Engineering Stability Audit (ESA) is Ready', target: 'CTOs / VPs of Engineering', snippet: 'We analyzed your sprint volatility and identified 2 critical path bottlenecks. Review your 30-day stabilization plan.' },
    { subject: 'Introducing FlowForge Global Partner Program', target: 'System Integrators & Consultancies', snippet: 'Deliver high-margin governance audits and earn 20% recurring revenue share on managed enterprise accounts.' }
  ]
};
