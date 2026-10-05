import React from 'react';
import { 
  GanttChartIcon, 
  ArrowLeftRightIcon, 
  TargetIcon, 
  PlugZapIcon, 
  BuildingIcon, 
  CreditCardIcon,
  BotIcon,
  SparklesIcon,
  GlobeIcon,
  LogOutIcon,
  ActivityIcon,
  ShieldCheckIcon,
  PresentationIcon,
  AwardIcon,
  CompassIcon,
  MicIcon,
  BookOpenIcon,
  BriefcaseIcon,
  StarIcon,
  DollarSignIcon
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  pendingApprovalsCount: number;
  onSwitchToMarketing?: (page?: string) => void;
  onSwitchToAuth?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  pendingApprovalsCount,
  onSwitchToMarketing,
  onSwitchToAuth
}) => {
  const menuItems = [
    {
      id: 'ai_deal_closer',
      label: '🤖 AI Deal Closer (Autopilot)',
      icon: BotIcon,
      badge: 'AUTONOMOUS'
    },
    {
      id: 'mvp_revenue',
      label: '⭐ The Money Path (MVP)',
      icon: DollarSignIcon,
      badge: 'LIVE & PAID'
    },
    {
      id: 'mvp_dashboard',
      label: '🎯 MVP Dashboard Prototype',
      icon: TargetIcon,
      badge: 'SELLABLE v0.1'
    },
    {
      id: 'stability_core',
      label: 'Stability Core (Live Loop)',
      icon: ActivityIcon,
      badge: 'Telematics'
    },
    {
      id: 'enterprise_readiness',
      label: 'Enterprise Readiness',
      icon: ShieldCheckIcon,
      badge: '8 Layers'
    },
    {
      id: 'expansion_suite',
      label: 'Brand & Expansion Suite',
      icon: GlobeIcon,
      badge: 'Part I'
    },
    {
      id: 'expansion_suite_part2',
      label: 'Investor & Tech Suite',
      icon: PresentationIcon,
      badge: 'Part II'
    },
    {
      id: 'expansion_suite_part3',
      label: 'Marketing & Partner Suite',
      icon: AwardIcon,
      badge: 'Part III'
    },
    {
      id: 'expansion_suite_part4',
      label: 'Analyst & Economics Suite',
      icon: CompassIcon,
      badge: 'Part IV'
    },
    {
      id: 'expansion_suite_part5',
      label: 'Keynote & Sales Suite',
      icon: MicIcon,
      badge: 'Part V'
    },
    {
      id: 'expansion_suite_part6',
      label: 'Analyst & Category Suite',
      icon: BookOpenIcon,
      badge: 'Part VI'
    },
    {
      id: 'expansion_suite_part7',
      label: 'Total Enterprise Stack',
      icon: ShieldCheckIcon,
      badge: 'Part VII'
    },
    {
      id: 'expansion_suite_part8',
      label: 'Global Expansion & Domination',
      icon: GlobeIcon,
      badge: 'Part VIII'
    },
    {
      id: 'expansion_suite_part9',
      label: 'Founder & Capital Strategy',
      icon: AwardIcon,
      badge: 'Part IX'
    },
    {
      id: 'expansion_suite_part10',
      label: 'Global Ops, Finance & Architecture',
      icon: ShieldCheckIcon,
      badge: 'Part X - Master'
    },
    {
      id: 'part14_final_package',
      label: 'Stability OS 4.0 & Launch',
      icon: StarIcon,
      badge: 'Final Package'
    },
    {
      id: 'master_business_plan',
      label: 'Master Business Plan',
      icon: StarIcon,
      badge: '15 Chapters'
    },
    {
      id: 'total_business_architecture',
      label: 'Total Business Architecture',
      icon: BriefcaseIcon,
      badge: 'Master OS'
    },
    {
      id: 'executive',
      label: 'Executive Intelligence',
      icon: SparklesIcon,
      badge: 'AI Briefings'
    },
    {
      id: 'orchestration',
      label: 'Gantt & Orchestration',
      icon: GanttChartIcon,
      badge: 'Live DAG'
    },
    {
      id: 'exchange',
      label: 'Enterprise Exchange (FFX)',
      icon: ArrowLeftRightIcon,
      badge: 'Trade'
    },
    {
      id: 'billing',
      label: 'Monetization & Billing',
      icon: CreditCardIcon,
      badge: 'Stripe 5%'
    },
    {
      id: 'outreach',
      label: 'AI Client Acquisition',
      icon: TargetIcon,
      count: pendingApprovalsCount > 0 ? pendingApprovalsCount : undefined
    },
    {
      id: 'mcp',
      label: 'MCP Tool Gateway',
      icon: PlugZapIcon,
      badge: '11 APIs'
    },
    {
      id: 'compliance',
      label: 'Texas Business & Legal',
      icon: BuildingIcon,
      badge: 'LLC / Tax'
    }
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between hidden md:flex shrink-0 select-none">
      <div className="p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
          Enterprise Platform
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition ${
                isActive
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {item.badge}
                </span>
              )}

              {item.count !== undefined && (
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                  {item.count} Action
                </span>
              )}
            </button>
          );
        })}

        {/* Public Website Pages (flowforge.fit) */}
        <div className="pt-4 pb-1 px-3 text-[10px] font-semibold text-cyan-400 uppercase tracking-wider flex items-center justify-between border-t border-slate-800/80 mt-3">
          <span>flowforge.fit Website</span>
          <span className="text-[9px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-1 rounded font-mono">LIVE</span>
        </div>
        {[
          { page: 'home', label: 'Website Home & Hero', icon: GlobeIcon, badge: 'Home' },
          { page: 'ai_closer', label: 'AI Deal Closer', icon: BotIcon, badge: 'Autopilot' },
          { page: 'mvp_revenue', label: 'The Money Path (MVP)', icon: DollarSignIcon, badge: 'Playbook' },
          { page: 'stability_core', label: 'Stability Core Telemetry', icon: ActivityIcon, badge: 'Telematics' },
          { page: 'product', label: 'Product Architecture', icon: SparklesIcon, badge: 'Deep Dive' },
          { page: 'platform', label: 'Platform Specifications', icon: ShieldCheckIcon, badge: 'Arch' },
          { page: 'pricing', label: 'Pricing & Texas Tax Savings', icon: CreditCardIcon, badge: '§ 151.351' },
          { page: 'esa_cert', label: 'ESA Certification Standard', icon: AwardIcon, badge: 'Audit' },
          { page: 'category', label: 'Category Creation (ELO)', icon: CompassIcon, badge: 'Manifesto' },
          { page: 'founders', label: 'Founders & Codex', icon: BookOpenIcon, badge: 'Story' },
          { page: 'contact', label: 'Enterprise Contact & Demo', icon: TargetIcon, badge: 'Inquiries' }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.page}
              onClick={() => onSwitchToMarketing ? onSwitchToMarketing(item.page) : undefined}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800/80 hover:text-cyan-300 transition cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-slate-800 text-slate-400">
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quick Navigation Footer */}
      <div className="p-3 m-3 space-y-2 border-t border-slate-800">
        {onSwitchToMarketing && (
          <button
            onClick={onSwitchToMarketing}
            className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800 transition"
          >
            <GlobeIcon className="w-4 h-4 text-cyan-400" />
            <span>Public Website</span>
          </button>
        )}

        {onSwitchToAuth && (
          <button
            onClick={onSwitchToAuth}
            className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-rose-300 hover:bg-slate-800 transition"
          >
            <LogOutIcon className="w-4 h-4 text-slate-400" />
            <span>Switch Role / Logout</span>
          </button>
        )}
      </div>

      {/* Footer Banner */}
      <div className="p-3 m-3 mt-0 rounded-xl bg-gradient-to-br from-slate-800 to-indigo-950/80 border border-slate-700/60 text-slate-300">
        <div className="flex items-center space-x-2 text-cyan-400 mb-1">
          <SparklesIcon className="w-4 h-4" />
          <span className="text-xs font-semibold">Self-Sustaining Platform</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-snug">
          80% Texas SaaS Tax Exemption & Automated FFX Slack Credit Brokerage Active.
        </p>
      </div>
    </aside>
  );
};
