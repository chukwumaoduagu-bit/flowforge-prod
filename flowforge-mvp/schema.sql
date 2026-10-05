-- FLOWFORGE MVP V1 DATABASE SCHEMA
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
ON CONFLICT DO NOTHING;
