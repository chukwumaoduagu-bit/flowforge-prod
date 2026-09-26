import React, { useState } from 'react';
import { Prospect, OutreachMessage } from '../types';
import { 
  TargetIcon, 
  SparklesIcon, 
  CheckCircle2Icon, 
  XCircleIcon, 
  SearchIcon, 
  SendIcon, 
  FileTextIcon, 
  TrendingUpIcon, 
  BuildingIcon,
  FlameIcon,
  ExternalLinkIcon
} from 'lucide-react';

interface OutreachViewProps {
  prospects: Prospect[];
  onApproveSequence: (prospectId: string) => void;
  onRejectSequence: (prospectId: string) => void;
  onRunSignalRadar: (industry: string) => void;
}

export const OutreachView: React.FC<OutreachViewProps> = ({
  prospects,
  onApproveSequence,
  onRejectSequence,
  onRunSignalRadar
}) => {
  const [selectedProspect, setSelectedProspect] = useState<Prospect>(prospects[0] || prospects);
  const [activeChannel, setActiveChannel] = useState<'email' | 'linkedin' | 'call_script'>('email');
  const [targetIndustry, setTargetIndustry] = useState<string>('Enterprise SaaS');

  const pendingApprovals = prospects.filter(p => p.status === 'awaiting_approval');
  const activeSequence = selectedProspect?.outreachSequence.find(m => m.channel === activeChannel) || selectedProspect?.outreachSequence[0];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950/70 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                AI Outreach Pipeline
              </span>
              <span className="text-xs text-slate-400">Signal Detection + Deep Research + Human-in-the-Loop</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              AI Client Acquisition Engine
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed mt-1">
              FlowForge continuously scans Crunchbase, TechCrunch, LinkedIn, and Reddit for growth triggers (Series B funding, hiring sprees, CTO changes), builds personalized briefs, and drafts multi-channel sequences for human approval.
            </p>
          </div>

          {/* Trigger Scan Controls */}
          <div className="flex items-center space-x-2 bg-slate-950/80 p-2 rounded-xl border border-slate-800">
            <select
              value={targetIndustry}
              onChange={(e) => setTargetIndustry(e.target.value)}
              className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700"
            >
              <option value="Enterprise SaaS">Enterprise SaaS</option>
              <option value="Healthcare IT">Healthcare IT</option>
              <option value="Fintech & Payments">Fintech & Banking</option>
              <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
            </select>
            <button
              onClick={() => onRunSignalRadar(targetIndustry)}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition flex items-center space-x-1.5 shrink-0"
            >
              <SearchIcon className="w-3.5 h-3.5" />
              <span>Scan Radar</span>
            </button>
          </div>
        </div>

        {/* Pipeline Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-4 border-t border-slate-800/80">
          <div>
            <span className="text-[11px] text-slate-400">Identified Prospects</span>
            <p className="text-lg font-bold text-slate-100 font-mono">{prospects.length} Targeted</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Awaiting Human Review</span>
            <p className="text-lg font-bold text-amber-400 font-mono">{pendingApprovals.length} Pending</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Response Rate</span>
            <p className="text-lg font-bold text-emerald-400 font-mono">18.4% Reply Rate</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Meetings Booked</span>
            <p className="text-lg font-bold text-cyan-400 font-mono">4 Demo Calls</p>
          </div>
        </div>
      </div>

      {/* Main Grid: Prospects List & Deep Research Brief */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Prospects List */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <TargetIcon className="w-4 h-4 text-cyan-400" />
              <span>Signal-Detected Prospects</span>
            </h2>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
              Fit Score 80+
            </span>
          </div>

          <div className="space-y-3">
            {prospects.map((p) => {
              const isSelected = selectedProspect?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProspect(p)}
                  className={`p-3.5 rounded-xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-blue-500/80 shadow-md shadow-blue-950/40'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-100">{p.companyName}</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                      {p.fitScore}% Fit
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {p.industry} • {p.location}
                  </div>

                  {/* Signals tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.signals.map((sig, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-800/30 flex items-center space-x-1">
                        <FlameIcon className="w-3 h-3 text-amber-400" />
                        <span>{sig.type.replace('_', ' ')}</span>
                      </span>
                    ))}
                  </div>

                  {p.status === 'awaiting_approval' && (
                    <div className="mt-2 text-[10px] font-bold text-amber-400 flex items-center space-x-1 bg-amber-950/40 p-1.5 rounded border border-amber-800/30">
                      <SparklesIcon className="w-3 h-3 animate-pulse" />
                      <span>Review Required (3 Draft Messages)</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 2 Columns: Deep Brief & Sequence Editor */}
        <div className="lg:col-span-2 space-y-6">
          {selectedProspect ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5">
              {/* Prospect Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold text-slate-100">{selectedProspect.companyName}</h2>
                    <a 
                      href={`https://${selectedProspect.domain}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline text-xs flex items-center space-x-1"
                    >
                      <span>{selectedProspect.domain}</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {selectedProspect.industry} • {selectedProspect.sizeRange} • {selectedProspect.location}
                  </p>
                </div>

                {selectedProspect.status === 'awaiting_approval' && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onRejectSequence(selectedProspect.id)}
                      className="px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-800/50 text-xs font-semibold transition flex items-center space-x-1"
                    >
                      <XCircleIcon className="w-4 h-4" />
                      <span>Reject</span>
                    </button>
                    <button
                      onClick={() => onApproveSequence(selectedProspect.id)}
                      className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center space-x-1.5 shadow-md shadow-emerald-950"
                    >
                      <CheckCircle2Icon className="w-4 h-4" />
                      <span>Approve & Schedule Sequence</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Signals & Research Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center space-x-1">
                    <FlameIcon className="w-4 h-4" />
                    <span>Buying Signal Trigger</span>
                  </span>
                  {selectedProspect.signals.map((sig, idx) => (
                    <div key={idx} className="text-xs space-y-0.5">
                      <p className="font-semibold text-slate-200">{sig.headline}</p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{sig.summary}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-cyan-400 flex items-center space-x-1">
                    <BuildingIcon className="w-4 h-4" />
                    <span>Tech Stack & Identified Pain Points</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {selectedProspect.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-[11px] text-slate-300 list-disc list-inside space-y-0.5 pt-1">
                    {selectedProspect.painPoints.map((pain, i) => (
                      <li key={i}>{pain}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Multi-Channel Message Drafts Editor */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-200">Generated Outreach Sequence:</span>
                    {/* Channel Selector */}
                    <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setActiveChannel('email')}
                        className={`px-2.5 py-1 rounded text-xs font-medium ${
                          activeChannel === 'email' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Email Draft
                      </button>
                      <button
                        onClick={() => setActiveChannel('linkedin')}
                        className={`px-2.5 py-1 rounded text-xs font-medium ${
                          activeChannel === 'linkedin' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        LinkedIn
                      </button>
                      <button
                        onClick={() => setActiveChannel('call_script')}
                        className={`px-2.5 py-1 rounded text-xs font-medium ${
                          activeChannel === 'call_script' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Call Script
                      </button>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400">
                    Human Review Gate Active
                  </span>
                </div>

                {activeSequence ? (
                  <div className="space-y-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 font-semibold block">Subject Line:</label>
                      <input
                        type="text"
                        value={activeSequence.subject}
                        readOnly
                        className="w-full bg-slate-900 text-slate-100 text-xs rounded-lg p-2 border border-slate-800 font-medium"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 font-semibold block">Message Content:</label>
                      <textarea
                        rows={8}
                        value={activeSequence.content}
                        readOnly
                        className="w-full bg-slate-900 text-slate-100 text-xs rounded-lg p-3 border border-slate-800 font-mono leading-relaxed"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span className="bg-indigo-950/60 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/40 font-mono">
                        Personalization Hook: {activeSequence.personalizationHook}
                      </span>
                      <span className="text-emerald-400 font-medium">Ready for Approval</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-8 text-xs">
                    No draft message generated for this channel yet.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-xs">
              Select a prospect from the radar list to view deep research briefs.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
