"""
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
        return "Slack Healthy"
