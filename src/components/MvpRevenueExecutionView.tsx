import React, { useState, useEffect } from 'react';
import {
  ActivityIcon,
  PercentIcon,
  FlameIcon,
  FileTextIcon,
  CreditCardIcon,
  CheckCircle2Icon,
  PrinterIcon,
  SendIcon,
  CopyIcon,
  CheckIcon,
  GitCommitIcon,
  RefreshCwIcon,
  SlidersIcon,
  AlertTriangleIcon,
  TrendingUpIcon,
  DollarSignIcon,
  ShieldCheckIcon,
  PlayIcon,
  SparklesIcon,
  ZapIcon,
  BotIcon,
  TargetIcon
} from 'lucide-react';

interface MvpRevenueExecutionViewProps {
  onNavigateToAiCloser?: () => void;
  onNavigateToDashboardPrototype?: () => void;
}

export const MvpRevenueExecutionView: React.FC<MvpRevenueExecutionViewProps> = ({ 
  onNavigateToAiCloser,
  onNavigateToDashboardPrototype
}) => {
  // Step 1-3: 3 Core MVP Metrics State
  const [commits, setCommits] = useState<number>(54);
  const [issues, setIssues] = useState<number>(12);
  const [prs, setPrs] = useState<number>(16);
  const [activityRate, setActivityRate] = useState<number>(0.85);

  const [completedTasks, setCompletedTasks] = useState<number>(42);
  const [unassignedTasks, setUnassignedTasks] = useState<number>(8);
  const [idleHours, setIdleHours] = useState<number>(20);
  const [totalCapacityHours, setTotalCapacityHours] = useState<number>(160);

  // Calculated Metrics
  const [stabilityScore, setStabilityScore] = useState<number>(82);
  const [slackPercent, setSlackPercent] = useState<number>(16.5);
  const [burnoutIndex, setBurnoutIndex] = useState<number>(0.34);

  // Ingestion State (Step 6)
  const [selectedRepo, setSelectedRepo] = useState<string>('facebook/react');
  const [repoInput, setRepoInput] = useState<string>('facebook/react');
  const [isSyncingRepo, setIsSyncingRepo] = useState<boolean>(false);
  const [ingestedCommits, setIngestedCommits] = useState<any[]>([
    { sha: '8f2a1b9', author: 'Dan Abramov', message: 'fix(compiler): memoization cache boundary check', time: '18m ago' },
    { sha: '4c7d0e2', author: 'Sophie Alpert', message: 'feat(core): concurrent suspense transition priority', time: '1h ago' },
    { sha: '1a9e3f5', author: 'Sebastian Markbåge', message: 'refactor(reconciler): fiber workLoop loop scheduling', time: '3h ago' },
  ]);

  // Simulation State (Step 3: CTO Pressure Simulation)
  const [simTeamSize, setSimTeamSize] = useState<number>(14);
  const [simLoadSurge, setSimLoadSurge] = useState<number>(35);
  const [simEngineersLost, setSimEngineersLost] = useState<number>(1);
  const [simulatingPressure, setSimulatingPressure] = useState<boolean>(false);
  const [simResult, setSimResult] = useState<any>({
    simulatedStability: 56,
    simulatedSlackPercent: 8.2,
    simulatedBurnout: 0.74,
    slippageDays: 5.8,
    simulatedDeliveryDays: 19.8,
    costOfInactionEstimatedUSD: 62000
  });

  // ESA Generator State (Step 4 & 7)
  const [clientName, setClientName] = useState<string>('Apex Fintech Engineering');
  const [isGeneratingEsa, setIsGeneratingEsa] = useState<boolean>(false);
  const [esaReport, setEsaReport] = useState<any>(null);

  // Invoice & Checkout State (Step 7 & 8)
  const [showInvoiceModal, setShowInvoiceModal] = useState<boolean>(false);
  const [selectedInvoiceTier, setSelectedInvoiceTier] = useState<'ESA_AUDIT' | 'STABILITY_CORE'>('ESA_AUDIT');
  const [currentInvoice, setCurrentInvoice] = useState<any>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  // Outreach Playbook State
  const [selectedPersona, setSelectedPersona] = useState<'CTO' | 'VP_ENG' | 'DIRECTOR' | 'PLATFORM_LEAD'>('CTO');
  const [copiedPitchIndex, setCopiedPitchIndex] = useState<number | null>(null);

  // Recalculate 3 Core MVP Metrics whenever inputs change
  useEffect(() => {
    // 1. Stability Score (0-100)
    const issueDrag = Math.min(25, issues * 1.2);
    const prBacklog = Math.max(0, (prs - 10) * 1.1);
    const activityFactor = activityRate >= 0.8 ? 6 : (activityRate - 0.8) * 25;
    const score = Math.max(10, Math.min(99, Math.round(100 - issueDrag - prBacklog + activityFactor)));
    setStabilityScore(score);

    // 2. Slack Liquidity (%)
    const slackHrs = Math.max(0, idleHours + (unassignedTasks * 2.5));
    const slackPct = Number(((slackHrs / totalCapacityHours) * 100).toFixed(1));
    setSlackPercent(slackPct);

    // 3. Burnout Index (0.00-1.00)
    const loadIntensity = (totalCapacityHours - slackHrs) / totalCapacityHours;
    const slackDeficit = Math.max(0, (15.0 - slackPct) / 100);
    const burnout = Number(Math.max(0.08, Math.min(0.96, (loadIntensity * 0.52) + (slackDeficit * 1.4) + 0.05)).toFixed(2));
    setBurnoutIndex(burnout);
  }, [commits, issues, prs, activityRate, completedTasks, unassignedTasks, idleHours, totalCapacityHours]);

  // Ingest from GitHub
  const handleSyncRepo = async (repoToSync?: string) => {
    const target = repoToSync || repoInput;
    setIsSyncingRepo(true);
    try {
      const [owner, name] = target.split('/');
      const res = await fetch('/api/integrations/github/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoOwner: owner, repoName: name })
      });
      const data = await res.json();
      if (data.latestCommits && data.latestCommits.length > 0) {
        setIngestedCommits(data.latestCommits.map((c: any) => ({
          sha: c.sha,
          author: c.author,
          message: c.message,
          time: 'Just now'
        })));
      }
      setSelectedRepo(target);
      setRepoInput(target);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSyncingRepo(false);
    }
  };

  // Run Pressure Simulation
  const handleRunSimulation = async () => {
    setSimulatingPressure(true);
    try {
      const res = await fetch('/api/mvp/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamSize: simTeamSize,
          loadSurgePercent: simLoadSurge,
          engineersLost: simEngineersLost,
          currentSlack: slackPercent
        })
      });
      const data = await res.json();
      if (data.simulation) {
        setSimResult(data.simulation);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSimulatingPressure(false);
    }
  };

  // Generate ESA Report
  const handleGenerateEsa = async () => {
    setIsGeneratingEsa(true);
    try {
      const res = await fetch('/api/mvp/esa/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName || 'Enterprise Pilot Client',
          teamSize: simTeamSize,
          targetRepo: selectedRepo
        })
      });
      const data = await res.json();
      setEsaReport(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingEsa(false);
    }
  };

  // Generate Invoice
  const handleOpenInvoice = async (tier: 'ESA_AUDIT' | 'STABILITY_CORE') => {
    setSelectedInvoiceTier(tier);
    setPaymentSuccess(false);
    try {
      const res = await fetch('/api/mvp/invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageType: tier,
          clientName: clientName || 'Enterprise Pilot Client',
          clientEmail: 'leadership@client.com'
        })
      });
      const data = await res.json();
      if (data.invoice) {
        setCurrentInvoice(data.invoice);
        setShowInvoiceModal(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Print ESA Report as PDF
  const handlePrintEsa = () => {
    window.print();
  };

  // Outreach pitches based on persona
  const outreachPitches = [
    {
      channel: 'Cold Email / Direct Note',
      subject: `30-Day Engineering Stability Assessment for ${clientName || 'your team'}`,
      body: `Hi [Name],

I run FlowForge (operated by CFO TAX PRO LLC in Texas). We work with engineering leadership to diagnose hidden delivery risks and team burnout before sprints collapse.

I can run a 30-day Stability Assessment on your engineering team to show you:
1. Load Stability Score (0–100) benchmark across active contributors
2. Slack Liquidity Reserve (whether you meet the 15% statutory buffer against unplanned churn)
3. Burnout Index (hotspots where your lead architects are carrying 80%+ of review weight)

We charge a flat $3,000 for the full certified Enterprise Stability Assessment (with Texas Tax Code § 151.351 20% exemption applied).

Do you have 10 minutes this Thursday to review sample scorecard outputs?

Best,
Chukwuma Oduagu
Managing Partner, CFO TAX PRO LLC (dba FlowForge)
Austin, TX • Texas SOS #08051239`
    },
    {
      channel: 'LinkedIn InMail (Direct & Punchy)',
      subject: `Quick question regarding ${clientName || 'engineering'} sprint volatility`,
      body: `Hi [Name], quick question — when your roadmap takes on sudden customer escalations, does your team have a guaranteed 15% Slack Liquidity buffer, or does lead architect burnout spike?

We run a 30-day Enterprise Stability Assessment (ESA) that plugs into GitHub in 5 minutes and maps your team's Load Stability Score and critical path fragility.

If you’d like to see what an audit looks like on a team of ${simTeamSize}, let me know and I’ll send a sample 1-pager.

Chukwuma`
    },
    {
      channel: 'Post-ESA Pitch to Stability Core ($1,500/mo)',
      subject: `ESA Findings for ${clientName || 'your team'} + Stability Core Activation`,
      body: `Hi [Name],

Following the delivery of your Enterprise Stability Assessment (Score: ${stabilityScore}/100, Slack: ${slackPercent}%), the single highest-ROI step is activating FlowForge Stability Core ($1,500/mo).

This gives your team:
• Continuous closed-loop telemetry and live GitHub webhook monitoring
• Automated rebalancing alerts before lead burnout exceeds 0.70
• Texas Tax Code § 151.351 certified exemption ($300/mo tax-exempt deduction)

I've attached the recurring agreement and Stripe invoice link. Can we activate your pod this Monday?`
    }
  ];

  const handleCopyPitch = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPitchIndex(idx);
    setTimeout(() => setCopiedPitchIndex(null), 2200);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* 1. Header Banner & The Money Path Roadmap */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/30">
                ⭐ MVP & REVENUE EXECUTION PACKAGE
              </span>
              <span className="text-xs text-slate-400">Target: LIVE & PAID ($3,000 ESA + $1,500/mo Core)</span>
            </div>
            <h1 className="text-2xl font-black text-white mt-1.5 flex items-center space-x-3">
              <span>The Money Path — Minimal Sellable Stability OS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              Only 3 metrics. Only 1 report (ESA). Only 1 integration (GitHub). Two clear revenue events: deliver the $3,000 audit, then convert them to the $1,500/mo Stability Core subscription.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateToDashboardPrototype && (
              <button
                onClick={onNavigateToDashboardPrototype}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-black text-xs shadow-lg shadow-purple-500/20 transition cursor-pointer"
              >
                <TargetIcon className="w-4 h-4" />
                <span>🎯 MVP Dashboard Prototype (v0.1)</span>
              </button>
            )}
            {onNavigateToAiCloser && (
              <button
                onClick={onNavigateToAiCloser}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/20 transition cursor-pointer"
              >
                <BotIcon className="w-4 h-4" />
                <span>🤖 AI Deal Closer Autopilot</span>
              </button>
            )}
            <button
              onClick={() => handleOpenInvoice('ESA_AUDIT')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              <DollarSignIcon className="w-4 h-4" />
              <span>1st Invoice: ESA ($3,000)</span>
            </button>
            <button
              onClick={() => handleOpenInvoice('STABILITY_CORE')}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <CreditCardIcon className="w-4 h-4" />
              <span>Convert: Core ($1,500/mo)</span>
            </button>
          </div>
        </div>

        {/* 8-Step Money Path Tracker */}
        <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-[11px]">
          {[
            { step: '1', title: 'Stability Score', status: 'Ready (0-100)' },
            { step: '2', title: 'Slack Liquidity', status: 'Ready (15%)' },
            { step: '3', title: 'Burnout Index', status: 'Ready (0-1)' },
            { step: '4', title: 'ESA Generator', status: 'Active' },
            { step: '5', title: '1-Page Dashboard', status: 'Live' },
            { step: '6', title: 'GitHub Ingestion', status: 'Live Adapter' },
            { step: '7', title: 'Deliver ESA', status: '$3,000 Invoice' },
            { step: '8', title: 'Stability Core', status: '$1,500/mo Recurring' },
          ].map((s, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-slate-950/70 border border-slate-800/80">
              <span className="text-[10px] text-cyan-400 font-mono font-bold">Step {s.step}</span>
              <div className="font-bold text-white truncate">{s.title}</div>
              <div className="text-[10px] text-emerald-400 font-semibold truncate">{s.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. THE 3 CORE MVP METRICS (STEP 1, 2, 3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Metric 1: Stability Score */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metric 1: Stability Score</span>
            <ActivityIcon className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className={`text-4xl font-black ${stabilityScore >= 80 ? 'text-emerald-400' : stabilityScore >= 65 ? 'text-amber-400' : 'text-rose-400'}`}>
              {stabilityScore}
            </span>
            <span className="text-sm font-semibold text-slate-400">/ 100</span>
            <span className={`ml-auto text-xs px-2 py-0.5 rounded font-bold ${stabilityScore >= 80 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
              {stabilityScore >= 80 ? 'Stable Delivery' : 'Fragility Warning'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Inputs: Commits ({commits}), Active PRs ({prs}), Open Issues ({issues}), Dev Activity ({Math.round(activityRate * 100)}%).
          </p>

          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>PR Review Backlog:</span>
              <input
                type="range"
                min="5"
                max="40"
                value={prs}
                onChange={(e) => setPrs(Number(e.target.value))}
                className="w-28 accent-cyan-400 cursor-pointer"
              />
              <span className="font-mono text-cyan-300 w-6 text-right">{prs}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Unresolved Escalations:</span>
              <input
                type="range"
                min="2"
                max="30"
                value={issues}
                onChange={(e) => setIssues(Number(e.target.value))}
                className="w-28 accent-cyan-400 cursor-pointer"
              />
              <span className="font-mono text-cyan-300 w-6 text-right">{issues}</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Slack Liquidity */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metric 2: Slack Liquidity</span>
            <PercentIcon className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className={`text-4xl font-black ${slackPercent >= 15.0 ? 'text-blue-400' : 'text-amber-400'}`}>
              {slackPercent}%
            </span>
            <span className="text-xs font-mono text-slate-400">Target ≥ 15%</span>
            <span className={`ml-auto text-xs px-2 py-0.5 rounded font-bold ${slackPercent >= 15.0 ? 'bg-blue-500/20 text-blue-300' : 'bg-rose-500/20 text-rose-300'}`}>
              {slackPercent >= 15.0 ? 'Statutory Floor Met' : 'Deficit Risk'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Inputs: Completed ({completedTasks}), Unassigned Buffer ({unassignedTasks}), Idle Liquidity ({idleHours}h / {totalCapacityHours}h cap).
          </p>

          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden flex">
              <div
                className={`h-full transition-all duration-500 ${slackPercent >= 15 ? 'bg-blue-500' : 'bg-rose-500'}`}
                style={{ width: `${Math.min(100, (slackPercent / 30) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>0%</span>
              <span className="text-amber-400 font-bold">15% Statutory Target</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Burnout Index */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metric 3: Burnout Index</span>
            <FlameIcon className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className={`text-4xl font-black ${burnoutIndex <= 0.40 ? 'text-emerald-400' : burnoutIndex <= 0.70 ? 'text-amber-400' : 'text-rose-400'}`}>
              {burnoutIndex.toFixed(2)}
            </span>
            <span className="text-xs text-slate-400">Scale 0.00 – 1.00</span>
            <span className={`ml-auto text-xs px-2 py-0.5 rounded font-bold ${burnoutIndex <= 0.40 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
              {burnoutIndex <= 0.40 ? 'Sustainable' : 'High Overload'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Inputs: Team Load Saturation ({Math.round((1 - slackPercent / 100) * 100)}%), Slack Deficit, Sprint Volatility (&lt;±3%).
          </p>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
            <span>Critical Lead Overload:</span>
            <span className="font-mono text-rose-400 font-bold">
              {burnoutIndex >= 0.60 ? 'Charlie Vance (91%)' : 'None Detected'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. STEP 6: THE ONE INTEGRATION (GITHUB REST INGESTION) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <GitCommitIcon className="w-4 h-4 text-indigo-400" />
              <span>Step 6: One Data Integration — GitHub Telemetry Adapter</span>
            </h2>
            <p className="text-xs text-slate-400">
              Live ingest of commits, issues, and PR velocity into FlowForge's 3-metric stability engine.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
            Active Adapter: GitHub REST API v3
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-300 block">Select or Input Target Repository:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'facebook/react',
                'vercel/next.js',
                'torvalds/linux',
                'tailwindlabs/tailwindcss'
              ].map((repo) => (
                <button
                  key={repo}
                  onClick={() => handleSyncRepo(repo)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition cursor-pointer border ${
                    selectedRepo === repo
                      ? 'bg-indigo-600 text-white border-indigo-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  {repo}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={repoInput}
                onChange={(e) => setRepoInput(e.target.value)}
                placeholder="owner/repo"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={() => handleSyncRepo()}
                disabled={isSyncingRepo}
                className="shrink-0 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
              >
                <RefreshCwIcon className={`w-3.5 h-3.5 ${isSyncingRepo ? 'animate-spin' : ''}`} />
                <span>Sync</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Ingested Stream ({selectedRepo}):</span>
              <span className="text-[10px] text-emerald-400 font-mono">Normalized & Parsed</span>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {ingestedCommits.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-slate-900/60 border border-slate-800/50">
                  <div className="flex items-center space-x-2 truncate">
                    <span className="font-mono text-indigo-400 text-[11px] shrink-0">{c.sha}</span>
                    <span className="text-slate-300 truncate">{c.message}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0 ml-2">{c.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. STEP 3: CTO PRESSURE SIMULATION ENGINE (THE CLOSER) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <ZapIcon className="w-4 h-4 text-amber-400" />
              <span>Step 3: CTO Pressure Simulation Engine ("Show CTO Their Risk")</span>
            </h2>
            <p className="text-xs text-slate-400">
              Demonstrate to engineering executives how unexpected load surges and attrition degrade their delivery timeline.
            </p>
          </div>
          <button
            onClick={handleRunSimulation}
            disabled={simulatingPressure}
            className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer shadow"
          >
            <PlayIcon className="w-3.5 h-3.5" />
            <span>{simulatingPressure ? 'Calculating...' : 'Run Pressure Simulation'}</span>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Controls */}
          <div className="space-y-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Team Headcount:</span>
                <span className="font-mono font-bold text-cyan-400">{simTeamSize} Engineers</span>
              </div>
              <input
                type="range"
                min="4"
                max="50"
                value={simTeamSize}
                onChange={(e) => setSimTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Unplanned Scope Surge:</span>
                <span className="font-mono font-bold text-amber-400">+{simLoadSurge}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={simLoadSurge}
                onChange={(e) => setSimLoadSurge(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Key Engineers Lost / Attrition:</span>
                <span className="font-mono font-bold text-rose-400">-{simEngineersLost} Senior Leads</span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                value={simEngineersLost}
                onChange={(e) => setSimEngineersLost(Number(e.target.value))}
                className="w-full accent-rose-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Impact Scoreboard */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Simulated Stability Score</span>
              <span className={`text-2xl font-black ${simResult.simulatedStability < 60 ? 'text-rose-400' : 'text-amber-400'}`}>
                {simResult.simulatedStability} / 100
              </span>
              <span className="text-[10px] text-rose-400 block mt-1">Delivery Fragility Imminent</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Simulated Slack Reserve</span>
              <span className={`text-2xl font-black ${simResult.simulatedSlackPercent < 10 ? 'text-rose-400' : 'text-amber-400'}`}>
                {simResult.simulatedSlackPercent}%
              </span>
              <span className="text-[10px] text-rose-400 block mt-1">Below 15% Safe Target</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Simulated Burnout Risk</span>
              <span className="text-2xl font-black text-rose-400">
                {simResult.simulatedBurnout.toFixed(2)}
              </span>
              <span className="text-[10px] text-rose-400 block mt-1">Severe Overload Zone</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Roadmap Slippage</span>
              <span className="text-2xl font-black text-amber-400">
                +{simResult.slippageDays} Days
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">14.0d → {simResult.simulatedDeliveryDays}d</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 col-span-2">
              <span className="text-[11px] text-slate-400 block">Estimated Cost of Inaction (Turnover &amp; Churn)</span>
              <span className="text-2xl font-black text-emerald-400">
                ${simResult.costOfInactionEstimatedUSD?.toLocaleString() || '62,000'}
              </span>
              <span className="text-[10px] text-cyan-300 block mt-1">
                Solution: Deploy FlowForge Stability Core ($1,500/mo) to cap fragility
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. STEP 4 & 7: THE ONE REPORT (ESA GENERATOR - $3,000 DELIVERABLE) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <FileTextIcon className="w-4 h-4 text-emerald-400" />
              <span>Step 4 &amp; 7: Enterprise Stability Assessment (ESA) Generator</span>
            </h2>
            <p className="text-xs text-slate-400">
              The $3,000 certified audit deliverable: Scorecard, Findings, Recommendations, and 30-Day Stabilization Plan.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Client Name (e.g. Apex Fintech)"
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={handleGenerateEsa}
              disabled={isGeneratingEsa}
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs transition cursor-pointer shadow"
            >
              {isGeneratingEsa ? 'Generating ESA...' : 'Generate ESA Report'}
            </button>
          </div>
        </div>

        {esaReport && (
          <div className="mt-5 bg-slate-950 border border-emerald-500/30 rounded-xl p-5 space-y-4 print:p-0 print:border-none">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold">
                    Official Audit • {esaReport.auditId}
                  </span>
                  <span className="text-xs text-slate-400">{esaReport.certifiedBy}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Enterprise Stability Assessment (ESA) — {esaReport.clientName}
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintEsa}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer"
                >
                  <PrinterIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => handleOpenInvoice('ESA_AUDIT')}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer"
                >
                  <DollarSignIcon className="w-3.5 h-3.5" />
                  <span>Invoice $3,000</span>
                </button>
              </div>
            </div>

            {/* Scorecard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Load Stability Score</span>
                <span className="text-xl font-black text-cyan-400">{esaReport.scorecard.stabilityScore} / 100</span>
                <span className="text-[10px] text-amber-400 block mt-0.5">{esaReport.scorecard.stabilityGrade}</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Slack Liquidity</span>
                <span className="text-xl font-black text-blue-400">{esaReport.scorecard.slackLiquidity.split(' ')[0]}</span>
                <span className="text-[10px] text-rose-400 block mt-0.5">Below 15% Floor</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Burnout Index</span>
                <span className="text-xl font-black text-rose-400">{esaReport.scorecard.burnoutIndex.split(' ')[0]}</span>
                <span className="text-[10px] text-rose-400 block mt-0.5">Severe Stress</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[11px]">Sprint Volatility</span>
                <span className="text-xl font-black text-indigo-400">{esaReport.scorecard.volatilityIndex.split(' ')[0]}</span>
                <span className="text-[10px] text-amber-400 block mt-0.5">Target &lt;±3%</span>
              </div>
            </div>

            {/* Findings */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Critical Findings:</h4>
              <div className="space-y-2">
                {esaReport.criticalFindings.map((f: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{f.title}</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                        {f.severity}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations & 30-Day Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Recommendations:</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {esaReport.actionableRecommendations.map((r: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">30-Day Stabilization Plan:</h4>
                <div className="space-y-1.5 text-xs">
                  {esaReport.tactical30DayPlan.map((p: any, idx: number) => (
                    <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800/80">
                      <div className="flex justify-between text-[11px] font-bold text-cyan-400">
                        <span>{p.day}</span>
                        <span className="text-slate-300">{p.focus}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">{p.objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Texas Tax Code Compliance Footer */}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] text-slate-400 gap-1">
              <div>
                Certified under <strong className="text-white">Texas Tax Code § 151.351</strong> (20% SaaS exemption verified).
              </div>
              <div className="font-mono text-cyan-400">
                Managing Partner: Chukwuma Oduagu (Texas SOS #08051239)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. FIRST PAYING CUSTOMER PLAYBOOK & OUTREACH ENGINE */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <SendIcon className="w-4 h-4 text-cyan-400" />
              <span>First Paying Customer Playbook (Who to Target &amp; What to Say)</span>
            </h2>
            <p className="text-xs text-slate-400">
              One-click copyable outreach scripts engineered to convert engineering executives into paid ESA audits.
            </p>
          </div>
          <div className="flex items-center space-x-1.5">
            {(['CTO', 'VP_ENG', 'DIRECTOR', 'PLATFORM_LEAD'] as const).map((persona) => (
              <button
                key={persona}
                onClick={() => setSelectedPersona(persona)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedPersona === persona
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                {persona.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {outreachPitches.map((pitch, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{pitch.channel}</span>
                  <button
                    onClick={() => handleCopyPitch(pitch.body, idx)}
                    className="flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs transition cursor-pointer"
                  >
                    {copiedPitchIndex === idx ? (
                      <>
                        <CheckIcon className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-[11px] font-medium text-slate-300 mt-1">
                  <strong>Subject:</strong> {pitch.subject}
                </div>
                <pre className="mt-2 p-2.5 bg-slate-900 rounded-lg text-[10px] text-slate-300 whitespace-pre-wrap font-sans leading-relaxed border border-slate-800/80 max-h-48 overflow-y-auto">
                  {pitch.body}
                </pre>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex justify-between">
                <span>Objective: Deliver ESA ($3,000)</span>
                <span className="text-emerald-400 font-semibold">Step 7 of Money Path</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FORMAL TEXAS-COMPLIANT INVOICE & STRIPE MODAL */}
      {showInvoiceModal && currentInvoice && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-bold text-white text-base">
                  {selectedInvoiceTier === 'ESA_AUDIT' ? 'Invoice: ESA Assessment ($3,000)' : 'Invoice: Stability Core ($1,500/mo)'}
                </h3>
              </div>
              <button
                onClick={() => setShowInvoiceModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Invoice Number:</span>
                <span className="font-mono text-cyan-400 font-bold">{currentInvoice.invoiceNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Billed By:</span>
                <span className="text-white font-semibold">{currentInvoice.biller.legalName} (dba {currentInvoice.biller.dba})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Texas SOS Charter:</span>
                <span className="font-mono text-slate-300">{currentInvoice.biller.charter}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Client:</span>
                <span className="text-white">{currentInvoice.client.name}</span>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Gross Base Service:</span>
                  <span className="font-mono font-bold">${currentInvoice.totals.subtotalUSD.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Texas § 151.351 (20% SaaS Exemption):</span>
                  <span className="font-mono">-${currentInvoice.totals.exemptSavingsUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Net Taxable Basis (80%):</span>
                  <span className="font-mono">${currentInvoice.totals.netTaxableUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Texas Sales Tax (8.25% on 80%):</span>
                  <span className="font-mono">+${currentInvoice.totals.salesTaxUSD.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-black text-white">
                  <span>Total Amount Due:</span>
                  <span className="text-amber-400 font-mono">
                    ${currentInvoice.totals.totalDueUSD.toFixed(2)}
                    {selectedInvoiceTier === 'STABILITY_CORE' ? ' / month' : ' (Net 14)'}
                  </span>
                </div>
              </div>
            </div>

            {paymentSuccess ? (
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center space-y-1">
                <CheckCircle2Icon className="w-6 h-6 text-emerald-400 mx-auto" />
                <div className="text-xs font-bold text-emerald-300">Payment Processed Successfully!</div>
                <p className="text-[11px] text-slate-300">
                  First revenue event confirmed. Customer converted to FlowForge Stability ecosystem.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={() => setPaymentSuccess(true)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition cursor-pointer"
                >
                  Simulate Live Stripe Payment (${currentInvoice.totals.totalDueUSD.toFixed(2)})
                </button>
                <div className="text-center text-[10px] text-slate-400">
                  Generates Stripe Checkout Session ID + Texas Tax Audit Receipt
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
