import React, { useState } from 'react';
import {
  TOTAL_BUSINESS_SECTIONS,
  MASTER_CHECKLIST,
  IDENTITY_SYSTEM_DATA,
  PRODUCT_SYSTEM_DATA,
  BUSINESS_SYSTEM_DATA,
  FCSA_EXAM_QUESTIONS,
  PITCH_DECK_SLIDES,
  WEBSITE_PAGES_DATA,
  OPERATIONS_SYSTEM_DATA
} from '../data/totalBusinessArchitectureData';
import {
  FLOWFORGE_ANALYST_KEYNOTE,
  FLOWFORGE_AUTONOMOUS_ROADMAP,
  FLOWFORGE_PARTNER_SUMMIT,
  FLOWFORGE_CATEGORY_BIBLE
} from '../data/expansionSuitePart6Data';
import {
  BriefcaseIcon,
  CheckCircle2Icon,
  SearchIcon,
  PrinterIcon,
  CopyIcon,
  LayersIcon,
  GlobeIcon,
  PresentationIcon,
  GraduationCapIcon,
  FileTextIcon,
  CalculatorIcon,
  SparklesIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuIcon,
  MegaphoneIcon,
  HandshakeIcon,
  CalendarIcon,
  CompassIcon,
  AwardIcon,
  ExternalLinkIcon,
  AlertCircleIcon,
  ChevronRightIcon,
  MicIcon,
  XIcon,
  CheckIcon,
  StarIcon,
  BookOpenIcon
} from 'lucide-react';

interface TotalBusinessArchitectureViewProps {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToPart6?: () => void;
  onNavigateToPart7?: () => void;
  onNavigateToPart8?: () => void;
  onNavigateToPart9?: () => void;
  onNavigateToPart10?: () => void;
  onNavigateToMasterBusinessPlan?: () => void;
}

type MainViewMode = 
  | 'final_consolidated'
  | 'sections' 
  | 'checklist' 
  | 'pitch_deck' 
  | 'exam_simulator' 
  | 'website_simulator' 
  | 'contract_generator' 
  | 'economics_calculator';

export const TotalBusinessArchitectureView: React.FC<TotalBusinessArchitectureViewProps> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart5,
  onNavigateToPart6,
  onNavigateToPart7,
  onNavigateToPart8,
  onNavigateToPart9,
  onNavigateToPart10,
  onNavigateToMasterBusinessPlan
}) => {
  // Navigation & View Modes
  const [viewMode, setViewMode] = useState<MainViewMode>('final_consolidated');
  const [selectedSectionNumber, setSelectedSectionNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [expandedDeliverable, setExpandedDeliverable] = useState<'analyst_keynote' | 'roadmap' | 'partner_summit' | 'category_bible' | null>(null);

  // 16-Slide Pitch Deck State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showPresenterNotes, setShowPresenterNotes] = useState<boolean>(true);

  // 40-Q Exam State
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({});
  const [examDomainFilter, setExamDomainFilter] = useState<string>('All');
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  // Website Simulator State
  const [websiteActivePage, setWebsiteActivePage] = useState<'home' | 'product' | 'platform' | 'pricing' | 'esa' | 'about' | 'contact'>('home');
  const [pilotFormSubmitted, setPilotFormSubmitted] = useState<boolean>(false);

  // Contract Generator State
  const [contractCustomerName, setContractCustomerName] = useState<string>('Acme Global Enterprises');
  const [contractTier, setContractTier] = useState<string>('Governance + Autonomy ($3,500/mo)');
  const [contractEffectiveDate, setContractEffectiveDate] = useState<string>('2027-01-01');

  // Economics Calculator State
  const [engineerCount, setEngineerCount] = useState<number>(100);
  const [avgEngineerSalary, setAvgEngineerSalary] = useState<number>(180000);
  const [annualTurnoverPct, setAnnualTurnoverPct] = useState<number>(18);
  const [slippedReleasesPerYear, setSlippedReleasesPerYear] = useState<number>(3);

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(`${label} copied to clipboard!`);
    setTimeout(() => setCopyFeedback(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Exam Scoring Calculation
  const totalAnswered = Object.keys(examAnswers).length;
  const correctCount = FCSA_EXAM_QUESTIONS.reduce((acc, q) => {
    return examAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);
  const scorePct = Math.round((correctCount / FCSA_EXAM_QUESTIONS.length) * 100);
  const isPassing = scorePct >= 80;

  // Economics Calculator Calculations
  const calculatedTurnoverCost = engineerCount * (annualTurnoverPct / 100) * (avgEngineerSalary * 1.5);
  const calculatedSlipCost = slippedReleasesPerYear * 250000;
  const calculatedContextSwitchWaste = engineerCount * (avgEngineerSalary * 0.15);
  const totalAnnualVolatilityLoss = calculatedTurnoverCost + calculatedSlipCost + calculatedContextSwitchWaste;
  const flowForgeAnnualCost = 42000; // $3,500/mo * 12
  const netEstimatedSavings = Math.round(totalAnnualVolatilityLoss * 0.40); // 40% reclaimed
  const roiMultiple = (netEstimatedSavings / flowForgeAnnualCost).toFixed(1);

  // Search Filter
  const filteredChecklist = MASTER_CHECKLIST.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      {/* Toast Notification */}
      {copyFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-2 text-sm font-semibold animate-fade-in">
          <CheckCircle2Icon className="w-5 h-5" />
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* Master Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-teal-500 to-blue-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-black">
              <BriefcaseIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-tight text-white">FlowForge Total Business Architecture</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Master System
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  10 Sections &bull; 20 Deliverables
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Everything FlowForge needs for smooth, smart business — delivered all at once in one unified master operating structure.
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
              >
                &larr; Stability Core
              </button>
            )}
            {onNavigateToPart6 && (
              <button
                onClick={onNavigateToPart6}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
              >
                Part VI Suite
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Master</span>
            </button>
            <button
              onClick={() => handleCopyText(JSON.stringify(TOTAL_BUSINESS_SECTIONS, null, 2), "Total Architecture Structure")}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition flex items-center space-x-1.5"
            >
              <CopyIcon className="w-3.5 h-3.5 text-slate-950" />
              <span>Copy System Manifest</span>
            </button>
          </div>
        </div>

        {/* Global Mode Switcher Tabs */}
        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full text-xs font-semibold">
            {onNavigateToMasterBusinessPlan && (
              <button
                onClick={onNavigateToMasterBusinessPlan}
                className="px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold"
                title="Open Master Business Plan (15 Chapters)"
              >
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>⭐ Master Business Plan (15 Ch)</span>
              </button>
            )}

            {onNavigateToPart7 && (
              <button
                onClick={onNavigateToPart7}
                className="px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold"
                title="Open FlowForge Total Enterprise Stack (Part VII)"
              >
                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>⭐ Part VII: Total Enterprise Stack</span>
              </button>
            )}

            {onNavigateToPart8 && (
              <button
                onClick={onNavigateToPart8}
                className="px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 font-bold"
                title="Open FlowForge Part VIII: Global Expansion & Category Domination"
              >
                <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>⭐ Part VIII: Global Expansion</span>
              </button>
            )}

            {onNavigateToPart9 && (
              <button
                onClick={onNavigateToPart9}
                className="px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold"
                title="Open FlowForge Part IX: Founder Letter, 10-Yr Vision & Capital Strategy"
              >
                <ShieldCheckIcon className="w-3.5 h-3.5 text-rose-400" />
                <span>⭐ Part IX: Founder & Capital</span>
              </button>
            )}

            {onNavigateToPart10 && (
              <button
                onClick={onNavigateToPart10}
                className="px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold"
                title="Open FlowForge Part X: Global Ops, Finance & Technical Architecture"
              >
                <ShieldCheckIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>⭐ Part X: Global Ops & Arch</span>
              </button>
            )}

            <button
              onClick={() => setViewMode('final_consolidated')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'final_consolidated'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/25 ring-2 ring-amber-300'
                  : 'text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 border border-amber-500/30'
              }`}
            >
              <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-950" />
              <span>Final Consolidated (4 Pillars)</span>
            </button>

            <button
              onClick={() => setViewMode('sections')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'sections'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <LayersIcon className="w-3.5 h-3.5" />
              <span>10 Master Sections</span>
            </button>

            <button
              onClick={() => setViewMode('checklist')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'checklist'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <CheckCircle2Icon className="w-3.5 h-3.5" />
              <span>All 20 Deliverables</span>
            </button>

            <button
              onClick={() => setViewMode('pitch_deck')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'pitch_deck'
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <PresentationIcon className="w-3.5 h-3.5" />
              <span>16-Slide Pitch Deck</span>
            </button>

            <button
              onClick={() => setViewMode('exam_simulator')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'exam_simulator'
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <GraduationCapIcon className="w-3.5 h-3.5" />
              <span>FCSA 40-Q Exam</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-900/60 text-white font-mono">
                {totalAnswered}/40
              </span>
            </button>

            <button
              onClick={() => setViewMode('website_simulator')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'website_simulator'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <GlobeIcon className="w-3.5 h-3.5" />
              <span>Multi-Page Website</span>
            </button>

            <button
              onClick={() => setViewMode('contract_generator')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'contract_generator'
                  ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Enterprise MSA Contract</span>
            </button>

            <button
              onClick={() => setViewMode('economics_calculator')}
              className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition whitespace-nowrap ${
                viewMode === 'economics_calculator'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-md shadow-rose-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <CalculatorIcon className="w-3.5 h-3.5" />
              <span>ROI Economics</span>
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <SearchIcon className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search master architecture..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-8 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pt-6 pb-16">

        {/* ========================================================================= */}
        {/* VIEW MODE 0: FINAL CONSOLIDATED DELIVERY (4 PILLARS) */}
        {/* ========================================================================= */}
        {viewMode === 'final_consolidated' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Master Consolidated Delivery Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-8 shadow-2xl">
              <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center space-x-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-amber-500/30">
                    <StarIcon className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                    <span>FINAL CONSOLIDATED DELIVERY</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-amber-300 border border-amber-500/20">
                    Unified FlowForge Master Operating System
                  </span>
                </div>

                <div className="max-w-3xl space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Total Business Architecture &mdash; The 4 Sovereign Strategic Pillars
                  </h1>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    All remaining strategic components delivered at once, unified into the FlowForge master system: the Analyst Keynote, 24-Month Autonomous Engineering Roadmap, Global Partner Summit 2027, and the 7-Chapter ESP Category Bible.
                  </p>
                </div>

                {/* Quick Pillar Jump Pills */}
                <div className="flex items-center flex-wrap gap-2 pt-2">
                  <a
                    href="#analyst-keynote"
                    className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700/80 transition flex items-center space-x-1.5"
                  >
                    <MicIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>1. Analyst Keynote</span>
                  </a>
                  <a
                    href="#autonomous-roadmap"
                    className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700/80 transition flex items-center space-x-1.5"
                  >
                    <CompassIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>2. Autonomous Roadmap</span>
                  </a>
                  <a
                    href="#partner-summit"
                    className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700/80 transition flex items-center space-x-1.5"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>3. Global Partner Summit</span>
                  </a>
                  <a
                    href="#category-bible"
                    className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-bold text-amber-300 border border-slate-700/80 transition flex items-center space-x-1.5"
                  >
                    <BookOpenIcon className="w-3.5 h-3.5 text-teal-400" />
                    <span>4. Category Bible</span>
                  </a>

                  <div className="ml-auto flex items-center space-x-2">
                    <button
                      onClick={() => handleCopyText(JSON.stringify({
                        analystKeynote: FLOWFORGE_ANALYST_KEYNOTE,
                        roadmap: FLOWFORGE_AUTONOMOUS_ROADMAP,
                        partnerSummit: FLOWFORGE_PARTNER_SUMMIT,
                        categoryBible: FLOWFORGE_CATEGORY_BIBLE
                      }, null, 2), "Complete 4 Strategic Pillars")}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy All 4 Pillars JSON</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center space-x-1.5"
                    >
                      <PrinterIcon className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* PILLAR 1: FLOWFORGE ANALYST KEYNOTE */}
            {/* =================================================================== */}
            <div id="analyst-keynote" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      1
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                      ⭐ 1. FLOWFORGE ANALYST KEYNOTE
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Engineering Stability: The Missing Layer in Modern Software Delivery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Purpose-built for Gartner, Forrester, IDC, RedMonk, and industry analysts.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setExpandedDeliverable('analyst_keynote')}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    <span>Expand Analyst Keynote</span>
                  </button>
                  <button
                    onClick={() => handleCopyText(`Title:
Engineering Stability: The Missing Layer in Modern Software Delivery

Opening:
Good afternoon.
For decades, engineering teams have operated without stability systems.
We’ve built DevOps, observability, CI/CD, Agile, and AI automation — but none of these address the core instability inside engineering teams.

Today, FlowForge introduces the Stability OS — the first platform designed to stabilize engineering teams automatically.

The Analyst Insight:
Analysts have long recognized gaps in engineering operations:
Delivery unpredictability
Burnout cycles
Critical path fragility
Volatility spikes
Slack shortages

FlowForge solves these problems with a new category:
Engineering Stability Platforms (ESP).

The Stability OS:
FlowForge provides:
Stability Score
Slack Liquidity
Volatility Index
Critical Path Forecast
Burnout Index
Autonomy Engine
Governance RulePack
Intelligence Layer
ESA Certification

This is the foundation of ESP.

The Market Shift:
Engineering volatility is rising globally.
Burnout is increasing.
Delivery pressure is intensifying.
AI is entering engineering operations.

ESP is the next evolution.

The Analyst Call to Action:
Engineering stability is now measurable, governable, and automatable.
FlowForge is defining the category — and analysts will shape how enterprises adopt it.

Thank you.`, "Analyst Keynote Script")}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy Script</span>
                  </button>
                </div>
              </div>

              {/* Keynote Content Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                {/* Left Column: Opening & The Analyst Insight */}
                <div className="space-y-5">
                  {/* Opening */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide flex items-center space-x-1.5">
                      <MicIcon className="w-3.5 h-3.5" />
                      <span>Opening Address</span>
                    </span>
                    <p className="text-slate-300 italic leading-relaxed border-l-2 border-amber-500 pl-3.5">
                      &quot;Good afternoon. For decades, engineering teams have operated without stability systems. We&apos;ve built DevOps, observability, CI/CD, Agile, and AI automation &mdash; but none of these address the core instability inside engineering teams. Today, FlowForge introduces the Stability OS &mdash; the first platform designed to stabilize engineering teams automatically.&quot;
                    </p>
                  </div>

                  {/* The Analyst Insight */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wide">
                      The Analyst Insight
                    </span>
                    <p className="text-xs text-slate-400">
                      Analysts have long recognized gaps in engineering operations:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { title: 'Delivery Unpredictability', desc: 'Slipped milestones, broken commitments, unpredictable velocity.' },
                        { title: 'Burnout Cycles', desc: 'Overburdened leads, key-person dependencies, silent team attrition.' },
                        { title: 'Critical Path Fragility', desc: 'Single-thread bottlenecks cascading through entire release DAGs.' },
                        { title: 'Volatility Spikes', desc: 'Wild swings in WIP and PR review delays causing batch-size explosions.' },
                        { title: 'Slack Shortages', desc: '100% capacity traps where zero reserve buffer ensures systematic paralysis.' }
                      ].map(item => (
                        <div key={item.title} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="font-bold text-rose-300 block">{item.title}</span>
                          <span className="text-[11px] text-slate-400">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                      FlowForge solves these problems with a new category: <span className="text-white font-bold underline">Engineering Stability Platforms (ESP)</span>.
                    </div>
                  </div>
                </div>

                {/* Right Column: The Stability OS & Market Shift & Call to Action */}
                <div className="space-y-5">
                  {/* The Stability OS */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                        The Stability OS &mdash; Foundation of ESP
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">9 Core Pillars</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { name: 'Stability Score', tag: 'Core Metric' },
                        { name: 'Slack Liquidity', tag: 'Buffer Reserve' },
                        { name: 'Volatility Index', tag: 'Variance Meter' },
                        { name: 'Critical Path Forecast', tag: 'DAG Engine' },
                        { name: 'Burnout Index', tag: 'Human Load' },
                        { name: 'Autonomy Engine', tag: 'Closed-Loop' },
                        { name: 'Governance RulePack', tag: 'Statutory Gates' },
                        { name: 'Intelligence Layer', tag: 'Predictive AI' },
                        { name: 'ESA Certification', tag: 'Audit Protocol' }
                      ].map(pillar => (
                        <div key={pillar.name} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                          <span className="font-bold text-white block text-[11px]">{pillar.name}</span>
                          <span className="text-[10px] text-amber-400/80 font-mono">{pillar.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Market Shift */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wide">
                      The Market Shift
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Engineering volatility is rising globally across cloud-native and monorepo architectures.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Burnout and turnover are increasing, costing enterprise organizations $250k+ per engineering departure.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Delivery pressure is intensifying under compressed competitive and market cycles.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>AI code-generation is entering operations, multiplying code volume without adding human review slack.</span>
                      </li>
                    </ul>
                    <p className="text-xs font-bold text-teal-300 pt-1">
                      &rarr; Engineering Stability Platforms (ESP) are the necessary next operational evolution.
                    </p>
                  </div>

                  {/* The Analyst Call to Action */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/40 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                      The Analyst Call to Action
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-relaxed">
                      &quot;Engineering stability is now measurable, governable, and automatable. FlowForge is defining the category &mdash; and analysts will shape how enterprises adopt it. Thank you.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* PILLAR 2: FLOWFORGE AUTONOMOUS ENGINEERING ROADMAP */}
            {/* =================================================================== */}
            <div id="autonomous-roadmap" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      2
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                      ⭐ 2. FLOWFORGE AUTONOMOUS ENGINEERING ROADMAP
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Autonomous Engineering: The Roadmap to Stability
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    A complete 24-month roadmap for autonomous engineering operations across 5 continuous evolutionary phases.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setExpandedDeliverable('roadmap')}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
                  >
                    <CompassIcon className="w-3.5 h-3.5" />
                    <span>Expand Roadmap Deep Dive</span>
                  </button>
                  <button
                    onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_AUTONOMOUS_ROADMAP, null, 2), "Autonomous Engineering Roadmap")}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy JSON</span>
                  </button>
                </div>
              </div>

              {/* 5 Phases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Phase 1 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Phase 1
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">M1 &ndash; M3</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Measurement</h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Baseline telemetry across human and pipeline signals.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>Stability Score</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>Slack Liquidity</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>Volatility Index</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>Critical Path mapping</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>Burnout Index</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    Output: 30-Day ESA Audit
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        Phase 2
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">M3 &ndash; M6</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Governance</h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Statutory CI/CD gating and threshold protection.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>RulePack v1</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>Slack floor enforcement</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>Volatility thresholds</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>Critical path protection</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>Burnout mitigation rules</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    Output: Zero-Tolerance Gates
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Phase 3
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">M6 &ndash; M12</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Autonomy</h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Self-healing load rebalancing without manager latency.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Load rebalancing</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Slack redistribution</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Burnout mitigation</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Critical path stabilization</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Delivery acceleration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    Output: 5 Closed-Loop Loops
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30">
                        Phase 4
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">M12 &ndash; M18</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Intelligence</h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Probabilistic Bayesian modeling and risk forecasting.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>Stability forecasting</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>Burnout curve prediction</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>Delivery risk forecasting</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>Fragility detection</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    Output: 90-Day Predictive Curves
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Phase 5
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">M18 &ndash; M24</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">Certification</h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Institutional board compliance &amp; maturity audit.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Stable</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Governed</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Autonomous</span>
                      </li>
                      <li className="flex items-center space-x-1.5 font-medium">
                        <CheckIcon className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Intelligent</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono">
                    Output: Level 4 Enterprise Certified
                  </div>
                </div>
              </div>

              {/* Outcome Banner */}
              <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-teal-200 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-teal-400 block mb-0.5">Target Business Outcome</span>
                  <p className="text-slate-300 font-medium">
                    &quot;Engineering teams operate with predictable delivery, reduced burnout, and autonomous stability.&quot;
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('economics_calculator')}
                  className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition whitespace-nowrap"
                >
                  Calculate Economic Savings &rarr;
                </button>
              </div>
            </div>

            {/* =================================================================== */}
            {/* PILLAR 3: FLOWFORGE GLOBAL PARTNER SUMMIT */}
            {/* =================================================================== */}
            <div id="partner-summit" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      3
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                      ⭐ 3. FLOWFORGE GLOBAL PARTNER SUMMIT
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white pt-1">
                    FlowForge Global Partner Summit 2027
                  </h2>
                  <p className="text-xs sm:text-sm text-teal-400 font-semibold">
                    Theme: &quot;Building the Engineering Stability Ecosystem&quot;
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setExpandedDeliverable('partner_summit')}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>View Summit Run-of-Show</span>
                  </button>
                  <button
                    onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_PARTNER_SUMMIT, null, 2), "Global Partner Summit 2027")}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy Agenda</span>
                  </button>
                </div>
              </div>

              {/* 5 Structural Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
                {/* 1. Keynote & Agenda Overview */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <span className="font-mono font-bold text-amber-400 uppercase tracking-wide block">
                    Keynote &amp; Agenda Overview
                  </span>
                  <ul className="space-y-1.5 text-slate-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">&bull;</span>
                      <span><strong>FlowForge Stability OS:</strong> The operating architecture demo and enterprise live benchmarks.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">&bull;</span>
                      <span><strong>ESP Category Launch:</strong> Formal unveiling of the Engineering Stability Platform category.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-400 font-bold">&bull;</span>
                      <span><strong>Partner Ecosystem Announcement:</strong> 4-tier co-selling structure and margin sharing.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Breakout Tracks */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <span className="font-mono font-bold text-teal-400 uppercase tracking-wide block">
                    5 Breakout Tracks
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    <li className="flex items-center space-x-1.5"><span className="text-teal-400">&bull;</span><span>Stability consulting</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-teal-400">&bull;</span><span>Governance implementation</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-teal-400">&bull;</span><span>Autonomy deployment</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-teal-400">&bull;</span><span>Intelligence forecasting</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-teal-400">&bull;</span><span>ESA certification delivery</span></li>
                  </ul>
                </div>

                {/* 3. Partner Workshops */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <span className="font-mono font-bold text-blue-400 uppercase tracking-wide block">
                    4 Partner Workshops
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    <li className="flex items-center space-x-1.5"><span className="text-blue-400">&bull;</span><span>How to deliver ESA</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-blue-400">&bull;</span><span>How to implement RulePack v1</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-blue-400">&bull;</span><span>How to activate autonomy</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-blue-400">&bull;</span><span>How to forecast stability</span></li>
                  </ul>
                </div>

                {/* 4. Partner Certification Exams */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-purple-400 uppercase tracking-wide">
                      Partner Certification Exams
                    </span>
                    <button
                      onClick={() => setViewMode('exam_simulator')}
                      className="text-[10px] text-purple-300 hover:underline font-bold"
                    >
                      Take Exam &rarr;
                    </button>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white">FlowForge Certified Stability Architect (FCSA)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white">FlowForge Certified Governance Specialist (FCGS)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white">FlowForge Certified Autonomy Engineer (FCAE)</span>
                    </div>
                  </div>
                </div>

                {/* 5. Partner Awards */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <span className="font-mono font-bold text-amber-400 uppercase tracking-wide block">
                    Annual Partner Awards
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white block">Partner of the Year</span>
                      <span className="text-[10px] text-slate-400">Highest co-sell ARR</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white block">Stability Innovator</span>
                      <span className="text-[10px] text-slate-400">Complex RulePack build</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white block">Governance Excellence</span>
                      <span className="text-[10px] text-slate-400">Zero breach audits</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="font-bold text-white block">Autonomy Pioneer</span>
                      <span className="text-[10px] text-slate-400">Scale rebalancing</span>
                    </div>
                  </div>
                </div>

                {/* 6. Summit Deliverables */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2.5">
                  <span className="font-mono font-bold text-emerald-400 uppercase tracking-wide block">
                    Summit Deliverables
                  </span>
                  <ul className="space-y-1 text-slate-300">
                    <li className="flex items-center space-x-1.5"><span className="text-emerald-400">&bull;</span><span>Partner program launch</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-emerald-400">&bull;</span><span>Certification program launch</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-emerald-400">&bull;</span><span>Global partner directory</span></li>
                    <li className="flex items-center space-x-1.5"><span className="text-emerald-400">&bull;</span><span>ESP category evangelism kit</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* PILLAR 4: FLOWFORGE CATEGORY BIBLE */}
            {/* =================================================================== */}
            <div id="category-bible" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      4
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                      ⭐ 4. FLOWFORGE CATEGORY BIBLE
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white pt-1">
                    The Engineering Stability Platform (ESP) Category Bible
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    The definitive guide to the Engineering Stability Platform category across 7 foundational chapters.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setExpandedDeliverable('category_bible')}
                    className="px-3.5 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-teal-500/20"
                  >
                    <BookOpenIcon className="w-3.5 h-3.5" />
                    <span>Read Full 7 Chapters</span>
                  </button>
                  <button
                    onClick={() => handleCopyText(JSON.stringify(FLOWFORGE_CATEGORY_BIBLE, null, 2), "ESP Category Bible")}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy Bible JSON</span>
                  </button>
                </div>
              </div>

              {/* 7 Chapters Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {/* Chapter 1 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400">Chapter 1</span>
                    <span className="text-slate-500 font-mono">Foundations</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">The Origin of ESP</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Engineering teams lacked stability systems. FlowForge introduced the Stability OS. ESP emerged as the new category.
                  </p>
                </div>

                {/* Chapter 2 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-400">Chapter 2</span>
                    <span className="text-slate-500 font-mono">Core Metrics</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">Core Concepts</h4>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {[
                      'Stability Score', 'Slack Liquidity', 'Volatility Index',
                      'Critical Path', 'Burnout Index', 'Autonomy',
                      'Governance', 'Intelligence', 'ESA'
                    ].map(concept => (
                      <span key={concept} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-teal-300 font-mono">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chapter 3 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400">Chapter 3</span>
                    <span className="text-slate-500 font-mono">5 Layers</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">ESP Architecture</h4>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li><strong>Layer 1 &mdash; Measurement:</strong> Telemetry, load, slack, volatility.</li>
                    <li><strong>Layer 2 &mdash; Governance:</strong> Rules, thresholds, protections.</li>
                    <li><strong>Layer 3 &mdash; Autonomy:</strong> Rebalancing, redistribution, mitigation.</li>
                    <li><strong>Layer 4 &mdash; Intelligence:</strong> Forecasting, prediction, risk.</li>
                    <li><strong>Layer 5 &mdash; Certification:</strong> Stability levels.</li>
                  </ul>
                </div>

                {/* Chapter 4 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-400">Chapter 4</span>
                    <span className="text-slate-500 font-mono">Maturity</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">ESP Maturity Model</h4>
                  <div className="space-y-1 pt-1">
                    {['Unstable', 'Measured', 'Governed', 'Autonomous', 'Intelligent'].map((stage, idx) => (
                      <div key={stage} className="flex items-center space-x-2 text-[11px]">
                        <span className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[9px]">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-slate-200">{stage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chapter 5 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400">Chapter 5</span>
                    <span className="text-slate-500 font-mono">Standards</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">ESP Standards</h4>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li>&bull; Slack floor enforcement</li>
                    <li>&bull; Volatility caps</li>
                    <li>&bull; Critical path protection</li>
                    <li>&bull; Burnout thresholds</li>
                    <li>&bull; Delivery risk limits</li>
                  </ul>
                </div>

                {/* Chapters 6 & 7 */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400">Chapters 6 &amp; 7</span>
                    <span className="text-slate-500 font-mono">Adoption &amp; Impact</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">Adoption Roadmap &amp; Impact</h4>
                  <div className="space-y-1.5 text-[11px] text-slate-300">
                    <p>
                      <strong>Chapter 6:</strong> Measurement &rarr; Governance &rarr; Autonomy &rarr; Intelligence &rarr; Certification.
                    </p>
                    <p className="border-t border-slate-800/80 pt-1.5 text-teal-300 font-medium">
                      <strong>Chapter 7 &mdash; ESP Global Impact:</strong> Engineering stability becomes a global standard across technology enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 1: 10 MASTER SECTIONS */}
        {/* ========================================================================= */}
        {viewMode === 'sections' && (
          <div className="space-y-6">
            {/* Section Selector Horizontal Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {TOTAL_BUSINESS_SECTIONS.map(s => {
                const isSelected = selectedSectionNumber === s.number;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSectionNumber(s.number)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                        SEC {s.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className={`text-xs font-semibold line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {s.title.replace('FlowForge ', '')}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Render Selected Section Content */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
              
              {/* SECTION 1: IDENTITY SYSTEM */}
              {selectedSectionNumber === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 1
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Identity System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Brand essence, category definition, narrative, manifesto, and visual tokens.</p>
                    </div>
                    <button
                      onClick={() => handleCopyText(JSON.stringify(IDENTITY_SYSTEM_DATA, null, 2), "Section 1 Data")}
                      className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Section 1</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Brand Essence & Category */}
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                        <SparklesIcon className="w-4 h-4 text-amber-400" />
                        <span>Brand Essence & Category</span>
                      </h3>
                      <div>
                        <p className="text-xs text-slate-400">Brand Essence</p>
                        <p className="text-base font-bold text-white mt-0.5">{IDENTITY_SYSTEM_DATA.essence}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Category Definition</p>
                        <p className="text-base font-bold text-teal-400 mt-0.5">{IDENTITY_SYSTEM_DATA.category}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Brand Voice</p>
                        <p className="text-sm font-semibold text-slate-200 mt-0.5">
                          {IDENTITY_SYSTEM_DATA.brandVoice.archetype} &bull; <span className="text-amber-300">{IDENTITY_SYSTEM_DATA.brandVoice.tone}</span>
                        </p>
                      </div>
                    </div>

                    {/* Visual System Colors */}
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                        Brand Visual Tokens
                      </h3>
                      <div className="space-y-2.5">
                        {IDENTITY_SYSTEM_DATA.visualSystem.primaryColors.map(c => (
                          <div key={c.name} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-900 border border-slate-800">
                            <div className="w-9 h-9 rounded-lg border border-slate-700 shadow flex items-center justify-center font-mono text-[10px] font-bold" style={{ backgroundColor: c.hex }}>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-white">{c.name}</p>
                                <span className="font-mono text-xs text-slate-400">{c.hex}</span>
                              </div>
                              <p className="text-[11px] text-slate-400 truncate">{c.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Category Manifesto */}
                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3">
                      The Category Manifesto
                    </h3>
                    <div className="space-y-2 border-l-2 border-amber-500/80 pl-4">
                      {IDENTITY_SYSTEM_DATA.manifesto.map((line, idx) => (
                        <p key={idx} className={`text-sm ${idx === IDENTITY_SYSTEM_DATA.manifesto.length - 1 ? 'font-bold text-amber-300 pt-2 text-base' : 'text-slate-300'}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 2: PRODUCT SYSTEM */}
              {selectedSectionNumber === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 2
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Product System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Core telemetry modules, closed-loop autonomy protocols, and Governance RulePack v1.</p>
                    </div>
                    <button
                      onClick={() => handleCopyText(JSON.stringify(PRODUCT_SYSTEM_DATA, null, 2), "Section 2 Data")}
                      className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Section 2</span>
                    </button>
                  </div>

                  {/* Core Modules Grid */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">9 Core Sovereign Modules</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {PRODUCT_SYSTEM_DATA.coreModules.map(m => (
                        <div key={m.id} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-white">{m.name}</h4>
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              {m.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                          <div className="p-2 rounded bg-slate-900 border border-slate-800/80 font-mono text-[10px] text-amber-300/90 truncate">
                            {m.formula}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Autonomy Protocols */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-2">
                      <CpuIcon className="w-4 h-4 text-amber-400" />
                      <span>5 Closed-Loop Autonomy Protocols</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {PRODUCT_SYSTEM_DATA.autonomyProtocols.map(p => (
                        <div key={p.name} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                            <h4 className="text-xs font-bold text-white">{p.name}</h4>
                          </div>
                          <p className="text-[11px] text-amber-300/80 font-mono">Trigger: {p.trigger}</p>
                          <p className="text-xs text-slate-300 leading-relaxed">Action: {p.action}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RulePack v1 */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center space-x-2">
                      <ShieldCheckIcon className="w-4 h-4 text-teal-400" />
                      <span>Governance RulePack v1 (Statutory CI/CD Policies)</span>
                    </h3>
                    <div className="space-y-2">
                      {PRODUCT_SYSTEM_DATA.governanceRulePack.map(r => (
                        <div key={r.rule} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
                          <div>
                            <span className="font-bold text-white">{r.rule}</span>
                            <span className="ml-2 font-mono text-amber-300 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                              {r.parameter}
                            </span>
                          </div>
                          <p className="text-slate-400">{r.enforcement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 3: BUSINESS SYSTEM */}
              {selectedSectionNumber === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 3
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Business System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Pricing tiers, enterprise contracts (MSA), sales playbook, onboarding, and FCSA certification exam.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setViewMode('contract_generator')}
                        className="text-xs px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold"
                      >
                        Open MSA Generator
                      </button>
                      <button
                        onClick={() => setViewMode('exam_simulator')}
                        className="text-xs px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold"
                      >
                        Launch 40-Q Exam
                      </button>
                    </div>
                  </div>

                  {/* Pricing Tiers Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {BUSINESS_SYSTEM_DATA.pricingTiers.map(t => (
                      <div key={t.id} className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-400">{t.name}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300">
                              {t.badge}
                            </span>
                          </div>
                          <div>
                            <span className="text-2xl font-black text-white">{t.price}</span>
                            <span className="text-xs text-slate-400 ml-1">/ {t.period}</span>
                          </div>
                          <p className="text-xs text-slate-400">{t.target}</p>
                          <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                            {t.features.map((f, i) => (
                              <li key={i} className="text-xs text-slate-300 flex items-start space-x-1.5">
                                <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => setViewMode('website_simulator')}
                          className="w-full py-2 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                        >
                          {t.cta}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Sales Playbook & Onboarding Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        6-Stage Enterprise Sales Cycle
                      </h3>
                      <div className="space-y-2.5">
                        {BUSINESS_SYSTEM_DATA.salesPlaybook.stages.map(s => (
                          <div key={s.stage} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs">
                            <div className="flex items-center justify-between font-bold text-white mb-1">
                              <span>{s.stage}</span>
                            </div>
                            <p className="text-slate-400 mb-1">Goal: {s.goal}</p>
                            <p className="font-mono text-[11px] text-amber-300/90 italic">Script: {s.script}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                        4-Week Onboarding Curriculum
                      </h3>
                      <div className="space-y-3">
                        {BUSINESS_SYSTEM_DATA.onboardingHandbook.map(w => (
                          <div key={w.week} className="p-3 rounded bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-teal-300 font-mono">{w.week}: {w.phase}</span>
                              <CheckCircle2Icon className="w-3.5 h-3.5 text-teal-400" />
                            </div>
                            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1">
                              {w.actions.map((act, i) => (
                                <li key={i} className="text-slate-400">{act}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 4: MARKET SYSTEM */}
              {selectedSectionNumber === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 4
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Market System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Global marketing campaign, LinkedIn series, press kit, and analyst keynote narrative.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setExpandedDeliverable('analyst_keynote')}
                        className="text-xs px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center space-x-1"
                      >
                        <MicIcon className="w-3.5 h-3.5" />
                        <span>Open Analyst Keynote</span>
                      </button>
                      {onNavigateToPart6 && (
                        <button
                          onClick={() => onNavigateToPart6()}
                          className="text-xs px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold"
                        >
                          Part VI View &rarr;
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Campaign Card */}
                  <div className="bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-800/40 rounded-xl p-6 space-y-3">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Global Marketing Campaign
                    </span>
                    <h3 className="text-2xl font-black text-white">Stability Starts Here</h3>
                    <p className="text-base text-amber-400 font-semibold">Engineering stability in 30 days.</p>
                    <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                      Positioning FlowForge as the world&apos;s first Stability OS. Targeted at VP Engineering and CTOs experiencing critical release friction, attrition, and queue volatility.
                    </p>
                  </div>

                  {/* Asset Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <MegaphoneIcon className="w-5 h-5 text-amber-400" />
                      <h4 className="text-xs font-bold text-white">LinkedIn Executive Series</h4>
                      <p className="text-xs text-slate-400">
                        10-part thought leadership sequence unpacking queuing theory, the math of 15% slack floors, and why 100% capacity guarantees release deadlock.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <LayersIcon className="w-5 h-5 text-teal-400" />
                      <h4 className="text-xs font-bold text-white">Slack Liquidity Infographic</h4>
                      <p className="text-xs text-slate-400">
                        Visualizing highway traffic dynamics applied to software sprints: showing how liquid reserve buffer protects critical path delivery.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <FileTextIcon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-xs font-bold text-white">Global Press Kit</h4>
                      <p className="text-xs text-slate-400">
                        Founder narrative, category declaration for Engineering Stability Platforms, product screenshot bundle, and sample board-level ESA report.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 5: PARTNER SYSTEM */}
              {selectedSectionNumber === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 5
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Partner System (FPN)</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">FlowForge Partner Network, certification exams, and Global Partner Summit 2027.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setExpandedDeliverable('partner_summit')}
                        className="text-xs px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center space-x-1"
                      >
                        <CalendarIcon className="w-3.5 h-3.5" />
                        <span>Open Partner Summit 2027</span>
                      </button>
                      {onNavigateToPart6 && (
                        <button
                          onClick={() => onNavigateToPart6()}
                          className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold"
                        >
                          Part VI Summit &rarr;
                        </button>
                      )}
                    </div>
                  </div>

                  {/* 4 Tiers */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { tier: 'Registered Partner', req: '1 Certified Architect', margin: '15% Co-Sell', focus: 'Boutique DevOps consultancies starting their ESP practice' },
                      { tier: 'Certified Partner', req: '3 Certified Architects', margin: '20% Co-Sell', focus: 'Regional digital transformation agencies delivering ESA audits' },
                      { tier: 'Advanced Partner', req: '10 Certified Architects', margin: '25% Co-Sell + MDF', focus: 'National system integrators with dedicated stability practices' },
                      { tier: 'Elite Global Partner', req: '25+ Certified Architects', margin: '30% Co-Sell + Exec Sponsor', focus: 'Global Systems Integrators (Accenture, Deloitte, Slalom)' }
                    ].map(p => (
                      <div key={p.tier} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-teal-400">{p.tier}</span>
                        <p className="text-base font-bold text-white">{p.margin}</p>
                        <p className="text-xs text-amber-300/80 font-mono">Req: {p.req}</p>
                        <p className="text-xs text-slate-400 leading-relaxed">{p.focus}</p>
                      </div>
                    ))}
                  </div>

                  {/* Partner Certifications */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      3 Sovereign Partner Certifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <span className="font-bold text-white">FCSA</span>
                        <p className="text-slate-300 font-semibold">FlowForge Certified Stability Architect</p>
                        <p className="text-slate-400">Covers Stability Core, Slack Liquidity, and ESA audit delivery.</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <span className="font-bold text-white">FCGS</span>
                        <p className="text-slate-300 font-semibold">FlowForge Certified Governance Specialist</p>
                        <p className="text-slate-400">Covers RulePack v1 authoring and CI/CD gate integration.</p>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <span className="font-bold text-white">FCAE</span>
                        <p className="text-slate-300 font-semibold">FlowForge Certified Autonomy Engineer</p>
                        <p className="text-slate-400">Covers closed-loop autonomy rebalancing and predictive intelligence.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 6: EXECUTIVE SYSTEM */}
              {selectedSectionNumber === 6 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 6
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Executive System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Executive Keynote, Analyst Briefing, Investor One-Pager, and the 16-Slide Enterprise Pitch Deck.</p>
                    </div>
                    <button
                      onClick={() => setViewMode('pitch_deck')}
                      className="text-xs px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center space-x-1.5"
                    >
                      <PresentationIcon className="w-3.5 h-3.5" />
                      <span>Launch 16-Slide Pitch Deck</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Investor One-Pager Teardown */}
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Investor One-Pager Teardown
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Problem:</span> 83% of software engineers suffer from chronic burnout; 42% of enterprise delivery dates slip unexpectedly due to zero slack liquidity.
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Solution:</span> The Stability OS — measuring, governing, and autonomously stabilizing engineering operations.
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Business Model:</span> Enterprise SaaS ($1,500 - $6,000/mo) with 138% Net Revenue Retention and 30-day viral ESA pilot adoption.
                        </div>
                        <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Market Size:</span> $28 Billion global market across DevOps, Observability, and Software Engineering Governance.
                        </div>
                      </div>
                    </div>

                    {/* Executive Keynote Arc */}
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                        Executive Keynote Arc
                      </h3>
                      <div className="space-y-2 text-xs text-slate-300">
                        <p className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Act I &mdash; The Illusion of Velocity:</span> Why spending millions on agile boards and CI runners hasn&apos;t stopped software releases from slipping.
                        </p>
                        <p className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Act II &mdash; The Laws of Queuing:</span> How running teams at 100% capacity creates exponential queue wait times and engineer exhaustion.
                        </p>
                        <p className="p-2.5 rounded bg-slate-900 border border-slate-800">
                          <span className="font-bold text-white">Act III &mdash; The Sovereign Stability OS:</span> Introducing closed-loop autonomy to guarantee on-time software delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 7: EVENT SYSTEM */}
              {selectedSectionNumber === 7 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 7
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Event System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">FlowForge Stability Summit 2027 event plan and global category launch methodology.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <CalendarIcon className="w-5 h-5 text-amber-400" />
                      <h4 className="text-xs font-bold text-white">Stability Summit 2027</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Flagship annual gathering of 1,200+ CTOs, VPs of Engineering, and systems architects in San Francisco. Keynotes, workshops, and partner awards.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <GraduationCapIcon className="w-5 h-5 text-teal-400" />
                      <h4 className="text-xs font-bold text-white">Hands-On Workshops</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Deep technical sessions on tailoring RulePack v1, deploying automated load rebalancing, and passing the FCSA certification exam live on-site.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <AwardIcon className="w-5 h-5 text-blue-400" />
                      <h4 className="text-xs font-bold text-white">Category Launch Cadence</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        4-stage global rollout: Pre-launch analyst briefings &rarr; Public Keynote launch &rarr; Partner expansion &rarr; Institutional standard.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 8: WEBSITE SYSTEM */}
              {selectedSectionNumber === 8 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 8
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Website System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Full 7-page enterprise website architecture (Home, Product, Platform, Pricing, ESA, About, Contact).</p>
                    </div>
                    <button
                      onClick={() => setViewMode('website_simulator')}
                      className="text-xs px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold flex items-center space-x-1.5"
                    >
                      <GlobeIcon className="w-3.5 h-3.5" />
                      <span>Launch Interactive Website Simulator</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['home', 'product', 'platform', 'pricing', 'esa', 'about', 'contact'].map(p => (
                      <div key={p} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase text-amber-400">/{p}</span>
                          <span className="text-[10px] text-slate-400 font-mono">Page</span>
                        </div>
                        <p className="text-xs font-bold text-white">
                          {p === 'home' && 'Homepage & Hero CTA'}
                          {p === 'product' && 'Product Suite & Telemetry'}
                          {p === 'platform' && 'Architecture & RulePack'}
                          {p === 'pricing' && 'Pricing Tiers ($0 - $6k)'}
                          {p === 'esa' && '30-Day Audit & Scorecard'}
                          {p === 'about' && 'Mission & Category Manifesto'}
                          {p === 'contact' && 'Enterprise Pilot Scheduling'}
                        </p>
                        <button
                          onClick={() => {
                            setWebsiteActivePage(p as any);
                            setViewMode('website_simulator');
                          }}
                          className="text-xs text-teal-400 hover:text-teal-300 flex items-center space-x-1 pt-1"
                        >
                          <span>Open Live Preview &rarr;</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION 9: STRATEGIC SYSTEM */}
              {selectedSectionNumber === 9 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 9
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Strategic System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Autonomous Engineering Roadmap, Engineering Economics Whitepaper, and the ESP Category Bible.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setExpandedDeliverable('roadmap')}
                        className="text-xs px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg font-bold flex items-center space-x-1"
                      >
                        <CompassIcon className="w-3.5 h-3.5" />
                        <span>Autonomous Roadmap</span>
                      </button>
                      <button
                        onClick={() => setExpandedDeliverable('category_bible')}
                        className="text-xs px-3 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg font-bold flex items-center space-x-1"
                      >
                        <FileTextIcon className="w-3.5 h-3.5" />
                        <span>Category Bible</span>
                      </button>
                      <button
                        onClick={() => setViewMode('economics_calculator')}
                        className="text-xs px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold flex items-center space-x-1.5"
                      >
                        <CalculatorIcon className="w-3.5 h-3.5" />
                        <span>ROI Calculator</span>
                      </button>
                    </div>
                  </div>

                  {/* Roadmap 5 Phases */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      5-Phase Autonomous Engineering Roadmap
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                      {[
                        { phase: 'Phase 1', time: 'Months 1–3', name: 'Measurement', desc: 'Stability Score, Slack Liquidity, Volatility Index, Burnout mapping.' },
                        { phase: 'Phase 2', time: 'Months 3–6', name: 'Governance', desc: 'RulePack v1, 15% slack floor, volatility caps, critical path defense.' },
                        { phase: 'Phase 3', time: 'Months 6–12', name: 'Autonomy', desc: 'Load rebalancing, PR redistribution, burnout mitigation protocols.' },
                        { phase: 'Phase 4', time: 'Months 12–18', name: 'Intelligence', desc: '90-day Bayesian forecasting, burnout prediction, delivery risk curves.' },
                        { phase: 'Phase 5', time: 'Months 18–24', name: 'Certification', desc: 'Enterprise-wide Institutional ESA certification tiers.' }
                      ].map(r => (
                        <div key={r.phase} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                          <span className="font-mono text-amber-300 font-bold">{r.phase}</span>
                          <p className="text-[10px] text-slate-400">{r.time}</p>
                          <p className="font-bold text-white">{r.name}</p>
                          <p className="text-[11px] text-slate-400">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Bible 7 Chapters */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                      The Engineering Stability Platform (ESP) Category Bible &mdash; 7 Chapters
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {[
                        'Chapter 1: The Origin of ESP — Why existing DevOps and APM left the human system unaddressed.',
                        'Chapter 2: Core Concepts — Mathematical formulations of Stability Score, Slack Liquidity & Volatility.',
                        'Chapter 3: ESP Architecture — The 5 sovereign layers from telemetry ingestion to institutional certification.',
                        'Chapter 4: Maturity Model — 5-stage evolutionary benchmark from Unstable to Intelligent.',
                        'Chapter 5: Statutory Standards — Formulations for slack floors, author monopoly bounds & review SLAs.',
                        'Chapter 6: Enterprise Adoption — 30-day pilot to global company-wide institutional governance.',
                        'Chapter 7: Global Economic Impact — Elevating engineering stability into a boardroom fiduciary standard.'
                      ].map((ch, idx) => (
                        <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                          {ch}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 10: OPERATIONS SYSTEM */}
              {selectedSectionNumber === 10 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          SECTION 10
                        </span>
                        <h2 className="text-xl font-bold text-white">FlowForge Operations System</h2>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">Internal operations, weekly stability review cadence, internal governance, and predictive intelligence.</p>
                    </div>
                    <button
                      onClick={() => handleCopyText(JSON.stringify(OPERATIONS_SYSTEM_DATA, null, 2), "Section 10 Data")}
                      className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Section 10</span>
                    </button>
                  </div>

                  {/* Internal Cadence */}
                  <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Internal Operating Cadence (Mon / Wed / Fri)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {OPERATIONS_SYSTEM_DATA.internalCadence.map(c => (
                        <div key={c.day} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {c.day}
                          </span>
                          <h4 className="text-xs font-bold text-white">{c.name}</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">{c.focus}</p>
                          <p className="text-[11px] font-mono text-teal-300 pt-1 border-t border-slate-800">
                            Output: {c.deliverable}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Governance & Intelligence Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400">
                        Internal Governance Guardrails
                      </h3>
                      <div className="space-y-2.5">
                        {OPERATIONS_SYSTEM_DATA.internalGovernance.map(g => (
                          <div key={g.title} className="p-3 rounded bg-slate-900 border border-slate-800 text-xs space-y-1">
                            <span className="font-bold text-white">{g.title}</span>
                            <p className="text-slate-400 leading-relaxed">{g.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Internal Intelligence Engine
                      </h3>
                      <div className="space-y-2.5">
                        {OPERATIONS_SYSTEM_DATA.internalIntelligence.map(i => (
                          <div key={i.title} className="p-3 rounded bg-slate-900 border border-slate-800 text-xs space-y-1">
                            <span className="font-bold text-white">{i.title}</span>
                            <p className="text-slate-400 leading-relaxed">{i.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: ALL 20 DELIVERABLES CHECKLIST */}
        {/* ========================================================================= */}
        {viewMode === 'checklist' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">All 20 FlowForge Master Deliverables</h2>
                <p className="text-xs text-slate-400 mt-0.5">Comprehensive audit and status tracking across every requested business asset.</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  20 / 20 Fully Specified
                </span>
                <button
                  onClick={() => handleCopyText(JSON.stringify(MASTER_CHECKLIST, null, 2), "Deliverables Checklist")}
                  className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy List</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredChecklist.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 rounded-xl p-5 flex flex-col justify-between space-y-3 transition"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-amber-400 border border-slate-800">
                        SEC {item.sectionNumber} &bull; {item.category}
                      </span>
                      <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold mb-1">Key Components:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.keyOutputs.map((out, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                          {out}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: 16-SLIDE PITCH DECK VIEWER */}
        {/* ========================================================================= */}
        {viewMode === 'pitch_deck' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    SLIDE {currentSlideIndex + 1} OF {PITCH_DECK_SLIDES.length}
                  </span>
                  <h2 className="text-xl font-bold text-white">FlowForge 16-Slide Enterprise Pitch Deck</h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Interactive institutional pitch deck designed for Series A investors and Fortune 500 boards.</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowPresenterNotes(!showPresenterNotes)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    showPresenterNotes ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {showPresenterNotes ? 'Hide Presenter Notes' : 'Show Presenter Notes'}
                </button>
                <button
                  onClick={() => handleCopyText(JSON.stringify(PITCH_DECK_SLIDES[currentSlideIndex], null, 2), "Current Slide")}
                  className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>Copy Slide</span>
                </button>
              </div>
            </div>

            {/* Slide Stage Canvas */}
            <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border-2 border-slate-800 shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Slide Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 text-xs">
                    FF
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                    {PITCH_DECK_SLIDES[currentSlideIndex].category}
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  Slide {PITCH_DECK_SLIDES[currentSlideIndex].slideNumber} / 16
                </span>
              </div>

              {/* Slide Body */}
              <div className="space-y-4 my-auto">
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  {PITCH_DECK_SLIDES[currentSlideIndex].title}
                </h3>
                <p className="text-base sm:text-lg text-teal-400 font-semibold">
                  {PITCH_DECK_SLIDES[currentSlideIndex].subtitle}
                </p>

                <ul className="space-y-3 pt-2">
                  {PITCH_DECK_SLIDES[currentSlideIndex].points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-sm sm:text-base text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Slide Footer Callout */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-bold text-amber-300">
                  {PITCH_DECK_SLIDES[currentSlideIndex].callout}
                </span>
                <span className="text-slate-500 font-mono">FlowForge &bull; ESP Category</span>
              </div>
            </div>

            {/* Presenter Notes Box */}
            {showPresenterNotes && (
              <div className="max-w-5xl mx-auto p-4 rounded-xl bg-slate-900 border border-amber-500/30 text-xs space-y-1">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  Presenter Executive Talking Track:
                </span>
                <p className="text-slate-300 italic leading-relaxed">
                  &ldquo;{PITCH_DECK_SLIDES[currentSlideIndex].presenterNote}&rdquo;
                </p>
              </div>
            )}

            {/* Slide Navigation Controls */}
            <div className="max-w-5xl mx-auto flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                disabled={currentSlideIndex === 0}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 text-xs font-semibold text-white border border-slate-800 transition flex items-center space-x-1.5"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span>Previous Slide</span>
              </button>

              {/* Slide Dots */}
              <div className="flex items-center space-x-1">
                {PITCH_DECK_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition ${
                      currentSlideIndex === idx ? 'bg-amber-400 w-5' : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlideIndex(prev => Math.min(PITCH_DECK_SLIDES.length - 1, prev + 1))}
                disabled={currentSlideIndex === PITCH_DECK_SLIDES.length - 1}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-xs font-semibold text-white transition flex items-center space-x-1.5"
              >
                <span>Next Slide</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 4: FCSA 40-QUESTION EXAM SIMULATOR */}
        {/* ========================================================================= */}
        {viewMode === 'exam_simulator' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    FCSA EXAM
                  </span>
                  <h2 className="text-xl font-bold text-white">FlowForge Certified Stability Architect (FCSA)</h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">40 Psychometrically calibrated examination questions. Passing score: 80% (32/40).</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Answered: <span className="text-white font-bold">{totalAnswered}</span> / 40</p>
                  {examSubmitted && (
                    <p className={`text-xs font-bold ${isPassing ? 'text-emerald-400' : 'text-rose-400'}`}>
                      Score: {scorePct}% ({correctCount}/40) &bull; {isPassing ? 'PASSED' : 'RETAKE REQUIRED'}
                    </p>
                  )}
                </div>

                {!examSubmitted ? (
                  <button
                    onClick={() => setExamSubmitted(true)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/20 transition"
                  >
                    Submit & Grade Exam
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setExamSubmitted(false);
                      setExamAnswers({});
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition"
                  >
                    Reset Exam
                  </button>
                )}
              </div>
            </div>

            {/* Passing Certificate Banner if Passed */}
            {examSubmitted && isPassing && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-2 border-emerald-500 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg">
                    <AwardIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Official Certification Awarded
                    </span>
                    <h3 className="text-lg font-black text-white">FlowForge Certified Stability Architect (FCSA)</h3>
                    <p className="text-xs text-slate-300">
                      Score: <span className="font-bold text-emerald-400">{scorePct}%</span> &bull; Status: Active Sovereign Architect &bull; ID: FCSA-2027-{Math.floor(100000 + Math.random() * 900000)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl shadow transition"
                >
                  Print Official Credential
                </button>
              </div>
            )}

            {/* Domain Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-semibold text-xs">Domain Filter:</span>
              {['All', 'Stability Core', 'Governance', 'Autonomy', 'Intelligence', 'ESA Audit'].map(dom => (
                <button
                  key={dom}
                  onClick={() => setExamDomainFilter(dom)}
                  className={`px-3 py-1 rounded-lg border transition whitespace-nowrap ${
                    examDomainFilter === dom
                      ? 'bg-teal-500/20 text-teal-300 border-teal-500/50 font-bold'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

            {/* 40 Questions List */}
            <div className="space-y-4">
              {FCSA_EXAM_QUESTIONS
                .filter(q => examDomainFilter === 'All' || q.domain === examDomainFilter)
                .map(q => {
                  const selectedAnswer = examAnswers[q.id];
                  const isCorrect = selectedAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-xl border transition ${
                        examSubmitted
                          ? isCorrect
                            ? 'bg-emerald-950/20 border-emerald-800/60'
                            : 'bg-rose-950/20 border-rose-800/60'
                          : 'bg-slate-900/60 border-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 rounded-md bg-slate-800 font-mono text-xs font-bold text-amber-400 flex items-center justify-center">
                            {q.id}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                            {q.domain}
                          </span>
                        </div>
                        {examSubmitted && (
                          <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isCorrect ? 'Correct (+1)' : 'Incorrect (0)'}
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-white mb-3">
                        {q.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedAnswer === optIdx;
                          const isOptionCorrect = optIdx === q.correctIndex;

                          let optionStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300';
                          if (examSubmitted) {
                            if (isOptionCorrect) {
                              optionStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 font-semibold';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              optionStyle = 'bg-rose-950/50 border-rose-500 text-rose-200 line-through';
                            }
                          } else if (isOptionSelected) {
                            optionStyle = 'bg-teal-950/50 border-teal-500 text-teal-200 font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={examSubmitted}
                              onClick={() => {
                                setExamAnswers(prev => ({ ...prev, [q.id]: optIdx }));
                              }}
                              className={`p-2.5 rounded-lg border text-left text-xs transition flex items-center space-x-2 ${optionStyle}`}
                            >
                              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-mono shrink-0">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {examSubmitted && (
                        <div className="mt-3 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                          <span className="font-bold text-amber-400">Official Rationale:</span>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 5: MULTI-PAGE WEBSITE SIMULATOR */}
        {/* ========================================================================= */}
        {viewMode === 'website_simulator' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    INTERACTIVE BROWSER
                  </span>
                  <h2 className="text-xl font-bold text-white">FlowForge Multi-Page Website Simulator</h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Explore the production multi-page digital presence of FlowForge.</p>
              </div>

              {/* Sub-Page Navigation Bar */}
              <div className="flex items-center space-x-1 overflow-x-auto text-xs font-semibold bg-slate-900 p-1 rounded-xl border border-slate-800">
                {(['home', 'product', 'platform', 'pricing', 'esa', 'about', 'contact'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setWebsiteActivePage(p)}
                    className={`px-3 py-1.5 rounded-lg uppercase tracking-wider text-[11px] transition ${
                      websiteActivePage === p
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Browser Window Chrome */}
            <div className="rounded-2xl border-2 border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
              {/* Window Title Bar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-3 font-mono text-xs text-slate-400">
                    https://flowforge.internal/{websiteActivePage}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">SSL 256-bit Certified</span>
              </div>

              {/* Browser Viewport */}
              <div className="p-8 lg:p-12 space-y-8">
                {/* PAGE: HOME */}
                {websiteActivePage === 'home' && (
                  <div className="space-y-10">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        The Stability OS for Engineering Teams
                      </span>
                      <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                        {WEBSITE_PAGES_DATA.home.heroHeading}
                      </h1>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {WEBSITE_PAGES_DATA.home.heroSubheading}
                      </p>
                      <div className="flex items-center justify-center space-x-3 pt-2">
                        <button
                          onClick={() => setWebsiteActivePage('contact')}
                          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition"
                        >
                          {WEBSITE_PAGES_DATA.home.ctaPrimary}
                        </button>
                        <button
                          onClick={() => setWebsiteActivePage('product')}
                          className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition"
                        >
                          {WEBSITE_PAGES_DATA.home.ctaSecondary}
                        </button>
                      </div>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800">
                      {WEBSITE_PAGES_DATA.home.metrics.map(m => (
                        <div key={m.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                          <p className="text-2xl font-black text-amber-400">{m.val}</p>
                          <p className="text-xs text-slate-400 mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGE: PRODUCT */}
                {websiteActivePage === 'product' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.product.title}</h2>
                      <p className="text-sm text-slate-400">{WEBSITE_PAGES_DATA.product.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {WEBSITE_PAGES_DATA.product.modules.map(mod => (
                        <div key={mod.name} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                          <span className="text-xs font-bold text-teal-400">{mod.name}</span>
                          <p className="text-xs text-slate-300">{mod.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGE: PLATFORM */}
                {websiteActivePage === 'platform' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.platform.title}</h2>
                      <p className="text-sm text-slate-400">{WEBSITE_PAGES_DATA.platform.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {WEBSITE_PAGES_DATA.platform.pillars.map(pil => (
                        <div key={pil.title} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="text-sm font-bold text-amber-400">{pil.title}</span>
                          <p className="text-xs text-slate-300 leading-relaxed">{pil.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGE: PRICING */}
                {websiteActivePage === 'pricing' && (
                  <div className="space-y-6">
                    <div className="text-center max-w-xl mx-auto space-y-1">
                      <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.pricing.title}</h2>
                      <p className="text-xs text-slate-400">{WEBSITE_PAGES_DATA.pricing.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {BUSINESS_SYSTEM_DATA.pricingTiers.map(t => (
                        <div key={t.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
                          <div>
                            <span className="text-xs font-bold text-amber-400">{t.name}</span>
                            <p className="text-xl font-black text-white mt-1">{t.price} <span className="text-xs text-slate-400 font-normal">/ {t.period}</span></p>
                            <p className="text-xs text-slate-400 mt-1">{t.target}</p>
                          </div>
                          <button
                            onClick={() => setWebsiteActivePage('contact')}
                            className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold"
                          >
                            Select Tier
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGE: ESA */}
                {websiteActivePage === 'esa' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.esa.title}</h2>
                      <p className="text-sm text-slate-400">{WEBSITE_PAGES_DATA.esa.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {WEBSITE_PAGES_DATA.esa.phases.map((ph, i) => (
                        <div key={ph.name} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-mono text-xs font-bold flex items-center justify-center">
                            {i + 1}
                          </span>
                          <p className="text-xs font-bold text-white">{ph.name}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{ph.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PAGE: ABOUT */}
                {websiteActivePage === 'about' && (
                  <div className="max-w-3xl space-y-4">
                    <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.about.title}</h2>
                    <p className="text-base text-amber-400 font-semibold">{WEBSITE_PAGES_DATA.about.mission}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{WEBSITE_PAGES_DATA.about.manifestoExcerpt}</p>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 italic text-xs text-slate-300">
                      &ldquo;{WEBSITE_PAGES_DATA.about.leadershipQuote}&rdquo;
                    </div>
                  </div>
                )}

                {/* PAGE: CONTACT & PILOT SIGNUP */}
                {websiteActivePage === 'contact' && (
                  <div className="max-w-xl mx-auto space-y-6">
                    <div>
                      <h2 className="text-2xl font-black text-white">{WEBSITE_PAGES_DATA.contact.title}</h2>
                      <p className="text-xs text-slate-400">{WEBSITE_PAGES_DATA.contact.subtitle}</p>
                    </div>

                    {!pilotFormSubmitted ? (
                      <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                          <input type="text" defaultValue="Acme Corporation" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                          <input type="email" defaultValue="engineering-lead@acme.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">Engineering Headcount</label>
                          <select className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white">
                            <option>10 - 50 Engineers</option>
                            <option>50 - 250 Engineers</option>
                            <option>250+ Enterprise Engineers</option>
                          </select>
                        </div>
                        <button
                          onClick={() => setPilotFormSubmitted(true)}
                          className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                        >
                          Request Instant 30-Day Free Pilot
                        </button>
                      </div>
                    ) : (
                      <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500 text-center space-y-2">
                        <CheckCircle2Icon className="w-10 h-10 text-emerald-400 mx-auto" />
                        <h3 className="text-sm font-bold text-white">Pilot Ingestion Link Dispatched!</h3>
                        <p className="text-xs text-slate-300">Check your inbox for 1-click GitHub/GitLab read-only connection credentials.</p>
                        <button
                          onClick={() => setPilotFormSubmitted(false)}
                          className="text-xs text-emerald-400 underline pt-2"
                        >
                          Submit Another Request
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 6: ENTERPRISE CONTRACT (MSA) GENERATOR */}
        {/* ========================================================================= */}
        {viewMode === 'contract_generator' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    LEGAL MSA
                  </span>
                  <h2 className="text-xl font-bold text-white">FlowForge Enterprise Master Services Agreement (MSA)</h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Customizable institutional contract with statutory SLA and strict zero-code-access data privacy clauses.</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center space-x-1"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print Legal MSA</span>
                </button>
              </div>
            </div>

            {/* Customization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Customer Legal Entity</label>
                <input
                  type="text"
                  value={contractCustomerName}
                  onChange={e => setContractCustomerName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Contract Tier & Fees</label>
                <select
                  value={contractTier}
                  onChange={e => setContractTier(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                >
                  <option>Stability Core ($1,500/mo)</option>
                  <option>Governance + Autonomy ($3,500/mo)</option>
                  <option>Full Intelligence ($6,000/mo)</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Effective Commencement Date</label>
                <input
                  type="date"
                  value={contractEffectiveDate}
                  onChange={e => setContractEffectiveDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white"
                />
              </div>
            </div>

            {/* Printable Formal Agreement View */}
            <div className="p-8 rounded-2xl bg-white text-slate-950 font-serif space-y-6 shadow-2xl">
              <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight">MASTER SERVICES AGREEMENT</h3>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">Agreement Reference: FF-MSA-2027-{contractCustomerName.slice(0, 4).toUpperCase()}</p>
                </div>
                <div className="text-right text-xs font-sans">
                  <p className="font-bold">Effective Date: {contractEffectiveDate}</p>
                  <p className="text-slate-600">Selected Tier: {contractTier}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs leading-relaxed text-slate-800 font-sans">
                <p>
                  This Master Services Agreement (&ldquo;Agreement&rdquo;) is entered into by and between <strong>FlowForge Inc.</strong> (&ldquo;Provider&rdquo;) and <strong>{contractCustomerName}</strong> (&ldquo;Customer&rdquo;).
                </p>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">1. Scope of Services</h4>
                  <p>
                    Provider grants Customer access to the FlowForge Engineering Stability Platform (ESP) for the purpose of telemetry ingestion, Stability Score monitoring, Slack Liquidity enforcement, and closed-loop autonomy operations as provided in the selected tier ({contractTier}).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">2. Service Level Agreement (SLA)</h4>
                  <p>
                    Provider guarantees 99.95% telemetry availability, daily stability updates at 06:00 UTC, weekly autonomy rebalancing cycles, and delivery of the comprehensive Engineering Stability Assessment (ESA) within 30 days of contract execution.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">3. Confidentiality & Zero-Code-Access Data Protection</h4>
                  <p>
                    Provider warrants that it reads strictly Git metadata (commit timestamps, author IDs, pull request status) and shall NEVER read, download, or store Customer proprietary source code or confidential IP. Both parties agree to standard mutual nondisclosure terms.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">4. Fees & Payment Terms</h4>
                  <p>
                    Customer agrees to pay the fees set forth in the selected schedule ({contractTier}), billed monthly or annually in advance with Net-30 payment terms.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">5. Limitation of Liability</h4>
                  <p>
                    Except for breaches of Section 3 (Confidentiality), neither party&apos;s aggregate liability arising out of or related to this Agreement shall exceed the total fees paid by Customer hereunder in the twelve (12) months preceding the incident.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 uppercase text-[11px] mb-1">6. Term & Termination</h4>
                  <p>
                    This Agreement commences on {contractEffectiveDate} and continues on an annual renewing basis unless terminated by either party with thirty (30) days written notice prior to renewal.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-300 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-4">ACCEPTED AND AGREED: FLOWFORGE INC.</p>
                    <div className="border-b border-slate-400 w-48 mb-1"></div>
                    <p className="text-[11px] font-bold">Authorized Officer, FlowForge Inc.</p>
                    <p className="text-[10px] text-slate-600">Date: {contractEffectiveDate}</p>
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-4">ACCEPTED AND AGREED: {contractCustomerName.toUpperCase()}</p>
                    <div className="border-b border-slate-400 w-48 mb-1"></div>
                    <p className="text-[11px] font-bold">Authorized Executive Officer</p>
                    <p className="text-[10px] text-slate-600">Date: {contractEffectiveDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 7: ROI & ENGINEERING ECONOMICS CALCULATOR */}
        {/* ========================================================================= */}
        {viewMode === 'economics_calculator' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    ECONOMICS
                  </span>
                  <h2 className="text-xl font-bold text-white">FlowForge Engineering Economics & ROI Engine</h2>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Quantify preventable organizational losses: developer burnout, delivery slippage, and context-switching drag.</p>
              </div>

              <button
                onClick={() => handleCopyText(`Total Volatility Loss: $${totalAnnualVolatilityLoss.toLocaleString()} | Net Estimated Savings: $${netEstimatedSavings.toLocaleString()} | ROI: ${roiMultiple}x`, "ROI Calculation")}
                className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center space-x-1"
              >
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copy Calculation</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Interactive Sliders */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Engineering Org Parameters
                </h3>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-semibold">Total Engineers:</span>
                    <span className="text-amber-400 font-bold">{engineerCount}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={engineerCount}
                    onChange={e => setEngineerCount(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-semibold">Average Salary:</span>
                    <span className="text-amber-400 font-bold">${avgEngineerSalary.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="80000"
                    max="300000"
                    step="5000"
                    value={avgEngineerSalary}
                    onChange={e => setAvgEngineerSalary(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-semibold">Annual Burnout Turnover Rate:</span>
                    <span className="text-rose-400 font-bold">{annualTurnoverPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={annualTurnoverPct}
                    onChange={e => setAnnualTurnoverPct(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-semibold">Slipped Tier-1 Releases / Year:</span>
                    <span className="text-amber-400 font-bold">{slippedReleasesPerYear}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="1"
                    value={slippedReleasesPerYear}
                    onChange={e => setSlippedReleasesPerYear(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>

              {/* Real-time Economic Results Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 border-2 border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                    Economic Loss & ROI Audit
                  </span>
                  <h3 className="text-3xl font-black text-white mt-1">
                    ${totalAnnualVolatilityLoss.toLocaleString()}
                  </h3>
                  <p className="text-xs text-slate-400">Preventable Annual Loss to Engineering Volatility</p>
                </div>

                <div className="space-y-2 text-xs border-y border-slate-800 py-3">
                  <div className="flex justify-between text-slate-300">
                    <span>Burnout Turnover Cost (1.5x salary):</span>
                    <span className="text-rose-400 font-bold">${Math.round(calculatedTurnoverCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Release Slippage Opportunity Loss:</span>
                    <span className="text-rose-400 font-bold">${Math.round(calculatedSlipCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Context Switching & Review Congestion:</span>
                    <span className="text-rose-400 font-bold">${Math.round(calculatedContextSwitchWaste).toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-slate-400">FlowForge Projected Net Savings (40% reclaimed):</p>
                    <p className="text-xl font-black text-emerald-400">${netEstimatedSavings.toLocaleString()} / yr</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-400">Net Multiple ROI:</p>
                    <p className="text-xl font-black text-amber-400">{roiMultiple}x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Overlay for Expanded Deliverables (Analyst Keynote, Autonomous Roadmap, Partner Summit, Category Bible) */}
        {expandedDeliverable && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    {expandedDeliverable === 'analyst_keynote' && <MicIcon className="w-4 h-4" />}
                    {expandedDeliverable === 'roadmap' && <CompassIcon className="w-4 h-4" />}
                    {expandedDeliverable === 'partner_summit' && <CalendarIcon className="w-4 h-4" />}
                    {expandedDeliverable === 'category_bible' && <FileTextIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {expandedDeliverable === 'analyst_keynote' && FLOWFORGE_ANALYST_KEYNOTE.title}
                      {expandedDeliverable === 'roadmap' && FLOWFORGE_AUTONOMOUS_ROADMAP.title}
                      {expandedDeliverable === 'partner_summit' && FLOWFORGE_PARTNER_SUMMIT.eventName}
                      {expandedDeliverable === 'category_bible' && FLOWFORGE_CATEGORY_BIBLE.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {expandedDeliverable === 'analyst_keynote' && 'Purpose-built briefing for Gartner, Forrester, IDC, and RedMonk'}
                      {expandedDeliverable === 'roadmap' && '24-Month Sovereign Engineering Autonomy Transformation'}
                      {expandedDeliverable === 'partner_summit' && 'Annual Summit Run-of-Show, Ecosystem Tracks & Partner Awards'}
                      {expandedDeliverable === 'category_bible' && 'The Definitive 7-Chapter Guide to Engineering Stability Platforms (ESP)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      let copyText = '';
                      if (expandedDeliverable === 'analyst_keynote') copyText = JSON.stringify(FLOWFORGE_ANALYST_KEYNOTE, null, 2);
                      else if (expandedDeliverable === 'roadmap') copyText = JSON.stringify(FLOWFORGE_AUTONOMOUS_ROADMAP, null, 2);
                      else if (expandedDeliverable === 'partner_summit') copyText = JSON.stringify(FLOWFORGE_PARTNER_SUMMIT, null, 2);
                      else if (expandedDeliverable === 'category_bible') copyText = JSON.stringify(FLOWFORGE_CATEGORY_BIBLE, null, 2);
                      handleCopyText(copyText, 'Deliverable data');
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center space-x-1"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>Copy JSON</span>
                  </button>
                  <button
                    onClick={() => setExpandedDeliverable(null)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                  >
                    <XIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed max-h-[calc(90vh-140px)]">

                {/* 1. ANALYST KEYNOTE */}
                {expandedDeliverable === 'analyst_keynote' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400">SPEAKER SCRIPT &amp; THEME</span>
                        <span className="text-xs text-slate-400">Target Firms: {FLOWFORGE_ANALYST_KEYNOTE.targetFirms.join(', ')}</span>
                      </div>
                      <h4 className="text-base font-bold text-white">&quot;Engineering Stability: The Missing Layer in Modern Software Delivery&quot;</h4>
                      <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-amber-500 pl-3">
                        &quot;Good afternoon. For decades, engineering teams have operated without stability systems. We&apos;ve built DevOps, observability, CI/CD, Agile, and AI automation &mdash; but none of these address the core instability inside engineering teams. Today, FlowForge introduces the Stability OS &mdash; the first platform designed to stabilize engineering teams automatically.&quot;
                      </p>
                    </div>

                    {/* Historical Gaps Table */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">The Analyst Insight: 5 Eras of Unaddressed Operational Friction</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {FLOWFORGE_ANALYST_KEYNOTE.analystInsight.historicalGaps.map(g => (
                          <div key={g.era} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">{g.era}: {g.system}</span>
                              <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded">Breakthrough</span>
                            </div>
                            <p className="text-xs text-slate-400">{g.breakthrough}</p>
                            <p className="text-xs text-rose-300/90 font-medium">Critical Gap: {g.criticalUnaddressedGap}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Stability OS Pillars */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">The Stability OS: Foundational Pillars of ESP</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {FLOWFORGE_ANALYST_KEYNOTE.theStabilityOS.capabilities.map(c => (
                          <div key={c.name} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                            <span className="text-xs font-bold text-white">{c.name}</span>
                            <p className="text-[11px] font-mono text-amber-300">{c.metricOrProtocol}</p>
                            <p className="text-xs text-slate-400">{c.categoryImpact}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">The Analyst Call to Action</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                        &quot;Engineering stability is now measurable, governable, and automatable. FlowForge is defining the category &mdash; and analysts will shape how enterprises adopt it. Thank you.&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. AUTONOMOUS ROADMAP */}
                {expandedDeliverable === 'roadmap' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <h4 className="text-base font-bold text-white">Autonomous Engineering: The Roadmap to Stability</h4>
                      <p className="text-xs text-slate-400">5 Evolutionary Phases transitioning engineering organizations from chaotic delivery to autonomous, certified governance.</p>
                    </div>

                    <div className="space-y-4">
                      {FLOWFORGE_AUTONOMOUS_ROADMAP.phases.map(phase => (
                        <div key={phase.phaseNumber} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Phase {phase.phaseNumber}
                              </span>
                              <h5 className="text-sm font-bold text-white">{phase.name} &mdash; {phase.theme}</h5>
                            </div>
                            <span className="text-xs text-slate-400 font-mono">{phase.timeframe}</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="space-y-1.5">
                              <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wide">Focus Capabilities</span>
                              {phase.focusCapabilities.map(fc => (
                                <div key={fc.name} className="p-2 rounded bg-slate-900 border border-slate-800/80">
                                  <p className="font-semibold text-white">{fc.name}</p>
                                  <p className="text-[11px] text-amber-300/90 font-mono">{fc.metricThreshold}</p>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-1.5">
                              <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wide">Statutory Invariants</span>
                              <ul className="space-y-1 text-slate-400 text-xs">
                                {phase.statutoryInvariants.map((inv, idx) => (
                                  <li key={idx} className="flex items-start space-x-1.5">
                                    <span className="text-teal-400">&bull;</span>
                                    <span>{inv}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-1.5">
                              <span className="font-bold text-slate-300 text-[11px] uppercase tracking-wide">Exit Milestone</span>
                              <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-xs font-medium">
                                {phase.exitMilestone}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-800/40 text-xs text-teal-200">
                      <span className="font-bold uppercase tracking-wider block mb-1">Target Outcome</span>
                      Engineering teams operate with mathematically predictable delivery dates, 40%+ reduction in burnout turnover, and autonomous closed-loop self-stabilization.
                    </div>
                  </div>
                )}

                {/* 3. PARTNER SUMMIT */}
                {expandedDeliverable === 'partner_summit' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400">ANNUAL EVENT MANIFEST</span>
                        <span className="text-xs text-slate-400">September 2027 &bull; Moscone Center, SF</span>
                      </div>
                      <h4 className="text-base font-bold text-white">FlowForge Global Partner Summit 2027</h4>
                      <p className="text-xs text-teal-400 font-semibold">Theme: &quot;Building the Engineering Stability Ecosystem&quot;</p>
                    </div>

                    {/* Breakout Tracks */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">5 Specialized Breakout Tracks</h4>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                        {[
                          { name: 'Stability Consulting', focus: 'Delivering the 30-day Engineering Stability Audit (ESA).' },
                          { name: 'Governance Implementation', focus: 'Authoring custom RulePack v1 rules and CI/CD gates.' },
                          { name: 'Autonomy Deployment', focus: 'Activating closed-loop automated load and PR rebalancing.' },
                          { name: 'Intelligence Forecasting', focus: '90-day Bayesian delivery risk curves and volatility modeling.' },
                          { name: 'ESA Certification Delivery', focus: 'Issuing formal enterprise stability scorecards to boards.' }
                        ].map(t => (
                          <div key={t.name} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                            <span className="font-bold text-amber-300">{t.name}</span>
                            <p className="text-[11px] text-slate-400">{t.focus}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Partner Certifications & Awards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="font-bold text-teal-400 uppercase tracking-wider text-[11px] block">Certification Exams Offered On-Site</span>
                        <div className="space-y-1.5">
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">FCSA:</span> FlowForge Certified Stability Architect</p>
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">FCGS:</span> FlowForge Certified Governance Specialist</p>
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">FCAE:</span> FlowForge Certified Autonomy Engineer</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">Annual Partner Awards</span>
                        <div className="space-y-1.5">
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">Partner of the Year:</span> Highest co-sell ARR volume and ESA customer satisfaction.</p>
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">Stability Innovator:</span> Most creative RulePack adaptation for complex monorepo scale.</p>
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">Governance Excellence:</span> Zero compliance breaches across 10+ enterprise audits.</p>
                          <p className="p-2 rounded bg-slate-900 border border-slate-800"><span className="text-white font-bold">Autonomy Pioneer:</span> Largest live production autonomous rebalancing cluster.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. CATEGORY BIBLE */}
                {expandedDeliverable === 'category_bible' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-400">FOUNDATIONAL CANON</span>
                      <h4 className="text-base font-bold text-white">The Engineering Stability Platform (ESP) Category Bible</h4>
                      <p className="text-xs text-slate-400">The definitive guide defining why software engineering requires autonomous operational stability systems.</p>
                    </div>

                    <div className="space-y-3">
                      {FLOWFORGE_CATEGORY_BIBLE.chapters.map(ch => (
                        <div key={ch.chapterNumber} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                            <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                              Chapter {ch.chapterNumber}
                            </span>
                            <span className="text-sm font-bold text-white">{ch.title}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">{ch.summary}</p>
                          {ch.contentSections && ch.contentSections[0] && (
                            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
                              <span className="font-semibold text-slate-200">{ch.contentSections[0].subHeading}:</span>
                              <p>{ch.contentSections[0].bodyParagraphs[0]}</p>
                              {ch.contentSections[0].technicalRuleOrSpec && (
                                <p className="font-mono text-amber-300 text-[11px] pt-1">{ch.contentSections[0].technicalRuleOrSpec}</p>
                              )}
                            </div>
                          )}
                          {ch.calloutBox && (
                            <div className="p-2 rounded bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200">
                              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 block">{ch.calloutBox.type.toUpperCase()}: {ch.calloutBox.title}</span>
                              <p className="text-[11px]">{ch.calloutBox.text}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">FlowForge Master OS &bull; Category Asset</span>
                <div className="flex items-center space-x-3">
                  {onNavigateToPart6 && (
                    <button
                      onClick={() => {
                        setExpandedDeliverable(null);
                        onNavigateToPart6();
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Switch to Full Part VI Suite &rarr;
                    </button>
                  )}
                  <button
                    onClick={() => setExpandedDeliverable(null)}
                    className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
};
