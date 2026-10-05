"""
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
        return "High Risk"
