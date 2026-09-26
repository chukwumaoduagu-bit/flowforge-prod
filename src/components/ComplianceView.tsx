import React, { useState } from 'react';
import { ComplianceDeadline } from '../types';
import { 
  BuildingIcon, 
  ShieldCheckIcon, 
  CalculatorIcon, 
  FileTextIcon, 
  CalendarIcon, 
  CheckCircle2Icon, 
  AlertTriangleIcon,
  HelpCircleIcon
} from 'lucide-react';

interface ComplianceViewProps {
  deadlines: ComplianceDeadline[];
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({ deadlines }) => {
  const [saasFee, setSaasFee] = useState<number>(5000);
  const [localTaxRatePercent, setLocalTaxRatePercent] = useState<number>(2.0); // 2.0% local + 6.25% state = 8.25%

  const stateTaxRate = 0.0625; // Texas State 6.25%
  const combinedRate = stateTaxRate + (localTaxRatePercent / 100);
  const taxableBasis = saasFee * 0.80; // Texas 80% rule for SaaS data processing
  const totalTaxAmount = taxableBasis * combinedRate;
  const effectiveRatePercent = (totalTaxAmount / saasFee) * 100;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/50 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                Texas Entity Operations
              </span>
              <span className="text-xs text-slate-400">CFO TAX PRO LLC (dba FlowForge) • Dallas / Sachse, TX</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              Texas Business Legal & SaaS Tax Operations Center
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed mt-1">
              Operating an enterprise SaaS AI platform in Dallas, Texas requires strict compliance with the 80% SaaS Sales Tax rule (Texas Tax Code § 151.351), FinCEN BOI reporting, and Dallas County Appraisal District filings.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
            <BuildingIcon className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-xs font-bold text-slate-200 block">LLC Status: Active & Good Standing</span>
              <span className="text-[10px] text-slate-400 font-mono">Texas SOS File # 08051239</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive 80% Tax Calculator & Compliance Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interactive 80% SaaS Sales Tax Calculator */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <CalculatorIcon className="w-4 h-4 text-amber-400" />
              <span>Texas 80% SaaS Sales Tax Calculator</span>
            </h2>
            <span className="text-[10px] font-mono bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded border border-amber-800/40">
              Texas Tax Code § 151.351
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            In Texas, SaaS is classified as a data processing service where <strong className="text-amber-300">only 80% of the invoice fee is subject to state/local sales tax</strong>. The remaining 20% is tax-exempt.
          </p>

          <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Monthly/Annual SaaS Subscription Fee ($):</label>
              <input
                type="number"
                value={saasFee}
                onChange={(e) => setSaasFee(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-900 text-slate-100 rounded-lg p-2.5 border border-slate-700 text-sm font-semibold"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Local Texas Jurisdiction Tax Rate (%):</label>
              <select
                value={localTaxRatePercent}
                onChange={(e) => setLocalTaxRatePercent(parseFloat(e.target.value))}
                className="w-full bg-slate-900 text-slate-100 rounded-lg p-2.5 border border-slate-700"
              >
                <option value={2.0}>2.00% (Dallas City 1.00% + DART 1.00% - Max Combined 8.25%)</option>
                <option value={1.75}>1.75% (Texas Remote Single Local Rate Option)</option>
                <option value={1.50}>1.50% (Standard County Rate)</option>
                <option value={1.00}>1.00% (Base City Rate)</option>
              </select>
            </div>

            {/* Calculations Output */}
            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2 pt-3 font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Gross SaaS Invoice Amount:</span>
                <span className="font-bold text-white">${saasFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>80% Taxable Basis (Data Processing):</span>
                <span className="font-bold text-amber-300">${taxableBasis.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Combined Tax Rate (6.25% State + {localTaxRatePercent}% Local):</span>
                <span className="text-cyan-400">{(combinedRate * 100).toFixed(2)}%</span>
              </div>
              <div className="flex justify-between text-emerald-400 pt-2 border-t border-slate-800 font-bold text-sm">
                <span>Total Texas Sales Tax to Collect:</span>
                <span>${totalTaxAmount.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-sans italic pt-1">
                Effective tax rate on gross invoice is {effectiveRatePercent.toFixed(2)}% due to the 20% exemption.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Calendar & Deadlines */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4 text-amber-400" />
              <span>Texas Annual Compliance Calendar</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              2026/2027 Schedule
            </span>
          </div>

          <div className="space-y-3">
            {deadlines.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">{item.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    item.status === 'action_required'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    Due: {item.dueDate}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400">
                  Authority: <strong className="text-slate-300">{item.authority}</strong>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* FinCEN BOI Summary Card */}
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs space-y-2">
            <div className="flex items-center space-x-2 text-amber-300 font-bold">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>FinCEN Beneficial Ownership Info (BOI) Status</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-snug">
              Under the Corporate Transparency Act, LLCs must report 25%+ beneficial owners to FinCEN within 30 days of formation. Filing is free on FinCEN BOI portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
