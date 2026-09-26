import React, { useState } from 'react';
import { 
  Company, 
  TradeExchange 
} from '../types';
import { 
  ArrowLeftRightIcon, 
  CoinsIcon, 
  ShieldCheckIcon, 
  PlusIcon, 
  Building2, 
  CheckCircle2Icon, 
  SparklesIcon, 
  HelpCircleIcon,
  TrendingUpIcon,
  Trash2Icon,
  DatabaseIcon,
  LayersIcon,
  AlertTriangleIcon
} from 'lucide-react';

interface ExchangeViewProps {
  currentCompany: Company;
  companies: Company[];
  trades: TradeExchange[];
  onExecuteTrade: (trade: TradeExchange) => void;
  onProposeNewTrade: (newTrade: Omit<TradeExchange, 'id' | 'timestamp'>) => void;
  onOpenCreditModal?: () => void;
  onOpenCompanyModal?: () => void;
  onDeleteCompany?: (companyId: string) => void;
  onDeleteTrade?: (tradeId: string) => void;
  onPurgeAllDemoData?: () => void;
}

export const ExchangeView: React.FC<ExchangeViewProps> = ({
  currentCompany,
  companies,
  trades,
  onExecuteTrade,
  onProposeNewTrade,
  onOpenCreditModal,
  onOpenCompanyModal,
  onDeleteCompany,
  onDeleteTrade,
  onPurgeAllDemoData
}) => {
  const [showProposeModal, setShowProposeModal] = useState(false);
  const otherCompanies = companies.filter(c => c.id !== currentCompany.id);
  const [selectedLender, setSelectedLender] = useState<string>(otherCompanies[0]?.name || 'Real Partner Enterprise');
  const [selectedRole, setSelectedRole] = useState<string>('Senior QA Engineer');
  const [quantity, setQuantity] = useState<number>(1);
  const [durationDays, setDurationDays] = useState<number>(3);
  const [creditsExchanged, setCreditsExchanged] = useState<number>(35);

  const demoCompaniesCount = companies.filter(c => c.isDemoCompany).length;
  const demoTradesCount = trades.filter(t => t.isDemoTrade).length;
  const isCleanProduction = demoCompaniesCount === 0 && demoTradesCount === 0;

  const handleProposeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProposeNewTrade({
      lenderCompany: selectedLender,
      borrowerCompany: currentCompany.name,
      resourceRole: selectedRole,
      quantity,
      durationDays,
      creditsExchanged,
      status: 'pending_approval',
      aiConfidence: 0.94,
      reasoning: `AI Market Match: ${selectedLender} has idle capacity for ${selectedRole}. Borrowing unblocks delivery schedule.`
    });
    setShowProposeModal(false);
  };

  const totalCirculation = companies.reduce((acc, c) => acc + c.credits, 0);

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner: FFX Exchange Overview */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                FFX Exchange Network
              </span>
              <span className="text-xs text-slate-400">Inter-Company Idle Capacity Brokerage</span>
              {isCleanProduction ? (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30 flex items-center space-x-1">
                  <CheckCircle2Icon className="w-3 h-3 text-emerald-400" />
                  <span>Production Mode Active</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">
                  Demo Data Active ({demoCompaniesCount} Demo Orgs)
                </span>
              )}
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              FlowForge Enterprise Collaboration Exchange
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              <strong>{currentCompany.name}</strong> ({currentCompany.location}) trades developer, QA, and DevOps capacity using FFX Slack Credits. Every trade includes automated SLA penalties and AI match verification.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onOpenCompanyModal && (
              <button
                onClick={onOpenCompanyModal}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-cyan-300 border border-cyan-500/40 font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer shadow-sm"
              >
                <DatabaseIcon className="w-4 h-4 text-cyan-400" />
                <span>Manage Roster & Data</span>
              </button>
            )}

            {onOpenCreditModal && (
              <button
                onClick={onOpenCreditModal}
                className="px-3.5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs transition flex items-center space-x-1.5 cursor-pointer"
              >
                <CoinsIcon className="w-4 h-4 text-amber-400" />
                <span>+ Buy FFX Credits</span>
              </button>
            )}

            <button
              onClick={() => setShowProposeModal(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition shadow-lg shadow-cyan-950 flex items-center space-x-2 cursor-pointer"
            >
              <PlusIcon className="w-4 h-4" />
              <span>Propose Capacity Trade</span>
            </button>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-800/80">
          <div>
            <span className="text-[11px] text-slate-400">Total FFX In Circulation</span>
            <p className="text-lg font-bold text-amber-400 font-mono">{totalCirculation.toLocaleString()} FFX</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Connected Enterprises</span>
            <p className="text-lg font-bold text-slate-100 font-mono">{companies.length} Nodes</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Active Trades</span>
            <p className="text-lg font-bold text-cyan-400 font-mono">{trades.filter(t => t.status === 'active').length} Live</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Anchor Organization</span>
            <p className="text-sm font-bold text-emerald-400 font-mono truncate">{currentCompany.name}</p>
          </div>
        </div>
      </div>

      {/* Grid: Companies Network & Active Trade Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Connected Companies Roster */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Exchange Network Companies</span>
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                {companies.length} Nodes
              </span>
              {onOpenCompanyModal && (
                <button
                  onClick={onOpenCompanyModal}
                  className="text-xs text-cyan-400 hover:text-cyan-300 transition"
                  title="Configure & Purge"
                >
                  Edit
                </button>
              )}
            </div>
          </div>

          <div className="space-y-3">
            {companies.map((comp) => {
              const isCurrent = comp.id === currentCompany.id;
              const isDemo = comp.isDemoCompany;
              return (
                <div
                  key={comp.id}
                  className={`p-3 rounded-xl border transition ${
                    isCurrent
                      ? 'bg-cyan-950/30 border-cyan-500/70 shadow-md shadow-cyan-950/30'
                      : isDemo
                      ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-850/80 border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-bold text-slate-100">{comp.name}</span>
                        {isCurrent && (
                          <span className="text-[8px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.2 rounded-full">
                            YOU
                          </span>
                        )}
                        {isDemo && (
                          <span className="text-[8px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1 rounded">
                            Demo
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {comp.industry} • {comp.location}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 font-bold">
                        {comp.credits.toLocaleString()} FFX
                      </span>
                      {!isCurrent && onDeleteCompany && (
                        <button
                          onClick={() => onDeleteCompany(comp.id)}
                          title="Remove company"
                          className="w-5 h-5 rounded text-slate-500 hover:text-rose-400 flex items-center justify-center transition"
                        >
                          <Trash2Icon className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-800/60">
                    <div className="flex items-center space-x-1">
                      <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>
                        {(() => {
                          const rep = typeof comp?.trustScore === 'number' && !isNaN(comp.trustScore)
                            ? comp.trustScore
                            : typeof comp?.reputation === 'number' && !isNaN(comp.reputation)
                            ? (comp.reputation <= 1 ? comp.reputation * 100 : comp.reputation)
                            : 100;
                          const safeRep = isNaN(rep) || !isFinite(rep) ? 100 : Math.min(100, Math.max(0, Math.round(rep)));
                          return `${safeRep}% Trust Score`;
                        })()}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-medium">
                      {typeof comp?.idleCapacityPercent === 'number' && !isNaN(comp.idleCapacityPercent) ? comp.idleCapacityPercent : 0}% Idle Capacity
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {onOpenCompanyModal && (
            <button
              onClick={onOpenCompanyModal}
              className="w-full py-2 border border-dashed border-slate-700 hover:border-cyan-500/50 rounded-xl text-slate-400 hover:text-cyan-300 text-xs font-semibold flex items-center justify-center space-x-1.5 transition cursor-pointer"
            >
              <PlusIcon className="w-3.5 h-3.5" />
              <span>Add Real Partner / Manage Data</span>
            </button>
          )}
        </div>

        {/* Live Trade Settlement Ledger */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <ArrowLeftRightIcon className="w-4 h-4 text-cyan-400" />
              <span>Live Capacity Trade Ledger</span>
            </h2>
            <div className="flex items-center space-x-2">
              {demoTradesCount > 0 && onPurgeAllDemoData && (
                <button
                  onClick={onPurgeAllDemoData}
                  className="text-[11px] text-rose-400 hover:underline flex items-center space-x-1"
                >
                  <Trash2Icon className="w-3 h-3" />
                  <span>Purge Fake Trades ({demoTradesCount})</span>
                </button>
              )}
              <span className="text-xs text-slate-400 font-mono">
                AI Market Confidence Matrix
              </span>
            </div>
          </div>

          {trades.length === 0 ? (
            <div className="p-8 text-center bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3">
              <CheckCircle2Icon className="w-8 h-8 text-emerald-400 mx-auto" />
              <div>
                <h3 className="text-sm font-bold text-white">Clean Production Ledger</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                  All demo trades have been purged. You can now propose real capacity trades with connected partner organizations using FFX credits.
                </p>
              </div>
              <button
                onClick={() => setShowProposeModal(true)}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition inline-flex items-center space-x-1.5"
              >
                <PlusIcon className="w-4 h-4" />
                <span>Create First Real Trade</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {trades.map((trade) => {
                const isPending = trade.status === 'pending_approval';
                return (
                  <div
                    key={trade.id}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 hover:border-slate-700 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-cyan-400">{trade.id}</span>
                        <span className="text-xs font-semibold text-slate-200">{trade.resourceRole}</span>
                        {trade.isDemoTrade && (
                          <span className="text-[9px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1 rounded">
                            Demo
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                          {trade.creditsExchanged} FFX
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          trade.status === 'active'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : trade.status === 'completed'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse'
                        }`}>
                          {trade.status.replace('_', ' ').toUpperCase()}
                        </span>
                        {onDeleteTrade && (
                          <button
                            onClick={() => onDeleteTrade(trade.id)}
                            title="Delete / Archive trade"
                            className="w-5 h-5 rounded text-slate-500 hover:text-rose-400 flex items-center justify-center transition"
                          >
                            <Trash2Icon className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Flow Direction */}
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Lender:</span>
                        <span className="font-semibold text-slate-200">{trade.lenderCompany}</span>
                      </div>

                      <ArrowLeftRightIcon className="w-4 h-4 text-cyan-400 shrink-0" />

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Borrower:</span>
                        <span className="font-semibold text-slate-200">{trade.borrowerCompany}</span>
                      </div>
                    </div>

                    {/* AI Reasoning */}
                    <div className="text-xs text-slate-300 bg-indigo-950/40 border border-indigo-900/50 p-2.5 rounded-lg flex items-start space-x-2">
                      <SparklesIcon className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-indigo-200">
                          AI Match Justification ({typeof trade.aiConfidence === 'number' && !isNaN(trade.aiConfidence) ? Math.round(trade.aiConfidence <= 1 ? trade.aiConfidence * 100 : trade.aiConfidence) : 95}% Confidence):
                        </span>
                        <p className="text-[11px] text-slate-300 mt-0.5">{trade.reasoning}</p>
                      </div>
                    </div>

                    {/* Action Buttons if Pending */}
                    {isPending && (
                      <div className="flex items-center justify-end space-x-2 pt-1">
                        <button
                          onClick={() => onExecuteTrade({ ...trade, status: 'active' })}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center space-x-1.5"
                        >
                          <CheckCircle2Icon className="w-3.5 h-3.5" />
                          <span>Approve & Execute Trade</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Propose Trade Modal */}
      {showProposeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl text-slate-100">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                <ArrowLeftRightIcon className="w-5 h-5 text-cyan-400" />
                <span>Propose Capacity Trade</span>
              </h3>
              <button
                onClick={() => setShowProposeModal(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handleProposeSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Target Lender Enterprise:</label>
                <select
                  value={selectedLender}
                  onChange={(e) => setSelectedLender(e.target.value)}
                  className="w-full bg-slate-800 text-slate-200 rounded-lg p-2 border border-slate-700 focus:outline-none focus:border-cyan-500"
                >
                  {companies.filter(c => c.id !== currentCompany.id).map(comp => (
                    <option key={comp.id} value={comp.name}>
                      {comp.name} ({comp.idleCapacityPercent}% Idle Bandwidth)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Required Resource Role:</label>
                <input
                  type="text"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-slate-800 text-slate-200 rounded-lg p-2 border border-slate-700"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Duration (Days):</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={durationDays}
                    onChange={(e) => setDurationDays(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-800 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">FFX Credit Price:</label>
                  <input
                    type="number"
                    min="5"
                    value={creditsExchanged}
                    onChange={(e) => setCreditsExchanged(parseInt(e.target.value) || 10)}
                    className="w-full bg-slate-800 text-slate-200 rounded-lg p-2 border border-slate-700"
                  />
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-400 text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span>Your Balance:</span>
                  <span className="font-bold text-amber-300">{currentCompany.credits} FFX</span>
                </div>
                <div className="flex justify-between">
                  <span>Trade Cost:</span>
                  <span className="font-bold text-cyan-400">-{creditsExchanged} FFX</span>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowProposeModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition"
                >
                  Submit Trade Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
