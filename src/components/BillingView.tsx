import React, { useState } from 'react';
import { 
  DollarSignIcon, 
  TrendingUpIcon, 
  CreditCardIcon, 
  CheckCircle2Icon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  CoinsIcon, 
  Building2, 
  ArrowUpRightIcon, 
  ZapIcon, 
  ArrowDownRightIcon, 
  ClockIcon, 
  PercentIcon, 
  LockIcon, 
  CheckIcon,
  RefreshCwIcon,
  WalletIcon
} from 'lucide-react';
import { Company } from '../types';

interface BillingViewProps {
  currentCompany: Company;
  companies: Company[];
  onOpenCreditModal: () => void;
  onUpdateSubscription: (tier: 'starter' | 'pro' | 'enterprise') => void;
}

export const BillingView: React.FC<BillingViewProps> = ({
  currentCompany,
  companies,
  onOpenCreditModal,
  onUpdateSubscription
}) => {
  const [currentTier, setCurrentTier] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [payoutAmount, setPayoutAmount] = useState<number>(4500);
  const [isProcessingPayout, setIsProcessingPayout] = useState<boolean>(false);
  const [payoutSuccessMsg, setPayoutSuccessMsg] = useState<string | null>(null);

  const pricingTiers = [
    {
      id: 'starter' as const,
      name: 'Starter Tier',
      priceUSD: 0,
      period: 'Forever Free',
      badge: 'Free Tier',
      creditsIncluded: 100,
      features: [
        '1 Active Project DAG',
        'Up to 3 Team Members',
        '100 Free FFX Slack Credits',
        'Basic Critical Path Gantt View',
        'Standard Community Support'
      ],
      limits: '100 Actions / Month',
      popular: false
    },
    {
      id: 'pro' as const,
      name: 'Professional Scale',
      priceUSD: 499,
      period: 'per company / month',
      badge: 'Most Popular',
      creditsIncluded: 10000,
      features: [
        'Unlimited Project DAGs',
        'Up to 15 Team Members',
        '10,000 FFX Slack Credits / Month',
        'Full Anti-Burnout Cognitive Matrix',
        'AI Signal Radar & Outreach Sequences',
        'Enterprise FFX Marketplace Access',
        'Priority Slack & Email Support'
      ],
      limits: '10,000 Actions / Month',
      popular: true
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise AI Swarm',
      priceUSD: 1499,
      period: 'per company / month',
      badge: 'Full Automation',
      creditsIncluded: 50000,
      features: [
        'Unlimited Everything & Seats',
        '50,000 FFX Slack Credits / Month',
        'Custom AI Swarm Agents & LLM Fine-Tuning',
        'White-labeling & Custom Domain SSO',
        'On-Premise / Hybrid Cloud VPC Deployments',
        'Full SHA-256 Audit Chain Verification',
        'Dedicated 99.99% Uptime SLA & Solutions Architect'
      ],
      limits: 'Unlimited Actions & API Calls',
      popular: false
    }
  ];

  const handleTierSelect = (tierId: 'starter' | 'pro' | 'enterprise') => {
    setCurrentTier(tierId);
    onUpdateSubscription(tierId);
  };

  const handleSimulatePayout = () => {
    setIsProcessingPayout(true);
    setTimeout(() => {
      setIsProcessingPayout(false);
      setPayoutSuccessMsg(`Successfully dispatched $${payoutAmount.toLocaleString()} via Stripe Connect Express to Frost Bank account (•••• 8831).`);
      setTimeout(() => setPayoutSuccessMsg(null), 5000);
    }, 1200);
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner: The "Sleep Money" Live Engine */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                Stripe Connect Live Flywheel
              </span>
              <span className="text-xs text-slate-400">Automated Multi-Sided Monetization</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center space-x-2">
              <span>The FlowForge Money Machine</span>
              <SparklesIcon className="w-5 h-5 text-amber-400 animate-pulse" />
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              FlowForge generates recurring SaaS subscriptions, collects a <strong>5% platform take-rate</strong> on all inter-company capacity trades, and captures arbitrage margin on FFX credit liquidity.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenCreditModal}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs transition shadow-lg shadow-amber-950 flex items-center space-x-2 cursor-pointer"
            >
              <CoinsIcon className="w-4 h-4" />
              <span>Buy FFX Slack Credits</span>
            </button>
          </div>
        </div>

        {/* 4 Core Passive Revenue Channels */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-800/80">
          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Monthly Recurring Rev (MRR)</span>
              <span className="text-emerald-400 font-bold flex items-center">+18%</span>
            </div>
            <p className="text-xl font-bold text-slate-100 font-mono mt-1">$39,940 / mo</p>
            <span className="text-[10px] text-slate-500">50 Pro + 10 Enterprise accounts</span>
          </div>

          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>5% Trade Platform Fee</span>
              <span className="text-cyan-400 font-bold">Auto-Deducted</span>
            </div>
            <p className="text-xl font-bold text-cyan-400 font-mono mt-1">$2,840 / day</p>
            <span className="text-[10px] text-slate-500">From inter-company capacity trades</span>
          </div>

          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>FFX Credit Arbitrage</span>
              <span className="text-amber-400 font-bold">20% Spread</span>
            </div>
            <p className="text-xl font-bold text-amber-300 font-mono mt-1">$100,000 / mo</p>
            <span className="text-[10px] text-slate-500">1,000,000 FFX volume sold</span>
          </div>

          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Annual Projected Run-Rate</span>
              <span className="text-emerald-400 font-bold">ARR</span>
            </div>
            <p className="text-xl font-bold text-emerald-400 font-mono mt-1">$1,979,280</p>
            <span className="text-[10px] text-slate-500">Full-stack multi-stream monetization</span>
          </div>
        </div>
      </div>

      {/* Subscription Tier Manager */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-white flex items-center space-x-2">
              <CreditCardIcon className="w-5 h-5 text-cyan-400" />
              <span>SaaS Subscription Plans & Upgrade Engine</span>
            </h2>
            <p className="text-xs text-slate-400">
              Companies upgrade as their project complexity, team size, and action volumes grow.
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg text-slate-300">
            Current Tier: <strong className="text-cyan-400 uppercase">{currentTier}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingTiers.map((tier) => {
            const isCurrent = currentTier === tier.id;
            return (
              <div
                key={tier.id}
                className={`p-5 rounded-2xl border transition relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900/90 border-cyan-500/80 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="font-bold text-base text-white">{tier.name}</h3>
                      <span className="text-[11px] text-slate-400">{tier.limits}</span>
                    </div>
                    {isCurrent && (
                      <span className="text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                        Active Plan
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-extrabold text-white font-mono">
                        ${tier.priceUSD}
                      </span>
                      <span className="text-xs text-slate-400">/{tier.period}</span>
                    </div>
                    <p className="text-[11px] text-amber-400 font-semibold mt-1">
                      Includes {tier.creditsIncluded.toLocaleString()} FFX Slack Credits
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleTierSelect(tier.id)}
                    disabled={isCurrent}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition shadow-md ${
                      isCurrent
                        ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white cursor-pointer'
                    }`}
                  >
                    {isCurrent ? 'Current Plan' : `Upgrade to ${tier.name}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stripe Connect Express & Payout Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payout Simulator */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <WalletIcon className="w-4 h-4 text-emerald-400" />
              <span>Stripe Connect Express Payouts</span>
            </h2>
            <span className="text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded">
              Verified KYC
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Revenue collected from FFX trades and FFX credit redemption can be withdrawn directly to your connected business bank account.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Available for Withdrawal:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">$8,940.00 USD</span>
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Withdrawal Amount ($):</label>
              <input
                type="number"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(parseInt(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Destination:</span>
              <span className="font-mono text-slate-300">Frost Bank (Austin, TX) •••• 8831</span>
            </div>

            <button
              onClick={handleSimulatePayout}
              disabled={isProcessingPayout}
              className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
            >
              {isProcessingPayout ? (
                <span>Dispatching ACH via Stripe...</span>
              ) : (
                <>
                  <ArrowUpRightIcon className="w-4 h-4" />
                  <span>Initiate Instant Payout (${payoutAmount.toLocaleString()})</span>
                </>
              )}
            </button>
          </div>

          {payoutSuccessMsg && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 flex items-start space-x-2">
              <CheckCircle2Icon className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{payoutSuccessMsg}</span>
            </div>
          )}
        </div>

        {/* Connected Accounts Network Roster */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Connected Enterprise Accounts & Automated 5% Take-Rate</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Live Settlement Ledger
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                  <th className="pb-2">Enterprise Name</th>
                  <th className="pb-2">Stripe Connect ID</th>
                  <th className="pb-2">Plan</th>
                  <th className="pb-2">FFX Balance</th>
                  <th className="pb-2">Total 5% Fees Paid</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {companies.map((comp, idx) => {
                  const isCur = comp.id === currentCompany.id;
                  return (
                    <tr key={comp.id} className={`hover:bg-slate-800/40 transition ${isCur ? 'bg-cyan-950/20' : ''}`}>
                      <td className="py-2.5 font-semibold text-slate-200">
                        {comp.name} {isCur && <span className="text-[10px] text-cyan-400">(You)</span>}
                      </td>
                      <td className="py-2.5 font-mono text-slate-400">
                        acct_1N{idx}x9F82{comp.id.replace('C', '')}
                      </td>
                      <td className="py-2.5">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                          {idx === 0 ? 'Enterprise ($1,499)' : 'Pro ($499)'}
                        </span>
                      </td>
                      <td className="py-2.5 font-mono font-bold text-amber-300">
                        {comp.credits.toLocaleString()} FFX
                      </td>
                      <td className="py-2.5 font-mono font-bold text-emerald-400">
                        ${(1450 + idx * 820).toLocaleString()}
                      </td>
                      <td className="py-2.5">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold flex items-center space-x-1 w-fit">
                          <CheckIcon className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Texas 80% SaaS Tax Notice */}
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-start space-x-2.5">
            <ShieldCheckIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200">Automatic Texas Tax Compliance:</span>
              <p className="mt-0.5">
                All subscriptions and FFX credit purchases are automatically billed with **Texas Tax Code § 151.351**, applying state/local sales tax to exactly 80% of SaaS fees while exempting the remaining 20%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
