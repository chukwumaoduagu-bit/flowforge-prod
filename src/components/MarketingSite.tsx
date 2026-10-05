import React, { useState, useEffect } from 'react';
import { 
  SparklesIcon, 
  ArrowRightIcon, 
  CheckCircle2Icon, 
  CoinsIcon, 
  LayersIcon, 
  ShieldCheckIcon, 
  TargetIcon, 
  TrendingUpIcon, 
  ZapIcon, 
  Building2, 
  ChevronRightIcon, 
  TerminalIcon, 
  LockIcon, 
  PlayIcon,
  BarChart3Icon,
  UsersIcon,
  DollarSignIcon,
  GlobeIcon,
  Code2Icon,
  CheckIcon,
  StarIcon,
  BookOpenIcon,
  CopyIcon,
  MailIcon,
  MessageSquareIcon,
  FileTextIcon,
  SlidersIcon,
  CrownIcon,
  CompassIcon,
  AwardIcon,
  CpuIcon,
  ActivityIcon,
  BotIcon,
  FlameIcon,
  CreditCardIcon,
  ReceiptIcon,
  UserIcon,
  SendIcon
} from 'lucide-react';
import { WEBSITE_PAGES, getFullWebsiteCopyText } from '../data/websiteCopyData';
import { CODEX_MANIFESTO } from '../data/codexUnifiedData';
import { AiDealCloserView } from './AiDealCloserView';
import { MvpRevenueExecutionView } from './MvpRevenueExecutionView';
import { StabilityDashboardView } from './StabilityDashboardView';
import { MvpDashboardPrototypeView } from './MvpDashboardPrototypeView';

export type MarketingPageType = 
  | 'home' 
  | 'product' 
  | 'platform' 
  | 'category' 
  | 'founders' 
  | 'pricing' 
  | 'esa_cert' 
  | 'contact' 
  | 'ai_closer' 
  | 'mvp_revenue' 
  | 'mvp_dashboard'
  | 'stability_core';

interface MarketingSiteProps {
  onEnterApp: () => void;
  onOpenLogin: () => void;
  onOpenCreditModal: () => void;
  initialPage?: MarketingPageType;
  onPageChange?: (page: MarketingPageType) => void;
}

export const MarketingSite: React.FC<MarketingSiteProps> = ({
  onEnterApp,
  onOpenLogin,
  onOpenCreditModal,
  initialPage = 'home',
  onPageChange
}) => {
  const [activePage, setActivePage] = useState<MarketingPageType>(initialPage);

  useEffect(() => {
    if (initialPage && initialPage !== activePage) {
      setActivePage(initialPage);
    }
  }, [initialPage]);

  const handleSelectPage = (page: MarketingPageType) => {
    setActivePage(page);
    if (onPageChange) {
      onPageChange(page);
    }
    window.location.hash = page;
  };
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [teamSize, setTeamSize] = useState<number>(25);
  const [idlePercent, setIdlePercent] = useState<number>(20);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [demoEmail, setDemoEmail] = useState<string>('');
  const [demoName, setDemoName] = useState<string>('');
  const [demoCompany, setDemoCompany] = useState<string>('');
  const [demoMessage, setDemoMessage] = useState<string>('');
  const [demoSubmitted, setDemoSubmitted] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // ROI Calculator Math
  const totalDevHours = teamSize * 2000;
  const idleHoursPerYear = totalDevHours * (idlePercent / 100);
  const trappedValueUSD = idleHoursPerYear * 75; // $75/hr market value
  const ffxCreditRevenue = trappedValueUSD * 0.95; // 95% net after 5% platform fee

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail) return;
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setIsDemoModalOpen(false);
      setDemoEmail('');
      setDemoName('');
      setDemoCompany('');
      setDemoMessage('');
    }, 2200);
  };

  const handleCopyWebsiteCopy = () => {
    const text = getFullWebsiteCopyText();
    navigator.clipboard.writeText(text);
    setCopiedNotification('Full Website Copy System copied to clipboard!');
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Top Banner: Category & Copy System Quick Export */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border-b border-cyan-800/40 px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold text-cyan-300">Category Creator:</span>
          <span className="text-slate-300">Engineering Load Orchestration (ELO) by Chuck Oduagu</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyWebsiteCopy}
            className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-[11px] font-mono flex items-center space-x-1.5 transition cursor-pointer"
            title="Copy all 6 pages into clipboard for Webflow/Framer"
          >
            <CopyIcon className="w-3 h-3" />
            <span>Copy Full Website Copy System</span>
          </button>
        </div>
      </div>

      {/* Copy Notification Toast */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xl flex items-center space-x-2 animate-bounce">
          <CheckCircle2Icon className="w-4 h-4" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <SparklesIcon className="w-4 h-4 text-slate-950 font-bold" />
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-base tracking-tight text-white">FlowForge</span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-1.5 py-0.5 rounded font-mono font-bold">
                ELO OS
              </span>
            </div>
          </div>

          {/* Page Switcher Tabs */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => handleSelectPage('home')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'home' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleSelectPage('product')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'product' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Product
            </button>
            <button
              onClick={() => handleSelectPage('platform')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'platform' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Platform
            </button>
            <button
              onClick={() => handleSelectPage('ai_closer')}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activePage === 'ai_closer'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black shadow-md'
                  : 'text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/60'
              }`}
            >
              <BotIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>AI Deal Closer</span>
              <span className="text-[9px] bg-emerald-400 text-slate-950 px-1 py-0.2 rounded font-extrabold">AUTONOMOUS</span>
            </button>
            <button
              onClick={() => handleSelectPage('mvp_revenue')}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activePage === 'mvp_revenue'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'text-amber-300 hover:text-white bg-amber-950/40 border border-amber-500/40 hover:bg-amber-900/60'
              }`}
            >
              <DollarSignIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Money Path</span>
              <span className="text-[9px] bg-amber-400 text-slate-950 px-1 py-0.2 rounded font-extrabold">MVP</span>
            </button>
            <button
              onClick={() => handleSelectPage('mvp_dashboard')}
              className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                activePage === 'mvp_dashboard'
                  ? 'bg-emerald-400 text-slate-950 font-black shadow-md'
                  : 'text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/60'
              }`}
            >
              <TargetIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>MVP Dashboard</span>
              <span className="text-[9px] bg-emerald-400 text-slate-950 px-1 py-0.2 rounded font-extrabold">$3k</span>
            </button>
            <button
              onClick={() => handleSelectPage('stability_core')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center space-x-1.5 cursor-pointer ${
                activePage === 'stability_core'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-cyan-300 hover:text-white bg-cyan-950/40 border border-cyan-800/40 hover:bg-cyan-900/60'
              }`}
            >
              <ActivityIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>Stability Core</span>
            </button>
            <button
              onClick={() => handleSelectPage('pricing')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'pricing' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleSelectPage('esa_cert')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'esa_cert' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              ESA Certification
            </button>
            <button
              onClick={() => handleSelectPage('category')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'category' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Category (ESP)
            </button>
            <button
              onClick={() => handleSelectPage('founders')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'founders' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              About / Founders
            </button>
            <button
              onClick={() => handleSelectPage('contact')}
              className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                activePage === 'contact' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenLogin}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            Sign In
          </button>
          <button
            onClick={onEnterApp}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-950 flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Launch Live App</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </nav>

      {/* Mobile Page Switcher */}
      <div className="md:hidden flex items-center justify-start space-x-1 bg-slate-900 border-b border-slate-800 p-2 text-xs overflow-x-auto no-scrollbar">
        {(['home', 'ai_closer', 'mvp_revenue', 'stability_core', 'product', 'platform', 'pricing', 'esa_cert', 'category', 'founders', 'contact'] as const).map(p => (
          <button
            key={p}
            onClick={() => handleSelectPage(p)}
            className={`px-2.5 py-1 rounded-lg capitalize whitespace-nowrap ${
              activePage === p ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
            }`}
          >
            {p === 'ai_closer' ? '🤖 AI Closer' : p === 'mvp_revenue' ? '⭐ Money Path' : p === 'stability_core' ? '⚡ Stability Core' : p === 'esa_cert' ? 'ESA Cert' : p === 'category' ? 'Category' : p === 'founders' ? 'About' : p}
          </button>
        ))}
      </div>

      {/* ================= PAGE 1: HOME PAGE ================= */}
      {activePage === 'home' && (
        <div className="space-y-20 pb-20">
          {/* Hero Section */}
          <section className="relative pt-16 pb-12 px-4 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
              <div className="w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-24" />
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300 shadow-inner">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-cyan-400 font-bold">CATEGORY DEFINITION:</span>
                <span>Engineering Stability Platform (ESP)</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                FlowForge <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  The Stability OS for Engineering Teams
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-cyan-200 font-medium max-w-2xl mx-auto">
                Measure load. Predict burnout. Stabilize delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => handleSelectPage('mvp_dashboard')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm transition shadow-xl shadow-emerald-950/60 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <DollarSignIcon className="w-4 h-4" />
                  <span>Book Stability Assessment ($3,000 ESA)</span>
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-xl shadow-cyan-950/60 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Start Free Pilot → 30 Days</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActivePage('category')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BookOpenIcon className="w-4 h-4 text-cyan-400" />
                  <span>The Manifesto</span>
                </button>
              </div>

              {/* Sub-Hero Narrative */}
              <div className="pt-8 max-w-2xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center space-y-2">
                <p className="text-base font-semibold text-slate-200">
                  Engineering doesn’t fail because of code. <br />
                  <span className="text-rose-400">Engineering fails because it’s overloaded.</span>
                </p>
                <p className="text-xs text-slate-400">
                  FlowForge solves the real problem: <strong>engineering load instability</strong>.
                </p>
              </div>

              {/* Live AI Deal Closer Callout Banner on flowforge.fit */}
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border border-emerald-500/40 rounded-2xl p-5 text-left flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow">
                    <BotIcon className="w-6 h-6 text-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        ⚡ Autonomous AI Closer Active on flowforge.fit
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded font-mono font-semibold">
                        Gemini 3.8 Flash
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Try our interactive sales closer live: qualify your team’s delivery risk, test real CTO objections, and calculate Texas Tax Code § 151.351 (20% statutory savings) instantly.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActivePage('ai_closer')}
                  className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs transition shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
                >
                  <BotIcon className="w-4 h-4" />
                  <span>Try AI Closer Live</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* The Category Section */}
          <section className="px-4 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  THE CATEGORY
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Engineering Load Orchestration (ELO)
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A new discipline created by FlowForge. ELO stabilizes engineering load using AI:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Predict Overload', desc: 'Detect cognitive and dependency bottlenecks before sprint collapse' },
                  { title: 'Prevent Burnout', desc: 'Proactive load caps that protect engineering wellness and focus' },
                  { title: 'Stabilize Critical Paths', desc: 'Mathematical DAG protection ensuring zero-float milestones never fail' },
                  { title: 'Inject Slack', desc: 'Instant capacity liquidity through tokenized FFX credits' },
                  { title: 'Redistribute Tasks', desc: 'Autonomous dynamic load rebalancing across engineering roles' },
                  { title: 'Parallelize Workflows', desc: 'AI swarm copilot executing concurrent DevOps, QA, and backend tasks' },
                  { title: 'Guarantee Delivery', desc: 'Certainty in release dates, SLA commitments, and engineering economics' },
                  { title: 'Category Leader', desc: 'FlowForge created ELO and defines the standard for engineering stability' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h3 className="text-xs font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 flex-wrap gap-4">
                <span className="text-xs text-slate-400 font-medium">
                  <strong>FlowForge is the category leader.</strong>
                </span>
                <button
                  onClick={() => setActivePage('category')}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Explore ELO Framework & Metrics</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* The Product: Six Engines */}
          <section className="px-4 lg:px-8 max-w-7xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                THE PRODUCT
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Six Engines. One Operating System.
              </h2>
              <p className="text-xs text-slate-400">
                A unified architecture purpose-built for engineering load stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '1',
                  title: 'AI Orchestration Engine',
                  tag: 'Core Orchestration',
                  desc: 'Models load, predicts instability, stabilizes critical paths.',
                  icon: LayersIcon,
                  color: 'cyan'
                },
                {
                  num: '2',
                  title: 'FFX Marketplace',
                  tag: 'Liquidity Layer',
                  desc: 'Slack becomes liquid. Capacity becomes tradable.',
                  icon: CoinsIcon,
                  color: 'amber'
                },
                {
                  num: '3',
                  title: 'AI Swarm Copilot',
                  tag: 'Autonomy Layer',
                  desc: 'AI agents act autonomously across engineering roles.',
                  icon: ZapIcon,
                  color: 'purple'
                },
                {
                  num: '4',
                  title: 'Texas Compliance Engine',
                  tag: 'Trust Layer',
                  desc: 'Automatic §151.0101 and §151.351 SaaS exemption.',
                  icon: ShieldCheckIcon,
                  color: 'emerald'
                },
                {
                  num: '5',
                  title: 'What‑If Simulator',
                  tag: 'Economics & Simulation',
                  desc: 'Predictive engineering economics and Monte Carlo forecasts.',
                  icon: BarChart3Icon,
                  color: 'blue'
                },
                {
                  num: '6',
                  title: 'Enterprise Onboarding Platform',
                  tag: 'Enterprise Scale',
                  desc: 'Multi-tenant, compliance-grade enterprise setup and RBAC.',
                  icon: Building2,
                  color: 'sky'
                }
              ].map((engine) => (
                <div key={engine.num} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold font-mono text-cyan-400">
                        {engine.num}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {engine.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{engine.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{engine.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => setActivePage('product')}
                      className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                    >
                      <span>Deep Dive Engine Specs</span>
                      <ChevronRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Outcome Section */}
          <section className="px-4 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  THE OUTCOME
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Engineering Stability
                </h2>
                <p className="text-xs text-slate-400">
                  FlowForge delivers verifiable operational certainty across six key dimensions:
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
                {[
                  'Predictable delivery',
                  'Burnout prevention',
                  'Critical path protection',
                  'Velocity stability',
                  'Load clarity',
                  'AI autonomy'
                ].map((outcome, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto" />
                    <p className="text-xs font-bold text-slate-200">{outcome}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm font-semibold text-cyan-300 pt-4">
                FlowForge makes engineering inevitable.
              </p>
            </div>
          </section>

          {/* Trapped Value ROI Calculator */}
          <section className="px-4 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full px-3 py-0.5 text-xs font-mono font-bold">
                  <DollarSignIcon className="w-3.5 h-3.5" />
                  <span>THE 5-MINUTE ROI CALCULATOR</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Turn Idle Developer Hours into Liquid Cash Flow
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every engineering organization suffers from 15%–30% trapped bench time between sprints or QA bottlenecks. FlowForge’s FFX exchange turns that downtime into liquid revenue.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Engineering Team Size:</span>
                      <span className="font-mono font-bold text-cyan-400">{teamSize} Engineers</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Trapped / Bench Time:</span>
                      <span className="font-mono font-bold text-amber-400">{idlePercent}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={idlePercent}
                      onChange={(e) => setIdlePercent(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-indigo-950/60 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs text-slate-400 font-mono">FLOWFORGE CAPACITY YIELD ESTIMATE</span>
                  <span className="text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded">
                    Annual Yield
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Total Idle Hours / Year</span>
                    <p className="text-2xl font-bold font-mono text-slate-100 mt-1">
                      {idleHoursPerYear.toLocaleString()} hrs
                    </p>
                    <span className="text-[10px] text-slate-500">Recoverable capacity</span>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400">Trapped Market Value</span>
                    <p className="text-2xl font-bold font-mono text-cyan-400 mt-1">
                      ${trappedValueUSD.toLocaleString()}
                    </p>
                    <span className="text-[10px] text-slate-500">Based on $75/hr market baseline</span>
                  </div>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-emerald-300 font-semibold block">
                      Net Annual Monetization via FFX Exchange:
                    </span>
                    <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                      ${ffxCreditRevenue.toLocaleString()} USD / yr
                    </span>
                  </div>

                  <button
                    onClick={onEnterApp}
                    className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-emerald-950 flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Unlock Trapped Value</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof & Logos */}
          <section className="px-4 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Trusted by engineering teams across Texas and beyond
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-400">
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg">Austin Tech Ecosystem</span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg">Dallas Enterprise SaaS</span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg">Houston Cloud Infrastructure</span>
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg">Texas Comptroller §151 Compliant</span>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 lg:px-8 max-w-4xl mx-auto text-center space-y-6 pt-10">
            <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80 border border-cyan-500/40 rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Engineering deserves stability.
              </h2>
              <p className="text-sm text-slate-300 max-w-xl mx-auto">
                Get a demo and see FlowForge stabilize your critical path.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-xl shadow-cyan-950 flex items-center justify-center space-x-2 mx-auto cursor-pointer"
                >
                  <span>Book a Demo</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= PAGE 2: PRODUCT PAGE ================= */}
      {activePage === 'product' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PRODUCT ARCHITECTURE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              FlowForge is the AI-native operating system for engineering.
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Six interconnected engines designed to stabilize load, protect velocity, and guarantee delivery.
            </p>
          </div>

          <div className="space-y-8">
            {/* Engine 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI Orchestration Engine</h3>
                  <p className="text-xs text-cyan-400 font-semibold">Models load. Predicts instability. Stabilizes critical paths.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Continuously evaluates cognitive load across engineering roles, mapping DAG task dependencies and identifying zero-float bottlenecks weeks before they impact production releases.
              </p>
            </div>

            {/* Engine 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">FFX Marketplace</h3>
                  <p className="text-xs text-amber-400 font-semibold">Slack becomes a resource. Capacity becomes liquid. Critical paths become rescuable.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Enables enterprise engineering teams to trade specialized availability (DevOps, QA, Backend) via tokenized Slack Credits with Stripe Connect automated settlement and Texas tax exemption.
              </p>
            </div>

            {/* Engine 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI Swarm Copilot</h3>
                  <p className="text-xs text-purple-400 font-semibold">Autonomous engineering agents: DevOps, Backend, Frontend, QA, BA. AI that acts, not observes.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Autonomous multi-agent orchestration that executes real interventions: dynamic sprint restructuring, task redistribution, dependency unblocking, and critical path acceleration.
              </p>
            </div>

            {/* Engine 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Compliance Engine</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Automatic Texas SaaS exemption. Audit-ready billing. Enterprise trust.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Automated compliance with Texas Tax Code §151.0101 and §151.351 (20% SaaS exemption), line-item usage audit logs, cryptographic SHA-256 verification, and tokenized capacity accounting.
              </p>
            </div>

            {/* Engine 5 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">What‑If Simulator</h3>
                  <p className="text-xs text-blue-400 font-semibold">Predictive engineering economics: Load scenarios, Velocity forecasts, Burnout curves, Critical path outcomes.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Interactive Monte Carlo simulation environment allowing CTOs to model the exact timeline, budget, and burnout outcomes of adding headcount, borrowing capacity, or restructuring sprints.
              </p>
            </div>

            {/* Engine 6 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Enterprise Onboarding Platform</h3>
                  <p className="text-xs text-sky-400 font-semibold">Multi-tenant isolation. AI pairing. Marketplace activation. Compliance automation.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                Zero-friction enterprise setup with segregated workspaces, role-based access control, cryptographic audit logging, and automated Stripe Connect onboarding.
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <button
              onClick={onEnterApp}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-xl shadow-cyan-950 inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Explore Live Product Workspace</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================= PAGE: PLATFORM (GOVERNANCE, AUTONOMY, INTELLIGENCE) ================= */}
      {activePage === 'platform' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              PLATFORM ARCHITECTURE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Governance, Autonomy & Intelligence
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              The operational triumvirate powering the FlowForge Stability OS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Layer 1: Governance */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
                  G
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Governance</h3>
                  <p className="text-xs text-cyan-400 font-semibold">RulePack v1</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 pt-2">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Slack Floor:</strong> Statutory 15% reserve buffer locked across pods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Volatility Thresholds:</strong> Cycle variance constrained under ±3.0%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Critical Path Protection:</strong> Automatic SPOF contributor shields</span>
                </li>
              </ul>
            </div>

            {/* Layer 2: Autonomy */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Autonomy</h3>
                  <p className="text-xs text-amber-400 font-semibold">PROTO-01 Engine</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 pt-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Load Rebalancing:</strong> Automated ticket shifts away from saturated devs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Slack Redistribution:</strong> Dynamic capacity sharing across adjacent pods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Burnout Mitigation:</strong> Closed-loop fatigue cooling and task decoupling</span>
                </li>
              </ul>
            </div>

            {/* Layer 3: Intelligence */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
                  I
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Intelligence</h3>
                  <p className="text-xs text-teal-400 font-semibold">Predictive Engine</p>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-slate-300 pt-2">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span><strong>Forecast Engine:</strong> 7, 14, and 30-day Monte Carlo milestone modeling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span><strong>Burnout Curve:</strong> Decay projections on cognitive capacity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span><strong>Delivery Risk:</strong> Algorithmic DAG tracking with early warning signals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE: ESA CERTIFICATION ================= */}
      {activePage === 'esa_cert' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              ENTERPRISE AUDIT ARTIFACT
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Enterprise Stability Audit (ESA)
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              The certified credential that proves engineering predictability to leadership, boards, and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <FileTextIcon className="w-5 h-5 text-cyan-400" />
                <span>What You Receive</span>
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300 pt-2">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Scorecard:</strong> Comprehensive 0-100 Stability Score breakdown across all pods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Findings:</strong> Concrete diagnosis of load concentration, SPOFs, and velocity friction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Recommendations:</strong> Prescriptive RulePack governance policies to safeguard team capacity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>30-Day Plan:</strong> Roadmap for continuous autonomous load rebalancing</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                <span>Why It Matters</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Executives trust ESA. CTOs, VPs of Engineering, and Board Directors require independent empirical audit artifacts before signing off on major product launches, capital investments, or M&A tech diligence.
              </p>
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold block">Certified Guarantee:</span>
                <p className="text-xs text-slate-400 mt-1">
                  FlowForge delivers the certified ESA artifact at Day 30 of every pilot at zero financial commitment.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-950 inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Claim Free 30-Day Pilot & ESA</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================= PAGE 3: CATEGORY PAGE (ELO) ================= */}
      {activePage === 'category' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              CATEGORY DEFINITION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Engineering Load Orchestration (ELO)
            </h1>
            <p className="text-base sm:text-lg text-cyan-300 font-medium">
              The discipline of stabilizing engineering load using AI.
            </p>
          </div>

          {/* Why ELO Exists */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Why ELO Exists</h2>
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <p className="text-base font-semibold text-rose-300">
                Engineering doesn’t fail because of code. Engineering fails because it’s overloaded.
              </p>
              <p>
                ELO solves the root causes that lead to organizational failure:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                {['Burnout', 'Slippage', 'Fragility', 'Velocity collapse', 'Critical path failure'].map((item, idx) => (
                  <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-rose-950/60 text-center">
                    <span className="text-xs font-bold text-rose-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The ELO Model: Six Pillars */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">The ELO Model — Six Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '1. Load Modeling', desc: 'Continuous quantification of cognitive and dependency load across roles.' },
                { title: '2. Instability Detection', desc: 'Predicting bottlenecks, overload curves, and fragility prior to task execution.' },
                { title: '3. Critical Path Stabilization', desc: 'Active dynamic rescheduling and resource shielding to maintain zero float.' },
                { title: '4. Burnout Prevention', desc: 'Strict cognitive thresholds and automatic task offloading to protect engineers.' },
                { title: '5. Capacity Liquidity', desc: 'Tokenized marketplace exchange transforming bench downtime into liquid slack.' },
                { title: '6. AI Autonomy', desc: 'Direct autonomous interventions and swarm agent pair-execution.' }
              ].map((p, idx) => (
                <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ELO Metrics */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">ELO Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Load Stability Index', code: 'LSI' },
                { name: 'Critical Path Health', code: 'CPH' },
                { name: 'Burnout Risk Curve', code: 'BRC' },
                { name: 'Velocity Stability Score', code: 'VSS' },
                { name: 'Slack Efficiency Ratio', code: 'SER' },
                { name: 'Capacity Liquidity Index', code: 'CLI' }
              ].map((m, idx) => (
                <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-400">{m.code}</span>
                  <p className="text-xs font-semibold text-slate-200">{m.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Statement CTA */}
          <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">FlowForge created ELO. FlowForge leads ELO.</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Read the complete category white paper and foundational research.
            </p>
            <button
              onClick={onEnterApp}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-lg cursor-pointer"
            >
              Read the Category Paper
            </button>
          </div>
        </div>
      )}

      {/* ================= PAGE 4: FOUNDERS PAGE ================= */}
      {activePage === 'founders' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              LEADERSHIP & VISION
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Meet the Founder</h1>
            <div className="pt-2">
              <h2 className="text-2xl font-bold text-cyan-300">Chuck Oduagu</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Founder & CEO, FlowForge • Creator of Engineering Load Orchestration (ELO)
              </p>
              <p className="text-xs text-slate-500 font-mono">
                CFO TAX PRO LLC • Dallas / Sachse, TX
              </p>
            </div>
          </div>

          {/* Founder Statement */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-serif text-2xl font-bold">
              “
            </div>
            <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic space-y-4">
              <p>
                “Engineering deserves stability.
              </p>
              <p>
                FlowForge exists to protect teams, stabilize load, and guarantee delivery.
              </p>
              <p>
                We are building the operating system for engineering — and that future is inevitable.”
              </p>
            </blockquote>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Chuck Oduagu</span>
                <span className="text-[11px] text-slate-400">Founder & CEO, FlowForge</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/40">
                Founder Edition
              </span>
            </div>
          </div>

          {/* The Founder Manifesto */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-4">
              <BookOpenIcon className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white">{CODEX_MANIFESTO.title}</h2>
            </div>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
              <p className="text-lg font-bold text-white">Engineering deserves stability.</p>
              <p>Burnout is predictable.</p>
              <p>FlowForge prevents it.</p>
              <p>FlowForge stabilizes load.</p>
              <p>FlowForge protects teams.</p>
              <p>FlowForge guarantees delivery.</p>
              <p>FlowForge defines the category.</p>
              <p>FlowForge becomes the future.</p>
              <p className="text-lg font-extrabold text-cyan-400 pt-2">FlowForge is inevitable.</p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(CODEX_MANIFESTO.content);
                  setCopiedNotification('Founder Manifesto copied!');
                  setTimeout(() => setCopiedNotification(null), 2500);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-1.5 cursor-pointer"
              >
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copy Manifesto</span>
              </button>
              <button
                onClick={onEnterApp}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Read the Founder Codex (16 Chapters)</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE 5: PRICING PAGE ================= */}
      {activePage === 'pricing' && (
        <div className="space-y-16 py-12 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              ENTERPRISE PRICING
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Simple, predictable, enterprise-friendly.
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Four monetization engines configured for engineering stability, compliance certainty, and marketplace liquidity.
            </p>

            {/* Featured Texas Tax Code § 151.351 Statutory Exemption Banner */}
            <div className="bg-gradient-to-r from-amber-950/50 via-slate-900 to-emerald-950/50 border border-amber-500/40 rounded-2xl p-4 sm:p-5 text-left flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <ReceiptIcon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                      Texas Tax Code § 151.351 Exemption Applied
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded font-mono font-bold">
                      20% Statutory Discount
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    All FlowForge diagnostic audits and subscriptions automatically qualify for the 20% Texas SaaS/Data Processing statutory tax exemption.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActivePage('ai_closer')}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 text-slate-950 font-black text-xs transition shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
              >
                <BotIcon className="w-4 h-4" />
                <span>Calculate & Order with AI Closer</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilot Tier */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Pilot</h3>
                  <div className="mt-1 flex items-baseline space-x-1">
                    <span className="text-2xl font-extrabold text-cyan-400">Free</span>
                    <span className="text-xs text-slate-400 font-mono">/ 30 Days</span>
                  </div>
                </div>
                <p className="text-xs text-cyan-400 font-semibold">Includes Certified ESA Audit</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Read-only GitHub connection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Baseline Stability Score</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Certified Day 30 ESA Report</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Start Free Pilot
              </button>
            </div>

            {/* Stability Core */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  <ActivityIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Stability Core</h3>
                  <div className="mt-1 flex items-baseline space-x-1">
                    <span className="text-2xl font-extrabold text-blue-400">$1,500</span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>
                </div>
                <p className="text-xs text-blue-400 font-semibold">Continuous load & risk visibility</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Real-time Stability Score (0-100)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Slack Liquidity tracking (15% floor)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Volatility standard deviation index</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onEnterApp}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition cursor-pointer"
              >
                Activate Stability Core
              </button>
            </div>

            {/* Governance + Autonomy */}
            <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 space-y-4 flex flex-col justify-between relative shadow-lg shadow-cyan-950/40">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-mono text-[10px] font-bold uppercase">
                Most Popular
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Governance + Autonomy</h3>
                  <div className="mt-1 flex items-baseline space-x-1">
                    <span className="text-2xl font-extrabold text-emerald-400">$3,500</span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>
                </div>
                <p className="text-xs text-emerald-400 font-semibold">RulePack v1 & PROTO Rebalancing</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Enforced RulePack v1 policy rules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>PROTO-01 load rebalancing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Critical path contributor shields</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onEnterApp}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Deploy Governance
              </button>
            </div>

            {/* Full Intelligence */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Full Intelligence</h3>
                  <div className="mt-1 flex items-baseline space-x-1">
                    <span className="text-2xl font-extrabold text-teal-400">$6,000</span>
                    <span className="text-xs text-slate-400 font-mono">/ month</span>
                  </div>
                </div>
                <p className="text-xs text-teal-400 font-semibold">Predictive forecasts & continuous ESA</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>7, 14, 30-day Monte Carlo forecasts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Fatigue & burnout curve prediction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Continuous quarterly board ESA certification</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition cursor-pointer"
              >
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE 6: CONTACT PAGE ================= */}
      {activePage === 'contact' && (
        <div className="space-y-12 py-12 px-4 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              CONTACT & ONBOARDING
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Engineering deserves stability.
            </h1>
            <p className="text-base sm:text-lg text-cyan-300 font-semibold">
              Let’s stabilize your critical path.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
            {demoSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl">
                <CheckCircle2Icon className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Architecture Briefing Scheduled</h3>
                <p className="text-xs text-slate-300">
                  Our engineering leadership team will contact you within 2 business hours with a custom load stability benchmark.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ramadass Prabhakar"
                    value={demoName}
                    onChange={(e) => setDemoName(e.target.value)}
                    className="w-full bg-slate-950 text-slate-100 rounded-xl p-3 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="ramadass@wpengine.com"
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    className="w-full bg-slate-950 text-slate-100 rounded-xl p-3 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Company / Organization:</label>
                  <input
                    type="text"
                    required
                    placeholder="WP Engine / BigCommerce / Enterprise"
                    value={demoCompany}
                    onChange={(e) => setDemoCompany(e.target.value)}
                    className="w-full bg-slate-950 text-slate-100 rounded-xl p-3 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-semibold">Message / Current Bottlenecks:</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your sprint velocity challenges, critical path bottlenecks, or burnout concerns..."
                    value={demoMessage}
                    onChange={(e) => setDemoMessage(e.target.value)}
                    className="w-full bg-slate-950 text-slate-100 rounded-xl p-3 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition shadow-lg shadow-cyan-950 flex items-center justify-center space-x-2 cursor-pointer pt-3"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Start Your Free Pilot → Generate ESA in 30 Days</span>
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <div>
                <span className="text-slate-300 font-semibold">Direct Enterprise Inquiries: </span>
                <a href="mailto:enterprise@flowforge.ai" className="text-cyan-400 hover:underline font-mono">
                  enterprise@flowforge.ai
                </a>
              </div>
              <div className="text-[11px] text-slate-400">
                CFO TAX PRO LLC (dba FlowForge) • Sachse, TX
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE: AUTONOMOUS AI DEAL CLOSER (FLOWFORGE.FIT) ================= */}
      {activePage === 'ai_closer' && (
        <div className="space-y-8 py-8 px-4 lg:px-8 max-w-7xl mx-auto">
          {/* Header & Category Intro */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs text-emerald-300 shadow-inner">
              <BotIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400 font-bold">AUTONOMOUS REVENUE ENGINE:</span>
              <span>Gemini 3.8 Flash • Texas Tax Code § 151.351 Active</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              FlowForge Autonomous <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                AI Deal Closer & Revenue Engine
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience the world’s first autonomous sales agent for engineering stability. Live market prospecting, objection handling with Gemini 3.8 Flash, and automated Texas SaaS tax receipts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleSelectPage('pricing')}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition cursor-pointer"
              >
                View SaaS & Audit Pricing
              </button>
              <button
                onClick={onEnterApp}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition shadow-lg shadow-cyan-500/20 flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Launch Enterprise Platform OS</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Full Real Live Autonomous Deal Closer Swarm */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-2 sm:p-6 shadow-2xl">
            <AiDealCloserView />
          </div>
        </div>
      )}

      {/* ================= PAGE: THE MONEY PATH (MVP REVENUE EXECUTION) ================= */}
      {activePage === 'mvp_revenue' && (
        <div className="space-y-8 py-8 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-yellow-950/80 border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
                <DollarSignIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>FIRST PAYING CUSTOMER REVENUE PLAYBOOK</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white">
                The Money Path: MVP Execution Engine
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                The exact 5-step operational workflow to pitch buyers, deliver 48-Hour Certified Enterprise Stability Assessments (ESA), and invoice customers with statutory Texas tax savings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => handleSelectPage('ai_closer')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs transition shadow cursor-pointer"
              >
                <span>Launch Autonomous AI Closer →</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-2 sm:p-6 shadow-2xl">
            <MvpRevenueExecutionView onNavigateToAiCloser={() => handleSelectPage('ai_closer')} />
          </div>
        </div>
      )}

      {/* ================= PAGE: MVP DASHBOARD, CHECKLIST, PROPOSAL & 10 CTO MESSAGES ================= */}
      {activePage === 'mvp_dashboard' && (
        <div className="py-6 px-2 sm:px-4 max-w-7xl mx-auto">
          <MvpDashboardPrototypeView
            onNavigateToAiCloser={() => handleSelectPage('ai_closer')}
          />
        </div>
      )}

      {/* ================= PAGE: STABILITY CORE TELEMATICS ================= */}
      {activePage === 'stability_core' && (
        <div className="space-y-8 py-8 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
                <ActivityIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>LIVE ENGINEERING TELEMATICS & SLACK LIQUIDITY</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white">
                Stability Core: Real-Time Team Telemetry
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Maintain the 15% Slack Liquidity floor, monitor sprint cycle health, and protect engineers from burnout with automated rebalancing.
              </p>
            </div>
            <button
              onClick={onEnterApp}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer shrink-0"
            >
              <span>Enter Full Platform OS</span>
            </button>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-2 sm:p-6 shadow-2xl">
            <StabilityDashboardView
              onOpenCopilot={onEnterApp}
              onOpenWhatIf={onEnterApp}
              onNavigateToEnterpriseReadiness={onEnterApp}
            />
          </div>
        </div>
      )}

      {/* Demo Modal Popup (Accessible from any page CTA) */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <SparklesIcon className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold text-white">Book an Architecture Demo</h3>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 rounded bg-slate-800"
              >
                ✕
              </button>
            </div>

            {demoSubmitted ? (
              <div className="p-6 text-center space-y-2 bg-emerald-950/60 border border-emerald-500/40 rounded-xl">
                <CheckCircle2Icon className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Demo Requested!</h4>
                <p className="text-xs text-slate-300">We will reach out within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-3 text-xs">
                <p className="text-slate-400 text-[11px]">
                  See FlowForge stabilize load, prevent burnout, and guarantee critical path delivery in a live 15-minute walkthrough.
                </p>
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    className="w-full bg-slate-950 text-slate-100 rounded-lg p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer"
                >
                  Confirm 15-Min Demo
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <span className="font-bold text-white text-sm">FlowForge</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded font-mono">
                ELO OS
              </span>
            </div>
            <p className="text-slate-400 text-[11px]">
              Created by Chuck Oduagu • Founder, FlowForge
            </p>
            <p className="text-slate-400 text-[11px]">
              CFO TAX PRO LLC (dba FlowForge) • Dallas / Sachse, TX • SOS #08051239
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px]">
            <button onClick={() => setActivePage('home')} className="hover:text-cyan-400">Home</button>
            <button onClick={() => setActivePage('ai_closer')} className="text-emerald-400 hover:text-emerald-300 font-bold">🤖 AI Closer (NEW)</button>
            <button onClick={() => setActivePage('product')} className="hover:text-cyan-400">Product</button>
            <button onClick={() => setActivePage('category')} className="hover:text-cyan-400">Category ELO</button>
            <button onClick={() => setActivePage('founders')} className="hover:text-cyan-400">Founders</button>
            <button onClick={() => setActivePage('pricing')} className="hover:text-cyan-400">Pricing</button>
            <button onClick={() => setActivePage('contact')} className="hover:text-cyan-400">Contact</button>
            <button onClick={handleCopyWebsiteCopy} className="text-cyan-400 hover:underline">Copy Full Site Copy</button>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-400">
            © {new Date().getFullYear()} FlowForge. All rights reserved. <br />
            <span className="text-cyan-400 font-bold">FlowForge is inevitable.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
