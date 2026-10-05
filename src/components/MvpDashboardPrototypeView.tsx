import React, { useState, useEffect } from 'react';
import {
  ActivityIcon,
  PercentIcon,
  FlameIcon,
  ShieldCheckIcon,
  FileTextIcon,
  PrinterIcon,
  CopyIcon,
  CheckIcon,
  SendIcon,
  SparklesIcon,
  SlidersIcon,
  AlertTriangleIcon,
  TrendingUpIcon,
  DollarSignIcon,
  BuildingIcon,
  UserIcon,
  ChevronDownIcon,
  ZapIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  TerminalIcon,
  Code2Icon,
  DatabaseIcon,
  ServerIcon,
  PlayIcon,
  RotateCcwIcon,
  DownloadIcon,
  LayersIcon
} from 'lucide-react';
import {
  calculateStabilityScore,
  calculateSlackLiquidity,
  calculateBurnoutIndex,
  getStabilityRating,
  getSlackTier,
  getBurnoutTier,
  generateEsaReportObject,
  EsaReportData
} from '../core/stabilityFormulas';

interface MvpDashboardPrototypeProps {
  onNavigateToAiCloser?: () => void;
}

// Full Python MVP Source Code Files & Schema Definitions
const PYTHON_MVP_FILES = [
  {
    id: 'app_py',
    name: 'app.py',
    path: 'flowforge-mvp/app.py',
    language: 'python',
    description: 'Flask REST API entrypoint with /teams endpoints and telemetry ingestion',
    code: `"""
FlowForge MVP V1 — Python Flask Application
Implements the core stability scoring API, Slack Liquidity formula, Burnout Index, and ESA generation.
"""
from flask import Flask, jsonify, request, render_template
from core.stability_score import calculate_stability_score, get_stability_rating
from core.slack_liquidity import calculate_slack_liquidity, get_slack_tier
from core.burnout_index import calculate_burnout, get_burnout_risk_label
from esa.esa_generator import generate_esa

app = Flask(__name__)

# In-memory data store for MVP teams
TEAMS_STORE = {
    "team-123": {
        "name": "Texas Core Platform",
        "load": 0.80,
        "slack": 0.22,
        "volatility": 0.28,
        "engineers": [
            {"id": "eng-1", "name": "Lead Architect", "active_tasks": 8, "completed_tasks": 14, "hours": 48},
            {"id": "eng-2", "name": "Senior Backend Eng", "active_tasks": 6, "completed_tasks": 12, "hours": 42},
            {"id": "eng-3", "name": "DevOps Lead", "active_tasks": 9, "completed_tasks": 8, "hours": 50}
        ]
    }
}

@app.route("/")
def index():
    return render_template("dashboard.html")

@app.route("/api/stability", methods=["GET"])
def stability():
    load = float(request.args.get("load", 0.80))
    slack = float(request.args.get("slack", 0.22))
    volatility = float(request.args.get("volatility", 0.28))

    score = calculate_stability_score(load, slack, volatility)
    slack_percent = calculate_slack_liquidity(100, round(100 * (1 - slack)))  # 22%
    burnout = calculate_burnout(load, slack, volatility)

    return jsonify({
        "team_id": "team-123",
        "stability_score": score,
        "slack_liquidity": slack_percent,
        "burnout_index": burnout,
        "rating": get_stability_rating(score),
        "slack_tier": get_slack_tier(slack_percent),
        "burnout_tier": get_burnout_risk_label(burnout),
        "inputs": {"load": load, "slack": slack, "volatility": volatility}
    })

@app.route("/api/esa", methods=["GET", "POST"])
def esa():
    report = generate_esa(
        team_name="Texas Core Platform",
        stability_score=78.5,
        slack_liquidity=22.0,
        burnout_index=0.37,
        load_factor=0.80,
        volatility=0.28
    )
    return jsonify(report)

# ================= RESTFUL SPECIFICATION ENDPOINTS =================
# 1. Ingest team data: POST /teams/<team_id>/data
@app.route("/teams/<team_id>/data", methods=["POST"])
@app.route("/api/teams/<team_id>/data", methods=["POST"])
def ingest_team_data(team_id):
    payload = request.get_json(force=True) or {}
    period = payload.get("period", "2026-09-01_to_2026-09-30")
    engineers = payload.get("engineers", [])
    work_items = payload.get("work_items", {})

    total_tasks = sum(e.get("active_tasks", 0) for e in engineers)
    num_engineers = max(1, len(engineers))
    avg_tasks = total_tasks / num_engineers
    load_factor = min(1.0, avg_tasks / 10.0)

    # Calculate dynamic slack and volatility
    commits = work_items.get("commits", 100)
    volatility = min(1.0, max(0.1, (commits % 50) / 50.0))
    slack_factor = max(0.05, min(0.40, 1.0 - load_factor))

    TEAMS_STORE[team_id] = {
        "name": f"Team {team_id}",
        "period": period,
        "load": round(load_factor, 2),
        "slack": round(slack_factor, 2),
        "volatility": round(volatility, 2),
        "engineers": engineers
    }

    return jsonify({
        "status": "success",
        "message": f"Ingested data for team {team_id}",
        "team_id": team_id,
        "engineers_count": len(engineers),
        "calculated_load": round(load_factor, 2)
    }), 201

# 2. Get stability metrics: GET /teams/<team_id>/stability
@app.route("/teams/<team_id>/stability", methods=["GET"])
@app.route("/api/teams/<team_id>/stability", methods=["GET"])
def get_team_stability(team_id):
    team_data = TEAMS_STORE.get(team_id, {
        "name": f"Team {team_id}",
        "load": 0.80,
        "slack": 0.22,
        "volatility": 0.28
    })

    score = calculate_stability_score(team_data["load"], team_data["slack"], team_data["volatility"])
    slack_pct = round(team_data["slack"] * 100.0, 1)
    burnout = calculate_burnout(team_data["load"], team_data["slack"], team_data["volatility"])

    return jsonify({
        "team_id": team_id,
        "team_name": team_data.get("name", f"Team {team_id}"),
        "stability_score": score,
        "slack_liquidity": slack_pct,
        "burnout_index": burnout,
        "rating": get_stability_rating(score),
        "slack_tier": get_slack_tier(slack_pct),
        "burnout_tier": get_burnout_risk_label(burnout)
    })

# 3. Generate ESA: POST /teams/<team_id>/esa
@app.route("/teams/<team_id>/esa", methods=["POST"])
@app.route("/api/teams/<team_id>/esa", methods=["POST"])
def generate_team_esa(team_id):
    team_data = TEAMS_STORE.get(team_id, {
        "name": f"Team {team_id}",
        "load": 0.80,
        "slack": 0.22,
        "volatility": 0.28
    })

    score = calculate_stability_score(team_data["load"], team_data["slack"], team_data["volatility"])
    slack_pct = round(team_data["slack"] * 100.0, 1)
    burnout = calculate_burnout(team_data["load"], team_data["slack"], team_data["volatility"])

    report = generate_esa(
        team_name=team_data.get("name", f"Team {team_id}"),
        stability_score=score,
        slack_liquidity=slack_pct,
        burnout_index=burnout,
        load_factor=team_data["load"],
        volatility=team_data["volatility"]
    )
    report["team_id"] = team_id

    return jsonify(report)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)`
  },
  {
    id: 'schema_sql',
    name: 'schema.sql',
    path: 'flowforge-mvp/schema.sql',
    language: 'sql',
    description: 'PostgreSQL Relational Schema for teams, engineers, metrics, and esa_reports',
    code: `-- FLOWFORGE MVP V1 DATABASE SCHEMA
-- PostgreSQL schema for Engineering Stability Platform (ESP)

CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS engineers (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    active_tasks INTEGER DEFAULT 0,
    completed_tasks INTEGER DEFAULT 0,
    hours_worked NUMERIC DEFAULT 0
);

CREATE TABLE IF NOT EXISTS metrics (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    load_factor NUMERIC DEFAULT 0.5,
    slack_factor NUMERIC DEFAULT 0.2,
    volatility_factor NUMERIC DEFAULT 0.3,
    stability_score NUMERIC NOT NULL,
    slack_liquidity NUMERIC NOT NULL,
    burnout_index NUMERIC NOT NULL,
    rating VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS esa_reports (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    summary TEXT,
    recommendations TEXT,
    stability_score NUMERIC NOT NULL,
    slack_liquidity NUMERIC NOT NULL,
    burnout_index NUMERIC NOT NULL,
    rating VARCHAR(50) NOT NULL,
    plan_30_day TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Initial seed data for immediate demonstration
INSERT INTO teams (id, name) VALUES (1, 'Texas Core Platform') ON CONFLICT DO NOTHING;
INSERT INTO engineers (team_id, name, active_tasks, completed_tasks, hours_worked) VALUES
(1, 'Lead Architect', 8, 14, 48),
(1, 'Senior Backend Eng', 6, 12, 42),
(1, 'Senior Frontend Eng', 7, 10, 44),
(1, 'DevOps Lead', 9, 8, 50)
ON CONFLICT DO NOTHING;

INSERT INTO metrics (team_id, load_factor, slack_factor, volatility_factor, stability_score, slack_liquidity, burnout_index, rating) VALUES
(1, 0.80, 0.22, 0.28, 78.50, 22.00, 0.37, 'Stable')
ON CONFLICT DO NOTHING;

INSERT INTO esa_reports (team_id, summary, recommendations, stability_score, slack_liquidity, burnout_index, rating, plan_30_day) VALUES
(1, 'Engineering Stability Assessment for Texas Core Platform indicates moderate delivery drag with 22% slack liquidity.', '1. Increase slack reserves to 25% floor. 2. Shift secondary tasks off DevOps. 3. Stabilize critical path work items.', 78.50, 22.00, 0.37, 'Stable', 'Week 1: Audit WIP limits. Week 2: Implement 15% slack window. Week 3: Rebalance on-call rotation. Week 4: Recalculate ESA metrics.')
ON CONFLICT DO NOTHING;`
  },
  {
    id: 'stability_score_py',
    name: 'core/stability_score.py',
    path: 'flowforge-mvp/core/stability_score.py',
    language: 'python',
    description: 'Empirical Stability Score Algorithm (100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V)))',
    code: `"""
FlowForge Core: Stability Score Algorithm
Calculates a single score in [0, 100] reflecting overall team delivery stability.

Inputs:
  load (L in [0, 1]): How close the team is to overload (avg active tasks / target capacity)
  slack (S in [0, 1]): Buffer capacity available (available capacity / total capacity)
  volatility (V in [0, 1]): Erratic fluctuation in daily WIP / commits (std dev / baseline)

Formula:
  StabilityScore = 100 * (0.4 * (1 - L) + 0.4 * S + 0.2 * (1 - V))

Interpretation:
  0 - 49: Critical
  50 - 69: Fragile
  70 - 84: Stable
  85 - 100: Excellent
"""

def calculate_stability_score(load: float, slack: float, volatility: float) -> float:
    # Clamp inputs to [0, 1]
    l_clamped = max(0.0, min(1.0, float(load)))
    s_clamped = max(0.0, min(1.0, float(slack)))
    v_clamped = max(0.0, min(1.0, float(volatility)))

    score = 100.0 * (
        0.4 * (1.0 - l_clamped) +
        0.4 * s_clamped +
        0.2 * (1.0 - v_clamped)
    )

    return round(score, 2)


def get_stability_rating(score: float) -> str:
    if score >= 85:
        return "Excellent"
    elif score >= 70:
        return "Stable"
    elif score >= 50:
        return "Fragile"
    else:
        return "Critical"`
  },
  {
    id: 'slack_liquidity_py',
    name: 'core/slack_liquidity.py',
    path: 'flowforge-mvp/core/slack_liquidity.py',
    language: 'python',
    description: 'Slack Liquidity Formula (100 * max(0, SlackCapacity / TotalCapacity))',
    code: `"""
FlowForge Core: Slack Liquidity Formula
Calculates the usable engineering buffer percentage.

Define:
  TotalCapacity: Ideal max work capacity per sprint/cycle (story points or hours)
  UsedCapacity: Actual committed work
  SlackCapacity = TotalCapacity - UsedCapacity

Formula:
  SlackLiquidity = 100 * max(0, SlackCapacity / TotalCapacity)

Interpretation:
  < 15%: Slack Critical (High bottleneck risk, any unexpected issue causes sprint slippage)
  15% - 29.9%: Slack Tight (Operates near capacity with minimal margin for error)
  >= 30%: Slack Healthy (Resilient buffer to absorb bugs, outages, and cognitive fatigue)
"""

def calculate_slack_liquidity(total_capacity: float, committed_capacity: float) -> float:
    if total_capacity <= 0:
        return 0.0

    slack_capacity = total_capacity - committed_capacity
    ratio = max(0.0, slack_capacity / total_capacity)

    return round(ratio * 100.0, 2)


def get_slack_tier(slack_percent: float) -> str:
    if slack_percent < 15.0:
        return "Slack Critical"
    elif slack_percent < 30.0:
        return "Slack Tight"
    else:
        return "Slack Healthy"`
  },
  {
    id: 'burnout_index_py',
    name: 'core/burnout_index.py',
    path: 'flowforge-mvp/core/burnout_index.py',
    language: 'python',
    description: 'Burnout Index Formula (0.5*L + 0.3*(1-S) + 0.2*V)',
    code: `"""
FlowForge Core: Burnout Index Formula
Calculates team burnout probability score in [0.0, 1.0].

Inputs:
  load (L in [0, 1]): Team load factor
  slack (S in [0, 1]): Slack buffer factor
  volatility (V in [0, 1]): Work volatility factor

Formula:
  BurnoutIndex = 0.5 * L + 0.3 * (1 - S) + 0.2 * V

Interpretation:
  0.0 - 0.20: Low Risk (Sustainable pacing, healthy rotation)
  0.20 - 0.40: Emerging Risk (Early warning signs, spot exhaustion)
  0.40 - 0.60: Concerning (Sustained cognitive drag, quality dips)
  0.60 - 1.00: High Risk (Imminent turnover, critical path vulnerability)
"""

def calculate_burnout(load: float, slack: float, volatility: float) -> float:
    l_clamped = max(0.0, min(1.0, float(load)))
    s_clamped = max(0.0, min(1.0, float(slack)))
    v_clamped = max(0.0, min(1.0, float(volatility)))

    risk = 0.5 * l_clamped + 0.3 * (1.0 - s_clamped) + 0.2 * v_clamped

    return round(risk, 2)


def get_burnout_risk_label(burnout_val: float) -> str:
    if burnout_val < 0.20:
        return "Low Risk"
    elif burnout_val < 0.40:
        return "Emerging Risk"
    elif burnout_val < 0.60:
        return "Concerning"
    else:
        return "High Risk"`
  },
  {
    id: 'esa_generator_py',
    name: 'esa/esa_generator.py',
    path: 'flowforge-mvp/esa/esa_generator.py',
    language: 'python',
    description: 'Enterprise Stability Assessment Generator (30-day plan, findings, certification)',
    code: `"""
FlowForge ESA Generator: Enterprise Stability Assessment
Generates a structured report and 30-day stability plan based on core telemetry.
"""
from datetime import datetime
from typing import Dict, Any, List

def generate_esa(
    team_name: str,
    stability_score: float,
    slack_liquidity: float,
    burnout_index: float,
    load_factor: float = 0.80,
    volatility: float = 0.28
) -> Dict[str, Any]:
    
    # Categorizations
    if stability_score >= 85:
        rating = "Excellent"
    elif stability_score >= 70:
        rating = "Stable"
    elif stability_score >= 50:
        rating = "Fragile"
    else:
        rating = "Critical"

    # Targeted Findings
    findings: List[Dict[str, str]] = []
    if load_factor > 0.75:
        findings.append({
            "category": "Load Concentration",
            "observation": f"Team load factor is elevated at {round(load_factor * 100)}%, concentrated in senior technical roles.",
            "impact": "Single-point-of-failure risk on critical path merges and pull request reviews."
        })
    if slack_liquidity < 25.0:
        findings.append({
            "category": "Slack Liquidity Deficit",
            "observation": f"Usable buffer is currently {slack_liquidity}%, below the 25% recommended baseline.",
            "impact": "Unplanned incidents or bug regressions directly jeopardize milestone release dates."
        })
    if burnout_index >= 0.35:
        findings.append({
            "category": "Cognitive Burnout Exposure",
            "observation": f"Burnout Index is {burnout_index} ('{rating}'), reflecting sustained sprint pressure.",
            "impact": "Elevated fatigue leads to defect escape rate spikes and key engineer attrition risk."
        })
    if volatility > 0.25:
        findings.append({
            "category": "Work Volatility",
            "observation": f"Daily work item fluctuation index is {volatility}.",
            "impact": "High variance in daily queue depth causes context switching and pipeline stalls."
        })

    # Actionable 30-Day Stability Plan
    plan_30_day: List[Dict[str, str]] = [
        {
            "phase": "Week 1: Triage & WIP Cap",
            "action": "Cap active in-progress tasks at 2 per engineer and establish a strict 15% slack floor.",
            "expected_outcome": "Immediate drop in multitasking drag and 18% reduction in context switching."
        },
        {
            "phase": "Week 2: Critical Path Decoupling",
            "action": "Offload architectural review gates to secondary pod members and decouple frontend scaffolding from API mocks.",
            "expected_outcome": "Lead architect load decreases from 85%+ to sustainable 65% baseline."
        },
        {
            "phase": "Week 3: Capacity Buffering (FFX Exchange)",
            "action": "Introduce dedicated 4-hour micro-slack windows on Tuesdays and Thursdays for debt remediation.",
            "expected_outcome": "Slack Liquidity rises back toward the 25-30% healthy operational zone."
        },
        {
            "phase": "Week 4: ESA Verification & Recertification",
            "action": "Run secondary automated ESA diagnostic scan and confirm delivery variance has stabilized under +/- 5%.",
            "expected_outcome": "Team achieves certified 'Stable' or 'Excellent' rating and unlocks sprint predictability."
        }
    ]

    recommendations = [
        "Enforce a mandatory 15% Slack Liquidity floor across upcoming sprint commitments",
        "Redistribute review workload away from overloaded senior architects",
        "Adopt continuous automated ESA telemetry to prevent burnout regressions",
        "Claim Texas Tax Code § 151.351 statutory 20% sales tax exemption on stability tooling"
    ]

    return {
        "esa_id": f"ESA-{datetime.utcnow().strftime('%Y%m%d%H%M%S')}",
        "team_name": team_name,
        "generated_at": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "stability_score": stability_score,
        "slack_liquidity": slack_liquidity,
        "burnout_index": burnout_index,
        "rating": rating,
        "status": "CERTIFIED_ASSESSMENT",
        "findings": findings,
        "recommendations": recommendations,
        "plan_30_day": plan_30_day,
        "tax_note": "CFO TAX PRO LLC (dba FlowForge) • Texas Entity #08051239 • Texas Tax Code § 151.351 Active",
        "report_url": f"https://flowforge.fit/esa/report/{datetime.utcnow().strftime('%Y%m%d%H%M%S')}"
    }`
  },
  {
    id: 'requirements_txt',
    name: 'requirements.txt',
    path: 'flowforge-mvp/requirements.txt',
    language: 'plaintext',
    description: 'Python package dependencies for FlowForge MVP backend',
    code: `flask==3.0.3
gunicorn==23.0.0
psycopg2-binary==2.9.9
sqlalchemy==2.0.32
requests==2.32.3`
  }
];

export const MvpDashboardPrototypeView: React.FC<MvpDashboardPrototypeProps> = ({
  onNavigateToAiCloser
}) => {
  // Navigation Section Sub-tabs
  const [activeSection, setActiveSection] = useState<'dashboard' | 'api_console' | 'python_files' | 'outreach'>('dashboard');

  // Team & Date State
  const [selectedTeam, setSelectedTeam] = useState<string>('Texas Core Platform');
  const [dateRange, setDateRange] = useState<string>('Last 30 Days (Sep 1 – Sep 30, 2026)');

  // Core Mathematical Factor Inputs
  const [loadFactor, setLoadFactor] = useState<number>(0.80);        // L in [0, 1]
  const [slackFactor, setSlackFactor] = useState<number>(0.22);      // S in [0, 1]
  const [volatilityFactor, setVolatilityFactor] = useState<number>(0.28); // V in [0, 1]

  // Calculated Metrics
  const stabilityScore = calculateStabilityScore(loadFactor, slackFactor, volatilityFactor);
  const slackPercent = Number((slackFactor * 100).toFixed(1));
  const burnoutIndex = calculateBurnoutIndex(loadFactor, slackFactor, volatilityFactor);
  const stabilityRating = getStabilityRating(stabilityScore);
  const slackTier = getSlackTier(slackPercent);
  const burnoutTier = getBurnoutTier(burnoutIndex);

  // ESA Report Modal State
  const [isEsaModalOpen, setIsEsaModalOpen] = useState<boolean>(false);
  const [activeEsaReport, setActiveEsaReport] = useState<EsaReportData | null>(null);
  const [copiedEsaNotification, setCopiedEsaNotification] = useState<boolean>(false);

  // Outreach Message State
  const [outreachProspectName, setOutreachProspectName] = useState<string>('Sarah Jenkins');
  const [outreachCompany, setOutreachCompany] = useState<string>('WP Engine');
  const [outreachRole, setOutreachRole] = useState<string>('VP of Engineering');
  const [outreachOffer, setOutreachOffer] = useState<'ESA_3000' | 'DASHBOARD_1500'>('ESA_3000');
  const [copiedPitch, setCopiedPitch] = useState<boolean>(false);

  // Python Code Inspector State
  const [selectedFileId, setSelectedFileId] = useState<string>('app_py');
  const [copiedCodeNotice, setCopiedCodeNotice] = useState<boolean>(false);

  // API Console State
  const [apiPreset, setApiPreset] = useState<string>('get_stability');
  const [apiEndpoint, setApiEndpoint] = useState<string>('/api/stability');
  const [apiMethod, setApiMethod] = useState<'GET' | 'POST'>('GET');
  const [apiBodyText, setApiBodyText] = useState<string>('');
  const [apiResponseStatus, setApiResponseStatus] = useState<number | null>(null);
  const [apiResponseTimeMs, setApiResponseTimeMs] = useState<number | null>(null);
  const [apiResponseBody, setApiResponseBody] = useState<any>(null);
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  const [apiSuiteRunning, setApiSuiteRunning] = useState<boolean>(false);
  const [apiSuiteResults, setApiSuiteResults] = useState<Array<{ name: string; url: string; status: number; passed: boolean }>>([]);

  // History Log of Assessments
  const [esaHistory, setEsaHistory] = useState<Array<{
    id: string;
    date: string;
    team: string;
    score: number;
    slack: number;
    burnout: number;
    rating: string;
  }>>([
    {
      id: 'ESA-001',
      date: '2026-09-28',
      team: 'Texas Core Platform',
      score: 78.5,
      slack: 22.0,
      burnout: 0.37,
      rating: 'Stable'
    },
    {
      id: 'ESA-002',
      date: '2026-09-25',
      team: 'Cloud Infrastructure Swarm',
      score: 64.2,
      slack: 11.5,
      burnout: 0.58,
      rating: 'Fragile'
    },
    {
      id: 'ESA-003',
      date: '2026-09-20',
      team: 'Austin FinTech API Team',
      score: 88.0,
      slack: 34.0,
      burnout: 0.19,
      rating: 'Excellent'
    }
  ]);

  // Handle ESA Generation
  const handleGenerateESA = () => {
    const report = generateEsaReportObject(selectedTeam, {
      load: loadFactor,
      slack: slackFactor,
      volatility: volatilityFactor
    });
    setActiveEsaReport(report);
    setIsEsaModalOpen(true);

    // Append to history
    setEsaHistory(prev => [
      {
        id: report.esaId,
        date: new Date().toISOString().split('T')[0],
        team: selectedTeam,
        score: report.stabilityScore,
        slack: report.slackLiquidity,
        burnout: report.burnoutIndex,
        rating: report.rating
      },
      ...prev
    ]);
  };

  const getOutreachText = () => {
    return `Subject: 30-Day Stability Assessment for Your Engineering Team

Hi ${outreachProspectName},

I built FlowForge, a Stability OS for engineering teams. It measures team load, slack, and burnout risk, then gives you a 30-day plan to stabilize delivery.

I'd like to run a one-time 30-day Stability Assessment on your ${outreachCompany} engineering team. You'll get:

• Stability Score (0–100)
• Slack Liquidity (how much buffer you really have)
• Burnout Index (who's at risk and why)
• A concrete 30-day stability plan

${outreachOffer === 'ESA_3000'
  ? `I'm offering this initial 48-Hour ESA Audit at $3,000 under Texas Tax Code § 151.351 (20% statutory exemption applies, saving you $600 in tax).`
  : `We offer this via our live continuous FlowForge Stability Core dashboard at $1,500/month recurring.`}

Would you be open to a quick 15-minute call to see if this fits your current delivery and burnout challenges?

— Chuck
Founder, FlowForge (flowforge.fit)
CFO TAX PRO LLC • Sachse/Austin, TX`;
  };

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(getOutreachText());
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const handleCopyHtmlReport = () => {
    if (!activeEsaReport) return;
    const html = `<!DOCTYPE html>
<html>
<head><title>ESA Report - ${activeEsaReport.teamName}</title></head>
<body style="font-family: sans-serif; padding: 30px; background: #0b0f19; color: #fff;">
  <h1>Enterprise Stability Assessment (ESA)</h1>
  <h2>Team: ${activeEsaReport.teamName} (${activeEsaReport.esaId})</h2>
  <p>Stability Score: <strong>${activeEsaReport.stabilityScore}/100</strong> (${activeEsaReport.rating})</p>
  <p>Slack Liquidity: <strong>${activeEsaReport.slackLiquidity}%</strong> (${activeEsaReport.slackTier})</p>
  <p>Burnout Index: <strong>${activeEsaReport.burnoutIndex}</strong> (${activeEsaReport.burnoutTier})</p>
  <h3>Key Findings</h3>
  <ul>
    ${activeEsaReport.findings.map(f => `<li><strong>${f.category}:</strong> ${f.observation}</li>`).join('')}
  </ul>
  <h3>30-Day Stability Plan</h3>
  <ul>
    ${activeEsaReport.plan30Day.map(p => `<li><strong>${p.week}:</strong> ${p.action}</li>`).join('')}
  </ul>
  <p>Issued by CFO TAX PRO LLC (dba FlowForge) • Texas Entity #08051239 • Texas Tax Code § 151.351 Active</p>
</body>
</html>`;
    navigator.clipboard.writeText(html);
    setCopiedEsaNotification(true);
    setTimeout(() => setCopiedEsaNotification(false), 2500);
  };

  // API Console Preset Handler
  const handleSelectApiPreset = (preset: string) => {
    setApiPreset(preset);
    if (preset === 'get_stability') {
      setApiMethod('GET');
      setApiEndpoint(`/api/stability?load=${loadFactor}&slack=${slackFactor}&volatility=${volatilityFactor}`);
      setApiBodyText('');
    } else if (preset === 'get_team_stability') {
      setApiMethod('GET');
      setApiEndpoint('/api/teams/team-123/stability');
      setApiBodyText('');
    } else if (preset === 'post_team_data') {
      setApiMethod('POST');
      setApiEndpoint('/api/teams/team-123/data');
      setApiBodyText(JSON.stringify({
        period: "2026-09-01_to_2026-09-30",
        engineers: [
          { id: "eng-1", active_tasks: 12, completed_tasks: 8, hours: 45 },
          { id: "eng-2", active_tasks: 6, completed_tasks: 11, hours: 40 }
        ],
        work_items: {
          commits: 320,
          issues_closed: 140,
          issues_opened: 120
        }
      }, null, 2));
    } else if (preset === 'post_team_esa') {
      setApiMethod('POST');
      setApiEndpoint('/api/teams/team-123/esa');
      setApiBodyText(JSON.stringify({
        team_name: selectedTeam
      }, null, 2));
    }
  };

  // Execute Live API Call
  const handleExecuteApiCall = async () => {
    setApiLoading(true);
    const start = performance.now();
    try {
      const options: RequestInit = {
        method: apiMethod,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      if (apiMethod === 'POST' && apiBodyText) {
        options.body = apiBodyText;
      }
      const res = await fetch(apiEndpoint, options);
      const elapsed = Math.round(performance.now() - start);
      setApiResponseStatus(res.status);
      setApiResponseTimeMs(elapsed);
      const data = await res.json();
      setApiResponseBody(data);
    } catch (err: any) {
      const elapsed = Math.round(performance.now() - start);
      setApiResponseStatus(500);
      setApiResponseTimeMs(elapsed);
      setApiResponseBody({ error: err.message || 'API request failed' });
    } finally {
      setApiLoading(false);
    }
  };

  // Run Automated 4-Endpoint Verification Test Suite
  const handleRunApiSuite = async () => {
    setApiSuiteRunning(true);
    const endpoints = [
      { name: '1. GET /api/stability', method: 'GET', url: '/api/stability' },
      { name: '2. GET /api/teams/team-123/stability', method: 'GET', url: '/api/teams/team-123/stability' },
      {
        name: '3. POST /api/teams/team-123/data',
        method: 'POST',
        url: '/api/teams/team-123/data',
        body: JSON.stringify({
          period: '2026-09-01_to_2026-09-30',
          engineers: [{ id: 'eng-1', active_tasks: 8, completed_tasks: 12, hours: 40 }],
          work_items: { commits: 250, issues_closed: 80, issues_opened: 70 }
        })
      },
      {
        name: '4. POST /api/teams/team-123/esa',
        method: 'POST',
        url: '/api/teams/team-123/esa',
        body: JSON.stringify({ team_name: 'Texas Core Platform' })
      }
    ];

    const results: Array<{ name: string; url: string; status: number; passed: boolean }> = [];
    for (const ep of endpoints) {
      try {
        const res = await fetch(ep.url, {
          method: ep.method,
          headers: { 'Content-Type': 'application/json' },
          body: ep.body
        });
        results.push({
          name: ep.name,
          url: ep.url,
          status: res.status,
          passed: res.status >= 200 && res.status < 300
        });
      } catch (err) {
        results.push({
          name: ep.name,
          url: ep.url,
          status: 500,
          passed: false
        });
      }
    }
    setApiSuiteResults(results);
    setApiSuiteRunning(false);
  };

  const selectedFile = PYTHON_MVP_FILES.find(f => f.id === selectedFileId) || PYTHON_MVP_FILES[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopiedCodeNotice(true);
    setTimeout(() => setCopiedCodeNotice(false), 2500);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([selectedFile.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = selectedFile.name.split('/').pop() || selectedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto text-slate-100">
      {/* Top Banner: Verification & Revenue Commitment */}
      <div className="bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-cyan-800/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FLOWFORGE 0.1 MVP SPECIFICATION — SHORTEST PATH TO REVENUE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Engineering Stability MVP Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            1 Dashboard • 1 Report • 1 Customer • 1 Invoice. Built strictly from empirical queueing mathematics:
            <code className="text-cyan-300 ml-1 font-mono text-[11px]">StabilityScore = 100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V))</code>.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {onNavigateToAiCloser && (
            <button
              onClick={onNavigateToAiCloser}
              className="px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/50 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-sm"
            >
              <span>Autonomous AI Closer →</span>
            </button>
          )}
          <button
            onClick={handleGenerateESA}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs transition shadow-lg shadow-cyan-500/20 flex items-center space-x-2 cursor-pointer"
          >
            <ZapIcon className="w-4 h-4 fill-slate-950" />
            <span>Generate Certified ESA ($3,000)</span>
          </button>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center space-x-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-xs overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveSection('dashboard')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'dashboard'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <ActivityIcon className="w-4 h-4" />
          <span>📊 1-Page Dashboard (Prototype)</span>
        </button>

        <button
          onClick={() => {
            setActiveSection('api_console');
            if (!apiEndpoint) handleSelectApiPreset('get_stability');
          }}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'api_console'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <TerminalIcon className="w-4 h-4" />
          <span>⚡ Live MVP API Console</span>
        </button>

        <button
          onClick={() => setActiveSection('python_files')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'python_files'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Code2Icon className="w-4 h-4" />
          <span>🐍 Python MVP Source & Schema</span>
        </button>

        <button
          onClick={() => setActiveSection('outreach')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'outreach'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <DollarSignIcon className="w-4 h-4" />
          <span>✉️ First Customer Outreach ($3,000)</span>
        </button>
      </div>

      {/* ================= SECTION 1: 1-PAGE DASHBOARD ================= */}
      {activeSection === 'dashboard' && (
        <div className="space-y-8">
          {/* Top Bar: Team Selector, Period, and Baseline Presets */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Active Engineering Team
                </label>
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="bg-slate-950 text-white border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold focus:border-cyan-500 focus:outline-none"
                >
                  <option value="Texas Core Platform">Texas Core Platform (Anchor Pod)</option>
                  <option value="WP Engine Core Architecture">WP Engine Core Architecture</option>
                  <option value="BigCommerce Checkout Reliability">BigCommerce Checkout Reliability</option>
                  <option value="SailPoint IAM Governance Engine">SailPoint IAM Governance Engine</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Assessment Window
                </label>
                <div className="bg-slate-950 text-slate-300 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono">
                  {dateRange}
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">Presets:</span>
              <button
                onClick={() => {
                  setLoadFactor(0.80);
                  setSlackFactor(0.22);
                  setVolatilityFactor(0.28);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-medium transition cursor-pointer"
                title="Copilot Baseline: L=0.80, S=0.22, V=0.28"
              >
                Baseline Pod
              </button>
              <button
                onClick={() => {
                  setLoadFactor(0.95);
                  setSlackFactor(0.08);
                  setVolatilityFactor(0.70);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 text-xs font-medium transition cursor-pointer"
                title="Overloaded Team: L=0.95, S=0.08, V=0.70"
              >
                🚨 Overload Crisis
              </button>
              <button
                onClick={() => {
                  setLoadFactor(0.50);
                  setSlackFactor(0.32);
                  setVolatilityFactor(0.18);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/40 text-xs font-medium transition cursor-pointer"
                title="Stable Pod: L=0.50, S=0.32, V=0.18"
              >
                ✅ Stable Pod
              </button>
              <button
                onClick={() => {
                  setLoadFactor(0.35);
                  setSlackFactor(0.42);
                  setVolatilityFactor(0.10);
                }}
                className="px-2.5 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/40 text-xs font-medium transition cursor-pointer"
                title="Elite Pacing: L=0.35, S=0.42, V=0.10"
              >
                ⭐ Elite Buffer
              </button>
            </div>
          </div>

          {/* ================= MAIN GRID: THE 3 CORE METRIC CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Stability Score */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <ActivityIcon className="w-4 h-4 text-cyan-400" />
                  <span>STABILITY SCORE</span>
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    stabilityRating === 'Excellent'
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                      : stabilityRating === 'Stable'
                      ? 'bg-cyan-950/70 border-cyan-500/50 text-cyan-300'
                      : stabilityRating === 'Fragile'
                      ? 'bg-amber-950/70 border-amber-500/50 text-amber-300'
                      : 'bg-rose-950/70 border-rose-500/50 text-rose-300'
                  }`}
                >
                  {stabilityRating}
                </span>
              </div>

              <div>
                <div className="text-6xl font-black text-cyan-300 tracking-tight">
                  {stabilityScore}
                  <span className="text-xl font-normal text-slate-500 ml-1">/ 100</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Target: <strong className="text-slate-200">≥ 70.0</strong> for delivery guarantee
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className={`h-full transition-all duration-500 ${
                      stabilityScore >= 70 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.min(100, stabilityScore)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0 Critical</span>
                  <span>50 Fragile</span>
                  <span>70 Stable</span>
                  <span>100 Excellent</span>
                </div>
              </div>
            </div>

            {/* Card 2: Slack Liquidity */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <PercentIcon className="w-4 h-4 text-amber-400" />
                  <span>SLACK LIQUIDITY</span>
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    slackTier === 'Slack Healthy'
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                      : slackTier === 'Slack Tight'
                      ? 'bg-amber-950/70 border-amber-500/50 text-amber-300'
                      : 'bg-rose-950/70 border-rose-500/50 text-rose-300 animate-pulse'
                  }`}
                >
                  {slackTier}
                </span>
              </div>

              <div>
                <div className="text-6xl font-black text-amber-300 tracking-tight">
                  {slackPercent}
                  <span className="text-xl font-normal text-slate-500 ml-1">%</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Minimum healthy floor: <strong className="text-amber-300">15.0%</strong>
                </div>
              </div>

              {/* Progress Bar with 15% marker */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800/80 relative">
                  <div
                    className={`h-full transition-all duration-500 ${
                      slackPercent >= 15 ? 'bg-gradient-to-r from-amber-400 to-emerald-400' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.min(100, (slackPercent / 40) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span className="text-rose-400">&lt;15% Critical</span>
                  <span className="text-amber-300 font-bold">15-30% Tight</span>
                  <span className="text-emerald-400">≥30% Healthy</span>
                </div>
              </div>
            </div>

            {/* Card 3: Burnout Index */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <FlameIcon className="w-4 h-4 text-rose-400" />
                  <span>BURNOUT RISK</span>
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    burnoutTier === 'Low Risk'
                      ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                      : burnoutTier === 'Emerging Risk'
                      ? 'bg-amber-950/70 border-amber-500/50 text-amber-300'
                      : 'bg-rose-950/70 border-rose-500/50 text-rose-300 font-bold'
                  }`}
                >
                  {burnoutTier}
                </span>
              </div>

              <div>
                <div className="text-6xl font-black text-rose-400 tracking-tight">
                  {burnoutIndex}
                  <span className="text-xl font-normal text-slate-500 ml-1">/ 1.00</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Threshold: <strong className="text-rose-300">&gt; 0.40</strong> triggers burnout alert
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className={`h-full transition-all duration-500 ${
                      burnoutIndex > 0.40 ? 'bg-gradient-to-r from-amber-400 to-rose-500' : 'bg-emerald-400'
                    }`}
                    style={{ width: `${Math.min(100, burnoutIndex * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span className="text-emerald-400">0.0 Low</span>
                  <span className="text-amber-300">0.2 Emerging</span>
                  <span className="text-rose-400 font-bold">0.4+ Concerning</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= INTERACTIVE SIMULATION & MATHEMATICAL SLIDERS ================= */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <SlidersIcon className="w-4 h-4" />
                  <span>MATHEMATICAL PARAMETER CONTROLS</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Live Parameter Tuning (0.0 – 1.0 Normalized Inputs)
                </h2>
                <p className="text-xs text-slate-400">
                  Adjust the core variables to test how real load, slack buffers, and queue volatility shift team stability in real time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Slider 1: Load L */}
              <div className="space-y-2 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-slate-300">Load Factor (L):</label>
                  <span className="font-mono font-bold text-cyan-400 text-sm">{loadFactor.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.02"
                  value={loadFactor}
                  onChange={(e) => setLoadFactor(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <p className="text-[11px] text-slate-400">
                  Ratio of active in-flight tickets per engineer vs target safe threshold.
                </p>
              </div>

              {/* Slider 2: Slack S */}
              <div className="space-y-2 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-slate-300">Slack Factor (S):</label>
                  <span className="font-mono font-bold text-amber-400 text-sm">{slackFactor.toFixed(2)} ({slackPercent}%)</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.02"
                  value={slackFactor}
                  onChange={(e) => setSlackFactor(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <p className="text-[11px] text-slate-400">
                  Uncommitted buffer available to absorb critical defects and context switching.
                </p>
              </div>

              {/* Slider 3: Volatility V */}
              <div className="space-y-2 bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-semibold text-slate-300">Volatility Factor (V):</label>
                  <span className="font-mono font-bold text-rose-400 text-sm">{volatilityFactor.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.02"
                  value={volatilityFactor}
                  onChange={(e) => setVolatilityFactor(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
                />
                <p className="text-[11px] text-slate-400">
                  Standard deviation of daily WIP items vs historical variance baseline.
                </p>
              </div>
            </div>
          </div>

          {/* ================= ESA ASSESSMENT HISTORY TABLE ================= */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-white">ESA Historical Ledger</h3>
                <p className="text-xs text-slate-400">Past generated assessments and certification logs</p>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                {esaHistory.length} Records
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                    <th className="py-2.5 px-3">Assessment ID</th>
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Team</th>
                    <th className="py-2.5 px-3">Stability Score</th>
                    <th className="py-2.5 px-3">Slack Liquidity</th>
                    <th className="py-2.5 px-3">Burnout Risk</th>
                    <th className="py-2.5 px-3">Rating</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {esaHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-850/50 transition">
                      <td className="py-3 px-3 font-mono font-bold text-cyan-400">{item.id}</td>
                      <td className="py-3 px-3 text-slate-400">{item.date}</td>
                      <td className="py-3 px-3 font-medium text-slate-200">{item.team}</td>
                      <td className="py-3 px-3 font-bold text-cyan-300">{item.score}/100</td>
                      <td className="py-3 px-3 font-semibold text-amber-300">{item.slack}%</td>
                      <td className="py-3 px-3 text-rose-300">{item.burnout}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                          {item.rating}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={handleGenerateESA}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white text-[11px] font-semibold transition cursor-pointer"
                        >
                          View Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 2: LIVE MVP API CONSOLE ================= */}
      {activeSection === 'api_console' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <TerminalIcon className="w-4 h-4" />
                  <span>MVP SPECIFICATION API EXECUTOR</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Interactive REST Endpoints & Live Verification
                </h2>
                <p className="text-xs text-slate-400">
                  Execute live HTTP queries against the FlowForge Node.js / Express and Python Flask API contracts.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleRunApiSuite}
                  disabled={apiSuiteRunning}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs flex items-center space-x-2 transition cursor-pointer shadow"
                >
                  <PlayIcon className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{apiSuiteRunning ? 'Running Tests...' : 'Run All 4 Tests'}</span>
                </button>
              </div>
            </div>

            {/* Test Suite Results Bar */}
            {apiSuiteResults.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white flex items-center space-x-2">
                  <CheckCircle2Icon className="w-4 h-4 text-emerald-400" />
                  <span>Automated API Contract Verification Results</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                  {apiSuiteResults.map((r, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-xl border flex items-center justify-between font-mono text-[11px] ${
                        r.passed ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                      }`}
                    >
                      <span className="truncate">{r.name}</span>
                      <span className="font-bold">{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Presets Selector */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Select API Endpoint Template
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { id: 'get_stability', label: '1. GET /api/stability', desc: 'Direct factor calculation' },
                  { id: 'get_team_stability', label: '2. GET /teams/:id/stability', desc: 'Fetch team stability metrics' },
                  { id: 'post_team_data', label: '3. POST /teams/:id/data', desc: 'Ingest team engineer & commit data' },
                  { id: 'post_team_esa', label: '4. POST /teams/:id/esa', desc: 'Generate certified ESA report' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectApiPreset(p.id)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      apiPreset === p.id
                        ? 'bg-cyan-950/60 border-cyan-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold text-cyan-300">{p.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{p.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Request Bar */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <span className={`px-3 py-2 rounded-xl text-xs font-mono font-black shrink-0 ${
                  apiMethod === 'GET' ? 'bg-cyan-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
                }`}>
                  {apiMethod}
                </span>
                <input
                  type="text"
                  value={apiEndpoint}
                  onChange={(e) => setApiEndpoint(e.target.value)}
                  className="flex-1 bg-slate-950 text-white border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={handleExecuteApiCall}
                  disabled={apiLoading}
                  className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
                >
                  <SendIcon className="w-3.5 h-3.5" />
                  <span>{apiLoading ? 'Sending...' : 'Send Request'}</span>
                </button>
              </div>

              {/* POST Body Editor */}
              {apiMethod === 'POST' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    JSON Request Body:
                  </label>
                  <textarea
                    rows={6}
                    value={apiBodyText}
                    onChange={(e) => setApiBodyText(e.target.value)}
                    className="w-full bg-slate-950 text-emerald-300 border border-slate-800 rounded-xl p-3 font-mono text-xs focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Live Response Panel */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-400 uppercase tracking-wider">Live Response Payload</span>
                {apiResponseStatus && (
                  <div className="flex items-center space-x-3 font-mono text-[11px]">
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      apiResponseStatus >= 200 && apiResponseStatus < 300
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-rose-950 text-rose-400 border border-rose-800'
                    }`}>
                      HTTP {apiResponseStatus}
                    </span>
                    {apiResponseTimeMs !== null && (
                      <span className="text-slate-400">{apiResponseTimeMs} ms</span>
                    )}
                  </div>
                )}
              </div>

              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto max-h-96 leading-relaxed">
                {apiResponseBody
                  ? JSON.stringify(apiResponseBody, null, 2)
                  : '// Click "Send Request" to trigger this endpoint against the live server'}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 3: PYTHON MVP FILES & DATABASE SCHEMA ================= */}
      {activeSection === 'python_files' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Code2Icon className="w-4 h-4" />
                  <span>PYTHON MVP & POSTGRESQL CODE REPOSITORY</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Inspect & Export Standalone Production Assets
                </h2>
                <p className="text-xs text-slate-400">
                  Ready-to-deploy Python Flask API, mathematical formulas, and PostgreSQL database schema.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyCode}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedCodeNotice ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedCodeNotice ? 'Copied File!' : 'Copy File'}</span>
                </button>
                <button
                  onClick={handleDownloadFile}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow"
                >
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </button>
              </div>
            </div>

            {/* File Switcher Tabs */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 border-b border-slate-800 text-xs font-mono">
              {PYTHON_MVP_FILES.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFileId(f.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer flex items-center space-x-1.5 ${
                    selectedFileId === f.id
                      ? 'bg-slate-800 text-cyan-300 font-bold border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {f.name.endsWith('.sql') ? <DatabaseIcon className="w-3.5 h-3.5 text-amber-400" /> : <Code2Icon className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{f.name}</span>
                </button>
              ))}
            </div>

            {/* File Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-1 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 font-mono">
              <div>
                File: <strong className="text-white">{selectedFile.path}</strong>
              </div>
              <div className="text-[11px] text-slate-500">
                {selectedFile.description}
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <pre className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto max-h-[500px] leading-relaxed select-all">
                {selectedFile.code}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 4: OUTREACH PLAYBOOK ================= */}
      {activeSection === 'outreach' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <DollarSignIcon className="w-4 h-4" />
                  <span>PHASE 7: FIRST CUSTOMER REVENUE SCRIPT</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Target VP Engineering / CTO Outreach Generator
                </h2>
                <p className="text-xs text-slate-400">
                  Short, high-converting outreach message offering the 30-Day Stability Assessment with statutory Texas tax savings.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyPitch}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer shadow"
                >
                  {copiedPitch ? <CheckIcon className="w-3.5 h-3.5" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedPitch ? 'Copied to Clipboard!' : 'Copy Cold Pitch'}</span>
                </button>
                <a
                  href={`mailto:?subject=${encodeURIComponent('30-Day Stability Assessment for Your Engineering Team')}&body=${encodeURIComponent(getOutreachText())}`}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center space-x-1.5"
                >
                  <SendIcon className="w-3.5 h-3.5" />
                  <span>Open in Email</span>
                </a>
              </div>
            </div>

            {/* Customization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Prospect Name:</label>
                <input
                  type="text"
                  value={outreachProspectName}
                  onChange={(e) => setOutreachProspectName(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Company Name:</label>
                <input
                  type="text"
                  value={outreachCompany}
                  onChange={(e) => setOutreachCompany(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Target Title:</label>
                <input
                  type="text"
                  value={outreachRole}
                  onChange={(e) => setOutreachRole(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Offer Type:</label>
                <select
                  value={outreachOffer}
                  onChange={(e) => setOutreachOffer(e.target.value as any)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="ESA_3000">Offer #1: $3,000 One-Time ESA Audit</option>
                  <option value="DASHBOARD_1500">Offer #2: $1,500/mo Stability Core</option>
                </select>
              </div>
            </div>

            {/* Pitch Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
              {getOutreachText()}
            </div>
          </div>
        </div>
      )}

      {/* ================= ESA REPORT MODAL ================= */}
      {isEsaModalOpen && activeEsaReport && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-cyan-500/50 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    FLOWFORGE STABILITY ASSESSMENT — V1 CERTIFIED
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1">
                  Enterprise Stability Assessment (ESA)
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Organization: <strong className="text-white">{activeEsaReport.teamName}</strong> • {activeEsaReport.esaId} • {activeEsaReport.generatedAt}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyHtmlReport}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                >
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span>{copiedEsaNotification ? 'Copied!' : 'Copy HTML'}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={() => setIsEsaModalOpen(false)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Stability Score</span>
                <span className="text-3xl font-black text-cyan-300">{activeEsaReport.stabilityScore}</span>
                <span className="text-[10px] text-slate-500 block">Rating: {activeEsaReport.rating}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Slack Liquidity</span>
                <span className="text-3xl font-black text-amber-300">{activeEsaReport.slackLiquidity}%</span>
                <span className="text-[10px] text-amber-400/80 block">{activeEsaReport.slackTier}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-rose-500/30">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Burnout Risk</span>
                <span className="text-3xl font-black text-rose-400">{activeEsaReport.burnoutIndex}</span>
                <span className="text-[10px] text-rose-400/80 block">{activeEsaReport.burnoutTier}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30">
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Delivery Status</span>
                <span className="text-lg font-black text-emerald-400 mt-2 block">{activeEsaReport.rating.toUpperCase()}</span>
                <span className="text-[10px] text-emerald-400/80 block">Verified Certified</span>
              </div>
            </div>

            {/* Detailed Telemetry Findings */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                <AlertTriangleIcon className="w-4 h-4 text-amber-400" />
                <span>Empirical Telemetry Findings</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeEsaReport.findings.map((f, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <strong className="text-cyan-400 block">{f.category}</strong>
                    <p className="text-slate-300">{f.observation}</p>
                    <p className="text-rose-400 text-[11px] italic">Impact: {f.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 30-Day Stability Plan */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                <TrendingUpIcon className="w-4 h-4 text-emerald-400" />
                <span>Structured 30-Day Engineering Stability Plan</span>
              </h3>
              <div className="space-y-2 text-xs">
                {activeEsaReport.plan30Day.map((p, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong className="text-emerald-400 font-mono block">{p.week}</strong>
                      <span className="text-slate-300">{p.action}</span>
                    </div>
                    <span className="text-[11px] text-cyan-300 font-mono bg-cyan-950/40 px-2 py-1 rounded border border-cyan-800/40 shrink-0">
                      Outcome: {p.expectedOutcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Texas Tax Code Invoicing Details */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>Texas Tax Code § 151.351 (80% SaaS Exemption Settled)</span>
                </div>
                <span className="font-mono text-white font-bold text-sm">$3,198.00 Settled</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-300 font-mono pt-1">
                <div>Gross Price: $3,000.00</div>
                <div className="text-emerald-400 font-bold">Exempt (20%): -$600.00</div>
                <div>Taxable (80%): $2,400.00</div>
                <div>Texas Tax (8.25%): $198.00</div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span className="font-mono text-[10px]">Cryptographic Proof: {activeEsaReport.certificationHash.slice(0, 24)}...</span>
              <button
                onClick={() => setIsEsaModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold cursor-pointer"
              >
                Close Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
