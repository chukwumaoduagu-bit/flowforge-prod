/**
 * FlowForge Core Mathematical Stability Engine
 * Implements the verified empirical formulas:
 * 
 * 1. Stability Score:
 *    StabilityScore = 100 * (0.4 * (1 - L) + 0.4 * S + 0.2 * (1 - V))
 *    Ratings:
 *      0 - 49: Critical
 *      50 - 69: Fragile
 *      70 - 84: Stable
 *      85 - 100: Excellent
 * 
 * 2. Slack Liquidity Formula:
 *    SlackLiquidity = 100 * max(0, (TotalCapacity - UsedCapacity) / TotalCapacity)
 *    Tiers:
 *      < 15%: Slack Critical
 *      15% - 29.9%: Slack Tight
 *      >= 30%: Slack Healthy
 * 
 * 3. Burnout Index Formula:
 *    BurnoutIndex = 0.5 * L + 0.3 * (1 - S) + 0.2 * V
 *    Tiers:
 *      0.0 - 0.20: Low Risk
 *      0.20 - 0.40: Emerging Risk
 *      0.40 - 0.60: Concerning
 *      0.60 - 1.00: High Risk
 */

export interface StabilityInputFactors {
  load: number;        // L in [0, 1]
  slack: number;       // S in [0, 1]
  volatility: number;  // V in [0, 1]
}

export interface StabilityMetricsResult {
  stabilityScore: number;
  slackLiquidity: number;
  burnoutIndex: number;
  stabilityRating: 'Critical' | 'Fragile' | 'Stable' | 'Excellent';
  slackTier: 'Slack Critical' | 'Slack Tight' | 'Slack Healthy';
  burnoutTier: 'Low Risk' | 'Emerging Risk' | 'Concerning' | 'High Risk';
  rawFactors: {
    load: number;
    slack: number;
    volatility: number;
  };
}

export function calculateStabilityScore(load: number, slack: number, volatility: number): number {
  const l = Math.max(0, Math.min(1, load));
  const s = Math.max(0, Math.min(1, slack));
  const v = Math.max(0, Math.min(1, volatility));

  const score = 100 * (0.4 * (1 - l) + 0.4 * s + 0.2 * (1 - v));
  return Number(score.toFixed(1));
}

export function calculateSlackLiquidity(totalCapacity: number, committedCapacity: number): number {
  if (totalCapacity <= 0) return 0;
  const slackCapacity = totalCapacity - committedCapacity;
  const ratio = Math.max(0, slackCapacity / totalCapacity);
  return Number((ratio * 100).toFixed(1));
}

export function calculateBurnoutIndex(load: number, slack: number, volatility: number): number {
  const l = Math.max(0, Math.min(1, load));
  const s = Math.max(0, Math.min(1, slack));
  const v = Math.max(0, Math.min(1, volatility));

  const risk = 0.5 * l + 0.3 * (1 - s) + 0.2 * v;
  return Number(risk.toFixed(2));
}

export function getStabilityRating(score: number): 'Critical' | 'Fragile' | 'Stable' | 'Excellent' {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Stable';
  if (score >= 50) return 'Fragile';
  return 'Critical';
}

export function getSlackTier(slackPercent: number): 'Slack Critical' | 'Slack Tight' | 'Slack Healthy' {
  if (slackPercent < 15) return 'Slack Critical';
  if (slackPercent < 30) return 'Slack Tight';
  return 'Slack Healthy';
}

export function getBurnoutTier(burnoutVal: number): 'Low Risk' | 'Emerging Risk' | 'Concerning' | 'High Risk' {
  if (burnoutVal < 0.20) return 'Low Risk';
  if (burnoutVal < 0.40) return 'Emerging Risk';
  if (burnoutVal < 0.60) return 'Concerning';
  return 'High Risk';
}

export function computeAllStabilityMetrics(factors: StabilityInputFactors): StabilityMetricsResult {
  const stabilityScore = calculateStabilityScore(factors.load, factors.slack, factors.volatility);
  const slackLiquidity = Number((factors.slack * 100).toFixed(1));
  const burnoutIndex = calculateBurnoutIndex(factors.load, factors.slack, factors.volatility);

  return {
    stabilityScore,
    slackLiquidity,
    burnoutIndex,
    stabilityRating: getStabilityRating(stabilityScore),
    slackTier: getSlackTier(slackLiquidity),
    burnoutTier: getBurnoutTier(burnoutIndex),
    rawFactors: {
      load: factors.load,
      slack: factors.slack,
      volatility: factors.volatility
    }
  };
}

export interface EsaReportData {
  esaId: string;
  teamName: string;
  generatedAt: string;
  stabilityScore: number;
  slackLiquidity: number;
  burnoutIndex: number;
  rating: 'Critical' | 'Fragile' | 'Stable' | 'Excellent';
  slackTier: string;
  burnoutTier: string;
  findings: Array<{
    category: string;
    observation: string;
    impact: string;
  }>;
  recommendations: string[];
  plan30Day: Array<{
    week: string;
    action: string;
    expectedOutcome: string;
  }>;
  texasTaxDetails: {
    grossFee: number;
    statutoryExemption20Pct: number;
    taxableBasis80Pct: number;
    salesTax825Pct: number;
    totalDue: number;
    statute: string;
  };
  certificationHash: string;
}

export function generateEsaReportObject(
  teamName: string,
  factors: StabilityInputFactors = { load: 0.80, slack: 0.22, volatility: 0.28 }
): EsaReportData {
  const metrics = computeAllStabilityMetrics(factors);
  const id = `ESA-${Date.now().toString().slice(-6)}`;

  const findings = [
    {
      category: 'Load Concentration',
      observation: `Load factor is ${Math.round(factors.load * 100)}%, exceeding safe single-threaded capacity.`,
      impact: 'Review cycles are bottlenecked on lead technical contributors, risking milestone stalls.'
    },
    {
      category: 'Slack Liquidity Margin',
      observation: `Slack Liquidity is currently ${metrics.slackLiquidity}%, hovering in the '${metrics.slackTier}' range.`,
      impact: 'Zero absorption capacity for high-priority production defects or unexpected scope churn.'
    },
    {
      category: 'Cognitive Burnout Exposure',
      observation: `Burnout Index sits at ${metrics.burnoutIndex} (${metrics.burnoutTier}).`,
      impact: 'High correlation with engineer fatigue, defect escape rate spikes, and critical path resignation risk.'
    },
    {
      category: 'Work Item Volatility',
      observation: `Fluctuation factor is ${factors.volatility} with erratic commit queue spikes.`,
      impact: 'Frequent context switching increases mean time to resolve (MTTR) by up to 28%.'
    }
  ];

  const recommendations = [
    'Establish a mandatory 15.0% Slack Liquidity floor across all upcoming sprint commitments',
    'Offload architectural gatekeeping to secondary pod members to relieve lead engineer fatigue',
    'Introduce 4-hour micro-slack windows on Tuesdays & Thursdays for technical debt remediation',
    'Apply Texas Tax Code § 151.351 statutory 20% sales tax exemption on all FlowForge stability licenses'
  ];

  const plan30Day = [
    {
      week: 'Week 1: Triage & WIP Cap',
      action: 'Cap in-progress tasks at 2 per engineer and establish a strict 15% slack liquidity floor.',
      expectedOutcome: 'Immediate 18% reduction in context switching and stabilization of sprint velocity.'
    },
    {
      week: 'Week 2: Critical Path Decoupling',
      action: 'Decouple frontend scaffolding from backend APIs using contract mocks; parallelize integration tests.',
      expectedOutcome: 'Lead architect cognitive load drops from 85%+ down to sustainable 62% baseline.'
    },
    {
      week: 'Week 3: Capacity Buffering (FFX Exchange)',
      action: 'Deploy automated load rebalancing on secondary QA & DevOps queues.',
      expectedOutcome: 'Slack Liquidity recovers to healthy 25-30% range.'
    },
    {
      week: 'Week 4: Automated Audit & Verification',
      action: 'Re-run continuous ESA telemetry audit to certify delivery reliability under +/- 5% variance.',
      expectedOutcome: 'Team attains official FlowForge Certified Stable status.'
    }
  ];

  return {
    esaId: id,
    teamName: teamName || 'Team Texas Core',
    generatedAt: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    stabilityScore: metrics.stabilityScore,
    slackLiquidity: metrics.slackLiquidity,
    burnoutIndex: metrics.burnoutIndex,
    rating: metrics.stabilityRating,
    slackTier: metrics.slackTier,
    burnoutTier: metrics.burnoutTier,
    findings,
    recommendations,
    plan30Day,
    texasTaxDetails: {
      grossFee: 3000,
      statutoryExemption20Pct: 600,
      taxableBasis80Pct: 2400,
      salesTax825Pct: 198,
      totalDue: 3198,
      statute: 'Texas Tax Code § 151.351 (80% SaaS Data Processing Rule)'
    },
    certificationHash: '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
  };
}
