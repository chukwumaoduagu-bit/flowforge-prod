import React, { useState } from 'react';
import { 
  STABILITY_4_LAYERS, 
  CORE_SERVICES, 
  GLOBAL_NODES, 
  FIGMA_COLOR_TOKENS,
  CERTIFICATION_EXAMS,
  MARKETING_CAMPAIGN,
  FESL_LICENSE_TIERS
} from '../data/totalEnterprisePart14Data';
import { 
  LayersIcon, 
  NetworkIcon, 
  PaletteIcon, 
  GraduationCapIcon, 
  MegaphoneIcon, 
  ShieldCheckIcon,
  CheckCircle2Icon,
  CpuIcon,
  PlayCircleIcon
} from 'lucide-react';

interface TotalEnterprisePart14ViewProps {
  onNavigateToStability?: () => void;
}

export const TotalEnterprisePart14View: React.FC<TotalEnterprisePart14ViewProps> = ({
  onNavigateToStability
}) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'network' | 'figma' | 'exams' | 'licensing' | 'marketing'>('blueprint');
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);
  const [simulatingCycle, setSimulatingCycle] = useState<boolean>(false);
  const [cycleCompleted, setCycleCompleted] = useState<boolean>(false);

  const handleRunAutonomyCycle = () => {
    setSimulatingCycle(true);
    setCycleCompleted(false);
    setTimeout(() => {
      setSimulatingCycle(false);
      setCycleCompleted(true);
    }, 1200);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 text-slate-100 p-4 md:p-8 space-y-6">
      {/* Enterprise Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-black text-xl">⭐</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                TOTAL ENTERPRISE BUILD — PART XIV (FINAL COMPLETION PACKAGE)
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
              Stability OS 4.0 Blueprint, Global Network & Launch Package
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-3xl">
              Production-ready 5-layer autonomous technical blueprint, worldwide regional node network (NA, EMEA, APAC, LATAM, Africa), Figma-ready design tokens, global partner certification exams, and complete go-to-market launch package.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'blueprint', label: '4.0 Blueprint', icon: LayersIcon },
              { id: 'network', label: 'Global Network', icon: NetworkIcon },
              { id: 'figma', label: 'Figma Tokens', icon: PaletteIcon },
              { id: 'exams', label: 'Cert Exams', icon: GraduationCapIcon },
              { id: 'licensing', label: 'FESL Licenses', icon: ShieldCheckIcon },
              { id: 'marketing', label: 'Launch Package', icon: MegaphoneIcon }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab 1: Technical Blueprint */}
      {activeTab === 'blueprint' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-white">5-Layer Autonomous Architecture</h2>
                <p className="text-xs text-slate-400">Continuous telemetry ingestion, policy enforcement, and autonomous action loop.</p>
              </div>
              <button
                onClick={handleRunAutonomyCycle}
                disabled={simulatingCycle}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition cursor-pointer disabled:opacity-50 shadow"
              >
                <CpuIcon className="w-4 h-4" />
                <span>{simulatingCycle ? 'Executing Autonomy Loop...' : 'Run Autonomy v3 Cycle'}</span>
              </button>
            </div>

            {cycleCompleted && (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs space-y-1 text-emerald-300 mb-6">
                <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2Icon className="w-4 h-4" />
                  <span>Autonomy Loop Telemetry Stabilized</span>
                </div>
                <div>• Adaptive Load Balancer (ALB): Offloaded non-critical tasks from Charlie Vance (91% → 73%).</div>
                <div>• Dynamic Slack Optimizer (DSO): Maintained statutory 15% slack liquidity floor across all pods.</div>
                <div>• Critical Path Guardian (CP-GNN): Parallelized decoupled UI scaffolding, reducing delivery window by 3.7 days.</div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
              {STABILITY_4_LAYERS.map((lyr, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-3 rounded-lg border text-left transition cursor-pointer ${
                    selectedLayerIndex === idx
                      ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow'
                      : 'bg-slate-950 border-slate-800 hover:bg-slate-800/80 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-bold text-amber-400 block">{lyr.layer}</span>
                  <span className="text-xs font-bold block mt-0.5 leading-tight">{lyr.name}</span>
                </button>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                {STABILITY_4_LAYERS[selectedLayerIndex].layer} — {STABILITY_4_LAYERS[selectedLayerIndex].name}
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {STABILITY_4_LAYERS[selectedLayerIndex].capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span className="text-slate-300">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-1">Production Microservices & Container Architecture</h2>
            <p className="text-xs text-slate-400 mb-4">Cluster services powering Stability OS 4.0 in Google Cloud and Kubernetes.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {CORE_SERVICES.map((srv, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white">{srv.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                        {srv.tech}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{srv.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-900 flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active in Kubernetes Cluster</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Global Node Network */}
      {activeTab === 'network' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-white">FlowForge Global Stability Network (GSN)</h2>
                <p className="text-xs text-slate-400">Worldwide distributed regional mesh nodes delivering cross-company stability intelligence.</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ● 5 Regional Nodes Active
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {GLOBAL_NODES.map((node, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{node.region}</span>
                    <h3 className="text-sm font-bold text-white mt-1">{node.city}</h3>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Telemetry Latency:</span>
                      <span className="font-mono text-cyan-400 font-bold">{node.latency}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Routing Status</span>
                    <span className="text-emerald-400 font-bold">{node.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">4-Tier Network Topology</h3>
              <div className="grid md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-cyan-400">Tier 1: Regional Nodes</div>
                  <div className="text-[11px] text-slate-400 mt-1">Runs local telemetry ingestion, Autonomy Engine v3, and caching.</div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-amber-400">Tier 2: Global Hub</div>
                  <div className="text-[11px] text-slate-400 mt-1">Aggregates anonymous stability signals and detects global burnout patterns.</div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-white">Tier 3: Partner Layer</div>
                  <div className="text-[11px] text-slate-400 mt-1">Enables certified architects to conduct enterprise ESAs and governance rollouts.</div>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="font-bold text-emerald-400">Tier 4: Enterprise Integrations</div>
                  <div className="text-[11px] text-slate-400 mt-1">Live bidirectional adapters for GitHub, GitLab, Jira, Azure DevOps, and Slack.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Figma Color & Design Tokens */}
      {activeTab === 'figma' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-1">Production Design System & Color Tokens</h2>
            <p className="text-xs text-slate-400 mb-4">Official tokens ready for Figma import, design handoffs, and brand consistency.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {FIGMA_COLOR_TOKENS.map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between h-28">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                    <span className="text-xs font-bold text-white leading-tight">{c.name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 block">{c.hex}</span>
                    <span className="text-[10px] text-slate-500">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">Core UI Components</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                'Stability Score Gauge', 'Slack Liquidity Bar', 'Sprint Volatility Spike Graph', 'Critical Path PERT Map',
                'Burnout Sentinel Curve', '7/14/30-Day Forecast Panel', 'Autonomy Engine Console', 'Official ESA Report Viewer'
              ].map((comp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-semibold text-slate-300 flex items-center gap-2">
                  <span className="text-cyan-400">❖</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Certification Exams */}
      {activeTab === 'exams' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-1">FlowForge Global Partner Certification Exams</h2>
            <p className="text-xs text-slate-400 mb-4">40 Questions • 80% Passing Threshold • 60 Minutes Duration • Scenario-Driven Assessments</p>
            <div className="grid md:grid-cols-2 gap-4">
              {CERTIFICATION_EXAMS.map((exam, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300">
                        {exam.code}
                      </span>
                      <span className="text-[10px] text-slate-500">Levels 1 through 4</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mt-2">{exam.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{exam.focus}</p>
                    <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800/80 space-y-1">
                      <div className="text-[11px] font-medium text-slate-300">Sample: {exam.sampleQ}</div>
                      <div className="text-[11px] text-emerald-400 font-bold">Answer: {exam.sampleA}</div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs transition cursor-pointer">
                    Take {exam.code} Assessment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: FESL Licensing Tiers */}
      {activeTab === 'licensing' && (
        <div className="grid md:grid-cols-4 gap-4">
          {FESL_LICENSE_TIERS.map(tier => (
            <div 
              key={tier.id} 
              className={`rounded-xl p-5 border flex flex-col justify-between ${
                tier.popular ? 'bg-cyan-950/20 border-cyan-500' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div>
                {tier.popular && (
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-500 text-slate-950 mb-2 inline-block">
                    Recommended
                  </span>
                )}
                <h3 className="text-sm font-bold text-white">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400">{tier.cadence}</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs transition cursor-pointer">
                Select License Tier
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab 6: Marketing Launch Package */}
      {activeTab === 'marketing' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Global Launch Theme</span>
              <h2 className="text-xl font-bold text-white mt-1">{MARKETING_CAMPAIGN.theme}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-cyan-400 mb-3">Launch Video Script (30-Second Commercial)</h3>
                <div className="space-y-2.5">
                  {MARKETING_CAMPAIGN.videoScript.map((sc, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white">{sc.title}</span>
                        <span className="text-[10px] font-mono text-amber-400">{sc.sec}</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{sc.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-amber-400 mb-2">Social Campaign Copy</h3>
                  <div className="space-y-2">
                    {MARKETING_CAMPAIGN.socialPosts.map((sp, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <span className="font-bold text-cyan-400">[{sp.platform}] {sp.headline}</span>
                        <p className="text-slate-400 mt-1 leading-relaxed">{sp.copy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-emerald-400 mb-2">Enterprise Email Sequences</h3>
                  <div className="space-y-2">
                    {MARKETING_CAMPAIGN.emailSeries.map((em, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                        <div className="flex justify-between font-bold text-white">
                          <span>Subject: {em.subject}</span>
                          <span className="text-[10px] text-slate-500">Target: {em.target}</span>
                        </div>
                        <p className="text-slate-400 mt-1 leading-relaxed">{em.snippet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
