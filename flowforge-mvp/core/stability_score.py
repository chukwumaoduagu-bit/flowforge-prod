"""
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
        return "Critical"
