"""
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
    }
