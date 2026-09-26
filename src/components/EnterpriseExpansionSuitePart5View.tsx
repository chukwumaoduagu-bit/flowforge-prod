import React, { useState, useEffect } from 'react';
import {
  MicIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  CalendarIcon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  CopyIcon,
  CheckIcon,
  PrinterIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ActivityIcon,
  ArrowRightIcon,
  AwardIcon,
  ClockIcon,
  UsersIcon,
  LayersIcon,
  TvIcon,
  Share2Icon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  TrendingUpIcon,
  CompassIcon,
  FileTextIcon,
  SendIcon,
  ExternalLinkIcon
} from 'lucide-react';
import {
  FLOWFORGE_EXECUTIVE_KEYNOTE,
  FLOWFORGE_MARKETING_ASSETS,
  FLOWFORGE_SALES_PLAYBOOK,
  FLOWFORGE_STABILITY_SUMMIT,
  KeynoteSection
} from '../data/expansionSuitePart5Data';

interface EnterpriseExpansionSuitePart5Props {
  onEnterApp?: () => void;
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart6?: () => void;
}

export const EnterpriseExpansionSuitePart5View: React.FC<EnterpriseExpansionSuitePart5Props> = ({
  onEnterApp,
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart6
}) => {
  // Main Suite Navigation: 4 Core Deliverables
  const [activeTab, setActiveTab] = useState<'keynote' | 'marketing' | 'sales' | 'summit'>('keynote');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Keynote Stage / Teleprompter State
  const [activeKeynoteSectionIndex, setActiveKeynoteSectionIndex] = useState<number>(0);
  const [isTeleprompterPlaying, setIsTeleprompterPlaying] = useState<boolean>(false);
  const [teleprompterSpeed, setTeleprompterSpeed] = useState<number>(1);
  const [keynoteTimerSeconds, setKeynoteTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [stageModeView, setStageModeView] = useState<'split' | 'prompter' | 'transcript'>('split');

  // Marketing Assets Sub-tab
  const [marketingSubTab, setMarketingSubTab] = useState<'ads' | 'social' | 'emails' | 'branding'>('ads');
  const [activeEmailStep, setActiveEmailStep] = useState<number>(1);
  const [socialPlatformFilter, setSocialPlatformFilter] = useState<'all' | 'LinkedIn' | 'Twitter/X'>('all');

  // Sales Playbook Sub-tab
  const [salesSubTab, setSalesSubTab] = useState<'motion' | 'discovery' | 'demo' | 'objections' | 'close'>('motion');
  const [activeSalesStageIndex, setActiveSalesStageIndex] = useState<number>(0);
  const [activeObjectionId, setActiveObjectionId] = useState<string>('obj-devops');

  // Summit Event Plan Sub-tab
  const [summitSubTab, setSummitSubTab] = useState<'agenda' | 'speakers' | 'deliverables' | 'overview'>('agenda');
  const [sessionFilter, setSessionFilter] = useState<string>('all');

  // Timer Effect for Stage Keynote
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setKeynoteTimerSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Copy to clipboard helper
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSection = FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript[activeKeynoteSectionIndex] || FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript[0];
  const activeEmail = FLOWFORGE_MARKETING_ASSETS.emailSequence.find(e => e.step === activeEmailStep) || FLOWFORGE_MARKETING_ASSETS.emailSequence[0];
  const activeObjection = FLOWFORGE_SALES_PLAYBOOK.objectionHandling.find(o => o.id === activeObjectionId) || FLOWFORGE_SALES_PLAYBOOK.objectionHandling[0];

  const filteredSessions = summitFilterSessions(FLOWFORGE_STABILITY_SUMMIT.agendaSchedule, sessionFilter);

  function summitFilterSessions(sessions: typeof FLOWFORGE_STABILITY_SUMMIT.agendaSchedule, filter: string) {
    if (filter === 'all') return sessions;
    return sessions.filter(s => s.type.toLowerCase() === filter.toLowerCase());
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 text-slate-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/30 flex items-center space-x-1">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>EXPANSION SUITE • PART V</span>
              </span>
              <span className="text-xs text-slate-400">Executive Keynote, Global Campaigns, Enterprise Sales & Global Summit</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1.5">
              FlowForge Enterprise Expansion Suite — Part V
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl">
              Stage-Ready Founder Keynote, &ldquo;Stability Starts Here&rdquo; Global Campaign Assets, 7-Stage Enterprise Sales Playbook, and Global Stability Summit 2027 Event Masterplan.
            </p>
          </div>

          {/* Action & Nav Buttons */}
          <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-2">
            {onNavigateToPart3 && (
              <button
                onClick={onNavigateToPart3}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                &larr; Part III
              </button>
            )}
            {onNavigateToPart4 && (
              <button
                onClick={onNavigateToPart4}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                &larr; Part IV
              </button>
            )}
            {onNavigateToPart6 && (
              <button
                onClick={onNavigateToPart6}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-1"
              >
                <span>Part VI: Analyst & Category &rarr;</span>
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Suite</span>
            </button>
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <ActivityIcon className="w-3.5 h-3.5" />
                <span>Stability Core</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Core Pillars Navigation Bar */}
        <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs no-scrollbar">
          {[
            { id: 'keynote', label: '1. Executive Keynote Speech', icon: MicIcon, badge: 'Stage-Ready' },
            { id: 'marketing', label: '2. Global Marketing Assets', icon: MegaphoneIcon, badge: 'Campaign' },
            { id: 'sales', label: '3. Enterprise Sales Playbook', icon: BriefcaseIcon, badge: '7-Stage Motion' },
            { id: 'summit', label: '4. Stability Summit Event Plan', icon: CalendarIcon, badge: 'Austin 2027' },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive ? 'bg-slate-950/30 text-slate-950 font-black' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. EXECUTIVE KEYNOTE SPEECH VIEW                                          */}
      {/* ========================================================================= */}
      {activeTab === 'keynote' && (
        <div className="space-y-6">
          {/* Keynote Header Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 font-bold">FOUNDER KEYNOTE</span>
                  <span>•</span>
                  <span>{FLOWFORGE_EXECUTIVE_KEYNOTE.eventContext}</span>
                  <span>•</span>
                  <span>{FLOWFORGE_EXECUTIVE_KEYNOTE.runTime}</span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1">
                  {FLOWFORGE_EXECUTIVE_KEYNOTE.title}
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Speaker: <strong className="text-amber-300">{FLOWFORGE_EXECUTIVE_KEYNOTE.founderSpeaker}</strong> — Stage-ready teleprompter, synchronized visual cues, and live 5-minute demonstration track.
                </p>
              </div>

              {/* Stage Timer & Teleprompter Controls */}
              <div className="flex items-center space-x-3 bg-slate-950 border border-slate-800 p-3 rounded-xl">
                <div className="text-center px-2">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">Stage Clock</span>
                  <span className="text-xl font-black font-mono text-cyan-400">{formatTimer(keynoteTimerSeconds)}</span>
                  <span className="text-[10px] text-slate-500 font-mono block">Target: 18:00</span>
                </div>

                <div className="h-8 w-px bg-slate-800" />

                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`p-2.5 rounded-lg text-xs font-bold transition flex items-center space-x-1 cursor-pointer ${
                    isTimerRunning ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-emerald-600 text-white hover:bg-emerald-500'
                  }`}
                  title={isTimerRunning ? 'Pause Timer' : 'Start Keynote Clock'}
                >
                  {isTimerRunning ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setKeynoteTimerSeconds(0);
                  }}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition cursor-pointer"
                  title="Reset Stage Clock"
                >
                  <RotateCcwIcon className="w-4 h-4" />
                </button>

                <div className="h-8 w-px bg-slate-800" />

                {/* View Mode Toggle */}
                <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs">
                  <button
                    onClick={() => setStageModeView('split')}
                    className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
                      stageModeView === 'split' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Split Stage
                  </button>
                  <button
                    onClick={() => setStageModeView('prompter')}
                    className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
                      stageModeView === 'prompter' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Teleprompter
                  </button>
                  <button
                    onClick={() => setStageModeView('transcript')}
                    className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
                      stageModeView === 'transcript' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Full Text
                  </button>
                </div>
              </div>
            </div>

            {/* Keynote Navigation Timeline */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-5 pt-4 border-t border-slate-800">
              {FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript.map((sec, idx) => {
                const isActive = activeKeynoteSectionIndex === idx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveKeynoteSectionIndex(idx)}
                    className={`text-left p-3 rounded-xl border transition cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-sm'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                      <span className="font-bold">{sec.timeCode}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                    </div>
                    <div className="text-xs font-bold truncate">{sec.sectionTitle}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Keynote Interactive Presentation Area */}
          {stageModeView === 'split' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Speaker Teleprompter */}
              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <MicIcon className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Speaker Track • Section {activeKeynoteSectionIndex + 1} of 5
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(currentSection.speechText.join('\n\n'), `speech-${currentSection.id}`)}
                      className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      {copiedKey === `speech-${currentSection.id}` ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy Section</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Stage Direction */}
                  <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-3 mb-4 text-xs font-mono text-amber-300 italic">
                    Stage Cue: {currentSection.speakerDirection}
                  </div>

                  {/* Spoken Text */}
                  <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed font-sans font-medium">
                    {currentSection.speechText.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className={pIdx === 0 ? 'text-white font-semibold text-lg border-l-2 border-amber-400 pl-3' : 'pl-3'}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Teleprompter Notes & Next Action */}
                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400 max-w-sm">
                    <span className="font-bold text-amber-400">Coach Note:</span> {currentSection.teleprompterNotes}
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      disabled={activeKeynoteSectionIndex === 0}
                      onClick={() => setActiveKeynoteSectionIndex(prev => prev - 1)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold transition cursor-pointer"
                    >
                      &larr; Previous
                    </button>
                    <button
                      disabled={activeKeynoteSectionIndex === FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript.length - 1}
                      onClick={() => setActiveKeynoteSectionIndex(prev => prev + 1)}
                      className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 text-xs font-bold transition cursor-pointer flex items-center space-x-1"
                    >
                      <span>Next Section</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Stage Projection Visual Simulator */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <TvIcon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Main Stage Screen Projection
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                      SLIDE • {currentSection.slideVisual.visualType.toUpperCase()}
                    </span>
                  </div>

                  {/* Simulated 16:9 Stage Screen */}
                  <div className="aspect-video bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-inner relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400">FLOWFORGE • STABILITY OS</span>
                      <span className="text-xs font-mono text-slate-500">{currentSection.timeCode}</span>
                    </div>

                    <div className="my-auto text-center space-y-3">
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                        {currentSection.slideVisual.headline}
                      </h3>
                      <p className="text-xs md:text-sm text-cyan-200/80 max-w-md mx-auto">
                        {currentSection.slideVisual.subtext}
                      </p>
                      <div className="inline-block bg-slate-950/80 border border-cyan-500/30 rounded-lg px-4 py-2 font-mono text-xs text-amber-300 font-bold">
                        {currentSection.slideVisual.content}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>KEYNOTE STAGE • AUSTIN CONVENTION CENTER</span>
                      <span>STABILITY IS THE FUTURE OF ENGINEERING</span>
                    </div>
                  </div>
                </div>

                {/* 5-Minute Demo Step Reference */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center space-x-2 mb-3">
                    <ActivityIcon className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      The 5-Minute Live Demo Blueprint
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {FLOWFORGE_EXECUTIVE_KEYNOTE.theDemonstration.steps.map(step => (
                      <div
                        key={step.step}
                        className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5 text-xs flex items-start space-x-2.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {step.step}
                        </span>
                        <div>
                          <div className="font-bold text-slate-200">{step.action}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{step.screenVisual}</div>
                          <div className="text-[11px] text-amber-300/90 font-mono mt-1 italic">
                            &ldquo;{step.teleprompterLine}&rdquo;
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teleprompter Full Screen View */}
          {stageModeView === 'prompter' && (
            <div className="bg-slate-950 border-2 border-amber-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold">Stage Teleprompter Mode</span>
                  <h3 className="text-xl font-black text-white">{currentSection.sectionTitle}</h3>
                </div>
                <div className="flex items-center space-x-3 font-mono text-sm">
                  <span className="text-slate-400">Pacing:</span>
                  {[1, 1.5, 2].map(speed => (
                    <button
                      key={speed}
                      onClick={() => setTeleprompterSpeed(speed)}
                      className={`px-2 py-1 rounded text-xs font-bold transition cursor-pointer ${
                        teleprompterSpeed === speed ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6 text-xl md:text-2xl text-slate-100 font-sans leading-relaxed tracking-wide">
                {currentSection.speechText.map((p, idx) => (
                  <p key={idx} className="hover:text-amber-300 transition-colors">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
                <span>Stage Cue: {currentSection.speakerDirection}</span>
                <span>{currentSection.timeCode}</span>
              </div>
            </div>
          )}

          {/* Full Speech Transcript View */}
          {stageModeView === 'transcript' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-black text-white">Full Keynote Speech Transcript</h3>
                  <p className="text-xs text-slate-400">Complete, continuous text formatted for stage delivery and press distribution.</p>
                </div>
                <button
                  onClick={() =>
                    handleCopy(
                      FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript
                        .map(s => `## ${s.sectionTitle} (${s.timeCode})\n\n${s.speechText.join('\n\n')}`)
                        .join('\n\n---\n\n'),
                      'full-transcript'
                    )
                  }
                  className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
                >
                  {copiedKey === 'full-transcript' ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5" />
                      <span>Copied Full Keynote</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Full Keynote</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-8 max-w-3xl mx-auto">
                {FLOWFORGE_EXECUTIVE_KEYNOTE.fullSpeechTranscript.map(sec => (
                  <div key={sec.id} className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
                      <span className="font-bold">{sec.timeCode}</span>
                      <span>•</span>
                      <span className="font-bold uppercase tracking-wider">{sec.sectionTitle}</span>
                    </div>
                    <div className="text-xs text-slate-400 italic bg-slate-950 p-2 rounded border border-slate-800">
                      {sec.speakerDirection}
                    </div>
                    <div className="space-y-3 text-slate-200 text-sm leading-relaxed">
                      {sec.speechText.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. GLOBAL MARKETING ASSETS VIEW                                           */}
      {/* ========================================================================= */}
      {activeTab === 'marketing' && (
        <div className="space-y-6">
          {/* Sub-navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">GLOBAL LAUNCH ASSETS</span>
              <h2 className="text-xl font-black text-white">Campaign: &ldquo;{FLOWFORGE_MARKETING_ASSETS.campaignName}&rdquo;</h2>
              <p className="text-xs text-slate-400">Tagline: &ldquo;{FLOWFORGE_MARKETING_ASSETS.globalTagline}&rdquo; • Slogan: &ldquo;{FLOWFORGE_MARKETING_ASSETS.slogan}&rdquo;</p>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              {[
                { id: 'ads', label: 'Global Ads (Text-Ready)', count: FLOWFORGE_MARKETING_ASSETS.globalAds.length },
                { id: 'social', label: 'Social Assets', count: FLOWFORGE_MARKETING_ASSETS.socialAssets.length },
                { id: 'emails', label: '3-Part Email Sequence', count: 3 },
                { id: 'branding', label: 'Color & Visual Specs' },
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setMarketingSubTab(sub.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                    marketingSubTab === sub.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{sub.label}</span>
                  {sub.count && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-800 text-slate-300 font-mono">
                      {sub.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-tab 1: Text-Ready Global Ads */}
          {marketingSubTab === 'ads' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FLOWFORGE_MARKETING_ASSETS.globalAds.map((ad, idx) => (
                <div
                  key={ad.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-bold">AD {idx + 1}</span>
                      <span>{ad.type}</span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-2">{ad.headline}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{ad.body}</p>

                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-4 space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 font-mono uppercase text-[10px] block">Channel</span>
                        <span className="text-slate-300 font-semibold">{ad.channel}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono uppercase text-[10px] block">Target Audience</span>
                        <span className="text-slate-300 font-semibold">{ad.targetAudience}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono uppercase text-[10px] block">Visual Concept</span>
                        <span className="text-slate-400 italic">{ad.visualPrompt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                      CTA: {ad.cta}
                    </span>
                    <button
                      onClick={() => handleCopy(`${ad.headline}\n\n${ad.body}\n\nCTA: ${ad.cta}`, ad.id)}
                      className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      {copiedKey === ad.id ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy Ad</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-tab 2: Social Assets (LinkedIn & Twitter/X) */}
          {marketingSubTab === 'social' && (
            <div className="space-y-6">
              {/* Platform Filter */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-400 font-mono">Platform Filter:</span>
                {(['all', 'LinkedIn', 'Twitter/X'] as const).map(plat => (
                  <button
                    key={plat}
                    onClick={() => setSocialPlatformFilter(plat)}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      socialPlatformFilter === plat
                        ? 'bg-cyan-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {plat === 'all' ? 'All Channels' : plat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FLOWFORGE_MARKETING_ASSETS.socialAssets
                  .filter(item => socialPlatformFilter === 'all' || item.platform === socialPlatformFilter)
                  .map(item => (
                    <div
                      key={item.id}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono mb-3">
                          <span
                            className={`px-2 py-0.5 rounded font-bold ${
                              item.platform === 'LinkedIn'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-slate-700 text-slate-200'
                            }`}
                          >
                            {item.platform}
                          </span>
                          <span className="text-slate-400 font-bold">{item.assetName}</span>
                        </div>

                        {/* Social Post Content Box */}
                        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-4 text-xs md:text-sm text-slate-200 whitespace-pre-line leading-relaxed font-sans">
                          {item.content}
                        </div>

                        {/* Visual Asset Note */}
                        <div className="text-xs text-slate-400 mb-4 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                          <span className="font-bold text-amber-300">Graphic Asset:</span> {item.graphicConcept}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {item.hashtags.map((h, i) => (
                            <span key={i} className="text-[10px] text-cyan-400/80 font-mono">
                              {h}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => handleCopy(item.content, item.id)}
                          className="text-xs text-slate-300 hover:text-white flex items-center space-x-1 cursor-pointer shrink-0 ml-2"
                        >
                          {copiedKey === item.id ? (
                            <>
                              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">Copied Post</span>
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-3.5 h-3.5" />
                              <span>Copy Post</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Sub-tab 3: 3-Part Global Email Sequence */}
          {marketingSubTab === 'emails' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Email Step Selector */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase font-bold block mb-2">
                  Campaign Email Drip
                </span>
                {FLOWFORGE_MARKETING_ASSETS.emailSequence.map(e => {
                  const isActive = activeEmailStep === e.step;
                  return (
                    <button
                      key={e.step}
                      onClick={() => setActiveEmailStep(e.step)}
                      className={`w-full text-left p-4 rounded-xl border transition cursor-pointer ${
                        isActive
                          ? 'bg-amber-500/10 border-amber-500/40 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className="font-bold text-amber-400">EMAIL {e.step}</span>
                        <span className="text-[10px] text-slate-500">{e.targetRole}</span>
                      </div>
                      <div className="font-bold text-sm text-slate-200 line-clamp-1">{e.subject}</div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-1">{e.previewText}</div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Simulated Email Client Preview */}
              <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                        Email {activeEmail.step} of 3 • {activeEmail.targetRole}
                      </span>
                      <h3 className="text-lg font-black text-white mt-1">{activeEmail.subject}</h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">Preview: {activeEmail.previewText}</p>
                    </div>

                    <button
                      onClick={() => handleCopy(`Subject: ${activeEmail.subject}\n\n${activeEmail.fullBody}`, `email-${activeEmail.step}`)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
                    >
                      {copiedKey === `email-${activeEmail.step}` ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied Email</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy Template</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 text-slate-200 text-sm whitespace-pre-line leading-relaxed font-sans mb-4">
                    {activeEmail.fullBody}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    <span className="font-bold text-cyan-400">Core Premise:</span> {activeEmail.coreMessage}
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer">
                    {activeEmail.ctaText}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 4: Brand Imagery & Visual Specs */}
          {marketingSubTab === 'branding' && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-4">Official Campaign Color Palette</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {FLOWFORGE_MARKETING_ASSETS.brandImagery.palette.map((color, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-3">
                      <div
                        className="h-16 rounded-lg mb-3 border border-white/10 flex items-center justify-center font-mono text-xs font-bold"
                        style={{ backgroundColor: color.hex, color: color.hex === '#0B132B' ? '#ffffff' : '#000000' }}
                      >
                        {color.hex}
                      </div>
                      <div className="text-xs font-bold text-white">{color.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{color.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FLOWFORGE_MARKETING_ASSETS.brandImagery.coreVisuals.map((vis, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{vis.format}</span>
                    <h4 className="text-base font-bold text-white">{vis.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{vis.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE SALES PLAYBOOK VIEW                                         */}
      {/* ========================================================================= */}
      {activeTab === 'sales' && (
        <div className="space-y-6">
          {/* Sales Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">ENTERPRISE SALES PLAYBOOK</span>
              <h2 className="text-xl font-black text-white">Philosophy: &ldquo;{FLOWFORGE_SALES_PLAYBOOK.salesPhilosophy}&rdquo;</h2>
              <p className="text-xs text-slate-400">Standard operating motion for enterprise account executives and sales engineers.</p>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              {[
                { id: 'motion', label: '7-Stage Sales Motion' },
                { id: 'discovery', label: 'Discovery Questions' },
                { id: 'demo', label: '5-Minute Demo Script' },
                { id: 'objections', label: 'Objection Handling' },
                { id: 'close', label: 'The Closing Script' },
              ].map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setSalesSubTab(sub.id as any)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                    salesSubTab === sub.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-tab 1: 7-Stage Sales Motion */}
          {salesSubTab === 'motion' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {FLOWFORGE_SALES_PLAYBOOK.salesMotion.map((stage, idx) => {
                  const isActive = activeSalesStageIndex === idx;
                  return (
                    <button
                      key={stage.step}
                      onClick={() => setActiveSalesStageIndex(idx)}
                      className={`text-left p-3 rounded-xl border transition cursor-pointer ${
                        isActive
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span className="font-bold text-amber-400">STAGE {stage.step}</span>
                        <span>{stage.duration}</span>
                      </div>
                      <div className="text-xs font-bold truncate">{stage.stageName}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detailed Card */}
              {(() => {
                const stage = FLOWFORGE_SALES_PLAYBOOK.salesMotion[activeSalesStageIndex];
                return (
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-xs font-mono text-amber-400 uppercase font-bold">Stage {stage.step} • {stage.duration}</span>
                        <h3 className="text-xl font-black text-white">{stage.stageName}</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 text-xs font-mono font-bold">
                        Target Duration: {stage.duration}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span className="text-slate-500 font-mono uppercase font-bold block mb-1">Primary Objective</span>
                        <p className="text-slate-200 text-sm leading-relaxed">{stage.primaryObjective}</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span className="text-slate-500 font-mono uppercase font-bold block mb-1">Key Deliverable</span>
                        <p className="text-cyan-300 text-sm font-semibold">{stage.keyDeliverable}</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span className="text-slate-500 font-mono uppercase font-bold block mb-1">Qualification Criteria</span>
                        <p className="text-slate-300">{stage.qualificationCriteria}</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span className="text-emerald-400 font-mono uppercase font-bold block mb-1">Exit Gate / Milestone Transition</span>
                        <p className="text-emerald-300 font-medium">{stage.exitGate}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Sub-tab 2: Discovery Questions */}
          {salesSubTab === 'discovery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FLOWFORGE_SALES_PLAYBOOK.discoveryQuestions.map(q => (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">{q.category}</span>
                    <button
                      onClick={() => handleCopy(q.question, q.id)}
                      className="text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      {copiedKey === q.id ? (
                        <>
                          <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="w-3.5 h-3.5" />
                          <span>Copy Question</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white">&ldquo;{q.question}&rdquo;</h3>

                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                      <span className="text-amber-400 font-bold block">Why Ask:</span>
                      <span className="text-slate-300">{q.whyAsk}</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                      <span className="text-slate-400 font-bold block">Target Prospect Response:</span>
                      <span className="text-slate-300 italic">{q.targetResponse}</span>
                    </div>

                    <div className="bg-emerald-950/20 p-3 rounded-lg border border-emerald-800/30">
                      <span className="text-emerald-400 font-bold block">Transition into Demo:</span>
                      <span className="text-emerald-200">{q.transitionToDemo}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-tab 3: 5-Minute Demo Script */}
          {salesSubTab === 'demo' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">5-MINUTE VALUE DEMO</span>
                <h3 className="text-lg font-black text-white">Minute-by-Minute Screen & Talk Track</h3>
                <p className="text-xs text-slate-400">How to prove the Stability OS in 300 seconds without triggering micromanagement pushback.</p>
              </div>

              <div className="space-y-3">
                {FLOWFORGE_SALES_PLAYBOOK.fiveMinuteDemoScript.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                  >
                    <div className="lg:w-1/4">
                      <span className="text-xs font-mono font-bold text-amber-400 block">{step.minute}</span>
                      <h4 className="text-sm font-black text-white mt-0.5">{step.focus}</h4>
                      <span className="text-[11px] text-slate-400 font-mono block mt-1">Screen: {step.screenToShow}</span>
                    </div>

                    <div className="lg:w-1/2 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-xs text-slate-200 leading-relaxed font-sans">
                      <span className="text-cyan-400 font-mono font-bold block mb-1">Spoken Track:</span>
                      {step.spokenTrack}
                    </div>

                    <div className="lg:w-1/4 bg-amber-950/20 p-3 rounded-xl border border-amber-800/30 text-xs">
                      <span className="text-amber-400 font-bold block mb-0.5">Defuses Objection:</span>
                      <span className="text-amber-200/90 italic">{step.objectionDefused}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 4: Objection Handling Battlecards */}
          {salesSubTab === 'objections' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FLOWFORGE_SALES_PLAYBOOK.objectionHandling.map(item => (
                <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">OBJECTION</span>
                      <button
                        onClick={() => handleCopy(item.fullScript, item.id)}
                        className="hover:text-white flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedKey === item.id ? (
                          <>
                            <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-3.5 h-3.5" />
                            <span>Copy Script</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h3 className="text-base font-black text-white mb-2">{item.objection}</h3>
                    <div className="text-xs text-slate-400 italic mb-3">Context: {item.context}</div>

                    <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-xl p-3 mb-3">
                      <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">Core Pivot Track:</span>
                      <span className="text-emerald-200 font-bold text-xs">{item.corePivot}</span>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed font-sans mb-3">
                      <span className="text-slate-400 font-mono text-[10px] block mb-1">Full Talk Track:</span>
                      {item.fullScript}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-xs text-cyan-300 font-mono">
                    <strong>Proof Point:</strong> {item.proofPoint}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-tab 5: The Closing Script */}
          {salesSubTab === 'close' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  THE ZERO-FRICTION CLOSE
                </span>
                <h3 className="text-2xl font-black text-white">{FLOWFORGE_SALES_PLAYBOOK.closingScript.headline}</h3>
                <p className="text-xs text-slate-400">Deliver this exact script at minute 25 of your 30-minute executive presentation.</p>
              </div>

              <div className="bg-slate-950 border-2 border-emerald-500/30 rounded-2xl p-6 text-slate-100 text-base md:text-lg leading-relaxed font-medium">
                {FLOWFORGE_SALES_PLAYBOOK.closingScript.script}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">Handling Hesitation:</span>
                  <p className="text-slate-300 italic">{FLOWFORGE_SALES_PLAYBOOK.closingScript.handlingHesitation}</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">Official Pilot Deliverable:</span>
                  <p className="text-slate-300">{FLOWFORGE_SALES_PLAYBOOK.closingScript.freePilotOffer}</p>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => handleCopy(FLOWFORGE_SALES_PLAYBOOK.closingScript.script, 'closing-script')}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition cursor-pointer flex items-center space-x-2 mx-auto"
                >
                  {copiedKey === 'closing-script' ? (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      <span>Copied Closing Script</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4" />
                      <span>Copy Closing Script</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. STABILITY SUMMIT EVENT PLAN VIEW                                       */}
      {/* ========================================================================= */}
      {activeTab === 'summit' && (
        <div className="space-y-6">
          {/* Summit Hero Card */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 font-bold">ANNUAL FLAGSHIP SUMMIT</span>
                  <span>•</span>
                  <span>{FLOWFORGE_STABILITY_SUMMIT.dates}</span>
                  <span>•</span>
                  <span>{FLOWFORGE_STABILITY_SUMMIT.location}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mt-1">
                  {FLOWFORGE_STABILITY_SUMMIT.eventName}
                </h2>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  Theme: <strong className="text-cyan-300">&ldquo;{FLOWFORGE_STABILITY_SUMMIT.theme}&rdquo;</strong> — Bringing together 1,500+ engineering executives and 10,000+ global technologists.
                </p>
              </div>

              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                {[
                  { id: 'agenda', label: 'Summit Agenda' },
                  { id: 'speakers', label: 'Keynote Speakers' },
                  { id: 'deliverables', label: 'Official Deliverables' },
                  { id: 'overview', label: 'Structure & Tracks' },
                ].map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setSummitSubTab(sub.id as any)}
                    className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                      summitSubTab === sub.id
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-tab 1: Summit Agenda Schedule */}
          {summitSubTab === 'agenda' && (
            <div className="space-y-4">
              {/* Filter Pills */}
              <div className="flex items-center space-x-2 text-xs overflow-x-auto pb-1">
                <span className="text-slate-400 font-mono">Track Filter:</span>
                {['all', 'Keynote', 'Breakout', 'Workshop', 'Exam', 'Closing'].map(f => (
                  <button
                    key={f}
                    onClick={() => setSessionFilter(f)}
                    className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                      sessionFilter.toLowerCase() === f.toLowerCase()
                        ? 'bg-cyan-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {f === 'all' ? 'All Sessions' : f}
                  </button>
                ))}
              </div>

              {/* Sessions List */}
              <div className="space-y-3">
                {filteredSessions.map(session => (
                  <div
                    key={session.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center space-x-2.5">
                        <span
                          className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold ${
                            session.type === 'Keynote'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : session.type === 'Workshop'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                              : session.type === 'Exam'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          }`}
                        >
                          {session.type.toUpperCase()}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{session.timeSlot}</span>
                        <span className="text-slate-600 hidden sm:inline">•</span>
                        <span className="text-xs font-mono text-slate-400">{session.room}</span>
                      </div>

                      <span className="text-xs text-amber-400 font-mono font-bold">{session.track}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-black text-white">{session.title}</h3>
                      <div className="text-xs text-slate-300">
                        Speaker: <strong className="text-cyan-400">{session.speaker}</strong> ({session.speakerRole})
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">{session.abstract}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-slate-400">
                        <strong className="text-emerald-400 font-mono">Deliverable:</strong> {session.deliverableOrArtifact}
                      </span>
                      <button
                        onClick={() => handleCopy(`${session.title}\n${session.timeSlot} | ${session.room}\n${session.abstract}`, session.id)}
                        className="text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                      >
                        {copiedKey === session.id ? (
                          <>
                            <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-3.5 h-3.5" />
                            <span>Copy Session</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 2: Keynote Speakers */}
          {summitSubTab === 'speakers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FLOWFORGE_STABILITY_SUMMIT.speakers.map((sp, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-cyan-500 flex items-center justify-center font-black text-slate-950 text-base">
                      {sp.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white">{sp.name}</h3>
                      <div className="text-xs text-slate-300 font-medium">
                        {sp.title} • <span className="text-cyan-400">{sp.organization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                    <span className="text-amber-400 font-mono font-bold block mb-0.5">Session Topic:</span>
                    <span className="text-white font-semibold">{sp.topic}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">{sp.bio}</p>
                </div>
              ))}
            </div>
          )}

          {/* Sub-tab 3: Official Deliverables */}
          {summitSubTab === 'deliverables' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FLOWFORGE_STABILITY_SUMMIT.officialDeliverables.map((deliv, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{deliv.format}</span>
                    <h3 className="text-base font-black text-white mt-1 mb-2">{deliv.name}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{deliv.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>
                      <strong className="text-slate-300">Channel:</strong> {deliv.distributionChannel}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                      INCLUDED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-tab 4: Structure & Tracks Overview */}
          {summitSubTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                    <MicIcon className="w-4 h-4" />
                    <span>Keynote Track</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {FLOWFORGE_STABILITY_SUMMIT.eventStructureSummary.keynoteOverview}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                    <LayersIcon className="w-4 h-4" />
                    <span>5 Technical Breakouts</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {FLOWFORGE_STABILITY_SUMMIT.eventStructureSummary.breakoutsOverview}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm">
                    <BriefcaseIcon className="w-4 h-4" />
                    <span>Hands-on Architectural Workshops</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {FLOWFORGE_STABILITY_SUMMIT.eventStructureSummary.workshopsOverview}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                    <AwardIcon className="w-4 h-4" />
                    <span>FCSA Certification Arena</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {FLOWFORGE_STABILITY_SUMMIT.eventStructureSummary.examsOverview}
                  </p>
                </div>
              </div>

              {/* Closing Declaration Card */}
              <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 border-2 border-amber-500/40 rounded-2xl p-6 text-center space-y-3">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  SUMMIT CLOSING DECLARATION
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white max-w-2xl mx-auto">
                  &ldquo;{FLOWFORGE_STABILITY_SUMMIT.closingDeclaration}&rdquo;
                </h3>
                <p className="text-xs text-slate-400">Chuck — Founder & CEO, FlowForge</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
