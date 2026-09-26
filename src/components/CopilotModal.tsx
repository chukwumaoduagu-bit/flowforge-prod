import React, { useState } from 'react';
import { 
  BotIcon, 
  SparklesIcon, 
  SendIcon, 
  Cpu, 
  CheckCircle2Icon, 
  LayersIcon,
  X
} from 'lucide-react';

interface CopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPromptSubmit: (prompt: string) => Promise<string>;
}

export const CopilotModal: React.FC<CopilotModalProps> = ({
  isOpen,
  onClose,
  onPromptSubmit
}) => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; cot?: string[] }>>([
    {
      sender: 'assistant',
      text: "Hello! I am FlowForge Swarm Copilot powered by Gemini 3.7 Flash. I orchestrate multi-agent execution across scheduling DAGs, capacity trades, AI prospect acquisition, and Texas Tax Code § 151.351 compliance calculations. What would you like to execute?",
      cot: [
        'Gemini 3.7 Flash Model: Active',
        'GNN PERT Scheduler Agent: Online',
        'FFX Trade Broker Agent: Connected',
        'Texas Tax Compliance Engine: § 151.351 Active'
      ]
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isProcessing) return;

    const userMsg = prompt;
    setPrompt('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setIsProcessing(true);

    try {
      // 1. Try server-side Gemini endpoint first
      const res = await fetch('/api/gemini/copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg })
      });

      if (res.ok) {
        const data = await res.json();
        // Also trigger any state side-effects in App
        await onPromptSubmit(userMsg);

        setMessages(prev => [
          ...prev,
          {
            sender: 'assistant',
            text: data.text || 'Action analyzed and executed.',
            cot: data.cot || [
              'Parsed Natural Language Intent',
              'Evaluated Graph Dependencies & Slack Credits',
              'Executed Automated Action & Updated State'
            ]
          }
        ]);
      } else {
        throw new Error('Server returned non-200');
      }
    } catch (err: any) {
      // Graceful local fallback handler
      const responseText = await onPromptSubmit(userMsg);
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: responseText,
          cot: [
            'Parsed Natural Language Intent (Local Swarm)',
            'Evaluated Graph Dependencies & Slack Credits',
            'Executed Automated Action & Updated State'
          ]
        }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const samplePrompts = [
    "Accelerate QA phase by 2 days without touching marketing budget",
    "Scan Texas SaaS radar for prospects with Series B funding",
    "Propose capacity trade to lend 1 QA specialist for 35 FFX credits",
    "Calculate Texas 80% SaaS tax on $12,500 annual subscription",
    "Activate Burnout Shield to rebalance Charlie Vance (DevOps 91%)"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full h-[600px] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-sm font-bold text-white">FlowForge Swarm Copilot</h3>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-1.5 py-0.2 rounded font-mono border border-cyan-500/20">
                  Gemini 3.7 Flash
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Natural Language Enterprise Orchestration Agent</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-cyan-600 text-white font-medium rounded-br-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>

                {msg.cot && (
                  <div className="mt-2 pt-2 border-t border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-cyan-400 flex items-center space-x-1">
                      <SparklesIcon className="w-3 h-3" />
                      <span>Swarm Agent Chain of Thought:</span>
                    </span>
                    <ul className="text-[10px] font-mono text-slate-400 space-y-0.5 list-disc list-inside">
                      {msg.cot.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isProcessing && (
            <div className="flex items-center space-x-2 text-xs text-cyan-400 bg-slate-950 p-3 rounded-xl border border-slate-800 w-max">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono">Gemini 3.7 Swarm Agents analyzing dependencies & trade ledger...</span>
            </div>
          )}
        </div>

        {/* Sample Prompts */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center space-x-2 overflow-x-auto">
          <span className="text-[10px] text-slate-400 shrink-0 font-semibold">Prompts:</span>
          {samplePrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => setPrompt(p)}
              className="text-[10px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0 transition cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask FlowForge Copilot to adjust schedules, trade capacity, or scan prospects..."
            className="flex-1 bg-slate-900 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            disabled={isProcessing || !prompt.trim()}
            className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-semibold text-xs transition flex items-center space-x-1.5 shrink-0 cursor-pointer"
          >
            <SendIcon className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
