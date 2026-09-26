export interface WebsitePageCopy {
  id: 'home' | 'product' | 'category' | 'founders' | 'pricing' | 'contact';
  title: string;
  headline: string;
  subheadline: string;
  sections: {
    heading: string;
    subheading?: string;
    body: string | string[];
    items?: string[];
    cta?: { label: string; action: string };
  }[];
}

export const WEBSITE_PAGES: WebsitePageCopy[] = [
  {
    id: 'home',
    title: 'Home Page',
    headline: 'FlowForge — The AI-Native Operating System for Engineering',
    subheadline: 'Stabilize load. Prevent burnout. Guarantee delivery.',
    sections: [
      {
        heading: 'Hero Section',
        body: `Engineering doesn’t fail because of code.\nEngineering fails because it’s overloaded.\n\nFlowForge solves the real problem: engineering load instability.`,
        cta: { label: 'Get a Demo', action: 'demo' }
      },
      {
        heading: 'The Category — Engineering Load Orchestration (ELO)',
        subheading: 'A new discipline created by FlowForge.',
        body: 'ELO stabilizes engineering load using AI:',
        items: [
          'Predict overload',
          'Prevent burnout',
          'Stabilize critical paths',
          'Inject slack',
          'Redistribute tasks',
          'Parallelize workflows',
          'Guarantee delivery'
        ],
        cta: { label: 'Read Category Paper', action: 'category' }
      },
      {
        heading: 'The Product — Six Engines. One Operating System.',
        body: 'FlowForge brings together six specialized autonomous engines in one unified system:',
        items: [
          'AI Orchestration Engine — Predicts instability. Stabilizes load.',
          'FFX Marketplace — Slack becomes liquid. Capacity becomes tradable.',
          'AI Swarm Copilot — Autonomous engineering agents.',
          'Compliance Engine — Automatic Texas SaaS exemption.',
          'What‑If Simulator — Predictive engineering economics.',
          'Enterprise Onboarding — Multi-tenant, audit-ready enterprise setup.'
        ]
      },
      {
        heading: 'The Outcome — Engineering Stability',
        body: 'FlowForge delivers predictable outcomes across the entire engineering organization:',
        items: [
          'Predictable delivery',
          'Burnout prevention',
          'Critical path protection',
          'Velocity stability',
          'Load clarity',
          'AI autonomy'
        ]
      },
      {
        heading: 'Call to Action',
        body: 'Engineering deserves stability. Get a demo and see FlowForge stabilize your critical path.',
        cta: { label: 'Book a Demo', action: 'contact' }
      }
    ]
  },
  {
    id: 'product',
    title: 'Product Page',
    headline: 'FlowForge is the AI-native operating system for engineering.',
    subheadline: 'Six interconnected engines designed to stabilize load, protect velocity, and guarantee delivery.',
    sections: [
      {
        heading: 'AI Orchestration Engine',
        subheading: 'Models load. Predicts instability. Stabilizes critical paths.',
        body: 'Continuously measures cognitive load, task dependencies, and sprint volatility to identify bottlenecks before slippage occurs.'
      },
      {
        heading: 'FFX Marketplace',
        subheading: 'Slack becomes a resource. Capacity becomes liquid. Critical paths become rescuable.',
        body: 'Convert idle developer hours into FFX Slack Credits or trade bandwidth securely across teams with Stripe Connect automated settlement.'
      },
      {
        heading: 'AI Swarm Copilot',
        subheading: 'Autonomous engineering agents across DevOps, Backend, Frontend, QA, and BA.',
        body: 'AI that acts rather than merely observing: executes automated task redistribution, dependency mapping, and risk mitigation.'
      },
      {
        heading: 'Compliance Engine',
        subheading: 'Automatic Texas SaaS exemption. Audit-ready billing. Enterprise trust.',
        body: 'Pre-configured compliance with Texas Tax Code §151.0101 and §151.351 with cryptographically verifiable audit logs.'
      },
      {
        heading: 'What‑If Simulator',
        subheading: 'Predictive engineering economics and Monte Carlo scenario modeling.',
        body: 'Simulate load scenarios, velocity forecasts, burnout curves, and critical path outcomes under shifting conditions.'
      },
      {
        heading: 'Enterprise Onboarding Platform',
        subheading: 'Multi-tenant isolation, AI pairing, marketplace activation, and compliance automation.',
        body: 'Enterprise-grade security, role-based access control, dedicated workspaces, and automated SOC2 / ISO compliance trails.'
      }
    ]
  },
  {
    id: 'category',
    title: 'Category Page — Engineering Load Orchestration',
    headline: 'Engineering Load Orchestration (ELO)',
    subheadline: 'The discipline of stabilizing engineering load using AI.',
    sections: [
      {
        heading: 'Why ELO Exists',
        body: `Engineering doesn’t fail because of code.\nEngineering fails because it’s overloaded.\n\nELO solves:`,
        items: [
          'Burnout',
          'Slippage',
          'Fragility',
          'Velocity collapse',
          'Critical path failure'
        ]
      },
      {
        heading: 'The ELO Model — Six Pillars',
        body: 'The six core pillars that define the Engineering Load Orchestration framework:',
        items: [
          'Load modeling',
          'Instability detection',
          'Critical path stabilization',
          'Burnout prevention',
          'Capacity liquidity',
          'AI autonomy'
        ]
      },
      {
        heading: 'The ELO Metrics',
        body: 'Objective mathematical and operational metrics to govern engineering health:',
        items: [
          'Load Stability Index (LSI)',
          'Critical Path Health (CPH)',
          'Burnout Risk Curve (BRC)',
          'Velocity Stability Score (VSS)',
          'Slack Efficiency Ratio (SER)',
          'Capacity Liquidity Index (CLI)'
        ]
      },
      {
        heading: 'Category Leadership',
        body: 'FlowForge created ELO. FlowForge leads ELO.',
        cta: { label: 'Read the Category Paper', action: 'category-paper' }
      }
    ]
  },
  {
    id: 'founders',
    title: 'Founders Page',
    headline: 'Meet the Founder',
    subheadline: 'Chuck Oduagu — Founder, FlowForge • Creator of Engineering Load Orchestration',
    sections: [
      {
        heading: 'Founder Statement',
        body: `“Engineering deserves stability.\nFlowForge exists to protect teams, stabilize load, and guarantee delivery.\nWe are building the operating system for engineering — and that future is inevitable.”\n\n— Chuck Oduagu, Founder & CEO`
      },
      {
        heading: 'The Founder Manifesto',
        body: `Engineering deserves stability.\nBurnout is predictable.\nFlowForge prevents it.\nFlowForge stabilizes load.\nFlowForge protects teams.\nFlowForge guarantees delivery.\nFlowForge defines the category.\nFlowForge becomes the future.\n\nFlowForge is inevitable.`,
        cta: { label: 'Read the Full Founder Manifesto', action: 'manifesto' }
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing Page',
    headline: 'Simple, predictable, enterprise-friendly.',
    subheadline: 'Transparent packaging designed for engineering teams, platforms, and global enterprises.',
    sections: [
      {
        heading: 'AI Autopilot Subscription',
        subheading: 'Predictive orchestration • Burnout prevention • Critical path stabilization',
        body: 'Continuous AI-powered load monitoring, automated sprint leveling, and proactive risk detection for engineering teams.'
      },
      {
        heading: 'FFX Credits',
        subheading: 'Usage-based slack injection • Capacity trading • Critical path rescue',
        body: 'On-demand liquidity to borrow specialized peer capacity during crunch periods or monetize idle bench bandwidth.'
      },
      {
        heading: 'Compliance Engine',
        subheading: 'Texas SaaS exemption automation • Audit-ready billing',
        body: 'Automated §151.0101 and §151.351 non-taxable SaaS certificates, line-item audit logs, and accounting transparency.'
      },
      {
        heading: 'Enterprise Multi-Tenant',
        subheading: 'Workspace isolation • Audit logs • AI governance',
        body: 'Custom SLAs, dedicated single-tenant VPC deployments, role-based access control, and executive support.'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact Page',
    headline: 'Engineering deserves stability.',
    subheadline: 'Let’s stabilize your critical path.',
    sections: [
      {
        heading: 'Book an Architecture Briefing & Live Demo',
        body: 'Schedule a 15-minute executive walkthrough with our engineering leadership to evaluate your team’s load stability index.',
        items: [
          'Full critical path dependency analysis',
          'Cognitive load and burnout vulnerability review',
          'FFX marketplace capacity simulation',
          'Texas Tax Code §151 SaaS compliance validation'
        ],
        cta: { label: 'Book a Demo', action: 'form' }
      }
    ]
  }
];

export function getFullWebsiteCopyText(): string {
  let text = `FLOWFORGE WEBSITE — FULL COPY SYSTEM\nEnterprise-grade. Category-first. Founder-defined.\nCreated by Chuck Oduagu — Founder, FlowForge\n\n========================================\n\n`;
  
  WEBSITE_PAGES.forEach(page => {
    text += `### ${page.title.toUpperCase()}\n`;
    text += `Headline: ${page.headline}\n`;
    text += `Subheadline: ${page.subheadline}\n\n`;
    page.sections.forEach(sec => {
      text += `[Section: ${sec.heading}]\n`;
      if (sec.subheading) text += `Subtitle: ${sec.subheading}\n`;
      if (Array.isArray(sec.body)) {
        text += sec.body.join('\n') + '\n';
      } else {
        text += sec.body + '\n';
      }
      if (sec.items) {
        sec.items.forEach(it => text += `• ${it}\n`);
      }
      if (sec.cta) {
        text += `CTA Button: [${sec.cta.label}]\n`;
      }
      text += `\n`;
    });
    text += `----------------------------------------\n\n`;
  });

  return text;
}
