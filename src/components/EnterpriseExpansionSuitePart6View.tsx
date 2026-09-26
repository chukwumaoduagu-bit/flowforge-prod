import React, { useState, useEffect } from 'react';
import {
  MicIcon,
  SparklesIcon,
  CheckCircleIcon,
  LayersIcon,
  BookOpenIcon,
  UsersIcon,
  TrendingUpIcon,
  AwardIcon,
  DownloadIcon,
  CopyIcon,
  CalendarIcon,
  CheckIcon,
  ShieldCheckIcon,
  ZapIcon,
  ClockIcon,
  ChevronRightIcon,
  FileTextIcon,
  GlobeIcon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  BriefcaseIcon,
  AlertTriangleIcon,
  GraduationCapIcon,
  CpuIcon,
  SlidersIcon,
  ExternalLinkIcon
} from 'lucide-react';

import {
  FLOWFORGE_ANALYST_KEYNOTE,
  FLOWFORGE_AUTONOMOUS_ROADMAP,
  FLOWFORGE_PARTNER_SUMMIT,
  FLOWFORGE_CATEGORY_BIBLE,
  type AnalystKeynoteSection,
  type RoadmapPhase,
  type PartnerSummitSession,
  type CategoryBibleChapter
} from '../data/expansionSuitePart6Data';

interface EnterpriseExpansionSuitePart6Props {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToTotalBusinessArchitecture?: () => void;
}

export const EnterpriseExpansionSuitePart6View: React.FC<EnterpriseExpansionSuitePart6Props> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart5,
  onNavigateToTotalBusinessArchitecture
}) => {
  // Navigation across the 4 pillars of Part VI
  const [activeTab, setActiveTab] = useState<'analyst_keynote' | 'roadmap' | 'partner_summit' | 'category_bible'>('analyst_keynote');

  // Universal copy toast
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  // --- PILLAR 1: ANALYST KEYNOTE STATE ---
  const [activeSpeechSecId, setActiveSpeechSecId] = useState<string>('analyst-sec-1');
  const [teleprompterSpeed, setTeleprompterSpeed] = useState<number>(1);
  const [presentationMode, setPresentationMode] = useState<'split' | 'teleprompter' | 'transcript'>('split');
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [speechTimerSeconds, setSpeechTimerSeconds] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSpeechTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- PILLAR 2: AUTONOMOUS ROADMAP STATE ---
  const [selectedPhaseNumber, setSelectedPhaseNumber] = useState<number>(1);
  const selectedPhase: RoadmapPhase =
    FLOWFORGE_AUTONOMOUS_ROADMAP.phases.find(p => p.phaseNumber === selectedPhaseNumber) ||
    FLOWFORGE_AUTONOMOUS_ROADMAP.phases[0];

  // --- PILLAR 3: PARTNER SUMMIT STATE ---
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [activeSubTab, setActiveSubTab] = useState<'sessions' | 'workshops' | 'certifications' | 'awards' | 'deliverables'>('sessions');

  const filteredSessions: PartnerSummitSession[] =
    selectedTrack === 'All'
      ? FLOWFORGE_PARTNER_SUMMIT.agendaSessions
      : FLOWFORGE_PARTNER_SUMMIT.agendaSessions.filter(s => s.track === selectedTrack);

  // --- PILLAR 4: CATEGORY BIBLE STATE ---
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(1);
  const [bibleViewMode, setBibleViewMode] = useState<'reader' | 'maturity' | 'standards'>('reader');
  const selectedChapter: CategoryBibleChapter =
    FLOWFORGE_CATEGORY_BIBLE.chapters.find(c => c.chapterNumber === selectedChapterNumber) ||
    FLOWFORGE_CATEGORY_BIBLE.chapters[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* GLOBAL HEADER BAR */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-indigo-500 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 font-black text-lg">
              FF
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/60">
                  Part VI • Enterprise Institutionalization
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">| Standard ESP Reference Platform</span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                FlowForge Analyst Keynote, Autonomous Roadmap, Partner Summit & Category Bible
              </h1>
            </div>
          </div>

          {/* Cross-Suite & Utility Actions */}
          <div className="flex flex-wrap items-center gap-2 self-end md:self-auto">
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition cursor-pointer flex items-center space-x-1"
              >
                <SlidersIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Stability OS Core</span>
              </button>
            )}
            {onNavigateToPart5 && (
              <button
                onClick={onNavigateToPart5}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition cursor-pointer flex items-center space-x-1"
              >
                <span>&larr; Part V: Keynote & Sales</span>
              </button>
            )}
            {onNavigateToTotalBusinessArchitecture && (
              <button
                onClick={onNavigateToTotalBusinessArchitecture}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/20 transition cursor-pointer flex items-center space-x-1"
              >
                <span>Total Business Architecture &rarr;</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <DownloadIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export Suite</span>
            </button>
          </div>
        </div>

        {/* PILLAR NAVIGATION TABS */}
        <div className="max-w-7xl mx-auto mt-3 pt-2 border-t border-slate-800/60 flex items-center space-x-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'analyst_keynote', label: '1. Analyst Keynote', icon: MicIcon, badge: 'Gartner / Forrester' },
            { id: 'roadmap', label: '2. Autonomous Roadmap', icon: TrendingUpIcon, badge: '24-Month Phases' },
            { id: 'partner_summit', label: '3. Global Partner Summit', icon: UsersIcon, badge: 'Austin / SF' },
            { id: 'category_bible', label: '4. ESP Category Bible', icon: BookOpenIcon, badge: '7 Chapters' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
        {/* =========================================================================
            PILLAR 1: FLOWFORGE ANALYST KEYNOTE
        ========================================================================= */}
        {activeTab === 'analyst_keynote' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Briefing Card */}
            <div className="rounded-2xl border border-cyan-800/40 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/30 p-5 md:p-6 shadow-xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
                      Executive Analyst Briefing Keynote
                    </span>
                    <span className="text-xs text-slate-400">Target Audience: Gartner • Forrester • IDC • RedMonk</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {FLOWFORGE_ANALYST_KEYNOTE.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    {FLOWFORGE_ANALYST_KEYNOTE.subTitle} — Delivered by{' '}
                    <span className="text-cyan-400 font-semibold">{FLOWFORGE_ANALYST_KEYNOTE.speaker}</span>
                  </p>
                </div>

                {/* Stage Controls */}
                <div className="flex items-center space-x-3 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800">
                  <div className="text-center pr-3 border-r border-slate-800">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Stage Clock</div>
                    <div className="text-lg font-mono font-bold text-cyan-400">{formatTimer(speechTimerSeconds)}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
                      title={isTimerRunning ? 'Pause' : 'Start'}
                    >
                      {isTimerRunning ? <PauseIcon className="w-4 h-4 text-amber-400" /> : <PlayIcon className="w-4 h-4 text-emerald-400" />}
                    </button>
                    <button
                      onClick={() => {
                        setIsTimerRunning(false);
                        setSpeechTimerSeconds(0);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition cursor-pointer"
                      title="Reset Timer"
                    >
                      <RotateCcwIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* View Mode Selector */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-slate-400">Presentation Mode:</span>
                  {(['split', 'teleprompter', 'transcript'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setPresentationMode(mode)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                        presentationMode === mode
                          ? 'bg-cyan-500 text-slate-950 font-extrabold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const fullSpeech = FLOWFORGE_ANALYST_KEYNOTE.sections
                        .map(s => `[${s.timeCode}] ${s.title}\n\n${s.speakerScript.join('\n\n')}`)
                        .join('\n\n---\n\n');
                      handleCopy(fullSpeech, 'full_analyst_keynote');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 text-xs font-bold border border-cyan-800/60 transition cursor-pointer flex items-center space-x-1.5"
                  >
                    {copiedKey === 'full_analyst_keynote' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'full_analyst_keynote' ? 'Keynote Copied!' : 'Copy Full Speech'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* HISTORICAL GAP SYNTHESIS GRID (The Analyst Insight) */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-cyan-400" />
                    The Analyst Insight: 20 Years of Software Delivery & The Missing Layer
                  </h3>
                  <p className="text-xs text-slate-400">
                    Why DevOps, Observability, Agile, and AI failed to address the core human & operational instability.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {FLOWFORGE_ANALYST_KEYNOTE.analystInsight.historicalGaps.map((gap, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                        <span>{gap.era}</span>
                        <span className="text-cyan-400 font-semibold">{gap.system}</span>
                      </div>
                      <div className="text-xs text-emerald-300 font-medium mb-2">
                        ✓ {gap.breakthrough}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Critical Unaddressed Gap:</div>
                      <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">{gap.criticalUnaddressedGap}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 font-medium text-center">
                &ldquo;{FLOWFORGE_ANALYST_KEYNOTE.analystInsight.synthesis}&rdquo;
              </div>
            </div>

            {/* PRESENTATION CONTAINER */}
            {presentationMode === 'split' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Section Index / Navigator */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                    Speech Agenda & Sections (22 Min)
                  </div>
                  {FLOWFORGE_ANALYST_KEYNOTE.sections.map((sec, idx) => {
                    const isSelected = activeSpeechSecId === sec.id;
                    return (
                      <div
                        key={sec.id}
                        onClick={() => setActiveSpeechSecId(sec.id)}
                        className={`p-3.5 rounded-xl border transition cursor-pointer text-left ${
                          isSelected
                            ? 'bg-slate-800 border-cyan-500/80 shadow-lg shadow-cyan-950/30'
                            : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-mono text-cyan-400 font-bold">{sec.timeCode}</span>
                          <span className="text-[11px] text-slate-400">Part {idx + 1}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-snug">{sec.title}</h4>
                        <div className="mt-2 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 truncate max-w-[200px]">{sec.visualSlide.title}</span>
                          <ChevronRightIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                        </div>
                      </div>
                    );
                  })}

                  {/* Analyst Defusal Card */}
                  {(() => {
                    const currentSec = FLOWFORGE_ANALYST_KEYNOTE.sections.find(s => s.id === activeSpeechSecId);
                    if (!currentSec) return null;
                    return (
                      <div className="mt-4 p-4 rounded-xl border border-amber-800/40 bg-amber-950/20">
                        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                          <ShieldCheckIcon className="w-4 h-4" />
                          <span>Analyst Objection Defusal</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-200 mb-1">
                          {currentSec.analystDefusalQandA.sourceAnalyst}:
                        </div>
                        <p className="text-xs italic text-slate-300 mb-2">
                          {currentSec.analystDefusalQandA.question}
                        </p>
                        <div className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 leading-relaxed">
                          <span className="text-cyan-400 font-bold">Defusal Strategy: </span>
                          {currentSec.analystDefusalQandA.defusalAnswer}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Speaker Stage Display + Visual Slide */}
                <div className="lg:col-span-8 space-y-4">
                  {(() => {
                    const currentSec =
                      FLOWFORGE_ANALYST_KEYNOTE.sections.find(s => s.id === activeSpeechSecId) ||
                      FLOWFORGE_ANALYST_KEYNOTE.sections[0];
                    return (
                      <>
                        {/* Slide Projection Canvas */}
                        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl relative overflow-hidden">
                          <div className="absolute top-3 right-4 flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>STAGE SCREEN 1 (16:9 PROJECTION)</span>
                          </div>

                          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                            {currentSec.timeCode} • {FLOWFORGE_ANALYST_KEYNOTE.title}
                          </div>
                          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">
                            {currentSec.visualSlide.title}
                          </h3>
                          <p className="text-xs text-slate-400 mb-4">{currentSec.visualSlide.subtext}</p>

                          {/* Graphical Schematic */}
                          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-cyan-300 leading-relaxed shadow-inner">
                            {currentSec.visualSlide.diagramContent}
                          </div>
                        </div>

                        {/* Speaker's Teleprompter Track */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div className="flex items-center space-x-2">
                              <MicIcon className="w-4 h-4 text-cyan-400" />
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                Chuck’s Stage Teleprompter Track
                              </span>
                            </div>
                            <button
                              onClick={() => handleCopy(currentSec.speakerScript.join('\n\n'), `sec_${currentSec.id}`)}
                              className="text-xs text-slate-400 hover:text-cyan-300 flex items-center space-x-1 transition cursor-pointer"
                            >
                              <CopyIcon className="w-3.5 h-3.5" />
                              <span>{copiedKey === `sec_${currentSec.id}` ? 'Copied' : 'Copy Section'}</span>
                            </button>
                          </div>

                          <div className="space-y-3 text-slate-200 text-sm md:text-base leading-relaxed font-sans">
                            {currentSec.speakerScript.map((paragraph, pIdx) => (
                              <p key={pIdx} className="leading-relaxed text-slate-200">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* FULL TRANSCRIPT MODE */}
            {presentationMode === 'transcript' && (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 space-y-8">
                <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Continuous Stage Delivery Transcript</h3>
                    <p className="text-xs text-slate-400 mt-1">Full verbatim script prepared for analyst research packs</p>
                  </div>
                  <button
                    onClick={() => {
                      const fullSpeech = FLOWFORGE_ANALYST_KEYNOTE.sections
                        .map(s => `${s.title.toUpperCase()}\n(${s.timeCode})\n\n${s.speakerScript.join('\n\n')}`)
                        .join('\n\n====================\n\n');
                      handleCopy(fullSpeech, 'full_transcript_text');
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition cursor-pointer flex items-center space-x-1.5"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'full_transcript_text' ? 'Copied All!' : 'Copy Entire Transcript'}</span>
                  </button>
                </div>

                {FLOWFORGE_ANALYST_KEYNOTE.sections.map((sec, idx) => (
                  <div key={sec.id} className="space-y-3 pt-2">
                    <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400">
                      <span className="font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                        {sec.timeCode}
                      </span>
                      <span className="text-slate-400 font-sans font-bold text-sm text-white">{sec.title}</span>
                    </div>
                    <div className="space-y-2 text-slate-200 text-sm md:text-base leading-relaxed pl-3 border-l-2 border-slate-800">
                      {sec.speakerScript.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TELEPROMPTER MODE */}
            {presentationMode === 'teleprompter' && (
              <div className="rounded-2xl border border-cyan-500/50 bg-slate-950 p-8 md:p-12 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                      LIVE STAGE TELEPROMPTER • BROADCAST STREAM
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">Pacing Speed:</span>
                    {[1, 1.5, 2].map(speed => (
                      <button
                        key={speed}
                        onClick={() => setTeleprompterSpeed(speed)}
                        className={`px-2.5 py-1 rounded text-xs font-bold ${
                          teleprompterSpeed === speed ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl text-slate-200 font-sans leading-relaxed tracking-wide">
                  {FLOWFORGE_ANALYST_KEYNOTE.sections.map((sec, idx) => (
                    <div key={sec.id} className="space-y-4 pt-4 border-t border-slate-900">
                      <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                        [{sec.timeCode}] {sec.title}
                      </div>
                      {sec.speakerScript.map((para, pIdx) => (
                        <p key={pIdx} className="text-slate-100 hover:text-cyan-200 transition-colors">
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* THE 7 SOVEREIGN CAPABILITIES OF THE STABILITY OS */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-base font-bold text-white mb-1">
                {FLOWFORGE_ANALYST_KEYNOTE.theStabilityOS.headline}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                The technical primitives that formalize Engineering Stability Platforms (ESP) as a sovereign enterprise category.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {FLOWFORGE_ANALYST_KEYNOTE.theStabilityOS.capabilities.map((cap, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400" />
                        {cap.name}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800/60">
                        Pillar {idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-300">{cap.metricOrProtocol}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{cap.categoryImpact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE CALL TO ACTION & RESEARCH STEPS */}
            <div className="rounded-2xl border border-cyan-800/40 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase font-bold text-cyan-400 tracking-wider">The Analyst Call to Action</div>
                  <h4 className="text-lg font-bold text-white">
                    {FLOWFORGE_ANALYST_KEYNOTE.callToAction.closingHook}
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300">
                    {FLOWFORGE_ANALYST_KEYNOTE.callToAction.analystActionSteps.map((step, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleCopy(FLOWFORGE_ANALYST_KEYNOTE.callToAction.analystActionSteps.join('\n'), 'analyst_cta')}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center space-x-1.5"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'analyst_cta' ? 'Copied Action Steps' : 'Copy Analyst Action Steps'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PILLAR 2: AUTONOMOUS ENGINEERING ROADMAP
        ========================================================================= */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Banner */}
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 uppercase tracking-wider">
                      Strategic Transformation Blueprint
                    </span>
                    <span className="text-xs text-slate-400">Horizon: {FLOWFORGE_AUTONOMOUS_ROADMAP.horizon}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {FLOWFORGE_AUTONOMOUS_ROADMAP.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    {FLOWFORGE_AUTONOMOUS_ROADMAP.subTitle}
                  </p>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Target Outcome</div>
                  <div className="text-xs text-cyan-300 font-semibold max-w-xs mt-0.5">
                    Autonomous self-stabilizing queues with 90%+ on-time predictability
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE SELECTOR TIMELINE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {FLOWFORGE_AUTONOMOUS_ROADMAP.phases.map(phase => {
                const isSelected = selectedPhaseNumber === phase.phaseNumber;
                return (
                  <button
                    key={phase.phaseNumber}
                    onClick={() => setSelectedPhaseNumber(phase.phaseNumber)}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-950/40'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-cyan-400 font-bold">P{phase.phaseNumber}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{phase.timeframe}</span>
                      </div>
                      <div className="text-sm font-extrabold text-white leading-tight mb-1">{phase.name.split('—')[1]}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-2">{phase.tagline}</div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                        {phase.focusCapabilities.length} Capabilities
                      </span>
                      <ChevronRightIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* SELECTED PHASE DEEP DIVE */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedPhase.timeframe} • Phase {selectedPhase.phaseNumber}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white">{selectedPhase.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{selectedPhase.theme}</p>
                </div>
                <button
                  onClick={() => {
                    const phaseText = `${selectedPhase.name} (${selectedPhase.timeframe})\n\nTHEME: ${selectedPhase.theme}\n\nCAPABILITIES:\n${selectedPhase.focusCapabilities.map(c => `- ${c.name}: ${c.description} [${c.metricThreshold}]`).join('\n')}\n\nEXIT MILESTONE: ${selectedPhase.exitMilestone}`;
                    handleCopy(phaseText, `phase_${selectedPhase.phaseNumber}`);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                >
                  <CopyIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{copiedKey === `phase_${selectedPhase.phaseNumber}` ? 'Copied Phase' : 'Copy Phase Spec'}</span>
                </button>
              </div>

              {/* Focus Capabilities Grid */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <ZapIcon className="w-4 h-4 text-cyan-400" />
                  <span>Core Capability Unlocks ({selectedPhase.focusCapabilities.length})</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {selectedPhase.focusCapabilities.map((cap, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950/70 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-white mb-1">{cap.name}</div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-2">{cap.description}</p>
                      </div>
                      <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300 bg-cyan-950/30 px-2 py-1 rounded">
                        {cap.metricThreshold}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Invariants & Operational Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Invariants */}
                <div className="p-4 rounded-xl border border-emerald-800/40 bg-emerald-950/20 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheckIcon className="w-4 h-4" />
                    <span>Statutory Invariants</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedPhase.statutoryInvariants.map((inv, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{inv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="p-4 rounded-xl border border-indigo-800/40 bg-indigo-950/20 space-y-2">
                  <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <FileTextIcon className="w-4 h-4" />
                    <span>Operational Deliverables</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedPhase.operationalDeliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckIcon className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exit Milestone & Risk Callout */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">Phase Exit Milestone:</div>
                  <div className="text-xs font-semibold text-white mt-0.5">{selectedPhase.exitMilestone}</div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">Critical Risk If Skipped:</div>
                  <div className="text-xs text-slate-400 mt-0.5 max-w-sm">{selectedPhase.riskIfSkipped}</div>
                </div>
              </div>
            </div>

            {/* ARCHITECTURAL WORKLOAD EVOLUTION TABLE */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CpuIcon className="w-4 h-4 text-cyan-400" />
                Human Workload vs. Autonomous Intervention Across the 5 Phases
              </h3>
              <p className="text-xs text-slate-400">
                How FlowForge progressively cuts management meeting overhead from 12 hours/week to self-healing autonomy.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                      <th className="py-2.5 px-3">Stage</th>
                      <th className="py-2.5 px-3">Human Workload</th>
                      <th className="py-2.5 px-3">Autonomous Action</th>
                      <th className="py-2.5 px-3">Stability Guarantee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-sans">
                    {FLOWFORGE_AUTONOMOUS_ROADMAP.architectureEvolution.map((evo, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition">
                        <td className="py-3 px-3 font-bold text-white whitespace-nowrap">{evo.stage}</td>
                        <td className="py-3 px-3 text-rose-300/90">{evo.humanWorkload}</td>
                        <td className="py-3 px-3 text-cyan-300">{evo.autonomousIntervention}</td>
                        <td className="py-3 px-3 text-emerald-300 font-medium">{evo.stabilityGuarantee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PILLAR 3: FLOWFORGE GLOBAL PARTNER SUMMIT 2027
        ========================================================================= */}
        {activeTab === 'partner_summit' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Summit Header */}
            <div className="rounded-2xl border border-teal-800/40 bg-gradient-to-r from-slate-900 via-teal-950/30 to-slate-900 p-6 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider">
                      Annual Ecosystem Assembly
                    </span>
                    <span className="text-xs text-slate-400">Dates: {FLOWFORGE_PARTNER_SUMMIT.dates} • {FLOWFORGE_PARTNER_SUMMIT.location}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {FLOWFORGE_PARTNER_SUMMIT.eventName}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    Theme: <span className="text-teal-400 font-semibold">{FLOWFORGE_PARTNER_SUMMIT.theme}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const kit = `FLOWFORGE GLOBAL PARTNER SUMMIT 2027\nTheme: ${FLOWFORGE_PARTNER_SUMMIT.theme}\nLocation: ${FLOWFORGE_PARTNER_SUMMIT.location}\nDates: ${FLOWFORGE_PARTNER_SUMMIT.dates}\n\nAGENDA SESSIONS:\n${FLOWFORGE_PARTNER_SUMMIT.agendaSessions.map(s => `[${s.timeSlot}] ${s.title} (${s.speaker}, ${s.speakerAffiliation})`).join('\n')}\n\nCERTIFICATIONS:\n${FLOWFORGE_PARTNER_SUMMIT.certifications.map(c => `- ${c.title} [${c.code}]`).join('\n')}`;
                      handleCopy(kit, 'partner_summit_kit');
                    }}
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition shadow-lg shadow-teal-500/20 cursor-pointer flex items-center space-x-1.5"
                  >
                    <DownloadIcon className="w-3.5 h-3.5" />
                    <span>{copiedKey === 'partner_summit_kit' ? 'Copied Summit Guide' : 'Export Partner Guide'}</span>
                  </button>
                </div>
              </div>

              {/* Sub-Nav Bar */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                {[
                  { id: 'sessions', label: 'Agenda & Sessions', count: FLOWFORGE_PARTNER_SUMMIT.agendaSessions.length },
                  { id: 'workshops', label: 'Hands-On Workshops', count: FLOWFORGE_PARTNER_SUMMIT.partnerWorkshops.length },
                  { id: 'certifications', label: 'Certification Arena', count: FLOWFORGE_PARTNER_SUMMIT.certifications.length },
                  { id: 'awards', label: 'Partner Awards', count: FLOWFORGE_PARTNER_SUMMIT.awards.length },
                  { id: 'deliverables', label: 'Official Deliverables', count: FLOWFORGE_PARTNER_SUMMIT.officialDeliverables.length }
                ].map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubTab(sub.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                      activeSubTab === sub.id
                        ? 'bg-teal-500 text-slate-950 font-extrabold shadow-md shadow-teal-500/20'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{sub.label}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/30">
                      {sub.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* SUBTAB 1: AGENDA SESSIONS */}
            {activeSubTab === 'sessions' && (
              <div className="space-y-4">
                {/* Track Filters */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                  {['All', 'Keynote', 'Consulting', 'Governance', 'Autonomy', 'Intelligence', 'Certification'].map(track => (
                    <button
                      key={track}
                      onClick={() => setSelectedTrack(track)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                        selectedTrack === track
                          ? 'bg-slate-700 text-white border border-teal-400'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSessions.map(session => (
                    <div key={session.id} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                          <span className="text-teal-400 font-bold">{session.timeSlot}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                            {session.room}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white leading-snug">{session.title}</h4>
                        <div className="text-xs text-slate-400 mt-1">
                          <span className="text-cyan-400 font-semibold">{session.speaker}</span> • {session.speakerAffiliation}
                        </div>
                        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">{session.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-teal-300 font-medium">📦 Deliverable: {session.partnerDeliverable}</span>
                        <button
                          onClick={() => handleCopy(`${session.title}\n${session.description}\nSpeaker: ${session.speaker} (${session.speakerAffiliation})`, session.id)}
                          className="text-slate-400 hover:text-teal-300 transition cursor-pointer"
                        >
                          <CopyIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBTAB 2: HANDS-ON WORKSHOPS */}
            {activeSubTab === 'workshops' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FLOWFORGE_PARTNER_SUMMIT.partnerWorkshops.map((ws, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-950 text-teal-300 border border-teal-800/60">
                        {ws.duration}
                      </span>
                      <span className="text-xs text-slate-400">{ws.instructor}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">{ws.title}</h4>
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <span className="text-teal-400 font-semibold">Hands-on Lab: </span>
                      {ws.handsOnLab}
                    </div>
                    <div className="text-xs text-emerald-300 font-medium">
                      ✓ Takeaway Artifact: {ws.takeawayArtifact}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUBTAB 3: CERTIFICATION ARENA */}
            {activeSubTab === 'certifications' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
                  Partner Certification Exams are proctored live on-site during Day 2 and Day 3. Successful candidates are awarded verified digital credentials and elevated partner directory tier status.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {FLOWFORGE_PARTNER_SUMMIT.certifications.map(cert => (
                    <div key={cert.id} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono mb-1">
                          <span className="font-bold text-cyan-400">{cert.code}</span>
                          <span className="text-slate-400">{cert.duration}</span>
                        </div>
                        <h4 className="text-base font-bold text-white leading-tight">{cert.title}</h4>
                        <div className="text-xs text-slate-400 mt-1">Target: {cert.targetRole}</div>

                        <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5">
                          <div className="text-[11px] uppercase font-bold text-slate-400">Skills Measured:</div>
                          <ul className="space-y-1 text-xs text-slate-300">
                            {cert.skillsMeasured.map((skill, sIdx) => (
                              <li key={sIdx} className="flex items-center space-x-1.5">
                                <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Passing: {cert.passingScore} ({cert.questionCount} Questions)</span>
                        <span className="text-emerald-400 font-bold">Proctored</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUBTAB 4: PARTNER AWARDS */}
            {activeSubTab === 'awards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FLOWFORGE_PARTNER_SUMMIT.awards.map(award => (
                  <div key={award.id} className="p-5 rounded-2xl border border-amber-800/40 bg-gradient-to-br from-slate-900 to-amber-950/20 space-y-3">
                    <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                      <AwardIcon className="w-4 h-4" />
                      <span>{award.awardName}</span>
                    </div>
                    <div className="text-base font-bold text-white">{award.recipientProfile}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{award.criteria}</p>
                    <div className="pt-2 border-t border-slate-800 text-xs font-mono text-emerald-300">
                      💰 Commercial Impact: {award.commercialImpact}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUBTAB 5: OFFICIAL DELIVERABLES */}
            {activeSubTab === 'deliverables' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FLOWFORGE_PARTNER_SUMMIT.officialDeliverables.map((del, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{del.name}</span>
                      <span className="text-[10px] font-mono text-teal-400 bg-teal-950 px-2 py-0.5 rounded">
                        {del.type}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Access Scope: {del.accessScope}</div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">{del.summary}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            PILLAR 4: THE ESP CATEGORY BIBLE (7 CHAPTERS)
        ========================================================================= */}
        {activeTab === 'category_bible' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Bible Header Card */}
            <div className="rounded-2xl border border-cyan-800/40 bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 p-6 shadow-xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
                      {FLOWFORGE_CATEGORY_BIBLE.edition}
                    </span>
                    <span className="text-xs text-slate-400">Category Canon • 7 Chapters</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {FLOWFORGE_CATEGORY_BIBLE.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                    {FLOWFORGE_CATEGORY_BIBLE.subtitle}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {(['reader', 'maturity', 'standards'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setBibleViewMode(mode)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                        bibleViewMode === mode
                          ? 'bg-cyan-500 text-slate-950 font-extrabold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      const fullBible = FLOWFORGE_CATEGORY_BIBLE.chapters
                        .map(
                          ch =>
                            `${ch.title.toUpperCase()}\n\n${ch.contentSections
                              .map(s => `${s.subHeading}\n${s.bodyParagraphs.join('\n\n')}`)
                              .join('\n\n')}`
                        )
                        .join('\n\n====================\n\n');
                      handleCopy(fullBible, 'full_bible');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1"
                  >
                    <DownloadIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{copiedKey === 'full_bible' ? 'Copied Bible' : 'Copy Bible'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* BIBLE VIEW MODE: READER (7 CHAPTERS) */}
            {bibleViewMode === 'reader' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Chapter Drawer */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
                    Table of Contents (7 Chapters)
                  </div>
                  {FLOWFORGE_CATEGORY_BIBLE.chapters.map(ch => {
                    const isSelected = selectedChapterNumber === ch.chapterNumber;
                    return (
                      <div
                        key={ch.chapterNumber}
                        onClick={() => setSelectedChapterNumber(ch.chapterNumber)}
                        className={`p-3.5 rounded-xl border transition cursor-pointer text-left ${
                          isSelected
                            ? 'bg-slate-800 border-cyan-500/80 shadow-md shadow-cyan-950/20'
                            : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="font-mono text-cyan-400 font-bold">Chapter {ch.chapterNumber}</span>
                          <span className="text-slate-500 font-mono">0{ch.chapterNumber}/07</span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-snug">{ch.title.split('—')[1] || ch.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{ch.summary}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Chapter Reader Screen */}
                <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8 space-y-6">
                  <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                        Chapter {selectedChapter.chapterNumber} of 07
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-white mt-1">{selectedChapter.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{selectedChapter.summary}</p>
                    </div>
                    <button
                      onClick={() => {
                        const chContent = `${selectedChapter.title}\n\n${selectedChapter.contentSections
                          .map(s => `${s.subHeading}\n${s.bodyParagraphs.join('\n\n')}`)
                          .join('\n\n')}`;
                        handleCopy(chContent, `ch_${selectedChapter.chapterNumber}`);
                      }}
                      className="text-xs text-slate-400 hover:text-cyan-300 flex items-center space-x-1 transition cursor-pointer"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>{copiedKey === `ch_${selectedChapter.chapterNumber}` ? 'Copied' : 'Copy Chapter'}</span>
                    </button>
                  </div>

                  {/* Body Content Sections */}
                  <div className="space-y-6 text-slate-200 text-sm md:text-base leading-relaxed">
                    {selectedChapter.contentSections.map((sec, sIdx) => (
                      <div key={sIdx} className="space-y-2.5">
                        <h4 className="text-sm font-bold text-cyan-400 font-mono">{sec.subHeading}</h4>
                        {sec.bodyParagraphs.map((para, pIdx) => (
                          <p key={pIdx} className="text-slate-300 leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Callout Box */}
                  {selectedChapter.calloutBox && (
                    <div
                      className={`p-4 rounded-xl border ${
                        selectedChapter.calloutBox.type === 'axiom'
                          ? 'border-cyan-800/60 bg-cyan-950/30'
                          : selectedChapter.calloutBox.type === 'formula'
                          ? 'border-emerald-800/60 bg-emerald-950/30'
                          : 'border-amber-800/60 bg-amber-950/30'
                      }`}
                    >
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider mb-1">
                        <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-white">{selectedChapter.calloutBox.title}</span>
                      </div>
                      <p className="text-xs text-slate-200 font-mono leading-relaxed">
                        {selectedChapter.calloutBox.text}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* BIBLE VIEW MODE: MATURITY MODEL */}
            {bibleViewMode === 'maturity' && (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <TrendingUpIcon className="w-4 h-4 text-cyan-400" />
                      The ESP 5-Stage Maturity Model (Chapter 4)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Standard metrics, slack requirements, and predictability rates across the evolutionary curve.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-300 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                        <th className="py-3 px-3">Level & Stage</th>
                        <th className="py-3 px-3">Stability Score (LSS)</th>
                        <th className="py-3 px-3">Slack Liquidity</th>
                        <th className="py-3 px-3">Volatility Bound</th>
                        <th className="py-3 px-3">Autonomy Scope</th>
                        <th className="py-3 px-3">On-Time Predictability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      {FLOWFORGE_CATEGORY_BIBLE.maturityModelMatrix.map((mat, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition">
                          <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                            <span className="font-mono text-cyan-400 mr-2">Level {mat.level}:</span>
                            {mat.name}
                          </td>
                          <td className="py-3 px-3 font-mono text-amber-300">{mat.stabilityScoreRange}</td>
                          <td className="py-3 px-3 font-mono text-cyan-300">{mat.slackLiquidity}</td>
                          <td className="py-3 px-3 font-mono text-rose-300">{mat.volatilityBound}</td>
                          <td className="py-3 px-3 text-slate-300">{mat.autonomyScope}</td>
                          <td className="py-3 px-3 font-bold text-emerald-400">{mat.deliveryPredictability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* BIBLE VIEW MODE: STANDARDS SPECIFICATION */}
            {bibleViewMode === 'standards' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  <span className="text-cyan-400 font-bold">Standard Reference Specification: </span>
                  All commercial and open-source platforms certifying under the Engineering Stability Platform (ESP) category must implement and enforce the following 5 statutory invariants.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {FLOWFORGE_CATEGORY_BIBLE.coreStandardsList.map((std, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-cyan-400">{std.standardCode}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 text-[10px] font-bold">
                          Mandatory
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{std.standardName}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{std.requirement}</p>
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-teal-300">
                        {std.mathematicalFormula}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
