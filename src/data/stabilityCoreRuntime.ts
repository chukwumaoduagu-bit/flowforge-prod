// FlowForge Stability Core - Mathematical Load & Telemetry Engine
// Corporate Entity: CFO TAX PRO LLC (dba FlowForge) - Dallas / Sachse, TX (SOS #08051239)

export interface Engineer {
  id: string;
  name: string;
  role: string;
  capacity: number; // Max story points or hours per cycle
  active: number;   // In-flight story points / WIP
  cognitiveLoad: number; // 0 - 100%
  burnoutRisk: number;   // 0.0 - 1.0
  status: 'normal' | 'stressed' | 'overloaded';
}

export interface WorkItem {
  id: string;
  title: string;
  status: 'todo' | 'in_progress' | 'done';
  estimate: number;
  assignedEngineerId: string;
  isCriticalPath: boolean;
  riskScore: number; // 0.0 - 1.0
  source: 'synthetic' | 'jira' | 'github';
}

export interface TeamStabilityTelemetry {
  teamId: string;
  teamName: string;
  entity: string;
  calculatedAt: string;
  loadStabilityScore: number; // 0 - 100 (LSS)
  averageLoadPercent: number;
  slackHours: number;
  slackLiquidityPercent: number; // Minimum 15% target
  burnoutRiskIndex: number; // 0.0 - 1.0
  volatilityIndex: number; // Target < +-3%
  fragilityIndex: number;  // 0.0 - 1.0
  criticalPathDeliveryDays: number;
  status: 'OPTIMAL' | 'STABLE' | 'ELEVATED_RISK' | 'CRITICAL_INTERVENTION';
  engineers: Engineer[];
  workItems: WorkItem[];
  autonomyActions: AutonomyActionProposal[];
}

export interface AutonomyActionProposal {
  id: string;
  actionType: 'load_balance' | 'slack_redistribute' | 'burnout_shield' | 'critical_path_rescue';
  title: string;
  description: string;
  targetEngineerId?: string;
  targetWorkItemId?: string;
  riskReductionPercent: number;
  applied: boolean;
  timestamp: string;
}

// Compute load ratio L = active / capacity
export function computeLoad(active: number, capacity: number): number {
  if (capacity <= 0) return 1.0;
  return Number((active / capacity).toFixed(2));
}

// Compute Slack liquidity S = max(0, capacity - active)
export function computeSlack(active: number, capacity: number): number {
  return Math.max(0, capacity - active);
}

// Multi-signal Burnout Risk = 0.60*Load + 0.30*Volatility + 0.10*(1 - SlackRatio)
export function computeBurnoutRisk(load: number, volatility: number, slackRatio: number): number {
  const risk = (0.60 * Math.min(1.0, load)) + (0.30 * volatility) + (0.10 * (1 - Math.min(1.0, slackRatio)));
  return Number(Math.min(1.0, Math.max(0.0, risk)).toFixed(2));
}

// Composite Load Stability Score (0 - 100)
export function computeStabilityScore(avgLoad: number, slackPercent: number, burnoutRisk: number): number {
  // Optimal stability: Load between 65-80%, Slack >= 15%, Burnout < 0.40
  let score = 100;
  if (avgLoad > 0.85) score -= (avgLoad - 0.85) * 150;
  if (slackPercent < 0.15) score -= (0.15 - slackPercent) * 120;
  score -= burnoutRisk * 30;
  return Math.max(10, Math.min(100, Math.round(score)));
}

// Synthetic Seed Generator (Pre-Jira/GitHub runtime loop)
export function generateSyntheticTeamData(teamId: string = 'team-texas-core'): TeamStabilityTelemetry {
  const engineers: Engineer[] = [
    { id: 'ENG-1', name: 'Charlie Vance', role: 'DevOps & Mesh', capacity: 16, active: 15, cognitiveLoad: 91, burnoutRisk: 0.88, status: 'overloaded' },
    { id: 'ENG-2', name: 'Bob Martinez', role: 'Frontend Storefront', capacity: 20, active: 18, cognitiveLoad: 88, burnoutRisk: 0.82, status: 'overloaded' },
    { id: 'ENG-3', name: 'Alice Johnson', role: 'Backend SSO & OAuth', capacity: 20, active: 16, cognitiveLoad: 82, burnoutRisk: 0.74, status: 'stressed' },
    { id: 'ENG-4', name: 'Eve Wright', role: 'Database & Neo4j', capacity: 18, active: 12, cognitiveLoad: 68, burnoutRisk: 0.52, status: 'normal' },
    { id: 'ENG-5', name: 'Frank Miller', role: 'Business Architecture', capacity: 14, active: 7, cognitiveLoad: 52, burnoutRisk: 0.35, status: 'normal' },
    { id: 'ENG-6', name: 'Diana Prince', role: 'Integration QA', capacity: 16, active: 6, cognitiveLoad: 40, burnoutRisk: 0.28, status: 'normal' },
  ];

  const workItems: WorkItem[] = [
    { id: 'WI-101', title: 'Kubernetes Ingress & Rate Limiter Mesh', status: 'in_progress', estimate: 8, assignedEngineerId: 'ENG-1', isCriticalPath: true, riskScore: 0.85, source: 'synthetic' },
    { id: 'WI-102', title: 'NextGen React Storefront Shell & Gantt DAG', status: 'in_progress', estimate: 12, assignedEngineerId: 'ENG-2', isCriticalPath: true, riskScore: 0.80, source: 'synthetic' },
    { id: 'WI-103', title: 'OIDC / SAML2 Enterprise SSO Provider', status: 'in_progress', estimate: 10, assignedEngineerId: 'ENG-3', isCriticalPath: true, riskScore: 0.65, source: 'synthetic' },
    { id: 'WI-104', title: 'Neo4j Cross-Company Capacity Graph Index', status: 'in_progress', estimate: 6, assignedEngineerId: 'ENG-4', isCriticalPath: false, riskScore: 0.40, source: 'synthetic' },
    { id: 'WI-105', title: 'Texas SaaS Sales Tax Rule (§ 151.351) Ledger', status: 'in_progress', estimate: 4, assignedEngineerId: 'ENG-5', isCriticalPath: false, riskScore: 0.30, source: 'synthetic' },
    { id: 'WI-106', title: 'E2E Cross-Org Automated Load Matrix Tests', status: 'todo', estimate: 6, assignedEngineerId: 'ENG-6', isCriticalPath: true, riskScore: 0.35, source: 'synthetic' },
  ];

  const totalCap = engineers.reduce((acc, e) => acc + e.capacity, 0);
  const totalActive = engineers.reduce((acc, e) => acc + e.active, 0);
  const avgLoad = computeLoad(totalActive, totalCap);
  const slackHours = computeSlack(totalActive, totalCap);
  const slackPercent = totalCap > 0 ? Number((slackHours / totalCap).toFixed(2)) : 0.15;
  const avgBurnout = Number((engineers.reduce((acc, e) => acc + e.burnoutRisk, 0) / engineers.length).toFixed(2));
  const lss = computeStabilityScore(avgLoad, slackPercent, avgBurnout);

  const autonomyActions: AutonomyActionProposal[] = [
    {
      id: 'ACT-01',
      actionType: 'load_balance',
      title: 'Rebalance Charlie (DevOps 91%) to Diana (QA 40%)',
      description: 'Offload non-critical telemetry script validation from Charlie Vance to Diana Prince.',
      targetEngineerId: 'ENG-1',
      targetWorkItemId: 'WI-101',
      riskReductionPercent: 18,
      applied: false,
      timestamp: new Date().toISOString()
    },
    {
      id: 'ACT-02',
      actionType: 'slack_redistribute',
      title: 'Inject 15% Slack Buffer to Frontend Storefront (T7)',
      description: 'Quarantine low-priority styling tickets to restore 15% minimum slack reserves.',
      targetEngineerId: 'ENG-2',
      targetWorkItemId: 'WI-102',
      riskReductionPercent: 15,
      applied: false,
      timestamp: new Date().toISOString()
    },
    {
      id: 'ACT-03',
      actionType: 'critical_path_rescue',
      title: 'Critical Path Parallelization (Auth SSO + UI Shell)',
      description: 'Decouple Mock SSO endpoints to let Bob (Frontend) scaffold components concurrently with Alice (Backend).',
      targetEngineerId: 'ENG-3',
      targetWorkItemId: 'WI-103',
      riskReductionPercent: 24,
      applied: false,
      timestamp: new Date().toISOString()
    }
  ];

  return {
    teamId,
    teamName: 'Texas Enterprise Core Engineering Pod',
    entity: 'CFO TAX PRO LLC (dba FlowForge)',
    calculatedAt: new Date().toISOString(),
    loadStabilityScore: lss,
    averageLoadPercent: Math.round(avgLoad * 100),
    slackHours,
    slackLiquidityPercent: Math.round(slackPercent * 100),
    burnoutRiskIndex: avgBurnout,
    volatilityIndex: 0.028, // 2.8% within < 3% target
    fragilityIndex: 0.32,
    criticalPathDeliveryDays: 12.4,
    status: lss < 70 ? 'CRITICAL_INTERVENTION' : lss < 85 ? 'ELEVATED_RISK' : 'STABLE',
    engineers,
    workItems,
    autonomyActions
  };
}
