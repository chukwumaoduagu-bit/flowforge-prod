import React, { useState, useMemo } from 'react';
import {
  TrendingUpIcon,
  DollarSignIcon,
  ShieldCheckIcon,
  CalendarIcon,
  UsersIcon,
  AwardIcon,
  FileTextIcon,
  CopyIcon,
  PrinterIcon,
  CheckIcon,
  AlertTriangleIcon,
  ClockIcon,
  BriefcaseIcon,
  LayersIcon,
  SearchIcon,
  CompassIcon,
  ChevronRightIcon,
  SparklesIcon,
  CheckCircle2Icon,
  SlidersIcon,
  BuildingIcon,
  LockIcon,
  HeartHandshakeIcon,
  ExternalLinkIcon
} from 'lucide-react';

import {
  FLOWFORGE_INVESTOR_PROSPECTUS,
  FLOWFORGE_OPERATIONAL_PLAYBOOK,
  FLOWFORGE_AI_GOVERNANCE_CHARTER,
  FLOWFORGE_COMPANY_HANDBOOK
} from '../data/expansionSuitePart7Data';

interface EnterpriseExpansionSuitePart7Props {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToPart6?: () => void;
  onNavigateToPart8?: () => void;
  onNavigateToMasterBusinessPlan?: () => void;
  onNavigateToTotalBusinessArchitecture?: () => void;
}

type ActivePillar = 'prospectus' | 'playbook' | 'ai_charter' | 'handbook' | 'full_dossier';

export const EnterpriseExpansionSuitePart7View: React.FC<EnterpriseExpansionSuitePart7Props> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart5,
  onNavigateToPart6,
  onNavigateToPart8,
  onNavigateToMasterBusinessPlan,
  onNavigateToTotalBusinessArchitecture
}) => {
  const [activePillar, setActivePillar] = useState<ActivePillar>('prospectus');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Prospectus Interactive State
  const [targetValuationMultiple, setTargetValuationMultiple] = useState<number>(12);
  const [activePlaybookPeriod, setActivePlaybookPeriod] = useState<string>('Daily');
  const [selectedHandbookDept, setSelectedHandbookDept] = useState<string>('Engineering');

  // AI Guardrail Interactive Simulator
  const [simulatedAction, setSimulatedAction] = useState<string>('redistribute_pr');
  const [guardrailResult, setGuardrailResult] = useState<{
    status: 'ALLOWED' | 'BLOCKED';
    layer: string;
    explanation: string;
  }>({
    status: 'ALLOWED',
    layer: 'Layer 3 (Autonomy AI)',
    explanation: 'Workload redistribution is within the authorized scope of FlowForge Stability OS.'
  });

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    setTimeout(() => setCopyFeedback(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSimulateGuardrail = (actionKey: string) => {
    setSimulatedAction(actionKey);
    switch (actionKey) {
      case 'redistribute_pr':
        setGuardrailResult({
          status: 'ALLOWED',
          layer: 'Layer 3 (Autonomy AI)',
          explanation: 'Authorized: Reallocating pull request reviews away from overloaded squad members.'
        });
        break;
      case 'modify_code':
        setGuardrailResult({
          status: 'BLOCKED',
          layer: 'Layer 3 Safety Control',
          explanation: 'VIOLATION: No Code Modification. FlowForge AI is strictly forbidden from editing application source code.'
        });
        break;
      case 'rewrite_git':
        setGuardrailResult({
          status: 'BLOCKED',
          layer: 'Layer 3 Safety Control',
          explanation: 'VIOLATION: No Commit Rewriting. FlowForge AI will never alter commit history or hash signatures.'
        });
        break;
      case 'deploy_prod':
        setGuardrailResult({
          status: 'BLOCKED',
          layer: 'Layer 3 Safety Control',
          explanation: 'VIOLATION: No Production Changes. FlowForge AI has zero write access to runtime cloud environments.'
        });
        break;
      case 'forecast_risk':
        setGuardrailResult({
          status: 'ALLOWED',
          layer: 'Layer 4 (Intelligence AI)',
          explanation: 'Authorized: Generating 7/14/30-day Bayesian delivery risk confidence intervals.'
        });
        break;
      case 'enforce_slack_floor':
        setGuardrailResult({
          status: 'ALLOWED',
          layer: 'Layer 2 (Governance AI)',
          explanation: 'Authorized: Statutory RulePack v1 CI/CD gate halts overcommitments when slack drops < 15%.'
        });
        break;
      default:
        break;
    }
  };

  const fullPart7Markdown = useMemo(() => {
    return `# ⭐ FLOWFORGE — TOTAL ENTERPRISE STACK (FINAL MASTER DELIVERY)
All recommended artifacts delivered at once: Investor Prospectus, Operational Playbook, AI Governance Charter, and Full Company Handbook.

---

# ⭐ 1. FLOWFORGE INVESTOR PROSPECTUS
Document ID: ${FLOWFORGE_INVESTOR_PROSPECTUS.documentId}
Legal Entity: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.legalEntity}
Location: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.headquarters}
Founder: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.founder}
Category: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.category}
Product: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.flagshipProduct}
Mission: ${FLOWFORGE_INVESTOR_PROSPECTUS.entityDetails.mission}

## Executive Summary
${FLOWFORGE_INVESTOR_PROSPECTUS.executiveSummary.lead}
${FLOWFORGE_INVESTOR_PROSPECTUS.executiveSummary.positioning}

## Investment Thesis
${FLOWFORGE_INVESTOR_PROSPECTUS.investmentThesis.coreProblem}

Why FlowForge Wins:
${FLOWFORGE_INVESTOR_PROSPECTUS.investmentThesis.whyFlowForgeWins.map(w => `• ${w.factor}: ${w.description}`).join('\n')}

## Market Opportunity
• TAM: ${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.tam.count} (${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.tam.description})
• SAM: ${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.sam.count} (${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.sam.description})
• SOM: ${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.som.count} (${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.som.description})
${FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.dynamics.map(d => `• ${d}`).join('\n')}

## Product Overview
${FLOWFORGE_INVESTOR_PROSPECTUS.productOverview.primitives.map(p => `• ${p.name}: ${p.purpose}`).join('\n')}

## Business Model
${FLOWFORGE_INVESTOR_PROSPECTUS.businessModel.tiers.map(t => `• ${t.name}: ${t.price} (${t.duration}) - ${t.features}`).join('\n')}

## Financial Projections (5-Year)
${FLOWFORGE_INVESTOR_PROSPECTUS.financialProjections.map(fp => `• ${fp.year} (${fp.focus}): Target ARR ${fp.targetARR} | Gross Margin ${fp.grossMargin} | Customers: ${fp.enterpriseCustomers} | Engineers: ${fp.engineersProtected}`).join('\n')}

## Use of Funds
${FLOWFORGE_INVESTOR_PROSPECTUS.useOfFunds.map(u => `• ${u.category} (${u.percentage}% - ${u.amountTarget}): ${u.allocationDescription}`).join('\n')}

## Risks & Mitigation
${FLOWFORGE_INVESTOR_PROSPECTUS.risksAndMitigations.map(r => `• ${r.risk} (${r.severity} severity): ${r.mitigation}`).join('\n')}

## Conclusion
${FLOWFORGE_INVESTOR_PROSPECTUS.conclusion.text}
${FLOWFORGE_INVESTOR_PROSPECTUS.conclusion.closingPitch}

---

# ⭐ 2. FLOWFORGE OPERATIONAL PLAYBOOK
Document ID: ${FLOWFORGE_OPERATIONAL_PLAYBOOK.documentId}
Purpose: ${FLOWFORGE_OPERATIONAL_PLAYBOOK.purpose}

## Cadences (Daily, Weekly, Monthly)
${FLOWFORGE_OPERATIONAL_PLAYBOOK.cadences.map(c => `### ${c.period}: ${c.title} (${c.timeSchedule})
Owner: ${c.owner}
Inputs: ${c.inputs.join(', ')}
Actions:
${c.actions.map(a => `  - ${a}`).join('\n')}
Outputs: ${c.outputs.join(', ')}
Threshold: ${c.governanceThreshold || 'Standard'}
`).join('\n')}

## Internal Governance
${FLOWFORGE_OPERATIONAL_PLAYBOOK.internalGovernance.rules.map(r => `• ${r.rule} [${r.threshold}]: ${r.enforcement}`).join('\n')}

## Internal Intelligence
${FLOWFORGE_OPERATIONAL_PLAYBOOK.internalIntelligence.models.map(m => `• ${m.name}: ${m.scope}`).join('\n')}

## Internal Autonomy
${FLOWFORGE_OPERATIONAL_PLAYBOOK.internalAutonomy.mechanisms.map(m => `• ${m.name}: ${m.action}`).join('\n')}

## Internal Reporting
${FLOWFORGE_OPERATIONAL_PLAYBOOK.internalReporting.reports.map(r => `• ${r.name} (${r.cadence}) -> Audience: ${r.audience}`).join('\n')}

---

# ⭐ 3. FLOWFORGE AI GOVERNANCE CHARTER
Document ID: ${FLOWFORGE_AI_GOVERNANCE_CHARTER.documentId}
Purpose: ${FLOWFORGE_AI_GOVERNANCE_CHARTER.purpose}

## Core AI Principles
${FLOWFORGE_AI_GOVERNANCE_CHARTER.principles.map(p => `• ${p.title}: ${p.definition}`).join('\n')}

## AI Governance Layers
${FLOWFORGE_AI_GOVERNANCE_CHARTER.governanceLayers.map(l => `### Layer ${l.layerNumber}: ${l.name} (${l.scope})
Permitted: ${l.permittedActions.join(', ')}
Prohibited: ${l.prohibitedActions.join(', ')}
Verification: ${l.verificationCadence}
`).join('\n')}

## AI Safety Controls
${FLOWFORGE_AI_GOVERNANCE_CHARTER.safetyControls.rules.map(r => `• ${r.control} [${r.status}]: ${r.description}`).join('\n')}

## AI Ethics
${FLOWFORGE_AI_GOVERNANCE_CHARTER.ethics.map(e => `• ${e}`).join('\n')}

## AI Compliance
${FLOWFORGE_AI_GOVERNANCE_CHARTER.compliance.frameworks.map(f => `• ${f.name}: ${f.requirement}`).join('\n')}

---

# ⭐ 4. FLOWFORGE FULL COMPANY HANDBOOK
Document ID: ${FLOWFORGE_COMPANY_HANDBOOK.documentId}
Welcome: ${FLOWFORGE_COMPANY_HANDBOOK.welcome.message}
Mission: ${FLOWFORGE_COMPANY_HANDBOOK.welcome.missionStatement}

## Company Values
${FLOWFORGE_COMPANY_HANDBOOK.companyValues.map(v => `• ${v.name}: ${v.meaning}`).join('\n')}

## Culture
${FLOWFORGE_COMPANY_HANDBOOK.culture.philosophy}
${FLOWFORGE_COMPANY_HANDBOOK.culture.attributes.map(a => `• ${a}`).join('\n')}

## Team Structure
${FLOWFORGE_COMPANY_HANDBOOK.teamStructure.map(d => `• ${d.name} (${d.leadRole}): ${d.mission} | KPIs: ${d.coreKPIs.join(', ')}`).join('\n')}

## Employee Expectations
${FLOWFORGE_COMPANY_HANDBOOK.employeeExpectations.map(e => `• ${e.title}: ${e.detail}`).join('\n')}

## Work Cadence
${FLOWFORGE_COMPANY_HANDBOOK.workCadence.map(w => `• ${w.cycle}: ${w.focus}`).join('\n')}

## Performance Metrics
${FLOWFORGE_COMPANY_HANDBOOK.performanceMetrics.map(p => `• ${p.metric}: ${p.evaluation}`).join('\n')}

## Partner Engagement
${FLOWFORGE_COMPANY_HANDBOOK.partnerEngagement.pillars.map(p => `• ${p}`).join('\n')}

## Security & Compliance
${FLOWFORGE_COMPANY_HANDBOOK.securityAndCompliance.pillars.map(p => `• ${p}`).join('\n')}

## Closing
${FLOWFORGE_COMPANY_HANDBOOK.closing.creed}
${FLOWFORGE_COMPANY_HANDBOOK.closing.pledge}
`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Toast Notification */}
      {copyFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 border border-amber-300 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckIcon className="w-4 h-4 stroke-[3]" />
          <span className="text-xs">Copied &quot;{copyFeedback}&quot; to clipboard</span>
        </div>
      )}

      {/* Top Banner Ribbon */}
      <div className="bg-slate-900 border-b border-slate-800/80 sticky top-0 z-20 backdrop-blur-md bg-slate-900/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              <ShieldCheckIcon className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  TOTAL ENTERPRISE STACK
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Final Master Delivery
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline-block">
                  Prospectus &bull; Playbook &bull; AI Charter &bull; Handbook
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                ⭐ FlowForge Total Enterprise Stack (Final Master Delivery)
              </h1>
            </div>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            <button
              onClick={() => handleCopyText(fullPart7Markdown, "Complete Total Enterprise Stack Master Dossier (Markdown)")}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy Master Stack</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold border border-slate-700 transition flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>
          </div>
        </div>

        {/* Global Pillar Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full text-xs font-semibold">
            <button
              onClick={() => setActivePillar('prospectus')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePillar === 'prospectus'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <DollarSignIcon className="w-3.5 h-3.5" />
              <span>1. Investor Prospectus</span>
            </button>

            <button
              onClick={() => setActivePillar('playbook')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePillar === 'playbook'
                  ? 'bg-teal-400 text-slate-950 font-black shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <ClockIcon className="w-3.5 h-3.5" />
              <span>2. Operational Playbook</span>
            </button>

            <button
              onClick={() => setActivePillar('ai_charter')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePillar === 'ai_charter'
                  ? 'bg-indigo-400 text-slate-950 font-black shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <LockIcon className="w-3.5 h-3.5" />
              <span>3. AI Governance Charter</span>
            </button>

            <button
              onClick={() => setActivePillar('handbook')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePillar === 'handbook'
                  ? 'bg-emerald-400 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>4. Company Handbook</span>
            </button>

            <button
              onClick={() => setActivePillar('full_dossier')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activePillar === 'full_dossier'
                  ? 'bg-purple-400 text-slate-950 font-black shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <LayersIcon className="w-3.5 h-3.5" />
              <span>Consolidated Dossier</span>
            </button>
          </div>

          {/* Quick Inter-Suite Navigation */}
          <div className="flex items-center space-x-1 text-xs">
            {onNavigateToTotalBusinessArchitecture && (
              <button
                onClick={onNavigateToTotalBusinessArchitecture}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              >
                Master TBA
              </button>
            )}
            {onNavigateToMasterBusinessPlan && (
              <button
                onClick={onNavigateToMasterBusinessPlan}
                className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition font-bold"
              >
                15 Chapters
              </button>
            )}
            {onNavigateToPart8 && (
              <button
                onClick={onNavigateToPart8}
                className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 transition font-bold flex items-center space-x-1"
                title="Open Part VIII: Global Expansion & Category Domination"
              >
                <span>⭐ Part VIII</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Corporate Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-amber-500/30">
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>PART VII &bull; INSTITUTIONAL EXECUTION SUITE</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-amber-300 border border-amber-500/20">
                CFO TAX PRO LLC (dba FlowForge) &bull; Sachse, TX
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                ⭐ FLOWFORGE &mdash; TOTAL BUSINESS ARCHITECTURE (PART VII)
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Investor prospectus, operational playbook, AI governance charter, full company handbook &mdash; all delivered at once to establish FlowForge as the permanent global stability layer for modern software engineering.
              </p>
            </div>

            {/* Entity Metrics Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block">Capital Stage</span>
                <span className="text-sm font-bold text-amber-400 block mt-0.5">$15M Series A</span>
                <span className="text-[10px] text-slate-400">At $60M Pre-Money</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block">Internal Operations</span>
                <span className="text-sm font-bold text-teal-400 block mt-0.5">Stability OS Playbook</span>
                <span className="text-[10px] text-slate-400">Dogfooding &ge; 15% Slack</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block">AI Governance</span>
                <span className="text-sm font-bold text-indigo-400 block mt-0.5">4-Layer Charter</span>
                <span className="text-[10px] text-slate-400">Zero Code Modification</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block">Company Handbook</span>
                <span className="text-sm font-bold text-emerald-400 block mt-0.5">7 Values &bull; 7 Pods</span>
                <span className="text-[10px] text-slate-400">Calm. Predictive. Strategic.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 1: FLOWFORGE INVESTOR PROSPECTUS */}
        {/* ========================================================================= */}
        {activePillar === 'prospectus' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Header Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                      ⭐ 1. FLOWFORGE INVESTOR PROSPECTUS
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.documentId}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Investment Prospectus &amp; Capital Raise Blueprint
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {FLOWFORGE_INVESTOR_PROSPECTUS.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_INVESTOR_PROSPECTUS, null, 2), "Investor Prospectus Data")}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5 self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Prospectus</span>
                </button>
              </div>

              {/* Executive Summary Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                  Executive Summary
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.executiveSummary.lead}
                </p>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-semibold">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.executiveSummary.positioning}
                </div>
              </div>

              {/* Investment Thesis & Why FlowForge Wins */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    Investment Thesis &mdash; Why FlowForge Wins
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {FLOWFORGE_INVESTOR_PROSPECTUS.investmentThesis.coreProblem}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.investmentThesis.whyFlowForgeWins.map((w, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2Icon className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs font-bold text-white">{w.factor}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {w.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Opportunity (TAM / SAM / SOM) */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    Market Opportunity &amp; Macro Tailwinds
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Engineering volatility is rising globally &mdash; FlowForge is perfectly timed.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400">Total Addressable Market (TAM)</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400 block mt-1">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.tam.count}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.tam.description}
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400">Serviceable Addressable Market (SAM)</span>
                    <span className="text-2xl sm:text-3xl font-black text-teal-400 block mt-1">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.sam.count}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.sam.description}
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400">Serviceable Obtainable Market (SOM)</span>
                    <span className="text-2xl sm:text-3xl font-black text-indigo-400 block mt-1">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.som.count}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.som.description}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Key Market Dynamics &amp; Timing
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {FLOWFORGE_INVESTOR_PROSPECTUS.marketOpportunity.dynamics.map((d, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-400 font-bold">&bull;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 5-Year Financial Projections Table & Valuation Modeler */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      5-Year Financial Projections &amp; Unit Economics
                    </h4>
                    <p className="text-xs text-slate-400">
                      From Pilot Penetration ($3.6M ARR) to ESP Category Standardization ($145M ARR).
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-400">ARR Multiple:</span>
                    <select
                      value={targetValuationMultiple}
                      onChange={(e) => setTargetValuationMultiple(parseInt(e.target.value))}
                      className="bg-slate-950 border border-slate-800 text-amber-300 font-bold px-2 py-1 rounded"
                    >
                      <option value={8}>8x ARR</option>
                      <option value={10}>10x ARR</option>
                      <option value={12}>12x ARR (Base)</option>
                      <option value={15}>15x ARR (Bull)</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-800">
                    <thead className="bg-slate-950 text-slate-400 font-mono text-[11px]">
                      <tr>
                        <th className="p-3 border-b border-slate-800">Horizon</th>
                        <th className="p-3 border-b border-slate-800">Strategic Focus</th>
                        <th className="p-3 border-b border-slate-800">Target ARR</th>
                        <th className="p-3 border-b border-slate-800">Gross Margin</th>
                        <th className="p-3 border-b border-slate-800">Customers</th>
                        <th className="p-3 border-b border-slate-800">Engineers Protected</th>
                        <th className="p-3 border-b border-slate-800">Implied Valuation ({targetValuationMultiple}x)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/70">
                      {FLOWFORGE_INVESTOR_PROSPECTUS.financialProjections.map((row) => {
                        const rawArrNum = parseInt(row.targetARR.replace(/[^0-9]/g, '')) * 1000;
                        const impliedVal = (rawArrNum * targetValuationMultiple) / 1000000;
                        return (
                          <tr key={row.year} className="hover:bg-slate-950/60 transition">
                            <td className="p-3 font-mono font-bold text-amber-400">{row.year}</td>
                            <td className="p-3 text-slate-200 font-medium">{row.focus}</td>
                            <td className="p-3 font-mono font-bold text-emerald-400">{row.targetARR}</td>
                            <td className="p-3 text-slate-300">{row.grossMargin}</td>
                            <td className="p-3 font-mono text-slate-300">{row.enterpriseCustomers}</td>
                            <td className="p-3 text-slate-300">{row.engineersProtected}</td>
                            <td className="p-3 font-mono font-bold text-white">${impliedVal.toFixed(1)}M</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* SaaS Unit Economics Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">LTV / CAC Ratio</span>
                    <span className="text-xl font-black text-emerald-400 block mt-0.5">5.8x</span>
                    <span className="text-[10px] text-slate-400">World-class enterprise metric</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Gross Margin</span>
                    <span className="text-xl font-black text-white block mt-0.5">84%+</span>
                    <span className="text-[10px] text-slate-400">Pure software platform</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Payback Period</span>
                    <span className="text-xl font-black text-amber-400 block mt-0.5">6.2 Months</span>
                    <span className="text-[10px] text-slate-400">Rapid pilot monetization</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 block">Net Retention (NRR)</span>
                    <span className="text-xl font-black text-teal-400 block mt-0.5">138%</span>
                    <span className="text-[10px] text-slate-400">Tier expansion engine</span>
                  </div>
                </div>
              </div>

              {/* Use of Funds ($15M Series A) */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    Use of Funds &mdash; $15,000,000 Series A Allocation
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Strategic capital deployment to scale engineering, expand enterprise sales, and launch the global category.
                  </p>
                </div>

                <div className="space-y-3">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.useOfFunds.map((u, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-mono font-bold flex items-center justify-center">
                            {u.percentage}%
                          </span>
                          <span className="text-sm font-bold text-white">{u.category}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {u.amountTarget}
                        </span>
                      </div>

                      {/* Percentage Bar */}
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                          style={{ width: `${u.percentage}%` }}
                        ></div>
                      </div>

                      <p className="text-xs text-slate-400">
                        {u.allocationDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {u.keyDeliverables.map((del, dIdx) => (
                          <span key={dIdx} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-slate-800 text-slate-300">
                            &bull; {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risks & Mitigation Matrix */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    Risks &amp; Mitigation Strategy
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.risksAndMitigations.map((r, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{r.risk}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          {r.severity} Severity
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {r.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/30 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                  Conclusion &amp; Capital Call
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {FLOWFORGE_INVESTOR_PROSPECTUS.conclusion.text}
                </p>
                <div className="text-sm font-black text-amber-300 pt-1">
                  &ldquo;{FLOWFORGE_INVESTOR_PROSPECTUS.conclusion.closingPitch}&rdquo;
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 2: FLOWFORGE OPERATIONAL PLAYBOOK */}
        {/* ========================================================================= */}
        {activePillar === 'playbook' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase">
                      ⭐ 2. FLOWFORGE OPERATIONAL PLAYBOOK
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {FLOWFORGE_OPERATIONAL_PLAYBOOK.documentId}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Internal Operations Manual &mdash; Running on Stability OS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {FLOWFORGE_OPERATIONAL_PLAYBOOK.purpose}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_OPERATIONAL_PLAYBOOK, null, 2), "Operational Playbook Data")}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5 self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Playbook</span>
                </button>
              </div>

              {/* Operational Cadence Navigation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800/80 pb-2">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Operational Cadence (Daily, Weekly, Monthly)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Rigorous touchpoints maintaining internal capacity floors and autonomic health.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    {['Daily', 'Weekly', 'Monthly'].map(period => (
                      <button
                        key={period}
                        onClick={() => setActivePlaybookPeriod(period)}
                        className={`px-3 py-1.5 rounded-lg transition font-semibold ${
                          activePlaybookPeriod === period
                            ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {period} Cadence
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cadence Cards for selected period */}
                <div className="space-y-4">
                  {FLOWFORGE_OPERATIONAL_PLAYBOOK.cadences
                    .filter(c => c.period === activePlaybookPeriod)
                    .map((cadence, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300">
                                {cadence.timeSchedule}
                              </span>
                              <span className="text-xs text-slate-400">Owner: {cadence.owner}</span>
                            </div>
                            <h5 className="text-base font-bold text-white pt-1">{cadence.title}</h5>
                          </div>
                          {cadence.governanceThreshold && (
                            <div className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold self-start sm:self-auto">
                              Rule: {cadence.governanceThreshold}
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                          {/* Inputs */}
                          <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                            <span className="font-mono font-bold text-teal-400 uppercase text-[10px]">
                              Operational Inputs
                            </span>
                            <ul className="space-y-1 text-slate-300">
                              {cadence.inputs.map((inp, iIdx) => (
                                <li key={iIdx} className="flex items-start space-x-1.5">
                                  <span className="text-teal-400">&bull;</span>
                                  <span>{inp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Actions */}
                          <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                            <span className="font-mono font-bold text-amber-400 uppercase text-[10px]">
                              Checklist Actions
                            </span>
                            <ul className="space-y-1 text-slate-300">
                              {cadence.actions.map((act, aIdx) => (
                                <li key={aIdx} className="flex items-start space-x-1.5">
                                  <CheckIcon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outputs */}
                          <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                            <span className="font-mono font-bold text-indigo-400 uppercase text-[10px]">
                              Deliverables &amp; Outputs
                            </span>
                            <ul className="space-y-1 text-slate-300">
                              {cadence.outputs.map((out, oIdx) => (
                                <li key={oIdx} className="flex items-start space-x-1.5">
                                  <span className="text-indigo-400">&bull;</span>
                                  <span>{out}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Internal Governance Rules Matrix */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    Internal Governance Rules &mdash; Statutory Thresholds
                  </h4>
                  <p className="text-xs text-slate-400">
                    {FLOWFORGE_OPERATIONAL_PLAYBOOK.internalGovernance.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {FLOWFORGE_OPERATIONAL_PLAYBOOK.internalGovernance.rules.map((r, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{r.rule}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          {r.threshold}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {r.enforcement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal Autonomy & Intelligence Grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Autonomy Mechanisms */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2">
                    <SparklesIcon className="w-4 h-4 text-amber-400" />
                    <h5 className="text-sm font-bold text-white">Internal Autonomy Mechanisms</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    {FLOWFORGE_OPERATIONAL_PLAYBOOK.internalAutonomy.mechanisms.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="font-bold text-amber-300 block">{m.name}</span>
                        <span className="text-slate-400 block mt-0.5">{m.action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Predictive Intelligence Models */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUpIcon className="w-4 h-4 text-indigo-400" />
                    <h5 className="text-sm font-bold text-white">Internal Predictive Intelligence</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    {FLOWFORGE_OPERATIONAL_PLAYBOOK.internalIntelligence.models.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="font-bold text-indigo-300 block">{m.name}</span>
                        <span className="text-slate-400 block mt-0.5">{m.scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Internal Reporting Schedule */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wide">
                  Standard Internal Reporting Schedule
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {FLOWFORGE_OPERATIONAL_PLAYBOOK.internalReporting.reports.map((rep, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                      <span className="text-xs font-bold text-white block">{rep.name}</span>
                      <span className="text-[11px] font-mono text-teal-400 block mt-1">{rep.cadence}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Audience: {rep.audience}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 3: FLOWFORGE AI GOVERNANCE CHARTER */}
        {/* ========================================================================= */}
        {activePillar === 'ai_charter' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                      ⭐ 3. FLOWFORGE AI GOVERNANCE CHARTER
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {FLOWFORGE_AI_GOVERNANCE_CHARTER.documentId}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Official AI Governance &amp; Safety Framework
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {FLOWFORGE_AI_GOVERNANCE_CHARTER.purpose}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_AI_GOVERNANCE_CHARTER, null, 2), "AI Governance Charter Data")}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5 self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy AI Charter</span>
                </button>
              </div>

              {/* Hard Safety Controls Callout */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wide">
                    {FLOWFORGE_AI_GOVERNANCE_CHARTER.safetyControls.lead}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                    IMMUTABLE
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {FLOWFORGE_AI_GOVERNANCE_CHARTER.safetyControls.rules.map((sc, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{sc.control}</span>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                          sc.status === 'STRICTLY ENFORCED' ? 'bg-rose-500/20 text-rose-300' : 'bg-teal-500/20 text-teal-300'
                        }`}>
                          {sc.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {sc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive AI Guardrail Simulator */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">Interactive AI Guardrail Simulator</h5>
                    <p className="text-xs text-slate-400">Test hypothetical system actions against FlowForge&apos;s statutory safety controls.</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-400">RulePack v1 Simulator</span>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => handleSimulateGuardrail('redistribute_pr')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'redistribute_pr'
                        ? 'bg-teal-500 text-slate-950 font-bold border-teal-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Redistribute PR Reviews
                  </button>
                  <button
                    onClick={() => handleSimulateGuardrail('modify_code')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'modify_code'
                        ? 'bg-rose-500 text-white font-bold border-rose-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Modify Source Code
                  </button>
                  <button
                    onClick={() => handleSimulateGuardrail('rewrite_git')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'rewrite_git'
                        ? 'bg-rose-500 text-white font-bold border-rose-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Rewrite Git Commits
                  </button>
                  <button
                    onClick={() => handleSimulateGuardrail('deploy_prod')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'deploy_prod'
                        ? 'bg-rose-500 text-white font-bold border-rose-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Deploy to Production
                  </button>
                  <button
                    onClick={() => handleSimulateGuardrail('forecast_risk')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'forecast_risk'
                        ? 'bg-indigo-500 text-white font-bold border-indigo-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Forecast Delivery Risk
                  </button>
                  <button
                    onClick={() => handleSimulateGuardrail('enforce_slack_floor')}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      simulatedAction === 'enforce_slack_floor'
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    Enforce 15% Slack Floor
                  </button>
                </div>

                {/* Simulator Result Banner */}
                <div className={`p-4 rounded-xl border flex items-center space-x-3 ${
                  guardrailResult.status === 'ALLOWED'
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    guardrailResult.status === 'ALLOWED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                  }`}>
                    {guardrailResult.status === 'ALLOWED' ? <CheckIcon className="w-4 h-4 stroke-[3]" /> : <AlertTriangleIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-bold text-xs uppercase">{guardrailResult.status}</span>
                      <span className="text-[11px] text-slate-400">&bull; {guardrailResult.layer}</span>
                    </div>
                    <p className="text-xs mt-0.5 text-slate-200">{guardrailResult.explanation}</p>
                  </div>
                </div>
              </div>

              {/* 4 AI Governance Layers */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">
                    The 4 AI Governance Layers &mdash; Scope &amp; Permitted Actions
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FLOWFORGE_AI_GOVERNANCE_CHARTER.governanceLayers.map((l) => (
                    <div key={l.layerNumber} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">
                          Layer {l.layerNumber} &mdash; {l.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-indigo-400 border border-slate-800">
                          {l.verificationCadence}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">{l.scope}</div>

                      <div className="space-y-2 pt-1 text-xs">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase block mb-1">
                            Permitted Actions:
                          </span>
                          <ul className="space-y-0.5 text-slate-300">
                            {l.permittedActions.map((pa, pIdx) => (
                              <li key={pIdx} className="flex items-start space-x-1.5">
                                <span className="text-emerald-400">&bull;</span>
                                <span>{pa}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono font-bold text-rose-400 uppercase block mb-1">
                            Prohibited Actions:
                          </span>
                          <ul className="space-y-0.5 text-slate-300">
                            {l.prohibitedActions.map((pra, prIdx) => (
                              <li key={prIdx} className="flex items-start space-x-1.5">
                                <span className="text-rose-400">&bull;</span>
                                <span>{pra}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 AI Principles & Ethics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="text-sm font-bold text-white">6 Foundational AI Principles</h5>
                  <div className="space-y-2 text-xs">
                    {FLOWFORGE_AI_GOVERNANCE_CHARTER.principles.map((p, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="font-bold text-indigo-300 block">{p.title}</span>
                        <span className="text-slate-400 block mt-0.5">{p.definition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="text-sm font-bold text-white">AI Ethics &amp; Compliance Audits</h5>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="font-mono font-bold text-teal-400 uppercase text-[10px] block mb-1">
                        Ethical Commitments
                      </span>
                      <ul className="space-y-1 text-slate-300">
                        {FLOWFORGE_AI_GOVERNANCE_CHARTER.ethics.map((e, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <span className="text-teal-400">&bull;</span>
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="font-mono font-bold text-amber-400 uppercase text-[10px] block mb-1">
                        Statutory Audit Frameworks
                      </span>
                      <ul className="space-y-1 text-slate-300">
                        {FLOWFORGE_AI_GOVERNANCE_CHARTER.compliance.frameworks.map((f, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <span className="text-amber-400 font-bold">{f.name}:</span>
                            <span>{f.requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 4: FLOWFORGE FULL COMPANY HANDBOOK */}
        {/* ========================================================================= */}
        {activePillar === 'handbook' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                      ⭐ 4. FLOWFORGE FULL COMPANY HANDBOOK
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {FLOWFORGE_COMPANY_HANDBOOK.documentId}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Company Handbook for Employees, Partners &amp; Leadership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {FLOWFORGE_COMPANY_HANDBOOK.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_COMPANY_HANDBOOK, null, 2), "Company Handbook Data")}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5 self-start"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Handbook</span>
                </button>
              </div>

              {/* Welcome & Creed Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2">
                  <HeartHandshakeIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                    Welcome to FlowForge
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">
                  &ldquo;{FLOWFORGE_COMPANY_HANDBOOK.welcome.message}&rdquo;
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {FLOWFORGE_COMPANY_HANDBOOK.welcome.missionStatement}
                </p>
                <p className="text-xs text-slate-400 italic">
                  {FLOWFORGE_COMPANY_HANDBOOK.welcome.founderWelcome}
                </p>
              </div>

              {/* 7 Company Values & Culture */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">The 7 FlowForge Core Values</h4>
                    <span className="text-xs font-mono text-emerald-400">
                      Culture: {FLOWFORGE_COMPANY_HANDBOOK.culture.philosophy}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {FLOWFORGE_COMPANY_HANDBOOK.companyValues.map((val, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                      <span className="font-bold text-xs text-emerald-300 block">{val.name}</span>
                      <p className="text-xs text-slate-400 leading-relaxed">{val.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Structure & KPIs Navigator */}
              <div className="space-y-4">
                <div className="border-b border-slate-800/80 pb-2">
                  <h4 className="text-base font-bold text-white">Team Structure &amp; Department Directory</h4>
                  <p className="text-xs text-slate-400">7 Core functional pods powering the FlowForge Stability OS ecosystem.</p>
                </div>

                <div className="flex items-center space-x-1 overflow-x-auto pb-1 text-xs">
                  {FLOWFORGE_COMPANY_HANDBOOK.teamStructure.map(d => (
                    <button
                      key={d.name}
                      onClick={() => setSelectedHandbookDept(d.name)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition font-semibold ${
                        selectedHandbookDept === d.name
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>

                {/* Selected Department Card */}
                {(() => {
                  const dept = FLOWFORGE_COMPANY_HANDBOOK.teamStructure.find(d => d.name === selectedHandbookDept) || FLOWFORGE_COMPANY_HANDBOOK.teamStructure[0];
                  return (
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 animate-in fade-in duration-150">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                        <div>
                          <span className="text-xs font-mono text-emerald-400 font-bold">{dept.leadRole}</span>
                          <h5 className="text-base font-bold text-white">{dept.name}</h5>
                        </div>
                        <span className="text-xs text-slate-400 max-w-md">{dept.mission}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <span className="font-mono font-bold text-amber-400 uppercase text-[10px]">
                            Key Responsibilities
                          </span>
                          <ul className="space-y-1 text-slate-300">
                            {dept.keyResponsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start space-x-1.5">
                                <span className="text-amber-400">&bull;</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                          <span className="font-mono font-bold text-emerald-400 uppercase text-[10px]">
                            Core Performance KPIs
                          </span>
                          <ul className="space-y-1 text-slate-300">
                            {dept.coreKPIs.map((kpi, idx) => (
                              <li key={idx} className="flex items-start space-x-1.5">
                                <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{kpi}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Employee Expectations & Work Cadence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="text-sm font-bold text-white">Employee Expectations &amp; Standards</h5>
                  <div className="space-y-2 text-xs">
                    {FLOWFORGE_COMPANY_HANDBOOK.employeeExpectations.map((exp, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="font-bold text-emerald-300 block">{exp.title}</span>
                        <span className="text-slate-400 block mt-0.5">{exp.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h5 className="text-sm font-bold text-white">Operating Work Cadence</h5>
                  <div className="space-y-2 text-xs">
                    {FLOWFORGE_COMPANY_HANDBOOK.workCadence.map((wc, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                        <span className="font-bold text-teal-300 block">{wc.cycle}</span>
                        <span className="text-slate-400 block mt-0.5">{wc.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5 Performance Review Rubrics */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                  5 Performance Review Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {FLOWFORGE_COMPANY_HANDBOOK.performanceMetrics.map((pm, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                      <span className="text-xs font-bold text-white block">{pm.metric}</span>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">{pm.evaluation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Creed Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-950 border border-emerald-500/30 space-y-1 text-center">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                  The FlowForge Sovereign Pledge
                </span>
                <h4 className="text-lg font-black text-white pt-1">
                  &ldquo;{FLOWFORGE_COMPANY_HANDBOOK.closing.creed}&rdquo;
                </h4>
                <p className="text-xs text-slate-300">
                  {FLOWFORGE_COMPANY_HANDBOOK.closing.pledge}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 5: CONSOLIDATED MASTER DOSSIER */}
        {/* ========================================================================= */}
        {activePillar === 'full_dossier' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                    ⭐ TOTAL ENTERPRISE STACK CONSOLIDATED MASTER DOSSIER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Unified 4-Document Strategic Repository
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Read, inspect, or copy the complete unified text of all four Master Enterprise Stack deliverables.
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(fullPart7Markdown, "Complete Total Enterprise Stack Markdown Dossier")}
                  className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-purple-500/20 self-start"
                >
                  <CopyIcon className="w-4 h-4" />
                  <span>Copy Complete Dossier (MD)</span>
                </button>
              </div>

              {/* Markdown Display */}
              <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed max-h-[700px] overflow-y-auto">
                {fullPart7Markdown}
              </pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
