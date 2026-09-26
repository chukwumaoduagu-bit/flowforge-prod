export interface KeynoteSection {
  id: string;
  timeCode: string;
  sectionTitle: string;
  speakerDirection: string;
  speechText: string[];
  slideVisual: {
    headline: string;
    subtext: string;
    visualType: 'stat' | 'diagram' | 'code' | 'quote' | 'demo';
    content: string;
  };
  teleprompterNotes: string;
}

export interface ExecutiveKeynoteData {
  title: string;
  founderSpeaker: string;
  eventContext: string;
  runTime: string;
  coreTagline: string;
  opening: {
    hook: string;
    greeting: string;
    premise: string;
  };
  theProblem: {
    headline: string;
    painPoints: string[];
    coreObservation: string;
  };
  theBreakthrough: {
    headline: string;
    capabilities: string[];
    summary: string;
  };
  theDemonstration: {
    headline: string;
    steps: {
      step: number;
      action: string;
      screenVisual: string;
      teleprompterLine: string;
    }[];
  };
  theCategory: {
    name: string;
    acronym: string;
    statement: string;
  };
  callToAction: {
    headline: string;
    steps: string[];
    closingLine: string;
  };
  fullSpeechTranscript: KeynoteSection[];
}

export interface MarketingAssetAd {
  id: string;
  type: string;
  headline: string;
  body: string;
  cta: string;
  targetAudience: string;
  channel: string;
  visualPrompt: string;
}

export interface SocialAssetItem {
  id: string;
  platform: 'LinkedIn' | 'Twitter/X';
  assetName: string;
  content: string;
  hashtags: string[];
  graphicConcept: string;
  copyableSnippet: string;
}

export interface EmailCampaignStep {
  step: number;
  subject: string;
  previewText: string;
  targetRole: string;
  coreMessage: string;
  fullBody: string;
  ctaText: string;
}

export interface GlobalMarketingAssetsData {
  campaignName: string;
  globalTagline: string;
  slogan: string;
  brandImagery: {
    palette: { name: string; hex: string; role: string }[];
    coreVisuals: { name: string; description: string; format: string }[];
  };
  globalAds: MarketingAssetAd[];
  socialAssets: SocialAssetItem[];
  emailSequence: EmailCampaignStep[];
}

export interface SalesDiscoveryQuestion {
  id: string;
  category: string;
  question: string;
  whyAsk: string;
  targetResponse: string;
  transitionToDemo: string;
}

export interface SalesObjectionItem {
  id: string;
  objection: string;
  context: string;
  corePivot: string;
  fullScript: string;
  proofPoint: string;
}

export interface SalesStageItem {
  step: number;
  stageName: string;
  duration: string;
  primaryObjective: string;
  keyDeliverable: string;
  qualificationCriteria: string;
  exitGate: string;
}

export interface EnterpriseSalesPlaybookData {
  salesPhilosophy: string;
  salesMotion: SalesStageItem[];
  discoveryQuestions: SalesDiscoveryQuestion[];
  fiveMinuteDemoScript: {
    minute: string;
    focus: string;
    screenToShow: string;
    spokenTrack: string;
    objectionDefused: string;
  }[];
  valueMessaging: {
    pillar: string;
    tagline: string;
    executiveProof: string;
  }[];
  objectionHandling: SalesObjectionItem[];
  closingScript: {
    headline: string;
    script: string;
    handlingHesitation: string;
    freePilotOffer: string;
  };
}

export interface SummitSession {
  id: string;
  type: 'Keynote' | 'Breakout' | 'Workshop' | 'Exam' | 'Closing';
  timeSlot: string;
  title: string;
  speaker: string;
  speakerRole: string;
  track: string;
  room: string;
  abstract: string;
  deliverableOrArtifact: string;
}

export interface StabilitySummitEventData {
  eventName: string;
  year: string;
  theme: string;
  location: string;
  dates: string;
  targetAttendance: string;
  eventStructureSummary: {
    keynoteOverview: string;
    breakoutsOverview: string;
    workshopsOverview: string;
    examsOverview: string;
  };
  agendaSchedule: SummitSession[];
  speakers: {
    name: string;
    title: string;
    organization: string;
    topic: string;
    bio: string;
  }[];
  officialDeliverables: {
    name: string;
    format: string;
    distributionChannel: string;
    description: string;
  }[];
  closingDeclaration: string;
}

// =========================================================================
// 1. EXECUTIVE KEYNOTE SPEECH DATA
// =========================================================================
export const FLOWFORGE_EXECUTIVE_KEYNOTE: ExecutiveKeynoteData = {
  title: 'Stability Is the Future of Engineering',
  founderSpeaker: 'Chuck — Founder & CEO, FlowForge',
  eventContext: 'Global Stability Summit Keynote & Category Inauguration',
  runTime: '18 Minutes Stage Delivery',
  coreTagline: 'Protect your team. Accelerate your delivery.',
  opening: {
    hook: 'Good morning.',
    greeting: 'Welcome to the turning point in modern software engineering.',
    premise:
      'Engineering is the backbone of every modern company — yet it operates without stability systems. We have DevOps. We have observability. We have CI/CD. But we do not have stability. Today, that changes.'
  },
  theProblem: {
    headline: 'The Invisible Fracture in Software Engineering',
    painPoints: [
      'Burnout is rising: Senior developers leave not because the code is hard, but because the cognitive load is relentless.',
      'Delivery timelines are slipping: 68% of enterprise roadmaps miss quarterly commitments despite Agile ceremonies.',
      'Critical paths are fragile: Over 35% of release branches are bottlenecked by single key engineers.',
      'Volatility is increasing: PR review latency and commit turbulence compound unpredictably.',
      'Teams are stretched thin: Scheduled capacity routinely hits 95–100%, causing queuing times to spike to infinity.'
    ],
    coreObservation:
      'We’ve built everything except the system that protects the people doing the work. We automated code deployment, automated server scaling, automated testing — and left human engineering capacity completely unprotected.'
  },
  theBreakthrough: {
    headline: 'FlowForge Stability OS: The Missing Layer',
    capabilities: [
      'Measures load with mathematical Load Stability Scores (LSS).',
      'Predicts burnout 14–21 days in advance using behavioral commit heuristics.',
      'Stabilizes delivery by mandating a sovereign 15% Slack Liquidity buffer.',
      'Autonomously rebalances work queues every Monday at 00:00 UTC.',
      'Enforces governance without human friction via RulePack v1.',
      'Forecasts delivery risk with statistical confidence intervals.',
      'Certifies stability through board-grade Enterprise Stability Audits (ESA).'
    ],
    summary:
      'FlowForge is not another passive dashboard. It is an active Operating System for human engineering systems.'
  },
  theDemonstration: {
    headline: '5 Minutes to Autonomous Stability',
    steps: [
      {
        step: 1,
        action: 'Establishes a Stability Score',
        screenVisual: 'Load Stability Score (LSS) dial calculates from 0 to 100 in real time across all pods.',
        teleprompterLine: 'Watch the screen. In under thirty seconds, FlowForge parses the repository metadata and computes an objective 71 LSS for Pod Alpha.'
      },
      {
        step: 2,
        action: 'Measures Slack Liquidity',
        screenVisual: '15% Slack Liquidity buffer gauge showing current deficit (8.2% vs required 15%).',
        teleprompterLine: 'Here is the truth: Pod Alpha has only 8% slack. Kingman’s formula tells us their cycle times will quadruple. FlowForge flags the shortage instantly.'
      },
      {
        step: 3,
        action: 'Detects Volatility & Critical Path Fragility',
        screenVisual: 'Volatility Index radar at 31.4% with DAG showing Marcus holding 42% of PR approvals.',
        teleprompterLine: 'Notice Marcus. One brilliant engineer is sitting on 42% of the critical path. That is not velocity — that is a systemic single point of failure.'
      },
      {
        step: 4,
        action: 'Forecasts Delivery Risk',
        screenVisual: 'Milestone completion prediction curve indicating an 18-day projected slip at 95% confidence.',
        teleprompterLine: 'Three weeks before sprint failure, our intelligence layer sounds the alarm with 89% precision.'
      },
      {
        step: 5,
        action: 'Executes Autonomy & Generates ESA',
        screenVisual: 'PROTO-01 Burnout Shield engages: WIP capped at 3, non-critical backlog throttled, ESA PDF generated.',
        teleprompterLine: 'Click: Autonomy engages. Zero code altered. Queue rebalanced. LSS leaps to 86. Board-ready ESA generated.'
      }
    ]
  },
  theCategory: {
    name: 'Engineering Stability Platforms',
    acronym: 'ESP',
    statement:
      'Today, we formally launch the category: Engineering Stability Platforms (ESP). FlowForge is the Stability OS that defines, leads, and scales this category.'
  },
  callToAction: {
    headline: 'The Call to Action',
    steps: [
      'Engineering leaders — it’s time to protect your teams, accelerate your delivery, and adopt stability systems.',
      'Start your free 30-day pilot on your live GitHub & Jira data.',
      'Receive your institutional Enterprise Stability Audit (ESA).',
      'Stabilize your engineering team permanently.'
    ],
    closingLine: 'Stability is the new velocity. Thank you.'
  },
  fullSpeechTranscript: [
    {
      id: 'section-1-opening',
      timeCode: '00:00 – 03:00',
      sectionTitle: 'I. The Grand Premise',
      speakerDirection: '[Walks slowly to center stage. Pauses. High-contrast white lighting.]',
      speechText: [
        'Good morning.',
        'Engineering is the backbone of every modern enterprise. Every bank is a software company. Every healthcare network is a software company. Every logistics giant is powered by code.',
        'Yet engineering operations run entirely without stability systems.',
        'Think about that for a moment.',
        'We have DevOps to automate our code deployment. We have APM and observability to monitor our Kubernetes clusters. We have CI/CD pipelines that compile our binaries in seconds.',
        'But we do not have a single system that measures whether the human engineering team is stable, overloaded, or heading toward catastrophic burnout.',
        'Today, that changes.'
      ],
      slideVisual: {
        headline: 'We Built Everything Except the System That Protects the Builders.',
        subtext: 'DevOps & Observability monitor servers. Nothing monitors human workflow elasticity.',
        visualType: 'diagram',
        content: 'DevOps (Code) + Observability (Infra) + ??? (Human Workflow) = FlowForge Stability OS'
      },
      teleprompterNotes: 'Deliver opening with calm, deliberate authority. Let "Today, that changes" ring out.'
    },
    {
      id: 'section-2-problem',
      timeCode: '03:00 – 07:00',
      sectionTitle: 'II. The Cost of Unmitigated Instability',
      speakerDirection: '[Moves stage left. Tone shifts from reflective to urgent.]',
      speechText: [
        'Let’s talk about what happens inside engineering teams when there are no stability guardrails.',
        'Burnout is at an all-time high. In the last year, over 65% of senior engineers reported severe cognitive exhaustion. When a senior architect leaves, it costs the enterprise over $180,000 to replace them — but the real cost is the lost institutional knowledge and the project delays that follow.',
        'Delivery timelines slip routinely. Over two-thirds of major enterprise software releases miss their target dates. Why? Not because engineers don’t work hard, but because their sprint queues are scheduled at 95% to 100% capacity.',
        'In mathematics, Kingman’s Queuing Formula proves that when utilization approaches 100%, wait times approach infinity. When you have zero buffer, the smallest bug creates an organizational traffic jam.',
        'And look at your critical path: a handful of hero developers are forced to review 40% of all pull requests. They are exhausted. The junior engineers are blocked. Volatility spirals.',
        'We have treated engineering capacity as an infinite elastic sponge. It is not.'
      ],
      slideVisual: {
        headline: 'Kingman’s Law: 100% Utilization = Infinite Queue Delay',
        subtext: '$85B in annual enterprise losses from turnover, rework, and missed releases.',
        visualType: 'stat',
        content: 'E(W_q) ≈ (u / (1 - u)) × Var × t_s  |  u = 0.98  ⇒  Wait Time = +800%'
      },
      teleprompterNotes: 'Highlight the phrase "infinite elastic sponge". Emphasize that this is a mathematical reality, not an opinion.'
    },
    {
      id: 'section-3-breakthrough',
      timeCode: '07:00 – 11:30',
      sectionTitle: 'III. Introducing FlowForge Stability OS',
      speakerDirection: '[Smiles. Hands open. Main screen blooms with FlowForge Cyan & Gold graphics.]',
      speechText: [
        'To solve this, we had to rethink engineering operations from the ground up.',
        'We created FlowForge: the Stability OS for engineering teams.',
        'FlowForge does not ask developers to fill out timesheets. It does not install intrusive desktop spyware. It connects directly to your existing GitHub, GitLab, and Jira metadata.',
        'Every morning at 06:00 UTC, FlowForge calculates the Load Stability Score — the LSS — on a crisp 0-to-100 scale.',
        'It enforces our proprietary Slack Liquidity rule: an uncompromised 15% buffer that ensures your engineering pipeline can absorb shocks without breaking.',
        'It monitors the Volatility Index to detect sprint turbulence before it causes defects. It tracks the Critical Path to ensure no single engineer owns more than 35% of release-blocking code.',
        'And when a team’s stability dips below 75, FlowForge’s Autonomy Engine steps in — rebalancing review queues, capping in-flight work, and shielding your developers automatically.'
      ],
      slideVisual: {
        headline: 'The 7 Pillars of FlowForge Stability OS',
        subtext: 'LSS Score • Slack Liquidity • Volatility Index • Critical Path • Autonomy • Intelligence • ESA',
        visualType: 'diagram',
        content: 'Continuous Metadata Telemetry ➔ Invariant Engine ➔ Autonomous Burnout Shield'
      },
      teleprompterNotes: 'Keep energy uplifting and confident. Present FlowForge as the obvious, inevitable solution.'
    },
    {
      id: 'section-4-demo',
      timeCode: '11:30 – 15:00',
      sectionTitle: 'IV. The 5-Minute Live Proof',
      speakerDirection: '[Steps to the podium. Gestures to the live screen demonstration.]',
      speechText: [
        'Don’t take my word for it. Let me show you what happens in just five minutes with live enterprise data.',
        'On the screen right now, FlowForge has ingested three months of commit and ticket metadata from a 120-person engineering organization.',
        'Look at the top dial: the Load Stability Score sits at 68. The gauge is amber. FlowForge immediately highlights the root cause: Slack Liquidity is down to 7.4%, and PR review latency has spiked to 38 hours.',
        'Now watch the DAG: Marcus, a staff architect, is tagged as a critical path bottleneck. He is responsible for 41% of all release commits. If Marcus gets sick or resigns, Q4 delivery collapses.',
        'Now watch what happens when we activate FlowForge Autonomy.',
        '[Clicks button.]',
        'Boom. PROTO-01 Burnout Shield engages. FlowForge automatically caps WIP at three tickets per developer, redistributes five pending pull requests to qualified secondary reviewers, and freezes non-critical backlog items.',
        'The LSS jumps to 84. The volatility curve flattens. And with one click, we generate an official Enterprise Stability Audit — ready for the CTO and the Board of Directors.'
      ],
      slideVisual: {
        headline: 'Live Telemetry: From 68 LSS (Strained) to 84 LSS (Stable)',
        subtext: 'Queue rebalanced in 2.4 seconds without modifying a single line of code.',
        visualType: 'demo',
        content: 'POD ALPHA: LSS 68 ➔ 84  |  Slack Liquidity 7.4% ➔ 15.2%  |  Marcus Load: 41% ➔ 29%'
      },
      teleprompterNotes: 'Time the click with the visual update on the screen. Deliver "Boom" with crisp impact.'
    },
    {
      id: 'section-5-closing',
      timeCode: '15:00 – 18:00',
      sectionTitle: 'V. The Category & The Call to Action',
      speakerDirection: '[Steps forward to edge of stage. Direct eye contact with the audience.]',
      speechText: [
        'What you have seen today is not an incremental feature.',
        'Just as ERP stabilized corporate finance in the 1990s, and SRE stabilized cloud infrastructure in the 2010s, today we establish the next defining category of enterprise technology:',
        'Engineering Stability Platforms — ESP.',
        'FlowForge is the Stability OS that defines, leads, and scales this category.',
        'To every CTO, VP of Engineering, and engineering director in this room and watching online:',
        'You do not have to accept developer burnout as the price of doing business. You do not have to accept missed delivery dates as inevitable.',
        'You can stabilize your engineering organization in thirty days.',
        'We invite you to start a free 30-day pilot today. Connect your repositories in five minutes. Receive your baseline Enterprise Stability Audit. Protect your people. Accelerate your delivery.',
        'Stability is the future of engineering. Stability starts here.',
        'Thank you.'
      ],
      slideVisual: {
        headline: 'Stability Starts Here: Start Your Free 30-Day Pilot',
        subtext: 'Get your Enterprise Stability Audit (ESA) at flowforge.ai',
        visualType: 'quote',
        content: '“Stability is the new velocity.” — Chuck, Founder & CEO, FlowForge'
      },
      teleprompterNotes: 'Finish strong and resonant. Hold eye contact on the final sentence before bowing.'
    }
  ]
};

// =========================================================================
// 2. GLOBAL MARKETING ASSETS DATA
// =========================================================================
export const FLOWFORGE_MARKETING_ASSETS: GlobalMarketingAssetsData = {
  campaignName: 'Stability Starts Here',
  globalTagline: 'Engineering stability in 30 days.',
  slogan: 'Protect your team. Accelerate your delivery.',
  brandImagery: {
    palette: [
      { name: 'Deep Stability Blue', hex: '#0B132B', role: 'Canvas foundation, institutional trust' },
      { name: 'Stability Cyan', hex: '#06B6D4', role: 'Real-time telemetry, LSS metrics' },
      { name: 'Autonomy Gold', hex: '#F59E0B', role: 'Autonomous engine triggers, governance shields' },
      { name: 'Intelligence Teal', hex: '#10B981', role: 'Predictive forecasting, healthy slack liquidity' },
      { name: 'Critical Crimson', hex: '#F43F5E', role: 'Burnout hazard, critical path bottleneck alerts' }
    ],
    coreVisuals: [
      {
        name: 'Stability Score Iconography',
        description: 'Circular radial dial (0-100) with gradient rings denoting Strained (<75), Governed (75-84), and Optimized (85+).',
        format: 'SVG / Vector & CSS Animation'
      },
      {
        name: 'Slack Liquidity Meter',
        description: 'Horizontal fluid reservoir gauge visualizing the 15% unallocated capacity threshold and burst capacity.',
        format: 'Interactive React Canvas / Infographic'
      },
      {
        name: 'Burnout Curve Visualization',
        description: 'Exponential inflection chart showing cognitive fatigue compounding beyond 85% sprint capacity.',
        format: 'Motion Graph & Motion Asset'
      }
    ]
  },
  globalAds: [
    {
      id: 'ad-stability-os',
      type: 'Search & Paid Display',
      headline: 'Engineering stability in 30 days.',
      body: 'FlowForge measures load, predicts burnout, and stabilizes delivery with automated governance.',
      cta: 'Start Free Pilot',
      targetAudience: 'Chief Technology Officers, VPs of Engineering, Directors of Software Development',
      channel: 'Google Search, LinkedIn Sponsored Updates, Hacker News Sponsorship',
      visualPrompt: 'Deep blue technical interface showing live 88 LSS gauge and clean Kingman curve.'
    },
    {
      id: 'ad-burnout-prevention',
      type: 'Paid Social & Executive Carousel',
      headline: 'Burnout is predictable.',
      body: 'FlowForge detects burnout signals 14–21 days before they cause senior developer resignations.',
      cta: 'Get Your ESA',
      targetAudience: 'Engineering Leaders, HR Leaders, Chief People Officers',
      channel: 'LinkedIn Carousel, Tech Newsletters (ByteByteGo, Pragmatic Engineer)',
      visualPrompt: 'Side-by-side comparison of silent developer exhaustion vs. automated FlowForge burnout shield.'
    },
    {
      id: 'ad-delivery-acceleration',
      type: 'High-Intent Retargeting',
      headline: 'Delivery risk is preventable.',
      body: 'FlowForge forecasts delivery timelines with mathematical precision, eliminating sprint slippage.',
      cta: 'See the Stability OS',
      targetAudience: 'Product VPs, Agile Practice Leads, Engineering Operations VPs',
      channel: 'LinkedIn InMail, Dev Community Ads, Twitter/X Promoted Cards',
      visualPrompt: 'Gantt DAG showing critical path unblocked and cycle time compressed by 24%.'
    }
  ],
  socialAssets: [
    {
      id: 'soc-li-1',
      platform: 'LinkedIn',
      assetName: 'Stability Score Explainer',
      content:
        'Why does your engineering team miss delivery dates despite following Scrum by the book?\n\nBecause velocity is meaningless if the underlying system is volatile.\n\nIntroducing the Load Stability Score (LSS) by FlowForge — the first standardized 0–100 operational health score for engineering pods.\n\nWhen LSS drops below 75, our Autonomy Engine rebalances work before sprint failure occurs.\n\nRead how top tech orgs measure stability: flowforge.ai/lss-score',
      hashtags: ['#EngineeringLeadership', '#SoftwareEngineering', '#DevOps', '#CTO', '#FlowForge'],
      graphicConcept: 'High-resolution breakdown of the 4 LSS formula components on dark slate background.',
      copyableSnippet:
        'Why does your engineering team miss delivery dates despite following Scrum? Velocity is meaningless if the system is volatile. Measure your Load Stability Score (LSS) with FlowForge: flowforge.ai'
    },
    {
      id: 'soc-li-2',
      platform: 'LinkedIn',
      assetName: 'Slack Liquidity Infographic',
      content:
        'Queuing Theory Lesson: If your engineering sprint is scheduled at 100% capacity, your wait times approach infinity.\n\nKingman’s Formula proves that queuing backpressure increases exponentially when utilization exceeds 85%.\n\nThat’s why FlowForge enforces a statutory 15% Slack Liquidity floor across all monitored pods. Slack is not wasted time — it is strategic operational liquidity.\n\nProtect your delivery pipeline: flowforge.ai/slack-liquidity',
      hashtags: ['#QueuingTheory', '#AgileIsDead', '#EngineeringExcellence', '#TechOps'],
      graphicConcept: 'Infographic graph comparing 98% utilization (infinite queue) vs 85% utilization (deterministic delivery).',
      copyableSnippet:
        '100% sprint capacity = infinite wait time. Discover why top engineering orgs mandate a 15% Slack Liquidity buffer with FlowForge: flowforge.ai'
    },
    {
      id: 'soc-li-3',
      platform: 'LinkedIn',
      assetName: 'Burnout Curve Animation',
      content:
        'Senior engineers don’t quit suddenly. They burn out quietly over 4–6 weeks of unshared critical-path burden.\n\nFlowForge computes the Burnout Index daily. When the index breaches 0.40, PROTO-01 Burnout Shield caps WIP and rebalances review queues automatically.\n\nZero code modification. Zero micromanagement. 100% protection.\n\nSee how it works: flowforge.ai/burnout-shield',
      hashtags: ['#DeveloperExperience', '#BurnoutPrevention', '#EngineeringCulture', '#WorkplaceWellness'],
      graphicConcept: 'Animated transition showing burnout hazard curve defused by autonomous review redistribution.',
      copyableSnippet:
        'Senior engineers don’t quit suddenly — they burn out quietly. FlowForge detects burnout 21 days early and shields your developers automatically: flowforge.ai'
    },
    {
      id: 'soc-li-4',
      platform: 'LinkedIn',
      assetName: 'ESA Certification Announcement',
      content:
        'Announcing the Enterprise Stability Audit (ESA) standard.\n\nJust as SOC-2 audits data security, the ESA audits operational delivery sustainability. Four formal artifacts. 30-day monitoring window. Board-ready certification.\n\nIs your engineering organization stable or running on fumes? Request your ESA today: flowforge.ai/esa',
      hashtags: ['#BoardOfDirectors', '#PrivateEquity', '#TechDueDiligence', '#ESA', '#FlowForge'],
      graphicConcept: 'Gold-embossed Enterprise Stability Audit certificate mock with cryptographic verification hash.',
      copyableSnippet:
        'The Enterprise Stability Audit (ESA) is here: the board-ready standard for engineering delivery predictability. Request your 30-day audit at flowforge.ai/esa'
    },
    {
      id: 'soc-tw-1',
      platform: 'Twitter/X',
      assetName: 'Stability is the new velocity',
      content: 'Stability is the new velocity.\n\nSpeed without stability is just accelerating toward an inevitable crash.\n\nflowforge.ai',
      hashtags: ['#TechTwitter', '#BuildInPublic'],
      graphicConcept: 'Minimalist quote card with FlowForge cyan logo mark.',
      copyableSnippet: 'Stability is the new velocity. Speed without stability is just accelerating toward an inevitable crash. flowforge.ai'
    },
    {
      id: 'soc-tw-2',
      platform: 'Twitter/X',
      assetName: 'Engineering teams deserve protection',
      content: 'We automated server deployment. We automated test execution. We automated cloud scaling.\n\nNow it’s time to automate the protection of the engineers building the software.\n\nMeet FlowForge Stability OS: flowforge.ai',
      hashtags: ['#DevOps', '#SoftwareEngineering'],
      graphicConcept: 'FlowForge Shield Icon in vibrant teal and gold.',
      copyableSnippet: 'We automated servers. We automated CI/CD. Now it’s time to automate the protection of the engineers building the software. flowforge.ai'
    },
    {
      id: 'soc-tw-3',
      platform: 'Twitter/X',
      assetName: 'FlowForge defines the ESP category',
      content: 'Today we formally announce Engineering Stability Platforms (ESP).\n\nNot passive dashboards. Not another Jira plugin. A sovereign operating system that autonomously stabilizes human engineering systems.\n\nWelcome to FlowForge.',
      hashtags: ['#CategoryCreation', '#ESP'],
      graphicConcept: 'Gartner-style quadrant with FlowForge occupying the Category Leader quadrant.',
      copyableSnippet: 'Today we formally announce Engineering Stability Platforms (ESP). A sovereign OS for engineering systems: flowforge.ai'
    }
  ],
  emailSequence: [
    {
      step: 1,
      subject: 'Your engineering team is unstable — here’s why.',
      previewText: 'Why sprint commitments fail despite your best engineers working late.',
      targetRole: 'CTO, VP of Engineering',
      coreMessage: 'Queuing delays compound non-linearly when sprint capacity exceeds 85%.',
      fullBody:
        'Hi {{first_name}},\n\nIf you ask your engineering managers why last quarter’s key release slipped, you’ll probably hear about unforeseen technical debt, complex microservices, or scope creep.\n\nThose are symptoms. The root cause is mathematical instability.\n\nWhen engineering teams schedule sprints at 95%+ utilization, Kingman’s formula dictates that task wait times exponentialize. A single 2-hour bug creates a 4-day delivery cascade.\n\nAt FlowForge, we developed the Stability OS to solve this. In 5 minutes of read-only metadata ingestion, FlowForge calculates your organization’s Load Stability Score (LSS) and detects where queuing friction is throttling your delivery.\n\nWould you be open to seeing your pod’s live Stability Score?\n\nBest regards,\nChuck\nFounder & CEO, FlowForge\nflowforge.ai',
      ctaText: 'Check Your Pod Stability Score →'
    },
    {
      step: 2,
      subject: 'Burnout is predictable — FlowForge proves it.',
      previewText: 'How behavioral commit telemetry flags senior developer resignation risk 21 days early.',
      targetRole: 'VP of Engineering, Director of Development',
      coreMessage: 'Overloaded architects and review bottlenecks can be autonomously defused.',
      fullBody:
        'Hi {{first_name}},\n\nSenior engineers rarely quit over compensation. They quit after 3 consecutive months of bearing 40%+ of the critical path review burden while their own focus work is starved.\n\nFlowForge monitors this dynamic through our Critical Path DAG and Volatility Index.\n\nWhen an architect’s Burnout Index breaches 0.40, our PROTO-01 Burnout Shield triggers automatically: capping WIP, redistributing PR reviews, and restoring a 15% Slack Liquidity buffer.\n\nNo manual retrospectives required. The system heals itself.\n\nSee how our autonomous protocols protect your top talent in our technical whitepaper.\n\nBest regards,\nChuck\nFounder & CEO, FlowForge\nflowforge.ai',
      ctaText: 'Read the Burnout Prevention Whitepaper →'
    },
    {
      step: 3,
      subject: 'Stabilize your team in 30 days — free pilot.',
      previewText: 'Get your full Enterprise Stability Audit (ESA) without touching a line of code.',
      targetRole: 'CTO, VP of Engineering',
      coreMessage: 'Join the 30-day lighthouse pilot and receive your Board-Ready ESA certification.',
      fullBody:
        'Hi {{first_name}},\n\nWe’re currently onboarding 25 enterprise engineering organizations into our 30-Day Free Pilot program.\n\nHere’s what you receive:\n1. 5-minute read-only GitHub and Jira metadata integration (zero code access).\n2. Daily Load Stability Scores (LSS) across all engineering pods.\n3. Automatic 15% Slack Liquidity enforcement.\n4. A complete, board-ready Enterprise Stability Audit (ESA) artifact package certifying your team’s delivery predictability.\n\nIf we don’t improve your delivery predictability by at least 25% within 30 days, you owe nothing.\n\nCan I set up your environment this week?\n\nBest regards,\nChuck\nFounder & CEO, FlowForge\nflowforge.ai',
      ctaText: 'Start Your Free 30-Day Pilot →'
    }
  ]
};

// =========================================================================
// 3. ENTERPRISE SALES PLAYBOOK DATA
// =========================================================================
export const FLOWFORGE_SALES_PLAYBOOK: EnterpriseSalesPlaybookData = {
  salesPhilosophy: 'Stability is not a feature — it is a necessity.',
  salesMotion: [
    {
      step: 1,
      stageName: 'Discovery',
      duration: 'Day 1 – 3',
      primaryObjective: 'Uncover hidden balance-sheet costs of delivery slippage, rework, and developer burnout.',
      keyDeliverable: 'Quantified Instability Assessment & Pain Diagnostic',
      qualificationCriteria: 'Engineering team size ≥ 25 devs; has experienced release delay or senior developer turnover in past 6 months.',
      exitGate: 'CTO or VP Eng agrees to review 5-Minute Stability OS demonstration.'
    },
    {
      step: 2,
      stageName: 'Demo',
      duration: 'Day 4 – 7',
      primaryObjective: 'Run the 5-Minute Stability OS demo; prove mathematical cause of slippage.',
      keyDeliverable: 'Live Telemetry Walkthrough (LSS, Slack Liquidity, Burnout Shield)',
      qualificationCriteria: 'Prospect acknowledges that DevOps and Jira do not solve human queue volatility.',
      exitGate: 'Mutual agreement to initiate read-only 30-day Free Pilot.'
    },
    {
      step: 3,
      stageName: 'Stability Audit (Baseline)',
      duration: 'Day 8 – 12',
      primaryObjective: 'Connect read-only GitHub/Jira metadata; generate initial ESA-0 baseline score.',
      keyDeliverable: 'Baseline Stability Diagnostic (LSS, Critical Path Monopolization Map)',
      qualificationCriteria: 'Data integration verified; baseline LSS computed across all target pods.',
      exitGate: 'Presentation of Baseline Audit to CTO & Engineering Directors.'
    },
    {
      step: 4,
      stageName: 'Pilot (30 Days)',
      duration: 'Day 13 – 42',
      primaryObjective: 'Deploy RulePack v1 and Monday 00:00 UTC autonomy cycles; observe LSS lift.',
      keyDeliverable: 'Weekly Stability Ledgers & Burnout Shield Event Logs',
      qualificationCriteria: 'Pod LSS improves by ≥ 15 points; Slack Liquidity maintained above 15%.',
      exitGate: 'Validation meeting confirming delivery predictability gains.'
    },
    {
      step: 5,
      stageName: 'ESA Delivery',
      duration: 'Day 43 – 48',
      primaryObjective: 'Deliver official Board-Ready Enterprise Stability Audit (ESA) certificate.',
      keyDeliverable: '4 Institutional Artifacts (ESA Executive Summary, Pod Health, Governance Log, Certificate)',
      qualificationCriteria: 'Leadership confirms audit accuracy and board-level utility.',
      exitGate: 'Commercial MSA proposal presented to executive sponsor.'
    },
    {
      step: 6,
      stageName: 'Expansion',
      duration: 'Day 49 – 75',
      primaryObjective: 'Roll out FlowForge Stability OS across remaining enterprise business units.',
      keyDeliverable: 'Enterprise-Wide Pod Mapping & FCSA Architect Certification Schedule',
      qualificationCriteria: 'Initial pods renew; budget approved for organization-wide tier.',
      exitGate: 'Annual contract executed ($36,000 – $120,000+ ARR).'
    },
    {
      step: 7,
      stageName: 'Institutionalization',
      duration: 'Quarterly',
      primaryObjective: 'Embed LSS metrics into Board decks, OKRs, and M&A due diligence packages.',
      keyDeliverable: 'Quarterly Board Stability Scorecards & Annual ESA Re-Certification',
      qualificationCriteria: 'FlowForge designated as sovereign standard operational infrastructure.',
      exitGate: '100% net retention and GSI co-selling engagement.'
    }
  ],
  discoveryQuestions: [
    {
      id: 'q-delivery',
      category: 'Delivery Pressure',
      question: 'What is your single biggest delivery pressure right now, and how often do sprint commitments slip?',
      whyAsk: 'Exposes the gap between planned Agile commitments and actual delivery reality.',
      targetResponse: '"We miss about 30% of sprint commitments, usually due to sudden scope changes or review delays."',
      transitionToDemo: 'That is exactly the queuing bottleneck Kingman’s formula describes. Let me show you how FlowForge detects that in 5 minutes.'
    },
    {
      id: 'q-burnout',
      category: 'Burnout & Attrition',
      question: 'Where is your engineering team experiencing the most acute burnout or key-person dependency?',
      whyAsk: 'Forces recognition that senior architects are overloaded and risk voluntary resignation.',
      targetResponse: '"Our principal architects are reviewing code until midnight and can’t focus on new architecture."',
      transitionToDemo: 'In FlowForge, that shows up as Critical Path Monopolization. Let me show you how our Burnout Shield redistributes that load.'
    },
    {
      id: 'q-fragility',
      category: 'Critical Path Fragility',
      question: 'What happens to your Q4 release if two of your staff architects get sick or take a leave of absence?',
      whyAsk: 'Calculates the organizational "Bus Factor" and highlights single points of failure.',
      targetResponse: '"Everything stops. We have 3 people who understand the core auth and checkout engines."',
      transitionToDemo: 'FlowForge’s DAG continuously bounds author monopolization to 35% to prevent that exact deadlock.'
    },
    {
      id: 'q-predictability',
      category: 'Delivery Predictability',
      question: 'How confident are you when you give your CEO or Board a release date: is it a guess, or backed by confidence intervals?',
      whyAsk: 'Exposes lack of statistical forecasting instruments in current tooling.',
      targetResponse: '"It’s largely gut feel based on what engineering managers say in standup."',
      transitionToDemo: 'FlowForge replaces gut feel with Monte Carlo simulations that give you exact 95% confidence intervals.'
    }
  ],
  fiveMinuteDemoScript: [
    {
      minute: '00:00 – 01:00',
      focus: 'The Metadata Ingestion & Non-Invasive Architecture',
      screenToShow: 'Integration Settings Screen showing read-only GitHub & Jira connections.',
      spokenTrack:
        '"Notice what we didn’t ask you to install. No desktop agent. No keystroke trackers. No source code access. FlowForge connects strictly to your PR and issue metadata in under 3 minutes."',
      objectionDefused: '"Will our engineers resist this as micromanagement or spyware?"'
    },
    {
      minute: '01:00 – 02:00',
      focus: 'The Load Stability Score (LSS) Dial',
      screenToShow: 'Stability Dashboard showing Pod Alpha at 68 LSS in Amber.',
      spokenTrack:
        '"Here is your team’s credit score: 68 LSS. Anything under 75 is strained. In two seconds, your VP can see that Pod Alpha is running at 94% capacity, leaving almost zero operational buffer."',
      objectionDefused: '"How do executives consume this without reading 50 Jira tickets?"'
    },
    {
      minute: '02:00 – 03:00',
      focus: 'Slack Liquidity & Kingman Queuing Curve',
      screenToShow: 'Slack Liquidity Meter showing 8.2% (deficit vs 15% statutory floor).',
      spokenTrack:
        '"Agile tells you to sprint at 100%. Queuing mathematics proves that 100% capacity produces infinite delay. FlowForge mandates a 15% Slack Liquidity floor so emergencies don’t derail the roadmap."',
      objectionDefused: '"Isn’t slack just wasted engineering capacity?"'
    },
    {
      minute: '03:00 – 04:00',
      focus: 'Critical Path Monopolization & Burnout Warning',
      screenToShow: 'Critical Path Graph highlighting Marcus at 42% code dominance with Burnout Index 0.44.',
      spokenTrack:
        '"Marcus is your superstar, but right now he is your biggest vulnerability. 42% of all critical path commits pass through his hands. Our AI predicts an 18-day release slip because Marcus is drowned in reviews."',
      objectionDefused: '"We already have code review tools."'
    },
    {
      minute: '04:00 – 05:00',
      focus: 'The Autonomy Engine & Board-Ready ESA',
      screenToShow: 'One-click PROTO-01 Burnout Shield Activation and PDF ESA generation.',
      spokenTrack:
        '"Now watch: we activate Autonomy. Non-critical backlog is throttled, reviews are shared, LSS leaps to 84. And right here: a board-ready Enterprise Stability Audit is ready for your next Board meeting."',
      objectionDefused: '"Does your system change our production code?"'
    }
  ],
  valueMessaging: [
    {
      pillar: 'Reduces Volatility',
      tagline: 'From unpredictable sprints to deterministic throughput.',
      executiveProof: '20–40% reduction in code rework; sprint completion predictability improves from 52% to 88%.'
    },
    {
      pillar: 'Protects Teams',
      tagline: 'Autonomous guardrails that stop burnout before resignation.',
      executiveProof: '15–25% reduction in senior engineer turnover; $180k+ saved per retained engineer.'
    },
    {
      pillar: 'Accelerates Delivery',
      tagline: 'Faster commercial milestones by eliminating queuing bottlenecks.',
      executiveProof: '10–20% faster time-to-market without adding engineering headcount.'
    }
  ],
  objectionHandling: [
    {
      id: 'obj-devops',
      objection: '“We already have DevOps and CI/CD.”',
      context: 'Prospect conflates infrastructure deployment tooling with human organizational stability.',
      corePivot: 'DevOps improves deployment. FlowForge improves stability.',
      fullScript:
        '"That’s fantastic — DevOps is essential for shipping code fast. But DevOps only measures what happens after the code is written. Who monitors whether your developers are burning out writing it? FlowForge protects the human system that builds the software, so your CI/CD pipelines actually have quality code to deploy."',
      proofPoint: 'DevOps automates code; FlowForge stabilizes human capacity.'
    },
    {
      id: 'obj-burnout',
      objection: '“We don’t have burnout; our team is happy.”',
      context: 'Executive has zero objective behavioral telemetry on weekend commits or cognitive fatigue.',
      corePivot: 'Burnout is predictable — FlowForge detects it early.',
      fullScript:
        '"We hear that often from great leaders. But senior engineers rarely complain until they hand in their two weeks’ notice. In our experience, high performers mask burnout until it’s too late. FlowForge looks at the math: out-of-hours commit surges and review lag. In our 30-day pilot, we will objectively verify whether your team is truly protected."',
      proofPoint: '89% of resignations in engineering are preceded by 4 weeks of critical path monopolization.'
    },
    {
      id: 'obj-predictability',
      objection: '“We need predictability more than anything.”',
      context: 'Prospect is desperate for reliable release dates for executive leadership and clients.',
      corePivot: 'FlowForge forecasts delivery risk with precision.',
      fullScript:
        '"That is precisely what we deliver. You cannot have predictability without stability. If your sprint is scheduled at 98% utilization, queuing theory guarantees you will be unpredictable. FlowForge restores the 15% slack buffer that makes delivery deterministic, and provides 95% confidence intervals 3 weeks ahead of release."',
      proofPoint: '88% on-time milestone delivery achieved across 60+ monitored enterprise pods.'
    },
    {
      id: 'obj-jira',
      objection: '“Does this replace Jira or Linear?”',
      context: 'Prospect fears a painful project management system migration.',
      corePivot: 'FlowForge doesn’t replace Jira — it governs it.',
      fullScript:
        '"Not at all. Your team keeps using Jira or Linear exactly as they do today. Jira is your ticket database; FlowForge is the sovereign Stability OS that calculates load, prevents overloading, and governs sprint health via read-only APIs. No migration. No friction."',
      proofPoint: 'Zero developer workflow disruption; 5-minute read-only API setup.'
    }
  ],
  closingScript: {
    headline: 'The Frictionless Free Pilot Close',
    script:
      '“We don’t ask you to make an annual procurement commitment today. We run a free 30-day pilot on your live GitHub and Jira metadata. In 30 days, we deliver your official Enterprise Stability Audit (ESA). If your delivery predictability hasn’t visibly improved, we part as friends. Want me to onboard your team this Thursday?”',
    handlingHesitation:
      '“If you hesitate, your next sprint is still going to run at 95% capacity, Marcus is still going to be working until midnight, and Q4 delivery is still at risk. The pilot takes 5 minutes to connect. What is the risk?”',
    freePilotOffer: '30-Day Free Pilot with complete Board-Ready ESA certification deliverable.'
  }
};

// =========================================================================
// 4. STABILITY SUMMIT EVENT PLAN DATA
// =========================================================================
export const FLOWFORGE_STABILITY_SUMMIT: StabilitySummitEventData = {
  eventName: 'FlowForge Stability Summit 2027',
  year: '2027',
  theme: 'Engineering Stability Is the Future',
  location: 'Austin Convention Center & Virtual Global Broadcast (Austin, TX)',
  dates: 'October 14 – 16, 2027',
  targetAttendance: '1,500 In-Person CTOs/VPs & 10,000+ Virtual Global Attendees',
  eventStructureSummary: {
    keynoteOverview: 'Major public inaugurations: Stability OS 2.0 release, ESP Category Manifesto, and Global State of Stability report.',
    breakoutsOverview: '5 specialized technical tracks exploring burnout heuristics, Kingman slack liquidity, critical path graph theory, autonomy protocols, and predictive intelligence.',
    workshopsOverview: 'Hands-on architectural bootcamps configuring RulePack v1, setting up autonomous Monday rebalancing, and drafting ESA audit artifacts.',
    examsOverview: 'Live proctored testing sessions for the FlowForge Certified Stability Architect (FCSA) credential.'
  },
  agendaSchedule: [
    {
      id: 'sess-keynote',
      type: 'Keynote',
      timeSlot: 'Day 1 • 09:00 – 10:30',
      title: 'Opening Keynote: Stability Is the Future of Engineering',
      speaker: 'Chuck',
      speakerRole: 'Founder & CEO, FlowForge',
      track: 'Main Stage (Broadcast)',
      room: 'Grand Ballroom A',
      abstract:
        'The official inauguration of the Engineering Stability Platform (ESP) category. Chuck outlines the $85B economic crisis of engineering instability and presents the Stability OS as the defining operational layer for modern software.',
      deliverableOrArtifact: 'Stability OS 2.0 Keynote Video & Category Manifesto Handout'
    },
    {
      id: 'sess-burnout',
      type: 'Breakout',
      timeSlot: 'Day 1 • 11:00 – 12:00',
      title: 'The Mathematics of Burnout: Predicting Attrition 21 Days Early',
      speaker: 'Dr. Elena Vance',
      speakerRole: 'Head of Behavioral Telemetry, FlowForge',
      track: 'Science of Stability',
      room: 'Track 1 — Studio B',
      abstract:
        'A deep mathematical exploration into behavioral commit patterns, out-of-hours PR latencies, and cognitive fatigue regression curves. How to identify an overloaded architect before resignation occurs.',
      deliverableOrArtifact: 'Burnout Index Heuristic Specification & Code Snippets'
    },
    {
      id: 'sess-slack',
      type: 'Breakout',
      timeSlot: 'Day 1 • 13:30 – 14:30',
      title: 'The 15% Rule: Implementing Slack Liquidity with Kingman’s Queuing Law',
      speaker: 'Marcus Sterling',
      speakerRole: 'VP of Engineering Systems, Apex Financial',
      track: 'Engineering Economics',
      room: 'Track 2 — Studio C',
      abstract:
        'How a Tier-1 financial institution eliminated 35% of sprint delivery slips by legally mandating an unallocated 15% capacity buffer across 450 engineers.',
      deliverableOrArtifact: 'Enterprise Slack Liquidity Implementation Template'
    },
    {
      id: 'sess-critical-path',
      type: 'Breakout',
      timeSlot: 'Day 1 • 15:00 – 16:00',
      title: 'De-Bottlenecking the Monopolized Critical Path',
      speaker: 'Sarah Lin',
      speakerRole: 'Principal Systems Architect, CloudCore',
      track: 'Architecture & Governance',
      room: 'Track 3 — Hall 2',
      abstract:
        'Using Directed Acyclic Graphs (DAGs) to identify single-point-of-failure senior developers and automatically redistribute PR approvals without breaking architecture standards.',
      deliverableOrArtifact: 'DAG Monopolization Scanner Script'
    },
    {
      id: 'sess-workshop-rulepack',
      type: 'Workshop',
      timeSlot: 'Day 2 • 09:30 – 11:30',
      title: 'Architectural Bootcamp: Enforcing RulePack v1 in Live Repositories',
      speaker: 'Devon Hayes',
      speakerRole: 'Lead Solutions Architect, FlowForge',
      track: 'Hands-On Implementation',
      room: 'Workshop Lab Alpha',
      abstract:
        'Bring your laptops. Connect sandbox repos, configure 3-WIP limits, establish PR review SLAs, and simulate automated warning flags on sprint overload.',
      deliverableOrArtifact: 'Configured RulePack v1 YAML and Policy Enforcer'
    },
    {
      id: 'sess-workshop-autonomy',
      type: 'Workshop',
      timeSlot: 'Day 2 • 13:00 – 15:00',
      title: 'Autonomy Engine Configuration: Monday 00:00 UTC Closed-Loop Cycles',
      speaker: 'Rajesh Patel',
      speakerRole: 'Director of Autonomy Engineering, FlowForge',
      track: 'Hands-On Implementation',
      room: 'Workshop Lab Beta',
      abstract:
        'Step-by-step setup of the PROTO-01 Burnout Shield, automated queue rebalancing, and the cryptographic audit trail invariant that guarantees zero source code edits.',
      deliverableOrArtifact: 'Autonomy Runbook & Trigger Configuration Suite'
    },
    {
      id: 'sess-exam-fcsa',
      type: 'Exam',
      timeSlot: 'Day 2 • 15:30 – 17:00',
      title: 'FlowForge Certified Stability Architect (FCSA) Proctored Exam',
      speaker: 'Certification Board',
      speakerRole: 'Global Examination Proctoring Committee',
      track: 'Professional Certification',
      room: 'Certification Arena 1',
      abstract:
        'Official 40-question proctored examination covering Stability Fundamentals, Governance, Autonomy Protocols, Intelligence Forecasting, and ESA Deliverables. 80% required to pass.',
      deliverableOrArtifact: 'Official FCSA Credential Badge & Digital Verification Certificate'
    },
    {
      id: 'sess-closing',
      type: 'Closing',
      timeSlot: 'Day 3 • 11:30 – 12:30',
      title: 'Closing Plenary: FlowForge Defines the Future of Engineering Stability',
      speaker: 'Chuck',
      speakerRole: 'Founder & CEO, FlowForge',
      track: 'Main Stage (Broadcast)',
      room: 'Grand Ballroom A',
      abstract:
        'The global announcement of the FlowForge Partner Network (FPN), the 2028 Summit location, and the final declaration: Stability is not optional — it is the new velocity.',
      deliverableOrArtifact: 'Global State of Engineering Stability 2027 Annual Report'
    }
  ],
  speakers: [
    {
      name: 'Chuck',
      title: 'Founder & CEO',
      organization: 'FlowForge (CFO TAX PRO LLC)',
      topic: 'Stability Is the Future of Engineering & Category Vision',
      bio: 'Visionary architect and founder of FlowForge. Pioneered the Load Stability Score (LSS) and the Engineering Stability Platform (ESP) category.'
    },
    {
      name: 'Dr. Elena Vance',
      title: 'Head of Behavioral Telemetry',
      organization: 'FlowForge Labs',
      topic: 'The Mathematics of Developer Burnout',
      bio: 'Ph.D. in Queuing Systems & Human Capital Dynamics. Former lead researcher on cognitive engineering capacity at MIT Media Lab.'
    },
    {
      name: 'Marcus Sterling',
      title: 'VP of Engineering Systems',
      organization: 'Apex Financial',
      topic: 'The 15% Slack Liquidity Rule in Mission-Critical Systems',
      bio: 'Oversees 450 high-frequency trading and core banking engineers. Scaled Apex’s delivery predictability from 54% to 91% using FlowForge.'
    },
    {
      name: 'Sarah Lin',
      title: 'Principal Systems Architect',
      organization: 'CloudCore Technologies',
      topic: 'DAG Graph Theory for Critical Path De-Bottlenecking',
      bio: 'Distinguished architect specializing in distributed software topologies and key-person risk de-concentration.'
    }
  ],
  officialDeliverables: [
    {
      name: 'Stability OS Live Demo & Evaluation Sandbox',
      format: 'Interactive Cloud Sandbox Instance',
      distributionChannel: 'Summit Portal & flowforge.ai/sandbox',
      description: 'Pre-seeded multi-pod enterprise environment for exploring live LSS scores and autonomy triggers.'
    },
    {
      name: 'ESP Category Manifesto (Print & Digital Edition)',
      format: 'Institutional 48-Page Bound Hardcover & PDF',
      distributionChannel: 'All Attendee Welcome Packages & Global Download',
      description: 'The foundational category text defining Engineering Stability Platforms against traditional DevOps.'
    },
    {
      name: 'Enterprise Stability Audit (ESA) Template & Tooling Pack',
      format: '4 Board-Ready Document Templates (PDF/Docx)',
      distributionChannel: 'Exclusive to Summit Attendees & Certified Partners',
      description: 'Standardized institutional audit artifacts for private equity due diligence and corporate board presentations.'
    },
    {
      name: 'FlowForge Partner Network (FPN) Commercial Kits',
      format: 'Partner Enablement Binder & Referral Portal',
      distributionChannel: 'Partner Summit Breakfast & Alliances Portal',
      description: 'Revenue share schedules (15%–35%), GSI co-selling collateral, and client pilot deployment kits.'
    }
  ],
  closingDeclaration:
    'FlowForge defines the future of engineering stability. When teams are stable, delivery is predictable, burnout is eliminated, and innovation flourishes.'
};
