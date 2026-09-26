import React, { useState, useEffect, useRef } from 'react';
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
  ChevronRightIcon,
  ChevronLeftIcon,
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  MailIcon,
  TargetIcon,
  ZapIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  ClockIcon,
  CpuIcon,
  LockIcon,
  BarChart3Icon,
  SearchIcon,
  HelpCircleIcon,
  LayersIcon,
  FlagIcon,
  RotateCcwIcon,
  ExternalLinkIcon,
  DownloadIcon,
  CheckSquareIcon,
  BuildingIcon,
  Share2Icon
} from 'lucide-react';
import {
  FLOWFORGE_MARKETING_CAMPAIGN,
  FLOWFORGE_MASTER_SERVICE_AGREEMENT,
  FLOWFORGE_ENTERPRISE_SLA,
  FCSA_EXAM_METADATA,
  FCSA_QUESTION_BANK,
  FLOWFORGE_PARTNER_PROGRAM,
  ExamQuestion
} from '../data/expansionSuitePart3Data';

interface EnterpriseExpansionSuitePart3Props {
  onEnterApp?: () => void;
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart4?: () => void;
}

export const EnterpriseExpansionSuitePart3View: React.FC<EnterpriseExpansionSuitePart3Props> = ({
  onEnterApp,
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart4
}) => {
  // Main Suite Navigation
  const [activeTab, setActiveTab] = useState<'marketing' | 'contract' | 'exam' | 'partners'>('marketing');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Marketing Campaign State
  const [marketingSubTab, setMarketingSubTab] = useState<'emails' | 'linkedin' | 'ads' | 'cta'>('emails');
  const [activeEmailStep, setActiveEmailStep] = useState<number>(1);
  const [activeLinkedInAssetId, setActiveLinkedInAssetId] = useState<string>('li-1');

  // Contract State
  const [contractSubTab, setContractSubTab] = useState<'msa' | 'sla'>('msa');
  const [selectedClauseNumber, setSelectedClauseNumber] = useState<number>(1);
  const [contractTierFilter, setContractTierFilter] = useState<'foundation' | 'growth' | 'enterprise'>('growth');

  // Partner Program State
  const [selectedPartnerTierId, setSelectedPartnerTierId] = useState<string>('certified');
  const [partnerSeatsInput, setPartnerSeatsInput] = useState<number>(3);
  const [showPartnerApplyModal, setShowPartnerApplyModal] = useState<boolean>(false);
  const [partnerApplySubmitted, setPartnerApplySubmitted] = useState<boolean>(false);

  // Exam Engine State
  const [examStatus, setExamStatus] = useState<'intro' | 'active' | 'review'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(60 * 60); // 60 minutes
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState<string>('Enterprise Architect');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<string>('all');
  const [examFilterMode, setExamFilterMode] = useState<'all' | 'flagged' | 'unanswered'>('all');

  // Exam Timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (examStatus === 'active' && !isTimerPaused && timeLeftSeconds > 0) {
      timer = setInterval(() => {
        setTimeLeftSeconds(prev => {
          if (prev <= 1) {
            setExamStatus('review');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examStatus, isTimerPaused, timeLeftSeconds]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  // Exam Calculations
  const totalQuestions = FCSA_QUESTION_BANK.length;
  const answeredCount = Object.keys(userAnswers).length;
  const currentQuestion = FCSA_QUESTION_BANK[currentQuestionIndex];

  const calculateScore = () => {
    let correct = 0;
    FCSA_QUESTION_BANK.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    const percent = Math.round((correct / totalQuestions) * 100);
    const passed = percent >= FCSA_EXAM_METADATA.passingScorePercent;
    return { correct, total: totalQuestions, percent, passed };
  };

  const examScore = calculateScore();

  // Format Timer
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Current active data items
  const activeEmail = FLOWFORGE_MARKETING_CAMPAIGN.emails.find(e => e.step === activeEmailStep) || FLOWFORGE_MARKETING_CAMPAIGN.emails[0];
  const activeLinkedIn = FLOWFORGE_MARKETING_CAMPAIGN.linkedInAssets.find(a => a.id === activeLinkedInAssetId) || FLOWFORGE_MARKETING_CAMPAIGN.linkedInAssets[0];
  const activeClause = FLOWFORGE_MASTER_SERVICE_AGREEMENT.clauses.find(c => c.clauseNumber === selectedClauseNumber) || FLOWFORGE_MASTER_SERVICE_AGREEMENT.clauses[0];
  const activePartnerTier = FLOWFORGE_PARTNER_PROGRAM.tiers.find(t => t.id === selectedPartnerTierId) || FLOWFORGE_PARTNER_PROGRAM.tiers[1];

  // Tier pricing lookup
  const tierPricing = {
    foundation: { name: 'Foundation (≤25 devs)', price: 1500, revPct: 0.15 },
    growth: { name: 'Growth (≤75 devs)', price: 3000, revPct: 0.20 },
    enterprise: { name: 'Enterprise (Unlimited)', price: 6000, revPct: 0.25 }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30 flex items-center space-x-1">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>EXPANSION SUITE • PART III</span>
              </span>
              <span className="text-xs text-slate-400">Marketing, Legal, Certification & Partners</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1.5">
              FlowForge Enterprise Expansion Suite — Part III
            </h1>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-3xl">
              &ldquo;Stability Starts Here&rdquo; Multi-Channel Launch Campaign, Master Services Agreement (MSA & SLA), 40-Question FCSA Certification Exam Simulator, and FlowForge Partner Network (FPN).
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
            {onNavigateToPart2 && (
              <button
                onClick={onNavigateToPart2}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                &larr; Part II
              </button>
            )}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
            >
              <PrinterIcon className="w-3.5 h-3.5" />
              <span>Print Suite</span>
            </button>
            {onNavigateToPart4 && (
              <button
                onClick={onNavigateToPart4}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>Part IV: Analyst & Economics &rarr;</span>
              </button>
            )}
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

        {/* 4 Core Modules Navigation Bar */}
        <div className="flex items-center overflow-x-auto space-x-2 mt-6 pt-4 border-t border-slate-800 text-xs no-scrollbar">
          {[
            { id: 'marketing', label: '1. Marketing Campaign', icon: GlobeIcon, badge: 'Stability Starts Here' },
            { id: 'contract', label: '2. Enterprise Contract', icon: FileTextIcon, badge: 'MSA & SLA' },
            { id: 'exam', label: '3. Certification Exam', icon: AwardIcon, badge: 'FCSA (40 Qs)' },
            { id: 'partners', label: '4. Partner Program', icon: UsersIcon, badge: 'FPN Network' }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-3.5 py-2.5 rounded-xl font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
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

      {/* ================= SECTION 1: MARKETING CAMPAIGN ================= */}
      {activeTab === 'marketing' && (
        <div className="space-y-6">
          {/* Campaign Overview Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                    Official Launch Campaign
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Multi-Channel Public GTM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Campaign: &ldquo;{FLOWFORGE_MARKETING_CAMPAIGN.campaignName}&rdquo;
                </h2>
                <p className="text-sm sm:text-base text-cyan-400 font-semibold">
                  {FLOWFORGE_MARKETING_CAMPAIGN.coreMessage}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                  <div className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                    <span className="text-slate-400">Tagline:</span>{' '}
                    <strong className="text-white">&ldquo;{FLOWFORGE_MARKETING_CAMPAIGN.tagline}&rdquo;</strong>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                    <span className="text-slate-400">Slogan:</span>{' '}
                    <strong className="text-amber-400">&ldquo;{FLOWFORGE_MARKETING_CAMPAIGN.slogan}&rdquo;</strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
                <button
                  onClick={() =>
                    handleCopy(
                      `FLOWFORGE MARKETING CAMPAIGN: ${FLOWFORGE_MARKETING_CAMPAIGN.campaignName}\n` +
                      `Tagline: ${FLOWFORGE_MARKETING_CAMPAIGN.tagline}\n` +
                      `Slogan: ${FLOWFORGE_MARKETING_CAMPAIGN.slogan}\n` +
                      `Core Message: ${FLOWFORGE_MARKETING_CAMPAIGN.coreMessage}\n\n` +
                      `5 CAMPAIGN PILLARS:\n` +
                      FLOWFORGE_MARKETING_CAMPAIGN.pillars.map(p => `• ${p.name}: ${p.tagline} - ${p.description}`).join('\n') +
                      `\n\nEMAIL 3-PART SEQUENCE:\n` +
                      FLOWFORGE_MARKETING_CAMPAIGN.emails.map(e => `[Email ${e.step}] ${e.subject}\nPreview: ${e.previewText}\nHeadline: ${e.headline}\n`).join('\n'),
                      'copy_marketing_campaign'
                    )
                  }
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  {copiedKey === 'copy_marketing_campaign' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'copy_marketing_campaign' ? 'Copied Campaign Spec!' : 'Copy Campaign Spec'}</span>
                </button>
              </div>
            </div>

            {/* 5 Campaign Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6 pt-6 border-t border-slate-800">
              {FLOWFORGE_MARKETING_CAMPAIGN.pillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{pillar.name}</h4>
                  </div>
                  <p className="text-[11px] font-semibold text-cyan-400">{pillar.tagline}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Channels Sub-Navigation */}
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 text-xs overflow-x-auto no-scrollbar">
            {[
              { id: 'emails', label: '1. Email Campaign (3-Part)', icon: MailIcon },
              { id: 'linkedin', label: '2. LinkedIn Organic & Visuals', icon: Share2Icon },
              { id: 'ads', label: '3. Paid Ad Creatives', icon: TargetIcon },
              { id: 'cta', label: '4. Landing Page Pilot CTA', icon: ZapIcon }
            ].map(sub => {
              const Icon = sub.icon;
              const isActive = marketingSubTab === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setMarketingSubTab(sub.id as any)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-bold transition cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-800 text-white border border-slate-700'
                      : 'text-slate-400 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{sub.label}</span>
                </button>
              );
            })}
          </div>

          {/* SubTab 1: 3-Part Email Sequence */}
          {marketingSubTab === 'emails' && (
            <div className="space-y-4">
              {/* Email Step Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {FLOWFORGE_MARKETING_CAMPAIGN.emails.map(email => {
                  const isActive = activeEmailStep === email.step;
                  return (
                    <button
                      key={email.step}
                      onClick={() => setActiveEmailStep(email.step)}
                      className={`text-left p-4 rounded-xl border transition cursor-pointer space-y-1.5 ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-500/40 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          Email 0{email.step} • {email.timing}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white line-clamp-1">&ldquo;{email.subject}&rdquo;</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2">{email.previewText}</p>
                    </button>
                  );
                })}
              </div>

              {/* Active Email Preview Client Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                        AUDIENCE: {activeEmail.targetAudience}
                      </span>
                      <span className="text-xs text-slate-400">Scheduled: {activeEmail.timing}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
                      <MailIcon className="w-4 h-4 text-cyan-400" />
                      <span>Subject: {activeEmail.subject}</span>
                    </h3>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        `SUBJECT: ${activeEmail.subject}\nPREVIEW: ${activeEmail.previewText}\n\n${activeEmail.headline}\n\n${activeEmail.bodyParagraphs.join('\n\n')}\n\nKey Highlights:\n${activeEmail.bulletPoints.map(b => `• ${b}`).join('\n')}\n\nCTA: ${activeEmail.ctaText} (${activeEmail.ctaSubtext})\n`,
                        `copy_email_${activeEmail.step}`
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5 shrink-0 self-start sm:self-center"
                  >
                    {copiedKey === `copy_email_${activeEmail.step}` ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copiedKey === `copy_email_${activeEmail.step}` ? 'Copied Email Draft!' : 'Copy Email HTML/Text'}</span>
                  </button>
                </div>

                <div className="p-6 sm:p-8 space-y-6 bg-slate-900/60 max-w-3xl mx-auto">
                  <div className="border-b border-slate-800/80 pb-4">
                    <p className="text-xs font-mono text-slate-400">Preview Header: &ldquo;{activeEmail.previewText}&rdquo;</p>
                    <h2 className="text-xl sm:text-2xl font-black text-white mt-3 leading-tight">
                      {activeEmail.headline}
                    </h2>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                    {activeEmail.bodyParagraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {activeEmail.bulletPoints.length > 0 && (
                    <div className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-2.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        What this means for your engineering teams:
                      </span>
                      <ul className="space-y-2">
                        {activeEmail.bulletPoints.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2Icon className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Primary Email CTA Button */}
                  <div className="pt-4 text-center space-y-2">
                    <button
                      onClick={() => setActiveTab('contract')}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold shadow-lg shadow-cyan-500/20 transition cursor-pointer"
                    >
                      <span>{activeEmail.ctaText}</span>
                      <ChevronRightIcon className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-slate-400">{activeEmail.ctaSubtext}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 2: LinkedIn Campaign */}
          {marketingSubTab === 'linkedin' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {FLOWFORGE_MARKETING_CAMPAIGN.linkedInAssets.map(asset => {
                  const isActive = activeLinkedInAssetId === asset.id;
                  return (
                    <button
                      key={asset.id}
                      onClick={() => setActiveLinkedInAssetId(asset.id)}
                      className={`text-left p-3.5 rounded-xl border transition cursor-pointer space-y-1 ${
                        isActive
                          ? 'bg-amber-500/10 border-amber-500/40 text-white shadow'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold">
                        {asset.type}
                      </span>
                      <h4 className="text-xs font-bold text-white mt-1 line-clamp-1">{asset.title}</h4>
                    </button>
                  );
                })}
              </div>

              {/* LinkedIn Post Mockup */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 max-w-2xl mx-auto shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold">
                      FF
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">FlowForge • The Stability OS</h4>
                      <p className="text-[11px] text-slate-400">Promoted Enterprise Insight • 12,480 followers</p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        `${activeLinkedIn.postCopy}\n\n${activeLinkedIn.hashtags.join(' ')}`,
                        'copy_li_post'
                      )
                    }
                    className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                  >
                    {copiedKey === 'copy_li_post' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'copy_li_post' ? 'Copied!' : 'Copy Post'}</span>
                  </button>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                  {activeLinkedIn.postCopy}
                </div>

                <div className="flex flex-wrap gap-1.5 text-xs text-cyan-400 font-mono">
                  {activeLinkedIn.hashtags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>

                {/* Visual Creative Mock Frame */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">
                    Accompanying Visual Graphic Spec:
                  </span>
                  <p className="text-xs text-slate-300">{activeLinkedIn.visualPrompt}</p>
                  <div className="pt-2 border-t border-slate-850 text-xs text-emerald-400 font-semibold flex items-center space-x-1.5">
                    <CheckCircle2Icon className="w-4 h-4" />
                    <span>Key Stat Callout: {activeLinkedIn.metricsHighlight}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SubTab 3: Paid Ads */}
          {marketingSubTab === 'ads' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FLOWFORGE_MARKETING_CAMPAIGN.paidAds.map((ad, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold">
                        {ad.platform}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{ad.format}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">{ad.headline}</h3>
                    <p className="text-xs font-semibold text-cyan-400">{ad.subHeadline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{ad.bodyText}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Audience Targeting:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {ad.targeting.map((t, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-850">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-emerald-400">{ad.callToAction}</span>
                      <button
                        onClick={() => handleCopy(`${ad.headline}\n${ad.subHeadline}\n${ad.bodyText}\nCTA: ${ad.callToAction}`, `copy_ad_${idx}`)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1"
                      >
                        {copiedKey === `copy_ad_${idx}` ? <CheckIcon className="w-3 h-3 text-emerald-400" /> : <CopyIcon className="w-3 h-3" />}
                        <span>{copiedKey === `copy_ad_${idx}` ? 'Copied' : 'Copy Ad'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SubTab 4: Landing Page Pilot CTA */}
          {marketingSubTab === 'cta' && (
            <div className="bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 border border-cyan-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto space-y-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/40 inline-flex items-center space-x-1.5">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>30-Day Zero-Obligation Enterprise Pilot</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {FLOWFORGE_MARKETING_CAMPAIGN.landingPageCTA.primaryTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-300">
                  {FLOWFORGE_MARKETING_CAMPAIGN.landingPageCTA.subtitle}
                </p>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-emerald-400 font-semibold inline-block">
                  🛡️ {FLOWFORGE_MARKETING_CAMPAIGN.landingPageCTA.guarantee}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('contract')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-black shadow-xl shadow-cyan-500/25 transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{FLOWFORGE_MARKETING_CAMPAIGN.landingPageCTA.buttonText}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('partners')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold border border-slate-700 transition cursor-pointer"
                >
                  Explore Partner Network (FPN)
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= SECTION 2: ENTERPRISE CONTRACT (MSA & SLA) ================= */}
      {activeTab === 'contract' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                  Texas Jurisdiction • Governing Law
                </span>
                <span className="text-xs text-slate-400">CFO TAX PRO LLC (dba FlowForge)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                FlowForge Master Services Agreement & Enterprise SLA
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Standard institutional legal contract covering all 9 statutory clauses and SLA commitments.
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <div className="flex items-center bg-slate-800 rounded-xl p-0.5 border border-slate-700">
                <button
                  onClick={() => setContractSubTab('msa')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    contractSubTab === 'msa' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  MSA (9 Clauses)
                </button>
                <button
                  onClick={() => setContractSubTab('sla')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    contractSubTab === 'sla' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Enterprise SLA
                </button>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    `${FLOWFORGE_MASTER_SERVICE_AGREEMENT.contractTitle}\n` +
                    `Entity: ${FLOWFORGE_MASTER_SERVICE_AGREEMENT.entityName}\n` +
                    `Jurisdiction: ${FLOWFORGE_MASTER_SERVICE_AGREEMENT.jurisdiction}\n\n` +
                    FLOWFORGE_MASTER_SERVICE_AGREEMENT.clauses.map(c => `CLAUSE ${c.clauseNumber}: ${c.title}\n${c.legalText}\n`).join('\n---\n\n') +
                    `\n\nENTERPRISE SLA COMMITMENTS:\n` +
                    FLOWFORGE_ENTERPRISE_SLA.sections.map(s => `${s.title}:\n` + s.metrics.map(m => `• ${m.metric} (${m.cadence}): ${m.standard} [Remedy: ${m.remedy}]`).join('\n')).join('\n\n'),
                    'copy_full_contract'
                  )
                }
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_full_contract' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_full_contract' ? 'Copied Full MSA!' : 'Copy Full Legal Text'}</span>
              </button>
            </div>
          </div>

          {/* Pricing Tier Selector Banner */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <DollarSignIcon className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-xs font-bold text-white">Clause 4 Schedule: Subscription Tiers</span>
                <p className="text-[11px] text-slate-400">Monthly subscription rates governed by seats and custom rule limits.</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {(['foundation', 'growth', 'enterprise'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setContractTierFilter(tier)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer capitalize ${
                    contractTierFilter === tier
                      ? 'bg-cyan-500 text-slate-950 shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                  }`}
                >
                  {tier} (${tierPricing[tier].price}/mo)
                </button>
              ))}
            </div>
          </div>

          {/* MSA View */}
          {contractSubTab === 'msa' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Clause Navigation Sidebar */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-2">
                  Agreement Clauses (1 - 9)
                </span>
                {FLOWFORGE_MASTER_SERVICE_AGREEMENT.clauses.map(clause => {
                  const isActive = selectedClauseNumber === clause.clauseNumber;
                  return (
                    <button
                      key={clause.clauseNumber}
                      onClick={() => setSelectedClauseNumber(clause.clauseNumber)}
                      className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                        isActive
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white'
                      }`}
                    >
                      <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        0{clause.clauseNumber}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold">{clause.title}</h4>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{clause.summary}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Clause Detail Content Area */}
              <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                      Clause 0{activeClause.clauseNumber} of 09 • Master Services Agreement
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">{activeClause.title}</h3>
                  </div>

                  <button
                    onClick={() => handleCopy(`CLAUSE ${activeClause.clauseNumber}: ${activeClause.title}\n\n${activeClause.legalText}`, `copy_clause_${activeClause.clauseNumber}`)}
                    className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1 self-start sm:self-center"
                  >
                    {copiedKey === `copy_clause_${activeClause.clauseNumber}` ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copiedKey === `copy_clause_${activeClause.clauseNumber}` ? 'Copied Clause' : 'Copy Clause'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">Executive Summary:</span>
                  <p className="text-xs sm:text-sm text-slate-200">{activeClause.summary}</p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Formal Legal Contract Text:
                  </span>
                  <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-850 font-serif text-xs sm:text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                    {activeClause.legalText}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Governance Enforcement: <strong className="text-emerald-400">{activeClause.governanceBinding}</strong></span>
                  <span className="text-[11px] font-mono text-slate-500">Jurisdiction: Texas, USA</span>
                </div>
              </div>
            </div>
          )}

          {/* SLA View */}
          {contractSubTab === 'sla' && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                  <span>{FLOWFORGE_ENTERPRISE_SLA.slaTitle}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {FLOWFORGE_ENTERPRISE_SLA.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FLOWFORGE_ENTERPRISE_SLA.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold">
                          SLA Pillar 0{idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1.5">{sec.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{sec.description}</p>
                      </div>

                      <div className="space-y-3 pt-2">
                        {sec.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1 text-xs">
                            <div className="flex items-center justify-between">
                              <h5 className="font-bold text-white">{m.metric}</h5>
                              <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded">
                                {m.cadence}
                              </span>
                            </div>
                            <p className="text-slate-300">{m.standard}</p>
                            <div className="text-[11px] text-emerald-400 pt-1 border-t border-slate-850">
                              Remedy: {m.remedy}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= SECTION 3: FCSA CERTIFICATION EXAM ================= */}
      {activeTab === 'exam' && (
        <div className="space-y-6">
          {/* Exam Status Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                  {FCSA_EXAM_METADATA.code} • OFFICIAL SIMULATOR
                </span>
                <span className="text-xs text-slate-400">Passing: {FCSA_EXAM_METADATA.passingScorePercent}% (32/40 Qs)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {FCSA_EXAM_METADATA.certificationName}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Proctored examination assessing Stability Fundamentals, RulePack Governance, Autonomy Protocols, Forecast Intelligence, and ESA Audits.
              </p>
            </div>

            {/* Timer & Controls */}
            {examStatus === 'active' && (
              <div className="flex items-center space-x-3 shrink-0 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5">
                <ClockIcon className={`w-5 h-5 ${timeLeftSeconds < 300 ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}`} />
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Time Remaining</span>
                  <span className={`text-lg font-mono font-black ${timeLeftSeconds < 300 ? 'text-rose-400' : 'text-white'}`}>
                    {formatTime(timeLeftSeconds)}
                  </span>
                </div>
                <button
                  onClick={() => setIsTimerPaused(!isTimerPaused)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold ml-2 transition"
                >
                  {isTimerPaused ? 'Resume' : 'Pause'}
                </button>
              </div>
            )}
          </div>

          {/* Mode 1: Intro Screen */}
          {examStatus === 'intro' && (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 max-w-3xl mx-auto shadow-2xl">
              <div className="space-y-3 text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto shadow-lg">
                  <AwardIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  FlowForge Certified Stability Architect (FCSA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  Demonstrate certified mastery of stability engineering, governance enforcement, and autonomous workload orchestration.
                </p>
              </div>

              {/* Exam Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="text-2xl font-black text-white">{FCSA_EXAM_METADATA.totalQuestions}</span>
                  <p className="text-xs text-slate-400 mt-1">Questions</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="text-2xl font-black text-cyan-400">{FCSA_EXAM_METADATA.durationMinutes}m</span>
                  <p className="text-xs text-slate-400 mt-1">Duration</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="text-2xl font-black text-emerald-400">{FCSA_EXAM_METADATA.passingScorePercent}%</span>
                  <p className="text-xs text-slate-400 mt-1">Pass Score (32 Qs)</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                  <span className="text-2xl font-black text-amber-400">5</span>
                  <p className="text-xs text-slate-400 mt-1">Core Sections</p>
                </div>
              </div>

              {/* 5 Sections Breakdown */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Curriculum Breakdown:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {FCSA_EXAM_METADATA.examSections.map((sec, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-between text-slate-300">
                      <span>{sec.name}</span>
                      <span className="font-mono text-cyan-400">{sec.count} Qs ({sec.weight})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Candidate Info Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Candidate Name (for Certificate):</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={e => setCandidateName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                  placeholder="e.g. Alex Morgan, VP of Engineering"
                />
              </div>

              {/* Launch Exam Button */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    setExamStatus('active');
                    setTimeLeftSeconds(60 * 60);
                  }}
                  className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 text-sm font-black shadow-xl shadow-purple-500/25 transition cursor-pointer"
                >
                  Start FCSA Examination Now (60 Minutes)
                </button>
              </div>
            </div>
          )}

          {/* Mode 2: Active Exam Testing Canvas */}
          {examStatus === 'active' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question Navigator Sidebar */}
              <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Question Matrix (40)
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {answeredCount} of {totalQuestions} answered
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                  />
                </div>

                {/* Section Filter Pills */}
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {['all', 'Stability Fundamentals', 'Governance', 'Autonomy', 'Intelligence', 'ESA'].map(sec => (
                    <button
                      key={sec}
                      onClick={() => setSelectedSectionFilter(sec)}
                      className={`px-2 py-0.5 rounded font-mono transition cursor-pointer ${
                        selectedSectionFilter === sec ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                      }`}
                    >
                      {sec === 'all' ? 'All' : sec.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* 40 Question Grid */}
                <div className="grid grid-cols-8 gap-1.5 max-h-64 overflow-y-auto pr-1">
                  {FCSA_QUESTION_BANK.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isFlagged = flaggedQuestions[q.id];
                    const isCurrent = currentQuestionIndex === idx;
                    const matchesFilter = selectedSectionFilter === 'all' || q.section === selectedSectionFilter;

                    if (!matchesFilter) return null;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`h-8 rounded text-xs font-mono font-bold transition flex items-center justify-center relative cursor-pointer ${
                          isCurrent
                            ? 'ring-2 ring-purple-400 bg-purple-500 text-slate-950 font-black'
                            : isAnswered
                            ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                        }`}
                      >
                        <span>{q.id}</span>
                        {isFlagged && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute top-1 right-1" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to submit the exam for scoring?')) {
                        setExamStatus('review');
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer"
                  >
                    Submit Exam for Scoring ({answeredCount}/40 answered)
                  </button>
                </div>
              </div>

              {/* Active Question Canvas */}
              <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Question Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 font-mono text-xs font-bold border border-purple-800/40">
                        QUESTION {currentQuestion.id} / 40
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {currentQuestion.section}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        setFlaggedQuestions(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }))
                      }
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                        flaggedQuestions[currentQuestion.id]
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <FlagIcon className="w-3.5 h-3.5" />
                      <span>{flaggedQuestions[currentQuestion.id] ? 'Flagged for Review' : 'Flag Question'}</span>
                    </button>
                  </div>

                  {/* Question Prompt */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                    {currentQuestion.question}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-3 pt-2">
                    {currentQuestion.options.map((option, optIdx) => {
                      const isSelected = userAnswers[currentQuestion.id] === optIdx;
                      const optionLetters = ['A', 'B', 'C', 'D'];
                      return (
                        <button
                          key={optIdx}
                          onClick={() =>
                            setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: optIdx }))
                          }
                          className={`w-full text-left p-4 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                            isSelected
                              ? 'bg-purple-500/15 border-purple-500 text-white shadow-md'
                              : 'bg-slate-950 border-slate-850 text-slate-300 hover:bg-slate-850 hover:text-white'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected ? 'bg-purple-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {optionLetters[optIdx]}
                          </span>
                          <span className="text-xs sm:text-sm font-medium leading-relaxed">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Footer Navigation */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-30 text-slate-200 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <span className="text-xs text-slate-400 font-mono">
                    {currentQuestionIndex + 1} of {totalQuestions}
                  </span>

                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 disabled:opacity-30 text-slate-950 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mode 3: Exam Review & Certificate Generator */}
          {examStatus === 'review' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Scorecard Hero Banner */}
              <div className={`p-8 rounded-3xl border shadow-2xl relative overflow-hidden text-center space-y-4 ${
                examScore.passed
                  ? 'bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 border-emerald-500/50'
                  : 'bg-gradient-to-r from-slate-950 via-rose-950/40 to-slate-950 border-rose-500/50'
              }`}>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  <AwardIcon className={`w-4 h-4 ${examScore.passed ? 'text-emerald-400' : 'text-rose-400'}`} />
                  <span className="text-xs font-mono font-bold text-white">
                    {examScore.passed ? 'CERTIFICATION PASSED' : 'DID NOT MEET 80% PASSING THRESHOLD'}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Candidate: {candidateName}
                </h3>

                <div className="flex items-center justify-center space-x-6 pt-2">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Total Score</span>
                    <span className={`text-4xl font-black ${examScore.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {examScore.percent}%
                    </span>
                  </div>
                  <div className="h-10 w-px bg-slate-800" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Correct Answers</span>
                    <span className="text-4xl font-black text-white">
                      {examScore.correct} / {examScore.total}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  {examScore.passed
                    ? 'Congratulations! You have demonstrated verified mastery of FlowForge Stability Architecture and are accredited to deliver and sign official Enterprise Stability Audits (ESA).'
                    : 'A minimum score of 80% (32 out of 40 correct) is required for accreditation. Please review your performance analysis below and retake the exam.'}
                </p>

                <div className="flex items-center justify-center space-x-3 pt-2">
                  <button
                    onClick={() => {
                      setExamStatus('intro');
                      setUserAnswers({});
                      setFlaggedQuestions({});
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
                  >
                    <RotateCcwIcon className="w-3.5 h-3.5" />
                    <span>Retake Examination</span>
                  </button>
                  {examScore.passed && (
                    <button
                      onClick={handlePrint}
                      className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer flex items-center space-x-1.5 shadow-lg shadow-emerald-500/20"
                    >
                      <DownloadIcon className="w-3.5 h-3.5" />
                      <span>Print Official Certificate</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Printable Official Digital Certificate */}
              {examScore.passed && (
                <div className="bg-slate-900 border-4 border-amber-500/60 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                      FLOWFORGE ACCREDITATION REGISTRY
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      CREDENTIAL ID: FCSA-2026-TX-{Math.floor(Math.random() * 89999 + 10000)}
                    </span>
                  </div>

                  <div className="space-y-2 py-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                      This is to officially certify that
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
                      {candidateName}
                    </h2>
                    <p className="text-sm text-slate-300 max-w-xl mx-auto pt-2">
                      has successfully satisfied all examination criteria, governance requirements, and autonomous orchestration standards to be recognized as an accredited
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 pt-2 tracking-wide font-sans">
                      FlowForge Certified Stability Architect (FCSA)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-500 block font-mono">Date Issued</span>
                      <span className="text-slate-200 font-bold font-mono">September 2026</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-mono">Governing Authority</span>
                      <span className="text-slate-200 font-bold">CFO TAX PRO LLC (dba FlowForge)</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block font-mono">Status</span>
                      <span className="text-emerald-400 font-bold font-mono">VERIFIED ACTIVE (Level 4)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Question Review List */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                    <HelpCircleIcon className="w-4 h-4 text-cyan-400" />
                    <span>Complete 40-Question Exam Review & Statutory Citations</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Review Explanations
                  </span>
                </div>

                <div className="divide-y divide-slate-800 text-xs">
                  {FCSA_QUESTION_BANK.map(q => {
                    const candidateAnswer = userAnswers[q.id];
                    const isCorrect = candidateAnswer === q.correctIndex;
                    return (
                      <div key={q.id} className="py-4 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start space-x-2.5">
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                              isCorrect ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40' : 'bg-rose-950 text-rose-300 border border-rose-800/40'
                            }`}>
                              Q{q.id} • {isCorrect ? 'CORRECT' : 'INCORRECT'}
                            </span>
                            <h4 className="font-bold text-white text-xs sm:text-sm">{q.question}</h4>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 shrink-0">
                            {q.section}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 text-[11px]">
                          <div className="p-2 rounded bg-slate-950 border border-slate-850">
                            <span className="text-slate-500 block">Your Answer:</span>
                            <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                              {candidateAnswer !== undefined ? q.options[candidateAnswer] : 'Unanswered'}
                            </span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-850">
                            <span className="text-slate-500 block">Correct Answer:</span>
                            <span className="text-emerald-400 font-bold">{q.options[q.correctIndex]}</span>
                          </div>
                        </div>

                        <div className="pl-4 text-[11px] text-slate-300 bg-slate-950/60 p-2.5 rounded border border-slate-850">
                          <strong className="text-cyan-400 font-mono">Explanation: </strong>
                          {q.explanation}
                          {q.statutoryReference && (
                            <span className="block mt-1 text-[10px] text-slate-500 font-mono">
                              Statutory Ref: {q.statutoryReference}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= SECTION 4: PARTNER PROGRAM (FPN) ================= */}
      {activeTab === 'partners' && (
        <div className="space-y-6">
          {/* Partner Hero Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                  FLOWFORGE PARTNER NETWORK (FPN)
                </span>
                <span className="text-xs text-slate-400">Consulting & System Integrator Program</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {FLOWFORGE_PARTNER_PROGRAM.programName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 max-w-2xl">
                {FLOWFORGE_PARTNER_PROGRAM.mission}
              </p>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setShowPartnerApplyModal(true)}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center space-x-1.5"
              >
                <UsersIcon className="w-3.5 h-3.5" />
                <span>Apply to FPN</span>
              </button>
              <button
                onClick={() =>
                  handleCopy(
                    `FLOWFORGE PARTNER NETWORK (FPN) OVERVIEW:\n` +
                    `Mission: ${FLOWFORGE_PARTNER_PROGRAM.mission}\n\n` +
                    `PARTNER TIERS:\n` +
                    FLOWFORGE_PARTNER_PROGRAM.tiers.map(t => `${t.name} (${t.revShare}):\n• Requirements: ${t.requirements.join('; ')}\n• Benefits: ${t.benefits.join('; ')}\n`).join('\n') +
                    `\n\nCERTIFICATION PATH (6 STEPS):\n` +
                    FLOWFORGE_PARTNER_PROGRAM.certificationPath.map(p => `Step ${p.stepNumber}: ${p.title} - ${p.description} (Deliverable: ${p.deliverable})\n`).join('\n'),
                    'copy_partner_program'
                  )
                }
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition cursor-pointer flex items-center space-x-1.5"
              >
                {copiedKey === 'copy_partner_program' ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'copy_partner_program' ? 'Copied Program!' : 'Copy One-Pager'}</span>
              </button>
            </div>
          </div>

          {/* 4 Partner Tiers Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLOWFORGE_PARTNER_PROGRAM.tiers.map(tier => {
              const isSelected = selectedPartnerTierId === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedPartnerTierId(tier.id)}
                  className={`bg-slate-900 border rounded-2xl p-5 space-y-4 cursor-pointer transition flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-500 shadow-xl shadow-emerald-500/10 scale-[1.02]'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                        style={{ backgroundColor: `${tier.accentColor}20`, color: tier.accentColor }}
                      >
                        {tier.badge}
                      </span>
                      <span className="text-xs font-black text-emerald-400">{tier.revShare}</span>
                    </div>

                    <h3 className="text-base font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{tier.description}</p>

                    {/* Requirements */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">
                        Requirements:
                      </span>
                      <ul className="mt-1 space-y-1">
                        {tier.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="text-[11px] text-slate-300 flex items-start space-x-1.5">
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                        Benefits:
                      </span>
                      <ul className="mt-1 space-y-1">
                        {tier.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="text-[11px] text-slate-300 flex items-start space-x-1.5">
                            <CheckIcon className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400">
                    Ideal: <strong className="text-slate-300">{tier.idealFor}</strong>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Revenue Share Interactive Calculator */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <DollarSignIcon className="w-4 h-4 text-emerald-400" />
                  <span>Partner Margin & Revenue Share Calculator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Simulate annual recurring consulting revenue based on managed enterprise accounts.
                </p>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <span className="text-slate-300">Managed Enterprise Accounts:</span>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={partnerSeatsInput}
                  onChange={e => setPartnerSeatsInput(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono text-center"
                />
              </div>
            </div>

            {/* Calculated Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs text-slate-400 block font-mono">Gross Managed Software ARR</span>
                <span className="text-2xl font-black text-white mt-1 block font-mono">
                  ${(partnerSeatsInput * 3000 * 12).toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500">Based on Growth Tier ($3k/mo avg)</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs text-slate-400 block font-mono">Selected Tier Share ({activePartnerTier.name})</span>
                <span className="text-2xl font-black text-cyan-400 mt-1 block font-mono">
                  {activePartnerTier.revShare}
                </span>
                <span className="text-[10px] text-slate-500">Contractually recurring</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850">
                <span className="text-xs text-slate-400 block font-mono">Annual Partner Net Recurring Commission</span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block font-mono">
                  ${(
                    partnerSeatsInput *
                    3000 *
                    12 *
                    (activePartnerTier.id === 'registered'
                      ? 0.15
                      : activePartnerTier.id === 'certified'
                      ? 0.20
                      : activePartnerTier.id === 'advanced'
                      ? 0.25
                      : 0.35)
                  ).toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-500 font-semibold">+ $15,000 per ESA audit fee retained</span>
              </div>
            </div>
          </div>

          {/* Partner Certification Path (Sequential Timeline) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                Sequential Timeline
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Complete Partner Certification Path (6 Milestones)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                The structured accreditation roadmap from initial training to sovereign enterprise deployment.
              </p>
            </div>

            <div className="space-y-4">
              {FLOWFORGE_PARTNER_PROGRAM.certificationPath.map((step, idx) => (
                <div
                  key={step.stepNumber}
                  className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-750 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-4">
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono font-black text-sm flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                          {step.milestoneBadge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">{step.description}</p>
                      <div className="text-[11px] text-emerald-400 flex items-center space-x-1.5 pt-1">
                        <CheckIcon className="w-3.5 h-3.5" />
                        <span>Deliverable: <strong>{step.deliverable}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 self-start sm:self-center">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Estimated Duration</span>
                    <span className="text-xs font-mono text-slate-300">{step.durationEstimate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Partner Application Modal */}
      {showPartnerApplyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <UsersIcon className="w-5 h-5 text-emerald-400" />
                <span>Apply to FlowForge Partner Network</span>
              </h3>
              <button
                onClick={() => setShowPartnerApplyModal(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>

            {partnerApplySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Received</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your enterprise partner profile has been registered. A FlowForge Partner Director will review your submission and contact you within 24 hours with Academy vouchers.
                </p>
                <button
                  onClick={() => {
                    setShowPartnerApplyModal(false);
                    setPartnerApplySubmitted(false);
                  }}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setPartnerApplySubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Company / Advisory Practice Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Cloud Solutions LLC"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Partner Lead Email</label>
                  <input
                    type="email"
                    required
                    placeholder="partner@yourfirm.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Target Partner Level</label>
                  <select className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500">
                    <option value="registered">Registered Partner (15% rev share)</option>
                    <option value="certified">Certified Partner (20% rev share + ESA rights)</option>
                    <option value="advanced">Advanced Partner (25% rev share + co-selling)</option>
                    <option value="elite">Elite Partner (35% rev share + GSI status)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Number of Certified Architects Planned</label>
                  <input
                    type="number"
                    defaultValue={2}
                    min={1}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowPartnerApplyModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition shadow-lg shadow-emerald-500/20"
                  >
                    Submit Partner Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
