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
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  MailIcon,
  TargetIcon,
  ZapIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  Maximize2Icon
} from 'lucide-react';
import {
  FLOWFORGE_BRAND_SYSTEM,
  FLOWFORGE_CATEGORY_MANIFESTO,
  FLOWFORGE_EXECUTIVE_BRIEFING,
  FLOWFORGE_SALES_DECK_TEXT,
  FLOWFORGE_WEBSITE_EXPANSION_PAGES,
  SalesDeckSlideText
} from '../data/expansionSuiteData';

interface EnterpriseExpansionSuiteProps {
  onEnterApp?: () => void;
  onNavigateToStability?: () => void;
  onNavigateToPart2?: () => void;
}

export const EnterpriseExpansionSuiteView: React.FC<EnterpriseExpansionSuiteProps> = ({
  onEnterApp,
  onNavigateToStability,
  onNavigateToPart2
}) => {
  const [activeModule, setActiveModule] = useState<
    'brand' | 'manifesto' | 'briefing' | 'sales_deck' | 'website'
  >('brand');

  const [activeWebsiteTab, setActiveWebsiteTab] = useState<string>('homepage');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [deckViewMode, setDeckViewMode] = useState<'cards' | 'grid'>('cards');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30 flex items-center space-x-1">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>EXPANSION SUITE</span>
              </span>
              <span className="text-xs text-slate-400">Complete Commercial Collateral</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1.5">
              FlowForge Enterprise Expansion Suite
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl">
              Brand system, Category Manifesto, Executive Briefing, 10-slide Sales Deck, and Full Multi-Page Website — complete, unified, and ready to scale.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {onNavigateToPart2 && (
              <button
                onClick={onNavigateToPart2}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>Suite Part II &rarr;</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Collateral</span>
            </button>
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ActivityIcon className="w-3.5 h-3.5" />
                <span>Live Stability Core</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Tabs across 5 Pillars */}
        <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs no-scrollbar">
          {[
            { id: 'brand', label: '1. Brand System', icon: SparklesIcon, badge: 'Voice & Visuals' },
            { id: 'manifesto', label: '2. Category Manifesto', icon: BookOpenIcon, badge: 'ESP Defined' },
            { id: 'briefing', label: '3. Executive Briefing', icon: FileTextIcon, badge: 'C-Suite' },
            { id: 'sales_deck', label: '4. Sales Deck (Full Text)', icon: PresentationIcon, badge: '10 Slides' },
            { id: 'website', label: '5. Website (Multi-Page)', icon: GlobeIcon, badge: '7 Pages' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeModule === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveModule(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
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

      {/* MODULE 1: BRAND SYSTEM */}
      {activeModule === 'brand' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  Section 1 • Identity, Voice & Visual Specs
                </span>
                <h2 className="text-xl font-bold text-white mt-1">FlowForge Brand System</h2>
                <p className="text-xs text-slate-400 mt-1">
                  The executive operating system brand: authoritative, predictive, calm, and outcome-driven.
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `Brand Essence: ${FLOWFORGE_BRAND_SYSTEM.essence}\n\nPositioning: ${FLOWFORGE_BRAND_SYSTEM.positioningStatement}\n\nVoice: ${FLOWFORGE_BRAND_SYSTEM.voice.join(', ')}\n\nTone:\n${FLOWFORGE_BRAND_SYSTEM.tone.map(t => `• ${t.trait}, ${t.contrast}`).join('\n')}\n\nVocabulary: ${FLOWFORGE_BRAND_SYSTEM.vocabulary.join(', ')}\n\nColors:\n• ${FLOWFORGE_BRAND_SYSTEM.visualSystem.primaryColor.name} (${FLOWFORGE_BRAND_SYSTEM.visualSystem.primaryColor.hex})\n• ${FLOWFORGE_BRAND_SYSTEM.visualSystem.secondaryColor.name} (${FLOWFORGE_BRAND_SYSTEM.visualSystem.secondaryColor.hex})\n• ${FLOWFORGE_BRAND_SYSTEM.visualSystem.accentColor.name} (${FLOWFORGE_BRAND_SYSTEM.visualSystem.accentColor.hex})`,
                    'copy_brand_system'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_brand_system' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_brand_system' ? 'Copied Specs!' : 'Copy Brand Spec'}</span>
              </button>
            </div>

            {/* Essence & Positioning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Brand Essence</span>
                <h3 className="text-lg font-bold text-white">{FLOWFORGE_BRAND_SYSTEM.essence}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The singular defining foundation that anchors all engineering operations, category positioning, and messaging.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Positioning Statement</span>
                <p className="text-sm font-medium text-slate-200 leading-relaxed italic">
                  "{FLOWFORGE_BRAND_SYSTEM.positioningStatement}"
                </p>
              </div>
            </div>

            {/* Brand Pillars */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Brand Pillars (The 5 Foundations):
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {FLOWFORGE_BRAND_SYSTEM.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">0{idx + 1}</span>
                    <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-snug">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice & Tone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Brand Voice (How We Speak):
                </span>
                <div className="flex flex-wrap gap-2">
                  {FLOWFORGE_BRAND_SYSTEM.voice.map((v, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono font-bold"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Brand Tone (Precision Contrasts):
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {FLOWFORGE_BRAND_SYSTEM.tone.map((t, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-850 text-xs">
                      <span className="text-emerald-400 font-bold">{t.trait}</span>
                      <span className="text-slate-400 text-[11px] block">{t.contrast}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual System (Colors & Typography) */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Brand Visual System (Color Palette & Typography):
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Primary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg shadow border border-slate-700 bg-[#1A3D7C]" />
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.primaryColor.name}
                      </h5>
                      <span className="text-xs font-mono text-cyan-400">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.primaryColor.hex}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    {FLOWFORGE_BRAND_SYSTEM.visualSystem.primaryColor.desc}
                  </p>
                </div>

                {/* Secondary */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg shadow border border-slate-700 bg-[#D9A441]" />
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.secondaryColor.name}
                      </h5>
                      <span className="text-xs font-mono text-amber-400">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.secondaryColor.hex}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    {FLOWFORGE_BRAND_SYSTEM.visualSystem.secondaryColor.desc}
                  </p>
                </div>

                {/* Accent */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg shadow border border-slate-700 bg-[#1FB8A6]" />
                    <div>
                      <h5 className="text-sm font-bold text-white">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.accentColor.name}
                      </h5>
                      <span className="text-xs font-mono text-teal-400">
                        {FLOWFORGE_BRAND_SYSTEM.visualSystem.accentColor.hex}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    {FLOWFORGE_BRAND_SYSTEM.visualSystem.accentColor.desc}
                  </p>
                </div>
              </div>

              {/* Typography & Vocabulary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Typography System</span>
                  <div className="space-y-1 text-xs">
                    <p className="text-slate-200">
                      <strong className="text-white">Headings:</strong> {FLOWFORGE_BRAND_SYSTEM.visualSystem.typography.headings}
                    </p>
                    <p className="text-slate-200">
                      <strong className="text-white">Body:</strong> {FLOWFORGE_BRAND_SYSTEM.visualSystem.typography.body}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Official Vocabulary</span>
                  <div className="flex flex-wrap gap-1.5">
                    {FLOWFORGE_BRAND_SYSTEM.vocabulary.map((vocab, vIdx) => (
                      <span key={vIdx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                        {vocab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 2: CATEGORY MANIFESTO */}
      {activeModule === 'manifesto' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
                  Section 2 • Category Creation Manifesto
                </span>
                <h2 className="text-xl font-bold text-white mt-1">{FLOWFORGE_CATEGORY_MANIFESTO.title}</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Defines Engineering Stability Platforms (ESP) as a global software category.
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_CATEGORY_MANIFESTO.title}\n\nPremise:\n${FLOWFORGE_CATEGORY_MANIFESTO.premise}\n\nBeliefs:\n${FLOWFORGE_CATEGORY_MANIFESTO.beliefs.map(b => `• ${b.principle}: ${b.detail}`).join('\n')}\n\nDeclaration:\n${FLOWFORGE_CATEGORY_MANIFESTO.declaration}\n\nFlowForge Role:\n${FLOWFORGE_CATEGORY_MANIFESTO.flowforgeRole}\n\nCall to Action:\n${FLOWFORGE_CATEGORY_MANIFESTO.callToAction}`,
                    'copy_manifesto'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 text-xs font-bold border border-indigo-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_manifesto' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_manifesto' ? 'Copied Manifesto!' : 'Copy Manifesto'}</span>
              </button>
            </div>

            {/* Premise Box */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-950 to-slate-950 border border-indigo-500/30 mt-6 space-y-1">
              <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">The Premise</span>
              <p className="text-base font-bold text-white leading-relaxed">
                "{FLOWFORGE_CATEGORY_MANIFESTO.premise}"
              </p>
            </div>

            {/* The 6 Core Beliefs */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                The Six Core Beliefs of Engineering Stability:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {FLOWFORGE_CATEGORY_MANIFESTO.beliefs.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{b.principle}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-7">{b.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Declaration & Category Scale */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">The Declaration</span>
                <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                  {FLOWFORGE_CATEGORY_MANIFESTO.declaration}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">FlowForge's Category Role</span>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {FLOWFORGE_CATEGORY_MANIFESTO.flowforgeRole}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 mt-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">The Mandate</span>
                <p className="text-xs font-bold text-emerald-200 mt-0.5">
                  {FLOWFORGE_CATEGORY_MANIFESTO.callToAction}
                </p>
              </div>
              <span className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-bold text-xs">
                Adopt ESP
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: EXECUTIVE BRIEFING */}
      {activeModule === 'briefing' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                  Section 3 • C-Suite Ready Narrative
                </span>
                <h2 className="text-xl font-bold text-white mt-1">FlowForge Executive Briefing</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Concise boardroom document summarizing the enterprise problem, solution, business impact, and pilot call-to-action.
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `FLOWFORGE EXECUTIVE BRIEFING\n\nExecutive Summary:\n${FLOWFORGE_EXECUTIVE_BRIEFING.executiveSummary}\n\nKey Problems:\n${FLOWFORGE_EXECUTIVE_BRIEFING.keyProblems.map(p => `• ${p.title}: ${p.desc}`).join('\n')}\n\nSolution:\n${FLOWFORGE_EXECUTIVE_BRIEFING.solution.map(s => `• ${s.title}: ${s.desc}`).join('\n')}\n\nBusiness Impact:\n${FLOWFORGE_EXECUTIVE_BRIEFING.businessImpact.map(i => `• ${i.title}: ${i.metric}`).join('\n')}\n\nWhy Now:\n${FLOWFORGE_EXECUTIVE_BRIEFING.whyNow}\n\nNext Step:\n${FLOWFORGE_EXECUTIVE_BRIEFING.nextStep}`,
                    'copy_briefing'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_briefing' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_briefing' ? 'Copied Briefing!' : 'Copy Executive Briefing'}</span>
              </button>
            </div>

            {/* Executive Summary */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 mt-6 space-y-1">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Executive Summary</span>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {FLOWFORGE_EXECUTIVE_BRIEFING.executiveSummary}
              </p>
            </div>

            {/* Problems & Solutions Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
              {/* Key Problems */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                  Key Problems in Engineering Delivery:
                </span>
                <div className="space-y-2">
                  {FLOWFORGE_EXECUTIVE_BRIEFING.keyProblems.map((prob, pIdx) => (
                    <div key={pIdx} className="p-3 bg-slate-900 rounded-lg border border-slate-850 text-xs space-y-0.5">
                      <h4 className="font-bold text-rose-200">{prob.title}</h4>
                      <p className="text-slate-400">{prob.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FlowForge Solution */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                  The FlowForge Stability OS Solution:
                </span>
                <div className="space-y-2">
                  {FLOWFORGE_EXECUTIVE_BRIEFING.solution.map((sol, sIdx) => (
                    <div key={sIdx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-850 text-xs flex items-center justify-between">
                      <span className="font-bold text-white">{sol.title}</span>
                      <span className="text-slate-400 text-[11px]">{sol.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Impact Metrics */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Quantified Business Impact:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {FLOWFORGE_EXECUTIVE_BRIEFING.businessImpact.map((imp, iIdx) => (
                  <div key={iIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <span className="text-xs font-medium text-slate-400 block">{imp.title}</span>
                    <span className="text-lg font-black text-emerald-400 block">{imp.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Now & Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Why Now</span>
                <p className="text-xs font-bold text-slate-200">{FLOWFORGE_EXECUTIVE_BRIEFING.whyNow}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Next Step</span>
                <p className="text-xs font-bold text-emerald-200">{FLOWFORGE_EXECUTIVE_BRIEFING.nextStep}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 4: SALES DECK (FULL TEXT VERSION) */}
      {activeModule === 'sales_deck' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  Section 4 • Full Text Version
                </span>
                <h2 className="text-xl font-bold text-white mt-1">FlowForge 10-Slide Sales Deck</h2>
                <p className="text-xs text-slate-400 mt-1">
                  10-slide enterprise presentation ready for customer demos, executive pitches, and founder sales calls.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
                  <button
                    onClick={() => setDeckViewMode('cards')}
                    className={`px-3 py-1.5 rounded-md font-bold transition cursor-pointer ${
                      deckViewMode === 'cards' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Presenter View
                  </button>
                  <button
                    onClick={() => setDeckViewMode('grid')}
                    className={`px-3 py-1.5 rounded-md font-bold transition cursor-pointer ${
                      deckViewMode === 'grid' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    All 10 Grid
                  </button>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      FLOWFORGE_SALES_DECK_TEXT.map(
                        s =>
                          `Slide ${s.slideNumber}: ${s.title}\n${s.subtitle || ''}\n${
                            s.bullets ? s.bullets.map(b => `• ${b}`).join('\n') : ''
                          }\n${s.content || ''}\n${s.quote || ''}`
                      ).join('\n\n---\n\n'),
                      'copy_sales_deck'
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5"
                >
                  {copiedKey === 'copy_sales_deck' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'copy_sales_deck' ? 'Copied Deck!' : 'Copy Script'}</span>
                </button>
              </div>
            </div>

            {/* PRESENTER CARDS VIEW */}
            {deckViewMode === 'cards' && (
              <div className="mt-6 space-y-6">
                {(() => {
                  const slide = FLOWFORGE_SALES_DECK_TEXT[activeSlideIndex];
                  return (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                      <div className="flex items-center justify-between pb-6 border-b border-slate-850">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                          SLIDE {slide.slideNumber} OF 10
                        </span>
                        <span className="text-xs font-mono text-slate-400">FlowForge Sales Deck</span>
                      </div>

                      <div className="py-8 space-y-4">
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                          {slide.title}
                        </h1>
                        {slide.subtitle && (
                          <p className="text-lg md:text-xl text-cyan-300 font-medium">{slide.subtitle}</p>
                        )}

                        {slide.bullets && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                            {slide.bullets.map((b, bIdx) => (
                              <div key={bIdx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 flex items-start space-x-3">
                                <span className="text-cyan-400 font-bold">&bull;</span>
                                <span className="text-sm text-slate-200">{b}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {slide.content && (
                          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300">
                            {slide.content}
                          </div>
                        )}

                        {slide.quote && (
                          <blockquote className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-base md:text-lg font-bold text-cyan-200 italic">
                            {slide.quote}
                          </blockquote>
                        )}
                      </div>

                      <div className="pt-6 border-t border-slate-850 flex items-center justify-between text-xs text-slate-400">
                        <span>CFO TAX PRO LLC (dba FlowForge) &bull; Sachse, TX</span>
                        <div className="flex items-center space-x-1">
                          {FLOWFORGE_SALES_DECK_TEXT.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => setActiveSlideIndex(dotIdx)}
                              className={`h-2 rounded-full transition-all ${
                                activeSlideIndex === dotIdx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Carousel Controls */}
                <div className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
                    disabled={activeSlideIndex === 0}
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-bold border border-slate-800 transition"
                  >
                    &larr; Previous Slide
                  </button>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-400">Slide:</span>
                    <select
                      value={activeSlideIndex}
                      onChange={e => setActiveSlideIndex(Number(e.target.value))}
                      className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-white"
                    >
                      {FLOWFORGE_SALES_DECK_TEXT.map((s, idx) => (
                        <option key={idx} value={idx}>
                          Slide {s.slideNumber}: {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => setActiveSlideIndex(prev => Math.min(FLOWFORGE_SALES_DECK_TEXT.length - 1, prev + 1))}
                    disabled={activeSlideIndex === FLOWFORGE_SALES_DECK_TEXT.length - 1}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 text-xs font-bold shadow-md shadow-cyan-500/20 transition"
                  >
                    Next Slide &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* ALL 10 GRID VIEW */}
            {deckViewMode === 'grid' && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FLOWFORGE_SALES_DECK_TEXT.map((slide, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveSlideIndex(idx);
                      setDeckViewMode('cards');
                    }}
                    className="p-5 rounded-xl bg-slate-950 border border-slate-850 hover:border-cyan-500/50 transition cursor-pointer space-y-2 flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                        SLIDE {slide.slideNumber}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                        {slide.title}
                      </h3>
                      {slide.subtitle && <p className="text-xs text-slate-400">{slide.subtitle}</p>}
                      {slide.bullets && (
                        <ul className="space-y-1 pt-1 text-[11px] text-slate-300">
                          {slide.bullets.slice(0, 3).map((b, bIdx) => (
                            <li key={bIdx} className="truncate">&bull; {b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <span className="text-[10px] text-cyan-400 font-mono mt-2 block">Click to present &rarr;</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODULE 5: WEBSITE (FULL MULTI-PAGE VERSION) */}
      {activeModule === 'website' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                  Section 5 • flowforge.ai Multi-Page Copy System
                </span>
                <h2 className="text-xl font-bold text-white mt-1">FlowForge Public Website (7 Pages)</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Complete copy architecture: Homepage + 6 sub-pages (Product, Platform, Pricing, ESA Certification, About, Contact).
                </p>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    FLOWFORGE_WEBSITE_EXPANSION_PAGES.map(
                      p =>
                        `=== ${p.navLabel.toUpperCase()} (${p.title}) ===\nTagline: ${p.tagline}\n\n${p.sections
                          .map(
                            s =>
                              `## ${s.heading}\n${s.subheading ? `${s.subheading}\n` : ''}${
                                s.body ? `${s.body}\n` : ''
                              }${s.bullets ? s.bullets.map(b => `• ${b}`).join('\n') : ''}`
                          )
                          .join('\n\n')}`
                    ).join('\n\n==============================\n\n'),
                    'copy_full_website'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-bold border border-cyan-500/30 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_full_website' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_full_website' ? 'Copied 7 Pages!' : 'Copy All Pages Copy'}</span>
              </button>
            </div>

            {/* Website Page Switcher Navigation */}
            <div className="flex items-center overflow-x-auto space-x-2 mt-4 pt-2 border-b border-slate-850 pb-3 text-xs no-scrollbar">
              {FLOWFORGE_WEBSITE_EXPANSION_PAGES.map(page => (
                <button
                  key={page.id}
                  onClick={() => setActiveWebsiteTab(page.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition whitespace-nowrap cursor-pointer ${
                    activeWebsiteTab === page.id
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white'
                  }`}
                >
                  {page.navLabel}
                </button>
              ))}
            </div>

            {/* Active Website Page Display Canvas */}
            {(() => {
              const activePage =
                FLOWFORGE_WEBSITE_EXPANSION_PAGES.find(p => p.id === activeWebsiteTab) ||
                FLOWFORGE_WEBSITE_EXPANSION_PAGES[0];
              return (
                <div className="mt-6 space-y-6">
                  {/* Page Hero Header */}
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                      Page Route: /{activePage.id === 'homepage' ? '' : activePage.id}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      {activePage.title}
                    </h2>
                    <p className="text-sm md:text-base text-cyan-300 font-medium max-w-2xl">
                      {activePage.tagline}
                    </p>
                  </div>

                  {/* Page Sections */}
                  <div className="space-y-4">
                    {activePage.sections.map((section, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-white">{section.heading}</h3>
                          {section.subheading && (
                            <span className="text-xs font-mono text-cyan-400 font-medium">
                              {section.subheading}
                            </span>
                          )}
                        </div>

                        {section.body && (
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                            {section.body}
                          </p>
                        )}

                        {section.bullets && (
                          <ul className="space-y-2 pt-2">
                            {section.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start space-x-2 text-xs md:text-sm text-slate-200">
                                <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.cta && (
                          <div className="pt-3">
                            <button className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition flex items-center space-x-1.5 cursor-pointer">
                              <span>{section.cta.label}</span>
                              <ArrowRightIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
