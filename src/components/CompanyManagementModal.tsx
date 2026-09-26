import React, { useState } from 'react';
import { 
  Building2, 
  Trash2Icon, 
  PlusIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  XIcon, 
  AlertTriangleIcon, 
  CheckCircle2Icon,
  RefreshCwIcon,
  LayersIcon,
  ArrowLeftRightIcon,
  DatabaseIcon,
  BriefcaseIcon
} from 'lucide-react';
import { Company, TradeExchange } from '../types';

interface CompanyManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  companies: Company[];
  trades: TradeExchange[];
  currentCompany: Company;
  onAddCompany: (newCompany: Omit<Company, 'id'>) => void;
  onDeleteCompany: (companyId: string) => void;
  onDeleteTrade: (tradeId: string) => void;
  onPurgeAllDemoData: () => void;
  onRestoreSampleData: () => void;
}

export const CompanyManagementModal: React.FC<CompanyManagementModalProps> = ({
  isOpen,
  onClose,
  companies,
  trades,
  currentCompany,
  onAddCompany,
  onDeleteCompany,
  onDeleteTrade,
  onPurgeAllDemoData,
  onRestoreSampleData
}) => {
  const [activeTab, setActiveTab] = useState<'companies' | 'trades' | 'add_company' | 'purge_action'>('companies');
  
  // New Company Form State
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Enterprise Cloud & SaaS');
  const [location, setLocation] = useState('Dallas, TX');
  const [sosFileNumber, setSosFileNumber] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [initialCredits, setInitialCredits] = useState<number>(1000);
  const [idleCapacity, setIdleCapacity] = useState<number>(25);
  const [servicesOfferedStr, setServicesOfferedStr] = useState('Senior Backend Developers, QA Automation');
  
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) return;

    const services = servicesOfferedStr
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    onAddCompany({
      name: companyName.trim(),
      industry,
      location,
      credits: Number(initialCredits) || 500,
      reputation: 0.95,
      activeTrades: 0,
      idleCapacityPercent: Number(idleCapacity) || 20,
      trustScore: 95,
      isAnchorCompany: false,
      isDemoCompany: false,
      sosFileNumber: sosFileNumber.trim() || undefined,
      contactEmail: contactEmail.trim() || undefined,
      servicesOffered: services.length > 0 ? services : ['Enterprise Engineering Services']
    });

    setStatusMessage(`Successfully registered real partner "${companyName.trim()}" in Dallas / Texas ecosystem.`);
    setCompanyName('');
    setSosFileNumber('');
    setContactEmail('');
    setActiveTab('companies');
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const demoCompaniesCount = companies.filter(c => c.isDemoCompany).length;
  const demoTradesCount = trades.filter(t => t.isDemoTrade).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-cyan-950/40 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <DatabaseIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-bold text-white">Enterprise Network & Data Management</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  Production Mode
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Manage connected real entities, purge fake demo companies, and configure partner capacity.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-5 text-xs font-medium">
          <button
            onClick={() => setActiveTab('companies')}
            className={`py-3 px-4 border-b-2 font-semibold transition flex items-center space-x-2 cursor-pointer ${
              activeTab === 'companies'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Companies Roster ({companies.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('trades')}
            className={`py-3 px-4 border-b-2 font-semibold transition flex items-center space-x-2 cursor-pointer ${
              activeTab === 'trades'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowLeftRightIcon className="w-3.5 h-3.5" />
            <span>Trade Ledger ({trades.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('add_company')}
            className={`py-3 px-4 border-b-2 font-semibold transition flex items-center space-x-2 cursor-pointer ${
              activeTab === 'add_company'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <PlusIcon className="w-3.5 h-3.5" />
            <span>+ Add Real Partner Company</span>
          </button>

          <button
            onClick={() => setActiveTab('purge_action')}
            className={`py-3 px-4 border-b-2 font-semibold transition flex items-center space-x-2 cursor-pointer ml-auto ${
              activeTab === 'purge_action'
                ? 'border-rose-400 text-rose-400'
                : 'border-transparent text-rose-400/80 hover:text-rose-300'
            }`}
          >
            <Trash2Icon className="w-3.5 h-3.5" />
            <span>Purge Demo Data {demoCompaniesCount > 0 && `(${demoCompaniesCount})`}</span>
          </button>
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <div className="mx-5 mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: COMPANIES ROSTER */}
          {activeTab === 'companies' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Showing all active enterprise nodes in the FFX Exchange Network:
                </span>
                <button
                  onClick={() => setActiveTab('add_company')}
                  className="text-xs text-cyan-400 hover:underline flex items-center space-x-1"
                >
                  <PlusIcon className="w-3 h-3" />
                  <span>Add New Real Partner</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {companies.map((comp) => {
                  const isAnchor = comp.isAnchorCompany || comp.id === 'C1';
                  const isDemo = comp.isDemoCompany;

                  return (
                    <div
                      key={comp.id}
                      className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition ${
                        isAnchor
                          ? 'bg-cyan-950/30 border-cyan-500/50 shadow-md shadow-cyan-950/20'
                          : isDemo
                          ? 'bg-slate-950/70 border-slate-800'
                          : 'bg-slate-850/80 border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-white">{comp.name}</span>
                          {isAnchor ? (
                            <span className="text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full">
                              PRIMARY ROOT ENTITY (DALLAS, TX)
                            </span>
                          ) : isDemo ? (
                            <span className="text-[9px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">
                              Demo / Sample
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                              Real Partner
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span>{comp.industry}</span>
                          <span>•</span>
                          <span>{comp.location}</span>
                          {comp.sosFileNumber && (
                            <>
                              <span>•</span>
                              <span className="font-mono text-cyan-400">SOS #{comp.sosFileNumber}</span>
                            </>
                          )}
                        </div>

                        {comp.servicesOffered && comp.servicesOffered.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {comp.servicesOffered.map((s, idx) => (
                              <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-3 shrink-0">
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-amber-300 block">
                            {comp.credits.toLocaleString()} FFX
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {comp.idleCapacityPercent}% Idle Capacity
                          </span>
                        </div>

                        {!isAnchor && (
                          <button
                            onClick={() => {
                              onDeleteCompany(comp.id);
                              setStatusMessage(`Removed entity "${comp.name}" from FFX Network.`);
                              setTimeout(() => setStatusMessage(null), 3000);
                            }}
                            title="Remove / Delete Company"
                            className="w-8 h-8 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-800/40 flex items-center justify-center transition cursor-pointer"
                          >
                            <Trash2Icon className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: TRADE LEDGER */}
          {activeTab === 'trades' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Recorded FFX capacity trades in the cryptographic ledger:
                </span>
              </div>

              {trades.length === 0 ? (
                <div className="p-8 text-center bg-slate-950/50 rounded-2xl border border-slate-800 text-slate-400">
                  <CheckCircle2Icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-300">Clean Production Ledger</p>
                  <p className="text-[11px] text-slate-500 mt-1">No demo trades active. All future trades will reflect real partner agreements.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {trades.map((trade) => (
                    <div
                      key={trade.id}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-cyan-400">{trade.id}</span>
                          <span className="font-semibold text-slate-200">{trade.resourceRole}</span>
                          {trade.isDemoTrade && (
                            <span className="text-[9px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1 rounded">
                              Demo Trade
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {trade.lenderCompany} → {trade.borrowerCompany} • {trade.durationDays} Days • <strong className="text-amber-300">{trade.creditsExchanged} FFX</strong>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onDeleteTrade(trade.id);
                          setStatusMessage(`Archived trade ${trade.id} from ledger.`);
                          setTimeout(() => setStatusMessage(null), 3000);
                        }}
                        title="Delete / Archive Trade"
                        className="w-7 h-7 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 border border-rose-800/40 flex items-center justify-center transition cursor-pointer"
                      >
                        <Trash2Icon className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ADD REAL PARTNER COMPANY */}
          {activeTab === 'add_company' && (
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="p-3 bg-cyan-950/30 border border-cyan-500/30 rounded-xl text-xs text-cyan-300">
                Connect a real business partner, vendor, or client company to trade developer, QA, or DevOps capacity with <strong>CFO TAX PRO LLC</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Data Solutions LLC"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Industry Sector
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise SaaS / Fintech"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Headquarters / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dallas, TX"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Texas SOS File # / EIN (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 0805991234"
                    value={sosFileNumber}
                    onChange={(e) => setSosFileNumber(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Corporate Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="partner@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Initial FFX Slack Credits Allocation
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="100000"
                    step="100"
                    value={initialCredits}
                    onChange={(e) => setInitialCredits(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Skills & Services Available to Lend (Comma Separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior QA Automation, DevOps Kubernetes, Backend Python"
                  value={servicesOfferedStr}
                  onChange={(e) => setServicesOfferedStr(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs transition shadow-md shadow-cyan-950 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <PlusIcon className="w-4 h-4" />
                <span>Register Partner & Connect to FFX Exchange</span>
              </button>
            </form>
          )}

          {/* TAB 4: PURGE DEMO DATA ACTION */}
          {activeTab === 'purge_action' && (
            <div className="space-y-4 p-4 rounded-2xl bg-slate-950 border border-rose-900/40">
              <div className="flex items-start space-x-3">
                <AlertTriangleIcon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Purge All Demo Data (Live Production Network)</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    This operation removes all sample companies (Apex Systems Solutions, Nexus Global Tech, Cognitive Dynamics Labs, Veritas Logistics Group) and fake test trades (TR-8821, TR-8819, TR-8824).
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold mt-2">
                    ✓ Keeps <strong>CFO TAX PRO LLC (Dallas, TX)</strong> as your official anchor company with full FFX reserves.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onPurgeAllDemoData();
                    setStatusMessage('✨ Demo data purged! Switched to Clean Live Production Network.');
                    setTimeout(() => setStatusMessage(null), 4000);
                    setActiveTab('companies');
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-lg shadow-rose-950 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Trash2Icon className="w-4 h-4" />
                  <span>Confirm Purge & Activate Live Production</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onRestoreSampleData();
                    setStatusMessage('Restored sample demonstration dataset.');
                    setTimeout(() => setStatusMessage(null), 4000);
                    setActiveTab('companies');
                  }}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-medium transition border border-slate-700 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <RefreshCwIcon className="w-3.5 h-3.5" />
                  <span>Restore Sample Demo Data</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
            <span>State of Texas Entity Operations: <strong>CFO TAX PRO LLC</strong></span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-medium text-xs transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
