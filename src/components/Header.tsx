import React from 'react';
import { 
  Building2, 
  SparklesIcon, 
  CoinsIcon, 
  BellIcon, 
  ShieldCheckIcon,
  SearchIcon,
  Cpu,
  GlobeIcon,
  UserCheckIcon,
  DatabaseIcon,
  BotIcon,
  DollarSignIcon
} from 'lucide-react';
import { Company } from '../types';

interface HeaderProps {
  currentCompany: Company;
  companies: Company[];
  onSelectCompany: (company: Company) => void;
  onOpenCopilot: () => void;
  onOpenWhatIf: () => void;
  onOpenCreditModal: () => void;
  onOpenCompanyModal?: () => void;
  onSwitchToMarketing?: () => void;
  onSwitchToAuth?: () => void;
  activeTab: string;
  onSelectTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCompany,
  companies,
  onSelectCompany,
  onOpenCopilot,
  onOpenWhatIf,
  onOpenCreditModal,
  onOpenCompanyModal,
  onSwitchToMarketing,
  onSwitchToAuth,
  activeTab,
  onSelectTab
}) => {
  const demoCount = companies.filter(c => c.isDemoCompany).length;

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 text-slate-100 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 shadow-md">
      {/* Left Branding & Company Selector */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-lg tracking-tight text-white">FlowForge</span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Enterprise AI
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-none hidden sm:block">
              AI Orchestration & Collaboration Exchange
            </p>
          </div>
        </div>

        {/* Company Dropdown */}
        <div className="hidden md:flex items-center ml-4 pl-4 border-l border-slate-800 space-x-2">
          <Building2 className="w-4 h-4 text-slate-400" />
          <select
            value={currentCompany.id}
            onChange={(e) => {
              const selected = companies.find(c => c.id === e.target.value);
              if (selected) onSelectCompany(selected);
            }}
            className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-medium rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-cyan-500 transition cursor-pointer"
          >
            {companies.map(comp => (
              <option key={comp.id} value={comp.id}>
                {comp.name} {comp.isDemoCompany ? '(Demo)' : '(Live)'}
              </option>
            ))}
          </select>

          {onOpenCompanyModal && (
            <button
              onClick={onOpenCompanyModal}
              title="Manage Roster & Purge Demo Data"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-cyan-400 border border-slate-700 text-xs flex items-center space-x-1 transition cursor-pointer"
            >
              <DatabaseIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-medium hidden xl:inline">
                {demoCount > 0 ? `Purge (${demoCount})` : 'Roster'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Middle Quick Action Shortcuts */}
      <div className="hidden lg:flex items-center space-x-2">
        {onSelectTab && (
          <button
            onClick={() => onSelectTab('ai_deal_closer')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'ai_deal_closer'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md font-black'
                : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60 border border-emerald-500/40'
            }`}
            title="Open Autonomous AI Deal Closer"
          >
            <BotIcon className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>AI Closer</span>
          </button>
        )}

        {onSelectTab && (
          <button
            onClick={() => onSelectTab('mvp_revenue')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'mvp_revenue'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-amber-950/40 text-amber-300 hover:bg-amber-900/60 border border-amber-500/40'
            }`}
            title="The Money Path (MVP Revenue Playbook)"
          >
            <DollarSignIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Money Path</span>
          </button>
        )}

        {onSelectTab && (
          <button
            onClick={() => onSelectTab('outreach')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'outreach'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'bg-slate-800/90 text-slate-300 hover:bg-slate-750 hover:text-cyan-300 border border-slate-700'
            }`}
            title="Open AI Client Acquisition Engine"
          >
            <SparklesIcon className={`w-3.5 h-3.5 ${activeTab === 'outreach' ? 'text-slate-950' : 'text-cyan-400'}`} />
            <span>AI Acquisition</span>
          </button>
        )}

        {onSwitchToMarketing && (
          <button
            onClick={onSwitchToMarketing}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-300 hover:text-white hover:bg-cyan-900/60 border border-cyan-700/50 text-xs font-semibold transition cursor-pointer shadow-sm"
            title="View Public flowforge.fit Website"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <GlobeIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>flowforge.fit</span>
          </button>
        )}

        <button
          onClick={onOpenWhatIf}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 hover:bg-indigo-900/60 text-xs font-medium transition shadow-sm"
        >
          <SparklesIcon className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Run "What-If" Simulation</span>
        </button>

        <button
          onClick={onOpenCopilot}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-medium transition shadow-md shadow-cyan-900/30"
        >
          <Cpu className="w-4 h-4" />
          <span>AI Swarm Copilot</span>
        </button>
      </div>

      {/* Right Stats & Status */}
      <div className="flex items-center space-x-3">
        {/* Credits Counter & Buy Button */}
        <button
          onClick={onOpenCreditModal}
          title="Click to buy or manage FFX Slack Credits via Stripe"
          className="flex items-center space-x-2 bg-amber-950/40 hover:bg-amber-950/70 border border-amber-800/50 hover:border-amber-700/80 rounded-lg px-2.5 py-1 transition cursor-pointer group"
        >
          <CoinsIcon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
          <div className="text-right">
            <div className="text-xs font-bold text-amber-300 leading-none flex items-center space-x-1">
              <span>{currentCompany.credits} FFX</span>
              <span className="text-[9px] bg-amber-500/20 text-amber-300 font-bold px-1 rounded">+Buy</span>
            </div>
            <div className="text-[9px] text-amber-400/80 leading-none mt-0.5">
              Slack Credits
            </div>
          </div>
        </button>

        {/* Reputation Indicator */}
        <div id="header-trust-indicator" className="hidden sm:flex items-center space-x-1 bg-emerald-950/40 border border-emerald-800/50 rounded-lg px-2 py-1">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-medium text-emerald-300">
            {(() => {
              const rawTrust = typeof currentCompany?.trustScore === 'number' && !isNaN(currentCompany.trustScore)
                ? currentCompany.trustScore
                : typeof currentCompany?.reputation === 'number' && !isNaN(currentCompany.reputation)
                ? (currentCompany.reputation <= 1 ? currentCompany.reputation * 100 : currentCompany.reputation)
                : 100;
              const numericTrust = isNaN(rawTrust) || !isFinite(rawTrust) ? 100 : Math.min(100, Math.max(0, Math.round(rawTrust)));
              return `${numericTrust}% Trust`;
            })()}
          </span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition">
            <BellIcon className="w-4 h-4" />
          </button>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-slate-900 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-slate-900" />
        </div>

        {/* User Auth Switcher */}
        {onSwitchToAuth && (
          <button
            onClick={onSwitchToAuth}
            title="Switch Persona / Sign Out"
            className="w-8 h-8 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center transition cursor-pointer text-xs font-bold font-mono"
          >
            AD
          </button>
        )}
      </div>
    </header>
  );
};
