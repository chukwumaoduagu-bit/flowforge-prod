import React, { useState } from 'react';
import {
  ShieldCheckIcon,
  SparklesIcon,
  ActivityIcon,
  LayersIcon,
  CompassIcon,
  AwardIcon,
  BookOpenIcon,
  PresentationIcon,
  GlobeIcon,
  FileTextIcon,
  CopyIcon,
  CheckIcon,
  PrinterIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  MailIcon,
  TargetIcon,
  ZapIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  Maximize2Icon,
  AlertTriangleIcon,
  ClockIcon,
  CpuIcon,
  LockIcon,
  BarChart3Icon
} from 'lucide-react';
import {
  FLOWFORGE_INVESTOR_DECK_PART_II,
  FLOWFORGE_ONBOARDING_HANDBOOK_PART_II,
  FLOWFORGE_GOVERNANCE_PACKAGE_PART_II,
  FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II,
  InvestorDeckVisualSlide
} from '../data/expansionSuitePart2Data';

interface EnterpriseExpansionSuitePart2Props {
  onEnterApp?: () => void;
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart3?: () => void;
}

export const EnterpriseExpansionSuitePart2View: React.FC<EnterpriseExpansionSuitePart2Props> = ({
  onEnterApp,
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart3
}) => {
  const [activeTab, setActiveTab] = useState<'investor_deck' | 'handbook' | 'governance' | 'autonomy'>('investor_deck');
  const [investorSlideIndex, setInvestorSlideIndex] = useState<number>(0);
  const [investorViewMode, setInvestorViewMode] = useState<'slide' | 'grid'>('slide');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Handbook Active Section
  const [activeHandbookSection, setActiveHandbookSection] = useState<number>(1);

  // Governance Filter
  const [governanceFilter, setGovernanceFilter] = useState<string>('all');

  // Autonomy Protocol Active
  const [activeProtocolCode, setActiveProtocolCode] = useState<string>('PROTO-01');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentSlide = FLOWFORGE_INVESTOR_DECK_PART_II[investorSlideIndex];
  const currentHandbook = FLOWFORGE_ONBOARDING_HANDBOOK_PART_II.find(s => s.sectionNumber === activeHandbookSection) || FLOWFORGE_ONBOARDING_HANDBOOK_PART_II[0];
  const filteredRules = governanceFilter === 'all'
    ? FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.rules
    : FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.rules.filter(r => r.category.toLowerCase().includes(governanceFilter.toLowerCase()));
  const currentProtocol = FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.protocols.find(p => p.protocolCode === activeProtocolCode) || FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.protocols[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30 flex items-center space-x-1">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>EXPANSION SUITE • PART II</span>
              </span>
              <span className="text-xs text-slate-400">Institutional & Technical Collateral</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1.5">
              FlowForge Enterprise Expansion Suite — Part II
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl">
              16-slide Visual Investor Deck, 30-Day Onboarding Handbook, Governance Compliance Package (RulePack v1), and Autonomy Engine Technical Documentation.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-2">
            {onNavigateToPart1 && (
              <button
                onClick={onNavigateToPart1}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                &larr; Part I
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Package</span>
            </button>
            {onNavigateToPart3 && (
              <button
                onClick={onNavigateToPart3}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <AwardIcon className="w-3.5 h-3.5" />
                <span>Part III: Marketing & Partners &rarr;</span>
              </button>
            )}
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

        {/* 4 Pillars Navigation Bar */}
        <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs no-scrollbar">
          {[
            { id: 'investor_deck', label: '1. Investor Deck', icon: PresentationIcon, badge: '16 Slides Visual' },
            { id: 'handbook', label: '2. Onboarding Handbook', icon: BookOpenIcon, badge: '6 Sections' },
            { id: 'governance', label: '3. Governance Compliance', icon: ShieldCheckIcon, badge: 'RulePack v1' },
            { id: 'autonomy', label: '4. Autonomy Engine Docs', icon: CpuIcon, badge: '5 Protocols' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-slate-950/20 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= SECTION 1: INVESTOR DECK (VISUAL LAYOUT) ================= */}
      {activeTab === 'investor_deck' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                  Deck Spec • 16 Slides
                </span>
                <span className="text-xs text-slate-400">Slide-by-slide visual layout instructions + full narrative text</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1">FlowForge Institutional Investor Presentation</h2>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-slate-800 rounded-xl p-0.5 border border-slate-700">
                <button
                  onClick={() => setInvestorViewMode('slide')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    investorViewMode === 'slide' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Slide View
                </button>
                <button
                  onClick={() => setInvestorViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    investorViewMode === 'grid' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  16-Slide Grid
                </button>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    FLOWFORGE_INVESTOR_DECK_PART_II.map(
                      s => `SLIDE ${s.slideNumber}: ${s.title}\nSubtitle: ${s.subtitle || ''}\nVisual: ${s.visualSpec.description}\nText: ${s.textContent.headline || ''}\n${s.textContent.bullets?.map(b => `• ${b}`).join('\n') || s.textContent.body || ''}\n`
                    ).join('\n---\n\n'),
                    'copy_investor_deck'
                  )
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_investor_deck' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_investor_deck' ? 'Copied Full Deck!' : 'Copy Deck Text'}</span>
              </button>
            </div>
          </div>

          {/* Slide View Mode */}
          {investorViewMode === 'slide' ? (
            <div className="space-y-4">
              {/* Slide Presentation Canvas */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between">
                {/* Visual Ambient Glow */}
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
                  style={{ backgroundColor: currentSlide.visualSpec.accentColor }}
                />

                {/* Slide Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-400 font-mono text-xs font-bold border border-slate-700">
                      SLIDE {currentSlide.slideNumber} / 16
                    </span>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                      VISUAL: {currentSlide.visualSpec.type.toUpperCase()}
                    </span>
                  </div>

                  <span className="text-xs font-bold font-mono text-slate-400">
                    CFO TAX PRO LLC (dba FlowForge)
                  </span>
                </div>

                {/* Slide Body */}
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Narrative Text */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                        {currentSlide.title}
                      </h2>
                      {currentSlide.subtitle && (
                        <p className="text-base sm:text-lg text-cyan-400 font-medium mt-1">
                          {currentSlide.subtitle}
                        </p>
                      )}
                    </div>

                    {currentSlide.textContent.headline && (
                      <p className="text-sm sm:text-base text-slate-200 font-semibold leading-relaxed">
                        {currentSlide.textContent.headline}
                      </p>
                    )}

                    {currentSlide.textContent.body && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {currentSlide.textContent.body}
                      </p>
                    )}

                    {currentSlide.textContent.bullets && (
                      <ul className="space-y-2.5 pt-2">
                        {currentSlide.textContent.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {currentSlide.textContent.quote && (
                      <blockquote className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-amber-400 text-slate-200 italic text-sm font-medium">
                        {currentSlide.textContent.quote}
                      </blockquote>
                    )}
                  </div>

                  {/* Right Column: Visual Layout Specification Box */}
                  <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-850 pb-2">
                      <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wide flex items-center space-x-1.5">
                        <SparklesIcon className="w-3.5 h-3.5" />
                        <span>Visual Design Specification</span>
                      </span>
                      <span
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: currentSlide.visualSpec.accentColor }}
                        title="Accent Color"
                      />
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Layout Instructions:</span>
                        <p className="text-slate-200 leading-relaxed mt-0.5 font-sans">
                          {currentSlide.visualSpec.description}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className="text-slate-400 block font-medium">Visual Elements Rendered:</span>
                        <ul className="mt-1.5 space-y-1.5">
                          {currentSlide.visualSpec.elements.map((elem, eIdx) => (
                            <li key={eIdx} className="flex items-center space-x-2 text-[11px] text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
                              <CheckCircle2Icon className="w-3 h-3 text-cyan-400 shrink-0" />
                              <span>{elem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Footer Navigation */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 relative z-10">
                  <button
                    onClick={() => setInvestorSlideIndex(prev => Math.max(0, prev - 1))}
                    disabled={investorSlideIndex === 0}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-200 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Previous Slide</span>
                  </button>

                  {/* Dot Tracker */}
                  <div className="hidden sm:flex items-center space-x-1.5">
                    {FLOWFORGE_INVESTOR_DECK_PART_II.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setInvestorSlideIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
                          idx === investorSlideIndex ? 'bg-amber-400 scale-125' : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                        title={`Slide ${idx + 1}: ${s.title}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setInvestorSlideIndex(prev => Math.min(FLOWFORGE_INVESTOR_DECK_PART_II.length - 1, prev + 1))}
                    disabled={investorSlideIndex === FLOWFORGE_INVESTOR_DECK_PART_II.length - 1}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-slate-950 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Next Slide</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* 16-Slide Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLOWFORGE_INVESTOR_DECK_PART_II.map((slide, idx) => (
                <div
                  key={slide.slideNumber}
                  onClick={() => {
                    setInvestorSlideIndex(idx);
                    setInvestorViewMode('slide');
                  }}
                  className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 space-y-3 cursor-pointer transition hover:scale-[1.02] shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700">
                        Slide {slide.slideNumber}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: slide.visualSpec.accentColor }}
                      />
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{slide.title}</h3>
                    {slide.subtitle && (
                      <p className="text-[11px] text-cyan-400 line-clamp-1">{slide.subtitle}</p>
                    )}
                    <p className="text-[11px] text-slate-400 line-clamp-3">
                      {slide.textContent.headline || slide.textContent.body || slide.textContent.bullets?.[0]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
                    Visual: {slide.visualSpec.type}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= SECTION 2: ONBOARDING HANDBOOK ================= */}
      {activeTab === 'handbook' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                Customer Success • Full Handbook
              </span>
              <h2 className="text-xl font-bold text-white mt-1">FlowForge Enterprise Onboarding Handbook</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Full 6-section tactical operational guide for the first 30 days of stability deployment.
              </p>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  FLOWFORGE_ONBOARDING_HANDBOOK_PART_II.map(
                    s => `SECTION ${s.sectionNumber}: ${s.title}\n${s.tagline}\n\n${s.content.summary || ''}\n${s.content.checklist?.map(c => `• [ ] ${c.item} - ${c.description} (Owner: ${c.role})`).join('\n') || ''}\n${s.content.concepts?.map(c => `• ${c.name}: ${c.definition} (Target: ${c.targetMetric})`).join('\n') || ''}\n${s.content.cadence?.map(c => `• ${c.day} - ${c.event}: ${c.agenda} (Deliverable: ${c.deliverable})`).join('\n') || ''}\n`
                  ).join('\n---\n\n'),
                  'copy_handbook'
                )
              }
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5 shrink-0"
            >
              {copiedKey === 'copy_handbook' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'copy_handbook' ? 'Copied Handbook!' : 'Copy Handbook'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-2">
                Handbook Sections
              </span>
              {FLOWFORGE_ONBOARDING_HANDBOOK_PART_II.map(s => {
                const isActive = activeHandbookSection === s.sectionNumber;
                return (
                  <button
                    key={s.sectionNumber}
                    onClick={() => setActiveHandbookSection(s.sectionNumber)}
                    className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{s.sectionNumber}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold">{s.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{s.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Section Content Area */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  Section 0{currentHandbook.sectionNumber} of 06
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{currentHandbook.title}</h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">{currentHandbook.tagline}</p>
              </div>

              {/* Section 1: Welcome */}
              {currentHandbook.sectionNumber === 1 && (
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-3">
                    <h4 className="text-sm font-bold text-white">Founder Mission</h4>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {currentHandbook.content.summary}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center">
                      <span className="text-2xl font-black text-cyan-400">30</span>
                      <p className="text-xs text-slate-400 mt-1">Days to Full Stability</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center">
                      <span className="text-2xl font-black text-amber-400">100%</span>
                      <p className="text-xs text-slate-400 mt-1">Read-Only Telemetry</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center">
                      <span className="text-2xl font-black text-emerald-400">ESA</span>
                      <p className="text-xs text-slate-400 mt-1">Certified Audit Deliverable</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 2: Setup Checklist */}
              {currentHandbook.sectionNumber === 2 && currentHandbook.content.checklist && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Technical Integration Steps:
                  </span>
                  <div className="space-y-2.5">
                    {currentHandbook.content.checklist.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white flex items-center space-x-2">
                            <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                            <span>{item.item}</span>
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            Role: {item.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 3: Stability Concepts */}
              {currentHandbook.sectionNumber === 3 && currentHandbook.content.concepts && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Core Metrics & Target Baselines:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentHandbook.content.concepts.map((concept, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white">{concept.name}</h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                            {concept.targetMetric}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {concept.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 4: Weekly Cadence */}
              {currentHandbook.sectionNumber === 4 && currentHandbook.content.cadence && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    The Closed-Loop Weekly Rhythm:
                  </span>
                  <div className="space-y-3">
                    {currentHandbook.content.cadence.map((c, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="w-4 h-4 text-amber-400" />
                            <h4 className="text-xs font-bold text-white">{c.event}</h4>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                            {c.day}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{c.agenda}</p>
                        <div className="pt-2 border-t border-slate-850 flex items-center space-x-1.5 text-[11px] text-emerald-400">
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>Deliverable: <strong>{c.deliverable}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 5: Executive Reporting */}
              {currentHandbook.sectionNumber === 5 && currentHandbook.content.reporting && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Executive Artifact Schedule:
                  </span>
                  <div className="space-y-3">
                    {currentHandbook.content.reporting.map((r, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white flex items-center space-x-2">
                            <FileTextIcon className="w-4 h-4 text-cyan-400" />
                            <span>{r.artifact}</span>
                          </h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                            {r.cadence}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{r.description}</p>
                        <div className="text-[11px] text-slate-400">
                          Audience: <strong className="text-slate-200">{r.audience}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 6: Support */}
              {currentHandbook.sectionNumber === 6 && currentHandbook.content.supportInfo && (
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-slate-950 border border-cyan-500/40 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                        <MailIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Enterprise Support Channel</h4>
                        <a href="mailto:enterprise@flowforge.ai" className="text-xs font-mono text-cyan-400 hover:underline">
                          {currentHandbook.content.supportInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block font-medium">SLA Response Time:</span>
                        <span className="text-white font-semibold">{currentHandbook.content.supportInfo.responseTime}</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block font-medium">Escalation Path:</span>
                        <span className="text-white font-semibold">{currentHandbook.content.supportInfo.escalation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 3: GOVERNANCE COMPLIANCE PACKAGE ================= */}
      {activeTab === 'governance' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  {FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.version}
                </span>
                <span className="text-xs text-slate-400">CFO TAX PRO LLC (dba FlowForge)</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">FlowForge Governance Compliance Package</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.overview}
              </p>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  `GOVERNANCE RULEPACK v1:\n\n` +
                  FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.rules.map(
                    r => `[${r.ruleCode}] ${r.ruleName} (${r.category})\nThreshold: ${r.statutoryThreshold}\nEnforcement: ${r.enforcementAction}\nTrigger: ${r.triggerEvent}\n`
                  ).join('\n') +
                  `\nCOMPLIANCE REQUIREMENTS:\n` +
                  FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.complianceRequirements.map(
                    c => `• ${c.cadence}: ${c.requirement} -> Deliverable: ${c.artifact} (Sign-off: ${c.signOff})`
                  ).join('\n'),
                  'copy_governance'
                )
              }
              className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition cursor-pointer flex items-center space-x-1.5 shrink-0"
            >
              {copiedKey === 'copy_governance' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'copy_governance' ? 'Copied RulePack!' : 'Copy RulePack'}</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center overflow-x-auto space-x-2 text-xs no-scrollbar">
            {['all', 'stability', 'slack', 'burnout', 'critical', 'volatility', 'delivery'].map(f => (
              <button
                key={f}
                onClick={() => setGovernanceFilter(f)}
                className={`px-3 py-1.5 rounded-lg font-bold capitalize transition cursor-pointer ${
                  governanceFilter === f
                    ? 'bg-emerald-500 text-slate-950 shadow'
                    : 'bg-slate-850 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {f === 'all' ? 'All Governance Rules' : `${f} Rules`}
              </button>
            ))}
          </div>

          {/* Rules Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Enforced RulePack v1 Policy Engine</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {filteredRules.length} Active Rules
              </span>
            </div>

            <div className="divide-y divide-slate-800 text-xs">
              {filteredRules.map(rule => (
                <div key={rule.ruleCode} className="p-5 hover:bg-slate-850/50 transition space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40 text-[11px]">
                        {rule.ruleCode}
                      </span>
                      <h4 className="font-bold text-white text-sm">{rule.ruleName}</h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 self-start sm:self-center">
                      {rule.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
                      <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">
                        Statutory Threshold:
                      </span>
                      <p className="text-xs text-slate-200 mt-1 font-semibold">
                        {rule.statutoryThreshold}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                        Enforcement Action:
                      </span>
                      <p className="text-xs text-slate-200 mt-1">
                        {rule.enforcementAction}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">
                        Trigger Event:
                      </span>
                      <p className="text-xs text-slate-200 mt-1">
                        {rule.triggerEvent}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Requirements */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <AwardIcon className="w-4 h-4 text-cyan-400" />
              <span>Institutional Compliance Schedule</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FLOWFORGE_GOVERNANCE_PACKAGE_PART_II.complianceRequirements.map((req, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400">{req.cadence}</span>
                    <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{req.requirement}</h4>
                  <p className="text-xs text-slate-400">Artifact: <strong className="text-slate-200">{req.artifact}</strong></p>
                  <p className="text-[11px] text-slate-500">Sign-off: {req.signOff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 4: AUTONOMY ENGINE DOCUMENTATION ================= */}
      {activeTab === 'autonomy' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.version}
                </span>
                <span className="text-xs text-slate-400">Automated Workload & Slack Orchestration</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">FlowForge Autonomy Engine Technical Documentation</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.overview}
              </p>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  `AUTONOMY ENGINE TECHNICAL DOCUMENTATION:\n` +
                  `Cadence: Runs every ${FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.dayOfWeek} at ${FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.time} ${FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.timezone}\n\n` +
                  FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.protocols.map(
                    p => `[${p.protocolCode}] ${p.protocolName}\nPurpose: ${p.purpose}\nTrigger: ${p.triggerCondition}\nSteps:\n${p.steps.join('\n')}\nSafety: ${p.safetyConstraint}\n`
                  ).join('\n') +
                  `\nSAFETY CONTROLS:\n` +
                  FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.safetyControls.guarantees.map(g => `• ${g}`).join('\n'),
                  'copy_autonomy'
                )
              }
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5 shrink-0"
            >
              {copiedKey === 'copy_autonomy' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'copy_autonomy' ? 'Copied Engine Docs!' : 'Copy Engine Docs'}</span>
            </button>
          </div>

          {/* Autonomy Cycle Banner */}
          <div className="bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">Execution Cadence</span>
                <h3 className="text-sm font-bold text-white">
                  Runs every {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.dayOfWeek} at {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.time} {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.timezone}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.executionCycle.description}
                </p>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-mono font-bold self-start sm:self-center">
              Safety Verified: Zero Code Rewrites
            </div>
          </div>

          {/* Protocols Interactive Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-2">
                Core Protocols (5 Available)
              </span>
              {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.protocols.map(protocol => {
                const isActive = activeProtocolCode === protocol.protocolCode;
                return (
                  <button
                    key={protocol.protocolCode}
                    onClick={() => setActiveProtocolCode(protocol.protocolCode)}
                    className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {protocol.protocolCode}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold">{protocol.protocolName}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{protocol.purpose}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Protocol Detail Box */}
            <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/40">
                    {currentProtocol.protocolCode}
                  </span>
                  <span className="text-xs text-slate-400">Autonomous Intervention Protocol</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1.5">{currentProtocol.protocolName}</h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">{currentProtocol.purpose}</p>
              </div>

              {/* Trigger Condition */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                  Autonomous Trigger Condition:
                </span>
                <p className="text-xs font-semibold text-white">
                  {currentProtocol.triggerCondition}
                </p>
              </div>

              {/* Sequential Execution Steps */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Sequential Execution Steps:
                </span>
                <div className="space-y-2">
                  {currentProtocol.steps.map((step, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-lg bg-slate-950 border border-slate-850 text-xs text-slate-200 flex items-start space-x-2.5">
                      <CheckCircle2Icon className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Constraint */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 flex items-start space-x-3 text-xs">
                <LockIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                    Hard Safety Constraint:
                  </span>
                  <p className="text-slate-300 mt-0.5">{currentProtocol.safetyConstraint}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Controls & Invariants */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Safety Controls & Invariants</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.safetyControls.guarantees.map((g, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {g}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
              <div>
                Rollback Method: <strong className="text-cyan-400">{FLOWFORGE_AUTONOMY_ENGINE_DOC_PART_II.safetyControls.rollbackMethod}</strong>
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Audit Trail: Cryptographically SHA-256 Hashed
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
