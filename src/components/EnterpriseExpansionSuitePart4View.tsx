import React, { useState, useMemo } from 'react';
import {
  SparklesIcon,
  ActivityIcon,
  ShieldCheckIcon,
  AwardIcon,
  BookOpenIcon,
  PresentationIcon,
  GlobeIcon,
  FileTextIcon,
  CopyIcon,
  CheckIcon,
  PrinterIcon,
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  TargetIcon,
  ZapIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  ClockIcon,
  CpuIcon,
  LockIcon,
  BarChart3Icon,
  LayersIcon,
  BuildingIcon,
  CalendarIcon,
  CompassIcon,
  RadioIcon,
  SlidersIcon,
  QuoteIcon,
  BookmarkCheckIcon
} from 'lucide-react';
import {
  FLOWFORGE_ANALYST_BRIEFING,
  FLOWFORGE_ECONOMIC_MODEL,
  FLOWFORGE_AUTONOMOUS_BLUEPRINT,
  FLOWFORGE_GLOBAL_LAUNCH_PLAN
} from '../data/expansionSuitePart4Data';

interface EnterpriseExpansionSuitePart4Props {
  onEnterApp?: () => void;
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart5?: () => void;
}

export const EnterpriseExpansionSuitePart4View: React.FC<EnterpriseExpansionSuitePart4Props> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart5
}) => {
  // Navigation across the 4 pillars
  const [activeTab, setActiveTab] = useState<'analyst' | 'economics' | 'blueprint' | 'launch_plan'>('analyst');

  // Copy notification state
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Print package
  const handlePrint = () => {
    window.print();
  };

  // --- TAB 1: ANALYST BRIEFING STATE ---
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState<number>(0);
  const selectedCapability = FLOWFORGE_ANALYST_BRIEFING.keyCapabilities[selectedCapabilityIndex];

  // --- TAB 2: ECONOMIC MODEL / ROI CALCULATOR STATE ---
  const [teamSize, setTeamSize] = useState<number>(100);
  const [avgSalary, setAvgSalary] = useState<number>(180000);
  const [roadmapValue, setRoadmapValue] = useState<number>(5000000);
  const [stabilityRiskLevel, setStabilityRiskLevel] = useState<'moderate' | 'high' | 'critical'>('high');

  // Economic Calculations based on whitepaper formulas
  const economicCalculations = useMemo(() => {
    const riskMultiplier = stabilityRiskLevel === 'critical' ? 1.35 : stabilityRiskLevel === 'high' ? 1.0 : 0.75;

    // 1. Burnout turnover savings: 15-25% reduction in attrition (baseline 18% turnover rate, replacement cost = 1.25x salary)
    const baselineTurnoverCount = teamSize * 0.18 * riskMultiplier;
    const reducedTurnoverCount = baselineTurnoverCount * 0.20; // 20% average reduction
    const burnoutSavings = reducedTurnoverCount * (avgSalary * 1.25);

    // 2. Volatility rework savings: 20-40% reduction in rework labor (baseline 28% of engineering time spent in rework)
    const totalPayroll = teamSize * avgSalary;
    const baselineReworkCost = totalPayroll * 0.28 * riskMultiplier;
    const reworkSavings = baselineReworkCost * 0.30; // 30% average reduction in rework

    // 3. Delivery speed & milestone acceleration: 10-20% improvement in time-to-market
    const deliverySpeedSavings = roadmapValue * 0.12 * riskMultiplier;

    // 4. Critical path dependency deadlock savings: 5-15% reduction in blocked idle developer hours
    const idleHoursPerYear = teamSize * 4 * 48; // 4 hrs/week idle per eng
    const hourlyRate = avgSalary / 2000;
    const criticalPathSavings = idleHoursPerYear * hourlyRate * 0.12 * riskMultiplier;

    const totalGrossSavings = burnoutSavings + reworkSavings + deliverySpeedSavings + criticalPathSavings;

    // FlowForge Enterprise cost ($6,000/mo base for up to 100 eng, scaling linearly)
    const annualSoftwareCost = Math.max(72000, Math.ceil(teamSize / 100) * 72000);
    const netSavings = totalGrossSavings - annualSoftwareCost;
    const roiMultiple = totalGrossSavings / annualSoftwareCost;
    const paybackWeeks = Math.max(2, Math.round((annualSoftwareCost / totalGrossSavings) * 52));

    return {
      burnoutSavings,
      reworkSavings,
      deliverySpeedSavings,
      criticalPathSavings,
      totalGrossSavings,
      annualSoftwareCost,
      netSavings,
      roiMultiple,
      paybackWeeks
    };
  }, [teamSize, avgSalary, roadmapValue, stabilityRiskLevel]);

  // Selected Math Theorem
  const [selectedTheoremIndex, setSelectedTheoremIndex] = useState<number>(0);

  // --- TAB 3: AUTONOMOUS BLUEPRINT STATE ---
  const [selectedBlueprintStep, setSelectedBlueprintStep] = useState<number>(1);
  const [selectedMaturityLevel, setSelectedMaturityLevel] = useState<number>(3);

  // --- TAB 4: GLOBAL LAUNCH PLAN STATE ---
  const [selectedPhaseNumber, setSelectedPhaseNumber] = useState<number>(1);
  const selectedPhase = FLOWFORGE_GLOBAL_LAUNCH_PLAN.phases.find(p => p.phaseNumber === selectedPhaseNumber) || FLOWFORGE_GLOBAL_LAUNCH_PLAN.phases[0];

  return (
    <div className="space-y-6 pb-20">
      {/* HEADER BANNER */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/30 flex items-center space-x-1.5">
                <CompassIcon className="w-3.5 h-3.5" />
                <span>Enterprise Expansion Suite &bull; Part IV</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                ESP Category Creator
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black text-slate-100 tracking-tight">
              Analyst Briefing &bull; Economics Whitepaper &bull; Category Launch
            </h1>
            <p className="text-slate-400 text-sm max-w-3xl mt-2 leading-relaxed">
              Institutional strategic collateral establishing FlowForge as the creator and category leader of{' '}
              <strong className="text-slate-200">Engineering Stability Platforms (ESP)</strong> — including Gartner/Forrester analyst briefings, full financial economics modeling, the Autonomous Blueprint, and the global launch sequence.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-2">
            {onNavigateToPart1 && (
              <button
                onClick={onNavigateToPart1}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                &larr; Part I: Brand
              </button>
            )}
            {onNavigateToPart2 && (
              <button
                onClick={onNavigateToPart2}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                Part II: Investor
              </button>
            )}
            {onNavigateToPart3 && (
              <button
                onClick={onNavigateToPart3}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                Part III: Marketing
              </button>
            )}
            {onNavigateToPart5 && (
              <button
                onClick={onNavigateToPart5}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>Part V: Keynote & Sales &rarr;</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Briefing</span>
            </button>
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ActivityIcon className="w-3.5 h-3.5" />
                <span>Live Stability Core</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB CONTROLS */}
        <div className="flex items-center space-x-2 mt-8 pt-6 border-t border-slate-800/80 overflow-x-auto">
          {[
            {
              id: 'analyst',
              label: '1. Analyst Briefing (ESP Category)',
              icon: CompassIcon,
              desc: 'Gartner / Forrester / IDC'
            },
            {
              id: 'economics',
              label: '2. Engineering Economics Whitepaper',
              icon: DollarSignIcon,
              desc: 'Mathematical Proofs & ROI Engine'
            },
            {
              id: 'blueprint',
              label: '3. Autonomous Engineering Blueprint',
              icon: CpuIcon,
              desc: '5-Step Implementation Runbook'
            },
            {
              id: 'launch_plan',
              label: '4. Global Category Launch Plan',
              icon: GlobeIcon,
              desc: 'Phased Sequence & Keynote'
            }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-black'
                    : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className={`text-[10px] font-normal ${isActive ? 'text-slate-900/80 font-medium' : 'text-slate-500'}`}>
                    {tab.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: ANALYST BRIEFING (ESP CATEGORY CREATOR)                           */}
      {/* ========================================================================= */}
      {activeTab === 'analyst' && (
        <div className="space-y-6">
          {/* CATEGORY BANNER */}
          <div className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                    Category: {FLOWFORGE_ANALYST_BRIEFING.category.acronym}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Audience: Gartner &bull; Forrester &bull; IDC &bull; RedMonk &bull; Constellation
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-100">
                  {FLOWFORGE_ANALYST_BRIEFING.title}
                </h2>
                <p className="text-cyan-300/90 text-sm font-medium">
                  {FLOWFORGE_ANALYST_BRIEFING.subtitle}
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_ANALYST_BRIEFING.title}\n\nExecutive Summary:\n${FLOWFORGE_ANALYST_BRIEFING.executiveSummary}\n\nCategory: ${FLOWFORGE_ANALYST_BRIEFING.category.name} (${FLOWFORGE_ANALYST_BRIEFING.category.acronym})\nDefinition: ${FLOWFORGE_ANALYST_BRIEFING.category.definition}`,
                    'analyst_briefing_full'
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-2 shrink-0"
              >
                {copiedId === 'analyst_briefing_full' ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Briefing Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-cyan-400" />
                    <span>Copy Analyst Briefing</span>
                  </>
                )}
              </button>
            </div>

            {/* EXECUTIVE SUMMARY BOX */}
            <div className="mt-6 p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5 font-bold">
                <BookOpenIcon className="w-3.5 h-3.5" />
                <span>Executive Summary for Industry Analysts</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {FLOWFORGE_ANALYST_BRIEFING.executiveSummary}
              </p>
            </div>
          </div>

          {/* TARGET ANALYST MATRIX & URGENCY */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:col-span-2">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
                <TargetIcon className="w-4 h-4 text-cyan-400" />
                <span>Official Category Definition: Engineering Stability Platforms (ESP)</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-4 font-serif italic">
                "{FLOWFORGE_ANALYST_BRIEFING.category.definition}"
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start space-x-3">
                <AlertTriangleIcon className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                <div>
                  <strong className="font-bold text-amber-200 block mb-1">Macro Urgency Driver</strong>
                  {FLOWFORGE_ANALYST_BRIEFING.category.urgencyDriver}
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-3">
                <UsersIcon className="w-4 h-4 text-emerald-400" />
                <span>Target Briefing Practices</span>
              </h3>
              <div className="space-y-2">
                {FLOWFORGE_ANALYST_BRIEFING.targetAnalysts.map((ta, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{ta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KEY CAPABILITIES EXPLORER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-100 flex items-center space-x-2">
                  <CpuIcon className="w-5 h-5 text-cyan-400" />
                  <span>The 7 Foundational ESP Capabilities</span>
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Click each capability to review architectural metrics and analyst evaluation criteria.
                </p>
              </div>
            </div>

            {/* Horizontal capability pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-6">
              {FLOWFORGE_ANALYST_BRIEFING.keyCapabilities.map((cap, idx) => {
                const isSelected = selectedCapabilityIndex === idx;
                return (
                  <button
                    key={cap.acronym}
                    onClick={() => setSelectedCapabilityIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-black'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/80'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isSelected ? 'bg-slate-950 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                      {cap.acronym}
                    </span>
                    <span>{cap.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Capability Details */}
            {selectedCapability && (
              <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold border border-cyan-500/30">
                      {selectedCapability.acronym}
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">{selectedCapability.name}</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedCapability.description}</p>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase mb-1">
                      Architectural Tagline
                    </div>
                    <div className="text-xs text-slate-200 font-semibold">{selectedCapability.tagline}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                      Key Invariants & Metrics
                    </div>
                    <div className="space-y-1.5">
                      {selectedCapability.metrics.map((m, i) => (
                        <div key={i} className="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center space-x-2">
                          <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20">
                    <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-1 font-bold">
                      Analyst Significance
                    </div>
                    <div className="text-xs text-slate-300 leading-normal">
                      {selectedCapability.analystSignificance}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MARKET INSIGHTS & COMPETITIVE QUADRANT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Market Insights */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
                <ActivityIcon className="w-4 h-4 text-cyan-400" />
                <span>Market Insights & Macro Headwinds</span>
              </h3>
              <div className="space-y-3">
                {FLOWFORGE_ANALYST_BRIEFING.marketInsight.map((mi, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-slate-200">{mi.trend}</div>
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-mono text-xs font-bold">
                        {mi.stat}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{mi.context}</p>
                    <div className="text-[11px] text-cyan-300 font-mono pt-1 border-t border-slate-800/60">
                      Implication: {mi.implication}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Category Leadership Quadrant */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                    <BarChart3Icon className="w-4 h-4 text-emerald-400" />
                    <span>ESP Category Positioning Matrix</span>
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    2026 Wave
                  </span>
                </div>

                {/* 2D Matrix Canvas simulation */}
                <div className="relative w-full h-64 bg-slate-950 rounded-xl border border-slate-800 p-4 overflow-hidden">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="border-r border-b border-slate-800/60 p-2 text-[9px] text-slate-600 uppercase font-mono">
                      Niche Analysts
                    </div>
                    <div className="border-b border-slate-800/60 p-2 text-[9px] text-slate-600 uppercase font-mono text-right">
                      Visionaries
                    </div>
                    <div className="border-r border-slate-800/60 p-2 text-[9px] text-slate-600 uppercase font-mono">
                      Challengers
                    </div>
                    <div className="p-2 text-[9px] text-emerald-500/70 uppercase font-mono font-bold text-right bg-emerald-950/10">
                      ESP Category Leader
                    </div>
                  </div>

                  {/* Adjacent Peers */}
                  {FLOWFORGE_ANALYST_BRIEFING.quadrantPositioning.adjacentPeers.map((peer, i) => (
                    <div
                      key={i}
                      style={{ left: `${peer.x}%`, top: `${100 - peer.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    >
                      <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-slate-400 border border-slate-400 transition" />
                      <div className="absolute left-4 top-0 bg-slate-900 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap shadow-lg">
                        {peer.name}
                      </div>
                    </div>
                  ))}

                  {/* FlowForge Position */}
                  <div
                    style={{
                      left: `${FLOWFORGE_ANALYST_BRIEFING.quadrantPositioning.flowforgePosition.x}%`,
                      top: `${100 - FLOWFORGE_ANALYST_BRIEFING.quadrantPositioning.flowforgePosition.y}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  >
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-cyan-400 border-2 border-slate-950 animate-pulse shadow-lg shadow-cyan-400/50" />
                      <div className="absolute right-6 -top-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md whitespace-nowrap shadow-xl">
                        ★ FlowForge (ESP Leader)
                      </div>
                    </div>
                  </div>

                  {/* Axes labels */}
                  <div className="absolute bottom-1 right-2 text-[9px] font-mono text-slate-500">
                    X: Completeness of Vision &rarr;
                  </div>
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-500">
                    &uarr; Y: Autonomous Execution
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <strong className="text-slate-200 block mb-1">Why Adjacent Tools Are Insufficient:</strong>
                DevOps tools (LinearB, Jellyfish) measure retrospective metrics; APMs (Datadog) observe servers; Issue Trackers (Jira) store tickets. None compute human load elasticity or enforce mathematical stability invariants.
              </div>
            </div>
          </div>

          {/* COMPETITIVE LANDSCAPE DETAILED TABLE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <LayersIcon className="w-4 h-4 text-cyan-400" />
              <span>Competitive Landscape & Adjacent Category Dissection</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 pr-4">Adjacent Category</th>
                    <th className="pb-3 pr-4">Representative Vendors</th>
                    <th className="pb-3 pr-4">What They Do Well</th>
                    <th className="pb-3 pr-4 text-rose-400">What They Lack</th>
                    <th className="pb-3 text-cyan-400">FlowForge ESP Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {FLOWFORGE_ANALYST_BRIEFING.competitiveLandscape.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 pr-4 font-bold text-slate-200 whitespace-nowrap">{row.category}</td>
                      <td className="py-3.5 pr-4 text-slate-400 font-mono whitespace-nowrap">{row.examples.join(', ')}</td>
                      <td className="py-3.5 pr-4 text-slate-300">{row.whatTheyDo}</td>
                      <td className="py-3.5 pr-4 text-rose-300/90">{row.whatTheyLack}</td>
                      <td className="py-3.5 text-cyan-300 font-medium">{row.flowForgeDifference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ANALYST TAKEAWAY & OFFICIAL REPORT QUOTE */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-6 lg:p-8 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <QuoteIcon className="w-4 h-4" />
              <span>Recommended Report Snippet for Enterprise Analysts</span>
            </div>
            <blockquote className="text-slate-200 text-base font-serif italic border-l-2 border-cyan-400 pl-4 py-1 leading-relaxed">
              {FLOWFORGE_ANALYST_BRIEFING.analystTakeaway.quoteForReports}
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs">
              <div>
                <span className="text-slate-500 block font-mono">Recommended Positioning:</span>
                <span className="text-slate-200 font-bold">{FLOWFORGE_ANALYST_BRIEFING.analystTakeaway.recommendedPositioning}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-mono">Target Enterprise Buyer:</span>
                <span className="text-slate-200 font-bold">{FLOWFORGE_ANALYST_BRIEFING.analystTakeaway.targetBuyer}</span>
              </div>
              <div>
                <span className="text-slate-500 block font-mono">Procurement Budget:</span>
                <span className="text-slate-200 font-bold">{FLOWFORGE_ANALYST_BRIEFING.analystTakeaway.procurementCategory}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: ENGINEERING ECONOMICS WHITEPAPER & ROI ENGINE                      */}
      {/* ========================================================================= */}
      {activeTab === 'economics' && (
        <div className="space-y-6">
          {/* WHITEPAPER HEADER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                    Economic Model & Financial Justification
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Institutional Whitepaper</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-100">
                  {FLOWFORGE_ECONOMIC_MODEL.title}
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  {FLOWFORGE_ECONOMIC_MODEL.subtitle}
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_ECONOMIC_MODEL.title}\n\nAbstract:\n${FLOWFORGE_ECONOMIC_MODEL.abstract}\n\nConclusion:\n${FLOWFORGE_ECONOMIC_MODEL.conclusion}`,
                    'economics_abstract_copy'
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-2 shrink-0"
              >
                {copiedId === 'economics_abstract_copy' ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Whitepaper Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-emerald-400" />
                    <span>Copy Whitepaper Abstract</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              <strong className="text-slate-100 block mb-1 font-mono text-xs uppercase tracking-wider text-emerald-400">
                Executive Abstract
              </strong>
              {FLOWFORGE_ECONOMIC_MODEL.abstract}
            </div>
          </div>

          {/* DYNAMIC INTERACTIVE ROI & FINANCIAL SAVINGS CALCULATOR */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 lg:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-100 flex items-center space-x-2">
                  <DollarSignIcon className="w-5 h-5 text-emerald-400" />
                  <span>Enterprise Stability Economic Value Calculator</span>
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Model your engineering organization’s financial savings across the four stability cost drivers.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                Real-Time ROI Engine
              </span>
            </div>

            {/* Input Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800 mb-6">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  Engineering Team Size ({teamSize} Devs)
                </label>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={teamSize}
                  onChange={e => setTeamSize(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>20 Devs</span>
                  <span className="text-emerald-400 font-bold">{teamSize}</span>
                  <span>1,000 Devs</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  Avg Loaded Salary (${(avgSalary / 1000).toFixed(0)}k/yr)
                </label>
                <input
                  type="range"
                  min="120000"
                  max="250000"
                  step="5000"
                  value={avgSalary}
                  onChange={e => setAvgSalary(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$120k</span>
                  <span className="text-emerald-400 font-bold">${(avgSalary / 1000).toFixed(0)}k</span>
                  <span>$250k</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">
                  Annual Roadmap Value (${(roadmapValue / 1000000).toFixed(1)}M)
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={roadmapValue}
                  onChange={e => setRoadmapValue(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$1M</span>
                  <span className="text-emerald-400 font-bold">${(roadmapValue / 1000000).toFixed(1)}M</span>
                  <span>$50M</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">Current Instability Level</label>
                <div className="grid grid-cols-3 gap-1">
                  {(['moderate', 'high', 'critical'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setStabilityRiskLevel(lvl)}
                      className={`py-1.5 rounded text-[11px] font-bold uppercase transition cursor-pointer ${
                        stabilityRiskLevel === lvl
                          ? 'bg-emerald-500 text-slate-950 font-black shadow'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1 text-center">
                  Risk Multiplier: {stabilityRiskLevel === 'critical' ? '1.35x' : stabilityRiskLevel === 'high' ? '1.00x' : '0.75x'}
                </div>
              </div>
            </div>

            {/* Real-time Economic Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Burnout Turnover Savings</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  ${(economicCalculations.burnoutSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] text-slate-500 mt-1">15–25% reduction in voluntary senior departures</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Code Rework Labor Savings</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">
                  ${(economicCalculations.reworkSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] text-slate-500 mt-1">20–40% drop in post-merge defect rewrites</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Milestone Acceleration</span>
                <div className="text-2xl font-black text-cyan-400 mt-1">
                  ${(economicCalculations.deliverySpeedSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] text-slate-500 mt-1">10–20% faster commercial go-to-market speed</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Dependency Unblocking</span>
                <div className="text-2xl font-black text-cyan-400 mt-1">
                  ${(economicCalculations.criticalPathSavings / 1000).toFixed(0)}k
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Idle waiting hours eliminated by PR rebalancing</div>
              </div>
            </div>

            {/* BOTTOM TOTAL SUMMARY BOX */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-cyan-950/40 border border-emerald-500/40 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  Total Projected Net Economic Return
                </span>
                <div className="text-3xl lg:text-4xl font-black text-slate-100 mt-1">
                  ${(economicCalculations.totalGrossSavings / 1000000).toFixed(2)}M <span className="text-lg text-slate-400 font-normal">/ year</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Annual FlowForge Investment: ${(economicCalculations.annualSoftwareCost / 1000).toFixed(0)}k &bull; Net Profit Addition: ${(economicCalculations.netSavings / 1000000).toFixed(2)}M
                </div>
              </div>

              <div className="flex items-center space-x-6 shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400">
                    {economicCalculations.roiMultiple.toFixed(1)}x
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Annual ROI Multiple</span>
                </div>
                <div className="w-px h-12 bg-slate-800" />
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">
                    {economicCalculations.paybackWeeks} wks
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Payback Horizon</span>
                </div>
              </div>
            </div>
          </div>

          {/* THE 4 COST DRIVERS & FINANCIAL IMPACT TABLE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cost Drivers */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                <AlertTriangleIcon className="w-4 h-4 text-amber-400" />
                <span>The 4 Primary Instability Cost Drivers</span>
              </h3>
              <div className="space-y-3">
                {FLOWFORGE_ECONOMIC_MODEL.costDrivers.map(d => (
                  <div key={d.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200">{d.name}</span>
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {d.typicalLossPer100Eng}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{d.mechanism}</p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                      Economic Cost: {d.economicCost}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium pt-1">
                      &bull; FlowForge Remedy: {d.flowforgeRemedy}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Impact Benchmarks */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
                  <TrendingUpIcon className="w-4 h-4 text-emerald-400" />
                  <span>Financial Impact & Instability Reduction Benchmarks</span>
                </h3>
                <div className="space-y-3">
                  {FLOWFORGE_ECONOMIC_MODEL.financialImpact.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{item.metric}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                          {item.percentageRange}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-emerald-400 font-bold">
                        Annual Impact: {item.annualDollarImpactPer100Eng} per 100 devs
                      </div>
                      <p className="text-[11px] text-slate-400">Methodology: {item.methodology}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instability Reduction Range Banner */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center">
                <div className="text-2xl font-black text-emerald-400 font-mono">
                  {FLOWFORGE_ECONOMIC_MODEL.stabilityRoi.instabilityReductionRange}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  {FLOWFORGE_ECONOMIC_MODEL.stabilityRoi.headline}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {FLOWFORGE_ECONOMIC_MODEL.stabilityRoi.summary}
                </p>
              </div>
            </div>
          </div>

          {/* MATHEMATICAL FOUNDATIONS (KINGMAN, LITTLE'S LAW, PARETO) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <CpuIcon className="w-4 h-4 text-cyan-400" />
              <span>Mathematical Foundations of Engineering Queuing Stability</span>
            </h3>

            <div className="flex items-center space-x-2 overflow-x-auto pb-2 mb-6">
              {FLOWFORGE_ECONOMIC_MODEL.mathematicalFoundations.map((mf, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTheoremIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                    selectedTheoremIndex === idx
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
                  }`}
                >
                  {mf.name.split('(')[0]}
                </button>
              ))}
            </div>

            {(() => {
              const theorem = FLOWFORGE_ECONOMIC_MODEL.mathematicalFoundations[selectedTheoremIndex];
              return (
                <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-100">{theorem.name}</h4>
                    <span className="text-xs font-mono text-cyan-400 uppercase bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      Theorem Proof
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-sm text-cyan-300 text-center font-bold">
                    {theorem.formula}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1 uppercase">Queuing Theorem:</span>
                    <p className="text-sm text-slate-300">{theorem.theorem}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-xs font-mono text-emerald-400 block mb-1 uppercase font-bold">
                      Engineering Translation for CTOs:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{theorem.engineeringInterpretation}</p>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* CASE STUDY PROFILES TABLE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <BuildingIcon className="w-4 h-4 text-emerald-400" />
              <span>Enterprise Case Study Economic Archetypes</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 pr-4">Enterprise Tier</th>
                    <th className="pb-3 pr-4">Team Size</th>
                    <th className="pb-3 pr-4">Annual Budget</th>
                    <th className="pb-3 pr-4">Pre-Score &rarr; Post-Score</th>
                    <th className="pb-3 pr-4 text-emerald-400">Annual Gross Savings</th>
                    <th className="pb-3 pr-4 text-cyan-400">Net ROI Multiple</th>
                    <th className="pb-3">Payback Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {FLOWFORGE_ECONOMIC_MODEL.caseStudyProfiles.map((cs, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 pr-4 font-bold text-slate-200">{cs.tier}</td>
                      <td className="py-3.5 pr-4 text-slate-400 font-mono">{cs.teamSize} Devs</td>
                      <td className="py-3.5 pr-4 text-slate-300 font-mono">{cs.annualBudget}</td>
                      <td className="py-3.5 pr-4 font-mono">
                        <span className="text-rose-400">{cs.preScore} LSS</span> &rarr;{' '}
                        <span className="text-emerald-400 font-bold">{cs.postScore} LSS</span>
                      </td>
                      <td className="py-3.5 pr-4 text-emerald-400 font-bold font-mono">{cs.annualGrossSavings}</td>
                      <td className="py-3.5 pr-4 text-cyan-400 font-black font-mono">{cs.netRoiMultiple}</td>
                      <td className="py-3.5 text-slate-300 font-mono">{cs.paybackWeeks} Weeks</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: AUTONOMOUS ENGINEERING BLUEPRINT                                  */}
      {/* ========================================================================= */}
      {activeTab === 'blueprint' && (
        <div className="space-y-6">
          {/* BLUEPRINT HEADER */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                    Operational Blueprint &bull; Self-Healing Systems
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Standard Operating Architecture</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-100">
                  {FLOWFORGE_AUTONOMOUS_BLUEPRINT.title}
                </h2>
                <p className="text-slate-400 text-xs mt-1">
                  {FLOWFORGE_AUTONOMOUS_BLUEPRINT.subtitle}
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_AUTONOMOUS_BLUEPRINT.title}\n\nAbstract:\n${FLOWFORGE_AUTONOMOUS_BLUEPRINT.abstract}\n\n5 Steps:\n${FLOWFORGE_AUTONOMOUS_BLUEPRINT.blueprintSteps.map(s => `${s.stepNumber}. ${s.stepTitle} (${s.duration}): ${s.focus}`).join('\n')}`,
                    'blueprint_full_copy'
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-2 shrink-0"
              >
                {copiedId === 'blueprint_full_copy' ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Blueprint Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-cyan-400" />
                    <span>Copy Blueprint Runbook</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-300 leading-relaxed">
              <strong className="text-slate-100 block mb-1 font-mono text-xs uppercase tracking-wider text-cyan-400">
                Architectural Intent
              </strong>
              {FLOWFORGE_AUTONOMOUS_BLUEPRINT.abstract}
            </div>
          </div>

          {/* THE 5 CORE PRINCIPLES */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <BookmarkCheckIcon className="w-4 h-4 text-cyan-400" />
              <span>The 5 Core Principles of Autonomous Engineering</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {FLOWFORGE_AUTONOMOUS_BLUEPRINT.corePrinciples.map(p => (
                <div key={p.number} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-black text-xs flex items-center justify-center mb-2 border border-cyan-500/30">
                      0{p.number}
                    </div>
                    <h4 className="text-xs font-black text-slate-100">{p.principle}</h4>
                    <div className="text-[11px] text-cyan-300 font-serif italic mt-0.5">{p.tagline}</div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-normal">{p.description}</p>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800/80 text-[10px] font-mono text-emerald-400 font-medium">
                    {p.engineeringRule}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-STEP INTERACTIVE BLUEPRINT TIMELINE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-black text-slate-100 flex items-center space-x-2">
                  <CpuIcon className="w-5 h-5 text-emerald-400" />
                  <span>The 5 Blueprint Steps to Autonomous Stability</span>
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Sequential implementation phases from initial telemetry baseline to institutional Level 4 certification.
                </p>
              </div>
            </div>

            {/* Step navigation tabs */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {FLOWFORGE_AUTONOMOUS_BLUEPRINT.blueprintSteps.map(s => {
                const isSelected = selectedBlueprintStep === s.stepNumber;
                return (
                  <button
                    key={s.stepNumber}
                    onClick={() => setSelectedBlueprintStep(s.stepNumber)}
                    className={`p-3 rounded-xl text-left transition cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20 font-black'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase">Step {s.stepNumber} &bull; {s.duration}</div>
                    <div className="text-xs font-bold truncate mt-0.5">{s.stepTitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Step Details View */}
            {(() => {
              const step = FLOWFORGE_AUTONOMOUS_BLUEPRINT.blueprintSteps.find(s => s.stepNumber === selectedBlueprintStep)!;
              return (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                          Step {step.stepNumber}: {step.phaseName}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                          <ClockIcon className="w-3.5 h-3.5" />
                          <span>{step.duration}</span>
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-slate-100">{step.stepTitle}</h4>
                      <p className="text-slate-300 text-xs mt-1">{step.focus}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-right shrink-0">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase block font-bold">Success Gate</span>
                      <span className="text-xs text-slate-200 font-semibold">{step.successMetric}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Implementation Actions */}
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold flex items-center space-x-1.5">
                        <CheckCircle2Icon className="w-3.5 h-3.5" />
                        <span>Tactical Actions</span>
                      </span>
                      <div className="space-y-2">
                        {step.actions.map((act, i) => (
                          <div key={i} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-normal">
                            &bull; {act}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Operational Invariants */}
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2 font-bold flex items-center space-x-1.5">
                        <LockIcon className="w-3.5 h-3.5" />
                        <span>Statutory Invariants</span>
                      </span>
                      <div className="space-y-2">
                        {step.invariants.map((inv, i) => (
                          <div key={i} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-amber-200/90 leading-normal">
                            &bull; {inv}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Artifact Deliverables */}
                    <div>
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2 font-bold flex items-center space-x-1.5">
                        <AwardIcon className="w-3.5 h-3.5" />
                        <span>Auditable Deliverables</span>
                      </span>
                      <div className="space-y-2">
                        {step.deliverables.map((del, i) => (
                          <div key={i} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200 font-mono font-medium">
                            &bull; {del}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* MATURITY LEVELS HIERARCHY */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <AwardIcon className="w-4 h-4 text-purple-400" />
              <span>Engineering Stability Maturity Framework (Levels 1 – 4)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLOWFORGE_AUTONOMOUS_BLUEPRINT.maturityLevels.map(ml => {
                const isSelected = selectedMaturityLevel === ml.level;
                return (
                  <div
                    key={ml.level}
                    onClick={() => setSelectedMaturityLevel(ml.level)}
                    className={`p-5 rounded-xl border transition cursor-pointer space-y-3 ${
                      isSelected
                        ? 'bg-slate-950 border-cyan-400 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {ml.lssThreshold}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">Tier 0{ml.level}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100">{ml.name}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{ml.operatingState}</p>

                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                      <span className="text-slate-500 block font-mono text-[10px]">Governance:</span>
                      {ml.governanceModel}
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase mb-1">Capabilities Unlocked:</div>
                      <div className="space-y-1">
                        {ml.capabilitiesUnlocked.map((cap, i) => (
                          <div key={i} className="text-[11px] text-slate-300 font-mono flex items-center space-x-1.5">
                            <span className="w-1 h-1 rounded-full bg-cyan-400" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OUTCOME SUMMARY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase block mb-1">Predictable Delivery</span>
              <p className="text-xs text-slate-300 leading-normal">{FLOWFORGE_AUTONOMOUS_BLUEPRINT.outcomeSummary.predictableDelivery}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400 uppercase block mb-1">Reduced Burnout</span>
              <p className="text-xs text-slate-300 leading-normal">{FLOWFORGE_AUTONOMOUS_BLUEPRINT.outcomeSummary.reducedBurnout}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-purple-400 uppercase block mb-1">Autonomous Stability</span>
              <p className="text-xs text-slate-300 leading-normal">{FLOWFORGE_AUTONOMOUS_BLUEPRINT.outcomeSummary.autonomousStability}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Board Readiness</span>
              <p className="text-xs text-slate-300 leading-normal">{FLOWFORGE_AUTONOMOUS_BLUEPRINT.outcomeSummary.boardReadiness}</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: GLOBAL CATEGORY LAUNCH PLAN                                        */}
      {/* ========================================================================= */}
      {activeTab === 'launch_plan' && (
        <div className="space-y-6">
          {/* LAUNCH PLAN BANNER */}
          <div className="bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-purple-500/30 rounded-2xl p-6 lg:p-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                    Category Creation &bull; 4-Phase Strategy
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{FLOWFORGE_GLOBAL_LAUNCH_PLAN.targetWindow}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-100">
                  {FLOWFORGE_GLOBAL_LAUNCH_PLAN.title}
                </h2>
                <p className="text-purple-300 text-sm font-semibold mt-1">
                  "{FLOWFORGE_GLOBAL_LAUNCH_PLAN.launchMessage}"
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_GLOBAL_LAUNCH_PLAN.title}\n\nLaunch Message:\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.launchMessage}\n\nPhases:\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.phases.map(p => `Phase ${p.phaseNumber}: ${p.phaseName} (${p.timeframe})\nObjective: ${p.objective}`).join('\n\n')}`,
                    'launch_plan_full_copy'
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-2 shrink-0"
              >
                {copiedId === 'launch_plan_full_copy' ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Launch Plan Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-purple-400" />
                    <span>Copy Launch Sequence</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 4 PHASES INTERACTIVE TIMELINE */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <CalendarIcon className="w-4 h-4 text-purple-400" />
              <span>Phased Category Rollout Roadmap</span>
            </h3>

            {/* Phase selector tabs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
              {FLOWFORGE_GLOBAL_LAUNCH_PLAN.phases.map(ph => {
                const isSelected = selectedPhaseNumber === ph.phaseNumber;
                return (
                  <button
                    key={ph.phaseNumber}
                    onClick={() => setSelectedPhaseNumber(ph.phaseNumber)}
                    className={`p-4 rounded-xl text-left transition cursor-pointer border ${
                      isSelected
                        ? 'bg-purple-500 text-slate-950 border-purple-400 shadow-lg shadow-purple-500/20 font-black'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase">Phase 0{ph.phaseNumber} &bull; {ph.timeframe}</div>
                    <div className="text-xs font-bold truncate mt-1">{ph.phaseName.split(':')[0]}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Phase View */}
            <div className="p-6 rounded-xl bg-slate-950 border border-purple-500/30 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase font-bold">
                    Phase 0{selectedPhase.phaseNumber}: {selectedPhase.timeframe}
                  </span>
                  <h4 className="text-xl font-black text-slate-100 mt-0.5">{selectedPhase.phaseName}</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-3xl">{selectedPhase.objective}</p>
                </div>
              </div>

              {/* Deliverables in this Phase */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3 font-bold">
                  Key Strategic Deliverables
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPhase.keyDeliverables.map((del, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{del.title}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          del.status === 'Ready'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : del.status === 'In Execution'
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {del.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">{del.description}</p>
                      <div className="text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800/60">
                        Owner: <strong className="text-slate-300">{del.owner}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target KPIs */}
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-2 font-bold">
                  Phase Exit KPI Gates
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedPhase.kpis.map((kpi, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-300">{kpi.metric}</span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono text-xs font-black">
                        {kpi.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* OFFICIAL PRESS RELEASE DRAFT */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                <FileTextIcon className="w-4 h-4 text-cyan-400" />
                <span>Official Wire Press Release (PR Newswire / BusinessWire)</span>
              </h3>
              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.headline}\n\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.dateline}\n\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.leadParagraph}\n\nKey Highlights:\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.keyHighlights.join('\n')}\n\nQuotes:\n${FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.quotes.map(q => `"${q.statement}" - ${q.speaker}`).join('\n\n')}`,
                    'pr_copy'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedId === 'pr_copy' ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy Press Release</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs font-serif leading-relaxed">
              <div className="text-lg font-black font-sans text-slate-100 leading-snug">
                {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.headline}
              </div>
              <div className="text-xs font-sans text-cyan-300 font-semibold">
                {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.subheadline}
              </div>
              <div className="text-[11px] font-mono text-slate-500 uppercase">
                {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.dateline}
              </div>
              <p className="text-slate-300 text-sm">{FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.leadParagraph}</p>

              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-sans space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold block mb-1">Key Announcement Highlights</span>
                {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.keyHighlights.map((hl, i) => (
                  <div key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                    <span className="text-cyan-400 font-bold">&bull;</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.quotes.map((q, i) => (
                  <blockquote key={i} className="p-3 rounded-lg bg-slate-900/60 border-l-2 border-purple-400 text-slate-200 text-xs italic">
                    "{q.statement}"
                    <footer className="text-[10px] font-sans font-normal text-slate-400 mt-1 not-italic font-mono">
                      — {q.speaker}, {q.title}
                    </footer>
                  </blockquote>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Call to Action: {FLOWFORGE_GLOBAL_LAUNCH_PLAN.pressReleaseTemplate.callToAction}
              </div>
            </div>
          </div>

          {/* VIRTUAL KEYNOTE RUN OF SHOW */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2 mb-4">
              <RadioIcon className="w-4 h-4 text-rose-400" />
              <span>Stability OS Keynote Broadcast (45-Minute Run of Show)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 pr-4">Timestamp</th>
                    <th className="pb-3 pr-4">Broadcast Segment</th>
                    <th className="pb-3 pr-4">Lead Presenter</th>
                    <th className="pb-3">Visual / Live Telemetry Demo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {FLOWFORGE_GLOBAL_LAUNCH_PLAN.keynoteRunOfShow.map((seg, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 pr-4 font-mono text-cyan-400 whitespace-nowrap font-bold">{seg.timeMin}</td>
                      <td className="py-3.5 pr-4 font-bold text-slate-200">{seg.segment}</td>
                      <td className="py-3.5 pr-4 text-slate-300 font-mono">{seg.speaker}</td>
                      <td className="py-3.5 text-slate-400">{seg.keyVisualOrDemo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
