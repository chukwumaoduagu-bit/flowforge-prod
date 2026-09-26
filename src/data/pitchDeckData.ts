export interface PitchSlide {
  slideNumber: number;
  title: string;
  subtitle: string;
  category: string;
  points: string[];
  takeaway?: string;
  callout?: string;
}

export const PITCH_DECK_SLIDES: PitchSlide[] = [
  {
    slideNumber: 1,
    title: "FlowForge",
    subtitle: "The AI-Native Operating System for Engineering",
    category: "Title",
    points: [
      "Created by Chuck Oduagu",
      "Category: Engineering Load Orchestration (ELO)",
      "Stabilize load. Prevent burnout. Guarantee delivery.",
      "CFO TAX PRO LLC • Dallas / Sachse, TX"
    ],
    takeaway: "The AI-native operating system for engineering.",
    callout: "Category: Engineering Load Orchestration (ELO)"
  },
  {
    slideNumber: 2,
    title: "The Problem",
    subtitle: "Engineering doesn't fail because of code. Engineering fails because it's overloaded.",
    category: "Problem",
    points: [
      "Load instability causes:",
      "• Burnout",
      "• Slippage",
      "• Fragility",
      "• Velocity collapse",
      "• Critical path failure",
      "• Team breakdown",
      "This is the root cause of engineering failure."
    ],
    takeaway: "The root cause of engineering failure is load instability.",
    callout: "Engineering doesn’t fail because of code. Engineering fails because it’s overloaded."
  },
  {
    slideNumber: 3,
    title: "The Consequence",
    subtitle: "Dashboards observe. Project managers track. Analytics report. None of them stabilize load.",
    category: "Landscape",
    points: [
      "Today’s engineering environment is:",
      "• Unpredictable",
      "• Burnout-prone",
      "• Dependency-heavy",
      "• Velocity-volatile",
      "• Fragile",
      "• Overloaded",
      "Existing tools observe without intervening."
    ],
    takeaway: "Traditional tooling only observes failure after it happens.",
    callout: "Dashboards observe. None of them stabilize load."
  },
  {
    slideNumber: 4,
    title: "The Insight",
    subtitle: "Engineering load instability is predictable, preventable, and solvable.",
    category: "Insight",
    points: [
      "• Engineering load instability is predictable.",
      "• Engineering load instability is preventable.",
      "• Engineering load instability is solvable.",
      "FlowForge solves the real problem by treating engineering capacity and load as a physical system."
    ],
    takeaway: "Engineering load instability is predictable, preventable, and solvable.",
    callout: "FlowForge solves the real problem."
  },
  {
    slideNumber: 5,
    title: "The Solution — FlowForge",
    subtitle: "FlowForge stabilizes engineering load using AI.",
    category: "Solution",
    points: [
      "FlowForge:",
      "• Predicts overload",
      "• Prevents burnout",
      "• Stabilizes critical paths",
      "• Injects slack",
      "• Redistributes tasks",
      "• Parallelizes workflows",
      "• Guarantees delivery",
      "FlowForge is the AI-native operating system for engineering."
    ],
    takeaway: "Autonomous stabilization of engineering load, critical paths, and team health.",
    callout: "FlowForge stabilizes engineering load using AI."
  },
  {
    slideNumber: 6,
    title: "The Category — ELO",
    subtitle: "Engineering Load Orchestration (ELO) — A new discipline created by FlowForge.",
    category: "Category",
    points: [
      "ELO includes:",
      "• Load modeling",
      "• Instability detection",
      "• Critical path stabilization",
      "• Burnout prevention",
      "• Capacity liquidity",
      "• AI autonomy",
      "ELO is not a feature. ELO is not a methodology. ELO is a category.",
      "FlowForge is the category leader."
    ],
    takeaway: "FlowForge created and leads the Engineering Load Orchestration category.",
    callout: "ELO is a category. FlowForge created it."
  },
  {
    slideNumber: 7,
    title: "The Product Architecture",
    subtitle: "FlowForge is built on six engines — a complete operating system.",
    category: "Architecture",
    points: [
      "1. AI Orchestration Engine: Predicts instability, models load, stabilizes critical paths",
      "2. FFX Marketplace: Slack becomes liquid, capacity becomes tradable",
      "3. AI Swarm Copilot: Autonomous engineering agents across DevOps, Backend, Frontend, QA, BA",
      "4. Texas Compliance Engine: Automatic §151.0101 & §151.351 SaaS tax exemption",
      "5. What‑If Simulator: Predictive engineering economics & Monte Carlo forecasts",
      "6. Enterprise Onboarding Platform: Multi-tenant, compliance-grade enterprise setup",
      "This is a full operating system."
    ],
    takeaway: "Six interconnected engines forming a comprehensive enterprise OS.",
    callout: "Six Engines. One Operating System."
  },
  {
    slideNumber: 8,
    title: "The Marketplace — FFX",
    subtitle: "FFX liquifies engineering capacity into an economic asset.",
    category: "Marketplace",
    points: [
      "• Slack Tokens → tradable capacity",
      "• Capacity Trading → liquidity",
      "• Critical Path Rescue → instant stability",
      "FFX creates:",
      "• Network effects",
      "• Economic moat",
      "• Category dominance",
      "FFX is the economic engine of engineering."
    ],
    takeaway: "FFX transforms trapped bench time into tradable, liquid engineering capacity.",
    callout: "FFX is the liquidity layer of engineering."
  },
  {
    slideNumber: 9,
    title: "The Compliance Engine",
    subtitle: "Automatic Texas SaaS Exemption & Audit-Ready Enterprise Trust.",
    category: "Compliance",
    points: [
      "Automatic Texas SaaS exemption:",
      "• §151.0101 (Non-taxable SaaS orchestration)",
      "• §151.351 (20% SaaS exemption automation)",
      "Audit-ready billing:",
      "• Token accounting",
      "• AI action logs",
      "• Usage transparency",
      "Compliance becomes a trust moat."
    ],
    takeaway: "Automated compliance creates defensibility and seamless CFO approval.",
    callout: "Compliance becomes a trust moat."
  },
  {
    slideNumber: 10,
    title: "The AI Autonomy Layer",
    subtitle: "AI that acts, intervenes, and stabilizes rather than merely observing.",
    category: "Autonomy",
    points: [
      "FlowForge builds:",
      "• Autonomous sprint restructuring",
      "• Autonomous capacity injection",
      "• Autonomous risk mitigation",
      "• Autonomous velocity optimization",
      "FlowForge is building the AI that runs engineering."
    ],
    takeaway: "Shifting from passive copilots to autonomous engineering operations.",
    callout: "FlowForge is building the AI that runs engineering."
  },
  {
    slideNumber: 11,
    title: "The GTM Strategy",
    subtitle: "Category-First, Texas-First, Founder-Led Enterprise Execution.",
    category: "Go-To-Market",
    points: [
      "Three pillars:",
      "1. Category-first: Establish ELO as the mandatory enterprise standard",
      "2. Texas-first: Win anchor enterprises across Austin, Dallas, and Houston tech ecosystems",
      "3. Founder-led enterprise deals: High-velocity direct executive closures",
      "GTM is built for enterprise velocity."
    ],
    takeaway: "High-conviction GTM targeting tech hubs with founder-led enterprise traction.",
    callout: "Category-first. Texas-first. Founder-led."
  },
  {
    slideNumber: 12,
    title: "The Revenue Model",
    subtitle: "Hybrid Revenue: Usage-Based Marketplace + High-Margin SaaS Subscriptions.",
    category: "Business Model",
    points: [
      "Hybrid revenue engines:",
      "• FFX Credits: Usage-based slack injection & capacity trading",
      "• AI Autopilot Subscription: Recurring predictive orchestration",
      "• Compliance Engine: Audit-ready billing and tax exemption module",
      "• Enterprise Multi-Tenant: Platform governance and workspace isolation",
      "Revenue is predictable and scalable."
    ],
    takeaway: "Predictable recurring software margins boosted by marketplace take-rates.",
    callout: "Revenue is predictable and scalable."
  },
  {
    slideNumber: 13,
    title: "The Team & Culture",
    subtitle: "Hiring System Thinkers and Critical Path Protectors.",
    category: "Team & Culture",
    points: [
      "FlowForge hires:",
      "• System thinkers",
      "• Load stabilizers",
      "• AI-native operators",
      "• Critical path protectors",
      "Culture pillars: Stability, Precision, Humanity, Autonomy, Inevitability",
      "Burnout prevention is a moral imperative."
    ],
    takeaway: "A mission-driven culture dedicated to humane, stable, and autonomous engineering.",
    callout: "Burnout prevention is a moral imperative."
  },
  {
    slideNumber: 14,
    title: "The Vision",
    subtitle: "FlowForge becomes the universal AI-native operating system for engineering.",
    category: "Vision",
    points: [
      "FlowForge becomes:",
      "• The engineering OS",
      "• The autonomy layer",
      "• The liquidity layer",
      "• The compliance layer",
      "• The stability layer",
      "FlowForge becomes the future of engineering."
    ],
    takeaway: "Defining the foundational operating system of the autonomous engineering era.",
    callout: "FlowForge becomes the future of engineering."
  },
  {
    slideNumber: 15,
    title: "The Ask",
    subtitle: "Join Us in Defining the Category and Transforming Engineering.",
    category: "The Ask",
    points: [
      "• Strategic Partnerships",
      "• Enterprise Onboarding & Pilots",
      "• Category Alignment",
      "• Strategic Investment",
      "• Industry Analyst Coverage",
      "FlowForge is inevitable."
    ],
    takeaway: "Partner with FlowForge to deploy Engineering Load Orchestration today.",
    callout: "FlowForge is inevitable."
  }
];

export function getFullPitchDeckText(): string {
  let text = `FLOWFORGE PITCH DECK — FOUNDER EDITION\nCreated by Chuck Oduagu — Founder, FlowForge\nCategory: Engineering Load Orchestration (ELO)\n\n`;
  PITCH_DECK_SLIDES.forEach(s => {
    text += `Slide ${s.slideNumber}: ${s.title}\n${s.subtitle}\n`;
    s.points.forEach(p => {
      text += `${p}\n`;
    });
    if (s.callout) text += `[Highlight: ${s.callout}]\n`;
    text += `\n---\n\n`;
  });
  return text;
}
