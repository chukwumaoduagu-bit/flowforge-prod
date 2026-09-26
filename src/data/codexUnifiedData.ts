export interface CodexChapter {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  content: string;
  bullets?: string[];
  declaration?: string;
}

export const CODEX_INTRODUCTION = {
  title: "INTRODUCTION — WHY FLOWFORGE EXISTS",
  author: "Chuck Oduagu — Founder, FlowForge",
  subtitle: "The Root Cause of Engineering Failure",
  content: `Engineering doesn’t fail because of code.
Engineering fails because it’s overloaded.

Burnout is predictable.
Slippage is predictable.
Fragility is predictable.
Velocity collapse is predictable.

The root cause is engineering load instability.

FlowForge exists to solve that.

FlowForge stabilizes engineering load using AI.
FlowForge protects teams.
FlowForge guarantees delivery.
FlowForge defines the category.

FlowForge is inevitable.`
};

export const CODEX_MANIFESTO = {
  title: "THE FLOWFORGE FOUNDER MANIFESTO",
  author: "By Chuck Oduagu — Founder, FlowForge",
  content: `Engineering deserves stability.
Burnout is predictable.
FlowForge prevents it.
FlowForge stabilizes load.
FlowForge protects teams.
FlowForge guarantees delivery.
FlowForge defines the category.
FlowForge becomes the future.

FlowForge is inevitable.`
};

export const UNIFIED_CODEX_CHAPTERS: CodexChapter[] = [
  {
    id: 1,
    title: "CHAPTER 1 — THE PROBLEM",
    subtitle: "The Anatomy of Engineering Load Instability",
    category: "Foundation",
    summary: "Engineering load becomes unstable because of overload, leading to predictable failure across teams and critical paths.",
    content: `Engineering load becomes unstable because:

• Too many tasks
• Too many dependencies
• Too much volatility
• Too much context switching
• Too little slack
• Too little capacity
• Too little predictability

This instability causes:

• Burnout
• Slippage
• Fragility
• Velocity collapse
• Critical path failure
• Team breakdown

Engineering doesn’t fail because of code.
Engineering fails because it’s overloaded.`,
    bullets: [
      "Instability Drivers: Too many tasks, dependencies, volatility, and context switching",
      "Resource Deficits: Too little slack, capacity, and predictability",
      "Predictable Consequences: Burnout, slippage, fragility, velocity collapse, critical path failure, team breakdown"
    ],
    declaration: "Engineering doesn’t fail because of code. Engineering fails because it’s overloaded."
  },
  {
    id: 2,
    title: "CHAPTER 2 — THE CATEGORY: ENGINEERING LOAD ORCHESTRATION (ELO)",
    subtitle: "A New Discipline Created by FlowForge",
    category: "Category",
    summary: "ELO is the discipline of stabilizing engineering load using AI — not a feature, methodology, or framework.",
    content: `ELO is the discipline of stabilizing engineering load using AI.

ELO includes:
• Load modeling
• Instability detection
• Critical path stabilization
• Burnout prevention
• Capacity liquidity
• AI autonomy

ELO is not a feature.
ELO is not a methodology.
ELO is not a framework.

ELO is a category.
FlowForge created it.`,
    bullets: [
      "Core Definition: The discipline of stabilizing engineering load using AI",
      "Six Pillars: Load modeling, instability detection, critical path stabilization, burnout prevention, capacity liquidity, AI autonomy",
      "Category Reality: ELO is a standalone enterprise category created and led by FlowForge"
    ],
    declaration: "ELO is a category. FlowForge created it."
  },
  {
    id: 3,
    title: "CHAPTER 3 — PRODUCT ARCHITECTURE",
    subtitle: "Six Engines. One Operating System.",
    category: "Architecture",
    summary: "FlowForge is an integrated multi-engine operating system that transforms engineering load into a stable, predictable system.",
    content: `FlowForge is built on six engines:

1. AI Orchestration Engine
Models load, predicts instability, stabilizes critical paths.

2. FFX Marketplace
Slack becomes liquid.
Capacity becomes tradable.

3. AI Swarm Copilot
AI agents act autonomously across engineering roles.

4. Texas Compliance Engine
Automatic §151.0101 and §151.351 SaaS exemption.

5. What‑If Simulator
Predictive engineering economics.

6. Enterprise Onboarding Platform
Multi-tenant, compliance-grade enterprise onboarding.

FlowForge is a system — not a tool.`,
    bullets: [
      "1. AI Orchestration Engine: Models load, predicts instability, stabilizes critical paths",
      "2. FFX Marketplace: Slack becomes liquid, capacity becomes tradable",
      "3. AI Swarm Copilot: AI agents act autonomously across DevOps, Backend, Frontend, QA, and BA",
      "4. Texas Compliance Engine: Automatic §151.0101 and §151.351 SaaS exemption",
      "5. What-If Simulator: Predictive engineering economics and Monte Carlo forecasts",
      "6. Enterprise Onboarding Platform: Multi-tenant, compliance-grade enterprise onboarding"
    ],
    declaration: "FlowForge is a system — not a tool."
  },
  {
    id: 4,
    title: "CHAPTER 4 — AI AUTONOMY",
    subtitle: "AI That Acts Instead of Observes",
    category: "Autonomy",
    summary: "While current AI tools merely observe or assist, FlowForge's AI actively intervenes to stabilize engineering operations.",
    content: `AI today observes.
FlowForge’s AI acts.

FlowForge’s autonomy stack:
• Perception
• Prediction
• Decision
• Action

FlowForge builds:
• Autonomous sprint restructuring
• Autonomous capacity injection
• Autonomous risk mitigation
• Autonomous velocity optimization

FlowForge is building the AI that runs engineering.`,
    bullets: [
      "The Paradigm Shift: Moving from passive observation to autonomous action",
      "Autonomy Stack: Perception → Prediction → Decision → Action",
      "Autonomous Capabilities: Sprint restructuring, capacity injection, risk mitigation, velocity optimization"
    ],
    declaration: "FlowForge is building the AI that runs engineering."
  },
  {
    id: 5,
    title: "CHAPTER 5 — ENGINEERING LOAD ORCHESTRATION (ELO)",
    subtitle: "Pillars, Metrics, and the Future of Engineering",
    category: "Category",
    summary: "The foundational framework and verifiable metrics governing Engineering Load Orchestration.",
    content: `ELO is built on six pillars:
• Load modeling
• Instability detection
• Critical path stabilization
• Burnout prevention
• Capacity liquidity
• AI autonomy

ELO metrics:
• Load Stability Index (LSI)
• Critical Path Health (CPH)
• Burnout Risk Curve (BRC)
• Velocity Stability Score (VSS)
• Slack Efficiency Ratio (SER)
• Capacity Liquidity Index (CLI)

ELO is the future of engineering.`,
    bullets: [
      "Six Pillars: Load modeling, instability detection, critical path stabilization, burnout prevention, capacity liquidity, AI autonomy",
      "Six ELO Metrics: Load Stability Index, Critical Path Health, Burnout Risk Curve, Velocity Stability Score, Slack Efficiency Ratio, Capacity Liquidity Index",
      "Enterprise Impact: Eliminates delivery risk and establishes predictable engineering physics"
    ],
    declaration: "ELO is the future of engineering."
  },
  {
    id: 6,
    title: "CHAPTER 6 — MARKETPLACE ECONOMICS (FFX)",
    subtitle: "The Liquidity Layer of Engineering",
    category: "Economics",
    summary: "FFX transforms fixed engineering capacity into a liquid, tradable economic asset with network effects.",
    content: `FFX transforms engineering into an economy.

• Slack Tokens → tradable capacity
• Capacity Trading → liquidity
• Critical Path Rescue → instant stability

FFX creates:
• Network effects
• Economic moat
• Category dominance

FFX is the liquidity layer of engineering.`,
    bullets: [
      "Slack Tokens: Quantified units of available engineering bandwidth",
      "Capacity Trading: Liquid exchange across teams, organizations, and ecosystems",
      "Critical Path Rescue: Instant capacity injection prevents zero-float slippage",
      "Defensibility: Creates high-retention network effects and economic moats"
    ],
    declaration: "FFX is the liquidity layer of engineering."
  },
  {
    id: 7,
    title: "CHAPTER 7 — COMPLIANCE ENGINE",
    subtitle: "The Trust Moat of FlowForge",
    category: "Compliance",
    summary: "Automated Texas SaaS tax exemption and audit-ready accounting that unlocks enterprise trust.",
    content: `FlowForge automates:
• Texas SaaS exemption (§151.0101 and §151.351)
• Audit-ready billing
• Usage transparency
• Token accounting
• AI action logs

Compliance becomes a trust moat.`,
    bullets: [
      "Tax Code Automation: Automatic Texas Tax Code §151.0101 & §151.351 non-taxable SaaS exemption",
      "Enterprise Accounting: Real-time token usage logs and cryptographically verifiable audit trails",
      "AI Governance: Full transparency into AI decisions and autonomous action justifications",
      "CFO Alignment: Frictionless procurement and legal validation"
    ],
    declaration: "Compliance becomes a trust moat."
  },
  {
    id: 8,
    title: "CHAPTER 8 — SALES SYSTEM",
    subtitle: "Selling Engineering Stability",
    category: "Go-To-Market",
    summary: "FlowForge sells engineering stability and predictable delivery, not dashboards or productivity features.",
    content: `FlowForge sells:
Engineering stability.
Not dashboards.
Not productivity.
Not features.

Sales narrative:
• Problem → load instability
• Consequence → burnout, slippage
• Solution → FlowForge stabilization
• Category → ELO
• Outcome → predictable delivery
• Close → pilot or full onboarding

Sales culture is executive, direct, outcome-driven.`,
    bullets: [
      "Core Offering: Engineering stability, burnout prevention, and delivery certainty",
      "Target Buyer: CTO, VP Engineering, Head of DevOps, CFO, CIO",
      "Sales Narrative: Problem → Consequence → Solution → Category → Outcome → Close",
      "Sales Culture: Executive, direct, authoritative, outcome-driven"
    ],
    declaration: "FlowForge sells engineering stability."
  },
  {
    id: 9,
    title: "CHAPTER 9 — MARKETING & PR SYSTEM",
    subtitle: "Marketing the Category to Create Inevitability",
    category: "Marketing",
    summary: "FlowForge markets the category of Engineering Load Orchestration, establishing founder and enterprise authority.",
    content: `FlowForge markets the category — not the product.

Marketing pillars:
• Category creation
• Founder narrative
• Enterprise messaging
• Thought leadership
• PR dominance

Brand voice:
• Direct
• Executive
• Authoritative
• Calm
• Predictive
• Category-first

Marketing creates inevitability.`,
    bullets: [
      "Category First: Build the ELO category rather than competing on feature checklists",
      "Five Pillars: Category creation, founder narrative, enterprise messaging, thought leadership, PR dominance",
      "Brand Voice: Direct, executive, authoritative, calm, predictive, category-first"
    ],
    declaration: "Marketing creates inevitability."
  },
  {
    id: 10,
    title: "CHAPTER 10 — PEOPLE & CULTURE SYSTEM",
    subtitle: "Burnout Prevention as a Moral Imperative",
    category: "Culture",
    summary: "FlowForge hires system thinkers and load stabilizers, treating burnout prevention as a fundamental moral obligation.",
    content: `FlowForge hires:
• System thinkers
• Load stabilizers
• AI-native operators
• Critical path protectors

FlowForge does not hire chaos creators.

Culture pillars:
• Stability
• Precision
• Humanity
• Autonomy
• Inevitability

Burnout prevention is a moral imperative.`,
    bullets: [
      "Hiring Standards: System thinkers, load stabilizers, AI-native operators, critical path protectors",
      "Cultural Pillars: Stability, Precision, Humanity, Autonomy, Inevitability",
      "Core Values: Burnout prevention is a moral imperative; humane engineering creates enduring velocity"
    ],
    declaration: "Burnout prevention is a moral imperative."
  },
  {
    id: 11,
    title: "CHAPTER 11 — OPERATIONS SYSTEM",
    subtitle: "Enterprise-Grade Stability and Reliability",
    category: "Operations",
    summary: "Operations prioritize stability first, velocity second, and scale third to protect teams, delivery, and revenue.",
    content: `Operations protect:
• Customers
• Teams
• Delivery
• Compliance
• Revenue
• Reputation

Operations pillars:
• Load-first planning
• AI-native workflows
• Compliance automation
• Enterprise reliability

Operations make FlowForge enterprise-grade.`,
    bullets: [
      "Operational Hierarchy: Stability first → Velocity second → Scale third",
      "What Operations Protects: Customers, teams, delivery, compliance, revenue, reputation",
      "Four Pillars: Load-first planning, AI-native workflows, compliance automation, enterprise reliability"
    ],
    declaration: "Operations make FlowForge enterprise-grade."
  },
  {
    id: 12,
    title: "CHAPTER 12 — SCALING SYSTEM",
    subtitle: "Scaling Stability, Not Complexity",
    category: "Scale",
    summary: "FlowForge scales through autonomy, clarity, AI leverage, and parallelization rather than bureaucracy.",
    content: `FlowForge scales by:
• Increasing autonomy
• Increasing clarity
• Increasing AI leverage
• Increasing parallelization
• Increasing load stability

Scaling curve:
• 10 → foundational
• 50 → acceleration
• 200 → domination
• 500 → institution

FlowForge scales stability, not complexity.`,
    bullets: [
      "Scaling Levers: Autonomy, clarity, AI leverage, parallelization, load stability",
      "Scaling Curve: 10 (Foundational) → 50 (Acceleration) → 200 (Domination) → 500 (Institution)",
      "Anti-Chaos Philosophy: Autonomous pods, AI pairing, and load-first planning eliminate administrative bloat"
    ],
    declaration: "FlowForge scales stability, not complexity."
  },
  {
    id: 13,
    title: "CHAPTER 13 — REVENUE & GTM SYSTEM",
    subtitle: "Predictable, Scalable Enterprise Monetization",
    category: "Revenue",
    summary: "Monetizing stability through usage-based FFX credits, recurring AI subscriptions, and platform tiers.",
    content: `FlowForge monetizes stability.

Revenue engines:
• FFX Credits (Usage-based slack & capacity trading)
• AI Autopilot Subscription (Predictive orchestration)
• Compliance Engine (Texas SaaS exemption automation)
• Enterprise Multi-Tenant (Workspace isolation & governance)

GTM pillars:
• Category leadership
• Texas-first dominance
• Founder-led enterprise deals

Revenue becomes predictable.`,
    bullets: [
      "Four Revenue Engines: FFX Credits, AI Autopilot Subscription, Compliance Engine, Enterprise Multi-Tenant",
      "GTM Pillars: Category leadership, Texas-first dominance, founder-led enterprise deals",
      "Predictable Economics: High-margin software subscriptions coupled with liquid marketplace transaction volume"
    ],
    declaration: "Revenue becomes predictable."
  },
  {
    id: 14,
    title: "CHAPTER 14 — LEADERSHIP & GOVERNANCE SYSTEM",
    subtitle: "Leadership That Protects Stability",
    category: "Governance",
    summary: "Institutional governance and decisive leadership frameworks designed to build an enduring enterprise OS.",
    content: `Leadership protects stability.

Leadership pillars:
• Clarity
• Precision
• Humanity
• Autonomy
• Inevitability

Governance layers:
• Founder
• Executive
• Team

Leadership becomes institutional.`,
    bullets: [
      "Leadership Mandate: Leadership protects stability in load, people, systems, decisions, and culture",
      "Five Pillars: Clarity, Precision, Humanity, Autonomy, Inevitability",
      "Governance Hierarchy: Founder (Category & Vision) → Executive (Engines & GTM) → Team (Autonomous Pods)"
    ],
    declaration: "Leadership becomes institutional."
  },
  {
    id: 15,
    title: "CHAPTER 15 — FOUNDER TOOLS",
    subtitle: "Speeches, Scripts, Narratives, and Executive Assets",
    category: "Founder Tools",
    summary: "The executive toolset equipping the founder as the global voice of engineering stability.",
    content: `You now have:
• Founder Speech
• Founder Narrative
• Category Speech
• Vision Speech
• Objection Pack
• Demo Script
• Evangelism Guide
• Executive Q&A
• Internal Alignment Speech

These tools make you the voice of engineering stability.`,
    bullets: [
      "Founder Speeches: 60-second elevator pitch, category keynote, and autonomy vision address",
      "Objection Pack: Crisp rebuttals for dashboards, PM tools, burnout skepticism, and AI adoption",
      "Demo Script: Step-by-step executive walkthrough from load instability to critical path rescue",
      "Evangelism Guide: Rules of engagement for framing conversations around engineering load and stability"
    ],
    declaration: "These tools make you the voice of engineering stability."
  },
  {
    id: 16,
    title: "CHAPTER 16 — THE FUTURE OF FLOWFORGE",
    subtitle: "The Endgame: The Engineering Operating System",
    category: "Vision",
    summary: "FlowForge's trajectory toward becoming the universal AI-native operating system for global engineering.",
    content: `FlowForge is building:
• AI-managed engineering
• Burnout-proof teams
• Stable critical paths
• Predictable delivery
• Liquid capacity
• Automated compliance
• Global ELO adoption

FlowForge becomes the engineering OS.

FlowForge is inevitable.`,
    bullets: [
      "The Autonomous Era: AI actively manages load, rescues critical paths, and coordinates capacity",
      "Global Category Dominance: ELO becomes the recognized standard for modern engineering organizations",
      "Enduring Transformation: Engineering transforms from chaotic firefighting into predictable, humane physics"
    ],
    declaration: "FlowForge is inevitable."
  }
];

export function getFullCodexText(): string {
  let out = `THE FLOWFORGE FOUNDER CODEX — UNIFIED EDITION\nBy Chuck Oduagu — Founder, FlowForge\n\n`;
  out += `${CODEX_INTRODUCTION.title}\n${CODEX_INTRODUCTION.content}\n\n`;
  
  UNIFIED_CODEX_CHAPTERS.forEach((ch) => {
    out += `${ch.title}\n${ch.content}\n\n`;
  });

  out += `${CODEX_MANIFESTO.title}\n${CODEX_MANIFESTO.content}\n`;
  return out;
}
