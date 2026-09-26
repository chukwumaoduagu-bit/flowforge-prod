import React, { useState } from 'react';
import { 
  SparklesIcon, 
  CopyIcon, 
  CheckIcon, 
  FileTextIcon, 
  BookOpenIcon, 
  CompassIcon, 
  BriefcaseIcon, 
  CrownIcon, 
  MegaphoneIcon, 
  ShieldCheckIcon, 
  UsersIcon, 
  Building2, 
  TargetIcon, 
  TrendingUpIcon, 
  DownloadIcon, 
  LayersIcon, 
  AwardIcon, 
  CheckCircle2Icon,
  SearchIcon
} from 'lucide-react';
import { EXECUTIVE_ARTIFACTS, ExecutiveArtifact } from '../data/executiveArtifactsData';

export const ExecutiveArtifactsSuite: React.FC = () => {
  const [selectedArtifactId, setSelectedArtifactId] = useState<string>('analyst_briefing');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const selectedArtifact = EXECUTIVE_ARTIFACTS[selectedArtifactId] || EXECUTIVE_ARTIFACTS['analyst_briefing'];

  const artifactList = Object.values(EXECUTIVE_ARTIFACTS);

  const filteredArtifacts = artifactList.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopySingle = (artifact: ExecutiveArtifact) => {
    navigator.clipboard.writeText(`${artifact.title}\n${artifact.subtitle}\n\n${artifact.content}`);
    setCopiedId(artifact.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAll = () => {
    const fullCompilation = artifactList.map((a, index) => {
      return `========================================\nDOCUMENT #${index + 1}: ${a.title}\nSubtitle: ${a.subtitle}\nCategory: ${a.category}\n========================================\n\n${a.content}\n\n`;
    }).join('\n');

    navigator.clipboard.writeText(fullCompilation);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  const handleExportMarkdown = () => {
    const fullCompilation = artifactList.map((a, index) => {
      return `# Document ${index + 1}: ${a.title}\n*${a.subtitle}*\n\n> **Category:** ${a.category} | **Tag:** ${a.tag}\n\n\`\`\`\n${a.content}\n\`\`\`\n\n---\n`;
    }).join('\n\n');

    const blob = new Blob([fullCompilation], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `FlowForge_Executive_Suite_${new Date().toISOString().slice(0, 10)}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Analyst Relations': return <CompassIcon className="w-4 h-4 text-cyan-400" />;
      case 'Founder Speeches': return <MegaphoneIcon className="w-4 h-4 text-amber-400" />;
      case 'Category Research': return <BookOpenIcon className="w-4 h-4 text-purple-400" />;
      case 'Talent & Culture': return <UsersIcon className="w-4 h-4 text-pink-400" />;
      case 'Executive Sales': return <TargetIcon className="w-4 h-4 text-emerald-400" />;
      case 'Founder Codex': return <CrownIcon className="w-4 h-4 text-amber-400" />;
      case 'Brand & Identity': return <SparklesIcon className="w-4 h-4 text-rose-400" />;
      case 'Investor Relations': return <TrendingUpIcon className="w-4 h-4 text-indigo-400" />;
      case 'Operations': return <LayersIcon className="w-4 h-4 text-blue-400" />;
      case 'Enterprise Procurement': return <ShieldCheckIcon className="w-4 h-4 text-teal-400" />;
      case 'Media & PR': return <MegaphoneIcon className="w-4 h-4 text-orange-400" />;
      case 'Ecosystem & Partners': return <Building2 className="w-4 h-4 text-amber-300" />;
      case 'Enterprise Assessment': return <CheckCircle2Icon className="w-4 h-4 text-emerald-300" />;
      case 'Enterprise Playbook': return <BookOpenIcon className="w-4 h-4 text-cyan-300" />;
      case 'GTM & Launch': return <TargetIcon className="w-4 h-4 text-amber-400" />;
      case 'Engineering Economics': return <TrendingUpIcon className="w-4 h-4 text-emerald-400" />;
      case 'AI & Autonomy': return <SparklesIcon className="w-4 h-4 text-cyan-400" />;
      case 'Technical Architecture': return <LayersIcon className="w-4 h-4 text-cyan-300" />;
      case 'Marketing & Growth': return <MegaphoneIcon className="w-4 h-4 text-rose-400" />;
      case 'Founder Media': return <CrownIcon className="w-4 h-4 text-amber-400" />;
      case 'Category Standards': return <ShieldCheckIcon className="w-4 h-4 text-purple-400" />;
      case 'Category Manifesto': return <CrownIcon className="w-4 h-4 text-rose-400" />;
      case 'Education & Curriculum': return <BookOpenIcon className="w-4 h-4 text-amber-300" />;
      case 'Certification & Talent': return <AwardIcon className="w-4 h-4 text-emerald-400" />;
      case 'Founder Masterclass': return <CrownIcon className="w-4 h-4 text-amber-300" />;
      case 'Enterprise Governance': return <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />;
      default: return <FileTextIcon className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-800/40 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                Founder Institutional Publishing Suite
              </span>
              <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded-full font-mono">
                {artifactList.length} Master Documents
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
              FlowForge Executive Intelligence & Category Artifacts
            </h2>
            <p className="text-xs text-slate-300 max-w-3xl">
              Authored by Chuck Oduagu (Founder, FlowForge). Formal category papers, analyst briefings, investor memorandums, brand guidelines, RFP packs, press kits, partner decks, engineering stability audits, and enterprise operating playbooks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition shadow-lg cursor-pointer"
            >
              {copiedAll ? <CheckIcon className="w-4 h-4" /> : <CopyIcon className="w-4 h-4" />}
              <span>{copiedAll ? 'Entire Suite Copied!' : `Copy All ${artifactList.length} Documents`}</span>
            </button>

            <button
              onClick={handleExportMarkdown}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center space-x-2 border border-slate-700 transition cursor-pointer"
            >
              <DownloadIcon className="w-4 h-4 text-cyan-400" />
              <span>Export as Markdown</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Selector Sidebar & Content View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar: Artifact Selector */}
        <div className="lg:col-span-4 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search category documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-1.5 max-h-[720px] overflow-y-auto">
            <span className="text-[11px] font-mono text-slate-400 px-2 py-1 block uppercase font-semibold">
              Master Document Index ({filteredArtifacts.length})
            </span>

            {filteredArtifacts.map((artifact) => {
              const isSelected = selectedArtifactId === artifact.id;
              return (
                <button
                  key={artifact.id}
                  onClick={() => setSelectedArtifactId(artifact.id)}
                  className={`w-full text-left p-3 rounded-xl transition flex flex-col space-y-1 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/60 border border-cyan-500 text-white shadow-md'
                      : 'bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      {getCategoryIcon(artifact.category)}
                      <span className="text-[10px] font-mono font-semibold text-cyan-400 uppercase">
                        {artifact.category}
                      </span>
                    </div>
                    <span className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800 font-mono">
                      {artifact.tag}
                    </span>
                  </div>

                  <span className="font-bold text-xs text-slate-100 line-clamp-1">
                    {artifact.title}
                  </span>
                  
                  <span className="text-[11px] text-slate-400 line-clamp-1">
                    {artifact.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Document Viewer */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    {getCategoryIcon(selectedArtifact.category)}
                    <span>{selectedArtifact.category} • {selectedArtifact.tag}</span>
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-white">
                  {selectedArtifact.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  {selectedArtifact.subtitle}
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => handleCopySingle(selectedArtifact)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center space-x-1.5 transition cursor-pointer shadow"
                >
                  {copiedId === selectedArtifact.id ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Document</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Executive Summary Card */}
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start space-x-3">
              <AwardIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase block">
                  Document Context & Executive Purpose
                </span>
                <p className="text-xs text-slate-300 mt-0.5">
                  {selectedArtifact.summary}
                </p>
              </div>
            </div>

            {/* Full Document Content */}
            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 font-sans text-xs md:text-sm text-slate-200 leading-relaxed space-y-4 whitespace-pre-wrap">
              {selectedArtifact.content}
            </div>

            {/* Footer Sign-off */}
            <div className="border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
              <span>Author: Chuck Oduagu • Founder, FlowForge</span>
              <span>CFO TAX PRO LLC • Dallas / Sachse, TX • SOS #08051239</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
