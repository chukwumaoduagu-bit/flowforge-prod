import React, { useState, useMemo } from 'react';
import {
  Globe,
  DollarSign,
  Handshake,
  Layers,
  CheckCircle2,
  Calendar,
  Award,
  ChevronRight,
  Download,
  Copy,
  Check,
  Server,
  TrendingUp,
  Cpu,
  Clock,
  ExternalLink,
  PieChart,
  Calculator,
  HardDrive,
  Users
} from 'lucide-react';
import {
  FLOWFORGE_GLOBAL_OPERATING_MODEL,
  FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL,
  FLOWFORGE_PARTNER_REVENUE_MODEL,
  FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE,
  OperatingLayer,
  OperatingCadenceInterval,
  SaaSPlanTier,
  FinancialProjectionYear,
  PartnerTier,
  ArchitectureLayerSpec
} from '../data/expansionSuitePart10Data';

interface EnterpriseExpansionSuitePart10ViewProps {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToPart6?: () => void;
  onNavigateToPart7?: () => void;
  onNavigateToPart8?: () => void;
  onNavigateToPart9?: () => void;
  onNavigateToMasterBusinessPlan?: () => void;
  onNavigateToTotalBusinessArchitecture?: () => void;
}

type TabType = 'global_ops' | 'financial_model' | 'partner_revenue' | 'technical_architecture' | 'master_dossier';

export const EnterpriseExpansionSuitePart10View: React.FC<EnterpriseExpansionSuitePart10ViewProps> = ({
  onNavigateToStability,
  onNavigateToPart8,
  onNavigateToPart9,
  onNavigateToMasterBusinessPlan,
  onNavigateToTotalBusinessArchitecture
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('global_ops');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Global Ops Filters
  const [selectedCadence, setSelectedCadence] = useState<string>('All');
  const [selectedLayer, setSelectedLayer] = useState<string>('All');

  // Financial Model Interactivity
  const [selectedPlan, setSelectedPlan] = useState<string>('Governance + Autonomy');
  const [selectedYear, setSelectedYear] = useState<string>('Year 3');

  // Partner Revenue Calculator State
  const [partnerCalculatorTier, setPartnerCalculatorTier] = useState<string>('Advanced');
  const [monthlyCoSoldDeals, setMonthlyCoSoldDeals] = useState<number>(2);
  const [quarterlyESAs, setQuarterlyESAs] = useState<number>(4);
  const [certifiedStudentsAnnual, setCertifiedStudentsAnnual] = useState<number>(50);
  const [monthlyGovHours, setMonthlyGovHours] = useState<number>(25);
  const [monthlyAutonomyHours, setMonthlyAutonomyHours] = useState<number>(20);
  const [monthlyIntelHours, setMonthlyIntelHours] = useState<number>(10);

  // Technical Architecture Interactivity
  const [selectedArchLayer, setSelectedArchLayer] = useState<number>(1);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  // Partner Calculator Math
  const calculatedPartnerEarnings = useMemo(() => {
    const tier = FLOWFORGE_PARTNER_REVENUE_MODEL.partnerTiers.find(t => t.level === partnerCalculatorTier) || FLOWFORGE_PARTNER_REVENUE_MODEL.partnerTiers[2];
    
    // Rev share percentage
    let revShareRate = 0.15;
    if (tier.level === 'Registered') revShareRate = 0.10;
    else if (tier.level === 'Certified') revShareRate = 0.15;
    else if (tier.level === 'Advanced') revShareRate = 0.22;
    else if (tier.level === 'Elite') revShareRate = 0.30;

    // Average deal size ($3,500/mo * 12 = $42,000 ACV)
    const avgACV = 42000;
    const annualCoSoldTotal = monthlyCoSoldDeals * 12 * avgACV;
    const annualCoSellEarnings = annualCoSoldTotal * revShareRate;

    // ESA Bounty
    let esaRate = 1250;
    if (tier.level === 'Registered') esaRate = 1000;
    else if (tier.level === 'Certified') esaRate = 1250;
    else if (tier.level === 'Advanced') esaRate = 1500;
    else if (tier.level === 'Elite') esaRate = 2000;
    const annualESAEarnings = quarterlyESAs * 4 * esaRate;

    // Cert Royalties ($499 fee * share)
    let certRate = 0.25;
    if (tier.level === 'Registered') certRate = 0.20;
    else if (tier.level === 'Certified') certRate = 0.25;
    else if (tier.level === 'Advanced') certRate = 0.30;
    else if (tier.level === 'Elite') certRate = 0.40;
    const annualCertEarnings = certifiedStudentsAnnual * 499 * certRate;

    // Consulting
    const govRate = 350;
    const autonomyRate = 500;
    const intelRate = 600;

    const annualGovServices = monthlyGovHours * 12 * govRate;
    const annualAutonomyServices = monthlyAutonomyHours * 12 * autonomyRate;
    const annualIntelServices = monthlyIntelHours * 12 * intelRate;
    const annualConsultingServices = annualGovServices + annualAutonomyServices + annualIntelServices;

    const totalAnnualEarnings = annualCoSellEarnings + annualESAEarnings + annualCertEarnings + annualConsultingServices;

    return {
      tierName: tier.level,
      annualCoSellEarnings,
      annualESAEarnings,
      annualCertEarnings,
      annualConsultingServices,
      totalAnnualEarnings,
      monthlyAverage: totalAnnualEarnings / 12
    };
  }, [partnerCalculatorTier, monthlyCoSoldDeals, quarterlyESAs, certifiedStudentsAnnual, monthlyGovHours, monthlyAutonomyHours, monthlyIntelHours]);

  const generateMasterDossierMarkdown = () => {
    return `# FLOWFORGE TOTAL ENTERPRISE STACK (PART X — FINAL MASTER DELIVERY)
Global Operating Model + Enterprise Financial Model + Partner Revenue Model + Stability OS Technical Architecture
Document ID: FF-MASTER-X-FINAL-2027
Date: September 2026 / 2027 Execution
Author: Chuck, Founder & CEO, CFO TAX PRO LLC (dba FlowForge)

---

## 1. FLOWFORGE GLOBAL OPERATING MODEL

### Operating Philosophy
1. Stability First — Protect engineering teams from structural collapse and burnout. Statutory 15% slack floor.
2. Autonomy Always — Automate PR review routing and workload balancing without manual overhead.
3. Intelligence Everywhere — Forecast delivery risk, burnout trajectory, and critical path fragility via Bayesian models.

### Operating Layers
- Layer 1: Product Operations (Stability OS development, autonomy tuning, Bayesian recalibration, RulePacks, ESA grading)
- Layer 2: Customer Operations (Frictionless 30-day onboarding, ESA delivery within 72h, governance rollout, autonomy activation)
- Layer 3: Partner Operations (Partner onboarding, FCSA/FCGS/FCAE certifications, co-selling, joint marketing, commission clearing)
- Layer 4: Global Operations (Regional Stability Councils, global partner network, ESP evangelism, Global Stability Summit)

### Operating Cadence
- Daily: Stability Score updates, Slack Liquidity checks (>15%), Volatility monitoring
- Weekly: Autonomy cycle execution, critical path review, 30-day forward Bayesian forecast
- Monthly: ESA certification audit, governance compliance audit, autonomy performance review
- Quarterly: Stability OS functional upgrades, partner tier promotions, analyst briefings (Gartner/Forrester)
- Annually: Global Stability Summit (Dallas, TX - 2,500+ attendees), Global Partner Summit, Annual Global Stability Index

---

## 2. FLOWFORGE ENTERPRISE FINANCIAL MODEL

### Revenue Streams
A. SaaS Subscriptions:
   - Stability Core: $1,500/month ($1,250/mo billed annually) - Real-time stability score, slack liquidity, volatility index.
   - Governance + Autonomy: $3,500/month ($2,950/mo billed annually) - Closed-loop PR deflection, RulePack v1.0, critical path rescue.
   - Full Intelligence: $6,000/month ($5,000/mo billed annually) - 10,000-iteration Monte Carlo simulator, 30-90 day risk forecast.

B. Enterprise Stability Audit (ESA): $3,000 per 30-day audit (85%+ conversion to annual SaaS).
C. Partner Program: 10% to 30% recurring subscription revenue share.
D. Professional Certifications: $499 per exam (FCSA, FCGS, FCAE).
E. Enterprise Consulting: Stability ($250/hr), Governance ($350/hr), Autonomy ($500/hr), Intelligence ($600/hr).

### 5-Year Financial Projections
- Year 1 (2027): $500K–$1.0M ARR | Focus: Pilot penetration (85 squads) | Headcount: 12 | 82% Gross Margin
- Year 2 (2028): $2.0M–$4.0M ARR | Focus: Governance adoption (320 squads) | Headcount: 32 | 84% Gross Margin
- Year 3 (2029): $6.0M–$10.0M ARR | Focus: Autonomy rollout (980 squads) | Headcount: 75 | 86% Gross Margin
- Year 4 (2030): $15.0M–$25.0M ARR | Focus: Intelligence dominance (2,800 squads) | Headcount: 140 | 87% Gross Margin
- Year 5 (2031): $40.0M–$75.0M ARR | Focus: ESP category standardization (7,500+ squads) | Headcount: 240 | 88% Gross Margin

---

## 3. FLOWFORGE PARTNER REVENUE MODEL

### Partner Levels & Economics
- Registered: 10% Co-Sell ARR | $1,000 ESA Bounty | 20% Exam Fees | Consulting: $250-$300/hr
- Certified: 15% Co-Sell ARR | $1,250 ESA Bounty | 25% Exam Fees | Consulting: $300-$350/hr
- Advanced: 22% Co-Sell ARR | $1,500 ESA Bounty | 30% Exam Fees | Consulting: $350-$500/hr
- Elite: 30% Co-Sell ARR | $2,000 ESA Bounty | 40% Exam Fees | Consulting: $400-$700/hr

### Partner Revenue Streams
1. Co-Selling: 10-30% of subscription ACV
2. ESA Delivery: $1,000-$2,000 bounty per completed audit
3. Certification Programs: 20-40% share of $499 registration fee
4. Governance Implementation: $350/hr billable services
5. Autonomy Deployment: $500/hr billable services
6. Intelligence Consulting: $600/hr billable services

---

## 4. FLOWFORGE STABILITY OS TECHNICAL ARCHITECTURE

### The 5 Architectural Layers
1. Measurement Layer:
   - Collects: Load, Slack, Volatility, Critical Path, Burnout signals, Velocity history.
   - Stack: Python/Go/Rust, Kafka/PubSub, PostgreSQL, BigQuery, Redis, REST/GraphQL.
   - Latency: <120ms p99 telemetry ingestion. Zero code retention.
2. Governance Layer:
   - Enforces: Statutory 15% slack floor, volatility caps, critical path protection, quiet hours.
   - Stack: Open Policy Agent (OPA/Rego), Go evaluation engine, PostgreSQL, CI/CD webhooks.
   - Speed: <15ms deterministic execution guarantee.
3. Autonomy Layer:
   - Executes: Closed-loop PR rebalancing, slack redistribution, burnout mitigation, critical path unblocking.
   - Stack: Python/Rust actor system, Q-Learning allocator, Simulated Annealing, Tarjan's topological traversal.
4. Intelligence Layer:
   - Forecasts: 30-90 day forward stability, burnout trajectories, milestone delivery risk distribution.
   - Stack: 10,000-iteration Monte Carlo engine, PyTorch time-series neural networks, Ray distributed cluster.
5. Certification Layer:
   - Generates: ESA level 1-4 certificates, governance compliance attestations, tamper-evident digital signatures.
   - Stack: TypeScript report generator, Ed25519 digital signers, Cloud Storage cryptographic artifacts.

### Frontend & Deployment
- Frontend: React 18+, Tailwind CSS, D3.js topological graphs, WebSockets real-time stream.
- Deployment: Docker microservices, Google Cloud Run, Kubernetes (GKE/EKS), ArgoCD GitOps, OpenTelemetry.
`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md">
                  Part X — Final Master Delivery
                </span>
                <span className="text-xs text-indigo-300 font-mono">
                  {FLOWFORGE_GLOBAL_OPERATING_MODEL.documentId}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Production Blueprint Ready
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => copyToClipboard(generateMasterDossierMarkdown(), 'full_dossier')}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-semibold flex items-center space-x-1.5 transition"
                >
                  {copiedSection === 'full_dossier' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSection === 'full_dossier' ? 'Copied Master Dossier!' : 'Copy Full Dossier'}</span>
                </button>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              FlowForge — Total Enterprise Stack
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-4xl">
              The consolidated master delivery uniting the <strong>Global Operating Model</strong>, <strong>Enterprise Financial Model</strong>, <strong>Partner Revenue Model</strong>, and the full <strong>Stability OS Technical Architecture Specification</strong>.
            </p>

            {/* Quick Cross-Nav Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400 font-medium">Jump to:</span>
              {onNavigateToPart9 && (
                <button
                  onClick={onNavigateToPart9}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/30 transition flex items-center space-x-1"
                >
                  <span>⭐ Part IX: Founder & Capital</span>
                </button>
              )}
              {onNavigateToPart8 && (
                <button
                  onClick={onNavigateToPart8}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                >
                  Part VIII: Global Expansion
                </button>
              )}
              {onNavigateToTotalBusinessArchitecture && (
                <button
                  onClick={onNavigateToTotalBusinessArchitecture}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                >
                  Total Business Architecture
                </button>
              )}
              {onNavigateToMasterBusinessPlan && (
                <button
                  onClick={onNavigateToMasterBusinessPlan}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                >
                  Master Business Plan
                </button>
              )}
              {onNavigateToStability && (
                <button
                  onClick={onNavigateToStability}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition"
                >
                  Stability Core App
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('global_ops')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'global_ops'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span className="truncate">1. Global Ops Model</span>
          </button>

          <button
            onClick={() => setActiveTab('financial_model')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'financial_model'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span className="truncate">2. Financial Model</span>
          </button>

          <button
            onClick={() => setActiveTab('partner_revenue')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'partner_revenue'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span className="truncate">3. Partner Revenue</span>
          </button>

          <button
            onClick={() => setActiveTab('technical_architecture')}
            className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'technical_architecture'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span className="truncate">4. Technical Arch</span>
          </button>

          <button
            onClick={() => setActiveTab('master_dossier')}
            className={`col-span-2 sm:col-span-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
              activeTab === 'master_dossier'
                ? 'bg-slate-100 text-slate-900 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Download className="w-4 h-4" />
            <span className="truncate">Master Dossier</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* ==================== TAB 1: GLOBAL OPERATING MODEL ==================== */}
        {activeTab === 'global_ops' && (
          <div className="space-y-6">
            {/* Section 1: Operating Philosophy */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <span>1. Operating Philosophy</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    FlowForge operates across three unyielding foundational principles that guide every operational decision:
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Tri-Pillar Core
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FLOWFORGE_GLOBAL_OPERATING_MODEL.operatingPrinciples.map((op, idx) => (
                  <div key={idx} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 hover:border-blue-500/50 transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-white">{op.principle}</h3>
                    </div>
                    <p className="text-xs text-indigo-300 font-medium mb-3">{op.mandate}</p>
                    <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800 text-xs text-slate-300">
                      <span className="font-semibold text-slate-200">Execution Rule: </span>
                      {op.operationalRule}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Operating Layers */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-indigo-400" />
                    <span>2. Four Operational Layers</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Dedicated accountability structures spanning product development, client delivery, partner co-selling, and global category governance.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-slate-400">Filter Layer:</span>
                  {['All', 'Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'].map((lyr) => (
                    <button
                      key={lyr}
                      onClick={() => setSelectedLayer(lyr)}
                      className={`px-2.5 py-1 rounded-lg transition ${
                        selectedLayer === lyr
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lyr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FLOWFORGE_GLOBAL_OPERATING_MODEL.operatingLayers
                  .filter(l => selectedLayer === 'All' || l.layerNumber === selectedLayer)
                  .map((layer: OperatingLayer, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            {layer.layerNumber}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">Owner: <strong className="text-slate-200">{layer.owner}</strong></span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1.5">{layer.name}</h3>
                        <p className="text-xs text-slate-300 mb-4">{layer.focus}</p>

                        <div className="space-y-2 mb-4">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Functional Activities:</span>
                          {layer.activities.map((act, aIdx) => (
                            <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                              <ChevronRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                        {layer.kpis.map((kpi, kIdx) => (
                          <span key={kIdx} className="px-2 py-0.5 rounded-full text-[11px] bg-slate-900 text-emerald-300 border border-emerald-500/30 font-mono">
                            ✓ {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Section 3: Operating Cadence */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-teal-400" />
                    <span>3. Global Operating Cadence</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Structured operational rhythms from sub-second real-time telemetry to the annual global summit.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-slate-400">Frequency:</span>
                  {['All', 'Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annually'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setSelectedCadence(freq)}
                      className={`px-2.5 py-1 rounded-lg transition ${
                        selectedCadence === freq
                          ? 'bg-teal-600 text-white font-bold'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {FLOWFORGE_GLOBAL_OPERATING_MODEL.cadence
                  .filter(c => selectedCadence === 'All' || c.frequency === selectedCadence)
                  .map((item: OperatingCadenceInterval, idx) => (
                    <div key={idx} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-teal-500/40 transition">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.frequency === 'Daily' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            item.frequency === 'Weekly' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' :
                            item.frequency === 'Monthly' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                            item.frequency === 'Quarterly' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                            'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          }`}>
                            {item.frequency} Cadence
                          </span>
                          <span className="text-sm font-bold text-white">{item.focusSummary}</span>
                        </div>
                        <div className="text-xs text-slate-400">
                          Stakeholders: <span className="text-slate-200">{item.stakeholders.join(', ')}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1.5">
                          <span className="text-xs font-semibold text-slate-400 uppercase">Core Actions:</span>
                          {item.actions.map((action, aIdx) => (
                            <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800 space-y-1.5">
                          <span className="text-xs font-semibold text-teal-300 uppercase">Deliverables & Outputs:</span>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.deliverables.map((del, dIdx) => (
                              <span key={dIdx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs">
                                📄 {del}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: ENTERPRISE FINANCIAL MODEL ==================== */}
        {activeTab === 'financial_model' && (
          <div className="space-y-6">
            {/* Section 1: Revenue Streams - SaaS Subscriptions */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    <span>1. Core Revenue Streams — SaaS Subscriptions</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Three standardized recurring tiers delivering predictable high-margin subscription cash flow.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Recurring ARR
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.saasPlans.map((plan: SaaSPlanTier, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`rounded-xl p-5 border cursor-pointer transition flex flex-col justify-between ${
                      selectedPlan === plan.name
                        ? 'bg-emerald-950/30 border-emerald-500 shadow-xl'
                        : 'bg-slate-800/50 border-slate-700/60 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          {plan.marginProfile}
                        </span>
                        {plan.name === 'Governance + Autonomy' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            MOST POPULAR
                          </span>
                        )}
                        {plan.name === 'Full Intelligence' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                            ENTERPRISE FLAGSHIP
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-black text-white">{plan.name}</h3>
                      <div className="my-3">
                        <span className="text-3xl font-black text-white">${plan.monthlyPrice.toLocaleString()}</span>
                        <span className="text-xs text-slate-400"> / month</span>
                        <div className="text-xs text-emerald-400 mt-0.5 font-medium">
                          ${plan.annualPricePerMonth.toLocaleString()} / mo billed annually
                        </div>
                      </div>

                      <div className="text-xs text-slate-300 font-medium mb-3 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                        Target Squad: <strong className="text-white">{plan.targetSquadSize}</strong>
                      </div>

                      <div className="space-y-2 mb-4">
                        <span className="text-xs font-semibold text-slate-400">Included Capabilities:</span>
                        {plan.coreFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-700/50 text-[11px] text-slate-400">
                      SLA: <span className="text-slate-200">{plan.supportSLA}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ancillary Revenue Streams Grid */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h3 className="text-base font-bold text-white mb-3">Ancillary & High-Margin Services Revenue</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.ancillaryRevenueStreams.map((anc, idx) => (
                    <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                      <span className="text-xs font-bold text-indigo-400">{anc.streamName}</span>
                      <div className="text-lg font-black text-white my-1">{anc.unitPricing}</div>
                      <p className="text-xs text-slate-400 mb-3">{anc.description}</p>
                      <div className="text-[11px] text-emerald-300 font-mono bg-slate-900/70 p-2 rounded border border-slate-800">
                        Yr 3 Target: {anc.annualVolumeYear3}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Cost Structure */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <PieChart className="w-5 h-5 text-teal-400" />
                    <span>2. Cost Structure (Fixed vs. Variable)</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Lean capital efficiency ensuring &gt;84% gross margins and scalable operational leverage.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Unit Economics
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Fixed Operational Costs (Year 1 vs. Year 3)</h3>
                  <div className="space-y-2.5">
                    {FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.costStructure.fixedCosts.map((fc, idx) => (
                      <div key={idx} className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/40 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white">{fc.category}</span>
                          <span className="text-slate-400 ml-2">({fc.percentage}% of budget)</span>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-400 mr-2">Y1: ${fc.year1.toLocaleString()}</span>
                          <strong className="text-emerald-400">Y3: ${fc.year3.toLocaleString()}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Variable & Transactional Costs</h3>
                  <div className="space-y-2.5">
                    {FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.costStructure.variableCosts.map((vc, idx) => (
                      <div key={idx} className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/40 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-white">{vc.item}</span>
                          <div className="text-slate-400 mt-0.5">{vc.unitCost}</div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                          {vc.grossMargin}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 text-xs text-slate-300">
                    <strong className="text-emerald-300">Software Gross Margin Invariant: </strong>
                    FlowForge targets sustained 86% blended SaaS gross margins, allowing net operating cash flow to fund global partner expansion and research without dilutive late-stage secondary financing.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: 5-Year Financial Projections */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <span>3. Five-Year Financial Projections (2027–2031)</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Conservative revenue benchmarks scaling from initial pilot penetration to global category standardization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                {FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.projections.map((p: FinancialProjectionYear) => (
                  <div
                    key={p.year}
                    onClick={() => setSelectedYear(p.year)}
                    className={`p-4 rounded-xl border cursor-pointer transition ${
                      selectedYear === p.year
                        ? 'bg-emerald-950/40 border-emerald-500 shadow-lg'
                        : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-white">{p.year}</span>
                      <span className="text-slate-400 font-mono">{p.period}</span>
                    </div>
                    <div className="text-xl font-black text-emerald-400 my-1">{p.revenueDisplay}</div>
                    <div className="text-[11px] text-slate-300 line-clamp-2">{p.strategicFocus}</div>
                    <div className="mt-3 pt-2 border-t border-slate-700/50 flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>{p.squadsCovered}</span>
                      <span className="text-indigo-300">{p.headcount} Team</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Year Detail Callout */}
              {(() => {
                const yearData = FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.projections.find(p => p.year === selectedYear) || FLOWFORGE_ENTERPRISE_FINANCIAL_MODEL.projections[2];
                return (
                  <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-xs uppercase font-mono font-bold text-emerald-400">{yearData.year} Deep Dive ({yearData.period})</span>
                        <h3 className="text-lg font-bold text-white">Target ARR: {yearData.revenueDisplay}</h3>
                      </div>
                      <div className="flex items-center space-x-3 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-700">Gross Margin: {yearData.grossMarginPct}%</span>
                        <span className="px-2.5 py-1 rounded bg-slate-900 text-indigo-300 border border-slate-700">Headcount: {yearData.headcount} FTE</span>
                        <span className="px-2.5 py-1 rounded bg-slate-900 text-emerald-300 border border-slate-700">Protected Squads: {yearData.squadsCovered}</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 mb-3">
                      <strong>Strategic Mandate: </strong> {yearData.strategicFocus}
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-slate-400">Core Growth Drivers:</span>
                      {yearData.keyDrivers.map((driver, dIdx) => (
                        <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{driver}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* ==================== TAB 3: PARTNER REVENUE MODEL ==================== */}
        {activeTab === 'partner_revenue' && (
          <div className="space-y-6">
            {/* Overview & Tier Architecture */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Handshake className="w-5 h-5 text-purple-400" />
                    <span>FlowForge Partner Revenue Model</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Empowering Global Systems Integrators, regional boutique consultancies, and independent architects to build $1M+ recurring advisory and certification practices.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Global Channel Ecosystem
                </span>
              </div>

              {/* Partner Tiers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {FLOWFORGE_PARTNER_REVENUE_MODEL.partnerTiers.map((tier: PartnerTier, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${tier.badgeColor}`}>
                          {tier.level}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">Tier {idx + 1}</span>
                      </div>
                      <p className="text-xs text-slate-300 mb-3 min-h-[36px]">{tier.qualification}</p>

                      <div className="space-y-2 mb-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Co-Sell Rev Share:</span>
                          <strong className="text-emerald-400">{tier.coSellRevSharePct}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">ESA Bounty:</span>
                          <strong className="text-purple-300">{tier.esaBounty}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Cert Royalty:</span>
                          <strong className="text-teal-300">{tier.certSharePct}</strong>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-300 mb-2">
                        <span className="font-semibold text-slate-400">Consulting Rates:</span>
                        <div className="text-[10px] text-slate-300 mt-1 space-y-0.5">
                          <div>Gov: <strong className="text-white">{tier.consultingHourlyRates.governance}</strong></div>
                          <div>Autonomy: <strong className="text-white">{tier.consultingHourlyRates.autonomy}</strong></div>
                          <div>Intel: <strong className="text-white">{tier.consultingHourlyRates.intelligence}</strong></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-700/50 space-y-1">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">Key Perks:</span>
                      {tier.incentives.slice(0, 2).map((inc, iIdx) => (
                        <div key={iIdx} className="text-[10px] text-slate-300 flex items-start space-x-1">
                          <span className="text-purple-400">•</span>
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Revenue Streams Breakdown */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">6 Enterprise Partner Revenue Streams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FLOWFORGE_PARTNER_REVENUE_MODEL.partnerStreams.map((stream, idx) => (
                  <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60">
                    <h3 className="text-sm font-bold text-purple-300 mb-1">{stream.title}</h3>
                    <p className="text-xs text-slate-300 mb-3">{stream.description}</p>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs mb-2">
                      <span className="text-slate-400">Earning Rate: </span>
                      <strong className="text-emerald-400">{stream.earningRate}</strong>
                    </div>
                    <div className="text-[11px] text-slate-400 italic">
                      Example: {stream.exampleMath}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Partner Revenue Calculator */}
            <div className="bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-purple-400" />
                    <span>Interactive Partner Practice Earnings Simulator</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Calculate your agency or consultancy's immediate, recurring, and advisory gross income.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Practice Simulator
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Tier Selection */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Select Partner Accreditation Tier:</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Registered', 'Certified', 'Advanced', 'Elite'].map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setPartnerCalculatorTier(tier)}
                          className={`py-2 px-2 text-xs font-bold rounded-lg border transition ${
                            partnerCalculatorTier === tier
                              ? 'bg-purple-600 border-purple-400 text-white shadow'
                              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Range Sliders */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Co-Sold Subscriptions / Month:</span>
                        <strong className="text-purple-300">{monthlyCoSoldDeals} Deals</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={monthlyCoSoldDeals}
                        onChange={(e) => setMonthlyCoSoldDeals(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">ESAs Delivered / Quarter:</span>
                        <strong className="text-purple-300">{quarterlyESAs} Audits</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                        value={quarterlyESAs}
                        onChange={(e) => setQuarterlyESAs(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Cert Students Trained / Year:</span>
                        <strong className="text-purple-300">{certifiedStudentsAnnual} Students</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="10"
                        value={certifiedStudentsAnnual}
                        onChange={(e) => setCertifiedStudentsAnnual(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Gov Implementation (hrs/mo):</span>
                        <strong className="text-purple-300">{monthlyGovHours} hrs ($350/hr)</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={monthlyGovHours}
                        onChange={(e) => setMonthlyGovHours(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Autonomy Rollout (hrs/mo):</span>
                        <strong className="text-purple-300">{monthlyAutonomyHours} hrs ($500/hr)</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="80"
                        step="5"
                        value={monthlyAutonomyHours}
                        onChange={(e) => setMonthlyAutonomyHours(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Intelligence Risk (hrs/mo):</span>
                        <strong className="text-purple-300">{monthlyIntelHours} hrs ($600/hr)</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="60"
                        step="5"
                        value={monthlyIntelHours}
                        onChange={(e) => setMonthlyIntelHours(parseInt(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Outputs Column */}
                <div className="lg:col-span-5 bg-slate-900/90 border border-purple-500/40 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase font-mono font-bold text-purple-400">Calculated Annual Partner Yield</span>
                    <div className="my-2">
                      <div className="text-3xl sm:text-4xl font-black text-white">
                        ${Math.round(calculatedPartnerEarnings.totalAnnualEarnings).toLocaleString()}
                      </div>
                      <div className="text-xs text-emerald-400 font-semibold mt-1">
                        ~${Math.round(calculatedPartnerEarnings.monthlyAverage).toLocaleString()} / month average gross revenue
                      </div>
                    </div>

                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-800 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Co-Sell Recurring ARR Share:</span>
                        <strong className="text-emerald-400">${Math.round(calculatedPartnerEarnings.annualCoSellEarnings).toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">ESA Audit Delivery Bounties:</span>
                        <strong className="text-purple-300">${Math.round(calculatedPartnerEarnings.annualESAEarnings).toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Certification Royalties:</span>
                        <strong className="text-teal-300">${Math.round(calculatedPartnerEarnings.annualCertEarnings).toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Professional Advisory Services:</span>
                        <strong className="text-amber-300">${Math.round(calculatedPartnerEarnings.annualConsultingServices).toLocaleString()}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    Calculated under <strong>{calculatedPartnerEarnings.tierName} Tier</strong> incentives with average annual contract values of $42,000.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: TECHNICAL ARCHITECTURE ==================== */}
        {activeTab === 'technical_architecture' && (
          <div className="space-y-6">
            {/* Architecture Overview & Layer Selector */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    <span>FlowForge Stability OS Technical Architecture</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Complete 5-layer engineering specification for real-time telemetry, deterministic policy governance, closed-loop autonomy, and probabilistic Bayesian forecasting.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  System Blueprint v10.0
                </span>
              </div>

              {/* Five Layer Visual Topology Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-5">
                {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.layers.map((lyr: ArchitectureLayerSpec) => (
                  <button
                    key={lyr.layerNumber}
                    onClick={() => setSelectedArchLayer(lyr.layerNumber)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                      selectedArchLayer === lyr.layerNumber
                        ? 'bg-amber-950/40 border-amber-500 shadow-lg'
                        : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                        Layer {lyr.layerNumber}
                      </span>
                      <h4 className="text-xs font-bold text-white mt-0.5">{lyr.name}</h4>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-2 line-clamp-1">
                      {lyr.purpose}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Layer Technical Detail Card */}
              {(() => {
                const activeLayer = FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.layers.find(l => l.layerNumber === selectedArchLayer) || FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.layers[0];
                return (
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-700/60">
                      <div>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                          Layer {activeLayer.layerNumber} Specification
                        </span>
                        <h3 className="text-xl font-black text-white mt-1">{activeLayer.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">{activeLayer.purpose}</p>
                      </div>
                      <div className="text-right text-xs font-mono">
                        <span className="text-slate-400">Security & SLA: </span>
                        <span className="text-emerald-400 font-bold">{activeLayer.securityAndSLA}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left: Telemetry & Capabilities */}
                      <div className="space-y-4">
                        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                            Telemetry Ingested / Governed:
                          </h4>
                          <div className="space-y-1.5">
                            {activeLayer.telemetryIngestedOrManaged.map((tel, tIdx) => (
                              <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                                <span className="text-amber-400 font-mono">•</span>
                                <span>{tel}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                            Key Functional Capabilities:
                          </h4>
                          <div className="space-y-1.5">
                            {activeLayer.capabilities.map((cap, cIdx) => (
                              <div key={cIdx} className="flex items-start space-x-2 text-xs text-slate-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Concrete Tech Stack */}
                      <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                          Production Technology Stack:
                        </h4>

                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">Languages & Frameworks:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {activeLayer.techStack.languagesAndFrameworks.map((lang, lIdx) => (
                              <span key={lIdx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono">
                                ⚙️ {lang}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">Data Stores & Streaming Buses:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {activeLayer.techStack.dataStoresAndStreaming.map((ds, dIdx) => (
                              <span key={dIdx} className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 border border-slate-700 text-xs font-mono">
                                🗄️ {ds}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">Algorithms & Inference Engines:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {activeLayer.techStack.algorithmsAndEngines.map((alg, aIdx) => (
                              <span key={aIdx} className="px-2.5 py-1 rounded bg-slate-800 text-purple-300 border border-slate-700 text-xs font-mono">
                                🧮 {alg}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">APIs, Webhooks & Integrations:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {activeLayer.techStack.apisAndInterfaces.map((api, apIdx) => (
                              <span key={apIdx} className="px-2.5 py-1 rounded bg-slate-800 text-amber-300 border border-slate-700 text-xs font-mono">
                                🔌 {api}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Frontend & Cloud Deployment Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Frontend Spec */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Server className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Frontend Architecture & Visualization</h3>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  High-performance real-time UI rendered with zero layout shift, low cognitive friction, and sub-100ms state transitions.
                </p>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">Stack Components:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.frontendSpec.stack.map((item, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700 text-[11px] font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">User Interface Capabilities:</span>
                    <div className="space-y-1 mt-1 text-slate-300">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.frontendSpec.coreCapabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">Performance Benchmarks:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.frontendSpec.performanceTargets.map((tgt, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-mono text-[10px]">
                          ⚡ {tgt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Deployment & Cloud Spec */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <HardDrive className="w-5 h-5 text-orange-400" />
                  <h3 className="text-base font-bold text-white">Cloud Deployment & Microservices Runtime</h3>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Multi-region distributed container runtime delivering 99.99% availability with zero source-code storage.
                </p>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">Runtime & Orchestration:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.deploymentSpec.runtime.concat(FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.deploymentSpec.orchestration).map((rt, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-orange-300 border border-slate-700 text-[11px] font-mono">
                          {rt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">Observability & Telemetry Mesh:</span>
                    <div className="space-y-1 mt-1 text-slate-300">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.deploymentSpec.observability.map((obs, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                          <span>{obs}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <span className="font-semibold text-slate-400 uppercase text-[10px]">Security & Enterprise Compliance:</span>
                    <div className="space-y-1 mt-1 text-slate-300">
                      {FLOWFORGE_STABILITY_OS_TECHNICAL_ARCHITECTURE.deploymentSpec.securityAndCompliance.map((sec, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{sec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: MASTER DOSSIER ==================== */}
        {activeTab === 'master_dossier' && (
          <div className="space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                    <Download className="w-5 h-5 text-indigo-400" />
                    <span>Master Dossier (Part X — Final Master Delivery)</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Consolidated markdown export uniting Global Operating Model, Enterprise Financial Model, Partner Revenue Model, and Technical Architecture.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => copyToClipboard(generateMasterDossierMarkdown(), 'dossier_tab')}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center space-x-2 transition shadow-lg"
                  >
                    {copiedSection === 'dossier_tab' ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedSection === 'dossier_tab' ? 'Copied to Clipboard!' : 'Copy Full Markdown Dossier'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 font-mono text-xs text-slate-300 max-h-[600px] overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
                {generateMasterDossierMarkdown()}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
