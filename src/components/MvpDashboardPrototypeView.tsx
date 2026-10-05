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
  LayersIcon,
  ListChecksIcon,
  MailIcon,
  AwardIcon,
  CalendarIcon,
  ClockIcon
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

// 10 CTO Outreach Messages Catalog
export interface CtoOutreachMessageItem {
  id: number;
  title: string;
  angle: string;
  subject: string;
  body: string;
}

const CTO_10_MESSAGES: CtoOutreachMessageItem[] = [
  {
    id: 1,
    title: 'Message 1: The Stability Metric Question',
    angle: 'Direct / Founder-Led SaaS Pacing',
    subject: 'Quick question about engineering stability',
    body: `Hi {{FirstName}},

As a SaaS CTO, you're probably tracking deployment performance and delivery velocity.

What I don't often see measured is engineering stability.

I built FlowForge to quantify:
• Team Stability Score
• Burnout Risk
• Capacity Buffer
• Delivery Risk

I'm looking for a small group of SaaS teams to run a founder-led Engineering Stability Assessment.

Would you be open to a 15-minute conversation?

Chuck`
  },
  {
    id: 2,
    title: 'Message 2: Leading vs Lagging Indicators',
    angle: 'Predict Burnout Before Velocity Drops',
    subject: 'Burnout usually appears after velocity drops',
    body: `Hi {{FirstName}},

Most SaaS teams discover burnout after delivery slows.

FlowForge measures leading indicators before velocity suffers.

We're helping engineering leaders identify:
• Hidden workload concentration
• Delivery fragility
• Burnout risk

Interested in seeing a sample assessment?

Chuck`
  },
  {
    id: 3,
    title: 'Message 3: What Is Your Team Score?',
    angle: 'Score-Focused Hook',
    subject: "What is your team's Stability Score?",
    body: `Hi {{FirstName}},

We built a simple framework that measures engineering stability across SaaS teams.

The result is a Stability Score that helps leadership identify risks long before they become delivery problems.

Would it be useful to see what this could look like for your organization?

Chuck`
  },
  {
    id: 4,
    title: 'Message 4: Growth vs Stability',
    angle: 'Executive Gap in Engineering Metrics',
    subject: 'Engineering leaders need a stability metric',
    body: `Hi {{FirstName}},

SaaS companies track growth, uptime, and deployment frequency.

Few track engineering stability.

FlowForge helps leadership understand:
• Burnout exposure
• Capacity constraints
• Delivery predictability

Would you be interested in a pilot assessment?

Chuck`
  },
  {
    id: 5,
    title: 'Message 5: 30-Day Assessment Offer',
    angle: 'Concrete Deliverables & Action Plan',
    subject: '30-day Engineering Stability Assessment',
    body: `Hi {{FirstName}},

I'm offering a founder-led Engineering Stability Assessment for SaaS organizations.

Deliverables include:
• Stability Score
• Burnout Index
• Slack Liquidity Analysis
• Executive Action Plan

Would it make sense to schedule a quick discussion?

Chuck`
  },
  {
    id: 6,
    title: 'Message 6: Hidden Delivery Risk',
    angle: 'Early Warning Detection',
    subject: 'Hidden delivery risk inside engineering teams',
    body: `Hi {{FirstName}},

Many delivery issues begin months before executives see them.

FlowForge surfaces early warning signs through engineering stability metrics.

I can show you a sample report if helpful.

Chuck`
  },
  {
    id: 7,
    title: 'Message 7: Beyond Tickets & Velocity',
    angle: 'Alternative to Flawed Ticket Metrics',
    subject: 'New way to measure engineering health',
    body: `Hi {{FirstName}},

I built FlowForge because engineering leaders deserve better visibility than ticket counts and velocity charts.

We're measuring:
• Stability
• Burnout Risk
• Capacity Buffer

Interested in a quick demo?

Chuck`
  },
  {
    id: 8,
    title: 'Message 8: 3 Pilot Customer Spots',
    angle: 'Exclusivity & Early Founder Pilot',
    subject: 'Looking for 3 SaaS pilot customers',
    body: `Hi {{FirstName}},

I'm currently looking for three SaaS companies to participate in a founder-led FlowForge pilot.

You'll receive a complete Engineering Stability Assessment and executive review.

Would you be open to learning more?

Chuck`
  },
  {
    id: 9,
    title: 'Message 9: Cost of Delivery Instability',
    angle: 'Financial / Risk Avoidance',
    subject: 'Reduce delivery risk before it becomes expensive',
    body: `Hi {{FirstName}},

Engineering instability is expensive.

Burnout, velocity drops, and delivery delays often share the same root causes.

FlowForge identifies those issues early.

Happy to share a sample assessment if you're interested.

Chuck`
  },
  {
    id: 10,
    title: 'Message 10: The Stability OS Vision',
    angle: 'Categorical Executive Confidence',
    subject: 'FlowForge — Stability OS for SaaS Engineering Teams',
    body: `Hi {{FirstName}},

We built FlowForge to answer one question:

"How stable is your engineering organization right now?"

The output is a clear executive view of risk, capacity, burnout exposure, and delivery confidence.

Would you be interested in reviewing a sample report?

Chuck`
  }
];

// 7-Day Execution Checklist Data
interface ChecklistTask {
  id: string;
  category: 'technical' | 'business';
  text: string;
}

interface ChecklistDay {
  day: number;
  title: string;
  targetOutcome: string;
  tasks: ChecklistTask[];
}

const CHECKLIST_DAYS: ChecklistDay[] = [
  {
    day: 1,
    title: 'DAY 1 — MVP FOUNDATION',
    targetOutcome: 'Dashboard running locally and live on flowforge.fit',
    tasks: [
      { id: 'd1_t1', category: 'technical', text: 'Create PostgreSQL database tables (teams, engineers, metrics, esa_reports)' },
      { id: 'd1_t2', category: 'technical', text: 'Run and verify schema.sql with seed data' },
      { id: 'd1_t3', category: 'technical', text: 'Build Stability Score API (100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V)))' },
      { id: 'd1_t4', category: 'technical', text: 'Build Slack Liquidity API (100 * max(0, SlackCap / TotalCap))' },
      { id: 'd1_t5', category: 'technical', text: 'Build Burnout Index API (0.5*L + 0.3*(1-S) + 0.2*V)' },
      { id: 'd1_t6', category: 'technical', text: 'Connect dashboard frontend UI to live API endpoints' },
      { id: 'd1_b1', category: 'business', text: 'Create FlowForge email account (chuck@flowforge.fit)' },
      { id: 'd1_b2', category: 'business', text: 'Create FlowForge LinkedIn Company Page' },
      { id: 'd1_b3', category: 'business', text: 'Finalize pricing ($3,000 ESA Audit + $1,500/mo Stability Core)' }
    ]
  },
  {
    day: 2,
    title: 'DAY 2 — ESA SYSTEM',
    targetOutcome: 'ESA generated automatically with 1 click',
    tasks: [
      { id: 'd2_t1', category: 'technical', text: 'Build ESA automated report generator' },
      { id: 'd2_t2', category: 'technical', text: 'Create HTML ESA report template with dark theme styling' },
      { id: 'd2_t3', category: 'technical', text: 'Implement 1-click printable / PDF export' },
      { id: 'd2_t4', category: 'technical', text: 'Generate unique ESA ID and verification hash system' },
      { id: 'd2_b1', category: 'business', text: 'Create sample ESA report for Texas Core Platform anchor pod' },
      { id: 'd2_b2', category: 'business', text: 'Create service brochure PDF / 1-pager for prospect review' }
    ]
  },
  {
    day: 3,
    title: 'DAY 3 — WEBSITE LAUNCH',
    targetOutcome: 'Public website live on flowforge.fit with assessment booking CTA',
    tasks: [
      { id: 'd3_t1', category: 'technical', text: 'Deploy MVP application to public production domain' },
      { id: 'd3_t2', category: 'technical', text: 'Verify flowforge.fit landing pages (Home, Product, Platform, Pricing, ESA)' },
      { id: 'd3_t3', category: 'technical', text: 'Configure clear Primary CTA: "Book Stability Assessment ($3,000)"' },
      { id: 'd3_t4', category: 'technical', text: 'Confirm Texas Tax Code § 151.351 statutory 20% exemption display' }
    ]
  },
  {
    day: 4,
    title: 'DAY 4 — PROSPECT LIST (50 LEADS)',
    targetOutcome: 'Prospect pipeline of 50 qualified engineering leaders built',
    tasks: [
      { id: 'd4_b1', category: 'business', text: 'Target VP Engineering & CTOs at SaaS / FinTech / InsurTech / AI startups' },
      { id: 'd4_b2', category: 'business', text: 'Focus on 50–500 engineer organizations facing rapid scaling drag' },
      { id: 'd4_b3', category: 'business', text: 'Compile list of 50 verified contact emails and LinkedIn profiles' },
      { id: 'd4_b4', category: 'business', text: 'Note recent triggers: funding rounds, reorgs, hiring surges, open tickets' }
    ]
  },
  {
    day: 5,
    title: 'DAY 5 — OUTREACH LAUNCH',
    targetOutcome: '20 fresh executive contacts reached; discovery calls booked',
    tasks: [
      { id: 'd5_b1', category: 'business', text: 'Send 10 personalized direct emails to target CTOs' },
      { id: 'd5_b2', category: 'business', text: 'Send 10 targeted LinkedIn InMail messages' },
      { id: 'd5_b3', category: 'business', text: 'Track open rates and reply responses in acquisition tracker' },
      { id: 'd5_b4', category: 'business', text: 'Follow up on all positive replies within 15 minutes' }
    ]
  },
  {
    day: 6,
    title: 'DAY 6 — DEMO READINESS',
    targetOutcome: 'Deliver demo confidently in under 15 minutes',
    tasks: [
      { id: 'd6_t1', category: 'technical', text: 'Practice Stability Score live slider demo (0.80 / 0.22 / 0.28)' },
      { id: 'd6_t2', category: 'technical', text: 'Practice ESA generation walkthrough showing findings and 30-Day Plan' },
      { id: 'd6_b1', category: 'business', text: 'Rehearse executive objection handling (queue math vs ticket vanity)' },
      { id: 'd6_b2', category: 'business', text: 'Run 2 practice trial demos with peer founder or advisor' }
    ]
  },
  {
    day: 7,
    title: 'DAY 7 — SALES DAY & FIRST PROPOSAL',
    targetOutcome: '3 meetings held, 1 formal pilot proposal sent ($3,000 ESA)',
    tasks: [
      { id: 'd7_b1', category: 'business', text: 'Conduct 3 executive discovery calls with prospect engineering leads' },
      { id: 'd7_b2', category: 'business', text: 'Pitch the $3,000 48-Hour Engineering Stability Assessment' },
      { id: 'd7_b3', category: 'business', text: 'Issue official 1-Page Pilot Proposal with Texas tax exemption' },
      { id: 'd7_b4', category: 'business', text: 'Send Stripe payment link or invoice to close customer #1' }
    ]
  }
];

// Standalone Python MVP Files Manifest
const PYTHON_MVP_FILES = [
  {
    id: 'app_py',
    name: 'app.py',
    path: 'flowforge-mvp/app.py',
    description: 'Flask REST API entrypoint with /teams and /api endpoints',
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
    slack_percent = calculate_slack_liquidity(100, round(100 * (1 - slack)))
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
    description: 'PostgreSQL Relational Schema for teams, engineers, metrics, and esa_reports',
    code: `CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE engineers (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    name VARCHAR(255),
    active_tasks INTEGER DEFAULT 0,
    completed_tasks INTEGER DEFAULT 0,
    hours_worked NUMERIC DEFAULT 0
);

CREATE TABLE metrics (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    stability_score NUMERIC,
    slack_liquidity NUMERIC,
    burnout_index NUMERIC,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE esa_reports (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    summary TEXT,
    recommendations TEXT,
    stability_score NUMERIC,
    slack_liquidity NUMERIC,
    burnout_index NUMERIC,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Anchor Pod
INSERT INTO teams (id, name) VALUES (1, 'Texas Core Platform') ON CONFLICT DO NOTHING;
INSERT INTO engineers (team_id, name, active_tasks, completed_tasks, hours_worked) VALUES
(1, 'Lead Architect', 8, 14, 48),
(1, 'Senior Backend Eng', 6, 12, 42),
(1, 'Senior Frontend Eng', 7, 10, 44),
(1, 'DevOps Lead', 9, 8, 50)
ON CONFLICT DO NOTHING;`
  },
  {
    id: 'stability_score_py',
    name: 'core/stability_score.py',
    path: 'flowforge-mvp/core/stability_score.py',
    description: 'Stability Score Algorithm: 100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V))',
    code: `def calculate_stability_score(load: float, slack: float, volatility: float) -> float:
    l = max(0.0, min(1.0, float(load)))
    s = max(0.0, min(1.0, float(slack)))
    v = max(0.0, min(1.0, float(volatility)))

    score = (1.0 - l) * 40.0 + s * 40.0 + (1.0 - v) * 20.0
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
    description: 'Slack Liquidity Formula: 100 * max(0, SlackCapacity / TotalCapacity)',
    code: `def calculate_slack_liquidity(total_capacity: float, committed_capacity: float) -> float:
    if total_capacity <= 0:
        return 0.0

    slack = max(0.0, total_capacity - committed_capacity)
    return round((slack / total_capacity) * 100.0, 2)

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
    description: 'Burnout Index Formula: 0.5*L + 0.3*(1-S) + 0.2*V',
    code: `def calculate_burnout(load: float, slack: float, volatility: float) -> float:
    l = max(0.0, min(1.0, float(load)))
    s = max(0.0, min(1.0, float(slack)))
    v = max(0.0, min(1.0, float(volatility)))

    risk = 0.5 * l + 0.3 * (1.0 - s) + 0.2 * v
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
    description: 'Enterprise Stability Assessment Generator (Summary, Findings, 30-Day Plan)',
    code: `from datetime import datetime

def generate_esa(team_name: str, stability_score: float, slack: float, burnout: float):
    return {
        "generated": str(datetime.utcnow()),
        "team_name": team_name,
        "stability_score": stability_score,
        "slack_liquidity": slack,
        "burnout_index": burnout,
        "rating": (
            "Excellent" if stability_score >= 85 else
            "Stable" if stability_score >= 70 else
            "Fragile" if stability_score >= 50 else
            "Critical"
        ),
        "recommendations": [
            "Increase slack reserves to 15% minimum statutory floor",
            "Reduce workload concentration away from lead technical architect",
            "Monitor weekly burnout indicators before sprint commitments",
            "Protect critical path contributors via micro-slack windows"
        ]
    }`
  }
];

export const MvpDashboardPrototypeView: React.FC<MvpDashboardPrototypeProps> = ({
  onNavigateToAiCloser
}) => {
  // Navigation Section Sub-tabs
  const [activeSection, setActiveSection] = useState<
    'dashboard' | 'checklist' | 'pilot_proposal' | 'outreach_10' | 'api_console' | 'python_files'
  >('dashboard');

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

  // 10 CTO Outreach Messages State
  const [activeMessageId, setActiveMessageId] = useState<number>(1);
  const [outreachProspectName, setOutreachProspectName] = useState<string>('Alex');
  const [outreachCompany, setOutreachCompany] = useState<string>('Acme Cloud');
  const [copiedMessageNotice, setCopiedMessageNotice] = useState<boolean>(false);
  const [copiedAllMessagesNotice, setCopiedAllMessagesNotice] = useState<boolean>(false);

  // Pilot Proposal State
  const [proposalClientName, setProposalClientName] = useState<string>('Apex Cloud Technologies');
  const [proposalPreparedDate, setProposalPreparedDate] = useState<string>('October 5, 2026');
  const [copiedProposalNotice, setCopiedProposalNotice] = useState<boolean>(false);

  // Interactive Checklist State
  const [checklistTasks, setChecklistTasks] = useState<Record<string, boolean>>({
    d1_t1: true,
    d1_t2: true,
    d1_t3: true,
    d1_t4: true,
    d1_t5: true,
    d1_t6: true,
    d1_b1: true,
    d1_b2: true,
    d1_b3: true,
    d2_t1: true,
    d2_t2: true,
    d2_t3: true,
    d2_t4: true,
    d2_b1: true,
    d2_b2: true,
    d3_t1: true,
    d3_t2: true,
    d3_t3: true,
    d3_t4: true,
    d4_b1: false,
    d4_b2: false,
    d4_b3: false,
    d4_b4: false,
    d5_b1: false,
    d5_b2: false,
    d5_b3: false,
    d5_b4: false,
    d6_t1: false,
    d6_t2: false,
    d6_b1: false,
    d6_b2: false,
    d7_b1: false,
    d7_b2: false,
    d7_b3: false,
    d7_b4: false
  });

  const toggleChecklistTask = (taskId: string) => {
    setChecklistTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const totalTasks = Object.keys(checklistTasks).length;
  const completedTasksCount = Object.values(checklistTasks).filter(Boolean).length;
  const checklistCompletionPct = Math.round((completedTasksCount / totalTasks) * 100);

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

  const currentMessage = CTO_10_MESSAGES.find(m => m.id === activeMessageId) || CTO_10_MESSAGES[0];

  const getPersonalizedMessageText = (msg: CtoOutreachMessageItem) => {
    return msg.body
      .replace(/\{\{FirstName\}\}/g, outreachProspectName || 'there')
      .replace(/\{\{Company\}\}/g, outreachCompany || 'your team');
  };

  const handleCopyCurrentMessage = () => {
    const fullText = `Subject: ${currentMessage.subject}\n\n${getPersonalizedMessageText(currentMessage)}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessageNotice(true);
    setTimeout(() => setCopiedMessageNotice(false), 2000);
  };

  const handleCopyAllMessages = () => {
    const allText = CTO_10_MESSAGES.map(m => (
      `==============================\n${m.title} (${m.angle})\nSubject: ${m.subject}\n==============================\n\n${getPersonalizedMessageText(m)}\n\n`
    )).join('\n');
    navigator.clipboard.writeText(allText);
    setCopiedAllMessagesNotice(true);
    setTimeout(() => setCopiedAllMessagesNotice(false), 2500);
  };

  const getPilotProposalText = () => {
    return `FLOWFORGE PILOT PROPOSAL
FlowForge Engineering Stability Assessment
Prepared for: ${proposalClientName}
Date: ${proposalPreparedDate}
Founder & Lead Assessor: Chuck Oduagu (FlowForge.fit)

============================================================
EXECUTIVE SUMMARY
============================================================
FlowForge helps engineering leaders identify hidden delivery risk, burnout risk, and capacity bottlenecks before they impact execution.

Our 30-day Engineering Stability Assessment provides an executive-level view of team health and a practical action plan for improving engineering stability.

============================================================
WHAT YOU RECEIVE (CORE DELIVERABLES)
============================================================
1. Stability Score
   Measures engineering stability on a 0–100 scale using empirical queueing physics:
   StabilityScore = 100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V))

2. Slack Liquidity Analysis
   Identifies available capacity and operational buffer to absorb unplanned defects:
   SlackLiquidity = 100 * max(0, SlackCap / TotalCap) [15% statutory safe floor]

3. Burnout Index
   Highlights workload concentration and engineer exhaustion risk across pods:
   BurnoutIndex = 0.5*L + 0.3*(1-S) + 0.2*V

4. Executive Stability Report
   Professional diagnostic assessment document including:
   • Findings & Bottleneck Mapping
   • Risk Summary
   • Actionable Recommendations
   • Structured 30-Day Stability Improvement Plan

============================================================
ASSESSMENT TIMELINE (30-DAY ENGAGEMENT)
============================================================
• Week 1: Data Collection (GitHub / Jira telemetry connection)
• Week 2: Analysis & Scoring (Empirical queueing calculations)
• Week 3: Risk Review (Review load concentration & bottlenecks)
• Week 4: Executive Readout (Formal executive presentation & 30-Day Plan)

============================================================
INVESTMENT
============================================================
• Engineering Stability Assessment (ESA):
  $3,000 Fixed Fee
  Includes Assessment, Executive Report, and Leadership Review Session.
  Eligible for Texas Tax Code § 151.351 statutory 20% sales tax exemption ($600 savings).

• Optional Ongoing Monitoring (FlowForge Stability Core):
  $1,500 / month recurring
  Includes continuous Stability Dashboard, Monthly ESA recertification, automated burnout alerts, and delivery risk tracking.

============================================================
CONTACT & AUTHORIZATION
============================================================
Chuck Oduagu
Founder, FlowForge
Email: chuck@flowforge.fit | Web: https://flowforge.fit
Entity: CFO TAX PRO LLC (Texas SOS #08051239)`;
  };

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(getPilotProposalText());
    setCopiedProposalNotice(true);
    setTimeout(() => setCopiedProposalNotice(false), 2000);
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
    setTimeout(() => setCopiedEsaNotification(false), 2000);
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
        headers: { 'Content-Type': 'application/json' }
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
    setTimeout(() => setCopiedCodeNotice(false), 2000);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto text-slate-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950/70 via-slate-900 to-indigo-950/70 border border-cyan-800/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FLOWFORGE 0.1 MVP — REVENUE EXECUTION MODE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Engineering Stability Platform (MVP)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Target: <strong>Customer #1 in 30 Days</strong>. 7-Day Execution Checklist • 1-Page Pilot Proposal • 10 CTO Outreach Messages • Standalone Python MVP.
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
          <span>📊 1-Page Dashboard</span>
        </button>

        <button
          onClick={() => setActiveSection('checklist')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'checklist'
              ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md'
              : 'text-amber-400/90 hover:text-amber-300 hover:bg-amber-950/40 border border-amber-500/20'
          }`}
        >
          <ListChecksIcon className="w-4 h-4" />
          <span>🚀 7-Day Checklist ({checklistCompletionPct}%)</span>
        </button>

        <button
          onClick={() => setActiveSection('pilot_proposal')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'pilot_proposal'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-md'
              : 'text-emerald-400/90 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-500/20'
          }`}
        >
          <FileTextIcon className="w-4 h-4" />
          <span>📄 Pilot Proposal ($3,000)</span>
        </button>

        <button
          onClick={() => setActiveSection('outreach_10')}
          className={`px-4 py-2 rounded-xl font-bold transition flex items-center space-x-2 whitespace-nowrap cursor-pointer ${
            activeSection === 'outreach_10'
              ? 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white shadow-md'
              : 'text-purple-400/90 hover:text-purple-300 hover:bg-purple-950/40 border border-purple-500/20'
          }`}
        >
          <MailIcon className="w-4 h-4" />
          <span>📧 10 CTO Outreach Messages</span>
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
          <span>🐍 Python MVP Source</span>
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
                  Formula: <code className="text-cyan-300 font-mono text-[11px]">100 * (0.4*(1-L) + 0.4*S + 0.2*(1-V))</code>
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
                  Minimum healthy buffer floor: <strong className="text-amber-300">15.0%</strong>
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
                  Threshold: <strong className="text-rose-300">&gt; 0.40</strong> triggers burnout warning
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

      {/* ================= SECTION 2: 7-DAY EXECUTION CHECKLIST ================= */}
      {activeSection === 'checklist' && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full text-xs font-mono font-bold">
                  <ListChecksIcon className="w-3.5 h-3.5" />
                  <span>FLOWFORGE MVP TO FIRST INVOICE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  7-Day Founder Execution Checklist
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Target: First ESA Sold ($3,000) • Target: First Monthly Customer ($1,500 MRR)
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Sprint Progress: <strong className="text-amber-300">{completedTasksCount} / {totalTasks} Tasks Completed</strong></span>
                <span className="text-emerald-400 font-bold">{checklistCompletionPct}% Complete</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${checklistCompletionPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHECKLIST_DAYS.map((dayItem) => {
              const dayTasks = dayItem.tasks;
              const dayCompletedCount = dayTasks.filter(t => checklistTasks[t.id]).length;
              const isDayDone = dayCompletedCount === dayTasks.length;

              return (
                <div
                  key={dayItem.day}
                  className={`bg-slate-900 border rounded-3xl p-6 space-y-4 shadow-xl transition ${
                    isDayDone ? 'border-emerald-500/50 bg-emerald-950/10' : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-400">{dayItem.title}</span>
                      <div className="text-xs text-slate-400 mt-0.5">
                        Outcome: <strong className="text-slate-200">{dayItem.targetOutcome}</strong>
                      </div>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                      isDayDone ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50' : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}>
                      {dayCompletedCount}/{dayTasks.length} Done
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {dayTasks.map((t) => {
                      const checked = !!checklistTasks[t.id];
                      return (
                        <label
                          key={t.id}
                          className={`flex items-start space-x-2.5 p-2 rounded-xl transition cursor-pointer select-none ${
                            checked ? 'bg-emerald-950/30 text-slate-300 line-through' : 'hover:bg-slate-850 text-white'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleChecklistTask(t.id)}
                            className="mt-0.5 w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-0 cursor-pointer accent-amber-500 shrink-0"
                          />
                          <div className="leading-snug">
                            <span className={`font-mono text-[10px] uppercase font-bold mr-1.5 px-1.5 py-0.5 rounded ${
                              t.category === 'technical' ? 'bg-cyan-950 text-cyan-400' : 'bg-amber-950 text-amber-400'
                            }`}>
                              {t.category}
                            </span>
                            <span>{t.text}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= SECTION 3: 1-PAGE PILOT PROPOSAL ================= */}
      {activeSection === 'pilot_proposal' && (
        <div className="space-y-6">
          {/* Header Controls */}
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <FileTextIcon className="w-3.5 h-3.5" />
                  <span>OFFICIAL EXECUTIVE PILOT DOCUMENT</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  1-Page Engineering Stability Assessment Proposal
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Ready to send to CTOs, VPs of Engineering, and Platform Leads. $3,000 Fixed Fee.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyProposal}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedProposalNotice ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedProposalNotice ? 'Copied Proposal!' : 'Copy Proposal Text'}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow"
                >
                  <PrinterIcon className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Customization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Target Client Organization:</label>
                <input
                  type="text"
                  value={proposalClientName}
                  onChange={(e) => setProposalClientName(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Proposal Date:</label>
                <input
                  type="text"
                  value={proposalPreparedDate}
                  onChange={(e) => setProposalPreparedDate(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Formal Pilot Proposal Sheet */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl font-sans text-slate-200 max-w-4xl mx-auto">
            {/* Document Header */}
            <div className="border-b-2 border-cyan-500 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider block">
                  FLOWFORGE STABILITY OS • EXECUTIVE PILOT PROPOSAL
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  FlowForge Engineering Stability Assessment
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Prepared For: <strong className="text-white">{proposalClientName}</strong> • Date: {proposalPreparedDate}
                </p>
              </div>
              <div className="text-right sm:text-right shrink-0">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/50">
                  Fixed Fee: $3,000
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                1. Executive Summary
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                FlowForge helps engineering leaders identify hidden delivery risk, burnout risk, and capacity bottlenecks before they impact execution. Our 30-day Engineering Stability Assessment provides an executive-level view of team health and a practical action plan for improving engineering stability.
              </p>
            </div>

            {/* What You Receive (Deliverables) */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                2. What You Receive (Deliverables)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-cyan-400 text-sm">Stability Score</div>
                  <p className="text-slate-300">Measures engineering stability on a verified 0–100 scale using empirical queueing mathematics.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-amber-400 text-sm">Slack Liquidity Analysis</div>
                  <p className="text-slate-300">Quantifies engineering buffer capacity to absorb unplanned defects against the 15% statutory floor.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-rose-400 text-sm">Burnout Index</div>
                  <p className="text-slate-300">Highlights workload concentration and burnout risk across engineering leads and critical paths.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="font-bold text-emerald-400 text-sm">Executive Stability Report</div>
                  <p className="text-slate-300">Complete readout with Empirical Telemetry Findings, Risk Summary, Recommendations, and a 30-Day Plan.</p>
                </div>
              </div>
            </div>

            {/* Assessment Timeline */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                3. Engagement Timeline
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { week: 'Week 1', title: 'Data Collection', desc: 'GitHub / Jira telemetry connection' },
                  { week: 'Week 2', title: 'Analysis & Scoring', desc: 'Queue math & factor calculation' },
                  { week: 'Week 3', title: 'Risk Review', desc: 'Deep-dive on bottlenecks & WIP' },
                  { week: 'Week 4', title: 'Executive Readout', desc: 'Presentation & 30-Day Plan delivery' }
                ].map((w, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="font-mono text-cyan-400 font-bold block">{w.week}</span>
                    <strong className="text-white block">{w.title}</strong>
                    <span className="text-[11px] text-slate-400">{w.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment & Pricing */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                4. Investment Structure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/50 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-emerald-400 text-sm">Engineering Stability Assessment</span>
                    <span className="text-lg font-black text-white">$3,000 Fixed Fee</span>
                  </div>
                  <p className="text-slate-300">Includes Assessment, Executive Report, and Leadership Review Session.</p>
                  <p className="text-[11px] text-emerald-400/90 font-mono">
                    Eligible for Texas Tax Code § 151.351 statutory 20% sales tax exemption ($600 tax savings).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/50 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-cyan-400 text-sm">Optional Ongoing Monitoring</span>
                    <span className="text-lg font-black text-white">$1,500 / month</span>
                  </div>
                  <p className="text-slate-300">FlowForge Stability Core continuous dashboard, monthly recertification ESA, burnout monitoring, and risk tracking.</p>
                </div>
              </div>
            </div>

            {/* Authorization Signatures */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
              <div className="space-y-2">
                <span className="text-slate-400 block uppercase">Prepared By:</span>
                <div className="text-white font-bold text-sm">Chuck Oduagu</div>
                <div className="text-slate-400">Founder, FlowForge</div>
                <div className="text-cyan-400">FlowForge.fit • CFO TAX PRO LLC</div>
              </div>

              <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-6">
                <span className="text-slate-400 block uppercase">Accepted & Authorized By:</span>
                <div className="border-b border-slate-700 h-6"></div>
                <div className="text-slate-400">Authorized Signature ({proposalClientName})</div>
                <div className="text-slate-500 text-[11px]">Date: ________________________</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 4: 10 CTO OUTREACH MESSAGES ================= */}
      {activeSection === 'outreach_10' && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="bg-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>FOUNDER-LED OUTREACH PLAYBOOK</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  10 Personalized CTO Outreach Messages
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Target: 10 daily outreaches for 14 days $\rightarrow$ 10 Conversations $\rightarrow$ 3 Demos $\rightarrow$ 1 Pilot $\rightarrow$ 1 Paying Customer.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyAllMessages}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedAllMessagesNotice ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedAllMessagesNotice ? 'All Copied!' : 'Copy All 10 Messages'}</span>
                </button>
              </div>
            </div>

            {/* Personalization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Prospect First Name ({"{{FirstName}}"}):</label>
                <input
                  type="text"
                  value={outreachProspectName}
                  onChange={(e) => setOutreachProspectName(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">Prospect Company ({"{{Company}}"}):</label>
                <input
                  type="text"
                  value={outreachCompany}
                  onChange={(e) => setOutreachCompany(e.target.value)}
                  className="w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-800 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Two-Column Playbook Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Message Directory */}
            <div className="space-y-2 lg:col-span-1">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2">
                Available Angle Sequences ({CTO_10_MESSAGES.length})
              </div>
              <div className="space-y-1.5 max-h-[600px] overflow-y-auto no-scrollbar">
                {CTO_10_MESSAGES.map((msg) => {
                  const isSelected = msg.id === activeMessageId;
                  return (
                    <button
                      key={msg.id}
                      onClick={() => setActiveMessageId(msg.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition cursor-pointer ${
                        isSelected
                          ? 'bg-purple-950/60 border-purple-500 text-white shadow'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono font-bold text-purple-400">#{msg.id}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{msg.angle}</span>
                      </div>
                      <div className="font-bold text-xs mt-1 truncate">{msg.subject}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Message Detail & Action Box */}
            <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-purple-400">{currentMessage.title}</span>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">Angle: {currentMessage.angle}</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleCopyCurrentMessage}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow"
                    >
                      {copiedMessageNotice ? <CheckIcon className="w-3.5 h-3.5 text-white" /> : <CopyIcon className="w-3.5 h-3.5" />}
                      <span>{copiedMessageNotice ? 'Copied!' : 'Copy Email'}</span>
                    </button>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(currentMessage.subject)}&body=${encodeURIComponent(getPersonalizedMessageText(currentMessage))}`}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold transition flex items-center space-x-1.5"
                    >
                      <SendIcon className="w-3.5 h-3.5" />
                      <span>Open in Mail</span>
                    </a>
                  </div>
                </div>

                {/* Subject Line Bar */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-500 mr-2">Subject:</span>
                    <strong className="text-cyan-300">{currentMessage.subject}</strong>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
                  {getPersonalizedMessageText(currentMessage)}
                </div>
              </div>

              {/* Bottom Quick Switcher */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <button
                  disabled={activeMessageId <= 1}
                  onClick={() => setActiveMessageId(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 disabled:opacity-30 cursor-pointer"
                >
                  ← Previous Message
                </button>
                <span className="font-mono text-[11px] text-slate-500">
                  Message {activeMessageId} of {CTO_10_MESSAGES.length}
                </span>
                <button
                  disabled={activeMessageId >= CTO_10_MESSAGES.length}
                  onClick={() => setActiveMessageId(prev => Math.min(CTO_10_MESSAGES.length, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 disabled:opacity-30 cursor-pointer"
                >
                  Next Message →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= SECTION 5: LIVE MVP API CONSOLE ================= */}
      {activeSection === 'api_console' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <TerminalIcon className="w-4 h-4" />
                  <span>MVP SPECIFICATION API EXECUTOR</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Interactive REST Endpoints & Live Verification
                </h2>
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

      {/* ================= SECTION 6: PYTHON MVP FILES & DATABASE SCHEMA ================= */}
      {activeSection === 'python_files' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Code2Icon className="w-4 h-4" />
                  <span>PYTHON MVP & POSTGRESQL CODE REPOSITORY</span>
                </span>
                <h2 className="text-xl font-extrabold text-white">
                  Inspect & Export Standalone Production Assets
                </h2>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyCode}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedCodeNotice ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  <span>{copiedCodeNotice ? 'Copied File!' : 'Copy File'}</span>
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
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
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
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
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
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold cursor-pointer"
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
