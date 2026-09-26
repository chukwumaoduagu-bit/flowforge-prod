import React, { useState } from 'react';
import { 
  ShieldCheckIcon, 
  ShieldAlertIcon,
  LayersIcon, 
  ZapIcon, 
  TrendingUpIcon, 
  FileTextIcon, 
  AwardIcon, 
  ArrowRightIcon, 
  CheckCircle2Icon, 
  AlertTriangleIcon,
  ClockIcon,
  ActivityIcon,
  LockIcon,
  ScaleIcon,
  CompassIcon,
  DownloadIcon,
  CheckIcon,
  CopyIcon,
  PlayIcon,
  RotateCcwIcon,
  PrinterIcon,
  UsersIcon,
  CalendarIcon,
  DollarSignIcon,
  SparklesIcon,
  ChevronRightIcon,
  MailIcon,
  SendIcon,
  PresentationIcon,
  Maximize2Icon,
  ChevronLeftIcon,
  GlobeIcon,
  MicIcon
} from 'lucide-react';
import { 
  GOVERNANCE_RULEPACK_V1, 
  AUTONOMY_PLAYBOOK_V1, 
  INTELLIGENCE_FORECASTS,
  FOUNDER_DEMO_SCRIPT_STEPS,
  ESA_EXECUTIVE_DELIVERABLE_V1,
  TARGET_PILOT_CANDIDATES,
  PILOT_ONBOARDING_PLAN_30DAYS,
  PILOT_ONBOARDING_PACKAGE,
  PRICING_TIERS_DATA,
  CATEGORY_NARRATIVE_DATA,
  FLOWFORGE_PITCH_DECK_SLIDES,
  GovernanceRule, 
  AutonomyProtocol,
  DemoScriptStep,
  PilotCandidateProfile,
  PricingTier,
  PitchDeckSlide
} from '../data/enterpriseReadinessData';
import { EnterpriseExpansionSuiteView } from './EnterpriseExpansionSuiteView';
import { EnterpriseExpansionSuitePart2View } from './EnterpriseExpansionSuitePart2View';
import { EnterpriseExpansionSuitePart3View } from './EnterpriseExpansionSuitePart3View';
import { EnterpriseExpansionSuitePart4View } from './EnterpriseExpansionSuitePart4View';
import { EnterpriseExpansionSuitePart5View } from './EnterpriseExpansionSuitePart5View';

interface EnterpriseReadinessProps {
  onNavigateToStability?: () => void;
  onOpenAudit?: () => void;
}

export const EnterpriseReadinessView: React.FC<EnterpriseReadinessProps> = ({
  onNavigateToStability,
  onOpenAudit
}) => {
  // Navigation across the Founder Paths
  const [activeTab, setActiveTab] = useState<
    'demo' | 'esa_artifact' | 'candidates' | 'onboarding' | 'pricing' | 'category' | 'certification' | 'gtm' | 'pitch_deck' | 'expansion_suite' | 'expansion_suite_part2' | 'expansion_suite_part3' | 'expansion_suite_part4' | 'expansion_suite_part5'
  >('demo');

  // Pitch Deck State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [deckViewMode, setDeckViewMode] = useState<'slide' | 'grid'>('slide');

  // Interactive Demo Script State
  const [currentDemoStepIndex, setCurrentDemoStepIndex] = useState<number>(0);
  const [isExecutingAction, setIsExecutingAction] = useState<boolean>(false);
  const [demoActionSuccess, setDemoActionSuccess] = useState<boolean>(false);

  // Pricing Interval State
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');

  // Pilot Candidate Interactive State
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>('CANDIDATE-01');

  // Copy Feedback State
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Intelligence Horizon State
  const [selectedHorizon, setSelectedHorizon] = useState<'7-day' | '14-day' | '30-day'>('14-day');

  // Interactive Onboarding Checklist State
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({
    '1-0': true, // GitHub connected
    '1-1': true  // Baseline ingested
  });

  // Pilot Onboarding Sub-Tab State
  const [onboardingSubTab, setOnboardingSubTab] = useState<
    'welcome' | 'timeline' | 'success' | 'kickoff' | 'tech_setup' | 'reports' | 'closeout'
  >('welcome');

  const currentDemoStep = FOUNDER_DEMO_SCRIPT_STEPS[currentDemoStepIndex];
  const selectedCandidate = TARGET_PILOT_CANDIDATES.find(c => c.id === selectedCandidateId) || TARGET_PILOT_CANDIDATES[0];
  const forecast = INTELLIGENCE_FORECASTS[selectedHorizon];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handleExecuteDemoAction = async () => {
    setIsExecutingAction(true);
    try {
      // Call backend API if available
      await fetch('/api/stability/rebalance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceEngineerId: 'ENG-TX-01', // Charlie Vance
          targetEngineerId: 'ENG-TX-04', // Diana Prince
          taskId: 'TSK-K8S-01'
        })
      }).catch(() => null);

      setDemoActionSuccess(true);
      // Advance to step 6 (Instant Improvement)
      setTimeout(() => {
        setIsExecutingAction(false);
        setCurrentDemoStepIndex(5); // Step 6
      }, 1000);
    } catch {
      setIsExecutingAction(false);
      setCurrentDemoStepIndex(5);
    }
  };

  const handlePrintArtifact = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner: Founder Execution Engine */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                Founder Execution Suite (8 Strategic Pillars)
              </span>
              <span className="text-xs text-slate-400">CFO TAX PRO LLC (dba FlowForge) • Dallas / Sachse, TX</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white mt-1.5 flex items-center space-x-3">
              <span>FlowForge Enterprise Readiness & Commercial Suite</span>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl mt-1">
              The complete founder playbook: 5-minute repeatable demo engine, institutional ESA executive artifact, 3 target pilot profiles, 30-day onboarding plan, transparent pricing, and the ESP category narrative.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-300 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">
              Texas SOS #08051239
            </span>
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ActivityIcon className="w-3.5 h-3.5" />
                <span>Live Stability Core</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs across 8 Founder Pillars */}
        <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs no-scrollbar">
          {[
            { id: 'demo', label: '1. 5-Min Demo Script', icon: PlayIcon, badge: 'Interactive' },
            { id: 'esa_artifact', label: '2. ESA Executive Artifact', icon: FileTextIcon, badge: 'Sellable' },
            { id: 'candidates', label: '3. First 3 Pilots', icon: UsersIcon, badge: 'Target Orgs' },
            { id: 'onboarding', label: '4. 30-Day Onboarding', icon: CalendarIcon, badge: 'Rollout' },
            { id: 'pricing', label: '5. Pricing Page', icon: DollarSignIcon, badge: 'Enterprise' },
            { id: 'category', label: '6. ESP Category OS', icon: CompassIcon, badge: 'Narrative' },
            { id: 'certification', label: '7. Certification Ladder', icon: AwardIcon, badge: '4 Levels' },
            { id: 'gtm', label: '8. Enterprise GTM Flywheel', icon: ScaleIcon, badge: '$0→$3M ARR' },
            { id: 'pitch_deck', label: '9. Pitch Deck (16 Slides)', icon: PresentationIcon, badge: 'Investor Ready' },
            { id: 'expansion_suite', label: '10. Brand Suite', icon: GlobeIcon, badge: 'Part I' },
            { id: 'expansion_suite_part2', label: '11. Investor & Tech Suite', icon: SparklesIcon, badge: 'Part II' },
            { id: 'expansion_suite_part3', label: '12. Marketing & Partner Suite', icon: AwardIcon, badge: 'Part III' },
            { id: 'expansion_suite_part4', label: '13. Analyst & Economics Suite', icon: CompassIcon, badge: 'Part IV' },
            { id: 'expansion_suite_part5', label: '14. Keynote & Sales Suite', icon: MicIcon, badge: 'Part V' },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive 
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' 
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* PILLAR 1: REPEATABLE DEMO SCRIPT (5 MINUTES, FOUNDER-LED) */}
      {activeTab === 'demo' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  Pillar 1 • The 5-Minute Founder Sales Engine
                </span>
                <h2 className="text-xl font-bold text-white mt-1 flex items-center space-x-2">
                  <span>FlowForge Demo Script (Founder‑Led, 5 Minutes)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  &ldquo;FlowForge is the Stability OS for engineering teams. Let me show you how it stabilizes a real team in under five minutes.&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setCurrentDemoStepIndex(0);
                    setDemoActionSuccess(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs text-slate-300 border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <RotateCcwIcon className="w-3.5 h-3.5" />
                  <span>Reset Demo Flow</span>
                </button>
              </div>
            </div>

            {/* Stepper Progression Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mt-6">
              {FOUNDER_DEMO_SCRIPT_STEPS.map((step, idx) => {
                const isCurrent = idx === currentDemoStepIndex;
                const isPast = idx < currentDemoStepIndex;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setCurrentDemoStepIndex(idx)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                        : isPast
                        ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span>Step {step.stepNumber}</span>
                      {isPast ? (
                        <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400" />
                      ) : isCurrent ? (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      ) : null}
                    </div>
                    <div className="text-xs font-bold mt-1 truncate">{step.label}</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-1 truncate">{step.metric}</div>
                  </button>
                );
              })}
            </div>

            {/* Current Active Step Interactive Console */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Script & Quote to Say to the CTO */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>Founder Pitch Script — Say This Exactly:</span>
                    </span>
                    <button
                      onClick={() => handleCopy(currentDemoStep.founderQuote, 'quote')}
                      className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-800 border border-slate-700"
                    >
                      {copiedKey === 'quote' ? <CheckIcon className="w-3 h-3 text-emerald-400" /> : <CopyIcon className="w-3 h-3" />}
                      <span>{copiedKey === 'quote' ? 'Copied' : 'Copy Script'}</span>
                    </button>
                  </div>

                  <blockquote className="text-base sm:text-lg font-medium text-white italic pl-3 border-l-2 border-cyan-500 py-1">
                    {currentDemoStep.founderQuote}
                  </blockquote>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {currentDemoStep.explanation}
                  </p>
                </div>

                {/* Step Actions */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={currentDemoStepIndex === 0}
                    onClick={() => setCurrentDemoStepIndex(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                  >
                    &larr; Previous Stage
                  </button>

                  {/* Special Trigger on Step 5 (Autonomy Intervention) */}
                  {currentDemoStepIndex === 4 ? (
                    <button
                      onClick={handleExecuteDemoAction}
                      disabled={isExecutingAction}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/20 flex items-center space-x-2 transition cursor-pointer"
                    >
                      <ZapIcon className="w-4 h-4 text-slate-950 fill-slate-950" />
                      <span>{isExecutingAction ? 'Rebalancing Task...' : 'Click "Execute Action" (POST /api/stability/rebalance)'}</span>
                    </button>
                  ) : (
                    <button
                      disabled={currentDemoStepIndex === FOUNDER_DEMO_SCRIPT_STEPS.length - 1}
                      onClick={() => setCurrentDemoStepIndex(prev => Math.min(FOUNDER_DEMO_SCRIPT_STEPS.length - 1, prev + 1))}
                      className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow-md shadow-cyan-500/20 flex items-center space-x-1.5 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>Next Stage</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Simulated Live Telemetry State */}
              <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center space-x-2">
                    <ActivityIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Live Telemetry State</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active Texas Pod
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Load Stability Score</span>
                      <span className="text-xl font-black text-white">{currentDemoStep.telemetrySnapshot.lss} / 100</span>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                      currentDemoStep.telemetrySnapshot.lss >= 90
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : currentDemoStep.telemetrySnapshot.lss >= 80
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {currentDemoStep.telemetrySnapshot.lss >= 90 ? 'Optimal' : currentDemoStep.telemetrySnapshot.lss >= 80 ? 'Governed' : 'Elevated Risk'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Slack Reserve</span>
                      <span className="text-sm font-bold text-cyan-300">{currentDemoStep.telemetrySnapshot.slackRatio}</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">Floor: 15%</span>
                    </div>

                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Sprint Volatility</span>
                      <span className="text-sm font-bold text-indigo-300">{currentDemoStep.telemetrySnapshot.volatility}</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">Target: &lt;±3%</span>
                    </div>

                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Delivery ETA</span>
                      <span className="text-sm font-bold text-emerald-400">{currentDemoStep.telemetrySnapshot.criticalPathDays} Days</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">Critical Path</span>
                    </div>

                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Burnout Index</span>
                      <span className="text-sm font-bold text-amber-400">{currentDemoStep.telemetrySnapshot.burnoutIndex}</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">Scale: 0.0–1.0</span>
                    </div>
                  </div>
                </div>

                {currentDemoStepIndex >= 5 && (
                  <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center space-x-2">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Autonomy action verified: Charlie &rarr; Diana shift recovered 2.6 schedule days.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Closing Quote Banner */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px]">
                  Closing Statement
                </span>
                <span className="font-medium text-white italic">
                  &ldquo;This is how FlowForge stabilizes engineering teams automatically.&rdquo;
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">Ready for Enterprise Rollout</span>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 2: ESA EXECUTIVE ARTIFACT (ENTERPRISE STABILITY AUDIT) */}
      {activeTab === 'esa_artifact' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Pillar 2 • First Sellable Institutional Product ($15,000 Flat)
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Enterprise Stability Audit (ESA) Executive Artifact
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Formatted as a boardroom deliverable with Cover Page, Executive Scorecard, Findings, Recommendations, and 30-Day Plan.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintArtifact}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 shadow"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => handleCopy(JSON.stringify(ESA_EXECUTIVE_DELIVERABLE_V1, null, 2), 'esa_json')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs text-slate-300 border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedKey === 'esa_json' ? 'Copied' : 'Copy JSON'}</span>
                </button>
              </div>
            </div>

            {/* Print-Friendly Document Canvas */}
            <div className="mt-6 bg-slate-950 border border-slate-800 rounded-xl p-6 md:p-8 space-y-8 print:bg-white print:text-black print:border-none">
              {/* 1. Cover Page Header */}
              <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    CERTIFICATE ID: {ESA_EXECUTIVE_DELIVERABLE_V1.certificateId}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-black text-white mt-1">
                    ENTERPRISE STABILITY AUDIT ({ESA_EXECUTIVE_DELIVERABLE_V1.certificateId})
                  </h1>
                  <div className="text-xs text-slate-400 mt-1 space-y-0.5">
                    <div>Prepared for: <strong className="text-slate-200">{ESA_EXECUTIVE_DELIVERABLE_V1.clientOrg}</strong></div>
                    <div>Prepared by: <strong className="text-cyan-300">FlowForge — Stability OS</strong></div>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-400 space-y-0.5">
                  <div className="font-bold text-slate-200">Entity: {ESA_EXECUTIVE_DELIVERABLE_V1.certifyingEntity}</div>
                  <div>Location: {ESA_EXECUTIVE_DELIVERABLE_V1.jurisdiction}</div>
                  <div className="font-mono text-cyan-400">{ESA_EXECUTIVE_DELIVERABLE_V1.governingSos}</div>
                  <div>Lead Auditor: {ESA_EXECUTIVE_DELIVERABLE_V1.leadAuditor}</div>
                </div>
              </div>

              {/* 1. Executive Summary */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                  1. Executive Summary
                </span>
                <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                  {ESA_EXECUTIVE_DELIVERABLE_V1.executiveSummary}
                </p>
              </div>

              {/* 2. Stability Scorecard */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">2. Stability Scorecard</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-800 rounded-lg">
                    <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px]">
                      <tr>
                        <th className="p-3">Dimension</th>
                        <th className="p-3">Score</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850">
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Load Stability Score (LSS)</td>
                        <td className="p-3 font-mono font-bold text-cyan-400">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.lss} / 100</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px]">Elevated Risk</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Governance Maturity</td>
                        <td className="p-3 font-mono font-bold text-emerald-400">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.governanceMaturity}%</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">Strong</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Autonomy Readiness</td>
                        <td className="p-3 font-mono font-bold text-indigo-400">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.autonomyReadiness}%</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold text-[10px]">Moderate</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Slack Liquidity Ratio</td>
                        <td className="p-3 font-mono font-bold text-cyan-300">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.slackLiquidityRatio}</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px]">Above Floor</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Critical Path Delivery</td>
                        <td className="p-3 font-mono font-bold text-amber-300">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.criticalPathDelivery}</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">At Risk</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-white">Burnout Index</td>
                        <td className="p-3 font-mono font-bold text-amber-400">{ESA_EXECUTIVE_DELIVERABLE_V1.scorecard.burnoutIndex}</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">Emerging</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Findings */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">3. Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ESA_EXECUTIVE_DELIVERABLE_V1.findings.map((finding, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-1">
                          <h4 className="text-xs font-bold text-white">{finding.title}</h4>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            finding.severity === 'COMPLIANT' 
                              ? 'bg-emerald-500/20 text-emerald-300' 
                              : finding.severity === 'AT RISK'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-rose-500/20 text-rose-300'
                          }`}>
                            {finding.severity}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{finding.description}</p>
                      </div>
                      <div className="text-[11px] text-cyan-400 pt-2 border-t border-slate-800">
                        Impact: <span className="text-slate-300">{finding.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Recommendations */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">4. Recommendations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-800 rounded-lg">
                    <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px]">
                      <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Recommendation</th>
                        <th className="p-3">Action Details</th>
                        <th className="p-3">Timeframe</th>
                        <th className="p-3">Owner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {ESA_EXECUTIVE_DELIVERABLE_V1.recommendations.map((rec, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono font-bold text-cyan-400">{rec.number}</td>
                          <td className="p-3 font-bold text-white whitespace-nowrap">{rec.title}</td>
                          <td className="p-3 text-slate-300">{rec.action}</td>
                          <td className="p-3 text-cyan-400 font-mono whitespace-nowrap">{rec.timeframe}</td>
                          <td className="p-3 text-slate-400 whitespace-nowrap">{rec.owner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. 30-Day Stability Improvement Plan */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">5. 30‑Day Stability Improvement Plan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ESA_EXECUTIVE_DELIVERABLE_V1.thirtyDayPlan.map((plan, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-cyan-400">{plan.week}</span>
                        <h4 className="text-xs font-bold text-white mt-0.5">{plan.title}</h4>
                        <ul className="space-y-1 mt-2 text-[11px] text-slate-300">
                          {plan.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start space-x-1.5">
                              <span className="text-cyan-400 mt-0.5">&bull;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-medium">
                        &rarr; {plan.milestoneOutcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Governance RulePack v1 & 7. Autonomy Protocols v1 & 8. Intelligence Layer v1 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* 6. Governance RulePack v1 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
                    <ShieldAlertIcon className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">6. Governance RulePack v1 (Included)</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {ESA_EXECUTIVE_DELIVERABLE_V1.governanceRulePack.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2 p-2 bg-slate-950/70 rounded border border-slate-850">
                        <span className="text-emerald-400 font-bold">&bull;</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 7. Autonomy Protocols v1 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
                    <ZapIcon className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">7. Autonomy Protocols v1 (Included)</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {ESA_EXECUTIVE_DELIVERABLE_V1.autonomyProtocols.map((proto, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2 p-2 bg-slate-950/70 rounded border border-slate-850">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span>{proto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 8. Intelligence Layer v1 */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
                    <ActivityIcon className="w-4 h-4 text-purple-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">8. Intelligence Layer v1 (Included)</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {ESA_EXECUTIVE_DELIVERABLE_V1.intelligenceLayer.map((intel, iIdx) => (
                      <li key={iIdx} className="flex items-start space-x-2 p-2 bg-slate-950/70 rounded border border-slate-850">
                        <span className="text-purple-400 font-bold">&bull;</span>
                        <span>{intel}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 9. Certification & 10. Final Verdict */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* 9. Certification */}
                <div className="p-5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
                  <div className="flex items-center space-x-2">
                    <AwardIcon className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">9. Certification</h3>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">FlowForge Stability Certification Level:</span>
                    <div className="text-lg font-black text-cyan-300 mt-0.5">
                      {ESA_EXECUTIVE_DELIVERABLE_V1.certificationLevel.level}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850">
                    {ESA_EXECUTIVE_DELIVERABLE_V1.certificationLevel.notes}
                  </p>
                </div>

                {/* 10. Final Verdict */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/40 space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">10. Final Verdict</h3>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {ESA_EXECUTIVE_DELIVERABLE_V1.finalVerdict.summary}
                  </p>
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs">
                    &rarr; {ESA_EXECUTIVE_DELIVERABLE_V1.finalVerdict.recommendation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 3: IDENTIFY FIRST 3 PILOT CANDIDATES */}
      {activeTab === 'candidates' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="pb-4 border-b border-slate-800">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                Pillar 3 • Founder Outbound Engine
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Target Pilot Candidates — Pick Three, Get One "Yes"
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                FlowForge is a stability product — sell it to leaders who actively feel delivery instability, PR bottlenecks, and burnout.
              </p>
            </div>

            {/* Candidate Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {TARGET_PILOT_CANDIDATES.map(candidate => {
                const isSelected = candidate.id === selectedCandidateId;
                return (
                  <button
                    key={candidate.id}
                    onClick={() => setSelectedCandidateId(candidate.id)}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-750'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        {candidate.id}
                      </span>
                      <h3 className="text-sm font-black text-white mt-1">{candidate.roleTitle}</h3>
                      <span className="text-xs text-slate-400 block mt-0.5">{candidate.targetOrgProfile}</span>
                      <div className="mt-2 text-[11px] text-emerald-400 font-mono">{candidate.companySize}</div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Review Outreach Pack</span>
                      <ChevronRightIcon className="w-4 h-4 text-cyan-400" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Candidate Outreach & Discovery Guide */}
            <div className="mt-6 p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{selectedCandidate.id} Playbook</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{selectedCandidate.roleTitle} ({selectedCandidate.targetOrgProfile})</h3>
                </div>
                <button
                  onClick={() => handleCopy(selectedCandidate.founderElevatorPitch, 'candidate_pitch')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs text-slate-300 border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <CopyIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{copiedKey === 'candidate_pitch' ? 'Copied' : 'Copy Outreach Pitch'}</span>
                </button>
              </div>

              {/* Instability Symptom & Pitch */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">Target Instability Symptom:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedCandidate.primaryInstabilityPainPoint}
                  </p>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">Founder Elevator Pitch:</span>
                  <blockquote className="text-xs text-cyan-200 italic leading-relaxed">
                    {selectedCandidate.founderElevatorPitch}
                  </blockquote>
                </div>
              </div>

              {/* 5-Minute Discovery Questions */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  The 5-Minute Discovery Script (Ask These 3 Questions):
                </span>
                <div className="space-y-2">
                  {selectedCandidate.fiveMinuteDiscoveryQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-start space-x-2.5">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold shrink-0">
                        Q{qIdx + 1}
                      </span>
                      <span className="font-medium text-white">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objection Handling */}
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">Expected Objection & Winning Response:</span>
                <div className="text-xs text-slate-300">
                  <strong className="text-white block mb-1">{selectedCandidate.objectionHandling.objection}</strong>
                  <div className="p-2.5 bg-slate-950 rounded border border-slate-850 text-slate-200">
                    &rarr; {selectedCandidate.objectionHandling.response}
                  </div>
                </div>
              </div>

              {/* Ready-to-Send Outreach Message Card */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MailIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Pilot Outreach Message (Ready to Send)
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(
                      `Subject: Stabilize Your Engineering Team in 30 Days\n\nHi <Name>,\nI’m reaching out because your team’s delivery pressure and volatility patterns match the profile of organizations that benefit most from FlowForge — the Stability OS for engineering teams.\n\nFlowForge automatically measures load, predicts burnout, stabilizes delivery, and generates an Enterprise Stability Audit (ESA) in under 30 days.\n\nWe’re offering a free pilot for select engineering leaders.\nIf you’re open to it, I can onboard your team in under an hour.\n\nBest,\nChuck\nFounder, FlowForge`,
                      'pilot_email'
                    )}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
                  >
                    {copiedKey === 'pilot_email' ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'pilot_email' ? 'Email Copied!' : 'Copy Email to Clipboard'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono space-y-2 leading-relaxed">
                  <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2">
                    Subject: Stabilize Your Engineering Team in 30 Days
                  </div>
                  <div className="text-slate-200 whitespace-pre-wrap pt-1 font-sans">
{`Hi <Name>,
I’m reaching out because your team’s delivery pressure and volatility patterns match the profile of organizations that benefit most from FlowForge — the Stability OS for engineering teams.

FlowForge automatically measures load, predicts burnout, stabilizes delivery, and generates an Enterprise Stability Audit (ESA) in under 30 days.

We’re offering a free pilot for select engineering leaders.
If you’re open to it, I can onboard your team in under an hour.

Best,
Chuck
Founder, FlowForge`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 4: FULL PILOT ONBOARDING PACKAGE (7 SECTIONS) */}
      {activeTab === 'onboarding' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Pillar 4 • Full Pilot Onboarding Package
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Complete 30-Day Pilot Onboarding Suite
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Free, fast, and fully guided — from GitHub read-only connection to certified Enterprise Stability Audit (ESA).
                </p>
              </div>

              {/* Action Buttons: Copy Welcome / Print */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrintArtifact}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print Pack</span>
                </button>
                <button
                  onClick={() => handleCopy(
                    `Subject: ${PILOT_ONBOARDING_PACKAGE.welcomeLetter.subject}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.salutation}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.body}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.closing}\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.signoff}`,
                    'copy_welcome_letter'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
                >
                  {copiedKey === 'copy_welcome_letter' ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'copy_welcome_letter' ? 'Copied Letter!' : 'Copy Welcome Letter'}</span>
                </button>
              </div>
            </div>

            {/* Sub-Tabs across 7 Pilot Elements */}
            <div className="flex items-center overflow-x-auto space-x-2 mt-4 pt-2 border-b border-slate-850 pb-3 text-xs no-scrollbar">
              {[
                { id: 'welcome', label: '1. Welcome Letter', icon: MailIcon },
                { id: 'timeline', label: '2. 30-Day Timeline', icon: CalendarIcon },
                { id: 'success', label: '3. Success Criteria', icon: CheckCircle2Icon },
                { id: 'kickoff', label: '4. Kickoff Script', icon: PlayIcon },
                { id: 'tech_setup', label: '5. Technical Setup', icon: LayersIcon },
                { id: 'reports', label: '6. Report Templates', icon: FileTextIcon },
                { id: 'closeout', label: '7. Closeout Package', icon: AwardIcon }
              ].map(subTab => {
                const Icon = subTab.icon;
                const isActive = onboardingSubTab === subTab.id;
                return (
                  <button
                    key={subTab.id}
                    onClick={() => setOnboardingSubTab(subTab.id as any)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition cursor-pointer ${
                      isActive 
                        ? 'bg-cyan-500 text-slate-950 shadow-sm' 
                        : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-750'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{subTab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. PILOT WELCOME LETTER */}
            {onboardingSubTab === 'welcome' && (
              <div className="mt-6 space-y-4">
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      1. Pilot Welcome Letter (Founder-Signed)
                    </span>
                    <button
                      onClick={() => handleCopy(
                        `Subject: ${PILOT_ONBOARDING_PACKAGE.welcomeLetter.subject}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.salutation}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.body}\n\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.closing}\n${PILOT_ONBOARDING_PACKAGE.welcomeLetter.signoff}`,
                        'copy_welcome_letter_inner'
                      )}
                      className="px-2.5 py-1 rounded bg-slate-850 hover:bg-slate-800 text-cyan-300 text-xs font-bold border border-slate-750 transition flex items-center space-x-1 cursor-pointer"
                    >
                      <CopyIcon className="w-3 h-3" />
                      <span>{copiedKey === 'copy_welcome_letter_inner' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="text-xs font-mono text-cyan-300 bg-slate-900 p-2.5 rounded-lg border border-slate-850">
                    <strong>Subject:</strong> {PILOT_ONBOARDING_PACKAGE.welcomeLetter.subject}
                  </div>

                  <div className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 font-sans text-xs md:text-sm text-slate-200 leading-relaxed space-y-4 whitespace-pre-line">
                    <p className="font-bold text-white">{PILOT_ONBOARDING_PACKAGE.welcomeLetter.salutation}</p>
                    <p>{PILOT_ONBOARDING_PACKAGE.welcomeLetter.body}</p>
                    <div className="pt-2 border-t border-slate-800/80">
                      <p>{PILOT_ONBOARDING_PACKAGE.welcomeLetter.closing}</p>
                      <p className="font-bold text-cyan-400 mt-1 whitespace-pre-line">
                        {PILOT_ONBOARDING_PACKAGE.welcomeLetter.signoff}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. PILOT TIMELINE (30 DAYS) */}
            {onboardingSubTab === 'timeline' && (
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {PILOT_ONBOARDING_PACKAGE.timeline.map(week => (
                    <div key={week.weekNumber} className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-850">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                            Week {week.weekNumber}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">30-Day Plan</span>
                        </div>

                        <h3 className="text-sm font-bold text-white mt-2">{week.title}</h3>
                        <p className="text-[11px] text-cyan-300/80 mt-0.5">{week.theme}</p>

                        <div className="space-y-2 mt-4">
                          {week.items.map((item, iIdx) => {
                            const stepKey = `timeline-${week.weekNumber}-${iIdx}`;
                            const isChecked = !!checkedSteps[stepKey];
                            return (
                              <div
                                key={iIdx}
                                onClick={() => setCheckedSteps(prev => ({ ...prev, [stepKey]: !prev[stepKey] }))}
                                className={`p-2.5 rounded-lg border text-xs cursor-pointer transition flex items-start space-x-2 ${
                                  isChecked 
                                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' 
                                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[9px] shrink-0 mt-0.5 ${
                                  isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600'
                                }`}>
                                  {isChecked ? '✓' : ''}
                                </span>
                                <span className="leading-snug">{item}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-850 text-[10px] text-emerald-400 font-mono">
                        &rarr; Milestone Verified
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PILOT SUCCESS CRITERIA */}
            {onboardingSubTab === 'success' && (
              <div className="mt-6 space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                      <span>{PILOT_ONBOARDING_PACKAGE.successCriteria.title}</span>
                    </h3>
                    <p className="text-xs text-emerald-300 mt-1 font-medium">
                      {PILOT_ONBOARDING_PACKAGE.successCriteria.guarantee}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                    Guaranteed Outcome
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {PILOT_ONBOARDING_PACKAGE.successCriteria.criteria.map((crit, cIdx) => (
                    <div key={cIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                          Criteria {cIdx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">{crit.metric}</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {crit.target}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-850 text-[10px] text-emerald-400 font-mono flex items-center space-x-1">
                        <CheckIcon className="w-3 h-3 text-emerald-400" />
                        <span>Empirically Measured in ESA</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. PILOT KICKOFF CALL SCRIPT */}
            {onboardingSubTab === 'kickoff' && (
              <div className="mt-6 space-y-4">
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      4. Pilot Kickoff Call Script (Founder-Led)
                    </span>
                    <button
                      onClick={() => handleCopy(
                        `Opening:\n${PILOT_ONBOARDING_PACKAGE.kickoffCallScript.opening}\n\nAgenda:\n${PILOT_ONBOARDING_PACKAGE.kickoffCallScript.agenda.join('\n')}\n\nClose:\n${PILOT_ONBOARDING_PACKAGE.kickoffCallScript.close}`,
                        'copy_kickoff_script'
                      )}
                      className="px-2.5 py-1 rounded bg-slate-850 hover:bg-slate-800 text-cyan-300 text-xs font-bold border border-slate-750 transition flex items-center space-x-1 cursor-pointer"
                    >
                      <CopyIcon className="w-3 h-3" />
                      <span>{copiedKey === 'copy_kickoff_script' ? 'Copied' : 'Copy Script'}</span>
                    </button>
                  </div>

                  {/* Opening Quote */}
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">Opening Line:</span>
                    <blockquote className="text-sm font-bold text-cyan-200 italic">
                      {PILOT_ONBOARDING_PACKAGE.kickoffCallScript.opening}
                    </blockquote>
                  </div>

                  {/* Agenda */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Call Agenda (8 Milestones):
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {PILOT_ONBOARDING_PACKAGE.kickoffCallScript.agenda.map((item, aIdx) => (
                        <div key={aIdx} className="p-3 bg-slate-900 rounded-lg border border-slate-850 text-xs text-slate-200 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Close Quote */}
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">Closing Commitment:</span>
                    <blockquote className="text-sm font-bold text-emerald-200 italic">
                      {PILOT_ONBOARDING_PACKAGE.kickoffCallScript.close}
                    </blockquote>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PILOT TECHNICAL SETUP GUIDE */}
            {onboardingSubTab === 'tech_setup' && (
              <div className="mt-6 space-y-4">
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      5. Technical Setup Guide (5 Steps • Under 1 Hour)
                    </span>
                    <p className="text-xs text-slate-400 mt-1">
                      Read-only GitHub metadata connection with zero source code exposure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {PILOT_ONBOARDING_PACKAGE.technicalSetup.map(step => (
                      <div key={step.stepNumber} className="p-4 rounded-xl bg-slate-900 border border-slate-850 space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center">
                            {step.stepNumber}
                          </span>
                          <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        </div>
                        <ul className="space-y-1.5 pl-8 text-xs text-slate-300">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center space-x-2">
                              <span className="text-cyan-400">&bull;</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 6. PILOT REPORTING TEMPLATES */}
            {onboardingSubTab === 'reports' && (
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Weekly Stability Report Template */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Template A</span>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          {PILOT_ONBOARDING_PACKAGE.reportingTemplates.weeklyReport.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono">
                        Weekly
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-300">Included Telemetry Metrics:</span>
                      <ul className="space-y-2">
                        {PILOT_ONBOARDING_PACKAGE.reportingTemplates.weeklyReport.metrics.map((m, mIdx) => (
                          <li key={mIdx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-850 text-xs text-slate-200 flex items-start space-x-2">
                            <span className="text-cyan-400 font-bold">&bull;</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Executive Summary Briefing Template */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                      <div>
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Template B</span>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          {PILOT_ONBOARDING_PACKAGE.reportingTemplates.executiveSummary.title}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono">
                        Executive / Board
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-300">Briefing Core Sections:</span>
                      <ul className="space-y-2">
                        {PILOT_ONBOARDING_PACKAGE.reportingTemplates.executiveSummary.sections.map((sec, sIdx) => (
                          <li key={sIdx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-850 text-xs text-slate-200 flex items-start space-x-2">
                            <span className="text-emerald-400 font-bold">&bull;</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. PILOT CLOSEOUT PACKAGE */}
            {onboardingSubTab === 'closeout' && (
              <div className="mt-6 space-y-4">
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
                  <div className="border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      7. Pilot Closeout Package (The 30-Day Conversion Engine)
                    </span>
                    <p className="text-xs text-slate-300 mt-1">
                      {PILOT_ONBOARDING_PACKAGE.closeoutPackage.overview}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Delivered Artifacts & Audit Evidence:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {PILOT_ONBOARDING_PACKAGE.closeoutPackage.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="p-3 bg-slate-900 rounded-lg border border-slate-850 text-xs text-slate-200 flex items-start space-x-2.5">
                          <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">Commercial Conversion Impact:</span>
                    <p className="text-xs text-emerald-200 font-bold">
                      {PILOT_ONBOARDING_PACKAGE.closeoutPackage.conversionImpact}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PILLAR 5: SIMPLE ENTERPRISE PRICING */}
      {activeTab === 'pricing' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Pillar 5 • Transparent Revenue Engine
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Simple, Enterprise-Ready Pricing Tiers
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Pilot $0 &bull; Core $1,500/mo &bull; Governance + Autonomy $3,500/mo &bull; Full Intelligence $6,000/mo.
                </p>
              </div>

              {/* Monthly vs Annual Switch */}
              <div className="flex items-center space-x-2 p-1 bg-slate-800 rounded-xl border border-slate-700 text-xs">
                <button
                  onClick={() => setBillingInterval('monthly')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                    billingInterval === 'monthly' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingInterval('annual')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center space-x-1 ${
                    billingInterval === 'annual' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>Annual</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 text-[10px] font-black">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {PRICING_TIERS_DATA.map(tier => {
                const price = billingInterval === 'monthly' ? tier.monthlyPrice : Math.round(tier.annualPrice / 12);
                return (
                  <div
                    key={tier.id}
                    className={`p-5 rounded-2xl border flex flex-col justify-between relative transition ${
                      tier.isPopular
                        ? 'bg-slate-800/80 border-cyan-500 shadow-xl shadow-cyan-500/10'
                        : 'bg-slate-800/40 border-slate-700/60'
                    }`}
                  >
                    {tier.isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                        Most Popular (High ROI)
                      </span>
                    )}

                    <div>
                      <h3 className="text-base font-black text-white">{tier.name}</h3>
                      <span className="text-xs text-slate-400 block mt-0.5">{tier.targetAudience}</span>

                      <div className="my-4">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-3xl font-black text-white">
                            ${price.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-400">/mo</span>
                        </div>
                        {billingInterval === 'annual' && tier.annualPrice > 0 && (
                          <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">
                            Billed annually at ${tier.annualPrice.toLocaleString()}/yr
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-700/60 pt-3">
                        {tier.description}
                      </p>

                      <ul className="space-y-2 mt-4 text-xs text-slate-300">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <CheckCircle2Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-700/60">
                      <button
                        onClick={() => alert(`Selection simulated: ${tier.name}. Transitioning to onboarding workflow.`)}
                        className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer shadow ${
                          tier.isPopular
                            ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black shadow-cyan-500/20'
                            : 'bg-slate-700 hover:bg-slate-600 text-white'
                        }`}
                      >
                        {tier.ctaLabel}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Texas Statutory SaaS Tax Notice */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <strong className="text-slate-200">Texas SaaS Tax Notice (Tex. Tax Code § 151.351):</strong> Software-as-a-Service is taxed on 80% of value (20% statutory exemption applies for Texas enterprises).
              </div>
              <span className="font-mono text-[11px] text-emerald-400 shrink-0">Entity: CFO TAX PRO LLC (SOS #08051239)</span>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 6: ESP CATEGORY NARRATIVE */}
      {activeTab === 'category' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="pb-4 border-b border-slate-800">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                Pillar 6 • Market Creation Motion
              </span>
              <h2 className="text-xl font-black text-white mt-1">
                Category Narrative: Engineering Stability Platforms (ESP)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                FlowForge is not a project management app. FlowForge is the Stability OS for engineering teams.
              </p>
            </div>

            {/* The One Sentence Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-cyan-950/60 border border-purple-500/30 text-center space-y-2">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-widest">
                The Core Category Sentence
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                "{CATEGORY_NARRATIVE_DATA.categorySentence}"
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto mt-2">
                {CATEGORY_NARRATIVE_DATA.categoryName}: Autonomous systems that measure, govern, correct, and predict engineering stability across enterprise pipelines.
              </p>
            </div>

            {/* The 4 Manifesto Tenets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CATEGORY_NARRATIVE_DATA.manifestoHighlights.map((tenet, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start space-x-3">
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-xs font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {tenet}
                  </p>
                </div>
              ))}
            </div>

            {/* Category Benchmarks: Jira vs Datadog vs FlowForge */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                ESP Industry Category Benchmarks
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-850">
                  <thead className="bg-slate-900 text-slate-400 font-mono text-[10px]">
                    <tr>
                      <th className="p-3">Dimension</th>
                      <th className="p-3">Issue Trackers (Jira/Linear)</th>
                      <th className="p-3">APM / Telemetry (Datadog)</th>
                      <th className="p-3 text-cyan-400">ESP (FlowForge Stability OS)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 text-slate-300">
                    <tr>
                      <td className="p-3 font-bold text-white">Focus Metric</td>
                      <td className="p-3">Activity & Velocity</td>
                      <td className="p-3">Server Latency & Uptime</td>
                      <td className="p-3 text-cyan-300 font-bold">Cognitive Load & Slack Reserve</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Timing</td>
                      <td className="p-3">Post-Mortem (Retrospective)</td>
                      <td className="p-3">Real-Time Infrastructure</td>
                      <td className="p-3 text-cyan-300 font-bold">Pre-Emptive & Predictive</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">Correction</td>
                      <td className="p-3">Manual Manager Meetings</td>
                      <td className="p-3">PagerDuty Alert Churn</td>
                      <td className="p-3 text-cyan-300 font-bold">Autonomous Rebalancing (PROTO-01)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Core Beliefs & Mission */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Core Beliefs (The ESP Axioms)
                </span>
                <span className="text-xs text-purple-300 font-mono font-bold">
                  Mission: To stabilize engineering teams worldwide.
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
                {[
                  { label: 'Stability is measurable', color: 'text-cyan-400' },
                  { label: 'Burnout is predictable', color: 'text-rose-400' },
                  { label: 'Delivery risk is preventable', color: 'text-emerald-400' },
                  { label: 'Autonomy is essential', color: 'text-amber-400' },
                  { label: 'Slack is strategic', color: 'text-indigo-400' },
                  { label: 'Governance is non-negotiable', color: 'text-purple-400' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-lg border border-slate-850 flex flex-col items-center justify-center space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">Axiom 0{idx + 1}</span>
                    <span className={`text-xs font-bold ${item.color}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 7: FLOWFORGE CERTIFICATION LADDER */}
      {activeTab === 'certification' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="pb-4 border-b border-slate-800">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                Pillar 7 • Institutional Maturity Standard
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                The FlowForge 4-Level Certification Ladder
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Four progressive certification tiers establishing institutional engineering excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  level: 'Level 1 — Stable', 
                  score: 'LSS >= 70', 
                  desc: 'Slack floor enforced (>=15%), volatility controlled (<±3.0%), baseline telemetry connected.',
                  badge: 'Baseline Certified'
                },
                { 
                  level: 'Level 2 — Governed', 
                  score: 'LSS >= 80', 
                  desc: 'Governance RulePack v1 actively enforced; cognitive load capped at 85% with zero sprint spillover.',
                  badge: 'Texas Pod Current'
                },
                { 
                  level: 'Level 3 — Autonomous', 
                  score: 'LSS >= 88', 
                  desc: 'Closed-loop load rebalancing (PROTO-01) and DAG contract parallelization executing seamlessly.',
                  badge: 'Target Runway'
                },
                { 
                  level: 'Level 4 — Intelligent', 
                  score: 'LSS >= 92', 
                  desc: 'Multi-horizon Monte Carlo predictive forecasting with zero missed enterprise release dates.',
                  badge: 'Institutional Gold'
                },
              ].map((tier, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold">
                      {tier.badge}
                    </span>
                    <h3 className="text-base font-black text-white mt-2">{tier.level}</h3>
                    <div className="text-xl font-black text-cyan-400 font-mono mt-1">{tier.score}</div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{tier.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-700/60 text-[10px] text-slate-400 font-mono">
                    Annual Audit • CFO TAX PRO LLC
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 8: ENTERPRISE GTM FLYWHEEL */}
      {activeTab === 'gtm' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="pb-4 border-b border-slate-800">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                Pillar 8 • Growth Engine ($0 &rarr; $3M ARR)
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                The 5-Stage Enterprise Go-To-Market Flywheel
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Stability Audit (Land) &rarr; Governance Activation (Expand) &rarr; Autonomy Rollout (Lock-In) &rarr; Intelligence Activation (Executive) &rarr; Certification (Institutionalize).
              </p>
            </div>

            <div className="space-y-3">
              {[
                { 
                  stage: '1. Stability Audit (Land)', 
                  economics: '$15,000 flat diagnostic (or Free 30-Day Pilot)', 
                  action: '14-day passive telemetry audit uncovering hidden cognitive overload and slack deficits.',
                  deliverable: 'Certified ESA Report + Board Briefing'
                },
                { 
                  stage: '2. Governance Activation (Expand)', 
                  economics: '$60,000–$150,000 initial expansion', 
                  action: 'Deploying Governance RulePack v1 and executive real-time telemetry dashboards.',
                  deliverable: 'Policy-as-code guards across all active pods'
                },
                { 
                  stage: '3. Autonomy Rollout (Lock-In)', 
                  economics: '$3,500–$6,000/mo MRR recurring per pod', 
                  action: 'Activating closed-loop automated load rebalancing and critical path DAG parallelization.',
                  deliverable: '2.6 to 4.2 schedule days recovered per sprint'
                },
                { 
                  stage: '4. Intelligence Activation (Executive Adoption)', 
                  economics: 'Enterprise contract tier ($72k+ ARR)', 
                  action: 'Multi-horizon Monte Carlo delivery certainty forecasts and board-level risk reporting.',
                  deliverable: 'Zero missed enterprise release assurances'
                },
                { 
                  stage: '5. Certification (Institutionalization)', 
                  economics: 'Enterprise OS Standard ($250k+ ARR wall-to-wall)', 
                  action: 'Standardizing organization as FlowForge Certified across every engineering discipline.',
                  deliverable: 'Institutional resilience credential'
                },
              ].map((row, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                        Stage 0{idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-white">{row.stage}</h3>
                      <span className="text-xs text-emerald-400 font-mono font-medium">({row.economics})</span>
                    </div>
                    <p className="text-xs text-slate-300 pl-1">{row.action}</p>
                  </div>
                  <div className="text-right text-xs font-mono text-cyan-400 shrink-0 pl-1">
                    {row.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PILLAR 9: FULL INVESTOR & ENTERPRISE PITCH DECK (16 SLIDES) */}
      {activeTab === 'pitch_deck' && (
        <div className="space-y-6">
          {/* Deck Header & Controls */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                    Pillar 9 • Capital & Category Creation Deck
                  </span>
                  <span className="text-xs text-slate-400">16 Complete Slides • Investor & Enterprise Ready</span>
                </div>
                <h2 className="text-xl font-bold text-white mt-1">
                  FlowForge Investor & Enterprise Pitch Deck
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  CFO TAX PRO LLC (dba FlowForge) • Sachse, TX • SOS #08051239
                </p>
              </div>

              {/* Deck View Controls & Print/Copy */}
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
                  <button
                    onClick={() => setDeckViewMode('slide')}
                    className={`px-3 py-1.5 rounded-md font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                      deckViewMode === 'slide' 
                        ? 'bg-cyan-500 text-slate-950 shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <PresentationIcon className="w-3.5 h-3.5" />
                    <span>Presenter</span>
                  </button>
                  <button
                    onClick={() => setDeckViewMode('grid')}
                    className={`px-3 py-1.5 rounded-md font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                      deckViewMode === 'grid' 
                        ? 'bg-cyan-500 text-slate-950 shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Maximize2Icon className="w-3.5 h-3.5" />
                    <span>Grid (All 16)</span>
                  </button>
                </div>

                <button
                  onClick={handlePrintArtifact}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print Deck</span>
                </button>

                <button
                  onClick={() => handleCopy(
                    FLOWFORGE_PITCH_DECK_SLIDES.map(s => `Slide ${s.slideNumber}: ${s.title}\n${s.tagline}\n${s.bullets ? s.bullets.map(b => `• ${b}`).join('\n') : ''}\n${s.keyHighlight || ''}\n${s.supportingText || ''}`).join('\n\n---\n\n'),
                    'deck-full-copy'
                  )}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5"
                >
                  {copiedKey === 'deck-full-copy' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'deck-full-copy' ? 'Copied Deck!' : 'Copy Script'}</span>
                </button>
              </div>
            </div>

            {/* SLIDE MODE (INTERACTIVE PRESENTER) */}
            {deckViewMode === 'slide' && (
              <div className="mt-6 space-y-6">
                {/* Active Slide Canvas */}
                {(() => {
                  const slide = FLOWFORGE_PITCH_DECK_SLIDES[currentSlideIndex];
                  return (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[440px] flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                      
                      {/* Slide Top Metadata */}
                      <div className="flex items-center justify-between pb-6 border-b border-slate-850 relative z-10">
                        <div className="flex items-center space-x-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                            SLIDE {slide.slideNumber.toString().padStart(2, '0')} / 16
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                            {slide.category}
                          </span>
                        </div>
                        <div className="text-right text-xs font-mono text-slate-400">
                          FlowForge &bull; Stability OS
                        </div>
                      </div>

                      {/* Slide Main Body */}
                      <div className="py-8 space-y-6 relative z-10">
                        <div>
                          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                            {slide.title}
                          </h1>
                          <p className="text-lg md:text-xl text-cyan-300 font-medium mt-2 max-w-3xl">
                            {slide.tagline}
                          </p>
                        </div>

                        {/* Bulleted Points if present */}
                        {slide.bullets && slide.bullets.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            {slide.bullets.map((bullet, bIdx) => (
                              <div 
                                key={bIdx}
                                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-850 flex items-start space-x-3"
                              >
                                <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">
                                  {bullet}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Supporting Paragraph / Highlights */}
                        {slide.supportingText && (
                          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl whitespace-pre-line">
                            {slide.supportingText}
                          </div>
                        )}

                        {slide.keyHighlight && (
                          <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-xs md:text-sm font-bold text-cyan-300 flex items-center space-x-2">
                            <SparklesIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>{slide.keyHighlight}</span>
                          </div>
                        )}
                      </div>

                      {/* Slide Footer */}
                      <div className="pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 relative z-10">
                        <div className="font-mono">
                          CFO TAX PRO LLC (dba FlowForge) &bull; Sachse, TX
                        </div>
                        <div className="flex items-center space-x-1">
                          {FLOWFORGE_PITCH_DECK_SLIDES.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => setCurrentSlideIndex(dotIdx)}
                              className={`h-2 rounded-full transition-all cursor-pointer ${
                                currentSlideIndex === dotIdx 
                                  ? 'w-6 bg-cyan-400' 
                                  : 'w-2 bg-slate-800 hover:bg-slate-700'
                              }`}
                              title={`Jump to Slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Carousel Navigator Controls */}
                <div className="flex items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-bold border border-slate-800 transition cursor-pointer flex items-center space-x-2"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Previous Slide</span>
                  </button>

                  {/* Slide Quick Picker */}
                  <div className="hidden sm:flex items-center space-x-2 text-xs">
                    <span className="text-slate-400">Select slide:</span>
                    <select
                      value={currentSlideIndex}
                      onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
                      className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      {FLOWFORGE_PITCH_DECK_SLIDES.map((s, idx) => (
                        <option key={idx} value={idx}>
                          Slide {s.slideNumber}: {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => setCurrentSlideIndex(prev => Math.min(FLOWFORGE_PITCH_DECK_SLIDES.length - 1, prev + 1))}
                    disabled={currentSlideIndex === FLOWFORGE_PITCH_DECK_SLIDES.length - 1}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-2"
                  >
                    <span>Next Slide</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* GRID VIEW (ALL 16 SLIDES DISPLAYED) */}
            {deckViewMode === 'grid' && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {FLOWFORGE_PITCH_DECK_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setDeckViewMode('slide');
                    }}
                    className="p-5 rounded-xl bg-slate-950 border border-slate-850 hover:border-cyan-500/50 transition cursor-pointer space-y-3 flex flex-col justify-between group hover:shadow-lg hover:shadow-cyan-500/5"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                        <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          SLIDE {slide.slideNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase font-mono">
                          {slide.category}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {slide.tagline}
                      </p>

                      {slide.bullets && (
                        <ul className="space-y-1 pt-1 text-[11px] text-slate-300">
                          {slide.bullets.slice(0, 3).map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-1.5 truncate">
                              <span className="text-cyan-400">&bull;</span>
                              <span className="truncate">{b}</span>
                            </li>
                          ))}
                          {slide.bullets.length > 3 && (
                            <li className="text-[10px] text-slate-400 italic">
                              + {slide.bullets.length - 3} more points
                            </li>
                          )}
                        </ul>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Click to present</span>
                      <ChevronRightIcon className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* PILLAR 10: COMPLETE ENTERPRISE EXPANSION SUITE (PART I) */}
      {activeTab === 'expansion_suite' && (
        <EnterpriseExpansionSuiteView
          onNavigateToStability={onNavigateToStability}
          onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
        />
      )}

      {/* PILLAR 11: COMPLETE ENTERPRISE EXPANSION SUITE (PART II) */}
      {activeTab === 'expansion_suite_part2' && (
        <EnterpriseExpansionSuitePart2View
          onNavigateToStability={onNavigateToStability}
          onNavigateToPart1={() => setActiveTab('expansion_suite')}
          onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
        />
      )}

      {/* PILLAR 12: COMPLETE ENTERPRISE EXPANSION SUITE (PART III) */}
      {activeTab === 'expansion_suite_part3' && (
        <EnterpriseExpansionSuitePart3View
          onNavigateToStability={onNavigateToStability}
          onNavigateToPart1={() => setActiveTab('expansion_suite')}
          onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
          onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
        />
      )}

      {/* PILLAR 13: COMPLETE ENTERPRISE EXPANSION SUITE (PART IV) */}
      {activeTab === 'expansion_suite_part4' && (
        <EnterpriseExpansionSuitePart4View
          onNavigateToStability={onNavigateToStability}
          onNavigateToPart1={() => setActiveTab('expansion_suite')}
          onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
          onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
          onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
        />
      )}

      {/* PILLAR 14: COMPLETE ENTERPRISE EXPANSION SUITE (PART V) */}
      {activeTab === 'expansion_suite_part5' && (
        <EnterpriseExpansionSuitePart5View
          onNavigateToStability={onNavigateToStability}
          onNavigateToPart1={() => setActiveTab('expansion_suite')}
          onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
          onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
          onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
        />
      )}
    </div>
  );
};
