import React, { useState, useMemo } from 'react';
import {
  FileTextIcon,
  GlobeIcon,
  UsersIcon,
  TrendingUpIcon,
  DollarSignIcon,
  CheckCircle2Icon,
  CopyIcon,
  CheckIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  AwardIcon,
  BriefcaseIcon,
  BuildingIcon,
  SparklesIcon,
  LayersIcon,
  TargetIcon,
  CalendarIcon,
  MailIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from 'lucide-react';
import {
  FLOWFORGE_FOUNDER_LETTER,
  FLOWFORGE_10_YEAR_VISION,
  FLOWFORGE_EXECUTIVE_TEAM,
  FLOWFORGE_HIRING_ROSTER,
  FLOWFORGE_FUNDING_STRATEGY,
  ExecutiveRole,
  HiringPhaseRole,
  VisionYear,
  FundingStage
} from '../data/expansionSuitePart9Data';

interface EnterpriseExpansionSuitePart9ViewProps {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToPart6?: () => void;
  onNavigateToPart7?: () => void;
  onNavigateToPart8?: () => void;
  onNavigateToPart10?: () => void;
  onNavigateToMasterBusinessPlan?: () => void;
  onNavigateToTotalBusinessArchitecture?: () => void;
}

export const EnterpriseExpansionSuitePart9View: React.FC<EnterpriseExpansionSuitePart9ViewProps> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart5,
  onNavigateToPart6,
  onNavigateToPart7,
  onNavigateToPart8,
  onNavigateToPart10,
  onNavigateToMasterBusinessPlan,
  onNavigateToTotalBusinessArchitecture
}) => {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'letter' | 'vision' | 'org_hiring' | 'funding' | 'dossier'>('letter');

  // Clipboard copy state
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Hiring plan filters
  const [selectedPhase, setSelectedPhase] = useState<string>('All');
  const [selectedDept, setSelectedDept] = useState<string>('All');

  // Vision year accordion/select
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(0);

  // Funding calculator state
  const [selectedFundingIndex, setSelectedFundingIndex] = useState<number>(0);
  const [customValuationMultiplier, setCustomValuationMultiplier] = useState<number>(18);

  const handleCopy = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2500);
  };

  // Filtered hiring roles
  const filteredRoles = useMemo(() => {
    return FLOWFORGE_HIRING_ROSTER.filter((r) => {
      const matchPhase = selectedPhase === 'All' || r.phase.startsWith(selectedPhase);
      const matchDept = selectedDept === 'All' || r.department === selectedDept;
      return matchPhase && matchDept;
    });
  }, [selectedPhase, selectedDept]);

  // Aggregate stats
  const totalPhase1Headcount = FLOWFORGE_HIRING_ROSTER
    .filter((r) => r.phase.includes('Phase 1'))
    .reduce((acc, r) => acc + r.headcount, 0);

  const totalPhase2Headcount = FLOWFORGE_HIRING_ROSTER
    .filter((r) => r.phase.includes('Phase 2'))
    .reduce((acc, r) => acc + r.headcount, 0);

  // Compile full master dossier text for Part IX
  const fullDossierText = useMemo(() => {
    return `# ⭐ FLOWFORGE — TOTAL ENTERPRISE STACK (PART IX)
## Founder Letter + 10-Year Global Vision + Org Chart & Hiring Plan + Funding Strategy
Document Reference: FF-STACK-PART-IX-FINAL
Entity: CFO TAX PRO LLC (dba FlowForge)
Founder & CEO: Chuck

================================================================================
⭐ SECTION 1: FLOWFORGE FOUNDER LETTER TO STAKEHOLDERS
================================================================================
${FLOWFORGE_FOUNDER_LETTER.letterBody}

Signoff:
${FLOWFORGE_FOUNDER_LETTER.signoff.name}
${FLOWFORGE_FOUNDER_LETTER.signoff.title}
${FLOWFORGE_FOUNDER_LETTER.signoff.entity}
${FLOWFORGE_FOUNDER_LETTER.signoff.location}

================================================================================
⭐ SECTION 2: FLOWFORGE 10-YEAR GLOBAL VISION (2027–2036)
================================================================================
${FLOWFORGE_10_YEAR_VISION.map((v) => `
### [${v.yearNumber} (${v.period})]: ${v.theme}
- Target ARR: ${v.arrTarget}
- Organizational Scale: ${v.organizationalTarget}
- Global Impact: ${v.globalImpact}
Key Milestones:
${v.strategicMilestones.map((m) => `  * ${m}`).join('\n')}
`).join('\n')}

================================================================================
⭐ SECTION 3: FLOWFORGE ORG CHART & HIRING PLAN
================================================================================
### 1. Executive Leadership Team
${FLOWFORGE_EXECUTIVE_TEAM.map((e) => `
- ${e.title}
  Status/Name: ${e.nameOrStatus} | Reports To: ${e.reportsTo} | Equity: ${e.equityRange}
  Focus: ${e.focus}
  Key Responsibilities:
${e.keyResponsibilities.map((r) => `    * ${r}`).join('\n')}
  KPIs: ${e.keyKPIs.join(', ')}
`).join('\n')}

### 2. Full Hiring Roster & Phased Deployment
Phase 1 Foundation: ${totalPhase1Headcount} Core Roles
Phase 2 Autonomy Scaling: ${totalPhase2Headcount} Key Hires
Total Planned First 24 Months: ${totalPhase1Headcount + totalPhase2Headcount} Personnel

Roles Breakdown:
${FLOWFORGE_HIRING_ROSTER.map((r) => `
- [${r.phase}] ${r.title} (${r.department})
  Headcount: ${r.headcount} | Priority: ${r.priority} | Target Quarter: ${r.quarter}
  Estimated Base: ${r.estimatedBaseSalary}
  Purpose: ${r.rolePurpose}
  Core Skills: ${r.technicalStackOrSkill.join(', ')}
`).join('\n')}

================================================================================
⭐ SECTION 4: FLOWFORGE FUNDING STRATEGY & CAPITAL ALLOCATION
================================================================================
Narrative:
${FLOWFORGE_FUNDING_STRATEGY.narrative}

Core Axiom:
"${FLOWFORGE_FUNDING_STRATEGY.coreAxiom}"

Funding Rounds Architecture:
${FLOWFORGE_FUNDING_STRATEGY.stages.map((s) => `
### ${s.stage}
- Target Capital Raise: ${s.targetRaise}
- Target Valuation: ${s.valuationRange}
- Timing: ${s.idealTiming}
Key Investor Sources:
${s.investorSources.map((inv) => `  * ${inv}`).join('\n')}
Capital Deployment:
${s.useOfCapital.map((u) => `  * ${u.category}: ${u.percentage}%`).join('\n')}
Strategic Milestones Unlocked:
${s.milestonesUnlocked.map((m) => `  * ${m}`).join('\n')}
`).join('\n')}

================================================================================
CONCLUSION: THE FOUNDATIONAL MASTER PACKAGE IS COMPLETE
FlowForge is fully capitalized, architected, and positioned to define and dominate
the Engineering Stability Platform (ESP) category worldwide.
================================================================================
`;
  }, [totalPhase1Headcount, totalPhase2Headcount]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24">
      {/* Top Banner & Context Nav */}
      <div className="bg-slate-900/90 border-b border-slate-800 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-rose-950/50">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold tracking-wider uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  Part IX • Final Master Suite
                </span>
                <span className="text-xs text-slate-400 font-mono">FF-STACK-PART-IX-FINAL</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-1.5">
                Founder Letter, 10-Yr Vision, Org Chart & Funding Strategy
              </h1>
            </div>
          </div>

          {/* Quick Cross Links */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            {onNavigateToPart7 && (
              <button
                onClick={onNavigateToPart7}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700 transition"
              >
                Part VII: Enterprise Stack
              </button>
            )}
            {onNavigateToPart8 && (
              <button
                onClick={onNavigateToPart8}
                className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30 transition"
              >
                Part VIII: Global Domination
              </button>
            )}
            {onNavigateToPart10 && (
              <button
                onClick={onNavigateToPart10}
                className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 transition font-bold"
              >
                ⭐ Part X: Global Ops & Arch
              </button>
            )}
            {onNavigateToMasterBusinessPlan && (
              <button
                onClick={onNavigateToMasterBusinessPlan}
                className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 transition"
              >
                Master Business Plan
              </button>
            )}
            <button
              onClick={() => handleCopy(fullDossierText, 'full_dossier_top')}
              className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center space-x-1.5 shadow-sm transition"
            >
              {copiedSection === 'full_dossier_top' ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Dossier Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Full Part IX Dossier</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto space-x-2 pb-2 text-sm">
          <button
            onClick={() => setActiveTab('letter')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center space-x-2 ${
              activeTab === 'letter'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <MailIcon className="w-4 h-4" />
            <span>1. Founder Letter to Stakeholders</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center space-x-2 ${
              activeTab === 'vision'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <GlobeIcon className="w-4 h-4" />
            <span>2. 10-Year Global Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('org_hiring')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center space-x-2 ${
              activeTab === 'org_hiring'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <UsersIcon className="w-4 h-4" />
            <span>3. Org Chart & Hiring Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('funding')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center space-x-2 ${
              activeTab === 'funding'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <DollarSignIcon className="w-4 h-4" />
            <span>4. Funding Strategy & Capital Raise</span>
          </button>

          <button
            onClick={() => setActiveTab('dossier')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition flex items-center space-x-2 ${
              activeTab === 'dossier'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-inner'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileTextIcon className="w-4 h-4" />
            <span>5. Master Dossier & Export</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-8">

        {/* TAB 1: FOUNDER LETTER */}
        {activeTab === 'letter' && (
          <div className="space-y-6">
            {/* Header Callout */}
            <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                      Official Executive Charter
                    </span>
                    <span className="text-xs text-slate-400">Ref: {FLOWFORGE_FOUNDER_LETTER.documentId}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    FlowForge Founder Letter to Stakeholders
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    The official founder manifesto dispatched to venture partners, early enterprise customers, candidates, and ecosystem architects.
                  </p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => handleCopy(FLOWFORGE_FOUNDER_LETTER.letterBody, 'founder_letter_only')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg text-xs flex items-center space-x-2 border border-slate-700 transition"
                  >
                    {copiedSection === 'founder_letter_only' ? (
                      <>
                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon className="w-4 h-4" />
                        <span>Copy Founder Letter</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Letter Parchment Container */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
              <div className="max-w-3xl mx-auto space-y-6 text-slate-200 font-sans leading-relaxed">
                {/* Formal Letterhead */}
                <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                      FLOWFORGE / CFO TAX PRO LLC
                    </div>
                    <div className="text-xs text-slate-400">Corporate Offices: Sachse / Dallas, TX</div>
                  </div>
                  <div className="text-xs sm:text-right text-slate-400">
                    <div>Date: {FLOWFORGE_FOUNDER_LETTER.date}</div>
                    <div className="text-amber-400/80 font-medium">To: Stakeholders, Partners, and Early Believers</div>
                  </div>
                </div>

                {/* Salutation */}
                <p className="text-lg font-medium text-slate-100">
                  To our stakeholders, partners, and early believers,
                </p>

                {/* Body Paragraphs */}
                <p className="text-base text-slate-300">
                  <strong className="text-white font-semibold">FlowForge was built to solve the most urgent and overlooked problem in engineering: instability.</strong>
                </p>

                <p className="text-base text-slate-300">
                  For decades, engineering teams have operated without stability systems. We’ve built DevOps, observability, CI/CD, Agile, and AI automation — but none of these address the core instability inside engineering teams. Burnout continues to rise. Delivery timelines slip. Critical paths break. Slack disappears. Volatility increases.
                </p>

                <p className="text-lg font-bold text-amber-300 border-l-4 border-amber-500 pl-4 py-1 bg-amber-500/5 rounded-r">
                  FlowForge exists to change that.
                </p>

                <p className="text-base text-slate-300">
                  We created the <strong className="text-white">Stability OS</strong> — the first platform that measures load, predicts burnout, stabilizes delivery, and autonomously rebalances engineering operations. We defined a new category: <strong className="text-white">Engineering Stability Platforms (ESP)</strong>. And we built the autonomy engine, intelligence layer, governance system, and ESA certification that make stability measurable, governable, and automatable.
                </p>

                <div className="py-2 space-y-1 text-slate-200 font-medium italic border-y border-slate-800 my-4">
                  <p>FlowForge is not just a product — it is a movement.</p>
                  <p>A new standard.</p>
                  <p>A new operating layer for engineering teams worldwide.</p>
                </div>

                <p className="text-base text-slate-300">
                  Our mission is simple:
                  <br />
                  <span className="text-xl font-black tracking-tight text-white block mt-1">
                    Stabilize engineering teams everywhere.
                  </span>
                </p>

                <p className="text-base text-slate-300">
                  We will expand globally, partner with the world’s leading organizations, certify engineering stability, and institutionalize ESP as a foundational enterprise system.
                </p>

                <p className="text-base text-slate-300">
                  Thank you for believing in FlowForge.
                  <br />
                  The future of engineering stability starts now.
                </p>

                {/* Formal Sign-off */}
                <div className="pt-8 border-t border-slate-800 mt-10">
                  <div className="font-serif text-2xl text-amber-300 tracking-wide font-medium italic mb-2">
                    Chuck
                  </div>
                  <div className="text-sm font-bold text-white">Chuck</div>
                  <div className="text-xs text-slate-400">Founder & Chief Executive Officer</div>
                  <div className="text-xs text-slate-400 font-medium">CFO TAX PRO LLC (dba FlowForge)</div>
                  <div className="text-xs text-slate-500 mt-1">Sachse / Dallas, TX</div>
                </div>
              </div>
            </div>

            {/* Strategic Implications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>The Core Invariant</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Instability is Solvable</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineering teams are complex queuing networks. When load reaches 100% capacity, delay becomes infinite. FlowForge mathematically preserves the 15% slack floor.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <TargetIcon className="w-4 h-4" />
                  <span>The Category Axiom</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">ESP vs Traditional Tools</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  While Jira tracks tickets and Datadog tracks servers, FlowForge tracks and stabilizes the human-cognitive operating system that writes the code.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <GlobeIcon className="w-4 h-4" />
                  <span>The Global Mandate</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">From Audit to Standard</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Starting with frictionless 30-Day ESAs, FlowForge converts initial diagnostic visibility into multi-year recurring enterprise platform governance.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 10-YEAR GLOBAL VISION */}
        {activeTab === 'vision' && (
          <div className="space-y-6">
            {/* Intro Card */}
            <div className="bg-gradient-to-r from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
                    Long-Term Strategic Compass
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    FlowForge 10-Year Global Vision (2027–2036)
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    The phased architectural trajectory guiding capital allocation, enterprise penetration, global autonomy, and universal category standardization.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Terminal ARR Target</div>
                    <div className="text-xl font-extrabold text-indigo-400">$300M – $1B+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Timeline Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {FLOWFORGE_10_YEAR_VISION.map((v, idx) => {
                const isSelected = selectedYearIndex === idx;
                return (
                  <button
                    key={v.yearNumber}
                    onClick={() => setSelectedYearIndex(idx)}
                    className={`p-3 rounded-xl text-left border transition ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-950/60'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="text-xs font-mono opacity-80">{v.yearNumber} ({v.period})</div>
                    <div className="text-sm font-bold mt-1 line-clamp-1">{v.theme}</div>
                    <div className="text-xs opacity-90 mt-2 font-mono font-semibold">{v.arrTarget}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Year Detail Panel */}
            {(() => {
              const currentYear = FLOWFORGE_10_YEAR_VISION[selectedYearIndex];
              return (
                <div className="bg-slate-900 border border-indigo-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-lg font-mono font-bold text-sm">
                          {currentYear.yearNumber} • {currentYear.period}
                        </span>
                        <h3 className="text-2xl font-black text-white">{currentYear.theme}</h3>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        Global Operational Scale: <span className="text-slate-200 font-semibold">{currentYear.organizationalTarget}</span>
                      </p>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 px-4 py-2.5 rounded-xl text-right shrink-0">
                      <div className="text-xs text-slate-400">Target Revenue Run-Rate</div>
                      <div className="text-lg font-black text-emerald-400">{currentYear.arrTarget}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Key Strategic Milestones */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <TargetIcon className="w-4 h-4 text-indigo-400" />
                        <span>Core Strategic Milestones</span>
                      </h4>
                      <div className="space-y-2.5">
                        {currentYear.strategicMilestones.map((milestone, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 flex items-start space-x-3"
                          >
                            <CheckCircle2Icon className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-200 leading-snug">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Global Impact & Transformative Trajectory */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                          <GlobeIcon className="w-4 h-4 text-emerald-400" />
                          <span>Global Impact on Engineering</span>
                        </h4>
                        <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 text-sm text-emerald-200 leading-relaxed">
                          {currentYear.globalImpact}
                        </div>
                      </div>

                      <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
                        <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Ecosystem Evolution Snapshot
                        </h5>
                        <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
                          <span className="text-slate-400">ESP Category Status</span>
                          <span className="text-white font-medium">
                            {selectedYearIndex === 0
                              ? 'Category Inception & Bible'
                              : selectedYearIndex === 1
                              ? 'Analyst Validation & Tier-1 Pilots'
                              : selectedYearIndex === 2
                              ? 'Recognized Analyst Market'
                              : selectedYearIndex === 3
                              ? 'Mandatory Board Governance'
                              : selectedYearIndex === 4
                              ? 'Universal Industry Standard'
                              : 'Sovereign Global Stability Network'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
                          <span className="text-slate-400">Autonomy Engine Cadence</span>
                          <span className="text-white font-medium">
                            {selectedYearIndex <= 1 ? 'RulePack Governance & Advisory' : 'Closed-Loop Real-Time Balancing'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs py-1">
                          <span className="text-slate-400">Certifications Active</span>
                          <span className="text-white font-medium">
                            {selectedYearIndex === 0 ? 'ESA Audits (B2B)' : 'FCSA, FCGS, FCAE Worldwide'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 10-Year Cumulative Progression Summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
                The 10-Year Macro Category Trajectory
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                  <div className="font-bold text-amber-400 text-sm mb-1">Phase I: Creation & Proof (Y1-Y2)</div>
                  <p className="text-slate-400 leading-relaxed">
                    Convert unmeasured chaos into quantifiable telemetry. Prove mathematically that maintaining slack increases net enterprise throughput.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                  <div className="font-bold text-indigo-400 text-sm mb-1">Phase II: Autonomy & Prediction (Y3-Y4)</div>
                  <p className="text-slate-400 leading-relaxed">
                    Deploy autonomous load rebalancing and 90-day Bayesian delivery forecasting. Replace guesswork with engineering certainty.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                  <div className="font-bold text-emerald-400 text-sm mb-1">Phase III: Sovereign Network (Y5-Y10)</div>
                  <p className="text-slate-400 leading-relaxed">
                    Institutionalize FlowForge as the planetary operating system for technology organizations, establishing the Global Stability Index (GSI).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ORG CHART & HIRING PLAN */}
        {activeTab === 'org_hiring' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                    Human Capital Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    FlowForge Org Chart & Hiring Plan
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    The precision organizational structure required to execute Stability OS engineering, enterprise sales, partner alliances, and category evangelism.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Phase 1 Team</div>
                    <div className="text-xl font-bold text-white">{totalPhase1Headcount} Core Personnel</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Phase 2 Addition</div>
                    <div className="text-xl font-bold text-emerald-400">+{totalPhase2Headcount} Key Hires</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Leadership Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BriefcaseIcon className="w-5 h-5 text-emerald-400" />
                  <span>Executive Leadership Structure (C-Suite & VP Roster)</span>
                </h3>
                <span className="text-xs text-slate-400">6 Strategic Core Leadership Pillars</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FLOWFORGE_EXECUTIVE_TEAM.map((exec) => (
                  <div
                    key={exec.title}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/40 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                          {exec.nameOrStatus}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">
                          {exec.equityRange}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">{exec.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{exec.focus}</p>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Key Mandates:</div>
                        {exec.keyResponsibilities.slice(0, 2).map((r, i) => (
                          <div key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                      <span className="text-slate-500">Primary KPIs: </span>
                      <span className="text-slate-300">{exec.keyKPIs.slice(0, 2).join(' • ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phased Hiring Roster Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-indigo-400" />
                    <span>Phased Hiring Plan & Deployment Roster</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Showing {filteredRoles.length} planned roles across engineering, product, sales, marketing, and operations.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-2 text-xs">
                  <select
                    value={selectedPhase}
                    onChange={(e) => setSelectedPhase(e.target.value)}
                    className="bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500"
                  >
                    <option value="All">All Phases</option>
                    <option value="Phase 1">Phase 1 (Year 1)</option>
                    <option value="Phase 2">Phase 2 (Year 2)</option>
                  </select>

                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500"
                  >
                    <option value="All">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Product">Product</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Partnerships">Partnerships</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
              </div>

              {/* Roster Grid */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-3">Role Title</th>
                      <th className="py-3 px-3">Dept & Phase</th>
                      <th className="py-3 px-3 text-center">Headcount</th>
                      <th className="py-3 px-3">Quarter</th>
                      <th className="py-3 px-3">Target Base Salary</th>
                      <th className="py-3 px-3">Stack / Core Skill</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredRoles.map((role, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition">
                        <td className="py-3 px-3 font-semibold text-white">
                          <div className="flex items-center space-x-2">
                            <span>{role.title}</span>
                            {role.priority === 'Immediate' && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-rose-500/20 text-rose-300 rounded border border-rose-500/30">
                                Immediate
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 font-normal mt-0.5 line-clamp-1">
                            {role.rolePurpose}
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {role.department}
                          </span>
                          <div className="text-[10px] text-slate-400 mt-1">{role.phase}</div>
                        </td>
                        <td className="py-3 px-3 text-center font-bold text-white font-mono">
                          {role.headcount}
                        </td>
                        <td className="py-3 px-3 font-mono text-slate-300">{role.quarter}</td>
                        <td className="py-3 px-3 font-mono text-emerald-400">{role.estimatedBaseSalary}</td>
                        <td className="py-3 px-3">
                          <div className="flex flex-wrap gap-1">
                            {role.technicalStackOrSkill.slice(0, 3).map((s, i) => (
                              <span key={i} className="px-1.5 py-0.5 bg-slate-950 text-slate-300 rounded text-[10px]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Department Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { dept: 'Engineering', count: '13 Hires', color: 'border-indigo-500/30 text-indigo-400' },
                { dept: 'Product', count: '3 Hires', color: 'border-cyan-500/30 text-cyan-400' },
                { dept: 'Sales', count: '10 Hires', color: 'border-emerald-500/30 text-emerald-400' },
                { dept: 'Marketing', count: '3 Hires', color: 'border-amber-500/30 text-amber-400' },
                { dept: 'Partnerships', count: '2 Hires', color: 'border-purple-500/30 text-purple-400' },
                { dept: 'Operations', count: '2 Hires', color: 'border-rose-500/30 text-rose-400' }
              ].map((d) => (
                <div key={d.dept} className={`bg-slate-900 border ${d.color} rounded-xl p-3.5 text-center`}>
                  <div className="text-xs text-slate-400 uppercase font-semibold">{d.dept}</div>
                  <div className="text-base font-bold text-white mt-1">{d.count}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FUNDING STRATEGY */}
        {activeTab === 'funding' && (
          <div className="space-y-6">
            {/* Header & The Legendary Funding Narrative */}
            <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded">
                    Capital Strategy & Investment Thesis
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    FlowForge Funding Strategy
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                    The phased capital deployment plan for scaling from Pre-Seed validation to global ESP category standardization and institutional dominance.
                  </p>
                </div>

                {/* The Legendary Narrative Callout */}
                <div className="bg-slate-950/80 border border-rose-500/40 rounded-xl p-5 max-w-md shrink-0 shadow-lg">
                  <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold mb-2">
                    The Funding Narrative
                  </div>
                  <div className="space-y-1 text-sm text-slate-200 font-medium">
                    <p>FlowForge is not a feature.</p>
                    <p>FlowForge is not a tool.</p>
                    <p className="text-white font-bold">
                      FlowForge is a new category — the Stability OS for engineering teams.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 italic">
                    "Investors fund category creators, not category participants. FlowForge is the category creator."
                  </div>
                </div>
              </div>
            </div>

            {/* Stages Grid Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLOWFORGE_FUNDING_STRATEGY.stages.map((stage, idx) => {
                const isSelected = selectedFundingIndex === idx;
                return (
                  <button
                    key={stage.stage}
                    onClick={() => setSelectedFundingIndex(idx)}
                    className={`p-5 rounded-2xl text-left border transition relative flex flex-col justify-between ${
                      isSelected
                        ? 'bg-rose-950/40 border-rose-500 shadow-xl shadow-rose-950/50 text-white'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400">
                        {stage.stage.split(' — ')[0]}
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">{stage.stage.split(' — ')[1]}</h4>
                      <div className="text-2xl font-black text-rose-300 mt-2 font-mono">
                        {stage.targetRaise}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{stage.valuationRange}</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-medium text-slate-400">
                      Timing: <span className="text-slate-200">{stage.idealTiming}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Funding Stage Deep Dive */}
            {(() => {
              const currentStage = FLOWFORGE_FUNDING_STRATEGY.stages[selectedFundingIndex];
              return (
                <div className="bg-slate-900 border border-rose-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded-lg font-mono font-bold text-sm">
                          {currentStage.stage}
                        </span>
                        <h3 className="text-xl font-bold text-white">Target Capital: {currentStage.targetRaise}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Post-Money Valuation Target: <span className="text-slate-200 font-semibold">{currentStage.valuationRange}</span>
                      </p>
                    </div>

                    <div className="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-right">
                      <div className="text-xs text-slate-400">Deployment Horizon</div>
                      <div className="text-sm font-semibold text-rose-400">{currentStage.idealTiming}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Purpose of the Round */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <TargetIcon className="w-4 h-4 text-rose-400" />
                        <span>Core Capital Purpose</span>
                      </h4>
                      <div className="space-y-2">
                        {currentStage.purpose.map((p, i) => (
                          <div key={i} className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl flex items-start space-x-2.5">
                            <span className="text-rose-400 font-bold text-xs mt-0.5">0{i + 1}</span>
                            <span className="text-xs text-slate-200 leading-snug">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capital Allocation Breakdown */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <DollarSignIcon className="w-4 h-4 text-emerald-400" />
                        <span>Use of Proceeds Allocation</span>
                      </h4>
                      <div className="space-y-3 bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                        {currentStage.useOfCapital.map((u, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-slate-300 font-medium">{u.category}</span>
                              <span className="text-emerald-400 font-mono font-bold">{u.percentage}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full rounded-full"
                                style={{ width: `${u.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Target Investor Archetypes:
                        </div>
                        <div className="space-y-1">
                          {currentStage.investorSources.map((inv, idx) => (
                            <div key={idx} className="text-xs text-slate-300 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                              <span>{inv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Milestones Unlocked */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2Icon className="w-4 h-4 text-indigo-400" />
                        <span>Critical Milestones Unlocked</span>
                      </h4>
                      <div className="space-y-2">
                        {currentStage.milestonesUnlocked.map((m, i) => (
                          <div key={i} className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl flex items-start space-x-2.5">
                            <CheckIcon className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-200 leading-snug">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Valuation & SaaS Multiplier Benchmark Calculator */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <TrendingUpIcon className="w-5 h-5 text-amber-400" />
                    <span>Category Creator Valuation Multiple Estimator</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Category creators trade at significant premiums (15x–30x NTM ARR) versus standard software tool vendors (6x–10x).
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <span className="text-slate-400">Valuation Multiple:</span>
                  <div className="flex items-center space-x-1 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    <span className="font-mono text-amber-400 font-bold">{customValuationMultiplier}x</span>
                    <span className="text-slate-500">ARR</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
                {[
                  { stage: 'Year 1 ($5M ARR)', arr: 5, multiple: customValuationMultiplier },
                  { stage: 'Year 2 ($20M ARR)', arr: 20, multiple: customValuationMultiplier },
                  { stage: 'Year 3 ($50M ARR)', arr: 50, multiple: customValuationMultiplier },
                  { stage: 'Year 5 ($145M ARR)', arr: 145, multiple: customValuationMultiplier }
                ].map((bench) => {
                  const impliedValuation = bench.arr * bench.multiple;
                  return (
                    <div key={bench.stage} className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl text-center">
                      <div className="text-xs text-slate-400 font-mono">{bench.stage}</div>
                      <div className="text-2xl font-black text-white mt-1 font-mono">
                        ${impliedValuation >= 1000 ? `${(impliedValuation / 1000).toFixed(2)}B` : `${impliedValuation}M`}
                      </div>
                      <div className="text-[11px] text-amber-400 mt-1">
                        at {bench.multiple}x Category Multiple
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MASTER DOSSIER & EXPORT */}
        {activeTab === 'dossier' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded">
                  Consolidated Markdown Export
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  Part IX Complete Master Dossier
                </h2>
                <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                  Unified repository containing the complete text of the Founder Letter, 10-Year Global Vision, Org Chart & Hiring Plan, and Funding Strategy.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(fullDossierText, 'dossier_tab')}
                  className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center space-x-2 transition shadow-md"
                >
                  {copiedSection === 'dossier_tab' ? (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4" />
                      <span>Copy Full Dossier (Markdown)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Dossier Monospace Viewer */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-xs text-slate-300 overflow-x-auto max-h-[600px] overflow-y-auto leading-relaxed shadow-inner">
              <pre className="whitespace-pre-wrap">{fullDossierText}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
