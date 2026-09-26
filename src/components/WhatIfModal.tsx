import React from 'react';
import { WhatIfScenario } from '../types';
import { 
  SparklesIcon, 
  ClockIcon, 
  CoinsIcon, 
  FlameIcon, 
  CheckCircle2Icon, 
  ZapIcon,
  X
} from 'lucide-react';

interface WhatIfModalProps {
  isOpen: boolean;
  onClose: () => void;
  scenarios: WhatIfScenario[];
  onExecuteScenario: (scenario: WhatIfScenario) => void;
}

export const WhatIfModal: React.FC<WhatIfModalProps> = ({
  isOpen,
  onClose,
  scenarios,
  onExecuteScenario
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl text-slate-100">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
              <SparklesIcon className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">AI "What-If" War-Gaming Simulator</h3>
              <p className="text-[11px] text-slate-400">Simulate schedule, cost, and cognitive trade-offs before executing</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          {scenarios.map((sc) => (
            <div
              key={sc.id}
              className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 hover:border-indigo-500/60 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-indigo-400">{sc.id}</span>
                  <h4 className="text-xs font-bold text-slate-100">{sc.title}</h4>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  {typeof sc.confidenceScore === 'number' && !isNaN(sc.confidenceScore)
                    ? Math.round(sc.confidenceScore <= 1 ? sc.confidenceScore * 100 : sc.confidenceScore)
                    : 90}% Confidence
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {sc.description}
              </p>

              <div className="grid grid-cols-3 gap-2 text-[11px] font-mono pt-1">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">Time Savings:</span>
                  <span className="font-bold text-emerald-400">+{sc.timeSavingsDays} Days</span>
                </div>

                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">Cost Delta:</span>
                  <span className={`font-bold ${sc.costDeltaUSD <= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {sc.costDeltaUSD <= 0 ? `+$${Math.abs(sc.costDeltaUSD)} Earned` : `-$${sc.costDeltaUSD}`}
                  </span>
                </div>

                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">Cognitive Load:</span>
                  <span className="font-bold text-cyan-400">{sc.cognitiveImpact}</span>
                </div>
              </div>

              <div className="flex items-center justify-end pt-1">
                <button
                  onClick={() => {
                    onExecuteScenario(sc);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center space-x-1.5 shadow-md shadow-indigo-950"
                >
                  <ZapIcon className="w-3.5 h-3.5" />
                  <span>Execute Scenario Action</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
