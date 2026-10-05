"""
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
    load = 0.80
    slack = 0.22
    volatility = 0.28

    score = calculate_stability_score(load, slack, volatility)
    slack_percent = calculate_slack_liquidity(100, 78)  # 22%
    burnout = calculate_burnout(load, slack, volatility)

    return jsonify({
        "stability_score": score,
        "slack_liquidity": slack_percent,
        "burnout_index": burnout,
        "rating": get_stability_rating(score),
        "slack_tier": get_slack_tier(slack_percent),
        "burnout_tier": get_burnout_risk_label(burnout)
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
# 1. Ingest team data
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

# 2. Get stability metrics
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
        "status": "SUCCESS"
    })

# 3. Generate ESA
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
    app.run(host="0.0.0.0", port=5000, debug=True)
