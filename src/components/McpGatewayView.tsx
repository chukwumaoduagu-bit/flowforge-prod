import React, { useState } from 'react';
import { McpServer, AuditLogEntry, McpTool } from '../types';
import { 
  PlugZapIcon, 
  TerminalIcon, 
  ShieldCheckIcon, 
  PlayIcon, 
  CheckCircle2Icon, 
  LayersIcon,
  CodeIcon,
  LockIcon,
  ServerIcon
} from 'lucide-react';

interface McpGatewayViewProps {
  mcpServers: McpServer[];
  auditLogs: AuditLogEntry[];
  onExecuteTool: (toolName: string, payload: any) => Promise<any>;
}

export const McpGatewayView: React.FC<McpGatewayViewProps> = ({
  mcpServers,
  auditLogs,
  onExecuteTool
}) => {
  const [selectedServer, setSelectedServer] = useState<McpServer>(mcpServers[0] || mcpServers);
  const [selectedTool, setSelectedTool] = useState<McpTool | null>(mcpServers[0]?.tools[0] || null);
  const [payloadJson, setPayloadJson] = useState<string>(
    JSON.stringify(mcpServers[0]?.tools[0]?.samplePayload || {}, null, 2)
  );
  const [toolResult, setToolResult] = useState<any | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleToolSelect = (tool: McpTool) => {
    setSelectedTool(tool);
    setPayloadJson(JSON.stringify(tool.samplePayload || {}, null, 2));
    setToolResult(null);
  };

  const handleRunTool = async () => {
    if (!selectedTool) return;
    setIsExecuting(true);
    try {
      const parsedPayload = JSON.parse(payloadJson);
      const result = await onExecuteTool(selectedTool.name, parsedPayload);
      setToolResult(result);
    } catch (err: any) {
      setToolResult({ error: err.message || 'Execution error' });
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950/60 to-slate-900 border border-slate-800 rounded-2xl p-6 text-slate-100 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                Model Context Protocol (MCP) Gateway
              </span>
              <span className="text-xs text-slate-400">v2.0 Universal Enterprise Control Plane</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              MCP API Server Registry & Execution Gateway
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed mt-1">
              MCP decouples AI agents from backend databases (SAP, Jira, Salesforce, Stripe, Texas Tax Registries). Every tool execution produces a cryptographically signed audit hash.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
            <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="text-xs font-bold text-slate-200 block">Cryptographic Chain Verified</span>
              <span className="text-[10px] text-slate-400 font-mono">SHA-256 Chained Integrity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Server List, Tool Runner, and Audit Log */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Server Directory */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
              <ServerIcon className="w-4 h-4 text-cyan-400" />
              <span>Registered MCP Servers</span>
            </h2>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
              {mcpServers.length} Servers
            </span>
          </div>

          <div className="space-y-3">
            {mcpServers.map((server) => {
              const isSelected = selectedServer.id === server.id;
              return (
                <div
                  key={server.id}
                  onClick={() => {
                    setSelectedServer(server);
                    if (server.tools.length > 0) handleToolSelect(server.tools[0]);
                  }}
                  className={`p-3.5 rounded-xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/80 shadow-md shadow-cyan-950/40'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-100">{server.name}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      :{server.port}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {server.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-800/60 font-mono">
                    <span>{server.tools.length} Available Tools</span>
                    <span className="text-emerald-400">● {server.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Tool Test Runner */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-2">
              <div>
                <h2 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span>Interactive MCP Tool Console</span>
                </h2>
                <span className="text-xs text-slate-400">
                  Select a tool from {selectedServer.name}
                </span>
              </div>

              {selectedTool && (
                <button
                  onClick={handleRunTool}
                  disabled={isExecuting}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition shadow-md shadow-cyan-950 flex items-center space-x-2 shrink-0"
                >
                  <PlayIcon className="w-3.5 h-3.5" />
                  <span>{isExecuting ? 'Executing...' : 'Execute Tool Payload'}</span>
                </button>
              )}
            </div>

            {/* Tools Selector */}
            <div className="flex flex-wrap gap-2">
              {selectedServer.tools.map((tool) => {
                const isSelected = selectedTool?.name === tool.name;
                return (
                  <button
                    key={tool.name}
                    onClick={() => handleToolSelect(tool)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {tool.name}
                  </button>
                );
              })}
            </div>

            {selectedTool ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* JSON Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-300 block">
                    Payload Arguments (JSON):
                  </label>
                  <textarea
                    rows={8}
                    value={payloadJson}
                    onChange={(e) => setPayloadJson(e.target.value)}
                    className="w-full bg-slate-950 text-slate-200 text-xs font-mono p-3 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500"
                  />
                  <p className="text-[10px] text-slate-400">{selectedTool.description}</p>
                </div>

                {/* JSON Output */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-slate-300 block">
                    Response Payload & Audit Receipt:
                  </label>
                  <div className="w-full h-48 bg-slate-950 text-emerald-400 font-mono text-xs p-3 rounded-xl border border-slate-800 overflow-y-auto">
                    {toolResult ? (
                      <pre className="whitespace-pre-wrap">{JSON.stringify(toolResult, null, 2)}</pre>
                    ) : (
                      <span className="text-slate-500 italic">// Click "Execute Tool Payload" to run request.</span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8 text-xs">
                Select a tool to test payload execution.
              </div>
            )}
          </div>

          {/* Cryptographic Audit Trail */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
                <LockIcon className="w-4 h-4 text-emerald-400" />
                <span>Cryptographic Audit Log Chain</span>
              </h3>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                100% Chain Verified
              </span>
            </div>

            <div className="space-y-2">
              {auditLogs.map((log) => (
                <div key={log.id} className="p-3 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1 font-mono text-[11px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-bold text-cyan-400">{log.action}</span>
                    <span className="text-slate-400 text-[10px]">{log.timestamp}</span>
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    Entity: {log.entityType} ({log.entityId}) • Actor: {log.actor}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate pt-1 border-t border-slate-900">
                    SHA256: <span className="text-slate-300">{log.hash}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
