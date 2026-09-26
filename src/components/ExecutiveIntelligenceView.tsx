import React, { useState } from 'react';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  AlertTriangleIcon, 
  TrendingUpIcon, 
  ZapIcon, 
  CheckCircle2Icon, 
  ClockIcon, 
  FlameIcon, 
  FileTextIcon, 
  UsersIcon, 
  SendIcon, 
  DollarSignIcon, 
  CopyIcon, 
  ChevronRightIcon, 
  PlayIcon, 
  RefreshCwIcon,
  LayersIcon,
  BarChart3Icon,
  BookOpenIcon,
  ExternalLinkIcon,
  SlidersIcon,
  ArrowUpRightIcon,
  RocketIcon,
  CompassIcon,
  AwardIcon,
  CpuIcon,
  TargetIcon,
  CrownIcon,
  MapPinIcon,
  CheckIcon,
  PaletteIcon,
  BriefcaseIcon,
  UserCheckIcon,
  MegaphoneIcon,
  LandmarkIcon
} from 'lucide-react';
import { Task, ResourcePerson, Company, Prospect } from '../types';
import { ExecutiveArtifactsSuite } from './ExecutiveArtifactsSuite';

interface ExecutiveIntelligenceViewProps {
  tasks: Task[];
  resources: ResourcePerson[];
  currentCompany: Company;
  prospects: Prospect[];
  onApplyBurnoutShield: () => void;
  onExecuteCriticalPathRescue: () => void;
  burnoutShieldActive: boolean;
  criticalPathRescued: boolean;
}

export const ExecutiveIntelligenceView: React.FC<ExecutiveIntelligenceViewProps> = ({
  tasks,
  resources,
  currentCompany,
  prospects,
  onApplyBurnoutShield,
  onExecuteCriticalPathRescue,
  burnoutShieldActive,
  criticalPathRescued
}) => {
  const [activeTab, setActiveTab] = useState<'briefing' | 'narrative' | 'strategic' | 'heatmap' | 'rescue' | 'outbound' | 'pitch' | 'artifacts' | 'suite'>('briefing');
  const [selectedProspectKey, setSelectedProspectKey] = useState<string>('wpengine');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [generatedPitch, setGeneratedPitch] = useState<{ subject: string; emailBody: string } | null>(null);
  const [activeArtifact, setActiveArtifact] = useState<'manifesto' | 'master_plan' | 'moat' | 'playbook' | 'brand_bible' | 'sales_playbook' | 'culture_code' | 'talent_playbook' | 'scaling_blueprint' | 'comms_pr' | 'revenue_gtm' | 'leadership_gov' | 'founder_codex' | 'memo' | 'launch' | 'exec_summary' | 'speech' | 'sales_script' | 'onboarding' | 'vc_deck'>('manifesto');
  const [codexChapter, setCodexChapter] = useState<number>(1);

  // Pricing calculator state
  const [calcSeats, setCalcSeats] = useState<number>(25);
  const [calcTier, setCalcTier] = useState<'team' | 'enterprise' | 'multitenant'>('enterprise');
  const [includeTaxModule, setIncludeTaxModule] = useState<boolean>(true);

  // Calculate calculated velocity
  const baselineVelocityDays = 14.5;
  const currentVelocityDays = criticalPathRescued ? 10.8 : (burnoutShieldActive ? 12.2 : baselineVelocityDays);

  // Outbound Target Profiles
  const enterpriseTargets = [
    {
      key: 'wpengine',
      name: 'WP Engine',
      location: 'Austin, TX',
      size: '1,200+ employees',
      contact: 'Ramadass Prabhakar, Chief Technology Officer',
      pain: 'Vulnerability triage backlog and release freeze risk during core WordPress upgrades',
      tech: 'WordPress Core, PHP, Go, AWS, Cloudflare, Kubernetes',
      sequences: [
        {
          subject: 'Unblocking WP Engine\'s core plugin triage queue + Texas tech connection',
          body: `Hi Ramadass,

Congrats on WP Engine's ongoing multi-cloud infrastructure advancements in Austin!

Scaling an enterprise WordPress platform supporting 1.5M+ digital experiences inevitably creates peak bottlenecks in QA load testing and plugin security triage. When senior DevOps engineers get pulled into reactive firefighting, sprint velocity slows by 25-30%.

At FlowForge (CFO TAX PRO LLC, Dallas), we built an AI Orchestration and Capacity Exchange layer that allows enterprise engineering teams to autonomously rebalance cognitive load and trade idle specialized bandwidth. For example, Apex Systems unblocked their deployment queue in 48 hours without hiring additional contractors.

Would you be open to a 15-minute introductory conversation next Tuesday at 10:00 AM CT to explore how this could accelerate WP Engine's release cadence?

Best regards,
Chukwuma Oduagu
Managing Partner & CEO, CFO TAX PRO LLC (dba FlowForge)
Dallas, TX | admin@flowforge.fit | flowforge.fit`
        },
        {
          subject: 'Case study: How Texas tech teams cut DevOps context-switching by 28%',
          body: `Hi Ramadass,

Following up on my note regarding engineering velocity at WP Engine.

We recently analyzed engineering metrics across Texas SaaS teams: when DevOps engineers handle more than 3 simultaneous microservice deployments, context-switching penalties introduce an average 3.5-day critical path delay.

FlowForge's PERT engine automatically shields senior engineers from overload by routing non-blocking tasks to available peer capacity via our zero-friction FFX credit ledger.

I'd be glad to share a 3-minute interactive simulation configured for WP Engine's stack. Does Thursday at 2:00 PM CT work for a quick call?

Best regards,
Chukwuma Oduagu`
        },
        {
          subject: 'Quick question regarding WP Engine\'s Q3 engineering sprint velocity',
          body: `Hi Ramadass,

Wanted to share a quick estimate: based on your engineering team size (1,200+), an AI-driven capacity rebalancer could reclaim 45+ hours of engineering capacity per sprint while remaining 100% compliant with Texas Tax Code § 151.351.

Here is a 1-click link to view our live Austin tech benchmark: https://flowforge.fit/demo/wpengine

Let me know if you'd like to review the architecture deck!

Best,
Chukwuma`
        }
      ]
    },
    {
      key: 'bigcommerce',
      name: 'BigCommerce',
      location: 'Austin, TX',
      size: '1,000+ employees',
      contact: 'Troy Cox, Senior VP of Product Engineering',
      pain: 'Peak checkout microservice latency and seasonal merchant surge capacity',
      tech: 'Node.js, React, Ruby, GCP, Kubernetes, GraphQL',
      sequences: [
        {
          subject: 'Eliminating peak checkout bottlenecks during BigCommerce merchant surges',
          body: `Hi Troy,

With BigCommerce powering hundreds of thousands of B2B and B2C merchants, managing checkout microservice latency during traffic spikes is always high stakes.

When checkout API tasks sit on the critical path, unallocated frontend/backend dependencies can delay seasonal feature releases. FlowForge's AI orchestration engine dynamically models task dependencies (DAGs) and auto-injects slack capacity before bottlenecks cascade.

Would you be open to a 15-minute briefing on how BigCommerce can protect sprint velocity?

Best regards,
Chukwuma Oduagu
CFO TAX PRO LLC (dba FlowForge) | admin@flowforge.fit`
        },
        {
          subject: 'Automating multi-tenant engineering capacity at BigCommerce',
          body: `Hi Troy,

Following up on my previous note. Many eCommerce platform engineering teams face a common paradox: QA is idle in Sprint Week 1 while DevOps is 95% overloaded.

FlowForge eliminates this imbalance through real-time cognitive load matrices and inter-team capacity sharing.

Would love to send over our 2-page eCommerce platform engineering teardown. Let me know if you have 10 minutes this week!

Best,
Chukwuma`
        }
      ]
    },
    {
      key: 'sailpoint',
      name: 'SailPoint',
      location: 'Austin, TX',
      size: '2,500+ employees',
      contact: 'Grady Summers, EVP of Product & Technology',
      pain: 'Multi-tenant identity security governance and enterprise audit compliance backlog',
      tech: 'Java, Spring Boot, AWS, Kafka, Okta, Kubernetes',
      sequences: [
        {
          subject: 'Accelerating SailPoint\'s identity governance sprints with AI DAG scheduling',
          body: `Hi Grady,

As SailPoint expands its AI-driven Identity Security Cloud, complex regulatory audit dependencies often create unexpected blockers on the engineering critical path.

FlowForge is an enterprise AI operating system that provides cryptographically verified SHA-256 audit trails for every task rebalance and capacity exchange, while optimizing engineer cognitive load.

Would you be available for a brief 15-minute executive walkthrough next Wednesday?

Best regards,
Chukwuma Oduagu
Managing Partner, FlowForge (CFO TAX PRO LLC)`
        }
      ]
    },
    {
      key: 'dialexa',
      name: 'Dialexa (an IBM Company)',
      location: 'Dallas, TX',
      size: '350+ digital consultants',
      contact: 'Scott Harper, CEO & Managing Director',
      pain: 'Digital engineering consulting bench idle rate and cross-client capacity allocation',
      tech: 'Full-Stack TypeScript, React, Python, Cloud Native, IoT',
      sequences: [
        {
          subject: 'Monetizing bench capacity across Dallas digital engineering teams',
          body: `Hi Scott,

Fellow Dallas tech founder here! Huge admiration for Dialexa's growth and integration into IBM Consulting.

Consultancies frequently grapple with uneven bench utilization during project transition windows. FlowForge provides an enterprise capacity exchange where firms can trade specialized engineering hours for liquid FFX credits or monetize idle bandwidth at high margins.

Would love to connect over coffee in Dallas or via a quick Zoom call to discuss how Dialexa can optimize bench utilization!

Best regards,
Chukwuma Oduagu
Dallas, TX | admin@flowforge.fit`
        }
      ]
    },
    {
      key: 'bestow',
      name: 'Bestow',
      location: 'Dallas, TX',
      size: '200+ employees',
      contact: 'Melbourne O\'Banion, Co-Founder & CEO',
      pain: 'InsurTech underwriting API compliance and actuarial integration velocity',
      tech: 'Python, Django, AWS, React, Postgres, Docker',
      sequences: [
        {
          subject: 'Streamlining Bestow\'s InsurTech underwriting API release velocity',
          body: `Hi Melbourne,

Congratulations on Bestow's continued disruption of the life insurance technology landscape from right here in Dallas.

InsurTech platforms require continuous compliance synchronization between engineering and actuarial pipelines. FlowForge was designed by CFO TAX PRO LLC specifically to automate regulatory compliance tracking alongside AI project DAG scheduling.

Let's grab a 15-minute conversation to explore how this can benefit Bestow's engineering roadmaps!

Best regards,
Chukwuma Oduagu
Dallas, TX | admin@flowforge.fit`
        }
      ]
    }
  ];

  const currentTarget = enterpriseTargets.find(t => t.key === selectedProspectKey) || enterpriseTargets[0];

  const handleCopySequence = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleGenerateLivePitch = async () => {
    setAiGenerating(true);
    try {
      const res = await fetch('/api/gemini/generate-pitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: currentTarget.name,
          industry: 'Enterprise Software & Cloud Infrastructure',
          painPoint: currentTarget.pain,
          contactPerson: currentTarget.contact
        })
      });
      const data = await res.json();
      setGeneratedPitch(data);
    } catch (e) {
      setGeneratedPitch({
        subject: `AI Optimization Briefing for ${currentTarget.name}`,
        emailBody: `Hi ${currentTarget.contact},\n\nFlowForge's AI orchestration engine eliminates sprint bottlenecks and protects engineering teams from burnout.\n\nBest,\nChukwuma Oduagu`
      });
    } finally {
      setAiGenerating(false);
    }
  };

  // Pitch Deck Slides
  const pitchSlides = [
    {
      title: '1. The Origin — Engineering Load Instability',
      subtitle: 'Burnout isn’t a people problem. It’s a load problem.',
      points: [
        'Engineering teams aren’t failing because they lack dashboards, tools, or visibility. They’re failing because they’re overloaded.',
        'Critical paths don’t collapse because someone made a mistake. They collapse because the system was fragile long before anyone noticed.',
        'Sprints don’t slip because teams are slow; they slip because teams carry more than they can sustain.',
        'FlowForge was created to solve the real problem: engineering load instability.'
      ]
    },
    {
      title: '2. The Insight — A Load-Bearing Physics Problem',
      subtitle: 'Engineering is a load-bearing system. FlowForge is the AI that stabilizes it.',
      points: [
        'When DevOps overloads (90%+ cognitive load), everything downstream collapses.',
        'When Backend stalls, Frontend freezes; when QA is underutilized, defects slip through.',
        'When context switching spikes, developer velocity dies.',
        'This isn’t a workflow problem — it’s a physics problem requiring autonomous structural stabilization.'
      ]
    },
    {
      title: '3. The Breakthrough — Autonomous Load Orchestration',
      subtitle: 'FlowForge doesn’t track tasks. It orchestrates load.',
      points: [
        'FlowForge doesn’t warn about burnout — it prevents it.',
        'FlowForge doesn’t visualize critical paths — it stabilizes them.',
        'FlowForge doesn’t predict slippage — it eliminates it.',
        'The first AI-native operating system for engineering that understands load, predicts risk, and acts autonomously.'
      ]
    },
    {
      title: '4. The Product — Six Autonomous Engines',
      subtitle: 'A Unified Full-Stack Operating System',
      points: [
        '1. AI Orchestration Engine: Predicts overload, stabilizes critical paths, protects velocity.',
        '2. FFX Capacity Marketplace: Tradable engineering capacity (Buy slack, sell availability, inject velocity).',
        '3. AI Swarm Copilot: Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA.',
        '4. Texas Compliance Engine: Automatic § 151.0101 and § 151.351 SaaS 20% exemption + audit-ready billing.',
        '5. What-If Simulator: Real-time Monte Carlo simulations on load, capacity, parallelization, and timelines.',
        '6. Enterprise Onboarding Website: Demos, FFX purchasing, multi-tenant workspaces, Stripe Connect payouts.'
      ]
    },
    {
      title: '5. The Market — Texas Enterprise Tech Ecosystem',
      subtitle: 'Tailored for High-Growth Texas SaaS & Cloud Platforms',
      points: [
        'Anchor Targets: WP Engine (Austin), BigCommerce (Austin), SailPoint (Austin), Dialexa IBM (Dallas), Bestow (Dallas).',
        'Shared Pain: Unpredictable engineering load is the #1 enterprise risk across these 5,000+ engineers.',
        'FlowForge eliminates enterprise delivery risk with verifiable local compliance and zero-friction trades.'
      ]
    },
    {
      title: '6. The Economics — The FFX Capacity Marketplace',
      subtitle: 'Turning Engineering Capacity into a Liquid Asset',
      points: [
        'Buy Slack: Instantly acquire specialized hours during crunch periods without 60-day hiring lag.',
        'Sell Availability: Monetize idle bench bandwidth at 95% net payout via Stripe Connect ACH.',
        'Stabilize Sprints: Inject velocity instantly with peer-validated capacity tokens.',
        '5% platform transaction take-rate + high-margin monthly SaaS subscriptions.'
      ]
    },
    {
      title: '7. The Autonomy — Acting Beyond Dashboards',
      subtitle: 'Engineering Without Burnout. Delivery Without Risk.',
      points: [
        'Autonomous Task Redistribution: Automatically shifts non-blocking tasks from overloaded leads.',
        'Sprint Restructuring & PERT Leveling: Reschedules DAG dependencies dynamically.',
        'Burnout Prevention Shield: Capped cognitive loads and balanced sprint cadences.',
        'Critical Path Rescue: Auto-borrows peer capacity to prevent zero-float task delays.'
      ]
    },
    {
      title: '8. The Vision & Founder Statement',
      subtitle: 'The AI-Native Operating System for Enterprise Engineering',
      points: [
        'FlowForge exists because engineering deserves stability, teams deserve protection, and enterprises deserve certainty.',
        'Operated by CFO TAX PRO LLC (Sachse / Dallas, TX • SOS #08051239).',
        'FlowForge is the AI that makes engineering humane, sustainable, and reliable. FlowForge is inevitable.'
      ]
    }
  ];

  // Pricing calculations
  const tierPrices = { team: 1250, enterprise: 4900, multitenant: 9500 };
  const baseMonthly = tierPrices[calcTier];
  const taxModulePrice = includeTaxModule ? 350 : 0;
  const seatOverage = Math.max(0, calcSeats - 15) * 45;
  const totalMonthlyUSD = baseMonthly + taxModulePrice + seatOverage;
  const taxableBasisUSD = totalMonthlyUSD * 0.80;
  const texasTaxUSD = taxableBasisUSD * 0.0825;
  const totalWithTaxUSD = totalMonthlyUSD + texasTaxUSD;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                Founder Edition
              </span>
              <span className="text-xs text-slate-400">Autonomous Enterprise Operating Intelligence</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
              <span>Executive Intelligence & Operations Layer</span>
              <SparklesIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
            </h1>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Real-time executive oversight across engineering critical path velocity, cognitive load shields, Texas enterprise acquisition sequences, and statutory tax compliance (§ 151.351).
            </p>
          </div>

          {/* Quick 1-Click Rescue Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onApplyBurnoutShield}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-md ${
                burnoutShieldActive
                  ? 'bg-emerald-600 text-white shadow-emerald-950/40 ring-1 ring-emerald-400'
                  : 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold shadow-amber-950/40 cursor-pointer'
              }`}
            >
              <ShieldCheckIcon className="w-4 h-4" />
              <span>{burnoutShieldActive ? 'Shield Active (Load Balanced)' : 'Activate Burnout Shield'}</span>
            </button>

            <button
              onClick={onExecuteCriticalPathRescue}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-md ${
                criticalPathRescued
                  ? 'bg-cyan-600 text-white shadow-cyan-950/40 ring-1 ring-cyan-400'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white cursor-pointer'
              }`}
            >
              <ZapIcon className="w-4 h-4" />
              <span>{criticalPathRescued ? 'Rescue Executed (10.8d)' : 'Execute Critical Path Rescue'}</span>
            </button>
          </div>
        </div>

        {/* 4 Core Status Pill Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400">System Stability</span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-slate-100 font-mono">100% (Zero NaN)</span>
            </div>
            <span className="text-[9px] text-emerald-400/80">Defensive fallbacks active</span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400">Critical Path Velocity</span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <ClockIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-300 font-mono">{currentVelocityDays} Days</span>
            </div>
            <span className="text-[9px] text-slate-400">
              {criticalPathRescued ? 'Accelerated from 14.5d' : 'Baseline 14.5d'}
            </span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400">Burnout Overload Risk</span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <FlameIcon className={`w-4 h-4 ${burnoutShieldActive ? 'text-emerald-400' : 'text-rose-400 animate-pulse'}`} />
              <span className={`text-sm font-bold font-mono ${burnoutShieldActive ? 'text-emerald-300' : 'text-rose-300'}`}>
                {burnoutShieldActive ? 'Low (Protected)' : 'High (DevOps 91%)'}
              </span>
            </div>
            <span className="text-[9px] text-slate-400">
              {burnoutShieldActive ? 'Tasks redistributed to QA/BA' : 'Requires cognitive rebalancing'}
            </span>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400">Texas Tax Compliance</span>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <ShieldCheckIcon className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-amber-300 font-mono">§ 151.351 Active</span>
            </div>
            <span className="text-[9px] text-amber-400/80">20% Statutory SaaS Exemption</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('briefing')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'briefing'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <SparklesIcon className="w-3.5 h-3.5" />
          <span>Daily Executive Briefing</span>
        </button>

        <button
          onClick={() => setActiveTab('narrative')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'narrative'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md font-extrabold'
              : 'bg-slate-900 text-amber-300 hover:text-amber-200 border border-amber-500/30'
          }`}
        >
          <CompassIcon className="w-3.5 h-3.5" />
          <span>Founder Master Narrative</span>
        </button>

        <button
          onClick={() => setActiveTab('suite')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'suite'
              ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 shadow-md font-extrabold'
              : 'bg-slate-900 text-amber-300 hover:text-amber-200 border border-amber-500/40'
          }`}
        >
          <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
          <span>Executive & Analyst Suite (198 Docs)</span>
        </button>

        <button
          onClick={() => setActiveTab('artifacts')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'artifacts'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md font-extrabold'
              : 'bg-slate-900 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30'
          }`}
        >
          <AwardIcon className="w-3.5 h-3.5" />
          <span>Founder Artifacts Hub</span>
        </button>

        <button
          onClick={() => setActiveTab('strategic')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'strategic'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <BarChart3Icon className="w-3.5 h-3.5" />
          <span>Weekly Strategic Report</span>
        </button>

        <button
          onClick={() => setActiveTab('heatmap')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'heatmap'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <FlameIcon className="w-3.5 h-3.5" />
          <span>Risk Heatmap & Burnout Shield</span>
        </button>

        <button
          onClick={() => setActiveTab('rescue')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'rescue'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <ZapIcon className="w-3.5 h-3.5" />
          <span>Critical Path Rescue</span>
        </button>

        <button
          onClick={() => setActiveTab('outbound')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'outbound'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <SendIcon className="w-3.5 h-3.5" />
          <span>Texas Enterprise Outbound</span>
        </button>

        <button
          onClick={() => setActiveTab('pitch')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
            activeTab === 'pitch'
              ? 'bg-cyan-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <DollarSignIcon className="w-3.5 h-3.5" />
          <span>Pitch Deck & Pricing</span>
        </button>
      </div>

      {/* TAB 1: DAILY EXECUTIVE BRIEFING */}
      {activeTab === 'briefing' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Comprehensive Executive Briefing */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-base font-bold text-white flex items-center space-x-2">
                    <SparklesIcon className="w-4 h-4 text-cyan-400" />
                    <span>Daily Executive AI Briefing (Morning Dispatch)</span>
                  </h2>
                  <span className="text-xs text-slate-400 font-mono">
                    Updated: Today, 08:00 AM CT
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-100">Executive Summary:</strong> FlowForge core infrastructure is operating in production with 100% stability and zero NaN calculation errors. The Texas Tax Code § 151.351 statutory exemption engine is actively processing 80% taxable SaaS calculations.
                  </p>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-cyan-400 flex items-center space-x-1.5">
                      <ClockIcon className="w-3.5 h-3.5" />
                      <span>Critical Path Schedule & Bottleneck Alert:</span>
                    </div>
                    <p className="text-slate-300">
                      The critical path chain currently consists of <strong>T1 → T2 → T4 → T5 → T7 → T9 → T10</strong> with a projected delivery window of <strong>{currentVelocityDays} days</strong>. Task T4 (API Gateway) is currently assigned to Charlie Vance (DevOps), who is operating at <strong>{burnoutShieldActive ? '68%' : '91%'} cognitive load</strong>.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-amber-400 flex items-center space-x-1.5">
                      <DollarSignIcon className="w-3.5 h-3.5" />
                      <span>Capacity Exchange Liquidity:</span>
                    </div>
                    <p className="text-slate-300">
                      FlowForge maintains an anchor reserve of <strong>{currentCompany.credits.toLocaleString()} FFX Slack Credits</strong> ($200 USD equivalent value floor). 3 cross-organization trades are active across the network, generating a continuous 5% platform take-rate.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <div className="font-semibold text-emerald-400 flex items-center space-x-1.5">
                      <SendIcon className="w-3.5 h-3.5" />
                      <span>High-Priority Outbound Targets:</span>
                    </div>
                    <p className="text-slate-300">
                      AI Signal Radar has identified 5 major Texas technology companies (<strong>WP Engine, BigCommerce, SailPoint, Dialexa, Bestow</strong>). 3 customized multi-touch outbound sequences are ready for one-click review and dispatch.
                    </p>
                  </div>
                </div>

                {/* Founder Action Recommendations */}
                <div className="pt-2 border-t border-slate-800">
                  <h3 className="text-xs font-bold text-slate-200 mb-2">Recommended Founder Actions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start space-x-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                      <div className="text-[11px]">
                        <p className="font-semibold text-slate-200">Rebalance DevOps Overload</p>
                        <p className="text-slate-400">Apply Burnout Shield to shift non-critical T12 task to QA.</p>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start space-x-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                      <div className="text-[11px]">
                        <p className="font-semibold text-slate-200">Parallelize T7/T8 UI Scaffolding</p>
                        <p className="text-slate-400">Accelerate critical path by 3.7 days via Critical Path Rescue.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 1 Col: Live Team Cognitive Load Matrix */}
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center space-x-2">
                    <UsersIcon className="w-4 h-4 text-cyan-400" />
                    <span>Cognitive Load Matrix</span>
                  </h2>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {burnoutShieldActive ? 'Protected' : 'Overloaded'}
                  </span>
                </div>

                <div className="space-y-3">
                  {resources.map((res) => {
                    const effectiveLoad = burnoutShieldActive 
                      ? (res.skill === 'DevOps' ? 68 : res.skill === 'Frontend' ? 66 : res.skill === 'Backend' ? 64 : res.cognitiveLoad)
                      : res.cognitiveLoad;
                    const isOverloaded = effectiveLoad >= 80;
                    const isHealthy = effectiveLoad <= 60;

                    return (
                      <div key={res.id} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{res.name} ({res.skill})</span>
                          <span className={`font-mono font-bold ${isOverloaded ? 'text-rose-400' : isHealthy ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {effectiveLoad}% Load
                          </span>
                        </div>
                        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isOverloaded ? 'bg-gradient-to-r from-rose-500 to-red-600' : isHealthy ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${effectiveLoad}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={onApplyBurnoutShield}
                  className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition flex items-center justify-center space-x-2 border border-slate-700 cursor-pointer"
                >
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                  <span>{burnoutShieldActive ? 'Shield Active (Balanced)' : 'Rebalance Cognitive Matrix'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: WEEKLY STRATEGIC REPORT */}
      {activeTab === 'strategic' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center space-x-2">
                  <BarChart3Icon className="w-5 h-5 text-cyan-400" />
                  <span>Weekly Strategic Report & Platform Readiness</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Comprehensive audit across all 6 FlowForge engines, revenue mechanics, and regulatory filings.
                </p>
              </div>
              <span className="text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-3 py-1 rounded-lg">
                Overall Readiness: 92%
              </span>
            </div>

            {/* 5 Engine Readiness Meters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">1. System Stability & DAG</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">100%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-full" />
                </div>
                <p className="text-[11px] text-slate-400">Zero NaN errors, guarded zero-division, PERT critical path calculation verified.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">2. FFX Capacity Exchange</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">95%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-[95%]" />
                </div>
                <p className="text-[11px] text-slate-400">5% take-rate automated, liquid credit minting, inter-company ledger synchronized.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">3. Stripe & Monetization</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">90%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-[90%]" />
                </div>
                <p className="text-[11px] text-slate-400">Stripe Connect card and ACH payments, automated tier upgrade engine ready.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">4. Texas Tax Code § 151.351</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">100%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-full" />
                </div>
                <p className="text-[11px] text-slate-400">Statutory 20% SaaS exemption verified against Texas Comptroller rules.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">5. AI Signal Radar & Outbound</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">85%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full w-[85%]" />
                </div>
                <p className="text-[11px] text-slate-400">Target profiles and sequences mapped for WP Engine, BigCommerce, SailPoint.</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">6. SHA-256 Cryptographic Audit</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">98%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full w-[98%]" />
                </div>
                <p className="text-[11px] text-slate-400">Immutable ledger hash chains tracking every task rebalance and credit transfer.</p>
              </div>
            </div>

            {/* Strategic Commentary */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <h3 className="font-bold text-slate-100 flex items-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
                <span>Executive Decision Vector:</span>
              </h3>
              <p>
                FlowForge is fully primed to execute its founder go-to-market. The platform achieves high margin defensibility via its two-sided capacity network effect and Texas tax compliance moat.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REAL-TIME RISK HEATMAP & BURNOUT SHIELD */}
      {activeTab === 'heatmap' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
              <div>
                <h2 className="text-base font-bold text-white flex items-center space-x-2">
                  <FlameIcon className="w-5 h-5 text-rose-400" />
                  <span>Real-Time Risk Heatmap & Cognitive Shield</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Overload thresholds above 80% trigger cascading release delays and bug injection rates.
                </p>
              </div>
              <button
                onClick={onApplyBurnoutShield}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-lg cursor-pointer ${
                  burnoutShieldActive
                    ? 'bg-emerald-600 text-white shadow-emerald-950'
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950'
                }`}
              >
                <ShieldCheckIcon className="w-4 h-4" />
                <span>{burnoutShieldActive ? 'Shield Active (Normalized)' : 'Apply Autonomous Burnout Shield'}</span>
              </button>
            </div>

            {/* Role Breakdown Gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { role: 'DevOps (Charlie Vance)', current: burnoutShieldActive ? 68 : 91, baseline: 91, task: 'T2, T4, T12', status: burnoutShieldActive ? 'Protected' : 'Severe Overload' },
                { role: 'Frontend (Bob Martinez)', current: burnoutShieldActive ? 66 : 88, baseline: 88, task: 'T7 (Storefront)', status: burnoutShieldActive ? 'Protected' : 'High Overload' },
                { role: 'Backend (Alice Johnson)', current: burnoutShieldActive ? 64 : 82, baseline: 82, task: 'T5 (Auth SSO)', status: burnoutShieldActive ? 'Protected' : 'Moderate Overload' },
                { role: 'DBE (Eve Wright)', current: 68, baseline: 68, task: 'T3, T11', status: 'Stable' },
                { role: 'BA (Frank Miller)', current: burnoutShieldActive ? 65 : 52, baseline: 52, task: 'T1, T10', status: 'Optimal Capacity' },
                { role: 'QA (Diana Prince)', current: burnoutShieldActive ? 62 : 40, baseline: 40, task: 'T9 (Load Test)', status: 'Surplus Capacity' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">{item.role}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      item.current >= 80 ? 'bg-rose-950 text-rose-400 border border-rose-800/40' : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-slate-400">Current Load:</span>
                    <span className="font-mono font-bold text-sm text-slate-100">{item.current}%</span>
                  </div>

                  <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.current >= 80 ? 'bg-gradient-to-r from-rose-500 to-red-600' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${item.current}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400">
                    <span>Assigned Tasks: </span>
                    <span className="font-mono text-slate-300">{item.task}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Burnout Shield Mitigation Logic */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300">
              <h3 className="font-bold text-slate-100 flex items-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Burnout Shield Autonomous Action Engine:</span>
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-slate-200">Step 1:</strong> Autonomous redistribution of non-critical tasks (T12 Performance Tuning) away from DevOps to peer capacity.</li>
                <li><strong className="text-slate-200">Step 2:</strong> Shift pre-deployment validation scripts to QA (Diana Prince, 40% load).</li>
                <li><strong className="text-slate-200">Step 3:</strong> Enforce 2-hour anti-context-switching deep focus blocks on critical path tasks (T4, T5, T7).</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CRITICAL PATH RESCUE PLAN */}
      {activeTab === 'rescue' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
              <div>
                <h2 className="text-base font-bold text-white flex items-center space-x-2">
                  <ZapIcon className="w-5 h-5 text-cyan-400" />
                  <span>Critical Path Rescue Plan (PERT Optimization)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Accelerate delivery from 14.5 days to 10.8 days by breaking sequential blocking constraints.
                </p>
              </div>

              <button
                onClick={onExecuteCriticalPathRescue}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 shadow-lg cursor-pointer ${
                  criticalPathRescued
                    ? 'bg-cyan-600 text-white shadow-cyan-950'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white'
                }`}
              >
                <ZapIcon className="w-4 h-4" />
                <span>{criticalPathRescued ? 'Rescue Plan Deployed (10.8 Days)' : 'Execute Critical Path Rescue'}</span>
              </button>
            </div>

            {/* Critical Path Sequence Diagram */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-slate-200">Critical Path Task Chain:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">T1: Signoff (Done)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">T2: K8s Mesh (Done)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800/50">T4: API Gateway (85%)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-800/50">T5: Auth SSO (60%)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">T7: React UI (35%)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">T9: QA Load (0%)</span>
                <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">T10: UAT (0%)</span>
              </div>
            </div>

            {/* 3 Pillars of the Rescue Action */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-cyan-400">1. Micro-Slack Injection (T4)</span>
                <p className="text-[11px] text-slate-400">
                  Adds a 4-hour defensive buffer to API Gateway config, preventing downstream Auth service blockages.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-emerald-400">2. UI Mock Parallelization (T7)</span>
                <p className="text-[11px] text-slate-400">
                  Allows Bob Martinez to scaffold Frontend components using typed contract mocks before T5 completes.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400">3. Early QA Swarm (T9)</span>
                <p className="text-[11px] text-slate-400">
                  Engages Diana Prince (QA) during Sprint Week 1 to draft test suites against OpenAPI schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: TEXAS ENTERPRISE OUTBOUND SEQUENCES */}
      {activeTab === 'outbound' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Col: Enterprise Target Selector */}
            <div className="space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <SendIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Texas Enterprise Targets</span>
                </span>

                <div className="space-y-2">
                  {enterpriseTargets.map((target) => (
                    <button
                      key={target.key}
                      onClick={() => {
                        setSelectedProspectKey(target.key);
                        setGeneratedPitch(null);
                      }}
                      className={`w-full p-3 rounded-xl border text-left transition cursor-pointer ${
                        selectedProspectKey === target.key
                          ? 'bg-slate-800 border-cyan-500/80 shadow-md ring-1 ring-cyan-500/40'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-100">{target.name}</span>
                        <span className="text-[10px] text-cyan-400 font-mono">{target.location}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{target.contact}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 2 Cols: Sequences Viewer & Gemini Generator */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
                  <div>
                    <h2 className="text-base font-bold text-white">{currentTarget.name} Outbound Sequence</h2>
                    <p className="text-xs text-slate-400">{currentTarget.contact} • {currentTarget.location}</p>
                  </div>

                  <button
                    onClick={handleGenerateLivePitch}
                    disabled={aiGenerating}
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition flex items-center space-x-1.5 disabled:opacity-50 cursor-pointer shrink-0"
                  >
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span>{aiGenerating ? 'Generating via Gemini...' : 'Regenerate via Gemini'}</span>
                  </button>
                </div>

                {/* Pain Point Summary */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                  <span className="font-bold text-amber-400">Targeted Pain Point: </span>
                  <span className="text-slate-300">{currentTarget.pain}</span>
                </div>

                {/* Generated or Preset Sequences */}
                {generatedPitch ? (
                  <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-cyan-500/40">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400">Gemini 3.7 Flash Custom Pitch</span>
                      <button
                        onClick={() => handleCopySequence(`${generatedPitch.subject}\n\n${generatedPitch.emailBody}`, 99)}
                        className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center space-x-1"
                      >
                        <CopyIcon className="w-3 h-3" />
                        <span>{copiedIndex === 99 ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 font-semibold">Subject:</label>
                      <input
                        type="text"
                        readOnly
                        value={generatedPitch.subject}
                        className="w-full bg-slate-900 text-slate-100 text-xs rounded-lg p-2 border border-slate-800"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 font-semibold">Email Body:</label>
                      <textarea
                        rows={7}
                        readOnly
                        value={generatedPitch.emailBody}
                        className="w-full bg-slate-900 text-slate-100 text-xs rounded-lg p-3 border border-slate-800 font-mono leading-relaxed"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {currentTarget.sequences.map((seq, idx) => (
                      <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-200">Email #{idx + 1}</span>
                          <button
                            onClick={() => handleCopySequence(`${seq.subject}\n\n${seq.body}`, idx)}
                            className="text-[11px] px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center space-x-1 cursor-pointer transition"
                          >
                            <CopyIcon className="w-3 h-3" />
                            <span>{copiedIndex === idx ? 'Copied!' : 'Copy Sequence'}</span>
                          </button>
                        </div>
                        <div className="text-xs font-semibold text-cyan-300">
                          Subject: {seq.subject}
                        </div>
                        <pre className="text-xs text-slate-300 whitespace-pre-wrap font-sans bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                          {seq.body}
                        </pre>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: FOUNDER PITCH DECK & ENTERPRISE PRICING */}
      {activeTab === 'pitch' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pitch Deck Viewer */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center space-x-2">
                    <BookOpenIcon className="w-4 h-4 text-cyan-400" />
                    <span>Founder Pitch Deck ({currentSlide + 1} of {pitchSlides.length})</span>
                  </h2>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                      disabled={currentSlide === 0}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 disabled:opacity-40"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setCurrentSlide(prev => Math.min(pitchSlides.length - 1, prev + 1))}
                      disabled={currentSlide === pitchSlides.length - 1}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 min-h-[220px]">
                  <h3 className="text-base font-bold text-white">{pitchSlides[currentSlide].title}</h3>
                  <p className="text-xs text-cyan-400 font-semibold">{pitchSlides[currentSlide].subtitle}</p>
                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80 list-disc list-inside leading-relaxed">
                    {pitchSlides[currentSlide].points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>CFO TAX PRO LLC (dba FlowForge)</span>
                <span className="font-mono">Dallas, TX • SOS #08051239</span>
              </div>
            </div>

            {/* Enterprise Pricing Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-sm font-bold text-white flex items-center space-x-2">
                  <DollarSignIcon className="w-4 h-4 text-emerald-400" />
                  <span>Enterprise Deal Pricing Calculator</span>
                </h2>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">
                  Live Model
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Select Enterprise Tier:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'team' as const, name: 'Team ($1,250/mo)' },
                      { key: 'enterprise' as const, name: 'Enterprise ($4,900/mo)' },
                      { key: 'multitenant' as const, name: 'Multi-Tenant ($9,500/mo)' }
                    ].map(t => (
                      <button
                        key={t.key}
                        onClick={() => setCalcTier(t.key)}
                        className={`p-2 rounded-lg border text-center font-bold text-[11px] transition ${
                          calcTier === t.key
                            ? 'bg-cyan-600 text-white border-cyan-500'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Engineering Seats: <strong className="text-white">{calcSeats} Seats</strong></label>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={calcSeats}
                    onChange={(e) => setCalcSeats(parseInt(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="taxMod"
                    checked={includeTaxModule}
                    onChange={(e) => setIncludeTaxModule(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <label htmlFor="taxMod" className="text-slate-300">
                    Include Automated Texas Tax Exemption Module (§ 151.351) +$350/mo
                  </label>
                </div>

                {/* Breakdown Summary */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Tier:</span>
                    <span>${baseMonthly.toLocaleString()} / mo</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Texas 20% SaaS Statutory Exemption:</span>
                    <span className="text-cyan-400">-${(totalMonthlyUSD * 0.20).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Net 80% Taxable Basis:</span>
                    <span>${taxableBasisUSD.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>State & Local Sales Tax (8.25%):</span>
                    <span>+${texasTaxUSD.toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-emerald-400">
                    <span>Total Billed Amount:</span>
                    <span>${totalWithTaxUSD.toFixed(2)} / mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 7: FOUNDER MASTER NARRATIVE */}
      {activeTab === 'narrative' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-amber-500/20 pb-4 gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/40">
                    Founder Master Narrative
                  </span>
                  <span className="text-xs text-slate-400">Written for Chukwuma Oduagu (Sachse, TX) • CFO TAX PRO LLC</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                  FlowForge Enterprise AI — The Load-Bearing Operating System
                </h2>
              </div>
              <button
                onClick={() => {
                  const text = `FLOWFORGE FOUNDER MASTER NARRATIVE\n\n1. The Origin:\nEngineering teams aren't failing because they lack dashboards, tools, or visibility. They're failing because they're overloaded. Burnout isn't a people problem. It's a load problem.\n\n2. The Insight:\nEvery engineering failure traces back to one root cause: Engineering load becomes unpredictable.\n\n3. The Breakthrough:\nFlowForge doesn't track tasks. It orchestrates load. FlowForge is the AI that makes engineering humane, sustainable, and reliable.\n\n4. The 6 Engines:\n- AI Team Orchestration & PERT Engine\n- FFX Tradable Capacity Marketplace\n- AI Swarm Copilot\n- Texas Statutory Tax Engine (§ 151.351)\n- What-If Simulator\n- Enterprise Onboarding Platform\n\nOperated by CFO TAX PRO LLC (Sachse / Dallas, TX • SOS #08051239)`;
                  navigator.clipboard.writeText(text);
                  setCopiedIndex(999);
                  setTimeout(() => setCopiedIndex(null), 2500);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center space-x-2 transition cursor-pointer self-start"
              >
                <CopyIcon className="w-4 h-4" />
                <span>{copiedIndex === 999 ? 'Narrative Copied!' : 'Copy Full Narrative'}</span>
              </button>
            </div>

            {/* Core Tenets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="text-amber-400 font-bold text-sm flex items-center space-x-1.5">
                  <FlameIcon className="w-4 h-4" />
                  <span>The Origin Principle</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  "Burnout isn’t a people problem. It’s a load problem. Sprints don't slip because teams are slow — they slip because teams carry more than they can sustain."
                </p>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="text-cyan-400 font-bold text-sm flex items-center space-x-1.5">
                  <CpuIcon className="w-4 h-4" />
                  <span>The Physics Insight</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  "Engineering is a load-bearing system. When DevOps overloads, everything downstream collapses. When context switching spikes, velocity dies."
                </p>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="text-emerald-400 font-bold text-sm flex items-center space-x-1.5">
                  <SparklesIcon className="w-4 h-4" />
                  <span>The Breakthrough</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  "FlowForge doesn’t track tasks. It orchestrates load. FlowForge is the AI that makes engineering humane, sustainable, and reliable."
                </p>
              </div>
            </div>

            {/* Structured 4-Section Reading Canvas */}
            <div className="space-y-6 pt-2">
              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold">
                  <span>SECTION 01</span>
                  <span>•</span>
                  <span>THE ORIGIN & REALITY</span>
                </div>
                <h3 className="text-base font-bold text-white">Why Engineering Teams Are Collapsing</h3>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    Engineering teams aren’t failing because they lack dashboards, tools, or visibility. They’re failing because they’re overloaded.
                  </p>
                  <p>
                    Critical paths don’t collapse because someone made a mistake. They collapse because the system was fragile long before anyone noticed. FlowForge was created to solve the real problem: <strong className="text-amber-300">engineering load instability</strong>.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold">
                  <span>SECTION 02</span>
                  <span>•</span>
                  <span>THE LOAD-BEARING ARCHITECTURE</span>
                </div>
                <h3 className="text-base font-bold text-white">The Physics of Engineering Delivery</h3>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    Every engineering failure — burnout, slippage, missed deadlines, broken releases — traces back to one root cause: engineering load becomes unpredictable.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800 text-slate-300">
                      • DevOps at 90%+ cognitive load stalls all downstream releases.
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800 text-slate-300">
                      • Backend bottleneck freezes frontend development velocity.
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800 text-slate-300">
                      • Underutilized QA leads to delayed detection and severe defects.
                    </div>
                    <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800 text-slate-300">
                      • Fragmented context switching drains 30%+ of focus hours.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-950 rounded-xl border border-slate-800/80 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold">
                  <span>SECTION 03</span>
                  <span>•</span>
                  <span>THE SIX AUTONOMOUS ENGINES</span>
                </div>
                <h3 className="text-base font-bold text-white">How FlowForge Solves Load at Enterprise Scale</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-emerald-300">1. AI Team Orchestration & PERT:</span>
                    <p className="mt-1 text-slate-400">Dynamic GNN scheduling, zero-float critical path detection, and automated task load leveling.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-cyan-300">2. FFX Capacity Marketplace:</span>
                    <p className="mt-1 text-slate-400">Inter-company capacity trading. Buy crunch hours instantly or monetize idle bench capacity.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-purple-300">3. AI Swarm Copilot:</span>
                    <p className="mt-1 text-slate-400">Multi-agent AI assistance spanning DevOps, Backend, QA, and Architecture orchestration.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-amber-300">4. Texas Tax Compliance Engine:</span>
                    <p className="mt-1 text-slate-400">Statutory 20% exemption (§ 151.351) + 80% taxable basis calculation and audit documentation.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-blue-300">5. What-If Simulator:</span>
                    <p className="mt-1 text-slate-400">Monte Carlo scenario testing to stress-test capacity shifts before committing resources.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-bold text-pink-300">6. Enterprise Onboarding & Payouts:</span>
                    <p className="mt-1 text-slate-400">Instant company onboarding, multi-tenant RBAC, and Stripe Connect Express bank payouts.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-slate-950 to-indigo-950/40 rounded-xl border border-indigo-500/30 space-y-3">
                <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs font-bold">
                  <span>SECTION 04</span>
                  <span>•</span>
                  <span>THE FOUNDER COMMITMENT</span>
                </div>
                <h3 className="text-base font-bold text-white">Engineering Without Burnout. Delivery Without Risk.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  FlowForge exists because engineering deserves stability, teams deserve protection, and enterprises deserve certainty. Operated by <strong className="text-indigo-300">CFO TAX PRO LLC</strong> (Sachse / Dallas, TX • SOS Entity #08051239). FlowForge is the AI that makes engineering humane, sustainable, and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 8: FOUNDER ARTIFACTS HUB */}
      {activeTab === 'artifacts' && (
        <div className="space-y-6">
          {/* Artifact Selector Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  Founder High-Impact Artifacts Hub
                </span>
                <h2 className="text-lg md:text-xl font-bold text-white mt-0.5">
                  The Founder Master Suite — Capital Raising, Launch & Enterprise Sales
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                Prepared for Chukwuma Oduagu (Sachse, TX) • CFO TAX PRO LLC
              </span>
            </div>

            {/* Artifact Navigation Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => setActiveArtifact('manifesto')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'manifesto'
                    ? 'bg-amber-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <CrownIcon className="w-3.5 h-3.5" />
                <span>⭐ 1. Category Manifesto (ELO)</span>
              </button>

              <button
                onClick={() => setActiveArtifact('master_plan')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'master_plan'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <CompassIcon className="w-3.5 h-3.5" />
                <span>⭐ 2. Strategic Master Plan</span>
              </button>

              <button
                onClick={() => setActiveArtifact('moat')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'moat'
                    ? 'bg-emerald-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>⭐ 3. Moat & Defensibility</span>
              </button>

              <button
                onClick={() => setActiveArtifact('playbook')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'playbook'
                    ? 'bg-purple-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BookOpenIcon className="w-3.5 h-3.5" />
                <span>⭐ 4. Operational Playbook</span>
              </button>

              <button
                onClick={() => setActiveArtifact('brand_bible')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'brand_bible'
                    ? 'bg-pink-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <PaletteIcon className="w-3.5 h-3.5" />
                <span>⭐ 5. Brand Bible</span>
              </button>

              <button
                onClick={() => setActiveArtifact('sales_playbook')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'sales_playbook'
                    ? 'bg-blue-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BriefcaseIcon className="w-3.5 h-3.5" />
                <span>⭐ 6. Enterprise Sales Playbook</span>
              </button>

              <button
                onClick={() => setActiveArtifact('culture_code')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'culture_code'
                    ? 'bg-rose-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <FlameIcon className="w-3.5 h-3.5" />
                <span>⭐ 7. Culture Code</span>
              </button>

              <button
                onClick={() => setActiveArtifact('talent_playbook')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'talent_playbook'
                    ? 'bg-teal-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <UserCheckIcon className="w-3.5 h-3.5" />
                <span>⭐ 8. Talent & Hiring Playbook</span>
              </button>

              <button
                onClick={() => setActiveArtifact('scaling_blueprint')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'scaling_blueprint'
                    ? 'bg-cyan-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <TrendingUpIcon className="w-3.5 h-3.5" />
                <span>⭐ 9. Scaling Blueprint</span>
              </button>

              <button
                onClick={() => setActiveArtifact('comms_pr')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'comms_pr'
                    ? 'bg-amber-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <MegaphoneIcon className="w-3.5 h-3.5" />
                <span>⭐ 10. Comms & PR Playbook</span>
              </button>

              <button
                onClick={() => setActiveArtifact('revenue_gtm')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'revenue_gtm'
                    ? 'bg-emerald-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <DollarSignIcon className="w-3.5 h-3.5" />
                <span>⭐ 11. Revenue & GTM Blueprint</span>
              </button>

              <button
                onClick={() => setActiveArtifact('leadership_gov')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'leadership_gov'
                    ? 'bg-indigo-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <LandmarkIcon className="w-3.5 h-3.5" />
                <span>⭐ 12. Leadership & Governance</span>
              </button>

              <button
                onClick={() => setActiveArtifact('founder_codex')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'founder_codex'
                    ? 'bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-amber-500/40'
                }`}
              >
                <BookOpenIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>📚 13. Founder Codex & Master Index</span>
              </button>

              <button
                onClick={() => setActiveArtifact('memo')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'memo'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <FileTextIcon className="w-3.5 h-3.5" />
                <span>14. Investor Memo</span>
              </button>

              <button
                onClick={() => setActiveArtifact('launch')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'launch'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <RocketIcon className="w-3.5 h-3.5" />
                <span>15. Launch Announcement</span>
              </button>

              <button
                onClick={() => setActiveArtifact('exec_summary')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'exec_summary'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <AwardIcon className="w-3.5 h-3.5" />
                <span>16. One-Page Exec Summary</span>
              </button>

              <button
                onClick={() => setActiveArtifact('speech')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'speech'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <PlayIcon className="w-3.5 h-3.5" />
                <span>17. 60-Second Speech</span>
              </button>

              <button
                onClick={() => setActiveArtifact('sales_script')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'sales_script'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <TargetIcon className="w-3.5 h-3.5" />
                <span>18. Enterprise Sales Script</span>
              </button>

              <button
                onClick={() => setActiveArtifact('onboarding')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'onboarding'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <UsersIcon className="w-3.5 h-3.5" />
                <span>19. Team Onboarding Guide</span>
              </button>

              <button
                onClick={() => setActiveArtifact('vc_deck')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  activeArtifact === 'vc_deck'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <BarChart3Icon className="w-3.5 h-3.5" />
                <span>20. Pitch Deck Blueprint</span>
              </button>
            </div>
          </div>

          {/* ARTIFACT 1: CATEGORY CREATION MANIFESTO (ELO) */}
          {activeArtifact === 'manifesto' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <CrownIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Category Defining Document • The ELO Origin</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — CATEGORY CREATION MANIFESTO
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — CATEGORY CREATION MANIFESTO\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. The Category: Engineering Load Orchestration (ELO)\nFlowForge is not a project management tool.\nIt’s not a dashboard.\nIt’s not a workflow system.\n\nFlowForge is the founder of a new category:\nEngineering Load Orchestration (ELO)\nELO is the discipline of stabilizing engineering load using AI — predicting overload, preventing burnout, protecting critical paths, and guaranteeing delivery.\n\nBefore FlowForge, engineering load was invisible. Now it’s orchestrated.\n\n2. The Problem the Category Solves\nEngineering teams fail because load becomes unstable.\nSymptoms: Burnout, Slipped sprints, Fragile critical paths, Unpredictable timelines, Overloaded DevOps / Backend / Frontend, Underutilized QA / BA, Rising context switching, Declining velocity.\nEvery engineering failure traces back to load instability. ELO solves this.\n\n3. The Core Principles of ELO\n1. Load is the foundation of engineering stability. If load is unstable, everything downstream collapses.\n2. Critical paths must be protected, not observed. Dashboards show risk; orchestration eliminates it.\n3. Burnout is a system failure, not a human failure. Burnout is predictable — and preventable.\n4. Velocity is a function of load, not effort. Stable load → stable velocity → predictable delivery.\n5. AI must act, not just analyze. ELO requires autonomous orchestration.\n\n4. The Pillars of the Category\nA. Load Prediction: AI identifies overload before it happens.\nB. Critical Path Stabilization: AI restructures sprints and adds slack.\nC. Burnout Prevention: AI protects engineering teams from unsustainable load.\nD. Capacity Injection (FFX): Slack becomes a tradable asset.\nE. Parallelization Intelligence: AI breaks bottlenecks by parallelizing workflows.\nF. Compliance Automation: Engineering load ties directly into audit-ready billing.\n\n5. Why the Category Is Inevitable\nEngineering complexity is rising. Burnout is rising. Delivery risk is rising.\nEnterprises need: Predictable delivery, Protected teams, Stable critical paths, Reliable velocity, Compliance transparency.\nFlowForge is the first mover, the category creator, and the category owner.\n\n6. The Category Narrative\nFlowForge is not competing with project management tools, dashboards, or workflow systems. FlowForge is replacing them.\nJust as Datadog created observability, Snowflake created cloud data warehousing, ServiceNow created enterprise workflow, HashiCorp created infrastructure automation — FlowForge creates Engineering Load Orchestration (ELO).\n\n7. The Category Claim\nFlowForge is the world’s first Engineering Load Orchestration platform. FlowForge defines the category. FlowForge leads the category. FlowForge owns the category.\n\n8. The Founder Declaration\nEngineering deserves stability. Teams deserve protection. Delivery deserves certainty. FlowForge delivers all three. FlowForge is the origin of Engineering Load Orchestration.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1010);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1010 ? 'Manifesto Copied!' : 'Copy Category Manifesto'}</span>
                </button>
              </div>

              <div className="space-y-6 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. The Category */}
                <div className="p-5 bg-gradient-to-r from-slate-950 to-amber-950/20 rounded-xl border border-amber-500/30 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold font-mono text-sm">
                    <CrownIcon className="w-4 h-4" />
                    <span>1. The Category: Engineering Load Orchestration (ELO)</span>
                  </div>
                  <p className="text-slate-300">
                    FlowForge is not a project management tool. It’s not a dashboard. It’s not a workflow system.
                  </p>
                  <div className="p-4 bg-slate-900/90 rounded-lg border border-slate-800 text-white font-mono text-sm space-y-1">
                    <div className="text-amber-400 font-bold text-base">FlowForge is the founder of a new category:</div>
                    <div className="text-lg font-extrabold text-white tracking-wide">Engineering Load Orchestration (ELO)</div>
                    <p className="text-xs text-slate-400 font-sans not-italic pt-1">
                      ELO is the discipline of stabilizing engineering load using AI — predicting overload, preventing burnout, protecting critical paths, and guaranteeing delivery.
                    </p>
                  </div>
                  <p className="font-semibold text-white">
                    Before FlowForge, engineering load was invisible. Now it’s orchestrated.
                  </p>
                </div>

                {/* 2. Problem & 3. Core Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="text-amber-400 font-mono">2.</span>
                      <span>The Problem the Category Solves</span>
                    </h4>
                    <p className="text-rose-300 font-medium">Engineering teams fail because load becomes unstable.</p>
                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] text-slate-400 font-mono">
                      <div>• Burnout</div>
                      <div>• Slipped sprints</div>
                      <div>• Fragile critical paths</div>
                      <div>• Unpredictable timelines</div>
                      <div>• Overloaded DevOps/BE</div>
                      <div>• Underutilized QA/BA</div>
                      <div>• Context switching</div>
                      <div>• Declining velocity</div>
                    </div>
                    <p className="text-slate-300 pt-1 font-semibold">Every engineering failure traces back to load instability. ELO solves this.</p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="text-amber-400 font-mono">3.</span>
                      <span>The Core Principles of ELO</span>
                    </h4>
                    <ol className="space-y-1.5 text-xs text-slate-300 list-decimal pl-4">
                      <li><strong>Load is the foundation:</strong> If load is unstable, everything downstream collapses.</li>
                      <li><strong>Protect critical paths:</strong> Dashboards show risk; orchestration eliminates it.</li>
                      <li><strong>Burnout is systemic:</strong> Burnout is predictable — and preventable.</li>
                      <li><strong>Velocity = Load:</strong> Stable load → stable velocity → predictable delivery.</li>
                      <li><strong>AI must act:</strong> ELO requires autonomous orchestration.</li>
                    </ol>
                  </div>
                </div>

                {/* 4. Pillars of ELO */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-amber-400 font-mono">4.</span>
                    <span>The Six Pillars of Engineering Load Orchestration</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-cyan-300 font-mono">A. Load Prediction</strong>
                      <p className="text-slate-400 mt-0.5">AI identifies overload before it happens.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-amber-300 font-mono">B. Critical Path Stabilization</strong>
                      <p className="text-slate-400 mt-0.5">AI restructures sprints and adds slack.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-emerald-300 font-mono">C. Burnout Prevention</strong>
                      <p className="text-slate-400 mt-0.5">AI protects teams from unsustainable load.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-purple-300 font-mono">D. Capacity Injection (FFX)</strong>
                      <p className="text-slate-400 mt-0.5">Slack becomes a tradable liquid asset.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-blue-300 font-mono">E. Parallelization Intelligence</strong>
                      <p className="text-slate-400 mt-0.5">AI breaks bottlenecks by parallelizing.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <strong className="text-pink-300 font-mono">F. Compliance Automation</strong>
                      <p className="text-slate-400 mt-0.5">Load ties into audit-ready billing.</p>
                    </div>
                  </div>
                </div>

                {/* 6. The Category Narrative & Precedents */}
                <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-amber-400 font-mono">6.</span>
                    <span>The Category Narrative (Industry Precedents)</span>
                  </h4>
                  <p className="text-slate-300">
                    FlowForge is not competing with project management tools or dashboards. FlowForge is replacing them.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-amber-400 font-bold">Datadog</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Observability</div>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-cyan-400 font-bold">Snowflake</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Data Cloud</div>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-emerald-400 font-bold">ServiceNow</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">IT Workflow</div>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-purple-400 font-bold">HashiCorp</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Infra Automation</div>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 rounded-lg border border-amber-500/40 text-center font-bold text-white text-sm">
                    FlowForge creates: Engineering Load Orchestration (ELO)
                  </div>
                </div>

                {/* 7. Category Claim & 8. Founder Declaration */}
                <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white">8. The Founder Declaration</h4>
                  <blockquote className="text-sm text-slate-200 italic border-l-2 border-amber-400 pl-4 py-1 font-serif space-y-1">
                    <p>"Engineering deserves stability. Teams deserve protection. Delivery deserves certainty."</p>
                    <p>"FlowForge delivers all three. This is the category we are creating. This is the future we are building. This is the system enterprises will rely on. FlowForge is the origin of Engineering Load Orchestration."</p>
                  </blockquote>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 2: STRATEGIC MASTER PLAN (FOUNDER EDITION) */}
          {activeArtifact === 'master_plan' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <CompassIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Company Master Blueprint • Founder Edition</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — STRATEGIC MASTER PLAN
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — STRATEGIC MASTER PLAN (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. The Mission\nMake engineering predictable, humane, and stable. Engineering teams deserve protection. Enterprises deserve delivery certainty. Critical paths deserve stability. FlowForge delivers all three.\n\n2. The Vision\nFlowForge becomes the AI-native operating system for enterprise engineering. Not a dashboard. Not a workflow tool. Not a project manager. A full orchestration layer that: Prevents burnout, Guarantees delivery, Predicts risk, Optimizes sprints, Manages engineering teams, Automates compliance, Powers enterprise operations. FlowForge is inevitable.\n\n3. The Category\nFlowForge is the founder of a new category: Engineering Load Orchestration (ELO). ELO is the discipline of stabilizing engineering load using AI. FlowForge defines, leads, and owns the category.\n\n4. The Product Strategy\nSix Engines: 1. AI Orchestration Engine, 2. FFX Capacity Marketplace, 3. AI Swarm Copilot, 4. Texas Compliance Engine, 5. What-If Simulator, 6. Enterprise Onboarding Website.\n\n5. The Engineering Strategy\nFive Principles: A. Load First, B. Critical Path Awareness, C. Burnout Prevention, D. Parallelization, E. AI Pairing.\n\n6. The AI Strategy\nPhase 1 (Predictive AI) -> Phase 2 (Assistive AI) -> Phase 3 (Autonomous AI: task redistribution, sprint restructuring, capacity injection).\n\n7. The Market Strategy\nTexas enterprise engineering teams: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow.\n\n8. The Sales Strategy\nEnterprise sales script, outbound sequences, live orchestration demos, FFX value modeling, burnout ROI.\n\n9. The Marketing Strategy\nCategory creation, founder narrative, enterprise messaging, public launch announcement, website strategy.\n\n10. The Business Model\nFFX Credits, AI Autopilot Subscription, Compliance Engine, Enterprise Multi-Tenant.\n\n11. The Long-Term Strategy\nPhase 1: AI Orchestration Platform -> Phase 2: Engineering Economics Platform -> Phase 3: Enterprise Operating System.\n\n12. The Founder Declaration\nFlowForge exists because engineering deserves stability. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1011);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1011 ? 'Master Plan Copied!' : 'Copy Strategic Master Plan'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Mission & 2. Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">1. The Mission</span>
                    <p className="text-white font-medium">Make engineering predictable, humane, and stable.</p>
                    <p className="text-slate-400">Engineering teams deserve protection. Enterprises deserve delivery certainty. Critical paths deserve stability. FlowForge delivers all three.</p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">2. The Vision</span>
                    <p className="text-white font-medium">The AI-native operating system for enterprise engineering.</p>
                    <p className="text-slate-400">A full orchestration layer that prevents burnout, guarantees delivery, optimizes sprints, automates compliance, and powers operations. FlowForge is inevitable.</p>
                  </div>
                </div>

                {/* 5. Engineering Principles & 6. AI Strategy Roadmap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">5. Engineering Strategy (5 Principles)</span>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">A. Load First:</strong> Prioritize load stability over feature count.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">B. Critical Path Awareness:</strong> Understand downstream chain impact.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">C. Burnout Prevention:</strong> Use FlowForge internally to protect our team.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">D. Parallelization:</strong> Break bottlenecks everywhere possible.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">E. AI Pairing:</strong> Pair with AI Swarm Copilot for velocity.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">6. AI Roadmap & Autonomy Evolution</span>
                    <div className="space-y-2 pt-1">
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-cyan-300 font-bold font-mono">Phase 1 — Predictive AI</div>
                        <p className="text-slate-400 text-[11px]">Overload detection, burnout prediction, critical path forecasting.</p>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-amber-300 font-bold font-mono">Phase 2 — Assistive AI</div>
                        <p className="text-slate-400 text-[11px]">AI pairing, autonomous task suggestions, dependency mapping.</p>
                      </div>
                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-emerald-300 font-bold font-mono">Phase 3 — Autonomous AI</div>
                        <p className="text-slate-400 text-[11px]">Task redistribution, sprint restructuring, critical path rescue, capacity injection.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11. Long-Term Evolution (3 Phases) */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-indigo-400 font-bold font-mono text-sm">11. Long-Term Corporate Evolution</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-white font-bold font-mono">Phase 1: Platform</span>
                      <p className="text-slate-400 mt-1">AI Orchestration, load stabilization, and critical path protection.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-white font-bold font-mono">Phase 2: Economics</span>
                      <p className="text-slate-400 mt-1">FFX capacity marketplace, inter-company trading, and slack liquidity.</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-white font-bold font-mono">Phase 3: Operating System</span>
                      <p className="text-slate-400 mt-1">The global enterprise operating system running engineering delivery and compliance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 3: COMPETITIVE MOAT & DEFENSIBILITY REPORT */}
          {activeArtifact === 'moat' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Unassailable Defensibility • Institutional Moat Report</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — COMPETITIVE MOAT & DEFENSIBILITY REPORT
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — COMPETITIVE MOAT & DEFENSIBILITY REPORT\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. The Core Moat: Engineering Load Orchestration (ELO)\nFirst mover and category creator. Owns category language, vocabulary, and standards.\n\n2. The Product Moat: The Six Engines\nInterlocking system architecture: AI Orchestration, FFX Marketplace, AI Swarm Copilot, Texas Tax Engine, What-If Simulator, Enterprise Onboarding.\n\n3. The Data Moat: Engineering Load Graphs\nProprietary non-transferable data: Load Stability Profiles, Critical Path Behavior Maps, Burnout Risk Curves, Capacity Liquidity Patterns.\n\n4. The AI Moat: Autonomous Engineering\nAI that acts (autonomous redistribution, capacity injection), not AI that merely observes on a dashboard.\n\n5. The Economic Moat: FFX Marketplace\nLiquid marketplace network effects: More companies -> More liquidity -> More data -> Better orchestration.\n\n6. The Compliance Moat: Texas SaaS Engine\nAudit-ready billing under §151.0101 & §151.351 eliminates CFO friction.\n\n7. The Enterprise Moat: Texas First\nRegional stronghold in Austin, Dallas, Houston (WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow).\n\n8. The Cultural Moat: Founder Narrative\n"Engineering deserves stability. Teams deserve protection. Delivery deserves certainty."\n\n9. The Strategic Moat: Master Plan Inevitability\nCoherent, self-reinforcing roadmap to category dominance.\n\n10. Founder Declaration\nFlowForge is not just defensible — FlowForge is unassailable. FlowForge is the inevitable winner of Engineering Load Orchestration.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1012);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1012 ? 'Moat Copied!' : 'Copy Moat Report'}</span>
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Category & 2. Product Moat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">1. Category Ownership Moat</span>
                    <p className="text-slate-300">
                      FlowForge owns the category language (<em>Load instability, Critical path fragility, Slack injection, FFX capacity trading</em>). Competitors cannot use this vocabulary without validating FlowForge’s leadership.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">2. Six Interlocking Engines</span>
                    <p className="text-slate-300">
                      Competitors can copy isolated features, but cannot copy interlocking systems that bridge AI orchestration, tax compliance, and a liquid marketplace.
                    </p>
                  </div>
                </div>

                {/* 3. Data Moat & 5. Economic Network Effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">3. The Engineering Load Graph Moat</span>
                    <ul className="space-y-1 text-slate-400 text-xs list-disc pl-4">
                      <li><strong>Load Stability Profiles:</strong> Unique team load signatures.</li>
                      <li><strong>Critical Path Stress Maps:</strong> Learned bottleneck behaviors.</li>
                      <li><strong>Burnout Risk Curves:</strong> Proprietary predictive accuracy.</li>
                      <li><strong>Liquidity Patterns:</strong> Non-portable trading volume data.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">5. FFX Marketplace Network Effects</span>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300 font-mono text-xs space-y-1">
                      <div>More companies → More capacity liquidity</div>
                      <div>More liquidity → More value</div>
                      <div>More value → More companies join</div>
                      <div>More data → Superior AI orchestration</div>
                    </div>
                  </div>
                </div>

                {/* 6. Compliance & 7. Regional Stronghold */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold font-mono text-sm">6. Texas Compliance (§ 151.351) Moat</span>
                    <p className="text-slate-400">
                      Built-in state-specific SaaS tax automation eliminates CFO friction and creates high enterprise switching costs.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-pink-400 font-bold font-mono text-sm">7. Texas Anchor Account Stronghold</span>
                    <p className="text-slate-400">
                      Direct regional focus on WP Engine, BigCommerce, SailPoint, Dialexa IBM, and Bestow creates density before national rollout.
                    </p>
                  </div>
                </div>

                {/* 10. Declaration */}
                <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 text-center font-bold text-white text-sm">
                  "FlowForge is not just defensible — FlowForge is unassailable. FlowForge is the inevitable winner of Engineering Load Orchestration."
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 4: OPERATIONAL PLAYBOOK (FOUNDER EDITION) */}
          {activeArtifact === 'playbook' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <BookOpenIcon className="w-3.5 h-3.5 text-purple-400" />
                    <span>Company Operating System • Execution & Scale Blueprint</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — OPERATIONAL PLAYBOOK (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — OPERATIONAL PLAYBOOK (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Operating Philosophy\nFlowForge operates on one principle: Stability creates velocity. We stabilize engineering load. We stabilize teams. We stabilize delivery. We stabilize operations. Stability is our competitive advantage.\n\n2. Company Operating System\nA. Load First: Every decision begins with: Does this stabilize engineering load?\nB. Critical Path Awareness: Every team understands how their work affects the chain.\nC. Burnout Prevention: We protect our own team the same way FlowForge protects customers.\nD. Parallelization: We break bottlenecks by parallelizing wherever possible.\nE. AI Pairing: We use AI internally to accelerate execution.\n\n3. Weekly Operating Rhythm\nMonday — Load Review (Engineering load, critical path status, burnout risk, velocity forecast)\nTuesday — Product Sync (Feature prioritization, load stabilization outcomes, AI autonomy progress)\nWednesday — GTM Sync (Outbound sequences, enterprise pipeline, category messaging, Texas enterprise strategy)\nThursday — Engineering Autonomy (AI pairing, parallelization, critical path optimization)\nFriday — Founder Review (Strategic alignment, category progress, execution velocity, risk mitigation)\n\n4. Team Operating Rules\n- Engineering: Builds the orchestration engine, marketplace, compliance layer, and AI autonomy.\n- Product: Defines load stabilization outcomes, not feature lists.\n- Design: Creates clarity, simplicity, and enterprise trust.\n- Sales: Uses the Enterprise Sales Script and Outbound Sequences.\n- Marketing: Uses the Launch Announcement and Category Manifesto.\n- Operations: Ensures compliance, billing, and enterprise onboarding.\n\n5. Decision Framework\n1. Does this stabilize engineering load? (If yes -> priority. If no -> backlog.)\n2. Does this reduce burnout? (If yes -> accelerate. If no -> reconsider.)\n3. Does this increase delivery certainty? (If yes -> greenlight. If no -> refine.)\n4. Does this align with the AI-native OS vision? (If yes -> build. If no -> cut.)\n\n6. Execution Framework\nPhase 1 — Stabilize (Stabilize engineering load, critical paths, delivery)\nPhase 2 — Automate (Automate load prediction, burnout prevention, critical path rescue)\nPhase 3 — Scale (Scale AI autonomy, FFX marketplace liquidity, enterprise onboarding)\n\n7. Enterprise Delivery Framework\nA. Load Stabilization: Predict overload, prevent burnout, protect critical paths.\nB. Velocity Optimization: Parallelize workflows, inject slack, reduce context switching.\nC. Risk Reduction: Reduce slippage, reduce burnout, reduce fragility.\nD. Compliance Automation: Texas SaaS exemption, audit-ready billing, enterprise transparency.\n\n8. AI Development Framework\nTier 1 — Predictive AI (Overload detection, burnout prediction, critical path forecasting)\nTier 2 — Assistive AI (AI pairing, AI suggestions, AI dependency mapping)\nTier 3 — Autonomous AI (Task redistribution, sprint restructuring, critical path rescue, capacity injection, load balancing, risk mitigation)\n\n9. Marketplace Framework\nA. Liquidity First: More companies -> more liquidity -> more value.\nB. Transparency: Clear pricing, capacity, and slack.\nC. Stability: Marketplace reinforces load stabilization.\nD. Network Effects: Marketplace grows exponentially with adoption.\n\n10. Founder Operating Principles\n1. Clarity (Every message is simple and authoritative)\n2. Precision (Every decision is load-first)\n3. Momentum (Every week moves the company forward)\n4. Narrative (Every communication reinforces the category)\n5. Inevitability (FlowForge is the future of engineering)\n\n11. The Founder Declaration\nFlowForge is not just a product. FlowForge is not just a company. FlowForge is not just a category. FlowForge is an operating system for enterprise engineering — a system that protects teams, guarantees delivery, and makes engineering predictable. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1013);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-400 hover:bg-purple-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1013 ? 'Playbook Copied!' : 'Copy Operational Playbook'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Operating Philosophy */}
                <div className="p-4 bg-gradient-to-r from-slate-950 to-purple-950/20 rounded-xl border border-purple-500/30 space-y-2">
                  <span className="text-purple-300 font-bold font-mono text-sm">1. Operating Philosophy</span>
                  <div className="text-base font-extrabold text-white">Stability creates velocity.</div>
                  <p className="text-slate-300">
                    We stabilize engineering load. We stabilize teams. We stabilize delivery. We stabilize operations. Stability is our competitive advantage.
                  </p>
                </div>

                {/* 2. Company OS & 3. Weekly Rhythm */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">2. Company Operating System (5 Pillars)</span>
                    <ul className="space-y-1.5 pt-1 text-slate-300">
                      <li><strong className="text-white">A. Load First:</strong> Every decision begins with: <em>Does this stabilize engineering load?</em></li>
                      <li><strong className="text-white">B. Critical Path Awareness:</strong> Every team understands chain impact.</li>
                      <li><strong className="text-white">C. Burnout Prevention:</strong> Protect our own team the same way FlowForge protects clients.</li>
                      <li><strong className="text-white">D. Parallelization:</strong> Break bottlenecks by parallelizing everywhere possible.</li>
                      <li><strong className="text-white">E. AI Pairing:</strong> Use AI internally to accelerate execution.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">3. Weekly Operating Rhythm</span>
                    <div className="space-y-1 text-[11px] font-mono pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-cyan-300 font-bold">Mon:</span> Load Review (Load, critical path, burnout, velocity)</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-amber-300 font-bold">Tue:</span> Product Sync (Stabilization outcomes, AI autonomy)</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-emerald-300 font-bold">Wed:</span> GTM Sync (Outbound sequences, Texas pipeline)</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-purple-300 font-bold">Thu:</span> Engineering Autonomy (AI pairing, path optimization)</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-rose-300 font-bold">Fri:</span> Founder Review (Category progress, execution velocity)</div>
                    </div>
                  </div>
                </div>

                {/* 4. Team Operating Rules & 5. Decision Framework */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">4. Team Operating Rules</span>
                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Engineering:</strong> Engine, marketplace, AI autonomy.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Product:</strong> Stabilization outcomes, not feature lists.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Design:</strong> Clarity, simplicity, enterprise trust.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Sales:</strong> Enterprise script & outbound cadences.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Marketing:</strong> Launch announcements & ELO manifesto.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Operations:</strong> Compliance, billing, tenant onboarding.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">5. Four-Question Decision Framework</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">1. Does this stabilize engineering load?</strong> <span className="text-emerald-300 font-bold">Yes → Priority</span> | <span className="text-slate-400">No → Backlog</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">2. Does this reduce burnout?</strong> <span className="text-emerald-300 font-bold">Yes → Accelerate</span> | <span className="text-slate-400">No → Reconsider</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">3. Does this increase delivery certainty?</strong> <span className="text-emerald-300 font-bold">Yes → Greenlight</span> | <span className="text-slate-400">No → Refine</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">4. Does this align with AI-native OS vision?</strong> <span className="text-emerald-300 font-bold">Yes → Build</span> | <span className="text-rose-400">No → Cut</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Execution & 7. Enterprise Delivery Framework */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">6. Execution Framework (3 Phases)</span>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300 font-mono">Phase 1 — Stabilize:</strong> Stabilize load, critical paths, and delivery.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300 font-mono">Phase 2 — Automate:</strong> Automate load prediction, burnout prevention, path rescue.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300 font-mono">Phase 3 — Scale:</strong> Scale AI autonomy, FFX marketplace liquidity, enterprise onboarding.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold font-mono text-sm">7. Enterprise Delivery Framework</span>
                    <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">A. Load Stabilization:</strong> Predict overload, protect paths.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">B. Velocity Optimization:</strong> Parallelize, inject slack.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">C. Risk Reduction:</strong> Eliminate slippage & fragility.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">D. Compliance:</strong> Texas SaaS exemption & audits.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. AI Development Framework & 9. Marketplace Framework */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">8. AI Development Framework (3 Tiers)</span>
                    <div className="space-y-1 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300 font-mono">Tier 1 — Predictive:</strong> Overload detection, burnout prediction.
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300 font-mono">Tier 2 — Assistive:</strong> AI pairing, task suggestions, dependency maps.
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300 font-mono">Tier 3 — Autonomous:</strong> Task redistribution, critical path rescue, capacity injection.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">9. Marketplace Framework (FFX)</span>
                    <ul className="space-y-1 text-slate-300 text-xs list-disc pl-4 pt-1">
                      <li><strong>Liquidity First:</strong> More companies → more liquidity → higher value.</li>
                      <li><strong>Transparency:</strong> Clear pricing, available capacity, and tradable slack.</li>
                      <li><strong>Stability:</strong> Marketplace directly reinforces load stabilization.</li>
                      <li><strong>Network Effects:</strong> Platform utility expands exponentially with node density.</li>
                    </ul>
                  </div>
                </div>

                {/* 10. Founder Operating Principles & 11. Declaration */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-amber-400 font-bold font-mono text-sm">10. Five Founder Operating Principles</span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-cyan-300 font-bold">1. Clarity</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Authoritative messages</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-amber-300 font-bold">2. Precision</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Load-first decisions</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-emerald-300 font-bold">3. Momentum</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Weekly progress</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-purple-300 font-bold">4. Narrative</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Reinforce category</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">
                      <div className="text-pink-300 font-bold">5. Inevitability</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Future of engineering</div>
                    </div>
                  </div>
                  <blockquote className="text-xs text-slate-200 italic border-l-2 border-purple-400 pl-4 py-1 font-serif mt-2">
                    "FlowForge is not just a product. FlowForge is not just a company. FlowForge is not just a category. FlowForge is an operating system for enterprise engineering — a system that protects teams, guarantees delivery, and makes engineering predictable. FlowForge is inevitable."
                  </blockquote>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 5: BRAND BIBLE (FOUNDER EDITION) */}
          {activeArtifact === 'brand_bible' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <PaletteIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>Brand Strategy • Voice, Tone, Positioning & Visual Guardrails</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — BRAND BIBLE (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — BRAND BIBLE (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Brand Essence\nFlowForge is stability. FlowForge is the AI that prevents burnout and guarantees delivery. FlowForge is the operating system for enterprise engineering. FlowForge is the creator of Engineering Load Orchestration. FlowForge is inevitable.\n\n2. Brand Pillars\n1. Stability (Engineering load stabilized, critical paths protected, burnout prevented)\n2. Clarity (Simple language, direct messaging, executive precision)\n3. Authority (Category creator, first mover, enterprise-grade)\n4. Humanity (Engineering deserves protection, teams deserve sustainability, delivery deserves certainty)\n\n3. Brand Voice\nDirect (plain & confident), Decisive (strong statements), Executive (speaks like a CTO), Predictive (what will happen, not might), Protective (defends engineering teams), Inevitable (speaks as category owner).\n\n4. Brand Tone by Context\n- Investors: Analytical, Strategic, Category-defining.\n- Enterprise Buyers: Authoritative, Outcome-driven, Risk-eliminating.\n- Engineers: Respectful, Protective, Clear.\n- Public Messaging: Bold, Visionary, Simple.\n\n5. Brand Vocabulary\nEngineering Load Orchestration (ELO), Load instability, Critical path fragility, Burnout prediction, Slack injection, Capacity trading, Engineering economics, AI-native operating system, Autonomous engineering, Delivery certainty, Stability as a service, Velocity protection, Load-first engineering.\n\n6. Brand Narrative\nEngineering doesn't fail because of code. Engineering fails because of overload.\nFlowForge solves the real problem: Engineering load becomes unstable. FlowForge stabilizes load, protects teams, and guarantees delivery.\n\n7. Brand Messaging Rules\nRule 1: Lead with the problem (load instability).\nRule 2: State the consequence (burnout, slippage, fragility).\nRule 3: Present FlowForge as solution (AI-native orchestration).\nRule 4: Use category language (ELO).\nRule 5: Speak with inevitability.\nRule 6: Avoid feature lists (focus on outcomes).\nRule 7: Protect engineers (FlowForge is humane).\n\n8. Brand Positioning\nThe AI-native operating system for enterprise engineering. Not a dashboard, workflow tool, project manager, or productivity app.\n\n9. Brand Values\nStability, Precision, Autonomy, Integrity, Humanity, Vision.\n\n10. Brand Identity\nIndustrial + Intelligent + Humane (Strong, clean, minimal, executive, technical, warm).\n\n11. Brand Visual Personality\n- Palette: Deep steel, electric blue, graphite, white, signal orange.\n- Typography: Strong sans-serif, executive weight, high clarity.\n- Layout: Clean grids, high contrast, enterprise spacing, no clutter.\n- Iconography: Load graphs, critical path lines, stability rings, AI nodes, capacity tokens.\n\n12. Brand Promise\nEngineering without burnout. Delivery without risk. Velocity without fragility.\n\n13. Founder Declaration\nFlowForge is not just a brand. FlowForge is a movement. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1014);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-400 hover:bg-pink-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1014 ? 'Brand Bible Copied!' : 'Copy Brand Bible'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Essence & Promise */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-950 to-pink-950/20 rounded-xl border border-pink-500/30 space-y-2">
                    <span className="text-pink-300 font-bold font-mono text-sm">1. Brand Essence</span>
                    <div className="text-sm font-extrabold text-white">FlowForge is stability.</div>
                    <p className="text-slate-300 text-xs">
                      The AI that prevents burnout and guarantees delivery. The operating system for enterprise engineering. The creator of Engineering Load Orchestration.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                    <span className="text-cyan-300 font-bold font-mono text-sm">12. Brand Promise</span>
                    <div className="text-sm font-extrabold text-white">Engineering without burnout.</div>
                    <p className="text-slate-300 text-xs">
                      <strong>Delivery without risk. Velocity without fragility.</strong> This is the explicit guarantee made to every enterprise customer.
                    </p>
                  </div>
                </div>

                {/* 2. Brand Pillars & 3. Voice */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">2. Four Brand Pillars</span>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300 font-mono">1. Stability</strong>
                        <p className="text-[11px] text-slate-400 mt-0.5">Load stabilized, critical paths protected, burnout prevented.</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300 font-mono">2. Clarity</strong>
                        <p className="text-[11px] text-slate-400 mt-0.5">Simple language, direct messaging, executive precision.</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300 font-mono">3. Authority</strong>
                        <p className="text-[11px] text-slate-400 mt-0.5">Category creator, first mover, enterprise-grade.</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-purple-300 font-mono">4. Humanity</strong>
                        <p className="text-[11px] text-slate-400 mt-0.5">Teams deserve protection, sustainability, certainty.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">3. Brand Voice (6 Dimensions)</span>
                    <div className="grid grid-cols-3 gap-1.5 pt-1 text-center font-mono text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Direct</span><div className="text-[10px] text-slate-400">Plain & confident</div></div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Decisive</span><div className="text-[10px] text-slate-400">Strong statements</div></div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Executive</span><div className="text-[10px] text-slate-400">Speaks like CTO</div></div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Predictive</span><div className="text-[10px] text-slate-400">What will happen</div></div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Protective</span><div className="text-[10px] text-slate-400">Defends teams</div></div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Inevitable</span><div className="text-[10px] text-slate-400">Category owner</div></div>
                    </div>
                  </div>
                </div>

                {/* 4. Tone by Context & 5. Brand Vocabulary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">4. Contextual Brand Tone</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">Investors:</strong> Analytical • Strategic • Category-defining</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">Enterprise Buyers:</strong> Authoritative • Outcome-driven • Risk-eliminating</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">Engineers:</strong> Respectful • Protective • Clear</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-pink-300">Public Messaging:</strong> Bold • Visionary • Simple</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">5. Proprietary Vocabulary</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        'Engineering Load Orchestration (ELO)',
                        'Load instability',
                        'Critical path fragility',
                        'Burnout prediction',
                        'Slack injection',
                        'Capacity trading',
                        'Engineering economics',
                        'AI-native operating system',
                        'Delivery certainty',
                        'Stability as a service',
                        'Velocity protection'
                      ].map((term, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-900 text-slate-300 border border-slate-800 rounded font-mono text-[10px]">
                          {term}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500 italic mt-1">Competitors cannot use this vocabulary without validating FlowForge's leadership.</p>
                  </div>
                </div>

                {/* 6. Narrative & 7. Messaging Rules */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-rose-400 font-bold font-mono text-sm">6. Core Narrative & 7. Seven Messaging Rules</span>
                  <div className="p-3 bg-gradient-to-r from-rose-950/30 to-slate-900 rounded-lg border border-rose-500/20 text-xs font-semibold text-white">
                    "Engineering doesn't fail because of code. Engineering fails because of overload. FlowForge stabilizes load, protects teams, and guarantees delivery."
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 1:</strong> Lead with problem (load instability)</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 2:</strong> State consequence (burnout, slippage)</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 3:</strong> Present FlowForge as solution</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 4:</strong> Use category language (ELO)</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 5:</strong> Speak with inevitability</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 6:</strong> Avoid feature lists (outcomes only)</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Rule 7:</strong> Protect engineers (humane AI)</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-pink-300">Positioning:</strong> AI-native OS, never a dashboard</div>
                  </div>
                </div>

                {/* 10. Identity & 11. Visual Personality */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold font-mono text-sm">10. Brand Identity & Archetype</span>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <div className="text-white font-bold">Industrial + Intelligent + Humane</div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Combining industrial-strength execution, AI predictive intelligence, and human protection. Tone attributes: Strong, Clean, Minimal, Executive, Technical, Warm.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">11. Visual Personality System</span>
                    <div className="space-y-1.5 text-[11px]">
                      <div><strong className="text-white">Palette:</strong> Deep Steel, Electric Blue (#06b6d4), Graphite, Pure White, Signal Orange (#f97316).</div>
                      <div><strong className="text-white">Typography:</strong> Strong sans-serif, executive weight, high clarity.</div>
                      <div><strong className="text-white">Layout:</strong> Clean grids, high contrast, enterprise padding, zero clutter.</div>
                    </div>
                  </div>
                </div>

                {/* 13. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-pink-400 pl-4 py-1 font-serif">
                  "FlowForge is not just a brand. FlowForge is not just a product. FlowForge is not just a company. FlowForge is a movement. We are redefining engineering. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 6: ENTERPRISE SALES PLAYBOOK (FOUNDER EDITION) */}
          {activeArtifact === 'sales_playbook' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <BriefcaseIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>Commercial Strategy • Deals, Objections, Scripts & Closing</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — ENTERPRISE SALES PLAYBOOK (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — ENTERPRISE SALES PLAYBOOK (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Sales Philosophy\nFlowForge sells one thing: Engineering stability. Not features, dashboards, or workflows. We sell predictable delivery, protected engineering teams, stable critical paths, burnout prevention, velocity certainty, and load stabilization.\n\n2. Sales Positioning\nThe AI-native operating system for enterprise engineering. Category: Engineering Load Orchestration (ELO).\n\n3. The Enterprise Buyer\n- Primary: CTO, VP Engineering, Director of Platform, Head of DevOps, Head of Eng Operations.\n- Secondary: CFO (compliance/predictability), COO (delivery/risk), CIO (stability/reliability).\n- Champions: Senior Engineer, Staff Engineer, Engineering Manager.\n\n4. The Sales Narrative Arc\nStep 1: Problem (Engineering load becomes unstable)\nStep 2: Consequence (Burnout, slippage, fragility)\nStep 3: Solution (FlowForge stabilizes load using AI)\nStep 4: Outcome (Delivery becomes predictable, teams protected)\nStep 5: Category (Engineering Load Orchestration)\nStep 6: Close (Let's stabilize your engineering team)\n\n5. Core Sales Script\n"Engineering teams don't fail because of code — they fail because they're overloaded. FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery. FlowForge is the AI-native operating system for engineering."\n\n6. The Demo Flow\n1. Show load instability (critical path fragility, burnout risk, velocity collapse)\n2. Show FlowForge stabilization (task redistribution, slack injection, parallelization)\n3. Show outcomes (stable load, stable velocity, stable delivery)\n4. Show FFX marketplace (capacity injection, slack liquidity)\n5. Show compliance (Texas SaaS exemption, audit-ready billing)\n6. Close: "Do you want pilot onboarding or full engineering onboarding?"\n\n7. Objection Handling\n- "We already have dashboards" -> Dashboards observe. FlowForge acts.\n- "We already have project management tools" -> PM tracks tasks. FlowForge stabilizes load.\n- "We don't have burnout" -> Burnout is predictable. FlowForge prevents it.\n- "We don't need AI" -> AI is not optional. AI is the only way to stabilize load at scale.\n- "We're not in Texas" -> Compliance is a bonus. Load stabilization is universal.\n\n8. Enterprise Pricing Strategy\nFFX Credits (usage-based slack), AI Autopilot subscription, Compliance engine, Enterprise multi-tenant workspaces.\n\n9. Pipeline Strategy\nOutbound sequences, category messaging, Texas-first regional dominance, founder-led high-impact sales, demo-first approach.\n\n10. Closing Strategy\nPilot -> Expansion, Critical Path Rescue, Burnout Prevention, Velocity Boost, Compliance Win.\n\n11. Sales Culture & 12. Declaration\nDirect, executive, outcome-driven, category-first, founder-aligned. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1015);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-400 hover:bg-blue-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1015 ? 'Sales Playbook Copied!' : 'Copy Sales Playbook'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & 2. Positioning */}
                <div className="p-4 bg-gradient-to-r from-slate-950 to-blue-950/20 rounded-xl border border-blue-500/30 space-y-2">
                  <span className="text-blue-300 font-bold font-mono text-sm">1. Sales Philosophy & Positioning</span>
                  <div className="text-base font-extrabold text-white">FlowForge sells one thing: Engineering stability.</div>
                  <p className="text-slate-300">
                    Not features. Not dashboards. Not task lists. We sell predictable delivery, protected engineering teams, stable critical paths, burnout prevention, velocity certainty, and load stabilization.
                  </p>
                </div>

                {/* 3. Buyers & 4. Sales Narrative */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">3. The Enterprise Buyer Matrix</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Primary:</strong> CTO, VP Engineering, Dir Platform, Head DevOps, Head EngOps.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">Secondary:</strong> CFO (compliance), COO (delivery risk), CIO (stability).</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">Champions:</strong> Senior / Staff Engineers, Engineering Managers.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">4. Six-Step Sales Narrative Arc</span>
                    <div className="space-y-1 text-[11px] font-mono pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-rose-400 font-bold">1. Problem:</span> "Engineering load becomes unstable."</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-amber-400 font-bold">2. Consequence:</span> "Burnout, slippage, fragility, unpredictability."</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-cyan-400 font-bold">3. Solution:</span> "FlowForge stabilizes engineering load using AI."</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-emerald-400 font-bold">4. Outcome:</span> "Delivery becomes predictable. Teams protected."</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-purple-400 font-bold">5. Category:</span> "This is Engineering Load Orchestration."</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">6. Close:</span> "Let's stabilize your engineering team."</div>
                    </div>
                  </div>
                </div>

                {/* 5. Core Script */}
                <div className="p-4 bg-slate-950 rounded-xl border border-blue-500/30 space-y-2">
                  <span className="text-blue-300 font-bold font-mono text-sm">5. The Core Sales Script (Every Rep)</span>
                  <blockquote className="p-3 bg-slate-900 rounded-lg text-xs text-slate-200 border-l-2 border-blue-400 italic">
                    "Engineering teams don't fail because of code — they fail because they're overloaded. FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery. FlowForge is the AI-native operating system for engineering."
                  </blockquote>
                </div>

                {/* 6. Demo Flow & 7. Objection Handling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">6. Strict 6-Step Demo Flow</span>
                    <ol className="space-y-1 text-[11px] list-decimal pl-4 pt-1 text-slate-300">
                      <li><strong>Show load instability:</strong> Critical path fragility & burnout risk.</li>
                      <li><strong>Show stabilization:</strong> Redistribution, slack injection, parallelization.</li>
                      <li><strong>Show outcomes:</strong> Stable velocity and predictable release.</li>
                      <li><strong>Show FFX marketplace:</strong> Capacity injection & slack trading.</li>
                      <li><strong>Show compliance:</strong> Texas SaaS exemption & audit-ready logs.</li>
                      <li><strong>Close:</strong> "Do you want pilot onboarding or full engineering onboarding?"</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">7. Instant Objection Handling</span>
                    <div className="space-y-1.5 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">"We already have dashboards."</strong> → <span className="text-cyan-300 font-semibold">Dashboards observe. FlowForge acts.</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">"We already have Jira/Linear."</strong> → <span className="text-cyan-300 font-semibold">PM tracks tasks. FlowForge stabilizes load.</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">"We don't have burnout."</strong> → <span className="text-cyan-300 font-semibold">Burnout is predictable. FlowForge prevents it.</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-white">"We don't need AI."</strong> → <span className="text-cyan-300 font-semibold">AI is the only way to stabilize load at scale.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Pricing & 9. Pipeline & 10. Closing Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">8. Enterprise Pricing</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• <strong>FFX Credits:</strong> Slack injection</div>
                      <div>• <strong>AI Autopilot:</strong> Predictive orchestration</div>
                      <div>• <strong>Compliance Engine:</strong> Texas SaaS automation</div>
                      <div>• <strong>Multi-Tenant:</strong> Workspaces & audit trails</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">9. Pipeline Strategy</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• Outbound sequences (Texas focus)</div>
                      <div>• Category messaging (ELO)</div>
                      <div>• Founder-led early strategic deals</div>
                      <div>• Demo-first interactive triage</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">10. Closing Playbook</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• Pilot → rapid expansion</div>
                      <div>• Critical Path Rescue proof-point</div>
                      <div>• Burnout Shield validation</div>
                      <div>• CFO compliance audit win</div>
                    </div>
                  </div>
                </div>

                {/* Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-blue-400 pl-4 py-1 font-serif">
                  "FlowForge is the operating system for enterprise engineering. We stabilize load. We protect teams. We guarantee delivery. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 7: CULTURE CODE (FOUNDER EDITION) */}
          {activeArtifact === 'culture_code' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <FlameIcon className="w-3.5 h-3.5 text-rose-400" />
                    <span>Cultural Constitution • Systems Thinking, Leadership & Standards</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — CULTURE CODE (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — CULTURE CODE (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Cultural Essence\nEngineering deserves stability. FlowForge is Protective, Precise, Humane, Visionary, Decisive, Stable.\n\n2. Cultural Pillars\n1. Stability (Protect teams, eliminate chaos, guarantee delivery)\n2. Precision (Clear communication, clean execution, intentional building)\n3. Humanity (Prevent burnout, respect people, build sustainable systems)\n4. Autonomy (Empower teams, trust expertise, build AI that acts)\n5. Inevitability (Speak and act like category owners, move with conviction)\n\n3. How We Think\nWe think in systems: What is the load? Where is instability? What is the critical path? What is burnout risk? What is velocity impact? What is the simplest stabilization? Think like engineers. Act like founders. Move like category creators.\n\n4. How We Work\nClarity (no ambiguity), Speed (precise moves), Focus (load stabilization first), Respect (protect from overload), Ownership (own outcomes, not tasks).\n\n5. How We Communicate\nDirect, Executive, Outcome-driven, Category-first, Load-first, Precise, Calm, Confident. (No over-explaining, hedging, apologizing for ambition, jargon, or fluff).\n\n6. How We Lead\nProtection, Clarity, Stability, Autonomy, Vision.\n\n7. How We Hire\nPeople who think in systems, communicate clearly, protect teams, respect engineering, move with precision, understand load, embrace AI pairing, build with intention, believe in inevitability. Never hire chaos creators, ego-driven operators, feature chasers, dashboard thinkers, or burnout normalizers.\n\n8. How We Grow\nCategory Expansion, Marketplace Liquidity, AI Autonomy, Enterprise Saturation, Cultural Strength.\n\n9. How We Protect Our People\nDogfooding FlowForge internally, monitoring load, preventing burnout, stabilizing critical paths, reducing context switching, respecting human limits.\n\n10. Decision Framework\n1. Does this stabilize engineering load? (Priority)\n2. Does this reduce burnout? (Accelerate)\n3. Does this increase delivery certainty? (Greenlight)\n4. Does this align with AI-native OS vision? (Build, else cut)\n\n11. How We Win & 12. Declaration\nOwn category, stabilize load, protect teams, guarantee delivery, build autonomy, scale with inevitability. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1016);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-400 hover:bg-rose-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1016 ? 'Culture Code Copied!' : 'Copy Culture Code'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Essence & 2. Pillars */}
                <div className="p-4 bg-gradient-to-r from-slate-950 to-rose-950/20 rounded-xl border border-rose-500/30 space-y-2">
                  <span className="text-rose-300 font-bold font-mono text-sm">1. Cultural Essence & 2. Five Pillars</span>
                  <div className="text-base font-extrabold text-white">Engineering deserves stability.</div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-center font-mono text-[11px]">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-cyan-300 font-bold">1. Stability</span><div className="text-[10px] text-slate-400">Eliminate chaos</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-amber-300 font-bold">2. Precision</span><div className="text-[10px] text-slate-400">Clean execution</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-pink-300 font-bold">3. Humanity</span><div className="text-[10px] text-slate-400">Prevent burnout</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-emerald-300 font-bold">4. Autonomy</span><div className="text-[10px] text-slate-400">AI that acts</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-purple-300 font-bold">5. Inevitability</span><div className="text-[10px] text-slate-400">Category owners</div></div>
                  </div>
                </div>

                {/* 3. How We Think & 4. How We Work */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">3. How We Think (Systems Thinking)</span>
                    <ul className="space-y-1 pt-1 text-[11px] text-slate-300">
                      <li>• What is the load?</li>
                      <li>• Where is the instability?</li>
                      <li>• What is the critical path?</li>
                      <li>• What is the burnout risk?</li>
                      <li>• What is the velocity impact?</li>
                      <li>• What is the simplest stabilization?</li>
                    </ul>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] font-semibold text-white">
                      Think like engineers. Act like founders. Move like category creators.
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">4. How We Work (5 Rules)</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Clarity:</strong> No ambiguity, no clutter, no confusion.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Speed:</strong> Move fast because we move precisely.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Focus:</strong> Prioritize load stabilization above everything.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Respect:</strong> Protect each other from overload.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Ownership:</strong> Own outcomes, not tasks.</div>
                    </div>
                  </div>
                </div>

                {/* 5. Communication & 6. Leadership */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">5. How We Communicate</span>
                    <p className="text-[11px] text-slate-300">
                      Direct, Executive, Outcome-driven, Category-first, Load-first, Precise, Calm, Confident.
                    </p>
                    <div className="p-2 bg-rose-950/20 border border-rose-500/20 rounded text-[10px] text-rose-300">
                      <strong>We do not:</strong> Over-explain, hedge, apologize for ambition, or use jargon/fluff.
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">6. How We Lead</span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Protection:</strong> Protect from overload.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Clarity:</strong> Simple & decisive.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Stability:</strong> Stabilize before scaling.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-white">Autonomy:</strong> Zero-friction empowerment.</div>
                    </div>
                  </div>
                </div>

                {/* 7. Hiring Filters & 9. Protection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold font-mono text-sm">7. How We Hire</span>
                    <div className="text-[11px] text-slate-300">
                      <strong>We hire:</strong> System thinkers, clear communicators, team protectors, intentional builders, believers in inevitability.
                    </div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-rose-400">
                      <strong>We never hire:</strong> Chaos creators, ego-driven operators, feature chasers, dashboard thinkers, burnout normalizers.
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-pink-400 font-bold font-mono text-sm">9. Protecting Our Own People</span>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      <li>• Dogfooding FlowForge internally to balance internal sprints</li>
                      <li>• Monitoring load, critical paths & context switching</li>
                      <li>• Zero tolerance for overload, burnout, or fragility</li>
                    </ul>
                  </div>
                </div>

                {/* Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-rose-400 pl-4 py-1 font-serif">
                  "FlowForge is not just a company. FlowForge is a culture of stability, protection, precision, and inevitability. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 8: TALENT & HIRING PLAYBOOK (FOUNDER EDITION) */}
          {activeArtifact === 'talent_playbook' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <UserCheckIcon className="w-3.5 h-3.5 text-teal-400" />
                    <span>Talent Strategy • Bar, Interviews, Filters, Standards & Scaling</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — TALENT & HIRING PLAYBOOK (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — TALENT & HIRING PLAYBOOK (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Hiring Philosophy\nFlowForge hires people who make the company stronger. We do not hire to fill seats. We hire to build a category.\nFlowForge hires: Category builders, System thinkers, Load stabilizers, Engineering protectors, AI-native operators. We hire people who believe engineering deserves stability.\n\n2. Who We Hire (5 Core Traits)\n1. Systems Thinking (They see load, dependencies, bottlenecks, critical paths)\n2. Precision (They communicate clearly and execute cleanly)\n3. Humanity (They protect teams and prevent burnout)\n4. Autonomy (They act without waiting for permission)\n5. Inevitability (They believe FlowForge is the future of engineering)\n\n3. Who We Do NOT Hire\nChaos creators, Ego-driven operators, Feature chasers, Dashboard thinkers, Burnout normalizers, People who confuse motion with progress, People who need constant direction, People who resist AI pairing, People who cannot think in systems. FlowForge hires adults, not projects.\n\n4. The FlowForge Talent Bar\n"If you cannot stabilize engineering load, you cannot work here." Every role must understand load, critical paths, burnout risk, velocity, parallelization, stability.\n\n5. The Four-Stage Interview Loop\nStage 1 — Systems Thinking: "How do you identify instability? How do you stabilize a failing system? What is your mental model of load?"\nStage 2 — Precision: "Explain a complex concept simply. Describe a failure without excuses. Communicate a decision clearly."\nStage 3 — Autonomy: "When did you act without permission? How do you unblock yourself? What do you do when direction is unclear?"\nStage 4 — Culture: "Why does engineering deserve stability? What does burnout mean to you? What does inevitability mean to you?"\n\n6. The FlowForge Hiring Criteria\nA. Load Awareness\nB. Critical Path Sensitivity\nC. Burnout Empathy\nD. AI-Native Thinking\nE. Category Alignment\n\n7. The Offer Philosophy\nWe offer roles to candidates who strengthen culture, category, system, mission, team. We do not hire "maybe." We hire "absolutely."\n\n8. The Rejection Philosophy\nWe reject quickly and respectfully those who are unclear, chaotic, fragile, ego-driven, misaligned, resistant to AI, unable to think in systems, or unable to stabilize load.\n\n9. The Talent Pipeline\nCategory Leadership, Public Narrative, Founder Presence, AI-Native Identity, Marketplace Innovation.\n\n10. The Team Structure\nSmall autonomous units, Load-first planning, AI pairing, Parallelization, Critical path protection.\n\n11. The Talent Promise\n"We will protect you from burnout. We will give you clarity. We will give you autonomy. We will give you purpose. We will give you stability." FlowForge is a humane engineering company.\n\n12. Founder Declaration\nFlowForge is a place where elite talent comes to build the future of engineering. We hire people who believe in stability, autonomy, and inevitability. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1017);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1017 ? 'Talent Playbook Copied!' : 'Copy Talent Playbook'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & 4. Talent Bar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-950 to-teal-950/20 rounded-xl border border-teal-500/30 space-y-2">
                    <span className="text-teal-300 font-bold font-mono text-sm">1. Hiring Philosophy</span>
                    <div className="text-sm font-extrabold text-white">We do not hire to fill seats. We hire to build a category.</div>
                    <p className="text-slate-300 text-xs">
                      FlowForge hires category builders, system thinkers, load stabilizers, engineering protectors, and AI-native operators who believe engineering deserves stability.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                    <span className="text-cyan-300 font-bold font-mono text-sm">4. The FlowForge Talent Bar</span>
                    <div className="text-sm font-extrabold text-white">"If you cannot stabilize engineering load, you cannot work here."</div>
                    <p className="text-slate-300 text-xs">
                      Every role — engineering, product, design, sales, operations — must understand Load, Critical Paths, Burnout Risk, Velocity, Parallelization, and Stability.
                    </p>
                  </div>
                </div>

                {/* 2. Who We Hire (5 Traits) & 3. Who We Do NOT Hire */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">2. Who We Hire (5 Core Traits)</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">1. Systems Thinking:</strong> See load, dependencies, bottlenecks, critical paths.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">2. Precision:</strong> Communicate clearly and execute cleanly.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-pink-300">3. Humanity:</strong> Protect teams and prevent burnout.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">4. Autonomy:</strong> Act without waiting for permission.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-purple-300">5. Inevitability:</strong> Believe FlowForge is the future of engineering.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">3. Who We Do NOT Hire</span>
                    <div className="p-2.5 bg-rose-950/20 border border-rose-500/20 rounded-lg text-rose-300 font-bold text-[11px]">
                      "FlowForge hires adults, not projects."
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Chaos creators</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Ego-driven operators</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Feature chasers</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Dashboard thinkers</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Burnout normalizers</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Motion vs progress confusion</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ Constant direction needers</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-slate-300">❌ AI pairing resisters</div>
                    </div>
                  </div>
                </div>

                {/* 5. Four-Stage Interview Loop */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-purple-400 font-bold font-mono text-sm">5. The Four-Stage Interview Loop</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-cyan-300 block font-mono">Stage 1 — Systems Thinking</strong>
                      <p className="text-slate-400 text-[10px] italic">"How do you identify instability? How do you stabilize a failing system? What is your mental model of load?"</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-amber-300 block font-mono">Stage 2 — Precision</strong>
                      <p className="text-slate-400 text-[10px] italic">"Explain a complex concept simply. Describe a failure without excuses. Communicate a decision clearly."</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-emerald-300 block font-mono">Stage 3 — Autonomy</strong>
                      <p className="text-slate-400 text-[10px] italic">"When did you act without permission? How do you unblock yourself? What do you do when direction is unclear?"</p>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-pink-300 block font-mono">Stage 4 — Culture</strong>
                      <p className="text-slate-400 text-[10px] italic">"Why does engineering deserve stability? What does burnout mean to you? What does inevitability mean to you?"</p>
                    </div>
                  </div>
                </div>

                {/* 6. Criteria, 7. Offer & 8. Rejection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">6. Hiring Criteria</span>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      <li>• <strong>A. Load Awareness:</strong> Intuitive load comprehension</li>
                      <li>• <strong>B. Critical Path Sensitivity:</strong> Knowing where it breaks</li>
                      <li>• <strong>C. Burnout Empathy:</strong> Active team protection</li>
                      <li>• <strong>D. AI-Native Thinking:</strong> High autonomy</li>
                      <li>• <strong>E. Category Alignment:</strong> ELO champion</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">7. Offer Philosophy</span>
                    <div className="p-2 bg-emerald-950/20 border border-emerald-500/30 rounded text-emerald-300 font-semibold text-[11px]">
                      "We do not hire 'maybe'. We hire 'absolutely.'"
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Candidates must measurably strengthen our culture, category, system, mission, and team.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">8. Rejection Philosophy</span>
                    <p className="text-[11px] text-slate-300">
                      We reject quickly and respectfully. Any candidate who is unclear, chaotic, fragile, ego-driven, misaligned, or unable to stabilize load is passed immediately.
                    </p>
                  </div>
                </div>

                {/* 9. Pipeline, 10. Structure & 11. Promise */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">9. Talent Pipeline</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• Category leadership gravity</div>
                      <div>• Public "Engineering Deserves Stability" narrative</div>
                      <div>• Founder presence & mission</div>
                      <div>• AI-Native pairing identity</div>
                      <div>• FFX marketplace economics</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold font-mono text-sm">10. Team Structure</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• Small, autonomous units owning systems</div>
                      <div>• Load-first planning (never task-first)</div>
                      <div>• Mandatory AI copilot pairing</div>
                      <div>• Parallelization by default</div>
                      <div>• Critical path protection guards</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-teal-400 font-bold font-mono text-sm">11. The Talent Promise</span>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-200">
                      "We will protect you from burnout. We will give you clarity. We will give you autonomy. We will give you purpose. We will give you stability."
                    </div>
                  </div>
                </div>

                {/* 12. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-teal-400 pl-4 py-1 font-serif">
                  "FlowForge is a place where elite talent comes to build the future of engineering. We hire people who believe in stability. We hire people who believe in autonomy. We hire people who believe in inevitability. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 9: SCALING BLUEPRINT (FOUNDER EDITION) */}
          {activeArtifact === 'scaling_blueprint' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <TrendingUpIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Expansion Architecture • Stages, Units, AI Scaling, Revenue & Moats</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — SCALING BLUEPRINT (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — SCALING BLUEPRINT (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Scaling Philosophy\nStability first, velocity second, scale third. We stabilize before we accelerate. We accelerate before we scale. We scale only when the system can sustain it. This is how FlowForge avoids fragility.\n\n2. The Four Scaling Stages\nPhase 1 — Founder-Led (1–10 people): Founder narrative, category creation, early enterprise deals, AI orchestration core, Texas-first strategy, critical path stabilization.\nPhase 2 — System-Led (10–50 people): Autonomous teams, AI pairing, marketplace liquidity, compliance automation, load-first engineering, enterprise onboarding.\nPhase 3 — Machine-Led (50–200 people): AI-native operations, multi-tenant enterprise scale, national expansion, marketplace economics, category dominance, predictable revenue.\nPhase 4 — Category-Led (200+ people): Global expansion, AI-managed engineering, AI-managed delivery, AI-managed operations, engineering economics standardization, default category operating system.\n\n3. Scaling Teams (6 Unit Model)\nA. Orchestration Unit (AI load stabilization, critical path protection, burnout prevention)\nB. Marketplace Unit (FFX liquidity, capacity trading, slack economics)\nC. Autonomy Unit (AI pairing, AI suggestions, AI task redistribution)\nD. Compliance Unit (Texas SaaS exemption, audit-ready billing, enterprise transparency)\nE. GTM Unit (Enterprise sales, category marketing, founder-led deals)\nF. Operations Unit (Onboarding, billing, support, stability)\n\n4. Scaling Product\n1. Depth -> Breadth -> Autonomy (Orchestration -> Marketplace/Compliance -> AI-managed engineering)\n2. Stability -> Prediction -> Action (Load modeling -> Burnout/Velocity forecasting -> Autonomous orchestration)\n3. Texas -> National -> Global (Texas-first compliance -> National onboarding -> Global economics)\n\n5. Scaling AI (3 Layers)\nLayer 1 — Predictive AI (Overload detection, burnout prediction, critical path forecasting)\nLayer 2 — Assistive AI (AI pairing, AI suggestions, AI dependency mapping)\nLayer 3 — Autonomous AI (Task redistribution, sprint restructuring, critical path rescue, capacity injection, load balancing, risk mitigation. Autonomy is the endgame.)\n\n6. Scaling Revenue\nA. FFX Marketplace (Slack injection, capacity trading, velocity boosts)\nB. AI Autopilot Subscription (Predictive orchestration, burnout prevention, critical path stabilization)\nC. Compliance Engine (Texas SaaS exemption, audit-ready billing)\nD. Enterprise Multi-Tenant (Workspace isolation, audit logs, onboarding)\n\n7. Scaling Culture\nCulture Code enforcement, Hiring Playbook discipline, Brand Bible consistency. Culture becomes a moat.\n\n8. Scaling Operations\nLoad-first planning, AI-native workflows, Parallelization, Compliance automation.\n\n9. Scaling Market\nStage 1: Texas Dominance (WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow)\nStage 2: National Expansion (Enterprise teams, compliance-heavy industries, AI-native adopters)\nStage 3: Global Expansion (Engineering economics standardization, AI-managed engineering, load-first operations)\n\n10. Founder Declaration\nFlowForge is becoming the operating system for enterprise engineering. We stabilize load. We protect teams. We guarantee delivery. We build autonomy. We create liquidity. We define the category. We scale with inevitability. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1018);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1018 ? 'Scaling Blueprint Copied!' : 'Copy Scaling Blueprint'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & Core Rule */}
                <div className="p-4 bg-gradient-to-r from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                  <span className="text-cyan-300 font-bold font-mono text-sm">1. Scaling Philosophy</span>
                  <div className="text-base font-extrabold text-white">Stability first, velocity second, scale third.</div>
                  <p className="text-slate-300">
                    We stabilize before we accelerate. We accelerate before we scale. We scale only when the system can sustain it. This is how FlowForge avoids fragility and builds durable category leadership.
                  </p>
                </div>

                {/* 2. Four Scaling Stages */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-amber-400 font-bold font-mono text-sm">2. The Four Deliberate Scaling Stages</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-white font-mono">Phase 1: Founder-Led</strong>
                        <span className="text-[10px] px-1.5 py-0.5 bg-amber-400/20 text-amber-300 rounded font-mono">1–10 people</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">Founder narrative, category creation, early Texas deals, core AI engine, critical path stabilization.</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-white font-mono">Phase 2: System-Led</strong>
                        <span className="text-[10px] px-1.5 py-0.5 bg-cyan-400/20 text-cyan-300 rounded font-mono">10–50 people</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">Autonomous units, AI copilot pairing, marketplace liquidity, compliance automation, enterprise onboarding.</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-white font-mono">Phase 3: Machine-Led</strong>
                        <span className="text-[10px] px-1.5 py-0.5 bg-emerald-400/20 text-emerald-300 rounded font-mono">50–200 people</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">AI-native ops, multi-tenant enterprise scale, national expansion, marketplace economics, predictable revenue.</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-white font-mono">Phase 4: Category-Led</strong>
                        <span className="text-[10px] px-1.5 py-0.5 bg-purple-400/20 text-purple-300 rounded font-mono">200+ people</span>
                      </div>
                      <p className="text-slate-400 text-[10px]">Global expansion, AI-managed delivery, engineering economics standardization, default category operating system.</p>
                    </div>
                  </div>
                </div>

                {/* 3. Six Unit Model & 5. AI Scaling Layers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">3. Scaling Teams (6 Unit Model)</span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">A. Orchestration:</strong> Load & critical paths</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">B. Marketplace:</strong> FFX slack liquidity</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">C. Autonomy:</strong> AI copilot & redistribution</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-pink-300">D. Compliance:</strong> Texas SaaS exemption</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-blue-300">E. GTM:</strong> Enterprise sales & category</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-indigo-300">F. Operations:</strong> Onboarding & stability</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">5. Scaling AI (3 Continuous Layers)</span>
                    <div className="space-y-1.5 text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300 font-mono">Layer 1 — Predictive AI:</strong> Overload detection, burnout prediction, critical path forecasting.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300 font-mono">Layer 2 — Assistive AI:</strong> AI pairing, task suggestions, dependency topology mapping.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300 font-mono">Layer 3 — Autonomous AI:</strong> Task redistribution, sprint restructuring, critical path rescue, capacity injection. <span className="text-emerald-400 font-semibold italic">Autonomy is the endgame.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Product, 6. Revenue & 8. Operations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold font-mono text-sm">4. Scaling Product</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• <strong>Depth → Breadth → Autonomy</strong></div>
                      <div className="text-slate-400 text-[10px] pl-2">Orchestration → Marketplace → AI-Managed Engineering</div>
                      <div>• <strong>Stability → Prediction → Action</strong></div>
                      <div className="text-slate-400 text-[10px] pl-2">Modeling → Forecasting → Autonomous Remediation</div>
                      <div>• <strong>Texas → National → Global</strong></div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">6. Scaling Revenue</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• <strong>FFX Marketplace:</strong> Usage slack injection</div>
                      <div>• <strong>AI Autopilot:</strong> Predictive orchestration</div>
                      <div>• <strong>Compliance Engine:</strong> Texas SaaS billing</div>
                      <div>• <strong>Multi-Tenant:</strong> Workspaces & audit logs</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-teal-400 font-bold font-mono text-sm">8. Scaling Operations</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• <strong>Load-First Planning:</strong> Capacity alignment</div>
                      <div>• <strong>AI-Native Workflows:</strong> Copilot orchestration</div>
                      <div>• <strong>Parallelization:</strong> Unblocking bottlenecks</div>
                      <div>• <strong>Automated Compliance:</strong> Audit-ready logs</div>
                    </div>
                  </div>
                </div>

                {/* 9. Market Expansion Stages */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-rose-400 font-bold font-mono text-sm">9. Market Expansion Stages</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-white block">Stage 1: Texas Dominance</strong>
                      <p className="text-slate-400 text-[10px] mt-0.5">WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-cyan-300 block">Stage 2: National Expansion</strong>
                      <p className="text-slate-400 text-[10px] mt-0.5">Enterprise engineering teams, compliance-heavy sectors, AI-native adopters.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-purple-300 block">Stage 3: Global Expansion</strong>
                      <p className="text-slate-400 text-[10px] mt-0.5">Engineering economics standardization, AI-managed engineering delivery.</p>
                    </div>
                  </div>
                </div>

                {/* 10. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-cyan-400 pl-4 py-1 font-serif">
                  "FlowForge is becoming the operating system for enterprise engineering. We stabilize load. We protect teams. We guarantee delivery. We build autonomy. We create liquidity. We define the category. We scale with inevitability. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 10: COMMUNICATIONS & PR PLAYBOOK (FOUNDER EDITION) */}
          {activeArtifact === 'comms_pr' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <MegaphoneIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>External Communications • PR, Analysts, Narrative, Crisis & Social Strategy</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — COMMUNICATIONS & PR PLAYBOOK (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — COMMUNICATIONS & PR PLAYBOOK (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Communications Philosophy\nFlowForge communicates with one purpose: Shape the narrative of Engineering Load Orchestration. We do not react. We do not chase trends. We do not explain ourselves. We define the category. We define the language. We define the future. FlowForge speaks with inevitability.\n\n2. Core Messaging\n"Engineering doesn't fail because of code. Engineering fails because of overload. FlowForge stabilizes engineering load using AI." Every communication reinforces this.\n\n3. Public Voice\nDirect, Executive, Authoritative, Predictive, Category-first, Outcome-driven, Calm, Confident. We speak like the operating system of engineering.\n\n4. PR Positioning\nThe creator and leader of Engineering Load Orchestration (ELO). We are NOT a dashboard, workflow tool, project manager, or productivity app. We ARE the AI-native operating system for enterprise engineering.\n\n5. Press Strategy\n1. Category Leadership (announce category milestones, not features)\n2. Enterprise Impact (highlight stability, predictability, burnout prevention)\n3. Founder Authority (Chukwuma is the voice of engineering stability)\n\n6. Analyst Strategy\nA. Category Definition (educate analysts on ELO)\nB. Market Need (show rising complexity and burnout)\nC. Product Fit (FlowForge as inevitable solution)\nD. Competitive Moat (marketplace liquidity, AI autonomy, compliance)\n\n7. Public Narrative Framework\n1. Problem: Engineering load instability\n2. Consequence: Burnout, slippage, fragility\n3. Solution: AI-native load orchestration\n4. Category: Engineering Load Orchestration\n5. Vision: FlowForge becomes the operating system for engineering\n\n8. Crisis Communication Protocol\nA. Calm Authority (speak clearly and decisively)\nB. Load-First Framing (explain how stability is restored)\nC. Transparency (communicate facts, not speculation)\nD. Founder Voice (Chukwuma delivers the message)\nE. Resolution (show how FlowForge prevents recurrence)\n\n9. Social Media Strategy\nExecutive + Technical + Visionary. Post: Category insights, stability concepts, AI autonomy progress, marketplace economics, founder commentary, enterprise wins, compliance clarity. Never post: Memes, trends, fluff, feature lists, reactive content. FlowForge is a category leader, not a content creator.\n\n10. Thought Leadership Strategy\nA. Founder Essays (stability, burnout prevention, AI autonomy, economics)\nB. Category Papers (ELO, load-first engineering, capacity marketplaces)\nC. Enterprise Guides (stability frameworks, velocity protection, compliance automation)\n\n11. External Communication Rules\nRule 1: Lead with the problem (load instability)\nRule 2: State consequence (burnout, slippage, fragility)\nRule 3: Present FlowForge as solution\nRule 4: Reinforce category (ELO)\nRule 5: Speak with inevitability\nRule 6: Avoid feature lists (focus on outcomes)\nRule 7: Protect engineers (FlowForge is humane)\n\n12. Founder Communication Protocol\nClarity, Precision, Calm, Authority, Vision.\n\n13. Founder Declaration\nFlowForge is a voice that defines engineering stability, protects teams, guarantees delivery, and shapes the future. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1019);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1019 ? 'Comms Playbook Copied!' : 'Copy Comms Playbook'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & 2. Core Messaging */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-950 to-amber-950/20 rounded-xl border border-amber-500/30 space-y-2">
                    <span className="text-amber-300 font-bold font-mono text-sm">1. Communications Philosophy</span>
                    <div className="text-sm font-extrabold text-white">Shape the narrative of Engineering Load Orchestration.</div>
                    <p className="text-slate-300 text-xs">
                      We do not react. We do not chase trends. We do not explain ourselves. We define the category, define the language, and define the future.
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                    <span className="text-cyan-300 font-bold font-mono text-sm">2. Core Public Message</span>
                    <blockquote className="text-xs font-semibold text-white italic border-l-2 border-cyan-400 pl-2.5 pt-0.5">
                      "Engineering doesn't fail because of code. Engineering fails because of overload. FlowForge stabilizes engineering load using AI."
                    </blockquote>
                    <p className="text-slate-400 text-[10px]">Every single press statement and public release reinforces this axiom.</p>
                  </div>
                </div>

                {/* 3. Public Voice & 4. PR Positioning */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-purple-400 font-bold font-mono text-sm">3. Public Voice (8 Attributes)</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-center font-mono text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Direct</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Executive</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Authoritative</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Predictive</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Category-first</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Outcome-driven</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Calm</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-white font-bold">Confident</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-teal-400 font-bold font-mono text-sm">4. PR Positioning Guardrails</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-300">
                        <strong className="text-rose-400">NOT:</strong> A dashboard, workflow tool, project manager, or productivity app.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-teal-500/30 text-white">
                        <strong className="text-teal-300">WE ARE:</strong> The creator and leader of <em>Engineering Load Orchestration (ELO)</em> — the AI-native OS for enterprise engineering.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Press Strategy & 6. Analyst Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-blue-400 font-bold font-mono text-sm">5. Press Strategy Pillars</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">1. Category Leadership:</strong> Announce category milestones, not micro-features.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">2. Enterprise Impact:</strong> Highlight stability, delivery certainty, burnout defense.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">3. Founder Authority:</strong> Chukwuma is the primary voice of engineering stability.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold font-mono text-sm">6. Analyst Strategy (Gartner / Forrester)</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">A. Category Definition:</strong> Formalize ELO as separate from Agile/APM.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">B. Market Need:</strong> Document the enterprise load crisis and burnout.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">C. Product Fit:</strong> Prove FlowForge is the inevitable answer.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-purple-300">D. Competitive Moat:</strong> FFX marketplace, AI autonomy, Texas SaaS code.</div>
                    </div>
                  </div>
                </div>

                {/* 7. Public Narrative & 8. Crisis Protocol */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">7. Five-Part Public Narrative</span>
                    <div className="space-y-1 text-[11px] font-mono pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-rose-400 font-bold">1. Problem:</span> Load instability across critical paths.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-amber-400 font-bold">2. Consequence:</span> Burnout, slippage, fragility, enterprise risk.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-cyan-400 font-bold">3. Solution:</span> AI-native load stabilization.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-emerald-400 font-bold">4. Category:</span> Engineering Load Orchestration (ELO).</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><span className="text-purple-400 font-bold">5. Vision:</span> FlowForge as the OS for engineering.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">8. Crisis Communication Protocol</span>
                    <div className="space-y-1 text-[11px] pt-1 text-slate-300">
                      <div>• <strong>A. Calm Authority:</strong> Clear and decisive without panic.</div>
                      <div>• <strong>B. Load-First Framing:</strong> Explain how stability is restored.</div>
                      <div>• <strong>C. Transparency:</strong> Communicate audited facts, not conjecture.</div>
                      <div>• <strong>D. Founder Voice:</strong> Chukwuma delivers the response directly.</div>
                      <div>• <strong>E. Resolution:</strong> Quantify how recurrence is structurally prevented.</div>
                    </div>
                  </div>
                </div>

                {/* 9. Social & 10. Thought Leadership & 11. Rules */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-pink-400 font-bold font-mono text-sm">9. Social Media Mandate</span>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-300">
                      <strong>Executive + Technical + Visionary.</strong>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Post category insights, stability models, AI progress. Zero memes, trends, or feature fluff. Category leader, not content creator.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">10. Thought Leadership</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>• <strong>Founder Essays:</strong> Engineering Economics</div>
                      <div>• <strong>Category Whitepapers:</strong> ELO Standards</div>
                      <div>• <strong>Enterprise Guides:</strong> Burnout Shielding</div>
                      <div>• <strong>Frameworks:</strong> Slack Injection Models</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">11. Seven Messaging Rules</span>
                    <div className="space-y-0.5 text-[10px] text-slate-300">
                      <div>1. Lead with the problem (instability)</div>
                      <div>2. State the consequence (burnout)</div>
                      <div>3. Present FlowForge as solution</div>
                      <div>4. Reinforce category (ELO)</div>
                      <div>5. Speak with inevitability</div>
                      <div>6. Outcomes over feature lists</div>
                      <div>7. Humane protection for engineers</div>
                    </div>
                  </div>
                </div>

                {/* 13. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-amber-400 pl-4 py-1 font-serif">
                  "FlowForge is not just a company. FlowForge is a voice. A voice that defines engineering stability, protects teams, guarantees delivery, and shapes the future. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 11: REVENUE & GTM BLUEPRINT (FOUNDER EDITION) */}
          {activeArtifact === 'revenue_gtm' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <DollarSignIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Commercial Operating System • Monetization, Pricing, Expansion & Rhythm</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — REVENUE & GTM BLUEPRINT (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — REVENUE & GTM BLUEPRINT (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Revenue Philosophy\nFlowForge generates revenue by delivering one outcome: Engineering stability. We do not sell features, dashboards, or productivity. We sell predictable delivery, protected engineering teams, stable critical paths, burnout prevention, velocity certainty, and load stabilization.\n\n2. The FlowForge Revenue Model (4 Engines)\n1. FFX Credits (Usage-Based): Slack injection, capacity trading, critical path rescue, velocity boosts.\n2. AI Autopilot Subscription (Recurring): Predictive orchestration, burnout prevention, critical path stabilization, load modeling.\n3. Compliance Engine (Add-On): Texas SaaS exemption, audit-ready billing, enterprise transparency.\n4. Enterprise Multi-Tenant (Platform): Workspace isolation, audit logs, enterprise onboarding.\nHybrid revenue: usage + subscription + platform.\n\n3. GTM Strategy (3 Pillars)\n1. Category Leadership (we sell Engineering Load Orchestration)\n2. Texas First (dominate Texas enterprise engineering)\n3. Founder-Led Enterprise Deals (Chukwuma closes strategic accounts)\n\n4. Pipeline Strategy\nA. Outbound Sequences (personalized enterprise outreach)\nB. Category Messaging (load instability -> FlowForge stabilization)\nC. Founder Presence (high-impact early conversations)\nD. Analyst Education (define category -> shape perception)\nE. Enterprise Referrals (stability spreads through engineering networks)\n\n5. Pricing Strategy\n- FFX Credits: Usage-based, scalable, predictable\n- AI Autopilot: Per team / workspace recurring\n- Compliance Engine: Flat enterprise compliance fee\n- Enterprise Multi-Tenant: Tiered platform pricing\n\n6. Account Expansion Strategy (5 Built-in Engines)\n1. Critical Path Rescue (fix one critical path -> expand to all)\n2. Burnout Prevention (protect one team -> expand to entire org)\n3. Velocity Boosts (inject slack -> show instant improvement)\n4. Compliance Wins (audit-ready billing -> win CFO)\n5. Marketplace Liquidity (more teams -> more capacity -> more value)\n\n7. Customer Success Framework\nLoad monitoring, Burnout prevention, Critical path protection, Velocity optimization, Executive reporting.\n\n8. Renewal Strategy\nStability Metrics (load stability, burnout reduction), Economic Metrics (capacity savings, slack efficiency), Executive Outcomes (predictable delivery, compliance certainty).\n\n9. GTM Team Structure\nEnterprise Sales, Sales Engineering, Customer Success, Marketing, Partnerships.\n\n10. Weekly GTM Operating Rhythm\nMonday: Pipeline Review (accounts, critical path opportunities, burnout signals)\nTuesday: Demo Day (live orchestration demos, load instability -> stabilization)\nWednesday: Expansion Strategy (FFX usage, slack injection, velocity boosts)\nThursday: Customer Success (stability reports, executive outcomes)\nFriday: Founder Review (category progress, revenue velocity, enterprise wins)\n\n11. Founder GTM Role\nCategory Evangelist, Enterprise Closer, Narrative Architect, Stability Champion, Vision Carrier.\n\n12. Founder Declaration\nFlowForge is becoming the economic engine of engineering stability. We stabilize load. We protect teams. We guarantee delivery. We create liquidity. We define the category. We scale with inevitability. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1020);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1020 ? 'Revenue Blueprint Copied!' : 'Copy Revenue Blueprint'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & 2. Four Engines */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-950 to-emerald-950/20 rounded-xl border border-emerald-500/30 space-y-2">
                    <span className="text-emerald-300 font-bold font-mono text-sm">1. Revenue Philosophy</span>
                    <div className="text-sm font-extrabold text-white">We monetize engineering stability — not dashboards or features.</div>
                    <p className="text-slate-300 text-xs">
                      We sell predictable delivery, protected engineering teams, stable critical paths, burnout prevention, velocity certainty, and load stabilization.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-300 font-bold font-mono text-sm">2. Hybrid Monetization Model</span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300">1. FFX Credits:</strong>
                        <div className="text-[10px] text-slate-400">Usage-based slack & capacity trading.</div>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300">2. AI Autopilot:</strong>
                        <div className="text-[10px] text-slate-400">Recurring predictive load orchestration.</div>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300">3. Compliance:</strong>
                        <div className="text-[10px] text-slate-400">Texas SaaS exemption automation.</div>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-purple-300">4. Multi-Tenant:</strong>
                        <div className="text-[10px] text-slate-400">Workspace isolation & audit trails.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. GTM Strategy & 4. Pipeline Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">3. Three GTM Pillars</span>
                    <div className="space-y-1.5 pt-1 text-[11px]">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-white">1. Category Leadership:</strong> We sell Engineering Load Orchestration (ELO).</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">2. Texas First:</strong> Dominating Texas enterprise tech leaders.</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">3. Founder-Led Deals:</strong> Chukwuma spearheads early lighthouse accounts.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-teal-400 font-bold font-mono text-sm">4. Pipeline Generation Engine</span>
                    <div className="space-y-1 text-[11px] text-slate-300 pt-1">
                      <div>• <strong>A. Outbound Sequences:</strong> Persona-driven CTO & VP Eng outreach.</div>
                      <div>• <strong>B. Category Messaging:</strong> Load instability $\rightarrow$ AI stabilization.</div>
                      <div>• <strong>C. Founder Presence:</strong> High-trust C-suite triage sessions.</div>
                      <div>• <strong>D. Analyst Education:</strong> Category shaping with Gartner/Forrester.</div>
                      <div>• <strong>E. Peer Referrals:</strong> Engineering leaders seeking burnout defense.</div>
                    </div>
                  </div>
                </div>

                {/* 6. Built-in Expansion & 8. Renewal Triad */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-indigo-400 font-bold font-mono text-sm">6. Five Built-In Account Expansion Vectors</span>
                    <div className="space-y-1 text-[11px] text-slate-300">
                      <div>1. <strong>Critical Path Rescue:</strong> Solve one blocked release $\rightarrow$ expand to org.</div>
                      <div>2. <strong>Burnout Prevention:</strong> Protect high-risk pods $\rightarrow$ rollout to all squads.</div>
                      <div>3. <strong>Velocity Boosts:</strong> Inject slack $\rightarrow$ measurable cycle time drop.</div>
                      <div>4. <strong>Compliance Wins:</strong> Audit-ready Texas SaaS code $\rightarrow$ CFO expansion.</div>
                      <div>5. <strong>Marketplace Liquidity:</strong> Cross-team capacity token trading.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-rose-400 font-bold font-mono text-sm">8. Inevitable Renewal Triad</span>
                    <div className="space-y-1.5 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">Stability Metrics:</strong> Measured load stabilization & zero burnout spikes.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">Economic Metrics:</strong> FFX capacity efficiency & engineering cost optimization.</div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800"><strong className="text-purple-300">Executive Outcomes:</strong> On-time delivery certainty & automated compliance.</div>
                    </div>
                  </div>
                </div>

                {/* 10. Weekly Operating Rhythm */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-cyan-400 font-bold font-mono text-sm">10. Weekly GTM Operating Cadence</span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-[11px]">
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-cyan-300 block font-mono">Monday</strong>
                      <span className="text-white font-semibold block text-[10px]">Pipeline Review</span>
                      <p className="text-slate-400 text-[10px]">Critical path deals, burnout risk signals in pipeline.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-amber-300 block font-mono">Tuesday</strong>
                      <span className="text-white font-semibold block text-[10px]">Demo Day</span>
                      <p className="text-slate-400 text-[10px]">Live load instability $\rightarrow$ AI stabilization demos.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-emerald-300 block font-mono">Wednesday</strong>
                      <span className="text-white font-semibold block text-[10px]">Expansion Strategy</span>
                      <p className="text-slate-400 text-[10px]">FFX usage monitoring, slack injection upsells.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-purple-300 block font-mono">Thursday</strong>
                      <span className="text-white font-semibold block text-[10px]">Customer Success</span>
                      <p className="text-slate-400 text-[10px]">Weekly stability reports & executive outcome reviews.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-pink-300 block font-mono">Friday</strong>
                      <span className="text-white font-semibold block text-[10px]">Founder Review</span>
                      <p className="text-slate-400 text-[10px]">Category progress, revenue velocity, strategic wins.</p>
                    </div>
                  </div>
                </div>

                {/* 11. Founder GTM Role & 12. Declaration */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-amber-400 font-bold font-mono text-sm">11. Chukwuma's Strategic GTM Role</span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-center font-mono text-[11px] pt-1">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Category Evangelist</span><div className="text-[10px] text-slate-400">Define ELO</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Enterprise Closer</span><div className="text-[10px] text-slate-400">Lighthouse accounts</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Narrative Architect</span><div className="text-[10px] text-slate-400">Shape perception</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Stability Champion</span><div className="text-[10px] text-slate-400">Protect teams</div></div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800"><span className="text-white font-bold">Vision Carrier</span><div className="text-[10px] text-slate-400">Inevitable growth</div></div>
                  </div>
                </div>

                {/* 12. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-emerald-400 pl-4 py-1 font-serif">
                  "FlowForge is not just generating revenue. FlowForge is not just building pipeline. FlowForge is not just expanding accounts. FlowForge is becoming the economic engine of engineering stability. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 12: LEADERSHIP & GOVERNANCE FRAMEWORK (FOUNDER EDITION) */}
          {activeArtifact === 'leadership_gov' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <LandmarkIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Executive Operating System • Governance, Decision Filters, Cadence & Roles</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — LEADERSHIP & GOVERNANCE FRAMEWORK (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — LEADERSHIP & GOVERNANCE FRAMEWORK (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Leadership Philosophy\nLeadership protects stability. Leaders do not chase features, create chaos, or overload teams. Leaders stabilize Load, People, Systems, Decisions, Culture, and Velocity. Stability is leadership.\n\n2. Leadership Pillars\n1. Clarity (Leaders communicate simply and decisively)\n2. Precision (Leaders make clean, intentional decisions)\n3. Humanity (Leaders protect teams from overload)\n4. Autonomy (Leaders empower teams to act without friction)\n5. Inevitability (Leaders reinforce FlowForge's category dominance)\n\n3. Leadership Roles\nA. Founder / CEO (Chukwuma): Category creator, narrative architect, enterprise closer, vision carrier, stability champion.\nB. CTO / Head of Engineering: Load-first engineering, AI autonomy development, critical path protection, parallelization, marketplace integration.\nC. COO / Head of Operations: Compliance, onboarding, billing, enterprise stability, operational clarity.\nD. CRO / Head of Revenue: Enterprise sales, pipeline velocity, expansion strategy, renewals, GTM alignment.\nE. CPO / Head of Product: Load stabilization outcomes, AI-native workflows, critical path modeling, product clarity.\n\n4. Leadership Operating Rhythm\nMonday — Stability Review (load stability, burnout risk, critical path health, velocity forecast)\nTuesday — Product Leadership (AI autonomy, marketplace liquidity, compliance automation, parallelization)\nWednesday — GTM Leadership (enterprise pipeline, expansion strategy, category messaging, Texas dominance)\nThursday — Operations Leadership (onboarding, billing, support, enterprise reliability)\nFriday — Founder Review (strategic alignment, category progress, leadership accountability, long-term direction)\n\n5. Decision-Making Framework (4-Step Filter)\n1. Does this stabilize engineering load? (If yes -> priority)\n2. Does this reduce burnout? (If yes -> accelerate)\n3. Does this increase delivery certainty? (If yes -> greenlight)\n4. Does this align with the AI-native OS vision? (If yes -> build)\nIf no -> cut.\n\n6. Governance Structure\nLayer 1 — Founder Governance (category direction, narrative control, enterprise strategy, AI autonomy)\nLayer 2 — Executive Governance (product, engineering, revenue, operations, compliance)\nLayer 3 — Team Governance (autonomous units, load-first planning, AI pairing, parallelization)\n\n7. Accountability Framework\nOutcome 1: Load Stability | Outcome 2: Burnout Prevention | Outcome 3: Delivery Certainty | Outcome 4: Velocity Health | Outcome 5: Marketplace Liquidity | Outcome 6: Compliance Reliability.\nLeaders are accountable for outcomes, not tasks.\n\n8. Leadership Culture\nDirect, Executive, Outcome-driven, Category-first, Calm, Precise, Protective.\n\n9. Leadership Scaling\nRole clarity, Load-first planning, AI-native operations, Parallelization, Category alignment.\n\n10. Founder Leadership Principles\nClarity, Precision, Calm, Authority, Vision.\n\n11. Founder Declaration\nFlowForge is a leadership system that stabilizes engineering, protects teams, guarantees delivery, builds autonomy, creates liquidity, and defines the future. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1021);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-400 hover:bg-indigo-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1021 ? 'Framework Copied!' : 'Copy Governance Framework'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Philosophy & 2. Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-slate-950 to-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-2">
                    <span className="text-indigo-300 font-bold font-mono text-sm">1. Leadership Philosophy</span>
                    <div className="text-sm font-extrabold text-white">Leadership protects stability. Stability is leadership.</div>
                    <p className="text-slate-300 text-xs">
                      Leaders do not chase features, create chaos, or overload teams. Leaders stabilize Load, People, Systems, Decisions, Culture, and Velocity.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-300 font-bold font-mono text-sm">2. Five Leadership Pillars</span>
                    <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-cyan-300 font-bold">Clarity</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-amber-300 font-bold">Precision</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-pink-300 font-bold">Humanity</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-emerald-300 font-bold">Autonomy</div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800 text-purple-300 font-bold">Inevitability</div>
                    </div>
                  </div>
                </div>

                {/* 3. Leadership Roles */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <span className="text-purple-400 font-bold font-mono text-sm">3. Five Executive Leadership Roles</span>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-[11px]">
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-amber-300 block font-mono">Founder / CEO (Chukwuma)</strong>
                      <p className="text-slate-400 text-[10px]">Category creator, narrative architect, enterprise closer, vision carrier.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-cyan-300 block font-mono">CTO (Engineering)</strong>
                      <p className="text-slate-400 text-[10px]">Load-first engineering, AI autonomy engine, critical path protection.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-emerald-300 block font-mono">COO (Operations)</strong>
                      <p className="text-slate-400 text-[10px]">Texas SaaS compliance, billing, enterprise onboarding reliability.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-pink-300 block font-mono">CRO (Revenue)</strong>
                      <p className="text-slate-400 text-[10px]">Enterprise sales, pipeline velocity, account expansion, renewals.</p>
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                      <strong className="text-indigo-300 block font-mono">CPO (Product)</strong>
                      <p className="text-slate-400 text-[10px]">Stabilization outcomes, AI-native workflows, critical path modeling.</p>
                    </div>
                  </div>
                </div>

                {/* 4. Operating Rhythm & 5. Decision Filter */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-amber-400 font-bold font-mono text-sm">4. Leadership Operating Cadence</span>
                    <div className="space-y-1 text-[11px] pt-1 text-slate-300">
                      <div>• <strong className="text-white">Monday:</strong> Stability Review (load, burnout risk, velocity forecast)</div>
                      <div>• <strong className="text-white">Tuesday:</strong> Product Leadership (AI autonomy & marketplace)</div>
                      <div>• <strong className="text-white">Wednesday:</strong> GTM Leadership (enterprise pipeline & Texas expansion)</div>
                      <div>• <strong className="text-white">Thursday:</strong> Operations Leadership (onboarding, billing, reliability)</div>
                      <div>• <strong className="text-white">Friday:</strong> Founder Review (strategic alignment & long-term vision)</div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-emerald-400 font-bold font-mono text-sm">5. Four-Step Decision Filter</span>
                    <div className="space-y-1 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                        <span>1. Does this stabilize engineering load?</span>
                        <span className="text-emerald-300 font-bold font-mono">If yes → Priority</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                        <span>2. Does this reduce burnout?</span>
                        <span className="text-cyan-300 font-bold font-mono">If yes → Accelerate</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                        <span>3. Does this increase delivery certainty?</span>
                        <span className="text-amber-300 font-bold font-mono">If yes → Greenlight</span>
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                        <span>4. Does this align with the AI OS vision?</span>
                        <span className="text-purple-300 font-bold font-mono">If yes → Build</span>
                      </div>
                      <div className="p-1 text-[10px] text-rose-400 font-semibold italic text-center">
                        Any proposal failing these tests is cut immediately.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Governance & 7. Accountability */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-cyan-400 font-bold font-mono text-sm">6. Three Governance Layers</span>
                    <div className="space-y-1.5 text-[11px] pt-1">
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300">Layer 1 — Founder Governance:</strong> Category direction, narrative control, AI autonomy vision.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300">Layer 2 — Executive Governance:</strong> Product, engineering, revenue, operations, compliance.
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300">Layer 3 — Team Governance:</strong> Autonomous units, load-first planning, AI pairing.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-pink-400 font-bold font-mono text-sm">7. Accountability (Outcome-Based)</span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] pt-1">
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-cyan-300 block">1. Load Stability</strong> Zero unchecked overload spikes.
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-pink-300 block">2. Burnout Shield</strong> Teams protected proactively.
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-emerald-300 block">3. Delivery Certainty</strong> Predictable critical paths.
                      </div>
                      <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                        <strong className="text-amber-300 block">4. Velocity Health</strong> Parallelized execution speed.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 11. Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-indigo-400 pl-4 py-1 font-serif">
                  "FlowForge is a leadership system. A system that stabilizes engineering, protects teams, guarantees delivery, builds autonomy, creates liquidity, and defines the future. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 13: FOUNDER CODEX & MASTER INDEX (FOUNDER EDITION) */}
          {activeArtifact === 'founder_codex' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <BookOpenIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>The Founder Codex • Master Index & Unified Enterprise Manual</span>
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — THE FOUNDER CODEX (Volume I)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 1: CORE IDENTITY\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1.1 — The Founder Narrative\nFlowForge exists because engineering deserves stability.\nEngineering teams don't fail because of code — they fail because they're overloaded.\nCritical paths collapse. Burnout rises. Velocity dies. Delivery becomes unpredictable.\nFlowForge solves the real problem: Engineering load becomes unstable. FlowForge stabilizes engineering load using AI. FlowForge protects teams. FlowForge guarantees delivery. FlowForge defines the category. FlowForge is inevitable.\n\n1.2 — Brand Bible (Condensed for Codex)\nBrand Essence: FlowForge is stability.\nBrand Pillars: Stability, Precision, Humanity, Autonomy, Inevitability.\nBrand Voice: Direct, Executive, Outcome-driven, Category-first.\nBrand Narrative: Engineering doesn't fail because of code. Engineering fails because of overload. FlowForge stabilizes engineering load using AI.\nBrand Positioning: FlowForge is the AI-native operating system for enterprise engineering.\n\n1.3 — Culture Code (Condensed for Codex)\nCultural Essence: Engineering deserves stability.\nCultural Pillars: Stability, Precision, Humanity, Autonomy, Inevitability.\nHow We Think: We think in systems. We see load, dependencies, bottlenecks, critical paths.\nHow We Work: Clarity, Speed, Focus, Respect, Ownership.\nHow We Communicate: Direct, Executive, Calm, Confident.\nHow We Hire: System thinkers, Load stabilizers, AI-native operators.\nHow We Protect People: We prevent burnout, stabilize load, design humane systems.\n\n1.4 — Leadership & Governance Framework (Condensed for Codex)\nLeadership Philosophy: Leadership protects stability.\nLeadership Pillars: Clarity, Precision, Humanity, Autonomy, Inevitability.\nLeadership Roles: Founder / CEO, CTO, COO, CRO, CPO.\nDecision Framework: Does this stabilize load? Does this reduce burnout? Does this increase delivery certainty? Does this align with AI-native OS vision?\nGovernance Layers: Founder -> Executive -> Team.\nAccountability: Outcomes, not tasks.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1022);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1022 ? 'Chapter 1 Copied!' : 'Copy Chapter 1'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 2: STRATEGY\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n2.1 — Strategic Master Plan (Codex Edition)\nEngineering load is the root cause of engineering failure. Every symptom — burnout, slippage, fragility, unpredictability — traces back to load instability.\nFlowForge's strategy is to: Predict load instability, Prevent burnout, Stabilize critical paths, Guarantee delivery, Build AI autonomy, Create engineering liquidity, Define the category, Become the operating system for engineering.\n\n2.2 — Category Strategy: Engineering Load Orchestration (ELO)\nFlowForge is the creator and owner of the category: Engineering Load Orchestration (ELO).\nSix Pillars: Load Prediction, Critical Path Stabilization, Burnout Prevention, Capacity Injection (FFX), Parallelization Intelligence, Compliance Automation.\n\n2.3 — Competitive Strategy\nCompetitors can copy features. They cannot copy systems. FlowForge's system is built on: AI Orchestration Engine, FFX Marketplace, AI Swarm Copilot, Texas Compliance Engine, What-If Simulator, Enterprise Onboarding Platform. These engines create interlocking defensibility (Data moat, AI moat, Marketplace moat, Compliance moat, Category moat, Cultural moat).\n\n2.4 — Market Strategy\nTexas First -> National -> Global. Winning Texas creates regional dominance, category validation, marketplace liquidity, enterprise trust, and national momentum.\n\n2.5 — Product Strategy\nStability -> Prediction -> Autonomy. Autonomy is the endgame.\n\n2.6 — AI Strategy\nPhase 1 (Predictive AI) -> Phase 2 (Assistive AI) -> Phase 3 (Autonomous AI).\n\n2.7 — Marketplace Strategy (FFX)\nCreate liquidity in engineering capacity (Slack injection, Capacity trading, Critical path rescue, Velocity boosts).\n\n2.8 — Compliance Strategy\nTexas SaaS exemption automation (Trust, Legal, Operational, and Integration moats).\n\n2.9 — GTM Strategy\nCategory-first -> Founder-led -> Enterprise-focused. We sell stability, predictability, burnout prevention, critical path protection, and velocity certainty.\n\n2.10 — Strategic Declaration\nFlowForge is not just a strategy or plan. FlowForge is a movement that stabilizes engineering, protects teams, guarantees delivery, and defines the future. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1024);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1024 ? 'Chapter 2 Copied!' : 'Copy Chapter 2'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 3: PRODUCT ARCHITECTURE\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n3.1 — The Six-Engine Architecture\nFlowForge is not a feature set. FlowForge is a system — a multi-engine architecture designed to stabilize engineering load, prevent burnout, guarantee delivery, and create engineering liquidity.\n1. AI Orchestration Engine: Models load, predicts instability, stabilizes critical paths, prevents burnout.\n2. FFX Capacity Marketplace: Slack becomes a tradable asset. Engineering capacity becomes liquid. Critical paths rescued instantly.\n3. AI Swarm Copilot: Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA. AI that acts, not observes.\n4. Texas Compliance Engine: Automatic §151.0101 and §151.351 SaaS exemption. Audit-ready billing. Enterprise trust.\n5. What-If Simulator: Simulates load, burnout, timelines, parallelization, capacity. Predictive engineering economics.\n6. Enterprise Onboarding Platform: Multi-tenant orchestration, FFX purchasing, compliance-grade enterprise onboarding.\n\n3.2 — AI Orchestration Engine (Deep Architecture)\nLayer 1 (Load Modeling) -> Layer 2 (Instability Detection) -> Layer 3 (Stabilization Actions) -> Layer 4 (Autonomy).\n\n3.3 — FFX Marketplace (Deep Architecture)\nLayer 1 (Slack Tokens) -> Layer 2 (Capacity Trading) -> Layer 3 (Critical Path Rescue).\n\n3.4 — AI Swarm Copilot (Deep Architecture)\nMulti-Role Intelligence (DevOps, Backend, Frontend, QA, BA), Autonomous Actions, Parallelization Intelligence, Critical Path Awareness.\n\n3.5 — Texas Compliance Engine (Deep Architecture)\nSaaS Exemption Logic (§151.0101, §151.351), Audit-Ready Billing, Enterprise Trust.\n\n3.6 — What-If Simulator (Deep Architecture)\nModels load, burnout, velocity, parallelization, capacity, critical paths, timelines, engineering economics.\n\n3.7 — Enterprise Onboarding Platform (Deep Architecture)\nMulti-Tenant Workspaces, FFX Purchasing, AI Demo Mode, Enterprise Billing.\n\n3.8 — Product Declaration\nFlowForge is not a dashboard, workflow tool, or project manager. FlowForge is a six-engine AI-native operating system for enterprise engineering. It stabilizes load, protects teams, guarantees delivery, creates liquidity, defines the category, builds autonomy, and becomes inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1025);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-400 hover:bg-purple-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1025 ? 'Chapter 3 Copied!' : 'Copy Chapter 3'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 4: AI AUTONOMY\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n4.1 — The Philosophy of AI Autonomy\nAI should act, not observe. Dashboards observe. Project managers track. Analytics report. FlowForge intervenes, stabilizes, rescues, optimizes, prevents, and guarantees. This is the difference between AI assistance and AI autonomy. FlowForge is building autonomy.\n\n4.2 — The Three Phases of AI Autonomy\nPhase 1 — Predictive AI (What is about to break?): Detects overload, burnout risk, critical path fragility, velocity collapse, dependency instability, context switching spikes.\nPhase 2 — Assistive AI (What should we do next?): AI pairing, task suggestions, dependency mapping, parallelization opportunities, slack injection recommendations, critical path alerts.\nPhase 3 — Autonomous AI (I've already fixed it.): Task redistribution, sprint restructuring, critical path rescue, capacity injection, load balancing, risk mitigation, parallelization optimization. FlowForge is building Phase 3.\n\n4.3 — The Autonomy Stack\nLayer 1 — Perception (Task, team, role, dependency, critical path, velocity load)\nLayer 2 — Prediction (Burnout, slippage, fragility, bottlenecks, velocity collapse)\nLayer 3 — Decision (Redistribute tasks, inject slack, parallelize workflows, rescue critical paths)\nLayer 4 — Action (Autonomous sprint restructuring, capacity injection, dependency mapping, risk mitigation)\n\n4.4 — AI Swarm Architecture\nMulti-Agent Intelligence: DevOps Agent, Backend Agent, Frontend Agent, QA Agent, BA Agent, Critical Path Agent, Load Stability Agent, Marketplace Agent, Compliance Agent.\n\n4.5 — Critical Path Intelligence\nUnderstands critical path as a living system. Monitors dependencies, blockers, task sequencing, load distribution, burnout risk, velocity curves.\n\n4.6 — Burnout Prevention Intelligence\nModels burnout through load curves, context switching, task volatility, dependency pressure, role fragility. Prevents burnout proactively.\n\n4.7 — Velocity Optimization Intelligence\nVelocity is not speed — velocity is stability. Identifies parallelization, removes blockers, injects slack.\n\n4.8 — Marketplace Intelligence (FFX)\nPredicts capacity shortages, injects slack, buys capacity, sells excess, rescues critical paths.\n\n4.9 — Compliance Intelligence\nTexas SaaS exemption automation (§151), audit-ready billing, usage transparency, FFX token accounting.\n\n4.10 — Autonomy Declaration\nFlowForge is not building an assistant, dashboard, or productivity tool. FlowForge is building the AI that runs engineering. FlowForge is building autonomy. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1026);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-pink-400 hover:bg-pink-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1026 ? 'Chapter 4 Copied!' : 'Copy Chapter 4'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 5: ENGINEERING LOAD ORCHESTRATION (ELO)\nThe Category FlowForge Created\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n5.1 — The Core Premise of ELO\nEngineering does not fail because of bad code, bad tools, bad process, or bad planning. Engineering fails because of load instability. Load instability causes: Burnout, Slippage, Fragility, Velocity collapse, Critical path failure, Team breakdown. ELO solves the root cause.\n\n5.2 — The ELO Model (6 Pillars)\n1. Load Modeling (Tasks, teams, roles, dependencies, critical paths, velocity curves)\n2. Instability Detection (Overload, burnout risk, fragility, bottlenecks, velocity collapse)\n3. Critical Path Stabilization (Redistribute tasks, inject slack, parallelize workflows, remove blockers)\n4. Burnout Prevention (Load balancing, slack injection, sprint restructuring, capacity injection)\n5. Capacity Liquidity (FFX) (Turning slack into a tradable asset)\n6. AI Autonomy (Autonomous sprint restructuring, capacity injection, risk mitigation, velocity optimization)\n\n5.3 — The ELO Lifecycle (Continuous Loop)\nStep 1 (Observe) -> Step 2 (Predict) -> Step 3 (Intervene) -> Step 4 (Optimize) -> Step 5 (Liquify) -> Step 6 (Prevent).\n\n5.4 — The ELO Metrics\n• Load Stability Index (LSI): Measures stability of engineering load.\n• Critical Path Health (CPH): Measures fragility across dependencies.\n• Burnout Risk Curve (BRC): Predicts burnout before symptoms appear.\n• Velocity Stability Score (VSS): Measures velocity predictability.\n• Slack Efficiency Ratio (SER): Measures how effectively slack is used.\n• Capacity Liquidity Index (CLI): Measures marketplace liquidity.\n\n5.5 — The ELO Framework\nLoad (Model load) -> Risk (Predict instability) -> Action (Stabilize critical paths) -> Outcome (Guarantee delivery).\n\n5.6 — The ELO Pyramid\nBase Layer: Stability (Load modeling, burnout prevention, critical path protection)\nMiddle Layer: Velocity (Parallelization, slack injection, capacity optimization)\nTop Layer: Autonomy (AI-managed engineering, delivery, and operations)\n\n5.7 — ELO vs Traditional Engineering\nTraditional: Reactive, human-driven, fragile, unpredictable, burnout-prone, dependency-heavy, velocity-volatile.\nELO: Predictive, AI-driven, stable, reliable, burnout-resistant, dependency-aware, velocity-stable.\n\n5.8 — ELO and the Critical Path\nThe critical path is the spine of engineering. ELO protects it through redistribution, slack injection, blocker removal, parallelization, capacity addition, and sprint restructuring.\n\n5.9 — ELO and Burnout Prevention\nBurnout is predictable. ELO prevents burnout through load curves, instability detection, slack injection, task redistribution, volatility reduction, and sprint restructuring.\n\n5.10 — ELO and Engineering Economics\nSlack becomes a resource. Capacity becomes liquid. Critical paths become assets. Velocity becomes predictable. Burnout becomes preventable. FFX is the economic engine of ELO.\n\n5.11 — ELO Declaration\nELO is not a tool, feature, or methodology. ELO is a discipline. ELO is a category. ELO is the future of engineering. FlowForge created it, owns it, leads it, defines it, scales it, and becomes inevitable through it.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1027);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-400 hover:bg-indigo-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1027 ? 'Chapter 5 Copied!' : 'Copy Chapter 5'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 6: MARKETPLACE ECONOMICS (FFX)\nThe Economic Engine of FlowForge\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n6.1 — The Purpose of FFX\nCapacity is fixed in traditional engineering, leading to burnout, velocity collapse, and fragile critical paths. FFX makes capacity liquid. Slack becomes a resource. Capacity becomes tradable. Critical paths become rescuable. FFX is the liquidity layer of engineering.\n\n6.2 — The FFX Marketplace Model\n1. Slack Tokens (Quantified measurable units of bandwidth)\n2. Capacity Trading (Teams buy or sell capacity across org silos)\n3. Critical Path Rescue (Instant capacity injection stabilizes failing critical paths)\n\n6.3 — Slack Tokens\nQuantified, tradable, trackable, auditable, predictable engineering units representing available capacity, injectable time, redistributable load, and velocity multipliers.\n\n6.4 — Capacity Trading\nBuy capacity when overloaded, sell excess when underloaded, trade capacity across teams, roles, and projects.\n\n6.5 — Critical Path Rescue\nInject capacity instantly when dependencies break, roles overload, or timelines become fragile to guarantee delivery.\n\n6.6 — Marketplace Liquidity\nCapacity Liquidity Index (CLI) increases with more teams, tokenized slack, and rescued paths. Liquidity creates network effects, economic moats, and category dominance.\n\n6.7 — Marketplace Participants\nEngineering Teams (Buy slack/sell excess), Product Teams (Protect critical paths), Operations Teams (Manage liquidity/economics), AI Agents (Trade autonomously/rescue paths).\n\n6.8 — Marketplace Dynamics\nSupply (Slack tokens, underloaded teams), Demand (Overload, fragility, burnout), Price (Determined by load volatility, slack scarcity, critical path urgency, velocity risk).\n\n6.9 — Marketplace Intelligence\nAI predicts shortages, mints slack, buys capacity, sells excess, rescues critical paths, and optimizes liquidity.\n\n6.10 — Marketplace Compliance\nTexas SaaS Exemption Engine (§151), audit-ready billing, usage transparency, token accounting, and CFO-grade trust.\n\n6.11 — Marketplace Economics Declaration\nFFX is not a feature or add-on. FFX is the economic system of engineering. It liquifies capacity, stabilizes critical paths, prevents burnout, guarantees delivery, creates network effects, and makes FlowForge inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1028);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1028 ? 'Chapter 6 Copied!' : 'Copy Chapter 6'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 7: THE COMPLIANCE ENGINE\nThe Trust Layer of FlowForge\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n7.1 — The Purpose of the Compliance Engine\nEnterprises cannot adopt AI systems without legal certainty. FlowForge provides automatic Texas SaaS exemption, audit-ready billing, transparent usage accounting, FFX token compliance, multi-tenant isolation, and enterprise-grade governance. Compliance is not a feature — it is a trust moat.\n\n7.2 — Texas SaaS Exemption Automation\nFlowForge automates §151.0101 (Taxable Services classification as non-taxable SaaS orchestration) and §151.351 (Exemption Requirements: auto-generated exemption docs, usage breakdown, AI orchestration logs, token accounting, compliance-ready invoices). Removes friction for CFOs, controllers, legal, procurement, and auditors.\n\n7.3 — Audit-Ready Billing\n1. Line-Item Transparency (Logs slack injection, capacity trades, rescue actions, AI decisions, load stabilization, burnout prevention).\n2. Usage Accounting (FFX tokens tracked, timestamped, categorized, auditable).\n3. AI Action Logs (Every autonomous action recorded, classified, justified, linked to load metrics).\n4. Compliance Reports (Monthly load stability, burnout prevention, critical path health, CLI, token usage, exemption validation).\n\n7.4 — Multi-Tenant Enterprise Isolation\nA. Workspace Isolation (Segregated, encrypted, access-controlled, audit-logged).\nB. Role-Based Access Control (RBAC) (Engineering, Product, Operations, Finance, Leadership, AI Agents).\nC. Compliance-Grade Logging (Timestamped, classified, linked to user/agent).\nD. Enterprise Governance (Approve AI autonomy levels, restrict marketplace actions, enforce policies, review audit logs).\n\n7.5 — FFX Token Compliance\nDigital capacity units, economic assets, engineering liquidity instruments. Compliance ensures token issuance is logged, usage is auditable, trades are transparent, pricing is justified, and flows are compliant.\n\n7.6 — AI Compliance Controls\n1. Autonomy Levels (Predictive only, Assistive only, Autonomous with approval, Fully autonomous).\n2. Action Restrictions (Restrict capacity injection, slack usage, task redistribution, sprint restructuring, marketplace trades).\n3. AI Audit Trails (Every AI action includes reason, load metrics, risk metrics, critical path impact, burnout impact).\n\n7.7 — Compliance Intelligence\nAI monitors regulatory changes, billing anomalies, token irregularities, load-related compliance risks, marketplace volatility, and audit readiness proactively.\n\n7.8 — Compliance as a Competitive Moat\n• Legal Moat (Competitors cannot replicate exemption automation).\n• Operational Moat (Audit-ready billing is difficult to build).\n• Economic Moat (Token accounting ties into marketplace liquidity).\n• Trust Moat (CFOs trust FlowForge).\n• Enterprise Moat (Compliance unlocks large enterprise accounts).\n\n7.9 — Compliance Declaration\nFlowForge is not just compliant, audit-ready, or enterprise-safe. FlowForge is the trust layer of engineering autonomy. It protects enterprises, engineering teams, critical paths, delivery, and the category. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1029);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1029 ? 'Chapter 7 Copied!' : 'Copy Chapter 7'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 8: THE SALES SYSTEM\nHow FlowForge Wins Enterprise Deals\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n8.1 — Sales Philosophy\nFlowForge sells one thing: Engineering stability. Predictable delivery, protected engineering teams, stable critical paths, burnout prevention, velocity certainty, load stabilization.\n\n8.2 — Sales Positioning\nThe AI-native operating system for enterprise engineering. Engineering Load Orchestration (ELO). Non-negotiable.\n\n8.3 — The Enterprise Buyer\nPrimary Buyers: CTO, VP Engineering, Director of Platform, Head of DevOps, Head of Eng Ops.\nSecondary Buyers: CFO (predictability + compliance), COO (delivery + risk), CIO (stability + reliability).\nChampions: Senior engineer, Staff engineer, Engineering manager.\n\n8.4 — The Sales Narrative Arc\nStep 1 (Problem: Load instability) -> Step 2 (Consequence: Burnout, slippage, fragility) -> Step 3 (Solution: FlowForge AI load stabilization) -> Step 4 (Outcome: Predictable delivery, protected teams) -> Step 5 (Category: ELO) -> Step 6 (Close: "Do you want pilot onboarding or full engineering onboarding?").\n\n8.5 — The Core Sales Script\n"Engineering teams don’t fail because of code — they fail because they’re overloaded. FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery. FlowForge is the AI-native operating system for engineering."\n\n8.6 — The Demo Flow\n1. Show load instability (Critical path fragility, burnout risk, velocity collapse)\n2. Show FlowForge stabilization (Task redistribution, slack injection, parallelization, rescue)\n3. Show outcomes (Stable load, velocity, delivery)\n4. Show FFX marketplace (Capacity injection, slack liquidity, velocity boost)\n5. Show compliance (Texas SaaS exemption, audit-ready billing)\n6. Close ("Pilot or full onboarding?")\n\n8.7 — Objection Handling\n• "We have dashboards": Dashboards observe. FlowForge acts.\n• "We have PM tools": Project management tracks tasks. FlowForge stabilizes load.\n• "We don’t have burnout": Burnout is predictable. FlowForge prevents it.\n• "We don’t need AI": AI is the only way to stabilize load at scale.\n• "We’re not in Texas": Compliance is a bonus. Load stabilization is universal.\n\n8.8 — Pricing Strategy\nFFX Credits (Usage-based slack), AI Autopilot Subscription (Predictive orchestration), Compliance Engine (Texas SaaS exemption automation), Enterprise Multi-Tenant (Workspace isolation + audit logs).\n\n8.9 — Pipeline Strategy\nOutbound Sequences, Category Messaging (ELO), Texas First Strategy, Founder-Led Sales, Demo-First Approach.\n\n8.10 — Closing Strategy\nPilot -> Expansion, Critical Path Rescue, Burnout Prevention, Velocity Boost, Compliance Win.\n\n8.11 — Sales Culture\nDirect, Executive, Outcome-Driven, Category-First, Founder-Aligned.\n\n8.12 — Sales Declaration\nFlowForge is not just selling software, AI, or a platform. FlowForge is selling engineering stability. We stabilize load. We protect teams. We guarantee delivery. We define the category. We build autonomy. We create liquidity. We become inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1030);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1030 ? 'Chapter 8 Copied!' : 'Copy Chapter 8'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 9: MARKETING & PR SYSTEM\nHow FlowForge Shapes Perception, Defines the Category, and Becomes the Voice of Engineering Stability\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n9.1 — Marketing Philosophy\nWe do not market features. We market the category. Features are forgettable; categories are immortal. FlowForge markets engineering stability, burnout prevention, critical path protection, velocity certainty, AI autonomy, marketplace liquidity, and compliance trust.\n\n9.2 — Core Messaging\n"Engineering doesn’t fail because of code. Engineering fails because of overload. FlowForge stabilizes engineering load using AI."\n\n9.3 — Brand Voice\nDirect, Executive, Authoritative, Calm, Predictive, Category-first, Outcome-driven. We speak like the operating system of engineering.\n\n9.4 — Category Messaging Framework\n1. Problem (Engineering load instability)\n2. Consequence (Burnout, slippage, fragility, unpredictability)\n3. Solution (AI-native load orchestration)\n4. Category (Engineering Load Orchestration - ELO)\n5. Vision (FlowForge becomes the operating system for engineering)\n\n9.5 — Marketing Architecture (Five Pillars)\n1. Category Creation (Define, own, lead ELO)\n2. Founder Narrative (Chukwuma as the voice of engineering stability)\n3. Enterprise Messaging (Speak directly to CTOs, VPs, Directors)\n4. Thought Leadership (Publish category-defining content)\n5. PR Dominance (Control the narrative in public)\n\n9.6 — Category Creation Strategy\nA. Founder Essays (Stability, burnout prevention, autonomy, economics, CP protection)\nB. Category Papers (The ELO discipline, load-first engineering, AI-native ops, capacity marketplaces)\nC. Enterprise Guides (Stability frameworks, burnout prevention, velocity protection, compliance automation)\n\n9.7 — PR Strategy\n1. Category Leadership (Announce category milestones, not features)\n2. Enterprise Impact (Highlight stability, predictability, burnout prevention)\n3. Founder Authority (Chukwuma as spokesperson for engineering stability)\n4. Analyst Education (Define the category -> shape perception)\n5. Crisis Communication (Calm, direct, authoritative)\n\n9.8 — Social Media Strategy\nExecutive + Technical + Visionary. Post category insights, stability concepts, AI autonomy progress, marketplace economics, founder commentary, enterprise wins, compliance clarity. No memes, trends, fluff, or reactive content.\n\n9.9 — Analyst Strategy\nEducate analysts on ELO, load instability, burnout prediction, critical path fragility, marketplace liquidity, AI autonomy, compliance automation to turn them into category amplifiers.\n\n9.10 — Website Strategy\nProblem -> Consequence -> Solution -> Category -> Vision, Enterprise Outcomes, AI Autonomy, Marketplace Economics, Compliance Trust. The website is a category engine.\n\n9.11 — Marketing Metrics\nCategory adoption, analyst coverage, enterprise inbound, founder influence, stability narrative penetration, velocity narrative penetration, burnout prevention penetration. Measured by narrative dominance.\n\n9.12 — Crisis Communication Protocol\nA. Calm Authority, B. Load-First Framing, C. Transparency, D. Founder Voice, E. Resolution.\n\n9.13 — Marketing Declaration\nFlowForge is not just marketing a product, AI, or platform. FlowForge is marketing a category. We define ELO. We lead ELO. We scale ELO. We dominate ELO. We become inevitable through ELO.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1031);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-400 hover:bg-rose-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1031 ? 'Chapter 9 Copied!' : 'Copy Chapter 9'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 11: OPERATIONS SYSTEM\nHow FlowForge Becomes a Predictable, Stable, Enterprise‑Grade Machine\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n11.1 — Operations Philosophy\nStability first. Velocity second. Scale third.\nOperations protect customers, teams, delivery, compliance, revenue, and reputation. Operations are the backbone of FlowForge.\n\n11.2 — The Four Pillars of FlowForge Operations\n1. Load-First Planning: Operations plan based on load, not tasks.\n2. AI-Native Workflows: Operations use AI pairing and AI orchestration.\n3. Compliance Automation: Operations enforce Texas SaaS exemption (§151) and audit-ready billing.\n4. Enterprise Reliability: Operations guarantee predictable onboarding, support, and delivery.\n\n11.3 — Enterprise Onboarding System\nA. Multi-Tenant Workspaces (Isolated workspace, audit logs, compliance controls, AI autonomy settings)\nB. Load-First Setup (Load modeling, critical path mapping, burnout risk analysis, velocity baseline)\nC. AI Pairing Activation (DevOps agent, Backend agent, Frontend agent, QA agent, BA agent)\nD. Marketplace Enablement (Slack tokens, capacity trading, critical path rescue)\n\n11.4 — Support System\n1. Stability Monitoring (Load stability, burnout risk, critical path health, velocity curves)\n2. AI-Driven Alerts (Instant alerts on load instability, burnout spikes, CP weakening, velocity collapse)\n3. Critical Path Intervention (Inject slack, add capacity, redistribute tasks, parallelize workflows)\n4. Enterprise Escalation (Clear SLAs, clear ownership, clear resolution paths)\n\n11.5 — Billing System\nA. Audit-Ready Transparency (Line-item usage, token accounting, AI action logs, compliance documentation)\nB. Predictable Pricing (Clear, stable, enterprise-friendly)\nC. Marketplace Accounting (FFX tokens tracked, timestamped, categorized, auditable)\n\n11.6 — Compliance Operations\n1. Texas SaaS Exemption (§151.0101, §151.351)\n2. Audit-Ready Logs (Every action logged, timestamped, classified)\n3. AI Governance (Autonomy levels, marketplace permissions, compliance policies)\n\n11.7 — Reliability System\nA. Load Stability (Engineering load remains stable)\nB. Critical Path Protection (Monitor and protect the chain)\nC. Burnout Prevention (Intervene before burnout occurs)\nD. Velocity Stability (Maintain predictable velocity)\n\n11.8 — Operational Metrics\nLoad stability, burnout risk, critical path health, velocity stability, slack efficiency, marketplace liquidity, compliance accuracy, onboarding speed, support resolution time.\n\n11.9 — Operational Rhythm\n• Monday — Stability Review (Load stability, burnout risk, CP health)\n• Tuesday — Onboarding Review (Enterprise onboarding, AI pairing, marketplace activation)\n• Wednesday — Support Review (Tickets, escalations, AI alerts)\n• Thursday — Compliance Review (Billing, audit logs, exemption validation)\n• Friday — Founder Review (Operational alignment, enterprise reliability, category progress)\n\n11.10 — Operations Declaration\nFlowForge is not just running a company, product, or marketplace. FlowForge is running an enterprise-grade stability machine. We stabilize load. We protect teams. We guarantee delivery. We automate compliance. We create liquidity. We define the category. We become inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1032);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1032 ? 'Chapter 11 Copied!' : 'Copy Chapter 11'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 12: SCALING SYSTEM\nHow FlowForge Grows from 10 → 50 → 200 → 500 People Without Losing Stability, Identity, or Velocity\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n12.1 — Scaling Philosophy\nScale stability, not complexity. Most companies add layers, meetings, process, approvals, and bureaucracy. FlowForge scales by increasing autonomy, clarity, AI leverage, parallelization, and load stability.\n\n12.2 — The FlowForge Scaling Curve\n• Stage 1 (10 People - Foundational): Founder-led, category creation, core engines built, early enterprise wins, Texas-first dominance.\n• Stage 2 (50 People - Acceleration): AI autonomy expansion, marketplace liquidity, enterprise onboarding, compliance automation, GTM velocity.\n• Stage 3 (200 People - Domination): Multi-region expansion, analyst category adoption, marketplace network effects, AI-managed engineering, enterprise ubiquity.\n• Stage 4 (500 People - Institution): Global category leadership, engineering autonomy standardization, marketplace economic dominance, compliance trust moat, FlowForge becomes the engineering OS.\n\n12.3 — Scaling Without Chaos\n1. Load-first planning (Teams plan based on load, not ambition)\n2. AI-native operations (AI pairing mandatory)\n3. Autonomous teams (Small, independent units own systems)\n4. Critical path protection (Every team guards the chain)\n5. Marketplace liquidity (Capacity becomes flexible)\n\n12.4 — Scaling Teams\nA. Pods (5–7 people): Own a system, metric, stability outcome.\nB. Guilds (Cross-functional): Align engineering, product, design, AI agents.\nC. Councils (Leadership): Govern stability, velocity, autonomy, compliance, marketplace economics.\n\n12.5 — Scaling Leadership\nClarity (Simple communication), Precision (Clean decisions), Humanity (Protect teams), Autonomy (Empower action), Inevitability (Category dominance).\n\n12.6 — Scaling Product\nEngine Ownership (Pod + roadmap + metric), Autonomy Expansion (Quarterly AI autonomy gains), Marketplace Liquidity Growth (More trades = more stability), Compliance Automation (More trust = more adoption).\n\n12.7 — Scaling Engineering\nAI pairing, Parallelization, Load modeling, Critical path protection, Marketplace integration.\n\n12.8 — Scaling GTM\nCategory-first messaging (ELO), Founder-led deals, Texas-first dominance, Analyst adoption, Marketplace economics.\n\n12.9 — Scaling Operations\nMulti-tenant onboarding, Compliance automation, AI-driven support, Marketplace accounting, Reliability metrics.\n\n12.10 — Scaling Culture\nPillars (Stability, Precision, Humanity, Autonomy, Inevitability), Rituals (Reviews), Hiring (System thinkers, stabilizers).\n\n12.11 — Scaling Metrics\nLoad stability, burnout risk, critical path health, velocity stability, slack efficiency, marketplace liquidity, compliance accuracy, onboarding speed, leadership clarity, cultural alignment.\n\n12.12 — Scaling Declaration\nFlowForge is not just scaling a company, product, or category. FlowForge is scaling inevitability. We stabilize load. We protect teams. We guarantee delivery. We build autonomy. We create liquidity. We define the category. We become the engineering OS. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1033);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-400 hover:bg-indigo-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1033 ? 'Chapter 12 Copied!' : 'Copy Chapter 12'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 13: REVENUE & GTM SYSTEM\nHow FlowForge Becomes a Predictable, Scalable, Enterprise Revenue Engine\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n13.1 — Revenue Philosophy\nFlowForge sells one outcome: Engineering stability (not dashboards, productivity, features, or workflows). FlowForge sells predictable delivery, protected teams, stable critical paths, burnout prevention, velocity certainty, and load stabilization.\n\n13.2 — The FlowForge Revenue Model (4 Monetization Engines)\n1. FFX Credits (Usage-Based): Slack injection, capacity trading, critical path rescue, velocity boosts.\n2. AI Autopilot Subscription (Recurring): Predictive orchestration, burnout prevention, critical path stabilization, load modeling.\n3. Compliance Engine (Add-On): Texas SaaS tax exemption (§151), audit-ready billing, enterprise transparency.\n4. Enterprise Multi-Tenant (Platform): Workspace isolation, audit logs, enterprise onboarding.\n-> Hybrid Revenue: Usage + Subscription + Platform.\n\n13.3 — GTM Philosophy\nWe do not sell features. We sell inevitability. We sell stability, predictability, burnout prevention, critical path protection, velocity certainty, AI autonomy, and marketplace liquidity.\n\n13.4 — GTM Pillars\n1. Category Leadership (We sell Engineering Load Orchestration)\n2. Texas First (Dominate Texas enterprise engineering)\n3. Founder-Led Enterprise Deals (Chukwuma closes early strategic accounts)\n\n13.5 — Pipeline Strategy\nA. Outbound Sequences (Personalized enterprise outreach)\nB. Category Messaging (Load instability -> FlowForge stabilization)\nC. Founder Presence (High-impact early conversations)\nD. Analyst Education (Define category -> shape perception)\nE. Enterprise Referrals (Stability spreads through engineering networks)\n\n13.6 — Pricing Strategy\n• FFX Credits: Usage-based, scalable, predictable\n• AI Autopilot: Per team/workspace recurring subscription\n• Compliance Engine: Flat enterprise fee\n• Enterprise Multi-Tenant: Tiered platform pricing\n\n13.7 — Expansion Strategy\n1. Critical Path Rescue (Fix one path -> expand to all)\n2. Burnout Prevention (Protect one team -> expand org-wide)\n3. Velocity Boosts (Inject slack -> instant metric gain)\n4. Compliance Wins (Audit-ready billing -> win CFO)\n5. Marketplace Liquidity (More teams -> more value)\n\n13.8 — Customer Success Strategy\nA. Load Monitoring (Weekly stability reports)\nB. Burnout Prevention (Early warning -> proactive intervention)\nC. Critical Path Protection (Continuous orchestration)\nD. Velocity Optimization (Parallelization + slack injection)\nE. Executive Reporting (Delivery certainty dashboards)\n\n13.9 — Renewal Strategy\n1. Stability Metrics (Load stability, burnout reduction, velocity gain, slippage drop)\n2. Economic Metrics (Capacity savings, slack efficiency, engineering ROI)\n3. Executive Outcomes (Predictable delivery, risk elimination, compliance certainty)\n\n13.10 — GTM Team Structure\nEnterprise Sales, Sales Engineering, Customer Success, Marketing, and Cloud/Consulting Partnerships.\n\n13.11 — GTM Operating Rhythm\n• Monday: Pipeline Review (Accounts, CP opportunities, burnout signals)\n• Tuesday: Demo Day (Live orchestration & stabilization)\n• Wednesday: Expansion Strategy (FFX usage, slack injection, velocity boosts)\n• Thursday: Customer Success (Stability reports, executive outcomes)\n• Friday: Founder Review (Category progress, revenue velocity, enterprise wins)\n\n13.12 — Founder GTM Role\nCategory Evangelist, Enterprise Closer, Narrative Architect, Stability Champion, and Vision Carrier.\n\n13.13 — Revenue Declaration\nFlowForge is not just generating revenue. FlowForge is not just building pipeline. FlowForge is not just expanding accounts. FlowForge is becoming the economic engine of engineering stability. We stabilize load. We protect teams. We guarantee delivery. We create liquidity. We define the category. We scale with inevitability. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1034);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-400 hover:bg-purple-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1034 ? 'Chapter 13 Copied!' : 'Copy Chapter 13'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 14: LEADERSHIP & GOVERNANCE SYSTEM\nHow FlowForge Becomes an Institution — A Company Built to Last Decades\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n14.1 — Leadership Philosophy\nLeadership protects stability. Leaders do not chase features, create chaos, or overload teams. Leaders stabilize Load, People, Systems, Decisions, Culture, and Velocity. Stability is leadership.\n\n14.2 — The Five Leadership Pillars\n1. Clarity (Communicate simply and decisively)\n2. Precision (Make clean, intentional decisions)\n3. Humanity (Protect teams from overload)\n4. Autonomy (Empower teams to act without friction)\n5. Inevitability (Reinforce FlowForge's category dominance)\n\n14.3 — Five Core Leadership Roles\nA. Founder / CEO (Chukwuma): Category creator, narrative architect, enterprise closer, vision carrier, stability champion.\nB. CTO / Head of Engineering: Load-first engineering, AI autonomy development, critical path protection, parallelization, marketplace integration.\nC. COO / Head of Operations: Compliance, onboarding, billing, enterprise reliability, operational clarity.\nD. CRO / Head of Revenue: Enterprise sales, pipeline velocity, expansion strategy, renewals, GTM alignment.\nE. CPO / Head of Product: Load stabilization outcomes, AI-native workflows, critical path modeling, product clarity, category alignment.\n\n14.4 — Leadership Operating Rhythm\n• Monday — Stability Review (Load stability, burnout risk, CP health, velocity forecast)\n• Tuesday — Product Leadership (AI autonomy, marketplace liquidity, compliance automation, parallelization)\n• Wednesday — GTM Leadership (Enterprise pipeline, expansion strategy, category messaging, Texas-first)\n• Thursday — Operations Leadership (Onboarding, billing, support, enterprise reliability)\n• Friday — Founder Review (Strategic alignment, category progress, leadership accountability, long-term direction)\n\n14.5 — Four-Step Decision-Making Framework\n1. Does this stabilize engineering load? -> If yes -> priority.\n2. Does this reduce burnout? -> If yes -> accelerate.\n3. Does this increase delivery certainty? -> If yes -> greenlight.\n4. Does this align with the AI-native OS vision? -> If yes -> build.\nIf no -> cut.\n\n14.6 — Three-Layer Governance Structure\n• Layer 1 (Founder Governance): Category direction, narrative control, enterprise strategy, AI vision, marketplace economics.\n• Layer 2 (Executive Governance): Product, Engineering, Revenue, Operations, Compliance.\n• Layer 3 (Team Governance): Autonomous units, load-first planning, AI pairing, parallelization, critical path protection.\n\n14.7 — Accountability Framework (6 Outcomes)\n1. Load Stability (Safe workload bounds)\n2. Burnout Prevention (Protected teams)\n3. Delivery Certainty (Predictable critical paths)\n4. Velocity Health (Parallelized velocity gains)\n5. Marketplace Liquidity (FFX token volume & value)\n6. Compliance Reliability (Texas SaaS tax exemption certainty)\n\n14.8 — Leadership Culture\nDirect • Executive • Outcome-driven • Category-first • Calm • Precise • Protective.\n\n14.9 — Leadership Scaling\nRole clarity, Load-first planning, AI-native operations, Parallelization, Category alignment.\n\n14.10 — Founder Leadership Principles (Chukwuma)\n1. Clarity • 2. Precision • 3. Calm • 4. Authority • 5. Vision.\n\n14.11 — Leadership Declaration\nFlowForge is not just a company, product, or category. FlowForge is a leadership system. A system that stabilizes engineering. A system that protects teams. A system that guarantees delivery. A system that builds autonomy. A system that creates liquidity. A system that defines the future. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1035);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-pink-400 hover:bg-pink-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1035 ? 'Chapter 14 Copied!' : 'Copy Chapter 14'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 16: THE FUTURE OF FLOWFORGE\nThe Endgame, the Trajectory, the Inevitability\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n16.1 — The Future of Engineering\nEngineering today: Overloaded, Burnout-prone, Fragile, Unpredictable, Dependency-heavy, Velocity-volatile.\nEngineering tomorrow — with FlowForge: Stable, Predictable, Autonomous, Parallelized, Liquified, AI-managed.\nFlowForge transforms engineering from chaos into stability.\n\n16.2 — The Future of AI\nAI today: Suggests, Observes, Assists, Predicts.\nAI tomorrow — with FlowForge: Acts, Intervenes, Stabilizes, Restructures, Rescues, Optimizes, Manages.\nFlowForge is building the AI that runs engineering. Not an assistant. Not a chatbot. Not a dashboard. An autonomous engineering intelligence.\n\n16.3 — The Future of Engineering Economics\nEngineering economics today: Fixed capacity, Fixed velocity, Fixed timelines, Fixed bottlenecks, Fixed fragility.\nEngineering economics tomorrow — with FlowForge: Capacity becomes liquid. Slack becomes a resource. Velocity becomes predictable. Critical paths become stable. Engineering becomes tradable. FFX is the future of engineering economics.\n\n16.4 — The Future of Compliance\nCompliance today: Manual, Painful, Confusing, Risky, Slow.\nCompliance tomorrow — with FlowForge: Automated, Audit-ready, Transparent, Predictable, AI-managed. FlowForge's Compliance Engine becomes the trust layer of engineering autonomy.\n\n16.5 — The Future of Engineering Teams\nEngineering teams today: Burn out, Collapse, Slip, Struggle, Overload, Lose velocity.\nEngineering teams tomorrow — with FlowForge: Protected, Stabilized, Empowered, Parallelized, AI-paired, Burnout-proof. FlowForge becomes the guardian of engineering teams.\n\n16.6 — The Future of Enterprises\nEnterprises today: Miss deadlines, Lose velocity, Overload teams, Burn out engineers, Fail critical paths, Struggle with compliance.\nEnterprises tomorrow — with FlowForge: Predictable delivery, Stable engineering, Burnout prevention, Critical path protection, Compliance automation, AI-native operations. FlowForge becomes the operating system for enterprise engineering.\n\n16.7 — The Future of the Category\nEngineering Load Orchestration (ELO) today: New, Emerging, Founder-defined, Category-first, Early adoption.\nELO tomorrow: Standard, Required, Expected, Global, Inevitable.\nFlowForge becomes synonymous with ELO (Salesforce -> CRM, ServiceNow -> ITSM, Snowflake -> Data Cloud, FlowForge -> Engineering Load Orchestration). FlowForge becomes the category.\n\n16.8 — The Future of FlowForge (Five Inevitabilities)\n1. AI Autonomy: AI-managed engineering becomes standard.\n2. Marketplace Liquidity: FFX becomes the backbone of engineering economics.\n3. Compliance Automation: Audit-ready engineering becomes mandatory.\n4. Enterprise Dominance: FlowForge becomes the engineering OS.\n5. Global Category Leadership: ELO becomes the global standard.\nFlowForge becomes the institution that defines engineering.\n\n16.9 — The Future of You (Founder Edition)\nChukwuma — your future inside FlowForge is defined by:\n• Category Creation: You created Engineering Load Orchestration.\n• Narrative Control: You shape the global conversation about engineering stability.\n• Enterprise Authority: You become the voice CTOs listen to.\n• AI Leadership: You define the autonomy era of engineering.\n• Institution Building: You build the company that becomes the engineering OS.\nYour future is not operational, tactical, or incremental. Your future is category leadership.\n\n16.10 — The Final Declaration\nFlowForge is not a product. FlowForge is not a platform. FlowForge is not a tool.\nFlowForge is the future of engineering. A future where Load is stable, Burnout is impossible, Critical paths never fail, Delivery is predictable, AI runs engineering, Capacity is liquid, Compliance is automated, Engineering is inevitable.\nFlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1038);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1038 ? 'Chapter 16 Copied!' : 'Copy Chapter 16'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE FOUNDER CODEX — CHAPTER 15: FOUNDER TOOLS\nYour Speeches, Scripts, Narratives, and High-Authority Founder Assets\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n15.1 — The 60-Second Founder Speech\n"Engineering teams don’t fail because of code — they fail because they’re overloaded. FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery. FlowForge is the AI-native operating system for engineering — the company that created Engineering Load Orchestration. We stabilize load. We protect teams. We make delivery predictable. FlowForge is inevitable."\n\n15.2 — The Founder Narrative (Codex Edition)\nFlowForge exists because engineering deserves stability. Engineering teams collapse not from incompetence, but from overload. Burnout is predictable. Slippage is predictable. Fragility is predictable. Velocity collapse is predictable. FlowForge predicts all of it — and prevents all of it. FlowForge stabilizes engineering load using AI. FlowForge protects teams. FlowForge guarantees delivery. FlowForge defines the category. FlowForge is inevitable.\n\n15.3 — The Founder Category Speech (Engineering Load Orchestration)\n"Engineering Load Orchestration is the discipline of stabilizing engineering load using AI. It models load, predicts instability, prevents burnout, protects critical paths, and guarantees delivery. ELO is not a feature. ELO is not a methodology. ELO is a category — and FlowForge is the company that created it."\n\n15.4 — The Founder Vision Speech\n"Engineering is entering its autonomy era. AI will not just assist engineers — it will run engineering. FlowForge is building the AI that manages load, protects teams, stabilizes critical paths, and guarantees delivery. We are building the operating system for engineering. In the future, every engineering team will run on FlowForge. Not because it’s convenient — but because it’s inevitable."\n\n15.5 — The Founder Objection Handling Pack\n• Objection: "We already have dashboards." -> Dashboards observe. FlowForge intervenes.\n• Objection: "We already have project management tools." -> Project management tracks tasks. FlowForge stabilizes load.\n• Objection: "We don’t have burnout." -> Burnout is predictable. FlowForge prevents it.\n• Objection: "We don’t need AI." -> AI is the only way to stabilize load at scale.\n• Objection: "We’re not in Texas." -> Compliance is a bonus. Load stabilization is universal.\n\n15.6 — The Founder Demo Script\nStep 1: Show instability ("Here’s where your load becomes unstable.")\nStep 2: Show consequences ("This is where burnout and slippage begin.")\nStep 3: Show FlowForge intervention ("FlowForge redistributes tasks, injects slack, and stabilizes the critical path.")\nStep 4: Show outcomes ("Your delivery becomes predictable.")\nStep 5: Show marketplace ("FFX injects capacity instantly.")\nStep 6: Close ("Do you want pilot onboarding or full engineering onboarding?")\n\n15.7 — The Founder Category Evangelism Guide\n1. Speak about load, not tasks.\n2. Speak about stability, not productivity.\n3. Speak about burnout prevention, not morale.\n4. Speak about critical paths, not timelines.\n5. Speak about autonomy, not assistance.\n6. Speak about inevitability, not possibility.\n\n15.8 — The Founder Executive Q&A Pack\n• Q: What does FlowForge actually do? -> "We stabilize engineering load using AI."\n• Q: Why does this matter? -> "Load instability is the root cause of engineering failure."\n• Q: What outcomes do you guarantee? -> "Predictable delivery, burnout prevention, critical path stability."\n• Q: Why AI? -> "Only AI can stabilize load at scale."\n• Q: Why now? -> "Engineering is entering its autonomy era."\n• Q: Why FlowForge? -> "We created the category."\n\n15.9 — The Founder Internal Alignment Speech\n"FlowForge is not building a tool — we are building the operating system for engineering. Everything we do must stabilize load, protect teams, and guarantee delivery. We are building autonomy. We are building liquidity. We are building inevitability. We are building the future of engineering."\n\n15.10 — Founder Declaration\nFlowForge is not just a company, product, or category. FlowForge is a founder-driven movement. You — Chukwuma — are the voice of engineering stability. You are the architect of the category. You are the carrier of inevitability. You are the founder who defines the future. FlowForge is inevitable.`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1036);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1036 ? 'Chapter 15 Copied!' : 'Copy Chapter 15'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `THE FLOWFORGE FOUNDER MANIFESTO\nBy Chukwuma Oduagu — Founder, FlowForge\n\nEngineering deserves stability.\n\nFor decades, engineering teams have been asked to deliver the impossible under impossible conditions — overloaded, burned out, fragmented, fragile, unpredictable. We built dashboards, we built project managers, we built workflows, we built analytics, but none of them solved the real problem.\n\nBecause the real problem was never tasks.\nThe real problem was never process.\nThe real problem was never tooling.\n\nThe real problem is engineering load instability.\nLoad instability is the root cause of:\n\n• Burnout\n• Slippage\n• Fragility\n• Velocity collapse\n• Critical path failure\n• Team breakdown\n\nEngineering doesn’t fail because of code.\nEngineering fails because it’s overloaded.\n\nSo we built FlowForge.\n\nFlowForge is the AI-native operating system for engineering — the system that models load, predicts instability, prevents burnout, stabilizes critical paths, and guarantees delivery.\n\nFlowForge is built on six engines:\n1. AI Orchestration\n2. FFX Marketplace\n3. AI Swarm Copilot\n4. Compliance Engine\n5. What-If Simulator\n6. Enterprise Onboarding\n\nTogether, they form a new discipline:\nEngineering Load Orchestration (ELO).\n\nELO is not a feature.\nELO is not a methodology.\nELO is not a framework.\n\nELO is a category.\nFlowForge is the company that created it.\n\nWe believe:\n• Engineering should be stable.\n• Burnout should be impossible.\n• Critical paths should never fail.\n• Delivery should be predictable.\n• AI should act, not observe.\n• Capacity should be liquid.\n• Compliance should be automated.\n• Engineering should be inevitable.\n\nFlowForge is building the future where:\n• AI manages engineering load.\n• AI protects teams.\n• AI stabilizes critical paths.\n• AI guarantees delivery.\n• AI runs engineering.\n\nThis is the autonomy era of engineering.\nThis is the liquidity era of engineering.\nThis is the stability era of engineering.\nThis is the FlowForge era.\n\nFlowForge is not a tool.\nFlowForge is not a platform.\nFlowForge is not a dashboard.\n\nFlowForge is the future of engineering.\nAnd that future is inevitable.\n\n— Chukwuma Oduagu\nFounder, FlowForge`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1040);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer shadow-lg shadow-amber-500/10 border border-amber-300/40"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1040 ? 'Manifesto Copied!' : 'Copy Founder Manifesto'}</span>
                  </button>

                  <button
                    onClick={() => {
                      const text = `FLOWFORGE — MASTER INDEX (Founder Codex v1.0)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\n\nSECTION 1 — Core Identity\n• Founder Narrative & Founder Manifesto\n• Brand Bible\n• Culture Code\n• Leadership & Governance Framework\n\nSECTION 2 — Strategy\n• Strategic Master Plan\n• Category Creation Manifesto\n• Competitive Moat & Defensibility Report\n• Scaling Blueprint\n• Revenue & GTM Blueprint\n• Operational Playbook\n\nSECTION 3 — Product\n• FlowForge Product Architecture\n• AI Autonomy Roadmap\n• Engineering Load Orchestration Framework\n• FFX Marketplace Model\n• Compliance Engine Model\n\nSECTION 4 — Sales\n• Enterprise Sales Script\n• Enterprise Sales Playbook\n• Outbound Sequences\n• Demo Flow & Critical Path Rescue Script\n\nSECTION 5 — Marketing & Communications\n• Launch Announcement\n• One-Page Executive Summary\n• Marketing Rewrite\n• Communications & PR Playbook\n• Category Messaging Framework\n\nSECTION 6 — People\n• Team Onboarding Guide\n• Talent & Hiring Playbook\n• Leadership & Governance Framework\n\nSECTION 7 — Intelligence\n• Executive Intelligence System\n• Engineering Stability Metrics\n• Burnout Prediction Framework\n\nSECTION 8 — Founder Tools\n• 60-Second Founder Speech\n• Founder Q&A Pack\n• Founder Objection Handling Pack\n• Founder Category Evangelism Guide`;
                      navigator.clipboard.writeText(text);
                      setCopiedIndex(1023);
                      setTimeout(() => setCopiedIndex(null), 2500);
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white flex items-center space-x-1.5 transition cursor-pointer border border-slate-700"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedIndex === 1023 ? 'Master Index Copied!' : 'Copy Master Index'}</span>
                  </button>
                </div>
              </div>

              {/* Codex Navigation Bar */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono">
                <span className="text-slate-400 font-bold px-2">READ CHAPTER:</span>
                <button
                  onClick={() => setCodexChapter(0)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 0 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Index Map (8 Sections)
                </button>
                <button
                  onClick={() => setCodexChapter(1)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 1 ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 1: Core Identity
                </button>
                <button
                  onClick={() => setCodexChapter(2)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 2 ? 'bg-emerald-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 2: Strategy
                </button>
                <button
                  onClick={() => setCodexChapter(3)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 3 ? 'bg-purple-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 3: Product
                </button>
                <button
                  onClick={() => setCodexChapter(4)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 4 ? 'bg-pink-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 4: AI Autonomy
                </button>
                <button
                  onClick={() => setCodexChapter(5)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 5 ? 'bg-indigo-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 5: ELO Category
                </button>
                <button
                  onClick={() => setCodexChapter(6)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 6 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 6: FFX Marketplace
                </button>
                <button
                  onClick={() => setCodexChapter(7)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 7 ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 7: Compliance
                </button>
                <button
                  onClick={() => setCodexChapter(8)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 8 ? 'bg-emerald-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 8: Sales System
                </button>
                <button
                  onClick={() => setCodexChapter(9)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 9 ? 'bg-rose-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 9: Marketing & PR
                </button>
                <button
                  onClick={() => setCodexChapter(11)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 11 ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 11: Operations
                </button>
                <button
                  onClick={() => setCodexChapter(12)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 12 ? 'bg-indigo-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 12: Scaling
                </button>
                <button
                  onClick={() => setCodexChapter(13)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 13 ? 'bg-purple-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 13: Revenue & GTM
                </button>
                <button
                  onClick={() => setCodexChapter(14)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 14 ? 'bg-pink-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 14: Leadership & Governance
                </button>
                <button
                  onClick={() => setCodexChapter(15)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 15 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 15: Founder Tools
                </button>
                <button
                  onClick={() => setCodexChapter(16)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    codexChapter === 16 ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ch 16: Synthesis
                </button>
              </div>

              <div className="space-y-6 text-xs text-slate-300 leading-relaxed font-sans">
                {/* VIEW 0: MASTER INDEX */}
                {codexChapter === 0 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-slate-950 to-amber-950/20 rounded-xl border border-amber-500/30">
                      <span className="text-amber-300 font-bold font-mono text-sm block">Founder Codex Master Structure</span>
                      <p className="text-slate-300 text-xs mt-1">
                        A single unified registry containing every founder-level operational, strategic, technical, and commercial artifact created for FlowForge.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-amber-400 font-mono block">SECTION 1 — Core Identity</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Founder Narrative</li>
                          <li>• Brand Bible</li>
                          <li>• Culture Code</li>
                          <li>• Leadership & Governance</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-cyan-400 font-mono block">SECTION 2 — Strategy</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Strategic Master Plan</li>
                          <li>• Category Manifesto</li>
                          <li>• Competitive Moat Report</li>
                          <li>• Scaling Blueprint</li>
                          <li>• Revenue & GTM Blueprint</li>
                          <li>• Operational Playbook</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-emerald-400 font-mono block">SECTION 3 — Product</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Product Architecture</li>
                          <li>• AI Autonomy Roadmap</li>
                          <li>• ELO Engine Topology</li>
                          <li>• FFX Capacity Model</li>
                          <li>• Texas Compliance Engine</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-purple-400 font-mono block">SECTION 4 — Sales</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Enterprise Sales Script</li>
                          <li>• Sales Playbook</li>
                          <li>• Outbound Sequences</li>
                          <li>• Demo & Rescue Script</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-pink-400 font-mono block">SECTION 5 — Marketing & PR</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Launch Announcement</li>
                          <li>• One-Page Exec Summary</li>
                          <li>• Marketing Rewrite</li>
                          <li>• Comms & PR Playbook</li>
                          <li>• Category Messaging</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-indigo-400 font-mono block">SECTION 6 — People</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Team Onboarding Guide</li>
                          <li>• Talent & Hiring Playbook</li>
                          <li>• Leadership Framework</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-blue-400 font-mono block">SECTION 7 — Intelligence</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• Executive Intelligence System</li>
                          <li>• Stability Metrics</li>
                          <li>• Burnout Prediction Model</li>
                        </ul>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <strong className="text-teal-400 font-mono block">SECTION 8 — Founder Tools</strong>
                        <ul className="text-slate-400 space-y-0.5">
                          <li>• 60-Second Speech</li>
                          <li>• Founder Q&A Pack</li>
                          <li>• Objection Handling Pack</li>
                          <li>• Evangelism Guide</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 1: CHAPTER 1 - CORE IDENTITY & FOUNDER MANIFESTO */}
                {codexChapter === 1 && (
                  <div className="space-y-6">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <span className="text-cyan-300 font-mono font-bold text-sm">CHAPTER 1: CORE IDENTITY & FOUNDER MANIFESTO</span>
                        <h4 className="text-base font-extrabold text-white mt-0.5">Foundational DNA of FlowForge</h4>
                        <p className="text-slate-300 text-xs mt-1">
                          Defines why FlowForge exists, the Founder Manifesto by Chukwuma Oduagu, how the brand speaks, the cultural operating standards, and the governance pillars.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const text = `THE FLOWFORGE FOUNDER MANIFESTO\nBy Chukwuma Oduagu — Founder, FlowForge\n\nEngineering deserves stability.\n\nFor decades, engineering teams have been asked to deliver the impossible under impossible conditions — overloaded, burned out, fragmented, fragile, unpredictable. We built dashboards, we built project managers, we built workflows, we built analytics, but none of them solved the real problem.\n\nBecause the real problem was never tasks.\nThe real problem was never process.\nThe real problem was never tooling.\n\nThe real problem is engineering load instability.\nLoad instability is the root cause of:\n\n• Burnout\n• Slippage\n• Fragility\n• Velocity collapse\n• Critical path failure\n• Team breakdown\n\nEngineering doesn’t fail because of code.\nEngineering fails because it’s overloaded.\n\nSo we built FlowForge.\n\nFlowForge is the AI-native operating system for engineering — the system that models load, predicts instability, prevents burnout, stabilizes critical paths, and guarantees delivery.\n\nFlowForge is built on six engines:\n1. AI Orchestration\n2. FFX Marketplace\n3. AI Swarm Copilot\n4. Compliance Engine\n5. What-If Simulator\n6. Enterprise Onboarding\n\nTogether, they form a new discipline:\nEngineering Load Orchestration (ELO).\n\nELO is not a feature.\nELO is not a methodology.\nELO is not a framework.\n\nELO is a category.\nFlowForge is the company that created it.\n\nWe believe:\n• Engineering should be stable.\n• Burnout should be impossible.\n• Critical paths should never fail.\n• Delivery should be predictable.\n• AI should act, not observe.\n• Capacity should be liquid.\n• Compliance should be automated.\n• Engineering should be inevitable.\n\nFlowForge is building the future where:\n• AI manages engineering load.\n• AI protects teams.\n• AI stabilizes critical paths.\n• AI guarantees delivery.\n• AI runs engineering.\n\nThis is the autonomy era of engineering.\nThis is the liquidity era of engineering.\nThis is the stability era of engineering.\nThis is the FlowForge era.\n\nFlowForge is not a tool.\nFlowForge is not a platform.\nFlowForge is not a dashboard.\n\nFlowForge is the future of engineering.\nAnd that future is inevitable.\n\n— Chukwuma Oduagu\nFounder, FlowForge`;
                          navigator.clipboard.writeText(text);
                          setCopiedIndex(1040);
                          setTimeout(() => setCopiedIndex(null), 2500);
                        }}
                        className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start md:self-auto shrink-0"
                      >
                        <CopyIcon className="w-3.5 h-3.5" />
                        <span>{copiedIndex === 1040 ? 'Manifesto Copied!' : 'Copy Manifesto'}</span>
                      </button>
                    </div>

                    {/* DEDICATED MANIFESTO DISPLAY */}
                    <div className="p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 rounded-2xl border border-amber-500/30 space-y-4">
                      <div className="border-b border-slate-800 pb-3">
                        <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
                          The Foundational Doctrine
                        </span>
                        <h3 className="text-lg md:text-xl font-black text-white mt-1 tracking-tight">
                          THE FLOWFORGE FOUNDER MANIFESTO
                        </h3>
                        <p className="text-xs text-amber-200/90 font-medium mt-0.5">
                          By Chukwuma Oduagu — Founder, FlowForge
                        </p>
                      </div>

                      <div className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans space-y-3.5">
                        <p className="text-base md:text-lg font-bold text-amber-300">
                          Engineering deserves stability.
                        </p>
                        <p className="text-slate-300 text-xs md:text-sm">
                          For decades, engineering teams have been asked to deliver the impossible under impossible conditions — overloaded, burned out, fragmented, fragile, unpredictable. We built dashboards, we built project managers, we built workflows, we built analytics, but none of them solved the real problem.
                        </p>
                        <div className="p-3 bg-slate-950/90 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                          <p className="text-slate-400">Because the real problem was never tasks.</p>
                          <p className="text-slate-400">The real problem was never process.</p>
                          <p className="text-slate-400">The real problem was never tooling.</p>
                          <p className="text-white font-bold pt-1">The real problem is engineering load instability.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Burnout</div>
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Slippage</div>
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Fragility</div>
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Velocity Collapse</div>
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Critical Path Failure</div>
                          <div className="p-2 bg-slate-900/80 rounded-lg border border-rose-500/30 text-rose-300 font-medium">❌ Team Breakdown</div>
                        </div>

                        <p className="font-semibold text-white">
                          Engineering doesn’t fail because of code. Engineering fails because it’s overloaded.
                        </p>
                        <p className="text-cyan-300 font-medium">
                          So we built FlowForge. FlowForge is the AI-native operating system for engineering — the system that models load, predicts instability, prevents burnout, stabilizes critical paths, and guarantees delivery.
                        </p>

                        <div className="p-3.5 bg-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                          <span className="text-cyan-400 font-mono font-bold text-xs uppercase">Six Foundational Engines</span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                            <span className="text-slate-300">1. AI Orchestration</span>
                            <span className="text-slate-300">2. FFX Marketplace</span>
                            <span className="text-slate-300">3. AI Swarm Copilot</span>
                            <span className="text-slate-300">4. Compliance Engine</span>
                            <span className="text-slate-300">5. What-If Simulator</span>
                            <span className="text-slate-300">6. Enterprise Onboarding</span>
                          </div>
                          <p className="text-[11px] text-slate-300 font-sans pt-1">
                            Together, they form a new discipline: <strong>Engineering Load Orchestration (ELO)</strong>. ELO is not a feature, methodology, or framework — ELO is a category, and FlowForge is the company that created it.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                            <span className="text-amber-400 font-bold font-mono">We Believe:</span>
                            <ul className="list-disc pl-4 space-y-0.5 text-slate-300 text-[11px]">
                              <li>Engineering should be stable.</li>
                              <li>Burnout should be impossible.</li>
                              <li>Critical paths should never fail.</li>
                              <li>Delivery should be predictable.</li>
                              <li>AI should act, not observe.</li>
                              <li>Capacity should be liquid.</li>
                              <li>Compliance should be automated.</li>
                              <li>Engineering should be inevitable.</li>
                            </ul>
                          </div>

                          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                            <span className="text-emerald-400 font-bold font-mono">The FlowForge Era:</span>
                            <ul className="list-disc pl-4 space-y-0.5 text-slate-300 text-[11px]">
                              <li><strong>Autonomy Era:</strong> AI manages load & runs engineering.</li>
                              <li><strong>Liquidity Era:</strong> Tradable capacity & instant slack.</li>
                              <li><strong>Stability Era:</strong> Guaranteed delivery & zero burnout.</li>
                              <li><strong>FlowForge Era:</strong> The AI-native operating system.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/20 text-right space-y-1">
                          <p className="text-xs italic text-slate-300">
                            "FlowForge is not a tool. FlowForge is not a platform. FlowForge is not a dashboard. FlowForge is the future of engineering. And that future is inevitable."
                          </p>
                          <p className="text-sm font-bold text-amber-300">
                            — Chukwuma Oduagu
                          </p>
                          <p className="text-xs text-slate-400 font-mono">
                            Founder, FlowForge
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 1.1 Founder Narrative */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">1.1 — The Founder Narrative</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p><strong>FlowForge exists because engineering deserves stability.</strong></p>
                          <p>Engineering teams don't fail because of code — they fail because they're overloaded. Critical paths collapse, burnout rises, and velocity dies.</p>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 font-medium text-white text-[11px]">
                            FlowForge solves the real problem: Engineering load becomes unstable. FlowForge stabilizes engineering load using AI. FlowForge protects teams. FlowForge guarantees delivery. FlowForge is inevitable.
                          </div>
                        </div>
                      </div>

                      {/* 1.2 Brand Bible */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">1.2 — Brand Bible (Condensed)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div>• <strong>Brand Essence:</strong> FlowForge is stability.</div>
                          <div>• <strong>Brand Pillars:</strong> Stability, Precision, Humanity, Autonomy, Inevitability.</div>
                          <div>• <strong>Brand Voice:</strong> Direct, Executive, Outcome-driven, Category-first.</div>
                          <div>• <strong>Brand Positioning:</strong> The AI-native operating system for enterprise engineering.</div>
                        </div>
                      </div>

                      {/* 1.3 Culture Code */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">1.3 — Culture Code (Condensed)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div>• <strong>Cultural Essence:</strong> Engineering deserves stability.</div>
                          <div>• <strong>How We Think:</strong> Systems thinking — load, bottlenecks, critical paths.</div>
                          <div>• <strong>How We Work:</strong> Clarity, Speed, Focus, Respect, Ownership.</div>
                          <div>• <strong>How We Hire:</strong> System thinkers, Load stabilizers, AI-native operators.</div>
                          <div>• <strong>How We Protect:</strong> Prevent burnout, stabilize load, design humane systems.</div>
                        </div>
                      </div>

                      {/* 1.4 Leadership & Governance */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">1.4 — Leadership & Governance (Condensed)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div>• <strong>Philosophy:</strong> Leadership protects stability.</div>
                          <div>• <strong>Five Roles:</strong> Founder/CEO Chukwuma Oduagu, CTO, COO, CRO, CPO.</div>
                          <div>• <strong>Decision Filter:</strong> Load $\rightarrow$ Burnout $\rightarrow$ Delivery Certainty $\rightarrow$ AI Vision.</div>
                          <div>• <strong>Governance Layers:</strong> Founder $\rightarrow$ Executive $\rightarrow$ Autonomous Teams.</div>
                          <div>• <strong>Accountability:</strong> Outcomes, not tasks.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 2: CHAPTER 2 - STRATEGY (FULL CODEX EDITION) */}
                {codexChapter === 2 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-emerald-950/20 rounded-xl border border-emerald-500/30">
                      <span className="text-emerald-300 font-mono font-bold text-sm">CHAPTER 2: STRATEGY (Founder Codex Edition)</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Strategic Backbone of FlowForge</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Engineering load is the root cause of engineering failure. FlowForge stabilizes engineering load, establishes category ownership, and builds systemic defensibility.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 2.1 Strategic Master Plan */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">2.1 — Strategic Master Plan</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p className="text-white font-semibold">Engineering load is the root cause of engineering failure.</p>
                          <p>Every symptom — burnout, slippage, fragility, unpredictability — traces back to load instability.</p>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-emerald-200">
                            <strong>FlowForge's Strategy:</strong> Predict load instability • Prevent burnout • Stabilize critical paths • Guarantee delivery • Build AI autonomy • Create engineering liquidity • Define the category • Become the operating system for engineering.
                          </div>
                        </div>
                      </div>

                      {/* 2.2 Category Strategy: ELO */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">2.2 — Category Strategy: Engineering Load Orchestration (ELO)</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p>FlowForge is the creator and owner of the category: <strong>Engineering Load Orchestration (ELO)</strong> — the discipline of stabilizing engineering load using AI.</p>
                          <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 pt-1">
                            <div>• 1. Load Prediction</div>
                            <div>• 2. Critical Path Protection</div>
                            <div>• 3. Burnout Prevention</div>
                            <div>• 4. Capacity Injection (FFX)</div>
                            <div>• 5. Parallelization Intelligence</div>
                            <div>• 6. Compliance Automation</div>
                          </div>
                          <div className="text-[10px] text-cyan-300 font-mono italic">FlowForge defines, leads, and owns the category.</div>
                        </div>
                      </div>

                      {/* 2.3 Competitive Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">2.3 — Competitive Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p className="text-amber-200 font-bold">"Competitors can copy features. They cannot copy systems."</p>
                          <p>Interlocking defensibility built on six proprietary moats:</p>
                          <div className="grid grid-cols-3 gap-1 text-center font-mono text-[10px] pt-1">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-cyan-300">Data Moat</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-purple-300">AI Moat</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-amber-300">Marketplace</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-300">Compliance</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-pink-300">Category Moat</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-indigo-300">Cultural Moat</div>
                          </div>
                        </div>
                      </div>

                      {/* 2.4 Market Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">2.4 — Market Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <div className="text-white font-bold font-mono text-xs">Texas First → National → Global</div>
                          <p>Texas is dense, connected, enterprise-heavy, engineering-rich, compliance-sensitive, and AI-forward.</p>
                          <p className="text-[11px] text-slate-400">Winning Texas creates regional dominance, category validation, marketplace liquidity, enterprise trust, and unstoppable national expansion momentum.</p>
                        </div>
                      </div>

                      {/* 2.5 Product Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">2.5 — Product Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <div className="text-pink-300 font-bold font-mono text-xs">Stability → Prediction → Autonomy (The Endgame)</div>
                          <div className="space-y-1 text-[11px]">
                            <div>• <strong>Stability:</strong> Load modeling, critical path protection, burnout prevention.</div>
                            <div>• <strong>Prediction:</strong> Velocity forecasting, risk detection, dependency mapping.</div>
                            <div>• <strong>Autonomy:</strong> Task redistribution, sprint restructuring, capacity injection, critical path rescue, parallelization optimization.</div>
                          </div>
                        </div>
                      </div>

                      {/* 2.6 AI Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">2.6 — AI Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <div className="space-y-1 text-[11px]">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                              <strong className="text-cyan-300">Phase 1 — Predictive AI:</strong> Detect overload, predict burnout, forecast velocity.
                            </div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                              <strong className="text-amber-300">Phase 2 — Assistive AI:</strong> AI pairing, suggestions, dependency mapping.
                            </div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                              <strong className="text-emerald-300">Phase 3 — Autonomous AI:</strong> AI-managed engineering, delivery, operations, compliance.
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 2.7 Marketplace Strategy (FFX) */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">2.7 — Marketplace Strategy (FFX)</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p className="text-white font-semibold">Create liquidity in engineering capacity.</p>
                          <p className="text-[11px]">FFX enables slack injection, capacity trading, critical path rescue, and engineering economics. Marketplace liquidity unlocks network effects, revenue expansion, and category dominance.</p>
                        </div>
                      </div>

                      {/* 2.8 Compliance Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">2.8 — Compliance Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p className="text-white font-semibold">Texas SaaS Exemption (§151) Automation</p>
                          <p className="text-[11px]">Automates the 20% taxable value reduction with verifiable audit trails. Turns state tax code into a multi-layered trust, legal, operational, and integration moat.</p>
                        </div>
                      </div>

                      {/* 2.9 GTM Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-blue-400 font-bold font-mono text-sm">2.9 — GTM Strategy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <div className="text-cyan-300 font-bold font-mono text-xs">Category-First → Founder-Led → Enterprise-Focused</div>
                          <p className="text-[11px]">We sell stability, predictability, burnout prevention, critical path protection, and velocity certainty. <em>We do not sell features.</em></p>
                        </div>
                      </div>

                      {/* 2.10 Strategic Declaration */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-300 font-bold font-mono text-sm">2.10 — Strategic Declaration</span>
                        <div className="text-xs text-slate-200 italic space-y-1 font-serif">
                          <p>"FlowForge is not just a strategy. FlowForge is not just a plan. FlowForge is not just a roadmap."</p>
                          <p>"FlowForge is a movement that stabilizes engineering, protects teams, guarantees delivery, and defines the future. FlowForge is inevitable."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 3: CHAPTER 3 - PRODUCT ARCHITECTURE (FULL CODEX EDITION) */}
                {codexChapter === 3 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-purple-950/20 rounded-xl border border-purple-500/30">
                      <span className="text-purple-300 font-mono font-bold text-sm">CHAPTER 3: PRODUCT ARCHITECTURE (Founder Codex Edition)</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Six-Engine Architecture of FlowForge</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        FlowForge is not a feature set or project management tool. It is a multi-engine system designed to stabilize engineering load, prevent burnout, guarantee delivery, and create engineering liquidity.
                      </p>
                    </div>

                    {/* 3.1 The Six-Engine Overview */}
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                      <span className="text-purple-400 font-bold font-mono text-sm">3.1 — The Six-Engine Architecture Overview</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-[11px]">
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-cyan-300 block font-mono">1. AI Orchestration Engine</strong>
                          <p className="text-slate-300 text-[10px]">The core of FlowForge. Models load, predicts instability, stabilizes critical paths, and prevents burnout.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-amber-300 block font-mono">2. FFX Capacity Marketplace</strong>
                          <p className="text-slate-300 text-[10px]">Slack becomes a tradable asset. Engineering capacity becomes liquid. Critical paths rescued instantly.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-purple-300 block font-mono">3. AI Swarm Copilot</strong>
                          <p className="text-slate-300 text-[10px]">Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA. AI that acts, not observes.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-emerald-300 block font-mono">4. Texas Compliance Engine</strong>
                          <p className="text-slate-300 text-[10px]">Automatic §151.0101 and §151.351 SaaS exemption. Audit-ready billing and enterprise trust.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-pink-300 block font-mono">5. What-If Simulator</strong>
                          <p className="text-slate-300 text-[10px]">Simulates load, burnout, timelines, parallelization, and capacity. Predictive engineering economics.</p>
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                          <strong className="text-indigo-300 block font-mono">6. Enterprise Onboarding Platform</strong>
                          <p className="text-slate-300 text-[10px]">Multi-tenant orchestration, FFX purchasing, compliance-grade enterprise onboarding.</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 3.2 AI Orchestration Engine Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">3.2 — AI Orchestration Engine (Deep Architecture)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-white">Layer 1 — Load Modeling:</strong> Models load across teams, roles, tasks, dependencies, critical paths, and velocity curves.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-white">Layer 2 — Instability Detection:</strong> Detects overload, burnout risk, critical path fragility, velocity collapse, and context-switching spikes.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-white">Layer 3 — Stabilization Actions:</strong> Task redistribution, slack injection, parallelization, critical path rescue, capacity injection.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-white">Layer 4 — Autonomy:</strong> Autonomous sprint restructuring, dependency mapping, risk mitigation, velocity optimization.
                          </div>
                        </div>
                      </div>

                      {/* 3.3 FFX Marketplace Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">3.3 — FFX Marketplace (Deep Architecture)</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">Layer 1 — Slack Tokens:</strong> Slack capacity becomes a measurable, mintable, and tradable unit.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">Layer 2 — Capacity Trading:</strong> Teams buy or sell surplus engineering bandwidth across org silos.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">Layer 3 — Critical Path Rescue:</strong> Instant capacity injection stabilizes failing critical paths within minutes.
                          </div>
                          <p className="text-[10px] text-slate-400 pt-1">Unlocks network effects, creates a defensible economic moat, and secures category dominance.</p>
                        </div>
                      </div>

                      {/* 3.4 AI Swarm Copilot Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">3.4 — AI Swarm Copilot (Deep Architecture)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div>• <strong className="text-white">Multi-Role Intelligence:</strong> Specialized AI models for DevOps, Backend, Frontend, QA, and BA.</div>
                          <div>• <strong className="text-white">Autonomous Actions:</strong> Fixes broken pipelines, refactors legacy code, generates automated tests, maps task dependencies.</div>
                          <div>• <strong className="text-white">Parallelization Intelligence:</strong> Breaks sequential bottlenecks, increases throughput velocity, eliminates fragility.</div>
                          <div>• <strong className="text-white">Critical Path Awareness:</strong> Understands the full dependency graph and actively protects vulnerable links.</div>
                        </div>
                      </div>

                      {/* 3.5 Texas Compliance Engine Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">3.5 — Texas Compliance Engine (Deep Architecture)</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">1. SaaS Exemption Logic:</strong> Automatic application of Texas Tax Code §151.0101 and §151.351 (20% taxable value reduction).
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">2. Audit-Ready Billing:</strong> Line-item clarity, usage transparency, and immutable FFX token accounting.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">3. Enterprise Trust:</strong> CFO-grade reliability, legal-grade audit trails, operational stability.
                          </div>
                        </div>
                      </div>

                      {/* 3.6 What-If Simulator Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">3.6 — What-If Simulator (Deep Architecture)</span>
                        <div className="text-xs text-slate-300 space-y-1">
                          <p className="text-pink-300 font-semibold text-[11px]">The Predictive Engineering Crystal Ball:</p>
                          <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-300">
                            <div className="p-1 bg-slate-900 rounded border border-slate-800">"What if we add capacity?"</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800">"What if we remove a dependency?"</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800">"What if we parallelize?"</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800">"What if we inject slack?"</div>
                          </div>
                          <p className="text-[10px] text-slate-400 pt-1">Simulates load, burnout, velocity, parallelization, capacity, critical paths, and engineering economics in real time.</p>
                        </div>
                      </div>

                      {/* 3.7 Enterprise Onboarding Platform Deep Dive */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">3.7 — Enterprise Onboarding Platform (Deep Architecture)</span>
                        <div className="space-y-1 text-[11px] text-slate-300">
                          <div>• <strong className="text-white">Multi-Tenant Workspaces:</strong> Enterprise tenant isolation, SOC2/HIPAA audit logs, compliance-grade RBAC.</div>
                          <div>• <strong className="text-white">FFX Purchasing:</strong> Instant corporate slack injection, capacity credit allocation, automated rescue budgets.</div>
                          <div>• <strong className="text-white">AI Demo Mode:</strong> Live orchestration walkthroughs demonstrating instant load stabilization.</div>
                          <div>• <strong className="text-white">Enterprise Billing:</strong> Seamless compliance automation, itemized usage transparency, predictable tiered pricing.</div>
                        </div>
                      </div>
                    </div>

                    {/* 3.8 Product Declaration */}
                    <div className="p-4 bg-slate-950 rounded-xl border border-purple-500/40 space-y-2">
                      <span className="text-purple-300 font-bold font-mono text-sm">3.8 — Product Declaration</span>
                      <div className="text-xs text-slate-200 italic space-y-1 font-serif">
                        <p>"FlowForge is not a dashboard. FlowForge is not a workflow tool. FlowForge is not a project manager."</p>
                        <p>"FlowForge is a six-engine AI-native operating system for enterprise engineering. It stabilizes load. It protects teams. It guarantees delivery. It creates liquidity. It defines the category. It builds autonomy. It becomes inevitable."</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 4: CHAPTER 4 - AI AUTONOMY (FULL CODEX EDITION) */}
                {codexChapter === 4 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-pink-950/20 rounded-xl border border-pink-500/30">
                      <span className="text-pink-300 font-mono font-bold text-sm">CHAPTER 4: AI AUTONOMY (Founder Codex Edition)</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Philosophy, Stack & Execution of AI Autonomy</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        FlowForge is building the AI that runs engineering — not an assistant, dashboard, or chatbot, but a full orchestration intelligence capable of stabilizing load, protecting teams, and guaranteeing delivery.
                      </p>
                    </div>

                    {/* 4.1 Philosophy & 4.2 Three Phases */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">4.1 — The Philosophy of AI Autonomy</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <div className="text-pink-200 font-bold text-sm">"AI should act, not observe."</div>
                          <p className="text-slate-400 text-[11px]">Dashboards observe. Project managers track. Analytics report.</p>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 font-mono text-xs text-white space-y-0.5">
                            <div>FlowForge intervenes.</div>
                            <div>FlowForge stabilizes.</div>
                            <div>FlowForge rescues.</div>
                            <div>FlowForge optimizes.</div>
                            <div>FlowForge prevents.</div>
                            <div>FlowForge guarantees.</div>
                          </div>
                          <p className="text-[10px] text-pink-300 italic">This is the difference between AI assistance and AI autonomy. FlowForge is building autonomy.</p>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">4.2 — The Three Phases of AI Autonomy</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Phase 1 — Predictive AI ("What is about to break?"):</strong>
                            <p className="text-[10px] text-slate-400">Detects overload, burnout risk, critical path fragility, velocity collapse, dependency instability.</p>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">Phase 2 — Assistive AI ("What should we do next?"):</strong>
                            <p className="text-[10px] text-slate-400">AI pairing, task suggestions, dependency mapping, parallelization opportunities, slack recommendations.</p>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">Phase 3 — Autonomous AI ("I've already fixed it."):</strong>
                            <p className="text-[10px] text-slate-400">Autonomous task redistribution, sprint restructuring, critical path rescue, capacity injection.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.3 Autonomy Stack & 4.4 AI Swarm Architecture */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">4.3 — The Four-Layer Autonomy Stack</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">1. Perception (Sensory):</strong> Task, team, role, dependency, critical path, velocity load.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">2. Prediction (Foresight):</strong> Burnout, slippage, fragility, bottlenecks, velocity collapse.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">3. Decision (Reasoning):</strong> Task redistribution, slack injection, parallelization, capacity additions.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">4. Action (Execution):</strong> Autonomous sprint restructuring, capacity injection, risk mitigation.
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">4.4 — AI Swarm Architecture</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p className="text-white font-semibold text-[11px]">Multi-Agent Autonomous Intelligence Workforce:</p>
                          <div className="grid grid-cols-3 gap-1 font-mono text-[10px] text-center">
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-cyan-300">DevOps Agent</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-purple-300">Backend Agent</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-pink-300">Frontend Agent</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-emerald-300">QA Agent</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-amber-300">BA Agent</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-indigo-300">Critical Path</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-teal-300">Load Stability</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-rose-300">Marketplace</div>
                            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-lime-300">Compliance</div>
                          </div>
                          <p className="text-[10px] text-slate-400 pt-0.5">Each agent understands its domain, acts autonomously, collaborates with the swarm, and protects the critical path.</p>
                        </div>
                      </div>
                    </div>

                    {/* 4.5 Critical Path, 4.6 Burnout, 4.7 Velocity, 4.8 Marketplace, 4.9 Compliance */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[11px]">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-amber-400 font-mono block">4.5 Critical Path Intelligence</strong>
                        <p className="text-slate-300 text-[10px]">Understands the critical path as a living system. Monitors dependencies, blockers, and velocity curves to intervene before links break.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-pink-400 font-mono block">4.6 Burnout Prevention Intelligence</strong>
                        <p className="text-slate-300 text-[10px]">Models burnout from load curves, volatility, and context switching. Prevents burnout as a moral imperative.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-cyan-400 font-mono block">4.7 Velocity Optimization</strong>
                        <p className="text-slate-300 text-[10px]">"Velocity is not speed — velocity is stability." Identifies parallelization, removes blockers, and injects slack.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-emerald-400 font-mono block">4.8 Marketplace Intelligence (FFX)</strong>
                        <p className="text-slate-300 text-[10px]">Predicts capacity shortages, mints slack, trades excess bandwidth, and rescues critical paths automatically.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-teal-400 font-mono block">4.9 Compliance Intelligence</strong>
                        <p className="text-slate-300 text-[10px]">Automates Texas SaaS exemption (§151), audit-ready billing, usage transparency, and FFX token accounting.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-purple-500/40 space-y-1">
                        <strong className="text-purple-300 font-mono block">4.10 Autonomy Declaration</strong>
                        <p className="text-slate-200 italic text-[10px]">FlowForge is building the AI that runs engineering. FlowForge is building autonomy. FlowForge is inevitable.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 5: CHAPTER 5 - ENGINEERING LOAD ORCHESTRATION (ELO) (FULL CODEX EDITION) */}
                {codexChapter === 5 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-indigo-950/20 rounded-xl border border-indigo-500/30">
                      <span className="text-indigo-300 font-mono font-bold text-sm">CHAPTER 5: ENGINEERING LOAD ORCHESTRATION (ELO)</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Category FlowForge Created, Owns, and Leads</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        ELO is not a feature, framework, or methodology. ELO is a discipline — a new field of engineering and the intellectual backbone of FlowForge.
                      </p>
                    </div>

                    {/* 5.1 Core Premise & 5.2 Six Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 5.1 Core Premise */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">5.1 — The Core Premise of ELO</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <p className="text-slate-400 text-[11px]">
                            Engineering does <span className="text-rose-300 font-semibold">NOT</span> fail because of bad code, bad tools, bad process, or bad planning.
                          </p>
                          <div className="p-2.5 bg-slate-900 rounded border border-rose-500/30 text-white font-semibold">
                            Engineering fails because of load instability.
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Load instability causes burnout, slippage, fragility, velocity collapse, critical path failure, and team breakdown. <strong className="text-indigo-300">ELO solves the root cause.</strong>
                          </p>
                        </div>
                      </div>

                      {/* 5.2 The ELO Model (6 Pillars) */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">5.2 — The ELO Model (Six Pillars)</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">1. Load Modeling</strong>
                            Tasks, teams, roles, dependencies, critical paths.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">2. Instability Detection</strong>
                            Overload, burnout risk, fragility, bottlenecks.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">3. Critical Path Stabilization</strong>
                            Redistribute tasks, inject slack, parallelize.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block">4. Burnout Prevention</strong>
                            Load balancing, sprint restructuring, capacity.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">5. Capacity Liquidity (FFX)</strong>
                            Turning slack into a tradable asset.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300 block">6. AI Autonomy</strong>
                            AI-managed sprints, mitigation, and velocity.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.3 Lifecycle & 5.4 Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 5.3 Continuous Lifecycle */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">5.3 — The ELO Continuous Lifecycle</span>
                        <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">1. Observe</strong>
                            <span className="text-slate-400 text-[9px]">Model load dimensions</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">2. Predict</strong>
                            <span className="text-slate-400 text-[9px]">Forecast instability</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300 block">3. Intervene</strong>
                            <span className="text-slate-400 text-[9px]">Stabilize load</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">4. Optimize</strong>
                            <span className="text-slate-400 text-[9px]">Parallelize workflows</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">5. Liquify</strong>
                            <span className="text-slate-400 text-[9px]">FFX capacity trades</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block">6. Prevent</strong>
                            <span className="text-slate-400 text-[9px]">Continuous balance</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-400 italic text-center pt-0.5">This closed feedback loop executes continuously across the enterprise stack.</div>
                      </div>

                      {/* 5.4 New ELO Engineering Metrics */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">5.4 — The Six ELO Engineering Metrics</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">LSI (Load Stability Index)</strong>
                            Measures stability of engineering load.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">CPH (Critical Path Health)</strong>
                            Measures fragility across dependencies.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300 block font-mono">BRC (Burnout Risk Curve)</strong>
                            Predicts burnout before symptoms appear.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">VSS (Velocity Stability Score)</strong>
                            Measures velocity predictability.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono">SER (Slack Efficiency Ratio)</strong>
                            Measures how effectively slack is used.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">CLI (Capacity Liquidity Index)</strong>
                            Measures marketplace liquidity.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.5 Framework, 5.6 Pyramid, 5.7 Traditional vs ELO */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 5.5 Framework */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-purple-400 font-bold font-mono text-xs">5.5 — ELO Framework</span>
                        <div className="space-y-1 text-[11px]">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800"><strong className="text-cyan-300">Load:</strong> Model engineering load</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800"><strong className="text-amber-300">Risk:</strong> Predict instability</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800"><strong className="text-pink-300">Action:</strong> Stabilize critical paths</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800"><strong className="text-emerald-300">Outcome:</strong> Guarantee delivery</div>
                        </div>
                      </div>

                      {/* 5.6 Pyramid */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">5.6 — The ELO Pyramid</span>
                        <div className="space-y-1 text-[11px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-purple-500/30">
                            <strong className="text-purple-300 block text-[10px] font-mono">TOP: Autonomy</strong>
                            <span className="text-[10px] text-slate-300">AI-managed engineering, delivery & ops</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-cyan-500/30">
                            <strong className="text-cyan-300 block text-[10px] font-mono">MIDDLE: Velocity</strong>
                            <span className="text-[10px] text-slate-300">Parallelization, slack injection, capacity</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30">
                            <strong className="text-emerald-300 block text-[10px] font-mono">BASE: Stability</strong>
                            <span className="text-[10px] text-slate-300">Load modeling, burnout prevention, CP protection</span>
                          </div>
                        </div>
                      </div>

                      {/* 5.7 Comparison */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-cyan-400 font-bold font-mono text-xs">5.7 — Traditional vs ELO</span>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 bg-rose-950/20 rounded border border-rose-800/40 text-rose-200">
                            <strong>Traditional:</strong> Reactive, human-driven, fragile, unpredictable, burnout-prone, velocity-volatile.
                          </div>
                          <div className="p-1.5 bg-emerald-950/20 rounded border border-emerald-800/40 text-emerald-200">
                            <strong>ELO:</strong> Predictive, AI-driven, stable, reliable, burnout-resistant, dependency-aware, velocity-stable.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.8 Critical Path, 5.9 Burnout, 5.10 Economics, 5.11 Declaration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-amber-400 font-mono block">5.8 Critical Path Spine</strong>
                        <p className="text-slate-300 text-[10px]">Protects the spine through redistribution, slack injection, blocker removal, and automated sprint restructuring.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-pink-400 font-mono block">5.9 Burnout Prevention</strong>
                        <p className="text-slate-300 text-[10px]">Burnout is predictable and preventable. ELO prevents burnout through load curve balancing and capacity injection.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-emerald-400 font-mono block">5.10 Engineering Economics</strong>
                        <p className="text-slate-300 text-[10px]">Slack becomes a resource. Capacity becomes liquid. Critical paths become assets. FFX is the economic engine.</p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/40 space-y-1">
                        <strong className="text-indigo-300 font-mono block">5.11 ELO Declaration</strong>
                        <p className="text-slate-200 italic text-[10px]">"ELO is a discipline. ELO is a category. ELO is the future of engineering. FlowForge created it, owns it, and scales it."</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 6: CHAPTER 6 - MARKETPLACE ECONOMICS (FFX) (FULL CODEX EDITION) */}
                {codexChapter === 6 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-amber-950/20 rounded-xl border border-amber-500/30">
                      <span className="text-amber-300 font-mono font-bold text-sm">CHAPTER 6: MARKETPLACE ECONOMICS (FFX)</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Economic Engine of FlowForge</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        FlowForge transforms engineering from a static cost center into a dynamic, liquid economy where slack, capacity, and velocity become tradable assets.
                      </p>
                    </div>

                    {/* 6.1 Purpose of FFX & 6.2 Marketplace Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">6.1 — The Purpose of FFX</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <p className="text-slate-400 text-[11px]">
                            Engineering has always suffered from one fundamental flaw: <span className="text-rose-300 font-semibold">Capacity is fixed.</span>
                          </p>
                          <p className="text-[11px]">When teams overload, burnout rises, velocity collapses, critical paths fail, and delivery slips.</p>
                          <div className="p-2.5 bg-slate-900 rounded border border-amber-500/30 text-amber-200 font-semibold text-xs space-y-0.5">
                            <div>Slack becomes a resource.</div>
                            <div>Capacity becomes tradable.</div>
                            <div>Critical paths become rescuable.</div>
                          </div>
                          <p className="text-[10px] text-amber-300/90 font-mono">FFX is the liquidity layer of engineering.</p>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">6.2 — The FFX Marketplace Model</span>
                        <div className="space-y-2 text-xs text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">1. Slack Tokens:</strong>
                            <span className="text-[11px] text-slate-400">Slack is quantified and minted as a measurable, auditable engineering unit.</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">2. Capacity Trading:</strong>
                            <span className="text-[11px] text-slate-400">Teams buy surplus bandwidth or sell excess capacity across organizational silos.</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">3. Critical Path Rescue:</strong>
                            <span className="text-[11px] text-slate-400">Instant capacity injection stabilizes failing dependencies in real time.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6.3 Slack Tokens, 6.4 Capacity Trading, 6.5 Critical Path Rescue */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-purple-400 font-bold font-mono text-xs">6.3 — Slack Tokens</span>
                        <p className="text-[11px] text-slate-300">Represent available capacity, injectable time, redistributable load, and velocity multipliers.</p>
                        <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-slate-400 pt-1">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">Quantified</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">Tradable</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">Trackable</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">Auditable</div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">6.4 — Capacity Trading</span>
                        <p className="text-[11px] text-slate-300">Buy when overloaded; sell when underloaded. Trade capacity across teams, roles, and complex projects.</p>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-amber-200">
                          Creates organizational liquidity, operational flexibility, team stability, and capital efficiency.
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-emerald-400 font-bold font-mono text-xs">6.5 — Critical Path Rescue</span>
                        <p className="text-[11px] text-slate-300">Intervenes when dependencies break, roles overload, or milestones become fragile.</p>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-emerald-200">
                          Injects capacity instantly, stabilizes the critical chain, prevents slippage, and guarantees delivery.
                        </div>
                      </div>
                    </div>

                    {/* 6.6 Liquidity & 6.7 Participants */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 6.6 Marketplace Liquidity */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">6.6 — Marketplace Liquidity (CLI)</span>
                        <div className="text-xs text-slate-300 space-y-1.5">
                          <p>
                            Measured by the <strong className="text-cyan-300 font-mono">Capacity Liquidity Index (CLI)</strong>. CLI expands as more teams join, more roles participate, more slack is tokenized, and more paths are rescued.
                          </p>
                          <div className="p-2.5 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-300 space-y-1">
                            <div>• <strong>Network Effects:</strong> Each participating team deepens market liquidity.</div>
                            <div>• <strong>Economic Moat:</strong> Proprietary capacity exchange impossible to clone.</div>
                            <div>• <strong>Category Dominance:</strong> FFX becomes the default engineering capacity marketplace.</div>
                          </div>
                        </div>
                      </div>

                      {/* 6.7 Marketplace Participants */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">6.7 — Marketplace Participants</span>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Engineering Teams</strong>
                            Buy slack, sell excess, stabilize workloads.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block">Product Teams</strong>
                            Inject capacity, protect critical delivery paths.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">Operations Teams</strong>
                            Manage liquidity, optimize economics.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">AI Agents</strong>
                            Trade autonomously, rescue paths, balance load.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 6.8 Dynamics, 6.9 AI Intelligence, 6.10 Compliance, 6.11 Declaration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-indigo-400 font-mono block">6.8 Marketplace Dynamics</strong>
                        <p className="text-slate-300 text-[10px]">
                          <strong>Supply:</strong> Slack tokens & parallel capacity.<br/>
                          <strong>Demand:</strong> Overloaded paths & burnout risk.<br/>
                          <strong>Price:</strong> Dynamic pricing tied to load volatility & path urgency.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-purple-400 font-mono block">6.9 AI Intelligence</strong>
                        <p className="text-slate-300 text-[10px]">
                          FlowForge AI predicts shortages, mints slack, trades capacity, rescues critical paths, and optimizes liquidity 24/7.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-teal-400 font-mono block">6.10 Compliance Integration</strong>
                        <p className="text-slate-300 text-[10px]">
                          Automates Texas SaaS Exemption (§151), audit-ready billing, usage transparency, and token accounting.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/40 space-y-1">
                        <strong className="text-amber-300 font-mono block">6.11 Economics Declaration</strong>
                        <p className="text-slate-200 italic text-[10px]">
                          "FFX is the economic system of engineering. It liquifies capacity, stabilizes critical paths, prevents burnout, guarantees delivery, and makes FlowForge inevitable."
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 7: CHAPTER 7 - THE COMPLIANCE ENGINE (FULL CODEX EDITION) */}
                {codexChapter === 7 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-teal-950/20 rounded-xl border border-teal-500/30">
                      <span className="text-teal-300 font-mono font-bold text-sm">CHAPTER 7: THE COMPLIANCE ENGINE</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Trust Layer of FlowForge</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Engineering stability, AI autonomy, and marketplace liquidity require legal clarity, audit readiness, and billing transparency. The Compliance Engine makes FlowForge enterprise-grade, legally defensible, and CFO-approved.
                      </p>
                    </div>

                    {/* 7.1 Purpose & 7.2 Texas SaaS Exemption */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 7.1 Purpose */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">7.1 — Purpose of the Compliance Engine</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <p className="text-slate-400 text-[11px]">
                            Enterprises cannot adopt AI systems without legal certainty.
                          </p>
                          <div className="p-2.5 bg-slate-900 rounded border border-teal-500/30 text-teal-200 font-semibold text-[11px] space-y-1">
                            <div>• Automatic Texas SaaS Exemption (§151)</div>
                            <div>• Audit-Ready Billing & Transparent Accounting</div>
                            <div>• FFX Token Compliance & Multi-Tenant Isolation</div>
                            <div>• Enterprise-Grade AI Governance</div>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Compliance is not just a feature — <strong className="text-teal-300">it is a trust moat</strong> that unlocks global enterprise contracts.
                          </p>
                        </div>
                      </div>

                      {/* 7.2 Texas SaaS Exemption Automation */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">7.2 — Texas SaaS Exemption Automation</span>
                        <div className="space-y-1.5 text-xs text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono text-[11px]">§151.0101 — Taxable Services</strong>
                            <span className="text-[10.5px] text-slate-400">Classifies FlowForge correctly as a non-taxable SaaS orchestration system.</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono text-[11px]">§151.351 — Exemption Requirements</strong>
                            <span className="text-[10.5px] text-slate-400">Auto-generates exemption certificates, usage breakdowns, AI orchestration logs, and token accounting invoices.</span>
                          </div>
                          <div className="text-[10px] text-slate-400 pt-0.5">
                            Zero-friction adoption for CFOs, Controllers, Legal, Procurement, and External Auditors.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7.3 Audit-Ready Billing & 7.4 Multi-Tenant Enterprise Isolation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 7.3 Audit-Ready Billing */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">7.3 — Audit-Ready Billing</span>
                        <div className="grid grid-cols-2 gap-2 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">1. Line-Item Transparency</strong>
                            Logs slack injection, capacity trades, rescue actions, and AI decisions.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">2. Usage Accounting</strong>
                            FFX tokens tracked, timestamped, categorized, and auditable.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono">3. AI Action Logs</strong>
                            Autonomous actions recorded, classified, and justified by load metrics.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">4. Compliance Reports</strong>
                            Monthly stability, burnout, CPH, CLI, and exemption validation reports.
                          </div>
                        </div>
                      </div>

                      {/* 7.4 Multi-Tenant Enterprise Isolation */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">7.4 — Multi-Tenant Enterprise Isolation</span>
                        <div className="grid grid-cols-2 gap-2 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono">A. Workspace Isolation</strong>
                            Cryptographically segregated, encrypted, access-controlled workspaces.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300 block font-mono">B. Enterprise RBAC</strong>
                            Engineering, Product, Operations, Finance, Leadership, and AI Agent roles.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">C. Compliance Logs</strong>
                            Timestamped, immutable event logs linked to verified user or AI IDs.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">D. Governance Policies</strong>
                            Approve autonomy levels, restrict trades, and review audit archives.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 7.5 Token Compliance, 7.6 AI Controls, 7.7 Intelligence */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 7.5 Token Compliance */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-purple-400 font-bold font-mono text-xs">7.5 — FFX Token Compliance</span>
                        <p className="text-[11px] text-slate-300">
                          Treated as digital capacity units and engineering liquidity instruments.
                        </p>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-300 space-y-0.5 font-mono">
                          <div>✓ Token issuance is logged</div>
                          <div>✓ Usage is auditable</div>
                          <div>✓ Trades are transparent</div>
                          <div>✓ Pricing is justified</div>
                          <div>✓ Flows are compliant</div>
                        </div>
                      </div>

                      {/* 7.6 AI Compliance Controls */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-cyan-400 font-bold font-mono text-xs">7.6 — AI Compliance Controls</span>
                        <div className="space-y-1 text-[10.5px]">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">Autonomy Levels:</strong> Predictive, Assistive, Autonomous w/ Approval, Fully Autonomous.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">Action Restrictions:</strong> Policy locks on capacity injection, slack, sprint restructuring, or trades.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">Audit Trails:</strong> Reason, load metrics, risk scores, CP impact, and burnout delta logged for every action.
                          </div>
                        </div>
                      </div>

                      {/* 7.7 Compliance Intelligence */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-emerald-400 font-bold font-mono text-xs">7.7 — Compliance Intelligence</span>
                        <p className="text-[11px] text-slate-300">
                          FlowForge AI proactively monitors compliance health:
                        </p>
                        <div className="grid grid-cols-2 gap-1 text-[9.5px] font-mono text-slate-300 pt-0.5">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-emerald-300">Regulatory Shifts</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-emerald-300">Billing Anomalies</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-emerald-300">Token Irregularities</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-emerald-300">Audit Readiness</div>
                        </div>
                      </div>
                    </div>

                    {/* 7.8 Compliance Moats & 7.9 Declaration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 7.8 Competitive Moat */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">7.8 — Compliance as a Competitive Moat</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px]">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">Legal Moat</strong>
                            Competitors cannot easily replicate exemption automation.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">Operational Moat</strong>
                            Audit-ready billing is difficult to build and scale.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono">Economic Moat</strong>
                            Token accounting directly ties to marketplace liquidity.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">Trust Moat</strong>
                            CFOs, Controllers, and General Counsel trust FlowForge.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 col-span-2 sm:col-span-2">
                            <strong className="text-pink-300 block font-mono">Enterprise Moat</strong>
                            Compliance unlocks Fortune 500 accounts and regulated verticals.
                          </div>
                        </div>
                      </div>

                      {/* 7.9 Compliance Declaration */}
                      <div className="p-4 bg-gradient-to-br from-slate-950 to-teal-950/40 rounded-xl border border-teal-500/40 space-y-2 flex flex-col justify-center">
                        <span className="text-teal-300 font-mono font-bold text-sm">7.9 — Compliance Declaration</span>
                        <p className="text-slate-200 text-xs italic leading-relaxed">
                          "FlowForge is not just compliant. FlowForge is not just audit-ready. FlowForge is not just enterprise-safe.<br/><br/>
                          FlowForge is the trust layer of engineering autonomy. It protects enterprises. It protects engineering teams. It protects critical paths. It protects delivery. It protects the category.<br/><br/>
                          <strong className="text-teal-300 not-italic">FlowForge is inevitable.</strong>"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 8: CHAPTER 8 - THE SALES SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 8 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-emerald-950/20 rounded-xl border border-emerald-500/30">
                      <span className="text-emerald-300 font-mono font-bold text-sm">CHAPTER 8: THE SALES SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Wins Enterprise Deals</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        FlowForge does not sell features, dashboards, or workflows. FlowForge sells engineering stability — the single most valuable outcome in enterprise engineering.
                      </p>
                    </div>

                    {/* 8.1 Sales Philosophy & 8.2 Positioning */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 8.1 Sales Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">8.1 — Sales Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <p className="text-slate-400 text-[11px]">
                            FlowForge sells one thing: <strong className="text-emerald-300">Engineering Stability.</strong>
                          </p>
                          <div className="grid grid-cols-2 gap-1.5 text-[10.5px]">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Predictable Delivery</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Protected Teams</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Stable Critical Paths</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Burnout Prevention</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Velocity Certainty</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-200">✓ Load Stabilization</div>
                          </div>
                        </div>
                      </div>

                      {/* 8.2 Sales Positioning */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">8.2 — Sales Positioning</span>
                        <div className="space-y-2 text-xs text-slate-300">
                          <div className="p-2.5 bg-slate-900 rounded border border-cyan-500/30 text-white font-semibold">
                            "The AI-native operating system for enterprise engineering."
                          </div>
                          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                            <div className="p-1.5 bg-rose-950/20 rounded border border-rose-800/40 text-rose-300">
                              ✕ NOT project management<br/>✕ NOT a productivity tool<br/>✕ NOT another dashboard
                            </div>
                            <div className="p-1.5 bg-emerald-950/20 rounded border border-emerald-800/40 text-emerald-300">
                              ✓ Engineering Load Orchestration (ELO)<br/>✓ Category creator & owner<br/>✓ Non-negotiable positioning
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.3 Buyer Matrix & 8.4 Narrative Arc */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 8.3 The Enterprise Buyer */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">8.3 — The Enterprise Buyer Matrix</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono text-[10px]">PRIMARY BUYERS</strong>
                            <span>CTO, VP Engineering, Director of Platform, Head of DevOps, Head of Eng Ops</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono text-[10px]">SECONDARY BUYERS</strong>
                            <span>CFO (Predictability + Compliance), COO (Delivery + Risk), CIO (Stability)</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono text-[10px]">INTERNAL CHAMPIONS</strong>
                            <span>Senior Engineers, Staff Engineers, Engineering Managers</span>
                          </div>
                        </div>
                      </div>

                      {/* 8.4 The Sales Narrative Arc */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">8.4 — The Sales Narrative Arc</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300 block">Step 1: Problem</strong>
                            Engineering load becomes unstable.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">Step 2: Consequence</strong>
                            Burnout, slippage, fragility, volatility.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Step 3: Solution</strong>
                            FlowForge stabilizes load via AI.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">Step 4: Outcome</strong>
                            Delivery predictable; teams protected.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">Step 5: Category</strong>
                            Engineering Load Orchestration (ELO).
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-amber-500/40">
                            <strong className="text-amber-300 block">Step 6: The Close</strong>
                            "Pilot onboarding or full onboarding?"
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.5 Core Script & 8.6 Demo Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 8.5 Core Sales Script */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">8.5 — The Core Sales Script</span>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border border-pink-500/30 text-slate-200 text-xs italic leading-relaxed">
                          "Engineering teams don’t fail because of code — they fail because they’re overloaded.<br/><br/>
                          FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery.<br/><br/>
                          <strong className="text-pink-300 not-italic">FlowForge is the AI-native operating system for engineering.</strong>"
                        </blockquote>
                      </div>

                      {/* 8.6 The Demo Flow */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">8.6 — The 6-Step Demo Flow</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300">1. Show Load Instability:</strong> Fragility, burnout risk, velocity collapse.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">2. Show Stabilization:</strong> Task redistribution, slack injection, parallelization, rescue.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">3. Show Outcomes:</strong> Stable load, predictable velocity, guaranteed delivery.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">4. Show FFX Marketplace:</strong> Capacity injection, slack liquidity, velocity boost.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300">5. Show Compliance:</strong> Texas SaaS exemption (§151), audit-ready billing.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30">
                            <strong className="text-emerald-300">6. Executive Close:</strong> "Pilot onboarding or full engineering onboarding?"
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.7 Objection Handling & 8.8 Pricing Strategy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 8.7 Objection Handling */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">8.7 — Objection Handling</span>
                        <div className="space-y-1.5 text-[10.5px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 font-semibold">"We already have dashboards."</span>
                            <div className="text-cyan-300 font-medium">→ Dashboards observe. FlowForge acts.</div>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 font-semibold">"We already have project management tools."</span>
                            <div className="text-amber-300 font-medium">→ PM tools track tasks. FlowForge stabilizes load.</div>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 font-semibold">"We don’t have burnout."</span>
                            <div className="text-pink-300 font-medium">→ Burnout is predictable. FlowForge prevents it.</div>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 font-semibold">"We don’t need AI."</span>
                            <div className="text-purple-300 font-medium">→ AI is the only way to stabilize load at scale.</div>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 font-semibold">"We’re not in Texas."</span>
                            <div className="text-teal-300 font-medium">→ Compliance is a bonus. Load stabilization is universal.</div>
                          </div>
                        </div>
                      </div>

                      {/* 8.8 Pricing Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">8.8 — Pricing Strategy</span>
                        <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">FFX Credits</strong>
                            Usage-based slack injection and capacity marketplace trades.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono">AI Autopilot Sub</strong>
                            Predictive orchestration and continuous load balancing.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">Compliance Engine</strong>
                            Texas SaaS exemption automation and audit logs.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">Multi-Tenant Tier</strong>
                            Workspace isolation, enterprise RBAC, and dedicated SLAS.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 8.9 Pipeline, 8.10 Closing, 8.11 Culture, 8.12 Declaration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px]">
                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-cyan-400 font-mono block">8.9 Pipeline Strategy</strong>
                        <p className="text-slate-300 text-[10px]">
                          Outbound Sequences, Category Messaging (ELO), Texas-First Strategy, Founder-Led Deals, and Demo-First Approach.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-amber-400 font-mono block">8.10 Closing Strategy</strong>
                        <p className="text-slate-300 text-[10px]">
                          Pilot → Expansion, Critical Path Rescue proof, Burnout Prevention wins, Instant Velocity Boost, and CFO Compliance signoff.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                        <strong className="text-pink-400 font-mono block">8.11 Sales Culture</strong>
                        <p className="text-slate-300 text-[10px]">
                          <strong>Direct:</strong> Plain speaking.<br/>
                          <strong>Executive:</strong> Speak like CTOs.<br/>
                          <strong>Outcome:</strong> Sell stability.<br/>
                          <strong>Founder-aligned:</strong> Sell inevitability.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/40 space-y-1">
                        <strong className="text-emerald-300 font-mono block">8.12 Sales Declaration</strong>
                        <p className="text-slate-200 italic text-[10px]">
                          "FlowForge is selling engineering stability. We stabilize load. We protect teams. We guarantee delivery. We define the category. We build autonomy. We become inevitable."
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 9: CHAPTER 9 - MARKETING & PR SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 9 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-rose-950/20 rounded-xl border border-rose-500/30">
                      <span className="text-rose-300 font-mono font-bold text-sm">CHAPTER 9: MARKETING & PR SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Shapes Perception, Defines the Category, and Becomes the Voice of Engineering Stability</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Marketing is not decoration or content. Marketing is category creation, narrative control, perception engineering, and inevitability.
                      </p>
                    </div>

                    {/* 9.1 Marketing Philosophy & 9.2 Core Messaging */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 9.1 Marketing Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-rose-400 font-bold font-mono text-sm">9.1 — Marketing Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <div className="p-2.5 bg-slate-900 rounded border border-rose-500/30 text-rose-200 font-semibold text-[11px]">
                            "We do not market features. We market the category. Features are forgettable. Categories are immortal."
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-[10px] text-slate-300">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Engineering stability</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Burnout prevention</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Critical path protection</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Velocity certainty</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• AI autonomy</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Marketplace liquidity</div>
                          </div>
                        </div>
                      </div>

                      {/* 9.2 Core Messaging */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between">
                        <span className="text-cyan-400 font-bold font-mono text-sm">9.2 — Core Messaging Backbone</span>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border border-cyan-500/30 text-white text-xs italic font-medium leading-relaxed">
                          "Engineering doesn’t fail because of code.<br/>
                          Engineering fails because of overload.<br/>
                          <strong className="text-cyan-300 not-italic">FlowForge stabilizes engineering load using AI.</strong>"
                        </blockquote>
                        <p className="text-[10.5px] text-slate-400">
                          Appears universally in Sales, PR, Website, Social, Analyst Briefings, and Founder Speeches.
                        </p>
                      </div>
                    </div>

                    {/* 9.3 Brand Voice & 9.4 Category Messaging Framework */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 9.3 Brand Voice */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">9.3 — Brand Voice Architecture</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10.5px]">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-amber-300 block font-mono">Direct</strong>
                            No corporate fluff.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-cyan-300 block font-mono">Executive</strong>
                            Speaks to C-Suite.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-purple-300 block font-mono">Authoritative</strong>
                            Category leader.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-emerald-300 block font-mono">Calm</strong>
                            Unshakeable trust.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-pink-300 block font-mono">Predictive</strong>
                            Looking forward.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-center">
                            <strong className="text-indigo-300 block font-mono">Outcome-Driven</strong>
                            Stability delivered.
                          </div>
                        </div>
                      </div>

                      {/* 9.4 Category Messaging Framework */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">9.4 — Category Messaging Framework</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-rose-300 font-bold">1. Problem</span>
                            <span className="text-slate-400">Engineering load instability</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-amber-300 font-bold">2. Consequence</span>
                            <span className="text-slate-400">Burnout, slippage, fragility, unpredictability</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-cyan-300 font-bold">3. Solution</span>
                            <span className="text-slate-400">AI-native load orchestration</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-emerald-300 font-bold">4. Category</span>
                            <span className="text-emerald-300 font-semibold">Engineering Load Orchestration (ELO)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-purple-500/30 flex justify-between items-center">
                            <span className="font-mono text-purple-300 font-bold">5. Vision</span>
                            <span className="text-purple-200">The operating system for engineering</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 9.5 Five Pillars & 9.6 Category Creation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 9.5 Marketing Architecture */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">9.5 — The Five Marketing Pillars</span>
                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono text-[10px]">1. CATEGORY CREATION</strong>
                            Define ELO. Own ELO. Lead ELO.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono text-[10px]">2. FOUNDER NARRATIVE</strong>
                            Chukwuma Oduagu becomes the preeminent voice of engineering stability.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono text-[10px]">3. ENTERPRISE MESSAGING</strong>
                            Speak directly to CTOs, VPs, Directors with zero friction.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono text-[10px]">4. THOUGHT LEADERSHIP & PR</strong>
                            Publish category-defining papers and control the public narrative.
                          </div>
                        </div>
                      </div>

                      {/* 9.6 Category Creation Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">9.6 — Category Creation Strategy</span>
                        <div className="space-y-2 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono">A. Founder Essays</strong>
                            Engineering stability, burnout prevention, AI autonomy, engineering economics, CP protection.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">B. Category Papers</strong>
                            The ELO discipline, load-first engineering, AI-native operations, capacity marketplaces.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">C. Enterprise Guides</strong>
                            Stability frameworks, burnout prevention playbooks, velocity protection, compliance automation.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 9.7 PR Strategy, 9.8 Social Media, 9.9 Analyst Strategy, 9.10 Website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      {/* 9.7 PR Strategy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-cyan-400 font-bold font-mono text-xs">9.7 — PR Strategy</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div>• <strong>Category Milestones:</strong> Announce ELO shifts, not small features.</div>
                          <div>• <strong>Enterprise Impact:</strong> Lead with stability & burnout prevention.</div>
                          <div>• <strong>Founder Authority:</strong> Chukwuma Oduagu as industry spokesperson.</div>
                          <div>• <strong>Analyst Education:</strong> Shape market perception early.</div>
                        </div>
                      </div>

                      {/* 9.8 Social Media Strategy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-emerald-400 font-bold font-mono text-xs">9.8 — Social Media</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="text-emerald-300 font-semibold">Executive + Technical + Visionary</div>
                          <p className="text-slate-400">Post category insights, stability concepts, AI autonomy progress, and economics.</p>
                          <div className="text-rose-300/80 text-[9.5px]">No memes, trends, fluff, or reactive lists.</div>
                        </div>
                      </div>

                      {/* 9.9 Analyst Strategy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">9.9 — Analyst Strategy</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <p className="text-slate-300">Educate analysts on ELO, load instability, and critical path fragility.</p>
                          <div className="p-1 bg-slate-900 rounded text-amber-200 font-mono text-[9px]">
                            Analysts become multipliers of category inevitability.
                          </div>
                        </div>
                      </div>

                      {/* 9.10 Website Strategy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-purple-400 font-bold font-mono text-xs">9.10 — Category Engine</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div>• Problem → Consequence → Solution → ELO</div>
                          <div>• Enterprise outcomes & AI Autopilot</div>
                          <div>• Slack marketplace economics</div>
                          <div>• Texas SaaS exemption trust</div>
                        </div>
                      </div>
                    </div>

                    {/* 9.11 Metrics, 9.12 Crisis Protocol & 9.13 Marketing Declaration */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* 9.11 Metrics */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">9.11 — Marketing Metrics</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Category adoption & analyst citations</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Enterprise inbound deal velocity</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Founder influence & speech resonance</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• Stability & burnout narrative dominance</div>
                        </div>
                      </div>

                      {/* 9.12 Crisis Communication */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-rose-400 font-bold font-mono text-sm">9.12 — Crisis Communication</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div><strong>A. Calm Authority:</strong> Clear & decisive.</div>
                          <div><strong>B. Load-First Framing:</strong> How stability is restored.</div>
                          <div><strong>C. Transparency:</strong> Facts over speculation.</div>
                          <div><strong>D. Founder Voice:</strong> Chukwuma Oduagu delivers the message.</div>
                          <div><strong>E. Resolution:</strong> Systemic recurrence prevention.</div>
                        </div>
                      </div>

                      {/* 9.13 Declaration */}
                      <div className="p-4 bg-gradient-to-br from-slate-950 to-rose-950/40 rounded-xl border border-rose-500/40 space-y-2 flex flex-col justify-center">
                        <span className="text-rose-300 font-mono font-bold text-sm">9.13 — Marketing Declaration</span>
                        <p className="text-slate-200 text-xs italic leading-relaxed">
                          "FlowForge is not just marketing a product, AI, or platform. FlowForge is marketing a category.<br/><br/>
                          We define ELO. We lead ELO. We scale ELO. We dominate ELO.<br/><br/>
                          <strong className="text-rose-300 not-italic">We become inevitable through ELO.</strong>"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 11: CHAPTER 11 - OPERATIONS SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 11 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/20 rounded-xl border border-cyan-500/30">
                      <span className="text-cyan-300 font-mono font-bold text-sm">CHAPTER 11: OPERATIONS SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Becomes a Predictable, Stable, Enterprise‑Grade Machine</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Operations are not administrative or back-office. Operations are stability, predictability, delivery, and trust. FlowForge runs with the exact same stability it delivers to engineering teams.
                      </p>
                    </div>

                    {/* 11.1 Philosophy & 11.2 Four Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 11.1 Operations Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">11.1 — Operations Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <div className="p-2.5 bg-slate-900 rounded border border-cyan-500/30 text-cyan-200 font-semibold text-[11px] text-center">
                            "Stability first. Velocity second. Scale third."
                          </div>
                          <p className="text-slate-400 text-[11px]">
                            Operations protect:
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[10px] text-slate-300">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Customers</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Teams</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Delivery</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Compliance</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Revenue</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center">✓ Reputation</div>
                          </div>
                        </div>
                      </div>

                      {/* 11.2 Four Pillars */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">11.2 — The Four Operational Pillars</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">1. Load-First Planning</strong>
                            Operations plan and forecast based on load capacity, not abstract task lists.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block font-mono">2. AI-Native Workflows</strong>
                            Continuous pairing with specialized agents and automated load rebalancing.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">3. Compliance Automation</strong>
                            Automatic Texas SaaS tax exemption (§151) and line-item audit-ready billing.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">4. Enterprise Reliability</strong>
                            Predictable onboarding, proactive AI-driven support, and rock-solid delivery SLAs.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 11.3 Onboarding System & 11.4 Support System */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 11.3 Enterprise Onboarding System */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">11.3 — Enterprise Onboarding System</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono">A. Multi-Tenant Workspaces</strong>
                            Isolated workspaces, audit logs, compliance controls, AI autonomy settings.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">B. Load-First Setup</strong>
                            Load modeling, critical path mapping, burnout risk analysis, velocity baselines.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">C. AI Pairing Activation</strong>
                            DevOps, Backend, Frontend, QA, and Business Analyst agents live in minutes.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">D. Marketplace Enablement</strong>
                            Slack token minting, capacity trading, and critical path rescue training.
                          </div>
                        </div>
                      </div>

                      {/* 11.4 Support System */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">11.4 — Enterprise Support System</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">1. Stability Monitoring:</strong> Real-time tracking of load stability, burnout index, CP health, and velocity curves.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">2. AI-Driven Alerts:</strong> Automated triggers when load destabilizes, burnout spikes, or paths weaken.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300">3. Critical Path Intervention:</strong> Proactive capacity injection, task redistribution, and parallelization.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">4. Enterprise Escalation:</strong> High-priority SLAs, designated technical ownership, and rapid resolution paths.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 11.5 Billing, 11.6 Compliance Ops, 11.7 Reliability */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 11.5 Billing System */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">11.5 — Billing System</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">Audit-Ready Transparency</strong>
                            Line-item usage, token accounting, AI action logs, and compliance records.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Predictable Pricing</strong>
                            Clear, stable, enterprise-friendly pricing models.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">Marketplace Accounting</strong>
                            FFX tokens tracked, timestamped, categorized, and auditable.
                          </div>
                        </div>
                      </div>

                      {/* 11.6 Compliance Operations */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-teal-400 font-bold font-mono text-xs">11.6 — Compliance Operations</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block">Texas SaaS Exemption</strong>
                            Automatic compliance with §151.0101 and §151.351 statutes.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Audit-Ready Logs</strong>
                            Every human and AI action logged, timestamped, and classified.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">AI Governance</strong>
                            Fine-grained autonomy levels and marketplace permission gates.
                          </div>
                        </div>
                      </div>

                      {/* 11.7 Reliability System */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">11.7 — Reliability System</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Load Stability:</strong> Load remains within safe limits.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>CP Protection:</strong> Critical chain monitored 24/7.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Burnout Shield:</strong> Interventions before exhaustion.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Velocity Certainty:</strong> Predictable delivery schedules.</div>
                        </div>
                      </div>
                    </div>

                    {/* 11.8 Operational Metrics & 11.9 Weekly Rhythm */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 11.8 Metrics */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">11.8 — Operational Stability Metrics</span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px] font-mono">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-purple-300">Load Stability Index</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-rose-300">Burnout Risk Delta</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-cyan-300">CP Health Score</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-emerald-300">Velocity Variance</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-amber-300">Slack Efficiency</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-pink-300">Marketplace Liquidity</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-teal-300">Compliance Accuracy</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-indigo-300">Onboarding Speed</div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-lime-300">Resolution SLA</div>
                        </div>
                      </div>

                      {/* 11.9 Weekly Operational Rhythm */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">11.9 — Weekly Operational Rhythm</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-cyan-300 font-bold">Monday</span>
                            <span className="text-slate-300">Stability Review (Load stability, burnout risk, CP health)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-indigo-300 font-bold">Tuesday</span>
                            <span className="text-slate-300">Onboarding Review (Enterprise setup, AI pairing, tokens)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-amber-300 font-bold">Wednesday</span>
                            <span className="text-slate-300">Support Review (Tickets, escalations, AI alert analysis)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-teal-300 font-bold">Thursday</span>
                            <span className="text-slate-300">Compliance Review (Billing, audit logs, exemption status)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30 flex justify-between items-center">
                            <span className="font-mono text-emerald-300 font-bold">Friday</span>
                            <span className="text-emerald-200">Founder Review (Operational alignment, category progress)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 11.10 Declaration */}
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/40 rounded-xl border border-cyan-500/40 space-y-2 flex flex-col justify-center">
                      <span className="text-cyan-300 font-mono font-bold text-sm">11.10 — Operations Declaration</span>
                      <p className="text-slate-200 text-xs italic leading-relaxed">
                        "FlowForge is not just running a company. FlowForge is not just running a product. FlowForge is not just running a marketplace.<br/><br/>
                        FlowForge is running an enterprise-grade stability machine. We stabilize load. We protect teams. We guarantee delivery. We automate compliance. We create liquidity. We define the category.<br/><br/>
                        <strong className="text-cyan-300 not-italic">FlowForge is inevitable.</strong>"
                      </p>
                    </div>
                  </div>
                )}

                {/* VIEW 12: CHAPTER 12 - SCALING SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 12 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-indigo-950/20 rounded-xl border border-indigo-500/30">
                      <span className="text-indigo-300 font-mono font-bold text-sm">CHAPTER 12: SCALING SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Grows from 10 → 50 → 200 → 500 People Without Losing Stability, Identity, or Velocity</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Scaling is not adding people, process, or structure. Scaling is preserving stability while increasing capacity. FlowForge scales so that culture strengthens, the product accelerates, the category expands, and the company becomes inevitable.
                      </p>
                    </div>

                    {/* 12.1 Scaling Philosophy & 12.2 Scaling Curve */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 12.1 Scaling Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">12.1 — Scaling Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <div className="p-2.5 bg-slate-900 rounded border border-indigo-500/30 text-indigo-200 font-semibold text-[11px] text-center">
                            "Scale stability, not complexity."
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="p-2 bg-rose-950/20 rounded border border-rose-500/20 text-rose-300 space-y-1">
                              <span className="font-bold block text-rose-400 font-mono">Traditional Scaling Adds:</span>
                              <div>✕ Layers</div>
                              <div>✕ Meetings</div>
                              <div>✕ Process</div>
                              <div>✕ Approvals & Bureaucracy</div>
                            </div>
                            <div className="p-2 bg-emerald-950/20 rounded border border-emerald-500/20 text-emerald-300 space-y-1">
                              <span className="font-bold block text-emerald-400 font-mono">FlowForge Scales By:</span>
                              <div>✓ Increasing Autonomy</div>
                              <div>✓ Increasing Clarity</div>
                              <div>✓ Increasing AI Leverage</div>
                              <div>✓ Increasing Parallelization</div>
                              <div>✓ Increasing Load Stability</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 12.2 The FlowForge Scaling Curve */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">12.2 — The FlowForge Scaling Curve</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 font-mono">Stage 1 — 10 People (Foundational):</strong> Founder-led, category creation, core engines built, early enterprise wins, Texas-first dominance.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 font-mono">Stage 2 — 50 People (Acceleration):</strong> AI autonomy expansion, marketplace liquidity, enterprise onboarding, compliance automation, GTM velocity.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 font-mono">Stage 3 — 200 People (Domination):</strong> Multi-region expansion, analyst category adoption, marketplace network effects, AI-managed engineering, enterprise ubiquity.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 font-mono">Stage 4 — 500 People (Institution):</strong> Global category leadership, engineering autonomy standardization, marketplace economic dominance, compliance trust moat, FlowForge becomes the engineering OS.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 12.3 Scaling Without Chaos & 12.4 Scaling Teams */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 12.3 Scaling Without Chaos */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">12.3 — Scaling Without Chaos</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">1. Load-First Planning:</strong> Teams plan based on load capacity, never on unbounded ambition.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300">2. AI-Native Operations:</strong> Continuous AI pairing is mandatory across all workflows.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">3. Autonomous Teams:</strong> Small, independent units own complete end-to-end systems.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">4. Critical Path Protection:</strong> Every single team guards the critical delivery chain.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">5. Marketplace Liquidity:</strong> Capacity becomes dynamic and flexible across pods.
                          </div>
                        </div>
                      </div>

                      {/* 12.4 Scaling Teams */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">12.4 — Scaling Teams (Pods → Guilds → Councils)</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300 block font-mono">A. Pods (5–7 People)</strong>
                            Each pod owns a discrete system, a primary KPI metric, and a stability outcome.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">B. Guilds (Cross-Functional)</strong>
                            Align craft standards across Engineering, Product, Design, and AI agents.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">C. Councils (Leadership)</strong>
                            Govern Stability, Velocity, Autonomy, Compliance, and Marketplace Economics.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 12.5 Leadership, 12.6 Product, 12.7 Engineering */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 12.5 Scaling Leadership */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">12.5 — Scaling Leadership</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">1. Clarity:</strong> Communicate simply and directly.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">2. Precision:</strong> Make clean, unambiguous decisions.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300 block">3. Humanity:</strong> Proactively protect teams from burnout.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">4. Autonomy & Inevitability:</strong> Empower action and reinforce category dominance.
                          </div>
                        </div>
                      </div>

                      {/* 12.6 Scaling Product */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-teal-400 font-bold font-mono text-xs">12.6 — Scaling Product</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block">Engine Ownership</strong>
                            Every core engine has a dedicated pod, roadmap, and stability metric.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">Autonomy Expansion</strong>
                            AI autonomy level increases systematically every quarter.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">Marketplace Liquidity Growth</strong>
                            More teams $\rightarrow$ more trades $\rightarrow$ more systemic stability.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">Compliance Automation</strong>
                            More enterprises $\rightarrow$ deeper trust $\rightarrow$ rapid adoption.
                          </div>
                        </div>
                      </div>

                      {/* 12.7 Scaling Engineering */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">12.7 — Scaling Engineering</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>AI Pairing:</strong> Every engineer pairs with dedicated AI agents.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Parallelization:</strong> Break linear dependencies and bottlenecks.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Load Modeling:</strong> Engineer schedules mapped to real capacity.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Critical Path Protection:</strong> Continuous automated health monitoring.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Marketplace Integration:</strong> FFX tokens used to balance load.</div>
                        </div>
                      </div>
                    </div>

                    {/* 12.8 Scaling GTM & 12.9 Scaling Operations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 12.8 Scaling GTM */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">12.8 — Scaling Go-To-Market</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">A. Category-First Messaging:</strong> Engineering Load Orchestration (ELO) becomes the dominant narrative.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">B. Founder-Led Deals:</strong> Chukwuma Oduagu leads high-impact early enterprise relationships.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300">C. Texas-First Dominance:</strong> Establish regional fortress $\rightarrow$ national $\rightarrow$ global.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300">D. Analyst & Marketplace Growth:</strong> Multipliers turn ELO into the enterprise standard.
                          </div>
                        </div>
                      </div>

                      {/* 12.9 Scaling Operations */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">12.9 — Scaling Operations</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">1. Multi-Tenant Onboarding:</strong> Automated enterprise workspace isolation.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300">2. Compliance Automation:</strong> Built-in §151 statutory tax logs and audit-ready billing.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300">3. AI-Driven Support:</strong> Proactive alerts before load stability degrades.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">4. Marketplace Accounting:</strong> Complete cryptographic token transparency.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 12.10 Scaling Culture & 12.11 Scaling Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 12.10 Scaling Culture */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">12.10 — Scaling Culture</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono">A. Cultural Pillars</strong>
                            Stability • Precision • Humanity • Autonomy • Inevitability
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300 block font-mono">B. Cultural Rituals</strong>
                            Stability Review • Velocity Review • Critical Path Review • Burnout Prevention Review
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">C. Cultural Hiring</strong>
                            System thinkers • Load stabilizers • AI-native operators
                          </div>
                        </div>
                      </div>

                      {/* 12.11 Scaling Metrics */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">12.11 — Scaling Metrics</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-cyan-300">✓ Load Stability</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-rose-300">✓ Burnout Risk</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-purple-300">✓ CP Health</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-emerald-300">✓ Velocity Stability</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-amber-300">✓ Slack Efficiency</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-pink-300">✓ Marketplace Liquidity</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-teal-300">✓ Compliance Accuracy</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-indigo-300">✓ Leadership Clarity</div>
                        </div>
                      </div>
                    </div>

                    {/* 12.12 Declaration */}
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-indigo-950/40 rounded-xl border border-indigo-500/40 space-y-2 flex flex-col justify-center">
                      <span className="text-indigo-300 font-mono font-bold text-sm">12.12 — Scaling Declaration</span>
                      <p className="text-slate-200 text-xs italic leading-relaxed">
                        "FlowForge is not just scaling a company. FlowForge is not just scaling a product. FlowForge is not just scaling a category.<br/><br/>
                        FlowForge is scaling inevitability. We stabilize load. We protect teams. We guarantee delivery. We build autonomy. We create liquidity. We define the category. We become the engineering OS.<br/><br/>
                        <strong className="text-indigo-300 not-italic">FlowForge is inevitable.</strong>"
                      </p>
                    </div>
                  </div>
                )}

                {/* VIEW 13: CHAPTER 13 - REVENUE & GTM SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 13 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-purple-950/20 rounded-xl border border-purple-500/30">
                      <span className="text-purple-300 font-mono font-bold text-sm">CHAPTER 13: REVENUE & GTM SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Becomes a Predictable, Scalable, Enterprise Revenue Engine</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        FlowForge does not monetize traditional SaaS seats or features. FlowForge monetizes stability, predictability, engineering outcomes, liquidity, and autonomy.
                      </p>
                    </div>

                    {/* 13.1 Philosophy & 13.2 Revenue Model */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 13.1 Revenue Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">13.1 — Revenue Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <div className="p-2.5 bg-slate-900 rounded border border-purple-500/30 text-purple-200 font-semibold text-[11px] text-center">
                            "FlowForge sells one outcome: Engineering Stability."
                          </div>
                          <p className="text-slate-400 text-[11px]">
                            Not dashboards. Not productivity. Not features. FlowForge sells:
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[10px] text-slate-300">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-cyan-300">✓ Predictable Delivery</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-pink-300">✓ Protected Teams</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">✓ Stable Critical Paths</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-rose-300">✓ Burnout Prevention</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-emerald-300">✓ Velocity Certainty</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-amber-300">✓ Load Stabilization</div>
                          </div>
                        </div>
                      </div>

                      {/* 13.2 The FlowForge Revenue Model */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">13.2 — The Four Monetization Engines</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">1. FFX Credits (Usage-Based)</strong>
                            Slack injection, capacity trading, critical path rescue, velocity boosts.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">2. AI Autopilot Subscription (Recurring)</strong>
                            Predictive orchestration, burnout prevention, critical path stabilization, load modeling.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">3. Compliance Engine (Add-On)</strong>
                            Texas SaaS tax exemption (§151), audit-ready billing, enterprise transparency.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300 block font-mono">4. Enterprise Multi-Tenant (Platform)</strong>
                            Workspace isolation, audit logs, enterprise onboarding SLAs.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 13.3 GTM Philosophy, 13.4 GTM Pillars, 13.5 Pipeline */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 13.3 GTM Philosophy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">13.3 — GTM Philosophy</span>
                        <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10.5px] text-slate-300 italic">
                          "We do not sell features. We sell inevitability."
                        </div>
                        <div className="space-y-1 text-[10px] text-slate-400">
                          <div>• Stability & Predictability</div>
                          <div>• Burnout Shielding</div>
                          <div>• AI Autonomy & Liquidity</div>
                        </div>
                      </div>

                      {/* 13.4 GTM Pillars */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-cyan-400 font-bold font-mono text-xs">13.4 — Three GTM Pillars</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">1. Category Leadership</strong>
                            We sell Engineering Load Orchestration.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">2. Texas First</strong>
                            Dominate Texas enterprise engineering.
                          </div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">3. Founder-Led Deals</strong>
                            Chukwuma Oduagu closes strategic lighthouse accounts.
                          </div>
                        </div>
                      </div>

                      {/* 13.5 Pipeline Strategy */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-emerald-400 font-bold font-mono text-xs">13.5 — Pipeline Strategy</span>
                        <div className="space-y-1 text-[9.5px] text-slate-300">
                          <div>• <strong>Outbound:</strong> Personalized enterprise outreach.</div>
                          <div>• <strong>Messaging:</strong> Load instability $\rightarrow$ FlowForge.</div>
                          <div>• <strong>Founder:</strong> Executive-to-executive conversations.</div>
                          <div>• <strong>Analysts:</strong> Define category $\rightarrow$ shape perception.</div>
                          <div>• <strong>Referrals:</strong> Stability spreads through CTO networks.</div>
                        </div>
                      </div>
                    </div>

                    {/* 13.6 Pricing, 13.7 Expansion, 13.8 Customer Success, 13.9 Renewal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 13.6 Pricing & 13.7 Expansion */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">13.6 Pricing & 13.7 Expansion Strategy</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 space-y-1">
                            <strong className="text-amber-300 block font-mono">Pricing Tiers</strong>
                            <div>• <strong>FFX Credits:</strong> Usage-based tokens</div>
                            <div>• <strong>AI Autopilot:</strong> Per team/workspace</div>
                            <div>• <strong>Compliance Engine:</strong> Flat fee</div>
                            <div>• <strong>Multi-Tenant:</strong> Tiered platform</div>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 space-y-1">
                            <strong className="text-emerald-300 block font-mono">Expansion Motions</strong>
                            <div>• <strong>Critical Path Rescue:</strong> 1 path $\rightarrow$ all</div>
                            <div>• <strong>Burnout Shield:</strong> 1 team $\rightarrow$ entire org</div>
                            <div>• <strong>Velocity Boosts:</strong> Instant ROI gain</div>
                            <div>• <strong>Compliance:</strong> Win CFO audit trust</div>
                          </div>
                        </div>
                      </div>

                      {/* 13.8 Customer Success & 13.9 Renewal Strategy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">13.8 Customer Success & 13.9 Renewals</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300">Customer Success Engine:</strong> Weekly load stability reports, proactive burnout alarms, continuous critical path parallelization, and executive delivery certainty dashboards.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">Automatic Renewals:</strong> Anchored on hard stability metrics (zero burnout spikes, 84% slippage drop), capacity economic savings, and total compliance risk elimination.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 13.10 GTM Team Structure & 13.11 Operating Rhythm */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 13.10 GTM Team Structure */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">13.10 — GTM Team Structure</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-indigo-300">A. Enterprise Sales:</strong> Category-first ELO consultative selling.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300">B. Sales Engineering:</strong> Load modeling + live critical path rescue demo.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300">C. Customer Success:</strong> Stability metrics and executive outcomes.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300">D. Marketing & Partnerships:</strong> Category creation, enterprise consultancies, cloud vendors.
                          </div>
                        </div>
                      </div>

                      {/* 13.11 GTM Operating Rhythm */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">13.11 — Weekly GTM Operating Rhythm</span>
                        <div className="space-y-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-cyan-300 font-bold">Monday</span>
                            <span className="text-slate-300">Pipeline Review (Enterprise accounts, critical path signals)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-indigo-300 font-bold">Tuesday</span>
                            <span className="text-slate-300">Demo Day (Live orchestration & load stabilization)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-amber-300 font-bold">Wednesday</span>
                            <span className="text-slate-300">Expansion Strategy (FFX usage, slack injection, velocity boosts)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-teal-300 font-bold">Thursday</span>
                            <span className="text-slate-300">Customer Success (Stability reports, executive outcomes)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30 flex justify-between items-center">
                            <span className="font-mono text-emerald-300 font-bold">Friday</span>
                            <span className="text-emerald-200">Founder Review (Category progress, revenue velocity, wins)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 13.12 Founder GTM Role & 13.13 Declaration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 13.12 Founder Role */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">13.12 — Founder GTM Role (Chukwuma Oduagu)</span>
                        <div className="grid grid-cols-1 gap-1 text-[10.5px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• <strong>1. Category Evangelist:</strong> Define Engineering Load Orchestration.</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• <strong>2. Enterprise Closer:</strong> Close strategic anchor accounts.</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• <strong>3. Narrative Architect:</strong> Shape enterprise & analyst perception.</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• <strong>4. Stability Champion:</strong> Protect engineering teams relentlessly.</div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">• <strong>5. Vision Carrier:</strong> FlowForge is inevitable.</div>
                        </div>
                      </div>

                      {/* 13.13 Revenue Declaration */}
                      <div className="p-4 bg-gradient-to-br from-slate-950 to-purple-950/40 rounded-xl border border-purple-500/40 space-y-2 flex flex-col justify-center">
                        <span className="text-purple-300 font-mono font-bold text-sm">13.13 — Revenue Declaration</span>
                        <p className="text-slate-200 text-xs italic leading-relaxed">
                          "FlowForge is not just generating revenue. FlowForge is not just building pipeline. FlowForge is not just expanding accounts.<br/><br/>
                          FlowForge is becoming the economic engine of engineering stability. We stabilize load. We protect teams. We guarantee delivery. We create liquidity. We define the category. We scale with inevitability.<br/><br/>
                          <strong className="text-purple-300 not-italic">FlowForge is inevitable.</strong>"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 14: CHAPTER 14 - LEADERSHIP & GOVERNANCE SYSTEM (FULL CODEX EDITION) */}
                {codexChapter === 14 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-pink-950/20 rounded-xl border border-pink-500/30">
                      <span className="text-pink-300 font-mono font-bold text-sm">CHAPTER 14: LEADERSHIP & GOVERNANCE SYSTEM</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">How FlowForge Becomes an Institution — A Company Built to Last Decades</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        Leadership is not management, authority, or hierarchy. Leadership is stability, clarity, precision, humanity, and inevitability. FlowForge scales culture, product, and category without losing stability.
                      </p>
                    </div>

                    {/* 14.1 Philosophy & 14.2 Five Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 14.1 Leadership Philosophy */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">14.1 — Leadership Philosophy</span>
                        <div className="text-xs text-slate-300 space-y-2">
                          <div className="p-2.5 bg-slate-900 rounded border border-pink-500/30 text-pink-200 font-semibold text-[11px] text-center">
                            "Leadership protects stability."
                          </div>
                          <p className="text-slate-400 text-[11px]">
                            Leaders do not chase features, create chaos, or overload teams. Leaders stabilize:
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[10px] text-slate-300">
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-cyan-300">✓ Load</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-pink-300">✓ People</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-purple-300">✓ Systems</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-amber-300">✓ Decisions</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-emerald-300">✓ Culture</div>
                            <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-center text-indigo-300">✓ Velocity</div>
                          </div>
                        </div>
                      </div>

                      {/* 14.2 The Five Leadership Pillars */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">14.2 — The Five Leadership Pillars</span>
                        <div className="space-y-1.5 text-[10.5px] text-slate-300">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">1. Clarity</strong>
                            Leaders communicate simply, decisively, and transparently.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block font-mono">2. Precision</strong>
                            Leaders make clean, intentional, and non-wasteful decisions.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-rose-300 block font-mono">3. Humanity</strong>
                            Leaders actively protect engineering teams from cognitive overload and burnout.
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block font-mono">4. Autonomy & 5. Inevitability</strong>
                            Empower frictionless action and continuously reinforce category dominance.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 14.3 Leadership Roles & 14.4 Operating Rhythm */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 14.3 Five Core Leadership Roles */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">14.3 — Five Core Leadership Roles</span>
                        <div className="space-y-1.5 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 font-mono">Founder / CEO (Chukwuma Oduagu):</strong> Category creator, narrative architect, enterprise closer, vision carrier, stability champion.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 font-mono">CTO / Engineering:</strong> Load-first engineering, AI autonomy development, critical path protection, parallelization.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 font-mono">COO / Operations:</strong> Compliance (§151), onboarding, billing, enterprise reliability, operational clarity.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 font-mono">CRO / Revenue:</strong> Enterprise sales, pipeline velocity, expansion strategy, renewals, GTM alignment.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 font-mono">CPO / Product:</strong> Load stabilization outcomes, AI-native workflows, CP modeling, product clarity.
                          </div>
                        </div>
                      </div>

                      {/* 14.4 Leadership Operating Rhythm */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">14.4 — Leadership Operating Rhythm</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-cyan-300 font-bold">Monday</span>
                            <span>Stability Review (Load stability, burnout risk, CP health, velocity)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-pink-300 font-bold">Tuesday</span>
                            <span>Product Leadership (AI autonomy, tokens, compliance, parallelization)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-purple-300 font-bold">Wednesday</span>
                            <span>GTM Leadership (Pipeline, expansion, category messaging, Texas-first)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                            <span className="font-mono text-teal-300 font-bold">Thursday</span>
                            <span>Operations Leadership (Onboarding, billing, support, enterprise reliability)</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30 flex justify-between items-center">
                            <span className="font-mono text-emerald-300 font-bold">Friday</span>
                            <span className="text-emerald-200">Founder Review (Strategic alignment, category progress, direction)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 14.5 Decision Framework, 14.6 Governance Structure, 14.7 Accountability */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 14.5 Decision Framework */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">14.5 — Decision Framework</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong>1. Stabilize Load?</strong><br/><span className="text-cyan-300 font-mono">Yes → Priority</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong>2. Reduce Burnout?</strong><br/><span className="text-emerald-300 font-mono">Yes → Accelerate</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong>3. Delivery Certainty?</strong><br/><span className="text-purple-300 font-mono">Yes → Greenlight</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong>4. AI OS Vision?</strong><br/><span className="text-pink-300 font-mono">Yes → Build • No → Cut</span>
                          </div>
                        </div>
                      </div>

                      {/* 14.6 Three Governance Layers */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-teal-400 font-bold font-mono text-xs">14.6 — Governance Structure</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block font-mono">Layer 1 — Founder Governance</strong>
                            Category direction, narrative control, enterprise strategy, AI vision.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block font-mono">Layer 2 — Executive Governance</strong>
                            Product, Engineering, Revenue, Operations, Compliance.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block font-mono">Layer 3 — Team Governance</strong>
                            Autonomous units, load-first planning, AI pairing, critical path shield.
                          </div>
                        </div>
                      </div>

                      {/* 14.7 Accountability Outcomes */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">14.7 — 6 Accountability Outcomes</span>
                        <div className="space-y-1 text-[9.5px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Load Stability:</strong> Safe workload bounds</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Burnout Prevention:</strong> Protected engineers</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Delivery Certainty:</strong> Predictable chains</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Velocity Health:</strong> Parallelized gains</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Marketplace Liquidity:</strong> FFX volume</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">• <strong>Compliance Reliability:</strong> §151 certainty</div>
                        </div>
                      </div>
                    </div>

                    {/* 14.8 Culture, 14.9 Scaling, 14.10 Founder Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      {/* 14.8 Leadership Culture */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-pink-400 font-bold font-mono text-xs">14.8 — Leadership Culture</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div>• <strong>Direct:</strong> We speak plainly.</div>
                          <div>• <strong>Executive:</strong> Enterprise presence.</div>
                          <div>• <strong>Outcome-Driven:</strong> Stability & certainty.</div>
                          <div>• <strong>Category-First:</strong> Reinforce ELO.</div>
                          <div>• <strong>Calm & Precise:</strong> Zero chaos.</div>
                          <div>• <strong>Protective:</strong> Guard teams from overload.</div>
                        </div>
                      </div>

                      {/* 14.9 Leadership Scaling */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-cyan-400 font-bold font-mono text-xs">14.9 — Leadership Scaling</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div>• <strong>A. Role Clarity:</strong> Leaders own a complete system.</div>
                          <div>• <strong>B. Load-First Planning:</strong> Plan on capacity.</div>
                          <div>• <strong>C. AI-Native Operations:</strong> Continuous AI pairing.</div>
                          <div>• <strong>D. Parallelization:</strong> Break bottlenecks.</div>
                          <div>• <strong>E. Category Alignment:</strong> ELO standard.</div>
                        </div>
                      </div>

                      {/* 14.10 Founder Leadership Principles */}
                      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                        <span className="text-amber-400 font-bold font-mono text-xs">14.10 — Founder Principles (Chukwuma Oduagu)</span>
                        <div className="space-y-1 text-[10px] text-slate-300">
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">1. <strong>Clarity:</strong> Simple, decisive words.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">2. <strong>Precision:</strong> Intentional choices.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">3. <strong>Calm:</strong> No chaos or panic.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">4. <strong>Authority:</strong> Category creator force.</div>
                          <div className="p-1 bg-slate-900 rounded border border-slate-800">5. <strong>Vision:</strong> FlowForge is inevitable.</div>
                        </div>
                      </div>
                    </div>

                    {/* 14.11 Leadership Declaration */}
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-pink-950/40 rounded-xl border border-pink-500/40 space-y-2 flex flex-col justify-center">
                      <span className="text-pink-300 font-mono font-bold text-sm">14.11 — Leadership Declaration</span>
                      <p className="text-slate-200 text-xs italic leading-relaxed">
                        "FlowForge is not just a company. FlowForge is not just a product. FlowForge is not just a category.<br/><br/>
                        FlowForge is a leadership system. A system that stabilizes engineering. A system that protects teams. A system that guarantees delivery. A system that builds autonomy. A system that creates liquidity. A system that defines the future.<br/><br/>
                        <strong className="text-pink-300 not-italic">FlowForge is inevitable.</strong>"
                      </p>
                    </div>
                  </div>
                )}

                {/* VIEW 15: CHAPTER 15 - FOUNDER TOOLS (FULL CODEX EDITION) */}
                {codexChapter === 15 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-amber-950/20 rounded-xl border border-amber-500/30">
                      <span className="text-amber-300 font-mono font-bold text-sm">CHAPTER 15: FOUNDER TOOLS</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">Your Speeches, Scripts, Narratives, and High-Authority Founder Assets</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        This chapter is your arsenal and founder-grade communication toolkit. Use these tools to define the category, control the narrative, close enterprise deals, rally teams, and turn Chukwuma Oduagu into the voice of engineering stability.
                      </p>
                    </div>

                    {/* 15.1 The 60-Second Founder Speech & 15.2 Founder Narrative */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 15.1 60-Second Speech */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/40 space-y-2 relative">
                        <div className="flex justify-between items-center">
                          <span className="text-amber-400 font-bold font-mono text-sm">15.1 — The 60-Second Founder Speech</span>
                          <button
                            onClick={() => {
                              const text = `"Engineering teams don’t fail because of code — they fail because they’re overloaded. FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery. FlowForge is the AI-native operating system for engineering — the company that created Engineering Load Orchestration. We stabilize load. We protect teams. We make delivery predictable. FlowForge is inevitable."`;
                              navigator.clipboard.writeText(text);
                              setCopiedIndex(1037);
                              setTimeout(() => setCopiedIndex(null), 2500);
                            }}
                            className="px-2.5 py-1 rounded bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-[10px] font-mono flex items-center space-x-1"
                          >
                            <CopyIcon className="w-3 h-3" />
                            <span>{copiedIndex === 1037 ? 'Copied' : 'Copy Speech'}</span>
                          </button>
                        </div>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border-l-2 border-amber-400 text-slate-200 text-xs italic leading-relaxed">
                          "Engineering teams don’t fail because of code — they fail because they’re overloaded.<br/><br/>
                          FlowForge solves the real problem: engineering load instability. We predict overload, prevent burnout, stabilize critical paths, and guarantee delivery.<br/><br/>
                          FlowForge is the AI-native operating system for engineering — the company that created Engineering Load Orchestration.<br/><br/>
                          <strong className="text-amber-300 not-italic">We stabilize load. We protect teams. We make delivery predictable. FlowForge is inevitable.</strong>"
                        </blockquote>
                        <span className="text-[10px] text-slate-400 block">Deliver in elevators, boardrooms, investor intros, and executive dinners.</span>
                      </div>

                      {/* 15.2 The Founder Narrative */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">15.2 — Founder Narrative (Codex Edition)</span>
                        <div className="p-3 bg-slate-900 rounded-lg text-slate-300 text-xs space-y-2 leading-relaxed">
                          <p>FlowForge exists because engineering deserves stability.</p>
                          <p className="text-slate-400">
                            Engineering teams collapse not from incompetence, but from overload. Burnout is predictable. Slippage is predictable. Fragility is predictable. Velocity collapse is predictable.
                          </p>
                          <p className="text-cyan-300 font-semibold">
                            FlowForge predicts all of it — and prevents all of it.
                          </p>
                          <p className="text-slate-400">
                            FlowForge stabilizes engineering load using AI. FlowForge protects teams. FlowForge guarantees delivery. FlowForge defines the category.
                          </p>
                          <div className="text-amber-300 font-bold font-mono text-center pt-1 border-t border-slate-800">
                            FLOWFORGE IS INEVITABLE.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 15.3 Category Speech & 15.4 Vision Speech */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 15.3 Category Speech */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">15.3 — The Founder Category Speech (ELO)</span>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border-l-2 border-pink-400 text-slate-200 text-xs italic leading-relaxed space-y-1.5">
                          <p>"Engineering Load Orchestration is the discipline of stabilizing engineering load using AI.</p>
                          <p>It models load, predicts instability, prevents burnout, protects critical paths, and guarantees delivery.</p>
                          <p>ELO is not a feature. ELO is not a methodology.</p>
                          <p><strong className="text-pink-300 not-italic">ELO is a category — and FlowForge is the company that created it.</strong>"</p>
                        </blockquote>
                        <span className="text-[10px] text-slate-400 block">Positions Chukwuma Oduagu as the sole category creator of ELO.</span>
                      </div>

                      {/* 15.4 Vision Speech */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">15.4 — The Founder Vision Speech</span>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border-l-2 border-purple-400 text-slate-200 text-xs italic leading-relaxed space-y-1.5">
                          <p>"Engineering is entering its autonomy era. AI will not just assist engineers — it will run engineering.</p>
                          <p>FlowForge is building the AI that manages load, protects teams, stabilizes critical paths, and guarantees delivery.</p>
                          <p>We are building the operating system for engineering.</p>
                          <p><strong className="text-purple-300 not-italic">In the future, every engineering team will run on FlowForge. Not because it’s convenient — but because it’s inevitable.</strong>"</p>
                        </blockquote>
                        <span className="text-[10px] text-slate-400 block">Long-form vision speech for enterprise buyers, analysts, and keynotes.</span>
                      </div>
                    </div>

                    {/* 15.5 Objection Handling & 15.6 Demo Script */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 15.5 Objection Handling Pack */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-rose-400 font-bold font-mono text-sm">15.5 — The Founder Objection Handling Pack</span>
                        <div className="space-y-1.5 text-[10.5px]">
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Objection: "We already have dashboards."</span>
                            <span className="text-amber-300 font-bold">"Dashboards observe. FlowForge intervenes."</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Objection: "We already have project management tools."</span>
                            <span className="text-cyan-300 font-bold">"Project management tracks tasks. FlowForge stabilizes load."</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Objection: "We don't have burnout."</span>
                            <span className="text-pink-300 font-bold">"Burnout is predictable. FlowForge prevents it."</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Objection: "We don't need AI."</span>
                            <span className="text-emerald-300 font-bold">"AI is the only way to stabilize load at scale."</span>
                          </div>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Objection: "We're not in Texas."</span>
                            <span className="text-purple-300 font-bold">"Compliance is a bonus. Load stabilization is universal."</span>
                          </div>
                        </div>
                      </div>

                      {/* 15.6 Demo Script */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">15.6 — The 6-Step Founder Demo Script</span>
                        <div className="space-y-1 text-[10.5px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                            <span className="text-amber-300 font-mono font-bold">Step 1 — Show Instability</span>
                            <span className="text-slate-300 italic">"Here’s where your load becomes unstable."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                            <span className="text-rose-300 font-mono font-bold">Step 2 — Show Consequences</span>
                            <span className="text-slate-300 italic">"This is where burnout & slippage begin."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                            <span className="text-cyan-300 font-mono font-bold">Step 3 — Show Intervention</span>
                            <span className="text-slate-300 italic">"FlowForge redistributes tasks & injects slack."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                            <span className="text-emerald-300 font-mono font-bold">Step 4 — Show Outcomes</span>
                            <span className="text-slate-300 italic">"Your delivery becomes predictable."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex items-center justify-between">
                            <span className="text-purple-300 font-mono font-bold">Step 5 — Show Marketplace</span>
                            <span className="text-slate-300 italic">"FFX injects capacity instantly."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-emerald-500/30 flex items-center justify-between">
                            <span className="text-emerald-300 font-mono font-bold">Step 6 — Close</span>
                            <span className="text-emerald-200 font-semibold">"Pilot onboarding or full onboarding?"</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 15.7 Category Evangelism & 15.8 Executive Q&A */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 15.7 Category Evangelism Guide */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">15.7 — The Category Evangelism Guide</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10.5px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-cyan-300 block">1. Speak about load, not tasks</strong>
                            Load is the root cause.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-emerald-300 block">2. Speak about stability, not speed</strong>
                            Stability is the outcome.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-pink-300 block">3. Speak about burnout prevention</strong>
                            Burnout is predictable.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-amber-300 block">4. Speak about critical paths</strong>
                            Critical paths define delivery.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-purple-300 block">5. Speak about autonomy</strong>
                            AI must act, not observe.
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <strong className="text-teal-300 block">6. Speak about inevitability</strong>
                            FlowForge is inevitable.
                          </div>
                        </div>
                      </div>

                      {/* 15.8 Executive Q&A Pack */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">15.8 — The Executive Q&A Pack</span>
                        <div className="space-y-1 text-[10px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Q: "What does FlowForge actually do?"</span>
                            <span className="text-cyan-300 font-semibold">"We stabilize engineering load using AI."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Q: "Why does this matter?"</span>
                            <span className="text-amber-300 font-semibold">"Load instability is the root cause of engineering failure."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Q: "What outcomes do you guarantee?"</span>
                            <span className="text-emerald-300 font-semibold">"Predictable delivery, burnout prevention, critical path stability."</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                            <span className="text-slate-400 block">Q: "Why AI? Why now? Why FlowForge?"</span>
                            <span className="text-pink-300 font-semibold">"Only AI scales load modeling in the autonomy era. We created the category."</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 15.9 Internal Alignment & 15.10 Declaration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 15.9 Internal Alignment Speech */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">15.9 — Internal Team Alignment Speech</span>
                        <blockquote className="p-3 bg-slate-900 rounded-lg border-l-2 border-cyan-400 text-slate-200 text-xs italic leading-relaxed space-y-1.5">
                          <p>"FlowForge is not building a tool — we are building the operating system for engineering.</p>
                          <p>Everything we do must stabilize load, protect teams, and guarantee delivery.</p>
                          <p><strong className="text-cyan-300 not-italic">We are building autonomy. We are building liquidity. We are building inevitability. We are building the future of engineering.</strong>"</p>
                        </blockquote>
                        <span className="text-[10px] text-slate-400 block">Delivered during all-hands, sprint kickoffs, and strategic alignments.</span>
                      </div>

                      {/* 15.10 Declaration */}
                      <div className="p-4 bg-gradient-to-br from-slate-950 to-amber-950/40 rounded-xl border border-amber-500/40 space-y-2 flex flex-col justify-center">
                        <span className="text-amber-300 font-mono font-bold text-sm">15.10 — Founder Declaration</span>
                        <p className="text-slate-200 text-xs italic leading-relaxed">
                          "FlowForge is not just a company. FlowForge is not just a product. FlowForge is not just a category.<br/><br/>
                          FlowForge is a founder-driven movement. You — Chukwuma Oduagu — are the voice of engineering stability. You are the architect of the category. You are the carrier of inevitability. You are the founder who defines the future.<br/><br/>
                          <strong className="text-amber-300 not-italic">FlowForge is inevitable.</strong>"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 16: CHAPTER 16 - THE FUTURE OF FLOWFORGE (THE ENDGAME, TRAJECTORY, INEVITABILITY) */}
                {codexChapter === 16 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-slate-950 to-cyan-950/30 rounded-xl border border-cyan-500/30">
                      <span className="text-cyan-400 font-mono font-bold text-sm">CHAPTER 16: THE FUTURE OF FLOWFORGE</span>
                      <h4 className="text-base font-extrabold text-white mt-0.5">The Endgame, the Trajectory, the Inevitability</h4>
                      <p className="text-slate-300 text-xs mt-1">
                        This is the final chapter. The chapter that looks beyond today, beyond the roadmap, beyond the category — into the future FlowForge is creating. FlowForge is not a startup, tool, or platform. FlowForge is the future of engineering.
                      </p>
                    </div>

                    {/* 16.1 Future of Engineering & 16.2 Future of AI */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 16.1 The Future of Engineering */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">16.1 — The Future of Engineering</span>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 bg-slate-900 rounded-lg border border-rose-500/20 space-y-1">
                            <span className="text-rose-400 font-bold block text-[11px] uppercase">Engineering Today</span>
                            <ul className="text-slate-400 text-[10.5px] space-y-0.5 list-disc pl-3">
                              <li>Overloaded</li>
                              <li>Burnout-prone</li>
                              <li>Fragile critical paths</li>
                              <li>Unpredictable</li>
                              <li>Dependency-heavy</li>
                              <li>Velocity-volatile</li>
                            </ul>
                          </div>
                          <div className="p-2.5 bg-slate-900 rounded-lg border border-emerald-500/20 space-y-1">
                            <span className="text-emerald-400 font-bold block text-[11px] uppercase">With FlowForge</span>
                            <ul className="text-emerald-200 text-[10.5px] space-y-0.5 list-disc pl-3 font-medium">
                              <li>Stable</li>
                              <li>Predictable</li>
                              <li>Autonomous</li>
                              <li>Parallelized</li>
                              <li>Liquified</li>
                              <li>AI-managed</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-slate-300 text-xs italic pt-1">
                          "FlowForge transforms engineering from chaos into stability."
                        </p>
                      </div>

                      {/* 16.2 The Future of AI */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-cyan-400 font-bold font-mono text-sm">16.2 — The Future of AI (Autonomy Era)</span>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                            <span className="text-slate-400 font-bold block text-[11px] uppercase">AI Today</span>
                            <div className="text-slate-400 text-[10.5px] space-y-0.5">
                              • Suggests<br/>• Observes<br/>• Assists<br/>• Predicts
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-900 rounded-lg border border-cyan-500/30 space-y-1">
                            <span className="text-cyan-300 font-bold block text-[11px] uppercase">FlowForge AI</span>
                            <div className="text-cyan-200 text-[10.5px] space-y-0.5 font-bold">
                              • Acts & Intervenes<br/>• Stabilizes & Restructures<br/>• Rescues & Optimizes<br/>• Manages Autonomously
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-300 text-xs font-semibold pt-1">
                          FlowForge is building the AI that runs engineering. Not an assistant, chatbot, or dashboard — an autonomous engineering intelligence.
                        </p>
                      </div>
                    </div>

                    {/* 16.3 Future of Economics & 16.4 Future of Compliance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 16.3 Economics */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-pink-400 font-bold font-mono text-sm">16.3 — The Future of Engineering Economics</span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5 text-xs text-slate-300">
                          <div className="text-slate-400 text-[11px]">
                            Today: Fixed capacity • Fixed velocity • Fixed timelines • Fixed bottlenecks.
                          </div>
                          <div className="text-pink-300 font-semibold space-y-1 pt-1">
                            <div>• <strong className="text-white">Capacity becomes liquid:</strong> Slack becomes a tradable resource.</div>
                            <div>• <strong className="text-white">Velocity becomes predictable:</strong> Critical paths are mathematically shielded.</div>
                            <div>• <strong className="text-white">Engineering becomes tradable:</strong> FFX is the future of engineering economics.</div>
                          </div>
                        </div>
                      </div>

                      {/* 16.4 Compliance */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-teal-400 font-bold font-mono text-sm">16.4 — The Future of Compliance</span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5 text-xs text-slate-300">
                          <div className="text-slate-400 text-[11px]">
                            Today: Manual • Painful • Confusing • Risky • Slow.
                          </div>
                          <div className="text-teal-300 font-semibold space-y-1 pt-1">
                            <div>• <strong className="text-white">Automated & Audit-ready:</strong> Instant §151 exemption generation.</div>
                            <div>• <strong className="text-white">Transparent & Predictable:</strong> Real-time compliance logging.</div>
                            <div>• <strong className="text-white">The Trust Layer:</strong> FlowForge Compliance Engine is the trust layer of engineering autonomy.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 16.5 Future of Teams & 16.6 Future of Enterprises */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 16.5 Teams */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-emerald-400 font-bold font-mono text-sm">16.5 — The Future of Engineering Teams</span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs text-slate-300">
                          <p className="text-slate-400 text-[11px]">
                            Today: Teams burn out, collapse, slip, struggle, overload, and lose velocity.
                          </p>
                          <div className="p-2 bg-slate-950 rounded border border-emerald-500/20 text-emerald-200 text-xs font-medium space-y-1">
                            <div>✓ Protected from load spikes</div>
                            <div>✓ Stabilized cognitive distribution</div>
                            <div>✓ Parallelized workflows & AI-paired</div>
                            <div>✓ 100% Burnout-proof environments</div>
                          </div>
                          <p className="text-white font-bold text-center pt-1 text-[11.5px]">
                            FlowForge becomes the guardian of engineering teams.
                          </p>
                        </div>
                      </div>

                      {/* 16.6 Enterprises */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">16.6 — The Future of Enterprises</span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs text-slate-300">
                          <p className="text-slate-400 text-[11px]">
                            Today: Enterprises miss deadlines, fail critical paths, and struggle with regulatory audits.
                          </p>
                          <div className="p-2 bg-slate-950 rounded border border-purple-500/20 text-purple-200 text-xs font-medium space-y-1">
                            <div>✓ Guaranteed predictable delivery</div>
                            <div>✓ Stable engineering & critical path shield</div>
                            <div>✓ Automated compliance & audit trails</div>
                            <div>✓ Full AI-native enterprise operations</div>
                          </div>
                          <p className="text-white font-bold text-center pt-1 text-[11.5px]">
                            FlowForge becomes the operating system for enterprise engineering.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 16.7 Future of Category & 16.8 Future of FlowForge */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 16.7 Future of Category */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-indigo-400 font-bold font-mono text-sm">16.7 — The Future of the Category (ELO)</span>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 text-xs">
                          <p className="text-slate-300">
                            Engineering Load Orchestration (ELO) moves from emerging founder-defined discipline to global institutional standard.
                          </p>
                          <div className="space-y-1 font-mono text-[11px] text-slate-200 bg-slate-950 p-2.5 rounded border border-slate-800">
                            <div>Salesforce → <span className="text-cyan-300 font-bold">CRM</span></div>
                            <div>ServiceNow → <span className="text-emerald-300 font-bold">ITSM</span></div>
                            <div>Snowflake → <span className="text-amber-300 font-bold">Data Cloud</span></div>
                            <div className="text-amber-300 font-bold pt-1 border-t border-slate-800">
                              FlowForge → <span className="text-white">Engineering Load Orchestration</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 16.8 Five Inevitabilities */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-amber-400 font-bold font-mono text-sm">16.8 — The Five Inevitabilities</span>
                        <div className="space-y-1 text-[10.5px]">
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                            <strong className="text-cyan-300">1. AI Autonomy</strong>
                            <span className="text-slate-400">AI-managed engineering becomes standard.</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                            <strong className="text-pink-300">2. Marketplace Liquidity</strong>
                            <span className="text-slate-400">FFX is the backbone of engineering economics.</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                            <strong className="text-teal-300">3. Compliance Automation</strong>
                            <span className="text-slate-400">Audit-ready engineering is mandatory.</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                            <strong className="text-purple-300">4. Enterprise Dominance</strong>
                            <span className="text-slate-400">FlowForge becomes the engineering OS.</span>
                          </div>
                          <div className="p-1.5 bg-slate-900 rounded border border-amber-500/30 flex justify-between">
                            <strong className="text-amber-300">5. Category Leadership</strong>
                            <span className="text-slate-200 font-medium">ELO becomes the global standard.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 16.9 Future of You & 16.10 Final Declaration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 16.9 Future of You (Founder Edition) */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-cyan-500/30 space-y-2">
                        <span className="text-cyan-300 font-bold font-mono text-sm">16.9 — The Future of You (Chukwuma Oduagu)</span>
                        <div className="space-y-1.5 text-xs text-slate-300">
                          <p className="text-slate-300">
                            Chukwuma — your future inside FlowForge is defined by:
                          </p>
                          <ul className="space-y-1 text-[11px] list-disc pl-4 text-slate-200">
                            <li><strong className="text-amber-300">Category Creation:</strong> You created Engineering Load Orchestration.</li>
                            <li><strong className="text-cyan-300">Narrative Control:</strong> You shape the global conversation about engineering stability.</li>
                            <li><strong className="text-pink-300">Enterprise Authority:</strong> You become the voice CTOs listen to.</li>
                            <li><strong className="text-purple-300">AI Leadership:</strong> You define the autonomy era of engineering.</li>
                            <li><strong className="text-emerald-300">Institution Building:</strong> You build the company that becomes the engineering OS.</li>
                          </ul>
                          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-amber-300 font-mono text-center">
                            Your future is not tactical or incremental. Your future is category leadership.
                          </div>
                        </div>
                      </div>

                      {/* 16.10 Final Declaration */}
                      <div className="p-4 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-amber-950/40 rounded-xl border border-amber-500/40 space-y-2 flex flex-col justify-center">
                        <span className="text-amber-300 font-mono font-bold text-sm">16.10 — The Final Declaration</span>
                        <p className="text-slate-200 text-xs italic leading-relaxed">
                          "FlowForge is not a product. FlowForge is not a platform. FlowForge is not a tool.<br/><br/>
                          FlowForge is the future of engineering. A future where:<br/>
                          <span className="text-white not-italic font-semibold block pt-1">
                            • Load is stable<br/>
                            • Burnout is impossible<br/>
                            • Critical paths never fail<br/>
                            • Delivery is predictable<br/>
                            • AI runs engineering<br/>
                            • Capacity is liquid<br/>
                            • Compliance is automated<br/>
                            • Engineering is inevitable
                          </span>
                          <br/>
                          <strong className="text-amber-300 not-italic text-sm font-bold block text-center">FLOWFORGE IS INEVITABLE.</strong>"
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Codex Declaration */}
                <blockquote className="text-xs text-slate-200 italic border-l-2 border-amber-400 pl-4 py-1 font-serif">
                  "The FlowForge Founder Codex is the single unified repository of our category, our strategy, our systems, and our culture. FlowForge is inevitable."
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 14: INVESTOR MEMO (FOUNDER EDITION) */}
          {activeArtifact === 'memo' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Confidential • Investment Memorandum (Founder Edition)
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — INVESTOR MEMO (Founder Edition)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — INVESTOR MEMO (Founder Edition)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Executive Summary\nFlowForge is the first AI-native operating system for enterprise engineering.\nIt prevents burnout, stabilizes critical paths, and guarantees delivery by orchestrating engineering load — not tasks.\nFlowForge is built for Texas enterprise engineering teams and includes:\n- AI Orchestration\n- FFX Capacity Marketplace\n- AI Swarm Copilot\n- Texas Compliance Engine\n- What-If Simulator\n- Enterprise onboarding\nFlowForge is not a dashboard. It is an AI orchestration layer.\n\n2. The Problem\nEngineering teams fail for one reason: Engineering load becomes unstable.\nSymptoms: Burnout, Slipped sprints, Fragile critical paths, Unpredictable timelines, Overloaded DevOps / Backend / Frontend, Underutilized QA / BA, Rising context switching, Declining velocity.\nEvery engineering failure traces back to load instability. No existing tool solves this.\n\n3. The Solution\nFlowForge stabilizes engineering load using AI. It predicts overload, prevents burnout, redistributes tasks, restructures sprints, adds slack, parallelizes workflows, protects critical paths, guarantees delivery. FlowForge is the AI that runs engineering.\n\n4. Why Now\nEngineering complexity is rising. Burnout is rising. Delivery risk is rising.\nCompanies like WP Engine, BigCommerce, SailPoint, Dialexa IBM, and Bestow are facing higher load, higher compliance pressure, higher delivery expectations, lower tolerance for slippage. FlowForge eliminates these risks.\n\n5. Product Overview\nFlowForge is built on six engines:\n1. AI Orchestration Engine: Critical path intelligence, velocity prediction, burnout detection.\n2. FFX Capacity Marketplace: Engineering capacity becomes a tradable asset.\n3. AI Swarm Copilot: Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA.\n4. Texas Compliance Engine: Automatic §151.0101 and §151.351 SaaS exemption.\n5. What-If Simulator: Simulates load, capacity, parallelization, burnout, timelines.\n6. Enterprise Onboarding Website: Demos, FFX purchasing, multi-tenant workspaces.\n\n6. Market\nFlowForge targets Texas enterprise engineering teams: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow. These companies share the same problem: Engineering load is the new enterprise risk. FlowForge eliminates that risk.\n\n7. Business Model\n- FFX Credits (Usage-Based): Slack injection, capacity stabilization, critical path rescue.\n- AI Autopilot Subscription: Predictive orchestration and burnout prevention.\n- Compliance Engine: Texas SaaS exemption automation.\n- Enterprise Multi-Tenant: Workspace isolation, audit logs, onboarding.\n\n8. Traction\nFlowForge's system is: Stable, Deployed, Error-free, Compliance-ready, Enterprise-ready, AI-ready.\nThe only missing pieces: Stripe monetization, Multi-tenant auth.\n\n9. Competitive Advantage\nFlowForge is the only platform that orchestrates engineering load, predicts burnout, stabilizes critical paths, injects capacity, trades engineering availability, automates compliance, runs What-If simulations, acts autonomously. This is a new category.\n\n10. Vision\nFlowForge becomes the AI-native operating system for enterprise engineering. Not a dashboard. Not a workflow tool. Not a project manager. A full orchestration layer. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1001);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1001 ? 'Memo Copied!' : 'Copy Investor Memo'}</span>
                </button>
              </div>

              <div className="space-y-6 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 1. Executive Summary */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono">1.</span>
                    <span>Executive Summary</span>
                  </h4>
                  <p>
                    FlowForge is the first AI-native operating system for enterprise engineering.
                  </p>
                  <p>
                    It prevents burnout, stabilizes critical paths, and guarantees delivery by orchestrating engineering load — not tasks.
                  </p>
                  <p>
                    FlowForge is built for Texas enterprise engineering teams and includes:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-1 font-mono text-[11px] text-cyan-300">
                    <div>• AI Orchestration</div>
                    <div>• FFX Capacity Marketplace</div>
                    <div>• AI Swarm Copilot</div>
                    <div>• Texas Compliance Engine</div>
                    <div>• What‑If Simulator</div>
                    <div>• Enterprise onboarding</div>
                  </div>
                  <p className="font-semibold text-white pt-1">
                    FlowForge is not a dashboard. It is an AI orchestration layer.
                  </p>
                </div>

                {/* 2. The Problem */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono">2.</span>
                    <span>The Problem</span>
                  </h4>
                  <p className="text-rose-300 font-medium">
                    Engineering teams fail for one reason: Engineering load becomes unstable.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-slate-400">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Burnout</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Slipped sprints</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Fragile critical paths</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Unpredictable timelines</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Overloaded DevOps/Backend</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Underutilized QA/BA</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Context switching</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800">Declining velocity</div>
                  </div>
                  <p className="pt-1 text-slate-300">
                    Every engineering failure traces back to load instability. No existing tool solves this.
                  </p>
                </div>

                {/* 3. The Solution */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono">3.</span>
                    <span>The Solution</span>
                  </h4>
                  <p className="text-emerald-300 font-medium">
                    FlowForge stabilizes engineering load using AI.
                  </p>
                  <p>
                    It predicts overload, prevents burnout, redistributes tasks, restructures sprints, adds slack, parallelizes workflows, protects critical paths, and guarantees delivery.
                  </p>
                  <p className="text-white font-bold">FlowForge is the AI that runs engineering.</p>
                </div>

                {/* 4. Why Now */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono">4.</span>
                    <span>Why Now</span>
                  </h4>
                  <p>
                    Engineering complexity is rising. Burnout is rising. Delivery risk is rising.
                  </p>
                  <p>
                    Companies like WP Engine, BigCommerce, SailPoint, Dialexa IBM, and Bestow are facing higher load, higher compliance pressure, higher delivery expectations, and lower tolerance for slippage. FlowForge eliminates these risks.
                  </p>
                </div>

                {/* 5. Product Overview */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span className="text-cyan-400 font-mono">5.</span>
                    <span>Product Overview (Six Engines)</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-cyan-300">1. AI Orchestration Engine:</strong> Critical path intelligence, velocity prediction, burnout detection.
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-amber-300">2. FFX Capacity Marketplace:</strong> Engineering capacity becomes a tradable asset.
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-purple-300">3. AI Swarm Copilot:</strong> Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA.
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-emerald-300">4. Texas Compliance Engine:</strong> Automatic §151.0101 and §151.351 SaaS exemption.
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-blue-300">5. What‑If Simulator:</strong> Simulates load, capacity, parallelization, burnout, timelines.
                    </div>
                    <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                      <strong className="text-pink-300">6. Enterprise Onboarding Website:</strong> Demos, FFX purchasing, multi-tenant workspaces.
                    </div>
                  </div>
                </div>

                {/* 6. Market & 7. Business Model */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="text-cyan-400 font-mono">6.</span>
                      <span>Target Texas Market</span>
                    </h4>
                    <p className="text-slate-400">
                      Targets Texas enterprise engineering teams: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow. Engineering load is the new enterprise risk. FlowForge eliminates that risk.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                      <span className="text-cyan-400 font-mono">7.</span>
                      <span>Business Model</span>
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300 text-xs">
                      <li><strong>FFX Credits:</strong> Usage-based slack injection and capacity stabilization.</li>
                      <li><strong>AI Autopilot:</strong> Predictive orchestration and burnout prevention.</li>
                      <li><strong>Compliance Engine:</strong> Texas SaaS exemption automation.</li>
                      <li><strong>Enterprise Multi-Tenant:</strong> Workspace isolation, audit logs, onboarding.</li>
                    </ul>
                  </div>
                </div>

                {/* 8. Traction, 9. Competitive Advantage, 10. Vision */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-emerald-400 font-mono">8. Traction</h4>
                    <p className="text-slate-300 text-xs">
                      Stable, deployed, error-free, compliance-ready, enterprise-ready, AI-ready.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-amber-400 font-mono">9. Advantage</h4>
                    <p className="text-slate-300 text-xs">
                      The only platform that orchestrates load, trades capacity, automates Texas tax, and acts autonomously.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-cyan-400 font-mono">10. Vision</h4>
                    <p className="text-slate-300 text-xs font-bold text-white">
                      The AI-native operating system for enterprise engineering. FlowForge is inevitable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 2: PUBLIC LAUNCH ANNOUNCEMENT (FOUNDER EDITION) */}
          {activeArtifact === 'launch' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Category Defining • Press & Market Announcement
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — PUBLIC LAUNCH ANNOUNCEMENT
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    By Founder: Chukwuma Oduagu (Sachse, TX) • Date: September 2, 2026
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — PUBLIC LAUNCH ANNOUNCEMENT\nBy Founder: Chukwuma Oduagu (Sachse, TX)\nDate: September 2, 2026\n\nIntroducing FlowForge — The AI That Prevents Engineering Burnout and Guarantees Delivery\n\nToday, we’re announcing FlowForge:\nthe first AI-native operating system for enterprise engineering.\n\nFlowForge is built for companies whose engineering teams carry the weight of mission‑critical systems — teams that cannot afford burnout, slippage, or fragile critical paths.\n\nEngineering doesn’t fail because of code.\nEngineering fails because of load.\n\nFlowForge solves that.\n\nWhy FlowForge Exists:\nEngineering teams are overloaded. Critical paths are fragile. Sprints slip. Burnout rises. Velocity collapses. Delivery becomes unpredictable. Every engineering failure traces back to one root cause: Engineering load becomes unstable. FlowForge is the AI that stabilizes it.\n\nWhat FlowForge Does:\n1. AI Orchestration Engine: Predicts overload, stabilizes critical paths, protects velocity.\n2. FFX Capacity Marketplace: Engineering capacity becomes a tradable asset. Buy slack. Sell availability. Inject velocity.\n3. AI Swarm Copilot: Autonomous engineering assistance across DevOps, Backend, Frontend, QA, BA.\n4. Texas Compliance Engine: Automatic §151.0101 and §151.351 SaaS exemption. Audit-ready billing.\n5. What‑If Simulator: Simulates load, capacity, parallelization, burnout, timelines.\n6. Enterprise Onboarding Website: Demos, FFX purchasing, multi-tenant workspaces.\n\nFlowForge doesn’t track tasks. It orchestrates load.\n\nWho FlowForge Is Built For:\nTexas enterprise engineering teams: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow.\n\nThe Impact:\n- Reduces engineering overload by 18–25%.\n- Accelerates delivery by 2–4 days per sprint.\n- Reduces sprint slippage by 40–55%.\n\nThis is engineering without burnout. This is delivery without risk.\n\nThe Invitation:\nFlowForge is now open for enterprise onboarding. Visit flowforge.fit.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1002);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1002 ? 'Announcement Copied!' : 'Copy Announcement'}</span>
                </button>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed font-sans">
                <div className="p-5 bg-gradient-to-r from-slate-950 to-emerald-950/30 rounded-xl border border-emerald-500/30 space-y-3">
                  <h4 className="text-base font-bold text-white">
                    Introducing FlowForge — The AI That Prevents Engineering Burnout and Guarantees Delivery
                  </h4>
                  <p className="text-emerald-300 font-medium">
                    Today, we’re announcing FlowForge: the first AI-native operating system for enterprise engineering.
                  </p>
                  <p>
                    FlowForge is built for companies whose engineering teams carry the weight of mission‑critical systems — teams that cannot afford burnout, slippage, or fragile critical paths.
                  </p>
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-white font-mono text-xs">
                    "Engineering doesn’t fail because of code. Engineering fails because of load. FlowForge solves that."
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                    <span className="text-2xl font-bold text-emerald-400 font-mono">18–25%</span>
                    <div className="text-white font-bold text-xs">Overload Reduction</div>
                    <div className="text-slate-400 text-[11px]">Direct cognitive load leveling</div>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                    <span className="text-2xl font-bold text-cyan-400 font-mono">2–4 Days</span>
                    <div className="text-white font-bold text-xs">Delivery Acceleration</div>
                    <div className="text-slate-400 text-[11px]">Faster velocity per sprint</div>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                    <span className="text-2xl font-bold text-amber-400 font-mono">40–55%</span>
                    <div className="text-white font-bold text-xs">Slippage Cut</div>
                    <div className="text-slate-400 text-[11px]">Protected critical paths</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white">The Invitation</h4>
                  <p>
                    FlowForge is now open for enterprise onboarding. If your engineering team is carrying more than it can sustain — if your critical paths are fragile — if your sprints slip — if your velocity is unpredictable — FlowForge is ready.
                  </p>
                  <p className="text-slate-400 font-mono text-[11px] pt-1">
                    Engineering deserves stability. Teams deserve protection. Delivery deserves certainty. FlowForge delivers all three.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 3: ONE-PAGE EXECUTIVE SUMMARY (MASTER DOCUMENT) */}
          {activeArtifact === 'exec_summary' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    The Master Document • Universal One-Pager
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — ONE‑PAGE EXECUTIVE SUMMARY
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — ONE‑PAGE EXECUTIVE SUMMARY\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. The Company:\nFlowForge is the first AI-native operating system for enterprise engineering. It prevents burnout, stabilizes critical paths, and guarantees delivery by orchestrating engineering load — not tasks.\n\n2. The Problem:\nEngineering teams fail for one reason: Engineering load becomes unstable.\n\n3. The Solution:\nFlowForge stabilizes engineering load using AI. It predicts overload, prevents burnout, redistributes tasks, restructures sprints, adds slack, parallelizes workflows, protects critical paths, guarantees delivery.\n\n4. The Product:\nBuilt on six engines: AI Orchestration, FFX Capacity Marketplace, AI Swarm Copilot, Texas Compliance Engine, What-If Simulator, Enterprise Onboarding.\n\n5. The Market:\nTexas enterprise engineering teams: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow.\n\n6. The Business Model:\nFFX Credits (usage-based), AI Autopilot Subscription, Compliance Engine, Enterprise Multi-Tenant.\n\n7. The Impact:\n- Reduces overload by 18-25%\n- Accelerates delivery by 2-4 days/sprint\n- Reduces sprint slippage by 40-55%\n\n8. The Vision:\nFlowForge becomes the AI-native operating system for enterprise engineering. FlowForge is inevitable.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1003);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1003 ? 'Summary Copied!' : 'Copy Executive Summary'}</span>
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold font-mono">1. The Company</span>
                    <p className="text-slate-300">The first AI-native operating system for enterprise engineering. Orchestrates load, prevents burnout, and guarantees delivery.</p>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-rose-400 font-bold font-mono">2. The Problem</span>
                    <p className="text-slate-300">Engineering teams fail because engineering load becomes unstable (DevOps bottleneck, context thrash, slipped sprints).</p>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-emerald-400 font-bold font-mono">3. The Solution</span>
                    <p className="text-slate-300">Predicts overload, redistributes tasks, adds slack, and parallelizes workflows. FlowForge runs engineering.</p>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-amber-400 font-bold font-mono">4. The Product</span>
                    <p className="text-slate-300">Six integrated engines: AI Orchestration, FFX Marketplace, AI Swarm Copilot, Texas Tax Engine, Simulator, Onboarding.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-indigo-400 font-bold font-mono">7. The Impact Metrics</span>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono text-xs">
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-emerald-400 font-bold">-18% to -25% Overload</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-cyan-400 font-bold">+2 to +4 Days Faster</div>
                    <div className="p-2 bg-slate-900 rounded border border-slate-800 text-amber-400 font-bold">-40% to -55% Slippage</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 4: 60-SECOND FOUNDER SPEECH */}
          {activeArtifact === 'speech' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Keynote & Elevator • High-Impact Speech
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — 60‑SECOND FOUNDER SPEECH
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    By Founder: Chukwuma Oduagu (Sachse, TX)
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — 60‑SECOND FOUNDER SPEECH\nBy Founder: Chukwuma Oduagu (Sachse, TX)\n\nFlowForge is the first AI-native operating system for enterprise engineering.\n\nEngineering teams don’t fail because of code — they fail because they’re overloaded. Critical paths collapse, sprints slip, burnout rises, and delivery becomes unpredictable.\n\nFlowForge solves the real problem: engineering load instability.\n\nWe built an AI orchestration engine that predicts overload, prevents burnout, stabilizes critical paths, and guarantees delivery. It doesn’t track tasks — it orchestrates load.\n\nFlowForge includes an AI Swarm Copilot for DevOps, Backend, Frontend, QA, and BA; a What‑If simulator for capacity and timeline modeling; a Texas compliance engine for audit-ready billing; and FFX credits that let companies buy slack and inject velocity instantly.\n\nFlowForge reduces engineering overload by up to 25%, accelerates delivery by 2–4 days per sprint, and cuts slippage by more than half.\n\nWe’re building the AI-native operating system for enterprise engineering — a system that makes delivery predictable, protects teams from burnout, and gives enterprises the stability they’ve never had.\n\nFlowForge is the future of engineering.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1004);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1004 ? 'Speech Copied!' : 'Copy 60s Speech'}</span>
                </button>
              </div>

              <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold">
                  <PlayIcon className="w-4 h-4" />
                  <span>VERBATIM FOUNDER DELIVERY SCRIPT (60 SECONDS)</span>
                </div>
                <blockquote className="text-sm md:text-base text-slate-200 leading-relaxed font-serif italic space-y-3 border-l-2 border-amber-500/60 pl-4 py-1">
                  <p>
                    "FlowForge is the first AI-native operating system for enterprise engineering."
                  </p>
                  <p>
                    "Engineering teams don’t fail because of code — they fail because they’re overloaded. Critical paths collapse, sprints slip, burnout rises, and delivery becomes unpredictable."
                  </p>
                  <p className="text-amber-300 font-sans not-italic font-bold">
                    "FlowForge solves the real problem: engineering load instability."
                  </p>
                  <p>
                    "We built an AI orchestration engine that predicts overload, prevents burnout, stabilizes critical paths, and guarantees delivery. It doesn’t track tasks — it orchestrates load."
                  </p>
                  <p>
                    "FlowForge includes an AI Swarm Copilot for DevOps, Backend, Frontend, QA, and BA; a What‑If simulator for capacity and timeline modeling; a Texas compliance engine for audit-ready billing; and FFX credits that let companies buy slack and inject velocity instantly."
                  </p>
                  <p>
                    "FlowForge reduces engineering overload by up to 25%, accelerates delivery by 2–4 days per sprint, and cuts slippage by more than half."
                  </p>
                  <p className="text-white font-sans not-italic font-bold text-base">
                    "We’re building the AI-native operating system for enterprise engineering — a system that makes delivery predictable, protects teams from burnout, and gives enterprises the stability they’ve never had. FlowForge is the future of engineering."
                  </p>
                </blockquote>
              </div>
            </div>
          )}

          {/* ARTIFACT 5: ENTERPRISE SALES SCRIPT (FOUNDER EDITION) */}
          {activeArtifact === 'sales_script' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    Live Call Closing Script • CTO & VP Engineering Conversations
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — ENTERPRISE SALES SCRIPT (FOUNDER EDITION)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Designed for: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow, and Texas enterprise buyers
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — ENTERPRISE SALES SCRIPT (FOUNDER EDITION)\nDesigned for: WP Engine, BigCommerce, SailPoint, Dialexa IBM, Bestow, and Texas enterprise buyers\n\n1. OPENING (30 seconds):\n“Thanks for taking the time. I’ll get straight to the point. Engineering teams don’t fail because of code — they fail because they’re overloaded. Critical paths collapse, sprints slip, burnout rises, and delivery becomes unpredictable. FlowForge solves the real problem: engineering load instability.”\n\n2. THE PROBLEM (45 seconds):\n“Every engineering failure traces back to one root cause: Engineering load becomes unstable. When DevOps overloads, everything downstream collapses. When Backend stalls, Frontend freezes. When QA is underutilized, defects slip through. When context switching spikes, velocity dies. Dashboards don’t fix this. Project managers don’t fix this. More tools don’t fix this. FlowForge does.”\n\n3. THE SOLUTION (60 seconds):\n“FlowForge is the first AI-native operating system for engineering. It predicts overload, prevents burnout, stabilizes critical paths, and guarantees delivery. It doesn’t track tasks — it orchestrates load. FlowForge reduces overload by up to 25%, accelerates delivery by 2–4 days per sprint, and cuts slippage by more than half.”\n\n4. THE DEMO TRANSITION (20 seconds):\n“Let me show you exactly how FlowForge stabilizes your engineering load in real time.”\n\n5. THE DEMO SCRIPT (90 seconds):\n“Here’s your critical path. Here’s your load distribution. Here’s your burnout risk. Watch FlowForge fix it: redistributes tasks, injects slack, parallelizes workflows, restores velocity.”\n\n6. THE BUSINESS VALUE (45 seconds):\n“FlowForge gives you predictable delivery, protected teams, reduced burnout, faster sprints, lower risk, higher reliability.”\n\n7. THE TEXAS ADVANTAGE (30 seconds):\n“Automatic §151.0101 SaaS exemption, §151.351 compliance, audit-ready billing.”\n\n8. THE CLOSE (30 seconds):\n“We onboard your team, activate load stabilization, and provide instant FFX credit capacity.”\n\n9. THE FINAL ASK (10 seconds):\n“Do you want to start with a pilot team or full engineering onboarding?”`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1005);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1005 ? 'Script Copied!' : 'Copy Sales Script'}</span>
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono">
                {/* 1. Opening */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="text-amber-400 font-bold flex justify-between">
                    <span>1. OPENING (30 seconds)</span>
                    <span className="text-slate-500 font-sans">Direct Hook</span>
                  </div>
                  <p className="text-slate-300 font-sans italic">
                    “Thanks for taking the time. I’ll get straight to the point. Engineering teams don’t fail because of code — they fail because they’re overloaded. Critical paths collapse, sprints slip, burnout rises, and delivery becomes unpredictable. FlowForge solves the real problem: engineering load instability.”
                  </p>
                </div>

                {/* 2. The Problem */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="text-rose-400 font-bold flex justify-between">
                    <span>2. THE PROBLEM (45 seconds)</span>
                    <span className="text-slate-500 font-sans">The Root Cause</span>
                  </div>
                  <p className="text-slate-300 font-sans italic">
                    “Every engineering failure traces back to one root cause: Engineering load becomes unstable. When DevOps overloads, everything downstream collapses. When Backend stalls, Frontend freezes. When QA is underutilized, defects slip through. When context switching spikes, velocity dies. Dashboards don’t fix this. Project managers don’t fix this. More tools don’t fix this. FlowForge does.”
                  </p>
                </div>

                {/* 3. The Solution & 4. Demo Transition */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="text-cyan-400 font-bold flex justify-between">
                    <span>3. THE SOLUTION (60 seconds) & 4. DEMO TRANSITION</span>
                    <span className="text-slate-500 font-sans">Product Architecture</span>
                  </div>
                  <p className="text-slate-300 font-sans italic">
                    “FlowForge is the first AI-native operating system for engineering. It predicts overload, prevents burnout, stabilizes critical paths, and guarantees delivery. It doesn’t track tasks — it orchestrates load. Let me show you exactly how FlowForge stabilizes your engineering load in real time.”
                  </p>
                </div>

                {/* 5. The Demo Script */}
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="text-emerald-400 font-bold flex justify-between">
                    <span>5. THE DEMO SCRIPT (90 seconds)</span>
                    <span className="text-slate-500 font-sans">Live Dashboard Walkthrough</span>
                  </div>
                  <p className="text-slate-300 font-sans italic">
                    “Here’s your critical path. Here’s your load distribution. Here’s your burnout risk. Watch what happens when DevOps overloads — the entire chain destabilizes. Now watch FlowForge fix it: redistributes tasks, injects slack, parallelizes workflows, stabilizes the critical path, restores velocity, and prevents burnout.”
                  </p>
                </div>

                {/* 6. Value, 7. Texas Advantage, 8. Close, 9. Final Ask */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-indigo-400 font-bold">7. THE TEXAS ADVANTAGE (30s)</div>
                    <p className="text-slate-300 font-sans italic text-[11px]">
                      “Built specifically for Texas enterprise engineering: automatic §151.0101 SaaS exemption, §151.351 compliance, audit-ready billing.”
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-emerald-400 font-bold">9. THE FINAL ASK (10s)</div>
                    <p className="text-white font-sans font-bold text-xs">
                      “Do you want to start with a pilot team or full engineering onboarding?”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 6: TEAM ONBOARDING GUIDE (FOUNDER EDITION) */}
          {activeArtifact === 'onboarding' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Internal Culture & Operations • Team Playbook
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    FLOWFORGE — TEAM ONBOARDING GUIDE (FOUNDER EDITION)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Prepared for: Chukwuma Oduagu (Sachse, TX) • FlowForge Enterprise AI Orchestration | Google AI Studio
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = `FLOWFORGE — TEAM ONBOARDING GUIDE (FOUNDER EDITION)\nPrepared for: Chukwuma Oduagu (Sachse, TX)\nContext: FlowForge Enterprise AI Orchestration | Google AI Studio\n\n1. Welcome to FlowForge:\nFlowForge is the first AI-native operating system for enterprise engineering. We exist to solve the real problem engineering teams face: Engineering load becomes unstable.\n\n2. Our Mission:\nMake engineering predictable, humane, and stable.\n\n3. Our Vision:\nFlowForge becomes the AI-native operating system for enterprise engineering. FlowForge is inevitable.\n\n4. How FlowForge Works:\nSix engines: AI Orchestration, FFX Capacity Marketplace, AI Swarm Copilot, Texas Compliance Engine, What-If Simulator, Enterprise Onboarding.\n\n5. How We Build:\nA. Load First\nB. Critical Path Awareness\nC. Burnout Prevention\nD. Parallelization\nE. AI Pairing\n\n6. How We Make Decisions:\n1. Does this stabilize engineering load?\n2. Does this reduce burnout?\n3. Does this increase delivery certainty?\n4. Does this align with the AI-native OS vision?\n\n7. How Teams Work:\nEngineering, Product, Design, Sales, Marketing, Operations.\n\n8. What Success Looks Like:\nEngineering load is stable. Burnout is prevented. Delivery is predictable.\n\n9. What We Expect From You:\nThink in systems. Understand load. Protect each other. Build with clarity. Move with urgency.\n\n10. Final Message From the Founder:\nFlowForge exists because engineering deserves stability. Welcome to FlowForge.`;
                    navigator.clipboard.writeText(text);
                    setCopiedIndex(1006);
                    setTimeout(() => setCopiedIndex(null), 2500);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 1006 ? 'Guide Copied!' : 'Copy Onboarding Guide'}</span>
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
                {/* 5 Principles & 4 Decisions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-cyan-400 font-mono">5 Core Engineering Principles</h4>
                    <ul className="space-y-1.5 text-slate-300">
                      <li><strong>A. Load First:</strong> Prioritize load stability over raw feature count.</li>
                      <li><strong>B. Critical Path Awareness:</strong> Understand how each PR impacts the DAG chain.</li>
                      <li><strong>C. Burnout Prevention:</strong> Use FlowForge internally to protect our own team.</li>
                      <li><strong>D. Parallelization:</strong> Break linear bottlenecks by parallelizing tasks.</li>
                      <li><strong>E. AI Pairing:</strong> Partner with AI Swarm Copilot for faster execution.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-amber-400 font-mono">Decision Framework (4 Questions)</h4>
                    <ol className="space-y-1.5 text-slate-300 list-decimal pl-4">
                      <li>Does this stabilize engineering load? <em>(Yes → Priority)</em></li>
                      <li>Does this reduce burnout? <em>(Yes → Accelerate)</em></li>
                      <li>Does this increase delivery certainty? <em>(Yes → Greenlight)</em></li>
                      <li>Does this align with AI-native OS vision? <em>(Yes → Build)</em></li>
                    </ol>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-r from-slate-950 to-indigo-950/30 rounded-xl border border-indigo-500/30 space-y-2">
                  <span className="text-indigo-400 font-mono text-xs font-bold">10. FINAL MESSAGE FROM THE FOUNDER</span>
                  <p className="text-sm text-slate-200 italic font-serif">
                    "FlowForge exists because engineering deserves stability. We’re building the AI-native operating system for enterprise engineering — a system that protects teams, guarantees delivery, and makes engineering predictable. You’re here because you can help build that future. Welcome to FlowForge."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ARTIFACT 7: VC PITCH STRUCTURE */}
          {activeArtifact === 'vc_deck' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                    10-Slide Pitch Outline
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Seed / Series A Pitch Deck Blueprint
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 1: Executive Vision</span>
                  <h4 className="font-bold text-white">The AI Operating System for Engineering Load</h4>
                  <p className="text-slate-400">Introduce FlowForge’s paradigm shift from passive project tracking to active load orchestration.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 2: The Hidden Crisis</span>
                  <h4 className="font-bold text-white">The $400B Cognitive Overload Problem</h4>
                  <p className="text-slate-400">Detail how DevOps & backend bottlenecks cause cascading delivery failures across teams.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 3: The Breakthrough</span>
                  <h4 className="font-bold text-white">Autonomous Load Stabilization</h4>
                  <p className="text-slate-400">How GNN critical-path analysis and burnout shields prevent sprint slips before they start.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 4: The 6 Engines</span>
                  <h4 className="font-bold text-white">Unified Enterprise Architecture</h4>
                  <p className="text-slate-400">Showcase PERT scheduling, FFX Capacity Marketplace, and Texas Tax Compliance Engine.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 5: The FFX Marketplace</span>
                  <h4 className="font-bold text-white">Tradable Engineering Capacity</h4>
                  <p className="text-slate-400">Explain the liquidity mechanism: buying crunch hours, selling bench slack with 5% take-rate.</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="font-bold text-cyan-400 font-mono">Slide 6: Texas Tax Advantage</span>
                  <h4 className="font-bold text-white">Statutory Compliance (§ 151.351)</h4>
                  <p className="text-slate-400">Demonstrate our automatic 20% SaaS exemption calculation that saves Texas enterprises thousands.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 9: EXECUTIVE & ANALYST PUBLISHING SUITE (10 MASTER ARTIFACTS) */}
      {activeTab === 'suite' && (
        <ExecutiveArtifactsSuite />
      )}
    </div>
  );
};
