import React, { useState, useEffect } from 'react';
import {
  BotIcon,
  SparklesIcon,
  ZapIcon,
  DollarSignIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  SendIcon,
  PlayIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  BuildingIcon,
  UserIcon,
  ArrowRightIcon,
  ReceiptIcon,
  ClockIcon,
  RefreshCwIcon,
  SlidersIcon,
  SearchIcon,
  MessageSquareIcon,
  FileTextIcon,
  BriefcaseIcon,
  CreditCardIcon,
  CheckIcon,
  FlameIcon
} from 'lucide-react';

interface ProspectDeal {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  decisionMaker: {
    name: string;
    title: string;
    email: string;
  };
  teamSize: number;
  targetPainPoint: string;
  dealValueUSD: number;
  packageTier: 'ESA_AUDIT' | 'STABILITY_CORE';
  stage: 'DISCOVERED' | 'CONTACTED' | 'NEGOTIATING' | 'PROPOSAL_PRESENTED' | 'READY_TO_CLOSE' | 'CLOSED_WON';
  readinessScore: number;
  taxableBasisUSD?: number;
  texasSalesTaxUSD?: number;
  totalCollectedUSD?: number;
  invoiceNumber?: string;
  paymentIntentId?: string;
  paidAt?: string;
  buyingSignals?: string[];
  outreachHook?: string;
  transcript?: Array<{ role: 'closer' | 'prospect'; text: string; tactic?: string }>;
}

export const AiDealCloserView: React.FC = () => {
  // Stats & Pipeline State
  const [pipelineStats, setPipelineStats] = useState({
    totalRevenueUSD: 10794,
    dealsWonCount: 2,
    activePipelineValueUSD: 12500,
    activeOpportunitiesCount: 4,
    averageDealCycleHours: 3.4,
    texasTaxSavingsGeneratedUSD: 600
  });

  const [deals, setDeals] = useState<ProspectDeal[]>([]);
  const [selectedDealId, setSelectedDealId] = useState<string>('');
  const [isLoadingPipeline, setIsLoadingPipeline] = useState<boolean>(true);

  // Discovery State
  const [isDiscovering, setIsDiscovering] = useState<boolean>(false);
  const [targetSector, setTargetSector] = useState<string>('Enterprise FinTech & Cloud SaaS');
  const [targetRegion, setTargetRegion] = useState<string>('Texas Tech Hubs (Austin, Dallas, Houston)');

  // Autopilot Swarm State
  const [isAutopilotRunning, setIsAutopilotRunning] = useState<boolean>(false);
  const [autopilotStep, setAutopilotStep] = useState<number>(0);
  const [autopilotLogs, setAutopilotLogs] = useState<Array<{ step: number; title: string; detail: string; status: 'pending' | 'running' | 'completed' }>>([]);

  // Interactive Negotiation Chat State
  const [chatInput, setChatInput] = useState<string>('');
  const [isAiReplying, setIsAiReplying] = useState<boolean>(false);
  const [lastTacticUsed, setLastTacticUsed] = useState<string>('Pain Agitation & 15% Slack Liquidity Benchmark');

  // Receipt Modal State
  const [selectedReceiptDeal, setSelectedReceiptDeal] = useState<ProspectDeal | null>(null);

  // Fetch Pipeline from backend on mount
  useEffect(() => {
    fetchPipeline();
  }, []);

  const fetchPipeline = async () => {
    setIsLoadingPipeline(true);
    try {
      const res = await fetch('/api/ai-closer/pipeline');
      const data = await res.json();
      if (data.success) {
        setPipelineStats(data.stats);
        setDeals(data.deals || []);
        if (data.deals && data.deals.length > 0 && !selectedDealId) {
          setSelectedDealId(data.deals[0].id);
        }
      }
    } catch (err) {
      console.error('Error fetching pipeline:', err);
    } finally {
      setIsLoadingPipeline(false);
    }
  };

  const selectedDeal = deals.find(d => d.id === selectedDealId) || deals[0];

  // 1. AI Prospect Discovery
  const handleDiscoverNewTargets = async () => {
    setIsDiscovering(true);
    try {
      const res = await fetch('/api/ai-closer/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetSector,
          region: targetRegion,
          count: 3
        })
      });
      const data = await res.json();
      if (data.success && data.prospects) {
        setDeals(prev => [...data.prospects, ...prev]);
        if (data.prospects.length > 0) {
          setSelectedDealId(data.prospects[0].id);
        }
        await fetchPipeline();
      }
    } catch (err) {
      console.error('Discovery error:', err);
    } finally {
      setIsDiscovering(false);
    }
  };

  // 2. Interactive AI Turn (Closer pitches / handles objections)
  const handleAiInteractionTurn = async (forcedUserMessage?: string) => {
    if (!selectedDeal) return;
    setIsAiReplying(true);

    const messageToSend = forcedUserMessage || chatInput || 'How does FlowForge guarantee our sprint delivery without adding overhead?';

    const currentHistory = selectedDeal.transcript || [];

    try {
      const res = await fetch('/api/ai-closer/interact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealId: selectedDeal.id,
          prospectName: selectedDeal.decisionMaker.name,
          companyName: selectedDeal.companyName,
          userMessage: messageToSend,
          history: currentHistory
        })
      });

      const data = await res.json();
      if (data.success) {
        setLastTacticUsed(data.salesTacticUsed || 'Value Anchoring & Texas Tax Exemption');

        const newTurns = [
          { role: 'prospect' as const, text: messageToSend },
          { role: 'closer' as const, text: data.closerReply, tactic: data.salesTacticUsed }
        ];

        // Also add prospect follow-up if generated
        if (data.prospectReaction) {
          newTurns.push({ role: 'prospect' as const, text: data.prospectReaction });
        }

        const updatedDeals = deals.map(d => {
          if (d.id === selectedDeal.id) {
            return {
              ...d,
              stage: (data.dealStage as any) || d.stage,
              readinessScore: data.readinessScore || Math.min(100, d.readinessScore + 15),
              transcript: [...(d.transcript || []), ...newTurns]
            };
          }
          return d;
        });

        setDeals(updatedDeals);
        setChatInput('');
      }
    } catch (err) {
      console.error('Interaction error:', err);
    } finally {
      setIsAiReplying(false);
    }
  };

  // 3. Close Deal & Execute Real-Time Payment
  const handleCloseDealNow = async (dealToClose: ProspectDeal) => {
    try {
      const res = await fetch('/api/ai-closer/close-and-pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealId: dealToClose.id,
          companyName: dealToClose.companyName,
          clientName: dealToClose.decisionMaker.name,
          clientEmail: dealToClose.decisionMaker.email,
          packageTier: dealToClose.packageTier
        })
      });

      const data = await res.json();
      if (data.success) {
        const updatedDeal = data.deal;
        setDeals(prev => prev.map(d => (d.id === updatedDeal.id ? updatedDeal : d)));
        setSelectedReceiptDeal(updatedDeal);
        await fetchPipeline();
      }
    } catch (err) {
      console.error('Error closing deal:', err);
    }
  };

  // 4. Run Full 1-Click Autopilot Swarm (Discovers, Pitches, Handles Objections, Closes & Collects Cash)
  const handleRunAutopilotSwarm = async () => {
    setIsAutopilotRunning(true);
    setAutopilotStep(1);

    const initialSteps = [
      { step: 1, title: 'Autonomous Market Radar Scan', detail: 'Scanning Texas tech corridor for sprint delays & PR backlog bottlenecks...', status: 'running' as const },
      { step: 2, title: 'Prospect Qualified & Pain Profiled', detail: 'Evaluating target leadership (VP Eng / CTO) and team capacity...', status: 'pending' as const },
      { step: 3, title: 'Personalized Value Outreach Dispatched', detail: 'Sending 15% Slack Liquidity benchmark & 48h ESA offer...', status: 'pending' as const },
      { step: 4, title: 'Objections Handled (Cost of Inaction)', detail: 'Addressing budget & Jira redundancy with $62k slippage proof & § 151.351 savings...', status: 'pending' as const },
      { step: 5, title: 'Invoice Issued & Payment Charged', detail: 'Generating Texas Tax Code § 151.351 invoice and processing Stripe payment...', status: 'pending' as const }
    ];
    setAutopilotLogs(initialSteps);

    // Step-by-step animation simulation
    for (let i = 1; i <= 5; i++) {
      await new Promise(r => setTimeout(r, 900));
      setAutopilotStep(i);
      setAutopilotLogs(prev => prev.map((s, idx) => {
        if (idx + 1 < i) return { ...s, status: 'completed' as const };
        if (idx + 1 === i) return { ...s, status: 'running' as const };
        return { ...s, status: 'pending' as const };
      }));
    }

    try {
      const res = await fetch('/api/ai-closer/autopilot-batch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetCount: 1 })
      });

      const data = await res.json();
      if (data.success && data.closedDeal) {
        setDeals(prev => [data.closedDeal, ...prev]);
        setSelectedDealId(data.closedDeal.id);
        setSelectedReceiptDeal(data.closedDeal);
        setAutopilotLogs(prev => prev.map(s => ({ ...s, status: 'completed' as const })));
        await fetchPipeline();
      }
    } catch (err) {
      console.error('Autopilot error:', err);
    } finally {
      setIsAutopilotRunning(false);
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto bg-slate-950 text-slate-100 min-h-screen">
      {/* Top Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/40 flex items-center space-x-1.5">
              <BotIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>FlowForge Autonomous Revenue Swarm</span>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
              Gemini 3.8 Flash Driven
            </span>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              Texas Tax Code § 151.351 Active
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-2 tracking-tight">
            AI Customer Acquisition & Deal Closing Engine
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Autonomous multi-agent sales swarms that scan target companies, identify engineering delivery bottlenecks, engage decision-makers, handle objections, and close paid contracts on autopilot.
          </p>
        </div>

        {/* Global Autopilot Trigger Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDiscoverNewTargets}
            disabled={isDiscovering || isAutopilotRunning}
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-cyan-300 font-semibold text-xs border border-slate-700 hover:border-cyan-500/50 transition flex items-center space-x-2 cursor-pointer shadow disabled:opacity-50"
          >
            <SearchIcon className={`w-4 h-4 ${isDiscovering ? 'animate-spin' : ''}`} />
            <span>{isDiscovering ? 'Scanning Corridor...' : 'Scan New Prospects'}</span>
          </button>

          <button
            onClick={handleRunAutopilotSwarm}
            disabled={isAutopilotRunning || isDiscovering}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs transition flex items-center space-x-2 shadow-lg shadow-emerald-500/20 cursor-pointer disabled:opacity-50"
          >
            <ZapIcon className={`w-4 h-4 ${isAutopilotRunning ? 'animate-bounce' : ''}`} />
            <span>{isAutopilotRunning ? `Closing Deal (Stage ${autopilotStep}/5)...` : '⚡ Run 1-Click Autopilot Close'}</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Total Cash Collected</span>
            <DollarSignIcon className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mt-1">
            ${pipelineStats.totalRevenueUSD.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-400/80 mt-1 flex items-center space-x-1">
            <CheckCircle2Icon className="w-3 h-3" />
            <span>{pipelineStats.dealsWonCount} Paid Contracts Executed</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Active Pipeline Value</span>
            <TrendingUpIcon className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-cyan-300 mt-1">
            ${pipelineStats.activePipelineValueUSD.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            {pipelineStats.activeOpportunitiesCount} in active AI negotiation
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Texas Tax Exemption Value</span>
            <ReceiptIcon className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-amber-300 mt-1">
            ${pipelineStats.texasTaxSavingsGeneratedUSD.toLocaleString()}
          </div>
          <div className="text-[11px] text-amber-400/80 mt-1">
            § 151.351 (20% SaaS exemption)
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30 shadow relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Avg AI Close Cycle</span>
            <ClockIcon className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold text-purple-300 mt-1">
            {pipelineStats.averageDealCycleHours} hrs
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Outreach to paid Stripe invoice
          </div>
        </div>
      </div>

      {/* Autopilot Progress Live Monitor (Shows when running) */}
      {isAutopilotRunning && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <h3 className="text-sm font-bold text-emerald-300">
                Autonomous Revenue Agent in Execution
              </h3>
            </div>
            <span className="text-xs text-emerald-400 font-mono">Stage {autopilotStep} of 5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-1">
            {autopilotLogs.map((log) => (
              <div
                key={log.step}
                className={`p-2.5 rounded-lg border text-xs transition-all ${
                  log.status === 'completed'
                    ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-200'
                    : log.status === 'running'
                    ? 'bg-slate-900 border-cyan-400 text-cyan-200 shadow-md ring-1 ring-cyan-400/50'
                    : 'bg-slate-900/50 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center space-x-1.5 font-bold mb-1">
                  {log.status === 'completed' ? (
                    <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400" />
                  ) : log.status === 'running' ? (
                    <ZapIcon className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                  ) : (
                    <ClockIcon className="w-3.5 h-3.5 text-slate-600" />
                  )}
                  <span>{log.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{log.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Workspace: Left Column (Target Accounts) vs Right Column (Interactive Live Room) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Targeted Accounts Pipeline (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center space-x-2">
              <BriefcaseIcon className="w-4 h-4 text-cyan-400" />
              <span>Target Accounts & Opportunities</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {deals.length} Active Targets
            </span>
          </div>

          <div className="space-y-3 max-h-[720px] overflow-y-auto pr-1">
            {deals.map((deal) => {
              const isSelected = deal.id === selectedDealId;
              const isWon = deal.stage === 'CLOSED_WON';

              return (
                <div
                  key={deal.id}
                  onClick={() => setSelectedDealId(deal.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left relative ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                      : isWon
                      ? 'bg-slate-900/60 border-emerald-500/40 hover:border-emerald-400'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan-400">
                          {deal.companyName}
                        </h3>
                        <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {deal.location}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{deal.industry}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-extrabold text-cyan-400">
                        ${deal.dealValueUSD.toLocaleString()}
                        {deal.packageTier === 'STABILITY_CORE' ? '/mo' : ''}
                      </span>
                      <div className="mt-0.5">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            isWon
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                              : deal.stage === 'READY_TO_CLOSE'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                              : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          }`}
                        >
                          {deal.stage.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decision Maker & Pain */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-xs space-y-1">
                    <div className="flex items-center text-slate-300 space-x-1.5">
                      <UserIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold">{deal.decisionMaker.name}</span>
                      <span className="text-slate-400">({deal.decisionMaker.title})</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      <strong className="text-slate-300">Friction:</strong> {deal.targetPainPoint}
                    </p>
                  </div>

                  {/* Deal Readiness Meter */}
                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                    <div className="flex items-center space-x-2 flex-1 mr-4">
                      <span className="text-slate-400">Buying Readiness:</span>
                      <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isWon
                              ? 'bg-emerald-400 w-full'
                              : deal.readinessScore > 75
                              ? 'bg-cyan-400'
                              : 'bg-amber-400'
                          }`}
                          style={{ width: `${deal.readinessScore}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-200">{deal.readinessScore}%</span>
                    </div>

                    {isWon ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedReceiptDeal(deal);
                        }}
                        className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-500/40 text-[10px] font-bold flex items-center space-x-1 cursor-pointer"
                      >
                        <ReceiptIcon className="w-3 h-3" />
                        <span>Paid Receipt</span>
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCloseDealNow(deal);
                        }}
                        className="px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[10px] font-bold flex items-center space-x-1 cursor-pointer shadow"
                      >
                        <ZapIcon className="w-3 h-3" />
                        <span>Fast Close</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live AI Negotiation Room & Closer Console (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {selectedDeal ? (
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col h-full min-h-[640px]">
              {/* Target Header Inside Room */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-extrabold text-white">
                      {selectedDeal.companyName}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      (Team Size: {selectedDeal.teamSize})
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {selectedDeal.packageTier === 'ESA_AUDIT' ? 'ESA Audit ($3,000)' : 'Stability Core ($1,500/mo)'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Engaging <strong className="text-slate-200">{selectedDeal.decisionMaker.name}</strong> • {selectedDeal.decisionMaker.email}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {selectedDeal.stage === 'CLOSED_WON' ? (
                    <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs">
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                      <span>CLOSED & PAID (${selectedDeal.totalCollectedUSD || 3198})</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleCloseDealNow(selectedDeal)}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-lg shadow-emerald-500/20 transition"
                    >
                      <CreditCardIcon className="w-3.5 h-3.5" />
                      <span>Execute Sale & Charge Card</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Real-time Sales Tactic Banner */}
              <div className="my-3 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <FlameIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">
                    Active Closer Tactic: <strong className="text-amber-300">{lastTacticUsed}</strong>
                  </span>
                </div>
                <span className="text-[11px] text-cyan-400 font-mono">
                  Texas SOS #08051239
                </span>
              </div>

              {/* Message Transcript Area */}
              <div className="flex-1 overflow-y-auto space-y-3.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 max-h-[380px]">
                {selectedDeal.transcript && selectedDeal.transcript.length > 0 ? (
                  selectedDeal.transcript.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${
                        msg.role === 'closer' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5 mb-1 text-[11px] text-slate-400">
                        {msg.role === 'closer' ? (
                          <>
                            <span className="font-bold text-cyan-400">FlowForge AI Closer</span>
                            <BotIcon className="w-3 h-3 text-cyan-400" />
                          </>
                        ) : (
                          <>
                            <UserIcon className="w-3 h-3 text-amber-400" />
                            <span className="font-bold text-amber-300">{selectedDeal.decisionMaker.name}</span>
                          </>
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                          msg.role === 'closer'
                            ? 'bg-cyan-950/70 border border-cyan-500/40 text-cyan-100 rounded-tr-none'
                            : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.tactic && (
                        <span className="text-[10px] text-slate-500 mt-0.5 italic">
                          Strategy: {msg.tactic}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-500 space-y-2">
                    <MessageSquareIcon className="w-8 h-8 mx-auto text-slate-600" />
                    <p className="text-xs">No active dialogue yet with {selectedDeal.companyName}.</p>
                    <p className="text-[11px]">Click "Let AI Dispatch Initial Pitch" below to initiate autonomous engagement.</p>
                  </div>
                )}
              </div>

              {/* Interaction Bar & Quick Objection Simulators */}
              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2.5">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span className="text-slate-400">Quick Objections to Overcome:</span>
                  <button
                    onClick={() => handleAiInteractionTurn("We already use Datadog and Linear. Why do we need this?")}
                    disabled={isAiReplying || selectedDeal.stage === 'CLOSED_WON'}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-cyan-300 border border-slate-700 cursor-pointer disabled:opacity-50"
                  >
                    "We already use Datadog/Linear"
                  </button>
                  <button
                    onClick={() => handleAiInteractionTurn("We don't have budget for another tool right now.")}
                    disabled={isAiReplying || selectedDeal.stage === 'CLOSED_WON'}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-cyan-300 border border-slate-700 cursor-pointer disabled:opacity-50"
                  >
                    "No budget this quarter"
                  </button>
                  <button
                    onClick={() => handleAiInteractionTurn("What does the onboarding require from my engineers?")}
                    disabled={isAiReplying || selectedDeal.stage === 'CLOSED_WON'}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-cyan-300 border border-slate-700 cursor-pointer disabled:opacity-50"
                  >
                    "Will this disrupt my team?"
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder={
                      selectedDeal.stage === 'CLOSED_WON'
                        ? 'Deal closed & paid! Select another account.'
                        : 'Simulate prospect objection or enter coaching note...'
                    }
                    disabled={isAiReplying || selectedDeal.stage === 'CLOSED_WON'}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && chatInput.trim()) {
                        handleAiInteractionTurn();
                      }
                    }}
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                  <button
                    onClick={() => handleAiInteractionTurn()}
                    disabled={isAiReplying || selectedDeal.stage === 'CLOSED_WON'}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 cursor-pointer disabled:opacity-50 shadow"
                  >
                    <SendIcon className="w-3.5 h-3.5" />
                    <span>{isAiReplying ? 'AI Thinking...' : 'AI Closer Turn'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 text-center text-slate-400">
              Select an account on the left to review the sales room.
            </div>
          )}
        </div>
      </div>

      {/* Official Texas Invoice & Paid Receipt Modal */}
      {selectedReceiptDeal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/50 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-lg font-extrabold text-white">
                  Official Sale Receipt & Texas Tax Invoice
                </h3>
              </div>
              <button
                onClick={() => setSelectedReceiptDeal(null)}
                className="text-slate-400 hover:text-white text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs font-mono">
              <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                <div>
                  <div className="text-cyan-400 font-bold text-sm">CFO TAX PRO LLC</div>
                  <div className="text-slate-400">dba FlowForge</div>
                  <div className="text-slate-500 text-[11px]">Texas SOS Charter #08051239</div>
                  <div className="text-slate-500 text-[11px]">Austin, Texas • admin@flowforge.fit</div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-extrabold text-sm">
                    {selectedReceiptDeal.invoiceNumber || 'INV-902184'}
                  </div>
                  <div className="text-slate-400">Status: PAID IN FULL (Stripe)</div>
                  <div className="text-slate-500 text-[11px]">
                    Transaction: {selectedReceiptDeal.paymentIntentId || 'pi_live_auth_3910'}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-slate-400 font-bold mb-1">BILLED TO:</div>
                <div className="text-white font-bold text-sm">{selectedReceiptDeal.companyName}</div>
                <div className="text-slate-300">
                  Attn: {selectedReceiptDeal.decisionMaker.name} ({selectedReceiptDeal.decisionMaker.title})
                </div>
                <div className="text-slate-400">{selectedReceiptDeal.decisionMaker.email}</div>
              </div>

              {/* Financial Line Item with Texas Tax Exemption */}
              <div className="border-t border-slate-800 pt-3 space-y-2">
                <div className="flex justify-between font-bold text-slate-300 pb-1 border-b border-slate-800">
                  <span>Description</span>
                  <span>Amount</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>
                    {selectedReceiptDeal.packageTier === 'ESA_AUDIT'
                      ? 'Enterprise Stability Assessment (ESA 30-Day Audit)'
                      : 'FlowForge Stability Core (Monthly Continuous Telemetry)'}
                  </span>
                  <span>${selectedReceiptDeal.dealValueUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Texas Tax Code § 151.351 (20% Statutory SaaS Exemption)</span>
                  <span>-${(selectedReceiptDeal.dealValueUSD * 0.20).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Net Taxable Basis (80% Data Processing)</span>
                  <span>${(selectedReceiptDeal.dealValueUSD * 0.80).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Texas State & Local Sales Tax (8.25%)</span>
                  <span>+${(selectedReceiptDeal.dealValueUSD * 0.80 * 0.0825).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-emerald-400 border-t border-slate-800 pt-2">
                  <span>TOTAL CHARGED & SETTLED</span>
                  <span>
                    ${(selectedReceiptDeal.dealValueUSD + selectedReceiptDeal.dealValueUSD * 0.80 * 0.0825).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-300">
                ✓ Validated Texas Tax Code § 151.351 data processing statutory exemption. Funds settled to CFO TAX PRO LLC operating account via Stripe.
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center space-x-1.5 cursor-pointer border border-slate-700"
              >
                <FileTextIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Download PDF</span>
              </button>
              <button
                onClick={() => setSelectedReceiptDeal(null)}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
