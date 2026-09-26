import React, { useState, useMemo } from 'react';
import {
  MASTER_BUSINESS_PLAN_CHAPTERS,
  FLOWFORGE_COMPANY_DETAILS,
  PlanChapter
} from '../data/masterBusinessPlanData';
import {
  BriefcaseIcon,
  BuildingIcon,
  MapPinIcon,
  UserIcon,
  StarIcon,
  CopyIcon,
  PrinterIcon,
  CheckIcon,
  CheckCircle2Icon,
  SearchIcon,
  ExternalLinkIcon,
  ShieldCheckIcon,
  DollarSignIcon,
  LayersIcon,
  TrendingUpIcon,
  CompassIcon,
  MegaphoneIcon,
  HandshakeIcon,
  SettingsIcon,
  AlertTriangleIcon,
  SparklesIcon,
  ChevronRightIcon,
  BookOpenIcon,
  ArrowRightIcon,
  FileTextIcon
} from 'lucide-react';

interface MasterBusinessPlanViewProps {
  onNavigateToTab?: (tab: string) => void;
}

type ViewMode = 'all_chapters' | 'executive_summary' | 'financial_modeler' | 'product_layers';

export const MasterBusinessPlanView: React.FC<MasterBusinessPlanViewProps> = ({
  onNavigateToTab
}) => {
  const [activeViewMode, setActiveViewMode] = useState<ViewMode>('all_chapters');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  // Financial calculator state
  const [pilotCount, setPilotCount] = useState<number>(12);
  const [coreCount, setCoreCount] = useState<number>(8);
  const [govCount, setGovCount] = useState<number>(5);
  const [intelCount, setIntelCount] = useState<number>(3);

  const monthlyARR = useMemo(() => {
    return (coreCount * 1500) + (govCount * 3500) + (intelCount * 6000);
  }, [coreCount, govCount, intelCount]);

  const annualARR = useMemo(() => {
    return monthlyARR * 12;
  }, [monthlyARR]);

  // Copy helper
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2500);
  };

  // Copy entire plan in Markdown
  const handleCopyEntirePlanMarkdown = () => {
    let md = `# ⭐ FLOWFORGE — MASTER BUSINESS PLAN\n`;
    md += `The complete, unified, end-to-end blueprint for building, scaling, and institutionalizing FlowForge.\n\n`;
    md += `**Company**: ${FLOWFORGE_COMPANY_DETAILS.name} (${FLOWFORGE_COMPANY_DETAILS.entity})\n`;
    md += `**Location**: ${FLOWFORGE_COMPANY_DETAILS.location}\n`;
    md += `**Founder**: ${FLOWFORGE_COMPANY_DETAILS.founder}\n`;
    md += `**Category**: ${FLOWFORGE_COMPANY_DETAILS.category}\n`;
    md += `**Mission**: ${FLOWFORGE_COMPANY_DETAILS.mission}\n\n`;
    md += `---\n\n`;

    MASTER_BUSINESS_PLAN_CHAPTERS.forEach(ch => {
      md += `## ⭐ ${ch.chapterNumber}. ${ch.title.toUpperCase()}\n`;
      md += `${ch.verbatimExcerpt}\n\n`;
    });

    handleCopyText(md, "Complete Master Business Plan (Markdown)");
  };

  const handlePrint = () => {
    window.print();
  };

  // Filtered chapters
  const filteredChapters = useMemo(() => {
    return MASTER_BUSINESS_PLAN_CHAPTERS.filter(ch => {
      const matchesChapter = selectedChapterId === 'all' || ch.id === selectedChapterId;
      if (!matchesChapter) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        ch.title.toLowerCase().includes(q) ||
        ch.tagline.toLowerCase().includes(q) ||
        ch.summary.toLowerCase().includes(q) ||
        ch.verbatimExcerpt.toLowerCase().includes(q) ||
        ch.subsections.some(s => s.title.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q))
      );
    });
  }, [selectedChapterId, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Toast Notification */}
      {copiedLabel && (
        <div className="fixed bottom-6 right-6 z-50 bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 border border-amber-300 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckIcon className="w-4 h-4 stroke-[3]" />
          <span className="text-xs">Copied &quot;{copiedLabel}&quot; to clipboard</span>
        </div>
      )}

      {/* Top Header Ribbon */}
      <div className="bg-slate-900 border-b border-slate-800/80 sticky top-0 z-20 backdrop-blur-md bg-slate-900/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              <BriefcaseIcon className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  MASTER STRATEGIC ARTIFACT
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  15 Unified Chapters
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                FlowForge Master Business Plan
              </h1>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            <button
              onClick={handleCopyEntirePlanMarkdown}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
            >
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy Full Plan (MD)</span>
            </button>
            <button
              onClick={() => handleCopyText(JSON.stringify(MASTER_BUSINESS_PLAN_CHAPTERS, null, 2), "Plan JSON Schema")}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold border border-slate-700 transition flex items-center space-x-1.5"
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Copy JSON</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold border border-slate-700 transition flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full text-xs font-semibold">
            <button
              onClick={() => setActiveViewMode('all_chapters')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activeViewMode === 'all_chapters'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <BookOpenIcon className="w-3.5 h-3.5" />
              <span>All 15 Chapters</span>
            </button>

            <button
              onClick={() => setActiveViewMode('executive_summary')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activeViewMode === 'executive_summary'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <StarIcon className="w-3.5 h-3.5" />
              <span>Executive Brief</span>
            </button>

            <button
              onClick={() => setActiveViewMode('financial_modeler')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activeViewMode === 'financial_modeler'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <DollarSignIcon className="w-3.5 h-3.5" />
              <span>Pricing &amp; ARR Modeler</span>
            </button>

            <button
              onClick={() => setActiveViewMode('product_layers')}
              className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap flex items-center space-x-1.5 ${
                activeViewMode === 'product_layers'
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <LayersIcon className="w-3.5 h-3.5" />
              <span>5-Layer Architecture</span>
            </button>
          </div>

          {/* Search Filter */}
          <div className="relative w-full sm:w-64">
            <SearchIcon className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search 15 chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-8 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Master Corporate Overview Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-amber-500/30">
                <StarIcon className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>TOTAL BUSINESS BLUEPRINT</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-amber-300 border border-amber-500/20">
                {FLOWFORGE_COMPANY_DETAILS.entity}
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                ⭐ FLOWFORGE &mdash; MASTER BUSINESS PLAN
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                The complete, unified, end‑to‑end blueprint for building, scaling, and institutionalizing FlowForge as the global Stability OS for software engineering.
              </p>
            </div>

            {/* Corporate Profile Metadata Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <BuildingIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Entity</span>
                </div>
                <div className="text-xs font-bold text-white mt-1 truncate" title={FLOWFORGE_COMPANY_DETAILS.entity}>
                  CFO TAX PRO LLC
                </div>
                <div className="text-[10px] text-amber-400/80 font-mono">dba FlowForge</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Location</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  Sachse, TX
                </div>
                <div className="text-[10px] text-slate-400">Dallas-Fort Worth</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <UserIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Founder</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  Chuck
                </div>
                <div className="text-[10px] text-slate-400">Architect &amp; Lead</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <CompassIcon className="w-3.5 h-3.5 text-teal-400" />
                  <span>Category</span>
                </div>
                <div className="text-xs font-bold text-teal-300 mt-1 truncate">
                  ESP
                </div>
                <div className="text-[10px] text-slate-400">Engineering Stability</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <LayersIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Product</span>
                </div>
                <div className="text-xs font-bold text-cyan-300 mt-1">
                  Stability OS
                </div>
                <div className="text-[10px] text-slate-400">5-Layer Stack</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <StarIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mission</span>
                </div>
                <div className="text-xs font-bold text-emerald-300 mt-1 truncate" title={FLOWFORGE_COMPANY_DETAILS.mission}>
                  Global Stability
                </div>
                <div className="text-[10px] text-slate-400">Worldwide standard</div>
              </div>
            </div>

            {/* Quick jump chapter buttons */}
            <div className="flex items-center flex-wrap gap-1.5 pt-2">
              <span className="text-xs font-bold text-slate-400 mr-1">Quick Jump:</span>
              <button
                onClick={() => setSelectedChapterId('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  selectedChapterId === 'all'
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All 15 Chapters
              </button>
              {MASTER_BUSINESS_PLAN_CHAPTERS.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    setActiveViewMode('all_chapters');
                  }}
                  className={`px-2 py-1 rounded-lg text-xs transition font-mono ${
                    selectedChapterId === ch.id
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                  title={`${ch.chapterNumber}. ${ch.title}`}
                >
                  Ch.{ch.chapterNumber}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: ALL 15 CHAPTERS (DEFAULT VIEW) */}
        {/* ========================================================================= */}
        {activeViewMode === 'all_chapters' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {filteredChapters.map(chapter => (
              <div
                key={chapter.id}
                id={chapter.id}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden"
              >
                {/* Chapter Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                        {chapter.chapterNumber}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                        ⭐ {chapter.chapterNumber}. {chapter.title.toUpperCase()}
                      </span>
                      {chapter.badgeText && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                          {chapter.badgeText}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                      {chapter.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {chapter.tagline}
                    </p>
                  </div>

                  {/* Chapter Actions */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleCopyText(`⭐ ${chapter.chapterNumber}. ${chapter.title.toUpperCase()}\n\n${chapter.verbatimExcerpt}`, `Chapter ${chapter.chapterNumber} Script`)}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition flex items-center space-x-1.5"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Chapter</span>
                    </button>
                  </div>
                </div>

                {/* Key Metrics Ribbon (if available) */}
                {chapter.metrics && chapter.metrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {chapter.metrics.map(m => (
                      <div key={m.label} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                        <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                        <span className="text-lg font-black text-white block mt-0.5">{m.value}</span>
                        {m.detail && <span className="text-[10px] text-amber-400/80">{m.detail}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Subsections Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
                  {/* Left Column: Formatted Subsections */}
                  <div className="space-y-4">
                    {chapter.subsections.map((sub, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2.5">
                        <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                          {sub.title}
                        </h4>
                        {sub.description && (
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {sub.description}
                          </p>
                        )}
                        {sub.items && (
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {sub.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start space-x-2">
                                <span className="text-amber-400 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.tableData && (
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border border-slate-800">
                              <thead className="bg-slate-900 text-slate-400 font-mono text-[10px]">
                                <tr>
                                  {Object.keys(sub.tableData[0]).map(k => (
                                    <th key={k} className="p-2 border-b border-slate-800">{k}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/60">
                                {sub.tableData.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-slate-900/50">
                                    {Object.values(row).map((val, cIdx) => (
                                      <td key={cIdx} className="p-2 text-slate-300 font-medium">
                                        {val}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {sub.callout && (
                          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                            {sub.callout}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Verbatim Canonical Text */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                          Canonical Chapter Script &amp; Text
                        </span>
                        <span className="text-[10px] text-amber-400 font-mono">Verbatim Master</span>
                      </div>
                      <pre className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">
                        {chapter.verbatimExcerpt}
                      </pre>
                    </div>

                    {/* Key Takeaway Callout */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/30">
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wide block mb-1">
                        Core Takeaway
                      </span>
                      <p className="text-xs font-medium text-slate-200">
                        {chapter.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: EXECUTIVE SUMMARY & ONE-PAGER */}
        {/* ========================================================================= */}
        {activeViewMode === 'executive_summary' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                  EXECUTIVE BRIEF &bull; ONE-PAGE SYNOPSIS
                </span>
                <h2 className="text-2xl font-black text-white pt-1">
                  FlowForge: The Stability OS for Modern Software Delivery
                </h2>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  For decades, software engineering has built tools for code automation, pipelines, and server observability &mdash; but left the human capacity and operational stability layer unmeasured. FlowForge created the <strong>Engineering Stability Platform (ESP)</strong> category to fill this critical vacuum.
                </p>
              </div>

              {/* 3 Executive Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
                    <AlertTriangleIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">The Core Problem</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Engineering teams operate without stability systems, leading to burnout cycles, slipped milestones, critical path fragility, volatility spikes, and zero slack reserves.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
                    <ShieldCheckIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">The Stability OS Solution</h4>
                  <p className="text-slate-300 leading-relaxed">
                    9 integrated primitives &mdash; from real-time Stability Score (0–100) and Slack Liquidity to RulePack v1 and closed-loop autonomy &mdash; stabilizing engineering teams automatically.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    <DollarSignIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">The Commercial Engine</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Frictionless 30-day free ESA audit pilot expanding systematically into Core ($1.5k/mo), Governance ($3.5k/mo), and Intelligence ($6k/mo) tiers with an 84%+ SaaS gross margin.
                  </p>
                </div>
              </div>

              {/* 5-Year Vision Timeline Strip */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                  5-Year Strategic Evolution
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-mono text-[10px] text-blue-400 font-bold block">Year 1</span>
                    <span className="font-bold text-white block mt-0.5">Category Creation</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">ESP category canon, 100+ audits</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-mono text-[10px] text-indigo-400 font-bold block">Year 2</span>
                    <span className="font-bold text-white block mt-0.5">Enterprise Penetration</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">RulePack v1 mid-market adoption</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-mono text-[10px] text-teal-400 font-bold block">Year 3</span>
                    <span className="font-bold text-white block mt-0.5">Autonomy Adoption</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Closed-loop load rebalancing</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-mono text-[10px] text-purple-400 font-bold block">Year 4</span>
                    <span className="font-bold text-white block mt-0.5">Intelligence Dominance</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Bayesian board risk standard</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold block">Year 5</span>
                    <span className="font-bold text-white block mt-0.5">Global Standardization</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">The de facto Stability OS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: FINANCIAL & ARR PRICING MODELER */}
        {/* ========================================================================= */}
        {activeViewMode === 'financial_modeler' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                  CHAPTER 7 &bull; BUSINESS MODEL &amp; ARR PROJECTION CALCULATOR
                </span>
                <h2 className="text-2xl font-black text-white pt-1">
                  FlowForge Subscription Economics &amp; Pricing Modeler
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Test custom cluster assumptions across the 4 FlowForge tiers: Pilot (Free), Stability Core ($1,500/mo), Governance + Autonomy ($3,500/mo), and Full Intelligence ($6,000/mo).
                </p>
              </div>

              {/* Live ARR Tally Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-slate-400">Monthly Recurring Revenue</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 block mt-1">
                    ${monthlyARR.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Across {coreCount + govCount + intelCount} paying clusters</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-slate-400">Annualized Run-Rate (ARR)</span>
                  <span className="text-2xl sm:text-3xl font-black text-white block mt-1">
                    ${annualARR.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">84% Gross Margin = ${(annualARR * 0.84).toLocaleString()} GM</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono text-slate-400">Active Free Pilots</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 block mt-1">
                    {pilotCount}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Pipeline at 85% conversion = ${(pilotCount * 0.85 * 3500 * 12).toLocaleString()} potential ARR</span>
                </div>
              </div>

              {/* Interactive Tier Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Pilot Tier */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Pilot Tier</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400">FREE</span>
                  </div>
                  <div className="text-xs text-slate-400">30-day onboarding + ESA audit</div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Active Pilots:</span>
                      <span className="font-bold text-amber-400">{pilotCount}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pilotCount}
                      onChange={(e) => setPilotCount(parseInt(e.target.value))}
                      className="w-full accent-amber-400"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">Generates baseline telemetry and establishes the commercial Land motion.</p>
                </div>

                {/* Core Tier */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Stability Core</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400">$1,500/mo</span>
                  </div>
                  <div className="text-xs text-slate-400">Score, Slack, Volatility, Critical Path</div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Subscribers:</span>
                      <span className="font-bold text-blue-400">{coreCount}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={coreCount}
                      onChange={(e) => setCoreCount(parseInt(e.target.value))}
                      className="w-full accent-blue-400"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Subtotal: ${(coreCount * 1500 * 12).toLocaleString()}/yr
                  </div>
                </div>

                {/* Governance + Autonomy Tier */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Governance + Autonomy</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-400">$3,500/mo</span>
                  </div>
                  <div className="text-xs text-slate-400">RulePack + Autonomy Engine</div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Subscribers:</span>
                      <span className="font-bold text-indigo-400">{govCount}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={govCount}
                      onChange={(e) => setGovCount(parseInt(e.target.value))}
                      className="w-full accent-indigo-400"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Subtotal: ${(govCount * 3500 * 12).toLocaleString()}/yr
                  </div>
                </div>

                {/* Full Intelligence Tier */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Full Intelligence</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400">$6,000/mo</span>
                  </div>
                  <div className="text-xs text-slate-400">Forecasting, Burnout Curve, ESA</div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Subscribers:</span>
                      <span className="font-bold text-emerald-400">{intelCount}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={intelCount}
                      onChange={(e) => setIntelCount(parseInt(e.target.value))}
                      className="w-full accent-emerald-400"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Subtotal: ${(intelCount * 6000 * 12).toLocaleString()}/yr
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 4: PRODUCT 5-LAYER ARCHITECTURE */}
        {/* ========================================================================= */}
        {activeViewMode === 'product_layers' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                  CHAPTER 5 &bull; COMPLETE SYSTEM STACK
                </span>
                <h2 className="text-2xl font-black text-white pt-1">
                  The 5-Layer Engineering Stability Architecture
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  How FlowForge transforms raw human and pipeline telemetry into closed-loop autonomic load rebalancing and institutional board certification.
                </p>
              </div>

              {/* Stack Visualization */}
              <div className="space-y-3">
                {[
                  {
                    layer: 'Layer 5 — Certification',
                    color: 'from-emerald-950/60 to-slate-900 border-emerald-500/40 text-emerald-400',
                    badge: 'Governance & Board Audit',
                    items: ['ESA (Enterprise Stability Audit)', 'Stability Levels: Stable → Governed → Autonomous → Intelligent']
                  },
                  {
                    layer: 'Layer 4 — Intelligence',
                    color: 'from-teal-950/60 to-slate-900 border-teal-500/40 text-teal-400',
                    badge: 'Bayesian Forward Inference',
                    items: ['Stability Forecasting (7/14/30 days)', 'Burnout Curve Prediction', 'Delivery Risk Forecasting', 'Fragility Detection']
                  },
                  {
                    layer: 'Layer 3 — Autonomy',
                    color: 'from-amber-950/60 to-slate-900 border-amber-500/40 text-amber-400',
                    badge: 'Closed-Loop Self-Stabilization',
                    items: ['Load Rebalancing', 'Slack Redistribution (FFX)', 'Burnout Mitigation', 'Critical Path Stabilization', 'Delivery Acceleration']
                  },
                  {
                    layer: 'Layer 2 — Governance',
                    color: 'from-indigo-950/60 to-slate-900 border-indigo-500/40 text-indigo-400',
                    badge: 'Statutory Gates & RulePack v1',
                    items: ['Slack Floor (15% reserve)', 'Volatility Caps (18% variance)', 'Critical Path Protection (6h review limit)', 'Burnout Thresholds', 'Delivery Risk Limits']
                  },
                  {
                    layer: 'Layer 1 — Measurement',
                    color: 'from-blue-950/60 to-slate-900 border-blue-500/40 text-blue-400',
                    badge: 'Raw Telemetry & Baseline',
                    items: ['Load Telemetry', 'Slack Liquidity', 'Volatility Index', 'Critical Path Mapping (DAG)', 'Burnout Index']
                  }
                ].map((l, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl bg-gradient-to-r ${l.color} border space-y-2.5`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-white">{l.layer}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300">
                        {l.badge}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {l.items.map(item => (
                        <span key={item} className="px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800/80 text-xs text-slate-200 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
