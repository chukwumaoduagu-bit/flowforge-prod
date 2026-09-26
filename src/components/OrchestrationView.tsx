import React, { useState } from 'react';
import { 
  Task, 
  ResourcePerson, 
  WhatIfScenario 
} from '../types';
import { 
  PlayIcon, 
  CheckCircle2Icon, 
  AlertTriangleIcon, 
  UsersIcon, 
  SparklesIcon, 
  ClockIcon, 
  LayersIcon,
  FlameIcon,
  ZapIcon
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface OrchestrationViewProps {
  tasks: Task[];
  resources: ResourcePerson[];
  scenarios: WhatIfScenario[];
  onTaskProgressUpdate: (taskId: string, newProgress: number) => void;
  onExecuteScenario: (scenario: WhatIfScenario) => void;
  onOpenWhatIf: () => void;
}

export const OrchestrationView: React.FC<OrchestrationViewProps> = ({
  tasks,
  resources,
  scenarios,
  onTaskProgressUpdate,
  onExecuteScenario,
  onOpenWhatIf
}) => {
  const [filterSkill, setFilterSkill] = useState<string>('ALL');
  const [selectedTask, setSelectedTask] = useState<Task | null>(tasks[3] || null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const criticalPathTasks = tasks.filter(t => t.isCriticalPath);
  const criticalPathCompleted = criticalPathTasks.filter(t => t.completed).length;
  const criticalPathHealthPercent = criticalPathTasks.length > 0
    ? Math.round((criticalPathCompleted / criticalPathTasks.length) * 100)
    : 100;
  const velocityCompletionPercent = totalTasks > 0
    ? Math.round((completedTasks / totalTasks) * 100)
    : 100;

  const filteredTasks = filterSkill === 'ALL' 
    ? tasks 
    : tasks.filter(t => t.skill === filterSkill);

  // Prepare chart data for task efforts
  const chartData = tasks.map(t => ({
    name: t.id,
    taskName: t.name,
    effort: t.effort,
    completedEffort: Math.round(t.effort * t.progress),
    isCritical: t.isCriticalPath
  }));

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Critical Path Health</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-bold text-slate-100">{criticalPathHealthPercent}%</span>
              <span className="text-xs text-cyan-400 font-medium">{criticalPathCompleted}/{criticalPathTasks.length} tasks</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${criticalPathHealthPercent}%` }}
              />
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <ZapIcon className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Task Completion Velocity</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-bold text-slate-100">{completedTasks} / {totalTasks}</span>
              <span className="text-xs text-emerald-400 font-medium">
                {velocityCompletionPercent}% done
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Estimated completion in 14.5 days
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2Icon className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Team Cognitive Overload</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-bold text-amber-400">82% Peak</span>
              <span className="text-xs text-amber-300 font-medium">Context Switching</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              2 devs overloaded in Sprint 3
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <FlameIcon className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">AI War-Gaming Scenarios</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-bold text-indigo-300">3 Ready</span>
              <span className="text-xs text-indigo-400 font-medium">Simulated</span>
            </div>
            <button 
              onClick={onOpenWhatIf}
              className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium mt-1 inline-block"
            >
              Simulate trade-offs →
            </button>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <SparklesIcon className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Gantt / PERT & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Gantt & Task List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center space-x-2">
                  <LayersIcon className="w-5 h-5 text-cyan-400" />
                  <span>Interactive PERT / Gantt Dependency Graph</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Critical path tasks are highlighted in red/cyan accent.
                </p>
              </div>

              {/* Skill Filter Buttons */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['ALL', 'Backend', 'Frontend', 'DevOps', 'QA', 'DBE', 'BA'].map(skill => (
                  <button
                    key={skill}
                    onClick={() => setFilterSkill(skill)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                      filterSkill === skill
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Task Timeline List */}
            <div className="mt-4 space-y-3">
              {filteredTasks.map((task) => {
                const isSelected = selectedTask?.id === task.id;
                return (
                  <div
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`p-3.5 rounded-xl border transition cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-cyan-500/80 shadow-md shadow-cyan-950/50'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2.5">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {task.id}
                        </span>
                        <h3 className="text-xs font-semibold text-slate-100">
                          {task.name}
                        </h3>
                        {task.isCriticalPath && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                            Critical Path
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 text-xs">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                          {task.skill}
                        </span>
                        <span className="text-slate-400">
                          {task.effort} pts
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar & Dependencies */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">
                          Assignee: <strong className="text-slate-200">{task.assignedResource || 'Unassigned'}</strong>
                        </span>
                        <span className="font-mono text-cyan-400 font-semibold">
                          {Math.round(task.progress * 100)}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            task.completed
                              ? 'bg-emerald-500'
                              : task.isCriticalPath
                              ? 'bg-gradient-to-r from-rose-500 to-amber-500'
                              : 'bg-cyan-500'
                          }`}
                          style={{ width: `${task.progress * 100}%` }}
                        />
                      </div>

                      {task.dependencies.length > 0 && (
                        <div className="flex items-center space-x-1 text-[10px] text-slate-400 pt-0.5">
                          <span>Predecessors:</span>
                          {task.dependencies.map(dep => (
                            <span key={dep} className="px-1 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
                              {dep}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Effort Overview Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-slate-100 mb-3">
              Task Effort Distribution & Critical Path
            </h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }} 
                    labelStyle={{ color: '#f8fafc', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="effort" name="Total Effort (pts)">
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.isCritical ? '#f43f5e' : '#06b6d4'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Selected Task Inspector & Cognitive Load Matrix */}
        <div className="space-y-6">
          {/* Selected Task Controls */}
          {selectedTask ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400 font-bold">{selectedTask.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    selectedTask.completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {selectedTask.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-100 mt-1">{selectedTask.name}</h3>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Dev:</span>
                  <span className="font-semibold">{selectedTask.assignedResource}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Required Skill:</span>
                  <span className="font-mono bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">{selectedTask.skill}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Effort:</span>
                  <span>{selectedTask.effort} story points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Critical Path:</span>
                  <span className={selectedTask.isCriticalPath ? 'text-rose-400 font-semibold' : 'text-slate-400'}>
                    {selectedTask.isCriticalPath ? 'YES (High Risk)' : 'NO'}
                  </span>
                </div>
              </div>

              {/* Progress Slider */}
              <div className="pt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Adjust Progress:</span>
                  <span className="font-bold text-cyan-400">{Math.round(selectedTask.progress * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={selectedTask.progress}
                  onChange={(e) => onTaskProgressUpdate(selectedTask.id, parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Quick AI Swarm Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onTaskProgressUpdate(selectedTask.id, 1.0)}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center justify-center space-x-2"
                >
                  <CheckCircle2Icon className="w-4 h-4" />
                  <span>Mark Task Completed (100%)</span>
                </button>

                <button
                  onClick={() => {
                    const scenario = scenarios[0];
                    if (scenario) onExecuteScenario(scenario);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-indigo-900/60 hover:bg-indigo-900 text-indigo-200 border border-indigo-700/60 text-xs font-semibold transition flex items-center justify-center space-x-2"
                >
                  <SparklesIcon className="w-4 h-4 text-indigo-400" />
                  <span>Initiate AI Swarm Action</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center text-slate-400 text-xs">
              Select a task from the timeline to inspect or execute actions.
            </div>
          )}

          {/* Cognitive Load & Context-Switching Heatmap */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-100 flex items-center space-x-2">
                <FlameIcon className="w-4 h-4 text-amber-400" />
                <span>Cognitive Load Matrix</span>
              </h3>
              <span className="text-[10px] text-slate-400">Anti-Burnout Engine</span>
            </div>

            <p className="text-[11px] text-slate-400">
              FlowForge measures context switching between tasks to prevent developer burnout.
            </p>

            <div className="space-y-2.5 pt-1">
              {resources.map((res) => {
                const isOverloaded = res.cognitiveLoad > 80;
                return (
                  <div key={res.id} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-slate-200">{res.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                          {res.skill}
                        </span>
                      </div>
                      <span className={`font-mono text-xs font-bold ${
                        isOverloaded ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {res.cognitiveLoad}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          isOverloaded ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${res.cognitiveLoad}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
