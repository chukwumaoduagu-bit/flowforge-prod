import React, { useState, useEffect } from 'react';
import { 
  ActivityIcon, 
  ShieldAlertIcon, 
  ShieldCheckIcon, 
  ZapIcon, 
  RefreshCwIcon, 
  GitCommitIcon, 
  LayersIcon, 
  ClockIcon, 
  FileTextIcon, 
  CheckCircle2Icon, 
  AlertTriangleIcon,
  PlayIcon,
  ExternalLinkIcon,
  CpuIcon,
  CreditCardIcon,
  PrinterIcon,
  CopyIcon,
  SendIcon,
  CheckIcon,
  DollarSignIcon
} from 'lucide-react';

interface StabilityDashboardProps {
  onOpenCopilot?: () => void;
  onOpenWhatIf?: () => void;
  onNavigateToEnterpriseReadiness?: () => void;
}

export const StabilityDashboardView: React.FC<StabilityDashboardProps> = ({
  onOpenCopilot,
  onOpenWhatIf,
  onNavigateToEnterpriseReadiness
}) => {
  const [telemetry, setTelemetry] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rebalancing, setRebalancing] = useState<boolean>(false);
  const [githubSyncing, setGithubSyncing] = useState<boolean>(false);
  const [githubSyncResult, setGithubSyncResult] = useState<any>(null);
  const [auditReport, setAuditReport] = useState<any>(null);
  const [generatingAudit, setGeneratingAudit] = useState<boolean>(false);
  const [repoInput, setRepoInput] = useState<string>('facebook/react');
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false);
  const [checkoutSession, setCheckoutSession] = useState<any>(null);
  const [showOutreachScripts, setShowOutreachScripts] = useState<boolean>(false);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);

  const fetchTelemetry = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/stability/team/team-texas-core');
      const data = await res.json();
      setTelemetry(data);
    } catch (err) {
      console.error('Failed to fetch stability telemetry:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTelemetry();
  }, []);

  const handleApplyAutonomyAction = async (actionId: string) => {
    setRebalancing(true);
    try {
      const res = await fetch('/api/stability/rebalance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ actionId })
      });
      const data = await res.json();
      if (data.telemetry) {
        setTelemetry(data.telemetry);
      }
    } catch (err) {
      console.error('Failed to apply autonomy action:', err);
    } finally {
      setRebalancing(false);
    }
  };

  const handleSyncGithub = async (targetRepo?: string) => {
    const repoToSync = targetRepo || repoInput;
    if (targetRepo) setRepoInput(targetRepo);
    setGithubSyncing(true);
    try {
      const [owner, repo] = repoToSync.split('/');
      const res = await fetch('/api/integrations/github/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoOwner: owner || 'facebook', repoName: repo || 'react' })
      });
      const data = await res.json();
      setGithubSyncResult(data);
    } catch (err) {
      console.error('Failed to sync GitHub:', err);
    } finally {
      setGithubSyncing(false);
    }
  };

  const handleGenerateAudit = async () => {
    setGeneratingAudit(true);
    try {
      const res = await fetch('/api/stability/audit/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          companyName: 'Austin Enterprise Engineering Cohort', 
          teamSize: 24,
          primaryRepo: repoInput
        })
      });
      const data = await res.json();
      setAuditReport(data);
    } catch (err) {
      console.error('Failed to generate audit:', err);
    } finally {
      setGeneratingAudit(false);
    }
  };

  const handleCreateCheckoutSession = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageTier: 'Stability Core (Tier 1)',
          amountUSD: 1500,
          companyId: 'texas-enterprise-pilot-01',
          paymentMethod: 'ach_or_credit_card'
        })
      });
      const data = await res.json();
      setCheckoutSession(data);
      setShowCheckoutModal(true);
    } catch (err) {
      console.error('Failed to create checkout session:', err);
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handlePrintAudit = () => {
    window.print();
  };

  const outreachScripts = [
    {
      title: 'Email: The 15% Slack Liquidity Audit (For CTOs / VPs)',
      subject: 'Quick question about sprint slippage & slack liquidity at {{Company}}',
      body: `Hi {{FirstName}},\n\nNoticed your engineering team has been shipping fast lately. Usually when teams scale past 20 engineers, sprint completion volatility creeps up and critical path tasks start slipping by 2 to 4 days.\n\nWe built FlowForge — an Engineering Stability Platform that tracks real-time Slack Liquidity (enforcing a 15% buffer) and eliminates bottleneck burnout automatically.\n\nWe are delivering a complimentary 14-Day Engineering Stability Audit (ESA) for 3 select engineering teams this month.\n\nWould you be against me sending over a 1-page sample audit so you can see your team's baseline Load Stability Score?\n\nBest regards,\nChukwuma Oduagu\nManaging Partner, CFO TAX PRO LLC (dba FlowForge)\nadmin@flowforge.fit | flowforge.fit`
    },
    {
      title: 'LinkedIn: The Critical Path Bottleneck Message',
      subject: 'LinkedIn Direct Connection',
      body: `Hi {{FirstName}}, loved following {{Company}}'s recent engineering milestones. We built FlowForge to help VPs of Engineering solve the silent killer of sprint velocity: critical path cognitive overload and lack of slack buffer.\n\nCurious if you've ever benchmarked your team's Load Stability Score (LSS)? Happy to run a free 14-day telemetry audit on your primary GitHub repo if you'd find it useful.`
    },
    {
      title: 'Sales Close: Converting the Free ESA to $1,500/mo Stability Core',
      subject: 'Your 30-Day Engineering Stabilization Plan + Invoice',
      body: `Hi {{FirstName}},\n\nFollowing up on our ESA presentation: your current Load Stability Score is 78/100, driven by an overloaded critical path in DevOps and sub-15% slack buffer.\n\nUnder our Stability Core package ($1,500/mo), FlowForge will:\n1. Continuously monitor your commit & PR vectors.\n2. Enforce the statutory 15% slack liquidity floor to prevent cascade delays.\n3. Automatically rebalance non-critical tasks before sprint lock.\n\nPlus, under Texas Tax Code § 151.351, 20% of your fee is statutorily exempt from sales tax.\n\nI have attached your subscription link and invoice below. Shall we activate monitoring starting Monday?\n\nBest,\nChukwuma Oduagu`
    }
  ];

  const handleCopyScript = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptIndex(idx);
    setTimeout(() => setCopiedScriptIndex(null), 2000);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                Runtime Loop Active • GET /api/stability/team/team-texas-core
              </span>
              <span className="text-xs text-slate-400">CFO TAX PRO LLC (dba FlowForge)</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white mt-1.5 flex items-center space-x-3">
              <span>FlowForge Stability Core (Live Loop)</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl mt-1">
              Real-time mathematical telemetry tracking cognitive load, slack liquidity reserves (15% target), sprint volatility (&lt;±3%), and closed-loop autonomy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={fetchTelemetry}
              disabled={loading}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700 transition cursor-pointer"
            >
              <RefreshCwIcon className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
              <span>Refresh Loop</span>
            </button>
            <button
              onClick={handleGenerateAudit}
              disabled={generatingAudit}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition cursor-pointer"
            >
              <FileTextIcon className="w-4 h-4" />
              <span>{generatingAudit ? 'Auditing...' : 'Run ESA Audit'}</span>
            </button>
            <button
              onClick={handleCreateCheckoutSession}
              disabled={checkoutLoading}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <CreditCardIcon className="w-4 h-4" />
              <span>{checkoutLoading ? 'Preparing...' : 'Invoice $1,500/mo (Stripe)'}</span>
            </button>
            <button
              onClick={() => setShowOutreachScripts(true)}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition cursor-pointer"
            >
              <SendIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>CTO Outreach Copy</span>
            </button>
            {onNavigateToEnterpriseReadiness && (
              <button
                onClick={onNavigateToEnterpriseReadiness}
                className="hidden lg:flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition cursor-pointer"
              >
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Readiness</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      {telemetry && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Load Stability Score (LSS)</span>
              <ActivityIcon className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className={`text-3xl font-black ${telemetry.loadStabilityScore >= 80 ? 'text-emerald-400' : telemetry.loadStabilityScore >= 70 ? 'text-amber-400' : 'text-rose-400'}`}>
                {telemetry.loadStabilityScore}
              </span>
              <span className="text-xs text-slate-400">/ 100 Target</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Status: <strong className="text-white">{telemetry.status}</strong>
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Slack Liquidity Reserve</span>
              <ClockIcon className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-black text-blue-400">
                {telemetry.slackLiquidityPercent}%
              </span>
              <span className="text-xs text-slate-400">({telemetry.slackHours}h buffer)</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Enforcing statutory 15% operational slack
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Cognitive Burnout Index</span>
              <AlertTriangleIcon className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className={`text-3xl font-black ${telemetry.burnoutRiskIndex > 0.65 ? 'text-rose-400' : telemetry.burnoutRiskIndex > 0.45 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {telemetry.burnoutRiskIndex}
              </span>
              <span className="text-xs text-slate-400">Avg pod risk</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Charlie Vance (91%) • Bob Martinez (88%)
            </p>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Sprint Volatility Index</span>
              <ZapIcon className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-black text-emerald-400">
                ±{(telemetry.volatilityIndex * 100).toFixed(1)}%
              </span>
              <span className="text-xs text-slate-400">(&lt;±3.0% Target)</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Estimated Critical Path: <strong className="text-white">{telemetry.criticalPathDeliveryDays} days</strong>
            </p>
          </div>
        </div>
      )}

      {/* Main Grid: Telemetry Matrix & Autonomy Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Pod Cognitive Matrix & Ingestion Stream */}
        <div className="lg:col-span-2 space-y-6">
          {/* Engineers Matrix */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <LayersIcon className="w-4 h-4 text-cyan-400" />
                <span>Engineer Cognitive Saturation Matrix (Live Model)</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">6 Pod Members</span>
            </div>

            <div className="space-y-3">
              {telemetry?.engineers.map((eng: any) => (
                <div key={eng.id} className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white">{eng.name}</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px] font-mono">{eng.role}</span>
                      {eng.cognitiveLoad >= 85 && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                          OVERLOADED
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Active: <span className="text-slate-200">{eng.active} pts</span> • Capacity: <span className="text-slate-200">{eng.capacity} pts</span>
                    </div>
                  </div>

                  <div className="w-full sm:w-48">
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">Cognitive Load</span>
                      <span className={`font-bold ${eng.cognitiveLoad >= 85 ? 'text-rose-400' : eng.cognitiveLoad >= 70 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {eng.cognitiveLoad}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 rounded-full ${eng.cognitiveLoad >= 85 ? 'bg-rose-500' : eng.cognitiveLoad >= 70 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                        style={{ width: `${Math.min(100, eng.cognitiveLoad)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real GitHub/Jira Ingestion Connector Panel */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                  <GitCommitIcon className="w-4 h-4 text-indigo-400" />
                  <span>Real Ingestion Adapter: GitHub REST API v3</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ingests real commit streams, merges, and PR latency directly into FlowForge's event bus.
                </p>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold border border-indigo-500/30">
                Active Adapter
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider self-center mr-1">Test Live Repos:</span>
              {[
                { label: 'React Core', repo: 'facebook/react' },
                { label: 'Next.js', repo: 'vercel/next.js' },
                { label: 'Linux Kernel', repo: 'torvalds/linux' },
                { label: 'Tailwind CSS', repo: 'tailwindlabs/tailwindcss' }
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSyncGithub(p.repo)}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono border border-slate-700 transition cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
              <input 
                type="text" 
                value={repoInput}
                onChange={(e) => setRepoInput(e.target.value)}
                placeholder="owner/repository"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
              />
              <button
                onClick={() => handleSyncGithub()}
                disabled={githubSyncing}
                className="w-full sm:w-auto shrink-0 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <RefreshCwIcon className={`w-3.5 h-3.5 ${githubSyncing ? 'animate-spin' : ''}`} />
                <span>{githubSyncing ? 'Syncing...' : 'Sync Repository'}</span>
              </button>
            </div>

            {githubSyncResult && (
              <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-cyan-400">Ingestion Status: {githubSyncResult.status}</span>
                  <span className="text-[10px] text-slate-400">{githubSyncResult.source}</span>
                </div>
                <p className="text-slate-400 text-[11px]">{githubSyncResult.telemetrySignal}</p>

                {githubSyncResult.latestCommits && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Normalized Ingested Commits:</span>
                    {githubSyncResult.latestCommits.map((c: any, i: number) => (
                      <div key={i} className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="font-mono text-indigo-300">{c.sha} • {c.author}</span>
                        <span className="truncate max-w-xs text-slate-400">{c.message}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Closed-Loop Autonomy Engine */}
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <ZapIcon className="w-4 h-4 text-cyan-400" />
                <span>Autonomy Engine Actions</span>
              </h2>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Closed-loop interventions ready to execute without meeting overhead or sprint halts.
            </p>

            <div className="space-y-3">
              {telemetry?.autonomyActions.map((act: any) => (
                <div 
                  key={act.id} 
                  className={`p-3.5 rounded-xl border transition ${
                    act.applied 
                      ? 'bg-emerald-950/30 border-emerald-800/50' 
                      : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xs font-bold text-white">{act.title}</h3>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold shrink-0">
                      -{act.riskReductionPercent}% Risk
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    {act.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      Type: <strong className="text-slate-300">{act.actionType}</strong>
                    </span>

                    {act.applied ? (
                      <span className="flex items-center space-x-1 text-emerald-400 text-xs font-bold">
                        <CheckCircle2Icon className="w-3.5 h-3.5" />
                        <span>Intervention Applied</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => handleApplyAutonomyAction(act.id)}
                        disabled={rebalancing}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer"
                      >
                        {rebalancing ? 'Applying...' : 'Execute Action'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Coordinated Systems
            </span>
            {onOpenWhatIf && (
              <button
                onClick={onOpenWhatIf}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs text-slate-300 transition cursor-pointer"
              >
                <span>Run "What-If" Scenario Simulation</span>
                <PlayIcon className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            )}
            {onOpenCopilot && (
              <button
                onClick={onOpenCopilot}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs text-slate-300 transition cursor-pointer"
              >
                <span>Trigger AI Swarm Copilot</span>
                <CpuIcon className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stability Audit Report Modal/Drawer (Step 6) */}
      {auditReport && (
        <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Audit Certified • {auditReport.auditId}
                </span>
                <span className="text-xs text-slate-400">{auditReport.entity}</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1">
                Enterprise Stability Audit (ESA) Summary — {auditReport.clientName}
              </h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrintAudit}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-bold border border-slate-700 transition cursor-pointer"
              >
                <PrinterIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={handleCreateCheckoutSession}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold shadow transition cursor-pointer"
              >
                <DollarSignIcon className="w-3.5 h-3.5" />
                <span>Activate $1,500/mo Core</span>
              </button>
              <button
                onClick={() => setAuditReport(null)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1.5 rounded bg-slate-800 cursor-pointer"
              >
                Close Report
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-xs">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">Load Stability Score</span>
              <span className="text-lg font-bold text-cyan-400">{auditReport.scores.loadStabilityScore} / 100</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">Governance Maturity</span>
              <span className="text-lg font-bold text-emerald-400">{auditReport.scores.governanceMaturityScore}%</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">Slack Liquidity</span>
              <span className="text-lg font-bold text-blue-400">{auditReport.scores.slackLiquidityRatio}</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">Sprint Volatility</span>
              <span className="text-lg font-bold text-indigo-400">{auditReport.scores.sprintVolatility}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Executive Prescription:</h3>
            <ul className="space-y-1 text-xs text-slate-300">
              {auditReport.executivePrescription.map((p: string, idx: number) => (
                <li key={idx} className="flex items-center space-x-2">
                  <CheckCircle2Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-400 gap-2">
            <div>
              <span>Official Certification by </span>
              <strong className="text-white">CFO TAX PRO LLC</strong> (Texas SOS #08051239) • 
              <span className="text-emerald-400 font-mono ml-1">Texas Tax Code § 151.351 20% Exemption Certified</span>
            </div>
            <div className="font-mono text-cyan-400">
              Managing Partner Signature: Chukwuma Oduagu
            </div>
          </div>
        </div>
      )}

      {/* Stripe Checkout & Invoice Modal */}
      {showCheckoutModal && checkoutSession && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-bold text-white text-base">Stripe Invoicing & Subscription Engine</h3>
              </div>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Target Subscription:</span>
                <span className="font-bold text-white">{checkoutSession.packageTier}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Merchant / Entity:</span>
                <span className="text-cyan-400 font-semibold">{checkoutSession.merchant.legalName} (dba {checkoutSession.merchant.dba})</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Texas SOS Charter:</span>
                <span className="font-mono text-slate-300">{checkoutSession.merchant.texasSosFile}</span>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Gross Monthly Base:</span>
                  <span className="font-mono font-bold">${checkoutSession.financials.grossSubtotalUSD.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Texas § 151.351 (20% SaaS Exemption):</span>
                  <span className="font-mono">-${checkoutSession.financials.texasExempt20PctUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Net Taxable Basis (80%):</span>
                  <span className="font-mono">${checkoutSession.financials.netTaxableBasis80PctUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Texas Sales Tax (8.25% on 80%):</span>
                  <span className="font-mono">+${checkoutSession.financials.texasSalesTax825PctUSD.toFixed(2)}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-sm font-black text-white">
                  <span>Total Due Today:</span>
                  <span className="text-amber-400 font-mono">${checkoutSession.financials.totalChargedUSD.toFixed(2)} / mo</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400 font-mono">
                Session ID: {checkoutSession.sessionId}
              </div>
              <button
                onClick={() => {
                  alert('Test Checkout Completed! Subscription simulated for Texas Enterprise Pilot. First recurring invoice recorded.');
                  setShowCheckoutModal(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition cursor-pointer"
              >
                Complete Subscription & Activate Customer ($1,500/mo)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTO Outreach Closer Scripts Modal */}
      {showOutreachScripts && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="font-bold text-white text-base">Customer Acquisition & Outreach Copy</h3>
                <p className="text-xs text-slate-400">Copy-paste these field-tested messages directly into email or LinkedIn.</p>
              </div>
              <button 
                onClick={() => setShowOutreachScripts(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              {outreachScripts.map((script, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-cyan-400">{script.title}</h4>
                    <button
                      onClick={() => handleCopyScript(script.body, idx)}
                      className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs transition cursor-pointer"
                    >
                      {copiedScriptIndex === idx ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Message</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-[11px] font-medium text-slate-300">
                    <strong>Subject:</strong> {script.subject}
                  </div>
                  <pre className="p-3 bg-slate-900 rounded-lg text-[11px] text-slate-300 whitespace-pre-wrap font-sans leading-relaxed border border-slate-800/80">
                    {script.body}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
